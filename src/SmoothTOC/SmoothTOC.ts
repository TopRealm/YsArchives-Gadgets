import {checkA11yConfirmKey, getBody, scrollTop} from 'ext.gadget.Util';

const eventListener = (event: JQuery.ClickEvent | JQuery.KeyDownEvent): void => {
	if (!checkA11yConfirmKey(event)) {
		return;
	}

	const $element = $(event.currentTarget) as JQuery;
	const herf: string | undefined = $element.attr('href');
	if (!herf) {
		return;
	}

	const anchorOffset: JQuery.Coordinates | undefined = $(herf).offset();
	if (!anchorOffset) {
		return;
	}

	event.preventDefault();

	const {skin} = mw.config.get();
	scrollTop(skin === 'vector' ? `${anchorOffset.top}px` : `${anchorOffset.top - 60}px`);
};

void getBody().then(function smoothToc($body: JQuery<HTMLBodyElement>): void {
	setTimeout((): void => {
		for (const element of $body.find('#toc a, #p-toc a, .sidebar-toc-link')) {
			const $element: JQuery = $(element);

			$element.on('click', eventListener);
			$element.on('keydown', eventListener);
		}
	}, 0);
});
