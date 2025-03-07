import * as OPTIONS from '../options.json';
import {FooterIcon, type IndicatorProps} from '../components/react';
import React from 'ext.gadget.JSX';

const appendIcon = ({indicatorText, spanClass}: IndicatorProps): void => {
	if (spanClass === 'unknown' || !indicatorText) {
		return;
	}

	const mountPoint = document.querySelector<HTMLElement>(OPTIONS.mountPointSelector);
	if (!mountPoint) {
		return;
	}

	mountPoint.prepend(<FooterIcon spanClass={spanClass} indicatorText={indicatorText} />);
};

export {appendIcon};
