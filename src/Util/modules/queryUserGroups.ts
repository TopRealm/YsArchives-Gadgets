import {initMwApi} from './initMwApi';

type QueryUserGroups = typeof queryUserGroups;

// eslint-disable-next-line func-style
async function queryUserGroups(users: string[]) {
	const api: mw.Api = initMwApi('Util-QueryUserGroups');

	const CACHE_KEY_PREFIX = 'ext.gadget.Util_queryUserGroups-';

	const cachedQueryUsers: {groups: string[]; name: string}[] = [];

	// Query from cache
	for (const user of users) {
		// Check if user group info is cached in LocalStorage
		// If cached, get them from LocalStorage
		if (mw.storage.getObject(CACHE_KEY_PREFIX + user)) {
			let groups = mw.storage.getObject(CACHE_KEY_PREFIX + user) as string[];
			// Remove '*' from groups
			groups = groups.filter((element) => {
				return element !== '*';
			});
			// Store into array
			cachedQueryUsers[cachedQueryUsers.length] = {name: user, groups};
		}
	}

	// Query from web
	const ususers = users.filter((v) => {
		// Remove user that have cached user groups locally
		return !mw.storage.getObject(CACHE_KEY_PREFIX + v);
	});

	// Query params
	const params: ApiQueryUsersParams = {
		ususers,
		action: 'query',
		format: 'json',
		formatversion: '2',
		list: 'users',
		usprop: 'groups',
		smaxage: 600,
		maxage: 600,
	};
	const response = await api.get(params);

	// De-construct the response object
	const query = response['query'] as {
		users: {groups: string[]; name: string}[];
	};
	const queryUsers = [...(query?.users ?? []), ...cachedQueryUsers];

	for (const user of queryUsers) {
		if (user?.groups && user?.name) {
			let {groups} = user;
			// Remove '*' from groups
			groups = groups.filter((element) => {
				return element !== '*';
			});

			// Cache for 1 hour
			mw.storage.setObject(CACHE_KEY_PREFIX + user.name, groups, 60 * 60);
		}
	}

	return {query: {users: queryUsers}};
}

export {type QueryUserGroups, queryUserGroups};
