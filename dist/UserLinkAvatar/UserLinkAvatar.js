/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://github.com/MoegirlPediaInterfaceAdmins/MoegirlPediaInterfaceCodes/blob/master/src/gadgets/ShowAvatar/MediaWiki%3AGadget-ShowAvatar.css}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/UserLinkAvatar}
 * @license CC-BY-SA-4.0 {@link https://youshou.wiki/wiki/H:CC-BY-SA-4.0}
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

// dist/UserLinkAvatar/UserLinkAvatar.js
//! src/UserLinkAvatar/UserLinkAvatar.ts
document.querySelectorAll(".mw-userlink").forEach((item) => {
  const userName = item.textContent;
  const img = document.createElement("img");
  img.classList.add("userlink-avatar");
  img.loading = "lazy";
  img.src = "".concat(mw.config.get("wgScriptPath"), "/extensions/Avatar/avatar.php?user=").concat(userName);
  img.alt = "用户".concat(userName, "的头像");
  item.prepend(img);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1VzZXJMaW5rQXZhdGFyL1VzZXJMaW5rQXZhdGFyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgJy4vVXNlckxpbmtBdmF0YXIubGVzcyc7XG5cbi8qIGVzbGludC1kaXNhYmxlIHVuaWNvcm4vbm8tYXJyYXktZm9yLWVhY2ggKi9cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tdy11c2VybGluaycpLmZvckVhY2goKGl0ZW0pID0+IHtcblx0Y29uc3QgdXNlck5hbWUgPSBpdGVtLnRleHRDb250ZW50O1xuXHRjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblx0aW1nLmNsYXNzTGlzdC5hZGQoJ3VzZXJsaW5rLWF2YXRhcicpO1xuXHRpbWcubG9hZGluZyA9ICdsYXp5Jztcblx0aW1nLnNyYyA9IGAke213LmNvbmZpZy5nZXQoJ3dnU2NyaXB0UGF0aCcpfS9leHRlbnNpb25zL0F2YXRhci9hdmF0YXIucGhwP3VzZXI9JHt1c2VyTmFtZX1gO1xuXHRpbWcuYWx0ID0gYOeUqOaItyR7dXNlck5hbWV955qE5aS05YOPYDtcblx0aXRlbS5wcmVwZW5kKGltZyk7XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBQSxTQUFTQyxpQkFBaUIsY0FBYyxFQUFFQyxRQUFTQyxVQUFTO0FBQzNELFFBQU1DLFdBQVdELEtBQUtFO0FBQ3RCLFFBQU1DLE1BQU1OLFNBQVNPLGNBQWMsS0FBSztBQUN4Q0QsTUFBSUUsVUFBVUMsSUFBSSxpQkFBaUI7QUFDbkNILE1BQUlJLFVBQVU7QUFDZEosTUFBSUssTUFBQSxHQUFBQyxPQUFTQyxHQUFHQyxPQUFPQyxJQUFJLGNBQWMsR0FBQyxxQ0FBQSxFQUFBSCxPQUFzQ1IsUUFBUTtBQUN4RkUsTUFBSVUsTUFBQSxLQUFBSixPQUFXUixVQUFRLEtBQUE7QUFDdkJELE9BQUtjLFFBQVFYLEdBQUc7QUFDakIsQ0FBQzsiLAogICJuYW1lcyI6IFsiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvckFsbCIsICJmb3JFYWNoIiwgIml0ZW0iLCAidXNlck5hbWUiLCAidGV4dENvbnRlbnQiLCAiaW1nIiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NMaXN0IiwgImFkZCIsICJsb2FkaW5nIiwgInNyYyIsICJjb25jYXQiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJhbHQiLCAicHJlcGVuZCJdCn0K
