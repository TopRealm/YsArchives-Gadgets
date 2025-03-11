import {libHeader, searchInjection} from './modules/index-header';
import libSummary from './modules/summary';

(async () => {
	libHeader();
	searchInjection();
	await libSummary();
})();
