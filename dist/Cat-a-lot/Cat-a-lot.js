/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title1=Cat-a-lot.js|license=CC-BY-SA-4.0}}'
 *
 * Cat-a-lot
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-Cat-a-lot.js}
 * @base {@link https://commons.wikimedia.org/wiki/MediaWiki:Gadget-Cat-a-lot.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/Cat-a-lot/modules/core.ts}
 * @author Magnus Manske, Ilmari Karonen, DieBuche, 安忆 <i@anyi.in>
 * @license CC-BY-SA-4.0 {@link https://youshou.wiki/wiki/H:CC-BY-SA-4.0}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title2=Cat-a-lot Messages|license2=CC-BY-SA-4.0}}'
 *
 * Cat-a-lot messages
 *
 * @base {@link https://commons.wikimedia.org/wiki/MediaWiki:Gadget-Cat-a-lot.js/zh-hans}
 * @base {@link https://commons.wikimedia.org/wiki/MediaWiki:Gadget-Cat-a-lot.js/zh-hant}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/Cat-a-lot/modules/messages.ts}
 * @license CC-BY-SA-4.0 {@link https://youshou.wiki/wiki/H:CC-BY-SA-4.0}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title3=jQuery checkboxShiftClick|license3=CC-BY-SA-4.0}}'
 *
 * jQuery checkboxShiftClick
 *
 * @description This will enable checkboxes to be checked or unchecked in a row by clicking one, holding shift and clicking another one
 * @base {@link https://commons.wikimedia.org/wiki/MediaWiki:Gadget-Cat-a-lot.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/Cat-a-lot/modules/extendJQueryPrototype.ts}
 * @author Krinkle <krinklemail@gmail.com>
 * @license CC-BY-SA-4.0 {@link https://youshou.wiki/wiki/H:CC-BY-SA-4.0}
 */

/**
 * Hereby releasing jquery.checkboxShiftClick into CC BY-SA 3.0,
 * CC BY 4.0, CC-0 and for all intends and purpose in the public
 * domain, so as to not need this annotation.
 *
 * @source {@link https://commons.wikimedia.org/w/index.php?oldid=365723751}
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

// dist/Cat-a-lot/Cat-a-lot.js
var _templateObject;
var _templateObject2;
var _templateObject3;
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
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
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
//! src/Cat-a-lot/options.json
var apiTag = "Cat-a-lot";
var targetNamespace = 14;
var version = "6.0";
var storageKey = "ext.gadget.Cat-a-Lot_results-";
//! src/Cat-a-lot/modules/constant.ts
var CLASS_NAME = "gadget-cat_a_lot";
var CLASS_NAME_CONTAINER = "".concat(CLASS_NAME, "-container");
var CLASS_NAME_CONTAINER_DATA = "".concat(CLASS_NAME_CONTAINER, "__data");
var CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST = "".concat(CLASS_NAME_CONTAINER_DATA, "__category-list");
var CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST_ACTION = "".concat(CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST, "__action");
var CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST_NO_FOUND = "".concat(CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST, "--no-found");
var CLASS_NAME_CONTAINER_DATA_MARK_COUNTER = "".concat(CLASS_NAME_CONTAINER_DATA, "__mark-counter");
var CLASS_NAME_CONTAINER_DATA_SEARCH_INPUT_CONTAINER_INPUT = "".concat(CLASS_NAME_CONTAINER_DATA, "__search-input-container__input");
var CLASS_NAME_CONTAINER_DATA_SELECTIONS = "".concat(CLASS_NAME_CONTAINER_DATA, "__selections");
var CLASS_NAME_CONTAINER_DATA_SELECTIONS_ALL = "".concat(CLASS_NAME_CONTAINER_DATA_SELECTIONS, "__all");
var CLASS_NAME_CONTAINER_DATA_SELECTIONS_NONE = "".concat(CLASS_NAME_CONTAINER_DATA_SELECTIONS, "__none");
var CLASS_NAME_CONTAINER_HEAD = "".concat(CLASS_NAME_CONTAINER, "__head");
var CLASS_NAME_CONTAINER_HEAD_LINK = "".concat(CLASS_NAME_CONTAINER_HEAD, "__link");
var CLASS_NAME_CONTAINER_HEAD_LINK_ENABLED = "".concat(CLASS_NAME_CONTAINER_HEAD_LINK, "--enabled");
var CLASS_NAME_CURRENT_COUNTER = "".concat(CLASS_NAME, "-current_counter");
var CLASS_NAME_FEEDBACK = "".concat(CLASS_NAME, "-feedback");
var CLASS_NAME_FEEDBACK_DONE = "".concat(CLASS_NAME_FEEDBACK, "--done");
var CLASS_NAME_LABEL = "".concat(CLASS_NAME, "-label");
var CLASS_NAME_LABEL_DONE = "".concat(CLASS_NAME_LABEL, "--done");
var CLASS_NAME_LABEL_LAST_SELECTED = "".concat(CLASS_NAME_LABEL, "--last-selected");
var CLASS_NAME_LABEL_SELECTED = "".concat(CLASS_NAME_LABEL, "--selected");
var DEFAULT_SETTING = {
  docleanup: {
    default: false,
    label_i18n: "docleanuppref"
  },
  editpages: {
    default: true,
    label_i18n: "editpagespref"
  },
  minor: {
    default: false,
    label_i18n: "minorpref"
  },
  subcatcount: {
    default: 50,
    label_i18n: "subcatcountpref"
  },
  watchlist: {
    default: "preferences",
    label_i18n: "watchlistpref",
    select_i18n: {
      watch_nochange: "nochange",
      watch_pref: "preferences",
      watch_unwatch: "unwatch",
      watch_watch: "watch"
    }
  }
};
var VARIANTS = ["zh-hans", "zh-hant", "zh-cn", "zh-my", "zh-sg", "zh-hk", "zh-mo", "zh-tw"];
//! src/Cat-a-lot/modules/messages.ts
var {
  wgUserLanguage
} = mw.config.get();
var DEFAULT_MESSAGES = {
  // as in 17 files selected
  "cat-a-lot-files-selected": "{{PLURAL:$1|One file|$1 files}} selected.",
  // Actions
  "cat-a-lot-copy": "Copy",
  "cat-a-lot-move": "Move",
  "cat-a-lot-add": "Add",
  "cat-a-lot-remove-from-cat": "Remove from this category",
  "cat-a-lot-enter-name": "Enter category name",
  "cat-a-lot-select": "Select",
  "cat-a-lot-all": "all",
  "cat-a-lot-none": "none",
  "cat-a-lot-none-selected": "No files selected!",
  // Preferences
  "cat-a-lot-watchlistpref": "Watchlist preference concerning files edited with Cat-A-Lot",
  "cat-a-lot-watch_pref": "According to your general preferences",
  "cat-a-lot-watch_nochange": "Do not change watchstatus",
  "cat-a-lot-watch_watch": "Watch pages edited with Cat-A-Lot",
  "cat-a-lot-watch_unwatch": "Remove pages while editing with Cat-A-Lot from your watchlist",
  "cat-a-lot-minorpref": "Mark edits as minor (if you generally mark your edits as minor, this won't change anything)",
  "cat-a-lot-editpagespref": "Allow categorising pages (including categories) that are not files",
  "cat-a-lot-docleanuppref": "Remove {{Check categories}} and other minor cleanup",
  "cat-a-lot-subcatcountpref": "Sub-categories to show at most",
  // Progress
  "cat-a-lot-loading": "Loading...",
  "cat-a-lot-editing": "Editing page",
  "cat-a-lot-of": "of ",
  "cat-a-lot-skipped-already": "The following {{PLURAL:$1|page was|$1 pages were}} skipped, because the page was already in the category:",
  "cat-a-lot-skipped-not-found": "The following {{PLURAL:$1|page was|$1 pages were}} skipped, because the old category could not be found:",
  "cat-a-lot-skipped-server": "The following {{PLURAL:$1|page|$1 pages}} couldn't be changed, since there were problems connecting to the server:",
  "cat-a-lot-all-done": "All pages are processed.",
  "cat-a-lot-done": "Done!",
  "cat-a-lot-added-cat": "Added category $1",
  "cat-a-lot-copied-cat": "Copied to category $1",
  "cat-a-lot-moved-cat": "Moved to category $1",
  "cat-a-lot-removed-cat": "Removed from category $1",
  "cat-a-lot-return-to-page": "Return to page",
  "cat-a-lot-cat-not-found": "Category not found.",
  // Summaries:
  "cat-a-lot-summary-add": "[[Help:Cat-a-lot|Cat-a-lot]]: Adding [[Category:$1]]",
  "cat-a-lot-summary-copy": "[[Help:Cat-a-lot|Cat-a-lot]]: Copying from [[Category:$1]] to [[Category:$2]]",
  "cat-a-lot-summary-move": "[[Help:Cat-a-lot|Cat-a-lot]]: Moving from [[Category:$1]] to [[Category:$2]]",
  "cat-a-lot-summary-remove": "[[Help:Cat-a-lot|Cat-a-lot]]: Removing from [[Category:$1]]"
};
var setMessages = () => {
  /*! Cat-a-lot messages | CC-BY-SA-4.0 <https://ysymh.cc/H:CC-BY-SA-4.0> */
  if (wgUserLanguage === "en") {
    return;
  }
  if (["zh-hant", "zh-hk", "zh-mo", "zh-tw"].includes(wgUserLanguage)) {
    mw.messages.set({
      // as in 17 files selected
      "cat-a-lot-files-selected": "$1個文件已選擇",
      // Actions
      "cat-a-lot-copy": "複製",
      "cat-a-lot-move": "移動",
      "cat-a-lot-add": "增加",
      "cat-a-lot-remove-from-cat": "從此分類移除",
      "cat-a-lot-enter-name": "輸入分類名稱",
      "cat-a-lot-select": "選擇",
      "cat-a-lot-all": "全部",
      "cat-a-lot-none": "無",
      "cat-a-lot-none-selected": "沒有選擇文件！",
      // Preferences
      "cat-a-lot-watchlistpref": "使用Cat-A-Lot編輯文件時的監視列表選項",
      "cat-a-lot-watch_pref": "與系統參數設置相同",
      "cat-a-lot-watch_nochange": "不要更改監視狀態",
      "cat-a-lot-watch_watch": "監視使用Cat-A-Lot編輯的頁面",
      "cat-a-lot-watch_unwatch": "將使用Cat-A-Lot編輯的頁面從監視列表移除",
      "cat-a-lot-minorpref": "將編輯標記爲小修改（若您在系統參數設置中已設置將所有編輯標記爲小修改，此選項不會對現有行爲進行改動）",
      "cat-a-lot-editpagespref": "允許對不是文件的頁面和子分類進行分類操作",
      "cat-a-lot-docleanuppref": "移除{{Check categories}}並進行其他細節清理",
      "cat-a-lot-subcatcountpref": "最多顯示的子分類數量",
      // Progress
      "cat-a-lot-loading": "正在加載……",
      "cat-a-lot-editing": "正在編輯頁面",
      "cat-a-lot-of": "，共有",
      "cat-a-lot-skipped-already": "以下頁面已跳過，因爲頁面已經在分類中：",
      "cat-a-lot-skipped-not-found": "以下頁面已跳過，因爲找不到現有分類：",
      "cat-a-lot-skipped-server": "以下頁面無法編輯，因爲連接服務器出錯：",
      "cat-a-lot-all-done": "全部頁面已處理。",
      "cat-a-lot-done": "已完成！",
      "cat-a-lot-added-cat": "已加入分類",
      "cat-a-lot-copied-cat": "已複製到分類",
      "cat-a-lot-moved-cat": "已移動到分類",
      "cat-a-lot-removed-cat": "已從分類移除",
      "cat-a-lot-return-to-page": "返回到頁面",
      "cat-a-lot-cat-not-found": "找不到分類。",
      // Summaries
      "cat-a-lot-summary-add": "[[Help:Cat-a-lot|Cat-a-lot]]：加入分類[[Category:$1]]",
      "cat-a-lot-summary-copy": "[[Help:Cat-a-lot|Cat-a-lot]]：分類間複製：從[[Category:$1]]到[[Category:$2]]",
      "cat-a-lot-summary-move": "[[Help:Cat-a-lot|Cat-a-lot]]：分類間移動：從[[Category:$1]]到[[Category:$2]]",
      "cat-a-lot-summary-remove": "[[Help:Cat-a-lot|Cat-a-lot]]：從分類移除：[[Category:$1]]"
    });
  } else {
    mw.messages.set({
      // as in 17 files selected
      "cat-a-lot-files-selected": "已选择$1个页面或文件",
      // Actions
      "cat-a-lot-copy": "复制",
      "cat-a-lot-move": "移动",
      "cat-a-lot-add": "增加",
      "cat-a-lot-remove-from-cat": "从此分类移除",
      "cat-a-lot-enter-name": "输入分类名称",
      "cat-a-lot-select": "选择",
      "cat-a-lot-all": "全部",
      "cat-a-lot-none": "无",
      "cat-a-lot-none-selected": "没有选择任何页面或文件！",
      // Preferences
      "cat-a-lot-watchlistpref": "使用Cat-a-lot编辑文件时的监视列表选项",
      "cat-a-lot-watch_pref": "与系统参数设置相同",
      "cat-a-lot-watch_nochange": "不要更改监视状态",
      "cat-a-lot-watch_watch": "监视使用Cat-a-lot编辑的页面",
      "cat-a-lot-watch_unwatch": "将使用Cat-a-lot编辑的页面从监视列表移除",
      "cat-a-lot-minorpref": "将编辑标记为小修改（若您在系统参数设置中已设置将所有编辑标记为小修改，此选项不会对现有行为进行改动）",
      "cat-a-lot-editpagespref": "允许对不是文件的页面和子分类进行分类操作",
      "cat-a-lot-docleanuppref": "移除{{Check categories}}并进行其他细节清理",
      "cat-a-lot-subcatcountpref": "最多显示的子分类数量",
      // Progress
      "cat-a-lot-loading": "正在加载……",
      "cat-a-lot-editing": "正在编辑页面",
      "cat-a-lot-of": "，共有",
      "cat-a-lot-skipped-already": "以下页面已跳过，因为页面已经在分类中：",
      "cat-a-lot-skipped-not-found": "以下页面已跳过，因为找不到现有分类：",
      "cat-a-lot-skipped-server": "以下页面无法编辑，因为连接服务器出错：",
      "cat-a-lot-all-done": "全部页面已处理。",
      "cat-a-lot-done": "已完成！",
      "cat-a-lot-added-cat": "已加入分类",
      "cat-a-lot-copied-cat": "已复制到分类",
      "cat-a-lot-moved-cat": "已移动到分类",
      "cat-a-lot-removed-cat": "已从分类移除",
      "cat-a-lot-return-to-page": "返回到页面",
      "cat-a-lot-cat-not-found": "找不到分类。",
      // Summaries
      "cat-a-lot-summary-add": "[[Help:Cat-a-lot|Cat-a-lot]]：加入分类[[Category:$1]]",
      "cat-a-lot-summary-copy": "[[Help:Cat-a-lot|Cat-a-lot]]：分类间复制：从[[Category:$1]]到[[Category:$2]]",
      "cat-a-lot-summary-move": "[[Help:Cat-a-lot|Cat-a-lot]]：分类间移动：从[[Category:$1]]到[[Category:$2]]",
      "cat-a-lot-summary-remove": "[[Help:Cat-a-lot|Cat-a-lot]]：从分类移除：[[Category:$1]]"
    });
  }
};
//! src/Cat-a-lot/modules/core.tsx
var import_ext_gadget2 = require("ext.gadget.Util");
var import_ext_gadget3 = __toESM(require("ext.gadget.JSX"), 1);
//! src/Cat-a-lot/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("Cat-a-lot/".concat(version));
//! src/Cat-a-lot/modules/core.tsx
var {
  wgCanonicalSpecialPageName,
  wgFormattedNamespaces,
  wgNamespaceIds,
  wgNamespaceNumber,
  wgTitle
} = mw.config.get();
var catALot = () => {
  /*! Cat-a-lot | CC-BY-SA-4.0 <https://ysymh.cc/H:CC-BY-SA-4.0> */
  class CAL {
    static isSearchMode = false;
    static MESSAGES = DEFAULT_MESSAGES;
    static DEFAULT_SETTING = DEFAULT_SETTING;
    static API_TAG = apiTag;
    static TARGET_NAMESPACE = targetNamespace;
    static CURRENT_CATEGROY = wgTitle;
    static wgFormattedNamespaces = wgFormattedNamespaces;
    static wgNamespaceIds = wgNamespaceIds;
    static isAutoCompleteInit = false;
    static api = api;
    static alreadyThere = [];
    static connectionError = [];
    static notFound = [];
    static counterCurrent = 0;
    static counterNeeded = 0;
    static counterCat = 0;
    static currentCategory = "";
    static dialogHeight = 450;
    static editToken = "";
    static localCatName = wgFormattedNamespaces[CAL.TARGET_NAMESPACE];
    static parentCats = [];
    static subCats = [];
    static settings = {};
    static variantCache = {};
    static $counter = $();
    static $progressDialog = $();
    static $labels = $();
    static $selectedLabels = $();
    $body;
    $container;
    $dataContainer;
    $markCounter;
    $resultList;
    $searchInput;
    $head;
    $link;
    constructor($body) {
      var _mw$util$getParamValu;
      if (!mw.msg("cat-a-lot-loading")) {
        mw.messages.set(CAL.MESSAGES);
      }
      this.$body = $body;
      CAL.initSettings();
      const container = /* @__PURE__ */ import_ext_gadget3.default.createElement("div", {
        className: [CLASS_NAME, CLASS_NAME_CONTAINER, "noprint"]
      }, /* @__PURE__ */ import_ext_gadget3.default.createElement("div", {
        className: CLASS_NAME_CONTAINER_DATA
      }, /* @__PURE__ */ import_ext_gadget3.default.createElement("div", {
        className: CLASS_NAME_CONTAINER_DATA_MARK_COUNTER
      }), /* @__PURE__ */ import_ext_gadget3.default.createElement("div", {
        className: CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST
      }), /* @__PURE__ */ import_ext_gadget3.default.createElement("div", null, /* @__PURE__ */ import_ext_gadget3.default.createElement("input", {
        className: CLASS_NAME_CONTAINER_DATA_SEARCH_INPUT_CONTAINER_INPUT,
        placeholder: CAL.msg("enter-name"),
        type: "text",
        value: CAL.isSearchMode ? (_mw$util$getParamValu = mw.util.getParamValue("search")) !== null && _mw$util$getParamValu !== void 0 ? _mw$util$getParamValu : "" : "",
        onKeyDown: (event) => {
          const $element = $(event.currentTarget);
          if (event.key === "Enter") {
            var _$element$val$trim, _$element$val;
            const cat = (_$element$val$trim = (_$element$val = $element.val()) === null || _$element$val === void 0 ? void 0 : _$element$val.trim()) !== null && _$element$val$trim !== void 0 ? _$element$val$trim : "";
            if (cat) {
              this.updateCats(cat);
            }
          }
        }
      })), /* @__PURE__ */ import_ext_gadget3.default.createElement("div", {
        className: CLASS_NAME_CONTAINER_DATA_SELECTIONS
      }, [CAL.msg("select"), " "], /* @__PURE__ */ import_ext_gadget3.default.createElement("a", {
        className: CLASS_NAME_CONTAINER_DATA_SELECTIONS_ALL,
        onClick: () => {
          this.toggleAll(true);
        }
      }, CAL.msg("all")), " • ", /* @__PURE__ */ import_ext_gadget3.default.createElement("a", {
        className: CLASS_NAME_CONTAINER_DATA_SELECTIONS_NONE,
        onClick: () => {
          this.toggleAll(false);
        }
      }, CAL.msg("none")))), /* @__PURE__ */ import_ext_gadget3.default.createElement("div", {
        className: CLASS_NAME_CONTAINER_HEAD
      }, /* @__PURE__ */ import_ext_gadget3.default.createElement("a", {
        className: CLASS_NAME_CONTAINER_HEAD_LINK
      }, "Cat-a-lot")));
      this.$container = $(container);
      this.$container.appendTo(this.$body);
      this.$dataContainer = this.$container.find(".".concat(CLASS_NAME_CONTAINER_DATA));
      this.$markCounter = this.$dataContainer.find(".".concat(CLASS_NAME_CONTAINER_DATA_MARK_COUNTER));
      this.$resultList = this.$dataContainer.find(".".concat(CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST));
      this.$searchInput = this.$dataContainer.find(".".concat(CLASS_NAME_CONTAINER_DATA_SEARCH_INPUT_CONTAINER_INPUT));
      this.$head = this.$container.find(".".concat(CLASS_NAME_CONTAINER_HEAD));
      this.$link = this.$head.find(".".concat(CLASS_NAME_CONTAINER_HEAD_LINK));
    }
    buildElements() {
      const regexCat = new RegExp("^\\s*".concat(CAL.localizedRegex(CAL.TARGET_NAMESPACE, "Category"), ":"), "");
      let isCompositionStart;
      this.$searchInput.on("compositionstart", () => {
        isCompositionStart = true;
      });
      this.$searchInput.on("compositionend", () => {
        isCompositionStart = false;
      });
      this.$searchInput.on("input keyup", (event) => {
        if (isCompositionStart) {
          return;
        }
        const {
          currentTarget
        } = event;
        const {
          value: oldVal
        } = currentTarget;
        const newVal = oldVal.replace(regexCat, "");
        if (newVal !== oldVal) {
          currentTarget.value = newVal;
        }
      });
      const initAutocomplete = () => {
        if (CAL.isAutoCompleteInit) {
          return;
        }
        CAL.isAutoCompleteInit = true;
        this.$searchInput.autocomplete({
          source: (request, response) => {
            this.doAPICall({
              action: "opensearch",
              namespace: CAL.TARGET_NAMESPACE,
              redirects: "resolve",
              search: request.term
            }, (result) => {
              if (result[1]) {
                response($(result[1]).map((_index, item) => item.replace(regexCat, "")));
              }
            });
          },
          position: {
            my: "right bottom",
            at: "right top",
            of: this.$searchInput
          },
          appendTo: ".".concat(CLASS_NAME_CONTAINER)
        });
      };
      this.$link.on("click", (event) => {
        $(event.currentTarget).toggleClass(CLASS_NAME_CONTAINER_HEAD_LINK_ENABLED);
        initAutocomplete();
        this.run();
      });
    }
    static initSettings() {
      var _window$CatALotPrefs;
      let catALotPrefs = (_window$CatALotPrefs = window.CatALotPrefs) !== null && _window$CatALotPrefs !== void 0 ? _window$CatALotPrefs : {};
      const typeOfCatALotPrefs = typeof catALotPrefs;
      if (typeOfCatALotPrefs === "object" && !Array.isArray(catALotPrefs) || typeOfCatALotPrefs !== "object") {
        catALotPrefs = {};
      }
      for (var _i = 0, _Object$keys = Object.keys(CAL.DEFAULT_SETTING); _i < _Object$keys.length; _i++) {
        var _catALotPrefs$setting;
        const settingKey = _Object$keys[_i];
        const setting = CAL.DEFAULT_SETTING[settingKey];
        CAL.settings[settingKey] = (_catALotPrefs$setting = catALotPrefs[settingKey]) !== null && _catALotPrefs$setting !== void 0 ? _catALotPrefs$setting : setting.default;
        if (!setting.select_i18n) {
          continue;
        }
        setting.select = {};
        for (var _i2 = 0, _Object$keys2 = Object.keys(setting.select_i18n); _i2 < _Object$keys2.length; _i2++) {
          const messageKey = _Object$keys2[_i2];
          const message = setting.select_i18n[messageKey];
          setting.select[CAL.msg(messageKey)] = message;
        }
      }
    }
    static msg(key, ...args) {
      const fullKey = "cat-a-lot-".concat(key);
      return args.length ? mw.message(fullKey, ...args).parse() : mw.message(fullKey).plain();
    }
    static localizedRegex(namespaceNumber, fallback) {
      var _CAL$wgFormattedNames;
      const wikiTextBlank = String.raw(_templateObject || (_templateObject = _taggedTemplateLiteral(["[	 _  ᠎ - \u2028\u2029  　]+"], ["[\\t _\\xA0\\u1680\\u180E\\u2000-\\u200A\\u2028\\u2029\\u202F\\u205F\\u3000]+"])));
      const wikiTextBlankRE = new RegExp(wikiTextBlank, "g");
      const createRegexStr = (name) => {
        if (!(name !== null && name !== void 0 && name.length)) {
          return "";
        }
        let regexName = "";
        for (let i = 0; i < name.length; i++) {
          const initial = name.slice(i, i + 1);
          const ll = initial.toLowerCase();
          const ul = initial.toUpperCase();
          regexName += ll === ul ? initial : "[".concat(ll).concat(ul, "]");
        }
        return regexName.replace(/([$()*+.?\\^])/g, String.raw(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["$1"], ["\\$1"])))).replace(wikiTextBlankRE, wikiTextBlank);
      };
      fallback = fallback.toLowerCase();
      const canonical = (_CAL$wgFormattedNames = CAL.wgFormattedNamespaces[namespaceNumber]) === null || _CAL$wgFormattedNames === void 0 ? void 0 : _CAL$wgFormattedNames.toLowerCase();
      let regexString = createRegexStr(canonical);
      if (fallback && canonical !== fallback) {
        regexString += "|".concat(createRegexStr(fallback));
      }
      for (var _i3 = 0, _Object$keys3 = Object.keys(CAL.wgNamespaceIds); _i3 < _Object$keys3.length; _i3++) {
        const catName = _Object$keys3[_i3];
        if (catName.toLowerCase() !== canonical && catName.toLowerCase() !== fallback && CAL.wgNamespaceIds[catName] === namespaceNumber) {
          regexString += "|".concat(createRegexStr(catName));
        }
      }
      return "(?:".concat(regexString, ")");
    }
    updateSelectionCounter() {
      CAL.$selectedLabels = CAL.$labels.filter(".".concat(CLASS_NAME_LABEL_SELECTED));
      this.$markCounter.show().html(CAL.msg("files-selected", CAL.$selectedLabels.length.toString()));
    }
    toggleAll(select) {
      CAL.$labels.toggleClass(CLASS_NAME_LABEL_SELECTED, select);
      this.updateSelectionCounter();
    }
    static findAllVariants(category) {
      return _asyncToGenerator(function* () {
        if (CAL.variantCache[category] !== void 0) {
          return CAL.variantCache[category];
        }
        if (mw.storage.getObject(storageKey + category)) {
          CAL.variantCache[category] = mw.storage.getObject(storageKey + category);
          return CAL.variantCache[category];
        }
        let results = [];
        const params = {
          action: "parse",
          format: "json",
          formatversion: "2",
          text: category,
          title: "temp"
        };
        for (var _i4 = 0, _VARIANTS = VARIANTS; _i4 < _VARIANTS.length; _i4++) {
          const variant = _VARIANTS[_i4];
          try {
            const {
              parse
            } = yield CAL.api.get({
              ...params,
              variant
            });
            const {
              text
            } = parse;
            const result = $(text).eq(0).text().trim();
            results[results.length] = result;
          } catch {
          }
        }
        results = (0, import_ext_gadget2.uniqueArray)(results);
        CAL.variantCache[category] = results;
        mw.storage.setObject(storageKey + category, results, 60 * 60 * 24);
        return results;
      })();
    }
    static regexBuilder(category) {
      return _asyncToGenerator(function* () {
        const catName = CAL.localizedRegex(CAL.TARGET_NAMESPACE, "Category");
        category = category.replace(/^[\s_]+/, "").replace(/[\s_]+$/, "");
        const variants = yield CAL.findAllVariants(category);
        const variantRegExps = [];
        var _iterator2 = _createForOfIteratorHelper(variants), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            let variant = _step2.value;
            variant = mw.util.escapeRegExp(variant);
            variant = variant.replace(/[\s_]+/g, String.raw(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["[s_]+"], ["[\\s_]+"]))));
            const first = variant.slice(0, 1);
            if (first.toUpperCase() !== first.toLowerCase()) {
              variant = "[".concat(first.toUpperCase()).concat(first.toLowerCase(), "]").concat(variant.slice(1));
            }
            variantRegExps[variantRegExps.length] = variant;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        return new RegExp("\\[\\[[\\s_]*".concat(catName, "[\\s_]*:[\\s_]*(?:").concat(variantRegExps.join("|"), ")[\\s_]*(\\|[^\\]]*(?:\\][^\\]]+)*)?\\]\\]"), "g");
      })();
    }
    doAPICall(_params, callback) {
      const params = _params;
      params["format"] = "json";
      params["formatversion"] = "2";
      let i = 0;
      const doCall = () => {
        const handleError = (error) => {
          mw.log.error("[Cat-a-lot] Ajax error:", error);
          if (i < 4) {
            setTimeout(doCall, 300);
            i++;
          } else if (params["title"]) {
            CAL.connectionError[CAL.connectionError.length] = params["title"];
            this.updateCounter();
          }
        };
        if (params["action"] === "query") {
          CAL.api.get(params).then(callback).catch(handleError);
        } else {
          CAL.api.post(params).then(callback).catch(handleError);
        }
      };
      doCall();
    }
    static markAsDone($markedLabel, targetCategory, mode) {
      $markedLabel.addClass(CLASS_NAME_LABEL_DONE);
      switch (mode) {
        case "add":
          $markedLabel.append(/* @__PURE__ */ import_ext_gadget3.default.createElement(import_ext_gadget3.default.Fragment, null, /* @__PURE__ */ import_ext_gadget3.default.createElement("br", null), CAL.msg("added-cat", targetCategory)));
          break;
        case "copy":
          $markedLabel.append(/* @__PURE__ */ import_ext_gadget3.default.createElement(import_ext_gadget3.default.Fragment, null, /* @__PURE__ */ import_ext_gadget3.default.createElement("br", null), CAL.msg("copied-cat", targetCategory)));
          break;
        case "move":
          $markedLabel.append(/* @__PURE__ */ import_ext_gadget3.default.createElement(import_ext_gadget3.default.Fragment, null, /* @__PURE__ */ import_ext_gadget3.default.createElement("br", null), CAL.msg("moved-cat", targetCategory)));
          break;
        case "remove":
          $markedLabel.append(/* @__PURE__ */ import_ext_gadget3.default.createElement(import_ext_gadget3.default.Fragment, null, /* @__PURE__ */ import_ext_gadget3.default.createElement("br", null), CAL.msg("removed-cat", targetCategory)));
          break;
      }
    }
    static doCleanup(text) {
      return CAL.settings.docleanup ? text.replace(/{{\s*[Cc]heck categories\s*(\|?.*?)}}/, "") : text;
    }
    // Remove {{Uncategorized}} (also with comment). No need to replace it with anything
    static removeUncat(text) {
      return text.replace(/\{\{\s*[Uu]ncategorized\s*(\|?.*?)\}\}/, "");
    }
    displayResult() {
      this.$body.css({
        cursor: "",
        overflow: ""
      });
      this.$body.find(".".concat(CLASS_NAME_FEEDBACK)).addClass(CLASS_NAME_FEEDBACK_DONE);
      const $parent = CAL.$counter.parent();
      $parent.html(/* @__PURE__ */ import_ext_gadget3.default.createElement("h3", null, CAL.msg("done")));
      $parent.append(/* @__PURE__ */ import_ext_gadget3.default.createElement(import_ext_gadget3.default.Fragment, null, CAL.msg("all-done"), /* @__PURE__ */ import_ext_gadget3.default.createElement("br", null)));
      $parent.append(/* @__PURE__ */ import_ext_gadget3.default.createElement("a", {
        onClick: () => {
          CAL.$progressDialog.remove();
          this.toggleAll(false);
        }
      }, CAL.msg("return-to-page")));
      if (CAL.alreadyThere.length) {
        $parent.append(/* @__PURE__ */ import_ext_gadget3.default.createElement(import_ext_gadget3.default.Fragment, null, /* @__PURE__ */ import_ext_gadget3.default.createElement("h5", null, CAL.msg("skipped-already", CAL.alreadyThere.length.toString())), CAL.alreadyThere.reduce((pre, cur, index) => index < CAL.alreadyThere.length - 1 ? [...pre, cur, /* @__PURE__ */ import_ext_gadget3.default.createElement("br", {
          key: index
        })] : [...pre, cur], [])));
      }
      if (CAL.notFound.length) {
        $parent.append(/* @__PURE__ */ import_ext_gadget3.default.createElement(import_ext_gadget3.default.Fragment, null, /* @__PURE__ */ import_ext_gadget3.default.createElement("h5", null, CAL.msg("skipped-not-found", CAL.notFound.length.toString())), CAL.notFound.reduce((pre, cur, index) => index < CAL.notFound.length - 1 ? [...pre, cur, /* @__PURE__ */ import_ext_gadget3.default.createElement("br", {
          key: index
        })] : [...pre, cur], [])));
      }
      if (CAL.connectionError.length) {
        $parent.append(/* @__PURE__ */ import_ext_gadget3.default.createElement(import_ext_gadget3.default.Fragment, null, /* @__PURE__ */ import_ext_gadget3.default.createElement("h5", null, CAL.msg("skipped-server", CAL.connectionError.length.toString())), CAL.connectionError.reduce((pre, cur, index) => index < CAL.connectionError.length - 1 ? [...pre, cur, /* @__PURE__ */ import_ext_gadget3.default.createElement("br", {
          key: index
        })] : [...pre, cur], [])));
      }
    }
    updateCounter() {
      CAL.counterCurrent++;
      if (CAL.counterCurrent > CAL.counterNeeded) {
        this.displayResult();
      } else {
        CAL.$counter.text(CAL.counterCurrent);
      }
    }
    editCategories(result, markedLabel, targetCategory, mode) {
      var _this = this;
      return _asyncToGenerator(function* () {
        var _page$revisions;
        const [markedLabelTitle, $markedLabel] = markedLabel;
        if (!(result !== null && result !== void 0 && result["query"])) {
          CAL.connectionError[CAL.connectionError.length] = markedLabelTitle;
          _this.updateCounter();
          return;
        }
        let originText = "";
        let starttimestamp = 0;
        let timestamp = 0;
        CAL.editToken = result["query"].tokens.csrftoken;
        const {
          pages
        } = result["query"];
        const [page] = pages;
        originText = page === null || page === void 0 || (_page$revisions = page.revisions) === null || _page$revisions === void 0 ? void 0 : _page$revisions[0].slots.main.content;
        ({
          starttimestamp
        } = page);
        [{
          timestamp
        }] = page.revisions;
        const sourcecat = CAL.CURRENT_CATEGROY;
        const targeRegExp = yield CAL.regexBuilder(targetCategory);
        if (mode !== "remove" && targeRegExp.test(originText) && mode !== "move") {
          CAL.alreadyThere[CAL.alreadyThere.length] = markedLabelTitle;
          _this.updateCounter();
          return;
        }
        let text = originText;
        let summary;
        const sourceCatRegExp = yield CAL.regexBuilder(sourcecat);
        switch (mode) {
          case "add":
            text += "\n[[".concat(CAL.localCatName, ":").concat(targetCategory, "]]\n");
            summary = CAL.msg("summary-add").replace("$1", targetCategory);
            break;
          case "copy":
            text = text.replace(sourceCatRegExp, "[[".concat(CAL.localCatName, ":").concat(sourcecat, "$1]]\n[[").concat(CAL.localCatName, ":").concat(targetCategory, "$1]]"));
            summary = CAL.msg("summary-copy").replace("$1", sourcecat).replace("$2", targetCategory);
            if (originText === text) {
              text += "\n[[".concat(CAL.localCatName, ":").concat(targetCategory, "]]");
            }
            break;
          case "move":
            text = text.replace(sourceCatRegExp, "[[".concat(CAL.localCatName, ":").concat(targetCategory, "$1]]"));
            summary = CAL.msg("summary-move").replace("$1", sourcecat).replace("$2", targetCategory);
            break;
          case "remove":
            text = text.replace(sourceCatRegExp, "");
            summary = CAL.msg("summary-remove").replace("$1", sourcecat);
            break;
        }
        if (text === originText) {
          CAL.notFound[CAL.notFound.length] = markedLabelTitle;
          _this.updateCounter();
          return;
        }
        if (mode !== "remove") {
          text = CAL.doCleanup(CAL.removeUncat(text));
        }
        _this.doAPICall({
          action: "edit",
          token: CAL.editToken,
          tags: CAL.API_TAG,
          title: markedLabelTitle,
          assert: "user",
          bot: true,
          basetimestamp: timestamp,
          watchlist: CAL.settings.watchlist,
          text,
          summary,
          starttimestamp
        }, () => {
          _this.updateCounter();
        });
        CAL.markAsDone($markedLabel, targetCategory, mode);
      })();
    }
    getContent(markedLabel, targetCategory, mode) {
      this.doAPICall({
        action: "query",
        formatversion: "2",
        meta: "tokens",
        titles: markedLabel[0],
        prop: "revisions",
        rvprop: ["content", "timestamp"],
        rvslots: "main"
      }, (result) => {
        void this.editCategories(result, markedLabel, targetCategory, mode);
      });
    }
    static getTitleFromLink(href) {
      try {
        var _decodeURIComponent$m, _decodeURIComponent$m2;
        return ((_decodeURIComponent$m = (_decodeURIComponent$m2 = decodeURIComponent(href !== null && href !== void 0 ? href : "").match(/wiki\/(.+?)(?:#.+)?$/)) === null || _decodeURIComponent$m2 === void 0 ? void 0 : _decodeURIComponent$m2[1]) !== null && _decodeURIComponent$m !== void 0 ? _decodeURIComponent$m : "").replace(/_/g, " ");
      } catch {
        return "";
      }
    }
    getMarkedLabels() {
      const markedLabels = [];
      CAL.$selectedLabels = CAL.$labels.filter(".".concat(CLASS_NAME_LABEL_SELECTED));
      CAL.$selectedLabels.each((_index, label) => {
        var _$labelLink$attr;
        const $label = $(label);
        const $labelLink = $label.find("a:not(.CategoryTreeToggle)[title]");
        const title = ((_$labelLink$attr = $labelLink.attr("title")) === null || _$labelLink$attr === void 0 ? void 0 : _$labelLink$attr.trim()) || CAL.getTitleFromLink($labelLink.attr("href")) || CAL.getTitleFromLink($label.find("a:not(.CategoryTreeToggle)").attr("href"));
        markedLabels[markedLabels.length] = [title, $label];
      });
      return markedLabels;
    }
    showProgress() {
      this.$body.css({
        cursor: "wait",
        overflow: "hidden"
      });
      CAL.$progressDialog = $(/* @__PURE__ */ import_ext_gadget3.default.createElement("div", null, CAL.msg("editing"), /* @__PURE__ */ import_ext_gadget3.default.createElement("span", {
        className: CLASS_NAME_CURRENT_COUNTER
      }, CAL.counterCurrent), [CAL.msg("of"), CAL.counterNeeded])).dialog({
        dialogClass: CLASS_NAME_FEEDBACK,
        minHeight: 90,
        height: 90,
        width: 450,
        modal: true,
        closeOnEscape: false,
        draggable: false,
        resizable: false
      });
      this.$body.find(".".concat(CLASS_NAME_FEEDBACK, " .ui-dialog-titlebar")).hide();
      this.$body.find(".".concat(CLASS_NAME_FEEDBACK, " .ui-dialog-content")).height("auto");
      CAL.$counter = this.$body.find(".".concat(CLASS_NAME_CURRENT_COUNTER));
    }
    doSomething(targetCategory, mode) {
      const markedLabels = this.getMarkedLabels();
      if (!markedLabels.length) {
        void mw.notify(CAL.msg("none-selected"), {
          tag: "catALot"
        });
        return;
      }
      CAL.alreadyThere = [];
      CAL.connectionError = [];
      CAL.notFound = [];
      CAL.counterCurrent = 1;
      CAL.counterNeeded = markedLabels.length;
      this.showProgress();
      var _iterator3 = _createForOfIteratorHelper(markedLabels), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          const markedLabel = _step3.value;
          this.getContent(markedLabel, targetCategory, mode);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
    addHere(targetCategory) {
      this.doSomething(targetCategory, "add");
    }
    copyHere(targetCategory) {
      this.doSomething(targetCategory, "copy");
    }
    moveHere(targetCategory) {
      this.doSomething(targetCategory, "move");
    }
    createCatLinks(symbol, categories) {
      categories.sort();
      var _iterator4 = _createForOfIteratorHelper(categories), _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
          const category = _step4.value;
          const $tr = $(/* @__PURE__ */ import_ext_gadget3.default.createElement("tr", {
            dataset: {
              category
            }
          }, /* @__PURE__ */ import_ext_gadget3.default.createElement("td", null, symbol), /* @__PURE__ */ import_ext_gadget3.default.createElement("td", null, /* @__PURE__ */ import_ext_gadget3.default.createElement("a", {
            onClick: (event) => {
              const $element = $(event.currentTarget);
              this.updateCats($element.closest("tr").data("category"));
            }
          }, category))));
          if (category !== CAL.CURRENT_CATEGROY && CAL.isSearchMode) {
            $tr.append(/* @__PURE__ */ import_ext_gadget3.default.createElement("td", null, /* @__PURE__ */ import_ext_gadget3.default.createElement("a", {
              className: CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST_ACTION,
              onClick: (event) => {
                const $element = $(event.currentTarget);
                this.addHere($element.closest("tr").data("category"));
              }
            }, CAL.msg("add"))));
          } else if (category !== CAL.CURRENT_CATEGROY && !CAL.isSearchMode) {
            $tr.append(/* @__PURE__ */ import_ext_gadget3.default.createElement(import_ext_gadget3.default.Fragment, null, /* @__PURE__ */ import_ext_gadget3.default.createElement("td", null, /* @__PURE__ */ import_ext_gadget3.default.createElement("a", {
              className: CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST_ACTION,
              onClick: (event) => {
                const $element = $(event.currentTarget);
                this.copyHere($element.closest("tr").data("category"));
              }
            }, CAL.msg("copy"))), /* @__PURE__ */ import_ext_gadget3.default.createElement("td", null, /* @__PURE__ */ import_ext_gadget3.default.createElement("a", {
              className: CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST_ACTION,
              onClick: (event) => {
                const $element = $(event.currentTarget);
                this.moveHere($element.closest("tr").data("category"));
              }
            }, CAL.msg("move")))));
          }
          this.$resultList.find("table").append($tr);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
    showCategoryList() {
      var _this$$container$widt, _$$width;
      this.$body.css("cursor", "");
      const currentCategories = [CAL.currentCategory];
      this.$resultList.empty();
      this.$resultList.append(/* @__PURE__ */ import_ext_gadget3.default.createElement("table", null));
      this.createCatLinks("↑", CAL.parentCats);
      this.createCatLinks("→", currentCategories);
      this.createCatLinks("↓", CAL.subCats);
      this.$container.width("");
      this.$container.height("");
      this.$container.width(Math.min(((_this$$container$widt = this.$container.width()) !== null && _this$$container$widt !== void 0 ? _this$$container$widt : 0) * 1.1 + 15, ((_$$width = $(window).width()) !== null && _$$width !== void 0 ? _$$width : 0) - 10));
      this.$resultList.css({
        "max-height": "".concat(CAL.dialogHeight, "px"),
        height: ""
      });
    }
    getParentCats() {
      this.doAPICall({
        action: "query",
        titles: "Category:".concat(CAL.currentCategory),
        prop: "categories"
      }, (result) => {
        var _pages$, _pages$2;
        if (!result) {
          return;
        }
        CAL.parentCats = [];
        const {
          pages
        } = result.query;
        if ((_pages$ = pages[0]) !== null && _pages$ !== void 0 && _pages$.missing) {
          this.$body.css("cursor", "");
          this.$resultList.html(/* @__PURE__ */ import_ext_gadget3.default.createElement("span", {
            className: CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST_NO_FOUND
          }, CAL.msg("cat-not-found")));
          this.createCatLinks("→", [CAL.currentCategory]);
          return;
        }
        let categories = [];
        if ((_pages$2 = pages[0]) !== null && _pages$2 !== void 0 && _pages$2.categories) {
          [{
            categories
          }] = pages;
        }
        var _iterator5 = _createForOfIteratorHelper(categories), _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
            const cat = _step5.value;
            CAL.parentCats[CAL.parentCats.length] = cat.title.replace(/^[^:]+:/, "");
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        CAL.counterCat++;
        if (CAL.counterCat === 2) {
          this.showCategoryList();
        }
      });
    }
    getSubCats() {
      this.doAPICall({
        action: "query",
        list: "categorymembers",
        cmtype: "subcat",
        cmlimit: CAL.settings.subcatcount,
        cmtitle: "Category:".concat(CAL.currentCategory)
      }, (result) => {
        var _result$query;
        const cats = (result === null || result === void 0 || (_result$query = result.query) === null || _result$query === void 0 ? void 0 : _result$query.categorymembers) || [];
        CAL.subCats = [];
        var _iterator6 = _createForOfIteratorHelper(cats), _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
            const cat = _step6.value;
            CAL.subCats[CAL.subCats.length] = cat.title.replace(/^[^:]+:/, "");
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
        CAL.counterCat++;
        if (CAL.counterCat === 2) {
          this.showCategoryList();
        }
      });
    }
    getCategoryList() {
      CAL.counterCat = 0;
      this.getParentCats();
      this.getSubCats();
    }
    updateCats(cat) {
      this.$body.css("cursor", "wait");
      CAL.currentCategory = cat;
      this.$resultList.html(/* @__PURE__ */ import_ext_gadget3.default.createElement("div", null, CAL.msg("loading")));
      this.getCategoryList();
    }
    findAllLabels() {
      if (CAL.isSearchMode) {
        CAL.$labels = this.$body.find("table.searchResultImage").find("tr>td").eq(1);
        if (CAL.settings.editpages) {
          CAL.$labels = CAL.$labels.add("div.mw-search-result-heading");
        }
      } else {
        CAL.$labels = this.$body.find("div.gallerytext").add(this.$body.find("div#mw-category-media").find('li[class!="gallerybox"]'));
        if (CAL.settings.editpages) {
          const $pages = this.$body.find("div#mw-pages, div#mw-subcategories").find("li");
          CAL.$labels = CAL.$labels.add($pages);
        }
      }
    }
    makeClickable() {
      this.findAllLabels();
      CAL.$labels.addClass(CLASS_NAME_LABEL).onCatALotShiftClick(() => {
        this.updateSelectionCounter();
      });
    }
    run() {
      if (this.$link.hasClass(CLASS_NAME_CONTAINER_HEAD_LINK_ENABLED)) {
        this.makeClickable();
        this.$dataContainer.show();
        this.$container.resizable({
          alsoResize: this.$resultList,
          handles: "n",
          resize: (event) => {
            var _$currentTarget$heigh;
            const $currentTarget = $(event.currentTarget);
            $currentTarget.css({
              left: "",
              top: ""
            });
            CAL.dialogHeight = (_$currentTarget$heigh = $currentTarget.height()) !== null && _$currentTarget$heigh !== void 0 ? _$currentTarget$heigh : CAL.dialogHeight;
            this.$resultList.css({
              maxHeight: "",
              width: ""
            });
          }
        });
        this.$resultList.css("max-height", "450px");
        if (CAL.isSearchMode) {
          this.updateCats("Pictures and images");
        } else {
          this.updateCats(CAL.CURRENT_CATEGROY);
        }
      } else {
        this.$dataContainer.hide();
        this.$container.resizable("destroy");
        this.$container.css("width", "");
        CAL.$labels.off("click.catALot");
      }
    }
  }
  if (wgNamespaceNumber === -1 && wgCanonicalSpecialPageName === "Search" || wgNamespaceNumber === targetNamespace) {
    if (wgNamespaceNumber === -1) {
      CAL.isSearchMode = true;
    }
    /*! Cat-a-lot messages | CC-BY-SA-4.0 <https://qwbk.cc/H:CC-BY-SA-4.0> */
    setMessages();
    void (0, import_ext_gadget2.getBody)().then(($body) => {
      new CAL($body).buildElements();
    });
  }
};
//! src/Cat-a-lot/modules/extendJQueryPrototype.ts
var extendJQueryPrototype = () => {
  $.fn.extend({
    onCatALotShiftClick: function(callback) {
      let prevCheckbox;
      this.on("click.catALot", (event) => {
        if (!event.ctrlKey) {
          event.preventDefault();
        }
        this.parents("body").find(".".concat(CLASS_NAME_LABEL_LAST_SELECTED)).removeClass(CLASS_NAME_LABEL_LAST_SELECTED);
        let $thisControl = $(event.target);
        if (!$thisControl.hasClass(CLASS_NAME_LABEL)) {
          $thisControl = $thisControl.parents(".".concat(CLASS_NAME_LABEL));
        }
        $thisControl.addClass(CLASS_NAME_LABEL_LAST_SELECTED).toggleClass(CLASS_NAME_LABEL_SELECTED);
        if (prevCheckbox && event.shiftKey) {
          const method = $thisControl.hasClass(CLASS_NAME_LABEL_SELECTED) ? "addClass" : "removeClass";
          this.slice(Math.min(this.index(prevCheckbox), this.index($thisControl)), Math.max(this.index(prevCheckbox), this.index($thisControl)) + 1)[method](CLASS_NAME_LABEL_SELECTED);
        }
        prevCheckbox = $thisControl;
        if (typeof callback === "function") {
          callback();
        }
      });
      return this;
    }
  });
};
//! src/Cat-a-lot/Cat-a-lot.ts
/*! Cat-a-lot | CC-BY-SA-4.0 <https://ysymh.cc/H:CC-BY-SA-4.0> */
extendJQueryPrototype();
catALot();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NhdC1hLWxvdC9vcHRpb25zLmpzb24iLCAic3JjL0NhdC1hLWxvdC9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9DYXQtYS1sb3QvbW9kdWxlcy9tZXNzYWdlcy50cyIsICJzcmMvQ2F0LWEtbG90L21vZHVsZXMvY29yZS50c3giLCAic3JjL0NhdC1hLWxvdC9tb2R1bGVzL2FwaS50cyIsICJzcmMvQ2F0LWEtbG90L21vZHVsZXMvZXh0ZW5kSlF1ZXJ5UHJvdG90eXBlLnRzIiwgInNyYy9DYXQtYS1sb3QvQ2F0LWEtbG90LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiYXBpVGFnXCI6IFwiQ2F0LWEtbG90XCIsXG5cdFwidGFyZ2V0TmFtZXNwYWNlXCI6IDE0LFxuXHRcInZlcnNpb25cIjogXCI2LjBcIixcblx0XCJzdG9yYWdlS2V5XCI6IFwiZXh0LmdhZGdldC5DYXQtYS1Mb3RfcmVzdWx0cy1cIlxufVxuIiwgIi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuaW1wb3J0IHR5cGUge1NldHRpbmd9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBDTEFTU19OQU1FOiBzdHJpbmcgPSAnZ2FkZ2V0LWNhdF9hX2xvdCc7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUjogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX0tY29udGFpbmVyYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEE6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSfV9fZGF0YWA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1Q6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEF9X19jYXRlZ29yeS1saXN0YDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9BQ1RJT046IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVH1fX2FjdGlvbmA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfTk9fRk9VTkQ6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVH0tLW5vLWZvdW5kYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfTUFSS19DT1VOVEVSOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBfV9fbWFyay1jb3VudGVyYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VBUkNIX0lOUFVUX0NPTlRBSU5FUl9JTlBVVDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQX1fX3NlYXJjaC1pbnB1dC1jb250YWluZXJfX2lucHV0YDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OUzogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQX1fX3NlbGVjdGlvbnNgO1xuY29uc3QgQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX0FMTDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TfV9fYWxsYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OU19OT05FOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlN9X19ub25lYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQUQ6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSfV9faGVhZGA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTks6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0hFQUR9X19saW5rYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOS19FTkFCTEVEOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTkt9LS1lbmFibGVkYDtcbmNvbnN0IENMQVNTX05BTUVfQ1VSUkVOVF9DT1VOVEVSOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FfS1jdXJyZW50X2NvdW50ZXJgO1xuY29uc3QgQ0xBU1NfTkFNRV9GRUVEQkFDSzogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX0tZmVlZGJhY2tgO1xuY29uc3QgQ0xBU1NfTkFNRV9GRUVEQkFDS19ET05FOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0ZFRURCQUNLfS0tZG9uZWA7XG5jb25zdCBDTEFTU19OQU1FX0xBQkVMOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FfS1sYWJlbGA7XG5jb25zdCBDTEFTU19OQU1FX0xBQkVMX0RPTkU6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfTEFCRUx9LS1kb25lYDtcbmNvbnN0IENMQVNTX05BTUVfTEFCRUxfTEFTVF9TRUxFQ1RFRDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9MQUJFTH0tLWxhc3Qtc2VsZWN0ZWRgO1xuY29uc3QgQ0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9MQUJFTH0tLXNlbGVjdGVkYDtcblxuY29uc3QgREVGQVVMVF9TRVRUSU5HOiBTZXR0aW5nID0ge1xuXHRkb2NsZWFudXA6IHtcblx0XHRkZWZhdWx0OiBmYWxzZSxcblx0XHRsYWJlbF9pMThuOiAnZG9jbGVhbnVwcHJlZicsXG5cdH0sXG5cdGVkaXRwYWdlczoge1xuXHRcdGRlZmF1bHQ6IHRydWUsXG5cdFx0bGFiZWxfaTE4bjogJ2VkaXRwYWdlc3ByZWYnLFxuXHR9LFxuXHRtaW5vcjoge1xuXHRcdGRlZmF1bHQ6IGZhbHNlLFxuXHRcdGxhYmVsX2kxOG46ICdtaW5vcnByZWYnLFxuXHR9LFxuXHRzdWJjYXRjb3VudDoge1xuXHRcdGRlZmF1bHQ6IDUwLFxuXHRcdGxhYmVsX2kxOG46ICdzdWJjYXRjb3VudHByZWYnLFxuXHR9LFxuXHR3YXRjaGxpc3Q6IHtcblx0XHRkZWZhdWx0OiAncHJlZmVyZW5jZXMnLFxuXHRcdGxhYmVsX2kxOG46ICd3YXRjaGxpc3RwcmVmJyxcblx0XHRzZWxlY3RfaTE4bjoge1xuXHRcdFx0d2F0Y2hfbm9jaGFuZ2U6ICdub2NoYW5nZScsXG5cdFx0XHR3YXRjaF9wcmVmOiAncHJlZmVyZW5jZXMnLFxuXHRcdFx0d2F0Y2hfdW53YXRjaDogJ3Vud2F0Y2gnLFxuXHRcdFx0d2F0Y2hfd2F0Y2g6ICd3YXRjaCcsXG5cdFx0fSxcblx0fSxcbn07XG5cbmNvbnN0IFZBUklBTlRTOiBzdHJpbmdbXSA9IFsnemgtaGFucycsICd6aC1oYW50JywgJ3poLWNuJywgJ3poLW15JywgJ3poLXNnJywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXR3J107XG5cbmV4cG9ydCB7XG5cdENMQVNTX05BTUUsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1QsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9BQ1RJT04sXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9OT19GT1VORCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9NQVJLX0NPVU5URVIsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VBUkNIX0lOUFVUX0NPTlRBSU5FUl9JTlBVVCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfQUxMLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfTk9ORSxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTktfRU5BQkxFRCxcblx0Q0xBU1NfTkFNRV9DVVJSRU5UX0NPVU5URVIsXG5cdENMQVNTX05BTUVfRkVFREJBQ0ssXG5cdENMQVNTX05BTUVfRkVFREJBQ0tfRE9ORSxcblx0Q0xBU1NfTkFNRV9MQUJFTCxcblx0Q0xBU1NfTkFNRV9MQUJFTF9ET05FLFxuXHRDTEFTU19OQU1FX0xBQkVMX0xBU1RfU0VMRUNURUQsXG5cdENMQVNTX05BTUVfTEFCRUxfU0VMRUNURUQsXG5cdERFRkFVTFRfU0VUVElORyxcblx0VkFSSUFOVFMsXG59O1xuIiwgImltcG9ydCB0eXBlIHtNZXNzYWdlS2V5fSBmcm9tICcuL3R5cGVzJztcblxuY29uc3Qge3dnVXNlckxhbmd1YWdlfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuY29uc3QgREVGQVVMVF9NRVNTQUdFUyA9IHtcblx0Ly8gYXMgaW4gMTcgZmlsZXMgc2VsZWN0ZWRcblx0J2NhdC1hLWxvdC1maWxlcy1zZWxlY3RlZCc6ICd7e1BMVVJBTDokMXxPbmUgZmlsZXwkMSBmaWxlc319IHNlbGVjdGVkLicsXG5cdC8vIEFjdGlvbnNcblx0J2NhdC1hLWxvdC1jb3B5JzogJ0NvcHknLFxuXHQnY2F0LWEtbG90LW1vdmUnOiAnTW92ZScsXG5cdCdjYXQtYS1sb3QtYWRkJzogJ0FkZCcsXG5cdCdjYXQtYS1sb3QtcmVtb3ZlLWZyb20tY2F0JzogJ1JlbW92ZSBmcm9tIHRoaXMgY2F0ZWdvcnknLFxuXHQnY2F0LWEtbG90LWVudGVyLW5hbWUnOiAnRW50ZXIgY2F0ZWdvcnkgbmFtZScsXG5cdCdjYXQtYS1sb3Qtc2VsZWN0JzogJ1NlbGVjdCcsXG5cdCdjYXQtYS1sb3QtYWxsJzogJ2FsbCcsXG5cdCdjYXQtYS1sb3Qtbm9uZSc6ICdub25lJyxcblx0J2NhdC1hLWxvdC1ub25lLXNlbGVjdGVkJzogJ05vIGZpbGVzIHNlbGVjdGVkIScsXG5cdC8vIFByZWZlcmVuY2VzXG5cdCdjYXQtYS1sb3Qtd2F0Y2hsaXN0cHJlZic6ICdXYXRjaGxpc3QgcHJlZmVyZW5jZSBjb25jZXJuaW5nIGZpbGVzIGVkaXRlZCB3aXRoIENhdC1BLUxvdCcsXG5cdCdjYXQtYS1sb3Qtd2F0Y2hfcHJlZic6ICdBY2NvcmRpbmcgdG8geW91ciBnZW5lcmFsIHByZWZlcmVuY2VzJyxcblx0J2NhdC1hLWxvdC13YXRjaF9ub2NoYW5nZSc6ICdEbyBub3QgY2hhbmdlIHdhdGNoc3RhdHVzJyxcblx0J2NhdC1hLWxvdC13YXRjaF93YXRjaCc6ICdXYXRjaCBwYWdlcyBlZGl0ZWQgd2l0aCBDYXQtQS1Mb3QnLFxuXHQnY2F0LWEtbG90LXdhdGNoX3Vud2F0Y2gnOiAnUmVtb3ZlIHBhZ2VzIHdoaWxlIGVkaXRpbmcgd2l0aCBDYXQtQS1Mb3QgZnJvbSB5b3VyIHdhdGNobGlzdCcsXG5cdCdjYXQtYS1sb3QtbWlub3JwcmVmJzpcblx0XHRcIk1hcmsgZWRpdHMgYXMgbWlub3IgKGlmIHlvdSBnZW5lcmFsbHkgbWFyayB5b3VyIGVkaXRzIGFzIG1pbm9yLCB0aGlzIHdvbid0IGNoYW5nZSBhbnl0aGluZylcIixcblx0J2NhdC1hLWxvdC1lZGl0cGFnZXNwcmVmJzogJ0FsbG93IGNhdGVnb3Jpc2luZyBwYWdlcyAoaW5jbHVkaW5nIGNhdGVnb3JpZXMpIHRoYXQgYXJlIG5vdCBmaWxlcycsXG5cdCdjYXQtYS1sb3QtZG9jbGVhbnVwcHJlZic6ICdSZW1vdmUge3tDaGVjayBjYXRlZ29yaWVzfX0gYW5kIG90aGVyIG1pbm9yIGNsZWFudXAnLFxuXHQnY2F0LWEtbG90LXN1YmNhdGNvdW50cHJlZic6ICdTdWItY2F0ZWdvcmllcyB0byBzaG93IGF0IG1vc3QnLFxuXHQvLyBQcm9ncmVzc1xuXHQnY2F0LWEtbG90LWxvYWRpbmcnOiAnTG9hZGluZy4uLicsXG5cdCdjYXQtYS1sb3QtZWRpdGluZyc6ICdFZGl0aW5nIHBhZ2UnLFxuXHQnY2F0LWEtbG90LW9mJzogJ29mICcsXG5cdCdjYXQtYS1sb3Qtc2tpcHBlZC1hbHJlYWR5Jzpcblx0XHQnVGhlIGZvbGxvd2luZyB7e1BMVVJBTDokMXxwYWdlIHdhc3wkMSBwYWdlcyB3ZXJlfX0gc2tpcHBlZCwgYmVjYXVzZSB0aGUgcGFnZSB3YXMgYWxyZWFkeSBpbiB0aGUgY2F0ZWdvcnk6Jyxcblx0J2NhdC1hLWxvdC1za2lwcGVkLW5vdC1mb3VuZCc6XG5cdFx0J1RoZSBmb2xsb3dpbmcge3tQTFVSQUw6JDF8cGFnZSB3YXN8JDEgcGFnZXMgd2VyZX19IHNraXBwZWQsIGJlY2F1c2UgdGhlIG9sZCBjYXRlZ29yeSBjb3VsZCBub3QgYmUgZm91bmQ6Jyxcblx0J2NhdC1hLWxvdC1za2lwcGVkLXNlcnZlcic6XG5cdFx0XCJUaGUgZm9sbG93aW5nIHt7UExVUkFMOiQxfHBhZ2V8JDEgcGFnZXN9fSBjb3VsZG4ndCBiZSBjaGFuZ2VkLCBzaW5jZSB0aGVyZSB3ZXJlIHByb2JsZW1zIGNvbm5lY3RpbmcgdG8gdGhlIHNlcnZlcjpcIixcblx0J2NhdC1hLWxvdC1hbGwtZG9uZSc6ICdBbGwgcGFnZXMgYXJlIHByb2Nlc3NlZC4nLFxuXHQnY2F0LWEtbG90LWRvbmUnOiAnRG9uZSEnLFxuXHQnY2F0LWEtbG90LWFkZGVkLWNhdCc6ICdBZGRlZCBjYXRlZ29yeSAkMScsXG5cdCdjYXQtYS1sb3QtY29waWVkLWNhdCc6ICdDb3BpZWQgdG8gY2F0ZWdvcnkgJDEnLFxuXHQnY2F0LWEtbG90LW1vdmVkLWNhdCc6ICdNb3ZlZCB0byBjYXRlZ29yeSAkMScsXG5cdCdjYXQtYS1sb3QtcmVtb3ZlZC1jYXQnOiAnUmVtb3ZlZCBmcm9tIGNhdGVnb3J5ICQxJyxcblx0J2NhdC1hLWxvdC1yZXR1cm4tdG8tcGFnZSc6ICdSZXR1cm4gdG8gcGFnZScsXG5cdCdjYXQtYS1sb3QtY2F0LW5vdC1mb3VuZCc6ICdDYXRlZ29yeSBub3QgZm91bmQuJyxcblx0Ly8gU3VtbWFyaWVzOlxuXHQnY2F0LWEtbG90LXN1bW1hcnktYWRkJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV06IEFkZGluZyBbW0NhdGVnb3J5OiQxXV0nLFxuXHQnY2F0LWEtbG90LXN1bW1hcnktY29weSc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1dOiBDb3B5aW5nIGZyb20gW1tDYXRlZ29yeTokMV1dIHRvIFtbQ2F0ZWdvcnk6JDJdXScsXG5cdCdjYXQtYS1sb3Qtc3VtbWFyeS1tb3ZlJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV06IE1vdmluZyBmcm9tIFtbQ2F0ZWdvcnk6JDFdXSB0byBbW0NhdGVnb3J5OiQyXV0nLFxuXHQnY2F0LWEtbG90LXN1bW1hcnktcmVtb3ZlJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV06IFJlbW92aW5nIGZyb20gW1tDYXRlZ29yeTokMV1dJyxcbn0gc2F0aXNmaWVzIFJlY29yZDxNZXNzYWdlS2V5LCBzdHJpbmc+O1xuXG5jb25zdCBzZXRNZXNzYWdlcyA9ICgpOiB2b2lkID0+IHtcblx0LyohIENhdC1hLWxvdCBtZXNzYWdlcyB8IENDLUJZLVNBLTQuMCA8aHR0cHM6Ly95c3ltaC5jYy9IOkNDLUJZLVNBLTQuMD4gKi9cblx0aWYgKHdnVXNlckxhbmd1YWdlID09PSAnZW4nKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKFsnemgtaGFudCcsICd6aC1oaycsICd6aC1tbycsICd6aC10dyddLmluY2x1ZGVzKHdnVXNlckxhbmd1YWdlKSkge1xuXHRcdG13Lm1lc3NhZ2VzLnNldDx0eXBlb2YgREVGQVVMVF9NRVNTQUdFUz4oe1xuXHRcdFx0Ly8gYXMgaW4gMTcgZmlsZXMgc2VsZWN0ZWRcblx0XHRcdCdjYXQtYS1sb3QtZmlsZXMtc2VsZWN0ZWQnOiAnJDHlgIvmlofku7blt7Lpgbjmk4cnLFxuXHRcdFx0Ly8gQWN0aW9uc1xuXHRcdFx0J2NhdC1hLWxvdC1jb3B5JzogJ+ikh+ijvScsXG5cdFx0XHQnY2F0LWEtbG90LW1vdmUnOiAn56e75YuVJyxcblx0XHRcdCdjYXQtYS1sb3QtYWRkJzogJ+WinuWKoCcsXG5cdFx0XHQnY2F0LWEtbG90LXJlbW92ZS1mcm9tLWNhdCc6ICflvp7mraTliIbpoZ7np7vpmaQnLFxuXHRcdFx0J2NhdC1hLWxvdC1lbnRlci1uYW1lJzogJ+i8uOWFpeWIhumhnuWQjeeosScsXG5cdFx0XHQnY2F0LWEtbG90LXNlbGVjdCc6ICfpgbjmk4cnLFxuXHRcdFx0J2NhdC1hLWxvdC1hbGwnOiAn5YWo6YOoJyxcblx0XHRcdCdjYXQtYS1sb3Qtbm9uZSc6ICfnhKEnLFxuXHRcdFx0J2NhdC1hLWxvdC1ub25lLXNlbGVjdGVkJzogJ+aykuaciemBuOaTh+aWh+S7tu+8gScsXG5cdFx0XHQvLyBQcmVmZXJlbmNlc1xuXHRcdFx0J2NhdC1hLWxvdC13YXRjaGxpc3RwcmVmJzogJ+S9v+eUqENhdC1BLUxvdOe3qOi8r+aWh+S7tuaZgueahOebo+imluWIl+ihqOmBuOmghScsXG5cdFx0XHQnY2F0LWEtbG90LXdhdGNoX3ByZWYnOiAn6IiH57O757Wx5Y+D5pW46Kit572u55u45ZCMJyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfbm9jaGFuZ2UnOiAn5LiN6KaB5pu05pS555uj6KaW54uA5oWLJyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfd2F0Y2gnOiAn55uj6KaW5L2/55SoQ2F0LUEtTG9057eo6Lyv55qE6aCB6Z2iJyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfdW53YXRjaCc6ICflsIfkvb/nlKhDYXQtQS1Mb3Tnt6jovK/nmoTpoIHpnaLlvp7nm6PoppbliJfooajnp7vpmaQnLFxuXHRcdFx0J2NhdC1hLWxvdC1taW5vcnByZWYnOlxuXHRcdFx0XHQn5bCH57eo6Lyv5qiZ6KiY54iy5bCP5L+u5pS577yI6Iul5oKo5Zyo57O757Wx5Y+D5pW46Kit572u5Lit5bey6Kit572u5bCH5omA5pyJ57eo6Lyv5qiZ6KiY54iy5bCP5L+u5pS577yM5q2k6YG46aCF5LiN5pyD5bCN54++5pyJ6KGM54iy6YCy6KGM5pS55YuV77yJJyxcblx0XHRcdCdjYXQtYS1sb3QtZWRpdHBhZ2VzcHJlZic6ICflhYHoqLHlsI3kuI3mmK/mlofku7bnmoTpoIHpnaLlkozlrZDliIbpoZ7pgLLooYzliIbpoZ7mk43kvZwnLFxuXHRcdFx0J2NhdC1hLWxvdC1kb2NsZWFudXBwcmVmJzogJ+enu+mZpHt7Q2hlY2sgY2F0ZWdvcmllc3195Lim6YCy6KGM5YW25LuW57Sw56+A5riF55CGJyxcblx0XHRcdCdjYXQtYS1sb3Qtc3ViY2F0Y291bnRwcmVmJzogJ+acgOWkmumhr+ekuueahOWtkOWIhumhnuaVuOmHjycsXG5cdFx0XHQvLyBQcm9ncmVzc1xuXHRcdFx0J2NhdC1hLWxvdC1sb2FkaW5nJzogJ+ato+WcqOWKoOi8ieKApuKApicsXG5cdFx0XHQnY2F0LWEtbG90LWVkaXRpbmcnOiAn5q2j5Zyo57eo6Lyv6aCB6Z2iJyxcblx0XHRcdCdjYXQtYS1sb3Qtb2YnOiAn77yM5YWx5pyJJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2tpcHBlZC1hbHJlYWR5JzogJ+S7peS4i+mggemdouW3sui3s+mBju+8jOWboOeIsumggemdouW3sue2k+WcqOWIhumhnuS4re+8micsXG5cdFx0XHQnY2F0LWEtbG90LXNraXBwZWQtbm90LWZvdW5kJzogJ+S7peS4i+mggemdouW3sui3s+mBju+8jOWboOeIsuaJvuS4jeWIsOePvuacieWIhumhnu+8micsXG5cdFx0XHQnY2F0LWEtbG90LXNraXBwZWQtc2VydmVyJzogJ+S7peS4i+mggemdoueEoeazlee3qOi8r++8jOWboOeIsumAo+aOpeacjeWLmeWZqOWHuumMr++8micsXG5cdFx0XHQnY2F0LWEtbG90LWFsbC1kb25lJzogJ+WFqOmDqOmggemdouW3suiZleeQhuOAgicsXG5cdFx0XHQnY2F0LWEtbG90LWRvbmUnOiAn5bey5a6M5oiQ77yBJyxcblx0XHRcdCdjYXQtYS1sb3QtYWRkZWQtY2F0JzogJ+W3suWKoOWFpeWIhumhnicsXG5cdFx0XHQnY2F0LWEtbG90LWNvcGllZC1jYXQnOiAn5bey6KSH6KO95Yiw5YiG6aGeJyxcblx0XHRcdCdjYXQtYS1sb3QtbW92ZWQtY2F0JzogJ+W3suenu+WLleWIsOWIhumhnicsXG5cdFx0XHQnY2F0LWEtbG90LXJlbW92ZWQtY2F0JzogJ+W3suW+nuWIhumhnuenu+mZpCcsXG5cdFx0XHQnY2F0LWEtbG90LXJldHVybi10by1wYWdlJzogJ+i/lOWbnuWIsOmggemdoicsXG5cdFx0XHQnY2F0LWEtbG90LWNhdC1ub3QtZm91bmQnOiAn5om+5LiN5Yiw5YiG6aGe44CCJyxcblx0XHRcdC8vIFN1bW1hcmllc1xuXHRcdFx0J2NhdC1hLWxvdC1zdW1tYXJ5LWFkZCc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1d77ya5Yqg5YWl5YiG6aGeW1tDYXRlZ29yeTokMV1dJyxcblx0XHRcdCdjYXQtYS1sb3Qtc3VtbWFyeS1jb3B5JzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV3vvJrliIbpoZ7plpPopIfoo73vvJrlvp5bW0NhdGVnb3J5OiQxXV3liLBbW0NhdGVnb3J5OiQyXV0nLFxuXHRcdFx0J2NhdC1hLWxvdC1zdW1tYXJ5LW1vdmUnOiAnW1tIZWxwOkNhdC1hLWxvdHxDYXQtYS1sb3RdXe+8muWIhumhnumWk+enu+WLle+8muW+nltbQ2F0ZWdvcnk6JDFdXeWIsFtbQ2F0ZWdvcnk6JDJdXScsXG5cdFx0XHQnY2F0LWEtbG90LXN1bW1hcnktcmVtb3ZlJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV3vvJrlvp7liIbpoZ7np7vpmaTvvJpbW0NhdGVnb3J5OiQxXV0nLFxuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdG13Lm1lc3NhZ2VzLnNldDx0eXBlb2YgREVGQVVMVF9NRVNTQUdFUz4oe1xuXHRcdFx0Ly8gYXMgaW4gMTcgZmlsZXMgc2VsZWN0ZWRcblx0XHRcdCdjYXQtYS1sb3QtZmlsZXMtc2VsZWN0ZWQnOiAn5bey6YCJ5oupJDHkuKrpobXpnaLmiJbmlofku7YnLFxuXHRcdFx0Ly8gQWN0aW9uc1xuXHRcdFx0J2NhdC1hLWxvdC1jb3B5JzogJ+WkjeWIticsXG5cdFx0XHQnY2F0LWEtbG90LW1vdmUnOiAn56e75YqoJyxcblx0XHRcdCdjYXQtYS1sb3QtYWRkJzogJ+WinuWKoCcsXG5cdFx0XHQnY2F0LWEtbG90LXJlbW92ZS1mcm9tLWNhdCc6ICfku47mraTliIbnsbvnp7vpmaQnLFxuXHRcdFx0J2NhdC1hLWxvdC1lbnRlci1uYW1lJzogJ+i+k+WFpeWIhuexu+WQjeensCcsXG5cdFx0XHQnY2F0LWEtbG90LXNlbGVjdCc6ICfpgInmi6knLFxuXHRcdFx0J2NhdC1hLWxvdC1hbGwnOiAn5YWo6YOoJyxcblx0XHRcdCdjYXQtYS1sb3Qtbm9uZSc6ICfml6AnLFxuXHRcdFx0J2NhdC1hLWxvdC1ub25lLXNlbGVjdGVkJzogJ+ayoeaciemAieaLqeS7u+S9lemhtemdouaIluaWh+S7tu+8gScsXG5cdFx0XHQvLyBQcmVmZXJlbmNlc1xuXHRcdFx0J2NhdC1hLWxvdC13YXRjaGxpc3RwcmVmJzogJ+S9v+eUqENhdC1hLWxvdOe8lui+keaWh+S7tuaXtueahOebkeinhuWIl+ihqOmAiemhuScsXG5cdFx0XHQnY2F0LWEtbG90LXdhdGNoX3ByZWYnOiAn5LiO57O757uf5Y+C5pWw6K6+572u55u45ZCMJyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfbm9jaGFuZ2UnOiAn5LiN6KaB5pu05pS555uR6KeG54q25oCBJyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfd2F0Y2gnOiAn55uR6KeG5L2/55SoQ2F0LWEtbG9057yW6L6R55qE6aG16Z2iJyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfdW53YXRjaCc6ICflsIbkvb/nlKhDYXQtYS1sb3TnvJbovpHnmoTpobXpnaLku47nm5Hop4bliJfooajnp7vpmaQnLFxuXHRcdFx0J2NhdC1hLWxvdC1taW5vcnByZWYnOlxuXHRcdFx0XHQn5bCG57yW6L6R5qCH6K6w5Li65bCP5L+u5pS577yI6Iul5oKo5Zyo57O757uf5Y+C5pWw6K6+572u5Lit5bey6K6+572u5bCG5omA5pyJ57yW6L6R5qCH6K6w5Li65bCP5L+u5pS577yM5q2k6YCJ6aG55LiN5Lya5a+5546w5pyJ6KGM5Li66L+b6KGM5pS55Yqo77yJJyxcblx0XHRcdCdjYXQtYS1sb3QtZWRpdHBhZ2VzcHJlZic6ICflhYHorrjlr7nkuI3mmK/mlofku7bnmoTpobXpnaLlkozlrZDliIbnsbvov5vooYzliIbnsbvmk43kvZwnLFxuXHRcdFx0J2NhdC1hLWxvdC1kb2NsZWFudXBwcmVmJzogJ+enu+mZpHt7Q2hlY2sgY2F0ZWdvcmllc3195bm26L+b6KGM5YW25LuW57uG6IqC5riF55CGJyxcblx0XHRcdCdjYXQtYS1sb3Qtc3ViY2F0Y291bnRwcmVmJzogJ+acgOWkmuaYvuekuueahOWtkOWIhuexu+aVsOmHjycsXG5cdFx0XHQvLyBQcm9ncmVzc1xuXHRcdFx0J2NhdC1hLWxvdC1sb2FkaW5nJzogJ+ato+WcqOWKoOi9veKApuKApicsXG5cdFx0XHQnY2F0LWEtbG90LWVkaXRpbmcnOiAn5q2j5Zyo57yW6L6R6aG16Z2iJyxcblx0XHRcdCdjYXQtYS1sb3Qtb2YnOiAn77yM5YWx5pyJJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2tpcHBlZC1hbHJlYWR5JzogJ+S7peS4i+mhtemdouW3sui3s+i/h++8jOWboOS4uumhtemdouW3sue7j+WcqOWIhuexu+S4re+8micsXG5cdFx0XHQnY2F0LWEtbG90LXNraXBwZWQtbm90LWZvdW5kJzogJ+S7peS4i+mhtemdouW3sui3s+i/h++8jOWboOS4uuaJvuS4jeWIsOeOsOacieWIhuexu++8micsXG5cdFx0XHQnY2F0LWEtbG90LXNraXBwZWQtc2VydmVyJzogJ+S7peS4i+mhtemdouaXoOazlee8lui+ke+8jOWboOS4uui/nuaOpeacjeWKoeWZqOWHuumUme+8micsXG5cdFx0XHQnY2F0LWEtbG90LWFsbC1kb25lJzogJ+WFqOmDqOmhtemdouW3suWkhOeQhuOAgicsXG5cdFx0XHQnY2F0LWEtbG90LWRvbmUnOiAn5bey5a6M5oiQ77yBJyxcblx0XHRcdCdjYXQtYS1sb3QtYWRkZWQtY2F0JzogJ+W3suWKoOWFpeWIhuexuycsXG5cdFx0XHQnY2F0LWEtbG90LWNvcGllZC1jYXQnOiAn5bey5aSN5Yi25Yiw5YiG57G7Jyxcblx0XHRcdCdjYXQtYS1sb3QtbW92ZWQtY2F0JzogJ+W3suenu+WKqOWIsOWIhuexuycsXG5cdFx0XHQnY2F0LWEtbG90LXJlbW92ZWQtY2F0JzogJ+W3suS7juWIhuexu+enu+mZpCcsXG5cdFx0XHQnY2F0LWEtbG90LXJldHVybi10by1wYWdlJzogJ+i/lOWbnuWIsOmhtemdoicsXG5cdFx0XHQnY2F0LWEtbG90LWNhdC1ub3QtZm91bmQnOiAn5om+5LiN5Yiw5YiG57G744CCJyxcblx0XHRcdC8vIFN1bW1hcmllc1xuXHRcdFx0J2NhdC1hLWxvdC1zdW1tYXJ5LWFkZCc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1d77ya5Yqg5YWl5YiG57G7W1tDYXRlZ29yeTokMV1dJyxcblx0XHRcdCdjYXQtYS1sb3Qtc3VtbWFyeS1jb3B5JzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV3vvJrliIbnsbvpl7TlpI3liLbvvJrku45bW0NhdGVnb3J5OiQxXV3liLBbW0NhdGVnb3J5OiQyXV0nLFxuXHRcdFx0J2NhdC1hLWxvdC1zdW1tYXJ5LW1vdmUnOiAnW1tIZWxwOkNhdC1hLWxvdHxDYXQtYS1sb3RdXe+8muWIhuexu+mXtOenu+WKqO+8muS7jltbQ2F0ZWdvcnk6JDFdXeWIsFtbQ2F0ZWdvcnk6JDJdXScsXG5cdFx0XHQnY2F0LWEtbG90LXN1bW1hcnktcmVtb3ZlJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV3vvJrku47liIbnsbvnp7vpmaTvvJpbW0NhdGVnb3J5OiQxXV0nLFxuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQge0RFRkFVTFRfTUVTU0FHRVMsIHNldE1lc3NhZ2VzfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge1xuXHRDTEFTU19OQU1FLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUixcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQSxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNULFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfQUNUSU9OLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfTk9fRk9VTkQsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfTUFSS19DT1VOVEVSLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFQVJDSF9JTlBVVF9DT05UQUlORVJfSU5QVVQsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OUyxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX0FMTCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX05PTkUsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQUQsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOSyxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LX0VOQUJMRUQsXG5cdENMQVNTX05BTUVfQ1VSUkVOVF9DT1VOVEVSLFxuXHRDTEFTU19OQU1FX0ZFRURCQUNLLFxuXHRDTEFTU19OQU1FX0ZFRURCQUNLX0RPTkUsXG5cdENMQVNTX05BTUVfTEFCRUwsXG5cdENMQVNTX05BTUVfTEFCRUxfRE9ORSxcblx0Q0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRCxcblx0REVGQVVMVF9TRVRUSU5HLFxuXHRWQVJJQU5UUyxcbn0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge0RFRkFVTFRfTUVTU0FHRVMsIHNldE1lc3NhZ2VzfSBmcm9tICcuL21lc3NhZ2VzJztcbmltcG9ydCB0eXBlIHtNZXNzYWdlS2V5LCBTZXR0aW5nfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7Z2V0Qm9keSwgdW5pcXVlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxuY29uc3Qge3dnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lLCB3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMsIHdnTmFtZXNwYWNlSWRzLCB3Z05hbWVzcGFjZU51bWJlciwgd2dUaXRsZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbi8qKlxuICogQ2hhbmdlcyBjYXRlZ29yeSBvZiBtdWx0aXBsZSBmaWxlc1xuICovXG5jb25zdCBjYXRBTG90ID0gKCk6IHZvaWQgPT4ge1xuXHQvKiEgQ2F0LWEtbG90IHwgQ0MtQlktU0EtNC4wIDxodHRwczovL3lzeW1oLmNjL0g6Q0MtQlktU0EtNC4wPiAqL1xuXHRjbGFzcyBDQUwge1xuXHRcdHB1YmxpYyBzdGF0aWMgaXNTZWFyY2hNb2RlID0gZmFsc2U7XG5cblx0XHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBNRVNTQUdFUzogUmVjb3JkPE1lc3NhZ2VLZXksIHN0cmluZz4gPSBERUZBVUxUX01FU1NBR0VTO1xuXHRcdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfU0VUVElORzogU2V0dGluZyA9IERFRkFVTFRfU0VUVElORztcblxuXHRcdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEFQSV9UQUc6IHN0cmluZyA9IE9QVElPTlMuYXBpVGFnO1xuXHRcdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFRBUkdFVF9OQU1FU1BBQ0U6IG51bWJlciA9IE9QVElPTlMudGFyZ2V0TmFtZXNwYWNlO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgQ1VSUkVOVF9DQVRFR1JPWTogc3RyaW5nID0gd2dUaXRsZTtcblxuXHRcdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHdnRm9ybWF0dGVkTmFtZXNwYWNlczogUmVjb3JkPG51bWJlciwgc3RyaW5nPiA9IHdnRm9ybWF0dGVkTmFtZXNwYWNlcztcblx0XHRwcml2YXRlIHN0YXRpYyByZWFkb25seSB3Z05hbWVzcGFjZUlkczogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHdnTmFtZXNwYWNlSWRzO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgaXNBdXRvQ29tcGxldGVJbml0ID0gZmFsc2U7XG5cblx0XHRwcml2YXRlIHN0YXRpYyBhcGkgPSBhcGk7XG5cblx0XHRwcml2YXRlIHN0YXRpYyBhbHJlYWR5VGhlcmU6IHN0cmluZ1tdID0gW107XG5cdFx0cHJpdmF0ZSBzdGF0aWMgY29ubmVjdGlvbkVycm9yOiBzdHJpbmdbXSA9IFtdO1xuXHRcdHByaXZhdGUgc3RhdGljIG5vdEZvdW5kOiBzdHJpbmdbXSA9IFtdO1xuXHRcdHByaXZhdGUgc3RhdGljIGNvdW50ZXJDdXJyZW50ID0gMDtcblx0XHRwcml2YXRlIHN0YXRpYyBjb3VudGVyTmVlZGVkID0gMDtcblxuXHRcdHByaXZhdGUgc3RhdGljIGNvdW50ZXJDYXQgPSAwO1xuXHRcdHByaXZhdGUgc3RhdGljIGN1cnJlbnRDYXRlZ29yeSA9ICcnO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgZGlhbG9nSGVpZ2h0ID0gNDUwO1xuXHRcdHByaXZhdGUgc3RhdGljIGVkaXRUb2tlbiA9ICcnO1xuXHRcdHByaXZhdGUgc3RhdGljIGxvY2FsQ2F0TmFtZSA9IHdnRm9ybWF0dGVkTmFtZXNwYWNlc1tDQUwuVEFSR0VUX05BTUVTUEFDRV0gYXMgc3RyaW5nO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgcGFyZW50Q2F0czogc3RyaW5nW10gPSBbXTtcblx0XHRwcml2YXRlIHN0YXRpYyBzdWJDYXRzOiBzdHJpbmdbXSA9IFtdO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgc2V0dGluZ3M6IE5vbk51bGxhYmxlPHR5cGVvZiB3aW5kb3cuQ2F0QUxvdFByZWZzPiA9IHt9O1xuXHRcdHByaXZhdGUgc3RhdGljIHZhcmlhbnRDYWNoZTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+ID0ge307XG5cblx0XHRwcml2YXRlIHN0YXRpYyAkY291bnRlcjogSlF1ZXJ5ID0gJCgpO1xuXHRcdHByaXZhdGUgc3RhdGljICRwcm9ncmVzc0RpYWxvZzogSlF1ZXJ5ID0gJCgpO1xuXHRcdHByaXZhdGUgc3RhdGljICRsYWJlbHM6IEpRdWVyeSA9ICQoKTtcblx0XHRwcml2YXRlIHN0YXRpYyAkc2VsZWN0ZWRMYWJlbHM6IEpRdWVyeSA9ICQoKTtcblxuXHRcdHByaXZhdGUgcmVhZG9ubHkgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+O1xuXHRcdHByaXZhdGUgcmVhZG9ubHkgJGNvbnRhaW5lcjogSlF1ZXJ5O1xuXHRcdHByaXZhdGUgcmVhZG9ubHkgJGRhdGFDb250YWluZXI6IEpRdWVyeTtcblx0XHRwcml2YXRlIHJlYWRvbmx5ICRtYXJrQ291bnRlcjogSlF1ZXJ5O1xuXHRcdHByaXZhdGUgcmVhZG9ubHkgJHJlc3VsdExpc3Q6IEpRdWVyeTtcblx0XHRwcml2YXRlIHJlYWRvbmx5ICRzZWFyY2hJbnB1dDogSlF1ZXJ5PEhUTUxJbnB1dEVsZW1lbnQ+O1xuXHRcdHByaXZhdGUgcmVhZG9ubHkgJGhlYWQ6IEpRdWVyeTtcblx0XHRwcml2YXRlIHJlYWRvbmx5ICRsaW5rOiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+O1xuXG5cdFx0cHVibGljIGNvbnN0cnVjdG9yKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pikge1xuXHRcdFx0aWYgKCFtdy5tc2coJ2NhdC1hLWxvdC1sb2FkaW5nJykpIHtcblx0XHRcdFx0bXcubWVzc2FnZXMuc2V0KENBTC5NRVNTQUdFUyk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuJGJvZHkgPSAkYm9keTtcblx0XHRcdENBTC5pbml0U2V0dGluZ3MoKTtcblxuXHRcdFx0Y29uc3QgY29udGFpbmVyID0gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17W0NMQVNTX05BTUUsIENMQVNTX05BTUVfQ09OVEFJTkVSLCAnbm9wcmludCddfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQX0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9NQVJLX0NPVU5URVJ9IC8+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUfSAvPlxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFQVJDSF9JTlBVVF9DT05UQUlORVJfSU5QVVR9XG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e0NBTC5tc2coJ2VudGVyLW5hbWUnKX1cblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e0NBTC5pc1NlYXJjaE1vZGUgPyAobXcudXRpbC5nZXRQYXJhbVZhbHVlKCdzZWFyY2gnKSA/PyAnJykgOiAnJ31cblx0XHRcdFx0XHRcdFx0XHRvbktleURvd249eyhldmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgJGVsZW1lbnQgPSAkPEhUTUxJbnB1dEVsZW1lbnQ+KGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBjYXQ6IHN0cmluZyA9ICRlbGVtZW50LnZhbCgpPy50cmltKCkgPz8gJyc7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChjYXQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnVwZGF0ZUNhdHMoY2F0KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlN9PlxuXHRcdFx0XHRcdFx0XHR7W0NBTC5tc2coJ3NlbGVjdCcpLCAnICddfVxuXHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX0FMTH1cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnRvZ2dsZUFsbCh0cnVlKTtcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ2FsbCcpfVxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdHsnIOKAoiAnfVxuXHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX05PTkV9XG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy50b2dnbGVBbGwoZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHR7Q0FMLm1zZygnbm9uZScpfVxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRH0+XG5cdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOS30+Q2F0LWEtbG90PC9hPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cblx0XHRcdHRoaXMuJGNvbnRhaW5lciA9ICQoY29udGFpbmVyKSBhcyBKUXVlcnk7XG5cdFx0XHR0aGlzLiRjb250YWluZXIuYXBwZW5kVG8odGhpcy4kYm9keSk7XG5cblx0XHRcdHRoaXMuJGRhdGFDb250YWluZXIgPSB0aGlzLiRjb250YWluZXIuZmluZChgLiR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQX1gKTtcblx0XHRcdHRoaXMuJG1hcmtDb3VudGVyID0gdGhpcy4kZGF0YUNvbnRhaW5lci5maW5kKGAuJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX01BUktfQ09VTlRFUn1gKTtcblx0XHRcdHRoaXMuJHJlc3VsdExpc3QgPSB0aGlzLiRkYXRhQ29udGFpbmVyLmZpbmQoYC4ke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVH1gKTtcblx0XHRcdHRoaXMuJHNlYXJjaElucHV0ID0gdGhpcy4kZGF0YUNvbnRhaW5lci5maW5kPEhUTUxJbnB1dEVsZW1lbnQ+KFxuXHRcdFx0XHRgLiR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUFSQ0hfSU5QVVRfQ09OVEFJTkVSX0lOUFVUfWBcblx0XHRcdCk7XG5cblx0XHRcdHRoaXMuJGhlYWQgPSB0aGlzLiRjb250YWluZXIuZmluZChgLiR7Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRH1gKTtcblx0XHRcdHRoaXMuJGxpbmsgPSB0aGlzLiRoZWFkLmZpbmQ8SFRNTEFuY2hvckVsZW1lbnQ+KGAuJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTkt9YCk7XG5cdFx0fVxuXG5cdFx0cHVibGljIGJ1aWxkRWxlbWVudHMoKTogdm9pZCB7XG5cdFx0XHRjb25zdCByZWdleENhdDogUmVnRXhwID0gbmV3IFJlZ0V4cChgXlxcXFxzKiR7Q0FMLmxvY2FsaXplZFJlZ2V4KENBTC5UQVJHRVRfTkFNRVNQQUNFLCAnQ2F0ZWdvcnknKX06YCwgJycpO1xuXHRcdFx0bGV0IGlzQ29tcG9zaXRpb25TdGFydDogYm9vbGVhbjtcblxuXHRcdFx0dGhpcy4kc2VhcmNoSW5wdXQub24oJ2NvbXBvc2l0aW9uc3RhcnQnLCAoKSA9PiB7XG5cdFx0XHRcdGlzQ29tcG9zaXRpb25TdGFydCA9IHRydWU7XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy4kc2VhcmNoSW5wdXQub24oJ2NvbXBvc2l0aW9uZW5kJywgKCkgPT4ge1xuXHRcdFx0XHRpc0NvbXBvc2l0aW9uU3RhcnQgPSBmYWxzZTtcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLiRzZWFyY2hJbnB1dC5vbignaW5wdXQga2V5dXAnLCAoZXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0aWYgKGlzQ29tcG9zaXRpb25TdGFydCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCB7Y3VycmVudFRhcmdldH0gPSBldmVudDtcblx0XHRcdFx0Y29uc3Qge3ZhbHVlOiBvbGRWYWx9ID0gY3VycmVudFRhcmdldDtcblx0XHRcdFx0Y29uc3QgbmV3VmFsOiBzdHJpbmcgPSBvbGRWYWwucmVwbGFjZShyZWdleENhdCwgJycpO1xuXHRcdFx0XHRpZiAobmV3VmFsICE9PSBvbGRWYWwpIHtcblx0XHRcdFx0XHRjdXJyZW50VGFyZ2V0LnZhbHVlID0gbmV3VmFsO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0Y29uc3QgaW5pdEF1dG9jb21wbGV0ZSA9ICgpOiB2b2lkID0+IHtcblx0XHRcdFx0aWYgKENBTC5pc0F1dG9Db21wbGV0ZUluaXQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Q0FMLmlzQXV0b0NvbXBsZXRlSW5pdCA9IHRydWU7XG5cblx0XHRcdFx0dGhpcy4kc2VhcmNoSW5wdXQuYXV0b2NvbXBsZXRlKHtcblx0XHRcdFx0XHRzb3VyY2U6IChyZXF1ZXN0OiB7dGVybTogc3RyaW5nfSwgcmVzcG9uc2U6IChhcmc6IEpRdWVyeTxzdHJpbmc+KSA9PiB2b2lkKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLmRvQVBJQ2FsbChcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGFjdGlvbjogJ29wZW5zZWFyY2gnLFxuXHRcdFx0XHRcdFx0XHRcdG5hbWVzcGFjZTogQ0FMLlRBUkdFVF9OQU1FU1BBQ0UsXG5cdFx0XHRcdFx0XHRcdFx0cmVkaXJlY3RzOiAncmVzb2x2ZScsXG5cdFx0XHRcdFx0XHRcdFx0c2VhcmNoOiByZXF1ZXN0LnRlcm0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdChyZXN1bHQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRpZiAocmVzdWx0WzFdKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXNwb25zZShcblx0XHRcdFx0XHRcdFx0XHRcdFx0JChyZXN1bHRbMV0pLm1hcCgoX2luZGV4LCBpdGVtOiBzdHJpbmcpOiBzdHJpbmcgPT4gaXRlbS5yZXBsYWNlKHJlZ2V4Q2F0LCAnJykpXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHBvc2l0aW9uOiB7XG5cdFx0XHRcdFx0XHRteTogJ3JpZ2h0IGJvdHRvbScsXG5cdFx0XHRcdFx0XHRhdDogJ3JpZ2h0IHRvcCcsXG5cdFx0XHRcdFx0XHRvZjogdGhpcy4kc2VhcmNoSW5wdXQsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRhcHBlbmRUbzogYC4ke0NMQVNTX05BTUVfQ09OVEFJTkVSfWAsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fTtcblx0XHRcdHRoaXMuJGxpbmsub24oJ2NsaWNrJywgKGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdCQoZXZlbnQuY3VycmVudFRhcmdldCkudG9nZ2xlQ2xhc3MoQ0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LX0VOQUJMRUQpO1xuXHRcdFx0XHRpbml0QXV0b2NvbXBsZXRlKCk7XG5cdFx0XHRcdHRoaXMucnVuKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRwcml2YXRlIHN0YXRpYyBpbml0U2V0dGluZ3MoKTogdm9pZCB7XG5cdFx0XHRsZXQgY2F0QUxvdFByZWZzOiB0eXBlb2YgQ0FMLnNldHRpbmdzID0gd2luZG93LkNhdEFMb3RQcmVmcyA/PyB7fTtcblx0XHRcdGNvbnN0IHR5cGVPZkNhdEFMb3RQcmVmcyA9IHR5cGVvZiBjYXRBTG90UHJlZnM7XG5cdFx0XHRpZiAoKHR5cGVPZkNhdEFMb3RQcmVmcyA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoY2F0QUxvdFByZWZzKSkgfHwgdHlwZU9mQ2F0QUxvdFByZWZzICE9PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRjYXRBTG90UHJlZnMgPSB7fTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yIChjb25zdCBzZXR0aW5nS2V5IG9mIE9iamVjdC5rZXlzKENBTC5ERUZBVUxUX1NFVFRJTkcpIGFzIChrZXlvZiBTZXR0aW5nKVtdKSB7XG5cdFx0XHRcdGNvbnN0IHNldHRpbmcgPSBDQUwuREVGQVVMVF9TRVRUSU5HW3NldHRpbmdLZXldO1xuXG5cdFx0XHRcdENBTC5zZXR0aW5nc1tzZXR0aW5nS2V5XSA9IGNhdEFMb3RQcmVmc1tzZXR0aW5nS2V5XSA/PyBzZXR0aW5nLmRlZmF1bHQ7XG5cblx0XHRcdFx0aWYgKCFzZXR0aW5nLnNlbGVjdF9pMThuKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzZXR0aW5nLnNlbGVjdCA9IHt9O1xuXHRcdFx0XHRmb3IgKGNvbnN0IG1lc3NhZ2VLZXkgb2YgT2JqZWN0LmtleXMoc2V0dGluZy5zZWxlY3RfaTE4bikpIHtcblx0XHRcdFx0XHRjb25zdCBtZXNzYWdlOiBzdHJpbmcgPSBzZXR0aW5nLnNlbGVjdF9pMThuW21lc3NhZ2VLZXldIGFzIGtleW9mIHR5cGVvZiBzZXR0aW5nLnNlbGVjdF9pMThuO1xuXHRcdFx0XHRcdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0XHRcdFx0XHQvLyAqIHNlZSBtZXNzYWdlcy50c1xuXHRcdFx0XHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHRcdFx0XHRzZXR0aW5nLnNlbGVjdFtDQUwubXNnKG1lc3NhZ2VLZXkgYXMgbmV2ZXIpXSA9IG1lc3NhZ2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRwcml2YXRlIHN0YXRpYyBtc2coa2V5OiBNZXNzYWdlS2V5IGV4dGVuZHMgYGNhdC1hLWxvdC0ke2luZmVyIFB9YCA/IFAgOiBuZXZlciwgLi4uYXJnczogc3RyaW5nW10pOiBzdHJpbmcge1xuXHRcdFx0Y29uc3QgZnVsbEtleTogc3RyaW5nID0gYGNhdC1hLWxvdC0ke2tleX1gO1xuXHRcdFx0Ly8gTWVzc2FnZXMgdGhhdCBjYW4gYmUgdXNlZCBoZXJlOlxuXHRcdFx0Ly8gKiBzZWUgbWVzc2FnZXMudHNcblx0XHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHRcdHJldHVybiBhcmdzLmxlbmd0aCA/IG13Lm1lc3NhZ2UoZnVsbEtleSwgLi4uYXJncykucGFyc2UoKSA6IG13Lm1lc3NhZ2UoZnVsbEtleSkucGxhaW4oKTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBzdGF0aWMgbG9jYWxpemVkUmVnZXgobmFtZXNwYWNlTnVtYmVyOiBudW1iZXIsIGZhbGxiYWNrOiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdFx0Ly8gQ29waWVkIGZyb20gSG90Q2F0LCB0aGFua3MgTHVwby5cblx0XHRcdGNvbnN0IHdpa2lUZXh0Qmxhbms6IHN0cmluZyA9IFN0cmluZy5yYXdgW1xcdCBfXFx4QTBcXHUxNjgwXFx1MTgwRVxcdTIwMDAtXFx1MjAwQVxcdTIwMjhcXHUyMDI5XFx1MjAyRlxcdTIwNUZcXHUzMDAwXStgO1xuXHRcdFx0Y29uc3Qgd2lraVRleHRCbGFua1JFOiBSZWdFeHAgPSBuZXcgUmVnRXhwKHdpa2lUZXh0QmxhbmssICdnJyk7XG5cdFx0XHRjb25zdCBjcmVhdGVSZWdleFN0ciA9IChuYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQpOiBzdHJpbmcgPT4ge1xuXHRcdFx0XHRpZiAoIW5hbWU/Lmxlbmd0aCkge1xuXHRcdFx0XHRcdHJldHVybiAnJztcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgcmVnZXhOYW1lOiBzdHJpbmcgPSAnJztcblx0XHRcdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG5hbWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRjb25zdCBpbml0aWFsOiBzdHJpbmcgPSBuYW1lLnNsaWNlKGksIGkgKyAxKTtcblx0XHRcdFx0XHRjb25zdCBsbDogc3RyaW5nID0gaW5pdGlhbC50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHRcdGNvbnN0IHVsOiBzdHJpbmcgPSBpbml0aWFsLnRvVXBwZXJDYXNlKCk7XG5cdFx0XHRcdFx0cmVnZXhOYW1lICs9IGxsID09PSB1bCA/IGluaXRpYWwgOiBgWyR7bGx9JHt1bH1dYDtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcmVnZXhOYW1lLnJlcGxhY2UoLyhbJCgpKisuP1xcXFxeXSkvZywgU3RyaW5nLnJhd2BcXCQxYCkucmVwbGFjZSh3aWtpVGV4dEJsYW5rUkUsIHdpa2lUZXh0QmxhbmspO1xuXHRcdFx0fTtcblx0XHRcdGZhbGxiYWNrID0gZmFsbGJhY2sudG9Mb3dlckNhc2UoKTtcblx0XHRcdGNvbnN0IGNhbm9uaWNhbDogc3RyaW5nIHwgdW5kZWZpbmVkID0gQ0FMLndnRm9ybWF0dGVkTmFtZXNwYWNlc1tuYW1lc3BhY2VOdW1iZXJdPy50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0bGV0IHJlZ2V4U3RyaW5nOiBzdHJpbmcgPSBjcmVhdGVSZWdleFN0cihjYW5vbmljYWwpO1xuXHRcdFx0aWYgKGZhbGxiYWNrICYmIGNhbm9uaWNhbCAhPT0gZmFsbGJhY2spIHtcblx0XHRcdFx0cmVnZXhTdHJpbmcgKz0gYHwke2NyZWF0ZVJlZ2V4U3RyKGZhbGxiYWNrKX1gO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChjb25zdCBjYXROYW1lIG9mIE9iamVjdC5rZXlzKENBTC53Z05hbWVzcGFjZUlkcykpIHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdGNhdE5hbWUudG9Mb3dlckNhc2UoKSAhPT0gY2Fub25pY2FsICYmXG5cdFx0XHRcdFx0Y2F0TmFtZS50b0xvd2VyQ2FzZSgpICE9PSBmYWxsYmFjayAmJlxuXHRcdFx0XHRcdENBTC53Z05hbWVzcGFjZUlkc1tjYXROYW1lXSA9PT0gbmFtZXNwYWNlTnVtYmVyXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJlZ2V4U3RyaW5nICs9IGB8JHtjcmVhdGVSZWdleFN0cihjYXROYW1lKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gYCg/OiR7cmVnZXhTdHJpbmd9KWA7XG5cdFx0fVxuXHRcdHByaXZhdGUgdXBkYXRlU2VsZWN0aW9uQ291bnRlcigpOiB2b2lkIHtcblx0XHRcdENBTC4kc2VsZWN0ZWRMYWJlbHMgPSBDQUwuJGxhYmVscy5maWx0ZXIoYC4ke0NMQVNTX05BTUVfTEFCRUxfU0VMRUNURUR9YCk7XG5cdFx0XHR0aGlzLiRtYXJrQ291bnRlci5zaG93KCkuaHRtbChDQUwubXNnKCdmaWxlcy1zZWxlY3RlZCcsIENBTC4kc2VsZWN0ZWRMYWJlbHMubGVuZ3RoLnRvU3RyaW5nKCkpKTtcblx0XHR9XG5cdFx0cHJpdmF0ZSB0b2dnbGVBbGwoc2VsZWN0OiBib29sZWFuKTogdm9pZCB7XG5cdFx0XHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0XHRcdC8vICogc2VlIGNvbnN0YW50LnRzXG5cdFx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0XHRDQUwuJGxhYmVscy50b2dnbGVDbGFzcyhDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVELCBzZWxlY3QpO1xuXHRcdFx0dGhpcy51cGRhdGVTZWxlY3Rpb25Db3VudGVyKCk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgYXN5bmMgZmluZEFsbFZhcmlhbnRzKGNhdGVnb3J5OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG5cdFx0XHRpZiAoQ0FMLnZhcmlhbnRDYWNoZVtjYXRlZ29yeV0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRyZXR1cm4gQ0FMLnZhcmlhbnRDYWNoZVtjYXRlZ29yeV07XG5cdFx0XHR9XG5cdFx0XHRpZiAobXcuc3RvcmFnZS5nZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5ICsgY2F0ZWdvcnkpKSB7XG5cdFx0XHRcdENBTC52YXJpYW50Q2FjaGVbY2F0ZWdvcnldID0gbXcuc3RvcmFnZS5nZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5ICsgY2F0ZWdvcnkpIGFzIHN0cmluZ1tdO1xuXHRcdFx0XHRyZXR1cm4gQ0FMLnZhcmlhbnRDYWNoZVtjYXRlZ29yeV07XG5cdFx0XHR9XG5cdFx0XHRsZXQgcmVzdWx0czogc3RyaW5nW10gPSBbXTtcblx0XHRcdGNvbnN0IHBhcmFtczogQXBpUGFyc2VQYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0dGV4dDogY2F0ZWdvcnksXG5cdFx0XHRcdHRpdGxlOiAndGVtcCcsXG5cdFx0XHR9O1xuXHRcdFx0Zm9yIChjb25zdCB2YXJpYW50IG9mIFZBUklBTlRTKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Y29uc3Qge3BhcnNlfSA9IGF3YWl0IENBTC5hcGkuZ2V0KHtcblx0XHRcdFx0XHRcdC4uLnBhcmFtcyxcblx0XHRcdFx0XHRcdHZhcmlhbnQsXG5cdFx0XHRcdFx0fSBhcyB0eXBlb2YgcGFyYW1zKTtcblx0XHRcdFx0XHRjb25zdCB7dGV4dH0gPSBwYXJzZTtcblx0XHRcdFx0XHRjb25zdCByZXN1bHQgPSAkKHRleHQpLmVxKDApLnRleHQoKS50cmltKCk7XG5cdFx0XHRcdFx0cmVzdWx0c1tyZXN1bHRzLmxlbmd0aF0gPSByZXN1bHQ7XG5cdFx0XHRcdH0gY2F0Y2gge31cblx0XHRcdH1cblx0XHRcdC8vIERlLWR1cGxpY2F0ZVxuXHRcdFx0cmVzdWx0cyA9IHVuaXF1ZUFycmF5KHJlc3VsdHMpOyAvLyBSZXBsYWNlIFNldCB3aXRoIHVuaXF1ZUFycmF5LCBhdm9pZGluZyBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdFx0XHRDQUwudmFyaWFudENhY2hlW2NhdGVnb3J5XSA9IHJlc3VsdHM7XG5cdFx0XHRtdy5zdG9yYWdlLnNldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXkgKyBjYXRlZ29yeSwgcmVzdWx0cywgNjAgKiA2MCAqIDI0KTsgLy8gMSBkYXlcblx0XHRcdHJldHVybiByZXN1bHRzO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgc3RhdGljIGFzeW5jIHJlZ2V4QnVpbGRlcihjYXRlZ29yeTogc3RyaW5nKTogUHJvbWlzZTxSZWdFeHA+IHtcblx0XHRcdC8vIEJ1aWxkIGEgcmVnZXhwIHN0cmluZyBmb3IgbWF0Y2hpbmcgdGhlIGdpdmVuIGNhdGVnb3J5OlxuXHRcdFx0Y29uc3QgY2F0TmFtZTogc3RyaW5nID0gQ0FMLmxvY2FsaXplZFJlZ2V4KENBTC5UQVJHRVRfTkFNRVNQQUNFLCAnQ2F0ZWdvcnknKTtcblx0XHRcdC8vIHRyaW0gbGVhZGluZy90cmFpbGluZyB3aGl0ZXNwYWNlIGFuZCB1bmRlcnNjb3Jlc1xuXHRcdFx0Y2F0ZWdvcnkgPSBjYXRlZ29yeS5yZXBsYWNlKC9eW1xcc19dKy8sICcnKS5yZXBsYWNlKC9bXFxzX10rJC8sICcnKTtcblx0XHRcdC8vIEZpbmQgYWxsIHZhcmlhbnRzXG5cdFx0XHRjb25zdCB2YXJpYW50czogc3RyaW5nW10gPSBhd2FpdCBDQUwuZmluZEFsbFZhcmlhbnRzKGNhdGVnb3J5KTtcblx0XHRcdC8vIGVzY2FwZSByZWdleHAgbWV0YWNoYXJhY3RlcnMgKD0gYW55IEFTQ0lJIHB1bmN0dWF0aW9uIGV4Y2VwdCBfKVxuXHRcdFx0Y29uc3QgdmFyaWFudFJlZ0V4cHM6IHN0cmluZ1tdID0gW107XG5cdFx0XHRmb3IgKGxldCB2YXJpYW50IG9mIHZhcmlhbnRzKSB7XG5cdFx0XHRcdHZhcmlhbnQgPSBtdy51dGlsLmVzY2FwZVJlZ0V4cCh2YXJpYW50KTtcblx0XHRcdFx0Ly8gYW55IHNlcXVlbmNlIG9mIHNwYWNlcyBhbmQgdW5kZXJzY29yZXMgc2hvdWxkIG1hdGNoIGFueSBvdGhlclxuXHRcdFx0XHR2YXJpYW50ID0gdmFyaWFudC5yZXBsYWNlKC9bXFxzX10rL2csIFN0cmluZy5yYXdgW1xcc19dK2ApO1xuXHRcdFx0XHQvLyBNYWtlIHRoZSBmaXJzdCBjaGFyYWN0ZXIgY2FzZS1pbnNlbnNpdGl2ZTpcblx0XHRcdFx0Y29uc3QgZmlyc3Q6IHN0cmluZyA9IHZhcmlhbnQuc2xpY2UoMCwgMSk7XG5cdFx0XHRcdGlmIChmaXJzdC50b1VwcGVyQ2FzZSgpICE9PSBmaXJzdC50b0xvd2VyQ2FzZSgpKSB7XG5cdFx0XHRcdFx0dmFyaWFudCA9IGBbJHtmaXJzdC50b1VwcGVyQ2FzZSgpfSR7Zmlyc3QudG9Mb3dlckNhc2UoKX1dJHt2YXJpYW50LnNsaWNlKDEpfWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyaWFudFJlZ0V4cHNbdmFyaWFudFJlZ0V4cHMubGVuZ3RoXSA9IHZhcmlhbnQ7XG5cdFx0XHR9XG5cdFx0XHQvLyBDb21waWxlIGl0IGludG8gYSBSZWdFeHAgdGhhdCBtYXRjaGVzIE1lZGlhV2lraSBjYXRlZ29yeSBzeW50YXggKHllYWgsIGl0IGxvb2tzIHVnbHkpOlxuXHRcdFx0Ly8gWFhYOiB0aGUgZmlyc3QgY2FwdHVyaW5nIHBhcmVucyBhcmUgYXNzdW1lZCB0byBtYXRjaCB0aGUgc29ydGtleSwgaWYgcHJlc2VudCwgaW5jbHVkaW5nIHRoZSB8IGJ1dCBleGNsdWRpbmcgdGhlIF1dXG5cdFx0XHRyZXR1cm4gbmV3IFJlZ0V4cChcblx0XHRcdFx0YFxcXFxbXFxcXFtbXFxcXHNfXSoke2NhdE5hbWV9W1xcXFxzX10qOltcXFxcc19dKig/OiR7dmFyaWFudFJlZ0V4cHMuam9pbihcblx0XHRcdFx0XHQnfCdcblx0XHRcdFx0KX0pW1xcXFxzX10qKFxcXFx8W15cXFxcXV0qKD86XFxcXF1bXlxcXFxdXSspKik/XFxcXF1cXFxcXWAsXG5cdFx0XHRcdCdnJ1xuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRwcml2YXRlIGRvQVBJQ2FsbChcblx0XHRcdF9wYXJhbXM6XG5cdFx0XHRcdHwgT21pdDxBcGlFZGl0UGFnZVBhcmFtcywgJ2Zvcm1hdCc+XG5cdFx0XHRcdHwgT21pdDxBcGlPcGVuU2VhcmNoUGFyYW1zLCAnZm9ybWF0Jz5cblx0XHRcdFx0fCBPbWl0PEFwaVF1ZXJ5Q2F0ZWdvcnlNZW1iZXJzUGFyYW1zLCAnZm9ybWF0Jz5cblx0XHRcdFx0fCBPbWl0PEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zLCAnZm9ybWF0Jz5cblx0XHRcdFx0fCBPbWl0PEFwaVF1ZXJ5VG9rZW5zUGFyYW1zLCAnZm9ybWF0Jz4sXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuXHRcdFx0Y2FsbGJhY2s6IChkYXRhOiBhbnkpID0+IHZvaWRcblx0XHQpIHtcblx0XHRcdGNvbnN0IHBhcmFtcyA9IF9wYXJhbXMgYXMgdHlwZW9mIF9wYXJhbXMgJiB7XG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nO1xuXHRcdFx0XHR0aXRsZT86IHN0cmluZztcblx0XHRcdH07XG5cdFx0XHRwYXJhbXNbJ2Zvcm1hdCddID0gJ2pzb24nO1xuXHRcdFx0cGFyYW1zWydmb3JtYXR2ZXJzaW9uJ10gPSAnMic7XG5cdFx0XHRsZXQgaTogbnVtYmVyID0gMDtcblx0XHRcdGNvbnN0IGRvQ2FsbCA9ICgpOiB2b2lkID0+IHtcblx0XHRcdFx0Y29uc3QgaGFuZGxlRXJyb3IgPSAoZXJyb3I6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdG13LmxvZy5lcnJvcignW0NhdC1hLWxvdF0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdFx0XHRcdFx0aWYgKGkgPCA0KSB7XG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGRvQ2FsbCwgMzAwKTtcblx0XHRcdFx0XHRcdGkrKztcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHBhcmFtc1sndGl0bGUnXSkge1xuXHRcdFx0XHRcdFx0Q0FMLmNvbm5lY3Rpb25FcnJvcltDQUwuY29ubmVjdGlvbkVycm9yLmxlbmd0aF0gPSBwYXJhbXNbJ3RpdGxlJ107XG5cdFx0XHRcdFx0XHR0aGlzLnVwZGF0ZUNvdW50ZXIoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHRcdGlmIChwYXJhbXNbJ2FjdGlvbiddID09PSAncXVlcnknKSB7XG5cdFx0XHRcdFx0Q0FMLmFwaS5nZXQocGFyYW1zKS50aGVuKGNhbGxiYWNrKS5jYXRjaChoYW5kbGVFcnJvcik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Q0FMLmFwaS5wb3N0KHBhcmFtcykudGhlbihjYWxsYmFjaykuY2F0Y2goaGFuZGxlRXJyb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0ZG9DYWxsKCk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgbWFya0FzRG9uZShcblx0XHRcdCRtYXJrZWRMYWJlbDogSlF1ZXJ5LFxuXHRcdFx0dGFyZ2V0Q2F0ZWdvcnk6IHN0cmluZyxcblx0XHRcdG1vZGU6ICdhZGQnIHwgJ2NvcHknIHwgJ21vdmUnIHwgJ3JlbW92ZSdcblx0XHQpOiB2b2lkIHtcblx0XHRcdCRtYXJrZWRMYWJlbC5hZGRDbGFzcyhDTEFTU19OQU1FX0xBQkVMX0RPTkUpO1xuXG5cdFx0XHRzd2l0Y2ggKG1vZGUpIHtcblx0XHRcdFx0Y2FzZSAnYWRkJzpcblx0XHRcdFx0XHQkbWFya2VkTGFiZWwuYXBwZW5kKFxuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHRcdHtDQUwubXNnKCdhZGRlZC1jYXQnLCB0YXJnZXRDYXRlZ29yeSl9XG5cdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdjb3B5Jzpcblx0XHRcdFx0XHQkbWFya2VkTGFiZWwuYXBwZW5kKFxuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHRcdHtDQUwubXNnKCdjb3BpZWQtY2F0JywgdGFyZ2V0Q2F0ZWdvcnkpfVxuXHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnbW92ZSc6XG5cdFx0XHRcdFx0JG1hcmtlZExhYmVsLmFwcGVuZChcblx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0XHR7Q0FMLm1zZygnbW92ZWQtY2F0JywgdGFyZ2V0Q2F0ZWdvcnkpfVxuXHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAncmVtb3ZlJzpcblx0XHRcdFx0XHQkbWFya2VkTGFiZWwuYXBwZW5kKFxuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHRcdHtDQUwubXNnKCdyZW1vdmVkLWNhdCcsIHRhcmdldENhdGVnb3J5KX1cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHByaXZhdGUgc3RhdGljIGRvQ2xlYW51cCh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdFx0cmV0dXJuIENBTC5zZXR0aW5ncy5kb2NsZWFudXAgPyB0ZXh0LnJlcGxhY2UoL3t7XFxzKltDY11oZWNrIGNhdGVnb3JpZXNcXHMqKFxcfD8uKj8pfX0vLCAnJykgOiB0ZXh0O1xuXHRcdH0gLy8gUmVtb3ZlIHt7VW5jYXRlZ29yaXplZH19IChhbHNvIHdpdGggY29tbWVudCkuIE5vIG5lZWQgdG8gcmVwbGFjZSBpdCB3aXRoIGFueXRoaW5nXG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmVtb3ZlVW5jYXQodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcblx0XHRcdHJldHVybiB0ZXh0LnJlcGxhY2UoL1xce1xce1xccypbVXVdbmNhdGVnb3JpemVkXFxzKihcXHw/Lio/KVxcfVxcfS8sICcnKTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBkaXNwbGF5UmVzdWx0KCk6IHZvaWQge1xuXHRcdFx0dGhpcy4kYm9keS5jc3Moe1xuXHRcdFx0XHRjdXJzb3I6ICcnLFxuXHRcdFx0XHRvdmVyZmxvdzogJycsXG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuJGJvZHkuZmluZChgLiR7Q0xBU1NfTkFNRV9GRUVEQkFDS31gKS5hZGRDbGFzcyhDTEFTU19OQU1FX0ZFRURCQUNLX0RPTkUpO1xuXG5cdFx0XHRjb25zdCAkcGFyZW50OiBKUXVlcnkgPSBDQUwuJGNvdW50ZXIucGFyZW50KCk7XG5cdFx0XHQkcGFyZW50Lmh0bWwoPGgzPntDQUwubXNnKCdkb25lJyl9PC9oMz4pO1xuXHRcdFx0JHBhcmVudC5hcHBlbmQoXG5cdFx0XHRcdDw+XG5cdFx0XHRcdFx0e0NBTC5tc2coJ2FsbC1kb25lJyl9XG5cdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdDwvPlxuXHRcdFx0KTtcblxuXHRcdFx0JHBhcmVudC5hcHBlbmQoXG5cdFx0XHRcdDxhXG5cdFx0XHRcdFx0b25DbGljaz17KCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0Q0FMLiRwcm9ncmVzc0RpYWxvZy5yZW1vdmUoKTtcblx0XHRcdFx0XHRcdHRoaXMudG9nZ2xlQWxsKGZhbHNlKTtcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e0NBTC5tc2coJ3JldHVybi10by1wYWdlJyl9XG5cdFx0XHRcdDwvYT5cblx0XHRcdCk7XG5cblx0XHRcdGlmIChDQUwuYWxyZWFkeVRoZXJlLmxlbmd0aCkge1xuXHRcdFx0XHQkcGFyZW50LmFwcGVuZChcblx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0PGg1PntDQUwubXNnKCdza2lwcGVkLWFscmVhZHknLCBDQUwuYWxyZWFkeVRoZXJlLmxlbmd0aC50b1N0cmluZygpKX08L2g1PlxuXHRcdFx0XHRcdFx0e0NBTC5hbHJlYWR5VGhlcmUucmVkdWNlPChzdHJpbmcgfCBSZWFjdC5SZWFjdEVsZW1lbnQpW10+KFxuXHRcdFx0XHRcdFx0XHQocHJlLCBjdXIsIGluZGV4KSA9PlxuXHRcdFx0XHRcdFx0XHRcdGluZGV4IDwgQ0FMLmFscmVhZHlUaGVyZS5sZW5ndGggLSAxID8gWy4uLnByZSwgY3VyLCA8YnIga2V5PXtpbmRleH0gLz5dIDogWy4uLnByZSwgY3VyXSxcblx0XHRcdFx0XHRcdFx0W11cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoQ0FMLm5vdEZvdW5kLmxlbmd0aCkge1xuXHRcdFx0XHQkcGFyZW50LmFwcGVuZChcblx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0PGg1PntDQUwubXNnKCdza2lwcGVkLW5vdC1mb3VuZCcsIENBTC5ub3RGb3VuZC5sZW5ndGgudG9TdHJpbmcoKSl9PC9oNT5cblx0XHRcdFx0XHRcdHtDQUwubm90Rm91bmQucmVkdWNlPChzdHJpbmcgfCBSZWFjdC5SZWFjdEVsZW1lbnQpW10+KFxuXHRcdFx0XHRcdFx0XHQocHJlLCBjdXIsIGluZGV4KSA9PlxuXHRcdFx0XHRcdFx0XHRcdGluZGV4IDwgQ0FMLm5vdEZvdW5kLmxlbmd0aCAtIDEgPyBbLi4ucHJlLCBjdXIsIDxiciBrZXk9e2luZGV4fSAvPl0gOiBbLi4ucHJlLCBjdXJdLFxuXHRcdFx0XHRcdFx0XHRbXVxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdGlmIChDQUwuY29ubmVjdGlvbkVycm9yLmxlbmd0aCkge1xuXHRcdFx0XHQkcGFyZW50LmFwcGVuZChcblx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0PGg1PntDQUwubXNnKCdza2lwcGVkLXNlcnZlcicsIENBTC5jb25uZWN0aW9uRXJyb3IubGVuZ3RoLnRvU3RyaW5nKCkpfTwvaDU+XG5cdFx0XHRcdFx0XHR7Q0FMLmNvbm5lY3Rpb25FcnJvci5yZWR1Y2U8KHN0cmluZyB8IFJlYWN0LlJlYWN0RWxlbWVudClbXT4oXG5cdFx0XHRcdFx0XHRcdChwcmUsIGN1ciwgaW5kZXgpID0+XG5cdFx0XHRcdFx0XHRcdFx0aW5kZXggPCBDQUwuY29ubmVjdGlvbkVycm9yLmxlbmd0aCAtIDFcblx0XHRcdFx0XHRcdFx0XHRcdD8gWy4uLnByZSwgY3VyLCA8YnIga2V5PXtpbmRleH0gLz5dXG5cdFx0XHRcdFx0XHRcdFx0XHQ6IFsuLi5wcmUsIGN1cl0sXG5cdFx0XHRcdFx0XHRcdFtdXG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRwcml2YXRlIHVwZGF0ZUNvdW50ZXIoKTogdm9pZCB7XG5cdFx0XHRDQUwuY291bnRlckN1cnJlbnQrKztcblx0XHRcdGlmIChDQUwuY291bnRlckN1cnJlbnQgPiBDQUwuY291bnRlck5lZWRlZCkge1xuXHRcdFx0XHR0aGlzLmRpc3BsYXlSZXN1bHQoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdENBTC4kY291bnRlci50ZXh0KENBTC5jb3VudGVyQ3VycmVudCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHByaXZhdGUgYXN5bmMgZWRpdENhdGVnb3JpZXMoXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuXHRcdFx0cmVzdWx0OiBSZWNvcmQ8c3RyaW5nLCBhbnk+LFxuXHRcdFx0bWFya2VkTGFiZWw6IFJldHVyblR5cGU8dHlwZW9mIHRoaXMuZ2V0TWFya2VkTGFiZWxzPlswXSxcblx0XHRcdHRhcmdldENhdGVnb3J5OiBzdHJpbmcsXG5cdFx0XHRtb2RlOiAnYWRkJyB8ICdjb3B5JyB8ICdtb3ZlJyB8ICdyZW1vdmUnXG5cdFx0KTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0XHRjb25zdCBbbWFya2VkTGFiZWxUaXRsZSwgJG1hcmtlZExhYmVsXSA9IG1hcmtlZExhYmVsO1xuXG5cdFx0XHRpZiAoIXJlc3VsdD8uWydxdWVyeSddKSB7XG5cdFx0XHRcdENBTC5jb25uZWN0aW9uRXJyb3JbQ0FMLmNvbm5lY3Rpb25FcnJvci5sZW5ndGhdID0gbWFya2VkTGFiZWxUaXRsZTtcblx0XHRcdFx0dGhpcy51cGRhdGVDb3VudGVyKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0bGV0IG9yaWdpblRleHQ6IHN0cmluZyA9ICcnO1xuXHRcdFx0bGV0IHN0YXJ0dGltZXN0YW1wOiBudW1iZXIgPSAwO1xuXHRcdFx0bGV0IHRpbWVzdGFtcDogbnVtYmVyID0gMDtcblx0XHRcdENBTC5lZGl0VG9rZW4gPSByZXN1bHRbJ3F1ZXJ5J10udG9rZW5zLmNzcmZ0b2tlbjtcblx0XHRcdGNvbnN0IHtwYWdlc30gPSByZXN1bHRbJ3F1ZXJ5J107XG5cblx0XHRcdGNvbnN0IFtwYWdlXSA9IHBhZ2VzO1xuXHRcdFx0b3JpZ2luVGV4dCA9IHBhZ2U/LnJldmlzaW9ucz8uWzBdLnNsb3RzLm1haW4uY29udGVudDtcblx0XHRcdCh7c3RhcnR0aW1lc3RhbXB9ID0gcGFnZSk7XG5cdFx0XHRbe3RpbWVzdGFtcH1dID0gcGFnZS5yZXZpc2lvbnM7XG5cblx0XHRcdGNvbnN0IHNvdXJjZWNhdDogc3RyaW5nID0gQ0FMLkNVUlJFTlRfQ0FURUdST1k7XG5cdFx0XHQvLyBDaGVjayBpZiB0aGF0IGZpbGUgaXMgYWxyZWFkeSBpbiB0aGF0IGNhdGVnb3J5XG5cdFx0XHRjb25zdCB0YXJnZVJlZ0V4cCA9IGF3YWl0IENBTC5yZWdleEJ1aWxkZXIodGFyZ2V0Q2F0ZWdvcnkpO1xuXHRcdFx0aWYgKG1vZGUgIT09ICdyZW1vdmUnICYmIHRhcmdlUmVnRXhwLnRlc3Qob3JpZ2luVGV4dCkgJiYgbW9kZSAhPT0gJ21vdmUnKSB7XG5cdFx0XHRcdENBTC5hbHJlYWR5VGhlcmVbQ0FMLmFscmVhZHlUaGVyZS5sZW5ndGhdID0gbWFya2VkTGFiZWxUaXRsZTtcblx0XHRcdFx0dGhpcy51cGRhdGVDb3VudGVyKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRml4IHRleHRcblx0XHRcdGxldCB0ZXh0OiBzdHJpbmcgPSBvcmlnaW5UZXh0O1xuXHRcdFx0bGV0IHN1bW1hcnk6IHN0cmluZztcblx0XHRcdGNvbnN0IHNvdXJjZUNhdFJlZ0V4cCA9IGF3YWl0IENBTC5yZWdleEJ1aWxkZXIoc291cmNlY2F0KTtcblx0XHRcdHN3aXRjaCAobW9kZSkge1xuXHRcdFx0XHRjYXNlICdhZGQnOlxuXHRcdFx0XHRcdHRleHQgKz0gYFxcbltbJHtDQUwubG9jYWxDYXROYW1lfToke3RhcmdldENhdGVnb3J5fV1dXFxuYDtcblx0XHRcdFx0XHRzdW1tYXJ5ID0gQ0FMLm1zZygnc3VtbWFyeS1hZGQnKS5yZXBsYWNlKCckMScsIHRhcmdldENhdGVnb3J5KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnY29weSc6XG5cdFx0XHRcdFx0dGV4dCA9IHRleHQucmVwbGFjZShcblx0XHRcdFx0XHRcdHNvdXJjZUNhdFJlZ0V4cCxcblx0XHRcdFx0XHRcdGBbWyR7Q0FMLmxvY2FsQ2F0TmFtZX06JHtzb3VyY2VjYXR9JDFdXVxcbltbJHtDQUwubG9jYWxDYXROYW1lfToke3RhcmdldENhdGVnb3J5fSQxXV1gXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRzdW1tYXJ5ID0gQ0FMLm1zZygnc3VtbWFyeS1jb3B5JykucmVwbGFjZSgnJDEnLCBzb3VyY2VjYXQpLnJlcGxhY2UoJyQyJywgdGFyZ2V0Q2F0ZWdvcnkpO1xuXHRcdFx0XHRcdC8vIElmIGNhdGVnb3J5IGlzIGFkZGVkIHRocm91Z2ggdGVtcGxhdGU6XG5cdFx0XHRcdFx0aWYgKG9yaWdpblRleHQgPT09IHRleHQpIHtcblx0XHRcdFx0XHRcdHRleHQgKz0gYFxcbltbJHtDQUwubG9jYWxDYXROYW1lfToke3RhcmdldENhdGVnb3J5fV1dYDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ21vdmUnOlxuXHRcdFx0XHRcdHRleHQgPSB0ZXh0LnJlcGxhY2Uoc291cmNlQ2F0UmVnRXhwLCBgW1ske0NBTC5sb2NhbENhdE5hbWV9OiR7dGFyZ2V0Q2F0ZWdvcnl9JDFdXWApO1xuXHRcdFx0XHRcdHN1bW1hcnkgPSBDQUwubXNnKCdzdW1tYXJ5LW1vdmUnKS5yZXBsYWNlKCckMScsIHNvdXJjZWNhdCkucmVwbGFjZSgnJDInLCB0YXJnZXRDYXRlZ29yeSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3JlbW92ZSc6XG5cdFx0XHRcdFx0dGV4dCA9IHRleHQucmVwbGFjZShzb3VyY2VDYXRSZWdFeHAsICcnKTtcblx0XHRcdFx0XHRzdW1tYXJ5ID0gQ0FMLm1zZygnc3VtbWFyeS1yZW1vdmUnKS5yZXBsYWNlKCckMScsIHNvdXJjZWNhdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0ZXh0ID09PSBvcmlnaW5UZXh0KSB7XG5cdFx0XHRcdENBTC5ub3RGb3VuZFtDQUwubm90Rm91bmQubGVuZ3RoXSA9IG1hcmtlZExhYmVsVGl0bGU7XG5cdFx0XHRcdHRoaXMudXBkYXRlQ291bnRlcigpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIFJlbW92ZSB1bmNhdCBhZnRlciB3ZSBjaGVja2VkIHdoZXRoZXIgd2UgY2hhbmdlZCB0aGUgdGV4dCBzdWNjZXNzZnVsbHkuXG5cdFx0XHQvLyBPdGhlcndpc2Ugd2UgbWlnaHQgZmFpbCB0byBkbyB0aGUgY2hhbmdlcywgYnV0IHN0aWxsIHJlcGxhY2Uge3t1bmNhdH19XG5cdFx0XHRpZiAobW9kZSAhPT0gJ3JlbW92ZScpIHtcblx0XHRcdFx0dGV4dCA9IENBTC5kb0NsZWFudXAoQ0FMLnJlbW92ZVVuY2F0KHRleHQpKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5kb0FQSUNhbGwoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0XHR0b2tlbjogQ0FMLmVkaXRUb2tlbixcblx0XHRcdFx0XHR0YWdzOiBDQUwuQVBJX1RBRyxcblx0XHRcdFx0XHR0aXRsZTogbWFya2VkTGFiZWxUaXRsZSxcblx0XHRcdFx0XHRhc3NlcnQ6ICd1c2VyJyxcblx0XHRcdFx0XHRib3Q6IHRydWUsXG5cdFx0XHRcdFx0YmFzZXRpbWVzdGFtcDogdGltZXN0YW1wIGFzIHVua25vd24gYXMgc3RyaW5nLFxuXHRcdFx0XHRcdHdhdGNobGlzdDogQ0FMLnNldHRpbmdzLndhdGNobGlzdCBhcyBuZXZlcixcblx0XHRcdFx0XHR0ZXh0LFxuXHRcdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdFx0c3RhcnR0aW1lc3RhbXA6IHN0YXJ0dGltZXN0YW1wIGFzIHVua25vd24gYXMgc3RyaW5nLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0dGhpcy51cGRhdGVDb3VudGVyKCk7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cblx0XHRcdENBTC5tYXJrQXNEb25lKCRtYXJrZWRMYWJlbCwgdGFyZ2V0Q2F0ZWdvcnksIG1vZGUpO1xuXHRcdH1cblx0XHRwcml2YXRlIGdldENvbnRlbnQoXG5cdFx0XHRtYXJrZWRMYWJlbDogUmV0dXJuVHlwZTx0eXBlb2YgdGhpcy5nZXRNYXJrZWRMYWJlbHM+WzBdLFxuXHRcdFx0dGFyZ2V0Q2F0ZWdvcnk6IHN0cmluZyxcblx0XHRcdG1vZGU6ICdhZGQnIHwgJ2NvcHknIHwgJ21vdmUnXG5cdFx0KTogdm9pZCB7XG5cdFx0XHR0aGlzLmRvQVBJQ2FsbChcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdFx0bWV0YTogJ3Rva2VucycsXG5cdFx0XHRcdFx0dGl0bGVzOiBtYXJrZWRMYWJlbFswXSxcblx0XHRcdFx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRcdFx0XHRydnByb3A6IFsnY29udGVudCcsICd0aW1lc3RhbXAnXSxcblx0XHRcdFx0XHRydnNsb3RzOiAnbWFpbicsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdChyZXN1bHQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hcmd1bWVudFxuXHRcdFx0XHRcdHZvaWQgdGhpcy5lZGl0Q2F0ZWdvcmllcyhyZXN1bHQsIG1hcmtlZExhYmVsLCB0YXJnZXRDYXRlZ29yeSwgbW9kZSk7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fVxuXHRcdHByaXZhdGUgc3RhdGljIGdldFRpdGxlRnJvbUxpbmsoaHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkKTogc3RyaW5nIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJldHVybiAoZGVjb2RlVVJJQ29tcG9uZW50KGhyZWYgPz8gJycpLm1hdGNoKC93aWtpXFwvKC4rPykoPzojLispPyQvKT8uWzFdID8/ICcnKS5yZXBsYWNlKC9fL2csICcgJyk7XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0cmV0dXJuICcnO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRwcml2YXRlIGdldE1hcmtlZExhYmVscygpOiBbc3RyaW5nLCBKUXVlcnldW10ge1xuXHRcdFx0Y29uc3QgbWFya2VkTGFiZWxzOiBSZXR1cm5UeXBlPHR5cGVvZiB0aGlzLmdldE1hcmtlZExhYmVscz4gPSBbXTtcblx0XHRcdENBTC4kc2VsZWN0ZWRMYWJlbHMgPSBDQUwuJGxhYmVscy5maWx0ZXIoYC4ke0NMQVNTX05BTUVfTEFCRUxfU0VMRUNURUR9YCk7XG5cdFx0XHRDQUwuJHNlbGVjdGVkTGFiZWxzLmVhY2goKF9pbmRleCwgbGFiZWwpOiB2b2lkID0+IHtcblx0XHRcdFx0Y29uc3QgJGxhYmVsOiBKUXVlcnkgPSAkKGxhYmVsKTtcblx0XHRcdFx0Y29uc3QgJGxhYmVsTGluazogSlF1ZXJ5ID0gJGxhYmVsLmZpbmQoJ2E6bm90KC5DYXRlZ29yeVRyZWVUb2dnbGUpW3RpdGxlXScpO1xuXHRcdFx0XHRjb25zdCB0aXRsZTogc3RyaW5nID1cblx0XHRcdFx0XHQkbGFiZWxMaW5rLmF0dHIoJ3RpdGxlJyk/LnRyaW0oKSB8fFxuXHRcdFx0XHRcdENBTC5nZXRUaXRsZUZyb21MaW5rKCRsYWJlbExpbmsuYXR0cignaHJlZicpKSB8fFxuXHRcdFx0XHRcdENBTC5nZXRUaXRsZUZyb21MaW5rKCRsYWJlbC5maW5kKCdhOm5vdCguQ2F0ZWdvcnlUcmVlVG9nZ2xlKScpLmF0dHIoJ2hyZWYnKSk7XG5cdFx0XHRcdG1hcmtlZExhYmVsc1ttYXJrZWRMYWJlbHMubGVuZ3RoXSA9IFt0aXRsZSwgJGxhYmVsXTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIG1hcmtlZExhYmVscztcblx0XHR9XG5cdFx0cHJpdmF0ZSBzaG93UHJvZ3Jlc3MoKTogdm9pZCB7XG5cdFx0XHR0aGlzLiRib2R5LmNzcyh7XG5cdFx0XHRcdGN1cnNvcjogJ3dhaXQnLFxuXHRcdFx0XHRvdmVyZmxvdzogJ2hpZGRlbicsXG5cdFx0XHR9KTtcblx0XHRcdENBTC4kcHJvZ3Jlc3NEaWFsb2cgPSAkKFxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdHtDQUwubXNnKCdlZGl0aW5nJyl9XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtDTEFTU19OQU1FX0NVUlJFTlRfQ09VTlRFUn0+e0NBTC5jb3VudGVyQ3VycmVudH08L3NwYW4+XG5cdFx0XHRcdFx0e1tDQUwubXNnKCdvZicpLCBDQUwuY291bnRlck5lZWRlZF19XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KS5kaWFsb2coe1xuXHRcdFx0XHRkaWFsb2dDbGFzczogQ0xBU1NfTkFNRV9GRUVEQkFDSyxcblx0XHRcdFx0bWluSGVpZ2h0OiA5MCxcblx0XHRcdFx0aGVpZ2h0OiA5MCxcblx0XHRcdFx0d2lkdGg6IDQ1MCxcblx0XHRcdFx0bW9kYWw6IHRydWUsXG5cdFx0XHRcdGNsb3NlT25Fc2NhcGU6IGZhbHNlLFxuXHRcdFx0XHRkcmFnZ2FibGU6IGZhbHNlLFxuXHRcdFx0XHRyZXNpemFibGU6IGZhbHNlLFxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLiRib2R5LmZpbmQoYC4ke0NMQVNTX05BTUVfRkVFREJBQ0t9IC51aS1kaWFsb2ctdGl0bGViYXJgKS5oaWRlKCk7XG5cdFx0XHR0aGlzLiRib2R5LmZpbmQoYC4ke0NMQVNTX05BTUVfRkVFREJBQ0t9IC51aS1kaWFsb2ctY29udGVudGApLmhlaWdodCgnYXV0bycpO1xuXHRcdFx0Q0FMLiRjb3VudGVyID0gdGhpcy4kYm9keS5maW5kKGAuJHtDTEFTU19OQU1FX0NVUlJFTlRfQ09VTlRFUn1gKTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBkb1NvbWV0aGluZyh0YXJnZXRDYXRlZ29yeTogc3RyaW5nLCBtb2RlOiAnYWRkJyB8ICdjb3B5JyB8ICdtb3ZlJyk6IHZvaWQge1xuXHRcdFx0Y29uc3QgbWFya2VkTGFiZWxzOiBSZXR1cm5UeXBlPHR5cGVvZiB0aGlzLmdldE1hcmtlZExhYmVscz4gPSB0aGlzLmdldE1hcmtlZExhYmVscygpO1xuXHRcdFx0aWYgKCFtYXJrZWRMYWJlbHMubGVuZ3RoKSB7XG5cdFx0XHRcdHZvaWQgbXcubm90aWZ5KENBTC5tc2coJ25vbmUtc2VsZWN0ZWQnKSwge1xuXHRcdFx0XHRcdHRhZzogJ2NhdEFMb3QnLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Q0FMLmFscmVhZHlUaGVyZSA9IFtdO1xuXHRcdFx0Q0FMLmNvbm5lY3Rpb25FcnJvciA9IFtdO1xuXHRcdFx0Q0FMLm5vdEZvdW5kID0gW107XG5cdFx0XHRDQUwuY291bnRlckN1cnJlbnQgPSAxO1xuXHRcdFx0Q0FMLmNvdW50ZXJOZWVkZWQgPSBtYXJrZWRMYWJlbHMubGVuZ3RoO1xuXHRcdFx0dGhpcy5zaG93UHJvZ3Jlc3MoKTtcblx0XHRcdGZvciAoY29uc3QgbWFya2VkTGFiZWwgb2YgbWFya2VkTGFiZWxzKSB7XG5cdFx0XHRcdHRoaXMuZ2V0Q29udGVudChtYXJrZWRMYWJlbCwgdGFyZ2V0Q2F0ZWdvcnksIG1vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRwcml2YXRlIGFkZEhlcmUodGFyZ2V0Q2F0ZWdvcnk6IHN0cmluZyk6IHZvaWQge1xuXHRcdFx0dGhpcy5kb1NvbWV0aGluZyh0YXJnZXRDYXRlZ29yeSwgJ2FkZCcpO1xuXHRcdH1cblx0XHRwcml2YXRlIGNvcHlIZXJlKHRhcmdldENhdGVnb3J5OiBzdHJpbmcpOiB2b2lkIHtcblx0XHRcdHRoaXMuZG9Tb21ldGhpbmcodGFyZ2V0Q2F0ZWdvcnksICdjb3B5Jyk7XG5cdFx0fVxuXHRcdHByaXZhdGUgbW92ZUhlcmUodGFyZ2V0Q2F0ZWdvcnk6IHN0cmluZyk6IHZvaWQge1xuXHRcdFx0dGhpcy5kb1NvbWV0aGluZyh0YXJnZXRDYXRlZ29yeSwgJ21vdmUnKTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBjcmVhdGVDYXRMaW5rcyhzeW1ib2w6IHN0cmluZywgY2F0ZWdvcmllczogc3RyaW5nW10pOiB2b2lkIHtcblx0XHRcdGNhdGVnb3JpZXMuc29ydCgpO1xuXHRcdFx0Zm9yIChjb25zdCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzKSB7XG5cdFx0XHRcdGNvbnN0ICR0ciA9ICQoXG5cdFx0XHRcdFx0PHRyIGRhdGFzZXQ9e3tjYXRlZ29yeX19PlxuXHRcdFx0XHRcdFx0PHRkPntzeW1ib2x9PC90ZD5cblx0XHRcdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0ICRlbGVtZW50ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMudXBkYXRlQ2F0cygkZWxlbWVudC5jbG9zZXN0KCd0cicpLmRhdGEoJ2NhdGVnb3J5JykgYXMgc3RyaW5nKTtcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0e2NhdGVnb3J5fVxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdCk7XG5cdFx0XHRcdC8vIENhbid0IG1vdmUgdG8gc291cmNlIGNhdGVnb3J5XG5cdFx0XHRcdGlmIChjYXRlZ29yeSAhPT0gQ0FMLkNVUlJFTlRfQ0FURUdST1kgJiYgQ0FMLmlzU2VhcmNoTW9kZSkge1xuXHRcdFx0XHRcdCR0ci5hcHBlbmQoXG5cdFx0XHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfQUNUSU9OfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgJGVsZW1lbnQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5hZGRIZXJlKCRlbGVtZW50LmNsb3Nlc3QoJ3RyJykuZGF0YSgnY2F0ZWdvcnknKSBhcyBzdHJpbmcpO1xuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHR7Q0FMLm1zZygnYWRkJyl9XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSBlbHNlIGlmIChjYXRlZ29yeSAhPT0gQ0FMLkNVUlJFTlRfQ0FURUdST1kgJiYgIUNBTC5pc1NlYXJjaE1vZGUpIHtcblx0XHRcdFx0XHQkdHIuYXBwZW5kKFxuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9BQ1RJT059XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgJGVsZW1lbnQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmNvcHlIZXJlKCRlbGVtZW50LmNsb3Nlc3QoJ3RyJykuZGF0YSgnY2F0ZWdvcnknKSBhcyBzdHJpbmcpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHR7Q0FMLm1zZygnY29weScpfVxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9BQ1RJT059XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgJGVsZW1lbnQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLm1vdmVIZXJlKCRlbGVtZW50LmNsb3Nlc3QoJ3RyJykuZGF0YSgnY2F0ZWdvcnknKSBhcyBzdHJpbmcpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHR7Q0FMLm1zZygnbW92ZScpfVxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy4kcmVzdWx0TGlzdC5maW5kKCd0YWJsZScpLmFwcGVuZCgkdHIpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRwcml2YXRlIHNob3dDYXRlZ29yeUxpc3QoKTogdm9pZCB7XG5cdFx0XHR0aGlzLiRib2R5LmNzcygnY3Vyc29yJywgJycpO1xuXHRcdFx0Y29uc3QgY3VycmVudENhdGVnb3JpZXM6IHN0cmluZ1tdID0gW0NBTC5jdXJyZW50Q2F0ZWdvcnldO1xuXHRcdFx0dGhpcy4kcmVzdWx0TGlzdC5lbXB0eSgpO1xuXHRcdFx0dGhpcy4kcmVzdWx0TGlzdC5hcHBlbmQoPHRhYmxlIC8+KTtcblx0XHRcdHRoaXMuY3JlYXRlQ2F0TGlua3MoJ+KGkScsIENBTC5wYXJlbnRDYXRzKTtcblx0XHRcdHRoaXMuY3JlYXRlQ2F0TGlua3MoJ+KGkicsIGN1cnJlbnRDYXRlZ29yaWVzKTtcblx0XHRcdHRoaXMuY3JlYXRlQ2F0TGlua3MoJ+KGkycsIENBTC5zdWJDYXRzKTtcblx0XHRcdC8vIFJlc2V0IHdpZHRoXG5cdFx0XHR0aGlzLiRjb250YWluZXIud2lkdGgoJycpO1xuXHRcdFx0dGhpcy4kY29udGFpbmVyLmhlaWdodCgnJyk7XG5cdFx0XHR0aGlzLiRjb250YWluZXIud2lkdGgoTWF0aC5taW4oKHRoaXMuJGNvbnRhaW5lci53aWR0aCgpID8/IDApICogMS4xICsgMTUsICgkKHdpbmRvdykud2lkdGgoKSA/PyAwKSAtIDEwKSk7XG5cdFx0XHR0aGlzLiRyZXN1bHRMaXN0LmNzcyh7XG5cdFx0XHRcdCdtYXgtaGVpZ2h0JzogYCR7Q0FMLmRpYWxvZ0hlaWdodH1weGAsXG5cdFx0XHRcdGhlaWdodDogJycsXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBnZXRQYXJlbnRDYXRzKCk6IHZvaWQge1xuXHRcdFx0dGhpcy5kb0FQSUNhbGwoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdFx0dGl0bGVzOiBgQ2F0ZWdvcnk6JHtDQUwuY3VycmVudENhdGVnb3J5fWAsXG5cdFx0XHRcdFx0cHJvcDogJ2NhdGVnb3JpZXMnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQocmVzdWx0KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0aWYgKCFyZXN1bHQpIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Q0FMLnBhcmVudENhdHMgPSBbXTtcblx0XHRcdFx0XHRjb25zdCB7cGFnZXN9ID0gcmVzdWx0LnF1ZXJ5O1xuXHRcdFx0XHRcdGlmIChwYWdlc1swXT8ubWlzc2luZykge1xuXHRcdFx0XHRcdFx0dGhpcy4kYm9keS5jc3MoJ2N1cnNvcicsICcnKTtcblx0XHRcdFx0XHRcdHRoaXMuJHJlc3VsdExpc3QuaHRtbChcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfTk9fRk9VTkR9PlxuXHRcdFx0XHRcdFx0XHRcdHtDQUwubXNnKCdjYXQtbm90LWZvdW5kJyl9XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR0aGlzLmNyZWF0ZUNhdExpbmtzKCfihpInLCBbQ0FMLmN1cnJlbnRDYXRlZ29yeV0pO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRsZXQgY2F0ZWdvcmllczoge3RpdGxlOiBzdHJpbmd9W10gPSBbXTtcblx0XHRcdFx0XHRpZiAocGFnZXNbMF0/LmNhdGVnb3JpZXMpIHtcblx0XHRcdFx0XHRcdFt7Y2F0ZWdvcmllc31dID0gcGFnZXM7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGZvciAoY29uc3QgY2F0IG9mIGNhdGVnb3JpZXMpIHtcblx0XHRcdFx0XHRcdENBTC5wYXJlbnRDYXRzW0NBTC5wYXJlbnRDYXRzLmxlbmd0aF0gPSBjYXQudGl0bGUucmVwbGFjZSgvXlteOl0rOi8sICcnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Q0FMLmNvdW50ZXJDYXQrKztcblx0XHRcdFx0XHRpZiAoQ0FMLmNvdW50ZXJDYXQgPT09IDIpIHtcblx0XHRcdFx0XHRcdHRoaXMuc2hvd0NhdGVnb3J5TGlzdCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBnZXRTdWJDYXRzKCk6IHZvaWQge1xuXHRcdFx0dGhpcy5kb0FQSUNhbGwoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdFx0bGlzdDogJ2NhdGVnb3J5bWVtYmVycycsXG5cdFx0XHRcdFx0Y210eXBlOiAnc3ViY2F0Jyxcblx0XHRcdFx0XHRjbWxpbWl0OiBDQUwuc2V0dGluZ3Muc3ViY2F0Y291bnQgYXMgbmV2ZXIsXG5cdFx0XHRcdFx0Y210aXRsZTogYENhdGVnb3J5OiR7Q0FMLmN1cnJlbnRDYXRlZ29yeX1gLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQocmVzdWx0KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgY2F0czoge3RpdGxlOiBzdHJpbmd9W10gPSByZXN1bHQ/LnF1ZXJ5Py5jYXRlZ29yeW1lbWJlcnMgfHwgW107XG5cdFx0XHRcdFx0Q0FMLnN1YkNhdHMgPSBbXTtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IGNhdCBvZiBjYXRzKSB7XG5cdFx0XHRcdFx0XHRDQUwuc3ViQ2F0c1tDQUwuc3ViQ2F0cy5sZW5ndGhdID0gY2F0LnRpdGxlLnJlcGxhY2UoL15bXjpdKzovLCAnJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdENBTC5jb3VudGVyQ2F0Kys7XG5cdFx0XHRcdFx0aWYgKENBTC5jb3VudGVyQ2F0ID09PSAyKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnNob3dDYXRlZ29yeUxpc3QoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fVxuXHRcdHByaXZhdGUgZ2V0Q2F0ZWdvcnlMaXN0KCk6IHZvaWQge1xuXHRcdFx0Q0FMLmNvdW50ZXJDYXQgPSAwO1xuXHRcdFx0dGhpcy5nZXRQYXJlbnRDYXRzKCk7XG5cdFx0XHR0aGlzLmdldFN1YkNhdHMoKTtcblx0XHR9XG5cdFx0cHJpdmF0ZSB1cGRhdGVDYXRzKGNhdDogc3RyaW5nKTogdm9pZCB7XG5cdFx0XHR0aGlzLiRib2R5LmNzcygnY3Vyc29yJywgJ3dhaXQnKTtcblx0XHRcdENBTC5jdXJyZW50Q2F0ZWdvcnkgPSBjYXQ7XG5cdFx0XHR0aGlzLiRyZXN1bHRMaXN0Lmh0bWwoPGRpdj57Q0FMLm1zZygnbG9hZGluZycpfTwvZGl2Pik7XG5cdFx0XHR0aGlzLmdldENhdGVnb3J5TGlzdCgpO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgZmluZEFsbExhYmVscygpOiB2b2lkIHtcblx0XHRcdC8vIEl0J3MgcG9zc2libGUgdG8gYWxsb3cgYW55IGtpbmQgb2YgcGFnZXMgYXMgd2VsbCBidXQgd2hhdCBoYXBwZW5zIGlmIHlvdSBjbGljayBvbiBcInNlbGVjdCBhbGxcIiBhbmQgZG9uJ3QgZXhwZWN0IGl0XG5cdFx0XHRpZiAoQ0FMLmlzU2VhcmNoTW9kZSkge1xuXHRcdFx0XHRDQUwuJGxhYmVscyA9IHRoaXMuJGJvZHkuZmluZCgndGFibGUuc2VhcmNoUmVzdWx0SW1hZ2UnKS5maW5kKCd0cj50ZCcpLmVxKDEpO1xuXHRcdFx0XHRpZiAoQ0FMLnNldHRpbmdzLmVkaXRwYWdlcykge1xuXHRcdFx0XHRcdENBTC4kbGFiZWxzID0gQ0FMLiRsYWJlbHMuYWRkKCdkaXYubXctc2VhcmNoLXJlc3VsdC1oZWFkaW5nJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdENBTC4kbGFiZWxzID0gdGhpcy4kYm9keVxuXHRcdFx0XHRcdC5maW5kKCdkaXYuZ2FsbGVyeXRleHQnKVxuXHRcdFx0XHRcdC5hZGQodGhpcy4kYm9keS5maW5kKCdkaXYjbXctY2F0ZWdvcnktbWVkaWEnKS5maW5kKCdsaVtjbGFzcyE9XCJnYWxsZXJ5Ym94XCJdJykpO1xuXHRcdFx0XHRpZiAoQ0FMLnNldHRpbmdzLmVkaXRwYWdlcykge1xuXHRcdFx0XHRcdGNvbnN0ICRwYWdlczogSlF1ZXJ5PEhUTUxMSUVsZW1lbnQ+ID0gdGhpcy4kYm9keVxuXHRcdFx0XHRcdFx0LmZpbmQoJ2RpdiNtdy1wYWdlcywgZGl2I213LXN1YmNhdGVnb3JpZXMnKVxuXHRcdFx0XHRcdFx0LmZpbmQoJ2xpJyk7XG5cdFx0XHRcdFx0Q0FMLiRsYWJlbHMgPSBDQUwuJGxhYmVscy5hZGQoJHBhZ2VzKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRwcml2YXRlIG1ha2VDbGlja2FibGUoKTogdm9pZCB7XG5cdFx0XHR0aGlzLmZpbmRBbGxMYWJlbHMoKTtcblx0XHRcdENBTC4kbGFiZWxzLmFkZENsYXNzKENMQVNTX05BTUVfTEFCRUwpLm9uQ2F0QUxvdFNoaWZ0Q2xpY2soKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHR0aGlzLnVwZGF0ZVNlbGVjdGlvbkNvdW50ZXIoKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgcnVuKCk6IHZvaWQge1xuXHRcdFx0aWYgKHRoaXMuJGxpbmsuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LX0VOQUJMRUQpKSB7XG5cdFx0XHRcdHRoaXMubWFrZUNsaWNrYWJsZSgpO1xuXHRcdFx0XHR0aGlzLiRkYXRhQ29udGFpbmVyLnNob3coKTtcblx0XHRcdFx0dGhpcy4kY29udGFpbmVyLnJlc2l6YWJsZSh7XG5cdFx0XHRcdFx0YWxzb1Jlc2l6ZTogdGhpcy4kcmVzdWx0TGlzdCxcblx0XHRcdFx0XHRoYW5kbGVzOiAnbicsXG5cdFx0XHRcdFx0cmVzaXplOiAoZXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0ICRjdXJyZW50VGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblx0XHRcdFx0XHRcdCRjdXJyZW50VGFyZ2V0LmNzcyh7XG5cdFx0XHRcdFx0XHRcdGxlZnQ6ICcnLFxuXHRcdFx0XHRcdFx0XHR0b3A6ICcnLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRDQUwuZGlhbG9nSGVpZ2h0ID0gJGN1cnJlbnRUYXJnZXQuaGVpZ2h0KCkgPz8gQ0FMLmRpYWxvZ0hlaWdodDtcblx0XHRcdFx0XHRcdHRoaXMuJHJlc3VsdExpc3QuY3NzKHtcblx0XHRcdFx0XHRcdFx0bWF4SGVpZ2h0OiAnJyxcblx0XHRcdFx0XHRcdFx0d2lkdGg6ICcnLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMuJHJlc3VsdExpc3QuY3NzKCdtYXgtaGVpZ2h0JywgJzQ1MHB4Jyk7XG5cdFx0XHRcdGlmIChDQUwuaXNTZWFyY2hNb2RlKSB7XG5cdFx0XHRcdFx0dGhpcy51cGRhdGVDYXRzKCdQaWN0dXJlcyBhbmQgaW1hZ2VzJyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy51cGRhdGVDYXRzKENBTC5DVVJSRU5UX0NBVEVHUk9ZKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy4kZGF0YUNvbnRhaW5lci5oaWRlKCk7XG5cdFx0XHRcdHRoaXMuJGNvbnRhaW5lci5yZXNpemFibGUoJ2Rlc3Ryb3knKTtcblx0XHRcdFx0dGhpcy4kY29udGFpbmVyLmNzcygnd2lkdGgnLCAnJyk7XG5cdFx0XHRcdENBTC4kbGFiZWxzLm9mZignY2xpY2suY2F0QUxvdCcpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmIChcblx0XHQod2dOYW1lc3BhY2VOdW1iZXIgPT09IC0xICYmIHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lID09PSAnU2VhcmNoJykgfHxcblx0XHR3Z05hbWVzcGFjZU51bWJlciA9PT0gT1BUSU9OUy50YXJnZXROYW1lc3BhY2Vcblx0KSB7XG5cdFx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyID09PSAtMSkge1xuXHRcdFx0Q0FMLmlzU2VhcmNoTW9kZSA9IHRydWU7XG5cdFx0fVxuXHRcdC8qISBDYXQtYS1sb3QgbWVzc2FnZXMgfCBDQy1CWS1TQS00LjAgPGh0dHBzOi8vcXdiay5jYy9IOkNDLUJZLVNBLTQuMD4gKi9cblx0XHRzZXRNZXNzYWdlcygpO1xuXHRcdHZvaWQgZ2V0Qm9keSgpLnRoZW4oKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRcdFx0bmV3IENBTCgkYm9keSkuYnVpbGRFbGVtZW50cygpO1xuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQge2NhdEFMb3R9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgQ2F0LWEtbG90LyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHtDTEFTU19OQU1FX0xBQkVMLCBDTEFTU19OQU1FX0xBQkVMX0xBU1RfU0VMRUNURUQsIENMQVNTX05BTUVfTEFCRUxfU0VMRUNURUR9IGZyb20gJy4vY29uc3RhbnQnO1xuXG50eXBlIE9uQ2F0QUxvdFNoaWZ0Q2xpY2sgPSAodGhpczogSlF1ZXJ5LCBjYWxsYmFjazogKCkgPT4gdW5rbm93bikgPT4gSlF1ZXJ5O1xuZGVjbGFyZSBnbG9iYWwge1xuXHRpbnRlcmZhY2UgSlF1ZXJ5IHtcblx0XHRvbkNhdEFMb3RTaGlmdENsaWNrOiBPbkNhdEFMb3RTaGlmdENsaWNrO1xuXHR9XG59XG5cbmNvbnN0IGV4dGVuZEpRdWVyeVByb3RvdHlwZSA9ICgpOiB2b2lkID0+IHtcblx0JC5mbi5leHRlbmQoe1xuXHRcdG9uQ2F0QUxvdFNoaWZ0Q2xpY2s6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0bGV0IHByZXZDaGVja2JveDogSlF1ZXJ5IHwgdW5kZWZpbmVkO1xuXG5cdFx0XHQvLyBXaGVuIG91ciBib3hlcyBhcmUgY2xpY2tlZC4uXG5cdFx0XHR0aGlzLm9uKCdjbGljay5jYXRBTG90JywgKGV2ZW50OiBKUXVlcnkuVHJpZ2dlcmVkRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0Ly8gUHJldmVudCBmb2xsb3dpbmcgdGhlIGxpbmsgYW5kIHRleHQgc2VsZWN0aW9uXG5cdFx0XHRcdGlmICghZXZlbnQuY3RybEtleSkge1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBIaWdobGlnaHQgbGFzdCBzZWxlY3RlZFxuXHRcdFx0XHR0aGlzLnBhcmVudHMoJ2JvZHknKVxuXHRcdFx0XHRcdC5maW5kKGAuJHtDTEFTU19OQU1FX0xBQkVMX0xBU1RfU0VMRUNURUR9YClcblx0XHRcdFx0XHQucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9MQUJFTF9MQVNUX1NFTEVDVEVEKTtcblxuXHRcdFx0XHRsZXQgJHRoaXNDb250cm9sID0gJChldmVudC50YXJnZXQpIGFzIEpRdWVyeTtcblx0XHRcdFx0aWYgKCEkdGhpc0NvbnRyb2wuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9MQUJFTCkpIHtcblx0XHRcdFx0XHQkdGhpc0NvbnRyb2wgPSAkdGhpc0NvbnRyb2wucGFyZW50cyhgLiR7Q0xBU1NfTkFNRV9MQUJFTH1gKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCR0aGlzQ29udHJvbC5hZGRDbGFzcyhDTEFTU19OQU1FX0xBQkVMX0xBU1RfU0VMRUNURUQpLnRvZ2dsZUNsYXNzKENMQVNTX05BTUVfTEFCRUxfU0VMRUNURUQpO1xuXG5cdFx0XHRcdC8vIEFuZCBvbmUgaGFzIGJlZW4gY2xpY2tlZCBiZWZvcmUuLi5cblx0XHRcdFx0aWYgKHByZXZDaGVja2JveCAmJiBldmVudC5zaGlmdEtleSkge1xuXHRcdFx0XHRcdGNvbnN0IG1ldGhvZDogJ2FkZENsYXNzJyB8ICdyZW1vdmVDbGFzcycgPSAkdGhpc0NvbnRyb2wuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRClcblx0XHRcdFx0XHRcdD8gJ2FkZENsYXNzJ1xuXHRcdFx0XHRcdFx0OiAncmVtb3ZlQ2xhc3MnO1xuXHRcdFx0XHRcdC8vIENoZWNrIG9yIHVuY2hlY2sgdGhpcyBvbmUgYW5kIGFsbCBpbi1iZXR3ZWVuIGNoZWNrYm94ZXNcblx0XHRcdFx0XHR0aGlzLnNsaWNlKFxuXHRcdFx0XHRcdFx0TWF0aC5taW4odGhpcy5pbmRleChwcmV2Q2hlY2tib3gpLCB0aGlzLmluZGV4KCR0aGlzQ29udHJvbCkpLFxuXHRcdFx0XHRcdFx0TWF0aC5tYXgodGhpcy5pbmRleChwcmV2Q2hlY2tib3gpLCB0aGlzLmluZGV4KCR0aGlzQ29udHJvbCkpICsgMVxuXHRcdFx0XHRcdClbbWV0aG9kXShDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVEKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBFaXRoZXIgd2F5LCB1cGRhdGUgdGhlIHByZXZDaGVja2JveCB2YXJpYWJsZSB0byB0aGUgb25lIGNsaWNrZWQgbm93XG5cdFx0XHRcdHByZXZDaGVja2JveCA9ICR0aGlzQ29udHJvbDtcblxuXHRcdFx0XHRpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0Y2FsbGJhY2soKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gYXMgT25DYXRBTG90U2hpZnRDbGljayxcblx0fSk7XG59O1xuXG5leHBvcnQge2V4dGVuZEpRdWVyeVByb3RvdHlwZX07XG4iLCAiaW1wb3J0IHtjYXRBTG90fSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5pbXBvcnQge2V4dGVuZEpRdWVyeVByb3RvdHlwZX0gZnJvbSAnLi9tb2R1bGVzL2V4dGVuZEpRdWVyeVByb3RvdHlwZSc7XG5cbi8qISBDYXQtYS1sb3QgfCBDQy1CWS1TQS00LjAgPGh0dHBzOi8veXN5bWguY2MvSDpDQy1CWS1TQS00LjA+ICovXG5leHRlbmRKUXVlcnlQcm90b3R5cGUoKTtcbmNhdEFMb3QoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxTQUFVO0FBQ1YsSUFBQUMsa0JBQW1CO0FBQ25CLElBQUFDLFVBQVc7QUFDWCxJQUFBQyxhQUFjOztBQ0RmLElBQU1DLGFBQXFCO0FBQzNCLElBQU1DLHVCQUFBLEdBQUFDLE9BQWtDRixZQUFVLFlBQUE7QUFDbEQsSUFBTUcs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TUFBTTZILFlBQVksQ0FBQyxHQUMzRDVDLEtBQUtnRCxJQUFJLEtBQUtqSSxNQUFNd0gsWUFBWSxHQUFHLEtBQUt4SCxNQUFNNkgsWUFBWSxDQUFDLElBQUksQ0FDaEUsRUFBRUcsTUFBTSxFQUFFclgseUJBQXlCO1FBQ3BDO0FBRUE2Vyx1QkFBZUs7QUFFZixZQUFJLE9BQU8xSixhQUFhLFlBQVk7QUFDbkNBLG1CQUFTO1FBQ1Y7TUFDRCxDQUFDO0FBRUQsYUFBTztJQUNSO0VBQ0QsQ0FBQztBQUNGOztBQ3BEQTtBQUNBa0osc0JBQXNCO0FBQ3RCdFUsUUFBUTsiLAogICJuYW1lcyI6IFsiYXBpVGFnIiwgInRhcmdldE5hbWVzcGFjZSIsICJ2ZXJzaW9uIiwgInN0b3JhZ2VLZXkiLCAiQ0xBU1NfTkFNRSIsICJDTEFTU19OQU1FX0NPTlRBSU5FUiIsICJjb25jYXQiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQSIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1QiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUX0FDVElPTiIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfTk9fRk9VTkQiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9NQVJLX0NPVU5URVIiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUFSQ0hfSU5QVVRfQ09OVEFJTkVSX0lOUFVUIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OUyIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfQUxMIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OU19OT05FIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0hFQUQiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOS19FTkFCTEVEIiwgIkNMQVNTX05BTUVfQ1VSUkVOVF9DT1VOVEVSIiwgIkNMQVNTX05BTUVfRkVFREJBQ0siLCAiQ0xBU1NfTkFNRV9GRUVEQkFDS19ET05FIiwgIkNMQVNTX05BTUVfTEFCRUwiLCAiQ0xBU1NfTkFNRV9MQUJFTF9ET05FIiwgIkNMQVNTX05BTUVfTEFCRUxfTEFTVF9TRUxFQ1RFRCIsICJDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVEIiwgIkRFRkFVTFRfU0VUVElORyIsICJkb2NsZWFudXAiLCAiZGVmYXVsdCIsICJsYWJlbF9pMThuIiwgImVkaXRwYWdlcyIsICJtaW5vciIsICJzdWJjYXRjb3VudCIsICJ3YXRjaGxpc3QiLCAic2VsZWN0X2kxOG4iLCAid2F0Y2hfbm9jaGFuZ2UiLCAid2F0Y2hfcHJlZiIsICJ3YXRjaF91bndhdGNoIiwgIndhdGNoX3dhdGNoIiwgIlZBUklBTlRTIiwgIndnVXNlckxhbmd1YWdlIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiREVGQVVMVF9NRVNTQUdFUyIsICJzZXRNZXNzYWdlcyIsICJpbmNsdWRlcyIsICJtZXNzYWdlcyIsICJzZXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgIl9fdG9FU00iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJ3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSIsICJ3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMiLCAid2dOYW1lc3BhY2VJZHMiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAid2dUaXRsZSIsICJjYXRBTG90IiwgIkNBTCIsICJpc1NlYXJjaE1vZGUiLCAiTUVTU0FHRVMiLCAiQVBJX1RBRyIsICJUQVJHRVRfTkFNRVNQQUNFIiwgIkNVUlJFTlRfQ0FURUdST1kiLCAiaXNBdXRvQ29tcGxldGVJbml0IiwgImFscmVhZHlUaGVyZSIsICJjb25uZWN0aW9uRXJyb3IiLCAibm90Rm91bmQiLCAiY291bnRlckN1cnJlbnQiLCAiY291bnRlck5lZWRlZCIsICJjb3VudGVyQ2F0IiwgImN1cnJlbnRDYXRlZ29yeSIsICJkaWFsb2dIZWlnaHQiLCAiZWRpdFRva2VuIiwgImxvY2FsQ2F0TmFtZSIsICJwYXJlbnRDYXRzIiwgInN1YkNhdHMiLCAic2V0dGluZ3MiLCAidmFyaWFudENhY2hlIiwgIiRjb3VudGVyIiwgIiQiLCAiJHByb2dyZXNzRGlhbG9nIiwgIiRsYWJlbHMiLCAiJHNlbGVjdGVkTGFiZWxzIiwgIiRib2R5IiwgIiRjb250YWluZXIiLCAiJGRhdGFDb250YWluZXIiLCAiJG1hcmtDb3VudGVyIiwgIiRyZXN1bHRMaXN0IiwgIiRzZWFyY2hJbnB1dCIsICIkaGVhZCIsICIkbGluayIsICJjb25zdHJ1Y3RvciIsICJfbXckdXRpbCRnZXRQYXJhbVZhbHUiLCAibXNnIiwgImluaXRTZXR0aW5ncyIsICJjb250YWluZXIiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAicGxhY2Vob2xkZXIiLCAidHlwZSIsICJ2YWx1ZSIsICJ1dGlsIiwgImdldFBhcmFtVmFsdWUiLCAib25LZXlEb3duIiwgImV2ZW50IiwgIiRlbGVtZW50IiwgImN1cnJlbnRUYXJnZXQiLCAia2V5IiwgIl8kZWxlbWVudCR2YWwkdHJpbSIsICJfJGVsZW1lbnQkdmFsIiwgImNhdCIsICJ2YWwiLCAidHJpbSIsICJ1cGRhdGVDYXRzIiwgIm9uQ2xpY2siLCAidG9nZ2xlQWxsIiwgImFwcGVuZFRvIiwgImZpbmQiLCAiYnVpbGRFbGVtZW50cyIsICJyZWdleENhdCIsICJSZWdFeHAiLCAibG9jYWxpemVkUmVnZXgiLCAiaXNDb21wb3NpdGlvblN0YXJ0IiwgIm9uIiwgIm9sZFZhbCIsICJuZXdWYWwiLCAicmVwbGFjZSIsICJpbml0QXV0b2NvbXBsZXRlIiwgImF1dG9jb21wbGV0ZSIsICJzb3VyY2UiLCAicmVxdWVzdCIsICJyZXNwb25zZSIsICJkb0FQSUNhbGwiLCAiYWN0aW9uIiwgIm5hbWVzcGFjZSIsICJyZWRpcmVjdHMiLCAic2VhcmNoIiwgInRlcm0iLCAicmVzdWx0IiwgIm1hcCIsICJfaW5kZXgiLCAiaXRlbSIsICJwb3NpdGlvbiIsICJteSIsICJhdCIsICJvZiIsICJ0b2dnbGVDbGFzcyIsICJydW4iLCAiX3dpbmRvdyRDYXRBTG90UHJlZnMiLCAiY2F0QUxvdFByZWZzIiwgIndpbmRvdyIsICJDYXRBTG90UHJlZnMiLCAidHlwZU9mQ2F0QUxvdFByZWZzIiwgIkFycmF5IiwgImlzQXJyYXkiLCAiX2kiLCAiX09iamVjdCRrZXlzIiwgIk9iamVjdCIsICJrZXlzIiwgImxlbmd0aCIsICJfY2F0QUxvdFByZWZzJHNldHRpbmciLCAic2V0dGluZ0tleSIsICJzZXR0aW5nIiwgInNlbGVjdCIsICJfaTIiLCAiX09iamVjdCRrZXlzMiIsICJtZXNzYWdlS2V5IiwgIm1lc3NhZ2UiLCAiYXJncyIsICJmdWxsS2V5IiwgInBhcnNlIiwgInBsYWluIiwgIm5hbWVzcGFjZU51bWJlciIsICJmYWxsYmFjayIsICJfQ0FMJHdnRm9ybWF0dGVkTmFtZXMiLCAid2lraVRleHRCbGFuayIsICJTdHJpbmciLCAicmF3IiwgIl90ZW1wbGF0ZU9iamVjdCIsICJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsIiwgIndpa2lUZXh0QmxhbmtSRSIsICJjcmVhdGVSZWdleFN0ciIsICJuYW1lIiwgInJlZ2V4TmFtZSIsICJpIiwgImluaXRpYWwiLCAic2xpY2UiLCAibGwiLCAidG9Mb3dlckNhc2UiLCAidWwiLCAidG9VcHBlckNhc2UiLCAiX3RlbXBsYXRlT2JqZWN0MiIsICJjYW5vbmljYWwiLCAicmVnZXhTdHJpbmciLCAiX2kzIiwgIl9PYmplY3Qka2V5czMiLCAiY2F0TmFtZSIsICJ1cGRhdGVTZWxlY3Rpb25Db3VudGVyIiwgImZpbHRlciIsICJzaG93IiwgImh0bWwiLCAidG9TdHJpbmciLCAiZmluZEFsbFZhcmlhbnRzIiwgImNhdGVnb3J5IiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInN0b3JhZ2UiLCAiZ2V0T2JqZWN0IiwgInJlc3VsdHMiLCAicGFyYW1zIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInRleHQiLCAidGl0bGUiLCAiX2k0IiwgIl9WQVJJQU5UUyIsICJ2YXJpYW50IiwgImVxIiwgInVuaXF1ZUFycmF5IiwgInNldE9iamVjdCIsICJyZWdleEJ1aWxkZXIiLCAidmFyaWFudHMiLCAidmFyaWFudFJlZ0V4cHMiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiZXNjYXBlUmVnRXhwIiwgIl90ZW1wbGF0ZU9iamVjdDMiLCAiZmlyc3QiLCAiZXJyIiwgImUiLCAiZiIsICJqb2luIiwgIl9wYXJhbXMiLCAiY2FsbGJhY2siLCAiZG9DYWxsIiwgImhhbmRsZUVycm9yIiwgImVycm9yIiwgImxvZyIsICJzZXRUaW1lb3V0IiwgInVwZGF0ZUNvdW50ZXIiLCAidGhlbiIsICJjYXRjaCIsICJwb3N0IiwgIm1hcmtBc0RvbmUiLCAiJG1hcmtlZExhYmVsIiwgInRhcmdldENhdGVnb3J5IiwgIm1vZGUiLCAiYWRkQ2xhc3MiLCAiYXBwZW5kIiwgIkZyYWdtZW50IiwgImRvQ2xlYW51cCIsICJyZW1vdmVVbmNhdCIsICJkaXNwbGF5UmVzdWx0IiwgImNzcyIsICJjdXJzb3IiLCAib3ZlcmZsb3ciLCAiJHBhcmVudCIsICJwYXJlbnQiLCAicmVtb3ZlIiwgInJlZHVjZSIsICJwcmUiLCAiY3VyIiwgImluZGV4IiwgImVkaXRDYXRlZ29yaWVzIiwgIm1hcmtlZExhYmVsIiwgIl90aGlzIiwgIl9wYWdlJHJldmlzaW9ucyIsICJtYXJrZWRMYWJlbFRpdGxlIiwgIm9yaWdpblRleHQiLCAic3RhcnR0aW1lc3RhbXAiLCAidGltZXN0YW1wIiwgInRva2VucyIsICJjc3JmdG9rZW4iLCAicGFnZXMiLCAicGFnZSIsICJyZXZpc2lvbnMiLCAic2xvdHMiLCAibWFpbiIsICJjb250ZW50IiwgInNvdXJjZWNhdCIsICJ0YXJnZVJlZ0V4cCIsICJ0ZXN0IiwgInN1bW1hcnkiLCAic291cmNlQ2F0UmVnRXhwIiwgInRva2VuIiwgInRhZ3MiLCAiYXNzZXJ0IiwgImJvdCIsICJiYXNldGltZXN0YW1wIiwgImdldENvbnRlbnQiLCAibWV0YSIsICJ0aXRsZXMiLCAicHJvcCIsICJydnByb3AiLCAicnZzbG90cyIsICJnZXRUaXRsZUZyb21MaW5rIiwgImhyZWYiLCAiX2RlY29kZVVSSUNvbXBvbmVudCRtIiwgIl9kZWNvZGVVUklDb21wb25lbnQkbTIiLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgIm1hdGNoIiwgImdldE1hcmtlZExhYmVscyIsICJtYXJrZWRMYWJlbHMiLCAiZWFjaCIsICJsYWJlbCIsICJfJGxhYmVsTGluayRhdHRyIiwgIiRsYWJlbCIsICIkbGFiZWxMaW5rIiwgImF0dHIiLCAic2hvd1Byb2dyZXNzIiwgImRpYWxvZyIsICJkaWFsb2dDbGFzcyIsICJtaW5IZWlnaHQiLCAiaGVpZ2h0IiwgIndpZHRoIiwgIm1vZGFsIiwgImNsb3NlT25Fc2NhcGUiLCAiZHJhZ2dhYmxlIiwgInJlc2l6YWJsZSIsICJoaWRlIiwgImRvU29tZXRoaW5nIiwgIm5vdGlmeSIsICJ0YWciLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiYWRkSGVyZSIsICJjb3B5SGVyZSIsICJtb3ZlSGVyZSIsICJjcmVhdGVDYXRMaW5rcyIsICJzeW1ib2wiLCAiY2F0ZWdvcmllcyIsICJzb3J0IiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgIiR0ciIsICJkYXRhc2V0IiwgImNsb3Nlc3QiLCAiZGF0YSIsICJzaG93Q2F0ZWdvcnlMaXN0IiwgIl90aGlzJCRjb250YWluZXIkd2lkdCIsICJfJCR3aWR0aCIsICJjdXJyZW50Q2F0ZWdvcmllcyIsICJlbXB0eSIsICJNYXRoIiwgIm1pbiIsICJnZXRQYXJlbnRDYXRzIiwgIl9wYWdlcyQiLCAiX3BhZ2VzJDIiLCAicXVlcnkiLCAibWlzc2luZyIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJnZXRTdWJDYXRzIiwgImxpc3QiLCAiY210eXBlIiwgImNtbGltaXQiLCAiY210aXRsZSIsICJfcmVzdWx0JHF1ZXJ5IiwgImNhdHMiLCAiY2F0ZWdvcnltZW1iZXJzIiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgImdldENhdGVnb3J5TGlzdCIsICJmaW5kQWxsTGFiZWxzIiwgImFkZCIsICIkcGFnZXMiLCAibWFrZUNsaWNrYWJsZSIsICJvbkNhdEFMb3RTaGlmdENsaWNrIiwgImhhc0NsYXNzIiwgImFsc29SZXNpemUiLCAiaGFuZGxlcyIsICJyZXNpemUiLCAiXyRjdXJyZW50VGFyZ2V0JGhlaWdoIiwgIiRjdXJyZW50VGFyZ2V0IiwgImxlZnQiLCAidG9wIiwgIm1heEhlaWdodCIsICJvZmYiLCAiZ2V0Qm9keSIsICJleHRlbmRKUXVlcnlQcm90b3R5cGUiLCAiZm4iLCAiZXh0ZW5kIiwgInByZXZDaGVja2JveCIsICJjdHJsS2V5IiwgInByZXZlbnREZWZhdWx0IiwgInBhcmVudHMiLCAicmVtb3ZlQ2xhc3MiLCAiJHRoaXNDb250cm9sIiwgInRhcmdldCIsICJzaGlmdEtleSIsICJtZXRob2QiLCAibWF4Il0KfQo=
