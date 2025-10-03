/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title=ToolsRedirect|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-ToolsRedirect.js}
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-ToolsRedirect.css}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/ToolsRedirect}
 * @license CC-BY-SA-4.0 {@link https://youshou.wiki/wiki/H:CC-BY-SA-4.0}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title2=ToolsRedirect Messages|license2=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-ToolsRedirect-msg-zh-hans.js}
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-ToolsRedirect-msg-zh-hant.js}
  * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/ToolsRedirect/messages.js}
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

// dist/ToolsRedirect/ToolsRedirect.js
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
//! src/ToolsRedirect/ToolsRedirect.ts
var ToolsRedirect_exports = {};
__export(ToolsRedirect_exports, {
  findRedirectBySelector: () => findRedirectBySelector,
  findRedirectCallback: () => findRedirectCallback,
  setRedirectTextSuffix: () => setRedirectTextSuffix
});
module.exports = __toCommonJS(ToolsRedirect_exports);
//! src/ToolsRedirect/options.json
var apiTag = "ToolsRedirect";
var version = "2.0";
//! src/ToolsRedirect/modules/constant.ts
var SUFFIX_APPEND = 0;
var SUFFIX_REPLACE = 1;
var SUFFIX_SETDEFAULT = 2;
var VARIANTS = ["zh-hans", "zh-hant", "zh-cn", "zh-hk", "zh-mo", "zh-sg", "zh-my", "zh-tw"];
//! src/ToolsRedirect/modules/core.js
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/ToolsRedirect/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("ToolsRedirect/".concat(version));
//! src/ToolsRedirect/modules/util/fixNamespace.ts
var fixNamespace = (title) => {
  const {
    wgNamespaceIds,
    wgNamespaceNumber: wgNamespaceNumber2,
    wgPageName: wgPageName2
  } = mw.config.get();
  const nsPrefixes = [];
  let nsCanonPrefix;
  let nsPrefixPattern;
  for (var _i = 0, _Object$entries = Object.entries(wgNamespaceIds); _i < _Object$entries.length; _i++) {
    const [text, nsid] = _Object$entries[_i];
    if (nsid === wgNamespaceNumber2 && !!text) {
      nsPrefixes[nsPrefixes.length] = text;
    }
  }
  if (wgNamespaceNumber2 === 0) {
    nsCanonPrefix = "";
    nsPrefixPattern = /^/;
  } else {
    nsCanonPrefix = "".concat(wgPageName2.split(":")[0], ":");
    nsPrefixPattern = new RegExp("^(".concat(nsPrefixes.join("|"), "):"), "i");
  }
  if (wgNamespaceNumber2 === 0) {
    return title;
  } else if (nsPrefixPattern.test(title)) {
    return title.replace(nsPrefixPattern, nsCanonPrefix);
  }
  return nsCanonPrefix + title;
};
//! src/ToolsRedirect/modules/util/getMessage.ts
var getMessage = (key, ...args) => {
  const fullKey = "toolsredirect-".concat(key);
  return args.length ? mw.message(fullKey, ...args).parse() : mw.message(fullKey).plain();
};
//! src/ToolsRedirect/modules/core.js
var {
  wgNamespaceNumber,
  wgPageName
} = mw.config.get();
var IS_CATEGORY = wgNamespaceNumber === 14;
var findRedirectCallbacks = [];
var pageWithRedirectTextSuffix = {};
var redirectExcludes = {};
var findRedirectCallback = function(callback, ...args) {
  if (callback) {
    findRedirectCallbacks[findRedirectCallbacks.length] = callback;
  } else {
    findRedirectCallbacks = (0, import_ext_gadget2.generateArray)(findRedirectCallbacks, callback, ...args);
  }
  return this;
};
var findRedirectBySelector = function(selector) {
  findRedirectCallbacks[findRedirectCallbacks.length] = () => {
    return $(selector).map((_index, element) => {
      return $(element).eq(0).text().trim() || null;
    });
  };
  return this;
};
var setRedirectTextSuffix = (title, suffix, flag) => {
  let flag_set = false;
  let flag_append = false;
  flag || (flag = SUFFIX_APPEND);
  flag_set = flag === SUFFIX_REPLACE;
  title = fixNamespace(title);
  if (title in pageWithRedirectTextSuffix) {
    flag_append = flag === SUFFIX_APPEND;
  } else {
    flag_set = true;
  }
  if (flag_set) {
    pageWithRedirectTextSuffix[title] = (0, import_ext_gadget2.generateArray)(suffix);
  } else if (flag_append) {
    pageWithRedirectTextSuffix[title] = (0, import_ext_gadget2.generateArray)(pageWithRedirectTextSuffix[title], suffix);
  }
};
var ToolsRedirect = {
  tabselem: null,
  tagselem: null,
  variants: VARIANTS,
  init($body) {
    const self = this;
    const button = $("<li>").addClass("mw-list-item collapsible vector-tab-noicon").attr("id", "ca-redirect").css("cursor", "pointer").append($("<a>").attr("title", getMessage("btndesc")).text(getMessage("btntitle")));
    button.on("click", (event) => {
      event.preventDefault();
      self.dialog();
    });
    $body.find("li#ca-history").after(button);
  },
  dialog() {
    const dialog = $("<div>").attr("title", getMessage("dlgtitle")).addClass("dialog-redirect").dialog({
      bgiframe: true,
      resizable: false,
      modal: true,
      width: Math.round($(window).width() * 0.8),
      position: "center"
    });
    dialog.css("max-height", "".concat(Math.round($(window).height() * 0.8), "px"));
    this.tabselem = $("<div>").addClass("tab-redirect").appendTo(dialog);
    this.tagselem = $("<ul>").appendTo(this.tabselem);
    this.addTabs();
    this.tabselem.tabs();
  },
  addTabs() {
    for (const kname in this.tabs) {
      if (Object.hasOwn(this.tabs, kname)) {
        if (this.tabs[kname] === null) {
          this.tabs[kname] = this["_initTab".concat(kname[0].charAt(0).toUpperCase()).concat(kname.slice(1))]();
        }
        const tab = this.tabs[kname];
        this.tagselem.append(tab.tag);
        this.tabselem.append(tab.cont);
      }
    }
    this.loadView();
  },
  createTab(tabname, tabtitle, onClick) {
    const self = this;
    const tag = $("<li>").append($("<a>").attr("href", "#tab-".concat(tabname)).text(tabtitle));
    const cont = $("<div>").attr("id", "tab-".concat(tabname));
    $("a", tag).on("click", () => {
      onClick.call(self);
    });
    return {
      tag,
      cont,
      loaded: false
    };
  },
  _initTabView() {
    return this.createTab("view", getMessage("tabviewtitle"), this.loadView);
  },
  _initTabCreate() {
    return this.createTab("create", getMessage("tabcreatetitle"), this.loadCreate);
  },
  tabs: {
    view: null,
    create: null
  },
  fix(pagenames) {
    const self = this;
    $("p.desc", self.tabs.view.cont).text(getMessage("fixloading"));
    $("p[class!=desc]", self.tabs.view.cont).remove();
    self.loading(self.tabs.view.cont);
    void self.bulkEditByRegex(pagenames, /\s*\[\[.*?(#.*?)?\]\]/, " [[".concat(wgPageName, "$1]]"), getMessage("fixsummary")).then(() => {
      setTimeout(() => {
        self.loaded(self.tabs.view.cont);
        self.loadView(true);
      }, 3e3);
    });
  },
  create(pagenames) {
    const self = this;
    $("p.desc", self.tabs.create.cont).text(getMessage("createloading"));
    $("p[class!=desc]", self.tabs.create.cont).remove();
    self.loading(self.tabs.create.cont);
    void self.bulkEdit(pagenames, getMessage(IS_CATEGORY ? "createtext-category" : "createtext").replace("$1", wgPageName), getMessage("createsummary").replace("$1", wgPageName)).then(() => {
      setTimeout(() => {
        self.loaded(self.tabs.create.cont);
        self.tabs.view.loaded = false;
        self.loadCreate(true);
      }, 500);
    });
  },
  addRedirectTextSuffix(title, text) {
    if (title in pageWithRedirectTextSuffix) {
      text += "\n".concat((0, import_ext_gadget2.uniqueArray)(pageWithRedirectTextSuffix[title]).join("\n"));
    }
    return text;
  },
  bulkEdit(titles, text, summary) {
    const self = this;
    titles = titles.filter((v, i, arr) => {
      return arr.indexOf(v) === i;
    });
    return api.post({
      action: "query",
      format: "json",
      formatversion: "2",
      prop: "info",
      titles
    }).then(({
      query
    }) => {
      const deferreds = [];
      var _iterator2 = _createForOfIteratorHelper(query.pages), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          const {
            title
          } = _step2.value;
          deferreds[deferreds.length] = api.postWithToken("csrf", {
            action: "edit",
            format: "json",
            formatversion: "2",
            title,
            text: self.addRedirectTextSuffix(title, text),
            summary,
            tags: apiTag
          });
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return $.when(...deferreds);
    });
  },
  bulkEditByRegex(titles, regex, text, summary) {
    titles = titles.filter((v, i, arr) => {
      return arr.indexOf(v) === i;
    });
    return api.post({
      action: "query",
      format: "json",
      formatversion: "2",
      prop: "revisions",
      rvprop: "content",
      rvslots: "main",
      titles
    }).then(({
      query
    }) => {
      const deferreds = [];
      var _iterator3 = _createForOfIteratorHelper(query.pages), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          const page = _step3.value;
          const {
            content
          } = page.revisions[0].slots["main"];
          const newContent = content.replace(regex, text);
          deferreds[deferreds.length] = api.postWithToken("csrf", {
            action: "edit",
            format: "json",
            formatversion: "2",
            title: page.title,
            text: newContent,
            tags: apiTag,
            basetimestamp: page.revisions[0].timestamp,
            summary
          });
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      return $.when(...deferreds);
    });
  },
  loadTabCont(tabname, callback, reload) {
    const self = this;
    const tab = self.tabs[tabname];
    if (reload) {
      tab.loaded = false;
    }
    if (!tab.loaded) {
      tab.cont.html("");
      const $desc = $("<p>").addClass("desc").append($("<span>").addClass("desc-text").text(getMessage("rediloading"))).appendTo(tab.cont);
      const $text = $desc.find("> .desc-text");
      callback.apply(self).done(() => {
        $text.text(getMessage("tab".concat(tabname, "desc")));
      }).fail(() => {
        $text.text(getMessage("tab".concat(tabname, "notfound")));
      }).always(() => {
        self.addMethods($desc, [{
          href: "#refresh",
          title: getMessage("refresh"),
          click(event) {
            event.preventDefault();
            self.loadTabCont(tabname, callback, true);
          }
        }]);
      });
      tab.loaded = true;
    }
  },
  loading(container) {
    if (container.prop("tagName").toLowerCase() === "span") {
      container.addClass("mw-ajax-loader");
    } else if ($("span.mw-ajax-loader", container).length === 0) {
      $("<span>").addClass("mw-ajax-loader").appendTo(container);
    }
  },
  loaded(container) {
    if (container.prop("tagName").toLowerCase() === "span") {
      container.removeClass("mw-ajax-loader");
    } else {
      $("span.mw-ajax-loader", container).remove();
    }
  },
  selectAll(cont) {
    $("input[type=checkbox]:not(:disabled)", cont).prop("checked", true);
  },
  selectInverse(cont) {
    $("input[type=checkbox]:not(:disabled)", cont).each((_index, element) => {
      const $element = $(element);
      $element.prop("checked", !$element.prop("checked"));
    });
  },
  selectAction(cont, cb) {
    const pagenames = [];
    $("input[type=checkbox]:checked", cont).each((_index, pagename) => {
      pagenames[pagenames.length] = $(pagename).data("page-title");
    });
    if (pagenames.length > 0) {
      cb.call(this, pagenames);
    }
  },
  clickAction(cont, cb) {
    const pagename = $('input[type="checkbox"]', cont).data("page-title");
    cb.call(this, [pagename]);
  },
  buildLink({
    title,
    href,
    click,
    classname
  }) {
    const a = $("<a>").attr({
      title,
      href,
      target: "_blank",
      rel: "noopener noreferrer"
    }).text(title);
    if (click) {
      a.on("click", click);
    }
    if (classname) {
      a.addClass(classname);
    }
    return $("<span>").addClass("tools-redirect_link").append(a);
  },
  addMethods($parent, methods) {
    const self = this;
    let $container = $parent.find("> .tools-redirect_methods");
    const methodExist = ({
      href
    }) => {
      return $container.find("a[href=".concat(JSON.stringify(href), "]")).length > 0;
    };
    if ($container.length === 0) {
      $container = $("<span>").addClass("tools-redirect_methods").appendTo($parent);
    }
    var _iterator4 = _createForOfIteratorHelper(methods), _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
        const method = _step4.value;
        if (!methodExist(method)) {
          self.buildLink(method).appendTo($container);
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  },
  buildSelection(main, metd, mt, dsab) {
    const cont = $("<span>");
    const sele = $("<input>").attr("type", "checkbox").appendTo(cont);
    this.buildLink(main).appendTo(cont);
    this.addMethods(cont, metd);
    sele.data("page-title", mt);
    if (dsab) {
      sele.prop("disabled", "disabled");
    }
    return cont;
  },
  loadView(reload) {
    const $container = this.tabs.view.cont;
    this.loadTabCont("view", function() {
      return this.loadRedirect(wgPageName, $container, 0);
    }, reload);
  },
  loadCreate(reload) {
    this.loadTabCont("create", function() {
      return this.findRedirect(wgPageName);
    }, reload);
  },
  loadRedirect(pagename, container, deep, loaded) {
    this.loading(container);
    const self = this;
    const deferred = $.Deferred();
    const top = deep ? $("<dl>").appendTo(container) : container;
    if (!loaded) {
      loaded = {};
      loaded[pagename] = true;
    }
    const onClickFix = (event) => {
      const entry = $(this).parents("dd, p").first();
      event.preventDefault();
      self.clickAction(entry, this.fix);
    };
    void api.post({
      action: "query",
      format: "json",
      formatversion: "2",
      prop: "redirects",
      titles: pagename,
      rdlimit: "max"
    }).then(({
      query
    }) => {
      self.loaded(container);
      let has_redirect = false;
      const desc = $("p.desc", self.tabs.view.cont);
      const maximumRedirectDepth = 10;
      var _iterator5 = _createForOfIteratorHelper(query.pages), _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
          const page = _step5.value;
          if (page.redirects) {
            const {
              redirects
            } = page;
            var _iterator6 = _createForOfIteratorHelper(redirects), _step6;
            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
                const {
                  title
                } = _step6.value;
                const rdtitle = title;
                const ultitle = rdtitle.replace(/ /g, "_");
                const entry = (deep ? $("<dd>") : $("<p>")).appendTo(top);
                const methods = [{
                  href: mw.util.getUrl(ultitle, {
                    action: "edit"
                  }),
                  title: getMessage("rediedit")
                }];
                const isCycleRedirect = rdtitle in loaded;
                loaded[rdtitle] = true;
                if (!isCycleRedirect && deep) {
                  methods[methods.length] = {
                    href: "#fix-redirect",
                    title: getMessage("tabviewfix"),
                    click: onClickFix
                  };
                }
                const $container = self.buildSelection({
                  href: mw.util.getUrl(ultitle, {
                    redirect: "no"
                  }),
                  title: rdtitle
                }, methods, ultitle, !deep).appendTo(entry);
                if (isCycleRedirect) {
                  $container.append('<span class="error">'.concat(getMessage("errcycleredirect"), "</span>"));
                } else if (deep < maximumRedirectDepth) {
                  void deferred.then(() => {
                    return self.loadRedirect(rdtitle, entry, deep + 1, loaded);
                  });
                }
                has_redirect = true;
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
          } else {
            has_redirect = false;
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      if (has_redirect && deep === 1) {
        self.addMethods(desc, [{
          href: "#select-all",
          title: getMessage("selectall"),
          click(event) {
            event.preventDefault();
            self.selectAll(self.tabs.view.cont);
          }
        }, {
          href: "#select-inverse",
          title: getMessage("selectinverse"),
          click(event) {
            event.preventDefault();
            self.selectInverse(self.tabs.view.cont);
          }
        }, {
          href: "#fix-selected",
          title: getMessage("tabviewfix"),
          click(event) {
            event.preventDefault();
            self.selectAction(self.tabs.view.cont, self.fix);
          }
        }]);
      }
      if (has_redirect) {
        void deferred.resolveWith(self);
      } else {
        void deferred.rejectWith(self);
      }
    });
    return deferred.promise();
  },
  findVariants(pagename, titles) {
    const self = this;
    const suffixReg = /^.+?((（|[ _]\().+?([)）]))$/;
    let retTitles = [];
    const deferreds = [];
    for (var _i2 = 0, _VARIANTS = VARIANTS; _i2 < _VARIANTS.length; _i2++) {
      const variant = _VARIANTS[_i2];
      const xhr = api.post({
        action: "parse",
        format: "json",
        formatversion: "2",
        page: pagename,
        prop: "displaytitle",
        uselang: variant,
        variant
      }).then(({
        parse
      }) => {
        const {
          displaytitle
        } = parse;
        let title = $("<span>").append(displaytitle).eq(0).text().trim();
        title = fixNamespace(title);
        setRedirectTextSuffix(title, "{{简繁重定向}}", SUFFIX_APPEND);
        return title;
      });
      deferreds[deferreds.length] = xhr;
    }
    return $.when(...deferreds).then((...args) => {
      const suffixes = [];
      for (var _i3 = 0, _args = args; _i3 < _args.length; _i3++) {
        const title = _args[_i3];
        let suffix;
        const suffixArr = suffixReg.exec(title);
        if (suffixArr && suffixArr.length === 2) {
          [, suffix] = suffixArr;
        } else {
          suffix = "";
        }
        retTitles[retTitles.length] = title;
        suffixes[suffixes.length] = suffix;
      }
      var _iterator7 = _createForOfIteratorHelper((0, import_ext_gadget2.uniqueArray)(suffixes)), _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
          const suffix = _step7.value;
          retTitles = [...retTitles, ...titles.map((title) => {
            const modifiedTitle = fixNamespace(title);
            return suffixReg.test(modifiedTitle) ? modifiedTitle : modifiedTitle + suffix;
          })];
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      return self.findNotExists((0, import_ext_gadget2.uniqueArray)(retTitles));
    });
  },
  findNotExists(titles) {
    const deferreds = [];
    const excludes = ["用字模式"];
    let alltitles = [];
    for (var _i4 = 0, _VARIANTS2 = VARIANTS; _i4 < _VARIANTS2.length; _i4++) {
      const variant = _VARIANTS2[_i4];
      deferreds[deferreds.length] = api.get({
        action: "parse",
        format: "json",
        formatversion: "2",
        text: titles,
        prop: "text",
        title: "MediaWiki:Gadget-ToolsRedirect.js/-",
        contentmodel: "wikitext",
        uselang: variant,
        variant
      });
    }
    return $.when(...deferreds).then((...args) => {
      for (var _i5 = 0, _args2 = args; _i5 < _args2.length; _i5++) {
        const [{
          parse
        }] = _args2[_i5];
        alltitles = [...alltitles, ...$(parse.text).text().trim().split("|")];
      }
      alltitles = alltitles.filter((v, i, arr) => {
        return arr.indexOf(v) === i;
      });
      return api.post({
        action: "query",
        format: "json",
        formatversion: "2",
        prop: "info",
        titles: alltitles
      }).then(({
        query
      }) => {
        titles = [];
        var _iterator8 = _createForOfIteratorHelper(query.pages), _step8;
        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
            const page = _step8.value;
            const {
              title
            } = page;
            if (page.missing && !excludes.includes(title)) {
              if (title in redirectExcludes) {
                return;
              }
              titles[titles.length] = title;
              if (IS_CATEGORY) {
                const target = wgPageName.replace(/^Category:/, "");
                setRedirectTextSuffix(title, "{{分类重定向|$1}}".replace("$1", target));
              }
              setRedirectTextSuffix(title, "{{别名重定向}}", SUFFIX_SETDEFAULT);
            }
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
        return titles;
      });
    });
  },
  findRedirect(pagename) {
    const self = this;
    const frcDeferreds = [];
    const container = self.tabs.create.cont;
    const $body = $("body");
    const $content = $body.find("#mw-content-text > div.mw-parser-output");
    const deferred = $.Deferred();
    let titles = [];
    self.loading(container);
    var _iterator9 = _createForOfIteratorHelper(findRedirectCallbacks), _step9;
    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
        const callback = _step9.value;
        const ret = callback(pagename, $content, titles);
        if (typeof ret === "string") {
          titles[titles.length] = ret;
        } else if ("done" in ret) {
          frcDeferreds[frcDeferreds.length] = ret;
        } else {
          titles = (0, import_ext_gadget2.uniqueArray)([...titles, ...ret]);
        }
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }
    titles = titles.map((title) => {
      return title || null;
    });
    const onClickCreate = function(event) {
      const entry = $(this).parents("p:first");
      event.preventDefault();
      self.clickAction(entry, self.create);
    };
    void $.when(...frcDeferreds).then((...args) => {
      for (var _i6 = 0, _args3 = args; _i6 < _args3.length; _i6++) {
        const ret = _args3[_i6];
        if (typeof ret === "string") {
          titles[titles.length] = ret;
        } else {
          titles = (0, import_ext_gadget2.uniqueArray)([...titles, ...ret]);
        }
      }
      return self.findVariants(pagename, titles);
    }).then((fvtitles) => {
      self.loaded(container);
      var _iterator0 = _createForOfIteratorHelper(fvtitles), _step0;
      try {
        for (_iterator0.s(); !(_step0 = _iterator0.n()).done; ) {
          const title = _step0.value;
          const ultitle = title.replace(" ", "_");
          const entry = $("<p>").appendTo(container);
          self.buildSelection({
            href: mw.util.getUrl(ultitle, {
              action: "edit",
              redlink: "1"
            }),
            title,
            classname: "new"
          }, [{
            href: "#create-redirect",
            title: getMessage("tabcreatetitle"),
            click: onClickCreate
          }], ultitle, false).appendTo(entry);
        }
      } catch (err) {
        _iterator0.e(err);
      } finally {
        _iterator0.f();
      }
      const desc = $("p.desc", container);
      if (fvtitles.length > 0) {
        self.addMethods(desc, [{
          href: "#select-all",
          title: getMessage("selectall"),
          click(event) {
            event.preventDefault();
            self.selectAll(container);
          }
        }, {
          href: "#select-inverse",
          title: getMessage("selectinverse"),
          click(event) {
            event.preventDefault();
            self.selectInverse(container);
          }
        }, {
          href: "#create-selected",
          title: getMessage("tabcreatetitle"),
          click(event) {
            event.preventDefault();
            self.selectAction(container, self.create);
          }
        }]);
        void deferred.resolveWith(self, [fvtitles]);
      } else {
        void deferred.rejectWith(self, [fvtitles]);
      }
    });
    return deferred.promise();
  }
};
//! src/ToolsRedirect/ToolsRedirect.ts
var import_ext_gadget3 = require("ext.gadget.Util");
//! src/ToolsRedirect/modules/messages.ts
var {
  wgUserLanguage
} = mw.config.get();
var setMessages = () => {
  const DEFAULT_MESSAGES_HANS = {
    "toolsredirect-btntitle": "重定向",
    "toolsredirect-btndesc": "创建和管理此页面的重定向",
    "toolsredirect-dlgtitle": "创建和管理重定向",
    "toolsredirect-rediloading": "数据加载中，请稍候……",
    "toolsredirect-rediedit": "编辑",
    "toolsredirect-selectall": "全选",
    "toolsredirect-selectinverse": "反选",
    "toolsredirect-tabviewtitle": "查看",
    "toolsredirect-tabviewdesc": "以下是指向此页面的重定向页：",
    "toolsredirect-tabviewnotfound": "没有找到任何指向此页面的重定向页。",
    "toolsredirect-tabviewmulti": "多重",
    "toolsredirect-tabviewfix": "修复",
    "toolsredirect-fixloading": "请稍候，正在自动修复重定向……",
    "toolsredirect-fixtext": "#REDIRECT [[$1]]",
    "toolsredirect-fixsummary": "编辑工具：修复多重重定向",
    "toolsredirect-tabcreatetitle": "创建",
    "toolsredirect-tabcreatedesc": "以下是尚未创建的重定向页：",
    "toolsredirect-tabcreatenotfound": "没有找到可以创建的重定向页。",
    "toolsredirect-tabcreateall": "全部创建",
    "toolsredirect-createloading": "请稍候，正在自动创建重定向……",
    "toolsredirect-createtext": "#REDIRECT [[$1]]",
    "toolsredirect-createtext-category": "{{分类重定向|$1}}",
    "toolsredirect-createsummary": "编辑工具：自动创建重定向到[[$1]]",
    "toolsredirect-errcycleredirect": "无法自动修复：发现循环重定向",
    "toolsredirect-refresh": "刷新"
  };
  const DEFAULT_MESSAGES_HANT = {
    "toolsredirect-btntitle": "重新導向",
    "toolsredirect-btndesc": "創建和管理此頁面的重新導向",
    "toolsredirect-dlgtitle": "創建和管理重新導向",
    "toolsredirect-rediloading": "數據加載中，請稍候……",
    "toolsredirect-rediedit": "編輯",
    "toolsredirect-selectall": "全選",
    "toolsredirect-selectinverse": "反選",
    "toolsredirect-tabviewtitle": "查看",
    "toolsredirect-tabviewdesc": "以下是指向此頁面的重新導向頁：",
    "toolsredirect-tabviewnotfound": "沒有找到任何指向此頁面的重新導向頁。",
    "toolsredirect-tabviewmulti": "多重",
    "toolsredirect-tabviewfix": "修復",
    "toolsredirect-fixloading": "請稍候，正在自動修復重新導向……",
    "toolsredirect-fixtext": "#REDIRECT [[$1]]",
    "toolsredirect-fixsummary": "編輯工具：修復多重重新導向",
    "toolsredirect-tabcreatetitle": "創建",
    "toolsredirect-tabcreatedesc": "以下是尚未創建的重新導向頁：",
    "toolsredirect-tabcreatenotfound": "沒有找到可以創建的重新導向頁。",
    "toolsredirect-tabcreateall": "全部創建",
    "toolsredirect-createloading": "請稍候，正在自動創建重新導向……",
    "toolsredirect-createtext": "#REDIRECT [[$1]]",
    "toolsredirect-createtext-category": "{{分类重定向|$1}}",
    "toolsredirect-createsummary": "編輯工具：自動創建重新導向到[[$1]]",
    "toolsredirect-errcycleredirect": "無法自動修復：發現循環重新導向",
    "toolsredirect-refresh": "刷新"
  };
  if (["zh-hant", "zh-hk", "zh-mo", "zh-tw"].includes(wgUserLanguage)) {
    mw.messages.set(DEFAULT_MESSAGES_HANT);
  } else {
    mw.messages.set(DEFAULT_MESSAGES_HANS);
  }
};
//! src/ToolsRedirect/ToolsRedirect.ts
setMessages();
void (0, import_ext_gadget3.getBody)().then(($body) => {
  ToolsRedirect.init($body);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Rvb2xzUmVkaXJlY3QvVG9vbHNSZWRpcmVjdC50cyIsICJzcmMvVG9vbHNSZWRpcmVjdC9vcHRpb25zLmpzb24iLCAic3JjL1Rvb2xzUmVkaXJlY3QvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvVG9vbHNSZWRpcmVjdC9tb2R1bGVzL2NvcmUuanMiLCAic3JjL1Rvb2xzUmVkaXJlY3QvbW9kdWxlcy9hcGkudHMiLCAic3JjL1Rvb2xzUmVkaXJlY3QvbW9kdWxlcy91dGlsL2ZpeE5hbWVzcGFjZS50cyIsICJzcmMvVG9vbHNSZWRpcmVjdC9tb2R1bGVzL3V0aWwvZ2V0TWVzc2FnZS50cyIsICJzcmMvVG9vbHNSZWRpcmVjdC9tb2R1bGVzL21lc3NhZ2VzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgJy4vVG9vbHNSZWRpcmVjdC5sZXNzJztcbmltcG9ydCB7VG9vbHNSZWRpcmVjdH0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtzZXRNZXNzYWdlc30gZnJvbSAnLi9tb2R1bGVzL21lc3NhZ2VzJztcblxuc2V0TWVzc2FnZXMoKTtcblxudm9pZCBnZXRCb2R5KCkudGhlbigoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdFRvb2xzUmVkaXJlY3QuaW5pdCgkYm9keSk7XG59KTtcblxuZXhwb3J0IHtmaW5kUmVkaXJlY3RDYWxsYmFjaywgZmluZFJlZGlyZWN0QnlTZWxlY3Rvciwgc2V0UmVkaXJlY3RUZXh0U3VmZml4fSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG4iLCAie1xuXHRcImFwaVRhZ1wiOiBcIlRvb2xzUmVkaXJlY3RcIixcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJjb25zdCBTVUZGSVhfQVBQRU5EID0gMDtcbmNvbnN0IFNVRkZJWF9SRVBMQUNFID0gMTtcbmNvbnN0IFNVRkZJWF9TRVRERUZBVUxUID0gMjtcblxuY29uc3QgVkFSSUFOVFMgPSBbJ3poLWhhbnMnLCAnemgtaGFudCcsICd6aC1jbicsICd6aC1oaycsICd6aC1tbycsICd6aC1zZycsICd6aC1teScsICd6aC10dyddO1xuXG5leHBvcnQge1NVRkZJWF9BUFBFTkQsIFNVRkZJWF9SRVBMQUNFLCBTVUZGSVhfU0VUREVGQVVMVCwgVkFSSUFOVFN9O1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge1NVRkZJWF9BUFBFTkQsIFNVRkZJWF9SRVBMQUNFLCBTVUZGSVhfU0VUREVGQVVMVCwgVkFSSUFOVFN9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHtnZW5lcmF0ZUFycmF5LCB1bmlxdWVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2ZpeE5hbWVzcGFjZX0gZnJvbSAnLi91dGlsL2ZpeE5hbWVzcGFjZSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vdXRpbC9nZXRNZXNzYWdlJztcblxuY29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcbmNvbnN0IElTX0NBVEVHT1JZID0gd2dOYW1lc3BhY2VOdW1iZXIgPT09IDE0O1xubGV0IGZpbmRSZWRpcmVjdENhbGxiYWNrcyA9IFtdO1xuY29uc3QgcGFnZVdpdGhSZWRpcmVjdFRleHRTdWZmaXggPSB7fTtcbmNvbnN0IHJlZGlyZWN0RXhjbHVkZXMgPSB7fTtcblxuLyoqXG4gKiBBZGQgbmV3IGN1c3RvbSBjYWxsYmFjayBmb3IgZmluZGluZyBuZXcgcG90ZW50aWFsIHJlZGlyZWN0IHRpdGxlcy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAocGFnZW5hbWUsICRjb250ZW50LCB0aXRsZXMpID0+IHRpdGxlIGxpc3RcbiAqIEBwYXJhbSB7Li4uRnVuY3Rpb259IGFyZ3NcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuY29uc3QgZmluZFJlZGlyZWN0Q2FsbGJhY2sgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIC4uLmFyZ3MpIHtcblx0aWYgKGNhbGxiYWNrKSB7XG5cdFx0ZmluZFJlZGlyZWN0Q2FsbGJhY2tzW2ZpbmRSZWRpcmVjdENhbGxiYWNrcy5sZW5ndGhdID0gY2FsbGJhY2s7XG5cdH0gZWxzZSB7XG5cdFx0ZmluZFJlZGlyZWN0Q2FsbGJhY2tzID0gZ2VuZXJhdGVBcnJheShmaW5kUmVkaXJlY3RDYWxsYmFja3MsIGNhbGxiYWNrLCAuLi5hcmdzKTtcblx0fVxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogRmluZCBuZXcgcG90ZW50aWFsIHJlZGlyZWN0IHRpdGxlcyB0aHJvdWdoIHNlbGVjdG9yKHMpXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmNvbnN0IGZpbmRSZWRpcmVjdEJ5U2VsZWN0b3IgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcblx0LyogQSBzaG9ydGN1dCB0byBhZGQgQ1NTIHNlbGVjdG9ycyBhcyBydWxlIHRvIGZpbmQgbmV3IHBvdGVudGlhbCByZWRpcmVjdCB0aXRsZXMuICovXG5cdGZpbmRSZWRpcmVjdENhbGxiYWNrc1tmaW5kUmVkaXJlY3RDYWxsYmFja3MubGVuZ3RoXSA9ICgpID0+IHtcblx0XHRyZXR1cm4gJChzZWxlY3RvcikubWFwKChfaW5kZXgsIGVsZW1lbnQpID0+IHtcblx0XHRcdHJldHVybiAkKGVsZW1lbnQpLmVxKDApLnRleHQoKS50cmltKCkgfHwgbnVsbDtcblx0XHR9KTtcblx0fTtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG5jb25zdCBzZXRSZWRpcmVjdFRleHRTdWZmaXggPSAodGl0bGUsIHN1ZmZpeCwgZmxhZykgPT4ge1xuXHRsZXQgZmxhZ19zZXQgPSBmYWxzZTtcblx0bGV0IGZsYWdfYXBwZW5kID0gZmFsc2U7XG5cdGZsYWcgfHw9IFNVRkZJWF9BUFBFTkQ7IC8vIGRlZmF1bHQgYXBwZW5kXG5cdGZsYWdfc2V0ID0gZmxhZyA9PT0gU1VGRklYX1JFUExBQ0U7XG5cdHRpdGxlID0gZml4TmFtZXNwYWNlKHRpdGxlKTtcblx0aWYgKHRpdGxlIGluIHBhZ2VXaXRoUmVkaXJlY3RUZXh0U3VmZml4KSB7XG5cdFx0ZmxhZ19hcHBlbmQgPSBmbGFnID09PSBTVUZGSVhfQVBQRU5EO1xuXHR9IGVsc2Uge1xuXHRcdC8vIGlmIG5vdCBleGlzdCwgZXZlcnkgZmxhZyBjYW4gc2V0XG5cdFx0ZmxhZ19zZXQgPSB0cnVlO1xuXHR9XG5cdGlmIChmbGFnX3NldCkge1xuXHRcdHBhZ2VXaXRoUmVkaXJlY3RUZXh0U3VmZml4W3RpdGxlXSA9IGdlbmVyYXRlQXJyYXkoc3VmZml4KTtcblx0fSBlbHNlIGlmIChmbGFnX2FwcGVuZCkge1xuXHRcdHBhZ2VXaXRoUmVkaXJlY3RUZXh0U3VmZml4W3RpdGxlXSA9IGdlbmVyYXRlQXJyYXkocGFnZVdpdGhSZWRpcmVjdFRleHRTdWZmaXhbdGl0bGVdLCBzdWZmaXgpO1xuXHR9XG59O1xuXG5jb25zdCBUb29sc1JlZGlyZWN0ID0ge1xuXHR0YWJzZWxlbTogbnVsbCxcblx0dGFnc2VsZW06IG51bGwsXG5cdHZhcmlhbnRzOiBWQVJJQU5UUyxcblx0aW5pdCgkYm9keSkge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdGNvbnN0IGJ1dHRvbiA9ICQoJzxsaT4nKVxuXHRcdFx0LmFkZENsYXNzKCdtdy1saXN0LWl0ZW0gY29sbGFwc2libGUgdmVjdG9yLXRhYi1ub2ljb24nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ2NhLXJlZGlyZWN0Jylcblx0XHRcdC5jc3MoJ2N1cnNvcicsICdwb2ludGVyJylcblx0XHRcdC5hcHBlbmQoJCgnPGE+JykuYXR0cigndGl0bGUnLCBnZXRNZXNzYWdlKCdidG5kZXNjJykpLnRleHQoZ2V0TWVzc2FnZSgnYnRudGl0bGUnKSkpO1xuXHRcdGJ1dHRvbi5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRzZWxmLmRpYWxvZygpO1xuXHRcdH0pO1xuXHRcdCRib2R5LmZpbmQoJ2xpI2NhLWhpc3RvcnknKS5hZnRlcihidXR0b24pO1xuXHR9LFxuXHRkaWFsb2coKSB7XG5cdFx0Y29uc3QgZGlhbG9nID0gJCgnPGRpdj4nKVxuXHRcdFx0LmF0dHIoJ3RpdGxlJywgZ2V0TWVzc2FnZSgnZGxndGl0bGUnKSlcblx0XHRcdC5hZGRDbGFzcygnZGlhbG9nLXJlZGlyZWN0Jylcblx0XHRcdC5kaWFsb2coe1xuXHRcdFx0XHRiZ2lmcmFtZTogdHJ1ZSxcblx0XHRcdFx0cmVzaXphYmxlOiBmYWxzZSxcblx0XHRcdFx0bW9kYWw6IHRydWUsXG5cdFx0XHRcdHdpZHRoOiBNYXRoLnJvdW5kKCQod2luZG93KS53aWR0aCgpICogMC44KSxcblx0XHRcdFx0cG9zaXRpb246ICdjZW50ZXInLFxuXHRcdFx0fSk7XG5cdFx0ZGlhbG9nLmNzcygnbWF4LWhlaWdodCcsIGAke01hdGgucm91bmQoJCh3aW5kb3cpLmhlaWdodCgpICogMC44KX1weGApO1xuXHRcdHRoaXMudGFic2VsZW0gPSAkKCc8ZGl2PicpLmFkZENsYXNzKCd0YWItcmVkaXJlY3QnKS5hcHBlbmRUbyhkaWFsb2cpO1xuXHRcdHRoaXMudGFnc2VsZW0gPSAkKCc8dWw+JykuYXBwZW5kVG8odGhpcy50YWJzZWxlbSk7XG5cdFx0dGhpcy5hZGRUYWJzKCk7XG5cdFx0dGhpcy50YWJzZWxlbS50YWJzKCk7XG5cdH0sXG5cdGFkZFRhYnMoKSB7XG5cdFx0Zm9yIChjb25zdCBrbmFtZSBpbiB0aGlzLnRhYnMpIHtcblx0XHRcdGlmIChPYmplY3QuaGFzT3duKHRoaXMudGFicywga25hbWUpKSB7XG5cdFx0XHRcdGlmICh0aGlzLnRhYnNba25hbWVdID09PSBudWxsKSB7XG5cdFx0XHRcdFx0dGhpcy50YWJzW2tuYW1lXSA9IHRoaXNbYF9pbml0VGFiJHtrbmFtZVswXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2tuYW1lLnNsaWNlKDEpfWBdKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgdGFiID0gdGhpcy50YWJzW2tuYW1lXTtcblx0XHRcdFx0dGhpcy50YWdzZWxlbS5hcHBlbmQodGFiLnRhZyk7XG5cdFx0XHRcdHRoaXMudGFic2VsZW0uYXBwZW5kKHRhYi5jb250KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gZGVmYXVsdCB0YWIsIGF1dG9sb2FkIHdoZW4gZGlhbG9nIGluaXRpYXRlXG5cdFx0dGhpcy5sb2FkVmlldygpO1xuXHR9LFxuXHRjcmVhdGVUYWIodGFibmFtZSwgdGFidGl0bGUsIG9uQ2xpY2spIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRjb25zdCB0YWcgPSAkKCc8bGk+JykuYXBwZW5kKCQoJzxhPicpLmF0dHIoJ2hyZWYnLCBgI3RhYi0ke3RhYm5hbWV9YCkudGV4dCh0YWJ0aXRsZSkpO1xuXHRcdGNvbnN0IGNvbnQgPSAkKCc8ZGl2PicpLmF0dHIoJ2lkJywgYHRhYi0ke3RhYm5hbWV9YCk7XG5cdFx0JCgnYScsIHRhZykub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0b25DbGljay5jYWxsKHNlbGYpO1xuXHRcdH0pO1xuXHRcdHJldHVybiB7XG5cdFx0XHR0YWcsXG5cdFx0XHRjb250LFxuXHRcdFx0bG9hZGVkOiBmYWxzZSxcblx0XHR9O1xuXHR9LFxuXHRfaW5pdFRhYlZpZXcoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY3JlYXRlVGFiKCd2aWV3JywgZ2V0TWVzc2FnZSgndGFidmlld3RpdGxlJyksIHRoaXMubG9hZFZpZXcpO1xuXHR9LFxuXHRfaW5pdFRhYkNyZWF0ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5jcmVhdGVUYWIoJ2NyZWF0ZScsIGdldE1lc3NhZ2UoJ3RhYmNyZWF0ZXRpdGxlJyksIHRoaXMubG9hZENyZWF0ZSk7XG5cdH0sXG5cdHRhYnM6IHtcblx0XHR2aWV3OiBudWxsLFxuXHRcdGNyZWF0ZTogbnVsbCxcblx0fSxcblx0Zml4KHBhZ2VuYW1lcykge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdCQoJ3AuZGVzYycsIHNlbGYudGFicy52aWV3LmNvbnQpLnRleHQoZ2V0TWVzc2FnZSgnZml4bG9hZGluZycpKTtcblx0XHQkKCdwW2NsYXNzIT1kZXNjXScsIHNlbGYudGFicy52aWV3LmNvbnQpLnJlbW92ZSgpO1xuXHRcdHNlbGYubG9hZGluZyhzZWxmLnRhYnMudmlldy5jb250KTtcblx0XHR2b2lkIHNlbGZcblx0XHRcdC5idWxrRWRpdEJ5UmVnZXgocGFnZW5hbWVzLCAvXFxzKlxcW1xcWy4qPygjLio/KT9cXF1cXF0vLCBgIFtbJHt3Z1BhZ2VOYW1lfSQxXV1gLCBnZXRNZXNzYWdlKCdmaXhzdW1tYXJ5JykpXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdC8vIGRlbGF5IGxvYWQgYmVmb3JlIHRoZSBhc3luY2hyb25vdXMgdGFza3Mgb24gc2VydmVyIGZpbmlzaGVkXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdHNlbGYubG9hZGVkKHNlbGYudGFicy52aWV3LmNvbnQpO1xuXHRcdFx0XHRcdHNlbGYubG9hZFZpZXcodHJ1ZSk7XG5cdFx0XHRcdH0sIDMwMDApO1xuXHRcdFx0fSk7XG5cdH0sXG5cdGNyZWF0ZShwYWdlbmFtZXMpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHQkKCdwLmRlc2MnLCBzZWxmLnRhYnMuY3JlYXRlLmNvbnQpLnRleHQoZ2V0TWVzc2FnZSgnY3JlYXRlbG9hZGluZycpKTtcblx0XHQkKCdwW2NsYXNzIT1kZXNjXScsIHNlbGYudGFicy5jcmVhdGUuY29udCkucmVtb3ZlKCk7XG5cdFx0c2VsZi5sb2FkaW5nKHNlbGYudGFicy5jcmVhdGUuY29udCk7XG5cdFx0dm9pZCBzZWxmXG5cdFx0XHQuYnVsa0VkaXQoXG5cdFx0XHRcdHBhZ2VuYW1lcyxcblx0XHRcdFx0Z2V0TWVzc2FnZShJU19DQVRFR09SWSA/ICdjcmVhdGV0ZXh0LWNhdGVnb3J5JyA6ICdjcmVhdGV0ZXh0JykucmVwbGFjZSgnJDEnLCB3Z1BhZ2VOYW1lKSxcblx0XHRcdFx0Z2V0TWVzc2FnZSgnY3JlYXRlc3VtbWFyeScpLnJlcGxhY2UoJyQxJywgd2dQYWdlTmFtZSlcblx0XHRcdClcblx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0Ly8gZGVsYXkgbG9hZCBiZWZvcmUgdGhlIGFzeW5jaHJvbm91cyB0YXNrcyBvbiBzZXJ2ZXIgZmluaXNoZWRcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0c2VsZi5sb2FkZWQoc2VsZi50YWJzLmNyZWF0ZS5jb250KTtcblx0XHRcdFx0XHRzZWxmLnRhYnMudmlldy5sb2FkZWQgPSBmYWxzZTtcblx0XHRcdFx0XHRzZWxmLmxvYWRDcmVhdGUodHJ1ZSk7XG5cdFx0XHRcdH0sIDUwMCk7XG5cdFx0XHR9KTtcblx0fSxcblx0YWRkUmVkaXJlY3RUZXh0U3VmZml4KHRpdGxlLCB0ZXh0KSB7XG5cdFx0aWYgKHRpdGxlIGluIHBhZ2VXaXRoUmVkaXJlY3RUZXh0U3VmZml4KSB7XG5cdFx0XHR0ZXh0ICs9IGBcXG4ke3VuaXF1ZUFycmF5KHBhZ2VXaXRoUmVkaXJlY3RUZXh0U3VmZml4W3RpdGxlXSkuam9pbignXFxuJyl9YDsgLy8gUmVwbGFjZSBTZXQgd2l0aCB1bmlxdWVBcnJheSwgYXZvaWRpbmcgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXHRcdH1cblx0XHRyZXR1cm4gdGV4dDtcblx0fSxcblx0YnVsa0VkaXQodGl0bGVzLCB0ZXh0LCBzdW1tYXJ5KSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0dGl0bGVzID0gdGl0bGVzLmZpbHRlcigodiwgaSwgYXJyKSA9PiB7XG5cdFx0XHRyZXR1cm4gYXJyLmluZGV4T2YodikgPT09IGk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGFwaVxuXHRcdFx0LnBvc3Qoe1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHByb3A6ICdpbmZvJyxcblx0XHRcdFx0dGl0bGVzLFxuXHRcdFx0fSlcblx0XHRcdC50aGVuKCh7cXVlcnl9KSA9PiB7XG5cdFx0XHRcdGNvbnN0IGRlZmVycmVkcyA9IFtdO1xuXHRcdFx0XHRmb3IgKGNvbnN0IHt0aXRsZX0gb2YgcXVlcnkucGFnZXMpIHtcblx0XHRcdFx0XHRkZWZlcnJlZHNbZGVmZXJyZWRzLmxlbmd0aF0gPSBhcGkucG9zdFdpdGhUb2tlbignY3NyZicsIHtcblx0XHRcdFx0XHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdFx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdFx0XHR0aXRsZSxcblx0XHRcdFx0XHRcdHRleHQ6IHNlbGYuYWRkUmVkaXJlY3RUZXh0U3VmZml4KHRpdGxlLCB0ZXh0KSxcblx0XHRcdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdFx0XHR0YWdzOiBPUFRJT05TLmFwaVRhZyxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gJC53aGVuKC4uLmRlZmVycmVkcyk7XG5cdFx0XHR9KTtcblx0fSxcblx0YnVsa0VkaXRCeVJlZ2V4KHRpdGxlcywgcmVnZXgsIHRleHQsIHN1bW1hcnkpIHtcblx0XHR0aXRsZXMgPSB0aXRsZXMuZmlsdGVyKCh2LCBpLCBhcnIpID0+IHtcblx0XHRcdHJldHVybiBhcnIuaW5kZXhPZih2KSA9PT0gaTtcblx0XHR9KTtcblx0XHRyZXR1cm4gYXBpXG5cdFx0XHQucG9zdCh7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0XHRcdHJ2cHJvcDogJ2NvbnRlbnQnLFxuXHRcdFx0XHRydnNsb3RzOiAnbWFpbicsXG5cdFx0XHRcdHRpdGxlcyxcblx0XHRcdH0pXG5cdFx0XHQudGhlbigoe3F1ZXJ5fSkgPT4ge1xuXHRcdFx0XHRjb25zdCBkZWZlcnJlZHMgPSBbXTtcblx0XHRcdFx0Zm9yIChjb25zdCBwYWdlIG9mIHF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdFx0Y29uc3Qge2NvbnRlbnR9ID0gcGFnZS5yZXZpc2lvbnNbMF0uc2xvdHNbJ21haW4nXTtcblx0XHRcdFx0XHRjb25zdCBuZXdDb250ZW50ID0gY29udGVudC5yZXBsYWNlKHJlZ2V4LCB0ZXh0KTtcblx0XHRcdFx0XHRkZWZlcnJlZHNbZGVmZXJyZWRzLmxlbmd0aF0gPSBhcGkucG9zdFdpdGhUb2tlbignY3NyZicsIHtcblx0XHRcdFx0XHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdFx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdFx0XHR0aXRsZTogcGFnZS50aXRsZSxcblx0XHRcdFx0XHRcdHRleHQ6IG5ld0NvbnRlbnQsXG5cdFx0XHRcdFx0XHR0YWdzOiBPUFRJT05TLmFwaVRhZyxcblx0XHRcdFx0XHRcdGJhc2V0aW1lc3RhbXA6IHBhZ2UucmV2aXNpb25zWzBdLnRpbWVzdGFtcCxcblx0XHRcdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuICQud2hlbiguLi5kZWZlcnJlZHMpO1xuXHRcdFx0fSk7XG5cdH0sXG5cdGxvYWRUYWJDb250KHRhYm5hbWUsIGNhbGxiYWNrLCByZWxvYWQpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRjb25zdCB0YWIgPSBzZWxmLnRhYnNbdGFibmFtZV07XG5cdFx0aWYgKHJlbG9hZCkge1xuXHRcdFx0dGFiLmxvYWRlZCA9IGZhbHNlO1xuXHRcdH1cblx0XHRpZiAoIXRhYi5sb2FkZWQpIHtcblx0XHRcdHRhYi5jb250Lmh0bWwoJycpO1xuXHRcdFx0Ly9cblx0XHRcdGNvbnN0ICRkZXNjID0gJCgnPHA+Jylcblx0XHRcdFx0LmFkZENsYXNzKCdkZXNjJylcblx0XHRcdFx0LmFwcGVuZCgkKCc8c3Bhbj4nKS5hZGRDbGFzcygnZGVzYy10ZXh0JykudGV4dChnZXRNZXNzYWdlKCdyZWRpbG9hZGluZycpKSlcblx0XHRcdFx0LmFwcGVuZFRvKHRhYi5jb250KTtcblx0XHRcdGNvbnN0ICR0ZXh0ID0gJGRlc2MuZmluZCgnPiAuZGVzYy10ZXh0Jyk7XG5cdFx0XHRjYWxsYmFja1xuXHRcdFx0XHQuYXBwbHkoc2VsZilcblx0XHRcdFx0LmRvbmUoKCkgPT4ge1xuXHRcdFx0XHRcdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0XHRcdFx0XHQvLyAqIHNlZSBtZXNzYWdlcy5qc1xuXHRcdFx0XHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHRcdFx0XHQkdGV4dC50ZXh0KGdldE1lc3NhZ2UoYHRhYiR7dGFibmFtZX1kZXNjYCkpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuZmFpbCgoKSA9PiB7XG5cdFx0XHRcdFx0Ly8gTWVzc2FnZXMgdGhhdCBjYW4gYmUgdXNlZCBoZXJlOlxuXHRcdFx0XHRcdC8vICogc2VlIG1lc3NhZ2VzLmpzXG5cdFx0XHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0XHRcdCR0ZXh0LnRleHQoZ2V0TWVzc2FnZShgdGFiJHt0YWJuYW1lfW5vdGZvdW5kYCkpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuYWx3YXlzKCgpID0+IHtcblx0XHRcdFx0XHRzZWxmLmFkZE1ldGhvZHMoJGRlc2MsIFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0aHJlZjogJyNyZWZyZXNoJyxcblx0XHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ3JlZnJlc2gnKSxcblx0XHRcdFx0XHRcdFx0Y2xpY2soZXZlbnQpIHtcblx0XHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdHNlbGYubG9hZFRhYkNvbnQodGFibmFtZSwgY2FsbGJhY2ssIHRydWUpO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRdKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR0YWIubG9hZGVkID0gdHJ1ZTtcblx0XHR9XG5cdH0sXG5cdGxvYWRpbmcoY29udGFpbmVyKSB7XG5cdFx0aWYgKGNvbnRhaW5lci5wcm9wKCd0YWdOYW1lJykudG9Mb3dlckNhc2UoKSA9PT0gJ3NwYW4nKSB7XG5cdFx0XHRjb250YWluZXIuYWRkQ2xhc3MoJ213LWFqYXgtbG9hZGVyJyk7XG5cdFx0fSBlbHNlIGlmICgkKCdzcGFuLm13LWFqYXgtbG9hZGVyJywgY29udGFpbmVyKS5sZW5ndGggPT09IDApIHtcblx0XHRcdCQoJzxzcGFuPicpLmFkZENsYXNzKCdtdy1hamF4LWxvYWRlcicpLmFwcGVuZFRvKGNvbnRhaW5lcik7XG5cdFx0fVxuXHR9LFxuXHRsb2FkZWQoY29udGFpbmVyKSB7XG5cdFx0aWYgKGNvbnRhaW5lci5wcm9wKCd0YWdOYW1lJykudG9Mb3dlckNhc2UoKSA9PT0gJ3NwYW4nKSB7XG5cdFx0XHRjb250YWluZXIucmVtb3ZlQ2xhc3MoJ213LWFqYXgtbG9hZGVyJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQoJ3NwYW4ubXctYWpheC1sb2FkZXInLCBjb250YWluZXIpLnJlbW92ZSgpO1xuXHRcdH1cblx0fSxcblx0c2VsZWN0QWxsKGNvbnQpIHtcblx0XHQkKCdpbnB1dFt0eXBlPWNoZWNrYm94XTpub3QoOmRpc2FibGVkKScsIGNvbnQpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcblx0fSxcblx0c2VsZWN0SW52ZXJzZShjb250KSB7XG5cdFx0JCgnaW5wdXRbdHlwZT1jaGVja2JveF06bm90KDpkaXNhYmxlZCknLCBjb250KS5lYWNoKChfaW5kZXgsIGVsZW1lbnQpID0+IHtcblx0XHRcdGNvbnN0ICRlbGVtZW50ID0gJChlbGVtZW50KTtcblx0XHRcdCRlbGVtZW50LnByb3AoJ2NoZWNrZWQnLCAhJGVsZW1lbnQucHJvcCgnY2hlY2tlZCcpKTtcblx0XHR9KTtcblx0fSxcblx0c2VsZWN0QWN0aW9uKGNvbnQsIGNiKSB7XG5cdFx0Y29uc3QgcGFnZW5hbWVzID0gW107XG5cdFx0JCgnaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCcsIGNvbnQpLmVhY2goKF9pbmRleCwgcGFnZW5hbWUpID0+IHtcblx0XHRcdHBhZ2VuYW1lc1twYWdlbmFtZXMubGVuZ3RoXSA9ICQocGFnZW5hbWUpLmRhdGEoJ3BhZ2UtdGl0bGUnKTtcblx0XHR9KTtcblx0XHRpZiAocGFnZW5hbWVzLmxlbmd0aCA+IDApIHtcblx0XHRcdGNiLmNhbGwodGhpcywgcGFnZW5hbWVzKTtcblx0XHR9XG5cdH0sXG5cdGNsaWNrQWN0aW9uKGNvbnQsIGNiKSB7XG5cdFx0Y29uc3QgcGFnZW5hbWUgPSAkKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nLCBjb250KS5kYXRhKCdwYWdlLXRpdGxlJyk7XG5cdFx0Y2IuY2FsbCh0aGlzLCBbcGFnZW5hbWVdKTtcblx0fSxcblx0YnVpbGRMaW5rKHt0aXRsZSwgaHJlZiwgY2xpY2ssIGNsYXNzbmFtZX0pIHtcblx0XHRjb25zdCBhID0gJCgnPGE+Jylcblx0XHRcdC5hdHRyKHtcblx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdGhyZWYsXG5cdFx0XHRcdHRhcmdldDogJ19ibGFuaycsXG5cdFx0XHRcdHJlbDogJ25vb3BlbmVyIG5vcmVmZXJyZXInLFxuXHRcdFx0fSlcblx0XHRcdC50ZXh0KHRpdGxlKTtcblx0XHRpZiAoY2xpY2spIHtcblx0XHRcdGEub24oJ2NsaWNrJywgY2xpY2spO1xuXHRcdH1cblx0XHRpZiAoY2xhc3NuYW1lKSB7XG5cdFx0XHRhLmFkZENsYXNzKGNsYXNzbmFtZSk7XG5cdFx0fVxuXHRcdHJldHVybiAkKCc8c3Bhbj4nKS5hZGRDbGFzcygndG9vbHMtcmVkaXJlY3RfbGluaycpLmFwcGVuZChhKTtcblx0fSxcblx0YWRkTWV0aG9kcygkcGFyZW50LCBtZXRob2RzKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0bGV0ICRjb250YWluZXIgPSAkcGFyZW50LmZpbmQoJz4gLnRvb2xzLXJlZGlyZWN0X21ldGhvZHMnKTtcblx0XHRjb25zdCBtZXRob2RFeGlzdCA9ICh7aHJlZn0pID0+IHtcblx0XHRcdHJldHVybiAkY29udGFpbmVyLmZpbmQoYGFbaHJlZj0ke0pTT04uc3RyaW5naWZ5KGhyZWYpfV1gKS5sZW5ndGggPiAwO1xuXHRcdH07XG5cdFx0aWYgKCRjb250YWluZXIubGVuZ3RoID09PSAwKSB7XG5cdFx0XHQkY29udGFpbmVyID0gJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ3Rvb2xzLXJlZGlyZWN0X21ldGhvZHMnKS5hcHBlbmRUbygkcGFyZW50KTtcblx0XHR9XG5cdFx0Zm9yIChjb25zdCBtZXRob2Qgb2YgbWV0aG9kcykge1xuXHRcdFx0aWYgKCFtZXRob2RFeGlzdChtZXRob2QpKSB7XG5cdFx0XHRcdHNlbGYuYnVpbGRMaW5rKG1ldGhvZCkuYXBwZW5kVG8oJGNvbnRhaW5lcik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRidWlsZFNlbGVjdGlvbihtYWluLCBtZXRkLCBtdCwgZHNhYikge1xuXHRcdGNvbnN0IGNvbnQgPSAkKCc8c3Bhbj4nKTtcblx0XHRjb25zdCBzZWxlID0gJCgnPGlucHV0PicpLmF0dHIoJ3R5cGUnLCAnY2hlY2tib3gnKS5hcHBlbmRUbyhjb250KTtcblx0XHR0aGlzLmJ1aWxkTGluayhtYWluKS5hcHBlbmRUbyhjb250KTtcblx0XHR0aGlzLmFkZE1ldGhvZHMoY29udCwgbWV0ZCk7XG5cdFx0c2VsZS5kYXRhKCdwYWdlLXRpdGxlJywgbXQpO1xuXHRcdGlmIChkc2FiKSB7XG5cdFx0XHRzZWxlLnByb3AoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG5cdFx0fVxuXHRcdHJldHVybiBjb250O1xuXHR9LFxuXHRsb2FkVmlldyhyZWxvYWQpIHtcblx0XHRjb25zdCAkY29udGFpbmVyID0gdGhpcy50YWJzLnZpZXcuY29udDtcblx0XHR0aGlzLmxvYWRUYWJDb250KFxuXHRcdFx0J3ZpZXcnLFxuXHRcdFx0ZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5sb2FkUmVkaXJlY3Qod2dQYWdlTmFtZSwgJGNvbnRhaW5lciwgMCk7XG5cdFx0XHR9LFxuXHRcdFx0cmVsb2FkXG5cdFx0KTtcblx0fSxcblx0bG9hZENyZWF0ZShyZWxvYWQpIHtcblx0XHR0aGlzLmxvYWRUYWJDb250KFxuXHRcdFx0J2NyZWF0ZScsXG5cdFx0XHRmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmZpbmRSZWRpcmVjdCh3Z1BhZ2VOYW1lKTtcblx0XHRcdH0sXG5cdFx0XHRyZWxvYWRcblx0XHQpO1xuXHR9LFxuXHRsb2FkUmVkaXJlY3QocGFnZW5hbWUsIGNvbnRhaW5lciwgZGVlcCwgbG9hZGVkKSB7XG5cdFx0dGhpcy5sb2FkaW5nKGNvbnRhaW5lcik7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0Y29uc3QgZGVmZXJyZWQgPSAkLkRlZmVycmVkKCk7XG5cdFx0Y29uc3QgdG9wID0gZGVlcCA/ICQoJzxkbD4nKS5hcHBlbmRUbyhjb250YWluZXIpIDogY29udGFpbmVyO1xuXHRcdGlmICghbG9hZGVkKSB7XG5cdFx0XHRsb2FkZWQgPSB7fTtcblx0XHRcdGxvYWRlZFtwYWdlbmFtZV0gPSB0cnVlO1xuXHRcdH1cblx0XHRjb25zdCBvbkNsaWNrRml4ID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRjb25zdCBlbnRyeSA9ICQodGhpcykucGFyZW50cygnZGQsIHAnKS5maXJzdCgpO1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHNlbGYuY2xpY2tBY3Rpb24oZW50cnksIHRoaXMuZml4KTtcblx0XHR9O1xuXHRcdHZvaWQgYXBpXG5cdFx0XHQucG9zdCh7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0cHJvcDogJ3JlZGlyZWN0cycsXG5cdFx0XHRcdHRpdGxlczogcGFnZW5hbWUsXG5cdFx0XHRcdHJkbGltaXQ6ICdtYXgnLFxuXHRcdFx0fSlcblx0XHRcdC50aGVuKCh7cXVlcnl9KSA9PiB7XG5cdFx0XHRcdHNlbGYubG9hZGVkKGNvbnRhaW5lcik7XG5cdFx0XHRcdGxldCBoYXNfcmVkaXJlY3QgPSBmYWxzZTtcblx0XHRcdFx0Y29uc3QgZGVzYyA9ICQoJ3AuZGVzYycsIHNlbGYudGFicy52aWV3LmNvbnQpO1xuXHRcdFx0XHRjb25zdCBtYXhpbXVtUmVkaXJlY3REZXB0aCA9IDEwO1xuXHRcdFx0XHRmb3IgKGNvbnN0IHBhZ2Ugb2YgcXVlcnkucGFnZXMpIHtcblx0XHRcdFx0XHRpZiAocGFnZS5yZWRpcmVjdHMpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHtyZWRpcmVjdHN9ID0gcGFnZTtcblx0XHRcdFx0XHRcdGZvciAoY29uc3Qge3RpdGxlfSBvZiByZWRpcmVjdHMpIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgcmR0aXRsZSA9IHRpdGxlO1xuXHRcdFx0XHRcdFx0XHRjb25zdCB1bHRpdGxlID0gcmR0aXRsZS5yZXBsYWNlKC8gL2csICdfJyk7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGVudHJ5ID0gKGRlZXAgPyAkKCc8ZGQ+JykgOiAkKCc8cD4nKSkuYXBwZW5kVG8odG9wKTtcblx0XHRcdFx0XHRcdFx0Y29uc3QgbWV0aG9kcyA9IFtcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRocmVmOiBtdy51dGlsLmdldFVybCh1bHRpdGxlLCB7YWN0aW9uOiAnZWRpdCd9KSxcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKCdyZWRpZWRpdCcpLFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdF07XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGlzQ3ljbGVSZWRpcmVjdCA9IHJkdGl0bGUgaW4gbG9hZGVkO1xuXHRcdFx0XHRcdFx0XHRsb2FkZWRbcmR0aXRsZV0gPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRpZiAoIWlzQ3ljbGVSZWRpcmVjdCAmJiBkZWVwKSB7XG5cdFx0XHRcdFx0XHRcdFx0bWV0aG9kc1ttZXRob2RzLmxlbmd0aF0gPSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRocmVmOiAnI2ZpeC1yZWRpcmVjdCcsXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgndGFidmlld2ZpeCcpLFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xpY2s6IG9uQ2xpY2tGaXgsXG5cdFx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjb25zdCAkY29udGFpbmVyID0gc2VsZlxuXHRcdFx0XHRcdFx0XHRcdC5idWlsZFNlbGVjdGlvbihcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aHJlZjogbXcudXRpbC5nZXRVcmwodWx0aXRsZSwge3JlZGlyZWN0OiAnbm8nfSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiByZHRpdGxlLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdG1ldGhvZHMsXG5cdFx0XHRcdFx0XHRcdFx0XHR1bHRpdGxlLFxuXHRcdFx0XHRcdFx0XHRcdFx0IWRlZXBcblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0LmFwcGVuZFRvKGVudHJ5KTtcblx0XHRcdFx0XHRcdFx0aWYgKGlzQ3ljbGVSZWRpcmVjdCkge1xuXHRcdFx0XHRcdFx0XHRcdCRjb250YWluZXIuYXBwZW5kKGA8c3BhbiBjbGFzcz1cImVycm9yXCI+JHtnZXRNZXNzYWdlKCdlcnJjeWNsZXJlZGlyZWN0Jyl9PC9zcGFuPmApO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGRlZXAgPCBtYXhpbXVtUmVkaXJlY3REZXB0aCkge1xuXHRcdFx0XHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gc2VsZi5sb2FkUmVkaXJlY3QocmR0aXRsZSwgZW50cnksIGRlZXAgKyAxLCBsb2FkZWQpO1xuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGhhc19yZWRpcmVjdCA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGhhc19yZWRpcmVjdCA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoaGFzX3JlZGlyZWN0ICYmIGRlZXAgPT09IDEpIHtcblx0XHRcdFx0XHRzZWxmLmFkZE1ldGhvZHMoZGVzYywgW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRocmVmOiAnI3NlbGVjdC1hbGwnLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgnc2VsZWN0YWxsJyksXG5cdFx0XHRcdFx0XHRcdGNsaWNrKGV2ZW50KSB7XG5cdFx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRzZWxmLnNlbGVjdEFsbChzZWxmLnRhYnMudmlldy5jb250KTtcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGhyZWY6ICcjc2VsZWN0LWludmVyc2UnLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgnc2VsZWN0aW52ZXJzZScpLFxuXHRcdFx0XHRcdFx0XHRjbGljayhldmVudCkge1xuXHRcdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5zZWxlY3RJbnZlcnNlKHNlbGYudGFicy52aWV3LmNvbnQpO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0aHJlZjogJyNmaXgtc2VsZWN0ZWQnLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgndGFidmlld2ZpeCcpLFxuXHRcdFx0XHRcdFx0XHRjbGljayhldmVudCkge1xuXHRcdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5zZWxlY3RBY3Rpb24oc2VsZi50YWJzLnZpZXcuY29udCwgc2VsZi5maXgpO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRdKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoaGFzX3JlZGlyZWN0KSB7XG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZXNvbHZlV2l0aChzZWxmKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlamVjdFdpdGgoc2VsZik7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdHJldHVybiBkZWZlcnJlZC5wcm9taXNlKCk7XG5cdH0sXG5cdGZpbmRWYXJpYW50cyhwYWdlbmFtZSwgdGl0bGVzKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0Y29uc3Qgc3VmZml4UmVnID0gL14uKz8oKO+8iHxbIF9dXFwoKS4rPyhbKe+8iV0pKSQvO1xuXHRcdGxldCByZXRUaXRsZXMgPSBbXTtcblx0XHRjb25zdCBkZWZlcnJlZHMgPSBbXTtcblx0XHRmb3IgKGNvbnN0IHZhcmlhbnQgb2YgVkFSSUFOVFMpIHtcblx0XHRcdGNvbnN0IHhociA9IGFwaVxuXHRcdFx0XHQucG9zdCh7XG5cdFx0XHRcdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0XHRwYWdlOiBwYWdlbmFtZSxcblx0XHRcdFx0XHRwcm9wOiAnZGlzcGxheXRpdGxlJyxcblx0XHRcdFx0XHR1c2VsYW5nOiB2YXJpYW50LFxuXHRcdFx0XHRcdHZhcmlhbnQsXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC50aGVuKCh7cGFyc2V9KSA9PiB7XG5cdFx0XHRcdFx0Y29uc3Qge2Rpc3BsYXl0aXRsZX0gPSBwYXJzZTtcblx0XHRcdFx0XHQvLyBFeGFtcGxlOlxuXHRcdFx0XHRcdC8vIC0gQmVmb3JlOiA8c3BhbiBjbGFzcz1cIm13LXBhZ2UtdGl0bGUtbmFtZXNwYWNlXCI+5pyJ5YW95qGj5qGI6aaGPC9zcGFuPjxzcGFuIGNsYXNzPVwibXctcGFnZS10aXRsZS1zZXBhcmF0b3JcIj46PC9zcGFuPjxzcGFuIGNsYXNzPVwibXctcGFnZS10aXRsZS1tYWluXCI+5rKZ55uSPC9zcGFuPlxuXHRcdFx0XHRcdC8vIC0gQWZ0ZXI6IOacieWFveaho+ahiOmmhjrmspnnm5Jcblx0XHRcdFx0XHRsZXQgdGl0bGUgPSAkKCc8c3Bhbj4nKS5hcHBlbmQoZGlzcGxheXRpdGxlKS5lcSgwKS50ZXh0KCkudHJpbSgpO1xuXHRcdFx0XHRcdHRpdGxlID0gZml4TmFtZXNwYWNlKHRpdGxlKTtcblx0XHRcdFx0XHRzZXRSZWRpcmVjdFRleHRTdWZmaXgodGl0bGUsICd7e+eugOe5gemHjeWumuWQkX19JywgU1VGRklYX0FQUEVORCk7XG5cdFx0XHRcdFx0cmV0dXJuIHRpdGxlO1xuXHRcdFx0XHR9KTtcblx0XHRcdGRlZmVycmVkc1tkZWZlcnJlZHMubGVuZ3RoXSA9IHhocjtcblx0XHR9XG5cdFx0cmV0dXJuICQud2hlbiguLi5kZWZlcnJlZHMpLnRoZW4oKC4uLmFyZ3MpID0+IHtcblx0XHRcdGNvbnN0IHN1ZmZpeGVzID0gW107XG5cdFx0XHRmb3IgKGNvbnN0IHRpdGxlIG9mIGFyZ3MpIHtcblx0XHRcdFx0bGV0IHN1ZmZpeDtcblx0XHRcdFx0Ly8gZmluZCB0aXRsZSBzdWZmaXgsXG5cdFx0XHRcdC8vIGZvciBleGFtcGxlIFwiICjmtY7ljZfluIIpXCIgdG8gXCLluILkuK3ljLogKOa1juWNl+W4gilcIlxuXHRcdFx0XHRjb25zdCBzdWZmaXhBcnIgPSBzdWZmaXhSZWcuZXhlYyh0aXRsZSk7XG5cdFx0XHRcdGlmIChzdWZmaXhBcnIgJiYgc3VmZml4QXJyLmxlbmd0aCA9PT0gMikge1xuXHRcdFx0XHRcdFssIHN1ZmZpeF0gPSBzdWZmaXhBcnI7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c3VmZml4ID0gJyc7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0VGl0bGVzW3JldFRpdGxlcy5sZW5ndGhdID0gdGl0bGU7XG5cdFx0XHRcdHN1ZmZpeGVzW3N1ZmZpeGVzLmxlbmd0aF0gPSBzdWZmaXg7XG5cdFx0XHR9XG5cdFx0XHQvLyBhcHBlbmQgc3VmZml4ZXNcblx0XHRcdGZvciAoY29uc3Qgc3VmZml4IG9mIHVuaXF1ZUFycmF5KHN1ZmZpeGVzKSkge1xuXHRcdFx0XHRyZXRUaXRsZXMgPSBbXG5cdFx0XHRcdFx0Li4ucmV0VGl0bGVzLFxuXHRcdFx0XHRcdC4uLnRpdGxlcy5tYXAoKHRpdGxlKSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCBtb2RpZmllZFRpdGxlID0gZml4TmFtZXNwYWNlKHRpdGxlKTtcblx0XHRcdFx0XHRcdHJldHVybiBzdWZmaXhSZWcudGVzdChtb2RpZmllZFRpdGxlKSA/IG1vZGlmaWVkVGl0bGUgOiBtb2RpZmllZFRpdGxlICsgc3VmZml4O1xuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRdO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gc2VsZi5maW5kTm90RXhpc3RzKHVuaXF1ZUFycmF5KHJldFRpdGxlcykpOyAvLyBSZXBsYWNlIFNldCB3aXRoIHVuaXF1ZUFycmF5LCBhdm9pZGluZyBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdFx0fSk7XG5cdH0sXG5cdGZpbmROb3RFeGlzdHModGl0bGVzKSB7XG5cdFx0Y29uc3QgZGVmZXJyZWRzID0gW107XG5cdFx0Y29uc3QgZXhjbHVkZXMgPSBbJ+eUqOWtl+aooeW8jyddO1xuXHRcdGxldCBhbGx0aXRsZXMgPSBbXTtcblx0XHRmb3IgKGNvbnN0IHZhcmlhbnQgb2YgVkFSSUFOVFMpIHtcblx0XHRcdGRlZmVycmVkc1tkZWZlcnJlZHMubGVuZ3RoXSA9IGFwaS5nZXQoe1xuXHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHRleHQ6IHRpdGxlcyxcblx0XHRcdFx0cHJvcDogJ3RleHQnLFxuXHRcdFx0XHR0aXRsZTogJ01lZGlhV2lraTpHYWRnZXQtVG9vbHNSZWRpcmVjdC5qcy8tJyxcblx0XHRcdFx0Y29udGVudG1vZGVsOiAnd2lraXRleHQnLFxuXHRcdFx0XHR1c2VsYW5nOiB2YXJpYW50LFxuXHRcdFx0XHR2YXJpYW50LFxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdHJldHVybiAkLndoZW4oLi4uZGVmZXJyZWRzKS50aGVuKCguLi5hcmdzKSA9PiB7XG5cdFx0XHRmb3IgKGNvbnN0IFt7cGFyc2V9XSBvZiBhcmdzKSB7XG5cdFx0XHRcdGFsbHRpdGxlcyA9IFsuLi5hbGx0aXRsZXMsIC4uLiQocGFyc2UudGV4dCkudGV4dCgpLnRyaW0oKS5zcGxpdCgnfCcpXTtcblx0XHRcdH1cblx0XHRcdGFsbHRpdGxlcyA9IGFsbHRpdGxlcy5maWx0ZXIoKHYsIGksIGFycikgPT4ge1xuXHRcdFx0XHRyZXR1cm4gYXJyLmluZGV4T2YodikgPT09IGk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBhcGlcblx0XHRcdFx0LnBvc3Qoe1xuXHRcdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdFx0cHJvcDogJ2luZm8nLFxuXHRcdFx0XHRcdHRpdGxlczogYWxsdGl0bGVzLFxuXHRcdFx0XHR9KVxuXHRcdFx0XHQudGhlbigoe3F1ZXJ5fSkgPT4ge1xuXHRcdFx0XHRcdHRpdGxlcyA9IFtdO1xuXHRcdFx0XHRcdGZvciAoY29uc3QgcGFnZSBvZiBxdWVyeS5wYWdlcykge1xuXHRcdFx0XHRcdFx0Y29uc3Qge3RpdGxlfSA9IHBhZ2U7XG5cdFx0XHRcdFx0XHRpZiAocGFnZS5taXNzaW5nICYmICFleGNsdWRlcy5pbmNsdWRlcyh0aXRsZSkpIHtcblx0XHRcdFx0XHRcdFx0aWYgKHRpdGxlIGluIHJlZGlyZWN0RXhjbHVkZXMpIHtcblx0XHRcdFx0XHRcdFx0XHQvLyBleGNsdWRlIHNwZWNpYWwgdGl0bGVzXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHRpdGxlc1t0aXRsZXMubGVuZ3RoXSA9IHRpdGxlO1xuXHRcdFx0XHRcdFx0XHRpZiAoSVNfQ0FURUdPUlkpIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCB0YXJnZXQgPSB3Z1BhZ2VOYW1lLnJlcGxhY2UoL15DYXRlZ29yeTovLCAnJyk7XG5cdFx0XHRcdFx0XHRcdFx0c2V0UmVkaXJlY3RUZXh0U3VmZml4KHRpdGxlLCAne3vliIbnsbvph43lrprlkJF8JDF9fScucmVwbGFjZSgnJDEnLCB0YXJnZXQpKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQvLyBvbmx5IHNldCBkZWZhdWx0IHN1ZmZpeFxuXHRcdFx0XHRcdFx0XHRzZXRSZWRpcmVjdFRleHRTdWZmaXgodGl0bGUsICd7e+WIq+WQjemHjeWumuWQkX19JywgU1VGRklYX1NFVERFRkFVTFQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdGl0bGVzO1xuXHRcdFx0XHR9KTtcblx0XHR9KTtcblx0fSxcblx0ZmluZFJlZGlyZWN0KHBhZ2VuYW1lKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0Y29uc3QgZnJjRGVmZXJyZWRzID0gW107XG5cdFx0Y29uc3QgY29udGFpbmVyID0gc2VsZi50YWJzLmNyZWF0ZS5jb250O1xuXHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdGNvbnN0ICRjb250ZW50ID0gJGJvZHkuZmluZCgnI213LWNvbnRlbnQtdGV4dCA+IGRpdi5tdy1wYXJzZXItb3V0cHV0Jyk7XG5cdFx0Y29uc3QgZGVmZXJyZWQgPSAkLkRlZmVycmVkKCk7XG5cdFx0bGV0IHRpdGxlcyA9IFtdO1xuXHRcdHNlbGYubG9hZGluZyhjb250YWluZXIpO1xuXHRcdGZvciAoY29uc3QgY2FsbGJhY2sgb2YgZmluZFJlZGlyZWN0Q2FsbGJhY2tzKSB7XG5cdFx0XHRjb25zdCByZXQgPSBjYWxsYmFjayhwYWdlbmFtZSwgJGNvbnRlbnQsIHRpdGxlcyk7XG5cdFx0XHRpZiAodHlwZW9mIHJldCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0dGl0bGVzW3RpdGxlcy5sZW5ndGhdID0gcmV0O1xuXHRcdFx0fSBlbHNlIGlmICgnZG9uZScgaW4gcmV0KSB7XG5cdFx0XHRcdC8vIGlzIERlZmVycmVkXG5cdFx0XHRcdGZyY0RlZmVycmVkc1tmcmNEZWZlcnJlZHMubGVuZ3RoXSA9IHJldDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRpdGxlcyA9IHVuaXF1ZUFycmF5KFsuLi50aXRsZXMsIC4uLnJldF0pOyAvLyBSZXBsYWNlIFNldCB3aXRoIHVuaXF1ZUFycmF5LCBhdm9pZGluZyBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIHJlbW92ZSBhbGwgZW1wdHkgdGl0bGVzXG5cdFx0dGl0bGVzID0gdGl0bGVzLm1hcCgodGl0bGUpID0+IHtcblx0XHRcdHJldHVybiB0aXRsZSB8fCBudWxsO1xuXHRcdH0pO1xuXHRcdGNvbnN0IG9uQ2xpY2tDcmVhdGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRcdGNvbnN0IGVudHJ5ID0gJCh0aGlzKS5wYXJlbnRzKCdwOmZpcnN0Jyk7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0c2VsZi5jbGlja0FjdGlvbihlbnRyeSwgc2VsZi5jcmVhdGUpO1xuXHRcdH07XG5cdFx0Ly8gaGFuZGxlcyB0aGUgZGVmZXJyZWQgY2FsbGJhY2tzXG5cdFx0dm9pZCAkLndoZW4oLi4uZnJjRGVmZXJyZWRzKVxuXHRcdFx0LnRoZW4oKC4uLmFyZ3MpID0+IHtcblx0XHRcdFx0Zm9yIChjb25zdCByZXQgb2YgYXJncykge1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgcmV0ID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdFx0dGl0bGVzW3RpdGxlcy5sZW5ndGhdID0gcmV0O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aXRsZXMgPSB1bmlxdWVBcnJheShbLi4udGl0bGVzLCAuLi5yZXRdKTsgLy8gUmVwbGFjZSBTZXQgd2l0aCB1bmlxdWVBcnJheSwgYXZvaWRpbmcgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gc2VsZi5maW5kVmFyaWFudHMocGFnZW5hbWUsIHRpdGxlcyk7XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oKGZ2dGl0bGVzKSA9PiB7XG5cdFx0XHRcdC8vIGJ1aWxkIEhUTUxcblx0XHRcdFx0c2VsZi5sb2FkZWQoY29udGFpbmVyKTtcblx0XHRcdFx0Zm9yIChjb25zdCB0aXRsZSBvZiBmdnRpdGxlcykge1xuXHRcdFx0XHRcdGNvbnN0IHVsdGl0bGUgPSB0aXRsZS5yZXBsYWNlKCcgJywgJ18nKTtcblx0XHRcdFx0XHRjb25zdCBlbnRyeSA9ICQoJzxwPicpLmFwcGVuZFRvKGNvbnRhaW5lcik7XG5cdFx0XHRcdFx0c2VsZi5idWlsZFNlbGVjdGlvbihcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0aHJlZjogbXcudXRpbC5nZXRVcmwodWx0aXRsZSwge2FjdGlvbjogJ2VkaXQnLCByZWRsaW5rOiAnMSd9KSxcblx0XHRcdFx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdFx0XHRcdGNsYXNzbmFtZTogJ25ldycsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0aHJlZjogJyNjcmVhdGUtcmVkaXJlY3QnLFxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKCd0YWJjcmVhdGV0aXRsZScpLFxuXHRcdFx0XHRcdFx0XHRcdGNsaWNrOiBvbkNsaWNrQ3JlYXRlLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcdHVsdGl0bGUsXG5cdFx0XHRcdFx0XHRmYWxzZVxuXHRcdFx0XHRcdCkuYXBwZW5kVG8oZW50cnkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGRlc2MgPSAkKCdwLmRlc2MnLCBjb250YWluZXIpO1xuXHRcdFx0XHRpZiAoZnZ0aXRsZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHNlbGYuYWRkTWV0aG9kcyhkZXNjLCBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGhyZWY6ICcjc2VsZWN0LWFsbCcsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKCdzZWxlY3RhbGwnKSxcblx0XHRcdFx0XHRcdFx0Y2xpY2soZXZlbnQpIHtcblx0XHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdHNlbGYuc2VsZWN0QWxsKGNvbnRhaW5lcik7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRocmVmOiAnI3NlbGVjdC1pbnZlcnNlJyxcblx0XHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ3NlbGVjdGludmVyc2UnKSxcblx0XHRcdFx0XHRcdFx0Y2xpY2soZXZlbnQpIHtcblx0XHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdHNlbGYuc2VsZWN0SW52ZXJzZShjb250YWluZXIpO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0aHJlZjogJyNjcmVhdGUtc2VsZWN0ZWQnLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgndGFiY3JlYXRldGl0bGUnKSxcblx0XHRcdFx0XHRcdFx0Y2xpY2soZXZlbnQpIHtcblx0XHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdHNlbGYuc2VsZWN0QWN0aW9uKGNvbnRhaW5lciwgc2VsZi5jcmVhdGUpO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRdKTtcblx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlc29sdmVXaXRoKHNlbGYsIFtmdnRpdGxlc10pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVqZWN0V2l0aChzZWxmLCBbZnZ0aXRsZXNdKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0cmV0dXJuIGRlZmVycmVkLnByb21pc2UoKTtcblx0fSxcbn07XG5cbmV4cG9ydCB7VG9vbHNSZWRpcmVjdCwgZmluZFJlZGlyZWN0Q2FsbGJhY2ssIGZpbmRSZWRpcmVjdEJ5U2VsZWN0b3IsIHNldFJlZGlyZWN0VGV4dFN1ZmZpeH07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBUb29sc1JlZGlyZWN0LyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiY29uc3QgZml4TmFtZXNwYWNlID0gKHRpdGxlOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRjb25zdCB7d2dOYW1lc3BhY2VJZHMsIHdnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRjb25zdCBuc1ByZWZpeGVzID0gW107XG5cdGxldCBuc0Nhbm9uUHJlZml4OiBzdHJpbmc7XG5cdGxldCBuc1ByZWZpeFBhdHRlcm46IFJlZ0V4cDtcblxuXHRmb3IgKGNvbnN0IFt0ZXh0LCBuc2lkXSBvZiBPYmplY3QuZW50cmllcyh3Z05hbWVzcGFjZUlkcykpIHtcblx0XHRpZiAobnNpZCA9PT0gd2dOYW1lc3BhY2VOdW1iZXIgJiYgISF0ZXh0KSB7XG5cdFx0XHRuc1ByZWZpeGVzW25zUHJlZml4ZXMubGVuZ3RoXSA9IHRleHQ7XG5cdFx0fVxuXHR9XG5cblx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyID09PSAwKSB7XG5cdFx0Ly8gYXJ0aWNsZXNcblx0XHRuc0Nhbm9uUHJlZml4ID0gJyc7XG5cdFx0bnNQcmVmaXhQYXR0ZXJuID0gL14vO1xuXHR9IGVsc2Uge1xuXHRcdG5zQ2Fub25QcmVmaXggPSBgJHt3Z1BhZ2VOYW1lLnNwbGl0KCc6JylbMF19OmA7XG5cdFx0bnNQcmVmaXhQYXR0ZXJuID0gbmV3IFJlZ0V4cChgXigke25zUHJlZml4ZXMuam9pbignfCcpfSk6YCwgJ2knKTtcblx0fVxuXG5cdGlmICh3Z05hbWVzcGFjZU51bWJlciA9PT0gMCkge1xuXHRcdC8vIGRvIG5vdGhpbmcgaWYgaXQncyBhcnRpY2xlc1xuXHRcdHJldHVybiB0aXRsZTtcblx0fSBlbHNlIGlmIChuc1ByZWZpeFBhdHRlcm4udGVzdCh0aXRsZSkpIHtcblx0XHQvLyBjYW5vbml6ZSB0aGUgbmFtZXNwYWNlXG5cdFx0cmV0dXJuIHRpdGxlLnJlcGxhY2UobnNQcmVmaXhQYXR0ZXJuLCBuc0Nhbm9uUHJlZml4KTtcblx0fVxuXHQvLyBkb24ndCBoYXZlIGEgbmFtZXNwYWNlXG5cdHJldHVybiBuc0Nhbm9uUHJlZml4ICsgdGl0bGU7XG59O1xuXG5leHBvcnQge2ZpeE5hbWVzcGFjZX07XG4iLCAiaW1wb3J0IHR5cGUge01lc3NhZ2VLZXl9IGZyb20gJy4uL3R5cGVzJztcblxuY29uc3QgZ2V0TWVzc2FnZSA9IChrZXk6IE1lc3NhZ2VLZXkgZXh0ZW5kcyBgdG9vbHNyZWRpcmVjdC0ke2luZmVyIFB9YCA/IFAgOiBuZXZlciwgLi4uYXJnczogc3RyaW5nW10pOiBzdHJpbmcgPT4ge1xuXHRjb25zdCBmdWxsS2V5OiBzdHJpbmcgPSBgdG9vbHNyZWRpcmVjdC0ke2tleX1gO1xuXHQvLyBNZXNzYWdlcyB0aGF0IGNhbiBiZSB1c2VkIGhlcmU6XG5cdC8vICogc2VlIG1lc3NhZ2VzLnRzXG5cdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0cmV0dXJuIGFyZ3MubGVuZ3RoID8gbXcubWVzc2FnZShmdWxsS2V5LCAuLi5hcmdzKS5wYXJzZSgpIDogbXcubWVzc2FnZShmdWxsS2V5KS5wbGFpbigpO1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgdHlwZSB7TWVzc2FnZUtleX0gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IHt3Z1VzZXJMYW5ndWFnZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmNvbnN0IHNldE1lc3NhZ2VzID0gKCk6IHZvaWQgPT4ge1xuXHRjb25zdCBERUZBVUxUX01FU1NBR0VTX0hBTlMgPSB7XG5cdFx0J3Rvb2xzcmVkaXJlY3QtYnRudGl0bGUnOiAn6YeN5a6a5ZCRJyxcblx0XHQndG9vbHNyZWRpcmVjdC1idG5kZXNjJzogJ+WIm+W7uuWSjOeuoeeQhuatpOmhtemdoueahOmHjeWumuWQkScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtZGxndGl0bGUnOiAn5Yib5bu65ZKM566h55CG6YeN5a6a5ZCRJyxcblx0XHQndG9vbHNyZWRpcmVjdC1yZWRpbG9hZGluZyc6ICfmlbDmja7liqDovb3kuK3vvIzor7fnqI3lgJnigKbigKYnLFxuXHRcdCd0b29sc3JlZGlyZWN0LXJlZGllZGl0JzogJ+e8lui+kScsXG5cdFx0J3Rvb2xzcmVkaXJlY3Qtc2VsZWN0YWxsJzogJ+WFqOmAiScsXG5cdFx0J3Rvb2xzcmVkaXJlY3Qtc2VsZWN0aW52ZXJzZSc6ICflj43pgIknLFxuXHRcdCd0b29sc3JlZGlyZWN0LXRhYnZpZXd0aXRsZSc6ICfmn6XnnIsnLFxuXHRcdCd0b29sc3JlZGlyZWN0LXRhYnZpZXdkZXNjJzogJ+S7peS4i+aYr+aMh+WQkeatpOmhtemdoueahOmHjeWumuWQkemhte+8micsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld25vdGZvdW5kJzogJ+ayoeacieaJvuWIsOS7u+S9leaMh+WQkeatpOmhtemdoueahOmHjeWumuWQkemhteOAgicsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld211bHRpJzogJ+WkmumHjScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld2ZpeCc6ICfkv67lpI0nLFxuXHRcdCd0b29sc3JlZGlyZWN0LWZpeGxvYWRpbmcnOiAn6K+356iN5YCZ77yM5q2j5Zyo6Ieq5Yqo5L+u5aSN6YeN5a6a5ZCR4oCm4oCmJyxcblx0XHQndG9vbHNyZWRpcmVjdC1maXh0ZXh0JzogJyNSRURJUkVDVCBbWyQxXV0nLFxuXHRcdCd0b29sc3JlZGlyZWN0LWZpeHN1bW1hcnknOiAn57yW6L6R5bel5YW377ya5L+u5aSN5aSa6YeN6YeN5a6a5ZCRJyxcblx0XHQndG9vbHNyZWRpcmVjdC10YWJjcmVhdGV0aXRsZSc6ICfliJvlu7onLFxuXHRcdCd0b29sc3JlZGlyZWN0LXRhYmNyZWF0ZWRlc2MnOiAn5Lul5LiL5piv5bCa5pyq5Yib5bu655qE6YeN5a6a5ZCR6aG177yaJyxcblx0XHQndG9vbHNyZWRpcmVjdC10YWJjcmVhdGVub3Rmb3VuZCc6ICfmsqHmnInmib7liLDlj6/ku6XliJvlu7rnmoTph43lrprlkJHpobXjgIInLFxuXHRcdCd0b29sc3JlZGlyZWN0LXRhYmNyZWF0ZWFsbCc6ICflhajpg6jliJvlu7onLFxuXHRcdCd0b29sc3JlZGlyZWN0LWNyZWF0ZWxvYWRpbmcnOiAn6K+356iN5YCZ77yM5q2j5Zyo6Ieq5Yqo5Yib5bu66YeN5a6a5ZCR4oCm4oCmJyxcblx0XHQndG9vbHNyZWRpcmVjdC1jcmVhdGV0ZXh0JzogJyNSRURJUkVDVCBbWyQxXV0nLFxuXHRcdCd0b29sc3JlZGlyZWN0LWNyZWF0ZXRleHQtY2F0ZWdvcnknOiAne3vliIbnsbvph43lrprlkJF8JDF9fScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtY3JlYXRlc3VtbWFyeSc6ICfnvJbovpHlt6XlhbfvvJroh6rliqjliJvlu7rph43lrprlkJHliLBbWyQxXV0nLFxuXHRcdCd0b29sc3JlZGlyZWN0LWVycmN5Y2xlcmVkaXJlY3QnOiAn5peg5rOV6Ieq5Yqo5L+u5aSN77ya5Y+R546w5b6q546v6YeN5a6a5ZCRJyxcblx0XHQndG9vbHNyZWRpcmVjdC1yZWZyZXNoJzogJ+WIt+aWsCcsXG5cdH0gc2F0aXNmaWVzIFJlY29yZDxNZXNzYWdlS2V5LCBzdHJpbmc+O1xuXHRjb25zdCBERUZBVUxUX01FU1NBR0VTX0hBTlQgPSB7XG5cdFx0J3Rvb2xzcmVkaXJlY3QtYnRudGl0bGUnOiAn6YeN5paw5bCO5ZCRJyxcblx0XHQndG9vbHNyZWRpcmVjdC1idG5kZXNjJzogJ+WJteW7uuWSjOeuoeeQhuatpOmggemdoueahOmHjeaWsOWwjuWQkScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtZGxndGl0bGUnOiAn5Ym15bu65ZKM566h55CG6YeN5paw5bCO5ZCRJyxcblx0XHQndG9vbHNyZWRpcmVjdC1yZWRpbG9hZGluZyc6ICfmlbjmk5rliqDovInkuK3vvIzoq4vnqI3lgJnigKbigKYnLFxuXHRcdCd0b29sc3JlZGlyZWN0LXJlZGllZGl0JzogJ+e3qOi8rycsXG5cdFx0J3Rvb2xzcmVkaXJlY3Qtc2VsZWN0YWxsJzogJ+WFqOmBuCcsXG5cdFx0J3Rvb2xzcmVkaXJlY3Qtc2VsZWN0aW52ZXJzZSc6ICflj43pgbgnLFxuXHRcdCd0b29sc3JlZGlyZWN0LXRhYnZpZXd0aXRsZSc6ICfmn6XnnIsnLFxuXHRcdCd0b29sc3JlZGlyZWN0LXRhYnZpZXdkZXNjJzogJ+S7peS4i+aYr+aMh+WQkeatpOmggemdoueahOmHjeaWsOWwjuWQkemgge+8micsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld25vdGZvdW5kJzogJ+aykuacieaJvuWIsOS7u+S9leaMh+WQkeatpOmggemdoueahOmHjeaWsOWwjuWQkemggeOAgicsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld211bHRpJzogJ+WkmumHjScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld2ZpeCc6ICfkv67lvqknLFxuXHRcdCd0b29sc3JlZGlyZWN0LWZpeGxvYWRpbmcnOiAn6KuL56iN5YCZ77yM5q2j5Zyo6Ieq5YuV5L+u5b6p6YeN5paw5bCO5ZCR4oCm4oCmJyxcblx0XHQndG9vbHNyZWRpcmVjdC1maXh0ZXh0JzogJyNSRURJUkVDVCBbWyQxXV0nLFxuXHRcdCd0b29sc3JlZGlyZWN0LWZpeHN1bW1hcnknOiAn57eo6Lyv5bel5YW377ya5L+u5b6p5aSa6YeN6YeN5paw5bCO5ZCRJyxcblx0XHQndG9vbHNyZWRpcmVjdC10YWJjcmVhdGV0aXRsZSc6ICflibXlu7onLFxuXHRcdCd0b29sc3JlZGlyZWN0LXRhYmNyZWF0ZWRlc2MnOiAn5Lul5LiL5piv5bCa5pyq5Ym15bu655qE6YeN5paw5bCO5ZCR6aCB77yaJyxcblx0XHQndG9vbHNyZWRpcmVjdC10YWJjcmVhdGVub3Rmb3VuZCc6ICfmspLmnInmib7liLDlj6/ku6XlibXlu7rnmoTph43mlrDlsI7lkJHpoIHjgIInLFxuXHRcdCd0b29sc3JlZGlyZWN0LXRhYmNyZWF0ZWFsbCc6ICflhajpg6jlibXlu7onLFxuXHRcdCd0b29sc3JlZGlyZWN0LWNyZWF0ZWxvYWRpbmcnOiAn6KuL56iN5YCZ77yM5q2j5Zyo6Ieq5YuV5Ym15bu66YeN5paw5bCO5ZCR4oCm4oCmJyxcblx0XHQndG9vbHNyZWRpcmVjdC1jcmVhdGV0ZXh0JzogJyNSRURJUkVDVCBbWyQxXV0nLFxuXHRcdCd0b29sc3JlZGlyZWN0LWNyZWF0ZXRleHQtY2F0ZWdvcnknOiAne3vliIbnsbvph43lrprlkJF8JDF9fScsXG5cdFx0J3Rvb2xzcmVkaXJlY3QtY3JlYXRlc3VtbWFyeSc6ICfnt6jovK/lt6XlhbfvvJroh6rli5XlibXlu7rph43mlrDlsI7lkJHliLBbWyQxXV0nLFxuXHRcdCd0b29sc3JlZGlyZWN0LWVycmN5Y2xlcmVkaXJlY3QnOiAn54Sh5rOV6Ieq5YuV5L+u5b6p77ya55m854++5b6q55Kw6YeN5paw5bCO5ZCRJyxcblx0XHQndG9vbHNyZWRpcmVjdC1yZWZyZXNoJzogJ+WIt+aWsCcsXG5cdH0gc2F0aXNmaWVzIFJlY29yZDxNZXNzYWdlS2V5LCBzdHJpbmc+O1xuXG5cdGlmIChbJ3poLWhhbnQnLCAnemgtaGsnLCAnemgtbW8nLCAnemgtdHcnXS5pbmNsdWRlcyh3Z1VzZXJMYW5ndWFnZSkpIHtcblx0XHRtdy5tZXNzYWdlcy5zZXQoREVGQVVMVF9NRVNTQUdFU19IQU5UKTtcblx0fSBlbHNlIHtcblx0XHRtdy5tZXNzYWdlcy5zZXQoREVGQVVMVF9NRVNTQUdFU19IQU5TKTtcblx0fVxufTtcblxuZXhwb3J0IHtzZXRNZXNzYWdlc307XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHdCQUFBLENBQUE7QUFBQUMsU0FBQUQsdUJBQUE7RUFBQUUsd0JBQUFBLE1BQUFBO0VBQUFDLHNCQUFBQSxNQUFBQTtFQUFBQyx1QkFBQUEsTUFBQUE7QUFBQSxDQUFBO0FBQUFDLE9BQUFDLFVBQUFDLGFBQUFQLHFCQUFBOztBQ0NDLElBQUFRLFNBQVU7QUFDVixJQUFBQyxVQUFXOztBQ0ZaLElBQU1DLGdCQUFnQjtBQUN0QixJQUFNQyxpQkFBaUI7QUFDdkIsSUFBTUMsb0JBQW9CO0FBRTFCLElBQU1DLFdBQVcsQ0FBQyxXQUFXLFdBQVcsU0FBUyxTQUFTLFNBQVMsU0FBUyxTQUFTLE9BQU87O0FDQTVGLElBQUFDLHFCQUF5Q0MsUUFBQSxpQkFBQTs7QUNIekMsSUFBQUMsb0JBQXdCRCxRQUFBLGlCQUFBO0FB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QzlCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QixnQ0FBZ0M7SUFDaEMsK0JBQStCO0lBQy9CLG1DQUFtQztJQUNuQyw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLDRCQUE0QjtJQUM1QixxQ0FBcUM7SUFDckMsK0JBQStCO0lBQy9CLGtDQUFrQztJQUNsQyx5QkFBeUI7RUFDMUI7QUFDQSxRQUFNQyx3QkFBd0I7SUFDN0IsMEJBQTBCO0lBQzFCLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsNkJBQTZCO0lBQzdCLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IsK0JBQStCO0lBQy9CLDhCQUE4QjtJQUM5Qiw2QkFBNkI7SUFDN0IsaUNBQWlDO0lBQ2pDLDhCQUE4QjtJQUM5Qiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLHlCQUF5QjtJQUN6Qiw0QkFBNEI7SUFDNUIsZ0NBQWdDO0lBQ2hDLCtCQUErQjtJQUMvQixtQ0FBbUM7SUFDbkMsOEJBQThCO0lBQzlCLCtCQUErQjtJQUMvQiw0QkFBNEI7SUFDNUIscUNBQXFDO0lBQ3JDLCtCQUErQjtJQUMvQixrQ0FBa0M7SUFDbEMseUJBQXlCO0VBQzFCO0FBRUEsTUFBSSxDQUFDLFdBQVcsU0FBUyxTQUFTLE9BQU8sRUFBRWpCLFNBQVNjLGNBQWMsR0FBRztBQUNwRS9QLE9BQUdtUSxTQUFTQyxJQUFJRixxQkFBcUI7RUFDdEMsT0FBTztBQUNObFEsT0FBR21RLFNBQVNDLElBQUlILHFCQUFxQjtFQUN0QztBQUNEOztBUDVEQUQsWUFBWTtBQUVaLE1BQUEsR0FBS0YsbUJBQUFPLFNBQVEsRUFBRXBLLEtBQU1sRCxXQUF5QztBQUM3REwsZ0JBQWNJLEtBQUtDLEtBQUs7QUFDekIsQ0FBQzsiLAogICJuYW1lcyI6IFsiVG9vbHNSZWRpcmVjdF9leHBvcnRzIiwgIl9fZXhwb3J0IiwgImZpbmRSZWRpcmVjdEJ5U2VsZWN0b3IiLCAiZmluZFJlZGlyZWN0Q2FsbGJhY2siLCAic2V0UmVkaXJlY3RUZXh0U3VmZml4IiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIl9fdG9Db21tb25KUyIsICJhcGlUYWciLCAidmVyc2lvbiIsICJTVUZGSVhfQVBQRU5EIiwgIlNVRkZJWF9SRVBMQUNFIiwgIlNVRkZJWF9TRVRERUZBVUxUIiwgIlZBUklBTlRTIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgImZpeE5hbWVzcGFjZSIsICJ0aXRsZSIsICJ3Z05hbWVzcGFjZUlkcyIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z05hbWVzcGFjZU51bWJlcjIiLCAid2dQYWdlTmFtZSIsICJ3Z1BhZ2VOYW1lMiIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIm5zUHJlZml4ZXMiLCAibnNDYW5vblByZWZpeCIsICJuc1ByZWZpeFBhdHRlcm4iLCAiX2kiLCAiX09iamVjdCRlbnRyaWVzIiwgIk9iamVjdCIsICJlbnRyaWVzIiwgImxlbmd0aCIsICJ0ZXh0IiwgIm5zaWQiLCAic3BsaXQiLCAiUmVnRXhwIiwgImpvaW4iLCAidGVzdCIsICJyZXBsYWNlIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImFyZ3MiLCAiZnVsbEtleSIsICJtZXNzYWdlIiwgInBhcnNlIiwgInBsYWluIiwgIklTX0NBVEVHT1JZIiwgImZpbmRSZWRpcmVjdENhbGxiYWNrcyIsICJwYWdlV2l0aFJlZGlyZWN0VGV4dFN1ZmZpeCIsICJyZWRpcmVjdEV4Y2x1ZGVzIiwgImNhbGxiYWNrIiwgImdlbmVyYXRlQXJyYXkiLCAic2VsZWN0b3IiLCAiJCIsICJtYXAiLCAiX2luZGV4IiwgImVsZW1lbnQiLCAiZXEiLCAidHJpbSIsICJzdWZmaXgiLCAiZmxhZyIsICJmbGFnX3NldCIsICJmbGFnX2FwcGVuZCIsICJUb29sc1JlZGlyZWN0IiwgInRhYnNlbGVtIiwgInRhZ3NlbGVtIiwgInZhcmlhbnRzIiwgImluaXQiLCAiJGJvZHkiLCAic2VsZiIsICJidXR0b24iLCAiYWRkQ2xhc3MiLCAiYXR0ciIsICJjc3MiLCAiYXBwZW5kIiwgIm9uIiwgImV2ZW50IiwgInByZXZlbnREZWZhdWx0IiwgImRpYWxvZyIsICJmaW5kIiwgImFmdGVyIiwgImJnaWZyYW1lIiwgInJlc2l6YWJsZSIsICJtb2RhbCIsICJ3aWR0aCIsICJNYXRoIiwgInJvdW5kIiwgIndpbmRvdyIsICJwb3NpdGlvbiIsICJoZWlnaHQiLCAiYXBwZW5kVG8iLCAiYWRkVGFicyIsICJ0YWJzIiwgImtuYW1lIiwgImhhc093biIsICJjaGFyQXQiLCAidG9VcHBlckNhc2UiLCAic2xpY2UiLCAidGFiIiwgInRhZyIsICJjb250IiwgImxvYWRWaWV3IiwgImNyZWF0ZVRhYiIsICJ0YWJuYW1lIiwgInRhYnRpdGxlIiwgIm9uQ2xpY2siLCAiY2FsbCIsICJsb2FkZWQiLCAiX2luaXRUYWJWaWV3IiwgIl9pbml0VGFiQ3JlYXRlIiwgImxvYWRDcmVhdGUiLCAidmlldyIsICJjcmVhdGUiLCAiZml4IiwgInBhZ2VuYW1lcyIsICJyZW1vdmUiLCAibG9hZGluZyIsICJidWxrRWRpdEJ5UmVnZXgiLCAidGhlbiIsICJzZXRUaW1lb3V0IiwgImJ1bGtFZGl0IiwgImFkZFJlZGlyZWN0VGV4dFN1ZmZpeCIsICJ1bmlxdWVBcnJheSIsICJ0aXRsZXMiLCAic3VtbWFyeSIsICJmaWx0ZXIiLCAidiIsICJpIiwgImFyciIsICJpbmRleE9mIiwgInBvc3QiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAicXVlcnkiLCAiZGVmZXJyZWRzIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAicGFnZXMiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgInZhbHVlIiwgInBvc3RXaXRoVG9rZW4iLCAidGFncyIsICJlcnIiLCAiZSIsICJmIiwgIndoZW4iLCAicmVnZXgiLCAicnZwcm9wIiwgInJ2c2xvdHMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAicGFnZSIsICJjb250ZW50IiwgInJldmlzaW9ucyIsICJzbG90cyIsICJuZXdDb250ZW50IiwgImJhc2V0aW1lc3RhbXAiLCAidGltZXN0YW1wIiwgImxvYWRUYWJDb250IiwgInJlbG9hZCIsICJodG1sIiwgIiRkZXNjIiwgIiR0ZXh0IiwgImFwcGx5IiwgImZhaWwiLCAiYWx3YXlzIiwgImFkZE1ldGhvZHMiLCAiaHJlZiIsICJjbGljayIsICJjb250YWluZXIiLCAidG9Mb3dlckNhc2UiLCAicmVtb3ZlQ2xhc3MiLCAic2VsZWN0QWxsIiwgInNlbGVjdEludmVyc2UiLCAiZWFjaCIsICIkZWxlbWVudCIsICJzZWxlY3RBY3Rpb24iLCAiY2IiLCAicGFnZW5hbWUiLCAiZGF0YSIsICJjbGlja0FjdGlvbiIsICJidWlsZExpbmsiLCAiY2xhc3NuYW1lIiwgImEiLCAidGFyZ2V0IiwgInJlbCIsICIkcGFyZW50IiwgIm1ldGhvZHMiLCAiJGNvbnRhaW5lciIsICJtZXRob2RFeGlzdCIsICJKU09OIiwgInN0cmluZ2lmeSIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJtZXRob2QiLCAiYnVpbGRTZWxlY3Rpb24iLCAibWFpbiIsICJtZXRkIiwgIm10IiwgImRzYWIiLCAic2VsZSIsICJsb2FkUmVkaXJlY3QiLCAiZmluZFJlZGlyZWN0IiwgImRlZXAiLCAiZGVmZXJyZWQiLCAiRGVmZXJyZWQiLCAidG9wIiwgIm9uQ2xpY2tGaXgiLCAiZW50cnkiLCAicGFyZW50cyIsICJmaXJzdCIsICJyZGxpbWl0IiwgImhhc19yZWRpcmVjdCIsICJkZXNjIiwgIm1heGltdW1SZWRpcmVjdERlcHRoIiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgInJlZGlyZWN0cyIsICJfaXRlcmF0b3I2IiwgIl9zdGVwNiIsICJyZHRpdGxlIiwgInVsdGl0bGUiLCAidXRpbCIsICJnZXRVcmwiLCAiaXNDeWNsZVJlZGlyZWN0IiwgInJlZGlyZWN0IiwgInJlc29sdmVXaXRoIiwgInJlamVjdFdpdGgiLCAicHJvbWlzZSIsICJmaW5kVmFyaWFudHMiLCAic3VmZml4UmVnIiwgInJldFRpdGxlcyIsICJfaTIiLCAiX1ZBUklBTlRTIiwgInZhcmlhbnQiLCAieGhyIiwgInVzZWxhbmciLCAiZGlzcGxheXRpdGxlIiwgInN1ZmZpeGVzIiwgIl9pMyIsICJfYXJncyIsICJzdWZmaXhBcnIiLCAiZXhlYyIsICJfaXRlcmF0b3I3IiwgIl9zdGVwNyIsICJtb2RpZmllZFRpdGxlIiwgImZpbmROb3RFeGlzdHMiLCAiZXhjbHVkZXMiLCAiYWxsdGl0bGVzIiwgIl9pNCIsICJfVkFSSUFOVFMyIiwgImNvbnRlbnRtb2RlbCIsICJfaTUiLCAiX2FyZ3MyIiwgIl9pdGVyYXRvcjgiLCAiX3N0ZXA4IiwgIm1pc3NpbmciLCAiaW5jbHVkZXMiLCAiZnJjRGVmZXJyZWRzIiwgIiRjb250ZW50IiwgIl9pdGVyYXRvcjkiLCAiX3N0ZXA5IiwgInJldCIsICJvbkNsaWNrQ3JlYXRlIiwgIl9pNiIsICJfYXJnczMiLCAiZnZ0aXRsZXMiLCAiX2l0ZXJhdG9yMCIsICJfc3RlcDAiLCAicmVkbGluayIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAid2dVc2VyTGFuZ3VhZ2UiLCAic2V0TWVzc2FnZXMiLCAiREVGQVVMVF9NRVNTQUdFU19IQU5TIiwgIkRFRkFVTFRfTUVTU0FHRVNfSEFOVCIsICJtZXNzYWdlcyIsICJzZXQiLCAiZ2V0Qm9keSJdCn0K
