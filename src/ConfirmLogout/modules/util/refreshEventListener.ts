import {filterAlteredClicks} from 'ext.gadget.FilterAlteredClicks';

const refreshEventListener = ($element: JQuery, clickListener: (event: JQuery.ClickEvent) => void): void => {
	const hoverListener = (): void => {
		$element.off('click');
		$element.on('click', filterAlteredClicks(clickListener));
	};
	const hoverListenerWithDebounce: typeof hoverListener = mw.util.debounce(hoverListener, 200, true);

	$element.on('mouseover touchstart', {passive: true}, hoverListenerWithDebounce);
};

export {refreshEventListener};
