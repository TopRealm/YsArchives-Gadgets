import {getBody} from 'ext.gadget.Util';
import {getMessage} from './modules/i18n';

const getPrintOptions = ($body: JQuery<HTMLBodyElement>) => {
	let windowManager: OO.ui.WindowManager;
	let printDialog: OO.ui.ProcessDialog;

	const printOptions = {
		enhanced: true,
		noimages: false,
		norefs: false,
		notoc: false,
		nobackground: false,
		blacktext: true,

		install: () => {
			const $printLink = $body.find('#t-print a');
			if (!$printLink.length) {
				return;
			}

			$printLink
				.off('click')
				.get(0)
				?.addEventListener(
					'click',
					(event) => {
						event.stopPropagation();
						event.preventDefault();
						printOptions.createWindow();
					}, // Use capturing phase, to beat the other click listener
					true
				);
		},

		createWindow: () => {
			class PrintDialog extends OO.ui.ProcessDialog {
				private panel: OO.ui.PanelLayout | undefined;
				private content: OO.ui.FieldsetLayout | undefined;
				private $body: JQuery | undefined;

				private questions: {
					label: string;
					type: string;
					checked: boolean;
					returnvalue: string;
					widget?: OO.ui.CheckboxInputWidget;
				}[] = [
					{
						label: '隐藏界面元素',
						type: 'checkbox',
						checked: true,
						returnvalue: 'enhanced',
					},
					{
						label: '隐藏图片',
						type: 'checkbox',
						checked: false,
						returnvalue: 'noimages',
					},
					{
						label: '隐藏参考文献',
						type: 'checkbox',
						checked: false,
						returnvalue: 'norefs',
					},
					{
						label: '隐藏目录',
						type: 'checkbox',
						checked: false,
						returnvalue: 'notoc',
					},
					{
						label: '移除背景（您的浏览器或可以覆盖本设置）',
						type: 'checkbox',
						checked: false,
						returnvalue: 'nobackground',
					},
					{
						label: '强制将所有文字设置为黑色',
						type: 'checkbox',
						checked: true,
						returnvalue: 'blacktext',
					},
				];

				public override initialize(): this {
					let checkboxInputWidget;
					const fieldLayouts = [];

					super.initialize();

					this.panel = new OO.ui.PanelLayout({
						expanded: false,
						padded: true,
					});

					this.content = new OO.ui.FieldsetLayout();
					for (const question of this.questions) {
						const {checked, label, type} = question;
						if (type !== 'checkbox') {
							continue;
						}
						checkboxInputWidget = new OO.ui.CheckboxInputWidget({
							selected: checked,
						});
						question.widget = checkboxInputWidget;
						fieldLayouts[fieldLayouts.length] = new OO.ui.FieldLayout(checkboxInputWidget, {
							label,
							align: 'inline',
						});
					}
					this.content.addItems(fieldLayouts);

					this.panel.$element.append(this.content.$element);
					this.panel.$element.appendTo(this.$body as JQuery);

					return this;
				}

				public override getActionProcess(action?: string): OO.ui.Process {
					const self = this;
					if (action === 'print') {
						return new OO.ui.Process(() => {
							// Get values of checkboxes
							for (const question of this.questions) {
								if (question.type === 'checkbox' && question.widget) {
									Object.defineProperty(printOptions, question.returnvalue, {
										value: question.widget.isSelected(),
										writable: true,
									});
								}
							}

							void self.close({action}).closed.then(() => {
								printOptions.changePrintCSS();
								printOptions.otherEnhancements();
								window.print();
							});
						});
					}

					return super.getActionProcess(action);
				}
			}

			// OO.inheritClass(PrintDialog, OO.ui.ProcessDialog);
			PrintDialog.static = {
				...OO.ui.ProcessDialog.static,
			};
			PrintDialog.static.name = 'PrintDialog';
			PrintDialog.static.title = getMessage('Print this page');
			PrintDialog.static.actions = [
				{
					action: 'print',
					label: getMessage('Print'),
					flags: ['primary', 'progressive'],
				},
				{
					label: getMessage('Cancel'),
					flags: ['safe', 'close'],
				},
			];

			if (!windowManager) {
				windowManager = new OO.ui.WindowManager();
				$body.append(windowManager.$element);
			}

			if (!printDialog) {
				printDialog = new PrintDialog({
					size: 'medium',
				});
				windowManager.addWindows([printDialog]);
			}

			void windowManager.openWindow(printDialog);
		},

		changePrintCSS() {
			/* Here we:
			 * - disable stylesheets that are print specific
			 * - make screen specific stylesheets also enabled for print medium
			 * - remove print specific stylerules
			 * - make screen specific stylerules also enabled for print medium
			 */
			if (this.enhanced === false) {
				for (const stylesheet of document.styleSheets) {
					const {media} = stylesheet;
					if (!media) {
						continue;
					}

					if (media.mediaText && media.mediaText.includes('print')) {
						if (!media.mediaText.includes('screen')) {
							stylesheet.disabled = true;
						}
					} else if (
						media.mediaText &&
						media.mediaText.includes('screen') &&
						!media.mediaText.includes('print')
					) {
						try {
							media.appendMedium('print');
						} catch {
							media.mediaText += ',print';
						}
					}

					/* now test individual stylesheet rules */
					let rules;
					try {
						rules = stylesheet.cssRules || stylesheet.rules;
					} catch {
						/* Cross domain issue. */
						mw.log.warn('Not possible to correct stylesheet due to cross origin restrictions.');
						continue;
					}

					if (!rules) {
						continue;
					}

					for (let j = 0; j < rules.length; j++) {
						const rule = rules[j] as unknown as StyleSheet;

						let hasPrint = false;
						let hasScreen = false;

						if (!rule) {
							continue;
						}

						if ((rule as unknown as CSSRule).type === CSSRule.MEDIA_RULE && rule.media) {
							for (const ruleMedia of rule.media) {
								if (ruleMedia === 'print') {
									hasPrint = true;
								} else if (ruleMedia === 'screen') {
									hasScreen = true;
								}
							}
						} else {
							continue;
						}

						if (hasPrint && !hasScreen) {
							stylesheet.deleteRule(j);
							j--;
						} else if (rule && hasScreen && !hasPrint) {
							try {
								rule.media.appendMedium('print');
							} catch {
								rule.media.mediaText += ',print';
							}
						}
					}
				}
			}

			let printStyle = '';
			/* Add css to hide images */
			if (this.noimages) {
				printStyle += 'img,.thumb{display:none}';
			}
			/* Add css to hide references markers and the references lists */
			if (this.norefs) {
				printStyle += '.mw-headline[id="References"],ol.references,.reference{display:none}';
			}
			if (this.notoc) {
				printStyle += '#toc,.toc{display:none}';
			}
			if (this.nobackground) {
				printStyle += '*{background:none !important}';
			}
			if (this.blacktext) {
				printStyle += '*{color:#000 !important}';
			}

			if (printStyle) {
				document.querySelector('#printStyle')?.remove();
				const styleTag = document.createElement('style');
				styleTag.id = 'printStyle';
				styleTag.media = 'print';
				styleTag.append(document.createTextNode(printStyle));
				document.head.append(styleTag);
			}
		},

		/* Rewrite the "retrieved from" url to be readable */
		otherEnhancements: () => {
			const link = $body.find('div.printfooter a');
			link.text(decodeURI(link.text()));
		},
	};

	return printOptions;
};

void getBody().then(function printOptionsLoad($body) {
	if (mw.config.get('wgNamespaceNumber') < 0) {
		return;
	}
	const printOptions = getPrintOptions($body);
	// This can be before the click listener by MW is installed. Instead,
	// re-add ourselves to the back of the document.ready list
	// use async timeoute to do this
	setTimeout(printOptions.install, 0);
});
