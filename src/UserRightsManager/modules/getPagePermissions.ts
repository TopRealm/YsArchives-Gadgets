import type {UserRights} from '~/MarkRights/modules/types';

const getPagePermissions = (): UserRights | null => {
	const {wgPageName} = mw.config.get();

	const pagePermissions = {
		'LIB_talk:权限申请/申请巡查回退权': 'patroller',
		'LIB_talk:权限申请/申请优质编辑者': 'autopatrolled',
		'LIB_talk:权限申请/申请确认用户权': 'confirmed',
		'LIB_talk:权限申请/申请大量消息发送权': 'massmessage-sender',
		'LIB_talk:权限申请/申请导入权': 'importer',
		'LIB_talk:权限申请/申请模板编辑权': 'templateeditor',
		'LIB_talk:权限申请/申请机器人权限': 'bot',
	} as const satisfies Partial<Record<string, UserRights>>;

	let permission: UserRights | null = null;
	for (const [pageName, pagePermission] of Object.entries(pagePermissions)) {
		if (pageName === wgPageName) {
			permission = pagePermission;
		} else {
			continue;
		}
	}

	return permission;
};

export {getPagePermissions};
