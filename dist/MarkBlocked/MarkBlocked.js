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
var storageKeyBlocked = "ext.gadget.MarkBlocked_blocked-";
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
      list: "blocks",
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
      list: "blocks",
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
  const usersToQuery = [];
  for (var _i = 0, _users = users; _i < _users.length; _i++) {
    var _cached$query;
    const user = _users[_i];
    let processed = false;
    const cached = mw.storage.getObject(storageKeyBlocked + user);
    if (cached && (_cached$query = cached["query"]) !== null && _cached$query !== void 0 && _cached$query.blocks) {
      markLocalBlocks({
        response: cached,
        userLinks
      });
      processed = true;
    }
    if (!processed) {
      usersToQuery.push(user);
    }
  }
  users = usersToQuery;
  while (users.length) {
    const bkusers = users.splice(0, 25);
    if (!bkusers.length) {
      continue;
    }
    promises[promises.length] = /* @__PURE__ */ _asyncToGenerator(function* () {
      try {
        var _response$query2;
        const response = yield queryUserBlocks(bkusers);
        const blockRecords = {};
        var _iterator3 = _createForOfIteratorHelper(bkusers), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            const user = _step3.value;
            blockRecords[user] = {
              query: {
                blocks: []
              }
            };
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
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
                var _blockRecords$block$u;
                (_blockRecords$block$u = blockRecords[block.user]) === null || _blockRecords$block$u === void 0 || _blockRecords$block$u.query.blocks.push(block);
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
        for (var _i2 = 0, _Object$entries = Object.entries(blockRecords); _i2 < _Object$entries.length; _i2++) {
          const [user, value] = _Object$entries[_i2];
          mw.storage.setObject(storageKeyBlocked + user, value, 60 * 60);
        }
      } catch (error) {
        console.error("[MarkBlocked] Ajax error:", error);
      }
    });
  }
  void _asyncToGenerator(function* () {
    for (var _i3 = 0, _promises = promises; _i3 < _promises.length; _i3++) {
      const promise = _promises[_i3];
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
  while (users.length) {
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
        const cached = mw.storage.getObject(storageKeyBlocked + bkip);
        if (cached) {
          var _cached$query2;
          if ((_cached$query2 = cached["query"]) !== null && _cached$query2 !== void 0 && _cached$query2.blocks) {
            markLocalBlocks({
              response: cached,
              userLinks
            });
          }
          continue;
        }
        promises[promises.length] = /* @__PURE__ */ _asyncToGenerator(function* () {
          try {
            var _response$query3;
            const response = yield queryIPBlocks(bkip);
            if ((_response$query3 = response["query"]) !== null && _response$query3 !== void 0 && _response$query3.blocks) {
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
    for (var _i4 = 0, _promises2 = promises; _i4 < _promises2.length; _i4++) {
      const promise = _promises2[_i4];
      try {
        yield promise();
      } catch {
      }
    }
  })();
};
//! src/MarkBlocked/modules/util/generateUserNamespaceTitles.ts
var generateUserNamespaceTitles = () => {
  const {
    wgNamespaceIds
  } = mw.config.get();
  const userNamespaceTitles2 = [];
  for (var _i5 = 0, _Object$entries2 = Object.entries(wgNamespaceIds); _i5 < _Object$entries2.length; _i5++) {
    const [namespace, id] = _Object$entries2[_i5];
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
      if (!element.classList.contains("mw-userlink")) {
        try {
          if (href.includes("://") || href.startsWith("//")) {
            const url = new URL(href, location.href);
            if (url.host !== location.host) {
              continue;
            }
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01hcmtCbG9ja2VkL29wdGlvbnMuanNvbiIsICJzcmMvTWFya0Jsb2NrZWQvbW9kdWxlcy91dGlsL2FwaS50cyIsICJzcmMvTWFya0Jsb2NrZWQvbW9kdWxlcy91dGlsL3F1ZXJ5LnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvdXRpbC9wYXJzZVRpbWUudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvTWFya0Jsb2NrZWQubW9kdWxlLmxlc3MiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvdXRpbC9tYXJrTGlua3MudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvdXRpbC9tYXJrVXNlckxpbmtzLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVVc2VyTmFtZXNwYWNlVGl0bGVzLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVVc2VyTGlua3MudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvbWFya0Jsb2NrZWRVc2VyLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL2FkZEhvb2sudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvdXRpbC9jbGVhck9sZEtleXMudHMiLCAic3JjL01hcmtCbG9ja2VkL01hcmtCbG9ja2VkLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiY29udHJpYnV0aW9uc1BhZ2VBbGlhc1wiOiBcIlNwZWNpYWw6Q29udHJpYnV0aW9uc1wiLFxuXHRcInVzZXJOYW1lc3BhY2VOdW1iZXJzXCI6IFsyLCAzXSxcblx0XCJzdG9yYWdlS2V5QmxvY2tlZFwiOiBcImV4dC5nYWRnZXQuTWFya0Jsb2NrZWRfYmxvY2tlZC1cIixcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYE1hcmtCbG9ja2VkLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxuY29uc3QgcXVlcnlJUEJsb2NrcyA9IGFzeW5jIChia2lwOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUJsb2Nrc1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdGxpc3Q6ICdibG9ja3MnLFxuXHRcdGJraXAsXG5cdFx0YmtsaW1pdDogMTAwLFxuXHRcdGJrcHJvcDogWydieScsICdleHBpcnknLCAncmVhc29uJywgJ3Jlc3RyaWN0aW9ucycsICd0aW1lc3RhbXAnLCAndXNlciddLFxuXHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRtYXhhZ2U6IDYwMCxcblx0fTtcblxuXHRyZXR1cm4gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xufTtcblxuY29uc3QgcXVlcnlVc2VyQmxvY2tzID0gYXN5bmMgKGJrdXNlcnM6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlCbG9ja3NQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRsaXN0OiAnYmxvY2tzJyxcblx0XHRia3VzZXJzLFxuXHRcdGJrbGltaXQ6IDEwMCxcblx0XHRia3Byb3A6IFsnYnknLCAnZXhwaXJ5JywgJ3JlYXNvbicsICdyZXN0cmljdGlvbnMnLCAndGltZXN0YW1wJywgJ3VzZXInXSxcblx0XHRzbWF4YWdlOiA2MDAsXG5cdFx0bWF4YWdlOiA2MDAsXG5cdH07XG5cblx0cmV0dXJuIGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcbn07XG5cbmV4cG9ydCB7cXVlcnlJUEJsb2NrcywgcXVlcnlVc2VyQmxvY2tzfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0aW5maW5pdHk6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnaW5maW5pdHknLFxuXHRcdFx0J3poLWhhbnMnOiAn5peg6ZmQ5pyfJyxcblx0XHRcdCd6aC1oYW50JzogJ+eEoemZkOacnycsXG5cdFx0fSksXG5cdFx0QmxvY2tlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICc7ICQ1YmxvY2tlZCAoJDEpIGJ5ICQyOiAkMyAoJDQgYWdvKScsXG5cdFx0XHQnemgtaGFucyc6ICfvvJvnlLEkMiQ15bCB56aBJDHvvJokM++8iCQ05YmN77yJJyxcblx0XHRcdCd6aC1oYW50JzogJ++8m+eUsSQyJDXlsIHpjpYkMe+8miQz77yIJDTliY3vvIknLFxuXHRcdH0pLFxuXHRcdHBhcnRpYWw6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAncGFydGlhbCAnLFxuXHRcdFx0emg6ICfpg6jliIYnLFxuXHRcdH0pLFxuXHRcdGQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnZGF5Jyxcblx0XHRcdHpoOiAn5aSpJyxcblx0XHR9KSxcblx0XHRzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ3NlY29uZCcsXG5cdFx0XHR6aDogJ+enkicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNvbnN0IGFkZFplcm8gPSAodjogbnVtYmVyKTogc3RyaW5nID0+IHtcblx0cmV0dXJuIHYgPD0gOSA/IGAwJHt2fWAgOiBgJHt2fWA7XG59O1xuXG5jb25zdCBpbkhvdXJzID0gKG1zOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuXHRsZXQgbW06IG51bWJlciA9IE1hdGguZmxvb3IobXMgLyA2ZTQpO1xuXHRpZiAoIW1tKSB7XG5cdFx0cmV0dXJuIGAke01hdGguZmxvb3IobXMgLyAxZTMpfSR7Z2V0TWVzc2FnZSgncycpfWA7XG5cdH1cblxuXHRsZXQgaGg6IG51bWJlciA9IE1hdGguZmxvb3IobW0gLyA2MCk7XG5cdG1tICU9IDYwO1xuXG5cdGNvbnN0IGRkOiBudW1iZXIgPSBNYXRoLmZsb29yKGhoIC8gMjQpO1xuXHRoaCAlPSAyNDtcblxuXHRpZiAoZGQpIHtcblx0XHRyZXR1cm4gYCR7ZGQgKyAoZGQgPCAxMCA/IGAuJHthZGRaZXJvKGhoKX1gIDogJycpfSR7Z2V0TWVzc2FnZSgnZCcpfWA7XG5cdH1cblxuXHRyZXR1cm4gYCR7aGh9OiR7YWRkWmVybyhtbSl9YDtcbn07XG5cbi8vIDIwMDgxMjI2MjIwNjA1IG9yIDIwMDgtMDEtMjZUMDY6MzQ6MTlaIC0+IG51bWJlclxuY29uc3QgcGFyc2VUUyA9IChzdHJpbmc6IHN0cmluZyk6IG51bWJlciA9PiB7XG5cdGNvbnN0IG06IFJlZ0V4cE1hdGNoQXJyYXkgPSBzdHJpbmdcblx0XHQucmVwbGFjZSgvXFxEL2csICcnKVxuXHRcdC5tYXRjaCgvKFxcZFxcZFxcZFxcZCkoXFxkXFxkKShcXGRcXGQpKFxcZFxcZCkoXFxkXFxkKShcXGRcXGQpLykgYXMgUmVnRXhwTWF0Y2hBcnJheTtcblxuXHRyZXR1cm4gbmV3IERhdGUoXG5cdFx0RGF0ZS5VVEMoXG5cdFx0XHQrKG1bMV0gYXMgc3RyaW5nKSxcblx0XHRcdCsobVsyXSBhcyBzdHJpbmcpIC0gMSxcblx0XHRcdCsobVszXSBhcyBzdHJpbmcpLFxuXHRcdFx0KyhtWzRdIGFzIHN0cmluZyksXG5cdFx0XHQrKG1bNV0gYXMgc3RyaW5nKSxcblx0XHRcdCsobVs2XSBhcyBzdHJpbmcpXG5cdFx0KVxuXHQpLmdldFRpbWUoKTtcbn07XG5cbmV4cG9ydCB7aW5Ib3VycywgcGFyc2VUU307XG4iLCAiaW1wb3J0IFwiZXNidWlsZC1jc3MtbW9kdWxlcy1wbHVnaW4tbnMtY3NzOnNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL01hcmtCbG9ja2VkLm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3QgdXNlcmxpbmtJbmRlZiA9IFwiTWFya0Jsb2NrZWQtbW9kdWxlX191c2VybGlua0luZGVmX3h0QWZPR19fNDEwMFwiO1xuZXhwb3J0IGNvbnN0IHVzZXJsaW5rUGFydGlhbCA9IFwiTWFya0Jsb2NrZWQtbW9kdWxlX191c2VybGlua1BhcnRpYWxfeHRBZk9HX180MTAwXCI7XG5leHBvcnQgY29uc3QgdXNlcmxpbmtUZW1wID0gXCJNYXJrQmxvY2tlZC1tb2R1bGVfX3VzZXJsaW5rVGVtcF94dEFmT0dfXzQxMDBcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcInVzZXJsaW5rSW5kZWZcIjogdXNlcmxpbmtJbmRlZixcbiAgXCJ1c2VybGlua1BhcnRpYWxcIjogdXNlcmxpbmtQYXJ0aWFsLFxuICBcInVzZXJsaW5rVGVtcFwiOiB1c2VybGlua1RlbXBcbn07XG4gICAgICAiLCAiaW1wb3J0IHtpbkhvdXJzLCBwYXJzZVRTfSBmcm9tICcuL3BhcnNlVGltZSc7XG5pbXBvcnQge3VzZXJsaW5rSW5kZWYsIHVzZXJsaW5rUGFydGlhbCwgdXNlcmxpbmtUZW1wfSBmcm9tICcuLi9NYXJrQmxvY2tlZC5tb2R1bGUubGVzcyc7XG5pbXBvcnQgdHlwZSB7UXVlcnlMb2NhbEFuZEdsb2JhbEJsb2Nrc1Jlc3BvbnNlfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBDYWxsYmFjazogcmVjZWl2ZSBkYXRhIGFuZCBtYXJrIGxpbmtzXG4gKi9cblxuY29uc3QgbWFya0xvY2FsQmxvY2tzID0gKHtcblx0cmVzcG9uc2UsXG5cdHVzZXJMaW5rcyxcblx0YmtpcCxcbn06IHtcblx0cmVzcG9uc2U6IFF1ZXJ5TG9jYWxBbmRHbG9iYWxCbG9ja3NSZXNwb25zZTtcblx0dXNlckxpbmtzOiBSZWNvcmQ8c3RyaW5nLCBKUXVlcnlbXT47XG5cdGJraXA/OiBzdHJpbmc7XG59KTogdm9pZCA9PiB7XG5cdC8vIExvY2FsIGJsb2Nrc1xuXHRpZiAoIXJlc3BvbnNlWydxdWVyeSddPy5ibG9ja3MpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRmb3IgKGNvbnN0IGJsb2NrIG9mIHJlc3BvbnNlWydxdWVyeSddLmJsb2Nrcykge1xuXHRcdGNvbnN0IGlzUGFydGlhbEJsY29rOiBib29sZWFuID0gdHlwZW9mIGJsb2NrLnJlc3RyaWN0aW9ucyA9PT0gJ3N0cmluZycgJiYgYmxvY2sucmVzdHJpY3Rpb25zICE9PSAnJzsgLy8gUGFydGlhbCBibG9ja1xuXG5cdFx0bGV0IGNsYXNzTmFtZTogc3RyaW5nID0gdXNlcmxpbmtQYXJ0aWFsIGFzIHN0cmluZztcblx0XHRsZXQgYmxvY2tUaW1lOiBzdHJpbmcgPSAnJztcblx0XHRpZiAoYmxvY2suZXhwaXJ5LnN0YXJ0c1dpdGgoJ2luJykpIHtcblx0XHRcdGlmICghaXNQYXJ0aWFsQmxjb2spIHtcblx0XHRcdFx0Y2xhc3NOYW1lID0gdXNlcmxpbmtJbmRlZiBhcyBzdHJpbmc7XG5cdFx0XHR9XG5cdFx0XHRibG9ja1RpbWUgPSBnZXRNZXNzYWdlKCdpbmZpbml0eScpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoIWlzUGFydGlhbEJsY29rKSB7XG5cdFx0XHRcdGNsYXNzTmFtZSA9IHVzZXJsaW5rVGVtcCBhcyBzdHJpbmc7XG5cdFx0XHR9XG5cdFx0XHRibG9ja1RpbWUgPSBpbkhvdXJzKHBhcnNlVFMoYmxvY2suZXhwaXJ5KSAtIHBhcnNlVFMoYmxvY2sudGltZXN0YW1wKSk7XG5cdFx0fVxuXG5cdFx0bGV0IHRpcDogc3RyaW5nID0gZ2V0TWVzc2FnZSgnQmxvY2tlZCcpXG5cdFx0XHQucmVwbGFjZSgnJDEnLCBibG9ja1RpbWUpXG5cdFx0XHQucmVwbGFjZSgnJDInLCBibG9jay5ieSlcblx0XHRcdC5yZXBsYWNlKCckMycsIGJsb2NrLnJlYXNvbilcblx0XHRcdC5yZXBsYWNlKCckNCcsIGluSG91cnMoRGF0ZS5ub3coKSAtIHBhcnNlVFMoYmxvY2sudGltZXN0YW1wKSkpO1xuXHRcdHRpcCA9IGlzUGFydGlhbEJsY29rID8gdGlwLnJlcGxhY2UoJyQ1JywgZ2V0TWVzc2FnZSgncGFydGlhbCcpKSA6IHRpcC5yZXBsYWNlKCckNScsICcnKTtcblxuXHRcdGNvbnN0ICRsaW5rczogSlF1ZXJ5W10gfCB1bmRlZmluZWQgPSB1c2VyTGlua3NbYmtpcCA/PyBibG9jay51c2VyXTtcblx0XHRpZiAoISRsaW5rcykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCAkbGluayBvZiAkbGlua3MpIHtcblx0XHRcdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHRcdFx0Ly8gKiBzZWUgLi9NYXJrYmxvY2tlZC5tb2R1bGUubGVzc1xuXHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0JGxpbmsuYWRkQ2xhc3MoY2xhc3NOYW1lKS5hdHRyKCd0aXRsZScsICRsaW5rLmF0dHIoJ3RpdGxlJykgKyB0aXApO1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHttYXJrTG9jYWxCbG9ja3N9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7cXVlcnlJUEJsb2NrcywgcXVlcnlVc2VyQmxvY2tzfSBmcm9tICcuL3F1ZXJ5JztcbmltcG9ydCB0eXBlIHtRdWVyeUxvY2FsQW5kR2xvYmFsQmxvY2tzUmVzcG9uc2V9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7bWFya0xvY2FsQmxvY2tzfSBmcm9tICcuL21hcmtMaW5rcyc7XG5cbmNvbnN0IG1hcmtCbG9ja2VkVXNlckxpbmtzID0gKHVzZXJMaW5rczogUmVjb3JkPHN0cmluZywgSlF1ZXJ5W10+KSA9PiB7XG5cdC8vIENvbnZlcnQgdXNlcnMgaW50byBhcnJheVxuXHRsZXQgdXNlcnM6IHN0cmluZ1tdID0gT2JqZWN0LmtleXModXNlckxpbmtzKTtcblx0aWYgKCF1c2Vycy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwcm9taXNlczogKCgpID0+IFByb21pc2U8dm9pZD4pW10gPSBbXTtcblxuXHRjb25zdCB1c2Vyc1RvUXVlcnk6IHN0cmluZ1tdID0gW107XG5cdGZvciAoY29uc3QgdXNlciBvZiB1c2Vycykge1xuXHRcdGxldCBwcm9jZXNzZWQgPSBmYWxzZTtcblxuXHRcdGNvbnN0IGNhY2hlZCA9IG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleUJsb2NrZWQgKyB1c2VyKSBhc1xuXHRcdFx0fCBRdWVyeUxvY2FsQW5kR2xvYmFsQmxvY2tzUmVzcG9uc2Vcblx0XHRcdHwgdW5kZWZpbmVkO1xuXG5cdFx0aWYgKGNhY2hlZCAmJiBjYWNoZWRbJ3F1ZXJ5J10/LmJsb2Nrcykge1xuXHRcdFx0bWFya0xvY2FsQmxvY2tzKHtyZXNwb25zZTogY2FjaGVkLCB1c2VyTGlua3N9KTtcblx0XHRcdHByb2Nlc3NlZCA9IHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKCFwcm9jZXNzZWQpIHtcblx0XHRcdHVzZXJzVG9RdWVyeS5wdXNoKHVzZXIpO1xuXHRcdH1cblx0fVxuXHR1c2VycyA9IHVzZXJzVG9RdWVyeTtcblxuXHQvLyBMb2NhbCBhbmQgZ2xvYmFsIHVzZXIgYmxvY2sgcXVlcmllc1xuXHR3aGlsZSAodXNlcnMubGVuZ3RoKSB7XG5cdFx0Y29uc3QgYmt1c2VycyA9IHVzZXJzLnNwbGljZSgwLCAyNSk7XG5cdFx0aWYgKCFia3VzZXJzLmxlbmd0aCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0cHJvbWlzZXNbcHJvbWlzZXMubGVuZ3RoXSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gKGF3YWl0IHF1ZXJ5VXNlckJsb2Nrcyhia3VzZXJzKSkgYXMgUXVlcnlMb2NhbEFuZEdsb2JhbEJsb2Nrc1Jlc3BvbnNlO1xuXHRcdFx0XHRjb25zdCBibG9ja1JlY29yZHM6IFJlY29yZDxzdHJpbmcsIFF1ZXJ5TG9jYWxBbmRHbG9iYWxCbG9ja3NSZXNwb25zZT4gPSB7fTtcblx0XHRcdFx0Zm9yIChjb25zdCB1c2VyIG9mIGJrdXNlcnMpIHtcblx0XHRcdFx0XHRibG9ja1JlY29yZHNbdXNlcl0gPSB7cXVlcnk6IHtibG9ja3M6IFtdfX07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10/LmJsb2Nrcykge1xuXHRcdFx0XHRcdG1hcmtMb2NhbEJsb2Nrcyh7cmVzcG9uc2UsIHVzZXJMaW5rc30pO1xuXG5cdFx0XHRcdFx0Zm9yIChjb25zdCBibG9jayBvZiByZXNwb25zZVsncXVlcnknXS5ibG9ja3MpIHtcblx0XHRcdFx0XHRcdGlmIChibG9jay51c2VyKSB7XG5cdFx0XHRcdFx0XHRcdGJsb2NrUmVjb3Jkc1tibG9jay51c2VyXT8ucXVlcnkuYmxvY2tzIS5wdXNoKGJsb2NrKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3IgKGNvbnN0IFt1c2VyLCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoYmxvY2tSZWNvcmRzKSkge1xuXHRcdFx0XHRcdG13LnN0b3JhZ2Uuc2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleUJsb2NrZWQgKyB1c2VyLCB2YWx1ZSwgNjAgKiA2MCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ1tNYXJrQmxvY2tlZF0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxuXG5cdHZvaWQgKGFzeW5jICgpID0+IHtcblx0XHRmb3IgKGNvbnN0IHByb21pc2Ugb2YgcHJvbWlzZXMpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGF3YWl0IHByb21pc2UoKTtcblx0XHRcdH0gY2F0Y2gge31cblx0XHR9XG5cdH0pKCk7XG59O1xuXG5jb25zdCBtYXJrQmxvY2tlZElQTGlua3MgPSAodXNlckxpbmtzOiBSZWNvcmQ8c3RyaW5nLCBKUXVlcnlbXT4pID0+IHtcblx0Ly8gQ29udmVydCB1c2VycyBpbnRvIGFycmF5XG5cdGNvbnN0IHVzZXJzOiBzdHJpbmdbXSA9IE9iamVjdC5rZXlzKHVzZXJMaW5rcyk7XG5cdGlmICghdXNlcnMubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcHJvbWlzZXM6ICgoKSA9PiBQcm9taXNlPHZvaWQ+KVtdID0gW107XG5cblx0Ly8gTG9jYWwgYW5kIGdsb2JhbCBJUCBibG9jayBxdWVyaWVzXG5cdHdoaWxlICh1c2Vycy5sZW5ndGgpIHtcblx0XHRjb25zdCBia3VzZXJzID0gdXNlcnMuc3BsaWNlKDAsIDI1KTtcblx0XHRpZiAoIWJrdXNlcnMubGVuZ3RoKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRmb3IgKGxldCBia2lwIG9mIGJrdXNlcnMpIHtcblx0XHRcdGlmICghbXcudXRpbC5pc0lQdjRBZGRyZXNzKGJraXApICYmICFtdy51dGlsLmlzSVB2NkFkZHJlc3MoYmtpcCkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChtdy51dGlsLmlzSVB2NkFkZHJlc3MoYmtpcCkpIHtcblx0XHRcdFx0YmtpcCA9IGJraXAudG9VcHBlckNhc2UoKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgY2FjaGVkID0gbXcuc3RvcmFnZS5nZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5QmxvY2tlZCArIGJraXApIGFzXG5cdFx0XHRcdHwgUXVlcnlMb2NhbEFuZEdsb2JhbEJsb2Nrc1Jlc3BvbnNlXG5cdFx0XHRcdHwgdW5kZWZpbmVkO1xuXHRcdFx0aWYgKGNhY2hlZCkge1xuXHRcdFx0XHRpZiAoY2FjaGVkWydxdWVyeSddPy5ibG9ja3MpIHtcblx0XHRcdFx0XHRtYXJrTG9jYWxCbG9ja3Moe3Jlc3BvbnNlOiBjYWNoZWQsIHVzZXJMaW5rc30pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHByb21pc2VzW3Byb21pc2VzLmxlbmd0aF0gPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSAoYXdhaXQgcXVlcnlJUEJsb2Nrcyhia2lwKSkgYXMgUXVlcnlMb2NhbEFuZEdsb2JhbEJsb2Nrc1Jlc3BvbnNlO1xuXG5cdFx0XHRcdFx0aWYgKHJlc3BvbnNlWydxdWVyeSddPy5ibG9ja3MpIHtcblx0XHRcdFx0XHRcdG1hcmtMb2NhbEJsb2Nrcyh7cmVzcG9uc2UsIHVzZXJMaW5rcywgYmtpcH0pO1xuXG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IGJsb2NrIG9mIHJlc3BvbnNlWydxdWVyeSddLmJsb2Nrcykge1xuXHRcdFx0XHRcdFx0XHRpZiAoYmxvY2sudXNlcikge1xuXHRcdFx0XHRcdFx0XHRcdG13LnN0b3JhZ2Uuc2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleUJsb2NrZWQgKyBibG9jay51c2VyLCByZXNwb25zZSwgNjAgKiA2MCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcignW01hcmtCbG9ja2VkXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9XG5cdH1cblxuXHR2b2lkIChhc3luYyAoKSA9PiB7XG5cdFx0Zm9yIChjb25zdCBwcm9taXNlIG9mIHByb21pc2VzKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRhd2FpdCBwcm9taXNlKCk7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0fVxuXHR9KSgpO1xufTtcblxuZXhwb3J0IHttYXJrQmxvY2tlZFVzZXJMaW5rcywgbWFya0Jsb2NrZWRJUExpbmtzfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5cbmNvbnN0IGdlbmVyYXRlVXNlck5hbWVzcGFjZVRpdGxlcyA9ICgpOiBzdHJpbmdbXSA9PiB7XG5cdGNvbnN0IHt3Z05hbWVzcGFjZUlkc30gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y29uc3QgdXNlck5hbWVzcGFjZVRpdGxlczogc3RyaW5nW10gPSBbXTtcblxuXHRmb3IgKGNvbnN0IFtuYW1lc3BhY2UsIGlkXSBvZiBPYmplY3QuZW50cmllcyh3Z05hbWVzcGFjZUlkcykpIHtcblx0XHRpZiAoIU9QVElPTlMudXNlck5hbWVzcGFjZU51bWJlcnMuaW5jbHVkZXMoaWQpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHR1c2VyTmFtZXNwYWNlVGl0bGVzW3VzZXJOYW1lc3BhY2VUaXRsZXMubGVuZ3RoXSA9IGAke213LnV0aWwuZXNjYXBlUmVnRXhwKG5hbWVzcGFjZS5yZXBsYWNlKC9fL2csICcgJykpfTpgOyAvLyBSZXBsYWNlIEFycmF5I3B1c2ggdG8gYXZvaWQgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXHR9XG5cblx0cmV0dXJuIHVzZXJOYW1lc3BhY2VUaXRsZXM7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlVXNlck5hbWVzcGFjZVRpdGxlc307XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZW5lcmF0ZVVzZXJOYW1lc3BhY2VUaXRsZXN9IGZyb20gJy4vZ2VuZXJhdGVVc2VyTmFtZXNwYWNlVGl0bGVzJztcblxuLy8gR2V0IGFsbCBhbGlhc2VzIGZvciB1c2VyOiAmIHVzZXJfdGFsazpcbmNvbnN0IHVzZXJOYW1lc3BhY2VUaXRsZXM6IHN0cmluZ1tdID0gZ2VuZXJhdGVVc2VyTmFtZXNwYWNlVGl0bGVzKCk7XG4vLyBSZWdFeHAgZm9yIGFsbCB0aXRsZXMgdGhhdCBhcmUgIFVzZXI6fCBVc2VyX3RhbGs6IHwgU3BlY2lhbDpDb250cmlidXRpb25zLyAoZm9yIHVzZXJzY3JpcHRzKVxuY29uc3QgdXNlclRpdGxlUmVnZXg6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoXG5cdGBeKCR7dXNlck5hbWVzcGFjZVRpdGxlcy5qb2luKCd8Jyl9fCR7T1BUSU9OUy5jb250cmlidXRpb25zUGFnZUFsaWFzfVxcXFwvKSsoW15cXFxcLyNdKykkYCxcblx0J2knXG4pO1xuXG4vLyBSZWdFeHAgZm9yIGxpbmtzXG4vLyBhcnRpY2xlUmVnZXggYWxzbyBtYXRjaGVzIGV4dGVybmFsIGxpbmtzIGluIG9yZGVyIHRvIHN1cHBvcnQgdGhlIG5vcGluZyB0ZW1wbGF0ZVxuY29uc3Qge3dnQXJ0aWNsZVBhdGgsIHdnU2NyaXB0fSA9IG13LmNvbmZpZy5nZXQoKTtcbmNvbnN0IGFydGljbGVSZWdleDogUmVnRXhwID0gbmV3IFJlZ0V4cChgJHt3Z0FydGljbGVQYXRoLnJlcGxhY2UoJyQxJywgJycpfShbXiNdKylgKTtcbmNvbnN0IHNjcmlwdFJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKGBeJHt3Z1NjcmlwdH1cXFxcP3RpdGxlPShbXiMmXSspYCk7XG5cbmNvbnN0IGdlbmVyYXRlVXNlckxpbmtzID0gKCRjb250ZW50OiBKUXVlcnkpOiBSZWNvcmQ8c3RyaW5nLCBKUXVlcnlbXT4gPT4ge1xuXHQvLyBGaW5kIGFsbCBcInVzZXJcIiBsaW5rcyBhbmQgc2F2ZSB0aGVtIGluIHVzZXJMaW5rcyA6IHsgJ3VzZXJzJzogWzxsaW5rMT4sIDxsaW5rMj4sIC4uLl0sICd1c2VyMic6IFs8bGluazM+LCA8bGluazM+LCAuLi5dLCAuLi4gfVxuXHRjb25zdCB1c2VyTGlua3M6IFJlY29yZDxzdHJpbmcsIEpRdWVyeVtdPiA9IHt9O1xuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkY29udGVudC5maW5kKCdhJykpIHtcblx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PiA9ICQoZWxlbWVudCk7XG5cdFx0aWYgKFxuXHRcdFx0JGVsZW1lbnQuaGFzQ2xhc3MoJ213LWNoYW5nZXNsaXN0LWRhdGUnKSB8fFxuXHRcdFx0JGVsZW1lbnQuaGFzQ2xhc3MoJ2V4dC1kaXNjdXNzaW9udG9vbHMtaW5pdC10aW1lc3RhbXBsaW5rJykgfHxcblx0XHRcdCRlbGVtZW50LnBhcmVudCgnc3BhbicpLmhhc0NsYXNzKCdtdy1oaXN0b3J5LXVuZG8nKSB8fFxuXHRcdFx0JGVsZW1lbnQucGFyZW50KCdzcGFuJykuaGFzQ2xhc3MoJ213LXJvbGxiYWNrLWxpbmsnKVxuXHRcdCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkID0gJGVsZW1lbnQuYXR0cignaHJlZicpO1xuXHRcdGlmICghaHJlZikge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGlmIChtdy51dGlsLmlzSVB2NkFkZHJlc3MoaHJlZi5yZXBsYWNlKC9eKD86aHR0cHM/OlxcL1xcLykvaSwgJycpKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Ly8gT3B0aW1pemF0aW9uOiBUcnVzdCBtdy11c2VybGluayBjbGFzcyB0byBiZSBpbnRlcm5hbCwgc2tpcCBleHBlbnNpdmUgY2hlY2tzXG5cdFx0aWYgKCFlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbXctdXNlcmxpbmsnKSkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Ly8gTWF5YmUgYWJzb2x1dGUgVVJMXG5cdFx0XHRcdC8vIFVzZSBuYXRpdmUgVVJMIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2UgdGhhbiBNd1VyaSwgYW5kIGNoZWNrIG9ubHkgaWYgbG9va3MgbGlrZSBhYnNvbHV0ZVxuXHRcdFx0XHRpZiAoaHJlZi5pbmNsdWRlcygnOi8vJykgfHwgaHJlZi5zdGFydHNXaXRoKCcvLycpKSB7XG5cdFx0XHRcdFx0Y29uc3QgdXJsID0gbmV3IFVSTChocmVmLCBsb2NhdGlvbi5ocmVmKTtcblx0XHRcdFx0XHRpZiAodXJsLmhvc3QgIT09IGxvY2F0aW9uLmhvc3QpIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGxldCBwYWdlVGl0bGU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0XHRpZiAoYXJ0aWNsZVJlZ2V4LnRlc3QoaHJlZikpIHtcblx0XHRcdGNvbnN0IG1hdGNoOiBSZWdFeHBFeGVjQXJyYXkgPSBhcnRpY2xlUmVnZXguZXhlYyhocmVmKSBhcyBSZWdFeHBFeGVjQXJyYXk7XG5cdFx0XHRwYWdlVGl0bGUgPSBtYXRjaFsxXSBhcyBzdHJpbmc7XG5cdFx0fSBlbHNlIGlmIChzY3JpcHRSZWdleC50ZXN0KGhyZWYpKSB7XG5cdFx0XHRjb25zdCBtYXRjaDogUmVnRXhwRXhlY0FycmF5ID0gc2NyaXB0UmVnZXguZXhlYyhocmVmKSBhcyBSZWdFeHBFeGVjQXJyYXk7XG5cdFx0XHRwYWdlVGl0bGUgPSBtYXRjaFsxXSBhcyBzdHJpbmc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHBhZ2VUaXRsZSA9IGRlY29kZVVSSUNvbXBvbmVudChwYWdlVGl0bGUpLnJlcGxhY2UoL18vZywgJyAnKTtcblxuXHRcdGNvbnN0IHVzZXJFeGVjQXJyYXk6IFJlZ0V4cEV4ZWNBcnJheSB8IG51bGwgPSB1c2VyVGl0bGVSZWdleC5leGVjKHBhZ2VUaXRsZSk7XG5cdFx0aWYgKCF1c2VyRXhlY0FycmF5IHx8IHR5cGVvZiB1c2VyRXhlY0FycmF5WzJdICE9PSAnc3RyaW5nJykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0bGV0IHVzZXI6IHN0cmluZyA9IHVzZXJFeGVjQXJyYXlbMl0uc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKSArIHVzZXJFeGVjQXJyYXlbMl0uc2xpY2UoMSk7XG5cdFx0aWYgKG13LnV0aWwuaXNJUHY2QWRkcmVzcyh1c2VyKSkge1xuXHRcdFx0dXNlciA9IHVzZXIudG9VcHBlckNhc2UoKTtcblx0XHR9XG5cblx0XHR1c2VyTGlua3NbdXNlcl0gPz89IFtdO1xuXG5cdFx0KHVzZXJMaW5rc1t1c2VyXSBhcyAodHlwZW9mIHVzZXJMaW5rcylba2V5b2YgdHlwZW9mIHVzZXJMaW5rc10pW1xuXHRcdFx0KHVzZXJMaW5rc1t1c2VyXSBhcyAodHlwZW9mIHVzZXJMaW5rcylba2V5b2YgdHlwZW9mIHVzZXJMaW5rc10pLmxlbmd0aFxuXHRcdF0gPSAkZWxlbWVudDsgLy8gUmVwbGFjZSBBcnJheSNwdXNoIHRvIGF2b2lkIGNvcmUtanMgcG9seWZpbGxpbmdcblx0fVxuXG5cdHJldHVybiB1c2VyTGlua3M7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlVXNlckxpbmtzfTtcbiIsICJpbXBvcnQge21hcmtCbG9ja2VkSVBMaW5rcywgbWFya0Jsb2NrZWRVc2VyTGlua3N9IGZyb20gJy4vdXRpbC9tYXJrVXNlckxpbmtzJztcbmltcG9ydCB7Z2VuZXJhdGVVc2VyTGlua3N9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZVVzZXJMaW5rcyc7XG5cbmNvbnN0IG1hcmtCbG9ja2VkVXNlciA9ICgkY29udGVudDogSlF1ZXJ5KTogdm9pZCA9PiB7XG5cdC8vIEZpbmQgYWxsIFwidXNlclwiIGxpbmtzIGFuZCBzYXZlIHRoZW0gaW4gdXNlckxpbmtzIDogeyAndXNlcnMnOiBbPGxpbmsxPiwgPGxpbmsyPiwgLi4uXSwgJ3VzZXIyJzogWzxsaW5rMz4sIDxsaW5rMz4sIC4uLl0sIC4uLiB9XG5cdGNvbnN0IHVzZXJMaW5rczogUmVjb3JkPHN0cmluZywgSlF1ZXJ5W10+ID0gZ2VuZXJhdGVVc2VyTGlua3MoJGNvbnRlbnQpO1xuXG5cdG1hcmtCbG9ja2VkVXNlckxpbmtzKHVzZXJMaW5rcyk7XG5cdG1hcmtCbG9ja2VkSVBMaW5rcyh1c2VyTGlua3MpO1xufTtcblxuZXhwb3J0IHttYXJrQmxvY2tlZFVzZXJ9O1xuIiwgImltcG9ydCB7bWFya0Jsb2NrZWRVc2VyfSBmcm9tICcuL21hcmtCbG9ja2VkVXNlcic7XG5cbmNvbnN0IHt3Z0FjdGlvbiwgd2dOYW1lc3BhY2VOdW1iZXJ9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5jb25zdCBhZGRIb29rID0gKCk6IHZvaWQgPT4ge1xuXHRsZXQgaXNJbml0OiBib29sZWFuID0gZmFsc2U7XG5cblx0bXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmFkZChmdW5jdGlvbiBtYXJrQmxvY2tlZCgkY29udGVudCk6IHZvaWQge1xuXHRcdGlmIChpc0luaXQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aXNJbml0ID0gdHJ1ZTtcblxuXHRcdC8vIE9uIHRoZSBmaXJzdCBjYWxsIGFmdGVyIGluaXRpYWwgcGFnZSBsb2FkLCBjb250YWluZXIgaXMgbXcudXRpbC4kY29udGVudFxuXHRcdC8vIFVzZWQgdG8gbGltaXQgbWFpbnNwYWNlIGFjdGl2aXR5IHRvIGp1c3QgdGhlIGRpZmYgZGVmaW5pdGlvbnNcblx0XHRpZiAod2dBY3Rpb24gPT09ICd2aWV3JyAmJiB3Z05hbWVzcGFjZU51bWJlciA9PT0gMCkge1xuXHRcdFx0JGNvbnRlbnQgPSAkY29udGVudC5maW5kKCcuZGlmZi10aXRsZScpO1xuXHRcdH1cblx0XHQvLyBPbiBwYWdlIGxvYWQsIGFsc28gdXBkYXRlIHRoZSBuYW1lc3BhY2UgdGFiXG5cdFx0JGNvbnRlbnQgPSAkY29udGVudC5hZGQoJyNjYS1uc3RhYi11c2VyJyk7XG5cblx0XHRtYXJrQmxvY2tlZFVzZXIoJGNvbnRlbnQpO1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7YWRkSG9va307XG4iLCAiY29uc3QgY2xlYXJPbGRLZXlzID0gKCk6IHZvaWQgPT4ge1xuXHRpZiAobXcuc3RvcmFnZS5nZXRPYmplY3QoJ2V4dC5nYWRnZXQuTWFya0Jsb2NrZWRfb2xkS2V5c0NsZWFyZWQnKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGZvciAoY29uc3Qga2V5IGluIGxvY2FsU3RvcmFnZSkge1xuXHRcdGlmIChPYmplY3QuaGFzT3duKGxvY2FsU3RvcmFnZSwga2V5KSkge1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vbm8tbG9uZWx5LWlmXG5cdFx0XHRpZiAoXG5cdFx0XHRcdGtleS5zdGFydHNXaXRoKCdleHQuZ2FkZ2V0Lk1hcmtCbG9ja2VkX2lzTG9ja2VkLScpIHx8XG5cdFx0XHRcdGtleS5zdGFydHNXaXRoKCdfRVhQSVJZX2V4dC5nYWRnZXQuTWFya0Jsb2NrZWRfaXNMb2NrZWQtJylcblx0XHRcdCkge1xuXHRcdFx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBpZiAoXG5cdFx0XHQvLyBcdGtleS5zdGFydHNXaXRoKCdleHQuZ2FkZ2V0Lk1hcmtCbG9ja2VkX2lzQmxvY2tlZC0nKSB8fFxuXHRcdFx0Ly8gXHRrZXkuc3RhcnRzV2l0aCgnX0VYUElSWV9leHQuZ2FkZ2V0Lk1hcmtCbG9ja2VkX2lzQmxvY2tlZC0nKVxuXHRcdFx0Ly8gKSB7XG5cdFx0XHQvLyBcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG5cdFx0XHQvLyB9XG5cdFx0fVxuXHR9XG5cblx0bXcuc3RvcmFnZS5zZXRPYmplY3QoJ2V4dC5nYWRnZXQuTWFya0Jsb2NrZWRfb2xkS2V5c0NsZWFyZWQnLCB0cnVlKTtcbn07XG5cbmV4cG9ydCB7Y2xlYXJPbGRLZXlzfTtcbiIsICJpbXBvcnQge2FkZEhvb2t9IGZyb20gJy4vbW9kdWxlcy9hZGRIb29rJztcbmltcG9ydCB7Y2xlYXJPbGRLZXlzfSBmcm9tICcuL21vZHVsZXMvdXRpbC9jbGVhck9sZEtleXMnO1xuXG5pZiAoIVsnZWRpdCcsICdzdWJtaXQnXS5pbmNsdWRlcyhtdy5jb25maWcuZ2V0KCd3Z0FjdGlvbicpKSkge1xuXHRhZGRIb29rKCk7XG59XG5cbi8vIGFkZCBhIG9uZS10aW1lIGZ1bmN0aW9uIHRvIGNsZWFyIG9sZCBsb2NhbFN0b3JhZ2Uga2V5c1xuaWYgKCFtdy5zdG9yYWdlLmdldE9iamVjdCgnZXh0LmdhZGdldC5NYXJrQmxvY2tlZF9vbGRLZXlzQ2xlYXJlZCcpKSB7XG5cdHZvaWQgY2xlYXJPbGRLZXlzKCk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSx5QkFBMEI7QUFDMUIsSUFBQUMsdUJBQXdCLENBQUMsR0FBRyxDQUFDO0FBQzdCLElBQUFDLG9CQUFxQjtBQUNyQixJQUFBQyxVQUFXOztBQ0haLElBQUFDLG9CQUF3QkMsUUFBQSxpQkFBQTtBQUV4QixJQUFNQyxPQUFBLEdBQWNGLGtCQUFBRyxXQUFBLGVBQUFDLE9BQWlDTCxPQUFPLENBQUU7O0FDRDlELElBQU1NLGdCQUFBLDRCQUFBO0FBQUEsTUFBQUMsT0FBQUMsa0JBQWdCLFdBQU9DLE1BQWlCO0FBQzdDLFVBQU1DLFNBQStCO01BQ3BDQyxRQUFRO01BQ1JDLFFBQVE7TUFDUkMsZUFBZTtNQUNmQyxNQUFNO01BQ05MO01BQ0FNLFNBQVM7TUFDVEMsUUFBUSxDQUFDLE1BQU0sVUFBVSxVQUFVLGdCQUFnQixhQUFhLE1BQU07TUFDdEVDLFNBQVM7TUFDVEMsUUFBUTtJQUNUO0FBRUEsV0FBQSxNQUFhZixJQUFJZ0IsSUFBSVQsTUFBTTtFQUM1QixDQUFBO0FBQUEsU0FBQSxTQWRNSixlQUFBYyxJQUFBO0FBQUEsV0FBQWIsS0FBQWMsTUFBQSxNQUFB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Q0FBQyxHQUFHO0FBQzVEdUssVUFBUTtBQUNUO0FBR0EsSUFBSSxDQUFDakYsR0FBR0MsUUFBUUMsVUFBVSx1Q0FBdUMsR0FBRztBQUNuRSxPQUFLb0YsYUFBYTtBQUNuQjsiLAogICJuYW1lcyI6IFsiY29udHJpYnV0aW9uc1BhZ2VBbGlhcyIsICJ1c2VyTmFtZXNwYWNlTnVtYmVycyIsICJzdG9yYWdlS2V5QmxvY2tlZCIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAicXVlcnlJUEJsb2NrcyIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgImJraXAiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJsaXN0IiwgImJrbGltaXQiLCAiYmtwcm9wIiwgInNtYXhhZ2UiLCAibWF4YWdlIiwgImdldCIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAicXVlcnlVc2VyQmxvY2tzIiwgIl9yZWYyIiwgImJrdXNlcnMiLCAiX3gyIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJnZXRJMThuTWVzc2FnZXMiLCAiaW5maW5pdHkiLCAibG9jYWxpemUiLCAiZW4iLCAiQmxvY2tlZCIsICJwYXJ0aWFsIiwgInpoIiwgImQiLCAicyIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiYWRkWmVybyIsICJ2IiwgImluSG91cnMiLCAibXMiLCAibW0iLCAiTWF0aCIsICJmbG9vciIsICJoaCIsICJkZCIsICJwYXJzZVRTIiwgInN0cmluZyIsICJtIiwgInJlcGxhY2UiLCAibWF0Y2giLCAiRGF0ZSIsICJVVEMiLCAiZ2V0VGltZSIsICJ1c2VybGlua0luZGVmIiwgInVzZXJsaW5rUGFydGlhbCIsICJ1c2VybGlua1RlbXAiLCAibWFya0xvY2FsQmxvY2tzIiwgInJlc3BvbnNlIiwgInVzZXJMaW5rcyIsICJfcmVzcG9uc2UkcXVlcnkiLCAiYmxvY2tzIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJuIiwgImRvbmUiLCAiYmxvY2siLCAidmFsdWUiLCAiaXNQYXJ0aWFsQmxjb2siLCAicmVzdHJpY3Rpb25zIiwgImNsYXNzTmFtZSIsICJibG9ja1RpbWUiLCAiZXhwaXJ5IiwgInN0YXJ0c1dpdGgiLCAidGltZXN0YW1wIiwgInRpcCIsICJieSIsICJyZWFzb24iLCAibm93IiwgIiRsaW5rcyIsICJ1c2VyIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgIiRsaW5rIiwgImFkZENsYXNzIiwgImF0dHIiLCAiZXJyIiwgImUiLCAiZiIsICJtYXJrQmxvY2tlZFVzZXJMaW5rcyIsICJ1c2VycyIsICJPYmplY3QiLCAia2V5cyIsICJsZW5ndGgiLCAicHJvbWlzZXMiLCAidXNlcnNUb1F1ZXJ5IiwgIl9pIiwgIl91c2VycyIsICJfY2FjaGVkJHF1ZXJ5IiwgInByb2Nlc3NlZCIsICJjYWNoZWQiLCAibXciLCAic3RvcmFnZSIsICJnZXRPYmplY3QiLCAicHVzaCIsICJzcGxpY2UiLCAiX3Jlc3BvbnNlJHF1ZXJ5MiIsICJibG9ja1JlY29yZHMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAicXVlcnkiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiX2Jsb2NrUmVjb3JkcyRibG9jayR1IiwgIl9pMiIsICJfT2JqZWN0JGVudHJpZXMiLCAiZW50cmllcyIsICJzZXRPYmplY3QiLCAiZXJyb3IiLCAiY29uc29sZSIsICJfaTMiLCAiX3Byb21pc2VzIiwgInByb21pc2UiLCAibWFya0Jsb2NrZWRJUExpbmtzIiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgInV0aWwiLCAiaXNJUHY0QWRkcmVzcyIsICJpc0lQdjZBZGRyZXNzIiwgInRvVXBwZXJDYXNlIiwgIl9jYWNoZWQkcXVlcnkyIiwgIl9yZXNwb25zZSRxdWVyeTMiLCAiX2l0ZXJhdG9yNiIsICJfc3RlcDYiLCAiX2k0IiwgIl9wcm9taXNlczIiLCAiZ2VuZXJhdGVVc2VyTmFtZXNwYWNlVGl0bGVzIiwgIndnTmFtZXNwYWNlSWRzIiwgImNvbmZpZyIsICJ1c2VyTmFtZXNwYWNlVGl0bGVzMiIsICJfaTUiLCAiX09iamVjdCRlbnRyaWVzMiIsICJuYW1lc3BhY2UiLCAiaWQiLCAiaW5jbHVkZXMiLCAiZXNjYXBlUmVnRXhwIiwgInVzZXJOYW1lc3BhY2VUaXRsZXMiLCAidXNlclRpdGxlUmVnZXgiLCAiUmVnRXhwIiwgImpvaW4iLCAid2dBcnRpY2xlUGF0aCIsICJ3Z1NjcmlwdCIsICJhcnRpY2xlUmVnZXgiLCAic2NyaXB0UmVnZXgiLCAiZ2VuZXJhdGVVc2VyTGlua3MiLCAiJGNvbnRlbnQiLCAiX2l0ZXJhdG9yNyIsICJmaW5kIiwgIl9zdGVwNyIsICJfdXNlciIsICJfdXNlckxpbmtzJF91c2VyIiwgImVsZW1lbnQiLCAiJGVsZW1lbnQiLCAiJCIsICJoYXNDbGFzcyIsICJwYXJlbnQiLCAiaHJlZiIsICJjbGFzc0xpc3QiLCAiY29udGFpbnMiLCAidXJsIiwgIlVSTCIsICJsb2NhdGlvbiIsICJob3N0IiwgInBhZ2VUaXRsZSIsICJ0ZXN0IiwgImV4ZWMiLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgInVzZXJFeGVjQXJyYXkiLCAic2xpY2UiLCAibWFya0Jsb2NrZWRVc2VyIiwgIndnQWN0aW9uIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgImFkZEhvb2siLCAiaXNJbml0IiwgImhvb2siLCAiYWRkIiwgIm1hcmtCbG9ja2VkIiwgImNsZWFyT2xkS2V5cyIsICJsb2NhbFN0b3JhZ2UiLCAiaGFzT3duIiwgInJlbW92ZUl0ZW0iXQp9Cg==
