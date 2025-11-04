/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://en.wikipedia.org/wiki/MediaWiki:Gadget-markblocked.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/MarkBlocked}
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

// dist/MarkBlocked/MarkBlocked.js
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
//! src/MarkBlocked/options.json
var contributionsPageAlias = "Special:Contributions";
var userNamespaceNumbers = [2, 3];
var storageKeyBlocked = "ext.gadget.MarkBlocked_isBlocked-";
var version = "2.0";
//! src/MarkBlocked/modules/util/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("MarkBlocked/".concat(version));
//! src/MarkBlocked/modules/util/query.ts
var queryIPBlocks = /* @__PURE__ */ (function() {
  var _ref = _asyncToGenerator(function* (bkip) {
    const params = {
      action: "query",
      format: "json",
      formatversion: "2",
      list: ["blocks"],
      bkip,
      bklimit: 100,
      bkprop: ["by", "expiry", "reason", "restrictions", "timestamp", "user"],
      smaxage: 600,
      maxage: 600
    };
    return yield api.get(params);
  });
  return function queryIPBlocks2(_x) {
    return _ref.apply(this, arguments);
  };
})();
var queryUserBlocks = /* @__PURE__ */ (function() {
  var _ref2 = _asyncToGenerator(function* (bkusers) {
    const params = {
      action: "query",
      format: "json",
      formatversion: "2",
      list: ["blocks"],
      bkusers,
      bklimit: 100,
      bkprop: ["by", "expiry", "reason", "restrictions", "timestamp", "user"],
      smaxage: 600,
      maxage: 600
    };
    return yield api.get(params);
  });
  return function queryUserBlocks2(_x2) {
    return _ref2.apply(this, arguments);
  };
})();
//! src/MarkBlocked/modules/i18n.ts
var import_ext_gadget2 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    infinity: (0, import_ext_gadget2.localize)({
      en: "infinity",
      "zh-hans": "无限期",
      "zh-hant": "無限期"
    }),
    Blocked: (0, import_ext_gadget2.localize)({
      en: "; $5blocked ($1) by $2: $3 ($4 ago)",
      "zh-hans": "；由$2$5封禁$1：$3（$4前）",
      "zh-hant": "；由$2$5封鎖$1：$3（$4前）"
    }),
    "Globally Blocked": (0, import_ext_gadget2.localize)({
      en: "; $5blocked globally ($1) by $2: $3 ($4 ago)",
      "zh-hans": "；由$2$5全域封禁$1：$3（$4前）",
      "zh-hant": "；由$2$5全域封鎖$1：$3（$4前）"
    }),
    Locked: (0, import_ext_gadget2.localize)({
      en: "; Locked",
      "zh-hans": "；已全域锁定",
      "zh-hant": "；已全域鎖定"
    }),
    partial: (0, import_ext_gadget2.localize)({
      en: "partial ",
      zh: "部分"
    }),
    d: (0, import_ext_gadget2.localize)({
      en: "day",
      zh: "天"
    }),
    s: (0, import_ext_gadget2.localize)({
      en: "second",
      zh: "秒"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/MarkBlocked/modules/util/parseTime.ts
var addZero = (v) => {
  return v <= 9 ? "0".concat(v) : "".concat(v);
};
var inHours = (ms) => {
  let mm = Math.floor(ms / 6e4);
  if (!mm) {
    return "".concat(Math.floor(ms / 1e3)).concat(getMessage("s"));
  }
  let hh = Math.floor(mm / 60);
  mm %= 60;
  const dd = Math.floor(hh / 24);
  hh %= 24;
  if (dd) {
    return "".concat(dd + (dd < 10 ? ".".concat(addZero(hh)) : "")).concat(getMessage("d"));
  }
  return "".concat(hh, ":").concat(addZero(mm));
};
var parseTS = (string) => {
  const m = string.replace(/\D/g, "").match(/(\d\d\d\d)(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)/);
  return new Date(Date.UTC(+m[1], +m[2] - 1, +m[3], +m[4], +m[5], +m[6])).getTime();
};
//! src/MarkBlocked/modules/MarkBlocked.module.less
var userlinkIndef = "MarkBlocked-module__userlinkIndef_xtAfOG__4100";
var userlinkPartial = "MarkBlocked-module__userlinkPartial_xtAfOG__4100";
var userlinkTemp = "MarkBlocked-module__userlinkTemp_xtAfOG__4100";
//! src/MarkBlocked/modules/util/markLinks.ts
var markLocalBlocks = ({
  response,
  userLinks,
  bkip
}) => {
  var _response$query;
  if (!((_response$query = response["query"]) !== null && _response$query !== void 0 && _response$query.blocks)) {
    return;
  }
  var _iterator = _createForOfIteratorHelper(response["query"].blocks), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const block = _step.value;
      const isPartialBlcok = typeof block.restrictions === "string" && block.restrictions !== "";
      let className = userlinkPartial;
      let blockTime = "";
      if (block.expiry.startsWith("in")) {
        if (!isPartialBlcok) {
          className = userlinkIndef;
        }
        blockTime = getMessage("infinity");
      } else {
        if (!isPartialBlcok) {
          className = userlinkTemp;
        }
        blockTime = inHours(parseTS(block.expiry) - parseTS(block.timestamp));
      }
      let tip = getMessage("Blocked").replace("$1", blockTime).replace("$2", block.by).replace("$3", block.reason).replace("$4", inHours(Date.now() - parseTS(block.timestamp)));
      tip = isPartialBlcok ? tip.replace("$5", getMessage("partial")) : tip.replace("$5", "");
      const $links = userLinks[bkip !== null && bkip !== void 0 ? bkip : block.user];
      if (!$links) {
        continue;
      }
      var _iterator2 = _createForOfIteratorHelper($links), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          const $link = _step2.value;
          $link.addClass(className).attr("title", $link.attr("title") + tip);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
//! src/MarkBlocked/modules/util/markUserLinks.ts
var markBlockedUserLinks = (userLinks) => {
  let users = Object.keys(userLinks);
  if (!users.length) {
    return;
  }
  const promises = [];
  var _iterator3 = _createForOfIteratorHelper(users), _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
      const user = _step3.value;
      if (mw.storage.getObject(storageKeyBlocked + user)) {
        var _response$query3;
        const response = mw.storage.getObject(storageKeyBlocked + user);
        if ((_response$query3 = response["query"]) !== null && _response$query3 !== void 0 && _response$query3.blocks) {
          markLocalBlocks({
            response,
            userLinks
          });
          users = users.filter((element) => {
            return element !== user;
          });
        }
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  for (let i = 0; i < users.length; i++) {
    const bkusers = users.splice(0, 25);
    if (!bkusers.length) {
      continue;
    }
    promises[promises.length] = /* @__PURE__ */ _asyncToGenerator(function* () {
      try {
        var _response$query2;
        const response = yield queryUserBlocks(bkusers);
        if ((_response$query2 = response["query"]) !== null && _response$query2 !== void 0 && _response$query2.blocks) {
          markLocalBlocks({
            response,
            userLinks
          });
          var _iterator4 = _createForOfIteratorHelper(response["query"].blocks), _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
              const block = _step4.value;
              if (block.user) {
                mw.storage.setObject(storageKeyBlocked + block.user, response, 60 * 60);
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      } catch (error) {
        console.error("[MarkBlocked] Ajax error:", error);
      }
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
var markBlockedIPLinks = (userLinks) => {
  const users = Object.keys(userLinks);
  if (!users.length) {
    return;
  }
  const promises = [];
  for (let i = 0; i < users.length; i++) {
    const bkusers = users.splice(0, 25);
    if (!bkusers.length) {
      continue;
    }
    var _iterator5 = _createForOfIteratorHelper(bkusers), _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
        let bkip = _step5.value;
        if (!mw.util.isIPv4Address(bkip) && !mw.util.isIPv6Address(bkip)) {
          continue;
        }
        if (mw.util.isIPv6Address(bkip)) {
          bkip = bkip.toUpperCase();
        }
        if (mw.storage.getObject(storageKeyBlocked + bkip)) {
          var _response$query4;
          const response = mw.storage.getObject(storageKeyBlocked + bkip);
          if ((_response$query4 = response["query"]) !== null && _response$query4 !== void 0 && _response$query4.blocks) {
            markLocalBlocks({
              response,
              userLinks
            });
          }
          continue;
        }
        promises[promises.length] = /* @__PURE__ */ _asyncToGenerator(function* () {
          try {
            var _response$query5;
            const response = yield queryIPBlocks(bkip);
            if ((_response$query5 = response["query"]) !== null && _response$query5 !== void 0 && _response$query5.blocks) {
              markLocalBlocks({
                response,
                userLinks,
                bkip
              });
              var _iterator6 = _createForOfIteratorHelper(response["query"].blocks), _step6;
              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
                  const block = _step6.value;
                  if (block.user) {
                    mw.storage.setObject(storageKeyBlocked + block.user, response, 60 * 60);
                  }
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }
            }
          } catch (error) {
            console.error("[MarkBlocked] Ajax error:", error);
          }
        });
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
  }
  void _asyncToGenerator(function* () {
    for (var _i2 = 0, _promises2 = promises; _i2 < _promises2.length; _i2++) {
      const promise = _promises2[_i2];
      try {
        yield promise();
      } catch {
      }
    }
  })();
};
//! src/MarkBlocked/modules/util/generateUserLinks.ts
var import_ext_gadget3 = require("ext.gadget.Util");
//! src/MarkBlocked/modules/util/generateUserNamespaceTitles.ts
var generateUserNamespaceTitles = () => {
  const {
    wgNamespaceIds
  } = mw.config.get();
  const userNamespaceTitles2 = [];
  for (var _i3 = 0, _Object$entries = Object.entries(wgNamespaceIds); _i3 < _Object$entries.length; _i3++) {
    const [namespace, id] = _Object$entries[_i3];
    if (!userNamespaceNumbers.includes(id)) {
      continue;
    }
    userNamespaceTitles2[userNamespaceTitles2.length] = "".concat(mw.util.escapeRegExp(namespace.replace(/_/g, " ")), ":");
  }
  return userNamespaceTitles2;
};
//! src/MarkBlocked/modules/util/generateUserLinks.ts
var userNamespaceTitles = generateUserNamespaceTitles();
var userTitleRegex = new RegExp("^(".concat(userNamespaceTitles.join("|"), "|").concat(contributionsPageAlias, "\\/)+([^\\/#]+)$"), "i");
var {
  wgArticlePath,
  wgScript
} = mw.config.get();
var articleRegex = new RegExp("".concat(wgArticlePath.replace("$1", ""), "([^#]+)"));
var scriptRegex = new RegExp("^".concat(wgScript, "\\?title=([^#&]+)"));
var generateUserLinks = ($content) => {
  const userLinks = {};
  var _iterator7 = _createForOfIteratorHelper($content.find("a")), _step7;
  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
      var _user, _userLinks$_user;
      const element = _step7.value;
      const $element = $(element);
      if ($element.hasClass("mw-changeslist-date") || $element.hasClass("ext-discussiontools-init-timestamplink") || $element.parent("span").hasClass("mw-history-undo") || $element.parent("span").hasClass("mw-rollback-link")) {
        continue;
      }
      const href = $element.attr("href");
      if (!href) {
        continue;
      }
      if (mw.util.isIPv6Address(href.replace(/^(?:https?:\/\/)/i, ""))) {
        continue;
      }
      try {
        if (new import_ext_gadget3.MwUri(href).host !== location.host) {
          continue;
        }
      } catch {
        try {
          if (new import_ext_gadget3.MwUri(location.href + href).host !== location.host) {
            continue;
          }
        } catch {
          continue;
        }
      }
      let pageTitle;
      if (articleRegex.test(href)) {
        const match = articleRegex.exec(href);
        pageTitle = match[1];
      } else if (scriptRegex.test(href)) {
        const match = scriptRegex.exec(href);
        pageTitle = match[1];
      } else {
        continue;
      }
      pageTitle = decodeURIComponent(pageTitle).replace(/_/g, " ");
      const userExecArray = userTitleRegex.exec(pageTitle);
      if (!userExecArray || typeof userExecArray[2] !== "string") {
        continue;
      }
      let user = userExecArray[2].slice(0, 1).toUpperCase() + userExecArray[2].slice(1);
      if (mw.util.isIPv6Address(user)) {
        user = user.toUpperCase();
      }
      (_userLinks$_user = userLinks[_user = user]) !== null && _userLinks$_user !== void 0 ? _userLinks$_user : userLinks[_user] = [];
      userLinks[user][userLinks[user].length] = $element;
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
  return userLinks;
};
//! src/MarkBlocked/modules/markBlockedUser.ts
var markBlockedUser = ($content) => {
  const userLinks = generateUserLinks($content);
  markBlockedUserLinks(userLinks);
  markBlockedIPLinks(userLinks);
};
//! src/MarkBlocked/modules/addHook.ts
var {
  wgAction,
  wgNamespaceNumber
} = mw.config.get();
var addHook = () => {
  let isInit = false;
  mw.hook("wikipage.content").add(function markBlocked($content) {
    if (isInit) {
      return;
    }
    isInit = true;
    if (wgAction === "view" && wgNamespaceNumber === 0) {
      $content = $content.find(".diff-title");
    }
    $content = $content.add("#ca-nstab-user");
    markBlockedUser($content);
  });
};
//! src/MarkBlocked/modules/util/clearOldKeys.ts
var clearOldKeys = () => {
  if (mw.storage.getObject("ext.gadget.MarkBlocked_oldKeysCleared")) {
    return;
  }
  for (const key in localStorage) {
    if (Object.hasOwn(localStorage, key)) {
      if (key.startsWith("ext.gadget.MarkBlocked_isLocked-") || key.startsWith("_EXPIRY_ext.gadget.MarkBlocked_isLocked-")) {
        localStorage.removeItem(key);
      }
    }
  }
  mw.storage.setObject("ext.gadget.MarkBlocked_oldKeysCleared", true);
};
//! src/MarkBlocked/MarkBlocked.ts
if (!["edit", "submit"].includes(mw.config.get("wgAction"))) {
  addHook();
}
if (!mw.storage.getObject("ext.gadget.MarkBlocked_oldKeysCleared")) {
  void clearOldKeys();
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01hcmtCbG9ja2VkL29wdGlvbnMuanNvbiIsICJzcmMvTWFya0Jsb2NrZWQvbW9kdWxlcy91dGlsL2FwaS50cyIsICJzcmMvTWFya0Jsb2NrZWQvbW9kdWxlcy91dGlsL3F1ZXJ5LnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvdXRpbC9wYXJzZVRpbWUudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvTWFya0Jsb2NrZWQubW9kdWxlLmxlc3MiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvdXRpbC9tYXJrTGlua3MudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvdXRpbC9tYXJrVXNlckxpbmtzLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVVc2VyTGlua3MudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvdXRpbC9nZW5lcmF0ZVVzZXJOYW1lc3BhY2VUaXRsZXMudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvbWFya0Jsb2NrZWRVc2VyLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL2FkZEhvb2sudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvdXRpbC9jbGVhck9sZEtleXMudHMiLCAic3JjL01hcmtCbG9ja2VkL01hcmtCbG9ja2VkLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiY29udHJpYnV0aW9uc1BhZ2VBbGlhc1wiOiBcIlNwZWNpYWw6Q29udHJpYnV0aW9uc1wiLFxuXHRcInVzZXJOYW1lc3BhY2VOdW1iZXJzXCI6IFsyLCAzXSxcblx0XCJzdG9yYWdlS2V5TG9ja2VkXCI6IFwiZXh0LmdhZGdldC5NYXJrQmxvY2tlZF9sb2NrZWQtXCIsXG5cdFwic3RvcmFnZUtleUJsb2NrZWRcIjogXCJleHQuZ2FkZ2V0Lk1hcmtCbG9ja2VkX2lzQmxvY2tlZC1cIixcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYE1hcmtCbG9ja2VkLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxuY29uc3QgcXVlcnlJUEJsb2NrcyA9IGFzeW5jIChia2lwOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUJsb2Nrc1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdGxpc3Q6IFsnYmxvY2tzJ10sXG5cdFx0YmtpcCxcblx0XHRia2xpbWl0OiAxMDAsXG5cdFx0Ymtwcm9wOiBbJ2J5JywgJ2V4cGlyeScsICdyZWFzb24nLCAncmVzdHJpY3Rpb25zJywgJ3RpbWVzdGFtcCcsICd1c2VyJ10sXG5cdFx0c21heGFnZTogNjAwLFxuXHRcdG1heGFnZTogNjAwLFxuXHR9O1xuXG5cdHJldHVybiBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG59O1xuXG5jb25zdCBxdWVyeVVzZXJCbG9ja3MgPSBhc3luYyAoYmt1c2Vyczogc3RyaW5nIHwgc3RyaW5nW10pID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUJsb2Nrc1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdGxpc3Q6IFsnYmxvY2tzJ10sXG5cdFx0Ymt1c2Vycyxcblx0XHRia2xpbWl0OiAxMDAsXG5cdFx0Ymtwcm9wOiBbJ2J5JywgJ2V4cGlyeScsICdyZWFzb24nLCAncmVzdHJpY3Rpb25zJywgJ3RpbWVzdGFtcCcsICd1c2VyJ10sXG5cdFx0c21heGFnZTogNjAwLFxuXHRcdG1heGFnZTogNjAwLFxuXHR9O1xuXG5cdHJldHVybiBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG59O1xuXG5leHBvcnQge3F1ZXJ5SVBCbG9ja3MsIHF1ZXJ5VXNlckJsb2Nrc307XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdGluZmluaXR5OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2luZmluaXR5Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+aXoOmZkOacnycsXG5cdFx0XHQnemgtaGFudCc6ICfnhKHpmZDmnJ8nLFxuXHRcdH0pLFxuXHRcdEJsb2NrZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnOyAkNWJsb2NrZWQgKCQxKSBieSAkMjogJDMgKCQ0IGFnbyknLFxuXHRcdFx0J3poLWhhbnMnOiAn77yb55SxJDIkNeWwgeemgSQx77yaJDPvvIgkNOWJje+8iScsXG5cdFx0XHQnemgtaGFudCc6ICfvvJvnlLEkMiQ15bCB6Y6WJDHvvJokM++8iCQ05YmN77yJJyxcblx0XHR9KSxcblx0XHQnR2xvYmFsbHkgQmxvY2tlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnOyAkNWJsb2NrZWQgZ2xvYmFsbHkgKCQxKSBieSAkMjogJDMgKCQ0IGFnbyknLFxuXHRcdFx0J3poLWhhbnMnOiAn77yb55SxJDIkNeWFqOWfn+WwgeemgSQx77yaJDPvvIgkNOWJje+8iScsXG5cdFx0XHQnemgtaGFudCc6ICfvvJvnlLEkMiQ15YWo5Z+f5bCB6Y6WJDHvvJokM++8iCQ05YmN77yJJyxcblx0XHR9KSxcblx0XHRMb2NrZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnOyBMb2NrZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn77yb5bey5YWo5Z+f6ZSB5a6aJyxcblx0XHRcdCd6aC1oYW50JzogJ++8m+W3suWFqOWfn+mOluWumicsXG5cdFx0fSksXG5cdFx0cGFydGlhbDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdwYXJ0aWFsICcsXG5cdFx0XHR6aDogJ+mDqOWIhicsXG5cdFx0fSksXG5cdFx0ZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdkYXknLFxuXHRcdFx0emg6ICflpKknLFxuXHRcdH0pLFxuXHRcdHM6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnc2Vjb25kJyxcblx0XHRcdHpoOiAn56eSJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3QgYWRkWmVybyA9ICh2OiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuXHRyZXR1cm4gdiA8PSA5ID8gYDAke3Z9YCA6IGAke3Z9YDtcbn07XG5cbmNvbnN0IGluSG91cnMgPSAobXM6IG51bWJlcik6IHN0cmluZyA9PiB7XG5cdGxldCBtbTogbnVtYmVyID0gTWF0aC5mbG9vcihtcyAvIDZlNCk7XG5cdGlmICghbW0pIHtcblx0XHRyZXR1cm4gYCR7TWF0aC5mbG9vcihtcyAvIDFlMyl9JHtnZXRNZXNzYWdlKCdzJyl9YDtcblx0fVxuXG5cdGxldCBoaDogbnVtYmVyID0gTWF0aC5mbG9vcihtbSAvIDYwKTtcblx0bW0gJT0gNjA7XG5cblx0Y29uc3QgZGQ6IG51bWJlciA9IE1hdGguZmxvb3IoaGggLyAyNCk7XG5cdGhoICU9IDI0O1xuXG5cdGlmIChkZCkge1xuXHRcdHJldHVybiBgJHtkZCArIChkZCA8IDEwID8gYC4ke2FkZFplcm8oaGgpfWAgOiAnJyl9JHtnZXRNZXNzYWdlKCdkJyl9YDtcblx0fVxuXG5cdHJldHVybiBgJHtoaH06JHthZGRaZXJvKG1tKX1gO1xufTtcblxuLy8gMjAwODEyMjYyMjA2MDUgb3IgMjAwOC0wMS0yNlQwNjozNDoxOVogLT4gbnVtYmVyXG5jb25zdCBwYXJzZVRTID0gKHN0cmluZzogc3RyaW5nKTogbnVtYmVyID0+IHtcblx0Y29uc3QgbTogUmVnRXhwTWF0Y2hBcnJheSA9IHN0cmluZ1xuXHRcdC5yZXBsYWNlKC9cXEQvZywgJycpXG5cdFx0Lm1hdGNoKC8oXFxkXFxkXFxkXFxkKShcXGRcXGQpKFxcZFxcZCkoXFxkXFxkKShcXGRcXGQpKFxcZFxcZCkvKSBhcyBSZWdFeHBNYXRjaEFycmF5O1xuXG5cdHJldHVybiBuZXcgRGF0ZShcblx0XHREYXRlLlVUQyhcblx0XHRcdCsobVsxXSBhcyBzdHJpbmcpLFxuXHRcdFx0KyhtWzJdIGFzIHN0cmluZykgLSAxLFxuXHRcdFx0KyhtWzNdIGFzIHN0cmluZyksXG5cdFx0XHQrKG1bNF0gYXMgc3RyaW5nKSxcblx0XHRcdCsobVs1XSBhcyBzdHJpbmcpLFxuXHRcdFx0KyhtWzZdIGFzIHN0cmluZylcblx0XHQpXG5cdCkuZ2V0VGltZSgpO1xufTtcblxuZXhwb3J0IHtpbkhvdXJzLCBwYXJzZVRTfTtcbiIsICJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL01hcmtCbG9ja2VkL21vZHVsZXMvTWFya0Jsb2NrZWQubW9kdWxlLmxlc3NcIjtcbmV4cG9ydCBjb25zdCB1c2VybGlua0luZGVmID0gXCJNYXJrQmxvY2tlZC1tb2R1bGVfX3VzZXJsaW5rSW5kZWZfeHRBZk9HX180MTAwXCI7XG5leHBvcnQgY29uc3QgdXNlcmxpbmtMb2NrZWQgPSBcIk1hcmtCbG9ja2VkLW1vZHVsZV9fdXNlcmxpbmtMb2NrZWRfeHRBZk9HX180MTAwXCI7XG5leHBvcnQgY29uc3QgdXNlcmxpbmtQYXJ0aWFsID0gXCJNYXJrQmxvY2tlZC1tb2R1bGVfX3VzZXJsaW5rUGFydGlhbF94dEFmT0dfXzQxMDBcIjtcbmV4cG9ydCBjb25zdCB1c2VybGlua1RlbXAgPSBcIk1hcmtCbG9ja2VkLW1vZHVsZV9fdXNlcmxpbmtUZW1wX3h0QWZPR19fNDEwMFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwidXNlcmxpbmtJbmRlZlwiOiB1c2VybGlua0luZGVmLFxuICBcInVzZXJsaW5rTG9ja2VkXCI6IHVzZXJsaW5rTG9ja2VkLFxuICBcInVzZXJsaW5rUGFydGlhbFwiOiB1c2VybGlua1BhcnRpYWwsXG4gIFwidXNlcmxpbmtUZW1wXCI6IHVzZXJsaW5rVGVtcFxufTtcbiAgICAgICIsICIvKiBlc2xpbnQtZGlzYWJsZSBzb3J0LWltcG9ydHMgKi9cbmltcG9ydCB0eXBlIHtRdWVyeUxvY2FsQW5kR2xvYmFsQmxvY2tzUmVzcG9uc2V9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7aW5Ib3VycywgcGFyc2VUU30gZnJvbSAnLi9wYXJzZVRpbWUnO1xuaW1wb3J0IHt1c2VybGlua0luZGVmLCB1c2VybGlua1BhcnRpYWwsIHVzZXJsaW5rVGVtcH0gZnJvbSAnLi4vTWFya0Jsb2NrZWQubW9kdWxlLmxlc3MnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gQ2FsbGJhY2s6IHJlY2VpdmUgZGF0YSBhbmQgbWFyayBsaW5rc1xuICovXG5cbmNvbnN0IG1hcmtMb2NhbEJsb2NrcyA9ICh7XG5cdHJlc3BvbnNlLFxuXHR1c2VyTGlua3MsXG5cdGJraXAsXG59OiB7XG5cdHJlc3BvbnNlOiBRdWVyeUxvY2FsQW5kR2xvYmFsQmxvY2tzUmVzcG9uc2U7XG5cdHVzZXJMaW5rczogUmVjb3JkPHN0cmluZywgSlF1ZXJ5W10+O1xuXHRia2lwPzogc3RyaW5nO1xufSk6IHZvaWQgPT4ge1xuXHQvLyBMb2NhbCBibG9ja3Ncblx0aWYgKCFyZXNwb25zZVsncXVlcnknXT8uYmxvY2tzKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Zm9yIChjb25zdCBibG9jayBvZiByZXNwb25zZVsncXVlcnknXS5ibG9ja3MpIHtcblx0XHRjb25zdCBpc1BhcnRpYWxCbGNvazogYm9vbGVhbiA9IHR5cGVvZiBibG9jay5yZXN0cmljdGlvbnMgPT09ICdzdHJpbmcnICYmIGJsb2NrLnJlc3RyaWN0aW9ucyAhPT0gJyc7IC8vIFBhcnRpYWwgYmxvY2tcblxuXHRcdGxldCBjbGFzc05hbWU6IHN0cmluZyA9IHVzZXJsaW5rUGFydGlhbCBhcyBzdHJpbmc7XG5cdFx0bGV0IGJsb2NrVGltZTogc3RyaW5nID0gJyc7XG5cdFx0aWYgKGJsb2NrLmV4cGlyeS5zdGFydHNXaXRoKCdpbicpKSB7XG5cdFx0XHRpZiAoIWlzUGFydGlhbEJsY29rKSB7XG5cdFx0XHRcdGNsYXNzTmFtZSA9IHVzZXJsaW5rSW5kZWYgYXMgc3RyaW5nO1xuXHRcdFx0fVxuXHRcdFx0YmxvY2tUaW1lID0gZ2V0TWVzc2FnZSgnaW5maW5pdHknKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKCFpc1BhcnRpYWxCbGNvaykge1xuXHRcdFx0XHRjbGFzc05hbWUgPSB1c2VybGlua1RlbXAgYXMgc3RyaW5nO1xuXHRcdFx0fVxuXHRcdFx0YmxvY2tUaW1lID0gaW5Ib3VycyhwYXJzZVRTKGJsb2NrLmV4cGlyeSkgLSBwYXJzZVRTKGJsb2NrLnRpbWVzdGFtcCkpO1xuXHRcdH1cblxuXHRcdGxldCB0aXA6IHN0cmluZyA9IGdldE1lc3NhZ2UoJ0Jsb2NrZWQnKVxuXHRcdFx0LnJlcGxhY2UoJyQxJywgYmxvY2tUaW1lKVxuXHRcdFx0LnJlcGxhY2UoJyQyJywgYmxvY2suYnkpXG5cdFx0XHQucmVwbGFjZSgnJDMnLCBibG9jay5yZWFzb24pXG5cdFx0XHQucmVwbGFjZSgnJDQnLCBpbkhvdXJzKERhdGUubm93KCkgLSBwYXJzZVRTKGJsb2NrLnRpbWVzdGFtcCkpKTtcblx0XHR0aXAgPSBpc1BhcnRpYWxCbGNvayA/IHRpcC5yZXBsYWNlKCckNScsIGdldE1lc3NhZ2UoJ3BhcnRpYWwnKSkgOiB0aXAucmVwbGFjZSgnJDUnLCAnJyk7XG5cblx0XHRjb25zdCAkbGlua3M6IEpRdWVyeVtdIHwgdW5kZWZpbmVkID0gdXNlckxpbmtzW2JraXAgPz8gYmxvY2sudXNlcl07XG5cdFx0aWYgKCEkbGlua3MpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgJGxpbmsgb2YgJGxpbmtzKSB7XG5cdFx0XHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0XHRcdC8vICogc2VlIC4vTWFya2Jsb2NrZWQubW9kdWxlLmxlc3Ncblx0XHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHRcdCRsaW5rLmFkZENsYXNzKGNsYXNzTmFtZSkuYXR0cigndGl0bGUnLCAkbGluay5hdHRyKCd0aXRsZScpICsgdGlwKTtcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7bWFya0xvY2FsQmxvY2tzfTtcbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBzb3J0LWltcG9ydHMgKi9cbmltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7cXVlcnlJUEJsb2NrcywgcXVlcnlVc2VyQmxvY2tzfSBmcm9tICcuL3F1ZXJ5JztcbmltcG9ydCB7bWFya0xvY2FsQmxvY2tzfSBmcm9tICcuL21hcmtMaW5rcyc7XG5pbXBvcnQgdHlwZSB7UXVlcnlMb2NhbEFuZEdsb2JhbEJsb2Nrc1Jlc3BvbnNlfSBmcm9tICcuLi90eXBlcyc7XG5cbmNvbnN0IG1hcmtCbG9ja2VkVXNlckxpbmtzID0gKHVzZXJMaW5rczogUmVjb3JkPHN0cmluZywgSlF1ZXJ5W10+KSA9PiB7XG5cdC8vIENvbnZlcnQgdXNlcnMgaW50byBhcnJheVxuXHRsZXQgdXNlcnM6IHN0cmluZ1tdID0gT2JqZWN0LmtleXModXNlckxpbmtzKTtcblx0aWYgKCF1c2Vycy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwcm9taXNlczogKCgpID0+IFByb21pc2U8dm9pZD4pW10gPSBbXTtcblxuXHRmb3IgKGNvbnN0IHVzZXIgb2YgdXNlcnMpIHtcblx0XHRpZiAobXcuc3RvcmFnZS5nZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5QmxvY2tlZCArIHVzZXIpKSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IG13LnN0b3JhZ2UuZ2V0T2JqZWN0KFxuXHRcdFx0XHRPUFRJT05TLnN0b3JhZ2VLZXlCbG9ja2VkICsgdXNlclxuXHRcdFx0KSBhcyBRdWVyeUxvY2FsQW5kR2xvYmFsQmxvY2tzUmVzcG9uc2U7XG5cblx0XHRcdGlmIChyZXNwb25zZVsncXVlcnknXT8uYmxvY2tzKSB7XG5cdFx0XHRcdG1hcmtMb2NhbEJsb2Nrcyh7cmVzcG9uc2UsIHVzZXJMaW5rc30pO1xuXG5cdFx0XHRcdHVzZXJzID0gdXNlcnMuZmlsdGVyKChlbGVtZW50KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGVsZW1lbnQgIT09IHVzZXI7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIExvY2FsIGFuZCBnbG9iYWwgdXNlciBibG9jayBxdWVyaWVzXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgdXNlcnMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBia3VzZXJzID0gdXNlcnMuc3BsaWNlKDAsIDI1KTtcblx0XHRpZiAoIWJrdXNlcnMubGVuZ3RoKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRwcm9taXNlc1twcm9taXNlcy5sZW5ndGhdID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSAoYXdhaXQgcXVlcnlVc2VyQmxvY2tzKGJrdXNlcnMpKSBhcyBRdWVyeUxvY2FsQW5kR2xvYmFsQmxvY2tzUmVzcG9uc2U7XG5cblx0XHRcdFx0aWYgKHJlc3BvbnNlWydxdWVyeSddPy5ibG9ja3MpIHtcblx0XHRcdFx0XHRtYXJrTG9jYWxCbG9ja3Moe3Jlc3BvbnNlLCB1c2VyTGlua3N9KTtcblxuXHRcdFx0XHRcdGZvciAoY29uc3QgYmxvY2sgb2YgcmVzcG9uc2VbJ3F1ZXJ5J10uYmxvY2tzKSB7XG5cdFx0XHRcdFx0XHRpZiAoYmxvY2sudXNlcikge1xuXHRcdFx0XHRcdFx0XHRtdy5zdG9yYWdlLnNldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXlCbG9ja2VkICsgYmxvY2sudXNlciwgcmVzcG9uc2UsIDYwICogNjApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcignW01hcmtCbG9ja2VkXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0XHRcdH1cblx0XHR9O1xuXHR9XG5cblx0dm9pZCAoYXN5bmMgKCkgPT4ge1xuXHRcdGZvciAoY29uc3QgcHJvbWlzZSBvZiBwcm9taXNlcykge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgcHJvbWlzZSgpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdH1cblx0fSkoKTtcbn07XG5cbmNvbnN0IG1hcmtCbG9ja2VkSVBMaW5rcyA9ICh1c2VyTGlua3M6IFJlY29yZDxzdHJpbmcsIEpRdWVyeVtdPikgPT4ge1xuXHQvLyBDb252ZXJ0IHVzZXJzIGludG8gYXJyYXlcblx0Y29uc3QgdXNlcnM6IHN0cmluZ1tdID0gT2JqZWN0LmtleXModXNlckxpbmtzKTtcblx0aWYgKCF1c2Vycy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwcm9taXNlczogKCgpID0+IFByb21pc2U8dm9pZD4pW10gPSBbXTtcblxuXHQvLyBMb2NhbCBJUCBibG9jayBxdWVyaWVzXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgdXNlcnMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBia3VzZXJzID0gdXNlcnMuc3BsaWNlKDAsIDI1KTtcblx0XHRpZiAoIWJrdXNlcnMubGVuZ3RoKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRmb3IgKGxldCBia2lwIG9mIGJrdXNlcnMpIHtcblx0XHRcdGlmICghbXcudXRpbC5pc0lQdjRBZGRyZXNzKGJraXApICYmICFtdy51dGlsLmlzSVB2NkFkZHJlc3MoYmtpcCkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChtdy51dGlsLmlzSVB2NkFkZHJlc3MoYmtpcCkpIHtcblx0XHRcdFx0YmtpcCA9IGJraXAudG9VcHBlckNhc2UoKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleUJsb2NrZWQgKyBia2lwKSkge1xuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IG13LnN0b3JhZ2UuZ2V0T2JqZWN0KFxuXHRcdFx0XHRcdE9QVElPTlMuc3RvcmFnZUtleUJsb2NrZWQgKyBia2lwXG5cdFx0XHRcdCkgYXMgUXVlcnlMb2NhbEFuZEdsb2JhbEJsb2Nrc1Jlc3BvbnNlO1xuXG5cdFx0XHRcdGlmIChyZXNwb25zZVsncXVlcnknXT8uYmxvY2tzKSB7XG5cdFx0XHRcdFx0bWFya0xvY2FsQmxvY2tzKHtyZXNwb25zZSwgdXNlckxpbmtzfSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0cHJvbWlzZXNbcHJvbWlzZXMubGVuZ3RoXSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRjb25zdCByZXNwb25zZSA9IChhd2FpdCBxdWVyeUlQQmxvY2tzKGJraXApKSBhcyBRdWVyeUxvY2FsQW5kR2xvYmFsQmxvY2tzUmVzcG9uc2U7XG5cblx0XHRcdFx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10/LmJsb2Nrcykge1xuXHRcdFx0XHRcdFx0bWFya0xvY2FsQmxvY2tzKHtyZXNwb25zZSwgdXNlckxpbmtzLCBia2lwfSk7XG5cblx0XHRcdFx0XHRcdGZvciAoY29uc3QgYmxvY2sgb2YgcmVzcG9uc2VbJ3F1ZXJ5J10uYmxvY2tzKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChibG9jay51c2VyKSB7XG5cdFx0XHRcdFx0XHRcdFx0bXcuc3RvcmFnZS5zZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5QmxvY2tlZCArIGJsb2NrLnVzZXIsIHJlc3BvbnNlLCA2MCAqIDYwKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCdbTWFya0Jsb2NrZWRdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblx0fVxuXG5cdHZvaWQgKGFzeW5jICgpID0+IHtcblx0XHRmb3IgKGNvbnN0IHByb21pc2Ugb2YgcHJvbWlzZXMpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGF3YWl0IHByb21pc2UoKTtcblx0XHRcdH0gY2F0Y2gge31cblx0XHR9XG5cdH0pKCk7XG59O1xuXG5leHBvcnQge21hcmtCbG9ja2VkVXNlckxpbmtzLCBtYXJrQmxvY2tlZElQTGlua3N9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7TXdVcml9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2dlbmVyYXRlVXNlck5hbWVzcGFjZVRpdGxlc30gZnJvbSAnLi9nZW5lcmF0ZVVzZXJOYW1lc3BhY2VUaXRsZXMnO1xuXG4vLyBHZXQgYWxsIGFsaWFzZXMgZm9yIHVzZXI6ICYgdXNlcl90YWxrOlxuY29uc3QgdXNlck5hbWVzcGFjZVRpdGxlczogc3RyaW5nW10gPSBnZW5lcmF0ZVVzZXJOYW1lc3BhY2VUaXRsZXMoKTtcbi8vIFJlZ0V4cCBmb3IgYWxsIHRpdGxlcyB0aGF0IGFyZSAgVXNlcjp8IFVzZXJfdGFsazogfCBTcGVjaWFsOkNvbnRyaWJ1dGlvbnMvIChmb3IgdXNlcnNjcmlwdHMpXG5jb25zdCB1c2VyVGl0bGVSZWdleDogUmVnRXhwID0gbmV3IFJlZ0V4cChcblx0YF4oJHt1c2VyTmFtZXNwYWNlVGl0bGVzLmpvaW4oJ3wnKX18JHtPUFRJT05TLmNvbnRyaWJ1dGlvbnNQYWdlQWxpYXN9XFxcXC8pKyhbXlxcXFwvI10rKSRgLFxuXHQnaSdcbik7XG5cbi8vIFJlZ0V4cCBmb3IgbGlua3Ncbi8vIGFydGljbGVSZWdleCBhbHNvIG1hdGNoZXMgZXh0ZXJuYWwgbGlua3MgaW4gb3JkZXIgdG8gc3VwcG9ydCB0aGUgbm9waW5nIHRlbXBsYXRlXG5jb25zdCB7d2dBcnRpY2xlUGF0aCwgd2dTY3JpcHR9ID0gbXcuY29uZmlnLmdldCgpO1xuY29uc3QgYXJ0aWNsZVJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKGAke3dnQXJ0aWNsZVBhdGgucmVwbGFjZSgnJDEnLCAnJyl9KFteI10rKWApO1xuY29uc3Qgc2NyaXB0UmVnZXg6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoYF4ke3dnU2NyaXB0fVxcXFw/dGl0bGU9KFteIyZdKylgKTtcblxuY29uc3QgZ2VuZXJhdGVVc2VyTGlua3MgPSAoJGNvbnRlbnQ6IEpRdWVyeSk6IFJlY29yZDxzdHJpbmcsIEpRdWVyeVtdPiA9PiB7XG5cdC8vIEZpbmQgYWxsIFwidXNlclwiIGxpbmtzIGFuZCBzYXZlIHRoZW0gaW4gdXNlckxpbmtzIDogeyAndXNlcnMnOiBbPGxpbmsxPiwgPGxpbmsyPiwgLi4uXSwgJ3VzZXIyJzogWzxsaW5rMz4sIDxsaW5rMz4sIC4uLl0sIC4uLiB9XG5cdGNvbnN0IHVzZXJMaW5rczogUmVjb3JkPHN0cmluZywgSlF1ZXJ5W10+ID0ge307XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRjb250ZW50LmZpbmQoJ2EnKSkge1xuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+ID0gJChlbGVtZW50KTtcblx0XHRpZiAoXG5cdFx0XHQkZWxlbWVudC5oYXNDbGFzcygnbXctY2hhbmdlc2xpc3QtZGF0ZScpIHx8XG5cdFx0XHQkZWxlbWVudC5oYXNDbGFzcygnZXh0LWRpc2N1c3Npb250b29scy1pbml0LXRpbWVzdGFtcGxpbmsnKSB8fFxuXHRcdFx0JGVsZW1lbnQucGFyZW50KCdzcGFuJykuaGFzQ2xhc3MoJ213LWhpc3RvcnktdW5kbycpIHx8XG5cdFx0XHQkZWxlbWVudC5wYXJlbnQoJ3NwYW4nKS5oYXNDbGFzcygnbXctcm9sbGJhY2stbGluaycpXG5cdFx0KSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBocmVmOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkZWxlbWVudC5hdHRyKCdocmVmJyk7XG5cdFx0aWYgKCFocmVmKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0aWYgKG13LnV0aWwuaXNJUHY2QWRkcmVzcyhocmVmLnJlcGxhY2UoL14oPzpodHRwcz86XFwvXFwvKS9pLCAnJykpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0dHJ5IHtcblx0XHRcdC8vIE1heWJlIGFic29sdXRlIFVSTFxuXHRcdFx0aWYgKG5ldyBNd1VyaShocmVmKS5ob3N0ICE9PSBsb2NhdGlvbi5ob3N0KSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Ly8gTWF5YmUgcmVsYXRpdmUgVVJMXG5cdFx0XHRcdGlmIChuZXcgTXdVcmkobG9jYXRpb24uaHJlZiArIGhyZWYpLmhvc3QgIT09IGxvY2F0aW9uLmhvc3QpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGxldCBwYWdlVGl0bGU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0XHRpZiAoYXJ0aWNsZVJlZ2V4LnRlc3QoaHJlZikpIHtcblx0XHRcdGNvbnN0IG1hdGNoOiBSZWdFeHBFeGVjQXJyYXkgPSBhcnRpY2xlUmVnZXguZXhlYyhocmVmKSBhcyBSZWdFeHBFeGVjQXJyYXk7XG5cdFx0XHRwYWdlVGl0bGUgPSBtYXRjaFsxXSBhcyBzdHJpbmc7XG5cdFx0fSBlbHNlIGlmIChzY3JpcHRSZWdleC50ZXN0KGhyZWYpKSB7XG5cdFx0XHRjb25zdCBtYXRjaDogUmVnRXhwRXhlY0FycmF5ID0gc2NyaXB0UmVnZXguZXhlYyhocmVmKSBhcyBSZWdFeHBFeGVjQXJyYXk7XG5cdFx0XHRwYWdlVGl0bGUgPSBtYXRjaFsxXSBhcyBzdHJpbmc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHBhZ2VUaXRsZSA9IGRlY29kZVVSSUNvbXBvbmVudChwYWdlVGl0bGUpLnJlcGxhY2UoL18vZywgJyAnKTtcblxuXHRcdGNvbnN0IHVzZXJFeGVjQXJyYXk6IFJlZ0V4cEV4ZWNBcnJheSB8IG51bGwgPSB1c2VyVGl0bGVSZWdleC5leGVjKHBhZ2VUaXRsZSk7XG5cdFx0aWYgKCF1c2VyRXhlY0FycmF5IHx8IHR5cGVvZiB1c2VyRXhlY0FycmF5WzJdICE9PSAnc3RyaW5nJykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0bGV0IHVzZXI6IHN0cmluZyA9IHVzZXJFeGVjQXJyYXlbMl0uc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKSArIHVzZXJFeGVjQXJyYXlbMl0uc2xpY2UoMSk7XG5cdFx0aWYgKG13LnV0aWwuaXNJUHY2QWRkcmVzcyh1c2VyKSkge1xuXHRcdFx0dXNlciA9IHVzZXIudG9VcHBlckNhc2UoKTtcblx0XHR9XG5cblx0XHR1c2VyTGlua3NbdXNlcl0gPz89IFtdO1xuXG5cdFx0KHVzZXJMaW5rc1t1c2VyXSBhcyAodHlwZW9mIHVzZXJMaW5rcylba2V5b2YgdHlwZW9mIHVzZXJMaW5rc10pW1xuXHRcdFx0KHVzZXJMaW5rc1t1c2VyXSBhcyAodHlwZW9mIHVzZXJMaW5rcylba2V5b2YgdHlwZW9mIHVzZXJMaW5rc10pLmxlbmd0aFxuXHRcdF0gPSAkZWxlbWVudDsgLy8gUmVwbGFjZSBBcnJheSNwdXNoIHRvIGF2b2lkIGNvcmUtanMgcG9seWZpbGxpbmdcblx0fVxuXG5cdHJldHVybiB1c2VyTGlua3M7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlVXNlckxpbmtzfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5cbmNvbnN0IGdlbmVyYXRlVXNlck5hbWVzcGFjZVRpdGxlcyA9ICgpOiBzdHJpbmdbXSA9PiB7XG5cdGNvbnN0IHt3Z05hbWVzcGFjZUlkc30gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y29uc3QgdXNlck5hbWVzcGFjZVRpdGxlczogc3RyaW5nW10gPSBbXTtcblxuXHRmb3IgKGNvbnN0IFtuYW1lc3BhY2UsIGlkXSBvZiBPYmplY3QuZW50cmllcyh3Z05hbWVzcGFjZUlkcykpIHtcblx0XHRpZiAoIU9QVElPTlMudXNlck5hbWVzcGFjZU51bWJlcnMuaW5jbHVkZXMoaWQpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHR1c2VyTmFtZXNwYWNlVGl0bGVzW3VzZXJOYW1lc3BhY2VUaXRsZXMubGVuZ3RoXSA9IGAke213LnV0aWwuZXNjYXBlUmVnRXhwKG5hbWVzcGFjZS5yZXBsYWNlKC9fL2csICcgJykpfTpgOyAvLyBSZXBsYWNlIEFycmF5I3B1c2ggdG8gYXZvaWQgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXHR9XG5cblx0cmV0dXJuIHVzZXJOYW1lc3BhY2VUaXRsZXM7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlVXNlck5hbWVzcGFjZVRpdGxlc307XG4iLCAiaW1wb3J0IHttYXJrQmxvY2tlZElQTGlua3MsIG1hcmtCbG9ja2VkVXNlckxpbmtzfSBmcm9tICcuL3V0aWwvbWFya1VzZXJMaW5rcyc7XG5pbXBvcnQge2dlbmVyYXRlVXNlckxpbmtzfSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVVc2VyTGlua3MnO1xuXG5jb25zdCBtYXJrQmxvY2tlZFVzZXIgPSAoJGNvbnRlbnQ6IEpRdWVyeSk6IHZvaWQgPT4ge1xuXHQvLyBGaW5kIGFsbCBcInVzZXJcIiBsaW5rcyBhbmQgc2F2ZSB0aGVtIGluIHVzZXJMaW5rcyA6IHsgJ3VzZXJzJzogWzxsaW5rMT4sIDxsaW5rMj4sIC4uLl0sICd1c2VyMic6IFs8bGluazM+LCA8bGluazM+LCAuLi5dLCAuLi4gfVxuXHRjb25zdCB1c2VyTGlua3M6IFJlY29yZDxzdHJpbmcsIEpRdWVyeVtdPiA9IGdlbmVyYXRlVXNlckxpbmtzKCRjb250ZW50KTtcblxuXHRtYXJrQmxvY2tlZFVzZXJMaW5rcyh1c2VyTGlua3MpO1xuXHRtYXJrQmxvY2tlZElQTGlua3ModXNlckxpbmtzKTtcbn07XG5cbmV4cG9ydCB7bWFya0Jsb2NrZWRVc2VyfTtcbiIsICJpbXBvcnQge21hcmtCbG9ja2VkVXNlcn0gZnJvbSAnLi9tYXJrQmxvY2tlZFVzZXInO1xuXG5jb25zdCB7d2dBY3Rpb24sIHdnTmFtZXNwYWNlTnVtYmVyfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuY29uc3QgYWRkSG9vayA9ICgpOiB2b2lkID0+IHtcblx0bGV0IGlzSW5pdDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdG13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5hZGQoZnVuY3Rpb24gbWFya0Jsb2NrZWQoJGNvbnRlbnQpOiB2b2lkIHtcblx0XHRpZiAoaXNJbml0KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlzSW5pdCA9IHRydWU7XG5cblx0XHQvLyBPbiB0aGUgZmlyc3QgY2FsbCBhZnRlciBpbml0aWFsIHBhZ2UgbG9hZCwgY29udGFpbmVyIGlzIG13LnV0aWwuJGNvbnRlbnRcblx0XHQvLyBVc2VkIHRvIGxpbWl0IG1haW5zcGFjZSBhY3Rpdml0eSB0byBqdXN0IHRoZSBkaWZmIGRlZmluaXRpb25zXG5cdFx0aWYgKHdnQWN0aW9uID09PSAndmlldycgJiYgd2dOYW1lc3BhY2VOdW1iZXIgPT09IDApIHtcblx0XHRcdCRjb250ZW50ID0gJGNvbnRlbnQuZmluZCgnLmRpZmYtdGl0bGUnKTtcblx0XHR9XG5cdFx0Ly8gT24gcGFnZSBsb2FkLCBhbHNvIHVwZGF0ZSB0aGUgbmFtZXNwYWNlIHRhYlxuXHRcdCRjb250ZW50ID0gJGNvbnRlbnQuYWRkKCcjY2EtbnN0YWItdXNlcicpO1xuXG5cdFx0bWFya0Jsb2NrZWRVc2VyKCRjb250ZW50KTtcblx0fSk7XG59O1xuXG5leHBvcnQge2FkZEhvb2t9O1xuIiwgImNvbnN0IGNsZWFyT2xkS2V5cyA9ICgpOiB2b2lkID0+IHtcblx0aWYgKG13LnN0b3JhZ2UuZ2V0T2JqZWN0KCdleHQuZ2FkZ2V0Lk1hcmtCbG9ja2VkX29sZEtleXNDbGVhcmVkJykpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRmb3IgKGNvbnN0IGtleSBpbiBsb2NhbFN0b3JhZ2UpIHtcblx0XHRpZiAoT2JqZWN0Lmhhc093bihsb2NhbFN0b3JhZ2UsIGtleSkpIHtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL25vLWxvbmVseS1pZlxuXHRcdFx0aWYgKFxuXHRcdFx0XHRrZXkuc3RhcnRzV2l0aCgnZXh0LmdhZGdldC5NYXJrQmxvY2tlZF9pc0xvY2tlZC0nKSB8fFxuXHRcdFx0XHRrZXkuc3RhcnRzV2l0aCgnX0VYUElSWV9leHQuZ2FkZ2V0Lk1hcmtCbG9ja2VkX2lzTG9ja2VkLScpXG5cdFx0XHQpIHtcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gaWYgKFxuXHRcdFx0Ly8gXHRrZXkuc3RhcnRzV2l0aCgnZXh0LmdhZGdldC5NYXJrQmxvY2tlZF9pc0Jsb2NrZWQtJykgfHxcblx0XHRcdC8vIFx0a2V5LnN0YXJ0c1dpdGgoJ19FWFBJUllfZXh0LmdhZGdldC5NYXJrQmxvY2tlZF9pc0Jsb2NrZWQtJylcblx0XHRcdC8vICkge1xuXHRcdFx0Ly8gXHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuXHRcdFx0Ly8gfVxuXHRcdH1cblx0fVxuXG5cdG13LnN0b3JhZ2Uuc2V0T2JqZWN0KCdleHQuZ2FkZ2V0Lk1hcmtCbG9ja2VkX29sZEtleXNDbGVhcmVkJywgdHJ1ZSk7XG59O1xuXG5leHBvcnQge2NsZWFyT2xkS2V5c307XG4iLCAiaW1wb3J0IHthZGRIb29rfSBmcm9tICcuL21vZHVsZXMvYWRkSG9vayc7XG5pbXBvcnQge2NsZWFyT2xkS2V5c30gZnJvbSAnLi9tb2R1bGVzL3V0aWwvY2xlYXJPbGRLZXlzJztcblxuaWYgKCFbJ2VkaXQnLCAnc3VibWl0J10uaW5jbHVkZXMobXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKSkpIHtcblx0YWRkSG9vaygpO1xufVxuXG4vLyBhZGQgYSBvbmUtdGltZSBmdW5jdGlvbiB0byBjbGVhciBvbGQgbG9jYWxTdG9yYWdlIGtleXNcbmlmICghbXcuc3RvcmFnZS5nZXRPYmplY3QoJ2V4dC5nYWRnZXQuTWFya0Jsb2NrZWRfb2xkS2V5c0NsZWFyZWQnKSkge1xuXHR2b2lkIGNsZWFyT2xkS2V5cygpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEseUJBQTBCO0FBQzFCLElBQUFDLHVCQUF3QixDQUFDLEdBQUcsQ0FBQztBQUU3QixJQUFBQyxvQkFBcUI7QUFDckIsSUFBQUMsVUFBVzs7QUNKWixJQUFBQyxvQkFBd0JDLFFBQUEsaUJBQUE7QUFFeEIsSUFBTUMsT0FBQSxHQUFjRixrQkFBQUcsV0FBQSxlQUFBQyxPQUFpQ0wsT0FBTyxDQUFFOztBQ0Q5RCxJQUFNTSxnQkFBQSw0QkFBQTtBQUFBLE1BQUFDLE9BQUFDLGtCQUFnQixXQUFPQyxNQUFpQjtBQUM3QyxVQUFNQyxTQUErQjtNQUNwQ0MsUUFBUTtNQUNSQyxRQUFRO01BQ1JDLGVBQWU7TUFDZkMsTUFBTSxDQUFDLFFBQVE7TUFDZkw7TUFDQU0sU0FBUztN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QUFHQSxJQUFJLENBQUMxRSxHQUFHQyxRQUFRQyxVQUFVLHVDQUF1QyxHQUFHO0FBQ25FLE9BQUs2RSxhQUFhO0FBQ25COyIsCiAgIm5hbWVzIjogWyJjb250cmlidXRpb25zUGFnZUFsaWFzIiwgInVzZXJOYW1lc3BhY2VOdW1iZXJzIiwgInN0b3JhZ2VLZXlCbG9ja2VkIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJxdWVyeUlQQmxvY2tzIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiYmtpcCIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgImxpc3QiLCAiYmtsaW1pdCIsICJia3Byb3AiLCAic21heGFnZSIsICJtYXhhZ2UiLCAiZ2V0IiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJxdWVyeVVzZXJCbG9ja3MiLCAiX3JlZjIiLCAiYmt1c2VycyIsICJfeDIiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImdldEkxOG5NZXNzYWdlcyIsICJpbmZpbml0eSIsICJsb2NhbGl6ZSIsICJlbiIsICJCbG9ja2VkIiwgIkxvY2tlZCIsICJwYXJ0aWFsIiwgInpoIiwgImQiLCAicyIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiYWRkWmVybyIsICJ2IiwgImluSG91cnMiLCAibXMiLCAibW0iLCAiTWF0aCIsICJmbG9vciIsICJoaCIsICJkZCIsICJwYXJzZVRTIiwgInN0cmluZyIsICJtIiwgInJlcGxhY2UiLCAibWF0Y2giLCAiRGF0ZSIsICJVVEMiLCAiZ2V0VGltZSIsICJ1c2VybGlua0luZGVmIiwgInVzZXJsaW5rUGFydGlhbCIsICJ1c2VybGlua1RlbXAiLCAibWFya0xvY2FsQmxvY2tzIiwgInJlc3BvbnNlIiwgInVzZXJMaW5rcyIsICJfcmVzcG9uc2UkcXVlcnkiLCAiYmxvY2tzIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJuIiwgImRvbmUiLCAiYmxvY2siLCAidmFsdWUiLCAiaXNQYXJ0aWFsQmxjb2siLCAicmVzdHJpY3Rpb25zIiwgImNsYXNzTmFtZSIsICJibG9ja1RpbWUiLCAiZXhwaXJ5IiwgInN0YXJ0c1dpdGgiLCAidGltZXN0YW1wIiwgInRpcCIsICJieSIsICJyZWFzb24iLCAibm93IiwgIiRsaW5rcyIsICJ1c2VyIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgIiRsaW5rIiwgImFkZENsYXNzIiwgImF0dHIiLCAiZXJyIiwgImUiLCAiZiIsICJtYXJrQmxvY2tlZFVzZXJMaW5rcyIsICJ1c2VycyIsICJPYmplY3QiLCAia2V5cyIsICJsZW5ndGgiLCAicHJvbWlzZXMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAibXciLCAic3RvcmFnZSIsICJnZXRPYmplY3QiLCAiX3Jlc3BvbnNlJHF1ZXJ5MyIsICJmaWx0ZXIiLCAiZWxlbWVudCIsICJpIiwgInNwbGljZSIsICJfcmVzcG9uc2UkcXVlcnkyIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgInNldE9iamVjdCIsICJlcnJvciIsICJjb25zb2xlIiwgIl9pIiwgIl9wcm9taXNlcyIsICJwcm9taXNlIiwgIm1hcmtCbG9ja2VkSVBMaW5rcyIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJ1dGlsIiwgImlzSVB2NEFkZHJlc3MiLCAiaXNJUHY2QWRkcmVzcyIsICJ0b1VwcGVyQ2FzZSIsICJfcmVzcG9uc2UkcXVlcnk0IiwgIl9yZXNwb25zZSRxdWVyeTUiLCAiX2l0ZXJhdG9yNiIsICJfc3RlcDYiLCAiX2kyIiwgIl9wcm9taXNlczIiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImdlbmVyYXRlVXNlck5hbWVzcGFjZVRpdGxlcyIsICJ3Z05hbWVzcGFjZUlkcyIsICJjb25maWciLCAidXNlck5hbWVzcGFjZVRpdGxlczIiLCAiX2kzIiwgIl9PYmplY3QkZW50cmllcyIsICJlbnRyaWVzIiwgIm5hbWVzcGFjZSIsICJpZCIsICJpbmNsdWRlcyIsICJlc2NhcGVSZWdFeHAiLCAidXNlck5hbWVzcGFjZVRpdGxlcyIsICJ1c2VyVGl0bGVSZWdleCIsICJSZWdFeHAiLCAiam9pbiIsICJ3Z0FydGljbGVQYXRoIiwgIndnU2NyaXB0IiwgImFydGljbGVSZWdleCIsICJzY3JpcHRSZWdleCIsICJnZW5lcmF0ZVVzZXJMaW5rcyIsICIkY29udGVudCIsICJfaXRlcmF0b3I3IiwgImZpbmQiLCAiX3N0ZXA3IiwgIl91c2VyIiwgIl91c2VyTGlua3MkX3VzZXIiLCAiJGVsZW1lbnQiLCAiJCIsICJoYXNDbGFzcyIsICJwYXJlbnQiLCAiaHJlZiIsICJNd1VyaSIsICJob3N0IiwgImxvY2F0aW9uIiwgInBhZ2VUaXRsZSIsICJ0ZXN0IiwgImV4ZWMiLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgInVzZXJFeGVjQXJyYXkiLCAic2xpY2UiLCAibWFya0Jsb2NrZWRVc2VyIiwgIndnQWN0aW9uIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgImFkZEhvb2siLCAiaXNJbml0IiwgImhvb2siLCAiYWRkIiwgIm1hcmtCbG9ja2VkIiwgImNsZWFyT2xkS2V5cyIsICJsb2NhbFN0b3JhZ2UiLCAiaGFzT3duIiwgInJlbW92ZUl0ZW0iXQp9Cg==
