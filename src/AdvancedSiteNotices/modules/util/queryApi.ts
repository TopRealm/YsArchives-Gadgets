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
		// Use session storage if available to avoid filling persistent localStorage
		const store = (mw.storage.session || mw.storage) as typeof mw.storage;
		let response;

		if (store.getObject(OPTIONS.cacheKey)) {
			response = store.getObject(OPTIONS.cacheKey) as ReturnType<mw.Api['get']>;
		} else {
			response = await api.get(parameters);
			// Use session storage for this short-lived cache to reduce localStorage footprint
			store.setObject(OPTIONS.cacheKey, response, 60 * 10);
		}

		return response;
	} catch (error) {
		console.error('[AdvancedSiteNotices] Ajax error:', error);
		return {};
	}
};

export {type RemoteNotices, queryApi};
