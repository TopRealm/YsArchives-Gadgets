type MessageKey =
	| 'toolsredirect-btntitle'
	| 'toolsredirect-btndesc'
	| 'toolsredirect-dlgtitle'
	| 'toolsredirect-rediloading'
	| 'toolsredirect-rediedit'
	| 'toolsredirect-selectall'
	| 'toolsredirect-selectinverse'
	| 'toolsredirect-tabviewtitle'
	| 'toolsredirect-tabviewdesc'
	| 'toolsredirect-tabviewnotfound'
	| 'toolsredirect-tabviewmulti'
	| 'toolsredirect-tabviewfix'
	| 'toolsredirect-fixloading'
	| 'toolsredirect-fixtext'
	| 'toolsredirect-fixsummary'
	| 'toolsredirect-tabcreatetitle'
	| 'toolsredirect-tabcreatedesc'
	| 'toolsredirect-tabcreatenotfound'
	| 'toolsredirect-tabcreateall'
	| 'toolsredirect-createloading'
	| 'toolsredirect-createtext'
	| 'toolsredirect-createtext-category'
	| 'toolsredirect-createsummary'
	| 'toolsredirect-errcycleredirect'
	| 'toolsredirect-refresh';

interface ToolsRedirect {
	findRedirectCallback(...args: ((pageName: string, $content: JQuery) => string[])[]): ToolsRedirect;
	findRedirectBySelector(selector: string): ToolsRedirect;
	setRedirectTextSuffix(title: string, suffix: string, flag?: number): void;
}

declare global {
	interface Window {
		toolsRedirect: ToolsRedirect;
	}
}

export default global;

export type {MessageKey, ToolsRedirect};
