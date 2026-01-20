import * as OPTIONS from '../../options.json';
import {queryIPBlocks, queryUserBlocks} from './query';
import type {QueryLocalAndGlobalBlocksResponse} from '../types';
import {markLocalBlocks} from './markLinks';

const markBlockedUserLinks = (userLinks: Record<string, JQuery[]>) => {
	// Convert users into array
	let users: string[] = Object.keys(userLinks);
	if (!users.length) {
		return;
	}

	const promises: (() => Promise<void>)[] = [];

	const usersToQuery: string[] = [];
	for (const user of users) {
		let processed = false;

		const cached = mw.storage.getObject(OPTIONS.storageKeyBlocked + user) as
			| QueryLocalAndGlobalBlocksResponse
			| undefined;

		if (cached && cached['query']?.blocks) {
			markLocalBlocks({response: cached, userLinks});
			processed = true;
		}

		if (!processed) {
			usersToQuery.push(user);
		}
	}
	users = usersToQuery;

	// Local and global user block queries
	for (let i = 0; i < users.length; i++) {
		const bkusers = users.splice(0, 25);
		if (!bkusers.length) {
			continue;
		}

		promises[promises.length] = async (): Promise<void> => {
			try {
				const response = (await queryUserBlocks(bkusers)) as QueryLocalAndGlobalBlocksResponse;
				const blockRecords: Record<string, QueryLocalAndGlobalBlocksResponse> = {};
				for (const user of bkusers) {
					blockRecords[user] = {query: {blocks: []}};
				}

				if (response['query']?.blocks) {
					markLocalBlocks({response, userLinks});

					for (const block of response['query'].blocks) {
						if (block.user) {
							blockRecords[block.user]?.query.blocks!.push(block);
						}
					}
				}

				for (const [user, value] of Object.entries(blockRecords)) {
					mw.storage.setObject(OPTIONS.storageKeyBlocked + user, value, 60 * 60);
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

	// Local and global IP block queries
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
