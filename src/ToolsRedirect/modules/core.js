// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import * as OPTIONS from '../options.json';
import {SUFFIX_APPEND, SUFFIX_REPLACE, SUFFIX_SETDEFAULT, VARIANTS} from './constant';
import {generateArray, uniqueArray} from 'ext.gadget.Util';
import {api} from './api';
import {fixNamespace} from './util/fixNamespace';
import {getMessage} from './util/getMessage';

const {wgNamespaceNumber, wgPageName} = mw.config.get();
const IS_CATEGORY = wgNamespaceNumber === 14;
let findRedirectCallbacks = [];
const pageWithRedirectTextSuffix = {};
const redirectExcludes = {};

/**
 * Add new custom callback for finding new potential redirect titles.
 *
 * @param {Function} callback (pagename, $content, titles) => title list
 * @param {...Function} args
 * @return {Object}
 */
const findRedirectCallback = function (callback, ...args) {
	if (callback) {
		findRedirectCallbacks[findRedirectCallbacks.length] = callback;
	} else {
		findRedirectCallbacks = generateArray(findRedirectCallbacks, callback, ...args);
	}
	return this;
};

/**
 * Find new potential redirect titles through selector(s)
 *
 * @param {string} selector
 * @return {Object}
 */
const findRedirectBySelector = function (selector) {
	/* A shortcut to add CSS selectors as rule to find new potential redirect titles. */
	findRedirectCallbacks[findRedirectCallbacks.length] = () => {
		return $(selector).map((_index, element) => {
			return $(element).eq(0).text().trim() || null;
		});
	};
	return this;
};

const setRedirectTextSuffix = (title, suffix, flag) => {
	let flag_set = false;
	let flag_append = false;
	flag ||= SUFFIX_APPEND; // default append
	flag_set = flag === SUFFIX_REPLACE;
	title = fixNamespace(title);
	if (title in pageWithRedirectTextSuffix) {
		flag_append = flag === SUFFIX_APPEND;
	} else {
		// if not exist, every flag can set
		flag_set = true;
	}
	if (flag_set) {
		pageWithRedirectTextSuffix[title] = generateArray(suffix);
	} else if (flag_append) {
		pageWithRedirectTextSuffix[title] = generateArray(pageWithRedirectTextSuffix[title], suffix);
	}
};

const ToolsRedirect = {
	tabselem: null,
	tagselem: null,
	variants: VARIANTS,
	init($body) {
		const self = this;
		const button = $('<li>')
			.addClass('mw-list-item collapsible vector-tab-noicon')
			.attr('id', 'ca-redirect')
			.css('cursor', 'pointer')
			.append($('<a>').attr('title', getMessage('btndesc')).text(getMessage('btntitle')));
		button.on('click', (event) => {
			event.preventDefault();
			self.dialog();
		});
		$body.find('li#ca-history').after(button);
	},
	dialog() {
		const dialog = $('<div>')
			.attr('title', getMessage('dlgtitle'))
			.addClass('dialog-redirect')
			.dialog({
				bgiframe: true,
				resizable: false,
				modal: true,
				width: Math.round($(window).width() * 0.8),
				position: 'center',
			});
		dialog.css('max-height', `${Math.round($(window).height() * 0.8)}px`);
		this.tabselem = $('<div>').addClass('tab-redirect').appendTo(dialog);
		this.tagselem = $('<ul>').appendTo(this.tabselem);
		this.addTabs();
		this.tabselem.tabs();
	},
	addTabs() {
		for (const kname in this.tabs) {
			if (Object.hasOwn(this.tabs, kname)) {
				if (this.tabs[kname] === null) {
					this.tabs[kname] = this[`_initTab${kname[0].charAt(0).toUpperCase()}${kname.slice(1)}`]();
				}
				const tab = this.tabs[kname];
				this.tagselem.append(tab.tag);
				this.tabselem.append(tab.cont);
			}
		}
		// default tab, autoload when dialog initiate
		this.loadView();
	},
	createTab(tabname, tabtitle, onClick) {
		const self = this;
		const tag = $('<li>').append($('<a>').attr('href', `#tab-${tabname}`).text(tabtitle));
		const cont = $('<div>').attr('id', `tab-${tabname}`);
		$('a', tag).on('click', () => {
			onClick.call(self);
		});
		return {
			tag,
			cont,
			loaded: false,
		};
	},
	_initTabView() {
		return this.createTab('view', getMessage('tabviewtitle'), this.loadView);
	},
	_initTabCreate() {
		return this.createTab('create', getMessage('tabcreatetitle'), this.loadCreate);
	},
	tabs: {
		view: null,
		create: null,
	},
	fix(pagenames) {
		const self = this;
		$('p.desc', self.tabs.view.cont).text(getMessage('fixloading'));
		$('p[class!=desc]', self.tabs.view.cont).remove();
		self.loading(self.tabs.view.cont);
		void self
			.bulkEditByRegex(pagenames, /\s*\[\[.*?(#.*?)?\]\]/, ` [[${wgPageName}$1]]`, getMessage('fixsummary'))
			.then(() => {
				// delay load before the asynchronous tasks on server finished
				setTimeout(() => {
					self.loaded(self.tabs.view.cont);
					self.loadView(true);
				}, 3000);
			});
	},
	create(pagenames) {
		const self = this;
		$('p.desc', self.tabs.create.cont).text(getMessage('createloading'));
		$('p[class!=desc]', self.tabs.create.cont).remove();
		self.loading(self.tabs.create.cont);
		void self
			.bulkEdit(
				pagenames,
				getMessage(IS_CATEGORY ? 'createtext-category' : 'createtext').replace('$1', wgPageName),
				getMessage('createsummary').replace('$1', wgPageName)
			)
			.then(() => {
				// delay load before the asynchronous tasks on server finished
				setTimeout(() => {
					self.loaded(self.tabs.create.cont);
					self.tabs.view.loaded = false;
					self.loadCreate(true);
				}, 500);
			});
	},
	addRedirectTextSuffix(title, text) {
		if (title in pageWithRedirectTextSuffix) {
			text += `\n${uniqueArray(pageWithRedirectTextSuffix[title]).join('\n')}`; // Replace Set with uniqueArray, avoiding core-js polyfilling
		}
		return text;
	},
	bulkEdit(titles, text, summary) {
		const self = this;
		titles = titles.filter((v, i, arr) => {
			return arr.indexOf(v) === i;
		});
		return api
			.post({
				action: 'query',
				format: 'json',
				formatversion: '2',
				prop: 'info',
				titles,
			})
			.then(({query}) => {
				const deferreds = [];
				for (const {title} of query.pages) {
					deferreds[deferreds.length] = api.postWithToken('csrf', {
						action: 'edit',
						format: 'json',
						formatversion: '2',
						title,
						text: self.addRedirectTextSuffix(title, text),
						summary,
						tags: OPTIONS.apiTag,
					});
				}
				return $.when(...deferreds);
			});
	},
	bulkEditByRegex(titles, regex, text, summary) {
		titles = titles.filter((v, i, arr) => {
			return arr.indexOf(v) === i;
		});
		return api
			.post({
				action: 'query',
				format: 'json',
				formatversion: '2',
				prop: 'revisions',
				rvprop: 'content',
				rvslots: 'main',
				titles,
			})
			.then(({query}) => {
				const deferreds = [];
				for (const page of query.pages) {
					const {content} = page.revisions[0].slots['main'];
					const newContent = content.replace(regex, text);
					deferreds[deferreds.length] = api.postWithToken('csrf', {
						action: 'edit',
						format: 'json',
						formatversion: '2',
						title: page.title,
						text: newContent,
						tags: OPTIONS.apiTag,
						basetimestamp: page.revisions[0].timestamp,
						summary,
					});
				}
				return $.when(...deferreds);
			});
	},
	loadTabCont(tabname, callback, reload) {
		const self = this;
		const tab = self.tabs[tabname];
		if (reload) {
			tab.loaded = false;
		}
		if (!tab.loaded) {
			tab.cont.html('');
			//
			const $desc = $('<p>')
				.addClass('desc')
				.append($('<span>').addClass('desc-text').text(getMessage('rediloading')))
				.appendTo(tab.cont);
			const $text = $desc.find('> .desc-text');
			callback
				.apply(self)
				.done(() => {
					// Messages that can be used here:
					// * see messages.js
					// * for more information
					$text.text(getMessage(`tab${tabname}desc`));
				})
				.fail(() => {
					// Messages that can be used here:
					// * see messages.js
					// * for more information
					$text.text(getMessage(`tab${tabname}notfound`));
				})
				.always(() => {
					self.addMethods($desc, [
						{
							href: '#refresh',
							title: getMessage('refresh'),
							click(event) {
								event.preventDefault();
								self.loadTabCont(tabname, callback, true);
							},
						},
					]);
				});
			tab.loaded = true;
		}
	},
	loading(container) {
		if (container.prop('tagName').toLowerCase() === 'span') {
			container.addClass('mw-ajax-loader');
		} else if ($('span.mw-ajax-loader', container).length === 0) {
			$('<span>').addClass('mw-ajax-loader').appendTo(container);
		}
	},
	loaded(container) {
		if (container.prop('tagName').toLowerCase() === 'span') {
			container.removeClass('mw-ajax-loader');
		} else {
			$('span.mw-ajax-loader', container).remove();
		}
	},
	selectAll(cont) {
		$('input[type=checkbox]:not(:disabled)', cont).prop('checked', true);
	},
	selectInverse(cont) {
		$('input[type=checkbox]:not(:disabled)', cont).each((_index, element) => {
			const $element = $(element);
			$element.prop('checked', !$element.prop('checked'));
		});
	},
	selectAction(cont, cb) {
		const pagenames = [];
		$('input[type=checkbox]:checked', cont).each((_index, pagename) => {
			pagenames[pagenames.length] = $(pagename).data('page-title');
		});
		if (pagenames.length > 0) {
			cb.call(this, pagenames);
		}
	},
	clickAction(cont, cb) {
		const pagename = $('input[type="checkbox"]', cont).data('page-title');
		cb.call(this, [pagename]);
	},
	buildLink({title, href, click, classname}) {
		const a = $('<a>')
			.attr({
				title,
				href,
				target: '_blank',
				rel: 'noopener noreferrer',
			})
			.text(title);
		if (click) {
			a.on('click', click);
		}
		if (classname) {
			a.addClass(classname);
		}
		return $('<span>').addClass('tools-redirect_link').append(a);
	},
	addMethods($parent, methods) {
		const self = this;
		let $container = $parent.find('> .tools-redirect_methods');
		const methodExist = ({href}) => {
			return $container.find(`a[href=${JSON.stringify(href)}]`).length > 0;
		};
		if ($container.length === 0) {
			$container = $('<span>').addClass('tools-redirect_methods').appendTo($parent);
		}
		for (const method of methods) {
			if (!methodExist(method)) {
				self.buildLink(method).appendTo($container);
			}
		}
	},
	buildSelection(main, metd, mt, dsab) {
		const cont = $('<span>');
		const sele = $('<input>').attr('type', 'checkbox').appendTo(cont);
		this.buildLink(main).appendTo(cont);
		this.addMethods(cont, metd);
		sele.data('page-title', mt);
		if (dsab) {
			sele.prop('disabled', 'disabled');
		}
		return cont;
	},
	loadView(reload) {
		const $container = this.tabs.view.cont;
		this.loadTabCont(
			'view',
			function () {
				return this.loadRedirect(wgPageName, $container, 0);
			},
			reload
		);
	},
	loadCreate(reload) {
		this.loadTabCont(
			'create',
			function () {
				return this.findRedirect(wgPageName);
			},
			reload
		);
	},
	loadRedirect(pagename, container, deep, loaded) {
		this.loading(container);
		const self = this;
		const deferred = $.Deferred();
		const top = deep ? $('<dl>').appendTo(container) : container;
		if (!loaded) {
			loaded = {};
			loaded[pagename] = true;
		}
		const onClickFix = (event) => {
			const entry = $(this).parents('dd, p').first();
			event.preventDefault();
			self.clickAction(entry, this.fix);
		};
		void api
			.post({
				action: 'query',
				format: 'json',
				formatversion: '2',
				prop: 'redirects',
				titles: pagename,
				rdlimit: 'max',
			})
			.then(({query}) => {
				self.loaded(container);
				let has_redirect = false;
				const desc = $('p.desc', self.tabs.view.cont);
				const maximumRedirectDepth = 10;
				for (const page of query.pages) {
					if (page.redirects) {
						const {redirects} = page;
						for (const {title} of redirects) {
							const rdtitle = title;
							const ultitle = rdtitle.replace(/ /g, '_');
							const entry = (deep ? $('<dd>') : $('<p>')).appendTo(top);
							const methods = [
								{
									href: mw.util.getUrl(ultitle, {action: 'edit'}),
									title: getMessage('rediedit'),
								},
							];
							const isCycleRedirect = rdtitle in loaded;
							loaded[rdtitle] = true;
							if (!isCycleRedirect && deep) {
								methods[methods.length] = {
									href: '#fix-redirect',
									title: getMessage('tabviewfix'),
									click: onClickFix,
								};
							}
							const $container = self
								.buildSelection(
									{
										href: mw.util.getUrl(ultitle, {redirect: 'no'}),
										title: rdtitle,
									},
									methods,
									ultitle,
									!deep
								)
								.appendTo(entry);
							if (isCycleRedirect) {
								$container.append(`<span class="error">${getMessage('errcycleredirect')}</span>`);
							} else if (deep < maximumRedirectDepth) {
								void deferred.then(() => {
									return self.loadRedirect(rdtitle, entry, deep + 1, loaded);
								});
							}
							has_redirect = true;
						}
					} else {
						has_redirect = false;
					}
				}
				if (has_redirect && deep === 1) {
					self.addMethods(desc, [
						{
							href: '#select-all',
							title: getMessage('selectall'),
							click(event) {
								event.preventDefault();
								self.selectAll(self.tabs.view.cont);
							},
						},
						{
							href: '#select-inverse',
							title: getMessage('selectinverse'),
							click(event) {
								event.preventDefault();
								self.selectInverse(self.tabs.view.cont);
							},
						},
						{
							href: '#fix-selected',
							title: getMessage('tabviewfix'),
							click(event) {
								event.preventDefault();
								self.selectAction(self.tabs.view.cont, self.fix);
							},
						},
					]);
				}
				if (has_redirect) {
					void deferred.resolveWith(self);
				} else {
					void deferred.rejectWith(self);
				}
			});
		return deferred.promise();
	},
	findVariants(pagename, titles) {
		const self = this;
		const suffixReg = /^.+?((（|[ _]\().+?([)）]))$/;
		let retTitles = [];
		const deferreds = [];
		for (const variant of VARIANTS) {
			const xhr = api
				.post({
					action: 'parse',
					format: 'json',
					formatversion: '2',
					page: pagename,
					prop: 'displaytitle',
					uselang: variant,
					variant,
				})
				.then(({parse}) => {
					const {displaytitle} = parse;
					// Example:
					// - Before: <span class="mw-page-title-namespace">有兽档案馆</span><span class="mw-page-title-separator">:</span><span class="mw-page-title-main">沙盒</span>
					// - After: 有兽档案馆:沙盒
					let title = $('<span>').append(displaytitle).eq(0).text().trim();
					title = fixNamespace(title);
					setRedirectTextSuffix(title, '{{简繁重定向}}', SUFFIX_APPEND);
					return title;
				});
			deferreds[deferreds.length] = xhr;
		}
		return $.when(...deferreds).then((...args) => {
			const suffixes = [];
			for (const title of args) {
				let suffix;
				// find title suffix,
				// for example " (济南市)" to "市中区 (济南市)"
				const suffixArr = suffixReg.exec(title);
				if (suffixArr && suffixArr.length === 2) {
					[, suffix] = suffixArr;
				} else {
					suffix = '';
				}
				retTitles[retTitles.length] = title;
				suffixes[suffixes.length] = suffix;
			}
			// append suffixes
			for (const suffix of uniqueArray(suffixes)) {
				retTitles = [
					...retTitles,
					...titles.map((title) => {
						const modifiedTitle = fixNamespace(title);
						return suffixReg.test(modifiedTitle) ? modifiedTitle : modifiedTitle + suffix;
					}),
				];
			}

			return self.findNotExists(uniqueArray(retTitles)); // Replace Set with uniqueArray, avoiding core-js polyfilling
		});
	},
	findNotExists(titles) {
		const deferreds = [];
		const excludes = ['用字模式'];
		let alltitles = [];
		for (const variant of VARIANTS) {
			deferreds[deferreds.length] = api.get({
				action: 'parse',
				format: 'json',
				formatversion: '2',
				text: titles,
				prop: 'text',
				title: 'MediaWiki:Gadget-ToolsRedirect.js/-',
				contentmodel: 'wikitext',
				uselang: variant,
				variant,
			});
		}
		return $.when(...deferreds).then((...args) => {
			for (const [{parse}] of args) {
				alltitles = [...alltitles, ...$(parse.text).text().trim().split('|')];
			}
			alltitles = alltitles.filter((v, i, arr) => {
				return arr.indexOf(v) === i;
			});
			return api
				.post({
					action: 'query',
					format: 'json',
					formatversion: '2',
					prop: 'info',
					titles: alltitles,
				})
				.then(({query}) => {
					titles = [];
					for (const page of query.pages) {
						const {title} = page;
						if (page.missing && !excludes.includes(title)) {
							if (title in redirectExcludes) {
								// exclude special titles
								return;
							}
							titles[titles.length] = title;
							if (IS_CATEGORY) {
								const target = wgPageName.replace(/^Category:/, '');
								setRedirectTextSuffix(title, '{{分类重定向|$1}}'.replace('$1', target));
							}
							// only set default suffix
							setRedirectTextSuffix(title, '{{别名重定向}}', SUFFIX_SETDEFAULT);
						}
					}
					return titles;
				});
		});
	},
	findRedirect(pagename) {
		const self = this;
		const frcDeferreds = [];
		const container = self.tabs.create.cont;
		const $body = $('body');
		const $content = $body.find('#mw-content-text > div.mw-parser-output');
		const deferred = $.Deferred();
		let titles = [];
		self.loading(container);
		for (const callback of findRedirectCallbacks) {
			const ret = callback(pagename, $content, titles);
			if (typeof ret === 'string') {
				titles[titles.length] = ret;
			} else if ('done' in ret) {
				// is Deferred
				frcDeferreds[frcDeferreds.length] = ret;
			} else {
				titles = uniqueArray([...titles, ...ret]); // Replace Set with uniqueArray, avoiding core-js polyfilling
			}
		}
		// remove all empty titles
		titles = titles.map((title) => {
			return title || null;
		});
		const onClickCreate = function (event) {
			const entry = $(this).parents('p:first');
			event.preventDefault();
			self.clickAction(entry, self.create);
		};
		// handles the deferred callbacks
		void $.when(...frcDeferreds)
			.then((...args) => {
				for (const ret of args) {
					if (typeof ret === 'string') {
						titles[titles.length] = ret;
					} else {
						titles = uniqueArray([...titles, ...ret]); // Replace Set with uniqueArray, avoiding core-js polyfilling
					}
				}
				return self.findVariants(pagename, titles);
			})
			.then((fvtitles) => {
				// build HTML
				self.loaded(container);
				for (const title of fvtitles) {
					const ultitle = title.replace(' ', '_');
					const entry = $('<p>').appendTo(container);
					self.buildSelection(
						{
							href: mw.util.getUrl(ultitle, {action: 'edit', redlink: '1'}),
							title,
							classname: 'new',
						},
						[
							{
								href: '#create-redirect',
								title: getMessage('tabcreatetitle'),
								click: onClickCreate,
							},
						],
						ultitle,
						false
					).appendTo(entry);
				}
				const desc = $('p.desc', container);
				if (fvtitles.length > 0) {
					self.addMethods(desc, [
						{
							href: '#select-all',
							title: getMessage('selectall'),
							click(event) {
								event.preventDefault();
								self.selectAll(container);
							},
						},
						{
							href: '#select-inverse',
							title: getMessage('selectinverse'),
							click(event) {
								event.preventDefault();
								self.selectInverse(container);
							},
						},
						{
							href: '#create-selected',
							title: getMessage('tabcreatetitle'),
							click(event) {
								event.preventDefault();
								self.selectAction(container, self.create);
							},
						},
					]);
					void deferred.resolveWith(self, [fvtitles]);
				} else {
					void deferred.rejectWith(self, [fvtitles]);
				}
			});
		return deferred.promise();
	},
};

export {ToolsRedirect, findRedirectCallback, findRedirectBySelector, setRedirectTextSuffix};
