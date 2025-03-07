import {LinkSpace} from './util/LinkSpace';

const links = document.querySelectorAll('.mw-parser-output a');

for (const [index, link] of links.entries()) {
	if (!(index > 0)) {
		continue;
	}

	const beforeElement = links[index - 1];
	if (!beforeElement) {
		continue;
	}

	if (beforeElement.nextSibling === link) {
		const spacer = LinkSpace().cloneNode();
		link.before(spacer, link);
	}
}
