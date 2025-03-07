const getUserLinks = ($content: JQuery) => {
	const userLinks: Record<string, JQuery<HTMLAnchorElement>[]> = {};

	const {wgFormattedNamespaces} = mw.config.get();

	const {2: localizedUserNamespace, 3: localizedUserTalkNamespace} = wgFormattedNamespaces;
	for (const element of $content.find<HTMLAnchorElement>(
		[
			'a[title^="User:"]:not(.mw-changeslist-date):not([href*="undo"])',
			`a[title^="${localizedUserNamespace}:"]:not(.mw-changeslist-date):not([href*="undo"])`,
		].join(',')
	)) {
		const $element: JQuery<HTMLAnchorElement> = $(element);

		const userRegex: RegExp = new RegExp(
			`((User|User[_ ]talk)|(${localizedUserNamespace}|${localizedUserTalkNamespace})):(.*?)(?=&|$)`
		);
		const userNameMatchArray: RegExpMatchArray | null = decodeURI($element.attr('href') ?? '').match(userRegex);
		if (!userNameMatchArray) {
			continue;
		}

		let [userName] = userNameMatchArray;
		userName = userName.replace(
			new RegExp(`^((User|User[_ ]talk)|(${localizedUserNamespace}|${localizedUserTalkNamespace})):`, 'i'),
			''
		);
		userName = userName.replace(/#.*$/i, '');
		const index: number = userName.indexOf('/');
		if (index === -1) {
			userLinks[userName] ??= [];
			(userLinks[userName] as (typeof userLinks)[keyof typeof userLinks])[
				(userLinks[userName] as (typeof userLinks)[keyof typeof userLinks]).length
			] = $element;
		}
	}

	return userLinks;
};

export {getUserLinks};
