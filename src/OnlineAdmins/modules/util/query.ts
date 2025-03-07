import {api} from './api';

const queryRecentChanges = async (rcstart: string, rcend: string) => {
	const params: ApiQueryRecentChangesParams = {
		rcstart,
		rcend,
		action: 'query',
		format: 'json',
		formatversion: '2',
		list: 'recentchanges',
		rcprop: 'user',
		rcshow: ['!bot', '!anon'],
		rclimit: 500,
		smaxage: 600,
		maxage: 600,
	};
	const response = await api.get(params);

	return response;
};

const queryLogEvents = async (lestart: string, leend: string) => {
	const params: ApiQueryLogEventsParams = {
		lestart,
		leend,
		action: 'query',
		format: 'json',
		formatversion: '2',
		list: 'logevents',
		leprop: 'user',
		lelimit: 500,
		smaxage: 600,
		maxage: 600,
	};
	const response = await api.get(params);

	return response;
};

const queryUserProps = async (ususers: string | string[]) => {
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

export {queryRecentChanges, queryLogEvents, queryUserProps};
