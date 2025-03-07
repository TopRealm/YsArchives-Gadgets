import React from 'ext.gadget.JSX';
import {getMessage} from './i18n';
import {uniqueArray} from 'ext.gadget.Util';

const {wgAction, wgNamespaceNumber, wgPageName, wgScript, wgUserName} = mw.config.get();

const loadWithURL = async (): Promise<void> => {
	const URL_WITH_CSS: string | null = mw.util.getParamValue('withCSS');
	const URL_WITH_JS: string | null = mw.util.getParamValue('withJS');
	const URL_WITH_MODULE: string | null = mw.util.getParamValue('withModule');
	/**
	 * &withCSS= and &withJS= URL parameters
	 * Allow to try custom scripts from MediaWiki space
	 * without editing personal .css or .js files
	 */
	if (URL_WITH_CSS || URL_WITH_JS || URL_WITH_MODULE) {
		if (URL_WITH_CSS && /^MediaWiki:[^#%&<=>]*\.css$/.test(URL_WITH_CSS)) {
			mw.loader.load(
				mw.util.getUrl(URL_WITH_CSS, {
					action: 'raw',
					ctype: 'text/css',
					maxage: '3600',
					smaxage: '3600',
				}),
				'text/css'
			);
		}
		if (URL_WITH_JS || URL_WITH_MODULE) {
			// @ts-expect-error TS6133
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const require = await mw.loader.using('ext.gadget.SiteCommon_JS');

			if (URL_WITH_JS && /^MediaWiki:[^#%&<=>]*\.js$/.test(URL_WITH_JS)) {
				mw.loader.load(
					mw.util.getUrl(URL_WITH_JS, {
						action: 'raw',
						ctype: 'text/javascript',
						maxage: '3600',
						smaxage: '3600',
					})
				);
			}

			if (URL_WITH_MODULE && /^(ext\.((?!(ext\.|[,|])).)*[,|]?)+$/.test(URL_WITH_MODULE)) {
				const modules = uniqueArray(URL_WITH_MODULE.split(/[,|]/));
				mw.loader.load(modules);
			}
		}
	}
	/**
	 * Load CSS and JS files temporarily through URL.
	 * &use=File1.css|File2.css|File3.js
	 */
	const URL_USE: string | null = mw.util.getParamValue('use');
	if (URL_USE) {
		const wgUserNameExcaped: string = mw.util.escapeRegExp(wgUserName ?? '');
		const REGEX_FILE: RegExp = new RegExp(
			`^(?:MediaWiki:${wgUserNameExcaped ? `|User:${wgUserNameExcaped}/` : ''})[^&<>=%#]*\\.(js|css)$`
		);
		const REGEX_EXT: RegExp = /^ext\.[^,]+$/;
		const path: string = wgScript;
		const useFiles = URL_USE.split(/[,|]/);
		for (const useFile of useFiles) {
			const name: string = useFile.toString().trim();
			const what: string[] = REGEX_FILE.exec(name) ?? ['', ''];
			switch (what[1]) {
				case 'css':
					mw.loader.load(`${path}?action=raw&ctype=text/css&title=${encodeURIComponent(name)}`);
					break;
				case 'js': {
					// @ts-expect-error TS6133
					// eslint-disable-next-line @typescript-eslint/no-unused-vars
					const require = await mw.loader.using('ext.gadget.SiteCommon_JS');
					mw.loader.load(`${path}?action=raw&ctype=text/javascript&title=${encodeURIComponent(name)}`);
					break;
				}
				default:
					if (REGEX_EXT.test(name)) {
						// @ts-expect-error TS6133
						// eslint-disable-next-line @typescript-eslint/no-unused-vars
						const require = await mw.loader.using('ext.gadget.SiteCommon_JS');
						mw.loader.load(name);
					}
			}
		}
	}
};

const highLightRev = ($body: JQuery<HTMLBodyElement>): void => {
	/**
	 * Add highlight to revisions when using `&hilight=revid` or `&highlight=revid`
	 */
	const URL_HIGHLIGHT: string | null = mw.util.getParamValue('highlight');
	const URL_HILIGHT: string | null = mw.util.getParamValue('hilight');
	const highlight: string | null = URL_HIGHLIGHT ?? URL_HILIGHT;

	if (!highlight || wgAction !== 'history') {
		return;
	}

	for (const version of highlight.split(',')) {
		$body.find(`input[name=oldid][value=${version}]`).parent().addClass('not-patrolled');
	}
};

const addTargetBlank = ($body: JQuery<HTMLBodyElement>): void => {
	/**
	 * Add target="blank" to external links
	 */
	$body.find<HTMLAnchorElement>('a.external, a[rel="mw:ExtLink"]').filter((_index, element): boolean => {
		const linkHref: string | undefined = $(element).attr('href');
		if (linkHref) {
			const hrefSplit: string[] = linkHref.split('/');
			if (hrefSplit.length < 3 || hrefSplit[2] === location.host) {
				return false;
			}
		}

		if (element.href.includes(`${location.protocol}//${location.hostname}`)) {
			element.target = '_blank';
			if (!element.rel.includes('noopener')) {
				element.rel += ' noopener';
			}
			if (!element.rel.includes('noreferrer')) {
				element.rel += ' noreferrer';
			}
		}

		return true;
	});
};

const removeTitleFromPermalink = ($body: JQuery<HTMLBodyElement>): void => {
	/**
	 * Remove title=* from permalink
	 */
	const $permaLink: JQuery = $body.find('#t-permalink');
	if (!$permaLink.length) {
		return;
	}

	const $permaLinkFirstChild: JQuery<HTMLAnchorElement> = $permaLink.find<HTMLAnchorElement>(':first-child');

	const href: string | undefined = $permaLinkFirstChild.attr('href')?.replace(/title=[^&]*&/, '');
	if (!href) {
		return;
	}

	$permaLinkFirstChild.attr('href', href);
};

const openSearchInNewTab = ($body: JQuery<HTMLBodyElement>): void => {
	/**
	 * Open search results in a new tab or window
	 * when holding down the Ctrl key (by Timeshifter)
	 */
	$body
		.find(['#search', '#searchbox', '#searchform', '.search-types', '#search-types'].join(','))
		.on('keydown keyup mousedown', (event: JQuery.TriggeredEvent<HTMLElement>): void => {
			const {ctrlKey, metaKey, target} = event;
			$(target).attr('target', (ctrlKey ?? metaKey) ? '_blank' : '');
		});
};

const titleCleanUp = ($body: JQuery<HTMLBodyElement>): void => {
	/**
	 * Cleanup title for all pages
	 */
	const URL_DIFF: string | null = mw.util.getParamValue('diff');
	if (URL_DIFF || wgAction !== 'view' || ![6, 118].includes(wgNamespaceNumber)) {
		return;
	}

	const fullPageName: string = new mw.Title(wgPageName).getPrefixedText();
	const $firstHeading: JQuery = $body.find('.firstHeading');
	const documentTitle: string = document.title;
	const pageTitle: string = $firstHeading.text();

	const replaceTitle = (title: string): string => title.replace(pageTitle, fullPageName);

	document.title = replaceTitle(documentTitle);
	$firstHeading.text(replaceTitle(pageTitle));
};

const unihanPopup = async ($body: JQuery<HTMLBodyElement>): Promise<void> => {
	/**
	 * Display title=(.*) of <span class="inline-unihan"> after them.
	 * (beta test)
	 */
	// Do not display on Special Pages
	if (wgNamespaceNumber < 0) {
		return;
	}

	await mw.loader.using('oojs-ui-core');

	for (const element of $body.find('attr, .inline-unihan')) {
		const $element: JQuery = $(element);

		const title: string | undefined = $element.attr('title');
		if (!title) {
			continue;
		}

		const popup: OO.ui.PopupWidget = new OO.ui.PopupWidget({
			$content: $(<p>{title}</p>) as JQuery,
			label: getMessage('Note'),
			anchor: true,
			head: true,
			padded: true,
		});

		$body.append(popup.$element);

		$element.on('click', (): void => {
			popup.toggle();
		});
	}
};

const fixLocationHash = (): void => {
	/* 修正折叠后定位变化 */
	if (location.hash) {
		location.href = location.hash;
	}
};

const toggleLink = ($body: JQuery<HTMLBodyElement>): void => {
	/* 调整折叠按钮的颜色 */
	const $toggler: JQuery = $body.find('.mw-collapsible-toggle, .gadget-collapsible-toggler');
	if (!$toggler.length) {
		return;
	}

	if ($toggler.parent()[0]?.style.color) {
		$toggler.find('a').css('color', 'inherit');
	}
};

export {
	loadWithURL,
	highLightRev,
	addTargetBlank,
	removeTitleFromPermalink,
	openSearchInNewTab,
	titleCleanUp,
	unihanPopup,
	fixLocationHash,
	toggleLink,
};
