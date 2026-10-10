// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

/*! Twinkle.js - twinklearv.js */
import {createApp, h, reactive} from 'vue';
import TwArvDialog from './ui/TwArvDialog.vue';

(function twinklearv() {
	/**
	 * twinklearv.js: ARV module
	 * Mode of invocation: Tab ("ARV")
	 * Active on: Any page with relevant user name (userspace, contribs, etc.)
	 */
	Twinkle.arv = () => {
		const username = mw.config.get('wgRelevantUserName');
		if (!username) {
			return;
		}
		const isIP = mw.util.isIPAddress(username);
		const title = isIP
			? window.wgULS('报告IP给管理员', '報告IP給管理員')
			: window.wgULS('报告用户给管理人员', '報告使用者給管理人員');
		Twinkle.addPortletLink(
			() => {
				Twinkle.arv.callback(username, isIP);
			},
			window.wgULS('告状', '告狀'),
			'tw-arv',
			title
		);
	};
	Twinkle.arv.callback = (uid, isIP) => {
		if (uid === mw.config.get('wgUserName')) {
			void mw.notify(window.wgULS('你不想报告你自己，对吧？', '你不想報告你自己，對吧？'), {
				type: 'warn',
				tag: 'twinklearv',
			});
			return;
		}
		const root = document.createElement('div');
		document.body.append(root);
		const blockNotice = reactive({
			text: '',
			severe: true,
		});
		let previewer = null;
		const app = createApp({
			render: () => {
				return h(TwArvDialog, {
					uid,
					isIP,
					blockNotice,
					title: window.wgULS('报告用户给管理人员', '報告使用者給管理人員'),
					footerLinks: [
						{text: window.wgULS('告状设置', '告狀設定'), href: mw.util.getUrl('H:TW/PREF#arv')},
						{text: window.wgULS('Twinkle帮助', 'Twinkle說明'), href: mw.util.getUrl('H:TW#告狀')},
					],
					onSubmit: (params, statusContainer, restore) => {
						Twinkle.arv.callback.evaluate(params, statusContainer, restore);
					},
					onPreview: (params, previewBox) => {
						const reason = Twinkle.arv.callback.getReportWikitext(params);
						if (reason === undefined) {
							return;
						}
						if (previewer) {
							previewer.closePreview();
						}
						previewer = new Morebits.wiki.preview(previewBox);
						let title;
						switch (params.category) {
							case 'vip':
								title = 'LIB_talk:报告当前破坏';
								break;
							case 'ewip':
								title = 'LIB_talk:管理员告示板';
								break;
							case 'username':
								title = 'LIB_talk:管理员告示板';
								break;
							case 'spi':
								title = 'LIB_talk:管理员告示板';
								break;
							default:
								title = mw.config.get('wgPageName');
								break;
						}
						previewer.beginRender(`__NOTOC__${reason[0]}`, title);
					},
					onClose: () => {
						app.unmount();
						root.remove();
					},
				});
			},
		});
		app.mount(root);
		// Check if the user is blocked, update notice
		const query = {
			action: 'query',
			list: 'blocks',
			bkprop: 'range|flags',
			format: 'json',
		};
		if (isIP) {
			query.bkip = uid;
		} else {
			query.bkusers = uid;
		}
		new Morebits.wiki.api(window.wgULS('检查用户的封禁状态', '檢查使用者的封鎖狀態'), query, (apiobj) => {
			const blocklist = apiobj.getResponse().query.blocks;
			if (blocklist.length) {
				const [block] = blocklist;
				let message =
					(isIP ? window.wgULS('此IP地址', '此IP位址') : window.wgULS('此账号', '此賬號')) +
					window.wgULS('已经被', '已經被') +
					(block.partial ? '部分' : '');
				// Start and end differ, range blocked
				message += block.rangestart === (block.rangeend ? '段' : '') + window.wgULS('封禁。', '封鎖。');
				blockNotice.severe = !block.partial;
				blockNotice.text = message;
			}
		}).post();
	};
	Twinkle.arv.lta_list = [
		{
			value: '',
			label: window.wgULS('请选择', '請選擇'),
		},
	];
	Twinkle.arv.callback.getReportWikitext = (input) => {
		let reason = '';
		let comment = '';
		const {uid} = input;
		const checkTitle = (title, revid) => {
			if (/https?:\/\//.test(title)) {
				void mw.notify(window.wgULS('页面名称不能使用网址。', '頁面名稱不能使用網址。'), {
					type: 'warn',
					tag: 'twinklearv',
				});
				return false;
			}
			let page_;
			try {
				page_ = new mw.Title(title);
			} catch {
				void mw.notify(
					`${
						window.wgULS('“', '「') +
						title +
						window.wgULS(
							'”不是一个有效的页面名称，如要使用差异链接请放在“评论”',
							'」不是一個有效的頁面名稱，如要使用差異連結請放在「評論」'
						) +
						(revid ? window.wgULS('，或正确输入“修订版本”', '，或正確輸入「修訂版本」') : '')
					}。`,
					{
						type: 'warn',
						tag: 'twinklearv',
					}
				);
				return false;
			}
			if (page_.namespace === -1) {
				void mw.notify(
					`${
						window.wgULS('“', '「') +
						title +
						window.wgULS(
							'”属于特殊页面，如要使用差异链接请放在“评论”',
							'」屬於特殊頁面，如要使用差異連結請放在「評論」'
						) +
						(revid ? window.wgULS('，或正确输入“修订版本”', '，或正確輸入「修訂版本」') : '')
					}。`,
					{
						type: 'warn',
						tag: 'twinklearv',
					}
				);
				return false;
			}
			return page_;
		};
		let page;
		switch (input.category) {
			// Report 3RR
			case 'ewip': {
				if (input.reason === '') {
					void mw.notify(window.wgULS('您必须指定理由', '您必須指定理由'), {
						type: 'warn',
						tag: 'twinklearv',
					});
					return;
				}
				reason += `== 编辑战举报（${uid}） ==\n`;
				reason += `* '''{{vandal|${/[=]/.test(uid) ? '1=' : ''}${uid}}}'''\n`;
				const pages = input.pages.map((value) => {
					return value || null;
				});
				for (const page_ of pages) {
					page = checkTitle(page_, false);
					if (!page) {
						return;
					}
					comment += `* {{pagelinks|${
						page.getPrefixedText().includes('=') ? '1=' : ''
					}${page.getPrefixedText()}}}\n`;
				}
				input.reason = input.reason.replace(/\n\n+/g, '\n');
				input.reason = input.reason.replace(/\r?\n/g, '\n*:'); // indent newlines
				comment += `* ${input.reason}\n`;
				comment = comment.trim();
				comment = Morebits.string.appendPunctuation(comment);
				reason += `${comment}\n* 提报人：~~`.concat('~~\n* 处理：');
				break;
			}
			// Report inappropriate username
			case 'username': {
				let types = input.arvtype.map(Morebits.string.toLowerCaseFirstChar);
				const hasShared = types.includes('shared');
				if (hasShared) {
					types.splice(types.indexOf('shared'), 1);
				}
				if (
					types.includes('侮辱性') &&
					!confirm(
						window.wgULS(
							'警告：严重的侮辱性用户名和针对特定个人的侮辱性用户名不应在公开页面报告，而是应当私下联系监督员处理。是否继续？',
							'警告：嚴重的侮辱性使用者名稱和針對特定個人的侮辱性使用者名稱不應在公開頁面報告，而是應當私下聯絡監督員處理。是否繼續？'
						)
					)
				) {
					return;
				}
				if (types.length <= 2) {
					types = types.join('和');
				} else {
					types = [types.slice(0, -1).join('、'), types.slice(-1)].join('和');
				}
				comment += `*{{user-uaa|1=${uid}`;
				if (input.hidename) {
					comment += '|hidename=1';
				}
				comment += '}} &ndash; ';
				if (types.length) {
					comment += types + window.wgULS('用户名', '使用者名稱');
				}
				if (types.length && hasShared) {
					comment += '，';
				}
				if (hasShared) {
					comment += window.wgULS('暗示该账号并非由一人拥有', '暗示該賬號並非由一人擁有');
				}
				if (types.length || hasShared) {
					comment += '。';
				}
				if (input.reason) {
					comment += Morebits.string.toUpperCaseFirstChar(input.reason);
				}
				comment = Morebits.string.appendPunctuation(comment);
				comment += '--~~'.concat('~~');
				comment = comment.replace(/\r?\n/g, '\n*:'); // indent newlines
				reason = `== 不当用户名报告（${
					input.hidename ? window.wgULS('已隐藏用户名', '已隱藏使用者名稱') : uid
				}） ==\n`;
				reason += comment;
				break;
			}
			// LIB:SPI
			case 'spi': {
				if (!input.reason) {
					void mw.notify(window.wgULS('请输入证据。', '請輸入證據。'), {
						type: 'warn',
						tag: 'twinklearv',
					});
					return;
				}
				const sockpuppets = Morebits.array.uniq(
					input.sockpuppets.map((o) => {
						return o.trim() || null;
					})
				);
				if (!sockpuppets[0]) {
					void mw.notify(window.wgULS('您没有指定任何傀儡。', '您沒有指定任何傀儡。'), {
						type: 'warn',
						tag: 'twinklearv',
					});
					return;
				}
				comment += '{{'.concat('subst:', 'SPI report|');
				if (!sockpuppets.includes(input.sockmaster)) {
					comment += '1={{'.concat(
						'subst:',
						'#ifexist:{{',
						'subst:',
						`FULLPAGENAME}}||${input.sockmaster}}}|`
					);
				}
				comment += `${sockpuppets
					.map((sock, index) => {
						return `${index + 2}=${sock}`;
					})
					.join('|')}\n|evidence=${Morebits.string.appendPunctuation(input.reason)}\n`;
				if (input.checkuser) {
					comment += '|checkuser=yes';
				}
				comment += '}}';
				reason = comment;
				break;
			}

			// Report user for vandalism
			/* case 'aiv': */
			/* falls through */
			default: {
				if (!input.arvtype.length && input.reason === '') {
					void mw.notify(window.wgULS('您必须指定理由', '您必須指定理由'), {
						type: 'warn',
						tag: 'twinklearv',
					});
					return;
				}
				reason += `== ${input.hidename ? window.wgULS('已隐藏用户名', '已隱藏使用者名稱') : uid} ==\n`;
				reason += `* '''{{vandal|${/[=]/.test(uid) ? '1=' : ''}${uid}`;
				if (input.hidename) {
					reason += '|hidename=1';
				}
				reason += "}}'''\n";
				const types = input.arvtype
					.map((v) => {
						switch (v) {
							case 'final':
								return '已发出最后警告';
							case 'postblock':
								return '封禁过期后随即破坏';
							case 'spambot':
								return '显而易见的spambot或失窃账号';
							case 'vandalonly':
								return '显而易见的纯破坏用户';
							case 'promoonly':
								return '仅用来散发广告宣传的用户';
							default:
								return '未知理由';
						}
					})
					.join('，');
				if (input.page !== '') {
					page = checkTitle(input.page, true);
					if (!page) {
						return;
					}
					comment += `* {{pagelinks|${
						page.getPrefixedText().includes('=') ? '1=' : ''
					}${page.getPrefixedText()}}}`;
					if (input.badid) {
						comment += `（{{diff|${page.getPrefixedText()}|${input.badid}|${input.goodid ?? ''}|diff}}）`;
					}
					comment += '\n';
				}
				if (types) {
					comment += `* ${types}`;
				}
				if (input.reason !== '') {
					input.reason = input.reason.replace(/\n\n+/g, '\n');
					input.reason = input.reason.replace(/\r?\n/g, '\n*:'); // indent newlines
					comment += (types ? '。' : '* ') + input.reason;
				}
				comment = comment.trim();
				comment = Morebits.string.appendPunctuation(comment);
				reason += `${comment}\n* 发现人：~~`.concat('~~\n* 处理：');
				break;
			}
		}
		return [reason, comment];
	};
	Twinkle.arv.callback.evaluate = (params, statusContainer, restore) => {
		const input = params;
		const {uid} = input;
		let reason;
		let summary;
		switch (input.category) {
			// Report 3RR
			case 'ewip': {
				reason = Twinkle.arv.callback.getReportWikitext(input);
				if (reason === undefined) {
					if (restore) {
						restore();
					}
					return;
				}
				summary = `${window.wgULS('报告', '報告')}[[Special:Contribs/${uid}|${uid}]]`;
				Morebits.status.init(statusContainer);
				Morebits.wiki.actionCompleted.redirect = 'LIB_talk:管理员告示板';
				Morebits.wiki.actionCompleted.notice = window.wgULS('报告完成', '報告完成');
				const ewipPage = new Morebits.wiki.page(
					'LIB_talk:管理员告示板',
					window.wgULS('处理EWIP请求', '處理EWIP請求')
				);
				ewipPage.setFollowRedirect(true);
				ewipPage.load(() => {
					const text = ewipPage.getPageText();
					const $ewipLink = '<a rel="noopener" target="_blank" href="/wiki/LIB:EWIP">LIB:EWIP</a>';
					// check if user has already been reported
					if (
						new RegExp(
							`===\\s*\\{\\{\\s*(?:[Vv]andal)\\s*\\|\\s*(?:1=)?\\s*${Morebits.string.escapeRegExp(
								uid
							)}\\s*\\}\\}\\s*===`
						).test(text)
					) {
						ewipPage
							.getStatusElement()
							.error(window.wgULS('报告已存在，将不会加入新的', '報告已存在，將不會加入新的'));
						Morebits.status.printUserText(
							reason[1],
							window.wgULS(
								'您输入的评论已在下方提供，您可以将其加入到',
								'您輸入的評論已在下方提供，您可以將其加入到'
							) +
								$ewipLink +
								window.wgULS('已存在的小节中：', '已存在的小節中：')
						);
						return;
					}
					ewipPage.setPageSection(0);
					ewipPage.getStatusElement().status(window.wgULS('加入新报告…', '加入新報告…'));
					ewipPage.setEditSummary(summary);
					ewipPage.setChangeTags(Twinkle.changeTags);
					ewipPage.setAppendText(`\n${reason[0]}`);
					ewipPage.append();
				});
				break;
			}
			// Report inappropriate username
			case 'username': {
				reason = Twinkle.arv.callback.getReportWikitext(input);
				if (reason === undefined) {
					if (restore) {
						restore();
					}
					return;
				}
				Morebits.status.init(statusContainer);
				Morebits.wiki.actionCompleted.redirect = 'LIB_talk:管理员告示板';
				Morebits.wiki.actionCompleted.notice = window.wgULS('报告完成', '報告完成');
				const uaaPage = new Morebits.wiki.page(
					'LIB_talk:管理员告示板',
					window.wgULS('处理UAA请求', '處理UAA請求')
				);
				uaaPage.setFollowRedirect(true);
				uaaPage.load(() => {
					const text = uaaPage.getPageText();
					// check if user has already been reported
					if (
						new RegExp(
							`\\{\\{\\s*user-uaa\\s*\\|\\s*(1\\s*=\\s*)?${Morebits.string.escapeRegExp(
								uid
							)}\\s*(\\||\\})`
						).test(text)
					) {
						uaaPage.getStatusElement().error(window.wgULS('用户已被列入。', '使用者已被列入。'));
						const $uaaLink = '<a rel="noopener" target="_blank" href="/wiki/LIB:UAA">LIB:UAA</a>';
						Morebits.status.printUserText(
							reason[1],
							window.wgULS(
								'您输入的评论已在下方提供，您可以将其手工加入',
								'您輸入的評論已在下方提供，您可以將其手工加入'
							) +
								$uaaLink +
								window.wgULS('上该用户的报告中：', '上該使用者的報告中：')
						);
						return;
					}
					uaaPage.getStatusElement().status(window.wgULS('加入新报告…', '加入新報告…'));
					uaaPage.setEditSummary(window.wgULS('新提报', '新提報'));
					uaaPage.setChangeTags(Twinkle.changeTags);
					uaaPage.setAppendText(`\n\n${reason[0]}`);
					uaaPage.append();
				});
				break;
			}
			// LIB:SPI
			case 'spi': {
				reason = Twinkle.arv.callback.getReportWikitext(input);
				if (reason === undefined) {
					if (restore) {
						restore();
					}
					return;
				}
				Morebits.status.init(statusContainer);
				const reportpage = 'LIB_talk:管理员告示板';
				Morebits.wiki.actionCompleted.redirect = reportpage;
				Morebits.wiki.actionCompleted.notice = window.wgULS('报告完成', '報告完成');
				const spiPage = new Morebits.wiki.page(reportpage, window.wgULS('抓取讨论页面', '抓取討論頁面'));
				spiPage.setFollowRedirect(true);
				spiPage.setEditSummary(window.wgULS('加入新提报', '加入新提報'));
				spiPage.setChangeTags(Twinkle.changeTags);
				spiPage.setAppendText(reason[0]);
				spiPage.setWatchlist(Twinkle.getPref('spiWatchReport'));
				spiPage.append();
				break;
			}

			// Report user for vandalism
			/* case 'aiv': */
			/* falls through */
			default: {
				reason = Twinkle.arv.callback.getReportWikitext(input);
				if (reason === undefined) {
					if (restore) {
						restore();
					}
					return;
				}
				summary = `${window.wgULS('报告', '報告')}[[Special:Contribs/${uid}|${uid}]]`;
				if (input.hidename) {
					summary = window.wgULS('报告一名用户', '報告一名使用者');
				}
				Morebits.status.init(statusContainer);
				Morebits.wiki.actionCompleted.redirect = 'LIB_talk:报告当前破坏';
				Morebits.wiki.actionCompleted.notice = window.wgULS('报告完成', '報告完成');
				const aivPage = new Morebits.wiki.page(
					'LIB_talk:报告当前破坏',
					window.wgULS('处理VIP请求', '處理VIP請求')
				);
				aivPage.setFollowRedirect(true);
				aivPage.load(() => {
					const text = aivPage.getPageText();
					const $aivLink = '<a rel="noopener" target="_blank" href="/wiki/LIB:VIP">LIB:VIP</a>';
					// check if user has already been reported
					if (
						new RegExp(
							`===\\s*\\{\\{\\s*(?:[Vv]andal)\\s*\\|\\s*(?:1=)?\\s*${Morebits.string.escapeRegExp(
								uid
							)}\\s*\\}\\}\\s*===`
						).test(text)
					) {
						aivPage
							.getStatusElement()
							.error(window.wgULS('报告已存在，将不会加入新的', '報告已存在，將不會加入新的'));
						Morebits.status.printUserText(
							reason[1],
							window.wgULS(
								'您输入的评论已在下方提供，您可以将其加入到',
								'您輸入的評論已在下方提供，您可以將其加入到'
							) +
								$aivLink +
								window.wgULS('已存在的小节中：', '已存在的小節中：')
						);
						return;
					}
					aivPage.setPageSection(0);
					aivPage.getStatusElement().status(window.wgULS('加入新报告…', '加入新報告…'));
					aivPage.setEditSummary(summary);
					aivPage.setChangeTags(Twinkle.changeTags);
					aivPage.setAppendText(`\n${reason[0]}`);
					aivPage.append();
				});
				break;
			}
		}
	};
	Twinkle.addInitCallback(Twinkle.arv, 'arv');
})();

export {};
