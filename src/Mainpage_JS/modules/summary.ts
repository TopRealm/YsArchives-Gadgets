/*
 * @coding: UTF-8
 * @Author: AwAjie
 * @Date: 2025-03-01 01:13:11
 */
import {getMonthFromWeek, getPreviousOddWeek} from './util/dateLookup';

interface Res {
	query: {
		pages: {
			[key: string]: {
				extract?: string;
			};
		};
	};
}
const libSummary = async () => {
	const summary = document.querySelectorAll('.summary');
	if (!summary.length) return;

	const k = getPreviousOddWeek();
	const d = new Date().getFullYear();
	const titleStr = `有兽档案馆:档案馆双周报/${d}年${getMonthFromWeek(d, k + 1)}月/第${k}-${k + 1}周`;
	const url = `/api.php?action=query&prop=extracts&exsectionformat=plain&exchars=1200&format=json&titles=${titleStr}/summary`;
	try {
		const a = await fetch(url);
		const res = (await a.json()) as Res;
		const pageKeys = Object.keys(res.query.pages);

		const summaryUrlHtml = `<p>更多消息，<a href="https://youshou.wiki/wiki/${titleStr}">请查阅本期双周报详细信息</a></p>`;
		const {pages} = res.query;
		const [pageKey] = pageKeys;

		const page = pageKey ? pages[pageKey] : undefined;
		let extract: string;
		if (page) {
			const allPTag = page.extract ? page.extract.match(/<p>[\s\S]*?<\/p>/g) : [];
			const matchCharacters = allPTag && allPTag.length ? allPTag.at(-1) : '';
			extract =
				page && page.extract
					? page.extract.replace(matchCharacters || '', summaryUrlHtml).replace(/…$/g, '')
					: '';
		} else {
			extract = '加载失败QWQ，刷新试试吧';
		}
		for (const el of summary) {
			el.innerHTML = extract;
		}
	} catch (error) {
		console.error('获取摘要时出错:', error);
		for (const el of summary) {
			el.innerHTML = '加载失败QWQ，刷新试试吧';
		}
	}
};

export default libSummary;
