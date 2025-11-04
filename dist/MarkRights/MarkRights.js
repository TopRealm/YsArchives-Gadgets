/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-MarkRights.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/MarkRights}
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
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
  getGlobalUserGroups: () => getGlobalUserGroups,
  getLocalUserGroups: () => getLocalUserGroups,
  queryGlobalUserGroups: () => queryGlobalUserGroups,
  queryUserGroups: () => queryUserGroups
});
module.exports = __toCommonJS(MarkRights_exports);
//! src/MarkRights/options.json
var storageKeyGlobal = "ext.gadget.MarkRights_global-";
var storageKeyLocal = "ext.gadget.MarkRights_local-";
var version = 2.1;
//! src/MarkRights/modules/util/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("MarkRights/".concat(version));
//! src/MarkRights/modules/util/getUserGroups.ts
var store = mw.storage.session || mw.storage;
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
var queryGlobalUserGroups = /* @__PURE__ */ (function() {
  var _ref2 = _asyncToGenerator(function* (guiuser) {
    const params = {
      action: "query",
      format: "json",
      formatversion: "2",
      meta: "globaluserinfo",
      guiuser,
      guiprop: "groups",
      smaxage: 600,
      maxage: 600
    };
    const response = yield api.get(params);
    return response;
  });
  return function queryGlobalUserGroups2(_x2) {
    return _ref2.apply(this, arguments);
  };
})();
var getLocalUserGroups = /* @__PURE__ */ (function() {
  var _ref3 = _asyncToGenerator(function* (ususers) {
    const userGroups = {};
    ususers = ususers.filter((username) => {
      var _userGroups$username;
      return !(userGroups !== null && userGroups !== void 0 && (_userGroups$username = userGroups[username]) !== null && _userGroups$username !== void 0 && _userGroups$username.length);
    });
    var _iterator2 = _createForOfIteratorHelper(ususers), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        const user = _step2.value;
        if (store.getObject(storageKeyLocal + user)) {
          userGroups[user] = store.getObject(storageKeyLocal + user);
        }
        ususers = ususers.filter((username) => {
          return username !== user;
        });
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    try {
      const response = yield queryUserGroups(ususers);
      const {
        users: queryUsers
      } = response["query"];
      var _iterator3 = _createForOfIteratorHelper(queryUsers), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          var _userGroups$name;
          const user = _step3.value;
          if (!(user !== null && user !== void 0 && user.name) || !(user !== null && user !== void 0 && user.groups)) {
            continue;
          }
          const {
            name,
            groups
          } = user;
          (_userGroups$name = userGroups[name]) !== null && _userGroups$name !== void 0 ? _userGroups$name : userGroups[name] = [];
          userGroups[name] = [...userGroups[name], ...groups.filter((element) => {
            return element !== "*";
          })];
          store.setObject(storageKeyLocal + name, userGroups[name], 60 * 60);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    } catch (error) {
      console.error("[MarkRights] Ajax error:", error);
    }
    return userGroups;
  });
  return function getLocalUserGroups2(_x3) {
    return _ref3.apply(this, arguments);
  };
})();
var getGlobalUserGroups = /* @__PURE__ */ (function() {
  var _ref4 = _asyncToGenerator(function* (ususers) {
    const userGroups = {};
    ususers = ususers.filter((username) => {
      var _userGroups$username2;
      return !(userGroups !== null && userGroups !== void 0 && (_userGroups$username2 = userGroups[username]) !== null && _userGroups$username2 !== void 0 && _userGroups$username2.length);
    });
    var _iterator4 = _createForOfIteratorHelper(ususers), _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
        const user = _step4.value;
        if (store.getObject(storageKeyGlobal + user)) {
          userGroups[user] = store.getObject(storageKeyGlobal + user);
        }
        ususers = ususers.filter((username) => {
          return username !== user;
        });
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    var _iterator5 = _createForOfIteratorHelper(ususers), _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
        const user = _step5.value;
        try {
          var _userGroups$user;
          const response = yield queryGlobalUserGroups(user);
          const {
            globaluserinfo
          } = response["query"];
          if (!(globaluserinfo !== null && globaluserinfo !== void 0 && globaluserinfo.groups)) {
            continue;
          }
          const {
            groups
          } = globaluserinfo;
          (_userGroups$user = userGroups[user]) !== null && _userGroups$user !== void 0 ? _userGroups$user : userGroups[user] = [];
          userGroups[user] = [...userGroups[user], ...groups];
          store.setObject(storageKeyGlobal + user, userGroups[user], 60 * 60);
        } catch (error) {
          console.error("[MarkRights] Ajax error:", error);
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    return userGroups;
  });
  return function getGlobalUserGroups2(_x4) {
    return _ref4.apply(this, arguments);
  };
})();
//! src/MarkRights/modules/i18n.ts
var import_ext_gadget2 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    webmaster: (0, import_ext_gadget2.localize)({
      en: "Webmaster",
      "zh-hans": "站长",
      "zh-hant": "站長"
    }),
    responsibleoperator: (0, import_ext_gadget2.localize)({
      en: "Responsible Operator",
      "zh-hans": "责任运营",
      "zh-hant": "責任運營"
    }),
    steward: (0, import_ext_gadget2.localize)({
      en: "Steward",
      "zh-hans": "档案理事员",
      "zh-hant": "檔案理事員"
    }),
    checkuser: (0, import_ext_gadget2.localize)({
      en: "CheckUser",
      "zh-hans": "用户查核",
      "zh-hant": "用戶查核"
    }),
    suppress: (0, import_ext_gadget2.localize)({
      en: "Oversighter",
      "zh-hans": "监督员",
      "zh-hant": "監督員"
    }),
    sysop: (0, import_ext_gadget2.localize)({
      en: "SysOp",
      "zh-hans": "管理员",
      "zh-hant": "管理員"
    }),
    "interface-admin": (0, import_ext_gadget2.localize)({
      en: "Interface Administrator",
      "zh-hans": "界面管理员",
      "zh-hant": "介面管理員"
    }),
    templateeditor: (0, import_ext_gadget2.localize)({
      en: "Template Editor",
      "zh-hans": "模板编辑员",
      "zh-hant": "模板編輯員"
    }),
    importer: (0, import_ext_gadget2.localize)({
      en: "Importer",
      "zh-hans": "导入者",
      "zh-hant": "匯入者"
    }),
    patroller: (0, import_ext_gadget2.localize)({
      en: "Patroller",
      "zh-hans": "巡查员",
      "zh-hant": "巡查員"
    }),
    autopatrolled: (0, import_ext_gadget2.localize)({
      en: "Good Editor",
      "zh-hans": "优秀编辑者",
      "zh-hant": "優秀編輯者"
    }),
    eventsponsor: (0, import_ext_gadget2.localize)({
      en: "Event Sponsor",
      "zh-hans": "活动组织者",
      "zh-hant": "活動組織者"
    }),
    "massmessage-sender": (0, import_ext_gadget2.localize)({
      en: "MassMessage sender",
      "zh-hans": "大量消息发送者",
      "zh-hant": "大量訊息傳送者"
    }),
    confirmed: (0, import_ext_gadget2.localize)({
      en: "Confirmed user",
      "zh-hans": "确认用户",
      "zh-hant": "確認用戶"
    }),
    autoconfirmed: (0, import_ext_gadget2.localize)({
      en: "Auto-confirmed user",
      "zh-hans": "自动确认用户",
      "zh-hant": "自動確認用戶"
    }),
    bot: (0, import_ext_gadget2.localize)({
      en: "Bot",
      "zh-hans": "机器人",
      "zh-hant": "機械人"
    }),
    flood: (0, import_ext_gadget2.localize)({
      en: "Flooder",
      "zh-hans": "机器用户",
      "zh-hant": "機械用戶"
    }),
    "rnrsverify-exempt": (0, import_ext_gadget2.localize)({
      en: "Exempted from real-name verification",
      "zh-hans": "实名制验证豁免",
      "zh-hant": "實名制驗證豁免"
    }),
    "ipblock-exempt": (0, import_ext_gadget2.localize)({
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
//! src/MarkRights/modules/util/getUserName.ts
var getUserName = (url) => {
  if (!url) {
    return "";
  }
  const username = mw.util.getParamValue("title", url);
  const decode = (string, replace) => {
    return decodeURIComponent((() => {
      try {
        return decodeURIComponent(replace(string));
      } catch {
        return replace(string).replace(/%(?!\d+)/g, "%25");
      }
    })());
  };
  if (username) {
    return decode(username, (string) => {
      return string.replace("User:", "").replace(/_/g, " ");
    });
  }
  const usernameMatch = url.match(/\/wiki\/User:(.+?)$/);
  if (usernameMatch !== null && usernameMatch !== void 0 && usernameMatch[1]) {
    return decode(usernameMatch[1], (string) => {
      return string.replace(/_/g, " ");
    });
  }
  return "";
};
//! src/MarkRights/modules/util/appendUserRightsMark.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var appendUserRightsMark = ($userLinks, userGroups) => {
  var _iterator6 = _createForOfIteratorHelper($userLinks), _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
      var _$element$attr, _userGroups$username3;
      const $element = _step6.value;
      const username = getUserName((_$element$attr = $element.attr("href")) !== null && _$element$attr !== void 0 ? _$element$attr : "");
      if (!username) {
        continue;
      }
      userGroups !== null && userGroups !== void 0 ? userGroups : userGroups = {};
      const groups = (_userGroups$username3 = userGroups[username]) !== null && _userGroups$username3 !== void 0 ? _userGroups$username3 : [];
      let $sups;
      if ($element.parents("li").find(".gadgets-markrights").length) {
        $sups = $element.siblings(".gadgets-markrights").eq(0);
      } else if ($element.siblings(".gadgets-markrights").length) {
        $sups = $element.parents("li").find(".gadgets-markrights").eq(0);
      } else {
        $sups = $("<span>").addClass("gadgets-markrights");
        $element.after($sups);
      }
      var _iterator7 = _createForOfIteratorHelper((0, import_ext_gadget3.uniqueArray)(groups)), _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
          const group = _step7.value;
          const className = "gadgets-markrights__".concat(group);
          const deprecatedClassName = "gadgets-markrights-".concat(group);
          if ($sups.find("sup").hasClass(className) || $sups.find("sup").hasClass(deprecatedClassName)) {
            continue;
          }
          $sups.append(
            // The following classes are used here:
            // * see ../types.d.ts
            // * for more information
            $("<sup>").addClass(className).addClass(deprecatedClassName).attr({
              alt: getMessage(group),
              title: getMessage(group)
            })
          );
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
};
//! src/MarkRights/modules/util/generateUserLinks.ts
var generateUserLinks = ($content) => {
  const userLinks = {};
  const $elements = $content.find("a.mw-userlink:not(.mw-anonuserlink)");
  var _iterator8 = _createForOfIteratorHelper($elements), _step8;
  try {
    for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
      var _userLinks$user;
      const element = _step8.value;
      const $element = $(element);
      if ($element.parents("li").find(".gadgets-markrights").length || $element.siblings(".gadgets-markrights").length) {
        continue;
      }
      const {
        textContent
      } = element;
      const user = textContent === null || textContent === void 0 ? void 0 : textContent.toString();
      if (!user) {
        continue;
      }
      if (mw.util.isIPv4Address(user) || mw.util.isIPv6Address(user)) {
        continue;
      }
      (_userLinks$user = userLinks[user]) !== null && _userLinks$user !== void 0 ? _userLinks$user : userLinks[user] = [];
      userLinks[user][userLinks[user].length] = $element;
    }
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
  }
  return userLinks;
};
//! src/MarkRights/modules/core.ts
var markUserRights = ($content) => {
  const userLinks = generateUserLinks($content);
  const users = Object.keys(userLinks);
  if (!users.length) {
    return;
  }
  const $userLinks = Object.values(userLinks).reduce((previousValue, currentValue) => {
    return [...previousValue, ...currentValue];
  });
  if (!$userLinks.length) {
    return;
  }
  const promises = [];
  for (let i = 0; i < users.length; i++) {
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
      appendUserRightsMark($userLinks, userGroups);
    });
    promises[promises.length] = /* @__PURE__ */ _asyncToGenerator(function* () {
      let userGroups = {};
      try {
        userGroups = yield getGlobalUserGroups(ususers);
      } catch (error) {
        console.error("[MarkRights] Ajax error:", error);
      }
      appendUserRightsMark($userLinks, userGroups);
    });
  }
  void _asyncToGenerator(function* () {
    for (var _i = 0, _promises = promises; _i < _promises.length; _i++) {
      const promise = _promises[_i];
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01hcmtSaWdodHMvTWFya1JpZ2h0cy50cyIsICJzcmMvTWFya1JpZ2h0cy9vcHRpb25zLmpzb24iLCAic3JjL01hcmtSaWdodHMvbW9kdWxlcy91dGlsL2FwaS50cyIsICJzcmMvTWFya1JpZ2h0cy9tb2R1bGVzL3V0aWwvZ2V0VXNlckdyb3Vwcy50cyIsICJzcmMvTWFya1JpZ2h0cy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL01hcmtSaWdodHMvbW9kdWxlcy91dGlsL2dldFVzZXJOYW1lLnRzIiwgInNyYy9NYXJrUmlnaHRzL21vZHVsZXMvdXRpbC9hcHBlbmRVc2VyUmlnaHRzTWFyay50cyIsICJzcmMvTWFya1JpZ2h0cy9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVVc2VyTGlua3MudHMiLCAic3JjL01hcmtSaWdodHMvbW9kdWxlcy9jb3JlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcbiAqIEBkZXNjcmlwdGlvbiDlnKjmnIDov5Hkv67mlLnjgIHnm5Hop4bliJfooajjgIHmnaHnm67ljoblj7LorrDlvZXnrYnkvY3nva7ku6XnibnmrormoLzlvI/mmL7npLrmnInnibnmrormnYPpmZDnmoTnlKjmiLdcbiAqL1xuaW1wb3J0IHttYXJrVXNlclJpZ2h0c30gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuXG5tdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuYWRkKGZ1bmN0aW9uIG1hcmtSaWdodHMoJGNvbnRlbnQpOiB2b2lkIHtcblx0aWYgKCRjb250ZW50LmF0dHIoJ2lkJykgPT09ICdtdy1jb250ZW50LXRleHQnIHx8ICRjb250ZW50Lmhhc0NsYXNzKCdtdy1jaGFuZ2VzbGlzdCcpKSB7XG5cdFx0dm9pZCBtYXJrVXNlclJpZ2h0cygkY29udGVudCk7XG5cdH1cbn0pO1xuXG5leHBvcnQge1xuXHRnZXRMb2NhbFVzZXJHcm91cHMsXG5cdGdldEdsb2JhbFVzZXJHcm91cHMsXG5cdHF1ZXJ5VXNlckdyb3Vwcyxcblx0cXVlcnlHbG9iYWxVc2VyR3JvdXBzLFxufSBmcm9tICcuL21vZHVsZXMvdXRpbC9nZXRVc2VyR3JvdXBzJztcbiIsICJ7XG5cdFwic3RvcmFnZUtleUdsb2JhbFwiOiBcImV4dC5nYWRnZXQuTWFya1JpZ2h0c19nbG9iYWwtXCIsXG5cdFwic3RvcmFnZUtleUxvY2FsXCI6IFwiZXh0LmdhZGdldC5NYXJrUmlnaHRzX2xvY2FsLVwiLFxuXHRcInZlcnNpb25cIjogMi4xXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBNYXJrUmlnaHRzLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxuLy8gUHJlZmVyIHNlc3Npb24gc3RvcmFnZSB0byBhdm9pZCBmaWxsaW5nIHBlcnNpc3RlbnQgbG9jYWxTdG9yYWdlXG5jb25zdCBzdG9yZSA9IChtdy5zdG9yYWdlLnNlc3Npb24gfHwgbXcuc3RvcmFnZSkgYXMgdHlwZW9mIG13LnN0b3JhZ2U7XG5cbmNvbnN0IHF1ZXJ5VXNlckdyb3VwcyA9IGFzeW5jICh1c3VzZXJzOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5VXNlcnNQYXJhbXMgPSB7XG5cdFx0dXN1c2Vycyxcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdGxpc3Q6ICd1c2VycycsXG5cdFx0dXNwcm9wOiAnZ3JvdXBzJyxcblx0XHRzbWF4YWdlOiA2MDAsXG5cdFx0bWF4YWdlOiA2MDAsXG5cdH07XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IHF1ZXJ5R2xvYmFsVXNlckdyb3VwcyA9IGFzeW5jIChndWl1c2VyOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0bWV0YTogJ2dsb2JhbHVzZXJpbmZvJyxcblx0XHRndWl1c2VyLFxuXHRcdGd1aXByb3A6ICdncm91cHMnLFxuXHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRtYXhhZ2U6IDYwMCxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgZ2V0TG9jYWxVc2VyR3JvdXBzID0gYXN5bmMgKHVzdXNlcnM6IHN0cmluZ1tdKTogUHJvbWlzZTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4+ID0+IHtcblx0Y29uc3QgdXNlckdyb3VwczogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+ID0ge307XG5cblx0dXN1c2VycyA9IHVzdXNlcnMuZmlsdGVyKCh1c2VybmFtZSkgPT4ge1xuXHRcdHJldHVybiAhdXNlckdyb3Vwcz8uW3VzZXJuYW1lXT8ubGVuZ3RoO1xuXHR9KTtcblxuXHRmb3IgKGNvbnN0IHVzZXIgb2YgdXN1c2Vycykge1xuXHRcdGlmIChzdG9yZS5nZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5TG9jYWwgKyB1c2VyKSkge1xuXHRcdFx0dXNlckdyb3Vwc1t1c2VyXSA9IHN0b3JlLmdldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXlMb2NhbCArIHVzZXIpIGFzIHN0cmluZ1tdO1xuXHRcdH1cblx0XHR1c3VzZXJzID0gdXN1c2Vycy5maWx0ZXIoKHVzZXJuYW1lKSA9PiB7XG5cdFx0XHRyZXR1cm4gdXNlcm5hbWUgIT09IHVzZXI7XG5cdFx0fSk7XG5cdH1cblxuXHR0cnkge1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcXVlcnlVc2VyR3JvdXBzKHVzdXNlcnMpO1xuXHRcdGNvbnN0IHt1c2VyczogcXVlcnlVc2Vyc30gPSByZXNwb25zZVsncXVlcnknXSBhcyB7XG5cdFx0XHR1c2Vyczoge2dyb3Vwczogc3RyaW5nW107IG5hbWU6IHN0cmluZ31bXTtcblx0XHR9O1xuXG5cdFx0Zm9yIChjb25zdCB1c2VyIG9mIHF1ZXJ5VXNlcnMpIHtcblx0XHRcdGlmICghdXNlcj8ubmFtZSB8fCAhdXNlcj8uZ3JvdXBzKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCB7bmFtZSwgZ3JvdXBzfSA9IHVzZXI7XG5cblx0XHRcdHVzZXJHcm91cHNbbmFtZV0gPz89IFtdO1xuXG5cdFx0XHR1c2VyR3JvdXBzW25hbWVdID0gW1xuXHRcdFx0XHQuLi51c2VyR3JvdXBzW25hbWVdLFxuXHRcdFx0XHQuLi5ncm91cHMuZmlsdGVyKChlbGVtZW50KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGVsZW1lbnQgIT09ICcqJztcblx0XHRcdFx0fSksXG5cdFx0XHRdO1xuXG5cdFx0XHQvLyBDYWNoZSBmb3IgMSBob3VyXG5cdFx0XHRzdG9yZS5zZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5TG9jYWwgKyBuYW1lLCB1c2VyR3JvdXBzW25hbWVdLCA2MCAqIDYwKTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0Y29uc29sZS5lcnJvcignW01hcmtSaWdodHNdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHR9XG5cblx0cmV0dXJuIHVzZXJHcm91cHM7XG59O1xuXG5jb25zdCBnZXRHbG9iYWxVc2VyR3JvdXBzID0gYXN5bmMgKHVzdXNlcnM6IHN0cmluZ1tdKTogUHJvbWlzZTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4+ID0+IHtcblx0Y29uc3QgdXNlckdyb3VwczogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+ID0ge307XG5cblx0dXN1c2VycyA9IHVzdXNlcnMuZmlsdGVyKCh1c2VybmFtZSkgPT4ge1xuXHRcdHJldHVybiAhdXNlckdyb3Vwcz8uW3VzZXJuYW1lXT8ubGVuZ3RoO1xuXHR9KTtcblxuXHRmb3IgKGNvbnN0IHVzZXIgb2YgdXN1c2Vycykge1xuXHRcdGlmIChzdG9yZS5nZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5R2xvYmFsICsgdXNlcikpIHtcblx0XHRcdHVzZXJHcm91cHNbdXNlcl0gPSBzdG9yZS5nZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5R2xvYmFsICsgdXNlcikgYXMgc3RyaW5nW107XG5cdFx0fVxuXHRcdHVzdXNlcnMgPSB1c3VzZXJzLmZpbHRlcigodXNlcm5hbWUpID0+IHtcblx0XHRcdHJldHVybiB1c2VybmFtZSAhPT0gdXNlcjtcblx0XHR9KTtcblx0fVxuXG5cdGZvciAoY29uc3QgdXNlciBvZiB1c3VzZXJzKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcXVlcnlHbG9iYWxVc2VyR3JvdXBzKHVzZXIpO1xuXHRcdFx0Y29uc3Qge2dsb2JhbHVzZXJpbmZvfSA9IHJlc3BvbnNlWydxdWVyeSddIGFzIHtcblx0XHRcdFx0Z2xvYmFsdXNlcmluZm86IHtncm91cHM6IHN0cmluZ1tdfTtcblx0XHRcdH07XG5cblx0XHRcdGlmICghZ2xvYmFsdXNlcmluZm8/Lmdyb3Vwcykge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qge2dyb3Vwc30gPSBnbG9iYWx1c2VyaW5mbztcblxuXHRcdFx0dXNlckdyb3Vwc1t1c2VyXSA/Pz0gW107XG5cblx0XHRcdHVzZXJHcm91cHNbdXNlcl0gPSBbLi4udXNlckdyb3Vwc1t1c2VyXSwgLi4uZ3JvdXBzXTtcblxuXHRcdFx0Ly8gQ2FjaGUgZm9yIDEgaG91clxuXHRcdFx0c3RvcmUuc2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleUdsb2JhbCArIHVzZXIsIHVzZXJHcm91cHNbdXNlcl0sIDYwICogNjApO1xuXHRcdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCdbTWFya1JpZ2h0c10gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHVzZXJHcm91cHM7XG59O1xuXG5leHBvcnQge2dldExvY2FsVXNlckdyb3VwcywgZ2V0R2xvYmFsVXNlckdyb3VwcywgcXVlcnlVc2VyR3JvdXBzLCBxdWVyeUdsb2JhbFVzZXJHcm91cHN9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHR3ZWJtYXN0ZXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnV2VibWFzdGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ermemVvycsXG5cdFx0XHQnemgtaGFudCc6ICfnq5nplbcnLFxuXHRcdH0pLFxuXHRcdHJlc3BvbnNpYmxlb3BlcmF0b3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUmVzcG9uc2libGUgT3BlcmF0b3InLFxuXHRcdFx0J3poLWhhbnMnOiAn6LSj5Lu76L+Q6JClJyxcblx0XHRcdCd6aC1oYW50JzogJ+iyrOS7u+mBi+eHnycsXG5cdFx0fSksXG5cdFx0c3Rld2FyZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTdGV3YXJkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aho+ahiOeQhuS6i+WRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfmqpTmoYjnkIbkuovlk6EnLFxuXHRcdH0pLFxuXHRcdGNoZWNrdXNlcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDaGVja1VzZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn55So5oi35p+l5qC4Jyxcblx0XHRcdCd6aC1oYW50JzogJ+eUqOaItuafpeaguCcsXG5cdFx0fSksXG5cdFx0c3VwcHJlc3M6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnT3ZlcnNpZ2h0ZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn55uR552j5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+ebo+edo+WToScsXG5cdFx0fSksXG5cdFx0c3lzb3A6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU3lzT3AnLFxuXHRcdFx0J3poLWhhbnMnOiAn566h55CG5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+euoeeQhuWToScsXG5cdFx0fSksXG5cdFx0J2ludGVyZmFjZS1hZG1pbic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSW50ZXJmYWNlIEFkbWluaXN0cmF0b3InLFxuXHRcdFx0J3poLWhhbnMnOiAn55WM6Z2i566h55CG5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+S7i+mdoueuoeeQhuWToScsXG5cdFx0fSksXG5cdFx0dGVtcGxhdGVlZGl0b3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGVtcGxhdGUgRWRpdG9yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aooeadv+e8lui+keWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfmqKHmnb/nt6jovK/lk6EnLFxuXHRcdH0pLFxuXHRcdGltcG9ydGVyOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ltcG9ydGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WvvOWFpeiAhScsXG5cdFx0XHQnemgtaGFudCc6ICfljK/lhaXogIUnLFxuXHRcdH0pLFxuXHRcdHBhdHJvbGxlcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQYXRyb2xsZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5beh5p+l5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3oeafpeWToScsXG5cdFx0fSksXG5cdFx0YXV0b3BhdHJvbGxlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdHb29kIEVkaXRvcicsXG5cdFx0XHQnemgtaGFucyc6ICfkvJjnp4DnvJbovpHogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5YSq56eA57eo6Lyv6ICFJyxcblx0XHR9KSxcblx0XHRldmVudHNwb25zb3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRXZlbnQgU3BvbnNvcicsXG5cdFx0XHQnemgtaGFucyc6ICfmtLvliqjnu4Tnu4fogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5rS75YuV57WE57mU6ICFJyxcblx0XHR9KSxcblx0XHQnbWFzc21lc3NhZ2Utc2VuZGVyJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdNYXNzTWVzc2FnZSBzZW5kZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5aSn6YeP5raI5oGv5Y+R6YCB6ICFJyxcblx0XHRcdCd6aC1oYW50JzogJ+Wkp+mHj+ioiuaBr+WCs+mAgeiAhScsXG5cdFx0fSksXG5cdFx0Y29uZmlybWVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvbmZpcm1lZCB1c2VyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ehruiupOeUqOaItycsXG5cdFx0XHQnemgtaGFudCc6ICfnorroqo3nlKjmiLYnLFxuXHRcdH0pLFxuXHRcdGF1dG9jb25maXJtZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQXV0by1jb25maXJtZWQgdXNlcicsXG5cdFx0XHQnemgtaGFucyc6ICfoh6rliqjnoa7orqTnlKjmiLcnLFxuXHRcdFx0J3poLWhhbnQnOiAn6Ieq5YuV56K66KqN55So5oi2Jyxcblx0XHR9KSxcblx0XHRib3Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQm90Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+acuuWZqOS6uicsXG5cdFx0XHQnemgtaGFudCc6ICfmqZ/morDkuronLFxuXHRcdH0pLFxuXHRcdGZsb29kOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Zsb29kZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5py65Zmo55So5oi3Jyxcblx0XHRcdCd6aC1oYW50JzogJ+apn+aisOeUqOaIticsXG5cdFx0fSksXG5cdFx0J3JucnN2ZXJpZnktZXhlbXB0JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFeGVtcHRlZCBmcm9tIHJlYWwtbmFtZSB2ZXJpZmljYXRpb24nLFxuXHRcdFx0J3poLWhhbnMnOiAn5a6e5ZCN5Yi26aqM6K+B6LGB5YWNJyxcblx0XHRcdCd6aC1oYW50JzogJ+WvpuWQjeWItumpl+itieixgeWFjScsXG5cdFx0fSksXG5cdFx0J2lwYmxvY2stZXhlbXB0JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFeGVtcHRlZCBmcm9tIElQIGJsb2NrcycsXG5cdFx0XHQnemgtaGFucyc6ICdJUOWwgeemgeixgeWFjScsXG5cdFx0XHQnemgtaGFudCc6ICdJUOWwgemOluixgeWFjScsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImNvbnN0IGdldFVzZXJOYW1lID0gKHVybDogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0aWYgKCF1cmwpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCB1c2VybmFtZTogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndGl0bGUnLCB1cmwpO1xuXG5cdGNvbnN0IGRlY29kZSA9IChzdHJpbmc6IHN0cmluZywgcmVwbGFjZTogKF9zdHJpbmc6IHN0cmluZykgPT4gc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KFxuXHRcdFx0KCgpOiBzdHJpbmcgPT4ge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocmVwbGFjZShzdHJpbmcpKTtcblx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlcGxhY2Uoc3RyaW5nKS5yZXBsYWNlKC8lKD8hXFxkKykvZywgJyUyNScpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KSgpXG5cdFx0KTtcblx0fTtcblxuXHRpZiAodXNlcm5hbWUpIHtcblx0XHRyZXR1cm4gZGVjb2RlKHVzZXJuYW1lLCAoc3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdFx0cmV0dXJuIHN0cmluZy5yZXBsYWNlKCdVc2VyOicsICcnKS5yZXBsYWNlKC9fL2csICcgJyk7XG5cdFx0fSk7XG5cdH1cblxuXHRjb25zdCB1c2VybmFtZU1hdGNoOiBSZWdFeHBNYXRjaEFycmF5IHwgbnVsbCA9IHVybC5tYXRjaCgvXFwvd2lraVxcL1VzZXI6KC4rPykkLyk7XG5cblx0aWYgKHVzZXJuYW1lTWF0Y2g/LlsxXSkge1xuXHRcdHJldHVybiBkZWNvZGUodXNlcm5hbWVNYXRjaFsxXSwgKHN0cmluZzogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRcdHJldHVybiBzdHJpbmcucmVwbGFjZSgvXy9nLCAnICcpO1xuXHRcdH0pO1xuXHR9XG5cblx0cmV0dXJuICcnO1xufTtcblxuZXhwb3J0IHtnZXRVc2VyTmFtZX07XG4iLCAiaW1wb3J0IHR5cGUge1VzZXJSaWdodHN9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge2dldFVzZXJOYW1lfSBmcm9tICcuL2dldFVzZXJOYW1lJztcbmltcG9ydCB7dW5pcXVlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwcGVuZFVzZXJSaWdodHNNYXJrID0gKCR1c2VyTGlua3M6IEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD5bXSwgdXNlckdyb3VwczogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+KTogdm9pZCA9PiB7XG5cdGZvciAoY29uc3QgJGVsZW1lbnQgb2YgJHVzZXJMaW5rcykge1xuXHRcdGNvbnN0IHVzZXJuYW1lOiBzdHJpbmcgPSBnZXRVc2VyTmFtZSgkZWxlbWVudC5hdHRyKCdocmVmJykgPz8gJycpO1xuXHRcdGlmICghdXNlcm5hbWUpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHVzZXJHcm91cHMgPz89IHt9O1xuXHRcdGNvbnN0IGdyb3VwcyA9IHVzZXJHcm91cHNbdXNlcm5hbWVdID8/IFtdO1xuXG5cdFx0bGV0ICRzdXBzOiBKUXVlcnk7XG5cdFx0aWYgKCRlbGVtZW50LnBhcmVudHMoJ2xpJykuZmluZCgnLmdhZGdldHMtbWFya3JpZ2h0cycpLmxlbmd0aCkge1xuXHRcdFx0JHN1cHMgPSAkZWxlbWVudC5zaWJsaW5ncygnLmdhZGdldHMtbWFya3JpZ2h0cycpLmVxKDApO1xuXHRcdH0gZWxzZSBpZiAoJGVsZW1lbnQuc2libGluZ3MoJy5nYWRnZXRzLW1hcmtyaWdodHMnKS5sZW5ndGgpIHtcblx0XHRcdCRzdXBzID0gJGVsZW1lbnQucGFyZW50cygnbGknKS5maW5kKCcuZ2FkZ2V0cy1tYXJrcmlnaHRzJykuZXEoMCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRzdXBzID0gJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ2dhZGdldHMtbWFya3JpZ2h0cycpO1xuXHRcdFx0JGVsZW1lbnQuYWZ0ZXIoJHN1cHMpO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgZ3JvdXAgb2YgdW5pcXVlQXJyYXkoZ3JvdXBzKSkge1xuXHRcdFx0Y29uc3QgY2xhc3NOYW1lOiBzdHJpbmcgPSBgZ2FkZ2V0cy1tYXJrcmlnaHRzX18ke2dyb3VwfWA7XG5cdFx0XHRjb25zdCBkZXByZWNhdGVkQ2xhc3NOYW1lOiBzdHJpbmcgPSBgZ2FkZ2V0cy1tYXJrcmlnaHRzLSR7Z3JvdXB9YDtcblx0XHRcdGlmICgkc3Vwcy5maW5kKCdzdXAnKS5oYXNDbGFzcyhjbGFzc05hbWUpIHx8ICRzdXBzLmZpbmQoJ3N1cCcpLmhhc0NsYXNzKGRlcHJlY2F0ZWRDbGFzc05hbWUpKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHQkc3Vwcy5hcHBlbmQoXG5cdFx0XHRcdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHRcdFx0XHQvLyAqIHNlZSAuLi90eXBlcy5kLnRzXG5cdFx0XHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHRcdFx0JCgnPHN1cD4nKVxuXHRcdFx0XHRcdC5hZGRDbGFzcyhjbGFzc05hbWUpXG5cdFx0XHRcdFx0LmFkZENsYXNzKGRlcHJlY2F0ZWRDbGFzc05hbWUpXG5cdFx0XHRcdFx0LmF0dHIoe1xuXHRcdFx0XHRcdFx0YWx0OiBnZXRNZXNzYWdlKGdyb3VwIGFzIFVzZXJSaWdodHMpLFxuXHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoZ3JvdXAgYXMgVXNlclJpZ2h0cyksXG5cdFx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge2FwcGVuZFVzZXJSaWdodHNNYXJrfTtcbiIsICJjb25zdCBnZW5lcmF0ZVVzZXJMaW5rcyA9ICgkY29udGVudDogSlF1ZXJ5KTogUmVjb3JkPHN0cmluZywgSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PltdPiA9PiB7XG5cdGNvbnN0IHVzZXJMaW5rczogUmVjb3JkPHN0cmluZywgSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PltdPiA9IHt9O1xuXHRjb25zdCAkZWxlbWVudHMgPSAkY29udGVudC5maW5kPEhUTUxBbmNob3JFbGVtZW50PignYS5tdy11c2VybGluazpub3QoLm13LWFub251c2VybGluayknKTtcblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGVsZW1lbnRzKSB7XG5cdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD4gPSAkKGVsZW1lbnQpO1xuXHRcdGlmIChcblx0XHRcdCRlbGVtZW50LnBhcmVudHMoJ2xpJykuZmluZCgnLmdhZGdldHMtbWFya3JpZ2h0cycpLmxlbmd0aCB8fFxuXHRcdFx0JGVsZW1lbnQuc2libGluZ3MoJy5nYWRnZXRzLW1hcmtyaWdodHMnKS5sZW5ndGhcblx0XHQpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHt0ZXh0Q29udGVudH0gPSBlbGVtZW50O1xuXHRcdGNvbnN0IHVzZXI6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHRleHRDb250ZW50Py50b1N0cmluZygpO1xuXG5cdFx0aWYgKCF1c2VyKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAobXcudXRpbC5pc0lQdjRBZGRyZXNzKHVzZXIpIHx8IG13LnV0aWwuaXNJUHY2QWRkcmVzcyh1c2VyKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0dXNlckxpbmtzW3VzZXJdID8/PSBbXTtcblxuXHRcdHVzZXJMaW5rc1t1c2VyXVt1c2VyTGlua3NbdXNlcl0ubGVuZ3RoXSA9ICRlbGVtZW50OyAvLyBSZXBsYWNlIEFycmF5I3B1c2ggdG8gYXZvaWQgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXHR9XG5cblx0cmV0dXJuIHVzZXJMaW5rcztcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVVc2VyTGlua3N9O1xuIiwgImltcG9ydCB7Z2V0R2xvYmFsVXNlckdyb3VwcywgZ2V0TG9jYWxVc2VyR3JvdXBzfSBmcm9tICcuL3V0aWwvZ2V0VXNlckdyb3Vwcyc7XG5pbXBvcnQge2FwcGVuZFVzZXJSaWdodHNNYXJrfSBmcm9tICcuL3V0aWwvYXBwZW5kVXNlclJpZ2h0c01hcmsnO1xuaW1wb3J0IHtnZW5lcmF0ZVVzZXJMaW5rc30gZnJvbSAnLi91dGlsL2dlbmVyYXRlVXNlckxpbmtzJztcblxuY29uc3QgbWFya1VzZXJSaWdodHMgPSAoJGNvbnRlbnQ6IEpRdWVyeSk6IHZvaWQgPT4ge1xuXHRjb25zdCB1c2VyTGlua3MgPSBnZW5lcmF0ZVVzZXJMaW5rcygkY29udGVudCk7XG5cblx0Ly8gQ29udmVydCB1c2VycyBpbnRvIGFycmF5XG5cdGNvbnN0IHVzZXJzOiBzdHJpbmdbXSA9IE9iamVjdC5rZXlzKHVzZXJMaW5rcyk7XG5cdGlmICghdXNlcnMubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJHVzZXJMaW5rcyA9IE9iamVjdC52YWx1ZXModXNlckxpbmtzKS5yZWR1Y2UoKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRWYWx1ZSkgPT4ge1xuXHRcdHJldHVybiBbLi4ucHJldmlvdXNWYWx1ZSwgLi4uY3VycmVudFZhbHVlXTtcblx0fSk7XG5cdGlmICghJHVzZXJMaW5rcy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwcm9taXNlczogKCgpID0+IFByb21pc2U8dm9pZD4pW10gPSBbXTtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHVzZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgdXN1c2VycyA9IHVzZXJzLnNwbGljZSgwLCAyNSkuZmlsdGVyKChlbGVtZW50KSA9PiB7XG5cdFx0XHRyZXR1cm4gIShtdy51dGlsLmlzSVB2NEFkZHJlc3MoZWxlbWVudCkgfHwgbXcudXRpbC5pc0lQdjZBZGRyZXNzKGVsZW1lbnQpKTtcblx0XHR9KTtcblxuXHRcdGlmICghdXN1c2Vycy5sZW5ndGgpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHByb21pc2VzW3Byb21pc2VzLmxlbmd0aF0gPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0XHRsZXQgdXNlckdyb3VwczogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+ID0ge307XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdHVzZXJHcm91cHMgPSBhd2FpdCBnZXRMb2NhbFVzZXJHcm91cHModXN1c2Vycyk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKCdbTWFya1JpZ2h0c10gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdFx0XHR9XG5cblx0XHRcdGFwcGVuZFVzZXJSaWdodHNNYXJrKCR1c2VyTGlua3MsIHVzZXJHcm91cHMpO1xuXHRcdH07XG5cblx0XHRwcm9taXNlc1twcm9taXNlcy5sZW5ndGhdID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdFx0bGV0IHVzZXJHcm91cHM6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiA9IHt9O1xuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHR1c2VyR3JvdXBzID0gYXdhaXQgZ2V0R2xvYmFsVXNlckdyb3Vwcyh1c3VzZXJzKTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ1tNYXJrUmlnaHRzXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0XHRcdH1cblxuXHRcdFx0YXBwZW5kVXNlclJpZ2h0c01hcmsoJHVzZXJMaW5rcywgdXNlckdyb3Vwcyk7XG5cdFx0fTtcblx0fVxuXG5cdHZvaWQgKGFzeW5jICgpID0+IHtcblx0XHRmb3IgKGNvbnN0IHByb21pc2Ugb2YgcHJvbWlzZXMpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGF3YWl0IHByb21pc2UoKTtcblx0XHRcdH0gY2F0Y2gge31cblx0XHR9XG5cdH0pKCk7XG59O1xuXG5leHBvcnQge21hcmtVc2VyUmlnaHRzfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQUEsQ0FBQTtBQUFBQyxTQUFBRCxvQkFBQTtFQUFBRSxxQkFBQUEsTUFBQUE7RUFBQUMsb0JBQUFBLE1BQUFBO0VBQUFDLHVCQUFBQSxNQUFBQTtFQUFBQyxpQkFBQUEsTUFBQUE7QUFBQSxDQUFBO0FBQUFDLE9BQUFDLFVBQUFDLGFBQUFSLGtCQUFBOztBQ0NDLElBQUFTLG1CQUFvQjtBQUNwQixJQUFBQyxrQkFBbUI7QUFDbkIsSUFBQUMsVUFBVzs7QUNGWixJQUFBQyxvQkFBd0JDLFFBQUEsaUJBQUE7QUFFeEIsSUFBTUMsT0FBQSxHQUFjRixrQkFBQUcsV0FBQSxjQUFBQyxPQUFnQ0wsT0FBTyxDQUFFOztBQ0M3RCxJQUFNTSxRQUFTQyxHQUFHQyxRQUFRQyxXQUFXRixHQUFHQztBQUV4QyxJQUFNZCxrQkFBQSw0QkFBQTtBQUFBLE1BQUFnQixPQUFBQyxrQkFBa0IsV0FBT0MsU0FBK0I7QUFDN0QsVUFBTUMsU0FBOEI7TUFDbkNEO01BQ0FFLFFBQVE7TUFDUkMsUUFBUTtNQUNSQyxlQUFlO01BQ2ZDLE1BQU07TUFDTkMsUUFBUTtNQUNSQyxTQUFTO01BQ1RDLFFBQVE7SUFDVDtBQUNBLFVBQU1DLFdBQUEsTUFBaUJsQixJQUFJbUIsSUFBSVQsTUFBTTtBQUVyQyxXQUFPUTtFQUNSLENBQUE7QUFBQSxTQUFBLFNBZE0zQixpQkFBQTZCLElBQUE7QUFBQSxXQUFBYixLQUFBYyxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEdBQUE7QUFnQk4sSUFBTWhDLHdCQUFBLDRCQUFBO0FBQUEsTUFBQWlDLFFBQUFmLGtCQUF3QixXQUFPZ0IsU0FBb0I7QUFDeEQsVUFBTWQsU0FBUztNQUNkQyxRQUFRO01BQ1JDLFFBQVE7TUFDUkMsZUFBZTtNQUNmWSxNQUFNO01BQ05EO01BQ0FFLFNBQVM7TUFDVFYsU0FBUztNQUNUQyxRQUFRO0lBQ1Q7QUFDQSxVQUFNQyxXQUFBLE1BQWlCbEIsSUFBSW1CLElBQUlULE1BQU07QUFFckMsV0FBT1E7RUFDUixDQUFBO0FBQUEsU0FBQSxTQWRNNUIsdUJBQUFxQyxLQUFBO0FBQUEsV0FBQUosTUFBQUYsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxHQUFBO0FBZ0JOLElBQU1qQyxxQkFBQSw0QkFBQTtBQUFBLE1BQUF1QyxRQUFBcEIsa0JBQXFCLFdBQU9DLFNBQXlEO0FBQzFGLFVBQU1vQixhQUF1QyxDQUFDO0FBRTlDcEIsY0FBVUEsUUFBUXFCLE9BQVFDLGNBQWE7QUFBQSxVQUFBQztBQUN0QyxhQUFPLEVBQUNILGVBQUEsUUFBQUEsZUFBQSxXQUFBRyx1QkFBQUgsV0FBYUUsUUFBUSxPQUFBLFFBQUFDLHlCQUFBLFVBQXJCQSxxQkFBd0JDO0lBQ2pDLENBQUM7QUFBQSxRQUFBQyxhQUFBQywyQkFFa0IxQixPQUFBLEdBQUEyQjtBQUFBLFFBQUE7QUFBbkIsV0FBQUYsV0FBQUcsRUFBQSxHQUFBLEVBQUFELFNBQUFGLFdBQUFJLEVBQUEsR0FBQUMsUUFBNEI7QUFBQSxjQUFqQkMsT0FBQUosT0FBQUs7QUFDVixZQUFJdEMsTUFBTXVDLFVBQWtCOUMsa0JBQWtCNEMsSUFBSSxHQUFHO0FBQ3BEWCxxQkFBV1csSUFBSSxJQUFJckMsTUFBTXVDLFVBQWtCOUMsa0JBQWtCNEMsSUFBSTtRQUNsRTtBQUNBL0Isa0JBQVVBLFFBQVFxQixPQUFRQyxjQUFhO0FBQ3RDLGlCQUFPQSxhQUFhUztRQUNyQixDQUFDO01BQ0Y7SUFBQSxTQUFBRyxLQUFBO0FBQUFULGlCQUFBVSxFQUFBRCxHQUFBO0lBQUEsVUFBQTtBQUFBVCxpQkFBQVcsRUFBQTtJQUFBO0FBRUEsUUFBSTtBQUNILFlBQU0zQixXQUFBLE1BQWlCM0IsZ0JBQWdCa0IsT0FBTztBQUM5QyxZQUFNO1FBQUNxQyxPQUFPQztNQUFVLElBQUk3QixTQUFTLE9BQU87QUFBQSxVQUFBOEIsYUFBQWIsMkJBSXpCWSxVQUFBLEdBQUFFO0FBQUEsVUFBQTtBQUFuQixhQUFBRCxXQUFBWCxFQUFBLEdBQUEsRUFBQVksU0FBQUQsV0FBQVYsRUFBQSxHQUFBQyxRQUErQjtBQUFBLGNBQUFXO0FBQUEsZ0JBQXBCVixPQUFBUyxPQUFBUjtBQUNWLGNBQUksRUFBQ0QsU0FBQSxRQUFBQSxTQUFBLFVBQUFBLEtBQU1XLFNBQVEsRUFBQ1gsU0FBQSxRQUFBQSxTQUFBLFVBQUFBLEtBQU1ZLFNBQVE7QUFDakM7VUFDRDtBQUVBLGdCQUFNO1lBQUNEO1lBQU1DO1VBQU0sSUFBSVo7QUFFdkIsV0FBQVUsbUJBQUFyQixXQUFXc0IsSUFBSSxPQUFBLFFBQUFELHFCQUFBLFNBQUFBLG1CQUFmckIsV0FBV3NCLElBQUksSUFBTSxDQUFBO0FBRXJCdEIscUJBQVdzQixJQUFJLElBQUksQ0FDbEIsR0FBR3RCLFdBQVdzQixJQUFJLEdBQ2xCLEdBQUdDLE9BQU90QixPQUFRdUIsYUFBWTtBQUM3QixtQkFBT0EsWUFBWTtVQUNwQixDQUFDLENBQUE7QUFJRmxELGdCQUFNbUQsVUFBa0IxRCxrQkFBa0J1RCxNQUFNdEIsV0FBV3NCLElBQUksR0FBRyxLQUFLLEVBQUU7UUFDMUU7TUFBQSxTQUFBUixLQUFBO0FBQUFLLG1CQUFBSixFQUFBRCxHQUFBO01BQUEsVUFBQTtBQUFBSyxtQkFBQUgsRUFBQTtNQUFBO0lBQ0QsU0FBU1UsT0FBZ0I7QUFDeEJDLGNBQVFELE1BQU0sNEJBQTRCQSxLQUFLO0lBQ2hEO0FBRUEsV0FBTzFCO0VBQ1IsQ0FBQTtBQUFBLFNBQUEsU0E5Q014QyxvQkFBQW9FLEtBQUE7QUFBQSxXQUFBN0IsTUFBQVAsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxHQUFBO0FBZ0ROLElBQU1sQyxzQkFBQSw0QkFBQTtBQUFBLE1BQUFzRSxRQUFBbEQsa0JBQXNCLFdBQU9DLFNBQXlEO0FBQzNGLFVBQU1vQixhQUF1QyxDQUFDO0FBRTlDcEIsY0FBVUEsUUFBUXFCLE9BQVFDLGNBQWE7QUFBQSxVQUFBNEI7QUFDdEMsYUFBTyxFQUFDOUIsZUFBQSxRQUFBQSxlQUFBLFdBQUE4Qix3QkFBQTlCLFdBQWFFLFFBQVEsT0FBQSxRQUFBNEIsMEJBQUEsVUFBckJBLHNCQUF3QjFCO0lBQ2pDLENBQUM7QUFBQSxRQUFBMkIsYUFBQXpCLDJCQUVrQjFCLE9BQUEsR0FBQW9EO0FBQUEsUUFBQTtBQUFuQixXQUFBRCxXQUFBdkIsRUFBQSxHQUFBLEVBQUF3QixTQUFBRCxXQUFBdEIsRUFBQSxHQUFBQyxRQUE0QjtBQUFBLGNBQWpCQyxPQUFBcUIsT0FBQXBCO0FBQ1YsWUFBSXRDLE1BQU11QyxVQUFrQi9DLG1CQUFtQjZDLElBQUksR0FBRztBQUNyRFgscUJBQVdXLElBQUksSUFBSXJDLE1BQU11QyxVQUFrQi9DLG1CQUFtQjZDLElBQUk7UUFDbkU7QUFDQS9CLGtCQUFVQSxRQUFRcUIsT0FBUUMsY0FBYTtBQUN0QyxpQkFBT0EsYUFBYVM7UUFDckIsQ0FBQztNQUNGO0lBQUEsU0FBQUcsS0FBQTtBQUFBaUIsaUJBQUFoQixFQUFBRCxHQUFBO0lBQUEsVUFBQTtBQUFBaUIsaUJBQUFmLEVBQUE7SUFBQTtBQUFBLFFBQUFpQixhQUFBM0IsMkJBRW1CMUIsT0FBQSxHQUFBc0Q7QUFBQSxRQUFBO0FBQW5CLFdBQUFELFdBQUF6QixFQUFBLEdBQUEsRUFBQTBCLFNBQUFELFdBQUF4QixFQUFBLEdBQUFDLFFBQTRCO0FBQUEsY0FBakJDLE9BQUF1QixPQUFBdEI7QUFDVixZQUFJO0FBQUEsY0FBQXVCO0FBQ0gsZ0JBQU05QyxXQUFBLE1BQWlCNUIsc0JBQXNCa0QsSUFBSTtBQUNqRCxnQkFBTTtZQUFDeUI7VUFBYyxJQUFJL0MsU0FBUyxPQUFPO0FBSXpDLGNBQUksRUFBQytDLG1CQUFBLFFBQUFBLG1CQUFBLFVBQUFBLGVBQWdCYixTQUFRO0FBQzVCO1VBQ0Q7QUFFQSxnQkFBTTtZQUFDQTtVQUFNLElBQUlhO0FBRWpCLFdBQUFELG1CQUFBbkMsV0FBV1csSUFBSSxPQUFBLFFBQUF3QixxQkFBQSxTQUFBQSxtQkFBZm5DLFdBQVdXLElBQUksSUFBTSxDQUFBO0FBRXJCWCxxQkFBV1csSUFBSSxJQUFJLENBQUMsR0FBR1gsV0FBV1csSUFBSSxHQUFHLEdBQUdZLE1BQU07QUFHbERqRCxnQkFBTW1ELFVBQWtCM0QsbUJBQW1CNkMsTUFBTVgsV0FBV1csSUFBSSxHQUFHLEtBQUssRUFBRTtRQUMzRSxTQUFTZSxPQUFnQjtBQUN4QkMsa0JBQVFELE1BQU0sNEJBQTRCQSxLQUFLO1FBQ2hEO01BQ0Q7SUFBQSxTQUFBWixLQUFBO0FBQUFtQixpQkFBQWxCLEVBQUFELEdBQUE7SUFBQSxVQUFBO0FBQUFtQixpQkFBQWpCLEVBQUE7SUFBQTtBQUVBLFdBQU9oQjtFQUNSLENBQUE7QUFBQSxTQUFBLFNBekNNekMscUJBQUE4RSxLQUFBO0FBQUEsV0FBQVIsTUFBQXJDLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsR0FBQTs7QUN0Rk4sSUFBQTZDLHFCQUF1QnBFLFFBQUEsaUJBQUE7QUFFdkIsSUFBTXFFLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLFlBQUEsR0FBV0YsbUJBQUFHLFVBQVM7TUFDbkJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsc0JBQUEsR0FBcUJMLG1CQUFBRyxVQUFTO01BQzdCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RFLFVBQUEsR0FBU04sbUJBQUFHLFVBQVM7TUFDakJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREcsWUFBQSxHQUFXUCxtQkFBQUcsVUFBUztNQUNuQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNESSxXQUFBLEdBQVVSLG1CQUFBRyxVQUFTO01BQ2xCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RLLFFBQUEsR0FBT1QsbUJBQUFHLFVBQVM7TUFDZkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELG9CQUFBLEdBQW1CSixtQkFBQUcsVUFBUztNQUMzQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNETSxpQkFBQSxHQUFnQlYsbUJBQUFHLFVBQVM7TUFDeEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRE8sV0FBQSxHQUFVWCxtQkFBQUcsVUFBUztNQUNsQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEUSxZQUFBLEdBQVdaLG1CQUFBRyxVQUFTO01BQ25CQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RTLGdCQUFBLEdBQWViLG1CQUFBRyxVQUFTO01BQ3ZCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RVLGVBQUEsR0FBY2QsbUJBQUFHLFVBQVM7TUFDdEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCx1QkFBQSxHQUFzQkosbUJBQUFHLFVBQVM7TUFDOUJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRFcsWUFBQSxHQUFXZixtQkFBQUcsVUFBUztNQUNuQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEWSxnQkFBQSxHQUFlaEIsbUJBQUFHLFVBQVM7TUFDdkJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRGEsTUFBQSxHQUFLakIsbUJBQUFHLFVBQVM7TUFDYkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEYyxRQUFBLEdBQU9sQixtQkFBQUcsVUFBUztNQUNmQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0Qsc0JBQUEsR0FBcUJKLG1CQUFBRyxVQUFTO01BQzdCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0QsbUJBQUEsR0FBa0JKLG1CQUFBRyxVQUFTO01BQzFCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1lLGVBQWVsQixnQkFBZ0I7QUFFckMsSUFBTW1CLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FDMUdBLElBQU1DLGNBQWVDLFNBQXdCO0FBQzVDLE1BQUksQ0FBQ0EsS0FBSztBQUNULFdBQU87RUFDUjtBQUVBLFFBQU0zRCxXQUEwQjNCLEdBQUd1RixLQUFLQyxjQUFjLFNBQVNGLEdBQUc7QUFFbEUsUUFBTUcsU0FBU0EsQ0FBQ0MsUUFBZ0JDLFlBQWlEO0FBQ2hGLFdBQU9DLG9CQUNMLE1BQWM7QUFDZCxVQUFJO0FBQ0gsZUFBT0EsbUJBQW1CRCxRQUFRRCxNQUFNLENBQUM7TUFDMUMsUUFBUTtBQUNQLGVBQU9DLFFBQVFELE1BQU0sRUFBRUMsUUFBUSxhQUFhLEtBQUs7TUFDbEQ7SUFDRCxHQUFHLENBQ0o7RUFDRDtBQUVBLE1BQUloRSxVQUFVO0FBQ2IsV0FBTzhELE9BQU85RCxVQUFXK0QsWUFBMkI7QUFDbkQsYUFBT0EsT0FBT0MsUUFBUSxTQUFTLEVBQUUsRUFBRUEsUUFBUSxNQUFNLEdBQUc7SUFDckQsQ0FBQztFQUNGO0FBRUEsUUFBTUUsZ0JBQXlDUCxJQUFJUSxNQUFNLHFCQUFxQjtBQUU5RSxNQUFJRCxrQkFBQSxRQUFBQSxrQkFBQSxVQUFBQSxjQUFnQixDQUFDLEdBQUc7QUFDdkIsV0FBT0osT0FBT0ksY0FBYyxDQUFDLEdBQUlILFlBQTJCO0FBQzNELGFBQU9BLE9BQU9DLFFBQVEsTUFBTSxHQUFHO0lBQ2hDLENBQUM7RUFDRjtBQUVBLFNBQU87QUFDUjs7QUMvQkEsSUFBQUkscUJBQTBCcEcsUUFBQSxpQkFBQTtBQUUxQixJQUFNcUcsdUJBQXVCQSxDQUFDQyxZQUF5Q3hFLGVBQStDO0FBQUEsTUFBQXlFLGFBQUFuRSwyQkFDOUZrRSxVQUFBLEdBQUFFO0FBQUEsTUFBQTtBQUF2QixTQUFBRCxXQUFBakUsRUFBQSxHQUFBLEVBQUFrRSxTQUFBRCxXQUFBaEUsRUFBQSxHQUFBQyxRQUFtQztBQUFBLFVBQUFpRSxnQkFBQUM7QUFBQSxZQUF4QkMsV0FBQUgsT0FBQTlEO0FBQ1YsWUFBTVYsV0FBbUIwRCxhQUFBZSxpQkFBWUUsU0FBU0MsS0FBSyxNQUFNLE9BQUEsUUFBQUgsbUJBQUEsU0FBQUEsaUJBQUssRUFBRTtBQUNoRSxVQUFJLENBQUN6RSxVQUFVO0FBQ2Q7TUFDRDtBQUVBRixxQkFBQSxRQUFBQSxlQUFBLFNBQUFBLGFBQUFBLGFBQWUsQ0FBQztBQUNoQixZQUFNdUIsVUFBQXFELHdCQUFTNUUsV0FBV0UsUUFBUSxPQUFBLFFBQUEwRSwwQkFBQSxTQUFBQSx3QkFBSyxDQUFBO0FBRXZDLFVBQUlHO0FBQ0osVUFBSUYsU0FBU0csUUFBUSxJQUFJLEVBQUVDLEtBQUsscUJBQXFCLEVBQUU3RSxRQUFRO0FBQzlEMkUsZ0JBQVFGLFNBQVNLLFNBQVMscUJBQXFCLEVBQUVDLEdBQUcsQ0FBQztNQUN0RCxXQUFXTixTQUFTSyxTQUFTLHFCQUFxQixFQUFFOUUsUUFBUTtBQUMzRDJFLGdCQUFRRixTQUFTRyxRQUFRLElBQUksRUFBRUMsS0FBSyxxQkFBcUIsRUFBRUUsR0FBRyxDQUFDO01BQ2hFLE9BQU87QUFDTkosZ0JBQVFLLEVBQUUsUUFBUSxFQUFFQyxTQUFTLG9CQUFvQjtBQUNqRFIsaUJBQVNTLE1BQU1QLEtBQUs7TUFDckI7QUFBQSxVQUFBUSxhQUFBakYsNEJBRVcsR0FBU2dFLG1CQUFBa0IsYUFBWWpFLE1BQU0sQ0FBQSxHQUFBa0U7QUFBQSxVQUFBO0FBQXRDLGFBQUFGLFdBQUEvRSxFQUFBLEdBQUEsRUFBQWlGLFNBQUFGLFdBQUE5RSxFQUFBLEdBQUFDLFFBQXlDO0FBQUEsZ0JBQTlCZ0YsUUFBQUQsT0FBQTdFO0FBQ1YsZ0JBQU0rRSxZQUFBLHVCQUFBdEgsT0FBMkNxSCxLQUFLO0FBQ3RELGdCQUFNRSxzQkFBQSxzQkFBQXZILE9BQW9EcUgsS0FBSztBQUMvRCxjQUFJWCxNQUFNRSxLQUFLLEtBQUssRUFBRVksU0FBU0YsU0FBUyxLQUFLWixNQUFNRSxLQUFLLEtBQUssRUFBRVksU0FBU0QsbUJBQW1CLEdBQUc7QUFDN0Y7VUFDRDtBQUVBYixnQkFBTWU7Ozs7WUFJTFYsRUFBRSxPQUFPLEVBQ1BDLFNBQVNNLFNBQVMsRUFDbEJOLFNBQVNPLG1CQUFtQixFQUM1QmQsS0FBSztjQUNMaUIsS0FBS3JDLFdBQVdnQyxLQUFtQjtjQUNuQ00sT0FBT3RDLFdBQVdnQyxLQUFtQjtZQUN0QyxDQUFDO1VBQ0g7UUFDRDtNQUFBLFNBQUE1RSxLQUFBO0FBQUF5RSxtQkFBQXhFLEVBQUFELEdBQUE7TUFBQSxVQUFBO0FBQUF5RSxtQkFBQXZFLEVBQUE7TUFBQTtJQUNEO0VBQUEsU0FBQUYsS0FBQTtBQUFBMkQsZUFBQTFELEVBQUFELEdBQUE7RUFBQSxVQUFBO0FBQUEyRCxlQUFBekQsRUFBQTtFQUFBO0FBQ0Q7O0FDOUNBLElBQU1pRixvQkFBcUJDLGNBQWtFO0FBQzVGLFFBQU1DLFlBQXlELENBQUM7QUFDaEUsUUFBTUMsWUFBWUYsU0FBU2pCLEtBQXdCLHFDQUFxQztBQUFBLE1BQUFvQixhQUFBL0YsMkJBRWxFOEYsU0FBQSxHQUFBRTtBQUFBLE1BQUE7QUFBdEIsU0FBQUQsV0FBQTdGLEVBQUEsR0FBQSxFQUFBOEYsU0FBQUQsV0FBQTVGLEVBQUEsR0FBQUMsUUFBaUM7QUFBQSxVQUFBNkY7QUFBQSxZQUF0Qi9FLFVBQUE4RSxPQUFBMUY7QUFDVixZQUFNaUUsV0FBc0NPLEVBQUU1RCxPQUFPO0FBQ3JELFVBQ0NxRCxTQUFTRyxRQUFRLElBQUksRUFBRUMsS0FBSyxxQkFBcUIsRUFBRTdFLFVBQ25EeUUsU0FBU0ssU0FBUyxxQkFBcUIsRUFBRTlFLFFBQ3hDO0FBQ0Q7TUFDRDtBQUVBLFlBQU07UUFBQ29HO01BQVcsSUFBSWhGO0FBQ3RCLFlBQU1iLE9BQTJCNkYsZ0JBQUEsUUFBQUEsZ0JBQUEsU0FBQSxTQUFBQSxZQUFhQyxTQUFTO0FBRXZELFVBQUksQ0FBQzlGLE1BQU07QUFDVjtNQUNEO0FBRUEsVUFBSXBDLEdBQUd1RixLQUFLNEMsY0FBYy9GLElBQUksS0FBS3BDLEdBQUd1RixLQUFLNkMsY0FBY2hHLElBQUksR0FBRztBQUMvRDtNQUNEO0FBRUEsT0FBQTRGLGtCQUFBSixVQUFVeEYsSUFBSSxPQUFBLFFBQUE0RixvQkFBQSxTQUFBQSxrQkFBZEosVUFBVXhGLElBQUksSUFBTSxDQUFBO0FBRXBCd0YsZ0JBQVV4RixJQUFJLEVBQUV3RixVQUFVeEYsSUFBSSxFQUFFUCxNQUFNLElBQUl5RTtJQUMzQztFQUFBLFNBQUEvRCxLQUFBO0FBQUF1RixlQUFBdEYsRUFBQUQsR0FBQTtFQUFBLFVBQUE7QUFBQXVGLGVBQUFyRixFQUFBO0VBQUE7QUFFQSxTQUFPbUY7QUFDUjs7QUMxQkEsSUFBTVMsaUJBQWtCVixjQUEyQjtBQUNsRCxRQUFNQyxZQUFZRixrQkFBa0JDLFFBQVE7QUFHNUMsUUFBTWpGLFFBQWtCNEYsT0FBT0MsS0FBS1gsU0FBUztBQUM3QyxNQUFJLENBQUNsRixNQUFNYixRQUFRO0FBQ2xCO0VBQ0Q7QUFFQSxRQUFNb0UsYUFBYXFDLE9BQU9FLE9BQU9aLFNBQVMsRUFBRWEsT0FBTyxDQUFDQyxlQUFlQyxpQkFBaUI7QUFDbkYsV0FBTyxDQUFDLEdBQUdELGVBQWUsR0FBR0MsWUFBWTtFQUMxQyxDQUFDO0FBQ0QsTUFBSSxDQUFDMUMsV0FBV3BFLFFBQVE7QUFDdkI7RUFDRDtBQUVBLFFBQU0rRyxXQUFvQyxDQUFBO0FBRTFDLFdBQVNDLElBQUksR0FBR0EsSUFBSW5HLE1BQU1iLFFBQVFnSCxLQUFLO0FBQ3RDLFVBQU14SSxVQUFVcUMsTUFBTW9HLE9BQU8sR0FBRyxFQUFFLEVBQUVwSCxPQUFRdUIsYUFBWTtBQUN2RCxhQUFPLEVBQUVqRCxHQUFHdUYsS0FBSzRDLGNBQWNsRixPQUFPLEtBQUtqRCxHQUFHdUYsS0FBSzZDLGNBQWNuRixPQUFPO0lBQ3pFLENBQUM7QUFFRCxRQUFJLENBQUM1QyxRQUFRd0IsUUFBUTtBQUNwQjtJQUNEO0FBRUErRyxhQUFTQSxTQUFTL0csTUFBTSxJQUFBekIsa0NBQUksYUFBMkI7QUFDdEQsVUFBSXFCLGFBQXVDLENBQUM7QUFFNUMsVUFBSTtBQUNIQSxxQkFBQSxNQUFtQnhDLG1CQUFtQm9CLE9BQU87TUFDOUMsU0FBUzhDLE9BQWdCO0FBQ3hCQyxnQkFBUUQsTUFBTSw0QkFBNEJBLEtBQUs7TUFDaEQ7QUFFQTZDLDJCQUFxQkMsWUFBWXhFLFVBQVU7SUFDNUMsQ0FBQTtBQUVBbUgsYUFBU0EsU0FBUy9HLE1BQU0sSUFBQXpCLGtDQUFJLGFBQTJCO0FBQ3RELFVBQUlxQixhQUF1QyxDQUFDO0FBRTVDLFVBQUk7QUFDSEEscUJBQUEsTUFBbUJ6QyxvQkFBb0JxQixPQUFPO01BQy9DLFNBQVM4QyxPQUFnQjtBQUN4QkMsZ0JBQVFELE1BQU0sNEJBQTRCQSxLQUFLO01BQ2hEO0FBRUE2QywyQkFBcUJDLFlBQVl4RSxVQUFVO0lBQzVDLENBQUE7RUFDRDtBQUVBLE9BQUFyQixrQkFBTSxhQUFZO0FBQ2pCLGFBQUEySSxLQUFBLEdBQUFDLFlBQXNCSixVQUFBRyxLQUFBQyxVQUFBbkgsUUFBQWtILE1BQVU7QUFBaEMsWUFBV0UsVUFBQUQsVUFBQUQsRUFBQTtBQUNWLFVBQUk7QUFDSCxjQUFNRSxRQUFRO01BQ2YsUUFBUTtNQUFDO0lBQ1Y7RUFDRCxDQUFBLEVBQUc7QUFDSjs7QVIxREFqSixHQUFHa0osS0FBSyxrQkFBa0IsRUFBRUMsSUFBSSxTQUFTQyxXQUFXekIsVUFBZ0I7QUFDbkUsTUFBSUEsU0FBU3BCLEtBQUssSUFBSSxNQUFNLHFCQUFxQm9CLFNBQVNMLFNBQVMsZ0JBQWdCLEdBQUc7QUFDckYsU0FBS2UsZUFBZVYsUUFBUTtFQUM3QjtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbIk1hcmtSaWdodHNfZXhwb3J0cyIsICJfX2V4cG9ydCIsICJnZXRHbG9iYWxVc2VyR3JvdXBzIiwgImdldExvY2FsVXNlckdyb3VwcyIsICJxdWVyeUdsb2JhbFVzZXJHcm91cHMiLCAicXVlcnlVc2VyR3JvdXBzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIl9fdG9Db21tb25KUyIsICJzdG9yYWdlS2V5R2xvYmFsIiwgInN0b3JhZ2VLZXlMb2NhbCIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAic3RvcmUiLCAibXciLCAic3RvcmFnZSIsICJzZXNzaW9uIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidXN1c2VycyIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgImxpc3QiLCAidXNwcm9wIiwgInNtYXhhZ2UiLCAibWF4YWdlIiwgInJlc3BvbnNlIiwgImdldCIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiX3JlZjIiLCAiZ3VpdXNlciIsICJtZXRhIiwgImd1aXByb3AiLCAiX3gyIiwgIl9yZWYzIiwgInVzZXJHcm91cHMiLCAiZmlsdGVyIiwgInVzZXJuYW1lIiwgIl91c2VyR3JvdXBzJHVzZXJuYW1lIiwgImxlbmd0aCIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJ1c2VyIiwgInZhbHVlIiwgImdldE9iamVjdCIsICJlcnIiLCAiZSIsICJmIiwgInVzZXJzIiwgInF1ZXJ5VXNlcnMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiX3VzZXJHcm91cHMkbmFtZSIsICJuYW1lIiwgImdyb3VwcyIsICJlbGVtZW50IiwgInNldE9iamVjdCIsICJlcnJvciIsICJjb25zb2xlIiwgIl94MyIsICJfcmVmNCIsICJfdXNlckdyb3VwcyR1c2VybmFtZTIiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiX2l0ZXJhdG9yNSIsICJfc3RlcDUiLCAiX3VzZXJHcm91cHMkdXNlciIsICJnbG9iYWx1c2VyaW5mbyIsICJfeDQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImdldEkxOG5NZXNzYWdlcyIsICJ3ZWJtYXN0ZXIiLCAibG9jYWxpemUiLCAiZW4iLCAicmVzcG9uc2libGVvcGVyYXRvciIsICJzdGV3YXJkIiwgImNoZWNrdXNlciIsICJzdXBwcmVzcyIsICJzeXNvcCIsICJ0ZW1wbGF0ZWVkaXRvciIsICJpbXBvcnRlciIsICJwYXRyb2xsZXIiLCAiYXV0b3BhdHJvbGxlZCIsICJldmVudHNwb25zb3IiLCAiY29uZmlybWVkIiwgImF1dG9jb25maXJtZWQiLCAiYm90IiwgImZsb29kIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJnZXRVc2VyTmFtZSIsICJ1cmwiLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgImRlY29kZSIsICJzdHJpbmciLCAicmVwbGFjZSIsICJkZWNvZGVVUklDb21wb25lbnQiLCAidXNlcm5hbWVNYXRjaCIsICJtYXRjaCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiYXBwZW5kVXNlclJpZ2h0c01hcmsiLCAiJHVzZXJMaW5rcyIsICJfaXRlcmF0b3I2IiwgIl9zdGVwNiIsICJfJGVsZW1lbnQkYXR0ciIsICJfdXNlckdyb3VwcyR1c2VybmFtZTMiLCAiJGVsZW1lbnQiLCAiYXR0ciIsICIkc3VwcyIsICJwYXJlbnRzIiwgImZpbmQiLCAic2libGluZ3MiLCAiZXEiLCAiJCIsICJhZGRDbGFzcyIsICJhZnRlciIsICJfaXRlcmF0b3I3IiwgInVuaXF1ZUFycmF5IiwgIl9zdGVwNyIsICJncm91cCIsICJjbGFzc05hbWUiLCAiZGVwcmVjYXRlZENsYXNzTmFtZSIsICJoYXNDbGFzcyIsICJhcHBlbmQiLCAiYWx0IiwgInRpdGxlIiwgImdlbmVyYXRlVXNlckxpbmtzIiwgIiRjb250ZW50IiwgInVzZXJMaW5rcyIsICIkZWxlbWVudHMiLCAiX2l0ZXJhdG9yOCIsICJfc3RlcDgiLCAiX3VzZXJMaW5rcyR1c2VyIiwgInRleHRDb250ZW50IiwgInRvU3RyaW5nIiwgImlzSVB2NEFkZHJlc3MiLCAiaXNJUHY2QWRkcmVzcyIsICJtYXJrVXNlclJpZ2h0cyIsICJPYmplY3QiLCAia2V5cyIsICJ2YWx1ZXMiLCAicmVkdWNlIiwgInByZXZpb3VzVmFsdWUiLCAiY3VycmVudFZhbHVlIiwgInByb21pc2VzIiwgImkiLCAic3BsaWNlIiwgIl9pIiwgIl9wcm9taXNlcyIsICJwcm9taXNlIiwgImhvb2siLCAiYWRkIiwgIm1hcmtSaWdodHMiXQp9Cg==
