import * as OPTIONS from '../options.json';
import {ApiResponse} from 'types-mediawiki/mw/Api';
import {UserRights} from '~/MarkRights/modules/types';
import {api} from './api';
import {getPermissionNames} from './getPermissionNames';
import {getPermissionTemplate} from './getTemplates';

const issueTemplate = ({
	userName,
	permission,
	watch,
}: {
	userName: string;
	permission: UserRights;
	watch: boolean | 'watch' | 'unwatch';
}): JQuery.Promise<ApiResponse> | void => {
	const permissionTemplate = getPermissionTemplate(permission);
	if (!permissionTemplate) {
		return;
	}

	const permissionName = getPermissionNames(permission);
	const talkPage = `User talk:${userName.replace(/ /g, '_')}`;
	const params: ApiEditPageParams = {
		action: 'edit',
		format: 'json',
		title: talkPage,
		appendtext: '\n\n{{'.concat('subst:', permissionTemplate, '}}'),
		summary: `根据共识授予${permissionName}${OPTIONS.userRightsManagerSummary}`,
		watchlist: watch ? 'watch' : 'unwatch',
	};
	return api.postWithEditToken(params);
};

export {issueTemplate};
