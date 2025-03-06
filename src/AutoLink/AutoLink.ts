import {type TargetElements, getTargetElements} from './modules/util/getTargetElements';
import {getBody} from 'ext.gadget.Util';
import {isInTargetSpecialPage} from './modules/util/isInTargetSpecialPage';
import {processElement} from './modules/processElement';

void getBody().then(function autoLink($body: JQuery<HTMLBodyElement>): void {
	if (!isInTargetSpecialPage()) {
		return; // Disabled in the other special pages
	}

	const targetElements: TargetElements = getTargetElements($body);

	processElement(targetElements);
});
