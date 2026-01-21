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
  for (let i = 0; i < users.length; i++) {
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
          var _response$query3;
          const response = mw.storage.getObject(storageKeyBlocked + bkip);
          if ((_response$query3 = response["query"]) !== null && _response$query3 !== void 0 && _response$query3.blocks) {
            markLocalBlocks({
              response,
              userLinks
            });
          }
          continue;
        }
        promises[promises.length] = /* @__PURE__ */ _asyncToGenerator(function* () {
          try {
            var _response$query4;
            const response = yield queryIPBlocks(bkip);
            if ((_response$query4 = response["query"]) !== null && _response$query4 !== void 0 && _response$query4.blocks) {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01hcmtCbG9ja2VkL29wdGlvbnMuanNvbiIsICJzcmMvTWFya0Jsb2NrZWQvbW9kdWxlcy91dGlsL2FwaS50cyIsICJzcmMvTWFya0Jsb2NrZWQvbW9kdWxlcy91dGlsL3F1ZXJ5LnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvdXRpbC9wYXJzZVRpbWUudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvTWFya0Jsb2NrZWQubW9kdWxlLmxlc3MiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvdXRpbC9tYXJrTGlua3MudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvdXRpbC9tYXJrVXNlckxpbmtzLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVVc2VyTmFtZXNwYWNlVGl0bGVzLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVVc2VyTGlua3MudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvbWFya0Jsb2NrZWRVc2VyLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL2FkZEhvb2sudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvdXRpbC9jbGVhck9sZEtleXMudHMiLCAic3JjL01hcmtCbG9ja2VkL01hcmtCbG9ja2VkLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiY29udHJpYnV0aW9uc1BhZ2VBbGlhc1wiOiBcIlNwZWNpYWw6Q29udHJpYnV0aW9uc1wiLFxuXHRcInVzZXJOYW1lc3BhY2VOdW1iZXJzXCI6IFsyLCAzXSxcblx0XCJzdG9yYWdlS2V5QmxvY2tlZFwiOiBcImV4dC5nYWRnZXQuTWFya0Jsb2NrZWRfYmxvY2tlZC1cIixcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYE1hcmtCbG9ja2VkLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxuY29uc3QgcXVlcnlJUEJsb2NrcyA9IGFzeW5jIChia2lwOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUJsb2Nrc1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdGxpc3Q6ICdibG9ja3MnLFxuXHRcdGJraXAsXG5cdFx0YmtsaW1pdDogMTAwLFxuXHRcdGJrcHJvcDogWydieScsICdleHBpcnknLCAncmVhc29uJywgJ3Jlc3RyaWN0aW9ucycsICd0aW1lc3RhbXAnLCAndXNlciddLFxuXHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRtYXhhZ2U6IDYwMCxcblx0fTtcblxuXHRyZXR1cm4gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xufTtcblxuY29uc3QgcXVlcnlVc2VyQmxvY2tzID0gYXN5bmMgKGJrdXNlcnM6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlCbG9ja3NQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRsaXN0OiAnYmxvY2tzJyxcblx0XHRia3VzZXJzLFxuXHRcdGJrbGltaXQ6IDEwMCxcblx0XHRia3Byb3A6IFsnYnknLCAnZXhwaXJ5JywgJ3JlYXNvbicsICdyZXN0cmljdGlvbnMnLCAndGltZXN0YW1wJywgJ3VzZXInXSxcblx0XHRzbWF4YWdlOiA2MDAsXG5cdFx0bWF4YWdlOiA2MDAsXG5cdH07XG5cblx0cmV0dXJuIGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcbn07XG5cbmV4cG9ydCB7cXVlcnlJUEJsb2NrcywgcXVlcnlVc2VyQmxvY2tzfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0aW5maW5pdHk6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnaW5maW5pdHknLFxuXHRcdFx0J3poLWhhbnMnOiAn5peg6ZmQ5pyfJyxcblx0XHRcdCd6aC1oYW50JzogJ+eEoemZkOacnycsXG5cdFx0fSksXG5cdFx0QmxvY2tlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICc7ICQ1YmxvY2tlZCAoJDEpIGJ5ICQyOiAkMyAoJDQgYWdvKScsXG5cdFx0XHQnemgtaGFucyc6ICfvvJvnlLEkMiQ15bCB56aBJDHvvJokM++8iCQ05YmN77yJJyxcblx0XHRcdCd6aC1oYW50JzogJ++8m+eUsSQyJDXlsIHpjpYkMe+8miQz77yIJDTliY3vvIknLFxuXHRcdH0pLFxuXHRcdHBhcnRpYWw6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAncGFydGlhbCAnLFxuXHRcdFx0emg6ICfpg6jliIYnLFxuXHRcdH0pLFxuXHRcdGQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnZGF5Jyxcblx0XHRcdHpoOiAn5aSpJyxcblx0XHR9KSxcblx0XHRzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ3NlY29uZCcsXG5cdFx0XHR6aDogJ+enkicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNvbnN0IGFkZFplcm8gPSAodjogbnVtYmVyKTogc3RyaW5nID0+IHtcblx0cmV0dXJuIHYgPD0gOSA/IGAwJHt2fWAgOiBgJHt2fWA7XG59O1xuXG5jb25zdCBpbkhvdXJzID0gKG1zOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuXHRsZXQgbW06IG51bWJlciA9IE1hdGguZmxvb3IobXMgLyA2ZTQpO1xuXHRpZiAoIW1tKSB7XG5cdFx0cmV0dXJuIGAke01hdGguZmxvb3IobXMgLyAxZTMpfSR7Z2V0TWVzc2FnZSgncycpfWA7XG5cdH1cblxuXHRsZXQgaGg6IG51bWJlciA9IE1hdGguZmxvb3IobW0gLyA2MCk7XG5cdG1tICU9IDYwO1xuXG5cdGNvbnN0IGRkOiBudW1iZXIgPSBNYXRoLmZsb29yKGhoIC8gMjQpO1xuXHRoaCAlPSAyNDtcblxuXHRpZiAoZGQpIHtcblx0XHRyZXR1cm4gYCR7ZGQgKyAoZGQgPCAxMCA/IGAuJHthZGRaZXJvKGhoKX1gIDogJycpfSR7Z2V0TWVzc2FnZSgnZCcpfWA7XG5cdH1cblxuXHRyZXR1cm4gYCR7aGh9OiR7YWRkWmVybyhtbSl9YDtcbn07XG5cbi8vIDIwMDgxMjI2MjIwNjA1IG9yIDIwMDgtMDEtMjZUMDY6MzQ6MTlaIC0+IG51bWJlclxuY29uc3QgcGFyc2VUUyA9IChzdHJpbmc6IHN0cmluZyk6IG51bWJlciA9PiB7XG5cdGNvbnN0IG06IFJlZ0V4cE1hdGNoQXJyYXkgPSBzdHJpbmdcblx0XHQucmVwbGFjZSgvXFxEL2csICcnKVxuXHRcdC5tYXRjaCgvKFxcZFxcZFxcZFxcZCkoXFxkXFxkKShcXGRcXGQpKFxcZFxcZCkoXFxkXFxkKShcXGRcXGQpLykgYXMgUmVnRXhwTWF0Y2hBcnJheTtcblxuXHRyZXR1cm4gbmV3IERhdGUoXG5cdFx0RGF0ZS5VVEMoXG5cdFx0XHQrKG1bMV0gYXMgc3RyaW5nKSxcblx0XHRcdCsobVsyXSBhcyBzdHJpbmcpIC0gMSxcblx0XHRcdCsobVszXSBhcyBzdHJpbmcpLFxuXHRcdFx0KyhtWzRdIGFzIHN0cmluZyksXG5cdFx0XHQrKG1bNV0gYXMgc3RyaW5nKSxcblx0XHRcdCsobVs2XSBhcyBzdHJpbmcpXG5cdFx0KVxuXHQpLmdldFRpbWUoKTtcbn07XG5cbmV4cG9ydCB7aW5Ib3VycywgcGFyc2VUU307XG4iLCAiaW1wb3J0IFwiZXNidWlsZC1jc3MtbW9kdWxlcy1wbHVnaW4tbnMtY3NzOnNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL01hcmtCbG9ja2VkLm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3QgdXNlcmxpbmtJbmRlZiA9IFwiTWFya0Jsb2NrZWQtbW9kdWxlX191c2VybGlua0luZGVmX3h0QWZPR19fNDEwMFwiO1xuZXhwb3J0IGNvbnN0IHVzZXJsaW5rUGFydGlhbCA9IFwiTWFya0Jsb2NrZWQtbW9kdWxlX191c2VybGlua1BhcnRpYWxfeHRBZk9HX180MTAwXCI7XG5leHBvcnQgY29uc3QgdXNlcmxpbmtUZW1wID0gXCJNYXJrQmxvY2tlZC1tb2R1bGVfX3VzZXJsaW5rVGVtcF94dEFmT0dfXzQxMDBcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcInVzZXJsaW5rSW5kZWZcIjogdXNlcmxpbmtJbmRlZixcbiAgXCJ1c2VybGlua1BhcnRpYWxcIjogdXNlcmxpbmtQYXJ0aWFsLFxuICBcInVzZXJsaW5rVGVtcFwiOiB1c2VybGlua1RlbXBcbn07XG4gICAgICAiLCAiaW1wb3J0IHtpbkhvdXJzLCBwYXJzZVRTfSBmcm9tICcuL3BhcnNlVGltZSc7XG5pbXBvcnQge3VzZXJsaW5rSW5kZWYsIHVzZXJsaW5rUGFydGlhbCwgdXNlcmxpbmtUZW1wfSBmcm9tICcuLi9NYXJrQmxvY2tlZC5tb2R1bGUubGVzcyc7XG5pbXBvcnQgdHlwZSB7UXVlcnlMb2NhbEFuZEdsb2JhbEJsb2Nrc1Jlc3BvbnNlfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBDYWxsYmFjazogcmVjZWl2ZSBkYXRhIGFuZCBtYXJrIGxpbmtzXG4gKi9cblxuY29uc3QgbWFya0xvY2FsQmxvY2tzID0gKHtcblx0cmVzcG9uc2UsXG5cdHVzZXJMaW5rcyxcblx0YmtpcCxcbn06IHtcblx0cmVzcG9uc2U6IFF1ZXJ5TG9jYWxBbmRHbG9iYWxCbG9ja3NSZXNwb25zZTtcblx0dXNlckxpbmtzOiBSZWNvcmQ8c3RyaW5nLCBKUXVlcnlbXT47XG5cdGJraXA/OiBzdHJpbmc7XG59KTogdm9pZCA9PiB7XG5cdC8vIExvY2FsIGJsb2Nrc1xuXHRpZiAoIXJlc3BvbnNlWydxdWVyeSddPy5ibG9ja3MpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRmb3IgKGNvbnN0IGJsb2NrIG9mIHJlc3BvbnNlWydxdWVyeSddLmJsb2Nrcykge1xuXHRcdGNvbnN0IGlzUGFydGlhbEJsY29rOiBib29sZWFuID0gdHlwZW9mIGJsb2NrLnJlc3RyaWN0aW9ucyA9PT0gJ3N0cmluZycgJiYgYmxvY2sucmVzdHJpY3Rpb25zICE9PSAnJzsgLy8gUGFydGlhbCBibG9ja1xuXG5cdFx0bGV0IGNsYXNzTmFtZTogc3RyaW5nID0gdXNlcmxpbmtQYXJ0aWFsIGFzIHN0cmluZztcblx0XHRsZXQgYmxvY2tUaW1lOiBzdHJpbmcgPSAnJztcblx0XHRpZiAoYmxvY2suZXhwaXJ5LnN0YXJ0c1dpdGgoJ2luJykpIHtcblx0XHRcdGlmICghaXNQYXJ0aWFsQmxjb2spIHtcblx0XHRcdFx0Y2xhc3NOYW1lID0gdXNlcmxpbmtJbmRlZiBhcyBzdHJpbmc7XG5cdFx0XHR9XG5cdFx0XHRibG9ja1RpbWUgPSBnZXRNZXNzYWdlKCdpbmZpbml0eScpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoIWlzUGFydGlhbEJsY29rKSB7XG5cdFx0XHRcdGNsYXNzTmFtZSA9IHVzZXJsaW5rVGVtcCBhcyBzdHJpbmc7XG5cdFx0XHR9XG5cdFx0XHRibG9ja1RpbWUgPSBpbkhvdXJzKHBhcnNlVFMoYmxvY2suZXhwaXJ5KSAtIHBhcnNlVFMoYmxvY2sudGltZXN0YW1wKSk7XG5cdFx0fVxuXG5cdFx0bGV0IHRpcDogc3RyaW5nID0gZ2V0TWVzc2FnZSgnQmxvY2tlZCcpXG5cdFx0XHQucmVwbGFjZSgnJDEnLCBibG9ja1RpbWUpXG5cdFx0XHQucmVwbGFjZSgnJDInLCBibG9jay5ieSlcblx0XHRcdC5yZXBsYWNlKCckMycsIGJsb2NrLnJlYXNvbilcblx0XHRcdC5yZXBsYWNlKCckNCcsIGluSG91cnMoRGF0ZS5ub3coKSAtIHBhcnNlVFMoYmxvY2sudGltZXN0YW1wKSkpO1xuXHRcdHRpcCA9IGlzUGFydGlhbEJsY29rID8gdGlwLnJlcGxhY2UoJyQ1JywgZ2V0TWVzc2FnZSgncGFydGlhbCcpKSA6IHRpcC5yZXBsYWNlKCckNScsICcnKTtcblxuXHRcdGNvbnN0ICRsaW5rczogSlF1ZXJ5W10gfCB1bmRlZmluZWQgPSB1c2VyTGlua3NbYmtpcCA/PyBibG9jay51c2VyXTtcblx0XHRpZiAoISRsaW5rcykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCAkbGluayBvZiAkbGlua3MpIHtcblx0XHRcdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHRcdFx0Ly8gKiBzZWUgLi9NYXJrYmxvY2tlZC5tb2R1bGUubGVzc1xuXHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0JGxpbmsuYWRkQ2xhc3MoY2xhc3NOYW1lKS5hdHRyKCd0aXRsZScsICRsaW5rLmF0dHIoJ3RpdGxlJykgKyB0aXApO1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHttYXJrTG9jYWxCbG9ja3N9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7cXVlcnlJUEJsb2NrcywgcXVlcnlVc2VyQmxvY2tzfSBmcm9tICcuL3F1ZXJ5JztcbmltcG9ydCB0eXBlIHtRdWVyeUxvY2FsQW5kR2xvYmFsQmxvY2tzUmVzcG9uc2V9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7bWFya0xvY2FsQmxvY2tzfSBmcm9tICcuL21hcmtMaW5rcyc7XG5cbmNvbnN0IG1hcmtCbG9ja2VkVXNlckxpbmtzID0gKHVzZXJMaW5rczogUmVjb3JkPHN0cmluZywgSlF1ZXJ5W10+KSA9PiB7XG5cdC8vIENvbnZlcnQgdXNlcnMgaW50byBhcnJheVxuXHRsZXQgdXNlcnM6IHN0cmluZ1tdID0gT2JqZWN0LmtleXModXNlckxpbmtzKTtcblx0aWYgKCF1c2Vycy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwcm9taXNlczogKCgpID0+IFByb21pc2U8dm9pZD4pW10gPSBbXTtcblxuXHRjb25zdCB1c2Vyc1RvUXVlcnk6IHN0cmluZ1tdID0gW107XG5cdGZvciAoY29uc3QgdXNlciBvZiB1c2Vycykge1xuXHRcdGxldCBwcm9jZXNzZWQgPSBmYWxzZTtcblxuXHRcdGNvbnN0IGNhY2hlZCA9IG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleUJsb2NrZWQgKyB1c2VyKSBhc1xuXHRcdFx0fCBRdWVyeUxvY2FsQW5kR2xvYmFsQmxvY2tzUmVzcG9uc2Vcblx0XHRcdHwgdW5kZWZpbmVkO1xuXG5cdFx0aWYgKGNhY2hlZCAmJiBjYWNoZWRbJ3F1ZXJ5J10/LmJsb2Nrcykge1xuXHRcdFx0bWFya0xvY2FsQmxvY2tzKHtyZXNwb25zZTogY2FjaGVkLCB1c2VyTGlua3N9KTtcblx0XHRcdHByb2Nlc3NlZCA9IHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKCFwcm9jZXNzZWQpIHtcblx0XHRcdHVzZXJzVG9RdWVyeS5wdXNoKHVzZXIpO1xuXHRcdH1cblx0fVxuXHR1c2VycyA9IHVzZXJzVG9RdWVyeTtcblxuXHQvLyBMb2NhbCBhbmQgZ2xvYmFsIHVzZXIgYmxvY2sgcXVlcmllc1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHVzZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgYmt1c2VycyA9IHVzZXJzLnNwbGljZSgwLCAyNSk7XG5cdFx0aWYgKCFia3VzZXJzLmxlbmd0aCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0cHJvbWlzZXNbcHJvbWlzZXMubGVuZ3RoXSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gKGF3YWl0IHF1ZXJ5VXNlckJsb2Nrcyhia3VzZXJzKSkgYXMgUXVlcnlMb2NhbEFuZEdsb2JhbEJsb2Nrc1Jlc3BvbnNlO1xuXHRcdFx0XHRjb25zdCBibG9ja1JlY29yZHM6IFJlY29yZDxzdHJpbmcsIFF1ZXJ5TG9jYWxBbmRHbG9iYWxCbG9ja3NSZXNwb25zZT4gPSB7fTtcblx0XHRcdFx0Zm9yIChjb25zdCB1c2VyIG9mIGJrdXNlcnMpIHtcblx0XHRcdFx0XHRibG9ja1JlY29yZHNbdXNlcl0gPSB7cXVlcnk6IHtibG9ja3M6IFtdfX07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10/LmJsb2Nrcykge1xuXHRcdFx0XHRcdG1hcmtMb2NhbEJsb2Nrcyh7cmVzcG9uc2UsIHVzZXJMaW5rc30pO1xuXG5cdFx0XHRcdFx0Zm9yIChjb25zdCBibG9jayBvZiByZXNwb25zZVsncXVlcnknXS5ibG9ja3MpIHtcblx0XHRcdFx0XHRcdGlmIChibG9jay51c2VyKSB7XG5cdFx0XHRcdFx0XHRcdGJsb2NrUmVjb3Jkc1tibG9jay51c2VyXT8ucXVlcnkuYmxvY2tzIS5wdXNoKGJsb2NrKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3IgKGNvbnN0IFt1c2VyLCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoYmxvY2tSZWNvcmRzKSkge1xuXHRcdFx0XHRcdG13LnN0b3JhZ2Uuc2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleUJsb2NrZWQgKyB1c2VyLCB2YWx1ZSwgNjAgKiA2MCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ1tNYXJrQmxvY2tlZF0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxuXG5cdHZvaWQgKGFzeW5jICgpID0+IHtcblx0XHRmb3IgKGNvbnN0IHByb21pc2Ugb2YgcHJvbWlzZXMpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGF3YWl0IHByb21pc2UoKTtcblx0XHRcdH0gY2F0Y2gge31cblx0XHR9XG5cdH0pKCk7XG59O1xuXG5jb25zdCBtYXJrQmxvY2tlZElQTGlua3MgPSAodXNlckxpbmtzOiBSZWNvcmQ8c3RyaW5nLCBKUXVlcnlbXT4pID0+IHtcblx0Ly8gQ29udmVydCB1c2VycyBpbnRvIGFycmF5XG5cdGNvbnN0IHVzZXJzOiBzdHJpbmdbXSA9IE9iamVjdC5rZXlzKHVzZXJMaW5rcyk7XG5cdGlmICghdXNlcnMubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcHJvbWlzZXM6ICgoKSA9PiBQcm9taXNlPHZvaWQ+KVtdID0gW107XG5cblx0Ly8gTG9jYWwgYW5kIGdsb2JhbCBJUCBibG9jayBxdWVyaWVzXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgdXNlcnMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBia3VzZXJzID0gdXNlcnMuc3BsaWNlKDAsIDI1KTtcblx0XHRpZiAoIWJrdXNlcnMubGVuZ3RoKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRmb3IgKGxldCBia2lwIG9mIGJrdXNlcnMpIHtcblx0XHRcdGlmICghbXcudXRpbC5pc0lQdjRBZGRyZXNzKGJraXApICYmICFtdy51dGlsLmlzSVB2NkFkZHJlc3MoYmtpcCkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChtdy51dGlsLmlzSVB2NkFkZHJlc3MoYmtpcCkpIHtcblx0XHRcdFx0YmtpcCA9IGJraXAudG9VcHBlckNhc2UoKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleUJsb2NrZWQgKyBia2lwKSkge1xuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IG13LnN0b3JhZ2UuZ2V0T2JqZWN0KFxuXHRcdFx0XHRcdE9QVElPTlMuc3RvcmFnZUtleUJsb2NrZWQgKyBia2lwXG5cdFx0XHRcdCkgYXMgUXVlcnlMb2NhbEFuZEdsb2JhbEJsb2Nrc1Jlc3BvbnNlO1xuXG5cdFx0XHRcdGlmIChyZXNwb25zZVsncXVlcnknXT8uYmxvY2tzKSB7XG5cdFx0XHRcdFx0bWFya0xvY2FsQmxvY2tzKHtyZXNwb25zZSwgdXNlckxpbmtzfSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0cHJvbWlzZXNbcHJvbWlzZXMubGVuZ3RoXSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRjb25zdCByZXNwb25zZSA9IChhd2FpdCBxdWVyeUlQQmxvY2tzKGJraXApKSBhcyBRdWVyeUxvY2FsQW5kR2xvYmFsQmxvY2tzUmVzcG9uc2U7XG5cblx0XHRcdFx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10/LmJsb2Nrcykge1xuXHRcdFx0XHRcdFx0bWFya0xvY2FsQmxvY2tzKHtyZXNwb25zZSwgdXNlckxpbmtzLCBia2lwfSk7XG5cblx0XHRcdFx0XHRcdGZvciAoY29uc3QgYmxvY2sgb2YgcmVzcG9uc2VbJ3F1ZXJ5J10uYmxvY2tzKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChibG9jay51c2VyKSB7XG5cdFx0XHRcdFx0XHRcdFx0bXcuc3RvcmFnZS5zZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5QmxvY2tlZCArIGJsb2NrLnVzZXIsIHJlc3BvbnNlLCA2MCAqIDYwKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCdbTWFya0Jsb2NrZWRdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblx0fVxuXG5cdHZvaWQgKGFzeW5jICgpID0+IHtcblx0XHRmb3IgKGNvbnN0IHByb21pc2Ugb2YgcHJvbWlzZXMpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGF3YWl0IHByb21pc2UoKTtcblx0XHRcdH0gY2F0Y2gge31cblx0XHR9XG5cdH0pKCk7XG59O1xuXG5leHBvcnQge21hcmtCbG9ja2VkVXNlckxpbmtzLCBtYXJrQmxvY2tlZElQTGlua3N9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcblxuY29uc3QgZ2VuZXJhdGVVc2VyTmFtZXNwYWNlVGl0bGVzID0gKCk6IHN0cmluZ1tdID0+IHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlSWRzfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRjb25zdCB1c2VyTmFtZXNwYWNlVGl0bGVzOiBzdHJpbmdbXSA9IFtdO1xuXG5cdGZvciAoY29uc3QgW25hbWVzcGFjZSwgaWRdIG9mIE9iamVjdC5lbnRyaWVzKHdnTmFtZXNwYWNlSWRzKSkge1xuXHRcdGlmICghT1BUSU9OUy51c2VyTmFtZXNwYWNlTnVtYmVycy5pbmNsdWRlcyhpZCkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHVzZXJOYW1lc3BhY2VUaXRsZXNbdXNlck5hbWVzcGFjZVRpdGxlcy5sZW5ndGhdID0gYCR7bXcudXRpbC5lc2NhcGVSZWdFeHAobmFtZXNwYWNlLnJlcGxhY2UoL18vZywgJyAnKSl9OmA7IC8vIFJlcGxhY2UgQXJyYXkjcHVzaCB0byBhdm9pZCBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdH1cblxuXHRyZXR1cm4gdXNlck5hbWVzcGFjZVRpdGxlcztcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVVc2VyTmFtZXNwYWNlVGl0bGVzfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2dlbmVyYXRlVXNlck5hbWVzcGFjZVRpdGxlc30gZnJvbSAnLi9nZW5lcmF0ZVVzZXJOYW1lc3BhY2VUaXRsZXMnO1xuXG4vLyBHZXQgYWxsIGFsaWFzZXMgZm9yIHVzZXI6ICYgdXNlcl90YWxrOlxuY29uc3QgdXNlck5hbWVzcGFjZVRpdGxlczogc3RyaW5nW10gPSBnZW5lcmF0ZVVzZXJOYW1lc3BhY2VUaXRsZXMoKTtcbi8vIFJlZ0V4cCBmb3IgYWxsIHRpdGxlcyB0aGF0IGFyZSAgVXNlcjp8IFVzZXJfdGFsazogfCBTcGVjaWFsOkNvbnRyaWJ1dGlvbnMvIChmb3IgdXNlcnNjcmlwdHMpXG5jb25zdCB1c2VyVGl0bGVSZWdleDogUmVnRXhwID0gbmV3IFJlZ0V4cChcblx0YF4oJHt1c2VyTmFtZXNwYWNlVGl0bGVzLmpvaW4oJ3wnKX18JHtPUFRJT05TLmNvbnRyaWJ1dGlvbnNQYWdlQWxpYXN9XFxcXC8pKyhbXlxcXFwvI10rKSRgLFxuXHQnaSdcbik7XG5cbi8vIFJlZ0V4cCBmb3IgbGlua3Ncbi8vIGFydGljbGVSZWdleCBhbHNvIG1hdGNoZXMgZXh0ZXJuYWwgbGlua3MgaW4gb3JkZXIgdG8gc3VwcG9ydCB0aGUgbm9waW5nIHRlbXBsYXRlXG5jb25zdCB7d2dBcnRpY2xlUGF0aCwgd2dTY3JpcHR9ID0gbXcuY29uZmlnLmdldCgpO1xuY29uc3QgYXJ0aWNsZVJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKGAke3dnQXJ0aWNsZVBhdGgucmVwbGFjZSgnJDEnLCAnJyl9KFteI10rKWApO1xuY29uc3Qgc2NyaXB0UmVnZXg6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoYF4ke3dnU2NyaXB0fVxcXFw/dGl0bGU9KFteIyZdKylgKTtcblxuY29uc3QgZ2VuZXJhdGVVc2VyTGlua3MgPSAoJGNvbnRlbnQ6IEpRdWVyeSk6IFJlY29yZDxzdHJpbmcsIEpRdWVyeVtdPiA9PiB7XG5cdC8vIEZpbmQgYWxsIFwidXNlclwiIGxpbmtzIGFuZCBzYXZlIHRoZW0gaW4gdXNlckxpbmtzIDogeyAndXNlcnMnOiBbPGxpbmsxPiwgPGxpbmsyPiwgLi4uXSwgJ3VzZXIyJzogWzxsaW5rMz4sIDxsaW5rMz4sIC4uLl0sIC4uLiB9XG5cdGNvbnN0IHVzZXJMaW5rczogUmVjb3JkPHN0cmluZywgSlF1ZXJ5W10+ID0ge307XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRjb250ZW50LmZpbmQoJ2EnKSkge1xuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+ID0gJChlbGVtZW50KTtcblx0XHRpZiAoXG5cdFx0XHQkZWxlbWVudC5oYXNDbGFzcygnbXctY2hhbmdlc2xpc3QtZGF0ZScpIHx8XG5cdFx0XHQkZWxlbWVudC5oYXNDbGFzcygnZXh0LWRpc2N1c3Npb250b29scy1pbml0LXRpbWVzdGFtcGxpbmsnKSB8fFxuXHRcdFx0JGVsZW1lbnQucGFyZW50KCdzcGFuJykuaGFzQ2xhc3MoJ213LWhpc3RvcnktdW5kbycpIHx8XG5cdFx0XHQkZWxlbWVudC5wYXJlbnQoJ3NwYW4nKS5oYXNDbGFzcygnbXctcm9sbGJhY2stbGluaycpXG5cdFx0KSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBocmVmOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkZWxlbWVudC5hdHRyKCdocmVmJyk7XG5cdFx0aWYgKCFocmVmKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0aWYgKG13LnV0aWwuaXNJUHY2QWRkcmVzcyhocmVmLnJlcGxhY2UoL14oPzpodHRwcz86XFwvXFwvKS9pLCAnJykpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyBPcHRpbWl6YXRpb246IFRydXN0IG13LXVzZXJsaW5rIGNsYXNzIHRvIGJlIGludGVybmFsLCBza2lwIGV4cGVuc2l2ZSBjaGVja3Ncblx0XHRpZiAoIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtdy11c2VybGluaycpKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHQvLyBNYXliZSBhYnNvbHV0ZSBVUkxcblx0XHRcdFx0Ly8gVXNlIG5hdGl2ZSBVUkwgZm9yIGJldHRlciBwZXJmb3JtYW5jZSB0aGFuIE13VXJpLCBhbmQgY2hlY2sgb25seSBpZiBsb29rcyBsaWtlIGFic29sdXRlXG5cdFx0XHRcdGlmIChocmVmLmluY2x1ZGVzKCc6Ly8nKSB8fCBocmVmLnN0YXJ0c1dpdGgoJy8vJykpIHtcblx0XHRcdFx0XHRjb25zdCB1cmwgPSBuZXcgVVJMKGhyZWYsIGxvY2F0aW9uLmhyZWYpO1xuXHRcdFx0XHRcdGlmICh1cmwuaG9zdCAhPT0gbG9jYXRpb24uaG9zdCkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bGV0IHBhZ2VUaXRsZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRcdGlmIChhcnRpY2xlUmVnZXgudGVzdChocmVmKSkge1xuXHRcdFx0Y29uc3QgbWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSA9IGFydGljbGVSZWdleC5leGVjKGhyZWYpIGFzIFJlZ0V4cEV4ZWNBcnJheTtcblx0XHRcdHBhZ2VUaXRsZSA9IG1hdGNoWzFdIGFzIHN0cmluZztcblx0XHR9IGVsc2UgaWYgKHNjcmlwdFJlZ2V4LnRlc3QoaHJlZikpIHtcblx0XHRcdGNvbnN0IG1hdGNoOiBSZWdFeHBFeGVjQXJyYXkgPSBzY3JpcHRSZWdleC5leGVjKGhyZWYpIGFzIFJlZ0V4cEV4ZWNBcnJheTtcblx0XHRcdHBhZ2VUaXRsZSA9IG1hdGNoWzFdIGFzIHN0cmluZztcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0cGFnZVRpdGxlID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhZ2VUaXRsZSkucmVwbGFjZSgvXy9nLCAnICcpO1xuXG5cdFx0Y29uc3QgdXNlckV4ZWNBcnJheTogUmVnRXhwRXhlY0FycmF5IHwgbnVsbCA9IHVzZXJUaXRsZVJlZ2V4LmV4ZWMocGFnZVRpdGxlKTtcblx0XHRpZiAoIXVzZXJFeGVjQXJyYXkgfHwgdHlwZW9mIHVzZXJFeGVjQXJyYXlbMl0gIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRsZXQgdXNlcjogc3RyaW5nID0gdXNlckV4ZWNBcnJheVsyXS5zbGljZSgwLCAxKS50b1VwcGVyQ2FzZSgpICsgdXNlckV4ZWNBcnJheVsyXS5zbGljZSgxKTtcblx0XHRpZiAobXcudXRpbC5pc0lQdjZBZGRyZXNzKHVzZXIpKSB7XG5cdFx0XHR1c2VyID0gdXNlci50b1VwcGVyQ2FzZSgpO1xuXHRcdH1cblxuXHRcdHVzZXJMaW5rc1t1c2VyXSA/Pz0gW107XG5cblx0XHQodXNlckxpbmtzW3VzZXJdIGFzICh0eXBlb2YgdXNlckxpbmtzKVtrZXlvZiB0eXBlb2YgdXNlckxpbmtzXSlbXG5cdFx0XHQodXNlckxpbmtzW3VzZXJdIGFzICh0eXBlb2YgdXNlckxpbmtzKVtrZXlvZiB0eXBlb2YgdXNlckxpbmtzXSkubGVuZ3RoXG5cdFx0XSA9ICRlbGVtZW50OyAvLyBSZXBsYWNlIEFycmF5I3B1c2ggdG8gYXZvaWQgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXHR9XG5cblx0cmV0dXJuIHVzZXJMaW5rcztcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVVc2VyTGlua3N9O1xuIiwgImltcG9ydCB7bWFya0Jsb2NrZWRJUExpbmtzLCBtYXJrQmxvY2tlZFVzZXJMaW5rc30gZnJvbSAnLi91dGlsL21hcmtVc2VyTGlua3MnO1xuaW1wb3J0IHtnZW5lcmF0ZVVzZXJMaW5rc30gZnJvbSAnLi91dGlsL2dlbmVyYXRlVXNlckxpbmtzJztcblxuY29uc3QgbWFya0Jsb2NrZWRVc2VyID0gKCRjb250ZW50OiBKUXVlcnkpOiB2b2lkID0+IHtcblx0Ly8gRmluZCBhbGwgXCJ1c2VyXCIgbGlua3MgYW5kIHNhdmUgdGhlbSBpbiB1c2VyTGlua3MgOiB7ICd1c2Vycyc6IFs8bGluazE+LCA8bGluazI+LCAuLi5dLCAndXNlcjInOiBbPGxpbmszPiwgPGxpbmszPiwgLi4uXSwgLi4uIH1cblx0Y29uc3QgdXNlckxpbmtzOiBSZWNvcmQ8c3RyaW5nLCBKUXVlcnlbXT4gPSBnZW5lcmF0ZVVzZXJMaW5rcygkY29udGVudCk7XG5cblx0bWFya0Jsb2NrZWRVc2VyTGlua3ModXNlckxpbmtzKTtcblx0bWFya0Jsb2NrZWRJUExpbmtzKHVzZXJMaW5rcyk7XG59O1xuXG5leHBvcnQge21hcmtCbG9ja2VkVXNlcn07XG4iLCAiaW1wb3J0IHttYXJrQmxvY2tlZFVzZXJ9IGZyb20gJy4vbWFya0Jsb2NrZWRVc2VyJztcblxuY29uc3Qge3dnQWN0aW9uLCB3Z05hbWVzcGFjZU51bWJlcn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmNvbnN0IGFkZEhvb2sgPSAoKTogdm9pZCA9PiB7XG5cdGxldCBpc0luaXQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRtdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuYWRkKGZ1bmN0aW9uIG1hcmtCbG9ja2VkKCRjb250ZW50KTogdm9pZCB7XG5cdFx0aWYgKGlzSW5pdCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpc0luaXQgPSB0cnVlO1xuXG5cdFx0Ly8gT24gdGhlIGZpcnN0IGNhbGwgYWZ0ZXIgaW5pdGlhbCBwYWdlIGxvYWQsIGNvbnRhaW5lciBpcyBtdy51dGlsLiRjb250ZW50XG5cdFx0Ly8gVXNlZCB0byBsaW1pdCBtYWluc3BhY2UgYWN0aXZpdHkgdG8ganVzdCB0aGUgZGlmZiBkZWZpbml0aW9uc1xuXHRcdGlmICh3Z0FjdGlvbiA9PT0gJ3ZpZXcnICYmIHdnTmFtZXNwYWNlTnVtYmVyID09PSAwKSB7XG5cdFx0XHQkY29udGVudCA9ICRjb250ZW50LmZpbmQoJy5kaWZmLXRpdGxlJyk7XG5cdFx0fVxuXHRcdC8vIE9uIHBhZ2UgbG9hZCwgYWxzbyB1cGRhdGUgdGhlIG5hbWVzcGFjZSB0YWJcblx0XHQkY29udGVudCA9ICRjb250ZW50LmFkZCgnI2NhLW5zdGFiLXVzZXInKTtcblxuXHRcdG1hcmtCbG9ja2VkVXNlcigkY29udGVudCk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHthZGRIb29rfTtcbiIsICJjb25zdCBjbGVhck9sZEtleXMgPSAoKTogdm9pZCA9PiB7XG5cdGlmIChtdy5zdG9yYWdlLmdldE9iamVjdCgnZXh0LmdhZGdldC5NYXJrQmxvY2tlZF9vbGRLZXlzQ2xlYXJlZCcpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Zm9yIChjb25zdCBrZXkgaW4gbG9jYWxTdG9yYWdlKSB7XG5cdFx0aWYgKE9iamVjdC5oYXNPd24obG9jYWxTdG9yYWdlLCBrZXkpKSB7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby1sb25lbHktaWZcblx0XHRcdGlmIChcblx0XHRcdFx0a2V5LnN0YXJ0c1dpdGgoJ2V4dC5nYWRnZXQuTWFya0Jsb2NrZWRfaXNMb2NrZWQtJykgfHxcblx0XHRcdFx0a2V5LnN0YXJ0c1dpdGgoJ19FWFBJUllfZXh0LmdhZGdldC5NYXJrQmxvY2tlZF9pc0xvY2tlZC0nKVxuXHRcdFx0KSB7XG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGlmIChcblx0XHRcdC8vIFx0a2V5LnN0YXJ0c1dpdGgoJ2V4dC5nYWRnZXQuTWFya0Jsb2NrZWRfaXNCbG9ja2VkLScpIHx8XG5cdFx0XHQvLyBcdGtleS5zdGFydHNXaXRoKCdfRVhQSVJZX2V4dC5nYWRnZXQuTWFya0Jsb2NrZWRfaXNCbG9ja2VkLScpXG5cdFx0XHQvLyApIHtcblx0XHRcdC8vIFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcblx0XHRcdC8vIH1cblx0XHR9XG5cdH1cblxuXHRtdy5zdG9yYWdlLnNldE9iamVjdCgnZXh0LmdhZGdldC5NYXJrQmxvY2tlZF9vbGRLZXlzQ2xlYXJlZCcsIHRydWUpO1xufTtcblxuZXhwb3J0IHtjbGVhck9sZEtleXN9O1xuIiwgImltcG9ydCB7YWRkSG9va30gZnJvbSAnLi9tb2R1bGVzL2FkZEhvb2snO1xuaW1wb3J0IHtjbGVhck9sZEtleXN9IGZyb20gJy4vbW9kdWxlcy91dGlsL2NsZWFyT2xkS2V5cyc7XG5cbmlmICghWydlZGl0JywgJ3N1Ym1pdCddLmluY2x1ZGVzKG13LmNvbmZpZy5nZXQoJ3dnQWN0aW9uJykpKSB7XG5cdGFkZEhvb2soKTtcbn1cblxuLy8gYWRkIGEgb25lLXRpbWUgZnVuY3Rpb24gdG8gY2xlYXIgb2xkIGxvY2FsU3RvcmFnZSBrZXlzXG5pZiAoIW13LnN0b3JhZ2UuZ2V0T2JqZWN0KCdleHQuZ2FkZ2V0Lk1hcmtCbG9ja2VkX29sZEtleXNDbGVhcmVkJykpIHtcblx0dm9pZCBjbGVhck9sZEtleXMoKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLHlCQUEwQjtBQUMxQixJQUFBQyx1QkFBd0IsQ0FBQyxHQUFHLENBQUM7QUFDN0IsSUFBQUMsb0JBQXFCO0FBQ3JCLElBQUFDLFVBQVc7O0FDSFosSUFBQUMsb0JBQXdCQyxRQUFBLGlCQUFBO0FBRXhCLElBQU1DLE9BQUEsR0FBY0Ysa0JBQUFHLFdBQUEsZUFBQUMsT0FBaUNMLE9BQU8sQ0FBRTs7QUNEOUQsSUFBTU0sZ0JBQUEsNEJBQUE7QUFBQSxNQUFBQyxPQUFBQyxrQkFBZ0IsV0FBT0MsTUFBaUI7QUFDN0MsVUFBTUMsU0FBK0I7TUFDcENDLFFBQVE7TUFDUkMsUUFBUTtNQUNSQyxlQUFlO01BQ2ZDLE1BQU07TUFDTkw7TUFDQU0sU0FBUztNQUNUQyxRQUFRLENBQUMsTUFBTSxVQUFVLFVBQVUsZ0JBQWdCLGFBQWEsTUFBTTtNQUN0RUMsU0FBUztNQUNUQyxRQUFRO0lBQ1Q7QUFFQSxXQUFBLE1BQWFmLElBQUlnQixJ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O0FBQ0RvSCxxQkFBYUUsV0FBVzVKLEdBQUc7TUFDNUI7SUFRRDtFQUNEO0FBRUFrRSxLQUFHQyxRQUFRZ0IsVUFBVSx5Q0FBeUMsSUFBSTtBQUNuRTs7QUN0QkEsSUFBSSxDQUFDLENBQUMsUUFBUSxRQUFRLEVBQUUyQixTQUFTNUMsR0FBR3NDLE9BQU81SCxJQUFJLFVBQVUsQ0FBQyxHQUFHO0FBQzVEd0ssVUFBUTtBQUNUO0FBR0EsSUFBSSxDQUFDbEYsR0FBR0MsUUFBUUMsVUFBVSx1Q0FBdUMsR0FBRztBQUNuRSxPQUFLcUYsYUFBYTtBQUNuQjsiLAogICJuYW1lcyI6IFsiY29udHJpYnV0aW9uc1BhZ2VBbGlhcyIsICJ1c2VyTmFtZXNwYWNlTnVtYmVycyIsICJzdG9yYWdlS2V5QmxvY2tlZCIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAicXVlcnlJUEJsb2NrcyIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgImJraXAiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJsaXN0IiwgImJrbGltaXQiLCAiYmtwcm9wIiwgInNtYXhhZ2UiLCAibWF4YWdlIiwgImdldCIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAicXVlcnlVc2VyQmxvY2tzIiwgIl9yZWYyIiwgImJrdXNlcnMiLCAiX3gyIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJnZXRJMThuTWVzc2FnZXMiLCAiaW5maW5pdHkiLCAibG9jYWxpemUiLCAiZW4iLCAiQmxvY2tlZCIsICJwYXJ0aWFsIiwgInpoIiwgImQiLCAicyIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiYWRkWmVybyIsICJ2IiwgImluSG91cnMiLCAibXMiLCAibW0iLCAiTWF0aCIsICJmbG9vciIsICJoaCIsICJkZCIsICJwYXJzZVRTIiwgInN0cmluZyIsICJtIiwgInJlcGxhY2UiLCAibWF0Y2giLCAiRGF0ZSIsICJVVEMiLCAiZ2V0VGltZSIsICJ1c2VybGlua0luZGVmIiwgInVzZXJsaW5rUGFydGlhbCIsICJ1c2VybGlua1RlbXAiLCAibWFya0xvY2FsQmxvY2tzIiwgInJlc3BvbnNlIiwgInVzZXJMaW5rcyIsICJfcmVzcG9uc2UkcXVlcnkiLCAiYmxvY2tzIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJuIiwgImRvbmUiLCAiYmxvY2siLCAidmFsdWUiLCAiaXNQYXJ0aWFsQmxjb2siLCAicmVzdHJpY3Rpb25zIiwgImNsYXNzTmFtZSIsICJibG9ja1RpbWUiLCAiZXhwaXJ5IiwgInN0YXJ0c1dpdGgiLCAidGltZXN0YW1wIiwgInRpcCIsICJieSIsICJyZWFzb24iLCAibm93IiwgIiRsaW5rcyIsICJ1c2VyIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgIiRsaW5rIiwgImFkZENsYXNzIiwgImF0dHIiLCAiZXJyIiwgImUiLCAiZiIsICJtYXJrQmxvY2tlZFVzZXJMaW5rcyIsICJ1c2VycyIsICJPYmplY3QiLCAia2V5cyIsICJsZW5ndGgiLCAicHJvbWlzZXMiLCAidXNlcnNUb1F1ZXJ5IiwgIl9pIiwgIl91c2VycyIsICJfY2FjaGVkJHF1ZXJ5IiwgInByb2Nlc3NlZCIsICJjYWNoZWQiLCAibXciLCAic3RvcmFnZSIsICJnZXRPYmplY3QiLCAicHVzaCIsICJpIiwgInNwbGljZSIsICJfcmVzcG9uc2UkcXVlcnkyIiwgImJsb2NrUmVjb3JkcyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJxdWVyeSIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJfYmxvY2tSZWNvcmRzJGJsb2NrJHUiLCAiX2kyIiwgIl9PYmplY3QkZW50cmllcyIsICJlbnRyaWVzIiwgInNldE9iamVjdCIsICJlcnJvciIsICJjb25zb2xlIiwgIl9pMyIsICJfcHJvbWlzZXMiLCAicHJvbWlzZSIsICJtYXJrQmxvY2tlZElQTGlua3MiLCAiX2l0ZXJhdG9yNSIsICJfc3RlcDUiLCAidXRpbCIsICJpc0lQdjRBZGRyZXNzIiwgImlzSVB2NkFkZHJlc3MiLCAidG9VcHBlckNhc2UiLCAiX3Jlc3BvbnNlJHF1ZXJ5MyIsICJfcmVzcG9uc2UkcXVlcnk0IiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgIl9pNCIsICJfcHJvbWlzZXMyIiwgImdlbmVyYXRlVXNlck5hbWVzcGFjZVRpdGxlcyIsICJ3Z05hbWVzcGFjZUlkcyIsICJjb25maWciLCAidXNlck5hbWVzcGFjZVRpdGxlczIiLCAiX2k1IiwgIl9PYmplY3QkZW50cmllczIiLCAibmFtZXNwYWNlIiwgImlkIiwgImluY2x1ZGVzIiwgImVzY2FwZVJlZ0V4cCIsICJ1c2VyTmFtZXNwYWNlVGl0bGVzIiwgInVzZXJUaXRsZVJlZ2V4IiwgIlJlZ0V4cCIsICJqb2luIiwgIndnQXJ0aWNsZVBhdGgiLCAid2dTY3JpcHQiLCAiYXJ0aWNsZVJlZ2V4IiwgInNjcmlwdFJlZ2V4IiwgImdlbmVyYXRlVXNlckxpbmtzIiwgIiRjb250ZW50IiwgIl9pdGVyYXRvcjciLCAiZmluZCIsICJfc3RlcDciLCAiX3VzZXIiLCAiX3VzZXJMaW5rcyRfdXNlciIsICJlbGVtZW50IiwgIiRlbGVtZW50IiwgIiQiLCAiaGFzQ2xhc3MiLCAicGFyZW50IiwgImhyZWYiLCAiY2xhc3NMaXN0IiwgImNvbnRhaW5zIiwgInVybCIsICJVUkwiLCAibG9jYXRpb24iLCAiaG9zdCIsICJwYWdlVGl0bGUiLCAidGVzdCIsICJleGVjIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJ1c2VyRXhlY0FycmF5IiwgInNsaWNlIiwgIm1hcmtCbG9ja2VkVXNlciIsICJ3Z0FjdGlvbiIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJhZGRIb29rIiwgImlzSW5pdCIsICJob29rIiwgImFkZCIsICJtYXJrQmxvY2tlZCIsICJjbGVhck9sZEtleXMiLCAibG9jYWxTdG9yYWdlIiwgImhhc093biIsICJyZW1vdmVJdGVtIl0KfQo=
