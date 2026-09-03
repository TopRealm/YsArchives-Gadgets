// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/*! Twinkle.js - twinklebatchundelete.js */
import {createApp, h, reactive} from 'vue';
import TwBatchUndeleteDialog from './ui/TwBatchUndeleteDialog.vue';

(function twinklebatchundelete() {
	/**
	 * twinklebatchundelete.js: Batch undelete module
	 * Mode of invocation: Tab ("Und-batch")
	 * Active on: Existing user and project pages
	 */
	Twinkle.batchundelete = () => {
		if (
			!Morebits.userIsSysop ||
			!mw.config.get('wgArticleId') ||
			(mw.config.get('wgNamespaceNumber') !== mw.config.get('wgNamespaceIds').user &&
				mw.config.get('wgNamespaceNumber') !== mw.config.get('wgNamespaceIds').project)
		) {
			return;
		}
		Twinkle.addPortletLink(
			Twinkle.batchundelete.callback,
			window.wgULS('批复', '批復'),
			'tw-batch-undel',
			window.wgULS('反删除页面', '反刪除頁面')
		);
	};
	Twinkle.batchundelete.callback = () => {
		const root = document.createElement('div');
		document.body.append(root);
		const list = reactive([]);
		let dialogInstance = null;
		const app = createApp({
			render: () => {
				return h(TwBatchUndeleteDialog, {
					ref: (instance) => {
						dialogInstance = instance;
					},
					title: window.wgULS('批量反删除', '批次反刪除'),
					list,
					footerLinks: [
						{
							text: window.wgULS('Twinkle帮助', 'Twinkle說明'),
							href: mw.util.getUrl('H:TW/DOC#batchundelete'),
						},
					],
					onSubmit: (params, statusContainer) => {
						Twinkle.batchundelete.callback.evaluate(params, statusContainer);
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
			generator: 'links',
			prop: 'info',
			inprop: 'protection',
			titles: mw.config.get('wgPageName'),
			gpllimit: Twinkle.getPref('batchMax'),
		};
		const statelem = new Morebits.status(window.wgULS('抓取页面列表', '抓取頁面列表'));
		const ysarchives_api = new Morebits.wiki.api(
			window.wgULS('加载中…', '載入中…'),
			query,
			(apiobj) => {
				const xml = apiobj.responseXML;
				const $pages = $(xml).find('page[missing]');
				for (const page of $pages.toArray()) {
					const $page = $(page);
					const title = $page.attr('title');
					const $editprot = $page.find('pr[type="create"][level="sysop"]');
					const isProtected = $editprot.length > 0;
					list.push({
						title,
						label:
							title +
							(isProtected
								? `（${window.wgULS('全保护，', '全保護，')}${
										$editprot.attr('expiry') === 'infinity'
											? window.wgULS('无限期', '無限期')
											: `${new Morebits.date($editprot.attr('expiry')).calendar(
													'utc'
												)} (UTC)${window.wgULS('过期', '過期')}`
									}）`
								: ''),
						isProtected,
					});
				}
			},
			statelem
		);
		ysarchives_api.post();
	};
	Twinkle.batchundelete.callback.evaluate = (params, statusContainer) => {
		Morebits.wiki.actionCompleted.notice = window.wgULS('反删除已完成', '反刪除已完成');
		if (
			params.protectedCount > 0 &&
			!confirm(
				window.wgULS('您正要反删除 ', '您正要反刪除 ') +
					params.protectedCount +
					window.wgULS(' 个全保护页面，您确定吗？', ' 個全保護頁面，您確定嗎？')
			)
		) {
			return;
		}
		const {pages} = params;
		const {reason} = params;
		const {undel_talk} = params;
		if (!reason) {
			void mw.notify('您需要指定理由。', {
				type: 'warn',
				tag: 'twinklebatchundelete',
			});
			return;
		}
		Morebits.status.init(statusContainer);
		if (pages.length === 0) {
			Morebits.status.error(
				window.wgULS('错误', '錯誤'),
				window.wgULS('没什么要反删除的，取消操作', '沒什麼要反刪除的，取消操作')
			);
			return;
		}
		const pageUndeleter = new Morebits.batchOperation(window.wgULS('反删除页面', '反刪除頁面'));
		pageUndeleter.setOption('chunkSize', Twinkle.getPref('batchChunks'));
		pageUndeleter.setOption('preserveIndividualStatusLines', true);
		pageUndeleter.setPageList(pages);
		pageUndeleter.run((pageName) => {
			const pageParams = {
				page: pageName,
				undel_talk,
				reason,
				pageUndeleter,
			};
			const ysarchives_page = new Morebits.wiki.page(
				pageName,
				window.wgULS('反删除页面', '反刪除頁面') + pageName
			);
			ysarchives_page.setCallbackParameters(pageParams);
			ysarchives_page.setEditSummary(`${reason} (批量)`);
			ysarchives_page.setChangeTags(Twinkle.changeTags);
			ysarchives_page.suppressProtectWarning();
			ysarchives_page.setMaxRetries(3); // temporary increase from 2 to make batchundelete more likely to succeed
			ysarchives_page.undeletePage(Twinkle.batchundelete.callbacks.doExtras, pageUndeleter.workerFailure);
		});
	};
	Twinkle.batchundelete.callbacks = {
		// this stupid parameter name is a temporary thing until I implement an overhaul
		// of Morebits.wiki.* callback parameters
		doExtras: (thingWithParameters) => {
			const params = thingWithParameters.parent
				? thingWithParameters.parent.getCallbackParameters()
				: thingWithParameters.getCallbackParameters();
			// the initial batch operation's job is to delete the page, and that has
			// succeeded by now
			params.pageUndeleter.workerSuccess(thingWithParameters);
			let query;
			let ysarchives_api;
			if (params.undel_talk) {
				const talkpagename = new mw.Title(params.page).getTalkPage().getPrefixedText();
				if (talkpagename !== params.page) {
					query = {
						action: 'query',
						prop: 'deletedrevisions',
						drvprop: 'ids',
						drvlimit: 1,
						titles: talkpagename,
					};
					ysarchives_api = new Morebits.wiki.api(
						window.wgULS('检查讨论页的已删版本', '檢查討論頁的已刪版本'),
						query,
						Twinkle.batchundelete.callbacks.undeleteTalk
					);
					ysarchives_api.params = params;
					ysarchives_api.params.talkPage = talkpagename;
					ysarchives_api.post();
				}
			}
		},
		undeleteTalk: (apiobj) => {
			const xml = apiobj.responseXML;
			const exists = $(xml).find('page:not([missing])').length > 0;
			const delrevs = $(xml).find('rev').attr('revid');
			if (exists || !delrevs) {
				// page exists or has no deleted revisions; forget about it
				return;
			}
			const page = new Morebits.wiki.page(
				apiobj.params.talkPage,
				window.wgULS('正在反删除', '正在反刪除') + apiobj.params.page + window.wgULS('的讨论页', '的討論頁')
			);
			page.setEditSummary(
				window.wgULS('反删除“', '反刪除「') +
					apiobj.params.page +
					window.wgULS('”的[[Help:讨论页|讨论页]]', '」的[[Help:討論頁|討論頁]]')
			);
			page.setChangeTags(Twinkle.changeTags);
			page.undeletePage();
		},
	};
	Twinkle.addInitCallback(Twinkle.batchundelete, 'batchundelete');
})();

export {};
