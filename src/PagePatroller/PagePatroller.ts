import {showPagePatroller} from './modules/showPagePatroller';

const {wgNamespaceNumber, wgArticleId, wgIsMainPage} = mw.config.get();

(function () {
	if (wgNamespaceNumber < 0) {
		return;
	}
	// !need investigate
	if (wgIsMainPage) {
		return;
	}

	if (!(wgArticleId > 0)) {
		return;
	}

	void showPagePatroller();
})();
