import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		Print: localize({
			en: 'Print',
			ja: '印刷',
			'zh-hans': '打印',
			'zh-hant': '列印',
		}),
		'Print this page': localize({
			en: 'Print this page',
			ja: 'このページを印刷に',
			'zh-hans': '打印此页面',
			'zh-hant': '列印此頁面',
		}),
		Cancel: localize({
			en: 'Cancel',
			ja: 'キャンセル',
			zh: '取消',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
