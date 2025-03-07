import {initMwApi} from './initMwApi';
import {uniqueArray} from './uniqueArray';

type FindVariants = typeof findVariants;

// eslint-disable-next-line func-style
async function findVariants(text: string) {
	const api: mw.Api = initMwApi('Util-FindVariants');

	const VARIANTS = ['zh-hans', 'zh-hant', 'zh-cn', 'zh-hk', 'zh-mo', 'zh-sg', 'zh-my', 'zh-tw'];

	const allVariants: string[] = [];

	const params: ApiParseParams = {
		action: 'parse',
		contentmodel: 'wikitext',
		format: 'json',
		formatversion: '2',
		prop: ['displaytitle'],
		title: 'temp',
		text,
	};

	for (const variant of VARIANTS) {
		params.uselang = variant;
		params.variant = variant;
		const response = await api.post(params);

		const displaytitle = response?.['query']?.displaytitle as string;
		const variantElement = document.createElement('variant');
		variantElement.innerHTML = displaytitle;

		if (variantElement.textContent) {
			allVariants[allVariants.length] = variantElement.textContent;
		}
	}

	return uniqueArray(allVariants);
}

export {type FindVariants, findVariants};
