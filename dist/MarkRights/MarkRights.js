/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-MarkRights.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/MarkRights}
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

// dist/MarkRights/MarkRights.js
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
//! src/MarkRights/MarkRights.ts
var MarkRights_exports = {};
__export(MarkRights_exports, {
  getLocalUserGroups: () => getLocalUserGroups,
  queryUserGroups: () => queryUserGroups
});
module.exports = __toCommonJS(MarkRights_exports);
//! src/MarkRights/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    webmaster: (0, import_ext_gadget.localize)({
      en: "Webmaster",
      "zh-hans": "站长",
      "zh-hant": "站長"
    }),
    responsibleoperator: (0, import_ext_gadget.localize)({
      en: "Responsible Operator",
      "zh-hans": "责任运营",
      "zh-hant": "責任運營"
    }),
    steward: (0, import_ext_gadget.localize)({
      en: "Steward",
      "zh-hans": "档案理事员",
      "zh-hant": "檔案理事員"
    }),
    "honorary-maintainer": (0, import_ext_gadget.localize)({
      en: "Honorary Maintainer",
      "zh-hans": "荣誉维护员",
      "zh-hant": "榮譽維護員"
    }),
    checkuser: (0, import_ext_gadget.localize)({
      en: "CheckUser",
      "zh-hans": "用户查核",
      "zh-hant": "用戶查核"
    }),
    suppress: (0, import_ext_gadget.localize)({
      en: "Oversighter",
      "zh-hans": "监督员",
      "zh-hant": "監督員"
    }),
    sysop: (0, import_ext_gadget.localize)({
      en: "SysOp",
      "zh-hans": "管理员",
      "zh-hant": "管理員"
    }),
    "interface-admin": (0, import_ext_gadget.localize)({
      en: "Interface Administrator",
      "zh-hans": "界面管理员",
      "zh-hant": "介面管理員"
    }),
    templateeditor: (0, import_ext_gadget.localize)({
      en: "Template Editor",
      "zh-hans": "模板编辑员",
      "zh-hant": "模板編輯員"
    }),
    importer: (0, import_ext_gadget.localize)({
      en: "Importer",
      "zh-hans": "导入者",
      "zh-hant": "匯入者"
    }),
    patroller: (0, import_ext_gadget.localize)({
      en: "Patroller",
      "zh-hans": "巡查员",
      "zh-hant": "巡查員"
    }),
    autopatrolled: (0, import_ext_gadget.localize)({
      en: "Good Editor",
      "zh-hans": "优秀编辑者",
      "zh-hant": "優秀編輯者"
    }),
    eventsponsor: (0, import_ext_gadget.localize)({
      en: "Event Sponsor",
      "zh-hans": "活动组织者",
      "zh-hant": "活動組織者"
    }),
    "massmessage-sender": (0, import_ext_gadget.localize)({
      en: "MassMessage sender",
      "zh-hans": "大量消息发送者",
      "zh-hant": "大量訊息傳送者"
    }),
    confirmed: (0, import_ext_gadget.localize)({
      en: "Confirmed user",
      "zh-hans": "确认用户",
      "zh-hant": "確認用戶"
    }),
    autoconfirmed: (0, import_ext_gadget.localize)({
      en: "Auto-confirmed user",
      "zh-hans": "自动确认用户",
      "zh-hant": "自動確認用戶"
    }),
    bot: (0, import_ext_gadget.localize)({
      en: "Bot",
      "zh-hans": "机器人",
      "zh-hant": "機械人"
    }),
    flood: (0, import_ext_gadget.localize)({
      en: "Flooder",
      "zh-hans": "机器用户",
      "zh-hant": "機械用戶"
    }),
    "rnrsverify-exempt": (0, import_ext_gadget.localize)({
      en: "Exempted from real-name verification",
      "zh-hans": "实名制验证豁免",
      "zh-hant": "實名制驗證豁免"
    }),
    "ipblock-exempt": (0, import_ext_gadget.localize)({
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
//! src/MarkRights/modules/util/appendUserRightsMark.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var appendUserRightsMark = (userLinks, userGroups) => {
  for (var _i = 0, _Object$entries = Object.entries(userLinks); _i < _Object$entries.length; _i++) {
    var _userGroups$username;
    const [username, $links] = _Object$entries[_i];
    userGroups !== null && userGroups !== void 0 ? userGroups : userGroups = {};
    const groups = (0, import_ext_gadget2.uniqueArray)((_userGroups$username = userGroups[username]) !== null && _userGroups$username !== void 0 ? _userGroups$username : []);
    var _iterator2 = _createForOfIteratorHelper($links), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        const $element = _step2.value;
        let $sups;
        if ($element.parents("li").find(".gadgets-markrights").length) {
          $sups = $element.siblings(".gadgets-markrights").eq(0);
        } else if ($element.siblings(".gadgets-markrights").length) {
          $sups = $element.parents("li").find(".gadgets-markrights").eq(0);
        } else {
          $sups = $("<span>").addClass("gadgets-markrights");
          $element.after($sups);
        }
        var _iterator3 = _createForOfIteratorHelper(groups), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            const group = _step3.value;
            const className = "gadgets-markrights__".concat(group);
            if ($sups.find("sup").hasClass(className)) {
              continue;
            }
            $sups.append(
              // The following classes are used here:
              // * see ../types.d.ts
              // * for more information
              $("<sup>").addClass(className).attr({
                alt: getMessage(group),
                title: getMessage(group)
              })
            );
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
};
//! src/MarkRights/modules/util/generateUserLinks.ts
var generateUserLinks = ($content) => {
  const userLinks = {};
  const $elements = $content.find("a.mw-userlink:not(.mw-anonuserlink)");
  var _iterator4 = _createForOfIteratorHelper($elements), _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
      var _element$nextElementS, _element$previousElem, _element$textContent, _userLinks$user;
      const element = _step4.value;
      const parentLi = element.closest("li");
      if (parentLi !== null && parentLi !== void 0 && parentLi.querySelector(".gadgets-markrights")) {
        continue;
      }
      if ((_element$nextElementS = element.nextElementSibling) !== null && _element$nextElementS !== void 0 && _element$nextElementS.classList.contains("gadgets-markrights") || (_element$previousElem = element.previousElementSibling) !== null && _element$previousElem !== void 0 && _element$previousElem.classList.contains("gadgets-markrights")) {
        continue;
      }
      const user = (_element$textContent = element.textContent) === null || _element$textContent === void 0 ? void 0 : _element$textContent.toString();
      if (!user) {
        continue;
      }
      if (mw.util.isIPv4Address(user) || mw.util.isIPv6Address(user)) {
        continue;
      }
      const $element = $(element);
      (_userLinks$user = userLinks[user]) !== null && _userLinks$user !== void 0 ? _userLinks$user : userLinks[user] = [];
      userLinks[user][userLinks[user].length] = $element;
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return userLinks;
};
//! src/MarkRights/options.json
var storageKeyLocal = "ext.gadget.MarkRights_local-";
var version = 2.1;
//! src/MarkRights/modules/util/api.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var api = (0, import_ext_gadget3.initMwApi)("MarkRights/".concat(version));
//! src/MarkRights/modules/util/getUserGroups.ts
var queryUserGroups = /* @__PURE__ */ (function() {
  var _ref = _asyncToGenerator(function* (ususers) {
    const params = {
      ususers,
      action: "query",
      format: "json",
      formatversion: "2",
      list: "users",
      usprop: "groups",
      smaxage: 600,
      maxage: 600
    };
    const response = yield api.get(params);
    return response;
  });
  return function queryUserGroups2(_x) {
    return _ref.apply(this, arguments);
  };
})();
var getLocalUserGroups = /* @__PURE__ */ (function() {
  var _ref2 = _asyncToGenerator(function* (ususers) {
    const userGroups = {};
    ususers = ususers.filter((username) => {
      if (mw.storage.getObject(storageKeyLocal + username)) {
        userGroups[username] = mw.storage.getObject(storageKeyLocal + username);
      }
      return !Object.keys(userGroups).includes(username);
    });
    try {
      const response = yield queryUserGroups(ususers);
      const {
        users: queryUsers
      } = response["query"];
      var _iterator5 = _createForOfIteratorHelper(queryUsers), _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
          var _userGroups$name;
          const user = _step5.value;
          if (!(user !== null && user !== void 0 && user.name) || !(user !== null && user !== void 0 && user.groups)) {
            continue;
          }
          const {
            name,
            groups,
            implicitgroups
          } = user;
          (_userGroups$name = userGroups[name]) !== null && _userGroups$name !== void 0 ? _userGroups$name : userGroups[name] = [];
          userGroups[name] = [...userGroups[name], ...groups.filter((element) => {
            return element !== "*";
          }), ...(implicitgroups || []).filter((element) => {
            return element !== "*";
          })];
          mw.storage.setObject(storageKeyLocal + name, userGroups[name], 60 * 60);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    } catch (error) {
      console.error("[MarkRights] Ajax error:", error);
    }
    return userGroups;
  });
  return function getLocalUserGroups2(_x2) {
    return _ref2.apply(this, arguments);
  };
})();
//! src/MarkRights/modules/core.ts
var markUserRights = ($content) => {
  const userLinks = generateUserLinks($content);
  const users = Object.keys(userLinks);
  if (!users.length) {
    return;
  }
  const promises = [];
  while (users.length) {
    const ususers = users.splice(0, 25).filter((element) => {
      return !(mw.util.isIPv4Address(element) || mw.util.isIPv6Address(element));
    });
    if (!ususers.length) {
      continue;
    }
    promises[promises.length] = /* @__PURE__ */ _asyncToGenerator(function* () {
      let userGroups = {};
      try {
        userGroups = yield getLocalUserGroups(ususers);
      } catch (error) {
        console.error("[MarkRights] Ajax error:", error);
      }
      const batchUserLinks = {};
      var _iterator6 = _createForOfIteratorHelper(ususers), _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
          const username = _step6.value;
          if (userLinks[username]) {
            batchUserLinks[username] = userLinks[username];
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      appendUserRightsMark(batchUserLinks, userGroups);
    });
  }
  void _asyncToGenerator(function* () {
    for (var _i2 = 0, _promises = promises; _i2 < _promises.length; _i2++) {
      const promise = _promises[_i2];
      try {
        yield promise();
      } catch {
      }
    }
  })();
};
//! src/MarkRights/MarkRights.ts
mw.hook("wikipage.content").add(function markRights($content) {
  if ($content.attr("id") === "mw-content-text" || $content.hasClass("mw-changeslist")) {
    void markUserRights($content);
  }
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01hcmtSaWdodHMvTWFya1JpZ2h0cy50cyIsICJzcmMvTWFya1JpZ2h0cy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL01hcmtSaWdodHMvbW9kdWxlcy91dGlsL2FwcGVuZFVzZXJSaWdodHNNYXJrLnRzIiwgInNyYy9NYXJrUmlnaHRzL21vZHVsZXMvdXRpbC9nZW5lcmF0ZVVzZXJMaW5rcy50cyIsICJzcmMvTWFya1JpZ2h0cy9vcHRpb25zLmpzb24iLCAic3JjL01hcmtSaWdodHMvbW9kdWxlcy91dGlsL2FwaS50cyIsICJzcmMvTWFya1JpZ2h0cy9tb2R1bGVzL3V0aWwvZ2V0VXNlckdyb3Vwcy50cyIsICJzcmMvTWFya1JpZ2h0cy9tb2R1bGVzL2NvcmUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKlxuICogQGRlc2NyaXB0aW9uIOWcqOacgOi/keS/ruaUueOAgeebkeinhuWIl+ihqOOAgeadoeebruWOhuWPsuiusOW9leetieS9jee9ruS7peeJueauiuagvOW8j+aYvuekuuacieeJueauiuadg+mZkOeahOeUqOaIt1xuICovXG5pbXBvcnQge21hcmtVc2VyUmlnaHRzfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbm13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5hZGQoZnVuY3Rpb24gbWFya1JpZ2h0cygkY29udGVudCk6IHZvaWQge1xuXHRpZiAoJGNvbnRlbnQuYXR0cignaWQnKSA9PT0gJ213LWNvbnRlbnQtdGV4dCcgfHwgJGNvbnRlbnQuaGFzQ2xhc3MoJ213LWNoYW5nZXNsaXN0JykpIHtcblx0XHR2b2lkIG1hcmtVc2VyUmlnaHRzKCRjb250ZW50KTtcblx0fVxufSk7XG5cbmV4cG9ydCB7Z2V0TG9jYWxVc2VyR3JvdXBzLCBxdWVyeVVzZXJHcm91cHN9IGZyb20gJy4vbW9kdWxlcy91dGlsL2dldFVzZXJHcm91cHMnO1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHR3ZWJtYXN0ZXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnV2VibWFzdGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ermemVvycsXG5cdFx0XHQnemgtaGFudCc6ICfnq5nplbcnLFxuXHRcdH0pLFxuXHRcdHJlc3BvbnNpYmxlb3BlcmF0b3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUmVzcG9uc2libGUgT3BlcmF0b3InLFxuXHRcdFx0J3poLWhhbnMnOiAn6LSj5Lu76L+Q6JClJyxcblx0XHRcdCd6aC1oYW50JzogJ+iyrOS7u+mBi+eHnycsXG5cdFx0fSksXG5cdFx0c3Rld2FyZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTdGV3YXJkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aho+ahiOeQhuS6i+WRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfmqpTmoYjnkIbkuovlk6EnLFxuXHRcdH0pLFxuXHRcdCdob25vcmFyeS1tYWludGFpbmVyJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdIb25vcmFyeSBNYWludGFpbmVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+iNo+iqiee7tOaKpOWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfmpq7orb3ntq3orbflk6EnLFxuXHRcdH0pLFxuXHRcdGNoZWNrdXNlcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDaGVja1VzZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn55So5oi35p+l5qC4Jyxcblx0XHRcdCd6aC1oYW50JzogJ+eUqOaItuafpeaguCcsXG5cdFx0fSksXG5cdFx0c3VwcHJlc3M6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnT3ZlcnNpZ2h0ZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn55uR552j5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+ebo+edo+WToScsXG5cdFx0fSksXG5cdFx0c3lzb3A6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU3lzT3AnLFxuXHRcdFx0J3poLWhhbnMnOiAn566h55CG5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+euoeeQhuWToScsXG5cdFx0fSksXG5cdFx0J2ludGVyZmFjZS1hZG1pbic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSW50ZXJmYWNlIEFkbWluaXN0cmF0b3InLFxuXHRcdFx0J3poLWhhbnMnOiAn55WM6Z2i566h55CG5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+S7i+mdoueuoeeQhuWToScsXG5cdFx0fSksXG5cdFx0dGVtcGxhdGVlZGl0b3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGVtcGxhdGUgRWRpdG9yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aooeadv+e8lui+keWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfmqKHmnb/nt6jovK/lk6EnLFxuXHRcdH0pLFxuXHRcdGltcG9ydGVyOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ltcG9ydGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WvvOWFpeiAhScsXG5cdFx0XHQnemgtaGFudCc6ICfljK/lhaXogIUnLFxuXHRcdH0pLFxuXHRcdHBhdHJvbGxlcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQYXRyb2xsZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5beh5p+l5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3oeafpeWToScsXG5cdFx0fSksXG5cdFx0YXV0b3BhdHJvbGxlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdHb29kIEVkaXRvcicsXG5cdFx0XHQnemgtaGFucyc6ICfkvJjnp4DnvJbovpHogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5YSq56eA57eo6Lyv6ICFJyxcblx0XHR9KSxcblx0XHRldmVudHNwb25zb3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRXZlbnQgU3BvbnNvcicsXG5cdFx0XHQnemgtaGFucyc6ICfmtLvliqjnu4Tnu4fogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5rS75YuV57WE57mU6ICFJyxcblx0XHR9KSxcblx0XHQnbWFzc21lc3NhZ2Utc2VuZGVyJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdNYXNzTWVzc2FnZSBzZW5kZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5aSn6YeP5raI5oGv5Y+R6YCB6ICFJyxcblx0XHRcdCd6aC1oYW50JzogJ+Wkp+mHj+ioiuaBr+WCs+mAgeiAhScsXG5cdFx0fSksXG5cdFx0Y29uZmlybWVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvbmZpcm1lZCB1c2VyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ehruiupOeUqOaItycsXG5cdFx0XHQnemgtaGFudCc6ICfnorroqo3nlKjmiLYnLFxuXHRcdH0pLFxuXHRcdGF1dG9jb25maXJtZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQXV0by1jb25maXJtZWQgdXNlcicsXG5cdFx0XHQnemgtaGFucyc6ICfoh6rliqjnoa7orqTnlKjmiLcnLFxuXHRcdFx0J3poLWhhbnQnOiAn6Ieq5YuV56K66KqN55So5oi2Jyxcblx0XHR9KSxcblx0XHRib3Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQm90Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+acuuWZqOS6uicsXG5cdFx0XHQnemgtaGFudCc6ICfmqZ/morDkuronLFxuXHRcdH0pLFxuXHRcdGZsb29kOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Zsb29kZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5py65Zmo55So5oi3Jyxcblx0XHRcdCd6aC1oYW50JzogJ+apn+aisOeUqOaIticsXG5cdFx0fSksXG5cdFx0J3JucnN2ZXJpZnktZXhlbXB0JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFeGVtcHRlZCBmcm9tIHJlYWwtbmFtZSB2ZXJpZmljYXRpb24nLFxuXHRcdFx0J3poLWhhbnMnOiAn5a6e5ZCN5Yi26aqM6K+B6LGB5YWNJyxcblx0XHRcdCd6aC1oYW50JzogJ+WvpuWQjeWItumpl+itieixgeWFjScsXG5cdFx0fSksXG5cdFx0J2lwYmxvY2stZXhlbXB0JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFeGVtcHRlZCBmcm9tIElQIGJsb2NrcycsXG5cdFx0XHQnemgtaGFucyc6ICdJUOWwgeemgeixgeWFjScsXG5cdFx0XHQnemgtaGFudCc6ICdJUOWwgemOluixgeWFjScsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB0eXBlIHtVc2VyUmlnaHRzfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHt1bmlxdWVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBwZW5kVXNlclJpZ2h0c01hcmsgPSAoXG5cdHVzZXJMaW5rczogUmVjb3JkPHN0cmluZywgSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PltdPixcblx0dXNlckdyb3VwczogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+XG4pOiB2b2lkID0+IHtcblx0Zm9yIChjb25zdCBbdXNlcm5hbWUsICRsaW5rc10gb2YgT2JqZWN0LmVudHJpZXModXNlckxpbmtzKSkge1xuXHRcdHVzZXJHcm91cHMgPz89IHt9O1xuXHRcdGNvbnN0IGdyb3VwcyA9IHVuaXF1ZUFycmF5KHVzZXJHcm91cHNbdXNlcm5hbWVdID8/IFtdKTtcblxuXHRcdGZvciAoY29uc3QgJGVsZW1lbnQgb2YgJGxpbmtzKSB7XG5cdFx0XHRsZXQgJHN1cHM6IEpRdWVyeTtcblx0XHRcdGlmICgkZWxlbWVudC5wYXJlbnRzKCdsaScpLmZpbmQoJy5nYWRnZXRzLW1hcmtyaWdodHMnKS5sZW5ndGgpIHtcblx0XHRcdFx0JHN1cHMgPSAkZWxlbWVudC5zaWJsaW5ncygnLmdhZGdldHMtbWFya3JpZ2h0cycpLmVxKDApO1xuXHRcdFx0fSBlbHNlIGlmICgkZWxlbWVudC5zaWJsaW5ncygnLmdhZGdldHMtbWFya3JpZ2h0cycpLmxlbmd0aCkge1xuXHRcdFx0XHQkc3VwcyA9ICRlbGVtZW50LnBhcmVudHMoJ2xpJykuZmluZCgnLmdhZGdldHMtbWFya3JpZ2h0cycpLmVxKDApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JHN1cHMgPSAkKCc8c3Bhbj4nKS5hZGRDbGFzcygnZ2FkZ2V0cy1tYXJrcmlnaHRzJyk7XG5cdFx0XHRcdCRlbGVtZW50LmFmdGVyKCRzdXBzKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yIChjb25zdCBncm91cCBvZiBncm91cHMpIHtcblx0XHRcdFx0Y29uc3QgY2xhc3NOYW1lOiBzdHJpbmcgPSBgZ2FkZ2V0cy1tYXJrcmlnaHRzX18ke2dyb3VwfWA7XG5cdFx0XHRcdGlmICgkc3Vwcy5maW5kKCdzdXAnKS5oYXNDbGFzcyhjbGFzc05hbWUpKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQkc3Vwcy5hcHBlbmQoXG5cdFx0XHRcdFx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdFx0XHRcdFx0Ly8gKiBzZWUgLi4vdHlwZXMuZC50c1xuXHRcdFx0XHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHRcdFx0XHQkKCc8c3VwPicpXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoY2xhc3NOYW1lKVxuXHRcdFx0XHRcdFx0LmF0dHIoe1xuXHRcdFx0XHRcdFx0XHRhbHQ6IGdldE1lc3NhZ2UoZ3JvdXAgYXMgVXNlclJpZ2h0cyksXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKGdyb3VwIGFzIFVzZXJSaWdodHMpLFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7YXBwZW5kVXNlclJpZ2h0c01hcmt9O1xuIiwgImNvbnN0IGdlbmVyYXRlVXNlckxpbmtzID0gKCRjb250ZW50OiBKUXVlcnkpOiBSZWNvcmQ8c3RyaW5nLCBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+W10+ID0+IHtcblx0Y29uc3QgdXNlckxpbmtzOiBSZWNvcmQ8c3RyaW5nLCBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+W10+ID0ge307XG5cdGNvbnN0ICRlbGVtZW50cyA9ICRjb250ZW50LmZpbmQ8SFRNTEFuY2hvckVsZW1lbnQ+KCdhLm13LXVzZXJsaW5rOm5vdCgubXctYW5vbnVzZXJsaW5rKScpO1xuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkZWxlbWVudHMpIHtcblx0XHRjb25zdCBwYXJlbnRMaTogSFRNTExJRWxlbWVudCB8IG51bGwgPSBlbGVtZW50LmNsb3Nlc3QoJ2xpJyk7XG5cdFx0aWYgKHBhcmVudExpPy5xdWVyeVNlbGVjdG9yKCcuZ2FkZ2V0cy1tYXJrcmlnaHRzJykpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRpZiAoXG5cdFx0XHRlbGVtZW50Lm5leHRFbGVtZW50U2libGluZz8uY2xhc3NMaXN0LmNvbnRhaW5zKCdnYWRnZXRzLW1hcmtyaWdodHMnKSB8fFxuXHRcdFx0ZWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nPy5jbGFzc0xpc3QuY29udGFpbnMoJ2dhZGdldHMtbWFya3JpZ2h0cycpXG5cdFx0KSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCB1c2VyOiBzdHJpbmcgfCB1bmRlZmluZWQgPSBlbGVtZW50LnRleHRDb250ZW50Py50b1N0cmluZygpO1xuXHRcdGlmICghdXNlcikge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKG13LnV0aWwuaXNJUHY0QWRkcmVzcyh1c2VyKSB8fCBtdy51dGlsLmlzSVB2NkFkZHJlc3ModXNlcikpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0ICRlbGVtZW50ID0gJChlbGVtZW50KTtcblx0XHR1c2VyTGlua3NbdXNlcl0gPz89IFtdO1xuXHRcdHVzZXJMaW5rc1t1c2VyXVt1c2VyTGlua3NbdXNlcl0ubGVuZ3RoXSA9ICRlbGVtZW50OyAvLyBSZXBsYWNlIEFycmF5I3B1c2ggdG8gYXZvaWQgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXHR9XG5cblx0cmV0dXJuIHVzZXJMaW5rcztcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVVc2VyTGlua3N9O1xuIiwgIntcblx0XCJzdG9yYWdlS2V5R2xvYmFsXCI6IFwiZXh0LmdhZGdldC5NYXJrUmlnaHRzX2dsb2JhbC1cIixcblx0XCJzdG9yYWdlS2V5TG9jYWxcIjogXCJleHQuZ2FkZ2V0Lk1hcmtSaWdodHNfbG9jYWwtXCIsXG5cdFwidmVyc2lvblwiOiAyLjFcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYE1hcmtSaWdodHMvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG5jb25zdCBxdWVyeVVzZXJHcm91cHMgPSBhc3luYyAodXN1c2Vyczogc3RyaW5nIHwgc3RyaW5nW10pID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVVzZXJzUGFyYW1zID0ge1xuXHRcdHVzdXNlcnMsXG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRsaXN0OiAndXNlcnMnLFxuXHRcdHVzcHJvcDogJ2dyb3VwcycsXG5cdFx0c21heGFnZTogNjAwLFxuXHRcdG1heGFnZTogNjAwLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBnZXRMb2NhbFVzZXJHcm91cHMgPSBhc3luYyAodXN1c2Vyczogc3RyaW5nW10pOiBQcm9taXNlPFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPj4gPT4ge1xuXHRjb25zdCB1c2VyR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gPSB7fTtcblxuXHR1c3VzZXJzID0gdXN1c2Vycy5maWx0ZXIoKHVzZXJuYW1lKSA9PiB7XG5cdFx0aWYgKG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleUxvY2FsICsgdXNlcm5hbWUpKSB7XG5cdFx0XHR1c2VyR3JvdXBzW3VzZXJuYW1lXSA9IG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleUxvY2FsICsgdXNlcm5hbWUpIGFzIHN0cmluZ1tdO1xuXHRcdH1cblxuXHRcdHJldHVybiAhT2JqZWN0LmtleXModXNlckdyb3VwcykuaW5jbHVkZXModXNlcm5hbWUpO1xuXHR9KTtcblxuXHR0cnkge1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcXVlcnlVc2VyR3JvdXBzKHVzdXNlcnMpO1xuXHRcdGNvbnN0IHt1c2VyczogcXVlcnlVc2Vyc30gPSByZXNwb25zZVsncXVlcnknXSBhcyB7XG5cdFx0XHR1c2Vyczoge2dyb3Vwczogc3RyaW5nW107IGltcGxpY2l0Z3JvdXBzOiBzdHJpbmdbXTsgbmFtZTogc3RyaW5nfVtdO1xuXHRcdH07XG5cblx0XHRmb3IgKGNvbnN0IHVzZXIgb2YgcXVlcnlVc2Vycykge1xuXHRcdFx0aWYgKCF1c2VyPy5uYW1lIHx8ICF1c2VyPy5ncm91cHMpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHtuYW1lLCBncm91cHMsIGltcGxpY2l0Z3JvdXBzfSA9IHVzZXI7XG5cblx0XHRcdHVzZXJHcm91cHNbbmFtZV0gPz89IFtdO1xuXG5cdFx0XHR1c2VyR3JvdXBzW25hbWVdID0gW1xuXHRcdFx0XHQuLi51c2VyR3JvdXBzW25hbWVdLFxuXHRcdFx0XHQuLi5ncm91cHMuZmlsdGVyKChlbGVtZW50KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGVsZW1lbnQgIT09ICcqJztcblx0XHRcdFx0fSksXG5cdFx0XHRcdC4uLihpbXBsaWNpdGdyb3VwcyB8fCBbXSkuZmlsdGVyKChlbGVtZW50KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGVsZW1lbnQgIT09ICcqJztcblx0XHRcdFx0fSksXG5cdFx0XHRdO1xuXG5cdFx0XHQvLyBDYWNoZSBmb3IgMSBob3VyXG5cdFx0XHRtdy5zdG9yYWdlLnNldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXlMb2NhbCArIG5hbWUsIHVzZXJHcm91cHNbbmFtZV0sIDYwICogNjApO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRjb25zb2xlLmVycm9yKCdbTWFya1JpZ2h0c10gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdH1cblxuXHRyZXR1cm4gdXNlckdyb3Vwcztcbn07XG5cbmV4cG9ydCB7Z2V0TG9jYWxVc2VyR3JvdXBzLCBxdWVyeVVzZXJHcm91cHN9O1xuIiwgImltcG9ydCB7YXBwZW5kVXNlclJpZ2h0c01hcmt9IGZyb20gJy4vdXRpbC9hcHBlbmRVc2VyUmlnaHRzTWFyayc7XG5pbXBvcnQge2dlbmVyYXRlVXNlckxpbmtzfSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVVc2VyTGlua3MnO1xuaW1wb3J0IHtnZXRMb2NhbFVzZXJHcm91cHN9IGZyb20gJy4vdXRpbC9nZXRVc2VyR3JvdXBzJztcblxuY29uc3QgbWFya1VzZXJSaWdodHMgPSAoJGNvbnRlbnQ6IEpRdWVyeSk6IHZvaWQgPT4ge1xuXHRjb25zdCB1c2VyTGlua3MgPSBnZW5lcmF0ZVVzZXJMaW5rcygkY29udGVudCk7XG5cblx0Ly8gQ29udmVydCB1c2VycyBpbnRvIGFycmF5XG5cdGNvbnN0IHVzZXJzOiBzdHJpbmdbXSA9IE9iamVjdC5rZXlzKHVzZXJMaW5rcyk7XG5cdGlmICghdXNlcnMubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcHJvbWlzZXM6ICgoKSA9PiBQcm9taXNlPHZvaWQ+KVtdID0gW107XG5cblx0d2hpbGUgKHVzZXJzLmxlbmd0aCkge1xuXHRcdGNvbnN0IHVzdXNlcnMgPSB1c2Vycy5zcGxpY2UoMCwgMjUpLmZpbHRlcigoZWxlbWVudCkgPT4ge1xuXHRcdFx0cmV0dXJuICEobXcudXRpbC5pc0lQdjRBZGRyZXNzKGVsZW1lbnQpIHx8IG13LnV0aWwuaXNJUHY2QWRkcmVzcyhlbGVtZW50KSk7XG5cdFx0fSk7XG5cblx0XHRpZiAoIXVzdXNlcnMubGVuZ3RoKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRwcm9taXNlc1twcm9taXNlcy5sZW5ndGhdID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdFx0bGV0IHVzZXJHcm91cHM6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiA9IHt9O1xuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHR1c2VyR3JvdXBzID0gYXdhaXQgZ2V0TG9jYWxVc2VyR3JvdXBzKHVzdXNlcnMpO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcignW01hcmtSaWdodHNdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBiYXRjaFVzZXJMaW5rczogUmVjb3JkPHN0cmluZywgSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PltdPiA9IHt9O1xuXHRcdFx0Zm9yIChjb25zdCB1c2VybmFtZSBvZiB1c3VzZXJzKSB7XG5cdFx0XHRcdGlmICh1c2VyTGlua3NbdXNlcm5hbWVdKSB7XG5cdFx0XHRcdFx0YmF0Y2hVc2VyTGlua3NbdXNlcm5hbWVdID0gdXNlckxpbmtzW3VzZXJuYW1lXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRhcHBlbmRVc2VyUmlnaHRzTWFyayhiYXRjaFVzZXJMaW5rcywgdXNlckdyb3Vwcyk7XG5cdFx0fTtcblx0fVxuXG5cdHZvaWQgKGFzeW5jICgpID0+IHtcblx0XHRmb3IgKGNvbnN0IHByb21pc2Ugb2YgcHJvbWlzZXMpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGF3YWl0IHByb21pc2UoKTtcblx0XHRcdH0gY2F0Y2gge31cblx0XHR9XG5cdH0pKCk7XG59O1xuXG5leHBvcnQge21hcmtVc2VyUmlnaHRzfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQUEsQ0FBQTtBQUFBQyxTQUFBRCxvQkFBQTtFQUFBRSxvQkFBQUEsTUFBQUE7RUFBQUMsaUJBQUFBLE1BQUFBO0FBQUEsQ0FBQTtBQUFBQyxPQUFBQyxVQUFBQyxhQUFBTixrQkFBQTs7QUNBQSxJQUFBTyxvQkFBdUJDLFFBQUEsaUJBQUE7QUFFdkIsSUFBTUMsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsWUFBQSxHQUFXSCxrQkFBQUksVUFBUztNQUNuQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEQyxzQkFBQSxHQUFxQk4sa0JBQUFJLFVBQVM7TUFDN0JDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREUsVUFBQSxHQUFTUCxrQkFBQUksVUFBUztNQUNqQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELHdCQUFBLEdBQXVCTCxrQkFBQUksVUFBUztNQUMvQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERyxZQUFBLEdBQVdSLGtCQUFBSSxVQUFTO01BQ25CQyxJQUFJO01BQ0osV0FBVztN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RCxHQUFHbUQsS0FBSyxrQkFBa0IsRUFBRUMsSUFBSSxTQUFTQyxXQUFXeEUsVUFBZ0I7QUFDbkUsTUFBSUEsU0FBU1AsS0FBSyxJQUFJLE1BQU0scUJBQXFCTyxTQUFTVCxTQUFTLGdCQUFnQixHQUFHO0FBQ3JGLFNBQUtzRSxlQUFlN0QsUUFBUTtFQUM3QjtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbIk1hcmtSaWdodHNfZXhwb3J0cyIsICJfX2V4cG9ydCIsICJnZXRMb2NhbFVzZXJHcm91cHMiLCAicXVlcnlVc2VyR3JvdXBzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIl9fdG9Db21tb25KUyIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImdldEkxOG5NZXNzYWdlcyIsICJ3ZWJtYXN0ZXIiLCAibG9jYWxpemUiLCAiZW4iLCAicmVzcG9uc2libGVvcGVyYXRvciIsICJzdGV3YXJkIiwgImNoZWNrdXNlciIsICJzdXBwcmVzcyIsICJzeXNvcCIsICJ0ZW1wbGF0ZWVkaXRvciIsICJpbXBvcnRlciIsICJwYXRyb2xsZXIiLCAiYXV0b3BhdHJvbGxlZCIsICJldmVudHNwb25zb3IiLCAiY29uZmlybWVkIiwgImF1dG9jb25maXJtZWQiLCAiYm90IiwgImZsb29kIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiYXBwZW5kVXNlclJpZ2h0c01hcmsiLCAidXNlckxpbmtzIiwgInVzZXJHcm91cHMiLCAiX2kiLCAiX09iamVjdCRlbnRyaWVzIiwgIk9iamVjdCIsICJlbnRyaWVzIiwgImxlbmd0aCIsICJfdXNlckdyb3VwcyR1c2VybmFtZSIsICJ1c2VybmFtZSIsICIkbGlua3MiLCAiZ3JvdXBzIiwgInVuaXF1ZUFycmF5IiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgIiRlbGVtZW50IiwgInZhbHVlIiwgIiRzdXBzIiwgInBhcmVudHMiLCAiZmluZCIsICJzaWJsaW5ncyIsICJlcSIsICIkIiwgImFkZENsYXNzIiwgImFmdGVyIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgImdyb3VwIiwgImNsYXNzTmFtZSIsICJjb25jYXQiLCAiaGFzQ2xhc3MiLCAiYXBwZW5kIiwgImF0dHIiLCAiYWx0IiwgInRpdGxlIiwgImVyciIsICJlIiwgImYiLCAiZ2VuZXJhdGVVc2VyTGlua3MiLCAiJGNvbnRlbnQiLCAiJGVsZW1lbnRzIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgIl9lbGVtZW50JG5leHRFbGVtZW50UyIsICJfZWxlbWVudCRwcmV2aW91c0VsZW0iLCAiX2VsZW1lbnQkdGV4dENvbnRlbnQiLCAiX3VzZXJMaW5rcyR1c2VyIiwgImVsZW1lbnQiLCAicGFyZW50TGkiLCAiY2xvc2VzdCIsICJxdWVyeVNlbGVjdG9yIiwgIm5leHRFbGVtZW50U2libGluZyIsICJjbGFzc0xpc3QiLCAiY29udGFpbnMiLCAicHJldmlvdXNFbGVtZW50U2libGluZyIsICJ1c2VyIiwgInRleHRDb250ZW50IiwgInRvU3RyaW5nIiwgIm13IiwgInV0aWwiLCAiaXNJUHY0QWRkcmVzcyIsICJpc0lQdjZBZGRyZXNzIiwgInN0b3JhZ2VLZXlMb2NhbCIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJhcGkiLCAiaW5pdE13QXBpIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidXN1c2VycyIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgImxpc3QiLCAidXNwcm9wIiwgInNtYXhhZ2UiLCAibWF4YWdlIiwgInJlc3BvbnNlIiwgImdldCIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiX3JlZjIiLCAiZmlsdGVyIiwgInN0b3JhZ2UiLCAiZ2V0T2JqZWN0IiwgImtleXMiLCAiaW5jbHVkZXMiLCAidXNlcnMiLCAicXVlcnlVc2VycyIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJfdXNlckdyb3VwcyRuYW1lIiwgIm5hbWUiLCAiaW1wbGljaXRncm91cHMiLCAic2V0T2JqZWN0IiwgImVycm9yIiwgImNvbnNvbGUiLCAiX3gyIiwgIm1hcmtVc2VyUmlnaHRzIiwgInByb21pc2VzIiwgInNwbGljZSIsICJiYXRjaFVzZXJMaW5rcyIsICJfaXRlcmF0b3I2IiwgIl9zdGVwNiIsICJfaTIiLCAiX3Byb21pc2VzIiwgInByb21pc2UiLCAiaG9vayIsICJhZGQiLCAibWFya1JpZ2h0cyJdCn0K
