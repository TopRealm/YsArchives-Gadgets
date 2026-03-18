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

const main = async () => {
	const to3rdContainer = document.querySelectorAll<HTMLElement>('.to3rd-container');
	if (!to3rdContainer.length) return;

	for (const container of to3rdContainer) {
		const typeing = container.querySelector<HTMLElement>('#typeing');
		if (!typeing) {
			console.error('[PinyinTyping] To3RD typring is not defined');
			continue;
		}

		const to3rdPage = container.dataset['to3rdPage'] ?? '';
		if (!to3rdPage) {
			console.error('[PinyinTyping] To3RD page is not defined');
			continue;
		}

		const html = await fetchTo3rdItems(to3rdPage);

		const placeholder = container.querySelector<HTMLElement>('.placeholder');
		if (placeholder) placeholder.style.display = 'none';

		const datalist = document.createElement('div');
		datalist.innerHTML = html;

		const t = datalist.querySelectorAll<HTMLElement>('.to3rd-item');
		const list = [];
		for (const item of t) {
			list.push(item.textContent);
		}
		let config = {};
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

		try {
			const domdataconfig = typeing.dataset['config'] ?? '';
			config = domdataconfig ? (JSON.parse(domdataconfig) as Config) : {};
		} catch (error) {
			console.error('Failed to parse config data', error);
			config = {};
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
