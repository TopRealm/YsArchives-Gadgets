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

const initDB = () => {
	return new Promise<IDBDatabase>((resolve, reject) => {
		const request = window.indexedDB.open('LIBDB', 3);
		request.onsuccess = (event) => {
			if (!event.target) return;
			const target = event.target as IDBOpenDBRequest;
			if (!target) return;
			const db = target.result;
			resolve(db);
		};
		request.onupgradeneeded = function (event) {
			if (!event.target) return;
			const target = event.target as IDBOpenDBRequest;
			if (!target) return;
			const db = target.result;
			if (!db.objectStoreNames.contains('summary')) {
				db.createObjectStore('summary', {keyPath: 'date'});
			}
		};
		request.addEventListener('error', () => {
			reject(new Error('Database failed to open'));
		});
	});
};

const dbset = (db: IDBDatabase, value: {date: string; data: string}) => {
	const transaction = db.transaction(['summary'], 'readwrite');
	const objectStore = transaction.objectStore('summary');
	objectStore.add(value);
};

const dbget = (db: IDBDatabase, key: string): Promise<{date: string; data: string}> => {
	return new Promise((resolve, reject) => {
		const request = db.transaction('summary', 'readonly').objectStore('summary').get(key);
		request.onsuccess = (event) => {
			if (!event.target) return;
			const target = event.target as IDBRequest;
			resolve({
				date: target.result.date as string,
				data: target.result.data as string,
			});
		};
		request.addEventListener('error', () => {
			reject(new Error('Database operation failed'));
		});
	});
};

const renderSummary = (summary: NodeListOf<Element>, extract: string) => {
	for (const el of summary) {
		el.innerHTML = extract;
	}
};

const getSummaryHTMLData = async (summary: NodeListOf<Element>, url: string, titleStr: string): Promise<string> => {
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
			page && page.extract ? page.extract.replace(matchCharacters || '', summaryUrlHtml).replace(/…$/g, '') : '';
	} else {
		extract = '加载失败QWQ，刷新试试吧';
	}
	renderSummary(summary, extract);
	return extract;
};

const libSummary = async () => {
	const summary = document.querySelectorAll('.summary');
	if (!summary.length) return;

	const k = getPreviousOddWeek();
	const d = new Date().getFullYear();
	const titleStr = `有兽档案馆:档案馆双周报/${d}年${getMonthFromWeek(d, k + 1)}月/第${k}-${k + 1}周`;
	const url = `/api.php?action=query&prop=extracts&exsectionformat=plain&exchars=1200&format=json&titles=${titleStr}/summary`;

	if (!('indexedDB' in window)) {
		const extract = await getSummaryHTMLData(summary, url, titleStr);
		renderSummary(summary, extract);
		return;
	}

	const db = await initDB();

	try {
		const cachedData = await dbget(db, `${d}-${k}`);
		if (cachedData.date === `${d}-${getMonthFromWeek(2025, k + 1)}/${k}-${k + 1}`) {
			renderSummary(summary, cachedData.data);
		}
	} catch {
		const extract = await getSummaryHTMLData(summary, url, titleStr);
		if (extract === '加载失败QWQ，刷新试试吧') {
			renderSummary(summary, extract);
		} else if (extract && typeof extract === 'string') {
			dbset(db, {date: `${d}-${getMonthFromWeek(2025, k + 1)}/${k}-${k + 1}`, data: extract});
			renderSummary(summary, extract);
		}
	}
};

export default libSummary;
