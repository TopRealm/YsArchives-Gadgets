const generateUserLinks = ($content: JQuery): Record<string, JQuery<HTMLAnchorElement>[]> => {
	const userLinks: Record<string, JQuery<HTMLAnchorElement>[]> = {};
	const $elements = $content.find<HTMLAnchorElement>('a.mw-userlink:not(.mw-anonuserlink)');

	for (const element of $elements) {
		const parentLi: HTMLLIElement | null = element.closest('li');
		if (parentLi?.querySelector('.gadgets-markrights')) {
			continue;
		}
		if (
			element.nextElementSibling?.classList.contains('gadgets-markrights') ||
			element.previousElementSibling?.classList.contains('gadgets-markrights')
		) {
			continue;
		}

		const user: string | undefined = element.textContent?.toString();
		if (!user) {
			continue;
		}

		if (mw.util.isIPv4Address(user) || mw.util.isIPv6Address(user)) {
			continue;
		}

		const $element = $(element);
		userLinks[user] ??= [];
		userLinks[user][userLinks[user].length] = $element; // Replace Array#push to avoid core-js polyfilling
	}

	return userLinks;
};

export {generateUserLinks};
