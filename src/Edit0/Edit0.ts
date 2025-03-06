import './Edit0.less';
import {edit0} from './modules/core';
import {getBody} from 'ext.gadget.Util';

const {wgNamespaceNumber} = mw.config.get();

if (wgNamespaceNumber >= 0) {
	void getBody().then(edit0);
}
