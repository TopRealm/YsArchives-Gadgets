/* eslint-disable mediawiki/class-doc */
import {stickyheader, thead} from './StickyTableHeaders.module.less';
import {getBody} from 'ext.gadget.Util';

void getBody().then(($body: JQuery<HTMLBodyElement>): void => {
	for (const table of $body.find<HTMLTableElement>('.wikitable:not(.sortable)')) {
		const $table: JQuery<HTMLTableElement> = $(table);

		const $thead: JQuery<HTMLTableSectionElement> = $table.find('thead');
		const $trTh = $table.find('tbody > tr > th').parent<HTMLTableRowElement>().eq(0);
		const $trTd = $table.find('tbody > tr > td').parent();

		const $target: JQuery<HTMLTableSectionElement> | JQuery<HTMLTableRowElement> | null = $thead.length
			? $thead
			: $trTh.length
				? $trTh
				: null;

		if ($target && $trTd.length >= 5) {
			$table.addClass(stickyheader as string);
			$target.addClass(thead as string);
		}
	}
});
