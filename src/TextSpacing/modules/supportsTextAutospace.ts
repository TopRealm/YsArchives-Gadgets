const supportsTextAutospace = (): boolean => {
	if (typeof CSS !== 'undefined' && typeof CSS.supports === 'function') {
		if (CSS.supports('text-autospace', 'normal')) {
			return true;
		}
		return false;
	}
	return false;
};

export {supportsTextAutospace};
