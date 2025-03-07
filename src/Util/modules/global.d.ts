type AddEventListenerWithRemover = import('./addEventListenerWithRemover').AddEventListenerWithRemover;
type ChangeOpacityWhenMouseEnterOrLeave =
	import('./changeOpacityWhenMouseEnterOrLeave').ChangeOpacityWhenMouseEnterOrLeave;
type CheckA11yConfirmKey = import('./checkA11yConfirmKey').CheckA11yConfirmKey;
type CheckDependencies = import('./checkDependencies').CheckDependencies;
type Delay = import('./delay').Delay;
type FindVariants = import('./findVariants').FindVariants;
type GenerateArray = import('./generateArray').GenerateArray;
type GenerateSvgDataUrl = import('./generateSvgDataUrl').GenerateSvgDataUrl;
type GetBody = import('./getBody').GetBody;
type GetWpSummaryContent = import('./wpSummaryContent').GetWpSummaryContent;
type GetWpTextbox1Content = import('./wpTextbox1Content').GetWpTextbox1Content;
type InitMwApi = import('./initMwApi').InitMwApi;
type IsValidKey = import('./isValidKey').IsValidKey;
type ClassMwUri = import('./mwUri').ClassMwUri;
type OouiConfirmWithStyle = import('./oouiConfirmWithStyle').OouiConfirmWithStyle;
type QueryGlobalUserGroups = import('./queryGlobalUserGroups').QueryGlobalUserGroups;
type QueryUserGroups = import('./queryUserGroups').QueryUserGroups;
type ScrollTop = import('./scrollTop').ScrollTop;
type SetWpSummaryContent = import('./wpSummaryContent').SetWpSummaryContent;
type SetWpTextbox1Content = import('./wpTextbox1Content').SetWpTextbox1Content;
type UserIsInGroup = import('./userIsInGroup').UserIsInGroup;
type UniqueArray = import('./uniqueArray').UniqueArray;

declare module 'ext.gadget.Util' {
	export const addEventListenerWithRemover: AddEventListenerWithRemover;
	export const changeOpacityWhenMouseEnterOrLeave: ChangeOpacityWhenMouseEnterOrLeave;
	export const checkA11yConfirmKey: CheckA11yConfirmKey;
	export const checkDependencies: CheckDependencies;
	export const delay: Delay;
	export const findVariants: FindVariants;
	export const generateArray: GenerateArray;
	export const generateSvgDataUrl: GenerateSvgDataUrl;
	export const getBody: GetBody;
	export const getWpSummaryContent: GetWpSummaryContent;
	export const getWpTextbox1Content: GetWpTextbox1Content;
	export const initMwApi: InitMwApi;
	export const isValidKey: IsValidKey;
	export const MwUri: ClassMwUri;
	export const oouiConfirmWithStyle: OouiConfirmWithStyle;
	export const queryGlobalUserGroups: QueryGlobalUserGroups;
	export const queryUserGroups: QueryUserGroups;
	export const scrollTop: ScrollTop;
	export const setWpSummaryContent: SetWpSummaryContent;
	export const setWpTextbox1Content: SetWpTextbox1Content;
	export const userIsInGroup: UserIsInGroup;
	export const uniqueArray: UniqueArray;
}
