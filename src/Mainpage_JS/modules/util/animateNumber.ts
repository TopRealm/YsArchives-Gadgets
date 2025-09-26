/*
 * @coding: UTF-8
 * @Author: AwAjie
 * @Date: 2025-03-01 01:01:55
 */
const animateNumber = function (start: number, end: number, duration: number, element: HTMLElement): void {
	let startTime: number | null = null;
	let firstFrameRendered = false;

	// 初始隐藏，避免在脚本执行前看到终值；只在尚无 data-animating 时设置
	if (!element.dataset['animating']) {
		element.dataset['animating'] = 'true';
		// 不直接清空文本，保留内容供解析；通过样式隐藏
		injectHidingStyleOnce();
	}

	const update = (currentTime: DOMHighResTimeStamp): void => {
		startTime ||= currentTime;
		const timeElapsed = currentTime - startTime;
		// 线性原始进度 0~1
		const linearProgress = Math.min(timeElapsed / duration, 1);
		// 更强的 ease-out：quintic 1 - (1 - p)^5，后段更明显减速
		const easedProgress = 1 - (1 - linearProgress) ** 5;
		const currentNumber = Math.floor(easedProgress * (end - start) + start);

		// 千分位格式化显示（使用浏览器本地化规则）
		element.textContent = currentNumber.toLocaleString();

		if (!firstFrameRendered) {
			firstFrameRendered = true;
			// 首帧渲染后显示
			delete element.dataset['animating'];
		}

		if (linearProgress < 1) {
			requestAnimationFrame(update);
		}
	};

	requestAnimationFrame(update);
};

// 将隐藏样式只注入一次
let animateNumberStyleInjected = false;
const injectHidingStyleOnce = (): void => {
	if (animateNumberStyleInjected) return;
	const style = document.createElement('style');
	style.dataset['animateNumberStyle'] = 'true';
	style.textContent = '[data-animating]{visibility:hidden;}';
	document.head.append(style);
	animateNumberStyleInjected = true;
};

export default animateNumber;
