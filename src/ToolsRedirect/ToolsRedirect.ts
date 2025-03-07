import './ToolsRedirect.less';
import {ToolsRedirect} from './modules/core';
import {getBody} from 'ext.gadget.Util';
import {setMessages} from './modules/messages';

setMessages();

void getBody().then(($body: JQuery<HTMLBodyElement>): void => {
	ToolsRedirect.init($body);
});

export {findRedirectCallback, findRedirectBySelector, setRedirectTextSuffix} from './modules/core';
