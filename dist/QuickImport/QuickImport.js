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
    pageNames = (0, import_ext_gadget2.uniqueArray)((0, import_ext_gadget2.generateArray)(pageNames));
    const promises = [];
    for (let i = 0; i < pageNames.length; i++) {
      let titles = pageNames.splice(0, 25);
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
                  if (page2.imagerepository && page2.imagerepository !== "local") {
                    yield uploadFile(title, page2.imageinfo[0].url);
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
  if (wgWikiID !== "zhqiuwenbaike" && isFileNS || wgNamespaceNumber < 0) {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0L1F1aWNrSW1wb3J0LnRzIiwgInNyYy9RdWlja0ltcG9ydC9tb2R1bGVzL2NvcmUudHMiLCAic3JjL1F1aWNrSW1wb3J0L29wdGlvbnMuanNvbiIsICJzcmMvUXVpY2tJbXBvcnQvbW9kdWxlcy9hcGkudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHJlZnJlc2hQYWdlfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbihmdW5jdGlvbiBxdWlja0ltcG9ydCgpOiB2b2lkIHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lLCB3Z1dpa2lJRH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Ly8g5L+u5pS55qOA5rWL5Zmo77yM5p+l5om+5oyH5ZCRcWl1d2VuYmFpa2UuY27nmoTlpJbpg6jpk77mjqVcblx0Y29uc3QgcmVkaXJlY3RUZXh0QSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWRpcmVjdFRleHQgYScpO1xuXG5cdGNvbnN0IGlzRmlsZU5TOiBib29sZWFuID0gd2dOYW1lc3BhY2VOdW1iZXIgPT09IDY7XG5cdGNvbnN0IGhhc013Tm9hcnRpY2xldGV4dDogYm9vbGVhbiA9ICEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI213LW5vYXJ0aWNsZXRleHQnKTtcblxuXHQvLyDlsIblr7zlhaXmupDmlLnkuLpxd2JrXG5cdGNvbnN0IGl3cHJlZml4OiBzdHJpbmcgPSAncXdiayc7XG5cblx0Y29uc3QgbGFiZWw6IHN0cmluZyA9IGlzRmlsZU5TICYmICFoYXNNd05vYXJ0aWNsZXRleHQgPyBpd3ByZWZpeCA6ICcnO1xuXHRjb25zdCBidXR0b25MYWJlbDogc3RyaW5nID0gaXNGaWxlTlNcblx0XHQ/IGxhYmVsXG5cdFx0XHQ/IGDmlofku7bvvIgke2xhYmVsfe+8iWBcblx0XHRcdDogJ+mhtemdoidcblx0XHQ6IHJlZGlyZWN0VGV4dEFcblx0XHRcdD8gJ+mHjeWumuWQkeebruaghydcblx0XHRcdDogJ+mhtemdoic7XG5cblx0aWYgKCh3Z1dpa2lJRCAhPT0gJ3pocWl1d2VuYmFpa2UnICYmIGlzRmlsZU5TKSB8fCB3Z05hbWVzcGFjZU51bWJlciA8IDApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwb3J0bGV0SWQ6ICdwLWNhY3Rpb25zJyB8ICdwLXRiJyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwLWNhY3Rpb25zJykgPyAncC1jYWN0aW9ucycgOiAncC10Yic7XG5cdGNvbnN0IGVsZW1lbnQ6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhwb3J0bGV0SWQsICcjJywgYOWvvOWFpSR7YnV0dG9uTGFiZWx9YCwgJ3QtaW1wb3J0Jyk7XG5cdGlmICghZWxlbWVudCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxldCB3Z1BhZ2VOYW1lMjogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRsZXQgd2dQYWdlTmFtZTM6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHRpZiAoIWlzRmlsZU5TKSB7XG5cdFx0Ly8gTWF0Y2hpbmcgZGlzYW1pZy1lZCBwYWdlcyB3aXRoIGZ1bGwtd2lkdGggcGFyZW50aGVzZXNcblx0XHRjb25zdCBkaXNhbVJlZ0V4cEZXID0gL14oLiop77yIKC4qPynvvIkkLztcblx0XHRjb25zdCBtYXRjaEZXID0gd2dQYWdlTmFtZS5tYXRjaChkaXNhbVJlZ0V4cEZXKTtcblx0XHQvLyBNYXRjaGluZyBkaXNhbWlnLWVkIHBhZ2VzIHdpdGggaGFsZi13aWR0aCBwYXJlbnRoZXNlc1xuXHRcdGNvbnN0IGRpc2FtUmVnRXhwSFcgPSAvXiguKilbXyBdXFwoKC4qPylcXCkkLztcblx0XHRjb25zdCBtYXRjaEhXID0gd2dQYWdlTmFtZS5tYXRjaChkaXNhbVJlZ0V4cEhXKTtcblxuXHRcdHRyeSB7XG5cdFx0XHQvLyByb290IHBhZ2UgbmFtZSBhbmQgZGlzYW1iaWcta2V5XG5cdFx0XHRsZXQgcm9vdFBhZ2VOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQsIGRpc2FtS2V5OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0XHRcdGlmIChtYXRjaEZXKSB7XG5cdFx0XHRcdFssIHJvb3RQYWdlTmFtZSwgZGlzYW1LZXldID0gbWF0Y2hGVztcblx0XHRcdH0gZWxzZSBpZiAobWF0Y2hIVykge1xuXHRcdFx0XHRbLCByb290UGFnZU5hbWUsIGRpc2FtS2V5XSA9IG1hdGNoSFc7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChyb290UGFnZU5hbWUgJiYgZGlzYW1LZXkpIHtcblx0XHRcdFx0d2dQYWdlTmFtZTIgPSBgJHtyb290UGFnZU5hbWV9Xygke2Rpc2FtS2V5fSlgO1xuXHRcdFx0XHRpZiAoZGlzYW1LZXkgPT09ICfmtojmrafkuYknKSB7XG5cdFx0XHRcdFx0d2dQYWdlTmFtZTMgPSBgJHtyb290UGFnZU5hbWV9XyjmtojmrafnvqkpYDtcblx0XHRcdFx0fSBlbHNlIGlmIChkaXNhbUtleSA9PT0gJ+a2iOatp+e+qScpIHtcblx0XHRcdFx0XHR3Z1BhZ2VOYW1lMyA9IGAke3Jvb3RQYWdlTmFtZX1fKOa2iOatp+S5iSlgO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7fVxuXHR9XG5cblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHR2b2lkIChhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCBwYWdlTmFtZTogc3RyaW5nID0gcmVkaXJlY3RUZXh0QSA/IHJlZGlyZWN0VGV4dEEudGV4dENvbnRlbnQgfHwgd2dQYWdlTmFtZSA6IHdnUGFnZU5hbWU7XG5cdFx0XHRjb25zdCBwYWdlTmFtZXMgPSBbcGFnZU5hbWVdO1xuXHRcdFx0aWYgKHdnUGFnZU5hbWUyKSB7XG5cdFx0XHRcdHBhZ2VOYW1lc1twYWdlTmFtZXMubGVuZ3RoXSA9IHdnUGFnZU5hbWUyO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHdnUGFnZU5hbWUzKSB7XG5cdFx0XHRcdHBhZ2VOYW1lc1twYWdlTmFtZXMubGVuZ3RoXSA9IHdnUGFnZU5hbWUzO1xuXHRcdFx0fVxuXHRcdFx0YXdhaXQgZGV0ZWN0SWZGaWxlUmVkaXJlY3QocGFnZU5hbWVzLCBpc0ZpbGVOUyk7XG5cdFx0fSkoKS50aGVuKCgpID0+IHtcblx0XHRcdHJlZnJlc2hQYWdlKHdnUGFnZU5hbWUzID8/IHdnUGFnZU5hbWUyID8/IHdnUGFnZU5hbWUpO1xuXHRcdH0pO1xuXHR9KTtcbn0pKCk7XG5cbndpbmRvdy5kZXRlY3RJZkZpbGVSZWRpcmVjdCA9IGRldGVjdElmRmlsZVJlZGlyZWN0O1xuXG5leHBvcnQge2FwaX0gZnJvbSAnLi9tb2R1bGVzL2FwaSc7XG5leHBvcnQge2RldGVjdElmRmlsZVJlZGlyZWN0LCByZWZyZXNoUGFnZX0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuIiwgImltcG9ydCB7Z2VuZXJhdGVBcnJheSwgdW5pcXVlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbnR5cGUgRGV0ZWN0SWZGaWxlUmVkaXJlY3QgPSAocGFnZU5hbWVzOiBzdHJpbmcgfCBzdHJpbmdbXSwgaXNGaWxlTlM/OiBib29sZWFuKSA9PiBQcm9taXNlPHZvaWQ+O1xudHlwZSBSZWZyZXNoUGFnZSA9ICh0aXRsZT86IHN0cmluZykgPT4gdm9pZDtcblxubGV0IHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB7XG5cdGhpZGVUb2FzdDogKCkgPT4ge30sXG59O1xuXG5jb25zdCByZWZyZXNoUGFnZTogUmVmcmVzaFBhZ2UgPSAodGl0bGUpID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+ato+WcqOWIt+aWsOmhtemdoicsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRpZiAodGl0bGUpIHtcblx0XHRsb2NhdGlvbi5yZXBsYWNlKG13LnV0aWwuZ2V0VXJsKHRpdGxlKSk7XG5cdH0gZWxzZSB7XG5cdFx0bG9jYXRpb24ucmVsb2FkKCk7XG5cdH1cbn07XG5cbmNvbnN0IGltcG9ydFBhZ2UgPSBhc3luYyAocGFnZU5hbWU6IHN0cmluZywgaXNGaWxlTlM6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xuXHQvLyDlsIblr7zlhaXmupDnu5/kuIDkuLpxd2JrXG5cdGNvbnN0IGl3cHJlZml4OiBzdHJpbmcgPSAncXdiayc7XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGDlr7zlhaXpobXpnaLkuK3vvJoke2l3cHJlZml4fToke3BhZ2VOYW1lfWAsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRsZXQgc3VtbWFyeTogc3RyaW5nID0gJ+mhtemdouaWh+Wtl+WOn+iuuOWPr++8mltbY2MtYnktc2E6NC4wfENDIEJZLVNBIDQuMF1d77yb5L2c6ICF6K+35Y+C6KeB5p2l5rqQ6aG16Z2i5Y6G5Y+yJztcblx0aWYgKGlzRmlsZU5TKSB7XG5cdFx0c3VtbWFyeSArPSAn77yb5paH5Lu25L2c6ICF6K+35Y+C6KeB5q2k6aG16Z2i5Y+K5p2l5rqQ6aG16Z2i6K6w6L29Jztcblx0fVxuXG5cdGNvbnN0IHBhcmFtczogQXBpSW1wb3J0UGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ2ltcG9ydCcsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0YXNzaWdua25vd251c2VyczogdHJ1ZSxcblx0XHRpbnRlcndpa2lwYWdlOiBwYWdlTmFtZSxcblx0XHRpbnRlcndpa2lwcmVmaXg6IGl3cHJlZml4LFxuXHRcdGludGVyd2lraXNvdXJjZTogaXdwcmVmaXgsXG5cdFx0c3VtbWFyeTogYO+8uyR7c3VtbWFyeX3vvL1gLFxuXHR9O1xuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBhcGkucG9zdFdpdGhFZGl0VG9rZW4ocGFyYW1zKTtcblxuXHRpZiAocmVzdWx0WydpbXBvcnQnXSAmJiByZXN1bHRbJ2ltcG9ydCddWzBdICYmIHJlc3VsdFsnaW1wb3J0J10ucmV2aXNpb25zKSB7XG5cdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0XHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IGDpobXpnaLlr7zlhaXlrozmiJDvvJoke3BhZ2VOYW1lfWAsXG5cdFx0XHRcdGR1cmF0aW9uOiAzICogMTAwMCxcblx0XHRcdH0sXG5cdFx0XHQnc3VjY2Vzcydcblx0XHQpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGDpobXpnaLlr7zlhaXlpLHotKXvvJoke2l3cHJlZml4fToke3BhZ2VOYW1lfWAsXG5cdFx0XHRkdXJhdGlvbjogMyAqIDEwMDAsXG5cdFx0fSxcblx0XHQnd2FybmluZydcblx0KTtcblx0cmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgdXBsb2FkRmlsZSA9IGFzeW5jICh0YXJnZXQ6IHN0cmluZywgdXJsPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBg6L+B56e75paH5Lu25Lit77yaJHt0YXJnZXR9YCxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdpbmZvJ1xuXHQpO1xuXG5cdGNvbnN0IHBhcmFtczogQXBpVXBsb2FkUGFyYW1zID0ge1xuXHRcdHVybDogdXJsID8/IGBodHRwczovL3d3dy5xaXV3ZW5iYWlrZS5jbi93aWtpL1NwZWNpYWw6UmVkaXJlY3QvZmlsZS8ke213LnV0aWwucmF3dXJsZW5jb2RlKHRhcmdldCl9YCxcblx0XHRhY3Rpb246ICd1cGxvYWQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZpbGVuYW1lOiB0YXJnZXQsXG5cdFx0Y29tbWVudDogJ+iHquaxgumXu+eZvuenkei/geenu+aWh+S7ticsXG5cdFx0aWdub3Jld2FybmluZ3M6IHRydWUsXG5cdH07XG5cdGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbihwYXJhbXMpO1xuXG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBg5paH5Lu26L+B56e75a6M5oiQ77yaJHt0YXJnZXR9YCxcblx0XHRcdGR1cmF0aW9uOiAzICogMTAwMCxcblx0XHR9LFxuXHRcdCdzdWNjZXNzJ1xuXHQpO1xufTtcblxuY29uc3QgcXVlcnlJbWFnZUluZm8gPSBhc3luYyAodGl0bGVzOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5SW5mb1BhcmFtcyAmIEFwaVF1ZXJ5SW1hZ2VJbmZvUGFyYW1zID0ge1xuXHRcdHRpdGxlcyxcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6IFsnaW1hZ2VpbmZvJywgJ2luZm8nXSxcblx0XHRpaXByb3A6IFsndXJsJ10sXG5cdFx0cmVkaXJlY3RzOiB0cnVlLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBkZXRlY3RJZkZpbGVSZWRpcmVjdDogRGV0ZWN0SWZGaWxlUmVkaXJlY3QgPSBhc3luYyAocGFnZU5hbWVzLCBpc0ZpbGVOUyA9IGZhbHNlKSA9PiB7XG5cdHBhZ2VOYW1lcyA9IHVuaXF1ZUFycmF5KGdlbmVyYXRlQXJyYXkocGFnZU5hbWVzKSk7XG5cdGNvbnN0IHByb21pc2VzOiAoKCkgPT4gUHJvbWlzZTx2b2lkPilbXSA9IFtdO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcGFnZU5hbWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IHRpdGxlcyA9IHBhZ2VOYW1lcy5zcGxpY2UoMCwgMjUpO1xuXHRcdGlmICghdGl0bGVzLmxlbmd0aCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0cHJvbWlzZXNbcHJvbWlzZXMubGVuZ3RoXSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdC8vIFJlZGlyZWN0IHRhcmdldChzKVxuXHRcdFx0Y29uc3QgdG9zOiBzdHJpbmdbXSA9IFtdO1xuXG5cdFx0XHQvLyBBbmFseXplIHN0ZXAgMTogaW1wb3J0IHBhZ2VzIGl0c2VsZlxuXHRcdFx0Ly8vLyBRdWVyeVxuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBxdWVyeUltYWdlSW5mbyh0aXRsZXMpO1xuXHRcdFx0aWYgKHJlc3BvbnNlWydxdWVyeSddKSB7XG5cdFx0XHRcdC8vLy8gTm9ybWFsaXplXG5cdFx0XHRcdGlmIChyZXNwb25zZVsncXVlcnknXS5ub3JtYWxpemVkKSB7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCB7ZnJvbSwgdG99IG9mIHJlc3BvbnNlWydxdWVyeSddLm5vcm1hbGl6ZWQgYXMge2Zyb206IHN0cmluZzsgdG86IHN0cmluZ31bXSkge1xuXHRcdFx0XHRcdFx0dGl0bGVzID0gdGl0bGVzLm1hcCgoZWxlbWVudCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZWxlbWVudCA9PT0gZnJvbSA/IHRvIDogZWxlbWVudDtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vLy8gSW1wb3J0XG5cdFx0XHRcdGlmIChyZXNwb25zZVsncXVlcnknXS5wYWdlcykge1xuXHRcdFx0XHRcdGZvciAoY29uc3QgcGFnZTEgb2YgcmVzcG9uc2VbJ3F1ZXJ5J10ucGFnZXMpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHRpdGxlID0gcGFnZTEudGl0bGUgYXMgc3RyaW5nO1xuXG5cdFx0XHRcdFx0XHRpZiAoIXBhZ2UxLm1pc3NpbmcpIHtcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIOWwhuWvvOWFpea6kOe7n+S4gOS4unF3Ymtcblx0XHRcdFx0XHRcdGF3YWl0IGltcG9ydFBhZ2UodGl0bGUsIGlzRmlsZU5TKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLy8vIFB1c2ggcmVkaXJlY3QgdGFyZ2V0cyBpbnRvIGFycmF5XG5cdFx0XHRcdGlmIChyZXNwb25zZVsncXVlcnknXS5yZWRpcmVjdHMpIHtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IHt0b30gb2YgcmVzcG9uc2VbJ3F1ZXJ5J10ucmVkaXJlY3RzIGFzIHtmcm9tOiBzdHJpbmc7IHRvOiBzdHJpbmd9W10pIHtcblx0XHRcdFx0XHRcdHRvc1t0b3MubGVuZ3RoXSA9IHRvO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBBbmFseXplIHN0ZXAgMjogZm9yIGZpbGVzLCBjaGVjayBpZiBpdCBpcyBhIHJlZGlyZWN0XG5cdFx0XHRpZiAoaXNGaWxlTlMpIHtcblx0XHRcdFx0Ly8vLyBRdWVyeVxuXHRcdFx0XHRjb25zdCByZXNwb25zZTIgPSBhd2FpdCBxdWVyeUltYWdlSW5mbyh0aXRsZXMpO1xuXHRcdFx0XHRpZiAocmVzcG9uc2UyWydxdWVyeSddKSB7XG5cdFx0XHRcdFx0Ly8vLyBOb3JtYWxpemVcblx0XHRcdFx0XHRpZiAocmVzcG9uc2UyWydxdWVyeSddLm5vcm1hbGl6ZWQpIHtcblx0XHRcdFx0XHRcdGZvciAoY29uc3Qge2Zyb20sIHRvfSBvZiByZXNwb25zZTJbJ3F1ZXJ5J10ubm9ybWFsaXplZCBhcyB7ZnJvbTogc3RyaW5nOyB0bzogc3RyaW5nfVtdKSB7XG5cdFx0XHRcdFx0XHRcdHRpdGxlcyA9IHRpdGxlcy5tYXAoKGVsZW1lbnQpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZWxlbWVudCA9PT0gZnJvbSA/IHRvIDogZWxlbWVudDtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8vLyB1cGxvYWRcblx0XHRcdFx0XHRpZiAocmVzcG9uc2UyWydxdWVyeSddLnBhZ2VzKSB7XG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IHBhZ2UyIG9mIHJlc3BvbnNlMlsncXVlcnknXS5wYWdlcykge1xuXHRcdFx0XHRcdFx0XHRjb25zdCB0aXRsZSA9IHBhZ2UyLnRpdGxlIGFzIHN0cmluZztcblxuXHRcdFx0XHRcdFx0XHRpZiAocGFnZTIubWlzc2luZyB8fCBwYWdlMi5yZWRpcmVjdCkge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0aWYgKHBhZ2UyLmltYWdlcmVwb3NpdG9yeSAmJiBwYWdlMi5pbWFnZXJlcG9zaXRvcnkgIT09ICdsb2NhbCcpIHtcblx0XHRcdFx0XHRcdFx0XHQvLyDkvb/nlKhxaXV3ZW5iYWlrZeeahOaWh+S7tlVSTFxuXHRcdFx0XHRcdFx0XHRcdGF3YWl0IHVwbG9hZEZpbGUodGl0bGUsIHBhZ2UyLmltYWdlaW5mb1swXS51cmwpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKHJlc3BvbnNlMlsncXVlcnknXS5yZWRpcmVjdHMpIHtcblx0XHRcdFx0XHRcdGZvciAoY29uc3Qge3RvfSBvZiByZXNwb25zZTJbJ3F1ZXJ5J10ucmVkaXJlY3RzIGFzIHtmcm9tOiBzdHJpbmc7IHRvOiBzdHJpbmd9W10pIHtcblx0XHRcdFx0XHRcdFx0dG9zW3Rvcy5sZW5ndGhdID0gdG87XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFuYWx5emUgc3RlcCAzOiBpbXBvcnQgcGFnZXMgYXMgcmVkaXJlY3QgdGFyZ2V0XG5cdFx0XHQvLy8vIFF1ZXVlIHJlcXVlc3RzIHRvIGltcG9ydCByZWRpcmVjdCB0YXJnZXRzXG5cdFx0XHRpZiAodG9zLmxlbmd0aCkge1xuXHRcdFx0XHRhd2FpdCBkZXRlY3RJZkZpbGVSZWRpcmVjdCh1bmlxdWVBcnJheSh0b3MpKTsgLy8gUmVwbGFjZSBTZXQgd2l0aCB1bmlxdWVBcnJheSwgYXZvaWRpbmcgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cblxuXHRmb3IgKGNvbnN0IHByb21pc2Ugb2YgcHJvbWlzZXMpIHtcblx0XHR0cnkge1xuXHRcdFx0YXdhaXQgcHJvbWlzZSgpO1xuXHRcdH0gY2F0Y2gge31cblx0fVxufTtcblxuZXhwb3J0IHt0eXBlIERldGVjdElmRmlsZVJlZGlyZWN0LCBkZXRlY3RJZkZpbGVSZWRpcmVjdCwgdHlwZSBSZWZyZXNoUGFnZSwgcmVmcmVzaFBhZ2V9O1xuIiwgIntcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFF1aWNrSW1wb3J0LyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FB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R0FBQWpILE9BQWlCd0gsY0FBWSxJQUFBLEVBQUF4SCxPQUFLeUgsVUFBUSxHQUFBO0FBQzFDLFlBQUlBLGFBQWEsT0FBTztBQUN2QlAsd0JBQUEsR0FBQWxILE9BQWlCd0gsY0FBWSxRQUFBO1FBQzlCLFdBQVdDLGFBQWEsT0FBTztBQUM5QlAsd0JBQUEsR0FBQWxILE9BQWlCd0gsY0FBWSxRQUFBO1FBQzlCO01BQ0Q7SUFDRCxRQUFRO0lBQUM7RUFDVjtBQUVBOUMsVUFBUWdELGlCQUFpQixTQUFTLE1BQVk7QUFDN0MsU0FBQTFHLGtCQUFNLGFBQVk7QUFDakIsWUFBTUMsV0FBbUJ3RixnQkFBZ0JBLGNBQWNrQixlQUFlckIsYUFBYUE7QUFDbkYsWUFBTS9DLFlBQVksQ0FBQ3RDLFFBQVE7QUFDM0IsVUFBSWdHLGFBQWE7QUFDaEIxRCxrQkFBVUEsVUFBVUssTUFBTSxJQUFJcUQ7TUFDL0I7QUFDQSxVQUFJQyxhQUFhO0FBQ2hCM0Qsa0JBQVVBLFVBQVVLLE1BQU0sSUFBSXNEO01BQy9CO0FBQ0EsWUFBTTVILHNCQUFxQmlFLFdBQVdyQyxRQUFRO0lBQy9DLENBQUEsRUFBRyxFQUFFMEcsS0FBSyxNQUFNO0FBQUEsVUFBQUM7QUFDZnRJLG1CQUFBc0ksUUFBWVgsZ0JBQUEsUUFBQUEsZ0JBQUEsU0FBQUEsY0FBZUQsaUJBQUEsUUFBQVksVUFBQSxTQUFBQSxRQUFldkIsVUFBVTtJQUNyRCxDQUFDO0VBQ0YsQ0FBQztBQUNGLEdBQUc7QUFFSHdCLE9BQU94SSx1QkFBdUJBOyIsCiAgIm5hbWVzIjogWyJRdWlja0ltcG9ydF9leHBvcnRzIiwgIl9fZXhwb3J0IiwgImFwaSIsICJkZXRlY3RJZkZpbGVSZWRpcmVjdCIsICJyZWZyZXNoUGFnZSIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJfX3RvQ29tbW9uSlMiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJ0b2FzdGlmeUluc3RhbmNlIiwgImhpZGVUb2FzdCIsICJ0aXRsZSIsICJ0b2FzdGlmeSIsICJ0ZXh0IiwgImR1cmF0aW9uIiwgImxvY2F0aW9uIiwgInJlcGxhY2UiLCAibXciLCAidXRpbCIsICJnZXRVcmwiLCAicmVsb2FkIiwgImltcG9ydFBhZ2UiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJwYWdlTmFtZSIsICJpc0ZpbGVOUyIsICJpd3ByZWZpeCIsICJzdW1tYXJ5IiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImFzc2lnbmtub3dudXNlcnMiLCAiaW50ZXJ3aWtpcGFnZSIsICJpbnRlcndpa2lwcmVmaXgiLCAiaW50ZXJ3aWtpc291cmNlIiwgInJlc3VsdCIsICJwb3N0V2l0aEVkaXRUb2tlbiIsICJyZXZpc2lvbnMiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgInVwbG9hZEZpbGUiLCAiX3JlZjIiLCAidGFyZ2V0IiwgInVybCIsICJyYXd1cmxlbmNvZGUiLCAiZmlsZW5hbWUiLCAiY29tbWVudCIsICJpZ25vcmV3YXJuaW5ncyIsICJfeDIiLCAiX3gzIiwgInF1ZXJ5SW1hZ2VJbmZvIiwgIl9yZWYzIiwgInRpdGxlcyIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAiaWlwcm9wIiwgInJlZGlyZWN0cyIsICJyZXNwb25zZSIsICJnZXQiLCAiX3g0IiwgIl9yZWY0IiwgInBhZ2VOYW1lcyIsICJ1bmlxdWVBcnJheSIsICJnZW5lcmF0ZUFycmF5IiwgInByb21pc2VzIiwgImkiLCAibGVuZ3RoIiwgInNwbGljZSIsICJ0b3MiLCAibm9ybWFsaXplZCIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJmcm9tIiwgInRvIiwgInZhbHVlIiwgIm1hcCIsICJlbGVtZW50IiwgImVyciIsICJlIiwgImYiLCAicGFnZXMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAicGFnZTEiLCAibWlzc2luZyIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJyZXNwb25zZTIiLCAiX2l0ZXJhdG9yNSIsICJfc3RlcDUiLCAiX2l0ZXJhdG9yNiIsICJfc3RlcDYiLCAicGFnZTIiLCAicmVkaXJlY3QiLCAiaW1hZ2VyZXBvc2l0b3J5IiwgImltYWdlaW5mbyIsICJfaXRlcmF0b3I3IiwgIl9zdGVwNyIsICJfaSIsICJfcHJvbWlzZXMiLCAicHJvbWlzZSIsICJfeDUiLCAicXVpY2tJbXBvcnQiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAid2dQYWdlTmFtZSIsICJ3Z1dpa2lJRCIsICJjb25maWciLCAicmVkaXJlY3RUZXh0QSIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgImhhc013Tm9hcnRpY2xldGV4dCIsICJsYWJlbCIsICJidXR0b25MYWJlbCIsICJwb3J0bGV0SWQiLCAiYWRkUG9ydGxldExpbmsiLCAid2dQYWdlTmFtZTIiLCAid2dQYWdlTmFtZTMiLCAiZGlzYW1SZWdFeHBGVyIsICJtYXRjaEZXIiwgIm1hdGNoIiwgImRpc2FtUmVnRXhwSFciLCAibWF0Y2hIVyIsICJyb290UGFnZU5hbWUiLCAiZGlzYW1LZXkiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJ0ZXh0Q29udGVudCIsICJ0aGVuIiwgIl9yZWY3IiwgIndpbmRvdyJdCn0K
