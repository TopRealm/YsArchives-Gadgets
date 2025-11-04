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
        const store = mw.storage.session || mw.storage;
        if (store.getObject(storageKey + category)) {
          CAL.variantCache[category] = store.getObject(storageKey + category);
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
        store.setObject(storageKey + category, results, 60 * 60 * 24);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NhdC1hLWxvdC9vcHRpb25zLmpzb24iLCAic3JjL0NhdC1hLWxvdC9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9DYXQtYS1sb3QvbW9kdWxlcy9tZXNzYWdlcy50cyIsICJzcmMvQ2F0LWEtbG90L21vZHVsZXMvY29yZS50c3giLCAic3JjL0NhdC1hLWxvdC9tb2R1bGVzL2FwaS50cyIsICJzcmMvQ2F0LWEtbG90L21vZHVsZXMvZXh0ZW5kSlF1ZXJ5UHJvdG90eXBlLnRzIiwgInNyYy9DYXQtYS1sb3QvQ2F0LWEtbG90LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiYXBpVGFnXCI6IFwiQ2F0LWEtbG90XCIsXG5cdFwidGFyZ2V0TmFtZXNwYWNlXCI6IDE0LFxuXHRcInZlcnNpb25cIjogXCI2LjBcIixcblx0XCJzdG9yYWdlS2V5XCI6IFwiZXh0LmdhZGdldC5DYXQtYS1Mb3RfcmVzdWx0cy1cIlxufVxuIiwgIi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuaW1wb3J0IHR5cGUge1NldHRpbmd9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBDTEFTU19OQU1FOiBzdHJpbmcgPSAnZ2FkZ2V0LWNhdF9hX2xvdCc7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUjogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX0tY29udGFpbmVyYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEE6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSfV9fZGF0YWA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1Q6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEF9X19jYXRlZ29yeS1saXN0YDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9BQ1RJT046IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVH1fX2FjdGlvbmA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfTk9fRk9VTkQ6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVH0tLW5vLWZvdW5kYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfTUFSS19DT1VOVEVSOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBfV9fbWFyay1jb3VudGVyYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VBUkNIX0lOUFVUX0NPTlRBSU5FUl9JTlBVVDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQX1fX3NlYXJjaC1pbnB1dC1jb250YWluZXJfX2lucHV0YDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OUzogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQX1fX3NlbGVjdGlvbnNgO1xuY29uc3QgQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX0FMTDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TfV9fYWxsYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OU19OT05FOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlN9X19ub25lYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQUQ6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSfV9faGVhZGA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTks6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0hFQUR9X19saW5rYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOS19FTkFCTEVEOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTkt9LS1lbmFibGVkYDtcbmNvbnN0IENMQVNTX05BTUVfQ1VSUkVOVF9DT1VOVEVSOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FfS1jdXJyZW50X2NvdW50ZXJgO1xuY29uc3QgQ0xBU1NfTkFNRV9GRUVEQkFDSzogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX0tZmVlZGJhY2tgO1xuY29uc3QgQ0xBU1NfTkFNRV9GRUVEQkFDS19ET05FOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0ZFRURCQUNLfS0tZG9uZWA7XG5jb25zdCBDTEFTU19OQU1FX0xBQkVMOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FfS1sYWJlbGA7XG5jb25zdCBDTEFTU19OQU1FX0xBQkVMX0RPTkU6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfTEFCRUx9LS1kb25lYDtcbmNvbnN0IENMQVNTX05BTUVfTEFCRUxfTEFTVF9TRUxFQ1RFRDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9MQUJFTH0tLWxhc3Qtc2VsZWN0ZWRgO1xuY29uc3QgQ0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9MQUJFTH0tLXNlbGVjdGVkYDtcblxuY29uc3QgREVGQVVMVF9TRVRUSU5HOiBTZXR0aW5nID0ge1xuXHRkb2NsZWFudXA6IHtcblx0XHRkZWZhdWx0OiBmYWxzZSxcblx0XHRsYWJlbF9pMThuOiAnZG9jbGVhbnVwcHJlZicsXG5cdH0sXG5cdGVkaXRwYWdlczoge1xuXHRcdGRlZmF1bHQ6IHRydWUsXG5cdFx0bGFiZWxfaTE4bjogJ2VkaXRwYWdlc3ByZWYnLFxuXHR9LFxuXHRtaW5vcjoge1xuXHRcdGRlZmF1bHQ6IGZhbHNlLFxuXHRcdGxhYmVsX2kxOG46ICdtaW5vcnByZWYnLFxuXHR9LFxuXHRzdWJjYXRjb3VudDoge1xuXHRcdGRlZmF1bHQ6IDUwLFxuXHRcdGxhYmVsX2kxOG46ICdzdWJjYXRjb3VudHByZWYnLFxuXHR9LFxuXHR3YXRjaGxpc3Q6IHtcblx0XHRkZWZhdWx0OiAncHJlZmVyZW5jZXMnLFxuXHRcdGxhYmVsX2kxOG46ICd3YXRjaGxpc3RwcmVmJyxcblx0XHRzZWxlY3RfaTE4bjoge1xuXHRcdFx0d2F0Y2hfbm9jaGFuZ2U6ICdub2NoYW5nZScsXG5cdFx0XHR3YXRjaF9wcmVmOiAncHJlZmVyZW5jZXMnLFxuXHRcdFx0d2F0Y2hfdW53YXRjaDogJ3Vud2F0Y2gnLFxuXHRcdFx0d2F0Y2hfd2F0Y2g6ICd3YXRjaCcsXG5cdFx0fSxcblx0fSxcbn07XG5cbmNvbnN0IFZBUklBTlRTOiBzdHJpbmdbXSA9IFsnemgtaGFucycsICd6aC1oYW50JywgJ3poLWNuJywgJ3poLW15JywgJ3poLXNnJywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXR3J107XG5cbmV4cG9ydCB7XG5cdENMQVNTX05BTUUsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1QsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9BQ1RJT04sXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9OT19GT1VORCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9NQVJLX0NPVU5URVIsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VBUkNIX0lOUFVUX0NPTlRBSU5FUl9JTlBVVCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfQUxMLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfTk9ORSxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTktfRU5BQkxFRCxcblx0Q0xBU1NfTkFNRV9DVVJSRU5UX0NPVU5URVIsXG5cdENMQVNTX05BTUVfRkVFREJBQ0ssXG5cdENMQVNTX05BTUVfRkVFREJBQ0tfRE9ORSxcblx0Q0xBU1NfTkFNRV9MQUJFTCxcblx0Q0xBU1NfTkFNRV9MQUJFTF9ET05FLFxuXHRDTEFTU19OQU1FX0xBQkVMX0xBU1RfU0VMRUNURUQsXG5cdENMQVNTX05BTUVfTEFCRUxfU0VMRUNURUQsXG5cdERFRkFVTFRfU0VUVElORyxcblx0VkFSSUFOVFMsXG59O1xuIiwgImltcG9ydCB0eXBlIHtNZXNzYWdlS2V5fSBmcm9tICcuL3R5cGVzJztcblxuY29uc3Qge3dnVXNlckxhbmd1YWdlfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuY29uc3QgREVGQVVMVF9NRVNTQUdFUyA9IHtcblx0Ly8gYXMgaW4gMTcgZmlsZXMgc2VsZWN0ZWRcblx0J2NhdC1hLWxvdC1maWxlcy1zZWxlY3RlZCc6ICd7e1BMVVJBTDokMXxPbmUgZmlsZXwkMSBmaWxlc319IHNlbGVjdGVkLicsXG5cdC8vIEFjdGlvbnNcblx0J2NhdC1hLWxvdC1jb3B5JzogJ0NvcHknLFxuXHQnY2F0LWEtbG90LW1vdmUnOiAnTW92ZScsXG5cdCdjYXQtYS1sb3QtYWRkJzogJ0FkZCcsXG5cdCdjYXQtYS1sb3QtcmVtb3ZlLWZyb20tY2F0JzogJ1JlbW92ZSBmcm9tIHRoaXMgY2F0ZWdvcnknLFxuXHQnY2F0LWEtbG90LWVudGVyLW5hbWUnOiAnRW50ZXIgY2F0ZWdvcnkgbmFtZScsXG5cdCdjYXQtYS1sb3Qtc2VsZWN0JzogJ1NlbGVjdCcsXG5cdCdjYXQtYS1sb3QtYWxsJzogJ2FsbCcsXG5cdCdjYXQtYS1sb3Qtbm9uZSc6ICdub25lJyxcblx0J2NhdC1hLWxvdC1ub25lLXNlbGVjdGVkJzogJ05vIGZpbGVzIHNlbGVjdGVkIScsXG5cdC8vIFByZWZlcmVuY2VzXG5cdCdjYXQtYS1sb3Qtd2F0Y2hsaXN0cHJlZic6ICdXYXRjaGxpc3QgcHJlZmVyZW5jZSBjb25jZXJuaW5nIGZpbGVzIGVkaXRlZCB3aXRoIENhdC1BLUxvdCcsXG5cdCdjYXQtYS1sb3Qtd2F0Y2hfcHJlZic6ICdBY2NvcmRpbmcgdG8geW91ciBnZW5lcmFsIHByZWZlcmVuY2VzJyxcblx0J2NhdC1hLWxvdC13YXRjaF9ub2NoYW5nZSc6ICdEbyBub3QgY2hhbmdlIHdhdGNoc3RhdHVzJyxcblx0J2NhdC1hLWxvdC13YXRjaF93YXRjaCc6ICdXYXRjaCBwYWdlcyBlZGl0ZWQgd2l0aCBDYXQtQS1Mb3QnLFxuXHQnY2F0LWEtbG90LXdhdGNoX3Vud2F0Y2gnOiAnUmVtb3ZlIHBhZ2VzIHdoaWxlIGVkaXRpbmcgd2l0aCBDYXQtQS1Mb3QgZnJvbSB5b3VyIHdhdGNobGlzdCcsXG5cdCdjYXQtYS1sb3QtbWlub3JwcmVmJzpcblx0XHRcIk1hcmsgZWRpdHMgYXMgbWlub3IgKGlmIHlvdSBnZW5lcmFsbHkgbWFyayB5b3VyIGVkaXRzIGFzIG1pbm9yLCB0aGlzIHdvbid0IGNoYW5nZSBhbnl0aGluZylcIixcblx0J2NhdC1hLWxvdC1lZGl0cGFnZXNwcmVmJzogJ0FsbG93IGNhdGVnb3Jpc2luZyBwYWdlcyAoaW5jbHVkaW5nIGNhdGVnb3JpZXMpIHRoYXQgYXJlIG5vdCBmaWxlcycsXG5cdCdjYXQtYS1sb3QtZG9jbGVhbnVwcHJlZic6ICdSZW1vdmUge3tDaGVjayBjYXRlZ29yaWVzfX0gYW5kIG90aGVyIG1pbm9yIGNsZWFudXAnLFxuXHQnY2F0LWEtbG90LXN1YmNhdGNvdW50cHJlZic6ICdTdWItY2F0ZWdvcmllcyB0byBzaG93IGF0IG1vc3QnLFxuXHQvLyBQcm9ncmVzc1xuXHQnY2F0LWEtbG90LWxvYWRpbmcnOiAnTG9hZGluZy4uLicsXG5cdCdjYXQtYS1sb3QtZWRpdGluZyc6ICdFZGl0aW5nIHBhZ2UnLFxuXHQnY2F0LWEtbG90LW9mJzogJ29mICcsXG5cdCdjYXQtYS1sb3Qtc2tpcHBlZC1hbHJlYWR5Jzpcblx0XHQnVGhlIGZvbGxvd2luZyB7e1BMVVJBTDokMXxwYWdlIHdhc3wkMSBwYWdlcyB3ZXJlfX0gc2tpcHBlZCwgYmVjYXVzZSB0aGUgcGFnZSB3YXMgYWxyZWFkeSBpbiB0aGUgY2F0ZWdvcnk6Jyxcblx0J2NhdC1hLWxvdC1za2lwcGVkLW5vdC1mb3VuZCc6XG5cdFx0J1RoZSBmb2xsb3dpbmcge3tQTFVSQUw6JDF8cGFnZSB3YXN8JDEgcGFnZXMgd2VyZX19IHNraXBwZWQsIGJlY2F1c2UgdGhlIG9sZCBjYXRlZ29yeSBjb3VsZCBub3QgYmUgZm91bmQ6Jyxcblx0J2NhdC1hLWxvdC1za2lwcGVkLXNlcnZlcic6XG5cdFx0XCJUaGUgZm9sbG93aW5nIHt7UExVUkFMOiQxfHBhZ2V8JDEgcGFnZXN9fSBjb3VsZG4ndCBiZSBjaGFuZ2VkLCBzaW5jZSB0aGVyZSB3ZXJlIHByb2JsZW1zIGNvbm5lY3RpbmcgdG8gdGhlIHNlcnZlcjpcIixcblx0J2NhdC1hLWxvdC1hbGwtZG9uZSc6ICdBbGwgcGFnZXMgYXJlIHByb2Nlc3NlZC4nLFxuXHQnY2F0LWEtbG90LWRvbmUnOiAnRG9uZSEnLFxuXHQnY2F0LWEtbG90LWFkZGVkLWNhdCc6ICdBZGRlZCBjYXRlZ29yeSAkMScsXG5cdCdjYXQtYS1sb3QtY29waWVkLWNhdCc6ICdDb3BpZWQgdG8gY2F0ZWdvcnkgJDEnLFxuXHQnY2F0LWEtbG90LW1vdmVkLWNhdCc6ICdNb3ZlZCB0byBjYXRlZ29yeSAkMScsXG5cdCdjYXQtYS1sb3QtcmVtb3ZlZC1jYXQnOiAnUmVtb3ZlZCBmcm9tIGNhdGVnb3J5ICQxJyxcblx0J2NhdC1hLWxvdC1yZXR1cm4tdG8tcGFnZSc6ICdSZXR1cm4gdG8gcGFnZScsXG5cdCdjYXQtYS1sb3QtY2F0LW5vdC1mb3VuZCc6ICdDYXRlZ29yeSBub3QgZm91bmQuJyxcblx0Ly8gU3VtbWFyaWVzOlxuXHQnY2F0LWEtbG90LXN1bW1hcnktYWRkJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV06IEFkZGluZyBbW0NhdGVnb3J5OiQxXV0nLFxuXHQnY2F0LWEtbG90LXN1bW1hcnktY29weSc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1dOiBDb3B5aW5nIGZyb20gW1tDYXRlZ29yeTokMV1dIHRvIFtbQ2F0ZWdvcnk6JDJdXScsXG5cdCdjYXQtYS1sb3Qtc3VtbWFyeS1tb3ZlJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV06IE1vdmluZyBmcm9tIFtbQ2F0ZWdvcnk6JDFdXSB0byBbW0NhdGVnb3J5OiQyXV0nLFxuXHQnY2F0LWEtbG90LXN1bW1hcnktcmVtb3ZlJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV06IFJlbW92aW5nIGZyb20gW1tDYXRlZ29yeTokMV1dJyxcbn0gc2F0aXNmaWVzIFJlY29yZDxNZXNzYWdlS2V5LCBzdHJpbmc+O1xuXG5jb25zdCBzZXRNZXNzYWdlcyA9ICgpOiB2b2lkID0+IHtcblx0LyohIENhdC1hLWxvdCBtZXNzYWdlcyB8IENDLUJZLVNBLTQuMCA8aHR0cHM6Ly95c3ltaC5jYy9IOkNDLUJZLVNBLTQuMD4gKi9cblx0aWYgKHdnVXNlckxhbmd1YWdlID09PSAnZW4nKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKFsnemgtaGFudCcsICd6aC1oaycsICd6aC1tbycsICd6aC10dyddLmluY2x1ZGVzKHdnVXNlckxhbmd1YWdlKSkge1xuXHRcdG13Lm1lc3NhZ2VzLnNldDx0eXBlb2YgREVGQVVMVF9NRVNTQUdFUz4oe1xuXHRcdFx0Ly8gYXMgaW4gMTcgZmlsZXMgc2VsZWN0ZWRcblx0XHRcdCdjYXQtYS1sb3QtZmlsZXMtc2VsZWN0ZWQnOiAnJDHlgIvmlofku7blt7Lpgbjmk4cnLFxuXHRcdFx0Ly8gQWN0aW9uc1xuXHRcdFx0J2NhdC1hLWxvdC1jb3B5JzogJ+ikh+ijvScsXG5cdFx0XHQnY2F0LWEtbG90LW1vdmUnOiAn56e75YuVJyxcblx0XHRcdCdjYXQtYS1sb3QtYWRkJzogJ+WinuWKoCcsXG5cdFx0XHQnY2F0LWEtbG90LXJlbW92ZS1mcm9tLWNhdCc6ICflvp7mraTliIbpoZ7np7vpmaQnLFxuXHRcdFx0J2NhdC1hLWxvdC1lbnRlci1uYW1lJzogJ+i8uOWFpeWIhumhnuWQjeeosScsXG5cdFx0XHQnY2F0LWEtbG90LXNlbGVjdCc6ICfpgbjmk4cnLFxuXHRcdFx0J2NhdC1hLWxvdC1hbGwnOiAn5YWo6YOoJyxcblx0XHRcdCdjYXQtYS1sb3Qtbm9uZSc6ICfnhKEnLFxuXHRcdFx0J2NhdC1hLWxvdC1ub25lLXNlbGVjdGVkJzogJ+aykuaciemBuOaTh+aWh+S7tu+8gScsXG5cdFx0XHQvLyBQcmVmZXJlbmNlc1xuXHRcdFx0J2NhdC1hLWxvdC13YXRjaGxpc3RwcmVmJzogJ+S9v+eUqENhdC1BLUxvdOe3qOi8r+aWh+S7tuaZgueahOebo+imluWIl+ihqOmBuOmghScsXG5cdFx0XHQnY2F0LWEtbG90LXdhdGNoX3ByZWYnOiAn6IiH57O757Wx5Y+D5pW46Kit572u55u45ZCMJyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfbm9jaGFuZ2UnOiAn5LiN6KaB5pu05pS555uj6KaW54uA5oWLJyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfd2F0Y2gnOiAn55uj6KaW5L2/55SoQ2F0LUEtTG9057eo6Lyv55qE6aCB6Z2iJyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfdW53YXRjaCc6ICflsIfkvb/nlKhDYXQtQS1Mb3Tnt6jovK/nmoTpoIHpnaLlvp7nm6PoppbliJfooajnp7vpmaQnLFxuXHRcdFx0J2NhdC1hLWxvdC1taW5vcnByZWYnOlxuXHRcdFx0XHQn5bCH57eo6Lyv5qiZ6KiY54iy5bCP5L+u5pS577yI6Iul5oKo5Zyo57O757Wx5Y+D5pW46Kit572u5Lit5bey6Kit572u5bCH5omA5pyJ57eo6Lyv5qiZ6KiY54iy5bCP5L+u5pS577yM5q2k6YG46aCF5LiN5pyD5bCN54++5pyJ6KGM54iy6YCy6KGM5pS55YuV77yJJyxcblx0XHRcdCdjYXQtYS1sb3QtZWRpdHBhZ2VzcHJlZic6ICflhYHoqLHlsI3kuI3mmK/mlofku7bnmoTpoIHpnaLlkozlrZDliIbpoZ7pgLLooYzliIbpoZ7mk43kvZwnLFxuXHRcdFx0J2NhdC1hLWxvdC1kb2NsZWFudXBwcmVmJzogJ+enu+mZpHt7Q2hlY2sgY2F0ZWdvcmllc3195Lim6YCy6KGM5YW25LuW57Sw56+A5riF55CGJyxcblx0XHRcdCdjYXQtYS1sb3Qtc3ViY2F0Y291bnRwcmVmJzogJ+acgOWkmumhr+ekuueahOWtkOWIhumhnuaVuOmHjycsXG5cdFx0XHQvLyBQcm9ncmVzc1xuXHRcdFx0J2NhdC1hLWxvdC1sb2FkaW5nJzogJ+ato+WcqOWKoOi8ieKApuKApicsXG5cdFx0XHQnY2F0LWEtbG90LWVkaXRpbmcnOiAn5q2j5Zyo57eo6Lyv6aCB6Z2iJyxcblx0XHRcdCdjYXQtYS1sb3Qtb2YnOiAn77yM5YWx5pyJJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2tpcHBlZC1hbHJlYWR5JzogJ+S7peS4i+mggemdouW3sui3s+mBju+8jOWboOeIsumggemdouW3sue2k+WcqOWIhumhnuS4re+8micsXG5cdFx0XHQnY2F0LWEtbG90LXNraXBwZWQtbm90LWZvdW5kJzogJ+S7peS4i+mggemdouW3sui3s+mBju+8jOWboOeIsuaJvuS4jeWIsOePvuacieWIhumhnu+8micsXG5cdFx0XHQnY2F0LWEtbG90LXNraXBwZWQtc2VydmVyJzogJ+S7peS4i+mggemdoueEoeazlee3qOi8r++8jOWboOeIsumAo+aOpeacjeWLmeWZqOWHuumMr++8micsXG5cdFx0XHQnY2F0LWEtbG90LWFsbC1kb25lJzogJ+WFqOmDqOmggemdouW3suiZleeQhuOAgicsXG5cdFx0XHQnY2F0LWEtbG90LWRvbmUnOiAn5bey5a6M5oiQ77yBJyxcblx0XHRcdCdjYXQtYS1sb3QtYWRkZWQtY2F0JzogJ+W3suWKoOWFpeWIhumhnicsXG5cdFx0XHQnY2F0LWEtbG90LWNvcGllZC1jYXQnOiAn5bey6KSH6KO95Yiw5YiG6aGeJyxcblx0XHRcdCdjYXQtYS1sb3QtbW92ZWQtY2F0JzogJ+W3suenu+WLleWIsOWIhumhnicsXG5cdFx0XHQnY2F0LWEtbG90LXJlbW92ZWQtY2F0JzogJ+W3suW+nuWIhumhnuenu+mZpCcsXG5cdFx0XHQnY2F0LWEtbG90LXJldHVybi10by1wYWdlJzogJ+i/lOWbnuWIsOmggemdoicsXG5cdFx0XHQnY2F0LWEtbG90LWNhdC1ub3QtZm91bmQnOiAn5om+5LiN5Yiw5YiG6aGe44CCJyxcblx0XHRcdC8vIFN1bW1hcmllc1xuXHRcdFx0J2NhdC1hLWxvdC1zdW1tYXJ5LWFkZCc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1d77ya5Yqg5YWl5YiG6aGeW1tDYXRlZ29yeTokMV1dJyxcblx0XHRcdCdjYXQtYS1sb3Qtc3VtbWFyeS1jb3B5JzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV3vvJrliIbpoZ7plpPopIfoo73vvJrlvp5bW0NhdGVnb3J5OiQxXV3liLBbW0NhdGVnb3J5OiQyXV0nLFxuXHRcdFx0J2NhdC1hLWxvdC1zdW1tYXJ5LW1vdmUnOiAnW1tIZWxwOkNhdC1hLWxvdHxDYXQtYS1sb3RdXe+8muWIhumhnumWk+enu+WLle+8muW+nltbQ2F0ZWdvcnk6JDFdXeWIsFtbQ2F0ZWdvcnk6JDJdXScsXG5cdFx0XHQnY2F0LWEtbG90LXN1bW1hcnktcmVtb3ZlJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV3vvJrlvp7liIbpoZ7np7vpmaTvvJpbW0NhdGVnb3J5OiQxXV0nLFxuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdG13Lm1lc3NhZ2VzLnNldDx0eXBlb2YgREVGQVVMVF9NRVNTQUdFUz4oe1xuXHRcdFx0Ly8gYXMgaW4gMTcgZmlsZXMgc2VsZWN0ZWRcblx0XHRcdCdjYXQtYS1sb3QtZmlsZXMtc2VsZWN0ZWQnOiAn5bey6YCJ5oupJDHkuKrpobXpnaLmiJbmlofku7YnLFxuXHRcdFx0Ly8gQWN0aW9uc1xuXHRcdFx0J2NhdC1hLWxvdC1jb3B5JzogJ+WkjeWIticsXG5cdFx0XHQnY2F0LWEtbG90LW1vdmUnOiAn56e75YqoJyxcblx0XHRcdCdjYXQtYS1sb3QtYWRkJzogJ+WinuWKoCcsXG5cdFx0XHQnY2F0LWEtbG90LXJlbW92ZS1mcm9tLWNhdCc6ICfku47mraTliIbnsbvnp7vpmaQnLFxuXHRcdFx0J2NhdC1hLWxvdC1lbnRlci1uYW1lJzogJ+i+k+WFpeWIhuexu+WQjeensCcsXG5cdFx0XHQnY2F0LWEtbG90LXNlbGVjdCc6ICfpgInmi6knLFxuXHRcdFx0J2NhdC1hLWxvdC1hbGwnOiAn5YWo6YOoJyxcblx0XHRcdCdjYXQtYS1sb3Qtbm9uZSc6ICfml6AnLFxuXHRcdFx0J2NhdC1hLWxvdC1ub25lLXNlbGVjdGVkJzogJ+ayoeaciemAieaLqeS7u+S9lemhtemdouaIluaWh+S7tu+8gScsXG5cdFx0XHQvLyBQcmVmZXJlbmNlc1xuXHRcdFx0J2NhdC1hLWxvdC13YXRjaGxpc3RwcmVmJzogJ+S9v+eUqENhdC1hLWxvdOe8lui+keaWh+S7tuaXtueahOebkeinhuWIl+ihqOmAiemhuScsXG5cdFx0XHQnY2F0LWEtbG90LXdhdGNoX3ByZWYnOiAn5LiO57O757uf5Y+C5pWw6K6+572u55u45ZCMJyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfbm9jaGFuZ2UnOiAn5LiN6KaB5pu05pS555uR6KeG54q25oCBJyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfd2F0Y2gnOiAn55uR6KeG5L2/55SoQ2F0LWEtbG9057yW6L6R55qE6aG16Z2iJyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfdW53YXRjaCc6ICflsIbkvb/nlKhDYXQtYS1sb3TnvJbovpHnmoTpobXpnaLku47nm5Hop4bliJfooajnp7vpmaQnLFxuXHRcdFx0J2NhdC1hLWxvdC1taW5vcnByZWYnOlxuXHRcdFx0XHQn5bCG57yW6L6R5qCH6K6w5Li65bCP5L+u5pS577yI6Iul5oKo5Zyo57O757uf5Y+C5pWw6K6+572u5Lit5bey6K6+572u5bCG5omA5pyJ57yW6L6R5qCH6K6w5Li65bCP5L+u5pS577yM5q2k6YCJ6aG55LiN5Lya5a+5546w5pyJ6KGM5Li66L+b6KGM5pS55Yqo77yJJyxcblx0XHRcdCdjYXQtYS1sb3QtZWRpdHBhZ2VzcHJlZic6ICflhYHorrjlr7nkuI3mmK/mlofku7bnmoTpobXpnaLlkozlrZDliIbnsbvov5vooYzliIbnsbvmk43kvZwnLFxuXHRcdFx0J2NhdC1hLWxvdC1kb2NsZWFudXBwcmVmJzogJ+enu+mZpHt7Q2hlY2sgY2F0ZWdvcmllc3195bm26L+b6KGM5YW25LuW57uG6IqC5riF55CGJyxcblx0XHRcdCdjYXQtYS1sb3Qtc3ViY2F0Y291bnRwcmVmJzogJ+acgOWkmuaYvuekuueahOWtkOWIhuexu+aVsOmHjycsXG5cdFx0XHQvLyBQcm9ncmVzc1xuXHRcdFx0J2NhdC1hLWxvdC1sb2FkaW5nJzogJ+ato+WcqOWKoOi9veKApuKApicsXG5cdFx0XHQnY2F0LWEtbG90LWVkaXRpbmcnOiAn5q2j5Zyo57yW6L6R6aG16Z2iJyxcblx0XHRcdCdjYXQtYS1sb3Qtb2YnOiAn77yM5YWx5pyJJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2tpcHBlZC1hbHJlYWR5JzogJ+S7peS4i+mhtemdouW3sui3s+i/h++8jOWboOS4uumhtemdouW3sue7j+WcqOWIhuexu+S4re+8micsXG5cdFx0XHQnY2F0LWEtbG90LXNraXBwZWQtbm90LWZvdW5kJzogJ+S7peS4i+mhtemdouW3sui3s+i/h++8jOWboOS4uuaJvuS4jeWIsOeOsOacieWIhuexu++8micsXG5cdFx0XHQnY2F0LWEtbG90LXNraXBwZWQtc2VydmVyJzogJ+S7peS4i+mhtemdouaXoOazlee8lui+ke+8jOWboOS4uui/nuaOpeacjeWKoeWZqOWHuumUme+8micsXG5cdFx0XHQnY2F0LWEtbG90LWFsbC1kb25lJzogJ+WFqOmDqOmhtemdouW3suWkhOeQhuOAgicsXG5cdFx0XHQnY2F0LWEtbG90LWRvbmUnOiAn5bey5a6M5oiQ77yBJyxcblx0XHRcdCdjYXQtYS1sb3QtYWRkZWQtY2F0JzogJ+W3suWKoOWFpeWIhuexuycsXG5cdFx0XHQnY2F0LWEtbG90LWNvcGllZC1jYXQnOiAn5bey5aSN5Yi25Yiw5YiG57G7Jyxcblx0XHRcdCdjYXQtYS1sb3QtbW92ZWQtY2F0JzogJ+W3suenu+WKqOWIsOWIhuexuycsXG5cdFx0XHQnY2F0LWEtbG90LXJlbW92ZWQtY2F0JzogJ+W3suS7juWIhuexu+enu+mZpCcsXG5cdFx0XHQnY2F0LWEtbG90LXJldHVybi10by1wYWdlJzogJ+i/lOWbnuWIsOmhtemdoicsXG5cdFx0XHQnY2F0LWEtbG90LWNhdC1ub3QtZm91bmQnOiAn5om+5LiN5Yiw5YiG57G744CCJyxcblx0XHRcdC8vIFN1bW1hcmllc1xuXHRcdFx0J2NhdC1hLWxvdC1zdW1tYXJ5LWFkZCc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1d77ya5Yqg5YWl5YiG57G7W1tDYXRlZ29yeTokMV1dJyxcblx0XHRcdCdjYXQtYS1sb3Qtc3VtbWFyeS1jb3B5JzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV3vvJrliIbnsbvpl7TlpI3liLbvvJrku45bW0NhdGVnb3J5OiQxXV3liLBbW0NhdGVnb3J5OiQyXV0nLFxuXHRcdFx0J2NhdC1hLWxvdC1zdW1tYXJ5LW1vdmUnOiAnW1tIZWxwOkNhdC1hLWxvdHxDYXQtYS1sb3RdXe+8muWIhuexu+mXtOenu+WKqO+8muS7jltbQ2F0ZWdvcnk6JDFdXeWIsFtbQ2F0ZWdvcnk6JDJdXScsXG5cdFx0XHQnY2F0LWEtbG90LXN1bW1hcnktcmVtb3ZlJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV3vvJrku47liIbnsbvnp7vpmaTvvJpbW0NhdGVnb3J5OiQxXV0nLFxuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQge0RFRkFVTFRfTUVTU0FHRVMsIHNldE1lc3NhZ2VzfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge1xuXHRDTEFTU19OQU1FLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUixcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQSxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNULFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfQUNUSU9OLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfTk9fRk9VTkQsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfTUFSS19DT1VOVEVSLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFQVJDSF9JTlBVVF9DT05UQUlORVJfSU5QVVQsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OUyxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX0FMTCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX05PTkUsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQUQsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOSyxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LX0VOQUJMRUQsXG5cdENMQVNTX05BTUVfQ1VSUkVOVF9DT1VOVEVSLFxuXHRDTEFTU19OQU1FX0ZFRURCQUNLLFxuXHRDTEFTU19OQU1FX0ZFRURCQUNLX0RPTkUsXG5cdENMQVNTX05BTUVfTEFCRUwsXG5cdENMQVNTX05BTUVfTEFCRUxfRE9ORSxcblx0Q0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRCxcblx0REVGQVVMVF9TRVRUSU5HLFxuXHRWQVJJQU5UUyxcbn0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge0RFRkFVTFRfTUVTU0FHRVMsIHNldE1lc3NhZ2VzfSBmcm9tICcuL21lc3NhZ2VzJztcbmltcG9ydCB0eXBlIHtNZXNzYWdlS2V5LCBTZXR0aW5nfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7Z2V0Qm9keSwgdW5pcXVlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxuY29uc3Qge3dnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lLCB3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMsIHdnTmFtZXNwYWNlSWRzLCB3Z05hbWVzcGFjZU51bWJlciwgd2dUaXRsZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbi8qKlxuICogQ2hhbmdlcyBjYXRlZ29yeSBvZiBtdWx0aXBsZSBmaWxlc1xuICovXG5jb25zdCBjYXRBTG90ID0gKCk6IHZvaWQgPT4ge1xuXHQvKiEgQ2F0LWEtbG90IHwgQ0MtQlktU0EtNC4wIDxodHRwczovL3lzeW1oLmNjL0g6Q0MtQlktU0EtNC4wPiAqL1xuXHRjbGFzcyBDQUwge1xuXHRcdHB1YmxpYyBzdGF0aWMgaXNTZWFyY2hNb2RlID0gZmFsc2U7XG5cblx0XHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBNRVNTQUdFUzogUmVjb3JkPE1lc3NhZ2VLZXksIHN0cmluZz4gPSBERUZBVUxUX01FU1NBR0VTO1xuXHRcdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfU0VUVElORzogU2V0dGluZyA9IERFRkFVTFRfU0VUVElORztcblxuXHRcdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEFQSV9UQUc6IHN0cmluZyA9IE9QVElPTlMuYXBpVGFnO1xuXHRcdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFRBUkdFVF9OQU1FU1BBQ0U6IG51bWJlciA9IE9QVElPTlMudGFyZ2V0TmFtZXNwYWNlO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgQ1VSUkVOVF9DQVRFR1JPWTogc3RyaW5nID0gd2dUaXRsZTtcblxuXHRcdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHdnRm9ybWF0dGVkTmFtZXNwYWNlczogUmVjb3JkPG51bWJlciwgc3RyaW5nPiA9IHdnRm9ybWF0dGVkTmFtZXNwYWNlcztcblx0XHRwcml2YXRlIHN0YXRpYyByZWFkb25seSB3Z05hbWVzcGFjZUlkczogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHdnTmFtZXNwYWNlSWRzO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgaXNBdXRvQ29tcGxldGVJbml0ID0gZmFsc2U7XG5cblx0XHRwcml2YXRlIHN0YXRpYyBhcGkgPSBhcGk7XG5cblx0XHRwcml2YXRlIHN0YXRpYyBhbHJlYWR5VGhlcmU6IHN0cmluZ1tdID0gW107XG5cdFx0cHJpdmF0ZSBzdGF0aWMgY29ubmVjdGlvbkVycm9yOiBzdHJpbmdbXSA9IFtdO1xuXHRcdHByaXZhdGUgc3RhdGljIG5vdEZvdW5kOiBzdHJpbmdbXSA9IFtdO1xuXHRcdHByaXZhdGUgc3RhdGljIGNvdW50ZXJDdXJyZW50ID0gMDtcblx0XHRwcml2YXRlIHN0YXRpYyBjb3VudGVyTmVlZGVkID0gMDtcblxuXHRcdHByaXZhdGUgc3RhdGljIGNvdW50ZXJDYXQgPSAwO1xuXHRcdHByaXZhdGUgc3RhdGljIGN1cnJlbnRDYXRlZ29yeSA9ICcnO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgZGlhbG9nSGVpZ2h0ID0gNDUwO1xuXHRcdHByaXZhdGUgc3RhdGljIGVkaXRUb2tlbiA9ICcnO1xuXHRcdHByaXZhdGUgc3RhdGljIGxvY2FsQ2F0TmFtZSA9IHdnRm9ybWF0dGVkTmFtZXNwYWNlc1tDQUwuVEFSR0VUX05BTUVTUEFDRV0gYXMgc3RyaW5nO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgcGFyZW50Q2F0czogc3RyaW5nW10gPSBbXTtcblx0XHRwcml2YXRlIHN0YXRpYyBzdWJDYXRzOiBzdHJpbmdbXSA9IFtdO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgc2V0dGluZ3M6IE5vbk51bGxhYmxlPHR5cGVvZiB3aW5kb3cuQ2F0QUxvdFByZWZzPiA9IHt9O1xuXHRcdHByaXZhdGUgc3RhdGljIHZhcmlhbnRDYWNoZTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+ID0ge307XG5cblx0XHRwcml2YXRlIHN0YXRpYyAkY291bnRlcjogSlF1ZXJ5ID0gJCgpO1xuXHRcdHByaXZhdGUgc3RhdGljICRwcm9ncmVzc0RpYWxvZzogSlF1ZXJ5ID0gJCgpO1xuXHRcdHByaXZhdGUgc3RhdGljICRsYWJlbHM6IEpRdWVyeSA9ICQoKTtcblx0XHRwcml2YXRlIHN0YXRpYyAkc2VsZWN0ZWRMYWJlbHM6IEpRdWVyeSA9ICQoKTtcblxuXHRcdHByaXZhdGUgcmVhZG9ubHkgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+O1xuXHRcdHByaXZhdGUgcmVhZG9ubHkgJGNvbnRhaW5lcjogSlF1ZXJ5O1xuXHRcdHByaXZhdGUgcmVhZG9ubHkgJGRhdGFDb250YWluZXI6IEpRdWVyeTtcblx0XHRwcml2YXRlIHJlYWRvbmx5ICRtYXJrQ291bnRlcjogSlF1ZXJ5O1xuXHRcdHByaXZhdGUgcmVhZG9ubHkgJHJlc3VsdExpc3Q6IEpRdWVyeTtcblx0XHRwcml2YXRlIHJlYWRvbmx5ICRzZWFyY2hJbnB1dDogSlF1ZXJ5PEhUTUxJbnB1dEVsZW1lbnQ+O1xuXHRcdHByaXZhdGUgcmVhZG9ubHkgJGhlYWQ6IEpRdWVyeTtcblx0XHRwcml2YXRlIHJlYWRvbmx5ICRsaW5rOiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+O1xuXG5cdFx0cHVibGljIGNvbnN0cnVjdG9yKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pikge1xuXHRcdFx0aWYgKCFtdy5tc2coJ2NhdC1hLWxvdC1sb2FkaW5nJykpIHtcblx0XHRcdFx0bXcubWVzc2FnZXMuc2V0KENBTC5NRVNTQUdFUyk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuJGJvZHkgPSAkYm9keTtcblx0XHRcdENBTC5pbml0U2V0dGluZ3MoKTtcblxuXHRcdFx0Y29uc3QgY29udGFpbmVyID0gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17W0NMQVNTX05BTUUsIENMQVNTX05BTUVfQ09OVEFJTkVSLCAnbm9wcmludCddfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQX0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9NQVJLX0NPVU5URVJ9IC8+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUfSAvPlxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFQVJDSF9JTlBVVF9DT05UQUlORVJfSU5QVVR9XG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e0NBTC5tc2coJ2VudGVyLW5hbWUnKX1cblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e0NBTC5pc1NlYXJjaE1vZGUgPyAobXcudXRpbC5nZXRQYXJhbVZhbHVlKCdzZWFyY2gnKSA/PyAnJykgOiAnJ31cblx0XHRcdFx0XHRcdFx0XHRvbktleURvd249eyhldmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgJGVsZW1lbnQgPSAkPEhUTUxJbnB1dEVsZW1lbnQ+KGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBjYXQ6IHN0cmluZyA9ICRlbGVtZW50LnZhbCgpPy50cmltKCkgPz8gJyc7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChjYXQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnVwZGF0ZUNhdHMoY2F0KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlN9PlxuXHRcdFx0XHRcdFx0XHR7W0NBTC5tc2coJ3NlbGVjdCcpLCAnICddfVxuXHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX0FMTH1cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnRvZ2dsZUFsbCh0cnVlKTtcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ2FsbCcpfVxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdHsnIOKAoiAnfVxuXHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX05PTkV9XG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy50b2dnbGVBbGwoZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHR7Q0FMLm1zZygnbm9uZScpfVxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRH0+XG5cdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOS30+Q2F0LWEtbG90PC9hPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cblx0XHRcdHRoaXMuJGNvbnRhaW5lciA9ICQoY29udGFpbmVyKSBhcyBKUXVlcnk7XG5cdFx0XHR0aGlzLiRjb250YWluZXIuYXBwZW5kVG8odGhpcy4kYm9keSk7XG5cblx0XHRcdHRoaXMuJGRhdGFDb250YWluZXIgPSB0aGlzLiRjb250YWluZXIuZmluZChgLiR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQX1gKTtcblx0XHRcdHRoaXMuJG1hcmtDb3VudGVyID0gdGhpcy4kZGF0YUNvbnRhaW5lci5maW5kKGAuJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX01BUktfQ09VTlRFUn1gKTtcblx0XHRcdHRoaXMuJHJlc3VsdExpc3QgPSB0aGlzLiRkYXRhQ29udGFpbmVyLmZpbmQoYC4ke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVH1gKTtcblx0XHRcdHRoaXMuJHNlYXJjaElucHV0ID0gdGhpcy4kZGF0YUNvbnRhaW5lci5maW5kPEhUTUxJbnB1dEVsZW1lbnQ+KFxuXHRcdFx0XHRgLiR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUFSQ0hfSU5QVVRfQ09OVEFJTkVSX0lOUFVUfWBcblx0XHRcdCk7XG5cblx0XHRcdHRoaXMuJGhlYWQgPSB0aGlzLiRjb250YWluZXIuZmluZChgLiR7Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRH1gKTtcblx0XHRcdHRoaXMuJGxpbmsgPSB0aGlzLiRoZWFkLmZpbmQ8SFRNTEFuY2hvckVsZW1lbnQ+KGAuJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTkt9YCk7XG5cdFx0fVxuXG5cdFx0cHVibGljIGJ1aWxkRWxlbWVudHMoKTogdm9pZCB7XG5cdFx0XHRjb25zdCByZWdleENhdDogUmVnRXhwID0gbmV3IFJlZ0V4cChgXlxcXFxzKiR7Q0FMLmxvY2FsaXplZFJlZ2V4KENBTC5UQVJHRVRfTkFNRVNQQUNFLCAnQ2F0ZWdvcnknKX06YCwgJycpO1xuXHRcdFx0bGV0IGlzQ29tcG9zaXRpb25TdGFydDogYm9vbGVhbjtcblxuXHRcdFx0dGhpcy4kc2VhcmNoSW5wdXQub24oJ2NvbXBvc2l0aW9uc3RhcnQnLCAoKSA9PiB7XG5cdFx0XHRcdGlzQ29tcG9zaXRpb25TdGFydCA9IHRydWU7XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy4kc2VhcmNoSW5wdXQub24oJ2NvbXBvc2l0aW9uZW5kJywgKCkgPT4ge1xuXHRcdFx0XHRpc0NvbXBvc2l0aW9uU3RhcnQgPSBmYWxzZTtcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLiRzZWFyY2hJbnB1dC5vbignaW5wdXQga2V5dXAnLCAoZXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0aWYgKGlzQ29tcG9zaXRpb25TdGFydCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCB7Y3VycmVudFRhcmdldH0gPSBldmVudDtcblx0XHRcdFx0Y29uc3Qge3ZhbHVlOiBvbGRWYWx9ID0gY3VycmVudFRhcmdldDtcblx0XHRcdFx0Y29uc3QgbmV3VmFsOiBzdHJpbmcgPSBvbGRWYWwucmVwbGFjZShyZWdleENhdCwgJycpO1xuXHRcdFx0XHRpZiAobmV3VmFsICE9PSBvbGRWYWwpIHtcblx0XHRcdFx0XHRjdXJyZW50VGFyZ2V0LnZhbHVlID0gbmV3VmFsO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0Y29uc3QgaW5pdEF1dG9jb21wbGV0ZSA9ICgpOiB2b2lkID0+IHtcblx0XHRcdFx0aWYgKENBTC5pc0F1dG9Db21wbGV0ZUluaXQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Q0FMLmlzQXV0b0NvbXBsZXRlSW5pdCA9IHRydWU7XG5cblx0XHRcdFx0dGhpcy4kc2VhcmNoSW5wdXQuYXV0b2NvbXBsZXRlKHtcblx0XHRcdFx0XHRzb3VyY2U6IChyZXF1ZXN0OiB7dGVybTogc3RyaW5nfSwgcmVzcG9uc2U6IChhcmc6IEpRdWVyeTxzdHJpbmc+KSA9PiB2b2lkKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLmRvQVBJQ2FsbChcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGFjdGlvbjogJ29wZW5zZWFyY2gnLFxuXHRcdFx0XHRcdFx0XHRcdG5hbWVzcGFjZTogQ0FMLlRBUkdFVF9OQU1FU1BBQ0UsXG5cdFx0XHRcdFx0XHRcdFx0cmVkaXJlY3RzOiAncmVzb2x2ZScsXG5cdFx0XHRcdFx0XHRcdFx0c2VhcmNoOiByZXF1ZXN0LnRlcm0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdChyZXN1bHQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRpZiAocmVzdWx0WzFdKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXNwb25zZShcblx0XHRcdFx0XHRcdFx0XHRcdFx0JChyZXN1bHRbMV0pLm1hcCgoX2luZGV4LCBpdGVtOiBzdHJpbmcpOiBzdHJpbmcgPT4gaXRlbS5yZXBsYWNlKHJlZ2V4Q2F0LCAnJykpXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHBvc2l0aW9uOiB7XG5cdFx0XHRcdFx0XHRteTogJ3JpZ2h0IGJvdHRvbScsXG5cdFx0XHRcdFx0XHRhdDogJ3JpZ2h0IHRvcCcsXG5cdFx0XHRcdFx0XHRvZjogdGhpcy4kc2VhcmNoSW5wdXQsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRhcHBlbmRUbzogYC4ke0NMQVNTX05BTUVfQ09OVEFJTkVSfWAsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fTtcblx0XHRcdHRoaXMuJGxpbmsub24oJ2NsaWNrJywgKGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdCQoZXZlbnQuY3VycmVudFRhcmdldCkudG9nZ2xlQ2xhc3MoQ0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LX0VOQUJMRUQpO1xuXHRcdFx0XHRpbml0QXV0b2NvbXBsZXRlKCk7XG5cdFx0XHRcdHRoaXMucnVuKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRwcml2YXRlIHN0YXRpYyBpbml0U2V0dGluZ3MoKTogdm9pZCB7XG5cdFx0XHRsZXQgY2F0QUxvdFByZWZzOiB0eXBlb2YgQ0FMLnNldHRpbmdzID0gd2luZG93LkNhdEFMb3RQcmVmcyA/PyB7fTtcblx0XHRcdGNvbnN0IHR5cGVPZkNhdEFMb3RQcmVmcyA9IHR5cGVvZiBjYXRBTG90UHJlZnM7XG5cdFx0XHRpZiAoKHR5cGVPZkNhdEFMb3RQcmVmcyA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoY2F0QUxvdFByZWZzKSkgfHwgdHlwZU9mQ2F0QUxvdFByZWZzICE9PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRjYXRBTG90UHJlZnMgPSB7fTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yIChjb25zdCBzZXR0aW5nS2V5IG9mIE9iamVjdC5rZXlzKENBTC5ERUZBVUxUX1NFVFRJTkcpIGFzIChrZXlvZiBTZXR0aW5nKVtdKSB7XG5cdFx0XHRcdGNvbnN0IHNldHRpbmcgPSBDQUwuREVGQVVMVF9TRVRUSU5HW3NldHRpbmdLZXldO1xuXG5cdFx0XHRcdENBTC5zZXR0aW5nc1tzZXR0aW5nS2V5XSA9IGNhdEFMb3RQcmVmc1tzZXR0aW5nS2V5XSA/PyBzZXR0aW5nLmRlZmF1bHQ7XG5cblx0XHRcdFx0aWYgKCFzZXR0aW5nLnNlbGVjdF9pMThuKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzZXR0aW5nLnNlbGVjdCA9IHt9O1xuXHRcdFx0XHRmb3IgKGNvbnN0IG1lc3NhZ2VLZXkgb2YgT2JqZWN0LmtleXMoc2V0dGluZy5zZWxlY3RfaTE4bikpIHtcblx0XHRcdFx0XHRjb25zdCBtZXNzYWdlOiBzdHJpbmcgPSBzZXR0aW5nLnNlbGVjdF9pMThuW21lc3NhZ2VLZXldIGFzIGtleW9mIHR5cGVvZiBzZXR0aW5nLnNlbGVjdF9pMThuO1xuXHRcdFx0XHRcdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0XHRcdFx0XHQvLyAqIHNlZSBtZXNzYWdlcy50c1xuXHRcdFx0XHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHRcdFx0XHRzZXR0aW5nLnNlbGVjdFtDQUwubXNnKG1lc3NhZ2VLZXkgYXMgbmV2ZXIpXSA9IG1lc3NhZ2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRwcml2YXRlIHN0YXRpYyBtc2coa2V5OiBNZXNzYWdlS2V5IGV4dGVuZHMgYGNhdC1hLWxvdC0ke2luZmVyIFB9YCA/IFAgOiBuZXZlciwgLi4uYXJnczogc3RyaW5nW10pOiBzdHJpbmcge1xuXHRcdFx0Y29uc3QgZnVsbEtleTogc3RyaW5nID0gYGNhdC1hLWxvdC0ke2tleX1gO1xuXHRcdFx0Ly8gTWVzc2FnZXMgdGhhdCBjYW4gYmUgdXNlZCBoZXJlOlxuXHRcdFx0Ly8gKiBzZWUgbWVzc2FnZXMudHNcblx0XHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHRcdHJldHVybiBhcmdzLmxlbmd0aCA/IG13Lm1lc3NhZ2UoZnVsbEtleSwgLi4uYXJncykucGFyc2UoKSA6IG13Lm1lc3NhZ2UoZnVsbEtleSkucGxhaW4oKTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBzdGF0aWMgbG9jYWxpemVkUmVnZXgobmFtZXNwYWNlTnVtYmVyOiBudW1iZXIsIGZhbGxiYWNrOiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdFx0Ly8gQ29waWVkIGZyb20gSG90Q2F0LCB0aGFua3MgTHVwby5cblx0XHRcdGNvbnN0IHdpa2lUZXh0Qmxhbms6IHN0cmluZyA9IFN0cmluZy5yYXdgW1xcdCBfXFx4QTBcXHUxNjgwXFx1MTgwRVxcdTIwMDAtXFx1MjAwQVxcdTIwMjhcXHUyMDI5XFx1MjAyRlxcdTIwNUZcXHUzMDAwXStgO1xuXHRcdFx0Y29uc3Qgd2lraVRleHRCbGFua1JFOiBSZWdFeHAgPSBuZXcgUmVnRXhwKHdpa2lUZXh0QmxhbmssICdnJyk7XG5cdFx0XHRjb25zdCBjcmVhdGVSZWdleFN0ciA9IChuYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQpOiBzdHJpbmcgPT4ge1xuXHRcdFx0XHRpZiAoIW5hbWU/Lmxlbmd0aCkge1xuXHRcdFx0XHRcdHJldHVybiAnJztcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgcmVnZXhOYW1lOiBzdHJpbmcgPSAnJztcblx0XHRcdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG5hbWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRjb25zdCBpbml0aWFsOiBzdHJpbmcgPSBuYW1lLnNsaWNlKGksIGkgKyAxKTtcblx0XHRcdFx0XHRjb25zdCBsbDogc3RyaW5nID0gaW5pdGlhbC50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHRcdGNvbnN0IHVsOiBzdHJpbmcgPSBpbml0aWFsLnRvVXBwZXJDYXNlKCk7XG5cdFx0XHRcdFx0cmVnZXhOYW1lICs9IGxsID09PSB1bCA/IGluaXRpYWwgOiBgWyR7bGx9JHt1bH1dYDtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcmVnZXhOYW1lLnJlcGxhY2UoLyhbJCgpKisuP1xcXFxeXSkvZywgU3RyaW5nLnJhd2BcXCQxYCkucmVwbGFjZSh3aWtpVGV4dEJsYW5rUkUsIHdpa2lUZXh0QmxhbmspO1xuXHRcdFx0fTtcblx0XHRcdGZhbGxiYWNrID0gZmFsbGJhY2sudG9Mb3dlckNhc2UoKTtcblx0XHRcdGNvbnN0IGNhbm9uaWNhbDogc3RyaW5nIHwgdW5kZWZpbmVkID0gQ0FMLndnRm9ybWF0dGVkTmFtZXNwYWNlc1tuYW1lc3BhY2VOdW1iZXJdPy50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0bGV0IHJlZ2V4U3RyaW5nOiBzdHJpbmcgPSBjcmVhdGVSZWdleFN0cihjYW5vbmljYWwpO1xuXHRcdFx0aWYgKGZhbGxiYWNrICYmIGNhbm9uaWNhbCAhPT0gZmFsbGJhY2spIHtcblx0XHRcdFx0cmVnZXhTdHJpbmcgKz0gYHwke2NyZWF0ZVJlZ2V4U3RyKGZhbGxiYWNrKX1gO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChjb25zdCBjYXROYW1lIG9mIE9iamVjdC5rZXlzKENBTC53Z05hbWVzcGFjZUlkcykpIHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdGNhdE5hbWUudG9Mb3dlckNhc2UoKSAhPT0gY2Fub25pY2FsICYmXG5cdFx0XHRcdFx0Y2F0TmFtZS50b0xvd2VyQ2FzZSgpICE9PSBmYWxsYmFjayAmJlxuXHRcdFx0XHRcdENBTC53Z05hbWVzcGFjZUlkc1tjYXROYW1lXSA9PT0gbmFtZXNwYWNlTnVtYmVyXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJlZ2V4U3RyaW5nICs9IGB8JHtjcmVhdGVSZWdleFN0cihjYXROYW1lKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gYCg/OiR7cmVnZXhTdHJpbmd9KWA7XG5cdFx0fVxuXHRcdHByaXZhdGUgdXBkYXRlU2VsZWN0aW9uQ291bnRlcigpOiB2b2lkIHtcblx0XHRcdENBTC4kc2VsZWN0ZWRMYWJlbHMgPSBDQUwuJGxhYmVscy5maWx0ZXIoYC4ke0NMQVNTX05BTUVfTEFCRUxfU0VMRUNURUR9YCk7XG5cdFx0XHR0aGlzLiRtYXJrQ291bnRlci5zaG93KCkuaHRtbChDQUwubXNnKCdmaWxlcy1zZWxlY3RlZCcsIENBTC4kc2VsZWN0ZWRMYWJlbHMubGVuZ3RoLnRvU3RyaW5nKCkpKTtcblx0XHR9XG5cdFx0cHJpdmF0ZSB0b2dnbGVBbGwoc2VsZWN0OiBib29sZWFuKTogdm9pZCB7XG5cdFx0XHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0XHRcdC8vICogc2VlIGNvbnN0YW50LnRzXG5cdFx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0XHRDQUwuJGxhYmVscy50b2dnbGVDbGFzcyhDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVELCBzZWxlY3QpO1xuXHRcdFx0dGhpcy51cGRhdGVTZWxlY3Rpb25Db3VudGVyKCk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgYXN5bmMgZmluZEFsbFZhcmlhbnRzKGNhdGVnb3J5OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG5cdFx0XHRpZiAoQ0FMLnZhcmlhbnRDYWNoZVtjYXRlZ29yeV0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRyZXR1cm4gQ0FMLnZhcmlhbnRDYWNoZVtjYXRlZ29yeV07XG5cdFx0XHR9XG5cdFx0XHQvLyBQcmVmZXIgc2Vzc2lvbiBzdG9yYWdlIHRvIGF2b2lkIGZpbGxpbmcgcGVyc2lzdGVudCBsb2NhbFN0b3JhZ2Vcblx0XHRcdGNvbnN0IHN0b3JlID0gKG13LnN0b3JhZ2Uuc2Vzc2lvbiB8fCBtdy5zdG9yYWdlKSBhcyB0eXBlb2YgbXcuc3RvcmFnZTtcblx0XHRcdGlmIChzdG9yZS5nZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5ICsgY2F0ZWdvcnkpKSB7XG5cdFx0XHRcdENBTC52YXJpYW50Q2FjaGVbY2F0ZWdvcnldID0gc3RvcmUuZ2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleSArIGNhdGVnb3J5KSBhcyBzdHJpbmdbXTtcblx0XHRcdFx0cmV0dXJuIENBTC52YXJpYW50Q2FjaGVbY2F0ZWdvcnldO1xuXHRcdFx0fVxuXHRcdFx0bGV0IHJlc3VsdHM6IHN0cmluZ1tdID0gW107XG5cdFx0XHRjb25zdCBwYXJhbXM6IEFwaVBhcnNlUGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHRleHQ6IGNhdGVnb3J5LFxuXHRcdFx0XHR0aXRsZTogJ3RlbXAnLFxuXHRcdFx0fTtcblx0XHRcdGZvciAoY29uc3QgdmFyaWFudCBvZiBWQVJJQU5UUykge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGNvbnN0IHtwYXJzZX0gPSBhd2FpdCBDQUwuYXBpLmdldCh7XG5cdFx0XHRcdFx0XHQuLi5wYXJhbXMsXG5cdFx0XHRcdFx0XHR2YXJpYW50LFxuXHRcdFx0XHRcdH0gYXMgdHlwZW9mIHBhcmFtcyk7XG5cdFx0XHRcdFx0Y29uc3Qge3RleHR9ID0gcGFyc2U7XG5cdFx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gJCh0ZXh0KS5lcSgwKS50ZXh0KCkudHJpbSgpO1xuXHRcdFx0XHRcdHJlc3VsdHNbcmVzdWx0cy5sZW5ndGhdID0gcmVzdWx0O1xuXHRcdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHR9XG5cdFx0XHQvLyBEZS1kdXBsaWNhdGVcblx0XHRcdHJlc3VsdHMgPSB1bmlxdWVBcnJheShyZXN1bHRzKTsgLy8gUmVwbGFjZSBTZXQgd2l0aCB1bmlxdWVBcnJheSwgYXZvaWRpbmcgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXHRcdFx0Q0FMLnZhcmlhbnRDYWNoZVtjYXRlZ29yeV0gPSByZXN1bHRzO1xuXHRcdFx0c3RvcmUuc2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleSArIGNhdGVnb3J5LCByZXN1bHRzLCA2MCAqIDYwICogMjQpOyAvLyAxIGRheVxuXHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgYXN5bmMgcmVnZXhCdWlsZGVyKGNhdGVnb3J5OiBzdHJpbmcpOiBQcm9taXNlPFJlZ0V4cD4ge1xuXHRcdFx0Ly8gQnVpbGQgYSByZWdleHAgc3RyaW5nIGZvciBtYXRjaGluZyB0aGUgZ2l2ZW4gY2F0ZWdvcnk6XG5cdFx0XHRjb25zdCBjYXROYW1lOiBzdHJpbmcgPSBDQUwubG9jYWxpemVkUmVnZXgoQ0FMLlRBUkdFVF9OQU1FU1BBQ0UsICdDYXRlZ29yeScpO1xuXHRcdFx0Ly8gdHJpbSBsZWFkaW5nL3RyYWlsaW5nIHdoaXRlc3BhY2UgYW5kIHVuZGVyc2NvcmVzXG5cdFx0XHRjYXRlZ29yeSA9IGNhdGVnb3J5LnJlcGxhY2UoL15bXFxzX10rLywgJycpLnJlcGxhY2UoL1tcXHNfXSskLywgJycpO1xuXHRcdFx0Ly8gRmluZCBhbGwgdmFyaWFudHNcblx0XHRcdGNvbnN0IHZhcmlhbnRzOiBzdHJpbmdbXSA9IGF3YWl0IENBTC5maW5kQWxsVmFyaWFudHMoY2F0ZWdvcnkpO1xuXHRcdFx0Ly8gZXNjYXBlIHJlZ2V4cCBtZXRhY2hhcmFjdGVycyAoPSBhbnkgQVNDSUkgcHVuY3R1YXRpb24gZXhjZXB0IF8pXG5cdFx0XHRjb25zdCB2YXJpYW50UmVnRXhwczogc3RyaW5nW10gPSBbXTtcblx0XHRcdGZvciAobGV0IHZhcmlhbnQgb2YgdmFyaWFudHMpIHtcblx0XHRcdFx0dmFyaWFudCA9IG13LnV0aWwuZXNjYXBlUmVnRXhwKHZhcmlhbnQpO1xuXHRcdFx0XHQvLyBhbnkgc2VxdWVuY2Ugb2Ygc3BhY2VzIGFuZCB1bmRlcnNjb3JlcyBzaG91bGQgbWF0Y2ggYW55IG90aGVyXG5cdFx0XHRcdHZhcmlhbnQgPSB2YXJpYW50LnJlcGxhY2UoL1tcXHNfXSsvZywgU3RyaW5nLnJhd2BbXFxzX10rYCk7XG5cdFx0XHRcdC8vIE1ha2UgdGhlIGZpcnN0IGNoYXJhY3RlciBjYXNlLWluc2Vuc2l0aXZlOlxuXHRcdFx0XHRjb25zdCBmaXJzdDogc3RyaW5nID0gdmFyaWFudC5zbGljZSgwLCAxKTtcblx0XHRcdFx0aWYgKGZpcnN0LnRvVXBwZXJDYXNlKCkgIT09IGZpcnN0LnRvTG93ZXJDYXNlKCkpIHtcblx0XHRcdFx0XHR2YXJpYW50ID0gYFske2ZpcnN0LnRvVXBwZXJDYXNlKCl9JHtmaXJzdC50b0xvd2VyQ2FzZSgpfV0ke3ZhcmlhbnQuc2xpY2UoMSl9YDtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXJpYW50UmVnRXhwc1t2YXJpYW50UmVnRXhwcy5sZW5ndGhdID0gdmFyaWFudDtcblx0XHRcdH1cblx0XHRcdC8vIENvbXBpbGUgaXQgaW50byBhIFJlZ0V4cCB0aGF0IG1hdGNoZXMgTWVkaWFXaWtpIGNhdGVnb3J5IHN5bnRheCAoeWVhaCwgaXQgbG9va3MgdWdseSk6XG5cdFx0XHQvLyBYWFg6IHRoZSBmaXJzdCBjYXB0dXJpbmcgcGFyZW5zIGFyZSBhc3N1bWVkIHRvIG1hdGNoIHRoZSBzb3J0a2V5LCBpZiBwcmVzZW50LCBpbmNsdWRpbmcgdGhlIHwgYnV0IGV4Y2x1ZGluZyB0aGUgXV1cblx0XHRcdHJldHVybiBuZXcgUmVnRXhwKFxuXHRcdFx0XHRgXFxcXFtcXFxcW1tcXFxcc19dKiR7Y2F0TmFtZX1bXFxcXHNfXSo6W1xcXFxzX10qKD86JHt2YXJpYW50UmVnRXhwcy5qb2luKFxuXHRcdFx0XHRcdCd8J1xuXHRcdFx0XHQpfSlbXFxcXHNfXSooXFxcXHxbXlxcXFxdXSooPzpcXFxcXVteXFxcXF1dKykqKT9cXFxcXVxcXFxdYCxcblx0XHRcdFx0J2cnXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgZG9BUElDYWxsKFxuXHRcdFx0X3BhcmFtczpcblx0XHRcdFx0fCBPbWl0PEFwaUVkaXRQYWdlUGFyYW1zLCAnZm9ybWF0Jz5cblx0XHRcdFx0fCBPbWl0PEFwaU9wZW5TZWFyY2hQYXJhbXMsICdmb3JtYXQnPlxuXHRcdFx0XHR8IE9taXQ8QXBpUXVlcnlDYXRlZ29yeU1lbWJlcnNQYXJhbXMsICdmb3JtYXQnPlxuXHRcdFx0XHR8IE9taXQ8QXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMsICdmb3JtYXQnPlxuXHRcdFx0XHR8IE9taXQ8QXBpUXVlcnlUb2tlbnNQYXJhbXMsICdmb3JtYXQnPixcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5cdFx0XHRjYWxsYmFjazogKGRhdGE6IGFueSkgPT4gdm9pZFxuXHRcdCkge1xuXHRcdFx0Y29uc3QgcGFyYW1zID0gX3BhcmFtcyBhcyB0eXBlb2YgX3BhcmFtcyAmIHtcblx0XHRcdFx0Zm9ybWF0OiAnanNvbic7XG5cdFx0XHRcdHRpdGxlPzogc3RyaW5nO1xuXHRcdFx0fTtcblx0XHRcdHBhcmFtc1snZm9ybWF0J10gPSAnanNvbic7XG5cdFx0XHRwYXJhbXNbJ2Zvcm1hdHZlcnNpb24nXSA9ICcyJztcblx0XHRcdGxldCBpOiBudW1iZXIgPSAwO1xuXHRcdFx0Y29uc3QgZG9DYWxsID0gKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRjb25zdCBoYW5kbGVFcnJvciA9IChlcnJvcjogc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0bXcubG9nLmVycm9yKCdbQ2F0LWEtbG90XSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0XHRcdFx0XHRpZiAoaSA8IDQpIHtcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoZG9DYWxsLCAzMDApO1xuXHRcdFx0XHRcdFx0aSsrO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAocGFyYW1zWyd0aXRsZSddKSB7XG5cdFx0XHRcdFx0XHRDQUwuY29ubmVjdGlvbkVycm9yW0NBTC5jb25uZWN0aW9uRXJyb3IubGVuZ3RoXSA9IHBhcmFtc1sndGl0bGUnXTtcblx0XHRcdFx0XHRcdHRoaXMudXBkYXRlQ291bnRlcigpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdFx0aWYgKHBhcmFtc1snYWN0aW9uJ10gPT09ICdxdWVyeScpIHtcblx0XHRcdFx0XHRDQUwuYXBpLmdldChwYXJhbXMpLnRoZW4oY2FsbGJhY2spLmNhdGNoKGhhbmRsZUVycm9yKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRDQUwuYXBpLnBvc3QocGFyYW1zKS50aGVuKGNhbGxiYWNrKS5jYXRjaChoYW5kbGVFcnJvcik7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRkb0NhbGwoKTtcblx0XHR9XG5cblx0XHRwcml2YXRlIHN0YXRpYyBtYXJrQXNEb25lKFxuXHRcdFx0JG1hcmtlZExhYmVsOiBKUXVlcnksXG5cdFx0XHR0YXJnZXRDYXRlZ29yeTogc3RyaW5nLFxuXHRcdFx0bW9kZTogJ2FkZCcgfCAnY29weScgfCAnbW92ZScgfCAncmVtb3ZlJ1xuXHRcdCk6IHZvaWQge1xuXHRcdFx0JG1hcmtlZExhYmVsLmFkZENsYXNzKENMQVNTX05BTUVfTEFCRUxfRE9ORSk7XG5cblx0XHRcdHN3aXRjaCAobW9kZSkge1xuXHRcdFx0XHRjYXNlICdhZGQnOlxuXHRcdFx0XHRcdCRtYXJrZWRMYWJlbC5hcHBlbmQoXG5cdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ2FkZGVkLWNhdCcsIHRhcmdldENhdGVnb3J5KX1cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2NvcHknOlxuXHRcdFx0XHRcdCRtYXJrZWRMYWJlbC5hcHBlbmQoXG5cdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ2NvcGllZC1jYXQnLCB0YXJnZXRDYXRlZ29yeSl9XG5cdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdtb3ZlJzpcblx0XHRcdFx0XHQkbWFya2VkTGFiZWwuYXBwZW5kKFxuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHRcdHtDQUwubXNnKCdtb3ZlZC1jYXQnLCB0YXJnZXRDYXRlZ29yeSl9XG5cdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdyZW1vdmUnOlxuXHRcdFx0XHRcdCRtYXJrZWRMYWJlbC5hcHBlbmQoXG5cdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ3JlbW92ZWQtY2F0JywgdGFyZ2V0Q2F0ZWdvcnkpfVxuXHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0cHJpdmF0ZSBzdGF0aWMgZG9DbGVhbnVwKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XG5cdFx0XHRyZXR1cm4gQ0FMLnNldHRpbmdzLmRvY2xlYW51cCA/IHRleHQucmVwbGFjZSgve3tcXHMqW0NjXWhlY2sgY2F0ZWdvcmllc1xccyooXFx8Py4qPyl9fS8sICcnKSA6IHRleHQ7XG5cdFx0fSAvLyBSZW1vdmUge3tVbmNhdGVnb3JpemVkfX0gKGFsc28gd2l0aCBjb21tZW50KS4gTm8gbmVlZCB0byByZXBsYWNlIGl0IHdpdGggYW55dGhpbmdcblx0XHRwcml2YXRlIHN0YXRpYyByZW1vdmVVbmNhdCh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdFx0cmV0dXJuIHRleHQucmVwbGFjZSgvXFx7XFx7XFxzKltVdV1uY2F0ZWdvcml6ZWRcXHMqKFxcfD8uKj8pXFx9XFx9LywgJycpO1xuXHRcdH1cblx0XHRwcml2YXRlIGRpc3BsYXlSZXN1bHQoKTogdm9pZCB7XG5cdFx0XHR0aGlzLiRib2R5LmNzcyh7XG5cdFx0XHRcdGN1cnNvcjogJycsXG5cdFx0XHRcdG92ZXJmbG93OiAnJyxcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy4kYm9keS5maW5kKGAuJHtDTEFTU19OQU1FX0ZFRURCQUNLfWApLmFkZENsYXNzKENMQVNTX05BTUVfRkVFREJBQ0tfRE9ORSk7XG5cblx0XHRcdGNvbnN0ICRwYXJlbnQ6IEpRdWVyeSA9IENBTC4kY291bnRlci5wYXJlbnQoKTtcblx0XHRcdCRwYXJlbnQuaHRtbCg8aDM+e0NBTC5tc2coJ2RvbmUnKX08L2gzPik7XG5cdFx0XHQkcGFyZW50LmFwcGVuZChcblx0XHRcdFx0PD5cblx0XHRcdFx0XHR7Q0FMLm1zZygnYWxsLWRvbmUnKX1cblx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0PC8+XG5cdFx0XHQpO1xuXG5cdFx0XHQkcGFyZW50LmFwcGVuZChcblx0XHRcdFx0PGFcblx0XHRcdFx0XHRvbkNsaWNrPXsoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRDQUwuJHByb2dyZXNzRGlhbG9nLnJlbW92ZSgpO1xuXHRcdFx0XHRcdFx0dGhpcy50b2dnbGVBbGwoZmFsc2UpO1xuXHRcdFx0XHRcdH19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7Q0FMLm1zZygncmV0dXJuLXRvLXBhZ2UnKX1cblx0XHRcdFx0PC9hPlxuXHRcdFx0KTtcblxuXHRcdFx0aWYgKENBTC5hbHJlYWR5VGhlcmUubGVuZ3RoKSB7XG5cdFx0XHRcdCRwYXJlbnQuYXBwZW5kKFxuXHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHQ8aDU+e0NBTC5tc2coJ3NraXBwZWQtYWxyZWFkeScsIENBTC5hbHJlYWR5VGhlcmUubGVuZ3RoLnRvU3RyaW5nKCkpfTwvaDU+XG5cdFx0XHRcdFx0XHR7Q0FMLmFscmVhZHlUaGVyZS5yZWR1Y2U8KHN0cmluZyB8IFJlYWN0LlJlYWN0RWxlbWVudClbXT4oXG5cdFx0XHRcdFx0XHRcdChwcmUsIGN1ciwgaW5kZXgpID0+XG5cdFx0XHRcdFx0XHRcdFx0aW5kZXggPCBDQUwuYWxyZWFkeVRoZXJlLmxlbmd0aCAtIDEgPyBbLi4ucHJlLCBjdXIsIDxiciBrZXk9e2luZGV4fSAvPl0gOiBbLi4ucHJlLCBjdXJdLFxuXHRcdFx0XHRcdFx0XHRbXVxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdGlmIChDQUwubm90Rm91bmQubGVuZ3RoKSB7XG5cdFx0XHRcdCRwYXJlbnQuYXBwZW5kKFxuXHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHQ8aDU+e0NBTC5tc2coJ3NraXBwZWQtbm90LWZvdW5kJywgQ0FMLm5vdEZvdW5kLmxlbmd0aC50b1N0cmluZygpKX08L2g1PlxuXHRcdFx0XHRcdFx0e0NBTC5ub3RGb3VuZC5yZWR1Y2U8KHN0cmluZyB8IFJlYWN0LlJlYWN0RWxlbWVudClbXT4oXG5cdFx0XHRcdFx0XHRcdChwcmUsIGN1ciwgaW5kZXgpID0+XG5cdFx0XHRcdFx0XHRcdFx0aW5kZXggPCBDQUwubm90Rm91bmQubGVuZ3RoIC0gMSA/IFsuLi5wcmUsIGN1ciwgPGJyIGtleT17aW5kZXh9IC8+XSA6IFsuLi5wcmUsIGN1cl0sXG5cdFx0XHRcdFx0XHRcdFtdXG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKENBTC5jb25uZWN0aW9uRXJyb3IubGVuZ3RoKSB7XG5cdFx0XHRcdCRwYXJlbnQuYXBwZW5kKFxuXHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHQ8aDU+e0NBTC5tc2coJ3NraXBwZWQtc2VydmVyJywgQ0FMLmNvbm5lY3Rpb25FcnJvci5sZW5ndGgudG9TdHJpbmcoKSl9PC9oNT5cblx0XHRcdFx0XHRcdHtDQUwuY29ubmVjdGlvbkVycm9yLnJlZHVjZTwoc3RyaW5nIHwgUmVhY3QuUmVhY3RFbGVtZW50KVtdPihcblx0XHRcdFx0XHRcdFx0KHByZSwgY3VyLCBpbmRleCkgPT5cblx0XHRcdFx0XHRcdFx0XHRpbmRleCA8IENBTC5jb25uZWN0aW9uRXJyb3IubGVuZ3RoIC0gMVxuXHRcdFx0XHRcdFx0XHRcdFx0PyBbLi4ucHJlLCBjdXIsIDxiciBrZXk9e2luZGV4fSAvPl1cblx0XHRcdFx0XHRcdFx0XHRcdDogWy4uLnByZSwgY3VyXSxcblx0XHRcdFx0XHRcdFx0W11cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHByaXZhdGUgdXBkYXRlQ291bnRlcigpOiB2b2lkIHtcblx0XHRcdENBTC5jb3VudGVyQ3VycmVudCsrO1xuXHRcdFx0aWYgKENBTC5jb3VudGVyQ3VycmVudCA+IENBTC5jb3VudGVyTmVlZGVkKSB7XG5cdFx0XHRcdHRoaXMuZGlzcGxheVJlc3VsdCgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Q0FMLiRjb3VudGVyLnRleHQoQ0FMLmNvdW50ZXJDdXJyZW50KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cHJpdmF0ZSBhc3luYyBlZGl0Q2F0ZWdvcmllcyhcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5cdFx0XHRyZXN1bHQ6IFJlY29yZDxzdHJpbmcsIGFueT4sXG5cdFx0XHRtYXJrZWRMYWJlbDogUmV0dXJuVHlwZTx0eXBlb2YgdGhpcy5nZXRNYXJrZWRMYWJlbHM+WzBdLFxuXHRcdFx0dGFyZ2V0Q2F0ZWdvcnk6IHN0cmluZyxcblx0XHRcdG1vZGU6ICdhZGQnIHwgJ2NvcHknIHwgJ21vdmUnIHwgJ3JlbW92ZSdcblx0XHQpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRcdGNvbnN0IFttYXJrZWRMYWJlbFRpdGxlLCAkbWFya2VkTGFiZWxdID0gbWFya2VkTGFiZWw7XG5cblx0XHRcdGlmICghcmVzdWx0Py5bJ3F1ZXJ5J10pIHtcblx0XHRcdFx0Q0FMLmNvbm5lY3Rpb25FcnJvcltDQUwuY29ubmVjdGlvbkVycm9yLmxlbmd0aF0gPSBtYXJrZWRMYWJlbFRpdGxlO1xuXHRcdFx0XHR0aGlzLnVwZGF0ZUNvdW50ZXIoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgb3JpZ2luVGV4dDogc3RyaW5nID0gJyc7XG5cdFx0XHRsZXQgc3RhcnR0aW1lc3RhbXA6IG51bWJlciA9IDA7XG5cdFx0XHRsZXQgdGltZXN0YW1wOiBudW1iZXIgPSAwO1xuXHRcdFx0Q0FMLmVkaXRUb2tlbiA9IHJlc3VsdFsncXVlcnknXS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdFx0Y29uc3Qge3BhZ2VzfSA9IHJlc3VsdFsncXVlcnknXTtcblxuXHRcdFx0Y29uc3QgW3BhZ2VdID0gcGFnZXM7XG5cdFx0XHRvcmlnaW5UZXh0ID0gcGFnZT8ucmV2aXNpb25zPy5bMF0uc2xvdHMubWFpbi5jb250ZW50O1xuXHRcdFx0KHtzdGFydHRpbWVzdGFtcH0gPSBwYWdlKTtcblx0XHRcdFt7dGltZXN0YW1wfV0gPSBwYWdlLnJldmlzaW9ucztcblxuXHRcdFx0Y29uc3Qgc291cmNlY2F0OiBzdHJpbmcgPSBDQUwuQ1VSUkVOVF9DQVRFR1JPWTtcblx0XHRcdC8vIENoZWNrIGlmIHRoYXQgZmlsZSBpcyBhbHJlYWR5IGluIHRoYXQgY2F0ZWdvcnlcblx0XHRcdGNvbnN0IHRhcmdlUmVnRXhwID0gYXdhaXQgQ0FMLnJlZ2V4QnVpbGRlcih0YXJnZXRDYXRlZ29yeSk7XG5cdFx0XHRpZiAobW9kZSAhPT0gJ3JlbW92ZScgJiYgdGFyZ2VSZWdFeHAudGVzdChvcmlnaW5UZXh0KSAmJiBtb2RlICE9PSAnbW92ZScpIHtcblx0XHRcdFx0Q0FMLmFscmVhZHlUaGVyZVtDQUwuYWxyZWFkeVRoZXJlLmxlbmd0aF0gPSBtYXJrZWRMYWJlbFRpdGxlO1xuXHRcdFx0XHR0aGlzLnVwZGF0ZUNvdW50ZXIoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBGaXggdGV4dFxuXHRcdFx0bGV0IHRleHQ6IHN0cmluZyA9IG9yaWdpblRleHQ7XG5cdFx0XHRsZXQgc3VtbWFyeTogc3RyaW5nO1xuXHRcdFx0Y29uc3Qgc291cmNlQ2F0UmVnRXhwID0gYXdhaXQgQ0FMLnJlZ2V4QnVpbGRlcihzb3VyY2VjYXQpO1xuXHRcdFx0c3dpdGNoIChtb2RlKSB7XG5cdFx0XHRcdGNhc2UgJ2FkZCc6XG5cdFx0XHRcdFx0dGV4dCArPSBgXFxuW1ske0NBTC5sb2NhbENhdE5hbWV9OiR7dGFyZ2V0Q2F0ZWdvcnl9XV1cXG5gO1xuXHRcdFx0XHRcdHN1bW1hcnkgPSBDQUwubXNnKCdzdW1tYXJ5LWFkZCcpLnJlcGxhY2UoJyQxJywgdGFyZ2V0Q2F0ZWdvcnkpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdjb3B5Jzpcblx0XHRcdFx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKFxuXHRcdFx0XHRcdFx0c291cmNlQ2F0UmVnRXhwLFxuXHRcdFx0XHRcdFx0YFtbJHtDQUwubG9jYWxDYXROYW1lfToke3NvdXJjZWNhdH0kMV1dXFxuW1ske0NBTC5sb2NhbENhdE5hbWV9OiR7dGFyZ2V0Q2F0ZWdvcnl9JDFdXWBcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdHN1bW1hcnkgPSBDQUwubXNnKCdzdW1tYXJ5LWNvcHknKS5yZXBsYWNlKCckMScsIHNvdXJjZWNhdCkucmVwbGFjZSgnJDInLCB0YXJnZXRDYXRlZ29yeSk7XG5cdFx0XHRcdFx0Ly8gSWYgY2F0ZWdvcnkgaXMgYWRkZWQgdGhyb3VnaCB0ZW1wbGF0ZTpcblx0XHRcdFx0XHRpZiAob3JpZ2luVGV4dCA9PT0gdGV4dCkge1xuXHRcdFx0XHRcdFx0dGV4dCArPSBgXFxuW1ske0NBTC5sb2NhbENhdE5hbWV9OiR7dGFyZ2V0Q2F0ZWdvcnl9XV1gO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnbW92ZSc6XG5cdFx0XHRcdFx0dGV4dCA9IHRleHQucmVwbGFjZShzb3VyY2VDYXRSZWdFeHAsIGBbWyR7Q0FMLmxvY2FsQ2F0TmFtZX06JHt0YXJnZXRDYXRlZ29yeX0kMV1dYCk7XG5cdFx0XHRcdFx0c3VtbWFyeSA9IENBTC5tc2coJ3N1bW1hcnktbW92ZScpLnJlcGxhY2UoJyQxJywgc291cmNlY2F0KS5yZXBsYWNlKCckMicsIHRhcmdldENhdGVnb3J5KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAncmVtb3ZlJzpcblx0XHRcdFx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKHNvdXJjZUNhdFJlZ0V4cCwgJycpO1xuXHRcdFx0XHRcdHN1bW1hcnkgPSBDQUwubXNnKCdzdW1tYXJ5LXJlbW92ZScpLnJlcGxhY2UoJyQxJywgc291cmNlY2F0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRleHQgPT09IG9yaWdpblRleHQpIHtcblx0XHRcdFx0Q0FMLm5vdEZvdW5kW0NBTC5ub3RGb3VuZC5sZW5ndGhdID0gbWFya2VkTGFiZWxUaXRsZTtcblx0XHRcdFx0dGhpcy51cGRhdGVDb3VudGVyKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUmVtb3ZlIHVuY2F0IGFmdGVyIHdlIGNoZWNrZWQgd2hldGhlciB3ZSBjaGFuZ2VkIHRoZSB0ZXh0IHN1Y2Nlc3NmdWxseS5cblx0XHRcdC8vIE90aGVyd2lzZSB3ZSBtaWdodCBmYWlsIHRvIGRvIHRoZSBjaGFuZ2VzLCBidXQgc3RpbGwgcmVwbGFjZSB7e3VuY2F0fX1cblx0XHRcdGlmIChtb2RlICE9PSAncmVtb3ZlJykge1xuXHRcdFx0XHR0ZXh0ID0gQ0FMLmRvQ2xlYW51cChDQUwucmVtb3ZlVW5jYXQodGV4dCkpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmRvQVBJQ2FsbChcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdFx0XHRcdHRva2VuOiBDQUwuZWRpdFRva2VuLFxuXHRcdFx0XHRcdHRhZ3M6IENBTC5BUElfVEFHLFxuXHRcdFx0XHRcdHRpdGxlOiBtYXJrZWRMYWJlbFRpdGxlLFxuXHRcdFx0XHRcdGFzc2VydDogJ3VzZXInLFxuXHRcdFx0XHRcdGJvdDogdHJ1ZSxcblx0XHRcdFx0XHRiYXNldGltZXN0YW1wOiB0aW1lc3RhbXAgYXMgdW5rbm93biBhcyBzdHJpbmcsXG5cdFx0XHRcdFx0d2F0Y2hsaXN0OiBDQUwuc2V0dGluZ3Mud2F0Y2hsaXN0IGFzIG5ldmVyLFxuXHRcdFx0XHRcdHRleHQsXG5cdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHRzdGFydHRpbWVzdGFtcDogc3RhcnR0aW1lc3RhbXAgYXMgdW5rbm93biBhcyBzdHJpbmcsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCgpOiB2b2lkID0+IHtcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZUNvdW50ZXIoKTtcblx0XHRcdFx0fVxuXHRcdFx0KTtcblxuXHRcdFx0Q0FMLm1hcmtBc0RvbmUoJG1hcmtlZExhYmVsLCB0YXJnZXRDYXRlZ29yeSwgbW9kZSk7XG5cdFx0fVxuXHRcdHByaXZhdGUgZ2V0Q29udGVudChcblx0XHRcdG1hcmtlZExhYmVsOiBSZXR1cm5UeXBlPHR5cGVvZiB0aGlzLmdldE1hcmtlZExhYmVscz5bMF0sXG5cdFx0XHR0YXJnZXRDYXRlZ29yeTogc3RyaW5nLFxuXHRcdFx0bW9kZTogJ2FkZCcgfCAnY29weScgfCAnbW92ZSdcblx0XHQpOiB2b2lkIHtcblx0XHRcdHRoaXMuZG9BUElDYWxsKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0XHRtZXRhOiAndG9rZW5zJyxcblx0XHRcdFx0XHR0aXRsZXM6IG1hcmtlZExhYmVsWzBdLFxuXHRcdFx0XHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdFx0XHRcdHJ2cHJvcDogWydjb250ZW50JywgJ3RpbWVzdGFtcCddLFxuXHRcdFx0XHRcdHJ2c2xvdHM6ICdtYWluJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0KHJlc3VsdCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFyZ3VtZW50XG5cdFx0XHRcdFx0dm9pZCB0aGlzLmVkaXRDYXRlZ29yaWVzKHJlc3VsdCwgbWFya2VkTGFiZWwsIHRhcmdldENhdGVnb3J5LCBtb2RlKTtcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBzdGF0aWMgZ2V0VGl0bGVGcm9tTGluayhocmVmOiBzdHJpbmcgfCB1bmRlZmluZWQpOiBzdHJpbmcge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cmV0dXJuIChkZWNvZGVVUklDb21wb25lbnQoaHJlZiA/PyAnJykubWF0Y2goL3dpa2lcXC8oLis/KSg/OiMuKyk/JC8pPy5bMV0gPz8gJycpLnJlcGxhY2UoL18vZywgJyAnKTtcblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRyZXR1cm4gJyc7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHByaXZhdGUgZ2V0TWFya2VkTGFiZWxzKCk6IFtzdHJpbmcsIEpRdWVyeV1bXSB7XG5cdFx0XHRjb25zdCBtYXJrZWRMYWJlbHM6IFJldHVyblR5cGU8dHlwZW9mIHRoaXMuZ2V0TWFya2VkTGFiZWxzPiA9IFtdO1xuXHRcdFx0Q0FMLiRzZWxlY3RlZExhYmVscyA9IENBTC4kbGFiZWxzLmZpbHRlcihgLiR7Q0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRH1gKTtcblx0XHRcdENBTC4kc2VsZWN0ZWRMYWJlbHMuZWFjaCgoX2luZGV4LCBsYWJlbCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRjb25zdCAkbGFiZWw6IEpRdWVyeSA9ICQobGFiZWwpO1xuXHRcdFx0XHRjb25zdCAkbGFiZWxMaW5rOiBKUXVlcnkgPSAkbGFiZWwuZmluZCgnYTpub3QoLkNhdGVnb3J5VHJlZVRvZ2dsZSlbdGl0bGVdJyk7XG5cdFx0XHRcdGNvbnN0IHRpdGxlOiBzdHJpbmcgPVxuXHRcdFx0XHRcdCRsYWJlbExpbmsuYXR0cigndGl0bGUnKT8udHJpbSgpIHx8XG5cdFx0XHRcdFx0Q0FMLmdldFRpdGxlRnJvbUxpbmsoJGxhYmVsTGluay5hdHRyKCdocmVmJykpIHx8XG5cdFx0XHRcdFx0Q0FMLmdldFRpdGxlRnJvbUxpbmsoJGxhYmVsLmZpbmQoJ2E6bm90KC5DYXRlZ29yeVRyZWVUb2dnbGUpJykuYXR0cignaHJlZicpKTtcblx0XHRcdFx0bWFya2VkTGFiZWxzW21hcmtlZExhYmVscy5sZW5ndGhdID0gW3RpdGxlLCAkbGFiZWxdO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gbWFya2VkTGFiZWxzO1xuXHRcdH1cblx0XHRwcml2YXRlIHNob3dQcm9ncmVzcygpOiB2b2lkIHtcblx0XHRcdHRoaXMuJGJvZHkuY3NzKHtcblx0XHRcdFx0Y3Vyc29yOiAnd2FpdCcsXG5cdFx0XHRcdG92ZXJmbG93OiAnaGlkZGVuJyxcblx0XHRcdH0pO1xuXHRcdFx0Q0FMLiRwcm9ncmVzc0RpYWxvZyA9ICQoXG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0e0NBTC5tc2coJ2VkaXRpbmcnKX1cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e0NMQVNTX05BTUVfQ1VSUkVOVF9DT1VOVEVSfT57Q0FMLmNvdW50ZXJDdXJyZW50fTwvc3Bhbj5cblx0XHRcdFx0XHR7W0NBTC5tc2coJ29mJyksIENBTC5jb3VudGVyTmVlZGVkXX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpLmRpYWxvZyh7XG5cdFx0XHRcdGRpYWxvZ0NsYXNzOiBDTEFTU19OQU1FX0ZFRURCQUNLLFxuXHRcdFx0XHRtaW5IZWlnaHQ6IDkwLFxuXHRcdFx0XHRoZWlnaHQ6IDkwLFxuXHRcdFx0XHR3aWR0aDogNDUwLFxuXHRcdFx0XHRtb2RhbDogdHJ1ZSxcblx0XHRcdFx0Y2xvc2VPbkVzY2FwZTogZmFsc2UsXG5cdFx0XHRcdGRyYWdnYWJsZTogZmFsc2UsXG5cdFx0XHRcdHJlc2l6YWJsZTogZmFsc2UsXG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuJGJvZHkuZmluZChgLiR7Q0xBU1NfTkFNRV9GRUVEQkFDS30gLnVpLWRpYWxvZy10aXRsZWJhcmApLmhpZGUoKTtcblx0XHRcdHRoaXMuJGJvZHkuZmluZChgLiR7Q0xBU1NfTkFNRV9GRUVEQkFDS30gLnVpLWRpYWxvZy1jb250ZW50YCkuaGVpZ2h0KCdhdXRvJyk7XG5cdFx0XHRDQUwuJGNvdW50ZXIgPSB0aGlzLiRib2R5LmZpbmQoYC4ke0NMQVNTX05BTUVfQ1VSUkVOVF9DT1VOVEVSfWApO1xuXHRcdH1cblx0XHRwcml2YXRlIGRvU29tZXRoaW5nKHRhcmdldENhdGVnb3J5OiBzdHJpbmcsIG1vZGU6ICdhZGQnIHwgJ2NvcHknIHwgJ21vdmUnKTogdm9pZCB7XG5cdFx0XHRjb25zdCBtYXJrZWRMYWJlbHM6IFJldHVyblR5cGU8dHlwZW9mIHRoaXMuZ2V0TWFya2VkTGFiZWxzPiA9IHRoaXMuZ2V0TWFya2VkTGFiZWxzKCk7XG5cdFx0XHRpZiAoIW1hcmtlZExhYmVscy5sZW5ndGgpIHtcblx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoQ0FMLm1zZygnbm9uZS1zZWxlY3RlZCcpLCB7XG5cdFx0XHRcdFx0dGFnOiAnY2F0QUxvdCcsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRDQUwuYWxyZWFkeVRoZXJlID0gW107XG5cdFx0XHRDQUwuY29ubmVjdGlvbkVycm9yID0gW107XG5cdFx0XHRDQUwubm90Rm91bmQgPSBbXTtcblx0XHRcdENBTC5jb3VudGVyQ3VycmVudCA9IDE7XG5cdFx0XHRDQUwuY291bnRlck5lZWRlZCA9IG1hcmtlZExhYmVscy5sZW5ndGg7XG5cdFx0XHR0aGlzLnNob3dQcm9ncmVzcygpO1xuXHRcdFx0Zm9yIChjb25zdCBtYXJrZWRMYWJlbCBvZiBtYXJrZWRMYWJlbHMpIHtcblx0XHRcdFx0dGhpcy5nZXRDb250ZW50KG1hcmtlZExhYmVsLCB0YXJnZXRDYXRlZ29yeSwgbW9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHByaXZhdGUgYWRkSGVyZSh0YXJnZXRDYXRlZ29yeTogc3RyaW5nKTogdm9pZCB7XG5cdFx0XHR0aGlzLmRvU29tZXRoaW5nKHRhcmdldENhdGVnb3J5LCAnYWRkJyk7XG5cdFx0fVxuXHRcdHByaXZhdGUgY29weUhlcmUodGFyZ2V0Q2F0ZWdvcnk6IHN0cmluZyk6IHZvaWQge1xuXHRcdFx0dGhpcy5kb1NvbWV0aGluZyh0YXJnZXRDYXRlZ29yeSwgJ2NvcHknKTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBtb3ZlSGVyZSh0YXJnZXRDYXRlZ29yeTogc3RyaW5nKTogdm9pZCB7XG5cdFx0XHR0aGlzLmRvU29tZXRoaW5nKHRhcmdldENhdGVnb3J5LCAnbW92ZScpO1xuXHRcdH1cblx0XHRwcml2YXRlIGNyZWF0ZUNhdExpbmtzKHN5bWJvbDogc3RyaW5nLCBjYXRlZ29yaWVzOiBzdHJpbmdbXSk6IHZvaWQge1xuXHRcdFx0Y2F0ZWdvcmllcy5zb3J0KCk7XG5cdFx0XHRmb3IgKGNvbnN0IGNhdGVnb3J5IG9mIGNhdGVnb3JpZXMpIHtcblx0XHRcdFx0Y29uc3QgJHRyID0gJChcblx0XHRcdFx0XHQ8dHIgZGF0YXNldD17e2NhdGVnb3J5fX0+XG5cdFx0XHRcdFx0XHQ8dGQ+e3N5bWJvbH08L3RkPlxuXHRcdFx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgJGVsZW1lbnQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy51cGRhdGVDYXRzKCRlbGVtZW50LmNsb3Nlc3QoJ3RyJykuZGF0YSgnY2F0ZWdvcnknKSBhcyBzdHJpbmcpO1xuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHR7Y2F0ZWdvcnl9XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0KTtcblx0XHRcdFx0Ly8gQ2FuJ3QgbW92ZSB0byBzb3VyY2UgY2F0ZWdvcnlcblx0XHRcdFx0aWYgKGNhdGVnb3J5ICE9PSBDQUwuQ1VSUkVOVF9DQVRFR1JPWSAmJiBDQUwuaXNTZWFyY2hNb2RlKSB7XG5cdFx0XHRcdFx0JHRyLmFwcGVuZChcblx0XHRcdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9BQ1RJT059XG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCAkZWxlbWVudCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmFkZEhlcmUoJGVsZW1lbnQuY2xvc2VzdCgndHInKS5kYXRhKCdjYXRlZ29yeScpIGFzIHN0cmluZyk7XG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHtDQUwubXNnKCdhZGQnKX1cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGNhdGVnb3J5ICE9PSBDQUwuQ1VSUkVOVF9DQVRFR1JPWSAmJiAhQ0FMLmlzU2VhcmNoTW9kZSkge1xuXHRcdFx0XHRcdCR0ci5hcHBlbmQoXG5cdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUX0FDVElPTn1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCAkZWxlbWVudCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuY29weUhlcmUoJGVsZW1lbnQuY2xvc2VzdCgndHInKS5kYXRhKCdjYXRlZ29yeScpIGFzIHN0cmluZyk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdHtDQUwubXNnKCdjb3B5Jyl9XG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUX0FDVElPTn1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCAkZWxlbWVudCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMubW92ZUhlcmUoJGVsZW1lbnQuY2xvc2VzdCgndHInKS5kYXRhKCdjYXRlZ29yeScpIGFzIHN0cmluZyk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdHtDQUwubXNnKCdtb3ZlJyl9XG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLiRyZXN1bHRMaXN0LmZpbmQoJ3RhYmxlJykuYXBwZW5kKCR0cik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHByaXZhdGUgc2hvd0NhdGVnb3J5TGlzdCgpOiB2b2lkIHtcblx0XHRcdHRoaXMuJGJvZHkuY3NzKCdjdXJzb3InLCAnJyk7XG5cdFx0XHRjb25zdCBjdXJyZW50Q2F0ZWdvcmllczogc3RyaW5nW10gPSBbQ0FMLmN1cnJlbnRDYXRlZ29yeV07XG5cdFx0XHR0aGlzLiRyZXN1bHRMaXN0LmVtcHR5KCk7XG5cdFx0XHR0aGlzLiRyZXN1bHRMaXN0LmFwcGVuZCg8dGFibGUgLz4pO1xuXHRcdFx0dGhpcy5jcmVhdGVDYXRMaW5rcygn4oaRJywgQ0FMLnBhcmVudENhdHMpO1xuXHRcdFx0dGhpcy5jcmVhdGVDYXRMaW5rcygn4oaSJywgY3VycmVudENhdGVnb3JpZXMpO1xuXHRcdFx0dGhpcy5jcmVhdGVDYXRMaW5rcygn4oaTJywgQ0FMLnN1YkNhdHMpO1xuXHRcdFx0Ly8gUmVzZXQgd2lkdGhcblx0XHRcdHRoaXMuJGNvbnRhaW5lci53aWR0aCgnJyk7XG5cdFx0XHR0aGlzLiRjb250YWluZXIuaGVpZ2h0KCcnKTtcblx0XHRcdHRoaXMuJGNvbnRhaW5lci53aWR0aChNYXRoLm1pbigodGhpcy4kY29udGFpbmVyLndpZHRoKCkgPz8gMCkgKiAxLjEgKyAxNSwgKCQod2luZG93KS53aWR0aCgpID8/IDApIC0gMTApKTtcblx0XHRcdHRoaXMuJHJlc3VsdExpc3QuY3NzKHtcblx0XHRcdFx0J21heC1oZWlnaHQnOiBgJHtDQUwuZGlhbG9nSGVpZ2h0fXB4YCxcblx0XHRcdFx0aGVpZ2h0OiAnJyxcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRwcml2YXRlIGdldFBhcmVudENhdHMoKTogdm9pZCB7XG5cdFx0XHR0aGlzLmRvQVBJQ2FsbChcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0XHR0aXRsZXM6IGBDYXRlZ29yeToke0NBTC5jdXJyZW50Q2F0ZWdvcnl9YCxcblx0XHRcdFx0XHRwcm9wOiAnY2F0ZWdvcmllcycsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdChyZXN1bHQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRpZiAoIXJlc3VsdCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRDQUwucGFyZW50Q2F0cyA9IFtdO1xuXHRcdFx0XHRcdGNvbnN0IHtwYWdlc30gPSByZXN1bHQucXVlcnk7XG5cdFx0XHRcdFx0aWYgKHBhZ2VzWzBdPy5taXNzaW5nKSB7XG5cdFx0XHRcdFx0XHR0aGlzLiRib2R5LmNzcygnY3Vyc29yJywgJycpO1xuXHRcdFx0XHRcdFx0dGhpcy4kcmVzdWx0TGlzdC5odG1sKFxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9OT19GT1VORH0+XG5cdFx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ2NhdC1ub3QtZm91bmQnKX1cblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHRoaXMuY3JlYXRlQ2F0TGlua3MoJ+KGkicsIFtDQUwuY3VycmVudENhdGVnb3J5XSk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGxldCBjYXRlZ29yaWVzOiB7dGl0bGU6IHN0cmluZ31bXSA9IFtdO1xuXHRcdFx0XHRcdGlmIChwYWdlc1swXT8uY2F0ZWdvcmllcykge1xuXHRcdFx0XHRcdFx0W3tjYXRlZ29yaWVzfV0gPSBwYWdlcztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBjYXQgb2YgY2F0ZWdvcmllcykge1xuXHRcdFx0XHRcdFx0Q0FMLnBhcmVudENhdHNbQ0FMLnBhcmVudENhdHMubGVuZ3RoXSA9IGNhdC50aXRsZS5yZXBsYWNlKC9eW146XSs6LywgJycpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRDQUwuY291bnRlckNhdCsrO1xuXHRcdFx0XHRcdGlmIChDQUwuY291bnRlckNhdCA9PT0gMikge1xuXHRcdFx0XHRcdFx0dGhpcy5zaG93Q2F0ZWdvcnlMaXN0KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH1cblx0XHRwcml2YXRlIGdldFN1YkNhdHMoKTogdm9pZCB7XG5cdFx0XHR0aGlzLmRvQVBJQ2FsbChcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0XHRsaXN0OiAnY2F0ZWdvcnltZW1iZXJzJyxcblx0XHRcdFx0XHRjbXR5cGU6ICdzdWJjYXQnLFxuXHRcdFx0XHRcdGNtbGltaXQ6IENBTC5zZXR0aW5ncy5zdWJjYXRjb3VudCBhcyBuZXZlcixcblx0XHRcdFx0XHRjbXRpdGxlOiBgQ2F0ZWdvcnk6JHtDQUwuY3VycmVudENhdGVnb3J5fWAsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdChyZXN1bHQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRjb25zdCBjYXRzOiB7dGl0bGU6IHN0cmluZ31bXSA9IHJlc3VsdD8ucXVlcnk/LmNhdGVnb3J5bWVtYmVycyB8fCBbXTtcblx0XHRcdFx0XHRDQUwuc3ViQ2F0cyA9IFtdO1xuXHRcdFx0XHRcdGZvciAoY29uc3QgY2F0IG9mIGNhdHMpIHtcblx0XHRcdFx0XHRcdENBTC5zdWJDYXRzW0NBTC5zdWJDYXRzLmxlbmd0aF0gPSBjYXQudGl0bGUucmVwbGFjZSgvXlteOl0rOi8sICcnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Q0FMLmNvdW50ZXJDYXQrKztcblx0XHRcdFx0XHRpZiAoQ0FMLmNvdW50ZXJDYXQgPT09IDIpIHtcblx0XHRcdFx0XHRcdHRoaXMuc2hvd0NhdGVnb3J5TGlzdCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBnZXRDYXRlZ29yeUxpc3QoKTogdm9pZCB7XG5cdFx0XHRDQUwuY291bnRlckNhdCA9IDA7XG5cdFx0XHR0aGlzLmdldFBhcmVudENhdHMoKTtcblx0XHRcdHRoaXMuZ2V0U3ViQ2F0cygpO1xuXHRcdH1cblx0XHRwcml2YXRlIHVwZGF0ZUNhdHMoY2F0OiBzdHJpbmcpOiB2b2lkIHtcblx0XHRcdHRoaXMuJGJvZHkuY3NzKCdjdXJzb3InLCAnd2FpdCcpO1xuXHRcdFx0Q0FMLmN1cnJlbnRDYXRlZ29yeSA9IGNhdDtcblx0XHRcdHRoaXMuJHJlc3VsdExpc3QuaHRtbCg8ZGl2PntDQUwubXNnKCdsb2FkaW5nJyl9PC9kaXY+KTtcblx0XHRcdHRoaXMuZ2V0Q2F0ZWdvcnlMaXN0KCk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBmaW5kQWxsTGFiZWxzKCk6IHZvaWQge1xuXHRcdFx0Ly8gSXQncyBwb3NzaWJsZSB0byBhbGxvdyBhbnkga2luZCBvZiBwYWdlcyBhcyB3ZWxsIGJ1dCB3aGF0IGhhcHBlbnMgaWYgeW91IGNsaWNrIG9uIFwic2VsZWN0IGFsbFwiIGFuZCBkb24ndCBleHBlY3QgaXRcblx0XHRcdGlmIChDQUwuaXNTZWFyY2hNb2RlKSB7XG5cdFx0XHRcdENBTC4kbGFiZWxzID0gdGhpcy4kYm9keS5maW5kKCd0YWJsZS5zZWFyY2hSZXN1bHRJbWFnZScpLmZpbmQoJ3RyPnRkJykuZXEoMSk7XG5cdFx0XHRcdGlmIChDQUwuc2V0dGluZ3MuZWRpdHBhZ2VzKSB7XG5cdFx0XHRcdFx0Q0FMLiRsYWJlbHMgPSBDQUwuJGxhYmVscy5hZGQoJ2Rpdi5tdy1zZWFyY2gtcmVzdWx0LWhlYWRpbmcnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Q0FMLiRsYWJlbHMgPSB0aGlzLiRib2R5XG5cdFx0XHRcdFx0LmZpbmQoJ2Rpdi5nYWxsZXJ5dGV4dCcpXG5cdFx0XHRcdFx0LmFkZCh0aGlzLiRib2R5LmZpbmQoJ2RpdiNtdy1jYXRlZ29yeS1tZWRpYScpLmZpbmQoJ2xpW2NsYXNzIT1cImdhbGxlcnlib3hcIl0nKSk7XG5cdFx0XHRcdGlmIChDQUwuc2V0dGluZ3MuZWRpdHBhZ2VzKSB7XG5cdFx0XHRcdFx0Y29uc3QgJHBhZ2VzOiBKUXVlcnk8SFRNTExJRWxlbWVudD4gPSB0aGlzLiRib2R5XG5cdFx0XHRcdFx0XHQuZmluZCgnZGl2I213LXBhZ2VzLCBkaXYjbXctc3ViY2F0ZWdvcmllcycpXG5cdFx0XHRcdFx0XHQuZmluZCgnbGknKTtcblx0XHRcdFx0XHRDQUwuJGxhYmVscyA9IENBTC4kbGFiZWxzLmFkZCgkcGFnZXMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHByaXZhdGUgbWFrZUNsaWNrYWJsZSgpOiB2b2lkIHtcblx0XHRcdHRoaXMuZmluZEFsbExhYmVscygpO1xuXHRcdFx0Q0FMLiRsYWJlbHMuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9MQUJFTCkub25DYXRBTG90U2hpZnRDbGljaygoKTogdm9pZCA9PiB7XG5cdFx0XHRcdHRoaXMudXBkYXRlU2VsZWN0aW9uQ291bnRlcigpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBydW4oKTogdm9pZCB7XG5cdFx0XHRpZiAodGhpcy4kbGluay5oYXNDbGFzcyhDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTktfRU5BQkxFRCkpIHtcblx0XHRcdFx0dGhpcy5tYWtlQ2xpY2thYmxlKCk7XG5cdFx0XHRcdHRoaXMuJGRhdGFDb250YWluZXIuc2hvdygpO1xuXHRcdFx0XHR0aGlzLiRjb250YWluZXIucmVzaXphYmxlKHtcblx0XHRcdFx0XHRhbHNvUmVzaXplOiB0aGlzLiRyZXN1bHRMaXN0LFxuXHRcdFx0XHRcdGhhbmRsZXM6ICduJyxcblx0XHRcdFx0XHRyZXNpemU6IChldmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgJGN1cnJlbnRUYXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXHRcdFx0XHRcdFx0JGN1cnJlbnRUYXJnZXQuY3NzKHtcblx0XHRcdFx0XHRcdFx0bGVmdDogJycsXG5cdFx0XHRcdFx0XHRcdHRvcDogJycsXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdENBTC5kaWFsb2dIZWlnaHQgPSAkY3VycmVudFRhcmdldC5oZWlnaHQoKSA/PyBDQUwuZGlhbG9nSGVpZ2h0O1xuXHRcdFx0XHRcdFx0dGhpcy4kcmVzdWx0TGlzdC5jc3Moe1xuXHRcdFx0XHRcdFx0XHRtYXhIZWlnaHQ6ICcnLFxuXHRcdFx0XHRcdFx0XHR3aWR0aDogJycsXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGhpcy4kcmVzdWx0TGlzdC5jc3MoJ21heC1oZWlnaHQnLCAnNDUwcHgnKTtcblx0XHRcdFx0aWYgKENBTC5pc1NlYXJjaE1vZGUpIHtcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZUNhdHMoJ1BpY3R1cmVzIGFuZCBpbWFnZXMnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZUNhdHMoQ0FMLkNVUlJFTlRfQ0FURUdST1kpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLiRkYXRhQ29udGFpbmVyLmhpZGUoKTtcblx0XHRcdFx0dGhpcy4kY29udGFpbmVyLnJlc2l6YWJsZSgnZGVzdHJveScpO1xuXHRcdFx0XHR0aGlzLiRjb250YWluZXIuY3NzKCd3aWR0aCcsICcnKTtcblx0XHRcdFx0Q0FMLiRsYWJlbHMub2ZmKCdjbGljay5jYXRBTG90Jyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aWYgKFxuXHRcdCh3Z05hbWVzcGFjZU51bWJlciA9PT0gLTEgJiYgd2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUgPT09ICdTZWFyY2gnKSB8fFxuXHRcdHdnTmFtZXNwYWNlTnVtYmVyID09PSBPUFRJT05TLnRhcmdldE5hbWVzcGFjZVxuXHQpIHtcblx0XHRpZiAod2dOYW1lc3BhY2VOdW1iZXIgPT09IC0xKSB7XG5cdFx0XHRDQUwuaXNTZWFyY2hNb2RlID0gdHJ1ZTtcblx0XHR9XG5cdFx0LyohIENhdC1hLWxvdCBtZXNzYWdlcyB8IENDLUJZLVNBLTQuMCA8aHR0cHM6Ly9xd2JrLmNjL0g6Q0MtQlktU0EtNC4wPiAqL1xuXHRcdHNldE1lc3NhZ2VzKCk7XG5cdFx0dm9pZCBnZXRCb2R5KCkudGhlbigoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdFx0XHRuZXcgQ0FMKCRib2R5KS5idWlsZEVsZW1lbnRzKCk7XG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7Y2F0QUxvdH07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBDYXQtYS1sb3QvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge0NMQVNTX05BTUVfTEFCRUwsIENMQVNTX05BTUVfTEFCRUxfTEFTVF9TRUxFQ1RFRCwgQ0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRH0gZnJvbSAnLi9jb25zdGFudCc7XG5cbnR5cGUgT25DYXRBTG90U2hpZnRDbGljayA9ICh0aGlzOiBKUXVlcnksIGNhbGxiYWNrOiAoKSA9PiB1bmtub3duKSA9PiBKUXVlcnk7XG5kZWNsYXJlIGdsb2JhbCB7XG5cdGludGVyZmFjZSBKUXVlcnkge1xuXHRcdG9uQ2F0QUxvdFNoaWZ0Q2xpY2s6IE9uQ2F0QUxvdFNoaWZ0Q2xpY2s7XG5cdH1cbn1cblxuY29uc3QgZXh0ZW5kSlF1ZXJ5UHJvdG90eXBlID0gKCk6IHZvaWQgPT4ge1xuXHQkLmZuLmV4dGVuZCh7XG5cdFx0b25DYXRBTG90U2hpZnRDbGljazogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHRsZXQgcHJldkNoZWNrYm94OiBKUXVlcnkgfCB1bmRlZmluZWQ7XG5cblx0XHRcdC8vIFdoZW4gb3VyIGJveGVzIGFyZSBjbGlja2VkLi5cblx0XHRcdHRoaXMub24oJ2NsaWNrLmNhdEFMb3QnLCAoZXZlbnQ6IEpRdWVyeS5UcmlnZ2VyZWRFdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHQvLyBQcmV2ZW50IGZvbGxvd2luZyB0aGUgbGluayBhbmQgdGV4dCBzZWxlY3Rpb25cblx0XHRcdFx0aWYgKCFldmVudC5jdHJsS2V5KSB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEhpZ2hsaWdodCBsYXN0IHNlbGVjdGVkXG5cdFx0XHRcdHRoaXMucGFyZW50cygnYm9keScpXG5cdFx0XHRcdFx0LmZpbmQoYC4ke0NMQVNTX05BTUVfTEFCRUxfTEFTVF9TRUxFQ1RFRH1gKVxuXHRcdFx0XHRcdC5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX0xBQkVMX0xBU1RfU0VMRUNURUQpO1xuXG5cdFx0XHRcdGxldCAkdGhpc0NvbnRyb2wgPSAkKGV2ZW50LnRhcmdldCkgYXMgSlF1ZXJ5O1xuXHRcdFx0XHRpZiAoISR0aGlzQ29udHJvbC5oYXNDbGFzcyhDTEFTU19OQU1FX0xBQkVMKSkge1xuXHRcdFx0XHRcdCR0aGlzQ29udHJvbCA9ICR0aGlzQ29udHJvbC5wYXJlbnRzKGAuJHtDTEFTU19OQU1FX0xBQkVMfWApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0JHRoaXNDb250cm9sLmFkZENsYXNzKENMQVNTX05BTUVfTEFCRUxfTEFTVF9TRUxFQ1RFRCkudG9nZ2xlQ2xhc3MoQ0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRCk7XG5cblx0XHRcdFx0Ly8gQW5kIG9uZSBoYXMgYmVlbiBjbGlja2VkIGJlZm9yZS4uLlxuXHRcdFx0XHRpZiAocHJldkNoZWNrYm94ICYmIGV2ZW50LnNoaWZ0S2V5KSB7XG5cdFx0XHRcdFx0Y29uc3QgbWV0aG9kOiAnYWRkQ2xhc3MnIHwgJ3JlbW92ZUNsYXNzJyA9ICR0aGlzQ29udHJvbC5oYXNDbGFzcyhDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVEKVxuXHRcdFx0XHRcdFx0PyAnYWRkQ2xhc3MnXG5cdFx0XHRcdFx0XHQ6ICdyZW1vdmVDbGFzcyc7XG5cdFx0XHRcdFx0Ly8gQ2hlY2sgb3IgdW5jaGVjayB0aGlzIG9uZSBhbmQgYWxsIGluLWJldHdlZW4gY2hlY2tib3hlc1xuXHRcdFx0XHRcdHRoaXMuc2xpY2UoXG5cdFx0XHRcdFx0XHRNYXRoLm1pbih0aGlzLmluZGV4KHByZXZDaGVja2JveCksIHRoaXMuaW5kZXgoJHRoaXNDb250cm9sKSksXG5cdFx0XHRcdFx0XHRNYXRoLm1heCh0aGlzLmluZGV4KHByZXZDaGVja2JveCksIHRoaXMuaW5kZXgoJHRoaXNDb250cm9sKSkgKyAxXG5cdFx0XHRcdFx0KVttZXRob2RdKENMQVNTX05BTUVfTEFCRUxfU0VMRUNURUQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIEVpdGhlciB3YXksIHVwZGF0ZSB0aGUgcHJldkNoZWNrYm94IHZhcmlhYmxlIHRvIHRoZSBvbmUgY2xpY2tlZCBub3dcblx0XHRcdFx0cHJldkNoZWNrYm94ID0gJHRoaXNDb250cm9sO1xuXG5cdFx0XHRcdGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSBhcyBPbkNhdEFMb3RTaGlmdENsaWNrLFxuXHR9KTtcbn07XG5cbmV4cG9ydCB7ZXh0ZW5kSlF1ZXJ5UHJvdG90eXBlfTtcbiIsICJpbXBvcnQge2NhdEFMb3R9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcbmltcG9ydCB7ZXh0ZW5kSlF1ZXJ5UHJvdG90eXBlfSBmcm9tICcuL21vZHVsZXMvZXh0ZW5kSlF1ZXJ5UHJvdG90eXBlJztcblxuLyohIENhdC1hLWxvdCB8IENDLUJZLVNBLTQuMCA8aHR0cHM6Ly95c3ltaC5jYy9IOkNDLUJZLVNBLTQuMD4gKi9cbmV4dGVuZEpRdWVyeVByb3RvdHlwZSgpO1xuY2F0QUxvdCgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztB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QVk5SCx5QkFBeUI7QUFHM0YsWUFBSStXLGdCQUFnQjNSLE1BQU1rUyxVQUFVO0FBQ25DLGdCQUFNQyxTQUFxQ0gsYUFBYW5CLFNBQVNqVyx5QkFBeUIsSUFDdkYsYUFDQTtBQUVILGVBQUtzSyxNQUNKa0ssS0FBS0MsSUFBSSxLQUFLbEYsTUFBTXdILFlBQVksR0FBRyxLQUFLeEgsTUFBTTZILFlBQVksQ0FBQyxHQUMzRDVDLEtBQUtnRCxJQUFJLEtBQUtqSSxNQUFNd0gsWUFBWSxHQUFHLEtBQUt4SCxNQUFNNkgsWUFBWSxDQUFDLElBQUksQ0FDaEUsRUFBRUcsTUFBTSxFQUFFdlgseUJBQXlCO1FBQ3BDO0FBRUErVyx1QkFBZUs7QUFFZixZQUFJLE9BQU8xSixhQUFhLFlBQVk7QUFDbkNBLG1CQUFTO1FBQ1Y7TUFDRCxDQUFDO0FBRUQsYUFBTztJQUNSO0VBQ0QsQ0FBQztBQUNGOztBQ3BEQTtBQUNBa0osc0JBQXNCO0FBQ3RCeFUsUUFBUTsiLAogICJuYW1lcyI6IFsiYXBpVGFnIiwgInRhcmdldE5hbWVzcGFjZSIsICJ2ZXJzaW9uIiwgInN0b3JhZ2VLZXkiLCAiQ0xBU1NfTkFNRSIsICJDTEFTU19OQU1FX0NPTlRBSU5FUiIsICJjb25jYXQiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQSIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1QiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUX0FDVElPTiIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfTk9fRk9VTkQiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9NQVJLX0NPVU5URVIiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUFSQ0hfSU5QVVRfQ09OVEFJTkVSX0lOUFVUIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OUyIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfQUxMIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OU19OT05FIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0hFQUQiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOS19FTkFCTEVEIiwgIkNMQVNTX05BTUVfQ1VSUkVOVF9DT1VOVEVSIiwgIkNMQVNTX05BTUVfRkVFREJBQ0siLCAiQ0xBU1NfTkFNRV9GRUVEQkFDS19ET05FIiwgIkNMQVNTX05BTUVfTEFCRUwiLCAiQ0xBU1NfTkFNRV9MQUJFTF9ET05FIiwgIkNMQVNTX05BTUVfTEFCRUxfTEFTVF9TRUxFQ1RFRCIsICJDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVEIiwgIkRFRkFVTFRfU0VUVElORyIsICJkb2NsZWFudXAiLCAiZGVmYXVsdCIsICJsYWJlbF9pMThuIiwgImVkaXRwYWdlcyIsICJtaW5vciIsICJzdWJjYXRjb3VudCIsICJ3YXRjaGxpc3QiLCAic2VsZWN0X2kxOG4iLCAid2F0Y2hfbm9jaGFuZ2UiLCAid2F0Y2hfcHJlZiIsICJ3YXRjaF91bndhdGNoIiwgIndhdGNoX3dhdGNoIiwgIlZBUklBTlRTIiwgIndnVXNlckxhbmd1YWdlIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiREVGQVVMVF9NRVNTQUdFUyIsICJzZXRNZXNzYWdlcyIsICJpbmNsdWRlcyIsICJtZXNzYWdlcyIsICJzZXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgIl9fdG9FU00iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJ3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSIsICJ3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMiLCAid2dOYW1lc3BhY2VJZHMiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAid2dUaXRsZSIsICJjYXRBTG90IiwgIkNBTCIsICJpc1NlYXJjaE1vZGUiLCAiTUVTU0FHRVMiLCAiQVBJX1RBRyIsICJUQVJHRVRfTkFNRVNQQUNFIiwgIkNVUlJFTlRfQ0FURUdST1kiLCAiaXNBdXRvQ29tcGxldGVJbml0IiwgImFscmVhZHlUaGVyZSIsICJjb25uZWN0aW9uRXJyb3IiLCAibm90Rm91bmQiLCAiY291bnRlckN1cnJlbnQiLCAiY291bnRlck5lZWRlZCIsICJjb3VudGVyQ2F0IiwgImN1cnJlbnRDYXRlZ29yeSIsICJkaWFsb2dIZWlnaHQiLCAiZWRpdFRva2VuIiwgImxvY2FsQ2F0TmFtZSIsICJwYXJlbnRDYXRzIiwgInN1YkNhdHMiLCAic2V0dGluZ3MiLCAidmFyaWFudENhY2hlIiwgIiRjb3VudGVyIiwgIiQiLCAiJHByb2dyZXNzRGlhbG9nIiwgIiRsYWJlbHMiLCAiJHNlbGVjdGVkTGFiZWxzIiwgIiRib2R5IiwgIiRjb250YWluZXIiLCAiJGRhdGFDb250YWluZXIiLCAiJG1hcmtDb3VudGVyIiwgIiRyZXN1bHRMaXN0IiwgIiRzZWFyY2hJbnB1dCIsICIkaGVhZCIsICIkbGluayIsICJjb25zdHJ1Y3RvciIsICJfbXckdXRpbCRnZXRQYXJhbVZhbHUiLCAibXNnIiwgImluaXRTZXR0aW5ncyIsICJjb250YWluZXIiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAicGxhY2Vob2xkZXIiLCAidHlwZSIsICJ2YWx1ZSIsICJ1dGlsIiwgImdldFBhcmFtVmFsdWUiLCAib25LZXlEb3duIiwgImV2ZW50IiwgIiRlbGVtZW50IiwgImN1cnJlbnRUYXJnZXQiLCAia2V5IiwgIl8kZWxlbWVudCR2YWwkdHJpbSIsICJfJGVsZW1lbnQkdmFsIiwgImNhdCIsICJ2YWwiLCAidHJpbSIsICJ1cGRhdGVDYXRzIiwgIm9uQ2xpY2siLCAidG9nZ2xlQWxsIiwgImFwcGVuZFRvIiwgImZpbmQiLCAiYnVpbGRFbGVtZW50cyIsICJyZWdleENhdCIsICJSZWdFeHAiLCAibG9jYWxpemVkUmVnZXgiLCAiaXNDb21wb3NpdGlvblN0YXJ0IiwgIm9uIiwgIm9sZFZhbCIsICJuZXdWYWwiLCAicmVwbGFjZSIsICJpbml0QXV0b2NvbXBsZXRlIiwgImF1dG9jb21wbGV0ZSIsICJzb3VyY2UiLCAicmVxdWVzdCIsICJyZXNwb25zZSIsICJkb0FQSUNhbGwiLCAiYWN0aW9uIiwgIm5hbWVzcGFjZSIsICJyZWRpcmVjdHMiLCAic2VhcmNoIiwgInRlcm0iLCAicmVzdWx0IiwgIm1hcCIsICJfaW5kZXgiLCAiaXRlbSIsICJwb3NpdGlvbiIsICJteSIsICJhdCIsICJvZiIsICJ0b2dnbGVDbGFzcyIsICJydW4iLCAiX3dpbmRvdyRDYXRBTG90UHJlZnMiLCAiY2F0QUxvdFByZWZzIiwgIndpbmRvdyIsICJDYXRBTG90UHJlZnMiLCAidHlwZU9mQ2F0QUxvdFByZWZzIiwgIkFycmF5IiwgImlzQXJyYXkiLCAiX2kiLCAiX09iamVjdCRrZXlzIiwgIk9iamVjdCIsICJrZXlzIiwgImxlbmd0aCIsICJfY2F0QUxvdFByZWZzJHNldHRpbmciLCAic2V0dGluZ0tleSIsICJzZXR0aW5nIiwgInNlbGVjdCIsICJfaTIiLCAiX09iamVjdCRrZXlzMiIsICJtZXNzYWdlS2V5IiwgIm1lc3NhZ2UiLCAiYXJncyIsICJmdWxsS2V5IiwgInBhcnNlIiwgInBsYWluIiwgIm5hbWVzcGFjZU51bWJlciIsICJmYWxsYmFjayIsICJfQ0FMJHdnRm9ybWF0dGVkTmFtZXMiLCAid2lraVRleHRCbGFuayIsICJTdHJpbmciLCAicmF3IiwgIl90ZW1wbGF0ZU9iamVjdCIsICJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsIiwgIndpa2lUZXh0QmxhbmtSRSIsICJjcmVhdGVSZWdleFN0ciIsICJuYW1lIiwgInJlZ2V4TmFtZSIsICJpIiwgImluaXRpYWwiLCAic2xpY2UiLCAibGwiLCAidG9Mb3dlckNhc2UiLCAidWwiLCAidG9VcHBlckNhc2UiLCAiX3RlbXBsYXRlT2JqZWN0MiIsICJjYW5vbmljYWwiLCAicmVnZXhTdHJpbmciLCAiX2kzIiwgIl9PYmplY3Qka2V5czMiLCAiY2F0TmFtZSIsICJ1cGRhdGVTZWxlY3Rpb25Db3VudGVyIiwgImZpbHRlciIsICJzaG93IiwgImh0bWwiLCAidG9TdHJpbmciLCAiZmluZEFsbFZhcmlhbnRzIiwgImNhdGVnb3J5IiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInN0b3JlIiwgInN0b3JhZ2UiLCAic2Vzc2lvbiIsICJnZXRPYmplY3QiLCAicmVzdWx0cyIsICJwYXJhbXMiLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAidGV4dCIsICJ0aXRsZSIsICJfaTQiLCAiX1ZBUklBTlRTIiwgInZhcmlhbnQiLCAiZXEiLCAidW5pcXVlQXJyYXkiLCAic2V0T2JqZWN0IiwgInJlZ2V4QnVpbGRlciIsICJ2YXJpYW50cyIsICJ2YXJpYW50UmVnRXhwcyIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJlc2NhcGVSZWdFeHAiLCAiX3RlbXBsYXRlT2JqZWN0MyIsICJmaXJzdCIsICJlcnIiLCAiZSIsICJmIiwgImpvaW4iLCAiX3BhcmFtcyIsICJjYWxsYmFjayIsICJkb0NhbGwiLCAiaGFuZGxlRXJyb3IiLCAiZXJyb3IiLCAibG9nIiwgInNldFRpbWVvdXQiLCAidXBkYXRlQ291bnRlciIsICJ0aGVuIiwgImNhdGNoIiwgInBvc3QiLCAibWFya0FzRG9uZSIsICIkbWFya2VkTGFiZWwiLCAidGFyZ2V0Q2F0ZWdvcnkiLCAibW9kZSIsICJhZGRDbGFzcyIsICJhcHBlbmQiLCAiRnJhZ21lbnQiLCAiZG9DbGVhbnVwIiwgInJlbW92ZVVuY2F0IiwgImRpc3BsYXlSZXN1bHQiLCAiY3NzIiwgImN1cnNvciIsICJvdmVyZmxvdyIsICIkcGFyZW50IiwgInBhcmVudCIsICJyZW1vdmUiLCAicmVkdWNlIiwgInByZSIsICJjdXIiLCAiaW5kZXgiLCAiZWRpdENhdGVnb3JpZXMiLCAibWFya2VkTGFiZWwiLCAiX3RoaXMiLCAiX3BhZ2UkcmV2aXNpb25zIiwgIm1hcmtlZExhYmVsVGl0bGUiLCAib3JpZ2luVGV4dCIsICJzdGFydHRpbWVzdGFtcCIsICJ0aW1lc3RhbXAiLCAidG9rZW5zIiwgImNzcmZ0b2tlbiIsICJwYWdlcyIsICJwYWdlIiwgInJldmlzaW9ucyIsICJzbG90cyIsICJtYWluIiwgImNvbnRlbnQiLCAic291cmNlY2F0IiwgInRhcmdlUmVnRXhwIiwgInRlc3QiLCAic3VtbWFyeSIsICJzb3VyY2VDYXRSZWdFeHAiLCAidG9rZW4iLCAidGFncyIsICJhc3NlcnQiLCAiYm90IiwgImJhc2V0aW1lc3RhbXAiLCAiZ2V0Q29udGVudCIsICJtZXRhIiwgInRpdGxlcyIsICJwcm9wIiwgInJ2cHJvcCIsICJydnNsb3RzIiwgImdldFRpdGxlRnJvbUxpbmsiLCAiaHJlZiIsICJfZGVjb2RlVVJJQ29tcG9uZW50JG0iLCAiX2RlY29kZVVSSUNvbXBvbmVudCRtMiIsICJkZWNvZGVVUklDb21wb25lbnQiLCAibWF0Y2giLCAiZ2V0TWFya2VkTGFiZWxzIiwgIm1hcmtlZExhYmVscyIsICJlYWNoIiwgImxhYmVsIiwgIl8kbGFiZWxMaW5rJGF0dHIiLCAiJGxhYmVsIiwgIiRsYWJlbExpbmsiLCAiYXR0ciIsICJzaG93UHJvZ3Jlc3MiLCAiZGlhbG9nIiwgImRpYWxvZ0NsYXNzIiwgIm1pbkhlaWdodCIsICJoZWlnaHQiLCAid2lkdGgiLCAibW9kYWwiLCAiY2xvc2VPbkVzY2FwZSIsICJkcmFnZ2FibGUiLCAicmVzaXphYmxlIiwgImhpZGUiLCAiZG9Tb21ldGhpbmciLCAibm90aWZ5IiwgInRhZyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJhZGRIZXJlIiwgImNvcHlIZXJlIiwgIm1vdmVIZXJlIiwgImNyZWF0ZUNhdExpbmtzIiwgInN5bWJvbCIsICJjYXRlZ29yaWVzIiwgInNvcnQiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiJHRyIiwgImRhdGFzZXQiLCAiY2xvc2VzdCIsICJkYXRhIiwgInNob3dDYXRlZ29yeUxpc3QiLCAiX3RoaXMkJGNvbnRhaW5lciR3aWR0IiwgIl8kJHdpZHRoIiwgImN1cnJlbnRDYXRlZ29yaWVzIiwgImVtcHR5IiwgIk1hdGgiLCAibWluIiwgImdldFBhcmVudENhdHMiLCAiX3BhZ2VzJCIsICJfcGFnZXMkMiIsICJxdWVyeSIsICJtaXNzaW5nIiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgImdldFN1YkNhdHMiLCAibGlzdCIsICJjbXR5cGUiLCAiY21saW1pdCIsICJjbXRpdGxlIiwgIl9yZXN1bHQkcXVlcnkiLCAiY2F0cyIsICJjYXRlZ29yeW1lbWJlcnMiLCAiX2l0ZXJhdG9yNiIsICJfc3RlcDYiLCAiZ2V0Q2F0ZWdvcnlMaXN0IiwgImZpbmRBbGxMYWJlbHMiLCAiYWRkIiwgIiRwYWdlcyIsICJtYWtlQ2xpY2thYmxlIiwgIm9uQ2F0QUxvdFNoaWZ0Q2xpY2siLCAiaGFzQ2xhc3MiLCAiYWxzb1Jlc2l6ZSIsICJoYW5kbGVzIiwgInJlc2l6ZSIsICJfJGN1cnJlbnRUYXJnZXQkaGVpZ2giLCAiJGN1cnJlbnRUYXJnZXQiLCAibGVmdCIsICJ0b3AiLCAibWF4SGVpZ2h0IiwgIm9mZiIsICJnZXRCb2R5IiwgImV4dGVuZEpRdWVyeVByb3RvdHlwZSIsICJmbiIsICJleHRlbmQiLCAicHJldkNoZWNrYm94IiwgImN0cmxLZXkiLCAicHJldmVudERlZmF1bHQiLCAicGFyZW50cyIsICJyZW1vdmVDbGFzcyIsICIkdGhpc0NvbnRyb2wiLCAidGFyZ2V0IiwgInNoaWZ0S2V5IiwgIm1ldGhvZCIsICJtYXgiXQp9Cg==
