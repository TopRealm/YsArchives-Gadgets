import {detectIfFileRedirect, refreshPage} from './modules/core';

(function quickImport(): void {
	const {wgNamespaceNumber, wgPageName, wgWikiID} = mw.config.get();

	const caViewForeignZhwiki = document.querySelector("#ca-view-foreign a[href*='zh.wikipedia.org']");
	const redirectTextA = document.querySelector('.redirectText a');

	const isFileNS: boolean = wgNamespaceNumber === 6;
	const hasMwNoarticletext: boolean = !!document.querySelector('#mw-noarticletext');
	const iwprefix: string = caViewForeignZhwiki ? 'zhwiki' : 'commons';

	const label: string = isFileNS && !hasMwNoarticletext ? iwprefix : '';
	const buttonLabel: string = isFileNS
		? label
			? `文件（${label}）`
			: '页面'
		: redirectTextA
			? '重定向目标'
			: '页面';

	if ((wgWikiID !== 'zhqiuwenbaike' && isFileNS) || wgNamespaceNumber < 0) {
		return;
	}

	const portletId: 'p-cactions' | 'p-tb' = document.querySelector('#p-cactions') ? 'p-cactions' : 'p-tb';
	const element: HTMLLIElement | null = mw.util.addPortletLink(portletId, '#', `导入${buttonLabel}`, 't-import');
	if (!element) {
		return;
	}

	let wgPageName2: string | undefined;
	let wgPageName3: string | undefined;

	if (!isFileNS) {
		// Matching disamig-ed pages with full-width parentheses
		const disamRegExpFW = /^(.*)（(.*?)）$/;
		const matchFW = wgPageName.match(disamRegExpFW);
		// Matching disamig-ed pages with half-width parentheses
		const disamRegExpHW = /^(.*)[_ ]\((.*?)\)$/;
		const matchHW = wgPageName.match(disamRegExpHW);

		try {
			// root page name and disambig-key
			let rootPageName: string | undefined, disamKey: string | undefined;

			if (matchFW) {
				[, rootPageName, disamKey] = matchFW;
			} else if (matchHW) {
				[, rootPageName, disamKey] = matchHW;
			}

			if (rootPageName && disamKey) {
				wgPageName2 = `${rootPageName}_(${disamKey})`;
				if (disamKey === '消歧义') {
					wgPageName3 = `${rootPageName}_(消歧義)`;
				} else if (disamKey === '消歧義') {
					wgPageName3 = `${rootPageName}_(消歧义)`;
				}
			}
		} catch {}
	}

	element.addEventListener('click', (): void => {
		void (async () => {
			const pageName: string = redirectTextA ? redirectTextA.textContent || wgPageName : wgPageName;
			const pageNames = [pageName];
			if (wgPageName2) {
				pageNames[pageNames.length] = wgPageName2;
			}
			if (wgPageName3) {
				pageNames[pageNames.length] = wgPageName3;
			}
			await detectIfFileRedirect(pageNames, isFileNS);
		})().then(() => {
			refreshPage(wgPageName3 ?? wgPageName2 ?? wgPageName);
		});
	});
})();

window.detectIfFileRedirect = detectIfFileRedirect;

export {api} from './modules/api';
export {detectIfFileRedirect, refreshPage} from './modules/core';
