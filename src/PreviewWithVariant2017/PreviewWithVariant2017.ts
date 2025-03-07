import {getBody} from 'ext.gadget.Util';
import {processVisualEditor} from './modules/processVisualEditor.js';

void getBody().then(function previewWithVariants2017($body: JQuery<HTMLBodyElement>): void {
	mw.hook('ve.saveDialog.stateChanged').add((): void => {
		processVisualEditor($body);
	});
});
