/* eslint-disable no-jquery/no-global-selector */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {UTC8_OFFSET_MINUTES, normalizeExpiry} from './utc8';
import {createApp, h, reactive} from 'vue';
import TwBlockDialog from './ui/TwBlockDialog.vue';
import {api} from './api';

/*! Twinkle.js - twinkleblock.js */
(function twinkleblock() {
	const $body = $('body');
	let relevantUserName;
	let blockedUserName;
	const menuFormattedNamespaces = {
		...mw.config.get('wgFormattedNamespaces'),
	};
	menuFormattedNamespaces[0] = window.wgULS('（条目）', '（條目）');
	const blockActionText = {
		block: window.wgULS('封禁', '封鎖'),
		reblock: window.wgULS('重新封禁', '重新封鎖'),
		unblock: window.wgULS('解除封禁', '解除封鎖'),
	};
	/**
	 * twinkleblock.js: Block module
	 * Mode of invocation: Tab ("Block")
	 * Active on: Any page with relevant user name (userspace, contribs, etc.)
	 */
	Twinkle.block = () => {
		relevantUserName = mw.config.get('wgRelevantUserName');
		// should show on Contributions or Block pages, anywhere there's a relevant user
		// Ignore ranges wider than the CIDR limit
		// Enable for non-admins
		if (
			(Morebits.userIsSysop || !mw.util.isIPAddress(relevantUserName, true)) &&
			relevantUserName &&
			(!Morebits.ip.isRange(relevantUserName) || Morebits.ip.validCIDR(relevantUserName))
		) {
			Twinkle.addPortletLink(
				Twinkle.block.callback,
				window.wgULS('封禁', '封鎖'),
				'tw-block',
				window.wgULS('封禁相关用户', '封鎖相關使用者')
			);
		}
	};
	// Holds data derived from the fetched user/block info, rendered by the dialog
	let dialogData = null;
	let dialogEpoch = 0;
	// Holds the Morebits preview instance for the current dialog
	let previewer = null;
	// Builds the notice strings shown above the block options
	const buildNotices = () => {
		const notices = {
			currentBlock: null,
			currentInfo: null,
			blockLog: null,
			blockLogLink: mw.util.getUrl('Special:Log', {
				action: 'view',
				page: relevantUserName,
				type: 'block',
			}),
		};
		if (Twinkle.block.currentBlockInfo) {
			const sameUser = blockedUserName === relevantUserName;
			let statusStr = `${relevantUserName}已被${
				Twinkle.block.currentBlockInfo.partial === ''
					? window.wgULS('部分封禁', '部分封鎖')
					: window.wgULS('全站封禁', '全站封鎖')
			}`;
			if (Twinkle.block.currentBlockInfo.rangestart !== Twinkle.block.currentBlockInfo.rangeend) {
				if (sameUser) {
					statusStr += window.wgULS('（段封禁）', '（段封鎖）');
				} else {
					const rangeLabel =
						Morebits.ip.get64(relevantUserName) === blockedUserName ? '/64' : blockedUserName;
					statusStr +=
						window.wgULS('（位于', '（位於') + rangeLabel + window.wgULS('段封禁内）', '段封鎖內）');
				}
			}
			if (Twinkle.block.currentBlockInfo.expiry === 'infinity') {
				statusStr += window.wgULS('（无限期）', '（無限期）');
			} else if (new Morebits.date(Twinkle.block.currentBlockInfo.expiry).isValid()) {
				statusStr += `${
					window.wgULS('（终止于', '（終止於') +
					new Morebits.date(Twinkle.block.currentBlockInfo.expiry).calendar(UTC8_OFFSET_MINUTES)
				}）`;
			}
			let infoStr = window.wgULS('此表单将', '此表單將');
			if (sameUser) {
				infoStr += window.wgULS('更改封禁', '變更封鎖');
				infoStr += '。';
			} else {
				infoStr += window.wgULS('加上额外的', '加上額外的') + window.wgULS('封禁。', '封鎖。');
			}
			notices.currentBlock = statusStr;
			notices.currentInfo = infoStr;
		}
		if (Twinkle.block.hasBlockLog) {
			if (Twinkle.block.currentBlockInfo) {
				notices.blockLog = window.wgULS('封禁详情', '封鎖詳情');
			} else {
				const [lastBlockAction] = Twinkle.block.blockLog;
				const blockAction = lastBlockAction.action === 'unblock' ? Twinkle.block.blockLog[1] : lastBlockAction;
				let logText =
					`此${
						Morebits.ip.isRange(relevantUserName)
							? window.wgULS('IP范围', 'IP範圍')
							: window.wgULS('用户', '使用者')
					}曾在` +
					`${new Morebits.date(blockAction.timestamp).calendar(UTC8_OFFSET_MINUTES)}` +
					`被${blockAction.user}${window.wgULS('封禁', '封鎖')}` +
					`${Morebits.string.formatTime(blockAction.params.duration)}`;
				if (lastBlockAction.action === 'unblock') {
					logText += `，${new Morebits.date(lastBlockAction.timestamp).calendar(UTC8_OFFSET_MINUTES)}解封`;
				} else {
					logText += `，${new Morebits.date(blockAction.params.expiry).calendar(
						UTC8_OFFSET_MINUTES
					)}${window.wgULS('过期', '過期')}`;
				}
				notices.blockLog = logText;
			}
		}
		return notices;
	};
	const buildPresetGroups = (partialBox) => {
		// Add current block parameters as default preset
		let blockGroup = partialBox ? Twinkle.block.blockGroupsPartial : Twinkle.block.blockGroups;
		const prior = {
			label: window.wgULS('当前封禁', '目前封鎖'),
		};
		if (blockedUserName === relevantUserName && Twinkle.block.currentBlockInfo) {
			Twinkle.block.blockPresetsInfo.prior = Twinkle.block.currentBlockInfo;
			prior.list = [
				{
					label: window.wgULS('当前封禁设置', '目前封鎖設定'),
					value: 'prior',
					selected: true,
				},
			];
			if (
				!blockGroup.some((bg) => {
					return bg.label === prior.label;
				})
			) {
				blockGroup = [...blockGroup, prior];
			}
			if (partialBox) {
				Twinkle.block.blockPresetsInfo.prior.templateName = Morebits.string.isInfinity(
					Twinkle.block.currentBlockInfo.expiry
				)
					? 'uw-pblockindef'
					: 'uw-pblock';
			} else if (Twinkle.block.isRegistered) {
				Twinkle.block.blockPresetsInfo.prior.templateName = Morebits.string.isInfinity(
					Twinkle.block.currentBlockInfo.expiry
				)
					? 'uw-blockindef'
					: 'uw-block';
			} else {
				Twinkle.block.blockPresetsInfo.prior.templateName = 'uw-ablock';
			}
		} else {
			blockGroup = blockGroup.filter((bg) => {
				return bg.label !== prior.label;
			});
		}
		return {
			presetGroups: Twinkle.block.callback.filtered_block_groups(blockGroup),
			templateGroups: Twinkle.block.callback.filtered_block_groups(blockGroup, true),
		};
	};
	Twinkle.block.callback = () => {
		if (
			relevantUserName === mw.config.get('wgUserName') &&
			!confirm(
				window.wgULS(
					'您即将对自己执行封禁相关操作！确认要继续吗？',
					'您即將對自己執行封鎖相關操作！確認要繼續嗎？'
				)
			)
		) {
			return;
		}
		Twinkle.block.currentBlockInfo = undefined;
		let app = null;
		let root = null;
		const mountDialog = () => {
			// Clean up preset data (defaults, etc.), done exactly once
			Twinkle.block.transformBlockPresets();
			if (root) {
				app.unmount();
				root.remove();
			}
			root = document.createElement('div');
			document.body.append(root);
			const partialChecked =
				blockedUserName === relevantUserName && Twinkle.block.currentBlockInfo
					? Twinkle.block.currentBlockInfo.partial === ''
					: Twinkle.getPref('defaultToPartialBlocks');
			const groups = buildPresetGroups(partialChecked);
			dialogData = reactive({
				isRegistered: Twinkle.block.isRegistered,
				userIsBot: Twinkle.block.userIsBot,
				partialChecked,
				presetGroups: groups.presetGroups,
				templateGroups: groups.templateGroups,
				notices: buildNotices(),
			});
			const sixtyFour = Morebits.ip.get64(mw.config.get('wgRelevantUserName'));
			const sixtyFourAvailable = !!sixtyFour && sixtyFour !== mw.config.get('wgRelevantUserName');
			app = createApp({
				render: () => {
					return h(TwBlockDialog, {
						key: dialogEpoch,
						title:
							window.wgULS('封禁或向', '封鎖或向') +
							relevantUserName +
							window.wgULS('发出封禁模板', '發出封鎖模板'),
						showBlock: Morebits.userIsSysop,
						showTemplate: Morebits.userIsSysop,
						showTag: Twinkle.block.isRegistered,
						showProtect: Twinkle.block.isRegistered && Morebits.userIsSysop,
						showUnblock: Morebits.userIsSysop,
						initialBlock: Morebits.userIsSysop,
						initialTemplate: Morebits.userIsSysop && !Morebits.ip.isRange(relevantUserName),
						initialPartial: partialChecked,
						initialUnblock: false,
						sixtyFourAvailable,
						initialBlock64: Twinkle.getPref('defaultToBlock64'),
						presetGroups: dialogData.presetGroups,
						templateGroups: dialogData.templateGroups,
						presetsInfo: Twinkle.block.blockPresetsInfo,
						expiryPresetOptions: Twinkle.block.expiryPresetOptions,
						namespaces: Twinkle.block.namespaceOptions,
						isRegistered: dialogData.isRegistered,
						userIsBot: dialogData.userIsBot,
						notices: dialogData.notices,
						footerLinks: [
							{text: window.wgULS('封禁条例', '封鎖條例'), href: mw.util.getUrl('LIB:BLOCK')},
							{text: window.wgULS('封禁设置', '封鎖設定'), href: mw.util.getUrl('H:TW/PREF#block')},
							{text: window.wgULS('Twinkle帮助', 'Twinkle說明'), href: mw.util.getUrl('H:TW/DOC#block')},
						],
						onSubmit: (params, statusContainer, restore) => {
							Twinkle.block.callback.evaluate(params, statusContainer, restore);
						},
						onPreview: (params, previewBox) => {
							Twinkle.block.callback.preview(params, previewBox);
						},
						onBlock64Changed: (checked) => {
							// Faithful port of Twinkle.block.callback.change_block64
							const originalIsRange = Morebits.ip.isRange(mw.config.get('wgRelevantUserName'));
							relevantUserName = checked
								? Morebits.ip.get64(mw.config.get('wgRelevantUserName'))
								: mw.config.get('wgRelevantUserName');
							const regenerate = () => {
								dialogEpoch += 1;
								mountDialog();
							};
							if (Twinkle.block.fetchedData[relevantUserName]) {
								Twinkle.block.processUserInfo(Twinkle.block.fetchedData[relevantUserName], regenerate);
							} else {
								Twinkle.block.fetchUserInfo(regenerate);
							}
							if (!checked) {
								dialogData.templateCheck = originalIsRange;
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
		};
		Twinkle.block.fetchUserInfo(mountDialog);
	};
	// Store fetched user data, only relevant if switching IPv6 to a /64
	Twinkle.block.fetchedData = {};
	// Processes the data from a a query response, separated from
	// Twinkle.block.fetchUserInfo to allow reprocessing of already-fetched data
	Twinkle.block.processUserInfo = (data, fn) => {
		let [blockinfo] = data.query.blocks;
		const [userinfo] = data.query.users;
		// If an IP is blocked *and* rangeblocked, the above finds
		// whichever block is more recent, not necessarily correct.
		// Three seems... unlikely
		if (data.query.blocks.length > 1 && blockinfo.user !== relevantUserName) {
			[, blockinfo] = data.query.blocks;
		}
		// Cache response, used when toggling /64 blocks
		Twinkle.block.fetchedData[userinfo.name] = data;
		Twinkle.block.isRegistered = !!userinfo.userid;
		if (Twinkle.block.isRegistered) {
			Twinkle.block.userIsBot =
				!!userinfo.groupmemberships &&
				userinfo.groupmemberships
					.map((e) => {
						return e.group;
					})
					.includes('bot');
		} else {
			Twinkle.block.userIsBot = false;
		}
		if (blockinfo) {
			// handle frustrating system of inverted boolean values
			blockinfo.disabletalk = blockinfo.allowusertalk === undefined;
			blockinfo.hardblock = blockinfo.anononly === undefined;
		}
		// will undefine if no blocks present
		Twinkle.block.currentBlockInfo = blockinfo;
		blockedUserName = Twinkle.block.currentBlockInfo && Twinkle.block.currentBlockInfo.user;
		// Semi-busted on ranges.
		// Basically, logevents doesn't treat functionally-equivalent ranges
		// as equivalent, meaning any functionally-equivalent IP range is
		// misinterpreted by the log throughout.  Without logevents
		// redirecting (like Special:Block does) we would need a function to
		// parse ranges, which is a pain.  IPUtils has the code, but it'd be a
		// lot of cruft for one purpose.
		Twinkle.block.hasBlockLog = !!data.query.logevents.length;
		Twinkle.block.blockLog = Twinkle.block.hasBlockLog && data.query.logevents;
		// Used later to check if block status changed while filling out the form
		Twinkle.block.blockLogId = Twinkle.block.hasBlockLog ? data.query.logevents[0].logid : false;
		if (typeof fn === 'function') {
			return fn();
		}
	};
	Twinkle.block.fetchUserInfo = (fn) => {
		const query = {
			format: 'json',
			action: 'query',
			list: 'blocks|users|logevents',
			letype: 'block',
			lelimit: 2,
			letitle: `User:${relevantUserName}`,
			bkprop: 'expiry|reason|flags|restrictions|range|user',
			ususers: relevantUserName,
		};
		// bkusers doesn't catch single IPs blocked as part of a range block
		if (mw.util.isIPAddress(relevantUserName, true)) {
			query.bkip = relevantUserName;
		} else {
			query.bkusers = relevantUserName;
			// groupmemberships only relevant for registered users
			query.usprop = 'groupmemberships';
		}
		void api.get(query).then(
			(data) => {
				Twinkle.block.processUserInfo(data, fn);
			},
			(error) => {
				Morebits.status.init($body.find('div[name="currentblock"] span').last()[0]);
				Morebits.status.warn(window.wgULS('抓取用户信息出错', '抓取使用者資訊出錯'), error);
			}
		);
	};
	// Expiry preset options for the block options field
	Twinkle.block.expiryPresetOptions = [
		{label: window.wgULS('自定义', '自訂'), value: 'custom'},
		{label: window.wgULS('无限期', '無限期'), value: 'infinity'},
		{label: window.wgULS('3小时', '3小時'), value: '3 hours'},
		{label: window.wgULS('12小时', '12小時'), value: '12 hours'},
		{label: '1天', value: '1 day'},
		{label: window.wgULS('31小时', '31小時'), value: '31 hours'},
		{label: '2天', value: '2 days'},
		{label: '3天', value: '3 days'},
		{label: window.wgULS('1周', '1週'), value: '1 week'},
		{label: window.wgULS('2周', '2週'), value: '2 weeks'},
		{label: window.wgULS('1个月', '1個月'), value: '1 month'},
		{label: window.wgULS('3个月', '3個月'), value: '3 months'},
		{label: window.wgULS('6个月', '6個月'), value: '6 months'},
		{label: '1年', value: '1 year'},
		{label: '2年', value: '2 years'},
		{label: '3年', value: '3 years'},
	];
	// Namespace options for partial blocks
	Twinkle.block.namespaceOptions = Object.entries(menuFormattedNamespaces)
		.filter(([number]) => {
			return Number(number) >= 0 && Number(number) < 830;
		})
		.map(([number, name]) => {
			return {
				value: Number(number),
				label: name,
			};
		});

	/**
	 * Keep alphabetized by key name, Twinkle.block.blockGroups establishes
	 *    the order they will appear in the interface
	 *
	 * Block preset format, all keys accept only 'true' (omit for false) except where noted:
	 * <title of block template> : {
	 *   autoblock: <autoblock any IP addresses used (for registered users only)>
	 *   disabletalk: <disable user from editing their own talk page while blocked>
	 *   expiry: <string - expiry timestamp, can include relative times like "5 months", "2 weeks" etc>
	 *   forAnonOnly: <show block option in the interface only if the relevant user is an IP>
	 *   forRegisteredOnly: <show block option in the interface only if the relevant user is registered>
	 *   label: <string - label for the option of the dropdown in the interface (keep brief)>
	 *   noemail: prevent the user from sending email through Special:Emailuser
	 *   pageParam: <set if the associated block template accepts a page parameter>
	 *   prependReason: <string - prepends the value of 'reason' to the end of the existing reason, namely for when revoking talk page access>
	 *   nocreate: <block account creation from the user's IP (for anonymous users only)>
	 *   nonstandard: <template does not conform to stewardship of [[enwiki:WikiProject User Warnings]] and may not accept standard parameters>
	 *   reason: <string - block rationale, as would appear in the block log,
	 *            and the edit summary for when adding block template, unless 'summary' is set>
	 *   reasonParam: <set if the associated block template accepts a reason parameter>
	 *   sig: <string - set to ~~~~ if block template does not accept "true" as the value, or set null to omit sig param altogether>
	 *   summary: <string - edit summary for when adding block template to user's talk page, if not set, 'reason' is used>
	 *   suppressArticleInSummary: <set to suppress showing the article name in the edit summary, as with attack pages>
	 *   templateName: <string - name of template to use (instead of key name), entry will be omitted from the Templates list.
	 *                  (e.g. use another template but with different block options)>
	 *   useInitialOptions: <when preset is chosen, only change given block options, leave others as they were>
	 *
	 * WARNING: 'anononly' and 'allowusertalk' are enabled by default.
	 *   To disable, set 'hardblock' and 'disabletalk', respectively
	 */
	Twinkle.block.blockPresetsInfo = {
		// uw-prefixed
		'uw-block': {
			autoblock: true,
			expiry: '1 day',
			forRegisteredOnly: true,
			nocreate: true,
			pageParam: true,
			reasonParam: true,
			summary: window.wgULS('封禁通知', '封鎖通知'),
			suppressArticleInSummary: true,
		},
		'uw-blockindef': {
			autoblock: true,
			expiry: 'infinity',
			forRegisteredOnly: true,
			nocreate: true,
			pageParam: true,
			reasonParam: true,
			summary: window.wgULS('封禁通知', '封鎖通知'),
			suppressArticleInSummary: true,
		},
		'uw-blocknotalk': {
			disabletalk: true,
			pageParam: true,
			reasonParam: true,
			summary: window.wgULS('封禁通知：禁止编辑讨论页', '封鎖通知：禁止編輯討論頁'),
			suppressArticleInSummary: true,
		},
		'uw-3block': {
			autoblock: true,
			expiry: '1 day',
			nocreate: true,
			pageParam: true,
			reason: window.wgULS('违反[[LIB:3RR|回退不过三原则]]', '違反[[LIB:3RR|回退不過三原則]]'),
			summary: window.wgULS(
				'封禁通知：违反[[LIB:3RR|回退不过三原则]]',
				'封鎖通知：違反[[LIB:3RR|回退不過三原則]]'
			),
		},
		'uw-adblock': {
			autoblock: true,
			nocreate: true,
			pageParam: true,
			reason: window.wgULS('散发[[LIB:SOAP|散发广告或宣传]]', '散發[[LIB:SOAP|散發廣告或宣傳]]'),
			summary: window.wgULS(
				'封禁通知：散发[[LIB:SOAP|散发广告或宣传]]',
				'封鎖通知：散發[[LIB:SOAP|散發廣告或宣傳]]'
			),
		},
		'uw-attackblock': {
			autoblock: true,
			expiry: '1 day',
			nocreate: true,
			reason: window.wgULS(
				'[[LIB:CIV|行为无礼]]或[[LIB:NPA|人身攻击]]',
				'[[LIB:CIV|行為無禮]]或[[LIB:NPA|人身攻擊]]'
			),
			summary: window.wgULS(
				'封禁通知：[[LIB:CIV|行为无礼]]或[[LIB:NPA|人身攻击]]',
				'封鎖通知：[[LIB:CIV|行為無禮]]或[[LIB:NPA|人身攻擊]]'
			),
		},
		'uw-copyrightblock': {
			autoblock: true,
			expiry: 'infinity',
			nocreate: true,
			pageParam: true,
			reason: window.wgULS('持续[[LIB:COPYVIO|侵犯著作权]]', '持續[[LIB:COPYVIO|侵犯著作權]]'),
			summary: window.wgULS(
				'封禁通知：持续[[LIB:COPYVIO|侵犯著作权]]',
				'封鎖通知：持續[[LIB:COPYVIO|侵犯著作權]]'
			),
			templateName: 'uw-blockindef',
		},
		'uw-dblock': {
			autoblock: true,
			nocreate: true,
			pageParam: true,
			reason: window.wgULS('持续[[LIB:VAN|删除内容]]', '持續[[LIB:VAN|刪除內容]]'),
			summary: window.wgULS('封禁通知：持续[[LIB:VAN|删除内容]]', '封鎖通知：持續[[LIB:VAN|刪除內容]]'),
		},
		'uw-hblock': {
			autoblock: true,
			nocreate: true,
			pageParam: true,
			reason: window.wgULS('[[LIB:骚扰|骚扰]]其他用户', '[[LIB:騷擾|騷擾]]其他使用者'),
			summary: window.wgULS('封禁通知：[[LIB:骚扰|骚扰]]其他用户', '封鎖通知：[[LIB:騷擾|騷擾]]其他使用者'),
		},
		'uw-vblock': {
			autoblock: true,
			expiry: '1 day',
			nocreate: true,
			pageParam: true,
			reason: window.wgULS('[[LIB:VAN|破坏]]', '[[LIB:VAN|破壞]]'),
			summary: window.wgULS('封禁通知：[[LIB:VAN|破坏]]', '封鎖通知：[[LIB:VAN|破壞]]'),
		},
		'uw-illegalblock': {
			autoblock: true,
			expiry: '1 day',
			nocreate: true,
			pageParam: true,
			reason: window.wgULS('持续加入非法内容', '持續加入非法內容'),
			summary: window.wgULS('封禁通知：持续加入非法内容', '封鎖通知：持續加入非法內容'),
		},
		'uw-sockblock': {
			autoblock: true,
			expiry: '1 week',
			forRegisteredOnly: true,
			nocreate: true,
			reason: window.wgULS('滥用[[LIB:SOCK|多个账号]]', '濫用[[LIB:SOCK|多個賬號]]'),
			summary: window.wgULS('封禁通知：滥用[[LIB:SOCK|多个账号]]', '封鎖通知：濫用[[LIB:SOCK|多個賬號]]'),
			templateName: 'uw-block',
		},
		// uw-u-prefixed
		'uw-ublock': {
			expiry: 'infinity',
			forRegisteredOnly: true,
			reason: `{{uw-ublock}}<!-- ${window.wgULS('不当用户名、软封禁', '不當使用者名稱')} -->`,
			summary: window.wgULS(
				'封禁通知：您的用户名违反[[LIB:U|用户名条例]]',
				'封鎖通知：您的使用者名稱違反[[LIB:U|使用者名稱條例]]'
			),
		},
		'uw-ublock-illegal': {
			autoblock: true,
			expiry: 'infinity',
			forRegisteredOnly: true,
			nocreate: true,
			reason: `{{uw-ublock-illegal}}<!-- ${window.wgULS('不合规的用户名', '不合規的使用者名稱')} -->`,
			summary: window.wgULS(
				'封禁通知：您的用户名违反[[LIB:U|用户名条例]]',
				'封鎖通知：您的使用者名稱違反[[LIB:U|使用者名稱條例]]'
			),
		},
		'uw-ublock-suggestive': {
			autoblock: true,
			expiry: 'infinity',
			forRegisteredOnly: true,
			nocreate: true,
			reason: `{{uw-ublock-suggestive}}<!-- ${window.wgULS('误导、混淆性用户名', '誤導、混淆性使用者名稱')} -->`,
			summary: window.wgULS(
				'封禁通知：您的用户名违反[[LIB:U|用户名条例]]',
				'封鎖通知：您的使用者名稱違反[[LIB:U|使用者名稱條例]]'
			),
		},
		'uw-ublock-spam': {
			autoblock: true,
			expiry: 'infinity',
			forRegisteredOnly: true,
			nocreate: true,
			reason: `{{uw-ublock-spam}}<!-- ${window.wgULS('宣传性用户名或宣传性编辑', '宣傳性使用者名稱或宣傳性編輯')} -->`,
			summary: window.wgULS(
				'封禁通知：您的用户名违反[[LIB:U|用户名条例]]',
				'封鎖通知：您的使用者名稱違反[[LIB:U|使用者名稱條例]]'
			),
		},
		// other block templates
		'range block': {
			expiry: '1 week',
			reason: '{{range block}}',
			nocreate: true,
			nonstandard: true,
			forAnonOnly: true,
			sig: '~~'.concat('~~'),
		},
		'blocked proxy': {
			expiry: '2 years',
			forAnonOnly: true,
			nocreate: true,
			nonstandard: true,
			hardblock: true,
			reason: '{{blocked proxy}}',
			sig: null,
		},
		checkuserblock: {
			expiry: '1 week',
			forAnonOnly: true,
			nocreate: true,
			nonstandard: true,
			reason: '{{checkuserblock}}',
			sig: '~~'.concat('~~'),
		},
		'checkuserblock-account': {
			autoblock: true,
			expiry: 'infinity',
			forRegisteredOnly: true,
			nocreate: true,
			nonstandard: true,
			reason: '{{checkuserblock-account}}',
			sig: '~~'.concat('~~'),
		},
		'school block': {
			expiry: '1 week',
			forAnonOnly: true,
			nocreate: true,
			nonstandard: true,
			reason: '{{school block}}',
			sig: '~~'.concat('~~'),
		},
		'Bot block message': {
			expiry: 'infinity',
			forRegisteredOnly: true,
			reason: window.wgULS('机器人故障', '機器人故障'),
			summary: window.wgULS('封禁通知：机器人故障', '封鎖通知：機器人故障'),
			sig: '~~'.concat('~~'),
		},
		// other block reasons
		bioblock: {
			autoblock: true,
			expiry: '1 day',
			nocreate: true,
			pageParam: true,
			reason: window.wgULS('违反生者传记条例', '違反生者傳記條例'),
			summary: window.wgULS('封禁通知：违反生者传记条例', '封鎖通知：違反生者傳記條例'),
			templateName: 'uw-vblock',
		},
		ucblock: {
			autoblock: true,
			expiry: '1 day',
			nocreate: true,
			pageParam: true,
			reason: window.wgULS('屡次增加没有[[LIB:RS|可靠来源]]的资料', '屢次增加沒有[[LIB:RS|可靠來源]]的資料'),
			summary: window.wgULS(
				'封禁通知：屡次增加没有[[LIB:RS|可靠来源]]的资料',
				'封鎖通知：屢次增加沒有[[LIB:RS|可靠來源]]的資料'
			),
			templateName: 'uw-block',
		},
		npblock: {
			autoblock: true,
			expiry: '1 day',
			nocreate: true,
			pageParam: true,
			reason: window.wgULS('在条目中增加无意义文字', '在條目中增加無意義文字'),
			summary: window.wgULS('封禁通知：在条目中增加无意义文字', '封鎖通知：在條目中增加無意義文字'),
			templateName: 'uw-vblock',
		},
		'point-block': {
			autoblock: true,
			expiry: '1 day',
			nocreate: true,
			pageParam: true,
			reasonParam: true,
			reason: window.wgULS('持续打制度擦边球', '持續打制度擦邊球'),
			summary: window.wgULS('封禁通知：持续打制度擦边球', '封鎖通知：持續打制度擦邊球'),
			templateName: 'uw-block',
		},
		'sock-contribs': {
			autoblock: true,
			expiry: 'infinity',
			forRegisteredOnly: true,
			nocreate: true,
			reasonParam: true,
			reason: window.wgULS(
				'确认为[[LIB:SOCK|傀儡]]或真人傀儡 - 根据用户贡献确定',
				'確認為[[LIB:SOCK|傀儡]]或真人傀儡 - 根據使用者貢獻確定'
			),
			summary: window.wgULS(
				'封禁通知：确认为[[LIB:SOCK|傀儡]]或真人傀儡',
				'封鎖通知：確認為[[LIB:SOCK|傀儡]]或真人傀儡'
			),
			templateName: 'uw-blockindef',
		},
		'sock-cu': {
			autoblock: true,
			expiry: 'infinity',
			forRegisteredOnly: true,
			nocreate: true,
			reasonParam: true,
			reason: window.wgULS(
				'确认为[[LIB:SOCK|傀儡]]或真人傀儡 - 用户查核确认',
				'確認為[[LIB:SOCK|傀儡]]或真人傀儡 - 使用者查核確認'
			),
			summary: window.wgULS(
				'封禁通知：确认为[[LIB:SOCK|傀儡]]或真人傀儡',
				'封鎖通知：確認為[[LIB:SOCK|傀儡]]或真人傀儡'
			),
			templateName: 'uw-blockindef',
		},
		'uw-ublock-attack': {
			autoblock: true,
			expiry: 'infinity',
			forRegisteredOnly: true,
			nocreate: true,
			reason: `{{uw-ublock-attack}}<!-- ${window.wgULS('攻击性用户名', '攻擊性使用者名稱')} -->`,
			summary: window.wgULS('封禁通知：攻击性用户名', '封鎖通知：攻擊性使用者名稱'),
		},
		// Begin partial block templates, accessed in Twinkle.block.blockGroupsPartial
		'uw-pblock': {
			autoblock: true,
			expiry: '1 day',
			nocreate: false,
			pageParam: false,
			reasonParam: true,
			summary: window.wgULS(
				'封禁通知：您已被禁止编辑有兽档案馆的部分区域',
				'封鎖通知：您已被禁止編輯有獸檔案館的部分區域'
			),
		},
		'uw-pblockindef': {
			autoblock: true,
			expiry: 'infinity',
			nocreate: false,
			pageParam: false,
			reasonParam: true,
			summary: window.wgULS(
				'封禁通知：您已被永久禁止编辑有兽档案馆的部分区域',
				'封鎖通知：您已被永久禁止編輯有獸檔案館的部分區域'
			),
		},
	};
	Twinkle.block.transformBlockPresets = () => {
		// Merge custom reason
		for (const item of Twinkle.getPref('customBlockReasonList')) {
			const newKey = `${item.value}|${item.label}`;
			Twinkle.block.blockPresetsInfo[newKey] = {
				autoblock: true,
				nocreate: true,
				...Twinkle.block.blockPresetsInfo[item.value],
				reason: item.label,
				templateName: item.value,
			};
			if (Twinkle.block.blockPresetsInfo[item.value] === undefined) {
				Twinkle.block.blockPresetsInfo[item.value] = {
					pageParam: true,
					reasonParam: true,
					custom: true,
				};
			}
		}
		// supply sensible defaults
		for (const [preset, settings] of Object.entries(Twinkle.block.blockPresetsInfo)) {
			settings.summary ||= settings.reason;
			settings.sig = settings.sig === undefined ? 'yes' : settings.sig;
			settings.indefinite ||= Morebits.string.isInfinity(settings.expiry);
			if (!Twinkle.block.isRegistered && settings.indefinite) {
				settings.expiry = '1 day';
			} else {
				settings.expiry ||= '1 day';
			}
			Twinkle.block.blockPresetsInfo[preset] = settings;
		}
	};
	// These are the groups of presets and defines the order in which they appear. For each list item:
	//   label: <string, the description that will be visible in the dropdown>
	//   value: <string, the key of a preset in blockPresetsInfo>
	//   meta: <boolean, show in templates only>
	Twinkle.block.blockGroups = [
		{
			label: window.wgULS('普通封禁', '普通封鎖'),
			list: [
				{label: window.wgULS('通用封禁（自定义理由）', '通用封鎖（自訂理由）'), value: 'uw-block'},
				{
					label: window.wgULS('无限期封禁（自定义理由）', '無限期封鎖（自訂理由）'),
					value: 'uw-blockindef',
				},
				{label: window.wgULS('禁止编辑讨论页', '禁止編輯討論頁'), value: 'uw-blocknotalk', meta: true},
				{label: window.wgULS('违反回退不过三原则', '違反回退不過三原則'), value: 'uw-3block'},
				{label: window.wgULS('散发广告或宣传', '散發廣告或宣傳'), value: 'uw-adblock'},
				{label: window.wgULS('行为无礼或人身攻击', '行為無禮或人身攻擊'), value: 'uw-attackblock'},
				{
					label: window.wgULS('多次加入侵犯著作权的内容', '多次加入侵犯著作權的內容'),
					value: 'uw-copyrightblock',
				},
				{label: window.wgULS('无故删除内容', '無故刪除內容'), value: 'uw-dblock'},
				{label: window.wgULS('骚扰用户', '騷擾使用者'), value: 'uw-hblock'},
				{label: window.wgULS('破坏', '破壞'), value: 'uw-vblock', selected: true},
				{
					label: window.wgULS('持续加入非法内容', '持續加入非法內容'),
					value: 'uw-illegalblock',
				},
				{label: window.wgULS('滥用多个账号', '濫用多個賬號'), value: 'uw-sockblock'},
				// other block reasons
				{label: window.wgULS('违反生者传记条例', '違反生者傳記條例'), value: 'bioblock'},
				{label: window.wgULS('屡次增加没有可靠来源的资料', '屢次增加沒有可靠來源的資料'), value: 'ucblock'},
				{label: window.wgULS('在条目中增加无意义文字', '在條目中增加無意義文字'), value: 'npblock'},
				{label: window.wgULS('持续打制度擦边球', '持續打制度擦邊球'), value: 'point-block'},
				{
					label: window.wgULS(
						'确认为傀儡或真人傀儡（根据用户贡献确定）',
						'確認為傀儡或真人傀儡（根據使用者貢獻確定）'
					),
					value: 'sock-contribs',
				},
				{
					label: window.wgULS(
						'确认为傀儡或真人傀儡（用户查核确认）',
						'確認為傀儡或真人傀儡（使用者查核確認）'
					),
					value: 'sock-cu',
				},
				{
					label: window.wgULS('机器人发生故障并必须紧急停止', '機器人發生故障並必須緊急停止'),
					value: 'Bot block message',
				},
			],
		},
		{
			custom: true,
			label: window.wgULS('自定义封禁理由', '自訂封鎖理由'),
		},
		{
			label: window.wgULS('用户名封禁', '使用者名稱封鎖'),
			list: [
				{label: window.wgULS('违反用户名条例', '違反使用者名稱條例'), value: 'uw-ublock'},
				{label: window.wgULS('不合规的用户名', '不合規的使用者名稱'), value: 'uw-ublock-illegal'},
				{label: window.wgULS('宣传性用户名', '宣傳性使用者名稱'), value: 'uw-ublock-spam'},
				{label: window.wgULS('攻击性用户名', '攻擊性使用者名稱'), value: 'uw-ublock-attack'},
				{
					label: window.wgULS('混淆性或误导性用户名', '混淆性或誤導性使用者名稱'),
					value: 'uw-ublock-suggestive',
				},
			],
		},
		{
			label: '其他模板',
			list: [
				{label: 'range block', value: 'range block', forAnonOnly: true},
				{label: 'school block', value: 'school block', forAnonOnly: true},
				{label: 'blocked proxy', value: 'blocked proxy', forAnonOnly: true},
				{
					label: window.wgULS('用户查核封禁（主用户）', '使用者查核封鎖（主使用者）'),
					value: 'checkuserblock',
					forAnonOnly: true,
				},
				{
					label: window.wgULS('用户查核封禁（子用户）', '使用者查核封鎖（子使用者）'),
					value: 'checkuserblock-account',
					forRegisteredOnly: true,
				},
			],
		},
	];
	Twinkle.block.blockGroupsPartial = [
		{
			label: window.wgULS('常见部分封禁理由', '常見部分封鎖理由'),
			list: [
				{
					label: window.wgULS('通用部分封禁（自定义理由）', '通用部分封鎖（自訂理由）'),
					value: 'uw-pblock',
					selected: true,
				},
				{
					label: window.wgULS('无限期部分封禁（自定义理由）', '無限期部分封鎖（自訂理由）'),
					value: 'uw-pblockindef',
				},
			],
		},
	];
	Twinkle.block.callback.filtered_block_groups = (group, show_template) => {
		// eslint-disable-next-line no-jquery/no-map-util
		return $.map(group, (blockGroup) => {
			// Add custom reason
			if (blockGroup.custom) {
				if (show_template) {
					let templates = Array.prototype.map.call(Twinkle.getPref('customBlockReasonList'), (item) => {
						if (Twinkle.block.blockPresetsInfo[item.value].custom) {
							return item.value;
						}
					});
					templates = Morebits.array.uniq(templates);
					blockGroup.list = Array.prototype.map.call(templates, (template) => {
						return {
							label: window.wgULS('自定义模板', '自訂模板'),
							value: template,
						};
					});
				} else {
					blockGroup.list = Array.prototype.map.call(Twinkle.getPref('customBlockReasonList'), (item) => {
						return {
							label: item.label,
							value: `${item.value}|${item.label}`,
						};
					});
				}
			}
			// eslint-disable-next-line no-jquery/no-map-util
			const list = $.map(blockGroup.list, (blockPreset) => {
				if (!show_template && blockPreset.meta) {
					return;
				}
				switch (blockPreset.value) {
					case 'range block':
						if (!Morebits.ip.isRange(relevantUserName)) {
							return;
						}
						blockPreset.selected = !Morebits.ip.get64(relevantUserName);
						break;
					default:
						break;
				}
				const blockSettings = Twinkle.block.blockPresetsInfo[blockPreset.value];
				let registrationRestrict;
				if (blockSettings.forRegisteredOnly) {
					registrationRestrict = Twinkle.block.isRegistered;
				} else if (blockSettings.forAnonOnly) {
					registrationRestrict = !Twinkle.block.isRegistered;
				} else {
					registrationRestrict = true;
				}
				if (!(blockSettings.templateName && show_template) && registrationRestrict) {
					const templateName = blockSettings.templateName || blockPreset.value;
					return {
						label: (show_template ? `{{${templateName}}}: ` : '') + blockPreset.label,
						value: blockPreset.value,
						data: [
							{
								name: 'template-name',
								value: templateName,
							},
						],
						selected: !!blockPreset.selected,
						disabled: !!blockPreset.disabled,
					};
				}
			});
			if (list.length) {
				return {
					label: blockGroup.label,
					list,
				};
			}
		});
	};

	Twinkle.block.callback.preview = (params, previewBox) => {
		const pageRestrictions = params.pagerestrictions
			.split(/[、,，\n]/)
			.map((item) => {
				return item.trim();
			})
			.filter(Boolean);
		const templateParams = {
			article: params.article,
			blank_duration: params.blank_duration,
			disabletalk: params.disabletalk || params.notalk,
			expiry: params.template_expiry || params.expiry,
			hardblock: Twinkle.block.isRegistered ? params.autoblock : params.hardblock,
			indefinite: Morebits.string.isInfinity(params.template_expiry || params.expiry),
			reason: params.block_reason,
			template: params.template,
			partial: params.actiontype.includes('partial'),
			pagerestrictions: pageRestrictions,
			namespacerestrictions: params.namespacerestrictions,
			noemail: params.noemail || params.noemail_template,
			nocreate: params.nocreate || params.nocreate_template,
			area: params.area,
		};
		const templateText = Twinkle.block.callback.getBlockNoticeWikitext(templateParams);
		if (previewer) {
			previewer.closePreview();
		}
		previewer = new Morebits.wiki.preview(previewBox);
		previewer.beginRender(templateText, `User_talk:${relevantUserName}/Wikitext`); // Force wikitext/correct username
	};
	Twinkle.block.callback.evaluate = (params, statusContainer, restore) => {
		// Apply the /64 upgrade if requested
		relevantUserName = params.block64
			? Morebits.ip.get64(mw.config.get('wgRelevantUserName'))
			: mw.config.get('wgRelevantUserName');
		const toBlock = params.actiontype.includes('block');
		const toWarn = params.actiontype.includes('template');
		const toPartial = params.actiontype.includes('partial');
		const toTag = params.actiontype.includes('tag');
		const toProtect = params.actiontype.includes('protect');
		const toUnblock = params.actiontype.includes('unblock');
		const pageRestrictions = params.pagerestrictions
			.split(/[、,，\n]/)
			.map((item) => {
				return item.trim();
			})
			.filter(Boolean);
		const blockoptions = {
			partial: toPartial,
			nocreate: params.nocreate,
			noemail: params.noemail,
			disabletalk: params.disabletalk,
			autoblock: params.autoblock,
			hardblock: params.hardblock,
			watchuser: params.watchuser,
			// Interpret a 12-digit absolute expiry (yyyymmddhhmm) as Beijing time
			expiry: normalizeExpiry(params.expiry ?? ''),
			reason: params.reason,
		};
		const templateoptions = {
			template: params.template,
			article: params.article,
			area: params.area,
			template_expiry: params.template_expiry,
			block_reason: params.block_reason,
			blank_duration: params.blank_duration,
			notalk: params.notalk,
			noemail_template: params.noemail_template,
			nocreate_template: params.nocreate_template,
			partial: toPartial,
			disabletalk: !!(params.notalk || params.disabletalk),
			hardblock: !!params.hardblock,
		};
		const unblockoptions = {
			reason: params.unblock_reason,
		};
		const toClosevip = !!params.closevip;
		templateoptions.pagerestrictions = pageRestrictions;
		templateoptions.namespacerestrictions = params.namespacerestrictions;
		// Format for API
		blockoptions.pagerestrictions = pageRestrictions.join('|');
		blockoptions.namespacerestrictions = params.namespacerestrictions.join('|');
		// use block settings as warn options where not supplied
		templateoptions.summary ||= blockoptions.reason;
		templateoptions.expiry = templateoptions.template_expiry || blockoptions.expiry;
		templateoptions.preset = toBlock ? params.preset : null;
		// Check tags
		// Given an array of incompatible tags, check if we have two or more selected
		const checkIncompatible = (conflicts, extra) => {
			const count = conflicts.reduce((sum, tag) => {
				return (sum += params.tag.includes(tag));
			}, 0);
			if (count > 1) {
				let message = `${window.wgULS('请在以下标签中择一使用', '請在以下標籤中擇一使用')}：{{${conflicts.join(
					'}}、{{'
				)}}}。`;
				message += extra || '';
				void mw.notify(message, {
					type: 'warn',
					tag: 'twinkleblock',
				});
				return true;
			}
		};
		if (toTag) {
			if (params.tag.length === 0) {
				void mw.notify(window.wgULS('请至少选择一个用户页标记！', '請至少選擇一個使用者頁面標記！'), {
					type: 'warn',
					tag: 'twinkleblock',
				});
				if (restore) {
					restore();
				}
				return;
			}
			if (
				checkIncompatible(
					['Blocked user', 'Sockpuppet'],
					window.wgULS(
						'{{Sockpuppet}}已涵盖{{Blocked user}}的功能。',
						'{{Sockpuppet}}已涵蓋{{Blocked user}}的功能。'
					)
				)
			) {
				if (restore) {
					restore();
				}
				return;
			}
			if (
				checkIncompatible(
					['Blocked user', 'Sockpuppeteer'],
					window.wgULS(
						'{{Sockpuppeteer}}已涵盖{{Blocked user}}的功能。',
						'{{Sockpuppeteer}}已涵蓋{{Blocked user}}的功能。'
					)
				)
			) {
				if (restore) {
					restore();
				}
				return;
			}
			if (
				checkIncompatible(
					['Sockpuppet', 'Sockpuppeteer'],
					window.wgULS('请从主账号和分身账号中选择一个。', '請從主賬號和分身賬號中選擇一個。')
				)
			) {
				if (restore) {
					restore();
				}
				return;
			}
			if (params.tag.includes('Sockpuppet') && params.sppUsername.trim() === '') {
				void mw.notify(window.wgULS('请提供傀儡账号的主账号用户名！', '請提供傀儡賬號的主賬號使用者名稱！'), {
					type: 'warn',
					tag: 'twinkleblock',
				});
				if (restore) {
					restore();
				}
				return;
			}
		}
		if (toBlock) {
			if (blockoptions.partial) {
				if (blockoptions.disabletalk && !blockoptions.namespacerestrictions.includes('3')) {
					void mw.notify(
						window.wgULS(
							'部分封禁无法阻止编辑自己的讨论页，除非也封禁了User talk命名空间！',
							'部分封鎖無法阻止編輯自己的討論頁，除非也封鎖了User talk命名空間！'
						),
						{
							type: 'warn',
							tag: 'twinkleblock',
						}
					);
					if (restore) {
						restore();
					}
					return;
				}
				if (!blockoptions.namespacerestrictions && !blockoptions.pagerestrictions) {
					if (!blockoptions.noemail && !blockoptions.nocreate) {
						// Blank entries technically allowed
						void mw.notify(
							window.wgULS(
								'没有选择页面或命名空间，也没有停用电子邮件或禁止创建账号；请选择至少一个选项以应用部分封禁！',
								'沒有選擇頁面或命名空間，也沒有停用電子郵件或禁止建立賬號；請選擇至少一個選項以應用部分封鎖！'
							),
							{
								type: 'warn',
								tag: 'twinkleblock',
							}
						);
						if (restore) {
							restore();
						}
						return;
					} else if (
						!confirm(
							window.wgULS(
								'您将要进行封禁，但没有阻止任何页面或命名空间的编辑，确定要继续？',
								'您將要進行封鎖，但沒有阻止任何頁面或命名空間的編輯，確定要繼續？'
							)
						)
					) {
						return;
					}
				}
			}
			if (!blockoptions.expiry) {
				void mw.notify(window.wgULS('请提供过期时间！', '請提供過期時間！'), {
					type: 'warn',
					tag: 'twinkleblock',
				});
				if (restore) {
					restore();
				}
				return;
			} else if (Morebits.string.isInfinity(blockoptions.expiry) && !Twinkle.block.isRegistered) {
				void mw.notify(window.wgULS('禁止无限期封禁IP地址！', '禁止無限期封鎖IP位址！'), {
					type: 'warn',
					tag: 'twinkleblock',
				});
				if (restore) {
					restore();
				}
				return;
			}
			if (!blockoptions.reason) {
				void mw.notify(window.wgULS('请提供封禁理由！', '請提供封鎖理由！'), {
					type: 'warn',
					tag: 'twinkleblock',
				});
				if (restore) {
					restore();
				}
				return;
			}
			Morebits.status.init(statusContainer);
			const statusElement = new Morebits.status(window.wgULS('执行封禁', '執行封鎖'));
			blockoptions.action = 'block';
			blockoptions.user = relevantUserName;
			// boolean-flipped options
			blockoptions.anononly = blockoptions.hardblock ? undefined : true;
			blockoptions.allowusertalk = blockoptions.disabletalk ? undefined : true;
			/**
			 * Check if block status changed while processing the form.
			 * There's a lot to consider here. list=blocks provides the
			 * current block status, but there are at least two issues with
			 * relying on it. First, the id doesn't update on a reblock,
			 * meaning the individual parameters need to be compared. This
			 * can be done roughly with JSON.stringify - we can thankfully
			 * rely on order from the server, although sorting would be
			 * fine if not - but falsey values are problematic and is
			 * non-ideal. More importantly, list=blocks won't indicate if a
			 * non-blocked user is blocked then unblocked. This should be
			 * exceedingy rare, but regardless, we thus need to check
			 * list=logevents, which has a nicely updating logid
			 * parameter. We can't rely just on that, though, since it
			 * doesn't account for blocks that have expired on their own.
			 * As such, we use both. Using some ternaries, the logid
			 * variables are false if there's no logevents, so if they
			 * aren't equal we defintely have a changed entry (send
			 * confirmation). If they are equal, then either the user was
			 * never blocked (the block statuses will be equal, no
			 * confirmation) or there's no new block, in which case either
			 * a block expired (different statuses, confirmation) or the
			 * same block is still active (same status, no confirmation).
			 */
			const query = {
				format: 'json',
				action: 'query',
				list: 'blocks|logevents',
				letype: 'block',
				lelimit: 1,
				letitle: `User:${blockoptions.user}`,
			};
			// bkusers doesn't catch single IPs blocked as part of a range block
			if (mw.util.isIPAddress(blockoptions.user, true)) {
				query.bkip = blockoptions.user;
			} else {
				query.bkusers = blockoptions.user;
				query.list += '|users';
				query.usprop = 'groups';
				query.ususers = blockoptions.user;
				query.meta = 'tokens';
				query.type = 'userrights';
			}
			void api.get(query).then((data) => {
				let [block] = data.query.blocks;
				// As with the initial data fetch, if an IP is blocked
				// *and* rangeblocked, this would only grab whichever
				// block is more recent, which would likely mean a
				// mismatch.  However, if the rangeblock is updated
				// while filling out the form, this won't detect that,
				// but that's probably fine.
				if (data.query.blocks.length > 1 && block.user !== relevantUserName) {
					[, block] = data.query.blocks;
				}
				const [logevents] = data.query.logevents;
				const user = data.query.users ? data.query.users[0] : null;
				const logid = data.query.logevents.length ? logevents.logid : false;
				if (logid !== Twinkle.block.blockLogId || !!block !== !!Twinkle.block.currentBlockInfo) {
					let message = blockoptions.user + window.wgULS('的封禁状态已被修改。', '的封鎖狀態已被修改。');
					if (block) {
						message += window.wgULS('新状态：', '新狀態：');
					} else {
						message += window.wgULS('最新日志：', '最新日誌：');
					}
					let logExpiry = '';
					if (logevents.params.duration) {
						if (logevents.params.duration === 'infinity') {
							logExpiry = window.wgULS('无限期', '無限期');
						} else {
							const expiryDate = new Morebits.date(logevents.params.expiry);
							logExpiry +=
								(expiryDate.isBefore(new Date()) ? window.wgULS('过期于', '過期於') : '直到') +
								expiryDate.calendar(UTC8_OFFSET_MINUTES);
						}
					} else {
						// no duration, action=unblock, just show timestamp
						logExpiry = `於${new Morebits.date(logevents.timestamp).calendar(UTC8_OFFSET_MINUTES)}`;
					}
					message += `由${logevents.user}${window.wgULS('以“', '以「')}${logevents.comment}${window.wgULS('”', '」')}${
						blockActionText[logevents.action]
					}${logExpiry}${window.wgULS('，你想要以你的设置更改封禁吗？', '，你想要以你的設定變更封鎖嗎？')}`;
					if (!confirm(message)) {
						Morebits.status.info(
							window.wgULS('执行封禁', '執行封鎖'),
							window.wgULS('用户取消操作', '使用者取消操作')
						);
						return;
					}
					blockoptions.reblock = 1; // Writing over a block will fail otherwise
				}
				const groupsCanBeRemoved = [
					'autopatrolled',
					'confirmed',
					'rnrsverify-exempt',
					'massmessage-sender',
					'patroller',
					'templateeditor',
					'importer',
				];
				let groupsToBeRemoved = [];
				if (user && Morebits.string.isInfinity(blockoptions.expiry)) {
					groupsToBeRemoved = user.groups.filter((group) => {
						return groupsCanBeRemoved.includes(group);
					});
				}
				// execute block
				blockoptions.tags = Twinkle.changeTags;
				blockoptions.token = mw.user.tokens.get('csrfToken');
				const mbApi = new Morebits.wiki.api(window.wgULS('执行封禁', '執行封鎖'), blockoptions, () => {
					statusElement.info('完成');
					if (toWarn) {
						Twinkle.block.callback.issue_template(templateoptions);
					}
					if (toClosevip) {
						const vipPage = new Morebits.wiki.page(
							'LIB_talk:报告当前破坏',
							window.wgULS('关闭请求', '關閉請求')
						);
						vipPage.setFollowRedirect(true);
						vipPage.setCallbackParameters(blockoptions);
						vipPage.load(Twinkle.block.callback.closeRequest);
					}
					if (groupsToBeRemoved.length > 0) {
						const rightStatusElement = new Morebits.status(window.wgULS('移除权限', '移除權限'));
						if (
							confirm(
								window.wgULS('该用户有以下权限：', '該使用者有以下權限：') +
									groupsToBeRemoved.join('、') +
									window.wgULS('，您是否想要同时移除这些权限？', '，您是否想要同時移除這些權限？')
							)
						) {
							const revokeOptions = {
								action: 'userrights',
								user: blockoptions.user,
								remove: groupsToBeRemoved.join('|'),
								reason: window.wgULS('用户已被无限期封禁', '使用者已被無限期封鎖'),
								token: data.query.tokens.userrightstoken,
								tags: Twinkle.changeTags,
							};
							const mrApi = new Morebits.wiki.api(
								window.wgULS('移除权限', '移除權限'),
								revokeOptions,
								() => {
									rightStatusElement.info(`已移除${groupsToBeRemoved.join('、')}`);
								}
							);
							mrApi.post();
						} else {
							rightStatusElement.error(window.wgULS('用户取消操作。', '使用者取消操作。'));
						}
					}
				});
				mbApi.post();
			});
		} else if (toWarn) {
			Morebits.status.init(statusContainer);
			Twinkle.block.callback.issue_template(templateoptions);
		}
		if (toTag || toProtect) {
			Morebits.status.init(statusContainer);
			const userPage = `User:${mw.config.get('wgRelevantUserName')}`;
			const ysarchives_page = new Morebits.wiki.page(
				userPage,
				window.wgULS('标记或保护用户页', '標記或保護使用者頁面')
			);
			ysarchives_page.setCallbackParameters(params);
			ysarchives_page.load(Twinkle.block.callback.taguserpage);
		}
		if (toUnblock) {
			if (!unblockoptions.reason) {
				void mw.notify(window.wgULS('请提供解除封禁理由！', '請提供解除封鎖理由！'), {
					type: 'warn',
					tag: 'twinkleblock',
				});
				if (restore) {
					restore();
				}
				return;
			}
			Morebits.status.init(statusContainer);
			const unblockStatusElement = new Morebits.status(window.wgULS('执行解除封禁', '執行解除封鎖'));
			unblockoptions.action = 'unblock';
			unblockoptions.user = mw.config.get('wgRelevantUserName');
			// execute unblock
			unblockoptions.tags = Twinkle.changeTags;
			unblockoptions.token = mw.user.tokens.get('csrfToken');
			const unblockMbApi = new Morebits.wiki.api(
				window.wgULS('执行解除封禁', '執行解除封鎖'),
				unblockoptions,
				() => {
					unblockStatusElement.info('完成');
				}
			);
			unblockMbApi.post();
		}
		if (!toBlock && !toWarn && !toTag && !toProtect && !toUnblock) {
			void mw.notify(window.wgULS('请给Twinkle点事做！', '請給Twinkle點事做！'), {
				type: 'warn',
				tag: 'twinkleblock',
			});
			if (restore) {
				restore();
			}
		}
	};
	Twinkle.block.callback.taguserpage = (pageobj) => {
		const params = pageobj.getCallbackParameters();
		const statelem = pageobj.getStatusElement();
		if (params.actiontype.includes('tag')) {
			const tags = [];
			for (const tag of params.tag) {
				let tagtext = `{{${tag}`;
				switch (tag) {
					case 'Blocked user':
						break;
					case 'Sockpuppet':
						tagtext += `\n| 1 = ${params.sppUsername.trim()}`;
						tagtext += `\n| 2 = ${params.sppType.trim()}`;
						if (params.sppEvidence.trim()) {
							tagtext += `\n| evidence = ${params.sppEvidence.trim()}`;
						}
						tagtext += '\n| locked = no';
						tagtext += '\n| notblocked = no';
						tagtext += '\n';
						break;
					case 'Sockpuppeteer':
						tagtext += '\n| 1 = blocked';
						tagtext += `\n| checked = ${params.spmChecked ? 'yes' : ''}`;
						if (params.spmEvidence.trim()) {
							tagtext += `\n| evidence = ${params.spmEvidence.trim()}`;
						}
						tagtext += '\n';
						break;
					default:
						void mw.notify(window.wgULS('未知的用户页模板！', '未知的使用者頁面模板！'), {
							type: 'warn',
							tag: 'twinkleblock',
						});
						continue;
				}
				tagtext += '}}';
				tags[tags.length] = tagtext;
			}
			const text = tags.join('\n');
			pageobj.setPageText(text);
			pageobj.setEditSummary(window.wgULS('标记被永久封禁的用户页', '標記被永久封鎖的使用者頁面'));
			pageobj.setChangeTags(Twinkle.changeTags);
			pageobj.save(() => {
				Morebits.status.info(window.wgULS('标记用户页', '標記使用者頁面'), '完成');
				statelem.status(window.wgULS('正在保护页面', '正在保護頁面'));
				pageobj.load(Twinkle.block.callback.protectuserpage);
			});
		} else {
			Twinkle.block.callback.protectuserpage(pageobj);
		}
	};
	Twinkle.block.callback.protectuserpage = (pageobj) => {
		const params = pageobj.getCallbackParameters();
		const statelem = pageobj.getStatusElement();
		if (params.actiontype.includes('protect')) {
			if (pageobj.exists()) {
				pageobj.setEditProtection('sysop', 'indefinite');
				pageobj.setMoveProtection('sysop', 'indefinite');
			} else {
				pageobj.setCreateProtection('sysop', 'indefinite');
			}
			pageobj.setEditSummary(window.wgULS('被永久封禁的用户页', '被永久封鎖的使用者頁面'));
			pageobj.setChangeTags(Twinkle.changeTags);
			pageobj.protect(() => {
				Morebits.status.info(
					window.wgULS('保护用户页', '保護使用者頁面'),
					pageobj.exists() ? window.wgULS('已全保护', '已全保護') : window.wgULS('已白纸保护', '已白紙保護')
				);
				statelem.info('全部完成');
			});
		} else {
			statelem.info('全部完成');
		}
	};
	Twinkle.block.callback.issue_template = (formData) => {
		// Use wgRelevantUserName to ensure the block template goes to a single IP and not to the
		// "talk page" of an IP range (which does not exist)
		const userTalkPage = `User_talk:${mw.config.get('wgRelevantUserName')}`;
		const params = {
			...formData,
			messageData: Twinkle.block.blockPresetsInfo[formData.template],
			usertalk_summary: Twinkle.block.blockPresetsInfo[formData.preset || formData.template].summary,
			reason: formData.block_reason,
			disabletalk: formData.notalk,
			noemail: formData.noemail_template,
			nocreate: formData.nocreate_template,
		};
		Morebits.wiki.actionCompleted.redirect = userTalkPage;
		Morebits.wiki.actionCompleted.notice = window.wgULS(
			'完成，将在几秒后加载用户讨论页',
			'完成，將在幾秒後載入使用者討論頁'
		);
		const ysarchives_page = new Morebits.wiki.page(
			userTalkPage,
			window.wgULS('用户讨论页修改', '使用者討論頁修改')
		);
		ysarchives_page.setCallbackParameters(params);
		ysarchives_page.load(Twinkle.block.callback.main);
	};
	Twinkle.block.callback.closeRequest = (vipPage) => {
		const params = vipPage.getCallbackParameters();
		let text = vipPage.getPageText();
		const statusElement = vipPage.getStatusElement();
		const userName = mw.config.get('wgRelevantUserName');
		const expiryText = Morebits.string.formatTime(params.expiry);
		const comment = `{{Blocked|${Morebits.string.isInfinity(params.expiry) ? 'indef' : expiryText}}}。`;
		const requestList = text.split(/(?=\n===.+===\s*\n)/);
		let found = false;
		let hidename = false;
		const vipRe = new RegExp(
			`{{\\s*[Vv]andal\\s*\\|\\s*(1\\s*=\\s*)?${Morebits.pageNameRegex(
				userName
			)}\\s*(\\|\\s*hidename\\s*=[^|]+)?}}`,
			'm'
		);
		for (let request of requestList) {
			if (vipRe.exec(request)) {
				hidename = /\|\s*hidename\s*=[^|]+/.test(request);
				request = request.trimEnd();
				let newText = request.replace(
					/^(\*\s*处理：)[ \t]*(<!-- 非管理員僅可標記已執行的封禁，針對提報的意見請放在下一行 -->)?[ \t]*$/m,
					`$1${comment}--~~`.concat('~~')
				);
				if (request === newText) {
					newText = `${request}\n* 处理：${comment}--~~`.concat('~~');
				}
				request = `${newText}\n`;
				found = true;
				break;
			}
		}
		if (!found) {
			statusElement.warn(window.wgULS('没有找到相关的请求', '沒有找到相關的請求'));
			return;
		}
		text = requestList.join('');
		let summary;
		if (hidename) {
			summary = window.wgULS('标记为已处理', '標記為已處理');
		} else {
			summary = `/* ${userName} */ `;
			if (Morebits.string.isInfinity(params.expiry)) {
				summary += window.wgULS('不限期封禁', '不限期封鎖');
			} else {
				summary += window.wgULS('封禁', '封鎖') + expiryText;
			}
		}
		vipPage.setEditSummary(summary);
		vipPage.setChangeTags(Twinkle.changeTags);
		vipPage.setPageText(text);
		vipPage.save();
	};
	Twinkle.block.callback.getBlockNoticeWikitext = (params) => {
		let text = '{{';
		const settings = Twinkle.block.blockPresetsInfo[params.template];
		if (settings.nonstandard) {
			text += params.template;
		} else {
			text += 'subst:'.concat(params.template);
			if (params.article && settings.pageParam) {
				text += `|page=${params.article}`;
			}
			if (!/te?mp|^\s*$|min/.exec(params.expiry)) {
				if (params.indefinite) {
					text += '|indef=yes';
				} else if (!params.blank_duration) {
					// No expiry checks
					// Block template wants a duration, not date
					text += `|time=${Morebits.string.formatTime(params.expiry)}`; // formatTime
				}
			}
			if (!Twinkle.block.isRegistered && !params.hardblock) {
				text += '|anon=yes';
			}
			if (params.reason) {
				text += `|reason=${params.reason}`;
			}
			if (params.disabletalk) {
				text += '|notalk=yes';
			}
			// Currently, all partial block templates are "standard"
			// Building the template, however, takes a fair bit of logic
			if (params.partial) {
				if (params.pagerestrictions.length || params.namespacerestrictions.length) {
					const makeSentence = (array) => {
						if (array.length < 3) {
							return array.join('和');
						}
						const last = array.pop();
						return `${array.join('、')}和${last}`;
					};
					text += '|area=某些';
					if (params.pagerestrictions.length) {
						text += `頁面（${makeSentence(
							params.pagerestrictions.map((p) => {
								return `[[:${p}]]`;
							})
						)}`;
						text += params.namespacerestrictions.length ? '）和某些' : '）';
					}
					if (params.namespacerestrictions.length) {
						// 1 => Talk, 2 => User, etc.
						const namespaceNames = params.namespacerestrictions.map((id) => {
							return menuFormattedNamespaces[id];
						});
						text += `${
							window.wgULS('[[Help:命名空间|命名空间]]（', '[[Help:命名空間|命名空間]]（') +
							makeSentence(namespaceNames)
						}）`;
					}
				} else if (params.area) {
					text += `|area=${params.area}`;
				} else {
					if (params.noemail) {
						text += '|email=yes';
					}
					if (params.nocreate) {
						text += '|accountcreate=yes';
					}
				}
			}
		}
		if (settings.sig) {
			text += `|sig=${settings.sig}`;
		}
		return `${text}}}`;
	};
	Twinkle.block.callback.main = (pageobj) => {
		const params = pageobj.getCallbackParameters();
		const date = new Morebits.date(pageobj.getLoadTime());
		const {messageData} = params;
		let text;
		params.indefinite = Morebits.string.isInfinity(params.expiry);
		if (Twinkle.getPref('blankTalkpageOnIndefBlock') && params.template !== 'uw-lblock' && params.indefinite) {
			Morebits.status.info(
				window.wgULS('信息', '資訊'),
				window.wgULS(
					'根据参数设置清空讨论页并为日期创建新2级标题',
					'根據偏好設定清空討論頁並為日期建立新2級標題'
				)
			);
			text = `${date.monthHeader()}\n`;
		} else {
			text = pageobj.getPageText();
			const dateHeaderRegex = date.monthHeaderRegex();
			let dateHeaderRegexLast;
			let dateHeaderRegexResult;
			while ((dateHeaderRegexLast = dateHeaderRegex.exec(text)) !== null) {
				dateHeaderRegexResult = dateHeaderRegexLast;
			}
			// If dateHeaderRegexResult is null then lastHeaderIndex is never checked. If it is not null but
			// \n== is not found, then the date header must be at the very start of the page. lastIndexOf
			// returns -1 in this case, so lastHeaderIndex gets set to 0 as desired.
			const lastHeaderIndex = text.lastIndexOf('\n==') + 1;
			if (text.length > 0) {
				text += '\n\n';
			}
			if (!dateHeaderRegexResult || dateHeaderRegexResult.index !== lastHeaderIndex) {
				Morebits.status.info(
					window.wgULS('信息', '資訊'),
					window.wgULS('未找到当月的二级标题，将创建新的', '未找到當月的二級標題，將建立新的')
				);
				text += `${date.monthHeader()}\n`;
			}
		}
		params.expiry = params.template_expiry === undefined ? params.expiry : params.template_expiry;
		text += Twinkle.block.callback.getBlockNoticeWikitext(params);
		// build the edit summary
		let summary = params.usertalk_summary;
		if (messageData.suppressArticleInSummary !== true && params.article) {
			summary += `${window.wgULS('，于', '，於')}[[:${params.article}]]`;
		}
		pageobj.setPageText(text);
		pageobj.setEditSummary(summary);
		pageobj.setChangeTags(Twinkle.changeTags);
		pageobj.setWatchlist(Twinkle.getPref('watchBlockNotices'));
		pageobj.save();
	};
	Twinkle.addInitCallback(Twinkle.block, 'block');
})();

export {};
