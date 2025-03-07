import * as OPTIONS from '../../options.json';
import {api} from '../api';

const getPatroller = async (wgPageName: string) => {
	let action: string | undefined;
	let user: string | undefined;
	let timestamp: string | undefined;

	if (mw.storage.getObject(OPTIONS.storageKey + wgPageName)) {
		({action, user, timestamp} = mw.storage.getObject(OPTIONS.storageKey + wgPageName) as {
			action: string;
			user: string;
			timestamp: string;
		});
	} else {
		try {
			const params: ApiQueryRevisionsParams & ApiQueryLogEventsParams = {
				action: 'query',
				format: 'json',
				formatversion: '2',
				prop: 'revisions',
				titles: wgPageName,
				list: 'logevents',
				letype: 'patrol',
				letitle: wgPageName,
				rvprop: 'timestamp',
				rvlimit: 1,
				rvdir: 'newer',
				smaxage: 600,
				maxage: 600,
			};
			const {query} = await api.get(params);

			if (query?.logevents && query.logevents.length) {
				const [log]: [
					{
						user: string;
						timestamp: string;
						action: string;
					},
				] = query.logevents as [
					{
						user: string;
						timestamp: string;
						action: string;
					},
				];
				({action} = log);

				if (action === 'patrol') {
					({user, timestamp} = log);

					mw.storage.setObject(OPTIONS.storageKey + wgPageName, {action, user, timestamp}, 60 * 60 * 24 * 30);
				}
			}
		} catch (error: unknown) {
			console.error('[PagePatroller] Ajax error in `getPatroller` method:', error);
		}
	}

	return {action, user, timestamp};
};

export {getPatroller};
