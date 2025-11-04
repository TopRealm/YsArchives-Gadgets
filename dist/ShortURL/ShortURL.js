/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/ShortURL}
 * @author 安忆 <i@anyi.in>; WaitSpring <me@waitspring.com>
 * @license GPL-3.0-or-later {@link https://youshou.wiki/wiki/H:GPLV3}
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

// dist/ShortURL/ShortURL.js
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
//! src/ShortURL/modules/util/checkRevisionPage.ts
var checkRevisionPage = ($content) => {
  return ($content.find("#contentSub #mw-revision-nav").length || $content.find("main#content>.pre-content #mw-revision-nav").length) > 0;
};
//! src/ShortURL/modules/util/getShortDomains.ts
var getShortDomains = () => {
  const {
    wgWikiID
  } = mw.config.get();
  let domains2 = [];
  switch (wgWikiID) {
    case "zhysy":
      domains2 = ["ysymh.cc", "youshou.wiki"];
      break;
  }
  return domains2;
};
//! src/ShortURL/modules/addLink.tsx
var import_ext_gadget2 = require("ext.gadget.Clipboard");
var import_ext_gadget3 = __toESM(require("ext.gadget.JSX"), 1);
var import_ext_gadget4 = require("ext.gadget.Util");
//! src/ShortURL/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "Network error": (0, import_ext_gadget.localize)({
      en: "Network error",
      ja: "ネットワークエラー",
      "zh-hans": "网络异常",
      "zh-hant": "網路異常"
    }),
    "Page URL": (0, import_ext_gadget.localize)({
      en: "Permanent URL",
      "zh-hans": "页面链接",
      "zh-hant": "頁面網址"
    }),
    "Permanent URL": (0, import_ext_gadget.localize)({
      en: "Permanent URL",
      "zh-hans": "永久链接",
      "zh-hant": "永久網址"
    }),
    "Share URL for the page": (0, import_ext_gadget.localize)({
      en: "Share URL for the page",
      "zh-hans": "分享本页链接",
      "zh-hant": "分享本頁網址"
    }),
    "Short URL": (0, import_ext_gadget.localize)({
      en: "Short URL",
      "zh-hans": "短链接",
      "zh-hant": "短網址"
    }),
    "Show URL": (0, import_ext_gadget.localize)({
      en: "Show URL",
      "zh-hans": "显示该页链接",
      "zh-hant": "顯示該頁網址"
    }),
    "URL copied to clipboard": (0, import_ext_gadget.localize)({
      en: "The URL has been copied to clipboard:",
      "zh-hans": "已复制本页链接：",
      "zh-hant": "已復製本頁網址："
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/ShortURL/modules/addLink.tsx
var import_ext_gadget5 = require("ext.gadget.Tippy");
var {
  skin,
  wgUserName
} = mw.config.get();
var domains = getShortDomains();
var clipboardInstance;
var headerLinkEventListener = {
  remove: () => {
  }
};
var portletLinkEventListener = {
  remove: () => {
  }
};
var addLink = (link, permaLink) => {
  var _clipboardInstance;
  let portletLink = document.querySelector("#t-shortlink");
  if (!portletLink) {
    const portletId = document.querySelector("#p-cactions") ? "p-cactions" : "p-tb";
    portletLink = mw.util.addPortletLink(portletId, "#", getMessage("Share URL for the page"), "t-shortlink", getMessage("Show URL"));
  }
  if (portletLink) {
    var _portletLink$firstEle;
    const portletLinkClickListener = (event) => {
      event.preventDefault();
      const $element = $("<div>");
      $element.append(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-argument
        new mw.widgets.CopyTextLayout({
          label: getMessage("Page URL"),
          title: getMessage("Page URL"),
          align: "top",
          copyText: location.href
        }).$element
      );
      $element.append(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-explicit-any
        new mw.widgets.CopyTextLayout({
          label: getMessage("Permanent URL"),
          title: getMessage("Permanent URL"),
          align: "top",
          copyText: "https://".concat(location.host).concat(permaLink)
        }).$element
      );
      if (wgUserName) {
        var _iterator2 = _createForOfIteratorHelper(domains.entries()), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            const [i, domain] = _step2.value;
            $element.append(
              // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-argument
              new mw.widgets.CopyTextLayout({
                label: "".concat(getMessage("Short URL")).concat(i + 1),
                title: "".concat(getMessage("Short URL")).concat(i + 1),
                align: "top",
                copyText: "https://".concat(domain).concat(link)
              }).$element
            );
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      void OO.ui.alert($element, {
        size: "medium",
        title: $(/* @__PURE__ */ import_ext_gadget3.default.createElement("b", null, getMessage("Share URL for the page")))
      });
    };
    portletLinkEventListener.remove();
    portletLinkEventListener = (0, import_ext_gadget4.addEventListenerWithRemover)({
      target: (_portletLink$firstEle = portletLink.firstElementChild) !== null && _portletLink$firstEle !== void 0 ? _portletLink$firstEle : portletLink,
      type: "click",
      listener: portletLinkClickListener
    });
    const isCitizen = skin === "citizen";
    if (isCitizen && !$(portletLink).find("#mw-ui-icon-wikimedia-shortlink").length) {
      $(portletLink).find("a").prepend(/* @__PURE__ */ import_ext_gadget3.default.createElement("span", {
        id: "mw-ui-icon-wikimedia-shortlink",
        className: ["citizen-ui-icon", "mw-ui-icon-link", "mw-ui-icon-wikimedia-link"]
      }));
    }
  }
  let headerLink = document.querySelector("#mw-indicator-shortURL a");
  if (!headerLink) {
    headerLink = /* @__PURE__ */ import_ext_gadget3.default.createElement("a", {
      "aria-label": wgUserName ? getMessage("Short URL") : getMessage("Share URL for the page"),
      href: "#"
    }, /* @__PURE__ */ import_ext_gadget3.default.createElement("span", {
      className: "gadget-short-link__icon"
    }, wgUserName ? getMessage("Short URL") : getMessage("Share URL for the page")));
    (0, import_ext_gadget5.tippy)(headerLink, {
      arrow: true,
      content: wgUserName ? getMessage("Short URL") : getMessage("Share URL for the page"),
      placement: "bottom"
    });
    const $headerElement = $(/* @__PURE__ */ import_ext_gadget3.default.createElement("div", {
      className: "mw-indicator",
      id: "mw-indicator-shortURL"
    }, headerLink));
    $headerElement.prependTo(".mw-indicators");
  }
  const fullLink = wgUserName ? "https://".concat(domains[0]).concat(link) : "https://".concat(location.host).concat(permaLink);
  const $notifyElement = $(/* @__PURE__ */ import_ext_gadget3.default.createElement("span", null, getMessage("URL copied to clipboard"), /* @__PURE__ */ import_ext_gadget3.default.createElement("br", null), /* @__PURE__ */ import_ext_gadget3.default.createElement("a", {
    href: "#",
    onClick: (event) => {
      event.preventDefault();
      event.stopPropagation();
    }
  }, fullLink)));
  const headerLinkClickListener = (event) => {
    event.preventDefault();
    void mw.notify($notifyElement, {
      tag: "shortURL",
      type: "info"
    });
  };
  headerLinkEventListener.remove();
  headerLinkEventListener = (0, import_ext_gadget4.addEventListenerWithRemover)({
    target: headerLink,
    type: "click",
    listener: headerLinkClickListener
  });
  (_clipboardInstance = clipboardInstance) === null || _clipboardInstance === void 0 || _clipboardInstance.destroy();
  clipboardInstance = new import_ext_gadget2.Clipboard(headerLink, {
    text: () => fullLink
  });
};
//! src/ShortURL/modules/buildLink.ts
var buildLink = (oldId, diffId) => {
  let link = "/d";
  let permaLink = "/wiki/Special:Diff";
  if (oldId) {
    link += "/".concat(oldId);
    permaLink += "/".concat(oldId);
  }
  link += "/".concat(diffId);
  permaLink += "/".concat(diffId);
  addLink(link, permaLink);
};
//! src/ShortURL/options.json
var version = "2.0";
//! src/ShortURL/modules/api.ts
var import_ext_gadget6 = require("ext.gadget.Util");
var api = (0, import_ext_gadget6.initMwApi)("ShortURL/".concat(version));
//! src/ShortURL/modules/util/queryApi.ts
var import_ext_gadget7 = require("ext.gadget.Toastify");
var parameters = {
  action: "compare",
  format: "json",
  formatversion: "2",
  prop: "ids",
  torelative: "prev",
  smaxage: 600,
  maxage: 600
};
var queryApi = /* @__PURE__ */ (function() {
  var _ref = _asyncToGenerator(function* (diffId) {
    try {
      return yield api.get({
        ...parameters,
        fromrev: diffId
      });
    } catch (error) {
      console.error("[ShortURL] Ajax error:", error);
      (0, import_ext_gadget7.toastify)({
        text: getMessage("Network error"),
        close: true,
        duration: -1
      }, "error");
      return {};
    }
  });
  return function queryApi2(_x) {
    return _ref.apply(this, arguments);
  };
})();
//! src/ShortURL/modules/compareWithRemoteDiffId.ts
var compareWithRemoteDiffId = /* @__PURE__ */ (function() {
  var _ref2 = _asyncToGenerator(function* (diffId) {
    var _response$compare;
    const response = yield queryApi(diffId);
    if (diffId === mw.config.get("wgDiffNewId") && ((_response$compare = response["compare"]) === null || _response$compare === void 0 ? void 0 : _response$compare.fromrevid) === mw.config.get("wgDiffOldId")) {
      buildLink(0, diffId);
    }
  });
  return function compareWithRemoteDiffId2(_x2) {
    return _ref2.apply(this, arguments);
  };
})();
//! src/ShortURL/modules/processId.ts
var processId = (isRevisionPage, {
  articleId,
  diffId,
  oldId,
  revisionId
}) => {
  if (diffId) {
    buildLink(oldId, diffId);
    if (oldId) {
      void compareWithRemoteDiffId(diffId);
    }
  } else if (revisionId && isRevisionPage) {
    addLink("/p/".concat(revisionId), "/wiki/Special:Permalink/".concat(revisionId));
  } else if (articleId) {
    addLink("/c/".concat(articleId), "/index.php?curid=".concat(articleId));
  }
};
//! src/ShortURL/ShortURL.ts
(function shortURL() {
  const {
    wgAction,
    wgArticleId,
    wgNamespaceNumber
  } = mw.config.get();
  const domains2 = getShortDomains();
  if (!domains2.length || wgNamespaceNumber < 0) {
    return;
  }
  if (wgAction === "view" && wgArticleId) {
    mw.hook("wikipage.content").add(($content) => {
      if ($content.attr("id") !== "mw-content-text") {
        return;
      }
      const isRevisionPage = checkRevisionPage($content);
      processId(isRevisionPage, {
        articleId: mw.config.get("wgArticleId"),
        diffId: mw.config.get("wgDiffNewId"),
        oldId: mw.config.get("wgDiffOldId"),
        revisionId: mw.config.get("wgRevisionId")
      });
    });
  }
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Nob3J0VVJML21vZHVsZXMvdXRpbC9jaGVja1JldmlzaW9uUGFnZS50cyIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy91dGlsL2dldFNob3J0RG9tYWlucy50cyIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9hZGRMaW5rLnRzeCIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9TaG9ydFVSTC9tb2R1bGVzL2J1aWxkTGluay50cyIsICJzcmMvU2hvcnRVUkwvb3B0aW9ucy5qc29uIiwgInNyYy9TaG9ydFVSTC9tb2R1bGVzL2FwaS50cyIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy91dGlsL3F1ZXJ5QXBpLnRzIiwgInNyYy9TaG9ydFVSTC9tb2R1bGVzL2NvbXBhcmVXaXRoUmVtb3RlRGlmZklkLnRzIiwgInNyYy9TaG9ydFVSTC9tb2R1bGVzL3Byb2Nlc3NJZC50cyIsICJzcmMvU2hvcnRVUkwvU2hvcnRVUkwudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IGNoZWNrUmV2aXNpb25QYWdlID0gKCRjb250ZW50OiBKUXVlcnkpOiBib29sZWFuID0+IHtcblx0cmV0dXJuIChcblx0XHQoJGNvbnRlbnQuZmluZCgnI2NvbnRlbnRTdWIgI213LXJldmlzaW9uLW5hdicpLmxlbmd0aCB8fFxuXHRcdFx0JGNvbnRlbnQuZmluZCgnbWFpbiNjb250ZW50Pi5wcmUtY29udGVudCAjbXctcmV2aXNpb24tbmF2JykubGVuZ3RoKSA+IDBcblx0KTtcbn07XG5cbmV4cG9ydCB7Y2hlY2tSZXZpc2lvblBhZ2V9O1xuIiwgImNvbnN0IGdldFNob3J0RG9tYWlucyA9ICgpOiBzdHJpbmdbXSA9PiB7XG5cdGNvbnN0IHt3Z1dpa2lJRH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGxldCBkb21haW5zOiBzdHJpbmdbXSA9IFtdO1xuXG5cdHN3aXRjaCAod2dXaWtpSUQpIHtcblx0XHRjYXNlICd3aWtpLXlzeSc6XG5cdFx0XHRkb21haW5zID0gWyd5c3ltaC5jYycsICd5b3VzaG91Lndpa2knXTtcblx0XHRcdGJyZWFrO1xuXHR9XG5cblx0cmV0dXJuIGRvbWFpbnM7XG59O1xuXG5leHBvcnQge2dldFNob3J0RG9tYWluc307XG4iLCAiaW1wb3J0IHtDbGlwYm9hcmR9IGZyb20gJ2V4dC5nYWRnZXQuQ2xpcGJvYXJkJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5pbXBvcnQge2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcn0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7Z2V0U2hvcnREb21haW5zfSBmcm9tICcuL3V0aWwvZ2V0U2hvcnREb21haW5zJztcbmltcG9ydCB7dGlwcHl9IGZyb20gJ2V4dC5nYWRnZXQuVGlwcHknO1xuXG5jb25zdCB7c2tpbiwgd2dVc2VyTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5jb25zdCBkb21haW5zID0gZ2V0U2hvcnREb21haW5zKCk7XG5cbmxldCBjbGlwYm9hcmRJbnN0YW5jZTogQ2xpcGJvYXJkSlMgfCB1bmRlZmluZWQ7XG5sZXQgaGVhZGVyTGlua0V2ZW50TGlzdGVuZXI6IFJldHVyblR5cGU8dHlwZW9mIGFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcj4gPSB7XG5cdHJlbW92ZTogKCk6IHZvaWQgPT4ge30sXG59O1xubGV0IHBvcnRsZXRMaW5rRXZlbnRMaXN0ZW5lcjogUmV0dXJuVHlwZTx0eXBlb2YgYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyPiA9IHtcblx0cmVtb3ZlOiAoKTogdm9pZCA9PiB7fSxcbn07XG5cbmNvbnN0IGFkZExpbmsgPSAobGluazogc3RyaW5nLCBwZXJtYUxpbms6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRsZXQgcG9ydGxldExpbms6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Qtc2hvcnRsaW5rJyk7XG5cdGlmICghcG9ydGxldExpbmspIHtcblx0XHRjb25zdCBwb3J0bGV0SWQ6ICdwLWNhY3Rpb25zJyB8ICdwLXRiJyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwLWNhY3Rpb25zJykgPyAncC1jYWN0aW9ucycgOiAncC10Yic7XG5cdFx0cG9ydGxldExpbmsgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKFxuXHRcdFx0cG9ydGxldElkLFxuXHRcdFx0JyMnLFxuXHRcdFx0Z2V0TWVzc2FnZSgnU2hhcmUgVVJMIGZvciB0aGUgcGFnZScpLFxuXHRcdFx0J3Qtc2hvcnRsaW5rJyxcblx0XHRcdGdldE1lc3NhZ2UoJ1Nob3cgVVJMJylcblx0XHQpO1xuXHR9XG5cblx0aWYgKHBvcnRsZXRMaW5rKSB7XG5cdFx0Y29uc3QgcG9ydGxldExpbmtDbGlja0xpc3RlbmVyID0gKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJCgnPGRpdj4nKTtcblxuXHRcdFx0JGVsZW1lbnQuYXBwZW5kKFxuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1jYWxsLCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55LCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFyZ3VtZW50XG5cdFx0XHRcdG5ldyAobXcgYXMgYW55KS53aWRnZXRzLkNvcHlUZXh0TGF5b3V0KHtcblx0XHRcdFx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnUGFnZSBVUkwnKSxcblx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgnUGFnZSBVUkwnKSxcblx0XHRcdFx0XHRhbGlnbjogJ3RvcCcsXG5cdFx0XHRcdFx0Y29weVRleHQ6IGxvY2F0aW9uLmhyZWYsXG5cdFx0XHRcdH0pLiRlbGVtZW50XG5cdFx0XHQpO1xuXG5cdFx0XHQkZWxlbWVudC5hcHBlbmQoXG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFyZ3VtZW50LCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWNhbGwsIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcblx0XHRcdFx0bmV3IChtdyBhcyBhbnkpLndpZGdldHMuQ29weVRleHRMYXlvdXQoe1xuXHRcdFx0XHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdQZXJtYW5lbnQgVVJMJyksXG5cdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ1Blcm1hbmVudCBVUkwnKSxcblx0XHRcdFx0XHRhbGlnbjogJ3RvcCcsXG5cdFx0XHRcdFx0Y29weVRleHQ6IGBodHRwczovLyR7bG9jYXRpb24uaG9zdH0ke3Blcm1hTGlua31gLFxuXHRcdFx0XHR9KS4kZWxlbWVudFxuXHRcdFx0KTtcblxuXHRcdFx0aWYgKHdnVXNlck5hbWUpIHtcblx0XHRcdFx0Zm9yIChjb25zdCBbaSwgZG9tYWluXSBvZiBkb21haW5zLmVudHJpZXMoKSkge1xuXHRcdFx0XHRcdCRlbGVtZW50LmFwcGVuZChcblx0XHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWNhbGwsIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnksIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXJndW1lbnRcblx0XHRcdFx0XHRcdG5ldyAobXcgYXMgYW55KS53aWRnZXRzLkNvcHlUZXh0TGF5b3V0KHtcblx0XHRcdFx0XHRcdFx0bGFiZWw6IGAke2dldE1lc3NhZ2UoJ1Nob3J0IFVSTCcpfSR7aSArIDF9YCxcblx0XHRcdFx0XHRcdFx0dGl0bGU6IGAke2dldE1lc3NhZ2UoJ1Nob3J0IFVSTCcpfSR7aSArIDF9YCxcblx0XHRcdFx0XHRcdFx0YWxpZ246ICd0b3AnLFxuXHRcdFx0XHRcdFx0XHRjb3B5VGV4dDogYGh0dHBzOi8vJHtkb21haW59JHtsaW5rfWAsXG5cdFx0XHRcdFx0XHR9KS4kZWxlbWVudFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dm9pZCBPTy51aS5hbGVydCgkZWxlbWVudCwge1xuXHRcdFx0XHRzaXplOiAnbWVkaXVtJyxcblx0XHRcdFx0dGl0bGU6ICQoKDxiPntnZXRNZXNzYWdlKCdTaGFyZSBVUkwgZm9yIHRoZSBwYWdlJyl9PC9iPikgYXMgSFRNTEVsZW1lbnQpLFxuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdHBvcnRsZXRMaW5rRXZlbnRMaXN0ZW5lci5yZW1vdmUoKTtcblx0XHRwb3J0bGV0TGlua0V2ZW50TGlzdGVuZXIgPSBhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIoe1xuXHRcdFx0dGFyZ2V0OiAocG9ydGxldExpbmsuZmlyc3RFbGVtZW50Q2hpbGQgPz8gcG9ydGxldExpbmspIGFzIEhUTUxFbGVtZW50LFxuXHRcdFx0dHlwZTogJ2NsaWNrJyxcblx0XHRcdGxpc3RlbmVyOiBwb3J0bGV0TGlua0NsaWNrTGlzdGVuZXIsXG5cdFx0fSk7XG5cblx0XHRjb25zdCBpc0NpdGl6ZW46IGJvb2xlYW4gPSBza2luID09PSAnY2l0aXplbic7XG5cdFx0aWYgKGlzQ2l0aXplbiAmJiAhJChwb3J0bGV0TGluaykuZmluZCgnI213LXVpLWljb24td2lraW1lZGlhLXNob3J0bGluaycpLmxlbmd0aCkge1xuXHRcdFx0JChwb3J0bGV0TGluaylcblx0XHRcdFx0LmZpbmQoJ2EnKVxuXHRcdFx0XHQucHJlcGVuZChcblx0XHRcdFx0XHQ8c3BhblxuXHRcdFx0XHRcdFx0aWQ9XCJtdy11aS1pY29uLXdpa2ltZWRpYS1zaG9ydGxpbmtcIlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtbJ2NpdGl6ZW4tdWktaWNvbicsICdtdy11aS1pY29uLWxpbmsnLCAnbXctdWktaWNvbi13aWtpbWVkaWEtbGluayddfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cblx0bGV0IGhlYWRlckxpbms6IEhUTUxBbmNob3JFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtdy1pbmRpY2F0b3Itc2hvcnRVUkwgYScpO1xuXHRpZiAoIWhlYWRlckxpbmspIHtcblx0XHRoZWFkZXJMaW5rID0gKFxuXHRcdFx0PGEgYXJpYS1sYWJlbD17d2dVc2VyTmFtZSA/IGdldE1lc3NhZ2UoJ1Nob3J0IFVSTCcpIDogZ2V0TWVzc2FnZSgnU2hhcmUgVVJMIGZvciB0aGUgcGFnZScpfSBocmVmPVwiI1wiPlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJnYWRnZXQtc2hvcnQtbGlua19faWNvblwiPlxuXHRcdFx0XHRcdHt3Z1VzZXJOYW1lID8gZ2V0TWVzc2FnZSgnU2hvcnQgVVJMJykgOiBnZXRNZXNzYWdlKCdTaGFyZSBVUkwgZm9yIHRoZSBwYWdlJyl9XG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdDwvYT5cblx0XHQpIGFzIEhUTUxBbmNob3JFbGVtZW50O1xuXG5cdFx0dGlwcHkoaGVhZGVyTGluaywge1xuXHRcdFx0YXJyb3c6IHRydWUsXG5cdFx0XHRjb250ZW50OiB3Z1VzZXJOYW1lID8gZ2V0TWVzc2FnZSgnU2hvcnQgVVJMJykgOiBnZXRNZXNzYWdlKCdTaGFyZSBVUkwgZm9yIHRoZSBwYWdlJyksXG5cdFx0XHRwbGFjZW1lbnQ6ICdib3R0b20nLFxuXHRcdH0pO1xuXG5cdFx0Y29uc3QgJGhlYWRlckVsZW1lbnQgPSAkKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtdy1pbmRpY2F0b3JcIiBpZD1cIm13LWluZGljYXRvci1zaG9ydFVSTFwiPlxuXHRcdFx0XHR7aGVhZGVyTGlua31cblx0XHRcdDwvZGl2PlxuXHRcdCkgYXMgSlF1ZXJ5O1xuXG5cdFx0JGhlYWRlckVsZW1lbnQucHJlcGVuZFRvKCcubXctaW5kaWNhdG9ycycpO1xuXHR9XG5cblx0Y29uc3QgZnVsbExpbms6IHN0cmluZyA9IHdnVXNlck5hbWUgPyBgaHR0cHM6Ly8ke2RvbWFpbnNbMF19JHtsaW5rfWAgOiBgaHR0cHM6Ly8ke2xvY2F0aW9uLmhvc3R9JHtwZXJtYUxpbmt9YDtcblxuXHRjb25zdCAkbm90aWZ5RWxlbWVudCA9ICQoXG5cdFx0PHNwYW4+XG5cdFx0XHR7Z2V0TWVzc2FnZSgnVVJMIGNvcGllZCB0byBjbGlwYm9hcmQnKX1cblx0XHRcdDxiciAvPlxuXHRcdFx0PGFcblx0XHRcdFx0aHJlZj1cIiNcIlxuXHRcdFx0XHRvbkNsaWNrPXsoZXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHR9fVxuXHRcdFx0PlxuXHRcdFx0XHR7ZnVsbExpbmt9XG5cdFx0XHQ8L2E+XG5cdFx0PC9zcGFuPlxuXHQpIGFzIEpRdWVyeTtcblxuXHRjb25zdCBoZWFkZXJMaW5rQ2xpY2tMaXN0ZW5lciA9IChldmVudDogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHR2b2lkIG13Lm5vdGlmeSgkbm90aWZ5RWxlbWVudCwge1xuXHRcdFx0dGFnOiAnc2hvcnRVUkwnLFxuXHRcdFx0dHlwZTogJ2luZm8nLFxuXHRcdH0pO1xuXHR9O1xuXG5cdGhlYWRlckxpbmtFdmVudExpc3RlbmVyLnJlbW92ZSgpO1xuXHRoZWFkZXJMaW5rRXZlbnRMaXN0ZW5lciA9IGFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcih7XG5cdFx0dGFyZ2V0OiBoZWFkZXJMaW5rLFxuXHRcdHR5cGU6ICdjbGljaycsXG5cdFx0bGlzdGVuZXI6IGhlYWRlckxpbmtDbGlja0xpc3RlbmVyLFxuXHR9KTtcblxuXHRjbGlwYm9hcmRJbnN0YW5jZT8uZGVzdHJveSgpO1xuXHRjbGlwYm9hcmRJbnN0YW5jZSA9IG5ldyBDbGlwYm9hcmQoaGVhZGVyTGluaywge1xuXHRcdHRleHQ6ICgpOiBzdHJpbmcgPT4gZnVsbExpbmssXG5cdH0pO1xufTtcblxuZXhwb3J0IHthZGRMaW5rfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0J05ldHdvcmsgZXJyb3InOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ05ldHdvcmsgZXJyb3InLFxuXHRcdFx0amE6ICfjg43jg4Pjg4jjg6/jg7zjgq/jgqjjg6njg7wnLFxuXHRcdFx0J3poLWhhbnMnOiAn572R57uc5byC5bi4Jyxcblx0XHRcdCd6aC1oYW50JzogJ+e2sui3r+eVsOW4uCcsXG5cdFx0fSksXG5cdFx0J1BhZ2UgVVJMJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQZXJtYW5lbnQgVVJMJyxcblx0XHRcdCd6aC1oYW5zJzogJ+mhtemdoumTvuaOpScsXG5cdFx0XHQnemgtaGFudCc6ICfpoIHpnaLntrLlnYAnLFxuXHRcdH0pLFxuXHRcdCdQZXJtYW5lbnQgVVJMJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQZXJtYW5lbnQgVVJMJyxcblx0XHRcdCd6aC1oYW5zJzogJ+awuOS5hemTvuaOpScsXG5cdFx0XHQnemgtaGFudCc6ICfmsLjkuYXntrLlnYAnLFxuXHRcdH0pLFxuXHRcdCdTaGFyZSBVUkwgZm9yIHRoZSBwYWdlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTaGFyZSBVUkwgZm9yIHRoZSBwYWdlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIhuS6q+acrOmhtemTvuaOpScsXG5cdFx0XHQnemgtaGFudCc6ICfliIbkuqvmnKzpoIHntrLlnYAnLFxuXHRcdH0pLFxuXHRcdCdTaG9ydCBVUkwnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1Nob3J0IFVSTCcsXG5cdFx0XHQnemgtaGFucyc6ICfnn63pk77mjqUnLFxuXHRcdFx0J3poLWhhbnQnOiAn55+t57ay5Z2AJyxcblx0XHR9KSxcblx0XHQnU2hvdyBVUkwnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1Nob3cgVVJMJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aYvuekuuivpemhtemTvuaOpScsXG5cdFx0XHQnemgtaGFudCc6ICfpoa/npLroqbLpoIHntrLlnYAnLFxuXHRcdH0pLFxuXHRcdCdVUkwgY29waWVkIHRvIGNsaXBib2FyZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhlIFVSTCBoYXMgYmVlbiBjb3BpZWQgdG8gY2xpcGJvYXJkOicsXG5cdFx0XHQnemgtaGFucyc6ICflt7LlpI3liLbmnKzpobXpk77mjqXvvJonLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey5b6p6KO95pys6aCB57ay5Z2A77yaJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHthZGRMaW5rfSBmcm9tICcuL2FkZExpbmsnO1xuXG5jb25zdCBidWlsZExpbmsgPSAob2xkSWQ6IG51bWJlciB8IG51bGwsIGRpZmZJZDogbnVtYmVyKTogdm9pZCA9PiB7XG5cdGxldCBsaW5rOiBzdHJpbmcgPSAnL2QnO1xuXHRsZXQgcGVybWFMaW5rOiBzdHJpbmcgPSAnL3dpa2kvU3BlY2lhbDpEaWZmJztcblx0aWYgKG9sZElkKSB7XG5cdFx0bGluayArPSBgLyR7b2xkSWR9YDtcblx0XHRwZXJtYUxpbmsgKz0gYC8ke29sZElkfWA7XG5cdH1cblx0bGluayArPSBgLyR7ZGlmZklkfWA7XG5cdHBlcm1hTGluayArPSBgLyR7ZGlmZklkfWA7XG5cblx0YWRkTGluayhsaW5rLCBwZXJtYUxpbmspO1xufTtcblxuZXhwb3J0IHtidWlsZExpbmt9O1xuIiwgIntcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFNob3J0VVJMLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4uL2FwaSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbnR5cGUgQ29tcGFyZVJlc3BvbnNlID0ge1xuXHRjb21wYXJlPzoge1xuXHRcdGZyb21yZXZpZDogbnVtYmVyO1xuXHR9O1xufTtcblxuY29uc3QgcGFyYW1ldGVyczogQXBpQ29tcGFyZVBhZ2VzUGFyYW1zID0ge1xuXHRhY3Rpb246ICdjb21wYXJlJyxcblx0Zm9ybWF0OiAnanNvbicsXG5cdGZvcm1hdHZlcnNpb246ICcyJyxcblx0cHJvcDogJ2lkcycsXG5cdHRvcmVsYXRpdmU6ICdwcmV2Jyxcblx0c21heGFnZTogNjAwLFxuXHRtYXhhZ2U6IDYwMCxcbn07XG5cbmNvbnN0IHF1ZXJ5QXBpID0gYXN5bmMgKGRpZmZJZDogbnVtYmVyKTogUHJvbWlzZTxDb21wYXJlUmVzcG9uc2U+ID0+IHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gYXdhaXQgYXBpLmdldCh7XG5cdFx0XHQuLi5wYXJhbWV0ZXJzLFxuXHRcdFx0ZnJvbXJldjogZGlmZklkLFxuXHRcdH0gYXMgdHlwZW9mIHBhcmFtZXRlcnMpO1xuXHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1tTaG9ydFVSTF0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdFx0dG9hc3RpZnkoXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ05ldHdvcmsgZXJyb3InKSxcblx0XHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdH0sXG5cdFx0XHQnZXJyb3InXG5cdFx0KTtcblxuXHRcdHJldHVybiB7fTtcblx0fVxufTtcblxuZXhwb3J0IHtxdWVyeUFwaX07XG4iLCAiaW1wb3J0IHtidWlsZExpbmt9IGZyb20gJy4vYnVpbGRMaW5rJztcbmltcG9ydCB7cXVlcnlBcGl9IGZyb20gJy4vdXRpbC9xdWVyeUFwaSc7XG5cbmNvbnN0IGNvbXBhcmVXaXRoUmVtb3RlRGlmZklkID0gYXN5bmMgKGRpZmZJZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IHJlc3BvbnNlOiBBd2FpdGVkPFJldHVyblR5cGU8dHlwZW9mIHF1ZXJ5QXBpPj4gPSBhd2FpdCBxdWVyeUFwaShkaWZmSWQpO1xuXHRpZiAoZGlmZklkID09PSBtdy5jb25maWcuZ2V0KCd3Z0RpZmZOZXdJZCcpICYmIHJlc3BvbnNlWydjb21wYXJlJ10/LmZyb21yZXZpZCA9PT0gbXcuY29uZmlnLmdldCgnd2dEaWZmT2xkSWQnKSkge1xuXHRcdGJ1aWxkTGluaygwLCBkaWZmSWQpO1xuXHR9XG59O1xuXG5leHBvcnQge2NvbXBhcmVXaXRoUmVtb3RlRGlmZklkfTtcbiIsICJpbXBvcnQge2FkZExpbmt9IGZyb20gJy4vYWRkTGluayc7XG5pbXBvcnQge2J1aWxkTGlua30gZnJvbSAnLi9idWlsZExpbmsnO1xuaW1wb3J0IHtjb21wYXJlV2l0aFJlbW90ZURpZmZJZH0gZnJvbSAnLi9jb21wYXJlV2l0aFJlbW90ZURpZmZJZCc7XG5cbmNvbnN0IHByb2Nlc3NJZCA9IChcblx0aXNSZXZpc2lvblBhZ2U6IGJvb2xlYW4sXG5cdHtcblx0XHRhcnRpY2xlSWQsXG5cdFx0ZGlmZklkLFxuXHRcdG9sZElkLFxuXHRcdHJldmlzaW9uSWQsXG5cdH06IHtcblx0XHRhcnRpY2xlSWQ6IG51bWJlcjtcblx0XHRkaWZmSWQ6IG51bWJlciB8IG51bGw7XG5cdFx0b2xkSWQ6IG51bWJlciB8IG51bGw7XG5cdFx0cmV2aXNpb25JZDogbnVtYmVyIHwgbnVsbDtcblx0fVxuKTogdm9pZCA9PiB7XG5cdGlmIChkaWZmSWQpIHtcblx0XHRidWlsZExpbmsob2xkSWQsIGRpZmZJZCk7XG5cdFx0aWYgKG9sZElkKSB7XG5cdFx0XHR2b2lkIGNvbXBhcmVXaXRoUmVtb3RlRGlmZklkKGRpZmZJZCk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKHJldmlzaW9uSWQgJiYgaXNSZXZpc2lvblBhZ2UpIHtcblx0XHRhZGRMaW5rKGAvcC8ke3JldmlzaW9uSWR9YCwgYC93aWtpL1NwZWNpYWw6UGVybWFsaW5rLyR7cmV2aXNpb25JZH1gKTtcblx0fSBlbHNlIGlmIChhcnRpY2xlSWQpIHtcblx0XHRhZGRMaW5rKGAvYy8ke2FydGljbGVJZH1gLCBgL2luZGV4LnBocD9jdXJpZD0ke2FydGljbGVJZH1gKTtcblx0fVxufTtcblxuZXhwb3J0IHtwcm9jZXNzSWR9O1xuIiwgImltcG9ydCB7Y2hlY2tSZXZpc2lvblBhZ2V9IGZyb20gJy4vbW9kdWxlcy91dGlsL2NoZWNrUmV2aXNpb25QYWdlJztcbmltcG9ydCB7Z2V0U2hvcnREb21haW5zfSBmcm9tICcuL21vZHVsZXMvdXRpbC9nZXRTaG9ydERvbWFpbnMnO1xuaW1wb3J0IHtwcm9jZXNzSWR9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzSWQnO1xuXG4oZnVuY3Rpb24gc2hvcnRVUkwoKSB7XG5cdGNvbnN0IHt3Z0FjdGlvbiwgd2dBcnRpY2xlSWQsIHdnTmFtZXNwYWNlTnVtYmVyfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRjb25zdCBkb21haW5zID0gZ2V0U2hvcnREb21haW5zKCk7XG5cblx0aWYgKCFkb21haW5zLmxlbmd0aCB8fCB3Z05hbWVzcGFjZU51bWJlciA8IDApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAod2dBY3Rpb24gPT09ICd2aWV3JyAmJiB3Z0FydGljbGVJZCkge1xuXHRcdG13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5hZGQoKCRjb250ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRpZiAoJGNvbnRlbnQuYXR0cignaWQnKSAhPT0gJ213LWNvbnRlbnQtdGV4dCcpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBpc1JldmlzaW9uUGFnZTogYm9vbGVhbiA9IGNoZWNrUmV2aXNpb25QYWdlKCRjb250ZW50KTtcblxuXHRcdFx0cHJvY2Vzc0lkKGlzUmV2aXNpb25QYWdlLCB7XG5cdFx0XHRcdGFydGljbGVJZDogbXcuY29uZmlnLmdldCgnd2dBcnRpY2xlSWQnKSxcblx0XHRcdFx0ZGlmZklkOiBtdy5jb25maWcuZ2V0KCd3Z0RpZmZOZXdJZCcpLFxuXHRcdFx0XHRvbGRJZDogbXcuY29uZmlnLmdldCgnd2dEaWZmT2xkSWQnKSxcblx0XHRcdFx0cmV2aXNpb25JZDogbXcuY29uZmlnLmdldCgnd2dSZXZpc2lvbklkJyksXG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsb0JBQXFCQyxjQUE4QjtBQUN4RCxVQUNFQSxTQUFTQyxLQUFLLDhCQUE4QixFQUFFQyxVQUM5Q0YsU0FBU0MsS0FBSyw0Q0FBNEMsRUFBRUMsVUFBVTtBQUV6RTs7QUNMQSxJQUFNQyxrQkFBa0JBLE1BQWdCO0FBQ3ZDLFFBQU07SUFBQ0M7RUFBUSxJQUFJQyxHQUFHQyxPQUFPQyxJQUFJO0FBQ2pDLE1BQUlDLFdBQW9CLENBQUE7QUFFeEIsVUFBUUosVUFBQTtJQUNQLEtBQUs7QUFDSkksaUJBQVUsQ0FBQyxZQUFZLGNBQWM7QUFDckM7RUFDRjtBQUVBLFNBQU9BO0FBQ1I7O0FDWEEsSUFBQUMscUJBQXdCQyxRQUFBLHNCQUFBO0FBQ3hCLElBQUFDLHFCQUFrQkMsUUFBQUYsUUFBQSxnQkFBQSxHQUFBLENBQUE7QUFDbEIsSUFBQUcscUJBQTBDSCxRQUFBLGlCQUFBOztBQ0YxQyxJQUFBSSxvQkFBdUJKLFFBQUEsaUJBQUE7QUFFdkIsSUFBTUssa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTixrQkFBQSxHQUFpQkQsa0JBQUFFLFVBQVM7TUFDekJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELGFBQUEsR0FBWUosa0JBQUFFLFVBQVM7TUFDcEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCxrQkFBQSxHQUFpQkgsa0JBQUFFLFVBQVM7TUFDekJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCwyQkFBQSxHQUEwQkgsa0JBQUFFLFVBQVM7TUFDbENDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCxjQUFBLEdBQWFILGtCQUFBRSxVQUFTO01BQ3JCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0QsYUFBQSxHQUFZSCxrQkFBQUUsVUFBUztNQUNwQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELDRCQUFBLEdBQTJCSCxrQkFBQUUsVUFBUztNQUNuQ0MsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNRSxlQUFlSixnQkFBZ0I7QUFFckMsSUFBTUssYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QUQxQ0EsSUFBQUMscUJBQW9CWixRQUFBLGtCQUFBO0FBRXBCLElBQU07RUFBQ2E7RUFBTUM7QUFBVSxJQUFJbkIsR0FBR0MsT0FBT0MsSUFBSTtBQUN6QyxJQUFNa0IsVUFBVXRCLGdCQUFnQjtBQUVoQyxJQUFJdUI7QUFDSixJQUFJQywwQkFBMEU7RUFDN0VDLFFBQVFBLE1BQVk7RUFBQztBQUN0QjtBQUNBLElBQUlDLDJCQUEyRTtFQUM5RUQsUUFBUUEsTUFBWTtFQUFDO0FBQ3RCO0FBRUEsSUFBTUUsVUFBVUEsQ0FBQ0MsTUFBY0MsY0FBNEI7QUFBQSxNQUFBQztBQUMxRCxNQUFJQyxjQUFvQ0MsU0FBU0MsY0FBYyxjQUFjO0FBQzdFLE1BQUksQ0FBQ0YsYUFBYTtBQUNqQixVQUFNRyxZQUFtQ0YsU0FBU0MsY0FBYyxhQUFhLElBQUksZUFBZTtBQUNoR0Ysa0JBQWM3QixHQUFHaUMsS0FBS0MsZUFDckJGLFdBQ0EsS0FDQWpCLFdBQVcsd0JBQXdCLEdBQ25DLGVBQ0FBLFdBQVcsVUFBVSxDQUN0QjtFQUNEO0FBRUEsTUFBSWMsYUFBYTtBQUFBLFFBQUFNO0FBQ2hCLFVBQU1DLDJCQUE0QkMsV0FBNEI7QUFDN0RBLFlBQU1DLGVBQWU7QUFFckIsWUFBTUMsV0FBbUJDLEVBQUUsT0FBTztBQUVsQ0QsZUFBU0U7O1FBRVIsSUFBS3pDLEdBQVcwQyxRQUFRQyxlQUFlO1VBQ3RDQyxPQUFPN0IsV0FBVyxVQUFVO1VBQzVCOEIsT0FBTzlCLFdBQVcsVUFBVTtVQUM1QitCLE9BQU87VUFDUEMsVUFBVUMsU0FBU0M7UUFDcEIsQ0FBQyxFQUFFVjtNQUNKO0FBRUFBLGVBQVNFOztRQUVSLElBQUt6QyxHQUFXMEMsUUFBUUMsZUFBZTtVQUN0Q0MsT0FBTzdCLFdBQVcsZUFBZTtVQUNqQzhCLE9BQU85QixXQUFXLGVBQWU7VUFDakMrQixPQUFPO1VBQ1BDLFVBQUEsV0FBQUcsT0FBcUJGLFNBQVNHLElBQUksRUFBQUQsT0FBR3ZCLFNBQVM7UUFDL0MsQ0FBQyxFQUFFWTtNQUNKO0FBRUEsVUFBSXBCLFlBQVk7QUFBQSxZQUFBaUMsYUFBQUMsMkJBQ1dqQyxRQUFRa0MsUUFBUSxDQUFBLEdBQUFDO0FBQUEsWUFBQTtBQUExQyxlQUFBSCxXQUFBSSxFQUFBLEdBQUEsRUFBQUQsU0FBQUgsV0FBQUssRUFBQSxHQUFBQyxRQUE2QztBQUFBLGtCQUFsQyxDQUFDQyxHQUFHQyxNQUFNLElBQUFMLE9BQUFNO0FBQ3BCdEIscUJBQVNFOztjQUVSLElBQUt6QyxHQUFXMEMsUUFBUUMsZUFBZTtnQkFDdENDLE9BQUEsR0FBQU0sT0FBVW5DLFdBQVcsV0FBVyxDQUFDLEVBQUFtQyxPQUFHUyxJQUFJLENBQUM7Z0JBQ3pDZCxPQUFBLEdBQUFLLE9BQVVuQyxXQUFXLFdBQVcsQ0FBQyxFQUFBbUMsT0FBR1MsSUFBSSxDQUFDO2dCQUN6Q2IsT0FBTztnQkFDUEMsVUFBQSxXQUFBRyxPQUFxQlUsTUFBTSxFQUFBVixPQUFHeEIsSUFBSTtjQUNuQyxDQUFDLEVBQUVhO1lBQ0o7VUFDRDtRQUFBLFNBQUF1QixLQUFBO0FBQUFWLHFCQUFBVyxFQUFBRCxHQUFBO1FBQUEsVUFBQTtBQUFBVixxQkFBQVksRUFBQTtRQUFBO01BQ0Q7QUFFQSxXQUFLQyxHQUFHQyxHQUFHQyxNQUFNNUIsVUFBVTtRQUMxQjZCLE1BQU07UUFDTnZCLE9BQU9MLEVBQUdsQyxtQ0FBQStELFFBQUFDLGNBQUMsS0FBQSxNQUFHdkQsV0FBVyx3QkFBd0IsQ0FBRSxDQUFvQjtNQUN4RSxDQUFDO0lBQ0Y7QUFFQVMsNkJBQXlCRCxPQUFPO0FBQ2hDQyxnQ0FBQSxHQUEyQmhCLG1CQUFBK0QsNkJBQTRCO01BQ3REQyxTQUFBckMsd0JBQVNOLFlBQVk0Qyx1QkFBQSxRQUFBdEMsMEJBQUEsU0FBQUEsd0JBQXFCTjtNQUMxQzZDLE1BQU07TUFDTkMsVUFBVXZDO0lBQ1gsQ0FBQztBQUVELFVBQU13QyxZQUFxQjFELFNBQVM7QUFDcEMsUUFBSTBELGFBQWEsQ0FBQ3BDLEVBQUVYLFdBQVcsRUFBRWpDLEtBQUssaUNBQWlDLEVBQUVDLFFBQVE7QUFDaEYyQyxRQUFFWCxXQUFXLEVBQ1hqQyxLQUFLLEdBQUcsRUFDUmlGLFFBQ0F2RSxtQ0FBQStELFFBQUFDLGNBQUMsUUFBQTtRQUNBUSxJQUFHO1FBQ0hDLFdBQVcsQ0FBQyxtQkFBbUIsbUJBQW1CLDJCQUEyQjtNQUFBLENBQzlFLENBQ0Q7SUFDRjtFQUNEO0FBRUEsTUFBSUMsYUFBdUNsRCxTQUFTQyxjQUFjLDBCQUEwQjtBQUM1RixNQUFJLENBQUNpRCxZQUFZO0FBQ2hCQSxpQkFDQzFFLG1DQUFBK0QsUUFBQUMsY0FBQyxLQUFBO01BQUUsY0FBWW5ELGFBQWFKLFdBQVcsV0FBVyxJQUFJQSxXQUFXLHdCQUF3QjtNQUFHa0MsTUFBSztJQUFBLEdBQ2hHM0MsbUNBQUErRCxRQUFBQyxjQUFDLFFBQUE7TUFBS1MsV0FBVTtJQUFBLEdBQ2Q1RCxhQUFhSixXQUFXLFdBQVcsSUFBSUEsV0FBVyx3QkFBd0IsQ0FDNUUsQ0FDRDtBQUdELEtBQUEsR0FBQUUsbUJBQUFnRSxPQUFNRCxZQUFZO01BQ2pCRSxPQUFPO01BQ1BDLFNBQVNoRSxhQUFhSixXQUFXLFdBQVcsSUFBSUEsV0FBVyx3QkFBd0I7TUFDbkZxRSxXQUFXO0lBQ1osQ0FBQztBQUVELFVBQU1DLGlCQUFpQjdDLEVBQ3RCbEMsbUNBQUErRCxRQUFBQyxjQUFDLE9BQUE7TUFBSVMsV0FBVTtNQUFlRCxJQUFHO0lBQUEsR0FDL0JFLFVBQ0YsQ0FDRDtBQUVBSyxtQkFBZUMsVUFBVSxnQkFBZ0I7RUFDMUM7QUFFQSxRQUFNQyxXQUFtQnBFLGFBQUEsV0FBQStCLE9BQXdCOUIsUUFBUSxDQUFDLENBQUMsRUFBQThCLE9BQUd4QixJQUFJLElBQUEsV0FBQXdCLE9BQWdCRixTQUFTRyxJQUFJLEVBQUFELE9BQUd2QixTQUFTO0FBRTNHLFFBQU02RCxpQkFBaUJoRCxFQUN0QmxDLG1DQUFBK0QsUUFBQUMsY0FBQyxRQUFBLE1BQ0N2RCxXQUFXLHlCQUF5QixHQUNyQ1QsbUNBQUErRCxRQUFBQyxjQUFDLE1BQUEsSUFBRyxHQUNKaEUsbUNBQUErRCxRQUFBQyxjQUFDLEtBQUE7SUFDQXJCLE1BQUs7SUFDTHdDLFNBQVVwRCxXQUFnQjtBQUN6QkEsWUFBTUMsZUFBZTtBQUNyQkQsWUFBTXFELGdCQUFnQjtJQUN2QjtFQUFBLEdBRUNILFFBQ0YsQ0FDRCxDQUNEO0FBRUEsUUFBTUksMEJBQTJCdEQsV0FBNEI7QUFDNURBLFVBQU1DLGVBQWU7QUFFckIsU0FBS3RDLEdBQUc0RixPQUFPSixnQkFBZ0I7TUFDOUJLLEtBQUs7TUFDTG5CLE1BQU07SUFDUCxDQUFDO0VBQ0Y7QUFFQXBELDBCQUF3QkMsT0FBTztBQUMvQkQsNkJBQUEsR0FBMEJkLG1CQUFBK0QsNkJBQTRCO0lBQ3JEQyxRQUFRUTtJQUNSTixNQUFNO0lBQ05DLFVBQVVnQjtFQUNYLENBQUM7QUFFRCxHQUFBL0QscUJBQUFQLHVCQUFBLFFBQUFPLHVCQUFBLFVBQUFBLG1CQUFtQmtFLFFBQVE7QUFDM0J6RSxzQkFBb0IsSUFBSWpCLG1CQUFBMkYsVUFBVWYsWUFBWTtJQUM3Q2dCLE1BQU1BLE1BQWNUO0VBQ3JCLENBQUM7QUFDRjs7QUU5SkEsSUFBTVUsWUFBWUEsQ0FBQ0MsT0FBc0JDLFdBQXlCO0FBQ2pFLE1BQUl6RSxPQUFlO0FBQ25CLE1BQUlDLFlBQW9CO0FBQ3hCLE1BQUl1RSxPQUFPO0FBQ1Z4RSxZQUFBLElBQUF3QixPQUFZZ0QsS0FBSztBQUNqQnZFLGlCQUFBLElBQUF1QixPQUFpQmdELEtBQUs7RUFDdkI7QUFDQXhFLFVBQUEsSUFBQXdCLE9BQVlpRCxNQUFNO0FBQ2xCeEUsZUFBQSxJQUFBdUIsT0FBaUJpRCxNQUFNO0FBRXZCMUUsVUFBUUMsTUFBTUMsU0FBUztBQUN4Qjs7QUNaQyxJQUFBeUUsVUFBVzs7QUNBWixJQUFBQyxxQkFBd0JoRyxRQUFBLGlCQUFBO0FBRXhCLElBQU1pRyxPQUFBLEdBQWNELG1CQUFBRSxXQUFBLFlBQUFyRCxPQUE4QmtELE9BQU8sQ0FBRTs7QUNEM0QsSUFBQUkscUJBQXVCbkcsUUFBQSxxQkFBQTtBQVF2QixJQUFNb0csYUFBb0M7RUFDekNDLFFBQVE7RUFDUkMsUUFBUTtFQUNSQyxlQUFlO0VBQ2ZDLE1BQU07RUFDTkMsWUFBWTtFQUNaQyxTQUFTO0VBQ1RDLFFBQVE7QUFDVDtBQUVBLElBQU1DLFdBQUEsNEJBQUE7QUFBQSxNQUFBQyxPQUFBQyxrQkFBVyxXQUFPaEIsUUFBNkM7QUFDcEUsUUFBSTtBQUNILGFBQUEsTUFBYUcsSUFBSXBHLElBQUk7UUFDcEIsR0FBR3VHO1FBQ0hXLFNBQVNqQjtNQUNWLENBQXNCO0lBQ3ZCLFNBQVNrQixPQUFnQjtBQUN4QkMsY0FBUUQsTUFBTSwwQkFBMEJBLEtBQUs7QUFDN0MsT0FBQSxHQUFBYixtQkFBQWUsVUFDQztRQUNDdkIsTUFBTWpGLFdBQVcsZUFBZTtRQUNoQ3lHLE9BQU87UUFDUEMsVUFBVTtNQUNYLEdBQ0EsT0FDRDtBQUVBLGFBQU8sQ0FBQztJQUNUO0VBQ0QsQ0FBQTtBQUFBLFNBQUEsU0FuQk1SLFVBQUFTLElBQUE7QUFBQSxXQUFBUixLQUFBUyxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEdBQUE7O0FDakJOLElBQU1DLDBCQUFBLDRCQUFBO0FBQUEsTUFBQUMsUUFBQVgsa0JBQTBCLFdBQU9oQixRQUFrQztBQUFBLFFBQUE0QjtBQUN4RSxVQUFNQyxXQUFBLE1BQXVEZixTQUFTZCxNQUFNO0FBQzVFLFFBQUlBLFdBQVduRyxHQUFHQyxPQUFPQyxJQUFJLGFBQWEsT0FBSzZILG9CQUFBQyxTQUFTLFNBQVMsT0FBQSxRQUFBRCxzQkFBQSxTQUFBLFNBQWxCQSxrQkFBcUJFLGVBQWNqSSxHQUFHQyxPQUFPQyxJQUFJLGFBQWEsR0FBRztBQUMvRytGLGdCQUFVLEdBQUdFLE1BQU07SUFDcEI7RUFDRCxDQUFBO0FBQUEsU0FBQSxTQUxNMEIseUJBQUFLLEtBQUE7QUFBQSxXQUFBSixNQUFBSCxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEdBQUE7O0FDQ04sSUFBTU8sWUFBWUEsQ0FDakJDLGdCQUNBO0VBQ0NDO0VBQ0FsQztFQUNBRDtFQUNBb0M7QUFDRCxNQU1VO0FBQ1YsTUFBSW5DLFFBQVE7QUFDWEYsY0FBVUMsT0FBT0MsTUFBTTtBQUN2QixRQUFJRCxPQUFPO0FBQ1YsV0FBSzJCLHdCQUF3QjFCLE1BQU07SUFDcEM7RUFDRCxXQUFXbUMsY0FBY0YsZ0JBQWdCO0FBQ3hDM0csWUFBQSxNQUFBeUIsT0FBY29GLFVBQVUsR0FBQSwyQkFBQXBGLE9BQStCb0YsVUFBVSxDQUFFO0VBQ3BFLFdBQVdELFdBQVc7QUFDckI1RyxZQUFBLE1BQUF5QixPQUFjbUYsU0FBUyxHQUFBLG9CQUFBbkYsT0FBd0JtRixTQUFTLENBQUU7RUFDM0Q7QUFDRDs7Q0N4QkMsU0FBU0UsV0FBVztBQUNwQixRQUFNO0lBQUNDO0lBQVVDO0lBQWFDO0VBQWlCLElBQUkxSSxHQUFHQyxPQUFPQyxJQUFJO0FBRWpFLFFBQU1DLFdBQVVMLGdCQUFnQjtBQUVoQyxNQUFJLENBQUNLLFNBQVFOLFVBQVU2SSxvQkFBb0IsR0FBRztBQUM3QztFQUNEO0FBRUEsTUFBSUYsYUFBYSxVQUFVQyxhQUFhO0FBQ3ZDekksT0FBRzJJLEtBQUssa0JBQWtCLEVBQUVDLElBQUtqSixjQUFtQjtBQUNuRCxVQUFJQSxTQUFTa0osS0FBSyxJQUFJLE1BQU0sbUJBQW1CO0FBQzlDO01BQ0Q7QUFFQSxZQUFNVCxpQkFBMEIxSSxrQkFBa0JDLFFBQVE7QUFFMUR3SSxnQkFBVUMsZ0JBQWdCO1FBQ3pCQyxXQUFXckksR0FBR0MsT0FBT0MsSUFBSSxhQUFhO1FBQ3RDaUcsUUFBUW5HLEdBQUdDLE9BQU9DLElBQUksYUFBYTtRQUNuQ2dHLE9BQU9sRyxHQUFHQyxPQUFPQyxJQUFJLGFBQWE7UUFDbENvSSxZQUFZdEksR0FBR0MsT0FBT0MsSUFBSSxjQUFjO01BQ3pDLENBQUM7SUFDRixDQUFDO0VBQ0Y7QUFDRCxHQUFHOyIsCiAgIm5hbWVzIjogWyJjaGVja1JldmlzaW9uUGFnZSIsICIkY29udGVudCIsICJmaW5kIiwgImxlbmd0aCIsICJnZXRTaG9ydERvbWFpbnMiLCAid2dXaWtpSUQiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJkb21haW5zMiIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiX190b0VTTSIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAic2tpbiIsICJ3Z1VzZXJOYW1lIiwgImRvbWFpbnMiLCAiY2xpcGJvYXJkSW5zdGFuY2UiLCAiaGVhZGVyTGlua0V2ZW50TGlzdGVuZXIiLCAicmVtb3ZlIiwgInBvcnRsZXRMaW5rRXZlbnRMaXN0ZW5lciIsICJhZGRMaW5rIiwgImxpbmsiLCAicGVybWFMaW5rIiwgIl9jbGlwYm9hcmRJbnN0YW5jZSIsICJwb3J0bGV0TGluayIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgInBvcnRsZXRJZCIsICJ1dGlsIiwgImFkZFBvcnRsZXRMaW5rIiwgIl9wb3J0bGV0TGluayRmaXJzdEVsZSIsICJwb3J0bGV0TGlua0NsaWNrTGlzdGVuZXIiLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAiJGVsZW1lbnQiLCAiJCIsICJhcHBlbmQiLCAid2lkZ2V0cyIsICJDb3B5VGV4dExheW91dCIsICJsYWJlbCIsICJ0aXRsZSIsICJhbGlnbiIsICJjb3B5VGV4dCIsICJsb2NhdGlvbiIsICJocmVmIiwgImNvbmNhdCIsICJob3N0IiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiZW50cmllcyIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiaSIsICJkb21haW4iLCAidmFsdWUiLCAiZXJyIiwgImUiLCAiZiIsICJPTyIsICJ1aSIsICJhbGVydCIsICJzaXplIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIiLCAidGFyZ2V0IiwgImZpcnN0RWxlbWVudENoaWxkIiwgInR5cGUiLCAibGlzdGVuZXIiLCAiaXNDaXRpemVuIiwgInByZXBlbmQiLCAiaWQiLCAiY2xhc3NOYW1lIiwgImhlYWRlckxpbmsiLCAidGlwcHkiLCAiYXJyb3ciLCAiY29udGVudCIsICJwbGFjZW1lbnQiLCAiJGhlYWRlckVsZW1lbnQiLCAicHJlcGVuZFRvIiwgImZ1bGxMaW5rIiwgIiRub3RpZnlFbGVtZW50IiwgIm9uQ2xpY2siLCAic3RvcFByb3BhZ2F0aW9uIiwgImhlYWRlckxpbmtDbGlja0xpc3RlbmVyIiwgIm5vdGlmeSIsICJ0YWciLCAiZGVzdHJveSIsICJDbGlwYm9hcmQiLCAidGV4dCIsICJidWlsZExpbmsiLCAib2xkSWQiLCAiZGlmZklkIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQ2IiwgImFwaSIsICJpbml0TXdBcGkiLCAiaW1wb3J0X2V4dF9nYWRnZXQ3IiwgInBhcmFtZXRlcnMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAidG9yZWxhdGl2ZSIsICJzbWF4YWdlIiwgIm1heGFnZSIsICJxdWVyeUFwaSIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgImZyb21yZXYiLCAiZXJyb3IiLCAiY29uc29sZSIsICJ0b2FzdGlmeSIsICJjbG9zZSIsICJkdXJhdGlvbiIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiY29tcGFyZVdpdGhSZW1vdGVEaWZmSWQiLCAiX3JlZjIiLCAiX3Jlc3BvbnNlJGNvbXBhcmUiLCAicmVzcG9uc2UiLCAiZnJvbXJldmlkIiwgIl94MiIsICJwcm9jZXNzSWQiLCAiaXNSZXZpc2lvblBhZ2UiLCAiYXJ0aWNsZUlkIiwgInJldmlzaW9uSWQiLCAic2hvcnRVUkwiLCAid2dBY3Rpb24iLCAid2dBcnRpY2xlSWQiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAiaG9vayIsICJhZGQiLCAiYXR0ciJdCn0K
