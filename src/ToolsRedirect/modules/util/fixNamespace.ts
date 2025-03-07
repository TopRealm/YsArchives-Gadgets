const fixNamespace = (title: string): string => {
	const {wgNamespaceIds, wgNamespaceNumber, wgPageName} = mw.config.get();

	const nsPrefixes = [];
	let nsCanonPrefix: string;
	let nsPrefixPattern: RegExp;

	for (const [text, nsid] of Object.entries(wgNamespaceIds)) {
		if (nsid === wgNamespaceNumber && !!text) {
			nsPrefixes[nsPrefixes.length] = text;
		}
	}

	if (wgNamespaceNumber === 0) {
		// articles
		nsCanonPrefix = '';
		nsPrefixPattern = /^/;
	} else {
		nsCanonPrefix = `${wgPageName.split(':')[0]}:`;
		nsPrefixPattern = new RegExp(`^(${nsPrefixes.join('|')}):`, 'i');
	}

	if (wgNamespaceNumber === 0) {
		// do nothing if it's articles
		return title;
	} else if (nsPrefixPattern.test(title)) {
		// canonize the namespace
		return title.replace(nsPrefixPattern, nsCanonPrefix);
	}
	// don't have a namespace
	return nsCanonPrefix + title;
};

export {fixNamespace};
