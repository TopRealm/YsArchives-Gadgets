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
var import_ext_gadget2 = require("ext.gadget.Util");
var appendUserRightsMark = ($userLinks, userGroups) => {
  var _iterator2 = _createForOfIteratorHelper($userLinks), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var _$element$attr, _userGroups$username;
      const $element = _step2.value;
      const username = getUserName((_$element$attr = $element.attr("href")) !== null && _$element$attr !== void 0 ? _$element$attr : "");
      if (!username) {
        continue;
      }
      userGroups !== null && userGroups !== void 0 ? userGroups : userGroups = {};
      const groups = (_userGroups$username = userGroups[username]) !== null && _userGroups$username !== void 0 ? _userGroups$username : [];
      let $sups;
      if ($element.parents("li").find(".gadgets-markrights").length) {
        $sups = $element.siblings(".gadgets-markrights").eq(0);
      } else if ($element.siblings(".gadgets-markrights").length) {
        $sups = $element.parents("li").find(".gadgets-markrights").eq(0);
      } else {
        $sups = $("<span>").addClass("gadgets-markrights");
        $element.after($sups);
      }
      var _iterator3 = _createForOfIteratorHelper((0, import_ext_gadget2.uniqueArray)(groups)), _step3;
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
};
//! src/MarkRights/modules/util/generateUserLinks.ts
var generateUserLinks = ($content) => {
  const userLinks = {};
  const $elements = $content.find("a.mw-userlink:not(.mw-anonuserlink)");
  var _iterator4 = _createForOfIteratorHelper($elements), _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
      var _userLinks$user;
      const element = _step4.value;
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
      var _userGroups$username2;
      if (mw.storage.getObject(storageKeyLocal + username)) {
        userGroups[username] = mw.storage.getObject(storageKeyLocal + username);
      }
      return !(userGroups !== null && userGroups !== void 0 && (_userGroups$username2 = userGroups[username]) !== null && _userGroups$username2 !== void 0 && _userGroups$username2.length);
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
            groups
          } = user;
          (_userGroups$name = userGroups[name]) !== null && _userGroups$name !== void 0 ? _userGroups$name : userGroups[name] = [];
          userGroups[name] = [...userGroups[name], ...groups.filter((element) => {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01hcmtSaWdodHMvTWFya1JpZ2h0cy50cyIsICJzcmMvTWFya1JpZ2h0cy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL01hcmtSaWdodHMvbW9kdWxlcy91dGlsL2dldFVzZXJOYW1lLnRzIiwgInNyYy9NYXJrUmlnaHRzL21vZHVsZXMvdXRpbC9hcHBlbmRVc2VyUmlnaHRzTWFyay50cyIsICJzcmMvTWFya1JpZ2h0cy9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVVc2VyTGlua3MudHMiLCAic3JjL01hcmtSaWdodHMvb3B0aW9ucy5qc29uIiwgInNyYy9NYXJrUmlnaHRzL21vZHVsZXMvdXRpbC9hcGkudHMiLCAic3JjL01hcmtSaWdodHMvbW9kdWxlcy91dGlsL2dldFVzZXJHcm91cHMudHMiLCAic3JjL01hcmtSaWdodHMvbW9kdWxlcy9jb3JlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcbiAqIEBkZXNjcmlwdGlvbiDlnKjmnIDov5Hkv67mlLnjgIHnm5Hop4bliJfooajjgIHmnaHnm67ljoblj7LorrDlvZXnrYnkvY3nva7ku6XnibnmrormoLzlvI/mmL7npLrmnInnibnmrormnYPpmZDnmoTnlKjmiLdcbiAqL1xuaW1wb3J0IHttYXJrVXNlclJpZ2h0c30gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuXG5tdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuYWRkKGZ1bmN0aW9uIG1hcmtSaWdodHMoJGNvbnRlbnQpOiB2b2lkIHtcblx0aWYgKCRjb250ZW50LmF0dHIoJ2lkJykgPT09ICdtdy1jb250ZW50LXRleHQnIHx8ICRjb250ZW50Lmhhc0NsYXNzKCdtdy1jaGFuZ2VzbGlzdCcpKSB7XG5cdFx0dm9pZCBtYXJrVXNlclJpZ2h0cygkY29udGVudCk7XG5cdH1cbn0pO1xuXG5leHBvcnQge2dldExvY2FsVXNlckdyb3VwcywgcXVlcnlVc2VyR3JvdXBzfSBmcm9tICcuL21vZHVsZXMvdXRpbC9nZXRVc2VyR3JvdXBzJztcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0d2VibWFzdGVyOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1dlYm1hc3RlcicsXG5cdFx0XHQnemgtaGFucyc6ICfnq5nplb8nLFxuXHRcdFx0J3poLWhhbnQnOiAn56uZ6ZW3Jyxcblx0XHR9KSxcblx0XHRyZXNwb25zaWJsZW9wZXJhdG9yOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1Jlc3BvbnNpYmxlIE9wZXJhdG9yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+i0o+S7u+i/kOiQpScsXG5cdFx0XHQnemgtaGFudCc6ICfosqzku7vpgYvnh58nLFxuXHRcdH0pLFxuXHRcdHN0ZXdhcmQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU3Rld2FyZCcsXG5cdFx0XHQnemgtaGFucyc6ICfmoaPmoYjnkIbkuovlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn5qqU5qGI55CG5LqL5ZOhJyxcblx0XHR9KSxcblx0XHRjaGVja3VzZXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ2hlY2tVc2VyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+eUqOaIt+afpeaguCcsXG5cdFx0XHQnemgtaGFudCc6ICfnlKjmiLbmn6XmoLgnLFxuXHRcdH0pLFxuXHRcdHN1cHByZXNzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ092ZXJzaWdodGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ebkeedo+WRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfnm6PnnaPlk6EnLFxuXHRcdH0pLFxuXHRcdHN5c29wOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1N5c09wJyxcblx0XHRcdCd6aC1oYW5zJzogJ+euoeeQhuWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfnrqHnkIblk6EnLFxuXHRcdH0pLFxuXHRcdCdpbnRlcmZhY2UtYWRtaW4nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ludGVyZmFjZSBBZG1pbmlzdHJhdG9yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+eVjOmdoueuoeeQhuWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfku4vpnaLnrqHnkIblk6EnLFxuXHRcdH0pLFxuXHRcdHRlbXBsYXRlZWRpdG9yOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RlbXBsYXRlIEVkaXRvcicsXG5cdFx0XHQnemgtaGFucyc6ICfmqKHmnb/nvJbovpHlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn5qih5p2/57eo6Lyv5ZOhJyxcblx0XHR9KSxcblx0XHRpbXBvcnRlcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdJbXBvcnRlcicsXG5cdFx0XHQnemgtaGFucyc6ICflr7zlhaXogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5Yyv5YWl6ICFJyxcblx0XHR9KSxcblx0XHRwYXRyb2xsZXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGF0cm9sbGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3oeafpeWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICflt6Hmn6Xlk6EnLFxuXHRcdH0pLFxuXHRcdGF1dG9wYXRyb2xsZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnR29vZCBFZGl0b3InLFxuXHRcdFx0J3poLWhhbnMnOiAn5LyY56eA57yW6L6R6ICFJyxcblx0XHRcdCd6aC1oYW50JzogJ+WEquengOe3qOi8r+iAhScsXG5cdFx0fSksXG5cdFx0ZXZlbnRzcG9uc29yOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0V2ZW50IFNwb25zb3InLFxuXHRcdFx0J3poLWhhbnMnOiAn5rS75Yqo57uE57uH6ICFJyxcblx0XHRcdCd6aC1oYW50JzogJ+a0u+WLlee1hOe5lOiAhScsXG5cdFx0fSksXG5cdFx0J21hc3NtZXNzYWdlLXNlbmRlcic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTWFzc01lc3NhZ2Ugc2VuZGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+Wkp+mHj+a2iOaBr+WPkemAgeiAhScsXG5cdFx0XHQnemgtaGFudCc6ICflpKfph4/oqIrmga/lgrPpgIHogIUnLFxuXHRcdH0pLFxuXHRcdGNvbmZpcm1lZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDb25maXJtZWQgdXNlcicsXG5cdFx0XHQnemgtaGFucyc6ICfnoa7orqTnlKjmiLcnLFxuXHRcdFx0J3poLWhhbnQnOiAn56K66KqN55So5oi2Jyxcblx0XHR9KSxcblx0XHRhdXRvY29uZmlybWVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0F1dG8tY29uZmlybWVkIHVzZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn6Ieq5Yqo56Gu6K6k55So5oi3Jyxcblx0XHRcdCd6aC1oYW50JzogJ+iHquWLleeiuuiqjeeUqOaIticsXG5cdFx0fSksXG5cdFx0Ym90OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0JvdCcsXG5cdFx0XHQnemgtaGFucyc6ICfmnLrlmajkuronLFxuXHRcdFx0J3poLWhhbnQnOiAn5qmf5qKw5Lq6Jyxcblx0XHR9KSxcblx0XHRmbG9vZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdGbG9vZGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+acuuWZqOeUqOaItycsXG5cdFx0XHQnemgtaGFudCc6ICfmqZ/morDnlKjmiLYnLFxuXHRcdH0pLFxuXHRcdCdybnJzdmVyaWZ5LWV4ZW1wdCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRXhlbXB0ZWQgZnJvbSByZWFsLW5hbWUgdmVyaWZpY2F0aW9uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WunuWQjeWItumqjOivgeixgeWFjScsXG5cdFx0XHQnemgtaGFudCc6ICflr6blkI3liLbpqZforYnosYHlhY0nLFxuXHRcdH0pLFxuXHRcdCdpcGJsb2NrLWV4ZW1wdCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRXhlbXB0ZWQgZnJvbSBJUCBibG9ja3MnLFxuXHRcdFx0J3poLWhhbnMnOiAnSVDlsIHnpoHosYHlhY0nLFxuXHRcdFx0J3poLWhhbnQnOiAnSVDlsIHpjpbosYHlhY0nLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJjb25zdCBnZXRVc2VyTmFtZSA9ICh1cmw6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdGlmICghdXJsKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0Y29uc3QgdXNlcm5hbWU6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3RpdGxlJywgdXJsKTtcblxuXHRjb25zdCBkZWNvZGUgPSAoc3RyaW5nOiBzdHJpbmcsIHJlcGxhY2U6IChfc3RyaW5nOiBzdHJpbmcpID0+IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChcblx0XHRcdCgoKTogc3RyaW5nID0+IHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHJlcGxhY2Uoc3RyaW5nKSk7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdHJldHVybiByZXBsYWNlKHN0cmluZykucmVwbGFjZSgvJSg/IVxcZCspL2csICclMjUnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSkoKVxuXHRcdCk7XG5cdH07XG5cblx0aWYgKHVzZXJuYW1lKSB7XG5cdFx0cmV0dXJuIGRlY29kZSh1c2VybmFtZSwgKHN0cmluZzogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRcdHJldHVybiBzdHJpbmcucmVwbGFjZSgnVXNlcjonLCAnJykucmVwbGFjZSgvXy9nLCAnICcpO1xuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3QgdXNlcm5hbWVNYXRjaDogUmVnRXhwTWF0Y2hBcnJheSB8IG51bGwgPSB1cmwubWF0Y2goL1xcL3dpa2lcXC9Vc2VyOiguKz8pJC8pO1xuXG5cdGlmICh1c2VybmFtZU1hdGNoPy5bMV0pIHtcblx0XHRyZXR1cm4gZGVjb2RlKHVzZXJuYW1lTWF0Y2hbMV0sIChzdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0XHRyZXR1cm4gc3RyaW5nLnJlcGxhY2UoL18vZywgJyAnKTtcblx0XHR9KTtcblx0fVxuXG5cdHJldHVybiAnJztcbn07XG5cbmV4cG9ydCB7Z2V0VXNlck5hbWV9O1xuIiwgImltcG9ydCB0eXBlIHtVc2VyUmlnaHRzfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHtnZXRVc2VyTmFtZX0gZnJvbSAnLi9nZXRVc2VyTmFtZSc7XG5pbXBvcnQge3VuaXF1ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcHBlbmRVc2VyUmlnaHRzTWFyayA9ICgkdXNlckxpbmtzOiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+W10sIHVzZXJHcm91cHM6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPik6IHZvaWQgPT4ge1xuXHRmb3IgKGNvbnN0ICRlbGVtZW50IG9mICR1c2VyTGlua3MpIHtcblx0XHRjb25zdCB1c2VybmFtZTogc3RyaW5nID0gZ2V0VXNlck5hbWUoJGVsZW1lbnQuYXR0cignaHJlZicpID8/ICcnKTtcblx0XHRpZiAoIXVzZXJuYW1lKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHR1c2VyR3JvdXBzID8/PSB7fTtcblx0XHRjb25zdCBncm91cHMgPSB1c2VyR3JvdXBzW3VzZXJuYW1lXSA/PyBbXTtcblxuXHRcdGxldCAkc3VwczogSlF1ZXJ5O1xuXHRcdGlmICgkZWxlbWVudC5wYXJlbnRzKCdsaScpLmZpbmQoJy5nYWRnZXRzLW1hcmtyaWdodHMnKS5sZW5ndGgpIHtcblx0XHRcdCRzdXBzID0gJGVsZW1lbnQuc2libGluZ3MoJy5nYWRnZXRzLW1hcmtyaWdodHMnKS5lcSgwKTtcblx0XHR9IGVsc2UgaWYgKCRlbGVtZW50LnNpYmxpbmdzKCcuZ2FkZ2V0cy1tYXJrcmlnaHRzJykubGVuZ3RoKSB7XG5cdFx0XHQkc3VwcyA9ICRlbGVtZW50LnBhcmVudHMoJ2xpJykuZmluZCgnLmdhZGdldHMtbWFya3JpZ2h0cycpLmVxKDApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkc3VwcyA9ICQoJzxzcGFuPicpLmFkZENsYXNzKCdnYWRnZXRzLW1hcmtyaWdodHMnKTtcblx0XHRcdCRlbGVtZW50LmFmdGVyKCRzdXBzKTtcblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IGdyb3VwIG9mIHVuaXF1ZUFycmF5KGdyb3VwcykpIHtcblx0XHRcdGNvbnN0IGNsYXNzTmFtZTogc3RyaW5nID0gYGdhZGdldHMtbWFya3JpZ2h0c19fJHtncm91cH1gO1xuXHRcdFx0aWYgKCRzdXBzLmZpbmQoJ3N1cCcpLmhhc0NsYXNzKGNsYXNzTmFtZSkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdCRzdXBzLmFwcGVuZChcblx0XHRcdFx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdFx0XHRcdC8vICogc2VlIC4uL3R5cGVzLmQudHNcblx0XHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0XHQkKCc8c3VwPicpXG5cdFx0XHRcdFx0LmFkZENsYXNzKGNsYXNzTmFtZSlcblx0XHRcdFx0XHQuYXR0cih7XG5cdFx0XHRcdFx0XHRhbHQ6IGdldE1lc3NhZ2UoZ3JvdXAgYXMgVXNlclJpZ2h0cyksXG5cdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZShncm91cCBhcyBVc2VyUmlnaHRzKSxcblx0XHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7YXBwZW5kVXNlclJpZ2h0c01hcmt9O1xuIiwgImNvbnN0IGdlbmVyYXRlVXNlckxpbmtzID0gKCRjb250ZW50OiBKUXVlcnkpOiBSZWNvcmQ8c3RyaW5nLCBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+W10+ID0+IHtcblx0Y29uc3QgdXNlckxpbmtzOiBSZWNvcmQ8c3RyaW5nLCBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+W10+ID0ge307XG5cdGNvbnN0ICRlbGVtZW50cyA9ICRjb250ZW50LmZpbmQ8SFRNTEFuY2hvckVsZW1lbnQ+KCdhLm13LXVzZXJsaW5rOm5vdCgubXctYW5vbnVzZXJsaW5rKScpO1xuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkZWxlbWVudHMpIHtcblx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PiA9ICQoZWxlbWVudCk7XG5cdFx0aWYgKFxuXHRcdFx0JGVsZW1lbnQucGFyZW50cygnbGknKS5maW5kKCcuZ2FkZ2V0cy1tYXJrcmlnaHRzJykubGVuZ3RoIHx8XG5cdFx0XHQkZWxlbWVudC5zaWJsaW5ncygnLmdhZGdldHMtbWFya3JpZ2h0cycpLmxlbmd0aFxuXHRcdCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3Qge3RleHRDb250ZW50fSA9IGVsZW1lbnQ7XG5cdFx0Y29uc3QgdXNlcjogc3RyaW5nIHwgdW5kZWZpbmVkID0gdGV4dENvbnRlbnQ/LnRvU3RyaW5nKCk7XG5cblx0XHRpZiAoIXVzZXIpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmIChtdy51dGlsLmlzSVB2NEFkZHJlc3ModXNlcikgfHwgbXcudXRpbC5pc0lQdjZBZGRyZXNzKHVzZXIpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHR1c2VyTGlua3NbdXNlcl0gPz89IFtdO1xuXG5cdFx0dXNlckxpbmtzW3VzZXJdW3VzZXJMaW5rc1t1c2VyXS5sZW5ndGhdID0gJGVsZW1lbnQ7IC8vIFJlcGxhY2UgQXJyYXkjcHVzaCB0byBhdm9pZCBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdH1cblxuXHRyZXR1cm4gdXNlckxpbmtzO1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZVVzZXJMaW5rc307XG4iLCAie1xuXHRcInN0b3JhZ2VLZXlHbG9iYWxcIjogXCJleHQuZ2FkZ2V0Lk1hcmtSaWdodHNfZ2xvYmFsLVwiLFxuXHRcInN0b3JhZ2VLZXlMb2NhbFwiOiBcImV4dC5nYWRnZXQuTWFya1JpZ2h0c19sb2NhbC1cIixcblx0XCJ2ZXJzaW9uXCI6IDIuMVxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgTWFya1JpZ2h0cy8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IHF1ZXJ5VXNlckdyb3VwcyA9IGFzeW5jICh1c3VzZXJzOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5VXNlcnNQYXJhbXMgPSB7XG5cdFx0dXN1c2Vycyxcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdGxpc3Q6ICd1c2VycycsXG5cdFx0dXNwcm9wOiAnZ3JvdXBzJyxcblx0XHRzbWF4YWdlOiA2MDAsXG5cdFx0bWF4YWdlOiA2MDAsXG5cdH07XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IGdldExvY2FsVXNlckdyb3VwcyA9IGFzeW5jICh1c3VzZXJzOiBzdHJpbmdbXSk6IFByb21pc2U8UmVjb3JkPHN0cmluZywgc3RyaW5nW10+PiA9PiB7XG5cdGNvbnN0IHVzZXJHcm91cHM6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiA9IHt9O1xuXG5cdHVzdXNlcnMgPSB1c3VzZXJzLmZpbHRlcigodXNlcm5hbWUpID0+IHtcblx0XHRpZiAobXcuc3RvcmFnZS5nZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5TG9jYWwgKyB1c2VybmFtZSkpIHtcblx0XHRcdHVzZXJHcm91cHNbdXNlcm5hbWVdID0gbXcuc3RvcmFnZS5nZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5TG9jYWwgKyB1c2VybmFtZSkgYXMgc3RyaW5nW107XG5cdFx0fVxuXG5cdFx0cmV0dXJuICF1c2VyR3JvdXBzPy5bdXNlcm5hbWVdPy5sZW5ndGg7XG5cdH0pO1xuXG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBxdWVyeVVzZXJHcm91cHModXN1c2Vycyk7XG5cdFx0Y29uc3Qge3VzZXJzOiBxdWVyeVVzZXJzfSA9IHJlc3BvbnNlWydxdWVyeSddIGFzIHtcblx0XHRcdHVzZXJzOiB7Z3JvdXBzOiBzdHJpbmdbXTsgbmFtZTogc3RyaW5nfVtdO1xuXHRcdH07XG5cblx0XHRmb3IgKGNvbnN0IHVzZXIgb2YgcXVlcnlVc2Vycykge1xuXHRcdFx0aWYgKCF1c2VyPy5uYW1lIHx8ICF1c2VyPy5ncm91cHMpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHtuYW1lLCBncm91cHN9ID0gdXNlcjtcblxuXHRcdFx0dXNlckdyb3Vwc1tuYW1lXSA/Pz0gW107XG5cblx0XHRcdHVzZXJHcm91cHNbbmFtZV0gPSBbXG5cdFx0XHRcdC4uLnVzZXJHcm91cHNbbmFtZV0sXG5cdFx0XHRcdC4uLmdyb3Vwcy5maWx0ZXIoKGVsZW1lbnQpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gZWxlbWVudCAhPT0gJyonO1xuXHRcdFx0XHR9KSxcblx0XHRcdF07XG5cblx0XHRcdC8vIENhY2hlIGZvciAxIGhvdXJcblx0XHRcdG13LnN0b3JhZ2Uuc2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleUxvY2FsICsgbmFtZSwgdXNlckdyb3Vwc1tuYW1lXSwgNjAgKiA2MCk7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1tNYXJrUmlnaHRzXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0fVxuXG5cdHJldHVybiB1c2VyR3JvdXBzO1xufTtcblxuZXhwb3J0IHtnZXRMb2NhbFVzZXJHcm91cHMsIHF1ZXJ5VXNlckdyb3Vwc307XG4iLCAiaW1wb3J0IHthcHBlbmRVc2VyUmlnaHRzTWFya30gZnJvbSAnLi91dGlsL2FwcGVuZFVzZXJSaWdodHNNYXJrJztcbmltcG9ydCB7Z2VuZXJhdGVVc2VyTGlua3N9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZVVzZXJMaW5rcyc7XG5pbXBvcnQge2dldExvY2FsVXNlckdyb3Vwc30gZnJvbSAnLi91dGlsL2dldFVzZXJHcm91cHMnO1xuXG5jb25zdCBtYXJrVXNlclJpZ2h0cyA9ICgkY29udGVudDogSlF1ZXJ5KTogdm9pZCA9PiB7XG5cdGNvbnN0IHVzZXJMaW5rcyA9IGdlbmVyYXRlVXNlckxpbmtzKCRjb250ZW50KTtcblxuXHQvLyBDb252ZXJ0IHVzZXJzIGludG8gYXJyYXlcblx0Y29uc3QgdXNlcnM6IHN0cmluZ1tdID0gT2JqZWN0LmtleXModXNlckxpbmtzKTtcblx0aWYgKCF1c2Vycy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkdXNlckxpbmtzID0gT2JqZWN0LnZhbHVlcyh1c2VyTGlua3MpLnJlZHVjZSgocHJldmlvdXNWYWx1ZSwgY3VycmVudFZhbHVlKSA9PiB7XG5cdFx0cmV0dXJuIFsuLi5wcmV2aW91c1ZhbHVlLCAuLi5jdXJyZW50VmFsdWVdO1xuXHR9KTtcblx0aWYgKCEkdXNlckxpbmtzLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHByb21pc2VzOiAoKCkgPT4gUHJvbWlzZTx2b2lkPilbXSA9IFtdO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgdXNlcnMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCB1c3VzZXJzID0gdXNlcnMuc3BsaWNlKDAsIDI1KS5maWx0ZXIoKGVsZW1lbnQpID0+IHtcblx0XHRcdHJldHVybiAhKG13LnV0aWwuaXNJUHY0QWRkcmVzcyhlbGVtZW50KSB8fCBtdy51dGlsLmlzSVB2NkFkZHJlc3MoZWxlbWVudCkpO1xuXHRcdH0pO1xuXG5cdFx0aWYgKCF1c3VzZXJzLmxlbmd0aCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0cHJvbWlzZXNbcHJvbWlzZXMubGVuZ3RoXSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdGxldCB1c2VyR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gPSB7fTtcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dXNlckdyb3VwcyA9IGF3YWl0IGdldExvY2FsVXNlckdyb3Vwcyh1c3VzZXJzKTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ1tNYXJrUmlnaHRzXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0XHRcdH1cblxuXHRcdFx0YXBwZW5kVXNlclJpZ2h0c01hcmsoJHVzZXJMaW5rcywgdXNlckdyb3Vwcyk7XG5cdFx0fTtcblx0fVxuXG5cdHZvaWQgKGFzeW5jICgpID0+IHtcblx0XHRmb3IgKGNvbnN0IHByb21pc2Ugb2YgcHJvbWlzZXMpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGF3YWl0IHByb21pc2UoKTtcblx0XHRcdH0gY2F0Y2gge31cblx0XHR9XG5cdH0pKCk7XG59O1xuXG5leHBvcnQge21hcmtVc2VyUmlnaHRzfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LCAiX19leHBvcnQiLCAiZ2V0TG9jYWxVc2VyR3JvdXBzIiwgInF1ZXJ5VXNlckdyb3VwcyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJfX3RvQ29tbW9uSlMiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJnZXRJMThuTWVzc2FnZXMiLCAid2VibWFzdGVyIiwgImxvY2FsaXplIiwgImVuIiwgInJlc3BvbnNpYmxlb3BlcmF0b3IiLCAic3Rld2FyZCIsICJjaGVja3VzZXIiLCAic3VwcHJlc3MiLCAic3lzb3AiLCAidGVtcGxhdGVlZGl0b3IiLCAiaW1wb3J0ZXIiLCAicGF0cm9sbGVyIiwgImF1dG9wYXRyb2xsZWQiLCAiZXZlbnRzcG9uc29yIiwgImNvbmZpcm1lZCIsICJhdXRvY29uZmlybWVkIiwgImJvdCIsICJmbG9vZCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiZ2V0VXNlck5hbWUiLCAidXJsIiwgInVzZXJuYW1lIiwgIm13IiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJkZWNvZGUiLCAic3RyaW5nIiwgInJlcGxhY2UiLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgInVzZXJuYW1lTWF0Y2giLCAibWF0Y2giLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImFwcGVuZFVzZXJSaWdodHNNYXJrIiwgIiR1c2VyTGlua3MiLCAidXNlckdyb3VwcyIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJfJGVsZW1lbnQkYXR0ciIsICJfdXNlckdyb3VwcyR1c2VybmFtZSIsICIkZWxlbWVudCIsICJ2YWx1ZSIsICJhdHRyIiwgImdyb3VwcyIsICIkc3VwcyIsICJwYXJlbnRzIiwgImZpbmQiLCAibGVuZ3RoIiwgInNpYmxpbmdzIiwgImVxIiwgIiQiLCAiYWRkQ2xhc3MiLCAiYWZ0ZXIiLCAiX2l0ZXJhdG9yMyIsICJ1bmlxdWVBcnJheSIsICJfc3RlcDMiLCAiZ3JvdXAiLCAiY2xhc3NOYW1lIiwgImNvbmNhdCIsICJoYXNDbGFzcyIsICJhcHBlbmQiLCAiYWx0IiwgInRpdGxlIiwgImVyciIsICJlIiwgImYiLCAiZ2VuZXJhdGVVc2VyTGlua3MiLCAiJGNvbnRlbnQiLCAidXNlckxpbmtzIiwgIiRlbGVtZW50cyIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJfdXNlckxpbmtzJHVzZXIiLCAiZWxlbWVudCIsICJ0ZXh0Q29udGVudCIsICJ1c2VyIiwgInRvU3RyaW5nIiwgImlzSVB2NEFkZHJlc3MiLCAiaXNJUHY2QWRkcmVzcyIsICJzdG9yYWdlS2V5TG9jYWwiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiYXBpIiwgImluaXRNd0FwaSIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInVzdXNlcnMiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJsaXN0IiwgInVzcHJvcCIsICJzbWF4YWdlIiwgIm1heGFnZSIsICJyZXNwb25zZSIsICJnZXQiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgIl9yZWYyIiwgImZpbHRlciIsICJfdXNlckdyb3VwcyR1c2VybmFtZTIiLCAic3RvcmFnZSIsICJnZXRPYmplY3QiLCAidXNlcnMiLCAicXVlcnlVc2VycyIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJfdXNlckdyb3VwcyRuYW1lIiwgIm5hbWUiLCAic2V0T2JqZWN0IiwgImVycm9yIiwgImNvbnNvbGUiLCAiX3gyIiwgIm1hcmtVc2VyUmlnaHRzIiwgIk9iamVjdCIsICJrZXlzIiwgInZhbHVlcyIsICJyZWR1Y2UiLCAicHJldmlvdXNWYWx1ZSIsICJjdXJyZW50VmFsdWUiLCAicHJvbWlzZXMiLCAiaSIsICJzcGxpY2UiLCAiX2kiLCAiX3Byb21pc2VzIiwgInByb21pc2UiLCAiaG9vayIsICJhZGQiLCAibWFya1JpZ2h0cyJdCn0K
