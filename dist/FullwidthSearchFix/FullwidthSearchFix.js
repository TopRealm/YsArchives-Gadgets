/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-fullwidth-search-fix.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/FullwidthSearchFix}
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

// dist/FullwidthSearchFix/FullwidthSearchFix.js
//! src/FullwidthSearchFix/modules/redirect.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/FullwidthSearchFix/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "Redirecting to": (0, import_ext_gadget.localize)({
      en: "Redirecting to $1",
      ja: "「$1」にリダイレクト中",
      "zh-hans": "正在重定向至“$1”",
      "zh-hant": "正在重新導向至“$1”"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/FullwidthSearchFix/modules/redirect.ts
var import_ext_gadget3 = require("ext.gadget.Toastify");
var redirect = (nameSpace, pageName) => {
  (0, import_ext_gadget3.toastify)({
    text: getMessage("Redirecting to").replace("$1", "".concat(nameSpace, ":").concat(pageName)),
    duration: -1
  }, "info");
  const {
    wgScript
  } = mw.config.get();
  const href = new import_ext_gadget2.MwUri(wgScript, location.origin).extend({
    search: "".concat(nameSpace, ":").concat(pageName)
  }).toString();
  location.href = href;
};
//! src/FullwidthSearchFix/FullwidthSearchFix.ts
(function fullwidthSearchFix() {
  const URL_FULLTEXT = mw.util.getParamValue("fulltext");
  const URL_SEARCH = mw.util.getParamValue("search");
  if (URL_FULLTEXT || !URL_SEARCH) {
    return;
  }
  const colonIndex = URL_SEARCH.indexOf("：");
  if (colonIndex === -1) {
    return;
  }
  const nameSpace = URL_SEARCH.slice(0, Math.max(0, colonIndex));
  const {
    wgNamespaceIds
  } = mw.config.get();
  if (!wgNamespaceIds[nameSpace.toLowerCase()]) {
    return;
  }
  const pageName = URL_SEARCH.slice(Math.max(0, colonIndex + 1));
  redirect(nameSpace, pageName);
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0Z1bGx3aWR0aFNlYXJjaEZpeC9tb2R1bGVzL3JlZGlyZWN0LnRzIiwgInNyYy9GdWxsd2lkdGhTZWFyY2hGaXgvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9GdWxsd2lkdGhTZWFyY2hGaXgvRnVsbHdpZHRoU2VhcmNoRml4LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge013VXJpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmNvbnN0IHJlZGlyZWN0ID0gKG5hbWVTcGFjZTogc3RyaW5nLCBwYWdlTmFtZTogc3RyaW5nKTogdm9pZCA9PiB7XG5cdHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ1JlZGlyZWN0aW5nIHRvJykucmVwbGFjZSgnJDEnLCBgJHtuYW1lU3BhY2V9OiR7cGFnZU5hbWV9YCksXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRjb25zdCB7d2dTY3JpcHR9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBocmVmOiBzdHJpbmcgPSBuZXcgTXdVcmkod2dTY3JpcHQsIGxvY2F0aW9uLm9yaWdpbilcblx0XHQuZXh0ZW5kKHtcblx0XHRcdHNlYXJjaDogYCR7bmFtZVNwYWNlfToke3BhZ2VOYW1lfWAsXG5cdFx0fSlcblx0XHQudG9TdHJpbmcoKTtcblx0bG9jYXRpb24uaHJlZiA9IGhyZWY7XG59O1xuXG5leHBvcnQge3JlZGlyZWN0fTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0J1JlZGlyZWN0aW5nIHRvJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdSZWRpcmVjdGluZyB0byAkMScsXG5cdFx0XHRqYTogJ+OAjCQx44CN44Gr44Oq44OA44Kk44Os44Kv44OI5LitJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ato+WcqOmHjeWumuWQkeiHs+KAnCQx4oCdJyxcblx0XHRcdCd6aC1oYW50JzogJ+ato+WcqOmHjeaWsOWwjuWQkeiHs+KAnCQx4oCdJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtyZWRpcmVjdH0gZnJvbSAnLi9tb2R1bGVzL3JlZGlyZWN0JztcblxuKGZ1bmN0aW9uIGZ1bGx3aWR0aFNlYXJjaEZpeCgpOiB2b2lkIHtcblx0Y29uc3QgVVJMX0ZVTExURVhUOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdmdWxsdGV4dCcpO1xuXHRjb25zdCBVUkxfU0VBUkNIOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdzZWFyY2gnKTtcblxuXHQvLyBkb24ndCBiZSB0b28gYWdncmVzaXZlLiBqdXN0IGZpeCBzb21lIG9idmlvdXMgdHlwb3Ncblx0aWYgKFVSTF9GVUxMVEVYVCB8fCAhVVJMX1NFQVJDSCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIG5hbWVzcGFjZSBuYW1lc1xuXHRjb25zdCBjb2xvbkluZGV4OiBudW1iZXIgPSBVUkxfU0VBUkNILmluZGV4T2YoJ++8micpO1xuXHRpZiAoY29sb25JbmRleCA9PT0gLTEpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBpZiBuYW1lc3BhY2UgaXMgdmFsaWRcblx0Y29uc3QgbmFtZVNwYWNlOiBzdHJpbmcgPSBVUkxfU0VBUkNILnNsaWNlKDAsIE1hdGgubWF4KDAsIGNvbG9uSW5kZXgpKTtcblx0Y29uc3Qge3dnTmFtZXNwYWNlSWRzfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKCF3Z05hbWVzcGFjZUlkc1tuYW1lU3BhY2UudG9Mb3dlckNhc2UoKV0pIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwYWdlTmFtZTogc3RyaW5nID0gVVJMX1NFQVJDSC5zbGljZShNYXRoLm1heCgwLCBjb2xvbkluZGV4ICsgMSkpO1xuXG5cdHJlZGlyZWN0KG5hbWVTcGFjZSwgcGFnZU5hbWUpO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFvQkMsUUFBQSxpQkFBQTs7QUNBcEIsSUFBQUMsb0JBQXVCRCxRQUFBLGlCQUFBO0FBRXZCLElBQU1FLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ04sbUJBQUEsR0FBa0JELGtCQUFBRSxVQUFTO01BQzFCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTUMsZUFBZUosZ0JBQWdCO0FBRXJDLElBQU1LLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FEZkEsSUFBQUMscUJBQXVCVCxRQUFBLHFCQUFBO0FBRXZCLElBQU1VLFdBQVdBLENBQUNDLFdBQW1CQyxhQUEyQjtBQUMvRCxHQUFBLEdBQUFILG1CQUFBSSxVQUNDO0lBQ0NDLE1BQU1QLFdBQVcsZ0JBQWdCLEVBQUVRLFFBQVEsTUFBQSxHQUFBQyxPQUFTTCxXQUFTLEdBQUEsRUFBQUssT0FBSUosUUFBUSxDQUFFO0lBQzNFSyxVQUFVO0VBQ1gsR0FDQSxNQUNEO0FBRUEsUUFBTTtJQUFDQztFQUFRLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFDakMsUUFBTUMsT0FBZSxJQUFJdkIsbUJBQUF3QixNQUFNTCxVQUFVTSxTQUFTQyxNQUFNLEVBQ3REQyxPQUFPO0lBQ1BDLFFBQUEsR0FBQVgsT0FBV0wsV0FBUyxHQUFBLEVBQUFLLE9BQUlKLFFBQVE7RUFDakMsQ0FBQyxFQUNBZ0IsU0FBUztBQUNYSixXQUFTRixPQUFPQTtBQUNqQjs7Q0VsQkMsU0FBU08scUJBQTJCO0FBQ3BDLFFBQU1DLGVBQThCWCxHQUFHWSxLQUFLQyxjQUFjLFVBQVU7QUFDcEUsUUFBTUMsYUFBNEJkLEdBQUdZLEtBQUtDLGNBQWMsUUFBUTtBQUdoRSxNQUFJRixnQkFBZ0IsQ0FBQ0csWUFBWTtBQUNoQztFQUNEO0FBR0EsUUFBTUMsYUFBcUJELFdBQVdFLFFBQVEsR0FBRztBQUNqRCxNQUFJRCxlQUFlLElBQUk7QUFDdEI7RUFDRDtBQUdBLFFBQU12QixZQUFvQnNCLFdBQVdHLE1BQU0sR0FBR0MsS0FBS0MsSUFBSSxHQUFHSixVQUFVLENBQUM7QUFDckUsUUFBTTtJQUFDSztFQUFjLElBQUlwQixHQUFHQyxPQUFPQyxJQUFJO0FBQ3ZDLE1BQUksQ0FBQ2tCLGVBQWU1QixVQUFVNkIsWUFBWSxDQUFDLEdBQUc7QUFDN0M7RUFDRDtBQUVBLFFBQU01QixXQUFtQnFCLFdBQVdHLE1BQU1DLEtBQUtDLElBQUksR0FBR0osYUFBYSxDQUFDLENBQUM7QUFFckV4QixXQUFTQyxXQUFXQyxRQUFRO0FBQzdCLEdBQUc7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgInJlZGlyZWN0IiwgIm5hbWVTcGFjZSIsICJwYWdlTmFtZSIsICJ0b2FzdGlmeSIsICJ0ZXh0IiwgInJlcGxhY2UiLCAiY29uY2F0IiwgImR1cmF0aW9uIiwgIndnU2NyaXB0IiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiaHJlZiIsICJNd1VyaSIsICJsb2NhdGlvbiIsICJvcmlnaW4iLCAiZXh0ZW5kIiwgInNlYXJjaCIsICJ0b1N0cmluZyIsICJmdWxsd2lkdGhTZWFyY2hGaXgiLCAiVVJMX0ZVTExURVhUIiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJVUkxfU0VBUkNIIiwgImNvbG9uSW5kZXgiLCAiaW5kZXhPZiIsICJzbGljZSIsICJNYXRoIiwgIm1heCIsICJ3Z05hbWVzcGFjZUlkcyIsICJ0b0xvd2VyQ2FzZSJdCn0K
