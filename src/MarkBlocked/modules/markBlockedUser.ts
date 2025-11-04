import {markBlockedIPLinks, markBlockedUserLinks, markGlobalLockedUserLinks} from './util/markUserLinks';
import {generateUserLinks} from './util/generateUserLinks';

const markBlockedUser = ($content: JQuery): void => {
	// Find all "user" links and save them in userLinks : { 'users': [<link1>, <link2>, ...], 'user2': [<link3>, <link3>, ...], ... }
	const userLinks: Record<string, JQuery[]> = generateUserLinks($content);

	markGlobalLockedUserLinks(userLinks);
	markBlockedUserLinks(userLinks);
	markBlockedIPLinks(userLinks);
};

export {markBlockedUser};
