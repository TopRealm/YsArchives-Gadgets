import {redirect} from './modules/redirect';

(function fullwidthSearchFix(): void {
	const URL_FULLTEXT: string | null = mw.util.getParamValue('fulltext');
	const URL_SEARCH: string | null = mw.util.getParamValue('search');

	// don't be too aggresive. just fix some obvious typos
	if (URL_FULLTEXT || !URL_SEARCH) {
		return;
	}

	// namespace names
	const colonIndex: number = URL_SEARCH.indexOf('：');
	if (colonIndex === -1) {
		return;
	}

	// if namespace is valid
	const nameSpace: string = URL_SEARCH.slice(0, Math.max(0, colonIndex));
	const {wgNamespaceIds} = mw.config.get();
	if (!wgNamespaceIds[nameSpace.toLowerCase()]) {
		return;
	}

	const pageName: string = URL_SEARCH.slice(Math.max(0, colonIndex + 1));

	redirect(nameSpace, pageName);
})();
