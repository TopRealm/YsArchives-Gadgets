import {getBody} from 'ext.gadget.Util';
import {processVisualEditor} from './modules/processVisualEditor';
import {processWikiEditor} from './modules/processWikiEditor';

/**
 * @description AI辅助编辑特殊声明
 */
void getBody().then(function editForm($body: JQuery<HTMLBodyElement>): void {
	mw.hook('wikipage.editform').add(($editForm): void => {
		processWikiEditor({
			$body,
			$editForm,
		});
	});

	mw.hook('ve.saveDialog.stateChanged').add((): void => {
		processVisualEditor();
	});
});
