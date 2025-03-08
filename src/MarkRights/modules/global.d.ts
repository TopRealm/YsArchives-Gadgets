type GetLocalUserGroups = typeof import('./util/getUserGroups').getLocalUserGroups;
type QueryUserGroups = typeof import('./util/getUserGroups').queryUserGroups;

declare module 'ext.gadget.MarkRights' {
	export const getLocalUserGroups: GetLocalUserGroups;
	export const queryUserGroups: QueryUserGroups;
}
