const getUserName = (url: string): string => {
	if (!url) {
		return '';
	}

	const username: string | null = mw.util.getParamValue('title', url);

	const decode = (string: string, replace: (_string: string) => string): string => {
		return decodeURIComponent(
			((): string => {
				try {
					return decodeURIComponent(replace(string));
				} catch {
					return replace(string).replace(/%(?!\d+)/g, '%25');
				}
			})()
		);
	};

	if (username) {
		return decode(username, (string: string): string => {
			return string.replace('User:', '').replace(/_/g, ' ');
		});
	}

	const usernameMatch: RegExpMatchArray | null = url.match(/\/wiki\/User:(.+?)$/);

	if (usernameMatch?.[1]) {
		return decode(usernameMatch[1], (string: string): string => {
			return string.replace(/_/g, ' ');
		});
	}

	return '';
};

export {getUserName};
