// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

/*! Twinkle.js - twinklebatchprotect.js */
import {createApp, h, reactive} from 'vue';
import TwBatchProtectDialog from './ui/TwBatchProtectDialog.vue';

(function twinklebatchprotect() {
	/**
	 * twinklebatchprotect.js: Batch protect module (sysops only)
	 * Mode of invocation: Tab ("P-batch")
	 * Active on: Existing project pages and user pages;
	 * existing and non-existing categories; Special:PrefixIndex
	 */
	Twinkle.batchprotect = () => {
		if (
			Morebits.userIsSysop &&
			((mw.config.get('wgArticleId') > 0 && [2, 4].includes(mw.config.get('wgNamespaceNumber'))) ||
				mw.config.get('wgNamespaceNumber') === 14 ||
				mw.config.get('wgCanonicalSpecialPageName') === 'Prefixindex')
		) {
			Twinkle.addPortletLink(Twinkle.batchprotect.callback, '批保', 'tw-pbatch', '批量保护链出页面');
		}
	};
	Twinkle.batchprotect.unlinkCache = {};
	Twinkle.batchprotect.callback = () => {
		const root = document.createElement('div');
		document.body.append(root);
		const listData = reactive({
			pages: [],
			loaded: false,
		});
		let dialogInstance = null;
		const app = createApp({
			render: () => {
				return h(TwBatchProtectDialog, {
					ref: (instance) => {
						dialogInstance = instance;
					},
					title: '批保',
					levels: Twinkle.protect.protectionLevels,
					moveLevels: Twinkle.protect.protectionLevels.filter((level) => {
						return level.value !== 'autoconfirmed';
					}),
					lengths: Twinkle.protect.protectionLengths,
					list: listData,
					footerLinks: [
						{text: '保护条例', href: mw.util.getUrl('LIB:PROT')},
						{text: window.wgULS('帮助文档', '幫助文檔'), href: mw.util.getUrl('H:TW/DOC#保护')},
						{text: window.wgULS('问题反馈', '問題反饋'), href: mw.util.getUrl('HT:TW')},
					],
					onSubmit: (params, statusContainer) => {
						Twinkle.batchprotect.callback.evaluate(params, statusContainer);
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
			prop: 'revisions|info|imageinfo',
			rvprop: 'size|user',
			inprop: 'protection',
			format: 'json',
		};
		if (mw.config.get('wgNamespaceNumber') === 14) {
			// categories
			query.generator = 'categorymembers';
			query.gcmtitle = mw.config.get('wgPageName');
			query.gcmlimit = Twinkle.getPref('batchMax');
		} else if (mw.config.get('wgCanonicalSpecialPageName') === 'Prefixindex') {
			query.generator = 'allpages';
			query.gapnamespace =
				mw.util.getParamValue('namespace') || document.querySelectorAll('select[name=namespace]')[0].value;
			query.gapprefix =
				mw.util.getParamValue('prefix') || document.querySelectorAll('input[name=prefix]')[0].value;
			query.gaplimit = Twinkle.getPref('batchMax');
		} else {
			query.generator = 'links';
			query.titles = mw.config.get('wgPageName');
			query.gpllimit = Twinkle.getPref('batchMax');
		}
		const statelem = new Morebits.status('抓取页面列表');
		const ysarchives_api = new Morebits.wiki.api(
			'加载中……',
			query,
			(apiobj) => {
				const response = apiobj.getResponse();
				const pages = (response.query && response.query.pages) || [];
				pages.sort(Twinkle.sortByNamespace);
				for (const page of pages) {
					const metadata = [];
					const missing = !!page.missing;
					let editProt;
					if (missing) {
						metadata[metadata.length] = '页面不存在';
						editProt = page.protection.findLast((protection) => {
							return protection.type === 'create' && protection.level === 'sysop';
						});
					} else {
						if (page.redirect) {
							metadata[metadata.length] = '重定向';
						}
						if (page.ns === 6) {
							metadata[metadata.length] =
								`上传者：${page.imageinfo[0].user}，最后编辑者：${page.revisions[0].user}`;
						} else {
							metadata[metadata.length] = `${mw.language.convertNumber(page.revisions[0].size)}字节`;
						}
						editProt = page.protection.findLast((protection) => {
							return protection.type === 'edit' && protection.level === 'sysop';
						});
					}
					if (editProt) {
						metadata[metadata.length] = `${missing ? '白纸' : ''}全保护${
							editProt.expiry === 'infinity'
								? '（永久）'
								: `（${new Morebits.date(editProt.expiry).calendar('utc')} (UTC)过期）`
						}`;
					}
					const {title} = page;
					listData.pages.push({
						title,
						label: title + (metadata.length > 0 ? ` (${metadata.join('; ')})` : ''),
						isProtected: !!editProt,
					});
				}
				listData.loaded = true;
			},
			statelem
		);
		ysarchives_api.post();
	};
	Twinkle.batchprotect.currentProtectCounter = 0;
	Twinkle.batchprotect.currentprotector = 0;
	Twinkle.batchprotect.callback.evaluate = (params, statusContainer) => {
		Morebits.wiki.actionCompleted.notice = '批量保护完成';
		if (
			params.protectedCount > 0 &&
			!confirm(`您即将对${mw.language.convertNumber(params.protectedCount)}个全保护页面进行操作。您确定吗？`)
		) {
			return;
		}
		if (!params.reason) {
			void mw.notify('您必须给出一个理由。', {
				type: 'warn',
				tag: 'twinklebatchprotect',
			});
			return;
		}
		Morebits.status.init(statusContainer);
		if (params.pages.length === 0) {
			Morebits.status.error('Error', '待保护页面不存在，程序终止');
			return;
		}
		const batchOperation = new Morebits.batchOperation('应用保护设置');
		batchOperation.setOption('chunkSize', Twinkle.getPref('batchChunks'));
		batchOperation.setOption('preserveIndividualStatusLines', true);
		batchOperation.setPageList(params.pages);
		batchOperation.run((pageName) => {
			const query = {
				action: 'query',
				titles: pageName,
				format: 'json',
			};
			const ysarchives_api = new Morebits.wiki.api(
				`正在检查页面“${pageName}”是否存在`,
				query,
				Twinkle.batchprotect.callbacks.main,
				null,
				batchOperation.workerFailure
			);
			ysarchives_api.params = {
				page: pageName,
				batchOperation,
				...params,
			};
			ysarchives_api.post();
		});
	};
	Twinkle.batchprotect.callbacks = {
		main: (apiobj) => {
			const response = apiobj.getResponse();
			if (response.query.normalized) {
				apiobj.params.page = response.query.normalized[0].to;
			}
			const exists = !response.query.pages[0].missing;
			const page = new Morebits.wiki.page(apiobj.params.page, `正在保护${apiobj.params.page}`);
			let takenAction = false;
			if (exists && apiobj.params.editmodify) {
				page.setEditProtection(apiobj.params.editlevel, apiobj.params.editexpiry);
				takenAction = true;
			}
			if (exists && apiobj.params.movemodify) {
				page.setMoveProtection(apiobj.params.movelevel, apiobj.params.moveexpiry);
				takenAction = true;
			}
			if (!exists && apiobj.params.createmodify) {
				page.setCreateProtection(apiobj.params.createlevel, apiobj.params.createexpiry);
				takenAction = true;
			}
			if (!takenAction) {
				Morebits.status.warn(
					`正在保护“${apiobj.params.page}`,
					`”页面${exists ? '存在' : '不存在'}；无事可做，跳过`
				);
				apiobj.params.batchOperation.workerFailure(apiobj);
				return;
			}
			page.setEditSummary(apiobj.params.reason);
			page.setChangeTags(Twinkle.changeTags);
			page.protect(apiobj.params.batchOperation.workerSuccess, apiobj.params.batchOperation.workerFailure);
		},
	};
	Twinkle.addInitCallback(Twinkle.batchprotect, 'batchprotect');
})();

export {};
