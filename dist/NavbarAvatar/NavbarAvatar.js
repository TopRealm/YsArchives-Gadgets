/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0|import=no}}'
 * @author 顶呱呱的阿杰 
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

// dist/NavbarAvatar/NavbarAvatar.js
//! src/NavbarAvatar/NavbarAvatar.ts
var username = mw.user.getName();
var imgsrc = "";
if (username) {
  username = username.replace(" ", "_");
  imgsrc = "".concat(mw.config.get("wgServer"), "/extensions/Avatar/avatar.php?user=").concat(username);
} else {
  imgsrc = "https://image.youshou.wiki/avatars/default/default.gif";
}
var $body = $("body");
$body.find(".citizen-ui-icon.mw-ui-icon-userAvatar.mw-ui-icon-wikimedia-userAvatar").css({
  background: "url(".concat(imgsrc, ") center / 100%")
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL05hdmJhckF2YXRhci9OYXZiYXJBdmF0YXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAnLi9OYXZiYXJBdmF0YXIubGVzcyc7XG5sZXQgdXNlcm5hbWUgPSBtdy51c2VyLmdldE5hbWUoKTtcbmxldCBpbWdzcmMgPSAnJztcbmlmICh1c2VybmFtZSkge1xuXHR1c2VybmFtZSA9IHVzZXJuYW1lLnJlcGxhY2UoJyAnLCAnXycpOyAvLyDpgb/lhY3lkI3np7DljIXlkKvnqbrmoLzml7bml6Dms5XmmL7npLrlpLTlg49cblx0aW1nc3JjID0gYCR7bXcuY29uZmlnLmdldCgnd2dTZXJ2ZXInKX0vZXh0ZW5zaW9ucy9BdmF0YXIvYXZhdGFyLnBocD91c2VyPSR7dXNlcm5hbWV9YDtcbn0gZWxzZSB7XG5cdGltZ3NyYyA9ICdodHRwczovL2ltYWdlLnlvdXNob3Uud2lraS9hdmF0YXJzL2RlZmF1bHQvZGVmYXVsdC5naWYnO1xufVxuY29uc3QgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0gJCgnYm9keScpO1xuJGJvZHkuZmluZCgnLmNpdGl6ZW4tdWktaWNvbi5tdy11aS1pY29uLXVzZXJBdmF0YXIubXctdWktaWNvbi13aWtpbWVkaWEtdXNlckF2YXRhcicpLmNzcyh7XG5cdGJhY2tncm91bmQ6IGB1cmwoJHtpbWdzcmN9KSBjZW50ZXIgLyAxMDAlYCxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsV0FBV0MsR0FBR0MsS0FBS0MsUUFBUTtBQUMvQixJQUFJQyxTQUFTO0FBQ2IsSUFBSUosVUFBVTtBQUNiQSxhQUFXQSxTQUFTSyxRQUFRLEtBQUssR0FBRztBQUNwQ0QsV0FBQSxHQUFBRSxPQUFZTCxHQUFHTSxPQUFPQyxJQUFJLFVBQVUsR0FBQyxxQ0FBQSxFQUFBRixPQUFzQ04sUUFBUTtBQUNwRixPQUFPO0FBQ05JLFdBQVM7QUFDVjtBQUNBLElBQU1LLFFBQWlDQyxFQUFFLE1BQU07QUFDL0NELE1BQU1FLEtBQUssd0VBQXdFLEVBQUVDLElBQUk7RUFDeEZDLFlBQUEsT0FBQVAsT0FBbUJGLFFBQU0saUJBQUE7QUFDMUIsQ0FBQzsiLAogICJuYW1lcyI6IFsidXNlcm5hbWUiLCAibXciLCAidXNlciIsICJnZXROYW1lIiwgImltZ3NyYyIsICJyZXBsYWNlIiwgImNvbmNhdCIsICJjb25maWciLCAiZ2V0IiwgIiRib2R5IiwgIiQiLCAiZmluZCIsICJjc3MiLCAiYmFja2dyb3VuZCJdCn0K
