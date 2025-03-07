import type {QueryGlobalLocksResponse, QueryLocalAndGlobalBlocksResponse} from '../types';
import {inHours, parseTS} from './parseTime';
import {userlinkIndef, userlinkLocked, userlinkPartial, userlinkTemp} from '../MarkBlocked.module.less';
import {getMessage} from '../i18n';

/**
 * @description Callback: receive data and mark links
 */

const markGlobalLockedLinks = ({
	response,
	userLinks,
}: {
	response: QueryGlobalLocksResponse;
	userLinks: Record<string, JQuery[]>;
}): void => {
	// Global locks
	if (!response['query']?.globaluserinfo) {
		return;
	}

	const user = response['query'].globaluserinfo?.name;
	const locked = response['query'].globaluserinfo?.locked;

	if (!locked || !user) {
		return;
	}

	const tip: string = getMessage('Locked');

	const $links: JQuery[] | undefined = userLinks[user];
	if (!$links) {
		return;
	}

	const className = userlinkLocked as string;

	for (const $link of $links) {
		// The following classes are used here:
		// * see ./Markblocked.module.less
		// * for more information
		$link.addClass(className).attr('title', $link.attr('title') + tip);
	}
};

const markLocalBlocks = ({
	response,
	userLinks,
	bkip,
}: {
	response: QueryLocalAndGlobalBlocksResponse;
	userLinks: Record<string, JQuery[]>;
	bkip?: string;
}): void => {
	// Local blocks
	if (!response['query']?.blocks) {
		return;
	}

	for (const block of response['query'].blocks) {
		const isPartialBlcok: boolean = typeof block.restrictions === 'string' && block.restrictions !== ''; // Partial block

		let className: string = userlinkPartial as string;
		let blockTime: string = '';
		if (block.expiry.startsWith('in')) {
			if (!isPartialBlcok) {
				className = userlinkIndef as string;
			}
			blockTime = getMessage('infinity');
		} else {
			if (!isPartialBlcok) {
				className = userlinkTemp as string;
			}
			blockTime = inHours(parseTS(block.expiry) - parseTS(block.timestamp));
		}

		let tip: string = getMessage('Blocked')
			.replace('$1', blockTime)
			.replace('$2', block.by)
			.replace('$3', block.reason)
			.replace('$4', inHours(Date.now() - parseTS(block.timestamp)));
		tip = isPartialBlcok ? tip.replace('$5', getMessage('partial')) : tip.replace('$5', '');

		const $links: JQuery[] | undefined = userLinks[bkip ?? block.user];
		if (!$links) {
			continue;
		}

		for (const $link of $links) {
			// The following classes are used here:
			// * see ./Markblocked.module.less
			// * for more information
			$link.addClass(className).attr('title', $link.attr('title') + tip);
		}
	}
};

const markGlobalBlocks = ({
	response,
	userLinks,
	bkip,
}: {
	response: QueryLocalAndGlobalBlocksResponse;
	userLinks: Record<string, JQuery[]>;
	bkip?: string;
}): void => {
	// Global blocks
	if (!response['query']?.globalblocks) {
		return;
	}

	for (const block of response['query'].globalblocks) {
		let className: string = userlinkPartial as string;
		let blockTime: string = '';
		if (block.expiry.startsWith('in')) {
			className = userlinkIndef as string;
			blockTime = getMessage('infinity');
		} else {
			className = userlinkTemp as string;
			blockTime = inHours(parseTS(block.expiry) - parseTS(block.timestamp));
		}

		let tip: string = getMessage('Globally Blocked')
			.replace('$1', blockTime)
			.replace('$2', block.by)
			.replace('$3', block.reason)
			.replace('$4', inHours(Date.now() - parseTS(block.timestamp)));
		tip = tip.replace('$5', '');

		const $links: JQuery[] | undefined = userLinks[bkip ?? block.target];
		if (!$links) {
			continue;
		}

		for (const $link of $links) {
			// The following classes are used here:
			// * see ./Markblocked.module.less
			// * for more information
			$link.addClass(className).attr('title', $link.attr('title') + tip);
		}
	}
};

export {markGlobalLockedLinks, markLocalBlocks, markGlobalBlocks};
