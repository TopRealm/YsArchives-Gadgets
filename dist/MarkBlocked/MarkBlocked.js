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
//! src/MarkBlocked/options.json
var contributionsPageAlias = "Special:Contributions";
var userNamespaceNumbers = [2, 3];
var storageKeyLocked = "ext.gadget.MarkBlocked_isLocked-";
var storageKeyBlocked = "ext.gadget.MarkBlocked_isBlocked-";
var version = "2.0";
//! src/MarkBlocked/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    infinity: (0, import_ext_gadget.localize)({
      en: "infinity",
      "zh-hans": "无限期",
      "zh-hant": "無限期"
    }),
    Blocked: (0, import_ext_gadget.localize)({
      en: "; $5blocked ($1) by $2: $3 ($4 ago)",
      "zh-hans": "；由$2$5封禁$1：$3（$4前）",
      "zh-hant": "；由$2$5封鎖$1：$3（$4前）"
    }),
    "Globally Blocked": (0, import_ext_gadget.localize)({
      en: "; $5blocked globally ($1) by $2: $3 ($4 ago)",
      "zh-hans": "；由$2$5全域封禁$1：$3（$4前）",
      "zh-hant": "；由$2$5全域封鎖$1：$3（$4前）"
    }),
    Locked: (0, import_ext_gadget.localize)({
      en: "; Locked",
      "zh-hans": "；已全域锁定",
      "zh-hant": "；已全域鎖定"
    }),
    partial: (0, import_ext_gadget.localize)({
      en: "partial ",
      zh: "部分"
    }),
    d: (0, import_ext_gadget.localize)({
      en: "day",
      zh: "天"
    }),
    s: (0, import_ext_gadget.localize)({
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
var userlinkLocked = "MarkBlocked-module__userlinkLocked_xtAfOG__4100";
var userlinkPartial = "MarkBlocked-module__userlinkPartial_xtAfOG__4100";
var userlinkTemp = "MarkBlocked-module__userlinkTemp_xtAfOG__4100";
//! src/MarkBlocked/modules/util/markLinks.ts
var markGlobalLockedLinks = ({
  response,
  userLinks
}) => {
  var _response$query, _response$query$globa, _response$query$globa2;
  if (!((_response$query = response["query"]) !== null && _response$query !== void 0 && _response$query.globaluserinfo)) {
    return;
  }
  const user = (_response$query$globa = response["query"].globaluserinfo) === null || _response$query$globa === void 0 ? void 0 : _response$query$globa.name;
  const locked = (_response$query$globa2 = response["query"].globaluserinfo) === null || _response$query$globa2 === void 0 ? void 0 : _response$query$globa2.locked;
  if (!locked || !user) {
    return;
  }
  const tip = getMessage("Locked");
  const $links = userLinks[user];
  if (!$links) {
    return;
  }
  const className = userlinkLocked;
  var _iterator = _createForOfIteratorHelper($links), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const $link = _step.value;
      $link.addClass(className).attr("title", $link.attr("title") + tip);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
var markLocalBlocks = ({
  response,
  userLinks,
  bkip
}) => {
  var _response$query2;
  if (!((_response$query2 = response["query"]) !== null && _response$query2 !== void 0 && _response$query2.blocks)) {
    return;
  }
  var _iterator2 = _createForOfIteratorHelper(response["query"].blocks), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      const block = _step2.value;
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
      var _iterator3 = _createForOfIteratorHelper($links), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          const $link = _step3.value;
          $link.addClass(className).attr("title", $link.attr("title") + tip);
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
var markGlobalBlocks = ({
  response,
  userLinks,
  bkip
}) => {
  var _response$query3;
  if (!((_response$query3 = response["query"]) !== null && _response$query3 !== void 0 && _response$query3.globalblocks)) {
    return;
  }
  var _iterator4 = _createForOfIteratorHelper(response["query"].globalblocks), _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
      const block = _step4.value;
      let className = userlinkPartial;
      let blockTime = "";
      if (block.expiry.startsWith("in")) {
        className = userlinkIndef;
        blockTime = getMessage("infinity");
      } else {
        className = userlinkTemp;
        blockTime = inHours(parseTS(block.expiry) - parseTS(block.timestamp));
      }
      let tip = getMessage("Globally Blocked").replace("$1", blockTime).replace("$2", block.by).replace("$3", block.reason).replace("$4", inHours(Date.now() - parseTS(block.timestamp)));
      tip = tip.replace("$5", "");
      const $links = userLinks[bkip !== null && bkip !== void 0 ? bkip : block.target];
      if (!$links) {
        continue;
      }
      var _iterator5 = _createForOfIteratorHelper($links), _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
          const $link = _step5.value;
          $link.addClass(className).attr("title", $link.attr("title") + tip);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
};
//! src/MarkBlocked/modules/util/api.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var api = (0, import_ext_gadget2.initMwApi)("MarkBlocked/".concat(version));
//! src/MarkBlocked/modules/util/query.ts
var queryGlobalUserInfo = /* @__PURE__ */ (function() {
  var _ref = _asyncToGenerator(function* (guiuser) {
    const params = {
      action: "query",
      format: "json",
      formatversion: "2",
      meta: ["globaluserinfo"],
      guiuser,
      smaxage: 600,
      maxage: 600
    };
    return yield api.get(params);
  });
  return function queryGlobalUserInfo2(_x) {
    return _ref.apply(this, arguments);
  };
})();
var queryIPBlocks = /* @__PURE__ */ (function() {
  var _ref2 = _asyncToGenerator(function* (bkip) {
    const params = {
      action: "query",
      format: "json",
      formatversion: "2",
      list: ["blocks", "globalblocks"],
      bkip,
      bklimit: 100,
      bkprop: ["by", "expiry", "reason", "restrictions", "timestamp", "user"],
      bgip: bkip,
      bglimit: 100,
      bgprop: ["by", "expiry", "reason", "timestamp", "target"],
      smaxage: 600,
      maxage: 600
    };
    return yield api.get(params);
  });
  return function queryIPBlocks2(_x2) {
    return _ref2.apply(this, arguments);
  };
})();
var queryUserBlocks = /* @__PURE__ */ (function() {
  var _ref3 = _asyncToGenerator(function* (bkusers) {
    const params = {
      action: "query",
      format: "json",
      formatversion: "2",
      list: ["blocks", "globalblocks"],
      bkusers,
      bklimit: 100,
      bkprop: ["by", "expiry", "reason", "restrictions", "timestamp", "user"],
      bglimit: 100,
      bgtargets: bkusers,
      bgprop: ["by", "expiry", "reason", "timestamp", "target"],
      smaxage: 600,
      maxage: 600
    };
    return yield api.get(params);
  });
  return function queryUserBlocks2(_x3) {
    return _ref3.apply(this, arguments);
  };
})();
//! src/MarkBlocked/modules/util/markUserLinks.ts
var markGlobalLockedUserLinks = (userLinks) => {
  const users = Object.keys(userLinks);
  if (!users.length) {
    return;
  }
  const promises = [];
  for (var _i = 0, _users = users; _i < _users.length; _i++) {
    const guiuser = _users[_i];
    if (mw.util.isIPv4Address(guiuser) || mw.util.isIPv6Address(guiuser)) {
      continue;
    }
    if (mw.storage.getObject(storageKeyLocked + guiuser)) {
      var _response$query4;
      const response = mw.storage.getObject(storageKeyLocked + guiuser);
      if ((_response$query4 = response["query"]) !== null && _response$query4 !== void 0 && _response$query4.globaluserinfo) {
        markGlobalLockedLinks({
          response,
          userLinks
        });
        continue;
      }
    }
    promises[promises.length] = /* @__PURE__ */ _asyncToGenerator(function* () {
      try {
        const response = yield queryGlobalUserInfo(guiuser);
        markGlobalLockedLinks({
          response,
          userLinks
        });
        mw.storage.setObject(storageKeyLocked + guiuser, response, 60 * 60 * 24);
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
var markBlockedUserLinks = (userLinks) => {
  let users = Object.keys(userLinks);
  if (!users.length) {
    return;
  }
  const promises = [];
  var _iterator6 = _createForOfIteratorHelper(users), _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
      const user = _step6.value;
      if (mw.storage.getObject(storageKeyBlocked + user)) {
        var _response$query7, _response$query8;
        const response = mw.storage.getObject(storageKeyBlocked + user);
        if ((_response$query7 = response["query"]) !== null && _response$query7 !== void 0 && _response$query7.blocks || (_response$query8 = response["query"]) !== null && _response$query8 !== void 0 && _response$query8.globalblocks) {
          var _response$query9, _response$query0;
          if ((_response$query9 = response["query"]) !== null && _response$query9 !== void 0 && _response$query9.blocks) {
            markLocalBlocks({
              response,
              userLinks
            });
          }
          if ((_response$query0 = response["query"]) !== null && _response$query0 !== void 0 && _response$query0.globalblocks) {
            markGlobalBlocks({
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
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
  for (let i = 0; i < users.length; i++) {
    const bkusers = users.splice(0, 25);
    if (!bkusers.length) {
      continue;
    }
    promises[promises.length] = /* @__PURE__ */ _asyncToGenerator(function* () {
      try {
        var _response$query5, _response$query6;
        const response = yield queryUserBlocks(bkusers);
        if ((_response$query5 = response["query"]) !== null && _response$query5 !== void 0 && _response$query5.blocks) {
          markLocalBlocks({
            response,
            userLinks
          });
          var _iterator7 = _createForOfIteratorHelper(response["query"].blocks), _step7;
          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
              const block = _step7.value;
              if (block.user) {
                mw.storage.setObject(storageKeyLocked + block.user, response, 60 * 60);
              }
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
        }
        if ((_response$query6 = response["query"]) !== null && _response$query6 !== void 0 && _response$query6.globalblocks) {
          markGlobalBlocks({
            response,
            userLinks
          });
          var _iterator8 = _createForOfIteratorHelper(response["query"].globalblocks), _step8;
          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
              const block = _step8.value;
              if (block.target) {
                mw.storage.setObject(storageKeyLocked + block.target, response, 60 * 60);
              }
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
        }
      } catch (error) {
        console.error("[MarkBlocked] Ajax error:", error);
      }
    });
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
    var _iterator9 = _createForOfIteratorHelper(bkusers), _step9;
    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
        let bkip = _step9.value;
        if (!mw.util.isIPv4Address(bkip) && !mw.util.isIPv6Address(bkip)) {
          continue;
        }
        if (mw.util.isIPv6Address(bkip)) {
          bkip = bkip.toUpperCase();
        }
        if (mw.storage.getObject(storageKeyBlocked + bkip)) {
          var _response$query1, _response$query10;
          const response = mw.storage.getObject(storageKeyBlocked + bkip);
          if ((_response$query1 = response["query"]) !== null && _response$query1 !== void 0 && _response$query1.blocks) {
            markLocalBlocks({
              response,
              userLinks
            });
          }
          if ((_response$query10 = response["query"]) !== null && _response$query10 !== void 0 && _response$query10.globalblocks) {
            markGlobalBlocks({
              response,
              userLinks
            });
          }
          continue;
        }
        promises[promises.length] = /* @__PURE__ */ _asyncToGenerator(function* () {
          try {
            var _response$query11, _response$query12;
            const response = yield queryIPBlocks(bkip);
            if ((_response$query11 = response["query"]) !== null && _response$query11 !== void 0 && _response$query11.blocks) {
              markLocalBlocks({
                response,
                userLinks,
                bkip
              });
              var _iterator0 = _createForOfIteratorHelper(response["query"].blocks), _step0;
              try {
                for (_iterator0.s(); !(_step0 = _iterator0.n()).done; ) {
                  const block = _step0.value;
                  if (block.user) {
                    mw.storage.setObject(storageKeyLocked + block.user, response, 60 * 60);
                  }
                }
              } catch (err) {
                _iterator0.e(err);
              } finally {
                _iterator0.f();
              }
            }
            if ((_response$query12 = response["query"]) !== null && _response$query12 !== void 0 && _response$query12.globalblocks) {
              markGlobalBlocks({
                response,
                userLinks,
                bkip
              });
              var _iterator1 = _createForOfIteratorHelper(response["query"].globalblocks), _step1;
              try {
                for (_iterator1.s(); !(_step1 = _iterator1.n()).done; ) {
                  const block = _step1.value;
                  if (block.target) {
                    mw.storage.setObject(storageKeyLocked + block.target, response, 60 * 60);
                  }
                }
              } catch (err) {
                _iterator1.e(err);
              } finally {
                _iterator1.f();
              }
            }
          } catch (error) {
            console.error("[MarkBlocked] Ajax error:", error);
          }
        });
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }
  }
  void _asyncToGenerator(function* () {
    for (var _i4 = 0, _promises3 = promises; _i4 < _promises3.length; _i4++) {
      const promise = _promises3[_i4];
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
  for (var _i5 = 0, _Object$entries = Object.entries(wgNamespaceIds); _i5 < _Object$entries.length; _i5++) {
    const [namespace, id] = _Object$entries[_i5];
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
  var _iterator10 = _createForOfIteratorHelper($content.find("a")), _step10;
  try {
    for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
      var _user, _userLinks$_user;
      const element = _step10.value;
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
    _iterator10.e(err);
  } finally {
    _iterator10.f();
  }
  return userLinks;
};
//! src/MarkBlocked/modules/markBlockedUser.ts
var markBlockedUser = ($content) => {
  const userLinks = generateUserLinks($content);
  markGlobalLockedUserLinks(userLinks);
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
//! src/MarkBlocked/MarkBlocked.ts
if (!["edit", "submit"].includes(mw.config.get("wgAction"))) {
  addHook();
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01hcmtCbG9ja2VkL29wdGlvbnMuanNvbiIsICJzcmMvTWFya0Jsb2NrZWQvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvcGFyc2VUaW1lLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL01hcmtCbG9ja2VkLm1vZHVsZS5sZXNzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvbWFya0xpbmtzLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvYXBpLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvcXVlcnkudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvdXRpbC9tYXJrVXNlckxpbmtzLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVVc2VyTGlua3MudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvdXRpbC9nZW5lcmF0ZVVzZXJOYW1lc3BhY2VUaXRsZXMudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvbWFya0Jsb2NrZWRVc2VyLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL2FkZEhvb2sudHMiLCAic3JjL01hcmtCbG9ja2VkL01hcmtCbG9ja2VkLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiY29udHJpYnV0aW9uc1BhZ2VBbGlhc1wiOiBcIlNwZWNpYWw6Q29udHJpYnV0aW9uc1wiLFxuXHRcInVzZXJOYW1lc3BhY2VOdW1iZXJzXCI6IFsyLCAzXSxcblx0XCJzdG9yYWdlS2V5TG9ja2VkXCI6IFwiZXh0LmdhZGdldC5NYXJrQmxvY2tlZF9pc0xvY2tlZC1cIixcblx0XCJzdG9yYWdlS2V5QmxvY2tlZFwiOiBcImV4dC5nYWRnZXQuTWFya0Jsb2NrZWRfaXNCbG9ja2VkLVwiLFxuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRpbmZpbml0eTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdpbmZpbml0eScsXG5cdFx0XHQnemgtaGFucyc6ICfml6DpmZDmnJ8nLFxuXHRcdFx0J3poLWhhbnQnOiAn54Sh6ZmQ5pyfJyxcblx0XHR9KSxcblx0XHRCbG9ja2VkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJzsgJDVibG9ja2VkICgkMSkgYnkgJDI6ICQzICgkNCBhZ28pJyxcblx0XHRcdCd6aC1oYW5zJzogJ++8m+eUsSQyJDXlsIHnpoEkMe+8miQz77yIJDTliY3vvIknLFxuXHRcdFx0J3poLWhhbnQnOiAn77yb55SxJDIkNeWwgemOliQx77yaJDPvvIgkNOWJje+8iScsXG5cdFx0fSksXG5cdFx0J0dsb2JhbGx5IEJsb2NrZWQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJzsgJDVibG9ja2VkIGdsb2JhbGx5ICgkMSkgYnkgJDI6ICQzICgkNCBhZ28pJyxcblx0XHRcdCd6aC1oYW5zJzogJ++8m+eUsSQyJDXlhajln5/lsIHnpoEkMe+8miQz77yIJDTliY3vvIknLFxuXHRcdFx0J3poLWhhbnQnOiAn77yb55SxJDIkNeWFqOWfn+WwgemOliQx77yaJDPvvIgkNOWJje+8iScsXG5cdFx0fSksXG5cdFx0TG9ja2VkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJzsgTG9ja2VkJyxcblx0XHRcdCd6aC1oYW5zJzogJ++8m+W3suWFqOWfn+mUgeWumicsXG5cdFx0XHQnemgtaGFudCc6ICfvvJvlt7Llhajln5/pjpblrponLFxuXHRcdH0pLFxuXHRcdHBhcnRpYWw6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAncGFydGlhbCAnLFxuXHRcdFx0emg6ICfpg6jliIYnLFxuXHRcdH0pLFxuXHRcdGQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnZGF5Jyxcblx0XHRcdHpoOiAn5aSpJyxcblx0XHR9KSxcblx0XHRzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ3NlY29uZCcsXG5cdFx0XHR6aDogJ+enkicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNvbnN0IGFkZFplcm8gPSAodjogbnVtYmVyKTogc3RyaW5nID0+IHtcblx0cmV0dXJuIHYgPD0gOSA/IGAwJHt2fWAgOiBgJHt2fWA7XG59O1xuXG5jb25zdCBpbkhvdXJzID0gKG1zOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuXHRsZXQgbW06IG51bWJlciA9IE1hdGguZmxvb3IobXMgLyA2ZTQpO1xuXHRpZiAoIW1tKSB7XG5cdFx0cmV0dXJuIGAke01hdGguZmxvb3IobXMgLyAxZTMpfSR7Z2V0TWVzc2FnZSgncycpfWA7XG5cdH1cblxuXHRsZXQgaGg6IG51bWJlciA9IE1hdGguZmxvb3IobW0gLyA2MCk7XG5cdG1tICU9IDYwO1xuXG5cdGNvbnN0IGRkOiBudW1iZXIgPSBNYXRoLmZsb29yKGhoIC8gMjQpO1xuXHRoaCAlPSAyNDtcblxuXHRpZiAoZGQpIHtcblx0XHRyZXR1cm4gYCR7ZGQgKyAoZGQgPCAxMCA/IGAuJHthZGRaZXJvKGhoKX1gIDogJycpfSR7Z2V0TWVzc2FnZSgnZCcpfWA7XG5cdH1cblxuXHRyZXR1cm4gYCR7aGh9OiR7YWRkWmVybyhtbSl9YDtcbn07XG5cbi8vIDIwMDgxMjI2MjIwNjA1IG9yIDIwMDgtMDEtMjZUMDY6MzQ6MTlaIC0+IG51bWJlclxuY29uc3QgcGFyc2VUUyA9IChzdHJpbmc6IHN0cmluZyk6IG51bWJlciA9PiB7XG5cdGNvbnN0IG06IFJlZ0V4cE1hdGNoQXJyYXkgPSBzdHJpbmdcblx0XHQucmVwbGFjZSgvXFxEL2csICcnKVxuXHRcdC5tYXRjaCgvKFxcZFxcZFxcZFxcZCkoXFxkXFxkKShcXGRcXGQpKFxcZFxcZCkoXFxkXFxkKShcXGRcXGQpLykgYXMgUmVnRXhwTWF0Y2hBcnJheTtcblxuXHRyZXR1cm4gbmV3IERhdGUoXG5cdFx0RGF0ZS5VVEMoXG5cdFx0XHQrKG1bMV0gYXMgc3RyaW5nKSxcblx0XHRcdCsobVsyXSBhcyBzdHJpbmcpIC0gMSxcblx0XHRcdCsobVszXSBhcyBzdHJpbmcpLFxuXHRcdFx0KyhtWzRdIGFzIHN0cmluZyksXG5cdFx0XHQrKG1bNV0gYXMgc3RyaW5nKSxcblx0XHRcdCsobVs2XSBhcyBzdHJpbmcpXG5cdFx0KVxuXHQpLmdldFRpbWUoKTtcbn07XG5cbmV4cG9ydCB7aW5Ib3VycywgcGFyc2VUU307XG4iLCAiaW1wb3J0IFwiZXNidWlsZC1jc3MtbW9kdWxlcy1wbHVnaW4tbnMtY3NzOnNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL01hcmtCbG9ja2VkLm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3QgdXNlcmxpbmtJbmRlZiA9IFwiTWFya0Jsb2NrZWQtbW9kdWxlX191c2VybGlua0luZGVmX3h0QWZPR19fNDEwMFwiO1xuZXhwb3J0IGNvbnN0IHVzZXJsaW5rTG9ja2VkID0gXCJNYXJrQmxvY2tlZC1tb2R1bGVfX3VzZXJsaW5rTG9ja2VkX3h0QWZPR19fNDEwMFwiO1xuZXhwb3J0IGNvbnN0IHVzZXJsaW5rUGFydGlhbCA9IFwiTWFya0Jsb2NrZWQtbW9kdWxlX191c2VybGlua1BhcnRpYWxfeHRBZk9HX180MTAwXCI7XG5leHBvcnQgY29uc3QgdXNlcmxpbmtUZW1wID0gXCJNYXJrQmxvY2tlZC1tb2R1bGVfX3VzZXJsaW5rVGVtcF94dEFmT0dfXzQxMDBcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcInVzZXJsaW5rSW5kZWZcIjogdXNlcmxpbmtJbmRlZixcbiAgXCJ1c2VybGlua0xvY2tlZFwiOiB1c2VybGlua0xvY2tlZCxcbiAgXCJ1c2VybGlua1BhcnRpYWxcIjogdXNlcmxpbmtQYXJ0aWFsLFxuICBcInVzZXJsaW5rVGVtcFwiOiB1c2VybGlua1RlbXBcbn07XG4gICAgICAiLCAiaW1wb3J0IHR5cGUge1F1ZXJ5R2xvYmFsTG9ja3NSZXNwb25zZSwgUXVlcnlMb2NhbEFuZEdsb2JhbEJsb2Nrc1Jlc3BvbnNlfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge2luSG91cnMsIHBhcnNlVFN9IGZyb20gJy4vcGFyc2VUaW1lJztcbmltcG9ydCB7dXNlcmxpbmtJbmRlZiwgdXNlcmxpbmtMb2NrZWQsIHVzZXJsaW5rUGFydGlhbCwgdXNlcmxpbmtUZW1wfSBmcm9tICcuLi9NYXJrQmxvY2tlZC5tb2R1bGUubGVzcyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBDYWxsYmFjazogcmVjZWl2ZSBkYXRhIGFuZCBtYXJrIGxpbmtzXG4gKi9cblxuY29uc3QgbWFya0dsb2JhbExvY2tlZExpbmtzID0gKHtcblx0cmVzcG9uc2UsXG5cdHVzZXJMaW5rcyxcbn06IHtcblx0cmVzcG9uc2U6IFF1ZXJ5R2xvYmFsTG9ja3NSZXNwb25zZTtcblx0dXNlckxpbmtzOiBSZWNvcmQ8c3RyaW5nLCBKUXVlcnlbXT47XG59KTogdm9pZCA9PiB7XG5cdC8vIEdsb2JhbCBsb2Nrc1xuXHRpZiAoIXJlc3BvbnNlWydxdWVyeSddPy5nbG9iYWx1c2VyaW5mbykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHVzZXIgPSByZXNwb25zZVsncXVlcnknXS5nbG9iYWx1c2VyaW5mbz8ubmFtZTtcblx0Y29uc3QgbG9ja2VkID0gcmVzcG9uc2VbJ3F1ZXJ5J10uZ2xvYmFsdXNlcmluZm8/LmxvY2tlZDtcblxuXHRpZiAoIWxvY2tlZCB8fCAhdXNlcikge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHRpcDogc3RyaW5nID0gZ2V0TWVzc2FnZSgnTG9ja2VkJyk7XG5cblx0Y29uc3QgJGxpbmtzOiBKUXVlcnlbXSB8IHVuZGVmaW5lZCA9IHVzZXJMaW5rc1t1c2VyXTtcblx0aWYgKCEkbGlua3MpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBjbGFzc05hbWUgPSB1c2VybGlua0xvY2tlZCBhcyBzdHJpbmc7XG5cblx0Zm9yIChjb25zdCAkbGluayBvZiAkbGlua3MpIHtcblx0XHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0XHQvLyAqIHNlZSAuL01hcmtibG9ja2VkLm1vZHVsZS5sZXNzXG5cdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdCRsaW5rLmFkZENsYXNzKGNsYXNzTmFtZSkuYXR0cigndGl0bGUnLCAkbGluay5hdHRyKCd0aXRsZScpICsgdGlwKTtcblx0fVxufTtcblxuY29uc3QgbWFya0xvY2FsQmxvY2tzID0gKHtcblx0cmVzcG9uc2UsXG5cdHVzZXJMaW5rcyxcblx0YmtpcCxcbn06IHtcblx0cmVzcG9uc2U6IFF1ZXJ5TG9jYWxBbmRHbG9iYWxCbG9ja3NSZXNwb25zZTtcblx0dXNlckxpbmtzOiBSZWNvcmQ8c3RyaW5nLCBKUXVlcnlbXT47XG5cdGJraXA/OiBzdHJpbmc7XG59KTogdm9pZCA9PiB7XG5cdC8vIExvY2FsIGJsb2Nrc1xuXHRpZiAoIXJlc3BvbnNlWydxdWVyeSddPy5ibG9ja3MpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRmb3IgKGNvbnN0IGJsb2NrIG9mIHJlc3BvbnNlWydxdWVyeSddLmJsb2Nrcykge1xuXHRcdGNvbnN0IGlzUGFydGlhbEJsY29rOiBib29sZWFuID0gdHlwZW9mIGJsb2NrLnJlc3RyaWN0aW9ucyA9PT0gJ3N0cmluZycgJiYgYmxvY2sucmVzdHJpY3Rpb25zICE9PSAnJzsgLy8gUGFydGlhbCBibG9ja1xuXG5cdFx0bGV0IGNsYXNzTmFtZTogc3RyaW5nID0gdXNlcmxpbmtQYXJ0aWFsIGFzIHN0cmluZztcblx0XHRsZXQgYmxvY2tUaW1lOiBzdHJpbmcgPSAnJztcblx0XHRpZiAoYmxvY2suZXhwaXJ5LnN0YXJ0c1dpdGgoJ2luJykpIHtcblx0XHRcdGlmICghaXNQYXJ0aWFsQmxjb2spIHtcblx0XHRcdFx0Y2xhc3NOYW1lID0gdXNlcmxpbmtJbmRlZiBhcyBzdHJpbmc7XG5cdFx0XHR9XG5cdFx0XHRibG9ja1RpbWUgPSBnZXRNZXNzYWdlKCdpbmZpbml0eScpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoIWlzUGFydGlhbEJsY29rKSB7XG5cdFx0XHRcdGNsYXNzTmFtZSA9IHVzZXJsaW5rVGVtcCBhcyBzdHJpbmc7XG5cdFx0XHR9XG5cdFx0XHRibG9ja1RpbWUgPSBpbkhvdXJzKHBhcnNlVFMoYmxvY2suZXhwaXJ5KSAtIHBhcnNlVFMoYmxvY2sudGltZXN0YW1wKSk7XG5cdFx0fVxuXG5cdFx0bGV0IHRpcDogc3RyaW5nID0gZ2V0TWVzc2FnZSgnQmxvY2tlZCcpXG5cdFx0XHQucmVwbGFjZSgnJDEnLCBibG9ja1RpbWUpXG5cdFx0XHQucmVwbGFjZSgnJDInLCBibG9jay5ieSlcblx0XHRcdC5yZXBsYWNlKCckMycsIGJsb2NrLnJlYXNvbilcblx0XHRcdC5yZXBsYWNlKCckNCcsIGluSG91cnMoRGF0ZS5ub3coKSAtIHBhcnNlVFMoYmxvY2sudGltZXN0YW1wKSkpO1xuXHRcdHRpcCA9IGlzUGFydGlhbEJsY29rID8gdGlwLnJlcGxhY2UoJyQ1JywgZ2V0TWVzc2FnZSgncGFydGlhbCcpKSA6IHRpcC5yZXBsYWNlKCckNScsICcnKTtcblxuXHRcdGNvbnN0ICRsaW5rczogSlF1ZXJ5W10gfCB1bmRlZmluZWQgPSB1c2VyTGlua3NbYmtpcCA/PyBibG9jay51c2VyXTtcblx0XHRpZiAoISRsaW5rcykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCAkbGluayBvZiAkbGlua3MpIHtcblx0XHRcdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHRcdFx0Ly8gKiBzZWUgLi9NYXJrYmxvY2tlZC5tb2R1bGUubGVzc1xuXHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0JGxpbmsuYWRkQ2xhc3MoY2xhc3NOYW1lKS5hdHRyKCd0aXRsZScsICRsaW5rLmF0dHIoJ3RpdGxlJykgKyB0aXApO1xuXHRcdH1cblx0fVxufTtcblxuY29uc3QgbWFya0dsb2JhbEJsb2NrcyA9ICh7XG5cdHJlc3BvbnNlLFxuXHR1c2VyTGlua3MsXG5cdGJraXAsXG59OiB7XG5cdHJlc3BvbnNlOiBRdWVyeUxvY2FsQW5kR2xvYmFsQmxvY2tzUmVzcG9uc2U7XG5cdHVzZXJMaW5rczogUmVjb3JkPHN0cmluZywgSlF1ZXJ5W10+O1xuXHRia2lwPzogc3RyaW5nO1xufSk6IHZvaWQgPT4ge1xuXHQvLyBHbG9iYWwgYmxvY2tzXG5cdGlmICghcmVzcG9uc2VbJ3F1ZXJ5J10/Lmdsb2JhbGJsb2Nrcykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGZvciAoY29uc3QgYmxvY2sgb2YgcmVzcG9uc2VbJ3F1ZXJ5J10uZ2xvYmFsYmxvY2tzKSB7XG5cdFx0bGV0IGNsYXNzTmFtZTogc3RyaW5nID0gdXNlcmxpbmtQYXJ0aWFsIGFzIHN0cmluZztcblx0XHRsZXQgYmxvY2tUaW1lOiBzdHJpbmcgPSAnJztcblx0XHRpZiAoYmxvY2suZXhwaXJ5LnN0YXJ0c1dpdGgoJ2luJykpIHtcblx0XHRcdGNsYXNzTmFtZSA9IHVzZXJsaW5rSW5kZWYgYXMgc3RyaW5nO1xuXHRcdFx0YmxvY2tUaW1lID0gZ2V0TWVzc2FnZSgnaW5maW5pdHknKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2xhc3NOYW1lID0gdXNlcmxpbmtUZW1wIGFzIHN0cmluZztcblx0XHRcdGJsb2NrVGltZSA9IGluSG91cnMocGFyc2VUUyhibG9jay5leHBpcnkpIC0gcGFyc2VUUyhibG9jay50aW1lc3RhbXApKTtcblx0XHR9XG5cblx0XHRsZXQgdGlwOiBzdHJpbmcgPSBnZXRNZXNzYWdlKCdHbG9iYWxseSBCbG9ja2VkJylcblx0XHRcdC5yZXBsYWNlKCckMScsIGJsb2NrVGltZSlcblx0XHRcdC5yZXBsYWNlKCckMicsIGJsb2NrLmJ5KVxuXHRcdFx0LnJlcGxhY2UoJyQzJywgYmxvY2sucmVhc29uKVxuXHRcdFx0LnJlcGxhY2UoJyQ0JywgaW5Ib3VycyhEYXRlLm5vdygpIC0gcGFyc2VUUyhibG9jay50aW1lc3RhbXApKSk7XG5cdFx0dGlwID0gdGlwLnJlcGxhY2UoJyQ1JywgJycpO1xuXG5cdFx0Y29uc3QgJGxpbmtzOiBKUXVlcnlbXSB8IHVuZGVmaW5lZCA9IHVzZXJMaW5rc1tia2lwID8/IGJsb2NrLnRhcmdldF07XG5cdFx0aWYgKCEkbGlua3MpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgJGxpbmsgb2YgJGxpbmtzKSB7XG5cdFx0XHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0XHRcdC8vICogc2VlIC4vTWFya2Jsb2NrZWQubW9kdWxlLmxlc3Ncblx0XHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHRcdCRsaW5rLmFkZENsYXNzKGNsYXNzTmFtZSkuYXR0cigndGl0bGUnLCAkbGluay5hdHRyKCd0aXRsZScpICsgdGlwKTtcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7bWFya0dsb2JhbExvY2tlZExpbmtzLCBtYXJrTG9jYWxCbG9ja3MsIG1hcmtHbG9iYWxCbG9ja3N9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgTWFya0Jsb2NrZWQvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge0FwaVF1ZXJ5R2xvYmFsQmxvY2tzUGFyYW1zUmVkZWZpbmVkfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG5jb25zdCBxdWVyeUdsb2JhbFVzZXJJbmZvID0gYXN5bmMgKGd1aXVzZXI6IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5R2xvYmFsVXNlckluZm9SZXNwb25zZSA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdG1ldGE6IFsnZ2xvYmFsdXNlcmluZm8nXSxcblx0XHRndWl1c2VyLFxuXHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRtYXhhZ2U6IDYwMCxcblx0fTtcblxuXHRyZXR1cm4gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xufTtcblxuY29uc3QgcXVlcnlJUEJsb2NrcyA9IGFzeW5jIChia2lwOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUJsb2Nrc1BhcmFtcyAmIEFwaVF1ZXJ5R2xvYmFsQmxvY2tzUGFyYW1zUmVkZWZpbmVkID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0bGlzdDogWydibG9ja3MnLCAnZ2xvYmFsYmxvY2tzJ10sXG5cdFx0YmtpcCxcblx0XHRia2xpbWl0OiAxMDAsXG5cdFx0Ymtwcm9wOiBbJ2J5JywgJ2V4cGlyeScsICdyZWFzb24nLCAncmVzdHJpY3Rpb25zJywgJ3RpbWVzdGFtcCcsICd1c2VyJ10sXG5cdFx0YmdpcDogYmtpcCxcblx0XHRiZ2xpbWl0OiAxMDAsXG5cdFx0Ymdwcm9wOiBbJ2J5JywgJ2V4cGlyeScsICdyZWFzb24nLCAndGltZXN0YW1wJywgJ3RhcmdldCddLFxuXHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRtYXhhZ2U6IDYwMCxcblx0fTtcblxuXHRyZXR1cm4gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xufTtcblxuY29uc3QgcXVlcnlVc2VyQmxvY2tzID0gYXN5bmMgKGJrdXNlcnM6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlCbG9ja3NQYXJhbXMgJiBBcGlRdWVyeUdsb2JhbEJsb2Nrc1BhcmFtc1JlZGVmaW5lZCA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdGxpc3Q6IFsnYmxvY2tzJywgJ2dsb2JhbGJsb2NrcyddLFxuXHRcdGJrdXNlcnMsXG5cdFx0YmtsaW1pdDogMTAwLFxuXHRcdGJrcHJvcDogWydieScsICdleHBpcnknLCAncmVhc29uJywgJ3Jlc3RyaWN0aW9ucycsICd0aW1lc3RhbXAnLCAndXNlciddLFxuXHRcdGJnbGltaXQ6IDEwMCxcblx0XHRiZ3RhcmdldHM6IGJrdXNlcnMsXG5cdFx0Ymdwcm9wOiBbJ2J5JywgJ2V4cGlyeScsICdyZWFzb24nLCAndGltZXN0YW1wJywgJ3RhcmdldCddLFxuXHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRtYXhhZ2U6IDYwMCxcblx0fTtcblxuXHRyZXR1cm4gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xufTtcblxuZXhwb3J0IHtxdWVyeUdsb2JhbFVzZXJJbmZvLCBxdWVyeUlQQmxvY2tzLCBxdWVyeVVzZXJCbG9ja3N9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB0eXBlIHtRdWVyeUdsb2JhbExvY2tzUmVzcG9uc2UsIFF1ZXJ5TG9jYWxBbmRHbG9iYWxCbG9ja3NSZXNwb25zZX0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHttYXJrR2xvYmFsQmxvY2tzLCBtYXJrR2xvYmFsTG9ja2VkTGlua3MsIG1hcmtMb2NhbEJsb2Nrc30gZnJvbSAnLi9tYXJrTGlua3MnO1xuaW1wb3J0IHtxdWVyeUdsb2JhbFVzZXJJbmZvLCBxdWVyeUlQQmxvY2tzLCBxdWVyeVVzZXJCbG9ja3N9IGZyb20gJy4vcXVlcnknO1xuXG5jb25zdCBtYXJrR2xvYmFsTG9ja2VkVXNlckxpbmtzID0gKHVzZXJMaW5rczogUmVjb3JkPHN0cmluZywgSlF1ZXJ5W10+KSA9PiB7XG5cdC8vIENvbnZlcnQgdXNlcnMgaW50byBhcnJheVxuXHRjb25zdCB1c2Vyczogc3RyaW5nW10gPSBPYmplY3Qua2V5cyh1c2VyTGlua3MpO1xuXHRpZiAoIXVzZXJzLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHByb21pc2VzOiAoKCkgPT4gUHJvbWlzZTx2b2lkPilbXSA9IFtdO1xuXG5cdC8vIEdsb2JhbCBMb2NrIHF1ZXJpZXNcblx0Zm9yIChjb25zdCBndWl1c2VyIG9mIHVzZXJzKSB7XG5cdFx0aWYgKG13LnV0aWwuaXNJUHY0QWRkcmVzcyhndWl1c2VyKSB8fCBtdy51dGlsLmlzSVB2NkFkZHJlc3MoZ3VpdXNlcikpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmIChtdy5zdG9yYWdlLmdldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXlMb2NrZWQgKyBndWl1c2VyKSkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBtdy5zdG9yYWdlLmdldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXlMb2NrZWQgKyBndWl1c2VyKSBhcyBRdWVyeUdsb2JhbExvY2tzUmVzcG9uc2U7XG5cblx0XHRcdGlmIChyZXNwb25zZVsncXVlcnknXT8uZ2xvYmFsdXNlcmluZm8pIHtcblx0XHRcdFx0bWFya0dsb2JhbExvY2tlZExpbmtzKHtyZXNwb25zZSwgdXNlckxpbmtzfSk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHByb21pc2VzW3Byb21pc2VzLmxlbmd0aF0gPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IChhd2FpdCBxdWVyeUdsb2JhbFVzZXJJbmZvKGd1aXVzZXIpKSBhcyBRdWVyeUdsb2JhbExvY2tzUmVzcG9uc2U7XG5cblx0XHRcdFx0bWFya0dsb2JhbExvY2tlZExpbmtzKHtyZXNwb25zZSwgdXNlckxpbmtzfSk7XG5cblx0XHRcdFx0bXcuc3RvcmFnZS5zZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5TG9ja2VkICsgZ3VpdXNlciwgcmVzcG9uc2UsIDYwICogNjAgKiAyNCk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKCdbTWFya0Jsb2NrZWRdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cblxuXHR2b2lkIChhc3luYyAoKSA9PiB7XG5cdFx0Zm9yIChjb25zdCBwcm9taXNlIG9mIHByb21pc2VzKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRhd2FpdCBwcm9taXNlKCk7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0fVxuXHR9KSgpO1xufTtcblxuY29uc3QgbWFya0Jsb2NrZWRVc2VyTGlua3MgPSAodXNlckxpbmtzOiBSZWNvcmQ8c3RyaW5nLCBKUXVlcnlbXT4pID0+IHtcblx0Ly8gQ29udmVydCB1c2VycyBpbnRvIGFycmF5XG5cdGxldCB1c2Vyczogc3RyaW5nW10gPSBPYmplY3Qua2V5cyh1c2VyTGlua3MpO1xuXHRpZiAoIXVzZXJzLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHByb21pc2VzOiAoKCkgPT4gUHJvbWlzZTx2b2lkPilbXSA9IFtdO1xuXG5cdGZvciAoY29uc3QgdXNlciBvZiB1c2Vycykge1xuXHRcdGlmIChtdy5zdG9yYWdlLmdldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXlCbG9ja2VkICsgdXNlcikpIHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gbXcuc3RvcmFnZS5nZXRPYmplY3QoXG5cdFx0XHRcdE9QVElPTlMuc3RvcmFnZUtleUJsb2NrZWQgKyB1c2VyXG5cdFx0XHQpIGFzIFF1ZXJ5TG9jYWxBbmRHbG9iYWxCbG9ja3NSZXNwb25zZTtcblxuXHRcdFx0aWYgKHJlc3BvbnNlWydxdWVyeSddPy5ibG9ja3MgfHwgcmVzcG9uc2VbJ3F1ZXJ5J10/Lmdsb2JhbGJsb2Nrcykge1xuXHRcdFx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10/LmJsb2Nrcykge1xuXHRcdFx0XHRcdG1hcmtMb2NhbEJsb2Nrcyh7cmVzcG9uc2UsIHVzZXJMaW5rc30pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHJlc3BvbnNlWydxdWVyeSddPy5nbG9iYWxibG9ja3MpIHtcblx0XHRcdFx0XHRtYXJrR2xvYmFsQmxvY2tzKHtyZXNwb25zZSwgdXNlckxpbmtzfSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR1c2VycyA9IHVzZXJzLmZpbHRlcigoZWxlbWVudCkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBlbGVtZW50ICE9PSB1c2VyO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBMb2NhbCBhbmQgZ2xvYmFsIHVzZXIgYmxvY2sgcXVlcmllc1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHVzZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgYmt1c2VycyA9IHVzZXJzLnNwbGljZSgwLCAyNSk7XG5cdFx0aWYgKCFia3VzZXJzLmxlbmd0aCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0cHJvbWlzZXNbcHJvbWlzZXMubGVuZ3RoXSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gKGF3YWl0IHF1ZXJ5VXNlckJsb2Nrcyhia3VzZXJzKSkgYXMgUXVlcnlMb2NhbEFuZEdsb2JhbEJsb2Nrc1Jlc3BvbnNlO1xuXG5cdFx0XHRcdGlmIChyZXNwb25zZVsncXVlcnknXT8uYmxvY2tzKSB7XG5cdFx0XHRcdFx0bWFya0xvY2FsQmxvY2tzKHtyZXNwb25zZSwgdXNlckxpbmtzfSk7XG5cblx0XHRcdFx0XHRmb3IgKGNvbnN0IGJsb2NrIG9mIHJlc3BvbnNlWydxdWVyeSddLmJsb2Nrcykge1xuXHRcdFx0XHRcdFx0aWYgKGJsb2NrLnVzZXIpIHtcblx0XHRcdFx0XHRcdFx0bXcuc3RvcmFnZS5zZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5TG9ja2VkICsgYmxvY2sudXNlciwgcmVzcG9uc2UsIDYwICogNjApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChyZXNwb25zZVsncXVlcnknXT8uZ2xvYmFsYmxvY2tzKSB7XG5cdFx0XHRcdFx0bWFya0dsb2JhbEJsb2Nrcyh7cmVzcG9uc2UsIHVzZXJMaW5rc30pO1xuXG5cdFx0XHRcdFx0Zm9yIChjb25zdCBibG9jayBvZiByZXNwb25zZVsncXVlcnknXS5nbG9iYWxibG9ja3MpIHtcblx0XHRcdFx0XHRcdGlmIChibG9jay50YXJnZXQpIHtcblx0XHRcdFx0XHRcdFx0bXcuc3RvcmFnZS5zZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5TG9ja2VkICsgYmxvY2sudGFyZ2V0LCByZXNwb25zZSwgNjAgKiA2MCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKCdbTWFya0Jsb2NrZWRdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cblxuXHR2b2lkIChhc3luYyAoKSA9PiB7XG5cdFx0Zm9yIChjb25zdCBwcm9taXNlIG9mIHByb21pc2VzKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRhd2FpdCBwcm9taXNlKCk7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0fVxuXHR9KSgpO1xufTtcblxuY29uc3QgbWFya0Jsb2NrZWRJUExpbmtzID0gKHVzZXJMaW5rczogUmVjb3JkPHN0cmluZywgSlF1ZXJ5W10+KSA9PiB7XG5cdC8vIENvbnZlcnQgdXNlcnMgaW50byBhcnJheVxuXHRjb25zdCB1c2Vyczogc3RyaW5nW10gPSBPYmplY3Qua2V5cyh1c2VyTGlua3MpO1xuXHRpZiAoIXVzZXJzLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHByb21pc2VzOiAoKCkgPT4gUHJvbWlzZTx2b2lkPilbXSA9IFtdO1xuXG5cdC8vIExvY2FsIGFuZCBnbG9iYWwgSVAgYmxvY2sgcXVlcmllc1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHVzZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgYmt1c2VycyA9IHVzZXJzLnNwbGljZSgwLCAyNSk7XG5cdFx0aWYgKCFia3VzZXJzLmxlbmd0aCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Zm9yIChsZXQgYmtpcCBvZiBia3VzZXJzKSB7XG5cdFx0XHRpZiAoIW13LnV0aWwuaXNJUHY0QWRkcmVzcyhia2lwKSAmJiAhbXcudXRpbC5pc0lQdjZBZGRyZXNzKGJraXApKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAobXcudXRpbC5pc0lQdjZBZGRyZXNzKGJraXApKSB7XG5cdFx0XHRcdGJraXAgPSBia2lwLnRvVXBwZXJDYXNlKCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChtdy5zdG9yYWdlLmdldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXlCbG9ja2VkICsgYmtpcCkpIHtcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBtdy5zdG9yYWdlLmdldE9iamVjdChcblx0XHRcdFx0XHRPUFRJT05TLnN0b3JhZ2VLZXlCbG9ja2VkICsgYmtpcFxuXHRcdFx0XHQpIGFzIFF1ZXJ5TG9jYWxBbmRHbG9iYWxCbG9ja3NSZXNwb25zZTtcblxuXHRcdFx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10/LmJsb2Nrcykge1xuXHRcdFx0XHRcdG1hcmtMb2NhbEJsb2Nrcyh7cmVzcG9uc2UsIHVzZXJMaW5rc30pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHJlc3BvbnNlWydxdWVyeSddPy5nbG9iYWxibG9ja3MpIHtcblx0XHRcdFx0XHRtYXJrR2xvYmFsQmxvY2tzKHtyZXNwb25zZSwgdXNlckxpbmtzfSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0cHJvbWlzZXNbcHJvbWlzZXMubGVuZ3RoXSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRjb25zdCByZXNwb25zZSA9IChhd2FpdCBxdWVyeUlQQmxvY2tzKGJraXApKSBhcyBRdWVyeUxvY2FsQW5kR2xvYmFsQmxvY2tzUmVzcG9uc2U7XG5cblx0XHRcdFx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10/LmJsb2Nrcykge1xuXHRcdFx0XHRcdFx0bWFya0xvY2FsQmxvY2tzKHtyZXNwb25zZSwgdXNlckxpbmtzLCBia2lwfSk7XG5cblx0XHRcdFx0XHRcdGZvciAoY29uc3QgYmxvY2sgb2YgcmVzcG9uc2VbJ3F1ZXJ5J10uYmxvY2tzKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChibG9jay51c2VyKSB7XG5cdFx0XHRcdFx0XHRcdFx0bXcuc3RvcmFnZS5zZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5TG9ja2VkICsgYmxvY2sudXNlciwgcmVzcG9uc2UsIDYwICogNjApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKHJlc3BvbnNlWydxdWVyeSddPy5nbG9iYWxibG9ja3MpIHtcblx0XHRcdFx0XHRcdG1hcmtHbG9iYWxCbG9ja3Moe3Jlc3BvbnNlLCB1c2VyTGlua3MsIGJraXB9KTtcblxuXHRcdFx0XHRcdFx0Zm9yIChjb25zdCBibG9jayBvZiByZXNwb25zZVsncXVlcnknXS5nbG9iYWxibG9ja3MpIHtcblx0XHRcdFx0XHRcdFx0aWYgKGJsb2NrLnRhcmdldCkge1xuXHRcdFx0XHRcdFx0XHRcdG13LnN0b3JhZ2Uuc2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleUxvY2tlZCArIGJsb2NrLnRhcmdldCwgcmVzcG9uc2UsIDYwICogNjApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ1tNYXJrQmxvY2tlZF0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXHR9XG5cblx0dm9pZCAoYXN5bmMgKCkgPT4ge1xuXHRcdGZvciAoY29uc3QgcHJvbWlzZSBvZiBwcm9taXNlcykge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgcHJvbWlzZSgpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdH1cblx0fSkoKTtcbn07XG5cbmV4cG9ydCB7bWFya0dsb2JhbExvY2tlZFVzZXJMaW5rcywgbWFya0Jsb2NrZWRVc2VyTGlua3MsIG1hcmtCbG9ja2VkSVBMaW5rc307XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtNd1VyaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2VuZXJhdGVVc2VyTmFtZXNwYWNlVGl0bGVzfSBmcm9tICcuL2dlbmVyYXRlVXNlck5hbWVzcGFjZVRpdGxlcyc7XG5cbi8vIEdldCBhbGwgYWxpYXNlcyBmb3IgdXNlcjogJiB1c2VyX3RhbGs6XG5jb25zdCB1c2VyTmFtZXNwYWNlVGl0bGVzOiBzdHJpbmdbXSA9IGdlbmVyYXRlVXNlck5hbWVzcGFjZVRpdGxlcygpO1xuLy8gUmVnRXhwIGZvciBhbGwgdGl0bGVzIHRoYXQgYXJlICBVc2VyOnwgVXNlcl90YWxrOiB8IFNwZWNpYWw6Q29udHJpYnV0aW9ucy8gKGZvciB1c2Vyc2NyaXB0cylcbmNvbnN0IHVzZXJUaXRsZVJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKFxuXHRgXigke3VzZXJOYW1lc3BhY2VUaXRsZXMuam9pbignfCcpfXwke09QVElPTlMuY29udHJpYnV0aW9uc1BhZ2VBbGlhc31cXFxcLykrKFteXFxcXC8jXSspJGAsXG5cdCdpJ1xuKTtcblxuLy8gUmVnRXhwIGZvciBsaW5rc1xuLy8gYXJ0aWNsZVJlZ2V4IGFsc28gbWF0Y2hlcyBleHRlcm5hbCBsaW5rcyBpbiBvcmRlciB0byBzdXBwb3J0IHRoZSBub3BpbmcgdGVtcGxhdGVcbmNvbnN0IHt3Z0FydGljbGVQYXRoLCB3Z1NjcmlwdH0gPSBtdy5jb25maWcuZ2V0KCk7XG5jb25zdCBhcnRpY2xlUmVnZXg6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoYCR7d2dBcnRpY2xlUGF0aC5yZXBsYWNlKCckMScsICcnKX0oW14jXSspYCk7XG5jb25zdCBzY3JpcHRSZWdleDogUmVnRXhwID0gbmV3IFJlZ0V4cChgXiR7d2dTY3JpcHR9XFxcXD90aXRsZT0oW14jJl0rKWApO1xuXG5jb25zdCBnZW5lcmF0ZVVzZXJMaW5rcyA9ICgkY29udGVudDogSlF1ZXJ5KTogUmVjb3JkPHN0cmluZywgSlF1ZXJ5W10+ID0+IHtcblx0Ly8gRmluZCBhbGwgXCJ1c2VyXCIgbGlua3MgYW5kIHNhdmUgdGhlbSBpbiB1c2VyTGlua3MgOiB7ICd1c2Vycyc6IFs8bGluazE+LCA8bGluazI+LCAuLi5dLCAndXNlcjInOiBbPGxpbmszPiwgPGxpbmszPiwgLi4uXSwgLi4uIH1cblx0Y29uc3QgdXNlckxpbmtzOiBSZWNvcmQ8c3RyaW5nLCBKUXVlcnlbXT4gPSB7fTtcblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGNvbnRlbnQuZmluZCgnYScpKSB7XG5cdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD4gPSAkKGVsZW1lbnQpO1xuXHRcdGlmIChcblx0XHRcdCRlbGVtZW50Lmhhc0NsYXNzKCdtdy1jaGFuZ2VzbGlzdC1kYXRlJykgfHxcblx0XHRcdCRlbGVtZW50Lmhhc0NsYXNzKCdleHQtZGlzY3Vzc2lvbnRvb2xzLWluaXQtdGltZXN0YW1wbGluaycpIHx8XG5cdFx0XHQkZWxlbWVudC5wYXJlbnQoJ3NwYW4nKS5oYXNDbGFzcygnbXctaGlzdG9yeS11bmRvJykgfHxcblx0XHRcdCRlbGVtZW50LnBhcmVudCgnc3BhbicpLmhhc0NsYXNzKCdtdy1yb2xsYmFjay1saW5rJylcblx0XHQpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRlbGVtZW50LmF0dHIoJ2hyZWYnKTtcblx0XHRpZiAoIWhyZWYpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRpZiAobXcudXRpbC5pc0lQdjZBZGRyZXNzKGhyZWYucmVwbGFjZSgvXig/Omh0dHBzPzpcXC9cXC8pL2ksICcnKSkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHR0cnkge1xuXHRcdFx0Ly8gTWF5YmUgYWJzb2x1dGUgVVJMXG5cdFx0XHRpZiAobmV3IE13VXJpKGhyZWYpLmhvc3QgIT09IGxvY2F0aW9uLmhvc3QpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHQvLyBNYXliZSByZWxhdGl2ZSBVUkxcblx0XHRcdFx0aWYgKG5ldyBNd1VyaShsb2NhdGlvbi5ocmVmICsgaHJlZikuaG9zdCAhPT0gbG9jYXRpb24uaG9zdCkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bGV0IHBhZ2VUaXRsZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRcdGlmIChhcnRpY2xlUmVnZXgudGVzdChocmVmKSkge1xuXHRcdFx0Y29uc3QgbWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSA9IGFydGljbGVSZWdleC5leGVjKGhyZWYpIGFzIFJlZ0V4cEV4ZWNBcnJheTtcblx0XHRcdHBhZ2VUaXRsZSA9IG1hdGNoWzFdIGFzIHN0cmluZztcblx0XHR9IGVsc2UgaWYgKHNjcmlwdFJlZ2V4LnRlc3QoaHJlZikpIHtcblx0XHRcdGNvbnN0IG1hdGNoOiBSZWdFeHBFeGVjQXJyYXkgPSBzY3JpcHRSZWdleC5leGVjKGhyZWYpIGFzIFJlZ0V4cEV4ZWNBcnJheTtcblx0XHRcdHBhZ2VUaXRsZSA9IG1hdGNoWzFdIGFzIHN0cmluZztcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0cGFnZVRpdGxlID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhZ2VUaXRsZSkucmVwbGFjZSgvXy9nLCAnICcpO1xuXG5cdFx0Y29uc3QgdXNlckV4ZWNBcnJheTogUmVnRXhwRXhlY0FycmF5IHwgbnVsbCA9IHVzZXJUaXRsZVJlZ2V4LmV4ZWMocGFnZVRpdGxlKTtcblx0XHRpZiAoIXVzZXJFeGVjQXJyYXkgfHwgdHlwZW9mIHVzZXJFeGVjQXJyYXlbMl0gIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRsZXQgdXNlcjogc3RyaW5nID0gdXNlckV4ZWNBcnJheVsyXS5zbGljZSgwLCAxKS50b1VwcGVyQ2FzZSgpICsgdXNlckV4ZWNBcnJheVsyXS5zbGljZSgxKTtcblx0XHRpZiAobXcudXRpbC5pc0lQdjZBZGRyZXNzKHVzZXIpKSB7XG5cdFx0XHR1c2VyID0gdXNlci50b1VwcGVyQ2FzZSgpO1xuXHRcdH1cblxuXHRcdHVzZXJMaW5rc1t1c2VyXSA/Pz0gW107XG5cblx0XHQodXNlckxpbmtzW3VzZXJdIGFzICh0eXBlb2YgdXNlckxpbmtzKVtrZXlvZiB0eXBlb2YgdXNlckxpbmtzXSlbXG5cdFx0XHQodXNlckxpbmtzW3VzZXJdIGFzICh0eXBlb2YgdXNlckxpbmtzKVtrZXlvZiB0eXBlb2YgdXNlckxpbmtzXSkubGVuZ3RoXG5cdFx0XSA9ICRlbGVtZW50OyAvLyBSZXBsYWNlIEFycmF5I3B1c2ggdG8gYXZvaWQgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXHR9XG5cblx0cmV0dXJuIHVzZXJMaW5rcztcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVVc2VyTGlua3N9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcblxuY29uc3QgZ2VuZXJhdGVVc2VyTmFtZXNwYWNlVGl0bGVzID0gKCk6IHN0cmluZ1tdID0+IHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlSWRzfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRjb25zdCB1c2VyTmFtZXNwYWNlVGl0bGVzOiBzdHJpbmdbXSA9IFtdO1xuXG5cdGZvciAoY29uc3QgW25hbWVzcGFjZSwgaWRdIG9mIE9iamVjdC5lbnRyaWVzKHdnTmFtZXNwYWNlSWRzKSkge1xuXHRcdGlmICghT1BUSU9OUy51c2VyTmFtZXNwYWNlTnVtYmVycy5pbmNsdWRlcyhpZCkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHVzZXJOYW1lc3BhY2VUaXRsZXNbdXNlck5hbWVzcGFjZVRpdGxlcy5sZW5ndGhdID0gYCR7bXcudXRpbC5lc2NhcGVSZWdFeHAobmFtZXNwYWNlLnJlcGxhY2UoL18vZywgJyAnKSl9OmA7IC8vIFJlcGxhY2UgQXJyYXkjcHVzaCB0byBhdm9pZCBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdH1cblxuXHRyZXR1cm4gdXNlck5hbWVzcGFjZVRpdGxlcztcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVVc2VyTmFtZXNwYWNlVGl0bGVzfTtcbiIsICJpbXBvcnQge21hcmtCbG9ja2VkSVBMaW5rcywgbWFya0Jsb2NrZWRVc2VyTGlua3MsIG1hcmtHbG9iYWxMb2NrZWRVc2VyTGlua3N9IGZyb20gJy4vdXRpbC9tYXJrVXNlckxpbmtzJztcbmltcG9ydCB7Z2VuZXJhdGVVc2VyTGlua3N9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZVVzZXJMaW5rcyc7XG5cbmNvbnN0IG1hcmtCbG9ja2VkVXNlciA9ICgkY29udGVudDogSlF1ZXJ5KTogdm9pZCA9PiB7XG5cdC8vIEZpbmQgYWxsIFwidXNlclwiIGxpbmtzIGFuZCBzYXZlIHRoZW0gaW4gdXNlckxpbmtzIDogeyAndXNlcnMnOiBbPGxpbmsxPiwgPGxpbmsyPiwgLi4uXSwgJ3VzZXIyJzogWzxsaW5rMz4sIDxsaW5rMz4sIC4uLl0sIC4uLiB9XG5cdGNvbnN0IHVzZXJMaW5rczogUmVjb3JkPHN0cmluZywgSlF1ZXJ5W10+ID0gZ2VuZXJhdGVVc2VyTGlua3MoJGNvbnRlbnQpO1xuXG5cdG1hcmtHbG9iYWxMb2NrZWRVc2VyTGlua3ModXNlckxpbmtzKTtcblx0bWFya0Jsb2NrZWRVc2VyTGlua3ModXNlckxpbmtzKTtcblx0bWFya0Jsb2NrZWRJUExpbmtzKHVzZXJMaW5rcyk7XG59O1xuXG5leHBvcnQge21hcmtCbG9ja2VkVXNlcn07XG4iLCAiaW1wb3J0IHttYXJrQmxvY2tlZFVzZXJ9IGZyb20gJy4vbWFya0Jsb2NrZWRVc2VyJztcblxuY29uc3Qge3dnQWN0aW9uLCB3Z05hbWVzcGFjZU51bWJlcn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmNvbnN0IGFkZEhvb2sgPSAoKTogdm9pZCA9PiB7XG5cdGxldCBpc0luaXQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRtdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuYWRkKGZ1bmN0aW9uIG1hcmtCbG9ja2VkKCRjb250ZW50KTogdm9pZCB7XG5cdFx0aWYgKGlzSW5pdCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpc0luaXQgPSB0cnVlO1xuXG5cdFx0Ly8gT24gdGhlIGZpcnN0IGNhbGwgYWZ0ZXIgaW5pdGlhbCBwYWdlIGxvYWQsIGNvbnRhaW5lciBpcyBtdy51dGlsLiRjb250ZW50XG5cdFx0Ly8gVXNlZCB0byBsaW1pdCBtYWluc3BhY2UgYWN0aXZpdHkgdG8ganVzdCB0aGUgZGlmZiBkZWZpbml0aW9uc1xuXHRcdGlmICh3Z0FjdGlvbiA9PT0gJ3ZpZXcnICYmIHdnTmFtZXNwYWNlTnVtYmVyID09PSAwKSB7XG5cdFx0XHQkY29udGVudCA9ICRjb250ZW50LmZpbmQoJy5kaWZmLXRpdGxlJyk7XG5cdFx0fVxuXHRcdC8vIE9uIHBhZ2UgbG9hZCwgYWxzbyB1cGRhdGUgdGhlIG5hbWVzcGFjZSB0YWJcblx0XHQkY29udGVudCA9ICRjb250ZW50LmFkZCgnI2NhLW5zdGFiLXVzZXInKTtcblxuXHRcdG1hcmtCbG9ja2VkVXNlcigkY29udGVudCk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHthZGRIb29rfTtcbiIsICJpbXBvcnQge2FkZEhvb2t9IGZyb20gJy4vbW9kdWxlcy9hZGRIb29rJztcblxuaWYgKCFbJ2VkaXQnLCAnc3VibWl0J10uaW5jbHVkZXMobXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKSkpIHtcblx0YWRkSG9vaygpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEseUJBQTBCO0FBQzFCLElBQUFDLHVCQUF3QixDQUFDLEdBQUcsQ0FBQztBQUM3QixJQUFBQyxtQkFBb0I7QUFDcEIsSUFBQUMsb0JBQXFCO0FBQ3JCLElBQUFDLFVBQVc7O0FDTFosSUFBQUMsb0JBQXVCQyxRQUFBLGlCQUFBO0FBRXZCLElBQU1DLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLFdBQUEsR0FBVUgsa0JBQUFJLFVBQVM7TUFDbEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsVUFBQSxHQUFTTixrQkFBQUksVUFBUztNQUNqQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELHFCQUFBLEdBQW9CTCxrQkFBQUksVUFBUztNQUM1QkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERSxTQUFBLEdBQVFQLGtCQUFBSSxVQUFTO01BQ2hCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RHLFVBQUEsR0FBU1Isa0JBQUFJLFVBQVM7TUFDakJDLElBQUk7TUFD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QUFBO0FBRW5CaEssZ0JBQVVLLElBQUksRUFDYkwsVUFBVUssSUFBSSxFQUFpRGdGLE1BQ2pFLElBQUk2RTtJQUNMO0VBQUEsU0FBQTlJLEtBQUE7QUFBQXlJLGdCQUFBeEksRUFBQUQsR0FBQTtFQUFBLFVBQUE7QUFBQXlJLGdCQUFBdkksRUFBQTtFQUFBO0FBRUEsU0FBT3RCO0FBQ1I7O0FFcEZBLElBQU1nTCxrQkFBbUJwQixjQUEyQjtBQUVuRCxRQUFNNUosWUFBc0MySixrQkFBa0JDLFFBQVE7QUFFdEUzRSw0QkFBMEJqRixTQUFTO0FBQ25Dc0csdUJBQXFCdEcsU0FBUztBQUM5QnlILHFCQUFtQnpILFNBQVM7QUFDN0I7O0FDUkEsSUFBTTtFQUFDaUw7RUFBVUM7QUFBaUIsSUFBSXpGLEdBQUdpRCxPQUFPM0UsSUFBSTtBQUVwRCxJQUFNb0gsVUFBVUEsTUFBWTtBQUMzQixNQUFJQyxTQUFrQjtBQUV0QjNGLEtBQUc0RixLQUFLLGtCQUFrQixFQUFFQyxJQUFJLFNBQVNDLFlBQVkzQixVQUFnQjtBQUNwRSxRQUFJd0IsUUFBUTtBQUNYO0lBQ0Q7QUFDQUEsYUFBUztBQUlULFFBQUlILGFBQWEsVUFBVUMsc0JBQXNCLEdBQUc7QUFDbkR0QixpQkFBV0EsU0FBU0UsS0FBSyxhQUFhO0lBQ3ZDO0FBRUFGLGVBQVdBLFNBQVMwQixJQUFJLGdCQUFnQjtBQUV4Q04sb0JBQWdCcEIsUUFBUTtFQUN6QixDQUFDO0FBQ0Y7O0FDckJBLElBQUksQ0FBQyxDQUFDLFFBQVEsUUFBUSxFQUFFWCxTQUFTeEQsR0FBR2lELE9BQU8zRSxJQUFJLFVBQVUsQ0FBQyxHQUFHO0FBQzVEb0gsVUFBUTtBQUNUOyIsCiAgIm5hbWVzIjogWyJjb250cmlidXRpb25zUGFnZUFsaWFzIiwgInVzZXJOYW1lc3BhY2VOdW1iZXJzIiwgInN0b3JhZ2VLZXlMb2NrZWQiLCAic3RvcmFnZUtleUJsb2NrZWQiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImdldEkxOG5NZXNzYWdlcyIsICJpbmZpbml0eSIsICJsb2NhbGl6ZSIsICJlbiIsICJCbG9ja2VkIiwgIkxvY2tlZCIsICJwYXJ0aWFsIiwgInpoIiwgImQiLCAicyIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiYWRkWmVybyIsICJ2IiwgImNvbmNhdCIsICJpbkhvdXJzIiwgIm1zIiwgIm1tIiwgIk1hdGgiLCAiZmxvb3IiLCAiaGgiLCAiZGQiLCAicGFyc2VUUyIsICJzdHJpbmciLCAibSIsICJyZXBsYWNlIiwgIm1hdGNoIiwgIkRhdGUiLCAiVVRDIiwgImdldFRpbWUiLCAidXNlcmxpbmtJbmRlZiIsICJ1c2VybGlua0xvY2tlZCIsICJ1c2VybGlua1BhcnRpYWwiLCAidXNlcmxpbmtUZW1wIiwgIm1hcmtHbG9iYWxMb2NrZWRMaW5rcyIsICJyZXNwb25zZSIsICJ1c2VyTGlua3MiLCAiX3Jlc3BvbnNlJHF1ZXJ5IiwgIl9yZXNwb25zZSRxdWVyeSRnbG9iYSIsICJfcmVzcG9uc2UkcXVlcnkkZ2xvYmEyIiwgImdsb2JhbHVzZXJpbmZvIiwgInVzZXIiLCAibmFtZSIsICJsb2NrZWQiLCAidGlwIiwgIiRsaW5rcyIsICJjbGFzc05hbWUiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgIm4iLCAiZG9uZSIsICIkbGluayIsICJ2YWx1ZSIsICJhZGRDbGFzcyIsICJhdHRyIiwgImVyciIsICJlIiwgImYiLCAibWFya0xvY2FsQmxvY2tzIiwgImJraXAiLCAiX3Jlc3BvbnNlJHF1ZXJ5MiIsICJibG9ja3MiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAiYmxvY2siLCAiaXNQYXJ0aWFsQmxjb2siLCAicmVzdHJpY3Rpb25zIiwgImJsb2NrVGltZSIsICJleHBpcnkiLCAic3RhcnRzV2l0aCIsICJ0aW1lc3RhbXAiLCAiYnkiLCAicmVhc29uIiwgIm5vdyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJtYXJrR2xvYmFsQmxvY2tzIiwgIl9yZXNwb25zZSRxdWVyeTMiLCAiZ2xvYmFsYmxvY2tzIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgInRhcmdldCIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiYXBpIiwgImluaXRNd0FwaSIsICJxdWVyeUdsb2JhbFVzZXJJbmZvIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiZ3VpdXNlciIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgIm1ldGEiLCAic21heGFnZSIsICJtYXhhZ2UiLCAiZ2V0IiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJxdWVyeUlQQmxvY2tzIiwgIl9yZWYyIiwgImxpc3QiLCAiYmtsaW1pdCIsICJia3Byb3AiLCAiYmdpcCIsICJiZ2xpbWl0IiwgImJncHJvcCIsICJfeDIiLCAicXVlcnlVc2VyQmxvY2tzIiwgIl9yZWYzIiwgImJrdXNlcnMiLCAiYmd0YXJnZXRzIiwgIl94MyIsICJtYXJrR2xvYmFsTG9ja2VkVXNlckxpbmtzIiwgInVzZXJzIiwgIk9iamVjdCIsICJrZXlzIiwgImxlbmd0aCIsICJwcm9taXNlcyIsICJfaSIsICJfdXNlcnMiLCAibXciLCAidXRpbCIsICJpc0lQdjRBZGRyZXNzIiwgImlzSVB2NkFkZHJlc3MiLCAic3RvcmFnZSIsICJnZXRPYmplY3QiLCAiX3Jlc3BvbnNlJHF1ZXJ5NCIsICJzZXRPYmplY3QiLCAiZXJyb3IiLCAiY29uc29sZSIsICJfaTIiLCAiX3Byb21pc2VzIiwgInByb21pc2UiLCAibWFya0Jsb2NrZWRVc2VyTGlua3MiLCAiX2l0ZXJhdG9yNiIsICJfc3RlcDYiLCAiX3Jlc3BvbnNlJHF1ZXJ5NyIsICJfcmVzcG9uc2UkcXVlcnk4IiwgIl9yZXNwb25zZSRxdWVyeTkiLCAiX3Jlc3BvbnNlJHF1ZXJ5MCIsICJmaWx0ZXIiLCAiZWxlbWVudCIsICJpIiwgInNwbGljZSIsICJfcmVzcG9uc2UkcXVlcnk1IiwgIl9yZXNwb25zZSRxdWVyeTYiLCAiX2l0ZXJhdG9yNyIsICJfc3RlcDciLCAiX2l0ZXJhdG9yOCIsICJfc3RlcDgiLCAiX2kzIiwgIl9wcm9taXNlczIiLCAibWFya0Jsb2NrZWRJUExpbmtzIiwgIl9pdGVyYXRvcjkiLCAiX3N0ZXA5IiwgInRvVXBwZXJDYXNlIiwgIl9yZXNwb25zZSRxdWVyeTEiLCAiX3Jlc3BvbnNlJHF1ZXJ5MTAiLCAiX3Jlc3BvbnNlJHF1ZXJ5MTEiLCAiX3Jlc3BvbnNlJHF1ZXJ5MTIiLCAiX2l0ZXJhdG9yMCIsICJfc3RlcDAiLCAiX2l0ZXJhdG9yMSIsICJfc3RlcDEiLCAiX2k0IiwgIl9wcm9taXNlczMiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImdlbmVyYXRlVXNlck5hbWVzcGFjZVRpdGxlcyIsICJ3Z05hbWVzcGFjZUlkcyIsICJjb25maWciLCAidXNlck5hbWVzcGFjZVRpdGxlczIiLCAiX2k1IiwgIl9PYmplY3QkZW50cmllcyIsICJlbnRyaWVzIiwgIm5hbWVzcGFjZSIsICJpZCIsICJpbmNsdWRlcyIsICJlc2NhcGVSZWdFeHAiLCAidXNlck5hbWVzcGFjZVRpdGxlcyIsICJ1c2VyVGl0bGVSZWdleCIsICJSZWdFeHAiLCAiam9pbiIsICJ3Z0FydGljbGVQYXRoIiwgIndnU2NyaXB0IiwgImFydGljbGVSZWdleCIsICJzY3JpcHRSZWdleCIsICJnZW5lcmF0ZVVzZXJMaW5rcyIsICIkY29udGVudCIsICJfaXRlcmF0b3IxMCIsICJmaW5kIiwgIl9zdGVwMTAiLCAiX3VzZXIiLCAiX3VzZXJMaW5rcyRfdXNlciIsICIkZWxlbWVudCIsICIkIiwgImhhc0NsYXNzIiwgInBhcmVudCIsICJocmVmIiwgIk13VXJpIiwgImhvc3QiLCAibG9jYXRpb24iLCAicGFnZVRpdGxlIiwgInRlc3QiLCAiZXhlYyIsICJkZWNvZGVVUklDb21wb25lbnQiLCAidXNlckV4ZWNBcnJheSIsICJzbGljZSIsICJtYXJrQmxvY2tlZFVzZXIiLCAid2dBY3Rpb24iLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAiYWRkSG9vayIsICJpc0luaXQiLCAiaG9vayIsICJhZGQiLCAibWFya0Jsb2NrZWQiXQp9Cg==
