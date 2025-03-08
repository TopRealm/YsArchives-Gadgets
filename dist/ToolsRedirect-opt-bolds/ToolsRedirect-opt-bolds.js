/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-ToolsRedirect-opt-bolds.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/ToolsRedirect-opt-bolds}
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
 */
/**
 * +------------------------------------------------------------+
 * |            === WARNING: GLOBAL GADGET FILE ===             |
 * +------------------------------------------------------------+
 * |       All changes should be made in the repository,        |
 * |                otherwise they will be lost.                |
 * +------------------------------------------------------------+
 * |        Changes to this page may affect many users.         |
 * | Please discuss changes by opening an issue before editing. |
 * +------------------------------------------------------------+
 */
/* <nowiki> */

(() => {

"use strict";

// dist/ToolsRedirect-opt-bolds/ToolsRedirect-opt-bolds.js
//! src/ToolsRedirect-opt-bolds/ToolsRedirect-opt-bolds.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/ToolsRedirect-opt-bolds/modules/opt-bolds.ts
var import_ext_gadget = require("ext.gadget.ToolsRedirect");
var checkRedirect = () => {
  (0, import_ext_gadget.findRedirectBySelector)("div#mw-content-text p > b");
};
//! src/ToolsRedirect-opt-bolds/ToolsRedirect-opt-bolds.ts
(function toolsRedirectCourtesyAndArtNames() {
  void (0, import_ext_gadget2.checkDependencies)("ToolsRedirect").then(checkRedirect);
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL1Rvb2xzUmVkaXJlY3Qtb3B0LWJvbGRzL1Rvb2xzUmVkaXJlY3Qtb3B0LWJvbGRzLnRzIiwgIi4uLy4uL3NyYy9Ub29sc1JlZGlyZWN0LW9wdC1ib2xkcy9tb2R1bGVzL29wdC1ib2xkcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtjaGVja0RlcGVuZGVuY2llc30gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Y2hlY2tSZWRpcmVjdH0gZnJvbSAnLi9tb2R1bGVzL29wdC1ib2xkcyc7XG5cbihmdW5jdGlvbiB0b29sc1JlZGlyZWN0Q291cnRlc3lBbmRBcnROYW1lcygpIHtcblx0dm9pZCBjaGVja0RlcGVuZGVuY2llcygnVG9vbHNSZWRpcmVjdCcpLnRoZW4oY2hlY2tSZWRpcmVjdCk7XG59KSgpO1xuIiwgImltcG9ydCB7ZmluZFJlZGlyZWN0QnlTZWxlY3Rvcn0gZnJvbSAnZXh0LmdhZGdldC5Ub29sc1JlZGlyZWN0JztcblxuY29uc3QgY2hlY2tSZWRpcmVjdCA9ICgpOiB2b2lkID0+IHtcblx0ZmluZFJlZGlyZWN0QnlTZWxlY3RvcignZGl2I213LWNvbnRlbnQtdGV4dCBwID4gYicpO1xufTtcblxuZXhwb3J0IHtjaGVja1JlZGlyZWN0fTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFnQ0MsUUFBQSxpQkFBQTs7QUNBaEMsSUFBQUMsb0JBQXFDRCxRQUFBLDBCQUFBO0FBRXJDLElBQU1FLGdCQUFnQkEsTUFBWTtBQUNqQyxHQUFBLEdBQUFELGtCQUFBRSx3QkFBdUIsMkJBQTJCO0FBQ25EOztDRERDLFNBQVNDLG1DQUFtQztBQUM1QyxRQUFBLEdBQUtMLG1CQUFBTSxtQkFBa0IsZUFBZSxFQUFFQyxLQUFLSixhQUFhO0FBQzNELEdBQUc7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImNoZWNrUmVkaXJlY3QiLCAiZmluZFJlZGlyZWN0QnlTZWxlY3RvciIsICJ0b29sc1JlZGlyZWN0Q291cnRlc3lBbmRBcnROYW1lcyIsICJjaGVja0RlcGVuZGVuY2llcyIsICJ0aGVuIl0KfQo=
