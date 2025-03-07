import * as OPTIONS from '../../options.json';
import type {QueryGlobalLocksResponse, QueryLocalAndGlobalBlocksResponse} from '../types';
import {markGlobalBlocks, markGlobalLockedLinks, markLocalBlocks} from './markLinks';
import {queryGlobalUserInfo, queryIPBlocks, queryUserBlocks} from './query';

const markGlobalLockedUserLinks = (userLinks: Record<string, JQuery[]>) => {
	// Convert users into array
	const users: string[] = Object.keys(userLinks);
	if (!users.length) {
		return;
	}

	const promises: (() => Promise<void>)[] = [];

	// Global Lock queries
	for (const guiuser of users) {
		if (mw.util.isIPv4Address(guiuser) || mw.util.isIPv6Address(guiuser)) {
			continue;
		}

		if (mw.storage.getObject(OPTIONS.storageKeyLocked + guiuser)) {
			const response = mw.storage.getObject(OPTIONS.storageKeyLocked + guiuser) as QueryGlobalLocksResponse;

			if (response['query']?.globaluserinfo) {
				markGlobalLockedLinks({response, userLinks});
				continue;
			}
		}

		promises[promises.length] = async (): Promise<void> => {
			try {
				const response = (await queryGlobalUserInfo(guiuser)) as QueryGlobalLocksResponse;

				markGlobalLockedLinks({response, userLinks});

				mw.storage.setObject(OPTIONS.storageKeyLocked + guiuser, response, 60 * 60 * 24);
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

			if (response['query']?.blocks || response['query']?.globalblocks) {
				if (response['query']?.blocks) {
					markLocalBlocks({response, userLinks});
				}

				if (response['query']?.globalblocks) {
					markGlobalBlocks({response, userLinks});
				}

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
							mw.storage.setObject(OPTIONS.storageKeyLocked + block.user, response, 60 * 60);
						}
					}
				}

				if (response['query']?.globalblocks) {
					markGlobalBlocks({response, userLinks});

					for (const block of response['query'].globalblocks) {
						if (block.target) {
							mw.storage.setObject(OPTIONS.storageKeyLocked + block.target, response, 60 * 60);
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

				if (response['query']?.globalblocks) {
					markGlobalBlocks({response, userLinks});
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
								mw.storage.setObject(OPTIONS.storageKeyLocked + block.user, response, 60 * 60);
							}
						}
					}

					if (response['query']?.globalblocks) {
						markGlobalBlocks({response, userLinks, bkip});

						for (const block of response['query'].globalblocks) {
							if (block.target) {
								mw.storage.setObject(OPTIONS.storageKeyLocked + block.target, response, 60 * 60);
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

export {markGlobalLockedUserLinks, markBlockedUserLinks, markBlockedIPLinks};
