import {getSectionContent, getSections} from './getSection';
import {api} from './api';
import {getMessage} from '../i18n';

const isPageExist = async (archiveTo: string) => {
	const params: ApiQueryInfoParams = {
		action: 'query',
		format: 'json',
		formatversion: '2',
		prop: 'info',
		titles: archiveTo,
	};

	const {query} = await api.get(params);

	if (query.pages[0]?.missing) {
		return false;
	}

	return true;
};

const isSectionExist = async ({index, anchor}: {index: string; anchor: string}) => {
	const {wgPageName} = mw.config.get();
	const sections = await getSections(wgPageName);

	let isExist = false;
	for (const section of sections) {
		if (index === section.index && anchor === section.anchor) {
			isExist = true;
		}
	}
	return isExist;
};

const removeSection = async ({index, anchor, summary}: {index: string; anchor: string; summary?: string}) => {
	const {wgPageName} = mw.config.get();
	const isExist = await isSectionExist({index, anchor});

	if (isExist !== true) {
		return;
	}

	const content = await getSectionContent({title: wgPageName, section: index});

	if (content === null) {
		return;
	}

	await api.edit(wgPageName, () => {
		return {
			section: index,
			text: '',
			summary: summary ?? getMessage('Delete summary'),
			minor: true,
		};
	});
};

const archiveSection = async ({index, anchor, archiveTo}: {index: string; anchor: string; archiveTo: string}) => {
	const {wgPageName} = mw.config.get();
	const isExist = await isSectionExist({index, anchor});

	if (isExist !== true) {
		return;
	}

	const content = await getSectionContent({title: wgPageName, section: index});

	if (content === null) {
		return;
	}

	const pageExist = await isPageExist(archiveTo);
	if (!pageExist) {
		await api.create(
			archiveTo,
			{
				summary: getMessage('Create summary'),
				minor: true,
			},
			'{{talkarchive}}'
		);
	}

	await api.edit(archiveTo, () => {
		return {
			appendtext: `\n\n${content}`,
			summary: getMessage('Archive summary'),
			minor: true,
		};
	});

	await removeSection({index, anchor, summary: getMessage('Archive summary')});
};

export {isSectionExist, archiveSection, removeSection};
