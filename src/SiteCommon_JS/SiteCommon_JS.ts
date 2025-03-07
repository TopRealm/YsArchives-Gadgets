import {
	addTargetBlank,
	fixLocationHash,
	highLightRev,
	loadWithURL,
	openSearchInNewTab,
	removeTitleFromPermalink,
	titleCleanUp,
	toggleLink,
	unihanPopup,
} from './modules/core';
import {tippyForCitizenHeader, tippyForExtension} from './modules/tippy';
import {deprecatedFunctions} from './modules/deprecatedFunctions';
import {getBody} from 'ext.gadget.Util';
import {resizeJQueryUI} from './modules/resizeJQueryUI';

(function siteCommon(): void {
	const configKey: string = 'gadget-SiteCommon_JS__Initialized';
	const {skin} = mw.config.get();

	// Guard against double inclusions
	if (mw.config.get(configKey)) {
		return;
	}
	// Set guard
	mw.config.set(configKey, true);

	// Core modules
	void loadWithURL();
	fixLocationHash();

	void getBody().then(($body: JQuery<HTMLBodyElement>): void => {
		// Core modules (need $.ready)
		highLightRev($body);
		addTargetBlank($body);
		removeTitleFromPermalink($body);
		openSearchInNewTab($body);
		titleCleanUp($body);
		void unihanPopup($body);
		toggleLink($body);
		resizeJQueryUI($body);

		// Tippy-related codes (need $.ready)
		if (skin === 'citizen') {
			tippyForCitizenHeader($body);
		}
	});

	// Deprecated functions
	deprecatedFunctions();

	// Tippy-related codes
	if (!['vector-2022', 'citizen'].includes(skin)) {
		void tippyForExtension();
	}
})();
