/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://www.mediawiki.org/wiki/MediaWiki:Gadget-whoisactive.css}
 * @base {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/GeoLocationReader}
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

// dist/MarkRights-Userpage/MarkRights-Userpage.js
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
//! src/MarkRights-Userpage/options.json
var mountPointSelector = "#footer-info,.page-info";
var userNameSpaceNumber = 2;
//! src/GeoLocation/modules/constant.ts
var SYSTEM_SCRIPT_LIST = ["滥用过滤器", "Example", "External contributors", "Maintenance script", "MediaWiki default", "MediaWiki message delivery", "New user page"];
var WEBMASTER_LIST = ["WebMaster", "Qiuwen"];
//! src/MarkRights-Userpage/components/react.tsx
var import_ext_gadget = __toESM(require("ext.gadget.JSX"), 1);
var FooterNotice = ({
  spanClass,
  children = /* @__PURE__ */ import_ext_gadget.default.createElement(import_ext_gadget.default.Fragment, null)
}) => {
  const {
    skin
  } = mw.config.get();
  const classNames = ["gadget-markrights_userpage", "gadget-markrights_userpage__".concat(spanClass)];
  if (skin === "citizen") {
    return /* @__PURE__ */ import_ext_gadget.default.createElement("section", {
      className: [...classNames, "page-info__item", "citizen-footer__pageinfo-item", "noprint"]
    }, children);
  } else if (["gongbi", "vector", "vector-2022"].includes(skin) || document.querySelector("ul#footer-info")) {
    return /* @__PURE__ */ import_ext_gadget.default.createElement("li", {
      className: [...classNames, "noprint"]
    }, children);
  }
  return /* @__PURE__ */ import_ext_gadget.default.createElement("div", {
    className: [...classNames, "noprint"]
  }, children);
};
var Indicator = ({
  indicatorText,
  spanClass
}) => {
  if (!indicatorText) {
    return /* @__PURE__ */ import_ext_gadget.default.createElement(import_ext_gadget.default.Fragment, null);
  }
  return /* @__PURE__ */ import_ext_gadget.default.createElement(import_ext_gadget.default.Fragment, null, /* @__PURE__ */ import_ext_gadget.default.createElement("span", {
    className: ["gadget-markrights_userpage__icon", "gadget-markrights_userpage__icon__".concat(spanClass)],
    title: indicatorText
  }), /* @__PURE__ */ import_ext_gadget.default.createElement("span", {
    className: "gadget-markrights_userpage__text"
  }, indicatorText));
};
var FooterIcon = ({
  spanClass,
  indicatorText
}) => /* @__PURE__ */ import_ext_gadget.default.createElement(FooterNotice, {
  spanClass
}, /* @__PURE__ */ import_ext_gadget.default.createElement(Indicator, {
  indicatorText,
  spanClass
}));
//! src/MarkRights-Userpage/modules/appendIcon.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.JSX"), 1);
var appendIcon = ({
  indicatorText,
  spanClass
}) => {
  if (spanClass === "unknown" || !indicatorText) {
    return;
  }
  const mountPoint = document.querySelector(mountPointSelector);
  if (!mountPoint) {
    return;
  }
  mountPoint.prepend(/* @__PURE__ */ import_ext_gadget2.default.createElement(FooterIcon, {
    spanClass,
    indicatorText
  }));
};
//! src/MarkRights-Userpage/modules/getPermissions.ts
var import_ext_gadget4 = require("ext.gadget.MarkRights");
//! src/MarkRights-Userpage/modules/i18n.ts
var import_ext_gadget3 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    webmaster: (0, import_ext_gadget3.localize)({
      en: "WebMaster",
      "zh-hans": "站长",
      "zh-hant": "站長"
    }),
    responsibleoperator: (0, import_ext_gadget3.localize)({
      en: "Responsible Operator",
      "zh-hans": "责任运营",
      "zh-hant": "責任運營"
    }),
    steward: (0, import_ext_gadget3.localize)({
      en: "Steward",
      "zh-hans": "档案理事员",
      "zh-hant": "檔案理事員"
    }),
    checkuser: (0, import_ext_gadget3.localize)({
      en: "CheckUser",
      "zh-hans": "用户查核",
      "zh-hant": "用戶查核"
    }),
    suppress: (0, import_ext_gadget3.localize)({
      en: "Oversighter",
      "zh-hans": "监督员",
      "zh-hant": "監督員"
    }),
    sysop: (0, import_ext_gadget3.localize)({
      en: "SysOp",
      "zh-hans": "管理员",
      "zh-hant": "管理員"
    }),
    "interface-admin": (0, import_ext_gadget3.localize)({
      en: "Interface Administrator",
      "zh-hans": "界面管理员",
      "zh-hant": "介面管理員"
    }),
    templateeditor: (0, import_ext_gadget3.localize)({
      en: "Template Editor",
      "zh-hans": "模板编辑员",
      "zh-hant": "模板編輯員"
    }),
    importer: (0, import_ext_gadget3.localize)({
      en: "Importer",
      "zh-hans": "导入者",
      "zh-hant": "匯入者"
    }),
    patroller: (0, import_ext_gadget3.localize)({
      en: "Patroller",
      "zh-hans": "巡查员",
      "zh-hant": "巡查員"
    }),
    autopatrolled: (0, import_ext_gadget3.localize)({
      en: "Good Editor",
      "zh-hans": "优质编辑者",
      "zh-hant": "優質編輯者"
    }),
    eventsponsor: (0, import_ext_gadget3.localize)({
      en: "Event Sponsor",
      "zh-hans": "活动组织者",
      "zh-hant": "活動組織者"
    }),
    "massmessage-sender": (0, import_ext_gadget3.localize)({
      en: "MassMessage sender",
      "zh-hans": "大量消息发送者",
      "zh-hant": "大量訊息傳送者"
    }),
    confirmed: (0, import_ext_gadget3.localize)({
      en: "Confirmed user",
      "zh-hans": "确认用户",
      "zh-hant": "確認用戶"
    }),
    autoconfirmed: (0, import_ext_gadget3.localize)({
      en: "Auto-confirmed user",
      "zh-hans": "自动确认用户",
      "zh-hant": "自動確認用戶"
    }),
    "rnrsverify-exempt": (0, import_ext_gadget3.localize)({
      en: "Exempted from real-name verification",
      "zh-hans": "实名制验证豁免",
      "zh-hant": "實名制驗證豁免"
    }),
    bot: (0, import_ext_gadget3.localize)({
      en: "Bot",
      "zh-hans": "机器人",
      "zh-hant": "機械人"
    }),
    flood: (0, import_ext_gadget3.localize)({
      en: "Flooder",
      "zh-hans": "机器用户",
      "zh-hant": "機械用戶"
    }),
    "ipblock-exempt": (0, import_ext_gadget3.localize)({
      en: "Exempted from IP blocks",
      "zh-hans": "IP封禁豁免",
      "zh-hant": "IP封鎖豁免"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/MarkRights-Userpage/modules/getPermissions.ts
var import_ext_gadget5 = require("ext.gadget.Util");
var getPermissions = /* @__PURE__ */ (function() {
  var _ref = _asyncToGenerator(function* (wgRelevantUserName) {
    try {
      var _localGroupsMap$wgRel;
      const localGroupsMap = yield (0, import_ext_gadget4.getLocalUserGroups)([wgRelevantUserName]);
      const localGroups = (_localGroupsMap$wgRel = localGroupsMap[wgRelevantUserName]) !== null && _localGroupsMap$wgRel !== void 0 ? _localGroupsMap$wgRel : [];
      const groups = (0, import_ext_gadget5.uniqueArray)([...localGroups]).filter((element) => {
        return !["*", "user", "autoconfirmed", "rnrsverify-confirmed", "bot"].includes(element);
      });
      if (SYSTEM_SCRIPT_LIST.includes(wgRelevantUserName)) {
      } else if (WEBMASTER_LIST.includes(wgRelevantUserName)) {
        appendIcon({
          indicatorText: getMessage("webmaster"),
          spanClass: "webmaster"
        });
      } else {
        var _iterator2 = _createForOfIteratorHelper(groups), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            const group = _step2.value;
            appendIcon({
              indicatorText: getMessage(group),
              spanClass: group
            });
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    } catch {
    }
  });
  return function getPermissions2(_x) {
    return _ref.apply(this, arguments);
  };
})();
//! src/MarkRights-Userpage/MarkRights-Userpage.ts
(function markRightsUserPage() {
  const {
    wgAction,
    wgNamespaceNumber,
    wgPageName,
    wgRelevantUserName
  } = mw.config.get();
  if (!wgRelevantUserName || !(wgNamespaceNumber === userNameSpaceNumber) || !(wgAction === "view")) {
    return;
  }
  if (mw.util.isIPv4Address(wgRelevantUserName) || mw.util.isIPv6Address(wgRelevantUserName)) {
    return;
  }
  const relevantUserPageName = new mw.Title(wgRelevantUserName, userNameSpaceNumber).toText();
  const pageName = new mw.Title(wgPageName).toText();
  if (pageName !== relevantUserPageName) {
    return;
  }
  void getPermissions(wgRelevantUserName);
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01hcmtSaWdodHMtVXNlcnBhZ2Uvb3B0aW9ucy5qc29uIiwgInNyYy9HZW9Mb2NhdGlvbi9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9NYXJrUmlnaHRzLVVzZXJwYWdlL2NvbXBvbmVudHMvcmVhY3QudHN4IiwgInNyYy9NYXJrUmlnaHRzLVVzZXJwYWdlL21vZHVsZXMvYXBwZW5kSWNvbi50c3giLCAic3JjL01hcmtSaWdodHMtVXNlcnBhZ2UvbW9kdWxlcy9nZXRQZXJtaXNzaW9ucy50cyIsICJzcmMvTWFya1JpZ2h0cy1Vc2VycGFnZS9tb2R1bGVzL2kxOG4udHMiLCAic3JjL01hcmtSaWdodHMtVXNlcnBhZ2UvTWFya1JpZ2h0cy1Vc2VycGFnZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcIm1vdW50UG9pbnRTZWxlY3RvclwiOiBcIiNmb290ZXItaW5mbywucGFnZS1pbmZvXCIsXG5cdFwidXNlck5hbWVTcGFjZU51bWJlclwiOiAyLFxuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImNvbnN0IFNZU1RFTV9TQ1JJUFRfTElTVDogc3RyaW5nW10gPSBbXG5cdCfmu6XnlKjov4fmu6TlmagnLFxuXHQnRXhhbXBsZScsXG5cdCdFeHRlcm5hbCBjb250cmlidXRvcnMnLFxuXHQnTWFpbnRlbmFuY2Ugc2NyaXB0Jyxcblx0J01lZGlhV2lraSBkZWZhdWx0Jyxcblx0J01lZGlhV2lraSBtZXNzYWdlIGRlbGl2ZXJ5Jyxcblx0J05ldyB1c2VyIHBhZ2UnLFxuXTtcbmNvbnN0IFdFQk1BU1RFUl9MSVNUOiBzdHJpbmdbXSA9IFsnV2ViTWFzdGVyJywgJ1FpdXdlbiddO1xuXG5leHBvcnQge1NZU1RFTV9TQ1JJUFRfTElTVCwgV0VCTUFTVEVSX0xJU1R9O1xuIiwgImltcG9ydCBSZWFjdCwge1JlYWN0RWxlbWVudH0gZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IHR5cGUge1VzZXJSaWdodHN9IGZyb20gJ34vTWFya1JpZ2h0cy9tb2R1bGVzL3R5cGVzJztcblxuaW50ZXJmYWNlIEZvb3Rlck5vdGljZVByb3BzIHtcblx0c3BhbkNsYXNzOiBzdHJpbmc7XG5cdGNoaWxkcmVuPzogUmVhY3RFbGVtZW50O1xufVxuXG5jb25zdCBGb290ZXJOb3RpY2UgPSAoe3NwYW5DbGFzcywgY2hpbGRyZW4gPSA8PjwvPn06IEZvb3Rlck5vdGljZVByb3BzKSA9PiB7XG5cdGNvbnN0IHtza2lufSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgY2xhc3NOYW1lcyA9IFsnZ2FkZ2V0LW1hcmtyaWdodHNfdXNlcnBhZ2UnLCBgZ2FkZ2V0LW1hcmtyaWdodHNfdXNlcnBhZ2VfXyR7c3BhbkNsYXNzfWBdO1xuXG5cdGlmIChza2luID09PSAnY2l0aXplbicpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPXtbLi4uY2xhc3NOYW1lcywgJ3BhZ2UtaW5mb19faXRlbScsICdjaXRpemVuLWZvb3Rlcl9fcGFnZWluZm8taXRlbScsICdub3ByaW50J119PlxuXHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0KTtcblx0fSBlbHNlIGlmIChbJ2dvbmdiaScsICd2ZWN0b3InLCAndmVjdG9yLTIwMjInXS5pbmNsdWRlcyhza2luKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCNmb290ZXItaW5mbycpKSB7XG5cdFx0cmV0dXJuIDxsaSBjbGFzc05hbWU9e1suLi5jbGFzc05hbWVzLCAnbm9wcmludCddfT57Y2hpbGRyZW59PC9saT47XG5cdH1cblxuXHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9e1suLi5jbGFzc05hbWVzLCAnbm9wcmludCddfT57Y2hpbGRyZW59PC9kaXY+O1xufTtcblxuaW50ZXJmYWNlIEluZGljYXRvclByb3BzIHtcblx0aW5kaWNhdG9yVGV4dDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRzcGFuQ2xhc3M6IFVzZXJSaWdodHMgfCAndW5rbm93bic7XG59XG5cbmNvbnN0IEluZGljYXRvciA9ICh7aW5kaWNhdG9yVGV4dCwgc3BhbkNsYXNzfTogSW5kaWNhdG9yUHJvcHMpID0+IHtcblx0aWYgKCFpbmRpY2F0b3JUZXh0KSB7XG5cdFx0cmV0dXJuIDw+PC8+O1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PHNwYW5cblx0XHRcdFx0Y2xhc3NOYW1lPXtbJ2dhZGdldC1tYXJrcmlnaHRzX3VzZXJwYWdlX19pY29uJywgYGdhZGdldC1tYXJrcmlnaHRzX3VzZXJwYWdlX19pY29uX18ke3NwYW5DbGFzc31gXX1cblx0XHRcdFx0dGl0bGU9e2luZGljYXRvclRleHR9XG5cdFx0XHQvPlxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZ2FkZ2V0LW1hcmtyaWdodHNfdXNlcnBhZ2VfX3RleHRcIj57aW5kaWNhdG9yVGV4dH08L3NwYW4+XG5cdFx0PC8+XG5cdCk7XG59O1xuXG5jb25zdCBGb290ZXJJY29uID0gKHtzcGFuQ2xhc3MsIGluZGljYXRvclRleHR9OiBJbmRpY2F0b3JQcm9wcykgPT4gKFxuXHQ8Rm9vdGVyTm90aWNlIHNwYW5DbGFzcz17c3BhbkNsYXNzfT5cblx0XHQ8SW5kaWNhdG9yIGluZGljYXRvclRleHQ9e2luZGljYXRvclRleHR9IHNwYW5DbGFzcz17c3BhbkNsYXNzfSAvPlxuXHQ8L0Zvb3Rlck5vdGljZT5cbik7XG5cbmV4cG9ydCB7Rm9vdGVySWNvbiwgdHlwZSBJbmRpY2F0b3JQcm9wc307XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtGb290ZXJJY29uLCB0eXBlIEluZGljYXRvclByb3BzfSBmcm9tICcuLi9jb21wb25lbnRzL3JlYWN0JztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5cbmNvbnN0IGFwcGVuZEljb24gPSAoe2luZGljYXRvclRleHQsIHNwYW5DbGFzc306IEluZGljYXRvclByb3BzKTogdm9pZCA9PiB7XG5cdGlmIChzcGFuQ2xhc3MgPT09ICd1bmtub3duJyB8fCAhaW5kaWNhdG9yVGV4dCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IG1vdW50UG9pbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihPUFRJT05TLm1vdW50UG9pbnRTZWxlY3Rvcik7XG5cdGlmICghbW91bnRQb2ludCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG1vdW50UG9pbnQucHJlcGVuZCg8Rm9vdGVySWNvbiBzcGFuQ2xhc3M9e3NwYW5DbGFzc30gaW5kaWNhdG9yVGV4dD17aW5kaWNhdG9yVGV4dH0gLz4pO1xufTtcblxuZXhwb3J0IHthcHBlbmRJY29ufTtcbiIsICJpbXBvcnQge1NZU1RFTV9TQ1JJUFRfTElTVCwgV0VCTUFTVEVSX0xJU1R9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHR5cGUge1VzZXJSaWdodHN9IGZyb20gJ34vTWFya1JpZ2h0cy9tb2R1bGVzL3R5cGVzJztcbmltcG9ydCB7YXBwZW5kSWNvbn0gZnJvbSAnLi9hcHBlbmRJY29uJztcbmltcG9ydCB7Z2V0TG9jYWxVc2VyR3JvdXBzfSBmcm9tICdleHQuZ2FkZ2V0Lk1hcmtSaWdodHMnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHt1bmlxdWVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgZ2V0UGVybWlzc2lvbnMgPSBhc3luYyAod2dSZWxldmFudFVzZXJOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCBsb2NhbEdyb3Vwc01hcCA9IGF3YWl0IGdldExvY2FsVXNlckdyb3Vwcyhbd2dSZWxldmFudFVzZXJOYW1lXSk7XG5cdFx0Y29uc3QgbG9jYWxHcm91cHMgPSBsb2NhbEdyb3Vwc01hcFt3Z1JlbGV2YW50VXNlck5hbWVdID8/IFtdO1xuXG5cdFx0Y29uc3QgZ3JvdXBzID0gdW5pcXVlQXJyYXkoWy4uLmxvY2FsR3JvdXBzXSkuZmlsdGVyKChlbGVtZW50KSA9PiB7XG5cdFx0XHQvLyBEbyBub3Qgc2hvdyBpbXBsaWNpdCBncm91cHMuIEJvdHMgQWxyZWFkeSBzaG93biBpbiBHZW9Mb2NhdGlvblZpZXdlclxuXHRcdFx0cmV0dXJuICFbJyonLCAndXNlcicsICdhdXRvY29uZmlybWVkJywgJ3JucnN2ZXJpZnktY29uZmlybWVkJywgJ2JvdCddLmluY2x1ZGVzKGVsZW1lbnQpO1xuXHRcdH0pO1xuXG5cdFx0aWYgKFNZU1RFTV9TQ1JJUFRfTElTVC5pbmNsdWRlcyh3Z1JlbGV2YW50VXNlck5hbWUpKSB7XG5cdFx0XHQvLyBBbHJlYWR5IHNob3duIGluIEdlb0xvY2F0aW9uVmlld2VyXG5cdFx0fSBlbHNlIGlmIChXRUJNQVNURVJfTElTVC5pbmNsdWRlcyh3Z1JlbGV2YW50VXNlck5hbWUpKSB7XG5cdFx0XHRhcHBlbmRJY29uKHtpbmRpY2F0b3JUZXh0OiBnZXRNZXNzYWdlKCd3ZWJtYXN0ZXInKSwgc3BhbkNsYXNzOiAnd2VibWFzdGVyJ30pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKGNvbnN0IGdyb3VwIG9mIGdyb3Vwcykge1xuXHRcdFx0XHRhcHBlbmRJY29uKHtpbmRpY2F0b3JUZXh0OiBnZXRNZXNzYWdlKGdyb3VwIGFzIFVzZXJSaWdodHMpLCBzcGFuQ2xhc3M6IGdyb3VwIGFzIFVzZXJSaWdodHN9KTtcblx0XHRcdH1cblx0XHR9XG5cdH0gY2F0Y2gge31cbn07XG5cbmV4cG9ydCB7Z2V0UGVybWlzc2lvbnN9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHR3ZWJtYXN0ZXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnV2ViTWFzdGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ermemVvycsXG5cdFx0XHQnemgtaGFudCc6ICfnq5nplbcnLFxuXHRcdH0pLFxuXHRcdHJlc3BvbnNpYmxlb3BlcmF0b3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUmVzcG9uc2libGUgT3BlcmF0b3InLFxuXHRcdFx0J3poLWhhbnMnOiAn6LSj5Lu76L+Q6JClJyxcblx0XHRcdCd6aC1oYW50JzogJ+iyrOS7u+mBi+eHnycsXG5cdFx0fSksXG5cdFx0c3Rld2FyZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTdGV3YXJkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aho+ahiOeQhuS6i+WRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfmqpTmoYjnkIbkuovlk6EnLFxuXHRcdH0pLFxuXHRcdGNoZWNrdXNlcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDaGVja1VzZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn55So5oi35p+l5qC4Jyxcblx0XHRcdCd6aC1oYW50JzogJ+eUqOaItuafpeaguCcsXG5cdFx0fSksXG5cdFx0c3VwcHJlc3M6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnT3ZlcnNpZ2h0ZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn55uR552j5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+ebo+edo+WToScsXG5cdFx0fSksXG5cdFx0c3lzb3A6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU3lzT3AnLFxuXHRcdFx0J3poLWhhbnMnOiAn566h55CG5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+euoeeQhuWToScsXG5cdFx0fSksXG5cdFx0J2ludGVyZmFjZS1hZG1pbic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSW50ZXJmYWNlIEFkbWluaXN0cmF0b3InLFxuXHRcdFx0J3poLWhhbnMnOiAn55WM6Z2i566h55CG5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+S7i+mdoueuoeeQhuWToScsXG5cdFx0fSksXG5cdFx0dGVtcGxhdGVlZGl0b3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGVtcGxhdGUgRWRpdG9yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aooeadv+e8lui+keWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfmqKHmnb/nt6jovK/lk6EnLFxuXHRcdH0pLFxuXHRcdGltcG9ydGVyOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ltcG9ydGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WvvOWFpeiAhScsXG5cdFx0XHQnemgtaGFudCc6ICfljK/lhaXogIUnLFxuXHRcdH0pLFxuXHRcdHBhdHJvbGxlcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQYXRyb2xsZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5beh5p+l5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3oeafpeWToScsXG5cdFx0fSksXG5cdFx0YXV0b3BhdHJvbGxlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdHb29kIEVkaXRvcicsXG5cdFx0XHQnemgtaGFucyc6ICfkvJjotKjnvJbovpHogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5YSq6LOq57eo6Lyv6ICFJyxcblx0XHR9KSxcblx0XHRldmVudHNwb25zb3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRXZlbnQgU3BvbnNvcicsXG5cdFx0XHQnemgtaGFucyc6ICfmtLvliqjnu4Tnu4fogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5rS75YuV57WE57mU6ICFJyxcblx0XHR9KSxcblx0XHQnbWFzc21lc3NhZ2Utc2VuZGVyJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdNYXNzTWVzc2FnZSBzZW5kZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5aSn6YeP5raI5oGv5Y+R6YCB6ICFJyxcblx0XHRcdCd6aC1oYW50JzogJ+Wkp+mHj+ioiuaBr+WCs+mAgeiAhScsXG5cdFx0fSksXG5cdFx0Y29uZmlybWVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvbmZpcm1lZCB1c2VyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ehruiupOeUqOaItycsXG5cdFx0XHQnemgtaGFudCc6ICfnorroqo3nlKjmiLYnLFxuXHRcdH0pLFxuXHRcdGF1dG9jb25maXJtZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQXV0by1jb25maXJtZWQgdXNlcicsXG5cdFx0XHQnemgtaGFucyc6ICfoh6rliqjnoa7orqTnlKjmiLcnLFxuXHRcdFx0J3poLWhhbnQnOiAn6Ieq5YuV56K66KqN55So5oi2Jyxcblx0XHR9KSxcblx0XHQncm5yc3ZlcmlmeS1leGVtcHQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0V4ZW1wdGVkIGZyb20gcmVhbC1uYW1lIHZlcmlmaWNhdGlvbicsXG5cdFx0XHQnemgtaGFucyc6ICflrp7lkI3liLbpqozor4HosYHlhY0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5a+m5ZCN5Yi26amX6K2J6LGB5YWNJyxcblx0XHR9KSxcblx0XHRib3Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQm90Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+acuuWZqOS6uicsXG5cdFx0XHQnemgtaGFudCc6ICfmqZ/morDkuronLFxuXHRcdH0pLFxuXHRcdGZsb29kOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Zsb29kZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5py65Zmo55So5oi3Jyxcblx0XHRcdCd6aC1oYW50JzogJ+apn+aisOeUqOaIticsXG5cdFx0fSksXG5cdFx0J2lwYmxvY2stZXhlbXB0JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFeGVtcHRlZCBmcm9tIElQIGJsb2NrcycsXG5cdFx0XHQnemgtaGFucyc6ICdJUOWwgeemgeixgeWFjScsXG5cdFx0XHQnemgtaGFudCc6ICdJUOWwgemOluixgeWFjScsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZXRQZXJtaXNzaW9uc30gZnJvbSAnLi9tb2R1bGVzL2dldFBlcm1pc3Npb25zJztcblxuKGZ1bmN0aW9uIG1hcmtSaWdodHNVc2VyUGFnZSgpOiB2b2lkIHtcblx0Y29uc3Qge3dnQWN0aW9uLCB3Z05hbWVzcGFjZU51bWJlciwgd2dQYWdlTmFtZSwgd2dSZWxldmFudFVzZXJOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKCF3Z1JlbGV2YW50VXNlck5hbWUgfHwgISh3Z05hbWVzcGFjZU51bWJlciA9PT0gT1BUSU9OUy51c2VyTmFtZVNwYWNlTnVtYmVyKSB8fCAhKHdnQWN0aW9uID09PSAndmlldycpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKG13LnV0aWwuaXNJUHY0QWRkcmVzcyh3Z1JlbGV2YW50VXNlck5hbWUpIHx8IG13LnV0aWwuaXNJUHY2QWRkcmVzcyh3Z1JlbGV2YW50VXNlck5hbWUpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcmVsZXZhbnRVc2VyUGFnZU5hbWU6IHN0cmluZyA9IG5ldyBtdy5UaXRsZSh3Z1JlbGV2YW50VXNlck5hbWUsIE9QVElPTlMudXNlck5hbWVTcGFjZU51bWJlcikudG9UZXh0KCk7XG5cdGNvbnN0IHBhZ2VOYW1lOiBzdHJpbmcgPSBuZXcgbXcuVGl0bGUod2dQYWdlTmFtZSkudG9UZXh0KCk7XG5cdGlmIChwYWdlTmFtZSAhPT0gcmVsZXZhbnRVc2VyUGFnZU5hbWUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR2b2lkIGdldFBlcm1pc3Npb25zKHdnUmVsZXZhbnRVc2VyTmFtZSk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEscUJBQXNCO0FBQ3RCLElBQUFDLHNCQUF1Qjs7QUNGeEIsSUFBTUMscUJBQStCLENBQ3BDLFNBQ0EsV0FDQSx5QkFDQSxzQkFDQSxxQkFDQSw4QkFDQSxlQUFBO0FBRUQsSUFBTUMsaUJBQTJCLENBQUMsYUFBYSxRQUFROztBQ1R2RCxJQUFBQyxvQkFBa0NDLFFBQUFDLFFBQUEsZ0JBQUEsR0FBQSxDQUFBO0FBUWxDLElBQU1DLGVBQWVBLENBQUM7RUFBQ0M7RUFBV0MsV0FBV0wsa0NBQUFNLFFBQUFDLGNBQUFQLGtCQUFBTSxRQUFBRSxVQUFBLElBQUU7QUFBRyxNQUF5QjtBQUMxRSxRQUFNO0lBQUNDO0VBQUksSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUM3QixRQUFNQyxhQUFhLENBQUMsOEJBQUEsK0JBQUFDLE9BQTZEVixTQUFTLENBQUE7QUFFMUYsTUFBSUssU0FBUyxXQUFXO0FBQ3ZCLFdBQ0NULGtDQUFBTSxRQUFBQyxjQUFDLFdBQUE7TUFBUVEsV0FBVyxDQUFDLEdBQUdGLFlBQVksbUJBQW1CLGlDQUFpQyxTQUFTO0lBQUEsR0FDL0ZSLFFBQ0Y7RUFFRixXQUFXLENBQUMsVUFBVSxVQUFVLGFBQWEsRUFBRVcsU0FBU1AsSUFBSSxLQUFLUSxTQUFTQyxjQUFjLGdCQUFnQixHQUFHO0FBQzFHLFdBQU9sQixrQ0FBQU0sUUFBQUMsY0FBQyxNQUFBO01BQUdRLFdBQVcsQ0FBQyxHQUFHRixZQUFZLFNBQVM7SUFBQSxHQUFJUixRQUFTO0VBQzdEO0FBRUEsU0FBT0wsa0NBQUFNLFFBQUFDLGNBQUMsT0FBQTtJQUFJUSxXQUFXLENBQUMsR0FBR0YsWUFBWSxTQUFTO0VBQUEsR0FBSVIsUUFBUztBQUM5RDtBQU9BLElBQU1jLFlBQVlBLENBQUM7RUFBQ0M7RUFBZWhCO0FBQVMsTUFBc0I7QUFDakUsTUFBSSxDQUFDZ0IsZUFBZTtBQUNuQixXQUFPcEIsa0NBQUFNLFFBQUFDLGNBQUFQLGtCQUFBTSxRQUFBRSxVQUFBLElBQUU7RUFDVjtBQUVBLFNBQ0NSLGtDQUFBTSxRQUFBQyxjQUFBUCxrQkFBQU0sUUFBQUUsVUFBQSxNQUNDUixrQ0FBQU0sUUFBQUMsY0FBQyxRQUFBO0lBQ0FRLFdBQVcsQ0FBQyxvQ0FBQSxxQ0FBQUQsT0FBeUVWLFNBQVMsQ0FBQTtJQUM5RmlCLE9BQU9EO0VBQUEsQ0FDUixHQUNBcEIsa0NBQUFNLFFBQUFDLGNBQUMsUUFBQTtJQUFLUSxXQUFVO0VBQUEsR0FBb0NLLGFBQWMsQ0FDbkU7QUFFRjtBQUVBLElBQU1FLGFBQWFBLENBQUM7RUFBQ2xCO0VBQVdnQjtBQUFhLE1BQzVDcEIsa0NBQUFNLFFBQUFDLGNBQUNKLGNBQUE7RUFBYUM7QUFBQSxHQUNiSixrQ0FBQU0sUUFBQUMsY0FBQ1ksV0FBQTtFQUFVQztFQUE4QmhCO0FBQUEsQ0FBc0IsQ0FDaEU7O0FDL0NELElBQUFtQixxQkFBa0J0QixRQUFBQyxRQUFBLGdCQUFBLEdBQUEsQ0FBQTtBQUVsQixJQUFNc0IsYUFBYUEsQ0FBQztFQUFDSjtFQUFlaEI7QUFBUyxNQUE0QjtBQUN4RSxNQUFJQSxjQUFjLGFBQWEsQ0FBQ2dCLGVBQWU7QUFDOUM7RUFDRDtBQUVBLFFBQU1LLGFBQWFSLFNBQVNDLGNBQW1DdEIsa0JBQWtCO0FBQ2pGLE1BQUksQ0FBQzZCLFlBQVk7QUFDaEI7RUFDRDtBQUVBQSxhQUFXQyxRQUFRSCxtQ0FBQWpCLFFBQUFDLGNBQUNlLFlBQUE7SUFBV2xCO0lBQXNCZ0I7RUFBQSxDQUE4QixDQUFFO0FBQ3RGOztBQ1pBLElBQUFPLHFCQUFpQ3pCLFFBQUEsdUJBQUE7O0FDSGpDLElBQUEwQixxQkFBdUIxQixRQUFBLGlCQUFBO0FBRXZCLElBQU0yQixrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxZQUFBLEdBQVdGLG1CQUFBRyxVQUFTO01BQ25CQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLHNCQUFBLEdBQXFCTCxtQkFBQUcsVUFBUztNQUM3QkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERSxVQUFBLEdBQVNOLG1CQUFBRyxVQUFTO01BQ2pCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RHLFlBQUEsR0FBV1AsbUJBQUFHLFVBQVM7TUFDbkJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREksV0FBQSxHQUFVUixtQkFBQUcsVUFBUztNQUNsQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNESyxRQUFBLEdBQU9ULG1CQUFBRyxVQUFTO01BQ2ZDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCxvQkFBQSxHQUFtQkosbUJBQUFHLFVBQVM7TUFDM0JDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRE0saUJBQUEsR0FBZ0JWLG1CQUFBRyxVQUFTO01BQ3hCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RPLFdBQUEsR0FBVVgsbUJBQUFHLFVBQVM7TUFDbEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRFEsWUFBQSxHQUFXWixtQkFBQUcsVUFBUztNQUNuQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEUyxnQkFBQSxHQUFlYixtQkFBQUcsVUFBUztNQUN2QkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEVSxlQUFBLEdBQWNkLG1CQUFBRyxVQUFTO01BQ3RCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0QsdUJBQUEsR0FBc0JKLG1CQUFBRyxVQUFTO01BQzlCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RXLFlBQUEsR0FBV2YsbUJBQUFHLFVBQVM7TUFDbkJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRFksZ0JBQUEsR0FBZWhCLG1CQUFBRyxVQUFTO01BQ3ZCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0Qsc0JBQUEsR0FBcUJKLG1CQUFBRyxVQUFTO01BQzdCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RhLE1BQUEsR0FBS2pCLG1CQUFBRyxVQUFTO01BQ2JDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRGMsUUFBQSxHQUFPbEIsbUJBQUFHLFVBQVM7TUFDZkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELG1CQUFBLEdBQWtCSixtQkFBQUcsVUFBUztNQUMxQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNZSxlQUFlbEIsZ0JBQWdCO0FBRXJDLElBQU1tQixhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBRHJHQSxJQUFBQyxxQkFBMEJoRCxRQUFBLGlCQUFBO0FBRTFCLElBQU1pRCxpQkFBQSw0QkFBQTtBQUFBLE1BQUFDLE9BQUFDLGtCQUFpQixXQUFPQyxvQkFBOEM7QUFDM0UsUUFBSTtBQUFBLFVBQUFDO0FBQ0gsWUFBTUMsaUJBQUEsT0FBaUIsR0FBTTdCLG1CQUFBOEIsb0JBQW1CLENBQUNILGtCQUFrQixDQUFDO0FBQ3BFLFlBQU1JLGVBQUFILHdCQUFjQyxlQUFlRixrQkFBa0IsT0FBQSxRQUFBQywwQkFBQSxTQUFBQSx3QkFBSyxDQUFBO0FBRTFELFlBQU1JLFVBQUEsR0FBU1QsbUJBQUFVLGFBQVksQ0FBQyxHQUFHRixXQUFXLENBQUMsRUFBRUcsT0FBUUMsYUFBWTtBQUVoRSxlQUFPLENBQUMsQ0FBQyxLQUFLLFFBQVEsaUJBQWlCLHdCQUF3QixLQUFLLEVBQUU5QyxTQUFTOEMsT0FBTztNQUN2RixDQUFDO0FBRUQsVUFBSWhFLG1CQUFtQmtCLFNBQVNzQyxrQkFBa0IsR0FBRztNQUVyRCxXQUFXdkQsZUFBZWlCLFNBQVNzQyxrQkFBa0IsR0FBRztBQUN2RDlCLG1CQUFXO1VBQUNKLGVBQWU0QixXQUFXLFdBQVc7VUFBRzVDLFdBQVc7UUFBVyxDQUFDO01BQzVFLE9BQU87QUFBQSxZQUFBMkQsYUFBQUMsMkJBQ2NMLE1BQUEsR0FBQU07QUFBQSxZQUFBO0FBQXBCLGVBQUFGLFdBQUFHLEVBQUEsR0FBQSxFQUFBRCxTQUFBRixXQUFBSSxFQUFBLEdBQUFDLFFBQTRCO0FBQUEsa0JBQWpCQyxRQUFBSixPQUFBSztBQUNWOUMsdUJBQVc7Y0FBQ0osZUFBZTRCLFdBQVdxQixLQUFtQjtjQUFHakUsV0FBV2lFO1lBQW1CLENBQUM7VUFDNUY7UUFBQSxTQUFBRSxLQUFBO0FBQUFSLHFCQUFBUyxFQUFBRCxHQUFBO1FBQUEsVUFBQTtBQUFBUixxQkFBQVUsRUFBQTtRQUFBO01BQ0Q7SUFDRCxRQUFRO0lBQUM7RUFDVixDQUFBO0FBQUEsU0FBQSxTQXBCTXRCLGdCQUFBdUIsSUFBQTtBQUFBLFdBQUF0QixLQUFBdUIsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxHQUFBOztDRUpMLFNBQVNDLHFCQUEyQjtBQUNwQyxRQUFNO0lBQUNDO0lBQVVDO0lBQW1CQztJQUFZMUI7RUFBa0IsSUFBSTVDLEdBQUdDLE9BQU9DLElBQUk7QUFDcEYsTUFBSSxDQUFDMEMsc0JBQXNCLEVBQUV5QixzQkFBOEJsRix3QkFBd0IsRUFBRWlGLGFBQWEsU0FBUztBQUMxRztFQUNEO0FBRUEsTUFBSXBFLEdBQUd1RSxLQUFLQyxjQUFjNUIsa0JBQWtCLEtBQUs1QyxHQUFHdUUsS0FBS0UsY0FBYzdCLGtCQUFrQixHQUFHO0FBQzNGO0VBQ0Q7QUFFQSxRQUFNOEIsdUJBQStCLElBQUkxRSxHQUFHMkUsTUFBTS9CLG9CQUE0QnpELG1CQUFtQixFQUFFeUYsT0FBTztBQUMxRyxRQUFNQyxXQUFtQixJQUFJN0UsR0FBRzJFLE1BQU1MLFVBQVUsRUFBRU0sT0FBTztBQUN6RCxNQUFJQyxhQUFhSCxzQkFBc0I7QUFDdEM7RUFDRDtBQUVBLE9BQUtqQyxlQUFlRyxrQkFBa0I7QUFDdkMsR0FBRzsiLAogICJuYW1lcyI6IFsibW91bnRQb2ludFNlbGVjdG9yIiwgInVzZXJOYW1lU3BhY2VOdW1iZXIiLCAiU1lTVEVNX1NDUklQVF9MSVNUIiwgIldFQk1BU1RFUl9MSVNUIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJGb290ZXJOb3RpY2UiLCAic3BhbkNsYXNzIiwgImNoaWxkcmVuIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJGcmFnbWVudCIsICJza2luIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiY2xhc3NOYW1lcyIsICJjb25jYXQiLCAiY2xhc3NOYW1lIiwgImluY2x1ZGVzIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiSW5kaWNhdG9yIiwgImluZGljYXRvclRleHQiLCAidGl0bGUiLCAiRm9vdGVySWNvbiIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiYXBwZW5kSWNvbiIsICJtb3VudFBvaW50IiwgInByZXBlbmQiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJnZXRJMThuTWVzc2FnZXMiLCAid2VibWFzdGVyIiwgImxvY2FsaXplIiwgImVuIiwgInJlc3BvbnNpYmxlb3BlcmF0b3IiLCAic3Rld2FyZCIsICJjaGVja3VzZXIiLCAic3VwcHJlc3MiLCAic3lzb3AiLCAidGVtcGxhdGVlZGl0b3IiLCAiaW1wb3J0ZXIiLCAicGF0cm9sbGVyIiwgImF1dG9wYXRyb2xsZWQiLCAiZXZlbnRzcG9uc29yIiwgImNvbmZpcm1lZCIsICJhdXRvY29uZmlybWVkIiwgImJvdCIsICJmbG9vZCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaW1wb3J0X2V4dF9nYWRnZXQ1IiwgImdldFBlcm1pc3Npb25zIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAid2dSZWxldmFudFVzZXJOYW1lIiwgIl9sb2NhbEdyb3Vwc01hcCR3Z1JlbCIsICJsb2NhbEdyb3Vwc01hcCIsICJnZXRMb2NhbFVzZXJHcm91cHMiLCAibG9jYWxHcm91cHMiLCAiZ3JvdXBzIiwgInVuaXF1ZUFycmF5IiwgImZpbHRlciIsICJlbGVtZW50IiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgImdyb3VwIiwgInZhbHVlIiwgImVyciIsICJlIiwgImYiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgIm1hcmtSaWdodHNVc2VyUGFnZSIsICJ3Z0FjdGlvbiIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z1BhZ2VOYW1lIiwgInV0aWwiLCAiaXNJUHY0QWRkcmVzcyIsICJpc0lQdjZBZGRyZXNzIiwgInJlbGV2YW50VXNlclBhZ2VOYW1lIiwgIlRpdGxlIiwgInRvVGV4dCIsICJwYWdlTmFtZSJdCn0K
