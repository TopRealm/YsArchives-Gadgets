const getShortDomains = (): string[] => {
	const {wgWikiID} = mw.config.get();
	let domains: string[] = [];

	switch (wgWikiID) {
		case 'zhysy':
			domains = ['ysymh.cc', 'youshou.wiki'];
			break;
	}

	return domains;
};

export {getShortDomains};
