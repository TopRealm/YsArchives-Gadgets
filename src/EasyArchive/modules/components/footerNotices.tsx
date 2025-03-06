import * as OPTIONS from '../../options.json';
import React, {ReactElement} from 'ext.gadget.JSX';
import {footerNotice} from './EasyArchive.module.less';
import {getMessage} from '../i18n';
import {sanitize} from '../util/sanitize';

interface FooterNoticeProps {
	children: ReactElement;
}

interface ArcLocProps {
	arcLoc: string;
}

const FooterNotice = ({children = <></>}: FooterNoticeProps) => {
	const {skin} = mw.config.get();
	const id = OPTIONS.elementId;

	if (skin === 'citizen') {
		return (
			<section id={id} className={[footerNotice, 'page-info__item', 'citizen-footer__pageinfo-item', 'noprint']}>
				{children}
			</section>
		);
	} else if (['gongbi', 'vector', 'vector-2022'].includes(skin) || document.querySelector('ul#footer-info')) {
		return (
			<li id={id} className={[footerNotice, 'noprint']}>
				{children}
			</li>
		);
	}

	return (
		<div id={id} className={[footerNotice, 'noprint']}>
			{children}
		</div>
	);
};

const InBlackList = () => (
	<FooterNotice>
		<>
			{getMessage('Easy Archive not supported')}
			<br />
			{getMessage('Easy Archive not supported details')}
		</>
	</FooterNotice>
);

const NotAllowed = () => (
	<FooterNotice>
		<>{getMessage('Easy Archive not allowed')}</>
	</FooterNotice>
);

const ArcLocNotAllowed = ({arcLoc}: ArcLocProps) => (
	<FooterNotice>
		<>
			{getMessage('Archive Location not allowed').replace('$1', sanitize(arcLoc))}
			<br />
			{getMessage('Archive Location not allowed details')}
		</>
	</FooterNotice>
);

const NoArcLoc = () => (
	<FooterNotice>
		<>{getMessage('No Archive Location')}</>
	</FooterNotice>
);

const Enabled = ({arcLoc}: ArcLocProps) => (
	<FooterNotice>
		<>
			{getMessage('Easy Archive enabled')}
			{getMessage('(')}
			{getMessage('Archive location')}
			<a title={sanitize(arcLoc)} href={`/wiki/${sanitize(arcLoc)}`}>
				{arcLoc}
			</a>
			{getMessage(')')}
			{getMessage('.')}
		</>
	</FooterNotice>
);

export {FooterNotice, Enabled, InBlackList, NotAllowed, ArcLocNotAllowed, NoArcLoc};
