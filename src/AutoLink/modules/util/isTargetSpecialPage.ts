// Special crono pages where this script is enabled
const isTargetSpecialPage = (): boolean => {
	const {wgCanonicalSpecialPageName} = mw.config.get();
	return ['Contributions', 'Log', 'Newpages', 'Recentchanges', 'Recentchangeslinked', 'Watchlist'].includes(
		wgCanonicalSpecialPageName.toString()
	);
};

export {isTargetSpecialPage};
