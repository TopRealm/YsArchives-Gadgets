import * as OPTIONS from '../../options.json';
import {type CountryOrAreaNameList, type RegionNameList, getCountryOrAreaName, getRegionName} from './getName';
import type {StoreGeoInfo} from '../types';
import {api} from '../api';
import {getMessage} from '../i18n';

const getLocation = async (wgRelevantUserName: string) => {
	const storePageTitle: string = `User:${wgRelevantUserName}/GeoIP.json`;

	let countryOrAreaName: string = getMessage('Unknown');
	let regionName: string = '';

	if (mw.storage.getObject(OPTIONS.storageKey + wgRelevantUserName)) {
		({countryOrAreaName, regionName} = mw.storage.getObject(OPTIONS.storageKey + wgRelevantUserName) as {
			countryOrAreaName: string;
			regionName: string;
		});
	} else {
		try {
			const params: ApiQueryRevisionsParams = {
				action: 'query',
				format: 'json',
				formatversion: '2',
				titles: [storePageTitle],
				prop: ['revisions'],
				rvprop: ['content'],
				rvslots: 'main',
				smaxage: 600,
				maxage: 600,
			};

			const data = await api.get(params);

			const content =
				(data['query'].pages[0]?.missing
					? ''
					: (data['query']?.pages[0]?.revisions?.[0].slots.main.content as string)) || '';

			const response = JSON.parse(content) as StoreGeoInfo & {
				country?: string;
			};

			if (!(response.country || response.countryOrArea) && !response.region) {
				return;
			}

			const {country, countryOrArea, region} = response;

			let location: StoreGeoInfo['countryOrArea'] = '';

			if (country || countryOrArea) {
				location = country || countryOrArea;
			}

			if (getCountryOrAreaName(location as keyof CountryOrAreaNameList)) {
				countryOrAreaName =
					getCountryOrAreaName(location as keyof CountryOrAreaNameList) || getMessage('Unknown');
			}

			if (location && location === 'CN') {
				regionName = getRegionName(region as keyof RegionNameList) || '';
			}

			mw.storage.setObject(OPTIONS.storageKey + wgRelevantUserName, {countryOrAreaName, regionName}, 60 * 60);
		} catch (error: unknown) {
			console.error('[GeoLocationReader] Ajax error in `getLocation` method:', error);
		}
	}

	return {countryOrAreaName, regionName};
};

export {getLocation};
