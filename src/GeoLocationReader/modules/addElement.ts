import {appendGeoIcon} from './appendGeoIcon';
import {getLocalUserGroups} from 'ext.gadget.MarkRights';

const addElement = async (): Promise<void> => {
	const {wgRelevantUserName} = mw.config.get();

	if (!wgRelevantUserName) {
		return;
	}

	try {
		const groupsMap = await getLocalUserGroups([wgRelevantUserName]);
		const groups = groupsMap[wgRelevantUserName] ?? [];

		if (groups.includes('bot') || groups.includes('qiuwen')) {
			/* empty */
			// Already shown in MarkRights-Userpage
		} else {
			void appendGeoIcon();
		}
	} catch (error: unknown) {
		console.error('[GeoLocationReader] Ajax error in `addElement` method:', error);
	}
};

export {addElement};
