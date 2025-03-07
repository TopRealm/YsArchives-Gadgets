import {checkDependencies} from 'ext.gadget.Util';
import {checkRedirect} from './modules/opt-bolds';

(function toolsRedirectCourtesyAndArtNames() {
	void checkDependencies('ToolsRedirect').then(checkRedirect);
})();
