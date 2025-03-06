import {getBody} from 'ext.gadget.Util';
import {processVisualEditor} from './modules/processVisualEditor';
import {processWikiEditor} from './modules/processWikiEditor';

void getBody().then(function defaultSummaries(): void {
	mw.hook('wikipage.editform').add(($editForm): void => {
		processWikiEditor($editForm);
	});

	mw.hook('ve.saveDialog.stateChanged').add((): void => {
		processVisualEditor();
	});
});
