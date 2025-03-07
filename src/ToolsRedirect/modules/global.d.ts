type ToolsRedirect = typeof import('./core').ToolsRedirect;

declare module 'ext.gadget.ToolsRedirect' {
	export const findRedirectCallback: (...args: ((pageName: string, $content: JQuery) => string[])[]) => ToolsRedirect;
	export const findRedirectBySelector: (selector: string) => ToolsRedirect;
	export const setRedirectTextSuffix: (title: string, suffix: string, flag?: number) => void;
}
