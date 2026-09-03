// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/*! Twinkle.js - twinklexfd.js */
import {createApp, h} from 'vue';
import TwXfdDialog from './ui/TwXfdDialog.vue';

(function twinklexfd() {
	/**
	 * twinklexfd.js: XFD module
	 * Mode of invocation: Tab ("XFD")
	 * Active on: Existing, non-special pages,
	 * except for file pages with no local file
	 * which are not redirects
	 */
	Twinkle.xfd = () => {
		// Disable on:
		// * special pages
		// * non-existent pages
		// * non-local files, whether there is a local page or not (unneeded local pages of files on Share are eligible for CSD F2)
		// * file pages without actual files
		if (
			mw.config.get('wgNamespaceNumber') < 0 ||
			!mw.config.get('wgArticleId') ||
			(mw.config.get('wgNamespaceNumber') === 6 &&
				(document.querySelector('#mw-sharedupload') ||
					(!document.querySelector('#mw-imagepage-section-filehistory') && !Morebits.isPageRedirect())))
		) {
			return;
		}
		Twinkle.addPortletLink(
			Twinkle.xfd.callback,
			window.wgULS('提删', '提刪'),
			'tw-xfd',
			window.wgULS('提交删除讨论', '提交刪除討論')
		);
	};
	Twinkle.xfd.currentRationale = null;
	// error callback on Morebits.status.object
	Twinkle.xfd.printRationale = () => {
		if (Twinkle.xfd.currentRationale) {
			Morebits.status.printUserText(
				Twinkle.xfd.currentRationale,
				window.wgULS(
					'您的理由已在下方提供，若您想重新提交，请将其复制到一新窗口中：',
					'您的理由已在下方提供，若您想重新提交，請將其複製到一新視窗中：'
				)
			);
			// only need to print the rationale once
			Twinkle.xfd.currentRationale = null;
		}
	};
	Twinkle.xfd.callback = () => {
		const root = document.createElement('div');
		document.body.append(root);
		const afdDefaultCategory = Twinkle.getPref('afdDefaultCategory');
		let initialXfdCat = 'delete';
		if (afdDefaultCategory === 'same') {
			const saved = localStorage.getItem('Twinkle_afdCategory');
			initialXfdCat = saved ?? 'delete';
			if (saved === null) {
				localStorage.setItem('Twinkle_afdCategory', 'delete');
			}
		}
		const fwdcsdReason = decodeURIComponent(document.querySelector('#delete-reason').textContent).replace(
			/\+/g,
			' '
		);
		const app = createApp({
			render: () => {
				return h(TwXfdDialog, {
					title: window.wgULS('提交存废讨论', '提交存廢討論'),
					defaultCategory: mw.config.get('wgNamespaceNumber') === 6 ? 'ffd' : 'afd',
					showFwdCsd: !!Twinkle.getPref('FwdCsdToXfd'),
					initialXfdCat,
					rememberCategory: afdDefaultCategory === 'same',
					fameDefaultReason: Twinkle.getPref('afdFameDefaultReason'),
					substubDefaultReason: Twinkle.getPref('afdSubstubDefaultReason'),
					fwdcsdReason,
					showNoinclude:
						mw.config.get('wgNamespaceNumber') === 10 &&
						mw.config.get('wgPageContentModel') !== 'Scribunto',
					noincludeDisabled: mw.config.get('wgPageContentModel') === 'Scribunto',
					footerLinks: [
						{text: window.wgULS('提删设置', '提刪設定'), href: mw.util.getUrl('H:TW/PREF#xfd')},
						{text: window.wgULS('Twinkle帮助', 'Twinkle說明'), href: mw.util.getUrl('H:TW/DOC#xfd')},
					],
					onSubmit: (params, statusContainer) => {
						Twinkle.xfd.callback.evaluate(params, statusContainer);
					},
					onClose: () => {
						app.unmount();
						root.remove();
					},
				});
			},
		});
		app.mount(root);
	};
	Twinkle.xfd.callbacks = {
		afd: {
			main: (tagging_page) => {
				const params = tagging_page.getCallbackParameters();
				Twinkle.xfd.callbacks.afd.taggingArticle(tagging_page);
				// Adding discussion
				const discussion_page = new Morebits.wiki.page(
					params.logpage,
					window.wgULS('加入讨论到当日列表', '加入討論到當日列表')
				);
				discussion_page.setFollowRedirect(true);
				discussion_page.setCallbackParameters(params);
				discussion_page.load(Twinkle.xfd.callbacks.afd.todaysList);
				// Notification to first contributor
				if (params.notify) {
					// Disallow warning yourself
					if (params.creator === mw.config.get('wgUserName')) {
						Morebits.status.warn(
							`${window.wgULS('通知页面创建者（', '通知頁面建立者（') + params.creator}）`,
							window.wgULS('您创建了该页，跳过通知', '您建立了該頁，跳過通知')
						);
						params.creator = null;
					} else {
						const talkPageName = `User talk:${params.creator}`;
						const usertalkpage = new Morebits.wiki.page(
							talkPageName,
							`${window.wgULS('通知页面创建者（', '通知頁面建立者（') + params.creator}）`
						);
						const notifytext = '\n{{'
							.concat('subst:')
							.concat(`AFDNote|${Morebits.pageNameNorm}}}--~~`, '~~');
						usertalkpage.setAppendText(notifytext);
						usertalkpage.setEditSummary(`通知：页面[[${Morebits.pageNameNorm}]]存废讨论提名`);
						usertalkpage.setChangeTags(Twinkle.changeTags);
						usertalkpage.setCreateOption('recreate');
						usertalkpage.setWatchlist(Twinkle.getPref('xfdWatchUser'));
						usertalkpage.setFollowRedirect(true, false);
						usertalkpage.append();
					}
					// add this nomination to the user's userspace log, if the user has enabled it
					if (params.lognomination) {
						Twinkle.xfd.callbacks.addToLog(params, params.creator);
					}
					// or, if not notifying, add this nomination to the user's userspace log without the initial contributor's name
				} else if (params.lognomination) {
					Twinkle.xfd.callbacks.addToLog(params, null);
				}
			},
			taggingArticle: (pageobj) => {
				let text = pageobj.getPageText();
				const params = pageobj.getCallbackParameters();
				let tag = `{{vfd|${Morebits.string.formatReasonText(params.xfdreason)}`;
				if (Morebits.isPageRedirect()) {
					tag += '|r';
				}
				tag += '|date={{'.concat('subst:', '#time:Y/m/d}}}}');
				if (params.noinclude) {
					tag = `<noinclude>${tag}</noinclude>`;
					// 只有表格需要单独加回车，其他情况加回车会破坏模板。
					if (text.indexOf('{|') === 0) {
						tag += '\n';
					}
				} else {
					tag += '\n';
				}
				// Then, test if there are speedy deletion-related templates on the article.
				const textNoSd = text.replace(
					/\{\{\s*(db(-\w*)?|d|delete|(?:hang|hold)[- ]?on)\s*(\|(?:\{\{[^{}]*\}\}|[^{}])*)?\}\}\s*/gi,
					''
				);
				if (
					text !== textNoSd &&
					confirm(
						window.wgULS('在页面上找到快速删除模板，要移除吗？', '在頁面上找到快速刪除模板，要移除嗎？')
					)
				) {
					text = textNoSd;
				}
				const textNoNotMandarin = text.replace(
					/\{\{\s*(NotMandarin|Notchinese|非中文|非現代漢語|非现代汉语|非現代標準漢語|非现代标准汉语)\s*(\|(?:\{\{[^{}]*\}\}|[^{}])*)?\}\}\s*/gi,
					''
				);
				if (
					text !== textNoNotMandarin &&
					confirm(
						window.wgULS(
							'在页面上找到非现代标准汉语模板，要移除吗？',
							'在頁面上找到非現代標準漢語模板，要移除嗎？'
						)
					)
				) {
					text = textNoNotMandarin;
				}
				const textNoAfc = text.replace(/{{\s*AFC submission\s*\|\s*\|[^}]*?}}\s*/gi, '');
				if (
					text !== textNoAfc &&
					confirm(window.wgULS('在页面上找到AFC提交模板，要移除吗？', '在頁面上找到AFC提交模板，要移除嗎？'))
				) {
					text = textNoAfc;
				}
				// Mark the page as patrolled, if wanted
				if (Twinkle.getPref('markXfdPagesAsPatrolled')) {
					pageobj.patrol();
				}
				// Insert tag after short description or any hatnotes
				const ysarchives_page = new Morebits.wikitext.page(text);
				text = ysarchives_page.insertAfterTemplates(tag, Twinkle.hatnoteRegex).getText();
				pageobj.setPageText(text);
				pageobj.setEditSummary(
					`${window.wgULS('页面存废讨论：[[', '頁面存廢討論：[[') + params.logpage}#${Morebits.pageNameNorm}]]`
				);
				pageobj.setChangeTags(Twinkle.changeTags);
				pageobj.setWatchlist(Twinkle.getPref('xfdWatchPage'));
				pageobj.save();
			},
			todaysList: (pageobj) => {
				let text = pageobj.getPageText();
				const params = pageobj.getCallbackParameters();
				let type = '';
				let to = '';
				switch (params.xfdcat) {
					case 'fwdcsd':
					case 'merge':
						to = params.mergeinto;
					/* Fall through */
					default:
						type = params.xfdcat;
						break;
				}
				let append = true;
				switch (type) {
					case 'fame':
					case 'substub':
					case 'batch': {
						const commentText = `<!-- Twinkle: User:${mw.config.get(
							'wgUserName'
						)} 的 ${type} 提删插入点，请勿更改或移除此行，除非不再于此页面提删 -->`;
						let newText = `===[[:${Morebits.pageNameNorm}]]===`;
						if (type === 'fame') {
							newText += `\n{{Findsources|${Morebits.pageNameNorm}}}`;
						}
						if (text.includes(commentText)) {
							text = text.replace(commentText, `${newText}\n\n${commentText}`);
							pageobj.setPageText(text);
							append = false;
						} else {
							const safesubst = 'safesubst';
							const appendText = `\n{{${safesubst}${`:SafeAfdHead}}\n${
								{
									fame: '== 30天后仍挂有{{tl|notability}}模板的条目 ==\n<span style="font-size: smaller;">（已挂[[Template:notability|不符收录标准模板]]30天）</span>',
									substub:
										'== 30天后仍挂有{{tl|substub}}模板的条目 ==\n<span style="font-size: smaller;">（已挂[[Template:substub|小小条目模板]]30天）</span>',
									batch: '== 批量提删 ==',
								}[type]
							}\n${newText}\n\n${commentText}\n----\n:建议：删除前述页面；理由：${Morebits.string.formatReasonText(
								params.xfdreason
							)}\n提报以上${
								{
									fame: '<u>不符合收录标准</u>条目',
									substub: '<u>长度过短</u>条目',
									batch: '页面',
								}[type]
							}的求闻编者及时间：<br id="no-new-title">~~`.concat('~~')}`;
							pageobj.setAppendText(appendText);
						}
						break;
					}
					default:
						pageobj.setAppendText(
							'\n{{'.concat(
								'subst:',
								`DRItem|Type=${type}|DRarticles=${
									Morebits.pageNameNorm
								}|Reason=${Morebits.string.formatReasonText(params.xfdreason)}${
									params.fwdcsdreason.trim() === '' ? '' : `<br>\n转交理由：${params.fwdcsdreason}`
								}|To=${to}}}~~`.concat('~~')
							)
						);
						break;
				}
				pageobj.setEditSummary(`加入[[${Morebits.pageNameNorm}]]`);
				pageobj.setChangeTags(Twinkle.changeTags);
				pageobj.setWatchlist(Twinkle.getPref('xfdWatchDiscussion'));
				pageobj.setCreateOption('recreate');
				if (append) {
					pageobj.append();
				} else {
					pageobj.save();
				}
				Twinkle.xfd.currentRationale = null;
			},
			lookupCreation: (target_page) => {
				target_page.getStatusElement().info('完成');
				const params = target_page.getCallbackParameters();
				params.creator = target_page.getCreator();
				// Tagging page
				const tagging_page = new Morebits.wiki.page(
					mw.config.get('wgPageName'),
					window.wgULS('加入存废讨论模板到页面', '加入存廢討論模板到頁面')
				);
				tagging_page.setFollowRedirect(false);
				tagging_page.setCallbackParameters(params);
				tagging_page.load(Twinkle.xfd.callbacks.afd.tryTagging);
			},
			tryTagging: (tagging_page) => {
				const statelem = tagging_page.getStatusElement();
				// defaults to /doc for lua modules, which may not exist
				if (!tagging_page.exists()) {
					statelem.error(window.wgULS('页面不存在，可能已被删除', '頁面不存在，可能已被刪除'));
					return;
				}
				const text = tagging_page.getPageText();
				const xfd = /(?:\{\{([rsaiftcmv]fd|md1|proposed deletion)[^{}]*?\}\})/i.exec(text);
				if (
					xfd &&
					!confirm(
						window.wgULS('删除相关模板{{', '刪除相關模板{{') +
							xfd[1] +
							window.wgULS(
								'}}已被置于页面中，您是否仍想继续提报？',
								'}}已被置於頁面中，您是否仍想繼續提報？'
							)
					)
				) {
					statelem.error(window.wgULS('页面已被提交至存废讨论。', '頁面已被提交至存廢討論。'));
					return;
				}
				const copyvio = /(?:\{\{\s*(copyvio)[^{}]*?\}\})/i.exec(text);
				if (copyvio) {
					statelem.error(window.wgULS('页面中已有著作权验证模板。', '頁面中已有著作權驗證模板。'));
					return;
				}
				Twinkle.xfd.callbacks.afd.main(tagging_page);
			},
		},
		ffd: {
			main: (tagging_page) => {
				const params = tagging_page.getCallbackParameters();
				Twinkle.xfd.callbacks.ffd.taggingImage(tagging_page);
				// Adding discussion
				const ysarchives_page = new Morebits.wiki.page(
					params.logpage,
					window.wgULS('加入讨论到当日列表', '加入討論到當日列表')
				);
				ysarchives_page.setFollowRedirect(true);
				ysarchives_page.setCallbackParameters(params);
				ysarchives_page.load(Twinkle.xfd.callbacks.ffd.todaysList);
				// Notification to first contributor
				if (params.notify) {
					// Disallow warning yourself
					if (params.creator === mw.config.get('wgUserName')) {
						Morebits.status.warn(
							`${window.wgULS('通知页面创建者（', '通知頁面建立者（') + params.creator}）`,
							window.wgULS('您创建了该页，跳过通知', '您建立了該頁，跳過通知')
						);
						return;
					}
					const talkPageName = `User talk:${params.creator}`;
					const usertalkpage = new Morebits.wiki.page(
						talkPageName,
						`${window.wgULS('通知页面创建者（', '通知頁面建立者（') + params.creator}）`
					);
					const notifytext = '\n{{'.concat('subst:', `idw|File:${mw.config.get('wgTitle')}}}`, '--~~', '~~');
					usertalkpage.setAppendText(notifytext);
					usertalkpage.setEditSummary(`通知：文件[[${Morebits.pageNameNorm}]]存废讨论提名`);
					usertalkpage.setChangeTags(Twinkle.changeTags);
					usertalkpage.setCreateOption('recreate');
					usertalkpage.setWatchlist(Twinkle.getPref('xfdWatchUser'));
					usertalkpage.setFollowRedirect(true, false);
					usertalkpage.append();
					// add this nomination to the user's userspace log, if the user has enabled it
					if (params.lognomination) {
						Twinkle.xfd.callbacks.addToLog(params, params.creator);
					}
					// or, if not notifying, add this nomination to the user's userspace log without the initial contributor's name
				} else if (params.lognomination) {
					Twinkle.xfd.callbacks.addToLog(params, null);
				}
			},
			taggingImage: (pageobj) => {
				const text = pageobj.getPageText();
				const params = pageobj.getCallbackParameters();
				pageobj.setPageText(
					`{{ifd|${Morebits.string.formatReasonText(params.xfdreason)}|date={{`.concat(
						'subst:',
						`#time:c}}}}\n${text}`
					)
				);
				pageobj.setEditSummary(
					`${window.wgULS('文件存废讨论：[[', '檔案存廢討論：[[') + params.logpage}#${Morebits.pageNameNorm}]]`
				);
				pageobj.setChangeTags(Twinkle.changeTags);
				pageobj.setWatchlist(Twinkle.getPref('xfdWatchPage'));
				pageobj.setCreateOption('recreate'); // it might be possible for a file to exist without a description page
				pageobj.save();
			},
			todaysList: (pageobj) => {
				// const text = pageobj.getPageText();
				const params = pageobj.getCallbackParameters();
				pageobj.setAppendText(
					'\n{{'.concat(
						'subst:',
						`IfdItem|Filename=${mw.config.get('wgTitle')}|Uploader=${
							params.creator
						}|Reason=${Morebits.string.formatReasonText(params.xfdreason)}}}--~~`.concat('~~')
					)
				);
				pageobj.setEditSummary(`加入[[${Morebits.pageNameNorm}]]`);
				pageobj.setChangeTags(Twinkle.changeTags);
				pageobj.setWatchlist(Twinkle.getPref('xfdWatchDiscussion'));
				pageobj.setCreateOption('recreate');
				pageobj.append(() => {
					Twinkle.xfd.currentRationale = null; // any errors from now on do not need to print the rationale, as it is safely saved on-wiki
				});
			},

			lookupCreation: (target_page) => {
				target_page.getStatusElement().info('完成');
				const params = target_page.getCallbackParameters();
				params.creator = target_page.getCreator();
				// Tagging file
				const tagging_page = new Morebits.wiki.page(
					mw.config.get('wgPageName'),
					window.wgULS('加入存废讨论模板到文件描述页', '加入存廢討論模板到檔案描述頁')
				);
				tagging_page.setFollowRedirect(false);
				tagging_page.setCallbackParameters(params);
				tagging_page.load(Twinkle.xfd.callbacks.ffd.tryTagging);
			},
			tryTagging: (tagging_page) => {
				const statelem = tagging_page.getStatusElement();
				if (!tagging_page.exists()) {
					statelem.error(window.wgULS('页面不存在，可能已被删除', '頁面不存在，可能已被刪除'));
					return;
				}
				const text = tagging_page.getPageText();
				const xfd = /(?:\{\{([rsaiftcmv]fd|md1|proposed deletion)[^{}]*?\}\})/i.exec(text);
				if (
					xfd &&
					!confirm(
						window.wgULS('删除相关模板{{', '刪除相關模板{{') +
							xfd[1] +
							window.wgULS(
								'}}已被置于页面中，您是否仍想继续提报？',
								'}}已被置於頁面中，您是否仍想繼續提報？'
							)
					)
				) {
					statelem.error(window.wgULS('页面已被提交至存废讨论。', '頁面已被提交至存廢討論。'));
					return;
				}
				Twinkle.xfd.callbacks.ffd.main(tagging_page);
			},
		},
		addToLog: (params, initialContrib) => {
			const editsummary =
				window.wgULS('记录对[[', '記錄對[[') +
				Morebits.pageNameNorm +
				window.wgULS(']]的存废讨论提名', ']]的存廢討論提名');
			const usl = new Morebits.userspaceLogger(Twinkle.getPref('xfdLogPageName'));
			usl.initialText = window.wgULS(
				`这是该用户使用[[H:TW|Twinkle]]的提删模块做出的[[LIB:XFD|存废讨论]]提名列表。\n\n若您不再想保留此日志，请在[[${Twinkle.getPref(
					'configPage'
				)}|参数设置]]中关掉，并使用[[LIB:CSD#O1|CSD O1]]提交快速删除。`,
				`這是該使用者使用[[H:TW|Twinkle]]的提刪模塊做出的[[LIB:XFD|存廢討論]]提名列表。\n\n若您不再想保留此日誌，請在[[${Twinkle.getPref(
					'configPage'
				)}|偏好設定]]中關掉，並使用[[LIB:CSD#O1|CSD O1]]提交快速刪除。`
			);
			let xfdCatName;
			switch (params.xfdcat) {
				case 'delete':
					xfdCatName = window.wgULS('删除', '刪除');
					break;
				case 'merge':
					xfdCatName = window.wgULS('合并到', '合併到');
					break;
				case 'fwdcsd':
					xfdCatName = window.wgULS('转交自快速删除候选', '轉交自快速刪除候選');
					break;
				case 'fame':
					xfdCatName = window.wgULS('批量关注度提删', '批次關注度提刪');
					break;
				case 'substub':
					xfdCatName = window.wgULS('批量小小作品提删', '批次小小作品提刪');
					break;
				case 'batch':
					xfdCatName = window.wgULS('批量其他提删', '批次其他提刪');
					break;
				default:
					xfdCatName = window.wgULS('文件存废讨论', '檔案存廢討論');
					break;
			}
			// If a logged file is deleted but exists on remote repo, the wikilink will be blue, so provide a link to the log
			let appendText = `# [[:${Morebits.pageNameNorm}]]`;
			if (mw.config.get('wgNamespaceNumber') === 6) {
				appendText += `（[{{fullurl:Special:Log|page=${mw.util.wikiUrlencode(
					mw.config.get('wgPageName')
				)}}} ${window.wgULS('日志', '日誌')}]）`;
			}
			appendText += `：${xfdCatName}`;
			if (params.xfdcat === 'merge') {
				appendText += `[[:${params.mergeinto}]]`;
			}
			appendText += '。';
			if (params.xfdreason) {
				appendText += `'''${
					params.xfdcat === 'fwdcsd' ? window.wgULS('原删除理据', '原刪除理據') : window.wgULS('理据', '理據')
				}'''：${Morebits.string.formatReasonForLog(params.xfdreason)}`;
				appendText = Morebits.string.appendPunctuation(appendText);
			}
			if (params.fwdcsdreason) {
				appendText += `'''${
					params.xfdcat === 'fwdcsd' ? window.wgULS('转交理据', '轉交理據') : window.wgULS('理据', '理據')
				}'''：${Morebits.string.formatReasonForLog(params.fwdcsdreason)}`;
				appendText = Morebits.string.appendPunctuation(appendText);
			}
			if (initialContrib) {
				appendText += `；通知{{user|${initialContrib}}}`;
			}
			appendText += ' ~~'.concat('~~', '~\n');
			usl.changeTags = Twinkle.changeTags;
			usl.log(appendText, editsummary);
		},
	};
	Twinkle.xfd.callback.evaluate = (params, statusContainer) => {
		if (params.xfdcat === 'merge' && params.mergeinto.trim() === '') {
			void mw.notify(window.wgULS('请提供合并目标！', '請提供合併目標！'), {
				type: 'warn',
				tag: 'twinklexfd',
			});
			return;
		}
		Morebits.status.init(statusContainer);
		Twinkle.xfd.currentRationale = params.xfdreason;
		Morebits.status.onError(Twinkle.xfd.printRationale);
		if (!params.category) {
			Morebits.status.error('错误', '未定义的动作');
			return;
		}
		let target_page;
		const date = new Morebits.date(); // XXX: avoid use of client clock, still used by TfD, FfD and CfD
		switch (params.category) {
			case 'afd':
				// AFD
				params.logpage = `LIB_talk:存废讨论/记录/${date.format('YYYY/MM/DD', 'utc')}`;
				params.lognomination =
					Twinkle.getPref('logXfdNominations') &&
					!Twinkle.getPref('noLogOnXfdNomination').includes(params.xfdcat);
				Morebits.wiki.addCheckpoint();
				// Updating data for the action completed event
				Morebits.wiki.actionCompleted.redirect = params.logpage;
				Morebits.wiki.actionCompleted.notice = window.wgULS(
					'提名完成，重定向到讨论页',
					'提名完成，重新導向到討論頁'
				);
				// Lookup creation
				target_page = new Morebits.wiki.page(
					mw.config.get('wgPageName'),
					window.wgULS('获取页面创建信息', '取得頁面建立資訊')
				);
				target_page.setCallbackParameters(params);
				if (mw.config.get('wgPageContentModel') === 'wikitext') {
					target_page.setLookupNonRedirectCreator(true); // Look for author of first non-redirect revision
				}

				target_page.lookupCreation(Twinkle.xfd.callbacks.afd.lookupCreation);
				Morebits.wiki.removeCheckpoint();
				break;
			case 'ffd': {
				// FFD
				params.logpage = `LIB_talk:存废讨论/记录/${date.format('YYYY/MM/DD', 'utc')}`;
				params.lognomination =
					Twinkle.getPref('logXfdNominations') && !Twinkle.getPref('noLogOnXfdNomination').includes('ffd');
				Morebits.wiki.addCheckpoint();
				// Updating data for the action completed event
				Morebits.wiki.actionCompleted.redirect = params.logpage;
				Morebits.wiki.actionCompleted.notice = window.wgULS(
					'提名完成，重定向到讨论页',
					'提名完成，重新導向到討論頁'
				);
				// Lookup creation
				const ysarchives_page = new Morebits.wiki.page(
					mw.config.get('wgPageName'),
					window.wgULS('获取页面创建信息', '取得頁面建立資訊')
				);
				ysarchives_page.setCallbackParameters(params);
				ysarchives_page.setLookupNonRedirectCreator(true); // Look for author of first non-redirect revision
				ysarchives_page.lookupCreation(Twinkle.xfd.callbacks.ffd.lookupCreation);
				Morebits.wiki.removeCheckpoint();
				break;
			}
			default:
				void mw.notify('twinklexfd：未定义的类别', {
					type: 'warn',
					tag: 'twinklexfd',
				});
				break;
		}
	};
	Twinkle.addInitCallback(Twinkle.xfd, 'xfd');
})();

export {};
