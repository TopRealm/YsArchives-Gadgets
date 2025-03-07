import {addLink} from './addLink';

const buildLink = (oldId: number | null, diffId: number): void => {
	let link: string = '/d';
	let permaLink: string = '/wiki/Special:Diff';
	if (oldId) {
		link += `/${oldId}`;
		permaLink += `/${oldId}`;
	}
	link += `/${diffId}`;
	permaLink += `/${diffId}`;

	addLink(link, permaLink);
};

export {buildLink};
