import {userIsInGroup} from 'ext.gadget.Util';

const replaceRandom = ($body: JQuery<HTMLBodyElement>) => {
	const {wgWikiID} = mw.config.get();
	if (wgWikiID !== 'wiki-ysy') {
		return;
	}

	if (
		!userIsInGroup(['rnrsverify-confirmed', 'rnrsverify-exempt', 'steward', 'qiuwen', 'confirmed', 'autoconfirmed'])
	) {
		return;
	}

	const $randomPageLink = $body.find('#n-randompage a');
	$randomPageLink.attr('href', '/wiki/Special:RandomPage');
};

export {replaceRandom};
