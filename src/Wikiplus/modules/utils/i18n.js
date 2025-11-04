// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
class I18n {
	language;
	i18nData = {};
	sessionUpdateLog = [];
	constructor() {
		let language;
		try {
			language = JSON.parse(localStorage['Wikiplus_Settings'])['language'] || navigator.language.toLowerCase();
		} catch {
			language = (navigator.language || navigator.browserLanguage)
				.replace(/han[st]-?/i, '') // for languages like zh-Hans-CN
				.toLowerCase();
		}
		this.language = language;
		// Merge with sessionStorage i18n cache (limit to current language to avoid bloating storage)
		try {
			const raw = sessionStorage.getItem('Wikiplus_i18nCache') || '{}';
			const i18nCache = JSON.parse(raw);
			if (i18nCache && typeof i18nCache === 'object' && i18nCache[language]) {
				this.i18nData[language] = i18nCache[language];
			}
		} catch {
			// Fail to parse i18n cache, reset (in session)
			try {
				sessionStorage.setItem('Wikiplus_i18nCache', '{}');
			} catch {}
		}
	}
	translate(key, placeholders = []) {
		let result = '';
		if (this.language in this.i18nData) {
			if (key in this.i18nData[this.language]) {
				result = this.i18nData[this.language][key];
			} else {
				// try update language verison
				this.loadLanguage(this.language);
				if (key in this.i18nData['en-us']) {
					// Fallback to English
					result = this.i18nData['en-us'][key];
				} else {
					result = key;
				}
			}
		} else {
			this.loadLanguage(this.language);
		}

		if (placeholders.length > 0) {
			for (const [index, placeholder] of placeholders.entries()) {
				result = result.replace(`$${index + 1}`, placeholder);
			}
		}
		return result;
	}
	async loadLanguage(language) {
		if (this.sessionUpdateLog.includes(language)) {
			// Has been updated this session.
			return;
		}
		try {
			const response = await (
				await fetch(
					`https://gitcdn.qiuwen.net.cn/InterfaceAdmin/Wikiplus/raw/branch/dev/languages/${language}.json`
				)
			).json();
			const nowVersion = sessionStorage.getItem('Wikiplus_LanguageVersion') || '000';
			this.sessionUpdateLog.push(language);
			if (response.__version !== nowVersion || !(language in this.i18nData)) {
				// Language get updated
				console.info(`Update ${language} support to version ${response.__version}`);
				this.i18nData[language] = response;
				// Update sessionStorage cache, only keep current language to reduce footprint
				try {
					sessionStorage.setItem('Wikiplus_i18nCache', JSON.stringify({[language]: response}));
					sessionStorage.setItem('Wikiplus_LanguageVersion', String(response.__version || ''));
				} catch (e) {
					// Quota exceeded or disabled storage; ignore persistence
				}
			}
		} catch {
			// Unsupported language
		}
	}
}

export default new I18n();
