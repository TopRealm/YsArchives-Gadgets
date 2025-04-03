import {generateArray, uniqueArray} from 'ext.gadget.Util';
import {api} from 'ext.gadget.QuickImport';
import {toastify} from 'ext.gadget.Toastify';

let toastifyInstance: ToastifyInstance = {
	hideToast: () => {},
};

const parse = async (page: string) => {
	const params: ApiParseParams = {
		page,
		action: 'parse',
		format: 'json',
		formatversion: '2',
		prop: ['links', 'images'],
		redirects: true,
		disabletoc: true,
	};
	const response = await api.get(params);

	return response;
};

const getElements = (element: Document | HTMLElement) => {
	return [
		...element.querySelectorAll<HTMLAnchorElement>("a[href^='/wiki/File:']"),
		...element.querySelectorAll<HTMLAnchorElement>("a[href*='title=File:']"),
	];
};

const getElementsFromParse = async (titles: string[]) => {
	const fileNamesFromParse: string[] = [];
	titles = uniqueArray(titles);

	for (const title of titles) {
		try {
			const response = await parse(title);
			if (!response['parse'] || (!response['parse'].links && !response['parse'].images)) {
				continue;
			}

			if (response['parse'].links) {
				const regex: RegExp = /(File:[^#]+)/;

				for (const {title: titleName} of response['parse'].links as {title: string}[]) {
					if (regex.test(titleName)) {
						const match: RegExpExecArray = regex.exec(titleName) as RegExpExecArray;
						let [fileName] = match;
						fileName = decodeURIComponent(fileName).replace(/((File|Image):)((File|Image):)?/i, 'File:');
						fileNamesFromParse[fileNamesFromParse.length] = fileName;
						if (fileName.includes('+')) {
							fileNamesFromParse[fileNamesFromParse.length] = fileName.replace('+', ' ');
						}
					}
				}
			}

			if (response['parse'].images) {
				for (const fileName of response['parse'].images) {
					fileNamesFromParse[fileNamesFromParse.length] = `File:${fileName}`;
					if (`${fileName}`.includes('+')) {
						fileNamesFromParse[fileNamesFromParse.length] = `File:${fileName}`.replace('+', ' ');
					}
				}
			}
		} catch {}
	}

	return uniqueArray(fileNamesFromParse);
};

const queryImages = async (titles: string | string[]) => {
	const params: ApiQueryImagesParams = {
		titles,
		action: 'query',
		format: 'json',
		formatversion: '2',
		prop: 'images',
		imlimit: 5000,
	};
	const response = await api.get(params);

	return response;
};

const getImagesFromElements = (fileLinkElements: HTMLAnchorElement[]) => {
	const fileNames: string[] = [];
	fileLinkElements = uniqueArray(fileLinkElements);
	const {wgArticlePath, wgScript} = mw.config.get();
	const articleRegex: RegExp = new RegExp(`${wgArticlePath.replace('$1', '')}(File:[^#]+)`);
	const scriptRegex: RegExp = new RegExp(`${wgScript}\\?title=(File:[^#&]+)`);

	for (const element of fileLinkElements) {
		// Replace Set with uniqueArray, avoiding core-js polyfilling
		const {href, classList} = element;

		if (!href || href.includes('redlink=1')) {
			continue;
		}

		if (classList.contains('new')) {
			continue;
		}

		let fileName: string | undefined;
		if (articleRegex.test(href)) {
			const match: RegExpExecArray = articleRegex.exec(href) as RegExpExecArray;
			fileName = match[1] as string;
			fileName = decodeURIComponent(fileName).replace(/((File|Image):)((File|Image):)?/i, 'File:');
			fileNames[fileNames.length] = fileName;
			if (fileName.includes('+')) {
				fileNames[fileNames.length] = fileName.replace('+', ' ');
			}
		}

		if (scriptRegex.test(href)) {
			const match: RegExpExecArray = scriptRegex.exec(href) as RegExpExecArray;
			fileName = match[1] as string;
			fileName = decodeURIComponent(fileName).replace(/((File|Image):)((File|Image):)?/i, 'File:');
			fileNames[fileNames.length] = fileName;
			if (fileName.includes('+')) {
				fileNames[fileNames.length] = fileName.replace('+', ' ');
			}
		}
	}

	return uniqueArray(fileNames);
};

const getImages = async (titles: string | string[]) => {
	const fileNames: string[] = [];
	titles = uniqueArray(generateArray(titles));

	for (let i = 0; i < titles.length; i++) {
		const querytitles = titles.splice(0, 25);
		if (!querytitles.length) {
			continue;
		}

		try {
			const response = await queryImages(querytitles);
			if (!response['query'] || !response['query'].pages) {
				continue;
			}

			for (const page of response['query'].pages) {
				if (!page.images) {
					continue;
				}

				for (const {title} of page.images as {
					ns: number;
					title: string;
				}[]) {
					if (!title) {
						continue;
					}

					fileNames[fileNames.length] = title;
				}
			}
		} catch {}
	}

	return uniqueArray(fileNames);
};

const getAllImages = async (titles?: string | string[]): Promise<string[]> => {
	toastifyInstance.hideToast();
	toastify(
		{
			text: '正在获取迁移目标',
			duration: -1,
		},
		'info'
	);

	let fileNames: string[] = [];
	const {wgNamespaceNumber, wgPageName} = mw.config.get();

	if (!titles || !titles.length) {
		titles = wgNamespaceNumber < 0 ? [] : [wgPageName];
	}

	const elementsFromPage = getElements(document);
	const fileNamesFromPage = getImagesFromElements(elementsFromPage);
	const fileNamesFromParse = await getElementsFromParse(fileNamesFromPage);

	fileNames = uniqueArray([
		...fileNamesFromPage,
		...fileNamesFromParse,
		...(await getImages([...titles, ...fileNamesFromPage])),
	]);

	toastifyInstance.hideToast();
	toastifyInstance = toastify(
		{
			text: '获取迁移目标完成',
			duration: -1,
		},
		'success'
	);

	return uniqueArray(fileNames); // Replace Set with uniqueArray, avoiding core-js polyfilling
};

export {getAllImages};
