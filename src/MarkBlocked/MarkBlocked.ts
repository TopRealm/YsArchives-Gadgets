import {addHook} from './modules/addHook';
import {clearOldKeys} from './modules/util/clearOldKeys';

if (!['edit', 'submit'].includes(mw.config.get('wgAction'))) {
	addHook();
}

// add a one-time function to clear old localStorage keys
if (!mw.storage.getObject('ext.gadget.MarkBlocked_oldKeysCleared')) {
	void clearOldKeys();
}
