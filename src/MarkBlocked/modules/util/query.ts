import {ApiQueryGlobalBlocksParamsRedefined} from '../types';
import {api} from './api';

const queryGlobalUserInfo = async (guiuser: string) => {
	const params: ApiQueryGlobalUserInfoResponse = {
		action: 'query',
		format: 'json',
		formatversion: '2',
		meta: ['globaluserinfo'],
		guiuser,
		smaxage: 600,
		maxage: 600,
	};

	return await api.get(params);
};

const queryIPBlocks = async (bkip: string) => {
	const params: ApiQueryBlocksParams & ApiQueryGlobalBlocksParamsRedefined = {
		action: 'query',
		format: 'json',
		formatversion: '2',
		list: ['blocks', 'globalblocks'],
		bkip,
		bklimit: 100,
		bkprop: ['by', 'expiry', 'reason', 'restrictions', 'timestamp', 'user'],
		bgip: bkip,
		bglimit: 100,
		bgprop: ['by', 'expiry', 'reason', 'timestamp', 'target'],
		smaxage: 600,
		maxage: 600,
	};

	return await api.get(params);
};

const queryUserBlocks = async (bkusers: string | string[]) => {
	const params: ApiQueryBlocksParams & ApiQueryGlobalBlocksParamsRedefined = {
		action: 'query',
		format: 'json',
		formatversion: '2',
		list: ['blocks', 'globalblocks'],
		bkusers,
		bklimit: 100,
		bkprop: ['by', 'expiry', 'reason', 'restrictions', 'timestamp', 'user'],
		bglimit: 100,
		bgtargets: bkusers,
		bgprop: ['by', 'expiry', 'reason', 'timestamp', 'target'],
		smaxage: 600,
		maxage: 600,
	};

	return await api.get(params);
};

export {queryGlobalUserInfo, queryIPBlocks, queryUserBlocks};
