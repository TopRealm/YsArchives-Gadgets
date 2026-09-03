/* eslint-disable no-jquery/no-global-selector */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

/*! Twinkle.js - twinklewarn.js */
import {createApp, h, reactive} from 'vue';
import TwWarnDialog from './ui/TwWarnDialog.vue';

(function twinklewarn() {
	const $body = $('body');
	/**
	 * twinklewarn.js: Warn module
	 * Mode of invocation: Tab ("Warn")
	 * Active on: Any page with relevant user name (userspace, contribs,
	 * etc.), as well as the rollback success page
	 */
	const relevantUserName = mw.config.get('wgRelevantUserName');
	Twinkle.warn = () => {
		if (relevantUserName) {
			Twinkle.addPortletLink(
				Twinkle.warn.callback,
				'警告',
				'tw-warn',
				window.wgULS('警告或提醒用户', '警告或提醒使用者')
			);
			if (
				Twinkle.getPref('autoMenuAfterRollback') &&
				mw.config.get('wgNamespaceNumber') === 3 &&
				mw.util.getParamValue('vanarticle') &&
				!mw.util.getParamValue('noautowarn')
			) {
				Twinkle.warn.callback();
			}
		}
		// Modify URL of talk page on rollback success pages, makes use of a
		// custom message box in [[MediaWiki:Rollback-success]]
		if (mw.config.get('wgAction') === 'rollback') {
			const $vandalTalkLink = $body.find('#mw-rollback-success').find('.mw-usertoollinks a').first();
			if ($vandalTalkLink.length) {
				Twinkle.warn.makeVandalTalkLink($vandalTalkLink, Morebits.pageNameNorm);
				$vandalTalkLink.css('font-weight', 'bold');
			}
		}
		if (
			mw.config.get('wgCanonicalSpecialPageName') === 'AbuseLog' &&
			mw.config.get('wgAbuseFilterVariables') !== null
		) {
			const afTalkLink = $body.find('.mw-usertoollinks-talk').first();
			if (afTalkLink.length) {
				Twinkle.warn.makeVandalTalkLink(afTalkLink, mw.config.get('wgAbuseFilterVariables').page_prefixedtitle);
				afTalkLink.css('font-weight', 'bold');
			}
		}
	};
	Twinkle.warn.makeVandalTalkLink = ($vandalTalkLink, pagename) => {
		$vandalTalkLink.wrapInner(
			$('<span>').attr(
				'title',
				window.wgULS(
					'如果合适，您可以用Twinkle在该用户讨论页上做出警告。',
					'如果合適，您可以用Twinkle在該使用者討論頁上做出警告。'
				)
			)
		);
		const extraParam = `vanarticle=${mw.util.rawurlencode(pagename)}`;
		const href = $vandalTalkLink.attr('href');
		if (href.includes('?')) {
			$vandalTalkLink.attr('href', `${href}&${extraParam}`);
		} else {
			$vandalTalkLink.attr('href', `${href}?${extraParam}`);
		}
	};
	// Used to close window when switching to ARV in autolevel
	Twinkle.warn.dialog = null;
	// Holds the Morebits preview instance for the current dialog
	let previewer = null;
	Twinkle.warn.callback = () => {
		if (
			relevantUserName === mw.config.get('wgUserName') &&
			!confirm(window.wgULS('您将要警告自己！您确定要继续吗？', '您將要警告自己！您確定要繼續嗎？'))
		) {
			return;
		}
		const root = document.createElement('div');
		document.body.append(root);
		const notice = reactive({text: ''});
		const autolevelInfo = reactive({
			data: null,
		});
		const closeDialog = () => {
			app.unmount();
			root.remove();
		};
		const app = createApp({
			render: () => {
				// Assemble the main group options (mirrors the legacy quickForm)
				const defaultGroup = Number.parseInt(Twinkle.getPref('defaultWarningGroup'), 6);
				const mainGroupOptions = [
					{
						value: 'autolevel',
						label: window.wgULS('自动选择层级', '自動選擇層級'),
						selected: defaultGroup === 7,
					},
					{value: 'level1', label: '1：提醒', selected: defaultGroup === 1},
					{value: 'level2', label: '2：警告', selected: defaultGroup === 2},
				];
				if (Twinkle.getPref('combinedSingletMenus')) {
					mainGroupOptions.push({
						value: 'singlecombined',
						label: window.wgULS('单层级消息', '單層級訊息'),
						selected: defaultGroup === 3 || defaultGroup === 4,
					});
				} else {
					mainGroupOptions.push(
						{
							value: 'singlenotice',
							label: window.wgULS('单层级提醒', '單層級提醒'),
							selected: defaultGroup === 3,
						},
						{
							value: 'singlewarn',
							label: window.wgULS('单层级警告', '單層級警告'),
							selected: defaultGroup === 4,
						}
					);
				}
				if (Twinkle.getPref('customWarningList').length) {
					mainGroupOptions.push({
						value: 'custom',
						label: window.wgULS('自定义警告', '自訂警告'),
						selected: defaultGroup === 5,
					});
				}
				mainGroupOptions.push({
					value: 'kitchensink',
					label: '所有警告模板',
					selected: defaultGroup === 6,
				});
				const initialMainGroup =
					mainGroupOptions.find((option) => {
						return option.selected;
					})?.value ?? 'autolevel';
				return h(TwWarnDialog, {
					title: window.wgULS('警告、提醒用户', '警告、提醒使用者'),
					mainGroupOptions,
					initialMainGroup,
					initialArticle: mw.util.getParamValue('vanarticle') || '',
					messages: Twinkle.warn.messages,
					customWarningList: Twinkle.getPref('customWarningList'),
					notice,
					autolevelInfo: autolevelInfo.data,
					footerLinks: [
						{text: window.wgULS('警告设置', '警告設定'), href: mw.util.getUrl('H:TW/PREF#warn')},
						{text: window.wgULS('Twinkle帮助', 'Twinkle說明'), href: mw.util.getUrl('H:TW/DOC#warn')},
					],
					onSubmit: (params, statusContainer, restore) => {
						Twinkle.warn.callback.evaluate(params, statusContainer, restore);
					},
					onPreview: (params, previewBox) => {
						Twinkle.warn.callbacks.preview(params, previewBox);
					},
					onAutolevel: (oldSubValue) => {
						const autolevelProc = () => {
							const wikitext = Twinkle.warn.talkpageObj.getPageText();
							const [latest] = Twinkle.warn.callbacks.dateProcessing(wikitext);
							const pseudoParams = {
								sub_group: oldSubValue,
								article: mw.util.getParamValue('vanarticle') || '',
							};
							const parsed = Twinkle.warn.callbacks.autolevelParse(wikitext, pseudoParams, latest);
							autolevelInfo.data = parsed ? parsed.notice : null;
						};
						if (Twinkle.warn.talkpageObj) {
							autolevelProc();
						} else {
							const usertalk_page = new Morebits.wiki.page(
								`User_talk:${relevantUserName}`,
								window.wgULS('加载上次警告', '載入上次警告')
							);
							usertalk_page.setFollowRedirect(true, false);
							usertalk_page.load((pageobj) => {
								Twinkle.warn.talkpageObj = pageobj;
								autolevelProc();
							});
						}
					},
					onOpenArv: () => {
						Morebits.wiki.actionCompleted.redirect = null;
						closeDialog();
						Twinkle.arv.callback(relevantUserName);
					},
					onClose: () => {
						closeDialog();
					},
				});
			},
		});
		app.mount(root);
		// Potential notices for staleness and missed reverts
		let message = '';
		let query = {};
		const vanrevid = mw.util.getParamValue('vanarticlerevid');
		if (vanrevid) {
			// If you tried reverting, check if *you* actually reverted
			if (!mw.util.getParamValue('noautowarn') && mw.util.getParamValue('vanarticle')) {
				// Via fluff link
				query = {
					action: 'query',
					titles: mw.util.getParamValue('vanarticle'),
					prop: 'revisions',
					rvstartid: vanrevid,
					rvlimit: 2,
					rvdir: 'newer',
					rvprop: 'user',
				};
				new Morebits.wiki.api(
					window.wgULS('检查您是否成功回退该页面', '檢查您是否成功回退該頁面'),
					query,
					(apiobj) => {
						const revertUser = $(apiobj.getResponse()).find('revisions rev')[1].getAttribute('user');
						if (revertUser && revertUser !== mw.config.get('wgUserName')) {
							message += window.wgULS(
								'其他人回退了该页面，并可能已经警告该用户。',
								'其他人回退了該頁面，並可能已經警告該使用者。'
							);
							notice.text = `警告：${message}`;
						}
					}
				).post();
			}
			// Confirm edit wasn't too old for a warning
			const checkStale = (vantimestamp_) => {
				const revDate = new Morebits.date(vantimestamp_);
				if (vantimestamp_ && revDate.isValid() && revDate.add(24, 'hours').isBefore(new Date())) {
					message += window.wgULS(
						'这笔编辑是在24小时前做出的，现在警告可能已过时。',
						'這筆編輯是在24小時前做出的，現在警告可能已過時。'
					);
					notice.text = `警告：${message}`;
				}
			};
			let vantimestamp = mw.util.getParamValue('vantimestamp');
			// Provided from a fluff module-based revert, no API lookup necessary
			if (vantimestamp) {
				checkStale(vantimestamp);
			} else {
				query = {
					action: 'query',
					prop: 'revisions',
					rvprop: 'timestamp',
					revids: vanrevid,
				};
				new Morebits.wiki.api(window.wgULS('获取版本时间戳', '取得版本時間戳'), query, (apiobj) => {
					vantimestamp = $(apiobj.getResponse()).find('revisions rev').attr('timestamp');
					checkStale(vantimestamp);
				}).post();
			}
		}
	};
	// This is all the messages that might be dispatched by the code
	// Each of the individual templates require the following information:
	//   label (required): A short description displayed in the dialog
	//   summary (required): The edit summary used. If an article name is entered, the summary is postfixed with "on [[article]]", and it is always postfixed with ". $summaryAd"
	//   suppressArticleInSummary (optional): Set to true to suppress showing the article name in the edit summary. Useful if the warning relates to attack pages, or some such.
	Twinkle.warn.messages = {
		levels: [
			{
				category: window.wgULS('不同类型的非建设编辑', '不同類別的非建設編輯'),
				list: {
					'uw-addpaid': {
						level1: {
							label: window.wgULS('加入付费内容', '加入付費內容'),
							summary: window.wgULS('注意：加入付费内容', '注意：加入付費內容'),
						},
						level2: {
							label: window.wgULS('多次加入付费内容', '多次加入付費內容'),
							summary: window.wgULS('警告：多次加入付费内容', '警告：多次加入付費內容'),
						},
					},
					'uw-copyright': {
						level1: {
							label: window.wgULS('侵犯著作权', '侵犯版權'),
							summary: window.wgULS('注意：侵犯著作权', '注意：侵犯版權'),
						},
						level2: {
							label: window.wgULS('多次侵犯著作权', '多次侵犯版權'),
							summary: window.wgULS('警告：多次侵犯著作权', '警告：多次侵犯版權'),
						},
					},
					'uw-crystal': {
						level1: {
							label: window.wgULS('加入臆测或未确认的消息', '加入臆測或未確認的訊息'),
							summary: window.wgULS('注意：加入臆测或未确认的消息', '注意：加入臆測或未確認的訊息'),
						},
						level2: {
							label: window.wgULS('多次加入臆测或未确认的消息', '多次加入臆測或未確認的訊息'),
							summary: window.wgULS(
								'警告：多次加入臆测或未确认的消息',
								'警告：多次加入臆測或未確認的訊息'
							),
						},
					},
					'uw-delete': {
						level1: {
							label: window.wgULS('不恰当地移除页面内容、模板或资料', '不恰當地移除頁面內容、模板或資料'),
							summary: window.wgULS(
								'注意：不恰当地移除页面内容、模板或资料',
								'注意：不恰當地移除頁面內容、模板或資料'
							),
						},
						level2: {
							label: window.wgULS('不恰当地移除页面内容、模板或资料', '不恰當地移除頁面內容、模板或資料'),
							summary: window.wgULS(
								'警告：不恰当地移除页面内容、模板或资料',
								'警告：不恰當地移除頁面內容、模板或資料'
							),
						},
					},
					'uw-image': {
						level1: {
							label: window.wgULS('在页面中加入不当图片', '在頁面中加入不當圖片'),
							summary: window.wgULS('注意：在页面中加入不当图片', '注意：在頁面中加入不當圖片'),
						},
						level2: {
							label: window.wgULS('在页面中加入不当图片', '在頁面中加入不當圖片'),
							summary: window.wgULS('警告：在页面中加入不当图片', '警告：在頁面中加入不當圖片'),
						},
					},
					'uw-newpage': {
						level1: {
							label: window.wgULS('创建不当页面', '建立不當頁面'),
							summary: window.wgULS('注意：创建不当页面', '注意：建立不當頁面'),
						},
						level2: {
							label: window.wgULS('创建不当页面', '建立不當頁面'),
							summary: window.wgULS('警告：创建不当页面', '警告：建立不當頁面'),
						},
					},
					'uw-nor': {
						level1: {
							label: window.wgULS('在条目中加入原创研究', '在條目中加入原創研究'),
							summary: window.wgULS('注意：在条目中加入原创研究', '注意：在條目中加入原創研究'),
						},
						level2: {
							label: window.wgULS('在条目中加入原创研究', '在條目中加入原創研究'),
							summary: window.wgULS('警告：在条目中加入原创研究', '警告：在條目中加入原創研究'),
						},
					},
					'uw-opov': {
						level1: {
							label: window.wgULS('违反客观原则', '違反客觀原則'),
							summary: window.wgULS('注意：违反客观原则', '注意：違反客觀原則'),
						},
						level2: {
							label: window.wgULS('违反客观原则', '違反客觀原則'),
							summary: window.wgULS('警告：违反客观原则', '警告：違反客觀原則'),
						},
					},
					'uw-redirect': {
						level1: {
							label: window.wgULS('创建破坏性的重定向', '建立破壞性的重定向'),
							summary: window.wgULS('注意：创建破坏性的重定向', '注意：建立破壞性的重定向'),
						},
						level2: {
							label: window.wgULS('创建恶意重定向', '建立惡意重定向'),
							summary: window.wgULS('警告：创建恶意重定向', '警告：建立惡意重定向'),
						},
					},
					'uw-upload': {
						level1: {
							label: window.wgULS('上传不当图像', '上傳不當圖像'),
							summary: window.wgULS('注意：上传不当图像', '注意：上傳不當圖像'),
						},
						level2: {
							label: window.wgULS('上传不当图像', '上傳不當圖像'),
							summary: window.wgULS('警告：上传不当图像', '警告：上傳不當圖像'),
						},
					},
					'uw-vandalism': {
						level1: {
							label: window.wgULS('明显的破坏', '明顯的破壞'),
							summary: window.wgULS('注意：明显破坏', '注意：明顯破壞'),
						},
						level2: {
							label: window.wgULS('明显的破坏', '明顯的破壞'),
							summary: window.wgULS('警告：明显破坏', '警告：明顯破壞'),
						},
					},
					'uw-tdel': {
						level1: {
							label: window.wgULS(
								'在问题仍未解决的情况下移除维护性模板',
								'在問題仍未解決的情況下移除維護性模板'
							),
							summary: window.wgULS('注意：移除维护性模板', '注意：移除維護性模板'),
						},
						level2: {
							label: window.wgULS(
								'在问题仍未解决的情况下移除维护性模板',
								'在問題仍未解決的情況下移除維護性模板'
							),
							summary: window.wgULS('警告：移除维护性模板', '警告：移除維護性模板'),
						},
					},
				},
			},
			{
				category: window.wgULS('增加广告', '增加廣告'),
				list: {
					'uw-spam': {
						level1: {
							label: window.wgULS('增加不合适的外部链接', '增加不合適的外部連結'),
							summary: window.wgULS('注意：增加不合适的外部链接', '注意：增加不合適的外部連結'),
						},
						level2: {
							label: window.wgULS('增加垃圾链接', '增加垃圾連結'),
							summary: window.wgULS('警告：增加垃圾链接', '警告：增加垃圾連結'),
						},
					},
					'uw-advert': {
						level1: {
							label: window.wgULS('利用有兽档案馆来发布广告或推广', '利用有獸檔案館來發布廣告或推廣'),
							summary: window.wgULS(
								'注意：利用有兽档案馆来发布广告或推广',
								'注意：利用有獸檔案館來發布廣告或推廣'
							),
						},
						level2: {
							label: window.wgULS('利用有兽档案馆来发布广告或推广', '利用有獸檔案館來發布廣告或推廣'),
							summary: window.wgULS(
								'警告：利用有兽档案馆来发布广告或推广',
								'警告：利用有獸檔案館來發布廣告或推廣'
							),
						},
					},
				},
			},
			{
				category: window.wgULS('加插不实、诽谤文字', '加插不實、誹謗文字'),
				list: {
					'uw-biog': {
						level1: {
							label: window.wgULS(
								'在人物传记中加入没有可靠来源佐证而且可能引发争议的内容',
								'在人物傳記中加入沒有可靠來源佐證而且可能引發爭議的內容'
							),
							summary: window.wgULS(
								'注意：在人物传记中加入没有可靠来源佐证而且可能引发争议的内容',
								'注意：在人物傳記中加入沒有可靠來源佐證而且可能引發爭議的內容'
							),
						},
						level2: {
							label: window.wgULS(
								'在人物传记中加入没有可靠来源佐证而且可能引发争议的内容',
								'在人物傳記中加入沒有可靠來源佐證而且可能引發爭議的內容'
							),
							summary: window.wgULS(
								'警告：在人物传记中加入没有可靠来源佐证而且可能引发争议的内容',
								'警告：在人物傳記中加入沒有可靠來源佐證而且可能引發爭議的內容'
							),
						},
					},
					'uw-error': {
						level1: {
							label: window.wgULS('故意加入不实内容', '故意加入不實內容'),
							summary: window.wgULS('注意：故意加入不实内容', '注意：故意加入不實內容'),
						},
						level2: {
							label: window.wgULS('故意加入不实内容', '故意加入不實內容'),
							summary: window.wgULS('警告：故意加入不实内容', '警告：故意加入不實內容'),
						},
					},
					'uw-unsourced': {
						level1: {
							label: window.wgULS('加入没有可靠来源佐证的内容', '加入沒有可靠來源佐證的內容'),
							summary: window.wgULS(
								'注意：加入没有可靠来源佐证的内容',
								'注意：加入沒有可靠來源佐證的內容'
							),
						},
						level2: {
							label: window.wgULS('加入没有可靠来源佐证的内容', '加入沒有可靠來源佐證的內容'),
							summary: window.wgULS(
								'警告：加入没有可靠来源佐证的内容',
								'警告：加入沒有可靠來源佐證的內容'
							),
						},
					},
				},
			},
			{
				category: window.wgULS('翻译品质', '翻譯品質'),
				list: {
					'uw-roughtranslation': {
						level1: {
							label: window.wgULS('您翻译的质量有待改善', '您翻譯的質量有待改善'),
							summary: window.wgULS('注意：您翻译的质量有待改善', '注意：您翻譯的質量有待改善'),
						},
						level2: {
							label: window.wgULS('粗劣翻译', '粗劣翻譯'),
							summary: window.wgULS('警告：粗劣翻译', '警告：粗劣翻譯'),
						},
					},
				},
			},
			{
				category: window.wgULS('非能接受且违反条例的单方面行为或操作', '非能接受且違反條例的單方面行為或操作'),
				list: {
					'uw-afd': {
						level1: {
							label: window.wgULS('移除{{afd}}（页面存废讨论）模板', '移除{{afd}}（頁面存廢討論）模板'),
							summary: window.wgULS(
								'注意：移除{{afd}}（页面存废讨论）模板',
								'注意：移除{{afd}}（頁面存廢討論）模板'
							),
						},
						level2: {
							label: window.wgULS('移除{{afd}}（页面存废讨论）模板', '移除{{afd}}（頁面存廢討論）模板'),
							summary: window.wgULS(
								'警告：移除{{afd}}（页面存废讨论）模板',
								'警告：移除{{afd}}（頁面存廢討論）模板'
							),
						},
					},
					'uw-mos': {
						level1: {
							label: window.wgULS('不恰当的条目格式、日期、语言等', '不恰當的條目格式、日期、語言等'),
							summary: window.wgULS(
								'注意：不恰当的条目格式、日期、语言等',
								'注意：不恰當的條目格式、日期、語言等'
							),
						},
						level2: {
							label: window.wgULS('不恰当的条目格式、日期、语言等', '不恰當的條目格式、日期、語言等'),
							summary: window.wgULS(
								'警告：不恰当的条目格式、日期、语言等',
								'警告：不恰當的條目格式、日期、語言等'
							),
						},
					},
					'uw-move': {
						level1: {
							label: window.wgULS(
								'无故移动条目/新名称不符合命名规范',
								'無故移動條目/新名稱不符合命名規範'
							),
							summary: window.wgULS('注意：不恰当地移动页面', '注意：不恰當地移動頁面'),
						},
						level2: {
							label: window.wgULS(
								'把页面移动到不恰当、违反命名常规或违反共识的标题',
								'把頁面移動到不恰當、違反命名常規或違反共識的標題'
							),
							summary: window.wgULS('警告：不恰当地移动页面', '警告：不恰當地移動頁面'),
						},
					},
					'uw-speedy': {
						level1: {
							label: window.wgULS('移除{{delete}}（快速删除）模板', '移除{{delete}}（快速刪除）模板'),
							summary: window.wgULS(
								'注意：移除{{delete}}（快速删除）模板',
								'注意：移除{{delete}}（快速刪除）模板'
							),
						},
						level2: {
							label: window.wgULS('移除{{delete}}（快速删除）模板', '移除{{delete}}（快速刪除）模板'),
							summary: window.wgULS(
								'警告：移除{{delete}}（快速删除）模板',
								'警告：移除{{delete}}（快速刪除）模板'
							),
						},
					},
					'uw-talkpage': {
						level1: {
							label: window.wgULS('违反讨论页规范', '違反討論頁規範'),
							summary: window.wgULS('注意：违反讨论页规范', '注意：違反討論頁規範'),
						},
						level2: {
							label: window.wgULS('违反讨论页规范', '違反討論頁規範'),
							summary: window.wgULS('警告：违反讨论页规范', '警告：違反討論頁規範'),
						},
					},
					'uw-tpv': {
						level1: {
							label: '修改他人留言',
							summary: '注意：修改他人留言',
						},
						level2: {
							label: '修改他人留言',
							summary: '警告：修改他人留言',
						},
					},
				},
			},
			{
				category: window.wgULS('对其他用户和条目的态度', '對其他用戶和條目的態度'),
				list: {
					'uw-illegal': {
						level1: {
							label: window.wgULS('加入违法违规内容', '加入違法違規內容'),
							summary: window.wgULS('注意：加入违法违规内容', '注意：加入違法違規內容'),
						},
						level2: {
							label: window.wgULS('加入违法违规内容', '加入違法違規內容'),
							summary: window.wgULS('警告：加入违法违规内容', '警告：加入違法違規內容'),
						},
					},
					'uw-own': {
						level1: {
							label: window.wgULS('主张条目所有权', '主張條目所有權'),
							summary: window.wgULS('注意：主张条目所有权', '注意：主張條目所有權'),
						},
						level2: {
							label: window.wgULS('主张条目的所有权', '主張條目的所有權'),
							summary: window.wgULS('警告：主张条目的所有权', '警告：主張條目的所有權'),
						},
					},
					'uw-socialmedia': {
						level1: {
							label: window.wgULS('将有兽档案馆当作社交媒体使用', '將有獸檔案館當作社交媒體使用'),
							summary: window.wgULS(
								'注意：将有兽档案馆当作社交媒体使用',
								'注意：將有獸檔案館當作社交媒體使用'
							),
						},
						level2: {
							label: window.wgULS('将有兽档案馆当作社交媒体使用', '將有獸檔案館當作社交媒體使用'),
							summary: window.wgULS(
								'警告：将有兽档案馆当作社交媒体使用',
								'警告：將有獸檔案館當作社交媒體使用'
							),
						},
					},
				},
			},
		],
		singlenotice: {
			'uw-2redirect': {
				label: window.wgULS('在移动页面后应该修复双重重定向', '在移動頁面後應該修復雙重重定向'),
				summary: window.wgULS('注意：在移动页面后应该修复双重重定向', '注意：在移動頁面後應該修復雙重重定向'),
			},
			'uw-aiv': {
				label: window.wgULS('举报事项并不是破坏行为', '舉報事項並不是破壞行为'),
				summary: window.wgULS('注意：不恰当地举报破坏', '注意：不恰當地舉報破壞'),
			},
			'uw-articlesig': {
				label: window.wgULS('在条目中签名', '在條目中簽名'),
				summary: window.wgULS('注意：在条目中签名', '注意：在條目中簽名'),
			},
			'uw-autobiography': {
				label: window.wgULS('创建自传', '建立自傳'),
				summary: window.wgULS('注意：创建自传', '注意：建立自傳'),
			},
			'uw-badcat': {
				label: window.wgULS('加入错误的页面分类', '加入錯誤的頁面分類'),
				summary: window.wgULS('注意：加入错误的页面分类', '注意：加入錯誤的頁面分類'),
			},
			'uw-bite': {
				label: window.wgULS('伤害新手', '傷害新手'),
				summary: window.wgULS('注意：伤害新手', '注意：傷害新手'),
			},
			'uw-chinese': {
				label: window.wgULS('请使用标准汉语沟通', '請使用標準漢語溝通'),
				summary: window.wgULS('注意：请使用标准汉语沟通', '注意：請使用標準漢語溝通'),
			},
			'uw-cpmove': {
				label: window.wgULS('剪贴移动', '剪貼移動'),
				summary: window.wgULS('注意：剪贴移动', '注意：剪貼移動'),
			},
			'uw-dab': {
				label: window.wgULS('消歧义页格式错误', '消歧義頁格式錯誤'),
				summary: window.wgULS('注意：消歧义页格式错误', '注意：消歧義頁格式錯誤'),
			},
			'uw-newpage-draft': {
				label: window.wgULS('最近创建的页面被移动到草稿', '最近建立的頁面被移動到草稿'),
				summary: window.wgULS('注意：最近创建的页面被移动到草稿', '注意：最近建立的頁面被移動到草稿'),
			},
			'uw-selfrevert': {
				label: window.wgULS(
					'感谢您自行回退自己的测试，以后不要再这样做了',
					'感謝您自行回退自己的測試，以後不要再這樣做了'
				),
				summary: window.wgULS('注意：回退个人的测试', '注意：回退個人的測試'),
			},
			'uw-substub': {
				label: window.wgULS('创建小小作品', '建立小小作品'),
				summary: window.wgULS('警告：创建小小作品', '警告：建立小小作品'),
			},
			'uw-talkinarticle': {
				label: window.wgULS('在条目页中留下意见', '在條目頁中留下意見'),
				summary: window.wgULS('注意：在条目页中留下意见', '注意：在條目頁中留下意見'),
			},
			'uw-unsigned': {
				label: window.wgULS('没有在讨论页上签名', '沒有在討論頁上簽名'),
				summary: window.wgULS('注意：没有在讨论页上签名', '注意：沒有在討論頁上簽名'),
			},
			'uw-wrongcsd': {
				label: window.wgULS('快速删除理由不当', '快速刪除理由不當'),
				summary: window.wgULS('注意：快速删除理由不当', '注意：快速刪除理由不當'),
			},
			'uw-wrongsummary': {
				label: window.wgULS('在编辑摘要制造不适当的内容', '在編輯摘要製造不適當的內容'),
				summary: window.wgULS('警告：在编辑摘要制造不适当的内容', '警告：在編輯摘要製造不適當的內容'),
			},
		},
		singlewarn: {
			'uw-3rr': {
				label: window.wgULS('用户潜在违反回退不过三原则的可能性', '用戶潛在違反回退不過三原則的可能性'),
				summary: window.wgULS(
					'警告：用户潜在违反回退不过三原则的可能性',
					'警告：用戶潛在違反回退不過三原則的可能性'
				),
			},
			'uw-attack': {
				label: window.wgULS('人身攻击', '人身攻擊'),
				summary: window.wgULS('警告：人身攻击', '警告：人身攻擊'),
				suppressArticleInSummary: true,
			},
			'uw-coi': {
				label: window.wgULS('利益冲突', '利益衝突'),
				summary: window.wgULS('注意：利益冲突', '注意：利益衝突'),
			},
			'uw-fakesource': {
				label: window.wgULS('虚构数据源或引文', '虛構資料來源或引文'),
				summary: window.wgULS('警告：虚构数据源或引文', '警告：虛構資料來源或引文'),
			},
			'uw-pinfo': {
				label: window.wgULS('张贴他人隐私', '張貼他人隱私'),
				summary: window.wgULS('警告：张贴他人隐私', '警告：張貼他人隱私'),
			},
			'uw-illegalavatar': {
				label: window.wgULS('头像违规', '頭像違規'),
				summary: window.wgULS('您近期上传的头像违规', '您近期上傳的頭像違規'),
			},
		},
	};
	// Used repeatedly below across menu rebuilds
	Twinkle.warn.prev_article = null;
	Twinkle.warn.prev_reason = null;
	Twinkle.warn.talkpageObj = null;
	Twinkle.warn.callback.change_category = function change_category(e) {
		const {value} = e.target;
		const {sub_group} = e.target.root;
		sub_group.main_group = value;
		let old_subvalue = sub_group.value;
		let old_subvalue_re;
		if (old_subvalue) {
			if (value === 'kitchensink') {
				// Exact match possible in kitchensink menu
				old_subvalue_re = new RegExp(mw.util.escapeRegExp(old_subvalue));
			} else {
				old_subvalue = old_subvalue.replace(/\d*(im)?$/, '');
				old_subvalue_re = new RegExp(`${mw.util.escapeRegExp(old_subvalue)}(\\d*?)$`);
			}
		}
		while (sub_group.hasChildNodes()) {
			sub_group.removeChild(sub_group.firstChild);
		}
		let selected = false;
		// worker function to create the combo box entries
		const createEntries = (contents, container, wrapInOptgroup, val = value) => {
			// level2->2, singlewarn->''; also used to distinguish the
			// scaled levels from singlenotice, singlewarn, and custom
			const level = val.replace(/^\D+/g, '');
			// due to an apparent iOS bug, we have to add an option-group to prevent truncation of text
			// (search WT:TW archives for "Problem selecting warnings on an iPhone")
			if (wrapInOptgroup && $.client.profile().platform === 'iphone') {
				let wrapperOptgroup = new Morebits.quickForm.element({
					type: 'optgroup',
					label: '可用模板',
				});
				wrapperOptgroup = wrapperOptgroup.render();
				container.appendChild(wrapperOptgroup);
				container = wrapperOptgroup;
			}
			for (const [itemKey, itemProperties] of Object.entries(contents)) {
				// Skip if the current template doesn't have a version for the current level
				if (!!level && !itemProperties[val]) {
					return;
				}
				const key = typeof itemKey === 'string' ? itemKey : itemProperties.value;
				const template = key + level;
				const elem = new Morebits.quickForm.element({
					type: 'option',
					label: `{{${template}}}: ${level ? itemProperties[val].label : itemProperties.label}`,
					value: template,
				});
				// Select item best corresponding to previous selection
				if (!selected && old_subvalue && old_subvalue_re.test(template)) {
					elem.data.selected = true;
					selected = true;
				}
				const elemRendered = container.appendChild(elem.render());
				$(elemRendered).data('messageData', itemProperties);
			}
		};
		switch (value) {
			case 'singlenotice':
			case 'singlewarn':
				createEntries(Twinkle.warn.messages[value], sub_group, true);
				break;
			case 'singlecombined': {
				const unSortedSinglets = {
					...Twinkle.warn.messages.singlenotice,
					...Twinkle.warn.messages.singlewarn,
				};
				const sortedSingletMessages = {};
				for (const key of Object.keys(unSortedSinglets).sort()) {
					sortedSingletMessages[key] = unSortedSinglets[key];
				}
				createEntries(sortedSingletMessages, sub_group, true);
				break;
			}
			case 'custom':
				createEntries(Twinkle.getPref('customWarningList'), sub_group, true);
				break;
			case 'kitchensink':
				for (const lvl of ['level1', 'level2']) {
					for (const levelGroup of Twinkle.warn.messages.levels) {
						createEntries(levelGroup.list, sub_group, true, lvl);
					}
				}
				createEntries(Twinkle.warn.messages.singlenotice, sub_group, true);
				createEntries(Twinkle.warn.messages.singlewarn, sub_group, true);
				createEntries(Twinkle.getPref('customWarningList'), sub_group, true);
				break;
			case 'level1':
			case 'level2':
				// Creates subgroup regardless of whether there is anything to place in it;
				// leaves "Removal of deletion tags" empty for level 2
				for (const levelGroup of Twinkle.warn.messages.levels) {
					let optgroup = new Morebits.quickForm.element({
						type: 'optgroup',
						label: levelGroup.category,
					});
					optgroup = optgroup.render();
					sub_group.appendChild(optgroup);
					// create the options
					createEntries(levelGroup.list, optgroup, false);
				}
				break;
			case 'autolevel': {
				// Check user page to determine appropriate level
				const autolevelProc = () => {
					const wikitext = Twinkle.warn.talkpageObj.getPageText();
					// history not needed for autolevel
					const [latest] = Twinkle.warn.callbacks.dateProcessing(wikitext);
					// Pseudo-params with only what's needed to parse the level i.e. no messageData
					const params = {
						sub_group: old_subvalue,
						article: e.target.root.article.value,
					};
					const lvl = `level${Twinkle.warn.callbacks.autolevelParseWikitext(wikitext, params, latest)[1]}`;
					// Identical to level1, etc. above but explicitly provides the level
					for (const levelGroup of Twinkle.warn.messages.levels) {
						let optgroup = new Morebits.quickForm.element({
							type: 'optgroup',
							label: levelGroup.category,
						});
						optgroup = optgroup.render();
						sub_group.appendChild(optgroup);
						// create the options
						createEntries(levelGroup.list, optgroup, false, lvl);
					}
					// Trigger subcategory change, add select menu, etc.
					Twinkle.warn.callback.postCategoryCleanup(e);
				};
				if (Twinkle.warn.talkpageObj) {
					autolevelProc();
				} else {
					const usertalk_page = new Morebits.wiki.page(
						`User_talk:${relevantUserName}`,
						window.wgULS('加载上次警告', '載入上次警告')
					);
					usertalk_page.setFollowRedirect(true, false);
					usertalk_page.load(
						(pageobj) => {
							Twinkle.warn.talkpageObj = pageobj; // Update talkpageObj
							autolevelProc();
						},
						() => {
							// Catch and warn if the talkpage can't load,
							// most likely because it's a cross-namespace redirect
							// Supersedes the typical $autolevelMessage added in autolevelParseWikitext
							const $noTalkPageNode = $('<strong>')
								.attr('id', 'twinkle-warn-autolevel-message')
								.css('color', '#f00')
								.text(
									window.wgULS(
										'无法加载用户讨论页，这可能是因为它是跨命名空间重定向，自动选择警告级别将不会运作。',
										'無法載入使用者討論頁，這可能是因為它是跨命名空間重新導向，自動選擇警告級別將不會運作。'
									)
								);
							$noTalkPageNode.insertBefore($body.find('#twinkle-warn-warning-messages'));
							// If a preview was opened while in a different mode, close it
							// Should nullify the need to catch the error in preview callback
							e.target.root.previewer.closePreview();
						}
					);
				}
				break;
			}
			default:
				void mw.notify(window.wgULS('twinklewarn：未知的警告组', 'twinklewarn：未知的警告組'), {
					type: 'warn',
					tag: 'twinklewarn',
				});
				break;
		}
		// Trigger subcategory change, add select menu, etc.
		// Here because of the async load for autolevel
		if (value !== 'autolevel') {
			// reset any autolevel-specific messages while we're here
			$body.find('#twinkle-warn-autolevel-message').remove();
			Twinkle.warn.callback.postCategoryCleanup(e);
		}
	};
	Twinkle.warn.callback.postCategoryCleanup = (e) => {
		// clear overridden label on article textbox
		Morebits.quickForm.setElementTooltipVisibility(e.target.root.article, true);
		Morebits.quickForm.resetElementLabel(e.target.root.article);
		// Trigger custom label/change on main category change
		Twinkle.warn.callback.change_subcategory(e);
		// Use select2 to make the select menu searchable
		if (!Twinkle.getPref('oldSelect')) {
			$body
				.find('select[name=sub_group]')
				.select2({
					width: '100%',
					matcher: Morebits.select2.matchers.optgroupFull,
					templateResult: Morebits.select2.highlightSearchMatches,
					language: {
						searching: Morebits.select2.queryInterceptor,
					},
				})
				.change(Twinkle.warn.callback.change_subcategory);
			$body.find('.select2-selection').on('keydown', Morebits.select2.autoStart).trigger('focus');
			mw.util.addCSS(
				/* Increase height;
				 * Reduce padding;
				 * Adjust font size.
				 * */
				'.select2-container .select2-dropdown .select2-results>.select2-results__options{max-height:350px}.select2-results .select2-results__group,.select2-results .select2-results__option{padding-top:1px;padding-bottom:1px}.select2-container .select2-dropdown .select2-results,.select2-container .selection .select2-selection__rendered{font-size:13px}'
			);
		}
	};
	Twinkle.warn.callback.change_subcategory = (e) => {
		const main_group = e.target.form.main_group.value;
		const {value} = e.target.form.sub_group;
		// Tags that don't take a linked article, but something else (often a username).
		// The value of each tag is the label next to the input field
		const notLinkedArticle = {
			'uw-bite': window.wgULS('被“咬到”的用户（不含User:） ', '被「咬到」的使用者（不含User:） '),
			'uw-aiv': window.wgULS('可选输入被警告的用户名（不含User:） ', '可選輸入被警告的使用者名稱（不含User:） '),
		};
		if (['singlenotice', 'singlewarn', 'singlecombined', 'kitchensink'].includes(main_group)) {
			if (notLinkedArticle[value]) {
				if (Twinkle.warn.prev_article === null) {
					Twinkle.warn.prev_article = e.target.form.article.value;
				}
				e.target.form.article.notArticle = true;
				e.target.form.article.value = '';
				// change form labels according to the warning selected
				Morebits.quickForm.setElementTooltipVisibility(e.target.form.article, false);
				Morebits.quickForm.overrideElementLabel(e.target.form.article, notLinkedArticle[value]);
			} else if (e.target.form.article.notArticle) {
				if (Twinkle.warn.prev_article !== null) {
					e.target.form.article.value = Twinkle.warn.prev_article;
					Twinkle.warn.prev_article = null;
				}
				e.target.form.article.notArticle = false;
				Morebits.quickForm.setElementTooltipVisibility(e.target.form.article, true);
				Morebits.quickForm.resetElementLabel(e.target.form.article);
			}
		}
		// add big red notice, warning users about how to use {{uw-[coi-]username}} appropriately
		$body.find('#tw-warn-red-notice').remove();
	};
	Twinkle.warn.callbacks = {
		getWarningWikitext: (templateName, article, reason, isCustom, noSign) => {
			let text = '{{'.concat('subst:', templateName);
			// add linked article for user warnings
			if (article) {
				text += `|1=${article}`;
			}
			if (reason) {
				// add extra message
				text += `|2=${reason}`;
			}
			text += '|subst='.concat('subst:');
			if (!noSign) {
				text += '|sig=~~'.concat('~~');
			}
			text += '}}';
			return text;
		},
		showPreview: (params, previewBox, templatename) => {
			// Provided on autolevel, not otherwise
			templatename ||= params.sub_group;
			const linkedarticle = params.article;
			const templatetext = Twinkle.warn.callbacks.getWarningWikitext(
				templatename,
				linkedarticle,
				params.reason,
				params.main_group === 'custom'
			);
			if (previewer) {
				previewer.closePreview();
			}
			previewer = new Morebits.wiki.preview(previewBox);
			previewer.beginRender(templatetext, `User_talk:${relevantUserName}`); // Force wikitext/correct username
		},

		// Just a pass-through unless the autolevel option was selected
		preview: (params, previewBox) => {
			if (params.main_group === 'autolevel') {
				// Always get a new, updated talkpage for autolevel processing
				const usertalk_page = new Morebits.wiki.page(
					`User_talk:${relevantUserName}`,
					window.wgULS('加载上次警告', '載入上次警告')
				);
				usertalk_page.setFollowRedirect(true, false);
				usertalk_page.load((pageobj) => {
					Twinkle.warn.talkpageObj = pageobj; // Update talkpageObj
					const wikitext = pageobj.getPageText();
					// history not needed for autolevel
					const [latest] = Twinkle.warn.callbacks.dateProcessing(wikitext);
					const parsed = Twinkle.warn.callbacks.autolevelParse(wikitext, params, latest);
					if (parsed) {
						Twinkle.warn.callbacks.showPreview(params, previewBox, parsed.template);
					}
				});
			} else {
				Twinkle.warn.callbacks.showPreview(params, previewBox);
			}
		},
		/**
		 * Used in the main and autolevel loops to determine when to warn
		 * about excessively recent, stale, or identical warnings.
		 *
		 * @param {string} wikitext  The text of a user's talk page, from getPageText()
		 * @returns {Object[]} - Array of objects: latest contains most recent
		 * warning and date; history lists all prior warnings
		 */
		dateProcessing: (wikitext) => {
			const history_re =
				/<!--\s?Template:([uU]w-.*?)\s?-->.*?(\d{4})年(\d{1,2})月(\d{1,2})日 \([日一二三四五六]\) (\d{1,2}):(\d{1,2}) \(CST\)/g;
			const history = {};
			const latest = {
				date: new Morebits.date(0),
				type: '',
			};
			let current;
			while ((current = history_re.exec(wikitext)) !== null) {
				const [, template] = current;
				const current_date = new Morebits.date(
					`${current[2]}-${current[3]}-${current[4]} ${current[5]}:${current[6]} (CST)`
				);
				if (!(template in history) || history[template].isBefore(current_date)) {
					history[template] = current_date;
				}
				if (!latest.date.isAfter(current_date)) {
					latest.date = current_date;
					latest.type = template;
				}
			}
			return [latest, history];
		},
		/**
		 * Main loop for deciding what the level should increment to. Most of
		 * this is really just error catching and updating the subsequent data.
		 * May produce up to two notices in a twinkle-warn-autolevel-messages div
		 *
		 * @param {string} wikitext  The text of a user's talk page, from getPageText() (required)
		 * @param {Object} params  Params object: sub_group is the template (required);
		 * article is the user-provided article (form.article) used to link ARV on recent level2 warnings;
		 * messageData is only necessary if getting the full template, as it's
		 * used to ensure a valid template of that level exists
		 * @param {Object} latest  First element of the array returned from
		 * dateProcessing. Provided here rather than processed within to avoid
		 * repeated call to dateProcessing
		 * @param {(Date|Morebits.date)} date  Date from which staleness is determined
		 * @param {Morebits.status} statelem  Status element, only used for handling error in final execution
		 *
		 * @returns {Array} - Array that contains the full template and just the warning level
		 */
		autolevelParseWikitext: (wikitext, params, latest, date, statelem) => {
			const parsed = Twinkle.warn.callbacks.autolevelParse(wikitext, params, latest, date, statelem);
			if (parsed) {
				return [parsed.template, parsed.level];
			}
		},
		/**
		 * Data-oriented version of autolevelParseWikitext. Returns an object
		 * describing the resolved level/template and, when no status element
		 * is provided, the notice data to be rendered by the Vue dialog.
		 *
		 * @param wikitext
		 * @param params
		 * @param latest
		 * @param date
		 * @param statelem
		 */
		autolevelParse: (wikitext, params, latest, date, statelem) => {
			let noticeData = null;
			let level; // undefined rather than '' means the isNaN below will return true
			if (/\d?$/.test(latest.type)) {
				// level1-2
				level = Number.parseInt(latest.type.replace(/.*(\d)?$/, '$1'), 10);
			} else if (latest.type) {
				level = 1; // singlenotice or not found
			}
			if (Number.isNaN(level)) {
				// No prior warnings found, this is the first
				level = 1;
			} else if (level > 2 || level < 1) {
				// Shouldn't happen
				const message = window.wgULS(
					'无法解析上次的警告层级，请手动选择一个警告层级。',
					'無法解析上次的警告層級，請手動選擇一個警告層級。'
				);
				if (statelem) {
					statelem.error(message);
				} else {
					void mw.notify(message, {
						type: 'warn',
						tag: 'twinklewarn',
					});
				}
				return;
			} else {
				date ||= new Date();
				const autoTimeout = new Morebits.date(latest.date.getTime()).add(
					Number.parseInt(Twinkle.getPref('autolevelStaleDays'), 10),
					'day'
				);
				if (autoTimeout.isAfter(date)) {
					if (level === 2) {
						level = 2;
						// Basically indicates whether we're in the final Main evaluation or not,
						// and thus whether we can continue or need to display the warning and link
						if (statelem) {
							// no notice needed during final evaluation
						} else {
							noticeData = {
								level,
								latestType: latest.type,
								showArv: true,
								username: relevantUserName,
							};
						}
					} else {
						// Automatically increase severity
						level += 1;
					}
				} else {
					// Reset warning level if most-recent warning is too old
					level = 1;
				}
			}
			let template = params.sub_group.replace(/(.*)\d$/, '$1');
			// Validate warning level, falling back to the uw-generic series.
			// Only a few items are missing a level, and in all but a handful
			// of cases, the uw-generic series is explicitly used elsewhere.
			if (params.messageData && !params.messageData[`level${level}`]) {
				template = 'uw-generic';
			}
			template += level;
			if (!statelem) {
				// Build the option groups for the resolved level
				const groups = Twinkle.warn.messages.levels.map((levelGroup) => {
					const entries = [];
					const createLevelEntries = (contents, val) => {
						for (const [itemKey, itemProperties] of Object.entries(contents)) {
							if (!!val && !itemProperties[val]) {
								continue;
							}
							const key = typeof itemKey === 'string' ? itemKey : itemProperties.value;
							const subTemplate = key + val;
							entries.push({
								value: subTemplate,
								label: `{{${subTemplate}}}: ${val ? itemProperties[val].label : itemProperties.label}`,
								messageData: itemProperties,
							});
						}
					};
					createLevelEntries(levelGroup.list, `level${level}`);
					return {key: levelGroup.category, entries};
				});
				return {
					level,
					template,
					notice: {
						level,
						latestType: latest.type,
						showArv: noticeData ? noticeData.showArv : false,
						username: relevantUserName,
						groups,
					},
				};
			}
			return {level, template, notice: null};
		},
		main: (pageobj) => {
			const text = pageobj.getPageText();
			const statelem = pageobj.getStatusElement();
			const params = pageobj.getCallbackParameters();
			let {messageData} = params;
			const warningHistory = Twinkle.warn.callbacks.dateProcessing(text);
			const [latest, history] = warningHistory;
			const now = new Morebits.date(pageobj.getLoadTime());
			Twinkle.warn.talkpageObj = pageobj; // Update talkpageObj, just in case
			if (params.main_group === 'autolevel') {
				const parsed = Twinkle.warn.callbacks.autolevelParse(text, params, latest, now, statelem);
				if (!parsed) {
					return;
				}
				// Only if there's a change from the prior display/load
				if (
					params.sub_group !== parsed.template &&
					!confirm(
						window.wgULS('将发送给用户{{', '將發送給使用者{{') +
							parsed.template +
							window.wgULS('}}模板，好吗？', '}}模板，好嗎？')
					)
				) {
					statelem.error(window.wgULS('用户取消', '使用者取消'));
					return;
				}
				// Update params now that we've selected a warning
				params.sub_group = parsed.template;
				messageData = params.messageData[`level${parsed.level}`];
			} else if (
				params.sub_group in history &&
				new Morebits.date(history[params.sub_group]).add(1, 'day').isAfter(now) &&
				!confirm(
					window.wgULS('近24小时内一个同样的 ', '近24小時內一個同樣的 ') +
						params.sub_group +
						window.wgULS(' 模板已被发出。\n是否继续？', ' 模板已被發出。\n是否繼續？')
				)
			) {
				statelem.error(window.wgULS('用户取消', '使用者取消'));
				return;
			}
			latest.date.add(1, 'minute'); // after long debate, one minute is max
			if (
				latest.date.isAfter(now) &&
				!confirm(
					window.wgULS('近1分钟内 ', '近1分鐘內 ') +
						latest.type +
						window.wgULS(' 模板已被发出。\n是否继续？', ' 模板已被發出。\n是否繼續？')
				)
			) {
				statelem.error(window.wgULS('用户取消', '使用者取消'));
				return;
			}
			// build the edit summary
			// Function to handle generation of summary prefix for custom templates
			const customProcess = (template) => {
				[template] = template.split('|');
				let prefix;
				switch (template.slice(-1)) {
					case '1':
						prefix = '注意';
						break;
					case '2':
						prefix = '警告';
						break;
					// falls through
					default:
						prefix = '提醒';
						break;
				}
				return `${prefix}：${Morebits.string.toUpperCaseFirstChar(messageData.label)}`;
			};
			let summary;
			if (params.main_group === 'custom') {
				summary = customProcess(params.sub_group);
			} else {
				// Normalize kitchensink to the 1-2 style
				if (params.main_group === 'kitchensink' && !/^D+$/.test(params.sub_group)) {
					let sub = params.sub_group.slice(-1);
					if (sub === 'm') {
						sub = params.sub_group.slice(-3);
					}
					// Don't overwrite uw-3rr, technically unnecessary
					if (/\d/.test(sub)) {
						params.main_group = `level${sub}`;
					}
				}
				// singlet || level1-2, no need to /^\D+$/.test(params.main_group)
				summary =
					messageData.summary || (messageData[params.main_group] && messageData[params.main_group].summary);
				// Not in Twinkle.warn.messages, assume custom template
				summary ||= customProcess(params.sub_group);
				if (messageData.suppressArticleInSummary !== true && params.article) {
					if (params.sub_group === 'uw-aiv') {
						// these templates require a username
						summary += `（${window.wgULS('对于', '對於')}[[User:${params.article}]]）`;
					} else if (params.sub_group === 'uw-bite') {
						// this template requires a username
						summary += `，${window.wgULS('于', '於')}[[User talk:${params.article}]]`;
					} else {
						summary += `${window.wgULS('，于[[', '，於[[') + params.article}]]`;
					}
				}
			}
			pageobj.setEditSummary(summary);
			pageobj.setChangeTags(Twinkle.changeTags);
			pageobj.setWatchlist(Twinkle.getPref('watchWarnings'));
			// Get actual warning text
			const warningText = Twinkle.warn.callbacks.getWarningWikitext(
				params.sub_group,
				params.article,
				params.reason,
				params.main_group === 'custom'
			);
			let sectionExists = false;
			let sectionNumber = 0;
			// Only check sections if there are sections or there's a chance we won't create our own
			if (!messageData.heading && text.length) {
				// Get all sections
				const sections = text.match(/^(==*).+\1/gm);
				if (sections && sections.length !== 0) {
					// Find the index of the section header in question
					const dateHeaderRegex = now.monthHeaderRegex();
					sectionNumber = 0;
					// Find this month's section among L2 sections, preferring the bottom-most
					sectionExists = sections.reverse().some((sec, idx) => {
						return (
							/^(==)[^=].+\1/m.test(sec) &&
							dateHeaderRegex.test(sec) &&
							typeof (sectionNumber = sections.length - 1 - idx) === 'number'
						);
					});
				}
			}
			if (sectionExists) {
				// append to existing section
				pageobj.setPageSection(sectionNumber + 1);
				pageobj.setAppendText(`\n\n${warningText}`);
				pageobj.append();
			} else {
				if (messageData.heading) {
					// create new section
					pageobj.setNewSectionTitle(messageData.heading);
				} else {
					Morebits.status.info(
						window.wgULS('信息', '資訊'),
						window.wgULS('未找到当月的二级标题，将创建新的', '未找到當月的二級標題，將建立新的')
					);
					pageobj.setNewSectionTitle(now.monthHeader(0));
				}
				pageobj.setNewSectionText(warningText);
				pageobj.newSection();
			}
		},
	};
	Twinkle.warn.callback.evaluate = (params, statusContainer, restore) => {
		const userTalkPage = `User_talk:${relevantUserName}`;
		if (params.article) {
			if (/https?:\/\//.test(params.article)) {
				void mw.notify(window.wgULS('“页面链接”不能使用网址。', '「頁面連結」不能使用網址。'), {
					type: 'warn',
					tag: 'warn',
				});
				if (restore) {
					restore();
				}
				return;
			}
			try {
				const article = new mw.Title(params.article);
				params.article = article.getPrefixedText();
				if (article.getFragment()) {
					params.article += `#${article.getFragment()}`;
				}
			} catch {
				alert(
					window.wgULS(
						'“页面链接”不合法，仅能输入一个页面名称，勿使用网址、[[ ]]，可使用Special:Diff。',
						'「頁面連結」不合法，僅能輸入一個頁面名稱，勿使用網址、[[ ]]，可使用Special:Diff。'
					)
				);
				if (restore) {
					restore();
				}
				return;
			}
		}
		// The autolevel option will already know by now if a user talk page
		// is a cross-namespace redirect (via !!Twinkle.warn.talkpageObj), so
		// technically we could alert an error here, but the user will have
		// already ignored the bold red error above. Moreover, they probably
		// *don't* want to actually issue a warning, so the error handling
		// after the form is submitted is probably preferable
		if (params.messageData === undefined) {
			void mw.notify(window.wgULS('请选择警告模板。', '請選擇警告模板。'), {
				type: 'warn',
				tag: 'warn',
			});
			if (restore) {
				restore();
			}
			return;
		}
		Morebits.status.init(statusContainer);
		Morebits.wiki.actionCompleted.redirect = userTalkPage;
		Morebits.wiki.actionCompleted.notice = window.wgULS('警告完成，将在几秒后刷新', '警告完成，將在幾秒後重新整理');
		const ysarchives_page = new Morebits.wiki.page(
			userTalkPage,
			window.wgULS('用户讨论页修改', '使用者討論頁修改')
		);
		ysarchives_page.setCallbackParameters(params);
		ysarchives_page.setFollowRedirect(true, false);
		ysarchives_page.load(Twinkle.warn.callbacks.main);
	};
	Twinkle.addInitCallback(Twinkle.warn, 'warn');
})();

export {};
