import {findRedirectBySelector} from 'ext.gadget.ToolsRedirect';

const checkRedirect = (): void => {
	findRedirectBySelector('div#mw-content-text p > b');
};

export {checkRedirect};
