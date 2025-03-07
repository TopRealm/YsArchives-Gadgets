import {appendMarkerToUserLinks, appendMarkerToUserPage} from './util/appendMarker';
import {getUserLinks} from './util/getUserLinks';

const whoIsActiveUserLinks = ($content: JQuery<HTMLElement>): void => {
	const {wgCanonicalSpecialPageName} = mw.config.get();
	if (wgCanonicalSpecialPageName === 'Recentchanges') {
		return;
	}

	const userLinks = getUserLinks($content);

	for (const [userName, $elements] of Object.entries(userLinks)) {
		void appendMarkerToUserLinks({userName, $elements});
	}
};

const whoIsActiveUserPage = (): void => {
	const {wgAction, wgNamespaceNumber, wgPageName, wgRelevantUserName} = mw.config.get();

	if (!wgRelevantUserName || wgNamespaceNumber !== 2 || wgAction !== 'view') {
		return;
	}

	const relevantUserPageName: string = new mw.Title(wgRelevantUserName, 2).toText();
	const pageName: string = new mw.Title(wgPageName).toText();
	if (relevantUserPageName !== pageName) {
		return;
	}

	void appendMarkerToUserPage(wgRelevantUserName);
};

export {whoIsActiveUserLinks, whoIsActiveUserPage};
