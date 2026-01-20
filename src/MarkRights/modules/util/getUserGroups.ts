import * as OPTIONS from '../../options.json';
import {api} from './api';

const queryUserGroups = async (ususers: string | string[]) => {
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

	return response;
};

const getLocalUserGroups = async (ususers: string[]): Promise<Record<string, string[]>> => {
	const userGroups: Record<string, string[]> = {};

	ususers = ususers.filter((username) => {
		if (mw.storage.getObject(OPTIONS.storageKeyLocal + username)) {
			userGroups[username] = mw.storage.getObject(OPTIONS.storageKeyLocal + username) as string[];
		}

		return !Object.keys(userGroups).includes(username);
	});

	try {
		const response = await queryUserGroups(ususers);
		const {users: queryUsers} = response['query'] as {
			users: {groups: string[]; implicitgroups: string[]; name: string}[];
		};

		for (const user of queryUsers) {
			if (!user?.name || !user?.groups) {
				continue;
			}

			const {name, groups, implicitgroups} = user;

			userGroups[name] ??= [];

			userGroups[name] = [
				...userGroups[name],
				...groups.filter((element) => {
					return element !== '*';
				}),
				...(implicitgroups || []).filter((element) => {
					return element !== '*';
				}),
			];

			// Cache for 1 hour
			mw.storage.setObject(OPTIONS.storageKeyLocal + name, userGroups[name], 60 * 60);
		}
	} catch (error: unknown) {
		console.error('[MarkRights] Ajax error:', error);
	}

	return userGroups;
};

export {getLocalUserGroups, queryUserGroups};
