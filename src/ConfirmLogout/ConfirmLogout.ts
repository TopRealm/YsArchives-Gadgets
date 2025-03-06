import * as OPTIONS from './options.json';
import {addListener} from './modules/addListener';
import {getBody} from 'ext.gadget.Util';

const {wgUserName} = mw.config.get();

void getBody().then(function confirmLogout($body: JQuery<HTMLBodyElement>): void {
	if (!wgUserName) {
		return;
	}

	const $element: JQuery = $body.find(OPTIONS.logoutElementSelector);
	if (!$element.length) {
		return;
	}

	addListener($element);
});
