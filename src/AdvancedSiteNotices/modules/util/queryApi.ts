import * as OPTIONS from '../../options.json';
import {api} from '../api';

interface RemoteNotices {
	$notices?: JQuery;
	version?: string;
}

const {wgUserLanguage} = mw.config.get();

const parameters: ApiParseParams = {
	action: 'parse',
	format: 'json',
	formatversion: '2',
	prop: 'text',
	page: OPTIONS.ajaxPageTitle,
	uselang: wgUserLanguage,
	variant: wgUserLanguage,
	smaxage: 600,
	maxage: 600,
};

const queryApi = async (): Promise<ReturnType<mw.Api['get']>> => {
	try {
		let response;

		if (mw.storage.getObject(OPTIONS.cacheKey)) {
			response = mw.storage.getObject(OPTIONS.cacheKey) as ReturnType<mw.Api['get']>;
		} else {
			response = await api.get(parameters);
			mw.storage.setObject(OPTIONS.cacheKey, response, 60 * 10);
		}

		return response;
	} catch (error) {
		console.error('[AdvancedSiteNotices] Ajax error:', error);
		return {};
	}
};

export {type RemoteNotices, queryApi};
