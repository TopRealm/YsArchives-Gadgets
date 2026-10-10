// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/*! Twinkle.js - twinkleimage.js */
import {createApp, h} from 'vue';
import TwImageDialog from './ui/TwImageDialog.vue';

(function twinkleimage() {
	/**
	 * twinkleimage.js: Image CSD module
	 * Mode of invocation: Tab ("DI")
	 * Active on: Local nonredirect file pages (not on Share)
	 */
	Twinkle.image = () => {
		if (
			mw.config.get('wgNamespaceNumber') === 6 &&
			!document.querySelector('#mw-sharedupload') &&
			document.querySelector('#mw-imagepage-section-filehistory')
		) {
			Twinkle.addPortletLink(
				Twinkle.image.callback,
				window.wgULS('图权', '圖權'),
				'tw-di',
				window.wgULS('提交文件快速删除', '提交檔案快速刪除')
			);
		}
	};
	Twinkle.image.callback = () => {
		const root = document.createElement('div');
		document.body.append(root);
		const app = createApp({
			render: () => {
				return h(TwImageDialog, {
					title: window.wgULS('文件快速删除候选', '檔案快速刪除候選'),
					initialNotify: Twinkle.getPref('notifyUserOnDeli'),
					footerLinks: [
						{text: window.wgULS('快速删除条例', '快速刪除條例'), href: mw.util.getUrl('LIB:CSD')},
						{text: window.wgULS('图权设置', '圖權設定'), href: mw.util.getUrl('H:TW/PREF#image')},
						{text: window.wgULS('Twinkle帮助', 'Twinkle說明'), href: mw.util.getUrl('H:TW/DOC#image')},
					],
					onSubmit: (params, statusContainer) => {
						Twinkle.image.callback.evaluate(params, statusContainer);
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
	Twinkle.image.callback.evaluate = (params, statusContainer) => {
		let notify = params.notify;
		const type = params.type;
		let csdcrit;
		switch (type) {
			case 'no source':
				csdcrit = 'f3';
				break;
			case 'no license':
				csdcrit = 'f3';
				break;
			case 'orphaned fair use':
				csdcrit = 'f5';
				notify = false;
				break;
			case 'no permission':
				csdcrit = 'f1';
				break;
			case 'no fair use rationale':
				csdcrit = 'f5';
				break;
			case 'replaceable fair use':
				csdcrit = 'f4';
				break;
			default:
				throw new Error('Twinkle.image.callback.evaluate：未知条款');
		}
		const lognomination =
			Twinkle.getPref('logSpeedyNominations') &&
			!Twinkle.getPref('noLogOnSpeedyNomination').includes(csdcrit.toLowerCase());
		const templatename = type;
		params.templatename = templatename;
		params.normalized = csdcrit;
		params.lognomination = lognomination;
		if (csdcrit === 'f4' && !params.f4_type) {
			void mw.notify(window.wgULS('CSD F4：请选择适用类型。', 'CSD F4：請選擇適用類別。'), {
				type: 'warn',
				tag: 'twinkleimage',
			});
			return false;
		}
		Morebits.status.init(statusContainer);
		Morebits.wiki.actionCompleted.redirect = mw.config.get('wgPageName');
		Morebits.wiki.actionCompleted.notice = window.wgULS('标记完成', '標記完成');
		// Tagging image
		const ysarchives_page = new Morebits.wiki.page(
			mw.config.get('wgPageName'),
			window.wgULS('加入删除标记', '加入刪除標記')
		);
		ysarchives_page.setCallbackParameters(params);
		ysarchives_page.load(Twinkle.image.callbacks.taggingImage);
		// Notifying uploader
		if (notify) {
			ysarchives_page.lookupCreation(Twinkle.image.callbacks.userNotification);
		} else {
			// add to CSD log if desired
			if (lognomination) {
				params.fromDI = true;
				Twinkle.speedy.callbacks.user.addToLog(params, null);
			}
			// No auto-notification, display what was going to be added.
			if (type !== 'orphaned fair use') {
				const noteData = document.createElement('pre');
				noteData.appendChild(
					document.createTextNode(
						'{{'.concat('subst:', `Uploadvionotice|${Morebits.pageNameNorm}}}--~~`, '~~')
					)
				);
				Morebits.status.info('提示', [
					window.wgULS('这些内容应贴进上传者对话页：', '這些內容應貼進上傳者討論頁：'),
					noteData,
				]);
			}
		}
	};
	Twinkle.image.callbacks = {
		taggingImage: (pageobj) => {
			let text = pageobj.getPageText();
			const params = pageobj.getCallbackParameters();
			// remove tag - deletion-tagged files cannot be moved
			text = text.replace(
				/\{\{(mtc|(copy |move )?to ?(share|commons)|move to (qiuwen share|wikimedia commons)|copy to (qiuwen share|wikimedia commons))[^}]*\}\}/gi,
				''
			);
			// Adding discussion
			if (params.type !== 'orphaned fair use') {
				const ysarchives_page = new Morebits.wiki.page(
					'LIB_talk:存废讨论/文件快速删除提报',
					window.wgULS('加入快速删除记录项', '加入快速刪除記錄項')
				);
				ysarchives_page.setFollowRedirect(true);
				ysarchives_page.setCallbackParameters(params);
				ysarchives_page.load(Twinkle.image.callbacks.imageList);
			}
			let tag = '';
			switch (params.type) {
				case 'orphaned fair use':
					tag = '{{'.concat('subst:', 'orphaned fair use}}\n');
					break;
				case 'no permission':
					tag = '{{'.concat(
						'subst:',
						`${params.templatename}/auto|1=${params.f1_source
							.replace(/http/g, '&#104;ttp')
							.replace(/\n+/g, '\n')
							.replace(/^\s*([^*])/gm, '* $1')
							.replace(/^\* $/m, '')}}}\n`
					);
					break;
				case 'replaceable fair use':
					tag = '{{'.concat('subst:', `${params.templatename}/auto|1=${params.f4_type}}}\n`);
					break;
				default:
					tag = '{{'.concat('subst:', `${params.templatename}/auto}}\n`);
					break;
			}
			const textNoSd = text.replace(
				/\{\{\s*(db(-\w*)?|d|delete|(?:hang|hold)[- ]?on)\s*(\|(?:\{\{[^{}]*\}\}|[^{}])*)?\}\}\s*/gi,
				''
			);
			if (
				text !== textNoSd &&
				confirm(window.wgULS('在页面上找到快速删除模板，要移除吗？', '在頁面上找到快速刪除模板，要移除嗎？'))
			) {
				text = textNoSd;
			}
			pageobj.setPageText(tag + text);
			let editSummary = window.wgULS('请求快速删除（', '請求快速刪除（');
			editSummary += `[[LIB:CSD#${params.normalized.toUpperCase()}|CSD ${params.normalized.toUpperCase()}]]`;
			editSummary += '）';
			pageobj.setEditSummary(editSummary);
			pageobj.setChangeTags(Twinkle.changeTags);
			pageobj.setWatchlist(Twinkle.getPref('deliWatchPage'));
			pageobj.setCreateOption('nocreate');
			pageobj.save();
		},
		userNotification: (pageobj) => {
			const params = pageobj.getCallbackParameters();
			const initialContrib = pageobj.getCreator();
			// disallow warning yourself
			if (initialContrib === mw.config.get('wgUserName')) {
				pageobj
					.getStatusElement()
					.warn(`您（${initialContrib}）${window.wgULS('创建了该页，跳过通知', '建立了該頁，跳過通知')}`);
			} else {
				const talkPageName = `User talk:${initialContrib}`;
				const usertalkpage = new Morebits.wiki.page(
					talkPageName,
					`${window.wgULS('通知上传者', '通知上傳者')}（${initialContrib}）`
				);
				const notifytext = '\n{{'.concat(
					'subst:',
					`Di-${params.templatename}-notice|1=${Morebits.pageNameNorm}}}--~~`,
					'~~'
				);
				usertalkpage.setAppendText(notifytext);
				usertalkpage.setEditSummary(
					window.wgULS('通知：文件[[', '通知：檔案[[') +
						Morebits.pageNameNorm +
						window.wgULS(']]快速删除提名', ']]快速刪除提名')
				);
				usertalkpage.setChangeTags(Twinkle.changeTags);
				usertalkpage.setCreateOption('recreate');
				usertalkpage.setWatchlist(Twinkle.getPref('deliWatchUser'));
				usertalkpage.setFollowRedirect(true, false);
				usertalkpage.append();
			}
			// add this nomination to the user's userspace log, if the user has enabled it
			if (params.lognomination) {
				params.fromDI = true;
				Twinkle.speedy.callbacks.user.addToLog(params, initialContrib);
			}
		},
		imageList: (pageobj) => {
			const text = pageobj.getPageText();
			// const params = pageobj.getCallbackParameters();
			pageobj.setPageText(`${text}\n* [[:${Morebits.pageNameNorm}]]--~~`.concat('~~'));
			pageobj.setEditSummary(`加入[[${Morebits.pageNameNorm}]]`);
			pageobj.setChangeTags(Twinkle.changeTags);
			pageobj.setCreateOption('recreate');
			pageobj.save();
		},
	};
	Twinkle.addInitCallback(Twinkle.image, 'image');
})();

export {};
