type GetBody = () => JQuery.Thenable<JQuery<HTMLBodyElement>>;

const getBody = () => {
	return $.ready.then((): JQuery<HTMLBodyElement> => {
		// eslint-disable-next-line no-jquery/no-global-selector
		const $body: JQuery<HTMLBodyElement> = $('body');

		return $body;
	});
};

export {type GetBody, getBody};
