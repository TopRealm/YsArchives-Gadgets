import * as OPTIONS from '../../options.json';

const generateUserNamespaceTitles = (): string[] => {
	const {wgNamespaceIds} = mw.config.get();

	const userNamespaceTitles: string[] = [];

	for (const [namespace, id] of Object.entries(wgNamespaceIds)) {
		if (!OPTIONS.userNamespaceNumbers.includes(id)) {
			continue;
		}

		userNamespaceTitles[userNamespaceTitles.length] = `${mw.util.escapeRegExp(namespace.replace(/_/g, ' '))}:`; // Replace Array#push to avoid core-js polyfilling
	}

	return userNamespaceTitles;
};

export {generateUserNamespaceTitles};
