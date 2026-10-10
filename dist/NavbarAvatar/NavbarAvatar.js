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
  background: "url(".concat(imgsrc, ") center / 100% no-repeat")
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL05hdmJhckF2YXRhci9OYXZiYXJBdmF0YXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAnLi9OYXZiYXJBdmF0YXIubGVzcyc7XG5sZXQgdXNlcm5hbWUgPSBtdy51c2VyLmdldE5hbWUoKTtcbmxldCBpbWdzcmMgPSAnJztcbmlmICh1c2VybmFtZSkge1xuXHR1c2VybmFtZSA9IHVzZXJuYW1lLnJlcGxhY2UoJyAnLCAnXycpOyAvLyDpgb/lhY3lkI3np7DljIXlkKvnqbrmoLzml7bml6Dms5XmmL7npLrlpLTlg49cblx0aW1nc3JjID0gYCR7bXcuY29uZmlnLmdldCgnd2dTZXJ2ZXInKX0vZXh0ZW5zaW9ucy9BdmF0YXIvYXZhdGFyLnBocD91c2VyPSR7dXNlcm5hbWV9YDtcbn0gZWxzZSB7XG5cdGltZ3NyYyA9ICdodHRwczovL2ltYWdlLnlvdXNob3Uud2lraS9hdmF0YXJzL2RlZmF1bHQvZGVmYXVsdC5naWYnO1xufVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWpxdWVyeS9uby1nbG9iYWwtc2VsZWN0b3JcbmNvbnN0ICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9ICQoJ2JvZHknKTtcbiRib2R5LmZpbmQoJy5jaXRpemVuLXVpLWljb24ubXctdWktaWNvbi11c2VyQXZhdGFyLm13LXVpLWljb24td2lraW1lZGlhLXVzZXJBdmF0YXInKS5jc3Moe1xuXHRiYWNrZ3JvdW5kOiBgdXJsKCR7aW1nc3JjfSkgY2VudGVyIC8gMTAwJSBuby1yZXBlYXRgLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxXQUFXQyxHQUFHQyxLQUFLQyxRQUFRO0FBQy9CLElBQUlDLFNBQVM7QUFDYixJQUFJSixVQUFVO0FBQ2JBLGFBQVdBLFNBQVNLLFFBQVEsS0FBSyxHQUFHO0FBQ3BDRCxXQUFBLEdBQUFFLE9BQVlMLEdBQUdNLE9BQU9DLElBQUksVUFBVSxHQUFDLHFDQUFBLEVBQUFGLE9BQXNDTixRQUFRO0FBQ3BGLE9BQU87QUFDTkksV0FBUztBQUNWO0FBRUEsSUFBTUssUUFBaUNDLEVBQUUsTUFBTTtBQUMvQ0QsTUFBTUUsS0FBSyx3RUFBd0UsRUFBRUMsSUFBSTtFQUN4RkMsWUFBQSxPQUFBUCxPQUFtQkYsUUFBTSwyQkFBQTtBQUMxQixDQUFDOyIsCiAgIm5hbWVzIjogWyJ1c2VybmFtZSIsICJtdyIsICJ1c2VyIiwgImdldE5hbWUiLCAiaW1nc3JjIiwgInJlcGxhY2UiLCAiY29uY2F0IiwgImNvbmZpZyIsICJnZXQiLCAiJGJvZHkiLCAiJCIsICJmaW5kIiwgImNzcyIsICJiYWNrZ3JvdW5kIl0KfQo=
