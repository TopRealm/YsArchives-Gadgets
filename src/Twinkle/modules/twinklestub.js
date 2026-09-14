// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {createApp, h} from 'vue';
import TwStubDialog from './ui/TwStubDialog.vue';
import {generateArray} from 'ext.gadget.Util';

/*! Twinkle.js - twinklestub.js */
(function twinklestub() {
	/**
	 * twinklestub.js: Tag module
	 * Mode of invocation: Tab ("Stub")
	 * Active on: Existing articles
	 * Config directives in: FriendlyConfig
	 * Note: customised friendlytag module
	 */
	Twinkle.stub = () => {
		if (Morebits.isPageRedirect()) {
			// Skip
			// article/draft article tagging
		} else if (
			([0, 302].includes(mw.config.get('wgNamespaceNumber')) && mw.config.get('wgCurRevisionId')) ||
			Morebits.pageNameNorm === Twinkle.getPref('sandboxPage')
		) {
			Twinkle.stub.mode = '条目';
			Twinkle.addPortletLink(Twinkle.stub.callback, '小作品', 'friendly-tag', '标记小作品');
		}
	};
	Twinkle.stub.callback = () => {
		if (Morebits.isPageRedirect()) {
			// Skip
			// article/draft article tagging
		} else if (
			((mw.config.get('wgNamespaceNumber') === 0 || mw.config.get('wgNamespaceNumber') === 302) &&
				mw.config.get('wgCurRevisionId')) ||
			Morebits.pageNameNorm === Twinkle.getPref('sandboxPage')
		) {
			Twinkle.stub.mode = window.wgULS('条目', '條目');
			Twinkle.addPortletLink(
				Twinkle.stub.callback,
				'小作品',
				'friendly-tag',
				window.wgULS('标记小作品', '標記小作品')
			);
		}
	};
	Twinkle.stub.callback = () => {
		const root = document.createElement('div');
		document.body.append(root);
		const tagUrl = (tag) => {
			return mw.util.getUrl(`Template:${Morebits.string.toUpperCaseFirstChar(tag)}`);
		};
		const makeItems = (tags) => {
			return tags.map((tag) => {
				return {
					value: tag,
					label: `{{${tag}}}: ${Twinkle.stub.article.tags[tag]}`,
					url: tagUrl(tag),
				};
			});
		};
		const customTags = Twinkle.getPref('customStubList').map((item) => {
			return {
				value: item.value,
				label: item.label,
				url: tagUrl(item.value),
			};
		});
		const catGroups = Object.entries(Twinkle.stub.article.tagCategories).map(([title, content]) => {
			return {
				header: Twinkle.stub.article.tagCategoriesHeader[title],
				subgroups: Array.isArray(content)
					? [{items: makeItems(content)}]
					: Object.entries(content).map(([subtitle, subcontent]) => {
							return {
								title: subtitle,
								items: makeItems(subcontent),
							};
						}),
			};
		});
		const alphaTags = makeItems(Object.keys(Twinkle.stub.article.tags));
		const app = createApp({
			render: () => {
				return h(TwStubDialog, {
					title: window.wgULS('条目小作品标记', '條目小作品標記'),
					initialSortOrder: Twinkle.getPref('stubArticleSortOrder') === 'alpha' ? 'alpha' : 'cat',
					showPatrol: !!document.querySelector('.patrollink'),
					initialPatrol: Twinkle.getPref('markStubbedPagesAsPatrolled'),
					customTags,
					catGroups,
					alphaTags,
					footerLinks: [
						{text: window.wgULS('小作品说明', '小作品說明'), href: mw.util.getUrl('LIB:小作品')},
						{text: window.wgULS('小作品设置', '小作品設定'), href: mw.util.getUrl('H:TW/PREF#stub')},
						{text: window.wgULS('Twinkle帮助', 'Twinkle說明'), href: mw.util.getUrl('H:TW/DOC#stub')},
					],
					onSubmit: (params, statusContainer) => {
						Twinkle.stub.callback.evaluate(params, statusContainer);
					},
					onClose: () => {
						app.unmount();
						root.remove();
					},
				});
			},
		});
		app.mount(root);
	};
	// Tags for ARTICLES start here
	Twinkle.stub.article = {};
	// A list of all article tags, in alphabetical order
	// To ensure tags appear in the default "categorized" view, add them to the tagCategories hash below.
	Twinkle.stub.article.tags = {
		'actor-stub': '演员',
		'asia-stub': '亚洲',
		'bio-stub': '人物',
		'biology-stub': '生物学',
		'chem-stub': '化学',
		'europe-stub': '欧洲',
		'expand list': '未完成列表',
		'food-stub': '食物',
		'france-geo-stub': '法国地理',
		'geo-stub': '地理位置',
		'hist-stub': '历史或历史学',
		'JP-stub': '日本',
		'lit-stub': '文学',
		'math-stub': '数学',
		'med-stub': '医学',
		'mil-stub': '军事',
		'movie-stub': '电影',
		'music-stub': '音乐',
		'physics-stub': '物理学',
		'politic-stub': '政治',
		'religion-stub': '宗教',
		'science-stub': '科学',
		'sport-stub': '体育',
		stub: '通用小作品',
		'switzerland-stub': '瑞士',
		'tech-stub': '科技',
		'transp-stub': '交通',
		'TV-stub': '电视',
		'UK-stub': '英国',
		'US-bio-stub': '美国人物',
		'US-geo-stub': '美国地理',
		'US-stub': '美国',
		'weather-stub': '天气和特别的天气事件',
	};
	// A list of tags in order of category
	// Tags should be in alphabetical order within the categories
	// Add new categories with discretion - the list is long enough as is!
	Twinkle.stub.article.tagCategoriesHeader = {
		general: '通用模板',
		geo: '国家和地理',
		others: '杂项',
		bio: '人物',
		science: '科学',
		sport: '体育',
		tech: '技术',
		art: '艺术',
	};
	Twinkle.stub.article.tagCategories = {
		general: ['stub', 'expand list'],
		geo: [
			'asia-stub',
			'europe-stub',
			'france-geo-stub',
			'geo-stub',
			'JP-stub',
			'switzerland-stub',
			'UK-stub',
			'US-bio-stub',
			'US-geo-stub',
			'US-stub',
		],
		others: ['food-stub', 'hist-stub', 'mil-stub', 'politic-stub', 'religion-stub', 'transp-stub'],
		bio: ['actor-stub', 'bio-stub', 'US-bio-stub'],
		science: ['biology-stub', 'chem-stub', 'math-stub', 'med-stub', 'physics-stub', 'science-stub', 'weather-stub'],
		sport: ['sport-stub'],
		tech: ['tech-stub'],
		art: ['actor-stub', 'lit-stub', 'movie-stub', 'music-stub', 'TV-stub'],
	};
	// Tags for REDIRECTS start here
	Twinkle.stub.callbacks = {
		main: (pageobj) => {
			const params = pageobj.getCallbackParameters();
			let tagRe;
			let summaryText = '加入';
			let tags = [];
			const groupableTags = [];
			let i;
			// Remove tags that become superfluous with this action
			let pageText = pageobj.getPageText();
			// Check for preexisting tags and separate tags into groupable and non-groupable arrays
			for (i = 0; i < params.tags.length; i++) {
				tagRe = new RegExp(`(\\{\\{${params.tags[i]}(\\||\\}\\}))`, 'im');
				if (tagRe.exec(pageText)) {
					Morebits.status.info(
						window.wgULS('信息', '資訊'),
						window.wgULS(
							`在页面上找到{{${params.tags[i]}}}……跳过`,
							`在頁面上找到{{${params.tags[i]}}}……跳過`
						)
					);
				} else {
					tags = [...tags, ...generateArray(params.tags[i])];
				}
			}
			tags = [...tags, ...groupableTags];
			tags.sort();
			const totalTags = tags.length;
			const addTag = (tagName, tagIndex) => {
				pageText += `\n{{${tagName}}}`;
				if (tagIndex > 0) {
					if (tagIndex === totalTags - 1) {
						summaryText += '和';
					} else if (tagIndex < totalTags - 1) {
						summaryText += '、';
					}
				}
				summaryText += '{{[[';
				summaryText += tagName.includes(':') ? tagName : `Template:${tagName}|${tagName}`;
				summaryText += ']]}}';
			};
			for (const tag of tags) {
				addTag(tag);
			}
			summaryText += window.wgULS('标记到', '標記到') + Twinkle.stub.mode;
			pageobj.setPageText(pageText);
			pageobj.setEditSummary(summaryText);
			pageobj.setChangeTags(Twinkle.changeTags);
			pageobj.setWatchlist(Twinkle.getPref('watchStubbedPages'));
			pageobj.setMinorEdit(Twinkle.getPref('markStubbedPagesAsMinor'));
			pageobj.setCreateOption('nocreate');
			pageobj.save();
			if (params.patrol) {
				pageobj.patrol();
			}
		},
	};
	Twinkle.stub.callback.evaluate = (params, statusContainer) => {
		switch (Twinkle.stub.mode) {
			case '條目':
			case '条目':
				params.group = false;
				break;
			default:
				void mw.notify(`Twinkle.stub：未知模式 ${Twinkle.stub.mode}`, {
					type: 'warn',
					tag: 'twinklestub',
				});
				break;
		}
		if (!params.tags.length) {
			void mw.notify('必须选择至少一个标记！', {
				type: 'warn',
				tag: 'twinklestub',
			});
			return;
		}
		Morebits.status.init(statusContainer);
		Morebits.wiki.actionCompleted.redirect = mw.config.get('wgPageName');
		Morebits.wiki.actionCompleted.notice = window.wgULS(
			'标记完成，将在几秒内刷新页面',
			'標記完成，將在幾秒內重新整理頁面'
		);
		if (Twinkle.stub.mode === '重定向') {
			Morebits.wiki.actionCompleted.followRedirect = false;
		}
		const ysarchives_page = new Morebits.wiki.page(
			mw.config.get('wgPageName'),
			window.wgULS('正在标记', '正在標記') + Twinkle.stub.mode
		);
		ysarchives_page.setCallbackParameters(params);
		switch (Twinkle.stub.mode) {
			case '條目':
			case '条目':
			/* falls through */
			case '重定向':
				ysarchives_page.load(Twinkle.stub.callbacks.main);
				return;
			case '文件':
			case '檔案':
				ysarchives_page.load(Twinkle.stub.callbacks.file);
				break;
			default:
				void mw.notify(`Twinkle.stub：未知模式 ${Twinkle.stub.mode}`, {
					type: 'warn',
					tag: 'twinklestub',
				});
				break;
		}
	};
	Twinkle.addInitCallback(Twinkle.stub, 'stub');
})();

export {};
