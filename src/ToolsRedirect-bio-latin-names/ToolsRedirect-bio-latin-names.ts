import {checkDependencies} from 'ext.gadget.Util';
import {checkRedirect} from './modules/bio-latin-names';

(function toolsRedirectBioLatinNames() {
	void checkDependencies('ToolsRedirect').then(checkRedirect);
})();
