/**
 * SPDX-License-Identifier: CC-BY-SA-4.0 OR Apache-2.0
 * _addText: '{{Gadget Header|title=Wikiplus|license=CC-BY-SA-4.0|license2=Apache-2.0}}'
 *
 * Wikiplus
 *
 * @base {@link https://github.com/Wikiplus/Wikiplus}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/Wikiplus}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/Wikiplus/}
 * @author Eridanus Sora (妹空酱)
 * @license CC-BY-SA-4.0 {@link https://youshou.wiki/wiki/H:CC-BY-SA-4.0} OR Apache-2.0 {@link http://www.apache.org/licenses/LICENSE-2.0}
 */

/**
 * Copyright 2014-2024 Eridanus Sora (妹空酱)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
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

// dist/Wikiplus/Wikiplus.js
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
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
//! src/Wikiplus/modules/utils/constants.js
var Constants;
var constants_default;
var init_constants = __esm({
  "src/Wikiplus/modules/utils/constants.js"() {
    "use strict";
    Constants = class {
      version = "4.1.0";
      get isArticle() {
        return window.mw.config.get("wgIsArticle");
      }
      get currentPageName() {
        return window.mw.config.get("wgPageName").replace(/ /g, "_");
      }
      get articleId() {
        return window.mw.config.get("wgArticleId");
      }
      get revisionId() {
        return window.mw.config.get("wgRevisionId");
      }
      get latestRevisionId() {
        return window.mw.config.get("wgCurRevisionId");
      }
      get articlePath() {
        return window.mw.config.get("wgArticlePath");
      }
      get scriptPath() {
        return window.mw.config.get("wgScriptPath");
      }
      get action() {
        return window.mw.config.get("wgAction");
      }
      get skin() {
        return window.mw.config.get("skin");
      }
      get userGroups() {
        return window.mw.config.get("wgUserGroups");
      }
      get wikiId() {
        return window.mw.config.get("wgWikiID");
      }
      userAgent = "YsArchives/1.1 Wikiplus/".concat(this.version, " (").concat(this.wikiId, ")");
    };
    constants_default = new Constants();
  }
});
//! src/Wikiplus/modules/utils/requests.js
var Requests;
var requests_default;
var init_requests = __esm({
  "src/Wikiplus/modules/utils/requests.js"() {
    "use strict";
    init_constants();
    Requests = {
      base: "".concat(location.protocol, "//").concat(location.host).concat(constants_default.scriptPath, "/api.php"),
      get(query) {
        return _asyncToGenerator(function* () {
          const url = new URL(Requests.base);
          for (var _i = 0, _Object$keys = Object.keys(query); _i < _Object$keys.length; _i++) {
            const key = _Object$keys[_i];
            url.searchParams.append(key, query[key]);
          }
          const response = yield fetch(url, {
            credentials: "same-origin",
            headers: {
              "Api-User-Agent": constants_default.userAgent
            }
          });
          return yield response.json();
        })();
      },
      post(payload) {
        return _asyncToGenerator(function* () {
          const url = new URL(Requests.base);
          const form = new FormData();
          for (var _i2 = 0, _Object$entries = Object.entries(payload); _i2 < _Object$entries.length; _i2++) {
            const [key, value] = _Object$entries[_i2];
            form.append(key, value);
          }
          const response = yield fetch(url, {
            method: "POST",
            body: form,
            credentials: "same-origin",
            headers: {
              "Api-User-Agent": constants_default.userAgent
            }
          });
          return yield response.json();
        })();
      }
    };
    requests_default = Requests;
  }
});
//! src/Wikiplus/modules/utils/i18n.js
var I18n;
var i18n_default;
var init_i18n = __esm({
  "src/Wikiplus/modules/utils/i18n.js"() {
    "use strict";
    I18n = class {
      language;
      i18nData = {};
      sessionUpdateLog = [];
      constructor() {
        let language;
        try {
          language = JSON.parse(localStorage["Wikiplus_Settings"])["language"] || navigator.language.toLowerCase();
        } catch {
          language = (navigator.language || navigator.browserLanguage).replace(/han[st]-?/i, "").toLowerCase();
        }
        this.language = language;
        try {
          const raw = sessionStorage.getItem("Wikiplus_i18nCache") || "{}";
          const i18nCache = JSON.parse(raw);
          if (i18nCache && typeof i18nCache === "object" && i18nCache[language]) {
            this.i18nData[language] = i18nCache[language];
          }
        } catch {
          try {
            sessionStorage.setItem("Wikiplus_i18nCache", "{}");
          } catch {
          }
        }
      }
      translate(key, placeholders = []) {
        let result = "";
        if (this.language in this.i18nData) {
          if (key in this.i18nData[this.language]) {
            result = this.i18nData[this.language][key];
          } else {
            this.loadLanguage(this.language);
            if (key in this.i18nData["en-us"]) {
              result = this.i18nData["en-us"][key];
            } else {
              result = key;
            }
          }
        } else {
          this.loadLanguage(this.language);
        }
        if (placeholders.length > 0) {
          var _iterator = _createForOfIteratorHelper(placeholders.entries()), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              const [index, placeholder] = _step.value;
              result = result.replace("$".concat(index + 1), placeholder);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        return result;
      }
      loadLanguage(language) {
        var _this = this;
        return _asyncToGenerator(function* () {
          if (_this.sessionUpdateLog.includes(language)) {
            return;
          }
          try {
            const response = yield (yield fetch("https://gitcdn.qiuwen.net.cn/InterfaceAdmin/Wikiplus/raw/branch/dev/languages/".concat(language, ".json"))).json();
            const nowVersion = sessionStorage.getItem("Wikiplus_LanguageVersion") || "000";
            _this.sessionUpdateLog.push(language);
            if (response.__version !== nowVersion || !(language in _this.i18nData)) {
              console.info("Update ".concat(language, " support to version ").concat(response.__version));
              _this.i18nData[language] = response;
              try {
                sessionStorage.setItem("Wikiplus_i18nCache", JSON.stringify({
                  [language]: response
                }));
                sessionStorage.setItem("Wikiplus_LanguageVersion", String(response.__version || ""));
              } catch (e) {
              }
            }
          } catch {
          }
        })();
      }
    };
    i18n_default = new I18n();
  }
});
//! src/Wikiplus/modules/utils/log.js
var WikiplusError;
var Log;
var log_default;
var init_log = __esm({
  "src/Wikiplus/modules/utils/log.js"() {
    "use strict";
    init_i18n();
    WikiplusError = class extends Error {
      constructor(message, code) {
        super(message);
        this.code = code;
      }
    };
    Log = {
      debug(message = "") {
        console.debug("[Wikiplus-DEBUG] ".concat(message));
      },
      info(message = "") {
        console.info("[Wikiplus-INFO] ".concat(message));
      },
      error(errorCode, payloads = []) {
        let template = i18n_default.translate(errorCode);
        if (payloads.length > 0) {
          var _iterator2 = _createForOfIteratorHelper(payloads.entries()), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              const [i, v] = _step2.value;
              template = template.replace(new RegExp("\\".concat(i + 1), "ig"), v);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
        console.error("[Wikiplus-ERROR] ".concat(template));
        throw new WikiplusError("".concat(template), errorCode);
      }
    };
    log_default = Log;
  }
});
//! src/Wikiplus/modules/services/wiki.js
var Wiki;
var wiki_default;
var init_wiki = __esm({
  "src/Wikiplus/modules/services/wiki.js"() {
    "use strict";
    init_requests();
    init_log();
    init_i18n();
    Wiki = class {
      pageInfoCache = {};
      /**
       * 获得 Edit Token
       * Get Edit Token
       *
       * @returns {Promise<string>}
       */
      getEditToken() {
        return _asyncToGenerator(function* () {
          const response = yield requests_default.get({
            action: "query",
            meta: "tokens",
            format: "json"
          });
          if (response.query && response.query.tokens && response.query.tokens.csrftoken && response.query.tokens.csrftoken !== "+\\") {
            return response.query.tokens.csrftoken;
          }
          return log_default.error("fail_to_get_edittoken");
        })();
      }
      /**
       * 获得页面上一版本时间戳
       * Get the timestamp of the last revision of page specified.
       *
       * @param {params.string} title 页面名 / Pagename
       * @param {params.revisionId} revisionId 修订版本号 / Revision ID
       * @param {params.contentmodel} contentmodel 内容模型 / Content Model
       * @returns {Promise<string>}
       */
      getPageInfo(_x) {
        var _this2 = this;
        return _asyncToGenerator(function* ({
          title,
          revisionId
        }) {
          try {
            const params = {
              action: "query",
              prop: "revisions|info",
              rvprop: "timestamp|ids",
              format: "json"
            };
            if (revisionId) {
              params.revids = revisionId;
            } else if (title) {
              if (_this2.pageInfoCache[title]) {
                return {
                  timestamp: _this2.pageInfoCache[title].timestamp,
                  revisionId: _this2.pageInfoCache[title].revid,
                  contentmodel: _this2.pageInfoCache[title].contentmodel
                };
              }
              params.titles = title;
            }
            const response = yield requests_default.get(params);
            if (response.query && response.query.pages) {
              const contentmodel = response.query.pages[Object.keys(response.query.pages)[0]].contentmodel;
              if (Object.keys(response.query.pages)[0] === "-1") {
                _this2.pageInfoCache[title] = {
                  contentmodel
                };
                return {
                  contentmodel
                };
              }
              const pageInfo = response.query.pages[Object.keys(response.query.pages)[0]].revisions[0];
              if (title) {
                _this2.pageInfoCache[title] = pageInfo;
                _this2.pageInfoCache[title].contentmodel = contentmodel;
              }
              return {
                timestamp: pageInfo.timestamp,
                revisionId: pageInfo.revid,
                contentmodel
              };
            }
          } catch {
            log_default.error("fail_to_get_edittoken");
          }
        }).apply(this, arguments);
      }
      /**
       * 获得页面的 Wikitext
       * Get wikitext of the page.
       *
       * @param {string} title title
       * @param {Object} config
       * @param {string} config.revisionId 版本号
       * @param {string} config.section 段落号
       * @return {Promise<string>} wikitext内容
       */
      getWikiText(_x2) {
        return _asyncToGenerator(function* ({
          section,
          revisionId
        }) {
          try {
            const params = {
              action: "query",
              prop: "revisions",
              rvprop: "content",
              format: "json",
              revids: revisionId
            };
            if (revisionId) {
              params.revids = revisionId;
            }
            if (section) {
              params.rvsection = section;
            }
            const response = yield requests_default.get(params);
            if (response.query && response.query.pages) {
              if (Object.keys(response.query.pages)[0] === "-1") {
                return "";
              }
              const pageInfo = response.query.pages[Object.keys(response.query.pages)[0]].revisions[0];
              return pageInfo["*"];
            }
          } catch {
            log_default.error("fail_to_get_wikitext");
          }
        }).apply(this, arguments);
      }
      /**
       * 解析 Wikitext
       *
       * @param {string} wikitext wikitext
       * @param {string} title 页面标题
       * @param {Object} config 设置
       * @return {Promise<string>} 解析结果 HTML
       */
      parseWikiText(_x3) {
        return _asyncToGenerator(function* (wikitext, title = "", config = {}) {
          try {
            const response = yield requests_default.post({
              format: "json",
              action: "parse",
              text: wikitext,
              title,
              pst: "true"
            });
            if (response.parse && response.parse.text) {
              return response.parse.text["*"];
            }
          } catch {
            log_default.error("cant_parse_wikitext");
          }
        }).apply(this, arguments);
      }
      /**
       * 编辑页面
       *
       * @param root0
       * @param root0.title
       * @param root0.content
       * @param root0.editToken
       * @param root0.timestamp
       * @param root0.config
       * @param root0.additionalConfig
       */
      edit() {
        return _asyncToGenerator(function* ({
          title,
          content,
          editToken,
          timestamp,
          config = {},
          additionalConfig = {}
        } = {}) {
          let response;
          try {
            response = yield requests_default.post({
              action: "edit",
              format: "json",
              text: content,
              title,
              token: editToken,
              ...timestamp ? {
                basetimestamp: timestamp
              } : {},
              ...config,
              ...additionalConfig
            });
          } catch {
            log_default.error("network_edit_error");
          }
          if (response.edit) {
            if (response.edit.result === "Success") {
              return true;
            }
            if (response.edit.code) {
              throw new Error("\n                        ".concat(i18n_default.translate("hit_abusefilter"), ":").concat(response.edit.info.replace("/Hit AbuseFilter: /ig", ""), '\n                        <br>\n                        <div style="font-size: smaller;">').concat(response.edit.warning, "</div>\n                    "));
            } else {
              log_default.error("unknown_edit_error");
            }
          } else if (response.error && response.error.code) {
            log_default.error(response.error.code);
          } else if (response.code) {
            log_default.error(response.code);
          } else {
            log_default.error("unknown_edit_error");
          }
        }).apply(this, arguments);
      }
      /**
       * 获得指定页面最新修订编号
       * Get latest revisionId of a page.
       *
       * @param {*} title
       */
      getLatestRevisionIdForPage(title) {
        var _this3 = this;
        return _asyncToGenerator(function* () {
          const {
            revisionId
          } = yield _this3.getPageInfo({
            title
          });
          return revisionId;
        })();
      }
    };
    wiki_default = new Wiki();
  }
});
//! src/Wikiplus/modules/core/page.js
var Page;
var page_default;
var init_page = __esm({
  "src/Wikiplus/modules/core/page.js"() {
    "use strict";
    init_wiki();
    init_log();
    Page = class {
      timestamp;
      editToken;
      title;
      revisionId;
      inited = false;
      isNewPage = false;
      contentmodel = "wikitext";
      sectionCache = {};
      /**
       * @param {params.title} 页面标题 Page Name (optional)
       * @param {params.revisionId} 页面修订编号 Revision Id
       * @param {params.contentmodel} 页面内容模型 Content Model
       */
      constructor({
        title,
        revisionId
      }) {
        this.title = title;
        this.revisionId = revisionId;
        this.isNewPage = !revisionId;
      }
      /**
       * 初始化 获得页面EditToken和初始TimeStamp
       * Initialization.
       *
       * @param {string} editToken (optional) 如果提供了editToken，将不会再获取
       */
      init() {
        var _this4 = this;
        return _asyncToGenerator(function* ({
          editToken = ""
        } = {}) {
          const promiseArr = [_this4.getTimestamp(), _this4.getContentModel()];
          if (!editToken) {
            promiseArr.push(_this4.getEditToken());
          }
          yield Promise.all(promiseArr);
          _this4.inited = true;
          log_default.info("Page initialization for ".concat(_this4.title, "#").concat(_this4.revisionId, " finished."));
        }).apply(this, arguments);
      }
      /**
       * 获得 EditToken
       * Get EditToken
       */
      getEditToken() {
        var _this5 = this;
        return _asyncToGenerator(function* () {
          yield mw.loader.using("mediawiki.user");
          if (mw.user.tokens.get("csrfToken") && mw.user.tokens.get("csrfToken") !== "+\\") {
            _this5.editToken = mw.user.tokens.get("csrfToken");
            return;
          }
          _this5.editToken = yield wiki_default.getEditToken();
        })();
      }
      /**
       * 获得编辑基准时间戳
       * Get Base Timestamp
       */
      getTimestamp() {
        var _this6 = this;
        return _asyncToGenerator(function* () {
          const {
            timestamp,
            revisionId
          } = yield wiki_default.getPageInfo({
            revisionId: _this6.revisionId,
            title: _this6.title
          });
          _this6.timestamp = timestamp;
          if (revisionId) {
            _this6.revisionId = revisionId;
            _this6.isNewPage = false;
          }
        })();
      }
      /**
       * 获得页面内容模型
       *
       * @param {Object} config
       * @param {string} config.revisionId
       */
      getContentModel() {
        var _this7 = this;
        return _asyncToGenerator(function* () {
          const {
            contentmodel
          } = yield wiki_default.getPageInfo({
            revisionId: _this7.revisionId,
            title: _this7.title
          });
          _this7.contentmodel = contentmodel || "wikitext";
        })();
      }
      /**
       * 获得 WikiText
       *
       * @param {Object} config
       * @param {string} config.section
       * @param {string} config.revisionId
       */
      getWikiText() {
        var _this8 = this;
        return _asyncToGenerator(function* ({
          section = ""
        } = {}) {
          const sec = section === -1 ? "" : section;
          if (_this8.sectionCache[sec]) {
            return _this8.sectionCache[sec];
          }
          const wikiText = yield wiki_default.getWikiText({
            section: sec,
            revisionId: _this8.revisionId
          });
          log_default.info("Wikitext of ".concat(_this8.title, "#").concat(section, " fetched."));
          _this8.sectionCache[sec] = wikiText;
          return wikiText;
        }).apply(this, arguments);
      }
      /**
       * 解析 WikiText
       *
       * @param {string} wikitext
       */
      parseWikiText(wikitext) {
        var _this9 = this;
        return _asyncToGenerator(function* () {
          return wiki_default.parseWikiText(wikitext, _this9.title);
        })();
      }
      /**
       * 编辑页面
       *
       * @param {*} config
       * @param payload
       */
      edit(payload) {
        var _this0 = this;
        return _asyncToGenerator(function* () {
          if (!_this0.editToken) {
            log_default.error("fail_to_get_edittoken");
            return;
          }
          if (!_this0.timestamp && !_this0.isNewPage) {
            log_default.error("fail_to_get_timestamp");
            return;
          }
          return wiki_default.edit({
            title: _this0.title,
            editToken: _this0.editToken,
            ..._this0.timestamp ? {
              timestamp: _this0.timestamp
            } : {},
            ...payload,
            additionalConfig: {
              ..._this0.isNewPage ? {
                createonly: _this0.isNewPage
              } : {}
            }
          });
        })();
      }
    };
    page_default = Page;
  }
});
//! src/Wikiplus/modules/core/notification.js
var Notification;
var notification_default;
var init_notification = __esm({
  "src/Wikiplus/modules/core/notification.js"() {
    "use strict";
    Notification = class {
      constructor() {
        this.init();
      }
      init() {
        $("body").append('<div id="MoeNotification"></div>');
      }
      display(text = "喵~", type = "success", callback = () => {
      }) {
        $("#MoeNotification").append($("<div>").addClass("MoeNotification-notice").addClass("MoeNotification-notice-".concat(type)).append("<span>".concat(text, "</span>")));
        $("#MoeNotification").find(".MoeNotification-notice").last().fadeIn(300);
        this.bind();
        this.clear();
        callback($("#MoeNotification").find(".MoeNotification-notice").last());
      }
      bind() {
        const self = this;
        $(".MoeNotification-notice").on("mouseover", function() {
          self.slideLeft($(this));
        });
      }
      success(text, callback) {
        this.display(text, "success", callback);
      }
      warning(text, callback) {
        this.display(text, "warning", callback);
      }
      error(text, callback) {
        this.display(text, "error", callback);
      }
      clear() {
        if ($(".MoeNotification-notice").length >= 10) {
          $("#MoeNotification").children().first().fadeOut(150, function() {
            $(this).remove();
          });
          setTimeout(this.clear, 300);
        }
      }
      empty(f) {
        $(".MoeNotification-notice").each(function(i) {
          if (typeof f === "function") {
            const ele = $(this);
            setTimeout(() => {
              f(ele);
            }, 200 * i);
          } else {
            $(this).delay(i * 200).fadeOut("fast", function() {
              $(this).remove();
            });
          }
        });
      }
      slideLeft(ele, speed) {
        ele.css("position", "relative");
        ele.animate({
          left: "-200%"
        }, speed || 150, function() {
          $(this).fadeOut("fast", function() {
            $(this).remove();
          });
        });
      }
    };
    notification_default = new Notification();
  }
});
//! src/Wikiplus/modules/utils/sleep.js
var sleep;
var sleep_default;
var init_sleep = __esm({
  "src/Wikiplus/modules/utils/sleep.js"() {
    "use strict";
    sleep = (time) => {
      return new Promise((resolve) => {
        return setTimeout(resolve, time);
      });
    };
    sleep_default = sleep;
  }
});
//! src/Wikiplus/modules/utils/helpers.js
function parseQuery(url) {
  const reg = /(([^?&=]+)(?:=([^?&=]*))*)/g;
  const params = {};
  let match;
  while (match = reg.exec(url)) {
    try {
      params[match[2]] = decodeURIComponent(match[3]);
    } catch {
      params[match[2]] = match[3];
    }
  }
  return params;
}
var init_helpers = __esm({
  "src/Wikiplus/modules/utils/helpers.js"() {
    "use strict";
  }
});
//! src/Wikiplus/modules/core/ui.js
var UI;
var ui_default;
var init_ui = __esm({
  "src/Wikiplus/modules/core/ui.js"() {
    "use strict";
    init_constants();
    init_notification();
    init_i18n();
    init_log();
    init_sleep();
    init_helpers();
    UI = class {
      quickEditPanelVisible = false;
      scrollTop = 0;
      /**
       * 创建居中对话框
       *
       * @param {string} title 窗口标题
       * @param {string | JQuery<HTMLElement>} content 内容
       * @param {*} width 宽度
       * @param {*} callback 回调函数
       */
      createDialogBox(title = "Wikiplus", content = "", width = 600, callback = () => {
      }) {
        if ($(".Wikiplus-InterBox").length > 0) {
          $(".Wikiplus-InterBox").each(function() {
            $(this).remove();
          });
        }
        const clientWidth = window.innerWidth;
        const clientHeight = window.innerHeight;
        const dialogWidth = Math.min(clientWidth, width);
        const dialogBox = $("<div>").addClass("Wikiplus-InterBox").css({
          "margin-left": clientWidth / 2 - dialogWidth / 2,
          top: $(document).scrollTop() + clientHeight * 0.2,
          display: "none"
        }).append($("<div>").addClass("Wikiplus-InterBox-Header").html(title)).append($("<div>").addClass("Wikiplus-InterBox-Content").append(content)).append($("<span>").text("×").addClass("Wikiplus-InterBox-Close"));
        $("body").append(dialogBox);
        $(".Wikiplus-InterBox").width(dialogWidth);
        $(".Wikiplus-InterBox-Close").on("click", function() {
          $(this).parent().fadeOut("fast", function() {
            window.addEventListener("close", window.onbeforeunload = void 0);
            $(this).remove();
          });
        });
        const bindDragging = function(element) {
          element.mousedown((e) => {
            const baseX = e.clientX;
            const baseY = e.clientY;
            const baseOffsetX = element.parent().offset().left;
            const baseOffsetY = element.parent().offset().top;
            $(document).on("mousemove", (e2) => {
              element.parent().css({
                "margin-left": baseOffsetX + e2.clientX - baseX,
                top: baseOffsetY + e2.clientY - baseY
              });
            });
            $(document).on("mouseup", () => {
              element.unbind("mousedown");
              $(document).off("mousemove");
              $(document).off("mouseup");
              bindDragging(element);
            });
          });
        };
        bindDragging($(".Wikiplus-InterBox-Header"));
        $(".Wikiplus-InterBox").fadeIn(500);
        callback();
        return dialogBox;
      }
      /**
       * 在搜索框左侧「更多」菜单内添加按钮
       * Add a button in "More" menu (left of the search bar)
       *
       * @param {string} text 按钮名 Button text
       * @param {string} id 按钮id Button id
       * @return {JQuery<HTMLElement>} button
       */
      addFunctionButton(text, id) {
        let button;
        switch (constants_default.skin) {
          case "minerva":
            button = $("<li>").attr("id", id).addClass("toggle-list-item").append($("<a>").addClass("mw-ui-icon mw-ui-icon-before toggle-list-item__anchor").append($("<span>").attr("href", "javascript:void(0);").addClass("toggle-list-item__label").text(text)));
            break;
          case "moeskin":
            button = $("<li>").addClass("Wikiplus-More-Function-Button").attr("id", id).append($("<a>").attr("href", "javascript:void(0);").text(text));
            break;
          default:
            button = $("<li>").addClass("mw-list-item").addClass("vector-tab-noicon").attr("id", id).append($("<a>").attr("href", "javascript:void(0);").text(text));
        }
        if (constants_default.skin === "minerva" && $("#p-tb").length > 0) {
          $("#p-tb").append(button);
          return $("#".concat(id));
        } else if (constants_default.skin === "moeskin") {
          $(".more-actions-list").first().append(button);
          return $("#".concat(id));
        } else if ($("#p-cactions").length > 0) {
          $("#p-cactions ul").append(button);
          return $("#".concat(id));
        }
        log_default.info(i18n_default.translate("cant_add_funcbtn"));
      }
      /**
       * 插入快速重定向按钮
       *
       * @param {*} onClick
       */
      insertSimpleRedirectButton(onClick = () => {
      }) {
        const button = this.addFunctionButton(i18n_default.translate("redirect_from"), "Wikiplus-SR-Intro");
        if (button) {
          button.on("click", onClick);
        }
      }
      /**
       * 插入设置面板按钮
       *
       * @param {*} onClick
       */
      insertSettingsPanelButton(onClick = () => {
      }) {
        const button = this.addFunctionButton(i18n_default.translate("wikiplus_settings"), "Wikiplus-Settings-Intro");
        if (button) {
          button.on("click", onClick);
        }
      }
      /**
       * 插入顶部快速编辑按钮
       * Insert QuickEdit button besides page edit button.
       *
       * @param onClick
       */
      insertTopQuickEditEntry(onClick) {
        const topBtn = $("<li>").attr("id", "Wikiplus-Edit-TopBtn").attr("class", "mw-list-item");
        const topBtnLink = $("<a>").attr("href", "javascript:void(0)").text("".concat(i18n_default.translate("quickedit_topbtn")));
        topBtn.append(topBtnLink);
        switch (constants_default.skin) {
          case "minerva":
            topBtn.css({
              "align-items": "center",
              display: "flex"
            });
            topBtn.find("span").addClass("page-actions-menu__list-item");
            topBtn.find("a").addClass("mw-ui-icon mw-ui-icon-element mw-ui-icon-wikimedia-edit-base20 mw-ui-icon-with-label-desktop").css("vertical-align", "middle");
            break;
          case "vector-2022":
            topBtn.addClass("vector-tab-noicon");
            break;
          case "vector":
            topBtn.append($("<span>").append(topBtnLink));
            break;
          default:
        }
        $(topBtn).on("click", () => {
          onClick({
            sectionNumber: -1,
            targetPageName: constants_default.currentPageName
          });
        });
        if ($("#ca-edit").length > 0 && $("#Wikiplus-Edit-TopBtn").length === 0) {
          constants_default.skin === "minerva" ? $("#ca-edit").parent().after(topBtn) : $("#ca-edit").after(topBtn);
        }
      }
      /**
       * 插入段落快速编辑按钮
       * Insert QuickEdit buttons for each section.
       *
       * @param onClick
       */
      insertSectionQuickEditEntries(onClick = () => {
      }) {
        const sectionBtn = constants_default.skin === "minerva" ? $("<span>").append($("<a>").addClass("Wikiplus-Edit-SectionBtn mw-ui-icon mw-ui-icon-element mw-ui-icon-wikimedia-edit-base20 edit-page mw-ui-icon-flush-right").css("margin-left", "0.75em").attr("href", "javascript:void(0)").attr("title", i18n_default.translate("quickedit_sectionbtn"))) : $("<span>").append($("<span>").addClass("mw-editsection-divider").text(" | ")).append($("<a>").addClass("Wikiplus-Edit-SectionBtn").attr("href", "javascript:void(0)").text(i18n_default.translate("quickedit_sectionbtn")));
        $(".mw-editsection").each(function(i) {
          try {
            const editURL = $(this).find("a[href*='action=edit']").first().attr("href");
            const sectionNumber = editURL.match(/&[ve]*section\=([^&]+)/)[1].replace(/T-/gi, "");
            const sectionTargetName = decodeURIComponent(editURL.match(/title=(.+?)&/)[1]);
            const cloneNode = $(this).prev().clone();
            cloneNode.find(".mw-headline-number").remove();
            const sectionName = cloneNode.text().trim();
            const _sectionBtn = sectionBtn.clone();
            _sectionBtn.find(".Wikiplus-Edit-SectionBtn").on("click", () => {
              onClick({
                sectionNumber,
                sectionName,
                targetPageName: sectionTargetName
              });
            });
            constants_default.skin === "minerva" ? $(this).append(_sectionBtn) : $(this).find(".mw-editsection-bracket").last().before(_sectionBtn);
          } catch {
            log_default.error("fail_to_init_quickedit");
          }
        });
      }
      /**
       * 插入任意链接编辑入口
       *
       * @param {*} onClick
       */
      insertLinkEditEntries(onClick = () => {
      }) {
        $("#mw-content-text a.external").each(function(i) {
          const url = $(this).attr("href");
          const params = parseQuery(url);
          if (params.action === "edit" && params.title !== void 0 && params.section !== "new") {
            $(this).after($("<a>").attr({
              href: "javascript:void(0)",
              class: "Wikiplus-Edit-EveryWhereBtn"
            }).text("(".concat(i18n_default.translate("quickedit_sectionbtn"), ")")).on("click", () => {
              var _params$section;
              onClick({
                targetPageName: params.title,
                sectionNumber: (_params$section = params.section) !== null && _params$section !== void 0 ? _params$section : -1
              });
            }));
          }
        });
      }
      showQuickEditPanel({
        title = "",
        content = "",
        summary = "",
        onBack = () => {
        },
        onParse = () => {
        },
        onEdit = () => {
        },
        escExit = false
      }) {
        const self = this;
        this.scrollTop = $(document).scrollTop();
        if (this.quickEditPanelVisible) {
          this.hideQuickEditPanel();
        }
        this.quickEditPanelVisible = true;
        window.addEventListener("close", window.onbeforeunload = function() {
          return "".concat(i18n_default.translate("onclose_confirm"));
        });
        const isNewPage = $(".noarticletext").length > 0;
        const backBtn = $("<span>").attr("id", "Wikiplus-Quickedit-Back").addClass("Wikiplus-Btn").text("".concat(i18n_default.translate("back")));
        const jumpBtn = $("<span>").attr("id", "Wikiplus-Quickedit-Jump").addClass("Wikiplus-Btn").append($("<a>").attr("href", "#Wikiplus-Quickedit").text("".concat(i18n_default.translate("goto_editbox"))));
        const inputBox = $("<textarea>").attr("id", "Wikiplus-Quickedit");
        const previewBox = $("<div>").attr("id", "Wikiplus-Quickedit-Preview-Output");
        const summaryBox = $("<input>").attr("id", "Wikiplus-Quickedit-Summary-Input").attr("placeholder", "".concat(i18n_default.translate("summary_placehold")));
        const editSubmitBtn = $("<button>").attr("id", "Wikiplus-Quickedit-Submit").text("".concat(i18n_default.translate(isNewPage ? "publish_page" : "publish_change"), "(Ctrl+S)"));
        const previewSubmitBtn = $("<button>").attr("id", "Wikiplus-Quickedit-Preview-Submit").text("".concat(i18n_default.translate("preview")));
        const isMinorEdit = $("<div>").append($("<input>").attr({
          type: "checkbox",
          id: "Wikiplus-Quickedit-MinorEdit"
        })).append($("<label>").attr("for", "Wikiplus-Quickedit-MinorEdit").text("".concat(i18n_default.translate("mark_minoredit"), "(Ctrl+Shift+S)"))).css({
          margin: "5px 5px 5px -3px",
          display: "inline"
        });
        const editBody = $("<div>").append(backBtn, jumpBtn, previewBox, inputBox, summaryBox, $("<br>"), isMinorEdit, editSubmitBtn, previewSubmitBtn);
        this.createDialogBox(title, editBody, 1e3, () => {
          $("#Wikiplus-Quickedit").val(content);
          $("#Wikiplus-Quickedit-Summary-Input").val(summary);
        });
        $("#Wikiplus-Quickedit-Back").on("click", onBack);
        $("#Wikiplus-Quickedit-Preview-Submit").on("click", /* @__PURE__ */ _asyncToGenerator(function* () {
          const preloadBanner = $("<div>").addClass("Wikiplus-Banner").text("".concat(i18n_default.translate("loading_preview")));
          const wikiText = $("#Wikiplus-Quickedit").val();
          $(this).attr("disabled", "disabled");
          $("#Wikiplus-Quickedit-Preview-Output").fadeOut(100, () => {
            $("#Wikiplus-Quickedit-Preview-Output").html("").append(preloadBanner);
            $("#Wikiplus-Quickedit-Preview-Output").fadeIn(100);
          });
          $("html, body").animate({
            scrollTop: self.scrollTop
          }, 200);
          const result = yield onParse(wikiText);
          $("#Wikiplus-Quickedit-Preview-Output").fadeOut("100", () => {
            $("#Wikiplus-Quickedit-Preview-Output").html('<hr><div class="mw-body-content">'.concat(result, "</div><hr>"));
            $("#Wikiplus-Quickedit-Preview-Output").fadeIn("100");
            $("#Wikiplus-Quickedit-Preview-Submit").prop("disabled", false);
          });
        }));
        $("#Wikiplus-Quickedit-Submit").on("click", /* @__PURE__ */ _asyncToGenerator(function* () {
          const timer = Date.now();
          const editBanner = $("<div>").addClass("Wikiplus-Banner").text("".concat(i18n_default.translate("submitting_edit")));
          const payload = {
            summary: $("#Wikiplus-Quickedit-Summary-Input").val(),
            content: $("#Wikiplus-Quickedit").val(),
            isMinorEdit: $("#Wikiplus-Quickedit-MinorEdit").is(":checked")
          };
          $("#Wikiplus-Quickedit-Submit,#Wikiplus-Quickedit,#Wikiplus-Quickedit-Preview-Submit").attr("disabled", "disabled");
          $("html, body").animate({
            scrollTop: self.scrollTop
          }, 200);
          $("#Wikiplus-Quickedit-Preview-Output").fadeOut(100, () => {
            $("#Wikiplus-Quickedit-Preview-Output").html("").append(editBanner);
            $("#Wikiplus-Quickedit-Preview-Output").fadeIn(100);
          });
          try {
            yield onEdit(payload);
            const useTime = Date.now() - timer;
            $("#Wikiplus-Quickedit-Preview-Output").find(".Wikiplus-Banner").css("background", "rgba(6, 239, 92, 0.44)");
            $("#Wikiplus-Quickedit-Preview-Output").find(".Wikiplus-Banner").text("".concat(i18n_default.translate("edit_success", [useTime.toString()])));
            window.addEventListener("close", window.onbeforeunload = void 0);
            setTimeout(() => {
              location.reload();
            }, 500);
          } catch (error) {
            console.log(error);
            $(".Wikiplus-Banner").css("background", "rgba(218, 142, 167, 0.65)");
            $(".Wikiplus-Banner").html(error.message);
          } finally {
            $("#Wikiplus-Quickedit-Submit,#Wikiplus-Quickedit,#Wikiplus-Quickedit-Preview-Submit").prop("disabled", false);
          }
        }));
        $("#Wikiplus-Quickedit,#Wikiplus-Quickedit-Summary-Input,#Wikiplus-Quickedit-MinorEdit").on("keydown", (e) => {
          if (e.ctrlKey && e.which === 83) {
            if (e.shiftKey) {
              $("#Wikiplus-Quickedit-MinorEdit").trigger("click");
            }
            $("#Wikiplus-Quickedit-Submit").trigger("click");
            e.preventDefault();
            e.stopPropagation();
          }
        });
        if (escExit) {
          $(document).on("keydown", (e) => {
            if (e.which === 27) {
              $("#Wikiplus-Quickedit-Back").trigger("click");
            }
          });
        }
      }
      hideQuickEditPanel() {
        this.quickEditPanelVisible = false;
        $(".Wikiplus-InterBox").fadeOut("fast", function() {
          window.addEventListener("close", window.onbeforeunload = void 0);
          $(this).remove();
        });
      }
      /**
       * 显示快速重定向弹窗
       *
       * @param root0
       * @param root0.onEdit
       * @param root0.onSuccess
       */
      showSimpleRedirectPanel({
        onEdit = () => {
        },
        onSuccess = () => {
        }
      } = {}) {
        var _this1 = this;
        const input = $("<input>").addClass("Wikiplus-InterBox-Input").attr("id", "Wikiplus-SR-Title");
        const summaryInputTitle = $("<p>").text(i18n_default.translate("redirect_summary_desc"));
        const summaryInput = $("<input>").addClass("Wikiplus-InterBox-Input").attr("id", "Wikiplus-SR-Summary");
        const applyBtn = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-SR-Apply").text(i18n_default.translate("submit"));
        const cancelBtn = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-SR-Cancel").text(i18n_default.translate("cancel"));
        const continueBtn = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-SR-Continue").text(i18n_default.translate("continue"));
        const content = $("<div>").append(input).append(summaryInputTitle).append(summaryInput).append($("<hr>")).append(applyBtn).append(cancelBtn);
        const dialog = this.createDialogBox(i18n_default.translate("redirect_desc"), content, 600);
        applyBtn.on("click", /* @__PURE__ */ _asyncToGenerator(function* () {
          const title = $("#Wikiplus-SR-Title").val();
          const summary = $("#Wikiplus-SR-Summary").val();
          $(".Wikiplus-InterBox-Content").html('<div class="Wikiplus-Banner">'.concat(i18n_default.translate("submitting_edit"), "</div>"));
          try {
            yield onEdit({
              title,
              summary,
              forceOverwrite: false
            });
            $(".Wikiplus-Banner").text(i18n_default.translate("redirect_saved"));
            _this1.hideSimpleRedirectPanel(dialog);
            onSuccess({
              title
            });
          } catch (error) {
            $(".Wikiplus-Banner").css("background", "rgba(218, 142, 167, 0.65)");
            $(".Wikiplus-Banner").text(error.message);
            if (error.code === "articleexists") {
              $(".Wikiplus-InterBox-Content").append($("<hr>")).append(continueBtn).append(cancelBtn);
              cancelBtn.on("click", () => {
                _this1.hideSimpleRedirectPanel(dialog);
              });
              continueBtn.on("click", /* @__PURE__ */ _asyncToGenerator(function* () {
                $(".Wikiplus-InterBox-Content").html('<div class="Wikiplus-Banner">'.concat(i18n_default.translate("submitting_edit"), "</div>"));
                try {
                  yield onEdit({
                    title,
                    summary,
                    forceOverwrite: true
                  });
                  $(".Wikiplus-Banner").text(i18n_default.translate("redirect_saved"));
                  _this1.hideSimpleRedirectPanel(dialog);
                  onSuccess({
                    title
                  });
                } catch (error2) {
                  $(".Wikiplus-Banner").css("background", "rgba(218, 142, 167, 0.65)");
                  $(".Wikiplus-Banner").text(error2.message);
                }
              }));
            }
          }
        }));
        cancelBtn.on("click", () => {
          this.hideSimpleRedirectPanel(dialog);
        });
      }
      /**
       * 隐藏快速重定向弹窗
       *
       * @param {*} dialog
       */
      hideSimpleRedirectPanel(dialog = $("body")) {
        dialog.find(".Wikiplus-InterBox-Close").trigger("click");
      }
      showSettingsPanel({
        onSubmit = () => {
        }
      } = {}) {
        var _this10 = this;
        const input = $("<textarea>").attr("id", "Wikiplus-Setting-Input").attr("rows", "10");
        const applyBtn = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-Setting-Apply").text(i18n_default.translate("submit"));
        const cancelBtn = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-Setting-Cancel").text(i18n_default.translate("cancel"));
        const content = $("<div>").append(input).append($("<hr>")).append(applyBtn).append(cancelBtn);
        const dialog = this.createDialogBox(i18n_default.translate("wikiplus_settings_desc"), content, 600, () => {
          if (localStorage.Wikiplus_Settings) {
            $("#Wikiplus-Setting-Input").val(localStorage.Wikiplus_Settings);
            try {
              const settings = JSON.parse(localStorage.Wikiplus_Settings);
              $("#Wikiplus-Setting-Input").val(JSON.stringify(settings, null, 2));
            } catch {
            }
          } else {
            $("#Wikiplus-Setting-Input").attr("placeholder", i18n_default.translate("wikiplus_settings_placeholder"));
          }
        });
        applyBtn.on("click", /* @__PURE__ */ _asyncToGenerator(function* () {
          const savedBanner = $("<div>").addClass("Wikiplus-Banner").text(i18n_default.translate("wikiplus_settings_saved"));
          const settings = $("#Wikiplus-Setting-Input").val();
          try {
            onSubmit({
              settings
            });
            $(".Wikiplus-InterBox-Content").html("").append(savedBanner);
            yield sleep_default(1500);
            _this10.hideSettingsPanel(dialog);
          } catch {
            notification_default.error(i18n_default.translate("wikiplus_settings_grammar_error"));
          }
        }));
        cancelBtn.on("click", () => {
          this.hideSettingsPanel(dialog);
        });
      }
      hideSettingsPanel(dialog = $("body")) {
        dialog.find(".Wikiplus-InterBox-Close").trigger("click");
      }
      bindPreloadEvents(onPreload) {
        $("#toc").children("ul").find("a").each(function(i) {
          $(this).on("mouseover", function() {
            $(this).off("mouseover");
            onPreload({
              sectionNumber: i + 1
            });
          });
        });
      }
    };
    ui_default = new UI();
  }
});
//! src/Wikiplus/modules/utils/settings.js
var Settings;
var settings_default;
var init_settings = __esm({
  "src/Wikiplus/modules/utils/settings.js"() {
    "use strict";
    Settings = class {
      getSetting(key, object = {}) {
        const w = object;
        let settings;
        try {
          settings = JSON.parse(localStorage["Wikiplus_Settings"]);
        } catch {
          return;
        }
        try {
          const customSettingFunction = new Function("return ".concat(settings[key]));
          if (typeof customSettingFunction === "function") {
            try {
              if (customSettingFunction()(w) === true) {
              } else {
                return customSettingFunction()(w) || settings[key];
              }
            } catch {
              return settings[key];
            }
          } else {
            return settings[key];
          }
        } catch {
          try {
            let result = settings[key];
            for (var _i3 = 0, _Object$keys2 = Object.keys(object); _i3 < _Object$keys2.length; _i3++) {
              const key2 = _Object$keys2[_i3];
              result = result.replace("${".concat(key2, "}"), object[key2]);
            }
            return result;
          } catch {
          }
        }
      }
    };
    settings_default = new Settings();
  }
});
//! src/Wikiplus/modules/wikiplus.less
var init_wikiplus = __esm({
  "src/Wikiplus/modules/wikiplus.less"() {
  }
});
//! src/Wikiplus/modules/index.js
var modules_exports = {};
var init_modules = __esm({
  "src/Wikiplus/modules/index.js"() {
    "use strict";
    init_page();
    init_ui();
    init_notification();
    init_wiki();
    init_settings();
    init_log();
    init_constants();
    init_i18n();
    init_wikiplus();
    $(/* @__PURE__ */ _asyncToGenerator(function* () {
      const Pages = {};
      const isCurrentPageEmpty = $(".noarticletext").length > 0 && constants_default.articleId === 0;
      const getPage = /* @__PURE__ */ (function() {
        var _ref7 = _asyncToGenerator(function* ({
          revisionId: revisionId2,
          title
        }) {
          if (Pages[revisionId2]) {
            return Pages[revisionId2];
          }
          const newPage = new page_default({
            revisionId: revisionId2,
            title
          });
          yield newPage.init();
          Pages[revisionId2] = newPage;
          return Pages[revisionId2];
        });
        return function getPage2(_x4) {
          return _ref7.apply(this, arguments);
        };
      })();
      log_default.info("Wikiplus now loading. Version: ".concat(constants_default.version));
      if (!window.mw) {
        console.log("Mediawiki JavaScript not loaded or not a Mediawiki website.");
        return;
      }
      if (!constants_default.userGroups.includes("autoconfirmed") && !constants_default.userGroups.includes("confirmed")) {
        notification_default.error(i18n_default.translate("not_autoconfirmed_user"));
        log_default.info(i18n_default.translate("not_autoconfirmed_user"));
        return;
      }
      if (!constants_default.isArticle || constants_default.action !== "view") {
        log_default.info("Not an editable page. Stop initialization.");
        return;
      }
      window._WikiplusPages = Pages;
      const currentPageName = constants_default.currentPageName;
      const revisionId = constants_default.revisionId;
      const currentPage = yield getPage({
        revisionId,
        title: currentPageName
      });
      const handleQuickEditButtonClicked = /* @__PURE__ */ (function() {
        var _ref8 = _asyncToGenerator(function* ({
          sectionNumber,
          sectionName,
          targetPageName
        } = {}) {
          const isOtherPage = targetPageName !== currentPageName;
          if (isOtherPage && constants_default.latestRevisionId !== constants_default.revisionId) {
            log_default.error("cross_page_history_revision_edit_warning");
            return;
          }
          const revisionId2 = isOtherPage ? yield wiki_default.getLatestRevisionIdForPage(targetPageName) : constants_default.revisionId;
          const page = yield getPage({
            revisionId: revisionId2,
            title: targetPageName
          });
          const customSummary = settings_default.getSetting("defaultSummary", {
            sectionName,
            sectionNumber,
            sectionTargetName: targetPageName
          });
          const summary = customSummary || (sectionName ? "/* ".concat(sectionName, " */ ").concat(i18n_default.translate("default_summary_suffix")) : i18n_default.translate("default_summary_suffix"));
          const timer = setTimeout(() => {
            notification_default.success(i18n_default.translate("loading"));
          }, 200);
          const sectionContent = yield page.getWikiText({
            section: sectionNumber
          });
          const isEditHistoryRevision = !isOtherPage && constants_default.latestRevisionId !== constants_default.revisionId;
          const escToExit = settings_default.getSetting("esc_to_exit_quickedit") === true || // 兼容老设置key
          settings_default.getSetting("esc_to_exit_quickedit") === "true" || settings_default.getSetting("escToExitQuickEdit") === true || settings_default.getSetting("escToExitQuickEdit") === "true";
          const customEditTags = settings_default.getSetting("custom_edit_tags");
          const defaultEditTags = [];
          const editTags = customEditTags !== null && customEditTags !== void 0 && customEditTags.length ? customEditTags : defaultEditTags;
          clearTimeout(timer);
          notification_default.empty();
          if (isEditHistoryRevision) {
            notification_default.warning(i18n_default.translate("history_edit_warning"));
          }
          const shouldShowCreatePageTip = isOtherPage ? !revisionId2 : isCurrentPageEmpty;
          ui_default.showQuickEditPanel({
            title: "".concat(i18n_default.translate("quickedit_topbtn")).concat(isEditHistoryRevision ? i18n_default.translate("history_edit_warning") : ""),
            content: shouldShowCreatePageTip ? i18n_default.translate("create_page_tip") : sectionContent,
            summary,
            onBack: ui_default.hideQuickEditPanel,
            onParse: (wikiText) => {
              return page.parseWikiText(wikiText);
            },
            onEdit: (function() {
              var _ref9 = _asyncToGenerator(function* ({
                content,
                summary: summary2,
                isMinorEdit
              }) {
                const editPayload = {
                  content,
                  config: {
                    summary: summary2,
                    ...sectionNumber === -1 ? {} : {
                      section: sectionNumber
                    },
                    ...editTags.length ? {
                      tags: editTags.join("|")
                    } : {}
                  }
                };
                if (isMinorEdit) {
                  editPayload.config.minor = "true";
                } else {
                  editPayload.config.notminor = "true";
                }
                yield page.edit(editPayload);
              });
              return function onEdit(_x5) {
                return _ref9.apply(this, arguments);
              };
            })(),
            escExit: escToExit
          });
        });
        return function handleQuickEditButtonClicked2() {
          return _ref8.apply(this, arguments);
        };
      })();
      const handleSimpleRedirectButtonClicked = /* @__PURE__ */ (function() {
        var _ref0 = _asyncToGenerator(function* () {
          ui_default.showSimpleRedirectPanel({
            onEdit: (function() {
              var _ref1 = _asyncToGenerator(function* ({
                title,
                summary,
                forceOverwrite = false
              }) {
                const page = yield getPage({
                  title
                });
                const currentPageName2 = constants_default.currentPageName;
                const contentmodel = page.contentmodel;
                if (summary == "") {
                  summary = i18n_default.translate("redirect_from_summary", [title, currentPageName2]);
                }
                const content = (() => {
                  let content2;
                  switch (contentmodel) {
                    case "javascript":
                      content2 = '/* #REDIRECT */mw.loader.load("'.concat(location.protocol, "//").concat(location.host).concat(constants_default.scriptPath, "/index.php?title=").concat(mw.util.wikiUrlencode(currentPageName2), '&action=raw&ctype=text/javascript");');
                      break;
                    case "css":
                      content2 = "/* #REDIRECT */@import url(".concat(location.protocol, "//").concat(location.host).concat(constants_default.scriptPath, "/index.php?title=").concat(mw.util.wikiUrlencode(currentPageName2), "&action=raw&ctype=text/css);");
                      break;
                    case "Scribunto":
                      content2 = "return require [[".concat(currentPageName2, "]]");
                      break;
                    case "wikitext":
                    default:
                      content2 = "#REDIRECT [[".concat(currentPageName2, "]]");
                      break;
                  }
                  return content2;
                })();
                const payload = {
                  content,
                  config: {
                    summary
                  }
                };
                if (!forceOverwrite) {
                  payload.config.createonly = "true";
                }
                yield page.edit(payload);
              });
              return function onEdit(_x6) {
                return _ref1.apply(this, arguments);
              };
            })(),
            onSuccess: ({
              title
            }) => {
              location.href = constants_default.articlePath.replace(/\$1/gi, title);
            }
          });
        });
        return function handleSimpleRedirectButtonClicked2() {
          return _ref0.apply(this, arguments);
        };
      })();
      const handleSettingsButtonClicked = /* @__PURE__ */ (function() {
        var _ref10 = _asyncToGenerator(function* () {
          ui_default.showSettingsPanel({
            onSubmit: ({
              settings
            }) => {
              JSON.parse(settings);
              localStorage.setItem("Wikiplus_Settings", settings);
            }
          });
        });
        return function handleSettingsButtonClicked2() {
          return _ref10.apply(this, arguments);
        };
      })();
      const handlePreload = /* @__PURE__ */ (function() {
        var _ref11 = _asyncToGenerator(function* ({
          sectionNumber
        }) {
          yield currentPage.getWikiText({
            section: sectionNumber
          });
        });
        return function handlePreload2(_x7) {
          return _ref11.apply(this, arguments);
        };
      })();
      ui_default.insertTopQuickEditEntry(handleQuickEditButtonClicked);
      ui_default.insertSectionQuickEditEntries(handleQuickEditButtonClicked);
      ui_default.insertLinkEditEntries(handleQuickEditButtonClicked);
      ui_default.insertSimpleRedirectButton(handleSimpleRedirectButtonClicked);
      ui_default.insertSettingsPanelButton(handleSettingsButtonClicked);
      ui_default.bindPreloadEvents(handlePreload);
    }));
  }
});
//! src/Wikiplus/resize.ts
var resize_exports = {};
var import_ext_gadget;
var init_resize = __esm({
  "src/Wikiplus/resize.ts"() {
    "use strict";
    import_ext_gadget = require("ext.gadget.Util");
    void (0, import_ext_gadget.getBody)().then(($body) => {
      $(window).on("resize", () => {
        const windowWidth = $(window).width();
        const $wikiplusInterbox = $body.find(".Wikiplus-InterBox");
        if ($wikiplusInterbox) {
          $wikiplusInterbox.css("max-width", "calc(".concat(windowWidth, "px - 2em)"));
        }
      });
    });
  }
});
//! src/Wikiplus/Wikiplus.ts
(function Wikiplus() {
  const {
    wgAction,
    wgIsArticle
  } = mw.config.get();
  if (wgAction !== "view" || !wgIsArticle) {
    return;
  }
  const loader = /* @__PURE__ */ (function() {
    var _ref12 = _asyncToGenerator(function* () {
      const {
        "visualeditor-enable": isVeEnable
      } = mw.user.options.get();
      if (isVeEnable) {
        yield mw.loader.using("ext.visualEditor.core");
      }
      yield Promise.resolve().then(() => (init_modules(), modules_exports));
      yield Promise.resolve().then(() => (init_resize(), resize_exports));
    });
    return function loader2() {
      return _ref12.apply(this, arguments);
    };
  })();
  void loader();
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dpa2lwbHVzL21vZHVsZXMvdXRpbHMvY29uc3RhbnRzLmpzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL3V0aWxzL3JlcXVlc3RzLmpzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL3V0aWxzL2kxOG4uanMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvdXRpbHMvbG9nLmpzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL3NlcnZpY2VzL3dpa2kuanMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvY29yZS9wYWdlLmpzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL2NvcmUvbm90aWZpY2F0aW9uLmpzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL3V0aWxzL3NsZWVwLmpzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL3V0aWxzL2hlbHBlcnMuanMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvY29yZS91aS5qcyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy91dGlscy9zZXR0aW5ncy5qcyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy93aWtpcGx1cy5sZXNzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL2luZGV4LmpzIiwgInNyYy9XaWtpcGx1cy9yZXNpemUudHMiLCAic3JjL1dpa2lwbHVzL1dpa2lwbHVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjbGFzcyBDb25zdGFudHMge1xuXHR2ZXJzaW9uID0gJzQuMS4wJztcblx0Z2V0IGlzQXJ0aWNsZSgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnSXNBcnRpY2xlJyk7XG5cdH1cblx0Z2V0IGN1cnJlbnRQYWdlTmFtZSgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKS5yZXBsYWNlKC8gL2csICdfJyk7XG5cdH1cblx0Z2V0IGFydGljbGVJZCgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnQXJ0aWNsZUlkJyk7XG5cdH1cblx0Z2V0IHJldmlzaW9uSWQoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z1JldmlzaW9uSWQnKTtcblx0fVxuXHRnZXQgbGF0ZXN0UmV2aXNpb25JZCgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnQ3VyUmV2aXNpb25JZCcpO1xuXHR9XG5cdGdldCBhcnRpY2xlUGF0aCgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnQXJ0aWNsZVBhdGgnKTtcblx0fVxuXHRnZXQgc2NyaXB0UGF0aCgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnU2NyaXB0UGF0aCcpO1xuXHR9XG5cdGdldCBhY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z0FjdGlvbicpO1xuXHR9XG5cdGdldCBza2luKCkge1xuXHRcdHJldHVybiB3aW5kb3cubXcuY29uZmlnLmdldCgnc2tpbicpO1xuXHR9XG5cdGdldCB1c2VyR3JvdXBzKCkge1xuXHRcdHJldHVybiB3aW5kb3cubXcuY29uZmlnLmdldCgnd2dVc2VyR3JvdXBzJyk7XG5cdH1cblx0Z2V0IHdpa2lJZCgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnV2lraUlEJyk7XG5cdH1cblx0dXNlckFnZW50ID0gYFlzQXJjaGl2ZXMvMS4xIFdpa2lwbHVzLyR7dGhpcy52ZXJzaW9ufSAoJHt0aGlzLndpa2lJZH0pYDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IENvbnN0YW50cygpO1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XG5cbmNvbnN0IFJlcXVlc3RzID0ge1xuXHRiYXNlOiBgJHtsb2NhdGlvbi5wcm90b2NvbH0vLyR7bG9jYXRpb24uaG9zdH0ke0NvbnN0YW50cy5zY3JpcHRQYXRofS9hcGkucGhwYCxcblx0YXN5bmMgZ2V0KHF1ZXJ5KSB7XG5cdFx0Y29uc3QgdXJsID0gbmV3IFVSTChSZXF1ZXN0cy5iYXNlKTtcblx0XHRmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhxdWVyeSkpIHtcblx0XHRcdHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKGtleSwgcXVlcnlba2V5XSk7XG5cdFx0fVxuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG5cdFx0XHRjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0J0FwaS1Vc2VyLUFnZW50JzogQ29uc3RhbnRzLnVzZXJBZ2VudCxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0cmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblx0fSxcblx0YXN5bmMgcG9zdChwYXlsb2FkKSB7XG5cdFx0Y29uc3QgdXJsID0gbmV3IFVSTChSZXF1ZXN0cy5iYXNlKTtcblx0XHRjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XG5cdFx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocGF5bG9hZCkpIHtcblx0XHRcdGZvcm0uYXBwZW5kKGtleSwgdmFsdWUpO1xuXHRcdH1cblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRib2R5OiBmb3JtLFxuXHRcdFx0Y3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdCdBcGktVXNlci1BZ2VudCc6IENvbnN0YW50cy51c2VyQWdlbnQsXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHRcdHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0cztcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuY2xhc3MgSTE4biB7XG5cdGxhbmd1YWdlO1xuXHRpMThuRGF0YSA9IHt9O1xuXHRzZXNzaW9uVXBkYXRlTG9nID0gW107XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdGxldCBsYW5ndWFnZTtcblx0XHR0cnkge1xuXHRcdFx0bGFuZ3VhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVsnV2lraXBsdXNfU2V0dGluZ3MnXSlbJ2xhbmd1YWdlJ10gfHwgbmF2aWdhdG9yLmxhbmd1YWdlLnRvTG93ZXJDYXNlKCk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRsYW5ndWFnZSA9IChuYXZpZ2F0b3IubGFuZ3VhZ2UgfHwgbmF2aWdhdG9yLmJyb3dzZXJMYW5ndWFnZSlcblx0XHRcdFx0LnJlcGxhY2UoL2hhbltzdF0tPy9pLCAnJykgLy8gZm9yIGxhbmd1YWdlcyBsaWtlIHpoLUhhbnMtQ05cblx0XHRcdFx0LnRvTG93ZXJDYXNlKCk7XG5cdFx0fVxuXHRcdHRoaXMubGFuZ3VhZ2UgPSBsYW5ndWFnZTtcblx0XHQvLyBNZXJnZSB3aXRoIHNlc3Npb25TdG9yYWdlIGkxOG4gY2FjaGUgKGxpbWl0IHRvIGN1cnJlbnQgbGFuZ3VhZ2UgdG8gYXZvaWQgYmxvYXRpbmcgc3RvcmFnZSlcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmF3ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnV2lraXBsdXNfaTE4bkNhY2hlJykgfHwgJ3t9Jztcblx0XHRcdGNvbnN0IGkxOG5DYWNoZSA9IEpTT04ucGFyc2UocmF3KTtcblx0XHRcdGlmIChpMThuQ2FjaGUgJiYgdHlwZW9mIGkxOG5DYWNoZSA9PT0gJ29iamVjdCcgJiYgaTE4bkNhY2hlW2xhbmd1YWdlXSkge1xuXHRcdFx0XHR0aGlzLmkxOG5EYXRhW2xhbmd1YWdlXSA9IGkxOG5DYWNoZVtsYW5ndWFnZV07XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHQvLyBGYWlsIHRvIHBhcnNlIGkxOG4gY2FjaGUsIHJlc2V0IChpbiBzZXNzaW9uKVxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0c2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnV2lraXBsdXNfaTE4bkNhY2hlJywgJ3t9Jyk7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0fVxuXHR9XG5cdHRyYW5zbGF0ZShrZXksIHBsYWNlaG9sZGVycyA9IFtdKSB7XG5cdFx0bGV0IHJlc3VsdCA9ICcnO1xuXHRcdGlmICh0aGlzLmxhbmd1YWdlIGluIHRoaXMuaTE4bkRhdGEpIHtcblx0XHRcdGlmIChrZXkgaW4gdGhpcy5pMThuRGF0YVt0aGlzLmxhbmd1YWdlXSkge1xuXHRcdFx0XHRyZXN1bHQgPSB0aGlzLmkxOG5EYXRhW3RoaXMubGFuZ3VhZ2VdW2tleV07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyB0cnkgdXBkYXRlIGxhbmd1YWdlIHZlcmlzb25cblx0XHRcdFx0dGhpcy5sb2FkTGFuZ3VhZ2UodGhpcy5sYW5ndWFnZSk7XG5cdFx0XHRcdGlmIChrZXkgaW4gdGhpcy5pMThuRGF0YVsnZW4tdXMnXSkge1xuXHRcdFx0XHRcdC8vIEZhbGxiYWNrIHRvIEVuZ2xpc2hcblx0XHRcdFx0XHRyZXN1bHQgPSB0aGlzLmkxOG5EYXRhWydlbi11cyddW2tleV07XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVzdWx0ID0ga2V5O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMubG9hZExhbmd1YWdlKHRoaXMubGFuZ3VhZ2UpO1xuXHRcdH1cblxuXHRcdGlmIChwbGFjZWhvbGRlcnMubGVuZ3RoID4gMCkge1xuXHRcdFx0Zm9yIChjb25zdCBbaW5kZXgsIHBsYWNlaG9sZGVyXSBvZiBwbGFjZWhvbGRlcnMuZW50cmllcygpKSB7XG5cdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKGAkJHtpbmRleCArIDF9YCwgcGxhY2Vob2xkZXIpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cdGFzeW5jIGxvYWRMYW5ndWFnZShsYW5ndWFnZSkge1xuXHRcdGlmICh0aGlzLnNlc3Npb25VcGRhdGVMb2cuaW5jbHVkZXMobGFuZ3VhZ2UpKSB7XG5cdFx0XHQvLyBIYXMgYmVlbiB1cGRhdGVkIHRoaXMgc2Vzc2lvbi5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgKFxuXHRcdFx0XHRhd2FpdCBmZXRjaChcblx0XHRcdFx0XHRgaHR0cHM6Ly9naXRjZG4ucWl1d2VuLm5ldC5jbi9JbnRlcmZhY2VBZG1pbi9XaWtpcGx1cy9yYXcvYnJhbmNoL2Rldi9sYW5ndWFnZXMvJHtsYW5ndWFnZX0uanNvbmBcblx0XHRcdFx0KVxuXHRcdFx0KS5qc29uKCk7XG5cdFx0XHRjb25zdCBub3dWZXJzaW9uID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnV2lraXBsdXNfTGFuZ3VhZ2VWZXJzaW9uJykgfHwgJzAwMCc7XG5cdFx0XHR0aGlzLnNlc3Npb25VcGRhdGVMb2cucHVzaChsYW5ndWFnZSk7XG5cdFx0XHRpZiAocmVzcG9uc2UuX192ZXJzaW9uICE9PSBub3dWZXJzaW9uIHx8ICEobGFuZ3VhZ2UgaW4gdGhpcy5pMThuRGF0YSkpIHtcblx0XHRcdFx0Ly8gTGFuZ3VhZ2UgZ2V0IHVwZGF0ZWRcblx0XHRcdFx0Y29uc29sZS5pbmZvKGBVcGRhdGUgJHtsYW5ndWFnZX0gc3VwcG9ydCB0byB2ZXJzaW9uICR7cmVzcG9uc2UuX192ZXJzaW9ufWApO1xuXHRcdFx0XHR0aGlzLmkxOG5EYXRhW2xhbmd1YWdlXSA9IHJlc3BvbnNlO1xuXHRcdFx0XHQvLyBVcGRhdGUgc2Vzc2lvblN0b3JhZ2UgY2FjaGUsIG9ubHkga2VlcCBjdXJyZW50IGxhbmd1YWdlIHRvIHJlZHVjZSBmb290cHJpbnRcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdXaWtpcGx1c19pMThuQ2FjaGUnLCBKU09OLnN0cmluZ2lmeSh7W2xhbmd1YWdlXTogcmVzcG9uc2V9KSk7XG5cdFx0XHRcdFx0c2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnV2lraXBsdXNfTGFuZ3VhZ2VWZXJzaW9uJywgU3RyaW5nKHJlc3BvbnNlLl9fdmVyc2lvbiB8fCAnJykpO1xuXHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0Ly8gUXVvdGEgZXhjZWVkZWQgb3IgZGlzYWJsZWQgc3RvcmFnZTsgaWdub3JlIHBlcnNpc3RlbmNlXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdC8vIFVuc3VwcG9ydGVkIGxhbmd1YWdlXG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBJMThuKCk7XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCBpMThuIGZyb20gJy4vaTE4bic7XG5cbmNsYXNzIFdpa2lwbHVzRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGNvZGUpIHtcblx0XHRzdXBlcihtZXNzYWdlKTtcblx0XHR0aGlzLmNvZGUgPSBjb2RlO1xuXHR9XG59XG5cbmNvbnN0IExvZyA9IHtcblx0ZGVidWcobWVzc2FnZSA9ICcnKSB7XG5cdFx0Y29uc29sZS5kZWJ1ZyhgW1dpa2lwbHVzLURFQlVHXSAke21lc3NhZ2V9YCk7XG5cdH0sXG5cdGluZm8obWVzc2FnZSA9ICcnKSB7XG5cdFx0Y29uc29sZS5pbmZvKGBbV2lraXBsdXMtSU5GT10gJHttZXNzYWdlfWApO1xuXHR9LFxuXHRlcnJvcihlcnJvckNvZGUsIHBheWxvYWRzID0gW10pIHtcblx0XHRsZXQgdGVtcGxhdGUgPSBpMThuLnRyYW5zbGF0ZShlcnJvckNvZGUpO1xuXHRcdGlmIChwYXlsb2Fkcy5sZW5ndGggPiAwKSB7XG5cdFx0XHQvLyBGaWxsXG5cdFx0XHRmb3IgKGNvbnN0IFtpLCB2XSBvZiBwYXlsb2Fkcy5lbnRyaWVzKCkpIHtcblx0XHRcdFx0dGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKG5ldyBSZWdFeHAoYFxcXFwke2kgKyAxfWAsICdpZycpLCB2KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y29uc29sZS5lcnJvcihgW1dpa2lwbHVzLUVSUk9SXSAke3RlbXBsYXRlfWApO1xuXHRcdHRocm93IG5ldyBXaWtpcGx1c0Vycm9yKGAke3RlbXBsYXRlfWAsIGVycm9yQ29kZSk7XG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2c7XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCByZXF1ZXN0cyBmcm9tICcuLi91dGlscy9yZXF1ZXN0cyc7XG5pbXBvcnQgTG9nIGZyb20gJy4uL3V0aWxzL2xvZyc7XG5pbXBvcnQgaTE4biBmcm9tICcuLi91dGlscy9pMThuJztcblxuY2xhc3MgV2lraSB7XG5cdHBhZ2VJbmZvQ2FjaGUgPSB7fTtcblx0LyoqXG5cdCAqIOiOt+W+lyBFZGl0IFRva2VuXG5cdCAqIEdldCBFZGl0IFRva2VuXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59XG5cdCAqL1xuXHRhc3luYyBnZXRFZGl0VG9rZW4oKSB7XG5cdFx0Ly8g5bCd6K+V5LuOIEFQSSDojrflvpcgRWRpdFRva2VuXG5cdFx0Ly8gVHJ5IHRvIGdldCBFZGl0VG9rZW4gZnJvbSBBUElcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3RzLmdldCh7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRtZXRhOiAndG9rZW5zJyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdH0pO1xuXHRcdGlmIChcblx0XHRcdHJlc3BvbnNlLnF1ZXJ5ICYmXG5cdFx0XHRyZXNwb25zZS5xdWVyeS50b2tlbnMgJiZcblx0XHRcdHJlc3BvbnNlLnF1ZXJ5LnRva2Vucy5jc3JmdG9rZW4gJiZcblx0XHRcdHJlc3BvbnNlLnF1ZXJ5LnRva2Vucy5jc3JmdG9rZW4gIT09ICcrXFxcXCdcblx0XHQpIHtcblx0XHRcdHJldHVybiByZXNwb25zZS5xdWVyeS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdH1cblx0XHRyZXR1cm4gTG9nLmVycm9yKCdmYWlsX3RvX2dldF9lZGl0dG9rZW4nKTtcblx0fVxuXHQvKipcblx0ICog6I635b6X6aG16Z2i5LiK5LiA54mI5pys5pe26Ze05oizXG5cdCAqIEdldCB0aGUgdGltZXN0YW1wIG9mIHRoZSBsYXN0IHJldmlzaW9uIG9mIHBhZ2Ugc3BlY2lmaWVkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3BhcmFtcy5zdHJpbmd9IHRpdGxlIOmhtemdouWQjSAvIFBhZ2VuYW1lXG5cdCAqIEBwYXJhbSB7cGFyYW1zLnJldmlzaW9uSWR9IHJldmlzaW9uSWQg5L+u6K6i54mI5pys5Y+3IC8gUmV2aXNpb24gSURcblx0ICogQHBhcmFtIHtwYXJhbXMuY29udGVudG1vZGVsfSBjb250ZW50bW9kZWwg5YaF5a655qih5Z6LIC8gQ29udGVudCBNb2RlbFxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxuXHQgKi9cblx0YXN5bmMgZ2V0UGFnZUluZm8oe3RpdGxlLCByZXZpc2lvbklkfSkge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0cHJvcDogJ3JldmlzaW9uc3xpbmZvJyxcblx0XHRcdFx0cnZwcm9wOiAndGltZXN0YW1wfGlkcycsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0fTtcblx0XHRcdGlmIChyZXZpc2lvbklkKSB7XG5cdFx0XHRcdHBhcmFtcy5yZXZpZHMgPSByZXZpc2lvbklkO1xuXHRcdFx0fSBlbHNlIGlmICh0aXRsZSkge1xuXHRcdFx0XHRpZiAodGhpcy5wYWdlSW5mb0NhY2hlW3RpdGxlXSkge1xuXHRcdFx0XHRcdC8vIEhpdCBjYWNoZVxuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHR0aW1lc3RhbXA6IHRoaXMucGFnZUluZm9DYWNoZVt0aXRsZV0udGltZXN0YW1wLFxuXHRcdFx0XHRcdFx0cmV2aXNpb25JZDogdGhpcy5wYWdlSW5mb0NhY2hlW3RpdGxlXS5yZXZpZCxcblx0XHRcdFx0XHRcdGNvbnRlbnRtb2RlbDogdGhpcy5wYWdlSW5mb0NhY2hlW3RpdGxlXS5jb250ZW50bW9kZWwsXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0XHRwYXJhbXMudGl0bGVzID0gdGl0bGU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3RzLmdldChwYXJhbXMpO1xuXHRcdFx0aWYgKHJlc3BvbnNlLnF1ZXJ5ICYmIHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdGNvbnN0IGNvbnRlbnRtb2RlbCA9IHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzW09iamVjdC5rZXlzKHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzKVswXV0uY29udGVudG1vZGVsO1xuXHRcdFx0XHRpZiAoT2JqZWN0LmtleXMocmVzcG9uc2UucXVlcnkucGFnZXMpWzBdID09PSAnLTEnKSB7XG5cdFx0XHRcdFx0Ly8g5LiN5a2Y5Zyo6L+Z5LiA6aG16Z2iXG5cdFx0XHRcdFx0Ly8gUGFnZSBub3QgZm91bmQuXG5cdFx0XHRcdFx0dGhpcy5wYWdlSW5mb0NhY2hlW3RpdGxlXSA9IHtjb250ZW50bW9kZWw6IGNvbnRlbnRtb2RlbH07XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdGNvbnRlbnRtb2RlbDogY29udGVudG1vZGVsLFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgcGFnZUluZm8gPSByZXNwb25zZS5xdWVyeS5wYWdlc1tPYmplY3Qua2V5cyhyZXNwb25zZS5xdWVyeS5wYWdlcylbMF1dLnJldmlzaW9uc1swXTtcblx0XHRcdFx0aWYgKHRpdGxlKSB7XG5cdFx0XHRcdFx0dGhpcy5wYWdlSW5mb0NhY2hlW3RpdGxlXSA9IHBhZ2VJbmZvO1xuXHRcdFx0XHRcdHRoaXMucGFnZUluZm9DYWNoZVt0aXRsZV0uY29udGVudG1vZGVsID0gY29udGVudG1vZGVsO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dGltZXN0YW1wOiBwYWdlSW5mby50aW1lc3RhbXAsXG5cdFx0XHRcdFx0cmV2aXNpb25JZDogcGFnZUluZm8ucmV2aWQsXG5cdFx0XHRcdFx0Y29udGVudG1vZGVsOiBjb250ZW50bW9kZWwsXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRMb2cuZXJyb3IoJ2ZhaWxfdG9fZ2V0X2VkaXR0b2tlbicpO1xuXHRcdH1cblx0fVxuXHQvKipcblx0ICog6I635b6X6aG16Z2i55qEIFdpa2l0ZXh0XG5cdCAqIEdldCB3aWtpdGV4dCBvZiB0aGUgcGFnZS5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIHRpdGxlXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5yZXZpc2lvbklkIOeJiOacrOWPt1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLnNlY3Rpb24g5q616JC95Y+3XG5cdCAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn0gd2lraXRleHTlhoXlrrlcblx0ICovXG5cdGFzeW5jIGdldFdpa2lUZXh0KHtzZWN0aW9uLCByZXZpc2lvbklkfSkge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0XHRcdHJ2cHJvcDogJ2NvbnRlbnQnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0cmV2aWRzOiByZXZpc2lvbklkLFxuXHRcdFx0fTtcblx0XHRcdGlmIChyZXZpc2lvbklkKSB7XG5cdFx0XHRcdHBhcmFtcy5yZXZpZHMgPSByZXZpc2lvbklkO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHNlY3Rpb24pIHtcblx0XHRcdFx0cGFyYW1zLnJ2c2VjdGlvbiA9IHNlY3Rpb247XG5cdFx0XHR9XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3RzLmdldChwYXJhbXMpO1xuXHRcdFx0aWYgKHJlc3BvbnNlLnF1ZXJ5ICYmIHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdGlmIChPYmplY3Qua2V5cyhyZXNwb25zZS5xdWVyeS5wYWdlcylbMF0gPT09ICctMScpIHtcblx0XHRcdFx0XHQvLyDkuI3lrZjlnKjov5nkuIDpobXpnaJcblx0XHRcdFx0XHQvLyBQYWdlIG5vdCBmb3VuZC5cblx0XHRcdFx0XHRyZXR1cm4gJyc7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgcGFnZUluZm8gPSByZXNwb25zZS5xdWVyeS5wYWdlc1tPYmplY3Qua2V5cyhyZXNwb25zZS5xdWVyeS5wYWdlcylbMF1dLnJldmlzaW9uc1swXTtcblx0XHRcdFx0cmV0dXJuIHBhZ2VJbmZvWycqJ107XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRMb2cuZXJyb3IoJ2ZhaWxfdG9fZ2V0X3dpa2l0ZXh0Jyk7XG5cdFx0fVxuXHR9XG5cdC8qKlxuXHQgKiDop6PmnpAgV2lraXRleHRcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHdpa2l0ZXh0IHdpa2l0ZXh0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSDpobXpnaLmoIfpophcblx0ICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyDorr7nva5cblx0ICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fSDop6PmnpDnu5PmnpwgSFRNTFxuXHQgKi9cblx0YXN5bmMgcGFyc2VXaWtpVGV4dCh3aWtpdGV4dCwgdGl0bGUgPSAnJywgY29uZmlnID0ge30pIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0cy5wb3N0KHtcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdFx0dGV4dDogd2lraXRleHQsXG5cdFx0XHRcdHRpdGxlLFxuXHRcdFx0XHRwc3Q6ICd0cnVlJyxcblx0XHRcdH0pO1xuXHRcdFx0aWYgKHJlc3BvbnNlLnBhcnNlICYmIHJlc3BvbnNlLnBhcnNlLnRleHQpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLnBhcnNlLnRleHRbJyonXTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdExvZy5lcnJvcignY2FudF9wYXJzZV93aWtpdGV4dCcpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiDnvJbovpHpobXpnaJcblx0ICpcblx0ICogQHBhcmFtIHJvb3QwXG5cdCAqIEBwYXJhbSByb290MC50aXRsZVxuXHQgKiBAcGFyYW0gcm9vdDAuY29udGVudFxuXHQgKiBAcGFyYW0gcm9vdDAuZWRpdFRva2VuXG5cdCAqIEBwYXJhbSByb290MC50aW1lc3RhbXBcblx0ICogQHBhcmFtIHJvb3QwLmNvbmZpZ1xuXHQgKiBAcGFyYW0gcm9vdDAuYWRkaXRpb25hbENvbmZpZ1xuXHQgKi9cblx0YXN5bmMgZWRpdCh7dGl0bGUsIGNvbnRlbnQsIGVkaXRUb2tlbiwgdGltZXN0YW1wLCBjb25maWcgPSB7fSwgYWRkaXRpb25hbENvbmZpZyA9IHt9fSA9IHt9KSB7XG5cdFx0bGV0IHJlc3BvbnNlO1xuXHRcdHRyeSB7XG5cdFx0XHRyZXNwb25zZSA9IGF3YWl0IHJlcXVlc3RzLnBvc3Qoe1xuXHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdHRleHQ6IGNvbnRlbnQsXG5cdFx0XHRcdHRpdGxlLFxuXHRcdFx0XHR0b2tlbjogZWRpdFRva2VuLFxuXHRcdFx0XHQuLi4odGltZXN0YW1wID8ge2Jhc2V0aW1lc3RhbXA6IHRpbWVzdGFtcH0gOiB7fSksXG5cdFx0XHRcdC4uLmNvbmZpZyxcblx0XHRcdFx0Li4uYWRkaXRpb25hbENvbmZpZyxcblx0XHRcdH0pO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0TG9nLmVycm9yKCduZXR3b3JrX2VkaXRfZXJyb3InKTtcblx0XHR9XG5cdFx0aWYgKHJlc3BvbnNlLmVkaXQpIHtcblx0XHRcdGlmIChyZXNwb25zZS5lZGl0LnJlc3VsdCA9PT0gJ1N1Y2Nlc3MnKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHJlc3BvbnNlLmVkaXQuY29kZSkge1xuXHRcdFx0XHQvLyBBYnVzZSBGaWx0ZXJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBcbiAgICAgICAgICAgICAgICAgICAgICAgICR7aTE4bi50cmFuc2xhdGUoJ2hpdF9hYnVzZWZpbHRlcicpfToke3Jlc3BvbnNlLmVkaXQuaW5mby5yZXBsYWNlKCcvSGl0IEFidXNlRmlsdGVyOiAvaWcnLCAnJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZm9udC1zaXplOiBzbWFsbGVyO1wiPiR7cmVzcG9uc2UuZWRpdC53YXJuaW5nfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdExvZy5lcnJvcigndW5rbm93bl9lZGl0X2Vycm9yJyk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChyZXNwb25zZS5lcnJvciAmJiByZXNwb25zZS5lcnJvci5jb2RlKSB7XG5cdFx0XHRMb2cuZXJyb3IocmVzcG9uc2UuZXJyb3IuY29kZSk7XG5cdFx0fSBlbHNlIGlmIChyZXNwb25zZS5jb2RlKSB7XG5cdFx0XHRMb2cuZXJyb3IocmVzcG9uc2UuY29kZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdExvZy5lcnJvcigndW5rbm93bl9lZGl0X2Vycm9yJyk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIOiOt+W+l+aMh+WumumhtemdouacgOaWsOS/ruiuoue8luWPt1xuXHQgKiBHZXQgbGF0ZXN0IHJldmlzaW9uSWQgb2YgYSBwYWdlLlxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IHRpdGxlXG5cdCAqL1xuXHRhc3luYyBnZXRMYXRlc3RSZXZpc2lvbklkRm9yUGFnZSh0aXRsZSkge1xuXHRcdGNvbnN0IHtyZXZpc2lvbklkfSA9IGF3YWl0IHRoaXMuZ2V0UGFnZUluZm8oe3RpdGxlfSk7XG5cdFx0cmV0dXJuIHJldmlzaW9uSWQ7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFdpa2koKTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0IFdpa2kgZnJvbSAnLi4vc2VydmljZXMvd2lraSc7XG5pbXBvcnQgTG9nIGZyb20gJy4uL3V0aWxzL2xvZyc7XG5cbmNsYXNzIFBhZ2Uge1xuXHR0aW1lc3RhbXA7XG5cdGVkaXRUb2tlbjtcblx0dGl0bGU7XG5cdHJldmlzaW9uSWQ7XG5cblx0aW5pdGVkID0gZmFsc2U7XG5cdGlzTmV3UGFnZSA9IGZhbHNlO1xuXG5cdGNvbnRlbnRtb2RlbCA9ICd3aWtpdGV4dCc7XG5cblx0c2VjdGlvbkNhY2hlID0ge307XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7cGFyYW1zLnRpdGxlfSDpobXpnaLmoIfpopggUGFnZSBOYW1lIChvcHRpb25hbClcblx0ICogQHBhcmFtIHtwYXJhbXMucmV2aXNpb25JZH0g6aG16Z2i5L+u6K6i57yW5Y+3IFJldmlzaW9uIElkXG5cdCAqIEBwYXJhbSB7cGFyYW1zLmNvbnRlbnRtb2RlbH0g6aG16Z2i5YaF5a655qih5Z6LIENvbnRlbnQgTW9kZWxcblx0ICovXG5cdGNvbnN0cnVjdG9yKHt0aXRsZSwgcmV2aXNpb25JZH0pIHtcblx0XHR0aGlzLnRpdGxlID0gdGl0bGU7XG5cdFx0dGhpcy5yZXZpc2lvbklkID0gcmV2aXNpb25JZDtcblx0XHR0aGlzLmlzTmV3UGFnZSA9ICFyZXZpc2lvbklkO1xuXHR9XG5cblx0LyoqXG5cdCAqIOWIneWni+WMliDojrflvpfpobXpnaJFZGl0VG9rZW7lkozliJ3lp4tUaW1lU3RhbXBcblx0ICogSW5pdGlhbGl6YXRpb24uXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBlZGl0VG9rZW4gKG9wdGlvbmFsKSDlpoLmnpzmj5DkvpvkuoZlZGl0VG9rZW7vvIzlsIbkuI3kvJrlho3ojrflj5Zcblx0ICovXG5cdGFzeW5jIGluaXQoe2VkaXRUb2tlbiA9ICcnfSA9IHt9KSB7XG5cdFx0Y29uc3QgcHJvbWlzZUFyciA9IFt0aGlzLmdldFRpbWVzdGFtcCgpLCB0aGlzLmdldENvbnRlbnRNb2RlbCgpXTtcblx0XHRpZiAoIWVkaXRUb2tlbikge1xuXHRcdFx0cHJvbWlzZUFyci5wdXNoKHRoaXMuZ2V0RWRpdFRva2VuKCkpO1xuXHRcdH1cblx0XHRhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlQXJyKTtcblx0XHR0aGlzLmluaXRlZCA9IHRydWU7XG5cdFx0TG9nLmluZm8oYFBhZ2UgaW5pdGlhbGl6YXRpb24gZm9yICR7dGhpcy50aXRsZX0jJHt0aGlzLnJldmlzaW9uSWR9IGZpbmlzaGVkLmApO1xuXHR9XG5cblx0LyoqXG5cdCAqIOiOt+W+lyBFZGl0VG9rZW5cblx0ICogR2V0IEVkaXRUb2tlblxuXHQgKi9cblx0YXN5bmMgZ2V0RWRpdFRva2VuKCkge1xuXHRcdGF3YWl0IG13LmxvYWRlci51c2luZygnbWVkaWF3aWtpLnVzZXInKTtcblx0XHRpZiAobXcudXNlci50b2tlbnMuZ2V0KCdjc3JmVG9rZW4nKSAmJiBtdy51c2VyLnRva2Vucy5nZXQoJ2NzcmZUb2tlbicpICE9PSAnK1xcXFwnKSB7XG5cdFx0XHQvLyDlpoLmnpwgTWVkaWFXaWtpIEphdmFTY3JpcHQgQVBJIOWPr+S7peebtOaOpeiOt+W+lyBFZGl0VG9rZW4g5YiZ55u05o6l6L+U5ZueXG5cdFx0XHQvLyBSZXR1cm4gRWRpdFRva2VuIHJldHJpZXZlZCBmcm9tIE1lZGlhV2lraSBKYXZhU2NyaXB0IEFQSSBpZiBhY2Nlc3NpYmxlXG5cdFx0XHR0aGlzLmVkaXRUb2tlbiA9IG13LnVzZXIudG9rZW5zLmdldCgnY3NyZlRva2VuJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vIOS7jkFQSeiOt+W+l0VkaXRUb2tlblxuXHRcdC8vIEdldCBFZGl0VG9rZW4gZnJvbSBNZWRpYVdpa2kgQVBJXG5cdFx0dGhpcy5lZGl0VG9rZW4gPSBhd2FpdCBXaWtpLmdldEVkaXRUb2tlbigpO1xuXHR9XG5cblx0LyoqXG5cdCAqIOiOt+W+l+e8lui+keWfuuWHhuaXtumXtOaIs1xuXHQgKiBHZXQgQmFzZSBUaW1lc3RhbXBcblx0ICovXG5cdGFzeW5jIGdldFRpbWVzdGFtcCgpIHtcblx0XHRjb25zdCB7dGltZXN0YW1wLCByZXZpc2lvbklkfSA9IGF3YWl0IFdpa2kuZ2V0UGFnZUluZm8oe1xuXHRcdFx0cmV2aXNpb25JZDogdGhpcy5yZXZpc2lvbklkLFxuXHRcdFx0dGl0bGU6IHRoaXMudGl0bGUsXG5cdFx0fSk7XG5cdFx0dGhpcy50aW1lc3RhbXAgPSB0aW1lc3RhbXA7XG5cdFx0aWYgKHJldmlzaW9uSWQpIHtcblx0XHRcdHRoaXMucmV2aXNpb25JZCA9IHJldmlzaW9uSWQ7XG5cdFx0XHR0aGlzLmlzTmV3UGFnZSA9IGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiDojrflvpfpobXpnaLlhoXlrrnmqKHlnotcblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLnJldmlzaW9uSWRcblx0ICovXG5cdGFzeW5jIGdldENvbnRlbnRNb2RlbCgpIHtcblx0XHRjb25zdCB7Y29udGVudG1vZGVsfSA9IGF3YWl0IFdpa2kuZ2V0UGFnZUluZm8oe1xuXHRcdFx0cmV2aXNpb25JZDogdGhpcy5yZXZpc2lvbklkLFxuXHRcdFx0dGl0bGU6IHRoaXMudGl0bGUsXG5cdFx0fSk7XG5cdFx0dGhpcy5jb250ZW50bW9kZWwgPSBjb250ZW50bW9kZWwgfHwgJ3dpa2l0ZXh0Jztcblx0fVxuXG5cdC8qKlxuXHQgKiDojrflvpcgV2lraVRleHRcblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLnNlY3Rpb25cblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5yZXZpc2lvbklkXG5cdCAqL1xuXHRhc3luYyBnZXRXaWtpVGV4dCh7c2VjdGlvbiA9ICcnfSA9IHt9KSB7XG5cdFx0Y29uc3Qgc2VjID0gc2VjdGlvbiA9PT0gLTEgPyAnJyA6IHNlY3Rpb247XG5cdFx0aWYgKHRoaXMuc2VjdGlvbkNhY2hlW3NlY10pIHtcblx0XHRcdHJldHVybiB0aGlzLnNlY3Rpb25DYWNoZVtzZWNdO1xuXHRcdH1cblx0XHRjb25zdCB3aWtpVGV4dCA9IGF3YWl0IFdpa2kuZ2V0V2lraVRleHQoe1xuXHRcdFx0c2VjdGlvbjogc2VjLFxuXHRcdFx0cmV2aXNpb25JZDogdGhpcy5yZXZpc2lvbklkLFxuXHRcdH0pO1xuXHRcdExvZy5pbmZvKGBXaWtpdGV4dCBvZiAke3RoaXMudGl0bGV9IyR7c2VjdGlvbn0gZmV0Y2hlZC5gKTtcblx0XHR0aGlzLnNlY3Rpb25DYWNoZVtzZWNdID0gd2lraVRleHQ7XG5cdFx0cmV0dXJuIHdpa2lUZXh0O1xuXHR9XG5cblx0LyoqXG5cdCAqIOino+aekCBXaWtpVGV4dFxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gd2lraXRleHRcblx0ICovXG5cdGFzeW5jIHBhcnNlV2lraVRleHQod2lraXRleHQpIHtcblx0XHRyZXR1cm4gV2lraS5wYXJzZVdpa2lUZXh0KHdpa2l0ZXh0LCB0aGlzLnRpdGxlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiDnvJbovpHpobXpnaJcblx0ICpcblx0ICogQHBhcmFtIHsqfSBjb25maWdcblx0ICogQHBhcmFtIHBheWxvYWRcblx0ICovXG5cdGFzeW5jIGVkaXQocGF5bG9hZCkge1xuXHRcdGlmICghdGhpcy5lZGl0VG9rZW4pIHtcblx0XHRcdExvZy5lcnJvcignZmFpbF90b19nZXRfZWRpdHRva2VuJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICghdGhpcy50aW1lc3RhbXAgJiYgIXRoaXMuaXNOZXdQYWdlKSB7XG5cdFx0XHQvLyDlpoLmnpzkuI3mmK/liJvlu7rmlrDpobXpnaIg5Y+I5rKh5pyJ5Z+65YeG5pe26Ze05oizIOWImeacieWPr+iDvemAoOaIkOe8lui+keimhuebliDkv53pmanotbfop4Hnm7TmjqXmi5Lnu51cblx0XHRcdExvZy5lcnJvcignZmFpbF90b19nZXRfdGltZXN0YW1wJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHJldHVybiBXaWtpLmVkaXQoe1xuXHRcdFx0dGl0bGU6IHRoaXMudGl0bGUsXG5cdFx0XHRlZGl0VG9rZW46IHRoaXMuZWRpdFRva2VuLFxuXHRcdFx0Li4uKHRoaXMudGltZXN0YW1wID8ge3RpbWVzdGFtcDogdGhpcy50aW1lc3RhbXB9IDoge30pLFxuXHRcdFx0Li4ucGF5bG9hZCxcblx0XHRcdGFkZGl0aW9uYWxDb25maWc6IHtcblx0XHRcdFx0Li4uKHRoaXMuaXNOZXdQYWdlID8ge2NyZWF0ZW9ubHk6IHRoaXMuaXNOZXdQYWdlfSA6IHt9KSxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuY2xhc3MgTm90aWZpY2F0aW9uIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5pbml0KCk7XG5cdH1cblx0aW5pdCgpIHtcblx0XHQkKCdib2R5JykuYXBwZW5kKCc8ZGl2IGlkPVwiTW9lTm90aWZpY2F0aW9uXCI+PC9kaXY+Jyk7XG5cdH1cblx0ZGlzcGxheSh0ZXh0ID0gJ+WWtX4nLCB0eXBlID0gJ3N1Y2Nlc3MnLCBjYWxsYmFjayA9ICgpID0+IHt9KSB7XG5cdFx0JCgnI01vZU5vdGlmaWNhdGlvbicpLmFwcGVuZChcblx0XHRcdCQoJzxkaXY+Jylcblx0XHRcdFx0LmFkZENsYXNzKCdNb2VOb3RpZmljYXRpb24tbm90aWNlJylcblx0XHRcdFx0LmFkZENsYXNzKGBNb2VOb3RpZmljYXRpb24tbm90aWNlLSR7dHlwZX1gKVxuXHRcdFx0XHQuYXBwZW5kKGA8c3Bhbj4ke3RleHR9PC9zcGFuPmApXG5cdFx0KTtcblx0XHQkKCcjTW9lTm90aWZpY2F0aW9uJykuZmluZCgnLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2UnKS5sYXN0KCkuZmFkZUluKDMwMCk7XG5cdFx0dGhpcy5iaW5kKCk7XG5cdFx0dGhpcy5jbGVhcigpO1xuXHRcdGNhbGxiYWNrKCQoJyNNb2VOb3RpZmljYXRpb24nKS5maW5kKCcuTW9lTm90aWZpY2F0aW9uLW5vdGljZScpLmxhc3QoKSk7XG5cdH1cblx0YmluZCgpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHQkKCcuTW9lTm90aWZpY2F0aW9uLW5vdGljZScpLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRzZWxmLnNsaWRlTGVmdCgkKHRoaXMpKTtcblx0XHR9KTtcblx0fVxuXHRzdWNjZXNzKHRleHQsIGNhbGxiYWNrKSB7XG5cdFx0dGhpcy5kaXNwbGF5KHRleHQsICdzdWNjZXNzJywgY2FsbGJhY2spO1xuXHR9XG5cdHdhcm5pbmcodGV4dCwgY2FsbGJhY2spIHtcblx0XHR0aGlzLmRpc3BsYXkodGV4dCwgJ3dhcm5pbmcnLCBjYWxsYmFjayk7XG5cdH1cblx0ZXJyb3IodGV4dCwgY2FsbGJhY2spIHtcblx0XHR0aGlzLmRpc3BsYXkodGV4dCwgJ2Vycm9yJywgY2FsbGJhY2spO1xuXHR9XG5cdGNsZWFyKCkge1xuXHRcdGlmICgkKCcuTW9lTm90aWZpY2F0aW9uLW5vdGljZScpLmxlbmd0aCA+PSAxMCkge1xuXHRcdFx0JCgnI01vZU5vdGlmaWNhdGlvbicpXG5cdFx0XHRcdC5jaGlsZHJlbigpXG5cdFx0XHRcdC5maXJzdCgpXG5cdFx0XHRcdC5mYWRlT3V0KDE1MCwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdCQodGhpcykucmVtb3ZlKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0c2V0VGltZW91dCh0aGlzLmNsZWFyLCAzMDApO1xuXHRcdH1cblx0fVxuXHRlbXB0eShmKSB7XG5cdFx0JCgnLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2UnKS5lYWNoKGZ1bmN0aW9uIChpKSB7XG5cdFx0XHRpZiAodHlwZW9mIGYgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Y29uc3QgZWxlID0gJCh0aGlzKTtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0ZihlbGUpO1xuXHRcdFx0XHR9LCAyMDAgKiBpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQodGhpcylcblx0XHRcdFx0XHQuZGVsYXkoaSAqIDIwMClcblx0XHRcdFx0XHQuZmFkZU91dCgnZmFzdCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdCQodGhpcykucmVtb3ZlKCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblx0c2xpZGVMZWZ0KGVsZSwgc3BlZWQpIHtcblx0XHRlbGUuY3NzKCdwb3NpdGlvbicsICdyZWxhdGl2ZScpO1xuXHRcdGVsZS5hbmltYXRlKFxuXHRcdFx0e1xuXHRcdFx0XHRsZWZ0OiAnLTIwMCUnLFxuXHRcdFx0fSxcblx0XHRcdHNwZWVkIHx8IDE1MCxcblx0XHRcdGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0JCh0aGlzKS5mYWRlT3V0KCdmYXN0JywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdCQodGhpcykucmVtb3ZlKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IE5vdGlmaWNhdGlvbigpO1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5jb25zdCBzbGVlcCA9ICh0aW1lKSA9PiB7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXHRcdHJldHVybiBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpO1xuXHR9KTtcbn07XG5leHBvcnQgZGVmYXVsdCBzbGVlcDtcbiIsICIvKipcbiAqIOino+aekFVSTOWPguaVsOWIl+ihqFxuICogUGFyc2UgVVJMIHF1ZXJ5LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfX0gdXJsXG4gKiBAcGFyYW0gdXJsXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VRdWVyeSh1cmwpIHtcblx0Y29uc3QgcmVnID0gLygoW14/Jj1dKykoPzo9KFtePyY9XSopKSopL2c7XG5cdGNvbnN0IHBhcmFtcyA9IHt9O1xuXHRsZXQgbWF0Y2g7XG5cdHdoaWxlICgobWF0Y2ggPSByZWcuZXhlYyh1cmwpKSkge1xuXHRcdHRyeSB7XG5cdFx0XHRwYXJhbXNbbWF0Y2hbMl1dID0gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdHBhcmFtc1ttYXRjaFsyXV0gPSBtYXRjaFszXTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHBhcmFtcztcbn1cbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tICcuL25vdGlmaWNhdGlvbic7XG5pbXBvcnQgaTE4biBmcm9tICcuLi91dGlscy9pMThuJztcbmltcG9ydCBMb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztcbmltcG9ydCBzbGVlcCBmcm9tICcuLi91dGlscy9zbGVlcCc7XG5pbXBvcnQge3BhcnNlUXVlcnl9IGZyb20gJy4uL3V0aWxzL2hlbHBlcnMnO1xuXG5jbGFzcyBVSSB7XG5cdHF1aWNrRWRpdFBhbmVsVmlzaWJsZSA9IGZhbHNlO1xuXHRzY3JvbGxUb3AgPSAwO1xuXG5cdC8qKlxuXHQgKiDliJvlu7rlsYXkuK3lr7nor53moYZcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIOeql+WPo+agh+mimFxuXHQgKiBAcGFyYW0ge3N0cmluZyB8IEpRdWVyeTxIVE1MRWxlbWVudD59IGNvbnRlbnQg5YaF5a65XG5cdCAqIEBwYXJhbSB7Kn0gd2lkdGgg5a695bqmXG5cdCAqIEBwYXJhbSB7Kn0gY2FsbGJhY2sg5Zue6LCD5Ye95pWwXG5cdCAqL1xuXHRjcmVhdGVEaWFsb2dCb3godGl0bGUgPSAnV2lraXBsdXMnLCBjb250ZW50ID0gJycsIHdpZHRoID0gNjAwLCBjYWxsYmFjayA9ICgpID0+IHt9KSB7XG5cdFx0aWYgKCQoJy5XaWtpcGx1cy1JbnRlckJveCcpLmxlbmd0aCA+IDApIHtcblx0XHRcdCQoJy5XaWtpcGx1cy1JbnRlckJveCcpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGNvbnN0IGNsaWVudFdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cdFx0Y29uc3QgY2xpZW50SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXHRcdGNvbnN0IGRpYWxvZ1dpZHRoID0gTWF0aC5taW4oY2xpZW50V2lkdGgsIHdpZHRoKTtcblx0XHRjb25zdCBkaWFsb2dCb3ggPSAkKCc8ZGl2PicpXG5cdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94Jylcblx0XHRcdC5jc3Moe1xuXHRcdFx0XHQnbWFyZ2luLWxlZnQnOiBjbGllbnRXaWR0aCAvIDIgLSBkaWFsb2dXaWR0aCAvIDIsXG5cdFx0XHRcdHRvcDogJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkgKyBjbGllbnRIZWlnaHQgKiAwLjIsXG5cdFx0XHRcdGRpc3BsYXk6ICdub25lJyxcblx0XHRcdH0pXG5cdFx0XHQuYXBwZW5kKCQoJzxkaXY+JykuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUhlYWRlcicpLmh0bWwodGl0bGUpKVxuXHRcdFx0LmFwcGVuZCgkKCc8ZGl2PicpLmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveC1Db250ZW50JykuYXBwZW5kKGNvbnRlbnQpKVxuXHRcdFx0LmFwcGVuZCgkKCc8c3Bhbj4nKS50ZXh0KCfDlycpLmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveC1DbG9zZScpKTtcblx0XHQkKCdib2R5JykuYXBwZW5kKGRpYWxvZ0JveCk7XG5cdFx0JCgnLldpa2lwbHVzLUludGVyQm94Jykud2lkdGgoZGlhbG9nV2lkdGgpO1xuXHRcdCQoJy5XaWtpcGx1cy1JbnRlckJveC1DbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblx0XHRcdCQodGhpcylcblx0XHRcdFx0LnBhcmVudCgpXG5cdFx0XHRcdC5mYWRlT3V0KCdmYXN0JywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsICh3aW5kb3cub25iZWZvcmV1bmxvYWQgPSB1bmRlZmluZWQpKTsgLy8g5Y+W5raI6aG16Z2i5YWz6Zet56Gu6K6kXG5cdFx0XHRcdFx0JCh0aGlzKS5yZW1vdmUoKTtcblx0XHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0Ly/mi5bmm7Ncblx0XHRjb25zdCBiaW5kRHJhZ2dpbmcgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRcdFx0ZWxlbWVudC5tb3VzZWRvd24oKGUpID0+IHtcblx0XHRcdFx0Y29uc3QgYmFzZVggPSBlLmNsaWVudFg7XG5cdFx0XHRcdGNvbnN0IGJhc2VZID0gZS5jbGllbnRZO1xuXHRcdFx0XHRjb25zdCBiYXNlT2Zmc2V0WCA9IGVsZW1lbnQucGFyZW50KCkub2Zmc2V0KCkubGVmdDtcblx0XHRcdFx0Y29uc3QgYmFzZU9mZnNldFkgPSBlbGVtZW50LnBhcmVudCgpLm9mZnNldCgpLnRvcDtcblx0XHRcdFx0JChkb2N1bWVudCkub24oJ21vdXNlbW92ZScsIChlKSA9PiB7XG5cdFx0XHRcdFx0ZWxlbWVudC5wYXJlbnQoKS5jc3Moe1xuXHRcdFx0XHRcdFx0J21hcmdpbi1sZWZ0JzogYmFzZU9mZnNldFggKyBlLmNsaWVudFggLSBiYXNlWCxcblx0XHRcdFx0XHRcdHRvcDogYmFzZU9mZnNldFkgKyBlLmNsaWVudFkgLSBiYXNlWSxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdCQoZG9jdW1lbnQpLm9uKCdtb3VzZXVwJywgKCkgPT4ge1xuXHRcdFx0XHRcdGVsZW1lbnQudW5iaW5kKCdtb3VzZWRvd24nKTtcblx0XHRcdFx0XHQkKGRvY3VtZW50KS5vZmYoJ21vdXNlbW92ZScpO1xuXHRcdFx0XHRcdCQoZG9jdW1lbnQpLm9mZignbW91c2V1cCcpO1xuXHRcdFx0XHRcdGJpbmREcmFnZ2luZyhlbGVtZW50KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9O1xuXHRcdGJpbmREcmFnZ2luZygkKCcuV2lraXBsdXMtSW50ZXJCb3gtSGVhZGVyJykpO1xuXHRcdCQoJy5XaWtpcGx1cy1JbnRlckJveCcpLmZhZGVJbig1MDApO1xuXHRcdGNhbGxiYWNrKCk7XG5cdFx0cmV0dXJuIGRpYWxvZ0JveDtcblx0fVxuXG5cdC8qKlxuXHQgKiDlnKjmkJzntKLmoYblt6bkvqfjgIzmm7TlpJrjgI3oj5zljZXlhoXmt7vliqDmjInpkq5cblx0ICogQWRkIGEgYnV0dG9uIGluIFwiTW9yZVwiIG1lbnUgKGxlZnQgb2YgdGhlIHNlYXJjaCBiYXIpXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IOaMiemSruWQjSBCdXR0b24gdGV4dFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gaWQg5oyJ6ZKuaWQgQnV0dG9uIGlkXG5cdCAqIEByZXR1cm4ge0pRdWVyeTxIVE1MRWxlbWVudD59IGJ1dHRvblxuXHQgKi9cblx0YWRkRnVuY3Rpb25CdXR0b24odGV4dCwgaWQpIHtcblx0XHRsZXQgYnV0dG9uO1xuXHRcdHN3aXRjaCAoQ29uc3RhbnRzLnNraW4pIHtcblx0XHRcdGNhc2UgJ21pbmVydmEnOlxuXHRcdFx0XHRidXR0b24gPSAkKCc8bGk+Jylcblx0XHRcdFx0XHQuYXR0cignaWQnLCBpZClcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3RvZ2dsZS1saXN0LWl0ZW0nKVxuXHRcdFx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdFx0XHQkKCc8YT4nKVxuXHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ213LXVpLWljb24gbXctdWktaWNvbi1iZWZvcmUgdG9nZ2xlLWxpc3QtaXRlbV9fYW5jaG9yJylcblx0XHRcdFx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHRcdFx0XHQkKCc8c3Bhbj4nKVxuXHRcdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2hyZWYnLCAnamF2YXNjcmlwdDp2b2lkKDApOycpXG5cdFx0XHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3RvZ2dsZS1saXN0LWl0ZW1fX2xhYmVsJylcblx0XHRcdFx0XHRcdFx0XHRcdC50ZXh0KHRleHQpXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnbW9lc2tpbic6XG5cdFx0XHRcdGJ1dHRvbiA9ICQoJzxsaT4nKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtTW9yZS1GdW5jdGlvbi1CdXR0b24nKVxuXHRcdFx0XHRcdC5hdHRyKCdpZCcsIGlkKVxuXHRcdFx0XHRcdC5hcHBlbmQoJCgnPGE+JykuYXR0cignaHJlZicsICdqYXZhc2NyaXB0OnZvaWQoMCk7JykudGV4dCh0ZXh0KSk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRidXR0b24gPSAkKCc8bGk+Jylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ213LWxpc3QtaXRlbScpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCd2ZWN0b3ItdGFiLW5vaWNvbicpXG5cdFx0XHRcdFx0LmF0dHIoJ2lkJywgaWQpXG5cdFx0XHRcdFx0LmFwcGVuZCgkKCc8YT4nKS5hdHRyKCdocmVmJywgJ2phdmFzY3JpcHQ6dm9pZCgwKTsnKS50ZXh0KHRleHQpKTtcblx0XHR9XG5cdFx0aWYgKENvbnN0YW50cy5za2luID09PSAnbWluZXJ2YScgJiYgJCgnI3AtdGInKS5sZW5ndGggPiAwKSB7XG5cdFx0XHQkKCcjcC10YicpLmFwcGVuZChidXR0b24pO1xuXHRcdFx0cmV0dXJuICQoYCMke2lkfWApO1xuXHRcdH0gZWxzZSBpZiAoQ29uc3RhbnRzLnNraW4gPT09ICdtb2Vza2luJykge1xuXHRcdFx0JCgnLm1vcmUtYWN0aW9ucy1saXN0JykuZmlyc3QoKS5hcHBlbmQoYnV0dG9uKTtcblx0XHRcdHJldHVybiAkKGAjJHtpZH1gKTtcblx0XHR9IGVsc2UgaWYgKCQoJyNwLWNhY3Rpb25zJykubGVuZ3RoID4gMCkge1xuXHRcdFx0JCgnI3AtY2FjdGlvbnMgdWwnKS5hcHBlbmQoYnV0dG9uKTtcblx0XHRcdHJldHVybiAkKGAjJHtpZH1gKTtcblx0XHR9XG5cdFx0TG9nLmluZm8oaTE4bi50cmFuc2xhdGUoJ2NhbnRfYWRkX2Z1bmNidG4nKSk7XG5cdH1cblxuXHQvKipcblx0ICog5o+S5YWl5b+r6YCf6YeN5a6a5ZCR5oyJ6ZKuXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gb25DbGlja1xuXHQgKi9cblx0aW5zZXJ0U2ltcGxlUmVkaXJlY3RCdXR0b24ob25DbGljayA9ICgpID0+IHt9KSB7XG5cdFx0Y29uc3QgYnV0dG9uID0gdGhpcy5hZGRGdW5jdGlvbkJ1dHRvbihpMThuLnRyYW5zbGF0ZSgncmVkaXJlY3RfZnJvbScpLCAnV2lraXBsdXMtU1ItSW50cm8nKTtcblx0XHRpZiAoYnV0dG9uKSB7XG5cdFx0XHRidXR0b24ub24oJ2NsaWNrJywgb25DbGljayk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIOaPkuWFpeiuvue9rumdouadv+aMiemSrlxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IG9uQ2xpY2tcblx0ICovXG5cdGluc2VydFNldHRpbmdzUGFuZWxCdXR0b24ob25DbGljayA9ICgpID0+IHt9KSB7XG5cdFx0Y29uc3QgYnV0dG9uID0gdGhpcy5hZGRGdW5jdGlvbkJ1dHRvbihpMThuLnRyYW5zbGF0ZSgnd2lraXBsdXNfc2V0dGluZ3MnKSwgJ1dpa2lwbHVzLVNldHRpbmdzLUludHJvJyk7XG5cdFx0aWYgKGJ1dHRvbikge1xuXHRcdFx0YnV0dG9uLm9uKCdjbGljaycsIG9uQ2xpY2spO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiDmj5LlhaXpobbpg6jlv6vpgJ/nvJbovpHmjInpkq5cblx0ICogSW5zZXJ0IFF1aWNrRWRpdCBidXR0b24gYmVzaWRlcyBwYWdlIGVkaXQgYnV0dG9uLlxuXHQgKlxuXHQgKiBAcGFyYW0gb25DbGlja1xuXHQgKi9cblx0aW5zZXJ0VG9wUXVpY2tFZGl0RW50cnkob25DbGljaykge1xuXHRcdGNvbnN0IHRvcEJ0biA9ICQoJzxsaT4nKS5hdHRyKCdpZCcsICdXaWtpcGx1cy1FZGl0LVRvcEJ0bicpLmF0dHIoJ2NsYXNzJywgJ213LWxpc3QtaXRlbScpO1xuXHRcdGNvbnN0IHRvcEJ0bkxpbmsgPSAkKCc8YT4nKVxuXHRcdFx0LmF0dHIoJ2hyZWYnLCAnamF2YXNjcmlwdDp2b2lkKDApJylcblx0XHRcdC50ZXh0KGAke2kxOG4udHJhbnNsYXRlKCdxdWlja2VkaXRfdG9wYnRuJyl9YCk7XG5cdFx0dG9wQnRuLmFwcGVuZCh0b3BCdG5MaW5rKTtcblx0XHRzd2l0Y2ggKENvbnN0YW50cy5za2luKSB7XG5cdFx0XHRjYXNlICdtaW5lcnZhJzpcblx0XHRcdFx0dG9wQnRuLmNzcyh7J2FsaWduLWl0ZW1zJzogJ2NlbnRlcicsIGRpc3BsYXk6ICdmbGV4J30pO1xuXHRcdFx0XHR0b3BCdG4uZmluZCgnc3BhbicpLmFkZENsYXNzKCdwYWdlLWFjdGlvbnMtbWVudV9fbGlzdC1pdGVtJyk7XG5cdFx0XHRcdHRvcEJ0blxuXHRcdFx0XHRcdC5maW5kKCdhJylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoXG5cdFx0XHRcdFx0XHQnbXctdWktaWNvbiBtdy11aS1pY29uLWVsZW1lbnQgbXctdWktaWNvbi13aWtpbWVkaWEtZWRpdC1iYXNlMjAgbXctdWktaWNvbi13aXRoLWxhYmVsLWRlc2t0b3AnXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHRcdC5jc3MoJ3ZlcnRpY2FsLWFsaWduJywgJ21pZGRsZScpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAndmVjdG9yLTIwMjInOlxuXHRcdFx0XHR0b3BCdG4uYWRkQ2xhc3MoJ3ZlY3Rvci10YWItbm9pY29uJyk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICd2ZWN0b3InOlxuXHRcdFx0XHR0b3BCdG4uYXBwZW5kKCQoJzxzcGFuPicpLmFwcGVuZCh0b3BCdG5MaW5rKSk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdH1cblx0XHQkKHRvcEJ0bikub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0b25DbGljayh7XG5cdFx0XHRcdHNlY3Rpb25OdW1iZXI6IC0xLFxuXHRcdFx0XHR0YXJnZXRQYWdlTmFtZTogQ29uc3RhbnRzLmN1cnJlbnRQYWdlTmFtZSxcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdGlmICgkKCcjY2EtZWRpdCcpLmxlbmd0aCA+IDAgJiYgJCgnI1dpa2lwbHVzLUVkaXQtVG9wQnRuJykubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRDb25zdGFudHMuc2tpbiA9PT0gJ21pbmVydmEnID8gJCgnI2NhLWVkaXQnKS5wYXJlbnQoKS5hZnRlcih0b3BCdG4pIDogJCgnI2NhLWVkaXQnKS5hZnRlcih0b3BCdG4pO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiDmj5LlhaXmrrXokL3lv6vpgJ/nvJbovpHmjInpkq5cblx0ICogSW5zZXJ0IFF1aWNrRWRpdCBidXR0b25zIGZvciBlYWNoIHNlY3Rpb24uXG5cdCAqXG5cdCAqIEBwYXJhbSBvbkNsaWNrXG5cdCAqL1xuXHRpbnNlcnRTZWN0aW9uUXVpY2tFZGl0RW50cmllcyhvbkNsaWNrID0gKCkgPT4ge30pIHtcblx0XHRjb25zdCBzZWN0aW9uQnRuID1cblx0XHRcdENvbnN0YW50cy5za2luID09PSAnbWluZXJ2YSdcblx0XHRcdFx0PyAkKCc8c3Bhbj4nKS5hcHBlbmQoXG5cdFx0XHRcdFx0XHQkKCc8YT4nKVxuXHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoXG5cdFx0XHRcdFx0XHRcdFx0J1dpa2lwbHVzLUVkaXQtU2VjdGlvbkJ0biBtdy11aS1pY29uIG13LXVpLWljb24tZWxlbWVudCBtdy11aS1pY29uLXdpa2ltZWRpYS1lZGl0LWJhc2UyMCBlZGl0LXBhZ2UgbXctdWktaWNvbi1mbHVzaC1yaWdodCdcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHQuY3NzKCdtYXJnaW4tbGVmdCcsICcwLjc1ZW0nKVxuXHRcdFx0XHRcdFx0XHQuYXR0cignaHJlZicsICdqYXZhc2NyaXB0OnZvaWQoMCknKVxuXHRcdFx0XHRcdFx0XHQuYXR0cigndGl0bGUnLCBpMThuLnRyYW5zbGF0ZSgncXVpY2tlZGl0X3NlY3Rpb25idG4nKSlcblx0XHRcdFx0XHQpXG5cdFx0XHRcdDogJCgnPHNwYW4+Jylcblx0XHRcdFx0XHRcdC5hcHBlbmQoJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ213LWVkaXRzZWN0aW9uLWRpdmlkZXInKS50ZXh0KCcgfCAnKSlcblx0XHRcdFx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdFx0XHRcdCQoJzxhPicpXG5cdFx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1FZGl0LVNlY3Rpb25CdG4nKVxuXHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdocmVmJywgJ2phdmFzY3JpcHQ6dm9pZCgwKScpXG5cdFx0XHRcdFx0XHRcdFx0LnRleHQoaTE4bi50cmFuc2xhdGUoJ3F1aWNrZWRpdF9zZWN0aW9uYnRuJykpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdCQoJy5tdy1lZGl0c2VjdGlvbicpLmVhY2goZnVuY3Rpb24gKGkpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IGVkaXRVUkwgPSAkKHRoaXMpLmZpbmQoXCJhW2hyZWYqPSdhY3Rpb249ZWRpdCddXCIpLmZpcnN0KCkuYXR0cignaHJlZicpO1xuXHRcdFx0XHRjb25zdCBzZWN0aW9uTnVtYmVyID0gZWRpdFVSTFxuXHRcdFx0XHRcdC5tYXRjaCgvJlt2ZV0qc2VjdGlvblxcPShbXiZdKykvKVsxXSAvLyBgdmVgIGZvciB2aXN1YWwgZWRpdG9yXG5cdFx0XHRcdFx0LnJlcGxhY2UoL1QtL2dpLCAnJyk7IC8vIGVtYmVkZGVkIHBhZ2VzIHVzZSBULXNlcmllcyBzZWN0aW9uIG51bWJlclxuXHRcdFx0XHRjb25zdCBzZWN0aW9uVGFyZ2V0TmFtZSA9IGRlY29kZVVSSUNvbXBvbmVudChlZGl0VVJMLm1hdGNoKC90aXRsZT0oLis/KSYvKVsxXSk7XG5cdFx0XHRcdGNvbnN0IGNsb25lTm9kZSA9ICQodGhpcykucHJldigpLmNsb25lKCk7XG5cdFx0XHRcdGNsb25lTm9kZS5maW5kKCcubXctaGVhZGxpbmUtbnVtYmVyJykucmVtb3ZlKCk7XG5cdFx0XHRcdGNvbnN0IHNlY3Rpb25OYW1lID0gY2xvbmVOb2RlLnRleHQoKS50cmltKCk7XG5cdFx0XHRcdGNvbnN0IF9zZWN0aW9uQnRuID0gc2VjdGlvbkJ0bi5jbG9uZSgpO1xuXHRcdFx0XHRfc2VjdGlvbkJ0bi5maW5kKCcuV2lraXBsdXMtRWRpdC1TZWN0aW9uQnRuJykub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdG9uQ2xpY2soe1xuXHRcdFx0XHRcdFx0c2VjdGlvbk51bWJlcixcblx0XHRcdFx0XHRcdHNlY3Rpb25OYW1lLFxuXHRcdFx0XHRcdFx0dGFyZ2V0UGFnZU5hbWU6IHNlY3Rpb25UYXJnZXROYW1lLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0Q29uc3RhbnRzLnNraW4gPT09ICdtaW5lcnZhJ1xuXHRcdFx0XHRcdD8gJCh0aGlzKS5hcHBlbmQoX3NlY3Rpb25CdG4pXG5cdFx0XHRcdFx0OiAkKHRoaXMpLmZpbmQoJy5tdy1lZGl0c2VjdGlvbi1icmFja2V0JykubGFzdCgpLmJlZm9yZShfc2VjdGlvbkJ0bik7XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0TG9nLmVycm9yKCdmYWlsX3RvX2luaXRfcXVpY2tlZGl0Jyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICog5o+S5YWl5Lu75oSP6ZO+5o6l57yW6L6R5YWl5Y+jXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gb25DbGlja1xuXHQgKi9cblx0aW5zZXJ0TGlua0VkaXRFbnRyaWVzKG9uQ2xpY2sgPSAoKSA9PiB7fSkge1xuXHRcdCQoJyNtdy1jb250ZW50LXRleHQgYS5leHRlcm5hbCcpLmVhY2goZnVuY3Rpb24gKGkpIHtcblx0XHRcdGNvbnN0IHVybCA9ICQodGhpcykuYXR0cignaHJlZicpO1xuXHRcdFx0Y29uc3QgcGFyYW1zID0gcGFyc2VRdWVyeSh1cmwpO1xuXHRcdFx0aWYgKHBhcmFtcy5hY3Rpb24gPT09ICdlZGl0JyAmJiBwYXJhbXMudGl0bGUgIT09IHVuZGVmaW5lZCAmJiBwYXJhbXMuc2VjdGlvbiAhPT0gJ25ldycpIHtcblx0XHRcdFx0JCh0aGlzKS5hZnRlcihcblx0XHRcdFx0XHQkKCc8YT4nKVxuXHRcdFx0XHRcdFx0LmF0dHIoe1xuXHRcdFx0XHRcdFx0XHRocmVmOiAnamF2YXNjcmlwdDp2b2lkKDApJyxcblx0XHRcdFx0XHRcdFx0Y2xhc3M6ICdXaWtpcGx1cy1FZGl0LUV2ZXJ5V2hlcmVCdG4nLFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdC50ZXh0KGAoJHtpMThuLnRyYW5zbGF0ZSgncXVpY2tlZGl0X3NlY3Rpb25idG4nKX0pYClcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2soe1xuXHRcdFx0XHRcdFx0XHRcdHRhcmdldFBhZ2VOYW1lOiBwYXJhbXMudGl0bGUsXG5cdFx0XHRcdFx0XHRcdFx0c2VjdGlvbk51bWJlcjogcGFyYW1zLnNlY3Rpb24gPz8gLTEsXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHNob3dRdWlja0VkaXRQYW5lbCh7XG5cdFx0dGl0bGUgPSAnJyxcblx0XHRjb250ZW50ID0gJycsXG5cdFx0c3VtbWFyeSA9ICcnLFxuXHRcdG9uQmFjayA9ICgpID0+IHt9LFxuXHRcdG9uUGFyc2UgPSAoKSA9PiB7fSxcblx0XHRvbkVkaXQgPSAoKSA9PiB7fSxcblx0XHRlc2NFeGl0ID0gZmFsc2UsXG5cdH0pIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHR0aGlzLnNjcm9sbFRvcCA9ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpO1xuXHRcdGlmICh0aGlzLnF1aWNrRWRpdFBhbmVsVmlzaWJsZSkge1xuXHRcdFx0dGhpcy5oaWRlUXVpY2tFZGl0UGFuZWwoKTtcblx0XHR9XG5cdFx0dGhpcy5xdWlja0VkaXRQYW5lbFZpc2libGUgPSB0cnVlO1xuXHRcdC8vIOmYsuatouaJi+a7keWFs+mXremhtemdolxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0J2Nsb3NlJyxcblx0XHRcdCh3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHJldHVybiBgJHtpMThuLnRyYW5zbGF0ZSgnb25jbG9zZV9jb25maXJtJyl9YDtcblx0XHRcdH0pXG5cdFx0KTtcblx0XHRjb25zdCBpc05ld1BhZ2UgPSAkKCcubm9hcnRpY2xldGV4dCcpLmxlbmd0aCA+IDA7XG5cdFx0Ly8gRE9NIOWumuS5ieW8gOWni1xuXHRcdGNvbnN0IGJhY2tCdG4gPSAkKCc8c3Bhbj4nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVF1aWNrZWRpdC1CYWNrJylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtQnRuJylcblx0XHRcdC50ZXh0KGAke2kxOG4udHJhbnNsYXRlKCdiYWNrJyl9YCk7IC8vIOi/lOWbnuaMiemSrlxuXHRcdGNvbnN0IGp1bXBCdG4gPSAkKCc8c3Bhbj4nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVF1aWNrZWRpdC1KdW1wJylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtQnRuJylcblx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdCQoJzxhPicpXG5cdFx0XHRcdFx0LmF0dHIoJ2hyZWYnLCAnI1dpa2lwbHVzLVF1aWNrZWRpdCcpXG5cdFx0XHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoJ2dvdG9fZWRpdGJveCcpfWApXG5cdFx0XHQpOyAvLyDliLDnvJbovpHmoYZcblx0XHRjb25zdCBpbnB1dEJveCA9ICQoJzx0ZXh0YXJlYT4nKS5hdHRyKCdpZCcsICdXaWtpcGx1cy1RdWlja2VkaXQnKTsgLy8g5Li757yW6L6R5qGGXG5cdFx0Y29uc3QgcHJldmlld0JveCA9ICQoJzxkaXY+JykuYXR0cignaWQnLCAnV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0Jyk7IC8vIOmihOiniOi+k+WHulxuXHRcdGNvbnN0IHN1bW1hcnlCb3ggPSAkKCc8aW5wdXQ+Jylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1RdWlja2VkaXQtU3VtbWFyeS1JbnB1dCcpXG5cdFx0XHQuYXR0cigncGxhY2Vob2xkZXInLCBgJHtpMThuLnRyYW5zbGF0ZSgnc3VtbWFyeV9wbGFjZWhvbGQnKX1gKTsgLy8g57yW6L6R5pGY6KaB6L6T5YWlXG5cdFx0Y29uc3QgZWRpdFN1Ym1pdEJ0biA9ICQoJzxidXR0b24+Jylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1RdWlja2VkaXQtU3VibWl0Jylcblx0XHRcdC50ZXh0KGAke2kxOG4udHJhbnNsYXRlKGlzTmV3UGFnZSA/ICdwdWJsaXNoX3BhZ2UnIDogJ3B1Ymxpc2hfY2hhbmdlJyl9KEN0cmwrUylgKTsgLy8g5o+Q5Lqk5oyJ6ZKuXG5cdFx0Y29uc3QgcHJldmlld1N1Ym1pdEJ0biA9ICQoJzxidXR0b24+Jylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1TdWJtaXQnKVxuXHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoJ3ByZXZpZXcnKX1gKTsgLy8g6aKE6KeI5oyJ6ZKuXG5cdFx0Y29uc3QgaXNNaW5vckVkaXQgPSAkKCc8ZGl2PicpXG5cdFx0XHQuYXBwZW5kKCQoJzxpbnB1dD4nKS5hdHRyKHt0eXBlOiAnY2hlY2tib3gnLCBpZDogJ1dpa2lwbHVzLVF1aWNrZWRpdC1NaW5vckVkaXQnfSkpXG5cdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHQkKCc8bGFiZWw+Jylcblx0XHRcdFx0XHQuYXR0cignZm9yJywgJ1dpa2lwbHVzLVF1aWNrZWRpdC1NaW5vckVkaXQnKVxuXHRcdFx0XHRcdC50ZXh0KGAke2kxOG4udHJhbnNsYXRlKCdtYXJrX21pbm9yZWRpdCcpfShDdHJsK1NoaWZ0K1MpYClcblx0XHRcdClcblx0XHRcdC5jc3Moe21hcmdpbjogJzVweCA1cHggNXB4IC0zcHgnLCBkaXNwbGF5OiAnaW5saW5lJ30pO1xuXHRcdC8vIERPTeWumuS5iee7k+adn1xuXHRcdGNvbnN0IGVkaXRCb2R5ID0gJCgnPGRpdj4nKS5hcHBlbmQoXG5cdFx0XHRiYWNrQnRuLFxuXHRcdFx0anVtcEJ0bixcblx0XHRcdHByZXZpZXdCb3gsXG5cdFx0XHRpbnB1dEJveCxcblx0XHRcdHN1bW1hcnlCb3gsXG5cdFx0XHQkKCc8YnI+JyksXG5cdFx0XHRpc01pbm9yRWRpdCxcblx0XHRcdGVkaXRTdWJtaXRCdG4sXG5cdFx0XHRwcmV2aWV3U3VibWl0QnRuXG5cdFx0KTtcblx0XHR0aGlzLmNyZWF0ZURpYWxvZ0JveCh0aXRsZSwgZWRpdEJvZHksIDEwMDAsICgpID0+IHtcblx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQnKS52YWwoY29udGVudCk7XG5cdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVN1bW1hcnktSW5wdXQnKS52YWwoc3VtbWFyeSk7XG5cdFx0fSk7XG5cdFx0Ly8gQmFja1xuXHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtQmFjaycpLm9uKCdjbGljaycsIG9uQmFjayk7XG5cdFx0Ly8gUHJldmlld1xuXHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1TdWJtaXQnKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCBwcmVsb2FkQmFubmVyID0gJCgnPGRpdj4nKVxuXHRcdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUJhbm5lcicpXG5cdFx0XHRcdC50ZXh0KGAke2kxOG4udHJhbnNsYXRlKCdsb2FkaW5nX3ByZXZpZXcnKX1gKTtcblx0XHRcdGNvbnN0IHdpa2lUZXh0ID0gJCgnI1dpa2lwbHVzLVF1aWNrZWRpdCcpLnZhbCgpO1xuXHRcdFx0JCh0aGlzKS5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuXHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmZhZGVPdXQoMTAwLCAoKSA9PiB7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5odG1sKCcnKS5hcHBlbmQocHJlbG9hZEJhbm5lcik7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5mYWRlSW4oMTAwKTtcblx0XHRcdH0pO1xuXHRcdFx0JCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogc2VsZi5zY3JvbGxUb3B9LCAyMDApOyAvL+i/lOWbnumhtumDqFxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgb25QYXJzZSh3aWtpVGV4dCk7XG5cdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0JykuZmFkZU91dCgnMTAwJywgKCkgPT4ge1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0JykuaHRtbChgPGhyPjxkaXYgY2xhc3M9XCJtdy1ib2R5LWNvbnRlbnRcIj4ke3Jlc3VsdH08L2Rpdj48aHI+YCk7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5mYWRlSW4oJzEwMCcpO1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctU3VibWl0JykucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHQvLyBFZGl0XG5cdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1TdWJtaXQnKS5vbignY2xpY2snLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCB0aW1lciA9IERhdGUubm93KCk7XG5cdFx0XHRjb25zdCBlZGl0QmFubmVyID0gJCgnPGRpdj4nKVxuXHRcdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUJhbm5lcicpXG5cdFx0XHRcdC50ZXh0KGAke2kxOG4udHJhbnNsYXRlKCdzdWJtaXR0aW5nX2VkaXQnKX1gKTtcblx0XHRcdGNvbnN0IHBheWxvYWQgPSB7XG5cdFx0XHRcdHN1bW1hcnk6ICQoJyNXaWtpcGx1cy1RdWlja2VkaXQtU3VtbWFyeS1JbnB1dCcpLnZhbCgpLFxuXHRcdFx0XHRjb250ZW50OiAkKCcjV2lraXBsdXMtUXVpY2tlZGl0JykudmFsKCksXG5cdFx0XHRcdGlzTWlub3JFZGl0OiAkKCcjV2lraXBsdXMtUXVpY2tlZGl0LU1pbm9yRWRpdCcpLmlzKCc6Y2hlY2tlZCcpLFxuXHRcdFx0fTtcblx0XHRcdC8vIOWHhuWkh+e8lui+kSDnpoHnlKjmjInpkq4g5omn6KGM5Yqo55S7XG5cdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVN1Ym1pdCwjV2lraXBsdXMtUXVpY2tlZGl0LCNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1TdWJtaXQnKS5hdHRyKFxuXHRcdFx0XHQnZGlzYWJsZWQnLFxuXHRcdFx0XHQnZGlzYWJsZWQnXG5cdFx0XHQpO1xuXHRcdFx0JCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogc2VsZi5zY3JvbGxUb3B9LCAyMDApO1xuXHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmZhZGVPdXQoMTAwLCAoKSA9PiB7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5odG1sKCcnKS5hcHBlbmQoZWRpdEJhbm5lcik7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5mYWRlSW4oMTAwKTtcblx0XHRcdH0pO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgb25FZGl0KHBheWxvYWQpO1xuXHRcdFx0XHRjb25zdCB1c2VUaW1lID0gRGF0ZS5ub3coKSAtIHRpbWVyO1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0Jylcblx0XHRcdFx0XHQuZmluZCgnLldpa2lwbHVzLUJhbm5lcicpXG5cdFx0XHRcdFx0LmNzcygnYmFja2dyb3VuZCcsICdyZ2JhKDYsIDIzOSwgOTIsIDAuNDQpJyk7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKVxuXHRcdFx0XHRcdC5maW5kKCcuV2lraXBsdXMtQmFubmVyJylcblx0XHRcdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZSgnZWRpdF9zdWNjZXNzJywgW3VzZVRpbWUudG9TdHJpbmcoKV0pfWApO1xuXHRcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCAod2luZG93Lm9uYmVmb3JldW5sb2FkID0gdW5kZWZpbmVkKSk7IC8v5Y+W5raI6aG16Z2i5YWz6Zet56Gu6K6kXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdGxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdFx0XHR9LCA1MDApO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0XHQkKCcuV2lraXBsdXMtQmFubmVyJykuY3NzKCdiYWNrZ3JvdW5kJywgJ3JnYmEoMjE4LCAxNDIsIDE2NywgMC42NSknKTtcblx0XHRcdFx0JCgnLldpa2lwbHVzLUJhbm5lcicpLmh0bWwoZXJyb3IubWVzc2FnZSk7XG5cdFx0XHR9IGZpbmFsbHkge1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVN1Ym1pdCwjV2lraXBsdXMtUXVpY2tlZGl0LCNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1TdWJtaXQnKS5wcm9wKFxuXHRcdFx0XHRcdCdkaXNhYmxlZCcsXG5cdFx0XHRcdFx0ZmFsc2Vcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHQvL0N0cmwrU+aPkOS6pCBDdHJsK1NoaWZ0K1PlsI/nvJbovpFcblx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LCNXaWtpcGx1cy1RdWlja2VkaXQtU3VtbWFyeS1JbnB1dCwjV2lraXBsdXMtUXVpY2tlZGl0LU1pbm9yRWRpdCcpLm9uKCdrZXlkb3duJywgKGUpID0+IHtcblx0XHRcdGlmIChlLmN0cmxLZXkgJiYgZS53aGljaCA9PT0gODMpIHtcblx0XHRcdFx0aWYgKGUuc2hpZnRLZXkpIHtcblx0XHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LU1pbm9yRWRpdCcpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1TdWJtaXQnKS50cmlnZ2VyKCdjbGljaycpO1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Ly9Fc2PpgIDlh7pcblx0XHRpZiAoZXNjRXhpdCkge1xuXHRcdFx0JChkb2N1bWVudCkub24oJ2tleWRvd24nLCAoZSkgPT4ge1xuXHRcdFx0XHRpZiAoZS53aGljaCA9PT0gMjcpIHtcblx0XHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LUJhY2snKS50cmlnZ2VyKCdjbGljaycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRoaWRlUXVpY2tFZGl0UGFuZWwoKSB7XG5cdFx0dGhpcy5xdWlja0VkaXRQYW5lbFZpc2libGUgPSBmYWxzZTtcblx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gnKS5mYWRlT3V0KCdmYXN0JywgZnVuY3Rpb24gKCkge1xuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgKHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IHVuZGVmaW5lZCkpOyAvL+WPlua2iOmhtemdouWFs+mXreehruiupFxuXHRcdFx0JCh0aGlzKS5yZW1vdmUoKTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiDmmL7npLrlv6vpgJ/ph43lrprlkJHlvLnnqpdcblx0ICpcblx0ICogQHBhcmFtIHJvb3QwXG5cdCAqIEBwYXJhbSByb290MC5vbkVkaXRcblx0ICogQHBhcmFtIHJvb3QwLm9uU3VjY2Vzc1xuXHQgKi9cblx0c2hvd1NpbXBsZVJlZGlyZWN0UGFuZWwoe29uRWRpdCA9ICgpID0+IHt9LCBvblN1Y2Nlc3MgPSAoKSA9PiB7fX0gPSB7fSkge1xuXHRcdGNvbnN0IGlucHV0ID0gJCgnPGlucHV0PicpLmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveC1JbnB1dCcpLmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVNSLVRpdGxlJyk7XG5cdFx0Y29uc3Qgc3VtbWFyeUlucHV0VGl0bGUgPSAkKCc8cD4nKS50ZXh0KGkxOG4udHJhbnNsYXRlKCdyZWRpcmVjdF9zdW1tYXJ5X2Rlc2MnKSk7XG5cdFx0Y29uc3Qgc3VtbWFyeUlucHV0ID0gJCgnPGlucHV0PicpLmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveC1JbnB1dCcpLmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVNSLVN1bW1hcnknKTtcblx0XHRjb25zdCBhcHBseUJ0biA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtQnRuJylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1TUi1BcHBseScpXG5cdFx0XHQudGV4dChpMThuLnRyYW5zbGF0ZSgnc3VibWl0JykpO1xuXHRcdGNvbnN0IGNhbmNlbEJ0biA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtQnRuJylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1TUi1DYW5jZWwnKVxuXHRcdFx0LnRleHQoaTE4bi50cmFuc2xhdGUoJ2NhbmNlbCcpKTtcblx0XHRjb25zdCBjb250aW51ZUJ0biA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtQnRuJylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1TUi1Db250aW51ZScpXG5cdFx0XHQudGV4dChpMThuLnRyYW5zbGF0ZSgnY29udGludWUnKSk7XG5cdFx0Y29uc3QgY29udGVudCA9ICQoJzxkaXY+Jylcblx0XHRcdC5hcHBlbmQoaW5wdXQpXG5cdFx0XHQuYXBwZW5kKHN1bW1hcnlJbnB1dFRpdGxlKVxuXHRcdFx0LmFwcGVuZChzdW1tYXJ5SW5wdXQpXG5cdFx0XHQuYXBwZW5kKCQoJzxocj4nKSlcblx0XHRcdC5hcHBlbmQoYXBwbHlCdG4pXG5cdFx0XHQuYXBwZW5kKGNhbmNlbEJ0bik7IC8v5ou85o6lXG5cdFx0Y29uc3QgZGlhbG9nID0gdGhpcy5jcmVhdGVEaWFsb2dCb3goaTE4bi50cmFuc2xhdGUoJ3JlZGlyZWN0X2Rlc2MnKSwgY29udGVudCwgNjAwKTtcblx0XHRhcHBseUJ0bi5vbignY2xpY2snLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCB0aXRsZSA9ICQoJyNXaWtpcGx1cy1TUi1UaXRsZScpLnZhbCgpO1xuXHRcdFx0Y29uc3Qgc3VtbWFyeSA9ICQoJyNXaWtpcGx1cy1TUi1TdW1tYXJ5JykudmFsKCk7XG5cdFx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gtQ29udGVudCcpLmh0bWwoXG5cdFx0XHRcdGA8ZGl2IGNsYXNzPVwiV2lraXBsdXMtQmFubmVyXCI+JHtpMThuLnRyYW5zbGF0ZSgnc3VibWl0dGluZ19lZGl0Jyl9PC9kaXY+YFxuXHRcdFx0KTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGF3YWl0IG9uRWRpdCh7XG5cdFx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHRmb3JjZU92ZXJ3cml0ZTogZmFsc2UsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQkKCcuV2lraXBsdXMtQmFubmVyJykudGV4dChpMThuLnRyYW5zbGF0ZSgncmVkaXJlY3Rfc2F2ZWQnKSk7XG5cdFx0XHRcdHRoaXMuaGlkZVNpbXBsZVJlZGlyZWN0UGFuZWwoZGlhbG9nKTtcblx0XHRcdFx0b25TdWNjZXNzKHt0aXRsZX0pO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0JCgnLldpa2lwbHVzLUJhbm5lcicpLmNzcygnYmFja2dyb3VuZCcsICdyZ2JhKDIxOCwgMTQyLCAxNjcsIDAuNjUpJyk7XG5cdFx0XHRcdCQoJy5XaWtpcGx1cy1CYW5uZXInKS50ZXh0KGVycm9yLm1lc3NhZ2UpO1xuXHRcdFx0XHRpZiAoZXJyb3IuY29kZSA9PT0gJ2FydGljbGVleGlzdHMnKSB7XG5cdFx0XHRcdFx0JCgnLldpa2lwbHVzLUludGVyQm94LUNvbnRlbnQnKS5hcHBlbmQoJCgnPGhyPicpKS5hcHBlbmQoY29udGludWVCdG4pLmFwcGVuZChjYW5jZWxCdG4pO1xuXHRcdFx0XHRcdGNhbmNlbEJ0bi5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLmhpZGVTaW1wbGVSZWRpcmVjdFBhbmVsKGRpYWxvZyk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0Y29udGludWVCdG4ub24oJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHRcdFx0JCgnLldpa2lwbHVzLUludGVyQm94LUNvbnRlbnQnKS5odG1sKFxuXHRcdFx0XHRcdFx0XHRgPGRpdiBjbGFzcz1cIldpa2lwbHVzLUJhbm5lclwiPiR7aTE4bi50cmFuc2xhdGUoJ3N1Ym1pdHRpbmdfZWRpdCcpfTwvZGl2PmBcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRhd2FpdCBvbkVkaXQoe1xuXHRcdFx0XHRcdFx0XHRcdHRpdGxlLFxuXHRcdFx0XHRcdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdFx0XHRcdFx0Zm9yY2VPdmVyd3JpdGU6IHRydWUsXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHQkKCcuV2lraXBsdXMtQmFubmVyJykudGV4dChpMThuLnRyYW5zbGF0ZSgncmVkaXJlY3Rfc2F2ZWQnKSk7XG5cdFx0XHRcdFx0XHRcdHRoaXMuaGlkZVNpbXBsZVJlZGlyZWN0UGFuZWwoZGlhbG9nKTtcblx0XHRcdFx0XHRcdFx0b25TdWNjZXNzKHt0aXRsZX0pO1xuXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0JCgnLldpa2lwbHVzLUJhbm5lcicpLmNzcygnYmFja2dyb3VuZCcsICdyZ2JhKDIxOCwgMTQyLCAxNjcsIDAuNjUpJyk7XG5cdFx0XHRcdFx0XHRcdCQoJy5XaWtpcGx1cy1CYW5uZXInKS50ZXh0KGVycm9yLm1lc3NhZ2UpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Y2FuY2VsQnRuLm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdHRoaXMuaGlkZVNpbXBsZVJlZGlyZWN0UGFuZWwoZGlhbG9nKTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiDpmpDol4/lv6vpgJ/ph43lrprlkJHlvLnnqpdcblx0ICpcblx0ICogQHBhcmFtIHsqfSBkaWFsb2dcblx0ICovXG5cdGhpZGVTaW1wbGVSZWRpcmVjdFBhbmVsKGRpYWxvZyA9ICQoJ2JvZHknKSkge1xuXHRcdGRpYWxvZy5maW5kKCcuV2lraXBsdXMtSW50ZXJCb3gtQ2xvc2UnKS50cmlnZ2VyKCdjbGljaycpO1xuXHR9XG5cblx0c2hvd1NldHRpbmdzUGFuZWwoe29uU3VibWl0ID0gKCkgPT4ge319ID0ge30pIHtcblx0XHRjb25zdCBpbnB1dCA9ICQoJzx0ZXh0YXJlYT4nKS5hdHRyKCdpZCcsICdXaWtpcGx1cy1TZXR0aW5nLUlucHV0JykuYXR0cigncm93cycsICcxMCcpO1xuXHRcdGNvbnN0IGFwcGx5QnRuID0gJCgnPGRpdj4nKVxuXHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveC1CdG4nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVNldHRpbmctQXBwbHknKVxuXHRcdFx0LnRleHQoaTE4bi50cmFuc2xhdGUoJ3N1Ym1pdCcpKTtcblx0XHRjb25zdCBjYW5jZWxCdG4gPSAkKCc8ZGl2PicpXG5cdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUJ0bicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtU2V0dGluZy1DYW5jZWwnKVxuXHRcdFx0LnRleHQoaTE4bi50cmFuc2xhdGUoJ2NhbmNlbCcpKTtcblx0XHRjb25zdCBjb250ZW50ID0gJCgnPGRpdj4nKS5hcHBlbmQoaW5wdXQpLmFwcGVuZCgkKCc8aHI+JykpLmFwcGVuZChhcHBseUJ0bikuYXBwZW5kKGNhbmNlbEJ0bik7IC8v5ou85o6lXG5cblx0XHRjb25zdCBkaWFsb2cgPSB0aGlzLmNyZWF0ZURpYWxvZ0JveChpMThuLnRyYW5zbGF0ZSgnd2lraXBsdXNfc2V0dGluZ3NfZGVzYycpLCBjb250ZW50LCA2MDAsICgpID0+IHtcblx0XHRcdGlmIChsb2NhbFN0b3JhZ2UuV2lraXBsdXNfU2V0dGluZ3MpIHtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVNldHRpbmctSW5wdXQnKS52YWwobG9jYWxTdG9yYWdlLldpa2lwbHVzX1NldHRpbmdzKTtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRjb25zdCBzZXR0aW5ncyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLldpa2lwbHVzX1NldHRpbmdzKTtcblx0XHRcdFx0XHQkKCcjV2lraXBsdXMtU2V0dGluZy1JbnB1dCcpLnZhbChKU09OLnN0cmluZ2lmeShzZXR0aW5ncywgbnVsbCwgMikpO1xuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHQvLyBpZ25vcmVcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVNldHRpbmctSW5wdXQnKS5hdHRyKCdwbGFjZWhvbGRlcicsIGkxOG4udHJhbnNsYXRlKCd3aWtpcGx1c19zZXR0aW5nc19wbGFjZWhvbGRlcicpKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRhcHBseUJ0bi5vbignY2xpY2snLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCBzYXZlZEJhbm5lciA9ICQoJzxkaXY+JykuYWRkQ2xhc3MoJ1dpa2lwbHVzLUJhbm5lcicpLnRleHQoaTE4bi50cmFuc2xhdGUoJ3dpa2lwbHVzX3NldHRpbmdzX3NhdmVkJykpO1xuXHRcdFx0Y29uc3Qgc2V0dGluZ3MgPSAkKCcjV2lraXBsdXMtU2V0dGluZy1JbnB1dCcpLnZhbCgpO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0b25TdWJtaXQoe3NldHRpbmdzfSk7XG5cdFx0XHRcdCQoJy5XaWtpcGx1cy1JbnRlckJveC1Db250ZW50JykuaHRtbCgnJykuYXBwZW5kKHNhdmVkQmFubmVyKTtcblx0XHRcdFx0YXdhaXQgc2xlZXAoMTUwMCk7XG5cdFx0XHRcdHRoaXMuaGlkZVNldHRpbmdzUGFuZWwoZGlhbG9nKTtcblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHROb3RpZmljYXRpb24uZXJyb3IoaTE4bi50cmFuc2xhdGUoJ3dpa2lwbHVzX3NldHRpbmdzX2dyYW1tYXJfZXJyb3InKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Y2FuY2VsQnRuLm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdHRoaXMuaGlkZVNldHRpbmdzUGFuZWwoZGlhbG9nKTtcblx0XHR9KTtcblx0fVxuXG5cdGhpZGVTZXR0aW5nc1BhbmVsKGRpYWxvZyA9ICQoJ2JvZHknKSkge1xuXHRcdGRpYWxvZy5maW5kKCcuV2lraXBsdXMtSW50ZXJCb3gtQ2xvc2UnKS50cmlnZ2VyKCdjbGljaycpO1xuXHR9XG5cblx0YmluZFByZWxvYWRFdmVudHMob25QcmVsb2FkKSB7XG5cdFx0JCgnI3RvYycpXG5cdFx0XHQuY2hpbGRyZW4oJ3VsJylcblx0XHRcdC5maW5kKCdhJylcblx0XHRcdC5lYWNoKGZ1bmN0aW9uIChpKSB7XG5cdFx0XHRcdCQodGhpcykub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHQkKHRoaXMpLm9mZignbW91c2VvdmVyJyk7XG5cdFx0XHRcdFx0b25QcmVsb2FkKHtcblx0XHRcdFx0XHRcdHNlY3Rpb25OdW1iZXI6IGkgKyAxLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBVSSgpO1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5jbGFzcyBTZXR0aW5ncyB7XG5cdGdldFNldHRpbmcoa2V5LCBvYmplY3QgPSB7fSkge1xuXHRcdGNvbnN0IHcgPSBvYmplY3Q7XG5cdFx0bGV0IHNldHRpbmdzO1xuXHRcdHRyeSB7XG5cdFx0XHRzZXR0aW5ncyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlWydXaWtpcGx1c19TZXR0aW5ncyddKTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGN1c3RvbVNldHRpbmdGdW5jdGlvbiA9IG5ldyBGdW5jdGlvbihgcmV0dXJuICR7c2V0dGluZ3Nba2V5XX1gKTtcblx0XHRcdGlmICh0eXBlb2YgY3VzdG9tU2V0dGluZ0Z1bmN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0aWYgKGN1c3RvbVNldHRpbmdGdW5jdGlvbigpKHcpID09PSB0cnVlKSB7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiBjdXN0b21TZXR0aW5nRnVuY3Rpb24oKSh3KSB8fCBzZXR0aW5nc1trZXldO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0cmV0dXJuIHNldHRpbmdzW2tleV07XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBzZXR0aW5nc1trZXldO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0bGV0IHJlc3VsdCA9IHNldHRpbmdzW2tleV07XG5cdFx0XHRcdGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKG9iamVjdCkpIHtcblx0XHRcdFx0XHRyZXN1bHQgPSByZXN1bHQucmVwbGFjZShgXFwkeyR7a2V5fX1gLCBvYmplY3Rba2V5XSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH0gY2F0Y2gge31cblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFNldHRpbmdzKCk7XG4iLCAiLyohIFdpa2lwbHVzIC0gNC4wLjExIHwgRXJpZGFudXMgU29yYSAo5aa556m66YWxKSB8IENDLUJZLVNBLTQuMCA8aHR0cHM6Ly9xd2JrLmNjL0g6Q0MtQlktU0EtNC4wPiAqL1xuI1dpa2lwbHVzLVF1aWNrZWRpdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuI1dpa2lwbHVzLVF1aWNrZWRpdC1TdW1tYXJ5LUlucHV0IHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5za2luLXZlY3RvciAjV2lraXBsdXMtUXVpY2tlZGl0LVN1bW1hcnktSW5wdXQge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4jV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctU3VibWl0LFxuI1dpa2lwbHVzLVF1aWNrZWRpdC1TdWJtaXQge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHBhZGRpbmc6IHJldmVydDtcbn1cbiNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQge1xuICBjbGVhcjogYm90aDtcbiAgbWFyZ2luOiA1cHggMDtcbn1cbi5XaWtpcGx1cy1CdG4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDNweCA1cHg7XG4gIHBhZGRpbmc6IDNweCAxZW07XG4gIHdpZHRoOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDFweCAycHggI2FhYTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uV2lraXBsdXMtQnRuIGEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjMDAwO1xuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLldpa2lwbHVzLUludGVyQm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwJTtcbiAgei1pbmRleDogMjAwO1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gIHdpZHRoOiA2MDBweDtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTYxLCAxNTQsIDIyMCwgMC40MSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGY5Zjc7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4uV2lraXBsdXMtSW50ZXJCb3gtSGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIHRvcDogLThweDtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2Y2Y7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBsaW5lLWhlaWdodDogMnJlbTtcbiAgY3Vyc29yOiBtb3ZlO1xufVxuLldpa2lwbHVzLUludGVyQm94LUlucHV0IHtcbiAgbWFyZ2luOiAyMHB4O1xuICB3aWR0aDogNjAlO1xufVxuLldpa2lwbHVzLUludGVyQm94LUJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IGF1dG8gM3B4O1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uV2lraXBsdXMtSW50ZXJCb3gtQnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcbn1cbi5XaWtpcGx1cy1JbnRlckJveC1DbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiAzcHggN3B4O1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLldpa2lwbHVzLUludGVyQm94IGxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xufVxuLldpa2lwbHVzLUludGVyQm94IHRhYmxlLmRpZmYge1xuICB0YWJsZS1sYXlvdXQ6IGF1dG87XG59XG4uV2lraXBsdXMtSW50ZXJCb3ggdGFibGUuZGlmZiAuZGlmZi1hZGRlZGxpbmUsXG4uV2lraXBsdXMtSW50ZXJCb3ggdGFibGUuZGlmZiAuZGlmZi1kZWxldGVkbGluZSxcbi5XaWtpcGx1cy1JbnRlckJveCB0YWJsZS5kaWZmIC5kaWZmLWxpbmVubyB7XG4gIHdpZHRoOiA1MCU7XG59XG4uV2lraXBsdXMtSW50ZXJCb3ggdGFibGUuZGlmZiAuZGlmZi1tYXJrZXIge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLldpa2lwbHVzLUJhbm5lciB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTBweCA1cHg7XG4gIG1pbi1oZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTkzLCAyMjIsIDIxNCwgMC41MSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnRzLXNhbnMsIHNhbnMtc2VyaWYpO1xufVxuLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogM3B4IDVweDtcbiAgcGFkZGluZzogMCA1cHg7XG4gIHdpZHRoOiBhdXRvO1xuICBib3gtc2hhZG93OiAwIDNweCAzcHggI2FhYTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2Ugc3BhbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAzcHggYXV0byAzcHggM3B4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnRzLXNhbnMsIHNhbnMtc2VyaWYpO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2Utc3VjY2VzcyB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzhkZGE5MztcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDhhMDA7XG59XG4uTW9lTm90aWZpY2F0aW9uLW5vdGljZS13YXJuaW5nIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZmZkZjAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0YmQwMDtcbn1cbi5Nb2VOb3RpZmljYXRpb24tbm90aWNlLXdhcm5pbmcgc3BhbiB7XG4gIGNvbG9yOiAjMDAwO1xufVxuLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2UtZXJyb3Ige1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNlNzE3MTc7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjAwZTA2O1xufVxuI01vZU5vdGlmaWNhdGlvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAzMHB4O1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA3MTM7XG4gIG1pbi13aWR0aDogMjAlO1xufVxuIiwgIi8qKlxuICogV2lraXBsdXNcbiAqIEVyaWRhbnVzIFNvcmEgPHNvcmFAc291bmQubW9lPlxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi9jb3JlL3BhZ2UnO1xuaW1wb3J0IFVJIGZyb20gJy4vY29yZS91aSc7XG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gJy4vY29yZS9ub3RpZmljYXRpb24nO1xuaW1wb3J0IFdpa2kgZnJvbSAnLi9zZXJ2aWNlcy93aWtpJztcbmltcG9ydCBTZXR0aW5ncyBmcm9tICcuL3V0aWxzL3NldHRpbmdzJztcbmltcG9ydCBMb2cgZnJvbSAnLi91dGlscy9sb2cnO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgaTE4biBmcm9tICcuL3V0aWxzL2kxOG4nO1xuaW1wb3J0ICcuL3dpa2lwbHVzLmxlc3MnO1xuXG4kKGFzeW5jICgpID0+IHtcblx0Y29uc3QgUGFnZXMgPSB7fTtcblx0Y29uc3QgaXNDdXJyZW50UGFnZUVtcHR5ID0gJCgnLm5vYXJ0aWNsZXRleHQnKS5sZW5ndGggPiAwICYmIENvbnN0YW50cy5hcnRpY2xlSWQgPT09IDA7XG5cblx0LyoqXG5cdCAqIEdldCBwYWdlIGluc3RhbmNlLlxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IHBhcmFtc1xuXHQgKiBAcGFyYW0ge251bWJlcn0gcGFyYW1zLnJldmlzaW9uSWQg6aG16Z2i5L+u6K6i54mI5pys5Y+3XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMudGl0bGUg6aG16Z2i5qCH6aKYXG5cdCAqL1xuXHRjb25zdCBnZXRQYWdlID0gYXN5bmMgKHtyZXZpc2lvbklkLCB0aXRsZX0pID0+IHtcblx0XHRpZiAoUGFnZXNbcmV2aXNpb25JZF0pIHtcblx0XHRcdHJldHVybiBQYWdlc1tyZXZpc2lvbklkXTtcblx0XHR9XG5cdFx0Y29uc3QgbmV3UGFnZSA9IG5ldyBQYWdlKHtcblx0XHRcdHJldmlzaW9uSWQsXG5cdFx0XHR0aXRsZSxcblx0XHR9KTtcblx0XHRhd2FpdCBuZXdQYWdlLmluaXQoKTtcblx0XHRQYWdlc1tyZXZpc2lvbklkXSA9IG5ld1BhZ2U7XG5cdFx0cmV0dXJuIFBhZ2VzW3JldmlzaW9uSWRdO1xuXHR9O1xuXG5cdExvZy5pbmZvKGBXaWtpcGx1cyBub3cgbG9hZGluZy4gVmVyc2lvbjogJHtDb25zdGFudHMudmVyc2lvbn1gKTtcblxuXHRpZiAoIXdpbmRvdy5tdykge1xuXHRcdGNvbnNvbGUubG9nKCdNZWRpYXdpa2kgSmF2YVNjcmlwdCBub3QgbG9hZGVkIG9yIG5vdCBhIE1lZGlhd2lraSB3ZWJzaXRlLicpO1xuXHRcdHJldHVybjtcblx0fVxuXHRpZiAoIUNvbnN0YW50cy51c2VyR3JvdXBzLmluY2x1ZGVzKCdhdXRvY29uZmlybWVkJykgJiYgIUNvbnN0YW50cy51c2VyR3JvdXBzLmluY2x1ZGVzKCdjb25maXJtZWQnKSkge1xuXHRcdE5vdGlmaWNhdGlvbi5lcnJvcihpMThuLnRyYW5zbGF0ZSgnbm90X2F1dG9jb25maXJtZWRfdXNlcicpKTtcblx0XHRMb2cuaW5mbyhpMThuLnRyYW5zbGF0ZSgnbm90X2F1dG9jb25maXJtZWRfdXNlcicpKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoIUNvbnN0YW50cy5pc0FydGljbGUgfHwgQ29uc3RhbnRzLmFjdGlvbiAhPT0gJ3ZpZXcnKSB7XG5cdFx0TG9nLmluZm8oJ05vdCBhbiBlZGl0YWJsZSBwYWdlLiBTdG9wIGluaXRpYWxpemF0aW9uLicpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIEluaXRpYWxpemUgY3VycmVudCBwYWdlIOm7mOiupOWIneWni+WMluW9k+WJjemhtemdolxuXHR3aW5kb3cuX1dpa2lwbHVzUGFnZXMgPSBQYWdlcztcblx0Y29uc3QgY3VycmVudFBhZ2VOYW1lID0gQ29uc3RhbnRzLmN1cnJlbnRQYWdlTmFtZTtcblx0Y29uc3QgcmV2aXNpb25JZCA9IENvbnN0YW50cy5yZXZpc2lvbklkO1xuXHRjb25zdCBjdXJyZW50UGFnZSA9IGF3YWl0IGdldFBhZ2Uoe1xuXHRcdHJldmlzaW9uSWQsXG5cdFx0dGl0bGU6IGN1cnJlbnRQYWdlTmFtZSxcblx0fSk7XG5cblx0Y29uc3QgaGFuZGxlUXVpY2tFZGl0QnV0dG9uQ2xpY2tlZCA9IGFzeW5jICh7c2VjdGlvbk51bWJlciwgc2VjdGlvbk5hbWUsIHRhcmdldFBhZ2VOYW1lfSA9IHt9KSA9PiB7XG5cdFx0Y29uc3QgaXNPdGhlclBhZ2UgPSB0YXJnZXRQYWdlTmFtZSAhPT0gY3VycmVudFBhZ2VOYW1lO1xuXHRcdGlmIChpc090aGVyUGFnZSAmJiBDb25zdGFudHMubGF0ZXN0UmV2aXNpb25JZCAhPT0gQ29uc3RhbnRzLnJldmlzaW9uSWQpIHtcblx0XHRcdC8vIOWcqOWOhuWPsueJiOacrOe8lui+keWFtuS7lumhtemdouaciemXrumimCDmmoLml7bkuI3mlK/mjIFcblx0XHRcdExvZy5lcnJvcignY3Jvc3NfcGFnZV9oaXN0b3J5X3JldmlzaW9uX2VkaXRfd2FybmluZycpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCByZXZpc2lvbklkID0gaXNPdGhlclBhZ2UgPyBhd2FpdCBXaWtpLmdldExhdGVzdFJldmlzaW9uSWRGb3JQYWdlKHRhcmdldFBhZ2VOYW1lKSA6IENvbnN0YW50cy5yZXZpc2lvbklkO1xuXG5cdFx0Y29uc3QgcGFnZSA9IGF3YWl0IGdldFBhZ2Uoe3JldmlzaW9uSWQsIHRpdGxlOiB0YXJnZXRQYWdlTmFtZX0pO1xuXHRcdGNvbnN0IGN1c3RvbVN1bW1hcnkgPSBTZXR0aW5ncy5nZXRTZXR0aW5nKCdkZWZhdWx0U3VtbWFyeScsIHtcblx0XHRcdHNlY3Rpb25OYW1lLFxuXHRcdFx0c2VjdGlvbk51bWJlcixcblx0XHRcdHNlY3Rpb25UYXJnZXROYW1lOiB0YXJnZXRQYWdlTmFtZSxcblx0XHR9KTtcblx0XHRjb25zdCBzdW1tYXJ5ID1cblx0XHRcdGN1c3RvbVN1bW1hcnkgfHxcblx0XHRcdChzZWN0aW9uTmFtZVxuXHRcdFx0XHQ/IGAvKiAke3NlY3Rpb25OYW1lfSAqLyAke2kxOG4udHJhbnNsYXRlKCdkZWZhdWx0X3N1bW1hcnlfc3VmZml4Jyl9YFxuXHRcdFx0XHQ6IGkxOG4udHJhbnNsYXRlKCdkZWZhdWx0X3N1bW1hcnlfc3VmZml4JykpO1xuXHRcdGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHROb3RpZmljYXRpb24uc3VjY2VzcyhpMThuLnRyYW5zbGF0ZSgnbG9hZGluZycpKTtcblx0XHR9LCAyMDApO1xuXHRcdGNvbnN0IHNlY3Rpb25Db250ZW50ID0gYXdhaXQgcGFnZS5nZXRXaWtpVGV4dCh7XG5cdFx0XHRzZWN0aW9uOiBzZWN0aW9uTnVtYmVyLFxuXHRcdH0pO1xuXHRcdGNvbnN0IGlzRWRpdEhpc3RvcnlSZXZpc2lvbiA9ICFpc090aGVyUGFnZSAmJiBDb25zdGFudHMubGF0ZXN0UmV2aXNpb25JZCAhPT0gQ29uc3RhbnRzLnJldmlzaW9uSWQ7XG5cdFx0Y29uc3QgZXNjVG9FeGl0ID1cblx0XHRcdFNldHRpbmdzLmdldFNldHRpbmcoJ2VzY190b19leGl0X3F1aWNrZWRpdCcpID09PSB0cnVlIHx8IC8vIOWFvOWuueiAgeiuvue9rmtleVxuXHRcdFx0U2V0dGluZ3MuZ2V0U2V0dGluZygnZXNjX3RvX2V4aXRfcXVpY2tlZGl0JykgPT09ICd0cnVlJyB8fFxuXHRcdFx0U2V0dGluZ3MuZ2V0U2V0dGluZygnZXNjVG9FeGl0UXVpY2tFZGl0JykgPT09IHRydWUgfHxcblx0XHRcdFNldHRpbmdzLmdldFNldHRpbmcoJ2VzY1RvRXhpdFF1aWNrRWRpdCcpID09PSAndHJ1ZSc7XG5cdFx0Y29uc3QgY3VzdG9tRWRpdFRhZ3MgPSBTZXR0aW5ncy5nZXRTZXR0aW5nKCdjdXN0b21fZWRpdF90YWdzJyk7XG5cdFx0Y29uc3QgZGVmYXVsdEVkaXRUYWdzID0gW107XG5cdFx0Y29uc3QgZWRpdFRhZ3MgPSBjdXN0b21FZGl0VGFncz8ubGVuZ3RoID8gY3VzdG9tRWRpdFRhZ3MgOiBkZWZhdWx0RWRpdFRhZ3M7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVyKTtcblx0XHROb3RpZmljYXRpb24uZW1wdHkoKTtcblxuXHRcdGlmIChpc0VkaXRIaXN0b3J5UmV2aXNpb24pIHtcblx0XHRcdE5vdGlmaWNhdGlvbi53YXJuaW5nKGkxOG4udHJhbnNsYXRlKCdoaXN0b3J5X2VkaXRfd2FybmluZycpKTtcblx0XHR9XG5cblx0XHRjb25zdCBzaG91bGRTaG93Q3JlYXRlUGFnZVRpcCA9IGlzT3RoZXJQYWdlID8gIXJldmlzaW9uSWQgOiBpc0N1cnJlbnRQYWdlRW1wdHk7XG5cblx0XHRVSS5zaG93UXVpY2tFZGl0UGFuZWwoe1xuXHRcdFx0dGl0bGU6IGAke2kxOG4udHJhbnNsYXRlKCdxdWlja2VkaXRfdG9wYnRuJyl9JHtcblx0XHRcdFx0aXNFZGl0SGlzdG9yeVJldmlzaW9uID8gaTE4bi50cmFuc2xhdGUoJ2hpc3RvcnlfZWRpdF93YXJuaW5nJykgOiAnJ1xuXHRcdFx0fWAsXG5cdFx0XHRjb250ZW50OiBzaG91bGRTaG93Q3JlYXRlUGFnZVRpcCA/IGkxOG4udHJhbnNsYXRlKCdjcmVhdGVfcGFnZV90aXAnKSA6IHNlY3Rpb25Db250ZW50LFxuXHRcdFx0c3VtbWFyeSxcblx0XHRcdG9uQmFjazogVUkuaGlkZVF1aWNrRWRpdFBhbmVsLFxuXHRcdFx0b25QYXJzZTogKHdpa2lUZXh0KSA9PiB7XG5cdFx0XHRcdHJldHVybiBwYWdlLnBhcnNlV2lraVRleHQod2lraVRleHQpO1xuXHRcdFx0fSxcblx0XHRcdG9uRWRpdDogYXN5bmMgKHtjb250ZW50LCBzdW1tYXJ5LCBpc01pbm9yRWRpdH0pID0+IHtcblx0XHRcdFx0Y29uc3QgZWRpdFBheWxvYWQgPSB7XG5cdFx0XHRcdFx0Y29udGVudCxcblx0XHRcdFx0XHRjb25maWc6IHtcblx0XHRcdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdFx0XHQuLi4oc2VjdGlvbk51bWJlciA9PT0gLTEgPyB7fSA6IHtzZWN0aW9uOiBzZWN0aW9uTnVtYmVyfSksXG5cdFx0XHRcdFx0XHQuLi4oZWRpdFRhZ3MubGVuZ3RoID8ge3RhZ3M6IGVkaXRUYWdzLmpvaW4oJ3wnKX0gOiB7fSksXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fTtcblx0XHRcdFx0aWYgKGlzTWlub3JFZGl0KSB7XG5cdFx0XHRcdFx0ZWRpdFBheWxvYWQuY29uZmlnLm1pbm9yID0gJ3RydWUnO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGVkaXRQYXlsb2FkLmNvbmZpZy5ub3RtaW5vciA9ICd0cnVlJztcblx0XHRcdFx0fVxuXHRcdFx0XHRhd2FpdCBwYWdlLmVkaXQoZWRpdFBheWxvYWQpO1xuXHRcdFx0fSxcblx0XHRcdGVzY0V4aXQ6IGVzY1RvRXhpdCxcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBoYW5kbGVTaW1wbGVSZWRpcmVjdEJ1dHRvbkNsaWNrZWQgPSBhc3luYyAoKSA9PiB7XG5cdFx0VUkuc2hvd1NpbXBsZVJlZGlyZWN0UGFuZWwoe1xuXHRcdFx0b25FZGl0OiBhc3luYyAoe3RpdGxlLCBzdW1tYXJ5LCBmb3JjZU92ZXJ3cml0ZSA9IGZhbHNlfSkgPT4ge1xuXHRcdFx0XHRjb25zdCBwYWdlID0gYXdhaXQgZ2V0UGFnZSh7dGl0bGV9KTtcblx0XHRcdFx0Y29uc3QgY3VycmVudFBhZ2VOYW1lID0gQ29uc3RhbnRzLmN1cnJlbnRQYWdlTmFtZTtcblx0XHRcdFx0Y29uc3QgY29udGVudG1vZGVsID0gcGFnZS5jb250ZW50bW9kZWw7XG5cdFx0XHRcdGlmIChzdW1tYXJ5ID09ICcnKSB7XG5cdFx0XHRcdFx0c3VtbWFyeSA9IGkxOG4udHJhbnNsYXRlKCdyZWRpcmVjdF9mcm9tX3N1bW1hcnknLCBbdGl0bGUsIGN1cnJlbnRQYWdlTmFtZV0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGNvbnRlbnQgPSAoKCkgPT4ge1xuXHRcdFx0XHRcdGxldCBjb250ZW50O1xuXHRcdFx0XHRcdHN3aXRjaCAoY29udGVudG1vZGVsKSB7XG5cdFx0XHRcdFx0XHRjYXNlICdqYXZhc2NyaXB0Jzpcblx0XHRcdFx0XHRcdFx0Y29udGVudCA9IGAvKiAjUkVESVJFQ1QgKi9tdy5sb2FkZXIubG9hZChcIiR7bG9jYXRpb24ucHJvdG9jb2x9Ly8ke1xuXHRcdFx0XHRcdFx0XHRcdGxvY2F0aW9uLmhvc3Rcblx0XHRcdFx0XHRcdFx0fSR7Q29uc3RhbnRzLnNjcmlwdFBhdGh9L2luZGV4LnBocD90aXRsZT0ke213LnV0aWwud2lraVVybGVuY29kZShcblx0XHRcdFx0XHRcdFx0XHRjdXJyZW50UGFnZU5hbWVcblx0XHRcdFx0XHRcdFx0KX0mYWN0aW9uPXJhdyZjdHlwZT10ZXh0L2phdmFzY3JpcHRcIik7YDtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlICdjc3MnOlxuXHRcdFx0XHRcdFx0XHRjb250ZW50ID0gYC8qICNSRURJUkVDVCAqL0BpbXBvcnQgdXJsKCR7bG9jYXRpb24ucHJvdG9jb2x9Ly8ke1xuXHRcdFx0XHRcdFx0XHRcdGxvY2F0aW9uLmhvc3Rcblx0XHRcdFx0XHRcdFx0fSR7Q29uc3RhbnRzLnNjcmlwdFBhdGh9L2luZGV4LnBocD90aXRsZT0ke213LnV0aWwud2lraVVybGVuY29kZShcblx0XHRcdFx0XHRcdFx0XHRjdXJyZW50UGFnZU5hbWVcblx0XHRcdFx0XHRcdFx0KX0mYWN0aW9uPXJhdyZjdHlwZT10ZXh0L2Nzcyk7YDtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlICdTY3JpYnVudG8nOlxuXHRcdFx0XHRcdFx0XHRjb250ZW50ID0gYHJldHVybiByZXF1aXJlIFtbJHtjdXJyZW50UGFnZU5hbWV9XV1gO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgJ3dpa2l0ZXh0Jzpcblx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQgPSBgI1JFRElSRUNUIFtbJHtjdXJyZW50UGFnZU5hbWV9XV1gO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHRcdH0pKCk7XG5cdFx0XHRcdGNvbnN0IHBheWxvYWQgPSB7XG5cdFx0XHRcdFx0Y29udGVudDogY29udGVudCxcblx0XHRcdFx0XHRjb25maWc6IHtcblx0XHRcdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fTtcblx0XHRcdFx0aWYgKCFmb3JjZU92ZXJ3cml0ZSkge1xuXHRcdFx0XHRcdHBheWxvYWQuY29uZmlnLmNyZWF0ZW9ubHkgPSAndHJ1ZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0YXdhaXQgcGFnZS5lZGl0KHBheWxvYWQpO1xuXHRcdFx0fSxcblx0XHRcdG9uU3VjY2VzczogKHt0aXRsZX0pID0+IHtcblx0XHRcdFx0bG9jYXRpb24uaHJlZiA9IENvbnN0YW50cy5hcnRpY2xlUGF0aC5yZXBsYWNlKC9cXCQxL2dpLCB0aXRsZSk7XG5cdFx0XHR9LFxuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZVNldHRpbmdzQnV0dG9uQ2xpY2tlZCA9IGFzeW5jICgpID0+IHtcblx0XHRVSS5zaG93U2V0dGluZ3NQYW5lbCh7XG5cdFx0XHRvblN1Ym1pdDogKHtzZXR0aW5nc30pID0+IHtcblx0XHRcdFx0SlNPTi5wYXJzZShzZXR0aW5ncyk7XG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdXaWtpcGx1c19TZXR0aW5ncycsIHNldHRpbmdzKTtcblx0XHRcdH0sXG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlUHJlbG9hZCA9IGFzeW5jICh7c2VjdGlvbk51bWJlcn0pID0+IHtcblx0XHRhd2FpdCBjdXJyZW50UGFnZS5nZXRXaWtpVGV4dCh7XG5cdFx0XHRzZWN0aW9uOiBzZWN0aW9uTnVtYmVyLFxuXHRcdH0pO1xuXHR9O1xuXG5cdFVJLmluc2VydFRvcFF1aWNrRWRpdEVudHJ5KGhhbmRsZVF1aWNrRWRpdEJ1dHRvbkNsaWNrZWQpO1xuXHRVSS5pbnNlcnRTZWN0aW9uUXVpY2tFZGl0RW50cmllcyhoYW5kbGVRdWlja0VkaXRCdXR0b25DbGlja2VkKTtcblx0VUkuaW5zZXJ0TGlua0VkaXRFbnRyaWVzKGhhbmRsZVF1aWNrRWRpdEJ1dHRvbkNsaWNrZWQpO1xuXHRVSS5pbnNlcnRTaW1wbGVSZWRpcmVjdEJ1dHRvbihoYW5kbGVTaW1wbGVSZWRpcmVjdEJ1dHRvbkNsaWNrZWQpO1xuXHRVSS5pbnNlcnRTZXR0aW5nc1BhbmVsQnV0dG9uKGhhbmRsZVNldHRpbmdzQnV0dG9uQ2xpY2tlZCk7XG5cdFVJLmJpbmRQcmVsb2FkRXZlbnRzKGhhbmRsZVByZWxvYWQpO1xufSk7XG5cbmV4cG9ydCB7fTtcbiIsICJpbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQkKHdpbmRvdykub24oJ3Jlc2l6ZScsICgpOiB2b2lkID0+IHtcblx0XHRjb25zdCB3aW5kb3dXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuXHRcdGNvbnN0ICR3aWtpcGx1c0ludGVyYm94ID0gJGJvZHkuZmluZCgnLldpa2lwbHVzLUludGVyQm94Jyk7XG5cdFx0aWYgKCR3aWtpcGx1c0ludGVyYm94KSB7XG5cdFx0XHQkd2lraXBsdXNJbnRlcmJveC5jc3MoJ21heC13aWR0aCcsIGBjYWxjKCR7d2luZG93V2lkdGh9cHggLSAyZW0pYCk7XG5cdFx0fVxuXHR9KTtcbn0pO1xuIiwgImltcG9ydCAnLi9XaWtpcGx1cy5sZXNzJztcblxuKGZ1bmN0aW9uIFdpa2lwbHVzKCk6IHZvaWQge1xuXHRjb25zdCB7d2dBY3Rpb24sIHdnSXNBcnRpY2xlfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKHdnQWN0aW9uICE9PSAndmlldycgfHwgIXdnSXNBcnRpY2xlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgbG9hZGVyID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdGNvbnN0IHsndmlzdWFsZWRpdG9yLWVuYWJsZSc6IGlzVmVFbmFibGV9ID0gbXcudXNlci5vcHRpb25zLmdldCgpIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuXG5cdFx0Lyogc2VlIDxodHRwczovL2dpdGh1Yi5jb20vV2lraXBsdXMvV2lraXBsdXMvaXNzdWVzLzY1PiAqL1xuXHRcdGlmIChpc1ZlRW5hYmxlKSB7XG5cdFx0XHRhd2FpdCBtdy5sb2FkZXIudXNpbmcoJ2V4dC52aXN1YWxFZGl0b3IuY29yZScpO1xuXHRcdH1cblxuXHRcdGF3YWl0IGltcG9ydCgnLi9tb2R1bGVzL2luZGV4Jyk7XG5cdFx0YXdhaXQgaW1wb3J0KCcuL3Jlc2l6ZScpO1xuXHR9O1xuXG5cdHZvaWQgbG9hZGVyKCk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUE7QUFBTixJQXNDT0M7QUF0Q1AsSUFBQUMsaUJBQUFDLE1BQUE7RUFBQSw0Q0FBQTtBQUFBO0FBQU1ILGdCQUFOLE1BQWdCO01BQ2ZJLFVBQVU7TUFDVixJQUFJQyxZQUFZO0FBQ2YsZUFBT0MsT0FBT0MsR0FBR0MsT0FBT0MsSUFBSSxhQUFhO01BQzFDO01BQ0EsSUFBSUMsa0JBQWtCO0FBQ3JCLGVBQU9KLE9BQU9DLEdBQUdDLE9BQU9DLElBQUksWUFBWSxFQUFFRSxRQUFRLE1BQU0sR0FBRztNQUM1RDtNQUNBLElBQUlDLFlBQVk7QUFDZixlQUFPTixPQUFPQyxHQUFHQyxPQUFPQyxJQUFJLGFBQWE7TUFDMUM7TUFDQSxJQUFJSSxhQUFhO0FBQ2hCLGVBQU9QLE9BQU9DLEdBQUdDLE9BQU9DLElBQUksY0FBYztNQUMzQztNQUNBLElBQUlLLG1CQUFtQjtBQUN0QixlQUFPUixPQUFPQyxHQUFHQyxPQUFPQyxJQUFJLGlCQUFpQjtNQUM5QztNQUNBLElBQUlNLGNBQWM7QUFDakIsZUFBT1QsT0FBT0MsR0FBR0MsT0FBT0MsSUFBSSxlQUFlO01BQzVDO01BQ0EsSUFBSU8sYUFBYTtBQUNoQixlQUFPVixPQUFPQyxHQUFHQyxPQUFPQyxJQUFJLGNBQWM7TUFDM0M7TUFDQSxJQUFJUSxTQUFTO0FBQ1osZUFBT1gsT0FBT0MsR0FBR0Ms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QztBQUVBLFlBQU1KLFFBQUFnRCxRQUFBLEVBQUEyTCxLQUFBLE9BQUFqRCxhQUFBLEdBQUFELGdCQUFBO0FBQ04sWUFBTXpMLFFBQUFnRCxRQUFBLEVBQUEyTCxLQUFBLE9BQUFILFlBQUEsR0FBQUYsZUFBQTtJQUNQLENBQUE7QUFBQSxXQUFBLFNBVk1uTyxVQUFBO0FBQUEsYUFBQStPLE9BQUFqUixNQUFBLE1BQUFDLFNBQUE7SUFBQTtFQUFBLEdBQUE7QUFZTixPQUFLaUMsT0FBTztBQUNiLEdBQUc7IiwKICAibmFtZXMiOiBbIkNvbnN0YW50cyIsICJjb25zdGFudHNfZGVmYXVsdCIsICJpbml0X2NvbnN0YW50cyIsICJfX2VzbSIsICJ2ZXJzaW9uIiwgImlzQXJ0aWNsZSIsICJ3aW5kb3ciLCAibXciLCAiY29uZmlnIiwgImdldCIsICJjdXJyZW50UGFnZU5hbWUiLCAicmVwbGFjZSIsICJhcnRpY2xlSWQiLCAicmV2aXNpb25JZCIsICJsYXRlc3RSZXZpc2lvbklkIiwgImFydGljbGVQYXRoIiwgInNjcmlwdFBhdGgiLCAiYWN0aW9uIiwgInNraW4iLCAidXNlckdyb3VwcyIsICJ3aWtpSWQiLCAidXNlckFnZW50IiwgImNvbmNhdCIsICJSZXF1ZXN0cyIsICJyZXF1ZXN0c19kZWZhdWx0IiwgImluaXRfcmVxdWVzdHMiLCAiYmFzZSIsICJsb2NhdGlvbiIsICJwcm90b2NvbCIsICJob3N0IiwgInF1ZXJ5IiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInVybCIsICJVUkwiLCAiX2kiLCAiX09iamVjdCRrZXlzIiwgIk9iamVjdCIsICJrZXlzIiwgImxlbmd0aCIsICJrZXkiLCAic2VhcmNoUGFyYW1zIiwgImFwcGVuZCIsICJyZXNwb25zZSIsICJmZXRjaCIsICJjcmVkZW50aWFscyIsICJoZWFkZXJzIiwgImpzb24iLCAicG9zdCIsICJwYXlsb2FkIiwgImZvcm0iLCAiRm9ybURhdGEiLCAiX2kyIiwgIl9PYmplY3QkZW50cmllcyIsICJlbnRyaWVzIiwgInZhbHVlIiwgIm1ldGhvZCIsICJib2R5IiwgIkkxOG4iLCAiaTE4bl9kZWZhdWx0IiwgImluaXRfaTE4biIsICJsYW5ndWFnZSIsICJpMThuRGF0YSIsICJzZXNzaW9uVXBkYXRlTG9nIiwgImNvbnN0cnVjdG9yIiwgIkpTT04iLCAicGFyc2UiLCAibG9jYWxTdG9yYWdlIiwgIm5hdmlnYXRvciIsICJ0b0xvd2VyQ2FzZSIsICJicm93c2VyTGFuZ3VhZ2UiLCAicmF3IiwgInNlc3Npb25TdG9yYWdlIiwgImdldEl0ZW0iLCAiaTE4bkNhY2hlIiwgInNldEl0ZW0iLCAidHJhbnNsYXRlIiwgInBsYWNlaG9sZGVycyIsICJyZXN1bHQiLCAibG9hZExhbmd1YWdlIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJpbmRleCIsICJwbGFjZWhvbGRlciIsICJlcnIiLCAiZSIsICJmIiwgIl90aGlzIiwgImluY2x1ZGVzIiwgIm5vd1ZlcnNpb24iLCAicHVzaCIsICJfX3ZlcnNpb24iLCAiY29uc29sZSIsICJpbmZvIiwgInN0cmluZ2lmeSIsICJTdHJpbmciLCAiV2lraXBsdXNFcnJvciIsICJMb2ciLCAibG9nX2RlZmF1bHQiLCAiaW5pdF9sb2ciLCAiRXJyb3IiLCAibWVzc2FnZSIsICJjb2RlIiwgImRlYnVnIiwgImVycm9yIiwgImVycm9yQ29kZSIsICJwYXlsb2FkcyIsICJ0ZW1wbGF0ZSIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJpIiwgInYiLCAiUmVnRXhwIiwgIldpa2kiLCAid2lraV9kZWZhdWx0IiwgImluaXRfd2lraSIsICJwYWdlSW5mb0NhY2hlIiwgImdldEVkaXRUb2tlbiIsICJtZXRhIiwgImZvcm1hdCIsICJ0b2tlbnMiLCAiY3NyZnRva2VuIiwgImdldFBhZ2VJbmZvIiwgIl94IiwgIl90aGlzMiIsICJ0aXRsZSIsICJwYXJhbXMiLCAicHJvcCIsICJydnByb3AiLCAicmV2aWRzIiwgInRpbWVzdGFtcCIsICJyZXZpZCIsICJjb250ZW50bW9kZWwiLCAidGl0bGVzIiwgInBhZ2VzIiwgInBhZ2VJbmZvIiwgInJldmlzaW9ucyIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZ2V0V2lraVRleHQiLCAiX3gyIiwgInNlY3Rpb24iLCAicnZzZWN0aW9uIiwgInBhcnNlV2lraVRleHQiLCAiX3gzIiwgIndpa2l0ZXh0IiwgInRleHQiLCAicHN0IiwgImVkaXQiLCAiY29udGVudCIsICJlZGl0VG9rZW4iLCAiYWRkaXRpb25hbENvbmZpZyIsICJ0b2tlbiIsICJiYXNldGltZXN0YW1wIiwgIndhcm5pbmciLCAiZ2V0TGF0ZXN0UmV2aXNpb25JZEZvclBhZ2UiLCAiX3RoaXMzIiwgIlBhZ2UiLCAicGFnZV9kZWZhdWx0IiwgImluaXRfcGFnZSIsICJpbml0ZWQiLCAiaXNOZXdQYWdlIiwgInNlY3Rpb25DYWNoZSIsICJpbml0IiwgIl90aGlzNCIsICJwcm9taXNlQXJyIiwgImdldFRpbWVzdGFtcCIsICJnZXRDb250ZW50TW9kZWwiLCAiUHJvbWlzZSIsICJhbGwiLCAiX3RoaXM1IiwgImxvYWRlciIsICJ1c2luZyIsICJ1c2VyIiwgIl90aGlzNiIsICJfdGhpczciLCAiX3RoaXM4IiwgInNlYyIsICJ3aWtpVGV4dCIsICJfdGhpczkiLCAiX3RoaXMwIiwgImNyZWF0ZW9ubHkiLCAiTm90aWZpY2F0aW9uIiwgIm5vdGlmaWNhdGlvbl9kZWZhdWx0IiwgImluaXRfbm90aWZpY2F0aW9uIiwgIiQiLCAiZGlzcGxheSIsICJ0eXBlIiwgImNhbGxiYWNrIiwgImFkZENsYXNzIiwgImZpbmQiLCAibGFzdCIsICJmYWRlSW4iLCAiYmluZCIsICJjbGVhciIsICJzZWxmIiwgIm9uIiwgInNsaWRlTGVmdCIsICJzdWNjZXNzIiwgImNoaWxkcmVuIiwgImZpcnN0IiwgImZhZGVPdXQiLCAicmVtb3ZlIiwgInNldFRpbWVvdXQiLCAiZW1wdHkiLCAiZWFjaCIsICJlbGUiLCAiZGVsYXkiLCAic3BlZWQiLCAiY3NzIiwgImFuaW1hdGUiLCAibGVmdCIsICJzbGVlcCIsICJzbGVlcF9kZWZhdWx0IiwgImluaXRfc2xlZXAiLCAidGltZSIsICJyZXNvbHZlIiwgInBhcnNlUXVlcnkiLCAicmVnIiwgIm1hdGNoIiwgImV4ZWMiLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgImluaXRfaGVscGVycyIsICJVSSIsICJ1aV9kZWZhdWx0IiwgImluaXRfdWkiLCAicXVpY2tFZGl0UGFuZWxWaXNpYmxlIiwgInNjcm9sbFRvcCIsICJjcmVhdGVEaWFsb2dCb3giLCAid2lkdGgiLCAiY2xpZW50V2lkdGgiLCAiaW5uZXJXaWR0aCIsICJjbGllbnRIZWlnaHQiLCAiaW5uZXJIZWlnaHQiLCAiZGlhbG9nV2lkdGgiLCAiTWF0aCIsICJtaW4iLCAiZGlhbG9nQm94IiwgInRvcCIsICJkb2N1bWVudCIsICJodG1sIiwgInBhcmVudCIsICJhZGRFdmVudExpc3RlbmVyIiwgIm9uYmVmb3JldW5sb2FkIiwgImJpbmREcmFnZ2luZyIsICJlbGVtZW50IiwgIm1vdXNlZG93biIsICJiYXNlWCIsICJjbGllbnRYIiwgImJhc2VZIiwgImNsaWVudFkiLCAiYmFzZU9mZnNldFgiLCAib2Zmc2V0IiwgImJhc2VPZmZzZXRZIiwgImUyIiwgInVuYmluZCIsICJvZmYiLCAiYWRkRnVuY3Rpb25CdXR0b24iLCAiaWQiLCAiYnV0dG9uIiwgImF0dHIiLCAiaW5zZXJ0U2ltcGxlUmVkaXJlY3RCdXR0b24iLCAib25DbGljayIsICJpbnNlcnRTZXR0aW5nc1BhbmVsQnV0dG9uIiwgImluc2VydFRvcFF1aWNrRWRpdEVudHJ5IiwgInRvcEJ0biIsICJ0b3BCdG5MaW5rIiwgInNlY3Rpb25OdW1iZXIiLCAidGFyZ2V0UGFnZU5hbWUiLCAiYWZ0ZXIiLCAiaW5zZXJ0U2VjdGlvblF1aWNrRWRpdEVudHJpZXMiLCAic2VjdGlvbkJ0biIsICJlZGl0VVJMIiwgInNlY3Rpb25UYXJnZXROYW1lIiwgImNsb25lTm9kZSIsICJwcmV2IiwgImNsb25lIiwgInNlY3Rpb25OYW1lIiwgInRyaW0iLCAiX3NlY3Rpb25CdG4iLCAiYmVmb3JlIiwgImluc2VydExpbmtFZGl0RW50cmllcyIsICJocmVmIiwgImNsYXNzIiwgIl9wYXJhbXMkc2VjdGlvbiIsICJzaG93UXVpY2tFZGl0UGFuZWwiLCAic3VtbWFyeSIsICJvbkJhY2siLCAib25QYXJzZSIsICJvbkVkaXQiLCAiZXNjRXhpdCIsICJoaWRlUXVpY2tFZGl0UGFuZWwiLCAiYmFja0J0biIsICJqdW1wQnRuIiwgImlucHV0Qm94IiwgInByZXZpZXdCb3giLCAic3VtbWFyeUJveCIsICJlZGl0U3VibWl0QnRuIiwgInByZXZpZXdTdWJtaXRCdG4iLCAiaXNNaW5vckVkaXQiLCAibWFyZ2luIiwgImVkaXRCb2R5IiwgInZhbCIsICJwcmVsb2FkQmFubmVyIiwgInRpbWVyIiwgIkRhdGUiLCAibm93IiwgImVkaXRCYW5uZXIiLCAiaXMiLCAidXNlVGltZSIsICJ0b1N0cmluZyIsICJyZWxvYWQiLCAibG9nIiwgImN0cmxLZXkiLCAid2hpY2giLCAic2hpZnRLZXkiLCAidHJpZ2dlciIsICJwcmV2ZW50RGVmYXVsdCIsICJzdG9wUHJvcGFnYXRpb24iLCAic2hvd1NpbXBsZVJlZGlyZWN0UGFuZWwiLCAib25TdWNjZXNzIiwgIl90aGlzMSIsICJpbnB1dCIsICJzdW1tYXJ5SW5wdXRUaXRsZSIsICJzdW1tYXJ5SW5wdXQiLCAiYXBwbHlCdG4iLCAiY2FuY2VsQnRuIiwgImNvbnRpbnVlQnRuIiwgImRpYWxvZyIsICJmb3JjZU92ZXJ3cml0ZSIsICJoaWRlU2ltcGxlUmVkaXJlY3RQYW5lbCIsICJlcnJvcjIiLCAic2hvd1NldHRpbmdzUGFuZWwiLCAib25TdWJtaXQiLCAiX3RoaXMxMCIsICJXaWtpcGx1c19TZXR0aW5ncyIsICJzZXR0aW5ncyIsICJzYXZlZEJhbm5lciIsICJoaWRlU2V0dGluZ3NQYW5lbCIsICJiaW5kUHJlbG9hZEV2ZW50cyIsICJvblByZWxvYWQiLCAiU2V0dGluZ3MiLCAic2V0dGluZ3NfZGVmYXVsdCIsICJpbml0X3NldHRpbmdzIiwgImdldFNldHRpbmciLCAib2JqZWN0IiwgInciLCAiY3VzdG9tU2V0dGluZ0Z1bmN0aW9uIiwgIkZ1bmN0aW9uIiwgIl9pMyIsICJfT2JqZWN0JGtleXMyIiwgImtleTIiLCAiaW5pdF93aWtpcGx1cyIsICJtb2R1bGVzX2V4cG9ydHMiLCAiaW5pdF9tb2R1bGVzIiwgIlBhZ2VzIiwgImlzQ3VycmVudFBhZ2VFbXB0eSIsICJnZXRQYWdlIiwgIl9yZWY3IiwgInJldmlzaW9uSWQyIiwgIm5ld1BhZ2UiLCAiX3g0IiwgIl9XaWtpcGx1c1BhZ2VzIiwgImN1cnJlbnRQYWdlIiwgImhhbmRsZVF1aWNrRWRpdEJ1dHRvbkNsaWNrZWQiLCAiX3JlZjgiLCAiaXNPdGhlclBhZ2UiLCAicGFnZSIsICJjdXN0b21TdW1tYXJ5IiwgInNlY3Rpb25Db250ZW50IiwgImlzRWRpdEhpc3RvcnlSZXZpc2lvbiIsICJlc2NUb0V4aXQiLCAiY3VzdG9tRWRpdFRhZ3MiLCAiZGVmYXVsdEVkaXRUYWdzIiwgImVkaXRUYWdzIiwgImNsZWFyVGltZW91dCIsICJzaG91bGRTaG93Q3JlYXRlUGFnZVRpcCIsICJfcmVmOSIsICJzdW1tYXJ5MiIsICJlZGl0UGF5bG9hZCIsICJ0YWdzIiwgImpvaW4iLCAibWlub3IiLCAibm90bWlub3IiLCAiX3g1IiwgImhhbmRsZVNpbXBsZVJlZGlyZWN0QnV0dG9uQ2xpY2tlZCIsICJfcmVmMCIsICJfcmVmMSIsICJjdXJyZW50UGFnZU5hbWUyIiwgImNvbnRlbnQyIiwgInV0aWwiLCAid2lraVVybGVuY29kZSIsICJfeDYiLCAiaGFuZGxlU2V0dGluZ3NCdXR0b25DbGlja2VkIiwgIl9yZWYxMCIsICJoYW5kbGVQcmVsb2FkIiwgIl9yZWYxMSIsICJfeDciLCAicmVzaXplX2V4cG9ydHMiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiaW5pdF9yZXNpemUiLCAicmVxdWlyZSIsICJnZXRCb2R5IiwgInRoZW4iLCAiJGJvZHkiLCAid2luZG93V2lkdGgiLCAiJHdpa2lwbHVzSW50ZXJib3giLCAiV2lraXBsdXMiLCAid2dBY3Rpb24iLCAid2dJc0FydGljbGUiLCAiX3JlZjEyIiwgImlzVmVFbmFibGUiLCAib3B0aW9ucyJdCn0K
