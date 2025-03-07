import {CLASS_NAME, CLASS_NAME_DOWN, CLASS_NAME_UP} from '../modules/constant';
import React from 'ext.gadget.JSX';
import {getMessage} from '../modules/i18n';
import {scrollTop} from 'ext.gadget.Util';

interface Props {
	additionalClassName: string;
	alt: string;
	ariaLabel: string;
	onClick: (event?: MouseEvent) => void;
	onMouseEnter: (event: MouseEvent) => void;
	onMouseLeave: (event: MouseEvent) => void;
}

function ScrollButton(props: Props) {
	const {additionalClassName, alt, ariaLabel, onClick, onMouseEnter, onMouseLeave} = props;

	return (
		<img
			className={[CLASS_NAME, additionalClassName, 'noprint']}
			src={"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3C/svg%3E"}
			width="32"
			height="32"
			draggable={false}
			alt={alt}
			aria-label={ariaLabel}
			onClick={onClick}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		/>
	);
}

const TO_BOTTOM: string = getMessage('ToBottom');
const TO_TOP: string = getMessage('ToTop');

const ScrollDownButton = (onMouseEnterMouseLeave: (event: MouseEvent) => void) => (
	<ScrollButton
		additionalClassName={CLASS_NAME_DOWN}
		alt={TO_BOTTOM}
		ariaLabel={TO_BOTTOM}
		onClick={(): void => {
			scrollTop(($(document).height() ?? 0) - ($(window).height() ?? 0));
		}}
		onMouseEnter={onMouseEnterMouseLeave}
		onMouseLeave={onMouseEnterMouseLeave}
	/>
);

const ScrollUpButton = (onMouseEnterMouseLeave: (event: MouseEvent) => void) => (
	<ScrollButton
		additionalClassName={CLASS_NAME_UP}
		alt={TO_TOP}
		ariaLabel={TO_TOP}
		onClick={(): void => {
			scrollTop(0);
		}}
		onMouseEnter={onMouseEnterMouseLeave}
		onMouseLeave={onMouseEnterMouseLeave}
	/>
);

export {ScrollDownButton, ScrollUpButton};
