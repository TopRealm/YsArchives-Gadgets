import * as OPTIONS from '../../options.json';
import {SYSTEM_SCRIPT_LIST} from '../constant';
import {getLastActiveMarker} from './getLastActiveMarker';
import {getTimestamp} from './getTimestamp';

const appendMarkerToUserLinks = async ({userName, $elements}: {userName: string; $elements: JQuery[]}) => {
	// Replace Set with uniqueArray, avoiding core-js polyfilling
	if (SYSTEM_SCRIPT_LIST.includes(userName)) {
		return;
	}

	const timestamp = await getTimestamp(userName);

	if (!timestamp) {
		return;
	}

	for (const $element of $elements) {
		$(getLastActiveMarker(timestamp, true)).insertAfter($element);
	}
};

const appendMarkerToUserPage = async (userName: string) => {
	if (SYSTEM_SCRIPT_LIST.includes(userName)) {
		return;
	}

	const timestamp = await getTimestamp(userName);

	if (!timestamp) {
		return;
	}

	const mountPoint = document.querySelector<HTMLElement>(OPTIONS.mountPointSelector);
	if (!mountPoint) {
		return;
	}

	mountPoint.prepend(getLastActiveMarker(timestamp, false));
};

export {appendMarkerToUserLinks, appendMarkerToUserPage};
