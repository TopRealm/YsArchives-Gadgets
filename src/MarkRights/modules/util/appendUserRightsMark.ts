import type {UserRights} from '../types';
import {getMessage} from '../i18n';
import {uniqueArray} from 'ext.gadget.Util';

const appendUserRightsMark = (
	userLinks: Record<string, JQuery<HTMLAnchorElement>[]>,
	userGroups: Record<string, string[]>
): void => {
	for (const [username, $links] of Object.entries(userLinks)) {
		userGroups ??= {};
		const groups = uniqueArray(userGroups[username] ?? []);

		for (const $element of $links) {
			let $sups: JQuery;
			if ($element.parents('li').find('.gadgets-markrights').length) {
				$sups = $element.siblings('.gadgets-markrights').eq(0);
			} else if ($element.siblings('.gadgets-markrights').length) {
				$sups = $element.parents('li').find('.gadgets-markrights').eq(0);
			} else {
				$sups = $('<span>').addClass('gadgets-markrights');
				$element.after($sups);
			}

			for (const group of groups) {
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
	}
};

export {appendUserRightsMark};
