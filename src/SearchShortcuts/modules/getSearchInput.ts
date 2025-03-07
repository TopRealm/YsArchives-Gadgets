import * as OPTIONS from '../options.json';

const getSearchInput = ($body: JQuery<HTMLBodyElement>): JQuery<HTMLInputElement> => {
	const $searchInput: JQuery<HTMLInputElement> = $body.find<HTMLInputElement>(OPTIONS.searchInputSelector);

	return $searchInput;
};

export {getSearchInput};
