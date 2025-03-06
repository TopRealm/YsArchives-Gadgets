import {ArchiveAndDeleteSectionLink} from './components/sectionLink';
import {EditConflictNotice} from './components/editConflictNotice';
import React from 'ext.gadget.JSX';
import {getSections} from './util/getSection';
import {refresh} from './util/refreshPage';
import {toastify} from 'ext.gadget.Toastify';

const addLinks = async ({
	arcLevel,
	arcLoc,
	secArc,
	secDel,
}: {
	arcLevel: string;
	arcLoc: string;
	secArc: string;
	secDel: string;
}) => {
	const {wgPageName} = mw.config.get();
	const sectionsToArchive = await getSections(wgPageName);

	const headings = document.querySelectorAll(`h${arcLevel}`);
	const headlines = [];
	const headingIndices = [];

	for (const heading of headings) {
		const headline = heading.querySelector('.mw-headline');
		if (headline) {
			headlines[headlines.length] = headline.id;
		}
	}

	const sectionIdSpans: Element[] = [];
	let toastifyInstance: ToastifyInstance = {
		hideToast: () => {},
	};

	const messageChannel: BroadcastChannel = new BroadcastChannel(`${wgPageName}_message`);
	const refreshChannel: BroadcastChannel = new BroadcastChannel(`${wgPageName}_refresh`);

	for (const section of sectionsToArchive) {
		if (section.level !== arcLevel) {
			continue;
		}

		if (headlines.includes(section.anchor)) {
			headingIndices[headingIndices.length] = {
				indexNo: section.index,
				anchor: section.anchor,
			};
		}
	}

	for (const {indexNo, anchor} of headingIndices) {
		// eslint-disable-next-line unicorn/prefer-query-selector
		const headline = document.getElementById(anchor);
		if (!headline) {
			continue;
		}

		const parentHeading = headline.parentElement;
		if (!parentHeading) {
			continue;
		}

		const editSection = parentHeading.querySelector('.mw-editsection');
		if (!editSection) {
			continue;
		}

		const sectionIDSpan = (
			<ArchiveAndDeleteSectionLink
				sectionIdSpans={sectionIdSpans}
				messageChannel={messageChannel}
				refreshChannel={refreshChannel}
				indexNo={indexNo}
				anchor={anchor}
				toastifyInstance={toastifyInstance}
				arcLoc={arcLoc}
				secArc={secArc}
				secDel={secDel}
			/>
		);

		editSection.prepend(sectionIDSpan);
		sectionIdSpans[sectionIdSpans.length] = sectionIDSpan;
	}

	messageChannel.addEventListener('message', (event) => {
		for (const span of sectionIdSpans) {
			span.remove();
		}
		toastifyInstance.hideToast();
		toastifyInstance = toastify(
			{
				text: event.data as string,
				close: true,
				duration: 3 * 1000,
			},
			'info'
		);
	});

	refreshChannel.addEventListener('message', () => {
		toastifyInstance.hideToast();
		toastifyInstance = toastify(
			{
				node: (
					<EditConflictNotice
						onClick={() => {
							toastifyInstance.hideToast();
							refresh();
						}}
					/>
				),
				close: true,
				duration: -1,
			},
			'info'
		);
	});
};

export {addLinks};
