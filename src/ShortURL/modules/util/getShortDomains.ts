const getShortDomains = (): string[] => {
	const {wgWikiID} = mw.config.get();
	let domains: string[] = [];

	switch (wgWikiID) {
		case 'wiki-ysy':
			domains = ['ysymh.cc', 'youshou.wiki'];
			break;
	}

	return domains;
};

export {getShortDomains};
