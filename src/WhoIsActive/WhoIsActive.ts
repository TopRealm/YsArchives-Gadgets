import {whoIsActiveUserLinks, whoIsActiveUserPage} from './modules/core';

(function whoIsActiveLoad() {
	mw.hook('wikipage.content').add(whoIsActiveUserLinks);
	void whoIsActiveUserPage();
})();
