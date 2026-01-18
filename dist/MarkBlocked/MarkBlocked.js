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
  var _iterator3 = _createForOfIteratorHelper(users), _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
      const user = _step3.value;
      if (mw.storage.getObject(storageKeyBlocked + user)) {
        var _response$query3;
        const response = mw.storage.getObject(storageKeyBlocked + user);
        if ((_response$query3 = response["query"]) !== null && _response$query3 !== void 0 && _response$query3.blocks) {
          var _response$query4;
          if ((_response$query4 = response["query"]) !== null && _response$query4 !== void 0 && _response$query4.blocks) {
            markLocalBlocks({
              response,
              userLinks
            });
          }
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
        const blockRecords = {};
        var _iterator4 = _createForOfIteratorHelper(bkusers), _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
            const user = _step4.value;
            blockRecords[user] = {
              query: {
                blocks: []
              }
            };
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        if ((_response$query2 = response["query"]) !== null && _response$query2 !== void 0 && _response$query2.blocks) {
          markLocalBlocks({
            response,
            userLinks
          });
          var _iterator5 = _createForOfIteratorHelper(response["query"].blocks), _step5;
          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
              const block = _step5.value;
              if (block.user) {
                var _blockRecords$block$u;
                (_blockRecords$block$u = blockRecords[block.user]) === null || _blockRecords$block$u === void 0 || _blockRecords$block$u.query.blocks.push(block);
              }
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        }
        for (var _i = 0, _Object$entries = Object.entries(blockRecords); _i < _Object$entries.length; _i++) {
          const [user, value] = _Object$entries[_i];
          mw.storage.setObject(storageKeyBlocked + user, value, 60 * 60);
        }
      } catch (error) {
        console.error("[MarkBlocked] Ajax error:", error);
      }
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
    var _iterator6 = _createForOfIteratorHelper(bkusers), _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
        let bkip = _step6.value;
        if (!mw.util.isIPv4Address(bkip) && !mw.util.isIPv6Address(bkip)) {
          continue;
        }
        if (mw.util.isIPv6Address(bkip)) {
          bkip = bkip.toUpperCase();
        }
        if (mw.storage.getObject(storageKeyBlocked + bkip)) {
          var _response$query5;
          const response = mw.storage.getObject(storageKeyBlocked + bkip);
          if ((_response$query5 = response["query"]) !== null && _response$query5 !== void 0 && _response$query5.blocks) {
            markLocalBlocks({
              response,
              userLinks
            });
          }
          continue;
        }
        promises[promises.length] = /* @__PURE__ */ _asyncToGenerator(function* () {
          try {
            var _response$query6;
            const response = yield queryIPBlocks(bkip);
            if ((_response$query6 = response["query"]) !== null && _response$query6 !== void 0 && _response$query6.blocks) {
              markLocalBlocks({
                response,
                userLinks,
                bkip
              });
              var _iterator7 = _createForOfIteratorHelper(response["query"].blocks), _step7;
              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
                  const block = _step7.value;
                  if (block.user) {
                    mw.storage.setObject(storageKeyBlocked + block.user, response, 60 * 60);
                  }
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }
            }
          } catch (error) {
            console.error("[MarkBlocked] Ajax error:", error);
          }
        });
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
  }
  void _asyncToGenerator(function* () {
    for (var _i3 = 0, _promises2 = promises; _i3 < _promises2.length; _i3++) {
      const promise = _promises2[_i3];
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
  for (var _i4 = 0, _Object$entries2 = Object.entries(wgNamespaceIds); _i4 < _Object$entries2.length; _i4++) {
    const [namespace, id] = _Object$entries2[_i4];
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
  var _iterator8 = _createForOfIteratorHelper($content.find("a")), _step8;
  try {
    for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
      var _user, _userLinks$_user;
      const element = _step8.value;
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
    _iterator8.e(err);
  } finally {
    _iterator8.f();
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01hcmtCbG9ja2VkL29wdGlvbnMuanNvbiIsICJzcmMvTWFya0Jsb2NrZWQvbW9kdWxlcy91dGlsL2FwaS50cyIsICJzcmMvTWFya0Jsb2NrZWQvbW9kdWxlcy91dGlsL3F1ZXJ5LnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvdXRpbC9wYXJzZVRpbWUudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvTWFya0Jsb2NrZWQubW9kdWxlLmxlc3MiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvdXRpbC9tYXJrTGlua3MudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvdXRpbC9tYXJrVXNlckxpbmtzLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVVc2VyTGlua3MudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvdXRpbC9nZW5lcmF0ZVVzZXJOYW1lc3BhY2VUaXRsZXMudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvbWFya0Jsb2NrZWRVc2VyLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL2FkZEhvb2sudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvdXRpbC9jbGVhck9sZEtleXMudHMiLCAic3JjL01hcmtCbG9ja2VkL01hcmtCbG9ja2VkLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiY29udHJpYnV0aW9uc1BhZ2VBbGlhc1wiOiBcIlNwZWNpYWw6Q29udHJpYnV0aW9uc1wiLFxuXHRcInVzZXJOYW1lc3BhY2VOdW1iZXJzXCI6IFsyLCAzXSxcblx0XCJzdG9yYWdlS2V5QmxvY2tlZFwiOiBcImV4dC5nYWRnZXQuTWFya0Jsb2NrZWRfYmxvY2tlZC1cIixcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYE1hcmtCbG9ja2VkLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxuY29uc3QgcXVlcnlJUEJsb2NrcyA9IGFzeW5jIChia2lwOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUJsb2Nrc1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdGxpc3Q6ICdibG9ja3MnLFxuXHRcdGJraXAsXG5cdFx0YmtsaW1pdDogMTAwLFxuXHRcdGJrcHJvcDogWydieScsICdleHBpcnknLCAncmVhc29uJywgJ3Jlc3RyaWN0aW9ucycsICd0aW1lc3RhbXAnLCAndXNlciddLFxuXHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRtYXhhZ2U6IDYwMCxcblx0fTtcblxuXHRyZXR1cm4gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xufTtcblxuY29uc3QgcXVlcnlVc2VyQmxvY2tzID0gYXN5bmMgKGJrdXNlcnM6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlCbG9ja3NQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRsaXN0OiAnYmxvY2tzJyxcblx0XHRia3VzZXJzLFxuXHRcdGJrbGltaXQ6IDEwMCxcblx0XHRia3Byb3A6IFsnYnknLCAnZXhwaXJ5JywgJ3JlYXNvbicsICdyZXN0cmljdGlvbnMnLCAndGltZXN0YW1wJywgJ3VzZXInXSxcblx0XHRzbWF4YWdlOiA2MDAsXG5cdFx0bWF4YWdlOiA2MDAsXG5cdH07XG5cblx0cmV0dXJuIGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcbn07XG5cbmV4cG9ydCB7cXVlcnlJUEJsb2NrcywgcXVlcnlVc2VyQmxvY2tzfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0aW5maW5pdHk6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnaW5maW5pdHknLFxuXHRcdFx0J3poLWhhbnMnOiAn5peg6ZmQ5pyfJyxcblx0XHRcdCd6aC1oYW50JzogJ+eEoemZkOacnycsXG5cdFx0fSksXG5cdFx0QmxvY2tlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICc7ICQ1YmxvY2tlZCAoJDEpIGJ5ICQyOiAkMyAoJDQgYWdvKScsXG5cdFx0XHQnemgtaGFucyc6ICfvvJvnlLEkMiQ15bCB56aBJDHvvJokM++8iCQ05YmN77yJJyxcblx0XHRcdCd6aC1oYW50JzogJ++8m+eUsSQyJDXlsIHpjpYkMe+8miQz77yIJDTliY3vvIknLFxuXHRcdH0pLFxuXHRcdHBhcnRpYWw6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAncGFydGlhbCAnLFxuXHRcdFx0emg6ICfpg6jliIYnLFxuXHRcdH0pLFxuXHRcdGQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnZGF5Jyxcblx0XHRcdHpoOiAn5aSpJyxcblx0XHR9KSxcblx0XHRzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ3NlY29uZCcsXG5cdFx0XHR6aDogJ+enkicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNvbnN0IGFkZFplcm8gPSAodjogbnVtYmVyKTogc3RyaW5nID0+IHtcblx0cmV0dXJuIHYgPD0gOSA/IGAwJHt2fWAgOiBgJHt2fWA7XG59O1xuXG5jb25zdCBpbkhvdXJzID0gKG1zOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuXHRsZXQgbW06IG51bWJlciA9IE1hdGguZmxvb3IobXMgLyA2ZTQpO1xuXHRpZiAoIW1tKSB7XG5cdFx0cmV0dXJuIGAke01hdGguZmxvb3IobXMgLyAxZTMpfSR7Z2V0TWVzc2FnZSgncycpfWA7XG5cdH1cblxuXHRsZXQgaGg6IG51bWJlciA9IE1hdGguZmxvb3IobW0gLyA2MCk7XG5cdG1tICU9IDYwO1xuXG5cdGNvbnN0IGRkOiBudW1iZXIgPSBNYXRoLmZsb29yKGhoIC8gMjQpO1xuXHRoaCAlPSAyNDtcblxuXHRpZiAoZGQpIHtcblx0XHRyZXR1cm4gYCR7ZGQgKyAoZGQgPCAxMCA/IGAuJHthZGRaZXJvKGhoKX1gIDogJycpfSR7Z2V0TWVzc2FnZSgnZCcpfWA7XG5cdH1cblxuXHRyZXR1cm4gYCR7aGh9OiR7YWRkWmVybyhtbSl9YDtcbn07XG5cbi8vIDIwMDgxMjI2MjIwNjA1IG9yIDIwMDgtMDEtMjZUMDY6MzQ6MTlaIC0+IG51bWJlclxuY29uc3QgcGFyc2VUUyA9IChzdHJpbmc6IHN0cmluZyk6IG51bWJlciA9PiB7XG5cdGNvbnN0IG06IFJlZ0V4cE1hdGNoQXJyYXkgPSBzdHJpbmdcblx0XHQucmVwbGFjZSgvXFxEL2csICcnKVxuXHRcdC5tYXRjaCgvKFxcZFxcZFxcZFxcZCkoXFxkXFxkKShcXGRcXGQpKFxcZFxcZCkoXFxkXFxkKShcXGRcXGQpLykgYXMgUmVnRXhwTWF0Y2hBcnJheTtcblxuXHRyZXR1cm4gbmV3IERhdGUoXG5cdFx0RGF0ZS5VVEMoXG5cdFx0XHQrKG1bMV0gYXMgc3RyaW5nKSxcblx0XHRcdCsobVsyXSBhcyBzdHJpbmcpIC0gMSxcblx0XHRcdCsobVszXSBhcyBzdHJpbmcpLFxuXHRcdFx0KyhtWzRdIGFzIHN0cmluZyksXG5cdFx0XHQrKG1bNV0gYXMgc3RyaW5nKSxcblx0XHRcdCsobVs2XSBhcyBzdHJpbmcpXG5cdFx0KVxuXHQpLmdldFRpbWUoKTtcbn07XG5cbmV4cG9ydCB7aW5Ib3VycywgcGFyc2VUU307XG4iLCAiaW1wb3J0IFwiZXNidWlsZC1jc3MtbW9kdWxlcy1wbHVnaW4tbnMtY3NzOnNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL01hcmtCbG9ja2VkLm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3QgdXNlcmxpbmtJbmRlZiA9IFwiTWFya0Jsb2NrZWQtbW9kdWxlX191c2VybGlua0luZGVmX3h0QWZPR19fNDEwMFwiO1xuZXhwb3J0IGNvbnN0IHVzZXJsaW5rUGFydGlhbCA9IFwiTWFya0Jsb2NrZWQtbW9kdWxlX191c2VybGlua1BhcnRpYWxfeHRBZk9HX180MTAwXCI7XG5leHBvcnQgY29uc3QgdXNlcmxpbmtUZW1wID0gXCJNYXJrQmxvY2tlZC1tb2R1bGVfX3VzZXJsaW5rVGVtcF94dEFmT0dfXzQxMDBcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcInVzZXJsaW5rSW5kZWZcIjogdXNlcmxpbmtJbmRlZixcbiAgXCJ1c2VybGlua1BhcnRpYWxcIjogdXNlcmxpbmtQYXJ0aWFsLFxuICBcInVzZXJsaW5rVGVtcFwiOiB1c2VybGlua1RlbXBcbn07XG4gICAgICAiLCAiaW1wb3J0IHtpbkhvdXJzLCBwYXJzZVRTfSBmcm9tICcuL3BhcnNlVGltZSc7XG5pbXBvcnQge3VzZXJsaW5rSW5kZWYsIHVzZXJsaW5rUGFydGlhbCwgdXNlcmxpbmtUZW1wfSBmcm9tICcuLi9NYXJrQmxvY2tlZC5tb2R1bGUubGVzcyc7XG5pbXBvcnQgdHlwZSB7UXVlcnlMb2NhbEFuZEdsb2JhbEJsb2Nrc1Jlc3BvbnNlfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBDYWxsYmFjazogcmVjZWl2ZSBkYXRhIGFuZCBtYXJrIGxpbmtzXG4gKi9cblxuY29uc3QgbWFya0xvY2FsQmxvY2tzID0gKHtcblx0cmVzcG9uc2UsXG5cdHVzZXJMaW5rcyxcblx0YmtpcCxcbn06IHtcblx0cmVzcG9uc2U6IFF1ZXJ5TG9jYWxBbmRHbG9iYWxCbG9ja3NSZXNwb25zZTtcblx0dXNlckxpbmtzOiBSZWNvcmQ8c3RyaW5nLCBKUXVlcnlbXT47XG5cdGJraXA/OiBzdHJpbmc7XG59KTogdm9pZCA9PiB7XG5cdC8vIExvY2FsIGJsb2Nrc1xuXHRpZiAoIXJlc3BvbnNlWydxdWVyeSddPy5ibG9ja3MpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRmb3IgKGNvbnN0IGJsb2NrIG9mIHJlc3BvbnNlWydxdWVyeSddLmJsb2Nrcykge1xuXHRcdGNvbnN0IGlzUGFydGlhbEJsY29rOiBib29sZWFuID0gdHlwZW9mIGJsb2NrLnJlc3RyaWN0aW9ucyA9PT0gJ3N0cmluZycgJiYgYmxvY2sucmVzdHJpY3Rpb25zICE9PSAnJzsgLy8gUGFydGlhbCBibG9ja1xuXG5cdFx0bGV0IGNsYXNzTmFtZTogc3RyaW5nID0gdXNlcmxpbmtQYXJ0aWFsIGFzIHN0cmluZztcblx0XHRsZXQgYmxvY2tUaW1lOiBzdHJpbmcgPSAnJztcblx0XHRpZiAoYmxvY2suZXhwaXJ5LnN0YXJ0c1dpdGgoJ2luJykpIHtcblx0XHRcdGlmICghaXNQYXJ0aWFsQmxjb2spIHtcblx0XHRcdFx0Y2xhc3NOYW1lID0gdXNlcmxpbmtJbmRlZiBhcyBzdHJpbmc7XG5cdFx0XHR9XG5cdFx0XHRibG9ja1RpbWUgPSBnZXRNZXNzYWdlKCdpbmZpbml0eScpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoIWlzUGFydGlhbEJsY29rKSB7XG5cdFx0XHRcdGNsYXNzTmFtZSA9IHVzZXJsaW5rVGVtcCBhcyBzdHJpbmc7XG5cdFx0XHR9XG5cdFx0XHRibG9ja1RpbWUgPSBpbkhvdXJzKHBhcnNlVFMoYmxvY2suZXhwaXJ5KSAtIHBhcnNlVFMoYmxvY2sudGltZXN0YW1wKSk7XG5cdFx0fVxuXG5cdFx0bGV0IHRpcDogc3RyaW5nID0gZ2V0TWVzc2FnZSgnQmxvY2tlZCcpXG5cdFx0XHQucmVwbGFjZSgnJDEnLCBibG9ja1RpbWUpXG5cdFx0XHQucmVwbGFjZSgnJDInLCBibG9jay5ieSlcblx0XHRcdC5yZXBsYWNlKCckMycsIGJsb2NrLnJlYXNvbilcblx0XHRcdC5yZXBsYWNlKCckNCcsIGluSG91cnMoRGF0ZS5ub3coKSAtIHBhcnNlVFMoYmxvY2sudGltZXN0YW1wKSkpO1xuXHRcdHRpcCA9IGlzUGFydGlhbEJsY29rID8gdGlwLnJlcGxhY2UoJyQ1JywgZ2V0TWVzc2FnZSgncGFydGlhbCcpKSA6IHRpcC5yZXBsYWNlKCckNScsICcnKTtcblxuXHRcdGNvbnN0ICRsaW5rczogSlF1ZXJ5W10gfCB1bmRlZmluZWQgPSB1c2VyTGlua3NbYmtpcCA/PyBibG9jay51c2VyXTtcblx0XHRpZiAoISRsaW5rcykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCAkbGluayBvZiAkbGlua3MpIHtcblx0XHRcdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHRcdFx0Ly8gKiBzZWUgLi9NYXJrYmxvY2tlZC5tb2R1bGUubGVzc1xuXHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0JGxpbmsuYWRkQ2xhc3MoY2xhc3NOYW1lKS5hdHRyKCd0aXRsZScsICRsaW5rLmF0dHIoJ3RpdGxlJykgKyB0aXApO1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHttYXJrTG9jYWxCbG9ja3N9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7cXVlcnlJUEJsb2NrcywgcXVlcnlVc2VyQmxvY2tzfSBmcm9tICcuL3F1ZXJ5JztcbmltcG9ydCB0eXBlIHtRdWVyeUxvY2FsQW5kR2xvYmFsQmxvY2tzUmVzcG9uc2V9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7bWFya0xvY2FsQmxvY2tzfSBmcm9tICcuL21hcmtMaW5rcyc7XG5cbmNvbnN0IG1hcmtCbG9ja2VkVXNlckxpbmtzID0gKHVzZXJMaW5rczogUmVjb3JkPHN0cmluZywgSlF1ZXJ5W10+KSA9PiB7XG5cdC8vIENvbnZlcnQgdXNlcnMgaW50byBhcnJheVxuXHRsZXQgdXNlcnM6IHN0cmluZ1tdID0gT2JqZWN0LmtleXModXNlckxpbmtzKTtcblx0aWYgKCF1c2Vycy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwcm9taXNlczogKCgpID0+IFByb21pc2U8dm9pZD4pW10gPSBbXTtcblxuXHRmb3IgKGNvbnN0IHVzZXIgb2YgdXNlcnMpIHtcblx0XHRpZiAobXcuc3RvcmFnZS5nZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5QmxvY2tlZCArIHVzZXIpKSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IG13LnN0b3JhZ2UuZ2V0T2JqZWN0KFxuXHRcdFx0XHRPUFRJT05TLnN0b3JhZ2VLZXlCbG9ja2VkICsgdXNlclxuXHRcdFx0KSBhcyBRdWVyeUxvY2FsQW5kR2xvYmFsQmxvY2tzUmVzcG9uc2U7XG5cblx0XHRcdGlmIChyZXNwb25zZVsncXVlcnknXT8uYmxvY2tzKSB7XG5cdFx0XHRcdGlmIChyZXNwb25zZVsncXVlcnknXT8uYmxvY2tzKSB7XG5cdFx0XHRcdFx0bWFya0xvY2FsQmxvY2tzKHtyZXNwb25zZSwgdXNlckxpbmtzfSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR1c2VycyA9IHVzZXJzLmZpbHRlcigoZWxlbWVudCkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBlbGVtZW50ICE9PSB1c2VyO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBMb2NhbCBhbmQgZ2xvYmFsIHVzZXIgYmxvY2sgcXVlcmllc1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHVzZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgYmt1c2VycyA9IHVzZXJzLnNwbGljZSgwLCAyNSk7XG5cdFx0aWYgKCFia3VzZXJzLmxlbmd0aCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0cHJvbWlzZXNbcHJvbWlzZXMubGVuZ3RoXSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gKGF3YWl0IHF1ZXJ5VXNlckJsb2Nrcyhia3VzZXJzKSkgYXMgUXVlcnlMb2NhbEFuZEdsb2JhbEJsb2Nrc1Jlc3BvbnNlO1xuXHRcdFx0XHRjb25zdCBibG9ja1JlY29yZHM6IFJlY29yZDxzdHJpbmcsIFF1ZXJ5TG9jYWxBbmRHbG9iYWxCbG9ja3NSZXNwb25zZT4gPSB7fTtcblx0XHRcdFx0Zm9yIChjb25zdCB1c2VyIG9mIGJrdXNlcnMpIHtcblx0XHRcdFx0XHRibG9ja1JlY29yZHNbdXNlcl0gPSB7cXVlcnk6IHtibG9ja3M6IFtdfX07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10/LmJsb2Nrcykge1xuXHRcdFx0XHRcdG1hcmtMb2NhbEJsb2Nrcyh7cmVzcG9uc2UsIHVzZXJMaW5rc30pO1xuXG5cdFx0XHRcdFx0Zm9yIChjb25zdCBibG9jayBvZiByZXNwb25zZVsncXVlcnknXS5ibG9ja3MpIHtcblx0XHRcdFx0XHRcdGlmIChibG9jay51c2VyKSB7XG5cdFx0XHRcdFx0XHRcdGJsb2NrUmVjb3Jkc1tibG9jay51c2VyXT8ucXVlcnkuYmxvY2tzIS5wdXNoKGJsb2NrKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3IgKGNvbnN0IFt1c2VyLCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoYmxvY2tSZWNvcmRzKSkge1xuXHRcdFx0XHRcdG13LnN0b3JhZ2Uuc2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleUJsb2NrZWQgKyB1c2VyLCB2YWx1ZSwgNjAgKiA2MCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ1tNYXJrQmxvY2tlZF0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxuXG5cdHZvaWQgKGFzeW5jICgpID0+IHtcblx0XHRmb3IgKGNvbnN0IHByb21pc2Ugb2YgcHJvbWlzZXMpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGF3YWl0IHByb21pc2UoKTtcblx0XHRcdH0gY2F0Y2gge31cblx0XHR9XG5cdH0pKCk7XG59O1xuXG5jb25zdCBtYXJrQmxvY2tlZElQTGlua3MgPSAodXNlckxpbmtzOiBSZWNvcmQ8c3RyaW5nLCBKUXVlcnlbXT4pID0+IHtcblx0Ly8gQ29udmVydCB1c2VycyBpbnRvIGFycmF5XG5cdGNvbnN0IHVzZXJzOiBzdHJpbmdbXSA9IE9iamVjdC5rZXlzKHVzZXJMaW5rcyk7XG5cdGlmICghdXNlcnMubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcHJvbWlzZXM6ICgoKSA9PiBQcm9taXNlPHZvaWQ+KVtdID0gW107XG5cblx0Ly8gTG9jYWwgYW5kIGdsb2JhbCBJUCBibG9jayBxdWVyaWVzXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgdXNlcnMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBia3VzZXJzID0gdXNlcnMuc3BsaWNlKDAsIDI1KTtcblx0XHRpZiAoIWJrdXNlcnMubGVuZ3RoKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRmb3IgKGxldCBia2lwIG9mIGJrdXNlcnMpIHtcblx0XHRcdGlmICghbXcudXRpbC5pc0lQdjRBZGRyZXNzKGJraXApICYmICFtdy51dGlsLmlzSVB2NkFkZHJlc3MoYmtpcCkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChtdy51dGlsLmlzSVB2NkFkZHJlc3MoYmtpcCkpIHtcblx0XHRcdFx0YmtpcCA9IGJraXAudG9VcHBlckNhc2UoKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleUJsb2NrZWQgKyBia2lwKSkge1xuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IG13LnN0b3JhZ2UuZ2V0T2JqZWN0KFxuXHRcdFx0XHRcdE9QVElPTlMuc3RvcmFnZUtleUJsb2NrZWQgKyBia2lwXG5cdFx0XHRcdCkgYXMgUXVlcnlMb2NhbEFuZEdsb2JhbEJsb2Nrc1Jlc3BvbnNlO1xuXG5cdFx0XHRcdGlmIChyZXNwb25zZVsncXVlcnknXT8uYmxvY2tzKSB7XG5cdFx0XHRcdFx0bWFya0xvY2FsQmxvY2tzKHtyZXNwb25zZSwgdXNlckxpbmtzfSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0cHJvbWlzZXNbcHJvbWlzZXMubGVuZ3RoXSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRjb25zdCByZXNwb25zZSA9IChhd2FpdCBxdWVyeUlQQmxvY2tzKGJraXApKSBhcyBRdWVyeUxvY2FsQW5kR2xvYmFsQmxvY2tzUmVzcG9uc2U7XG5cblx0XHRcdFx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10/LmJsb2Nrcykge1xuXHRcdFx0XHRcdFx0bWFya0xvY2FsQmxvY2tzKHtyZXNwb25zZSwgdXNlckxpbmtzLCBia2lwfSk7XG5cblx0XHRcdFx0XHRcdGZvciAoY29uc3QgYmxvY2sgb2YgcmVzcG9uc2VbJ3F1ZXJ5J10uYmxvY2tzKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChibG9jay51c2VyKSB7XG5cdFx0XHRcdFx0XHRcdFx0bXcuc3RvcmFnZS5zZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5QmxvY2tlZCArIGJsb2NrLnVzZXIsIHJlc3BvbnNlLCA2MCAqIDYwKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCdbTWFya0Jsb2NrZWRdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblx0fVxuXG5cdHZvaWQgKGFzeW5jICgpID0+IHtcblx0XHRmb3IgKGNvbnN0IHByb21pc2Ugb2YgcHJvbWlzZXMpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGF3YWl0IHByb21pc2UoKTtcblx0XHRcdH0gY2F0Y2gge31cblx0XHR9XG5cdH0pKCk7XG59O1xuXG5leHBvcnQge21hcmtCbG9ja2VkVXNlckxpbmtzLCBtYXJrQmxvY2tlZElQTGlua3N9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7TXdVcml9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2dlbmVyYXRlVXNlck5hbWVzcGFjZVRpdGxlc30gZnJvbSAnLi9nZW5lcmF0ZVVzZXJOYW1lc3BhY2VUaXRsZXMnO1xuXG4vLyBHZXQgYWxsIGFsaWFzZXMgZm9yIHVzZXI6ICYgdXNlcl90YWxrOlxuY29uc3QgdXNlck5hbWVzcGFjZVRpdGxlczogc3RyaW5nW10gPSBnZW5lcmF0ZVVzZXJOYW1lc3BhY2VUaXRsZXMoKTtcbi8vIFJlZ0V4cCBmb3IgYWxsIHRpdGxlcyB0aGF0IGFyZSAgVXNlcjp8IFVzZXJfdGFsazogfCBTcGVjaWFsOkNvbnRyaWJ1dGlvbnMvIChmb3IgdXNlcnNjcmlwdHMpXG5jb25zdCB1c2VyVGl0bGVSZWdleDogUmVnRXhwID0gbmV3IFJlZ0V4cChcblx0YF4oJHt1c2VyTmFtZXNwYWNlVGl0bGVzLmpvaW4oJ3wnKX18JHtPUFRJT05TLmNvbnRyaWJ1dGlvbnNQYWdlQWxpYXN9XFxcXC8pKyhbXlxcXFwvI10rKSRgLFxuXHQnaSdcbik7XG5cbi8vIFJlZ0V4cCBmb3IgbGlua3Ncbi8vIGFydGljbGVSZWdleCBhbHNvIG1hdGNoZXMgZXh0ZXJuYWwgbGlua3MgaW4gb3JkZXIgdG8gc3VwcG9ydCB0aGUgbm9waW5nIHRlbXBsYXRlXG5jb25zdCB7d2dBcnRpY2xlUGF0aCwgd2dTY3JpcHR9ID0gbXcuY29uZmlnLmdldCgpO1xuY29uc3QgYXJ0aWNsZVJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKGAke3dnQXJ0aWNsZVBhdGgucmVwbGFjZSgnJDEnLCAnJyl9KFteI10rKWApO1xuY29uc3Qgc2NyaXB0UmVnZXg6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoYF4ke3dnU2NyaXB0fVxcXFw/dGl0bGU9KFteIyZdKylgKTtcblxuY29uc3QgZ2VuZXJhdGVVc2VyTGlua3MgPSAoJGNvbnRlbnQ6IEpRdWVyeSk6IFJlY29yZDxzdHJpbmcsIEpRdWVyeVtdPiA9PiB7XG5cdC8vIEZpbmQgYWxsIFwidXNlclwiIGxpbmtzIGFuZCBzYXZlIHRoZW0gaW4gdXNlckxpbmtzIDogeyAndXNlcnMnOiBbPGxpbmsxPiwgPGxpbmsyPiwgLi4uXSwgJ3VzZXIyJzogWzxsaW5rMz4sIDxsaW5rMz4sIC4uLl0sIC4uLiB9XG5cdGNvbnN0IHVzZXJMaW5rczogUmVjb3JkPHN0cmluZywgSlF1ZXJ5W10+ID0ge307XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRjb250ZW50LmZpbmQoJ2EnKSkge1xuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+ID0gJChlbGVtZW50KTtcblx0XHRpZiAoXG5cdFx0XHQkZWxlbWVudC5oYXNDbGFzcygnbXctY2hhbmdlc2xpc3QtZGF0ZScpIHx8XG5cdFx0XHQkZWxlbWVudC5oYXNDbGFzcygnZXh0LWRpc2N1c3Npb250b29scy1pbml0LXRpbWVzdGFtcGxpbmsnKSB8fFxuXHRcdFx0JGVsZW1lbnQucGFyZW50KCdzcGFuJykuaGFzQ2xhc3MoJ213LWhpc3RvcnktdW5kbycpIHx8XG5cdFx0XHQkZWxlbWVudC5wYXJlbnQoJ3NwYW4nKS5oYXNDbGFzcygnbXctcm9sbGJhY2stbGluaycpXG5cdFx0KSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBocmVmOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkZWxlbWVudC5hdHRyKCdocmVmJyk7XG5cdFx0aWYgKCFocmVmKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0aWYgKG13LnV0aWwuaXNJUHY2QWRkcmVzcyhocmVmLnJlcGxhY2UoL14oPzpodHRwcz86XFwvXFwvKS9pLCAnJykpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0dHJ5IHtcblx0XHRcdC8vIE1heWJlIGFic29sdXRlIFVSTFxuXHRcdFx0aWYgKG5ldyBNd1VyaShocmVmKS5ob3N0ICE9PSBsb2NhdGlvbi5ob3N0KSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Ly8gTWF5YmUgcmVsYXRpdmUgVVJMXG5cdFx0XHRcdGlmIChuZXcgTXdVcmkobG9jYXRpb24uaHJlZiArIGhyZWYpLmhvc3QgIT09IGxvY2F0aW9uLmhvc3QpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGxldCBwYWdlVGl0bGU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0XHRpZiAoYXJ0aWNsZVJlZ2V4LnRlc3QoaHJlZikpIHtcblx0XHRcdGNvbnN0IG1hdGNoOiBSZWdFeHBFeGVjQXJyYXkgPSBhcnRpY2xlUmVnZXguZXhlYyhocmVmKSBhcyBSZWdFeHBFeGVjQXJyYXk7XG5cdFx0XHRwYWdlVGl0bGUgPSBtYXRjaFsxXSBhcyBzdHJpbmc7XG5cdFx0fSBlbHNlIGlmIChzY3JpcHRSZWdleC50ZXN0KGhyZWYpKSB7XG5cdFx0XHRjb25zdCBtYXRjaDogUmVnRXhwRXhlY0FycmF5ID0gc2NyaXB0UmVnZXguZXhlYyhocmVmKSBhcyBSZWdFeHBFeGVjQXJyYXk7XG5cdFx0XHRwYWdlVGl0bGUgPSBtYXRjaFsxXSBhcyBzdHJpbmc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHBhZ2VUaXRsZSA9IGRlY29kZVVSSUNvbXBvbmVudChwYWdlVGl0bGUpLnJlcGxhY2UoL18vZywgJyAnKTtcblxuXHRcdGNvbnN0IHVzZXJFeGVjQXJyYXk6IFJlZ0V4cEV4ZWNBcnJheSB8IG51bGwgPSB1c2VyVGl0bGVSZWdleC5leGVjKHBhZ2VUaXRsZSk7XG5cdFx0aWYgKCF1c2VyRXhlY0FycmF5IHx8IHR5cGVvZiB1c2VyRXhlY0FycmF5WzJdICE9PSAnc3RyaW5nJykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0bGV0IHVzZXI6IHN0cmluZyA9IHVzZXJFeGVjQXJyYXlbMl0uc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKSArIHVzZXJFeGVjQXJyYXlbMl0uc2xpY2UoMSk7XG5cdFx0aWYgKG13LnV0aWwuaXNJUHY2QWRkcmVzcyh1c2VyKSkge1xuXHRcdFx0dXNlciA9IHVzZXIudG9VcHBlckNhc2UoKTtcblx0XHR9XG5cblx0XHR1c2VyTGlua3NbdXNlcl0gPz89IFtdO1xuXG5cdFx0KHVzZXJMaW5rc1t1c2VyXSBhcyAodHlwZW9mIHVzZXJMaW5rcylba2V5b2YgdHlwZW9mIHVzZXJMaW5rc10pW1xuXHRcdFx0KHVzZXJMaW5rc1t1c2VyXSBhcyAodHlwZW9mIHVzZXJMaW5rcylba2V5b2YgdHlwZW9mIHVzZXJMaW5rc10pLmxlbmd0aFxuXHRcdF0gPSAkZWxlbWVudDsgLy8gUmVwbGFjZSBBcnJheSNwdXNoIHRvIGF2b2lkIGNvcmUtanMgcG9seWZpbGxpbmdcblx0fVxuXG5cdHJldHVybiB1c2VyTGlua3M7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlVXNlckxpbmtzfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5cbmNvbnN0IGdlbmVyYXRlVXNlck5hbWVzcGFjZVRpdGxlcyA9ICgpOiBzdHJpbmdbXSA9PiB7XG5cdGNvbnN0IHt3Z05hbWVzcGFjZUlkc30gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y29uc3QgdXNlck5hbWVzcGFjZVRpdGxlczogc3RyaW5nW10gPSBbXTtcblxuXHRmb3IgKGNvbnN0IFtuYW1lc3BhY2UsIGlkXSBvZiBPYmplY3QuZW50cmllcyh3Z05hbWVzcGFjZUlkcykpIHtcblx0XHRpZiAoIU9QVElPTlMudXNlck5hbWVzcGFjZU51bWJlcnMuaW5jbHVkZXMoaWQpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHR1c2VyTmFtZXNwYWNlVGl0bGVzW3VzZXJOYW1lc3BhY2VUaXRsZXMubGVuZ3RoXSA9IGAke213LnV0aWwuZXNjYXBlUmVnRXhwKG5hbWVzcGFjZS5yZXBsYWNlKC9fL2csICcgJykpfTpgOyAvLyBSZXBsYWNlIEFycmF5I3B1c2ggdG8gYXZvaWQgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXHR9XG5cblx0cmV0dXJuIHVzZXJOYW1lc3BhY2VUaXRsZXM7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlVXNlck5hbWVzcGFjZVRpdGxlc307XG4iLCAiaW1wb3J0IHttYXJrQmxvY2tlZElQTGlua3MsIG1hcmtCbG9ja2VkVXNlckxpbmtzfSBmcm9tICcuL3V0aWwvbWFya1VzZXJMaW5rcyc7XG5pbXBvcnQge2dlbmVyYXRlVXNlckxpbmtzfSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVVc2VyTGlua3MnO1xuXG5jb25zdCBtYXJrQmxvY2tlZFVzZXIgPSAoJGNvbnRlbnQ6IEpRdWVyeSk6IHZvaWQgPT4ge1xuXHQvLyBGaW5kIGFsbCBcInVzZXJcIiBsaW5rcyBhbmQgc2F2ZSB0aGVtIGluIHVzZXJMaW5rcyA6IHsgJ3VzZXJzJzogWzxsaW5rMT4sIDxsaW5rMj4sIC4uLl0sICd1c2VyMic6IFs8bGluazM+LCA8bGluazM+LCAuLi5dLCAuLi4gfVxuXHRjb25zdCB1c2VyTGlua3M6IFJlY29yZDxzdHJpbmcsIEpRdWVyeVtdPiA9IGdlbmVyYXRlVXNlckxpbmtzKCRjb250ZW50KTtcblxuXHRtYXJrQmxvY2tlZFVzZXJMaW5rcyh1c2VyTGlua3MpO1xuXHRtYXJrQmxvY2tlZElQTGlua3ModXNlckxpbmtzKTtcbn07XG5cbmV4cG9ydCB7bWFya0Jsb2NrZWRVc2VyfTtcbiIsICJpbXBvcnQge21hcmtCbG9ja2VkVXNlcn0gZnJvbSAnLi9tYXJrQmxvY2tlZFVzZXInO1xuXG5jb25zdCB7d2dBY3Rpb24sIHdnTmFtZXNwYWNlTnVtYmVyfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuY29uc3QgYWRkSG9vayA9ICgpOiB2b2lkID0+IHtcblx0bGV0IGlzSW5pdDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdG13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5hZGQoZnVuY3Rpb24gbWFya0Jsb2NrZWQoJGNvbnRlbnQpOiB2b2lkIHtcblx0XHRpZiAoaXNJbml0KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlzSW5pdCA9IHRydWU7XG5cblx0XHQvLyBPbiB0aGUgZmlyc3QgY2FsbCBhZnRlciBpbml0aWFsIHBhZ2UgbG9hZCwgY29udGFpbmVyIGlzIG13LnV0aWwuJGNvbnRlbnRcblx0XHQvLyBVc2VkIHRvIGxpbWl0IG1haW5zcGFjZSBhY3Rpdml0eSB0byBqdXN0IHRoZSBkaWZmIGRlZmluaXRpb25zXG5cdFx0aWYgKHdnQWN0aW9uID09PSAndmlldycgJiYgd2dOYW1lc3BhY2VOdW1iZXIgPT09IDApIHtcblx0XHRcdCRjb250ZW50ID0gJGNvbnRlbnQuZmluZCgnLmRpZmYtdGl0bGUnKTtcblx0XHR9XG5cdFx0Ly8gT24gcGFnZSBsb2FkLCBhbHNvIHVwZGF0ZSB0aGUgbmFtZXNwYWNlIHRhYlxuXHRcdCRjb250ZW50ID0gJGNvbnRlbnQuYWRkKCcjY2EtbnN0YWItdXNlcicpO1xuXG5cdFx0bWFya0Jsb2NrZWRVc2VyKCRjb250ZW50KTtcblx0fSk7XG59O1xuXG5leHBvcnQge2FkZEhvb2t9O1xuIiwgImNvbnN0IGNsZWFyT2xkS2V5cyA9ICgpOiB2b2lkID0+IHtcblx0aWYgKG13LnN0b3JhZ2UuZ2V0T2JqZWN0KCdleHQuZ2FkZ2V0Lk1hcmtCbG9ja2VkX29sZEtleXNDbGVhcmVkJykpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRmb3IgKGNvbnN0IGtleSBpbiBsb2NhbFN0b3JhZ2UpIHtcblx0XHRpZiAoT2JqZWN0Lmhhc093bihsb2NhbFN0b3JhZ2UsIGtleSkpIHtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL25vLWxvbmVseS1pZlxuXHRcdFx0aWYgKFxuXHRcdFx0XHRrZXkuc3RhcnRzV2l0aCgnZXh0LmdhZGdldC5NYXJrQmxvY2tlZF9pc0xvY2tlZC0nKSB8fFxuXHRcdFx0XHRrZXkuc3RhcnRzV2l0aCgnX0VYUElSWV9leHQuZ2FkZ2V0Lk1hcmtCbG9ja2VkX2lzTG9ja2VkLScpXG5cdFx0XHQpIHtcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gaWYgKFxuXHRcdFx0Ly8gXHRrZXkuc3RhcnRzV2l0aCgnZXh0LmdhZGdldC5NYXJrQmxvY2tlZF9pc0Jsb2NrZWQtJykgfHxcblx0XHRcdC8vIFx0a2V5LnN0YXJ0c1dpdGgoJ19FWFBJUllfZXh0LmdhZGdldC5NYXJrQmxvY2tlZF9pc0Jsb2NrZWQtJylcblx0XHRcdC8vICkge1xuXHRcdFx0Ly8gXHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuXHRcdFx0Ly8gfVxuXHRcdH1cblx0fVxuXG5cdG13LnN0b3JhZ2Uuc2V0T2JqZWN0KCdleHQuZ2FkZ2V0Lk1hcmtCbG9ja2VkX29sZEtleXNDbGVhcmVkJywgdHJ1ZSk7XG59O1xuXG5leHBvcnQge2NsZWFyT2xkS2V5c307XG4iLCAiaW1wb3J0IHthZGRIb29rfSBmcm9tICcuL21vZHVsZXMvYWRkSG9vayc7XG5pbXBvcnQge2NsZWFyT2xkS2V5c30gZnJvbSAnLi9tb2R1bGVzL3V0aWwvY2xlYXJPbGRLZXlzJztcblxuaWYgKCFbJ2VkaXQnLCAnc3VibWl0J10uaW5jbHVkZXMobXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKSkpIHtcblx0YWRkSG9vaygpO1xufVxuXG4vLyBhZGQgYSBvbmUtdGltZSBmdW5jdGlvbiB0byBjbGVhciBvbGQgbG9jYWxTdG9yYWdlIGtleXNcbmlmICghbXcuc3RvcmFnZS5nZXRPYmplY3QoJ2V4dC5nYWRnZXQuTWFya0Jsb2NrZWRfb2xkS2V5c0NsZWFyZWQnKSkge1xuXHR2b2lkIGNsZWFyT2xkS2V5cygpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEseUJBQTBCO0FBQzFCLElBQUFDLHVCQUF3QixDQUFDLEdBQUcsQ0FBQztBQUM3QixJQUFBQyxvQkFBcUI7QUFDckIsSUFBQUMsVUFBVzs7QUNIWixJQUFBQyxvQkFBd0JDLFFBQUEsaUJBQUE7QUFFeEIsSUFBTUMsT0FBQSxHQUFjRixrQkFBQUcsV0FBQSxlQUFBQyxPQUFpQ0wsT0FBTyxDQUFFOztBQ0Q5RCxJQUFNTSxnQkFBQSw0QkFBQTtBQUFBLE1BQUFDLE9BQUFDLGtCQUFnQixXQUFPQyxNQUFpQjtBQUM3QyxVQUFNQyxTQUErQjtNQUNwQ0MsUUFBUTtNQUNSQyxRQUFRO01BQ1JDLGVBQWU7TUFDZkMsTUFBTTtNQUNOTDtNQUNBTSxTQUFTO01BQ1RDLFFBQVEsQ0FBQyxNQUFNLFVBQVUsVUFBVSxnQkFBZ0IsYUFBYSxNQUFNO01BQ3RFQyxTQUFTO01BQ1RDLFFBQVE7SUFDVDtBQUVBLFdBQUEsTUFBYWYsSUFBSWdCLElBQUlULE1BQU07RUFDNUIsQ0FBQTtBQUFBLFNBQUEsU0FkTUosZUFBQWMsSUFBQTtBQUFBLFdBQUFiLEtBQUFjLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsR0FBQTtBQWdCTixJQUFNQyxrQkFBQSw0QkFBQTtBQUFBLE1BQUFDLFFBQUFoQixrQkFB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QUFHO0FBRXJDLFVBQ0NBLElBQUlzQyxXQUFXLGtDQUFrQyxLQUNqRHRDLElBQUlzQyxXQUFXLDBDQUEwQyxHQUN4RDtBQUNEaUgscUJBQWFFLFdBQVd6SixHQUFHO01BQzVCO0lBUUQ7RUFDRDtBQUVBOEQsS0FBR0MsUUFBUW9CLFVBQVUseUNBQXlDLElBQUk7QUFDbkU7O0FDdEJBLElBQUksQ0FBQyxDQUFDLFFBQVEsUUFBUSxFQUFFNEIsU0FBU2pELEdBQUcyQyxPQUFPN0gsSUFBSSxVQUFVLENBQUMsR0FBRztBQUM1RHFLLFVBQVE7QUFDVDtBQUdBLElBQUksQ0FBQ25GLEdBQUdDLFFBQVFDLFVBQVUsdUNBQXVDLEdBQUc7QUFDbkUsT0FBS3NGLGFBQWE7QUFDbkI7IiwKICAibmFtZXMiOiBbImNvbnRyaWJ1dGlvbnNQYWdlQWxpYXMiLCAidXNlck5hbWVzcGFjZU51bWJlcnMiLCAic3RvcmFnZUtleUJsb2NrZWQiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgInF1ZXJ5SVBCbG9ja3MiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJia2lwIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAibGlzdCIsICJia2xpbWl0IiwgImJrcHJvcCIsICJzbWF4YWdlIiwgIm1heGFnZSIsICJnZXQiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgInF1ZXJ5VXNlckJsb2NrcyIsICJfcmVmMiIsICJia3VzZXJzIiwgIl94MiIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImluZmluaXR5IiwgImxvY2FsaXplIiwgImVuIiwgIkJsb2NrZWQiLCAicGFydGlhbCIsICJ6aCIsICJkIiwgInMiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImFkZFplcm8iLCAidiIsICJpbkhvdXJzIiwgIm1zIiwgIm1tIiwgIk1hdGgiLCAiZmxvb3IiLCAiaGgiLCAiZGQiLCAicGFyc2VUUyIsICJzdHJpbmciLCAibSIsICJyZXBsYWNlIiwgIm1hdGNoIiwgIkRhdGUiLCAiVVRDIiwgImdldFRpbWUiLCAidXNlcmxpbmtJbmRlZiIsICJ1c2VybGlua1BhcnRpYWwiLCAidXNlcmxpbmtUZW1wIiwgIm1hcmtMb2NhbEJsb2NrcyIsICJyZXNwb25zZSIsICJ1c2VyTGlua3MiLCAiX3Jlc3BvbnNlJHF1ZXJ5IiwgImJsb2NrcyIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAibiIsICJkb25lIiwgImJsb2NrIiwgInZhbHVlIiwgImlzUGFydGlhbEJsY29rIiwgInJlc3RyaWN0aW9ucyIsICJjbGFzc05hbWUiLCAiYmxvY2tUaW1lIiwgImV4cGlyeSIsICJzdGFydHNXaXRoIiwgInRpbWVzdGFtcCIsICJ0aXAiLCAiYnkiLCAicmVhc29uIiwgIm5vdyIsICIkbGlua3MiLCAidXNlciIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICIkbGluayIsICJhZGRDbGFzcyIsICJhdHRyIiwgImVyciIsICJlIiwgImYiLCAibWFya0Jsb2NrZWRVc2VyTGlua3MiLCAidXNlcnMiLCAiT2JqZWN0IiwgImtleXMiLCAibGVuZ3RoIiwgInByb21pc2VzIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgIm13IiwgInN0b3JhZ2UiLCAiZ2V0T2JqZWN0IiwgIl9yZXNwb25zZSRxdWVyeTMiLCAiX3Jlc3BvbnNlJHF1ZXJ5NCIsICJmaWx0ZXIiLCAiZWxlbWVudCIsICJpIiwgInNwbGljZSIsICJfcmVzcG9uc2UkcXVlcnkyIiwgImJsb2NrUmVjb3JkcyIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJxdWVyeSIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJfYmxvY2tSZWNvcmRzJGJsb2NrJHUiLCAicHVzaCIsICJfaSIsICJfT2JqZWN0JGVudHJpZXMiLCAiZW50cmllcyIsICJzZXRPYmplY3QiLCAiZXJyb3IiLCAiY29uc29sZSIsICJfaTIiLCAiX3Byb21pc2VzIiwgInByb21pc2UiLCAibWFya0Jsb2NrZWRJUExpbmtzIiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgInV0aWwiLCAiaXNJUHY0QWRkcmVzcyIsICJpc0lQdjZBZGRyZXNzIiwgInRvVXBwZXJDYXNlIiwgIl9yZXNwb25zZSRxdWVyeTUiLCAiX3Jlc3BvbnNlJHF1ZXJ5NiIsICJfaXRlcmF0b3I3IiwgIl9zdGVwNyIsICJfaTMiLCAiX3Byb21pc2VzMiIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiZ2VuZXJhdGVVc2VyTmFtZXNwYWNlVGl0bGVzIiwgIndnTmFtZXNwYWNlSWRzIiwgImNvbmZpZyIsICJ1c2VyTmFtZXNwYWNlVGl0bGVzMiIsICJfaTQiLCAiX09iamVjdCRlbnRyaWVzMiIsICJuYW1lc3BhY2UiLCAiaWQiLCAiaW5jbHVkZXMiLCAiZXNjYXBlUmVnRXhwIiwgInVzZXJOYW1lc3BhY2VUaXRsZXMiLCAidXNlclRpdGxlUmVnZXgiLCAiUmVnRXhwIiwgImpvaW4iLCAid2dBcnRpY2xlUGF0aCIsICJ3Z1NjcmlwdCIsICJhcnRpY2xlUmVnZXgiLCAic2NyaXB0UmVnZXgiLCAiZ2VuZXJhdGVVc2VyTGlua3MiLCAiJGNvbnRlbnQiLCAiX2l0ZXJhdG9yOCIsICJmaW5kIiwgIl9zdGVwOCIsICJfdXNlciIsICJfdXNlckxpbmtzJF91c2VyIiwgIiRlbGVtZW50IiwgIiQiLCAiaGFzQ2xhc3MiLCAicGFyZW50IiwgImhyZWYiLCAiTXdVcmkiLCAiaG9zdCIsICJsb2NhdGlvbiIsICJwYWdlVGl0bGUiLCAidGVzdCIsICJleGVjIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJ1c2VyRXhlY0FycmF5IiwgInNsaWNlIiwgIm1hcmtCbG9ja2VkVXNlciIsICJ3Z0FjdGlvbiIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJhZGRIb29rIiwgImlzSW5pdCIsICJob29rIiwgImFkZCIsICJtYXJrQmxvY2tlZCIsICJjbGVhck9sZEtleXMiLCAibG9jYWxTdG9yYWdlIiwgImhhc093biIsICJyZW1vdmVJdGVtIl0KfQo=
