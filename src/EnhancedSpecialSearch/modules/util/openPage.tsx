import React from 'ext.gadget.JSX';

const openPage = (url: string): void => {
	const element = (<a href={url} target="_blank" rel="noopener noreferrer" />) as HTMLAnchorElement;

	element.click();
};

export {openPage};
