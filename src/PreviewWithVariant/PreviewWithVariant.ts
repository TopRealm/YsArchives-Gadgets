import {processWikiEditor} from './modules/processWikiEditor';

(function previewWithVariants(): void {
	mw.hook('wikipage.editform').add(($editForm): void => {
		processWikiEditor($editForm);
	});
})();
