import {localize} from 'ext.gadget.i18n';

const getI18nMessages = () => {
	return {
		'Network error': localize({
			en: 'Network error',
			ja: 'ネットワークエラー',
			'zh-hans': '网络异常',
			'zh-hant': '網路異常',
		}),
		'Page URL': localize({
			en: 'Permanent URL',
			'zh-hans': '页面链接',
			'zh-hant': '頁面網址',
		}),
		'Permanent URL': localize({
			en: 'Permanent URL',
			'zh-hans': '永久链接',
			'zh-hant': '永久網址',
		}),
		'Share URL for the page': localize({
			en: 'Share URL for the page',
			'zh-hans': '分享本页链接',
			'zh-hant': '分享本頁網址',
		}),
		'Short URL': localize({
			en: 'Short URL',
			'zh-hans': '短链接',
			'zh-hant': '短網址',
		}),
		'Show URL': localize({
			en: 'Show URL',
			'zh-hans': '显示该页链接',
			'zh-hant': '顯示該頁網址',
		}),
		'URL copied to clipboard': localize({
			en: 'The URL has been copied to clipboard:',
			'zh-hans': '已复制本页链接：',
			'zh-hant': '已復製本頁網址：',
		}),
	};
};

const i18nMessages = getI18nMessages();

const getMessage: GetMessages<typeof i18nMessages> = (key) => {
	return i18nMessages[key] || key;
};

export {getMessage};
