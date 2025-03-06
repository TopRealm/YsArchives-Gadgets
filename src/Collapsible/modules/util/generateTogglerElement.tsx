import React from 'ext.gadget.JSX';
import {toggler} from './Collapsible.module.less';

const generateTogglerElement = ($collapsible: JQuery, hideText: string, showText: string): JQuery => {
	const $toggler = $(
		<span className={[toggler, 'noprint']}>
			{'['}
			<a role="button" tabIndex={0}>
				{$collapsible.hasClass('collapsed') ? showText : hideText}
			</a>
			{']'}
		</span>
	) as JQuery;

	return $toggler;
};

export {generateTogglerElement};
