// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import './processVisualEditor.less';
import * as OPTIONS from '../options.json';
import {DATA} from './constant';
import {PWV2017messages} from './messages';

PWV2017messages();

const PendingStackLayout = function PendingStackLayout(config) {
	PendingStackLayout.super.call(this, config);
	OO.ui.mixin.PendingElement.call(this);
	this.$element.addClass('pwv-2017-pendingStackLayout');
};

OO.inheritClass(PendingStackLayout, OO.ui.StackLayout);
OO.mixinClass(PendingStackLayout, OO.ui.mixin.PendingElement);

const processVisualEditor = ($body) => {
	const {skin, wgUserLanguage, wgUserVariant} = mw.config.get();
	let variant, target, saveDialog, dropdown, stackLayout, panelLayouts, windowManager, errorDialog;

	const constructDocument = (title, wikitext, categories) => {
		const $result = $('<div>').addClass('mw-body mw-body-content');

		if (skin === 'vector') {
			// Additional classes required in vector to get correct appearance
			$result.addClass('vector-body');
		}

		$result.append(
			$('<h1>').addClass('firstHeading').html(title),
			// Classes used here:
			// * mw-content-ltr
			// * mw-content-rtl
			$('<div>')
				.addClass(`mw-content-${mw.config.get('wgVisualEditor').pageLanguageDir}`)
				.attr(
					'lang',
					DATA.find((item) => {
						return item.var === variant;
					}).htmlLang
				)
				.html(wikitext),
			$.parseHTML(categories)
		);

		// Make other things like Reference Tooltip function
		mw.hook('wikipage.content').fire($result);
		// eslint-disable-next-line no-undef
		ve.targetLinksToNewWindow($result[0]);
		return $result;
	};

	const fetchPreview = () => {
		const deferred = $.Deferred();
		// Currently (Aug 2021), Parsoid API does not have full LC functionality,
		// hence use parse API instead.
		target
			.getContentApi()
			.post({
				action: 'parse',
				disableeditsection: true,
				errorformat: 'html',
				errorlang: wgUserLanguage,
				errorsuselocal: true,
				formatversion: '2',
				prop: ['text', 'indicators', 'displaytitle', 'categorieshtml', 'parsewarningshtml'],
				pst: true,
				preview: true,
				title: target.getPageName(),
				text: target.getDocToSave(),
				uselang: wgUserLanguage,
				variant,
			})
			.then(
				(response) => {
					void deferred.resolve(
						constructDocument(
							response.parse.displaytitle,
							response.parse.text,
							response.parse.categorieshtml
						)
					);
				},
				(error, detail) => {
					void deferred.reject(detail);
				}
			);
		return deferred;
	};

	const changeVariant = function changeVariant(val) {
		saveDialog.previewPanel.$element[0].focus();
		variant = val;

		const targetPanel = stackLayout.findItemFromData(variant);
		if (targetPanel.$element.children().length) {
			stackLayout.setItem(targetPanel);
		} else {
			stackLayout.pushPending();
			dropdown.setDisabled(true);

			void fetchPreview()
				.then(
					($previewContainer) => {
						targetPanel.$element.append($previewContainer);
						stackLayout.setItem(targetPanel);
					},
					(error) => {
						windowManager
							.openWindow(errorDialog, {
								title: OO.ui.msg('ooui-dialog-process-error'),
								message: window.ve.init.target.getContentApi().getErrorMessage(error),
								actions: [
									{
										action: 'reject',
										label: OO.ui.deferMsg('ooui-dialog-message-reject'),
										flags: 'safe',
									},
									{
										action: 'retry',
										label: OO.ui.deferMsg('ooui-dialog-process-retry'),
										flags: ['primary', 'progressive'],
									},
								],
							})
							.closed.then((data) => {
								if (data && data.action === 'retry') {
									// Do not use setValue() since it will not trigger event
									changeVariant(variant);
								} else {
									// "variant" will be set by event handler
									dropdown.setValue(stackLayout.getCurrentItem().getData());
								}
							});
					}
				)
				.always(() => {
					stackLayout.popPending();
					dropdown.setDisabled(false);
				});
		}
	};

	const previewWithVariant = () => {
		const currentPanel = stackLayout.getCurrentItem();

		if (currentPanel.$element.children().length) {
			saveDialog.swapPanel('preview');
			saveDialog.previewPanel.$element.prepend(dropdown.$element);
		} else {
			target.emit('savePreview');
			saveDialog.pushPending();

			void fetchPreview()
				.then(
					($previewContent) => {
						target
							.getSurface()
							.getModel()
							.getDocument()
							.once('transact', () => {
								for (const item of panelLayouts) {
									item.$element.empty();
								}
							});
						saveDialog.swapPanel('preview');
						currentPanel.$element.append($previewContent);
						stackLayout.setItem(stackLayout.findItemFromData(variant));
						if (!saveDialog.$element.find(`.${OPTIONS.className}`).length) {
							saveDialog.previewPanel.$element.prepend(dropdown.$element);
						}
					},
					(error) => {
						saveDialog.showErrors(
							new OO.ui.Error(window.ve.init.target.getContentApi().getErrorMessage(error), {
								recoverable: true,
							})
						);
					}
				)
				.always(() => {
					saveDialog.popPending();
				});
		}
	};

	const init = () => {
		variant = wgUserVariant;
		({target} = window.ve.init);
		({saveDialog} = target);
		// eslint-disable-next-line mediawiki/class-doc
		dropdown = new OO.ui.DropdownInputWidget({
			$overlay: saveDialog.$overlay,
			classes: [OPTIONS.className],
			options: [
				{
					optgroup: mw.msg('pwv-2017-caption'),
				},
				...DATA.map((item) => {
					return {
						data: item.var,
						label: mw.msg(item.msg) /* eslint-disable-line mediawiki/msg-doc */,
					};
				}),
			],
			value: variant,
		});
		dropdown.on('change', changeVariant);
		panelLayouts = DATA.map((item) => {
			return new OO.ui.PanelLayout({
				expanded: false,
				data: item.var,
			});
		});
		stackLayout = new PendingStackLayout({
			expanded: false,
			items: panelLayouts,
		});
		stackLayout.setItem(stackLayout.findItemFromData(variant));
		saveDialog.previewPanel.$element.append(stackLayout.$element);
		errorDialog = new OO.ui.MessageDialog();
		windowManager = new OO.ui.WindowManager();
		windowManager.addWindows([errorDialog]);
		$body.append(windowManager.$element);

		const handlerToRemove = 'onSaveDialogPreview';
		saveDialog.off('preview', handlerToRemove, target).on('preview', previewWithVariant);

		// Reinitialization is required for switching between VisualEditor and New Wikitext Editor (2017)
		mw.hook('ve.activationComplete').add(() => {
			if (mw.config.get(OPTIONS.configKey)) {
				mw.config.set(OPTIONS.configKey, false);
			}
		});
	};

	// Guard against double inclusions
	if (!mw.config.get(OPTIONS.configKey)) {
		init();

		// Set guard
		mw.config.set(OPTIONS.configKey, true);
	}
};

export {processVisualEditor};
