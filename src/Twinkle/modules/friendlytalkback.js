// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

/*! Twinkle.js - friendlytalkback.js */
import {createApp, h} from 'vue';
import TwTalkbackDialog from './ui/TwTalkbackDialog.vue';

(function friendlytalkback() {
	/**
	 * friendlytalkback.js: Talkback module
	 * Mode of invocation: Tab ("TB")
	 * Active on: Any page with relevant user name (userspace, contribs, etc.) except IP ranges
	 * Config directives in: FriendlyConfig
	 */
	Twinkle.talkback = () => {
		if (!mw.config.get('wgRelevantUserName')) {
			return;
		}
		Twinkle.addPortletLink(
			Twinkle.talkback.callback,
			'通告',
			'friendly-talkback',
			window.wgULS('回复通告', '回覆通告')
		);
	};
	Twinkle.talkback.callback = () => {
		if (
			mw.config.get('wgRelevantUserName') === mw.config.get('wgUserName') &&
			!confirm(window.wgULS('您寂寞到了要自己回复自己的程度么？', '您寂寞到了要自己回覆自己的程度麼？'))
		) {
			return;
		}
		const root = document.createElement('div');
		document.body.append(root);
		const noticeboards = Object.entries(Twinkle.talkback.noticeboards).map(([value, data]) => {
			return {
				value,
				label: data.label,
			};
		});
		const defaultNoticeboard = Object.entries(Twinkle.talkback.noticeboards).find(([, data]) => {
			return data.defaultSelected;
		})?.[0];
		let previewer = null;
		const app = createApp({
			render: () => {
				return h(TwTalkbackDialog, {
					title: window.wgULS('回复通告', '回覆通告'),
					noticeboards,
					defaultNoticeboard,
					footerLinks: [
						{
							text: window.wgULS('关于{{talkback}}', '關於{{talkback}}'),
							href: mw.util.getUrl('Template:Talkback'),
						},
						{text: window.wgULS('通告设置', '通告設定'), href: mw.util.getUrl('H:TW/PREF#talkback')},
						{text: window.wgULS('Twinkle帮助', 'Twinkle說明'), href: mw.util.getUrl('H:TW/DOC#talkback')},
					],
					onSubmit: (params, statusContainer) => {
						Twinkle.talkback.evaluate(params, statusContainer);
					},
					onPreview: (params, previewBox) => {
						if (previewer) {
							previewer.closePreview();
						}
						previewer = new Morebits.wiki.preview(previewBox);
						const [noticetext] = Twinkle.talkback.getNoticeWikitext(
							params.tbtarget,
							params.page,
							params.section,
							params.message
						);
						previewer.beginRender(
							noticetext,
							`User_talk:${mw.config.get('wgRelevantUserName')}` // Force wikitext/correct username
						);
					},
					onTargetChanged: () => {
						if (previewer) {
							previewer.closePreview();
						}
					},
					onClose: () => {
						app.unmount();
						root.remove();
					},
				});
			},
		});
		app.mount(root);
		// Check whether the user has opted out from talkback
		const query = {
			action: 'query',
			prop: 'extlinks',
			titles: `User talk:${mw.config.get('wgRelevantUserName')}`,
			elquery: 'userjs.invalid/noTalkback',
			ellimit: '1',
		};
		const ysarchives_api = new Morebits.wiki.api(
			window.wgULS('抓取退出通告信息', '抓取退出通告資訊'),
			query,
			Twinkle.talkback.callback.optoutStatus
		);
		ysarchives_api.post();
	};
	Twinkle.talkback.optout = '';
	Twinkle.talkback.callback.optoutStatus = (apiobj) => {
		const $el = $(apiobj.getXML()).find('el');
		if ($el.length) {
			Twinkle.talkback.optout =
				mw.config.get('wgRelevantUserName') + window.wgULS('不希望收到回复通告', '不希望收到回覆通告');
			const url = $el.text();
			const reason = mw.util.getParamValue('reason', url);
			Twinkle.talkback.optout += reason ? `：${Morebits.string.appendPunctuation(reason)}` : '。';
		}
		const optoutMessage = document.querySelector('#twinkle-talkback-optout-message');
		if (optoutMessage) {
			optoutMessage.textContent = Twinkle.talkback.optout;
		}
	};
	Twinkle.talkback.noticeboards = {
		affp: {
			label: `LIB:AF/FP（${window.wgULS('过滤器处理/报告', '過濾器處理/報告')}）`,
			title: window.wgULS('过滤器错误报告有新回应', '過濾器錯誤報告有新回應'),
			content: `${window.wgULS(
				'您的[[LIB_talk:过滤器处理/报告|过滤器错误报告]]已有回应，请前往查看。',
				'您的[[LIB_talk:过滤器处理/报告|過濾器錯誤報告]]已有回應，請前往查看。'
			)}--~~`.concat('~~'),
			editSummary: window.wgULS(
				'有关[[LIB_talk:过滤器处理/报告|过滤器错误报告]]的通知',
				'有關[[LIB_talk:过滤器处理/报告|過濾器錯誤報告]]的通知'
			),
			defaultSelected: true,
		},
		sbl: {
			label: 'Spam-blacklist',
			title: window.wgULS('垃圾链接黑名单请求有新回应', '垃圾連結黑名單請求有新回應'),
			content: `${window.wgULS(
				'您的[[LIB_talk:管理员告示板|垃圾链接黑名单请求]]已有回应，请前往查看。',
				'您的[[LIB_talk:管理员告示板|垃圾連結黑名單請求]]已有回應，請前往查看。'
			)}--~~`.concat('~~'),
			editSummary: window.wgULS(
				'有关[[LIB_talk:管理员告示板|垃圾链接黑名单请求]]的通知',
				'有關[[LIB_talk:管理员告示板|垃圾連結黑名單請求]]的通知'
			),
		},
		shl: {
			label: 'Spam-whitelist',
			title: window.wgULS('垃圾链接白名单请求有新回应', '垃圾連結白名單請求有新回應'),
			content: `${window.wgULS(
				'您的[[LIB_talk:管理员告示板|垃圾链接白名单请求]]已有回应，请前往查看。',
				'您的[[LIB_talk:管理员告示板|垃圾連結白名單請求]]已有回應，請前往查看。'
			)}--~~`.concat('~~'),
			editSummary: window.wgULS(
				'有关[[LIB_talk:管理员告示板|垃圾链接白名单请求]]的通知',
				'有關[[LIB_talk:管理员告示板|垃圾連結白名單請求]]的通知'
			),
		},
	};
	Twinkle.talkback.evaluate = (params, statusContainer) => {
		const {tbtarget} = params;
		const {page} = params;
		const {section} = params;
		const {message} = params;
		let editSummary;
		switch (tbtarget) {
			case 'notice':
				({editSummary} = Twinkle.talkback.noticeboards[page]);

				break;

			case 'mail':
				editSummary = window.wgULS('通知：有新邮件', '通知：有新郵件');

				break;

			case 'see':
				editSummary = `${window.wgULS('请看看', '請看看')}[[:${page}${section ? `#${section}` : ''}]]${window.wgULS(
					'上的讨论',
					'上的討論'
				)}`;

				break;

			default:
				// tbtarget one of mytalk, usertalk, other
				editSummary = `${window.wgULS('回复通告', '回覆通告')}（[[:`;
				if (tbtarget !== 'other' && !new RegExp(`^\\s*${Morebits.namespaceRegex(3)}:`, 'i').test(page)) {
					editSummary += 'User talk:';
				}
				editSummary += `${page + (section ? `#${section}` : '')}]])`;
		}
		Morebits.status.init(statusContainer);
		const fullUserTalkPageName = `${
			mw.config.get('wgFormattedNamespaces')[mw.config.get('wgNamespaceIds').user_talk]
		}:${mw.config.get('wgRelevantUserName')}`;
		Morebits.wiki.actionCompleted.redirect = fullUserTalkPageName;
		Morebits.wiki.actionCompleted.notice = window.wgULS(
			'回复通告完成，将在几秒内刷新页面',
			'回覆通告完成，將在幾秒內重新整理頁面'
		);
		const text = `\n\n${Twinkle.talkback.getNoticeWikitext(tbtarget, page, section, message)[0]}`;
		const talkpage = new Morebits.wiki.page(fullUserTalkPageName, window.wgULS('加入回复通告', '加入回覆通告'));
		talkpage.setEditSummary(editSummary);
		talkpage.setChangeTags(Twinkle.changeTags);
		talkpage.setAppendText(text);
		talkpage.setCreateOption('recreate');
		talkpage.setMinorEdit(Twinkle.getPref('markTalkbackAsMinor'));
		talkpage.setFollowRedirect(true);
		talkpage.append();
	};

	Twinkle.talkback.getNoticeWikitext = (tbtarget, page, section, message) => {
		let text;
		let title;
		let content;
		if (tbtarget === 'notice') {
			({title} = Twinkle.talkback.noticeboards[page]);
			content = Morebits.string.safeReplace(Twinkle.talkback.noticeboards[page].content, '$SECTION', section);
			text = `== ${title} ==\n${content}`;
		} else if (tbtarget === 'see') {
			title = page + window.wgULS('的相关讨论', '的相關討論');
			content = '{{'.concat(
				'subst:',
				`Please see|location=${page}${section ? `#${section}` : ''}|more=${message.trim()}}}`
			);
			text = '{{'.concat(
				'subst:',
				`Please see|location=${page}${section ? `#${section}` : ''}|more=${message.trim()}}}`
			);
		} else {
			text = '==';
			if (tbtarget === 'mail') {
				title = Twinkle.getPref('mailHeading');
				content = `{{You've got mail|subject=${section}|ts=~~`.concat('~', '~~}}');
				text += `${Twinkle.getPref('mailHeading')}==\n{{You've got mail|subject=${section}`;
			} else {
				// tbtarget one of mytalk, usertalk, other
				// clean talkback heading: strip section header markers that were erroneously suggested in the documentation
				title = Twinkle.getPref('talkbackHeading').replace(/^\s*=+\s*(.*?)\s*=+$\s*/, '$1');
				content = `{{talkback|${page}${section ? `|${section}` : ''}`;
				text += `${Twinkle.getPref('talkbackHeading').replace(
					/^\s*=+\s*(.*?)\s*=+$\s*/,
					'$1'
				)}==\n{{talkback|${page}${section ? `|${section}` : ''}`;
			}
			content += '|ts=~~'.concat('~', '~~}}');
			text += '|ts=~~'.concat('~', '~~}}');
			if (message) {
				content += `\n${message}`;
				text += `\n${message}  ~~`.concat('~~');
			} else if (Twinkle.getPref('insertTalkbackSignature')) {
				text += '\n~~'.concat('~~');
			}
		}
		return [text, title, content];
	};
	Twinkle.addInitCallback(Twinkle.talkback, 'talkback');
})();

export {};
