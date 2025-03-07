type GetLocalUserGroups = typeof import('./util/getUserGroups').getLocalUserGroups;
type GetGlobalUserGroups = typeof import('./util/getUserGroups').getGlobalUserGroups;
type QueryUserGroups = typeof import('./util/getUserGroups').queryUserGroups;
type QueryGlobalUserGroups = typeof import('./util/getUserGroups').queryGlobalUserGroups;

declare module 'ext.gadget.MarkRights' {
	export const getLocalUserGroups: GetLocalUserGroups;
	export const getGlobalUserGroups: GetGlobalUserGroups;
	export const queryUserGroups: QueryUserGroups;
	export const queryGlobalUserGroups: QueryGlobalUserGroups;
}
