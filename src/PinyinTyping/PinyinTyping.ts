import Typewriter, {type Config} from './Typewriter';
import {getBody, initMwApi} from 'ext.gadget.Util';

const api = initMwApi('PinyinTyping/To3RD');

type ParseResponse = {
	parse?: {
		text?: string;
	};
};

const fetchTo3rdItems = async (pageTitle: string): Promise<string> => {
	try {
		const response = (await api.get({
			action: 'parse',
			format: 'json',
			formatversion: '2',
			prop: 'text',
			page: pageTitle,
			uselang: mw.config.get('wgUserLanguage'),
			variant: mw.config.get('wgUserLanguage'),
			smaxage: 600,
			maxage: 600,
		})) as ParseResponse;

		const html = response?.parse?.text ?? '';
		if (!html) {
			return '';
		}

		return html;
	} catch (error) {
		console.error('[PinyinTyping] To3RD fetch error:', error);
		return '';
	}
};

// 获取本页留言
const thisPageMessage = () => {
	const list = [] as string[];

	const Message = document.querySelectorAll<HTMLElement>('.cs-head-comment');
	if (!Message.length) {
		console.error('[PinyinTyping] thisPageMessage head-comment is not defined');
		return list;
	}

	for (const item of Message) {
		const author = item.querySelector<HTMLElement>('.cs-comment-author');
		const text = item.querySelector<HTMLElement>('.cs-comment-body');
		if (author && text) {
			list.push(`${text.textContent ?? ''}  ————${author.textContent ?? ''}`);
		}
	}
	return list;
};

const otherPageMessage = async (container: HTMLElement) => {
	const list = [] as string[];

	const to3rdPage = container.dataset['to3rdPage'] ?? '';
	if (!to3rdPage) {
		console.error('[PinyinTyping] To3RD page is not defined');
		return list;
	}
	const html = await fetchTo3rdItems(to3rdPage);

	const datalist = document.createElement('div');
	datalist.innerHTML = html;

	const t = datalist.querySelectorAll<HTMLElement>('.to3rd-item');
	for (const item of t) {
		list.push(item.textContent);
	}

	return list;
};

const main = async () => {
	const to3rdContainer = document.querySelectorAll<HTMLElement>('.to3rd-container');
	if (!to3rdContainer.length) return;

	for (const container of to3rdContainer) {
		const typeing = container.querySelector<HTMLElement>('#typeing');
		if (!typeing) {
			console.error('[PinyinTyping] To3RD typring is not defined');
			continue;
		}

		let config = {} as Config;

		try {
			const domdataconfig = typeing.dataset['config'] ?? '';
			config = domdataconfig ? (JSON.parse(domdataconfig) as Config) : {};
		} catch (error) {
			console.error('Failed to parse config data', error);
			config = {};
		}

		const list = [];

		const thispage = config.thispage ?? false;
		if (thispage) {
			const thisPageMessageData = thisPageMessage();
			if (thisPageMessageData) {
				list.push(...thisPageMessageData);
			}
		} else {
			const otherPageMessageData = await otherPageMessage(container);
			if (otherPageMessageData) {
				list.push(...otherPageMessageData);
			}
		}

		const placeholder = container.querySelector<HTMLElement>('.placeholder');
		if (placeholder) placeholder.style.display = 'none';

		try {
			const domdatalist = typeing.dataset['list'] ?? '';
			if (domdatalist) {
				const dataslist = JSON.parse(domdatalist) as string[];
				if (Array.isArray(dataslist)) {
					list.push(...dataslist);
				}
			}
		} catch (error) {
			console.error('Failed to parse list data', error);
		}

		if (!list.length) return;

		const typewriter = new Typewriter(typeing, {
			...config,
			list,
		});
		typewriter.draw();
	}
};

(async () => {
	await getBody();
	await main();
})();
