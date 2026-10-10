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
                const {
                  title
                } = page1;
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
          if (response2.query) {
            if (response2.query.normalized) {
              var _iterator5 = _createForOfIteratorHelper(response2.query.normalized), _step5;
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
            if (response2.query.pages) {
              var _iterator6 = _createForOfIteratorHelper(response2.query.pages), _step6;
              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
                  const page2 = _step6.value;
                  const {
                    title
                  } = page2;
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
            if (response2.query.redirects) {
              var _iterator7 = _createForOfIteratorHelper(response2.query.redirects), _step7;
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0L1F1aWNrSW1wb3J0LnRzIiwgInNyYy9RdWlja0ltcG9ydC9tb2R1bGVzL2NvcmUudHMiLCAic3JjL1F1aWNrSW1wb3J0L29wdGlvbnMuanNvbiIsICJzcmMvUXVpY2tJbXBvcnQvbW9kdWxlcy9hcGkudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHJlZnJlc2hQYWdlfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbihmdW5jdGlvbiBxdWlja0ltcG9ydCgpOiB2b2lkIHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lLCB3Z1dpa2lJRH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Ly8g5L+u5pS55qOA5rWL5Zmo77yM5p+l5om+5oyH5ZCRcWl1d2VuYmFpa2UuY27nmoTlpJbpg6jpk77mjqVcblx0Y29uc3QgcmVkaXJlY3RUZXh0QSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWRpcmVjdFRleHQgYScpO1xuXG5cdGNvbnN0IGlzRmlsZU5TOiBib29sZWFuID0gd2dOYW1lc3BhY2VOdW1iZXIgPT09IDY7XG5cdGNvbnN0IGhhc013Tm9hcnRpY2xldGV4dDogYm9vbGVhbiA9ICEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI213LW5vYXJ0aWNsZXRleHQnKTtcblxuXHQvLyDlsIblr7zlhaXmupDmlLnkuLpxd2JrXG5cdGNvbnN0IGl3cHJlZml4OiBzdHJpbmcgPSAncXdiayc7XG5cblx0Y29uc3QgbGFiZWw6IHN0cmluZyA9IGlzRmlsZU5TICYmICFoYXNNd05vYXJ0aWNsZXRleHQgPyBpd3ByZWZpeCA6ICcnO1xuXHRjb25zdCBidXR0b25MYWJlbDogc3RyaW5nID0gaXNGaWxlTlNcblx0XHQ/IGxhYmVsXG5cdFx0XHQ/IGDmlofku7bvvIgke2xhYmVsfe+8iWBcblx0XHRcdDogJ+mhtemdoidcblx0XHQ6IHJlZGlyZWN0VGV4dEFcblx0XHRcdD8gJ+mHjeWumuWQkeebruaghydcblx0XHRcdDogJ+mhtemdoic7XG5cblx0aWYgKCh3Z1dpa2lJRCAhPT0gJ3poeXN5JyAmJiBpc0ZpbGVOUykgfHwgd2dOYW1lc3BhY2VOdW1iZXIgPCAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRjb25zdCBlbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsIGDlr7zlhaUke2J1dHRvbkxhYmVsfWAsICd0LWltcG9ydCcpO1xuXHRpZiAoIWVsZW1lbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsZXQgd2dQYWdlTmFtZTI6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0bGV0IHdnUGFnZU5hbWUzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0aWYgKCFpc0ZpbGVOUykge1xuXHRcdC8vIE1hdGNoaW5nIGRpc2FtaWctZWQgcGFnZXMgd2l0aCBmdWxsLXdpZHRoIHBhcmVudGhlc2VzXG5cdFx0Y29uc3QgZGlzYW1SZWdFeHBGVyA9IC9eKC4qKe+8iCguKj8p77yJJC87XG5cdFx0Y29uc3QgbWF0Y2hGVyA9IHdnUGFnZU5hbWUubWF0Y2goZGlzYW1SZWdFeHBGVyk7XG5cdFx0Ly8gTWF0Y2hpbmcgZGlzYW1pZy1lZCBwYWdlcyB3aXRoIGhhbGYtd2lkdGggcGFyZW50aGVzZXNcblx0XHRjb25zdCBkaXNhbVJlZ0V4cEhXID0gL14oLiopW18gXVxcKCguKj8pXFwpJC87XG5cdFx0Y29uc3QgbWF0Y2hIVyA9IHdnUGFnZU5hbWUubWF0Y2goZGlzYW1SZWdFeHBIVyk7XG5cblx0XHR0cnkge1xuXHRcdFx0Ly8gcm9vdCBwYWdlIG5hbWUgYW5kIGRpc2FtYmlnLWtleVxuXHRcdFx0bGV0IHJvb3RQYWdlTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkLCBkaXNhbUtleTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdFx0XHRpZiAobWF0Y2hGVykge1xuXHRcdFx0XHRbLCByb290UGFnZU5hbWUsIGRpc2FtS2V5XSA9IG1hdGNoRlc7XG5cdFx0XHR9IGVsc2UgaWYgKG1hdGNoSFcpIHtcblx0XHRcdFx0Wywgcm9vdFBhZ2VOYW1lLCBkaXNhbUtleV0gPSBtYXRjaEhXO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAocm9vdFBhZ2VOYW1lICYmIGRpc2FtS2V5KSB7XG5cdFx0XHRcdHdnUGFnZU5hbWUyID0gYCR7cm9vdFBhZ2VOYW1lfV8oJHtkaXNhbUtleX0pYDtcblx0XHRcdFx0aWYgKGRpc2FtS2V5ID09PSAn5raI5q2n5LmJJykge1xuXHRcdFx0XHRcdHdnUGFnZU5hbWUzID0gYCR7cm9vdFBhZ2VOYW1lfV8o5raI5q2n576pKWA7XG5cdFx0XHRcdH0gZWxzZSBpZiAoZGlzYW1LZXkgPT09ICfmtojmrafnvqknKSB7XG5cdFx0XHRcdFx0d2dQYWdlTmFtZTMgPSBgJHtyb290UGFnZU5hbWV9XyjmtojmrafkuYkpYDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge31cblx0fVxuXG5cdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKTogdm9pZCA9PiB7XG5cdFx0dm9pZCAoYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3QgcGFnZU5hbWU6IHN0cmluZyA9IHJlZGlyZWN0VGV4dEEgPyByZWRpcmVjdFRleHRBLnRleHRDb250ZW50IHx8IHdnUGFnZU5hbWUgOiB3Z1BhZ2VOYW1lO1xuXHRcdFx0Y29uc3QgcGFnZU5hbWVzID0gW3BhZ2VOYW1lXTtcblx0XHRcdGlmICh3Z1BhZ2VOYW1lMikge1xuXHRcdFx0XHRwYWdlTmFtZXNbcGFnZU5hbWVzLmxlbmd0aF0gPSB3Z1BhZ2VOYW1lMjtcblx0XHRcdH1cblx0XHRcdGlmICh3Z1BhZ2VOYW1lMykge1xuXHRcdFx0XHRwYWdlTmFtZXNbcGFnZU5hbWVzLmxlbmd0aF0gPSB3Z1BhZ2VOYW1lMztcblx0XHRcdH1cblx0XHRcdGF3YWl0IGRldGVjdElmRmlsZVJlZGlyZWN0KHBhZ2VOYW1lcywgaXNGaWxlTlMpO1xuXHRcdH0pKCkudGhlbigoKSA9PiB7XG5cdFx0XHRyZWZyZXNoUGFnZSh3Z1BhZ2VOYW1lMyA/PyB3Z1BhZ2VOYW1lMiA/PyB3Z1BhZ2VOYW1lKTtcblx0XHR9KTtcblx0fSk7XG59KSgpO1xuXG53aW5kb3cuZGV0ZWN0SWZGaWxlUmVkaXJlY3QgPSBkZXRlY3RJZkZpbGVSZWRpcmVjdDtcblxuZXhwb3J0IHthcGl9IGZyb20gJy4vbW9kdWxlcy9hcGknO1xuZXhwb3J0IHtkZXRlY3RJZkZpbGVSZWRpcmVjdCwgcmVmcmVzaFBhZ2V9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcbiIsICJpbXBvcnQge2dlbmVyYXRlQXJyYXksIHVuaXF1ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG50eXBlIERldGVjdElmRmlsZVJlZGlyZWN0ID0gKHBhZ2VOYW1lczogc3RyaW5nIHwgc3RyaW5nW10sIGlzRmlsZU5TPzogYm9vbGVhbikgPT4gUHJvbWlzZTx2b2lkPjtcbnR5cGUgUmVmcmVzaFBhZ2UgPSAodGl0bGU/OiBzdHJpbmcpID0+IHZvaWQ7XG5cbnR5cGUgUXVlcnlJbWFnZUluZm9SZXNwb25zZSA9IHtcblx0cXVlcnk/OiB7XG5cdFx0bm9ybWFsaXplZD86IHtmcm9tOiBzdHJpbmc7IHRvOiBzdHJpbmd9W107XG5cdFx0cmVkaXJlY3RzPzoge2Zyb206IHN0cmluZzsgdG86IHN0cmluZ31bXTtcblx0XHRwYWdlcz86IHtcblx0XHRcdHRpdGxlOiBzdHJpbmc7XG5cdFx0XHRtaXNzaW5nPzogYm9vbGVhbjtcblx0XHRcdHJlZGlyZWN0PzogYm9vbGVhbjtcblx0XHRcdGltYWdlcmVwb3NpdG9yeT86IHN0cmluZztcblx0XHRcdGltYWdlaW5mbz86IHtcblx0XHRcdFx0dXJsOiBzdHJpbmc7XG5cdFx0XHR9W107XG5cdFx0fVtdO1xuXHR9O1xufTtcblxubGV0IHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB7XG5cdGhpZGVUb2FzdDogKCkgPT4ge30sXG59O1xuXG5jb25zdCByZWZyZXNoUGFnZTogUmVmcmVzaFBhZ2UgPSAodGl0bGUpID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+ato+WcqOWIt+aWsOmhtemdoicsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRpZiAodGl0bGUpIHtcblx0XHRsb2NhdGlvbi5yZXBsYWNlKG13LnV0aWwuZ2V0VXJsKHRpdGxlKSk7XG5cdH0gZWxzZSB7XG5cdFx0bG9jYXRpb24ucmVsb2FkKCk7XG5cdH1cbn07XG5cbmNvbnN0IGltcG9ydFBhZ2UgPSBhc3luYyAocGFnZU5hbWU6IHN0cmluZywgaXNGaWxlTlM6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xuXHQvLyDlsIblr7zlhaXmupDnu5/kuIDkuLpxd2JrXG5cdGNvbnN0IGl3cHJlZml4ID0gJ3F3YmsnO1xuXG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBg5a+85YWl6aG16Z2i5Lit77yaJHtpd3ByZWZpeH06JHtwYWdlTmFtZX1gLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cblx0bGV0IHN1bW1hcnk6IHN0cmluZyA9ICfpobXpnaLmloflrZfljp/orrjlj6/vvJpbW2NjLWJ5LXNhOjQuMHxDQyBCWS1TQSA0LjBdXe+8m+S9nOiAheivt+WPguingeadpea6kOmhtemdouWOhuWPsic7XG5cdGlmIChpc0ZpbGVOUykge1xuXHRcdHN1bW1hcnkgKz0gJ++8m+aWh+S7tuS9nOiAheivt+WPguingeatpOmhtemdouWPiuadpea6kOmhtemdouiusOi9vSc7XG5cdH1cblxuXHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAnaW1wb3J0Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRhc3NpZ25rbm93bnVzZXJzOiB0cnVlLFxuXHRcdGludGVyd2lraXBhZ2U6IHBhZ2VOYW1lLFxuXHRcdGludGVyd2lraXByZWZpeDogaXdwcmVmaXgsXG5cdFx0aW50ZXJ3aWtpc291cmNlOiBpd3ByZWZpeCxcblx0XHRzdW1tYXJ5OiBg77y7JHtzdW1tYXJ5fe+8vWAsXG5cdH0gYXMgdW5rbm93biBhcyBBcGlJbXBvcnRQYXJhbXM7XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbihwYXJhbXMpO1xuXG5cdGlmIChyZXN1bHRbJ2ltcG9ydCddICYmIHJlc3VsdFsnaW1wb3J0J11bMF0gJiYgcmVzdWx0WydpbXBvcnQnXS5yZXZpc2lvbnMpIHtcblx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogYOmhtemdouWvvOWFpeWujOaIkO+8miR7cGFnZU5hbWV9YCxcblx0XHRcdFx0ZHVyYXRpb246IDMgKiAxMDAwLFxuXHRcdFx0fSxcblx0XHRcdCdzdWNjZXNzJ1xuXHRcdCk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogYOmhtemdouWvvOWFpeWksei0pe+8miR7aXdwcmVmaXh9OiR7cGFnZU5hbWV9YCxcblx0XHRcdGR1cmF0aW9uOiAzICogMTAwMCxcblx0XHR9LFxuXHRcdCd3YXJuaW5nJ1xuXHQpO1xuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCB1cGxvYWRGaWxlID0gYXN5bmMgKHRhcmdldDogc3RyaW5nLCB1cmw/OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGDov4Hnp7vmlofku7bkuK3vvJoke3RhcmdldH1gLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cblx0Y29uc3QgcGFyYW1zOiBBcGlVcGxvYWRQYXJhbXMgPSB7XG5cdFx0dXJsOiB1cmwgPz8gYGh0dHBzOi8vd3d3LnFpdXdlbmJhaWtlLmNuL3dpa2kvU3BlY2lhbDpSZWRpcmVjdC9maWxlLyR7bXcudXRpbC5yYXd1cmxlbmNvZGUodGFyZ2V0KX1gLFxuXHRcdGFjdGlvbjogJ3VwbG9hZCcsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0ZmlsZW5hbWU6IHRhcmdldCxcblx0XHRjb21tZW50OiAn6Ieq5rGC6Ze755m+56eR6L+B56e75paH5Lu2Jyxcblx0XHRpZ25vcmV3YXJuaW5nczogdHJ1ZSxcblx0fTtcblx0YXdhaXQgYXBpLnBvc3RXaXRoRWRpdFRva2VuKHBhcmFtcyk7XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGDmlofku7bov4Hnp7vlrozmiJDvvJoke3RhcmdldH1gLFxuXHRcdFx0ZHVyYXRpb246IDMgKiAxMDAwLFxuXHRcdH0sXG5cdFx0J3N1Y2Nlc3MnXG5cdCk7XG59O1xuXG5jb25zdCBxdWVyeUltYWdlSW5mbyA9IGFzeW5jICh0aXRsZXM6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlJbmZvUGFyYW1zICYgQXBpUXVlcnlJbWFnZUluZm9QYXJhbXMgPSB7XG5cdFx0dGl0bGVzLFxuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogWydpbWFnZWluZm8nLCAnaW5mbyddLFxuXHRcdGlpcHJvcDogWyd1cmwnXSxcblx0XHRyZWRpcmVjdHM6IHRydWUsXG5cdH07XG5cdGNvbnN0IHJlc3BvbnNlID0gKGF3YWl0IGFwaS5nZXQocGFyYW1zKSkgYXMgUXVlcnlJbWFnZUluZm9SZXNwb25zZTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBkZXRlY3RJZkZpbGVSZWRpcmVjdDogRGV0ZWN0SWZGaWxlUmVkaXJlY3QgPSBhc3luYyAocGFnZU5hbWVzLCBpc0ZpbGVOUyA9IGZhbHNlKSA9PiB7XG5cdC8vIGdlbmVyYXRlQXJyYXkvdW5pcXVlQXJyYXkg5Zyo5q2k5aSE5L+d6K+B5Y+q5Lqn55Sf5a2X56ym5Liy5qCH6aKY77yM5bey5Lq65bel56Gu6K6k5a6J5YWoXG5cblx0Y29uc3QgdGl0bGVzQXJyYXkgPSB1bmlxdWVBcnJheShnZW5lcmF0ZUFycmF5KHBhZ2VOYW1lcykpO1xuXHRjb25zdCBwcm9taXNlczogKCgpID0+IFByb21pc2U8dm9pZD4pW10gPSBbXTtcblxuXHR3aGlsZSAodGl0bGVzQXJyYXkubGVuZ3RoKSB7XG5cdFx0bGV0IHRpdGxlczogc3RyaW5nW10gPSB0aXRsZXNBcnJheS5zcGxpY2UoMCwgMjUpO1xuXHRcdGlmICghdGl0bGVzLmxlbmd0aCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0cHJvbWlzZXNbcHJvbWlzZXMubGVuZ3RoXSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdC8vIFJlZGlyZWN0IHRhcmdldChzKVxuXHRcdFx0Y29uc3QgdG9zOiBzdHJpbmdbXSA9IFtdO1xuXG5cdFx0XHQvLyBBbmFseXplIHN0ZXAgMTogaW1wb3J0IHBhZ2VzIGl0c2VsZlxuXHRcdFx0Ly8vLyBRdWVyeVxuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBxdWVyeUltYWdlSW5mbyh0aXRsZXMpO1xuXHRcdFx0aWYgKHJlc3BvbnNlWydxdWVyeSddKSB7XG5cdFx0XHRcdC8vLy8gTm9ybWFsaXplXG5cdFx0XHRcdGlmIChyZXNwb25zZVsncXVlcnknXS5ub3JtYWxpemVkKSB7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCB7ZnJvbSwgdG99IG9mIHJlc3BvbnNlWydxdWVyeSddLm5vcm1hbGl6ZWQgYXMge2Zyb206IHN0cmluZzsgdG86IHN0cmluZ31bXSkge1xuXHRcdFx0XHRcdFx0dGl0bGVzID0gdGl0bGVzLm1hcCgoZWxlbWVudCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZWxlbWVudCA9PT0gZnJvbSA/IHRvIDogZWxlbWVudDtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vLy8gSW1wb3J0XG5cdFx0XHRcdGlmIChyZXNwb25zZVsncXVlcnknXS5wYWdlcykge1xuXHRcdFx0XHRcdGZvciAoY29uc3QgcGFnZTEgb2YgcmVzcG9uc2VbJ3F1ZXJ5J10ucGFnZXMpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHt0aXRsZX0gPSBwYWdlMTtcblxuXHRcdFx0XHRcdFx0aWYgKCFwYWdlMS5taXNzaW5nKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyDlsIblr7zlhaXmupDnu5/kuIDkuLpxd2JrXG5cdFx0XHRcdFx0XHRhd2FpdCBpbXBvcnRQYWdlKHRpdGxlLCBpc0ZpbGVOUyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8vLyBQdXNoIHJlZGlyZWN0IHRhcmdldHMgaW50byBhcnJheVxuXHRcdFx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10ucmVkaXJlY3RzKSB7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCB7dG99IG9mIHJlc3BvbnNlWydxdWVyeSddLnJlZGlyZWN0cyBhcyB7ZnJvbTogc3RyaW5nOyB0bzogc3RyaW5nfVtdKSB7XG5cdFx0XHRcdFx0XHR0b3NbdG9zLmxlbmd0aF0gPSB0bztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gQW5hbHl6ZSBzdGVwIDI6IGZvciBmaWxlcywgY2hlY2sgaWYgaXQgaXMgYSByZWRpcmVjdFxuXHRcdFx0aWYgKGlzRmlsZU5TKSB7XG5cdFx0XHRcdC8vLy8gUXVlcnlcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UyID0gYXdhaXQgcXVlcnlJbWFnZUluZm8odGl0bGVzKTtcblx0XHRcdFx0aWYgKHJlc3BvbnNlMi5xdWVyeSkge1xuXHRcdFx0XHRcdC8vLy8gTm9ybWFsaXplXG5cdFx0XHRcdFx0aWYgKHJlc3BvbnNlMi5xdWVyeS5ub3JtYWxpemVkKSB7XG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IHtmcm9tLCB0b30gb2YgcmVzcG9uc2UyLnF1ZXJ5Lm5vcm1hbGl6ZWQpIHtcblx0XHRcdFx0XHRcdFx0dGl0bGVzID0gdGl0bGVzLm1hcCgoZWxlbWVudCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBlbGVtZW50ID09PSBmcm9tID8gdG8gOiBlbGVtZW50O1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLy8vIHVwbG9hZFxuXHRcdFx0XHRcdGlmIChyZXNwb25zZTIucXVlcnkucGFnZXMpIHtcblx0XHRcdFx0XHRcdGZvciAoY29uc3QgcGFnZTIgb2YgcmVzcG9uc2UyLnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHt0aXRsZX0gPSBwYWdlMjtcblxuXHRcdFx0XHRcdFx0XHRpZiAocGFnZTIubWlzc2luZyB8fCBwYWdlMi5yZWRpcmVjdCkge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0Y29uc3QgaXNTaGFyZWRGaWxlID0gcGFnZTIuaW1hZ2VyZXBvc2l0b3J5ICYmIHBhZ2UyLmltYWdlcmVwb3NpdG9yeSAhPT0gJ2xvY2FsJztcblx0XHRcdFx0XHRcdFx0Y29uc3QgaXNNaXNzaW5nQ29udGVudCA9XG5cdFx0XHRcdFx0XHRcdFx0KCFwYWdlMi5pbWFnZXJlcG9zaXRvcnkgfHwgcGFnZTIuaW1hZ2VyZXBvc2l0b3J5ID09PSAnbG9jYWwnKSAmJlxuXHRcdFx0XHRcdFx0XHRcdCghcGFnZTIuaW1hZ2VpbmZvIHx8ICFwYWdlMi5pbWFnZWluZm8ubGVuZ3RoKTtcblxuXHRcdFx0XHRcdFx0XHRpZiAoaXNTaGFyZWRGaWxlIHx8IGlzTWlzc2luZ0NvbnRlbnQpIHtcblx0XHRcdFx0XHRcdFx0XHQvLyDlpoLmnpzmmK/lhbHkuqvmlofku7bvvIzkvb/nlKjlt7Lnn6XnmoQgVVJM77yb5aaC5p6c5piv57y65aSx5paH5Lu277yM5LygIHVuZGVmaW5lZCDorqkgdXBsb2FkRmlsZSDkvb/nlKjpu5jorqTnmoQgU3BlY2lhbDpSZWRpcmVjdCBVUkxcblx0XHRcdFx0XHRcdFx0XHRjb25zdCB1cmxUb1VzZSA9XG5cdFx0XHRcdFx0XHRcdFx0XHRpc1NoYXJlZEZpbGUgJiYgcGFnZTIuaW1hZ2VpbmZvICYmIHBhZ2UyLmltYWdlaW5mb1swXVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ/IHBhZ2UyLmltYWdlaW5mb1swXS51cmxcblx0XHRcdFx0XHRcdFx0XHRcdFx0OiB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdFx0YXdhaXQgdXBsb2FkRmlsZSh0aXRsZSwgdXJsVG9Vc2UpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKHJlc3BvbnNlMi5xdWVyeS5yZWRpcmVjdHMpIHtcblx0XHRcdFx0XHRcdGZvciAoY29uc3Qge3RvfSBvZiByZXNwb25zZTIucXVlcnkucmVkaXJlY3RzKSB7XG5cdFx0XHRcdFx0XHRcdHRvc1t0b3MubGVuZ3RoXSA9IHRvO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBBbmFseXplIHN0ZXAgMzogaW1wb3J0IHBhZ2VzIGFzIHJlZGlyZWN0IHRhcmdldFxuXHRcdFx0Ly8vLyBRdWV1ZSByZXF1ZXN0cyB0byBpbXBvcnQgcmVkaXJlY3QgdGFyZ2V0c1xuXHRcdFx0aWYgKHRvcy5sZW5ndGgpIHtcblx0XHRcdFx0YXdhaXQgZGV0ZWN0SWZGaWxlUmVkaXJlY3QodW5pcXVlQXJyYXkodG9zKSk7IC8vIFJlcGxhY2UgU2V0IHdpdGggdW5pcXVlQXJyYXksIGF2b2lkaW5nIGNvcmUtanMgcG9seWZpbGxpbmdcblx0XHRcdH1cblx0XHR9O1xuXHR9XG5cblx0Zm9yIChjb25zdCBwcm9taXNlIG9mIHByb21pc2VzKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGF3YWl0IHByb21pc2UoKTtcblx0XHR9IGNhdGNoIHt9XG5cdH1cbn07XG5cbmV4cG9ydCB7dHlwZSBEZXRlY3RJZkZpbGVSZWRpcmVjdCwgZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHR5cGUgUmVmcmVzaFBhZ2UsIHJlZnJlc2hQYWdlfTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBRdWlja0ltcG9ydC8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFB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dEMsVUFBSUwsU0FBUztBQUNaLFNBQUEsRUFBR0ksY0FBY0MsUUFBUSxJQUFJTDtNQUM5QixXQUFXRyxTQUFTO0FBQ25CLFNBQUEsRUFBR0MsY0FBY0MsUUFBUSxJQUFJRjtNQUM5QjtBQUVBLFVBQUlDLGdCQUFnQkMsVUFBVTtBQUM3QlIsc0JBQUEsR0FBQXJILE9BQWlCNEgsY0FBWSxJQUFBLEVBQUE1SCxPQUFLNkgsVUFBUSxHQUFBO0FBQzFDLFlBQUlBLGFBQWEsT0FBTztBQUN2QlAsd0JBQUEsR0FBQXRILE9BQWlCNEgsY0FBWSxRQUFBO1FBQzlCLFdBQVdDLGFBQWEsT0FBTztBQUM5QlAsd0JBQUEsR0FBQXRILE9BQWlCNEgsY0FBWSxRQUFBO1FBQzlCO01BQ0Q7SUFDRCxRQUFRO0lBQUM7RUFDVjtBQUVBbEQsVUFBUW9ELGlCQUFpQixTQUFTLE1BQVk7QUFDN0MsU0FBQTlHLGtCQUFNLGFBQVk7QUFDakIsWUFBTUMsV0FBbUI0RixnQkFBZ0JBLGNBQWNrQixlQUFlckIsYUFBYUE7QUFDbkYsWUFBTW5ELFlBQVksQ0FBQ3RDLFFBQVE7QUFDM0IsVUFBSW9HLGFBQWE7QUFDaEI5RCxrQkFBVUEsVUFBVUssTUFBTSxJQUFJeUQ7TUFDL0I7QUFDQSxVQUFJQyxhQUFhO0FBQ2hCL0Qsa0JBQVVBLFVBQVVLLE1BQU0sSUFBSTBEO01BQy9CO0FBQ0EsWUFBTWhJLHNCQUFxQmlFLFdBQVdyQyxRQUFRO0lBQy9DLENBQUEsRUFBRyxFQUFFOEcsS0FBSyxNQUFNO0FBQUEsVUFBQUM7QUFDZjFJLG1CQUFBMEksUUFBWVgsZ0JBQUEsUUFBQUEsZ0JBQUEsU0FBQUEsY0FBZUQsaUJBQUEsUUFBQVksVUFBQSxTQUFBQSxRQUFldkIsVUFBVTtJQUNyRCxDQUFDO0VBQ0YsQ0FBQztBQUNGLEdBQUc7QUFFSHdCLE9BQU81SSx1QkFBdUJBOyIsCiAgIm5hbWVzIjogWyJRdWlja0ltcG9ydF9leHBvcnRzIiwgIl9fZXhwb3J0IiwgImFwaSIsICJkZXRlY3RJZkZpbGVSZWRpcmVjdCIsICJyZWZyZXNoUGFnZSIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJfX3RvQ29tbW9uSlMiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJ0b2FzdGlmeUluc3RhbmNlIiwgImhpZGVUb2FzdCIsICJ0aXRsZSIsICJ0b2FzdGlmeSIsICJ0ZXh0IiwgImR1cmF0aW9uIiwgImxvY2F0aW9uIiwgInJlcGxhY2UiLCAibXciLCAidXRpbCIsICJnZXRVcmwiLCAicmVsb2FkIiwgImltcG9ydFBhZ2UiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJwYWdlTmFtZSIsICJpc0ZpbGVOUyIsICJpd3ByZWZpeCIsICJzdW1tYXJ5IiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImFzc2lnbmtub3dudXNlcnMiLCAiaW50ZXJ3aWtpcGFnZSIsICJpbnRlcndpa2lwcmVmaXgiLCAiaW50ZXJ3aWtpc291cmNlIiwgInJlc3VsdCIsICJwb3N0V2l0aEVkaXRUb2tlbiIsICJyZXZpc2lvbnMiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgInVwbG9hZEZpbGUiLCAiX3JlZjIiLCAidGFyZ2V0IiwgInVybCIsICJyYXd1cmxlbmNvZGUiLCAiZmlsZW5hbWUiLCAiY29tbWVudCIsICJpZ25vcmV3YXJuaW5ncyIsICJfeDIiLCAiX3gzIiwgInF1ZXJ5SW1hZ2VJbmZvIiwgIl9yZWYzIiwgInRpdGxlcyIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAiaWlwcm9wIiwgInJlZGlyZWN0cyIsICJyZXNwb25zZSIsICJnZXQiLCAiX3g0IiwgIl9yZWY0IiwgInBhZ2VOYW1lcyIsICJ0aXRsZXNBcnJheSIsICJ1bmlxdWVBcnJheSIsICJnZW5lcmF0ZUFycmF5IiwgInByb21pc2VzIiwgImxlbmd0aCIsICJzcGxpY2UiLCAidG9zIiwgIm5vcm1hbGl6ZWQiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiZnJvbSIsICJ0byIsICJ2YWx1ZSIsICJtYXAiLCAiZWxlbWVudCIsICJlcnIiLCAiZSIsICJmIiwgInBhZ2VzIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgInBhZ2UxIiwgIm1pc3NpbmciLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAicmVzcG9uc2UyIiwgInF1ZXJ5IiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgInBhZ2UyIiwgInJlZGlyZWN0IiwgImlzU2hhcmVkRmlsZSIsICJpbWFnZXJlcG9zaXRvcnkiLCAiaXNNaXNzaW5nQ29udGVudCIsICJpbWFnZWluZm8iLCAidXJsVG9Vc2UiLCAiX2l0ZXJhdG9yNyIsICJfc3RlcDciLCAiX2kiLCAiX3Byb21pc2VzIiwgInByb21pc2UiLCAiX3g1IiwgInF1aWNrSW1wb3J0IiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnUGFnZU5hbWUiLCAid2dXaWtpSUQiLCAiY29uZmlnIiwgInJlZGlyZWN0VGV4dEEiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJoYXNNd05vYXJ0aWNsZXRleHQiLCAibGFiZWwiLCAiYnV0dG9uTGFiZWwiLCAicG9ydGxldElkIiwgImFkZFBvcnRsZXRMaW5rIiwgIndnUGFnZU5hbWUyIiwgIndnUGFnZU5hbWUzIiwgImRpc2FtUmVnRXhwRlciLCAibWF0Y2hGVyIsICJtYXRjaCIsICJkaXNhbVJlZ0V4cEhXIiwgIm1hdGNoSFciLCAicm9vdFBhZ2VOYW1lIiwgImRpc2FtS2V5IiwgImFkZEV2ZW50TGlzdGVuZXIiLCAidGV4dENvbnRlbnQiLCAidGhlbiIsICJfcmVmNyIsICJ3aW5kb3ciXQp9Cg==
