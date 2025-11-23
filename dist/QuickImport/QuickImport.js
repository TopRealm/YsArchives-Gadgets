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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0L1F1aWNrSW1wb3J0LnRzIiwgInNyYy9RdWlja0ltcG9ydC9tb2R1bGVzL2NvcmUudHMiLCAic3JjL1F1aWNrSW1wb3J0L29wdGlvbnMuanNvbiIsICJzcmMvUXVpY2tJbXBvcnQvbW9kdWxlcy9hcGkudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHJlZnJlc2hQYWdlfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbihmdW5jdGlvbiBxdWlja0ltcG9ydCgpOiB2b2lkIHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lLCB3Z1dpa2lJRH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Ly8g5L+u5pS55qOA5rWL5Zmo77yM5p+l5om+5oyH5ZCRcWl1d2VuYmFpa2UuY27nmoTlpJbpg6jpk77mjqVcblx0Y29uc3QgcmVkaXJlY3RUZXh0QSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWRpcmVjdFRleHQgYScpO1xuXG5cdGNvbnN0IGlzRmlsZU5TOiBib29sZWFuID0gd2dOYW1lc3BhY2VOdW1iZXIgPT09IDY7XG5cdGNvbnN0IGhhc013Tm9hcnRpY2xldGV4dDogYm9vbGVhbiA9ICEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI213LW5vYXJ0aWNsZXRleHQnKTtcblxuXHQvLyDlsIblr7zlhaXmupDmlLnkuLpxd2JrXG5cdGNvbnN0IGl3cHJlZml4OiBzdHJpbmcgPSAncXdiayc7XG5cblx0Y29uc3QgbGFiZWw6IHN0cmluZyA9IGlzRmlsZU5TICYmICFoYXNNd05vYXJ0aWNsZXRleHQgPyBpd3ByZWZpeCA6ICcnO1xuXHRjb25zdCBidXR0b25MYWJlbDogc3RyaW5nID0gaXNGaWxlTlNcblx0XHQ/IGxhYmVsXG5cdFx0XHQ/IGDmlofku7bvvIgke2xhYmVsfe+8iWBcblx0XHRcdDogJ+mhtemdoidcblx0XHQ6IHJlZGlyZWN0VGV4dEFcblx0XHRcdD8gJ+mHjeWumuWQkeebruaghydcblx0XHRcdDogJ+mhtemdoic7XG5cblx0aWYgKCh3Z1dpa2lJRCAhPT0gJ3pocWl1d2VuYmFpa2UnICYmIGlzRmlsZU5TKSB8fCB3Z05hbWVzcGFjZU51bWJlciA8IDApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwb3J0bGV0SWQ6ICdwLWNhY3Rpb25zJyB8ICdwLXRiJyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwLWNhY3Rpb25zJykgPyAncC1jYWN0aW9ucycgOiAncC10Yic7XG5cdGNvbnN0IGVsZW1lbnQ6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhwb3J0bGV0SWQsICcjJywgYOWvvOWFpSR7YnV0dG9uTGFiZWx9YCwgJ3QtaW1wb3J0Jyk7XG5cdGlmICghZWxlbWVudCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxldCB3Z1BhZ2VOYW1lMjogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRsZXQgd2dQYWdlTmFtZTM6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHRpZiAoIWlzRmlsZU5TKSB7XG5cdFx0Ly8gTWF0Y2hpbmcgZGlzYW1pZy1lZCBwYWdlcyB3aXRoIGZ1bGwtd2lkdGggcGFyZW50aGVzZXNcblx0XHRjb25zdCBkaXNhbVJlZ0V4cEZXID0gL14oLiop77yIKC4qPynvvIkkLztcblx0XHRjb25zdCBtYXRjaEZXID0gd2dQYWdlTmFtZS5tYXRjaChkaXNhbVJlZ0V4cEZXKTtcblx0XHQvLyBNYXRjaGluZyBkaXNhbWlnLWVkIHBhZ2VzIHdpdGggaGFsZi13aWR0aCBwYXJlbnRoZXNlc1xuXHRcdGNvbnN0IGRpc2FtUmVnRXhwSFcgPSAvXiguKilbXyBdXFwoKC4qPylcXCkkLztcblx0XHRjb25zdCBtYXRjaEhXID0gd2dQYWdlTmFtZS5tYXRjaChkaXNhbVJlZ0V4cEhXKTtcblxuXHRcdHRyeSB7XG5cdFx0XHQvLyByb290IHBhZ2UgbmFtZSBhbmQgZGlzYW1iaWcta2V5XG5cdFx0XHRsZXQgcm9vdFBhZ2VOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQsIGRpc2FtS2V5OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0XHRcdGlmIChtYXRjaEZXKSB7XG5cdFx0XHRcdFssIHJvb3RQYWdlTmFtZSwgZGlzYW1LZXldID0gbWF0Y2hGVztcblx0XHRcdH0gZWxzZSBpZiAobWF0Y2hIVykge1xuXHRcdFx0XHRbLCByb290UGFnZU5hbWUsIGRpc2FtS2V5XSA9IG1hdGNoSFc7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChyb290UGFnZU5hbWUgJiYgZGlzYW1LZXkpIHtcblx0XHRcdFx0d2dQYWdlTmFtZTIgPSBgJHtyb290UGFnZU5hbWV9Xygke2Rpc2FtS2V5fSlgO1xuXHRcdFx0XHRpZiAoZGlzYW1LZXkgPT09ICfmtojmrafkuYknKSB7XG5cdFx0XHRcdFx0d2dQYWdlTmFtZTMgPSBgJHtyb290UGFnZU5hbWV9XyjmtojmrafnvqkpYDtcblx0XHRcdFx0fSBlbHNlIGlmIChkaXNhbUtleSA9PT0gJ+a2iOatp+e+qScpIHtcblx0XHRcdFx0XHR3Z1BhZ2VOYW1lMyA9IGAke3Jvb3RQYWdlTmFtZX1fKOa2iOatp+S5iSlgO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7fVxuXHR9XG5cblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHR2b2lkIChhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCBwYWdlTmFtZTogc3RyaW5nID0gcmVkaXJlY3RUZXh0QSA/IHJlZGlyZWN0VGV4dEEudGV4dENvbnRlbnQgfHwgd2dQYWdlTmFtZSA6IHdnUGFnZU5hbWU7XG5cdFx0XHRjb25zdCBwYWdlTmFtZXMgPSBbcGFnZU5hbWVdO1xuXHRcdFx0aWYgKHdnUGFnZU5hbWUyKSB7XG5cdFx0XHRcdHBhZ2VOYW1lc1twYWdlTmFtZXMubGVuZ3RoXSA9IHdnUGFnZU5hbWUyO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHdnUGFnZU5hbWUzKSB7XG5cdFx0XHRcdHBhZ2VOYW1lc1twYWdlTmFtZXMubGVuZ3RoXSA9IHdnUGFnZU5hbWUzO1xuXHRcdFx0fVxuXHRcdFx0YXdhaXQgZGV0ZWN0SWZGaWxlUmVkaXJlY3QocGFnZU5hbWVzLCBpc0ZpbGVOUyk7XG5cdFx0fSkoKS50aGVuKCgpID0+IHtcblx0XHRcdHJlZnJlc2hQYWdlKHdnUGFnZU5hbWUzID8/IHdnUGFnZU5hbWUyID8/IHdnUGFnZU5hbWUpO1xuXHRcdH0pO1xuXHR9KTtcbn0pKCk7XG5cbndpbmRvdy5kZXRlY3RJZkZpbGVSZWRpcmVjdCA9IGRldGVjdElmRmlsZVJlZGlyZWN0O1xuXG5leHBvcnQge2FwaX0gZnJvbSAnLi9tb2R1bGVzL2FwaSc7XG5leHBvcnQge2RldGVjdElmRmlsZVJlZGlyZWN0LCByZWZyZXNoUGFnZX0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuIiwgImltcG9ydCB7Z2VuZXJhdGVBcnJheSwgdW5pcXVlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbnR5cGUgRGV0ZWN0SWZGaWxlUmVkaXJlY3QgPSAocGFnZU5hbWVzOiBzdHJpbmcgfCBzdHJpbmdbXSwgaXNGaWxlTlM/OiBib29sZWFuKSA9PiBQcm9taXNlPHZvaWQ+O1xudHlwZSBSZWZyZXNoUGFnZSA9ICh0aXRsZT86IHN0cmluZykgPT4gdm9pZDtcblxubGV0IHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB7XG5cdGhpZGVUb2FzdDogKCkgPT4ge30sXG59O1xuXG5jb25zdCByZWZyZXNoUGFnZTogUmVmcmVzaFBhZ2UgPSAodGl0bGUpID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+ato+WcqOWIt+aWsOmhtemdoicsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRpZiAodGl0bGUpIHtcblx0XHRsb2NhdGlvbi5yZXBsYWNlKG13LnV0aWwuZ2V0VXJsKHRpdGxlKSk7XG5cdH0gZWxzZSB7XG5cdFx0bG9jYXRpb24ucmVsb2FkKCk7XG5cdH1cbn07XG5cbmNvbnN0IGltcG9ydFBhZ2UgPSBhc3luYyAocGFnZU5hbWU6IHN0cmluZywgaXNGaWxlTlM6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xuXHQvLyDlsIblr7zlhaXmupDnu5/kuIDkuLpxd2JrXG5cdGNvbnN0IGl3cHJlZml4OiBzdHJpbmcgPSAncXdiayc7XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGDlr7zlhaXpobXpnaLkuK3vvJoke2l3cHJlZml4fToke3BhZ2VOYW1lfWAsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRsZXQgc3VtbWFyeTogc3RyaW5nID0gJ+mhtemdouaWh+Wtl+WOn+iuuOWPr++8mltbY2MtYnktc2E6NC4wfENDIEJZLVNBIDQuMF1d77yb5L2c6ICF6K+35Y+C6KeB5p2l5rqQ6aG16Z2i5Y6G5Y+yJztcblx0aWYgKGlzRmlsZU5TKSB7XG5cdFx0c3VtbWFyeSArPSAn77yb5paH5Lu25L2c6ICF6K+35Y+C6KeB5q2k6aG16Z2i5Y+K5p2l5rqQ6aG16Z2i6K6w6L29Jztcblx0fVxuXG5cdGNvbnN0IHBhcmFtczogQXBpSW1wb3J0UGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ2ltcG9ydCcsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0YXNzaWdua25vd251c2VyczogdHJ1ZSxcblx0XHRpbnRlcndpa2lwYWdlOiBwYWdlTmFtZSxcblx0XHRpbnRlcndpa2lwcmVmaXg6IGl3cHJlZml4LFxuXHRcdGludGVyd2lraXNvdXJjZTogaXdwcmVmaXgsXG5cdFx0c3VtbWFyeTogYO+8uyR7c3VtbWFyeX3vvL1gLFxuXHR9O1xuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBhcGkucG9zdFdpdGhFZGl0VG9rZW4ocGFyYW1zKTtcblxuXHRpZiAocmVzdWx0WydpbXBvcnQnXSAmJiByZXN1bHRbJ2ltcG9ydCddWzBdICYmIHJlc3VsdFsnaW1wb3J0J10ucmV2aXNpb25zKSB7XG5cdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0XHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IGDpobXpnaLlr7zlhaXlrozmiJDvvJoke3BhZ2VOYW1lfWAsXG5cdFx0XHRcdGR1cmF0aW9uOiAzICogMTAwMCxcblx0XHRcdH0sXG5cdFx0XHQnc3VjY2Vzcydcblx0XHQpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGDpobXpnaLlr7zlhaXlpLHotKXvvJoke2l3cHJlZml4fToke3BhZ2VOYW1lfWAsXG5cdFx0XHRkdXJhdGlvbjogMyAqIDEwMDAsXG5cdFx0fSxcblx0XHQnd2FybmluZydcblx0KTtcblx0cmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgdXBsb2FkRmlsZSA9IGFzeW5jICh0YXJnZXQ6IHN0cmluZywgdXJsPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBg6L+B56e75paH5Lu25Lit77yaJHt0YXJnZXR9YCxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdpbmZvJ1xuXHQpO1xuXG5cdGNvbnN0IHBhcmFtczogQXBpVXBsb2FkUGFyYW1zID0ge1xuXHRcdHVybDogdXJsID8/IGBodHRwczovL3d3dy5xaXV3ZW5iYWlrZS5jbi93aWtpL1NwZWNpYWw6UmVkaXJlY3QvZmlsZS8ke213LnV0aWwucmF3dXJsZW5jb2RlKHRhcmdldCl9YCxcblx0XHRhY3Rpb246ICd1cGxvYWQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZpbGVuYW1lOiB0YXJnZXQsXG5cdFx0Y29tbWVudDogJ+iHquaxgumXu+eZvuenkei/geenu+aWh+S7ticsXG5cdFx0aWdub3Jld2FybmluZ3M6IHRydWUsXG5cdH07XG5cdGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbihwYXJhbXMpO1xuXG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBg5paH5Lu26L+B56e75a6M5oiQ77yaJHt0YXJnZXR9YCxcblx0XHRcdGR1cmF0aW9uOiAzICogMTAwMCxcblx0XHR9LFxuXHRcdCdzdWNjZXNzJ1xuXHQpO1xufTtcblxuY29uc3QgcXVlcnlJbWFnZUluZm8gPSBhc3luYyAodGl0bGVzOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5SW5mb1BhcmFtcyAmIEFwaVF1ZXJ5SW1hZ2VJbmZvUGFyYW1zID0ge1xuXHRcdHRpdGxlcyxcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6IFsnaW1hZ2VpbmZvJywgJ2luZm8nXSxcblx0XHRpaXByb3A6IFsndXJsJ10sXG5cdFx0cmVkaXJlY3RzOiB0cnVlLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBkZXRlY3RJZkZpbGVSZWRpcmVjdDogRGV0ZWN0SWZGaWxlUmVkaXJlY3QgPSBhc3luYyAocGFnZU5hbWVzLCBpc0ZpbGVOUyA9IGZhbHNlKSA9PiB7XG5cdC8vIGdlbmVyYXRlQXJyYXkvdW5pcXVlQXJyYXkg5Zyo5q2k5aSE5L+d6K+B5Y+q5Lqn55Sf5a2X56ym5Liy5qCH6aKY77yM5bey5Lq65bel56Gu6K6k5a6J5YWoXG5cdCBcblx0Y29uc3QgdGl0bGVzQXJyYXkgPSB1bmlxdWVBcnJheShnZW5lcmF0ZUFycmF5KHBhZ2VOYW1lcykpO1xuXHRjb25zdCBwcm9taXNlczogKCgpID0+IFByb21pc2U8dm9pZD4pW10gPSBbXTtcblxuXHR3aGlsZSAodGl0bGVzQXJyYXkubGVuZ3RoKSB7XG5cdFx0bGV0IHRpdGxlczogc3RyaW5nW10gPSB0aXRsZXNBcnJheS5zcGxpY2UoMCwgMjUpO1xuXHRcdGlmICghdGl0bGVzLmxlbmd0aCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0cHJvbWlzZXNbcHJvbWlzZXMubGVuZ3RoXSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdC8vIFJlZGlyZWN0IHRhcmdldChzKVxuXHRcdFx0Y29uc3QgdG9zOiBzdHJpbmdbXSA9IFtdO1xuXG5cdFx0XHQvLyBBbmFseXplIHN0ZXAgMTogaW1wb3J0IHBhZ2VzIGl0c2VsZlxuXHRcdFx0Ly8vLyBRdWVyeVxuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBxdWVyeUltYWdlSW5mbyh0aXRsZXMpO1xuXHRcdFx0aWYgKHJlc3BvbnNlWydxdWVyeSddKSB7XG5cdFx0XHRcdC8vLy8gTm9ybWFsaXplXG5cdFx0XHRcdGlmIChyZXNwb25zZVsncXVlcnknXS5ub3JtYWxpemVkKSB7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCB7ZnJvbSwgdG99IG9mIHJlc3BvbnNlWydxdWVyeSddLm5vcm1hbGl6ZWQgYXMge2Zyb206IHN0cmluZzsgdG86IHN0cmluZ31bXSkge1xuXHRcdFx0XHRcdFx0dGl0bGVzID0gdGl0bGVzLm1hcCgoZWxlbWVudCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZWxlbWVudCA9PT0gZnJvbSA/IHRvIDogZWxlbWVudDtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vLy8gSW1wb3J0XG5cdFx0XHRcdGlmIChyZXNwb25zZVsncXVlcnknXS5wYWdlcykge1xuXHRcdFx0XHRcdGZvciAoY29uc3QgcGFnZTEgb2YgcmVzcG9uc2VbJ3F1ZXJ5J10ucGFnZXMpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHRpdGxlID0gcGFnZTEudGl0bGUgYXMgc3RyaW5nO1xuXG5cdFx0XHRcdFx0XHRpZiAoIXBhZ2UxLm1pc3NpbmcpIHtcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIOWwhuWvvOWFpea6kOe7n+S4gOS4unF3Ymtcblx0XHRcdFx0XHRcdGF3YWl0IGltcG9ydFBhZ2UodGl0bGUsIGlzRmlsZU5TKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLy8vIFB1c2ggcmVkaXJlY3QgdGFyZ2V0cyBpbnRvIGFycmF5XG5cdFx0XHRcdGlmIChyZXNwb25zZVsncXVlcnknXS5yZWRpcmVjdHMpIHtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IHt0b30gb2YgcmVzcG9uc2VbJ3F1ZXJ5J10ucmVkaXJlY3RzIGFzIHtmcm9tOiBzdHJpbmc7IHRvOiBzdHJpbmd9W10pIHtcblx0XHRcdFx0XHRcdHRvc1t0b3MubGVuZ3RoXSA9IHRvO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBBbmFseXplIHN0ZXAgMjogZm9yIGZpbGVzLCBjaGVjayBpZiBpdCBpcyBhIHJlZGlyZWN0XG5cdFx0XHRpZiAoaXNGaWxlTlMpIHtcblx0XHRcdFx0Ly8vLyBRdWVyeVxuXHRcdFx0XHRjb25zdCByZXNwb25zZTIgPSBhd2FpdCBxdWVyeUltYWdlSW5mbyh0aXRsZXMpO1xuXHRcdFx0XHRpZiAocmVzcG9uc2UyWydxdWVyeSddKSB7XG5cdFx0XHRcdFx0Ly8vLyBOb3JtYWxpemVcblx0XHRcdFx0XHRpZiAocmVzcG9uc2UyWydxdWVyeSddLm5vcm1hbGl6ZWQpIHtcblx0XHRcdFx0XHRcdGZvciAoY29uc3Qge2Zyb20sIHRvfSBvZiByZXNwb25zZTJbJ3F1ZXJ5J10ubm9ybWFsaXplZCBhcyB7ZnJvbTogc3RyaW5nOyB0bzogc3RyaW5nfVtdKSB7XG5cdFx0XHRcdFx0XHRcdHRpdGxlcyA9IHRpdGxlcy5tYXAoKGVsZW1lbnQpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZWxlbWVudCA9PT0gZnJvbSA/IHRvIDogZWxlbWVudDtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8vLyB1cGxvYWRcblx0XHRcdFx0XHRpZiAocmVzcG9uc2UyWydxdWVyeSddLnBhZ2VzKSB7XG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IHBhZ2UyIG9mIHJlc3BvbnNlMlsncXVlcnknXS5wYWdlcykge1xuXHRcdFx0XHRcdFx0XHRjb25zdCB0aXRsZSA9IHBhZ2UyLnRpdGxlIGFzIHN0cmluZztcblxuXHRcdFx0XHRcdFx0XHRpZiAocGFnZTIubWlzc2luZyB8fCBwYWdlMi5yZWRpcmVjdCkge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0aWYgKHBhZ2UyLmltYWdlcmVwb3NpdG9yeSAmJiBwYWdlMi5pbWFnZXJlcG9zaXRvcnkgIT09ICdsb2NhbCcpIHtcblx0XHRcdFx0XHRcdFx0XHQvLyDkvb/nlKh3aWtp5paH5Lu2VVJMXG5cdFx0XHRcdFx0XHRcdFx0YXdhaXQgdXBsb2FkRmlsZSh0aXRsZSwgcGFnZTIuaW1hZ2VpbmZvWzBdLnVybCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAocmVzcG9uc2UyWydxdWVyeSddLnJlZGlyZWN0cykge1xuXHRcdFx0XHRcdFx0Zm9yIChjb25zdCB7dG99IG9mIHJlc3BvbnNlMlsncXVlcnknXS5yZWRpcmVjdHMgYXMge2Zyb206IHN0cmluZzsgdG86IHN0cmluZ31bXSkge1xuXHRcdFx0XHRcdFx0XHR0b3NbdG9zLmxlbmd0aF0gPSB0bztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gQW5hbHl6ZSBzdGVwIDM6IGltcG9ydCBwYWdlcyBhcyByZWRpcmVjdCB0YXJnZXRcblx0XHRcdC8vLy8gUXVldWUgcmVxdWVzdHMgdG8gaW1wb3J0IHJlZGlyZWN0IHRhcmdldHNcblx0XHRcdGlmICh0b3MubGVuZ3RoKSB7XG5cdFx0XHRcdGF3YWl0IGRldGVjdElmRmlsZVJlZGlyZWN0KHVuaXF1ZUFycmF5KHRvcykpOyAvLyBSZXBsYWNlIFNldCB3aXRoIHVuaXF1ZUFycmF5LCBhdm9pZGluZyBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdFx0XHR9XG5cdFx0fTtcblx0fVxuXG5cdGZvciAoY29uc3QgcHJvbWlzZSBvZiBwcm9taXNlcykge1xuXHRcdHRyeSB7XG5cdFx0XHRhd2FpdCBwcm9taXNlKCk7XG5cdFx0fSBjYXRjaCB7fVxuXHR9XG59O1xuXG5leHBvcnQge3R5cGUgRGV0ZWN0SWZGaWxlUmVkaXJlY3QsIGRldGVjdElmRmlsZVJlZGlyZWN0LCB0eXBlIFJlZnJlc2hQYWdlLCByZWZyZXNoUGFnZX07XG4iLCAie1xuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgUXVpY2tJbXBvcnQvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFDbkIsU0FBQSxFQUFHQyxjQUFjQyxRQUFRLElBQUlGO01BQzlCO0FBRUEsVUFBSUMsZ0JBQWdCQyxVQUFVO0FBQzdCUixzQkFBQSxHQUFBakgsT0FBaUJ3SCxjQUFZLElBQUEsRUFBQXhILE9BQUt5SCxVQUFRLEdBQUE7QUFDMUMsWUFBSUEsYUFBYSxPQUFPO0FBQ3ZCUCx3QkFBQSxHQUFBbEgsT0FBaUJ3SCxjQUFZLFFBQUE7UUFDOUIsV0FBV0MsYUFBYSxPQUFPO0FBQzlCUCx3QkFBQSxHQUFBbEgsT0FBaUJ3SCxjQUFZLFFBQUE7UUFDOUI7TUFDRDtJQUNELFFBQVE7SUFBQztFQUNWO0FBRUE5QyxVQUFRZ0QsaUJBQWlCLFNBQVMsTUFBWTtBQUM3QyxTQUFBMUcsa0JBQU0sYUFBWTtBQUNqQixZQUFNQyxXQUFtQndGLGdCQUFnQkEsY0FBY2tCLGVBQWVyQixhQUFhQTtBQUNuRixZQUFNL0MsWUFBWSxDQUFDdEMsUUFBUTtBQUMzQixVQUFJZ0csYUFBYTtBQUNoQjFELGtCQUFVQSxVQUFVSyxNQUFNLElBQUlxRDtNQUMvQjtBQUNBLFVBQUlDLGFBQWE7QUFDaEIzRCxrQkFBVUEsVUFBVUssTUFBTSxJQUFJc0Q7TUFDL0I7QUFDQSxZQUFNNUgsc0JBQXFCaUUsV0FBV3JDLFFBQVE7SUFDL0MsQ0FBQSxFQUFHLEVBQUUwRyxLQUFLLE1BQU07QUFBQSxVQUFBQztBQUNmdEksbUJBQUFzSSxRQUFZWCxnQkFBQSxRQUFBQSxnQkFBQSxTQUFBQSxjQUFlRCxpQkFBQSxRQUFBWSxVQUFBLFNBQUFBLFFBQWV2QixVQUFVO0lBQ3JELENBQUM7RUFDRixDQUFDO0FBQ0YsR0FBRztBQUVId0IsT0FBT3hJLHVCQUF1QkE7IiwKICAibmFtZXMiOiBbIlF1aWNrSW1wb3J0X2V4cG9ydHMiLCAiX19leHBvcnQiLCAiYXBpIiwgImRldGVjdElmRmlsZVJlZGlyZWN0IiwgInJlZnJlc2hQYWdlIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIl9fdG9Db21tb25KUyIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgInRvYXN0aWZ5SW5zdGFuY2UiLCAiaGlkZVRvYXN0IiwgInRpdGxlIiwgInRvYXN0aWZ5IiwgInRleHQiLCAiZHVyYXRpb24iLCAibG9jYXRpb24iLCAicmVwbGFjZSIsICJtdyIsICJ1dGlsIiwgImdldFVybCIsICJyZWxvYWQiLCAiaW1wb3J0UGFnZSIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInBhZ2VOYW1lIiwgImlzRmlsZU5TIiwgIml3cHJlZml4IiwgInN1bW1hcnkiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiYXNzaWdua25vd251c2VycyIsICJpbnRlcndpa2lwYWdlIiwgImludGVyd2lraXByZWZpeCIsICJpbnRlcndpa2lzb3VyY2UiLCAicmVzdWx0IiwgInBvc3RXaXRoRWRpdFRva2VuIiwgInJldmlzaW9ucyIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAidXBsb2FkRmlsZSIsICJfcmVmMiIsICJ0YXJnZXQiLCAidXJsIiwgInJhd3VybGVuY29kZSIsICJmaWxlbmFtZSIsICJjb21tZW50IiwgImlnbm9yZXdhcm5pbmdzIiwgIl94MiIsICJfeDMiLCAicXVlcnlJbWFnZUluZm8iLCAiX3JlZjMiLCAidGl0bGVzIiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJpaXByb3AiLCAicmVkaXJlY3RzIiwgInJlc3BvbnNlIiwgImdldCIsICJfeDQiLCAiX3JlZjQiLCAicGFnZU5hbWVzIiwgInRpdGxlc0FycmF5IiwgInVuaXF1ZUFycmF5IiwgImdlbmVyYXRlQXJyYXkiLCAicHJvbWlzZXMiLCAibGVuZ3RoIiwgInNwbGljZSIsICJ0b3MiLCAibm9ybWFsaXplZCIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJmcm9tIiwgInRvIiwgInZhbHVlIiwgIm1hcCIsICJlbGVtZW50IiwgImVyciIsICJlIiwgImYiLCAicGFnZXMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAicGFnZTEiLCAibWlzc2luZyIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJyZXNwb25zZTIiLCAiX2l0ZXJhdG9yNSIsICJfc3RlcDUiLCAiX2l0ZXJhdG9yNiIsICJfc3RlcDYiLCAicGFnZTIiLCAicmVkaXJlY3QiLCAiaW1hZ2VyZXBvc2l0b3J5IiwgImltYWdlaW5mbyIsICJfaXRlcmF0b3I3IiwgIl9zdGVwNyIsICJfaSIsICJfcHJvbWlzZXMiLCAicHJvbWlzZSIsICJfeDUiLCAicXVpY2tJbXBvcnQiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAid2dQYWdlTmFtZSIsICJ3Z1dpa2lJRCIsICJjb25maWciLCAicmVkaXJlY3RUZXh0QSIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgImhhc013Tm9hcnRpY2xldGV4dCIsICJsYWJlbCIsICJidXR0b25MYWJlbCIsICJwb3J0bGV0SWQiLCAiYWRkUG9ydGxldExpbmsiLCAid2dQYWdlTmFtZTIiLCAid2dQYWdlTmFtZTMiLCAiZGlzYW1SZWdFeHBGVyIsICJtYXRjaEZXIiwgIm1hdGNoIiwgImRpc2FtUmVnRXhwSFciLCAibWF0Y2hIVyIsICJyb290UGFnZU5hbWUiLCAiZGlzYW1LZXkiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJ0ZXh0Q29udGVudCIsICJ0aGVuIiwgIl9yZWY3IiwgIndpbmRvdyJdCn0K
