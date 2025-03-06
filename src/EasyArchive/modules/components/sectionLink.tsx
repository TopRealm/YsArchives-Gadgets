import React, {ReactElement} from 'ext.gadget.JSX';
import {archiveOnClick, removeOnClick} from '../util/onClick';
import {getMessage} from '../i18n';
import {sectionIdSpan} from './EasyArchive.module.less';

interface OnClickProps {
	textContent: string;
	className: string;
	onClick?: (event: Event) => void;
}

interface SectionIDProps {
	children?: ReactElement;
}

const OnClick = ({textContent, className, onClick}: OnClickProps) => (
	<a
		className={['gadget-easy_archive__link', `gadget-easy_archive__link-${className}`]}
		onClick={onClick || (() => {})}
		textContent={textContent}
	/>
);

const SectionID = ({children = <></>}: SectionIDProps) => <span className={sectionIdSpan}>{children}</span>;

const Pipe = () => <span className="mw-editsection-divider" textContent={'|'} />;

interface ArchiveSectionLinkProps {
	sectionIdSpans: Element[];
	messageChannel: BroadcastChannel;
	refreshChannel: BroadcastChannel;
	indexNo: string;
	anchor: string;
	toastifyInstance: ToastifyInstance;
	archiveTo: string;
}

const ArchiveSectionLink = ({
	sectionIdSpans,
	messageChannel,
	refreshChannel,
	indexNo,
	anchor,
	archiveTo,
	toastifyInstance,
}: ArchiveSectionLinkProps) => (
	<OnClick
		className={'archive'}
		onClick={(event: Event) => {
			void archiveOnClick(event, {
				sectionIdSpans,
				messageChannel,
				refreshChannel,
				indexNo,
				anchor,
				archiveTo,
				toastifyInstance,
			});
		}}
		textContent={getMessage('Archive')}
	/>
);

interface RemoveSectionLinkProps {
	sectionIdSpans: Element[];
	messageChannel: BroadcastChannel;
	refreshChannel: BroadcastChannel;
	indexNo: string;
	anchor: string;
	toastifyInstance: ToastifyInstance;
}

const RemoveSectionLink = ({
	sectionIdSpans,
	messageChannel,
	refreshChannel,
	indexNo,
	anchor,
	toastifyInstance,
}: RemoveSectionLinkProps) => (
	<OnClick
		className={'delete'}
		onClick={(event) => {
			void removeOnClick(event, {
				sectionIdSpans,
				messageChannel,
				refreshChannel,
				indexNo,
				anchor,
				toastifyInstance,
			});
		}}
		textContent={getMessage('Delete')}
	/>
);

interface ArchiveAndDeleteSectionLinkProps {
	sectionIdSpans: Element[];
	messageChannel: BroadcastChannel;
	refreshChannel: BroadcastChannel;
	indexNo: string;
	anchor: string;
	toastifyInstance: ToastifyInstance;
	secArc: string;
	secDel: string;
	arcLoc: string;
}

const ArchiveAndDeleteSectionLink = ({
	sectionIdSpans,
	messageChannel,
	refreshChannel,
	indexNo,
	anchor,
	toastifyInstance,
	secArc,
	secDel,
	arcLoc,
}: ArchiveAndDeleteSectionLinkProps) => (
	<SectionID>
		<>
			{secArc === '1' ? (
				<ArchiveSectionLink
					sectionIdSpans={sectionIdSpans}
					messageChannel={messageChannel}
					refreshChannel={refreshChannel}
					indexNo={indexNo}
					anchor={anchor}
					toastifyInstance={toastifyInstance}
					archiveTo={arcLoc}
				/>
			) : (
				<></>
			)}
			{secArc === '1' && secDel === '1' ? <Pipe /> : <></>}
			{secDel === '1' ? (
				<RemoveSectionLink
					sectionIdSpans={sectionIdSpans}
					messageChannel={messageChannel}
					refreshChannel={refreshChannel}
					indexNo={indexNo}
					anchor={anchor}
					toastifyInstance={toastifyInstance}
				/>
			) : (
				<></>
			)}
		</>
	</SectionID>
);

export {ArchiveSectionLink, RemoveSectionLink, ArchiveAndDeleteSectionLink};
