// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

/*! Twinkle.js - twinklebatchdelete.js */
import {createApp, h, reactive} from 'vue';
import TwBatchDeleteDialog from './ui/TwBatchDeleteDialog.vue';
import {UTC8_OFFSET_MINUTES} from './utc8';

(function twinklebatchdelete() {
	/**
	 * twinklebatchdelete.js: Batch delete module (sysops only)
	 * Mode of invocation: Tab ("D-batch")
	 * Active on: Existing non-articles, and Special:PrefixIndex
	 */
	Twinkle.batchdelete = () => {
		if (
			Morebits.userIsSysop &&
			((mw.config.get('wgCurRevisionId') && mw.config.get('wgNamespaceNumber') > 0) ||
				mw.config.get('wgCanonicalSpecialPageName') === 'Prefixindex' ||
				mw.config.get('wgCanonicalSpecialPageName') === 'BrokenRedirects')
		) {
			Twinkle.addPortletLink(
				Twinkle.batchdelete.callback,
				window.wgULS('批删', '批刪'),
				'tw-batch',
				window.wgULS('删除此分类或页面中的所有链接', '刪除此分類或頁面中的所有連結')
			);
		}
	};
	Twinkle.batchdelete.unlinkCache = {};
	Twinkle.batchdelete.callback = () => {
		const root = document.createElement('div');
		document.body.append(root);
		const listData = reactive({
			pages: [],
			loaded: false,
			subpagesLoading: false,
		});
		let dialogInstance = null;
		const app = createApp({
			render: () => {
				return h(TwBatchDeleteDialog, {
					ref: (instance) => {
						dialogInstance = instance;
					},
					title: window.wgULS('批量删除', '批次刪除'),
					reasonList: Twinkle.batchdelete.deletereasonlist,
					appendPunctuation: Morebits.string.appendPunctuation,
					list: listData,
					footerLinks: [
						{
							text: window.wgULS('Twinkle帮助', 'Twinkle說明'),
							href: mw.util.getUrl('H:TW/DOC#batchdelete'),
						},
					],
					onSubmit: (params, statusContainer) => {
						Twinkle.batchdelete.callback.evaluate(params, statusContainer);
					},
					onLoadSubpages: (titles) => {
						listData.subpagesLoading = true;
						const subpageLister = new Morebits.batchOperation();
						subpageLister.setOption('chunkSize', Twinkle.getPref('batchChunks'));
						subpageLister.setPageList(titles);
						subpageLister.run(
							(pageName) => {
								const pageTitle = mw.Title.newFromText(pageName);
								// No need to look for subpages in main/file/mediawiki space
								if ([0, 6, 8].includes(pageTitle.namespace)) {
									subpageLister.workerSuccess();
									return;
								}
								const subpageApi = new Morebits.wiki.api(
									window.wgULS('正在获取 ', '正在取得 ') +
										pageName +
										window.wgULS(' 的子页面', ' 的子頁面'),
									{
										action: 'query',
										prop: 'revisions|info|imageinfo',
										generator: 'allpages',
										rvprop: 'size',
										inprop: 'protection',
										gapprefix: `${pageTitle.title}/`,
										gapnamespace: pageTitle.namespace,
										gaplimit: 'max',
										// Not used by API, but added for access in onSuccess()
										pageNameFull: pageName,
									},
									(apiobj) => {
										const xml = apiobj.responseXML;
										const $pages = $(xml).find('page');
										const subpageList = [];
										$pages.each((_index, page) => {
											const $page = $(page);
											const ns = $page.attr('ns');
											const title = $page.attr('title');
											const isRedir = $page.attr('redirect') === '';
											const $editprot = $page.find('pr[type="edit"][level="sysop"]');
											const isProtected = $editprot.length > 0;
											const size = $page.find('rev').attr('size');
											const metadata = [];
											if (isRedir) {
												metadata[metadata.length] = 'redirect';
											}
											if (isProtected) {
												metadata[metadata.length] =
													window.wgULS('全保护，', '全保護，') +
													($editprot.attr('expiry') === 'infinity'
														? window.wgULS('无限期', '無限期')
														: `${new Morebits.date($editprot.attr('expiry')).calendar(
																UTC8_OFFSET_MINUTES
															)} (UTC+8)`) +
													window.wgULS('过期', '過期');
											}
											if (ns === '6') {
												// mimic what delimages used to show for files
												metadata[metadata.length] = `${
													window.wgULS('上传者：', '上傳者：') + $page.find('ii').attr('user')
												}，${window.wgULS(
													'最后编辑：',
													'最後編輯：'
												)}${$page.find('rev').attr('user')}`;
											} else {
												metadata[metadata.length] =
													mw.language.convertNumber(size) + window.wgULS('字节', '位元組');
											}
											subpageList[subpageList.length] = {
												title,
												label: title + (metadata.length ? ` (${metadata.join('; ')})` : ''),
												isProtected,
											};
										});
										if (subpageList.length) {
											const item = listData.pages.find((pageItem) => {
												return pageItem.title === apiobj.query.pageNameFull;
											});
											if (item) {
												item.subpages = subpageList;
											}
										}
										subpageLister.workerSuccess();
									},
									null /* statusElement */,
									() => {
										subpageLister.workerFailure();
									}
								);
								subpageApi.post();
							},
							() => {
								listData.subpagesLoading = false;
							}
						);
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
			inprop: 'protection',
			rvprop: 'size|user',
		};
		// On categories
		if (mw.config.get('wgNamespaceNumber') === 14) {
			query.generator = 'categorymembers';
			query.gcmtitle = mw.config.get('wgPageName');
			query.gcmlimit = Twinkle.getPref('batchMax');
			// On Special:PrefixIndex
		} else if (mw.config.get('wgCanonicalSpecialPageName') === 'Prefixindex') {
			query.generator = 'allpages';
			query.gaplimit = Twinkle.getPref('batchMax');
			if (mw.util.getParamValue('prefix')) {
				query.gapnamespace = mw.util.getParamValue('namespace');
				query.gapprefix = mw.util.getParamValue('prefix');
			} else {
				let pathSplit = decodeURIComponent(location.pathname).split('/');
				if (pathSplit.length < 3 || pathSplit[2] !== 'Special:前缀索引') {
					return;
				}
				const titleSplit = pathSplit[3].split(':');
				query.gapnamespace = mw.config.get('wgNamespaceIds')[titleSplit[0].toLowerCase()];
				if (titleSplit.length < 2 || query.gapnamespace === undefined) {
					query.gapnamespace = 0; // article namespace
					query.gapprefix = pathSplit.splice(3).join('/');
				} else {
					pathSplit = pathSplit.splice(4);
					pathSplit.splice(0, 0, titleSplit.splice(1).join(':'));
					query.gapprefix = pathSplit.join('/');
				}
			}
			// On Special:BrokenRedirects
		} else if (mw.config.get('wgCanonicalSpecialPageName') === 'BrokenRedirects') {
			query.generator = 'querypage';
			query.gqppage = 'BrokenRedirects';
			query.gqplimit = Twinkle.getPref('batchMax');
			// On normal pages
		} else {
			query.generator = 'links';
			query.titles = mw.config.get('wgPageName');
			query.gpllimit = Twinkle.getPref('batchMax');
		}
		const statelem = new Morebits.status(window.wgULS('抓取页面列表', '抓取頁面列表'));
		const ysarchives_api = new Morebits.wiki.api(
			window.wgULS('加载中…', '載入中…'),
			query,
			(apiobj) => {
				const xml = apiobj.responseXML;
				const $pages = $(xml).find('page').filter(':not([missing])'); // :not([imagerepository="shared"])
				$pages.each((_index, page) => {
					const $page = $(page);
					const ns = $page.attr('ns');
					const title = $page.attr('title');
					const isRedir = $page.attr('redirect') === '';
					const $editprot = $page.find('pr[type="edit"][level="sysop"]');
					const isProtected = $editprot.length > 0;
					const size = $page.find('rev').attr('size');
					const metadata = [];
					if (isRedir) {
						metadata[metadata.length] = window.wgULS('重定向', '重新導向');
					}
					if (isProtected) {
						metadata[metadata.length] =
							window.wgULS('全保护，', '全保護，') +
							($editprot.attr('expiry') === 'infinity'
								? window.wgULS('无限期', '無限期')
								: `${new Morebits.date($editprot.attr('expiry')).calendar(
										UTC8_OFFSET_MINUTES
									)} (UTC+8)`) +
							window.wgULS('过期', '過期');
					}
					if (ns === '6') {
						// mimic what delimages used to show for files
						metadata[metadata.length] = `${
							window.wgULS('上传者：', '上傳者：') + $page.find('ii').attr('user')
						}，${window.wgULS('最后编辑：', '最後編輯：')}${$page.find('rev').attr('user')}`;
					} else {
						metadata[metadata.length] = mw.language.convertNumber(size) + window.wgULS('字节', '位元組');
					}
					listData.pages.push({
						title,
						label: title + (metadata.length ? `（${metadata.join('，')}）` : ''),
						isProtected,
					});
				});
				listData.loaded = true;
			},
			statelem
		);
		ysarchives_api.post();
	};
	Twinkle.batchdelete.deletereasonlist = [
		{
			label: window.wgULS('请选择', '請選擇'),
			value: '',
		},
		{
			label: window.wgULS(
				'G6：原作者提请删除或清空页面，且页面原作者仅有一人',
				'G6：原作者提請刪除或清空頁面，且頁面原作者僅有一人'
			),
			value: window.wgULS(
				'[[LIB:CSD#G6|G6]]：原作者提请删除或清空页面，且页面原作者仅有一人',
				'[[LIB:CSD#G6|G6]]：原作者提請刪除或清空頁面，且頁面原作者僅有一人'
			),
		},
		{
			label: window.wgULS(
				'G9：孤立页面，比如没有主页面的讨论页、指向空页面的重定向等',
				'G9：孤立頁面，比如沒有主頁面的討論頁、指向空頁面的重新導向等'
			),
			value: window.wgULS('[[LIB:CSD#G9|G9]]：孤立页面', '[[LIB:CSD#G9|G9]]：孤立頁面'),
		},
		{
			label: window.wgULS('R1：不能发挥实际作用的重定向。', 'R1：不能發揮實際作用的重定向。'),
			value: window.wgULS(
				'[[LIB:CSD#R1|R1]]：不能发挥实际作用的重定向。',
				'[[LIB:CSD#R1|R1]]：不能發揮實際作用的重定向。'
			),
		},
		{
			label: window.wgULS(
				'R2：名称与导向目标代表事物不一致或不完全一致的重定向。',
				'R2：名稱與導向目標代表事物不一致或不完全一致的重定向。'
			),
			value: window.wgULS(
				'[[LIB:CSD#R2|R2]]：名称与导向目标代表事物不一致或不完全一致的重定向。',
				'[[LIB:CSD#R2|R2]]：名稱與導向目標代表事物不一致或不完全一致的重定向。'
			),
		},
		{
			label: window.wgULS('F4：可被替代的合理使用文件', 'F4：可被替代的合理使用檔案'),
			value: window.wgULS(
				'[[LIB:CSD#F4|F4]]：可被替代的合理使用文件',
				'[[LIB:CSD#F4|F4]]：可被替代的合理使用檔案'
			),
		},
		{
			label: window.wgULS(
				'F5：没有被条目使用的非自由著作权文件、没有填写任何合理使用依据的非自由著作权文件',
				'F5：沒有被條目使用的非自由版權檔案、沒有填寫任何合理使用依據的非自由版權檔案'
			),
			value: window.wgULS(
				'[[LIB:CSD#F5|F5]]：没有被条目使用的非自由著作权文件、没有填写任何合理使用依据的非自由著作权文件',
				'[[LIB:CSD#F5|F5]]：沒有被條目使用的非自由版權檔案、沒有填寫任何合理使用依據的非自由版權檔案'
			),
		},
		{
			label: window.wgULS(
				'O1：用户请求删除自己的用户页或其子页面',
				'O1：使用者請求刪除自己的使用者頁面或其子頁面'
			),
			value: window.wgULS(
				'[[LIB:CSD#O1|O1]]：用户请求删除自己的[[Help:用户页|用户页]]或其子页面。',
				'[[LIB:CSD#O1|O1]]：使用者請求刪除自己的[[Help:用户页|使用者頁面]]或其子頁面。'
			),
		},
		{
			label: window.wgULS('O2：空的分类（没有条目也没有子分类）', 'O2：空的分類（沒有條目也沒有子分類）'),
			value: window.wgULS(
				'[[LIB:CSD#O2|O2]]：空的分类（没有条目也没有子分类）。',
				'[[LIB:CSD#O2|O2]]：空的分類（沒有條目也沒有子分類）。'
			),
		},
		{
			label: window.wgULS('O3：废弃草稿', 'O3：廢棄草稿'),
			value: window.wgULS('[[LIB:CSD#O3|O3]]：废弃草稿。', '[[LIB:CSD#O3|O3]]：廢棄草稿。'),
		},
	];
	Twinkle.batchdelete.callback.evaluate = (params, statusContainer) => {
		Morebits.wiki.actionCompleted.notice = window.wgULS('批量删除已完成', '批次刪除已完成');
		if (
			params.protectedCount > 0 &&
			!confirm(
				window.wgULS('您正要删除 ', '您正要刪除 ') +
					mw.language.convertNumber(params.protectedCount) +
					window.wgULS(' 个全保护页面，您确定吗？', ' 個全保護頁面，您確定嗎？')
			)
		) {
			return;
		}
		const {pages} = params;
		const {subpages} = params;
		const {reason} = params;
		const delete_page = params.delete_page;
		let delete_talk;
		let delete_redirects;
		let delete_subpages;
		let delete_subpage_redirects;
		let delete_subpage_talks;
		let unlink_subpages;
		if (delete_page) {
			delete_talk = params.delete_talk;
			delete_redirects = params.delete_redirects;
			delete_subpages = params.delete_subpages;
			if (delete_subpages) {
				delete_subpage_redirects = params.delete_subpage_redirects;
				delete_subpage_talks = params.delete_subpage_talks;
				unlink_subpages = params.unlink_subpages;
			}
		}
		const unlink_page = params.unlink_page;
		const unlink_file = params.unlink_file;
		if (!reason) {
			void mw.notify(window.wgULS('您需要给出一个理由', '您需要給出一個理由'), {
				type: 'warn',
				tag: 'twinklebatchdelete',
			});
			return;
		}
		Morebits.status.init(statusContainer);
		if (pages.length === 0) {
			Morebits.status.error(
				window.wgULS('错误', '錯誤'),
				window.wgULS('没有要删除的内容，中止', '沒有要刪除的內容，中止')
			);
			return;
		}
		const pageDeleter = new Morebits.batchOperation(
			delete_page
				? window.wgULS('正在删除页面', '正在刪除頁面')
				: window.wgULS('正在启动要求的任务', '正在啟動要求的任務')
		);
		pageDeleter.setOption('chunkSize', Twinkle.getPref('batchChunks'));
		// we only need the initial status lines if we're deleting the pages in the pages array
		pageDeleter.setOption('preserveIndividualStatusLines', delete_page);
		pageDeleter.setPageList(pages);
		pageDeleter.run(
			(pageName) => {
				const workerParams = {
					page: pageName,
					delete_page,
					delete_talk,
					delete_redirects,
					unlink_page,
					unlink_file: unlink_file && new RegExp(`^${Morebits.namespaceRegex(6)}:`, 'i').test(pageName),
					reason,
					pageDeleter,
				};
				const ysarchives_page = new Morebits.wiki.page(
					pageName,
					window.wgULS('正在删除页面 ', '正在刪除頁面 ') + pageName
				);
				ysarchives_page.setCallbackParameters(workerParams);
				if (delete_page) {
					ysarchives_page.setEditSummary(`${reason}（批量）`);
					ysarchives_page.setChangeTags(Twinkle.changeTags);
					ysarchives_page.suppressProtectWarning();
					ysarchives_page.deletePage(Twinkle.batchdelete.callbacks.doExtras, pageDeleter.workerFailure);
				} else {
					Twinkle.batchdelete.callbacks.doExtras(ysarchives_page);
				}
			},
			() => {
				if (delete_subpages) {
					const subpageDeleter = new Morebits.batchOperation(
						window.wgULS('正在删除子页面', '正在刪除子頁面')
					);
					subpageDeleter.setOption('chunkSize', Twinkle.getPref('batchChunks'));
					subpageDeleter.setOption('preserveIndividualStatusLines', true);
					subpageDeleter.setPageList(subpages);
					subpageDeleter.run((pageName) => {
						const workerParams = {
							page: pageName,
							delete_page: true,
							delete_talk: delete_subpage_talks,
							delete_redirects: delete_subpage_redirects,
							unlink_page: unlink_subpages,
							unlink_file: false,
							reason,
							pageDeleter: subpageDeleter,
						};
						const ysarchives_page = new Morebits.wiki.page(
							pageName,
							window.wgULS('正在删除子页面 ', '正在刪除子頁面 ') + pageName
						);
						ysarchives_page.setCallbackParameters(workerParams);
						ysarchives_page.setEditSummary(`${reason}（批量）`);
						ysarchives_page.setChangeTags(Twinkle.changeTags);
						ysarchives_page.suppressProtectWarning();
						ysarchives_page.deletePage(Twinkle.batchdelete.callbacks.doExtras, pageDeleter.workerFailure);
					});
				}
			}
		);
	};
	Twinkle.batchdelete.callbacks = {
		// this stupid parameter name is a temporary thing until I implement an overhaul
		// of Morebits.wiki.* callback parameters
		doExtras: (thingWithParameters) => {
			const params = thingWithParameters.parent
				? thingWithParameters.parent.getCallbackParameters()
				: thingWithParameters.getCallbackParameters();
			// the initial batch operation's job is to delete the page, and that has
			// succeeded by now
			params.pageDeleter.workerSuccess(thingWithParameters);
			let query;
			let ysarchives_api;
			if (params.unlink_page) {
				Twinkle.batchdelete.unlinkCache = {};
				query = {
					action: 'query',
					list: 'backlinks',
					blfilterredir: 'nonredirects',
					blnamespace: [0],
					bltitle: params.page,
					bllimit: 'max', // 500 is max for normal users, 5000 for bots and sysops
				};

				ysarchives_api = new Morebits.wiki.api(
					window.wgULS('正在获取链入', '正在取得連入'),
					query,
					Twinkle.batchdelete.callbacks.unlinkBacklinksMain
				);
				ysarchives_api.params = params;
				ysarchives_api.post();
			}
			if (params.unlink_file) {
				query = {
					action: 'query',
					list: 'imageusage',
					iutitle: params.page,
					iulimit: 'max', // 500 is max for normal users, 5000 for bots and sysops
				};

				ysarchives_api = new Morebits.wiki.api(
					window.wgULS('正在获取文件链入', '正在取得檔案連入'),
					query,
					Twinkle.batchdelete.callbacks.unlinkImageInstancesMain
				);
				ysarchives_api.params = params;
				ysarchives_api.post();
			}
			if (params.delete_page) {
				if (params.delete_redirects) {
					query = {
						action: 'query',
						titles: params.page,
						prop: 'redirects',
						rdlimit: 'max', // 500 is max for normal users, 5000 for bots and sysops
					};

					ysarchives_api = new Morebits.wiki.api(
						window.wgULS('正在获取重定向', '正在取得重新導向'),
						query,
						Twinkle.batchdelete.callbacks.deleteRedirectsMain
					);
					ysarchives_api.params = params;
					ysarchives_api.post();
				}
				if (params.delete_talk) {
					const pageTitle = mw.Title.newFromText(params.page);
					if (pageTitle && pageTitle.namespace % 2 === 0 && pageTitle.namespace !== 2) {
						pageTitle.namespace++; // now pageTitle is the talk page title!
						query = {
							action: 'query',
							titles: pageTitle.toText(),
						};
						ysarchives_api = new Morebits.wiki.api(
							window.wgULS('正在检查讨论页面是否存在', '正在檢查討論頁面是否存在'),
							query,
							Twinkle.batchdelete.callbacks.deleteTalk
						);
						ysarchives_api.params = params;
						ysarchives_api.params.talkPage = pageTitle.toText();
						ysarchives_api.post();
					}
				}
			}
		},
		deleteRedirectsMain: (apiobj) => {
			const xml = apiobj.responseXML;
			const pages = $(xml)
				.find('rd')
				.map((_index, element) => {
					return $(element).attr('title');
				})
				.get();
			if (!pages.length) {
				return;
			}
			const redirectDeleter = new Morebits.batchOperation(
				window.wgULS('正在删除到 ', '正在刪除到 ') +
					apiobj.params.page +
					window.wgULS(' 的重定向', ' 的重新導向')
			);
			redirectDeleter.setOption('chunkSize', Twinkle.getPref('batchChunks'));
			redirectDeleter.setPageList(pages);
			redirectDeleter.run((pageName) => {
				const ysarchives_page = new Morebits.wiki.page(
					pageName,
					window.wgULS('正在删除 ', '正在刪除 ') + pageName
				);
				ysarchives_page.setEditSummary(
					`[[LIB:CSD#G9|G9]]: ${window.wgULS('指向已删页面“', '指向已刪頁面「')}${apiobj.params.page}${window.wgULS(
						'”的重定向',
						'」的重新導向'
					)}`
				);
				ysarchives_page.setChangeTags(Twinkle.changeTags);
				ysarchives_page.deletePage(redirectDeleter.workerSuccess, redirectDeleter.workerFailure);
			});
		},
		deleteTalk: (apiobj) => {
			const xml = apiobj.responseXML;
			const exists = $(xml).find('page:not([missing])').length > 0;
			if (!exists) {
				// no talk page; forget about it
				return;
			}
			const page = new Morebits.wiki.page(
				apiobj.params.talkPage,
				window.wgULS('正在删除页面 ', '正在刪除頁面 ') +
					apiobj.params.page +
					window.wgULS(' 的讨论页', ' 的討論頁')
			);
			page.setEditSummary(
				`[[LIB:CSD#G9|G9]]: ${window.wgULS('已删页面“', '已刪頁面「')}${apiobj.params.page}${window.wgULS(
					'”的[[Help:讨论页|讨论页]]',
					'」的[[Help:討論頁|討論頁]]'
				)}`
			);
			page.setChangeTags(Twinkle.changeTags);
			page.deletePage();
		},
		unlinkBacklinksMain: (apiobj) => {
			const xml = apiobj.responseXML;
			const pages = $(xml)
				.find('bl')
				.map((_index, element) => {
					return $(element).attr('title');
				})
				.get();
			if (!pages.length) {
				return;
			}
			const unlinker = new Morebits.batchOperation(
				`正在取消到 ${apiobj.params.page}${window.wgULS(' 的链入', ' 的連入')}`
			);
			unlinker.setOption('chunkSize', Twinkle.getPref('batchChunks'));
			unlinker.setPageList(pages);
			unlinker.run((pageName) => {
				const ysarchives_page = new Morebits.wiki.page(
					pageName,
					`正在取消 ${pageName}${window.wgULS(' 上的链入', ' 上的連入')}`
				);
				const params = {
					...apiobj.params,
				};
				params.title = pageName;
				params.unlinker = unlinker;
				ysarchives_page.setCallbackParameters(params);
				ysarchives_page.load(Twinkle.batchdelete.callbacks.unlinkBacklinks);
			});
		},
		unlinkBacklinks: (pageobj) => {
			const params = pageobj.getCallbackParameters();
			if (!pageobj.exists()) {
				// we probably just deleted it, as a recursive backlink
				params.unlinker.workerSuccess(pageobj);
				return;
			}
			let text;
			if (params.title in Twinkle.batchdelete.unlinkCache) {
				text = Twinkle.batchdelete.unlinkCache[params.title];
			} else {
				text = pageobj.getPageText();
			}
			const old_text = text;
			const ysarchives_page = new Morebits.wikitext.page(text);
			text = ysarchives_page.removeLink(params.page).getText();
			Twinkle.batchdelete.unlinkCache[params.title] = text;
			if (text === old_text) {
				// Nothing to do, return
				params.unlinker.workerSuccess(pageobj);
				return;
			}
			pageobj.setEditSummary(
				window.wgULS('取消到已删页面', '取消到已刪頁面') + params.page + window.wgULS('的链入', '的連入')
			);
			pageobj.setChangeTags(Twinkle.changeTags);
			pageobj.setPageText(text);
			pageobj.setCreateOption('nocreate');
			pageobj.setMaxConflictRetries(10);
			pageobj.save(params.unlinker.workerSuccess, params.unlinker.workerFailure);
		},
		unlinkImageInstancesMain: (apiobj) => {
			const xml = apiobj.responseXML;
			const pages = $(xml)
				.find('iu')
				.map((_index, element) => {
					return $(element).attr('title');
				})
				.get();
			if (!pages.length) {
				return;
			}
			const unlinker = new Morebits.batchOperation(
				`正在取消到 ${apiobj.params.page}${window.wgULS(' 的链入', ' 的連入')}`
			);
			unlinker.setOption('chunkSize', Twinkle.getPref('batchChunks'));
			unlinker.setPageList(pages);
			unlinker.run((pageName) => {
				const ysarchives_page = new Morebits.wiki.page(
					pageName,
					`取消 ${pageName}${window.wgULS(' 的文件使用', ' 的檔案使用')}`
				);
				const params = {
					...apiobj.params,
				};
				params.title = pageName;
				params.unlinker = unlinker;
				ysarchives_page.setCallbackParameters(params);
				ysarchives_page.load(Twinkle.batchdelete.callbacks.unlinkImageInstances);
			});
		},
		unlinkImageInstances: (pageobj) => {
			const params = pageobj.getCallbackParameters();
			if (!pageobj.exists()) {
				// we probably just deleted it, as a recursive backlink
				params.unlinker.workerSuccess(pageobj);
				return;
			}
			const image = params.page.replace(new RegExp(`^${Morebits.namespaceRegex(6)}:`), '');
			let text;
			if (params.title in Twinkle.batchdelete.unlinkCache) {
				text = Twinkle.batchdelete.unlinkCache[params.title];
			} else {
				text = pageobj.getPageText();
			}
			const old_text = text;
			const ysarchives_page = new Morebits.wikitext.page(text);
			text = ysarchives_page
				.commentOutImage(image, window.wgULS('因文件已删，故注解', '因檔案已刪，故註解'))
				.getText();
			Twinkle.batchdelete.unlinkCache[params.title] = text;
			if (text === old_text) {
				pageobj
					.getStatusElement()
					.error(
						`在 ${pageobj.getPageName()} 上取消 ${image}${window.wgULS(' 的文件使用失败', ' 的檔案使用失敗')}`
					);
				params.unlinker.workerFailure(pageobj);
				return;
			}
			pageobj.setEditSummary(
				window.wgULS('取消使用已被删除文件', '取消使用已被刪除檔案') +
					image +
					window.wgULS('，因为：', '，因為：') +
					params.reason
			);
			pageobj.setChangeTags(Twinkle.changeTags);
			pageobj.setPageText(text);
			pageobj.setCreateOption('nocreate');
			pageobj.setMaxConflictRetries(10);
			pageobj.save(params.unlinker.workerSuccess, params.unlinker.workerFailure);
		},
	};
	Twinkle.addInitCallback(Twinkle.batchdelete, 'batchdelete');
})();

export {};
