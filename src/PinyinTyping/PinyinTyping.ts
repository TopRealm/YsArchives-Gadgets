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
	// Support either finding an element by explicit ID or by class name
	const $targets = $body.find('#pinyin-typing, .pinyin-typing');

	$targets.each((_, elem) => {
		if (elem.classList.contains('pinyin-typing-container')) {
			return; // already processed
		}

		const targetText = elem.textContent?.trim() ?? '';
		if (targetText !== '') {
			// Apply a container class just in case the wrapper needs styling later
			elem.classList.add('pinyin-typing-container');
			// Remove text immediately to prevent showing the full text before the effect starts
			elem.replaceChildren();
			startTyping(elem, targetText);
		}
	});
});
