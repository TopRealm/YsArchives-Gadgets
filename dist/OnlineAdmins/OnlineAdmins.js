/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/User:Vanished_user_1929210/js/OnlineAdmins.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/OnlineAdmins}
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

// dist/OnlineAdmins/OnlineAdmins.js
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
//! src/OnlineAdmins/options.json
var version = "2.0";
var storageKey = "ext.gadget.OnlineAdmins_getAdmins";
//! src/OnlineAdmins/modules/util/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("OnlineAdmins/".concat(version));
//! src/OnlineAdmins/modules/util/query.ts
var queryRecentChanges = /* @__PURE__ */ (function() {
  var _ref = _asyncToGenerator(function* (rcstart, rcend) {
    const params = {
      rcstart,
      rcend,
      action: "query",
      format: "json",
      formatversion: "2",
      list: "recentchanges",
      rcprop: "user",
      rcshow: ["!bot", "!anon"],
      rclimit: 500,
      smaxage: 600,
      maxage: 600
    };
    const response = yield api.get(params);
    return response;
  });
  return function queryRecentChanges2(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();
var queryLogEvents = /* @__PURE__ */ (function() {
  var _ref2 = _asyncToGenerator(function* (lestart, leend) {
    const params = {
      lestart,
      leend,
      action: "query",
      format: "json",
      formatversion: "2",
      list: "logevents",
      leprop: "user",
      lelimit: 500,
      smaxage: 600,
      maxage: 600
    };
    const response = yield api.get(params);
    return response;
  });
  return function queryLogEvents2(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
})();
var queryUserProps = /* @__PURE__ */ (function() {
  var _ref3 = _asyncToGenerator(function* (ususers) {
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
  return function queryUserProps2(_x5) {
    return _ref3.apply(this, arguments);
  };
})();
//! src/OnlineAdmins/modules/constant.ts
var BLACK_LIST = ["滥用过滤器"];
//! src/OnlineAdmins/modules/util/getAdmins.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var getAdmins = /* @__PURE__ */ (function() {
  var _ref4 = _asyncToGenerator(function* () {
    let stewards = [];
    let sysops = [];
    let patrollers = [];
    if (mw.storage.getObject(storageKey)) {
      ({
        stewards,
        sysops,
        patrollers
      } = mw.storage.getObject(storageKey));
    } else {
      let users = [];
      const promises = [];
      const time = /* @__PURE__ */ new Date();
      const rcstart = time.toISOString();
      time.setMinutes(time.getMinutes() - 30);
      const rcend = time.toISOString();
      try {
        const recentchanges = yield queryRecentChanges(rcstart, rcend);
        var _iterator2 = _createForOfIteratorHelper(recentchanges["query"].recentchanges), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            const {
              user
            } = _step2.value;
            users[users.length] = user;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      } catch {
      }
      try {
        const logevents = yield queryLogEvents(rcstart, rcend);
        var _iterator3 = _createForOfIteratorHelper(logevents["query"].logevents), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            const {
              user
            } = _step3.value;
            users[users.length] = user;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      } catch {
      }
      users = (0, import_ext_gadget2.uniqueArray)(users);
      for (let i = 0; i < users.length; i++) {
        const ususers = users.splice(0, 25);
        if (!ususers.length) {
          continue;
        }
        promises[promises.length] = /* @__PURE__ */ _asyncToGenerator(function* () {
          const response = yield queryUserProps(ususers);
          var _iterator4 = _createForOfIteratorHelper(response["query"].users), _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
              const {
                groups,
                name
              } = _step4.value;
              if (groups.includes("bot") || BLACK_LIST.includes(name)) {
                continue;
              }
              if (!name) {
                continue;
              }
              if (groups.includes("steward")) {
                stewards[stewards.length] = name;
              }
              if (groups.includes("sysop")) {
                sysops[sysops.length] = name;
              }
              if (groups.includes("patroller")) {
                patrollers[patrollers.length] = name;
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
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
    }
    return {
      stewards,
      sysops,
      patrollers
    };
  });
  return function getAdmins2() {
    return _ref4.apply(this, arguments);
  };
})();
//! src/OnlineAdmins/modules/i18n.ts
var import_ext_gadget3 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    " ($1 online):": (0, import_ext_gadget3.localize)({
      en: " ($1 online):",
      ja: "（$1人オンライン中）：",
      "zh-hans": "（$1个在线）：",
      "zh-hant": "（$1個在線）："
    }),
    Patrollers: (0, import_ext_gadget3.localize)({
      en: "Patrollers",
      ja: "巡回者",
      "zh-hans": "巡查员",
      "zh-hant": "巡查員"
    }),
    Stewards: (0, import_ext_gadget3.localize)({
      en: "Stewards",
      ja: "スチュワード",
      "zh-hans": "档案理事员",
      "zh-hant": "檔案理事員"
    }),
    "Network error": (0, import_ext_gadget3.localize)({
      en: "Network error",
      ja: "ネットワークエラー",
      "zh-hans": "网络异常",
      "zh-hant": "網路異常"
    }),
    NoOnline: (0, import_ext_gadget3.localize)({
      en: "Currently there are no high privilege users online",
      ja: "現在、高権限利用者はオンラインにいません",
      "zh-hans": "目前没有站务人员在线",
      "zh-hant": "目前沒有站務人員在線"
    }),
    Online: (0, import_ext_gadget3.localize)({
      en: "Online admins",
      ja: "オンラインの高権限利用者",
      "zh-hans": "在线站务人员",
      "zh-hant": "線上站務人員"
    }),
    OnlineWithin30Minutes: (0, import_ext_gadget3.localize)({
      en: "High privilege users online within 30 minutes:",
      ja: "30分以内にオンラインで高権限利用者：",
      "zh-hans": "下面是最近30分钟内在线的站务人员：",
      "zh-hant": "下面是最近30分鐘內的線上站務人員："
    }),
    SysOps: (0, import_ext_gadget3.localize)({
      en: "Admins",
      ja: "管理者",
      "zh-hans": "管理员",
      "zh-hant": "管理員"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/OnlineAdmins/modules/components/OnlineAdmins.module.less
var section = "OnlineAdmins-module__section_WS9IGa__4100";
var sectionList = "OnlineAdmins-module__sectionList_WS9IGa__4100";
var talkPageLink = "OnlineAdmins-module__talkPageLink_WS9IGa__4100";
//! src/OnlineAdmins/modules/components/groupList.tsx
var import_ext_gadget4 = __toESM(require("ext.gadget.JSX"), 1);
//! src/OnlineAdmins/modules/util/sanitize.ts
var sanitize = (string) => {
  return string.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;");
};
//! src/OnlineAdmins/modules/components/groupList.tsx
var UserLink = ({
  userName
}) => /* @__PURE__ */ import_ext_gadget4.default.createElement("li", null, /* @__PURE__ */ import_ext_gadget4.default.createElement("a", {
  href: mw.util.getUrl("User:".concat(sanitize(userName))),
  rel: "noopener noreferrer",
  target: "_blank"
}, sanitize(userName)), " ", /* @__PURE__ */ import_ext_gadget4.default.createElement("span", {
  className: talkPageLink
}, "（", /* @__PURE__ */ import_ext_gadget4.default.createElement("a", {
  href: mw.util.getUrl("User_talk:".concat(sanitize(userName))),
  rel: "noopener noreferrer",
  target: "_blank"
}, "留言"), "）"));
var onlineCountText = getMessage(" ($1 online):");
var GroupList = ({
  groupName,
  userNames
}) => groupName && userNames.length ? /* @__PURE__ */ import_ext_gadget4.default.createElement("div", {
  className: section
}, /* @__PURE__ */ import_ext_gadget4.default.createElement("span", null, groupName), /* @__PURE__ */ import_ext_gadget4.default.createElement("span", null, onlineCountText.replace("$1", String(userNames.length))), /* @__PURE__ */ import_ext_gadget4.default.createElement("ul", {
  className: sectionList
}, userNames.map((user) => /* @__PURE__ */ import_ext_gadget4.default.createElement(UserLink, {
  key: user,
  userName: user
})))) : /* @__PURE__ */ import_ext_gadget4.default.createElement(import_ext_gadget4.default.Fragment, null);
var ListTitle = () => /* @__PURE__ */ import_ext_gadget4.default.createElement("p", null, getMessage("OnlineWithin30Minutes"));
var OnlineAdminsList = ({
  stewards,
  sysops,
  patrollers
}) => /* @__PURE__ */ import_ext_gadget4.default.createElement("div", null, /* @__PURE__ */ import_ext_gadget4.default.createElement(ListTitle, null), stewards.length ? /* @__PURE__ */ import_ext_gadget4.default.createElement(GroupList, {
  groupName: getMessage("Stewards"),
  userNames: stewards
}) : /* @__PURE__ */ import_ext_gadget4.default.createElement(import_ext_gadget4.default.Fragment, null), sysops.length ? /* @__PURE__ */ import_ext_gadget4.default.createElement(GroupList, {
  groupName: getMessage("SysOps"),
  userNames: sysops
}) : /* @__PURE__ */ import_ext_gadget4.default.createElement(import_ext_gadget4.default.Fragment, null), patrollers.length ? /* @__PURE__ */ import_ext_gadget4.default.createElement(GroupList, {
  groupName: getMessage("Patrollers"),
  userNames: patrollers
}) : /* @__PURE__ */ import_ext_gadget4.default.createElement(import_ext_gadget4.default.Fragment, null));
var getOnlineAdminsList = ({
  stewards,
  sysops,
  patrollers
}) => /* @__PURE__ */ import_ext_gadget4.default.createElement(OnlineAdminsList, {
  stewards,
  sysops,
  patrollers
});
//! src/OnlineAdmins/modules/doClick.ts
var doClick = /* @__PURE__ */ (function() {
  var _ref6 = _asyncToGenerator(function* (event) {
    event.preventDefault();
    const notify = (element, type = "info") => {
      return mw.notify(element, {
        tag: "onlineAdmins",
        type
      });
    };
    try {
      const {
        stewards,
        sysops,
        patrollers
      } = yield getAdmins();
      if (stewards.length + sysops.length + patrollers.length) {
        notify($("<div>").append(getOnlineAdminsList({
          stewards,
          sysops,
          patrollers
        })));
      } else {
        notify(getMessage("NoOnline"), "warn");
      }
    } catch {
      notify(getMessage("Network error"), "error");
    }
  });
  return function doClick2(_x6) {
    return _ref6.apply(this, arguments);
  };
})();
//! src/OnlineAdmins/OnlineAdmins.ts
var addPortletLink = () => {
  const portletId = document.querySelector("#p-cactions") ? "p-cactions" : "p-tb";
  const element = mw.util.addPortletLink(portletId, "#", getMessage("Online"), "t-onlineadmin");
  if (!element) {
    return;
  }
  $(element).find("a").on("click", (event) => {
    void doClick(event);
  });
};
$(addPortletLink);

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL09ubGluZUFkbWlucy9vcHRpb25zLmpzb24iLCAic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL3V0aWwvYXBpLnRzIiwgInNyYy9PbmxpbmVBZG1pbnMvbW9kdWxlcy91dGlsL3F1ZXJ5LnRzIiwgInNyYy9PbmxpbmVBZG1pbnMvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvT25saW5lQWRtaW5zL21vZHVsZXMvdXRpbC9nZXRBZG1pbnMudHMiLCAic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2NvbXBvbmVudHMvT25saW5lQWRtaW5zLm1vZHVsZS5sZXNzIiwgInNyYy9PbmxpbmVBZG1pbnMvbW9kdWxlcy9jb21wb25lbnRzL2dyb3VwTGlzdC50c3giLCAic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL3V0aWwvc2FuaXRpemUudHMiLCAic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2RvQ2xpY2sudHMiLCAic3JjL09ubGluZUFkbWlucy9PbmxpbmVBZG1pbnMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCIsXG5cdFwic3RvcmFnZUtleVwiOiBcImV4dC5nYWRnZXQuT25saW5lQWRtaW5zX2dldEFkbWluc1wiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBPbmxpbmVBZG1pbnMvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG5jb25zdCBxdWVyeVJlY2VudENoYW5nZXMgPSBhc3luYyAocmNzdGFydDogc3RyaW5nLCByY2VuZDogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlSZWNlbnRDaGFuZ2VzUGFyYW1zID0ge1xuXHRcdHJjc3RhcnQsXG5cdFx0cmNlbmQsXG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRsaXN0OiAncmVjZW50Y2hhbmdlcycsXG5cdFx0cmNwcm9wOiAndXNlcicsXG5cdFx0cmNzaG93OiBbJyFib3QnLCAnIWFub24nXSxcblx0XHRyY2xpbWl0OiA1MDAsXG5cdFx0c21heGFnZTogNjAwLFxuXHRcdG1heGFnZTogNjAwLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBxdWVyeUxvZ0V2ZW50cyA9IGFzeW5jIChsZXN0YXJ0OiBzdHJpbmcsIGxlZW5kOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUxvZ0V2ZW50c1BhcmFtcyA9IHtcblx0XHRsZXN0YXJ0LFxuXHRcdGxlZW5kLFxuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0bGlzdDogJ2xvZ2V2ZW50cycsXG5cdFx0bGVwcm9wOiAndXNlcicsXG5cdFx0bGVsaW1pdDogNTAwLFxuXHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRtYXhhZ2U6IDYwMCxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgcXVlcnlVc2VyUHJvcHMgPSBhc3luYyAodXN1c2Vyczogc3RyaW5nIHwgc3RyaW5nW10pID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVVzZXJzUGFyYW1zID0ge1xuXHRcdHVzdXNlcnMsXG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRsaXN0OiAndXNlcnMnLFxuXHRcdHVzcHJvcDogJ2dyb3VwcycsXG5cdFx0c21heGFnZTogNjAwLFxuXHRcdG1heGFnZTogNjAwLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5leHBvcnQge3F1ZXJ5UmVjZW50Q2hhbmdlcywgcXVlcnlMb2dFdmVudHMsIHF1ZXJ5VXNlclByb3BzfTtcbiIsICJjb25zdCBCTEFDS19MSVNUOiBzdHJpbmdbXSA9IFsn5rul55So6L+H5ruk5ZmoJ107XG5cbmV4cG9ydCB7QkxBQ0tfTElTVH07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtxdWVyeUxvZ0V2ZW50cywgcXVlcnlSZWNlbnRDaGFuZ2VzLCBxdWVyeVVzZXJQcm9wc30gZnJvbSAnLi9xdWVyeSc7XG5pbXBvcnQge0JMQUNLX0xJU1R9IGZyb20gJy4uL2NvbnN0YW50JztcbmltcG9ydCB7dW5pcXVlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGdldEFkbWlucyA9IGFzeW5jICgpID0+IHtcblx0bGV0IHN0ZXdhcmRzOiBzdHJpbmdbXSA9IFtdO1xuXHRsZXQgc3lzb3BzOiBzdHJpbmdbXSA9IFtdO1xuXHRsZXQgcGF0cm9sbGVyczogc3RyaW5nW10gPSBbXTtcblxuXHRpZiAobXcuc3RvcmFnZS5nZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5KSkge1xuXHRcdCh7c3Rld2FyZHMsIHN5c29wcywgcGF0cm9sbGVyc30gPSBtdy5zdG9yYWdlLmdldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXkpIGFzIHtcblx0XHRcdHN0ZXdhcmRzOiBzdHJpbmdbXTtcblx0XHRcdHN5c29wczogc3RyaW5nW107XG5cdFx0XHRwYXRyb2xsZXJzOiBzdHJpbmdbXTtcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRsZXQgdXNlcnM6IHN0cmluZ1tdID0gW107XG5cdFx0Y29uc3QgcHJvbWlzZXM6ICgoKSA9PiBQcm9taXNlPHZvaWQ+KVtdID0gW107XG5cblx0XHRjb25zdCB0aW1lOiBEYXRlID0gbmV3IERhdGUoKTtcblx0XHRjb25zdCByY3N0YXJ0OiBzdHJpbmcgPSB0aW1lLnRvSVNPU3RyaW5nKCk7XG5cblx0XHQvLyBRdWVyeSB1c2VycyBoYXMgbG9nL2VkaXQgcmVjb3JkIGluIHJlY2VudCAzMCBtaW51dGVzXG5cdFx0dGltZS5zZXRNaW51dGVzKHRpbWUuZ2V0TWludXRlcygpIC0gMzApOyAvLyDmnIDov5Hmm7TmlLkzMOWIhumSn+WGheeahOe8lui+keeUqOaIt1xuXHRcdGNvbnN0IHJjZW5kOiBzdHJpbmcgPSB0aW1lLnRvSVNPU3RyaW5nKCk7XG5cblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVjZW50Y2hhbmdlcyA9IGF3YWl0IHF1ZXJ5UmVjZW50Q2hhbmdlcyhyY3N0YXJ0LCByY2VuZCk7XG5cblx0XHRcdGZvciAoY29uc3Qge3VzZXJ9IG9mIHJlY2VudGNoYW5nZXNbJ3F1ZXJ5J10ucmVjZW50Y2hhbmdlcyBhcyB7dXNlcjogc3RyaW5nfVtdKSB7XG5cdFx0XHRcdHVzZXJzW3VzZXJzLmxlbmd0aF0gPSB1c2VyOyAvLyBSZXBsYWNlIEFycmF5I3B1c2ggdG8gYXZvaWQgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge31cblxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBsb2dldmVudHMgPSBhd2FpdCBxdWVyeUxvZ0V2ZW50cyhyY3N0YXJ0LCByY2VuZCk7XG5cblx0XHRcdGZvciAoY29uc3Qge3VzZXJ9IG9mIGxvZ2V2ZW50c1sncXVlcnknXS5sb2dldmVudHMgYXMge3VzZXI6IHN0cmluZ31bXSkge1xuXHRcdFx0XHR1c2Vyc1t1c2Vycy5sZW5ndGhdID0gdXNlcjtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHt9XG5cblx0XHR1c2VycyA9IHVuaXF1ZUFycmF5KHVzZXJzKTsgLy8gUmVwbGFjZSBTZXQgd2l0aCB1bmlxdWVBcnJheSwgYXZvaWRpbmcgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXG5cdFx0Ly8gR2VuZXJhdGluZyBxdWVyeSBwcm9taXNlc1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdXNlcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IHVzdXNlcnMgPSB1c2Vycy5zcGxpY2UoMCwgMjUpO1xuXHRcdFx0aWYgKCF1c3VzZXJzLmxlbmd0aCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0cHJvbWlzZXNbcHJvbWlzZXMubGVuZ3RoXSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBxdWVyeVVzZXJQcm9wcyh1c3VzZXJzKTtcblxuXHRcdFx0XHRmb3IgKGNvbnN0IHtncm91cHMsIG5hbWV9IG9mIHJlc3BvbnNlWydxdWVyeSddLnVzZXJzIGFzIHtncm91cHM6IHN0cmluZ1tdOyBuYW1lOiBzdHJpbmd9W10pIHtcblx0XHRcdFx0XHQvLyByZW1vdmUgYm90c1xuXHRcdFx0XHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ2JvdCcpIHx8IEJMQUNLX0xJU1QuaW5jbHVkZXMobmFtZSkpIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIHJlbW92ZSBsb2dzIHdpdGggbm8gdXNlciBuYW1lc1xuXHRcdFx0XHRcdGlmICghbmFtZSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGdyb3Vwcy5pbmNsdWRlcygnc3Rld2FyZCcpKSB7XG5cdFx0XHRcdFx0XHRzdGV3YXJkc1tzdGV3YXJkcy5sZW5ndGhdID0gbmFtZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdzeXNvcCcpKSB7XG5cdFx0XHRcdFx0XHRzeXNvcHNbc3lzb3BzLmxlbmd0aF0gPSBuYW1lO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ3BhdHJvbGxlcicpKSB7XG5cdFx0XHRcdFx0XHRwYXRyb2xsZXJzW3BhdHJvbGxlcnMubGVuZ3RoXSA9IG5hbWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgcHJvbWlzZSBvZiBwcm9taXNlcykge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgcHJvbWlzZSgpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB7c3Rld2FyZHMsIHN5c29wcywgcGF0cm9sbGVyc307XG59O1xuXG5leHBvcnQge2dldEFkbWluc307XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCcgKCQxIG9ubGluZSk6JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcgKCQxIG9ubGluZSk6Jyxcblx0XHRcdGphOiAn77yIJDHkurrjgqrjg7Pjg6njgqTjg7PkuK3vvInvvJonLFxuXHRcdFx0J3poLWhhbnMnOiAn77yIJDHkuKrlnKjnur/vvInvvJonLFxuXHRcdFx0J3poLWhhbnQnOiAn77yIJDHlgIvlnKjnt5rvvInvvJonLFxuXHRcdH0pLFxuXHRcdFBhdHJvbGxlcnM6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGF0cm9sbGVycycsXG5cdFx0XHRqYTogJ+W3oeWbnuiAhScsXG5cdFx0XHQnemgtaGFucyc6ICflt6Hmn6XlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn5beh5p+l5ZOhJyxcblx0XHR9KSxcblx0XHRTdGV3YXJkczogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTdGV3YXJkcycsXG5cdFx0XHRqYTogJ+OCueODgeODpeODr+ODvOODiScsXG5cdFx0XHQnemgtaGFucyc6ICfmoaPmoYjnkIbkuovlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn5qqU5qGI55CG5LqL5ZOhJyxcblx0XHR9KSxcblx0XHQnTmV0d29yayBlcnJvcic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTmV0d29yayBlcnJvcicsXG5cdFx0XHRqYTogJ+ODjeODg+ODiOODr+ODvOOCr+OCqOODqeODvCcsXG5cdFx0XHQnemgtaGFucyc6ICfnvZHnu5zlvILluLgnLFxuXHRcdFx0J3poLWhhbnQnOiAn57ay6Lev55Ww5bi4Jyxcblx0XHR9KSxcblx0XHROb09ubGluZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDdXJyZW50bHkgdGhlcmUgYXJlIG5vIGhpZ2ggcHJpdmlsZWdlIHVzZXJzIG9ubGluZScsXG5cdFx0XHRqYTogJ+ePvuWcqOOAgemrmOaoqemZkOWIqeeUqOiAheOBr+OCquODs+ODqeOCpOODs+OBq+OBhOOBvuOBm+OCkycsXG5cdFx0XHQnemgtaGFucyc6ICfnm67liY3msqHmnInnq5nliqHkurrlkZjlnKjnur8nLFxuXHRcdFx0J3poLWhhbnQnOiAn55uu5YmN5rKS5pyJ56uZ5YuZ5Lq65ZOh5Zyo57eaJyxcblx0XHR9KSxcblx0XHRPbmxpbmU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnT25saW5lIGFkbWlucycsXG5cdFx0XHRqYTogJ+OCquODs+ODqeOCpOODs+OBrumrmOaoqemZkOWIqeeUqOiAhScsXG5cdFx0XHQnemgtaGFucyc6ICflnKjnur/nq5nliqHkurrlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn57ea5LiK56uZ5YuZ5Lq65ZOhJyxcblx0XHR9KSxcblx0XHRPbmxpbmVXaXRoaW4zME1pbnV0ZXM6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSGlnaCBwcml2aWxlZ2UgdXNlcnMgb25saW5lIHdpdGhpbiAzMCBtaW51dGVzOicsXG5cdFx0XHRqYTogJzMw5YiG5Lul5YaF44Gr44Kq44Oz44Op44Kk44Oz44Gn6auY5qip6ZmQ5Yip55So6ICF77yaJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4i+mdouaYr+acgOi/kTMw5YiG6ZKf5YaF5Zyo57q/55qE56uZ5Yqh5Lq65ZGY77yaJyxcblx0XHRcdCd6aC1oYW50JzogJ+S4i+mdouaYr+acgOi/kTMw5YiG6ZCY5YWn55qE57ea5LiK56uZ5YuZ5Lq65ZOh77yaJyxcblx0XHR9KSxcblx0XHRTeXNPcHM6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQWRtaW5zJyxcblx0XHRcdGphOiAn566h55CG6ICFJyxcblx0XHRcdCd6aC1oYW5zJzogJ+euoeeQhuWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfnrqHnkIblk6EnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2NvbXBvbmVudHMvT25saW5lQWRtaW5zLm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3Qgc2VjdGlvbiA9IFwiT25saW5lQWRtaW5zLW1vZHVsZV9fc2VjdGlvbl9XUzlJR2FfXzQxMDBcIjtcbmV4cG9ydCBjb25zdCBzZWN0aW9uTGlzdCA9IFwiT25saW5lQWRtaW5zLW1vZHVsZV9fc2VjdGlvbkxpc3RfV1M5SUdhX180MTAwXCI7XG5leHBvcnQgY29uc3QgdGFsa1BhZ2VMaW5rID0gXCJPbmxpbmVBZG1pbnMtbW9kdWxlX190YWxrUGFnZUxpbmtfV1M5SUdhX180MTAwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJzZWN0aW9uXCI6IHNlY3Rpb24sXG4gIFwic2VjdGlvbkxpc3RcIjogc2VjdGlvbkxpc3QsXG4gIFwidGFsa1BhZ2VMaW5rXCI6IHRhbGtQYWdlTGlua1xufTtcbiAgICAgICIsICJpbXBvcnQge3NlY3Rpb24sIHNlY3Rpb25MaXN0LCB0YWxrUGFnZUxpbmt9IGZyb20gJy4vT25saW5lQWRtaW5zLm1vZHVsZS5sZXNzJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHtzYW5pdGl6ZX0gZnJvbSAnLi4vdXRpbC9zYW5pdGl6ZSc7XG5cbmludGVyZmFjZSBVc2VyTGlua1Byb3BzIHtcblx0dXNlck5hbWU6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIEdyb3VwTGlzdFByb3BzIHtcblx0Z3JvdXBOYW1lOiBzdHJpbmc7XG5cdHVzZXJOYW1lczogc3RyaW5nW107XG59XG5cbmludGVyZmFjZSBPbmxpbmVBZG1pbnNMaXN0UHJvcHMge1xuXHRzdGV3YXJkczogc3RyaW5nW107XG5cdHN5c29wczogc3RyaW5nW107XG5cdHBhdHJvbGxlcnM6IHN0cmluZ1tdO1xufVxuXG5jb25zdCBVc2VyTGluayA9ICh7dXNlck5hbWV9OiBVc2VyTGlua1Byb3BzKSA9PiAoXG5cdDxsaT5cblx0XHQ8YSBocmVmPXttdy51dGlsLmdldFVybChgVXNlcjoke3Nhbml0aXplKHVzZXJOYW1lKX1gKX0gcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0e3Nhbml0aXplKHVzZXJOYW1lKX1cblx0XHQ8L2E+XG5cdFx0Jm5ic3A7XG5cdFx0PHNwYW4gY2xhc3NOYW1lPXt0YWxrUGFnZUxpbmt9PlxuXHRcdFx077yIXG5cdFx0XHQ8YSBocmVmPXttdy51dGlsLmdldFVybChgVXNlcl90YWxrOiR7c2FuaXRpemUodXNlck5hbWUpfWApfSByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG5cdFx0XHRcdOeVmeiogFxuXHRcdFx0PC9hPlxuXHRcdFx077yJXG5cdFx0PC9zcGFuPlxuXHQ8L2xpPlxuKTtcblxuY29uc3Qgb25saW5lQ291bnRUZXh0OiBzdHJpbmcgPSBnZXRNZXNzYWdlKCcgKCQxIG9ubGluZSk6Jyk7XG5cbmNvbnN0IEdyb3VwTGlzdCA9ICh7Z3JvdXBOYW1lLCB1c2VyTmFtZXN9OiBHcm91cExpc3RQcm9wcykgPT5cblx0Z3JvdXBOYW1lICYmIHVzZXJOYW1lcy5sZW5ndGggPyAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e3NlY3Rpb259PlxuXHRcdFx0PHNwYW4+e2dyb3VwTmFtZX08L3NwYW4+XG5cdFx0XHQ8c3Bhbj57b25saW5lQ291bnRUZXh0LnJlcGxhY2UoJyQxJywgU3RyaW5nKHVzZXJOYW1lcy5sZW5ndGgpKX08L3NwYW4+XG5cdFx0XHQ8dWwgY2xhc3NOYW1lPXtzZWN0aW9uTGlzdH0+XG5cdFx0XHRcdHt1c2VyTmFtZXMubWFwKCh1c2VyKSA9PiAoXG5cdFx0XHRcdFx0PFVzZXJMaW5rIGtleT17dXNlcn0gdXNlck5hbWU9e3VzZXJ9IC8+XG5cdFx0XHRcdCkpfVxuXHRcdFx0PC91bD5cblx0XHQ8L2Rpdj5cblx0KSA6IChcblx0XHQ8PjwvPlxuXHQpO1xuXG5jb25zdCBMaXN0VGl0bGUgPSAoKSA9PiA8cD57Z2V0TWVzc2FnZSgnT25saW5lV2l0aGluMzBNaW51dGVzJyl9PC9wPjtcblxuY29uc3QgT25saW5lQWRtaW5zTGlzdCA9ICh7c3Rld2FyZHMsIHN5c29wcywgcGF0cm9sbGVyc306IE9ubGluZUFkbWluc0xpc3RQcm9wcykgPT4gKFxuXHQ8ZGl2PlxuXHRcdDxMaXN0VGl0bGUgLz5cblx0XHR7c3Rld2FyZHMubGVuZ3RoID8gPEdyb3VwTGlzdCBncm91cE5hbWU9e2dldE1lc3NhZ2UoJ1N0ZXdhcmRzJyl9IHVzZXJOYW1lcz17c3Rld2FyZHN9IC8+IDogPD48Lz59XG5cdFx0e3N5c29wcy5sZW5ndGggPyA8R3JvdXBMaXN0IGdyb3VwTmFtZT17Z2V0TWVzc2FnZSgnU3lzT3BzJyl9IHVzZXJOYW1lcz17c3lzb3BzfSAvPiA6IDw+PC8+fVxuXHRcdHtwYXRyb2xsZXJzLmxlbmd0aCA/IDxHcm91cExpc3QgZ3JvdXBOYW1lPXtnZXRNZXNzYWdlKCdQYXRyb2xsZXJzJyl9IHVzZXJOYW1lcz17cGF0cm9sbGVyc30gLz4gOiA8PjwvPn1cblx0PC9kaXY+XG4pO1xuXG5jb25zdCBnZXRPbmxpbmVBZG1pbnNMaXN0ID0gKHtzdGV3YXJkcywgc3lzb3BzLCBwYXRyb2xsZXJzfTogT25saW5lQWRtaW5zTGlzdFByb3BzKSA9PiAoXG5cdDxPbmxpbmVBZG1pbnNMaXN0IHN0ZXdhcmRzPXtzdGV3YXJkc30gc3lzb3BzPXtzeXNvcHN9IHBhdHJvbGxlcnM9e3BhdHJvbGxlcnN9IC8+XG4pO1xuXG5leHBvcnQge2dldE9ubGluZUFkbWluc0xpc3R9O1xuIiwgImNvbnN0IHNhbml0aXplID0gKHN0cmluZzogc3RyaW5nKSA9PiB7XG5cdHJldHVybiBzdHJpbmdcblx0XHQucmVwbGFjZSgvJi9nLCAnJmFtcDsnKVxuXHRcdC5yZXBsYWNlKC88L2csICcmbHQ7Jylcblx0XHQucmVwbGFjZSgvPi9nLCAnJmd0OycpXG5cdFx0LnJlcGxhY2UoLycvZywgJyZhcG9zOycpXG5cdFx0LnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcbn07XG5cbmV4cG9ydCB7c2FuaXRpemV9O1xuIiwgImltcG9ydCB7Z2V0QWRtaW5zfSBmcm9tICcuL3V0aWwvZ2V0QWRtaW5zJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7Z2V0T25saW5lQWRtaW5zTGlzdH0gZnJvbSAnLi9jb21wb25lbnRzL2dyb3VwTGlzdCc7XG5cbmNvbnN0IGRvQ2xpY2sgPSBhc3luYyAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50PEhUTUxBbmNob3JFbGVtZW50Pik6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdGNvbnN0IG5vdGlmeSA9IChlbGVtZW50OiBzdHJpbmcgfCBKUXVlcnk8SFRNTEVsZW1lbnQ+LCB0eXBlOiAnZXJyb3InIHwgJ2luZm8nIHwgJ3N1Y2Nlc3MnIHwgJ3dhcm4nID0gJ2luZm8nKSA9PiB7XG5cdFx0cmV0dXJuIG13Lm5vdGlmeShlbGVtZW50LCB7XG5cdFx0XHR0YWc6ICdvbmxpbmVBZG1pbnMnLFxuXHRcdFx0dHlwZSxcblx0XHR9KTtcblx0fTtcblxuXHR0cnkge1xuXHRcdGNvbnN0IHtzdGV3YXJkcywgc3lzb3BzLCBwYXRyb2xsZXJzfSA9IGF3YWl0IGdldEFkbWlucygpO1xuXG5cdFx0aWYgKHN0ZXdhcmRzLmxlbmd0aCArIHN5c29wcy5sZW5ndGggKyBwYXRyb2xsZXJzLmxlbmd0aCkge1xuXHRcdFx0bm90aWZ5KCQoJzxkaXY+JykuYXBwZW5kKGdldE9ubGluZUFkbWluc0xpc3Qoe3N0ZXdhcmRzLCBzeXNvcHMsIHBhdHJvbGxlcnN9KSkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRub3RpZnkoZ2V0TWVzc2FnZSgnTm9PbmxpbmUnKSwgJ3dhcm4nKTtcblx0XHR9XG5cdH0gY2F0Y2gge1xuXHRcdG5vdGlmeShnZXRNZXNzYWdlKCdOZXR3b3JrIGVycm9yJyksICdlcnJvcicpO1xuXHR9XG59O1xuXG5leHBvcnQge2RvQ2xpY2t9O1xuIiwgImltcG9ydCB7ZG9DbGlja30gZnJvbSAnLi9tb2R1bGVzL2RvQ2xpY2snO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL21vZHVsZXMvaTE4bic7XG5cbmNvbnN0IGFkZFBvcnRsZXRMaW5rID0gKCk6IHZvaWQgPT4ge1xuXHQvLyBDcmVhdGUgcG9ydGxldCBsaW5rXG5cdGNvbnN0IHBvcnRsZXRJZDogJ3AtY2FjdGlvbnMnIHwgJ3AtdGInID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3AtY2FjdGlvbnMnKSA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJztcblx0Y29uc3QgZWxlbWVudDogSFRNTExJRWxlbWVudCB8IG51bGwgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgJyMnLCBnZXRNZXNzYWdlKCdPbmxpbmUnKSwgJ3Qtb25saW5lYWRtaW4nKTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gQmluZCBjbGljayBsaXN0ZW5lclxuXHQkKGVsZW1lbnQpXG5cdFx0LmZpbmQoJ2EnKVxuXHRcdC5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcblx0XHRcdHZvaWQgZG9DbGljayhldmVudCk7XG5cdFx0fSk7XG59O1xuXG4kKGFkZFBvcnRsZXRMaW5rKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLFVBQVc7QUFDWCxJQUFBQyxhQUFjOztBQ0RmLElBQUFDLG9CQUF3QkMsUUFBQSxpQkFBQTtBQUV4QixJQUFNQyxPQUFBLEdBQWNGLGtCQUFBRyxXQUFBLGdCQUFBQyxPQUFrQ04sT0FBTyxDQUFFOztBQ0QvRCxJQUFNTyxxQkFBQSw0QkFBQTtBQUFBLE1BQUFDLE9BQUFDLGtCQUFxQixXQUFPQyxTQUFpQkMsT0FBa0I7QUFDcEUsVUFBTUMsU0FBc0M7TUFDM0NGO01BQ0FDO01BQ0FFLFFBQVE7TUFDUkMsUUFBUTtNQUNSQyxlQUFlO01BQ2ZDLE1BQU07TUFDTkMsUUFBUTtNQUNSQyxRQUFRLENBQUMsUUFBUSxPQUFPO01BQ3hCQyxTQUFTO01BQ1RDLFNBQVM7TUFDVEMsUUFBUTtJQUNUO0FBQ0EsVUFBTUMsV0FBQSxNQUFpQmxCLElBQUltQixJQUFJWCxNQUFNO0FBRXJDLFdBQU9VO0VBQ1IsQ0FBQTtBQUFBLFNBQUEsU0FqQk1mLG9CQUFBaUIsSUFBQUMsS0FBQTtBQUFBLFdBQUFqQixLQUFBa0IsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxHQUFBO0FBbUJOLElBQU1DLGlCQUFBLDRCQUFBO0FBQUEsTUFBQUMsUUFBQXBC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QUNiO0VBQ0Q7QUFHQUcsSUFBRUgsT0FBTyxFQUNQVSxLQUFLLEdBQUcsRUFDUkMsR0FBRyxTQUFVZCxXQUFVO0FBQ3ZCLFNBQUtGLFFBQVFFLEtBQUs7RUFDbkIsQ0FBQztBQUNIO0FBRUFNLEVBQUVHLGNBQWM7IiwKICAibmFtZXMiOiBbInZlcnNpb24iLCAic3RvcmFnZUtleSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgInF1ZXJ5UmVjZW50Q2hhbmdlcyIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInJjc3RhcnQiLCAicmNlbmQiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJsaXN0IiwgInJjcHJvcCIsICJyY3Nob3ciLCAicmNsaW1pdCIsICJzbWF4YWdlIiwgIm1heGFnZSIsICJyZXNwb25zZSIsICJnZXQiLCAiX3giLCAiX3gyIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJxdWVyeUxvZ0V2ZW50cyIsICJfcmVmMiIsICJsZXN0YXJ0IiwgImxlZW5kIiwgImxlcHJvcCIsICJsZWxpbWl0IiwgIl94MyIsICJfeDQiLCAicXVlcnlVc2VyUHJvcHMiLCAiX3JlZjMiLCAidXN1c2VycyIsICJ1c3Byb3AiLCAiX3g1IiwgIkJMQUNLX0xJU1QiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImdldEFkbWlucyIsICJfcmVmNCIsICJzdGV3YXJkcyIsICJzeXNvcHMiLCAicGF0cm9sbGVycyIsICJtdyIsICJzdG9yYWdlIiwgImdldE9iamVjdCIsICJ1c2VycyIsICJwcm9taXNlcyIsICJ0aW1lIiwgIkRhdGUiLCAidG9JU09TdHJpbmciLCAic2V0TWludXRlcyIsICJnZXRNaW51dGVzIiwgInJlY2VudGNoYW5nZXMiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAidXNlciIsICJ2YWx1ZSIsICJsZW5ndGgiLCAiZXJyIiwgImUiLCAiZiIsICJsb2dldmVudHMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAidW5pcXVlQXJyYXkiLCAiaSIsICJzcGxpY2UiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiZ3JvdXBzIiwgIm5hbWUiLCAiaW5jbHVkZXMiLCAiX2kiLCAiX3Byb21pc2VzIiwgInByb21pc2UiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJQYXRyb2xsZXJzIiwgIlN0ZXdhcmRzIiwgIk5vT25saW5lIiwgIk9ubGluZSIsICJPbmxpbmVXaXRoaW4zME1pbnV0ZXMiLCAiU3lzT3BzIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJzZWN0aW9uIiwgInNlY3Rpb25MaXN0IiwgInRhbGtQYWdlTGluayIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiX190b0VTTSIsICJzYW5pdGl6ZSIsICJzdHJpbmciLCAicmVwbGFjZSIsICJVc2VyTGluayIsICJ1c2VyTmFtZSIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiaHJlZiIsICJ1dGlsIiwgImdldFVybCIsICJyZWwiLCAidGFyZ2V0IiwgImNsYXNzTmFtZSIsICJvbmxpbmVDb3VudFRleHQiLCAiR3JvdXBMaXN0IiwgImdyb3VwTmFtZSIsICJ1c2VyTmFtZXMiLCAiU3RyaW5nIiwgIm1hcCIsICJGcmFnbWVudCIsICJMaXN0VGl0bGUiLCAiT25saW5lQWRtaW5zTGlzdCIsICJnZXRPbmxpbmVBZG1pbnNMaXN0IiwgImRvQ2xpY2siLCAiX3JlZjYiLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAibm90aWZ5IiwgImVsZW1lbnQiLCAidHlwZSIsICJ0YWciLCAiJCIsICJhcHBlbmQiLCAiX3g2IiwgImFkZFBvcnRsZXRMaW5rIiwgInBvcnRsZXRJZCIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgImZpbmQiLCAib24iXQp9Cg==
