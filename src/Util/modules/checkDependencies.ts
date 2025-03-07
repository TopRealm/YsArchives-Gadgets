import {generateArray} from './generateArray';
import {initMwApi} from './initMwApi';
import {uniqueArray} from './uniqueArray';

type Boolean = '0' | '1' | 0 | 1;
type CheckDependencies = typeof checkDependencies;

function checkDependencies(gadgetNames: string | string[]): Promise<void>;
function checkDependencies(gadgetNames: string, option: Boolean): Promise<void>;
// eslint-disable-next-line func-style
async function checkDependencies(gadgetNames: string | string[], option?: Boolean): Promise<void> {
	const api: mw.Api = initMwApi('Util-CheckDependencies');
	const gadgets = uniqueArray(generateArray(gadgetNames));
	option ||= 1;

	for (const gadget of gadgets) {
		if (
			(option === '0' && mw.user.options.get(`gadget-${gadget}`)) ||
			(option === '1' && !mw.user.options.get(`gadget-${gadget}`))
		) {
			await api.postWithEditToken({
				action: 'options',
				change: `gadget-${gadget}=${option}`,
			} as ApiOptionsParams);
			await mw.loader.using(`ext.gadget.${gadget}`);
		}
	}
}

export {type CheckDependencies, checkDependencies};
