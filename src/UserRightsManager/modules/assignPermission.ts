import * as OPTIONS from '../options.json';
import {UserRights} from '~/MarkRights/modules/types';
import {api} from './api';
import {getPermissionNames} from './getPermissionNames';

const assignPermission = ({
	userName,
	permission,
	summary,
	revId,
	expiry,
}: {
	userName: string;
	permission: UserRights;
	summary: string;
	revId: number;
	expiry: string;
}) => {
	const permaLink = `[[Special:PermaLink/${revId}#User:${userName}|权限申请]]`;
	let fullSummary = `+${getPermissionNames(permission)}；${permaLink}`;
	if (summary !== '') {
		fullSummary += `；${summary}`;
	}
	fullSummary += OPTIONS.userRightsManagerSummary;
	const params: ApiUserrightsParams = {
		action: 'userrights',
		user: userName.replace(/ /g, '_'),
		reason: fullSummary,
		// @ts-expect-error TS2322
		add: [permission],
		expiry: expiry === '' ? 'infinity' : expiry,
	};
	if (permission === 'patroller' && expiry === 'infinite') {
		params.remove = 'autoreviewer';
	}
	return api.postWithToken('userrights', params);
};

export {assignPermission};
