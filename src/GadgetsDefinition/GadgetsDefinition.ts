/**
 * @description Adds links to gadget definitions in [[MediaWiki:Gadgets-definition]] and
 * prettifies them by adding whitespace.
 * Adds anchors to gadget definitions as well as CSS to highlight them when we
 * click a link to them.
 */
// Technique gleaned from [[enwiki:fr:Utilisateur:Od1n/AddLinksGadgetsDefinition.js]].
import './GadgetsDefinition.less';
import {generateGadgetId} from './modules/util/generateGadgetId';
import {getBody} from 'ext.gadget.Util';
import {matchGadgetName} from './modules/util/matchGadgetName';
import {processGadgetDefinition} from './modules/processGadgetDefinition';

void getBody().then(function gadgetsDefinition($body: JQuery<HTMLBodyElement>): void {
	const {wgCanonicalNamespace, wgTitle} = mw.config.get();
	const isDefinitionPage: boolean = wgCanonicalNamespace === 'MediaWiki' && wgTitle === 'Gadgets-definition';
	const $parserOutput: JQuery = $body.find('.mw-parser-output');

	// Only operate on [[MediaWiki:Gadgets-definition]] when the text is visible.
	if (!isDefinitionPage || !$parserOutput.length) {
		return;
	}

	// Process gadget definitions in lists.
	for (const element of $parserOutput.find('li')) {
		// Add id so that gadget definitions can be highlighted when we click a link to them.
		const gadgetName: string = matchGadgetName(element.innerHTML);
		if (gadgetName) {
			element.id = generateGadgetId(gadgetName);
		}

		element.innerHTML = processGadgetDefinition(element.innerHTML);
	}

	// Process gadget definitions in pre tags.
	for (const element of $parserOutput.find('pre')) {
		element.innerHTML = element.innerHTML.replace(/[^\n]+/g, processGadgetDefinition);
	}
});
