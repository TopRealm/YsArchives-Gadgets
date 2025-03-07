import {addKeyDownListener} from './modules/addKeyDownListener';
import {getBody} from 'ext.gadget.Util';
import {getSearchInput} from './modules/getSearchInput';

void getBody().then(function searchShortcuts($body: JQuery<HTMLBodyElement>): void {
	const $searchInput: JQuery<HTMLInputElement> = getSearchInput($body);
	if (!$searchInput.length) {
		return;
	}

	addKeyDownListener($searchInput);
});
