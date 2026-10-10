// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/*! Twinkle.js - twinkleunlink.js */
import {createApp, h, reactive} from 'vue';
import TwUnlinkDialog from './ui/TwUnlinkDialog.vue';

(function twinkleunlink() {
	/**
	 * twinkleunlink.js: Unlink module
	 * Mode of invocation: Tab ("Unlink")
	 * Active on: Non-special pages, except LIB:沙盒
	 */
	Twinkle.unlink = () => {
		if (
			mw.config.get('wgNamespaceNumber') < 0 ||
			mw.config.get('wgPageName') === Twinkle.getPref('sandboxPage') ||
			!Morebits.userIsSysop
		) {
			return;
		}
		Twinkle.addPortletLink(
			Twinkle.unlink.callback,
			window.wgULS('消链', '消連'),
			'tw-unlink',
			window.wgULS('取消到本页的链接', '取消到本頁的連結')
		);
	};
	// the parameter is used when invoking unlink from admin speedy
	Twinkle.unlink.callback = (presetReason) => {
		const fileSpace = mw.config.get('wgNamespaceNumber') === 6;
		const root = document.createElement('div');
		document.body.append(root);
		const listData = reactive({
			backlinks: [],
			imageusage: [],
			namespacesText: '',
			loaded: false,
		});
		const escape = mw.html.escape;
		const pageName = Morebits.pageNameNorm;
		const linkPlainAfter = fileSpace ? `<!-- [[${escape(pageName)}]] -->` : escape(pageName);
		const docHtml =
			`${
				window.wgULS(
					'这个工具可以取消所有指向该页的链接（“链入”）',
					'這個工具可以取消所有指向該頁的連結（「連入」）'
				) +
				(fileSpace
					? window.wgULS(
							'，或通过加入<!-- -->注释标记隐藏所有对此文件的使用',
							'，或透過加入<!-- -->注釋標記隱藏所有對此檔案的使用'
						)
					: '')
			}。例如：` +
			`<code>[[${fileSpace ? ':' : ''}${escape(pageName)}${escape(
				window.wgULS('|链接文字]]', '|連結文字]]')
			)}</code>` +
			`${window.wgULS('将会变成', '將會變成')}<code>${window.wgULS('链接文字', '連結文字')}</code>，` +
			`<code>[[${escape(pageName)}]]</code>` +
			`${window.wgULS('将会变成', '將會變成')}<code>${linkPlainAfter}</code>，` +
			`<code>{{${escape(mw.config.get('wgTitle'))}}}</code>` +
			`${window.wgULS('将会被移除', '將會被移除')}${window.wgULS('。请小心使用。', '。請小心使用。')}`;
		let dialogInstance = null;
		const app = createApp({
			render: () => {
				return h(TwUnlinkDialog, {
					ref: (instance) => {
						dialogInstance = instance;
					},
					title:
						window.wgULS('取消链入', '取消連入') +
						(fileSpace ? window.wgULS('和模板、文件使用', '和模板、檔案使用') : ''),
					fileSpace,
					presetReason: presetReason || '',
					docHtml,
					list: listData,
					footerLinks: [
						{text: window.wgULS('链入设置', '連入設定'), href: mw.util.getUrl('H:TW/PREF#unlink')},
						{text: window.wgULS('Twinkle帮助', 'Twinkle說明'), href: mw.util.getUrl('H:TW/DOC#unlink')},
					],
					onSubmit: (params, statusContainer) => {
						Twinkle.unlink.callback.evaluate(params, statusContainer);
					},
					onClose: () => {
						app.unmount();
						root.remove();
					},
				});
			},
		});
		app.mount(root);
		const statusRoot = dialogInstance?.exposed?.getStatusRoot?.() ?? null;
		if (statusRoot) {
			Morebits.status.init(statusRoot);
		}
		const query = {
			action: 'query',
			list: 'backlinks',
			bltitle: mw.config.get('wgPageName'),
			bllimit: 'max',
			// 500 is max for normal users, 5000 for bots and sysops
			blnamespace: Twinkle.getPref('unlinkNamespaces'),
			rawcontinue: true,
			format: 'json',
		};
		if (fileSpace) {
			query.list += '|imageusage';
			query.iutitle = query.bltitle;
			query.iulimit = query.bllimit;
			query.iunamespace = query.blnamespace;
		} else {
			query.blfilterredir = 'nonredirects';
		}
		const ysarchives_api = new Morebits.wiki.api(
			window.wgULS('抓取链入', '抓取連入'),
			query,
			Twinkle.unlink.callbacks.display.backlinks
		);
		ysarchives_api.params = {
			list: listData,
			image: fileSpace,
		};
		ysarchives_api.statelem.status(window.wgULS('加载中……', '載入中……'));
		ysarchives_api.post();
	};
	Twinkle.unlink.callback.evaluate = (params, statusContainer) => {
		if (!params.reason) {
			void mw.notify(window.wgULS('您必须指定取消链入的理由。', '您必須指定取消連入的理由。'), {
				type: 'warn',
				tag: 'twinkleunlink',
			});
			return;
		}
		const pages = Morebits.array.uniq([...params.backlinks, ...params.imageusage]);
		if (!pages.length) {
			void mw.notify(
				window.wgULS('您必须至少选择一个要取消链入的页面。', '您必須至少選擇一個要取消連入的頁面。'),
				{
					type: 'warn',
					tag: 'twinkleunlink',
				}
			);
			return;
		}
		Morebits.status.init(statusContainer);
		const unlinker = new Morebits.batchOperation(
			`取消${
				params.backlinks.length
					? window.wgULS('链入', '連入') +
						(params.imageusage.length ? window.wgULS('与文件使用', '與檔案使用') : '')
					: window.wgULS('文件使用', '檔案使用')
			}`
		);
		unlinker.setOption('preserveIndividualStatusLines', true);
		unlinker.setPageList(pages);
		const batchParams = {
			reason: params.reason,
			unlinker,
		};
		unlinker.run((pageName) => {
			const ysarchives_page = new Morebits.wiki.page(
				pageName,
				window.wgULS('在页面“', '在頁面「') + pageName + window.wgULS('”中取消链入', '」中取消連入')
			);
			ysarchives_page.setBotEdit(true); // unlink considered a floody operation
			ysarchives_page.setCallbackParameters({
				doBacklinks: params.backlinks.includes(pageName),
				doImageusage: params.imageusage.includes(pageName),
				...batchParams,
			});
			ysarchives_page.load(Twinkle.unlink.callbacks.unlinkBacklinks);
		});
	};
	Twinkle.unlink.callbacks = {
		display: {
			backlinks: (apiobj) => {
				const response = apiobj.getResponse();
				const {list} = apiobj.params;
				const namespaces = [];
				for (const v of Twinkle.getPref('unlinkNamespaces')) {
					namespaces[namespaces.length] =
						v === '0' ? window.wgULS('（条目）', '（條目）') : mw.config.get('wgFormattedNamespaces')[v];
				}
				list.namespacesText = window.wgULS('已选择的命名空间：', '已選擇的命名空間：') + namespaces.join('、');
				if (apiobj.params.image) {
					const imageusage = response.query.imageusage ?? [];
					list.imageusage.push(
						...imageusage.sort(Twinkle.sortByNamespace).map((item) => {
							return item.title;
						})
					);
				}
				const backlinks = response.query.backlinks ?? [];
				list.backlinks.push(
					...backlinks.sort(Twinkle.sortByNamespace).map((item) => {
						return item.title;
					})
				);
				list.loaded = true;
			},
		},
		unlinkBacklinks: (pageobj) => {
			let oldtext = pageobj.getPageText();
			const params = pageobj.getCallbackParameters();
			const ysarchives_page = new Morebits.wikitext.page(oldtext);
			let summaryText = '';
			let warningString = false;
			let text;
			// remove image usages
			if (params.doImageusage) {
				text = ysarchives_page
					.commentOutImage(mw.config.get('wgTitle'), window.wgULS('注释', '注釋'))
					.getText();
				// did we actually make any changes?
				if (text === oldtext) {
					warningString = window.wgULS('文件使用', '檔案使用');
				} else {
					summaryText = window.wgULS('注释文件使用', '注釋檔案使用');
					oldtext = text;
				}
			}
			// remove backlinks
			if (params.doBacklinks) {
				text = ysarchives_page.removeLink(Morebits.pageNameNorm).getText();
				text = ysarchives_page.removeTemplate(mw.config.get('wgTitle')).getText();
				// did we actually make any changes?
				if (text === oldtext) {
					warningString = warningString
						? window.wgULS('取消链入或文件使用', '取消連入或檔案使用')
						: window.wgULS('取消链入', '取消連入');
				} else {
					summaryText = (summaryText ? `${summaryText} / ` : '') + window.wgULS('取消链接到', '取消連結到');
					oldtext = text;
				}
			}
			if (warningString) {
				// nothing to do!
				pageobj
					.getStatusElement()
					.error(`${window.wgULS('未能在页面上找到', '未能在頁面上找到') + warningString}。`);
				params.unlinker.workerFailure(pageobj);
				return;
			}
			pageobj.setPageText(text);
			pageobj.setEditSummary(
				summaryText +
					window.wgULS('“', '「') +
					Morebits.pageNameNorm +
					window.wgULS('”：', '」：') +
					params.reason
			);
			pageobj.setChangeTags(Twinkle.changeTags);
			pageobj.setCreateOption('nocreate');
			pageobj.save(params.unlinker.workerSuccess, params.unlinker.workerFailure);
		},
	};
	Twinkle.addInitCallback(Twinkle.unlink, 'unlink');
})();

export {};
