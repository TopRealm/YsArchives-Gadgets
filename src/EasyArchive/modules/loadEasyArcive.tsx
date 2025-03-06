import * as OPTIONS from '../options.json';
import {ArcLocNotAllowed, Enabled, InBlackList, NoArcLoc, NotAllowed} from './components/footerNotices';
import {getSettings, ifArcLocNotAllowed, isInBlacklist, isNotAllowed, isNotSupported} from './util/getSettings';
import React from 'ext.gadget.JSX';
import {addLinks} from './addLinks';

const loadEasyArcive = () => {
	const notSupported = isNotSupported();
	if (notSupported) {
		return;
	}

	const mountPoint = document.querySelector<HTMLElement>(OPTIONS.mountPointSelector);
	if (!mountPoint) {
		return;
	}

	const inBlacklist = isInBlacklist();
	if (inBlacklist) {
		mountPoint.prepend(<InBlackList />);
		return;
	}

	const notAllowed = isNotAllowed();
	if (notAllowed) {
		mountPoint.prepend(<NotAllowed />);
		return;
	}

	const settings = getSettings();
	if (!settings) {
		mountPoint.prepend(<NoArcLoc />);
		return;
	}

	const {arcLoc} = settings;
	if (!arcLoc) {
		mountPoint.prepend(<NoArcLoc />);
		return;
	}

	const arcLocNotAllowed = ifArcLocNotAllowed(arcLoc);
	if (arcLocNotAllowed) {
		mountPoint.prepend(<ArcLocNotAllowed arcLoc={arcLoc} />);
		return;
	}

	mountPoint.prepend(<Enabled arcLoc={arcLoc} />);

	void addLinks(settings);
};

export {loadEasyArcive};
