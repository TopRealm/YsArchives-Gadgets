import {MwUri} from 'ext.gadget.Util';
import {getMessage} from './i18n';
import {toastify} from 'ext.gadget.Toastify';

const redirect = (nameSpace: string, pageName: string): void => {
	toastify(
		{
			text: getMessage('Redirecting to').replace('$1', `${nameSpace}:${pageName}`),
			duration: -1,
		},
		'info'
	);

	const {wgScript} = mw.config.get();
	const href: string = new MwUri(wgScript)
		.extend({
			search: `${nameSpace}:${pageName}`,
		})
		.toString();
	location.href = href;
};

export {redirect};
