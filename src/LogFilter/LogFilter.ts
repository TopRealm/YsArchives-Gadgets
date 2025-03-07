/**
 * Log filter script
 *
 * Created by Splarka
 * Amended by Mike.lifeguard & Lupo
 * Partially rewritten by DieBuche
 *
 * <li> element Filter Script, version [0.2]
 * Should currently work on all known skins (with a #contentSub or #topbar)
 *
 * mw.util.getUrl( mw.config.get( 'wgPageName' ) ) + '?' +
 * 'withJS=MediaWiki:Gadget-LogFilter.js&lifilter=1&lifilterexpr=TEST&lifiltercase&lifilterhilight&lifilterinv'
 */
import * as OPTIONS from './options.json';
import {LogFilter} from './modules/core';
import {REGEX_TARGET_PAGE} from './modules/constant';
import {getBody} from 'ext.gadget.Util';

(function logFilter(): void {
	const {configKey} = OPTIONS;
	const {wgAction, wgCanonicalSpecialPageName} = mw.config.get();

	// Guard against double inclusions
	if (mw.config.get(configKey)) {
		return;
	}
	// Set guard
	mw.config.set(configKey, true);

	// When to enable all this
	if (
		wgAction !== 'history' &&
		!mw.util.getParamValue('lifilter') &&
		!REGEX_TARGET_PAGE.test(wgCanonicalSpecialPageName || '')
	) {
		return;
	}

	void getBody().then(($body: JQuery<HTMLBodyElement>): void => {
		new LogFilter($body).addPortletLink(); // Load
	});
})();
