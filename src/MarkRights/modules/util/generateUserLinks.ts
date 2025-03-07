const generateUserLinks = ($content: JQuery): Record<string, JQuery<HTMLAnchorElement>[]> => {
	const userLinks: Record<string, JQuery<HTMLAnchorElement>[]> = {};
	const $elements = $content.find<HTMLAnchorElement>('a.mw-userlink:not(.mw-anonuserlink)');

	for (const element of $elements) {
		const $element: JQuery<HTMLAnchorElement> = $(element);
		if (
			$element.parents('li').find('.gadgets-markrights').length ||
			$element.siblings('.gadgets-markrights').length
		) {
			continue;
		}

		const {textContent} = element;
		const user: string | undefined = textContent?.toString();

		if (!user) {
			continue;
		}

		if (mw.util.isIPv4Address(user) || mw.util.isIPv6Address(user)) {
			continue;
		}

		userLinks[user] ??= [];

		userLinks[user][userLinks[user].length] = $element; // Replace Array#push to avoid core-js polyfilling
	}

	return userLinks;
};

export {generateUserLinks};
