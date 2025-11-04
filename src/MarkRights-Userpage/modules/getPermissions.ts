import {SYSTEM_SCRIPT_LIST, WEBMASTER_LIST} from './constant';
import {getGlobalUserGroups, getLocalUserGroups} from 'ext.gadget.MarkRights';
import type {UserRights} from '~/MarkRights/modules/types';
import {appendIcon} from './appendIcon';
import {getMessage} from './i18n';
import {uniqueArray} from 'ext.gadget.Util';

const getPermissions = async (wgRelevantUserName: string): Promise<void> => {
	try {
		const localGroupsMap = await getLocalUserGroups([wgRelevantUserName]);
		const localGroups = localGroupsMap[wgRelevantUserName] ?? [];

		const globalGroupsMap = await getGlobalUserGroups([wgRelevantUserName]);
		const globalGroups = globalGroupsMap[wgRelevantUserName] ?? [];

		const groups = uniqueArray([...localGroups, ...globalGroups]).filter((element) => {
			// Do not show implicit groups. Bots Already shown in GeoLocationViewer
			return !['*', 'user', 'autoconfirmed', 'rnrsverify-confirmed', 'bot'].includes(element);
		});

		if (SYSTEM_SCRIPT_LIST.includes(wgRelevantUserName)) {
			// Already shown in GeoLocationViewer
		} else if (WEBMASTER_LIST.includes(wgRelevantUserName)) {
			appendIcon({indicatorText: getMessage('webmaster'), spanClass: 'webmaster'});
			for (const group of groups) {
				appendIcon({indicatorText: getMessage(group as UserRights), spanClass: group as UserRights});
			}
		}
	} catch {}
};

export {getPermissions};
