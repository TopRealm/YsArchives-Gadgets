import {isTargetSpecialPage} from './isTargetSpecialPage';

// Special crono pages where this script is enabled
const isInTargetSpecialPage = (): boolean => {
	const {wgCanonicalNamespace} = mw.config.get();
	return wgCanonicalNamespace === 'Special' && isTargetSpecialPage();
};

export {isInTargetSpecialPage};
