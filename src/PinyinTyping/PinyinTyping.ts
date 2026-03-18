import {delay, getBody, initMwApi} from 'ext.gadget.Util';
import {pinyin} from 'pinyin-pro';

type ParseResponse = {
	parse?: {
		text?: string;
	};
};

const api = initMwApi('PinyinTyping/To3RD');

const isChinese = (char: string): boolean => {
	return /[\u4e00-\u9fa5]/.test(char);
};

const startTyping = (element: HTMLElement, targetText: string): void => {
	let currentIndex = 0;

	// Clear and initialize the typing container right before starting
	element.innerHTML = '<span class="pinyin-typing-output"></span><span class="pinyin-typing-cursor"></span>';
	const outputElement = element.querySelector('.pinyin-typing-output') as HTMLElement;

	const typeCharacter = async (): Promise<void> => {
		if (currentIndex < targetText.length) {
			const char = targetText[currentIndex];

			if (char && isChinese(char)) {
				// Get the pinyin string without tone
				const py = pinyin(char, {toneType: 'none', type: 'array'})[0] || '';
				let currentPinyin = '';

				// 1. Type letters one by one
				for (const element_ of py) {
					currentPinyin += element_;
					outputElement.innerHTML = `${targetText.slice(0, Math.max(0, currentIndex))}<span class="pinyin-typing-ime-text">${currentPinyin}</span>`;
					await delay(Math.random() * 30 + 30);
				}

				// 2. Pause to simulate IME word selection
				await delay(100);

				// 3. Replace with the Chinese character
				outputElement.innerHTML = targetText.slice(0, Math.max(0, currentIndex + 1));
			} else {
				// Non-Chinese characters are typed directly
				outputElement.innerHTML = targetText.slice(0, Math.max(0, currentIndex + 1));
			}

			currentIndex++;

			// Random delay for the next character
			let nextDelay = isChinese(char ?? '') ? Math.random() * 80 + 80 : Math.random() * 40 + 30;
			if (/[。？！，.,!?]/.test(char ?? '')) {
				nextDelay += 250; // Longer pause after punctuation
			}

			window.setTimeout(() => {
				void typeCharacter();
			}, nextDelay);
		}
	};

	void typeCharacter();
};

const buildTo3rdItemsFromElements = (elements: HTMLElement[]): HTMLElement[] => {
	return elements.map((element) => {
		const item = document.createElement('div');
		item.className = 'to3rd-item';
		item.innerHTML = element.innerHTML;
		return item;
	});
};

const extractTo3rdItems = (html: string): HTMLElement[] => {
	const wrapper = document.createElement('div');
	wrapper.innerHTML = html;

	const existingItems = [...wrapper.querySelectorAll<HTMLElement>('.to3rd-item')];
	if (existingItems.length > 0) {
		return existingItems;
	}

	const listItems = [...wrapper.querySelectorAll<HTMLLIElement>('li')];
	if (listItems.length > 0) {
		return buildTo3rdItemsFromElements(listItems);
	}

	const paragraphs = [...wrapper.querySelectorAll<HTMLParagraphElement>('p')];
	if (paragraphs.length > 0) {
		return buildTo3rdItemsFromElements(paragraphs);
	}

	const text = wrapper.textContent?.trim();
	if (!text) {
		return [];
	}

	const singleItem = document.createElement('div');
	singleItem.className = 'to3rd-item';
	singleItem.textContent = text;
	return [singleItem];
};

const fetchTo3rdItems = async (pageTitle: string): Promise<HTMLElement[]> => {
	try {
		const response = (await api.get({
			action: 'parse',
			format: 'json',
			formatversion: '2',
			prop: 'text',
			page: pageTitle,
			uselang: mw.config.get('wgUserLanguage'),
			variant: mw.config.get('wgUserLanguage'),
			smaxage: 600,
			maxage: 600,
		})) as ParseResponse;

		const html = response?.parse?.text ?? '';
		if (!html) {
			return [];
		}

		return extractTo3rdItems(html);
	} catch (error) {
		console.error('[PinyinTyping] To3RD fetch error:', error);
		return [];
	}
};

const getTo3rdInterval = ($container: JQuery): number => {
	const interval = Number($container.data('to3rd-interval'));
	if (Number.isFinite(interval) && interval > 0) {
		return interval;
	}
	return 5000;
};

const startTo3rdRotation = ($container: JQuery): void => {
	const $items = $container.find('.to3rd-item');
	if ($items.length === 0) return;

	let currentIndex = Math.floor(Math.random() * $items.length);
	$items.removeClass('to3rd-active').css('opacity', 0);
	$items.eq(currentIndex).addClass('to3rd-active').css('opacity', 1);

	if ($items.length <= 1) return;

	const interval = getTo3rdInterval($container);
	setInterval(() => {
		$items.eq(currentIndex).removeClass('to3rd-active').css('opacity', 0);
		currentIndex = (currentIndex + 1) % $items.length;
		$items.eq(currentIndex).addClass('to3rd-active').css('opacity', 1);
	}, interval);
};

const initTo3rdContainer = async ($container: JQuery): Promise<void> => {
	if ($container.hasClass('to3rd-initialized')) {
		return;
	}
	$container.addClass('to3rd-initialized');

	const pageTitle = ($container.data('to3rd-page') as string | undefined)?.trim();
	if (pageTitle) {
		const items = await fetchTo3rdItems(pageTitle);
		if (items.length > 0) {
			$container.empty();
			for (const item of items) {
				if (!item.classList.contains('to3rd-item')) {
					item.classList.add('to3rd-item');
				}
				$container.append(item);
			}
		}
	}

	startTo3rdRotation($container);
};

void getBody().then(async ($body: JQuery<HTMLElement>): Promise<void> => {
	// 1. 拼音打字功能
	const $targets = $body.find('#pinyin-typing, .pinyin-typing');
	$targets.each((_, elem) => {
		if (elem.classList.contains('pinyin-typing-container')) {
			return; // already processed
		}
		const targetText = elem.textContent?.trim() ?? '';
		if (targetText !== '') {
			elem.classList.add('pinyin-typing-container');
			elem.replaceChildren();
			startTyping(elem, targetText);
		}
	});

	// 2. 全站公告式显隐轮播功能
	// 支持 .to3rd-container 结构，可通过 data-to3rd-page 异步加载
	const to3rdTasks: Promise<void>[] = [];
	$body.find('.to3rd-container').each((_, element) => {
		to3rdTasks.push(initTo3rdContainer($(element)));
	});
	await Promise.all(to3rdTasks);
});
