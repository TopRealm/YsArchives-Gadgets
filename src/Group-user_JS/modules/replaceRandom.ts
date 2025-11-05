import {userIsInGroup} from 'ext.gadget.Util';

const replaceRandom = ($body: JQuery<HTMLBodyElement>) => {
	const {wgWikiID} = mw.config.get();
	if (wgWikiID !== 'zhysy') {
		return;
	}

	if (
		!userIsInGroup([
			'rnrsverify-confirmed',
			'rnrsverify-exempt',
			'steward',
			'honorary-maintainer',
			'qiuwen',
			'confirmed',
			'autoconfirmed',
		])
	) {
		return;
	}

	const $randomPageLink = $body.find('#n-randompage a');
	$randomPageLink.attr('href', '/wiki/Special:RandomPage');
};

export {replaceRandom};
