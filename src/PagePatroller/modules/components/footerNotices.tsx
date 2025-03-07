import * as OPTIONS from '../../options.json';
import React, {ReactElement} from 'ext.gadget.JSX';
import {getMessage} from '../i18n';

interface FooterNoticeProps {
	children?: ReactElement;
}

const FooterNotice = ({children = <></>}: FooterNoticeProps) => {
	const {skin} = mw.config.get();
	const id = OPTIONS.elementId;
	const className = OPTIONS.elementId;

	if (skin === 'citizen') {
		return (
			<section id={id} className={[className, 'page-info__item', 'citizen-footer__pageinfo-item', 'noprint']}>
				{children}
			</section>
		);
	} else if (['gongbi', 'vector', 'vector-2022'].includes(skin) || document.querySelector('ul#footer-info')) {
		return (
			<li id={id} className={[className, 'noprint']}>
				{children}
			</li>
		);
	}

	return (
		<div id={id} className={[className, 'noprint']}>
			{children}
		</div>
	);
};

const NotPatrolledYet = () => (
	<FooterNotice>
		<span id="page_patroller__not-patrolled" textContent={getMessage('This page has not been patrolled yet')} />
	</FooterNotice>
);

interface PatrolledProps {
	timestamp?: string;
	user?: string;
}

const Patrolled = ({timestamp, user}: PatrolledProps) => {
	if (timestamp && user) {
		return (
			<FooterNotice>
				<span id="page_patroller__patrolled-by">
					{getMessage('This page was patrolled at by').replace('$1', timestamp)}
					<a href={mw.util.getUrl(`User:${user}`)}>{user}</a>
					{getMessage('period')}
				</span>
			</FooterNotice>
		);
	}

	return (
		<FooterNotice>
			<span
				id="page_patroller__patrolled"
				textContent={getMessage('This page has been patrolled, or has been marked as auto-patrolled')}
			/>
		</FooterNotice>
	);
};

const ErrorMessage = () => (
	<FooterNotice>
		<span id="page_patroller__error" textContent={getMessage('Error occurs when finding patroller')} />
	</FooterNotice>
);

export {FooterNotice, NotPatrolledYet, Patrolled, ErrorMessage};
