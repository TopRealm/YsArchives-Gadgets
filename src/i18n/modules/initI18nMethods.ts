import * as OPTIONS from '../options.json';
import {isValidKey, uniqueArray} from 'ext.gadget.Util';
import type {I18nCandidates} from './types';
import {generateDefaultFallbackList} from './util/generateDefaultFallbackList';

const initI18nMethods = (): typeof i18nMethods => {
	const defaultFallbackList: string[] = generateDefaultFallbackList();

	const elect = (candidates: I18nCandidates, locale: string): string => {
		let fallbackList: string[] = defaultFallbackList;
		for (const key of [locale, ...fallbackList]) {
			if (isValidKey(OPTIONS.fallbackTable, key)) {
				fallbackList = OPTIONS.fallbackTable[key];
				break;
			}
		}

		// Replace Set with uniqueArray, avoiding core-js polyfilling
		for (const key of uniqueArray([locale, ...fallbackList, ...defaultFallbackList])) {
			if (isValidKey(candidates, key)) {
				return candidates[key];
			}
		}

		return '';
	};

	const {wgContentLanguage, wgUserLanguage, wgUserVariant} = mw.config.get();

	const i18nMethods: typeof import('ext.gadget.i18n') = {
		content: (candidates) => {
			return elect(candidates, wgContentLanguage);
		},
		localize: (candidates) => {
			return elect(candidates, wgUserLanguage);
		},
		vary: (candidates) => {
			return elect(candidates, wgUserVariant ?? wgContentLanguage);
		},
	};

	return i18nMethods;
};

export {initI18nMethods};
