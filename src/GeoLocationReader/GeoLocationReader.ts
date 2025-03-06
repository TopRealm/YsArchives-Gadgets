import * as OPTIONS from './options.json';
import {SYSTEM_SCRIPT_LIST, WEBMASTER_LIST} from './modules/constant';
import {addElement} from './modules/addElement';

(function geoLocationReader(): void {
	const {wgAction, wgNamespaceNumber, wgPageName, wgRelevantUserName} = mw.config.get();
	if (
		!wgRelevantUserName ||
		SYSTEM_SCRIPT_LIST.includes(wgRelevantUserName) ||
		WEBMASTER_LIST.includes(wgRelevantUserName) ||
		!(wgNamespaceNumber === OPTIONS.userNameSpaceNumber) ||
		!(wgAction === 'view')
	) {
		return;
	}

	const pageName: string = new mw.Title(wgPageName).toText();
	const relevantUserPageName: string = new mw.Title(wgRelevantUserName, OPTIONS.userNameSpaceNumber).toText();
	if (pageName !== relevantUserPageName) {
		return;
	}

	void addElement();
})();
