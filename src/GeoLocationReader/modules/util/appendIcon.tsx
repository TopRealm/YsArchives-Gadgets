import * as OPTIONS from '../../options.json';
import {FooterIcon, type FooterIconProps} from '../components/react';
import React from 'ext.gadget.JSX';

const appendIcon = ({icon, indicatorText, spanClass}: FooterIconProps): void => {
	if (!spanClass || !icon || !indicatorText) {
		return;
	}

	const mountPoint = document.querySelector<HTMLElement>(OPTIONS.mountPointSelector);
	if (!mountPoint) {
		return;
	}

	mountPoint.prepend(<FooterIcon spanClass={spanClass} icon={icon} indicatorText={indicatorText} />);
};

export {appendIcon};
