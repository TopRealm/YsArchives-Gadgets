import {api} from './api';
import {getMessage} from './i18n';
import {toastify} from 'ext.gadget.Toastify';

type Purge = (title: string) => Promise<void>;

const purge: Purge = async (title) => {
	const toastifyInstance: ToastifyInstance = toastify(
		{
			text: getMessage('Purging'),
			duration: -1,
		},
		'info'
	);
	const {wgWikiID} = mw.config.get();

	try {
		const params: ApiPurgeParams = {
			action: 'purge',
			format: 'json',
			formatversion: '2',
			titles: title,
			forcelinkupdate: true,
		};

		await api.post(params);
		localStorage.removeItem(`MediaWikiModuleStore:${wgWikiID}`);

		// Clean up potentially large legacy gadget caches to free up localStorage
		try {
			localStorage.removeItem('Wikiplus_i18nCache');
			localStorage.removeItem('Wikiplus_LanguageVersion');
			localStorage.removeItem('ext.gadget.AdvancedSiteNotices_cache');
			// Remove per-user/group caches that can accumulate many keys
			const prefixes = [
				'ext.gadget.Util_queryUserGroups-',
				'ext.gadget.Util_queryGlobalUserGroups-',
				'ext.gadget.MarkRights_local-',
				'ext.gadget.MarkRights_global-',
				'ext.gadget.Cat-a-Lot_results-',
			];
			for (const key in localStorage) {
				if (!Object.hasOwn(localStorage, key)) continue;
				if (
					prefixes.some((p) => {
						return key.startsWith(p);
					})
				) {
					localStorage.removeItem(key);
				}
			}
		} catch {}

		toastifyInstance.hideToast();
		toastify(
			{
				text: getMessage('Success'),
				close: true,
				duration: -1,
			},
			'success'
		);

		location.reload();
	} catch (error: unknown) {
		console.error('[PurgePageCache] Ajax error:', error);

		toastifyInstance.hideToast();
		toastify(
			{
				text: getMessage('Failed'),
				close: true,
				duration: -1,
			},
			'error'
		);
	}
};

export {type Purge, purge};
