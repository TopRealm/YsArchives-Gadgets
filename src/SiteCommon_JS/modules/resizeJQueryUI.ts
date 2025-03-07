const resizeJQueryUI = ($body: JQuery<HTMLBodyElement>): void => {
	$(window).on('resize', (): void => {
		const windowWidth = $(window).width();
		const $jqueryUIDialog = $body.find('.ui-dialog');
		if ($jqueryUIDialog) {
			$jqueryUIDialog.css('max-width', `calc(${windowWidth}px - 2em)`);
		}
	});
};

export {resizeJQueryUI};
