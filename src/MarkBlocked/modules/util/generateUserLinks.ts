import * as OPTIONS from '../../options.json';
import {MwUri} from 'ext.gadget.Util';
import {generateUserNamespaceTitles} from './generateUserNamespaceTitles';

// Get all aliases for user: & user_talk:
const userNamespaceTitles: string[] = generateUserNamespaceTitles();
// RegExp for all titles that are  User:| User_talk: | Special:Contributions/ (for userscripts)
const userTitleRegex: RegExp = new RegExp(
	`^(${userNamespaceTitles.join('|')}|${OPTIONS.contributionsPageAlias}\\/)+([^\\/#]+)$`,
	'i'
);

// RegExp for links
// articleRegex also matches external links in order to support the noping template
const {wgArticlePath, wgScript} = mw.config.get();
const articleRegex: RegExp = new RegExp(`${wgArticlePath.replace('$1', '')}([^#]+)`);
const scriptRegex: RegExp = new RegExp(`^${wgScript}\\?title=([^#&]+)`);

const generateUserLinks = ($content: JQuery): Record<string, JQuery[]> => {
	// Find all "user" links and save them in userLinks : { 'users': [<link1>, <link2>, ...], 'user2': [<link3>, <link3>, ...], ... }
	const userLinks: Record<string, JQuery[]> = {};

	for (const element of $content.find('a')) {
		const $element: JQuery<HTMLAnchorElement> = $(element);
		if (
			$element.hasClass('mw-changeslist-date') ||
			$element.hasClass('ext-discussiontools-init-timestamplink') ||
			$element.parent('span').hasClass('mw-history-undo') ||
			$element.parent('span').hasClass('mw-rollback-link')
		) {
			continue;
		}

		const href: string | undefined = $element.attr('href');
		if (!href) {
			continue;
		}
		if (mw.util.isIPv6Address(href.replace(/^(?:https?:\/\/)/i, ''))) {
			continue;
		}
		try {
			// Maybe absolute URL
			if (new MwUri(href).host !== location.host) {
				continue;
			}
		} catch {
			try {
				// Maybe relative URL
				if (new MwUri(location.href + href).host !== location.host) {
					continue;
				}
			} catch {
				continue;
			}
		}

		let pageTitle: string | undefined;
		if (articleRegex.test(href)) {
			const match: RegExpExecArray = articleRegex.exec(href) as RegExpExecArray;
			pageTitle = match[1] as string;
		} else if (scriptRegex.test(href)) {
			const match: RegExpExecArray = scriptRegex.exec(href) as RegExpExecArray;
			pageTitle = match[1] as string;
		} else {
			continue;
		}

		pageTitle = decodeURIComponent(pageTitle).replace(/_/g, ' ');

		const userExecArray: RegExpExecArray | null = userTitleRegex.exec(pageTitle);
		if (!userExecArray || typeof userExecArray[2] !== 'string') {
			continue;
		}

		let user: string = userExecArray[2].slice(0, 1).toUpperCase() + userExecArray[2].slice(1);
		if (mw.util.isIPv6Address(user)) {
			user = user.toUpperCase();
		}

		userLinks[user] ??= [];

		(userLinks[user] as (typeof userLinks)[keyof typeof userLinks])[
			(userLinks[user] as (typeof userLinks)[keyof typeof userLinks]).length
		] = $element; // Replace Array#push to avoid core-js polyfilling
	}

	return userLinks;
};

export {generateUserLinks};
