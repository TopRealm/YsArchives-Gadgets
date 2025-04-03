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
  const href = new import_ext_gadget2.MwUri(wgScript).extend({
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0Z1bGx3aWR0aFNlYXJjaEZpeC9tb2R1bGVzL3JlZGlyZWN0LnRzIiwgInNyYy9GdWxsd2lkdGhTZWFyY2hGaXgvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9GdWxsd2lkdGhTZWFyY2hGaXgvRnVsbHdpZHRoU2VhcmNoRml4LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge013VXJpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmNvbnN0IHJlZGlyZWN0ID0gKG5hbWVTcGFjZTogc3RyaW5nLCBwYWdlTmFtZTogc3RyaW5nKTogdm9pZCA9PiB7XG5cdHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ1JlZGlyZWN0aW5nIHRvJykucmVwbGFjZSgnJDEnLCBgJHtuYW1lU3BhY2V9OiR7cGFnZU5hbWV9YCksXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRjb25zdCB7d2dTY3JpcHR9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBocmVmOiBzdHJpbmcgPSBuZXcgTXdVcmkod2dTY3JpcHQpXG5cdFx0LmV4dGVuZCh7XG5cdFx0XHRzZWFyY2g6IGAke25hbWVTcGFjZX06JHtwYWdlTmFtZX1gLFxuXHRcdH0pXG5cdFx0LnRvU3RyaW5nKCk7XG5cdGxvY2F0aW9uLmhyZWYgPSBocmVmO1xufTtcblxuZXhwb3J0IHtyZWRpcmVjdH07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdSZWRpcmVjdGluZyB0byc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUmVkaXJlY3RpbmcgdG8gJDEnLFxuXHRcdFx0amE6ICfjgIwkMeOAjeOBq+ODquODgOOCpOODrOOCr+ODiOS4rScsXG5cdFx0XHQnemgtaGFucyc6ICfmraPlnKjph43lrprlkJHoh7PigJwkMeKAnScsXG5cdFx0XHQnemgtaGFudCc6ICfmraPlnKjph43mlrDlsI7lkJHoh7PigJwkMeKAnScsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7cmVkaXJlY3R9IGZyb20gJy4vbW9kdWxlcy9yZWRpcmVjdCc7XG5cbihmdW5jdGlvbiBmdWxsd2lkdGhTZWFyY2hGaXgoKTogdm9pZCB7XG5cdGNvbnN0IFVSTF9GVUxMVEVYVDogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnZnVsbHRleHQnKTtcblx0Y29uc3QgVVJMX1NFQVJDSDogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnc2VhcmNoJyk7XG5cblx0Ly8gZG9uJ3QgYmUgdG9vIGFnZ3Jlc2l2ZS4ganVzdCBmaXggc29tZSBvYnZpb3VzIHR5cG9zXG5cdGlmIChVUkxfRlVMTFRFWFQgfHwgIVVSTF9TRUFSQ0gpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBuYW1lc3BhY2UgbmFtZXNcblx0Y29uc3QgY29sb25JbmRleDogbnVtYmVyID0gVVJMX1NFQVJDSC5pbmRleE9mKCfvvJonKTtcblx0aWYgKGNvbG9uSW5kZXggPT09IC0xKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gaWYgbmFtZXNwYWNlIGlzIHZhbGlkXG5cdGNvbnN0IG5hbWVTcGFjZTogc3RyaW5nID0gVVJMX1NFQVJDSC5zbGljZSgwLCBNYXRoLm1heCgwLCBjb2xvbkluZGV4KSk7XG5cdGNvbnN0IHt3Z05hbWVzcGFjZUlkc30gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmICghd2dOYW1lc3BhY2VJZHNbbmFtZVNwYWNlLnRvTG93ZXJDYXNlKCldKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcGFnZU5hbWU6IHN0cmluZyA9IFVSTF9TRUFSQ0guc2xpY2UoTWF0aC5tYXgoMCwgY29sb25JbmRleCArIDEpKTtcblxuXHRyZWRpcmVjdChuYW1lU3BhY2UsIHBhZ2VOYW1lKTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBb0JDLFFBQUEsaUJBQUE7O0FDQXBCLElBQUFDLG9CQUF1QkQsUUFBQSxpQkFBQTtBQUV2QixJQUFNRSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOLG1CQUFBLEdBQWtCRCxrQkFBQUUsVUFBUztNQUMxQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1DLGVBQWVKLGdCQUFnQjtBQUVyQyxJQUFNSyxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBRGZBLElBQUFDLHFCQUF1QlQsUUFBQSxxQkFBQTtBQUV2QixJQUFNVSxXQUFXQSxDQUFDQyxXQUFtQkMsYUFBMkI7QUFDL0QsR0FBQSxHQUFBSCxtQkFBQUksVUFDQztJQUNDQyxNQUFNUCxXQUFXLGdCQUFnQixFQUFFUSxRQUFRLE1BQUEsR0FBQUMsT0FBU0wsV0FBUyxHQUFBLEVBQUFLLE9BQUlKLFFBQVEsQ0FBRTtJQUMzRUssVUFBVTtFQUNYLEdBQ0EsTUFDRDtBQUVBLFFBQU07SUFBQ0M7RUFBUSxJQUFJQyxHQUFHQyxPQUFPQyxJQUFJO0FBQ2pDLFFBQU1DLE9BQWUsSUFBSXZCLG1CQUFBd0IsTUFBTUwsUUFBUSxFQUNyQ00sT0FBTztJQUNQQyxRQUFBLEdBQUFULE9BQVdMLFdBQVMsR0FBQSxFQUFBSyxPQUFJSixRQUFRO0VBQ2pDLENBQUMsRUFDQWMsU0FBUztBQUNYQyxXQUFTTCxPQUFPQTtBQUNqQjs7Q0VsQkMsU0FBU00scUJBQTJCO0FBQ3BDLFFBQU1DLGVBQThCVixHQUFHVyxLQUFLQyxjQUFjLFVBQVU7QUFDcEUsUUFBTUMsYUFBNEJiLEdBQUdXLEtBQUtDLGNBQWMsUUFBUTtBQUdoRSxNQUFJRixnQkFBZ0IsQ0FBQ0csWUFBWTtBQUNoQztFQUNEO0FBR0EsUUFBTUMsYUFBcUJELFdBQVdFLFFBQVEsR0FBRztBQUNqRCxNQUFJRCxlQUFlLElBQUk7QUFDdEI7RUFDRDtBQUdBLFFBQU10QixZQUFvQnFCLFdBQVdHLE1BQU0sR0FBR0MsS0FBS0MsSUFBSSxHQUFHSixVQUFVLENBQUM7QUFDckUsUUFBTTtJQUFDSztFQUFjLElBQUluQixHQUFHQyxPQUFPQyxJQUFJO0FBQ3ZDLE1BQUksQ0FBQ2lCLGVBQWUzQixVQUFVNEIsWUFBWSxDQUFDLEdBQUc7QUFDN0M7RUFDRDtBQUVBLFFBQU0zQixXQUFtQm9CLFdBQVdHLE1BQU1DLEtBQUtDLElBQUksR0FBR0osYUFBYSxDQUFDLENBQUM7QUFFckV2QixXQUFTQyxXQUFXQyxRQUFRO0FBQzdCLEdBQUc7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgInJlZGlyZWN0IiwgIm5hbWVTcGFjZSIsICJwYWdlTmFtZSIsICJ0b2FzdGlmeSIsICJ0ZXh0IiwgInJlcGxhY2UiLCAiY29uY2F0IiwgImR1cmF0aW9uIiwgIndnU2NyaXB0IiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiaHJlZiIsICJNd1VyaSIsICJleHRlbmQiLCAic2VhcmNoIiwgInRvU3RyaW5nIiwgImxvY2F0aW9uIiwgImZ1bGx3aWR0aFNlYXJjaEZpeCIsICJVUkxfRlVMTFRFWFQiLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgIlVSTF9TRUFSQ0giLCAiY29sb25JbmRleCIsICJpbmRleE9mIiwgInNsaWNlIiwgIk1hdGgiLCAibWF4IiwgIndnTmFtZXNwYWNlSWRzIiwgInRvTG93ZXJDYXNlIl0KfQo=
