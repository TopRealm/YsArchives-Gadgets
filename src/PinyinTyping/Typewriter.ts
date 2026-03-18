import {pinyin} from 'pinyin-pro';

export type Config = {
	list?: string[];
	speed?: number;
	pinyinspeed?: number;
	dhtime?: number;
	delay?: number;
	tail?: string;
	thispage?: boolean;
};

export default class Typewriter {
	dom: HTMLElement;
	rdom: HTMLElement;
	domAnimation: Animation;
	i: number;
	list: string[];
	speed: number;
	pinyinspeed: number;
	delay: number;
	Animationtime: number;
	aChiefOfStaff: number;
	pinyinStatus: boolean;
	pinyinIndex: number;
	pinyindom: HTMLElement;
	tail: string;
	tailDom: HTMLElement;

	constructor(dom: HTMLElement, config: Config) {
		this.dom = dom;

		this.Animationtime = config.dhtime ?? 5000;

		this.rdom = document.createElement('span');
		this.rdom.classList.add('typeing-text');
		this.dom.append(this.rdom);
		this.domAnimation = this.dom.animate([{opacity: 1}, {opacity: 0}], this.Animationtime);
		this.domAnimation.pause();
		this.domAnimation.onfinish = () => {
			this.rdom.textContent = '';
			this.domAnimation.pause();
			this.pinyindom.textContent = '';
			this.draw();
		};

		this.pinyindom = document.createElement('span');
		this.pinyindom.classList.add('typeing-pinyin');
		this.dom.append(this.pinyindom);

		this.tail = config.tail ?? '';
		this.tailDom = document.createElement('span');
		this.tailDom.classList.add('typeing-tail');
		this.tailDom.textContent = this.tail;
		this.dom.append(this.tailDom);

		this.list = config.list ?? [];
		this.speed = config.speed ?? 100;
		this.pinyinspeed = config.pinyinspeed ?? 100;
		this.delay = config.delay ?? 2000;
		this.aChiefOfStaff = 0;
		// 当前拼音状态
		this.pinyinStatus = true;
		// 当前拼音索引
		this.pinyinIndex = 0;
		this.i = 0;
	}

	draw() {
		if (!this.list.length) return;
		const currentWord = this.list[this.aChiefOfStaff];
		if (!currentWord) return;

		if (this.i >= currentWord.length) {
			if (this.aChiefOfStaff >= this.list.length - 1) {
				this.aChiefOfStaff = 0;
			} else {
				this.aChiefOfStaff++;
			}
			this.i = 0;
			setTimeout(() => {
				this.domAnimation.play();
			}, this.delay);
		} else if (this.pinyinStatus) {
			setTimeout(() => {
				const pinyinStr = pinyin(currentWord[this.i] as string, {});
				if (this.pinyinIndex >= pinyinStr.length) {
					this.pinyinIndex = 0;
					this.pinyinStatus = false;
				} else {
					this.pinyindom.textContent += pinyinStr[this.pinyinIndex];
					this.pinyinIndex++;
				}
				this.draw();
			}, this.pinyinspeed);
		} else {
			setTimeout(() => {
				this.rdom.textContent += currentWord[this.i];
				this.pinyindom.textContent = '';
				this.i++;
				this.pinyinStatus = true;
				this.draw();
			}, this.speed);
		}
	}
}
