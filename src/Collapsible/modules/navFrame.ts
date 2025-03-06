const navFrame = ($content: JQuery): void => {
	// 删除 NavFrame 元素自带的折叠。
	for (const element of $content.find<HTMLSpanElement>('.NavToggle, .toggleShow, .toggleHide, .NavEnd')) {
		element.remove();
	}

	// 为 NavFrame 元素添加 collapsible。
	for (const element of $content.find<HTMLDivElement>('.NavFrame, .Boxmerge')) {
		if (!element.classList.contains('collapsible')) {
			element.classList.add('collapsible');
		}

		if (!element.classList.contains('Boxmerge')) {
			element.classList.replace('Boxmerge', 'NavFrame');
		}
	}

	// 如果 NavContent 或 NavPic 元素被隐藏，则给父元素 NavFrame 添加 collapsed。
	for (const element of $content.find<HTMLDivElement>('.NavContent, .NavPic')) {
		if (element.style.display !== 'none') {
			continue;
		}

		if (element.parentElement && element.parentElement.classList.contains('NavFrame')) {
			element.parentElement.classList.add('collapsed');
		}
	}
};

export {navFrame};
