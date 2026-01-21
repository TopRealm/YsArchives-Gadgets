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

	if (
		link.classList.contains('mw-file-description') ||
		link.classList.contains('mw-file-source') ||
		beforeElement.classList.contains('mw-file-description') ||
		beforeElement.classList.contains('mw-file-source') ||
		link.querySelector('img') ||
		beforeElement.querySelector('img')
	) {
		continue;
	}

	if (beforeElement.nextSibling === link) {
		const spacer = LinkSpace().cloneNode();
		link.before(spacer);
	}
}
