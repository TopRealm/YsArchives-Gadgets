import {initMwApi} from './initMwApi';

type QueryGlobalUserGroups = typeof queryGlobalUserGroups;

// eslint-disable-next-line func-style
async function queryGlobalUserGroups(guiuser: string) {
	const api: mw.Api = initMwApi('Util-QueryGlobalUserGroups');

	const CACHE_KEY_PREFIX = 'ext.gadget.Util_queryGlobalUserGroups-';

	let groups: string[] = [];

	// Query from cache
	// Check if user group info is cached in LocalStorage
	// If cached, get them from LocalStorage
	if (mw.storage.getObject(CACHE_KEY_PREFIX + guiuser)) {
		groups = mw.storage.getObject(CACHE_KEY_PREFIX + guiuser) as string[];
		// Remove '*' from groups
		groups = groups.filter((element) => {
			return element !== '*';
		});
	} else {
		// Query from web
		// Query params
		const params = {
			action: 'query',
			format: 'json',
			formatversion: '2',
			meta: 'globaluserinfo',
			guiuser,
			guiprop: 'groups',
			smaxage: 600,
			maxage: 600,
		};
		const response = await api.get(params);

		// De-construct the response object
		const query = response['query'] as {
			globaluserinfo: {groups: string[]; name: string};
		};

		if (query?.globaluserinfo) {
			groups = query.globaluserinfo?.groups ?? [];
			// Remove '*' from groups
			groups = groups.filter((element) => {
				return element !== '*';
			});

			// Cache for 1 hour
			mw.storage.setObject(CACHE_KEY_PREFIX + guiuser, groups, 60 * 60);
		}
	}

	return {query: {globaluserinfo: {name: guiuser, groups}}};
}

export {type QueryGlobalUserGroups, queryGlobalUserGroups};
