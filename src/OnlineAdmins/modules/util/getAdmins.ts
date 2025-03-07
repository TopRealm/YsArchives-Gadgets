import * as OPTIONS from '../../options.json';
import {queryLogEvents, queryRecentChanges, queryUserProps} from './query';
import {BLACK_LIST} from '../constant';
import {uniqueArray} from 'ext.gadget.Util';

const getAdmins = async () => {
	let stewards: string[] = [];
	let sysops: string[] = [];
	let patrollers: string[] = [];

	if (mw.storage.getObject(OPTIONS.storageKey)) {
		({stewards, sysops, patrollers} = mw.storage.getObject(OPTIONS.storageKey) as {
			stewards: string[];
			sysops: string[];
			patrollers: string[];
		});
	} else {
		let users: string[] = [];
		const promises: (() => Promise<void>)[] = [];

		const time: Date = new Date();
		const rcstart: string = time.toISOString();

		// Query users has log/edit record in recent 30 minutes
		time.setMinutes(time.getMinutes() - 30); // 最近更改30分钟内的编辑用户
		const rcend: string = time.toISOString();

		try {
			const recentchanges = await queryRecentChanges(rcstart, rcend);

			for (const {user} of recentchanges['query'].recentchanges as {user: string}[]) {
				users[users.length] = user; // Replace Array#push to avoid core-js polyfilling
			}
		} catch {}

		try {
			const logevents = await queryLogEvents(rcstart, rcend);

			for (const {user} of logevents['query'].logevents as {user: string}[]) {
				users[users.length] = user;
			}
		} catch {}

		users = uniqueArray(users); // Replace Set with uniqueArray, avoiding core-js polyfilling

		// Generating query promises
		for (let i = 0; i < users.length; i++) {
			const ususers = users.splice(0, 25);
			if (!ususers.length) {
				continue;
			}

			promises[promises.length] = async (): Promise<void> => {
				const response = await queryUserProps(ususers);

				for (const {groups, name} of response['query'].users as {groups: string[]; name: string}[]) {
					// remove bots
					if (groups.includes('bot') || BLACK_LIST.includes(name)) {
						continue;
					}

					// remove logs with no user names
					if (!name) {
						continue;
					}

					if (groups.includes('steward')) {
						stewards[stewards.length] = name;
					}

					if (groups.includes('sysop')) {
						sysops[sysops.length] = name;
					}

					if (groups.includes('patroller')) {
						patrollers[patrollers.length] = name;
					}
				}
			};
		}

		for (const promise of promises) {
			try {
				await promise();
			} catch {}
		}
	}

	return {stewards, sysops, patrollers};
};

export {getAdmins};
