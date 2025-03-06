import {expand, refarea} from '../FoldRef.module.less';
import {getMessage} from '../i18n';

// create a div, place {{Reflist}}s inside
const processElement = ($element: JQuery): void => {
	// The following classes are used here:
	// * see constant.ts
	// * for more information
	const $refFolder: JQuery = $('<div>').addClass(refarea as string);

	$refFolder.insertBefore($element);
	$element.appendTo($refFolder);

	// add an expand button at the bottom
	// The following classes are used here:
	// * see constant.ts
	// * for more information
	const $expandButton: JQuery = $('<div>')
		.addClass(expand as string)
		.text(getMessage('Expand'));
	$refFolder.after($expandButton);
};

export {processElement};
