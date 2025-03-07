import {checkDependencies} from 'ext.gadget.Util';
import {checkRedirect} from './modules/courtesy-and-art-names';

(function toolsRedirectCourtesyAndArtNames() {
	void checkDependencies('ToolsRedirect').then(checkRedirect);
})();
