import './processWikiEditor.less';
import * as OPTIONS from '../options.json';
import {MwUri} from 'ext.gadget.Util';
import {VARIANTS} from './constant';
/**
 * @description Add a "Preview with variant" option to the edit form.
 *
 * @param {JQuery} $editForm
 */
const processWikiEditor = ($editForm: JQuery<HTMLElement>): void => {
	// Guard against double inclusions
	if (mw.config.get(OPTIONS.configKey)) {
		return;
	}

	const {wgPageContentModel, wgUserVariant} = mw.config.get();
	const $templateSandboxPreview: JQuery = $editForm.find('input[name="wpTemplateSandboxPreview"]');

	// It is possible that a user want to preview a page with a non-wikitext module
	// Do not return in this case
	if (wgPageContentModel !== 'wikitext' && !$templateSandboxPreview.length) {
		return;
	}

	const $layout: JQuery = $editForm.find('.editCheckboxes .oo-ui-horizontalLayout');
	if (!$layout.length) {
		return;
	}

	mw.config.set(OPTIONS.configKey, true);

	const uriVariant: string | null = mw.util.getParamValue('variant');

	const checkbox: OO.ui.CheckboxInputWidget = new OO.ui.CheckboxInputWidget({
		selected: Boolean(uriVariant),
	});

	const dropdown: OO.ui.DropdownWidget = new OO.ui.DropdownWidget({
		$overlay: true,
		disabled: !checkbox.isSelected(),
		menu: {
			items: VARIANTS.map(({data, label}): OO.ui.MenuOptionWidget => {
				return new OO.ui.MenuOptionWidget({
					data,
					label,
				});
			}),
		},
	});

	dropdown.getMenu().selectItemByData(wgUserVariant || uriVariant || mw.user.options.get('variant'));

	checkbox.on('change', (selected: boolean | string): void => {
		dropdown.setDisabled(!selected);
	});

	const getSelectedVariant = (): string | undefined => {
		if (!checkbox.isSelected()) {
			return;
		}
		const selectedItem: OO.ui.OptionWidget | null = dropdown
			.getMenu()
			.findSelectedItem() as OO.ui.OptionWidget | null;
		return selectedItem ? (selectedItem.getData() as string) : undefined;
	};

	const manipulateActionUrl = (): void => {
		const selectedVariant: string | undefined = getSelectedVariant();
		const originalAction: string | undefined = $editForm.attr('action');
		if (selectedVariant && originalAction) {
			$editForm.attr(
				'action',
				new MwUri(originalAction)
					.extend({
						variant: selectedVariant,
					})
					.getRelativePath()
			);
		}
	};

	const manipulateVariantConfig = (): void => {
		mw.config.set('wgUserVariant', getSelectedVariant() || (mw.user.options.get('variant') as string));
	};

	$editForm
		.find('input[name=wpPreview]')
		.on('click', mw.user.options.get('uselivepreview') ? manipulateVariantConfig : manipulateActionUrl);

	$templateSandboxPreview.on('click', manipulateActionUrl);

	dropdown.getMenu().on('select', manipulateVariantConfig);

	const checkboxField: OO.ui.FieldLayout<OO.ui.CheckboxInputWidget> = new OO.ui.FieldLayout(checkbox, {
		align: 'inline',
		label: window.wgULS('预览字词转换', '預覽字詞轉換'),
	});

	const dropdownField: OO.ui.FieldLayout<OO.ui.DropdownWidget> = new OO.ui.FieldLayout(dropdown, {
		align: 'top',
		label: window.wgULS('使用该语言变体显示预览：', '使用該語言變體顯示預覽：'),
		invisibleLabel: true,
	});

	$layout.append($('<div>').attr('id', 'pwv-area').append(checkboxField.$element, dropdownField.$element));
};

export {processWikiEditor};
