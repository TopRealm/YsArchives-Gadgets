import {CLASS_NAME, CLASS_NAME_ICON, CLASS_NAME_TEXT} from '../constant';
import React, {ReactElement} from 'ext.gadget.JSX';
import {getMessage} from '../i18n';

interface FooterNoticeProps {
	spanClass: string;
	children?: ReactElement;
}

const FooterNotice = ({spanClass, children = <></>}: FooterNoticeProps) => {
	const {skin} = mw.config.get();
	const id = CLASS_NAME;
	const classNames = [CLASS_NAME, `${CLASS_NAME}-${spanClass}`];

	if (skin === 'citizen') {
		return (
			<section id={id} className={[...classNames, 'page-info__item', 'citizen-footer__pageinfo-item', 'noprint']}>
				{children}
			</section>
		);
	} else if (['gongbi', 'vector', 'vector-2022'].includes(skin) || document.querySelector('ul#footer-info')) {
		return (
			<li id={id} className={[...classNames, 'noprint']}>
				{children}
			</li>
		);
	}

	return (
		<div id={id} className={[...classNames, 'noprint']}>
			{children}
		</div>
	);
};

interface IndicatorProps {
	icon: 'globe' | 'helpNotice';
	indicatorText: string;
}

const Indicator = ({icon, indicatorText}: IndicatorProps) => {
	const text: string =
		icon === 'globe' ? getMessage('Location') + getMessage(':') + indicatorText : (indicatorText ?? '');

	return (
		<>
			<span className={[CLASS_NAME_ICON, `${CLASS_NAME_ICON}-${icon}`]} aria-label={text}></span>
			<span className={CLASS_NAME_TEXT}>{text}</span>
		</>
	);
};

interface FooterIconProps {
	spanClass: string;
	icon: 'globe' | 'helpNotice';
	indicatorText: string;
}

const FooterIcon = ({icon, spanClass, indicatorText}: FooterIconProps) => (
	<FooterNotice spanClass={spanClass}>
		<Indicator icon={icon} indicatorText={indicatorText} />
	</FooterNotice>
);

export {FooterIcon, type FooterIconProps};
