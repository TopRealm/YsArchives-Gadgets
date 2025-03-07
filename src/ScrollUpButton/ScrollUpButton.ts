import {getBody} from 'ext.gadget.Util';
import {insertElementandListener} from './modules/insertElementAndListener';

void getBody().then(function scrollUpButton($body: JQuery<HTMLBodyElement>): void {
	insertElementandListener($body);
});
