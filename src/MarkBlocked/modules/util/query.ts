import {api} from './api';

const queryIPBlocks = async (bkip: string) => {
	const params: ApiQueryBlocksParams = {
		action: 'query',
		format: 'json',
		formatversion: '2',
		list: 'blocks',
		bkip,
		bklimit: 100,
		bkprop: ['by', 'expiry', 'reason', 'restrictions', 'timestamp', 'user'],
		smaxage: 600,
		maxage: 600,
	};

	return await api.get(params);
};

const queryUserBlocks = async (bkusers: string | string[]) => {
	const params: ApiQueryBlocksParams = {
		action: 'query',
		format: 'json',
		formatversion: '2',
		list: 'blocks',
		bkusers,
		bklimit: 100,
		bkprop: ['by', 'expiry', 'reason', 'restrictions', 'timestamp', 'user'],
		smaxage: 600,
		maxage: 600,
	};

	return await api.get(params);
};

export {queryIPBlocks, queryUserBlocks};
