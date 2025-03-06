import {MwUri} from 'ext.gadget.Util';
import {getMessage} from './i18n';

const edit0 = ($body: JQuery<HTMLBodyElement>): void => {
	const $content: JQuery = $body.find('#content, #mw_content').first();
	const $span1: JQuery = $content.find('span.mw-editsection:not(.plainlinks)').first();
	if (!$span1.length) {
		return;
	}

	const $span0: JQuery = $span1.clone();
	$span0.removeClass('mw-editsection').addClass('mw-editsection-section-0');

	if ($span0.find('.easy-archive-link').length) {
		$span0.find('.easy-archive-link').remove();
	}

	const {skin} = mw.config.get();

	switch (skin) {
		case 'citizen':
			$body.find('.mw-indicators').prepend($span0);
			break;
		default:
			$body.find('#content h1#firstHeading').append($span0);
	}

	$span0.addClass('mw-editsection');

	for (const element of $span0.find('a')) {
		element.title = getMessage('Edit0');

		const {href} = element;
		let urlSearch: {
			action?: string;
			summary: string;
			section: string;
			veaction?: string;
			vesection?: string;
		} = {
			summary: '/* top */ ',
			section: '0',
		};

		if (!/&(?:ve)?section=T/.test(href)) {
			// not transcluded
		} else if (/&vesection=/.test(href)) {
			// transcluded, VE
			urlSearch = {
				...urlSearch,
				veaction: 'edit',
				vesection: '0',
			};
		} else {
			// transcluded, not VE
			urlSearch = {
				...urlSearch,
				action: 'edit',
			};
		}

		element.href = new MwUri(href).extend(urlSearch).toString();
	}
};

export {edit0};
