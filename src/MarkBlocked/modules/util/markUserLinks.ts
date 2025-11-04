/* eslint-disable sort-imports */
import * as OPTIONS from '../../options.json';
import {queryIPBlocks, queryUserBlocks} from './query';
import {markLocalBlocks} from './markLinks';
import type {QueryLocalAndGlobalBlocksResponse} from '../types';

const markBlockedUserLinks = (userLinks: Record<string, JQuery[]>) => {
	// Convert users into array
	let users: string[] = Object.keys(userLinks);
	if (!users.length) {
		return;
	}

	const promises: (() => Promise<void>)[] = [];

	for (const user of users) {
		if (mw.storage.getObject(OPTIONS.storageKeyBlocked + user)) {
			const response = mw.storage.getObject(
				OPTIONS.storageKeyBlocked + user
			) as QueryLocalAndGlobalBlocksResponse;

			if (response['query']?.blocks) {
				markLocalBlocks({response, userLinks});

				users = users.filter((element) => {
					return element !== user;
				});
			}
		}
	}

	// Local and global user block queries
	for (let i = 0; i < users.length; i++) {
		const bkusers = users.splice(0, 25);
		if (!bkusers.length) {
			continue;
		}

		promises[promises.length] = async (): Promise<void> => {
			try {
				const response = (await queryUserBlocks(bkusers)) as QueryLocalAndGlobalBlocksResponse;

				if (response['query']?.blocks) {
					markLocalBlocks({response, userLinks});

					for (const block of response['query'].blocks) {
						if (block.user) {
							mw.storage.setObject(OPTIONS.storageKeyBlocked + block.user, response, 60 * 60);
						}
					}
				}
			} catch (error: unknown) {
				console.error('[MarkBlocked] Ajax error:', error);
			}
		};
	}

	void (async () => {
		for (const promise of promises) {
			try {
				await promise();
			} catch {}
		}
	})();
};

const markBlockedIPLinks = (userLinks: Record<string, JQuery[]>) => {
	// Convert users into array
	const users: string[] = Object.keys(userLinks);
	if (!users.length) {
		return;
	}

	const promises: (() => Promise<void>)[] = [];

	// Local IP block queries
	for (let i = 0; i < users.length; i++) {
		const bkusers = users.splice(0, 25);
		if (!bkusers.length) {
			continue;
		}

		for (let bkip of bkusers) {
			if (!mw.util.isIPv4Address(bkip) && !mw.util.isIPv6Address(bkip)) {
				continue;
			}

			if (mw.util.isIPv6Address(bkip)) {
				bkip = bkip.toUpperCase();
			}

			if (mw.storage.getObject(OPTIONS.storageKeyBlocked + bkip)) {
				const response = mw.storage.getObject(
					OPTIONS.storageKeyBlocked + bkip
				) as QueryLocalAndGlobalBlocksResponse;

				if (response['query']?.blocks) {
					markLocalBlocks({response, userLinks});
				}

				continue;
			}

			promises[promises.length] = async (): Promise<void> => {
				try {
					const response = (await queryIPBlocks(bkip)) as QueryLocalAndGlobalBlocksResponse;

					if (response['query']?.blocks) {
						markLocalBlocks({response, userLinks, bkip});

						for (const block of response['query'].blocks) {
							if (block.user) {
								mw.storage.setObject(OPTIONS.storageKeyBlocked + block.user, response, 60 * 60);
							}
						}
					}
				} catch (error: unknown) {
					console.error('[MarkBlocked] Ajax error:', error);
				}
			};
		}
	}

	void (async () => {
		for (const promise of promises) {
			try {
				await promise();
			} catch {}
		}
	})();
};

export {markBlockedUserLinks, markBlockedIPLinks};
