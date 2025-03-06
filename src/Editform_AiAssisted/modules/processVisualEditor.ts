import * as OPTIONS from '~/Editform_AiAssisted/options.json';
import {getMessage} from './i18n';

const processVisualEditor = (): void => {
	// Guard against double inclusions
	if (mw.config.get(OPTIONS.configKeyVe)) {
		return;
	}

	const {target} = window.ve.init;
	const {saveDialog, saveFields} = target;
	const {$saveCheckboxes} = saveDialog;
	if (!$saveCheckboxes.length) {
		return;
	}

	// Set guard
	mw.config.set(OPTIONS.configKeyVe, true);

	const checkbox: OO.ui.CheckboxInputWidget = new OO.ui.CheckboxInputWidget({
		selected: false,
	});

	checkbox.setInputId(OPTIONS.inputId);

	checkbox.on('change', (): void => {
		const changeTag: string = OPTIONS.changeTag;
		const generateChangeTags = (originChangeTags: string): string => {
			return checkbox.isSelected()
				? `${originChangeTags},${changeTag}`
				: originChangeTags.replace(`,${changeTag}`, '');
		};

		let changeTags: string = '';
		changeTags = generateChangeTags(saveFields.wpChangeTags?.() ?? '');
		saveFields.wpChangeTags = (): string => {
			return changeTags;
		};
	});

	const checkboxLayout: OO.ui.FieldLayout<OO.ui.CheckboxInputWidget> = new OO.ui.FieldLayout(checkbox, {
		align: 'inline',
		label: getMessage('AiAssisted'),
	});

	if (!saveDialog.$element.find(`#${OPTIONS.inputId}`).length) {
		$saveCheckboxes.append(checkboxLayout.$element);
	}

	// Reinitialization is required for switching between VisualEditor and New Wikitext Editor (2017)
	mw.hook('ve.activationComplete').add(() => {
		if (mw.config.get(OPTIONS.configKeyVe)) {
			mw.config.set(OPTIONS.configKeyVe, false);
		}
	});
};

export {processVisualEditor};
