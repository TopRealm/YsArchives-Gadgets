import {getGlobalUserGroups, getLocalUserGroups} from './util/getUserGroups';
import {appendUserRightsMark} from './util/appendUserRightsMark';
import {generateUserLinks} from './util/generateUserLinks';

const markUserRights = ($content: JQuery): void => {
	const userLinks = generateUserLinks($content);

	// Convert users into array
	const users: string[] = Object.keys(userLinks);
	if (!users.length) {
		return;
	}

	const $userLinks = Object.values(userLinks).reduce((previousValue, currentValue) => {
		return [...previousValue, ...currentValue];
	});
	if (!$userLinks.length) {
		return;
	}

	const promises: (() => Promise<void>)[] = [];

	for (let i = 0; i < users.length; i++) {
		const ususers = users.splice(0, 25).filter((element) => {
			return !(mw.util.isIPv4Address(element) || mw.util.isIPv6Address(element));
		});

		if (!ususers.length) {
			continue;
		}

		promises[promises.length] = async (): Promise<void> => {
			let userGroups: Record<string, string[]> = {};

			try {
				userGroups = await getLocalUserGroups(ususers);
			} catch (error: unknown) {
				console.error('[MarkRights] Ajax error:', error);
			}

			appendUserRightsMark($userLinks, userGroups);
		};

		promises[promises.length] = async (): Promise<void> => {
			let userGroups: Record<string, string[]> = {};

			try {
				userGroups = await getGlobalUserGroups(ususers);
			} catch (error: unknown) {
				console.error('[MarkRights] Ajax error:', error);
			}

			appendUserRightsMark($userLinks, userGroups);
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

export {markUserRights};
