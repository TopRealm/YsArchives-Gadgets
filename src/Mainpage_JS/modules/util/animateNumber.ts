/*
 * @coding: UTF-8
 * @Author: AwAjie
 * @Date: 2025-03-01 01:01:55
 */
const animateNumber = function (start: number, end: number, duration: number, element: HTMLElement): void {
	let startTime: number | null = null;

	const update = (currentTime: DOMHighResTimeStamp): void => {
		startTime ||= currentTime;
		const timeElapsed = currentTime - startTime;
		// 线性原始进度 0~1
		const linearProgress = Math.min(timeElapsed / duration, 1);
		// 使用 ease-out（cubic）缓动：p' = 1 - (1 - p)^3，使前期更快，后期减速
		const easedProgress = 1 - (1 - linearProgress) ** 3;
		const currentNumber = Math.floor(easedProgress * (end - start) + start);

		// 千分位格式化显示（使用浏览器本地化规则）
		element.textContent = currentNumber.toLocaleString();

		if (linearProgress < 1) {
			requestAnimationFrame(update);
		}
	};

	requestAnimationFrame(update);
};

export default animateNumber;
