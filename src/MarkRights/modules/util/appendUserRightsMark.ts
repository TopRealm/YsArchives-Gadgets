import type {UserRights} from '../types';
import {getMessage} from '../i18n';
import {getUserName} from './getUserName';
import {uniqueArray} from 'ext.gadget.Util';

const appendUserRightsMark = ($userLinks: JQuery<HTMLAnchorElement>[], userGroups: Record<string, string[]>): void => {
	for (const $element of $userLinks) {
		const username: string = getUserName($element.attr('href') ?? '');
		if (!username) {
			continue;
		}

		userGroups ??= {};
		const groups = userGroups[username] ?? [];

		let $sups: JQuery;
		if ($element.parents('li').find('.gadgets-markrights').length) {
			$sups = $element.siblings('.gadgets-markrights').eq(0);
		} else if ($element.siblings('.gadgets-markrights').length) {
			$sups = $element.parents('li').find('.gadgets-markrights').eq(0);
		} else {
			$sups = $('<span>').addClass('gadgets-markrights');
			$element.after($sups);
		}

		for (const group of uniqueArray(groups)) {
			const className: string = `gadgets-markrights__${group}`;
			if ($sups.find('sup').hasClass(className)) {
				continue;
			}

			$sups.append(
				// The following classes are used here:
				// * see ../types.d.ts
				// * for more information
				$('<sup>')
					.addClass(className)
					.attr({
						alt: getMessage(group as UserRights),
						title: getMessage(group as UserRights),
					})
			);
		}
	}
};

export {appendUserRightsMark};
