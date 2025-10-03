/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Common.js}
 * @base {@link https://en.wikipedia.org/wiki/MediaWiki:Gadget-exlinks.js}
 * @base {@link https://meta.wikimedia.org/wiki/MediaWiki:Gadget-ShortLink.js}
 * @base {@link https://www.mediawiki.org/wiki/MediaWiki:Gadget-workinprogress.js}
 * @base {@link https://www.mediawiki.org/wiki/Snippets/Load_JS_and_CSS_by_URL}
 * @base {@link https://en.wikipedia.org/wiki/MediaWiki:Gadget-search-new-tab.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/SiteCommon_JS}
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

// dist/SiteCommon_JS/SiteCommon_JS.js
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
//! src/SiteCommon_JS/modules/core.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.JSX"), 1);
//! src/SiteCommon_JS/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  const {
    wgULS
  } = window;
  return {
    Note: (0, import_ext_gadget.localize)({
      en: "Note: ",
      "zh-hans": "注释：",
      "zh-hant": "注釋："
    }),
    NoPermError0: wgULS("因技术原因，您没有权限访问相关页面。若有疑问，请与有兽档案馆运营者联系。", "因技術原因，您沒有權限訪問相關頁面。若有疑問，請與有獸檔案館運營者聯系。"),
    NoPermError1: wgULS("您没有权限访问相关页面。若您是资深编者，请与有兽档案馆技术团队联系，以获取权限。", "您沒有權限訪問相關頁面。若您是資深編者，請與有獸檔案館技術團隊聯系，以獲取權限。"),
    NoPermError2: wgULS("您的网络环境存在风险，请登录后继续使用。若您没有有兽档案馆账号，请注册后登录。", "您的網路環境存在風險，請登入後繼續使用。若您沒有有獸檔案館賬號，請注冊後登錄。"),
    NoPermError3: wgULS("相关功能仅向注册用户开放，请登录后继续使用。若您没有有兽档案馆账号，请注册后登录。", "相關功能僅向注冊用戶開放，請登入後繼續使用。若您沒有有獸檔案館賬號，請注冊後登錄。"),
    NoPermError4: wgULS("您没有权限访问相关页面。若有疑问，请与有兽档案馆运营者联系。", "您沒有權限訪問相關頁面。若有疑問，請與有獸檔案館運營者聯系。")
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/SiteCommon_JS/modules/core.tsx
var import_ext_gadget3 = require("ext.gadget.Util");
var {
  wgAction,
  wgNamespaceNumber,
  wgPageName,
  wgScript,
  wgUserName
} = mw.config.get();
var loadWithURL = /* @__PURE__ */ (function() {
  var _ref = _asyncToGenerator(function* () {
    const URL_WITH_CSS = mw.util.getParamValue("withCSS");
    const URL_WITH_JS = mw.util.getParamValue("withJS");
    const URL_WITH_MODULE = mw.util.getParamValue("withModule");
    if (URL_WITH_CSS || URL_WITH_JS || URL_WITH_MODULE) {
      if (URL_WITH_CSS && /^MediaWiki:[^#%&<=>]*\.css$/.test(URL_WITH_CSS)) {
        mw.loader.load(mw.util.getUrl(URL_WITH_CSS, {
          action: "raw",
          ctype: "text/css",
          maxage: "3600",
          smaxage: "3600"
        }), "text/css");
      }
      if (URL_WITH_JS || URL_WITH_MODULE) {
        const require2 = yield mw.loader.using("ext.gadget.SiteCommon_JS");
        if (URL_WITH_JS && /^MediaWiki:[^#%&<=>]*\.js$/.test(URL_WITH_JS)) {
          mw.loader.load(mw.util.getUrl(URL_WITH_JS, {
            action: "raw",
            ctype: "text/javascript",
            maxage: "3600",
            smaxage: "3600"
          }));
        }
        if (URL_WITH_MODULE && /^(ext\.((?!(ext\.|[,|])).)*[,|]?)+$/.test(URL_WITH_MODULE)) {
          const modules = (0, import_ext_gadget3.uniqueArray)(URL_WITH_MODULE.split(/[,|]/));
          mw.loader.load(modules);
        }
      }
    }
    const URL_USE = mw.util.getParamValue("use");
    if (URL_USE) {
      const wgUserNameExcaped = mw.util.escapeRegExp(wgUserName !== null && wgUserName !== void 0 ? wgUserName : "");
      const REGEX_FILE = new RegExp("^(?:MediaWiki:".concat(wgUserNameExcaped ? "|User:".concat(wgUserNameExcaped, "/") : "", ")[^&<>=%#]*\\.(js|css)$"));
      const REGEX_EXT = /^ext\.[^,]+$/;
      const path = wgScript;
      const useFiles = URL_USE.split(/[,|]/);
      var _iterator2 = _createForOfIteratorHelper(useFiles), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          var _REGEX_FILE$exec;
          const useFile = _step2.value;
          const name = useFile.toString().trim();
          const what = (_REGEX_FILE$exec = REGEX_FILE.exec(name)) !== null && _REGEX_FILE$exec !== void 0 ? _REGEX_FILE$exec : ["", ""];
          switch (what[1]) {
            case "css":
              mw.loader.load("".concat(path, "?action=raw&ctype=text/css&title=").concat(encodeURIComponent(name)));
              break;
            case "js": {
              const require2 = yield mw.loader.using("ext.gadget.SiteCommon_JS");
              mw.loader.load("".concat(path, "?action=raw&ctype=text/javascript&title=").concat(encodeURIComponent(name)));
              break;
            }
            default:
              if (REGEX_EXT.test(name)) {
                const require2 = yield mw.loader.using("ext.gadget.SiteCommon_JS");
                mw.loader.load(name);
              }
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  });
  return function loadWithURL2() {
    return _ref.apply(this, arguments);
  };
})();
var highLightRev = ($body) => {
  const URL_HIGHLIGHT = mw.util.getParamValue("highlight");
  const URL_HILIGHT = mw.util.getParamValue("hilight");
  const highlight = URL_HIGHLIGHT !== null && URL_HIGHLIGHT !== void 0 ? URL_HIGHLIGHT : URL_HILIGHT;
  if (!highlight || wgAction !== "history") {
    return;
  }
  var _iterator3 = _createForOfIteratorHelper(highlight.split(",")), _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
      const version = _step3.value;
      $body.find("input[name=oldid][value=".concat(version, "]")).parent().addClass("not-patrolled");
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
};
var addTargetBlank = ($body) => {
  $body.find('a.external, a[rel="mw:ExtLink"]').filter((_index, element) => {
    const linkHref = $(element).attr("href");
    if (linkHref) {
      const hrefSplit = linkHref.split("/");
      if (hrefSplit.length < 3 || hrefSplit[2] === location.host) {
        return false;
      }
    }
    if (element.href.includes("".concat(location.protocol, "//").concat(location.hostname))) {
      element.target = "_blank";
      if (!element.rel.includes("noopener")) {
        element.rel += " noopener";
      }
      if (!element.rel.includes("noreferrer")) {
        element.rel += " noreferrer";
      }
    }
    return true;
  });
};
var removeTitleFromPermalink = ($body) => {
  var _$permaLinkFirstChild;
  const $permaLink = $body.find("#t-permalink");
  if (!$permaLink.length) {
    return;
  }
  const $permaLinkFirstChild = $permaLink.find(":first-child");
  const href = (_$permaLinkFirstChild = $permaLinkFirstChild.attr("href")) === null || _$permaLinkFirstChild === void 0 ? void 0 : _$permaLinkFirstChild.replace(/title=[^&]*&/, "");
  if (!href) {
    return;
  }
  $permaLinkFirstChild.attr("href", href);
};
var openSearchInNewTab = ($body) => {
  $body.find(["#search", "#searchbox", "#searchform", ".search-types", "#search-types"].join(",")).on("keydown keyup mousedown", (event) => {
    const {
      ctrlKey,
      metaKey,
      target
    } = event;
    $(target).attr("target", (ctrlKey !== null && ctrlKey !== void 0 ? ctrlKey : metaKey) ? "_blank" : "");
  });
};
var titleCleanUp = ($body) => {
  const URL_DIFF = mw.util.getParamValue("diff");
  if (URL_DIFF || wgAction !== "view" || ![6, 118].includes(wgNamespaceNumber)) {
    return;
  }
  const fullPageName = new mw.Title(wgPageName).getPrefixedText();
  const $firstHeading = $body.find(".firstHeading");
  const documentTitle = document.title;
  const pageTitle = $firstHeading.text();
  const replaceTitle = (title) => title.replace(pageTitle, fullPageName);
  document.title = replaceTitle(documentTitle);
  $firstHeading.text(replaceTitle(pageTitle));
};
var unihanPopup = /* @__PURE__ */ (function() {
  var _ref2 = _asyncToGenerator(function* ($body) {
    if (wgNamespaceNumber < 0) {
      return;
    }
    yield mw.loader.using("oojs-ui-core");
    var _iterator4 = _createForOfIteratorHelper($body.find("attr, .inline-unihan")), _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
        const element = _step4.value;
        const $element = $(element);
        const title = $element.attr("title");
        if (!title) {
          continue;
        }
        const popup = new OO.ui.PopupWidget({
          $content: $(/* @__PURE__ */ import_ext_gadget2.default.createElement("p", null, title)),
          label: getMessage("Note"),
          anchor: true,
          head: true,
          padded: true
        });
        $body.append(popup.$element);
        $element.on("click", () => {
          popup.toggle();
        });
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  });
  return function unihanPopup2(_x) {
    return _ref2.apply(this, arguments);
  };
})();
var fixLocationHash = () => {
  if (location.hash) {
    location.href = location.hash;
  }
};
var toggleLink = ($body) => {
  var _$toggler$parent$;
  const $toggler = $body.find(".mw-collapsible-toggle, .gadget-collapsible-toggler");
  if (!$toggler.length) {
    return;
  }
  if ((_$toggler$parent$ = $toggler.parent()[0]) !== null && _$toggler$parent$ !== void 0 && _$toggler$parent$.style.color) {
    $toggler.find("a").css("color", "inherit");
  }
};
//! src/SiteCommon_JS/modules/tippy.ts
var import_ext_gadget4 = require("ext.gadget.Tippy");
var getContent = (reference) => {
  var _reference$getAttribu;
  const label = reference.getAttribute("aria-label");
  const title = (_reference$getAttribu = reference.getAttribute("alt")) !== null && _reference$getAttribu !== void 0 ? _reference$getAttribu : reference.getAttribute("title");
  return (label === title ? label : title || label) || reference.textContent;
};
var onCreateCallback = (instance) => {
  const {
    reference
  } = instance;
  reference.setAttribute("aria-label", getContent(reference));
  reference.removeAttribute("title");
};
var onShowCallback = (instance) => {
  onCreateCallback(instance);
  instance.setContent(getContent(instance.reference));
};
var tippyForCitizenHeader = ($body) => {
  const {
    skin
  } = mw.config.get();
  if (skin !== "citizen") {
    return;
  }
  var _iterator5 = _createForOfIteratorHelper($body.find([".citizen-header .citizen-dropdown-summary", ".citizen-header .citizen-echo-notification-badge", ".citizen-header__logo a", ".page-actions>nav>ul>li a", ".page-actions__button"].join(","))), _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
      const element = _step5.value;
      const $element = $(element);
      let title = $element.attr("title");
      if (!title) {
        continue;
      }
      title = title.replace(/\s*?\[.+?]$/, "");
      $element.attr({
        "aria-label": title,
        title: ""
      });
      (0, import_ext_gadget4.tippy)($element.get(0), {
        arrow: true,
        content: title,
        placement: "bottom",
        onCreate: onCreateCallback,
        onHidden: onCreateCallback,
        onShow: onShowCallback
      });
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
};
var tippyForExtension = /* @__PURE__ */ (function() {
  var _ref3 = _asyncToGenerator(function* () {
    const {
      skin
    } = mw.config.get();
    if (skin === "vector-2022") {
      return;
    }
    yield mw.loader.using("ext.CollapsibleSidebar.js");
    (0, import_ext_gadget4.tippy)("#sidebarButton", {
      arrow: true,
      content: getContent,
      placement: "left",
      onCreate: onCreateCallback,
      onHidden: onCreateCallback,
      onShow: onShowCallback
    });
    if (skin === "vector") {
      yield mw.loader.using("ext.CollapsibleSidebar.vector");
      (0, import_ext_gadget4.tippy)("#sidebarCollapse", {
        arrow: true,
        content: getContent,
        placement: "right",
        onCreate: onCreateCallback,
        onHidden: onCreateCallback,
        onShow: onShowCallback
      });
    }
    yield mw.loader.using("ext.DarkMode");
    (0, import_ext_gadget4.tippy)("#darkmode-button", {
      arrow: true,
      content: getContent,
      placement: "left",
      onCreate: onCreateCallback,
      onHidden: onCreateCallback,
      onShow: onShowCallback
    });
  });
  return function tippyForExtension2() {
    return _ref3.apply(this, arguments);
  };
})();
//! src/SiteCommon_JS/modules/deprecatedFunctions.ts
var deprecatedFunctions = () => {
  /*!
   * maintenance: Some user scripts may be using the following deprecated functions.
   * These functions are no longer supported and should be updated.
   */
  mw.log.deprecate(window, "importScript", (title) => {
    return mw.loader.addScriptTag(mw.util.getUrl(title, {
      action: "raw",
      ctype: "text/javascript",
      maxage: "3600",
      smaxage: "3600"
    }));
  }, "Use mw.loader.addScriptTag() instead");
  mw.log.deprecate(window, "importStylesheet", (title) => {
    return mw.loader.addLinkTag(mw.util.getUrl(title, {
      action: "raw",
      ctype: "text/css",
      maxage: "3600",
      smaxage: "3600"
    }), "text/css");
  }, "Use mw.loader.addLinkTag() instead");
  mw.log.deprecate(window, "importScriptURI", (modules) => {
    return mw.loader.addScriptTag(mw.util.wikiUrlencode(modules));
  }, "Use mw.loader.addScriptTag() or mw.loader.getScript() instead");
  mw.log.deprecate(window, "importStylesheetURI", (modules) => {
    return mw.loader.addLinkTag(mw.util.wikiUrlencode(modules), "text/css");
  }, "Use mw.loader.addLinkTag() instead");
  mw.log.deprecate(
    window,
    // @ts-expect-error TS2345
    "importScriptCallback",
    (title, ready) => {
      void mw.loader.getScript(mw.util.getUrl(title, {
        action: "raw",
        ctype: "text/javascript",
        maxage: "3600",
        smaxage: "3600"
      })).then(ready);
    },
    "Use mw.loader.getScript() instead"
  );
  mw.log.deprecate(
    window,
    // @ts-expect-error TS2345
    "importScriptURICallback",
    (url, ready) => {
      void mw.loader.getScript(url).then(ready);
    },
    "Use mw.loader.getScript() instead"
  );
};
//! src/SiteCommon_JS/SiteCommon_JS.ts
var import_ext_gadget5 = require("ext.gadget.Util");
//! src/SiteCommon_JS/modules/resizeJQueryUI.ts
var resizeJQueryUI = ($body) => {
  $(window).on("resize", () => {
    const windowWidth = $(window).width();
    const $jqueryUIDialog = $body.find(".ui-dialog");
    if ($jqueryUIDialog) {
      $jqueryUIDialog.css("max-width", "calc(".concat(windowWidth, "px - 2em)"));
    }
  });
};
//! src/SiteCommon_JS/SiteCommon_JS.ts
(function siteCommon() {
  const configKey = "gadget-SiteCommon_JS__Initialized";
  const {
    skin
  } = mw.config.get();
  if (mw.config.get(configKey)) {
    return;
  }
  mw.config.set(configKey, true);
  void loadWithURL();
  fixLocationHash();
  void (0, import_ext_gadget5.getBody)().then(($body) => {
    highLightRev($body);
    addTargetBlank($body);
    removeTitleFromPermalink($body);
    openSearchInNewTab($body);
    titleCleanUp($body);
    void unihanPopup($body);
    toggleLink($body);
    resizeJQueryUI($body);
    if (skin === "citizen") {
      tippyForCitizenHeader($body);
    }
  });
  deprecatedFunctions();
  if (!["vector-2022", "citizen"].includes(skin)) {
    void tippyForExtension();
  }
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1NpdGVDb21tb25fSlMvbW9kdWxlcy9jb3JlLnRzeCIsICJzcmMvU2l0ZUNvbW1vbl9KUy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1NpdGVDb21tb25fSlMvbW9kdWxlcy90aXBweS50cyIsICJzcmMvU2l0ZUNvbW1vbl9KUy9tb2R1bGVzL2RlcHJlY2F0ZWRGdW5jdGlvbnMudHMiLCAic3JjL1NpdGVDb21tb25fSlMvU2l0ZUNvbW1vbl9KUy50cyIsICJzcmMvU2l0ZUNvbW1vbl9KUy9tb2R1bGVzL3Jlc2l6ZUpRdWVyeVVJLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHt1bmlxdWVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3Qge3dnQWN0aW9uLCB3Z05hbWVzcGFjZU51bWJlciwgd2dQYWdlTmFtZSwgd2dTY3JpcHQsIHdnVXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5jb25zdCBsb2FkV2l0aFVSTCA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgVVJMX1dJVEhfQ1NTOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd3aXRoQ1NTJyk7XG5cdGNvbnN0IFVSTF9XSVRIX0pTOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd3aXRoSlMnKTtcblx0Y29uc3QgVVJMX1dJVEhfTU9EVUxFOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd3aXRoTW9kdWxlJyk7XG5cdC8qKlxuXHQgKiAmd2l0aENTUz0gYW5kICZ3aXRoSlM9IFVSTCBwYXJhbWV0ZXJzXG5cdCAqIEFsbG93IHRvIHRyeSBjdXN0b20gc2NyaXB0cyBmcm9tIE1lZGlhV2lraSBzcGFjZVxuXHQgKiB3aXRob3V0IGVkaXRpbmcgcGVyc29uYWwgLmNzcyBvciAuanMgZmlsZXNcblx0ICovXG5cdGlmIChVUkxfV0lUSF9DU1MgfHwgVVJMX1dJVEhfSlMgfHwgVVJMX1dJVEhfTU9EVUxFKSB7XG5cdFx0aWYgKFVSTF9XSVRIX0NTUyAmJiAvXk1lZGlhV2lraTpbXiMlJjw9Pl0qXFwuY3NzJC8udGVzdChVUkxfV0lUSF9DU1MpKSB7XG5cdFx0XHRtdy5sb2FkZXIubG9hZChcblx0XHRcdFx0bXcudXRpbC5nZXRVcmwoVVJMX1dJVEhfQ1NTLCB7XG5cdFx0XHRcdFx0YWN0aW9uOiAncmF3Jyxcblx0XHRcdFx0XHRjdHlwZTogJ3RleHQvY3NzJyxcblx0XHRcdFx0XHRtYXhhZ2U6ICczNjAwJyxcblx0XHRcdFx0XHRzbWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHQndGV4dC9jc3MnXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRpZiAoVVJMX1dJVEhfSlMgfHwgVVJMX1dJVEhfTU9EVUxFKSB7XG5cdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTNjEzM1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuXHRcdFx0Y29uc3QgcmVxdWlyZSA9IGF3YWl0IG13LmxvYWRlci51c2luZygnZXh0LmdhZGdldC5TaXRlQ29tbW9uX0pTJyk7XG5cblx0XHRcdGlmIChVUkxfV0lUSF9KUyAmJiAvXk1lZGlhV2lraTpbXiMlJjw9Pl0qXFwuanMkLy50ZXN0KFVSTF9XSVRIX0pTKSkge1xuXHRcdFx0XHRtdy5sb2FkZXIubG9hZChcblx0XHRcdFx0XHRtdy51dGlsLmdldFVybChVUkxfV0lUSF9KUywge1xuXHRcdFx0XHRcdFx0YWN0aW9uOiAncmF3Jyxcblx0XHRcdFx0XHRcdGN0eXBlOiAndGV4dC9qYXZhc2NyaXB0Jyxcblx0XHRcdFx0XHRcdG1heGFnZTogJzM2MDAnLFxuXHRcdFx0XHRcdFx0c21heGFnZTogJzM2MDAnLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChVUkxfV0lUSF9NT0RVTEUgJiYgL14oZXh0XFwuKCg/IShleHRcXC58Wyx8XSkpLikqWyx8XT8pKyQvLnRlc3QoVVJMX1dJVEhfTU9EVUxFKSkge1xuXHRcdFx0XHRjb25zdCBtb2R1bGVzID0gdW5pcXVlQXJyYXkoVVJMX1dJVEhfTU9EVUxFLnNwbGl0KC9bLHxdLykpO1xuXHRcdFx0XHRtdy5sb2FkZXIubG9hZChtb2R1bGVzKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0LyoqXG5cdCAqIExvYWQgQ1NTIGFuZCBKUyBmaWxlcyB0ZW1wb3JhcmlseSB0aHJvdWdoIFVSTC5cblx0ICogJnVzZT1GaWxlMS5jc3N8RmlsZTIuY3NzfEZpbGUzLmpzXG5cdCAqL1xuXHRjb25zdCBVUkxfVVNFOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd1c2UnKTtcblx0aWYgKFVSTF9VU0UpIHtcblx0XHRjb25zdCB3Z1VzZXJOYW1lRXhjYXBlZDogc3RyaW5nID0gbXcudXRpbC5lc2NhcGVSZWdFeHAod2dVc2VyTmFtZSA/PyAnJyk7XG5cdFx0Y29uc3QgUkVHRVhfRklMRTogUmVnRXhwID0gbmV3IFJlZ0V4cChcblx0XHRcdGBeKD86TWVkaWFXaWtpOiR7d2dVc2VyTmFtZUV4Y2FwZWQgPyBgfFVzZXI6JHt3Z1VzZXJOYW1lRXhjYXBlZH0vYCA6ICcnfSlbXiY8Pj0lI10qXFxcXC4oanN8Y3NzKSRgXG5cdFx0KTtcblx0XHRjb25zdCBSRUdFWF9FWFQ6IFJlZ0V4cCA9IC9eZXh0XFwuW14sXSskLztcblx0XHRjb25zdCBwYXRoOiBzdHJpbmcgPSB3Z1NjcmlwdDtcblx0XHRjb25zdCB1c2VGaWxlcyA9IFVSTF9VU0Uuc3BsaXQoL1ssfF0vKTtcblx0XHRmb3IgKGNvbnN0IHVzZUZpbGUgb2YgdXNlRmlsZXMpIHtcblx0XHRcdGNvbnN0IG5hbWU6IHN0cmluZyA9IHVzZUZpbGUudG9TdHJpbmcoKS50cmltKCk7XG5cdFx0XHRjb25zdCB3aGF0OiBzdHJpbmdbXSA9IFJFR0VYX0ZJTEUuZXhlYyhuYW1lKSA/PyBbJycsICcnXTtcblx0XHRcdHN3aXRjaCAod2hhdFsxXSkge1xuXHRcdFx0XHRjYXNlICdjc3MnOlxuXHRcdFx0XHRcdG13LmxvYWRlci5sb2FkKGAke3BhdGh9P2FjdGlvbj1yYXcmY3R5cGU9dGV4dC9jc3MmdGl0bGU9JHtlbmNvZGVVUklDb21wb25lbnQobmFtZSl9YCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2pzJzoge1xuXHRcdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFM2MTMzXG5cdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuXHRcdFx0XHRcdGNvbnN0IHJlcXVpcmUgPSBhd2FpdCBtdy5sb2FkZXIudXNpbmcoJ2V4dC5nYWRnZXQuU2l0ZUNvbW1vbl9KUycpO1xuXHRcdFx0XHRcdG13LmxvYWRlci5sb2FkKGAke3BhdGh9P2FjdGlvbj1yYXcmY3R5cGU9dGV4dC9qYXZhc2NyaXB0JnRpdGxlPSR7ZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpfWApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0aWYgKFJFR0VYX0VYVC50ZXN0KG5hbWUpKSB7XG5cdFx0XHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTNjEzM1xuXHRcdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuXHRcdFx0XHRcdFx0Y29uc3QgcmVxdWlyZSA9IGF3YWl0IG13LmxvYWRlci51c2luZygnZXh0LmdhZGdldC5TaXRlQ29tbW9uX0pTJyk7XG5cdFx0XHRcdFx0XHRtdy5sb2FkZXIubG9hZChuYW1lKTtcblx0XHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG5jb25zdCBoaWdoTGlnaHRSZXYgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdC8qKlxuXHQgKiBBZGQgaGlnaGxpZ2h0IHRvIHJldmlzaW9ucyB3aGVuIHVzaW5nIGAmaGlsaWdodD1yZXZpZGAgb3IgYCZoaWdobGlnaHQ9cmV2aWRgXG5cdCAqL1xuXHRjb25zdCBVUkxfSElHSExJR0hUOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdoaWdobGlnaHQnKTtcblx0Y29uc3QgVVJMX0hJTElHSFQ6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2hpbGlnaHQnKTtcblx0Y29uc3QgaGlnaGxpZ2h0OiBzdHJpbmcgfCBudWxsID0gVVJMX0hJR0hMSUdIVCA/PyBVUkxfSElMSUdIVDtcblxuXHRpZiAoIWhpZ2hsaWdodCB8fCB3Z0FjdGlvbiAhPT0gJ2hpc3RvcnknKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Zm9yIChjb25zdCB2ZXJzaW9uIG9mIGhpZ2hsaWdodC5zcGxpdCgnLCcpKSB7XG5cdFx0JGJvZHkuZmluZChgaW5wdXRbbmFtZT1vbGRpZF1bdmFsdWU9JHt2ZXJzaW9ufV1gKS5wYXJlbnQoKS5hZGRDbGFzcygnbm90LXBhdHJvbGxlZCcpO1xuXHR9XG59O1xuXG5jb25zdCBhZGRUYXJnZXRCbGFuayA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0LyoqXG5cdCAqIEFkZCB0YXJnZXQ9XCJibGFua1wiIHRvIGV4dGVybmFsIGxpbmtzXG5cdCAqL1xuXHQkYm9keS5maW5kPEhUTUxBbmNob3JFbGVtZW50PignYS5leHRlcm5hbCwgYVtyZWw9XCJtdzpFeHRMaW5rXCJdJykuZmlsdGVyKChfaW5kZXgsIGVsZW1lbnQpOiBib29sZWFuID0+IHtcblx0XHRjb25zdCBsaW5rSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkID0gJChlbGVtZW50KS5hdHRyKCdocmVmJyk7XG5cdFx0aWYgKGxpbmtIcmVmKSB7XG5cdFx0XHRjb25zdCBocmVmU3BsaXQ6IHN0cmluZ1tdID0gbGlua0hyZWYuc3BsaXQoJy8nKTtcblx0XHRcdGlmIChocmVmU3BsaXQubGVuZ3RoIDwgMyB8fCBocmVmU3BsaXRbMl0gPT09IGxvY2F0aW9uLmhvc3QpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChlbGVtZW50LmhyZWYuaW5jbHVkZXMoYCR7bG9jYXRpb24ucHJvdG9jb2x9Ly8ke2xvY2F0aW9uLmhvc3RuYW1lfWApKSB7XG5cdFx0XHRlbGVtZW50LnRhcmdldCA9ICdfYmxhbmsnO1xuXHRcdFx0aWYgKCFlbGVtZW50LnJlbC5pbmNsdWRlcygnbm9vcGVuZXInKSkge1xuXHRcdFx0XHRlbGVtZW50LnJlbCArPSAnIG5vb3BlbmVyJztcblx0XHRcdH1cblx0XHRcdGlmICghZWxlbWVudC5yZWwuaW5jbHVkZXMoJ25vcmVmZXJyZXInKSkge1xuXHRcdFx0XHRlbGVtZW50LnJlbCArPSAnIG5vcmVmZXJyZXInO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9KTtcbn07XG5cbmNvbnN0IHJlbW92ZVRpdGxlRnJvbVBlcm1hbGluayA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0LyoqXG5cdCAqIFJlbW92ZSB0aXRsZT0qIGZyb20gcGVybWFsaW5rXG5cdCAqL1xuXHRjb25zdCAkcGVybWFMaW5rOiBKUXVlcnkgPSAkYm9keS5maW5kKCcjdC1wZXJtYWxpbmsnKTtcblx0aWYgKCEkcGVybWFMaW5rLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICRwZXJtYUxpbmtGaXJzdENoaWxkOiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+ID0gJHBlcm1hTGluay5maW5kPEhUTUxBbmNob3JFbGVtZW50PignOmZpcnN0LWNoaWxkJyk7XG5cblx0Y29uc3QgaHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkID0gJHBlcm1hTGlua0ZpcnN0Q2hpbGQuYXR0cignaHJlZicpPy5yZXBsYWNlKC90aXRsZT1bXiZdKiYvLCAnJyk7XG5cdGlmICghaHJlZikge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdCRwZXJtYUxpbmtGaXJzdENoaWxkLmF0dHIoJ2hyZWYnLCBocmVmKTtcbn07XG5cbmNvbnN0IG9wZW5TZWFyY2hJbk5ld1RhYiA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0LyoqXG5cdCAqIE9wZW4gc2VhcmNoIHJlc3VsdHMgaW4gYSBuZXcgdGFiIG9yIHdpbmRvd1xuXHQgKiB3aGVuIGhvbGRpbmcgZG93biB0aGUgQ3RybCBrZXkgKGJ5IFRpbWVzaGlmdGVyKVxuXHQgKi9cblx0JGJvZHlcblx0XHQuZmluZChbJyNzZWFyY2gnLCAnI3NlYXJjaGJveCcsICcjc2VhcmNoZm9ybScsICcuc2VhcmNoLXR5cGVzJywgJyNzZWFyY2gtdHlwZXMnXS5qb2luKCcsJykpXG5cdFx0Lm9uKCdrZXlkb3duIGtleXVwIG1vdXNlZG93bicsIChldmVudDogSlF1ZXJ5LlRyaWdnZXJlZEV2ZW50PEhUTUxFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRcdFx0Y29uc3Qge2N0cmxLZXksIG1ldGFLZXksIHRhcmdldH0gPSBldmVudDtcblx0XHRcdCQodGFyZ2V0KS5hdHRyKCd0YXJnZXQnLCAoY3RybEtleSA/PyBtZXRhS2V5KSA/ICdfYmxhbmsnIDogJycpO1xuXHRcdH0pO1xufTtcblxuY29uc3QgdGl0bGVDbGVhblVwID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvKipcblx0ICogQ2xlYW51cCB0aXRsZSBmb3IgYWxsIHBhZ2VzXG5cdCAqL1xuXHRjb25zdCBVUkxfRElGRjogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnZGlmZicpO1xuXHRpZiAoVVJMX0RJRkYgfHwgd2dBY3Rpb24gIT09ICd2aWV3JyB8fCAhWzYsIDExOF0uaW5jbHVkZXMod2dOYW1lc3BhY2VOdW1iZXIpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgZnVsbFBhZ2VOYW1lOiBzdHJpbmcgPSBuZXcgbXcuVGl0bGUod2dQYWdlTmFtZSkuZ2V0UHJlZml4ZWRUZXh0KCk7XG5cdGNvbnN0ICRmaXJzdEhlYWRpbmc6IEpRdWVyeSA9ICRib2R5LmZpbmQoJy5maXJzdEhlYWRpbmcnKTtcblx0Y29uc3QgZG9jdW1lbnRUaXRsZTogc3RyaW5nID0gZG9jdW1lbnQudGl0bGU7XG5cdGNvbnN0IHBhZ2VUaXRsZTogc3RyaW5nID0gJGZpcnN0SGVhZGluZy50ZXh0KCk7XG5cblx0Y29uc3QgcmVwbGFjZVRpdGxlID0gKHRpdGxlOiBzdHJpbmcpOiBzdHJpbmcgPT4gdGl0bGUucmVwbGFjZShwYWdlVGl0bGUsIGZ1bGxQYWdlTmFtZSk7XG5cblx0ZG9jdW1lbnQudGl0bGUgPSByZXBsYWNlVGl0bGUoZG9jdW1lbnRUaXRsZSk7XG5cdCRmaXJzdEhlYWRpbmcudGV4dChyZXBsYWNlVGl0bGUocGFnZVRpdGxlKSk7XG59O1xuXG5jb25zdCB1bmloYW5Qb3B1cCA9IGFzeW5jICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0LyoqXG5cdCAqIERpc3BsYXkgdGl0bGU9KC4qKSBvZiA8c3BhbiBjbGFzcz1cImlubGluZS11bmloYW5cIj4gYWZ0ZXIgdGhlbS5cblx0ICogKGJldGEgdGVzdClcblx0ICovXG5cdC8vIERvIG5vdCBkaXNwbGF5IG9uIFNwZWNpYWwgUGFnZXNcblx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyIDwgMCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGF3YWl0IG13LmxvYWRlci51c2luZygnb29qcy11aS1jb3JlJyk7XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRib2R5LmZpbmQoJ2F0dHIsIC5pbmxpbmUtdW5paGFuJykpIHtcblx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJChlbGVtZW50KTtcblxuXHRcdGNvbnN0IHRpdGxlOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkZWxlbWVudC5hdHRyKCd0aXRsZScpO1xuXHRcdGlmICghdGl0bGUpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHBvcHVwOiBPTy51aS5Qb3B1cFdpZGdldCA9IG5ldyBPTy51aS5Qb3B1cFdpZGdldCh7XG5cdFx0XHQkY29udGVudDogJCg8cD57dGl0bGV9PC9wPikgYXMgSlF1ZXJ5LFxuXHRcdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ05vdGUnKSxcblx0XHRcdGFuY2hvcjogdHJ1ZSxcblx0XHRcdGhlYWQ6IHRydWUsXG5cdFx0XHRwYWRkZWQ6IHRydWUsXG5cdFx0fSk7XG5cblx0XHQkYm9keS5hcHBlbmQocG9wdXAuJGVsZW1lbnQpO1xuXG5cdFx0JGVsZW1lbnQub24oJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRcdFx0cG9wdXAudG9nZ2xlKCk7XG5cdFx0fSk7XG5cdH1cbn07XG5cbmNvbnN0IGZpeExvY2F0aW9uSGFzaCA9ICgpOiB2b2lkID0+IHtcblx0Lyog5L+u5q2j5oqY5Y+g5ZCO5a6a5L2N5Y+Y5YyWICovXG5cdGlmIChsb2NhdGlvbi5oYXNoKSB7XG5cdFx0bG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uLmhhc2g7XG5cdH1cbn07XG5cbmNvbnN0IHRvZ2dsZUxpbmsgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdC8qIOiwg+aVtOaKmOWPoOaMiemSrueahOminOiJsiAqL1xuXHRjb25zdCAkdG9nZ2xlcjogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnLm13LWNvbGxhcHNpYmxlLXRvZ2dsZSwgLmdhZGdldC1jb2xsYXBzaWJsZS10b2dnbGVyJyk7XG5cdGlmICghJHRvZ2dsZXIubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKCR0b2dnbGVyLnBhcmVudCgpWzBdPy5zdHlsZS5jb2xvcikge1xuXHRcdCR0b2dnbGVyLmZpbmQoJ2EnKS5jc3MoJ2NvbG9yJywgJ2luaGVyaXQnKTtcblx0fVxufTtcblxuZXhwb3J0IHtcblx0bG9hZFdpdGhVUkwsXG5cdGhpZ2hMaWdodFJldixcblx0YWRkVGFyZ2V0QmxhbmssXG5cdHJlbW92ZVRpdGxlRnJvbVBlcm1hbGluayxcblx0b3BlblNlYXJjaEluTmV3VGFiLFxuXHR0aXRsZUNsZWFuVXAsXG5cdHVuaWhhblBvcHVwLFxuXHRmaXhMb2NhdGlvbkhhc2gsXG5cdHRvZ2dsZUxpbmssXG59O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0Y29uc3Qge3dnVUxTfSA9IHdpbmRvdztcblx0cmV0dXJuIHtcblx0XHROb3RlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ05vdGU6ICcsXG5cdFx0XHQnemgtaGFucyc6ICfms6jph4rvvJonLFxuXHRcdFx0J3poLWhhbnQnOiAn5rOo6YeL77yaJyxcblx0XHR9KSxcblx0XHROb1Blcm1FcnJvcjA6IHdnVUxTKFxuXHRcdFx0J+WboOaKgOacr+WOn+WboO+8jOaCqOayoeacieadg+mZkOiuv+mXruebuOWFs+mhtemdouOAguiLpeacieeWkemXru+8jOivt+S4juacieWFveaho+ahiOmmhui/kOiQpeiAheiBlOezu+OAgicsXG5cdFx0XHQn5Zug5oqA6KGT5Y6f5Zug77yM5oKo5rKS5pyJ5qyK6ZmQ6Kiq5ZWP55u46Zec6aCB6Z2i44CC6Iul5pyJ55aR5ZWP77yM6KuL6IiH5pyJ54245qqU5qGI6aSo6YGL54ef6ICF6IGv57O744CCJ1xuXHRcdCksXG5cdFx0Tm9QZXJtRXJyb3IxOiB3Z1VMUyhcblx0XHRcdCfmgqjmsqHmnInmnYPpmZDorr/pl67nm7jlhbPpobXpnaLjgILoi6XmgqjmmK/otYTmt7HnvJbogIXvvIzor7fkuI7mnInlhb3moaPmoYjppobmioDmnK/lm6LpmJ/ogZTns7vvvIzku6Xojrflj5bmnYPpmZDjgIInLFxuXHRcdFx0J+aCqOaykuacieasiumZkOioquWVj+ebuOmXnOmggemdouOAguiLpeaCqOaYr+izh+a3see3qOiAhe+8jOiri+iIh+acieeNuOaqlOahiOmkqOaKgOihk+WcmOmaiuiBr+ezu++8jOS7peeNsuWPluasiumZkOOAgidcblx0XHQpLFxuXHRcdE5vUGVybUVycm9yMjogd2dVTFMoXG5cdFx0XHQn5oKo55qE572R57uc546v5aKD5a2Y5Zyo6aOO6Zmp77yM6K+355m75b2V5ZCO57un57ut5L2/55So44CC6Iul5oKo5rKh5pyJ5pyJ5YW95qGj5qGI6aaG6LSm5Y+377yM6K+35rOo5YaM5ZCO55m75b2V44CCJyxcblx0XHRcdCfmgqjnmoTntrLot6/nkrDlooPlrZjlnKjpoqjpmqrvvIzoq4vnmbvlhaXlvoznubznuozkvb/nlKjjgILoi6XmgqjmspLmnInmnInnjbjmqpTmoYjppKjos6zomZ/vvIzoq4vms6jlhorlvoznmbvpjITjgIInXG5cdFx0KSxcblx0XHROb1Blcm1FcnJvcjM6IHdnVUxTKFxuXHRcdFx0J+ebuOWFs+WKn+iDveS7heWQkeazqOWGjOeUqOaIt+W8gOaUvu+8jOivt+eZu+W9leWQjue7p+e7reS9v+eUqOOAguiLpeaCqOayoeacieacieWFveaho+ahiOmmhui0puWPt++8jOivt+azqOWGjOWQjueZu+W9leOAgicsXG5cdFx0XHQn55u46Zec5Yqf6IO95YOF5ZCR5rOo5YaK55So5oi26ZaL5pS+77yM6KuL55m75YWl5b6M57m857qM5L2/55So44CC6Iul5oKo5rKS5pyJ5pyJ54245qqU5qGI6aSo6LOs6Jmf77yM6KuL5rOo5YaK5b6M55m76YyE44CCJ1xuXHRcdCksXG5cdFx0Tm9QZXJtRXJyb3I0OiB3Z1VMUyhcblx0XHRcdCfmgqjmsqHmnInmnYPpmZDorr/pl67nm7jlhbPpobXpnaLjgILoi6XmnInnlpHpl67vvIzor7fkuI7mnInlhb3moaPmoYjppobov5DokKXogIXogZTns7vjgIInLFxuXHRcdFx0J+aCqOaykuacieasiumZkOioquWVj+ebuOmXnOmggemdouOAguiLpeacieeWkeWVj++8jOiri+iIh+acieeNuOaqlOahiOmkqOmBi+eHn+iAheiBr+ezu+OAgidcblx0XHQpLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge3RpcHB5fSBmcm9tICdleHQuZ2FkZ2V0LlRpcHB5JztcblxuY29uc3QgZ2V0Q29udGVudCA9IChyZWZlcmVuY2U6IEVsZW1lbnQpOiBzdHJpbmcgPT4ge1xuXHRjb25zdCBsYWJlbDogc3RyaW5nIHwgbnVsbCA9IHJlZmVyZW5jZS5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKTtcblx0Y29uc3QgdGl0bGU6IHN0cmluZyB8IG51bGwgPSByZWZlcmVuY2UuZ2V0QXR0cmlidXRlKCdhbHQnKSA/PyByZWZlcmVuY2UuZ2V0QXR0cmlidXRlKCd0aXRsZScpO1xuXG5cdHJldHVybiAobGFiZWwgPT09IHRpdGxlID8gbGFiZWwgOiB0aXRsZSB8fCBsYWJlbCkgfHwgcmVmZXJlbmNlLnRleHRDb250ZW50O1xufTtcblxuY29uc3Qgb25DcmVhdGVDYWxsYmFjayA9IChpbnN0YW5jZTogUmV0dXJuVHlwZTx0eXBlb2YgdGlwcHk+WzBdKTogdm9pZCA9PiB7XG5cdGNvbnN0IHtyZWZlcmVuY2V9ID0gaW5zdGFuY2U7XG5cdHJlZmVyZW5jZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBnZXRDb250ZW50KHJlZmVyZW5jZSkpO1xuXHRyZWZlcmVuY2UucmVtb3ZlQXR0cmlidXRlKCd0aXRsZScpO1xufTtcblxuY29uc3Qgb25TaG93Q2FsbGJhY2sgPSAoaW5zdGFuY2U6IFJldHVyblR5cGU8dHlwZW9mIHRpcHB5PlswXSk6IHZvaWQgPT4ge1xuXHRvbkNyZWF0ZUNhbGxiYWNrKGluc3RhbmNlKTtcblx0aW5zdGFuY2Uuc2V0Q29udGVudChnZXRDb250ZW50KGluc3RhbmNlLnJlZmVyZW5jZSkpO1xufTtcblxuY29uc3QgdGlwcHlGb3JDaXRpemVuSGVhZGVyID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCB7c2tpbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmIChza2luICE9PSAnY2l0aXplbicpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGJvZHkuZmluZChcblx0XHRbXG5cdFx0XHQnLmNpdGl6ZW4taGVhZGVyIC5jaXRpemVuLWRyb3Bkb3duLXN1bW1hcnknLFxuXHRcdFx0Jy5jaXRpemVuLWhlYWRlciAuY2l0aXplbi1lY2hvLW5vdGlmaWNhdGlvbi1iYWRnZScsXG5cdFx0XHQnLmNpdGl6ZW4taGVhZGVyX19sb2dvIGEnLFxuXHRcdFx0Jy5wYWdlLWFjdGlvbnM+bmF2PnVsPmxpIGEnLFxuXHRcdFx0Jy5wYWdlLWFjdGlvbnNfX2J1dHRvbicsXG5cdFx0XS5qb2luKCcsJylcblx0KSkge1xuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXHRcdGxldCB0aXRsZTogc3RyaW5nIHwgdW5kZWZpbmVkID0gJGVsZW1lbnQuYXR0cigndGl0bGUnKTtcblx0XHRpZiAoIXRpdGxlKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHR0aXRsZSA9IHRpdGxlLnJlcGxhY2UoL1xccyo/XFxbLis/XSQvLCAnJyk7XG5cblx0XHQkZWxlbWVudC5hdHRyKHtcblx0XHRcdCdhcmlhLWxhYmVsJzogdGl0bGUsXG5cdFx0XHR0aXRsZTogJycsXG5cdFx0fSk7XG5cdFx0dGlwcHkoJGVsZW1lbnQuZ2V0KDApIGFzIEhUTUxFbGVtZW50LCB7XG5cdFx0XHRhcnJvdzogdHJ1ZSxcblx0XHRcdGNvbnRlbnQ6IHRpdGxlLFxuXHRcdFx0cGxhY2VtZW50OiAnYm90dG9tJyxcblx0XHRcdG9uQ3JlYXRlOiBvbkNyZWF0ZUNhbGxiYWNrLFxuXHRcdFx0b25IaWRkZW46IG9uQ3JlYXRlQ2FsbGJhY2ssXG5cdFx0XHRvblNob3c6IG9uU2hvd0NhbGxiYWNrLFxuXHRcdH0pO1xuXHR9XG59O1xuXG5jb25zdCB0aXBweUZvckV4dGVuc2lvbiA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAoc2tpbiA9PT0gJ3ZlY3Rvci0yMDIyJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGF3YWl0IG13LmxvYWRlci51c2luZygnZXh0LkNvbGxhcHNpYmxlU2lkZWJhci5qcycpO1xuXHR0aXBweSgnI3NpZGViYXJCdXR0b24nLCB7XG5cdFx0YXJyb3c6IHRydWUsXG5cdFx0Y29udGVudDogZ2V0Q29udGVudCxcblx0XHRwbGFjZW1lbnQ6ICdsZWZ0Jyxcblx0XHRvbkNyZWF0ZTogb25DcmVhdGVDYWxsYmFjayxcblx0XHRvbkhpZGRlbjogb25DcmVhdGVDYWxsYmFjayxcblx0XHRvblNob3c6IG9uU2hvd0NhbGxiYWNrLFxuXHR9KTtcblxuXHRpZiAoc2tpbiA9PT0gJ3ZlY3RvcicpIHtcblx0XHRhd2FpdCBtdy5sb2FkZXIudXNpbmcoJ2V4dC5Db2xsYXBzaWJsZVNpZGViYXIudmVjdG9yJyk7XG5cdFx0dGlwcHkoJyNzaWRlYmFyQ29sbGFwc2UnLCB7XG5cdFx0XHRhcnJvdzogdHJ1ZSxcblx0XHRcdGNvbnRlbnQ6IGdldENvbnRlbnQsXG5cdFx0XHRwbGFjZW1lbnQ6ICdyaWdodCcsXG5cdFx0XHRvbkNyZWF0ZTogb25DcmVhdGVDYWxsYmFjayxcblx0XHRcdG9uSGlkZGVuOiBvbkNyZWF0ZUNhbGxiYWNrLFxuXHRcdFx0b25TaG93OiBvblNob3dDYWxsYmFjayxcblx0XHR9KTtcblx0fVxuXG5cdGF3YWl0IG13LmxvYWRlci51c2luZygnZXh0LkRhcmtNb2RlJyk7XG5cdHRpcHB5KCcjZGFya21vZGUtYnV0dG9uJywge1xuXHRcdGFycm93OiB0cnVlLFxuXHRcdGNvbnRlbnQ6IGdldENvbnRlbnQsXG5cdFx0cGxhY2VtZW50OiAnbGVmdCcsXG5cdFx0b25DcmVhdGU6IG9uQ3JlYXRlQ2FsbGJhY2ssXG5cdFx0b25IaWRkZW46IG9uQ3JlYXRlQ2FsbGJhY2ssXG5cdFx0b25TaG93OiBvblNob3dDYWxsYmFjayxcblx0fSk7XG59O1xuXG5leHBvcnQge3RpcHB5Rm9yQ2l0aXplbkhlYWRlciwgdGlwcHlGb3JFeHRlbnNpb259O1xuIiwgImNvbnN0IGRlcHJlY2F0ZWRGdW5jdGlvbnMgPSAoKTogdm9pZCA9PiB7XG5cdC8qIVxuXHQgKiBtYWludGVuYW5jZTogU29tZSB1c2VyIHNjcmlwdHMgbWF5IGJlIHVzaW5nIHRoZSBmb2xsb3dpbmcgZGVwcmVjYXRlZCBmdW5jdGlvbnMuXG5cdCAqIFRoZXNlIGZ1bmN0aW9ucyBhcmUgbm8gbG9uZ2VyIHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIHVwZGF0ZWQuXG5cdCAqL1xuXHRtdy5sb2cuZGVwcmVjYXRlKFxuXHRcdHdpbmRvdyxcblx0XHQnaW1wb3J0U2NyaXB0Jyxcblx0XHQodGl0bGU6IHN0cmluZyk6IEhUTUxTY3JpcHRFbGVtZW50ID0+IHtcblx0XHRcdHJldHVybiBtdy5sb2FkZXIuYWRkU2NyaXB0VGFnKFxuXHRcdFx0XHRtdy51dGlsLmdldFVybCh0aXRsZSwge1xuXHRcdFx0XHRcdGFjdGlvbjogJ3JhdycsXG5cdFx0XHRcdFx0Y3R5cGU6ICd0ZXh0L2phdmFzY3JpcHQnLFxuXHRcdFx0XHRcdG1heGFnZTogJzM2MDAnLFxuXHRcdFx0XHRcdHNtYXhhZ2U6ICczNjAwJyxcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0fSxcblx0XHQnVXNlIG13LmxvYWRlci5hZGRTY3JpcHRUYWcoKSBpbnN0ZWFkJ1xuXHQpO1xuXG5cdG13LmxvZy5kZXByZWNhdGUoXG5cdFx0d2luZG93LFxuXHRcdCdpbXBvcnRTdHlsZXNoZWV0Jyxcblx0XHQodGl0bGU6IHN0cmluZyk6IEhUTUxMaW5rRWxlbWVudCA9PiB7XG5cdFx0XHRyZXR1cm4gbXcubG9hZGVyLmFkZExpbmtUYWcoXG5cdFx0XHRcdG13LnV0aWwuZ2V0VXJsKHRpdGxlLCB7XG5cdFx0XHRcdFx0YWN0aW9uOiAncmF3Jyxcblx0XHRcdFx0XHRjdHlwZTogJ3RleHQvY3NzJyxcblx0XHRcdFx0XHRtYXhhZ2U6ICczNjAwJyxcblx0XHRcdFx0XHRzbWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHQndGV4dC9jc3MnXG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0J1VzZSBtdy5sb2FkZXIuYWRkTGlua1RhZygpIGluc3RlYWQnXG5cdCk7XG5cblx0bXcubG9nLmRlcHJlY2F0ZShcblx0XHR3aW5kb3csXG5cdFx0J2ltcG9ydFNjcmlwdFVSSScsXG5cdFx0KG1vZHVsZXM6IHN0cmluZyk6IEhUTUxTY3JpcHRFbGVtZW50ID0+IHtcblx0XHRcdHJldHVybiBtdy5sb2FkZXIuYWRkU2NyaXB0VGFnKG13LnV0aWwud2lraVVybGVuY29kZShtb2R1bGVzKSk7XG5cdFx0fSxcblx0XHQnVXNlIG13LmxvYWRlci5hZGRTY3JpcHRUYWcoKSBvciBtdy5sb2FkZXIuZ2V0U2NyaXB0KCkgaW5zdGVhZCdcblx0KTtcblxuXHRtdy5sb2cuZGVwcmVjYXRlKFxuXHRcdHdpbmRvdyxcblx0XHQnaW1wb3J0U3R5bGVzaGVldFVSSScsXG5cdFx0KG1vZHVsZXM6IHN0cmluZyk6IEhUTUxMaW5rRWxlbWVudCA9PiB7XG5cdFx0XHRyZXR1cm4gbXcubG9hZGVyLmFkZExpbmtUYWcobXcudXRpbC53aWtpVXJsZW5jb2RlKG1vZHVsZXMpLCAndGV4dC9jc3MnKTtcblx0XHR9LFxuXHRcdCdVc2UgbXcubG9hZGVyLmFkZExpbmtUYWcoKSBpbnN0ZWFkJ1xuXHQpO1xuXG5cdG13LmxvZy5kZXByZWNhdGUoXG5cdFx0d2luZG93LFxuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzQ1XG5cdFx0J2ltcG9ydFNjcmlwdENhbGxiYWNrJyxcblx0XHQodGl0bGU6IHN0cmluZywgcmVhZHk6IG5ldmVyKTogdm9pZCA9PiB7XG5cdFx0XHR2b2lkIG13LmxvYWRlclxuXHRcdFx0XHQuZ2V0U2NyaXB0KFxuXHRcdFx0XHRcdG13LnV0aWwuZ2V0VXJsKHRpdGxlLCB7XG5cdFx0XHRcdFx0XHRhY3Rpb246ICdyYXcnLFxuXHRcdFx0XHRcdFx0Y3R5cGU6ICd0ZXh0L2phdmFzY3JpcHQnLFxuXHRcdFx0XHRcdFx0bWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdFx0XHRzbWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KVxuXHRcdFx0XHQudGhlbihyZWFkeSk7XG5cdFx0fSxcblx0XHQnVXNlIG13LmxvYWRlci5nZXRTY3JpcHQoKSBpbnN0ZWFkJ1xuXHQpO1xuXG5cdG13LmxvZy5kZXByZWNhdGUoXG5cdFx0d2luZG93LFxuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzQ1XG5cdFx0J2ltcG9ydFNjcmlwdFVSSUNhbGxiYWNrJyxcblx0XHQodXJsOiBzdHJpbmcsIHJlYWR5OiBuZXZlcik6IHZvaWQgPT4ge1xuXHRcdFx0dm9pZCBtdy5sb2FkZXIuZ2V0U2NyaXB0KHVybCkudGhlbihyZWFkeSk7XG5cdFx0fSxcblx0XHQnVXNlIG13LmxvYWRlci5nZXRTY3JpcHQoKSBpbnN0ZWFkJ1xuXHQpO1xuXHQvKipcblx0ICogbWFpbnRlbmFuY2U6IFNvbWUgdXNlciBzY3JpcHRzIG1heSBiZSB1c2luZyB0aGUgZm9sbG93aW5nIGRlcHJlY2F0ZWQgZnVuY3Rpb25zLlxuXHQgKiBUaGVzZSBmdW5jdGlvbnMgYXJlIGtlcHQgZm9yIGNvbXBhYmlsaXR5LlxuXHQgKi9cblx0Ly8gbXcubG9nLmRlcHJlY2F0ZSh3aW5kb3csICdKU0NvbmZpZycsIHt9LCAnVXNlIHt9IGluc3RlYWQnKTtcblx0LyoqXG5cdCAqIHdnVSpTIGZ1bmN0aW9ucyBoYXZlIGJlZW4gc3BsaXQgdG8gYSBzZXBlcmF0ZSBnYWRnZXQgKGV4dC5nYWRnZXQuaTE4bikuXG5cdCAqL1xufTtcblxuZXhwb3J0IHtkZXByZWNhdGVkRnVuY3Rpb25zfTtcbiIsICJpbXBvcnQge1xuXHRhZGRUYXJnZXRCbGFuayxcblx0Zml4TG9jYXRpb25IYXNoLFxuXHRoaWdoTGlnaHRSZXYsXG5cdGxvYWRXaXRoVVJMLFxuXHRvcGVuU2VhcmNoSW5OZXdUYWIsXG5cdHJlbW92ZVRpdGxlRnJvbVBlcm1hbGluayxcblx0dGl0bGVDbGVhblVwLFxuXHR0b2dnbGVMaW5rLFxuXHR1bmloYW5Qb3B1cCxcbn0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuaW1wb3J0IHt0aXBweUZvckNpdGl6ZW5IZWFkZXIsIHRpcHB5Rm9yRXh0ZW5zaW9ufSBmcm9tICcuL21vZHVsZXMvdGlwcHknO1xuaW1wb3J0IHtkZXByZWNhdGVkRnVuY3Rpb25zfSBmcm9tICcuL21vZHVsZXMvZGVwcmVjYXRlZEZ1bmN0aW9ucyc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3Jlc2l6ZUpRdWVyeVVJfSBmcm9tICcuL21vZHVsZXMvcmVzaXplSlF1ZXJ5VUknO1xuXG4oZnVuY3Rpb24gc2l0ZUNvbW1vbigpOiB2b2lkIHtcblx0Y29uc3QgY29uZmlnS2V5OiBzdHJpbmcgPSAnZ2FkZ2V0LVNpdGVDb21tb25fSlNfX0luaXRpYWxpemVkJztcblx0Y29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoY29uZmlnS2V5KSkge1xuXHRcdHJldHVybjtcblx0fVxuXHQvLyBTZXQgZ3VhcmRcblx0bXcuY29uZmlnLnNldChjb25maWdLZXksIHRydWUpO1xuXG5cdC8vIENvcmUgbW9kdWxlc1xuXHR2b2lkIGxvYWRXaXRoVVJMKCk7XG5cdGZpeExvY2F0aW9uSGFzaCgpO1xuXG5cdHZvaWQgZ2V0Qm9keSgpLnRoZW4oKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRcdC8vIENvcmUgbW9kdWxlcyAobmVlZCAkLnJlYWR5KVxuXHRcdGhpZ2hMaWdodFJldigkYm9keSk7XG5cdFx0YWRkVGFyZ2V0QmxhbmsoJGJvZHkpO1xuXHRcdHJlbW92ZVRpdGxlRnJvbVBlcm1hbGluaygkYm9keSk7XG5cdFx0b3BlblNlYXJjaEluTmV3VGFiKCRib2R5KTtcblx0XHR0aXRsZUNsZWFuVXAoJGJvZHkpO1xuXHRcdHZvaWQgdW5paGFuUG9wdXAoJGJvZHkpO1xuXHRcdHRvZ2dsZUxpbmsoJGJvZHkpO1xuXHRcdHJlc2l6ZUpRdWVyeVVJKCRib2R5KTtcblxuXHRcdC8vIFRpcHB5LXJlbGF0ZWQgY29kZXMgKG5lZWQgJC5yZWFkeSlcblx0XHRpZiAoc2tpbiA9PT0gJ2NpdGl6ZW4nKSB7XG5cdFx0XHR0aXBweUZvckNpdGl6ZW5IZWFkZXIoJGJvZHkpO1xuXHRcdH1cblx0fSk7XG5cblx0Ly8gRGVwcmVjYXRlZCBmdW5jdGlvbnNcblx0ZGVwcmVjYXRlZEZ1bmN0aW9ucygpO1xuXG5cdC8vIFRpcHB5LXJlbGF0ZWQgY29kZXNcblx0aWYgKCFbJ3ZlY3Rvci0yMDIyJywgJ2NpdGl6ZW4nXS5pbmNsdWRlcyhza2luKSkge1xuXHRcdHZvaWQgdGlwcHlGb3JFeHRlbnNpb24oKTtcblx0fVxufSkoKTtcbiIsICJjb25zdCByZXNpemVKUXVlcnlVSSA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0JCh3aW5kb3cpLm9uKCdyZXNpemUnLCAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3Qgd2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcblx0XHRjb25zdCAkanF1ZXJ5VUlEaWFsb2cgPSAkYm9keS5maW5kKCcudWktZGlhbG9nJyk7XG5cdFx0aWYgKCRqcXVlcnlVSURpYWxvZykge1xuXHRcdFx0JGpxdWVyeVVJRGlhbG9nLmNzcygnbWF4LXdpZHRoJywgYGNhbGMoJHt3aW5kb3dXaWR0aH1weCAtIDJlbSlgKTtcblx0XHR9XG5cdH0pO1xufTtcblxuZXhwb3J0IHtyZXNpemVKUXVlcnlVSX07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFrQkMsUUFBQUMsUUFBQSxnQkFBQSxHQUFBLENBQUE7O0FDQWxCLElBQUFDLG9CQUF1QkQsUUFBQSxpQkFBQTtBQUV2QixJQUFNRSxrQkFBa0JBLE1BQU07QUFDN0IsUUFBTTtJQUFDQztFQUFLLElBQUlDO0FBQ2hCLFNBQU87SUFDTkMsT0FBQSxHQUFNSixrQkFBQUssVUFBUztNQUNkQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLGNBQWNMLE1BQ2Isd0NBQ0Esc0NBQ0Q7SUFDQU0sY0FBY04sTUFDYiw0Q0FDQSwwQ0FDRDtJQUNBTyxjQUFjUCxNQUNiLDJDQUNBLHlDQUNEO0lBQ0FRLGNBQWNSLE1BQ2IsNkNBQ0EsMkNBQ0Q7SUFDQVMsY0FBY1QsTUFDYixrQ0FDQSxnQ0FDRDtFQUNEO0FBQ0Q7QUFFQSxJQUFNVSxlQUFlWCxnQkFBZ0I7QUFFckMsSUFBTVksYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QURuQ0EsSUFBQUMscUJBQTBCaEIsUUFBQSxpQkFBQTtBQUUxQixJQUFNO0VBQUNpQjtFQUFVQztFQUFtQkM7RUFBWUM7RUFBVUM7QUFBVSxJQUFJQyxHQUFHQyxPQUFPQyxJQUFJO0FBRXRGLElBQU1DLGNBQUEsNEJBQUE7QUFBQSxNQUFBQyxPQUFBQyxrQkFBYyxhQUEyQjtBQUM5QyxVQUFNQyxlQUE4Qk4sR0FBR08sS0FBS0MsY0FBYyxTQUFT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QUV2RixNQUFNLEVBQUUyTCxNQUFNO0FBQ3BDLFVBQU1DLGtCQUFrQnBILE1BQU1PLEtBQUssWUFBWTtBQUMvQyxRQUFJNkcsaUJBQWlCO0FBQ3BCQSxzQkFBZ0J4QyxJQUFJLGFBQUEsUUFBQXJHLE9BQXFCMkksYUFBVyxXQUFBLENBQVc7SUFDaEU7RUFDRCxDQUFDO0FBQ0Y7O0NEUUMsU0FBU0csYUFBbUI7QUFDNUIsUUFBTUMsWUFBb0I7QUFDMUIsUUFBTTtJQUFDNUI7RUFBSSxJQUFJaEosR0FBR0MsT0FBT0MsSUFBSTtBQUc3QixNQUFJRixHQUFHQyxPQUFPQyxJQUFJMEssU0FBUyxHQUFHO0FBQzdCO0VBQ0Q7QUFFQTVLLEtBQUdDLE9BQU80SyxJQUFJRCxXQUFXLElBQUk7QUFHN0IsT0FBS3pLLFlBQVk7QUFDakJ3SCxrQkFBZ0I7QUFFaEIsUUFBQSxHQUFLMkMsbUJBQUFRLFNBQVEsRUFBRVYsS0FBTTlHLFdBQXlDO0FBRTdERCxpQkFBYUMsS0FBSztBQUNsQlUsbUJBQWVWLEtBQUs7QUFDcEIyQiw2QkFBeUIzQixLQUFLO0FBQzlCZ0MsdUJBQW1CaEMsS0FBSztBQUN4QnNDLGlCQUFhdEMsS0FBSztBQUNsQixTQUFLa0QsWUFBWWxELEtBQUs7QUFDdEJ1RSxlQUFXdkUsS0FBSztBQUNoQmlILG1CQUFlakgsS0FBSztBQUdwQixRQUFJMEYsU0FBUyxXQUFXO0FBQ3ZCRCw0QkFBc0J6RixLQUFLO0lBQzVCO0VBQ0QsQ0FBQztBQUdEc0csc0JBQW9CO0FBR3BCLE1BQUksQ0FBQyxDQUFDLGVBQWUsU0FBUyxFQUFFaEYsU0FBU29FLElBQUksR0FBRztBQUMvQyxTQUFLVSxrQkFBa0I7RUFDeEI7QUFDRCxHQUFHOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDIiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJ3Z1VMUyIsICJ3aW5kb3ciLCAiTm90ZSIsICJsb2NhbGl6ZSIsICJlbiIsICJOb1Blcm1FcnJvcjAiLCAiTm9QZXJtRXJyb3IxIiwgIk5vUGVybUVycm9yMiIsICJOb1Blcm1FcnJvcjMiLCAiTm9QZXJtRXJyb3I0IiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAid2dBY3Rpb24iLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAid2dQYWdlTmFtZSIsICJ3Z1NjcmlwdCIsICJ3Z1VzZXJOYW1lIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAibG9hZFdpdGhVUkwiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJVUkxfV0lUSF9DU1MiLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgIlVSTF9XSVRIX0pTIiwgIlVSTF9XSVRIX01PRFVMRSIsICJ0ZXN0IiwgImxvYWRlciIsICJsb2FkIiwgImdldFVybCIsICJhY3Rpb24iLCAiY3R5cGUiLCAibWF4YWdlIiwgInNtYXhhZ2UiLCAicmVxdWlyZTIiLCAidXNpbmciLCAibW9kdWxlcyIsICJ1bmlxdWVBcnJheSIsICJzcGxpdCIsICJVUkxfVVNFIiwgIndnVXNlck5hbWVFeGNhcGVkIiwgImVzY2FwZVJlZ0V4cCIsICJSRUdFWF9GSUxFIiwgIlJlZ0V4cCIsICJjb25jYXQiLCAiUkVHRVhfRVhUIiwgInBhdGgiLCAidXNlRmlsZXMiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiX1JFR0VYX0ZJTEUkZXhlYyIsICJ1c2VGaWxlIiwgInZhbHVlIiwgIm5hbWUiLCAidG9TdHJpbmciLCAidHJpbSIsICJ3aGF0IiwgImV4ZWMiLCAiZW5jb2RlVVJJQ29tcG9uZW50IiwgImVyciIsICJlIiwgImYiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImhpZ2hMaWdodFJldiIsICIkYm9keSIsICJVUkxfSElHSExJR0hUIiwgIlVSTF9ISUxJR0hUIiwgImhpZ2hsaWdodCIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJ2ZXJzaW9uIiwgImZpbmQiLCAicGFyZW50IiwgImFkZENsYXNzIiwgImFkZFRhcmdldEJsYW5rIiwgImZpbHRlciIsICJfaW5kZXgiLCAiZWxlbWVudCIsICJsaW5rSHJlZiIsICIkIiwgImF0dHIiLCAiaHJlZlNwbGl0IiwgImxlbmd0aCIsICJsb2NhdGlvbiIsICJob3N0IiwgImhyZWYiLCAiaW5jbHVkZXMiLCAicHJvdG9jb2wiLCAiaG9zdG5hbWUiLCAidGFyZ2V0IiwgInJlbCIsICJyZW1vdmVUaXRsZUZyb21QZXJtYWxpbmsiLCAiXyRwZXJtYUxpbmtGaXJzdENoaWxkIiwgIiRwZXJtYUxpbmsiLCAiJHBlcm1hTGlua0ZpcnN0Q2hpbGQiLCAicmVwbGFjZSIsICJvcGVuU2VhcmNoSW5OZXdUYWIiLCAiam9pbiIsICJvbiIsICJldmVudCIsICJjdHJsS2V5IiwgIm1ldGFLZXkiLCAidGl0bGVDbGVhblVwIiwgIlVSTF9ESUZGIiwgImZ1bGxQYWdlTmFtZSIsICJUaXRsZSIsICJnZXRQcmVmaXhlZFRleHQiLCAiJGZpcnN0SGVhZGluZyIsICJkb2N1bWVudFRpdGxlIiwgImRvY3VtZW50IiwgInRpdGxlIiwgInBhZ2VUaXRsZSIsICJ0ZXh0IiwgInJlcGxhY2VUaXRsZSIsICJ1bmloYW5Qb3B1cCIsICJfcmVmMiIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICIkZWxlbWVudCIsICJwb3B1cCIsICJPTyIsICJ1aSIsICJQb3B1cFdpZGdldCIsICIkY29udGVudCIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAibGFiZWwiLCAiYW5jaG9yIiwgImhlYWQiLCAicGFkZGVkIiwgImFwcGVuZCIsICJ0b2dnbGUiLCAiX3giLCAiZml4TG9jYXRpb25IYXNoIiwgImhhc2giLCAidG9nZ2xlTGluayIsICJfJHRvZ2dsZXIkcGFyZW50JCIsICIkdG9nZ2xlciIsICJzdHlsZSIsICJjb2xvciIsICJjc3MiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImdldENvbnRlbnQiLCAicmVmZXJlbmNlIiwgIl9yZWZlcmVuY2UkZ2V0QXR0cmlidSIsICJnZXRBdHRyaWJ1dGUiLCAidGV4dENvbnRlbnQiLCAib25DcmVhdGVDYWxsYmFjayIsICJpbnN0YW5jZSIsICJzZXRBdHRyaWJ1dGUiLCAicmVtb3ZlQXR0cmlidXRlIiwgIm9uU2hvd0NhbGxiYWNrIiwgInNldENvbnRlbnQiLCAidGlwcHlGb3JDaXRpemVuSGVhZGVyIiwgInNraW4iLCAiX2l0ZXJhdG9yNSIsICJfc3RlcDUiLCAidGlwcHkiLCAiYXJyb3ciLCAiY29udGVudCIsICJwbGFjZW1lbnQiLCAib25DcmVhdGUiLCAib25IaWRkZW4iLCAib25TaG93IiwgInRpcHB5Rm9yRXh0ZW5zaW9uIiwgIl9yZWYzIiwgImRlcHJlY2F0ZWRGdW5jdGlvbnMiLCAibG9nIiwgImRlcHJlY2F0ZSIsICJhZGRTY3JpcHRUYWciLCAiYWRkTGlua1RhZyIsICJ3aWtpVXJsZW5jb2RlIiwgInJlYWR5IiwgImdldFNjcmlwdCIsICJ0aGVuIiwgInVybCIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAicmVzaXplSlF1ZXJ5VUkiLCAid2luZG93V2lkdGgiLCAid2lkdGgiLCAiJGpxdWVyeVVJRGlhbG9nIiwgInNpdGVDb21tb24iLCAiY29uZmlnS2V5IiwgInNldCIsICJnZXRCb2R5Il0KfQo=
