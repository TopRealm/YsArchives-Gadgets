import {delay, getBody} from 'ext.gadget.Util';
import {pinyin} from 'pinyin-pro';

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

void getBody().then(($body: JQuery<HTMLElement>): void => {
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
	// 支持 .to3rd-container 结构
	$('.to3rd-container').each(function () {
		const $items = $(this).find('.to3rd-item');
		if ($items.length === 0) return;

		// 初始化：随机显示一个
		let currentIndex = Math.floor(Math.random() * $items.length);
		$items.removeClass('to3rd-active').css('opacity', 0);
		$items.eq(currentIndex).addClass('to3rd-active').css('opacity', 1);

		if ($items.length <= 1) return;

		setInterval(() => {
			$items.eq(currentIndex).removeClass('to3rd-active').css('opacity', 0);
			currentIndex = (currentIndex + 1) % $items.length;
			$items.eq(currentIndex).addClass('to3rd-active').css('opacity', 1);
		}, 5000);
	});
});
