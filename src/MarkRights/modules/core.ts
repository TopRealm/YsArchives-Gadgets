import {appendUserRightsMark} from './util/appendUserRightsMark';
import {generateUserLinks} from './util/generateUserLinks';
import {getLocalUserGroups} from './util/getUserGroups';

const markUserRights = ($content: JQuery): void => {
	const userLinks = generateUserLinks($content);

	// Convert users into array
	const users: string[] = Object.keys(userLinks);
	if (!users.length) {
		return;
	}

	const promises: (() => Promise<void>)[] = [];

	while (users.length) {
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

			const batchUserLinks: Record<string, JQuery<HTMLAnchorElement>[]> = {};
			for (const username of ususers) {
				if (userLinks[username]) {
					batchUserLinks[username] = userLinks[username];
				}
			}

			appendUserRightsMark(batchUserLinks, userGroups);
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
