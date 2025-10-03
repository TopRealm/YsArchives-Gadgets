/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-SpecialWikitext.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/SpecialWikitext}
 * @license CC-BY-SA-4.0 {@link https://youshou.wiki/wiki/H:CC-BY-SA-4.0}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 *
 * Alert Mark (Orange)
 *
 * @base {@link https://www.qiuwenbaike.cn/wiki/File:Alert_Mark_%28Orange%29.svg}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/SpecialWikitext/images}
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

// dist/SpecialWikitext/SpecialWikitext.js
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
//! src/SpecialWikitext/SpecialWikitext.ts
var import_ext_gadget6 = require("ext.gadget.Util");
//! src/SpecialWikitext/components/SpecialWikitext.module.less
var previewLoadingContent = "SpecialWikitext-module__preview-loading__content_0PrDlG__4100";
var previewLoadingInner = "SpecialWikitext-module__preview-loading__inner_0PrDlG__4100";
//! src/SpecialWikitext/components/generateElements.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.JSX"), 1);
//! src/SpecialWikitext/images/Loading_icon.gif
var Loading_icon_default = "data:image/gif;base64,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";
//! src/SpecialWikitext/images/Alert.png
var Alert_default = "data:image/png;base64,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";
//! src/SpecialWikitext/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Failed: (0, import_ext_gadget.localize)({
      en: "Failed to load preview.",
      "zh-hans": "预览加载失败",
      "zh-hant": "預覽載入失败"
    }),
    Loading: (0, import_ext_gadget.localize)({
      en: "Loading preview...",
      "zh-hans": "预览加载中……",
      "zh-hant": "預覽載入中……"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/SpecialWikitext/components/generateElements.tsx
var Failed = () => /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, /* @__PURE__ */ import_ext_gadget2.default.createElement("img", {
  src: Alert_default,
  decoding: "async",
  width: "32",
  height: "32"
}), /* @__PURE__ */ import_ext_gadget2.default.createElement("span", null, " ", getMessage("Failed")));
var Loading = () => /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
  id: "specialwikitext-preview-loading"
}, /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
  className: ["quotebox", previewLoadingInner],
  id: "specialwikitext-preview-loading__inner"
}, /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
  className: previewLoadingContent,
  id: "specialwikitext-preview-loading__content"
}, /* @__PURE__ */ import_ext_gadget2.default.createElement("img", {
  src: Loading_icon_default,
  decoding: "async",
  width: "32",
  height: "32"
}), /* @__PURE__ */ import_ext_gadget2.default.createElement("span", null, " ", getMessage("Loading")))));
//! src/SpecialWikitext/modules/util/checkElementExist.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var checkElementExist = (selectors) => {
  const selectorArray = (0, import_ext_gadget3.generateArray)(selectors);
  var _iterator2 = _createForOfIteratorHelper(selectorArray), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      const selector = _step2.value;
      if (document.querySelector(selector)) {
        return true;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return false;
};
//! src/SpecialWikitext/modules/util/addParsedWikitext.ts
var addParsedWikitext = (parsedWikitext) => {
  const $body = $("body");
  const $parsedWikitext = $().html(parsedWikitext);
  if (checkElementExist("#specialwikitext-preview-loading")) {
    const $element = $body.find("#specialwikitext-preview-loading");
    $element.html(parsedWikitext);
    mw.hook("wikipage.content").fire($element);
  } else if (checkElementExist(".diff-currentversion-title")) {
    $body.find(".diff-currentversion-title").append($parsedWikitext);
  } else if (checkElementExist(".previewnote")) {
    $body.find(".previewnote").append($parsedWikitext);
  } else if (checkElementExist(".mw-undelete-revision")) {
    $body.find(".mw-undelete-revision").append($parsedWikitext);
  } else if (checkElementExist("#mw-content-text")) {
    $body.find("#mw-content-text").append($parsedWikitext);
  }
  mw.hook("wikipage.content").fire($parsedWikitext);
};
//! src/SpecialWikitext/modules/notice.ts
var noticeFailElement = Failed();
var noticeLoadingElement = Loading();
var replaceDOM = (selector, element) => {
  $(selector).html(element !== null && element !== void 0 ? element : "");
};
var addLoadingNotice = () => {
  addParsedWikitext(noticeLoadingElement);
};
var loadingFailNotice = () => {
  replaceDOM("#specialwikitext-preview-loading__content", noticeFailElement);
};
var removeLoadingNotice = () => {
  replaceDOM("#specialwikitext-preview-loading");
};
//! src/SpecialWikitext/options.json
var version = "2.0";
var wikiTextKey = "_addText";
//! src/SpecialWikitext/modules/lua/luaAddText.ts
var luaAddText = (inputString, newString, isEscape = false) => {
  if (newString) {
    if (inputString) {
      inputString += "\n";
    }
    if (isEscape) {
      const [escapeString] = JSON.parse("[".concat(JSON.stringify(
        // Lua不支持\u、\x转义字符
        newString.replace(/\\([ux])/gi, "$1")
      ).replace(/\\\\/g, "\\"), "]"));
      newString = escapeString;
    }
    inputString += newString;
  }
  return inputString;
};
//! src/SpecialWikitext/modules/lua/luaGetText.ts
var luaGetString = (inputString) => {
  const testStringExecArray = /[^\n]*\*\//.exec(inputString);
  let testString = inputString;
  if (testStringExecArray) {
    [testString] = testStringExecArray;
    testString = testString.slice(0, Math.max(0, testString.length - 2));
  }
  const trimCheck = testString.trim();
  const firstChar = trimCheck.charAt(0);
  if (firstChar === trimCheck.at(-1) && (firstChar === "'" || firstChar === '"')) {
    return trimCheck.slice(1, 1 + trimCheck.length - 2);
  }
  return testString.trim();
};
var luaGetContentText = (inputString) => {
  let wikitext = "";
  try {
    inputString.replace(new RegExp("".concat(wikiTextKey, "\\s*\\{[^c\\}]*content\\s*:\\s*[^\n]*"), "g"), (substring) => {
      const tempText = (/content\s*:\s*[^\n]*/.exec(substring) || ["content:"])[0].replace(/^[\s;}]+|[\s;}]+$/g, "").replace(/\s*content\s*:\s*/, "");
      if (wikitext) {
        wikitext += "\n";
      }
      wikitext += luaGetString(tempText);
      return substring;
    });
  } catch {
    return "";
  }
  return wikitext.trim();
};
var luaGetObjText = (inputString) => {
  let wikitext = "";
  try {
    inputString.replace(new RegExp("".concat(wikiTextKey, "\\s*[\\=:]\\s*[^\n]*"), "g"), (substring) => {
      const tempText = substring.replace(/^[\s;}]+|[\s;}]+$/g, "").replace(new RegExp("".concat(wikiTextKey, "\\s*[\\=:]\\s*")), "");
      if (wikitext) {
        wikitext += "\n";
      }
      wikitext += luaGetString(tempText);
      return substring;
    });
  } catch {
    return "";
  }
  return wikitext.trim();
};
var luaGetCSSwikitext = (inputString) => {
  var _ref, _document$querySelect;
  let wikitext = "";
  const cssText = (_ref = inputString || ((_document$querySelect = document.querySelector("textarea[name=wpTextbox1]")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.value)) !== null && _ref !== void 0 ? _ref : "";
  if (!cssText.trim()) {
    return "";
  }
  wikitext = luaAddText(wikitext, luaGetContentText(cssText), true);
  wikitext = luaAddText(wikitext, luaGetObjText(cssText), true);
  return wikitext.trim();
};
var luaGetJSONwikitext = (inputString) => {
  var _ref2, _document$querySelect2;
  let wikitext = "";
  const JSONText = (_ref2 = inputString || ((_document$querySelect2 = document.querySelector("textarea[name=wpTextbox1]")) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.value)) !== null && _ref2 !== void 0 ? _ref2 : "";
  if (!JSONText.trim()) {
    return "";
  }
  try {
    const jsonData = JSON.parse(JSONText);
    for (var _i = 0, _Object$entries = Object.entries(jsonData); _i < _Object$entries.length; _i++) {
      const [key, value] = _Object$entries[_i];
      if (new RegExp(wikiTextKey).test(key) && typeof value === "string") {
        wikitext = luaAddText(wikitext, value);
      }
      if (typeof value !== "string") {
        for (var _i2 = 0, _Object$entries2 = Object.entries(value); _i2 < _Object$entries2.length; _i2++) {
          const [k, v] = _Object$entries2[_i2];
          if (new RegExp(wikiTextKey).test(k) && typeof v === "string") {
            wikitext = luaAddText(wikitext, v);
          }
        }
      }
    }
  } catch {
    return "";
  }
  return wikitext.trim();
};
var luaGetJSwikitext = (inputString) => {
  var _ref3, _document$querySelect3;
  let wikitext = "";
  const jsText = (_ref3 = inputString || ((_document$querySelect3 = document.querySelector("textarea[name=wpTextbox1]")) === null || _document$querySelect3 === void 0 ? void 0 : _document$querySelect3.value)) !== null && _ref3 !== void 0 ? _ref3 : "";
  if (!jsText.trim()) {
    return "";
  }
  wikitext = luaAddText(wikitext, luaGetObjText(jsText), true);
  return wikitext.trim();
};
//! src/SpecialWikitext/modules/api.ts
var import_ext_gadget4 = require("ext.gadget.Util");
var api = (0, import_ext_gadget4.initMwApi)("SpecialWikitext/".concat(version));
//! src/SpecialWikitext/modules/util/getLanguage.ts
var {
  wgUserLanguage,
  wgUserVariant
} = mw.config.get();
var getLanguage = () => {
  const lang = wgUserLanguage;
  if (lang.includes("zh")) {
    return wgUserVariant;
  }
  return lang;
};
//! src/SpecialWikitext/modules/mw/mwAddText.ts
var {
  skin
} = mw.config.get();
var mwAddWikiText = /* @__PURE__ */ (function() {
  var _ref4 = _asyncToGenerator(function* (wikitext, pageName, isPreview) {
    if (wikitext.trim()) {
      const params = {
        action: "parse",
        format: "json",
        formatversion: "2",
        // 避免内容重复
        title: pageName,
        contentmodel: "wikitext",
        text: wikitext,
        prop: "text",
        uselang: getLanguage(),
        useskin: skin
      };
      if (isPreview) {
        params.disableeditsection = true;
        params.preview = true;
      }
      try {
        var _data$parse;
        const data = yield api.get(params);
        if (!(data !== null && data !== void 0 && (_data$parse = data["parse"]) !== null && _data$parse !== void 0 && _data$parse.text)) {
          return;
        }
        const parsedWikitext = data["parse"].text.trim();
        if (parsedWikitext) {
          addParsedWikitext(parsedWikitext);
        } else {
          removeLoadingNotice();
        }
      } catch {
        loadingFailNotice();
      }
    } else {
      removeLoadingNotice();
    }
  });
  return function mwAddWikiText2(_x, _x2, _x3) {
    return _ref4.apply(this, arguments);
  };
})();
var mwAddLuaText = /* @__PURE__ */ (function() {
  var _ref5 = _asyncToGenerator(function* (wikitext, pageName, isPreview, callBack) {
    const tempModuleName = "AddText/Temp/Module/Data.lua";
    const moduleCall = {
      wikitext: "#invoke:",
      // 分开来，避免被分到[[:Category:有脚本错误的页面]]
      pageName: "Module:"
    };
    if (wikitext.trim()) {
      try {
        var _data$parse2;
        const params = {
          action: "parse",
          format: "json",
          formatversion: "2",
          title: pageName,
          contentmodel: "wikitext",
          templatesandboxtitle: moduleCall.pageName + tempModuleName,
          // 创建临时Lua Module
          templatesandboxtext: "return {\n	main = function()\n		xpcall(\n			function()\n				".concat(wikitext, '\n			end,\n			function()\n			end\n		)\n		local moduleWikitext = package.loaded["Module:Module wikitext"]\n		if moduleWikitext then\n			local wikitext = moduleWikitext.main()\n			if mw.text.trim(wikitext) ~= "" then\n				return mw.getCurrentFrame():preprocess(moduleWikitext.main())\n			end\n		end\n		return ""\n	end\n}'),
          templatesandboxcontentmodel: "Scribunto",
          templatesandboxcontentformat: "text/plain",
          text: "{{".concat(moduleCall.wikitext).concat(tempModuleName, "|main}}"),
          prop: "text",
          uselang: getLanguage(),
          useskin: skin
        };
        if (isPreview) {
          params.preview = true;
          params.disableeditsection = true;
        }
        const data = yield api.get(params);
        if (!(data !== null && data !== void 0 && (_data$parse2 = data["parse"]) !== null && _data$parse2 !== void 0 && _data$parse2.text)) {
          return;
        }
        const parsedWikitext = data["parse"].text.trim();
        if (!parsedWikitext) {
          removeLoadingNotice();
        } else if ($(parsedWikitext).find(".scribunto-error").text().search(tempModuleName)) {
          removeLoadingNotice();
        } else if (typeof callBack === "function") {
          callBack(parsedWikitext);
        } else {
          addParsedWikitext(parsedWikitext);
        }
      } catch {
        loadingFailNotice();
      }
    } else {
      removeLoadingNotice();
    }
  });
  return function mwAddLuaText2(_x4, _x5, _x6, _x7) {
    return _ref5.apply(this, arguments);
  };
})();
//! src/SpecialWikitext/modules/lua/luaCheck.ts
var {
  wgPageContentModel
} = mw.config.get();
var luaCheck = (inputString = "", contentModel = wgPageContentModel) => {
  switch (contentModel.toLowerCase()) {
    case "json":
      return luaGetJSONwikitext(inputString);
    case "js":
    case "javascript":
    case "text":
      return luaGetJSwikitext(inputString);
    case "css":
    case "sanitized-css":
      return luaGetCSSwikitext(inputString);
    default:
      return "";
  }
};
//! src/SpecialWikitext/modules/mw/mwApply.ts
var {
  skin: skin2,
  wgRevisionId
} = mw.config.get();
var mwApplyNotice = /* @__PURE__ */ (function() {
  var _ref6 = _asyncToGenerator(function* (currentPageName, pageSubName) {
    try {
      var _data$parse3;
      const params = {
        action: "parse",
        format: "json",
        formatversion: "2",
        // get the original wikitext content of a page
        title: currentPageName + pageSubName,
        text: "{{#invoke:Special wikitext/Template|getNotices|".concat(currentPageName, "|").concat(pageSubName, "}}"),
        prop: "text",
        uselang: getLanguage(),
        useskin: skin2,
        smaxage: 600,
        maxage: 600
      };
      const data = yield api.get(params);
      if (!(data !== null && data !== void 0 && (_data$parse3 = data["parse"]) !== null && _data$parse3 !== void 0 && _data$parse3.text)) {
        return;
      }
      const html = data["parse"].text;
      if ($(html).text().trim()) {
        addParsedWikitext(html);
      }
    } catch {
    }
  });
  return function mwApplyNotice2(_x8, _x9) {
    return _ref6.apply(this, arguments);
  };
})();
var mwApplyRevision = /* @__PURE__ */ (function() {
  var _ref7 = _asyncToGenerator(function* (currentPageName) {
    try {
      var _data$parse4;
      const params = {
        action: "parse",
        format: "json",
        formatversion: "2",
        // get the original wikitext content of a page
        oldid: wgRevisionId,
        prop: "wikitext",
        smaxage: 600,
        maxage: 600
      };
      const data = yield api.get(params);
      if (!(data !== null && data !== void 0 && (_data$parse4 = data["parse"]) !== null && _data$parse4 !== void 0 && _data$parse4.wikitext)) {
        return;
      }
      let pageContent = luaCheck(data["parse"].wikitext.trim());
      pageContent = (checkElementExist("#mw-clearyourcache") ? "{{#invoke:Special wikitext/Template|int|clearyourcache}}" : "") + pageContent;
      if (pageContent.trim()) {
        void mwAddWikiText(pageContent, currentPageName, true);
      } else {
        removeLoadingNotice();
      }
    } catch {
      removeLoadingNotice();
    }
  });
  return function mwApplyRevision2(_x0) {
    return _ref7.apply(this, arguments);
  };
})();
//! src/SpecialWikitext/modules/util/checkMwConfig.ts
var import_ext_gadget5 = require("ext.gadget.Util");
var allMwConfig = mw.config.get();
var checkMwConfig = (configKey, expectConfig) => {
  let mwConfig = allMwConfig[configKey];
  if (!mwConfig) {
    return false;
  }
  mwConfig = String(mwConfig).toLowerCase().trim();
  if (!mwConfig) {
    return false;
  }
  return (0, import_ext_gadget5.generateArray)(expectConfig).includes(mwConfig);
};
//! src/SpecialWikitext/modules/util/checkNeedPreview.ts
var checkNeedPreview = () => {
  return document.body.innerHTML.search(wikiTextKey) > -1;
};
//! src/SpecialWikitext/modules/mw/mwAddPreview.ts
var {
  wgCanonicalNamespace,
  wgCanonicalSpecialPageName,
  wgPageName
} = mw.config.get();
var mwAddPreview = ($body) => {
  if (checkMwConfig("wgPageContentModel", ["javascript", "js", "json", "text", "css", "sanitized-css"])) {
    if (checkElementExist(".previewnote")) {
      var _mw$util$getUrl$match, _mw$util$getUrl$match2;
      const pathPath = decodeURI(mw.util.getUrl(wgPageName)).replace(new RegExp("^\\/?".concat((_mw$util$getUrl$match = (_mw$util$getUrl$match2 = mw.util.getUrl("").match(/[a-z]+/)) === null || _mw$util$getUrl$match2 === void 0 ? void 0 : _mw$util$getUrl$match2[0]) !== null && _mw$util$getUrl$match !== void 0 ? _mw$util$getUrl$match : "", "\\/")), "");
      if (pathPath !== wgPageName) {
        return;
      }
      const wikitext = luaCheck();
      if (wikitext) {
        addLoadingNotice();
        void mwAddWikiText(wikitext, wgPageName, true);
      }
    } else if (!checkElementExist(".mw-_addText-content") && checkMwConfig("wgAction", "view")) {
      if (!checkNeedPreview()) {
        return;
      }
      $body.find("#mw-clearyourcache").html("");
      if (!checkElementExist("textarea[name=wpTextbox1]")) {
        addLoadingNotice();
        void mwApplyRevision(wgPageName);
      }
    } else if (checkElementExist("#mw-revision-info") && checkMwConfig("wgAction", "view")) {
      if (!checkElementExist("textarea[name=wpTextbox1]")) {
        $body.find("#mw-clearyourcache").html(noticeLoadingElement);
        void mwApplyRevision(wgPageName);
      }
    } else {
      removeLoadingNotice();
    }
  } else if (checkMwConfig("wgPageContentModel", ["scribunto", "lua"])) {
    if (!checkNeedPreview()) {
      return;
    }
    if (checkElementExist("textarea[name=wpTextbox1]") && checkElementExist("table.diff") && !checkElementExist(".previewnote") && !checkMwConfig("wgAction", "view")) {
      var _$body$find$val;
      $(noticeLoadingElement).insertAfter("#wikiDiff");
      void mwAddLuaText((_$body$find$val = $body.find("textarea[name=wpTextbox1]").val()) !== null && _$body$find$val !== void 0 ? _$body$find$val : "", wgPageName, true);
    }
  } else if (checkElementExist(".mw-undelete-revision")) {
    if (!checkNeedPreview()) {
      return;
    }
    if (checkElementExist([".mw-highlight", "pre", ".mw-json"])) {
      var _$body$find$val2;
      const textareaContent = (_$body$find$val2 = $body.find("textarea").val()) !== null && _$body$find$val2 !== void 0 ? _$body$find$val2 : "";
      let wikitext = luaGetJSONwikitext(textareaContent);
      wikitext || (wikitext = luaGetCSSwikitext(textareaContent));
      if (wikitext) {
        addLoadingNotice();
        void mwAddWikiText(wikitext, mw.config.get("wgRelevantPageName"), true);
      } else if (/module[ _]wikitext.*_addtext/i.test($body.find(".mw-parser-output").text())) {
      }
    }
  } else if (!checkElementExist(".mw-editnotice") && checkMwConfig("wgCanonicalNamespace", "special")) {
    const pageSubName = wgPageName.replace(/special:[^/]+/i, "");
    if (wgCanonicalSpecialPageName) {
      const fullPageName = "".concat(wgCanonicalNamespace, ":").concat(wgCanonicalSpecialPageName);
      void mwApplyNotice(fullPageName, pageSubName);
    }
  } else {
    removeLoadingNotice();
  }
};
//! src/SpecialWikitext/modules/wikitextPreviewTestcase.ts
var {
  wgPageName: wgPageName2
} = mw.config.get();
var wikitextPreviewTestcase = /* @__PURE__ */ (function() {
  var _ref8 = _asyncToGenerator(function* (isPreview) {
    if (!checkNeedPreview()) {
      return;
    }
    const testcaseList = document.querySelectorAll(".special-wikitext-preview-testcase");
    if (!testcaseList.length) {
      return;
    }
    const testcaseDataList = [];
    let i = 0;
    for (i = 0; i < testcaseList.length; ++i) {
      var _exec, _codeId$toLowerCase, _codeElement$textCont, _codeElement$textCont2;
      const element = testcaseList[i];
      if (!element) {
        continue;
      }
      const codeElement = element.querySelector(".mw-highlight");
      if (!codeElement) {
        continue;
      }
      const {
        className
      } = codeElement;
      if (!className) {
        continue;
      }
      const [, codeId] = (_exec = /mw-highlight-lang-(\S+)/.exec(className)) !== null && _exec !== void 0 ? _exec : [];
      const {
        length
      } = testcaseDataList;
      element.setAttribute("preview-id", length.toString());
      testcaseDataList[length] = {
        element,
        lang: (_codeId$toLowerCase = codeId === null || codeId === void 0 ? void 0 : codeId.toLowerCase()) !== null && _codeId$toLowerCase !== void 0 ? _codeId$toLowerCase : "",
        code: (_codeElement$textCont = (_codeElement$textCont2 = codeElement.textContent) === null || _codeElement$textCont2 === void 0 ? void 0 : _codeElement$textCont2.trim()) !== null && _codeElement$textCont !== void 0 ? _codeElement$textCont : ""
      };
    }
    let packageWikitext = "";
    for (var _i3 = 0, _Object$values = Object.values(testcaseDataList); _i3 < _Object$values.length; _i3++) {
      const testcaseItem = _Object$values[_i3];
      const {
        code,
        element,
        lang
      } = testcaseItem;
      if (!code) {
        continue;
      }
      const $element = $(element);
      if (["javascript", "js", "css", "json", "text"].includes(testcaseItem.lang)) {
        const wikitext = luaCheck(code, lang);
        if (wikitext) {
          $element.prepend(noticeLoadingElement);
          packageWikitext += '<div class="special-wikitext-preview-testcase-'.concat(i, '">\n').concat(wikitext, "\n</div>");
        }
      } else if (["lua", "scribunto"].includes(lang)) {
        void mwAddLuaText(code, wgPageName2, isPreview, /* @__PURE__ */ (() => {
          return (wikitext) => {
            $element.prepend(wikitext);
          };
        })());
      }
    }
    if (packageWikitext) {
      packageWikitext = '<div class="special-wikitext-preview-testcase-undefined">'.concat(packageWikitext, "</div>");
      try {
        var _data$parse5;
        const params = {
          action: "parse",
          format: "json",
          formatversion: "2",
          text: packageWikitext,
          contentmodel: "wikitext",
          prop: "text"
        };
        if (isPreview) {
          params.disableeditsection = true;
          params.preview = true;
        }
        const data = yield api.get(params);
        if (!(data !== null && data !== void 0 && (_data$parse5 = data["parse"]) !== null && _data$parse5 !== void 0 && _data$parse5.text)) {
          return;
        }
        const parsedWikitext = data["parse"].text.trim();
        if (parsedWikitext) {
          const $parsedElement = $(parsedWikitext);
          for (var _i4 = 0, _Object$entries3 = Object.entries(testcaseDataList); _i4 < _Object$entries3.length; _i4++) {
            const [key, testcaseItem] = _Object$entries3[_i4];
            const {
              element,
              lang
            } = testcaseItem;
            if (!["javascript", "js", "text", "css", "json"].includes(lang)) {
              continue;
            }
            const $element = $parsedElement.find(".special-wikitext-preview-testcase-undefined > .special-wikitext-preview-testcase-".concat(key));
            if (!$element.length) {
              continue;
            }
            const $addTarget = $(element).find("#specialwikitext-preview-loading");
            $addTarget.html($element.html());
            mw.hook("wikipage.content").fire($addTarget);
          }
        }
      } catch {
      }
    }
  });
  return function wikitextPreviewTestcase2(_x1) {
    return _ref8.apply(this, arguments);
  };
})();
//! src/SpecialWikitext/SpecialWikitext.ts
void (0, import_ext_gadget6.getBody)().then(function specialWikitext($body) {
  mwAddPreview($body);
  void wikitextPreviewTestcase(true);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1NwZWNpYWxXaWtpdGV4dC9TcGVjaWFsV2lraXRleHQudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9jb21wb25lbnRzL1NwZWNpYWxXaWtpdGV4dC5tb2R1bGUubGVzcyIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L2NvbXBvbmVudHMvZ2VuZXJhdGVFbGVtZW50cy50c3giLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL3V0aWwvY2hlY2tFbGVtZW50RXhpc3QudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL3V0aWwvYWRkUGFyc2VkV2lraXRleHQudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL25vdGljZS50cyIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L29wdGlvbnMuanNvbiIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L21vZHVsZXMvbHVhL2x1YUFkZFRleHQudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL2x1YS9sdWFHZXRUZXh0LnRzIiwgInNyYy9TcGVjaWFsV2lraXRleHQvbW9kdWxlcy9hcGkudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL3V0aWwvZ2V0TGFuZ3VhZ2UudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL213L213QWRkVGV4dC50cyIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L21vZHVsZXMvbHVhL2x1YUNoZWNrLnRzIiwgInNyYy9TcGVjaWFsV2lraXRleHQvbW9kdWxlcy9tdy9td0FwcGx5LnRzIiwgInNyYy9TcGVjaWFsV2lraXRleHQvbW9kdWxlcy91dGlsL2NoZWNrTXdDb25maWcudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL3V0aWwvY2hlY2tOZWVkUHJldmlldy50cyIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L21vZHVsZXMvbXcvbXdBZGRQcmV2aWV3LnRzIiwgInNyYy9TcGVjaWFsV2lraXRleHQvbW9kdWxlcy93aWtpdGV4dFByZXZpZXdUZXN0Y2FzZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHttd0FkZFByZXZpZXd9IGZyb20gJy4vbW9kdWxlcy9tdy9td0FkZFByZXZpZXcnO1xuaW1wb3J0IHt3aWtpdGV4dFByZXZpZXdUZXN0Y2FzZX0gZnJvbSAnLi9tb2R1bGVzL3dpa2l0ZXh0UHJldmlld1Rlc3RjYXNlJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBzcGVjaWFsV2lraXRleHQoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdC8vIOaJp+ihjOmihOiniFxuXHRtd0FkZFByZXZpZXcoJGJvZHkpO1xuXHQvLyDmo4Dmn6XmtYvor5XmoLfkvotcblx0dm9pZCB3aWtpdGV4dFByZXZpZXdUZXN0Y2FzZSh0cnVlKTtcbn0pO1xuIiwgImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvU3BlY2lhbFdpa2l0ZXh0L2NvbXBvbmVudHMvU3BlY2lhbFdpa2l0ZXh0Lm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3QgcHJldmlld0xvYWRpbmdDb250ZW50ID0gXCJTcGVjaWFsV2lraXRleHQtbW9kdWxlX19wcmV2aWV3LWxvYWRpbmdfX2NvbnRlbnRfMFByRGxHX180MTAwXCI7XG5leHBvcnQgY29uc3QgcHJldmlld0xvYWRpbmdJbm5lciA9IFwiU3BlY2lhbFdpa2l0ZXh0LW1vZHVsZV9fcHJldmlldy1sb2FkaW5nX19pbm5lcl8wUHJEbEdfXzQxMDBcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcInByZXZpZXdMb2FkaW5nQ29udGVudFwiOiBwcmV2aWV3TG9hZGluZ0NvbnRlbnQsXG4gIFwicHJldmlld0xvYWRpbmdJbm5lclwiOiBwcmV2aWV3TG9hZGluZ0lubmVyXG59O1xuICAgICAgIiwgImltcG9ydCB7cHJldmlld0xvYWRpbmdDb250ZW50LCBwcmV2aWV3TG9hZGluZ0lubmVyfSBmcm9tICcuL1NwZWNpYWxXaWtpdGV4dC5tb2R1bGUubGVzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IGFqYXhMb2FkZXIgZnJvbSAnLi4vaW1hZ2VzL0xvYWRpbmdfaWNvbi5naWYnO1xuaW1wb3J0IGFsZXJ0IGZyb20gJy4uL2ltYWdlcy9BbGVydC5wbmcnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9tb2R1bGVzL2kxOG4nO1xuXG5jb25zdCBGYWlsZWQgPSAoKSA9PiAoXG5cdDw+XG5cdFx0PGltZyBzcmM9e2FsZXJ0fSBkZWNvZGluZz1cImFzeW5jXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgLz5cblx0XHQ8c3Bhbj4mbmJzcDt7Z2V0TWVzc2FnZSgnRmFpbGVkJyl9PC9zcGFuPlxuXHQ8Lz5cbik7XG5cbmNvbnN0IExvYWRpbmcgPSAoKSA9PiAoXG5cdDxkaXYgaWQ9XCJzcGVjaWFsd2lraXRleHQtcHJldmlldy1sb2FkaW5nXCI+XG5cdFx0PGRpdiBjbGFzc05hbWU9e1sncXVvdGVib3gnLCBwcmV2aWV3TG9hZGluZ0lubmVyXX0gaWQ9XCJzcGVjaWFsd2lraXRleHQtcHJldmlldy1sb2FkaW5nX19pbm5lclwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3ByZXZpZXdMb2FkaW5nQ29udGVudH0gaWQ9XCJzcGVjaWFsd2lraXRleHQtcHJldmlldy1sb2FkaW5nX19jb250ZW50XCI+XG5cdFx0XHRcdDxpbWcgc3JjPXthamF4TG9hZGVyfSBkZWNvZGluZz1cImFzeW5jXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgLz5cblx0XHRcdFx0PHNwYW4+Jm5ic3A7e2dldE1lc3NhZ2UoJ0xvYWRpbmcnKX08L3NwYW4+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG4pO1xuXG5leHBvcnQge0ZhaWxlZCwgTG9hZGluZ307XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdEZhaWxlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdGYWlsZWQgdG8gbG9hZCBwcmV2aWV3LicsXG5cdFx0XHQnemgtaGFucyc6ICfpooTop4jliqDovb3lpLHotKUnLFxuXHRcdFx0J3poLWhhbnQnOiAn6aCQ6Ka96LyJ5YWl5aSx6LSlJyxcblx0XHR9KSxcblx0XHRMb2FkaW5nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvYWRpbmcgcHJldmlldy4uLicsXG5cdFx0XHQnemgtaGFucyc6ICfpooTop4jliqDovb3kuK3igKbigKYnLFxuXHRcdFx0J3poLWhhbnQnOiAn6aCQ6Ka96LyJ5YWl5Lit4oCm4oCmJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtnZW5lcmF0ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG4vLyDmo4Dmn6VzZWxlY3RvcuWvueW6lOeahERPTeWvueixoeaYr+WQpuWtmOWcqFxuY29uc3QgY2hlY2tFbGVtZW50RXhpc3QgPSAoc2VsZWN0b3JzOiBzdHJpbmcgfCBzdHJpbmdbXSk6IGJvb2xlYW4gPT4ge1xuXHRjb25zdCBzZWxlY3RvckFycmF5OiBzdHJpbmdbXSA9IGdlbmVyYXRlQXJyYXkoc2VsZWN0b3JzKTtcblxuXHRmb3IgKGNvbnN0IHNlbGVjdG9yIG9mIHNlbGVjdG9yQXJyYXkpIHtcblx0XHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCB7Y2hlY2tFbGVtZW50RXhpc3R9O1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5pbXBvcnQge2NoZWNrRWxlbWVudEV4aXN0fSBmcm9tICcuL2NoZWNrRWxlbWVudEV4aXN0JztcblxuLy8g5bCG6Kej5p6Q5ZCO55qEd2lraXRleHTliqDlhaXpobXpnaLkuK1cbmNvbnN0IGFkZFBhcnNlZFdpa2l0ZXh0ID0gKHBhcnNlZFdpa2l0ZXh0OiBzdHJpbmcgfCBSZWFjdC5SZWFjdEVsZW1lbnQpOiB2b2lkID0+IHtcblx0Y29uc3QgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0gJCgnYm9keScpO1xuXHRjb25zdCAkcGFyc2VkV2lraXRleHQ6IEpRdWVyeSA9ICQoKS5odG1sKHBhcnNlZFdpa2l0ZXh0KTtcblxuXHRpZiAoY2hlY2tFbGVtZW50RXhpc3QoJyNzcGVjaWFsd2lraXRleHQtcHJldmlldy1sb2FkaW5nJykpIHtcblx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnI3NwZWNpYWx3aWtpdGV4dC1wcmV2aWV3LWxvYWRpbmcnKTtcblx0XHQkZWxlbWVudC5odG1sKHBhcnNlZFdpa2l0ZXh0KTtcblx0XHRtdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuZmlyZSgkZWxlbWVudCk7XG5cdH0gZWxzZSBpZiAoY2hlY2tFbGVtZW50RXhpc3QoJy5kaWZmLWN1cnJlbnR2ZXJzaW9uLXRpdGxlJykpIHtcblx0XHQkYm9keS5maW5kKCcuZGlmZi1jdXJyZW50dmVyc2lvbi10aXRsZScpLmFwcGVuZCgkcGFyc2VkV2lraXRleHQpO1xuXHR9IGVsc2UgaWYgKGNoZWNrRWxlbWVudEV4aXN0KCcucHJldmlld25vdGUnKSkge1xuXHRcdCRib2R5LmZpbmQoJy5wcmV2aWV3bm90ZScpLmFwcGVuZCgkcGFyc2VkV2lraXRleHQpO1xuXHR9IGVsc2UgaWYgKGNoZWNrRWxlbWVudEV4aXN0KCcubXctdW5kZWxldGUtcmV2aXNpb24nKSkge1xuXHRcdCRib2R5LmZpbmQoJy5tdy11bmRlbGV0ZS1yZXZpc2lvbicpLmFwcGVuZCgkcGFyc2VkV2lraXRleHQpO1xuXHR9IGVsc2UgaWYgKGNoZWNrRWxlbWVudEV4aXN0KCcjbXctY29udGVudC10ZXh0JykpIHtcblx0XHQkYm9keS5maW5kKCcjbXctY29udGVudC10ZXh0JykuYXBwZW5kKCRwYXJzZWRXaWtpdGV4dCk7XG5cdH1cblxuXHRtdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuZmlyZSgkcGFyc2VkV2lraXRleHQpO1xufTtcblxuZXhwb3J0IHthZGRQYXJzZWRXaWtpdGV4dH07XG4iLCAiaW1wb3J0IHtGYWlsZWQsIExvYWRpbmd9IGZyb20gJy4uL2NvbXBvbmVudHMvZ2VuZXJhdGVFbGVtZW50cyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IHthZGRQYXJzZWRXaWtpdGV4dH0gZnJvbSAnLi91dGlsL2FkZFBhcnNlZFdpa2l0ZXh0JztcblxuLy8gW1tGaWxlOkdub21lLWRpYWxvZy13YXJuaW5nMi5zdmd8MzJweF1dXG4vLyAte3poLWhhbnM66aKE6KeI5Yqg6L295aSx6LSlO3poLWhhbnQ66aCQ6Ka96LyJ5YWl5aSx6LSlO30tXG5jb25zdCBub3RpY2VGYWlsRWxlbWVudDogUmVhY3QuUmVhY3RFbGVtZW50ID0gRmFpbGVkKCk7XG5cbi8vIHt7UXVvdGUgYm94IHxxdW90ZSAgPSAte3poLWhhbnM66aKE6KeI5Yqg6L295LitO3poLWhhbnQ66aCQ6Ka96LyJ5YWl5LitO30t4oCm4oCmIHx3aWR0aCAgPSA1MCUgfGFsaWduICA9IGNlbnRlcn19XG5jb25zdCBub3RpY2VMb2FkaW5nRWxlbWVudDogUmVhY3QuUmVhY3RFbGVtZW50ID0gTG9hZGluZygpO1xuXG4vLyDmlLnliqhET03lhoXlrrlcbmNvbnN0IHJlcGxhY2VET00gPSAoc2VsZWN0b3I6IHN0cmluZywgZWxlbWVudD86IFJlYWN0LlJlYWN0RWxlbWVudCk6IHZvaWQgPT4ge1xuXHQkKHNlbGVjdG9yKS5odG1sKGVsZW1lbnQgPz8gJycpO1xufTtcblxuLy8g5Yqg5YWl4oCcW+i9veWFpeS4rV3igJ3nmoTmj5DnpLpcbmNvbnN0IGFkZExvYWRpbmdOb3RpY2UgPSAoKTogdm9pZCA9PiB7XG5cdGFkZFBhcnNlZFdpa2l0ZXh0KG5vdGljZUxvYWRpbmdFbGVtZW50KTtcbn07XG5cbi8vIOi9veWFpemUmeivr+eahOaPkOekulxuY29uc3QgbG9hZGluZ0ZhaWxOb3RpY2UgPSAoKTogdm9pZCA9PiB7XG5cdHJlcGxhY2VET00oJyNzcGVjaWFsd2lraXRleHQtcHJldmlldy1sb2FkaW5nX19jb250ZW50Jywgbm90aWNlRmFpbEVsZW1lbnQpO1xufTtcblxuLy8g56e76Zmk4oCcW+i9veWFpeS4rV3igJ3nmoTmj5DnpLpcbmNvbnN0IHJlbW92ZUxvYWRpbmdOb3RpY2UgPSAoKTogdm9pZCA9PiB7XG5cdHJlcGxhY2VET00oJyNzcGVjaWFsd2lraXRleHQtcHJldmlldy1sb2FkaW5nJyk7XG59O1xuXG5leHBvcnQge25vdGljZUxvYWRpbmdFbGVtZW50LCBhZGRMb2FkaW5nTm90aWNlLCBsb2FkaW5nRmFpbE5vdGljZSwgcmVtb3ZlTG9hZGluZ05vdGljZX07XG4iLCAie1xuXHRcInZlcnNpb25cIjogXCIyLjBcIixcblx0XCJ3aWtpVGV4dEtleVwiOiBcIl9hZGRUZXh0XCJcbn1cbiIsICIvLyDlkIjlubblpJrkuKp3aWtpdGV4dOWtl+espuS4slxuY29uc3QgbHVhQWRkVGV4dCA9IChpbnB1dFN0cmluZzogc3RyaW5nLCBuZXdTdHJpbmc6IHN0cmluZywgaXNFc2NhcGU6IGJvb2xlYW4gPSBmYWxzZSk6IHN0cmluZyA9PiB7XG5cdGlmIChuZXdTdHJpbmcpIHtcblx0XHRpZiAoaW5wdXRTdHJpbmcpIHtcblx0XHRcdGlucHV0U3RyaW5nICs9ICdcXG4nO1xuXHRcdH1cblxuXHRcdGlmIChpc0VzY2FwZSkge1xuXHRcdFx0Y29uc3QgW2VzY2FwZVN0cmluZ10gPSBKU09OLnBhcnNlKFxuXHRcdFx0XHRgWyR7SlNPTi5zdHJpbmdpZnkoXG5cdFx0XHRcdFx0Ly8gTHVh5LiN5pSv5oyBXFx144CBXFx46L2s5LmJ5a2X56ymXG5cdFx0XHRcdFx0bmV3U3RyaW5nLnJlcGxhY2UoL1xcXFwoW3V4XSkvZ2ksICckMScpXG5cdFx0XHRcdCkucmVwbGFjZSgvXFxcXFxcXFwvZywgJ1xcXFwnKX1dYFxuXHRcdFx0KSBhcyBbc3RyaW5nXTtcblx0XHRcdG5ld1N0cmluZyA9IGVzY2FwZVN0cmluZztcblx0XHR9XG5cblx0XHRpbnB1dFN0cmluZyArPSBuZXdTdHJpbmc7XG5cdH1cblxuXHRyZXR1cm4gaW5wdXRTdHJpbmc7XG59O1xuXG5leHBvcnQge2x1YUFkZFRleHR9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7bHVhQWRkVGV4dH0gZnJvbSAnLi9sdWFBZGRUZXh0JztcblxuLy8g6K+75Y+Wd2lraXRleHTlrZfnrKbkuLLvvIzlubblv73nlaXms6jph4rlsL7pg6hcbmNvbnN0IGx1YUdldFN0cmluZyA9IChpbnB1dFN0cmluZzogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0Y29uc3QgdGVzdFN0cmluZ0V4ZWNBcnJheTogUmVnRXhwRXhlY0FycmF5IHwgbnVsbCA9IC9bXlxcbl0qXFwqXFwvLy5leGVjKGlucHV0U3RyaW5nKTtcblxuXHRsZXQgdGVzdFN0cmluZzogc3RyaW5nID0gaW5wdXRTdHJpbmc7XG5cdGlmICh0ZXN0U3RyaW5nRXhlY0FycmF5KSB7XG5cdFx0W3Rlc3RTdHJpbmddID0gdGVzdFN0cmluZ0V4ZWNBcnJheTtcblx0XHR0ZXN0U3RyaW5nID0gdGVzdFN0cmluZy5zbGljZSgwLCBNYXRoLm1heCgwLCB0ZXN0U3RyaW5nLmxlbmd0aCAtIDIpKTtcblx0fVxuXG5cdGNvbnN0IHRyaW1DaGVjazogc3RyaW5nID0gdGVzdFN0cmluZy50cmltKCk7XG5cdGNvbnN0IGZpcnN0Q2hhcjogc3RyaW5nID0gdHJpbUNoZWNrLmNoYXJBdCgwKTtcblx0aWYgKGZpcnN0Q2hhciA9PT0gdHJpbUNoZWNrLmF0KC0xKSAmJiAoZmlyc3RDaGFyID09PSBcIidcIiB8fCBmaXJzdENoYXIgPT09ICdcIicpKSB7XG5cdFx0cmV0dXJuIHRyaW1DaGVjay5zbGljZSgxLCAxICsgdHJpbUNoZWNrLmxlbmd0aCAtIDIpO1xuXHR9XG5cblx0cmV0dXJuIHRlc3RTdHJpbmcudHJpbSgpO1xufTtcblxuLy8g5o2V6I63Q1NT5paH5pys5Lit56ym5ZCIYDx7T1BUSU9OUy53aWtpVGV4dEtleX0+ICB7IGNvbnRlbnTvvJpcIlhYWFwiIH1g5qih5byP55qE5a2X56ym5LiyXG5jb25zdCBsdWFHZXRDb250ZW50VGV4dCA9IChpbnB1dFN0cmluZzogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0bGV0IHdpa2l0ZXh0OiBzdHJpbmcgPSAnJztcblxuXHR0cnkge1xuXHRcdGlucHV0U3RyaW5nLnJlcGxhY2UoXG5cdFx0XHRuZXcgUmVnRXhwKGAke09QVElPTlMud2lraVRleHRLZXl9XFxcXHMqXFxcXHtbXmNcXFxcfV0qY29udGVudFxcXFxzKjpcXFxccypbXlxcbl0qYCwgJ2cnKSxcblx0XHRcdChzdWJzdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0XHRcdGNvbnN0IHRlbXBUZXh0OiBzdHJpbmcgPSAoL2NvbnRlbnRcXHMqOlxccypbXlxcbl0qLy5leGVjKHN1YnN0cmluZykgfHwgWydjb250ZW50OiddKVswXVxuXHRcdFx0XHRcdC5yZXBsYWNlKC9eW1xcczt9XSt8W1xcczt9XSskL2csICcnKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC9cXHMqY29udGVudFxccyo6XFxzKi8sICcnKTtcblxuXHRcdFx0XHRpZiAod2lraXRleHQpIHtcblx0XHRcdFx0XHR3aWtpdGV4dCArPSAnXFxuJztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHdpa2l0ZXh0ICs9IGx1YUdldFN0cmluZyh0ZW1wVGV4dCk7XG5cblx0XHRcdFx0cmV0dXJuIHN1YnN0cmluZztcblx0XHRcdH1cblx0XHQpO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRyZXR1cm4gd2lraXRleHQudHJpbSgpO1xufTtcblxuLy8g5o2V6I635a2X56ym5Liy5YyW55qE5a+56LGh5Lit56ym5ZCIYDx7T1BUSU9OUy53aWtpVGV4dEtleX0+77ydWFhYYOaIlmA8e09QVElPTlMud2lraVRleHRLZXl9Pu+8mlhYWGDmqKHlvI/nmoTlrZfnrKbkuLIgKOazqOmHiuS7peWFqOinkuWtl+espuS7o+abv++8jOmBv+WFjeiiq+aNleiOtylcbmNvbnN0IGx1YUdldE9ialRleHQgPSAoaW5wdXRTdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdGxldCB3aWtpdGV4dDogc3RyaW5nID0gJyc7XG5cblx0dHJ5IHtcblx0XHRpbnB1dFN0cmluZy5yZXBsYWNlKFxuXHRcdFx0bmV3IFJlZ0V4cChgJHtPUFRJT05TLndpa2lUZXh0S2V5fVxcXFxzKltcXFxcPTpdXFxcXHMqW15cXG5dKmAsICdnJyksXG5cdFx0XHQoc3Vic3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdFx0XHRjb25zdCB0ZW1wVGV4dDogc3RyaW5nID0gc3Vic3RyaW5nXG5cdFx0XHRcdFx0LnJlcGxhY2UoL15bXFxzO31dK3xbXFxzO31dKyQvZywgJycpXG5cdFx0XHRcdFx0LnJlcGxhY2UobmV3IFJlZ0V4cChgJHtPUFRJT05TLndpa2lUZXh0S2V5fVxcXFxzKltcXFxcPTpdXFxcXHMqYCksICcnKTtcblxuXHRcdFx0XHRpZiAod2lraXRleHQpIHtcblx0XHRcdFx0XHR3aWtpdGV4dCArPSAnXFxuJztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHdpa2l0ZXh0ICs9IGx1YUdldFN0cmluZyh0ZW1wVGV4dCk7XG5cblx0XHRcdFx0cmV0dXJuIHN1YnN0cmluZztcblx0XHRcdH1cblx0XHQpO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRyZXR1cm4gd2lraXRleHQudHJpbSgpO1xufTtcblxuLy8g5YiG5p6QQ1NT5Lit56ym5ZCI5p2h5Lu255qEd2lraXRleHRcbmNvbnN0IGx1YUdldENTU3dpa2l0ZXh0ID0gKGlucHV0U3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRsZXQgd2lraXRleHQ6IHN0cmluZyA9ICcnO1xuXG5cdGNvbnN0IGNzc1RleHQ6IHN0cmluZyA9XG5cdFx0KGlucHV0U3RyaW5nIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFRleHRBcmVhRWxlbWVudD4oJ3RleHRhcmVhW25hbWU9d3BUZXh0Ym94MV0nKT8udmFsdWUpID8/ICcnO1xuXHRpZiAoIWNzc1RleHQudHJpbSgpKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0Ly8g5Yy56YWNIDx7T1BUSU9OUy53aWtpVGV4dEtleX0+IHsgY29udGVudO+8mlwiWFhYXCIgfSDmqKHlvI9cblx0d2lraXRleHQgPSBsdWFBZGRUZXh0KHdpa2l0ZXh0LCBsdWFHZXRDb250ZW50VGV4dChjc3NUZXh0KSwgdHJ1ZSk7XG5cdC8vIOWMuemFjSAvKiA8e09QVElPTlMud2lraVRleHRLZXl9Pu+8mlhYWCAqLyDmqKHlvI9cblx0d2lraXRleHQgPSBsdWFBZGRUZXh0KHdpa2l0ZXh0LCBsdWFHZXRPYmpUZXh0KGNzc1RleHQpLCB0cnVlKTtcblxuXHRyZXR1cm4gd2lraXRleHQudHJpbSgpO1xufTtcblxuLy8g5YiG5p6QSlNPTuS4reespuWQiOadoeS7tueahHdpa2l0ZXh0XG5jb25zdCBsdWFHZXRKU09Od2lraXRleHQgPSAoaW5wdXRTdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdGxldCB3aWtpdGV4dDogc3RyaW5nID0gJyc7XG5cblx0Y29uc3QgSlNPTlRleHQ6IHN0cmluZyA9XG5cdFx0KGlucHV0U3RyaW5nIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFRleHRBcmVhRWxlbWVudD4oJ3RleHRhcmVhW25hbWU9d3BUZXh0Ym94MV0nKT8udmFsdWUpID8/ICcnO1xuXHRpZiAoIUpTT05UZXh0LnRyaW0oKSkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdHRyeSB7XG5cdFx0Y29uc3QganNvbkRhdGEgPSBKU09OLnBhcnNlKEpTT05UZXh0KSBhcyBvYmplY3Q7XG5cdFx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoanNvbkRhdGEpKSB7XG5cdFx0XHRpZiAobmV3IFJlZ0V4cChPUFRJT05TLndpa2lUZXh0S2V5KS50ZXN0KGtleSkgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHR3aWtpdGV4dCA9IGx1YUFkZFRleHQod2lraXRleHQsIHZhbHVlKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8g6Iul6ZSu5YC85piv5a+56LGhXG5cdFx0XHRpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHRmb3IgKGNvbnN0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyh2YWx1ZSBhcyBvYmplY3QpKSB7XG5cdFx0XHRcdFx0aWYgKG5ldyBSZWdFeHAoT1BUSU9OUy53aWtpVGV4dEtleSkudGVzdChrKSAmJiB0eXBlb2YgdiA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRcdHdpa2l0ZXh0ID0gbHVhQWRkVGV4dCh3aWtpdGV4dCwgdik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRyZXR1cm4gd2lraXRleHQudHJpbSgpO1xufTtcblxuLy8g5YiG5p6QSmF2YVNjcmlwdOS4reespuWQiOadoeS7tueahHdpa2l0ZXh0XG5jb25zdCBsdWFHZXRKU3dpa2l0ZXh0ID0gKGlucHV0U3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRsZXQgd2lraXRleHQ6IHN0cmluZyA9ICcnO1xuXG5cdGNvbnN0IGpzVGV4dDogc3RyaW5nID1cblx0XHQoaW5wdXRTdHJpbmcgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MVGV4dEFyZWFFbGVtZW50PigndGV4dGFyZWFbbmFtZT13cFRleHRib3gxXScpPy52YWx1ZSkgPz8gJyc7XG5cdGlmICghanNUZXh0LnRyaW0oKSkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdHdpa2l0ZXh0ID0gbHVhQWRkVGV4dCh3aWtpdGV4dCwgbHVhR2V0T2JqVGV4dChqc1RleHQpLCB0cnVlKTtcblxuXHRyZXR1cm4gd2lraXRleHQudHJpbSgpO1xufTtcblxuZXhwb3J0IHtsdWFHZXRDU1N3aWtpdGV4dCwgbHVhR2V0SlNPTndpa2l0ZXh0LCBsdWFHZXRKU3dpa2l0ZXh0fTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFNwZWNpYWxXaWtpdGV4dC8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImNvbnN0IHt3Z1VzZXJMYW5ndWFnZSwgd2dVc2VyVmFyaWFudH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmNvbnN0IGdldExhbmd1YWdlID0gKCk6IHN0cmluZyA9PiB7XG5cdGNvbnN0IGxhbmc6IHN0cmluZyA9IHdnVXNlckxhbmd1YWdlO1xuXG5cdGlmIChsYW5nLmluY2x1ZGVzKCd6aCcpKSB7XG5cdFx0cmV0dXJuIHdnVXNlclZhcmlhbnQgYXMgc3RyaW5nO1xuXHR9XG5cblx0cmV0dXJuIGxhbmc7XG59O1xuXG5leHBvcnQge2dldExhbmd1YWdlfTtcbiIsICJpbXBvcnQge2xvYWRpbmdGYWlsTm90aWNlLCByZW1vdmVMb2FkaW5nTm90aWNlfSBmcm9tICcuLi9ub3RpY2UnO1xuaW1wb3J0IHthZGRQYXJzZWRXaWtpdGV4dH0gZnJvbSAnLi4vdXRpbC9hZGRQYXJzZWRXaWtpdGV4dCc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi4vYXBpJztcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gJy4uL3V0aWwvZ2V0TGFuZ3VhZ2UnO1xuXG5jb25zdCB7c2tpbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbi8vIOWKoOWFpemihOiniOWGheWuuVxuY29uc3QgbXdBZGRXaWtpVGV4dCA9IGFzeW5jICh3aWtpdGV4dDogc3RyaW5nLCBwYWdlTmFtZTogc3RyaW5nLCBpc1ByZXZpZXc6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0aWYgKHdpa2l0ZXh0LnRyaW0oKSkge1xuXHRcdGNvbnN0IHBhcmFtczogQXBpUGFyc2VQYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdC8vIOmBv+WFjeWGheWuuemHjeWkjVxuXHRcdFx0dGl0bGU6IHBhZ2VOYW1lLFxuXHRcdFx0Y29udGVudG1vZGVsOiAnd2lraXRleHQnLFxuXHRcdFx0dGV4dDogd2lraXRleHQsXG5cdFx0XHRwcm9wOiAndGV4dCcsXG5cdFx0XHR1c2VsYW5nOiBnZXRMYW5ndWFnZSgpLFxuXHRcdFx0dXNlc2tpbjogc2tpbixcblx0XHR9O1xuXHRcdGlmIChpc1ByZXZpZXcpIHtcblx0XHRcdHBhcmFtcy5kaXNhYmxlZWRpdHNlY3Rpb24gPSB0cnVlO1xuXHRcdFx0cGFyYW1zLnByZXZpZXcgPSB0cnVlO1xuXHRcdH1cblxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXHRcdFx0aWYgKCFkYXRhPy5bJ3BhcnNlJ10/LnRleHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBwYXJzZWRXaWtpdGV4dDogc3RyaW5nID0gKGRhdGFbJ3BhcnNlJ10udGV4dCBhcyBzdHJpbmcpLnRyaW0oKTtcblxuXHRcdFx0aWYgKHBhcnNlZFdpa2l0ZXh0KSB7XG5cdFx0XHRcdGFkZFBhcnNlZFdpa2l0ZXh0KHBhcnNlZFdpa2l0ZXh0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlbW92ZUxvYWRpbmdOb3RpY2UoKTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdGxvYWRpbmdGYWlsTm90aWNlKCk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJlbW92ZUxvYWRpbmdOb3RpY2UoKTtcblx0fVxufTtcblxuLy8g5Yqg5YWl6aKE6KeI55qETHVh5YaF5a65XG5jb25zdCBtd0FkZEx1YVRleHQgPSBhc3luYyAoXG5cdHdpa2l0ZXh0OiBzdHJpbmcsXG5cdHBhZ2VOYW1lOiBzdHJpbmcsXG5cdGlzUHJldmlldzogYm9vbGVhbixcblx0Y2FsbEJhY2s/OiAoYXJnOiBzdHJpbmcpID0+IEpRdWVyeSB8IEhUTUxFbGVtZW50IHwgdm9pZFxuKSA9PiB7XG5cdGNvbnN0IHRlbXBNb2R1bGVOYW1lOiBzdHJpbmcgPSAnQWRkVGV4dC9UZW1wL01vZHVsZS9EYXRhLmx1YSc7XG5cdGNvbnN0IG1vZHVsZUNhbGw6IHtcblx0XHR3aWtpdGV4dDogc3RyaW5nO1xuXHRcdHBhZ2VOYW1lOiBzdHJpbmc7XG5cdH0gPSB7XG5cdFx0d2lraXRleHQ6ICcjaW52b2tlOicsXG5cdFx0Ly8g5YiG5byA5p2l77yM6YG/5YWN6KKr5YiG5YiwW1s6Q2F0ZWdvcnk65pyJ6ISa5pys6ZSZ6K+v55qE6aG16Z2iXV1cblx0XHRwYWdlTmFtZTogJ01vZHVsZTonLFxuXHR9O1xuXG5cdGlmICh3aWtpdGV4dC50cmltKCkpIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcGFyYW1zOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHR0aXRsZTogcGFnZU5hbWUsXG5cdFx0XHRcdGNvbnRlbnRtb2RlbDogJ3dpa2l0ZXh0Jyxcblx0XHRcdFx0dGVtcGxhdGVzYW5kYm94dGl0bGU6IG1vZHVsZUNhbGwucGFnZU5hbWUgKyB0ZW1wTW9kdWxlTmFtZSxcblx0XHRcdFx0Ly8g5Yib5bu65Li05pe2THVhIE1vZHVsZVxuXHRcdFx0XHR0ZW1wbGF0ZXNhbmRib3h0ZXh0OiBgcmV0dXJuIHtcblx0bWFpbiA9IGZ1bmN0aW9uKClcblx0XHR4cGNhbGwoXG5cdFx0XHRmdW5jdGlvbigpXG5cdFx0XHRcdCR7d2lraXRleHR9XG5cdFx0XHRlbmQsXG5cdFx0XHRmdW5jdGlvbigpXG5cdFx0XHRlbmRcblx0XHQpXG5cdFx0bG9jYWwgbW9kdWxlV2lraXRleHQgPSBwYWNrYWdlLmxvYWRlZFtcIk1vZHVsZTpNb2R1bGUgd2lraXRleHRcIl1cblx0XHRpZiBtb2R1bGVXaWtpdGV4dCB0aGVuXG5cdFx0XHRsb2NhbCB3aWtpdGV4dCA9IG1vZHVsZVdpa2l0ZXh0Lm1haW4oKVxuXHRcdFx0aWYgbXcudGV4dC50cmltKHdpa2l0ZXh0KSB+PSBcIlwiIHRoZW5cblx0XHRcdFx0cmV0dXJuIG13LmdldEN1cnJlbnRGcmFtZSgpOnByZXByb2Nlc3MobW9kdWxlV2lraXRleHQubWFpbigpKVxuXHRcdFx0ZW5kXG5cdFx0ZW5kXG5cdFx0cmV0dXJuIFwiXCJcblx0ZW5kXG59YCxcblx0XHRcdFx0dGVtcGxhdGVzYW5kYm94Y29udGVudG1vZGVsOiAnU2NyaWJ1bnRvJyxcblx0XHRcdFx0dGVtcGxhdGVzYW5kYm94Y29udGVudGZvcm1hdDogJ3RleHQvcGxhaW4nLFxuXHRcdFx0XHR0ZXh0OiBge3ske21vZHVsZUNhbGwud2lraXRleHR9JHt0ZW1wTW9kdWxlTmFtZX18bWFpbn19YCxcblx0XHRcdFx0cHJvcDogJ3RleHQnLFxuXHRcdFx0XHR1c2VsYW5nOiBnZXRMYW5ndWFnZSgpLFxuXHRcdFx0XHR1c2Vza2luOiBza2luLFxuXHRcdFx0fTtcblx0XHRcdGlmIChpc1ByZXZpZXcpIHtcblx0XHRcdFx0cGFyYW1zLnByZXZpZXcgPSB0cnVlO1xuXHRcdFx0XHRwYXJhbXMuZGlzYWJsZWVkaXRzZWN0aW9uID0gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgZGF0YSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblx0XHRcdGlmICghZGF0YT8uWydwYXJzZSddPy50ZXh0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgcGFyc2VkV2lraXRleHQ6IHN0cmluZyA9IChkYXRhWydwYXJzZSddLnRleHQgYXMgc3RyaW5nKS50cmltKCk7XG5cblx0XHRcdGlmICghcGFyc2VkV2lraXRleHQpIHtcblx0XHRcdFx0cmVtb3ZlTG9hZGluZ05vdGljZSgpO1xuXHRcdFx0XHQvLyDoi6XlnKjov5nkuKrkuLTml7bmqKHlnZfkuK3lh7rplJnliJnlj5bmtohcblx0XHRcdH0gZWxzZSBpZiAoJChwYXJzZWRXaWtpdGV4dCkuZmluZCgnLnNjcmlidW50by1lcnJvcicpLnRleHQoKS5zZWFyY2godGVtcE1vZHVsZU5hbWUpKSB7XG5cdFx0XHRcdHJlbW92ZUxvYWRpbmdOb3RpY2UoKTtcblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIGNhbGxCYWNrID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGNhbGxCYWNrKHBhcnNlZFdpa2l0ZXh0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGFkZFBhcnNlZFdpa2l0ZXh0KHBhcnNlZFdpa2l0ZXh0KTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdGxvYWRpbmdGYWlsTm90aWNlKCk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJlbW92ZUxvYWRpbmdOb3RpY2UoKTtcblx0fVxufTtcblxuZXhwb3J0IHttd0FkZEx1YVRleHQsIG13QWRkV2lraVRleHR9O1xuIiwgImltcG9ydCB7bHVhR2V0Q1NTd2lraXRleHQsIGx1YUdldEpTT053aWtpdGV4dCwgbHVhR2V0SlN3aWtpdGV4dH0gZnJvbSAnLi9sdWFHZXRUZXh0JztcblxuY29uc3Qge3dnUGFnZUNvbnRlbnRNb2RlbH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbi8vIOWIpOaWreaYr+WQpuS4ukx1YVxuY29uc3QgbHVhQ2hlY2sgPSAoaW5wdXRTdHJpbmc6IHN0cmluZyA9ICcnLCBjb250ZW50TW9kZWw6IHN0cmluZyA9IHdnUGFnZUNvbnRlbnRNb2RlbCk6IHN0cmluZyA9PiB7XG5cdC8vIOagueaNrumhtemdouWGheWuueaooeWei+mAieeUqOmAguW9k+eahOino+aekOaooeW8j1xuXHRzd2l0Y2ggKGNvbnRlbnRNb2RlbC50b0xvd2VyQ2FzZSgpKSB7XG5cdFx0Y2FzZSAnanNvbic6XG5cdFx0XHRyZXR1cm4gbHVhR2V0SlNPTndpa2l0ZXh0KGlucHV0U3RyaW5nKTtcblx0XHRjYXNlICdqcyc6XG5cdFx0Y2FzZSAnamF2YXNjcmlwdCc6XG5cdFx0Y2FzZSAndGV4dCc6XG5cdFx0XHRyZXR1cm4gbHVhR2V0SlN3aWtpdGV4dChpbnB1dFN0cmluZyk7XG5cdFx0Y2FzZSAnY3NzJzpcblx0XHRjYXNlICdzYW5pdGl6ZWQtY3NzJzpcblx0XHRcdHJldHVybiBsdWFHZXRDU1N3aWtpdGV4dChpbnB1dFN0cmluZyk7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiAnJztcblx0fVxufTtcblxuZXhwb3J0IHtsdWFDaGVja307XG4iLCAiaW1wb3J0IHthZGRQYXJzZWRXaWtpdGV4dH0gZnJvbSAnLi4vdXRpbC9hZGRQYXJzZWRXaWtpdGV4dCc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi4vYXBpJztcbmltcG9ydCB7Y2hlY2tFbGVtZW50RXhpc3R9IGZyb20gJy4uL3V0aWwvY2hlY2tFbGVtZW50RXhpc3QnO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSAnLi4vdXRpbC9nZXRMYW5ndWFnZSc7XG5pbXBvcnQge2x1YUNoZWNrfSBmcm9tICcuLi9sdWEvbHVhQ2hlY2snO1xuaW1wb3J0IHttd0FkZFdpa2lUZXh0fSBmcm9tICcuL213QWRkVGV4dCc7XG5pbXBvcnQge3JlbW92ZUxvYWRpbmdOb3RpY2V9IGZyb20gJy4uL25vdGljZSc7XG5cbmNvbnN0IHtza2luLCB3Z1JldmlzaW9uSWR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG4vLyDliqDlhaXnvJbovpHmj5DnpLrvvIjoi6XlrZjlnKjvvIlcbmNvbnN0IG13QXBwbHlOb3RpY2UgPSBhc3luYyAoY3VycmVudFBhZ2VOYW1lOiBzdHJpbmcsIHBhZ2VTdWJOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCBwYXJhbXM6IEFwaVBhcnNlUGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHQvLyBnZXQgdGhlIG9yaWdpbmFsIHdpa2l0ZXh0IGNvbnRlbnQgb2YgYSBwYWdlXG5cdFx0XHR0aXRsZTogY3VycmVudFBhZ2VOYW1lICsgcGFnZVN1Yk5hbWUsXG5cdFx0XHR0ZXh0OiBge3sjaW52b2tlOlNwZWNpYWwgd2lraXRleHQvVGVtcGxhdGV8Z2V0Tm90aWNlc3wke2N1cnJlbnRQYWdlTmFtZX18JHtwYWdlU3ViTmFtZX19fWAsXG5cdFx0XHRwcm9wOiAndGV4dCcsXG5cdFx0XHR1c2VsYW5nOiBnZXRMYW5ndWFnZSgpLFxuXHRcdFx0dXNlc2tpbjogc2tpbixcblx0XHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRcdG1heGFnZTogNjAwLFxuXHRcdH07XG5cblx0XHRjb25zdCBkYXRhID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXHRcdGlmICghZGF0YT8uWydwYXJzZSddPy50ZXh0KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgaHRtbCA9IGRhdGFbJ3BhcnNlJ10udGV4dCBhcyBzdHJpbmc7XG5cdFx0aWYgKCQoaHRtbCkudGV4dCgpLnRyaW0oKSkge1xuXHRcdFx0YWRkUGFyc2VkV2lraXRleHQoaHRtbCk7XG5cdFx0fVxuXHR9IGNhdGNoIHt9XG59O1xuXG4vLyDku47pobXpnaLlvZPliY3ljoblj7LniYjmnKzlj5blh7ogPHtPUFRJT05TLndpa2lUZXh0S2V5fT5cbmNvbnN0IG13QXBwbHlSZXZpc2lvbiA9IGFzeW5jIChjdXJyZW50UGFnZU5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHBhcmFtczogQXBpUGFyc2VQYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdC8vIGdldCB0aGUgb3JpZ2luYWwgd2lraXRleHQgY29udGVudCBvZiBhIHBhZ2Vcblx0XHRcdG9sZGlkOiB3Z1JldmlzaW9uSWQsXG5cdFx0XHRwcm9wOiAnd2lraXRleHQnLFxuXHRcdFx0c21heGFnZTogNjAwLFxuXHRcdFx0bWF4YWdlOiA2MDAsXG5cdFx0fTtcblxuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cdFx0aWYgKCFkYXRhPy5bJ3BhcnNlJ10/Lndpa2l0ZXh0KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bGV0IHBhZ2VDb250ZW50OiBzdHJpbmcgPSBsdWFDaGVjaygoZGF0YVsncGFyc2UnXS53aWtpdGV4dCBhcyBzdHJpbmcpLnRyaW0oKSk7XG5cdFx0cGFnZUNvbnRlbnQgPVxuXHRcdFx0KGNoZWNrRWxlbWVudEV4aXN0KCcjbXctY2xlYXJ5b3VyY2FjaGUnKVxuXHRcdFx0XHQ/ICd7eyNpbnZva2U6U3BlY2lhbCB3aWtpdGV4dC9UZW1wbGF0ZXxpbnR8Y2xlYXJ5b3VyY2FjaGV9fSdcblx0XHRcdFx0OiAnJykgKyBwYWdlQ29udGVudDtcblxuXHRcdGlmIChwYWdlQ29udGVudC50cmltKCkpIHtcblx0XHRcdHZvaWQgbXdBZGRXaWtpVGV4dChwYWdlQ29udGVudCwgY3VycmVudFBhZ2VOYW1lLCB0cnVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlTG9hZGluZ05vdGljZSgpO1xuXHRcdH1cblx0fSBjYXRjaCB7XG5cdFx0cmVtb3ZlTG9hZGluZ05vdGljZSgpO1xuXHR9XG59O1xuXG5leHBvcnQge213QXBwbHlOb3RpY2UsIG13QXBwbHlSZXZpc2lvbn07XG4iLCAiaW1wb3J0IHtnZW5lcmF0ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhbGxNd0NvbmZpZzogUmV0dXJuVHlwZTx0eXBlb2YgbXcuY29uZmlnLmdldD4gPSBtdy5jb25maWcuZ2V0KCk7XG5cbi8vIOajgOafpU1lZGlhV2lraeeahOiuvue9rlxuY29uc3QgY2hlY2tNd0NvbmZpZyA9IChjb25maWdLZXk6IHN0cmluZywgZXhwZWN0Q29uZmlnOiBzdHJpbmcgfCBzdHJpbmdbXSk6IGJvb2xlYW4gPT4ge1xuXHRsZXQgbXdDb25maWc6IHVua25vd24gPSBhbGxNd0NvbmZpZ1tjb25maWdLZXldO1xuXHRpZiAoIW13Q29uZmlnKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1iYXNlLXRvLXN0cmluZ1xuXHRtd0NvbmZpZyA9IFN0cmluZyhtd0NvbmZpZykudG9Mb3dlckNhc2UoKS50cmltKCk7XG5cdGlmICghbXdDb25maWcpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRyZXR1cm4gZ2VuZXJhdGVBcnJheShleHBlY3RDb25maWcpLmluY2x1ZGVzKG13Q29uZmlnIGFzIHN0cmluZyk7XG59O1xuXG5leHBvcnQge2NoZWNrTXdDb25maWd9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcblxuLy8g5qOA5p+l5piv5ZCm5pyJ6aKE6KeI55qE5b+F6KaB5oCnXG5jb25zdCBjaGVja05lZWRQcmV2aWV3ID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRyZXR1cm4gZG9jdW1lbnQuYm9keS5pbm5lckhUTUwuc2VhcmNoKE9QVElPTlMud2lraVRleHRLZXkpID4gLTE7XG59O1xuXG5leHBvcnQge2NoZWNrTmVlZFByZXZpZXd9O1xuIiwgImltcG9ydCB7YWRkTG9hZGluZ05vdGljZSwgbm90aWNlTG9hZGluZ0VsZW1lbnQsIHJlbW92ZUxvYWRpbmdOb3RpY2V9IGZyb20gJy4uL25vdGljZSc7XG5pbXBvcnQge2x1YUdldENTU3dpa2l0ZXh0LCBsdWFHZXRKU09Od2lraXRleHR9IGZyb20gJy4uL2x1YS9sdWFHZXRUZXh0JztcbmltcG9ydCB7bXdBZGRMdWFUZXh0LCBtd0FkZFdpa2lUZXh0fSBmcm9tICcuL213QWRkVGV4dCc7XG5pbXBvcnQge213QXBwbHlOb3RpY2UsIG13QXBwbHlSZXZpc2lvbn0gZnJvbSAnLi9td0FwcGx5JztcbmltcG9ydCB7Y2hlY2tFbGVtZW50RXhpc3R9IGZyb20gJy4uL3V0aWwvY2hlY2tFbGVtZW50RXhpc3QnO1xuaW1wb3J0IHtjaGVja013Q29uZmlnfSBmcm9tICcuLi91dGlsL2NoZWNrTXdDb25maWcnO1xuaW1wb3J0IHtjaGVja05lZWRQcmV2aWV3fSBmcm9tICcuLi91dGlsL2NoZWNrTmVlZFByZXZpZXcnO1xuaW1wb3J0IHtsdWFDaGVja30gZnJvbSAnLi4vbHVhL2x1YUNoZWNrJztcblxuY29uc3Qge3dnQ2Fub25pY2FsTmFtZXNwYWNlLCB3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSwgd2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbi8vIOe7memhtemdoua3u+WKoOmihOiniFxuY29uc3QgbXdBZGRQcmV2aWV3ID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvLyDpooTop4jmqKHlvI/lj6rpgILnlKjkuo7ku6XkuIvpobXpnaLlhoXlrrnmqKHlnotcblx0aWYgKGNoZWNrTXdDb25maWcoJ3dnUGFnZUNvbnRlbnRNb2RlbCcsIFsnamF2YXNjcmlwdCcsICdqcycsICdqc29uJywgJ3RleHQnLCAnY3NzJywgJ3Nhbml0aXplZC1jc3MnXSkpIHtcblx0XHQvLyDmqKHlvI8x77ya6aG16Z2i6aKE6KeIXG5cdFx0aWYgKGNoZWNrRWxlbWVudEV4aXN0KCcucHJldmlld25vdGUnKSkge1xuXHRcdFx0Ly8g5qOA5p+l5piv5ZCm5Li66aKE6KeI5qih5byPXG5cdFx0XHQvLyDpooTop4jmnInlj6/og73mmK/lnKjpooTop4jlhbbku5bmnaHnm65cblx0XHRcdGNvbnN0IHBhdGhQYXRoOiBzdHJpbmcgPSBkZWNvZGVVUkkobXcudXRpbC5nZXRVcmwod2dQYWdlTmFtZSkpLnJlcGxhY2UoXG5cdFx0XHRcdG5ldyBSZWdFeHAoYF5cXFxcLz8ke213LnV0aWwuZ2V0VXJsKCcnKS5tYXRjaCgvW2Etel0rLyk/LlswXSA/PyAnJ31cXFxcL2ApLFxuXHRcdFx0XHQnJ1xuXHRcdFx0KTtcblxuXHRcdFx0Ly8g6Iul6aKE6KeI55qE6aG16Z2i5bm26Z2e5pys6Lqr77yM5YiZ5LiN5pi+56S66aKE6KeIXG5cdFx0XHRpZiAocGF0aFBhdGggIT09IHdnUGFnZU5hbWUpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCB3aWtpdGV4dDogc3RyaW5nID0gbHVhQ2hlY2soKTtcblx0XHRcdGlmICh3aWtpdGV4dCkge1xuXHRcdFx0XHQvLyDoi6Xop6PmnpDnu5PmnpzpnZ7nqbrmiY3mlL7nva7pooTop4hcblx0XHRcdFx0YWRkTG9hZGluZ05vdGljZSgpOyAvLyDmlL7nva7mj5DnpLrvvIzmj5DnpLrkvb/nlKjogIXnrYnlvoVBSkFYXG5cdFx0XHRcdHZvaWQgbXdBZGRXaWtpVGV4dCh3aWtpdGV4dCwgd2dQYWdlTmFtZSwgdHJ1ZSk7IC8vIOiLpeWPluW+lyBfYWRkVGV4dCDliJnmmL7npLrpooTop4hcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKCFjaGVja0VsZW1lbnRFeGlzdCgnLm13LV9hZGRUZXh0LWNvbnRlbnQnKSAmJiBjaGVja013Q29uZmlnKCd3Z0FjdGlvbicsICd2aWV3JykpIHtcblx0XHRcdC8vIOaooeW8jzLvvJrkuI3mlK/mjIHmmL7npLrnmoTnibnmrorpobXpnaJcblx0XHRcdC8vIOe7j+afpe+8jOS4jeatouaYr+aooeadv+agt+W8j++8jOaJgOacieacquW1jOWFpScjbXctY2xlYXJ5b3VyY2FjaGUn55qE6aG16Z2i55qG5peg5rOV5q2j5bi45pi+56S6XG5cdFx0XHRpZiAoIWNoZWNrTmVlZFByZXZpZXcoKSkge1xuXHRcdFx0XHRyZXR1cm47IC8vIOayoeaciemihOiniOW/heimgeaXtu+8jOebtOaOpeWBnOatoueoi+W6j++8jOS4jee7p+e7reWIpOaWre+8jOS7peaPkOmrmOaViOeOh1xuXHRcdFx0fVxuXG5cdFx0XHQvLyDoi6Xlt7LmnIkjbXctY2xlYXJ5b3VyY2FjaGXliJnlhYjmuIXmjonvvIzlkKbliJnkvJrlh7rnjrDkuKTkuKpNZWRpYVdpa2k6Q2xlYXJ5b3VyY2FjaGVcblx0XHRcdCRib2R5LmZpbmQoJyNtdy1jbGVhcnlvdXJjYWNoZScpLmh0bWwoJycpO1xuXG5cdFx0XHRpZiAoIWNoZWNrRWxlbWVudEV4aXN0KCd0ZXh0YXJlYVtuYW1lPXdwVGV4dGJveDFdJykpIHtcblx0XHRcdFx0Ly8g6Z2e57yW6L6R5qih5byP5omN5omn6KGMICjpooTop4jkvb/nlKjkuIrmlrnnmoRpZuWMuuWdlylcblx0XHRcdFx0YWRkTG9hZGluZ05vdGljZSgpOyAvLyDmlL7nva7mj5DnpLrvvIzmj5DnpLrkvb/nlKjogIXnrYnlvoVBSkFYXG5cdFx0XHRcdHZvaWQgbXdBcHBseVJldmlzaW9uKHdnUGFnZU5hbWUpOyAvLyDkuLrkuoborqnljoblj7LniYjmnKzmraPluLjmmL7npLrvvIzkvb/nlKh3Z1JldmlzaW9uSWTlj5blvpflhoXlrrlcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGNoZWNrRWxlbWVudEV4aXN0KCcjbXctcmV2aXNpb24taW5mbycpICYmIGNoZWNrTXdDb25maWcoJ3dnQWN0aW9uJywgJ3ZpZXcnKSkge1xuXHRcdFx0Ly8g5qih5byPM++8mumhtemdouWOhuWPsueJiOacrOajgOinhu+8muWmgumcgOWkjeafpeeahOmhueebruS4uumhtemdouWOhuWPsueJiOacrO+8jOacrOW3peWFt+aPkOS+m+mhtemdouWOhuWPsueJiOacrOWGheWuueaYvuekuuaUr+aMgVxuXHRcdFx0Ly8g5pyJ5bWM5YWlJyNtdy1jbGVhcnlvdXJjYWNoZSfnmoTpobXpnaLnmoTljoblj7LniYjmnKzkvJrlj6rog73mmL7npLrmnIDmlrDniYjnmoQgX2FkZFRleHQg5Zug5q2k5omn6KGM5L+u5q2jXG5cdFx0XHRpZiAoIWNoZWNrRWxlbWVudEV4aXN0KCd0ZXh0YXJlYVtuYW1lPXdwVGV4dGJveDFdJykpIHtcblx0XHRcdFx0Ly8g6Z2e57yW6L6R5qih5byP5omN5omn6KGMICjpooTop4jkvb/nlKjkuIrmlrnnmoRpZuWMuuWdlylcblx0XHRcdFx0JGJvZHkuZmluZCgnI213LWNsZWFyeW91cmNhY2hlJykuaHRtbChub3RpY2VMb2FkaW5nRWxlbWVudCk7IC8vIOW3ruW8guaooeW8j++8iOWQq+ajgOmYheS/ruiuoueJiOacrOWIoOmZpO+8ieeahOaPkuWFpeeCueS4jeWQjFxuXHRcdFx0XHR2b2lkIG13QXBwbHlSZXZpc2lvbih3Z1BhZ2VOYW1lKTsgLy8g5Li65LqG6K6p54m55a6a54mI5pys5q2j5bi45pi+56S677yM5L2/55Sod2dSZXZpc2lvbklk5Y+W5b6X5YaF5a65XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZUxvYWRpbmdOb3RpY2UoKTtcblx0XHR9XG5cdH0gZWxzZSBpZiAoY2hlY2tNd0NvbmZpZygnd2dQYWdlQ29udGVudE1vZGVsJywgWydzY3JpYnVudG8nLCAnbHVhJ10pKSB7XG5cdFx0Ly8g5qih5Z2X6aKE6KeI5Yqf6IO9XG5cdFx0aWYgKCFjaGVja05lZWRQcmV2aWV3KCkpIHtcblx0XHRcdHJldHVybjsgLy8g5rKh5pyJ6aKE6KeI5b+F6KaB5pe277yM55u05o6l5YGc5q2i56iL5bqP77yM5LiN57un57ut5Yik5pat77yM5Lul5o+Q6auY5pWI546HXG5cdFx0fVxuXG5cdFx0aWYgKFxuXHRcdFx0Y2hlY2tFbGVtZW50RXhpc3QoJ3RleHRhcmVhW25hbWU9d3BUZXh0Ym94MV0nKSAmJlxuXHRcdFx0Y2hlY2tFbGVtZW50RXhpc3QoJ3RhYmxlLmRpZmYnKSAmJlxuXHRcdFx0IWNoZWNrRWxlbWVudEV4aXN0KCcucHJldmlld25vdGUnKSAmJlxuXHRcdFx0IWNoZWNrTXdDb25maWcoJ3dnQWN0aW9uJywgJ3ZpZXcnKVxuXHRcdCkge1xuXHRcdFx0JChub3RpY2VMb2FkaW5nRWxlbWVudCkuaW5zZXJ0QWZ0ZXIoJyN3aWtpRGlmZicpO1xuXHRcdFx0dm9pZCBtd0FkZEx1YVRleHQoXG5cdFx0XHRcdCgkYm9keS5maW5kKCd0ZXh0YXJlYVtuYW1lPXdwVGV4dGJveDFdJykudmFsKCkgYXMgc3RyaW5nIHwgdW5kZWZpbmVkKSA/PyAnJyxcblx0XHRcdFx0d2dQYWdlTmFtZSxcblx0XHRcdFx0dHJ1ZVxuXHRcdFx0KTtcblx0XHR9XG5cdH0gZWxzZSBpZiAoY2hlY2tFbGVtZW50RXhpc3QoJy5tdy11bmRlbGV0ZS1yZXZpc2lvbicpKSB7XG5cdFx0Ly8g5qih5byPNO+8muW3suWIoOmhtemdoumihOiniFxuXHRcdC8vIOW3suWIoOWGheWuuemhtemdouaYr+eJueauiumhtemdou+8jOaXoOazleeUqOW4uOinhOaWueW8j+WIpOaWremhtemdouWGheWuueaooeWei1xuXHRcdGlmICghY2hlY2tOZWVkUHJldmlldygpKSB7XG5cdFx0XHRyZXR1cm47IC8vIOayoeaciemihOiniOW/heimgeaXtu+8jOebtOaOpeWBnOatoueoi+W6j++8jOS4jee7p+e7reWIpOaWre+8jOS7peaPkOmrmOaViOeOh1xuXHRcdH1cblxuXHRcdGlmIChjaGVja0VsZW1lbnRFeGlzdChbJy5tdy1oaWdobGlnaHQnLCAncHJlJywgJy5tdy1qc29uJ10pKSB7XG5cdFx0XHQvLyDnoa7orqTmraPlnKjpooTop4jlt7LliKDlhoXlrrlcblx0XHRcdGNvbnN0IHRleHRhcmVhQ29udGVudDogc3RyaW5nID0gJGJvZHkuZmluZCgndGV4dGFyZWEnKS52YWwoKSA/PyAnJzsgLy8g5bCd6K+V5Y+W5b6X5bey5Yig5YaF5a655rqQ5Luj56CBXG5cblx0XHRcdGxldCB3aWtpdGV4dDogc3RyaW5nID0gbHVhR2V0SlNPTndpa2l0ZXh0KHRleHRhcmVhQ29udGVudCk7XG5cdFx0XHR3aWtpdGV4dCB8fD0gbHVhR2V0Q1NTd2lraXRleHQodGV4dGFyZWFDb250ZW50KTtcblxuXHRcdFx0aWYgKHdpa2l0ZXh0KSB7XG5cdFx0XHRcdC8vIOiLpeWPluW+lyBfYWRkVGV4dCDliJnmmL7npLrpooTop4hcblx0XHRcdFx0YWRkTG9hZGluZ05vdGljZSgpO1xuXHRcdFx0XHR2b2lkIG13QWRkV2lraVRleHQod2lraXRleHQsIG13LmNvbmZpZy5nZXQoJ3dnUmVsZXZhbnRQYWdlTmFtZScpLCB0cnVlKTtcblx0XHRcdH0gZWxzZSBpZiAoL21vZHVsZVsgX113aWtpdGV4dC4qX2FkZHRleHQvaS50ZXN0KCRib2R5LmZpbmQoJy5tdy1wYXJzZXItb3V0cHV0JykudGV4dCgpKSkge1xuXHRcdFx0XHQvLyDlsJ3or5VMdWHop6PmnpBcblx0XHRcdFx0Ly8g5pys5Yqf6IO955uu5YmN5rWL6K+V5q2j5bi46L+Q5L2cXG5cdFx0XHRcdC8vIOiLpeWTquWkqemihOiniOWPiOWkseaViO+8jOivt+WPlua2iOazqOmHiuS4i+aWuemCo+ihjFxuXHRcdFx0XHQvLyBtd0FkZEx1YVRleHQodGV4dGFyZWFDb250ZW50LCBtdy5jb25maWcuZ2V0KFwid2dSZWxldmFudFBhZ2VOYW1lXCIpLCB0cnVlKTtcblx0XHRcdH1cblx0XHR9XG5cdH0gZWxzZSBpZiAoIWNoZWNrRWxlbWVudEV4aXN0KCcubXctZWRpdG5vdGljZScpICYmIGNoZWNrTXdDb25maWcoJ3dnQ2Fub25pY2FsTmFtZXNwYWNlJywgJ3NwZWNpYWwnKSkge1xuXHRcdC8vIOiLpeeJueauiumhtemdoue8uuS5j+e8lui+keaPkOekuu+8jOWImeihpeS4iue8lui+keaPkOekuiAo6Iul5a2Y5ZyoKVxuXHRcdGNvbnN0IHBhZ2VTdWJOYW1lOiBzdHJpbmcgPSB3Z1BhZ2VOYW1lLnJlcGxhY2UoL3NwZWNpYWw6W14vXSsvaSwgJycpO1xuXHRcdGlmICh3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSkge1xuXHRcdFx0Y29uc3QgZnVsbFBhZ2VOYW1lOiBzdHJpbmcgPSBgJHt3Z0Nhbm9uaWNhbE5hbWVzcGFjZX06JHt3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZX1gO1xuXHRcdFx0dm9pZCBtd0FwcGx5Tm90aWNlKGZ1bGxQYWdlTmFtZSwgcGFnZVN1Yk5hbWUpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZW1vdmVMb2FkaW5nTm90aWNlKCk7IC8vIOmDveS4jeaYr+eahOaDheWGteWImeS4jeaYvuekuumihOiniFxuXHR9XG59O1xuXG5leHBvcnQge213QWRkUHJldmlld307XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Y2hlY2tOZWVkUHJldmlld30gZnJvbSAnLi91dGlsL2NoZWNrTmVlZFByZXZpZXcnO1xuaW1wb3J0IHtsdWFDaGVja30gZnJvbSAnLi9sdWEvbHVhQ2hlY2snO1xuaW1wb3J0IHttd0FkZEx1YVRleHR9IGZyb20gJy4vbXcvbXdBZGRUZXh0JztcbmltcG9ydCB7bm90aWNlTG9hZGluZ0VsZW1lbnR9IGZyb20gJy4vbm90aWNlJztcblxuY29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG4vLyDmnKzohJrmnKznmoRUZXN0Y2FzZVxuY29uc3Qgd2lraXRleHRQcmV2aWV3VGVzdGNhc2UgPSBhc3luYyAoaXNQcmV2aWV3OiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdC8vIOayoeacieWPr+mihOiniOWFg+e0oO+8jOmAgOWHuuOAglxuXHRpZiAoIWNoZWNrTmVlZFByZXZpZXcoKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHRlc3RjYXNlTGlzdDogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50Pihcblx0XHQnLnNwZWNpYWwtd2lraXRleHQtcHJldmlldy10ZXN0Y2FzZSdcblx0KTtcblx0Ly8g6Iul6aG16Z2i5Lit5rKh5pyJVGVzdGNhc2XvvIzpgIDlh7rjgIJcblx0aWYgKCF0ZXN0Y2FzZUxpc3QubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8g5pS26ZuG5L2N5LqO6aG16Z2i5Lit55qEVGVzdGNhc2XpooTop4jlhYPntKBcblx0Y29uc3QgdGVzdGNhc2VEYXRhTGlzdDoge1xuXHRcdGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXHRcdGxhbmc6IHN0cmluZztcblx0XHRjb2RlOiBzdHJpbmc7XG5cdH1bXSA9IFtdO1xuXG5cdGxldCBpOiBudW1iZXIgPSAwO1xuXHRmb3IgKGkgPSAwOyBpIDwgdGVzdGNhc2VMaXN0Lmxlbmd0aDsgKytpKSB7XG5cdFx0Y29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgfCB1bmRlZmluZWQgPSB0ZXN0Y2FzZUxpc3RbaV07XG5cdFx0aWYgKCFlbGVtZW50KSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBjb2RlRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLm13LWhpZ2hsaWdodCcpO1xuXHRcdGlmICghY29kZUVsZW1lbnQpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHtjbGFzc05hbWV9ID0gY29kZUVsZW1lbnQ7XG5cdFx0aWYgKCFjbGFzc05hbWUpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IFssIGNvZGVJZF0gPSAvbXctaGlnaGxpZ2h0LWxhbmctKFxcUyspLy5leGVjKGNsYXNzTmFtZSkgPz8gW107XG5cdFx0Y29uc3Qge2xlbmd0aH0gPSB0ZXN0Y2FzZURhdGFMaXN0O1xuXG5cdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ByZXZpZXctaWQnLCBsZW5ndGgudG9TdHJpbmcoKSk7XG5cdFx0dGVzdGNhc2VEYXRhTGlzdFtsZW5ndGhdID0ge1xuXHRcdFx0ZWxlbWVudCxcblx0XHRcdGxhbmc6IGNvZGVJZD8udG9Mb3dlckNhc2UoKSA/PyAnJyxcblx0XHRcdGNvZGU6IGNvZGVFbGVtZW50LnRleHRDb250ZW50Py50cmltKCkgPz8gJycsXG5cdFx0fTsgLy8gUmVwbGFjZSBBcnJheSNwdXNoIHRvIGF2b2lkIGNvcmUtanMgcG9seWZpbGxpbmdcblx0fVxuXG5cdC8vIOaVtOeQhumhtemdouS4reeahFRlc3RjYXNl6aKE6KeI5YWD57Sg77yM5bm25pS+572u4oCcW+i9veWFpeS4rV3igJ3mtojmga9cblx0bGV0IHBhY2thZ2VXaWtpdGV4dDogc3RyaW5nID0gJyc7XG5cdGZvciAoY29uc3QgdGVzdGNhc2VJdGVtIG9mIE9iamVjdC52YWx1ZXModGVzdGNhc2VEYXRhTGlzdCkpIHtcblx0XHRjb25zdCB7Y29kZSwgZWxlbWVudCwgbGFuZ30gPSB0ZXN0Y2FzZUl0ZW07XG5cblx0XHRpZiAoIWNvZGUpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXG5cdFx0aWYgKFsnamF2YXNjcmlwdCcsICdqcycsICdjc3MnLCAnanNvbicsICd0ZXh0J10uaW5jbHVkZXModGVzdGNhc2VJdGVtLmxhbmcpKSB7XG5cdFx0XHRjb25zdCB3aWtpdGV4dDogc3RyaW5nID0gbHVhQ2hlY2soY29kZSwgbGFuZyk7XG5cdFx0XHRpZiAod2lraXRleHQpIHtcblx0XHRcdFx0Ly8g6Iul6Kej5p6Q57uT5p6c6Z2e56m65omN5pS+572u6aKE6KeIXG5cdFx0XHRcdCRlbGVtZW50LnByZXBlbmQobm90aWNlTG9hZGluZ0VsZW1lbnQpO1xuXHRcdFx0XHRwYWNrYWdlV2lraXRleHQgKz0gYDxkaXYgY2xhc3M9XCJzcGVjaWFsLXdpa2l0ZXh0LXByZXZpZXctdGVzdGNhc2UtJHtpfVwiPlxcbiR7d2lraXRleHR9XFxuPC9kaXY+YDtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKFsnbHVhJywgJ3NjcmlidW50byddLmluY2x1ZGVzKGxhbmcpKSB7XG5cdFx0XHR2b2lkIG13QWRkTHVhVGV4dChcblx0XHRcdFx0Y29kZSxcblx0XHRcdFx0d2dQYWdlTmFtZSxcblx0XHRcdFx0aXNQcmV2aWV3LFxuXHRcdFx0XHQoKCkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiAod2lraXRleHQ6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0JGVsZW1lbnQucHJlcGVuZCh3aWtpdGV4dCk7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fSkoKVxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblxuXHQvLyDlsIbmlbTnkIblroznmoRUZXN0Y2FzZemihOiniOWFg+e0oOe7n+S4gOWPkemAgUFQSeivt+axgu+8jOW5tuWwhui/lOWbnue7k+aenOWIhuWPkeWIsOWQhFRlc3RjYXNlXG5cdGlmIChwYWNrYWdlV2lraXRleHQpIHtcblx0XHRwYWNrYWdlV2lraXRleHQgPSBgPGRpdiBjbGFzcz1cInNwZWNpYWwtd2lraXRleHQtcHJldmlldy10ZXN0Y2FzZS11bmRlZmluZWRcIj4ke3BhY2thZ2VXaWtpdGV4dH08L2Rpdj5gO1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBwYXJhbXM6IEFwaVBhcnNlUGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHRleHQ6IHBhY2thZ2VXaWtpdGV4dCxcblx0XHRcdFx0Y29udGVudG1vZGVsOiAnd2lraXRleHQnLFxuXHRcdFx0XHRwcm9wOiAndGV4dCcsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKGlzUHJldmlldykge1xuXHRcdFx0XHRwYXJhbXMuZGlzYWJsZWVkaXRzZWN0aW9uID0gdHJ1ZTtcblx0XHRcdFx0cGFyYW1zLnByZXZpZXcgPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXHRcdFx0aWYgKCFkYXRhPy5bJ3BhcnNlJ10/LnRleHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBwYXJzZWRXaWtpdGV4dDogc3RyaW5nID0gKGRhdGFbJ3BhcnNlJ10udGV4dCBhcyBzdHJpbmcpLnRyaW0oKTtcblx0XHRcdGlmIChwYXJzZWRXaWtpdGV4dCkge1xuXHRcdFx0XHRjb25zdCAkcGFyc2VkRWxlbWVudDogSlF1ZXJ5ID0gJChwYXJzZWRXaWtpdGV4dCk7XG5cdFx0XHRcdGZvciAoY29uc3QgW2tleSwgdGVzdGNhc2VJdGVtXSBvZiBPYmplY3QuZW50cmllcyh0ZXN0Y2FzZURhdGFMaXN0KSkge1xuXHRcdFx0XHRcdGNvbnN0IHtlbGVtZW50LCBsYW5nfSA9IHRlc3RjYXNlSXRlbTtcblxuXHRcdFx0XHRcdGlmICghWydqYXZhc2NyaXB0JywgJ2pzJywgJ3RleHQnLCAnY3NzJywgJ2pzb24nXS5pbmNsdWRlcyhsYW5nKSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeTxIVE1MRWxlbWVudD4gPSAkcGFyc2VkRWxlbWVudC5maW5kKFxuXHRcdFx0XHRcdFx0YC5zcGVjaWFsLXdpa2l0ZXh0LXByZXZpZXctdGVzdGNhc2UtdW5kZWZpbmVkID4gLnNwZWNpYWwtd2lraXRleHQtcHJldmlldy10ZXN0Y2FzZS0ke2tleX1gXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRpZiAoISRlbGVtZW50Lmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29uc3QgJGFkZFRhcmdldDogSlF1ZXJ5ID0gJChlbGVtZW50KS5maW5kKCcjc3BlY2lhbHdpa2l0ZXh0LXByZXZpZXctbG9hZGluZycpO1xuXHRcdFx0XHRcdCRhZGRUYXJnZXQuaHRtbCgkZWxlbWVudC5odG1sKCkpO1xuXHRcdFx0XHRcdG13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5maXJlKCRhZGRUYXJnZXQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7fVxuXHR9XG59O1xuXG5leHBvcnQge3dpa2l0ZXh0UHJldmlld1Rlc3RjYXNlfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBc0JDLFFBQUEsaUJBQUE7O0FDQ2YsSUFBTUMsd0JBQXdCO0FBQzlCLElBQU1DLHNCQUFzQjs7QUNEbkMsSUFBQUMscUJBQWtCQyxRQUFBSixRQUFBLGdCQUFBLEdBQUEsQ0FBQTs7Ozs7O0FDRGxCLElBQUFLLG9CQUF1QkwsUUFBQSxpQkFBQTtBQUV2QixJQUFNTSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxTQUFBLEdBQVFGLGtCQUFBRyxVQUFTO01BQ2hCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLFVBQUEsR0FBU0wsa0JBQUFHLFVBQVM7TUFDakJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTUUsZUFBZUwsZ0JBQWdCO0FBRXJDLElBQU1NLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FEZkEsSUFBTU4sU0FBU0EsTUFDZEosbUNBQUFXLFFBQUFDLGNBQUFaLG1CQUFBVyxRQUFBRSxVQUFBLE1BQ0NiLG1DQUFBVyxRQUFBQyxjQUFDLE9BQUE7RUFBSUUsS0FBS0M7RUFBT0MsVUFBUztFQUFRQyxPQUFNO0VBQUtDLFFBQU87QUFBQSxD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RyxDQUN6RjtBQUNBLGdCQUFJLENBQUNvQyxTQUFTZ0MsUUFBUTtBQUNyQjtZQUNEO0FBRUEsa0JBQU0rSixhQUFxQmxNLEVBQUVZLE9BQU8sRUFBRVIsS0FBSyxrQ0FBa0M7QUFDN0U4TCx1QkFBV2hNLEtBQUtDLFNBQVNELEtBQUssQ0FBQztBQUMvQkcsZUFBR0MsS0FBSyxrQkFBa0IsRUFBRUMsS0FBSzJMLFVBQVU7VUFDNUM7UUFDRDtNQUNELFFBQVE7TUFBQztJQUNWO0VBQ0QsQ0FBQTtBQUFBLFNBQUEsU0EvSE0xQix5QkFBQTJCLEtBQUE7QUFBQSxXQUFBMUIsTUFBQW5FLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsR0FBQTs7QWxCTE4sTUFBQSxHQUFLdEosbUJBQUFtUCxTQUFRLEVBQUVDLEtBQUssU0FBU0MsZ0JBQWdCdk0sT0FBc0M7QUFFbEYwSixlQUFhMUosS0FBSztBQUVsQixPQUFLeUssd0JBQXdCLElBQUk7QUFDbEMsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQ2IiwgInJlcXVpcmUiLCAicHJldmlld0xvYWRpbmdDb250ZW50IiwgInByZXZpZXdMb2FkaW5nSW5uZXIiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkZhaWxlZCIsICJsb2NhbGl6ZSIsICJlbiIsICJMb2FkaW5nIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiRnJhZ21lbnQiLCAic3JjIiwgIkFsZXJ0X2RlZmF1bHQiLCAiZGVjb2RpbmciLCAid2lkdGgiLCAiaGVpZ2h0IiwgImlkIiwgImNsYXNzTmFtZSIsICJMb2FkaW5nX2ljb25fZGVmYXVsdCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiY2hlY2tFbGVtZW50RXhpc3QiLCAic2VsZWN0b3JzIiwgInNlbGVjdG9yQXJyYXkiLCAiZ2VuZXJhdGVBcnJheSIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJzZWxlY3RvciIsICJ2YWx1ZSIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgImVyciIsICJlIiwgImYiLCAiYWRkUGFyc2VkV2lraXRleHQiLCAicGFyc2VkV2lraXRleHQiLCAiJGJvZHkiLCAiJCIsICIkcGFyc2VkV2lraXRleHQiLCAiaHRtbCIsICIkZWxlbWVudCIsICJmaW5kIiwgIm13IiwgImhvb2siLCAiZmlyZSIsICJhcHBlbmQiLCAibm90aWNlRmFpbEVsZW1lbnQiLCAibm90aWNlTG9hZGluZ0VsZW1lbnQiLCAicmVwbGFjZURPTSIsICJlbGVtZW50IiwgImFkZExvYWRpbmdOb3RpY2UiLCAibG9hZGluZ0ZhaWxOb3RpY2UiLCAicmVtb3ZlTG9hZGluZ05vdGljZSIsICJ2ZXJzaW9uIiwgIndpa2lUZXh0S2V5IiwgImx1YUFkZFRleHQiLCAiaW5wdXRTdHJpbmciLCAibmV3U3RyaW5nIiwgImlzRXNjYXBlIiwgImVzY2FwZVN0cmluZyIsICJKU09OIiwgInBhcnNlIiwgImNvbmNhdCIsICJzdHJpbmdpZnkiLCAicmVwbGFjZSIsICJsdWFHZXRTdHJpbmciLCAidGVzdFN0cmluZ0V4ZWNBcnJheSIsICJleGVjIiwgInRlc3RTdHJpbmciLCAic2xpY2UiLCAiTWF0aCIsICJtYXgiLCAibGVuZ3RoIiwgInRyaW1DaGVjayIsICJ0cmltIiwgImZpcnN0Q2hhciIsICJjaGFyQXQiLCAiYXQiLCAibHVhR2V0Q29udGVudFRleHQiLCAid2lraXRleHQiLCAiUmVnRXhwIiwgInN1YnN0cmluZyIsICJ0ZW1wVGV4dCIsICJsdWFHZXRPYmpUZXh0IiwgImx1YUdldENTU3dpa2l0ZXh0IiwgIl9yZWYiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwgImNzc1RleHQiLCAibHVhR2V0SlNPTndpa2l0ZXh0IiwgIl9yZWYyIiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdDIiLCAiSlNPTlRleHQiLCAianNvbkRhdGEiLCAiX2kiLCAiX09iamVjdCRlbnRyaWVzIiwgIk9iamVjdCIsICJlbnRyaWVzIiwgInRlc3QiLCAiX2kyIiwgIl9PYmplY3QkZW50cmllczIiLCAiayIsICJ2IiwgImx1YUdldEpTd2lraXRleHQiLCAiX3JlZjMiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0MyIsICJqc1RleHQiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImFwaSIsICJpbml0TXdBcGkiLCAid2dVc2VyTGFuZ3VhZ2UiLCAid2dVc2VyVmFyaWFudCIsICJjb25maWciLCAiZ2V0IiwgImdldExhbmd1YWdlIiwgImxhbmciLCAiaW5jbHVkZXMiLCAic2tpbiIsICJtd0FkZFdpa2lUZXh0IiwgIl9yZWY0IiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInBhZ2VOYW1lIiwgImlzUHJldmlldyIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInRpdGxlIiwgImNvbnRlbnRtb2RlbCIsICJ0ZXh0IiwgInByb3AiLCAidXNlbGFuZyIsICJ1c2Vza2luIiwgImRpc2FibGVlZGl0c2VjdGlvbiIsICJwcmV2aWV3IiwgIl9kYXRhJHBhcnNlIiwgImRhdGEiLCAiX3giLCAiX3gyIiwgIl94MyIsICJhcHBseSIsICJhcmd1bWVudHMiLCAibXdBZGRMdWFUZXh0IiwgIl9yZWY1IiwgImNhbGxCYWNrIiwgInRlbXBNb2R1bGVOYW1lIiwgIm1vZHVsZUNhbGwiLCAiX2RhdGEkcGFyc2UyIiwgInRlbXBsYXRlc2FuZGJveHRpdGxlIiwgInRlbXBsYXRlc2FuZGJveHRleHQiLCAidGVtcGxhdGVzYW5kYm94Y29udGVudG1vZGVsIiwgInRlbXBsYXRlc2FuZGJveGNvbnRlbnRmb3JtYXQiLCAic2VhcmNoIiwgIl94NCIsICJfeDUiLCAiX3g2IiwgIl94NyIsICJ3Z1BhZ2VDb250ZW50TW9kZWwiLCAibHVhQ2hlY2siLCAiY29udGVudE1vZGVsIiwgInRvTG93ZXJDYXNlIiwgInNraW4yIiwgIndnUmV2aXNpb25JZCIsICJtd0FwcGx5Tm90aWNlIiwgIl9yZWY2IiwgImN1cnJlbnRQYWdlTmFtZSIsICJwYWdlU3ViTmFtZSIsICJfZGF0YSRwYXJzZTMiLCAic21heGFnZSIsICJtYXhhZ2UiLCAiX3g4IiwgIl94OSIsICJtd0FwcGx5UmV2aXNpb24iLCAiX3JlZjciLCAiX2RhdGEkcGFyc2U0IiwgIm9sZGlkIiwgInBhZ2VDb250ZW50IiwgIl94MCIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAiYWxsTXdDb25maWciLCAiY2hlY2tNd0NvbmZpZyIsICJjb25maWdLZXkiLCAiZXhwZWN0Q29uZmlnIiwgIm13Q29uZmlnIiwgIlN0cmluZyIsICJjaGVja05lZWRQcmV2aWV3IiwgImJvZHkiLCAiaW5uZXJIVE1MIiwgIndnQ2Fub25pY2FsTmFtZXNwYWNlIiwgIndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIiwgIndnUGFnZU5hbWUiLCAibXdBZGRQcmV2aWV3IiwgIl9tdyR1dGlsJGdldFVybCRtYXRjaCIsICJfbXckdXRpbCRnZXRVcmwkbWF0Y2gyIiwgInBhdGhQYXRoIiwgImRlY29kZVVSSSIsICJ1dGlsIiwgImdldFVybCIsICJtYXRjaCIsICJfJGJvZHkkZmluZCR2YWwiLCAiaW5zZXJ0QWZ0ZXIiLCAidmFsIiwgIl8kYm9keSRmaW5kJHZhbDIiLCAidGV4dGFyZWFDb250ZW50IiwgImZ1bGxQYWdlTmFtZSIsICJ3Z1BhZ2VOYW1lMiIsICJ3aWtpdGV4dFByZXZpZXdUZXN0Y2FzZSIsICJfcmVmOCIsICJ0ZXN0Y2FzZUxpc3QiLCAicXVlcnlTZWxlY3RvckFsbCIsICJ0ZXN0Y2FzZURhdGFMaXN0IiwgImkiLCAiX2V4ZWMiLCAiX2NvZGVJZCR0b0xvd2VyQ2FzZSIsICJfY29kZUVsZW1lbnQkdGV4dENvbnQiLCAiX2NvZGVFbGVtZW50JHRleHRDb250MiIsICJjb2RlRWxlbWVudCIsICJjb2RlSWQiLCAic2V0QXR0cmlidXRlIiwgInRvU3RyaW5nIiwgImNvZGUiLCAidGV4dENvbnRlbnQiLCAicGFja2FnZVdpa2l0ZXh0IiwgIl9pMyIsICJfT2JqZWN0JHZhbHVlcyIsICJ2YWx1ZXMiLCAidGVzdGNhc2VJdGVtIiwgInByZXBlbmQiLCAiX2RhdGEkcGFyc2U1IiwgIiRwYXJzZWRFbGVtZW50IiwgIl9pNCIsICJfT2JqZWN0JGVudHJpZXMzIiwgIiRhZGRUYXJnZXQiLCAiX3gxIiwgImdldEJvZHkiLCAidGhlbiIsICJzcGVjaWFsV2lraXRleHQiXQp9Cg==
