/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/QuickImport}
 * @license CC-BY-SA-4.0 {@link https://youhsou.wiki/wiki/H:CC-BY-SA-4.0}
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

// dist/QuickImport/QuickImport.js
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n = 0, F = function() {
      };
      return { s: F, n: function() {
        return n >= r.length ? { done: true } : { done: false, value: r[n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = true, o = r2;
  }, f: function() {
    try {
      a || null == t.return || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    var _iterator = _createForOfIteratorHelper(__getOwnPropNames(from)), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        let key = _step.value;
        if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);
//! src/QuickImport/QuickImport.ts
var QuickImport_exports = {};
__export(QuickImport_exports, {
  api: () => api,
  detectIfFileRedirect: () => _detectIfFileRedirect,
  refreshPage: () => refreshPage
});
module.exports = __toCommonJS(QuickImport_exports);
//! src/QuickImport/modules/core.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/QuickImport/options.json
var version = "2.0";
//! src/QuickImport/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("QuickImport/".concat(version));
//! src/QuickImport/modules/core.ts
var import_ext_gadget3 = require("ext.gadget.Toastify");
var toastifyInstance = {
  hideToast: () => {
  }
};
var refreshPage = (title) => {
  toastifyInstance.hideToast();
  (0, import_ext_gadget3.toastify)({
    text: "正在刷新页面",
    duration: -1
  }, "info");
  if (title) {
    location.replace(mw.util.getUrl(title));
  } else {
    location.reload();
  }
};
var importPage = /* @__PURE__ */ (function() {
  var _ref = _asyncToGenerator(function* (pageName, isFileNS = false) {
    const iwprefix = "qwbk";
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget3.toastify)({
      text: "导入页面中：".concat(iwprefix, ":").concat(pageName),
      duration: -1
    }, "info");
    let summary = "页面文字原许可：[[cc-by-sa:4.0|CC BY-SA 4.0]]；作者请参见来源页面历史";
    if (isFileNS) {
      summary += "；文件作者请参见此页面及来源页面记载";
    }
    const params = {
      action: "import",
      format: "json",
      assignknownusers: true,
      interwikipage: pageName,
      interwikiprefix: iwprefix,
      interwikisource: iwprefix,
      summary: "［".concat(summary, "］")
    };
    const result = yield api.postWithEditToken(params);
    if (result["import"] && result["import"][0] && result["import"].revisions) {
      toastifyInstance.hideToast();
      toastifyInstance = (0, import_ext_gadget3.toastify)({
        text: "页面导入完成：".concat(pageName),
        duration: 3 * 1e3
      }, "success");
      return true;
    }
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget3.toastify)({
      text: "页面导入失败：".concat(iwprefix, ":").concat(pageName),
      duration: 3 * 1e3
    }, "warning");
    return false;
  });
  return function importPage2(_x) {
    return _ref.apply(this, arguments);
  };
})();
var uploadFile = /* @__PURE__ */ (function() {
  var _ref2 = _asyncToGenerator(function* (target, url) {
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget3.toastify)({
      text: "迁移文件中：".concat(target),
      duration: -1
    }, "info");
    const params = {
      url: url !== null && url !== void 0 ? url : "https://www.qiuwenbaike.cn/wiki/Special:Redirect/file/".concat(mw.util.rawurlencode(target)),
      action: "upload",
      format: "json",
      filename: target,
      comment: "自求闻百科迁移文件",
      ignorewarnings: true
    };
    yield api.postWithEditToken(params);
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget3.toastify)({
      text: "文件迁移完成：".concat(target),
      duration: 3 * 1e3
    }, "success");
  });
  return function uploadFile2(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
})();
var queryImageInfo = /* @__PURE__ */ (function() {
  var _ref3 = _asyncToGenerator(function* (titles) {
    const params = {
      titles,
      action: "query",
      format: "json",
      formatversion: "2",
      prop: ["imageinfo", "info"],
      iiprop: ["url"],
      redirects: true
    };
    const response = yield api.get(params);
    return response;
  });
  return function queryImageInfo2(_x4) {
    return _ref3.apply(this, arguments);
  };
})();
var _detectIfFileRedirect = /* @__PURE__ */ (function() {
  var _ref4 = _asyncToGenerator(function* (pageNames, isFileNS = false) {
    const titlesArray = (0, import_ext_gadget2.uniqueArray)((0, import_ext_gadget2.generateArray)(pageNames));
    const promises = [];
    while (titlesArray.length) {
      let titles = titlesArray.splice(0, 25);
      if (!titles.length) {
        continue;
      }
      promises[promises.length] = /* @__PURE__ */ _asyncToGenerator(function* () {
        const tos = [];
        const response = yield queryImageInfo(titles);
        if (response["query"]) {
          if (response["query"].normalized) {
            var _iterator2 = _createForOfIteratorHelper(response["query"].normalized), _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                const {
                  from,
                  to
                } = _step2.value;
                titles = titles.map((element) => {
                  return element === from ? to : element;
                });
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
          if (response["query"].pages) {
            var _iterator3 = _createForOfIteratorHelper(response["query"].pages), _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                const page1 = _step3.value;
                const title = page1.title;
                if (!page1.missing) {
                  continue;
                }
                yield importPage(title, isFileNS);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
          if (response["query"].redirects) {
            var _iterator4 = _createForOfIteratorHelper(response["query"].redirects), _step4;
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                const {
                  to
                } = _step4.value;
                tos[tos.length] = to;
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }
        }
        if (isFileNS) {
          const response2 = yield queryImageInfo(titles);
          if (response2["query"]) {
            if (response2["query"].normalized) {
              var _iterator5 = _createForOfIteratorHelper(response2["query"].normalized), _step5;
              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
                  const {
                    from,
                    to
                  } = _step5.value;
                  titles = titles.map((element) => {
                    return element === from ? to : element;
                  });
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
            }
            if (response2["query"].pages) {
              var _iterator6 = _createForOfIteratorHelper(response2["query"].pages), _step6;
              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
                  const page2 = _step6.value;
                  const title = page2.title;
                  if (page2.missing || page2.redirect) {
                    continue;
                  }
                  const isSharedFile = page2.imagerepository && page2.imagerepository !== "local";
                  const isMissingContent = (!page2.imagerepository || page2.imagerepository === "local") && (!page2.imageinfo || !page2.imageinfo.length);
                  if (isSharedFile || isMissingContent) {
                    const urlToUse = isSharedFile && page2.imageinfo && page2.imageinfo[0] ? page2.imageinfo[0].url : void 0;
                    yield uploadFile(title, urlToUse);
                  }
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }
            }
            if (response2["query"].redirects) {
              var _iterator7 = _createForOfIteratorHelper(response2["query"].redirects), _step7;
              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
                  const {
                    to
                  } = _step7.value;
                  tos[tos.length] = to;
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }
            }
          }
        }
        if (tos.length) {
          yield _detectIfFileRedirect((0, import_ext_gadget2.uniqueArray)(tos));
        }
      });
    }
    for (var _i = 0, _promises = promises; _i < _promises.length; _i++) {
      const promise = _promises[_i];
      try {
        yield promise();
      } catch {
      }
    }
  });
  return function detectIfFileRedirect(_x5) {
    return _ref4.apply(this, arguments);
  };
})();
//! src/QuickImport/QuickImport.ts
(function quickImport() {
  const {
    wgNamespaceNumber,
    wgPageName,
    wgWikiID
  } = mw.config.get();
  const redirectTextA = document.querySelector(".redirectText a");
  const isFileNS = wgNamespaceNumber === 6;
  const hasMwNoarticletext = !!document.querySelector("#mw-noarticletext");
  const iwprefix = "qwbk";
  const label = isFileNS && !hasMwNoarticletext ? iwprefix : "";
  const buttonLabel = isFileNS ? label ? "文件（".concat(label, "）") : "页面" : redirectTextA ? "重定向目标" : "页面";
  if (wgWikiID !== "zhysy" && isFileNS || wgNamespaceNumber < 0) {
    return;
  }
  const portletId = document.querySelector("#p-cactions") ? "p-cactions" : "p-tb";
  const element = mw.util.addPortletLink(portletId, "#", "导入".concat(buttonLabel), "t-import");
  if (!element) {
    return;
  }
  let wgPageName2;
  let wgPageName3;
  if (!isFileNS) {
    const disamRegExpFW = /^(.*)（(.*?)）$/;
    const matchFW = wgPageName.match(disamRegExpFW);
    const disamRegExpHW = /^(.*)[_ ]\((.*?)\)$/;
    const matchHW = wgPageName.match(disamRegExpHW);
    try {
      let rootPageName, disamKey;
      if (matchFW) {
        [, rootPageName, disamKey] = matchFW;
      } else if (matchHW) {
        [, rootPageName, disamKey] = matchHW;
      }
      if (rootPageName && disamKey) {
        wgPageName2 = "".concat(rootPageName, "_(").concat(disamKey, ")");
        if (disamKey === "消歧义") {
          wgPageName3 = "".concat(rootPageName, "_(消歧義)");
        } else if (disamKey === "消歧義") {
          wgPageName3 = "".concat(rootPageName, "_(消歧义)");
        }
      }
    } catch {
    }
  }
  element.addEventListener("click", () => {
    void _asyncToGenerator(function* () {
      const pageName = redirectTextA ? redirectTextA.textContent || wgPageName : wgPageName;
      const pageNames = [pageName];
      if (wgPageName2) {
        pageNames[pageNames.length] = wgPageName2;
      }
      if (wgPageName3) {
        pageNames[pageNames.length] = wgPageName3;
      }
      yield _detectIfFileRedirect(pageNames, isFileNS);
    })().then(() => {
      var _ref7;
      refreshPage((_ref7 = wgPageName3 !== null && wgPageName3 !== void 0 ? wgPageName3 : wgPageName2) !== null && _ref7 !== void 0 ? _ref7 : wgPageName);
    });
  });
})();
window.detectIfFileRedirect = _detectIfFileRedirect;

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0L1F1aWNrSW1wb3J0LnRzIiwgInNyYy9RdWlja0ltcG9ydC9tb2R1bGVzL2NvcmUudHMiLCAic3JjL1F1aWNrSW1wb3J0L29wdGlvbnMuanNvbiIsICJzcmMvUXVpY2tJbXBvcnQvbW9kdWxlcy9hcGkudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHJlZnJlc2hQYWdlfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbihmdW5jdGlvbiBxdWlja0ltcG9ydCgpOiB2b2lkIHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lLCB3Z1dpa2lJRH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Ly8g5L+u5pS55qOA5rWL5Zmo77yM5p+l5om+5oyH5ZCRcWl1d2VuYmFpa2UuY27nmoTlpJbpg6jpk77mjqVcblx0Y29uc3QgcmVkaXJlY3RUZXh0QSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWRpcmVjdFRleHQgYScpO1xuXG5cdGNvbnN0IGlzRmlsZU5TOiBib29sZWFuID0gd2dOYW1lc3BhY2VOdW1iZXIgPT09IDY7XG5cdGNvbnN0IGhhc013Tm9hcnRpY2xldGV4dDogYm9vbGVhbiA9ICEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI213LW5vYXJ0aWNsZXRleHQnKTtcblxuXHQvLyDlsIblr7zlhaXmupDmlLnkuLpxd2JrXG5cdGNvbnN0IGl3cHJlZml4OiBzdHJpbmcgPSAncXdiayc7XG5cblx0Y29uc3QgbGFiZWw6IHN0cmluZyA9IGlzRmlsZU5TICYmICFoYXNNd05vYXJ0aWNsZXRleHQgPyBpd3ByZWZpeCA6ICcnO1xuXHRjb25zdCBidXR0b25MYWJlbDogc3RyaW5nID0gaXNGaWxlTlNcblx0XHQ/IGxhYmVsXG5cdFx0XHQ/IGDmlofku7bvvIgke2xhYmVsfe+8iWBcblx0XHRcdDogJ+mhtemdoidcblx0XHQ6IHJlZGlyZWN0VGV4dEFcblx0XHRcdD8gJ+mHjeWumuWQkeebruaghydcblx0XHRcdDogJ+mhtemdoic7XG5cblx0aWYgKCh3Z1dpa2lJRCAhPT0gJ3poeXN5JyAmJiBpc0ZpbGVOUykgfHwgd2dOYW1lc3BhY2VOdW1iZXIgPCAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRjb25zdCBlbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsIGDlr7zlhaUke2J1dHRvbkxhYmVsfWAsICd0LWltcG9ydCcpO1xuXHRpZiAoIWVsZW1lbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsZXQgd2dQYWdlTmFtZTI6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0bGV0IHdnUGFnZU5hbWUzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0aWYgKCFpc0ZpbGVOUykge1xuXHRcdC8vIE1hdGNoaW5nIGRpc2FtaWctZWQgcGFnZXMgd2l0aCBmdWxsLXdpZHRoIHBhcmVudGhlc2VzXG5cdFx0Y29uc3QgZGlzYW1SZWdFeHBGVyA9IC9eKC4qKe+8iCguKj8p77yJJC87XG5cdFx0Y29uc3QgbWF0Y2hGVyA9IHdnUGFnZU5hbWUubWF0Y2goZGlzYW1SZWdFeHBGVyk7XG5cdFx0Ly8gTWF0Y2hpbmcgZGlzYW1pZy1lZCBwYWdlcyB3aXRoIGhhbGYtd2lkdGggcGFyZW50aGVzZXNcblx0XHRjb25zdCBkaXNhbVJlZ0V4cEhXID0gL14oLiopW18gXVxcKCguKj8pXFwpJC87XG5cdFx0Y29uc3QgbWF0Y2hIVyA9IHdnUGFnZU5hbWUubWF0Y2goZGlzYW1SZWdFeHBIVyk7XG5cblx0XHR0cnkge1xuXHRcdFx0Ly8gcm9vdCBwYWdlIG5hbWUgYW5kIGRpc2FtYmlnLWtleVxuXHRcdFx0bGV0IHJvb3RQYWdlTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkLCBkaXNhbUtleTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdFx0XHRpZiAobWF0Y2hGVykge1xuXHRcdFx0XHRbLCByb290UGFnZU5hbWUsIGRpc2FtS2V5XSA9IG1hdGNoRlc7XG5cdFx0XHR9IGVsc2UgaWYgKG1hdGNoSFcpIHtcblx0XHRcdFx0Wywgcm9vdFBhZ2VOYW1lLCBkaXNhbUtleV0gPSBtYXRjaEhXO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAocm9vdFBhZ2VOYW1lICYmIGRpc2FtS2V5KSB7XG5cdFx0XHRcdHdnUGFnZU5hbWUyID0gYCR7cm9vdFBhZ2VOYW1lfV8oJHtkaXNhbUtleX0pYDtcblx0XHRcdFx0aWYgKGRpc2FtS2V5ID09PSAn5raI5q2n5LmJJykge1xuXHRcdFx0XHRcdHdnUGFnZU5hbWUzID0gYCR7cm9vdFBhZ2VOYW1lfV8o5raI5q2n576pKWA7XG5cdFx0XHRcdH0gZWxzZSBpZiAoZGlzYW1LZXkgPT09ICfmtojmrafnvqknKSB7XG5cdFx0XHRcdFx0d2dQYWdlTmFtZTMgPSBgJHtyb290UGFnZU5hbWV9XyjmtojmrafkuYkpYDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge31cblx0fVxuXG5cdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKTogdm9pZCA9PiB7XG5cdFx0dm9pZCAoYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3QgcGFnZU5hbWU6IHN0cmluZyA9IHJlZGlyZWN0VGV4dEEgPyByZWRpcmVjdFRleHRBLnRleHRDb250ZW50IHx8IHdnUGFnZU5hbWUgOiB3Z1BhZ2VOYW1lO1xuXHRcdFx0Y29uc3QgcGFnZU5hbWVzID0gW3BhZ2VOYW1lXTtcblx0XHRcdGlmICh3Z1BhZ2VOYW1lMikge1xuXHRcdFx0XHRwYWdlTmFtZXNbcGFnZU5hbWVzLmxlbmd0aF0gPSB3Z1BhZ2VOYW1lMjtcblx0XHRcdH1cblx0XHRcdGlmICh3Z1BhZ2VOYW1lMykge1xuXHRcdFx0XHRwYWdlTmFtZXNbcGFnZU5hbWVzLmxlbmd0aF0gPSB3Z1BhZ2VOYW1lMztcblx0XHRcdH1cblx0XHRcdGF3YWl0IGRldGVjdElmRmlsZVJlZGlyZWN0KHBhZ2VOYW1lcywgaXNGaWxlTlMpO1xuXHRcdH0pKCkudGhlbigoKSA9PiB7XG5cdFx0XHRyZWZyZXNoUGFnZSh3Z1BhZ2VOYW1lMyA/PyB3Z1BhZ2VOYW1lMiA/PyB3Z1BhZ2VOYW1lKTtcblx0XHR9KTtcblx0fSk7XG59KSgpO1xuXG53aW5kb3cuZGV0ZWN0SWZGaWxlUmVkaXJlY3QgPSBkZXRlY3RJZkZpbGVSZWRpcmVjdDtcblxuZXhwb3J0IHthcGl9IGZyb20gJy4vbW9kdWxlcy9hcGknO1xuZXhwb3J0IHtkZXRlY3RJZkZpbGVSZWRpcmVjdCwgcmVmcmVzaFBhZ2V9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcbiIsICJpbXBvcnQge2dlbmVyYXRlQXJyYXksIHVuaXF1ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG50eXBlIERldGVjdElmRmlsZVJlZGlyZWN0ID0gKHBhZ2VOYW1lczogc3RyaW5nIHwgc3RyaW5nW10sIGlzRmlsZU5TPzogYm9vbGVhbikgPT4gUHJvbWlzZTx2b2lkPjtcbnR5cGUgUmVmcmVzaFBhZ2UgPSAodGl0bGU/OiBzdHJpbmcpID0+IHZvaWQ7XG5cbmxldCB0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlID0ge1xuXHRoaWRlVG9hc3Q6ICgpID0+IHt9LFxufTtcblxuY29uc3QgcmVmcmVzaFBhZ2U6IFJlZnJlc2hQYWdlID0gKHRpdGxlKSA9PiB7XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6ICfmraPlnKjliLfmlrDpobXpnaInLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cblx0aWYgKHRpdGxlKSB7XG5cdFx0bG9jYXRpb24ucmVwbGFjZShtdy51dGlsLmdldFVybCh0aXRsZSkpO1xuXHR9IGVsc2Uge1xuXHRcdGxvY2F0aW9uLnJlbG9hZCgpO1xuXHR9XG59O1xuXG5jb25zdCBpbXBvcnRQYWdlID0gYXN5bmMgKHBhZ2VOYW1lOiBzdHJpbmcsIGlzRmlsZU5TOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcblx0Ly8g5bCG5a+85YWl5rqQ57uf5LiA5Li6cXdia1xuXHRjb25zdCBpd3ByZWZpeDogc3RyaW5nID0gJ3F3YmsnO1xuXG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBg5a+85YWl6aG16Z2i5Lit77yaJHtpd3ByZWZpeH06JHtwYWdlTmFtZX1gLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cblx0bGV0IHN1bW1hcnk6IHN0cmluZyA9ICfpobXpnaLmloflrZfljp/orrjlj6/vvJpbW2NjLWJ5LXNhOjQuMHxDQyBCWS1TQSA0LjBdXe+8m+S9nOiAheivt+WPguingeadpea6kOmhtemdouWOhuWPsic7XG5cdGlmIChpc0ZpbGVOUykge1xuXHRcdHN1bW1hcnkgKz0gJ++8m+aWh+S7tuS9nOiAheivt+WPguingeatpOmhtemdouWPiuadpea6kOmhtemdouiusOi9vSc7XG5cdH1cblxuXHRjb25zdCBwYXJhbXM6IEFwaUltcG9ydFBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdpbXBvcnQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGFzc2lnbmtub3dudXNlcnM6IHRydWUsXG5cdFx0aW50ZXJ3aWtpcGFnZTogcGFnZU5hbWUsXG5cdFx0aW50ZXJ3aWtpcHJlZml4OiBpd3ByZWZpeCxcblx0XHRpbnRlcndpa2lzb3VyY2U6IGl3cHJlZml4LFxuXHRcdHN1bW1hcnk6IGDvvLske3N1bW1hcnl977y9YCxcblx0fTtcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXBpLnBvc3RXaXRoRWRpdFRva2VuKHBhcmFtcyk7XG5cblx0aWYgKHJlc3VsdFsnaW1wb3J0J10gJiYgcmVzdWx0WydpbXBvcnQnXVswXSAmJiByZXN1bHRbJ2ltcG9ydCddLnJldmlzaW9ucykge1xuXHRcdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBg6aG16Z2i5a+85YWl5a6M5oiQ77yaJHtwYWdlTmFtZX1gLFxuXHRcdFx0XHRkdXJhdGlvbjogMyAqIDEwMDAsXG5cdFx0XHR9LFxuXHRcdFx0J3N1Y2Nlc3MnXG5cdFx0KTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBg6aG16Z2i5a+85YWl5aSx6LSl77yaJHtpd3ByZWZpeH06JHtwYWdlTmFtZX1gLFxuXHRcdFx0ZHVyYXRpb246IDMgKiAxMDAwLFxuXHRcdH0sXG5cdFx0J3dhcm5pbmcnXG5cdCk7XG5cdHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IHVwbG9hZEZpbGUgPSBhc3luYyAodGFyZ2V0OiBzdHJpbmcsIHVybD86IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogYOi/geenu+aWh+S7tuS4re+8miR7dGFyZ2V0fWAsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRjb25zdCBwYXJhbXM6IEFwaVVwbG9hZFBhcmFtcyA9IHtcblx0XHR1cmw6IHVybCA/PyBgaHR0cHM6Ly93d3cucWl1d2VuYmFpa2UuY24vd2lraS9TcGVjaWFsOlJlZGlyZWN0L2ZpbGUvJHttdy51dGlsLnJhd3VybGVuY29kZSh0YXJnZXQpfWAsXG5cdFx0YWN0aW9uOiAndXBsb2FkJyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmaWxlbmFtZTogdGFyZ2V0LFxuXHRcdGNvbW1lbnQ6ICfoh6rmsYLpl7vnmb7np5Hov4Hnp7vmlofku7YnLFxuXHRcdGlnbm9yZXdhcm5pbmdzOiB0cnVlLFxuXHR9O1xuXHRhd2FpdCBhcGkucG9zdFdpdGhFZGl0VG9rZW4ocGFyYW1zKTtcblxuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogYOaWh+S7tui/geenu+WujOaIkO+8miR7dGFyZ2V0fWAsXG5cdFx0XHRkdXJhdGlvbjogMyAqIDEwMDAsXG5cdFx0fSxcblx0XHQnc3VjY2Vzcydcblx0KTtcbn07XG5cbmNvbnN0IHF1ZXJ5SW1hZ2VJbmZvID0gYXN5bmMgKHRpdGxlczogc3RyaW5nIHwgc3RyaW5nW10pID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUluZm9QYXJhbXMgJiBBcGlRdWVyeUltYWdlSW5mb1BhcmFtcyA9IHtcblx0XHR0aXRsZXMsXG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiBbJ2ltYWdlaW5mbycsICdpbmZvJ10sXG5cdFx0aWlwcm9wOiBbJ3VybCddLFxuXHRcdHJlZGlyZWN0czogdHJ1ZSxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgZGV0ZWN0SWZGaWxlUmVkaXJlY3Q6IERldGVjdElmRmlsZVJlZGlyZWN0ID0gYXN5bmMgKHBhZ2VOYW1lcywgaXNGaWxlTlMgPSBmYWxzZSkgPT4ge1xuXHQvLyBnZW5lcmF0ZUFycmF5L3VuaXF1ZUFycmF5IOWcqOatpOWkhOS/neivgeWPquS6p+eUn+Wtl+espuS4suagh+mimO+8jOW3suS6uuW3peehruiupOWuieWFqFxuXG5cdGNvbnN0IHRpdGxlc0FycmF5ID0gdW5pcXVlQXJyYXkoZ2VuZXJhdGVBcnJheShwYWdlTmFtZXMpKTtcblx0Y29uc3QgcHJvbWlzZXM6ICgoKSA9PiBQcm9taXNlPHZvaWQ+KVtdID0gW107XG5cblx0d2hpbGUgKHRpdGxlc0FycmF5Lmxlbmd0aCkge1xuXHRcdGxldCB0aXRsZXM6IHN0cmluZ1tdID0gdGl0bGVzQXJyYXkuc3BsaWNlKDAsIDI1KTtcblx0XHRpZiAoIXRpdGxlcy5sZW5ndGgpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHByb21pc2VzW3Byb21pc2VzLmxlbmd0aF0gPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0XHQvLyBSZWRpcmVjdCB0YXJnZXQocylcblx0XHRcdGNvbnN0IHRvczogc3RyaW5nW10gPSBbXTtcblxuXHRcdFx0Ly8gQW5hbHl6ZSBzdGVwIDE6IGltcG9ydCBwYWdlcyBpdHNlbGZcblx0XHRcdC8vLy8gUXVlcnlcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcXVlcnlJbWFnZUluZm8odGl0bGVzKTtcblx0XHRcdGlmIChyZXNwb25zZVsncXVlcnknXSkge1xuXHRcdFx0XHQvLy8vIE5vcm1hbGl6ZVxuXHRcdFx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10ubm9ybWFsaXplZCkge1xuXHRcdFx0XHRcdGZvciAoY29uc3Qge2Zyb20sIHRvfSBvZiByZXNwb25zZVsncXVlcnknXS5ub3JtYWxpemVkIGFzIHtmcm9tOiBzdHJpbmc7IHRvOiBzdHJpbmd9W10pIHtcblx0XHRcdFx0XHRcdHRpdGxlcyA9IHRpdGxlcy5tYXAoKGVsZW1lbnQpID0+IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGVsZW1lbnQgPT09IGZyb20gPyB0byA6IGVsZW1lbnQ7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLy8vIEltcG9ydFxuXHRcdFx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10ucGFnZXMpIHtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IHBhZ2UxIG9mIHJlc3BvbnNlWydxdWVyeSddLnBhZ2VzKSB7XG5cdFx0XHRcdFx0XHRjb25zdCB0aXRsZSA9IHBhZ2UxLnRpdGxlIGFzIHN0cmluZztcblxuXHRcdFx0XHRcdFx0aWYgKCFwYWdlMS5taXNzaW5nKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyDlsIblr7zlhaXmupDnu5/kuIDkuLpxd2JrXG5cdFx0XHRcdFx0XHRhd2FpdCBpbXBvcnRQYWdlKHRpdGxlLCBpc0ZpbGVOUyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8vLyBQdXNoIHJlZGlyZWN0IHRhcmdldHMgaW50byBhcnJheVxuXHRcdFx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10ucmVkaXJlY3RzKSB7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCB7dG99IG9mIHJlc3BvbnNlWydxdWVyeSddLnJlZGlyZWN0cyBhcyB7ZnJvbTogc3RyaW5nOyB0bzogc3RyaW5nfVtdKSB7XG5cdFx0XHRcdFx0XHR0b3NbdG9zLmxlbmd0aF0gPSB0bztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gQW5hbHl6ZSBzdGVwIDI6IGZvciBmaWxlcywgY2hlY2sgaWYgaXQgaXMgYSByZWRpcmVjdFxuXHRcdFx0aWYgKGlzRmlsZU5TKSB7XG5cdFx0XHRcdC8vLy8gUXVlcnlcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UyID0gYXdhaXQgcXVlcnlJbWFnZUluZm8odGl0bGVzKTtcblx0XHRcdFx0aWYgKHJlc3BvbnNlMlsncXVlcnknXSkge1xuXHRcdFx0XHRcdC8vLy8gTm9ybWFsaXplXG5cdFx0XHRcdFx0aWYgKHJlc3BvbnNlMlsncXVlcnknXS5ub3JtYWxpemVkKSB7XG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IHtmcm9tLCB0b30gb2YgcmVzcG9uc2UyWydxdWVyeSddLm5vcm1hbGl6ZWQgYXMge2Zyb206IHN0cmluZzsgdG86IHN0cmluZ31bXSkge1xuXHRcdFx0XHRcdFx0XHR0aXRsZXMgPSB0aXRsZXMubWFwKChlbGVtZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGVsZW1lbnQgPT09IGZyb20gPyB0byA6IGVsZW1lbnQ7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vLy8gdXBsb2FkXG5cdFx0XHRcdFx0aWYgKHJlc3BvbnNlMlsncXVlcnknXS5wYWdlcykge1xuXHRcdFx0XHRcdFx0Zm9yIChjb25zdCBwYWdlMiBvZiByZXNwb25zZTJbJ3F1ZXJ5J10ucGFnZXMpIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgdGl0bGUgPSBwYWdlMi50aXRsZSBhcyBzdHJpbmc7XG5cblx0XHRcdFx0XHRcdFx0aWYgKHBhZ2UyLm1pc3NpbmcgfHwgcGFnZTIucmVkaXJlY3QpIHtcblx0XHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGNvbnN0IGlzU2hhcmVkRmlsZSA9IHBhZ2UyLmltYWdlcmVwb3NpdG9yeSAmJiBwYWdlMi5pbWFnZXJlcG9zaXRvcnkgIT09ICdsb2NhbCc7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGlzTWlzc2luZ0NvbnRlbnQgPVxuXHRcdFx0XHRcdFx0XHRcdCghcGFnZTIuaW1hZ2VyZXBvc2l0b3J5IHx8IHBhZ2UyLmltYWdlcmVwb3NpdG9yeSA9PT0gJ2xvY2FsJykgJiZcblx0XHRcdFx0XHRcdFx0XHQoIXBhZ2UyLmltYWdlaW5mbyB8fCAhcGFnZTIuaW1hZ2VpbmZvLmxlbmd0aCk7XG5cblx0XHRcdFx0XHRcdFx0aWYgKGlzU2hhcmVkRmlsZSB8fCBpc01pc3NpbmdDb250ZW50KSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8g5aaC5p6c5piv5YWx5Lqr5paH5Lu277yM5L2/55So5bey55+l55qEIFVSTO+8m+WmguaenOaYr+e8uuWkseaWh+S7tu+8jOS8oCB1bmRlZmluZWQg6K6pIHVwbG9hZEZpbGUg5L2/55So6buY6K6k55qEIFNwZWNpYWw6UmVkaXJlY3QgVVJMXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgdXJsVG9Vc2UgPVxuXHRcdFx0XHRcdFx0XHRcdFx0aXNTaGFyZWRGaWxlICYmIHBhZ2UyLmltYWdlaW5mbyAmJiBwYWdlMi5pbWFnZWluZm9bMF1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PyBwYWdlMi5pbWFnZWluZm9bMF0udXJsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDogdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRcdGF3YWl0IHVwbG9hZEZpbGUodGl0bGUsIHVybFRvVXNlKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChyZXNwb25zZTJbJ3F1ZXJ5J10ucmVkaXJlY3RzKSB7XG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IHt0b30gb2YgcmVzcG9uc2UyWydxdWVyeSddLnJlZGlyZWN0cyBhcyB7ZnJvbTogc3RyaW5nOyB0bzogc3RyaW5nfVtdKSB7XG5cdFx0XHRcdFx0XHRcdHRvc1t0b3MubGVuZ3RoXSA9IHRvO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBBbmFseXplIHN0ZXAgMzogaW1wb3J0IHBhZ2VzIGFzIHJlZGlyZWN0IHRhcmdldFxuXHRcdFx0Ly8vLyBRdWV1ZSByZXF1ZXN0cyB0byBpbXBvcnQgcmVkaXJlY3QgdGFyZ2V0c1xuXHRcdFx0aWYgKHRvcy5sZW5ndGgpIHtcblx0XHRcdFx0YXdhaXQgZGV0ZWN0SWZGaWxlUmVkaXJlY3QodW5pcXVlQXJyYXkodG9zKSk7IC8vIFJlcGxhY2UgU2V0IHdpdGggdW5pcXVlQXJyYXksIGF2b2lkaW5nIGNvcmUtanMgcG9seWZpbGxpbmdcblx0XHRcdH1cblx0XHR9O1xuXHR9XG5cblx0Zm9yIChjb25zdCBwcm9taXNlIG9mIHByb21pc2VzKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGF3YWl0IHByb21pc2UoKTtcblx0XHR9IGNhdGNoIHt9XG5cdH1cbn07XG5cbmV4cG9ydCB7dHlwZSBEZXRlY3RJZkZpbGVSZWRpcmVjdCwgZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHR5cGUgUmVmcmVzaFBhZ2UsIHJlZnJlc2hQYWdlfTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBRdWlja0ltcG9ydC8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHNCQUFBLENBQUE7QUFBQUMsU0FBQUQscUJBQUE7RUFBQUUsS0FBQUEsTUFBQUE7RUFBQUMsc0JBQUFBLE1BQUFBO0VBQUFDLGFBQUFBLE1BQUFBO0FBQUEsQ0FBQTtBQUFBQyxPQUFBQyxVQUFBQyxhQUFBUCxtQkFBQTs7QUNBQSxJQUFBUSxxQkFBeUNDLFFBQUEsaUJBQUE7O0FDQ3hDLElBQUFDLFVBQVc7O0FDQVosSUFBQUMsb0JBQXdCRixRQUFBLGlCQUFBO0FBRXhCLElBQU1QLE9BQUEsR0FBY1Msa0JBQUFDLFdBQUEsZUFBQUMsT0FBaUNILE9BQU8sQ0FB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Y0FBWSxRQUFBO1FBQzlCLFdBQVdDLGFBQWEsT0FBTztBQUM5QlAsd0JBQUEsR0FBQXJILE9BQWlCMkgsY0FBWSxRQUFBO1FBQzlCO01BQ0Q7SUFDRCxRQUFRO0lBQUM7RUFDVjtBQUVBakQsVUFBUW1ELGlCQUFpQixTQUFTLE1BQVk7QUFDN0MsU0FBQTdHLGtCQUFNLGFBQVk7QUFDakIsWUFBTUMsV0FBbUIyRixnQkFBZ0JBLGNBQWNrQixlQUFlckIsYUFBYUE7QUFDbkYsWUFBTWxELFlBQVksQ0FBQ3RDLFFBQVE7QUFDM0IsVUFBSW1HLGFBQWE7QUFDaEI3RCxrQkFBVUEsVUFBVUssTUFBTSxJQUFJd0Q7TUFDL0I7QUFDQSxVQUFJQyxhQUFhO0FBQ2hCOUQsa0JBQVVBLFVBQVVLLE1BQU0sSUFBSXlEO01BQy9CO0FBQ0EsWUFBTS9ILHNCQUFxQmlFLFdBQVdyQyxRQUFRO0lBQy9DLENBQUEsRUFBRyxFQUFFNkcsS0FBSyxNQUFNO0FBQUEsVUFBQUM7QUFDZnpJLG1CQUFBeUksUUFBWVgsZ0JBQUEsUUFBQUEsZ0JBQUEsU0FBQUEsY0FBZUQsaUJBQUEsUUFBQVksVUFBQSxTQUFBQSxRQUFldkIsVUFBVTtJQUNyRCxDQUFDO0VBQ0YsQ0FBQztBQUNGLEdBQUc7QUFFSHdCLE9BQU8zSSx1QkFBdUJBOyIsCiAgIm5hbWVzIjogWyJRdWlja0ltcG9ydF9leHBvcnRzIiwgIl9fZXhwb3J0IiwgImFwaSIsICJkZXRlY3RJZkZpbGVSZWRpcmVjdCIsICJyZWZyZXNoUGFnZSIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJfX3RvQ29tbW9uSlMiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJ0b2FzdGlmeUluc3RhbmNlIiwgImhpZGVUb2FzdCIsICJ0aXRsZSIsICJ0b2FzdGlmeSIsICJ0ZXh0IiwgImR1cmF0aW9uIiwgImxvY2F0aW9uIiwgInJlcGxhY2UiLCAibXciLCAidXRpbCIsICJnZXRVcmwiLCAicmVsb2FkIiwgImltcG9ydFBhZ2UiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJwYWdlTmFtZSIsICJpc0ZpbGVOUyIsICJpd3ByZWZpeCIsICJzdW1tYXJ5IiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImFzc2lnbmtub3dudXNlcnMiLCAiaW50ZXJ3aWtpcGFnZSIsICJpbnRlcndpa2lwcmVmaXgiLCAiaW50ZXJ3aWtpc291cmNlIiwgInJlc3VsdCIsICJwb3N0V2l0aEVkaXRUb2tlbiIsICJyZXZpc2lvbnMiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgInVwbG9hZEZpbGUiLCAiX3JlZjIiLCAidGFyZ2V0IiwgInVybCIsICJyYXd1cmxlbmNvZGUiLCAiZmlsZW5hbWUiLCAiY29tbWVudCIsICJpZ25vcmV3YXJuaW5ncyIsICJfeDIiLCAiX3gzIiwgInF1ZXJ5SW1hZ2VJbmZvIiwgIl9yZWYzIiwgInRpdGxlcyIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAiaWlwcm9wIiwgInJlZGlyZWN0cyIsICJyZXNwb25zZSIsICJnZXQiLCAiX3g0IiwgIl9yZWY0IiwgInBhZ2VOYW1lcyIsICJ0aXRsZXNBcnJheSIsICJ1bmlxdWVBcnJheSIsICJnZW5lcmF0ZUFycmF5IiwgInByb21pc2VzIiwgImxlbmd0aCIsICJzcGxpY2UiLCAidG9zIiwgIm5vcm1hbGl6ZWQiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiZnJvbSIsICJ0byIsICJ2YWx1ZSIsICJtYXAiLCAiZWxlbWVudCIsICJlcnIiLCAiZSIsICJmIiwgInBhZ2VzIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgInBhZ2UxIiwgIm1pc3NpbmciLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAicmVzcG9uc2UyIiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgInBhZ2UyIiwgInJlZGlyZWN0IiwgImlzU2hhcmVkRmlsZSIsICJpbWFnZXJlcG9zaXRvcnkiLCAiaXNNaXNzaW5nQ29udGVudCIsICJpbWFnZWluZm8iLCAidXJsVG9Vc2UiLCAiX2l0ZXJhdG9yNyIsICJfc3RlcDciLCAiX2kiLCAiX3Byb21pc2VzIiwgInByb21pc2UiLCAiX3g1IiwgInF1aWNrSW1wb3J0IiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnUGFnZU5hbWUiLCAid2dXaWtpSUQiLCAiY29uZmlnIiwgInJlZGlyZWN0VGV4dEEiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJoYXNNd05vYXJ0aWNsZXRleHQiLCAibGFiZWwiLCAiYnV0dG9uTGFiZWwiLCAicG9ydGxldElkIiwgImFkZFBvcnRsZXRMaW5rIiwgIndnUGFnZU5hbWUyIiwgIndnUGFnZU5hbWUzIiwgImRpc2FtUmVnRXhwRlciLCAibWF0Y2hGVyIsICJtYXRjaCIsICJkaXNhbVJlZ0V4cEhXIiwgIm1hdGNoSFciLCAicm9vdFBhZ2VOYW1lIiwgImRpc2FtS2V5IiwgImFkZEV2ZW50TGlzdGVuZXIiLCAidGV4dENvbnRlbnQiLCAidGhlbiIsICJfcmVmNyIsICJ3aW5kb3ciXQp9Cg==
