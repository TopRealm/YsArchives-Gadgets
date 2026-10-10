import type {UserRights} from '~/MarkRights/modules/types';

const getPermissionNames = (permission: UserRights): string | null => {
	const permissionNames = {
		patroller: '巡查员',
		autopatrolled: '优质编辑者',
		confirmed: '确认用户',
		'massmessage-sender': '大量消息发送者',
		importer: '导入者',
		templateeditor: '模板编辑员',
		bot: '机器人',
		'rnrsverify-exempt': '实名制验证豁免',
		'ipblock-exempt': 'IP封禁豁免',
	} as const satisfies Partial<Record<UserRights, string>>;

	let permissionName: string | null = null;
	for (const [right, name] of Object.entries(permissionNames)) {
		if (permission === right) {
			permissionName = name;
		} else {
			continue;
		}
	}

	return permissionName;
};

export {getPermissionNames};
