const setMwNotifyStyle = (): HTMLStyleElement => {
	const style: HTMLStyleElement = mw.loader.addStyleTag(
		'.mw-notification-area{right:unset;width:auto;max-width:20em}.mw-notification{transform:translateX(-999px)}.mw-notification-visible{transform:translateX(0)}'
	);

	style.disabled = true;

	return style;
};

export {setMwNotifyStyle};
