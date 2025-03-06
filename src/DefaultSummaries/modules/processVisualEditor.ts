import * as OPTIONS from '~/DefaultSummaries/options.json';
import {generateSummaryDropdown} from './util/generateSummaryDropdown';

const processVisualEditor = (): void => {
	// Guard against double inclusions
	if (mw.config.get(OPTIONS.configKeyVe)) {
		return;
	}

	const {target} = window.ve.init;
	const {saveDialog} = target;
	const {$saveOptions} = saveDialog;
	if (!$saveOptions.length) {
		return;
	}

	// Set guard
	mw.config.set(OPTIONS.configKeyVe, true);

	const $dropdowns: JQuery = generateSummaryDropdown(target.saveDialog.editSummaryInput.$input);

	if (!saveDialog.$element.find(`#${OPTIONS.dropdownId}`).length) {
		$saveOptions.before($dropdowns);
	}

	// Reinitialization is required for switching between VisualEditor and New Wikitext Editor (2017)
	mw.hook('ve.activationComplete').add(() => {
		if (mw.config.get(OPTIONS.configKeyVe)) {
			mw.config.set(OPTIONS.configKeyVe, false);
		}
	});
};

export {processVisualEditor};
