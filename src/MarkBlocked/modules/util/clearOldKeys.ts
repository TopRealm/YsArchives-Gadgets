const clearOldKeys = (): void => {
	if (mw.storage.getObject('ext.gadget.MarkBlocked_oldKeysCleared')) {
		return;
	}

	for (const key in localStorage) {
		if (Object.hasOwn(localStorage, key)) {
			// eslint-disable-next-line unicorn/no-lonely-if
			if (
				key.startsWith('ext.gadget.MarkBlocked_isLocked-') ||
				key.startsWith('_EXPIRY_ext.gadget.MarkBlocked_isLocked-')
			) {
				localStorage.removeItem(key);
			}

			// if (
			// 	key.startsWith('ext.gadget.MarkBlocked_isBlocked-') ||
			// 	key.startsWith('_EXPIRY_ext.gadget.MarkBlocked_isBlocked-')
			// ) {
			// 	localStorage.removeItem(key);
			// }
		}
	}

	mw.storage.setObject('ext.gadget.MarkBlocked_oldKeysCleared', true);
};

export {clearOldKeys};
