import {addHook} from './modules/addHook';

if (!['edit', 'submit'].includes(mw.config.get('wgAction'))) {
	addHook();
}
