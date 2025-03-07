import * as OPTIONS from '../options.json';
import {ErrorMessage, NotPatrolledYet, Patrolled} from './components/footerNotices';
import React from 'ext.gadget.JSX';
import {getPatroller} from './util/getPatroller';

const showPagePatroller = async (): Promise<void> => {
	const mountPoint = document.querySelector<HTMLElement>(OPTIONS.mountPointSelector);
	if (!mountPoint) {
		return;
	}

	// if there is a patrol link, the page must be not patrolled
	if (document.querySelector('.patrollink')) {
		mountPoint.prepend(<NotPatrolledYet />);
		return;
	}

	// Load patroller information
	const {wgPageName} = mw.config.get();

	try {
		const log = await getPatroller(wgPageName);
		const {action, user} = log;
		let {timestamp} = log;

		if (action && user && timestamp) {
			timestamp = new Date(timestamp).toLocaleString();

			if (action === 'patrol') {
				mountPoint.prepend(<Patrolled timestamp={timestamp} user={user} />);
			} else {
				mountPoint.prepend(<Patrolled />);
			}
		} else {
			mountPoint.prepend(<Patrolled />);
		}
	} catch (error: unknown) {
		// return error(s)
		console.error('[PagePatroller] Ajax error:', error);
		mountPoint.prepend(<ErrorMessage />);
	}
};

export {showPagePatroller};
