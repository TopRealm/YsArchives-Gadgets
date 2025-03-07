import './Wikiplus.less';

(function Wikiplus(): void {
	const {wgAction, wgIsArticle} = mw.config.get();
	if (wgAction !== 'view' || !wgIsArticle) {
		return;
	}

	const loader = async (): Promise<void> => {
		const {'visualeditor-enable': isVeEnable} = mw.user.options.get() as Record<string, unknown>;

		/* see <https://github.com/Wikiplus/Wikiplus/issues/65> */
		if (isVeEnable) {
			await mw.loader.using('ext.visualEditor.core');
		}

		await import('./modules/index');
		await import('./resize');
	};

	void loader();
})();
