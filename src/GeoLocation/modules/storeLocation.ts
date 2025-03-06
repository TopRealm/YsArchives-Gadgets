import * as OPTIONS from '../options.json';
import type {StoreGeoInfo} from './types';
import {api} from './api';
import {getMessage} from './i18n';

const queryRevisons = async (titles: string | string[]) => {
	const params: ApiQueryRevisionsParams = {
		titles,
		action: 'query',
		format: 'json',
		formatversion: '2',
		prop: 'revisions',
		rvprop: 'content',
		rvslots: 'main',
		smaxage: 600,
		maxage: 600,
	};
	const response = await api.get(params);

	return response;
};

const edit = async (title: string, text: string, summary?: string) => {
	const params: ApiEditPageParams = {
		title,
		text,
		action: 'edit',
		format: 'json',
		formatversion: '2',
		contentformat: 'application/json',
		contentmodel: 'json',
		minor: true,
		recreate: true,
		watchlist: 'unwatch',
		tags: OPTIONS.apiTag,
	};
	if (summary) {
		params.summary = summary;
	}
	const response = await api.postWithEditToken(params);

	return response;
};

const storeLocation = async ({countryOrArea, region}: StoreGeoInfo): Promise<void> => {
	const {wgUserName} = mw.config.get();
	const storePageTitle: string = `User:${wgUserName}/GeoIP.json`;

	try {
		const data = await queryRevisons(storePageTitle);
		const content = (data['query'].pages[0]?.revisions?.[0].slots.main.content as string) || '';
		const response = JSON.parse(content) as Partial<StoreGeoInfo>;

		if (response.countryOrArea && response.countryOrArea === countryOrArea) {
			if (!response.region || !region) {
				return;
			}

			if (response.region === region) {
				return;
			}
		}
	} catch {}

	const geoInfo: StoreGeoInfo = {
		countryOrArea,
		region,
	};

	try {
		await edit(storePageTitle, JSON.stringify(geoInfo), getMessage('Update'));
	} catch (error: unknown) {
		console.error('[GeoLocation] Ajax error:', error);
	}
};

export {storeLocation};
