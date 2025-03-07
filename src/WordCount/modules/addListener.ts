import {wordCount} from './wordCount';

const addListener = ($body: JQuery<HTMLBodyElement>): void => {
	if ('ontouchstart' in document) {
		$body.on('touchstart touchend', {passive: true}, (): void => {
			wordCount($body);
		});
	} else {
		$body.on('mouseup keyup', (): void => {
			wordCount($body);
		});
	}
};

export {addListener};
