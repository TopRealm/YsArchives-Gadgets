/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/EnhancedSpecialSearch}
 * @author 安忆 <i@anyi.in>
 * @license GPL-3.0-or-later {@link https://youshou.wiki/wiki/H:GPL-3.0}
 */

/**
 * Copyright (C)  安忆
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
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

// dist/EnhancedSpecialSearch/EnhancedSpecialSearch.js
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
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: true
  }) : target,
  mod
));
//! src/EnhancedSpecialSearch/EnhancedSpecialSearch.ts
var import_ext_gadget4 = require("ext.gadget.Util");
//! src/EnhancedSpecialSearch/options.json
var siteDomain = "youshou.wiki";
var flexStyle = "display: flex; flex-wrap: wrap; align-items: center";
//! src/EnhancedSpecialSearch/components/SelectElement.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.JSX"), 1);
//! src/EnhancedSpecialSearch/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "Search engine": (0, import_ext_gadget.localize)({
      en: "Search engine",
      ja: "検索エンジン",
      zh: "搜索引擎"
    }),
    Baidu: (0, import_ext_gadget.localize)({
      en: "Baidu",
      ja: "Baidu",
      zh: "百度"
    }),
    Bing: (0, import_ext_gadget.localize)({
      en: "Bing",
      "zh-hans": "必应",
      "zh-hant": "必應"
    }),
    Google: (0, import_ext_gadget.localize)({
      en: "Google",
      ja: "Google",
      zh: "谷歌"
    }),
    YsArchives: (0, import_ext_gadget.localize)({
      en: "Youshou Archives",
      ja: "有兽档案馆",
      "zh-hans": "有兽档案馆",
      "zh-hant": "有獸檔案館"
    }),
    Sogou: (0, import_ext_gadget.localize)({
      en: "Sogou",
      ja: "Sogou",
      zh: "搜狗"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/EnhancedSpecialSearch/modules/getOptionData.ts
var getOptionData = () => {
  return [{
    site: getMessage("YsArchives"),
    origin: true
  }, {
    site: getMessage("Baidu"),
    url: "https://www.baidu.com/s?wd=site%3A".concat(siteDomain, "+$1")
  }, {
    site: getMessage("Bing"),
    url: "https://www.bing.com/search?q=site%3A".concat(siteDomain, "+$1")
  }, {
    site: getMessage("Google"),
    url: "https://www.google.com/search?q=site%3A".concat(siteDomain, "+$1")
  }, {
    site: getMessage("Sogou"),
    url: "https://www.sogou.com/web?query=site%3A".concat(siteDomain, "+$1")
  }, {
    site: "360",
    url: "https://www.so.com/s?q=site%3A".concat(siteDomain, "+$1")
  }];
};
//! src/EnhancedSpecialSearch/components/SelectElement.tsx
var LabelElement = () => /* @__PURE__ */ import_ext_gadget2.default.createElement("label", {
  className: "oo-ui-labelElement-label",
  htmlFor: "enhancedSpecialSearch",
  innerText: getMessage("Search engine")
});
var SelectElement = () => /* @__PURE__ */ import_ext_gadget2.default.createElement("select", {
  className: "oo-ui-dropdownWidget-handle",
  id: "enhancedSpecialSearch",
  name: "enhancedSpecialSearch",
  style: {
    width: "auto"
  },
  title: getMessage("Search engine")
}, getOptionData().map(({
  site,
  url,
  origin
}) => {
  const optionElement = new Option(site, url, origin);
  if (origin) {
    optionElement.dataset["origin"] = "1";
  }
  return optionElement;
}));
var WrapperElement = () => /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
  style: flexStyle
});
//! src/EnhancedSpecialSearch/modules/util/openPage.tsx
var import_ext_gadget3 = __toESM(require("ext.gadget.JSX"), 1);
var openPage = (url) => {
  const element = /* @__PURE__ */ import_ext_gadget3.default.createElement("a", {
    href: url,
    target: "_blank",
    rel: "noopener noreferrer"
  });
  element.click();
};
//! src/EnhancedSpecialSearch/modules/addListener.ts
var addListener = (targetElement, selectElement) => {
  targetElement.addEventListener("submit", (event) => {
    const inputElement = targetElement.querySelector('[type="search"]');
    if (!inputElement) {
      return;
    }
    const optionElement = selectElement.querySelector("option:checked");
    if (optionElement.dataset["origin"]) {
      return;
    }
    event.preventDefault();
    openPage(optionElement.value.replace("$1", encodeURIComponent(inputElement.value)));
  });
};
//! src/EnhancedSpecialSearch/modules/processElement.ts
var processElement = (searchElement, targetElement) => {
  targetElement.setAttribute("style", flexStyle);
  const wrapperElement = WrapperElement();
  const labelElement = LabelElement();
  const selectElement = SelectElement();
  wrapperElement.append(labelElement, selectElement);
  targetElement.append(wrapperElement);
  addListener(searchElement, selectElement);
};
//! src/EnhancedSpecialSearch/EnhancedSpecialSearch.ts
void (0, import_ext_gadget4.getBody)().then(function enhancedSpecialSearch($body) {
  var _$body$find$get;
  const {
    wgCanonicalSpecialPageName
  } = mw.config.get();
  if (wgCanonicalSpecialPageName !== "Search") {
    return;
  }
  const searchElement = (_$body$find$get = $body.find("#search").get(0)) !== null && _$body$find$get !== void 0 ? _$body$find$get : $body.find("#powersearch").get(0);
  const targetElement = $body.find("#mw-search-top-table").get(0);
  if (!searchElement || !targetElement) {
    return;
  }
  processElement(searchElement, targetElement);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VuaGFuY2VkU3BlY2lhbFNlYXJjaC9FbmhhbmNlZFNwZWNpYWxTZWFyY2gudHMiLCAic3JjL0VuaGFuY2VkU3BlY2lhbFNlYXJjaC9vcHRpb25zLmpzb24iLCAic3JjL0VuaGFuY2VkU3BlY2lhbFNlYXJjaC9jb21wb25lbnRzL1NlbGVjdEVsZW1lbnQudHN4IiwgInNyYy9FbmhhbmNlZFNwZWNpYWxTZWFyY2gvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9FbmhhbmNlZFNwZWNpYWxTZWFyY2gvbW9kdWxlcy9nZXRPcHRpb25EYXRhLnRzIiwgInNyYy9FbmhhbmNlZFNwZWNpYWxTZWFyY2gvbW9kdWxlcy91dGlsL29wZW5QYWdlLnRzeCIsICJzcmMvRW5oYW5jZWRTcGVjaWFsU2VhcmNoL21vZHVsZXMvYWRkTGlzdGVuZXIudHMiLCAic3JjL0VuaGFuY2VkU3BlY2lhbFNlYXJjaC9tb2R1bGVzL3Byb2Nlc3NFbGVtZW50LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3Byb2Nlc3NFbGVtZW50fSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc0VsZW1lbnQnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGVuaGFuY2VkU3BlY2lhbFNlYXJjaCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0Y29uc3Qge3dnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lICE9PSAnU2VhcmNoJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHNlYXJjaEVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkID0gJGJvZHkuZmluZCgnI3NlYXJjaCcpLmdldCgwKSA/PyAkYm9keS5maW5kKCcjcG93ZXJzZWFyY2gnKS5nZXQoMCk7XG5cdGNvbnN0IHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkID0gJGJvZHkuZmluZCgnI213LXNlYXJjaC10b3AtdGFibGUnKS5nZXQoMCk7XG5cdGlmICghc2VhcmNoRWxlbWVudCB8fCAhdGFyZ2V0RWxlbWVudCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHByb2Nlc3NFbGVtZW50KHNlYXJjaEVsZW1lbnQsIHRhcmdldEVsZW1lbnQpO1xufSk7XG4iLCAie1xuXHRcInNpdGVEb21haW5cIjogXCJ5b3VzaG91Lndpa2lcIixcblx0XCJmbGV4U3R5bGVcIjogXCJkaXNwbGF5OiBmbGV4OyBmbGV4LXdyYXA6IHdyYXA7IGFsaWduLWl0ZW1zOiBjZW50ZXJcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL21vZHVsZXMvaTE4bic7XG5pbXBvcnQge2dldE9wdGlvbkRhdGF9IGZyb20gJy4uL21vZHVsZXMvZ2V0T3B0aW9uRGF0YSc7XG5cbmNvbnN0IExhYmVsRWxlbWVudCA9ICgpID0+IChcblx0PGxhYmVsXG5cdFx0Y2xhc3NOYW1lPVwib28tdWktbGFiZWxFbGVtZW50LWxhYmVsXCJcblx0XHRodG1sRm9yPVwiZW5oYW5jZWRTcGVjaWFsU2VhcmNoXCJcblx0XHRpbm5lclRleHQ9e2dldE1lc3NhZ2UoJ1NlYXJjaCBlbmdpbmUnKX1cblx0Lz5cbik7XG5cbmNvbnN0IFNlbGVjdEVsZW1lbnQgPSAoKSA9PiAoXG5cdDxzZWxlY3Rcblx0XHRjbGFzc05hbWU9XCJvby11aS1kcm9wZG93bldpZGdldC1oYW5kbGVcIlxuXHRcdGlkPVwiZW5oYW5jZWRTcGVjaWFsU2VhcmNoXCJcblx0XHRuYW1lPVwiZW5oYW5jZWRTcGVjaWFsU2VhcmNoXCJcblx0XHRzdHlsZT17e1xuXHRcdFx0d2lkdGg6ICdhdXRvJyxcblx0XHR9fVxuXHRcdHRpdGxlPXtnZXRNZXNzYWdlKCdTZWFyY2ggZW5naW5lJyl9XG5cdD5cblx0XHR7Z2V0T3B0aW9uRGF0YSgpLm1hcDxIVE1MT3B0aW9uRWxlbWVudD4oKHtzaXRlLCB1cmwsIG9yaWdpbn0pID0+IHtcblx0XHRcdGNvbnN0IG9wdGlvbkVsZW1lbnQ6IEhUTUxPcHRpb25FbGVtZW50ID0gbmV3IE9wdGlvbihzaXRlLCB1cmwsIG9yaWdpbik7XG5cblx0XHRcdGlmIChvcmlnaW4pIHtcblx0XHRcdFx0b3B0aW9uRWxlbWVudC5kYXRhc2V0WydvcmlnaW4nXSA9ICcxJztcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG9wdGlvbkVsZW1lbnQ7XG5cdFx0fSl9XG5cdDwvc2VsZWN0PlxuKTtcblxuY29uc3QgV3JhcHBlckVsZW1lbnQgPSAoKSA9PiA8ZGl2IHN0eWxlPXtPUFRJT05TLmZsZXhTdHlsZX0gLz47XG5cbmV4cG9ydCB7TGFiZWxFbGVtZW50LCBTZWxlY3RFbGVtZW50LCBXcmFwcGVyRWxlbWVudH07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdTZWFyY2ggZW5naW5lJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTZWFyY2ggZW5naW5lJyxcblx0XHRcdGphOiAn5qSc57Si44Ko44Oz44K444OzJyxcblx0XHRcdHpoOiAn5pCc57Si5byV5pOOJyxcblx0XHR9KSxcblx0XHRCYWlkdTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdCYWlkdScsXG5cdFx0XHRqYTogJ0JhaWR1Jyxcblx0XHRcdHpoOiAn55m+5bqmJyxcblx0XHR9KSxcblx0XHRCaW5nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0JpbmcnLFxuXHRcdFx0J3poLWhhbnMnOiAn5b+F5bqUJyxcblx0XHRcdCd6aC1oYW50JzogJ+W/heaHiScsXG5cdFx0fSksXG5cdFx0R29vZ2xlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0dvb2dsZScsXG5cdFx0XHRqYTogJ0dvb2dsZScsXG5cdFx0XHR6aDogJ+iwt+atjCcsXG5cdFx0fSksXG5cdFx0WXNBcmNoaXZlczogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdZb3VzaG91IEFyY2hpdmVzJyxcblx0XHRcdGphOiAn5pyJ5YW95qGj5qGI6aaGJyxcblx0XHRcdCd6aC1oYW5zJzogJ+acieWFveaho+ahiOmmhicsXG5cdFx0XHQnemgtaGFudCc6ICfmnInnjbjmqpTmoYjppKgnLFxuXHRcdH0pLFxuXHRcdFNvZ291OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1NvZ291Jyxcblx0XHRcdGphOiAnU29nb3UnLFxuXHRcdFx0emg6ICfmkJzni5cnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbnR5cGUgT3B0aW9uRGF0YSA9IHtcblx0c2l0ZTogc3RyaW5nO1xuXHR1cmw/OiBzdHJpbmc7XG5cdG9yaWdpbj86IGJvb2xlYW47XG59O1xuXG5jb25zdCBnZXRPcHRpb25EYXRhID0gKCk6IE9wdGlvbkRhdGFbXSA9PiB7XG5cdHJldHVybiBbXG5cdFx0e1xuXHRcdFx0c2l0ZTogZ2V0TWVzc2FnZSgnWXNBcmNoaXZlcycpLFxuXHRcdFx0b3JpZ2luOiB0cnVlLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0c2l0ZTogZ2V0TWVzc2FnZSgnQmFpZHUnKSxcblx0XHRcdHVybDogYGh0dHBzOi8vd3d3LmJhaWR1LmNvbS9zP3dkPXNpdGUlM0Eke09QVElPTlMuc2l0ZURvbWFpbn0rJDFgLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0c2l0ZTogZ2V0TWVzc2FnZSgnQmluZycpLFxuXHRcdFx0dXJsOiBgaHR0cHM6Ly93d3cuYmluZy5jb20vc2VhcmNoP3E9c2l0ZSUzQSR7T1BUSU9OUy5zaXRlRG9tYWlufSskMWAsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzaXRlOiBnZXRNZXNzYWdlKCdHb29nbGUnKSxcblx0XHRcdHVybDogYGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vc2VhcmNoP3E9c2l0ZSUzQSR7T1BUSU9OUy5zaXRlRG9tYWlufSskMWAsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzaXRlOiBnZXRNZXNzYWdlKCdTb2dvdScpLFxuXHRcdFx0dXJsOiBgaHR0cHM6Ly93d3cuc29nb3UuY29tL3dlYj9xdWVyeT1zaXRlJTNBJHtPUFRJT05TLnNpdGVEb21haW59KyQxYCxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHNpdGU6ICczNjAnLFxuXHRcdFx0dXJsOiBgaHR0cHM6Ly93d3cuc28uY29tL3M/cT1zaXRlJTNBJHtPUFRJT05TLnNpdGVEb21haW59KyQxYCxcblx0XHR9LFxuXHRdO1xufTtcblxuZXhwb3J0IHt0eXBlIE9wdGlvbkRhdGEsIGdldE9wdGlvbkRhdGF9O1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5cbmNvbnN0IG9wZW5QYWdlID0gKHVybDogc3RyaW5nKTogdm9pZCA9PiB7XG5cdGNvbnN0IGVsZW1lbnQgPSAoPGEgaHJlZj17dXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgLz4pIGFzIEhUTUxBbmNob3JFbGVtZW50O1xuXG5cdGVsZW1lbnQuY2xpY2soKTtcbn07XG5cbmV4cG9ydCB7b3BlblBhZ2V9O1xuIiwgImltcG9ydCB7b3BlblBhZ2V9IGZyb20gJy4vdXRpbC9vcGVuUGFnZSc7XG5cbmNvbnN0IGFkZExpc3RlbmVyID0gKHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LCBzZWxlY3RFbGVtZW50OiBIVE1MU2VsZWN0RWxlbWVudCk6IHZvaWQgPT4ge1xuXHR0YXJnZXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudDogU3VibWl0RXZlbnQpOiB2b2lkID0+IHtcblx0XHRjb25zdCBpbnB1dEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsID0gdGFyZ2V0RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbdHlwZT1cInNlYXJjaFwiXScpO1xuXHRcdGlmICghaW5wdXRFbGVtZW50KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3Qgb3B0aW9uRWxlbWVudDogSFRNTE9wdGlvbkVsZW1lbnQgPSBzZWxlY3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ29wdGlvbjpjaGVja2VkJykgYXMgSFRNTE9wdGlvbkVsZW1lbnQ7XG5cdFx0aWYgKG9wdGlvbkVsZW1lbnQuZGF0YXNldFsnb3JpZ2luJ10pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdG9wZW5QYWdlKG9wdGlvbkVsZW1lbnQudmFsdWUucmVwbGFjZSgnJDEnLCBlbmNvZGVVUklDb21wb25lbnQoaW5wdXRFbGVtZW50LnZhbHVlKSkpO1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7YWRkTGlzdGVuZXJ9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7TGFiZWxFbGVtZW50LCBTZWxlY3RFbGVtZW50LCBXcmFwcGVyRWxlbWVudH0gZnJvbSAnLi4vY29tcG9uZW50cy9TZWxlY3RFbGVtZW50JztcbmltcG9ydCB7YWRkTGlzdGVuZXJ9IGZyb20gJy4vYWRkTGlzdGVuZXInO1xuXG5jb25zdCBwcm9jZXNzRWxlbWVudCA9IChzZWFyY2hFbGVtZW50OiBIVE1MRWxlbWVudCwgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkID0+IHtcblx0dGFyZ2V0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgT1BUSU9OUy5mbGV4U3R5bGUpO1xuXG5cdGNvbnN0IHdyYXBwZXJFbGVtZW50ID0gV3JhcHBlckVsZW1lbnQoKSBhcyBIVE1MRGl2RWxlbWVudDtcblx0Y29uc3QgbGFiZWxFbGVtZW50ID0gTGFiZWxFbGVtZW50KCk7XG5cdGNvbnN0IHNlbGVjdEVsZW1lbnQgPSBTZWxlY3RFbGVtZW50KCkgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XG5cblx0d3JhcHBlckVsZW1lbnQuYXBwZW5kKGxhYmVsRWxlbWVudCwgc2VsZWN0RWxlbWVudCk7XG5cdHRhcmdldEVsZW1lbnQuYXBwZW5kKHdyYXBwZXJFbGVtZW50KTtcblxuXHRhZGRMaXN0ZW5lcihzZWFyY2hFbGVtZW50LCBzZWxlY3RFbGVtZW50KTtcbn07XG5cbmV4cG9ydCB7cHJvY2Vzc0VsZW1lbnR9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQXNCQyxRQUFBLGlCQUFBOztBQ0NyQixJQUFBQyxhQUFjO0FBQ2QsSUFBQUMsWUFBYTs7QUNEZCxJQUFBQyxxQkFBa0JDLFFBQUFKLFFBQUEsZ0JBQUEsR0FBQSxDQUFBOztBQ0RsQixJQUFBSyxvQkFBdUJMLFFBQUEsaUJBQUE7QUFFdkIsSUFBTU0sa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTixrQkFBQSxHQUFpQkQsa0JBQUFFLFVBQVM7TUFDekJDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO0lBQ0wsQ0FBQztJQUNEQyxRQUFBLEdBQU9OLGtCQUFBRSxVQUFTO01BQ2ZDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO0lBQ0wsQ0FB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LG1CQUFtQkwsYUFBYUcsS0FBSyxDQUFDLENBQUM7RUFDbkYsQ0FBQztBQUNGOztBQ2JBLElBQU1HLGlCQUFpQkEsQ0FBQ0MsZUFBNEJYLGtCQUFxQztBQUN4RkEsZ0JBQWNZLGFBQWEsU0FBaUIzRCxTQUFTO0FBRXJELFFBQU00RCxpQkFBaUJ0QixlQUFlO0FBQ3RDLFFBQU11QixlQUFldkMsYUFBYTtBQUNsQyxRQUFNMEIsZ0JBQWdCcEIsY0FBYztBQUVwQ2dDLGlCQUFlRSxPQUFPRCxjQUFjYixhQUFhO0FBQ2pERCxnQkFBY2UsT0FBT0YsY0FBYztBQUVuQ2QsY0FBWVksZUFBZVYsYUFBYTtBQUN6Qzs7QVBaQSxNQUFBLEdBQUtuRCxtQkFBQWtFLFNBQVEsRUFBRUMsS0FBSyxTQUFTQyxzQkFBc0JDLE9BQXNDO0FBQUEsTUFBQUM7QUFDeEYsUUFBTTtJQUFDQztFQUEwQixJQUFJQyxHQUFHQyxPQUFPQyxJQUFJO0FBQ25ELE1BQUlILCtCQUErQixVQUFVO0FBQzVDO0VBQ0Q7QUFFQSxRQUFNVixpQkFBQVMsa0JBQXlDRCxNQUFNTSxLQUFLLFNBQVMsRUFBRUQsSUFBSSxDQUFDLE9BQUEsUUFBQUosb0JBQUEsU0FBQUEsa0JBQUtELE1BQU1NLEtBQUssY0FBYyxFQUFFRCxJQUFJLENBQUM7QUFDL0csUUFBTXhCLGdCQUF5Q21CLE1BQU1NLEtBQUssc0JBQXNCLEVBQUVELElBQUksQ0FBQztBQUN2RixNQUFJLENBQUNiLGlCQUFpQixDQUFDWCxlQUFlO0FBQ3JDO0VBQ0Q7QUFFQVUsaUJBQWVDLGVBQWVYLGFBQWE7QUFDNUMsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgInJlcXVpcmUiLCAic2l0ZURvbWFpbiIsICJmbGV4U3R5bGUiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgInpoIiwgIkJhaWR1IiwgIkJpbmciLCAiR29vZ2xlIiwgIllzQXJjaGl2ZXMiLCAiU29nb3UiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImdldE9wdGlvbkRhdGEiLCAic2l0ZSIsICJvcmlnaW4iLCAidXJsIiwgImNvbmNhdCIsICJMYWJlbEVsZW1lbnQiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImNsYXNzTmFtZSIsICJodG1sRm9yIiwgImlubmVyVGV4dCIsICJTZWxlY3RFbGVtZW50IiwgImlkIiwgIm5hbWUiLCAic3R5bGUiLCAid2lkdGgiLCAidGl0bGUiLCAibWFwIiwgIm9wdGlvbkVsZW1lbnQiLCAiT3B0aW9uIiwgImRhdGFzZXQiLCAiV3JhcHBlckVsZW1lbnQiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgIm9wZW5QYWdlIiwgImVsZW1lbnQiLCAiaHJlZiIsICJ0YXJnZXQiLCAicmVsIiwgImNsaWNrIiwgImFkZExpc3RlbmVyIiwgInRhcmdldEVsZW1lbnQiLCAic2VsZWN0RWxlbWVudCIsICJhZGRFdmVudExpc3RlbmVyIiwgImV2ZW50IiwgImlucHV0RWxlbWVudCIsICJxdWVyeVNlbGVjdG9yIiwgInByZXZlbnREZWZhdWx0IiwgInZhbHVlIiwgInJlcGxhY2UiLCAiZW5jb2RlVVJJQ29tcG9uZW50IiwgInByb2Nlc3NFbGVtZW50IiwgInNlYXJjaEVsZW1lbnQiLCAic2V0QXR0cmlidXRlIiwgIndyYXBwZXJFbGVtZW50IiwgImxhYmVsRWxlbWVudCIsICJhcHBlbmQiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImVuaGFuY2VkU3BlY2lhbFNlYXJjaCIsICIkYm9keSIsICJfJGJvZHkkZmluZCRnZXQiLCAid2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJmaW5kIl0KfQo=
