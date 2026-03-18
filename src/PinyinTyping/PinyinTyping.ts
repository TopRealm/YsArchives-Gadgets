import Typewriter, {type Config} from './Typewriter';

(() => {
	const typeing = document.querySelector<HTMLElement>('#typeing');
	const t = document.querySelectorAll('.to3rd-item');
	if (!typeing) return;

	const list = [];
	for (const item of t) {
		list.push(item.textContent);
	}

	let config = {};
	try {
		const domdatalist = typeing.dataset['list'] ?? '';
		if (domdatalist) {
			const datalist = JSON.parse(domdatalist) as string[];
			if (Array.isArray(datalist)) {
				list.push(...datalist);
			}
		}
	} catch (error) {
		console.error('Failed to parse list data', error);
	}

	try {
		const domdataconfig = typeing.dataset['config'] ?? '';
		config = domdataconfig ? (JSON.parse(domdataconfig) as Config) : {};
	} catch (error) {
		console.error('Failed to parse config data', error);
		config = {};
	}

	if (!list.length) return;

	const typewriter = new Typewriter(typeing, {
		...config,
		list,
	});
	typewriter.draw();
})();
