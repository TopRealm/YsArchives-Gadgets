import {ScrollDownButton, ScrollUpButton} from '../components/scrollButton';
import {changeOpacityWhenMouseEnterOrLeave} from 'ext.gadget.Util';
import {tippy} from 'ext.gadget.Tippy';

const insertElementandListener = ($body: JQuery<HTMLBodyElement>): void => {
	const onMouseEnterMouseLeave = (event: MouseEvent): void => {
		changeOpacityWhenMouseEnterOrLeave(event);
	};

	const scrollDownButton = ScrollDownButton(onMouseEnterMouseLeave);
	const scrollUpButton = ScrollUpButton(onMouseEnterMouseLeave);

	for (const element of [scrollDownButton, scrollUpButton]) {
		$body.append(element);

		tippy(element, {
			arrow: true,
			content: element.getAttribute('alt') as string,
			placement: 'left',
		});
	}

	const scrollListener = (): void => {
		let downButtonButtom: string;
		let upButtonButtom: string;

		if (
			document.querySelector('#proveit') ||
			document.querySelector('.gadget-cat_a_lot-container') ||
			document.querySelector('#gadget-word_count-tip')
		) {
			downButtonButtom = '85px';
			upButtonButtom = '127px';
		} else {
			downButtonButtom = '45px';
			upButtonButtom = '85px';
		}

		scrollDownButton.style.bottom = downButtonButtom;
		scrollUpButton.style.bottom = upButtonButtom;
	};
	const scrollListenerWithThrottle: typeof scrollListener = mw.util.throttle(scrollListener, 200);

	$(window).on('scroll selectionchange', scrollListenerWithThrottle);
};

export {insertElementandListener};
