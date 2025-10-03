import './AwajieHide.less';

(() => {
	const domList = document.querySelectorAll('.wm-AwajieHide');
	const domobj: Record<string, HTMLElement> = {};
	const temp = document.createElement('div');

	const ESCFun = (htmlStr: string) => {
		temp.innerHTML = htmlStr;
		return temp.textContent;
	};
	const HiddenSettings = (id: string, valuepx = false) => {
		const currentItem = domobj[id];
		if (!currentItem) return;

		const HideContent = currentItem.querySelector('.wm-AwajieHide > .wm-AwajieHide-content') as HTMLElement;
		if (!HideContent) return;

		if (valuepx) {
			HideContent.style.height = 'auto';
			const HideContentHeight = HideContent.clientHeight;
			HideContent.style.height = '0px';
			void window.getComputedStyle(HideContent).height;
			HideContent.style.height = `${HideContentHeight}px`;
		} else {
			HideContent.style.height = '0px';
		}
		let parent = currentItem.parentElement;
		while (parent) {
			const parentHide = parent.closest('.wm-AwajieHide');
			if (parentHide) {
				const parentContent = parentHide.querySelector(
					'.wm-AwajieHide > .wm-AwajieHide-content'
				) as HTMLElement;
				if (parentContent && parentContent.style.height !== '0px') {
					parentContent.style.height = 'auto';
					setTimeout(() => {
						const ParentContentHeight = parentContent.clientHeight;
						parentContent.style.height = `${ParentContentHeight}px`;
					}, 500);
				}
			}
			parent = parent.parentElement;
		}
	};
	for (let i = domList.length - 1; i >= 0; i--) {
		const item = domList[i] as HTMLElement;
		if (!item) continue;
		item.dataset['item'] = String(i);
		domobj[String(i)] = item;
		const HideTitle = item.querySelector('.wm-AwajieHide > .wm-AwajieHide-title');
		const HideContent = item.querySelector('.wm-AwajieHide > .wm-AwajieHide-content') as HTMLElement;
		const expandtext = ESCFun(item.dataset['expandtext'] || '展开');
		const collapsetext = ESCFun(item.dataset['collapsetext'] || '收起');
		const show = item.dataset['show'] || 'hide';

		if (!HideTitle || !HideContent) continue;

		HideContent.style.height = show === 'hide' && show ? '0px' : `${HideContent.clientHeight}px`;

		const newBtn = document.createElement('button');
		newBtn.className = 'awajie-hide-btn';
		newBtn.innerHTML = `[<span style="color: var(--color-progressive, #36c);">${show === 'hide' ? expandtext : collapsetext}</span>]`;
		newBtn.addEventListener('click', (e) => {
			e.stopPropagation();
			const newBtnSpan = newBtn.querySelector('span');
			if (!newBtnSpan) return;
			newBtnSpan.textContent = newBtnSpan.innerHTML === expandtext ? collapsetext : expandtext;
			HiddenSettings(item.dataset['item'] || '', newBtnSpan.innerHTML !== expandtext);
		});
		HideTitle.append(newBtn);
	}
})();
