import {getBody} from 'ext.gadget.Util';
import {initDialog} from './modules/initDialog';

void getBody().then(function loginToEdit($body: JQuery<HTMLBodyElement>): void {
	const {wgUserName} = mw.config.get();

	if (wgUserName) {
		return;
	}

	initDialog($body);
});
