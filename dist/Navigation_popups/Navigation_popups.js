/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://en.wikipedia.org/wiki/MediaWiki:Gadget-popups.js}
 * @base {@link https://zh.wikipedia.org/w/index.php?title=User:Lupin/strings-draft&oldid=579996170}
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-navpop.css}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/Navigation_popups}
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

// dist/Navigation_popups/Navigation_popups.js
var _templateObject;
var _templateObject2;
var _templateObject3;
var _templateObject4;
var _templateObject5;
var _templateObject6;
var _templateObject7;
var _templateObject8;
var _templateObject9;
var _templateObject0;
var _templateObject1;
var _templateObject10;
var _templateObject11;
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
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
//! src/Navigation_popups/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("Navigation popups/1.0");
//! src/Navigation_popups/modules/string.ts
var message = {
  // summary data, searching etc.
  article: window.wgULS("条目", "條目"),
  category: window.wgULS("个分类", "個分類"),
  categories: window.wgULS("个分类", "個分類"),
  image: window.wgULS("个文件", "個檔案"),
  images: window.wgULS("个文件", "個檔案"),
  stub: "小作品",
  "section stub": window.wgULS("小章节", "小章節"),
  "Empty page": window.wgULS("空页面", "空頁面"),
  kB: window.wgULS("千字节<sub>（以1000为一进）</sub>", "千位元組<sub>（以1000為一進）</sub>"),
  bytes: window.wgULS("字节", "位元組"),
  day: "天",
  days: "天",
  hour: window.wgULS("小时", "小時"),
  hours: window.wgULS("小时", "小時"),
  minute: "分",
  minutes: "分",
  second: "秒",
  seconds: "秒",
  week: "周",
  weeks: "周",
  month: "月",
  months: "月",
  year: "年",
  years: "年",
  search: window.wgULS("搜索", "搜尋"),
  SearchHint: window.wgULS("搜索包含 %s 的页面", "搜尋包含 %s 的頁面"),
  web: "Bing",
  global: "全域",
  "more...": "更多……",
  // article-related actions and info
  // (some actions also apply to user pages)
  actions: window.wgULS("操作", "動作"),
  // /// view articles and view talk
  popupsMenu: "Popups",
  "disable previews": window.wgULS("禁用预览", "禁用預覽"),
  togglePreviewsHint: window.wgULS("切换本页 Popups 的预览开关", "切換本頁 Popups 的預覽開關"),
  "toggle previews": window.wgULS("切换预览开关", "切換預覽開關"),
  reset: window.wgULS("复位", "複位"),
  disable: "禁用 Popups",
  disablePopupsHint: window.wgULS("在本页禁用 Popups，刷新页面以重新启用。", "在本頁禁用 Popups，重新整理頁面以重新啟用。"),
  purgePopupsHint: window.wgULS("复位 Popups，清除所有缓存数据。", "複位 Popups，清除所有快取資料。"),
  PopupsHint: window.wgULS("复位 Popups，清除所有缓存数据。", "複位 Popups，清除所有快取資料。"),
  spacebar: "空格",
  view: window.wgULS("查看", "檢視"),
  "view article": window.wgULS("查看条目", "檢視條目"),
  viewHint: window.wgULS("前往 %s", "前往 %s"),
  talk: window.wgULS("讨论", "討論"),
  "talk page": window.wgULS("讨论页", "討論頁"),
  "this&nbsp;revision": window.wgULS("此修订版本", "此修訂版本"),
  "revision %s of %s": window.wgULS("页面 $2 的修订版本 $1", "頁面 $2 的修訂版本 $1"),
  "Revision %s of %s": window.wgULS("页面 $2 的修订版本 $1", "頁面 $2 的修訂版本 $1"),
  "the revision prior to revision %s of %s": window.wgULS("页面 $2 的修订版本 $1 之前的修订版本", "頁面 $2 的修訂版本 $1 之前的修訂版本"),
  "Toggle image size": window.wgULS("点击切换图片大小", "點擊切換圖片大小"),
  del: window.wgULS("删除", "删除"),
  // /// delete, protect, move
  delete: window.wgULS("删除", "删除"),
  deleteHint: window.wgULS("删除 %s", "删除 %s"),
  undeleteShort: window.wgULS("恢复", "恢復"),
  UndeleteHint: window.wgULS("恢复 %s", "恢復 %s"),
  protect: window.wgULS("保护", "保護"),
  protectHint: window.wgULS("保护 %s", "保護 %s"),
  unprotectShort: window.wgULS("解除", "解除"),
  unprotectHint: window.wgULS("解除对 %s 的保护", "解除對 %s 的保護"),
  move: window.wgULS("移动", "移動"),
  "move page": window.wgULS("移动页面", "移動頁面"),
  MovepageHint: window.wgULS("修改 %s 的标题", "修改 %s 的標題"),
  edit: window.wgULS("编辑", "編輯"),
  // /// edit articles and talk
  "edit article": window.wgULS("编辑条目", "編輯條目"),
  editHint: window.wgULS("修改 %s 的内容", "修改 %s 的內容"),
  "edit talk": window.wgULS("编辑讨论页", "編輯對話頁"),
  new: window.wgULS("新", "新"),
  "new topic": window.wgULS("新话题", "新話題"),
  newSectionHint: window.wgULS("在 %s 增加新的讨论话题", "在 %s 增加新的討論話題"),
  "null edit": window.wgULS("空编辑", "空編輯"),
  nullEditHint: window.wgULS("进行一次对 %s 的空编辑", "製造一次對 %s 的空編輯"),
  hist: window.wgULS("历史", "歷史"),
  // /// history, diffs, editors, related
  history: window.wgULS("历史", "歷史"),
  historyHint: window.wgULS("%s 的修订历史", "%s 的修訂歷史"),
  last: window.wgULS("之前", "之前"),
  // [[MediaWiki:Last]]
  lastEdit: window.wgULS("最近更改", "最近更改"),
  "show last edit": window.wgULS("最近一次更改", "最新一次修訂"),
  "Show the last edit": window.wgULS("显示最近一次更改的差异", "顯示最新一次修訂的差異"),
  lastContrib: window.wgULS("最近编辑", "最近編輯"),
  "last set of edits": window.wgULS("最近编辑", "最近編輯"),
  lastContribHint: window.wgULS("显示由最后一位编辑者造成的差异", "顯示由最後一位編輯者製造的差異"),
  cur: window.wgULS("当前", "當前"),
  diffCur: window.wgULS("与当前版本的差异", "與目前版本的差異"),
  "Show changes since revision %s": window.wgULS("显示自修订版本 %s 的差异", "顯示自修訂版本 %s 的差異"),
  "%s old": window.wgULS("%s 前的最后版本", "%s 前的最后版本"),
  // as in 4 weeks old
  oldEdit: window.wgULS("旧编辑", "舊編輯"),
  purge: window.wgULS("清除缓存", "清除快取"),
  purgeHint: window.wgULS("清除服务器中 %s 的缓存", "清除伺服器中 %s 的快取"),
  raw: window.wgULS("源代码", "原始碼"),
  rawHint: window.wgULS("查看 %s 的源代码", "檢視 %s 的原始碼"),
  render: window.wgULS("仅正文", "僅正文"),
  renderHint: window.wgULS("显示 %s 的纯HTML解析（仅正文内容）", "顯示 %s 的純HTML解析（僅正文內容）"),
  "Show the edit made to get revision": window.wgULS("显示编辑以得到修订版本", "顯示編輯以得到修訂版本"),
  sinceMe: window.wgULS("自我", "自我"),
  "changes since mine": window.wgULS("自我修订的差异", "自我修訂的差異"),
  sinceMeHint: window.wgULS("显示自我上次修改以来的差异", "顯示自我上次修改以來的差異"),
  "Couldn't find an edit by %s\nin the last %s edits to\n%s": window.wgULS("在 $3 最近 $2 次编辑中找不到 $1 做出的修改", "在 $3 最近 $2 次編輯中找不到 $1 做出的修改"),
  eds: window.wgULS("编辑", "編輯"),
  editors: window.wgULS("编辑者", "編輯者"),
  editorListHint: window.wgULS("列出编辑过 %s 的用户", "列出編輯過 %s 的使用者"),
  related: window.wgULS("相关", "相關"),
  relatedChanges: window.wgULS("相关更改", "相關更改"),
  "related changes": window.wgULS("相关更改", "相關更改"),
  RecentchangeslinkedHint: window.wgULS("显示相关 %s 的修改", "顯示相關 %s 的修改"),
  editOld: window.wgULS("编辑旧版", "編輯舊版"),
  // /// edit old version, or revert
  rv: window.wgULS("回退", "恢復"),
  revert: window.wgULS("回退", "恢復"),
  revertHint: window.wgULS("回退到 %s", "恢復到 %s"),
  undo: window.wgULS("撤销", "撤銷"),
  undoHint: window.wgULS("撤销这次编辑", "撤銷這次編輯"),
  defaultpopupRedlinkSummary: window.wgULS("移除到空页面[[%s]]的链接（Popups）", "移除到空頁面[[%s]]的連結（Popups）"),
  defaultpopupFixDabsSummary: window.wgULS("消歧义[[%s]]到[[%s]]（Popups）", "消歧義[[%s]]到[[%s]]（Popups）"),
  defaultpopupFixRedirsSummary: window.wgULS("忽略从[[%s]]到[[%s]]的重定向（Popups）", "忽略從[[%s]]到[[%s]]的重新導向（Popups）"),
  defaultpopupExtendedRevertSummary: window.wgULS("回退到$2在$1时编辑的修订版本$3（Popups）", "還原到$2在$1時製作的修訂版本$3（Popups）"),
  defaultpopupRevertToPreviousSummary: window.wgULS("回退到修订版本%s的上一个版本（Popups）", "還原到修訂版本%s的上一個版本（Popups）"),
  defaultpopupRevertSummary: window.wgULS("回退到修订版本%s（Popups）", "還原到修訂版本%s（Popups）"),
  defaultpopupQueriedRevertToPreviousSummary: window.wgULS("回退到修订版本$1的上一个版本，由$3在$2时编辑（Popups）", "還原到修訂版本$1的上一個版本，由$3在$2時製作（Popups）"),
  defaultpopupQueriedRevertSummary: window.wgULS("回退到$3在$2时编辑的修订版本$1（Popups）", "還原到$3在$2時製作的修訂版本$1（Popups）"),
  defaultpopupRmDabLinkSummary: window.wgULS("移除到消歧义页[[%s]]的链接（Popups）", "移除到消歧義頁[[%s]]的連結（Popups）"),
  Redirects: window.wgULS("重定向", "重定向"),
  // as in Redirects to ...
  // " to ": window.wgULS( "到","到" ),
  // as in Redirects to ...
  "Bypass redirect": window.wgULS("忽略重定向", "忽略重新導向"),
  "Fix this redirect": window.wgULS("修复重定向", "修復重新導向"),
  disambig: window.wgULS("消歧义", "消歧義"),
  // /// add or remove dab etc.
  disambigHint: window.wgULS("消歧义这个链接到 [[%s]]", "消歧義這個連結到 [[%s]]"),
  "Click to disambiguate this link to:": window.wgULS("点击以消歧义这个链接到：", "點擊以消歧義這個連結到："),
  "remove this link": window.wgULS("移除链接", "移除連結"),
  "remove all links to this page from this article": window.wgULS("移除此条目到这页的所有链接", "移除此條目到這頁的所有連結"),
  "remove all links to this disambig page from this article": window.wgULS("移除此条目到这消歧义的所有链接", "移除此條目到這消歧義的所有連結"),
  mainlink: window.wgULS("主链接", "主連結"),
  // /// links, watch, unwatch
  wikiLink: window.wgULS("个内部链接", "个內部連結"),
  wikiLinks: window.wgULS("个内部链接", "个內部連結"),
  "links here": window.wgULS("链入", "鏈入"),
  whatLinksHere: window.wgULS("链入页面", "鏈入頁面"),
  "what links here": window.wgULS("链入页面", "鏈入頁面"),
  WhatlinkshereHint: window.wgULS("显示链接到 %s 的页面", "顯示連結到 %s 的頁面"),
  unwatchShort: window.wgULS("取消", "取消"),
  watchThingy: window.wgULS("监视", "監視"),
  // called watchThingy because {}.watch is a function
  watchHint: window.wgULS("加入 %s 到我的监视列表", "加入 %s 到我的監視列表"),
  unwatchHint: window.wgULS("从我的监视列表移除 %s", "從我的監視列表移除 %s"),
  "Only found one editor: %s made %s edits": window.wgULS("仅找到一位编者：%s 制造了 %s 次编辑", "僅找到一位編者：%s 製造了 %s 次編輯"),
  "%s seems to be the last editor to the page %s": window.wgULS("%s 看上去是 %s 这页的最后一位编者", "%s 看上去是 %s 這頁的最後一位編者"),
  rss: window.wgULS("RSS", "RSS"),
  // diff previews
  "Diff truncated for performance reasons": window.wgULS("出于性能考虑，差异已被截断", "出於效能考慮，差異已被截斷"),
  "Old revision": window.wgULS("旧版本", "舊版本"),
  "New revision": window.wgULS("新版本", "新版本"),
  "Something went wrong :-(": window.wgULS("出问题了 :-(", "出問題了 :-("),
  "Empty revision, maybe non-existent": window.wgULS("空的修订，可能并不存在", "空的修訂，可能並不存在"),
  "Unknown date": window.wgULS("未知日期", "未知日期"),
  // other special previews
  "Empty category": window.wgULS("空的分类", "空的分類"),
  "Category members (%s shown)": window.wgULS("分类成员（%s 显示）", "分類成員（%s 顯示）"),
  "No image links found": window.wgULS("未找到文件链接", "未找到檔案連結"),
  "File links": window.wgULS("文件链接", "檔案連結"),
  "not commons": window.wgULS("维基共享中无此名称的文件。", "維基共享中無此名稱的檔案。"),
  "commons only": window.wgULS("此文件来自维基共享。", "此檔案來自維基共享。"),
  "No image found": window.wgULS("找不到文件", "找不到檔案"),
  "commons dupe": window.wgULS("维基共享中存在此文件的副本。", "維基共享中存在此檔案的副本。"),
  "commons conflict": window.wgULS("维基共享中存在此文件名称不同的副本。", "維基共享中存在此檔名稱不同的副本。"),
  // user-related actions and info
  user: window.wgULS("用户", "使用者"),
  // /// user page, talk, email, space
  "user&nbsp;page": window.wgULS("用户页", "使用者頁"),
  "user talk": window.wgULS("用户讨论", "使用者對話"),
  "edit user talk": window.wgULS("编辑用户讨论", "編輯使用者對話"),
  "leave comment": window.wgULS("留言", "留言"),
  email: window.wgULS("电邮", "電郵"),
  "email user": window.wgULS("电邮用户", "電郵使用者"),
  EmailuserHint: window.wgULS("给 %s 发送电子邮件", "給 %s 發送電子郵件"),
  space: window.wgULS("子页面", "子頁面"),
  // short form for userSpace link
  PrefixindexHint: window.wgULS("显示 %s 的用户页子页面", "顯示 %s 的使用者頁子頁面"),
  count: window.wgULS("统计", "統計"),
  // /// contributions, tree, log
  "edit counter": window.wgULS("编辑次数", "編輯次數"),
  katelinkHint: window.wgULS("%s 的编辑次数", "%s 的編輯次數"),
  contribs: window.wgULS("贡献", "貢獻"),
  contributions: window.wgULS("贡献", "貢獻"),
  deletedContribs: window.wgULS("已删除的贡献", "已刪除的貢獻"),
  ContributionsHint: window.wgULS("%s 的用户贡献", "%s 的使用者貢獻"),
  tree: window.wgULS("树", "樹"),
  contribsTreeHint: window.wgULS("根据名字空间查看 %s 的贡献", "根據命名空間檢視 %s 的貢獻"),
  log: window.wgULS("日志", "日誌"),
  "user log": window.wgULS("用户日志", "使用者日誌"),
  userLogHint: window.wgULS("显示 %s 的用户日志", "顯示 %s 的使用者日誌"),
  unblockShort: window.wgULS("解除", "解除"),
  block: window.wgULS("封禁", "封鎖"),
  "block user": window.wgULS("封禁用户", "封鎖使用者"),
  IpblocklistHint: window.wgULS("解封 %s", "解封 %s"),
  BlockipHint: window.wgULS("封禁 %s", "封鎖 %s"),
  "block log": window.wgULS("封禁日志", "封鎖日誌"),
  blockLogHint: window.wgULS("显示 %s 的封禁日志", "顯示 %s 的封鎖日誌"),
  protectLogHint: window.wgULS("显示 %s 的保护日志", "顯示 %s 的保護日誌"),
  pageLogHint: window.wgULS("显示 %s 的日志", "顯示 %s 的日誌"),
  deleteLogHint: window.wgULS("显示 %s 的删除日志", "顯示 %s 的刪除日誌"),
  "Invalid %s %s": window.wgULS("选项 %s 不可用：%s", "選項 %s 不可用：%s"),
  m: "小",
  // Autoediting
  "Enter a non-empty edit summary or press cancel to abort": window.wgULS("输入编辑摘要，或按取消中止操作", "輸入編輯摘要，或按取消中止操作"),
  "Failed to get revision information, please edit manually.\n\n": window.wgULS("获取修订版本信息失败，请手动修改。\n\n", "獲取修訂版本資訊失敗，請手動修改。\n\n"),
  "The %s button has been automatically clicked. Please wait for the next page to load.": window.wgULS("按钮 %s 已被自动点击，请等待下一个页面加载。", "按鈕 %s 已被自動點擊，請等待下一個頁面載入。"),
  "Could not find button %s. Please check the settings in your javascript file.": window.wgULS("找不到按钮 %s，请检查您 JavaScript 文件中的设置。", "找不到按鈕 %s，請檢查您 JavaScript 檔案中的設定。"),
  // Popups setup
  "Open full-size image": window.wgULS("查看全尺寸图像", "檢視全尺寸影像"),
  // 以下内容由 AnnAngela 补正
  bingSearchHint: window.wgULS("在 Bing 上搜索“%s”", "在 bing 上搜尋「%s」"),
  "enable previews": window.wgULS("启用预览", "啟用預覽"),
  "show preview": window.wgULS("禁用预览", "禁用預覽"),
  historyfeedHint: window.wgULS("该页面的近期更改 RSS feed", "該頁面的近期更改 RSS feed"),
  "send thanks": window.wgULS("发送感谢", "傳送感謝"),
  ThanksHint: window.wgULS("向该用户发送一封感谢消息", "向該使用者傳送一封感謝訊息"),
  "mark patrolled": window.wgULS("标记为已巡查", "標記為已巡查"),
  markpatrolledHint: window.wgULS("标记该编辑为已巡查", "標記該編輯為已巡查"),
  "Could not marked this edit as patrolled": window.wgULS("无法标记该编辑为已巡查", "無法標記該編輯為已巡查"),
  defaultpopupReviewedSummary: window.wgULS("标记从版本%s到%s间的编辑为已巡查", "標記從版本%s到%s間的編輯為已巡查"),
  "Image from Commons": window.wgULS("来自维基共享的图片", "來自維基共用的圖片"),
  "Description page": window.wgULS("图片描述页", "圖片描述頁"),
  "Alt text:": window.wgULS("替换文本（Alt）：", "替換文字（Alt）："),
  revdel: window.wgULS("历史版本被隐藏", "歷史版本被隱藏"),
  DeletedcontributionsHint: window.wgULS("用户%s的被删除编辑次数", "使用者%s的被刪除編輯次數"),
  "No backlinks found": window.wgULS("找不到链入页面", "找不到鏈入頁面"),
  " and more": window.wgULS("以及其他页面", "以及其他頁面"),
  "Download preview data": window.wgULS("下载预览数据", "下載預覽資料"),
  "Not a registered username": window.wgULS("非已注册的用户", "非已註冊的使用者"),
  BLOCKED: window.wgULS("被封禁", "被封鎖"),
  "Has blocks": window.wgULS("被部分封禁", "被部分封鎖"),
  " edits since: ": window.wgULS("次编辑，注册日期为", "次編輯，註冊日期為"),
  "last edit on ": window.wgULS("最后一次编辑于", "最後一次編輯於"),
  EmailUserHint: window.wgULS("给 %s 发送电子邮件", "給 %s 發送電子郵件"),
  RANGEBLOCKED: window.wgULS("IP段被封禁", "IP段被封鎖"),
  "IP user": window.wgULS("IP用户", "IP使用者"),
  "♀": "♀",
  "♂": "♂",
  HIDDEN: window.wgULS("全域隐藏", "全域隱藏"),
  LOCKED: window.wgULS("全域锁定", "全域鎖定"),
  "Invalid user": window.wgULS("非法用户名", "非法使用者名稱"),
  diff: window.wgULS("差异", "差異"),
  " to ": "至",
  autoedit_version: "np20140416",
  PrefixIndexHint: window.wgULS("显示用户%s的子页面", "顯示使用者%s的子頁面"),
  nullEditSummary: window.wgULS("进行一次零编辑", "進行一次零編輯"),
  // 用户组名称从系统消息获取
  "group-no-autoconfirmed": window.wgULS("非自动确认用户", "非自動確認使用者"),
  separator: "、",
  comma: "，"
};
//! src/Navigation_popups/modules/core.js
var popups = () => {
  const pg = {
    api: {},
    re: {},
    ns: {},
    string: {},
    wiki: {},
    user: {},
    misc: {},
    option: {},
    optionDefault: {},
    flag: {},
    cache: {},
    structures: {},
    timer: {},
    counter: {},
    current: {},
    fn: {},
    endoflist: null
  };
  if (window.pg && !(window.pg instanceof HTMLElement)) {
    return;
  }
  window.pg = pg;
  const setupTooltips = (container, remove, force, popData) => {
    log("setupTooltips, container=".concat(container, ", remove=").concat(remove));
    if (!container) {
      if (getValueOf("popupOnEditSelection") && document && document.editform && document.editform.wpTextbox1) {
        document.editform.wpTextbox1.onmouseup = doSelectionPopup;
      }
      container = defaultPopupsContainer();
    }
    if (!remove && !force && container.ranSetupTooltipsAlready) {
      return;
    }
    container.ranSetupTooltipsAlready = !remove;
    const anchors = container.querySelectorAll("a");
    setupTooltipsLoop(anchors, 0, 250, 100, remove, popData);
  };
  const defaultPopupsContainer = () => {
    if (getValueOf("popupOnlyArticleLinks")) {
      return document.querySelector(".skin-vector-2022 .vector-body") || document.querySelector("#mw_content") || document.querySelector("#content") || document.querySelector("#article") || document;
    }
    return document;
  };
  const setupTooltipsLoop = function setupTooltipsLoop2(anchors, begin, howmany, sleep, remove, popData, ...args) {
    log(simplePrintf("setupTooltipsLoop(%s,%s,%s,%s,%s)", [anchors, begin, howmany, sleep, remove, popData, ...args]));
    const finish = begin + howmany;
    const loopend = Math.min(finish, anchors.length);
    let j = loopend - begin;
    log("setupTooltips: anchors.length=".concat(anchors.length, ", begin=").concat(begin, ", howmany=").concat(howmany, ", loopend=").concat(loopend, ", remove=").concat(remove));
    const doTooltip = remove ? removeTooltip : addTooltip;
    if (j > 0) {
      do {
        const a = anchors[loopend - j];
        if (a === void 0 || !a || !a.href) {
          log("got null anchor at index ".concat(loopend) - j);
          continue;
        }
        doTooltip(a, popData);
      } while (--j);
    }
    if (finish < anchors.length) {
      setTimeout(() => {
        setupTooltipsLoop2(anchors, finish, howmany, sleep, remove, popData);
      }, sleep);
    } else {
      if (!remove && !getValueOf("popupTocLinks")) {
        rmTocTooltips();
      }
      pg.flag.finishedLoading = true;
    }
  };
  const rmTocTooltips = () => {
    const toc = document.querySelector("#toc");
    if (toc) {
      const tocLinks = toc.querySelectorAll("a");
      const tocLen = tocLinks.length;
      for (let j = 0; j < tocLen; ++j) {
        removeTooltip(tocLinks[j], true);
      }
    }
  };
  const addTooltip = (a, popData) => {
    if (!isPopupLink(a)) {
      return;
    }
    a.onmouseover = mouseOverWikiLink;
    a.onmouseout = mouseOutWikiLink;
    a.onmousedown = killPopup;
    a.hasPopup = true;
    a.popData = popData;
  };
  const removeTooltip = (a) => {
    if (!a.hasPopup) {
      return;
    }
    a.onmouseover = null;
    a.onmouseout = null;
    if (a.originalTitle) {
      a.title = a.originalTitle;
    }
    a.hasPopup = false;
  };
  const removeTitle = (a) => {
    a.originalTitle || (a.originalTitle = a.title);
    a.title = "";
  };
  const restoreTitle = (a) => {
    if (a.title || !a.originalTitle) {
      return;
    }
    a.title = a.originalTitle;
  };
  const registerHooks = (np) => {
    const popupMaxWidth = getValueOf("popupMaxWidth");
    if (typeof popupMaxWidth === "number") {
      const setMaxWidth = () => {
        np.mainDiv.style.maxWidth = "".concat(popupMaxWidth, "px");
        np.maxWidth = popupMaxWidth;
      };
      np.addHook(setMaxWidth, "unhide", "before");
    }
    np.addHook(addPopupShortcuts, "unhide", "after");
    np.addHook(rmPopupShortcuts, "hide", "before");
  };
  const removeModifierKeyListener = (a) => {
    document.removeEventListener("keydown", a.modifierKeyListener, false);
    document.removeEventListener("keyup", a.modifierKeyListener, false);
  };
  const mouseOverWikiLink = function mouseOverWikiLink3(evt) {
    if (!evt && window.event) {
      evt = window.event;
    }
    if (getValueOf("popupModifier")) {
      const action = getValueOf("popupModifierAction");
      const key = action === "disable" ? "keyup" : "keydown";
      const self = this;
      self.modifierKeyListener = (evt2) => {
        mouseOverWikiLink2(self, evt2);
      };
      document.addEventListener(key, self.modifierKeyListener, false);
    }
    return mouseOverWikiLink2(this, evt);
  };
  const footnoteTarget = (a) => {
    const aTitle = Title.fromAnchor(a);
    const anch = aTitle.anchor;
    if (!/^(cite_note-|_note-|endnote)/.test(anch)) {
      return false;
    }
    const lTitle = Title.fromURL(location.href);
    if (lTitle.toString(true) !== aTitle.toString(true)) {
      return false;
    }
    let el = document.querySelector("#".concat(anch));
    while (el && typeof el.nodeName === "string") {
      const nt = el.nodeName.toLowerCase();
      if (nt === "li") {
        return el;
      } else if (nt === "body") {
        return false;
      } else if (el.parentNode) {
        el = el.parentNode;
      } else {
        return false;
      }
    }
    return false;
  };
  const footnotePreview = (x, navpop) => {
    setPopupHTML("<hr>".concat(x.innerHTML), "popupPreview", navpop.idNumber);
  };
  const modifierPressed = (evt) => {
    const mod = getValueOf("popupModifier");
    if (!mod) {
      return false;
    }
    if (!evt && window.event) {
      evt = window.event;
    }
    return evt && mod && evt["".concat(mod.toLowerCase(), "Key")];
  };
  const isCorrectModifier = (_a, evt) => {
    if (!getValueOf("popupModifier")) {
      return true;
    }
    const action = getValueOf("popupModifierAction");
    return action === "enable" && modifierPressed(evt) || action === "disable" && !modifierPressed(evt);
  };
  const mouseOverWikiLink2 = (a, evt) => {
    if (!isCorrectModifier(a, evt)) {
      return;
    }
    if (getValueOf("removeTitles")) {
      removeTitle(a);
    }
    if (a === pg.current.link && a.navpopup && a.navpopup.isVisible()) {
      return;
    }
    pg.current.link = a;
    if (getValueOf("simplePopups") && !pg.option.popupStructure) {
      setDefault("popupStructure", "original");
    }
    const article = new Title().fromAnchor(a);
    pg.current.article = article;
    if (!a.navpopup) {
      a.navpopup = newNavpopup(a, article);
      pg.current.linksHash[a.href] = a.navpopup;
      pg.current.links.push(a);
    }
    if (a.navpopup.pending === null || a.navpopup.pending !== 0) {
      simplePopupContent(a, article);
    }
    a.navpopup.showSoonIfStable(a.navpopup.delay);
    clearInterval(pg.timer.checkPopupPosition);
    pg.timer.checkPopupPosition = setInterval(checkPopupPosition, 600);
    if (getValueOf("simplePopups") && getValueOf("popupPreviewButton") && !a.simpleNoMore) {
      const d = document.createElement("div");
      d.className = "popupPreviewButtonDiv";
      const s = document.createElement("span");
      d.append(s);
      s.className = "popupPreviewButton";
      s["on".concat(getValueOf("popupPreviewButtonEvent"))] = () => {
        a.simpleNoMore = true;
        d.style.display = "none";
        nonsimplePopupContent(a, article);
      };
      s.innerHTML = popupString("show preview");
      setPopupHTML(d, "popupPreview", a.navpopup.idNumber);
    }
    if (a.navpopup.pending !== 0) {
      nonsimplePopupContent(a, article);
    }
  };
  const simplePopupContent = (a, article) => {
    a.navpopup.hasPopupMenu = false;
    a.navpopup.setInnerHTML(popupHTML(a));
    fillEmptySpans({
      navpopup: a.navpopup
    });
    if (getValueOf("popupDraggable")) {
      let dragHandle = getValueOf("popupDragHandle") || null;
      if (dragHandle && dragHandle !== "all") {
        dragHandle += a.navpopup.idNumber;
      }
      setTimeout(() => {
        a.navpopup.makeDraggable(dragHandle);
      }, 150);
    }
    if (getValueOf("popupRedlinkRemoval") && a.className === "new") {
      setPopupHTML("<br>".concat(popupRedlinkHTML(article)), "popupRedlink", a.navpopup.idNumber);
    }
  };
  const debugData = (navpopup) => {
    if (getValueOf("popupDebugging") && navpopup.idNumber) {
      setPopupHTML("idNumber=".concat(navpopup.idNumber, ", pending=").concat(navpopup.pending), "popupError", navpopup.idNumber);
    }
  };
  const newNavpopup = (a, article) => {
    const navpopup = new Navpopup();
    navpopup.fuzz = 5;
    navpopup.delay = getValueOf("popupDelay") * 1e3;
    navpopup.idNumber = ++pg.idNumber;
    navpopup.parentAnchor = a;
    navpopup.parentPopup = a.popData && a.popData.owner;
    navpopup.article = article;
    registerHooks(navpopup);
    return navpopup;
  };
  const shouldShowNonSimple = (a) => {
    return !getValueOf("simplePopups") || a.simpleNoMore;
  };
  const shouldShow = (a, option) => {
    if (shouldShowNonSimple(a)) {
      return getValueOf(option);
    }
    return window[option] !== void 0 && window[option];
  };
  const nonsimplePopupContent = (a, article) => {
    let diff2;
    let history;
    const params = parseParams(a.href);
    const oldid = params.oldid === void 0 ? null : params.oldid;
    if (shouldShow(a, "popupPreviewDiffs")) {
      ({
        diff: diff2
      } = params);
    }
    if (shouldShow(a, "popupPreviewHistory")) {
      history = params.action === "history";
    }
    a.navpopup.pending = 0;
    const referenceElement = footnoteTarget(a);
    if (referenceElement) {
      footnotePreview(referenceElement, a.navpopup);
    } else if (diff2 || diff2 === 0) {
      loadDiff(article, oldid, diff2, a.navpopup);
    } else if (history) {
      loadAPIPreview("history", article, a.navpopup);
    } else if (shouldShowNonSimple(a) && pg.re.contribs.test(a.href)) {
      loadAPIPreview("contribs", article, a.navpopup);
    } else if (shouldShowNonSimple(a) && pg.re.backlinks.test(a.href)) {
      loadAPIPreview("backlinks", article, a.navpopup);
    } else if (
      // FIXME should be able to get all preview combinations with options
      article.namespaceId() === pg.nsImageId && (shouldShow(a, "imagePopupsForImages") || !anchorContainsImage(a))
    ) {
      loadAPIPreview("imagepagepreview", article, a.navpopup);
      loadImage(article, a.navpopup);
    } else {
      if (article.namespaceId() === pg.nsCategoryId && shouldShow(a, "popupCategoryMembers")) {
        loadAPIPreview("category", article, a.navpopup);
      } else if ((article.namespaceId() === pg.nsUserId || article.namespaceId() === pg.nsUsertalkId) && shouldShow(a, "popupUserInfo")) {
        loadAPIPreview("userinfo", article, a.navpopup);
      }
      if (shouldShowNonSimple(a)) {
        startArticlePreview(article, oldid, a.navpopup);
      }
    }
  };
  const pendingNavpopTask = (navpop) => {
    if (navpop && navpop.pending === null) {
      navpop.pending = 0;
    }
    ++navpop.pending;
    debugData(navpop);
  };
  const completedNavpopTask = (navpop) => {
    if (navpop && navpop.pending) {
      --navpop.pending;
    }
    debugData(navpop);
  };
  const startArticlePreview = (article, oldid, navpop) => {
    navpop.redir = 0;
    loadPreview(article, oldid, navpop);
  };
  const loadPreview = (article, oldid, navpop) => {
    if (!navpop.redir) {
      navpop.originalArticle = article;
    }
    article.oldid = oldid;
    loadAPIPreview("revision", article, navpop);
  };
  const loadPreviewFromRedir = (redirMatch, navpop) => {
    const target = new Title().fromWikiText(redirMatch[2]);
    if (navpop.article.anchor) {
      target.anchor = navpop.article.anchor;
    }
    navpop.redir++;
    navpop.redirTarget = target;
    const warnRedir = redirLink(target, navpop.article);
    setPopupHTML(warnRedir, "popupWarnRedir", navpop.idNumber);
    navpop.article = target;
    fillEmptySpans({
      redir: true,
      redirTarget: target,
      navpopup: navpop
    });
    return loadPreview(target, null, navpop);
  };
  const insertPreview = (download) => {
    if (!download.owner) {
      return;
    }
    const redirMatch = pg.re.redirect.exec(download.data);
    if (download.owner.redir === 0 && redirMatch) {
      loadPreviewFromRedir(redirMatch, download.owner);
      return;
    }
    if (download.owner.visible || !getValueOf("popupLazyPreviews")) {
      insertPreviewNow(download);
    } else {
      const id = download.owner.redir ? "PREVIEW_REDIR_HOOK" : "PREVIEW_HOOK";
      download.owner.addHook(() => {
        insertPreviewNow(download);
        return true;
      }, "unhide", "after", id);
    }
  };
  const insertPreviewNow = (download) => {
    if (!download.owner) {
      return;
    }
    const wikiText = download.data;
    const navpop = download.owner;
    const art = navpop.redirTarget || navpop.originalArticle;
    makeFixDabs(wikiText, navpop);
    if (getValueOf("popupSummaryData")) {
      getPageInfo(wikiText, download);
      setPopupTrailer(getPageInfo(wikiText, download), navpop.idNumber);
    }
    let imagePage = "";
    imagePage = art.namespaceId() === pg.nsImageId ? art.toString() : getValidImageFromWikiText(wikiText);
    if (imagePage) {
      loadImage(Title.fromWikiText(imagePage), navpop);
    }
    if (getValueOf("popupPreviews")) {
      insertArticlePreview(download, art, navpop);
    }
  };
  const insertArticlePreview = (download, art, navpop) => {
    if (download && typeof download.data === "string") {
      if (art.namespaceId() === pg.nsTemplateId && getValueOf("popupPreviewRawTemplates")) {
        const h = '<hr><span style="font-family: monospace;">'.concat(download.data.entify().split(String.raw(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n"], ["\\n"])))).join(String.raw(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["<br>\n"], ["<br>\\n"])))), "</span>");
        setPopupHTML(h, "popupPreview", navpop.idNumber);
      } else {
        const p = prepPreviewmaker(download.data, art, navpop);
        p.showPreview();
      }
    }
  };
  const prepPreviewmaker = (data, article, navpop) => {
    const d = anchorize(data, article.anchorString());
    const urlBase = joinPath([pg.wiki.articlebase, article.urlString()]);
    const p = new Previewmaker(d, urlBase, navpop);
    return p;
  };
  const anchorize = (d, anch) => {
    if (!anch) {
      return d;
    }
    const anchRe = new RegExp("(?:=+\\s*".concat(literalizeRegex(anch).replace(/[ _]/g, "[_ ]"), "\\s*=+|\\{\\{\\s*").concat(getValueOf("popupAnchorRegexp"), "\\s*(?:\\|[^|}]*)*?\\s*").concat(literalizeRegex(anch), "\\s*(?:\\|[^}]*)?}})"));
    const match = d.match(anchRe);
    if (match && match.length > 0 && match[0]) {
      return d.slice(Math.max(0, d.indexOf(match[0])));
    }
    const lines = d.split("\n");
    for (let i = 0; i < lines.length; ++i) {
      lines[i] = lines[i].replace(/\[{2}([^\]|]*?\|)?(.*?)]{2}/g, "$2").replace(/'''([^'])/g, "$1").replace(/''([^'])/g, "$1");
      if (anchRe.test(lines[i])) {
        return d.split("\n").slice(i).join("\n").replace(/^[^=]*/, "");
      }
    }
    return d;
  };
  const killPopup = function killPopup2() {
    removeModifierKeyListener(this);
    if (getValueOf("popupShortcutKeys")) {
      rmPopupShortcuts();
    }
    if (!pg) {
      return;
    }
    if (pg.current.link && pg.current.link.navpopup) {
      pg.current.link.navpopup.banish();
    }
    pg.current.link = null;
    abortAllDownloads();
    if (pg.timer.checkPopupPosition) {
      clearInterval(pg.timer.checkPopupPosition);
      pg.timer.checkPopupPosition = null;
    }
    return true;
  };
  class Drag {
    constructor() {
      this.startCondition = null;
      this.endHook = null;
    }
    /**
     * Gets an event in a cross-browser manner.
     *
     * @param {Event} e
     * @private
     */
    static fixE(e) {
      if (e === void 0) {
        e = window.event;
      }
      if (e.layerX === void 0) {
        e.layerX = e.offsetX;
      }
      if (e.layerY === void 0) {
        e.layerY = e.offsetY;
      }
      return e;
    }
    /**
     * Initialises the Drag instance by telling it which object you want to be draggable, and what
     * you want to drag it by.
     *
     * @param {DOMElement} o The "handle" by which <code>oRoot</code> is dragged.
     * @param {DOMElement} oRoot The object which moves when <code>o</code> is dragged, or <code>o</code> if omitted.
     */
    init(o, oRoot) {
      const self = this;
      this.obj = o;
      o.onmousedown = (e) => {
        self.start(e);
      };
      o.dragging = false;
      o.popups_draggable = true;
      o.hmode = true;
      o.vmode = true;
      o.root = oRoot || o;
      if (Number.isNaN(Number.parseInt(o.root.style.left, 10))) {
        o.root.style.left = "0px";
      }
      if (Number.isNaN(Number.parseInt(o.root.style.top, 10))) {
        o.root.style.top = "0px";
      }
      o.root.onthisStart = () => {
      };
      o.root.onthisEnd = () => {
      };
      o.root.onthis = () => {
      };
    }
    /**
     * Starts the drag.
     *
     * @private
     * @param {Event} e
     */
    start(e) {
      const o = this.obj;
      e = Drag.fixE(e);
      if (this.startCondition && !this.startCondition(e)) {
        return;
      }
      const y = Number.parseInt(o.vmode ? o.root.style.top : o.root.style.bottom, 10);
      const x = Number.parseInt(o.hmode ? o.root.style.left : o.root.style.right, 10);
      o.root.onthisStart(x, y);
      o.lastMouseX = e.clientX;
      o.lastMouseY = e.clientY;
      const self = this;
      o.onmousemoveDefault = document.onmousemove;
      o.dragging = true;
      document.onmousemove = (e2) => {
        self.drag(e2);
      };
      document.onmouseup = (e2) => {
        self.end(e2);
      };
      return false;
    }
    /**
     * Does the drag.
     *
     * @param {Event} e
     * @private
     */
    drag(e) {
      e = Drag.fixE(e);
      const o = this.obj;
      const ey = e.clientY;
      const ex = e.clientX;
      const y = Number.parseInt(o.vmode ? o.root.style.top : o.root.style.bottom, 10);
      const x = Number.parseInt(o.hmode ? o.root.style.left : o.root.style.right, 10);
      const nx = x + (ex - o.lastMouseX) * (o.hmode ? 1 : -1);
      const ny = y + (ey - o.lastMouseY) * (o.vmode ? 1 : -1);
      this.obj.root.style[o.hmode ? "left" : "right"] = "".concat(nx, "px");
      this.obj.root.style[o.vmode ? "top" : "bottom"] = "".concat(ny, "px");
      this.obj.lastMouseX = ex;
      this.obj.lastMouseY = ey;
      this.obj.root.onthis(nx, ny);
      return false;
    }
    /**
     * Ends the drag.
     *
     * @private
     */
    end() {
      document.onmousemove = this.obj.onmousemoveDefault;
      document.onmouseup = null;
      this.obj.dragging = false;
      if (this.endHook) {
        this.endHook(Number.parseInt(this.obj.root.style[this.obj.hmode ? "left" : "right"], 10), Number.parseInt(this.obj.root.style[this.obj.vmode ? "top" : "bottom"], 10));
      }
    }
  }
  pg.structures.original = {};
  pg.structures.original.popupLayout = () => {
    return ["popupError", "popupImage", "popupTopLinks", "popupTitle", "popupUserData", "popupData", "popupOtherLinks", "popupRedir", ["popupWarnRedir", "popupRedirTopLinks", "popupRedirTitle", "popupRedirData", "popupRedirOtherLinks"], "popupMiscTools", ["popupRedlink"], "popupPrePreviewSep", "popupPreview", "popupSecondPreview", "popupPreviewMore", "popupPostPreview", "popupFixDab"];
  };
  pg.structures.original.popupRedirSpans = () => {
    return ["popupRedir", "popupWarnRedir", "popupRedirTopLinks", "popupRedirTitle", "popupRedirData", "popupRedirOtherLinks"];
  };
  pg.structures.original.popupTitle = (x) => {
    log("defaultstructure.popupTitle");
    if (!getValueOf("popupNavLinks")) {
      return navlinkStringToHTML("<b><<mainlink>></b>", x.article, x.params);
    }
    return "";
  };
  pg.structures.original.popupTopLinks = (x) => {
    log("defaultstructure.popupTopLinks");
    if (getValueOf("popupNavLinks")) {
      return navLinksHTML(x.article, x.hint, x.params);
    }
    return "";
  };
  pg.structures.original.popupImage = (x) => {
    log("original.popupImage, x.article=".concat(x.article, ", x.navpop.idNumber=").concat(x.navpop.idNumber));
    return imageHTML(x.article, x.navpop.idNumber);
  };
  pg.structures.original.popupRedirTitle = pg.structures.original.popupTitle;
  pg.structures.original.popupRedirTopLinks = pg.structures.original.popupTopLinks;
  const copyStructure = (oldStructure, newStructure) => {
    pg.structures[newStructure] = {};
    for (const prop in pg.structures[oldStructure]) {
      if (!Object.hasOwn(pg.structures[oldStructure], prop)) {
        continue;
      }
      pg.structures[newStructure][prop] = pg.structures[oldStructure][prop];
    }
  };
  copyStructure("original", "nostalgia");
  pg.structures.nostalgia.popupTopLinks = (x) => {
    let str = "";
    str += "<b><<mainlink|shortcut= >></b>";
    str += "if(user){<br><<contribs|shortcut=c>>";
    str += "if(wikimedia){*<<count|shortcut=#>>}";
    str += "if(ipuser){}else{*<<email|shortcut=E>>}if(admin){*<<block|shortcut=b>>}}";
    const editstr = "<<edit|shortcut=e>>";
    const editOldidStr = "if(oldid){<<editOld|shortcut=e>>|<<revert|shortcut=v|rv>>|<<edit|cur>>}else{".concat(editstr, "}");
    const historystr = "<<history|shortcut=h>>";
    const watchstr = "<<unwatch|unwatchShort>>|<<watch|shortcut=w|watchThingy>>";
    str += "<br>if(talk){".concat(editOldidStr, "|<<new|shortcut=+>>*").concat(historystr, "*").concat(watchstr, "*<b><<article|shortcut=a>></b>|<<editArticle|edit>>}else{").concat(
      // not a talk page
      editOldidStr,
      "*"
    ).concat(historystr, "*").concat(watchstr, "*<b><<talk|shortcut=t>></b>|<<editTalk|edit>>|<<newTalk|shortcut=+|new>>}");
    str += "<br><<whatLinksHere|shortcut=l>>*<<relatedChanges|shortcut=r>>";
    str += "if(admin){<br>}else{*}<<move|shortcut=m>>";
    str += "if(admin){*<<unprotect|unprotectShort>>|<<protect|shortcut=p>>*<<undelete|undeleteShort>>|<<delete|shortcut=d>>}";
    return navlinkStringToHTML(str, x.article, x.params);
  };
  pg.structures.nostalgia.popupRedirTopLinks = pg.structures.nostalgia.popupTopLinks;
  copyStructure("original", "fancy");
  pg.structures.fancy.popupTitle = (x) => {
    return navlinkStringToHTML("<font size=+0><<mainlink>></font>", x.article, x.params);
  };
  pg.structures.fancy.popupTopLinks = (x) => {
    const hist = "<<history|shortcut=h|hist>>|<<lastEdit|shortcut=/|last>>|<<editors|shortcut=E|eds>>";
    const watch = "<<unwatch|unwatchShort>>|<<watch|shortcut=w|watchThingy>>";
    const move = "<<move|shortcut=m|move>>";
    return navlinkStringToHTML("if(talk){<<edit|shortcut=e>>|<<new|shortcut=+|+>>*".concat(hist, "*<<article|shortcut=a>>|<<editArticle|edit>>*").concat(watch, "*").concat(move, "}else{<<edit|shortcut=e>>*").concat(hist, "*<<talk|shortcut=t|>>|<<editTalk|edit>>|<<newTalk|shortcut=+|new>>*").concat(watch, "*").concat(move, "}<br>"), x.article, x.params);
  };
  pg.structures.fancy.popupOtherLinks = (x) => {
    const admin = "<<unprotect|unprotectShort>>|<<protect|shortcut=p>>*<<undelete|undeleteShort>>|<<delete|shortcut=d|del>>";
    let user = "<<contribs|shortcut=c>>if(wikimedia){|<<count|shortcut=#|#>>}";
    user += "if(ipuser){|<<arin>>}else{*<<email|shortcut=E|".concat(popupString("email"), ">>}if(admin){*<<block|shortcut=b>>}");
    const normal = "<<whatLinksHere|shortcut=l|links here>>*<<relatedChanges|shortcut=r|related>>";
    return navlinkStringToHTML("<br>if(user){".concat(user, "*}if(admin){").concat(admin, "if(user){<br>}else{*}}").concat(normal), x.article, x.params);
  };
  pg.structures.fancy.popupRedirTitle = pg.structures.fancy.popupTitle;
  pg.structures.fancy.popupRedirTopLinks = pg.structures.fancy.popupTopLinks;
  pg.structures.fancy.popupRedirOtherLinks = pg.structures.fancy.popupOtherLinks;
  copyStructure("fancy", "fancy2");
  pg.structures.fancy2.popupTopLinks = // hack out the <br> at the end and put one at the beginning
  (x) => {
    return "<br>".concat(pg.structures.fancy.popupTopLinks(x).replace(/<br>$/i, ""));
  };
  pg.structures.fancy2.popupLayout = () => {
    return ["popupError", "popupImage", "popupTitle", "popupUserData", "popupData", "popupTopLinks", "popupOtherLinks", "popupRedir", ["popupWarnRedir", "popupRedirTopLinks", "popupRedirTitle", "popupRedirData", "popupRedirOtherLinks"], "popupMiscTools", ["popupRedlink"], "popupPrePreviewSep", "popupPreview", "popupSecondPreview", "popupPreviewMore", "popupPostPreview", "popupFixDab"];
  };
  copyStructure("original", "menus");
  pg.structures.menus.popupLayout = () => {
    return ["popupError", "popupImage", "popupTopLinks", "popupTitle", "popupOtherLinks", "popupRedir", ["popupWarnRedir", "popupRedirTopLinks", "popupRedirTitle", "popupRedirData", "popupRedirOtherLinks"], "popupUserData", "popupData", "popupMiscTools", ["popupRedlink"], "popupPrePreviewSep", "popupPreview", "popupSecondPreview", "popupPreviewMore", "popupPostPreview", "popupFixDab"];
  };
  pg.structures.menus.popupTopLinks = (x, shorter) => {
    const s = [];
    const dropdiv = '<div class="popup_drop">';
    const enddiv = "</div>";
    let hist = "<<history|shortcut=h>>";
    if (!shorter) {
      hist = "<menurow>".concat(hist, "|<<historyfeed|rss>>|<<editors|shortcut=E>></menurow>");
    }
    const lastedit = "<<lastEdit|shortcut=/|show last edit>>";
    const thank = "if(diff){<<thank|send thanks>>}";
    const jsHistory = "<<lastContrib|last set of edits>><<sinceMe|changes since mine>>";
    const linkshere = "<<whatLinksHere|shortcut=l|what links here>>";
    const related = "<<relatedChanges|shortcut=r|related changes>>";
    const search = "<menurow><<search|shortcut=s>></menurow>";
    const watch = "<menurow><<unwatch|unwatchShort>>|<<watch|shortcut=w|watchThingy>></menurow>";
    const protect = "<menurow><<unprotect|unprotectShort>>|<<protect|shortcut=p>>|<<protectlog|log>></menurow>";
    const del = "<menurow><<undelete|undeleteShort>>|<<delete|shortcut=d>>|<<deletelog|log>></menurow>";
    const move = "<<move|shortcut=m|move page>>";
    const nullPurge = "<menurow><<nullEdit|shortcut=n|null edit>>|<<purge|shortcut=P>></menurow>";
    const viewOptions = "<menurow><<view|shortcut=v>>|<<render|shortcut=S>>|<<raw>></menurow>";
    const editRow = "if(oldid){<menurow><<edit|shortcut=e>>|<<editOld|shortcut=e|this&nbsp;revision>></menurow><menurow><<revert|shortcut=v>>|<<undo>></menurow>}else{<<edit|shortcut=e>>}";
    const markPatrolled = "if(rcid){<<markpatrolled|mark patrolled>>}";
    const newTopic = "if(talk){<<new|shortcut=+|new topic>>}";
    const protectDelete = "if(admin){".concat(protect).concat(del, "}");
    if (getValueOf("popupActionsMenu")) {
      s.push("<<mainlink>>*".concat(dropdiv).concat(menuTitle("actions")));
    } else {
      s.push("".concat(dropdiv, "<<mainlink>>"));
    }
    s.push("<menu>", editRow + markPatrolled + newTopic + hist + lastedit + thank);
    if (!shorter) {
      s.push(jsHistory);
    }
    s.push(move + linkshere + related);
    if (!shorter) {
      s.push(nullPurge + search);
    }
    if (!shorter) {
      s.push(viewOptions);
    }
    s.push("<hr>".concat(watch).concat(protectDelete), "<hr>if(talk){<<article|shortcut=a|view article>><<editArticle|edit article>>}else{<<talk|shortcut=t|talk page>><<editTalk|edit talk>><<newTalk|shortcut=+|new topic>>}</menu>".concat(enddiv));
    const email = "<<email|shortcut=E|email user>>";
    const contribs = "if(wikimedia){<menurow>}<<contribs|shortcut=c|contributions>>if(wikimedia){</menurow>}if(admin){<menurow><<deletedContribs>></menurow>}";
    s.push("if(user){*".concat(dropdiv).concat(menuTitle("user")), "<menu>", "<menurow><<userPage|shortcut=u|user&nbsp;page>>|<<userSpace|space>></menurow>", "<<userTalk|shortcut=t|user talk>><<editUserTalk|edit user talk>><<newUserTalk|shortcut=+|leave comment>>");
    if (shorter) {
      s.push("if(ipuser){}else{".concat(email, "}"));
    } else {
      s.push("if(ipuser){<<arin>>}else{".concat(email, "}"));
    }
    s.push("<hr>".concat(contribs, "<<userlog|shortcut=L|user log>>"), "if(wikimedia){<<count|shortcut=#|edit counter>>}", "if(admin){<menurow><<unblock|unblockShort>>|<<block|shortcut=b|block user>></menurow>}", "<<blocklog|shortcut=B|block log>>", "</menu>".concat(enddiv, "}"));
    if (getValueOf("popupSetupMenu") && !x.navpop.hasPopupMenu) {
      x.navpop.hasPopupMenu = true;
      s.push("*".concat(dropdiv).concat(menuTitle("popupsMenu"), "<menu>"), "<<togglePreviews|toggle previews>>", "<<purgePopups|reset>>", "<<disablePopups|disable>>", "</menu>".concat(enddiv));
    }
    return navlinkStringToHTML(s.join(""), x.article, x.params);
  };
  const menuTitle = (s) => {
    return '<a href="#" noPopup=1>'.concat(popupString(s), "</a>");
  };
  pg.structures.menus.popupRedirTitle = pg.structures.menus.popupTitle;
  pg.structures.menus.popupRedirTopLinks = pg.structures.menus.popupTopLinks;
  copyStructure("menus", "shortmenus");
  pg.structures.shortmenus.popupTopLinks = (x) => {
    return pg.structures.menus.popupTopLinks(x, true);
  };
  pg.structures.shortmenus.popupRedirTopLinks = pg.structures.shortmenus.popupTopLinks;
  pg.structures.lite = {};
  pg.structures.lite.popupLayout = () => {
    return ["popupTitle", "popupPreview"];
  };
  pg.structures.lite.popupTitle = (x) => {
    log("".concat(x.article, ": structures.lite.popupTitle"));
    return '<div><span class="popup_mainlink"><b>'.concat(x.article.toString(), "</b></span></div>");
  };
  const substitute = (data, cmdBody) => {
    const fromRe = new RegExp(cmdBody.from, cmdBody.flags);
    return data.replace(fromRe, cmdBody.to);
  };
  const execCmds = (data, cmdList) => {
    var _iterator = _createForOfIteratorHelper(cmdList), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        const element = _step.value;
        data = element.action(data, element);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return data;
  };
  const parseCmd = function parseCmd2(str) {
    if (str.length === 0) {
      return [];
    }
    let p = false;
    switch (str.charAt(0)) {
      case "s":
        p = parseSubstitute(str);
        break;
      default:
        return false;
    }
    if (p) {
      return [p, parseCmd2(p.remainder)];
    }
    return false;
  };
  const unEscape = (str, sep) => {
    return str.split("\\\\").join("\\").split("\\".concat(sep)).join(sep).split(String.raw(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n"], ["\\n"])))).join("\n");
  };
  const parseSubstitute = (str) => {
    let from;
    let to;
    let flags;
    let tmp;
    if (str.length < 4) {
      return false;
    }
    const sep = str.charAt(1);
    str = str.slice(2);
    tmp = skipOver(str, sep);
    if (tmp) {
      from = tmp.segment;
      str = tmp.remainder;
    } else {
      return false;
    }
    tmp = skipOver(str, sep);
    if (tmp) {
      to = tmp.segment;
      str = tmp.remainder;
    } else {
      return false;
    }
    flags = "";
    if (str.length > 0) {
      tmp = skipOver(str, ";") || skipToEnd(str, ";");
      if (tmp) {
        flags = tmp.segment;
        str = tmp.remainder;
      }
    }
    return {
      action: substitute,
      from,
      to,
      flags,
      remainder: str
    };
  };
  const skipOver = (str, sep) => {
    const endSegment = findNext(str, sep);
    if (endSegment < 0) {
      return false;
    }
    const segment = unEscape(str.slice(0, Math.max(0, endSegment)), sep);
    return {
      segment,
      remainder: str.slice(Math.max(0, endSegment + 1))
    };
  };
  const skipToEnd = (str, _sep) => {
    return {
      segment: str,
      remainder: ""
    };
  };
  const findNext = (str, ch) => {
    for (let i = 0; i < str.length; ++i) {
      if (str.charAt(i) === "\\") {
        i += 2;
      }
      if (str.charAt(i) === ch) {
        return i;
      }
    }
    return -1;
  };
  const setCheckbox = (param, box) => {
    const val = mw.util.getParamValue(param);
    if (val) {
      switch (val) {
        case "1":
        case "yes":
        case "true":
          box.checked = true;
          break;
        case "0":
        case "no":
        case "false":
          box.checked = false;
      }
    }
  };
  const autoEdit = function autoEdit4() {
    setupPopups(() => {
      if (mw.util.getParamValue("autoimpl") !== popupString("autoedit_version")) {
        return false;
      }
      if (mw.util.getParamValue("autowatchlist") && mw.util.getParamValue("actoken") === autoClickToken()) {
        pg.fn.modifyWatchlist(mw.util.getParamValue("title"), mw.util.getParamValue("action"));
      }
      if (!document.editform) {
        return false;
      }
      if (autoEdit4.alreadyRan) {
        return false;
      }
      autoEdit4.alreadyRan = true;
      const cmdString = mw.util.getParamValue("autoedit");
      if (cmdString) {
        try {
          const editbox = document.editform.wpTextbox1;
          const cmdList = parseCmd(cmdString);
          const input = editbox.value;
          const output = execCmds(input, cmdList);
          editbox.value = output;
        } catch {
          return;
        }
      }
      setCheckbox("autominor", document.editform.wpMinoredit);
      setCheckbox("autowatch", document.editform.wpWatchthis);
      const rvid = mw.util.getParamValue("autorv");
      if (rvid) {
        const url = "".concat(pg.wiki.apiwikibase, "?action=query&format=json&formatversion=2&prop=revisions&revids=").concat(rvid);
        startDownload(url, null, autoEdit2);
      } else {
        autoEdit2();
      }
    });
  };
  const autoEdit2 = (d) => {
    let summary = mw.util.getParamValue("autosummary");
    let summaryprompt = mw.util.getParamValue("autosummaryprompt");
    let summarynotice = "";
    if (d && d.data && mw.util.getParamValue("autorv")) {
      const s = getRvSummary(summary, d.data);
      if (s === false) {
        summaryprompt = true;
        summarynotice = popupString("Failed to get revision information, please edit manually.\n\n");
        summary = simplePrintf(summary, [mw.util.getParamValue("autorv"), "(unknown)", "(unknown)"]);
      } else {
        summary = s;
      }
    }
    if (summaryprompt) {
      const txt = summarynotice + popupString("Enter a non-empty edit summary or press cancel to abort");
      const response = prompt(txt, summary);
      if (response) {
        summary = response;
      } else {
        return;
      }
    }
    if (summary) {
      document.editform.wpSummary.value = summary;
    }
    setTimeout(autoEdit3, 100);
  };
  const autoClickToken = () => {
    return mw.user.sessionId();
  };
  const autoEdit3 = () => {
    if (mw.util.getParamValue("actoken") !== autoClickToken()) {
      return;
    }
    const btn = mw.util.getParamValue("autoclick");
    if (btn) {
      if (document.editform && document.editform[btn]) {
        const button = document.editform[btn];
        const msg = tprintf("The %s button has been automatically clicked. Please wait for the next page to load.", [button.value]);
        bannerMessage(msg);
        document.title = "(".concat(document.title, ")");
        button.click();
      } else {
        void mw.notify(tprintf("Could not find button %s. Please check the settings in your javascript file.", [btn]), {
          tag: "popups",
          type: "error"
        });
      }
    }
  };
  const bannerMessage = (s) => {
    const headings = document.querySelectorAll("h1");
    if (headings) {
      const div = document.createElement("div");
      div.innerHTML = "<font size=+1><b>".concat(pg.escapeQuotesHTML(s), "</b></font>");
      headings[0].parentNode.insertBefore(div, headings[0]);
    }
  };
  const getRvSummary = (template, json) => {
    try {
      const o = getJsObj(json);
      const [edit] = anyChild(o.query.pages).revisions;
      const timestamp = edit.timestamp.split(/[A-Z]/g).join(" ").replace(/^ *| *$/g, "");
      return simplePrintf(template, [edit.revid, timestamp, edit.userhidden ? "(hidden)" : edit.user]);
    } catch {
      return false;
    }
  };
  class Downloader {
    constructor(url) {
      if (typeof XMLHttpRequest !== "undefined") {
        this.http = new XMLHttpRequest();
      }
      this.url = url;
      this.id = null;
      this.lastModified = null;
      this.callbackFunction = null;
      this.onFailure = null;
      this.aborted = false;
      this.method = "GET";
      this.async = true;
    }
    /**
     * Submits the http request.
     *
     * @param {*} x
     */
    send(x) {
      if (!this.http) {
        return null;
      }
      return this.http.send(x);
    }
    /* Aborts the download, setting the <code>aborted</code> field to true. */
    abort() {
      if (!this.http) {
        return null;
      }
      this.aborted = true;
      return this.http.abort();
    }
    /** Returns the downloaded data. */
    getData() {
      if (!this.http) {
        return null;
      }
      return this.http.responseText;
    }
    /** Prepares the download. */
    setTarget() {
      if (!this.http) {
        return null;
      }
      this.http.open(this.method, this.url, this.async);
      this.http.setRequestHeader("Api-User-Agent", pg.api.userAgent);
    }
    /** Gets the state of the download. */
    getReadyState() {
      if (!this.http) {
        return null;
      }
      return this.http.readyState;
    }
    /**
     * Starts the download.
     * Note that setTarget {@source Downloader#setTarget} must be run first
     */
    start() {
      if (!this.http) {
        return;
      }
      const self = this;
      pg.misc.downloadsInProgress[this.id] = self;
      this.http.send(null);
    }
    /**
     * Gets the 'Last-Modified' date from the download headers.
     * Should be run after the download completes.
     * Returns <code>null</code> on failure.
     *
     * @return {Date}
     */
    getLastModifiedDate() {
      if (!this.http) {
        return null;
      }
      let lastmod;
      try {
        lastmod = this.http.getResponseHeader("Last-Modified");
      } catch {
      }
      if (lastmod) {
        return new Date(lastmod);
      }
      return null;
    }
    /**
     * Sets the callback function.
     *
     * @param {Function} f callback function, called as <code>f(this)</code> on success
     */
    setCallback(f) {
      if (!this.http) {
        return;
      }
      this.http.onreadystatechange = f;
    }
    getStatus() {
      if (!this.http) {
        return null;
      }
      return this.http.status;
    }
  }
  new Downloader();
  pg.misc.downloadsInProgress = {};
  const newDownload = function newDownload2(url, id, callback, onfailure) {
    const d = new Downloader(url);
    if (!d.http) {
      return "ohdear";
    }
    d.id = id;
    d.setTarget();
    onfailure || (onfailure = 2);
    const f = function() {
      if (d.getReadyState() === 4) {
        delete pg.misc.downloadsInProgress[this.id];
        try {
          if (d.getStatus() === 200) {
            d.data = d.getData();
            d.lastModified = d.getLastModifiedDate();
            callback(d);
          } else if (typeof onfailure === "number") {
            if (onfailure > 0) {
              newDownload2(url, id, callback, onfailure - 1);
            }
          } else if (typeof onfailure === "function") {
            onfailure(d, url, id, callback);
          }
        } catch {
        }
      }
    };
    d.setCallback(f);
    return d;
  };
  const fakeDownload = (url, id, callback, data, lastModified, owner) => {
    const d = newDownload(url, callback);
    d.owner = owner;
    d.id = id;
    d.data = data;
    d.lastModified = lastModified;
    return callback(d);
  };
  const startDownload = (url, id, callback) => {
    const d = newDownload(url, id, callback);
    if (typeof d === "string") {
      return d;
    }
    d.start();
    return d;
  };
  const abortAllDownloads = () => {
    for (const x in pg.misc.downloadsInProgress) {
      if (!Object.hasOwn(pg.misc.downloadsInProgress, x)) {
        continue;
      }
      try {
        pg.misc.downloadsInProgress[x].aborted = true;
        pg.misc.downloadsInProgress[x].abort();
        delete pg.misc.downloadsInProgress[x];
      } catch {
      }
    }
  };
  const Insta = {};
  const setupLivePreview = () => {
    var _Insta$conf$user;
    let _b;
    Insta.conf = {
      baseUrl: "",
      user: {},
      wiki: {
        lang: pg.wiki.lang,
        interwiki: pg.wiki.interwiki,
        default_thumb_width: 180
      },
      paths: {
        articles: "".concat(pg.wiki.articlePath, "/"),
        // Only used for Insta previews with images. (not in popups)
        math: "/math/",
        images: "https://image.youshou.wiki/",
        images_fallback: "//wm.zhongwen.wiki/commons/"
      },
      locale: {
        user: mw.config.get("wgFormattedNamespaces")[pg.nsUserId],
        image: mw.config.get("wgFormattedNamespaces")[pg.nsImageId],
        category: mw.config.get("wgFormattedNamespaces")[pg.nsCategoryId],
        // shouldn't be used in popup previews, i think
        months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      }
    };
    (_Insta$conf$user = Insta.conf.user).name || (_Insta$conf$user.name = "YouShou Archives contributors");
    Insta.conf.user.signature = "[[".concat(Insta.conf.locale.user, ":").concat(Insta.conf.user.name, "|").concat(Insta.conf.user.name, "]]");
    Insta.BLOCK_IMAGE = new RegExp("^\\[\\[(?:File|Image|".concat(Insta.conf.locale.image, "):.*?\\|.*?(?:frame|thumbnail|thumb|none|right|left|center)"), "i");
  };
  Insta.dump = function(from, to) {
    if (typeof from === "string") {
      from = document.querySelector("#".concat(from));
    }
    if (typeof to === "string") {
      to = document.querySelector("#".concat(to));
    }
    to.innerHTML = this.convert(from.value);
  };
  Insta.convert = (wiki) => {
    const ll = typeof wiki === "string" ? wiki.replace(/\r/g, "").split(/\n/) : wiki;
    let o = "";
    let p = 0;
    let r;
    const remain = () => {
      return ll.length;
    };
    const sh = () => {
      return ll.shift();
    };
    const ps = (s) => {
      o += s;
    };
    const f = function f2(...args) {
      let i = 1;
      const a = args;
      let [f3] = a;
      let o2 = "";
      let c;
      let p2;
      for (; i < a.length; i++) {
        if ((p2 = f3.indexOf("?")) + 1) {
          c = f3.charAt(p2 + 1) === "?" ? 1 : 0;
          i -= c;
          o2 += f3.slice(0, Math.max(0, p2)) + (c ? "?" : a[i]);
          f3 = f3.slice(p2 + 1 + c);
        } else {
          break;
        }
      }
      return o2 + f3;
    };
    const html_entities = (s) => {
      return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    };
    const htmlescape_text = (s) => {
      return s.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/:/g, "&#58;").replace(/\[/g, "&#91;").replace(/]/g, "&#93;");
    };
    const htmlescape_attr = (s) => {
      return htmlescape_text(s).replace(/'/g, "&#39;").replace(/"/g, "&quot;");
    };
    const str_imatch = (a, b) => {
      let i;
      let l;
      for (i = 0, l = Math.min(a.length, b.length); i < l; i++) {
        if (a.charAt(i) !== b.charAt(i)) {
          break;
        }
      }
      return i;
    };
    const compareLineStringOrReg = (c) => {
      return typeof c === "string" ? ll[0] && ll[0].slice(0, c.length) === c : r = ll[0] && ll[0].match(c);
    };
    const compareLineString = (c) => {
      return ll[0] === c;
    };
    const charAtPoint = (p2) => {
      return ll[0].charAt(p2);
    };
    const endl = (s) => {
      ps(s);
      sh();
    };
    const parse_list = () => {
      let prev = "";
      while (remain() && compareLineStringOrReg(/^([#*:;]+)(.*)$/)) {
        const l_match = r;
        sh();
        const ipos = str_imatch(prev, l_match[1]);
        for (let prevPos = prev.length - 1; prevPos >= ipos; prevPos--) {
          const pi = prev.charAt(prevPos);
          if (pi === "*") {
            ps("</ul>");
          } else if (pi === "#") {
            ps("</ol>");
          } else if (["", "*", "#"].indexOf(l_match[1].charAt(prevPos))) {
            ps("</dl>");
          }
        }
        for (let matchPos = ipos; matchPos < l_match[1].length; matchPos++) {
          const li = l_match[1].charAt(matchPos);
          if (li === "*") {
            ps("<ul>");
          } else if (li === "#") {
            ps("<ol>");
          } else if (["", "*", "#"].indexOf(prev.charAt(matchPos))) {
            ps("<dl>");
          }
        }
        switch (l_match[1].at(-1)) {
          case "*":
          case "#":
            ps("<li>".concat(parse_inline_nowiki(l_match[2])));
            break;
          case ";": {
            ps("<dt>");
            const dt_match = l_match[2].match(/(.*?)(:.*?)$/);
            if (dt_match) {
              ps(parse_inline_nowiki(dt_match[1]));
              ll.unshift(dt_match[2]);
            } else {
              ps(parse_inline_nowiki(l_match[2]));
            }
            break;
          }
          case ":":
            ps("<dd>".concat(parse_inline_nowiki(l_match[2])));
        }
        [, prev] = l_match;
      }
      for (let i = prev.length - 1; i >= 0; i--) {
        ps(f("</?>", prev.charAt(i) === "*" ? "ul" : prev.charAt(i) === "#" ? "ol" : "dl"));
      }
    };
    const parse_table = () => {
      endl(f("<table>", compareLineStringOrReg(/^{\|( .*)$/) ? r[1] : ""));
      for (; remain(); ) {
        if (compareLineStringOrReg("|")) {
          switch (charAtPoint(1)) {
            case "}":
              endl("</table>");
              return;
            case "-":
              endl(f("<tr>", compareLineStringOrReg(/\|-*(.*)/)[1]));
              break;
            default:
              parse_table_data();
          }
        } else if (compareLineStringOrReg("!")) {
          parse_table_data();
        } else {
          sh();
        }
      }
    };
    const parse_table_data = () => {
      let td_line;
      let match_i;
      const td_match = sh().match(/^(\|\+|\||!)((?:([^[|]*?)\|(?!\|))?(.*))$/);
      if (td_match[1] === "|+") {
        ps("<caption");
      } else {
        ps("<t".concat(td_match[1] === "|" ? "d" : "h"));
      }
      if (td_match[3]) {
        match_i = 4;
      } else {
        match_i = 2;
      }
      ps(">");
      if (td_match[1] === "|+") {
        ps(parse_inline_nowiki(td_match[match_i]));
      } else {
        td_line = td_match[match_i].split(td_match[1] === "|" ? "||" : /\|\||!!/);
        ps(parse_inline_nowiki(td_line.shift()));
        while (td_line.length > 0) {
          ll.unshift(td_match[1] + td_line.pop());
        }
      }
      let tc = 0;
      const td = [];
      while (remain()) {
        td.push(sh());
        if (compareLineStringOrReg("|")) {
          if (!tc) {
            break;
          } else if (charAtPoint(1) === "}") {
            tc--;
          }
        } else if (!tc && compareLineStringOrReg("!")) {
          break;
        } else if (compareLineStringOrReg("{|")) {
          tc++;
        }
      }
      if (td.length > 0) {
        ps(Insta.convert(td));
      }
    };
    const parse_pre = () => {
      ps("<pre>");
      do {
        endl("".concat(parse_inline_nowiki(ll[0].slice(1)), "\n"));
      } while (remain() && compareLineStringOrReg(" "));
      ps("</pre>");
    };
    const parse_block_image = () => {
      ps(parse_image(sh()));
    };
    const parse_image = (str) => {
      let tag = str.substring(str.indexOf(":") + 1, str.length - 2);
      let width;
      let attr = [];
      let filename;
      let caption = "";
      let thumb = 0;
      let frame = 0;
      let center = 0;
      let align = "";
      if (/\|/.test(tag)) {
        let nesting = 0;
        let last_attr;
        for (let i = tag.length - 1; i > 0; i--) {
          if (tag.charAt(i) === "|" && !nesting) {
            last_attr = tag.slice(i + 1);
            tag = tag.slice(0, Math.max(0, i));
            break;
          } else {
            switch (tag.slice(i - 1, i - 1 + 2)) {
              case "]]":
                nesting++;
                i--;
                break;
              case "[[":
                nesting--;
                i--;
            }
          }
        }
        attr = tag.split(/\s*\|\s*/);
        attr.push(last_attr);
        filename = attr.shift();
        let w_match;
        for (; attr.length > 0; attr.shift()) {
          w_match = attr[0].match(/^(\d*)(?:[px]*\d*)?px$/);
          if (w_match) {
            [, width] = w_match;
          } else {
            switch (attr[0]) {
              case "thumb":
              case "thumbnail":
                thumb = true;
                frame = true;
                break;
              case "frame":
                frame = true;
                break;
              case "none":
              case "right":
              case "left":
                center = false;
                [align] = attr;
                break;
              case "center":
                center = true;
                align = "none";
                break;
              default:
                if (attr.length === 1) {
                  [caption] = attr;
                }
            }
          }
        }
      } else {
        filename = tag;
      }
      return "";
    };
    const parse_inline_nowiki = (str) => {
      let start;
      let lastend = 0;
      let substart = 0;
      let nestlev = 0;
      let open;
      let close;
      let subloop;
      let html = "";
      while ((start = str.indexOf("<no".concat("wiki", ">"), substart)) !== -1) {
        html += parse_inline_wiki(str.substring(lastend, start));
        start += 8;
        substart = start;
        subloop = true;
        do {
          open = str.indexOf("<no".concat("wiki", ">"), substart);
          close = str.indexOf("</no".concat("wiki", ">"), substart);
          if (close <= open || open === -1) {
            if (close === -1) {
              return html + html_entities(str.slice(start));
            }
            substart = close + 9;
            if (nestlev) {
              nestlev--;
            } else {
              lastend = substart;
              html += html_entities(str.substring(start, lastend - 9));
              subloop = false;
            }
          } else {
            substart = open + 8;
            nestlev++;
          }
        } while (subloop);
      }
      return html + parse_inline_wiki(str.slice(lastend));
    };
    const parse_inline_images = (str) => {
      let start;
      let substart = 0;
      let nestlev = 0;
      let loop;
      let close;
      let open;
      let wiki2;
      let html;
      while ((start = str.indexOf("[[", substart)) !== -1) {
        if (new RegExp("^(Image|File|".concat(Insta.conf.locale.image, "):"), "i").test(str.slice(start + 2))) {
          loop = true;
          substart = start;
          do {
            substart += 2;
            close = str.indexOf("]]", substart);
            open = str.indexOf("[[", substart);
            if (close <= open || open === -1) {
              if (close === -1) {
                return str;
              }
              substart = close;
              if (nestlev) {
                nestlev--;
              } else {
                wiki2 = str.substring(start, close + 2);
                html = parse_image(wiki2);
                str = str.replace(wiki2, html);
                substart = start + html.length;
                loop = false;
              }
            } else {
              substart = open;
              nestlev++;
            }
          } while (loop);
        } else {
          break;
        }
      }
      return str;
    };
    const parse_inline_formatting = (str) => {
      let em;
      let st;
      let i;
      let li;
      let o2 = "";
      while ((i = str.indexOf("''", li)) + 1) {
        o2 += str.substring(li, i);
        li = i + 2;
        if (str.charAt(i + 2) === "'") {
          li++;
          st = !st;
          o2 += st ? "<strong>" : "</strong>";
        } else {
          em = !em;
          o2 += em ? "<em>" : "</em>";
        }
      }
      return o2 + str.slice(li);
    };
    const parse_inline_wiki = (str) => {
      str = parse_inline_images(str);
      str = parse_inline_formatting(str);
      str = str.replace(/<math>(.*?)<\/math>/gi, "");
      let date = /* @__PURE__ */ new Date();
      let minutes = date.getUTCMinutes();
      if (minutes < 10) {
        minutes = "0".concat(minutes);
      }
      date = f("?:?, ? ? ? (UTC)", date.getUTCHours(), minutes, date.getUTCDate(), Insta.conf.locale.months[date.getUTCMonth()], date.getUTCFullYear());
      return str.replace(/~{5}(?!~)/g, date).replace(/~{4}(?!~)/g, "".concat(Insta.conf.user.name, " ").concat(date)).replace(/~{3}(?!~)/g, Insta.conf.user.name).replace(new RegExp("\\[\\[:((?:".concat(Insta.conf.locale.category, "|Image|File|").concat(Insta.conf.locale.image, "|").concat(Insta.conf.wiki.interwiki, "):[^|]*?)\\]\\](\\w*)"), "gi"), (_$0, $1, $2) => {
        return f("<a href='?'>?</a>", Insta.conf.paths.articles + htmlescape_attr($1), htmlescape_text($1) + htmlescape_text($2));
      }).replace(new RegExp("\\[\\[(?:".concat(Insta.conf.locale.category, "|").concat(Insta.conf.wiki.interwiki, "):.*?\\]\\]"), "gi"), "").replace(new RegExp("\\[\\[:((?:".concat(Insta.conf.locale.category, "|Image|File|").concat(Insta.conf.locale.image, "|").concat(Insta.conf.wiki.interwiki, "):.*?)\\|([^\\]]+?)\\]\\](\\w*)"), "gi"), (_$0, $1, $2, $3) => {
        return f("<a href='?'>?</a>", Insta.conf.paths.articles + htmlescape_attr($1), htmlescape_text($2) + htmlescape_text($3));
      }).replace(/\[\[(\/[^|]*?)]]/g, (_$0, $1) => {
        return f("<a href='?'>?</a>", Insta.conf.baseUrl + htmlescape_attr($1), htmlescape_text($1));
      }).replace(/\[\[(\/.*?)\|(.+?)]]/g, (_$0, $1, $2) => {
        return f("<a href='?'>?</a>", Insta.conf.baseUrl + htmlescape_attr($1), htmlescape_text($2));
      }).replace(/\[\[([^[|]*?)]](\w*)/g, (_$0, $1, $2) => {
        return f("<a href='?'>?</a>", Insta.conf.paths.articles + htmlescape_attr($1), htmlescape_text($1) + htmlescape_text($2));
      }).replace(/\[\[([^[]*?)\|([^\]]+?)]](\w*)/g, (_$0, $1, $2, $3) => {
        return f("<a href='?'>?</a>", Insta.conf.paths.articles + htmlescape_attr($1), htmlescape_text($2) + htmlescape_text($3));
      }).replace(/\[\[([^\]]*?:)?(.*?)( *\(.*?\))?\|]]/g, (_$0, $1, $2, $3) => {
        return f("<a href='?'>?</a>", Insta.conf.paths.articles + htmlescape_attr($1) + htmlescape_attr($2) + htmlescape_attr($3), htmlescape_text($2));
      }).replace(/\[(https?|news|ftp|mailto|gopher|irc):(\/*)([^\]]*?) (.*?)]/g, (_$0, $1, $2, $3, $4) => {
        return f("<a class='external' href='?:?'>?</a>", htmlescape_attr($1), htmlescape_attr($2) + htmlescape_attr($3), htmlescape_text($4));
      }).replace(/\[http:\/\/(.*?)]/g, (_$0, $1) => {
        return f("<a class='external' href='http://?'>[#]</a>", htmlescape_attr($1));
      }).replace(/\[(news|ftp|mailto|gopher|irc):(\/*)(.*?)]/g, (_$0, $1, $2, $3) => {
        return f("<a class='external' href='?:?'>?:?</a>", htmlescape_attr($1), htmlescape_attr($2) + htmlescape_attr($3), htmlescape_text($1), htmlescape_text($2) + htmlescape_text($3));
      }).replace(/(^| )(https?|news|ftp|mailto|gopher|irc):(\/*)([^ $]*[^ !$,.:;?])/g, (_$0, $1, $2, $3, $4) => {
        return f("?<a class='external' href='?:?'>?:?</a>", htmlescape_text($1), htmlescape_attr($2), htmlescape_attr($3) + htmlescape_attr($4), htmlescape_text($2), htmlescape_text($3) + htmlescape_text($4));
      }).replace("__NOTOC__", "").replace("__NOINDEX__", "").replace("__INDEX__", "").replace("__NOEDITSECTION__", "");
    };
    for (; remain(); ) {
      if (compareLineStringOrReg(/^(={1,6})(.*)\1(.*)$/)) {
        p = 0;
        endl(f("<h?>?</h?>?", r[1].length, parse_inline_nowiki(r[2]), r[1].length, r[3]));
      } else if (compareLineStringOrReg(/^[#*:;]/)) {
        p = 0;
        parse_list();
      } else if (compareLineStringOrReg(" ")) {
        p = 0;
        parse_pre();
      } else if (compareLineStringOrReg("{|")) {
        p = 0;
        parse_table();
      } else if (compareLineStringOrReg(/^----+$/)) {
        p = 0;
        endl("<hr>");
      } else if (compareLineStringOrReg(Insta.BLOCK_IMAGE)) {
        p = 0;
        parse_block_image();
      } else {
        if (compareLineString("")) {
          p = remain() > 1 && ll[1] === "";
          if (p) {
            endl("<p><br>");
          }
        } else {
          if (!p) {
            ps("<p>");
            p = 1;
          }
          ps("".concat(parse_inline_nowiki(ll[0]), " "));
        }
        sh();
      }
    }
    return o;
  };
  const wiki2html = (txt, baseurl) => {
    Insta.conf.baseUrl = baseurl;
    return Insta.convert(txt);
  };
  const popupFilterPageSize = (data) => {
    return formatBytes(data.length);
  };
  const popupFilterCountLinks = (data) => {
    const num = countLinks(data);
    return "".concat(String(num), "&nbsp;").concat(num === 1 ? popupString("wikiLink") : popupString("wikiLinks"));
  };
  const popupFilterCountImages = (data) => {
    const num = countImages(data);
    return "".concat(String(num), "&nbsp;").concat(num === 1 ? popupString("image") : popupString("images"));
  };
  const popupFilterCountCategories = (data) => {
    const num = countCategories(data);
    return "".concat(String(num), "&nbsp;").concat(num === 1 ? popupString("category") : popupString("categories"));
  };
  const popupFilterLastModified = (_data, download) => {
    const lastmod = download.lastModified;
    const now = /* @__PURE__ */ new Date();
    const age = now - lastmod;
    if (lastmod && getValueOf("popupLastModified")) {
      return tprintf("%s old", [formatAge(age)]).replace(/ /g, "&nbsp;");
    }
    return "";
  };
  const formatAge = (age) => {
    let a = 0 + age;
    const aa = a;
    const seclen = 1e3;
    const minlen = 60 * seclen;
    const hourlen = 60 * minlen;
    const daylen = 24 * hourlen;
    const weeklen = 7 * daylen;
    const numweeks = (a - a % weeklen) / weeklen;
    a -= numweeks * weeklen;
    const sweeks = addunit(numweeks, "week");
    const numdays = (a - a % daylen) / daylen;
    a -= numdays * daylen;
    const sdays = addunit(numdays, "day");
    const numhours = (a - a % hourlen) / hourlen;
    a -= numhours * hourlen;
    const shours = addunit(numhours, "hour");
    const nummins = (a - a % minlen) / minlen;
    a -= nummins * minlen;
    const smins = addunit(nummins, "minute");
    const numsecs = (a - a % seclen) / seclen;
    a -= numsecs * seclen;
    const ssecs = addunit(numsecs, "second");
    if (aa > 4 * weeklen) {
      return sweeks;
    }
    if (aa > weeklen) {
      return "".concat(sweeks, " ").concat(sdays);
    }
    if (aa > daylen) {
      return "".concat(sdays, " ").concat(shours);
    }
    if (aa > 6 * hourlen) {
      return shours;
    }
    if (aa > hourlen) {
      return "".concat(shours, " ").concat(smins);
    }
    if (aa > 10 * minlen) {
      return smins;
    }
    if (aa > minlen) {
      return "".concat(smins, " ").concat(ssecs);
    }
    return ssecs;
  };
  const addunit = (num, str) => {
    return "".concat(num, " ").concat(num === 1 ? popupString(str) : popupString("".concat(str, "s")));
  };
  const runPopupFilters = (list, data, download) => {
    const ret = [];
    var _iterator2 = _createForOfIteratorHelper(list), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        const element = _step2.value;
        if (element && typeof element === "function") {
          const s = element(data, download, download.owner.article);
          if (s) {
            ret.push(s);
          }
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return ret;
  };
  const getPageInfo = (data, download) => {
    if (!data || data.length === 0) {
      return popupString("Empty page");
    }
    const popupFilters = getValueOf("popupFilters") || [];
    const extraPopupFilters = getValueOf("extraPopupFilters") || [];
    const pageInfoArray = runPopupFilters([...popupFilters, ...extraPopupFilters], data, download);
    let pageInfo = pageInfoArray.join(", ");
    if (pageInfo !== "") {
      pageInfo = upcaseFirst(pageInfo);
    }
    return pageInfo;
  };
  const countLinks = (wikiText) => {
    return wikiText.split("[[").length - 1;
  };
  const countImages = (wikiText) => {
    return (wikiText.split(pg.re.image).length - 1) / (pg.re.imageBracketCount + 1);
  };
  const countCategories = (wikiText) => {
    return (wikiText.split(pg.re.category).length - 1) / (pg.re.categoryBracketCount + 1);
  };
  const popupFilterStubDetect = (data, _download, article) => {
    const counts = stubCount(data, article);
    if (counts.real) {
      return popupString("stub");
    }
    if (counts.sect) {
      return popupString("section stub");
    }
    return "";
  };
  const popupFilterDisambigDetect = (data, _download, article) => {
    if (!getValueOf("popupAllDabsStubs") && article.namespace()) {
      return "";
    }
    return isDisambig(data, article) ? popupString("disambig") : "";
  };
  const formatBytes = (num) => {
    return num > 949 ? Math.round(num / 100) / 10 + popupString("kB") : "".concat(num, "&nbsp;").concat(popupString("bytes"));
  };
  const Stringwrapper = function Stringwrapper2() {
    this.indexOf = function(x) {
      return this.toString().indexOf(x);
    };
    this.toString = function() {
      return this.value;
    };
    this.split = function(x) {
      return this.toString().split(x);
    };
    this.substring = function(x, y) {
      if (y === void 0) {
        return this.toString().slice(Math.max(0, x));
      }
      return this.toString().substring(x, y);
    };
    this.split = function(x) {
      return this.toString().split(x);
    };
    this.replace = function(x, y) {
      return this.toString().replace(x, y);
    };
  };
  class Title extends Stringwrapper {
    constructor(val) {
      super();
      this.value = null;
      this.anchor = "";
      this.setUtf(val);
    }
    /**
     * Returns the canonical representation of the article title, optionally without anchor.
     *
     * @param {boolean} omitAnchor
     * @fixme Decide specs for anchor
     * @return String The article title and the anchor.
     */
    toString(omitAnchor) {
      return this.value + (!omitAnchor && this.anchor ? "#".concat(this.anchorString()) : "");
    }
    anchorString() {
      if (!this.anchor) {
        return "";
      }
      const split = this.anchor.split(/((?:\.[\dA-F]{2})+)/);
      const len = split.length;
      let value;
      for (let j = 1; j < len; j += 2) {
        value = split[j].split(".").join("%");
        try {
          value = decodeURIComponent(value);
        } catch {
        }
        split[j] = value.split("_").join(" ");
      }
      return split.join("");
    }
    urlAnchor() {
      const split = this.anchor.split("/((?:[%][0-9A-F]{2})+)/");
      const len = split.length;
      for (let j = 1; j < len; j += 2) {
        split[j] = split[j].split("%").join(".");
      }
      return split.join("");
    }
    anchorFromUtf(str) {
      this.anchor = encodeURIComponent(str.split(" ").join("_")).split("%3A").join(":").split("'").join("%27").split("%").join(".");
    }
    fromURL(h) {
      if (typeof h !== "string") {
        this.value = null;
        return this;
      }
      const splitted = h.split("?");
      splitted[0] = splitted[0].split("&").join("%26");
      h = splitted.join("?");
      const contribs = pg.re.contribs.exec(h);
      if (contribs) {
        if (contribs[1] === "title=") {
          contribs[3] = contribs[3].split("+").join(" ");
        }
        const u = new Title(contribs[3]);
        this.setUtf(Title.decodeNasties("".concat(mw.config.get("wgFormattedNamespaces")[pg.nsUserId], ":").concat(u.stripNamespace())));
        return this;
      }
      const email = pg.re.email.exec(h);
      if (email) {
        this.setUtf(Title.decodeNasties("".concat(mw.config.get("wgFormattedNamespaces")[pg.nsUserId], ":").concat(new Title(email[3]).stripNamespace())));
        return this;
      }
      const backlinks = pg.re.backlinks.exec(h);
      if (backlinks) {
        this.setUtf(Title.decodeNasties(new Title(backlinks[3])));
        return this;
      }
      const specialdiff = pg.re.specialdiff.exec(h);
      if (specialdiff) {
        this.setUtf(Title.decodeNasties(new Title("".concat(mw.config.get("wgFormattedNamespaces")[pg.nsSpecialId], ":Diff"))));
        return this;
      }
      const m = pg.re.main.exec(h);
      if (m === null) {
        this.value = null;
      } else {
        const fromBotInterface = /\?(.+&)?title=/.test(h);
        if (fromBotInterface) {
          m[2] = m[2].split("+").join("_");
        }
        const extracted = m[2] + (m[3] ? "#".concat(m[3]) : "");
        if (pg.flag.isSafari && /%25[\dA-Fa-f]{2}/.test(extracted)) {
          this.setUtf(decodeURIComponent(unescape(extracted)));
        } else {
          this.setUtf(Title.decodeNasties(extracted));
        }
      }
      return this;
    }
    static decodeNasties(txt) {
      try {
        let ret = decodeURI(Title.decodeEscapes(txt));
        ret = ret.replace(/[ _]*$/, "");
        return ret;
      } catch {
        return txt;
      }
    }
    // Decode valid %-encodings, otherwise escape them
    static decodeEscapes(txt) {
      const split = txt.split(/((?:%[\dA-Fa-f]{2})+)/);
      const len = split.length;
      if (len === 1) {
        return split[0].replace(/%(?![\dA-Fa-f]{2})/g, "%25");
      }
      for (let i = 1; i < len; i += 2) {
        split[i] = decodeURIComponent(split[i]);
      }
      return split.join("");
    }
    fromAnchor(a) {
      if (!a) {
        this.value = null;
        return this;
      }
      return this.fromURL(a.href);
    }
    fromWikiText(txt) {
      txt = myDecodeURI(txt);
      this.setUtf(txt);
      return this;
    }
    hintValue() {
      if (!this.value) {
        return "";
      }
      return safeDecodeURI(this.value);
    }
    toUserName(withNs) {
      if (this.namespaceId() !== pg.nsUserId && this.namespaceId() !== pg.nsUsertalkId) {
        this.value = null;
        return;
      }
      this.value = (withNs ? "".concat(mw.config.get("wgFormattedNamespaces")[pg.nsUserId], ":") : "") + this.stripNamespace().split("/")[0];
    }
    userName(withNs) {
      const t = new Title(this.value);
      t.toUserName(withNs);
      if (t.value) {
        return t;
      }
      return null;
    }
    toTalkPage() {
      if (this.value === null) {
        return null;
      }
      const namespaceId = this.namespaceId();
      if (namespaceId >= 0 && namespaceId % 2 === 0) {
        const localizedNamespace = mw.config.get("wgFormattedNamespaces")[namespaceId + 1];
        if (localizedNamespace !== void 0) {
          this.value = localizedNamespace === "" ? this.stripNamespace() : "".concat(localizedNamespace.split(" ").join("_"), ":").concat(this.stripNamespace());
          return this.value;
        }
      }
      this.value = null;
      return null;
    }
    // Return canonical, localized namespace
    namespace() {
      return mw.config.get("wgFormattedNamespaces")[this.namespaceId()];
    }
    namespaceId() {
      const n = this.value.indexOf(":");
      if (n === -1) {
        return 0;
      }
      const namespaceId = mw.config.get("wgNamespaceIds")[this.value.slice(0, Math.max(0, n)).split(" ").join("_").toLowerCase()];
      if (namespaceId === void 0) {
        return 0;
      }
      return namespaceId;
    }
    talkPage() {
      const t = new Title(this.value);
      t.toTalkPage();
      if (t.value) {
        return t;
      }
      return null;
    }
    isTalkPage() {
      if (this.talkPage() === null) {
        return true;
      }
      return false;
    }
    toArticleFromTalkPage() {
      if (this.value === null) {
        return null;
      }
      const namespaceId = this.namespaceId();
      if (namespaceId >= 0 && namespaceId % 2 === 1) {
        const localizedNamespace = mw.config.get("wgFormattedNamespaces")[namespaceId - 1];
        if (localizedNamespace !== void 0) {
          this.value = localizedNamespace === "" ? this.stripNamespace() : "".concat(localizedNamespace.split(" ").join("_"), ":").concat(this.stripNamespace());
          return this.value;
        }
      }
      this.value = null;
      return null;
    }
    articleFromTalkPage() {
      const t = new Title(this.value);
      t.toArticleFromTalkPage();
      if (t.value) {
        return t;
      }
      return null;
    }
    articleFromTalkOrArticle() {
      const t = new Title(this.value);
      if (t.toArticleFromTalkPage()) {
        return t;
      }
      return this;
    }
    isIpUser() {
      return pg.re.ipUser.test(this.userName());
    }
    stripNamespace() {
      const n = this.value.indexOf(":");
      if (n === -1) {
        return this.value;
      }
      const namespaceId = this.namespaceId();
      if (namespaceId === pg.nsMainspaceId) {
        return this.value;
      }
      return this.value.slice(Math.max(0, n + 1));
    }
    setUtf(value) {
      if (!value) {
        this.value = "";
        return;
      }
      const anch = value.indexOf("#");
      if (anch === -1) {
        this.value = value.split("_").join(" ");
        this.anchor = "";
        return;
      }
      this.value = value.slice(0, Math.max(0, anch)).split("_").join(" ");
      this.anchor = value.slice(Math.max(0, anch + 1));
      this.ns = null;
    }
    setUrl(urlfrag) {
      const anch = urlfrag.indexOf("#");
      this.value = safeDecodeURI(urlfrag.slice(0, Math.max(0, anch)));
      this.anchor = this.value.slice(Math.max(0, anch + 1));
    }
    append(x) {
      this.setUtf(this.value + x);
    }
    urlString(x) {
      x || (x = {});
      let v = this.toString(true);
      if (!x.omitAnchor && this.anchor) {
        v += "#".concat(this.urlAnchor());
      }
      if (!x.keepSpaces) {
        v = v.split(" ").join("_");
      }
      return encodeURI(v).split("&").join("%26").split("?").join("%3F").split("+").join("%2B");
    }
    removeAnchor() {
      return new Title(this.toString(true));
    }
    toUrl() {
      return pg.wiki.titlebase + this.urlString();
    }
  }
  Title.fromURL = (h) => {
    return new Title().fromURL(h);
  };
  Title.fromAnchor = (a) => {
    return new Title().fromAnchor(a);
  };
  Title.fromWikiText = (txt) => {
    return new Title().fromWikiText(txt);
  };
  const parseParams = (url) => {
    const specialDiff = pg.re.specialdiff.exec(url);
    if (specialDiff) {
      const split = specialDiff[1].split("/");
      if (split.length === 1) {
        return {
          oldid: split[0],
          diff: "prev"
        };
      } else if (split.length === 2) {
        return {
          oldid: split[0],
          diff: split[1]
        };
      }
    }
    const ret = {};
    if (!url.includes("?")) {
      return ret;
    }
    [url] = url.split("#");
    const s = url.split("?").slice(1).join(",");
    const t = s.split("&");
    var _iterator3 = _createForOfIteratorHelper(t), _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
        const element = _step3.value;
        const z = element.split("=");
        z.push(null);
        [, ret[z[0]]] = z;
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (ret.diff && ret.oldid === void 0) {
      ret.oldid = "prev";
    }
    if (ret.oldid && (ret.oldid === "prev" || ret.oldid === "next" || ret.oldid === "cur")) {
      const helper = ret.diff;
      ret.diff = ret.oldid;
      ret.oldid = helper;
    }
    return ret;
  };
  const myDecodeURI = (str) => {
    let ret;
    try {
      ret = decodeURI(str.toString());
    } catch {
      return str;
    }
    for (let i = 0; i < pg.misc.decodeExtras.length; ++i) {
      const {
        from
      } = pg.misc.decodeExtras[i];
      const {
        to
      } = pg.misc.decodeExtras[i];
      ret = ret.split(from).join(to);
    }
    return ret;
  };
  const safeDecodeURI = (str) => {
    const ret = myDecodeURI(str);
    return ret || str;
  };
  const isDisambig = (data, article) => {
    if (!getValueOf("popupAllDabsStubs") && article.namespace()) {
      return false;
    }
    return !article.isTalkPage() && pg.re.disambig.test(data);
  };
  const stubCount = (data, article) => {
    if (!getValueOf("popupAllDabsStubs") && article.namespace()) {
      return false;
    }
    let sectStub = 0;
    let realStub = 0;
    if (pg.re.stub.test(data)) {
      const s = data.split(pg.re.stub);
      for (let i = 1; i < s.length; i += 2) {
        if (s[i]) {
          ++sectStub;
        } else {
          ++realStub;
        }
      }
    }
    return {
      real: realStub,
      sect: sectStub
    };
  };
  const isValidImageName = (str) => {
    return !str.includes("{");
  };
  const isInStrippableNamespace = (article) => {
    return article.namespaceId() !== 0;
  };
  const isInMainNamespace = (article) => {
    return article.namespaceId() === 0;
  };
  const anchorContainsImage = (a) => {
    if (a === null) {
      return false;
    }
    const kids = a.childNodes;
    var _iterator4 = _createForOfIteratorHelper(kids), _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
        const kid = _step4.value;
        if (kid.nodeName === "IMG") {
          return true;
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    return false;
  };
  const isPopupLink = (a) => {
    if (!markNopopupSpanLinks.done) {
      markNopopupSpanLinks();
    }
    if (a.inNopopupSpan) {
      return false;
    }
    if (a.onmousedown || a.getAttribute("nopopup")) {
      return false;
    }
    const h = a.href;
    if (h === "".concat(document.location.href, "#")) {
      return false;
    }
    if (!pg.re.basenames.test(h)) {
      return false;
    }
    if (!pg.re.urlNoPopup.test(h)) {
      return true;
    }
    return (pg.re.email.test(h) || pg.re.contribs.test(h) || pg.re.backlinks.test(h) || pg.re.specialdiff.test(h)) && !h.includes("&limit=");
  };
  const markNopopupSpanLinks = function markNopopupSpanLinks2() {
    if (!getValueOf("popupOnlyArticleLinks")) {
      fixVectorMenuPopups();
    }
    const $body = $("body");
    const s = $body.find(".nopopups").toArray();
    var _iterator5 = _createForOfIteratorHelper(s), _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
        const element = _step5.value;
        const as = element.querySelectorAll("a");
        var _iterator6 = _createForOfIteratorHelper(as), _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
            const a = _step6.value;
            a.inNopopupSpan = true;
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    markNopopupSpanLinks2.done = true;
  };
  const fixVectorMenuPopups = () => {
    const $body = $("body");
    $body.find("nav.vector-menu h3:first a:first").prop("inNopopupSpan", true);
  };
  const getPageWithCaching = (url, onComplete, owner) => {
    log("getPageWithCaching, url=".concat(url));
    const i = findInPageCache(url);
    let d;
    if (i > -1) {
      d = fakeDownload(url, owner.idNumber, onComplete, pg.cache.pages[i].data, pg.cache.pages[i].lastModified, owner);
    } else {
      d = getPage(url, onComplete, owner);
      if (d && owner && owner.addDownload) {
        owner.addDownload(d);
        d.owner = owner;
      }
    }
  };
  const getPage = (url, onComplete, owner) => {
    log("getPage");
    const callback = (d) => {
      if (!d.aborted) {
        addPageToCache(d);
        onComplete(d);
      }
    };
    return startDownload(url, owner.idNumber, callback);
  };
  const findInPageCache = (url) => {
    for (let i = 0; i < pg.cache.pages.length; ++i) {
      if (url === pg.cache.pages[i].url) {
        return i;
      }
    }
    return -1;
  };
  const addPageToCache = (download) => {
    log("addPageToCache ".concat(download.url));
    const page = {
      url: download.url,
      data: download.data,
      lastModified: download.lastModified
    };
    return pg.cache.pages.push(page);
  };
  const getJsObj = (json) => {
    try {
      const json_ret = JSON.parse(json);
      if (json_ret.warnings) {
        for (let w = 0; w < json_ret.warnings.length; w++) {
          if (json_ret.warnings[w]["*"]) {
            log(json_ret.warnings[w]["*"]);
          } else {
            log(json_ret.warnings[w].warnings);
          }
        }
      } else if (json_ret.error) {
        errlog("".concat(json_ret.error.code, ": ").concat(json_ret.error.info));
      }
      return json_ret;
    } catch {
      errlog("Something went wrong with getJsObj, json=".concat(json));
      return 1;
    }
  };
  const anyChild = (obj) => {
    for (const p in obj) {
      if (!Object.hasOwn(obj, p)) {
        continue;
      }
      return obj[p];
    }
    return null;
  };
  const upcaseFirst = (str) => {
    if (typeof str !== "string" || str === "") {
      return;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const findInArray = (arr, foo) => {
    if (!arr || arr.length === 0) {
      return -1;
    }
    const len = arr.length;
    for (let i = 0; i < len; ++i) {
      if (arr[i] === foo) {
        return i;
      }
    }
    return -1;
  };
  const nextOne = (array, value) => {
    const i = findInArray(array, value);
    if (i < 0) {
      return null;
    }
    return array[i + 1];
  };
  const literalizeRegex = (str) => {
    return mw.util.escapeRegExp(str);
  };
  String.prototype.entify = function() {
    return this.split("&").join("&amp;").split("<").join("&lt;").split(">").join(
      "&gt;"
      /* +shy */
    ).split('"').join("&quot;");
  };
  const removeNulls = (val) => {
    return val !== null;
  };
  const joinPath = (list) => {
    return list.filter(removeNulls).join("/");
  };
  const simplePrintf = (str, subs) => {
    if (!str || !subs) {
      return str;
    }
    const ret = [];
    const s = str.split(/(%s|\$\d+)/);
    let i = 0;
    do {
      ret.push(s.shift());
      if (s.length === 0) {
        break;
      }
      const cmd = s.shift();
      if (cmd === "%s") {
        if (i < subs.length) {
          ret.push(subs[i]);
        } else {
          ret.push(cmd);
        }
        ++i;
      } else {
        const j = Number.parseInt(cmd.replace("$", ""), 10) - 1;
        if (j > -1 && j < subs.length) {
          ret.push(subs[j]);
        } else {
          ret.push(cmd);
        }
      }
    } while (s.length > 0);
    return ret.join("");
  };
  const isString = (x) => {
    return typeof x === "string" || x instanceof String;
  };
  const isNumber = (x) => {
    return typeof x === "number" || x instanceof Number;
  };
  const isRegExp = (x) => {
    return x instanceof RegExp;
  };
  const isArray = (x) => {
    return Array.isArray(x);
  };
  const isObject = (x) => {
    return x instanceof Object;
  };
  const isFunction = (x) => {
    return !isRegExp(x) && (typeof x === "function" || x instanceof Function);
  };
  const repeatString = (s, mult) => {
    let ret = "";
    for (let i = 0; i < mult; ++i) {
      ret += s;
    }
    return ret;
  };
  const zeroFill = (s, min) => {
    min || (min = 2);
    const t = s.toString();
    return repeatString("0", min - t.length) + t;
  };
  const map = (f, o) => {
    if (isArray(o)) {
      return map_array(f, o);
    }
    return map_object(f, o);
  };
  const map_array = (f, o) => {
    const ret = [];
    var _iterator7 = _createForOfIteratorHelper(o), _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
        const element = _step7.value;
        ret.push(f(element));
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    return ret;
  };
  const map_object = (f, o) => {
    const ret = {};
    for (const i in o) {
      if (!Object.hasOwn(o, i)) {
        continue;
      }
      ret[o] = f(o[i]);
    }
    return ret;
  };
  pg.escapeQuotesHTML = (text) => {
    return text.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  };
  pg.unescapeQuotesHTML = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };
  const retargetDab = (newTarget, oldTarget, friendlyCurrentArticleName, titleToEdit) => {
    log("retargetDab: newTarget=".concat(newTarget, " oldTarget=").concat(oldTarget));
    return changeLinkTargetLink({
      newTarget,
      text: newTarget.split(" ").join("&nbsp;"),
      hint: tprintf("disambigHint", [newTarget]),
      summary: simplePrintf(getValueOf("popupFixDabsSummary"), [friendlyCurrentArticleName, newTarget]),
      clickButton: getValueOf("popupDabsAutoClick"),
      minor: true,
      oldTarget,
      watch: getValueOf("popupWatchDisambiggedPages"),
      title: titleToEdit
    });
  };
  const listLinks = (wikitext, oldTarget, titleToEdit) => {
    const reg = /\[\[([^|]*?) *(\||]])/gi;
    let ret = [];
    const splitted = wikitext.split(reg);
    const omitRegex = /^[a-z]*:|^[Ss]pecial:|^[Ii]mage|^[Cc]ategory/;
    const friendlyCurrentArticleName = oldTarget.toString();
    const wikPos = getValueOf("popupDabWiktionary");
    for (let i = 1; i < splitted.length; i += 3) {
      if (typeof splitted[i] === "string" && splitted[i].length > 0 && !omitRegex.test(splitted[i])) {
        ret.push(retargetDab(splitted[i], oldTarget, friendlyCurrentArticleName, titleToEdit));
      }
    }
    ret = rmDupesFromSortedList(ret.sort());
    if (wikPos) {
      const wikTarget = "wiktionary:".concat(friendlyCurrentArticleName.replace(/^(.+)\s+\([^)]+\)\s*$/, "$1"));
      const meth = wikPos.toLowerCase() === "first" ? "unshift" : "push";
      ret[meth](retargetDab(wikTarget, oldTarget, friendlyCurrentArticleName, titleToEdit));
    }
    ret.push(changeLinkTargetLink({
      newTarget: null,
      text: popupString("remove this link").split(" ").join("&nbsp;"),
      hint: popupString("remove all links to this disambig page from this article"),
      clickButton: getValueOf("popupDabsAutoClick"),
      oldTarget,
      summary: simplePrintf(getValueOf("popupRmDabLinkSummary"), [friendlyCurrentArticleName]),
      watch: getValueOf("popupWatchDisambiggedPages"),
      title: titleToEdit
    }));
    return ret;
  };
  const rmDupesFromSortedList = (list) => {
    const ret = [];
    var _iterator8 = _createForOfIteratorHelper(list), _step8;
    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
        const element = _step8.value;
        if (ret.length === 0 || element !== ret.at(-1)) {
          ret.push(element);
        }
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }
    return ret;
  };
  const makeFixDab = (data, navpop) => {
    const titleToEdit = navpop.parentPopup && navpop.parentPopup.article.toString();
    const list = listLinks(data, navpop.originalArticle, titleToEdit);
    if (list.length === 0) {
      log("listLinks returned empty list");
      return null;
    }
    let html = "<hr>".concat(popupString("Click to disambiguate this link to:"), "<br>");
    html += list.join(", ");
    return html;
  };
  const makeFixDabs = (wikiText, navpop) => {
    if (getValueOf("popupFixDabs") && isDisambig(wikiText, navpop.article) && Title.fromURL(location.href).namespaceId() !== pg.nsSpecialId && navpop.article.talkPage()) {
      setPopupHTML(makeFixDab(wikiText, navpop), "popupFixDab", navpop.idNumber);
    }
  };
  const popupRedlinkHTML = (article) => {
    return changeLinkTargetLink({
      newTarget: null,
      text: popupString("remove this link").split(" ").join("&nbsp;"),
      hint: popupString("remove all links to this page from this article"),
      clickButton: getValueOf("popupRedlinkAutoClick"),
      oldTarget: article.toString(),
      summary: simplePrintf(getValueOf("popupRedlinkSummary"), [article.toString()])
    });
  };
  const setPopupHTML = function setPopupHTML2(str, elementId, popupId, onSuccess, append) {
    if (popupId === void 0) {
      popupId = pg.idNumber;
    }
    const popupElement = document.querySelector("#".concat(elementId).concat(popupId));
    if (popupElement) {
      if (!append) {
        popupElement.innerHTML = "";
      }
      if (isString(str)) {
        popupElement.innerHTML += str;
      } else {
        popupElement.append(str);
      }
      if (onSuccess) {
        onSuccess();
      }
      setTimeout(checkPopupPosition, 100);
      return true;
    }
    setTimeout(() => {
      setPopupHTML2(str, elementId, popupId, onSuccess);
    }, 600);
    return null;
  };
  const setPopupTrailer = (str, id) => {
    return setPopupHTML(str, "popupData", id);
  };
  const fillEmptySpans = (args) => {
    let redir = true;
    let rcid;
    if (typeof args !== "object" || args.redir === void 0 || !args.redir) {
      redir = false;
    }
    const a = args.navpopup.parentAnchor;
    let article;
    let hint;
    let oldid;
    let params = {};
    if (redir && typeof args.redirTarget === typeof {}) {
      article = args.redirTarget;
    } else {
      article = new Title().fromAnchor(a);
      hint = a.originalTitle || article.hintValue();
      params = parseParams(a.href);
      oldid = getValueOf("popupHistoricalLinks") ? params.oldid : null;
      ({
        rcid
      } = params);
    }
    const x = {
      article,
      hint,
      oldid,
      rcid,
      navpop: args.navpopup,
      params
    };
    const structure = pg.structures[getValueOf("popupStructure")];
    if (typeof structure !== "object") {
      setPopupHTML("popupError", "Unknown structure (this should never happen): ".concat(pg.option.popupStructure), args.navpopup.idNumber);
      return;
    }
    const spans = flatten(pg.misc.layout);
    const numspans = spans.length;
    const redirs = pg.misc.redirSpans;
    for (let i = 0; i < numspans; ++i) {
      const found = redirs && redirs.includes(spans[i]);
      if (found && !redir || !found && redir) {
        continue;
      }
      const structurefn = structure[spans[i]];
      if (structurefn === void 0) {
        continue;
      }
      let setfn = setPopupHTML;
      if (getValueOf("popupActiveNavlinks") && (spans[i].indexOf("popupTopLinks") === 0 || spans[i].indexOf("popupRedirTopLinks") === 0)) {
        setfn = setPopupTipsAndHTML;
      }
      switch (typeof structurefn) {
        case "function":
          log("running ".concat(spans[i], "({\n						article:").concat(x.article, ", hint:").concat(x.hint, ", oldid: ").concat(x.oldid, "})"));
          setfn(structurefn(x), spans[i], args.navpopup.idNumber);
          break;
        case "string":
          setfn(structurefn, spans[i], args.navpopup.idNumber);
          break;
        default:
          errlog("unknown thing with label ".concat(spans[i], " (span index was ").concat(i, ")"));
          break;
      }
    }
  };
  const flatten = function flatten2(list, start) {
    const ret = [];
    if (start === void 0) {
      start = 0;
    }
    for (let i = start; i < list.length; ++i) {
      if (typeof list[i] === typeof []) {
        return [...ret, ...flatten2(list[i]), ...flatten2(list, i + 1)];
      }
      ret.push(list[i]);
    }
    return ret;
  };
  const popupHTML = function popupHTML2(a) {
    getValueOf("popupStructure");
    const structure = pg.structures[pg.option.popupStructure];
    if (typeof structure !== "object") {
      pg.option.popupStructure = pg.optionDefault.popupStructure;
      return popupHTML2(a);
    }
    if (typeof structure.popupLayout !== "function") {
      return "Bad layout";
    }
    pg.misc.layout = structure.popupLayout();
    pg.misc.redirSpans = typeof structure.popupRedirSpans === "function" ? structure.popupRedirSpans() : [];
    return makeEmptySpans(pg.misc.layout, a.navpopup);
  };
  const makeEmptySpans = function makeEmptySpans2(list, navpop) {
    let ret = "";
    var _iterator9 = _createForOfIteratorHelper(list), _step9;
    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
        const element = _step9.value;
        if (typeof element === "string") {
          ret += emptySpanHTML(element, navpop.idNumber, "div");
        } else if (typeof element === typeof [] && element.length > 0) {
          ret = ret.split(/(<\/[^>]*?>$)/).join(makeEmptySpans2(element, navpop));
        } else if (typeof element === typeof {} && element.nodeType) {
          ret += emptySpanHTML(element.name, navpop.idNumber, element.nodeType);
        }
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }
    return ret;
  };
  const emptySpanHTML = function emptySpanHTML2(name, id, tag, classname) {
    tag || (tag = "span");
    classname || (classname = emptySpanHTML2.classAliases[name]);
    classname || (classname = name);
    if (name === getValueOf("popupDragHandle")) {
      classname += " popupDragHandle";
    }
    return simplePrintf('<%s id="%s" class="%s"></%s>', [tag, name + id, classname, tag]);
  };
  emptySpanHTML.classAliases = {
    popupSecondPreview: "popupPreview"
  };
  const imageHTML = (_article, idNumber) => {
    return simplePrintf('<a id="popupImageLink$1"><img align="right" valign="top" id="popupImg$1" style="display:none"></img></a>', [idNumber]);
  };
  const popTipsSoonFn = (id, when, popData) => {
    when || (when = 250);
    const popTips = () => {
      setupTooltips(document.querySelector("#".concat(id)), false, true, popData);
    };
    return () => {
      setTimeout(popTips, when, popData);
    };
  };
  const setPopupTipsAndHTML = (html, divname, idnumber, popData) => {
    setPopupHTML(html, divname, idnumber, getValueOf("popupSubpopups") ? popTipsSoonFn(divname + idnumber, null, popData) : null);
  };
  const fuzzyCursorOffMenus = (_x, _y, _fuzz, parent) => {
    if (!parent) {
      return null;
    }
    const uls = parent.querySelectorAll("ul");
    var _iterator0 = _createForOfIteratorHelper(uls), _step0;
    try {
      for (_iterator0.s(); !(_step0 = _iterator0.n()).done; ) {
        const ul = _step0.value;
        if (ul.className === "popup_menu" && ul.offsetWidth > 0) {
          return false;
        }
      }
    } catch (err) {
      _iterator0.e(err);
    } finally {
      _iterator0.f();
    }
    return true;
  };
  const checkPopupPosition = () => {
    if (pg.current.link && pg.current.link.navpopup) {
      pg.current.link.navpopup.limitHorizontalPosition();
    }
  };
  const mouseOutWikiLink = function mouseOutWikiLink2() {
    const self = this;
    removeModifierKeyListener(self);
    if (self.navpopup === null || self.navpopup === void 0) {
      return;
    }
    if (!self.navpopup.isVisible()) {
      self.navpopup.banish();
      return;
    }
    restoreTitle(self);
    Navpopup.tracker.addHook(posCheckerHook(self.navpopup));
  };
  const posCheckerHook = (navpop) => {
    return () => {
      if (!navpop.isVisible()) {
        return true;
      }
      if (Navpopup.tracker.dirty) {
        return false;
      }
      const {
        x
      } = Navpopup.tracker;
      const {
        y
      } = Navpopup.tracker;
      const mouseOverNavpop = navpop.isWithin(x, y, navpop.fuzz, navpop.mainDiv) || !fuzzyCursorOffMenus(x, y, navpop.fuzz, navpop.mainDiv);
      let t = getValueOf("popupHideDelay");
      if (t) {
        t *= 1e3;
      }
      if (!t) {
        if (!mouseOverNavpop) {
          if (navpop.parentAnchor) {
            restoreTitle(navpop.parentAnchor);
          }
          navpop.banish();
          return true;
        }
        return false;
      }
      const d = Date.now();
      if (!navpop.mouseLeavingTime) {
        navpop.mouseLeavingTime = d;
        return false;
      }
      if (mouseOverNavpop) {
        navpop.mouseLeavingTime = null;
        return false;
      }
      if (d - navpop.mouseLeavingTime > t) {
        navpop.mouseLeavingTime = null;
        navpop.banish();
        return true;
      }
      return false;
    };
  };
  const runStopPopupTimer = (navpop) => {
    if (!navpop.stopPopupTimer) {
      navpop.stopPopupTimer = setInterval(posCheckerHook(navpop), 500);
      navpop.addHook(() => {
        clearInterval(navpop.stopPopupTimer);
      }, "hide", "before");
    }
  };
  class Previewmaker {
    constructor(wikiText, baseUrl, owner) {
      this.originalData = wikiText;
      this.baseUrl = baseUrl;
      this.owner = owner;
      this.maxCharacters = getValueOf("popupMaxPreviewCharacters");
      this.maxSentences = getValueOf("popupMaxPreviewSentences");
      this.setData();
    }
    setData() {
      const maxSize = Math.max(1e4, 2 * this.maxCharacters);
      this.data = this.originalData.slice(0, Math.max(0, maxSize));
    }
    /**
     * Remove HTML comments
     *
     * @private
     */
    killComments() {
      this.data = this.data.replace(/^<!--[^$]*?-->\n|\n<!--[^$]*?-->(?=\n)|<!--[^$]*?-->/g, "");
    }
    /**
     * @private
     */
    killDivs() {
      this.data = this.data.replace(/< *div[^>]* *>[\S\s]*?< *\/ *div *>/gi, "");
    }
    /**
     * @private
     */
    killGalleries() {
      this.data = this.data.replace(/< *gallery[^>]* *>[\S\s]*?< *\/ *gallery *>/gi, "");
    }
    /**
     * @param {Object} opening
     * @param {Object} closing
     * @param {Object} subopening
     * @param {Object} subclosing
     * @param {Object} repl
     * @private
     */
    kill(opening, closing, subopening, subclosing, repl) {
      let oldk = this.data;
      let k = Previewmaker.killStuff(this.data, opening, closing, subopening, subclosing, repl);
      while (k.length < oldk.length) {
        oldk = k;
        k = Previewmaker.killStuff(k, opening, closing, subopening, subclosing, repl);
      }
      this.data = k;
    }
    /**
     * @param {Object} txt
     * @param {Object} opening
     * @param {Object} closing
     * @param {Object} subopening
     * @param {Object} subclosing
     * @param {Object} repl
     * @private
     */
    static killStuff(txt, opening, closing, subopening, subclosing, repl) {
      const op = Previewmaker.makeRegexp(opening);
      const cl = Previewmaker.makeRegexp(closing, "^");
      const sb = subopening ? Previewmaker.makeRegexp(subopening, "^") : null;
      const sc = subclosing ? Previewmaker.makeRegexp(subclosing, "^") : cl;
      if (!op || !cl) {
        void mw.notify("Navigation Popups error: op or cl is null! something is wrong.", {
          tag: "popups",
          type: "error"
        });
        return;
      }
      if (!op.test(txt)) {
        return txt;
      }
      let ret = "";
      const opResult = op.exec(txt);
      ret = txt.slice(0, Math.max(0, opResult.index));
      txt = txt.slice(Math.max(0, opResult.index + opResult[0].length));
      let depth = 1;
      while (txt.length > 0) {
        let removal = 0;
        if (depth === 1 && cl.test(txt)) {
          depth--;
          removal = cl.exec(txt)[0].length;
        } else if (depth > 1 && sc.test(txt)) {
          depth--;
          removal = sc.exec(txt)[0].length;
        } else if (sb && sb.test(txt)) {
          depth++;
          removal = sb.exec(txt)[0].length;
        }
        removal || (removal = 1);
        txt = txt.slice(Math.max(0, removal));
        if (depth === 0) {
          break;
        }
      }
      return ret + (repl || "") + txt;
    }
    /**
     * @param {string|RegExp} x
     * @param {string|RegExp} prefix
     * @param {string|RegExp} suffix
     * @private
     */
    static makeRegexp(x, prefix, suffix) {
      prefix || (prefix = "");
      suffix || (suffix = "");
      let reStr = "";
      let flags = "";
      if (isString(x)) {
        reStr = prefix + literalizeRegex(x) + suffix;
      } else if (isRegExp(x)) {
        let s = x.toString().slice(1);
        const sp = s.split("/");
        flags = sp.at(-1);
        sp[sp.length - 1] = "";
        s = sp.join("/");
        s = s.slice(0, Math.max(0, s.length - 1));
        reStr = prefix + s + suffix;
      } else {
        log("makeRegexp failed");
      }
      log("makeRegexp: got reStr=".concat(reStr, ", flags=").concat(flags));
      return new RegExp(reStr, flags);
    }
    /**
     * @private
     */
    killBoxTemplates() {
      this.kill(/{{[^\s{|}]*?(float|box)[ _](begin|start)/i, /}}\s*/, "{{");
      this.kill(/{{[^\s{|}]*?(infobox|elementbox|frame)[ _]/i, /}}\s*/, "{{");
    }
    /**
     * @private
     */
    killTemplates() {
      this.kill("{{", "}}", "{", "}", " ");
    }
    /**
     * @private
     */
    killTables() {
      this.kill("{|", /\|}\s*/, "{|");
      this.kill(/<table.*?>/i, /<\/table.*?>/i, /<table.*?>/i);
      this.data = this.data.replace(/^\|.*$/gm, "");
    }
    /**
     * @private
     */
    killImages() {
      const forbiddenNamespaceAliases = [];
      for (var _i = 0, _Object$entries = Object.entries(mw.config.get("wgNamespaceIds")); _i < _Object$entries.length; _i++) {
        const [localizedNamespaceLc, namespaceId] = _Object$entries[_i];
        if (namespaceId !== pg.nsImageId && namespaceId !== pg.nsCategoryId) {
          return;
        }
        forbiddenNamespaceAliases.push(localizedNamespaceLc.split(" ").join("[ _]"));
      }
      this.kill(new RegExp("[[][[]\\s*(".concat(forbiddenNamespaceAliases.join("|"), ")\\s*:"), "i"), /]]\s*/, "[", "]");
    }
    /**
     * @private
     */
    killHTML() {
      this.kill(/<ref\b[^/>]*?>/i, /<\/ref>/i);
      this.data = this.data.replace(/(^|\n) *<.*/g, "\n");
      const splitted = this.data.split(/(<[\W\w]*?(?:>|$|(?=<)))/);
      const len = splitted.length;
      for (let i = 1; i < len; i += 2) {
        switch (splitted[i]) {
          case "<no".concat("wiki", ">"):
          case "</no".concat("wiki", ">"):
          case "<block".concat("quote", ">"):
          case "</block".concat("quote", ">"):
            break;
          default:
            splitted[i] = "";
        }
      }
      this.data = splitted.join("");
    }
    /**
     * @private
     */
    killChunks() {
      const italicChunkRegex = /((^|\n)\s*:*\s*''[^']([^']|'''|'[^']){20}(.|\n[^\n])*''[\s!.?]*\n)+/g;
      this.data = this.data.replace(italicChunkRegex, "\n");
    }
    /**
     * @private
     */
    mopup() {
      this.data = this.data.replace(/^-{4,}/gm, "");
      this.data = this.data.replace(/(^|\n) *:[^\n]*/g, "");
      this.data = this.data.replace(/^__[_a-z]*__ *$/gim, "");
    }
    /**
     * @private
     */
    firstBit() {
      let d = this.data;
      if (getValueOf("popupPreviewCutHeadings")) {
        this.data = this.data.replace(/\s*(==+[^=]*==+)\s*/g, "\n\n$1 ");
        this.data = this.data.replace(/([:;]) *\n{2,}/g, "$1\n");
        this.data = this.data.replace(/^\s*/, "");
        const stuff = /^([^\n]|\n\S)*/.exec(this.data);
        if (stuff) {
          [d] = stuff;
        }
        if (!getValueOf("popupPreviewFirstParOnly")) {
          d = this.data;
        }
        d = d.replace(/(==+[^=]*==+)\s*/g, "$1\n\n");
      }
      d = d.split(/([!.?]+["']*\s)/g);
      d[0] = d[0].replace(/^\s*/, "");
      const notSentenceEnds = /([^.][a-z]\. *[a-z]|etc|sic|dr|mr|mrs|ms|st|no|op|cit|\[[^\]]*|\s[a-z])$/i;
      d = this.fixSentenceEnds(d, notSentenceEnds);
      this.fullLength = d.join("").length;
      let n = this.maxSentences;
      let dd = Previewmaker.firstSentences(d, n);
      do {
        dd = Previewmaker.firstSentences(d, n);
        --n;
      } while (dd.length > this.maxCharacters && n !== 0);
      this.data = dd;
    }
    /**
     * @param {string} strs
     * @param {RegExp} reg
     * @private
     */
    fixSentenceEnds(strs, reg) {
      for (let i = 0; i < strs.length - 2; ++i) {
        if (reg.test(strs[i])) {
          const a = [];
          for (let j = 0; j < strs.length; ++j) {
            if (j < i) {
              a[j] = strs[j];
            }
            if (j === i) {
              a[i] = strs[i] + strs[i + 1] + strs[i + 2];
            }
            if (j > i + 2) {
              a[j - 2] = strs[j];
            }
          }
          return this.fixSentenceEnds(a, reg);
        }
      }
      return strs;
    }
    /**
     * @param {string[]} strs
     * @param {number} howmany
     * @private
     */
    static firstSentences(strs, howmany) {
      const t = strs.slice(0, 2 * howmany);
      return t.join("");
    }
    /**
     * @private
     */
    killBadWhitespace() {
      this.data = this.data.replace(/^ *'+ *$/gm, "");
    }
    /**
     * Runs the various methods to generate the preview.
     * The preview is stored in the <code>html</html> field.
     *
     * @private
     */
    makePreview() {
      if (this.owner.article.namespaceId() !== pg.nsTemplateId && this.owner.article.namespaceId() !== pg.nsImageId) {
        this.killComments();
        this.killDivs();
        this.killGalleries();
        this.killBoxTemplates();
        if (getValueOf("popupPreviewKillTemplates")) {
          this.killTemplates();
        } else {
          this.killMultilineTemplates();
        }
        this.killTables();
        this.killImages();
        this.killHTML();
        this.killChunks();
        this.mopup();
        this.firstBit();
        this.killBadWhitespace();
      } else {
        this.killHTML();
      }
      this.html = wiki2html(this.data, this.baseUrl);
      this.fixHTML();
      this.stripLongTemplates();
    }
    /**
     * @param {string} data
     * @private
     */
    static esWiki2HtmlPart(data) {
      const reLinks = /(?:\[\[([^\]|]*)(?:\|([^\]|]*))*]]([a-z]*))/gi;
      reLinks.lastIndex = 0;
      let match;
      let result = "";
      let postfixIndex = 0;
      while ((match = reLinks.exec(data)) !== null) {
        var _match$;
        result += "".concat(pg.escapeQuotesHTML(data.substring(postfixIndex, match.index)), '<a href="').concat(Insta.conf.paths.articles).concat(pg.escapeQuotesHTML(match[1]), '">').concat(pg.escapeQuotesHTML(((_match$ = match[2]) !== null && _match$ !== void 0 ? _match$ : match[1]) + match[3]), "</a>");
        postfixIndex = reLinks.lastIndex;
      }
      result += pg.escapeQuotesHTML(data.slice(Math.max(0, postfixIndex)));
      return result;
    }
    editSummaryPreview() {
      const reAes = /\/\* *(.*?) *\*\//g;
      reAes.lastIndex = 0;
      const match = reAes.exec(this.data);
      if (match) {
        const prefix = this.data.slice(0, Math.max(0, match.index - 1));
        const [, section] = match;
        const postfix = this.data.slice(Math.max(0, reAes.lastIndex));
        let start = "<span class='autocomment'>";
        let end = "</span>";
        if (prefix.length > 0) {
          start = "".concat(Previewmaker.esWiki2HtmlPart(prefix), " ").concat(start, "- ");
        }
        if (postfix.length > 0) {
          end = ": ".concat(end).concat(Previewmaker.esWiki2HtmlPart(postfix));
        }
        const t = new Title().fromURL(this.baseUrl);
        t.anchorFromUtf(section);
        const sectionLink = "".concat(Insta.conf.paths.articles + pg.escapeQuotesHTML(t.toString(true)), "#").concat(pg.escapeQuotesHTML(t.anchor));
        return "".concat(start, '<a href="').concat(sectionLink, '">&rarr;</a> ').concat(pg.escapeQuotesHTML(section)).concat(end);
      }
      return Previewmaker.esWiki2HtmlPart(this.data);
    }
    /**
     * Works around livepreview bugs.
     *
     * @private
     */
    fixHTML() {
      if (!this.html) {
        return;
      }
      let ret = this.html;
      ret = ret.replace(new RegExp('(<a href="'.concat(pg.wiki.articlePath, '/[^"]*)[?](.*?")'), "g"), "$1%3F$2");
      ret = ret.replace(new RegExp("(<a href='".concat(pg.wiki.articlePath, "/[^']*)[?](.*?')"), "g"), "$1%3F$2");
      this.html = ret;
    }
    /**
     * Generates the preview and displays it in the current popup.
     * Does nothing if the generated preview is invalid or consists of whitespace only.
     * Also activates wikilinks in the preview for subpopups if the popupSubpopups option is true.
     */
    showPreview() {
      this.makePreview();
      if (typeof this.html !== "string") {
        return;
      }
      if (/^\s*$/.test(this.html)) {
        return;
      }
      setPopupHTML("<hr>", "popupPrePreviewSep", this.owner.idNumber);
      setPopupTipsAndHTML(this.html, "popupPreview", this.owner.idNumber, {
        owner: this.owner
      });
      const more = this.fullLength > this.data.length ? this.moreLink() : "";
      setPopupHTML(more, "popupPreviewMore", this.owner.idNumber);
    }
    /**
     * @private
     */
    moreLink() {
      const a = document.createElement("a");
      a.className = "popupMoreLink";
      a.innerHTML = popupString("more...");
      const self = this;
      a.onclick = () => {
        self.maxCharacters += 2e3;
        self.maxSentences += 20;
        self.setData();
        self.showPreview();
      };
      return a;
    }
    /**
     * @private
     */
    stripLongTemplates() {
      this.html = this.html.replace(/^.{0,1000}{{[^}]*?(<(p|br)( \/)?>\s*){2,}([^{}]*?}})?/gi, "");
      this.html = this.html.split("\n").join(" ");
      this.html = this.html.replace(/{{[^}]*<pre>[^}]*}}/gi, "");
    }
    /**
     * @private
     */
    killMultilineTemplates() {
      this.kill("{{{", "}}}");
      this.kill(/\s*{{[^{}]*\n/, "}}", "{{");
    }
  }
  const loadAPIPreview = (queryType, article, navpop) => {
    const art = new Title(article).urlString();
    let url = "".concat(pg.wiki.apiwikibase, "?format=json&formatversion=2&action=query&");
    let htmlGenerator = () => {
      void mw.notify("invalid html generator", {
        tag: "popups",
        type: "error"
      });
    };
    let usernameart = "";
    switch (queryType) {
      case "history":
        url += "titles=".concat(art, "&prop=revisions&rvlimit=").concat(getValueOf("popupHistoryPreviewLimit"));
        htmlGenerator = APIhistoryPreviewHTML;
        break;
      case "category":
        url += "list=categorymembers&cmtitle=".concat(art);
        htmlGenerator = APIcategoryPreviewHTML;
        break;
      case "userinfo": {
        const username = new Title(article).userName();
        usernameart = encodeURIComponent(username);
        url += pg.re.ipUser.test(username) ? "list=blocks&bkprop=range|restrictions&bkip=".concat(usernameart) : "list=users|usercontribs&usprop=blockinfo|groups|editcount|registration|gender&ususers=".concat(usernameart, "&meta=globaluserinfo&guiprop=groups|unattached&guiuser=").concat(usernameart, "&uclimit=1&ucprop=timestamp&ucuser=").concat(usernameart);
        htmlGenerator = APIuserInfoPreviewHTML;
        break;
      }
      case "contribs":
        usernameart = encodeURIComponent(new Title(article).userName());
        url += "list=usercontribs&ucuser=".concat(usernameart, "&uclimit=").concat(getValueOf("popupContribsPreviewLimit"));
        htmlGenerator = APIcontribsPreviewHTML;
        break;
      case "imagepagepreview": {
        let trail = "";
        if (getValueOf("popupImageLinks")) {
          trail = "&list=imageusage&iutitle=".concat(art);
        }
        url += "titles=".concat(art, "&prop=revisions|imageinfo&rvprop=content").concat(trail);
        htmlGenerator = APIimagepagePreviewHTML;
        break;
      }
      case "backlinks":
        url += "list=backlinks&bltitle=".concat(art);
        htmlGenerator = APIbacklinksPreviewHTML;
        break;
      case "revision":
        url += article.oldid ? "revids=".concat(article.oldid) : "titles=".concat(article.removeAnchor().urlString());
        url += "&prop=revisions|pageprops|info|images|categories&rvprop=ids|timestamp|flags|comment|user|content&cllimit=max&imlimit=max";
        htmlGenerator = APIrevisionPreviewHTML;
        break;
    }
    pendingNavpopTask(navpop);
    const callback = (d) => {
      log("callback of API functions was hit");
      if (queryType === "userinfo") {
        fetchUserGroupNames(d.data).then(() => {
          showAPIPreview(queryType, htmlGenerator(article, d, navpop), navpop.idNumber, navpop, d);
        });
        return;
      }
      showAPIPreview(queryType, htmlGenerator(article, d, navpop), navpop.idNumber, navpop, d);
    };
    const go = () => {
      getPageWithCaching(url, callback, navpop);
      return true;
    };
    if (navpop.visible || !getValueOf("popupLazyDownloads")) {
      go();
    } else {
      navpop.addHook(go, "unhide", "before", "DOWNLOAD_".concat(queryType, "_QUERY_DATA"));
    }
  };
  const linkList = (list) => {
    list.sort((x, y) => {
      return x === y ? 0 : x < y ? -1 : 1;
    });
    const buf = [];
    var _iterator1 = _createForOfIteratorHelper(list), _step1;
    try {
      for (_iterator1.s(); !(_step1 = _iterator1.n()).done; ) {
        const element = _step1.value;
        buf.push(wikiLink({
          article: new Title(element),
          text: element.split(" ").join("&nbsp;"),
          action: "view"
        }));
      }
    } catch (err) {
      _iterator1.e(err);
    } finally {
      _iterator1.f();
    }
    return buf.join(", ");
  };
  const getTimeOffset = () => {
    const tz = mw.user.options.get("timecorrection");
    if (tz && tz.includes("|")) {
      return Number.parseInt(tz.split("|")[1], 10);
    }
    return 0;
  };
  const getTimeZone = () => {
    if (!pg.user.timeZone) {
      const tz = mw.user.options.get("timecorrection");
      pg.user.timeZone = "UTC";
      if (tz) {
        const tzComponents = tz.split("|");
        if (tzComponents.length === 3 && tzComponents[0] === "ZoneInfo") {
          [, , pg.user.timeZone] = tzComponents;
        } else {
          errlog("Unexpected timezone information: ".concat(tz));
        }
      }
    }
    return pg.user.timeZone;
  };
  const useTimeOffset = () => {
    if (Intl.DateTimeFormat.prototype.formatToParts === void 0) {
      return true;
    }
    const tz = mw.user.options.get("timecorrection");
    if (tz && !tz.includes("ZoneInfo|")) {
      return true;
    }
    return false;
  };
  const getLocales = () => {
    if (!pg.user.locales) {
      let userLanguage = document.querySelector("html").getAttribute("lang");
      if (getValueOf("popupLocale")) {
        userLanguage = getValueOf("popupLocale");
      } else if (userLanguage === "en") {
        userLanguage = getMWDateFormat() === "mdy" ? "en-US" : "en-GB";
      }
      pg.user.locales = Intl.DateTimeFormat.supportedLocalesOf([userLanguage, navigator.language]);
    }
    return pg.user.locales;
  };
  const getMWDateFormat = () => {
    return mw.user.options.get("date");
  };
  const editPreviewTable = (article, h, reallyContribs) => {
    let html = ["<table>"];
    let day;
    let curart = article;
    let page;
    let makeFirstColumnLinks;
    if (reallyContribs) {
      makeFirstColumnLinks = (currentRevision) => {
        let result = "(";
        result += '<a href="'.concat(pg.wiki.titlebase).concat(new Title(currentRevision.title).urlString(), "&diff=prev&oldid=").concat(currentRevision.revid, '">').concat(popupString("diff"), "</a>");
        result += "&nbsp;|&nbsp;";
        result += '<a href="'.concat(pg.wiki.titlebase).concat(new Title(currentRevision.title).urlString(), '&action=history">').concat(popupString("hist"), "</a>");
        result += ")";
        return result;
      };
    } else {
      const firstRevid = h[0].revid;
      makeFirstColumnLinks = (currentRevision) => {
        let result = "(";
        result += '<a href="'.concat(pg.wiki.titlebase).concat(new Title(curart).urlString(), "&diff=").concat(firstRevid, "&oldid=").concat(currentRevision.revid, '">').concat(popupString("cur"), "</a>");
        result += "&nbsp;|&nbsp;";
        result += '<a href="'.concat(pg.wiki.titlebase).concat(new Title(curart).urlString(), "&diff=prev&oldid=").concat(currentRevision.revid, '">').concat(popupString("last"), "</a>");
        result += ")";
        return result;
      };
    }
    var _iterator10 = _createForOfIteratorHelper(h.entries()), _step10;
    try {
      for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
        const [i, element] = _step10.value;
        if (reallyContribs) {
          page = element.title;
          curart = new Title(page);
        }
        const minor = element.minor ? "<b>m </b>" : "";
        const editDate = new Date(element.timestamp);
        let thisDay = formattedDate(editDate);
        const thisTime = formattedTime(editDate);
        if (thisDay === day) {
          thisDay = "";
        } else {
          day = thisDay;
        }
        if (thisDay) {
          html.push('<tr><td colspan=3><span class="popup_history_date">'.concat(thisDay, "</span></td></tr>"));
        }
        html.push('<tr class="popup_history_row_'.concat(i % 2 ? "odd" : "even", '">'), "<td>".concat(makeFirstColumnLinks(element), "</td>"), '<td><a href="'.concat(pg.wiki.titlebase).concat(new Title(curart).urlString(), "&oldid=").concat(element.revid, '">').concat(thisTime, "</a></td>"));
        let col3url = "";
        let col3txt = "";
        if (reallyContribs) {
          col3url = pg.wiki.titlebase + curart.urlString();
          col3txt = pg.escapeQuotesHTML(page);
        } else {
          const {
            user
          } = element;
          if (element.userhidden) {
            col3url = getValueOf("popupRevDelUrl");
            col3txt = pg.escapeQuotesHTML(popupString("revdel"));
          } else {
            col3url = pg.re.ipUser.test(user) ? "".concat(pg.wiki.titlebase + mw.config.get("wgFormattedNamespaces")[pg.nsSpecialId], ":Contributions&target=").concat(new Title(user).urlString()) : "".concat(pg.wiki.titlebase + mw.config.get("wgFormattedNamespaces")[pg.nsUserId], ":").concat(new Title(user).urlString());
            col3txt = pg.escapeQuotesHTML(user);
          }
        }
        html.push("<td>".concat(reallyContribs ? minor : "", '<a href="').concat(col3url, '">').concat(col3txt, "</a></td>"));
        let comment = "";
        const c = element.comment || element.content;
        if (c) {
          comment = new Previewmaker(c, new Title(curart).toUrl()).editSummaryPreview();
        } else if (element.commenthidden) {
          comment = popupString("revdel");
        }
        html.push("<td>".concat(reallyContribs ? "" : minor).concat(comment, "</td>"), "</tr>");
        html = [html.join("")];
      }
    } catch (err) {
      _iterator10.e(err);
    } finally {
      _iterator10.f();
    }
    html.push("</table>");
    return html.join("");
  };
  const adjustDate = (d, offset) => {
    const o = offset * 60 * 1e3;
    return new Date(+d + o);
  };
  const convertTimeZone = (date, timeZone) => {
    return new Date(date.toLocaleString("en-US", {
      timeZone
    }));
  };
  const formattedDateTime = (date) => {
    if (useTimeOffset()) {
      return "".concat(formattedDate(date), " ").concat(formattedTime(date));
    }
    if (getMWDateFormat() === "ISO 8601") {
      const d2 = convertTimeZone(date, getTimeZone());
      return "".concat(map(zeroFill, [d2.getFullYear(), d2.getMonth() + 1, d2.getDate()]).join("-"), "T").concat(map(zeroFill, [d2.getHours(), d2.getMinutes(), d2.getSeconds()]).join(":"));
    }
    const options = getValueOf("popupDateTimeFormatterOptions");
    options.timeZone = getTimeZone();
    return date.toLocaleString(getLocales(), options);
  };
  const formattedDate = (date) => {
    let d2;
    if (useTimeOffset()) {
      d2 = adjustDate(date, getTimeOffset());
      return map(zeroFill, [d2.getUTCFullYear(), d2.getUTCMonth() + 1, d2.getUTCDate()]).join("-");
    }
    if (getMWDateFormat() === "ISO 8601") {
      d2 = convertTimeZone(date, getTimeZone());
      return map(zeroFill, [d2.getFullYear(), d2.getMonth() + 1, d2.getDate()]).join("-");
    }
    const options = getValueOf("popupDateFormatterOptions");
    options.timeZone = getTimeZone();
    return date.toLocaleDateString(getLocales(), options);
  };
  const formattedTime = (date) => {
    let d2;
    if (useTimeOffset()) {
      d2 = adjustDate(date, getTimeOffset());
      return map(zeroFill, [d2.getUTCHours(), d2.getUTCMinutes(), d2.getUTCSeconds()]).join(":");
    }
    if (getMWDateFormat() === "ISO 8601") {
      d2 = convertTimeZone(date, getTimeZone());
      return map(zeroFill, [d2.getHours(), d2.getMinutes(), d2.getSeconds()]).join(":");
    }
    const options = getValueOf("popupTimeFormatterOptions");
    options.timeZone = getTimeZone();
    return date.toLocaleTimeString(getLocales(), options);
  };
  const fetchUserGroupNames = (userinfoResponse) => {
    const queryObj = getJsObj(userinfoResponse).query;
    const user = anyChild(queryObj.users);
    const messages = [];
    if (user.groups) {
      var _iterator11 = _createForOfIteratorHelper(user.groups), _step11;
      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done; ) {
          const groupName = _step11.value;
          if (!["*", "user", "autoconfirmed"].includes(groupName)) {
            messages.push("group-".concat(groupName, "-member"));
          }
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }
    }
    if (queryObj.globaluserinfo && queryObj.globaluserinfo.groups) {
      var _iterator12 = _createForOfIteratorHelper(queryObj.globaluserinfo.groups), _step12;
      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done; ) {
          const groupName = _step12.value;
          messages.push("group-".concat(groupName, "-member"));
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }
    }
    return getMwApi().loadMessagesIfMissing(messages);
  };
  const showAPIPreview = (queryType, html, id, navpop, download) => {
    let target = "popupPreview";
    completedNavpopTask(navpop);
    switch (queryType) {
      case "imagelinks":
      case "category":
        target = "popupPostPreview";
        break;
      case "userinfo":
        target = "popupUserData";
        break;
      case "revision":
        insertPreview(download);
        return;
    }
    setPopupTipsAndHTML(html, target, id);
  };
  const APIrevisionPreviewHTML = (_article, download) => {
    try {
      const jsObj = getJsObj(download.data);
      const page = anyChild(jsObj.query.pages);
      if (page.missing) {
        download.owner = null;
        return;
      }
      const content = page && page.revisions && page.revisions[0].contentmodel === "wikitext" ? page.revisions[0].content : null;
      if (typeof content === "string") {
        download.data = content;
        download.lastModified = new Date(page.revisions[0].timestamp);
      }
    } catch {
      return "Revision preview failed :(";
    }
  };
  const APIbacklinksPreviewHTML = (_article, download) => {
    try {
      const jsObj = getJsObj(download.data);
      const list = jsObj.query.backlinks;
      let html = [];
      if (!list) {
        return popupString("No backlinks found");
      }
      var _iterator13 = _createForOfIteratorHelper(list), _step13;
      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done; ) {
          const element = _step13.value;
          const t = new Title(element.title);
          html.push('<a href="'.concat(pg.wiki.titlebase).concat(t.urlString(), '">').concat(t.toString().entify(), "</a>"));
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }
      html = html.join(", ");
      if (jsObj.continue && jsObj.continue.blcontinue) {
        html += popupString(" and more");
      }
      return html;
    } catch {
      return "backlinksPreviewHTML went wonky";
    }
  };
  pg.fn.APIsharedImagePagePreviewHTML = (obj) => {
    log("APIsharedImagePagePreviewHTML");
    const popupid = obj.requestid;
    if (obj.query && obj.query.pages) {
      const page = anyChild(obj.query.pages);
      const content = page && page.revisions && page.revisions[0].contentmodel === "wikitext" ? page.revisions[0].content : null;
      if (typeof content === "string" && pg && pg.current && pg.current.link && pg.current.link.navpopup) {
        const p = new Previewmaker(content, pg.current.link.navpopup.article, pg.current.link.navpopup);
        p.makePreview();
        setPopupHTML(p.html, "popupSecondPreview", popupid);
      }
    }
  };
  const APIimagepagePreviewHTML = (article, download, navpop) => {
    try {
      const jsObj = getJsObj(download.data);
      const page = anyChild(jsObj.query.pages);
      const content = page && page.revisions && page.revisions[0].contentmodel === "wikitext" ? page.revisions[0].content : null;
      let ret = "";
      let alt = "";
      try {
        [{
          alt
        }] = navpop.parentAnchor.childNodes;
      } catch {
      }
      if (alt) {
        ret = "".concat(ret, "<hr><b>").concat(popupString("Alt text:"), "</b> ").concat(pg.escapeQuotesHTML(alt));
      }
      if (typeof content === "string") {
        const p = prepPreviewmaker(content, article, navpop);
        p.makePreview();
        if (p.html) {
          ret += "<hr>".concat(p.html);
        }
        if (getValueOf("popupSummaryData")) {
          const info = getPageInfo(content, download);
          log(info);
          setPopupTrailer(info, navpop.idNumber);
        }
      }
      if (page && page.imagerepository === "shared") {
        const art = new Title(article);
        const encart = encodeURIComponent("File:".concat(art.stripNamespace()));
        const shared_url = "".concat(pg.wiki.apicommonsbase, "?format=json&formatversion=2&callback=pg.fn.APIsharedImagePagePreviewHTML&requestid=").concat(navpop.idNumber, "&action=query&prop=revisions&rvprop=content&titles=").concat(encart);
        ret = "".concat(ret, "<hr>").concat(popupString("Image from Commons"), ': <a href="').concat(pg.wiki.commonsbase, "?title=").concat(encart, '">').concat(popupString("Description page"), "</a>");
        mw.loader.load(shared_url);
      }
      showAPIPreview("imagelinks", APIimagelinksPreviewHTML(article, download), navpop.idNumber, download);
      return ret;
    } catch {
      return "API imagepage preview failed :(";
    }
  };
  const APIimagelinksPreviewHTML = (_article, download) => {
    try {
      const jsobj = getJsObj(download.data);
      const list = jsobj.query.imageusage;
      if (list) {
        const ret = [];
        var _iterator14 = _createForOfIteratorHelper(list), _step14;
        try {
          for (_iterator14.s(); !(_step14 = _iterator14.n()).done; ) {
            const element = _step14.value;
            ret.push(element.title);
          }
        } catch (err) {
          _iterator14.e(err);
        } finally {
          _iterator14.f();
        }
        if (ret.length === 0) {
          return popupString("No image links found");
        }
        return "<h2>".concat(popupString("File links"), "</h2>").concat(linkList(ret));
      }
      return popupString("No image links found");
    } catch {
      return "Image links preview generation failed :(";
    }
  };
  const APIcategoryPreviewHTML = (_article, download) => {
    try {
      const jsobj = getJsObj(download.data);
      const list = jsobj.query.categorymembers;
      let ret = [];
      var _iterator15 = _createForOfIteratorHelper(list), _step15;
      try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done; ) {
          const element = _step15.value;
          ret.push(element.title);
        }
      } catch (err) {
        _iterator15.e(err);
      } finally {
        _iterator15.f();
      }
      if (ret.length === 0) {
        return popupString("Empty category");
      }
      ret = "<h2>".concat(tprintf("Category members (%s shown)", [ret.length]), "</h2>").concat(linkList(ret));
      if (jsobj.continue && jsobj.continue.cmcontinue) {
        ret += popupString(" and more");
      }
      return ret;
    } catch {
      return "Category preview failed :(";
    }
  };
  const APIuserInfoPreviewHTML = (_article, download) => {
    let ret = [];
    let queryobj = {};
    try {
      queryobj = getJsObj(download.data).query;
    } catch {
      return "Userinfo preview failed :(";
    }
    const user = anyChild(queryobj.users);
    if (user) {
      const {
        globaluserinfo
      } = queryobj;
      if (user.invalid === "") {
        ret.push(popupString("Invalid user"));
      } else if (user.missing === "") {
        ret.push(popupString("Not a registered username"));
      }
      if (user.blockedby) {
        if (user.blockpartial) {
          ret.push("<b>".concat(popupString("Has blocks"), "</b>"));
        } else {
          ret.push("<b>".concat(popupString("BLOCKED"), "</b>"));
        }
      }
      if (globaluserinfo && ("locked" in globaluserinfo || "hidden" in globaluserinfo)) {
        let lockedSulAccountIsAttachedToThis = true;
        for (let i = 0; globaluserinfo.unattached && i < globaluserinfo.unattached.length; i++) {
          if (globaluserinfo.unattached[i].wiki === mw.config.get("wgDBname")) {
            lockedSulAccountIsAttachedToThis = false;
            break;
          }
        }
        if (lockedSulAccountIsAttachedToThis) {
          if ("locked" in globaluserinfo) {
            ret.push("<b><i>".concat(popupString("LOCKED"), "</i></b>"));
          }
          if ("hidden" in globaluserinfo) {
            ret.push("<b><i>".concat(popupString("HIDDEN"), "</i></b>"));
          }
        }
      }
      if (getValueOf("popupShowGender") && user.gender) {
        switch (user.gender) {
          case "male":
            ret.push("".concat(popupString("he/him"), " · "));
            break;
          case "female":
            ret.push("".concat(popupString("she/her"), " · "));
            break;
        }
      }
      if (user.groups) {
        var _iterator16 = _createForOfIteratorHelper(user.groups), _step16;
        try {
          for (_iterator16.s(); !(_step16 = _iterator16.n()).done; ) {
            const groupName = _step16.value;
            if (!["*", "user", "autoconfirmed"].includes(groupName)) {
              ret.push(pg.escapeQuotesHTML(mw.message("group-".concat(groupName, "-member"), user.gender).text()));
            }
          }
        } catch (err) {
          _iterator16.e(err);
        } finally {
          _iterator16.f();
        }
      }
      if (globaluserinfo && globaluserinfo.groups) {
        var _iterator17 = _createForOfIteratorHelper(globaluserinfo.groups), _step17;
        try {
          for (_iterator17.s(); !(_step17 = _iterator17.n()).done; ) {
            const groupName = _step17.value;
            ret.push(
              // Messages that can be used here:
              // * see [[Special:PrefixIndex/MediaWiki:Group-]]
              // * for more information
              "<i>".concat(pg.escapeQuotesHTML(mw.message("group-".concat(groupName, "-member"), user.gender).text()), "</i>")
            );
          }
        } catch (err) {
          _iterator17.e(err);
        } finally {
          _iterator17.f();
        }
      }
      if (user.registration) {
        var _user$editcount;
        ret.push(pg.escapeQuotesHTML(((_user$editcount = user.editcount) !== null && _user$editcount !== void 0 ? _user$editcount : "0") + popupString(" edits since: ") + (user.registration ? formattedDate(new Date(user.registration)) : "")));
      }
    }
    if (queryobj.usercontribs && queryobj.usercontribs.length > 0) {
      ret.push(popupString("last edit on ") + formattedDate(new Date(queryobj.usercontribs[0].timestamp)));
    }
    if (queryobj.blocks) {
      ret.push(popupString("IP user"));
      for (let l = 0; l < queryobj.blocks.length; l++) {
        let rbstr = queryobj.blocks[l].rangestart === queryobj.blocks[l].rangeend ? "BLOCK" : "RANGEBLOCK";
        rbstr = Array.isArray(queryobj.blocks[l].restrictions) ? "".concat(rbstr, "ED") : "Has ".concat(rbstr.toLowerCase(), "s");
        ret.push("<b>".concat(popupString(rbstr), "</b>"));
      }
    }
    for (let m = 0; m < ret.length - 1; m++) {
      if (ret[m].length > 3 && ret[m].slice(Math.max(0, ret[m].length - 3)) === " · ") {
        ret[m] += ret[m + 1];
        ret.splice(m + 1, 1);
        m--;
      }
    }
    ret = "<hr>".concat(ret.join(", "));
    return ret;
  };
  const APIcontribsPreviewHTML = (article, download, navpop) => {
    return APIhistoryPreviewHTML(article, download, navpop, true);
  };
  const APIhistoryPreviewHTML = (article, download, _navpop, reallyContribs) => {
    try {
      const jsobj = getJsObj(download.data);
      let edits = [];
      edits = reallyContribs ? jsobj.query.usercontribs : anyChild(jsobj.query.pages).revisions;
      const ret = editPreviewTable(article, edits, reallyContribs);
      return ret;
    } catch {
      return "History preview failed :-(";
    }
  };
  const setupDebugging = () => {
    if (window.popupDebug) {
      window.log = (x) => {
        console.log(x);
      };
      window.errlog = (x) => {
        console.error("[Popups] ".concat(x));
      };
      log("Initializing logger");
    } else {
      window.log = () => {
      };
      window.errlog = () => {
      };
    }
  };
  const loadImage = (image, navpop) => {
    if (typeof image.stripNamespace !== "function") {
      void mw.notify("loadImages bad", {
        tag: "popups",
        type: "error"
      });
    }
    if (!getValueOf("popupImages")) {
      return;
    }
    if (!isValidImageName(image.toString())) {
      return false;
    }
    const art = image.urlString();
    let url = "".concat(pg.wiki.apiwikibase, "?format=json&formatversion=2&action=query");
    url += "&prop=imageinfo&iiprop=url|mime&iiurlwidth=".concat(getValueOf("popupImageSizeLarge"));
    url += "&titles=".concat(art);
    pendingNavpopTask(navpop);
    const callback = (d) => {
      popupsInsertImage(navpop.idNumber, navpop, d);
    };
    const go = () => {
      getPageWithCaching(url, callback, navpop);
      return true;
    };
    if (navpop.visible || !getValueOf("popupLazyDownloads")) {
      go();
    } else {
      navpop.addHook(go, "unhide", "after", "DOWNLOAD_IMAGE_QUERY_DATA");
    }
  };
  const popupsInsertImage = (id, _navpop, download) => {
    log("popupsInsertImage");
    let imageinfo;
    try {
      const jsObj = getJsObj(download.data);
      const imagepage = anyChild(jsObj.query.pages);
      if (imagepage.imageinfo === void 0) {
        return;
      }
      [imageinfo] = imagepage.imageinfo;
    } catch {
      log("popupsInsertImage failed :(");
      return;
    }
    const popupImage = document.querySelector("#popupImg".concat(id));
    if (!popupImage) {
      log("could not find insertion point for image");
      return;
    }
    popupImage.width = getValueOf("popupImageSize");
    popupImage.style.display = "inline";
    if (imageinfo.thumburl) {
      popupImage.src = imageinfo.thumburl;
    } else if (imageinfo.mime.indexOf("image") === 0) {
      popupImage.src = imageinfo.url;
      log("a thumb could not be found, using original image");
    } else {
      log("fullsize imagethumb, but not sure if it's an image");
    }
    const a = document.querySelector("#popupImageLink".concat(id));
    if (a === null) {
      return null;
    }
    switch (getValueOf("popupThumbAction")) {
      case "imagepage":
        if (pg.current.article.namespaceId() !== pg.nsImageId) {
          a.href = imageinfo.descriptionurl;
          popTipsSoonFn("popupImage".concat(id))();
          break;
        }
      /* falls through */
      case "sizetoggle":
        a.onclick = toggleSize;
        a.title = popupString("Toggle image size");
        return;
      case "linkfull":
        a.href = imageinfo.url;
        a.title = popupString("Open full-size image");
    }
  };
  const toggleSize = function toggleSize2() {
    const self = this;
    if (!self) {
      void mw.notify("self is null :/", {
        tag: "popups",
        type: "error"
      });
      return;
    }
    const img = self.firstChild;
    if (!img) {
      void mw.notify("img is null :/", {
        tag: "popups",
        type: "error"
      });
      return;
    }
    img.style.width = !img.style.width || img.style.width === "" ? "100%" : "";
  };
  const getValidImageFromWikiText = (wikiText) => {
    let matched;
    let match;
    const t = removeMatchesUnless(wikiText, /(<!--[\S\s]*?-->)/, 1, /^<!--[^[]*popup/i);
    while ((match = pg.re.image.exec(t)) !== null) {
      const m = match[2] || match[6];
      if (isValidImageName(m)) {
        matched = m;
        break;
      }
    }
    pg.re.image.lastIndex = 0;
    if (!matched) {
      return null;
    }
    return "".concat(mw.config.get("wgFormattedNamespaces")[pg.nsImageId], ":").concat(upcaseFirst(matched));
  };
  const removeMatchesUnless = (str, re1, parencount, re2) => {
    const split = str.split(re1);
    const c = parencount + 1;
    for (let i = 0; i < split.length; ++i) {
      if (i % c === 0 || re2.test(split[i])) {
        continue;
      }
      split[i] = "";
    }
    return split.join("");
  };
  const setNamespaces = () => {
    pg.nsSpecialId = -1;
    pg.nsMainspaceId = 0;
    pg.nsImageId = 6;
    pg.nsUserId = 2;
    pg.nsUsertalkId = 3;
    pg.nsCategoryId = 14;
    pg.nsTemplateId = 10;
  };
  const setRedirs = () => {
    const r = "redirect";
    const R = "REDIRECT";
    const redirLists = {
      ar: [R, "تحويل"],
      be: [r, "перанакіраваньне"],
      bg: [r, "пренасочване", "виж"],
      bs: [r, "Preusmjeri", "preusmjeri", "PREUSMJERI"],
      bn: [R, "পুনর্নির্দেশ"],
      cs: [R, "PŘESMĚRUJ"],
      cy: [r, "ail-cyfeirio"],
      de: [R, "WEITERLEITUNG"],
      el: [R, "ΑΝΑΚΑΤΕΥΘΥΝΣΗ"],
      eo: [R, "ALIDIREKTU", "ALIDIREKTI"],
      es: [R, "REDIRECCIÓN"],
      et: [r, "suuna"],
      ga: [r, "athsheoladh"],
      gl: [r, "REDIRECCIÓN", "REDIRECIONAMENTO"],
      he: [R, "הפניה"],
      hu: [R, "ÁTIRÁNYÍTÁS"],
      is: [r, "tilvísun", "TILVÍSUN"],
      it: [R, "RINVIA", "Rinvia"],
      ja: [R, "転送"],
      mk: [r, "пренасочување", "види"],
      nds: [r, "wiederleiden"],
      "nds-nl": [R, "DEURVERWIEZING", "DUURVERWIEZING"],
      nl: [R, "DOORVERWIJZING"],
      nn: [r, "omdiriger"],
      pl: [R, "PATRZ", "PRZEKIERUJ", "TAM"],
      pt: [R, "redir"],
      ru: [R, "ПЕРЕНАПРАВЛЕНИЕ", "ПЕРЕНАПР"],
      sk: [r, "presmeruj"],
      sr: [r, "Преусмери", "преусмери", "ПРЕУСМЕРИ", "Preusmeri", "preusmeri", "PREUSMERI"],
      tt: [R, "yünältü", "перенаправление", "перенапр"],
      uk: [R, "ПЕРЕНАПРАВЛЕННЯ", "ПЕРЕНАПР"],
      vi: [r, "đổi"],
      yi: [R, "ווייטערפירן"],
      zh: [R, "重定向"]
      // no comma
    };
    const redirList = redirLists[pg.wiki.lang] || [r, R];
    pg.re.redirect = new RegExp("^\\s*[#](".concat(redirList.join("|"), ").*?\\[{2}([^\\|\\]]*)(|[^\\]]*)?\\]{2}\\s*(.*)"), "i");
  };
  const setInterwiki = () => {
    if (pg.wiki.wikimedia) {
      pg.wiki.interwiki = "aa|ab|ace|af|ak|als|am|an|ang|ar|arc|arz|as|ast|av|ay|az|ba|bar|bat-smg|bcl|be|be-x-old|bg|bh|bi|bjn|bm|bn|bo|bpy|br|bs|bug|bxr|ca|cbk-zam|cdo|ce|ceb|ch|cho|chr|chy|ckb|co|cr|crh|cs|csb|cu|cv|cy|da|de|diq|dsb|dv|dz|ee|el|eml|en|eo|es|et|eu|ext|fa|ff|fi|fiu-vro|fj|fo|fr|frp|frr|fur|fy|ga|gag|gan|gd|gl|glk|gn|got|gu|gv|ha|hak|haw|he|hi|hif|ho|hr|hsb|ht|hu|hy|hz|ia|id|ie|ig|ii|ik|ilo|io|is|it|iu|ja|jbo|jv|ka|kaa|kab|kbd|kg|ki|kj|kk|kl|km|kn|ko|koi|kr|krc|ks|ksh|ku|kv|kw|ky|la|lad|lb|lbe|lg|li|lij|lmo|ln|lo|lt|ltg|lv|map-bms|mdf|mg|mh|mhr|mi|mk|ml|mn|mo|mr|mrj|ms|mt|mus|mwl|my|myv|mzn|na|nah|nap|nds|nds-nl|ne|new|ng|nl|nn|no|nov|nrm|nv|ny|oc|om|or|os|pa|pag|pam|pap|pcd|pdc|pfl|pi|pih|pl|pms|pnb|pnt|ps|pt|qu|rm|rmy|rn|ro|roa-rup|roa-tara|ru|rue|rw|sa|sah|sc|scn|sco|sd|se|sg|sh|si|simple|sk|sl|sm|sn|so|sq|sr|srn|ss|st|stq|su|sv|sw|szl|ta|te|tet|tg|th|ti|tk|tl|tn|to|tpi|tr|ts|tt|tum|tw|ty|udm|ug|uk|ur|uz|ve|vec|vi|vls|vo|wa|war|wo|wuu|xal|xh|yi|yo|za|zea|zh|zh-classical|zh-min-nan|zh-yue|zu";
      pg.re.interwiki = new RegExp("^".concat(pg.wiki.interwiki, ":"));
    } else {
      pg.wiki.interwiki = null;
      pg.re.interwiki = /^$/;
    }
  };
  const nsRe = (namespaceId) => {
    const imageNamespaceVariants = [];
    for (var _i2 = 0, _Object$entries2 = Object.entries(mw.config.get("wgNamespaceIds")); _i2 < _Object$entries2.length; _i2++) {
      const [_localizedNamespaceLc, _namespaceId] = _Object$entries2[_i2];
      if (_namespaceId !== namespaceId) {
        continue;
      }
      const localizedNamespaceLc = upcaseFirst(_localizedNamespaceLc);
      imageNamespaceVariants.push(mw.util.escapeRegExp(localizedNamespaceLc).split(" ").join("[ _]"), mw.util.escapeRegExp(encodeURI(localizedNamespaceLc)));
    }
    return "(?:".concat(imageNamespaceVariants.join("|"), ")");
  };
  const nsReImage = () => {
    return nsRe(pg.nsImageId);
  };
  const getEditboxSelection = () => {
    let editbox;
    try {
      editbox = document.editform.wpTextbox1;
    } catch {
      return;
    }
    if (document.selection) {
      return document.selection.createRange().text;
    }
    const selStart = editbox.selectionStart;
    const selEnd = editbox.selectionEnd;
    return editbox.value.substring(selStart, selEnd);
  };
  const doSelectionPopup = () => {
    const sel = getEditboxSelection();
    const open = sel.indexOf("[[");
    const pipe = sel.indexOf("|");
    const close = sel.indexOf("]]");
    if (open === -1 || pipe === -1 && close === -1) {
      return;
    }
    if (pipe !== -1 && open > pipe || close !== -1 && open > close) {
      return;
    }
    const article = new Title(sel.substring(open + 2, pipe < 0 ? close : pipe));
    if (getValueOf("popupOnEditSelection") === "boxpreview") {
      return doSeparateSelectionPopup(sel, article);
    }
    if (close > 0 && sel.slice(Math.max(0, close + 2)).includes("[[")) {
      return;
    }
    const a = document.createElement("a");
    a.href = pg.wiki.titlebase + article.urlString();
    mouseOverWikiLink2(a);
    if (a.navpopup) {
      a.navpopup.addHook(() => {
        runStopPopupTimer(a.navpopup);
      }, "unhide", "after");
    }
  };
  const doSeparateSelectionPopup = (str, article) => {
    let div = document.querySelector("#selectionPreview");
    if (!div) {
      div = document.createElement("div");
      div.id = "selectionPreview";
      try {
        const box = document.editform.wpTextbox1;
        box.parentNode.insertBefore(div, box);
      } catch {
        return;
      }
    }
    const p = prepPreviewmaker(str, article, newNavpopup(document.createElement("a"), article));
    p.makePreview();
    if (p.html) {
      div.innerHTML = p.html;
    }
    div.ranSetupTooltipsAlready = false;
    popTipsSoonFn("selectionPreview")();
  };
  class Mousetracker {
    constructor() {
      this.loopDelay = 400;
      this.timer = null;
      this.active = false;
      this.dirty = true;
      this.hooks = [];
    }
    /**
     * Adds a hook, to be called when we get events.
     *
     * @param {Function} f A function which is called as
     * <code>f(x,y)</code>. It should return <code>true</code> when it
     * wants to be removed, and <code>false</code> otherwise.
     */
    addHook(f) {
      this.hooks.push(f);
    }
    /**
     * Runs hooks, passing them the x
     * and y coords of the mouse.  Hook functions that return true are
     * passed to {@source Mousetracker#removeHooks} for removal.
     *
     * @private
     */
    runHooks() {
      if (!this.hooks || this.hooks.length === 0) {
        return;
      }
      let remove = false;
      const removeObj = {};
      const {
        x
      } = this;
      const {
        y
      } = this;
      const len = this.hooks.length;
      for (let i = 0; i < len; ++i) {
        if (this.hooks[i](x, y) === true) {
          remove = true;
          removeObj[i] = true;
        }
      }
      if (remove) {
        this.removeHooks(removeObj);
      }
    }
    /**
     * Removes hooks.
     *
     * @private
     * @param {Object} removeObj An object whose keys are the index
     * numbers of functions for removal, with values that evaluate to true
     */
    removeHooks(removeObj) {
      const newHooks = [];
      const len = this.hooks.length;
      for (let i = 0; i < len; ++i) {
        if (!removeObj[i]) {
          newHooks.push(this.hooks[i]);
        }
      }
      this.hooks = newHooks;
    }
    /**
     * Event listener for mouse wiggles.
     * We simply grab the event, set x and y and run the hooks.
     * This makes the cpu all hot and bothered :-(
     *
     * @private
     * @param {Event} e Mousemove event
     */
    track(e) {
      e || (e = window.event);
      let x;
      let y;
      if (e) {
        if (e.pageX) {
          x = e.pageX;
          y = e.pageY;
        } else if (e.clientX === void 0) {
          return;
        } else {
          let left;
          let top;
          const docElt = document.documentElement;
          if (docElt) {
            left = docElt.scrollLeft;
          }
          left || (left = document.querySelector("body").scrollLeft || document.scrollLeft || 0);
          if (docElt) {
            top = docElt.scrollTop;
          }
          top || (top = document.querySelector("body").scrollTop || document.scrollTop || 0);
          x = e.clientX + left;
          y = e.clientY + top;
        }
        this.setPosition(x, y);
      }
    }
    /**
     * Sets the x and y coordinates stored and takes appropriate action,
     * running hooks as appropriate.
     *
     * @param {Integer} x, y Screen coordinates to set
     * @param {number} x
     * @param {number} y
     */
    setPosition(x, y) {
      this.x = x;
      this.y = y;
      if (this.dirty || this.hooks.length === 0) {
        this.dirty = false;
        return;
      }
      if (typeof this.lastHook_x !== "number") {
        this.lastHook_x = -100;
        this.lastHook_y = -100;
      }
      let diff2 = (this.lastHook_x - x) * (this.lastHook_y - y);
      diff2 = diff2 >= 0 ? diff2 : -diff2;
      if (diff2 > 1) {
        this.lastHook_x = x;
        this.lastHook_y = y;
        if (this.dirty) {
          this.dirty = false;
        } else {
          this.runHooks();
        }
      }
    }
    /**
     * Sets things in motion, unless they are already that is, registering an event listener on
     * <code>document.onmousemove</code>. A half-hearted attempt is made to preserve the old event
     * listener if there is one.
     */
    enable() {
      if (this.active) {
        return;
      }
      this.active = true;
      this.savedListener = document.onmousemove;
      const self = this;
      document.onmousemove = (e) => {
        self.track(e);
      };
      if (this.loopDelay) {
        this.timer = setInterval(() => {
          self.runHooks();
        }, this.loopDelay);
      }
    }
    /**
     * Disables the tracker, removing the event listener.
     */
    disable() {
      if (!this.active) {
        return;
      }
      if (typeof this.savedListener === "function") {
        document.onmousemove = this.savedListener;
      } else {
        delete document.onmousemove;
      }
      if (this.timer) {
        clearInterval(this.timer);
      }
      this.active = false;
    }
  }
  class Navpopup {
    constructor() {
      this.uid = Navpopup.uid++;
      this.visible = false;
      this.noshow = false;
      this.hooks = {
        create: [],
        unhide: [],
        hide: []
      };
      this.hookIds = {};
      this.downloads = [];
      this.pending = null;
      this.fuzz = 5;
      this.constrained = true;
      this.width = 0;
      this.height = 0;
      this.mainDiv = null;
      this.createMainDiv();
    }
    /**
     * Retrieves the {@source #visible} attribute, indicating whether the popup is currently visible.
     *
     * @type boolean
     */
    isVisible() {
      return this.visible;
    }
    /**
     * Repositions popup using CSS style.
     *
     * @private
     * @param {integer} x x-coordinate (px)
     * @param {integer} y y-coordinate (px)
     * @param {boolean} noLimitHor Don't call {@source #limitHorizontalPosition}
     */
    reposition(x, y, noLimitHor) {
      log("reposition(".concat(x, ",").concat(y, ",").concat(noLimitHor, ")"));
      if (x !== void 0 && x !== null) {
        this.left = x;
      }
      if (y !== void 0 && y !== null) {
        this.top = y;
      }
      if (this.left !== void 0 && this.top !== void 0) {
        this.mainDiv.style.left = "".concat(this.left, "px");
        this.mainDiv.style.top = "".concat(this.top, "px");
      }
      if (!noLimitHor) {
        this.limitHorizontalPosition();
      }
    }
    /**
     * Prevents popups from being in silly locations. Hopefully.
     * Should not be run if {@source #constrained} is true.
     *
     * @private
     */
    limitHorizontalPosition() {
      if (!this.constrained || this.tooWide) {
        return;
      }
      this.updateDimensions();
      const x = this.left;
      const w = this.width;
      const cWidth = document.querySelector("body").clientWidth;
      if (x + w >= cWidth || x > 0 && this.maxWidth && this.width < this.maxWidth && this.height > this.width && x > cWidth - this.maxWidth) {
        this.mainDiv.style.left = "-10000px";
        this.mainDiv.style.width = "".concat(this.maxWidth, "px");
        const naturalWidth = Number.parseInt(this.mainDiv.offsetWidth, 10);
        let newLeft = cWidth - naturalWidth - 1;
        if (newLeft < 0) {
          newLeft = 0;
          this.tooWide = true;
        }
        log("limitHorizontalPosition: moving to (".concat(newLeft, ",").concat(this.top, "); naturalWidth=").concat(naturalWidth, ", clientWidth=").concat(cWidth));
        this.reposition(newLeft, null, true);
      }
    }
    /**
     * Brings popup to the top of the z-order.
     * We increment the {@source #highest} property of the contructor here.
     *
     * @private
     */
    raise() {
      this.mainDiv.style.zIndex = Navpopup.highest + 1;
      ++Navpopup.highest;
    }
    /**
     * Shows the popup provided {@source #noshow} is not true.
     * Updates the position, brings the popup to the top of the z-order and unhides it.
     */
    show() {
      if (this.noshow) {
        return;
      }
      this.reposition();
      this.raise();
      this.unhide();
    }
    /**
     * Checks to see if the mouse pointer has
     * stabilised (checking every <code>time</code>/2 milliseconds) and runs the
     * {@source #show} method if it has.
     *
     * @param {integer} time The minimum time (ms) before the popup may be shown.
     */
    showSoonIfStable(time) {
      log("showSoonIfStable, time=".concat(time));
      if (this.visible) {
        return;
      }
      this.noshow = false;
      this.stable_x = -1e4;
      this.stable_y = -1e4;
      const stableShow = () => {
        log("stableShow called");
        const new_x = Navpopup.tracker.x;
        const new_y = Navpopup.tracker.y;
        const dx = self.stable_x - new_x;
        const dy = self.stable_y - new_y;
        const fuzz2 = 0;
        if (dx * dx <= fuzz2 && dy * dy <= fuzz2) {
          log("mouse is stable");
          clearInterval(self.showSoonStableTimer);
          self.reposition(new_x + 2, new_y + 2);
          self.show();
          self.limitHorizontalPosition();
          return;
        }
        self.stable_x = new_x;
        self.stable_y = new_y;
      };
      const self = this;
      this.showSoonStableTimer = setInterval(stableShow, time / 2);
    }
    /**
     * Sets the {@source #noshow} flag and hides the popup. This should be called
     * when the mouse leaves the link before
     * (or after) it's actually been displayed.
     */
    banish() {
      log("banish called");
      this.noshow = true;
      if (this.showSoonStableTimer) {
        log("clearing showSoonStableTimer");
        clearInterval(this.showSoonStableTimer);
      }
      this.hide();
    }
    /**
     * Runs hooks added with {@source #addHook}.
     *
     * @private
     * @param {string} key Key name of the {@source #hooks} array - one of 'create', 'unhide', 'hide'
     * @param {string} when Controls exactly when the hook is run: either 'before' or 'after'
     */
    runHooks(key, when) {
      if (!this.hooks[key]) {
        return;
      }
      const keyHooks = this.hooks[key];
      const len = keyHooks.length;
      for (let i = 0; i < len; ++i) {
        if (keyHooks[i] && keyHooks[i].when === when && Reflect.apply(keyHooks[i].hook, this, [])) {
          if (keyHooks[i].hookId) {
            delete this.hookIds[keyHooks[i].hookId];
          }
          keyHooks[i] = null;
        }
      }
    }
    /**
     * Adds a hook to the popup. Hook functions are run with <code>this</code> set to refer to the
     * Navpopup instance, and no arguments.
     *
     * @param {Function} hook The hook function. Functions that return true are deleted.
     * @param {string} key Key name of the {@source #hooks} array - one of 'create', 'unhide', 'hide'
     * @param {string} when Controls exactly when the hook is run: either 'before' or 'after'
     * @param {string} uid A truthy string identifying the hook function; if it matches another hook
     * in this position, it won't be added again.
     */
    addHook(hook, key, when, uid) {
      when || (when = "after");
      if (!this.hooks[key]) {
        return;
      }
      let hookId;
      if (uid) {
        hookId = [key, when, uid].join("|");
        if (this.hookIds[hookId]) {
          return;
        }
        this.hookIds[hookId] = true;
      }
      this.hooks[key].push({
        hook,
        when,
        hookId
      });
    }
    /**
     * Creates the main DIV element, which contains all the actual popup content.
     * Runs hooks with key 'create'.
     *
     * @private
     */
    createMainDiv() {
      var _this$className;
      if (this.mainDiv) {
        return;
      }
      this.runHooks("create", "before");
      const mainDiv = document.createElement("div");
      const self = this;
      mainDiv.onclick = (e) => {
        self.onclickListener(e);
      };
      mainDiv.className = (_this$className = this.className) !== null && _this$className !== void 0 ? _this$className : "navpopup_maindiv";
      mainDiv.id = mainDiv.className + this.uid;
      mainDiv.style.position = "absolute";
      mainDiv.style.minWidth = "350px";
      mainDiv.style.display = "none";
      mainDiv.className = "navpopup";
      mainDiv.navpopup = this;
      this.mainDiv = mainDiv;
      document.querySelector("body").append(mainDiv);
      this.runHooks("create", "after");
    }
    /**
     * Calls the {@source #raise} method.
     *
     * @private
     */
    onclickListener() {
      this.raise();
    }
    /**
     * Makes the popup draggable, using a {@source Drag} object.
     *
     * @param {string} handleName
     * @private
     */
    makeDraggable(handleName) {
      if (!this.mainDiv) {
        this.createMainDiv();
      }
      const drag = new Drag();
      if (!handleName) {
        drag.startCondition = (e) => {
          try {
            if (!e.shiftKey) {
              return false;
            }
          } catch {
            return false;
          }
          return true;
        };
      }
      let dragHandle;
      if (handleName) {
        dragHandle = document.querySelector("#".concat(handleName));
      }
      dragHandle || (dragHandle = this.mainDiv);
      const self = this;
      drag.endHook = (x, y) => {
        Navpopup.tracker.dirty = true;
        self.reposition(x, y);
      };
      drag.init(dragHandle, this.mainDiv);
    }
    /**
     * Hides the popup using CSS. Runs hooks with key 'hide'.
     * Sets {@source #visible} appropriately.
     * {@source #banish} should be called externally instead of this method.
     *
     * @private
     */
    hide() {
      this.runHooks("hide", "before");
      this.abortDownloads();
      if (this.visible !== void 0 && this.visible) {
        this.mainDiv.style.display = "none";
        this.visible = false;
      }
      this.runHooks("hide", "after");
    }
    /**
     * Shows the popup using CSS. Runs hooks with key 'unhide'.
     * Sets {@source #visible} appropriately.   {@source #show} should be called externally instead of this method.
     *
     * @private
     */
    unhide() {
      this.runHooks("unhide", "before");
      if (this.visible !== void 0 && !this.visible) {
        this.mainDiv.style.display = "inline";
        this.visible = true;
      }
      this.runHooks("unhide", "after");
    }
    /**
     * Sets the <code>innerHTML</code> attribute of the main div containing the popup content.
     *
     * @param {string} html The HTML to set.
     */
    setInnerHTML(html) {
      this.mainDiv.innerHTML = html;
    }
    /**
     * Updates the {@source #width} and {@source #height} attributes with the CSS properties.
     *
     * @private
     */
    updateDimensions() {
      this.width = Number.parseInt(this.mainDiv.offsetWidth, 10);
      this.height = Number.parseInt(this.mainDiv.offsetHeight, 10);
    }
    /**
     * Checks if the point (x,y) is within {@source #fuzz} of the
     * {@source #mainDiv}.
     *
     * @param {integer} x x-coordinate (px)
     * @param {integer} y y-coordinate (px)
     * @type boolean
     */
    isWithin(x, y) {
      if (!this.visible) {
        return false;
      }
      this.updateDimensions();
      const fuzz = this.fuzz || 0;
      return x + fuzz >= this.left && x - fuzz <= this.left + this.width && y + fuzz >= this.top && y - fuzz <= this.top + this.height;
    }
    /**
     * Adds a download to {@source #downloads}.
     *
     * @param {Downloader} download
     */
    addDownload(download) {
      if (!download) {
        return;
      }
      this.downloads.push(download);
    }
    /**
     * Aborts the downloads listed in {@source #downloads}.
     *
     * @see Downloader#abort
     */
    abortDownloads() {
      var _iterator18 = _createForOfIteratorHelper(this.downloads), _step18;
      try {
        for (_iterator18.s(); !(_step18 = _iterator18.n()).done; ) {
          const d = _step18.value;
          if (d && d.abort) {
            d.abort();
          }
        }
      } catch (err) {
        _iterator18.e(err);
      } finally {
        _iterator18.f();
      }
      this.downloads = [];
    }
  }
  Navpopup.uid = 0;
  Navpopup.highest = 1e3;
  Navpopup.tracker = new Mousetracker();
  const delFmt = (x) => {
    if (x.length === 0) {
      return "";
    }
    return "<del class='popupDiff'>".concat(x.join(""), "</del>");
  };
  const insFmt = (x) => {
    if (x.length === 0) {
      return "";
    }
    return "<ins class='popupDiff'>".concat(x.join(""), "</ins>");
  };
  const countCrossings = (a, b, i, eject) => {
    if (!b[i].row && b[i].row !== 0) {
      return -1;
    }
    let count = 0;
    var _iterator19 = _createForOfIteratorHelper(a.entries()), _step19;
    try {
      for (_iterator19.s(); !(_step19 = _iterator19.n()).done; ) {
        const [j, element] = _step19.value;
        if (!element.row && element.row !== 0) {
          continue;
        }
        if ((j - b[i].row) * (i - element.row) > 0) {
          if (eject) {
            return true;
          }
          count++;
        }
      }
    } catch (err) {
      _iterator19.e(err);
    } finally {
      _iterator19.f();
    }
    return count;
  };
  const shortenDiffString = function shortenDiffString2(str, context) {
    const re = /(<del[\S\s]*?<\/del>|<ins[\S\s]*?<\/ins>)/;
    const splitted = str.split(re);
    let ret = [""];
    for (let i = 0; i < splitted.length; i += 2) {
      if (splitted[i].length < 2 * context) {
        ret[ret.length - 1] += splitted[i];
        if (i + 1 < splitted.length) {
          ret[ret.length - 1] += splitted[i + 1];
        }
        continue;
      } else {
        if (i > 0) {
          ret[ret.length - 1] += splitted[i].slice(0, Math.max(0, context));
        }
        if (i + 1 < splitted.length) {
          ret.push(splitted[i].slice(Math.max(0, splitted[i].length - context)) + splitted[i + 1]);
        }
      }
    }
    while (ret.length > 0 && !ret[0]) {
      ret = ret.slice(1);
    }
    return ret;
  };
  const diffString = (o, n) => {
    let i;
    const oSplitted = o.split(/\b/);
    const nSplitted = n.split(/\b/);
    for (i = 0; i < oSplitted.length; ++i) {
      oSplitted[i] = oSplitted[i].entify();
    }
    for (i = 0; i < nSplitted.length; ++i) {
      nSplitted[i] = nSplitted[i].entify();
    }
    const out = diff(oSplitted, nSplitted);
    let str = "";
    let acc = [];
    let maxOutputPair = 0;
    for (i = 0; i < out.n.length; ++i) {
      if (out.n[i].paired) {
        if (maxOutputPair > out.n[i].row) {
          out.o[out.n[i].row] = out.o[out.n[i].row].text;
          out.n[i] = out.n[i].text;
        }
        if (maxOutputPair < out.n[i].row) {
          maxOutputPair = out.n[i].row;
        }
      }
    }
    for (i = 0; i < out.o.length && !out.o[i].paired; ++i) {
      acc.push(out.o[i]);
    }
    str += delFmt(acc);
    acc = [];
    for (i = 0; i < out.n.length; ++i) {
      while (i < out.n.length && !out.n[i].paired) {
        acc.push(out.n[i++]);
      }
      str += insFmt(acc);
      acc = [];
      if (i < out.n.length) {
        str += out.n[i].text;
        let m = out.n[i].row + 1;
        while (m < out.o.length && !out.o[m].paired) {
          acc.push(out.o[m++]);
        }
        str += delFmt(acc);
        acc = [];
      }
    }
    return str;
  };
  const jsReservedProperties = new RegExp("^(constructor|prototype|__((define|lookup)[GS]etter)__|eval|hasOwnProperty|propertyIsEnumerable|to(Source|String|LocaleString)|(un)?watch|valueOf)$");
  const diffBugAlert = function diffBugAlert2(word) {
    if (!diffBugAlert2.list[word]) {
      diffBugAlert2.list[word] = 1;
      void mw.notify("Bad word: ".concat(word, "\n\nPlease report this bug."), {
        tag: "popups",
        type: "error"
      });
    }
  };
  diffBugAlert.list = {};
  const makeDiffHashtable = (src) => {
    const ret = {};
    for (let i = 0; i < src.length; i++) {
      var _src$i, _ret$_src$i;
      if (jsReservedProperties.test(src[i])) {
        src[i] += "<!-- -->";
      }
      (_ret$_src$i = ret[_src$i = src[i]]) !== null && _ret$_src$i !== void 0 ? _ret$_src$i : ret[_src$i] = [];
      try {
        ret[src[i]].push(i);
      } catch {
        diffBugAlert(src[i]);
      }
    }
    return ret;
  };
  const diff = (o, n) => {
    const ns = makeDiffHashtable(n);
    const os = makeDiffHashtable(o);
    let i;
    for (i in ns) {
      if (ns[i].length === 1 && os[i] && os[i].length === 1) {
        n[ns[i][0]] = {
          text: n[ns[i][0]],
          row: os[i][0],
          paired: true
        };
        o[os[i][0]] = {
          text: o[os[i][0]],
          row: ns[i][0],
          paired: true
        };
      }
    }
    for (i = 0; i < n.length - 1; i++) {
      if (n[i].paired && !n[i + 1].paired && n[i].row + 1 < o.length && !o[n[i].row + 1].paired && n[i + 1] === o[n[i].row + 1]) {
        n[i + 1] = {
          text: n[i + 1],
          row: n[i].row + 1,
          paired: true
        };
        o[n[i].row + 1] = {
          text: o[n[i].row + 1],
          row: i + 1,
          paired: true
        };
      }
    }
    for (i = n.length - 1; i > 0; i--) {
      if (n[i].paired && !n[i - 1].paired && n[i].row > 0 && !o[n[i].row - 1].paired && n[i - 1] === o[n[i].row - 1]) {
        n[i - 1] = {
          text: n[i - 1],
          row: n[i].row - 1,
          paired: true
        };
        o[n[i].row - 1] = {
          text: o[n[i].row - 1],
          row: i - 1,
          paired: true
        };
      }
    }
    return {
      o,
      n
    };
  };
  const setSiteInfo = () => {
    if (window.popupLocalDebug) {
      pg.wiki.hostname = "en.wikipedia.org";
    } else {
      pg.wiki.hostname = location.hostname;
    }
    pg.wiki.wikimedia = /(wiki([mp]edia|source|books|news|quote|versity|species|voyage|data)|metawiki|wiktionary|mediawiki)\.org/.test(pg.wiki.hostname);
    pg.wiki.wikia = /\.wikia\.com$/i.test(pg.wiki.hostname);
    pg.wiki.isLocal = pg.wiki.hostname.startsWith("localhost");
    pg.wiki.commons = pg.wiki.wikimedia && pg.wiki.hostname !== "commons.wikimedia.org" ? "commons.wikimedia.org" : null;
    pg.wiki.lang = mw.config.get("wgContentLanguage");
    const port = location.port ? ":".concat(location.port) : "";
    pg.wiki.sitebase = pg.wiki.hostname + port;
  };
  const setUserInfo = () => {
    const params = {
      action: "query",
      list: "users",
      ususers: mw.config.get("wgUserName"),
      usprop: "rights"
    };
    pg.user.canReview = false;
    if (getValueOf("popupReview")) {
      getMwApi().get(params).done((data) => {
        const [{
          rights
        }] = data.query.users;
        pg.user.canReview = rights.includes("review");
      });
    }
  };
  const fetchSpecialPageNames = () => {
    const params = {
      action: "query",
      format: "json",
      formatversion: "2",
      meta: "siteinfo",
      siprop: "specialpagealiases",
      uselang: "content",
      // cache for an hour
      smaxage: 3600,
      maxage: 3600
    };
    return getMwApi().get(params).then((data) => {
      pg.wiki.specialpagealiases = data.query.specialpagealiases;
    });
  };
  const setTitleBase = () => {
    const protocol = window.popupLocalDebug ? "http:" : location.protocol;
    pg.wiki.articlePath = mw.config.get("wgArticlePath").replace(/\/\$1/, "");
    pg.wiki.botInterfacePath = mw.config.get("wgScript");
    pg.wiki.APIPath = "".concat(mw.config.get("wgScriptPath"), "/api.php");
    const titletail = "".concat(pg.wiki.botInterfacePath, "?title=");
    pg.wiki.titlebase = "".concat(protocol, "//").concat(pg.wiki.sitebase).concat(titletail);
    pg.wiki.wikibase = "".concat(protocol, "//").concat(pg.wiki.sitebase).concat(pg.wiki.botInterfacePath);
    pg.wiki.apiwikibase = "".concat(protocol, "//").concat(pg.wiki.sitebase).concat(pg.wiki.APIPath);
    pg.wiki.articlebase = "".concat(protocol, "//").concat(pg.wiki.sitebase).concat(pg.wiki.articlePath);
    pg.wiki.commonsbase = "".concat(protocol, "//").concat(pg.wiki.commons).concat(pg.wiki.botInterfacePath);
    pg.wiki.apicommonsbase = "".concat(protocol, "//").concat(pg.wiki.commons).concat(pg.wiki.APIPath);
    pg.re.basenames = new RegExp("^(".concat(map(literalizeRegex, [pg.wiki.titlebase, pg.wiki.articlebase]).join("|"), ")"));
  };
  const setMainRegex = () => {
    const reStart = "[^:]*://";
    let preTitles = "".concat(literalizeRegex(mw.config.get("wgScriptPath")), "/(?:index[.]php|wiki[.]phtml)[?]title=");
    preTitles += "|".concat(literalizeRegex("".concat(pg.wiki.articlePath, "/")));
    const reEnd = "(".concat(preTitles, ")([^&?#]*)[^#]*(?:#(.+))?");
    pg.re.main = new RegExp(reStart + literalizeRegex(pg.wiki.sitebase) + reEnd);
  };
  const buildSpecialPageGroup = (specialPageObj) => {
    const variants = [];
    variants.push(mw.util.escapeRegExp(specialPageObj.realname), mw.util.escapeRegExp(encodeURI(specialPageObj.realname)));
    var _iterator20 = _createForOfIteratorHelper(specialPageObj.aliases), _step20;
    try {
      for (_iterator20.s(); !(_step20 = _iterator20.n()).done; ) {
        const alias = _step20.value;
        variants.push(mw.util.escapeRegExp(alias), mw.util.escapeRegExp(encodeURI(alias)));
      }
    } catch (err) {
      _iterator20.e(err);
    } finally {
      _iterator20.f();
    }
    return variants.join("|");
  };
  const setRegexps = () => {
    setMainRegex();
    const sp = nsRe(pg.nsSpecialId);
    pg.re.urlNoPopup = new RegExp("((title=|/)".concat(sp, "(?:%3A|:)|section=[0-9]|^#$)"));
    var _iterator21 = _createForOfIteratorHelper(pg.wiki.specialpagealiases), _step21;
    try {
      for (_iterator21.s(); !(_step21 = _iterator21.n()).done; ) {
        const specialpage = _step21.value;
        switch (specialpage.realname) {
          case "Contributions":
            pg.re.contribs = new RegExp("(title=|/)".concat(sp, "(?:%3A|:)(?:").concat(buildSpecialPageGroup(specialpage), ")(&target=|/|/").concat(nsRe(pg.nsUserId), ":)(.*)"), "i");
            break;
          case "Diff":
            pg.re.specialdiff = new RegExp("/".concat(sp, "(?:%3A|:)(?:").concat(buildSpecialPageGroup(specialpage), ")/([^?#]*)"), "i");
            break;
          case "Emailuser":
            pg.re.email = new RegExp("(title=|/)".concat(sp, "(?:%3A|:)(?:").concat(buildSpecialPageGroup(specialpage), ")(&target=|/|/(?:").concat(nsRe(pg.nsUserId), ":)?)(.*)"), "i");
            break;
          case "Whatlinkshere":
            pg.re.backlinks = new RegExp("(title=|/)".concat(sp, "(?:%3A|:)(?:").concat(buildSpecialPageGroup(specialpage), ")(&target=|/)([^&]*)"), "i");
            break;
        }
      }
    } catch (err) {
      _iterator21.e(err);
    } finally {
      _iterator21.f();
    }
    const im = nsReImage();
    pg.re.image = new RegExp("(^|\\[\\[)".concat(im, ": *([^|\\]]*[^|\\] ])").concat(String.raw(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["([^0-9]]*([0-9]+) *px)?|(?:\n *[|]?|[|]) *"], ["([^0-9\\]]*([0-9]+) *px)?|(?:\\n *[|]?|[|]) *"]))), "(").concat(getValueOf("popupImageVarsRegexp"), ") *= *(?:\\[\\[ *)?(?:").concat(im, ":)?").concat(String.raw(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["([^|]*?)(?:]])? *[|]? *\n"], ["([^|]*?)(?:\\]\\])? *[|]? *\\n"])))), "img");
    pg.re.imageBracketCount = 6;
    pg.re.category = new RegExp("\\[\\[".concat(nsRe(pg.nsCategoryId), ": *([^|\\]]*[^|\\] ]) *"), "i");
    pg.re.categoryBracketCount = 1;
    pg.re.ipUser = /^(?::(?::|(?::[\dA-Fa-f]{1,4}){1,7})|[\dA-Fa-f]{1,4}(?::[\dA-Fa-f]{1,4}){0,6}::|[\dA-Fa-f]{1,4}(?::[\dA-Fa-f]{1,4}){7})|(((25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)\.){3}(25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d))$/;
    pg.re.stub = new RegExp(getValueOf("popupStubRegexp"), "im");
    pg.re.disambig = new RegExp(getValueOf("popupDabRegexp"), "im");
    pg.re.oldid = /[&?]oldid=([^&]*)/;
    pg.re.diff = /[&?]diff=([^&]*)/;
  };
  const setupCache = () => {
    pg.cache.pages = [];
  };
  const setMisc = () => {
    pg.current.link = null;
    pg.current.links = [];
    pg.current.linksHash = {};
    setupCache();
    pg.timer.checkPopupPosition = null;
    pg.counter.loop = 0;
    pg.idNumber = 0;
    pg.misc.decodeExtras = [
      {
        from: "%2C",
        to: ","
      },
      {
        from: "_",
        to: " "
      },
      {
        from: "%24",
        to: "$"
      },
      {
        from: "%26",
        to: "&"
      }
      // no ,
    ];
  };
  const getMwApi = () => {
    if (!pg.api.client) {
      pg.api.userAgent = "Navigation popups/1.0";
      pg.api.client = api;
    }
    return pg.api.client;
  };
  const setupPopups = function setupPopups2(callback) {
    if (setupPopups2.completed) {
      if (typeof callback === "function") {
        callback();
      }
      return;
    }
    fetchSpecialPageNames().then(() => {
      setupDebugging();
      setSiteInfo();
      setTitleBase();
      setOptions();
      setUserInfo();
      setNamespaces();
      setInterwiki();
      setRegexps();
      setRedirs();
      setMisc();
      setupLivePreview();
      setupTooltips();
      log("In setupPopups(), just called setupTooltips()");
      Navpopup.tracker.enable();
      setupPopups2.completed = true;
      if (typeof callback === "function") {
        callback();
      }
    });
  };
  const defaultNavlinkSpec = () => {
    let str = "";
    str += "<b><<mainlink|shortcut= >></b>";
    if (getValueOf("popupLastEditLink")) {
      str += "*<<lastEdit|shortcut=/>>|<<lastContrib>>|<<sinceMe>>if(oldid){|<<oldEdit>>|<<diffCur>>}";
    }
    str += "if(user){<br><<contribs|shortcut=c>>*<<userlog|shortcut=L|log>>";
    str += "if(ipuser){*<<arin>>}if(wikimedia){*<<count|shortcut=#>>}";
    str += "if(ipuser){}else{*<<email|shortcut=E>>}if(admin){*<<block|shortcut=b>>|<<blocklog|log>>}}";
    const editstr = "<<edit|shortcut=e>>";
    const editOldidStr = "if(oldid){<<editOld|shortcut=e>>|<<revert|shortcut=v|rv>>|<<edit|cur>>}else{".concat(editstr, "}");
    const historystr = "<<history|shortcut=h>>|<<editors|shortcut=E|>>";
    const watchstr = "<<unwatch|unwatchShort>>|<<watch|shortcut=w|watchThingy>>";
    str += "<br>if(talk){".concat(editOldidStr, "|<<new|shortcut=+>>*").concat(historystr, "*").concat(watchstr, "*<b><<article|shortcut=a>></b>|<<editArticle|edit>>}else{").concat(
      // not a talk page
      editOldidStr,
      "*"
    ).concat(historystr, "*").concat(watchstr, "*<b><<talk|shortcut=t>></b>|<<editTalk|edit>>|<<newTalk|shortcut=+|new>>}");
    str += "<br><<whatLinksHere|shortcut=l>>*<<relatedChanges|shortcut=r>>*<<move|shortcut=m>>";
    str += "if(admin){<br><<unprotect|unprotectShort>>|<<protect|shortcut=p>>|<<protectlog|log>>*<<undelete|undeleteShort>>|<<delete|shortcut=d>>|<<deletelog|log>>}";
    return str;
  };
  const navLinksHTML = (article, _hint, params) => {
    const str = '<span class="popupNavLinks">'.concat(defaultNavlinkSpec(), "</span>");
    return navlinkStringToHTML(str, article, params);
  };
  const expandConditionalNavlinkString = function expandConditionalNavlinkString2(s, article, z, recursionCount) {
    const {
      oldid
    } = z;
    const {
      rcid
    } = z;
    const {
      diff: diff2
    } = z;
    if (typeof recursionCount !== "number") {
      recursionCount = 0;
    }
    const conditionalSplitRegex = /(;?\s*if\s*\(\s*(\w*)\s*\)\s*{([^{}]*)}(\s*else\s*{([^{}]*?)}|))/i;
    const splitted = s.split(conditionalSplitRegex);
    const numParens = 5;
    let [ret] = splitted;
    for (let i = 1; i < splitted.length; i = i + numParens + 1) {
      const testString = splitted[i + 2 - 1];
      const trueString = splitted[i + 3 - 1];
      let falseString = splitted[i + 5 - 1];
      if (falseString === void 0 || !falseString) {
        falseString = "";
      }
      let testResult;
      switch (testString) {
        case "user":
          testResult = !!article.userName();
          break;
        case "talk":
          testResult = !article.talkPage();
          break;
        case "admin":
          testResult = !!getValueOf("popupAdminLinks");
          break;
        case "oldid":
          testResult = !!(oldid !== void 0 && oldid);
          break;
        case "rcid":
          testResult = !!(rcid !== void 0 && rcid);
          break;
        case "ipuser":
          testResult = !!article.isIpUser();
          break;
        case "mainspace_en":
          testResult = isInMainNamespace(article) && pg.wiki.hostname === "en.wikipedia.org";
          break;
        case "wikimedia":
          testResult = !!pg.wiki.wikimedia;
          break;
        case "diff":
          testResult = !!(diff2 !== void 0 && diff2);
          break;
      }
      switch (testResult) {
        case null:
          ret += splitted[i];
          break;
        case true:
          ret += trueString;
          break;
        case false:
          ret += falseString;
          break;
      }
      ret += splitted[i + numParens];
    }
    if (conditionalSplitRegex.test(ret) && recursionCount < 10) {
      return expandConditionalNavlinkString2(ret, article, z, recursionCount + 1);
    }
    return ret;
  };
  const navlinkStringToArray = (s, article, params) => {
    s = expandConditionalNavlinkString(s, article, params);
    const splitted = s.split(/<<(.*?)>>/);
    const ret = [];
    var _iterator22 = _createForOfIteratorHelper(splitted.entries()), _step22;
    try {
      for (_iterator22.s(); !(_step22 = _iterator22.n()).done; ) {
        const [i, element] = _step22.value;
        if (i % 2) {
          const t = new navlinkTag();
          const ss = element.split("|");
          [t.id] = ss;
          for (let j = 1; j < ss.length; ++j) {
            const sss = ss[j].split("=");
            if (sss.length > 1) {
              [, t[sss[0]]] = sss;
            } else {
              t.text = popupString(sss[0]);
            }
          }
          t.article = article;
          const {
            oldid
          } = params;
          const {
            rcid
          } = params;
          const {
            diff: diff2
          } = params;
          if (oldid !== void 0 && oldid !== null) {
            t.oldid = oldid;
          }
          if (rcid !== void 0 && rcid !== null) {
            t.rcid = rcid;
          }
          if (diff2 !== void 0 && diff2 !== null) {
            t.diff = diff2;
          }
          if (!t.text && t.id !== "mainlink") {
            t.text = popupString(t.id);
          }
          ret.push(t);
        } else {
          ret.push(element);
        }
      }
    } catch (err) {
      _iterator22.e(err);
    } finally {
      _iterator22.f();
    }
    return ret;
  };
  const navlinkSubstituteHTML = (s) => {
    return s.split("*").join(getValueOf("popupNavLinkSeparator")).split("<menurow>").join('<li class="popup_menu_row">').split("</menurow>").join("</li>").split("<menu>").join('<ul class="popup_menu">').split("</menu>").join("</ul>");
  };
  const navlinkDepth = (magic, s) => {
    return s.split("<".concat(magic, ">")).length - s.split("</".concat(magic, ">")).length;
  };
  const navlinkStringToHTML = (s, article, params) => {
    const p = navlinkStringToArray(s, article, params);
    let html = "";
    let menudepth = 0;
    let menurowdepth = 0;
    var _iterator23 = _createForOfIteratorHelper(p), _step23;
    try {
      for (_iterator23.s(); !(_step23 = _iterator23.n()).done; ) {
        const element = _step23.value;
        if (typeof element === "string") {
          html += navlinkSubstituteHTML(element);
          menudepth += navlinkDepth("menu", element);
          menurowdepth += navlinkDepth("menurow", element);
        } else if (element.type !== void 0 && element.type === "navlinkTag") {
          html += menudepth > 0 && menurowdepth === 0 ? '<li class="popup_menu_item">'.concat(element.html(), "</li>") : element.html();
        }
      }
    } catch (err) {
      _iterator23.e(err);
    } finally {
      _iterator23.f();
    }
    return html;
  };
  class navlinkTag {
    constructor() {
      this.type = "navlinkTag";
    }
    html() {
      this.getNewWin();
      this.getPrintFunction();
      let html = "";
      let opening;
      let closing;
      const tagType = "span";
      if (tagType) {
        opening = "<".concat(tagType, ' class="popup_').concat(this.id, '">');
        closing = "</".concat(tagType, ">");
      } else {
        opening = "";
        closing = "";
      }
      if (typeof this.print === "function") {
        html = this.print(this);
        if (typeof html !== "string") {
          html = "";
        } else if (this.shortcut !== void 0) {
          html = addPopupShortcut(html, this.shortcut);
        }
      } else {
        errlog("Oh dear - invalid print function for a navlinkTag, id=".concat(this.id));
      }
      return opening + html + closing;
    }
    getNewWin() {
      getValueOf("popupLinksNewWindow");
      if (pg.option.popupLinksNewWindow[this.id] === void 0) {
        this.newWin = null;
      }
      this.newWin = pg.option.popupLinksNewWindow[this.id];
    }
    getPrintFunction() {
      if (typeof this.id !== "string" || typeof this.article !== typeof {}) {
        return;
      }
      this.noPopup = 1;
      switch (this.id) {
        case "contribs":
        case "history":
        case "whatLinksHere":
        case "userPage":
        case "userTalk":
        case "talk":
        case "article":
        case "lastEdit":
          this.noPopup = null;
      }
      switch (this.id) {
        case "email":
        case "contribs":
        case "block":
        case "unblock":
        case "userlog":
        case "userSpace":
        case "deletedContribs":
          this.article = this.article.userName();
      }
      switch (this.id) {
        case "userTalk":
        case "newUserTalk":
        case "editUserTalk":
        case "userPage":
        case "blocklog":
          this.article = this.article.userName(true);
        /* falls through */
        case "pagelog":
        case "deletelog":
        case "protectlog":
          delete this.oldid;
      }
      if (this.id !== "mainlink") {
        this.article = this.article.removeAnchor();
      }
      switch (this.id) {
        case "undelete":
          this.print = specialLink;
          this.specialpage = "Undelete";
          this.sep = "/";
          break;
        case "whatLinksHere":
          this.print = specialLink;
          this.specialpage = "Whatlinkshere";
          break;
        case "relatedChanges":
          this.print = specialLink;
          this.specialpage = "Recentchangeslinked";
          break;
        case "move":
          this.print = specialLink;
          this.specialpage = "Movepage";
          break;
        case "contribs":
          this.print = specialLink;
          this.specialpage = "Contributions";
          break;
        case "deletedContribs":
          this.print = specialLink;
          this.specialpage = "Deletedcontributions";
          break;
        case "email":
          this.print = specialLink;
          this.specialpage = "EmailUser";
          this.sep = "/";
          break;
        case "block":
          this.print = specialLink;
          this.specialpage = "Blockip";
          this.sep = "&ip=";
          break;
        case "unblock":
          this.print = specialLink;
          this.specialpage = "Ipblocklist";
          this.sep = "&action=unblock&ip=";
          break;
        case "userlog":
          this.print = specialLink;
          this.specialpage = "Log";
          this.sep = "&user=";
          break;
        case "blocklog":
          this.print = specialLink;
          this.specialpage = "Log";
          this.sep = "&type=block&page=";
          break;
        case "pagelog":
          this.print = specialLink;
          this.specialpage = "Log";
          this.sep = "&page=";
          break;
        case "protectlog":
          this.print = specialLink;
          this.specialpage = "Log";
          this.sep = "&type=protect&page=";
          break;
        case "deletelog":
          this.print = specialLink;
          this.specialpage = "Log";
          this.sep = "&type=delete&page=";
          break;
        case "userSpace":
          this.print = specialLink;
          this.specialpage = "PrefixIndex";
          this.sep = "&namespace=2&prefix=";
          break;
        case "search":
          this.print = specialLink;
          this.specialpage = "Search";
          this.sep = "&fulltext=Search&search=";
          break;
        case "thank":
          this.print = specialLink;
          this.specialpage = "Thanks";
          this.sep = "/";
          this.article.value = this.diff === "prev" ? this.oldid : this.diff;
          break;
        case "unwatch":
        case "watch":
          this.print = magicWatchLink;
          this.action = "".concat(this.id, "&autowatchlist=1&autoimpl=").concat(popupString("autoedit_version"), "&actoken=").concat(autoClickToken());
          break;
        case "history":
        case "historyfeed":
        case "unprotect":
        case "protect":
          this.print = wikiLink;
          this.action = this.id;
          break;
        case "delete":
          this.print = wikiLink;
          this.action = "delete";
          if (this.article.namespaceId() === pg.nsImageId) {
            const img = this.article.stripNamespace();
            this.action += "&image=".concat(img);
          }
          break;
        case "markpatrolled":
        case "edit":
          delete this.oldid;
        /* falls through */
        case "view":
        case "purge":
        case "render":
          this.print = wikiLink;
          this.action = this.id;
          break;
        case "raw":
          this.print = wikiLink;
          this.action = "raw";
          break;
        case "new":
          this.print = wikiLink;
          this.action = "edit&section=new";
          break;
        case "mainlink":
          if (this.text === void 0) {
            this.text = this.article.toString().entify();
          }
          if (getValueOf("popupSimplifyMainLink") && isInStrippableNamespace(this.article)) {
            const s = this.text.split("/");
            this.text = s.at(-1);
            if (this.text === "" && s.length > 1) {
              this.text = s.at(-2);
            }
          }
          this.print = titledWikiLink;
          if (this.title === void 0 && pg.current.link && pg.current.link.href !== void 0) {
            var _pg$current$link$orig;
            this.title = safeDecodeURI((_pg$current$link$orig = pg.current.link.originalTitle) !== null && _pg$current$link$orig !== void 0 ? _pg$current$link$orig : this.article);
            if (this.oldid !== void 0 && this.oldid) {
              this.title = tprintf("Revision %s of %s", [this.oldid, this.title]);
            }
          }
          this.action = "view";
          break;
        case "userPage":
        case "article":
        case "editArticle":
          delete this.oldid;
          this.article = this.article.articleFromTalkOrArticle();
          this.print = wikiLink;
          this.action = this.id.indexOf("edit") === 0 ? "edit" : "view";
          break;
        case "userTalk":
        case "talk":
          this.article = this.article.talkPage();
          delete this.oldid;
          this.print = wikiLink;
          this.action = "view";
          break;
        case "arin":
          this.print = arinLink;
          break;
        case "count":
          this.print = editCounterLink;
          break;
        case "editors":
          this.print = editorListLink;
          break;
        case "lastEdit":
          this.print = titledDiffLink;
          this.title = popupString("Show the last edit");
          this.from = "prev";
          this.to = "cur";
          break;
        case "oldEdit":
          this.print = titledDiffLink;
          this.title = "".concat(popupString("Show the edit made to get revision"), " ").concat(this.oldid);
          this.from = "prev";
          this.to = this.oldid;
          break;
        case "editOld":
          this.print = wikiLink;
          this.action = "edit";
          break;
        case "undo":
          this.print = wikiLink;
          this.action = "edit&undo=";
          break;
        case "revert":
          this.print = wikiLink;
          this.action = "revert";
          break;
        case "nullEdit":
          this.print = wikiLink;
          this.action = "nullEdit";
          break;
        case "diffCur":
          this.print = titledDiffLink;
          this.title = tprintf("Show changes since revision %s", [this.oldid]);
          this.from = this.oldid;
          this.to = "cur";
          break;
        case "editUserTalk":
        case "editTalk":
          delete this.oldid;
          this.article = this.article.talkPage();
          this.action = "edit";
          this.print = wikiLink;
          break;
        case "newUserTalk":
        case "newTalk":
          this.article = this.article.talkPage();
          this.action = "edit&section=new";
          this.print = wikiLink;
          break;
        case "lastContrib":
        case "sinceMe":
          this.print = magicHistoryLink;
          break;
        case "togglePreviews":
          this.text = popupString(pg.option.simplePopups ? "enable previews" : "disable previews");
        /* falls through */
        case "disablePopups":
        case "purgePopups":
          this.print = popupMenuLink;
          break;
        default:
          this.print = function() {
            return "Unknown navlink type: ".concat(this.id);
          };
      }
    }
  }
  const popupHandleKeypress = function popupHandleKeypress2(evt) {
    var _evt$keyCode;
    const keyCode = window.event ? window.event.keyCode : (_evt$keyCode = evt.keyCode) !== null && _evt$keyCode !== void 0 ? _evt$keyCode : evt.which;
    if (!keyCode || !pg.current.link || !pg.current.link.navpopup) {
      return;
    }
    if (keyCode === 27) {
      killPopup();
      return false;
    }
    const letter = String.fromCodePoint(keyCode);
    const links = pg.current.link.navpopup.mainDiv.querySelectorAll("A");
    let startLink = 0;
    let i;
    let j;
    if (popupHandleKeypress2.lastPopupLinkSelected) {
      for (i = 0; i < links.length; ++i) {
        if (links[i] === popupHandleKeypress2.lastPopupLinkSelected) {
          startLink = i;
        }
      }
    }
    for (j = 0; j < links.length; ++j) {
      i = (startLink + j + 1) % links.length;
      if (links[i].getAttribute("popupkey") === letter) {
        if (evt && evt.preventDefault) {
          evt.preventDefault();
        }
        links[i].focus();
        popupHandleKeypress2.lastPopupLinkSelected = links[i];
        return false;
      }
    }
    if (document.oldPopupOnkeypress) {
      return document.oldPopupOnkeypress(evt);
    }
    return true;
  };
  const addPopupShortcuts = () => {
    if (document.onkeypress !== popupHandleKeypress) {
      document.oldPopupOnkeypress = document.onkeypress;
    }
    document.onkeypress = popupHandleKeypress;
  };
  const rmPopupShortcuts = () => {
    popupHandleKeypress.lastPopupLinkSelected = null;
    try {
      if (document.oldPopupOnkeypress && document.oldPopupOnkeypress === popupHandleKeypress) {
        document.onkeypress = null;
        return;
      }
      document.onkeypress = document.oldPopupOnkeypress;
    } catch {
    }
  };
  const addLinkProperty = (html, property) => {
    const i = html.indexOf(">");
    if (i === -1) {
      return html;
    }
    return "".concat(html.slice(0, Math.max(0, i)), " ").concat(property).concat(html.slice(Math.max(0, i)));
  };
  const addPopupShortcut = (html, key) => {
    if (!getValueOf("popupShortcutKeys")) {
      return html;
    }
    const ret = addLinkProperty(html, 'popupkey="'.concat(key, '"'));
    if (key === " ") {
      key = popupString("spacebar");
    }
    return ret.replace(/^(.*?)(title=")(.*?)(".*)$/i, "$1$2$3 [".concat(key, "]$4"));
  };
  const loadDiff = (article, oldid, diff2, navpop) => {
    navpop.diffData = {
      oldRev: {},
      newRev: {}
    };
    const api2 = getMwApi();
    const params = {
      action: "compare",
      prop: ["ids", "title"],
      smaxage: 600,
      maxage: 600
    };
    if (article.title) {
      params.fromtitle = article.title;
    }
    switch (diff2) {
      case "cur":
        switch (oldid) {
          case null:
          case "":
          case "prev":
            params.torelative = "prev";
            break;
          default:
            params.fromrev = oldid;
            params.torelative = "cur";
            break;
        }
        break;
      case "prev":
        if (oldid) {
          params.fromrev = oldid;
        }
        params.torelative = "prev";
        break;
      case "next":
        params.fromrev = oldid || 0;
        params.torelative = "next";
        break;
      default:
        params.fromrev = oldid || 0;
        params.torev = diff2 || 0;
        break;
    }
    api2.get(params).then((data) => {
      navpop.diffData.oldRev.revid = data.compare.fromrevid;
      navpop.diffData.newRev.revid = data.compare.torevid;
      addReviewLink(navpop, "popupMiscTools");
      const go = () => {
        pendingNavpopTask(navpop);
        let url = "".concat(pg.wiki.apiwikibase, "?format=json&formatversion=2&action=query&");
        url += "revids=".concat(navpop.diffData.oldRev.revid, "|").concat(navpop.diffData.newRev.revid);
        url += "&prop=revisions&rvprop=ids|timestamp|content";
        getPageWithCaching(url, doneDiff, navpop);
        return true;
      };
      if (navpop.visible || !getValueOf("popupLazyDownloads")) {
        go();
      } else {
        navpop.addHook(go, "unhide", "before", "DOWNLOAD_DIFFS");
      }
    });
  };
  const addReviewLink = (navpop, target) => {
    if (!pg.user.canReview) {
      return;
    }
    if (navpop.diffData.newRev.revid <= navpop.diffData.oldRev.revid) {
      return;
    }
    const params = {
      action: "query",
      format: "json",
      formatversion: "2",
      prop: ["info", "flagged"],
      revids: navpop.diffData.oldRev.revid
    };
    getMwApi().get(params).then((data) => {
      const stable_revid = data.query.pages[0].flagged && data.query.pages[0].flagged.stable_revid || 0;
      if (stable_revid === navpop.diffData.oldRev.revid) {
        const a = document.createElement("a");
        a.innerHTML = popupString("mark patrolled");
        a.title = popupString("markpatrolledHint");
        a.onclick = () => {
          const params2 = {
            action: "review",
            comment: tprintf("defaultpopupReviewedSummary", [navpop.diffData.oldRev.revid, navpop.diffData.newRev.revid]),
            revid: navpop.diffData.newRev.revid
          };
          getMwApi().postWithToken("csrf", params2).done(() => {
            a.style.display = "none";
          }).fail(() => {
            void mw.notify(popupString("Could not marked this edit as patrolled"), {
              tag: "popups",
              type: "error"
            });
          });
        };
        setPopupHTML(a, target, navpop.idNumber, null, true);
      }
    });
  };
  const doneDiff = (download) => {
    if (!download.owner || !download.owner.diffData) {
      return;
    }
    const navpop = download.owner;
    completedNavpopTask(navpop);
    let pages;
    let revisions = [];
    try {
      ({
        pages
      } = getJsObj(download.data).query);
      var _iterator24 = _createForOfIteratorHelper(pages), _step24;
      try {
        for (_iterator24.s(); !(_step24 = _iterator24.n()).done; ) {
          const page = _step24.value;
          revisions = [...revisions, ...page.revisions];
        }
      } catch (err) {
        _iterator24.e(err);
      } finally {
        _iterator24.f();
      }
      for (var _i3 = 0, _revisions = revisions; _i3 < _revisions.length; _i3++) {
        const revision = _revisions[_i3];
        if (revision.revid === navpop.diffData.oldRev.revid) {
          navpop.diffData.oldRev.revision = revision;
        } else if (revision.revid === navpop.diffData.newRev.revid) {
          navpop.diffData.newRev.revision = revision;
        }
      }
    } catch {
      errlog("Could not get diff");
    }
    insertDiff(navpop);
  };
  const rmBoringLines = (a, b, context) => {
    if (context === void 0) {
      context = 2;
    }
    const aa = [];
    const aaa = [];
    const bb = [];
    const bbb = [];
    let i;
    let j;
    for (i = 0; i < a.length; ++i) {
      if (!a[i].paired) {
        aa[i] = 1;
      } else if (countCrossings(b, a, i, true)) {
        aa[i] = 1;
        bb[a[i].row] = 1;
      }
    }
    for (i = 0; i < b.length; ++i) {
      if (bb[i] === 1) {
        continue;
      }
      if (!b[i].paired) {
        bb[i] = 1;
      }
    }
    for (i = 0; i < b.length; ++i) {
      if (bb[i] === 1) {
        for (j = Math.max(0, i - context); j < Math.min(b.length, i + context); ++j) {
          if (!bb[j]) {
            bb[j] = 1;
            aa[b[j].row] = 0.5;
          }
        }
      }
    }
    for (i = 0; i < a.length; ++i) {
      if (aa[i] === 1) {
        for (j = Math.max(0, i - context); j < Math.min(a.length, i + context); ++j) {
          if (!aa[j]) {
            aa[j] = 1;
            bb[a[j].row] = 0.5;
          }
        }
      }
    }
    for (i = 0; i < bb.length; ++i) {
      if (bb[i] > 0) {
        if (b[i].paired) {
          bbb.push(b[i].text);
        } else {
          bbb.push(b[i]);
        }
      }
    }
    for (i = 0; i < aa.length; ++i) {
      if (aa[i] > 0) {
        if (a[i].paired) {
          aaa.push(a[i].text);
        } else {
          aaa.push(a[i]);
        }
      }
    }
    return {
      a: aaa,
      b: bbb
    };
  };
  const stripOuterCommonLines = (a, b, context) => {
    let i = 0;
    while (i < a.length && i < b.length && a[i] === b[i]) {
      ++i;
    }
    let j = a.length - 1;
    let k = b.length - 1;
    while (j >= 0 && k >= 0 && a[j] === b[k]) {
      --j;
      --k;
    }
    return {
      a: a.slice(Math.max(0, i - 1 - context), Math.min(a.length + 1, j + context + 1)),
      b: b.slice(Math.max(0, i - 1 - context), Math.min(b.length + 1, k + context + 1))
    };
  };
  const insertDiff = (navpop) => {
    let oldlines = navpop.diffData.oldRev.revision.content.split("\n");
    let newlines = navpop.diffData.newRev.revision.content.split("\n");
    let inner = stripOuterCommonLines(oldlines, newlines, getValueOf("popupDiffContextLines"));
    oldlines = inner.a;
    newlines = inner.b;
    let truncated = false;
    getValueOf("popupDiffMaxLines");
    if (oldlines.length > pg.option.popupDiffMaxLines || newlines.length > pg.option.popupDiffMaxLines) {
      truncated = true;
      inner = stripOuterCommonLines(oldlines.slice(0, pg.option.popupDiffMaxLines), newlines.slice(0, pg.option.popupDiffMaxLines), pg.option.popupDiffContextLines);
      oldlines = inner.a;
      newlines = inner.b;
    }
    const lineDiff = diff(oldlines, newlines);
    const lines2 = rmBoringLines(lineDiff.o, lineDiff.n);
    const oldlines2 = lines2.a;
    const newlines2 = lines2.b;
    let html = "<hr>";
    if (getValueOf("popupDiffDates")) {
      html += diffDatesTable(navpop);
      html += "<hr>";
    }
    html += shortenDiffString(diffString(oldlines2.join("\n"), newlines2.join("\n")), getValueOf("popupDiffContextCharacters")).join("<hr>");
    setPopupTipsAndHTML(html.split("\n").join("<br>") + (truncated ? "<hr><b>".concat(popupString("Diff truncated for performance reasons"), "</b>") : ""), "popupPreview", navpop.idNumber);
  };
  const diffDatesTable = (navpop) => {
    let html = '<table class="popup_diff_dates">';
    html += diffDatesTableRow(navpop.diffData.newRev.revision, tprintf("New revision"));
    html += diffDatesTableRow(navpop.diffData.oldRev.revision, tprintf("Old revision"));
    html += "</table>";
    return html;
  };
  const diffDatesTableRow = (revision, label) => {
    let txt = "";
    const lastModifiedDate = new Date(revision.timestamp);
    txt = formattedDateTime(lastModifiedDate);
    const revlink = generalLink({
      url: "".concat(mw.config.get("wgScript"), "?oldid=").concat(revision.revid),
      text: label,
      title: label
    });
    return simplePrintf("<tr><td>%s</td><td>%s</td></tr>", [revlink, txt]);
  };
  const titledDiffLink = (l) => {
    return titledWikiLink({
      article: l.article,
      action: "".concat(l.to, "&oldid=").concat(l.from),
      newWin: l.newWin,
      noPopup: l.noPopup,
      text: l.text,
      title: l.title,
      /* hack: no oldid here */
      actionName: "diff"
    });
  };
  const wikiLink = (l) => {
    if (!(typeof l.article === typeof {} && typeof l.action === "string" && typeof l.text === "string")) {
      return null;
    }
    if (l.oldid === void 0) {
      l.oldid = null;
    }
    const savedOldid = l.oldid;
    if (!/^(edit|view|revert|render)$|^raw/.test(l.action)) {
      l.oldid = null;
    }
    let hint = popupString("".concat(l.action, "Hint"));
    const oldidData = [l.oldid, safeDecodeURI(l.article)];
    let revisionString = tprintf("revision %s of %s", oldidData);
    log("revisionString=".concat(revisionString));
    switch (l.action) {
      case "edit&section=new":
        hint = popupString("newSectionHint");
        break;
      case "edit&undo=":
        if (l.diff && l.diff !== "prev" && savedOldid) {
          l.action += "".concat(l.diff, "&undoafter=").concat(savedOldid);
        } else if (savedOldid) {
          l.action += savedOldid;
        }
        hint = popupString("undoHint");
        break;
      case "raw&ctype=text/css":
        hint = popupString("rawHint");
        break;
      case "revert": {
        const p = parseParams(pg.current.link.href);
        l.action = "edit&autoclick=wpSave&actoken=".concat(autoClickToken(), "&autoimpl=").concat(popupString("autoedit_version"), "&autosummary=").concat(revertSummary(l.oldid, p.diff));
        if (p.diff === "prev") {
          l.action += "&direction=prev";
          revisionString = tprintf("the revision prior to revision %s of %s", oldidData);
        }
        if (getValueOf("popupRevertSummaryPrompt")) {
          l.action += "&autosummaryprompt=true";
        }
        if (getValueOf("popupMinorReverts")) {
          l.action += "&autominor=true";
        }
        log("revisionString is now ".concat(revisionString));
        break;
      }
      case "nullEdit":
        l.action = "edit&autoclick=wpSave&actoken=".concat(autoClickToken(), "&autoimpl=").concat(popupString("autoedit_version"), "&autosummary=null");
        break;
      case "historyfeed":
        l.action = "history&feed=rss";
        break;
      case "markpatrolled":
        l.action = "markpatrolled&rcid=".concat(l.rcid);
    }
    if (hint) {
      hint = l.oldid ? simplePrintf(hint, [revisionString]) : simplePrintf(hint, [safeDecodeURI(l.article)]);
    } else {
      hint = safeDecodeURI("".concat(l.article, "&action=").concat(l.action)) + l.oldid ? "&oldid=".concat(l.oldid) : "";
    }
    return titledWikiLink({
      article: l.article,
      action: l.action,
      text: l.text,
      newWin: l.newWin,
      title: hint,
      oldid: l.oldid,
      noPopup: l.noPopup,
      onclick: l.onclick
    });
  };
  const revertSummary = (oldid, diff2) => {
    let ret = "";
    ret = diff2 === "prev" ? getValueOf("popupQueriedRevertToPreviousSummary") : getValueOf("popupQueriedRevertSummary");
    return "".concat(ret, "&autorv=").concat(oldid);
  };
  const titledWikiLink = (l) => {
    if (l.article === void 0 || l.action === void 0) {
      errlog("got undefined article or action in titledWikiLink");
      return null;
    }
    const base = pg.wiki.titlebase + l.article.urlString();
    let url = base;
    if (l.actionName === void 0 || !l.actionName) {
      l.actionName = "action";
    }
    if (l.action !== "view") {
      url = "".concat(base, "&").concat(l.actionName, "=").concat(l.action);
    }
    if (l.oldid !== void 0 && l.oldid) {
      url += "&oldid=".concat(l.oldid);
    }
    let cssClass = pg.misc.defaultNavlinkClassname;
    if (l.className !== void 0 && l.className) {
      cssClass = l.className;
    }
    return generalNavLink({
      url,
      newWin: l.newWin,
      title: l.title === void 0 ? null : l.title,
      text: l.text === void 0 ? null : l.text,
      className: cssClass,
      noPopup: l.noPopup,
      onclick: l.onclick
    });
  };
  pg.fn.getLastContrib = (wikipage, newWin) => {
    getHistoryInfo(wikipage, (x) => {
      processLastContribInfo(x, {
        page: wikipage,
        newWin
      });
    });
  };
  const processLastContribInfo = (info, stuff) => {
    if (!info.edits || info.edits.length === 0) {
      void mw.notify("Popups: an odd thing happened. Please retry.", {
        tag: "popups",
        type: "error"
      });
      return;
    }
    if (!info.firstNewEditor) {
      void mw.notify(tprintf("Only found one editor: %s made %s edits", [info.edits[0].editor, info.edits.length]), {
        tag: "popups",
        type: "error"
      });
      return;
    }
    const newUrl = "".concat(pg.wiki.titlebase + new Title(stuff.page).urlString(), "&diff=cur&oldid=").concat(info.firstNewEditor.oldid);
    displayUrl(newUrl, stuff.newWin);
  };
  pg.fn.getDiffSinceMyEdit = (wikipage, newWin) => {
    getHistoryInfo(wikipage, (x) => {
      processDiffSinceMyEdit(x, {
        page: wikipage,
        newWin
      });
    });
  };
  const processDiffSinceMyEdit = (info, stuff) => {
    if (!info.edits || info.edits.length === 0) {
      void mw.notify("Popups: something fishy happened. Please try again.", {
        tag: "popups",
        type: "error"
      });
      return;
    }
    const friendlyName = stuff.page.split("_").join(" ");
    if (!info.myLastEdit) {
      void mw.notify(tprintf("Couldn't find an edit by %s\nin the last %s edits to\n%s", [info.userName, getValueOf("popupHistoryLimit"), friendlyName]), {
        tag: "popups",
        type: "error"
      });
      return;
    }
    if (info.myLastEdit.index === 0) {
      void mw.notify(tprintf("%s seems to be the last editor to the page %s", [info.userName, friendlyName]), {
        type: "error"
      });
      return;
    }
    const newUrl = "".concat(pg.wiki.titlebase + new Title(stuff.page).urlString(), "&diff=cur&oldid=").concat(info.myLastEdit.oldid);
    displayUrl(newUrl, stuff.newWin);
  };
  const displayUrl = (url, newWin) => {
    if (newWin) {
      window.open(url);
    } else {
      document.location = url;
    }
  };
  pg.fn.purgePopups = () => {
    processAllPopups(true);
    setupCache();
    pg.option = {};
    abortAllDownloads();
  };
  const processAllPopups = (nullify, banish) => {
    for (let i = 0; pg.current.links && i < pg.current.links.length; ++i) {
      if (!pg.current.links[i].navpopup) {
        continue;
      }
      if (nullify || banish) {
        pg.current.links[i].navpopup.banish();
      }
      pg.current.links[i].simpleNoMore = false;
      if (nullify) {
        pg.current.links[i].navpopup = null;
      }
    }
  };
  pg.fn.disablePopups = () => {
    processAllPopups(false, true);
    setupTooltips(null, true);
  };
  pg.fn.togglePreviews = () => {
    processAllPopups(true, true);
    pg.option.simplePopups = !pg.option.simplePopups;
    abortAllDownloads();
  };
  const magicWatchLink = function magicWatchLink2(l) {
    l.onclick = simplePrintf("pg.fn.modifyWatchlist('%s','%s');return false;", [l.article.toString(true).split("\\").join("\\\\").split("'").join(String.raw(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["'"], ["\\'"])))), this.id]);
    return wikiLink(l);
  };
  pg.fn.modifyWatchlist = /* @__PURE__ */ (function() {
    var _ref = _asyncToGenerator(function* (title, action) {
      const reqData = {
        action: "watch",
        formatversion: "2",
        titles: title,
        uselang: mw.config.get("wgUserLanguage")
      };
      if (action === "unwatch") {
        reqData.unwatch = true;
      }
      const mwTitle = mw.Title.newFromText(title);
      let messageName;
      if (mwTitle && mwTitle.getNamespaceId() > 0 && mwTitle.getNamespaceId() % 2 === 1) {
        messageName = action === "watch" ? "addedwatchtext-talk" : "removedwatchtext-talk";
      } else {
        messageName = action === "watch" ? "addedwatchtext" : "removedwatchtext";
      }
      yield getMwApi().postWithToken("watch", reqData);
      yield getMwApi().loadMessagesIfMissing([messageName]);
      void mw.notify(mw.message(messageName, title).parseDom(), {
        tag: "popups"
      });
    });
    return function(_x2, _x3) {
      return _ref.apply(this, arguments);
    };
  })();
  const magicHistoryLink = (l) => {
    let jsUrl = "";
    let title = "";
    let onClick = "";
    switch (l.id) {
      case "lastContrib":
        onClick = simplePrintf("pg.fn.getLastContrib('%s',%s)", [l.article.toString(true).split("\\").join("\\\\").split("'").join(String.raw(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["'"], ["\\'"])))), l.newWin]);
        title = popupString("lastContribHint");
        break;
      case "sinceMe":
        onClick = simplePrintf("pg.fn.getDiffSinceMyEdit('%s',%s)", [l.article.toString(true).split("\\").join("\\\\").split("'").join(String.raw(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["'"], ["\\'"])))), l.newWin]);
        title = popupString("sinceMeHint");
        break;
    }
    jsUrl = "javascript:".concat(onClick);
    onClick += ";return false;";
    return generalNavLink({
      url: jsUrl,
      newWin: false,
      title,
      text: l.text,
      noPopup: l.noPopup,
      onclick: onClick
    });
  };
  const popupMenuLink = (l) => {
    const jsUrl = simplePrintf("javascript:pg.fn.%s()", [l.id]);
    const title = popupString(simplePrintf("%sHint", [l.id]));
    const onClick = simplePrintf("pg.fn.%s();return false;", [l.id]);
    return generalNavLink({
      url: jsUrl,
      newWin: false,
      title,
      text: l.text,
      noPopup: l.noPopup,
      onclick: onClick
    });
  };
  const specialLink = (l) => {
    var _l$sep;
    if (l.specialpage === void 0 || !l.specialpage) {
      return null;
    }
    const base = "".concat(pg.wiki.titlebase + mw.config.get("wgFormattedNamespaces")[pg.nsSpecialId], ":").concat(l.specialpage);
    (_l$sep = l.sep) !== null && _l$sep !== void 0 ? _l$sep : l.sep = "&target=";
    let article = l.article.urlString({
      keepSpaces: l.specialpage === "Search"
    });
    let hint = popupString("".concat(l.specialpage, "Hint"));
    switch (l.specialpage) {
      case "Log":
        switch (l.sep) {
          case "&user=":
            hint = popupString("userLogHint");
            break;
          case "&type=block&page=":
            hint = popupString("blockLogHint");
            break;
          case "&page=":
            hint = popupString("pageLogHint");
            break;
          case "&type=protect&page=":
            hint = popupString("protectLogHint");
            break;
          case "&type=delete&page=":
            hint = popupString("deleteLogHint");
            break;
          default:
            log("Unknown log type, sep=".concat(l.sep));
            hint = "Missing hint (FIXME)";
        }
        break;
      case "PrefixIndex":
        article += "/";
        break;
    }
    hint = hint ? simplePrintf(hint, [safeDecodeURI(l.article)]) : safeDecodeURI("".concat(l.specialpage, ":").concat(l.article));
    const url = base + l.sep + article;
    return generalNavLink({
      url,
      title: hint,
      text: l.text,
      newWin: l.newWin,
      noPopup: l.noPopup
    });
  };
  const generalLink = (l) => {
    if (l.url === void 0) {
      return null;
    }
    const url = l.url.split('"').join("%22");
    let ret = '<a href="'.concat(url, '"');
    if (l.title !== void 0 && l.title) {
      ret += ' title="'.concat(pg.escapeQuotesHTML(l.title), '"');
    }
    if (l.onclick !== void 0 && l.onclick) {
      ret += ' onclick="'.concat(pg.escapeQuotesHTML(l.onclick), '"');
    }
    if (l.noPopup) {
      ret += " noPopup=1";
    }
    let newWin;
    if (l.newWin === void 0 || l.newWin === null) {
      newWin = getValueOf("popupNewWindows");
    } else {
      ({
        newWin
      } = l);
    }
    if (newWin) {
      ret += ' rel="noopener" target="_blank"';
    }
    if (l.className !== void 0 && l.className) {
      ret += ' class="'.concat(l.className, '"');
    }
    ret += ">";
    if (typeof l.text === "string") {
      ret += pg.escapeQuotesHTML(pg.unescapeQuotesHTML(l.text));
    }
    ret += "</a>";
    return ret;
  };
  const appendParamsToLink = (linkstr, params) => {
    const sp = linkstr.split(/(href="[^"]+?)"/i);
    if (sp.length < 2) {
      return null;
    }
    let ret = sp.shift() + sp.shift();
    ret += "&".concat(params, '"');
    ret += sp.join("");
    return ret;
  };
  const changeLinkTargetLink = (x) => {
    if (x.newTarget) {
      log("changeLinkTargetLink: newTarget=".concat(x.newTarget));
    }
    if (x.oldTarget !== decodeURIComponent(x.oldTarget)) {
      log("This might be an input problem: ".concat(x.oldTarget));
    }
    const cA = mw.util.escapeRegExp(x.oldTarget);
    let chs = cA.charAt(0).toUpperCase();
    chs = "[".concat(chs).concat(chs.toLowerCase(), "]");
    let currentArticleRegexBit = chs + cA.slice(1);
    currentArticleRegexBit = currentArticleRegexBit.split(/[ _]+|%20/g).join("(?:[_ ]+|%20)").split(String.raw(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["("], ["\\("])))).join(String.raw(_templateObject0 || (_templateObject0 = _taggedTemplateLiteral(["(?:%28|()"], ["(?:%28|\\()"])))).split(String.raw(_templateObject1 || (_templateObject1 = _taggedTemplateLiteral([")"], ["\\)"])))).join(String.raw(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["(?:%29|))"], ["(?:%29|\\))"]))));
    currentArticleRegexBit = "\\s*(".concat(currentArticleRegexBit, "(?:#[^\\[\\|]*)?)\\s*");
    const title = x.title || mw.config.get("wgPageName").split("_").join(" ");
    const lk = titledWikiLink({
      article: new Title(title),
      newWin: x.newWin,
      action: "edit",
      text: x.text,
      title: x.hint,
      className: "popup_change_title_link"
    });
    let cmd = "";
    if (x.newTarget) {
      const t = x.newTarget;
      const s = mw.util.escapeRegExp(x.newTarget);
      if (x.alsoChangeLabel) {
        cmd += "s~\\[\\[".concat(currentArticleRegexBit, "\\]\\]~[[").concat(t, "]]~g;");
        cmd += "s~\\[\\[".concat(currentArticleRegexBit, "[|]~[[").concat(t, "|~g;");
        cmd += "s~\\[\\[".concat(s, "\\|").concat(s, "\\]\\]~[[").concat(t, "]]~g");
      } else {
        cmd += "s~\\[\\[".concat(currentArticleRegexBit, "\\]\\]~[[").concat(t, "|$1]]~g;");
        cmd += "s~\\[\\[".concat(currentArticleRegexBit, "[|]~[[").concat(t, "|~g;");
        cmd += "s~\\[\\[".concat(s, "\\|").concat(s, "\\]\\]~[[").concat(t, "]]~g");
      }
    } else {
      cmd += "s~\\[\\[".concat(currentArticleRegexBit, "\\]\\]~$1~g;");
      cmd += "s~\\[\\[".concat(currentArticleRegexBit, "[|](.*?)\\]\\]~$2~g");
    }
    cmd = "autoedit=".concat(encodeURIComponent(cmd));
    cmd += "&autoclick=".concat(encodeURIComponent(x.clickButton), "&actoken=").concat(encodeURIComponent(autoClickToken()));
    cmd += x.minor === null ? "" : "&autominor=".concat(encodeURIComponent(x.minor));
    cmd += x.watch === null ? "" : "&autowatch=".concat(encodeURIComponent(x.watch));
    cmd += "&autosummary=".concat(encodeURIComponent(x.summary));
    cmd += "&autoimpl=".concat(encodeURIComponent(popupString("autoedit_version")));
    return appendParamsToLink(lk, cmd);
  };
  const redirLink = (redirMatch, article) => {
    let ret = "";
    if (getValueOf("popupAppendRedirNavLinks") && getValueOf("popupNavLinks")) {
      ret += "<hr>";
      if (getValueOf("popupFixRedirs") && autoEdit !== void 0 && autoEdit) {
        ret += popupString("Redirects to: (Fix ");
        log("redirLink: newTarget=".concat(redirMatch));
        ret += addPopupShortcut(changeLinkTargetLink({
          newTarget: redirMatch,
          text: popupString("target"),
          hint: popupString("Fix this redirect, changing just the link target"),
          summary: simplePrintf(getValueOf("popupFixRedirsSummary"), [article.toString(), redirMatch]),
          oldTarget: article.toString(),
          clickButton: getValueOf("popupRedirAutoClick"),
          minor: true,
          watch: getValueOf("popupWatchRedirredPages")
        }), "R");
        ret += popupString(" or ");
        ret += addPopupShortcut(changeLinkTargetLink({
          newTarget: redirMatch,
          text: popupString("target & label"),
          hint: popupString("Fix this redirect, changing the link target and label"),
          summary: simplePrintf(getValueOf("popupFixRedirsSummary"), [article.toString(), redirMatch]),
          oldTarget: article.toString(),
          clickButton: getValueOf("popupRedirAutoClick"),
          minor: true,
          watch: getValueOf("popupWatchRedirredPages"),
          alsoChangeLabel: true
        }), "R");
        ret += popupString(")");
      } else {
        ret += popupString("Redirects") + popupString(" to ");
      }
      return ret;
    }
    return "<br> ".concat(popupString("Redirects")).concat(popupString(" to ")).concat(titledWikiLink({
      article: new Title().fromWikiText(redirMatch),
      action: "view",
      text: safeDecodeURI(redirMatch),
      title: popupString("Bypass redirect")
    }));
  };
  const arinLink = (l) => {
    if (!saneLinkCheck(l)) {
      return null;
    }
    if (!l.article.isIpUser() || !pg.wiki.wikimedia) {
      return null;
    }
    const uN = l.article.userName();
    return generalNavLink({
      url: "http://ws.arin.net/cgi-bin/whois.pl?queryinput=".concat(encodeURIComponent(uN)),
      newWin: l.newWin,
      title: tprintf("Look up %s in ARIN whois database", [uN]),
      text: l.text,
      noPopup: 1
    });
  };
  const toolDbName = (cookieStyle) => {
    let ret = mw.config.get("wgDBname");
    if (!cookieStyle) {
      ret += "_p";
    }
    return ret;
  };
  const saneLinkCheck = (l) => {
    if (typeof l.article !== typeof {} || typeof l.text !== "string") {
      return false;
    }
    return true;
  };
  const editCounterLink = (l) => {
    if (!saneLinkCheck(l)) {
      return null;
    }
    if (!pg.wiki.wikimedia) {
      return null;
    }
    const uN = l.article.userName();
    const tool = getValueOf("popupEditCounterTool");
    let url;
    const defaultToolUrl = "//tools.wmflabs.org/supercount/index.php?user=$1&project=$2.$3";
    switch (tool) {
      case "custom":
        url = simplePrintf(getValueOf("popupEditCounterUrl"), [encodeURIComponent(uN), toolDbName()]);
        break;
      default: {
        const theWiki = pg.wiki.hostname.split(".");
        url = simplePrintf(defaultToolUrl, [encodeURIComponent(uN), theWiki[0], theWiki[1]]);
      }
    }
    return generalNavLink({
      url,
      title: tprintf("editCounterLinkHint", [uN]),
      newWin: l.newWin,
      text: l.text,
      noPopup: 1
    });
  };
  const editorListLink = (l) => {
    if (!saneLinkCheck(l)) {
      return null;
    }
    const article = l.article.articleFromTalkPage() || l.article;
    const url = "https://xtools.wmflabs.org/articleinfo/".concat(encodeURI(pg.wiki.hostname), "/").concat(article.urlString(), "?uselang=").concat(mw.config.get("wgUserLanguage"));
    return generalNavLink({
      url,
      title: tprintf("editorListHint", [article]),
      newWin: l.newWin,
      text: l.text,
      noPopup: 1
    });
  };
  const generalNavLink = (l) => {
    l.className = l.className === null ? "popupNavLink" : l.className;
    return generalLink(l);
  };
  const getHistoryInfo = (wikipage, whatNext) => {
    log("getHistoryInfo");
    getHistory(wikipage, whatNext ? (d) => {
      whatNext(processHistory(d));
    } : processHistory);
  };
  const getHistory = (wikipage, onComplete) => {
    log("getHistory");
    const url = "".concat(pg.wiki.apiwikibase, "?format=json&formatversion=2&action=query&prop=revisions&titles=").concat(new Title(wikipage).urlString(), "&rvlimit=").concat(getValueOf("popupHistoryLimit"));
    log("getHistory: url=".concat(url));
    return startDownload(url, "".concat(pg.idNumber, "history"), onComplete);
  };
  const processHistory = (download) => {
    const jsobj = getJsObj(download.data);
    try {
      const {
        revisions
      } = anyChild(jsobj.query.pages);
      const edits = [];
      var _iterator25 = _createForOfIteratorHelper(revisions), _step25;
      try {
        for (_iterator25.s(); !(_step25 = _iterator25.n()).done; ) {
          const revision = _step25.value;
          edits.push({
            oldid: revision.revid,
            editor: revision.user
          });
        }
      } catch (err) {
        _iterator25.e(err);
      } finally {
        _iterator25.f();
      }
      log("processed ".concat(edits.length, " edits"));
      return finishProcessHistory(edits, mw.config.get("wgUserName"));
    } catch {
      log("Something went wrong with JSON business");
      return finishProcessHistory([]);
    }
  };
  const finishProcessHistory = (edits, userName) => {
    const histInfo = {};
    histInfo.edits = edits;
    histInfo.userName = userName;
    for (let i = 0; i < edits.length; ++i) {
      if (histInfo.myLastEdit === void 0 && userName && edits[i].editor === userName) {
        histInfo.myLastEdit = {
          index: i,
          oldid: edits[i].oldid,
          previd: i === 0 ? null : edits[i - 1].oldid
        };
      }
      if (histInfo.firstNewEditor === void 0 && edits[i].editor !== edits[0].editor) {
        histInfo.firstNewEditor = {
          index: i,
          oldid: edits[i].oldid,
          previd: i === 0 ? null : edits[i - 1].oldid
        };
      }
    }
    return histInfo;
  };
  const defaultize = (x) => {
    var _pg$option, _pg$option$x;
    (_pg$option$x = (_pg$option = pg.option)[x]) !== null && _pg$option$x !== void 0 ? _pg$option$x : _pg$option[x] = window[x] === void 0 ? pg.optionDefault[x] : window[x];
  };
  const newOption = (x, def) => {
    pg.optionDefault[x] = def;
  };
  const setDefault = (x, def) => {
    return newOption(x, def);
  };
  const getValueOf = (varName) => {
    defaultize(varName);
    return pg.option[varName];
  };
  const setOptions = () => {
    let userIsSysop = false;
    if (mw.config.get("wgUserGroups")) {
      for (let g = 0; g < mw.config.get("wgUserGroups").length; ++g) {
        if (mw.config.get("wgUserGroups")[g] === "sysop") {
          userIsSysop = true;
        }
        if (mw.config.get("wgUserGroups")[g] === "steward") {
          userIsSysop = true;
        }
      }
    }
    newOption("popupDelay", 0.5);
    newOption("popupHideDelay", 0.5);
    newOption("simplePopups", false);
    newOption("popupStructure", "shortmenus");
    newOption("popupActionsMenu", true);
    newOption("popupSetupMenu", true);
    newOption("popupAdminLinks", userIsSysop);
    newOption("popupShortcutKeys", false);
    newOption("popupHistoricalLinks", true);
    newOption("popupOnlyArticleLinks", true);
    newOption("removeTitles", true);
    newOption("popupMaxWidth", 350);
    newOption("popupSimplifyMainLink", true);
    newOption("popupAppendRedirNavLinks", true);
    newOption("popupTocLinks", false);
    newOption("popupSubpopups", true);
    newOption(
      "popupDragHandle",
      false
      /* 'popupTopLinks' */
    );
    newOption("popupLazyPreviews", true);
    newOption("popupLazyDownloads", true);
    newOption("popupAllDabsStubs", false);
    newOption("popupDebugging", false);
    newOption("popupActiveNavlinks", true);
    newOption("popupModifier", false);
    newOption("popupModifierAction", "enable");
    newOption("popupDraggable", true);
    newOption("popupReview", false);
    newOption("popupLocale", false);
    newOption("popupDateTimeFormatterOptions", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
    newOption("popupDateFormatterOptions", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    newOption("popupTimeFormatterOptions", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
    newOption("popupImages", true);
    newOption("imagePopupsForImages", true);
    newOption("popupNeverGetThumbs", false);
    newOption("popupThumbAction", "imagepage");
    newOption("popupImageSize", 60);
    newOption("popupImageSizeLarge", 200);
    newOption("popupFixRedirs", false);
    newOption("popupRedirAutoClick", "wpDiff");
    newOption("popupFixDabs", false);
    newOption("popupDabsAutoClick", "wpDiff");
    newOption("popupRevertSummaryPrompt", false);
    newOption("popupMinorReverts", false);
    newOption("popupRedlinkRemoval", false);
    newOption("popupRedlinkAutoClick", "wpDiff");
    newOption("popupWatchDisambiggedPages", null);
    newOption("popupWatchRedirredPages", null);
    newOption("popupDabWiktionary", "last");
    newOption("popupNavLinks", true);
    newOption("popupNavLinkSeparator", " &sdot; ");
    newOption("popupLastEditLink", true);
    newOption("popupEditCounterTool", "supercount");
    newOption("popupEditCounterUrl", "");
    newOption("popupPreviews", true);
    newOption("popupSummaryData", true);
    newOption("popupMaxPreviewSentences", 5);
    newOption("popupMaxPreviewCharacters", 600);
    newOption("popupLastModified", true);
    newOption("popupPreviewKillTemplates", true);
    newOption("popupPreviewRawTemplates", true);
    newOption("popupPreviewFirstParOnly", true);
    newOption("popupPreviewCutHeadings", true);
    newOption("popupPreviewButton", false);
    newOption("popupPreviewButtonEvent", "click");
    newOption("popupPreviewDiffs", true);
    newOption("popupDiffMaxLines", 100);
    newOption("popupDiffContextLines", 2);
    newOption("popupDiffContextCharacters", 40);
    newOption("popupDiffDates", true);
    newOption("popupDiffDatePrinter", "toLocaleString");
    newOption("popupReviewedSummary", popupString("defaultpopupReviewedSummary"));
    newOption("popupFixDabsSummary", popupString("defaultpopupFixDabsSummary"));
    newOption("popupExtendedRevertSummary", popupString("defaultpopupExtendedRevertSummary"));
    newOption("popupRevertSummary", popupString("defaultpopupRevertSummary"));
    newOption("popupRevertToPreviousSummary", popupString("defaultpopupRevertToPreviousSummary"));
    newOption("popupQueriedRevertSummary", popupString("defaultpopupQueriedRevertSummary"));
    newOption("popupQueriedRevertToPreviousSummary", popupString("defaultpopupQueriedRevertToPreviousSummary"));
    newOption("popupFixRedirsSummary", popupString("defaultpopupFixRedirsSummary"));
    newOption("popupRedlinkSummary", popupString("defaultpopupRedlinkSummary"));
    newOption("popupRmDabLinkSummary", popupString("defaultpopupRmDabLinkSummary"));
    newOption("popupHistoryLimit", 50);
    newOption("popupFilters", [popupFilterStubDetect, popupFilterDisambigDetect, popupFilterPageSize, popupFilterCountLinks, popupFilterCountImages, popupFilterCountCategories, popupFilterLastModified]);
    newOption("extraPopupFilters", []);
    newOption("popupOnEditSelection", "cursor");
    newOption("popupPreviewHistory", true);
    newOption("popupImageLinks", true);
    newOption("popupCategoryMembers", true);
    newOption("popupUserInfo", true);
    newOption("popupHistoryPreviewLimit", 25);
    newOption("popupContribsPreviewLimit", 25);
    newOption("popupRevDelUrl", "//en.wikipedia.org/wiki/Wikipedia:Revision_deletion");
    newOption("popupShowGender", true);
    newOption("popupNewWindows", false);
    newOption("popupLinksNewWindow", {
      lastContrib: true,
      sinceMe: true
    });
    newOption("popupDabRegexp", String.raw(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["{{s*(d(ab|isamb(ig(uation)?)?)|(((geo|hn|road?|school|number)dis)|[234][lc][acw]|(road|ship)index))s*(|[^}]*)?}}|is a .*disambiguation.*page"], ["\\{\\{\\s*(d(ab|isamb(ig(uation)?)?)|(((geo|hn|road?|school|number)dis)|[234][lc][acw]|(road|ship)index))\\s*(\\|[^}]*)?\\}\\}|is a .*disambiguation.*page"]))));
    newOption("popupAnchorRegexp", "anchors?");
    newOption("popupStubRegexp", "(sect)?stub[}][}]|This .*-related article is a .*stub");
    newOption("popupImageVarsRegexp", "image|image_(?:file|skyline|name|flag|seal)|cover|badge|logo");
  };
  pg.string = {
    // summary data, searching etc.
    article: "article",
    category: "category",
    categories: "categories",
    image: "image",
    images: "images",
    stub: "stub",
    "section stub": "section stub",
    "Empty page": "Empty page",
    kB: "kB",
    bytes: "bytes",
    day: "day",
    days: "days",
    hour: "hour",
    hours: "hours",
    minute: "minute",
    minutes: "minutes",
    second: "second",
    seconds: "seconds",
    week: "week",
    weeks: "weeks",
    search: "search",
    SearchHint: "Find English Wikipedia articles containing %s",
    web: "web",
    global: "global",
    // article-related actions and info
    // (some actions also apply to user pages)
    actions: "actions",
    popupsMenu: "popups",
    togglePreviewsHint: "Toggle preview generation in popups on this page",
    "enable previews": "enable previews",
    "disable previews": "disable previews",
    "toggle previews": "toggle previews",
    "show preview": "show preview",
    reset: "reset",
    "more...": "more...",
    disable: "disable popups",
    disablePopupsHint: "Disable popups on this page. Reload page to re-enable.",
    historyfeedHint: "RSS feed of recent changes to this page",
    purgePopupsHint: "Reset popups, clearing all cached popup data.",
    PopupsHint: "Reset popups, clearing all cached popup data.",
    spacebar: "space",
    view: "view",
    "view article": "view article",
    viewHint: "Go to %s",
    talk: "talk",
    "talk page": "talk page",
    "this&nbsp;revision": "this&nbsp;revision",
    "revision %s of %s": "revision %s of %s",
    "Revision %s of %s": "Revision %s of %s",
    "the revision prior to revision %s of %s": "the revision prior to revision %s of %s",
    "Toggle image size": "Click to toggle image size",
    del: "del",
    delete: "delete",
    deleteHint: "Delete %s",
    undeleteShort: "un",
    UndeleteHint: "Show the deletion history for %s",
    protect: "protect",
    protectHint: "Restrict editing rights to %s",
    unprotectShort: "un",
    unprotectHint: "Allow %s to be edited by anyone again",
    "send thanks": "send thanks",
    ThanksHint: "Send a thank you notification to this user",
    move: "move",
    "move page": "move page",
    MovepageHint: "Change the title of %s",
    edit: "edit",
    "edit article": "edit article",
    editHint: "Change the content of %s",
    "edit talk": "edit talk",
    new: "new",
    "new topic": "new topic",
    newSectionHint: "Start a new section on %s",
    "null edit": "null edit",
    nullEditHint: "Submit an edit to %s, making no changes ",
    hist: "hist",
    history: "history",
    historyHint: "List the changes made to %s",
    last: "prev",
    lastEdit: "lastEdit",
    "mark patrolled": "mark patrolled",
    markpatrolledHint: "Mark this edit as patrolled",
    "Could not marked this edit as patrolled": "Could not marked this edit as patrolled",
    "show last edit": "most recent edit",
    "Show the last edit": "Show the effects of the most recent change",
    lastContrib: "lastContrib",
    "last set of edits": "latest edits",
    lastContribHint: "Show the net effect of changes made by the last editor",
    cur: "cur",
    diffCur: "diffCur",
    "Show changes since revision %s": "Show changes since revision %s",
    "%s old": "%s old",
    oldEdit: "oldEdit",
    purge: "purge",
    purgeHint: "Demand a fresh copy of %s",
    raw: "source",
    rawHint: "Download the source of %s",
    render: "simple",
    renderHint: "Show a plain HTML version of %s",
    "Show the edit made to get revision": "Show the edit made to get revision",
    sinceMe: "sinceMe",
    "changes since mine": "diff my edit",
    sinceMeHint: "Show changes since my last edit",
    "Couldn't find an edit by %s\nin the last %s edits to\n%s": "Couldn't find an edit by %s\nin the last %s edits to\n%s",
    eds: "eds",
    editors: "editors",
    editorListHint: "List the users who have edited %s",
    related: "related",
    relatedChanges: "relatedChanges",
    "related changes": "related changes",
    RecentchangeslinkedHint: "Show changes in articles related to %s",
    editOld: "editOld",
    rv: "rv",
    revert: "revert",
    revertHint: "Revert to %s",
    defaultpopupReviewedSummary: "Accepted by reviewing the [[Special:diff/%s/%s|difference]] between this version and previously accepted version using [[:enwiki:Wikipedia:Tools/Navigation_popups|popups]]",
    defaultpopupRedlinkSummary: "Removing link to empty page [[%s]] using [[:enwiki:Wikipedia:Tools/Navigation_popups|popups]]",
    defaultpopupFixDabsSummary: "Disambiguate [[%s]] to [[%s]] using [[:enwiki:Wikipedia:Tools/Navigation_popups|popups]]",
    defaultpopupFixRedirsSummary: "Redirect bypass from [[%s]] to [[%s]] using [[:enwiki:Wikipedia:Tools/Navigation_popups|popups]]",
    defaultpopupExtendedRevertSummary: "Revert to revision dated %s by %s, oldid %s using [[:enwiki:Wikipedia:Tools/Navigation_popups|popups]]",
    defaultpopupRevertToPreviousSummary: "Revert to the revision prior to revision %s using [[:enwiki:Wikipedia:Tools/Navigation_popups|popups]]",
    defaultpopupRevertSummary: "Revert to revision %s using [[:enwiki:Wikipedia:Tools/Navigation_popups|popups]]",
    defaultpopupQueriedRevertToPreviousSummary: "Revert to the revision prior to revision $1 dated $2 by $3 using [[:enwiki:Wikipedia:Tools/Navigation_popups|popups]]",
    defaultpopupQueriedRevertSummary: "Revert to revision $1 dated $2 by $3 using [[:enwiki:Wikipedia:Tools/Navigation_popups|popups]]",
    defaultpopupRmDabLinkSummary: "Remove link to dab page [[%s]] using [[:enwiki:Wikipedia:Tools/Navigation_popups|popups]]",
    Redirects: "Redirects",
    " to ": " to ",
    "Bypass redirect": "Bypass redirect",
    "Fix this redirect": "Fix this redirect",
    disambig: "disambig",
    disambigHint: "Disambiguate this link to [[%s]]",
    "Click to disambiguate this link to:": "Click to disambiguate this link to:",
    "remove this link": "remove this link",
    "remove all links to this page from this article": "remove all links to this page from this article",
    "remove all links to this disambig page from this article": "remove all links to this disambig page from this article",
    mainlink: "mainlink",
    wikiLink: "wikiLink",
    wikiLinks: "wikiLinks",
    "links here": "links here",
    whatLinksHere: "whatLinksHere",
    "what links here": "what links here",
    WhatlinkshereHint: "List the pages that are hyperlinked to %s",
    unwatchShort: "un",
    watchThingy: "watch",
    watchHint: "Add %s to my watchlist",
    unwatchHint: "Remove %s from my watchlist",
    "Only found one editor: %s made %s edits": "Only found one editor: %s made %s edits",
    "%s seems to be the last editor to the page %s": "%s seems to be the last editor to the page %s",
    rss: "rss",
    // diff previews
    "Diff truncated for performance reasons": "Diff truncated for performance reasons",
    "Old revision": "Old revision",
    "New revision": "New revision",
    "Something went wrong :-(": "Something went wrong :-(",
    "Empty revision, maybe non-existent": "Empty revision, maybe non-existent",
    "Unknown date": "Unknown date",
    // other special previews
    "Empty category": "Empty category",
    "Category members (%s shown)": "Category members (%s shown)",
    "No image links found": "No image links found",
    "File links": "File links",
    "No image found": "No image found",
    "Image from Commons": "Image from Commons",
    "Description page": "Description page",
    "Alt text:": "Alt text:",
    revdel: "Hidden revision",
    // user-related actions and info
    user: "user",
    "user&nbsp;page": "user&nbsp;page",
    "user talk": "user talk",
    "edit user talk": "edit user talk",
    "leave comment": "leave comment",
    email: "email",
    "email user": "email user",
    EmailuserHint: "Send an email to %s",
    space: "space",
    PrefixIndexHint: "Show pages in the userspace of %s",
    count: "count",
    "edit counter": "edit counter",
    editCounterLinkHint: "Count the contributions made by %s",
    contribs: "contribs",
    contributions: "contributions",
    deletedContribs: "deleted contributions",
    DeletedcontributionsHint: "List deleted edits made by %s",
    ContributionsHint: "List the contributions made by %s",
    log: "log",
    "user log": "user log",
    userLogHint: "Show %s's user log",
    arin: "ARIN lookup",
    "Look up %s in ARIN whois database": "Look up %s in the ARIN whois database",
    unblockShort: "un",
    block: "block",
    "block user": "block user",
    IpblocklistHint: "Unblock %s",
    BlockipHint: "Prevent %s from editing",
    "block log": "block log",
    blockLogHint: "Show the block log for %s",
    protectLogHint: "Show the protection log for %s",
    pageLogHint: "Show the page log for %s",
    deleteLogHint: "Show the deletion log for %s",
    "Invalid %s %s": "The option %s is invalid: %s",
    "No backlinks found": "No backlinks found",
    " and more": " and more",
    undo: "undo",
    undoHint: "undo this edit",
    "Download preview data": "Download preview data",
    "Invalid or IP user": "Invalid or IP user",
    "Not a registered username": "Not a registered username",
    BLOCKED: "BLOCKED",
    "Has blocks": "Has blocks",
    " edits since: ": " edits since: ",
    "last edit on ": "last edit on ",
    "he/him": "he/him",
    "she/her": "she/her",
    // Autoediting
    "Enter a non-empty edit summary or press cancel to abort": "Enter a non-empty edit summary or press cancel to abort",
    "Failed to get revision information, please edit manually.\n\n": "Failed to get revision information, please edit manually.\n\n",
    "The %s button has been automatically clicked. Please wait for the next page to load.": "The %s button has been automatically clicked. Please wait for the next page to load.",
    "Could not find button %s. Please check the settings in your javascript file.": "Could not find button %s. Please check the settings in your javascript file.",
    // Popups setup
    "Open full-size image": "Open full-size image",
    autoedit_version: "np20140416"
  };
  const popupString = (str) => {
    if (message !== void 0 && message && message[str]) {
      return message[str];
    }
    if (pg.string[str]) {
      return pg.string[str];
    }
    return str;
  };
  const tprintf = (str, subs) => {
    if (typeof subs !== typeof []) {
      subs = [subs];
    }
    return simplePrintf(popupString(str), subs);
  };
  if (document.readyState === "complete") {
    autoEdit();
  } else {
    $(window).on("load", autoEdit);
  }
  (() => {
    let once = true;
    const dynamicContentHandler = ($content) => {
      if ($content.attr("id") === "mw-content-text" && once) {
        once = false;
        return;
      }
      const registerHooksForVisibleNavpops = () => {
        for (let i = 0; pg.current.links && i < pg.current.links.length; i++) {
          const navpop = pg.current.links[i].navpopup;
          if (!navpop || !navpop.isVisible()) {
            continue;
          }
          Navpopup.tracker.addHook(posCheckerHook(navpop));
        }
      };
      const doIt = () => {
        registerHooksForVisibleNavpops();
        $content.each((_index, element) => {
          element.ranSetupTooltipsAlready = false;
          setupTooltips(element);
        });
      };
      setupPopups(doIt);
    };
    mw.hook("wikipage.content").add(dynamicContentHandler);
    mw.hook("ext.echo.overlay.beforeShowingOverlay").add(($overlay) => {
      dynamicContentHandler($overlay.find(".mw-echo-state"));
    });
  })();
};
//! src/Navigation_popups/Navigation_popups.ts
$(popups);

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL05hdmlnYXRpb25fcG9wdXBzL21vZHVsZXMvYXBpLnRzIiwgInNyYy9OYXZpZ2F0aW9uX3BvcHVwcy9tb2R1bGVzL3N0cmluZy50cyIsICJzcmMvTmF2aWdhdGlvbl9wb3B1cHMvbW9kdWxlcy9jb3JlLmpzIiwgInNyYy9OYXZpZ2F0aW9uX3BvcHVwcy9OYXZpZ2F0aW9uX3BvcHVwcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKCdOYXZpZ2F0aW9uIHBvcHVwcy8xLjAnKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgIi8vIFRyYW5zbGF0YWJsZSBzdHJpbmdzXG5jb25zdCBtZXNzYWdlOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHtcblx0Ly8gc3VtbWFyeSBkYXRhLCBzZWFyY2hpbmcgZXRjLlxuXHRhcnRpY2xlOiB3aW5kb3cud2dVTFMoJ+adoeebricsICfmop3nm64nKSxcblx0Y2F0ZWdvcnk6IHdpbmRvdy53Z1VMUygn5Liq5YiG57G7JywgJ+WAi+WIhumhnicpLFxuXHRjYXRlZ29yaWVzOiB3aW5kb3cud2dVTFMoJ+S4quWIhuexuycsICflgIvliIbpoZ4nKSxcblx0aW1hZ2U6IHdpbmRvdy53Z1VMUygn5Liq5paH5Lu2JywgJ+WAi+aqlOahiCcpLFxuXHRpbWFnZXM6IHdpbmRvdy53Z1VMUygn5Liq5paH5Lu2JywgJ+WAi+aqlOahiCcpLFxuXHRzdHViOiAn5bCP5L2c5ZOBJyxcblx0J3NlY3Rpb24gc3R1Yic6IHdpbmRvdy53Z1VMUygn5bCP56ug6IqCJywgJ+Wwj+eroOevgCcpLFxuXHQnRW1wdHkgcGFnZSc6IHdpbmRvdy53Z1VMUygn56m66aG16Z2iJywgJ+epuumggemdoicpLFxuXHRrQjogd2luZG93LndnVUxTKCfljYPlrZfoioI8c3ViPu+8iOS7pTEwMDDkuLrkuIDov5vvvIk8L3N1Yj4nLCAn5Y2D5L2N5YWD57WEPHN1Yj7vvIjku6UxMDAw54K65LiA6YCy77yJPC9zdWI+JyksXG5cdGJ5dGVzOiB3aW5kb3cud2dVTFMoJ+Wtl+iKgicsICfkvY3lhYPntYQnKSxcblx0ZGF5OiAn5aSpJyxcblx0ZGF5czogJ+WkqScsXG5cdGhvdXI6IHdpbmRvdy53Z1VMUygn5bCP5pe2JywgJ+Wwj+aZgicpLFxuXHRob3Vyczogd2luZG93LndnVUxTKCflsI/ml7YnLCAn5bCP5pmCJyksXG5cdG1pbnV0ZTogJ+WIhicsXG5cdG1pbnV0ZXM6ICfliIYnLFxuXHRzZWNvbmQ6ICfnp5InLFxuXHRzZWNvbmRzOiAn56eSJyxcblx0d2VlazogJ+WRqCcsXG5cdHdlZWtzOiAn5ZGoJyxcblx0bW9udGg6ICfmnIgnLFxuXHRtb250aHM6ICfmnIgnLFxuXHR5ZWFyOiAn5bm0Jyxcblx0eWVhcnM6ICflubQnLFxuXHRzZWFyY2g6IHdpbmRvdy53Z1VMUygn5pCc57SiJywgJ+aQnOWwiycpLFxuXHRTZWFyY2hIaW50OiB3aW5kb3cud2dVTFMoJ+aQnOe0ouWMheWQqyAlcyDnmoTpobXpnaInLCAn5pCc5bCL5YyF5ZCrICVzIOeahOmggemdoicpLFxuXHR3ZWI6ICdCaW5nJyxcblx0Z2xvYmFsOiAn5YWo5Z+fJyxcblx0J21vcmUuLi4nOiAn5pu05aSa4oCm4oCmJyxcblx0Ly8gYXJ0aWNsZS1yZWxhdGVkIGFjdGlvbnMgYW5kIGluZm9cblx0Ly8gKHNvbWUgYWN0aW9ucyBhbHNvIGFwcGx5IHRvIHVzZXIgcGFnZXMpXG5cdGFjdGlvbnM6IHdpbmRvdy53Z1VMUygn5pON5L2cJywgJ+WLleS9nCcpLFxuXHQvLyAvLy8gdmlldyBhcnRpY2xlcyBhbmQgdmlldyB0YWxrXG5cdHBvcHVwc01lbnU6ICdQb3B1cHMnLFxuXHQnZGlzYWJsZSBwcmV2aWV3cyc6IHdpbmRvdy53Z1VMUygn56aB55So6aKE6KeIJywgJ+emgeeUqOmgkOimvScpLFxuXHR0b2dnbGVQcmV2aWV3c0hpbnQ6IHdpbmRvdy53Z1VMUygn5YiH5o2i5pys6aG1IFBvcHVwcyDnmoTpooTop4jlvIDlhbMnLCAn5YiH5o+b5pys6aCBIFBvcHVwcyDnmoTpoJDopr3plovpl5wnKSxcblx0J3RvZ2dsZSBwcmV2aWV3cyc6IHdpbmRvdy53Z1VMUygn5YiH5o2i6aKE6KeI5byA5YWzJywgJ+WIh+aPm+mgkOimvemWi+mXnCcpLFxuXHRyZXNldDogd2luZG93LndnVUxTKCflpI3kvY0nLCAn6KSH5L2NJyksXG5cdGRpc2FibGU6ICfnpoHnlKggUG9wdXBzJyxcblx0ZGlzYWJsZVBvcHVwc0hpbnQ6IHdpbmRvdy53Z1VMUyhcblx0XHQn5Zyo5pys6aG156aB55SoIFBvcHVwc++8jOWIt+aWsOmhtemdouS7pemHjeaWsOWQr+eUqOOAgicsXG5cdFx0J+WcqOacrOmggeemgeeUqCBQb3B1cHPvvIzph43mlrDmlbTnkIbpoIHpnaLku6Xph43mlrDllZ/nlKjjgIInXG5cdCksXG5cdHB1cmdlUG9wdXBzSGludDogd2luZG93LndnVUxTKCflpI3kvY0gUG9wdXBz77yM5riF6Zmk5omA5pyJ57yT5a2Y5pWw5o2u44CCJywgJ+ikh+S9jSBQb3B1cHPvvIzmuIXpmaTmiYDmnInlv6vlj5bos4fmlpnjgIInKSxcblx0UG9wdXBzSGludDogd2luZG93LndnVUxTKCflpI3kvY0gUG9wdXBz77yM5riF6Zmk5omA5pyJ57yT5a2Y5pWw5o2u44CCJywgJ+ikh+S9jSBQb3B1cHPvvIzmuIXpmaTmiYDmnInlv6vlj5bos4fmlpnjgIInKSxcblx0c3BhY2ViYXI6ICfnqbrmoLwnLFxuXHR2aWV3OiB3aW5kb3cud2dVTFMoJ+afpeeciycsICfmqqLoppYnKSxcblx0J3ZpZXcgYXJ0aWNsZSc6IHdpbmRvdy53Z1VMUygn5p+l55yL5p2h55uuJywgJ+aqouimluaineebricpLFxuXHR2aWV3SGludDogd2luZG93LndnVUxTKCfliY3lvoAgJXMnLCAn5YmN5b6AICVzJyksXG5cdHRhbGs6IHdpbmRvdy53Z1VMUygn6K6o6K66JywgJ+iojuirlicpLFxuXHQndGFsayBwYWdlJzogd2luZG93LndnVUxTKCforqjorrrpobUnLCAn6KiO6KuW6aCBJyksXG5cdCd0aGlzJm5ic3A7cmV2aXNpb24nOiB3aW5kb3cud2dVTFMoJ+atpOS/ruiuoueJiOacrCcsICfmraTkv67oqILniYjmnKwnKSxcblx0J3JldmlzaW9uICVzIG9mICVzJzogd2luZG93LndnVUxTKCfpobXpnaIgJDIg55qE5L+u6K6i54mI5pysICQxJywgJ+mggemdoiAkMiDnmoTkv67oqILniYjmnKwgJDEnKSxcblx0J1JldmlzaW9uICVzIG9mICVzJzogd2luZG93LndnVUxTKCfpobXpnaIgJDIg55qE5L+u6K6i54mI5pysICQxJywgJ+mggemdoiAkMiDnmoTkv67oqILniYjmnKwgJDEnKSxcblx0J3RoZSByZXZpc2lvbiBwcmlvciB0byByZXZpc2lvbiAlcyBvZiAlcyc6IHdpbmRvdy53Z1VMUyhcblx0XHQn6aG16Z2iICQyIOeahOS/ruiuoueJiOacrCAkMSDkuYvliY3nmoTkv67orqLniYjmnKwnLFxuXHRcdCfpoIHpnaIgJDIg55qE5L+u6KiC54mI5pysICQxIOS5i+WJjeeahOS/ruiogueJiOacrCdcblx0KSxcblx0J1RvZ2dsZSBpbWFnZSBzaXplJzogd2luZG93LndnVUxTKCfngrnlh7vliIfmjaLlm77niYflpKflsI8nLCAn6bue5pOK5YiH5o+b5ZyW54mH5aSn5bCPJyksXG5cdGRlbDogd2luZG93LndnVUxTKCfliKDpmaQnLCAn5Yig6ZmkJyksXG5cdC8vIC8vLyBkZWxldGUsIHByb3RlY3QsIG1vdmVcblx0ZGVsZXRlOiB3aW5kb3cud2dVTFMoJ+WIoOmZpCcsICfliKDpmaQnKSxcblx0ZGVsZXRlSGludDogd2luZG93LndnVUxTKCfliKDpmaQgJXMnLCAn5Yig6ZmkICVzJyksXG5cdHVuZGVsZXRlU2hvcnQ6IHdpbmRvdy53Z1VMUygn5oGi5aSNJywgJ+aBouW+qScpLFxuXHRVbmRlbGV0ZUhpbnQ6IHdpbmRvdy53Z1VMUygn5oGi5aSNICVzJywgJ+aBouW+qSAlcycpLFxuXHRwcm90ZWN0OiB3aW5kb3cud2dVTFMoJ+S/neaKpCcsICfkv53orbcnKSxcblx0cHJvdGVjdEhpbnQ6IHdpbmRvdy53Z1VMUygn5L+d5oqkICVzJywgJ+S/neittyAlcycpLFxuXHR1bnByb3RlY3RTaG9ydDogd2luZG93LndnVUxTKCfop6PpmaQnLCAn6Kej6ZmkJyksXG5cdHVucHJvdGVjdEhpbnQ6IHdpbmRvdy53Z1VMUygn6Kej6Zmk5a+5ICVzIOeahOS/neaKpCcsICfop6PpmaTlsI0gJXMg55qE5L+d6K23JyksXG5cdG1vdmU6IHdpbmRvdy53Z1VMUygn56e75YqoJywgJ+enu+WLlScpLFxuXHQnbW92ZSBwYWdlJzogd2luZG93LndnVUxTKCfnp7vliqjpobXpnaInLCAn56e75YuV6aCB6Z2iJyksXG5cdE1vdmVwYWdlSGludDogd2luZG93LndnVUxTKCfkv67mlLkgJXMg55qE5qCH6aKYJywgJ+S/ruaUuSAlcyDnmoTmqJnpoYwnKSxcblx0ZWRpdDogd2luZG93LndnVUxTKCfnvJbovpEnLCAn57eo6LyvJyksXG5cdC8vIC8vLyBlZGl0IGFydGljbGVzIGFuZCB0YWxrXG5cdCdlZGl0IGFydGljbGUnOiB3aW5kb3cud2dVTFMoJ+e8lui+keadoeebricsICfnt6jovK/mop3nm64nKSxcblx0ZWRpdEhpbnQ6IHdpbmRvdy53Z1VMUygn5L+u5pS5ICVzIOeahOWGheWuuScsICfkv67mlLkgJXMg55qE5YWn5a65JyksXG5cdCdlZGl0IHRhbGsnOiB3aW5kb3cud2dVTFMoJ+e8lui+keiuqOiuuumhtScsICfnt6jovK/lsI3oqbHpoIEnKSxcblx0bmV3OiB3aW5kb3cud2dVTFMoJ+aWsCcsICfmlrAnKSxcblx0J25ldyB0b3BpYyc6IHdpbmRvdy53Z1VMUygn5paw6K+d6aKYJywgJ+aWsOipsemhjCcpLFxuXHRuZXdTZWN0aW9uSGludDogd2luZG93LndnVUxTKCflnKggJXMg5aKe5Yqg5paw55qE6K6o6K666K+d6aKYJywgJ+WcqCAlcyDlop7liqDmlrDnmoToqI7oq5boqbHpoYwnKSxcblx0J251bGwgZWRpdCc6IHdpbmRvdy53Z1VMUygn56m657yW6L6RJywgJ+epuue3qOi8rycpLFxuXHRudWxsRWRpdEhpbnQ6IHdpbmRvdy53Z1VMUygn6L+b6KGM5LiA5qyh5a+5ICVzIOeahOepuue8lui+kScsICfoo73pgKDkuIDmrKHlsI0gJXMg55qE56m657eo6LyvJyksXG5cdGhpc3Q6IHdpbmRvdy53Z1VMUygn5Y6G5Y+yJywgJ+att+WPsicpLFxuXHQvLyAvLy8gaGlzdG9yeSwgZGlmZnMsIGVkaXRvcnMsIHJlbGF0ZWRcblx0aGlzdG9yeTogd2luZG93LndnVUxTKCfljoblj7InLCAn5q235Y+yJyksXG5cdGhpc3RvcnlIaW50OiB3aW5kb3cud2dVTFMoJyVzIOeahOS/ruiuouWOhuWPsicsICclcyDnmoTkv67oqILmrbflj7InKSxcblx0bGFzdDogd2luZG93LndnVUxTKCfkuYvliY0nLCAn5LmL5YmNJyksXG5cdC8vIFtbTWVkaWFXaWtpOkxhc3RdXVxuXHRsYXN0RWRpdDogd2luZG93LndnVUxTKCfmnIDov5Hmm7TmlLknLCAn5pyA6L+R5pu05pS5JyksXG5cdCdzaG93IGxhc3QgZWRpdCc6IHdpbmRvdy53Z1VMUygn5pyA6L+R5LiA5qyh5pu05pS5JywgJ+acgOaWsOS4gOasoeS/ruiogicpLFxuXHQnU2hvdyB0aGUgbGFzdCBlZGl0Jzogd2luZG93LndnVUxTKCfmmL7npLrmnIDov5HkuIDmrKHmm7TmlLnnmoTlt67lvIInLCAn6aGv56S65pyA5paw5LiA5qyh5L+u6KiC55qE5beu55WwJyksXG5cdGxhc3RDb250cmliOiB3aW5kb3cud2dVTFMoJ+acgOi/kee8lui+kScsICfmnIDov5Hnt6jovK8nKSxcblx0J2xhc3Qgc2V0IG9mIGVkaXRzJzogd2luZG93LndnVUxTKCfmnIDov5HnvJbovpEnLCAn5pyA6L+R57eo6LyvJyksXG5cdGxhc3RDb250cmliSGludDogd2luZG93LndnVUxTKCfmmL7npLrnlLHmnIDlkI7kuIDkvY3nvJbovpHogIXpgKDmiJDnmoTlt67lvIInLCAn6aGv56S655Sx5pyA5b6M5LiA5L2N57eo6Lyv6ICF6KO96YCg55qE5beu55WwJyksXG5cdGN1cjogd2luZG93LndnVUxTKCflvZPliY0nLCAn55W25YmNJyksXG5cdGRpZmZDdXI6IHdpbmRvdy53Z1VMUygn5LiO5b2T5YmN54mI5pys55qE5beu5byCJywgJ+iIh+ebruWJjeeJiOacrOeahOW3rueVsCcpLFxuXHQnU2hvdyBjaGFuZ2VzIHNpbmNlIHJldmlzaW9uICVzJzogd2luZG93LndnVUxTKCfmmL7npLroh6rkv67orqLniYjmnKwgJXMg55qE5beu5byCJywgJ+mhr+ekuuiHquS/ruiogueJiOacrCAlcyDnmoTlt67nlbAnKSxcblx0JyVzIG9sZCc6IHdpbmRvdy53Z1VMUygnJXMg5YmN55qE5pyA5ZCO54mI5pysJywgJyVzIOWJjeeahOacgOWQjueJiOacrCcpLFxuXHQvLyBhcyBpbiA0IHdlZWtzIG9sZFxuXHRvbGRFZGl0OiB3aW5kb3cud2dVTFMoJ+aXp+e8lui+kScsICfoiIrnt6jovK8nKSxcblx0cHVyZ2U6IHdpbmRvdy53Z1VMUygn5riF6Zmk57yT5a2YJywgJ+a4hemZpOW/q+WPlicpLFxuXHRwdXJnZUhpbnQ6IHdpbmRvdy53Z1VMUygn5riF6Zmk5pyN5Yqh5Zmo5LitICVzIOeahOe8k+WtmCcsICfmuIXpmaTkvLrmnI3lmajkuK0gJXMg55qE5b+r5Y+WJyksXG5cdHJhdzogd2luZG93LndnVUxTKCfmupDku6PnoIEnLCAn5Y6f5aeL56K8JyksXG5cdHJhd0hpbnQ6IHdpbmRvdy53Z1VMUygn5p+l55yLICVzIOeahOa6kOS7o+eggScsICfmqqLoppYgJXMg55qE5Y6f5aeL56K8JyksXG5cdHJlbmRlcjogd2luZG93LndnVUxTKCfku4XmraPmlocnLCAn5YOF5q2j5paHJyksXG5cdHJlbmRlckhpbnQ6IHdpbmRvdy53Z1VMUygn5pi+56S6ICVzIOeahOe6r0hUTUzop6PmnpDvvIjku4XmraPmloflhoXlrrnvvIknLCAn6aGv56S6ICVzIOeahOe0lEhUTUzop6PmnpDvvIjlg4XmraPmloflhaflrrnvvIknKSxcblx0J1Nob3cgdGhlIGVkaXQgbWFkZSB0byBnZXQgcmV2aXNpb24nOiB3aW5kb3cud2dVTFMoJ+aYvuekuue8lui+keS7peW+l+WIsOS/ruiuoueJiOacrCcsICfpoa/npLrnt6jovK/ku6XlvpfliLDkv67oqILniYjmnKwnKSxcblx0c2luY2VNZTogd2luZG93LndnVUxTKCfoh6rmiJEnLCAn6Ieq5oiRJyksXG5cdCdjaGFuZ2VzIHNpbmNlIG1pbmUnOiB3aW5kb3cud2dVTFMoJ+iHquaIkeS/ruiuoueahOW3ruW8gicsICfoh6rmiJHkv67oqILnmoTlt67nlbAnKSxcblx0c2luY2VNZUhpbnQ6IHdpbmRvdy53Z1VMUygn5pi+56S66Ieq5oiR5LiK5qyh5L+u5pS55Lul5p2l55qE5beu5byCJywgJ+mhr+ekuuiHquaIkeS4iuasoeS/ruaUueS7peS+hueahOW3rueVsCcpLFxuXHRcIkNvdWxkbid0IGZpbmQgYW4gZWRpdCBieSAlc1xcbmluIHRoZSBsYXN0ICVzIGVkaXRzIHRvXFxuJXNcIjogd2luZG93LndnVUxTKFxuXHRcdCflnKggJDMg5pyA6L+RICQyIOasoee8lui+keS4reaJvuS4jeWIsCAkMSDlgZrlh7rnmoTkv67mlLknLFxuXHRcdCflnKggJDMg5pyA6L+RICQyIOasoee3qOi8r+S4reaJvuS4jeWIsCAkMSDlgZrlh7rnmoTkv67mlLknXG5cdCksXG5cdGVkczogd2luZG93LndnVUxTKCfnvJbovpEnLCAn57eo6LyvJyksXG5cdGVkaXRvcnM6IHdpbmRvdy53Z1VMUygn57yW6L6R6ICFJywgJ+e3qOi8r+iAhScpLFxuXHRlZGl0b3JMaXN0SGludDogd2luZG93LndnVUxTKCfliJflh7rnvJbovpHov4cgJXMg55qE55So5oi3JywgJ+WIl+WHuue3qOi8r+mBjiAlcyDnmoTkvb/nlKjogIUnKSxcblx0cmVsYXRlZDogd2luZG93LndnVUxTKCfnm7jlhbMnLCAn55u46ZecJyksXG5cdHJlbGF0ZWRDaGFuZ2VzOiB3aW5kb3cud2dVTFMoJ+ebuOWFs+abtOaUuScsICfnm7jpl5zmm7TmlLknKSxcblx0J3JlbGF0ZWQgY2hhbmdlcyc6IHdpbmRvdy53Z1VMUygn55u45YWz5pu05pS5JywgJ+ebuOmXnOabtOaUuScpLFxuXHRSZWNlbnRjaGFuZ2VzbGlua2VkSGludDogd2luZG93LndnVUxTKCfmmL7npLrnm7jlhbMgJXMg55qE5L+u5pS5JywgJ+mhr+ekuuebuOmXnCAlcyDnmoTkv67mlLknKSxcblx0ZWRpdE9sZDogd2luZG93LndnVUxTKCfnvJbovpHml6fniYgnLCAn57eo6Lyv6IiK54mIJyksXG5cdC8vIC8vLyBlZGl0IG9sZCB2ZXJzaW9uLCBvciByZXZlcnRcblx0cnY6IHdpbmRvdy53Z1VMUygn5Zue6YCAJywgJ+aBouW+qScpLFxuXHRyZXZlcnQ6IHdpbmRvdy53Z1VMUygn5Zue6YCAJywgJ+aBouW+qScpLFxuXHRyZXZlcnRIaW50OiB3aW5kb3cud2dVTFMoJ+WbnumAgOWIsCAlcycsICfmgaLlvqnliLAgJXMnKSxcblx0dW5kbzogd2luZG93LndnVUxTKCfmkqTplIAnLCAn5pKk6Yq3JyksXG5cdHVuZG9IaW50OiB3aW5kb3cud2dVTFMoJ+aSpOmUgOi/measoee8lui+kScsICfmkqTpirfpgJnmrKHnt6jovK8nKSxcblx0ZGVmYXVsdHBvcHVwUmVkbGlua1N1bW1hcnk6IHdpbmRvdy53Z1VMUyhcblx0XHQn56e76Zmk5Yiw56m66aG16Z2iW1slc11d55qE6ZO+5o6l77yIUG9wdXBz77yJJyxcblx0XHQn56e76Zmk5Yiw56m66aCB6Z2iW1slc11d55qE6YCj57WQ77yIUG9wdXBz77yJJ1xuXHQpLFxuXHRkZWZhdWx0cG9wdXBGaXhEYWJzU3VtbWFyeTogd2luZG93LndnVUxTKCfmtojmrafkuYlbWyVzXV3liLBbWyVzXV3vvIhQb3B1cHPvvIknLCAn5raI5q2n576pW1slc11d5YiwW1slc11d77yIUG9wdXBz77yJJyksXG5cdGRlZmF1bHRwb3B1cEZpeFJlZGlyc1N1bW1hcnk6IHdpbmRvdy53Z1VMUyhcblx0XHQn5b+955Wl5LuOW1slc11d5YiwW1slc11d55qE6YeN5a6a5ZCR77yIUG9wdXBz77yJJyxcblx0XHQn5b+955Wl5b6eW1slc11d5YiwW1slc11d55qE6YeN5paw5bCO5ZCR77yIUG9wdXBz77yJJ1xuXHQpLFxuXHRkZWZhdWx0cG9wdXBFeHRlbmRlZFJldmVydFN1bW1hcnk6IHdpbmRvdy53Z1VMUyhcblx0XHQn5Zue6YCA5YiwJDLlnKgkMeaXtue8lui+keeahOS/ruiuoueJiOacrCQz77yIUG9wdXBz77yJJyxcblx0XHQn6YKE5Y6f5YiwJDLlnKgkMeaZguijveS9nOeahOS/ruiogueJiOacrCQz77yIUG9wdXBz77yJJ1xuXHQpLFxuXHRkZWZhdWx0cG9wdXBSZXZlcnRUb1ByZXZpb3VzU3VtbWFyeTogd2luZG93LndnVUxTKFxuXHRcdCflm57pgIDliLDkv67orqLniYjmnKwlc+eahOS4iuS4gOS4queJiOacrO+8iFBvcHVwc++8iScsXG5cdFx0J+mChOWOn+WIsOS/ruiogueJiOacrCVz55qE5LiK5LiA5YCL54mI5pys77yIUG9wdXBz77yJJ1xuXHQpLFxuXHRkZWZhdWx0cG9wdXBSZXZlcnRTdW1tYXJ5OiB3aW5kb3cud2dVTFMoJ+WbnumAgOWIsOS/ruiuoueJiOacrCVz77yIUG9wdXBz77yJJywgJ+mChOWOn+WIsOS/ruiogueJiOacrCVz77yIUG9wdXBz77yJJyksXG5cdGRlZmF1bHRwb3B1cFF1ZXJpZWRSZXZlcnRUb1ByZXZpb3VzU3VtbWFyeTogd2luZG93LndnVUxTKFxuXHRcdCflm57pgIDliLDkv67orqLniYjmnKwkMeeahOS4iuS4gOS4queJiOacrO+8jOeUsSQz5ZyoJDLml7bnvJbovpHvvIhQb3B1cHPvvIknLFxuXHRcdCfpgoTljp/liLDkv67oqILniYjmnKwkMeeahOS4iuS4gOWAi+eJiOacrO+8jOeUsSQz5ZyoJDLmmYLoo73kvZzvvIhQb3B1cHPvvIknXG5cdCksXG5cdGRlZmF1bHRwb3B1cFF1ZXJpZWRSZXZlcnRTdW1tYXJ5OiB3aW5kb3cud2dVTFMoXG5cdFx0J+WbnumAgOWIsCQz5ZyoJDLml7bnvJbovpHnmoTkv67orqLniYjmnKwkMe+8iFBvcHVwc++8iScsXG5cdFx0J+mChOWOn+WIsCQz5ZyoJDLmmYLoo73kvZznmoTkv67oqILniYjmnKwkMe+8iFBvcHVwc++8iSdcblx0KSxcblx0ZGVmYXVsdHBvcHVwUm1EYWJMaW5rU3VtbWFyeTogd2luZG93LndnVUxTKFxuXHRcdCfnp7vpmaTliLDmtojmrafkuYnpobVbWyVzXV3nmoTpk77mjqXvvIhQb3B1cHPvvIknLFxuXHRcdCfnp7vpmaTliLDmtojmrafnvqnpoIFbWyVzXV3nmoTpgKPntZDvvIhQb3B1cHPvvIknXG5cdCksXG5cdFJlZGlyZWN0czogd2luZG93LndnVUxTKCfph43lrprlkJEnLCAn6YeN5a6a5ZCRJyksXG5cdC8vIGFzIGluIFJlZGlyZWN0cyB0byAuLi5cblx0Ly8gXCIgdG8gXCI6IHdpbmRvdy53Z1VMUyggXCLliLBcIixcIuWIsFwiICksXG5cdC8vIGFzIGluIFJlZGlyZWN0cyB0byAuLi5cblx0J0J5cGFzcyByZWRpcmVjdCc6IHdpbmRvdy53Z1VMUygn5b+955Wl6YeN5a6a5ZCRJywgJ+W/veeVpemHjeaWsOWwjuWQkScpLFxuXHQnRml4IHRoaXMgcmVkaXJlY3QnOiB3aW5kb3cud2dVTFMoJ+S/ruWkjemHjeWumuWQkScsICfkv67lvqnph43mlrDlsI7lkJEnKSxcblx0ZGlzYW1iaWc6IHdpbmRvdy53Z1VMUygn5raI5q2n5LmJJywgJ+a2iOatp+e+qScpLFxuXHQvLyAvLy8gYWRkIG9yIHJlbW92ZSBkYWIgZXRjLlxuXHRkaXNhbWJpZ0hpbnQ6IHdpbmRvdy53Z1VMUygn5raI5q2n5LmJ6L+Z5Liq6ZO+5o6l5YiwIFtbJXNdXScsICfmtojmrafnvqnpgJnlgIvpgKPntZDliLAgW1slc11dJyksXG5cdCdDbGljayB0byBkaXNhbWJpZ3VhdGUgdGhpcyBsaW5rIHRvOic6IHdpbmRvdy53Z1VMUygn54K55Ye75Lul5raI5q2n5LmJ6L+Z5Liq6ZO+5o6l5Yiw77yaJywgJ+m7nuaTiuS7pea2iOatp+e+qemAmeWAi+mAo+e1kOWIsO+8micpLFxuXHQncmVtb3ZlIHRoaXMgbGluayc6IHdpbmRvdy53Z1VMUygn56e76Zmk6ZO+5o6lJywgJ+enu+mZpOmAo+e1kCcpLFxuXHQncmVtb3ZlIGFsbCBsaW5rcyB0byB0aGlzIHBhZ2UgZnJvbSB0aGlzIGFydGljbGUnOiB3aW5kb3cud2dVTFMoXG5cdFx0J+enu+mZpOatpOadoeebruWIsOi/memhteeahOaJgOaciemTvuaOpScsXG5cdFx0J+enu+mZpOatpOaineebruWIsOmAmemggeeahOaJgOaciemAo+e1kCdcblx0KSxcblx0J3JlbW92ZSBhbGwgbGlua3MgdG8gdGhpcyBkaXNhbWJpZyBwYWdlIGZyb20gdGhpcyBhcnRpY2xlJzogd2luZG93LndnVUxTKFxuXHRcdCfnp7vpmaTmraTmnaHnm67liLDov5nmtojmrafkuYnnmoTmiYDmnInpk77mjqUnLFxuXHRcdCfnp7vpmaTmraTmop3nm67liLDpgJnmtojmrafnvqnnmoTmiYDmnInpgKPntZAnXG5cdCksXG5cdG1haW5saW5rOiB3aW5kb3cud2dVTFMoJ+S4u+mTvuaOpScsICfkuLvpgKPntZAnKSxcblx0Ly8gLy8vIGxpbmtzLCB3YXRjaCwgdW53YXRjaFxuXHR3aWtpTGluazogd2luZG93LndnVUxTKCfkuKrlhoXpg6jpk77mjqUnLCAn5Liq5YWn6YOo6YCj57WQJyksXG5cdHdpa2lMaW5rczogd2luZG93LndnVUxTKCfkuKrlhoXpg6jpk77mjqUnLCAn5Liq5YWn6YOo6YCj57WQJyksXG5cdCdsaW5rcyBoZXJlJzogd2luZG93LndnVUxTKCfpk77lhaUnLCAn6Y+I5YWlJyksXG5cdHdoYXRMaW5rc0hlcmU6IHdpbmRvdy53Z1VMUygn6ZO+5YWl6aG16Z2iJywgJ+mPiOWFpemggemdoicpLFxuXHQnd2hhdCBsaW5rcyBoZXJlJzogd2luZG93LndnVUxTKCfpk77lhaXpobXpnaInLCAn6Y+I5YWl6aCB6Z2iJyksXG5cdFdoYXRsaW5rc2hlcmVIaW50OiB3aW5kb3cud2dVTFMoJ+aYvuekuumTvuaOpeWIsCAlcyDnmoTpobXpnaInLCAn6aGv56S66YCj57WQ5YiwICVzIOeahOmggemdoicpLFxuXHR1bndhdGNoU2hvcnQ6IHdpbmRvdy53Z1VMUygn5Y+W5raIJywgJ+WPlua2iCcpLFxuXHR3YXRjaFRoaW5neTogd2luZG93LndnVUxTKCfnm5Hop4YnLCAn55uj6KaWJyksXG5cdC8vIGNhbGxlZCB3YXRjaFRoaW5neSBiZWNhdXNlIHt9LndhdGNoIGlzIGEgZnVuY3Rpb25cblx0d2F0Y2hIaW50OiB3aW5kb3cud2dVTFMoJ+WKoOWFpSAlcyDliLDmiJHnmoTnm5Hop4bliJfooagnLCAn5Yqg5YWlICVzIOWIsOaIkeeahOebo+imluWIl+ihqCcpLFxuXHR1bndhdGNoSGludDogd2luZG93LndnVUxTKCfku47miJHnmoTnm5Hop4bliJfooajnp7vpmaQgJXMnLCAn5b6e5oiR55qE55uj6KaW5YiX6KGo56e76ZmkICVzJyksXG5cdCdPbmx5IGZvdW5kIG9uZSBlZGl0b3I6ICVzIG1hZGUgJXMgZWRpdHMnOiB3aW5kb3cud2dVTFMoXG5cdFx0J+S7heaJvuWIsOS4gOS9jee8luiAhe+8miVzIOWItumAoOS6hiAlcyDmrKHnvJbovpEnLFxuXHRcdCflg4Xmib7liLDkuIDkvY3nt6jogIXvvJolcyDoo73pgKDkuoYgJXMg5qyh57eo6LyvJ1xuXHQpLFxuXHQnJXMgc2VlbXMgdG8gYmUgdGhlIGxhc3QgZWRpdG9yIHRvIHRoZSBwYWdlICVzJzogd2luZG93LndnVUxTKFxuXHRcdCclcyDnnIvkuIrljrvmmK8gJXMg6L+Z6aG155qE5pyA5ZCO5LiA5L2N57yW6ICFJyxcblx0XHQnJXMg55yL5LiK5Y675pivICVzIOmAmemggeeahOacgOW+jOS4gOS9jee3qOiAhSdcblx0KSxcblx0cnNzOiB3aW5kb3cud2dVTFMoJ1JTUycsICdSU1MnKSxcblx0Ly8gZGlmZiBwcmV2aWV3c1xuXHQnRGlmZiB0cnVuY2F0ZWQgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMnOiB3aW5kb3cud2dVTFMoJ+WHuuS6juaAp+iDveiAg+iZke+8jOW3ruW8guW3suiiq+aIquaWrScsICflh7rmlrzmlYjog73ogIPmha7vvIzlt67nlbDlt7LooqvmiKrmlrcnKSxcblx0J09sZCByZXZpc2lvbic6IHdpbmRvdy53Z1VMUygn5pen54mI5pysJywgJ+iIiueJiOacrCcpLFxuXHQnTmV3IHJldmlzaW9uJzogd2luZG93LndnVUxTKCfmlrDniYjmnKwnLCAn5paw54mI5pysJyksXG5cdCdTb21ldGhpbmcgd2VudCB3cm9uZyA6LSgnOiB3aW5kb3cud2dVTFMoJ+WHuumXrumimOS6hiA6LSgnLCAn5Ye65ZWP6aGM5LqGIDotKCcpLFxuXHQnRW1wdHkgcmV2aXNpb24sIG1heWJlIG5vbi1leGlzdGVudCc6IHdpbmRvdy53Z1VMUygn56m655qE5L+u6K6i77yM5Y+v6IO95bm25LiN5a2Y5ZyoJywgJ+epuueahOS/ruiogu+8jOWPr+iDveS4puS4jeWtmOWcqCcpLFxuXHQnVW5rbm93biBkYXRlJzogd2luZG93LndnVUxTKCfmnKrnn6Xml6XmnJ8nLCAn5pyq55+l5pel5pyfJyksXG5cdC8vIG90aGVyIHNwZWNpYWwgcHJldmlld3Ncblx0J0VtcHR5IGNhdGVnb3J5Jzogd2luZG93LndnVUxTKCfnqbrnmoTliIbnsbsnLCAn56m655qE5YiG6aGeJyksXG5cdCdDYXRlZ29yeSBtZW1iZXJzICglcyBzaG93biknOiB3aW5kb3cud2dVTFMoJ+WIhuexu+aIkOWRmO+8iCVzIOaYvuekuu+8iScsICfliIbpoZ7miJDlk6HvvIglcyDpoa/npLrvvIknKSxcblx0J05vIGltYWdlIGxpbmtzIGZvdW5kJzogd2luZG93LndnVUxTKCfmnKrmib7liLDmlofku7bpk77mjqUnLCAn5pyq5om+5Yiw5qqU5qGI6YCj57WQJyksXG5cdCdGaWxlIGxpbmtzJzogd2luZG93LndnVUxTKCfmlofku7bpk77mjqUnLCAn5qqU5qGI6YCj57WQJyksXG5cdCdub3QgY29tbW9ucyc6IHdpbmRvdy53Z1VMUygn57u05Z+65YWx5Lqr5Lit5peg5q2k5ZCN56ew55qE5paH5Lu244CCJywgJ+e2reWfuuWFseS6q+S4reeEoeatpOWQjeeoseeahOaqlOahiOOAgicpLFxuXHQnY29tbW9ucyBvbmx5Jzogd2luZG93LndnVUxTKCfmraTmlofku7bmnaXoh6rnu7Tln7rlhbHkuqvjgIInLCAn5q2k5qqU5qGI5L6G6Ieq57at5Z+65YWx5Lqr44CCJyksXG5cdCdObyBpbWFnZSBmb3VuZCc6IHdpbmRvdy53Z1VMUygn5om+5LiN5Yiw5paH5Lu2JywgJ+aJvuS4jeWIsOaqlOahiCcpLFxuXHQnY29tbW9ucyBkdXBlJzogd2luZG93LndnVUxTKCfnu7Tln7rlhbHkuqvkuK3lrZjlnKjmraTmlofku7bnmoTlia/mnKzjgIInLCAn57at5Z+65YWx5Lqr5Lit5a2Y5Zyo5q2k5qqU5qGI55qE5Ymv5pys44CCJyksXG5cdCdjb21tb25zIGNvbmZsaWN0Jzogd2luZG93LndnVUxTKCfnu7Tln7rlhbHkuqvkuK3lrZjlnKjmraTmlofku7blkI3np7DkuI3lkIznmoTlia/mnKzjgIInLCAn57at5Z+65YWx5Lqr5Lit5a2Y5Zyo5q2k5qqU5ZCN56ix5LiN5ZCM55qE5Ymv5pys44CCJyksXG5cdC8vIHVzZXItcmVsYXRlZCBhY3Rpb25zIGFuZCBpbmZvXG5cdHVzZXI6IHdpbmRvdy53Z1VMUygn55So5oi3JywgJ+S9v+eUqOiAhScpLFxuXHQvLyAvLy8gdXNlciBwYWdlLCB0YWxrLCBlbWFpbCwgc3BhY2Vcblx0J3VzZXImbmJzcDtwYWdlJzogd2luZG93LndnVUxTKCfnlKjmiLfpobUnLCAn5L2/55So6ICF6aCBJyksXG5cdCd1c2VyIHRhbGsnOiB3aW5kb3cud2dVTFMoJ+eUqOaIt+iuqOiuuicsICfkvb/nlKjogIXlsI3oqbEnKSxcblx0J2VkaXQgdXNlciB0YWxrJzogd2luZG93LndnVUxTKCfnvJbovpHnlKjmiLforqjorronLCAn57eo6Lyv5L2/55So6ICF5bCN6KmxJyksXG5cdCdsZWF2ZSBjb21tZW50Jzogd2luZG93LndnVUxTKCfnlZnoqIAnLCAn55WZ6KiAJyksXG5cdGVtYWlsOiB3aW5kb3cud2dVTFMoJ+eUtemCricsICfpm7vpg7UnKSxcblx0J2VtYWlsIHVzZXInOiB3aW5kb3cud2dVTFMoJ+eUtemCrueUqOaItycsICfpm7vpg7Xkvb/nlKjogIUnKSxcblx0RW1haWx1c2VySGludDogd2luZG93LndnVUxTKCfnu5kgJXMg5Y+R6YCB55S15a2Q6YKu5Lu2JywgJ+e1piAlcyDnmbzpgIHpm7vlrZDpg7Xku7YnKSxcblx0c3BhY2U6IHdpbmRvdy53Z1VMUygn5a2Q6aG16Z2iJywgJ+WtkOmggemdoicpLFxuXHQvLyBzaG9ydCBmb3JtIGZvciB1c2VyU3BhY2UgbGlua1xuXHRQcmVmaXhpbmRleEhpbnQ6IHdpbmRvdy53Z1VMUygn5pi+56S6ICVzIOeahOeUqOaIt+mhteWtkOmhtemdoicsICfpoa/npLogJXMg55qE5L2/55So6ICF6aCB5a2Q6aCB6Z2iJyksXG5cdGNvdW50OiB3aW5kb3cud2dVTFMoJ+e7n+iuoScsICfntbHoqIgnKSxcblx0Ly8gLy8vIGNvbnRyaWJ1dGlvbnMsIHRyZWUsIGxvZ1xuXHQnZWRpdCBjb3VudGVyJzogd2luZG93LndnVUxTKCfnvJbovpHmrKHmlbAnLCAn57eo6Lyv5qyh5pW4JyksXG5cdGthdGVsaW5rSGludDogd2luZG93LndnVUxTKCclcyDnmoTnvJbovpHmrKHmlbAnLCAnJXMg55qE57eo6Lyv5qyh5pW4JyksXG5cdGNvbnRyaWJzOiB3aW5kb3cud2dVTFMoJ+i0oeeMricsICfosqLnjbsnKSxcblx0Y29udHJpYnV0aW9uczogd2luZG93LndnVUxTKCfotKHnjK4nLCAn6LKi5427JyksXG5cdGRlbGV0ZWRDb250cmliczogd2luZG93LndnVUxTKCflt7LliKDpmaTnmoTotKHnjK4nLCAn5bey5Yiq6Zmk55qE6LKi5427JyksXG5cdENvbnRyaWJ1dGlvbnNIaW50OiB3aW5kb3cud2dVTFMoJyVzIOeahOeUqOaIt+i0oeeMricsICclcyDnmoTkvb/nlKjogIXosqLnjbsnKSxcblx0dHJlZTogd2luZG93LndnVUxTKCfmoJEnLCAn5qi5JyksXG5cdGNvbnRyaWJzVHJlZUhpbnQ6IHdpbmRvdy53Z1VMUygn5qC55o2u5ZCN5a2X56m66Ze05p+l55yLICVzIOeahOi0oeeMricsICfmoLnmk5rlkb3lkI3nqbrplpPmqqLoppYgJXMg55qE6LKi5427JyksXG5cdGxvZzogd2luZG93LndnVUxTKCfml6Xlv5cnLCAn5pel6KqMJyksXG5cdCd1c2VyIGxvZyc6IHdpbmRvdy53Z1VMUygn55So5oi35pel5b+XJywgJ+S9v+eUqOiAheaXpeiqjCcpLFxuXHR1c2VyTG9nSGludDogd2luZG93LndnVUxTKCfmmL7npLogJXMg55qE55So5oi35pel5b+XJywgJ+mhr+ekuiAlcyDnmoTkvb/nlKjogIXml6XoqownKSxcblx0dW5ibG9ja1Nob3J0OiB3aW5kb3cud2dVTFMoJ+ino+mZpCcsICfop6PpmaQnKSxcblx0YmxvY2s6IHdpbmRvdy53Z1VMUygn5bCB56aBJywgJ+WwgemOlicpLFxuXHQnYmxvY2sgdXNlcic6IHdpbmRvdy53Z1VMUygn5bCB56aB55So5oi3JywgJ+WwgemOluS9v+eUqOiAhScpLFxuXHRJcGJsb2NrbGlzdEhpbnQ6IHdpbmRvdy53Z1VMUygn6Kej5bCBICVzJywgJ+ino+WwgSAlcycpLFxuXHRCbG9ja2lwSGludDogd2luZG93LndnVUxTKCflsIHnpoEgJXMnLCAn5bCB6Y6WICVzJyksXG5cdCdibG9jayBsb2cnOiB3aW5kb3cud2dVTFMoJ+WwgeemgeaXpeW/lycsICflsIHpjpbml6XoqownKSxcblx0YmxvY2tMb2dIaW50OiB3aW5kb3cud2dVTFMoJ+aYvuekuiAlcyDnmoTlsIHnpoHml6Xlv5cnLCAn6aGv56S6ICVzIOeahOWwgemOluaXpeiqjCcpLFxuXHRwcm90ZWN0TG9nSGludDogd2luZG93LndnVUxTKCfmmL7npLogJXMg55qE5L+d5oqk5pel5b+XJywgJ+mhr+ekuiAlcyDnmoTkv53orbfml6XoqownKSxcblx0cGFnZUxvZ0hpbnQ6IHdpbmRvdy53Z1VMUygn5pi+56S6ICVzIOeahOaXpeW/lycsICfpoa/npLogJXMg55qE5pel6KqMJyksXG5cdGRlbGV0ZUxvZ0hpbnQ6IHdpbmRvdy53Z1VMUygn5pi+56S6ICVzIOeahOWIoOmZpOaXpeW/lycsICfpoa/npLogJXMg55qE5Yiq6Zmk5pel6KqMJyksXG5cdCdJbnZhbGlkICVzICVzJzogd2luZG93LndnVUxTKCfpgInpobkgJXMg5LiN5Y+v55So77yaJXMnLCAn6YG46aCFICVzIOS4jeWPr+eUqO+8miVzJyksXG5cdG06ICflsI8nLFxuXHQvLyBBdXRvZWRpdGluZ1xuXHQnRW50ZXIgYSBub24tZW1wdHkgZWRpdCBzdW1tYXJ5IG9yIHByZXNzIGNhbmNlbCB0byBhYm9ydCc6IHdpbmRvdy53Z1VMUyhcblx0XHQn6L6T5YWl57yW6L6R5pGY6KaB77yM5oiW5oyJ5Y+W5raI5Lit5q2i5pON5L2cJyxcblx0XHQn6Ly45YWl57eo6Lyv5pGY6KaB77yM5oiW5oyJ5Y+W5raI5Lit5q2i5pON5L2cJ1xuXHQpLFxuXHQnRmFpbGVkIHRvIGdldCByZXZpc2lvbiBpbmZvcm1hdGlvbiwgcGxlYXNlIGVkaXQgbWFudWFsbHkuXFxuXFxuJzogd2luZG93LndnVUxTKFxuXHRcdCfojrflj5bkv67orqLniYjmnKzkv6Hmga/lpLHotKXvvIzor7fmiYvliqjkv67mlLnjgIJcXG5cXG4nLFxuXHRcdCfnjbLlj5bkv67oqILniYjmnKzos4foqIrlpLHmlZfvvIzoq4vmiYvli5Xkv67mlLnjgIJcXG5cXG4nXG5cdCksXG5cdCdUaGUgJXMgYnV0dG9uIGhhcyBiZWVuIGF1dG9tYXRpY2FsbHkgY2xpY2tlZC4gUGxlYXNlIHdhaXQgZm9yIHRoZSBuZXh0IHBhZ2UgdG8gbG9hZC4nOiB3aW5kb3cud2dVTFMoXG5cdFx0J+aMiemSriAlcyDlt7Looqvoh6rliqjngrnlh7vvvIzor7fnrYnlvoXkuIvkuIDkuKrpobXpnaLliqDovb3jgIInLFxuXHRcdCfmjInpiJUgJXMg5bey6KKr6Ieq5YuV6bue5pOK77yM6KuL562J5b6F5LiL5LiA5YCL6aCB6Z2i6LyJ5YWl44CCJ1xuXHQpLFxuXHQnQ291bGQgbm90IGZpbmQgYnV0dG9uICVzLiBQbGVhc2UgY2hlY2sgdGhlIHNldHRpbmdzIGluIHlvdXIgamF2YXNjcmlwdCBmaWxlLic6IHdpbmRvdy53Z1VMUyhcblx0XHQn5om+5LiN5Yiw5oyJ6ZKuICVz77yM6K+35qOA5p+l5oKoIEphdmFTY3JpcHQg5paH5Lu25Lit55qE6K6+572u44CCJyxcblx0XHQn5om+5LiN5Yiw5oyJ6YiVICVz77yM6KuL5qqi5p+l5oKoIEphdmFTY3JpcHQg5qqU5qGI5Lit55qE6Kit5a6a44CCJ1xuXHQpLFxuXHQvLyBQb3B1cHMgc2V0dXBcblx0J09wZW4gZnVsbC1zaXplIGltYWdlJzogd2luZG93LndnVUxTKCfmn6XnnIvlhajlsLrlr7jlm77lg48nLCAn5qqi6KaW5YWo5bC65a+45b2x5YOPJyksXG5cdC8vIOS7peS4i+WGheWuueeUsSBBbm5BbmdlbGEg6KGl5q2jXG5cdGJpbmdTZWFyY2hIaW50OiB3aW5kb3cud2dVTFMoJ+WcqCBCaW5nIOS4iuaQnOe0ouKAnCVz4oCdJywgJ+WcqCBiaW5nIOS4iuaQnOWwi+OAjCVz44CNJyksXG5cdCdlbmFibGUgcHJldmlld3MnOiB3aW5kb3cud2dVTFMoJ+WQr+eUqOmihOiniCcsICfllZ/nlKjpoJDopr0nKSxcblx0J3Nob3cgcHJldmlldyc6IHdpbmRvdy53Z1VMUygn56aB55So6aKE6KeIJywgJ+emgeeUqOmgkOimvScpLFxuXHRoaXN0b3J5ZmVlZEhpbnQ6IHdpbmRvdy53Z1VMUygn6K+l6aG16Z2i55qE6L+R5pyf5pu05pS5IFJTUyBmZWVkJywgJ+ipsumggemdoueahOi/keacn+abtOaUuSBSU1MgZmVlZCcpLFxuXHQnc2VuZCB0aGFua3MnOiB3aW5kb3cud2dVTFMoJ+WPkemAgeaEn+iwoicsICflgrPpgIHmhJ/orJ0nKSxcblx0VGhhbmtzSGludDogd2luZG93LndnVUxTKCflkJHor6XnlKjmiLflj5HpgIHkuIDlsIHmhJ/osKLmtojmga8nLCAn5ZCR6Kmy5L2/55So6ICF5YKz6YCB5LiA5bCB5oSf6Kyd6KiK5oGvJyksXG5cdCdtYXJrIHBhdHJvbGxlZCc6IHdpbmRvdy53Z1VMUygn5qCH6K6w5Li65bey5beh5p+lJywgJ+aomeiomOeCuuW3suW3oeafpScpLFxuXHRtYXJrcGF0cm9sbGVkSGludDogd2luZG93LndnVUxTKCfmoIforrDor6XnvJbovpHkuLrlt7Llt6Hmn6UnLCAn5qiZ6KiY6Kmy57eo6Lyv54K65bey5beh5p+lJyksXG5cdCdDb3VsZCBub3QgbWFya2VkIHRoaXMgZWRpdCBhcyBwYXRyb2xsZWQnOiB3aW5kb3cud2dVTFMoJ+aXoOazleagh+iusOivpee8lui+keS4uuW3suW3oeafpScsICfnhKHms5XmqJnoqJjoqbLnt6jovK/ngrrlt7Llt6Hmn6UnKSxcblx0ZGVmYXVsdHBvcHVwUmV2aWV3ZWRTdW1tYXJ5OiB3aW5kb3cud2dVTFMoJ+agh+iusOS7jueJiOacrCVz5YiwJXPpl7TnmoTnvJbovpHkuLrlt7Llt6Hmn6UnLCAn5qiZ6KiY5b6e54mI5pysJXPliLAlc+mWk+eahOe3qOi8r+eCuuW3suW3oeafpScpLFxuXHQnSW1hZ2UgZnJvbSBDb21tb25zJzogd2luZG93LndnVUxTKCfmnaXoh6rnu7Tln7rlhbHkuqvnmoTlm77niYcnLCAn5L6G6Ieq57at5Z+65YWx55So55qE5ZyW54mHJyksXG5cdCdEZXNjcmlwdGlvbiBwYWdlJzogd2luZG93LndnVUxTKCflm77niYfmj4/ov7DpobUnLCAn5ZyW54mH5o+P6L+w6aCBJyksXG5cdCdBbHQgdGV4dDonOiB3aW5kb3cud2dVTFMoJ+abv+aNouaWh+acrO+8iEFsdO+8ie+8micsICfmm7/mj5vmloflrZfvvIhBbHTvvInvvJonKSxcblx0cmV2ZGVsOiB3aW5kb3cud2dVTFMoJ+WOhuWPsueJiOacrOiiq+makOiXjycsICfmrbflj7LniYjmnKzooqvpmrHol48nKSxcblx0RGVsZXRlZGNvbnRyaWJ1dGlvbnNIaW50OiB3aW5kb3cud2dVTFMoJ+eUqOaItyVz55qE6KKr5Yig6Zmk57yW6L6R5qyh5pWwJywgJ+S9v+eUqOiAhSVz55qE6KKr5Yiq6Zmk57eo6Lyv5qyh5pW4JyksXG5cdCdObyBiYWNrbGlua3MgZm91bmQnOiB3aW5kb3cud2dVTFMoJ+aJvuS4jeWIsOmTvuWFpemhtemdoicsICfmib7kuI3liLDpj4jlhaXpoIHpnaInKSxcblx0JyBhbmQgbW9yZSc6IHdpbmRvdy53Z1VMUygn5Lul5Y+K5YW25LuW6aG16Z2iJywgJ+S7peWPiuWFtuS7lumggemdoicpLFxuXHQnRG93bmxvYWQgcHJldmlldyBkYXRhJzogd2luZG93LndnVUxTKCfkuIvovb3pooTop4jmlbDmja4nLCAn5LiL6LyJ6aCQ6Ka96LOH5paZJyksXG5cdCdOb3QgYSByZWdpc3RlcmVkIHVzZXJuYW1lJzogd2luZG93LndnVUxTKCfpnZ7lt7Lms6jlhoznmoTnlKjmiLcnLCAn6Z2e5bey6Ki75YaK55qE5L2/55So6ICFJyksXG5cdEJMT0NLRUQ6IHdpbmRvdy53Z1VMUygn6KKr5bCB56aBJywgJ+iiq+WwgemOlicpLFxuXHQnSGFzIGJsb2Nrcyc6IHdpbmRvdy53Z1VMUygn6KKr6YOo5YiG5bCB56aBJywgJ+iiq+mDqOWIhuWwgemOlicpLFxuXHQnIGVkaXRzIHNpbmNlOiAnOiB3aW5kb3cud2dVTFMoJ+asoee8lui+ke+8jOazqOWGjOaXpeacn+S4uicsICfmrKHnt6jovK/vvIzoqLvlhorml6XmnJ/ngronKSxcblx0J2xhc3QgZWRpdCBvbiAnOiB3aW5kb3cud2dVTFMoJ+acgOWQjuS4gOasoee8lui+keS6jicsICfmnIDlvozkuIDmrKHnt6jovK/mlrwnKSxcblx0RW1haWxVc2VySGludDogd2luZG93LndnVUxTKCfnu5kgJXMg5Y+R6YCB55S15a2Q6YKu5Lu2JywgJ+e1piAlcyDnmbzpgIHpm7vlrZDpg7Xku7YnKSxcblx0UkFOR0VCTE9DS0VEOiB3aW5kb3cud2dVTFMoJ0lQ5q616KKr5bCB56aBJywgJ0lQ5q616KKr5bCB6Y6WJyksXG5cdCdJUCB1c2VyJzogd2luZG93LndnVUxTKCdJUOeUqOaItycsICdJUOS9v+eUqOiAhScpLFxuXHQn4pmAJzogJ+KZgCcsXG5cdCfimYInOiAn4pmCJyxcblx0SElEREVOOiB3aW5kb3cud2dVTFMoJ+WFqOWfn+makOiXjycsICflhajln5/pmrHol48nKSxcblx0TE9DS0VEOiB3aW5kb3cud2dVTFMoJ+WFqOWfn+mUgeWumicsICflhajln5/pjpblrponKSxcblx0J0ludmFsaWQgdXNlcic6IHdpbmRvdy53Z1VMUygn6Z2e5rOV55So5oi35ZCNJywgJ+mdnuazleS9v+eUqOiAheWQjeeosScpLFxuXHRkaWZmOiB3aW5kb3cud2dVTFMoJ+W3ruW8gicsICflt67nlbAnKSxcblx0JyB0byAnOiAn6IezJyxcblxuXHRhdXRvZWRpdF92ZXJzaW9uOiAnbnAyMDE0MDQxNicsXG5cdFByZWZpeEluZGV4SGludDogd2luZG93LndnVUxTKCfmmL7npLrnlKjmiLclc+eahOWtkOmhtemdoicsICfpoa/npLrkvb/nlKjogIUlc+eahOWtkOmggemdoicpLFxuXHRudWxsRWRpdFN1bW1hcnk6IHdpbmRvdy53Z1VMUygn6L+b6KGM5LiA5qyh6Zu257yW6L6RJywgJ+mAsuihjOS4gOasoembtue3qOi8rycpLFxuXHQvLyDnlKjmiLfnu4TlkI3np7Dku47ns7vnu5/mtojmga/ojrflj5Zcblx0J2dyb3VwLW5vLWF1dG9jb25maXJtZWQnOiB3aW5kb3cud2dVTFMoJ+mdnuiHquWKqOehruiupOeUqOaItycsICfpnZ7oh6rli5Xnorroqo3kvb/nlKjogIUnKSxcblx0c2VwYXJhdG9yOiAn44CBJyxcblx0Y29tbWE6ICfvvIwnLFxufTtcblxuZXhwb3J0IHttZXNzYWdlfTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7bWVzc2FnZX0gZnJvbSAnLi9zdHJpbmcnO1xuXG5jb25zdCBwb3B1cHMgPSAoKSA9PiB7XG5cdC8vIFNUQVJURklMRTogbWFpbi5qc1xuXHQvLyBGaXggbGF0ZXJcblx0Ly8gR2xvYmFsc1xuXHQvL1xuXHQvLyBUcnlpbmcgdG8gc2hvdmUgYXMgbWFueSBvZiB0aGVzZSBhcyBwb3NzaWJsZSBpbnRvIHRoZSBwZyAocG9wdXAgZ2xvYmFscykgb2JqZWN0XG5cdGNvbnN0IHBnID0ge1xuXHRcdGFwaToge30sXG5cdFx0cmU6IHt9LFxuXHRcdG5zOiB7fSxcblx0XHRzdHJpbmc6IHt9LFxuXHRcdHdpa2k6IHt9LFxuXHRcdHVzZXI6IHt9LFxuXHRcdG1pc2M6IHt9LFxuXHRcdG9wdGlvbjoge30sXG5cdFx0b3B0aW9uRGVmYXVsdDoge30sXG5cdFx0ZmxhZzoge30sXG5cdFx0Y2FjaGU6IHt9LFxuXHRcdHN0cnVjdHVyZXM6IHt9LFxuXHRcdHRpbWVyOiB7fSxcblx0XHRjb3VudGVyOiB7fSxcblx0XHRjdXJyZW50OiB7fSxcblx0XHRmbjoge30sXG5cdFx0ZW5kb2ZsaXN0OiBudWxsLFxuXHR9O1xuXHQvKiBCYWlsIGlmIHRoZSBnYWRnZXQvc2NyaXB0IGlzIGJlaW5nIGxvYWRlZCB0d2ljZSAqL1xuXHQvKiBBbiBlbGVtZW50IHdpdGggaWQgXCJwZ1wiIHdvdWxkIGFkZCBhIHdpbmRvdy5wZyBwcm9wZXJ0eSwgaWdub3JlIHN1Y2ggcHJvcGVydHkgKi9cblx0aWYgKHdpbmRvdy5wZyAmJiAhKHdpbmRvdy5wZyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuXHRcdHJldHVybjtcblx0fVxuXHQvKiBFeHBvcnQgdG8gZ2xvYmFsIGNvbnRleHQgKi9cblx0d2luZG93LnBnID0gcGc7XG5cdC8vIEVOREZJTEU6IG1haW4uanNcblx0Ly8gU1RBUlRGSUxFOiBhY3Rpb25zLmpzXG5cdGNvbnN0IHNldHVwVG9vbHRpcHMgPSAoY29udGFpbmVyLCByZW1vdmUsIGZvcmNlLCBwb3BEYXRhKSA9PiB7XG5cdFx0bG9nKGBzZXR1cFRvb2x0aXBzLCBjb250YWluZXI9JHtjb250YWluZXJ9LCByZW1vdmU9JHtyZW1vdmV9YCk7XG5cdFx0aWYgKCFjb250YWluZXIpIHtcblx0XHRcdC8vIHRoZSBtYWluIGluaXRpYWwgY2FsbFxuXHRcdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwT25FZGl0U2VsZWN0aW9uJykgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuZWRpdGZvcm0gJiYgZG9jdW1lbnQuZWRpdGZvcm0ud3BUZXh0Ym94MSkge1xuXHRcdFx0XHRkb2N1bWVudC5lZGl0Zm9ybS53cFRleHRib3gxLm9ubW91c2V1cCA9IGRvU2VsZWN0aW9uUG9wdXA7XG5cdFx0XHR9XG5cdFx0XHQvLyBhcnRpY2xlL2NvbnRlbnQgaXMgYSBzdHJ1Y3R1cmUtZGVwZW5kZW50IHRoaW5nXG5cdFx0XHRjb250YWluZXIgPSBkZWZhdWx0UG9wdXBzQ29udGFpbmVyKCk7XG5cdFx0fVxuXHRcdGlmICghcmVtb3ZlICYmICFmb3JjZSAmJiBjb250YWluZXIucmFuU2V0dXBUb29sdGlwc0FscmVhZHkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29udGFpbmVyLnJhblNldHVwVG9vbHRpcHNBbHJlYWR5ID0gIXJlbW92ZTtcblx0XHRjb25zdCBhbmNob3JzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKTtcblx0XHRzZXR1cFRvb2x0aXBzTG9vcChhbmNob3JzLCAwLCAyNTAsIDEwMCwgcmVtb3ZlLCBwb3BEYXRhKTtcblx0fTtcblx0Y29uc3QgZGVmYXVsdFBvcHVwc0NvbnRhaW5lciA9ICgpID0+IHtcblx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBPbmx5QXJ0aWNsZUxpbmtzJykpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5za2luLXZlY3Rvci0yMDIyIC52ZWN0b3ItYm9keScpIHx8XG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtd19jb250ZW50JykgfHxcblx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKSB8fFxuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXJ0aWNsZScpIHx8XG5cdFx0XHRcdGRvY3VtZW50XG5cdFx0XHQpO1xuXHRcdH1cblx0XHRyZXR1cm4gZG9jdW1lbnQ7XG5cdH07XG5cdGNvbnN0IHNldHVwVG9vbHRpcHNMb29wID0gZnVuY3Rpb24gc2V0dXBUb29sdGlwc0xvb3AoYW5jaG9ycywgYmVnaW4sIGhvd21hbnksIHNsZWVwLCByZW1vdmUsIHBvcERhdGEsIC4uLmFyZ3MpIHtcblx0XHRsb2coXG5cdFx0XHRzaW1wbGVQcmludGYoJ3NldHVwVG9vbHRpcHNMb29wKCVzLCVzLCVzLCVzLCVzKScsIFtcblx0XHRcdFx0YW5jaG9ycyxcblx0XHRcdFx0YmVnaW4sXG5cdFx0XHRcdGhvd21hbnksXG5cdFx0XHRcdHNsZWVwLFxuXHRcdFx0XHRyZW1vdmUsXG5cdFx0XHRcdHBvcERhdGEsXG5cdFx0XHRcdC4uLmFyZ3MsXG5cdFx0XHRdKVxuXHRcdCk7XG5cdFx0Y29uc3QgZmluaXNoID0gYmVnaW4gKyBob3dtYW55O1xuXHRcdGNvbnN0IGxvb3BlbmQgPSBNYXRoLm1pbihmaW5pc2gsIGFuY2hvcnMubGVuZ3RoKTtcblx0XHRsZXQgaiA9IGxvb3BlbmQgLSBiZWdpbjtcblx0XHRsb2coXG5cdFx0XHRgc2V0dXBUb29sdGlwczogYW5jaG9ycy5sZW5ndGg9JHthbmNob3JzLmxlbmd0aH0sIGJlZ2luPSR7YmVnaW59LCBob3dtYW55PSR7aG93bWFueX0sIGxvb3BlbmQ9JHtsb29wZW5kfSwgcmVtb3ZlPSR7cmVtb3ZlfWBcblx0XHQpO1xuXHRcdGNvbnN0IGRvVG9vbHRpcCA9IHJlbW92ZSA/IHJlbW92ZVRvb2x0aXAgOiBhZGRUb29sdGlwO1xuXHRcdC8vIHRyeSBhIGZhc3RlciAoPykgbG9vcCBjb25zdHJ1Y3Rcblx0XHRpZiAoaiA+IDApIHtcblx0XHRcdGRvIHtcblx0XHRcdFx0Y29uc3QgYSA9IGFuY2hvcnNbbG9vcGVuZCAtIGpdO1xuXHRcdFx0XHRpZiAoYSA9PT0gdW5kZWZpbmVkIHx8ICFhIHx8ICFhLmhyZWYpIHtcblx0XHRcdFx0XHRsb2coYGdvdCBudWxsIGFuY2hvciBhdCBpbmRleCAke2xvb3BlbmR9YCAtIGopO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRvVG9vbHRpcChhLCBwb3BEYXRhKTtcblx0XHRcdH0gd2hpbGUgKC0taik7XG5cdFx0fVxuXHRcdGlmIChmaW5pc2ggPCBhbmNob3JzLmxlbmd0aCkge1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHNldHVwVG9vbHRpcHNMb29wKGFuY2hvcnMsIGZpbmlzaCwgaG93bWFueSwgc2xlZXAsIHJlbW92ZSwgcG9wRGF0YSk7XG5cdFx0XHR9LCBzbGVlcCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICghcmVtb3ZlICYmICFnZXRWYWx1ZU9mKCdwb3B1cFRvY0xpbmtzJykpIHtcblx0XHRcdFx0cm1Ub2NUb29sdGlwcygpO1xuXHRcdFx0fVxuXHRcdFx0cGcuZmxhZy5maW5pc2hlZExvYWRpbmcgPSB0cnVlO1xuXHRcdH1cblx0fTtcblx0Ly8gZWxpbWluYXRlIHBvcHVwcyBmcm9tIHRoZSBUT0Ncblx0Ly8gVGhpcyBhbHNvIGtpbGxzIGFueSBvbmNsaWNrIHN0dWZmIHRoYXQgdXNlZCB0byBiZSBnb2luZyBvbiBpbiB0aGUgdG9jXG5cdGNvbnN0IHJtVG9jVG9vbHRpcHMgPSAoKSA9PiB7XG5cdFx0Y29uc3QgdG9jID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvYycpO1xuXHRcdGlmICh0b2MpIHtcblx0XHRcdGNvbnN0IHRvY0xpbmtzID0gdG9jLnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKTtcblx0XHRcdGNvbnN0IHRvY0xlbiA9IHRvY0xpbmtzLmxlbmd0aDtcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgdG9jTGVuOyArK2opIHtcblx0XHRcdFx0cmVtb3ZlVG9vbHRpcCh0b2NMaW5rc1tqXSwgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBhZGRUb29sdGlwID0gKGEsIHBvcERhdGEpID0+IHtcblx0XHRpZiAoIWlzUG9wdXBMaW5rKGEpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGEub25tb3VzZW92ZXIgPSBtb3VzZU92ZXJXaWtpTGluaztcblx0XHRhLm9ubW91c2VvdXQgPSBtb3VzZU91dFdpa2lMaW5rO1xuXHRcdGEub25tb3VzZWRvd24gPSBraWxsUG9wdXA7XG5cdFx0YS5oYXNQb3B1cCA9IHRydWU7XG5cdFx0YS5wb3BEYXRhID0gcG9wRGF0YTtcblx0fTtcblx0Y29uc3QgcmVtb3ZlVG9vbHRpcCA9IChhKSA9PiB7XG5cdFx0aWYgKCFhLmhhc1BvcHVwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGEub25tb3VzZW92ZXIgPSBudWxsO1xuXHRcdGEub25tb3VzZW91dCA9IG51bGw7XG5cdFx0aWYgKGEub3JpZ2luYWxUaXRsZSkge1xuXHRcdFx0YS50aXRsZSA9IGEub3JpZ2luYWxUaXRsZTtcblx0XHR9XG5cdFx0YS5oYXNQb3B1cCA9IGZhbHNlO1xuXHR9O1xuXHRjb25zdCByZW1vdmVUaXRsZSA9IChhKSA9PiB7XG5cdFx0YS5vcmlnaW5hbFRpdGxlIHx8PSBhLnRpdGxlO1xuXHRcdGEudGl0bGUgPSAnJztcblx0fTtcblx0Y29uc3QgcmVzdG9yZVRpdGxlID0gKGEpID0+IHtcblx0XHRpZiAoYS50aXRsZSB8fCAhYS5vcmlnaW5hbFRpdGxlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGEudGl0bGUgPSBhLm9yaWdpbmFsVGl0bGU7XG5cdH07XG5cdGNvbnN0IHJlZ2lzdGVySG9va3MgPSAobnApID0+IHtcblx0XHRjb25zdCBwb3B1cE1heFdpZHRoID0gZ2V0VmFsdWVPZigncG9wdXBNYXhXaWR0aCcpO1xuXHRcdGlmICh0eXBlb2YgcG9wdXBNYXhXaWR0aCA9PT0gJ251bWJlcicpIHtcblx0XHRcdGNvbnN0IHNldE1heFdpZHRoID0gKCkgPT4ge1xuXHRcdFx0XHRucC5tYWluRGl2LnN0eWxlLm1heFdpZHRoID0gYCR7cG9wdXBNYXhXaWR0aH1weGA7XG5cdFx0XHRcdG5wLm1heFdpZHRoID0gcG9wdXBNYXhXaWR0aDtcblx0XHRcdH07XG5cdFx0XHRucC5hZGRIb29rKHNldE1heFdpZHRoLCAndW5oaWRlJywgJ2JlZm9yZScpO1xuXHRcdH1cblx0XHRucC5hZGRIb29rKGFkZFBvcHVwU2hvcnRjdXRzLCAndW5oaWRlJywgJ2FmdGVyJyk7XG5cdFx0bnAuYWRkSG9vayhybVBvcHVwU2hvcnRjdXRzLCAnaGlkZScsICdiZWZvcmUnKTtcblx0fTtcblx0Y29uc3QgcmVtb3ZlTW9kaWZpZXJLZXlMaXN0ZW5lciA9IChhKSA9PiB7XG5cdFx0Ly8gcmVtb3ZlIGxpc3RlbmVycyBmb3IgbW9kaWZpZXIga2V5IGlmIGFueSB0aGF0IHdlcmUgYWRkZWQgaW4gbW91c2VPdmVyV2lraUxpbmtcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgYS5tb2RpZmllcktleUxpc3RlbmVyLCBmYWxzZSk7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBhLm1vZGlmaWVyS2V5TGlzdGVuZXIsIGZhbHNlKTtcblx0fTtcblx0Y29uc3QgbW91c2VPdmVyV2lraUxpbmsgPSBmdW5jdGlvbiBtb3VzZU92ZXJXaWtpTGluayhldnQpIHtcblx0XHRpZiAoIWV2dCAmJiB3aW5kb3cuZXZlbnQpIHtcblx0XHRcdGV2dCA9IHdpbmRvdy5ldmVudDtcblx0XHR9XG5cdFx0Ly8gaWYgdGhlIG1vZGlmaWVyIGlzIG5lZWRlZCwgbGlzdGVuIGZvciBpdCxcblx0XHQvLyB3ZSB3aWxsIHJlbW92ZSB0aGUgbGlzdGVuZXIgd2hlbiB3ZSBtb3VzZW91dCBvZiB0aGlzIGxpbmsgb3Iga2lsbCBwb3B1cC5cblx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBNb2RpZmllcicpKSB7XG5cdFx0XHQvLyBpZiBwb3B1cE1vZGlmaWVyQWN0aW9uID0gZW5hYmxlLCB3ZSBzaG91bGQgcG9wdXAgd2hlbiB0aGUgbW9kaWZpZXIgaXMgcHJlc3NlZFxuXHRcdFx0Ly8gaWYgcG9wdXBNb2RpZmllckFjdGlvbiA9IGRpc2FibGUsIHdlIHNob3VsZCBwb3B1cCB1bmxlc3MgdGhlIG1vZGlmaWVyIGlzIHByZXNzZWRcblx0XHRcdGNvbnN0IGFjdGlvbiA9IGdldFZhbHVlT2YoJ3BvcHVwTW9kaWZpZXJBY3Rpb24nKTtcblx0XHRcdGNvbnN0IGtleSA9IGFjdGlvbiA9PT0gJ2Rpc2FibGUnID8gJ2tleXVwJyA6ICdrZXlkb3duJztcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0c2VsZi5tb2RpZmllcktleUxpc3RlbmVyID0gKGV2dCkgPT4ge1xuXHRcdFx0XHRtb3VzZU92ZXJXaWtpTGluazIoc2VsZiwgZXZ0KTtcblx0XHRcdH07XG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGtleSwgc2VsZi5tb2RpZmllcktleUxpc3RlbmVyLCBmYWxzZSk7XG5cdFx0fVxuXHRcdHJldHVybiBtb3VzZU92ZXJXaWtpTGluazIodGhpcywgZXZ0KTtcblx0fTtcblx0LyoqXG5cdCAqIEdldHMgdGhlIHJlZmVyZW5jZXMgbGlzdCBpdGVtIHRoYXQgdGhlIHByb3ZpZGVkIGZvb3Rub3RlIGxpbmsgdGFyZ2V0cy4gVGhpc1xuXHQgKiBpcyB0eXBpY2FsbHkgYSBsaSBlbGVtZW50IHdpdGhpbiB0aGUgb2wucmVmZXJlbmNlcyBlbGVtZW50IGluc2lkZSB0aGUgcmVmbGlzdC5cblx0ICpcblx0ICogQHBhcmFtIHtFbGVtZW50fSBhIC0gQSBmb290bm90ZSBsaW5rLlxuXHQgKiBAcmV0dXJuIHtFbGVtZW50fGJvb2xlYW59IFRoZSB0YXJnZXRlZCBlbGVtZW50LCBvciBmYWxzZSBpZiBvbmUgY2FuJ3QgYmUgZm91bmQuXG5cdCAqL1xuXHRjb25zdCBmb290bm90ZVRhcmdldCA9IChhKSA9PiB7XG5cdFx0Y29uc3QgYVRpdGxlID0gVGl0bGUuZnJvbUFuY2hvcihhKTtcblx0XHQvLyBXZSB3YW50IFwiLjNBXCIgcmF0aGVyIHRoYW4gXCIlM0FcIiBvciBcIj9cIiBoZXJlLCBzbyB1c2UgdGhlIGFuY2hvciBwcm9wZXJ0eSBkaXJlY3RseVxuXHRcdGNvbnN0IGFuY2ggPSBhVGl0bGUuYW5jaG9yO1xuXHRcdGlmICghL14oY2l0ZV9ub3RlLXxfbm90ZS18ZW5kbm90ZSkvLnRlc3QoYW5jaCkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0Y29uc3QgbFRpdGxlID0gVGl0bGUuZnJvbVVSTChsb2NhdGlvbi5ocmVmKTtcblx0XHRpZiAobFRpdGxlLnRvU3RyaW5nKHRydWUpICE9PSBhVGl0bGUudG9TdHJpbmcodHJ1ZSkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0bGV0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7YW5jaH1gKTtcblx0XHR3aGlsZSAoZWwgJiYgdHlwZW9mIGVsLm5vZGVOYW1lID09PSAnc3RyaW5nJykge1xuXHRcdFx0Y29uc3QgbnQgPSBlbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0aWYgKG50ID09PSAnbGknKSB7XG5cdFx0XHRcdHJldHVybiBlbDtcblx0XHRcdH0gZWxzZSBpZiAobnQgPT09ICdib2R5Jykge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9IGVsc2UgaWYgKGVsLnBhcmVudE5vZGUpIHtcblx0XHRcdFx0ZWwgPSBlbC5wYXJlbnROb2RlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cdGNvbnN0IGZvb3Rub3RlUHJldmlldyA9ICh4LCBuYXZwb3ApID0+IHtcblx0XHRzZXRQb3B1cEhUTUwoYDxocj4ke3guaW5uZXJIVE1MfWAsICdwb3B1cFByZXZpZXcnLCBuYXZwb3AuaWROdW1iZXIpO1xuXHR9O1xuXHRjb25zdCBtb2RpZmllclByZXNzZWQgPSAoZXZ0KSA9PiB7XG5cdFx0Y29uc3QgbW9kID0gZ2V0VmFsdWVPZigncG9wdXBNb2RpZmllcicpO1xuXHRcdGlmICghbW9kKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmICghZXZ0ICYmIHdpbmRvdy5ldmVudCkge1xuXHRcdFx0ZXZ0ID0gd2luZG93LmV2ZW50O1xuXHRcdH1cblx0XHRyZXR1cm4gZXZ0ICYmIG1vZCAmJiBldnRbYCR7bW9kLnRvTG93ZXJDYXNlKCl9S2V5YF07XG5cdH07XG5cdC8vIENoZWNrcyBpZiB0aGUgY29ycmVjdCBtb2RpZmllciBwcmVzc2VkL3VucHJlc3NlZCBpZiBuZWVkZWRcblx0Y29uc3QgaXNDb3JyZWN0TW9kaWZpZXIgPSAoX2EsIGV2dCkgPT4ge1xuXHRcdGlmICghZ2V0VmFsdWVPZigncG9wdXBNb2RpZmllcicpKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0Ly8gaWYgcG9wdXBNb2RpZmllckFjdGlvbiA9IGVuYWJsZSwgd2Ugc2hvdWxkIHBvcHVwIHdoZW4gdGhlIG1vZGlmaWVyIGlzIHByZXNzZWRcblx0XHQvLyBpZiBwb3B1cE1vZGlmaWVyQWN0aW9uID0gZGlzYWJsZSwgd2Ugc2hvdWxkIHBvcHVwIHVubGVzcyB0aGUgbW9kaWZpZXIgaXMgcHJlc3NlZFxuXHRcdGNvbnN0IGFjdGlvbiA9IGdldFZhbHVlT2YoJ3BvcHVwTW9kaWZpZXJBY3Rpb24nKTtcblx0XHRyZXR1cm4gKGFjdGlvbiA9PT0gJ2VuYWJsZScgJiYgbW9kaWZpZXJQcmVzc2VkKGV2dCkpIHx8IChhY3Rpb24gPT09ICdkaXNhYmxlJyAmJiAhbW9kaWZpZXJQcmVzc2VkKGV2dCkpO1xuXHR9O1xuXHRjb25zdCBtb3VzZU92ZXJXaWtpTGluazIgPSAoYSwgZXZ0KSA9PiB7XG5cdFx0aWYgKCFpc0NvcnJlY3RNb2RpZmllcihhLCBldnQpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmIChnZXRWYWx1ZU9mKCdyZW1vdmVUaXRsZXMnKSkge1xuXHRcdFx0cmVtb3ZlVGl0bGUoYSk7XG5cdFx0fVxuXHRcdGlmIChhID09PSBwZy5jdXJyZW50LmxpbmsgJiYgYS5uYXZwb3B1cCAmJiBhLm5hdnBvcHVwLmlzVmlzaWJsZSgpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHBnLmN1cnJlbnQubGluayA9IGE7XG5cdFx0aWYgKGdldFZhbHVlT2YoJ3NpbXBsZVBvcHVwcycpICYmICFwZy5vcHRpb24ucG9wdXBTdHJ1Y3R1cmUpIHtcblx0XHRcdC8vIHJlc2V0ICpkZWZhdWx0IHZhbHVlKiBvZiBwb3B1cFN0cnVjdHVyZVxuXHRcdFx0c2V0RGVmYXVsdCgncG9wdXBTdHJ1Y3R1cmUnLCAnb3JpZ2luYWwnKTtcblx0XHR9XG5cdFx0Y29uc3QgYXJ0aWNsZSA9IG5ldyBUaXRsZSgpLmZyb21BbmNob3IoYSk7XG5cdFx0Ly8gc2V0IGdsb2JhbCB2YXJpYWJsZSAodWdoKSB0byBob2xkIGFydGljbGUgKHdpa2lwYWdlKVxuXHRcdHBnLmN1cnJlbnQuYXJ0aWNsZSA9IGFydGljbGU7XG5cdFx0aWYgKCFhLm5hdnBvcHVwKSB7XG5cdFx0XHRhLm5hdnBvcHVwID0gbmV3TmF2cG9wdXAoYSwgYXJ0aWNsZSk7XG5cdFx0XHRwZy5jdXJyZW50LmxpbmtzSGFzaFthLmhyZWZdID0gYS5uYXZwb3B1cDtcblx0XHRcdHBnLmN1cnJlbnQubGlua3MucHVzaChhKTtcblx0XHR9XG5cdFx0aWYgKGEubmF2cG9wdXAucGVuZGluZyA9PT0gbnVsbCB8fCBhLm5hdnBvcHVwLnBlbmRpbmcgIT09IDApIHtcblx0XHRcdC8vIGVpdGhlciBmcmVzaCBwb3B1cHMgb3IgdGhvc2Ugd2l0aCB1bmZpbnNoZWQgYnVzaW5lc3MgYXJlIHJlZG9uZSBmcm9tIHNjcmF0Y2hcblx0XHRcdHNpbXBsZVBvcHVwQ29udGVudChhLCBhcnRpY2xlKTtcblx0XHR9XG5cdFx0YS5uYXZwb3B1cC5zaG93U29vbklmU3RhYmxlKGEubmF2cG9wdXAuZGVsYXkpO1xuXHRcdGNsZWFySW50ZXJ2YWwocGcudGltZXIuY2hlY2tQb3B1cFBvc2l0aW9uKTtcblx0XHRwZy50aW1lci5jaGVja1BvcHVwUG9zaXRpb24gPSBzZXRJbnRlcnZhbChjaGVja1BvcHVwUG9zaXRpb24sIDYwMCk7XG5cdFx0aWYgKGdldFZhbHVlT2YoJ3NpbXBsZVBvcHVwcycpICYmIGdldFZhbHVlT2YoJ3BvcHVwUHJldmlld0J1dHRvbicpICYmICFhLnNpbXBsZU5vTW9yZSkge1xuXHRcdFx0Y29uc3QgZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0ZC5jbGFzc05hbWUgPSAncG9wdXBQcmV2aWV3QnV0dG9uRGl2Jztcblx0XHRcdGNvbnN0IHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRkLmFwcGVuZChzKTtcblx0XHRcdHMuY2xhc3NOYW1lID0gJ3BvcHVwUHJldmlld0J1dHRvbic7XG5cdFx0XHRzW2BvbiR7Z2V0VmFsdWVPZigncG9wdXBQcmV2aWV3QnV0dG9uRXZlbnQnKX1gXSA9ICgpID0+IHtcblx0XHRcdFx0YS5zaW1wbGVOb01vcmUgPSB0cnVlO1xuXHRcdFx0XHRkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdG5vbnNpbXBsZVBvcHVwQ29udGVudChhLCBhcnRpY2xlKTtcblx0XHRcdH07XG5cdFx0XHRzLmlubmVySFRNTCA9IHBvcHVwU3RyaW5nKCdzaG93IHByZXZpZXcnKTtcblx0XHRcdHNldFBvcHVwSFRNTChkLCAncG9wdXBQcmV2aWV3JywgYS5uYXZwb3B1cC5pZE51bWJlcik7XG5cdFx0fVxuXHRcdGlmIChhLm5hdnBvcHVwLnBlbmRpbmcgIT09IDApIHtcblx0XHRcdG5vbnNpbXBsZVBvcHVwQ29udGVudChhLCBhcnRpY2xlKTtcblx0XHR9XG5cdH07XG5cdC8vIHNpbXBsZVBvcHVwQ29udGVudDogdGhlIGNvbnRlbnQgdGhhdCBkbyBub3QgcmVxdWlyZSBhZGRpdGlvbmFsIGRvd25sb2FkXG5cdC8vIChpdCBpcyBzaG93biBldmVuIHdoZW4gc2ltcGxlUG9wdXBzIGlzIHRydWUpXG5cdGNvbnN0IHNpbXBsZVBvcHVwQ29udGVudCA9IChhLCBhcnRpY2xlKSA9PiB7XG5cdFx0LyogRklYTUUgaGFjayAqL1xuXHRcdGEubmF2cG9wdXAuaGFzUG9wdXBNZW51ID0gZmFsc2U7XG5cdFx0YS5uYXZwb3B1cC5zZXRJbm5lckhUTUwocG9wdXBIVE1MKGEpKTtcblx0XHRmaWxsRW1wdHlTcGFucyh7XG5cdFx0XHRuYXZwb3B1cDogYS5uYXZwb3B1cCxcblx0XHR9KTtcblx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBEcmFnZ2FibGUnKSkge1xuXHRcdFx0bGV0IGRyYWdIYW5kbGUgPSBnZXRWYWx1ZU9mKCdwb3B1cERyYWdIYW5kbGUnKSB8fCBudWxsO1xuXHRcdFx0aWYgKGRyYWdIYW5kbGUgJiYgZHJhZ0hhbmRsZSAhPT0gJ2FsbCcpIHtcblx0XHRcdFx0ZHJhZ0hhbmRsZSArPSBhLm5hdnBvcHVwLmlkTnVtYmVyO1xuXHRcdFx0fVxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdGEubmF2cG9wdXAubWFrZURyYWdnYWJsZShkcmFnSGFuZGxlKTtcblx0XHRcdH0sIDE1MCk7XG5cdFx0fVxuXHRcdGlmIChnZXRWYWx1ZU9mKCdwb3B1cFJlZGxpbmtSZW1vdmFsJykgJiYgYS5jbGFzc05hbWUgPT09ICduZXcnKSB7XG5cdFx0XHRzZXRQb3B1cEhUTUwoYDxicj4ke3BvcHVwUmVkbGlua0hUTUwoYXJ0aWNsZSl9YCwgJ3BvcHVwUmVkbGluaycsIGEubmF2cG9wdXAuaWROdW1iZXIpO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgZGVidWdEYXRhID0gKG5hdnBvcHVwKSA9PiB7XG5cdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwRGVidWdnaW5nJykgJiYgbmF2cG9wdXAuaWROdW1iZXIpIHtcblx0XHRcdHNldFBvcHVwSFRNTChgaWROdW1iZXI9JHtuYXZwb3B1cC5pZE51bWJlcn0sIHBlbmRpbmc9JHtuYXZwb3B1cC5wZW5kaW5nfWAsICdwb3B1cEVycm9yJywgbmF2cG9wdXAuaWROdW1iZXIpO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgbmV3TmF2cG9wdXAgPSAoYSwgYXJ0aWNsZSkgPT4ge1xuXHRcdGNvbnN0IG5hdnBvcHVwID0gbmV3IE5hdnBvcHVwKCk7XG5cdFx0bmF2cG9wdXAuZnV6eiA9IDU7XG5cdFx0bmF2cG9wdXAuZGVsYXkgPSBnZXRWYWx1ZU9mKCdwb3B1cERlbGF5JykgKiAxMDAwO1xuXHRcdC8vIGluY3JlbWVudCBnbG9iYWwgY291bnRlciBub3dcblx0XHRuYXZwb3B1cC5pZE51bWJlciA9ICsrcGcuaWROdW1iZXI7XG5cdFx0bmF2cG9wdXAucGFyZW50QW5jaG9yID0gYTtcblx0XHRuYXZwb3B1cC5wYXJlbnRQb3B1cCA9IGEucG9wRGF0YSAmJiBhLnBvcERhdGEub3duZXI7XG5cdFx0bmF2cG9wdXAuYXJ0aWNsZSA9IGFydGljbGU7XG5cdFx0cmVnaXN0ZXJIb29rcyhuYXZwb3B1cCk7XG5cdFx0cmV0dXJuIG5hdnBvcHVwO1xuXHR9O1xuXHQvLyBTaG91bGQgd2Ugc2hvdyBub25zaW1wbGUgY29udGV4dD9cblx0Ly8gSWYgc2ltcGxlUG9wdXBzIGlzIHNldCB0byB0cnVlLCB0aGVuIHdlIGRvIG5vdCBzaG93IG5vbnNpbXBsZSBjb250ZXh0LFxuXHQvLyBidXQgaWYgYSBib3R0b20gXCJzaG93IHByZXZpZXdcIiB3YXMgY2xpY2tlZCB3ZSBkbyBzaG93IG5vbnNpbXBsZSBjb250ZXh0XG5cdGNvbnN0IHNob3VsZFNob3dOb25TaW1wbGUgPSAoYSkgPT4ge1xuXHRcdHJldHVybiAhZ2V0VmFsdWVPZignc2ltcGxlUG9wdXBzJykgfHwgYS5zaW1wbGVOb01vcmU7XG5cdH07XG5cdC8vIFNob3VsZCB3ZSBzaG93IG5vbnNpbXBsZSBjb250ZXh0IGdvdmVybiBieSB0aGUgb3B0aW9uIChlLmcuIHBvcHVwVXNlckluZm8pP1xuXHQvLyBJZiB0aGUgdXNlciBleHBsaWNpdGx5IGFza2VkIGZvciBub25zaW1wbGUgY29udGV4dCBieSBzZXR0aW5nIHRoZSBvcHRpb24gdG8gdHJ1ZSxcblx0Ly8gdGhlbiB3ZSBzaG93IGl0IGV2ZW4gaW4gbm9uc2ltcGxlIG1vZGUuXG5cdGNvbnN0IHNob3VsZFNob3cgPSAoYSwgb3B0aW9uKSA9PiB7XG5cdFx0aWYgKHNob3VsZFNob3dOb25TaW1wbGUoYSkpIHtcblx0XHRcdHJldHVybiBnZXRWYWx1ZU9mKG9wdGlvbik7XG5cdFx0fVxuXHRcdHJldHVybiB3aW5kb3dbb3B0aW9uXSAhPT0gdW5kZWZpbmVkICYmIHdpbmRvd1tvcHRpb25dO1xuXHR9O1xuXHRjb25zdCBub25zaW1wbGVQb3B1cENvbnRlbnQgPSAoYSwgYXJ0aWNsZSkgPT4ge1xuXHRcdGxldCBkaWZmO1xuXHRcdGxldCBoaXN0b3J5O1xuXHRcdGNvbnN0IHBhcmFtcyA9IHBhcnNlUGFyYW1zKGEuaHJlZik7XG5cdFx0Y29uc3Qgb2xkaWQgPSBwYXJhbXMub2xkaWQgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBwYXJhbXMub2xkaWQ7XG5cdFx0aWYgKHNob3VsZFNob3coYSwgJ3BvcHVwUHJldmlld0RpZmZzJykpIHtcblx0XHRcdCh7ZGlmZn0gPSBwYXJhbXMpO1xuXHRcdH1cblx0XHRpZiAoc2hvdWxkU2hvdyhhLCAncG9wdXBQcmV2aWV3SGlzdG9yeScpKSB7XG5cdFx0XHRoaXN0b3J5ID0gcGFyYW1zLmFjdGlvbiA9PT0gJ2hpc3RvcnknO1xuXHRcdH1cblx0XHRhLm5hdnBvcHVwLnBlbmRpbmcgPSAwO1xuXHRcdGNvbnN0IHJlZmVyZW5jZUVsZW1lbnQgPSBmb290bm90ZVRhcmdldChhKTtcblx0XHRpZiAocmVmZXJlbmNlRWxlbWVudCkge1xuXHRcdFx0Zm9vdG5vdGVQcmV2aWV3KHJlZmVyZW5jZUVsZW1lbnQsIGEubmF2cG9wdXApO1xuXHRcdH0gZWxzZSBpZiAoZGlmZiB8fCBkaWZmID09PSAwKSB7XG5cdFx0XHRsb2FkRGlmZihhcnRpY2xlLCBvbGRpZCwgZGlmZiwgYS5uYXZwb3B1cCk7XG5cdFx0fSBlbHNlIGlmIChoaXN0b3J5KSB7XG5cdFx0XHRsb2FkQVBJUHJldmlldygnaGlzdG9yeScsIGFydGljbGUsIGEubmF2cG9wdXApO1xuXHRcdH0gZWxzZSBpZiAoc2hvdWxkU2hvd05vblNpbXBsZShhKSAmJiBwZy5yZS5jb250cmlicy50ZXN0KGEuaHJlZikpIHtcblx0XHRcdGxvYWRBUElQcmV2aWV3KCdjb250cmlicycsIGFydGljbGUsIGEubmF2cG9wdXApO1xuXHRcdH0gZWxzZSBpZiAoc2hvdWxkU2hvd05vblNpbXBsZShhKSAmJiBwZy5yZS5iYWNrbGlua3MudGVzdChhLmhyZWYpKSB7XG5cdFx0XHRsb2FkQVBJUHJldmlldygnYmFja2xpbmtzJywgYXJ0aWNsZSwgYS5uYXZwb3B1cCk7XG5cdFx0fSBlbHNlIGlmIChcblx0XHRcdC8vIEZJWE1FIHNob3VsZCBiZSBhYmxlIHRvIGdldCBhbGwgcHJldmlldyBjb21iaW5hdGlvbnMgd2l0aCBvcHRpb25zXG5cdFx0XHRhcnRpY2xlLm5hbWVzcGFjZUlkKCkgPT09IHBnLm5zSW1hZ2VJZCAmJlxuXHRcdFx0KHNob3VsZFNob3coYSwgJ2ltYWdlUG9wdXBzRm9ySW1hZ2VzJykgfHwgIWFuY2hvckNvbnRhaW5zSW1hZ2UoYSkpXG5cdFx0KSB7XG5cdFx0XHRsb2FkQVBJUHJldmlldygnaW1hZ2VwYWdlcHJldmlldycsIGFydGljbGUsIGEubmF2cG9wdXApO1xuXHRcdFx0bG9hZEltYWdlKGFydGljbGUsIGEubmF2cG9wdXApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoYXJ0aWNsZS5uYW1lc3BhY2VJZCgpID09PSBwZy5uc0NhdGVnb3J5SWQgJiYgc2hvdWxkU2hvdyhhLCAncG9wdXBDYXRlZ29yeU1lbWJlcnMnKSkge1xuXHRcdFx0XHRsb2FkQVBJUHJldmlldygnY2F0ZWdvcnknLCBhcnRpY2xlLCBhLm5hdnBvcHVwKTtcblx0XHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRcdChhcnRpY2xlLm5hbWVzcGFjZUlkKCkgPT09IHBnLm5zVXNlcklkIHx8IGFydGljbGUubmFtZXNwYWNlSWQoKSA9PT0gcGcubnNVc2VydGFsa0lkKSAmJlxuXHRcdFx0XHRzaG91bGRTaG93KGEsICdwb3B1cFVzZXJJbmZvJylcblx0XHRcdCkge1xuXHRcdFx0XHRsb2FkQVBJUHJldmlldygndXNlcmluZm8nLCBhcnRpY2xlLCBhLm5hdnBvcHVwKTtcblx0XHRcdH1cblx0XHRcdGlmIChzaG91bGRTaG93Tm9uU2ltcGxlKGEpKSB7XG5cdFx0XHRcdHN0YXJ0QXJ0aWNsZVByZXZpZXcoYXJ0aWNsZSwgb2xkaWQsIGEubmF2cG9wdXApO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0Y29uc3QgcGVuZGluZ05hdnBvcFRhc2sgPSAobmF2cG9wKSA9PiB7XG5cdFx0aWYgKG5hdnBvcCAmJiBuYXZwb3AucGVuZGluZyA9PT0gbnVsbCkge1xuXHRcdFx0bmF2cG9wLnBlbmRpbmcgPSAwO1xuXHRcdH1cblx0XHQrK25hdnBvcC5wZW5kaW5nO1xuXHRcdGRlYnVnRGF0YShuYXZwb3ApO1xuXHR9O1xuXHRjb25zdCBjb21wbGV0ZWROYXZwb3BUYXNrID0gKG5hdnBvcCkgPT4ge1xuXHRcdGlmIChuYXZwb3AgJiYgbmF2cG9wLnBlbmRpbmcpIHtcblx0XHRcdC0tbmF2cG9wLnBlbmRpbmc7XG5cdFx0fVxuXHRcdGRlYnVnRGF0YShuYXZwb3ApO1xuXHR9O1xuXHRjb25zdCBzdGFydEFydGljbGVQcmV2aWV3ID0gKGFydGljbGUsIG9sZGlkLCBuYXZwb3ApID0+IHtcblx0XHRuYXZwb3AucmVkaXIgPSAwO1xuXHRcdGxvYWRQcmV2aWV3KGFydGljbGUsIG9sZGlkLCBuYXZwb3ApO1xuXHR9O1xuXHRjb25zdCBsb2FkUHJldmlldyA9IChhcnRpY2xlLCBvbGRpZCwgbmF2cG9wKSA9PiB7XG5cdFx0aWYgKCFuYXZwb3AucmVkaXIpIHtcblx0XHRcdG5hdnBvcC5vcmlnaW5hbEFydGljbGUgPSBhcnRpY2xlO1xuXHRcdH1cblx0XHRhcnRpY2xlLm9sZGlkID0gb2xkaWQ7XG5cdFx0bG9hZEFQSVByZXZpZXcoJ3JldmlzaW9uJywgYXJ0aWNsZSwgbmF2cG9wKTtcblx0fTtcblx0Y29uc3QgbG9hZFByZXZpZXdGcm9tUmVkaXIgPSAocmVkaXJNYXRjaCwgbmF2cG9wKSA9PiB7XG5cdFx0Ly8gcmVkaXJNYXRjaCBpcyBhIHJlZ2V4IG1hdGNoXG5cdFx0Y29uc3QgdGFyZ2V0ID0gbmV3IFRpdGxlKCkuZnJvbVdpa2lUZXh0KHJlZGlyTWF0Y2hbMl0pO1xuXHRcdC8vIG92ZXJ3cml0ZSAob3IgYWRkKSBhbmNob3IgZnJvbSBvcmlnaW5hbCB0YXJnZXRcblx0XHQvLyBtZWRpYXdpa2kgZG9lcyBvdmVyd3JpdGVcblx0XHRpZiAobmF2cG9wLmFydGljbGUuYW5jaG9yKSB7XG5cdFx0XHR0YXJnZXQuYW5jaG9yID0gbmF2cG9wLmFydGljbGUuYW5jaG9yO1xuXHRcdH1cblx0XHRuYXZwb3AucmVkaXIrKztcblx0XHRuYXZwb3AucmVkaXJUYXJnZXQgPSB0YXJnZXQ7XG5cdFx0Y29uc3Qgd2FyblJlZGlyID0gcmVkaXJMaW5rKHRhcmdldCwgbmF2cG9wLmFydGljbGUpO1xuXHRcdHNldFBvcHVwSFRNTCh3YXJuUmVkaXIsICdwb3B1cFdhcm5SZWRpcicsIG5hdnBvcC5pZE51bWJlcik7XG5cdFx0bmF2cG9wLmFydGljbGUgPSB0YXJnZXQ7XG5cdFx0ZmlsbEVtcHR5U3BhbnMoe1xuXHRcdFx0cmVkaXI6IHRydWUsXG5cdFx0XHRyZWRpclRhcmdldDogdGFyZ2V0LFxuXHRcdFx0bmF2cG9wdXA6IG5hdnBvcCxcblx0XHR9KTtcblx0XHRyZXR1cm4gbG9hZFByZXZpZXcodGFyZ2V0LCBudWxsLCBuYXZwb3ApO1xuXHR9O1xuXHRjb25zdCBpbnNlcnRQcmV2aWV3ID0gKGRvd25sb2FkKSA9PiB7XG5cdFx0aWYgKCFkb3dubG9hZC5vd25lcikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCByZWRpck1hdGNoID0gcGcucmUucmVkaXJlY3QuZXhlYyhkb3dubG9hZC5kYXRhKTtcblx0XHRpZiAoZG93bmxvYWQub3duZXIucmVkaXIgPT09IDAgJiYgcmVkaXJNYXRjaCkge1xuXHRcdFx0bG9hZFByZXZpZXdGcm9tUmVkaXIocmVkaXJNYXRjaCwgZG93bmxvYWQub3duZXIpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoZG93bmxvYWQub3duZXIudmlzaWJsZSB8fCAhZ2V0VmFsdWVPZigncG9wdXBMYXp5UHJldmlld3MnKSkge1xuXHRcdFx0aW5zZXJ0UHJldmlld05vdyhkb3dubG9hZCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IGlkID0gZG93bmxvYWQub3duZXIucmVkaXIgPyAnUFJFVklFV19SRURJUl9IT09LJyA6ICdQUkVWSUVXX0hPT0snO1xuXHRcdFx0ZG93bmxvYWQub3duZXIuYWRkSG9vayhcblx0XHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRcdGluc2VydFByZXZpZXdOb3coZG93bmxvYWQpO1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQndW5oaWRlJyxcblx0XHRcdFx0J2FmdGVyJyxcblx0XHRcdFx0aWRcblx0XHRcdCk7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBpbnNlcnRQcmV2aWV3Tm93ID0gKGRvd25sb2FkKSA9PiB7XG5cdFx0aWYgKCFkb3dubG9hZC5vd25lcikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCB3aWtpVGV4dCA9IGRvd25sb2FkLmRhdGE7XG5cdFx0Y29uc3QgbmF2cG9wID0gZG93bmxvYWQub3duZXI7XG5cdFx0Y29uc3QgYXJ0ID0gbmF2cG9wLnJlZGlyVGFyZ2V0IHx8IG5hdnBvcC5vcmlnaW5hbEFydGljbGU7XG5cdFx0bWFrZUZpeERhYnMod2lraVRleHQsIG5hdnBvcCk7XG5cdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwU3VtbWFyeURhdGEnKSkge1xuXHRcdFx0Z2V0UGFnZUluZm8od2lraVRleHQsIGRvd25sb2FkKTtcblx0XHRcdHNldFBvcHVwVHJhaWxlcihnZXRQYWdlSW5mbyh3aWtpVGV4dCwgZG93bmxvYWQpLCBuYXZwb3AuaWROdW1iZXIpO1xuXHRcdH1cblx0XHRsZXQgaW1hZ2VQYWdlID0gJyc7XG5cdFx0aW1hZ2VQYWdlID0gYXJ0Lm5hbWVzcGFjZUlkKCkgPT09IHBnLm5zSW1hZ2VJZCA/IGFydC50b1N0cmluZygpIDogZ2V0VmFsaWRJbWFnZUZyb21XaWtpVGV4dCh3aWtpVGV4dCk7XG5cdFx0aWYgKGltYWdlUGFnZSkge1xuXHRcdFx0bG9hZEltYWdlKFRpdGxlLmZyb21XaWtpVGV4dChpbWFnZVBhZ2UpLCBuYXZwb3ApO1xuXHRcdH1cblx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBQcmV2aWV3cycpKSB7XG5cdFx0XHRpbnNlcnRBcnRpY2xlUHJldmlldyhkb3dubG9hZCwgYXJ0LCBuYXZwb3ApO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgaW5zZXJ0QXJ0aWNsZVByZXZpZXcgPSAoZG93bmxvYWQsIGFydCwgbmF2cG9wKSA9PiB7XG5cdFx0aWYgKGRvd25sb2FkICYmIHR5cGVvZiBkb3dubG9hZC5kYXRhID09PSB0eXBlb2YgJycpIHtcblx0XHRcdGlmIChhcnQubmFtZXNwYWNlSWQoKSA9PT0gcGcubnNUZW1wbGF0ZUlkICYmIGdldFZhbHVlT2YoJ3BvcHVwUHJldmlld1Jhd1RlbXBsYXRlcycpKSB7XG5cdFx0XHRcdC8vIEZJWE1FIGNvbXBhcmUvY29uc29saWRhdGUgd2l0aCBkaWZmIGVzY2FwaW5nIGNvZGUgZm9yIHdpa2l0ZXh0XG5cdFx0XHRcdGNvbnN0IGggPSBgPGhyPjxzcGFuIHN0eWxlPVwiZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcIj4ke2Rvd25sb2FkLmRhdGFcblx0XHRcdFx0XHQuZW50aWZ5KClcblx0XHRcdFx0XHQuc3BsaXQoU3RyaW5nLnJhd2BcXG5gKVxuXHRcdFx0XHRcdC5qb2luKFN0cmluZy5yYXdgPGJyPlxcbmApfTwvc3Bhbj5gO1xuXHRcdFx0XHRzZXRQb3B1cEhUTUwoaCwgJ3BvcHVwUHJldmlldycsIG5hdnBvcC5pZE51bWJlcik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCBwID0gcHJlcFByZXZpZXdtYWtlcihkb3dubG9hZC5kYXRhLCBhcnQsIG5hdnBvcCk7XG5cdFx0XHRcdHAuc2hvd1ByZXZpZXcoKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdGNvbnN0IHByZXBQcmV2aWV3bWFrZXIgPSAoZGF0YSwgYXJ0aWNsZSwgbmF2cG9wKSA9PiB7XG5cdFx0Ly8gZGVhbCB3aXRoIHRyaWNrc3kgYW5jaG9yc1xuXHRcdGNvbnN0IGQgPSBhbmNob3JpemUoZGF0YSwgYXJ0aWNsZS5hbmNob3JTdHJpbmcoKSk7XG5cdFx0Y29uc3QgdXJsQmFzZSA9IGpvaW5QYXRoKFtwZy53aWtpLmFydGljbGViYXNlLCBhcnRpY2xlLnVybFN0cmluZygpXSk7XG5cdFx0Y29uc3QgcCA9IG5ldyBQcmV2aWV3bWFrZXIoZCwgdXJsQmFzZSwgbmF2cG9wKTtcblx0XHRyZXR1cm4gcDtcblx0fTtcblx0Ly8gVHJ5IHRvIGltaXRhdGUgdGhlIHdheSBtZWRpYXdpa2kgZ2VuZXJhdGVzIEhUTUwgYW5jaG9ycyBmcm9tIHNlY3Rpb24gdGl0bGVzXG5cdGNvbnN0IGFuY2hvcml6ZSA9IChkLCBhbmNoKSA9PiB7XG5cdFx0aWYgKCFhbmNoKSB7XG5cdFx0XHRyZXR1cm4gZDtcblx0XHR9XG5cdFx0Y29uc3QgYW5jaFJlID0gbmV3IFJlZ0V4cChcblx0XHRcdGAoPzo9K1xcXFxzKiR7bGl0ZXJhbGl6ZVJlZ2V4KGFuY2gpLnJlcGxhY2UoL1sgX10vZywgJ1tfIF0nKX1cXFxccyo9K3xcXFxce1xcXFx7XFxcXHMqJHtnZXRWYWx1ZU9mKFxuXHRcdFx0XHQncG9wdXBBbmNob3JSZWdleHAnXG5cdFx0XHQpfVxcXFxzKig/OlxcXFx8W158fV0qKSo/XFxcXHMqJHtsaXRlcmFsaXplUmVnZXgoYW5jaCl9XFxcXHMqKD86XFxcXHxbXn1dKik/fX0pYFxuXHRcdCk7XG5cdFx0Y29uc3QgbWF0Y2ggPSBkLm1hdGNoKGFuY2hSZSk7XG5cdFx0aWYgKG1hdGNoICYmIG1hdGNoLmxlbmd0aCA+IDAgJiYgbWF0Y2hbMF0pIHtcblx0XHRcdHJldHVybiBkLnNsaWNlKE1hdGgubWF4KDAsIGQuaW5kZXhPZihtYXRjaFswXSkpKTtcblx0XHR9XG5cdFx0Ly8gbm93IHRyeSB0byBkZWFsIHdpdGggPT09IGZvbyBbW2JhcnxiYXpdXSBib29tID09PSAtPiAjZm9vX2Jhel9ib29tXG5cdFx0Y29uc3QgbGluZXMgPSBkLnNwbGl0KCdcXG4nKTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRsaW5lc1tpXSA9IGxpbmVzW2ldXG5cdFx0XHRcdC5yZXBsYWNlKC9cXFt7Mn0oW15cXF18XSo/XFx8KT8oLio/KV17Mn0vZywgJyQyJylcblx0XHRcdFx0LnJlcGxhY2UoLycnJyhbXiddKS9nLCAnJDEnKVxuXHRcdFx0XHQucmVwbGFjZSgvJycoW14nXSkvZywgJyQxJyk7XG5cdFx0XHRpZiAoYW5jaFJlLnRlc3QobGluZXNbaV0pKSB7XG5cdFx0XHRcdHJldHVybiBkXG5cdFx0XHRcdFx0LnNwbGl0KCdcXG4nKVxuXHRcdFx0XHRcdC5zbGljZShpKVxuXHRcdFx0XHRcdC5qb2luKCdcXG4nKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC9eW149XSovLCAnJyk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBkO1xuXHR9O1xuXHRjb25zdCBraWxsUG9wdXAgPSBmdW5jdGlvbiBraWxsUG9wdXAoKSB7XG5cdFx0cmVtb3ZlTW9kaWZpZXJLZXlMaXN0ZW5lcih0aGlzKTtcblx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBTaG9ydGN1dEtleXMnKSkge1xuXHRcdFx0cm1Qb3B1cFNob3J0Y3V0cygpO1xuXHRcdH1cblx0XHRpZiAoIXBnKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmIChwZy5jdXJyZW50LmxpbmsgJiYgcGcuY3VycmVudC5saW5rLm5hdnBvcHVwKSB7XG5cdFx0XHRwZy5jdXJyZW50LmxpbmsubmF2cG9wdXAuYmFuaXNoKCk7XG5cdFx0fVxuXHRcdHBnLmN1cnJlbnQubGluayA9IG51bGw7XG5cdFx0YWJvcnRBbGxEb3dubG9hZHMoKTtcblx0XHRpZiAocGcudGltZXIuY2hlY2tQb3B1cFBvc2l0aW9uKSB7XG5cdFx0XHRjbGVhckludGVydmFsKHBnLnRpbWVyLmNoZWNrUG9wdXBQb3NpdGlvbik7XG5cdFx0XHRwZy50aW1lci5jaGVja1BvcHVwUG9zaXRpb24gPSBudWxsO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTsgLy8gcHJlc2VydmUgZGVmYXVsdCBhY3Rpb25cblx0fTtcblx0Ly8gRU5ERklMRTogYWN0aW9ucy5qc1xuXHQvLyBTVEFSVEZJTEU6IGRvbWRyYWcuanNcblx0LyoqXG5cdCAqIEBmaWxlb3ZlcnZpZXdcblx0ICogVGhlIHtAc291cmNlIERyYWd9IG9iamVjdCwgd2hpY2ggZW5hYmxlcyBvYmplY3RzIHRvIGJlIGRyYWdnZWQgYXJvdW5kLlxuXHQgKiA8cHJlPlxuXHQgKlxuXHQgKiBkb20tZHJhZy5qc1xuXHQgKiAwOS4yNS4yMDAxXG5cdCAqIHd3dy55b3VuZ3B1cC5uZXRcblx0ICpcblx0ICogMTAuMjguMjAwMSAtIGZpeGVkIG1pbm9yIGJ1ZyB3aGVyZSBldmVudHNcblx0ICpcblx0ICogc29tZXRpbWVzIGZpcmVkIG9mZiB0aGUgaGFuZGxlLCBub3QgdGhlIHJvb3QuXG5cdCAqIFBhcmVkIGRvd24sIHNvbWUgaG9va3MgYWRkZWQgYnkgTHVwaW5cblx0ICogQ29weXJpZ2h0IEFhcm9uIEJvb2RtYW4uXG5cdCAqIFNheWluZyBzdHVwaWQgdGhpbmdzIGRhaWx5IHNpbmNlIE1hcmNoIDIwMDEuXG5cdCAqIDwvcHJlPlxuXHQgKi9cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuZXcgRHJhZyBvYmplY3QuIFRoaXMgaXMgdXNlZCB0byBtYWtlIHZhcmlvdXMgRE9NIGVsZW1lbnRzIGRyYWdnYWJsZS5cblx0ICpcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRjbGFzcyBEcmFnIHtcblx0XHRjb25zdHJ1Y3RvcigpIHtcblx0XHRcdC8qKlxuXHRcdFx0ICogQ29uZGl0aW9uIHRvIGRldGVybWluZSB3aGV0aGVyIG9yIG5vdCB0byBkcmFnLiBUaGlzIGZ1bmN0aW9uIHNob3VsZCB0YWtlIG9uZSBwYXJhbWV0ZXIsXG5cdFx0XHQgKiBhbiBFdmVudC4gIFRvIGRpc2FibGUgdGhpcywgc2V0IGl0IHRvIDxjb2RlPm51bGw8L2NvZGU+LlxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIEZ1bmN0aW9uXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMuc3RhcnRDb25kaXRpb24gPSBudWxsO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBIb29rIHRvIGJlIHJ1biB3aGVuIHRoZSBkcmFnIGZpbmlzaGVzLiBUaGlzIGlzIHBhc3NlZCB0aGUgZmluYWwgY29vcmRpbmF0ZXMgb2YgdGhlXG5cdFx0XHQgKiBkcmFnZ2VkIG9iamVjdCAodHdvIGludGVnZXJzLCB4IGFuZCB5KS4gVG8gZGlzYWJsZXMgdGhpcywgc2V0IGl0IHRvIDxjb2RlPm51bGw8L2NvZGU+LlxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIEZ1bmN0aW9uXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMuZW5kSG9vayA9IG51bGw7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEdldHMgYW4gZXZlbnQgaW4gYSBjcm9zcy1icm93c2VyIG1hbm5lci5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RXZlbnR9IGVcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHN0YXRpYyBmaXhFKGUpIHtcblx0XHRcdGlmIChlID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0ZSA9IHdpbmRvdy5ldmVudDtcblx0XHRcdH1cblx0XHRcdGlmIChlLmxheWVyWCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGUubGF5ZXJYID0gZS5vZmZzZXRYO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGUubGF5ZXJZID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0ZS5sYXllclkgPSBlLm9mZnNldFk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogSW5pdGlhbGlzZXMgdGhlIERyYWcgaW5zdGFuY2UgYnkgdGVsbGluZyBpdCB3aGljaCBvYmplY3QgeW91IHdhbnQgdG8gYmUgZHJhZ2dhYmxlLCBhbmQgd2hhdFxuXHRcdCAqIHlvdSB3YW50IHRvIGRyYWcgaXQgYnkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0RPTUVsZW1lbnR9IG8gVGhlIFwiaGFuZGxlXCIgYnkgd2hpY2ggPGNvZGU+b1Jvb3Q8L2NvZGU+IGlzIGRyYWdnZWQuXG5cdFx0ICogQHBhcmFtIHtET01FbGVtZW50fSBvUm9vdCBUaGUgb2JqZWN0IHdoaWNoIG1vdmVzIHdoZW4gPGNvZGU+bzwvY29kZT4gaXMgZHJhZ2dlZCwgb3IgPGNvZGU+bzwvY29kZT4gaWYgb21pdHRlZC5cblx0XHQgKi9cblx0XHRpbml0KG8sIG9Sb290KSB7XG5cdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdHRoaXMub2JqID0gbztcblx0XHRcdG8ub25tb3VzZWRvd24gPSAoZSkgPT4ge1xuXHRcdFx0XHRzZWxmLnN0YXJ0KGUpO1xuXHRcdFx0fTtcblx0XHRcdG8uZHJhZ2dpbmcgPSBmYWxzZTtcblx0XHRcdG8ucG9wdXBzX2RyYWdnYWJsZSA9IHRydWU7XG5cdFx0XHRvLmhtb2RlID0gdHJ1ZTtcblx0XHRcdG8udm1vZGUgPSB0cnVlO1xuXHRcdFx0by5yb290ID0gb1Jvb3QgfHwgbztcblx0XHRcdGlmIChOdW1iZXIuaXNOYU4oTnVtYmVyLnBhcnNlSW50KG8ucm9vdC5zdHlsZS5sZWZ0LCAxMCkpKSB7XG5cdFx0XHRcdG8ucm9vdC5zdHlsZS5sZWZ0ID0gJzBweCc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoTnVtYmVyLmlzTmFOKE51bWJlci5wYXJzZUludChvLnJvb3Quc3R5bGUudG9wLCAxMCkpKSB7XG5cdFx0XHRcdG8ucm9vdC5zdHlsZS50b3AgPSAnMHB4Jztcblx0XHRcdH1cblx0XHRcdG8ucm9vdC5vbnRoaXNTdGFydCA9ICgpID0+IHt9O1xuXHRcdFx0by5yb290Lm9udGhpc0VuZCA9ICgpID0+IHt9O1xuXHRcdFx0by5yb290Lm9udGhpcyA9ICgpID0+IHt9O1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBTdGFydHMgdGhlIGRyYWcuXG5cdFx0ICpcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqIEBwYXJhbSB7RXZlbnR9IGVcblx0XHQgKi9cblx0XHRzdGFydChlKSB7XG5cdFx0XHRjb25zdCBvID0gdGhpcy5vYmo7IC8vID0gdGhpcztcblx0XHRcdGUgPSBEcmFnLmZpeEUoZSk7XG5cdFx0XHRpZiAodGhpcy5zdGFydENvbmRpdGlvbiAmJiAhdGhpcy5zdGFydENvbmRpdGlvbihlKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCB5ID0gTnVtYmVyLnBhcnNlSW50KG8udm1vZGUgPyBvLnJvb3Quc3R5bGUudG9wIDogby5yb290LnN0eWxlLmJvdHRvbSwgMTApO1xuXHRcdFx0Y29uc3QgeCA9IE51bWJlci5wYXJzZUludChvLmhtb2RlID8gby5yb290LnN0eWxlLmxlZnQgOiBvLnJvb3Quc3R5bGUucmlnaHQsIDEwKTtcblx0XHRcdG8ucm9vdC5vbnRoaXNTdGFydCh4LCB5KTtcblx0XHRcdG8ubGFzdE1vdXNlWCA9IGUuY2xpZW50WDtcblx0XHRcdG8ubGFzdE1vdXNlWSA9IGUuY2xpZW50WTtcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0by5vbm1vdXNlbW92ZURlZmF1bHQgPSBkb2N1bWVudC5vbm1vdXNlbW92ZTtcblx0XHRcdG8uZHJhZ2dpbmcgPSB0cnVlO1xuXHRcdFx0ZG9jdW1lbnQub25tb3VzZW1vdmUgPSAoZSkgPT4ge1xuXHRcdFx0XHRzZWxmLmRyYWcoZSk7XG5cdFx0XHR9O1xuXHRcdFx0ZG9jdW1lbnQub25tb3VzZXVwID0gKGUpID0+IHtcblx0XHRcdFx0c2VsZi5lbmQoZSk7XG5cdFx0XHR9O1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBEb2VzIHRoZSBkcmFnLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtFdmVudH0gZVxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0ZHJhZyhlKSB7XG5cdFx0XHRlID0gRHJhZy5maXhFKGUpO1xuXHRcdFx0Y29uc3QgbyA9IHRoaXMub2JqO1xuXHRcdFx0Y29uc3QgZXkgPSBlLmNsaWVudFk7XG5cdFx0XHRjb25zdCBleCA9IGUuY2xpZW50WDtcblx0XHRcdGNvbnN0IHkgPSBOdW1iZXIucGFyc2VJbnQoby52bW9kZSA/IG8ucm9vdC5zdHlsZS50b3AgOiBvLnJvb3Quc3R5bGUuYm90dG9tLCAxMCk7XG5cdFx0XHRjb25zdCB4ID0gTnVtYmVyLnBhcnNlSW50KG8uaG1vZGUgPyBvLnJvb3Quc3R5bGUubGVmdCA6IG8ucm9vdC5zdHlsZS5yaWdodCwgMTApO1xuXHRcdFx0Y29uc3QgbnggPSB4ICsgKGV4IC0gby5sYXN0TW91c2VYKSAqIChvLmhtb2RlID8gMSA6IC0xKTtcblx0XHRcdGNvbnN0IG55ID0geSArIChleSAtIG8ubGFzdE1vdXNlWSkgKiAoby52bW9kZSA/IDEgOiAtMSk7XG5cdFx0XHR0aGlzLm9iai5yb290LnN0eWxlW28uaG1vZGUgPyAnbGVmdCcgOiAncmlnaHQnXSA9IGAke254fXB4YDtcblx0XHRcdHRoaXMub2JqLnJvb3Quc3R5bGVbby52bW9kZSA/ICd0b3AnIDogJ2JvdHRvbSddID0gYCR7bnl9cHhgO1xuXHRcdFx0dGhpcy5vYmoubGFzdE1vdXNlWCA9IGV4O1xuXHRcdFx0dGhpcy5vYmoubGFzdE1vdXNlWSA9IGV5O1xuXHRcdFx0dGhpcy5vYmoucm9vdC5vbnRoaXMobngsIG55KTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogRW5kcyB0aGUgZHJhZy5cblx0XHQgKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0ZW5kKCkge1xuXHRcdFx0ZG9jdW1lbnQub25tb3VzZW1vdmUgPSB0aGlzLm9iai5vbm1vdXNlbW92ZURlZmF1bHQ7XG5cdFx0XHRkb2N1bWVudC5vbm1vdXNldXAgPSBudWxsO1xuXHRcdFx0dGhpcy5vYmouZHJhZ2dpbmcgPSBmYWxzZTtcblx0XHRcdGlmICh0aGlzLmVuZEhvb2spIHtcblx0XHRcdFx0dGhpcy5lbmRIb29rKFxuXHRcdFx0XHRcdE51bWJlci5wYXJzZUludCh0aGlzLm9iai5yb290LnN0eWxlW3RoaXMub2JqLmhtb2RlID8gJ2xlZnQnIDogJ3JpZ2h0J10sIDEwKSxcblx0XHRcdFx0XHROdW1iZXIucGFyc2VJbnQodGhpcy5vYmoucm9vdC5zdHlsZVt0aGlzLm9iai52bW9kZSA/ICd0b3AnIDogJ2JvdHRvbSddLCAxMClcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Ly8gRU5ERklMRTogZG9tZHJhZy5qc1xuXHQvLyBTVEFSVEZJTEU6IHN0cnVjdHVyZXMuanNcblx0cGcuc3RydWN0dXJlcy5vcmlnaW5hbCA9IHt9O1xuXHRwZy5zdHJ1Y3R1cmVzLm9yaWdpbmFsLnBvcHVwTGF5b3V0ID0gKCkgPT4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHQncG9wdXBFcnJvcicsXG5cdFx0XHQncG9wdXBJbWFnZScsXG5cdFx0XHQncG9wdXBUb3BMaW5rcycsXG5cdFx0XHQncG9wdXBUaXRsZScsXG5cdFx0XHQncG9wdXBVc2VyRGF0YScsXG5cdFx0XHQncG9wdXBEYXRhJyxcblx0XHRcdCdwb3B1cE90aGVyTGlua3MnLFxuXHRcdFx0J3BvcHVwUmVkaXInLFxuXHRcdFx0Wydwb3B1cFdhcm5SZWRpcicsICdwb3B1cFJlZGlyVG9wTGlua3MnLCAncG9wdXBSZWRpclRpdGxlJywgJ3BvcHVwUmVkaXJEYXRhJywgJ3BvcHVwUmVkaXJPdGhlckxpbmtzJ10sXG5cdFx0XHQncG9wdXBNaXNjVG9vbHMnLFxuXHRcdFx0Wydwb3B1cFJlZGxpbmsnXSxcblx0XHRcdCdwb3B1cFByZVByZXZpZXdTZXAnLFxuXHRcdFx0J3BvcHVwUHJldmlldycsXG5cdFx0XHQncG9wdXBTZWNvbmRQcmV2aWV3Jyxcblx0XHRcdCdwb3B1cFByZXZpZXdNb3JlJyxcblx0XHRcdCdwb3B1cFBvc3RQcmV2aWV3Jyxcblx0XHRcdCdwb3B1cEZpeERhYicsXG5cdFx0XTtcblx0fTtcblx0cGcuc3RydWN0dXJlcy5vcmlnaW5hbC5wb3B1cFJlZGlyU3BhbnMgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdCdwb3B1cFJlZGlyJyxcblx0XHRcdCdwb3B1cFdhcm5SZWRpcicsXG5cdFx0XHQncG9wdXBSZWRpclRvcExpbmtzJyxcblx0XHRcdCdwb3B1cFJlZGlyVGl0bGUnLFxuXHRcdFx0J3BvcHVwUmVkaXJEYXRhJyxcblx0XHRcdCdwb3B1cFJlZGlyT3RoZXJMaW5rcycsXG5cdFx0XTtcblx0fTtcblx0cGcuc3RydWN0dXJlcy5vcmlnaW5hbC5wb3B1cFRpdGxlID0gKHgpID0+IHtcblx0XHRsb2coJ2RlZmF1bHRzdHJ1Y3R1cmUucG9wdXBUaXRsZScpO1xuXHRcdGlmICghZ2V0VmFsdWVPZigncG9wdXBOYXZMaW5rcycpKSB7XG5cdFx0XHRyZXR1cm4gbmF2bGlua1N0cmluZ1RvSFRNTCgnPGI+PDxtYWlubGluaz4+PC9iPicsIHguYXJ0aWNsZSwgeC5wYXJhbXMpO1xuXHRcdH1cblx0XHRyZXR1cm4gJyc7XG5cdH07XG5cdHBnLnN0cnVjdHVyZXMub3JpZ2luYWwucG9wdXBUb3BMaW5rcyA9ICh4KSA9PiB7XG5cdFx0bG9nKCdkZWZhdWx0c3RydWN0dXJlLnBvcHVwVG9wTGlua3MnKTtcblx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBOYXZMaW5rcycpKSB7XG5cdFx0XHRyZXR1cm4gbmF2TGlua3NIVE1MKHguYXJ0aWNsZSwgeC5oaW50LCB4LnBhcmFtcyk7XG5cdFx0fVxuXHRcdHJldHVybiAnJztcblx0fTtcblx0cGcuc3RydWN0dXJlcy5vcmlnaW5hbC5wb3B1cEltYWdlID0gKHgpID0+IHtcblx0XHRsb2coYG9yaWdpbmFsLnBvcHVwSW1hZ2UsIHguYXJ0aWNsZT0ke3guYXJ0aWNsZX0sIHgubmF2cG9wLmlkTnVtYmVyPSR7eC5uYXZwb3AuaWROdW1iZXJ9YCk7XG5cdFx0cmV0dXJuIGltYWdlSFRNTCh4LmFydGljbGUsIHgubmF2cG9wLmlkTnVtYmVyKTtcblx0fTtcblx0cGcuc3RydWN0dXJlcy5vcmlnaW5hbC5wb3B1cFJlZGlyVGl0bGUgPSBwZy5zdHJ1Y3R1cmVzLm9yaWdpbmFsLnBvcHVwVGl0bGU7XG5cdHBnLnN0cnVjdHVyZXMub3JpZ2luYWwucG9wdXBSZWRpclRvcExpbmtzID0gcGcuc3RydWN0dXJlcy5vcmlnaW5hbC5wb3B1cFRvcExpbmtzO1xuXHRjb25zdCBjb3B5U3RydWN0dXJlID0gKG9sZFN0cnVjdHVyZSwgbmV3U3RydWN0dXJlKSA9PiB7XG5cdFx0cGcuc3RydWN0dXJlc1tuZXdTdHJ1Y3R1cmVdID0ge307XG5cdFx0Zm9yIChjb25zdCBwcm9wIGluIHBnLnN0cnVjdHVyZXNbb2xkU3RydWN0dXJlXSkge1xuXHRcdFx0aWYgKCFPYmplY3QuaGFzT3duKHBnLnN0cnVjdHVyZXNbb2xkU3RydWN0dXJlXSwgcHJvcCkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRwZy5zdHJ1Y3R1cmVzW25ld1N0cnVjdHVyZV1bcHJvcF0gPSBwZy5zdHJ1Y3R1cmVzW29sZFN0cnVjdHVyZV1bcHJvcF07XG5cdFx0fVxuXHR9O1xuXHRjb3B5U3RydWN0dXJlKCdvcmlnaW5hbCcsICdub3N0YWxnaWEnKTtcblx0cGcuc3RydWN0dXJlcy5ub3N0YWxnaWEucG9wdXBUb3BMaW5rcyA9ICh4KSA9PiB7XG5cdFx0bGV0IHN0ciA9ICcnO1xuXHRcdHN0ciArPSAnPGI+PDxtYWlubGlua3xzaG9ydGN1dD0gPj48L2I+Jztcblx0XHQvLyB1c2VyIGxpbmtzXG5cdFx0Ly8gY29udHJpYnMgLSBsb2cgLSBjb3VudCAtIGVtYWlsIC0gYmxvY2tcblx0XHQvLyBjb3VudCBvbmx5IGlmIGFwcGxpY2FibGU7IGJsb2NrIG9ubHkgaWYgcG9wdXBBZG1pbkxpbmtzXG5cdFx0c3RyICs9ICdpZih1c2VyKXs8YnI+PDxjb250cmlic3xzaG9ydGN1dD1jPj4nO1xuXHRcdHN0ciArPSAnaWYod2lraW1lZGlhKXsqPDxjb3VudHxzaG9ydGN1dD0jPj59Jztcblx0XHRzdHIgKz0gJ2lmKGlwdXNlcil7fWVsc2V7Kjw8ZW1haWx8c2hvcnRjdXQ9RT4+fWlmKGFkbWluKXsqPDxibG9ja3xzaG9ydGN1dD1iPj59fSc7XG5cdFx0Ly8gZWRpdGluZyBsaW5rc1xuXHRcdC8vIHRhbGtwYWdlICAgLT4gZWRpdHxuZXcgLSBoaXN0b3J5IC0gdW58d2F0Y2ggLSBhcnRpY2xlfGVkaXRcblx0XHQvLyBvdGhlciBwYWdlIC0+IGVkaXQgLSBoaXN0b3J5IC0gdW58d2F0Y2ggLSB0YWxrfGVkaXR8bmV3XG5cdFx0Y29uc3QgZWRpdHN0ciA9ICc8PGVkaXR8c2hvcnRjdXQ9ZT4+Jztcblx0XHRjb25zdCBlZGl0T2xkaWRTdHIgPSBgaWYob2xkaWQpezw8ZWRpdE9sZHxzaG9ydGN1dD1lPj58PDxyZXZlcnR8c2hvcnRjdXQ9dnxydj4+fDw8ZWRpdHxjdXI+Pn1lbHNleyR7ZWRpdHN0cn19YDtcblx0XHRjb25zdCBoaXN0b3J5c3RyID0gJzw8aGlzdG9yeXxzaG9ydGN1dD1oPj4nO1xuXHRcdGNvbnN0IHdhdGNoc3RyID0gJzw8dW53YXRjaHx1bndhdGNoU2hvcnQ+Pnw8PHdhdGNofHNob3J0Y3V0PXd8d2F0Y2hUaGluZ3k+Pic7XG5cdFx0c3RyICs9XG5cdFx0XHRgPGJyPmlmKHRhbGspeyR7ZWRpdE9sZGlkU3RyfXw8PG5ld3xzaG9ydGN1dD0rPj5gICtcblx0XHRcdGAqJHtoaXN0b3J5c3RyfSoke3dhdGNoc3RyfSpgICtcblx0XHRcdCc8Yj48PGFydGljbGV8c2hvcnRjdXQ9YT4+PC9iPnw8PGVkaXRBcnRpY2xlfGVkaXQ+PicgK1xuXHRcdFx0YH1lbHNleyR7XG5cdFx0XHRcdC8vIG5vdCBhIHRhbGsgcGFnZVxuXHRcdFx0XHRlZGl0T2xkaWRTdHJcblx0XHRcdH0qJHtoaXN0b3J5c3RyfSoke3dhdGNoc3RyfSpgICtcblx0XHRcdCc8Yj48PHRhbGt8c2hvcnRjdXQ9dD4+PC9iPnw8PGVkaXRUYWxrfGVkaXQ+Pnw8PG5ld1RhbGt8c2hvcnRjdXQ9K3xuZXc+Pn0nO1xuXHRcdC8vIG1pc2MgbGlua3Ncblx0XHRzdHIgKz0gJzxicj48PHdoYXRMaW5rc0hlcmV8c2hvcnRjdXQ9bD4+Kjw8cmVsYXRlZENoYW5nZXN8c2hvcnRjdXQ9cj4+Jztcblx0XHRzdHIgKz0gJ2lmKGFkbWluKXs8YnI+fWVsc2V7Kn08PG1vdmV8c2hvcnRjdXQ9bT4+Jztcblx0XHQvLyBhZG1pbiBsaW5rc1xuXHRcdHN0ciArPVxuXHRcdFx0J2lmKGFkbWluKXsqPDx1bnByb3RlY3R8dW5wcm90ZWN0U2hvcnQ+Pnw8PHByb3RlY3R8c2hvcnRjdXQ9cD4+KicgK1xuXHRcdFx0Jzw8dW5kZWxldGV8dW5kZWxldGVTaG9ydD4+fDw8ZGVsZXRlfHNob3J0Y3V0PWQ+Pn0nO1xuXHRcdHJldHVybiBuYXZsaW5rU3RyaW5nVG9IVE1MKHN0ciwgeC5hcnRpY2xlLCB4LnBhcmFtcyk7XG5cdH07XG5cdHBnLnN0cnVjdHVyZXMubm9zdGFsZ2lhLnBvcHVwUmVkaXJUb3BMaW5rcyA9IHBnLnN0cnVjdHVyZXMubm9zdGFsZ2lhLnBvcHVwVG9wTGlua3M7XG5cdC8qKiAtLSBmYW5jeSAtLSAqL1xuXHRjb3B5U3RydWN0dXJlKCdvcmlnaW5hbCcsICdmYW5jeScpO1xuXHRwZy5zdHJ1Y3R1cmVzLmZhbmN5LnBvcHVwVGl0bGUgPSAoeCkgPT4ge1xuXHRcdHJldHVybiBuYXZsaW5rU3RyaW5nVG9IVE1MKCc8Zm9udCBzaXplPSswPjw8bWFpbmxpbms+PjwvZm9udD4nLCB4LmFydGljbGUsIHgucGFyYW1zKTtcblx0fTtcblx0cGcuc3RydWN0dXJlcy5mYW5jeS5wb3B1cFRvcExpbmtzID0gKHgpID0+IHtcblx0XHRjb25zdCBoaXN0ID0gJzw8aGlzdG9yeXxzaG9ydGN1dD1ofGhpc3Q+Pnw8PGxhc3RFZGl0fHNob3J0Y3V0PS98bGFzdD4+fDw8ZWRpdG9yc3xzaG9ydGN1dD1FfGVkcz4+Jztcblx0XHRjb25zdCB3YXRjaCA9ICc8PHVud2F0Y2h8dW53YXRjaFNob3J0Pj58PDx3YXRjaHxzaG9ydGN1dD13fHdhdGNoVGhpbmd5Pj4nO1xuXHRcdGNvbnN0IG1vdmUgPSAnPDxtb3ZlfHNob3J0Y3V0PW18bW92ZT4+Jztcblx0XHRyZXR1cm4gbmF2bGlua1N0cmluZ1RvSFRNTChcblx0XHRcdCdpZih0YWxrKXsnICtcblx0XHRcdFx0YDw8ZWRpdHxzaG9ydGN1dD1lPj58PDxuZXd8c2hvcnRjdXQ9K3wrPj4qJHtoaXN0fSpgICtcblx0XHRcdFx0Jzw8YXJ0aWNsZXxzaG9ydGN1dD1hPj58PDxlZGl0QXJ0aWNsZXxlZGl0Pj4nICtcblx0XHRcdFx0YCoke3dhdGNofSoke21vdmV9fWVsc2V7PDxlZGl0fHNob3J0Y3V0PWU+Pioke2hpc3R9Kjw8dGFsa3xzaG9ydGN1dD10fD4+fDw8ZWRpdFRhbGt8ZWRpdD4+fDw8bmV3VGFsa3xzaG9ydGN1dD0rfG5ldz4+YCArXG5cdFx0XHRcdGAqJHt3YXRjaH0qJHttb3ZlfX08YnI+YCxcblx0XHRcdHguYXJ0aWNsZSxcblx0XHRcdHgucGFyYW1zXG5cdFx0KTtcblx0fTtcblx0cGcuc3RydWN0dXJlcy5mYW5jeS5wb3B1cE90aGVyTGlua3MgPSAoeCkgPT4ge1xuXHRcdGNvbnN0IGFkbWluID1cblx0XHRcdCc8PHVucHJvdGVjdHx1bnByb3RlY3RTaG9ydD4+fDw8cHJvdGVjdHxzaG9ydGN1dD1wPj4qPDx1bmRlbGV0ZXx1bmRlbGV0ZVNob3J0Pj58PDxkZWxldGV8c2hvcnRjdXQ9ZHxkZWw+Pic7XG5cdFx0bGV0IHVzZXIgPSAnPDxjb250cmlic3xzaG9ydGN1dD1jPj5pZih3aWtpbWVkaWEpe3w8PGNvdW50fHNob3J0Y3V0PSN8Iz4+fSc7XG5cdFx0dXNlciArPSBgaWYoaXB1c2VyKXt8PDxhcmluPj59ZWxzZXsqPDxlbWFpbHxzaG9ydGN1dD1FfCR7cG9wdXBTdHJpbmcoXG5cdFx0XHQnZW1haWwnXG5cdFx0KX0+Pn1pZihhZG1pbil7Kjw8YmxvY2t8c2hvcnRjdXQ9Yj4+fWA7XG5cdFx0Y29uc3Qgbm9ybWFsID0gJzw8d2hhdExpbmtzSGVyZXxzaG9ydGN1dD1sfGxpbmtzIGhlcmU+Pio8PHJlbGF0ZWRDaGFuZ2VzfHNob3J0Y3V0PXJ8cmVsYXRlZD4+Jztcblx0XHRyZXR1cm4gbmF2bGlua1N0cmluZ1RvSFRNTChcblx0XHRcdGA8YnI+aWYodXNlcil7JHt1c2VyfSp9aWYoYWRtaW4peyR7YWRtaW59aWYodXNlcil7PGJyPn1lbHNleyp9fSR7bm9ybWFsfWAsXG5cdFx0XHR4LmFydGljbGUsXG5cdFx0XHR4LnBhcmFtc1xuXHRcdCk7XG5cdH07XG5cdHBnLnN0cnVjdHVyZXMuZmFuY3kucG9wdXBSZWRpclRpdGxlID0gcGcuc3RydWN0dXJlcy5mYW5jeS5wb3B1cFRpdGxlO1xuXHRwZy5zdHJ1Y3R1cmVzLmZhbmN5LnBvcHVwUmVkaXJUb3BMaW5rcyA9IHBnLnN0cnVjdHVyZXMuZmFuY3kucG9wdXBUb3BMaW5rcztcblx0cGcuc3RydWN0dXJlcy5mYW5jeS5wb3B1cFJlZGlyT3RoZXJMaW5rcyA9IHBnLnN0cnVjdHVyZXMuZmFuY3kucG9wdXBPdGhlckxpbmtzO1xuXHQvKiogLS0gZmFuY3kyIC0tICovXG5cdC8vIGhhY2sgZm9yIE1hY0d5dmVyTWFnaWNcblx0Y29weVN0cnVjdHVyZSgnZmFuY3knLCAnZmFuY3kyJyk7XG5cdHBnLnN0cnVjdHVyZXMuZmFuY3kyLnBvcHVwVG9wTGlua3MgPSAvLyBoYWNrIG91dCB0aGUgPGJyPiBhdCB0aGUgZW5kIGFuZCBwdXQgb25lIGF0IHRoZSBiZWdpbm5pbmdcblx0XHQoeCkgPT4ge1xuXHRcdFx0cmV0dXJuIGA8YnI+JHtwZy5zdHJ1Y3R1cmVzLmZhbmN5LnBvcHVwVG9wTGlua3MoeCkucmVwbGFjZSgvPGJyPiQvaSwgJycpfWA7XG5cdFx0fTtcblx0cGcuc3RydWN0dXJlcy5mYW5jeTIucG9wdXBMYXlvdXQgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdCdwb3B1cEVycm9yJyxcblx0XHRcdCdwb3B1cEltYWdlJyxcblx0XHRcdCdwb3B1cFRpdGxlJyxcblx0XHRcdCdwb3B1cFVzZXJEYXRhJyxcblx0XHRcdCdwb3B1cERhdGEnLFxuXHRcdFx0J3BvcHVwVG9wTGlua3MnLFxuXHRcdFx0J3BvcHVwT3RoZXJMaW5rcycsXG5cdFx0XHQncG9wdXBSZWRpcicsXG5cdFx0XHRbJ3BvcHVwV2FyblJlZGlyJywgJ3BvcHVwUmVkaXJUb3BMaW5rcycsICdwb3B1cFJlZGlyVGl0bGUnLCAncG9wdXBSZWRpckRhdGEnLCAncG9wdXBSZWRpck90aGVyTGlua3MnXSxcblx0XHRcdCdwb3B1cE1pc2NUb29scycsXG5cdFx0XHRbJ3BvcHVwUmVkbGluayddLFxuXHRcdFx0J3BvcHVwUHJlUHJldmlld1NlcCcsXG5cdFx0XHQncG9wdXBQcmV2aWV3Jyxcblx0XHRcdCdwb3B1cFNlY29uZFByZXZpZXcnLFxuXHRcdFx0J3BvcHVwUHJldmlld01vcmUnLFxuXHRcdFx0J3BvcHVwUG9zdFByZXZpZXcnLFxuXHRcdFx0J3BvcHVwRml4RGFiJyxcblx0XHRdO1xuXHR9O1xuXHQvKiogLS0gbWVudXMgLS0gKi9cblx0Y29weVN0cnVjdHVyZSgnb3JpZ2luYWwnLCAnbWVudXMnKTtcblx0cGcuc3RydWN0dXJlcy5tZW51cy5wb3B1cExheW91dCA9ICgpID0+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0J3BvcHVwRXJyb3InLFxuXHRcdFx0J3BvcHVwSW1hZ2UnLFxuXHRcdFx0J3BvcHVwVG9wTGlua3MnLFxuXHRcdFx0J3BvcHVwVGl0bGUnLFxuXHRcdFx0J3BvcHVwT3RoZXJMaW5rcycsXG5cdFx0XHQncG9wdXBSZWRpcicsXG5cdFx0XHRbJ3BvcHVwV2FyblJlZGlyJywgJ3BvcHVwUmVkaXJUb3BMaW5rcycsICdwb3B1cFJlZGlyVGl0bGUnLCAncG9wdXBSZWRpckRhdGEnLCAncG9wdXBSZWRpck90aGVyTGlua3MnXSxcblx0XHRcdCdwb3B1cFVzZXJEYXRhJyxcblx0XHRcdCdwb3B1cERhdGEnLFxuXHRcdFx0J3BvcHVwTWlzY1Rvb2xzJyxcblx0XHRcdFsncG9wdXBSZWRsaW5rJ10sXG5cdFx0XHQncG9wdXBQcmVQcmV2aWV3U2VwJyxcblx0XHRcdCdwb3B1cFByZXZpZXcnLFxuXHRcdFx0J3BvcHVwU2Vjb25kUHJldmlldycsXG5cdFx0XHQncG9wdXBQcmV2aWV3TW9yZScsXG5cdFx0XHQncG9wdXBQb3N0UHJldmlldycsXG5cdFx0XHQncG9wdXBGaXhEYWInLFxuXHRcdF07XG5cdH07XG5cdHBnLnN0cnVjdHVyZXMubWVudXMucG9wdXBUb3BMaW5rcyA9ICh4LCBzaG9ydGVyKSA9PiB7XG5cdFx0Ly8gRklYTUUgbWF5YmUgdGhpcyBzdHVmZiBzaG91bGQgYmUgY2FjaGVkXG5cdFx0Y29uc3QgcyA9IFtdO1xuXHRcdGNvbnN0IGRyb3BkaXYgPSAnPGRpdiBjbGFzcz1cInBvcHVwX2Ryb3BcIj4nO1xuXHRcdGNvbnN0IGVuZGRpdiA9ICc8L2Rpdj4nO1xuXHRcdGxldCBoaXN0ID0gJzw8aGlzdG9yeXxzaG9ydGN1dD1oPj4nO1xuXHRcdGlmICghc2hvcnRlcikge1xuXHRcdFx0aGlzdCA9IGA8bWVudXJvdz4ke2hpc3R9fDw8aGlzdG9yeWZlZWR8cnNzPj58PDxlZGl0b3JzfHNob3J0Y3V0PUU+PjwvbWVudXJvdz5gO1xuXHRcdH1cblx0XHRjb25zdCBsYXN0ZWRpdCA9ICc8PGxhc3RFZGl0fHNob3J0Y3V0PS98c2hvdyBsYXN0IGVkaXQ+Pic7XG5cdFx0Y29uc3QgdGhhbmsgPSAnaWYoZGlmZil7PDx0aGFua3xzZW5kIHRoYW5rcz4+fSc7XG5cdFx0Y29uc3QganNIaXN0b3J5ID0gJzw8bGFzdENvbnRyaWJ8bGFzdCBzZXQgb2YgZWRpdHM+Pjw8c2luY2VNZXxjaGFuZ2VzIHNpbmNlIG1pbmU+Pic7XG5cdFx0Y29uc3QgbGlua3NoZXJlID0gJzw8d2hhdExpbmtzSGVyZXxzaG9ydGN1dD1sfHdoYXQgbGlua3MgaGVyZT4+Jztcblx0XHRjb25zdCByZWxhdGVkID0gJzw8cmVsYXRlZENoYW5nZXN8c2hvcnRjdXQ9cnxyZWxhdGVkIGNoYW5nZXM+Pic7XG5cdFx0Y29uc3Qgc2VhcmNoID0gJzxtZW51cm93Pjw8c2VhcmNofHNob3J0Y3V0PXM+PjwvbWVudXJvdz4nO1xuXHRcdGNvbnN0IHdhdGNoID0gJzxtZW51cm93Pjw8dW53YXRjaHx1bndhdGNoU2hvcnQ+Pnw8PHdhdGNofHNob3J0Y3V0PXd8d2F0Y2hUaGluZ3k+PjwvbWVudXJvdz4nO1xuXHRcdGNvbnN0IHByb3RlY3QgPSAnPG1lbnVyb3c+PDx1bnByb3RlY3R8dW5wcm90ZWN0U2hvcnQ+Pnw8PHByb3RlY3R8c2hvcnRjdXQ9cD4+fDw8cHJvdGVjdGxvZ3xsb2c+PjwvbWVudXJvdz4nO1xuXHRcdGNvbnN0IGRlbCA9ICc8bWVudXJvdz48PHVuZGVsZXRlfHVuZGVsZXRlU2hvcnQ+Pnw8PGRlbGV0ZXxzaG9ydGN1dD1kPj58PDxkZWxldGVsb2d8bG9nPj48L21lbnVyb3c+Jztcblx0XHRjb25zdCBtb3ZlID0gJzw8bW92ZXxzaG9ydGN1dD1tfG1vdmUgcGFnZT4+Jztcblx0XHRjb25zdCBudWxsUHVyZ2UgPSAnPG1lbnVyb3c+PDxudWxsRWRpdHxzaG9ydGN1dD1ufG51bGwgZWRpdD4+fDw8cHVyZ2V8c2hvcnRjdXQ9UD4+PC9tZW51cm93Pic7XG5cdFx0Y29uc3Qgdmlld09wdGlvbnMgPSAnPG1lbnVyb3c+PDx2aWV3fHNob3J0Y3V0PXY+Pnw8PHJlbmRlcnxzaG9ydGN1dD1TPj58PDxyYXc+PjwvbWVudXJvdz4nO1xuXHRcdGNvbnN0IGVkaXRSb3cgPVxuXHRcdFx0J2lmKG9sZGlkKXsnICtcblx0XHRcdCc8bWVudXJvdz48PGVkaXR8c2hvcnRjdXQ9ZT4+fDw8ZWRpdE9sZHxzaG9ydGN1dD1lfHRoaXMmbmJzcDtyZXZpc2lvbj4+PC9tZW51cm93PicgK1xuXHRcdFx0JzxtZW51cm93Pjw8cmV2ZXJ0fHNob3J0Y3V0PXY+Pnw8PHVuZG8+PjwvbWVudXJvdz4nICtcblx0XHRcdCd9ZWxzZXs8PGVkaXR8c2hvcnRjdXQ9ZT4+fSc7XG5cdFx0Y29uc3QgbWFya1BhdHJvbGxlZCA9ICdpZihyY2lkKXs8PG1hcmtwYXRyb2xsZWR8bWFyayBwYXRyb2xsZWQ+Pn0nO1xuXHRcdGNvbnN0IG5ld1RvcGljID0gJ2lmKHRhbGspezw8bmV3fHNob3J0Y3V0PSt8bmV3IHRvcGljPj59Jztcblx0XHRjb25zdCBwcm90ZWN0RGVsZXRlID0gYGlmKGFkbWluKXske3Byb3RlY3R9JHtkZWx9fWA7XG5cdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwQWN0aW9uc01lbnUnKSkge1xuXHRcdFx0cy5wdXNoKGA8PG1haW5saW5rPj4qJHtkcm9wZGl2fSR7bWVudVRpdGxlKCdhY3Rpb25zJyl9YCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHMucHVzaChgJHtkcm9wZGl2fTw8bWFpbmxpbms+PmApO1xuXHRcdH1cblx0XHRzLnB1c2goJzxtZW51PicsIGVkaXRSb3cgKyBtYXJrUGF0cm9sbGVkICsgbmV3VG9waWMgKyBoaXN0ICsgbGFzdGVkaXQgKyB0aGFuayk7XG5cdFx0aWYgKCFzaG9ydGVyKSB7XG5cdFx0XHRzLnB1c2goanNIaXN0b3J5KTtcblx0XHR9XG5cdFx0cy5wdXNoKG1vdmUgKyBsaW5rc2hlcmUgKyByZWxhdGVkKTtcblx0XHRpZiAoIXNob3J0ZXIpIHtcblx0XHRcdHMucHVzaChudWxsUHVyZ2UgKyBzZWFyY2gpO1xuXHRcdH1cblx0XHRpZiAoIXNob3J0ZXIpIHtcblx0XHRcdHMucHVzaCh2aWV3T3B0aW9ucyk7XG5cdFx0fVxuXHRcdHMucHVzaChcblx0XHRcdGA8aHI+JHt3YXRjaH0ke3Byb3RlY3REZWxldGV9YCxcblx0XHRcdCc8aHI+JyArXG5cdFx0XHRcdCdpZih0YWxrKXs8PGFydGljbGV8c2hvcnRjdXQ9YXx2aWV3IGFydGljbGU+Pjw8ZWRpdEFydGljbGV8ZWRpdCBhcnRpY2xlPj59JyArXG5cdFx0XHRcdCdlbHNlezw8dGFsa3xzaG9ydGN1dD10fHRhbGsgcGFnZT4+PDxlZGl0VGFsa3xlZGl0IHRhbGs+PicgK1xuXHRcdFx0XHRgPDxuZXdUYWxrfHNob3J0Y3V0PSt8bmV3IHRvcGljPj59PC9tZW51PiR7ZW5kZGl2fWBcblx0XHQpO1xuXHRcdC8vIHVzZXIgbWVudSBzdGFydHMgaGVyZVxuXHRcdGNvbnN0IGVtYWlsID0gJzw8ZW1haWx8c2hvcnRjdXQ9RXxlbWFpbCB1c2VyPj4nO1xuXHRcdGNvbnN0IGNvbnRyaWJzID1cblx0XHRcdCdpZih3aWtpbWVkaWEpezxtZW51cm93Pn08PGNvbnRyaWJzfHNob3J0Y3V0PWN8Y29udHJpYnV0aW9ucz4+aWYod2lraW1lZGlhKXs8L21lbnVyb3c+fScgK1xuXHRcdFx0J2lmKGFkbWluKXs8bWVudXJvdz48PGRlbGV0ZWRDb250cmlicz4+PC9tZW51cm93Pn0nO1xuXHRcdHMucHVzaChcblx0XHRcdGBpZih1c2VyKXsqJHtkcm9wZGl2fSR7bWVudVRpdGxlKCd1c2VyJyl9YCxcblx0XHRcdCc8bWVudT4nLFxuXHRcdFx0JzxtZW51cm93Pjw8dXNlclBhZ2V8c2hvcnRjdXQ9dXx1c2VyJm5ic3A7cGFnZT4+fDw8dXNlclNwYWNlfHNwYWNlPj48L21lbnVyb3c+Jyxcblx0XHRcdCc8PHVzZXJUYWxrfHNob3J0Y3V0PXR8dXNlciB0YWxrPj48PGVkaXRVc2VyVGFsa3xlZGl0IHVzZXIgdGFsaz4+JyArXG5cdFx0XHRcdCc8PG5ld1VzZXJUYWxrfHNob3J0Y3V0PSt8bGVhdmUgY29tbWVudD4+J1xuXHRcdCk7XG5cdFx0aWYgKHNob3J0ZXIpIHtcblx0XHRcdHMucHVzaChgaWYoaXB1c2VyKXt9ZWxzZXske2VtYWlsfX1gKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cy5wdXNoKGBpZihpcHVzZXIpezw8YXJpbj4+fWVsc2V7JHtlbWFpbH19YCk7XG5cdFx0fVxuXHRcdHMucHVzaChcblx0XHRcdGA8aHI+JHtjb250cmlic308PHVzZXJsb2d8c2hvcnRjdXQ9THx1c2VyIGxvZz4+YCxcblx0XHRcdCdpZih3aWtpbWVkaWEpezw8Y291bnR8c2hvcnRjdXQ9I3xlZGl0IGNvdW50ZXI+Pn0nLFxuXHRcdFx0J2lmKGFkbWluKXs8bWVudXJvdz48PHVuYmxvY2t8dW5ibG9ja1Nob3J0Pj58PDxibG9ja3xzaG9ydGN1dD1ifGJsb2NrIHVzZXI+PjwvbWVudXJvdz59Jyxcblx0XHRcdCc8PGJsb2NrbG9nfHNob3J0Y3V0PUJ8YmxvY2sgbG9nPj4nLFxuXHRcdFx0YDwvbWVudT4ke2VuZGRpdn19YFxuXHRcdCk7XG5cdFx0Ly8gcG9wdXBzIG1lbnUgc3RhcnRzIGhlcmVcblx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBTZXR1cE1lbnUnKSAmJiAheC5uYXZwb3AuaGFzUG9wdXBNZW51IC8qIEZJWE1FOiBoYWNrICovKSB7XG5cdFx0XHR4Lm5hdnBvcC5oYXNQb3B1cE1lbnUgPSB0cnVlO1xuXHRcdFx0cy5wdXNoKFxuXHRcdFx0XHRgKiR7ZHJvcGRpdn0ke21lbnVUaXRsZSgncG9wdXBzTWVudScpfTxtZW51PmAsXG5cdFx0XHRcdCc8PHRvZ2dsZVByZXZpZXdzfHRvZ2dsZSBwcmV2aWV3cz4+Jyxcblx0XHRcdFx0Jzw8cHVyZ2VQb3B1cHN8cmVzZXQ+PicsXG5cdFx0XHRcdCc8PGRpc2FibGVQb3B1cHN8ZGlzYWJsZT4+Jyxcblx0XHRcdFx0YDwvbWVudT4ke2VuZGRpdn1gXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRyZXR1cm4gbmF2bGlua1N0cmluZ1RvSFRNTChzLmpvaW4oJycpLCB4LmFydGljbGUsIHgucGFyYW1zKTtcblx0fTtcblx0Y29uc3QgbWVudVRpdGxlID0gKHMpID0+IHtcblx0XHRyZXR1cm4gYDxhIGhyZWY9XCIjXCIgbm9Qb3B1cD0xPiR7cG9wdXBTdHJpbmcocyl9PC9hPmA7XG5cdH07XG5cdHBnLnN0cnVjdHVyZXMubWVudXMucG9wdXBSZWRpclRpdGxlID0gcGcuc3RydWN0dXJlcy5tZW51cy5wb3B1cFRpdGxlO1xuXHRwZy5zdHJ1Y3R1cmVzLm1lbnVzLnBvcHVwUmVkaXJUb3BMaW5rcyA9IHBnLnN0cnVjdHVyZXMubWVudXMucG9wdXBUb3BMaW5rcztcblx0Y29weVN0cnVjdHVyZSgnbWVudXMnLCAnc2hvcnRtZW51cycpO1xuXHRwZy5zdHJ1Y3R1cmVzLnNob3J0bWVudXMucG9wdXBUb3BMaW5rcyA9ICh4KSA9PiB7XG5cdFx0cmV0dXJuIHBnLnN0cnVjdHVyZXMubWVudXMucG9wdXBUb3BMaW5rcyh4LCB0cnVlKTtcblx0fTtcblx0cGcuc3RydWN0dXJlcy5zaG9ydG1lbnVzLnBvcHVwUmVkaXJUb3BMaW5rcyA9IHBnLnN0cnVjdHVyZXMuc2hvcnRtZW51cy5wb3B1cFRvcExpbmtzO1xuXHRwZy5zdHJ1Y3R1cmVzLmxpdGUgPSB7fTtcblx0cGcuc3RydWN0dXJlcy5saXRlLnBvcHVwTGF5b3V0ID0gKCkgPT4ge1xuXHRcdHJldHVybiBbJ3BvcHVwVGl0bGUnLCAncG9wdXBQcmV2aWV3J107XG5cdH07XG5cdHBnLnN0cnVjdHVyZXMubGl0ZS5wb3B1cFRpdGxlID0gKHgpID0+IHtcblx0XHRsb2coYCR7eC5hcnRpY2xlfTogc3RydWN0dXJlcy5saXRlLnBvcHVwVGl0bGVgKTtcblx0XHQvLyByZXR1cm4gbmF2bGlua1N0cmluZ1RvSFRNTCgnPGI+PDxtYWlubGluaz4+PC9iPicseC5hcnRpY2xlLHgucGFyYW1zKTtcblx0XHRyZXR1cm4gYDxkaXY+PHNwYW4gY2xhc3M9XCJwb3B1cF9tYWlubGlua1wiPjxiPiR7eC5hcnRpY2xlLnRvU3RyaW5nKCl9PC9iPjwvc3Bhbj48L2Rpdj5gO1xuXHR9O1xuXHQvLyBFTkRGSUxFOiBzdHJ1Y3R1cmVzLmpzXG5cdC8vIFNUQVJURklMRTogYXV0b2VkaXQuanNcblx0Y29uc3Qgc3Vic3RpdHV0ZSA9IChkYXRhLCBjbWRCb2R5KSA9PiB7XG5cdFx0Ly8gbXcubm90aWZ5KGBzdWJcXG5mcm9tOiAke2NtZEJvZHkuZnJvbX1cXG50bzogJHtjbWRCb2R5LnRvfVxcbmZsYWdzOiAke2NtZEJvZHkuZmxhZ3N9YCwge3RhZzogJ3BvcHVwcycsIHR5cGU6ICd3YXJuJ30pO1xuXHRcdGNvbnN0IGZyb21SZSA9IG5ldyBSZWdFeHAoY21kQm9keS5mcm9tLCBjbWRCb2R5LmZsYWdzKTtcblx0XHRyZXR1cm4gZGF0YS5yZXBsYWNlKGZyb21SZSwgY21kQm9keS50byk7XG5cdH07XG5cdGNvbnN0IGV4ZWNDbWRzID0gKGRhdGEsIGNtZExpc3QpID0+IHtcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgY21kTGlzdCkge1xuXHRcdFx0ZGF0YSA9IGVsZW1lbnQuYWN0aW9uKGRhdGEsIGVsZW1lbnQpO1xuXHRcdH1cblx0XHRyZXR1cm4gZGF0YTtcblx0fTtcblx0Y29uc3QgcGFyc2VDbWQgPSBmdW5jdGlvbiBwYXJzZUNtZChzdHIpIHtcblx0XHQvLyByZXR1cm5zIGEgbGlzdCBvZiBjb21tYW5kc1xuXHRcdGlmIChzdHIubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXHRcdGxldCBwID0gZmFsc2U7XG5cdFx0c3dpdGNoIChzdHIuY2hhckF0KDApKSB7XG5cdFx0XHRjYXNlICdzJzpcblx0XHRcdFx0cCA9IHBhcnNlU3Vic3RpdHV0ZShzdHIpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKHApIHtcblx0XHRcdHJldHVybiBbcCwgcGFyc2VDbWQocC5yZW1haW5kZXIpXTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXHQvLyBGSVhNRTogT25seSB1c2VkIG9uY2UgaGVyZSwgY29uZnVzaW5nIHdpdGggbmF0aXZlIChhbmQgbW9yZSB3aWRlbHktdXNlZCkgdW5lc2NhcGUsIHNob3VsZCBwcm9iYWJseSBiZSByZXBsYWNlZFxuXHQvLyBUaGVuIGFnYWluLCB1bmVzY2FwZSBpcyBzZW1pLXNvZnQtZGVwcmVjYXRlZCwgc28gd2Ugc2hvdWxkIGxvb2sgaW50byByZXBsYWNpbmcgdGhhdCB0b29cblx0Y29uc3QgdW5Fc2NhcGUgPSAoc3RyLCBzZXApID0+IHtcblx0XHRyZXR1cm4gc3RyXG5cdFx0XHQuc3BsaXQoJ1xcXFxcXFxcJylcblx0XHRcdC5qb2luKCdcXFxcJylcblx0XHRcdC5zcGxpdChgXFxcXCR7c2VwfWApXG5cdFx0XHQuam9pbihzZXApXG5cdFx0XHQuc3BsaXQoU3RyaW5nLnJhd2BcXG5gKVxuXHRcdFx0LmpvaW4oJ1xcbicpO1xuXHR9O1xuXHRjb25zdCBwYXJzZVN1YnN0aXR1dGUgPSAoc3RyKSA9PiB7XG5cdFx0Ly8gdGFrZXMgYSBzdHJpbmcgbGlrZSBzL2EvYi9mbGFncztvdGhlcmNtZHMgYW5kIHBhcnNlcyBpdFxuXHRcdGxldCBmcm9tO1xuXHRcdGxldCB0bztcblx0XHRsZXQgZmxhZ3M7XG5cdFx0bGV0IHRtcDtcblx0XHRpZiAoc3RyLmxlbmd0aCA8IDQpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0Y29uc3Qgc2VwID0gc3RyLmNoYXJBdCgxKTtcblx0XHRzdHIgPSBzdHIuc2xpY2UoMik7XG5cdFx0dG1wID0gc2tpcE92ZXIoc3RyLCBzZXApO1xuXHRcdGlmICh0bXApIHtcblx0XHRcdGZyb20gPSB0bXAuc2VnbWVudDtcblx0XHRcdHN0ciA9IHRtcC5yZW1haW5kZXI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0dG1wID0gc2tpcE92ZXIoc3RyLCBzZXApO1xuXHRcdGlmICh0bXApIHtcblx0XHRcdHRvID0gdG1wLnNlZ21lbnQ7XG5cdFx0XHRzdHIgPSB0bXAucmVtYWluZGVyO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGZsYWdzID0gJyc7XG5cdFx0aWYgKHN0ci5sZW5ndGggPiAwKSB7XG5cdFx0XHR0bXAgPSBza2lwT3ZlcihzdHIsICc7JykgfHwgc2tpcFRvRW5kKHN0ciwgJzsnKTtcblx0XHRcdGlmICh0bXApIHtcblx0XHRcdFx0ZmxhZ3MgPSB0bXAuc2VnbWVudDtcblx0XHRcdFx0c3RyID0gdG1wLnJlbWFpbmRlcjtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdGFjdGlvbjogc3Vic3RpdHV0ZSxcblx0XHRcdGZyb20sXG5cdFx0XHR0byxcblx0XHRcdGZsYWdzLFxuXHRcdFx0cmVtYWluZGVyOiBzdHIsXG5cdFx0fTtcblx0fTtcblx0Y29uc3Qgc2tpcE92ZXIgPSAoc3RyLCBzZXApID0+IHtcblx0XHRjb25zdCBlbmRTZWdtZW50ID0gZmluZE5leHQoc3RyLCBzZXApO1xuXHRcdGlmIChlbmRTZWdtZW50IDwgMCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRjb25zdCBzZWdtZW50ID0gdW5Fc2NhcGUoc3RyLnNsaWNlKDAsIE1hdGgubWF4KDAsIGVuZFNlZ21lbnQpKSwgc2VwKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2VnbWVudCxcblx0XHRcdHJlbWFpbmRlcjogc3RyLnNsaWNlKE1hdGgubWF4KDAsIGVuZFNlZ21lbnQgKyAxKSksXG5cdFx0fTtcblx0fTtcblx0Y29uc3Qgc2tpcFRvRW5kID0gKHN0ciwgX3NlcCkgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRzZWdtZW50OiBzdHIsXG5cdFx0XHRyZW1haW5kZXI6ICcnLFxuXHRcdH07XG5cdH07XG5cdGNvbnN0IGZpbmROZXh0ID0gKHN0ciwgY2gpID0+IHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuXHRcdFx0aWYgKHN0ci5jaGFyQXQoaSkgPT09ICdcXFxcJykge1xuXHRcdFx0XHRpICs9IDI7XG5cdFx0XHR9XG5cdFx0XHRpZiAoc3RyLmNoYXJBdChpKSA9PT0gY2gpIHtcblx0XHRcdFx0cmV0dXJuIGk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiAtMTtcblx0fTtcblx0Y29uc3Qgc2V0Q2hlY2tib3ggPSAocGFyYW0sIGJveCkgPT4ge1xuXHRcdGNvbnN0IHZhbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZShwYXJhbSk7XG5cdFx0aWYgKHZhbCkge1xuXHRcdFx0c3dpdGNoICh2YWwpIHtcblx0XHRcdFx0Y2FzZSAnMSc6XG5cdFx0XHRcdGNhc2UgJ3llcyc6XG5cdFx0XHRcdGNhc2UgJ3RydWUnOlxuXHRcdFx0XHRcdGJveC5jaGVja2VkID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnMCc6XG5cdFx0XHRcdGNhc2UgJ25vJzpcblx0XHRcdFx0Y2FzZSAnZmFsc2UnOlxuXHRcdFx0XHRcdGJveC5jaGVja2VkID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBhdXRvRWRpdCA9IGZ1bmN0aW9uIGF1dG9FZGl0KCkge1xuXHRcdHNldHVwUG9wdXBzKCgpID0+IHtcblx0XHRcdGlmIChtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2F1dG9pbXBsJykgIT09IHBvcHVwU3RyaW5nKCdhdXRvZWRpdF92ZXJzaW9uJykpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnYXV0b3dhdGNobGlzdCcpICYmIG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnYWN0b2tlbicpID09PSBhdXRvQ2xpY2tUb2tlbigpKSB7XG5cdFx0XHRcdHBnLmZuLm1vZGlmeVdhdGNobGlzdChtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3RpdGxlJyksIG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnYWN0aW9uJykpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFkb2N1bWVudC5lZGl0Zm9ybSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAoYXV0b0VkaXQuYWxyZWFkeVJhbikge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRhdXRvRWRpdC5hbHJlYWR5UmFuID0gdHJ1ZTtcblx0XHRcdGNvbnN0IGNtZFN0cmluZyA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnYXV0b2VkaXQnKTtcblx0XHRcdGlmIChjbWRTdHJpbmcpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRjb25zdCBlZGl0Ym94ID0gZG9jdW1lbnQuZWRpdGZvcm0ud3BUZXh0Ym94MTtcblx0XHRcdFx0XHRjb25zdCBjbWRMaXN0ID0gcGFyc2VDbWQoY21kU3RyaW5nKTtcblx0XHRcdFx0XHRjb25zdCBpbnB1dCA9IGVkaXRib3gudmFsdWU7XG5cdFx0XHRcdFx0Y29uc3Qgb3V0cHV0ID0gZXhlY0NtZHMoaW5wdXQsIGNtZExpc3QpO1xuXHRcdFx0XHRcdGVkaXRib3gudmFsdWUgPSBvdXRwdXQ7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0c2V0Q2hlY2tib3goJ2F1dG9taW5vcicsIGRvY3VtZW50LmVkaXRmb3JtLndwTWlub3JlZGl0KTtcblx0XHRcdHNldENoZWNrYm94KCdhdXRvd2F0Y2gnLCBkb2N1bWVudC5lZGl0Zm9ybS53cFdhdGNodGhpcyk7XG5cdFx0XHRjb25zdCBydmlkID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdhdXRvcnYnKTtcblx0XHRcdGlmIChydmlkKSB7XG5cdFx0XHRcdGNvbnN0IHVybCA9IGAke3BnLndpa2kuYXBpd2lraWJhc2V9P2FjdGlvbj1xdWVyeSZmb3JtYXQ9anNvbiZmb3JtYXR2ZXJzaW9uPTImcHJvcD1yZXZpc2lvbnMmcmV2aWRzPSR7cnZpZH1gO1xuXHRcdFx0XHRzdGFydERvd25sb2FkKHVybCwgbnVsbCwgYXV0b0VkaXQyKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGF1dG9FZGl0MigpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCBhdXRvRWRpdDIgPSAoZCkgPT4ge1xuXHRcdGxldCBzdW1tYXJ5ID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdhdXRvc3VtbWFyeScpO1xuXHRcdGxldCBzdW1tYXJ5cHJvbXB0ID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdhdXRvc3VtbWFyeXByb21wdCcpO1xuXHRcdGxldCBzdW1tYXJ5bm90aWNlID0gJyc7XG5cdFx0aWYgKGQgJiYgZC5kYXRhICYmIG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnYXV0b3J2JykpIHtcblx0XHRcdGNvbnN0IHMgPSBnZXRSdlN1bW1hcnkoc3VtbWFyeSwgZC5kYXRhKTtcblx0XHRcdGlmIChzID09PSBmYWxzZSkge1xuXHRcdFx0XHRzdW1tYXJ5cHJvbXB0ID0gdHJ1ZTtcblx0XHRcdFx0c3VtbWFyeW5vdGljZSA9IHBvcHVwU3RyaW5nKCdGYWlsZWQgdG8gZ2V0IHJldmlzaW9uIGluZm9ybWF0aW9uLCBwbGVhc2UgZWRpdCBtYW51YWxseS5cXG5cXG4nKTtcblx0XHRcdFx0c3VtbWFyeSA9IHNpbXBsZVByaW50ZihzdW1tYXJ5LCBbbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdhdXRvcnYnKSwgJyh1bmtub3duKScsICcodW5rbm93biknXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzdW1tYXJ5ID0gcztcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHN1bW1hcnlwcm9tcHQpIHtcblx0XHRcdGNvbnN0IHR4dCA9IHN1bW1hcnlub3RpY2UgKyBwb3B1cFN0cmluZygnRW50ZXIgYSBub24tZW1wdHkgZWRpdCBzdW1tYXJ5IG9yIHByZXNzIGNhbmNlbCB0byBhYm9ydCcpO1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBwcm9tcHQodHh0LCBzdW1tYXJ5KTtcblx0XHRcdGlmIChyZXNwb25zZSkge1xuXHRcdFx0XHRzdW1tYXJ5ID0gcmVzcG9uc2U7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChzdW1tYXJ5KSB7XG5cdFx0XHRkb2N1bWVudC5lZGl0Zm9ybS53cFN1bW1hcnkudmFsdWUgPSBzdW1tYXJ5O1xuXHRcdH1cblx0XHQvLyBBdHRlbXB0IHRvIGF2b2lkIHBvc3NpYmxlIHByZW1hdHVyZSBjbGlja2luZyBvZiB0aGUgc2F2ZSBidXR0b25cblx0XHQvLyAobWF5YmUgZGVsYXlzIGluIHVwZGF0ZXMgdG8gdGhlIERPTSBhcmUgdG8gYmxhbWU/PyBvciBhIHJlZCBoZXJyaW5nKVxuXHRcdHNldFRpbWVvdXQoYXV0b0VkaXQzLCAxMDApO1xuXHR9O1xuXHRjb25zdCBhdXRvQ2xpY2tUb2tlbiA9ICgpID0+IHtcblx0XHRyZXR1cm4gbXcudXNlci5zZXNzaW9uSWQoKTtcblx0fTtcblx0Y29uc3QgYXV0b0VkaXQzID0gKCkgPT4ge1xuXHRcdGlmIChtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2FjdG9rZW4nKSAhPT0gYXV0b0NsaWNrVG9rZW4oKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBidG4gPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2F1dG9jbGljaycpO1xuXHRcdGlmIChidG4pIHtcblx0XHRcdGlmIChkb2N1bWVudC5lZGl0Zm9ybSAmJiBkb2N1bWVudC5lZGl0Zm9ybVtidG5dKSB7XG5cdFx0XHRcdGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmVkaXRmb3JtW2J0bl07XG5cdFx0XHRcdGNvbnN0IG1zZyA9IHRwcmludGYoXG5cdFx0XHRcdFx0J1RoZSAlcyBidXR0b24gaGFzIGJlZW4gYXV0b21hdGljYWxseSBjbGlja2VkLiBQbGVhc2Ugd2FpdCBmb3IgdGhlIG5leHQgcGFnZSB0byBsb2FkLicsXG5cdFx0XHRcdFx0W2J1dHRvbi52YWx1ZV1cblx0XHRcdFx0KTtcblx0XHRcdFx0YmFubmVyTWVzc2FnZShtc2cpO1xuXHRcdFx0XHRkb2N1bWVudC50aXRsZSA9IGAoJHtkb2N1bWVudC50aXRsZX0pYDtcblx0XHRcdFx0YnV0dG9uLmNsaWNrKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2b2lkIG13Lm5vdGlmeShcblx0XHRcdFx0XHR0cHJpbnRmKCdDb3VsZCBub3QgZmluZCBidXR0b24gJXMuIFBsZWFzZSBjaGVjayB0aGUgc2V0dGluZ3MgaW4geW91ciBqYXZhc2NyaXB0IGZpbGUuJywgW2J0bl0pLFxuXHRcdFx0XHRcdHt0YWc6ICdwb3B1cHMnLCB0eXBlOiAnZXJyb3InfVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0Y29uc3QgYmFubmVyTWVzc2FnZSA9IChzKSA9PiB7XG5cdFx0Y29uc3QgaGVhZGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdoMScpO1xuXHRcdGlmIChoZWFkaW5ncykge1xuXHRcdFx0Y29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRkaXYuaW5uZXJIVE1MID0gYDxmb250IHNpemU9KzE+PGI+JHtwZy5lc2NhcGVRdW90ZXNIVE1MKHMpfTwvYj48L2ZvbnQ+YDtcblx0XHRcdGhlYWRpbmdzWzBdLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGRpdiwgaGVhZGluZ3NbMF0pO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgZ2V0UnZTdW1tYXJ5ID0gKHRlbXBsYXRlLCBqc29uKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IG8gPSBnZXRKc09iaihqc29uKTtcblx0XHRcdGNvbnN0IFtlZGl0XSA9IGFueUNoaWxkKG8ucXVlcnkucGFnZXMpLnJldmlzaW9ucztcblx0XHRcdGNvbnN0IHRpbWVzdGFtcCA9IGVkaXQudGltZXN0YW1wXG5cdFx0XHRcdC5zcGxpdCgvW0EtWl0vZylcblx0XHRcdFx0LmpvaW4oJyAnKVxuXHRcdFx0XHQucmVwbGFjZSgvXiAqfCAqJC9nLCAnJyk7XG5cdFx0XHRyZXR1cm4gc2ltcGxlUHJpbnRmKHRlbXBsYXRlLCBbZWRpdC5yZXZpZCwgdGltZXN0YW1wLCBlZGl0LnVzZXJoaWRkZW4gPyAnKGhpZGRlbiknIDogZWRpdC51c2VyXSk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9O1xuXHQvLyBFTkRGSUxFOiBhdXRvZWRpdC5qc1xuXHQvLyBTVEFSVEZJTEU6IGRvd25sb2FkZXIuanNcblx0LyoqXG5cdCAqIEBmaWxlb3ZlcnZpZXdcblx0ICoge0Bzb3VyY2UgRG93bmxvYWRlcn0sIGEgeG1saHR0cHJlcXVlc3Qgd3JhcHBlciwgYW5kIGhlbHBlciBmdW5jdGlvbnMuXG5cdCAqL1xuXHQvKipcblx0ICogQ3JlYXRlcyBhIG5ldyBEb3dubG9hZGVyXG5cdCAqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAY2xhc3MgVGhlIERvd25sb2FkZXIgY2xhc3MuIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIHRvIGRvd25sb2FkIHN0dWZmLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSB1cmwgdG8gZG93bmxvYWQuIFRoaXMgY2FuIGJlIG9taXR0ZWQgYW5kIHN1cHBsaWVkIGxhdGVyLlxuXHQgKi9cblx0Y2xhc3MgRG93bmxvYWRlciB7XG5cdFx0Y29uc3RydWN0b3IodXJsKSB7XG5cdFx0XHRpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHR0aGlzLmh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblx0XHRcdH1cblx0XHRcdC8qKlxuXHRcdFx0ICogVGhlIHVybCB0byBkb3dubG9hZFxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIFN0cmluZ1xuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnVybCA9IHVybDtcblx0XHRcdC8qKlxuXHRcdFx0ICogQSB1bml2ZXJzYWxseSB1bmlxdWUgSUQgbnVtYmVyXG5cdFx0XHQgKlxuXHRcdFx0ICogQHR5cGUgaW50ZWdlclxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLmlkID0gbnVsbDtcblx0XHRcdC8qKlxuXHRcdFx0ICogTW9kaWZpY2F0aW9uIGRhdGUsIHRvIGJlIGN1bGxlZCBmcm9tIHRoZSBpbmNvbWluZyBoZWFkZXJzXG5cdFx0XHQgKlxuXHRcdFx0ICogQHR5cGUgRGF0ZVxuXHRcdFx0ICogQHByaXZhdGVcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5sYXN0TW9kaWZpZWQgPSBudWxsO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBXaGF0IHRvIGRvIHdoZW4gdGhlIGRvd25sb2FkIGNvbXBsZXRlcyBzdWNjZXNzZnVsbHlcblx0XHRcdCAqXG5cdFx0XHQgKiBAdHlwZSBGdW5jdGlvblxuXHRcdFx0ICogQHByaXZhdGVcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5jYWxsYmFja0Z1bmN0aW9uID0gbnVsbDtcblx0XHRcdC8qKlxuXHRcdFx0ICogV2hhdCB0byBkbyBvbiBmYWlsdXJlXG5cdFx0XHQgKlxuXHRcdFx0ICogQHR5cGUgRnVuY3Rpb25cblx0XHRcdCAqIEBwcml2YXRlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMub25GYWlsdXJlID0gbnVsbDtcblx0XHRcdC8qKlxuXHRcdFx0ICogRmxhZyBzZXQgb24gPGNvZGU+YWJvcnQ8L2NvZGU+XG5cdFx0XHQgKlxuXHRcdFx0ICogQHR5cGUgYm9vbGVhblxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLmFib3J0ZWQgPSBmYWxzZTtcblx0XHRcdC8qKlxuXHRcdFx0ICogSFRUUCBtZXRob2QuIFNlZSBodHRwczovL3d3dy53My5vcmcvUHJvdG9jb2xzL3JmYzI2MTYvcmZjMjYxNi1zZWM5Lmh0bWwgZm9yXG5cdFx0XHQgKiBwb3NzaWJpbGl0aWVzLlxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIFN0cmluZ1xuXHRcdFx0ICovXG5cdFx0XHR0aGlzLm1ldGhvZCA9ICdHRVQnO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBBc3luYyBmbGFnLlxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIGJvb2xlYW5cblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5hc3luYyA9IHRydWU7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFN1Ym1pdHMgdGhlIGh0dHAgcmVxdWVzdC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7Kn0geFxuXHRcdCAqL1xuXHRcdHNlbmQoeCkge1xuXHRcdFx0aWYgKCF0aGlzLmh0dHApIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy5odHRwLnNlbmQoeCk7XG5cdFx0fVxuXHRcdC8qIEFib3J0cyB0aGUgZG93bmxvYWQsIHNldHRpbmcgdGhlIDxjb2RlPmFib3J0ZWQ8L2NvZGU+IGZpZWxkIHRvIHRydWUuICovXG5cdFx0YWJvcnQoKSB7XG5cdFx0XHRpZiAoIXRoaXMuaHR0cCkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHRcdHRoaXMuYWJvcnRlZCA9IHRydWU7XG5cdFx0XHRyZXR1cm4gdGhpcy5odHRwLmFib3J0KCk7XG5cdFx0fVxuXHRcdC8qKiBSZXR1cm5zIHRoZSBkb3dubG9hZGVkIGRhdGEuICovXG5cdFx0Z2V0RGF0YSgpIHtcblx0XHRcdGlmICghdGhpcy5odHRwKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMuaHR0cC5yZXNwb25zZVRleHQ7XG5cdFx0fVxuXHRcdC8qKiBQcmVwYXJlcyB0aGUgZG93bmxvYWQuICovXG5cdFx0c2V0VGFyZ2V0KCkge1xuXHRcdFx0aWYgKCF0aGlzLmh0dHApIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmh0dHAub3Blbih0aGlzLm1ldGhvZCwgdGhpcy51cmwsIHRoaXMuYXN5bmMpO1xuXHRcdFx0dGhpcy5odHRwLnNldFJlcXVlc3RIZWFkZXIoJ0FwaS1Vc2VyLUFnZW50JywgcGcuYXBpLnVzZXJBZ2VudCk7XG5cdFx0fVxuXHRcdC8qKiBHZXRzIHRoZSBzdGF0ZSBvZiB0aGUgZG93bmxvYWQuICovXG5cdFx0Z2V0UmVhZHlTdGF0ZSgpIHtcblx0XHRcdGlmICghdGhpcy5odHRwKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMuaHR0cC5yZWFkeVN0YXRlO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBTdGFydHMgdGhlIGRvd25sb2FkLlxuXHRcdCAqIE5vdGUgdGhhdCBzZXRUYXJnZXQge0Bzb3VyY2UgRG93bmxvYWRlciNzZXRUYXJnZXR9IG11c3QgYmUgcnVuIGZpcnN0XG5cdFx0ICovXG5cdFx0c3RhcnQoKSB7XG5cdFx0XHRpZiAoIXRoaXMuaHR0cCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdHBnLm1pc2MuZG93bmxvYWRzSW5Qcm9ncmVzc1t0aGlzLmlkXSA9IHNlbGY7XG5cdFx0XHR0aGlzLmh0dHAuc2VuZChudWxsKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogR2V0cyB0aGUgJ0xhc3QtTW9kaWZpZWQnIGRhdGUgZnJvbSB0aGUgZG93bmxvYWQgaGVhZGVycy5cblx0XHQgKiBTaG91bGQgYmUgcnVuIGFmdGVyIHRoZSBkb3dubG9hZCBjb21wbGV0ZXMuXG5cdFx0ICogUmV0dXJucyA8Y29kZT5udWxsPC9jb2RlPiBvbiBmYWlsdXJlLlxuXHRcdCAqXG5cdFx0ICogQHJldHVybiB7RGF0ZX1cblx0XHQgKi9cblx0XHRnZXRMYXN0TW9kaWZpZWREYXRlKCkge1xuXHRcdFx0aWYgKCF0aGlzLmh0dHApIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHRsZXQgbGFzdG1vZDtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGxhc3Rtb2QgPSB0aGlzLmh0dHAuZ2V0UmVzcG9uc2VIZWFkZXIoJ0xhc3QtTW9kaWZpZWQnKTtcblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHQvKiBlbXB0eSAqL1xuXHRcdFx0fVxuXHRcdFx0aWYgKGxhc3Rtb2QpIHtcblx0XHRcdFx0cmV0dXJuIG5ldyBEYXRlKGxhc3Rtb2QpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFNldHMgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gZiBjYWxsYmFjayBmdW5jdGlvbiwgY2FsbGVkIGFzIDxjb2RlPmYodGhpcyk8L2NvZGU+IG9uIHN1Y2Nlc3Ncblx0XHQgKi9cblx0XHRzZXRDYWxsYmFjayhmKSB7XG5cdFx0XHRpZiAoIXRoaXMuaHR0cCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmh0dHAub25yZWFkeXN0YXRlY2hhbmdlID0gZjtcblx0XHR9XG5cdFx0Z2V0U3RhdHVzKCkge1xuXHRcdFx0aWYgKCF0aGlzLmh0dHApIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy5odHRwLnN0YXR1cztcblx0XHR9XG5cdH1cblx0bmV3IERvd25sb2FkZXIoKTtcblx0cGcubWlzYy5kb3dubG9hZHNJblByb2dyZXNzID0ge307XG5cdC8vIGhlbHBlciBmdW5jdGlvbnNcblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuZXcge0Bzb3VyY2UgRG93bmxvYWRlcn0gYW5kIHByZXBhcmVzIGl0IGZvciBhY3Rpb24uXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybCB0byBkb3dubG9hZFxuXHQgKiBAcGFyYW0ge2ludGVnZXJ9IGlkIFRoZSBJRCBvZiB0aGUge0Bzb3VyY2UgRG93bmxvYWRlcn0gb2JqZWN0XG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBjYWxsYmFjayBmdW5jdGlvbiBpbnZva2VkIG9uIHN1Y2Nlc3Ncblx0ICogQHBhcmFtIHtudW1iZXJ9IG9uZmFpbHVyZVxuXHQgKiBAcmV0dXJuIHtTdHJpbmcvRG93bmxvYWRlcn0gdGhlIHtAc291cmNlIERvd25sb2FkZXJ9IG9iamVjdCBjcmVhdGVkLCBvciAnb2hkZWFyJyBpZiBhbiB1bnN1cHBvcnRlZCBicm93c2VyXG5cdCAqL1xuXHRjb25zdCBuZXdEb3dubG9hZCA9IGZ1bmN0aW9uIG5ld0Rvd25sb2FkKHVybCwgaWQsIGNhbGxiYWNrLCBvbmZhaWx1cmUpIHtcblx0XHRjb25zdCBkID0gbmV3IERvd25sb2FkZXIodXJsKTtcblx0XHRpZiAoIWQuaHR0cCkge1xuXHRcdFx0cmV0dXJuICdvaGRlYXInO1xuXHRcdH1cblx0XHRkLmlkID0gaWQ7XG5cdFx0ZC5zZXRUYXJnZXQoKTtcblx0XHRvbmZhaWx1cmUgfHw9IDI7XG5cdFx0Y29uc3QgZiA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmIChkLmdldFJlYWR5U3RhdGUoKSA9PT0gNCkge1xuXHRcdFx0XHRkZWxldGUgcGcubWlzYy5kb3dubG9hZHNJblByb2dyZXNzW3RoaXMuaWRdO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGlmIChkLmdldFN0YXR1cygpID09PSAyMDApIHtcblx0XHRcdFx0XHRcdGQuZGF0YSA9IGQuZ2V0RGF0YSgpO1xuXHRcdFx0XHRcdFx0ZC5sYXN0TW9kaWZpZWQgPSBkLmdldExhc3RNb2RpZmllZERhdGUoKTtcblx0XHRcdFx0XHRcdGNhbGxiYWNrKGQpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIG9uZmFpbHVyZSA9PT0gdHlwZW9mIDEpIHtcblx0XHRcdFx0XHRcdGlmIChvbmZhaWx1cmUgPiAwKSB7XG5cdFx0XHRcdFx0XHRcdC8vIHJldHJ5XG5cdFx0XHRcdFx0XHRcdG5ld0Rvd25sb2FkKHVybCwgaWQsIGNhbGxiYWNrLCBvbmZhaWx1cmUgLSAxKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBvbmZhaWx1cmUgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRcdG9uZmFpbHVyZShkLCB1cmwsIGlkLCBjYWxsYmFjayk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHQvKiBpZ25vcmUgaXQgKi9cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cdFx0ZC5zZXRDYWxsYmFjayhmKTtcblx0XHRyZXR1cm4gZDtcblx0fTtcblx0LyoqXG5cdCAqIFNpbXVsYXRlcyBhIGRvd25sb2FkIGZyb20gY2FjaGVkIGRhdGEuXG5cdCAqIFRoZSBzdXBwbGllZCBkYXRhIGlzIHB1dCBpbnRvIGEge0Bzb3VyY2UgRG93bmxvYWRlcn0gYXMgaWYgaXQgaGFkIGRvd25sb2FkZWQgaXQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybC5cblx0ICogQHBhcmFtIHtpbnRlZ2VyfSBpZCBUaGUgSUQuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBjYWxsYmFjaywgd2hpY2ggaXMgaW52b2tlZCBpbW1lZGlhdGVseSBhcyA8Y29kZT5jYWxsYmFjayhkKTwvY29kZT4sXG5cdCAqIHdoZXJlIDxjb2RlPmQ8L2NvZGU+IGlzIHRoZSBuZXcge0Bzb3VyY2UgRG93bmxvYWRlcn0uXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhIFRoZSAoY2FjaGVkKSBkYXRhLlxuXHQgKiBAcGFyYW0ge0RhdGV9IGxhc3RNb2RpZmllZCBUaGUgKGNhY2hlZCkgbGFzdCBtb2RpZmllZCBkYXRlLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gb3duZXJcblx0ICovXG5cdGNvbnN0IGZha2VEb3dubG9hZCA9ICh1cmwsIGlkLCBjYWxsYmFjaywgZGF0YSwgbGFzdE1vZGlmaWVkLCBvd25lcikgPT4ge1xuXHRcdGNvbnN0IGQgPSBuZXdEb3dubG9hZCh1cmwsIGNhbGxiYWNrKTtcblx0XHRkLm93bmVyID0gb3duZXI7XG5cdFx0ZC5pZCA9IGlkO1xuXHRcdGQuZGF0YSA9IGRhdGE7XG5cdFx0ZC5sYXN0TW9kaWZpZWQgPSBsYXN0TW9kaWZpZWQ7XG5cdFx0cmV0dXJuIGNhbGxiYWNrKGQpO1xuXHR9O1xuXHQvKipcblx0ICogU3RhcnRzIGEgZG93bmxvYWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybCB0byBkb3dubG9hZFxuXHQgKiBAcGFyYW0ge2ludGVnZXJ9IGlkIFRoZSBJRCBvZiB0aGUge0Bzb3VyY2UgRG93bmxvYWRlcn0gb2JqZWN0XG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBjYWxsYmFjayBmdW5jdGlvbiBpbnZva2VkIG9uIHN1Y2Nlc3Ncblx0ICogQHJldHVybiB7U3RyaW5nL0Rvd25sb2FkZXJ9IHRoZSB7QHNvdXJjZSBEb3dubG9hZGVyfSBvYmplY3QgY3JlYXRlZCwgb3IgJ29oZGVhcicgaWYgYW4gdW5zdXBwb3J0ZWQgYnJvd3NlclxuXHQgKi9cblx0Y29uc3Qgc3RhcnREb3dubG9hZCA9ICh1cmwsIGlkLCBjYWxsYmFjaykgPT4ge1xuXHRcdGNvbnN0IGQgPSBuZXdEb3dubG9hZCh1cmwsIGlkLCBjYWxsYmFjayk7XG5cdFx0aWYgKHR5cGVvZiBkID09PSB0eXBlb2YgJycpIHtcblx0XHRcdHJldHVybiBkO1xuXHRcdH1cblx0XHRkLnN0YXJ0KCk7XG5cdFx0cmV0dXJuIGQ7XG5cdH07XG5cdC8qKlxuXHQgKiBBYm9ydHMgYWxsIGRvd25sb2FkcyB3aGljaCBoYXZlIGJlZW4gc3RhcnRlZC5cblx0ICovXG5cdGNvbnN0IGFib3J0QWxsRG93bmxvYWRzID0gKCkgPT4ge1xuXHRcdGZvciAoY29uc3QgeCBpbiBwZy5taXNjLmRvd25sb2Fkc0luUHJvZ3Jlc3MpIHtcblx0XHRcdGlmICghT2JqZWN0Lmhhc093bihwZy5taXNjLmRvd25sb2Fkc0luUHJvZ3Jlc3MsIHgpKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cGcubWlzYy5kb3dubG9hZHNJblByb2dyZXNzW3hdLmFib3J0ZWQgPSB0cnVlO1xuXHRcdFx0XHRwZy5taXNjLmRvd25sb2Fkc0luUHJvZ3Jlc3NbeF0uYWJvcnQoKTtcblx0XHRcdFx0ZGVsZXRlIHBnLm1pc2MuZG93bmxvYWRzSW5Qcm9ncmVzc1t4XTtcblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHQvKiBlbXB0eSAqL1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0Ly8gRU5ERklMRTogZG93bmxvYWRlci5qc1xuXHQvLyBTVEFSVEZJTEU6IGxpdmVwcmV2aWV3LmpzXG5cdC8vIFRPRE86IGxvY2F0aW9uIGlzIG9mdGVuIG5vdCBjb3JyZWN0IChlZyByZWxhdGl2ZSBsaW5rcyBpbiBwcmV2aWV3cylcblx0Ly8gTk9URTogcmVtb3ZlZCBtZDUgYW5kIGltYWdlIGFuZCBtYXRoIHBhcnNpbmcuIHdhcyBicm9rZW4sIGxvdHMgb2YgYnl0ZXMuXG5cdC8qKlxuXHQgKiBJbnN0YVZpZXcgLSBhIE1lZGlhd2lraSB0byBIVE1MIGNvbnZlcnRlciBpbiBKYXZhU2NyaXB0XG5cdCAqIFZlcnNpb24gMC42LjFcblx0ICogQ29weXJpZ2h0IChDKSBQZWRybyBGYXlvbGxlIDIwMDUtMjAwNlxuXHQgKiB7QGxpbmsgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVXNlcjpQaWxhZn1cblx0ICogRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIEJTRCBsaWNlbnNlXG5cdCAqXG5cdCAqIENoYW5nZWxvZzpcblx0ICpcblx0ICogMC42LjFcblx0ICogLSBGaXhlZCBwcm9ibGVtIGNhdXNlZCBieSBcXHIgY2hhcmFjdGVyc1xuXHQgKiAtIEltcHJvdmVkIGlubGluZSBmb3JtYXR0aW5nIHBhcnNlclxuXHQgKlxuXHQgKiAwLjZcblx0ICogLSBDaGFuZ2VkIG5hbWUgdG8gSW5zdGFWaWV3XG5cdCAqIC0gU29tZSBtYWpvciBjb2RlIHJlb3JnYW5pemF0aW9ucyBhbmQgZmFjdG9yZWQgb3V0IHNvbWUgY29tbW9uIGZ1bmN0aW9uc1xuXHQgKiAtIEhhbmRsZWQgY29udmVyc2lvbiBvZiByZWxhdGl2ZSBsaW5rcyAoaS5lLiBbWy9mb29dXSlcblx0ICogLSBGaXhlZCBtaXNyZW5kZXJpbmcgb2YgYWRqYWNlbnQgZGVmaW5pdGlvbiBsaXN0IGl0ZW1zXG5cdCAqIC0gRml4ZWQgYnVnIGluIHRhYmxlIGhlYWRpbmdzIGhhbmRsaW5nXG5cdCAqIC0gQ2hhbmdlZCBkYXRlIGZvcm1hdCBpbiBzaWduYXR1cmVzIHRvIHJlZmxlY3QgTWVkaWF3aWtpJ3Ncblx0ICogLSBGaXhlZCBoYW5kbGluZyBvZiBbWzpJbWFnZTouLi5dXVxuXHQgKiAtIFVwZGF0ZWQgTUQ1IGZ1bmN0aW9uIChob3BlZnVsbHkgaXQgd2lsbCB3b3JrIHdpdGggVVRGLTgpXG5cdCAqIC0gRml4ZWQgYnVnIGluIGhhbmRsaW5nIG9mIGxpbmtzIGluc2lkZSBpbWFnZXNcblx0ICpcblx0ICogVG8gZG86XG5cdCAqIC0gQmV0dGVyIHN1cHBvcnQgZm9yIG1hdGggdGFnc1xuXHQgKiAtIEZ1bGwgc3VwcG9ydCBmb3Igbm93aWtpIHRhZ1xuXHQgKiAtIFBhcnNlci1iYXNlZCAoYXMgb3Bwb3NlZCB0byBSZWdFeHAtYmFzZWQpIGlubGluZSB3aWtpY29kZSBoYW5kbGluZyAobWFrZSBpdCBvbmUtcGFzcyBhbmRcblx0ICogICBidWxsZXQtcHJvb2YpXG5cdCAqIC0gU3VwcG9ydCBmb3IgdGVtcGxhdGVzICh0aHJvdWdoIEFKQVgpXG5cdCAqIC0gU3VwcG9ydCBmb3IgY29sb3VyZWQgbGlua3MgKEFKQVgpXG5cdCAqL1xuXHRjb25zdCBJbnN0YSA9IHt9O1xuXHRjb25zdCBzZXR1cExpdmVQcmV2aWV3ID0gKCkgPT4ge1xuXHRcdGxldCBfYjtcblx0XHQvLyBvcHRpb25zXG5cdFx0SW5zdGEuY29uZiA9IHtcblx0XHRcdGJhc2VVcmw6ICcnLFxuXHRcdFx0dXNlcjoge30sXG5cdFx0XHR3aWtpOiB7XG5cdFx0XHRcdGxhbmc6IHBnLndpa2kubGFuZyxcblx0XHRcdFx0aW50ZXJ3aWtpOiBwZy53aWtpLmludGVyd2lraSxcblx0XHRcdFx0ZGVmYXVsdF90aHVtYl93aWR0aDogMTgwLFxuXHRcdFx0fSxcblx0XHRcdHBhdGhzOiB7XG5cdFx0XHRcdGFydGljbGVzOiBgJHtwZy53aWtpLmFydGljbGVQYXRofS9gLFxuXHRcdFx0XHQvLyBPbmx5IHVzZWQgZm9yIEluc3RhIHByZXZpZXdzIHdpdGggaW1hZ2VzLiAobm90IGluIHBvcHVwcylcblx0XHRcdFx0bWF0aDogJy9tYXRoLycsXG5cdFx0XHRcdGltYWdlczogJ2h0dHBzOi8vaW1hZ2UueW91c2hvdS53aWtpLycsXG5cdFx0XHRcdGltYWdlc19mYWxsYmFjazogJy8vd20uemhvbmd3ZW4ud2lraS9jb21tb25zLycsXG5cdFx0XHR9LFxuXHRcdFx0bG9jYWxlOiB7XG5cdFx0XHRcdHVzZXI6IG13LmNvbmZpZy5nZXQoJ3dnRm9ybWF0dGVkTmFtZXNwYWNlcycpW3BnLm5zVXNlcklkXSxcblx0XHRcdFx0aW1hZ2U6IG13LmNvbmZpZy5nZXQoJ3dnRm9ybWF0dGVkTmFtZXNwYWNlcycpW3BnLm5zSW1hZ2VJZF0sXG5cdFx0XHRcdGNhdGVnb3J5OiBtdy5jb25maWcuZ2V0KCd3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMnKVtwZy5uc0NhdGVnb3J5SWRdLFxuXHRcdFx0XHQvLyBzaG91bGRuJ3QgYmUgdXNlZCBpbiBwb3B1cCBwcmV2aWV3cywgaSB0aGlua1xuXHRcdFx0XHRtb250aHM6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcblx0XHRcdH0sXG5cdFx0fTtcblx0XHQvLyBvcHRpb25zIHdpdGggZGVmYXVsdCB2YWx1ZXMgb3IgYmFja3JlZmVyZW5jZXNcblx0XHRJbnN0YS5jb25mLnVzZXIubmFtZSB8fD0gJ1lvdVNob3UgQXJjaGl2ZXMgY29udHJpYnV0b3JzJztcblx0XHRJbnN0YS5jb25mLnVzZXIuc2lnbmF0dXJlID0gYFtbJHtJbnN0YS5jb25mLmxvY2FsZS51c2VyfToke0luc3RhLmNvbmYudXNlci5uYW1lfXwke0luc3RhLmNvbmYudXNlci5uYW1lfV1dYDtcblx0XHQvLyBkZWZpbmUgY29uc3RhbnRzXG5cdFx0SW5zdGEuQkxPQ0tfSU1BR0UgPSBuZXcgUmVnRXhwKFxuXHRcdFx0YF5cXFxcW1xcXFxbKD86RmlsZXxJbWFnZXwke0luc3RhLmNvbmYubG9jYWxlLmltYWdlfSk6Lio/XFxcXHwuKj8oPzpmcmFtZXx0aHVtYm5haWx8dGh1bWJ8bm9uZXxyaWdodHxsZWZ0fGNlbnRlcilgLFxuXHRcdFx0J2knXG5cdFx0KTtcblx0fTtcblx0SW5zdGEuZHVtcCA9IGZ1bmN0aW9uIChmcm9tLCB0bykge1xuXHRcdGlmICh0eXBlb2YgZnJvbSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdGZyb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtmcm9tfWApO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHRvID09PSAnc3RyaW5nJykge1xuXHRcdFx0dG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0b31gKTtcblx0XHR9XG5cdFx0dG8uaW5uZXJIVE1MID0gdGhpcy5jb252ZXJ0KGZyb20udmFsdWUpO1xuXHR9O1xuXHRJbnN0YS5jb252ZXJ0ID0gKHdpa2kpID0+IHtcblx0XHRjb25zdCBsbCA9IHR5cGVvZiB3aWtpID09PSAnc3RyaW5nJyA/IHdpa2kucmVwbGFjZSgvXFxyL2csICcnKS5zcGxpdCgvXFxuLykgOiB3aWtpOyAvLyBsaW5lcyBvZiB3aWtpY29kZVxuXHRcdGxldCBvID0gJyc7IC8vIHJlc3VsdCBvZiBwYXNzaW5nIGEgcmVnZXhwIHRvIGNvbXBhcmVMaW5lU3RyaW5nT3JSZWcoKVxuXHRcdGxldCBwID0gMDtcblx0XHRsZXQgcjtcblx0XHQvLyBzb21lIHNob3J0aGFuZHNcblx0XHRjb25zdCByZW1haW4gPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gbGwubGVuZ3RoO1xuXHRcdH07XG5cdFx0Y29uc3Qgc2ggPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gbGwuc2hpZnQoKTtcblx0XHR9OyAvLyBzaGlmdFxuXHRcdGNvbnN0IHBzID0gKHMpID0+IHtcblx0XHRcdG8gKz0gcztcblx0XHR9OyAvLyBwdXNoXG5cblx0XHQvLyBzaW1pbGFyIHRvIEMncyBwcmludGYsIHVzZXMgPyBhcyBwbGFjZWhvbGRlcnMsID8/IHRvIGVzY2FwZSBxdWVzdGlvbiBtYXJrc1xuXHRcdGNvbnN0IGYgPSBmdW5jdGlvbiBmKC4uLmFyZ3MpIHtcblx0XHRcdGxldCBpID0gMTtcblx0XHRcdGNvbnN0IGEgPSBhcmdzO1xuXHRcdFx0bGV0IFtmXSA9IGE7XG5cdFx0XHRsZXQgbyA9ICcnO1xuXHRcdFx0bGV0IGM7XG5cdFx0XHRsZXQgcDtcblx0XHRcdGZvciAoOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAoKHAgPSBmLmluZGV4T2YoJz8nKSkgKyAxKSB7XG5cdFx0XHRcdFx0Ly8gYWxsb3cgY2hhcmFjdGVyIGVzY2FwaW5nXG5cdFx0XHRcdFx0YyA9IGYuY2hhckF0KHAgKyAxKSA9PT0gJz8nID8gMSA6IDA7XG5cdFx0XHRcdFx0aSAtPSBjO1xuXHRcdFx0XHRcdG8gKz0gZi5zbGljZSgwLCBNYXRoLm1heCgwLCBwKSkgKyAoYyA/ICc/JyA6IGFbaV0pO1xuXHRcdFx0XHRcdGYgPSBmLnNsaWNlKHAgKyAxICsgYyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBvICsgZjtcblx0XHR9O1xuXHRcdGNvbnN0IGh0bWxfZW50aXRpZXMgPSAocykgPT4ge1xuXHRcdFx0cmV0dXJuIHMucmVwbGFjZSgvJi9nLCAnJmFtcDsnKS5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xuXHRcdH07XG5cdFx0Ly8gV2lraSB0ZXh0IHBhcnNpbmcgdG8gaHRtbCBpcyBhIG5pZ2h0bWFyZS5cblx0XHQvLyBUaGUgYmVsb3cgZnVuY3Rpb25zIGRlbGliZXJhdGVseSBkb24ndCBlc2NhcGUgdGhlIGFtcGVyc2FuZCBzaW5jZSB0aGlzIHdvdWxkIG1ha2UgaXQgbW9yZVxuXHRcdC8vIGRpZmZpY3VsdCwgYW5kIHdlIGRvbid0IGFic29sdXRlbHkgbmVlZCB0byBmb3IgaG93IHdlIG5lZWQgaXQuIFRoaXMgbWVhbnMgdGhhdCBhbnlcblx0XHQvLyB1bmVzY2FwZWQgYW1wZXJzYW5kcyBpbiB3aWtpdGV4dCB3aWxsIHJlbWFpbiB1bmVzY2FwZWQgYW5kIGNhbiBjYXVzZSBpbnZhbGlkIEhUTUwuXG5cdFx0Ly8gQnJvd3NlcnMgc2hvdWxkIGFsbCBiZSBhYmxlIHRvIGhhbmRsZSBpdCB0aG91Z2guIFdlIGFsc28gZXNjYXBlIHNpZ25pZmljYW50IHdpa2ltYXJrdXBcblx0XHQvLyBjaGFyYWN0ZXJzIHRvIHByZXZlbnQgZnVydGhlciBtYXRjaGluZyBvbiB0aGUgcHJvY2Vzc2VkIHRleHQuXG5cdFx0Y29uc3QgaHRtbGVzY2FwZV90ZXh0ID0gKHMpID0+IHtcblx0XHRcdHJldHVybiBzXG5cdFx0XHRcdC5yZXBsYWNlKC88L2csICcmbHQ7Jylcblx0XHRcdFx0LnJlcGxhY2UoLz4vZywgJyZndDsnKVxuXHRcdFx0XHQucmVwbGFjZSgvOi9nLCAnJiM1ODsnKVxuXHRcdFx0XHQucmVwbGFjZSgvXFxbL2csICcmIzkxOycpXG5cdFx0XHRcdC5yZXBsYWNlKC9dL2csICcmIzkzOycpO1xuXHRcdH07XG5cdFx0Y29uc3QgaHRtbGVzY2FwZV9hdHRyID0gKHMpID0+IHtcblx0XHRcdHJldHVybiBodG1sZXNjYXBlX3RleHQocykucmVwbGFjZSgvJy9nLCAnJiMzOTsnKS5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG5cdFx0fTtcblx0XHQvLyByZXR1cm4gdGhlIGZpcnN0IG5vbiBtYXRjaGluZyBjaGFyYWN0ZXIgcG9zaXRpb24gYmV0d2VlbiB0d28gc3RyaW5nc1xuXHRcdGNvbnN0IHN0cl9pbWF0Y2ggPSAoYSwgYikgPT4ge1xuXHRcdFx0bGV0IGk7XG5cdFx0XHRsZXQgbDtcblx0XHRcdGZvciAoaSA9IDAsIGwgPSBNYXRoLm1pbihhLmxlbmd0aCwgYi5sZW5ndGgpOyBpIDwgbDsgaSsrKSB7XG5cdFx0XHRcdGlmIChhLmNoYXJBdChpKSAhPT0gYi5jaGFyQXQoaSkpIHtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGk7XG5cdFx0fTtcblx0XHQvLyBjb21wYXJlIGN1cnJlbnQgbGluZSBhZ2FpbnN0IGEgc3RyaW5nIG9yIHJlZ2V4cFxuXHRcdC8vIGlmIHBhc3NlZCBhIHN0cmluZyBpdCB3aWxsIGNvbXBhcmUgb25seSB0aGUgZmlyc3Qgc3RyaW5nLmxlbmd0aCBjaGFyYWN0ZXJzXG5cdFx0Ly8gaWYgcGFzc2VkIGEgcmVnZXhwIHRoZSByZXN1bHQgaXMgc3RvcmVkIGluIHJcblx0XHRjb25zdCBjb21wYXJlTGluZVN0cmluZ09yUmVnID0gKGMpID0+IHtcblx0XHRcdHJldHVybiB0eXBlb2YgYyA9PT0gJ3N0cmluZycgPyBsbFswXSAmJiBsbFswXS5zbGljZSgwLCBjLmxlbmd0aCkgPT09IGMgOiAociA9IGxsWzBdICYmIGxsWzBdLm1hdGNoKGMpKTtcblx0XHR9O1xuXHRcdGNvbnN0IGNvbXBhcmVMaW5lU3RyaW5nID0gKGMpID0+IHtcblx0XHRcdHJldHVybiBsbFswXSA9PT0gYztcblx0XHR9OyAvLyBjb21wYXJlIGN1cnJlbnQgbGluZSBhZ2FpbnN0IGEgc3RyaW5nXG5cdFx0Y29uc3QgY2hhckF0UG9pbnQgPSAocCkgPT4ge1xuXHRcdFx0cmV0dXJuIGxsWzBdLmNoYXJBdChwKTtcblx0XHR9OyAvLyByZXR1cm4gY2hhciBhdCBwb3MgcFxuXHRcdGNvbnN0IGVuZGwgPSAocykgPT4ge1xuXHRcdFx0cHMocyk7XG5cdFx0XHRzaCgpO1xuXHRcdH07XG5cdFx0Y29uc3QgcGFyc2VfbGlzdCA9ICgpID0+IHtcblx0XHRcdGxldCBwcmV2ID0gJyc7XG5cdFx0XHR3aGlsZSAocmVtYWluKCkgJiYgY29tcGFyZUxpbmVTdHJpbmdPclJlZygvXihbIyo6O10rKSguKikkLykpIHtcblx0XHRcdFx0Y29uc3QgbF9tYXRjaCA9IHI7XG5cdFx0XHRcdHNoKCk7XG5cdFx0XHRcdGNvbnN0IGlwb3MgPSBzdHJfaW1hdGNoKHByZXYsIGxfbWF0Y2hbMV0pO1xuXHRcdFx0XHQvLyBjbG9zZSB1bmNvbnRpbnVlZCBsaXN0c1xuXHRcdFx0XHRmb3IgKGxldCBwcmV2UG9zID0gcHJldi5sZW5ndGggLSAxOyBwcmV2UG9zID49IGlwb3M7IHByZXZQb3MtLSkge1xuXHRcdFx0XHRcdGNvbnN0IHBpID0gcHJldi5jaGFyQXQocHJldlBvcyk7XG5cdFx0XHRcdFx0aWYgKHBpID09PSAnKicpIHtcblx0XHRcdFx0XHRcdHBzKCc8L3VsPicpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAocGkgPT09ICcjJykge1xuXHRcdFx0XHRcdFx0cHMoJzwvb2w+Jyk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChbJycsICcqJywgJyMnXS5pbmRleE9mKGxfbWF0Y2hbMV0uY2hhckF0KHByZXZQb3MpKSkge1xuXHRcdFx0XHRcdFx0Ly8gY2xvc2UgYSBkbCBvbmx5IGlmIHRoZSBuZXcgaXRlbSBpcyBub3QgYSBkbCBpdGVtICg6LCA7IG9yIGVtcHR5KVxuXHRcdFx0XHRcdFx0cHMoJzwvZGw+Jyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIG9wZW4gbmV3IGxpc3RzXG5cdFx0XHRcdGZvciAobGV0IG1hdGNoUG9zID0gaXBvczsgbWF0Y2hQb3MgPCBsX21hdGNoWzFdLmxlbmd0aDsgbWF0Y2hQb3MrKykge1xuXHRcdFx0XHRcdGNvbnN0IGxpID0gbF9tYXRjaFsxXS5jaGFyQXQobWF0Y2hQb3MpO1xuXHRcdFx0XHRcdGlmIChsaSA9PT0gJyonKSB7XG5cdFx0XHRcdFx0XHRwcygnPHVsPicpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAobGkgPT09ICcjJykge1xuXHRcdFx0XHRcdFx0cHMoJzxvbD4nKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKFsnJywgJyonLCAnIyddLmluZGV4T2YocHJldi5jaGFyQXQobWF0Y2hQb3MpKSkge1xuXHRcdFx0XHRcdFx0Ly8gb3BlbiBhIG5ldyBkbCBvbmx5IGlmIHRoZSBwcmV2IGl0ZW0gaXMgbm90IGEgZGwgaXRlbSAoOiwgOyBvciBlbXB0eSlcblx0XHRcdFx0XHRcdHBzKCc8ZGw+Jyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHN3aXRjaCAobF9tYXRjaFsxXS5hdCgtMSkpIHtcblx0XHRcdFx0XHRjYXNlICcqJzpcblx0XHRcdFx0XHRjYXNlICcjJzpcblx0XHRcdFx0XHRcdHBzKGA8bGk+JHtwYXJzZV9pbmxpbmVfbm93aWtpKGxfbWF0Y2hbMl0pfWApO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnOyc6IHtcblx0XHRcdFx0XHRcdHBzKCc8ZHQ+Jyk7XG5cdFx0XHRcdFx0XHRjb25zdCBkdF9tYXRjaCA9IGxfbWF0Y2hbMl0ubWF0Y2goLyguKj8pKDouKj8pJC8pO1xuXHRcdFx0XHRcdFx0Ly8gaGFuZGxlIDtkdCA6ZGQgZm9ybWF0XG5cdFx0XHRcdFx0XHRpZiAoZHRfbWF0Y2gpIHtcblx0XHRcdFx0XHRcdFx0cHMocGFyc2VfaW5saW5lX25vd2lraShkdF9tYXRjaFsxXSkpO1xuXHRcdFx0XHRcdFx0XHRsbC51bnNoaWZ0KGR0X21hdGNoWzJdKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHBzKHBhcnNlX2lubGluZV9ub3dpa2kobF9tYXRjaFsyXSkpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNhc2UgJzonOlxuXHRcdFx0XHRcdFx0cHMoYDxkZD4ke3BhcnNlX2lubGluZV9ub3dpa2kobF9tYXRjaFsyXSl9YCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0WywgcHJldl0gPSBsX21hdGNoO1xuXHRcdFx0fVxuXHRcdFx0Ly8gY2xvc2UgcmVtYWluaW5nIGxpc3RzXG5cdFx0XHRmb3IgKGxldCBpID0gcHJldi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0XHRwcyhmKCc8Lz8+JywgcHJldi5jaGFyQXQoaSkgPT09ICcqJyA/ICd1bCcgOiBwcmV2LmNoYXJBdChpKSA9PT0gJyMnID8gJ29sJyA6ICdkbCcpKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdGNvbnN0IHBhcnNlX3RhYmxlID0gKCkgPT4ge1xuXHRcdFx0ZW5kbChmKCc8dGFibGU+JywgY29tcGFyZUxpbmVTdHJpbmdPclJlZygvXntcXHwoIC4qKSQvKSA/IHJbMV0gOiAnJykpO1xuXHRcdFx0Zm9yICg7IHJlbWFpbigpOyApIHtcblx0XHRcdFx0aWYgKGNvbXBhcmVMaW5lU3RyaW5nT3JSZWcoJ3wnKSkge1xuXHRcdFx0XHRcdHN3aXRjaCAoY2hhckF0UG9pbnQoMSkpIHtcblx0XHRcdFx0XHRcdGNhc2UgJ30nOlxuXHRcdFx0XHRcdFx0XHRlbmRsKCc8L3RhYmxlPicpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHRjYXNlICctJzpcblx0XHRcdFx0XHRcdFx0ZW5kbChmKCc8dHI+JywgY29tcGFyZUxpbmVTdHJpbmdPclJlZygvXFx8LSooLiopLylbMV0pKTtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRwYXJzZV90YWJsZV9kYXRhKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKGNvbXBhcmVMaW5lU3RyaW5nT3JSZWcoJyEnKSkge1xuXHRcdFx0XHRcdHBhcnNlX3RhYmxlX2RhdGEoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzaCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRjb25zdCBwYXJzZV90YWJsZV9kYXRhID0gKCkgPT4ge1xuXHRcdFx0bGV0IHRkX2xpbmU7XG5cdFx0XHRsZXQgbWF0Y2hfaTtcblx0XHRcdC8vIDE6IFwifCtcIiwgJ3wnIG9yICcrJ1xuXHRcdFx0Ly8gMjogPz9cblx0XHRcdC8vIDM6IGF0dHJpYnV0ZXMgPz9cblx0XHRcdC8vIFRPRE86IGZpbmlzaCBjb21tZW50aW5nIHRoaXMgcmVnZXhwXG5cdFx0XHRjb25zdCB0ZF9tYXRjaCA9IHNoKCkubWF0Y2goL14oXFx8XFwrfFxcfHwhKSgoPzooW15bfF0qPylcXHwoPyFcXHwpKT8oLiopKSQvKTtcblx0XHRcdGlmICh0ZF9tYXRjaFsxXSA9PT0gJ3wrJykge1xuXHRcdFx0XHRwcygnPGNhcHRpb24nKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHBzKGA8dCR7dGRfbWF0Y2hbMV0gPT09ICd8JyA/ICdkJyA6ICdoJ31gKTtcblx0XHRcdH1cblx0XHRcdGlmICh0ZF9tYXRjaFszXSkge1xuXHRcdFx0XHQvLyBwcygnICcgKyB0ZF9tYXRjaFszXSlcblx0XHRcdFx0bWF0Y2hfaSA9IDQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRtYXRjaF9pID0gMjtcblx0XHRcdH1cblx0XHRcdHBzKCc+Jyk7XG5cdFx0XHRpZiAodGRfbWF0Y2hbMV0gPT09ICd8KycpIHtcblx0XHRcdFx0cHMocGFyc2VfaW5saW5lX25vd2lraSh0ZF9tYXRjaFttYXRjaF9pXSkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gdXNlIHx8IG9yICEhIGFzIGEgY2VsbCBzZXBhcmF0b3IgZGVwZW5kaW5nIG9uIGNvbnRleHRcblx0XHRcdFx0Ly8gTk9URTogd2hlbiBzcGxpdCgpIGlzIHBhc3NlZCBhIHJlZ2V4cCBtYWtlIHN1cmUgdG8gdXNlIG5vbi1jYXB0dXJpbmcgYnJhY2tldHNcblx0XHRcdFx0dGRfbGluZSA9IHRkX21hdGNoW21hdGNoX2ldLnNwbGl0KHRkX21hdGNoWzFdID09PSAnfCcgPyAnfHwnIDogL1xcfFxcfHwhIS8pO1xuXHRcdFx0XHRwcyhwYXJzZV9pbmxpbmVfbm93aWtpKHRkX2xpbmUuc2hpZnQoKSkpO1xuXHRcdFx0XHR3aGlsZSAodGRfbGluZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0bGwudW5zaGlmdCh0ZF9tYXRjaFsxXSArIHRkX2xpbmUucG9wKCkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRsZXQgdGMgPSAwO1xuXHRcdFx0Y29uc3QgdGQgPSBbXTtcblx0XHRcdHdoaWxlIChyZW1haW4oKSkge1xuXHRcdFx0XHR0ZC5wdXNoKHNoKCkpO1xuXHRcdFx0XHRpZiAoY29tcGFyZUxpbmVTdHJpbmdPclJlZygnfCcpKSB7XG5cdFx0XHRcdFx0aWYgKCF0Yykge1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChjaGFyQXRQb2ludCgxKSA9PT0gJ30nKSB7XG5cdFx0XHRcdFx0XHQvLyB3ZSdyZSBhdCB0aGUgb3V0ZXItbW9zdCBsZXZlbCAobm8gbmVzdGVkIHRhYmxlcyksIHNraXAgdG8gdGQgcGFyc2Vcblx0XHRcdFx0XHRcdHRjLS07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKCF0YyAmJiBjb21wYXJlTGluZVN0cmluZ09yUmVnKCchJykpIHtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fSBlbHNlIGlmIChjb21wYXJlTGluZVN0cmluZ09yUmVnKCd7fCcpKSB7XG5cdFx0XHRcdFx0dGMrKztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHRkLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0cHMoSW5zdGEuY29udmVydCh0ZCkpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0Y29uc3QgcGFyc2VfcHJlID0gKCkgPT4ge1xuXHRcdFx0cHMoJzxwcmU+Jyk7XG5cdFx0XHRkbyB7XG5cdFx0XHRcdGVuZGwoYCR7cGFyc2VfaW5saW5lX25vd2lraShsbFswXS5zbGljZSgxKSl9XFxuYCk7XG5cdFx0XHR9IHdoaWxlIChyZW1haW4oKSAmJiBjb21wYXJlTGluZVN0cmluZ09yUmVnKCcgJykpO1xuXHRcdFx0cHMoJzwvcHJlPicpO1xuXHRcdH07XG5cdFx0Y29uc3QgcGFyc2VfYmxvY2tfaW1hZ2UgPSAoKSA9PiB7XG5cdFx0XHRwcyhwYXJzZV9pbWFnZShzaCgpKSk7XG5cdFx0fTtcblx0XHRjb25zdCBwYXJzZV9pbWFnZSA9IChzdHIpID0+IHtcblx0XHRcdC8vIGdldCB3aGF0J3MgaW4gYmV0d2VlbiBcIltbSW1hZ2U6XCIgYW5kIFwiXV1cIlxuXHRcdFx0bGV0IHRhZyA9IHN0ci5zdWJzdHJpbmcoc3RyLmluZGV4T2YoJzonKSArIDEsIHN0ci5sZW5ndGggLSAyKTtcblx0XHRcdGxldCB3aWR0aDtcblx0XHRcdGxldCBhdHRyID0gW107XG5cdFx0XHRsZXQgZmlsZW5hbWU7XG5cdFx0XHRsZXQgY2FwdGlvbiA9ICcnO1xuXHRcdFx0bGV0IHRodW1iID0gMDtcblx0XHRcdGxldCBmcmFtZSA9IDA7XG5cdFx0XHRsZXQgY2VudGVyID0gMDtcblx0XHRcdGxldCBhbGlnbiA9ICcnO1xuXHRcdFx0aWYgKC9cXHwvLnRlc3QodGFnKSkge1xuXHRcdFx0XHQvLyBtYW5hZ2UgbmVzdGVkIGxpbmtzXG5cdFx0XHRcdGxldCBuZXN0aW5nID0gMDtcblx0XHRcdFx0bGV0IGxhc3RfYXR0cjtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IHRhZy5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG5cdFx0XHRcdFx0aWYgKHRhZy5jaGFyQXQoaSkgPT09ICd8JyAmJiAhbmVzdGluZykge1xuXHRcdFx0XHRcdFx0bGFzdF9hdHRyID0gdGFnLnNsaWNlKGkgKyAxKTtcblx0XHRcdFx0XHRcdHRhZyA9IHRhZy5zbGljZSgwLCBNYXRoLm1heCgwLCBpKSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0c3dpdGNoICh0YWcuc2xpY2UoaSAtIDEsIGkgLSAxICsgMikpIHtcblx0XHRcdFx0XHRcdFx0Y2FzZSAnXV0nOlxuXHRcdFx0XHRcdFx0XHRcdG5lc3RpbmcrKztcblx0XHRcdFx0XHRcdFx0XHRpLS07XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ1tbJzpcblx0XHRcdFx0XHRcdFx0XHRuZXN0aW5nLS07XG5cdFx0XHRcdFx0XHRcdFx0aS0tO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRhdHRyID0gdGFnLnNwbGl0KC9cXHMqXFx8XFxzKi8pO1xuXHRcdFx0XHRhdHRyLnB1c2gobGFzdF9hdHRyKTtcblx0XHRcdFx0ZmlsZW5hbWUgPSBhdHRyLnNoaWZ0KCk7XG5cdFx0XHRcdGxldCB3X21hdGNoO1xuXHRcdFx0XHRmb3IgKDsgYXR0ci5sZW5ndGggPiAwOyBhdHRyLnNoaWZ0KCkpIHtcblx0XHRcdFx0XHR3X21hdGNoID0gYXR0clswXS5tYXRjaCgvXihcXGQqKSg/OltweF0qXFxkKik/cHgkLyk7XG5cdFx0XHRcdFx0aWYgKHdfbWF0Y2gpIHtcblx0XHRcdFx0XHRcdFssIHdpZHRoXSA9IHdfbWF0Y2g7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHN3aXRjaCAoYXR0clswXSkge1xuXHRcdFx0XHRcdFx0XHRjYXNlICd0aHVtYic6XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ3RodW1ibmFpbCc6XG5cdFx0XHRcdFx0XHRcdFx0dGh1bWIgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRcdGZyYW1lID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0Y2FzZSAnZnJhbWUnOlxuXHRcdFx0XHRcdFx0XHRcdGZyYW1lID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0Y2FzZSAnbm9uZSc6XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ3JpZ2h0Jzpcblx0XHRcdFx0XHRcdFx0Y2FzZSAnbGVmdCc6XG5cdFx0XHRcdFx0XHRcdFx0Y2VudGVyID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdFx0W2FsaWduXSA9IGF0dHI7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ2NlbnRlcic6XG5cdFx0XHRcdFx0XHRcdFx0Y2VudGVyID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHRhbGlnbiA9ICdub25lJztcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0XHRpZiAoYXR0ci5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFtjYXB0aW9uXSA9IGF0dHI7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZmlsZW5hbWUgPSB0YWc7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fTtcblx0XHRjb25zdCBwYXJzZV9pbmxpbmVfbm93aWtpID0gKHN0cikgPT4ge1xuXHRcdFx0bGV0IHN0YXJ0O1xuXHRcdFx0bGV0IGxhc3RlbmQgPSAwO1xuXHRcdFx0bGV0IHN1YnN0YXJ0ID0gMDtcblx0XHRcdGxldCBuZXN0bGV2ID0gMDtcblx0XHRcdGxldCBvcGVuO1xuXHRcdFx0bGV0IGNsb3NlO1xuXHRcdFx0bGV0IHN1Ymxvb3A7XG5cdFx0XHRsZXQgaHRtbCA9ICcnO1xuXHRcdFx0d2hpbGUgKChzdGFydCA9IHN0ci5pbmRleE9mKCc8bm8nLmNvbmNhdCgnd2lraScsICc+JyksIHN1YnN0YXJ0KSkgIT09IC0xKSB7XG5cdFx0XHRcdGh0bWwgKz0gcGFyc2VfaW5saW5lX3dpa2koc3RyLnN1YnN0cmluZyhsYXN0ZW5kLCBzdGFydCkpO1xuXHRcdFx0XHRzdGFydCArPSA4O1xuXHRcdFx0XHRzdWJzdGFydCA9IHN0YXJ0O1xuXHRcdFx0XHRzdWJsb29wID0gdHJ1ZTtcblx0XHRcdFx0ZG8ge1xuXHRcdFx0XHRcdG9wZW4gPSBzdHIuaW5kZXhPZignPG5vJy5jb25jYXQoJ3dpa2knLCAnPicpLCBzdWJzdGFydCk7XG5cdFx0XHRcdFx0Y2xvc2UgPSBzdHIuaW5kZXhPZignPC9ubycuY29uY2F0KCd3aWtpJywgJz4nKSwgc3Vic3RhcnQpO1xuXHRcdFx0XHRcdGlmIChjbG9zZSA8PSBvcGVuIHx8IG9wZW4gPT09IC0xKSB7XG5cdFx0XHRcdFx0XHRpZiAoY2xvc2UgPT09IC0xKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBodG1sICsgaHRtbF9lbnRpdGllcyhzdHIuc2xpY2Uoc3RhcnQpKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHN1YnN0YXJ0ID0gY2xvc2UgKyA5O1xuXHRcdFx0XHRcdFx0aWYgKG5lc3RsZXYpIHtcblx0XHRcdFx0XHRcdFx0bmVzdGxldi0tO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0bGFzdGVuZCA9IHN1YnN0YXJ0O1xuXHRcdFx0XHRcdFx0XHRodG1sICs9IGh0bWxfZW50aXRpZXMoc3RyLnN1YnN0cmluZyhzdGFydCwgbGFzdGVuZCAtIDkpKTtcblx0XHRcdFx0XHRcdFx0c3VibG9vcCA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzdWJzdGFydCA9IG9wZW4gKyA4O1xuXHRcdFx0XHRcdFx0bmVzdGxldisrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSB3aGlsZSAoc3VibG9vcCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gaHRtbCArIHBhcnNlX2lubGluZV93aWtpKHN0ci5zbGljZShsYXN0ZW5kKSk7XG5cdFx0fTtcblx0XHRjb25zdCBwYXJzZV9pbmxpbmVfaW1hZ2VzID0gKHN0cikgPT4ge1xuXHRcdFx0bGV0IHN0YXJ0O1xuXHRcdFx0bGV0IHN1YnN0YXJ0ID0gMDtcblx0XHRcdGxldCBuZXN0bGV2ID0gMDtcblx0XHRcdGxldCBsb29wO1xuXHRcdFx0bGV0IGNsb3NlO1xuXHRcdFx0bGV0IG9wZW47XG5cdFx0XHRsZXQgd2lraTtcblx0XHRcdGxldCBodG1sO1xuXHRcdFx0d2hpbGUgKChzdGFydCA9IHN0ci5pbmRleE9mKCdbWycsIHN1YnN0YXJ0KSkgIT09IC0xKSB7XG5cdFx0XHRcdGlmIChuZXcgUmVnRXhwKGBeKEltYWdlfEZpbGV8JHtJbnN0YS5jb25mLmxvY2FsZS5pbWFnZX0pOmAsICdpJykudGVzdChzdHIuc2xpY2Uoc3RhcnQgKyAyKSkpIHtcblx0XHRcdFx0XHRsb29wID0gdHJ1ZTtcblx0XHRcdFx0XHRzdWJzdGFydCA9IHN0YXJ0O1xuXHRcdFx0XHRcdGRvIHtcblx0XHRcdFx0XHRcdHN1YnN0YXJ0ICs9IDI7XG5cdFx0XHRcdFx0XHRjbG9zZSA9IHN0ci5pbmRleE9mKCddXScsIHN1YnN0YXJ0KTtcblx0XHRcdFx0XHRcdG9wZW4gPSBzdHIuaW5kZXhPZignW1snLCBzdWJzdGFydCk7XG5cdFx0XHRcdFx0XHRpZiAoY2xvc2UgPD0gb3BlbiB8fCBvcGVuID09PSAtMSkge1xuXHRcdFx0XHRcdFx0XHRpZiAoY2xvc2UgPT09IC0xKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHN0cjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRzdWJzdGFydCA9IGNsb3NlO1xuXHRcdFx0XHRcdFx0XHRpZiAobmVzdGxldikge1xuXHRcdFx0XHRcdFx0XHRcdG5lc3RsZXYtLTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHR3aWtpID0gc3RyLnN1YnN0cmluZyhzdGFydCwgY2xvc2UgKyAyKTtcblx0XHRcdFx0XHRcdFx0XHRodG1sID0gcGFyc2VfaW1hZ2Uod2lraSk7XG5cdFx0XHRcdFx0XHRcdFx0c3RyID0gc3RyLnJlcGxhY2Uod2lraSwgaHRtbCk7XG5cdFx0XHRcdFx0XHRcdFx0c3Vic3RhcnQgPSBzdGFydCArIGh0bWwubGVuZ3RoO1xuXHRcdFx0XHRcdFx0XHRcdGxvb3AgPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0c3Vic3RhcnQgPSBvcGVuO1xuXHRcdFx0XHRcdFx0XHRuZXN0bGV2Kys7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSB3aGlsZSAobG9vcCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBzdHI7XG5cdFx0fTtcblx0XHQvLyB0aGUgb3V0cHV0IG9mIHRoaXMgZnVuY3Rpb24gZG9lc24ndCByZXNwZWN0IHRoZSBGSUxPIHN0cnVjdHVyZSBvZiBIVE1MXG5cdFx0Ly8gYnV0IHNpbmNlIG1vc3QgYnJvd3NlcnMgY2FuIGhhbmRsZSBpdCBJJ2xsIHNhdmUgbXlzZWxmIHRoZSBoYXNzbGVcblx0XHRjb25zdCBwYXJzZV9pbmxpbmVfZm9ybWF0dGluZyA9IChzdHIpID0+IHtcblx0XHRcdGxldCBlbTtcblx0XHRcdGxldCBzdDtcblx0XHRcdGxldCBpO1xuXHRcdFx0bGV0IGxpO1xuXHRcdFx0bGV0IG8gPSAnJztcblx0XHRcdHdoaWxlICgoaSA9IHN0ci5pbmRleE9mKFwiJydcIiwgbGkpKSArIDEpIHtcblx0XHRcdFx0byArPSBzdHIuc3Vic3RyaW5nKGxpLCBpKTtcblx0XHRcdFx0bGkgPSBpICsgMjtcblx0XHRcdFx0aWYgKHN0ci5jaGFyQXQoaSArIDIpID09PSBcIidcIikge1xuXHRcdFx0XHRcdGxpKys7XG5cdFx0XHRcdFx0c3QgPSAhc3Q7XG5cdFx0XHRcdFx0byArPSBzdCA/ICc8c3Ryb25nPicgOiAnPC9zdHJvbmc+Jztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRlbSA9ICFlbTtcblx0XHRcdFx0XHRvICs9IGVtID8gJzxlbT4nIDogJzwvZW0+Jztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG8gKyBzdHIuc2xpY2UobGkpO1xuXHRcdH07XG5cdFx0Y29uc3QgcGFyc2VfaW5saW5lX3dpa2kgPSAoc3RyKSA9PiB7XG5cdFx0XHRzdHIgPSBwYXJzZV9pbmxpbmVfaW1hZ2VzKHN0cik7XG5cdFx0XHRzdHIgPSBwYXJzZV9pbmxpbmVfZm9ybWF0dGluZyhzdHIpO1xuXHRcdFx0Ly8gbWF0aFxuXHRcdFx0c3RyID0gc3RyLnJlcGxhY2UoLzxtYXRoPiguKj8pPFxcL21hdGg+L2dpLCAnJyk7XG5cdFx0XHQvLyBCdWlsZCBhIE1lZGlhd2lraS1mb3JtYXR0ZWQgZGF0ZSBzdHJpbmdcblx0XHRcdGxldCBkYXRlID0gbmV3IERhdGUoKTtcblx0XHRcdGxldCBtaW51dGVzID0gZGF0ZS5nZXRVVENNaW51dGVzKCk7XG5cdFx0XHRpZiAobWludXRlcyA8IDEwKSB7XG5cdFx0XHRcdG1pbnV0ZXMgPSBgMCR7bWludXRlc31gO1xuXHRcdFx0fVxuXHRcdFx0ZGF0ZSA9IGYoXG5cdFx0XHRcdCc/Oj8sID8gPyA/IChVVEMpJyxcblx0XHRcdFx0ZGF0ZS5nZXRVVENIb3VycygpLFxuXHRcdFx0XHRtaW51dGVzLFxuXHRcdFx0XHRkYXRlLmdldFVUQ0RhdGUoKSxcblx0XHRcdFx0SW5zdGEuY29uZi5sb2NhbGUubW9udGhzW2RhdGUuZ2V0VVRDTW9udGgoKV0sXG5cdFx0XHRcdGRhdGUuZ2V0VVRDRnVsbFllYXIoKVxuXHRcdFx0KTtcblx0XHRcdC8vIHRleHQgZm9ybWF0dGluZ1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0c3RyXG5cdFx0XHRcdFx0Ly8gc2lnbmF0dXJlc1xuXHRcdFx0XHRcdC5yZXBsYWNlKC9+ezV9KD8hfikvZywgZGF0ZSlcblx0XHRcdFx0XHQucmVwbGFjZSgvfns0fSg/IX4pL2csIGAke0luc3RhLmNvbmYudXNlci5uYW1lfSAke2RhdGV9YClcblx0XHRcdFx0XHQucmVwbGFjZSgvfnszfSg/IX4pL2csIEluc3RhLmNvbmYudXNlci5uYW1lKVxuXHRcdFx0XHRcdC8vIFtbOkNhdGVnb3J5Oi4uLl1dLCBbWzpJbWFnZTouLi5dXSwgZXRjLi4uXG5cdFx0XHRcdFx0LnJlcGxhY2UoXG5cdFx0XHRcdFx0XHRuZXcgUmVnRXhwKFxuXHRcdFx0XHRcdFx0XHRgXFxcXFtcXFxcWzooKD86JHtJbnN0YS5jb25mLmxvY2FsZS5jYXRlZ29yeX18SW1hZ2V8RmlsZXwke0luc3RhLmNvbmYubG9jYWxlLmltYWdlfXwke0luc3RhLmNvbmYud2lraS5pbnRlcndpa2l9KTpbXnxdKj8pXFxcXF1cXFxcXShcXFxcdyopYCxcblx0XHRcdFx0XHRcdFx0J2dpJ1xuXHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdChfJDAsICQxLCAkMikgPT4ge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZihcblx0XHRcdFx0XHRcdFx0XHRcIjxhIGhyZWY9Jz8nPj88L2E+XCIsXG5cdFx0XHRcdFx0XHRcdFx0SW5zdGEuY29uZi5wYXRocy5hcnRpY2xlcyArIGh0bWxlc2NhcGVfYXR0cigkMSksXG5cdFx0XHRcdFx0XHRcdFx0aHRtbGVzY2FwZV90ZXh0KCQxKSArIGh0bWxlc2NhcGVfdGV4dCgkMilcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0Ly8gcmVtb3ZlIHN0cmFpZ2h0IGNhdGVnb3J5IGFuZCBpbnRlcndpa2kgdGFnc1xuXHRcdFx0XHRcdC5yZXBsYWNlKFxuXHRcdFx0XHRcdFx0bmV3IFJlZ0V4cChcblx0XHRcdFx0XHRcdFx0YFxcXFxbXFxcXFsoPzoke0luc3RhLmNvbmYubG9jYWxlLmNhdGVnb3J5fXwke0luc3RhLmNvbmYud2lraS5pbnRlcndpa2l9KTouKj9cXFxcXVxcXFxdYCxcblx0XHRcdFx0XHRcdFx0J2dpJ1xuXHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdCcnXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHRcdC8vIFtbOkNhdGVnb3J5Oi4uLnxMaW5rc11dLCBbWzpJbWFnZTouLi58TGlua3NdXSwgZXRjLi4uXG5cdFx0XHRcdFx0LnJlcGxhY2UoXG5cdFx0XHRcdFx0XHRuZXcgUmVnRXhwKFxuXHRcdFx0XHRcdFx0XHRgXFxcXFtcXFxcWzooKD86JHtJbnN0YS5jb25mLmxvY2FsZS5jYXRlZ29yeX18SW1hZ2V8RmlsZXwke0luc3RhLmNvbmYubG9jYWxlLmltYWdlfXwke0luc3RhLmNvbmYud2lraS5pbnRlcndpa2l9KTouKj8pXFxcXHwoW15cXFxcXV0rPylcXFxcXVxcXFxdKFxcXFx3KilgLFxuXHRcdFx0XHRcdFx0XHQnZ2knXG5cdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0KF8kMCwgJDEsICQyLCAkMykgPT4ge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZihcblx0XHRcdFx0XHRcdFx0XHRcIjxhIGhyZWY9Jz8nPj88L2E+XCIsXG5cdFx0XHRcdFx0XHRcdFx0SW5zdGEuY29uZi5wYXRocy5hcnRpY2xlcyArIGh0bWxlc2NhcGVfYXR0cigkMSksXG5cdFx0XHRcdFx0XHRcdFx0aHRtbGVzY2FwZV90ZXh0KCQyKSArIGh0bWxlc2NhcGVfdGV4dCgkMylcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0Ly8gW1svUmVsYXRpdmUgbGlua3NdXVxuXHRcdFx0XHRcdC5yZXBsYWNlKC9cXFtcXFsoXFwvW158XSo/KV1dL2csIChfJDAsICQxKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZihcIjxhIGhyZWY9Jz8nPj88L2E+XCIsIEluc3RhLmNvbmYuYmFzZVVybCArIGh0bWxlc2NhcGVfYXR0cigkMSksIGh0bWxlc2NhcGVfdGV4dCgkMSkpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0Ly8gW1svUmVwbGFjZWR8UmVsYXRpdmUgbGlua3NdXVxuXHRcdFx0XHRcdC5yZXBsYWNlKC9cXFtcXFsoXFwvLio/KVxcfCguKz8pXV0vZywgKF8kMCwgJDEsICQyKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZihcIjxhIGhyZWY9Jz8nPj88L2E+XCIsIEluc3RhLmNvbmYuYmFzZVVybCArIGh0bWxlc2NhcGVfYXR0cigkMSksIGh0bWxlc2NhcGVfdGV4dCgkMikpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0Ly8gW1tDb21tb24gbGlua3NdXVxuXHRcdFx0XHRcdC5yZXBsYWNlKC9cXFtcXFsoW15bfF0qPyldXShcXHcqKS9nLCAoXyQwLCAkMSwgJDIpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBmKFxuXHRcdFx0XHRcdFx0XHRcIjxhIGhyZWY9Jz8nPj88L2E+XCIsXG5cdFx0XHRcdFx0XHRcdEluc3RhLmNvbmYucGF0aHMuYXJ0aWNsZXMgKyBodG1sZXNjYXBlX2F0dHIoJDEpLFxuXHRcdFx0XHRcdFx0XHRodG1sZXNjYXBlX3RleHQoJDEpICsgaHRtbGVzY2FwZV90ZXh0KCQyKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC8vIFtbUmVwbGFjZWR8TGlua3NdXVxuXHRcdFx0XHRcdC5yZXBsYWNlKC9cXFtcXFsoW15bXSo/KVxcfChbXlxcXV0rPyldXShcXHcqKS9nLCAoXyQwLCAkMSwgJDIsICQzKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZihcblx0XHRcdFx0XHRcdFx0XCI8YSBocmVmPSc/Jz4/PC9hPlwiLFxuXHRcdFx0XHRcdFx0XHRJbnN0YS5jb25mLnBhdGhzLmFydGljbGVzICsgaHRtbGVzY2FwZV9hdHRyKCQxKSxcblx0XHRcdFx0XHRcdFx0aHRtbGVzY2FwZV90ZXh0KCQyKSArIGh0bWxlc2NhcGVfdGV4dCgkMylcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQvLyBbW1N0cmlwcGVkOk5hbWVzcGFjZXxOYW1lc3BhY2VdXVxuXHRcdFx0XHRcdC5yZXBsYWNlKC9cXFtcXFsoW15cXF1dKj86KT8oLio/KSggKlxcKC4qP1xcKSk/XFx8XV0vZywgKF8kMCwgJDEsICQyLCAkMykgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGYoXG5cdFx0XHRcdFx0XHRcdFwiPGEgaHJlZj0nPyc+PzwvYT5cIixcblx0XHRcdFx0XHRcdFx0SW5zdGEuY29uZi5wYXRocy5hcnRpY2xlcyArIGh0bWxlc2NhcGVfYXR0cigkMSkgKyBodG1sZXNjYXBlX2F0dHIoJDIpICsgaHRtbGVzY2FwZV9hdHRyKCQzKSxcblx0XHRcdFx0XHRcdFx0aHRtbGVzY2FwZV90ZXh0KCQyKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC8vIEV4dGVybmFsIGxpbmtzXG5cdFx0XHRcdFx0LnJlcGxhY2UoL1xcWyhodHRwcz98bmV3c3xmdHB8bWFpbHRvfGdvcGhlcnxpcmMpOihcXC8qKShbXlxcXV0qPykgKC4qPyldL2csIChfJDAsICQxLCAkMiwgJDMsICQ0KSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZihcblx0XHRcdFx0XHRcdFx0XCI8YSBjbGFzcz0nZXh0ZXJuYWwnIGhyZWY9Jz86Pyc+PzwvYT5cIixcblx0XHRcdFx0XHRcdFx0aHRtbGVzY2FwZV9hdHRyKCQxKSxcblx0XHRcdFx0XHRcdFx0aHRtbGVzY2FwZV9hdHRyKCQyKSArIGh0bWxlc2NhcGVfYXR0cigkMyksXG5cdFx0XHRcdFx0XHRcdGh0bWxlc2NhcGVfdGV4dCgkNClcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQucmVwbGFjZSgvXFxbaHR0cDpcXC9cXC8oLio/KV0vZywgKF8kMCwgJDEpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBmKFwiPGEgY2xhc3M9J2V4dGVybmFsJyBocmVmPSdodHRwOi8vPyc+WyNdPC9hPlwiLCBodG1sZXNjYXBlX2F0dHIoJDEpKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5yZXBsYWNlKC9cXFsobmV3c3xmdHB8bWFpbHRvfGdvcGhlcnxpcmMpOihcXC8qKSguKj8pXS9nLCAoXyQwLCAkMSwgJDIsICQzKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZihcblx0XHRcdFx0XHRcdFx0XCI8YSBjbGFzcz0nZXh0ZXJuYWwnIGhyZWY9Jz86Pyc+Pzo/PC9hPlwiLFxuXHRcdFx0XHRcdFx0XHRodG1sZXNjYXBlX2F0dHIoJDEpLFxuXHRcdFx0XHRcdFx0XHRodG1sZXNjYXBlX2F0dHIoJDIpICsgaHRtbGVzY2FwZV9hdHRyKCQzKSxcblx0XHRcdFx0XHRcdFx0aHRtbGVzY2FwZV90ZXh0KCQxKSxcblx0XHRcdFx0XHRcdFx0aHRtbGVzY2FwZV90ZXh0KCQyKSArIGh0bWxlc2NhcGVfdGV4dCgkMylcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQucmVwbGFjZShcblx0XHRcdFx0XHRcdC8oXnwgKShodHRwcz98bmV3c3xmdHB8bWFpbHRvfGdvcGhlcnxpcmMpOihcXC8qKShbXiAkXSpbXiAhJCwuOjs/XSkvZyxcblx0XHRcdFx0XHRcdChfJDAsICQxLCAkMiwgJDMsICQ0KSA9PiB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmKFxuXHRcdFx0XHRcdFx0XHRcdFwiPzxhIGNsYXNzPSdleHRlcm5hbCcgaHJlZj0nPzo/Jz4/Oj88L2E+XCIsXG5cdFx0XHRcdFx0XHRcdFx0aHRtbGVzY2FwZV90ZXh0KCQxKSxcblx0XHRcdFx0XHRcdFx0XHRodG1sZXNjYXBlX2F0dHIoJDIpLFxuXHRcdFx0XHRcdFx0XHRcdGh0bWxlc2NhcGVfYXR0cigkMykgKyBodG1sZXNjYXBlX2F0dHIoJDQpLFxuXHRcdFx0XHRcdFx0XHRcdGh0bWxlc2NhcGVfdGV4dCgkMiksXG5cdFx0XHRcdFx0XHRcdFx0aHRtbGVzY2FwZV90ZXh0KCQzKSArIGh0bWxlc2NhcGVfdGV4dCgkNClcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0LnJlcGxhY2UoJ19fTk9UT0NfXycsICcnKVxuXHRcdFx0XHRcdC5yZXBsYWNlKCdfX05PSU5ERVhfXycsICcnKVxuXHRcdFx0XHRcdC5yZXBsYWNlKCdfX0lOREVYX18nLCAnJylcblx0XHRcdFx0XHQucmVwbGFjZSgnX19OT0VESVRTRUNUSU9OX18nLCAnJylcblx0XHRcdCk7XG5cdFx0fTtcblx0XHQvLyBiZWdpbiBwYXJzaW5nXG5cdFx0Zm9yICg7IHJlbWFpbigpOyApIHtcblx0XHRcdGlmIChjb21wYXJlTGluZVN0cmluZ09yUmVnKC9eKD17MSw2fSkoLiopXFwxKC4qKSQvKSkge1xuXHRcdFx0XHRwID0gMDtcblx0XHRcdFx0ZW5kbChmKCc8aD8+PzwvaD8+PycsIHJbMV0ubGVuZ3RoLCBwYXJzZV9pbmxpbmVfbm93aWtpKHJbMl0pLCByWzFdLmxlbmd0aCwgclszXSkpO1xuXHRcdFx0fSBlbHNlIGlmIChjb21wYXJlTGluZVN0cmluZ09yUmVnKC9eWyMqOjtdLykpIHtcblx0XHRcdFx0cCA9IDA7XG5cdFx0XHRcdHBhcnNlX2xpc3QoKTtcblx0XHRcdH0gZWxzZSBpZiAoY29tcGFyZUxpbmVTdHJpbmdPclJlZygnICcpKSB7XG5cdFx0XHRcdHAgPSAwO1xuXHRcdFx0XHRwYXJzZV9wcmUoKTtcblx0XHRcdH0gZWxzZSBpZiAoY29tcGFyZUxpbmVTdHJpbmdPclJlZygne3wnKSkge1xuXHRcdFx0XHRwID0gMDtcblx0XHRcdFx0cGFyc2VfdGFibGUoKTtcblx0XHRcdH0gZWxzZSBpZiAoY29tcGFyZUxpbmVTdHJpbmdPclJlZygvXi0tLS0rJC8pKSB7XG5cdFx0XHRcdHAgPSAwO1xuXHRcdFx0XHRlbmRsKCc8aHI+Jyk7XG5cdFx0XHR9IGVsc2UgaWYgKGNvbXBhcmVMaW5lU3RyaW5nT3JSZWcoSW5zdGEuQkxPQ0tfSU1BR0UpKSB7XG5cdFx0XHRcdHAgPSAwO1xuXHRcdFx0XHRwYXJzZV9ibG9ja19pbWFnZSgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gaGFuZGxlIHBhcmFncmFwaHNcblx0XHRcdFx0aWYgKGNvbXBhcmVMaW5lU3RyaW5nKCcnKSkge1xuXHRcdFx0XHRcdHAgPSByZW1haW4oKSA+IDEgJiYgbGxbMV0gPT09ICcnO1xuXHRcdFx0XHRcdGlmIChwKSB7XG5cdFx0XHRcdFx0XHRlbmRsKCc8cD48YnI+Jyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGlmICghcCkge1xuXHRcdFx0XHRcdFx0cHMoJzxwPicpO1xuXHRcdFx0XHRcdFx0cCA9IDE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHBzKGAke3BhcnNlX2lubGluZV9ub3dpa2kobGxbMF0pfSBgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzaCgpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gbztcblx0fTtcblx0Y29uc3Qgd2lraTJodG1sID0gKHR4dCwgYmFzZXVybCkgPT4ge1xuXHRcdEluc3RhLmNvbmYuYmFzZVVybCA9IGJhc2V1cmw7XG5cdFx0cmV0dXJuIEluc3RhLmNvbnZlcnQodHh0KTtcblx0fTtcblx0Ly8gRU5ERklMRTogbGl2ZXByZXZpZXcuanNcblx0Ly8gU1RBUlRGSUxFOiBwYWdlaW5mby5qc1xuXHRjb25zdCBwb3B1cEZpbHRlclBhZ2VTaXplID0gKGRhdGEpID0+IHtcblx0XHRyZXR1cm4gZm9ybWF0Qnl0ZXMoZGF0YS5sZW5ndGgpO1xuXHR9O1xuXHRjb25zdCBwb3B1cEZpbHRlckNvdW50TGlua3MgPSAoZGF0YSkgPT4ge1xuXHRcdGNvbnN0IG51bSA9IGNvdW50TGlua3MoZGF0YSk7XG5cdFx0cmV0dXJuIGAke1N0cmluZyhudW0pfSZuYnNwOyR7bnVtID09PSAxID8gcG9wdXBTdHJpbmcoJ3dpa2lMaW5rJykgOiBwb3B1cFN0cmluZygnd2lraUxpbmtzJyl9YDtcblx0fTtcblx0Y29uc3QgcG9wdXBGaWx0ZXJDb3VudEltYWdlcyA9IChkYXRhKSA9PiB7XG5cdFx0Y29uc3QgbnVtID0gY291bnRJbWFnZXMoZGF0YSk7XG5cdFx0cmV0dXJuIGAke1N0cmluZyhudW0pfSZuYnNwOyR7bnVtID09PSAxID8gcG9wdXBTdHJpbmcoJ2ltYWdlJykgOiBwb3B1cFN0cmluZygnaW1hZ2VzJyl9YDtcblx0fTtcblx0Y29uc3QgcG9wdXBGaWx0ZXJDb3VudENhdGVnb3JpZXMgPSAoZGF0YSkgPT4ge1xuXHRcdGNvbnN0IG51bSA9IGNvdW50Q2F0ZWdvcmllcyhkYXRhKTtcblx0XHRyZXR1cm4gYCR7U3RyaW5nKG51bSl9Jm5ic3A7JHtudW0gPT09IDEgPyBwb3B1cFN0cmluZygnY2F0ZWdvcnknKSA6IHBvcHVwU3RyaW5nKCdjYXRlZ29yaWVzJyl9YDtcblx0fTtcblx0Y29uc3QgcG9wdXBGaWx0ZXJMYXN0TW9kaWZpZWQgPSAoX2RhdGEsIGRvd25sb2FkKSA9PiB7XG5cdFx0Y29uc3QgbGFzdG1vZCA9IGRvd25sb2FkLmxhc3RNb2RpZmllZDtcblx0XHRjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuXHRcdGNvbnN0IGFnZSA9IG5vdyAtIGxhc3Rtb2Q7XG5cdFx0aWYgKGxhc3Rtb2QgJiYgZ2V0VmFsdWVPZigncG9wdXBMYXN0TW9kaWZpZWQnKSkge1xuXHRcdFx0cmV0dXJuIHRwcmludGYoJyVzIG9sZCcsIFtmb3JtYXRBZ2UoYWdlKV0pLnJlcGxhY2UoLyAvZywgJyZuYnNwOycpO1xuXHRcdH1cblx0XHRyZXR1cm4gJyc7XG5cdH07XG5cdGNvbnN0IGZvcm1hdEFnZSA9IChhZ2UpID0+IHtcblx0XHQvLyBjb2VyY2UgaW50byBhIG51bWJlclxuXHRcdGxldCBhID0gMCArIGFnZTtcblx0XHRjb25zdCBhYSA9IGE7XG5cdFx0Y29uc3Qgc2VjbGVuID0gMTAwMDtcblx0XHRjb25zdCBtaW5sZW4gPSA2MCAqIHNlY2xlbjtcblx0XHRjb25zdCBob3VybGVuID0gNjAgKiBtaW5sZW47XG5cdFx0Y29uc3QgZGF5bGVuID0gMjQgKiBob3VybGVuO1xuXHRcdGNvbnN0IHdlZWtsZW4gPSA3ICogZGF5bGVuO1xuXHRcdGNvbnN0IG51bXdlZWtzID0gKGEgLSAoYSAlIHdlZWtsZW4pKSAvIHdlZWtsZW47XG5cdFx0YSAtPSBudW13ZWVrcyAqIHdlZWtsZW47XG5cdFx0Y29uc3Qgc3dlZWtzID0gYWRkdW5pdChudW13ZWVrcywgJ3dlZWsnKTtcblx0XHRjb25zdCBudW1kYXlzID0gKGEgLSAoYSAlIGRheWxlbikpIC8gZGF5bGVuO1xuXHRcdGEgLT0gbnVtZGF5cyAqIGRheWxlbjtcblx0XHRjb25zdCBzZGF5cyA9IGFkZHVuaXQobnVtZGF5cywgJ2RheScpO1xuXHRcdGNvbnN0IG51bWhvdXJzID0gKGEgLSAoYSAlIGhvdXJsZW4pKSAvIGhvdXJsZW47XG5cdFx0YSAtPSBudW1ob3VycyAqIGhvdXJsZW47XG5cdFx0Y29uc3Qgc2hvdXJzID0gYWRkdW5pdChudW1ob3VycywgJ2hvdXInKTtcblx0XHRjb25zdCBudW1taW5zID0gKGEgLSAoYSAlIG1pbmxlbikpIC8gbWlubGVuO1xuXHRcdGEgLT0gbnVtbWlucyAqIG1pbmxlbjtcblx0XHRjb25zdCBzbWlucyA9IGFkZHVuaXQobnVtbWlucywgJ21pbnV0ZScpO1xuXHRcdGNvbnN0IG51bXNlY3MgPSAoYSAtIChhICUgc2VjbGVuKSkgLyBzZWNsZW47XG5cdFx0YSAtPSBudW1zZWNzICogc2VjbGVuO1xuXHRcdGNvbnN0IHNzZWNzID0gYWRkdW5pdChudW1zZWNzLCAnc2Vjb25kJyk7XG5cdFx0aWYgKGFhID4gNCAqIHdlZWtsZW4pIHtcblx0XHRcdHJldHVybiBzd2Vla3M7XG5cdFx0fVxuXHRcdGlmIChhYSA+IHdlZWtsZW4pIHtcblx0XHRcdHJldHVybiBgJHtzd2Vla3N9ICR7c2RheXN9YDtcblx0XHR9XG5cdFx0aWYgKGFhID4gZGF5bGVuKSB7XG5cdFx0XHRyZXR1cm4gYCR7c2RheXN9ICR7c2hvdXJzfWA7XG5cdFx0fVxuXHRcdGlmIChhYSA+IDYgKiBob3VybGVuKSB7XG5cdFx0XHRyZXR1cm4gc2hvdXJzO1xuXHRcdH1cblx0XHRpZiAoYWEgPiBob3VybGVuKSB7XG5cdFx0XHRyZXR1cm4gYCR7c2hvdXJzfSAke3NtaW5zfWA7XG5cdFx0fVxuXHRcdGlmIChhYSA+IDEwICogbWlubGVuKSB7XG5cdFx0XHRyZXR1cm4gc21pbnM7XG5cdFx0fVxuXHRcdGlmIChhYSA+IG1pbmxlbikge1xuXHRcdFx0cmV0dXJuIGAke3NtaW5zfSAke3NzZWNzfWA7XG5cdFx0fVxuXHRcdHJldHVybiBzc2Vjcztcblx0fTtcblx0Y29uc3QgYWRkdW5pdCA9IChudW0sIHN0cikgPT4ge1xuXHRcdHJldHVybiBgJHtudW19ICR7bnVtID09PSAxID8gcG9wdXBTdHJpbmcoc3RyKSA6IHBvcHVwU3RyaW5nKGAke3N0cn1zYCl9YDtcblx0fTtcblx0Y29uc3QgcnVuUG9wdXBGaWx0ZXJzID0gKGxpc3QsIGRhdGEsIGRvd25sb2FkKSA9PiB7XG5cdFx0Y29uc3QgcmV0ID0gW107XG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIGxpc3QpIHtcblx0XHRcdGlmIChlbGVtZW50ICYmIHR5cGVvZiBlbGVtZW50ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGNvbnN0IHMgPSBlbGVtZW50KGRhdGEsIGRvd25sb2FkLCBkb3dubG9hZC5vd25lci5hcnRpY2xlKTtcblx0XHRcdFx0aWYgKHMpIHtcblx0XHRcdFx0XHRyZXQucHVzaChzKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmV0O1xuXHR9O1xuXHRjb25zdCBnZXRQYWdlSW5mbyA9IChkYXRhLCBkb3dubG9hZCkgPT4ge1xuXHRcdGlmICghZGF0YSB8fCBkYXRhLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIHBvcHVwU3RyaW5nKCdFbXB0eSBwYWdlJyk7XG5cdFx0fVxuXHRcdGNvbnN0IHBvcHVwRmlsdGVycyA9IGdldFZhbHVlT2YoJ3BvcHVwRmlsdGVycycpIHx8IFtdO1xuXHRcdGNvbnN0IGV4dHJhUG9wdXBGaWx0ZXJzID0gZ2V0VmFsdWVPZignZXh0cmFQb3B1cEZpbHRlcnMnKSB8fCBbXTtcblx0XHRjb25zdCBwYWdlSW5mb0FycmF5ID0gcnVuUG9wdXBGaWx0ZXJzKFsuLi5wb3B1cEZpbHRlcnMsIC4uLmV4dHJhUG9wdXBGaWx0ZXJzXSwgZGF0YSwgZG93bmxvYWQpO1xuXHRcdGxldCBwYWdlSW5mbyA9IHBhZ2VJbmZvQXJyYXkuam9pbignLCAnKTtcblx0XHRpZiAocGFnZUluZm8gIT09ICcnKSB7XG5cdFx0XHRwYWdlSW5mbyA9IHVwY2FzZUZpcnN0KHBhZ2VJbmZvKTtcblx0XHR9XG5cdFx0cmV0dXJuIHBhZ2VJbmZvO1xuXHR9O1xuXHQvLyB0aGlzIGNvdWxkIGJlIGltcHJvdmVkIVxuXHRjb25zdCBjb3VudExpbmtzID0gKHdpa2lUZXh0KSA9PiB7XG5cdFx0cmV0dXJuIHdpa2lUZXh0LnNwbGl0KCdbWycpLmxlbmd0aCAtIDE7XG5cdH07XG5cdC8vIGlmIE4gPSAjIG1hdGNoZXMsIG4gPSAjIGJyYWNrZXRzLCB0aGVuXG5cdC8vIFN0cmluZy5zcGxpdChyZWdleCkgaW50ZXJzcGVyc2VzIHRoZSBOKzEgc3BsaXQgZWxlbWVudHNcblx0Ly8gd2l0aCBObiBvdGhlciBlbGVtZW50cy4gU28gdG90YWwgbGVuZ3RoIGlzXG5cdC8vIEw9IE4rMSArIE5uID0gTihuKzEpKzEuIFNvIE49KEwtMSkvKG4rMSkuXG5cdGNvbnN0IGNvdW50SW1hZ2VzID0gKHdpa2lUZXh0KSA9PiB7XG5cdFx0cmV0dXJuICh3aWtpVGV4dC5zcGxpdChwZy5yZS5pbWFnZSkubGVuZ3RoIC0gMSkgLyAocGcucmUuaW1hZ2VCcmFja2V0Q291bnQgKyAxKTtcblx0fTtcblx0Y29uc3QgY291bnRDYXRlZ29yaWVzID0gKHdpa2lUZXh0KSA9PiB7XG5cdFx0cmV0dXJuICh3aWtpVGV4dC5zcGxpdChwZy5yZS5jYXRlZ29yeSkubGVuZ3RoIC0gMSkgLyAocGcucmUuY2F0ZWdvcnlCcmFja2V0Q291bnQgKyAxKTtcblx0fTtcblx0Y29uc3QgcG9wdXBGaWx0ZXJTdHViRGV0ZWN0ID0gKGRhdGEsIF9kb3dubG9hZCwgYXJ0aWNsZSkgPT4ge1xuXHRcdGNvbnN0IGNvdW50cyA9IHN0dWJDb3VudChkYXRhLCBhcnRpY2xlKTtcblx0XHRpZiAoY291bnRzLnJlYWwpIHtcblx0XHRcdHJldHVybiBwb3B1cFN0cmluZygnc3R1YicpO1xuXHRcdH1cblx0XHRpZiAoY291bnRzLnNlY3QpIHtcblx0XHRcdHJldHVybiBwb3B1cFN0cmluZygnc2VjdGlvbiBzdHViJyk7XG5cdFx0fVxuXHRcdHJldHVybiAnJztcblx0fTtcblx0Y29uc3QgcG9wdXBGaWx0ZXJEaXNhbWJpZ0RldGVjdCA9IChkYXRhLCBfZG93bmxvYWQsIGFydGljbGUpID0+IHtcblx0XHRpZiAoIWdldFZhbHVlT2YoJ3BvcHVwQWxsRGFic1N0dWJzJykgJiYgYXJ0aWNsZS5uYW1lc3BhY2UoKSkge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblx0XHRyZXR1cm4gaXNEaXNhbWJpZyhkYXRhLCBhcnRpY2xlKSA/IHBvcHVwU3RyaW5nKCdkaXNhbWJpZycpIDogJyc7XG5cdH07XG5cdGNvbnN0IGZvcm1hdEJ5dGVzID0gKG51bSkgPT4ge1xuXHRcdHJldHVybiBudW0gPiA5NDkgPyBNYXRoLnJvdW5kKG51bSAvIDEwMCkgLyAxMCArIHBvcHVwU3RyaW5nKCdrQicpIDogYCR7bnVtfSZuYnNwOyR7cG9wdXBTdHJpbmcoJ2J5dGVzJyl9YDtcblx0fTtcblx0Ly8gRU5ERklMRTogcGFnZWluZm8uanNcblx0Ly8gU1RBUlRGSUxFOiB0aXRsZXMuanNcblx0LyoqXG5cdCAqIEBmaWxlb3ZlcnZpZXcgRGVmaW5lcyB0aGUge0Bzb3VyY2UgVGl0bGV9IGNsYXNzLCBhbmQgYXNzb2NpYXRlZCBjcnVmdHkgZnVuY3Rpb25zLlxuXHQgKlxuXHQgKiA8Y29kZT5UaXRsZTwvY29kZT4gZGVhbHMgd2l0aCBhcnRpY2xlIHRpdGxlcyBhbmQgdGhlaXIgdmFyaW91c1xuXHQgKiBmb3Jtcy4gIHtAc291cmNlIFN0cmluZ3dyYXBwZXJ9IGlzIHRoZSBwYXJlbnQgY2xhc3Mgb2Zcblx0ICogPGNvZGU+VGl0bGU8L2NvZGU+LCB3aGljaCBleGlzdHMgc2ltcGx5IHRvIG1ha2UgdGhpbmdzIGEgbGl0dGxlXG5cdCAqIG5lYXRlci5cblx0ICovXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgbmV3IFN0cmluZ3dyYXBwZXIuXG5cdCAqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKlxuXHQgKiBAY2xhc3MgdGhlIFN0cmluZ3dyYXBwZXIgY2xhc3MuIFRoaXMgYmFzZSBjbGFzcyBpcyBub3QgcmVhbGx5XG5cdCAqIHVzZWZ1bCBvbiBpdHMgb3duOyBpdCBqdXN0IHdyYXBzIHZhcmlvdXMgY29tbW9uIHN0cmluZyBvcGVyYXRpb25zLlxuXHQgKi9cblx0Y29uc3QgU3RyaW5nd3JhcHBlciA9IGZ1bmN0aW9uIFN0cmluZ3dyYXBwZXIoKSB7XG5cdFx0LyoqXG5cdFx0ICogV3JhcHBlciBmb3IgdGhpcy50b1N0cmluZygpLmluZGV4T2YoKVxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHhcblx0XHQgKiBAdHlwZSBpbnRlZ2VyXG5cdFx0ICovXG5cdFx0dGhpcy5pbmRleE9mID0gZnVuY3Rpb24gKHgpIHtcblx0XHRcdHJldHVybiB0aGlzLnRvU3RyaW5nKCkuaW5kZXhPZih4KTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFJldHVybnMgdGhpcy52YWx1ZS5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIFN0cmluZ1xuXHRcdCAqL1xuXHRcdHRoaXMudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFdyYXBwZXIgZm9yIHtAc291cmNlIFN0cmluZyNwYXJlblNwbGl0fSBhcHBsaWVkIHRvIHRoaXMudG9TdHJpbmcoKVxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtSZWdFeHB9IHhcblx0XHQgKiBAdHlwZSBBcnJheVxuXHRcdCAqL1xuXHRcdHRoaXMuc3BsaXQgPSBmdW5jdGlvbiAoeCkge1xuXHRcdFx0cmV0dXJuIHRoaXMudG9TdHJpbmcoKS5zcGxpdCh4KTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFdyYXBwZXIgZm9yIHRoaXMudG9TdHJpbmcoKS5zdWJzdHJpbmcoKVxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHhcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30geSAob3B0aW9uYWwpXG5cdFx0ICogQHR5cGUgU3RyaW5nXG5cdFx0ICovXG5cdFx0dGhpcy5zdWJzdHJpbmcgPSBmdW5jdGlvbiAoeCwgeSkge1xuXHRcdFx0aWYgKHkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy50b1N0cmluZygpLnNsaWNlKE1hdGgubWF4KDAsIHgpKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzLnRvU3RyaW5nKCkuc3Vic3RyaW5nKHgsIHkpO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogV3JhcHBlciBmb3IgdGhpcy50b1N0cmluZygpLnNwbGl0KClcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB4XG5cdFx0ICogQHR5cGUgQXJyYXlcblx0XHQgKi9cblx0XHR0aGlzLnNwbGl0ID0gZnVuY3Rpb24gKHgpIHtcblx0XHRcdHJldHVybiB0aGlzLnRvU3RyaW5nKCkuc3BsaXQoeCk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBXcmFwcGVyIGZvciB0aGlzLnRvU3RyaW5nKCkucmVwbGFjZSgpXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30geFxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB5XG5cdFx0ICogQHR5cGUgU3RyaW5nXG5cdFx0ICovXG5cdFx0dGhpcy5yZXBsYWNlID0gZnVuY3Rpb24gKHgsIHkpIHtcblx0XHRcdHJldHVybiB0aGlzLnRvU3RyaW5nKCkucmVwbGFjZSh4LCB5KTtcblx0XHR9O1xuXHR9O1xuXHQvKipcblx0ICogQ3JlYXRlcyBhIG5ldyA8Y29kZT5UaXRsZTwvY29kZT4uXG5cdCAqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKlxuXHQgKiBAY2xhc3MgVGhlIFRpdGxlIGNsYXNzLiBIb2xkcyBhcnRpY2xlIHRpdGxlcyBhbmQgY29udmVydHMgdGhlbSBpbnRvXG5cdCAqIHZhcmlvdXMgZm9ybXMuIEFsc28gZGVhbHMgd2l0aCBhbmNob3JzLCBieSB3aGljaCB3ZSBtZWFuIHRoZSBiaXRzXG5cdCAqIG9mIHRoZSBhcnRpY2xlIFVSTCBhZnRlciBhICMgY2hhcmFjdGVyLCByZXByZXNlbnRpbmcgbG9jYXRpb25zXG5cdCAqIHdpdGhpbiBhbiBhcnRpY2xlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgVGhlIGluaXRpYWwgdmFsdWUgdG8gYXNzaWduIHRvIHRoZVxuXHQgKiBhcnRpY2xlLiBUaGlzIG11c3QgYmUgdGhlIGNhbm9uaWNhbCB0aXRsZSAoc2VlIHtAbGlua1xuXHQgKiBUaXRsZSN2YWx1ZX0uIE9taXQgdGhpcyBpbiB0aGUgY29uc3RydWN0b3IgYW5kIHVzZSBhbm90aGVyIGZ1bmN0aW9uXG5cdCAqIHRvIHNldCB0aGUgdGl0bGUgaWYgdGhpcyBpcyB1bmF2YWlsYWJsZS5cblx0ICovXG5cdGNsYXNzIFRpdGxlIGV4dGVuZHMgU3RyaW5nd3JhcHBlciB7XG5cdFx0Y29uc3RydWN0b3IodmFsKSB7XG5cdFx0XHRzdXBlcigpO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBUaGUgY2Fub25pY2FsIGFydGljbGUgdGl0bGUuIFRoaXMgbXVzdCBiZSBpbiBVVEYtOCB3aXRoIG5vXG5cdFx0XHQgKiBlbnRpdGllcywgZXNjYXBpbmcgb3IgbmFzdGllcy4gQWxzbywgdW5kZXJzY29yZXMgc2hvdWxkIGJlXG5cdFx0XHQgKiByZXBsYWNlZCB3aXRoIHNwYWNlcy5cblx0XHRcdCAqXG5cdFx0XHQgKiBAdHlwZSBTdHJpbmdcblx0XHRcdCAqIEBwcml2YXRlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudmFsdWUgPSBudWxsO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBUaGUgY2Fub25pY2FsIGZvcm0gb2YgdGhlIGFuY2hvci4gVGhpcyBzaG91bGQgYmUgZXhhY3RseSBhc1xuXHRcdFx0ICogaXQgYXBwZWFycyBpbiB0aGUgVVJMLCBpLmUuIHdpdGggdGhlIC5DMy4wQSBiaXRzIGluLlxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIFN0cmluZ1xuXHRcdFx0ICovXG5cdFx0XHR0aGlzLmFuY2hvciA9ICcnO1xuXHRcdFx0dGhpcy5zZXRVdGYodmFsKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogUmV0dXJucyB0aGUgY2Fub25pY2FsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBhcnRpY2xlIHRpdGxlLCBvcHRpb25hbGx5IHdpdGhvdXQgYW5jaG9yLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBvbWl0QW5jaG9yXG5cdFx0ICogQGZpeG1lIERlY2lkZSBzcGVjcyBmb3IgYW5jaG9yXG5cdFx0ICogQHJldHVybiBTdHJpbmcgVGhlIGFydGljbGUgdGl0bGUgYW5kIHRoZSBhbmNob3IuXG5cdFx0ICovXG5cdFx0dG9TdHJpbmcob21pdEFuY2hvcikge1xuXHRcdFx0cmV0dXJuIHRoaXMudmFsdWUgKyAoIW9taXRBbmNob3IgJiYgdGhpcy5hbmNob3IgPyBgIyR7dGhpcy5hbmNob3JTdHJpbmcoKX1gIDogJycpO1xuXHRcdH1cblx0XHRhbmNob3JTdHJpbmcoKSB7XG5cdFx0XHRpZiAoIXRoaXMuYW5jaG9yKSB7XG5cdFx0XHRcdHJldHVybiAnJztcblx0XHRcdH1cblx0XHRcdGNvbnN0IHNwbGl0ID0gdGhpcy5hbmNob3Iuc3BsaXQoLygoPzpcXC5bXFxkQS1GXXsyfSkrKS8pO1xuXHRcdFx0Y29uc3QgbGVuID0gc3BsaXQubGVuZ3RoO1xuXHRcdFx0bGV0IHZhbHVlO1xuXHRcdFx0Zm9yIChsZXQgaiA9IDE7IGogPCBsZW47IGogKz0gMikge1xuXHRcdFx0XHQvLyBGSVhNRSBzL2RlY29kZVVSSS9kZWNvZGVVUklDb21wb25lbnQvZyA/XG5cdFx0XHRcdHZhbHVlID0gc3BsaXRbal0uc3BsaXQoJy4nKS5qb2luKCclJyk7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHQvLyBjYW5ub3QgZGVjb2RlXG5cdFx0XHRcdH1cblx0XHRcdFx0c3BsaXRbal0gPSB2YWx1ZS5zcGxpdCgnXycpLmpvaW4oJyAnKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBzcGxpdC5qb2luKCcnKTtcblx0XHR9XG5cdFx0dXJsQW5jaG9yKCkge1xuXHRcdFx0Y29uc3Qgc3BsaXQgPSB0aGlzLmFuY2hvci5zcGxpdCgnLygoPzpbJV1bMC05QS1GXXsyfSkrKS8nKTtcblx0XHRcdGNvbnN0IGxlbiA9IHNwbGl0Lmxlbmd0aDtcblx0XHRcdGZvciAobGV0IGogPSAxOyBqIDwgbGVuOyBqICs9IDIpIHtcblx0XHRcdFx0c3BsaXRbal0gPSBzcGxpdFtqXS5zcGxpdCgnJScpLmpvaW4oJy4nKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBzcGxpdC5qb2luKCcnKTtcblx0XHR9XG5cdFx0YW5jaG9yRnJvbVV0ZihzdHIpIHtcblx0XHRcdHRoaXMuYW5jaG9yID0gZW5jb2RlVVJJQ29tcG9uZW50KHN0ci5zcGxpdCgnICcpLmpvaW4oJ18nKSlcblx0XHRcdFx0LnNwbGl0KCclM0EnKVxuXHRcdFx0XHQuam9pbignOicpXG5cdFx0XHRcdC5zcGxpdChcIidcIilcblx0XHRcdFx0LmpvaW4oJyUyNycpXG5cdFx0XHRcdC5zcGxpdCgnJScpXG5cdFx0XHRcdC5qb2luKCcuJyk7XG5cdFx0fVxuXHRcdGZyb21VUkwoaCkge1xuXHRcdFx0aWYgKHR5cGVvZiBoICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHR0aGlzLnZhbHVlID0gbnVsbDtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0XHQvLyBOT1RFIDogcGxheWluZyB3aXRoIGRlY29kZVVSSSwgZW5jb2RlVVJJLCBlc2NhcGUsIHVuZXNjYXBlLFxuXHRcdFx0Ly8gd2Ugc2VlbSB0byBiZSBhYmxlIHRvIHJlcGxpY2F0ZSB0aGUgSUUgYm9ya2VkIGVuY29kaW5nXG5cdFx0XHQvLyBJRSBkb2Vzbid0IGRvIHRoaXMgbmV3LWZhbmdsZWQgdXRmLTggdGhpbmcuXG5cdFx0XHQvLyBhbmQgaXQncyB3b3JzZSB0aGFuIHRoYXQuXG5cdFx0XHQvLyBJRSBzZWVtcyB0byB0cmVhdCB0aGUgcXVlcnkgc3RyaW5nIGRpZmZlcmVudGx5IHRvIHRoZSByZXN0IG9mIHRoZSB1cmxcblx0XHRcdC8vIHRoZSBxdWVyeSBpcyB0cmVhdGVkIGFzIGJvbmEtZmlkZSB1dGY4LCBidXQgdGhlIGZpcnN0IGJpdCBvZiB0aGUgdXJsIGlzIHBpc3NlZCBhcm91bmQgd2l0aFxuXHRcdFx0Ly8gd2UgZml4IHVwICYgZm9yIGFsbCBicm93c2VycywganVzdCBpbiBjYXNlLlxuXHRcdFx0Y29uc3Qgc3BsaXR0ZWQgPSBoLnNwbGl0KCc/Jyk7XG5cdFx0XHRzcGxpdHRlZFswXSA9IHNwbGl0dGVkWzBdLnNwbGl0KCcmJykuam9pbignJTI2Jyk7XG5cdFx0XHRoID0gc3BsaXR0ZWQuam9pbignPycpO1xuXHRcdFx0Y29uc3QgY29udHJpYnMgPSBwZy5yZS5jb250cmlicy5leGVjKGgpO1xuXHRcdFx0aWYgKGNvbnRyaWJzKSB7XG5cdFx0XHRcdGlmIChjb250cmlic1sxXSA9PT0gJ3RpdGxlPScpIHtcblx0XHRcdFx0XHRjb250cmlic1szXSA9IGNvbnRyaWJzWzNdLnNwbGl0KCcrJykuam9pbignICcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IHUgPSBuZXcgVGl0bGUoY29udHJpYnNbM10pO1xuXHRcdFx0XHR0aGlzLnNldFV0Zihcblx0XHRcdFx0XHRUaXRsZS5kZWNvZGVOYXN0aWVzKGAke213LmNvbmZpZy5nZXQoJ3dnRm9ybWF0dGVkTmFtZXNwYWNlcycpW3BnLm5zVXNlcklkXX06JHt1LnN0cmlwTmFtZXNwYWNlKCl9YClcblx0XHRcdFx0KTtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBlbWFpbCA9IHBnLnJlLmVtYWlsLmV4ZWMoaCk7XG5cdFx0XHRpZiAoZW1haWwpIHtcblx0XHRcdFx0dGhpcy5zZXRVdGYoXG5cdFx0XHRcdFx0VGl0bGUuZGVjb2RlTmFzdGllcyhcblx0XHRcdFx0XHRcdGAke213LmNvbmZpZy5nZXQoJ3dnRm9ybWF0dGVkTmFtZXNwYWNlcycpW3BnLm5zVXNlcklkXX06JHtuZXcgVGl0bGUoZW1haWxbM10pLnN0cmlwTmFtZXNwYWNlKCl9YFxuXHRcdFx0XHRcdClcblx0XHRcdFx0KTtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBiYWNrbGlua3MgPSBwZy5yZS5iYWNrbGlua3MuZXhlYyhoKTtcblx0XHRcdGlmIChiYWNrbGlua3MpIHtcblx0XHRcdFx0dGhpcy5zZXRVdGYoVGl0bGUuZGVjb2RlTmFzdGllcyhuZXcgVGl0bGUoYmFja2xpbmtzWzNdKSkpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblx0XHRcdC8vIEEgZHVtbXkgdGl0bGUgb2JqZWN0IGZvciBhIFNwZWNpYWw6RGlmZiBsaW5rLlxuXHRcdFx0Y29uc3Qgc3BlY2lhbGRpZmYgPSBwZy5yZS5zcGVjaWFsZGlmZi5leGVjKGgpO1xuXHRcdFx0aWYgKHNwZWNpYWxkaWZmKSB7XG5cdFx0XHRcdHRoaXMuc2V0VXRmKFxuXHRcdFx0XHRcdFRpdGxlLmRlY29kZU5hc3RpZXMobmV3IFRpdGxlKGAke213LmNvbmZpZy5nZXQoJ3dnRm9ybWF0dGVkTmFtZXNwYWNlcycpW3BnLm5zU3BlY2lhbElkXX06RGlmZmApKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblx0XHRcdC8vIG5vIG1vcmUgc3BlY2lhbCBjYXNlcyB0byBjaGVjayAtLVxuXHRcdFx0Ly8gaG9wZWZ1bGx5IGl0J3Mgbm90IGEgZGlzZ3Vpc2VkIHVzZXItcmVsYXRlZCBvciBzcGVjaWFsbHkgdHJlYXRlZCBzcGVjaWFsIHBhZ2Vcblx0XHRcdC8vIEluY2x1ZGVzIHJlZmVyZW5jZXNcblx0XHRcdGNvbnN0IG0gPSBwZy5yZS5tYWluLmV4ZWMoaCk7XG5cdFx0XHRpZiAobSA9PT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLnZhbHVlID0gbnVsbDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IGZyb21Cb3RJbnRlcmZhY2UgPSAvXFw/KC4rJik/dGl0bGU9Ly50ZXN0KGgpO1xuXHRcdFx0XHRpZiAoZnJvbUJvdEludGVyZmFjZSkge1xuXHRcdFx0XHRcdG1bMl0gPSBtWzJdLnNwbGl0KCcrJykuam9pbignXycpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGV4dHJhY3RlZCA9IG1bMl0gKyAobVszXSA/IGAjJHttWzNdfWAgOiAnJyk7XG5cdFx0XHRcdGlmIChwZy5mbGFnLmlzU2FmYXJpICYmIC8lMjVbXFxkQS1GYS1mXXsyfS8udGVzdChleHRyYWN0ZWQpKSB7XG5cdFx0XHRcdFx0Ly8gRml4IFNhZmFyaSBpc3N1ZVxuXHRcdFx0XHRcdC8vIFNhZmFyaSBzb21ldGltZXMgZW5jb2RlcyAlIGFzICUyNSBpbiBVVEYtOCBlbmNvZGVkIHN0cmluZ3MgbGlrZSAlRTUlQTMgLT4gJTI1RTUlMjVBMy5cblx0XHRcdFx0XHR0aGlzLnNldFV0ZihkZWNvZGVVUklDb21wb25lbnQodW5lc2NhcGUoZXh0cmFjdGVkKSkpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuc2V0VXRmKFRpdGxlLmRlY29kZU5hc3RpZXMoZXh0cmFjdGVkKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblx0XHRzdGF0aWMgZGVjb2RlTmFzdGllcyh0eHQpIHtcblx0XHRcdC8vIG15RGVjb2RlVVJJIHVzZXMgZGVjb2RlRXh0cmFzLCB3aGljaCByZW1vdmVzIF8sXG5cdFx0XHQvLyB0aHVzIHJ1aW5pbmcgY2l0YXRpb25zIHByZXZpZXdzLCB3aGljaCBhcmUgZm9ybWF0ZWQgYXMgXCJjaXRlX25vdGUtMVwiXG5cdFx0XHR0cnkge1xuXHRcdFx0XHRsZXQgcmV0ID0gZGVjb2RlVVJJKFRpdGxlLmRlY29kZUVzY2FwZXModHh0KSk7XG5cdFx0XHRcdHJldCA9IHJldC5yZXBsYWNlKC9bIF9dKiQvLCAnJyk7XG5cdFx0XHRcdHJldHVybiByZXQ7XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0cmV0dXJuIHR4dDsgLy8gY2Fubm90IGRlY29kZVxuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBEZWNvZGUgdmFsaWQgJS1lbmNvZGluZ3MsIG90aGVyd2lzZSBlc2NhcGUgdGhlbVxuXHRcdHN0YXRpYyBkZWNvZGVFc2NhcGVzKHR4dCkge1xuXHRcdFx0Y29uc3Qgc3BsaXQgPSB0eHQuc3BsaXQoLygoPzolW1xcZEEtRmEtZl17Mn0pKykvKTtcblx0XHRcdGNvbnN0IGxlbiA9IHNwbGl0Lmxlbmd0aDtcblx0XHRcdC8vIE5vICUtZW5jb2RlZCBpdGVtcyBmb3VuZCwgc28gcmVwbGFjZSB0aGUgbGl0ZXJhbCAlXG5cdFx0XHRpZiAobGVuID09PSAxKSB7XG5cdFx0XHRcdHJldHVybiBzcGxpdFswXS5yZXBsYWNlKC8lKD8hW1xcZEEtRmEtZl17Mn0pL2csICclMjUnKTtcblx0XHRcdH1cblx0XHRcdGZvciAobGV0IGkgPSAxOyBpIDwgbGVuOyBpICs9IDIpIHtcblx0XHRcdFx0c3BsaXRbaV0gPSBkZWNvZGVVUklDb21wb25lbnQoc3BsaXRbaV0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHNwbGl0LmpvaW4oJycpO1xuXHRcdH1cblx0XHRmcm9tQW5jaG9yKGEpIHtcblx0XHRcdGlmICghYSkge1xuXHRcdFx0XHR0aGlzLnZhbHVlID0gbnVsbDtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy5mcm9tVVJMKGEuaHJlZik7XG5cdFx0fVxuXHRcdGZyb21XaWtpVGV4dCh0eHQpIHtcblx0XHRcdC8vIEZJWE1FIC0gdGVzdGluZyBuZWVkZWRcblx0XHRcdHR4dCA9IG15RGVjb2RlVVJJKHR4dCk7XG5cdFx0XHR0aGlzLnNldFV0Zih0eHQpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHRcdGhpbnRWYWx1ZSgpIHtcblx0XHRcdGlmICghdGhpcy52YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm4gJyc7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gc2FmZURlY29kZVVSSSh0aGlzLnZhbHVlKTtcblx0XHR9XG5cdFx0dG9Vc2VyTmFtZSh3aXRoTnMpIHtcblx0XHRcdGlmICh0aGlzLm5hbWVzcGFjZUlkKCkgIT09IHBnLm5zVXNlcklkICYmIHRoaXMubmFtZXNwYWNlSWQoKSAhPT0gcGcubnNVc2VydGFsa0lkKSB7XG5cdFx0XHRcdHRoaXMudmFsdWUgPSBudWxsO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnZhbHVlID1cblx0XHRcdFx0KHdpdGhOcyA/IGAke213LmNvbmZpZy5nZXQoJ3dnRm9ybWF0dGVkTmFtZXNwYWNlcycpW3BnLm5zVXNlcklkXX06YCA6ICcnKSArXG5cdFx0XHRcdHRoaXMuc3RyaXBOYW1lc3BhY2UoKS5zcGxpdCgnLycpWzBdO1xuXHRcdH1cblx0XHR1c2VyTmFtZSh3aXRoTnMpIHtcblx0XHRcdGNvbnN0IHQgPSBuZXcgVGl0bGUodGhpcy52YWx1ZSk7XG5cdFx0XHR0LnRvVXNlck5hbWUod2l0aE5zKTtcblx0XHRcdGlmICh0LnZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiB0O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHRvVGFsa1BhZ2UoKSB7XG5cdFx0XHQvLyBjb252ZXJ0IGFydGljbGUgdG8gYSB0YWxrIHBhZ2UsIG9yIGlmIHdlIGNhbid0LCByZXR1cm4gbnVsbFxuXHRcdFx0Ly8gSW4gb3RoZXIgd29yZHM6IHJldHVybiBudWxsIGlmIHRoaXMgQUxSRUFEWSBJUyBhIHRhbGsgcGFnZVxuXHRcdFx0Ly8gYW5kIHJldHVybiB0aGUgY29ycmVzcG9uZGluZyB0YWxrIHBhZ2Ugb3RoZXJ3aXNlXG5cdFx0XHQvL1xuXHRcdFx0Ly8gUGVyIHtAbGluayBodHRwczovL3d3dy5tZWRpYXdpa2kub3JnL3dpa2kvTWFudWFsOk5hbWVzcGFjZSNTdWJqZWN0X2FuZF90YWxrX25hbWVzcGFjZXN9XG5cdFx0XHQvLyAqIEFsbCBkaXNjdXNzaW9uIG5hbWVzcGFjZXMgaGF2ZSBvZGQtaW50ZWdlciBpbmRpY2VzXG5cdFx0XHQvLyAqIFRoZSBkaXNjdXNzaW9uIG5hbWVzcGFjZSBpbmRleCBmb3IgYSBzcGVjaWZpYyBuYW1lc3BhY2Ugd2l0aCBpbmRleCBuIGlzIG4gKyAxXG5cdFx0XHRpZiAodGhpcy52YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHRcdGNvbnN0IG5hbWVzcGFjZUlkID0gdGhpcy5uYW1lc3BhY2VJZCgpO1xuXHRcdFx0aWYgKG5hbWVzcGFjZUlkID49IDAgJiYgbmFtZXNwYWNlSWQgJSAyID09PSAwKSB7XG5cdFx0XHRcdC8vIG5vbi1zcGVjaWFsIGFuZCBzdWJqZWN0IG5hbWVzcGFjZVxuXHRcdFx0XHRjb25zdCBsb2NhbGl6ZWROYW1lc3BhY2UgPSBtdy5jb25maWcuZ2V0KCd3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMnKVtuYW1lc3BhY2VJZCArIDFdO1xuXHRcdFx0XHRpZiAobG9jYWxpemVkTmFtZXNwYWNlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHR0aGlzLnZhbHVlID1cblx0XHRcdFx0XHRcdGxvY2FsaXplZE5hbWVzcGFjZSA9PT0gJydcblx0XHRcdFx0XHRcdFx0PyB0aGlzLnN0cmlwTmFtZXNwYWNlKClcblx0XHRcdFx0XHRcdFx0OiBgJHtsb2NhbGl6ZWROYW1lc3BhY2Uuc3BsaXQoJyAnKS5qb2luKCdfJyl9OiR7dGhpcy5zdHJpcE5hbWVzcGFjZSgpfWA7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMudmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMudmFsdWUgPSBudWxsO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdC8vIFJldHVybiBjYW5vbmljYWwsIGxvY2FsaXplZCBuYW1lc3BhY2Vcblx0XHRuYW1lc3BhY2UoKSB7XG5cdFx0XHRyZXR1cm4gbXcuY29uZmlnLmdldCgnd2dGb3JtYXR0ZWROYW1lc3BhY2VzJylbdGhpcy5uYW1lc3BhY2VJZCgpXTtcblx0XHR9XG5cdFx0bmFtZXNwYWNlSWQoKSB7XG5cdFx0XHRjb25zdCBuID0gdGhpcy52YWx1ZS5pbmRleE9mKCc6Jyk7XG5cdFx0XHRpZiAobiA9PT0gLTEpIHtcblx0XHRcdFx0cmV0dXJuIDA7IC8vIG1haW5zcGFjZVxuXHRcdFx0fVxuXHRcdFx0Y29uc3QgbmFtZXNwYWNlSWQgPVxuXHRcdFx0XHRtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZUlkcycpW3RoaXMudmFsdWUuc2xpY2UoMCwgTWF0aC5tYXgoMCwgbikpLnNwbGl0KCcgJykuam9pbignXycpLnRvTG93ZXJDYXNlKCldO1xuXHRcdFx0aWYgKG5hbWVzcGFjZUlkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0cmV0dXJuIDA7IC8vIG1haW5zcGFjZVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG5hbWVzcGFjZUlkO1xuXHRcdH1cblx0XHR0YWxrUGFnZSgpIHtcblx0XHRcdGNvbnN0IHQgPSBuZXcgVGl0bGUodGhpcy52YWx1ZSk7XG5cdFx0XHR0LnRvVGFsa1BhZ2UoKTtcblx0XHRcdGlmICh0LnZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiB0O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGlzVGFsa1BhZ2UoKSB7XG5cdFx0XHRpZiAodGhpcy50YWxrUGFnZSgpID09PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR0b0FydGljbGVGcm9tVGFsa1BhZ2UoKSB7XG5cdFx0XHQvLyBsYXJnZWx5IGNvcHkvcGFzdGUgZnJvbSB0b1RhbGtQYWdlIGFib3ZlLlxuXHRcdFx0aWYgKHRoaXMudmFsdWUgPT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBuYW1lc3BhY2VJZCA9IHRoaXMubmFtZXNwYWNlSWQoKTtcblx0XHRcdGlmIChuYW1lc3BhY2VJZCA+PSAwICYmIG5hbWVzcGFjZUlkICUgMiA9PT0gMSkge1xuXHRcdFx0XHQvLyBub24tc3BlY2lhbCBhbmQgdGFsayBuYW1lc3BhY2Vcblx0XHRcdFx0Y29uc3QgbG9jYWxpemVkTmFtZXNwYWNlID0gbXcuY29uZmlnLmdldCgnd2dGb3JtYXR0ZWROYW1lc3BhY2VzJylbbmFtZXNwYWNlSWQgLSAxXTtcblx0XHRcdFx0aWYgKGxvY2FsaXplZE5hbWVzcGFjZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0dGhpcy52YWx1ZSA9XG5cdFx0XHRcdFx0XHRsb2NhbGl6ZWROYW1lc3BhY2UgPT09ICcnXG5cdFx0XHRcdFx0XHRcdD8gdGhpcy5zdHJpcE5hbWVzcGFjZSgpXG5cdFx0XHRcdFx0XHRcdDogYCR7bG9jYWxpemVkTmFtZXNwYWNlLnNwbGl0KCcgJykuam9pbignXycpfToke3RoaXMuc3RyaXBOYW1lc3BhY2UoKX1gO1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLnZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnZhbHVlID0gbnVsbDtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRhcnRpY2xlRnJvbVRhbGtQYWdlKCkge1xuXHRcdFx0Y29uc3QgdCA9IG5ldyBUaXRsZSh0aGlzLnZhbHVlKTtcblx0XHRcdHQudG9BcnRpY2xlRnJvbVRhbGtQYWdlKCk7XG5cdFx0XHRpZiAodC52YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm4gdDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRhcnRpY2xlRnJvbVRhbGtPckFydGljbGUoKSB7XG5cdFx0XHRjb25zdCB0ID0gbmV3IFRpdGxlKHRoaXMudmFsdWUpO1xuXHRcdFx0aWYgKHQudG9BcnRpY2xlRnJvbVRhbGtQYWdlKCkpIHtcblx0XHRcdFx0cmV0dXJuIHQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cdFx0aXNJcFVzZXIoKSB7XG5cdFx0XHRyZXR1cm4gcGcucmUuaXBVc2VyLnRlc3QodGhpcy51c2VyTmFtZSgpKTtcblx0XHR9XG5cdFx0c3RyaXBOYW1lc3BhY2UoKSB7XG5cdFx0XHQvLyByZXR1cm5zIGEgc3RyaW5nLCBub3QgYSBUaXRsZVxuXHRcdFx0Y29uc3QgbiA9IHRoaXMudmFsdWUuaW5kZXhPZignOicpO1xuXHRcdFx0aWYgKG4gPT09IC0xKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnZhbHVlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgbmFtZXNwYWNlSWQgPSB0aGlzLm5hbWVzcGFjZUlkKCk7XG5cdFx0XHRpZiAobmFtZXNwYWNlSWQgPT09IHBnLm5zTWFpbnNwYWNlSWQpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMudmFsdWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy52YWx1ZS5zbGljZShNYXRoLm1heCgwLCBuICsgMSkpO1xuXHRcdH1cblx0XHRzZXRVdGYodmFsdWUpIHtcblx0XHRcdGlmICghdmFsdWUpIHtcblx0XHRcdFx0dGhpcy52YWx1ZSA9ICcnO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBhbmNoID0gdmFsdWUuaW5kZXhPZignIycpO1xuXHRcdFx0aWYgKGFuY2ggPT09IC0xKSB7XG5cdFx0XHRcdHRoaXMudmFsdWUgPSB2YWx1ZS5zcGxpdCgnXycpLmpvaW4oJyAnKTtcblx0XHRcdFx0dGhpcy5hbmNob3IgPSAnJztcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy52YWx1ZSA9IHZhbHVlLnNsaWNlKDAsIE1hdGgubWF4KDAsIGFuY2gpKS5zcGxpdCgnXycpLmpvaW4oJyAnKTtcblx0XHRcdHRoaXMuYW5jaG9yID0gdmFsdWUuc2xpY2UoTWF0aC5tYXgoMCwgYW5jaCArIDEpKTtcblx0XHRcdHRoaXMubnMgPSBudWxsOyAvLyB3YWl0IHVudGlsIG5hbWVzcGFjZSgpIGlzIGNhbGxlZFxuXHRcdH1cblx0XHRzZXRVcmwodXJsZnJhZykge1xuXHRcdFx0Y29uc3QgYW5jaCA9IHVybGZyYWcuaW5kZXhPZignIycpO1xuXHRcdFx0dGhpcy52YWx1ZSA9IHNhZmVEZWNvZGVVUkkodXJsZnJhZy5zbGljZSgwLCBNYXRoLm1heCgwLCBhbmNoKSkpO1xuXHRcdFx0dGhpcy5hbmNob3IgPSB0aGlzLnZhbHVlLnNsaWNlKE1hdGgubWF4KDAsIGFuY2ggKyAxKSk7XG5cdFx0fVxuXHRcdGFwcGVuZCh4KSB7XG5cdFx0XHR0aGlzLnNldFV0Zih0aGlzLnZhbHVlICsgeCk7XG5cdFx0fVxuXHRcdHVybFN0cmluZyh4KSB7XG5cdFx0XHR4IHx8PSB7fTtcblx0XHRcdGxldCB2ID0gdGhpcy50b1N0cmluZyh0cnVlKTtcblx0XHRcdGlmICgheC5vbWl0QW5jaG9yICYmIHRoaXMuYW5jaG9yKSB7XG5cdFx0XHRcdHYgKz0gYCMke3RoaXMudXJsQW5jaG9yKCl9YDtcblx0XHRcdH1cblx0XHRcdGlmICgheC5rZWVwU3BhY2VzKSB7XG5cdFx0XHRcdHYgPSB2LnNwbGl0KCcgJykuam9pbignXycpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGVuY29kZVVSSSh2KS5zcGxpdCgnJicpLmpvaW4oJyUyNicpLnNwbGl0KCc/Jykuam9pbignJTNGJykuc3BsaXQoJysnKS5qb2luKCclMkInKTtcblx0XHR9XG5cdFx0cmVtb3ZlQW5jaG9yKCkge1xuXHRcdFx0cmV0dXJuIG5ldyBUaXRsZSh0aGlzLnRvU3RyaW5nKHRydWUpKTtcblx0XHR9XG5cdFx0dG9VcmwoKSB7XG5cdFx0XHRyZXR1cm4gcGcud2lraS50aXRsZWJhc2UgKyB0aGlzLnVybFN0cmluZygpO1xuXHRcdH1cblx0fVxuXHRUaXRsZS5mcm9tVVJMID0gKGgpID0+IHtcblx0XHRyZXR1cm4gbmV3IFRpdGxlKCkuZnJvbVVSTChoKTtcblx0fTtcblx0VGl0bGUuZnJvbUFuY2hvciA9IChhKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBUaXRsZSgpLmZyb21BbmNob3IoYSk7XG5cdH07XG5cdFRpdGxlLmZyb21XaWtpVGV4dCA9ICh0eHQpID0+IHtcblx0XHRyZXR1cm4gbmV3IFRpdGxlKCkuZnJvbVdpa2lUZXh0KHR4dCk7XG5cdH07XG5cdGNvbnN0IHBhcnNlUGFyYW1zID0gKHVybCkgPT4ge1xuXHRcdGNvbnN0IHNwZWNpYWxEaWZmID0gcGcucmUuc3BlY2lhbGRpZmYuZXhlYyh1cmwpO1xuXHRcdGlmIChzcGVjaWFsRGlmZikge1xuXHRcdFx0Y29uc3Qgc3BsaXQgPSBzcGVjaWFsRGlmZlsxXS5zcGxpdCgnLycpO1xuXHRcdFx0aWYgKHNwbGl0Lmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdG9sZGlkOiBzcGxpdFswXSxcblx0XHRcdFx0XHRkaWZmOiAncHJldicsXG5cdFx0XHRcdH07XG5cdFx0XHR9IGVsc2UgaWYgKHNwbGl0Lmxlbmd0aCA9PT0gMikge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdG9sZGlkOiBzcGxpdFswXSxcblx0XHRcdFx0XHRkaWZmOiBzcGxpdFsxXSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y29uc3QgcmV0ID0ge307XG5cdFx0aWYgKCF1cmwuaW5jbHVkZXMoJz8nKSkge1xuXHRcdFx0cmV0dXJuIHJldDtcblx0XHR9XG5cdFx0W3VybF0gPSB1cmwuc3BsaXQoJyMnKTtcblx0XHRjb25zdCBzID0gdXJsLnNwbGl0KCc/Jykuc2xpY2UoMSkuam9pbignLCcpO1xuXHRcdGNvbnN0IHQgPSBzLnNwbGl0KCcmJyk7XG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIHQpIHtcblx0XHRcdGNvbnN0IHogPSBlbGVtZW50LnNwbGl0KCc9Jyk7XG5cdFx0XHR6LnB1c2gobnVsbCk7XG5cdFx0XHRbLCByZXRbelswXV1dID0gejtcblx0XHR9XG5cdFx0Ly8gRGlmZiByZXZpc2lvbiB3aXRoIG5vIG9sZGlkIGlzIGludGVycHJldGVkIGFzIGEgZGlmZiB0byB0aGUgcHJldmlvdXMgcmV2aXNpb24gYnkgTWVkaWFXaWtpXG5cdFx0aWYgKHJldC5kaWZmICYmIHJldC5vbGRpZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXQub2xkaWQgPSAncHJldic7XG5cdFx0fVxuXHRcdC8vIERvY3VtZW50YXRpb24gc2VlbXMgdG8gc2F5IHNvbWV0aGluZyBkaWZmZXJlbnQsIGJ1dCBvbGRpZCBjYW4gYWxzbyBhY2NlcHQgcHJldi9uZXh0LCBhbmRcblx0XHQvLyBFY2hvIGlzIGVtaXR0aW5nIHN1Y2ggVVJMcy4gU2ltcGxlIGZpeHVwIGR1cmluZyBwYXJhbWV0ZXIgZGVjb2Rpbmc6XG5cdFx0aWYgKHJldC5vbGRpZCAmJiAocmV0Lm9sZGlkID09PSAncHJldicgfHwgcmV0Lm9sZGlkID09PSAnbmV4dCcgfHwgcmV0Lm9sZGlkID09PSAnY3VyJykpIHtcblx0XHRcdGNvbnN0IGhlbHBlciA9IHJldC5kaWZmO1xuXHRcdFx0cmV0LmRpZmYgPSByZXQub2xkaWQ7XG5cdFx0XHRyZXQub2xkaWQgPSBoZWxwZXI7XG5cdFx0fVxuXHRcdHJldHVybiByZXQ7XG5cdH07XG5cdC8vIChhKSBteURlY29kZVVSSSAoZmlyc3Qgc3RhbmRhcmQgZGVjb2RlVVJJLCB0aGVuIHBnLnJlLnVybE5vUG9wdXApXG5cdC8vIChiKSBjaGFuZ2Ugc3BhY2VzIHRvIHVuZGVyc2NvcmVzXG5cdC8vIChjKSBlbmNvZGVVUkkgKGp1c3QgdGhlIHN0cmFpZ2h0IG9uZSwgbm8gcGcucmUudXJsTm9Qb3B1cClcblx0Y29uc3QgbXlEZWNvZGVVUkkgPSAoc3RyKSA9PiB7XG5cdFx0bGV0IHJldDtcblx0XHQvLyBGSVhNRSBkZWNvZGVVUklDb21wb25lbnQ/P1xuXHRcdHRyeSB7XG5cdFx0XHRyZXQgPSBkZWNvZGVVUkkoc3RyLnRvU3RyaW5nKCkpO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmV0dXJuIHN0cjtcblx0XHR9XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwZy5taXNjLmRlY29kZUV4dHJhcy5sZW5ndGg7ICsraSkge1xuXHRcdFx0Y29uc3Qge2Zyb219ID0gcGcubWlzYy5kZWNvZGVFeHRyYXNbaV07XG5cdFx0XHRjb25zdCB7dG99ID0gcGcubWlzYy5kZWNvZGVFeHRyYXNbaV07XG5cdFx0XHRyZXQgPSByZXQuc3BsaXQoZnJvbSkuam9pbih0byk7XG5cdFx0fVxuXHRcdHJldHVybiByZXQ7XG5cdH07XG5cdGNvbnN0IHNhZmVEZWNvZGVVUkkgPSAoc3RyKSA9PiB7XG5cdFx0Y29uc3QgcmV0ID0gbXlEZWNvZGVVUkkoc3RyKTtcblx0XHRyZXR1cm4gcmV0IHx8IHN0cjtcblx0fTtcblx0Ly8gVEVTVFMgLy9cblx0Y29uc3QgaXNEaXNhbWJpZyA9IChkYXRhLCBhcnRpY2xlKSA9PiB7XG5cdFx0aWYgKCFnZXRWYWx1ZU9mKCdwb3B1cEFsbERhYnNTdHVicycpICYmIGFydGljbGUubmFtZXNwYWNlKCkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuICFhcnRpY2xlLmlzVGFsa1BhZ2UoKSAmJiBwZy5yZS5kaXNhbWJpZy50ZXN0KGRhdGEpO1xuXHR9O1xuXHRjb25zdCBzdHViQ291bnQgPSAoZGF0YSwgYXJ0aWNsZSkgPT4ge1xuXHRcdGlmICghZ2V0VmFsdWVPZigncG9wdXBBbGxEYWJzU3R1YnMnKSAmJiBhcnRpY2xlLm5hbWVzcGFjZSgpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGxldCBzZWN0U3R1YiA9IDA7XG5cdFx0bGV0IHJlYWxTdHViID0gMDtcblx0XHRpZiAocGcucmUuc3R1Yi50ZXN0KGRhdGEpKSB7XG5cdFx0XHRjb25zdCBzID0gZGF0YS5zcGxpdChwZy5yZS5zdHViKTtcblx0XHRcdGZvciAobGV0IGkgPSAxOyBpIDwgcy5sZW5ndGg7IGkgKz0gMikge1xuXHRcdFx0XHRpZiAoc1tpXSkge1xuXHRcdFx0XHRcdCsrc2VjdFN0dWI7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0KytyZWFsU3R1Yjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0cmVhbDogcmVhbFN0dWIsXG5cdFx0XHRzZWN0OiBzZWN0U3R1Yixcblx0XHR9O1xuXHR9O1xuXHRjb25zdCBpc1ZhbGlkSW1hZ2VOYW1lID0gKHN0cikgPT4ge1xuXHRcdHJldHVybiAhc3RyLmluY2x1ZGVzKCd7Jyk7XG5cdH07XG5cdGNvbnN0IGlzSW5TdHJpcHBhYmxlTmFtZXNwYWNlID0gKGFydGljbGUpID0+IHtcblx0XHRyZXR1cm4gYXJ0aWNsZS5uYW1lc3BhY2VJZCgpICE9PSAwO1xuXHR9O1xuXHRjb25zdCBpc0luTWFpbk5hbWVzcGFjZSA9IChhcnRpY2xlKSA9PiB7XG5cdFx0cmV0dXJuIGFydGljbGUubmFtZXNwYWNlSWQoKSA9PT0gMDtcblx0fTtcblx0Y29uc3QgYW5jaG9yQ29udGFpbnNJbWFnZSA9IChhKSA9PiB7XG5cdFx0Ly8gaXRlcmF0ZSBvdmVyIGNoaWxkcmVuIG9mIGFuY2hvciBhXG5cdFx0Ly8gc2VlIGlmIGFueSBhcmUgaW1hZ2VzXG5cdFx0aWYgKGEgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0Y29uc3Qga2lkcyA9IGEuY2hpbGROb2Rlcztcblx0XHRmb3IgKGNvbnN0IGtpZCBvZiBraWRzKSB7XG5cdFx0XHRpZiAoa2lkLm5vZGVOYW1lID09PSAnSU1HJykge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXHRjb25zdCBpc1BvcHVwTGluayA9IChhKSA9PiB7XG5cdFx0Ly8gTkIgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMsIFRPQyBsaW5rcyBnZW5lcmFsbHkgcmV0dXJuIHRydWVcblx0XHQvLyB0aGV5IHNob3VsZCBiZSBzdHJpcHBlZCBvdXQgbGF0ZXJcblx0XHRpZiAoIW1hcmtOb3BvcHVwU3BhbkxpbmtzLmRvbmUpIHtcblx0XHRcdG1hcmtOb3BvcHVwU3BhbkxpbmtzKCk7XG5cdFx0fVxuXHRcdGlmIChhLmluTm9wb3B1cFNwYW4pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0Ly8gRklYTUUgaXMgdGhpcyBmYXN0ZXIgaW5saW5lP1xuXHRcdGlmIChhLm9ubW91c2Vkb3duIHx8IGEuZ2V0QXR0cmlidXRlKCdub3BvcHVwJykpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0Y29uc3QgaCA9IGEuaHJlZjtcblx0XHRpZiAoaCA9PT0gYCR7ZG9jdW1lbnQubG9jYXRpb24uaHJlZn0jYCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZiAoIXBnLnJlLmJhc2VuYW1lcy50ZXN0KGgpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmICghcGcucmUudXJsTm9Qb3B1cC50ZXN0KGgpKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIChcblx0XHRcdChwZy5yZS5lbWFpbC50ZXN0KGgpIHx8IHBnLnJlLmNvbnRyaWJzLnRlc3QoaCkgfHwgcGcucmUuYmFja2xpbmtzLnRlc3QoaCkgfHwgcGcucmUuc3BlY2lhbGRpZmYudGVzdChoKSkgJiZcblx0XHRcdCFoLmluY2x1ZGVzKCcmbGltaXQ9Jylcblx0XHQpO1xuXHR9O1xuXHRjb25zdCBtYXJrTm9wb3B1cFNwYW5MaW5rcyA9IGZ1bmN0aW9uIG1hcmtOb3BvcHVwU3BhbkxpbmtzKCkge1xuXHRcdGlmICghZ2V0VmFsdWVPZigncG9wdXBPbmx5QXJ0aWNsZUxpbmtzJykpIHtcblx0XHRcdGZpeFZlY3Rvck1lbnVQb3B1cHMoKTtcblx0XHR9XG5cdFx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0Y29uc3QgcyA9ICRib2R5LmZpbmQoJy5ub3BvcHVwcycpLnRvQXJyYXkoKTtcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2Ygcykge1xuXHRcdFx0Y29uc3QgYXMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKTtcblx0XHRcdGZvciAoY29uc3QgYSBvZiBhcykge1xuXHRcdFx0XHRhLmluTm9wb3B1cFNwYW4gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRtYXJrTm9wb3B1cFNwYW5MaW5rcy5kb25lID0gdHJ1ZTtcblx0fTtcblx0Y29uc3QgZml4VmVjdG9yTWVudVBvcHVwcyA9ICgpID0+IHtcblx0XHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0XHQkYm9keS5maW5kKCduYXYudmVjdG9yLW1lbnUgaDM6Zmlyc3QgYTpmaXJzdCcpLnByb3AoJ2luTm9wb3B1cFNwYW4nLCB0cnVlKTtcblx0fTtcblx0Ly8gRU5ERklMRTogdGl0bGVzLmpzXG5cdC8vIFNUQVJURklMRTogZ2V0cGFnZS5qc1xuXHQvLyBXaWtpLXNwZWNpZmljIGRvd25sb2FkaW5nXG5cdC8vXG5cdC8vIFNjaGVtYXRpYyBmb3IgYSBnZXRXaWtpIGNhbGxcblx0Ly9cblx0Ly8gICAgICAgICAgICAgZ2V0UGFnZVdpdGhDYWNoaW5nXG5cdC8vXHRcdFx0XHRcdHxcblx0Ly9cdCAgIGZhbHNlXHRcdHxcdFx0ICB0cnVlXG5cdC8vIGdldFBhZ2U8LVtmaW5kUGljdHVyZUluQ2FjaGVdLT4tb25Db21wbGV0ZShhIGZha2UgZG93bmxvYWQpXG5cdC8vICAgXFwuXG5cdC8vXHQgKGFzeW5jKS0+YWRkUGFnZVRvQ2FjaGUoZG93bmxvYWQpLT4tb25Db21wbGV0ZShkb3dubG9hZClcblx0Ly8gY2hlY2sgY2FjaGUgdG8gc2VlIGlmIHBhZ2UgZXhpc3RzXG5cdGNvbnN0IGdldFBhZ2VXaXRoQ2FjaGluZyA9ICh1cmwsIG9uQ29tcGxldGUsIG93bmVyKSA9PiB7XG5cdFx0bG9nKGBnZXRQYWdlV2l0aENhY2hpbmcsIHVybD0ke3VybH1gKTtcblx0XHRjb25zdCBpID0gZmluZEluUGFnZUNhY2hlKHVybCk7XG5cdFx0bGV0IGQ7XG5cdFx0aWYgKGkgPiAtMSkge1xuXHRcdFx0ZCA9IGZha2VEb3dubG9hZChcblx0XHRcdFx0dXJsLFxuXHRcdFx0XHRvd25lci5pZE51bWJlcixcblx0XHRcdFx0b25Db21wbGV0ZSxcblx0XHRcdFx0cGcuY2FjaGUucGFnZXNbaV0uZGF0YSxcblx0XHRcdFx0cGcuY2FjaGUucGFnZXNbaV0ubGFzdE1vZGlmaWVkLFxuXHRcdFx0XHRvd25lclxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZCA9IGdldFBhZ2UodXJsLCBvbkNvbXBsZXRlLCBvd25lcik7XG5cdFx0XHRpZiAoZCAmJiBvd25lciAmJiBvd25lci5hZGREb3dubG9hZCkge1xuXHRcdFx0XHRvd25lci5hZGREb3dubG9hZChkKTtcblx0XHRcdFx0ZC5vd25lciA9IG93bmVyO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0Y29uc3QgZ2V0UGFnZSA9ICh1cmwsIG9uQ29tcGxldGUsIG93bmVyKSA9PiB7XG5cdFx0bG9nKCdnZXRQYWdlJyk7XG5cdFx0Y29uc3QgY2FsbGJhY2sgPSAoZCkgPT4ge1xuXHRcdFx0aWYgKCFkLmFib3J0ZWQpIHtcblx0XHRcdFx0YWRkUGFnZVRvQ2FjaGUoZCk7XG5cdFx0XHRcdG9uQ29tcGxldGUoZCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRyZXR1cm4gc3RhcnREb3dubG9hZCh1cmwsIG93bmVyLmlkTnVtYmVyLCBjYWxsYmFjayk7XG5cdH07XG5cdGNvbnN0IGZpbmRJblBhZ2VDYWNoZSA9ICh1cmwpID0+IHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHBnLmNhY2hlLnBhZ2VzLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRpZiAodXJsID09PSBwZy5jYWNoZS5wYWdlc1tpXS51cmwpIHtcblx0XHRcdFx0cmV0dXJuIGk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiAtMTtcblx0fTtcblx0Y29uc3QgYWRkUGFnZVRvQ2FjaGUgPSAoZG93bmxvYWQpID0+IHtcblx0XHRsb2coYGFkZFBhZ2VUb0NhY2hlICR7ZG93bmxvYWQudXJsfWApO1xuXHRcdGNvbnN0IHBhZ2UgPSB7XG5cdFx0XHR1cmw6IGRvd25sb2FkLnVybCxcblx0XHRcdGRhdGE6IGRvd25sb2FkLmRhdGEsXG5cdFx0XHRsYXN0TW9kaWZpZWQ6IGRvd25sb2FkLmxhc3RNb2RpZmllZCxcblx0XHR9O1xuXHRcdHJldHVybiBwZy5jYWNoZS5wYWdlcy5wdXNoKHBhZ2UpO1xuXHR9O1xuXHQvLyBFTkRGSUxFOiBnZXRwYWdlLmpzXG5cdC8vIFNUQVJURklMRTogdG9vbHMuanNcblx0Ly8gSUUgbWFkbmVzcyB3aXRoIGVuY29kaW5nXG5cdC8vID09PT09PT09PT09PT09PT09PT09PT09PVxuXHQvL1xuXHQvLyBzdXBwb3NlIHRocm91Z2hvdXQgdGhhdCB0aGUgcGFnZSBpcyBpbiB1dGY4LCBsaWtlIHdpa2lwZWRpYVxuXHQvL1xuXHQvLyBpZiBhIGlzIGFuIGFuY2hvciBET00gZWxlbWVudCBhbmQgYS5ocmVmIHNob3VsZCBjb25zaXN0IG9mXG5cdC8vXG5cdC8vIGh0dHA6Ly9ob3N0Lm5hbWUuaGVyZS93aWtpL2Zvbz9iYXI9YmF6XG5cdC8vXG5cdC8vIHRoZW4gSUUgZ2l2ZXMgZm9vIGFzIFwibGF0aW4xLWVuY29kZWRcIiB1dGY4OyB3ZSBoYXZlIGZvbyA9IGRlY29kZV91dGY4KGRlY29kZVVSSShmb29faWUpKVxuXHQvLyBidXQgSUUgZ2l2ZXMgYmFyPWJheiBjb3JyZWN0bHkgYXMgcGxhaW4gdXRmOFxuXHQvL1xuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0Ly9cblx0Ly8gSUUncyB4bWxodHRwIGRvZXNuJ3QgdW5kZXJzdGFuZCB1dGY4IHVybHMuIEhhdmUgdG8gdXNlIGVuY29kZVVSSSBoZXJlLlxuXHQvL1xuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0Ly9cblx0Ly8gc3VtbWF0IGVsc2Vcblx0Ly8gU291cmNlOiBodHRwOi8vYWt0dWVsbC5kZS5zZWxmaHRtbC5vcmcvYXJ0aWtlbC9qYXZhc2NyaXB0L3V0ZjhiNjQvdXRmOC5odG1cblx0Y29uc3QgZ2V0SnNPYmogPSAoanNvbikgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBqc29uX3JldCA9IEpTT04ucGFyc2UoanNvbik7XG5cdFx0XHRpZiAoanNvbl9yZXQud2FybmluZ3MpIHtcblx0XHRcdFx0Zm9yIChsZXQgdyA9IDA7IHcgPCBqc29uX3JldC53YXJuaW5ncy5sZW5ndGg7IHcrKykge1xuXHRcdFx0XHRcdGlmIChqc29uX3JldC53YXJuaW5nc1t3XVsnKiddKSB7XG5cdFx0XHRcdFx0XHRsb2coanNvbl9yZXQud2FybmluZ3Nbd11bJyonXSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGxvZyhqc29uX3JldC53YXJuaW5nc1t3XS53YXJuaW5ncyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGpzb25fcmV0LmVycm9yKSB7XG5cdFx0XHRcdGVycmxvZyhgJHtqc29uX3JldC5lcnJvci5jb2RlfTogJHtqc29uX3JldC5lcnJvci5pbmZvfWApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGpzb25fcmV0O1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0ZXJybG9nKGBTb21ldGhpbmcgd2VudCB3cm9uZyB3aXRoIGdldEpzT2JqLCBqc29uPSR7anNvbn1gKTtcblx0XHRcdHJldHVybiAxO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgYW55Q2hpbGQgPSAob2JqKSA9PiB7XG5cdFx0Zm9yIChjb25zdCBwIGluIG9iaikge1xuXHRcdFx0aWYgKCFPYmplY3QuaGFzT3duKG9iaiwgcCkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gb2JqW3BdO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fTtcblx0Y29uc3QgdXBjYXNlRmlyc3QgPSAoc3RyKSA9PiB7XG5cdFx0aWYgKHR5cGVvZiBzdHIgIT09IHR5cGVvZiAnJyB8fCBzdHIgPT09ICcnKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG5cdH07XG5cdGNvbnN0IGZpbmRJbkFycmF5ID0gKGFyciwgZm9vKSA9PiB7XG5cdFx0aWYgKCFhcnIgfHwgYXJyLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIC0xO1xuXHRcdH1cblx0XHRjb25zdCBsZW4gPSBhcnIubGVuZ3RoO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcblx0XHRcdGlmIChhcnJbaV0gPT09IGZvbykge1xuXHRcdFx0XHRyZXR1cm4gaTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIC0xO1xuXHR9O1xuXHRjb25zdCBuZXh0T25lID0gKGFycmF5LCB2YWx1ZSkgPT4ge1xuXHRcdC8vIE5CIGlmIHRoZSBhcnJheSBoYXMgdHdvIGNvbnNlY3V0aXZlIGVudHJpZXMgZXF1YWxcblx0XHQvL1x0dGhlbiB0aGlzIHdpbGwgbG9vcCBvbiBzdWNjZXNzaXZlIGNhbGxzXG5cdFx0Y29uc3QgaSA9IGZpbmRJbkFycmF5KGFycmF5LCB2YWx1ZSk7XG5cdFx0aWYgKGkgPCAwKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0cmV0dXJuIGFycmF5W2kgKyAxXTtcblx0fTtcblx0Y29uc3QgbGl0ZXJhbGl6ZVJlZ2V4ID0gKHN0cikgPT4ge1xuXHRcdHJldHVybiBtdy51dGlsLmVzY2FwZVJlZ0V4cChzdHIpO1xuXHR9O1xuXHRTdHJpbmcucHJvdG90eXBlLmVudGlmeSA9IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBsZXQgc2h5ID0gJyZzaHk7Jztcblx0XHRyZXR1cm4gdGhpcy5zcGxpdCgnJicpXG5cdFx0XHQuam9pbignJmFtcDsnKVxuXHRcdFx0LnNwbGl0KCc8Jylcblx0XHRcdC5qb2luKCcmbHQ7Jylcblx0XHRcdC5zcGxpdCgnPicpXG5cdFx0XHQuam9pbignJmd0OycgLyogK3NoeSAqLylcblx0XHRcdC5zcGxpdCgnXCInKVxuXHRcdFx0LmpvaW4oJyZxdW90OycpO1xuXHR9O1xuXHQvLyBBcnJheSBmaWx0ZXIgZnVuY3Rpb25cblx0Y29uc3QgcmVtb3ZlTnVsbHMgPSAodmFsKSA9PiB7XG5cdFx0cmV0dXJuIHZhbCAhPT0gbnVsbDtcblx0fTtcblx0Y29uc3Qgam9pblBhdGggPSAobGlzdCkgPT4ge1xuXHRcdHJldHVybiBsaXN0LmZpbHRlcihyZW1vdmVOdWxscykuam9pbignLycpO1xuXHR9O1xuXHRjb25zdCBzaW1wbGVQcmludGYgPSAoc3RyLCBzdWJzKSA9PiB7XG5cdFx0aWYgKCFzdHIgfHwgIXN1YnMpIHtcblx0XHRcdHJldHVybiBzdHI7XG5cdFx0fVxuXHRcdGNvbnN0IHJldCA9IFtdO1xuXHRcdGNvbnN0IHMgPSBzdHIuc3BsaXQoLyglc3xcXCRcXGQrKS8pO1xuXHRcdGxldCBpID0gMDtcblx0XHRkbyB7XG5cdFx0XHRyZXQucHVzaChzLnNoaWZ0KCkpO1xuXHRcdFx0aWYgKHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgY21kID0gcy5zaGlmdCgpO1xuXHRcdFx0aWYgKGNtZCA9PT0gJyVzJykge1xuXHRcdFx0XHRpZiAoaSA8IHN1YnMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0cmV0LnB1c2goc3Vic1tpXSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0LnB1c2goY21kKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQrK2k7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCBqID0gTnVtYmVyLnBhcnNlSW50KGNtZC5yZXBsYWNlKCckJywgJycpLCAxMCkgLSAxO1xuXHRcdFx0XHRpZiAoaiA+IC0xICYmIGogPCBzdWJzLmxlbmd0aCkge1xuXHRcdFx0XHRcdHJldC5wdXNoKHN1YnNbal0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldC5wdXNoKGNtZCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IHdoaWxlIChzLmxlbmd0aCA+IDApO1xuXHRcdHJldHVybiByZXQuam9pbignJyk7XG5cdH07XG5cdGNvbnN0IGlzU3RyaW5nID0gKHgpID0+IHtcblx0XHRyZXR1cm4gdHlwZW9mIHggPT09ICdzdHJpbmcnIHx8IHggaW5zdGFuY2VvZiBTdHJpbmc7XG5cdH07XG5cdGNvbnN0IGlzTnVtYmVyID0gKHgpID0+IHtcblx0XHRyZXR1cm4gdHlwZW9mIHggPT09ICdudW1iZXInIHx8IHggaW5zdGFuY2VvZiBOdW1iZXI7XG5cdH07XG5cdGNvbnN0IGlzUmVnRXhwID0gKHgpID0+IHtcblx0XHRyZXR1cm4geCBpbnN0YW5jZW9mIFJlZ0V4cDtcblx0fTtcblx0Y29uc3QgaXNBcnJheSA9ICh4KSA9PiB7XG5cdFx0cmV0dXJuIEFycmF5LmlzQXJyYXkoeCk7XG5cdH07XG5cdGNvbnN0IGlzT2JqZWN0ID0gKHgpID0+IHtcblx0XHRyZXR1cm4geCBpbnN0YW5jZW9mIE9iamVjdDtcblx0fTtcblx0Y29uc3QgaXNGdW5jdGlvbiA9ICh4KSA9PiB7XG5cdFx0cmV0dXJuICFpc1JlZ0V4cCh4KSAmJiAodHlwZW9mIHggPT09ICdmdW5jdGlvbicgfHwgeCBpbnN0YW5jZW9mIEZ1bmN0aW9uKTtcblx0fTtcblx0Y29uc3QgcmVwZWF0U3RyaW5nID0gKHMsIG11bHQpID0+IHtcblx0XHRsZXQgcmV0ID0gJyc7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBtdWx0OyArK2kpIHtcblx0XHRcdHJldCArPSBzO1xuXHRcdH1cblx0XHRyZXR1cm4gcmV0O1xuXHR9O1xuXHRjb25zdCB6ZXJvRmlsbCA9IChzLCBtaW4pID0+IHtcblx0XHRtaW4gfHw9IDI7XG5cdFx0Y29uc3QgdCA9IHMudG9TdHJpbmcoKTtcblx0XHRyZXR1cm4gcmVwZWF0U3RyaW5nKCcwJywgbWluIC0gdC5sZW5ndGgpICsgdDtcblx0fTtcblx0Y29uc3QgbWFwID0gKGYsIG8pID0+IHtcblx0XHRpZiAoaXNBcnJheShvKSkge1xuXHRcdFx0cmV0dXJuIG1hcF9hcnJheShmLCBvKTtcblx0XHR9XG5cdFx0cmV0dXJuIG1hcF9vYmplY3QoZiwgbyk7XG5cdH07XG5cdGNvbnN0IG1hcF9hcnJheSA9IChmLCBvKSA9PiB7XG5cdFx0Y29uc3QgcmV0ID0gW107XG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIG8pIHtcblx0XHRcdHJldC5wdXNoKGYoZWxlbWVudCkpO1xuXHRcdH1cblx0XHRyZXR1cm4gcmV0O1xuXHR9O1xuXHRjb25zdCBtYXBfb2JqZWN0ID0gKGYsIG8pID0+IHtcblx0XHRjb25zdCByZXQgPSB7fTtcblx0XHRmb3IgKGNvbnN0IGkgaW4gbykge1xuXHRcdFx0aWYgKCFPYmplY3QuaGFzT3duKG8sIGkpKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0W29dID0gZihvW2ldKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJldDtcblx0fTtcblx0cGcuZXNjYXBlUXVvdGVzSFRNTCA9ICh0ZXh0KSA9PiB7XG5cdFx0cmV0dXJuIHRleHQucmVwbGFjZSgvJi9nLCAnJmFtcDsnKS5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7JykucmVwbGFjZSgvPC9nLCAnJmx0OycpLnJlcGxhY2UoLz4vZywgJyZndDsnKTtcblx0fTtcblx0cGcudW5lc2NhcGVRdW90ZXNIVE1MID0gKGh0bWwpID0+IHtcblx0XHQvLyBGcm9tIHtAbGluayBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzM5NDc4N31cblx0XHQvLyBUaGlzIHNlZW1zIHRvIGJlIGltcGxlbWVudGVkIGNvcnJlY3RseSBvbiBhbGwgbWFqb3IgYnJvd3NlcnMgbm93LCBzbyB3ZVxuXHRcdC8vIGRvbid0IGhhdmUgdG8gbWFrZSBvdXIgb3duIGZ1bmN0aW9uLlxuXHRcdGNvbnN0IHR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG5cdFx0dHh0LmlubmVySFRNTCA9IGh0bWw7XG5cdFx0cmV0dXJuIHR4dC52YWx1ZTtcblx0fTtcblx0Ly8gRU5ERklMRTogdG9vbHMuanNcblx0Ly8gU1RBUlRGSUxFOiBkYWIuanNcblx0Ly8gRGFiLWZpeGluZyBjb2RlXG5cdC8vXG5cdGNvbnN0IHJldGFyZ2V0RGFiID0gKG5ld1RhcmdldCwgb2xkVGFyZ2V0LCBmcmllbmRseUN1cnJlbnRBcnRpY2xlTmFtZSwgdGl0bGVUb0VkaXQpID0+IHtcblx0XHRsb2coYHJldGFyZ2V0RGFiOiBuZXdUYXJnZXQ9JHtuZXdUYXJnZXR9IG9sZFRhcmdldD0ke29sZFRhcmdldH1gKTtcblx0XHRyZXR1cm4gY2hhbmdlTGlua1RhcmdldExpbmsoe1xuXHRcdFx0bmV3VGFyZ2V0LFxuXHRcdFx0dGV4dDogbmV3VGFyZ2V0LnNwbGl0KCcgJykuam9pbignJm5ic3A7JyksXG5cdFx0XHRoaW50OiB0cHJpbnRmKCdkaXNhbWJpZ0hpbnQnLCBbbmV3VGFyZ2V0XSksXG5cdFx0XHRzdW1tYXJ5OiBzaW1wbGVQcmludGYoZ2V0VmFsdWVPZigncG9wdXBGaXhEYWJzU3VtbWFyeScpLCBbZnJpZW5kbHlDdXJyZW50QXJ0aWNsZU5hbWUsIG5ld1RhcmdldF0pLFxuXHRcdFx0Y2xpY2tCdXR0b246IGdldFZhbHVlT2YoJ3BvcHVwRGFic0F1dG9DbGljaycpLFxuXHRcdFx0bWlub3I6IHRydWUsXG5cdFx0XHRvbGRUYXJnZXQsXG5cdFx0XHR3YXRjaDogZ2V0VmFsdWVPZigncG9wdXBXYXRjaERpc2FtYmlnZ2VkUGFnZXMnKSxcblx0XHRcdHRpdGxlOiB0aXRsZVRvRWRpdCxcblx0XHR9KTtcblx0fTtcblx0Y29uc3QgbGlzdExpbmtzID0gKHdpa2l0ZXh0LCBvbGRUYXJnZXQsIHRpdGxlVG9FZGl0KSA9PiB7XG5cdFx0Ly8gbWVkaWF3aWtpIHN0cmlwcyB0cmFpbGluZyBzcGFjZXMsIHNvIHdlIGRvIHRoZSBzYW1lXG5cdFx0Ly8gdGVzdGNhc2U6IHtAbGluayBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvdy9pbmRleC5waHA/dGl0bGU9UmFkaWFsJm9sZGlkPTk3MzY1NjMzfVxuXHRcdGNvbnN0IHJlZyA9IC9cXFtcXFsoW158XSo/KSAqKFxcfHxdXSkvZ2k7XG5cdFx0bGV0IHJldCA9IFtdO1xuXHRcdGNvbnN0IHNwbGl0dGVkID0gd2lraXRleHQuc3BsaXQocmVnKTtcblx0XHQvLyBeW2Etel0rIHNob3VsZCBtYXRjaCBpbnRlcndpa2kgbGlua3MsIGhvcGVmdWxseSAoY2FzZS1pbnNlbnNpdGl2ZSlcblx0XHQvLyBhbmQgXlthLXpdKiBzaG91bGQgbWF0Y2ggdGhvc2UgYW5kIFtbOkNhdGVnb3J5Li4uXV0gc3R5bGUgbGlua3MgdG9vXG5cdFx0Y29uc3Qgb21pdFJlZ2V4ID0gL15bYS16XSo6fF5bU3NdcGVjaWFsOnxeW0lpXW1hZ2V8XltDY11hdGVnb3J5Lztcblx0XHRjb25zdCBmcmllbmRseUN1cnJlbnRBcnRpY2xlTmFtZSA9IG9sZFRhcmdldC50b1N0cmluZygpO1xuXHRcdGNvbnN0IHdpa1BvcyA9IGdldFZhbHVlT2YoJ3BvcHVwRGFiV2lrdGlvbmFyeScpO1xuXHRcdGZvciAobGV0IGkgPSAxOyBpIDwgc3BsaXR0ZWQubGVuZ3RoOyBpICs9IDMpIHtcblx0XHRcdGlmICh0eXBlb2Ygc3BsaXR0ZWRbaV0gPT09IHR5cGVvZiAnc3RyaW5nJyAmJiBzcGxpdHRlZFtpXS5sZW5ndGggPiAwICYmICFvbWl0UmVnZXgudGVzdChzcGxpdHRlZFtpXSkpIHtcblx0XHRcdFx0cmV0LnB1c2gocmV0YXJnZXREYWIoc3BsaXR0ZWRbaV0sIG9sZFRhcmdldCwgZnJpZW5kbHlDdXJyZW50QXJ0aWNsZU5hbWUsIHRpdGxlVG9FZGl0KSk7XG5cdFx0XHR9IC8qIGlmICovXG5cdFx0fSAvKiBmb3IgbG9vcCAqL1xuXHRcdHJldCA9IHJtRHVwZXNGcm9tU29ydGVkTGlzdChyZXQuc29ydCgpKTtcblx0XHRpZiAod2lrUG9zKSB7XG5cdFx0XHRjb25zdCB3aWtUYXJnZXQgPSBgd2lrdGlvbmFyeToke2ZyaWVuZGx5Q3VycmVudEFydGljbGVOYW1lLnJlcGxhY2UoL14oLispXFxzK1xcKFteKV0rXFwpXFxzKiQvLCAnJDEnKX1gO1xuXHRcdFx0Y29uc3QgbWV0aCA9IHdpa1Bvcy50b0xvd2VyQ2FzZSgpID09PSAnZmlyc3QnID8gJ3Vuc2hpZnQnIDogJ3B1c2gnO1xuXHRcdFx0cmV0W21ldGhdKHJldGFyZ2V0RGFiKHdpa1RhcmdldCwgb2xkVGFyZ2V0LCBmcmllbmRseUN1cnJlbnRBcnRpY2xlTmFtZSwgdGl0bGVUb0VkaXQpKTtcblx0XHR9XG5cdFx0cmV0LnB1c2goXG5cdFx0XHRjaGFuZ2VMaW5rVGFyZ2V0TGluayh7XG5cdFx0XHRcdG5ld1RhcmdldDogbnVsbCxcblx0XHRcdFx0dGV4dDogcG9wdXBTdHJpbmcoJ3JlbW92ZSB0aGlzIGxpbmsnKS5zcGxpdCgnICcpLmpvaW4oJyZuYnNwOycpLFxuXHRcdFx0XHRoaW50OiBwb3B1cFN0cmluZygncmVtb3ZlIGFsbCBsaW5rcyB0byB0aGlzIGRpc2FtYmlnIHBhZ2UgZnJvbSB0aGlzIGFydGljbGUnKSxcblx0XHRcdFx0Y2xpY2tCdXR0b246IGdldFZhbHVlT2YoJ3BvcHVwRGFic0F1dG9DbGljaycpLFxuXHRcdFx0XHRvbGRUYXJnZXQsXG5cdFx0XHRcdHN1bW1hcnk6IHNpbXBsZVByaW50ZihnZXRWYWx1ZU9mKCdwb3B1cFJtRGFiTGlua1N1bW1hcnknKSwgW2ZyaWVuZGx5Q3VycmVudEFydGljbGVOYW1lXSksXG5cdFx0XHRcdHdhdGNoOiBnZXRWYWx1ZU9mKCdwb3B1cFdhdGNoRGlzYW1iaWdnZWRQYWdlcycpLFxuXHRcdFx0XHR0aXRsZTogdGl0bGVUb0VkaXQsXG5cdFx0XHR9KVxuXHRcdCk7XG5cdFx0cmV0dXJuIHJldDtcblx0fTtcblx0Y29uc3Qgcm1EdXBlc0Zyb21Tb3J0ZWRMaXN0ID0gKGxpc3QpID0+IHtcblx0XHRjb25zdCByZXQgPSBbXTtcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgbGlzdCkge1xuXHRcdFx0aWYgKHJldC5sZW5ndGggPT09IDAgfHwgZWxlbWVudCAhPT0gcmV0LmF0KC0xKSkge1xuXHRcdFx0XHRyZXQucHVzaChlbGVtZW50KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJldDtcblx0fTtcblx0Y29uc3QgbWFrZUZpeERhYiA9IChkYXRhLCBuYXZwb3ApID0+IHtcblx0XHQvLyBncmFiIHRpdGxlIGZyb20gcGFyZW50IHBvcHVwIGlmIHRoZXJlIGlzIG9uZTsgZGVmYXVsdCBleGlzdHMgaW4gY2hhbmdlTGlua1RhcmdldExpbmtcblx0XHRjb25zdCB0aXRsZVRvRWRpdCA9IG5hdnBvcC5wYXJlbnRQb3B1cCAmJiBuYXZwb3AucGFyZW50UG9wdXAuYXJ0aWNsZS50b1N0cmluZygpO1xuXHRcdGNvbnN0IGxpc3QgPSBsaXN0TGlua3MoZGF0YSwgbmF2cG9wLm9yaWdpbmFsQXJ0aWNsZSwgdGl0bGVUb0VkaXQpO1xuXHRcdGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0bG9nKCdsaXN0TGlua3MgcmV0dXJuZWQgZW1wdHkgbGlzdCcpO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGxldCBodG1sID0gYDxocj4ke3BvcHVwU3RyaW5nKCdDbGljayB0byBkaXNhbWJpZ3VhdGUgdGhpcyBsaW5rIHRvOicpfTxicj5gO1xuXHRcdGh0bWwgKz0gbGlzdC5qb2luKCcsICcpO1xuXHRcdHJldHVybiBodG1sO1xuXHR9O1xuXHRjb25zdCBtYWtlRml4RGFicyA9ICh3aWtpVGV4dCwgbmF2cG9wKSA9PiB7XG5cdFx0aWYgKFxuXHRcdFx0Z2V0VmFsdWVPZigncG9wdXBGaXhEYWJzJykgJiZcblx0XHRcdGlzRGlzYW1iaWcod2lraVRleHQsIG5hdnBvcC5hcnRpY2xlKSAmJlxuXHRcdFx0VGl0bGUuZnJvbVVSTChsb2NhdGlvbi5ocmVmKS5uYW1lc3BhY2VJZCgpICE9PSBwZy5uc1NwZWNpYWxJZCAmJlxuXHRcdFx0bmF2cG9wLmFydGljbGUudGFsa1BhZ2UoKVxuXHRcdCkge1xuXHRcdFx0c2V0UG9wdXBIVE1MKG1ha2VGaXhEYWIod2lraVRleHQsIG5hdnBvcCksICdwb3B1cEZpeERhYicsIG5hdnBvcC5pZE51bWJlcik7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBwb3B1cFJlZGxpbmtIVE1MID0gKGFydGljbGUpID0+IHtcblx0XHRyZXR1cm4gY2hhbmdlTGlua1RhcmdldExpbmsoe1xuXHRcdFx0bmV3VGFyZ2V0OiBudWxsLFxuXHRcdFx0dGV4dDogcG9wdXBTdHJpbmcoJ3JlbW92ZSB0aGlzIGxpbmsnKS5zcGxpdCgnICcpLmpvaW4oJyZuYnNwOycpLFxuXHRcdFx0aGludDogcG9wdXBTdHJpbmcoJ3JlbW92ZSBhbGwgbGlua3MgdG8gdGhpcyBwYWdlIGZyb20gdGhpcyBhcnRpY2xlJyksXG5cdFx0XHRjbGlja0J1dHRvbjogZ2V0VmFsdWVPZigncG9wdXBSZWRsaW5rQXV0b0NsaWNrJyksXG5cdFx0XHRvbGRUYXJnZXQ6IGFydGljbGUudG9TdHJpbmcoKSxcblx0XHRcdHN1bW1hcnk6IHNpbXBsZVByaW50ZihnZXRWYWx1ZU9mKCdwb3B1cFJlZGxpbmtTdW1tYXJ5JyksIFthcnRpY2xlLnRvU3RyaW5nKCldKSxcblx0XHR9KTtcblx0fTtcblx0Ly8gRU5ERklMRTogZGFiLmpzXG5cdC8vIFNUQVJURklMRTogaHRtbG91dHB1dC5qc1xuXHQvLyB0aGlzIGhhcyB0byB1c2UgYSB0aW1lciBsb29wIGFzIHdlIGRvbid0IGtub3cgaWYgdGhlIERPTSBlbGVtZW50IGV4aXN0cyB3aGVuIHdlIHdhbnQgdG8gc2V0IHRoZSB0ZXh0XG5cdGNvbnN0IHNldFBvcHVwSFRNTCA9IGZ1bmN0aW9uIHNldFBvcHVwSFRNTChzdHIsIGVsZW1lbnRJZCwgcG9wdXBJZCwgb25TdWNjZXNzLCBhcHBlbmQpIHtcblx0XHRpZiAocG9wdXBJZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHQvLyBjb25zb2xlLmVycm9yKCdbUG9wdXBzXSBwb3B1cElkIGlzIG5vdCBkZWZpbmVkIGluIHNldFBvcHVwSFRNTCwgaHRtbD0nK3N0ci5zdWJzdHJpbmcoMCwxMDApKTtcblx0XHRcdHBvcHVwSWQgPSBwZy5pZE51bWJlcjtcblx0XHR9XG5cdFx0Y29uc3QgcG9wdXBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZWxlbWVudElkfSR7cG9wdXBJZH1gKTtcblx0XHRpZiAocG9wdXBFbGVtZW50KSB7XG5cdFx0XHRpZiAoIWFwcGVuZCkge1xuXHRcdFx0XHRwb3B1cEVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoaXNTdHJpbmcoc3RyKSkge1xuXHRcdFx0XHRwb3B1cEVsZW1lbnQuaW5uZXJIVE1MICs9IHN0cjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHBvcHVwRWxlbWVudC5hcHBlbmQoc3RyKTtcblx0XHRcdH1cblx0XHRcdGlmIChvblN1Y2Nlc3MpIHtcblx0XHRcdFx0b25TdWNjZXNzKCk7XG5cdFx0XHR9XG5cdFx0XHRzZXRUaW1lb3V0KGNoZWNrUG9wdXBQb3NpdGlvbiwgMTAwKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHQvLyBjYWxsIHRoaXMgZnVuY3Rpb24gYWdhaW4gaW4gYSBsaXR0bGUgd2hpbGUuLi5cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHNldFBvcHVwSFRNTChzdHIsIGVsZW1lbnRJZCwgcG9wdXBJZCwgb25TdWNjZXNzKTtcblx0XHR9LCA2MDApO1xuXHRcdHJldHVybiBudWxsO1xuXHR9O1xuXHRjb25zdCBzZXRQb3B1cFRyYWlsZXIgPSAoc3RyLCBpZCkgPT4ge1xuXHRcdHJldHVybiBzZXRQb3B1cEhUTUwoc3RyLCAncG9wdXBEYXRhJywgaWQpO1xuXHR9O1xuXHQvLyBhcmdzLm5hdnBvcHVwIGlzIG1hbmRhdG9yeVxuXHQvLyBvcHRpb25hbDogYXJncy5yZWRpciwgYXJncy5yZWRpclRhcmdldFxuXHQvLyBGSVhNRTogeWUgZ29kcywgdGhpcyBpcyB1Z2x5IHN0dWZmXG5cdGNvbnN0IGZpbGxFbXB0eVNwYW5zID0gKGFyZ3MpID0+IHtcblx0XHQvLyBpZiByZWRpciBpcyBwcmVzZW50IGFuZCB0cnVlIHRoZW4gcmVkaXJUYXJnZXQgaXMgbWFuZGF0b3J5XG5cdFx0bGV0IHJlZGlyID0gdHJ1ZTtcblx0XHRsZXQgcmNpZDtcblx0XHRpZiAodHlwZW9mIGFyZ3MgIT09ICdvYmplY3QnIHx8IGFyZ3MucmVkaXIgPT09IHVuZGVmaW5lZCB8fCAhYXJncy5yZWRpcikge1xuXHRcdFx0cmVkaXIgPSBmYWxzZTtcblx0XHR9XG5cdFx0Y29uc3QgYSA9IGFyZ3MubmF2cG9wdXAucGFyZW50QW5jaG9yO1xuXHRcdGxldCBhcnRpY2xlO1xuXHRcdGxldCBoaW50O1xuXHRcdGxldCBvbGRpZDtcblx0XHRsZXQgcGFyYW1zID0ge307XG5cdFx0aWYgKHJlZGlyICYmIHR5cGVvZiBhcmdzLnJlZGlyVGFyZ2V0ID09PSB0eXBlb2Yge30pIHtcblx0XHRcdGFydGljbGUgPSBhcmdzLnJlZGlyVGFyZ2V0O1xuXHRcdFx0Ly8gaGludD1hcnRpY2xlLmhpbnRWYWx1ZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRhcnRpY2xlID0gbmV3IFRpdGxlKCkuZnJvbUFuY2hvcihhKTtcblx0XHRcdGhpbnQgPSBhLm9yaWdpbmFsVGl0bGUgfHwgYXJ0aWNsZS5oaW50VmFsdWUoKTtcblx0XHRcdHBhcmFtcyA9IHBhcnNlUGFyYW1zKGEuaHJlZik7XG5cdFx0XHRvbGRpZCA9IGdldFZhbHVlT2YoJ3BvcHVwSGlzdG9yaWNhbExpbmtzJykgPyBwYXJhbXMub2xkaWQgOiBudWxsO1xuXHRcdFx0KHtyY2lkfSA9IHBhcmFtcyk7XG5cdFx0fVxuXHRcdGNvbnN0IHggPSB7XG5cdFx0XHRhcnRpY2xlLFxuXHRcdFx0aGludCxcblx0XHRcdG9sZGlkLFxuXHRcdFx0cmNpZCxcblx0XHRcdG5hdnBvcDogYXJncy5uYXZwb3B1cCxcblx0XHRcdHBhcmFtcyxcblx0XHR9O1xuXHRcdGNvbnN0IHN0cnVjdHVyZSA9IHBnLnN0cnVjdHVyZXNbZ2V0VmFsdWVPZigncG9wdXBTdHJ1Y3R1cmUnKV07XG5cdFx0aWYgKHR5cGVvZiBzdHJ1Y3R1cmUgIT09ICdvYmplY3QnKSB7XG5cdFx0XHRzZXRQb3B1cEhUTUwoXG5cdFx0XHRcdCdwb3B1cEVycm9yJyxcblx0XHRcdFx0YFVua25vd24gc3RydWN0dXJlICh0aGlzIHNob3VsZCBuZXZlciBoYXBwZW4pOiAke3BnLm9wdGlvbi5wb3B1cFN0cnVjdHVyZX1gLFxuXHRcdFx0XHRhcmdzLm5hdnBvcHVwLmlkTnVtYmVyXG5cdFx0XHQpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBzcGFucyA9IGZsYXR0ZW4ocGcubWlzYy5sYXlvdXQpO1xuXHRcdGNvbnN0IG51bXNwYW5zID0gc3BhbnMubGVuZ3RoO1xuXHRcdGNvbnN0IHJlZGlycyA9IHBnLm1pc2MucmVkaXJTcGFucztcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG51bXNwYW5zOyArK2kpIHtcblx0XHRcdGNvbnN0IGZvdW5kID0gcmVkaXJzICYmIHJlZGlycy5pbmNsdWRlcyhzcGFuc1tpXSk7XG5cdFx0XHQvLyBsb2coJ3JlZGlyPScgKyByZWRpciArICcsIGZvdW5kPScgKyBmb3VuZCArICcsIHNwYW5zW2ldPScgKyBzcGFuc1tpXSk7XG5cdFx0XHRpZiAoKGZvdW5kICYmICFyZWRpcikgfHwgKCFmb3VuZCAmJiByZWRpcikpIHtcblx0XHRcdFx0Ly8gbG9nKCdza2lwcGluZyB0aGlzIHNldCBvZiB0aGUgbG9vcCcpO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHN0cnVjdHVyZWZuID0gc3RydWN0dXJlW3NwYW5zW2ldXTtcblx0XHRcdGlmIChzdHJ1Y3R1cmVmbiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdC8vIG5vdGhpbmcgdG8gZG8gZm9yIHRoaXMgc3RydWN0dXJlIHBhcnRcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRsZXQgc2V0Zm4gPSBzZXRQb3B1cEhUTUw7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGdldFZhbHVlT2YoJ3BvcHVwQWN0aXZlTmF2bGlua3MnKSAmJlxuXHRcdFx0XHQoc3BhbnNbaV0uaW5kZXhPZigncG9wdXBUb3BMaW5rcycpID09PSAwIHx8IHNwYW5zW2ldLmluZGV4T2YoJ3BvcHVwUmVkaXJUb3BMaW5rcycpID09PSAwKVxuXHRcdFx0KSB7XG5cdFx0XHRcdHNldGZuID0gc2V0UG9wdXBUaXBzQW5kSFRNTDtcblx0XHRcdH1cblx0XHRcdHN3aXRjaCAodHlwZW9mIHN0cnVjdHVyZWZuKSB7XG5cdFx0XHRcdGNhc2UgJ2Z1bmN0aW9uJzpcblx0XHRcdFx0XHRsb2coYHJ1bm5pbmcgJHtzcGFuc1tpXX0oe1xuXHRcdFx0XHRcdFx0YXJ0aWNsZToke3guYXJ0aWNsZX0sIGhpbnQ6JHt4LmhpbnR9LCBvbGRpZDogJHt4Lm9sZGlkfX0pYCk7XG5cdFx0XHRcdFx0c2V0Zm4oc3RydWN0dXJlZm4oeCksIHNwYW5zW2ldLCBhcmdzLm5hdnBvcHVwLmlkTnVtYmVyKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnc3RyaW5nJzpcblx0XHRcdFx0XHRzZXRmbihzdHJ1Y3R1cmVmbiwgc3BhbnNbaV0sIGFyZ3MubmF2cG9wdXAuaWROdW1iZXIpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdGVycmxvZyhgdW5rbm93biB0aGluZyB3aXRoIGxhYmVsICR7c3BhbnNbaV19IChzcGFuIGluZGV4IHdhcyAke2l9KWApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0Ly8gZmxhdHRlbiBhbiBhcnJheVxuXHRjb25zdCBmbGF0dGVuID0gZnVuY3Rpb24gZmxhdHRlbihsaXN0LCBzdGFydCkge1xuXHRcdGNvbnN0IHJldCA9IFtdO1xuXHRcdGlmIChzdGFydCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRzdGFydCA9IDA7XG5cdFx0fVxuXHRcdGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcblx0XHRcdGlmICh0eXBlb2YgbGlzdFtpXSA9PT0gdHlwZW9mIFtdKSB7XG5cdFx0XHRcdHJldHVybiBbLi4ucmV0LCAuLi5mbGF0dGVuKGxpc3RbaV0pLCAuLi5mbGF0dGVuKGxpc3QsIGkgKyAxKV07XG5cdFx0XHR9XG5cdFx0XHRyZXQucHVzaChsaXN0W2ldKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJldDtcblx0fTtcblx0Ly8gR2VuZXJhdGUgaHRtbCBmb3Igd2hvbGUgcG9wdXBcblx0Y29uc3QgcG9wdXBIVE1MID0gZnVuY3Rpb24gcG9wdXBIVE1MKGEpIHtcblx0XHRnZXRWYWx1ZU9mKCdwb3B1cFN0cnVjdHVyZScpO1xuXHRcdGNvbnN0IHN0cnVjdHVyZSA9IHBnLnN0cnVjdHVyZXNbcGcub3B0aW9uLnBvcHVwU3RydWN0dXJlXTtcblx0XHRpZiAodHlwZW9mIHN0cnVjdHVyZSAhPT0gJ29iamVjdCcpIHtcblx0XHRcdC8vIHJldHVybiAnVW5rbm93biBzdHJ1Y3R1cmU6ICcrcGcub3B0aW9uLnBvcHVwU3RydWN0dXJlO1xuXHRcdFx0Ly8gb3ZlcnJpZGUgdXNlciBjaG9pY2Vcblx0XHRcdHBnLm9wdGlvbi5wb3B1cFN0cnVjdHVyZSA9IHBnLm9wdGlvbkRlZmF1bHQucG9wdXBTdHJ1Y3R1cmU7XG5cdFx0XHRyZXR1cm4gcG9wdXBIVE1MKGEpO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHN0cnVjdHVyZS5wb3B1cExheW91dCAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0cmV0dXJuICdCYWQgbGF5b3V0Jztcblx0XHR9XG5cdFx0cGcubWlzYy5sYXlvdXQgPSBzdHJ1Y3R1cmUucG9wdXBMYXlvdXQoKTtcblx0XHRwZy5taXNjLnJlZGlyU3BhbnMgPSB0eXBlb2Ygc3RydWN0dXJlLnBvcHVwUmVkaXJTcGFucyA9PT0gJ2Z1bmN0aW9uJyA/IHN0cnVjdHVyZS5wb3B1cFJlZGlyU3BhbnMoKSA6IFtdO1xuXHRcdHJldHVybiBtYWtlRW1wdHlTcGFucyhwZy5taXNjLmxheW91dCwgYS5uYXZwb3B1cCk7XG5cdH07XG5cdGNvbnN0IG1ha2VFbXB0eVNwYW5zID0gZnVuY3Rpb24gbWFrZUVtcHR5U3BhbnMobGlzdCwgbmF2cG9wKSB7XG5cdFx0bGV0IHJldCA9ICcnO1xuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBsaXN0KSB7XG5cdFx0XHRpZiAodHlwZW9mIGVsZW1lbnQgPT09IHR5cGVvZiAnJykge1xuXHRcdFx0XHRyZXQgKz0gZW1wdHlTcGFuSFRNTChlbGVtZW50LCBuYXZwb3AuaWROdW1iZXIsICdkaXYnKTtcblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQgPT09IHR5cGVvZiBbXSAmJiBlbGVtZW50Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0cmV0ID0gcmV0LnNwbGl0KC8oPFxcL1tePl0qPz4kKS8pLmpvaW4obWFrZUVtcHR5U3BhbnMoZWxlbWVudCwgbmF2cG9wKSk7XG5cdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50ID09PSB0eXBlb2Yge30gJiYgZWxlbWVudC5ub2RlVHlwZSkge1xuXHRcdFx0XHRyZXQgKz0gZW1wdHlTcGFuSFRNTChlbGVtZW50Lm5hbWUsIG5hdnBvcC5pZE51bWJlciwgZWxlbWVudC5ub2RlVHlwZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXQ7XG5cdH07XG5cdGNvbnN0IGVtcHR5U3BhbkhUTUwgPSBmdW5jdGlvbiBlbXB0eVNwYW5IVE1MKG5hbWUsIGlkLCB0YWcsIGNsYXNzbmFtZSkge1xuXHRcdHRhZyB8fD0gJ3NwYW4nO1xuXHRcdGNsYXNzbmFtZSB8fD0gZW1wdHlTcGFuSFRNTC5jbGFzc0FsaWFzZXNbbmFtZV07XG5cdFx0Y2xhc3NuYW1lIHx8PSBuYW1lO1xuXHRcdGlmIChuYW1lID09PSBnZXRWYWx1ZU9mKCdwb3B1cERyYWdIYW5kbGUnKSkge1xuXHRcdFx0Y2xhc3NuYW1lICs9ICcgcG9wdXBEcmFnSGFuZGxlJztcblx0XHR9XG5cdFx0cmV0dXJuIHNpbXBsZVByaW50ZignPCVzIGlkPVwiJXNcIiBjbGFzcz1cIiVzXCI+PC8lcz4nLCBbdGFnLCBuYW1lICsgaWQsIGNsYXNzbmFtZSwgdGFnXSk7XG5cdH07XG5cdGVtcHR5U3BhbkhUTUwuY2xhc3NBbGlhc2VzID0ge1xuXHRcdHBvcHVwU2Vjb25kUHJldmlldzogJ3BvcHVwUHJldmlldycsXG5cdH07XG5cdC8vIGdlbmVyYXRlIGh0bWwgZm9yIHBvcHVwIGltYWdlXG5cdC8vIDxhIGlkPVwicG9wdXBJbWFnZUxpbmtuXCI+PGltZyBpZD1cInBvcHVwSW1hZ2VuXCI+XG5cdC8vIHdoZXJlIG49aWROdW1iZXJcblx0Y29uc3QgaW1hZ2VIVE1MID0gKF9hcnRpY2xlLCBpZE51bWJlcikgPT4ge1xuXHRcdHJldHVybiBzaW1wbGVQcmludGYoXG5cdFx0XHQnPGEgaWQ9XCJwb3B1cEltYWdlTGluayQxXCI+JyArXG5cdFx0XHRcdCc8aW1nIGFsaWduPVwicmlnaHRcIiB2YWxpZ249XCJ0b3BcIiBpZD1cInBvcHVwSW1nJDFcIiBzdHlsZT1cImRpc3BsYXk6bm9uZVwiPjwvaW1nPicgK1xuXHRcdFx0XHQnPC9hPicsXG5cdFx0XHRbaWROdW1iZXJdXG5cdFx0KTtcblx0fTtcblx0Y29uc3QgcG9wVGlwc1Nvb25GbiA9IChpZCwgd2hlbiwgcG9wRGF0YSkgPT4ge1xuXHRcdHdoZW4gfHw9IDI1MDtcblx0XHRjb25zdCBwb3BUaXBzID0gKCkgPT4ge1xuXHRcdFx0c2V0dXBUb29sdGlwcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKSwgZmFsc2UsIHRydWUsIHBvcERhdGEpO1xuXHRcdH07XG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdHNldFRpbWVvdXQocG9wVGlwcywgd2hlbiwgcG9wRGF0YSk7XG5cdFx0fTtcblx0fTtcblx0Y29uc3Qgc2V0UG9wdXBUaXBzQW5kSFRNTCA9IChodG1sLCBkaXZuYW1lLCBpZG51bWJlciwgcG9wRGF0YSkgPT4ge1xuXHRcdHNldFBvcHVwSFRNTChcblx0XHRcdGh0bWwsXG5cdFx0XHRkaXZuYW1lLFxuXHRcdFx0aWRudW1iZXIsXG5cdFx0XHRnZXRWYWx1ZU9mKCdwb3B1cFN1YnBvcHVwcycpID8gcG9wVGlwc1Nvb25GbihkaXZuYW1lICsgaWRudW1iZXIsIG51bGwsIHBvcERhdGEpIDogbnVsbFxuXHRcdCk7XG5cdH07XG5cdC8vIEVOREZJTEU6IGh0bWxvdXRwdXQuanNcblx0Ly8gU1RBUlRGSUxFOiBtb3VzZW91dC5qc1xuXHQvLyBmdXp6eSBjaGVja3Ncblx0Y29uc3QgZnV6enlDdXJzb3JPZmZNZW51cyA9IChfeCwgX3ksIF9mdXp6LCBwYXJlbnQpID0+IHtcblx0XHRpZiAoIXBhcmVudCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGNvbnN0IHVscyA9IHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKCd1bCcpO1xuXHRcdGZvciAoY29uc3QgdWwgb2YgdWxzKSB7XG5cdFx0XHRpZiAodWwuY2xhc3NOYW1lID09PSAncG9wdXBfbWVudScgJiYgdWwub2Zmc2V0V2lkdGggPiAwKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH0gLy8gZWxzZSB7IGRvY3VtZW50LnRpdGxlKz0nLic7IH1cblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH07XG5cdGNvbnN0IGNoZWNrUG9wdXBQb3NpdGlvbiA9ICgpID0+IHtcblx0XHQvLyBzdG9wIHRoZSBwb3B1cCBydW5uaW5nIG9mZiB0aGUgcmlnaHQgb2YgdGhlIHNjcmVlblxuXHRcdC8vIEZJWE1FIGF2b2lkIHBnLmN1cnJlbnQubGlua1xuXHRcdGlmIChwZy5jdXJyZW50LmxpbmsgJiYgcGcuY3VycmVudC5saW5rLm5hdnBvcHVwKSB7XG5cdFx0XHRwZy5jdXJyZW50LmxpbmsubmF2cG9wdXAubGltaXRIb3Jpem9udGFsUG9zaXRpb24oKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IG1vdXNlT3V0V2lraUxpbmsgPSBmdW5jdGlvbiBtb3VzZU91dFdpa2lMaW5rKCkge1xuXHRcdC8vIGNvbnNvbGUgKCdtb3VzZU91dFdpa2lMaW5rJyk7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0cmVtb3ZlTW9kaWZpZXJLZXlMaXN0ZW5lcihzZWxmKTtcblx0XHRpZiAoc2VsZi5uYXZwb3B1cCA9PT0gbnVsbCB8fCBzZWxmLm5hdnBvcHVwID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKCFzZWxmLm5hdnBvcHVwLmlzVmlzaWJsZSgpKSB7XG5cdFx0XHRzZWxmLm5hdnBvcHVwLmJhbmlzaCgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRyZXN0b3JlVGl0bGUoc2VsZik7XG5cdFx0TmF2cG9wdXAudHJhY2tlci5hZGRIb29rKHBvc0NoZWNrZXJIb29rKHNlbGYubmF2cG9wdXApKTtcblx0fTtcblx0Y29uc3QgcG9zQ2hlY2tlckhvb2sgPSAobmF2cG9wKSA9PiB7XG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdGlmICghbmF2cG9wLmlzVmlzaWJsZSgpKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlOyAvKiByZW1vdmUgdGhpcyBob29rICovXG5cdFx0XHR9XG5cdFx0XHRpZiAoTmF2cG9wdXAudHJhY2tlci5kaXJ0eSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCB7eH0gPSBOYXZwb3B1cC50cmFja2VyO1xuXHRcdFx0Y29uc3Qge3l9ID0gTmF2cG9wdXAudHJhY2tlcjtcblx0XHRcdGNvbnN0IG1vdXNlT3Zlck5hdnBvcCA9XG5cdFx0XHRcdG5hdnBvcC5pc1dpdGhpbih4LCB5LCBuYXZwb3AuZnV6eiwgbmF2cG9wLm1haW5EaXYpIHx8XG5cdFx0XHRcdCFmdXp6eUN1cnNvck9mZk1lbnVzKHgsIHksIG5hdnBvcC5mdXp6LCBuYXZwb3AubWFpbkRpdik7XG5cdFx0XHQvLyBGSVhNRSBpdCdkIGJlIHByZXR0aWVyIHRvIGRvIHRoaXMgaW50ZXJuYWwgdG8gdGhlIE5hdnBvcHVwIG9iamVjdHNcblx0XHRcdGxldCB0ID0gZ2V0VmFsdWVPZigncG9wdXBIaWRlRGVsYXknKTtcblx0XHRcdGlmICh0KSB7XG5cdFx0XHRcdHQgKj0gMTAwMDtcblx0XHRcdH1cblx0XHRcdGlmICghdCkge1xuXHRcdFx0XHRpZiAoIW1vdXNlT3Zlck5hdnBvcCkge1xuXHRcdFx0XHRcdGlmIChuYXZwb3AucGFyZW50QW5jaG9yKSB7XG5cdFx0XHRcdFx0XHRyZXN0b3JlVGl0bGUobmF2cG9wLnBhcmVudEFuY2hvcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG5hdnBvcC5iYW5pc2goKTtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTsgLyogcmVtb3ZlIHRoaXMgaG9vayAqL1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdC8vIHdlIGhhdmUgYSBoaWRlIGRlbGF5IHNldFxuXHRcdFx0Y29uc3QgZCA9IERhdGUubm93KCk7XG5cdFx0XHRpZiAoIW5hdnBvcC5tb3VzZUxlYXZpbmdUaW1lKSB7XG5cdFx0XHRcdG5hdnBvcC5tb3VzZUxlYXZpbmdUaW1lID0gZDtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKG1vdXNlT3Zlck5hdnBvcCkge1xuXHRcdFx0XHRuYXZwb3AubW91c2VMZWF2aW5nVGltZSA9IG51bGw7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlmIChkIC0gbmF2cG9wLm1vdXNlTGVhdmluZ1RpbWUgPiB0KSB7XG5cdFx0XHRcdG5hdnBvcC5tb3VzZUxlYXZpbmdUaW1lID0gbnVsbDtcblx0XHRcdFx0bmF2cG9wLmJhbmlzaCgpO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTsgLyogcmVtb3ZlIHRoaXMgaG9vayAqL1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH07XG5cdH07XG5cdGNvbnN0IHJ1blN0b3BQb3B1cFRpbWVyID0gKG5hdnBvcCkgPT4ge1xuXHRcdC8vIGF0IHRoaXMgcG9pbnQsIHdlIHNob3VsZCBoYXZlIGxlZnQgdGhlIGxpbmsgYnV0IHJlbWFpbiB3aXRoaW4gdGhlIHBvcHVwXG5cdFx0Ly8gc28gd2UgY2FsbCB0aGlzIGZ1bmN0aW9uIGFnYWluIHVudGlsIHdlIGxlYXZlIHRoZSBwb3B1cC5cblx0XHRpZiAoIW5hdnBvcC5zdG9wUG9wdXBUaW1lcikge1xuXHRcdFx0bmF2cG9wLnN0b3BQb3B1cFRpbWVyID0gc2V0SW50ZXJ2YWwocG9zQ2hlY2tlckhvb2sobmF2cG9wKSwgNTAwKTtcblx0XHRcdG5hdnBvcC5hZGRIb29rKFxuXHRcdFx0XHQoKSA9PiB7XG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbChuYXZwb3Auc3RvcFBvcHVwVGltZXIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQnaGlkZScsXG5cdFx0XHRcdCdiZWZvcmUnXG5cdFx0XHQpO1xuXHRcdH1cblx0fTtcblx0Ly8gRU5ERklMRTogbW91c2VvdXQuanNcblx0Ly8gU1RBUlRGSUxFOiBwcmV2aWV3bWFrZXIuanNcblx0LyoqXG5cdCAqIEBmaWxlb3ZlcnZpZXdcblx0ICogRGVmaW5lcyB0aGUge0Bzb3VyY2UgUHJldmlld21ha2VyfSBvYmplY3QsIHdoaWNoIGdlbmVyYXRlcyBzaG9ydCBwcmV2aWV3cyBmcm9tIHdpa2kgbWFya3VwLlxuXHQgKi9cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuZXcgUHJldmlld21ha2VyXG5cdCAqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAY2xhc3MgVGhlIFByZXZpZXdtYWtlciBjbGFzcy4gVXNlIGFuIGluc3RhbmNlIG9mIHRoaXMgdG8gZ2VuZXJhdGUgc2hvcnQgcHJldmlld3MgZnJvbSBXaWtpdGV4dC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHdpa2lUZXh0IFRoZSBXaWtpdGV4dCBzb3VyY2Ugb2YgdGhlIHBhZ2Ugd2Ugd2lzaCB0byBwcmV2aWV3LlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVybCBUaGUgdXJsIHdlIHNob3VsZCBwcmVwZW5kIHdoZW4gY3JlYXRpbmcgcmVsYXRpdmUgdXJscy5cblx0ICogQHBhcmFtIHtOYXZwb3B1cH0gb3duZXIgVGhlIG5hdnBvcCBhc3NvY2lhdGVkIHRvIHRoaXMgcHJldmlldyBnZW5lcmF0b3Jcblx0ICovXG5cdGNsYXNzIFByZXZpZXdtYWtlciB7XG5cdFx0Y29uc3RydWN0b3Iod2lraVRleHQsIGJhc2VVcmwsIG93bmVyKSB7XG5cdFx0XHQvKiogVGhlIHdpa2l0ZXh0IHdoaWNoIGlzIG1hbmlwdWxhdGVkIHRvIGdlbmVyYXRlIHRoZSBwcmV2aWV3LiAqL1xuXHRcdFx0dGhpcy5vcmlnaW5hbERhdGEgPSB3aWtpVGV4dDtcblx0XHRcdHRoaXMuYmFzZVVybCA9IGJhc2VVcmw7XG5cdFx0XHR0aGlzLm93bmVyID0gb3duZXI7XG5cdFx0XHR0aGlzLm1heENoYXJhY3RlcnMgPSBnZXRWYWx1ZU9mKCdwb3B1cE1heFByZXZpZXdDaGFyYWN0ZXJzJyk7XG5cdFx0XHR0aGlzLm1heFNlbnRlbmNlcyA9IGdldFZhbHVlT2YoJ3BvcHVwTWF4UHJldmlld1NlbnRlbmNlcycpO1xuXHRcdFx0dGhpcy5zZXREYXRhKCk7XG5cdFx0fVxuXHRcdHNldERhdGEoKSB7XG5cdFx0XHRjb25zdCBtYXhTaXplID0gTWF0aC5tYXgoMWU0LCAyICogdGhpcy5tYXhDaGFyYWN0ZXJzKTtcblx0XHRcdHRoaXMuZGF0YSA9IHRoaXMub3JpZ2luYWxEYXRhLnNsaWNlKDAsIE1hdGgubWF4KDAsIG1heFNpemUpKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogUmVtb3ZlIEhUTUwgY29tbWVudHNcblx0XHQgKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0a2lsbENvbW1lbnRzKCkge1xuXHRcdFx0Ly8gdGhpcyBhbHNvIGtpbGxzIG9uZSB0cmFpbGluZyBuZXdsaW5lLCBlZyBbW2RpYW15b11dXG5cdFx0XHR0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZSgvXjwhLS1bXiRdKj8tLT5cXG58XFxuPCEtLVteJF0qPy0tPig/PVxcbil8PCEtLVteJF0qPy0tPi9nLCAnJyk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0a2lsbERpdnMoKSB7XG5cdFx0XHQvLyBzYXkgZ29vZGJ5ZSwgZGl2cyAoY2FuIGJlIG5lc3RlZCwgc28gdXNlICogbm90ICo/KVxuXHRcdFx0dGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoLzwgKmRpdltePl0qICo+W1xcU1xcc10qPzwgKlxcLyAqZGl2ICo+L2dpLCAnJyk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0a2lsbEdhbGxlcmllcygpIHtcblx0XHRcdHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5yZXBsYWNlKC88ICpnYWxsZXJ5W14+XSogKj5bXFxTXFxzXSo/PCAqXFwvICpnYWxsZXJ5ICo+L2dpLCAnJyk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBvcGVuaW5nXG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IGNsb3Npbmdcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gc3Vib3BlbmluZ1xuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBzdWJjbG9zaW5nXG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IHJlcGxcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdGtpbGwob3BlbmluZywgY2xvc2luZywgc3Vib3BlbmluZywgc3ViY2xvc2luZywgcmVwbCkge1xuXHRcdFx0bGV0IG9sZGsgPSB0aGlzLmRhdGE7XG5cdFx0XHRsZXQgayA9IFByZXZpZXdtYWtlci5raWxsU3R1ZmYodGhpcy5kYXRhLCBvcGVuaW5nLCBjbG9zaW5nLCBzdWJvcGVuaW5nLCBzdWJjbG9zaW5nLCByZXBsKTtcblx0XHRcdHdoaWxlIChrLmxlbmd0aCA8IG9sZGsubGVuZ3RoKSB7XG5cdFx0XHRcdG9sZGsgPSBrO1xuXHRcdFx0XHRrID0gUHJldmlld21ha2VyLmtpbGxTdHVmZihrLCBvcGVuaW5nLCBjbG9zaW5nLCBzdWJvcGVuaW5nLCBzdWJjbG9zaW5nLCByZXBsKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuZGF0YSA9IGs7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSB0eHRcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gb3BlbmluZ1xuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBjbG9zaW5nXG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IHN1Ym9wZW5pbmdcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gc3ViY2xvc2luZ1xuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSByZXBsXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRzdGF0aWMga2lsbFN0dWZmKHR4dCwgb3BlbmluZywgY2xvc2luZywgc3Vib3BlbmluZywgc3ViY2xvc2luZywgcmVwbCkge1xuXHRcdFx0Y29uc3Qgb3AgPSBQcmV2aWV3bWFrZXIubWFrZVJlZ2V4cChvcGVuaW5nKTtcblx0XHRcdGNvbnN0IGNsID0gUHJldmlld21ha2VyLm1ha2VSZWdleHAoY2xvc2luZywgJ14nKTtcblx0XHRcdGNvbnN0IHNiID0gc3Vib3BlbmluZyA/IFByZXZpZXdtYWtlci5tYWtlUmVnZXhwKHN1Ym9wZW5pbmcsICdeJykgOiBudWxsO1xuXHRcdFx0Y29uc3Qgc2MgPSBzdWJjbG9zaW5nID8gUHJldmlld21ha2VyLm1ha2VSZWdleHAoc3ViY2xvc2luZywgJ14nKSA6IGNsO1xuXHRcdFx0aWYgKCFvcCB8fCAhY2wpIHtcblx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoJ05hdmlnYXRpb24gUG9wdXBzIGVycm9yOiBvcCBvciBjbCBpcyBudWxsISBzb21ldGhpbmcgaXMgd3JvbmcuJywge1xuXHRcdFx0XHRcdHRhZzogJ3BvcHVwcycsXG5cdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICghb3AudGVzdCh0eHQpKSB7XG5cdFx0XHRcdHJldHVybiB0eHQ7XG5cdFx0XHR9XG5cdFx0XHRsZXQgcmV0ID0gJyc7XG5cdFx0XHRjb25zdCBvcFJlc3VsdCA9IG9wLmV4ZWModHh0KTtcblx0XHRcdHJldCA9IHR4dC5zbGljZSgwLCBNYXRoLm1heCgwLCBvcFJlc3VsdC5pbmRleCkpO1xuXHRcdFx0dHh0ID0gdHh0LnNsaWNlKE1hdGgubWF4KDAsIG9wUmVzdWx0LmluZGV4ICsgb3BSZXN1bHRbMF0ubGVuZ3RoKSk7XG5cdFx0XHRsZXQgZGVwdGggPSAxO1xuXHRcdFx0d2hpbGUgKHR4dC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGxldCByZW1vdmFsID0gMDtcblx0XHRcdFx0aWYgKGRlcHRoID09PSAxICYmIGNsLnRlc3QodHh0KSkge1xuXHRcdFx0XHRcdGRlcHRoLS07XG5cdFx0XHRcdFx0cmVtb3ZhbCA9IGNsLmV4ZWModHh0KVswXS5sZW5ndGg7XG5cdFx0XHRcdH0gZWxzZSBpZiAoZGVwdGggPiAxICYmIHNjLnRlc3QodHh0KSkge1xuXHRcdFx0XHRcdGRlcHRoLS07XG5cdFx0XHRcdFx0cmVtb3ZhbCA9IHNjLmV4ZWModHh0KVswXS5sZW5ndGg7XG5cdFx0XHRcdH0gZWxzZSBpZiAoc2IgJiYgc2IudGVzdCh0eHQpKSB7XG5cdFx0XHRcdFx0ZGVwdGgrKztcblx0XHRcdFx0XHRyZW1vdmFsID0gc2IuZXhlYyh0eHQpWzBdLmxlbmd0aDtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZW1vdmFsIHx8PSAxO1xuXHRcdFx0XHR0eHQgPSB0eHQuc2xpY2UoTWF0aC5tYXgoMCwgcmVtb3ZhbCkpO1xuXHRcdFx0XHRpZiAoZGVwdGggPT09IDApIHtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJldCArIChyZXBsIHx8ICcnKSArIHR4dDtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd8UmVnRXhwfSB4XG5cdFx0ICogQHBhcmFtIHtzdHJpbmd8UmVnRXhwfSBwcmVmaXhcblx0XHQgKiBAcGFyYW0ge3N0cmluZ3xSZWdFeHB9IHN1ZmZpeFxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0c3RhdGljIG1ha2VSZWdleHAoeCwgcHJlZml4LCBzdWZmaXgpIHtcblx0XHRcdHByZWZpeCB8fD0gJyc7XG5cdFx0XHRzdWZmaXggfHw9ICcnO1xuXHRcdFx0bGV0IHJlU3RyID0gJyc7XG5cdFx0XHRsZXQgZmxhZ3MgPSAnJztcblx0XHRcdGlmIChpc1N0cmluZyh4KSkge1xuXHRcdFx0XHRyZVN0ciA9IHByZWZpeCArIGxpdGVyYWxpemVSZWdleCh4KSArIHN1ZmZpeDtcblx0XHRcdH0gZWxzZSBpZiAoaXNSZWdFeHAoeCkpIHtcblx0XHRcdFx0bGV0IHMgPSB4LnRvU3RyaW5nKCkuc2xpY2UoMSk7XG5cdFx0XHRcdGNvbnN0IHNwID0gcy5zcGxpdCgnLycpO1xuXHRcdFx0XHRmbGFncyA9IHNwLmF0KC0xKTtcblx0XHRcdFx0c3Bbc3AubGVuZ3RoIC0gMV0gPSAnJztcblx0XHRcdFx0cyA9IHNwLmpvaW4oJy8nKTtcblx0XHRcdFx0cyA9IHMuc2xpY2UoMCwgTWF0aC5tYXgoMCwgcy5sZW5ndGggLSAxKSk7XG5cdFx0XHRcdHJlU3RyID0gcHJlZml4ICsgcyArIHN1ZmZpeDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxvZygnbWFrZVJlZ2V4cCBmYWlsZWQnKTtcblx0XHRcdH1cblx0XHRcdGxvZyhgbWFrZVJlZ2V4cDogZ290IHJlU3RyPSR7cmVTdHJ9LCBmbGFncz0ke2ZsYWdzfWApO1xuXHRcdFx0cmV0dXJuIG5ldyBSZWdFeHAocmVTdHIsIGZsYWdzKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRraWxsQm94VGVtcGxhdGVzKCkge1xuXHRcdFx0Ly8gdGF4b2JveCByZW1vdmFsLi4uIGluIGZhY3QsIHRoZXJlJ3MgYSBzYXVkaXByaW5jZWJveF9iZWdpbiwgc28gbGV0J3MgYmUgbW9yZSBnZW5lcmFsXG5cdFx0XHQvLyBhbHNvLCBoYXZlIGZsb2F0X2JlZ2luLCAuLi4gZmxvYXRfZW5kXG5cdFx0XHR0aGlzLmtpbGwoL3t7W15cXHN7fH1dKj8oZmxvYXR8Ym94KVsgX10oYmVnaW58c3RhcnQpL2ksIC99fVxccyovLCAne3snKTtcblx0XHRcdC8vIGluZm9ib3hlcyBldGNcblx0XHRcdC8vIGZyb20gWnl4dzoga2lsbCBmcmFtZXMgdG9vXG5cdFx0XHR0aGlzLmtpbGwoL3t7W15cXHN7fH1dKj8oaW5mb2JveHxlbGVtZW50Ym94fGZyYW1lKVsgX10vaSwgL319XFxzKi8sICd7eycpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdGtpbGxUZW1wbGF0ZXMoKSB7XG5cdFx0XHR0aGlzLmtpbGwoJ3t7JywgJ319JywgJ3snLCAnfScsICcgJyk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0a2lsbFRhYmxlcygpIHtcblx0XHRcdC8vIHRhYmxlcyBhcmUgYmFkLCB0b29cblx0XHRcdC8vIHRoaXMgY2FuIGJlIHNsb3csIGJ1dCBpdCdzIGFuIGlucHJvdmVtZW50IG92ZXIgYSBicm93c2VyIGhhbmdcblx0XHRcdC8vIHRvcnR1cmUgdGVzdDogW1tDb21wYXJpc29uX29mX0ludGVsX0NlbnRyYWxfUHJvY2Vzc2luZ19Vbml0c11dXG5cdFx0XHR0aGlzLmtpbGwoJ3t8JywgL1xcfH1cXHMqLywgJ3t8Jyk7XG5cdFx0XHR0aGlzLmtpbGwoLzx0YWJsZS4qPz4vaSwgLzxcXC90YWJsZS4qPz4vaSwgLzx0YWJsZS4qPz4vaSk7XG5cdFx0XHQvLyByZW1vdmUgbGluZXMgc3RhcnRpbmcgd2l0aCBhIHBpcGUgZm9yIHRoZSBoZWxsIG9mIGl0ICg/KVxuXHRcdFx0dGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoL15cXHwuKiQvZ20sICcnKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRraWxsSW1hZ2VzKCkge1xuXHRcdFx0Y29uc3QgZm9yYmlkZGVuTmFtZXNwYWNlQWxpYXNlcyA9IFtdO1xuXHRcdFx0Zm9yIChjb25zdCBbbG9jYWxpemVkTmFtZXNwYWNlTGMsIG5hbWVzcGFjZUlkXSBvZiBPYmplY3QuZW50cmllcyhtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZUlkcycpKSkge1xuXHRcdFx0XHRpZiAobmFtZXNwYWNlSWQgIT09IHBnLm5zSW1hZ2VJZCAmJiBuYW1lc3BhY2VJZCAhPT0gcGcubnNDYXRlZ29yeUlkKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZvcmJpZGRlbk5hbWVzcGFjZUFsaWFzZXMucHVzaChsb2NhbGl6ZWROYW1lc3BhY2VMYy5zcGxpdCgnICcpLmpvaW4oJ1sgX10nKSk7IC8vIHRvZG86IGVzY2FwZSByZWdleHAgZnJhZ21lbnRzIVxuXHRcdFx0fVxuXHRcdFx0Ly8gaW1hZ2VzIGFuZCBjYXRlZ29yaWVzIGFyZSBhIG5vbm9cblx0XHRcdHRoaXMua2lsbChuZXcgUmVnRXhwKGBbW11bW11cXFxccyooJHtmb3JiaWRkZW5OYW1lc3BhY2VBbGlhc2VzLmpvaW4oJ3wnKX0pXFxcXHMqOmAsICdpJyksIC9dXVxccyovLCAnWycsICddJyk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0a2lsbEhUTUwoKSB7XG5cdFx0XHQvLyBraWxsIDxyZWYgLi4uPi4uLjwvcmVmPlxuXHRcdFx0dGhpcy5raWxsKC88cmVmXFxiW14vPl0qPz4vaSwgLzxcXC9yZWY+L2kpO1xuXHRcdFx0Ly8gbGV0J3MgYWxzbyBkZWxldGUgZW50aXJlIGxpbmVzIHN0YXJ0aW5nIHdpdGggPC4gaXQncyB3b3J0aCBhIHRyeS5cblx0XHRcdHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5yZXBsYWNlKC8oXnxcXG4pICo8LiovZywgJ1xcbicpO1xuXHRcdFx0Ly8gYW5kIHRob3NlIHBlc2t5IGh0bWwgdGFncywgYnV0IG5vdCBub3dpa2kgb3IgYmxvY2txdW90ZSB0YWdzXG5cdFx0XHRjb25zdCBzcGxpdHRlZCA9IHRoaXMuZGF0YS5zcGxpdCgvKDxbXFxXXFx3XSo/KD86PnwkfCg/PTwpKSkvKTtcblx0XHRcdGNvbnN0IGxlbiA9IHNwbGl0dGVkLmxlbmd0aDtcblx0XHRcdGZvciAobGV0IGkgPSAxOyBpIDwgbGVuOyBpICs9IDIpIHtcblx0XHRcdFx0c3dpdGNoIChzcGxpdHRlZFtpXSkge1xuXHRcdFx0XHRcdGNhc2UgJzxubycuY29uY2F0KCd3aWtpJywgJz4nKTpcblx0XHRcdFx0XHRjYXNlICc8L25vJy5jb25jYXQoJ3dpa2knLCAnPicpOlxuXHRcdFx0XHRcdGNhc2UgJzxibG9jaycuY29uY2F0KCdxdW90ZScsICc+Jyk6XG5cdFx0XHRcdFx0Y2FzZSAnPC9ibG9jaycuY29uY2F0KCdxdW90ZScsICc+Jyk6XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0c3BsaXR0ZWRbaV0gPSAnJztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5kYXRhID0gc3BsaXR0ZWQuam9pbignJyk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0a2lsbENodW5rcygpIHtcblx0XHRcdC8vIGhldXJpc3RpY3MgYWxlcnRcblx0XHRcdC8vIGNodW5rcyBvZiBpdGFsaWMgdGV4dD8geW91IGNyYXp5LCBtYW4/XG5cdFx0XHRjb25zdCBpdGFsaWNDaHVua1JlZ2V4ID0gLygoXnxcXG4pXFxzKjoqXFxzKicnW14nXShbXiddfCcnJ3wnW14nXSl7MjB9KC58XFxuW15cXG5dKSonJ1tcXHMhLj9dKlxcbikrL2c7XG5cdFx0XHQvLyBrZWVwIHN0dWZmIHNlcGFyYXRlZCwgdGhvdWdoLCBzbyBzdGljayBpbiBcXG4gKGZpeGVzIFtbVW5pb24gSmFja11dP1xuXHRcdFx0dGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoaXRhbGljQ2h1bmtSZWdleCwgJ1xcbicpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdG1vcHVwKCkge1xuXHRcdFx0Ly8gd2Ugc2ltcGx5ICpjYW4ndCogYmUgZG9pbmcgd2l0aCBob3Jpem9udGFsIHJ1bGVzIHJpZ2h0IG5vd1xuXHRcdFx0dGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoL14tezQsfS9nbSwgJycpO1xuXHRcdFx0Ly8gbm8gaW5kZW50ZWQgbGluZXNcblx0XHRcdHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5yZXBsYWNlKC8oXnxcXG4pICo6W15cXG5dKi9nLCAnJyk7XG5cdFx0XHQvLyByZXBsYWNlIF9fVE9DX18sIF9fTk9UT0NfXyBhbmQgd2hhdGV2ZXIgZWxzZSB0aGVyZSBpc1xuXHRcdFx0Ly8gdGhpcydsbCBwcm9iYWJseSBkb1xuXHRcdFx0dGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoL15fX1tfYS16XSpfXyAqJC9naW0sICcnKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRmaXJzdEJpdCgpIHtcblx0XHRcdC8vIGRvbnQndCBiZSBnaXZpbicgbWUgbm8gc3Vic2VxdWVudCBwYXJhZ3JhcGhzLCB5b3UgaGVhciBtZT9cblx0XHRcdC8vIC8gZmlyc3Qgd2UgXCJub3JtYWxpemVcIiBzZWN0aW9uIGhlYWRpbmdzLCByZW1vdmluZyB3aGl0ZXNwYWNlIGFmdGVyLCBhZGRpbmcgYmVmb3JlXG5cdFx0XHRsZXQgZCA9IHRoaXMuZGF0YTtcblx0XHRcdGlmIChnZXRWYWx1ZU9mKCdwb3B1cFByZXZpZXdDdXRIZWFkaW5ncycpKSB7XG5cdFx0XHRcdHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5yZXBsYWNlKC9cXHMqKD09K1tePV0qPT0rKVxccyovZywgJ1xcblxcbiQxICcpO1xuXHRcdFx0XHQvLyAvIHRoZW4gd2Ugd2FudCB0byBnZXQgcmlkIG9mIHBhcmFncmFwaCBicmVha3Mgd2hvc2UgdGV4dCBlbmRzIGJhZGx5XG5cdFx0XHRcdHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5yZXBsYWNlKC8oWzo7XSkgKlxcbnsyLH0vZywgJyQxXFxuJyk7XG5cdFx0XHRcdHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5yZXBsYWNlKC9eXFxzKi8sICcnKTtcblx0XHRcdFx0Y29uc3Qgc3R1ZmYgPSAvXihbXlxcbl18XFxuXFxTKSovLmV4ZWModGhpcy5kYXRhKTtcblx0XHRcdFx0aWYgKHN0dWZmKSB7XG5cdFx0XHRcdFx0W2RdID0gc3R1ZmY7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFnZXRWYWx1ZU9mKCdwb3B1cFByZXZpZXdGaXJzdFBhck9ubHknKSkge1xuXHRcdFx0XHRcdGQgPSB0aGlzLmRhdGE7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gLyBub3cgcHV0IFxcblxcbiBhZnRlciBzZWN0aW9ucyBzbyB0aGF0IGJ1bGxldHMgYW5kIG51bWJlcmVkIGxpc3RzIHdvcmtcblx0XHRcdFx0ZCA9IGQucmVwbGFjZSgvKD09K1tePV0qPT0rKVxccyovZywgJyQxXFxuXFxuJyk7XG5cdFx0XHR9XG5cdFx0XHQvLyBTcGxpdCBzZW50ZW5jZXMuIFN1cGVyZmx1b3VzIHNlbnRlbmNlcyBhcmUgUklHSFQgT1VULlxuXHRcdFx0Ly8gbm90ZTogZXhhY3RseSAxIHNldCBvZiBwYXJlbnMgaGVyZSBuZWVkZWQgdG8gbWFrZSB0aGUgc2xpY2Ugd29ya1xuXHRcdFx0ZCA9IGQuc3BsaXQoLyhbIS4/XStbXCInXSpcXHMpL2cpO1xuXHRcdFx0Ly8gbGVhZGluZyBzcGFjZSBpcyBiYWQsIG1ta2F5P1xuXHRcdFx0ZFswXSA9IGRbMF0ucmVwbGFjZSgvXlxccyovLCAnJyk7XG5cdFx0XHRjb25zdCBub3RTZW50ZW5jZUVuZHMgPSAvKFteLl1bYS16XVxcLiAqW2Etel18ZXRjfHNpY3xkcnxtcnxtcnN8bXN8c3R8bm98b3B8Y2l0fFxcW1teXFxdXSp8XFxzW2Etel0pJC9pO1xuXHRcdFx0ZCA9IHRoaXMuZml4U2VudGVuY2VFbmRzKGQsIG5vdFNlbnRlbmNlRW5kcyk7XG5cdFx0XHR0aGlzLmZ1bGxMZW5ndGggPSBkLmpvaW4oJycpLmxlbmd0aDtcblx0XHRcdGxldCBuID0gdGhpcy5tYXhTZW50ZW5jZXM7XG5cdFx0XHRsZXQgZGQgPSBQcmV2aWV3bWFrZXIuZmlyc3RTZW50ZW5jZXMoZCwgbik7XG5cdFx0XHRkbyB7XG5cdFx0XHRcdGRkID0gUHJldmlld21ha2VyLmZpcnN0U2VudGVuY2VzKGQsIG4pO1xuXHRcdFx0XHQtLW47XG5cdFx0XHR9IHdoaWxlIChkZC5sZW5ndGggPiB0aGlzLm1heENoYXJhY3RlcnMgJiYgbiAhPT0gMCk7XG5cdFx0XHR0aGlzLmRhdGEgPSBkZDtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHN0cnNcblx0XHQgKiBAcGFyYW0ge1JlZ0V4cH0gcmVnXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRmaXhTZW50ZW5jZUVuZHMoc3RycywgcmVnKSB7XG5cdFx0XHQvLyB0YWtlIGFuIGFycmF5IG9mIHN0cmluZ3MsIHN0cnNcblx0XHRcdC8vIGpvaW4gc3Ryc1tpXSB0byBzdHJzW2krMV0gJiBzdHJzW2krMl0gaWYgc3Ryc1tpXSBtYXRjaGVzIHJlZ2V4IHJlZ1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzdHJzLmxlbmd0aCAtIDI7ICsraSkge1xuXHRcdFx0XHRpZiAocmVnLnRlc3Qoc3Ryc1tpXSkpIHtcblx0XHRcdFx0XHRjb25zdCBhID0gW107XG5cdFx0XHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBzdHJzLmxlbmd0aDsgKytqKSB7XG5cdFx0XHRcdFx0XHRpZiAoaiA8IGkpIHtcblx0XHRcdFx0XHRcdFx0YVtqXSA9IHN0cnNbal07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoaiA9PT0gaSkge1xuXHRcdFx0XHRcdFx0XHRhW2ldID0gc3Ryc1tpXSArIHN0cnNbaSArIDFdICsgc3Ryc1tpICsgMl07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoaiA+IGkgKyAyKSB7XG5cdFx0XHRcdFx0XHRcdGFbaiAtIDJdID0gc3Ryc1tqXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuZml4U2VudGVuY2VFbmRzKGEsIHJlZyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBzdHJzO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge3N0cmluZ1tdfSBzdHJzXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IGhvd21hbnlcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHN0YXRpYyBmaXJzdFNlbnRlbmNlcyhzdHJzLCBob3dtYW55KSB7XG5cdFx0XHRjb25zdCB0ID0gc3Rycy5zbGljZSgwLCAyICogaG93bWFueSk7XG5cdFx0XHRyZXR1cm4gdC5qb2luKCcnKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRraWxsQmFkV2hpdGVzcGFjZSgpIHtcblx0XHRcdC8vIGFsc28gY2xlYW5zIHVwIGlzb2xhdGVkICcnJydcblx0XHRcdHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5yZXBsYWNlKC9eIConKyAqJC9nbSwgJycpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBSdW5zIHRoZSB2YXJpb3VzIG1ldGhvZHMgdG8gZ2VuZXJhdGUgdGhlIHByZXZpZXcuXG5cdFx0ICogVGhlIHByZXZpZXcgaXMgc3RvcmVkIGluIHRoZSA8Y29kZT5odG1sPC9odG1sPiBmaWVsZC5cblx0XHQgKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0bWFrZVByZXZpZXcoKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHRoaXMub3duZXIuYXJ0aWNsZS5uYW1lc3BhY2VJZCgpICE9PSBwZy5uc1RlbXBsYXRlSWQgJiZcblx0XHRcdFx0dGhpcy5vd25lci5hcnRpY2xlLm5hbWVzcGFjZUlkKCkgIT09IHBnLm5zSW1hZ2VJZFxuXHRcdFx0KSB7XG5cdFx0XHRcdHRoaXMua2lsbENvbW1lbnRzKCk7XG5cdFx0XHRcdHRoaXMua2lsbERpdnMoKTtcblx0XHRcdFx0dGhpcy5raWxsR2FsbGVyaWVzKCk7XG5cdFx0XHRcdHRoaXMua2lsbEJveFRlbXBsYXRlcygpO1xuXHRcdFx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBQcmV2aWV3S2lsbFRlbXBsYXRlcycpKSB7XG5cdFx0XHRcdFx0dGhpcy5raWxsVGVtcGxhdGVzKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5raWxsTXVsdGlsaW5lVGVtcGxhdGVzKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5raWxsVGFibGVzKCk7XG5cdFx0XHRcdHRoaXMua2lsbEltYWdlcygpO1xuXHRcdFx0XHR0aGlzLmtpbGxIVE1MKCk7XG5cdFx0XHRcdHRoaXMua2lsbENodW5rcygpO1xuXHRcdFx0XHR0aGlzLm1vcHVwKCk7XG5cdFx0XHRcdHRoaXMuZmlyc3RCaXQoKTtcblx0XHRcdFx0dGhpcy5raWxsQmFkV2hpdGVzcGFjZSgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5raWxsSFRNTCgpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5odG1sID0gd2lraTJodG1sKHRoaXMuZGF0YSwgdGhpcy5iYXNlVXJsKTsgLy8gbmVlZHMgbGl2ZXByZXZpZXdcblx0XHRcdHRoaXMuZml4SFRNTCgpO1xuXHRcdFx0dGhpcy5zdHJpcExvbmdUZW1wbGF0ZXMoKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGRhdGFcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHN0YXRpYyBlc1dpa2kySHRtbFBhcnQoZGF0YSkge1xuXHRcdFx0Y29uc3QgcmVMaW5rcyA9IC8oPzpcXFtcXFsoW15cXF18XSopKD86XFx8KFteXFxdfF0qKSkqXV0oW2Etel0qKSkvZ2k7IC8vIG1hdGNoIGEgd2lraWxpbmtcblx0XHRcdHJlTGlua3MubGFzdEluZGV4ID0gMDsgLy8gcmVzZXQgcmVnZXhcblx0XHRcdGxldCBtYXRjaDtcblx0XHRcdGxldCByZXN1bHQgPSAnJztcblx0XHRcdGxldCBwb3N0Zml4SW5kZXggPSAwO1xuXHRcdFx0d2hpbGUgKChtYXRjaCA9IHJlTGlua3MuZXhlYyhkYXRhKSkgIT09IG51bGwpIHtcblx0XHRcdFx0Ly8gbWF0Y2ggYWxsIHdpa2lsaW5rc1xuXHRcdFx0XHQvLyBGSVhNRTogdGhlIHdheSB0aGF0IGxpbmsgaXMgYnVpbHQgaGVyZSBpc24ndCBwZXJmZWN0LiBJdCBpcyBjbGlja2FibGUsIGJ1dCBwb3B1cHMgcHJldmlldyB3b24ndCByZWNvZ25pemUgaXQgaW4gc29tZSBjYXNlcy5cblx0XHRcdFx0cmVzdWx0ICs9IGAke3BnLmVzY2FwZVF1b3Rlc0hUTUwoZGF0YS5zdWJzdHJpbmcocG9zdGZpeEluZGV4LCBtYXRjaC5pbmRleCkpfTxhIGhyZWY9XCIke1xuXHRcdFx0XHRcdEluc3RhLmNvbmYucGF0aHMuYXJ0aWNsZXNcblx0XHRcdFx0fSR7cGcuZXNjYXBlUXVvdGVzSFRNTChtYXRjaFsxXSl9XCI+JHtwZy5lc2NhcGVRdW90ZXNIVE1MKChtYXRjaFsyXSA/PyBtYXRjaFsxXSkgKyBtYXRjaFszXSl9PC9hPmA7XG5cdFx0XHRcdHBvc3RmaXhJbmRleCA9IHJlTGlua3MubGFzdEluZGV4O1xuXHRcdFx0fVxuXHRcdFx0Ly8gYXBwZW5kIHRoZSByZXN0XG5cdFx0XHRyZXN1bHQgKz0gcGcuZXNjYXBlUXVvdGVzSFRNTChkYXRhLnNsaWNlKE1hdGgubWF4KDAsIHBvc3RmaXhJbmRleCkpKTtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHRcdGVkaXRTdW1tYXJ5UHJldmlldygpIHtcblx0XHRcdGNvbnN0IHJlQWVzID0gL1xcL1xcKiAqKC4qPykgKlxcKlxcLy9nOyAvLyBtYXRjaCB0aGUgZmlyc3Qgc2VjdGlvbiBtYXJrZXJcblx0XHRcdHJlQWVzLmxhc3RJbmRleCA9IDA7IC8vIHJlc2V0IHJlZ2V4XG5cdFx0XHRjb25zdCBtYXRjaCA9IHJlQWVzLmV4ZWModGhpcy5kYXRhKTtcblx0XHRcdGlmIChtYXRjaCkge1xuXHRcdFx0XHQvLyB3ZSBoYXZlIGEgc2VjdGlvbiBsaW5rLiBTcGxpdCBpdCwgcHJvY2VzcyBpdCwgY29tYmluZSBpdC5cblx0XHRcdFx0Y29uc3QgcHJlZml4ID0gdGhpcy5kYXRhLnNsaWNlKDAsIE1hdGgubWF4KDAsIG1hdGNoLmluZGV4IC0gMSkpO1xuXHRcdFx0XHRjb25zdCBbLCBzZWN0aW9uXSA9IG1hdGNoO1xuXHRcdFx0XHRjb25zdCBwb3N0Zml4ID0gdGhpcy5kYXRhLnNsaWNlKE1hdGgubWF4KDAsIHJlQWVzLmxhc3RJbmRleCkpO1xuXHRcdFx0XHRsZXQgc3RhcnQgPSBcIjxzcGFuIGNsYXNzPSdhdXRvY29tbWVudCc+XCI7XG5cdFx0XHRcdGxldCBlbmQgPSAnPC9zcGFuPic7XG5cdFx0XHRcdGlmIChwcmVmaXgubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHN0YXJ0ID0gYCR7UHJldmlld21ha2VyLmVzV2lraTJIdG1sUGFydChwcmVmaXgpfSAke3N0YXJ0fS0gYDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocG9zdGZpeC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0ZW5kID0gYDogJHtlbmR9JHtQcmV2aWV3bWFrZXIuZXNXaWtpMkh0bWxQYXJ0KHBvc3RmaXgpfWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgdCA9IG5ldyBUaXRsZSgpLmZyb21VUkwodGhpcy5iYXNlVXJsKTtcblx0XHRcdFx0dC5hbmNob3JGcm9tVXRmKHNlY3Rpb24pO1xuXHRcdFx0XHRjb25zdCBzZWN0aW9uTGluayA9IGAke1xuXHRcdFx0XHRcdEluc3RhLmNvbmYucGF0aHMuYXJ0aWNsZXMgKyBwZy5lc2NhcGVRdW90ZXNIVE1MKHQudG9TdHJpbmcodHJ1ZSkpXG5cdFx0XHRcdH0jJHtwZy5lc2NhcGVRdW90ZXNIVE1MKHQuYW5jaG9yKX1gO1xuXHRcdFx0XHRyZXR1cm4gYCR7c3RhcnR9PGEgaHJlZj1cIiR7c2VjdGlvbkxpbmt9XCI+JnJhcnI7PC9hPiAke3BnLmVzY2FwZVF1b3Rlc0hUTUwoc2VjdGlvbil9JHtlbmR9YDtcblx0XHRcdH1cblx0XHRcdC8vIGVsc2UgdGhlcmUncyBubyBzZWN0aW9uIGxpbmssIGh0bWxpZnkgdGhlIHdob2xlIHRoaW5nLlxuXHRcdFx0cmV0dXJuIFByZXZpZXdtYWtlci5lc1dpa2kySHRtbFBhcnQodGhpcy5kYXRhKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogV29ya3MgYXJvdW5kIGxpdmVwcmV2aWV3IGJ1Z3MuXG5cdFx0ICpcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdGZpeEhUTUwoKSB7XG5cdFx0XHRpZiAoIXRoaXMuaHRtbCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRsZXQgcmV0ID0gdGhpcy5odG1sO1xuXHRcdFx0Ly8gZml4IHF1ZXN0aW9uIG1hcmtzIGluIHdpa2kgbGlua3Ncblx0XHRcdC8vIG1heWJlIHRoaXMnbGwgYnJlYWsgc29tZSBzdHVmZiA6LShcblx0XHRcdHJldCA9IHJldC5yZXBsYWNlKG5ldyBSZWdFeHAoYCg8YSBocmVmPVwiJHtwZy53aWtpLmFydGljbGVQYXRofS9bXlwiXSopWz9dKC4qP1wiKWAsICdnJyksICckMSUzRiQyJyk7XG5cdFx0XHRyZXQgPSByZXQucmVwbGFjZShuZXcgUmVnRXhwKGAoPGEgaHJlZj0nJHtwZy53aWtpLmFydGljbGVQYXRofS9bXiddKilbP10oLio/JylgLCAnZycpLCAnJDElM0YkMicpO1xuXHRcdFx0Ly8gRklYTUUgZml4IHVwICUgdG9vXG5cdFx0XHR0aGlzLmh0bWwgPSByZXQ7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEdlbmVyYXRlcyB0aGUgcHJldmlldyBhbmQgZGlzcGxheXMgaXQgaW4gdGhlIGN1cnJlbnQgcG9wdXAuXG5cdFx0ICogRG9lcyBub3RoaW5nIGlmIHRoZSBnZW5lcmF0ZWQgcHJldmlldyBpcyBpbnZhbGlkIG9yIGNvbnNpc3RzIG9mIHdoaXRlc3BhY2Ugb25seS5cblx0XHQgKiBBbHNvIGFjdGl2YXRlcyB3aWtpbGlua3MgaW4gdGhlIHByZXZpZXcgZm9yIHN1YnBvcHVwcyBpZiB0aGUgcG9wdXBTdWJwb3B1cHMgb3B0aW9uIGlzIHRydWUuXG5cdFx0ICovXG5cdFx0c2hvd1ByZXZpZXcoKSB7XG5cdFx0XHR0aGlzLm1ha2VQcmV2aWV3KCk7XG5cdFx0XHRpZiAodHlwZW9mIHRoaXMuaHRtbCAhPT0gdHlwZW9mICcnKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICgvXlxccyokLy50ZXN0KHRoaXMuaHRtbCkpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0c2V0UG9wdXBIVE1MKCc8aHI+JywgJ3BvcHVwUHJlUHJldmlld1NlcCcsIHRoaXMub3duZXIuaWROdW1iZXIpO1xuXHRcdFx0c2V0UG9wdXBUaXBzQW5kSFRNTCh0aGlzLmh0bWwsICdwb3B1cFByZXZpZXcnLCB0aGlzLm93bmVyLmlkTnVtYmVyLCB7XG5cdFx0XHRcdG93bmVyOiB0aGlzLm93bmVyLFxuXHRcdFx0fSk7XG5cdFx0XHRjb25zdCBtb3JlID0gdGhpcy5mdWxsTGVuZ3RoID4gdGhpcy5kYXRhLmxlbmd0aCA/IHRoaXMubW9yZUxpbmsoKSA6ICcnO1xuXHRcdFx0c2V0UG9wdXBIVE1MKG1vcmUsICdwb3B1cFByZXZpZXdNb3JlJywgdGhpcy5vd25lci5pZE51bWJlcik7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0bW9yZUxpbmsoKSB7XG5cdFx0XHRjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHRcdFx0YS5jbGFzc05hbWUgPSAncG9wdXBNb3JlTGluayc7XG5cdFx0XHRhLmlubmVySFRNTCA9IHBvcHVwU3RyaW5nKCdtb3JlLi4uJyk7XG5cdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdGEub25jbGljayA9ICgpID0+IHtcblx0XHRcdFx0c2VsZi5tYXhDaGFyYWN0ZXJzICs9IDIwMDA7XG5cdFx0XHRcdHNlbGYubWF4U2VudGVuY2VzICs9IDIwO1xuXHRcdFx0XHRzZWxmLnNldERhdGEoKTtcblx0XHRcdFx0c2VsZi5zaG93UHJldmlldygpO1xuXHRcdFx0fTtcblx0XHRcdHJldHVybiBhO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHN0cmlwTG9uZ1RlbXBsYXRlcygpIHtcblx0XHRcdC8vIG9wZXJhdGVzIG9uIHRoZSBIVE1MIVxuXHRcdFx0dGhpcy5odG1sID0gdGhpcy5odG1sLnJlcGxhY2UoL14uezAsMTAwMH17e1tefV0qPyg8KHB8YnIpKCBcXC8pPz5cXHMqKXsyLH0oW157fV0qP319KT8vZ2ksICcnKTtcblx0XHRcdHRoaXMuaHRtbCA9IHRoaXMuaHRtbC5zcGxpdCgnXFxuJykuam9pbignICcpOyAvLyB3b3JrYXJvdW5kIGZvciA8cHJlPiB0ZW1wbGF0ZXNcblx0XHRcdHRoaXMuaHRtbCA9IHRoaXMuaHRtbC5yZXBsYWNlKC97e1tefV0qPHByZT5bXn1dKn19L2dpLCAnJyk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0a2lsbE11bHRpbGluZVRlbXBsYXRlcygpIHtcblx0XHRcdHRoaXMua2lsbCgne3t7JywgJ319fScpO1xuXHRcdFx0dGhpcy5raWxsKC9cXHMqe3tbXnt9XSpcXG4vLCAnfX0nLCAne3snKTtcblx0XHR9XG5cdH1cblx0Ly8gRU5ERklMRTogcHJldmlld21ha2VyLmpzXG5cdC8vIFNUQVJURklMRTogcXVlcnlwcmV2aWV3LmpzXG5cdGNvbnN0IGxvYWRBUElQcmV2aWV3ID0gKHF1ZXJ5VHlwZSwgYXJ0aWNsZSwgbmF2cG9wKSA9PiB7XG5cdFx0Y29uc3QgYXJ0ID0gbmV3IFRpdGxlKGFydGljbGUpLnVybFN0cmluZygpO1xuXHRcdGxldCB1cmwgPSBgJHtwZy53aWtpLmFwaXdpa2liYXNlfT9mb3JtYXQ9anNvbiZmb3JtYXR2ZXJzaW9uPTImYWN0aW9uPXF1ZXJ5JmA7XG5cdFx0bGV0IGh0bWxHZW5lcmF0b3IgPSAoKSA9PiAvKiBhLCBkICovIHtcblx0XHRcdHZvaWQgbXcubm90aWZ5KCdpbnZhbGlkIGh0bWwgZ2VuZXJhdG9yJywge3RhZzogJ3BvcHVwcycsIHR5cGU6ICdlcnJvcid9KTtcblx0XHR9O1xuXHRcdGxldCB1c2VybmFtZWFydCA9ICcnO1xuXHRcdHN3aXRjaCAocXVlcnlUeXBlKSB7XG5cdFx0XHRjYXNlICdoaXN0b3J5Jzpcblx0XHRcdFx0dXJsICs9IGB0aXRsZXM9JHthcnR9JnByb3A9cmV2aXNpb25zJnJ2bGltaXQ9JHtnZXRWYWx1ZU9mKCdwb3B1cEhpc3RvcnlQcmV2aWV3TGltaXQnKX1gO1xuXHRcdFx0XHRodG1sR2VuZXJhdG9yID0gQVBJaGlzdG9yeVByZXZpZXdIVE1MO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2NhdGVnb3J5Jzpcblx0XHRcdFx0dXJsICs9IGBsaXN0PWNhdGVnb3J5bWVtYmVycyZjbXRpdGxlPSR7YXJ0fWA7XG5cdFx0XHRcdGh0bWxHZW5lcmF0b3IgPSBBUEljYXRlZ29yeVByZXZpZXdIVE1MO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3VzZXJpbmZvJzoge1xuXHRcdFx0XHRjb25zdCB1c2VybmFtZSA9IG5ldyBUaXRsZShhcnRpY2xlKS51c2VyTmFtZSgpO1xuXHRcdFx0XHR1c2VybmFtZWFydCA9IGVuY29kZVVSSUNvbXBvbmVudCh1c2VybmFtZSk7XG5cdFx0XHRcdHVybCArPSBwZy5yZS5pcFVzZXIudGVzdCh1c2VybmFtZSlcblx0XHRcdFx0XHQ/IGBsaXN0PWJsb2NrcyZia3Byb3A9cmFuZ2V8cmVzdHJpY3Rpb25zJmJraXA9JHt1c2VybmFtZWFydH1gXG5cdFx0XHRcdFx0OiBgbGlzdD11c2Vyc3x1c2VyY29udHJpYnMmdXNwcm9wPWJsb2NraW5mb3xncm91cHN8ZWRpdGNvdW50fHJlZ2lzdHJhdGlvbnxnZW5kZXImdXN1c2Vycz0ke3VzZXJuYW1lYXJ0fSZtZXRhPWdsb2JhbHVzZXJpbmZvJmd1aXByb3A9Z3JvdXBzfHVuYXR0YWNoZWQmZ3VpdXNlcj0ke3VzZXJuYW1lYXJ0fSZ1Y2xpbWl0PTEmdWNwcm9wPXRpbWVzdGFtcCZ1Y3VzZXI9JHt1c2VybmFtZWFydH1gO1xuXHRcdFx0XHRodG1sR2VuZXJhdG9yID0gQVBJdXNlckluZm9QcmV2aWV3SFRNTDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRjYXNlICdjb250cmlicyc6XG5cdFx0XHRcdHVzZXJuYW1lYXJ0ID0gZW5jb2RlVVJJQ29tcG9uZW50KG5ldyBUaXRsZShhcnRpY2xlKS51c2VyTmFtZSgpKTtcblx0XHRcdFx0dXJsICs9IGBsaXN0PXVzZXJjb250cmlicyZ1Y3VzZXI9JHt1c2VybmFtZWFydH0mdWNsaW1pdD0ke2dldFZhbHVlT2YoJ3BvcHVwQ29udHJpYnNQcmV2aWV3TGltaXQnKX1gO1xuXHRcdFx0XHRodG1sR2VuZXJhdG9yID0gQVBJY29udHJpYnNQcmV2aWV3SFRNTDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdpbWFnZXBhZ2VwcmV2aWV3Jzoge1xuXHRcdFx0XHRsZXQgdHJhaWwgPSAnJztcblx0XHRcdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwSW1hZ2VMaW5rcycpKSB7XG5cdFx0XHRcdFx0dHJhaWwgPSBgJmxpc3Q9aW1hZ2V1c2FnZSZpdXRpdGxlPSR7YXJ0fWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0dXJsICs9IGB0aXRsZXM9JHthcnR9JnByb3A9cmV2aXNpb25zfGltYWdlaW5mbyZydnByb3A9Y29udGVudCR7dHJhaWx9YDtcblx0XHRcdFx0aHRtbEdlbmVyYXRvciA9IEFQSWltYWdlcGFnZVByZXZpZXdIVE1MO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGNhc2UgJ2JhY2tsaW5rcyc6XG5cdFx0XHRcdHVybCArPSBgbGlzdD1iYWNrbGlua3MmYmx0aXRsZT0ke2FydH1gO1xuXHRcdFx0XHRodG1sR2VuZXJhdG9yID0gQVBJYmFja2xpbmtzUHJldmlld0hUTUw7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAncmV2aXNpb24nOlxuXHRcdFx0XHR1cmwgKz0gYXJ0aWNsZS5vbGRpZCA/IGByZXZpZHM9JHthcnRpY2xlLm9sZGlkfWAgOiBgdGl0bGVzPSR7YXJ0aWNsZS5yZW1vdmVBbmNob3IoKS51cmxTdHJpbmcoKX1gO1xuXHRcdFx0XHR1cmwgKz1cblx0XHRcdFx0XHQnJnByb3A9cmV2aXNpb25zfHBhZ2Vwcm9wc3xpbmZvfGltYWdlc3xjYXRlZ29yaWVzJnJ2cHJvcD1pZHN8dGltZXN0YW1wfGZsYWdzfGNvbW1lbnR8dXNlcnxjb250ZW50JmNsbGltaXQ9bWF4JmltbGltaXQ9bWF4Jztcblx0XHRcdFx0aHRtbEdlbmVyYXRvciA9IEFQSXJldmlzaW9uUHJldmlld0hUTUw7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRwZW5kaW5nTmF2cG9wVGFzayhuYXZwb3ApO1xuXHRcdGNvbnN0IGNhbGxiYWNrID0gKGQpID0+IHtcblx0XHRcdGxvZygnY2FsbGJhY2sgb2YgQVBJIGZ1bmN0aW9ucyB3YXMgaGl0Jyk7XG5cdFx0XHRpZiAocXVlcnlUeXBlID09PSAndXNlcmluZm8nKSB7XG5cdFx0XHRcdC8vIFdlIG5lZWQgdG8gZG8gYW5vdGhlciBBUEkgcmVxdWVzdFxuXHRcdFx0XHRmZXRjaFVzZXJHcm91cE5hbWVzKGQuZGF0YSkudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0c2hvd0FQSVByZXZpZXcocXVlcnlUeXBlLCBodG1sR2VuZXJhdG9yKGFydGljbGUsIGQsIG5hdnBvcCksIG5hdnBvcC5pZE51bWJlciwgbmF2cG9wLCBkKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHNob3dBUElQcmV2aWV3KHF1ZXJ5VHlwZSwgaHRtbEdlbmVyYXRvcihhcnRpY2xlLCBkLCBuYXZwb3ApLCBuYXZwb3AuaWROdW1iZXIsIG5hdnBvcCwgZCk7XG5cdFx0fTtcblx0XHRjb25zdCBnbyA9ICgpID0+IHtcblx0XHRcdGdldFBhZ2VXaXRoQ2FjaGluZyh1cmwsIGNhbGxiYWNrLCBuYXZwb3ApO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fTtcblx0XHRpZiAobmF2cG9wLnZpc2libGUgfHwgIWdldFZhbHVlT2YoJ3BvcHVwTGF6eURvd25sb2FkcycpKSB7XG5cdFx0XHRnbygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRuYXZwb3AuYWRkSG9vayhnbywgJ3VuaGlkZScsICdiZWZvcmUnLCBgRE9XTkxPQURfJHtxdWVyeVR5cGV9X1FVRVJZX0RBVEFgKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IGxpbmtMaXN0ID0gKGxpc3QpID0+IHtcblx0XHRsaXN0LnNvcnQoKHgsIHkpID0+IHtcblx0XHRcdHJldHVybiB4ID09PSB5ID8gMCA6IHggPCB5ID8gLTEgOiAxO1xuXHRcdH0pO1xuXHRcdGNvbnN0IGJ1ZiA9IFtdO1xuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBsaXN0KSB7XG5cdFx0XHRidWYucHVzaChcblx0XHRcdFx0d2lraUxpbmsoe1xuXHRcdFx0XHRcdGFydGljbGU6IG5ldyBUaXRsZShlbGVtZW50KSxcblx0XHRcdFx0XHR0ZXh0OiBlbGVtZW50LnNwbGl0KCcgJykuam9pbignJm5ic3A7JyksXG5cdFx0XHRcdFx0YWN0aW9uOiAndmlldycsXG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRyZXR1cm4gYnVmLmpvaW4oJywgJyk7XG5cdH07XG5cdGNvbnN0IGdldFRpbWVPZmZzZXQgPSAoKSA9PiB7XG5cdFx0Y29uc3QgdHogPSBtdy51c2VyLm9wdGlvbnMuZ2V0KCd0aW1lY29ycmVjdGlvbicpO1xuXHRcdGlmICh0eiAmJiB0ei5pbmNsdWRlcygnfCcpKSB7XG5cdFx0XHQvLyBOZXcgZm9ybWF0XG5cdFx0XHRyZXR1cm4gTnVtYmVyLnBhcnNlSW50KHR6LnNwbGl0KCd8JylbMV0sIDEwKTtcblx0XHR9XG5cdFx0cmV0dXJuIDA7XG5cdH07XG5cdGNvbnN0IGdldFRpbWVab25lID0gKCkgPT4ge1xuXHRcdGlmICghcGcudXNlci50aW1lWm9uZSkge1xuXHRcdFx0Y29uc3QgdHogPSBtdy51c2VyLm9wdGlvbnMuZ2V0KCd0aW1lY29ycmVjdGlvbicpO1xuXHRcdFx0cGcudXNlci50aW1lWm9uZSA9ICdVVEMnO1xuXHRcdFx0aWYgKHR6KSB7XG5cdFx0XHRcdGNvbnN0IHR6Q29tcG9uZW50cyA9IHR6LnNwbGl0KCd8Jyk7XG5cdFx0XHRcdGlmICh0ekNvbXBvbmVudHMubGVuZ3RoID09PSAzICYmIHR6Q29tcG9uZW50c1swXSA9PT0gJ1pvbmVJbmZvJykge1xuXHRcdFx0XHRcdFssICwgcGcudXNlci50aW1lWm9uZV0gPSB0ekNvbXBvbmVudHM7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZXJybG9nKGBVbmV4cGVjdGVkIHRpbWV6b25lIGluZm9ybWF0aW9uOiAke3R6fWApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBwZy51c2VyLnRpbWVab25lO1xuXHR9O1xuXHQvKipcblx0ICogU2hvdWxkIHdlIHVzZSBhbiBvZmZzZXQgb3IgY2FuIHdlIHVzZSBwcm9wZXIgdGltZXpvbmVzXG5cdCAqL1xuXHRjb25zdCB1c2VUaW1lT2Zmc2V0ID0gKCkgPT4ge1xuXHRcdGlmIChJbnRsLkRhdGVUaW1lRm9ybWF0LnByb3RvdHlwZS5mb3JtYXRUb1BhcnRzID09PSB1bmRlZmluZWQpIHtcblx0XHRcdC8vIElFIDExXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0Y29uc3QgdHogPSBtdy51c2VyLm9wdGlvbnMuZ2V0KCd0aW1lY29ycmVjdGlvbicpO1xuXHRcdGlmICh0eiAmJiAhdHouaW5jbHVkZXMoJ1pvbmVJbmZvfCcpKSB7XG5cdFx0XHQvLyBTeXN0ZW18IERlZmF1bHQgc3lzdGVtIHRpbWUsIGRlZmF1bHQgZm9yIHVzZXJzIHdobyBkaWRuJ3QgY29uZmlndXJlIHRpbWV6b25lXG5cdFx0XHQvLyBPZmZzZXR8IE1hbnVhbCBkZWZpbmVkIG9mZnNldCBieSB1c2VyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXHQvKipcblx0ICogQXJyYXkgb2YgbG9jYWxlcyBmb3IgdGhlIHB1cnBvc2Ugb2YgamF2YXNjcmlwdCBsb2NhbGUgYmFzZWQgZm9ybWF0dGluZ1xuXHQgKiBGaWx0ZXJzIGRvd24gdG8gdGhvc2Ugc3VwcG9ydGVkIGJ5IHRoZSBicm93c2VyLiBFbXB0eSBbXSA9PT0gU3lzdGVtJ3MgZGVmYXVsdCBsb2NhbGVcblx0ICovXG5cdGNvbnN0IGdldExvY2FsZXMgPSAoKSA9PiB7XG5cdFx0aWYgKCFwZy51c2VyLmxvY2FsZXMpIHtcblx0XHRcdGxldCB1c2VyTGFuZ3VhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJykuZ2V0QXR0cmlidXRlKCdsYW5nJyk7IC8vIG1ha2Ugc3VyZSB3ZSBoYXZlIEhUTUwgbG9jYWxlXG5cdFx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBMb2NhbGUnKSkge1xuXHRcdFx0XHR1c2VyTGFuZ3VhZ2UgPSBnZXRWYWx1ZU9mKCdwb3B1cExvY2FsZScpO1xuXHRcdFx0fSBlbHNlIGlmICh1c2VyTGFuZ3VhZ2UgPT09ICdlbicpIHtcblx0XHRcdFx0Ly8gZW4ud3AgdGVuZHMgdG8gdHJlYXQgdGhpcyBhcyBpbnRlcm5hdGlvbmFsIGVuZ2xpc2ggLyB1bnNwZWNpZmllZFxuXHRcdFx0XHQvLyBidXQgd2UgaGF2ZSBtb3JlIHNwZWNpZmljIHNldHRpbmdzIGluIHVzZXIgb3B0aW9uc1xuXHRcdFx0XHR1c2VyTGFuZ3VhZ2UgPSBnZXRNV0RhdGVGb3JtYXQoKSA9PT0gJ21keScgPyAnZW4tVVMnIDogJ2VuLUdCJztcblx0XHRcdH1cblx0XHRcdHBnLnVzZXIubG9jYWxlcyA9IEludGwuRGF0ZVRpbWVGb3JtYXQuc3VwcG9ydGVkTG9jYWxlc09mKFt1c2VyTGFuZ3VhZ2UsIG5hdmlnYXRvci5sYW5ndWFnZV0pO1xuXHRcdH1cblx0XHRyZXR1cm4gcGcudXNlci5sb2NhbGVzO1xuXHR9O1xuXHQvKipcblx0ICogUmV0cmlldmUgY29uZmlndXJlZCBNVyBkYXRlIGZvcm1hdCBmb3IgdGhpcyB1c2VyXG5cdCAqIFRoZXNlIGNhbiBiZVxuXHQgKiBkZWZhdWx0XG5cdCAqIGRteTogdGltZSwgZG15XG5cdCAqIG1keTogdGltZSwgbWR5XG5cdCAqIHltZDogdGltZSwgeW1kXG5cdCAqIGRteXQ6IGRteSwgdGltZVxuXHQgKiBkbXl0czogZG15LCB0aW1lICsgc2Vjb25kc1xuXHQgKiBJU08gODYwMTogWVlZWS1NTS1ERFRoaDptbTpzcyAobG9jYWwgdGltZSlcblx0ICpcblx0ICogVGhpcyBpc24ndCB0b28gdXNlZnVsIGZvciB1cywgYXMgSlMgZG9lc24ndCBoYXZlIGZvcm1hdHRlcnMgdG8gbWF0Y2ggdGhlc2UgcHJpdmF0ZSBzcGVjaWZpZXJzXG5cdCAqL1xuXHRjb25zdCBnZXRNV0RhdGVGb3JtYXQgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIG13LnVzZXIub3B0aW9ucy5nZXQoJ2RhdGUnKTtcblx0fTtcblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBIVE1MIHRhYmxlIHRoYXQncyBzaG93biBpbiB0aGUgaGlzdG9yeSBhbmQgdXNlci1jb250cmlicyBwb3B1cHMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBhcnRpY2xlXG5cdCAqIEBwYXJhbSB7T2JqZWN0W119IGggLSBhIGxpc3Qgb2YgcmV2aXNpb25zLCByZXR1cm5lZCBmcm9tIHRoZSBBUElcblx0ICogQHBhcmFtIHtib29sZWFufSByZWFsbHlDb250cmlicyAtIHRydWUgb25seSBpZiB3ZSdyZSBkaXNwbGF5aW5nIHVzZXIgY29udHJpYnV0aW9uc1xuXHQgKi9cblx0Y29uc3QgZWRpdFByZXZpZXdUYWJsZSA9IChhcnRpY2xlLCBoLCByZWFsbHlDb250cmlicykgPT4ge1xuXHRcdGxldCBodG1sID0gWyc8dGFibGU+J107XG5cdFx0bGV0IGRheTtcblx0XHRsZXQgY3VyYXJ0ID0gYXJ0aWNsZTtcblx0XHRsZXQgcGFnZTtcblx0XHRsZXQgbWFrZUZpcnN0Q29sdW1uTGlua3M7XG5cdFx0aWYgKHJlYWxseUNvbnRyaWJzKSB7XG5cdFx0XHQvLyBXZSdyZSBzaG93aW5nIHVzZXIgY29udHJpYnV0aW9ucywgc28gbWFrZSAoZGlmZiB8IGhpc3QpIGxpbmtzXG5cdFx0XHRtYWtlRmlyc3RDb2x1bW5MaW5rcyA9IChjdXJyZW50UmV2aXNpb24pID0+IHtcblx0XHRcdFx0bGV0IHJlc3VsdCA9ICcoJztcblx0XHRcdFx0cmVzdWx0ICs9XG5cdFx0XHRcdFx0YDxhIGhyZWY9XCIke3BnLndpa2kudGl0bGViYXNlfSR7bmV3IFRpdGxlKGN1cnJlbnRSZXZpc2lvbi50aXRsZSkudXJsU3RyaW5nKCl9JmRpZmY9cHJldmAgK1xuXHRcdFx0XHRcdGAmb2xkaWQ9JHtjdXJyZW50UmV2aXNpb24ucmV2aWR9XCI+JHtwb3B1cFN0cmluZygnZGlmZicpfTwvYT5gO1xuXHRcdFx0XHRyZXN1bHQgKz0gJyZuYnNwO3wmbmJzcDsnO1xuXHRcdFx0XHRyZXN1bHQgKz0gYDxhIGhyZWY9XCIke3BnLndpa2kudGl0bGViYXNlfSR7bmV3IFRpdGxlKFxuXHRcdFx0XHRcdGN1cnJlbnRSZXZpc2lvbi50aXRsZVxuXHRcdFx0XHQpLnVybFN0cmluZygpfSZhY3Rpb249aGlzdG9yeVwiPiR7cG9wdXBTdHJpbmcoJ2hpc3QnKX08L2E+YDtcblx0XHRcdFx0cmVzdWx0ICs9ICcpJztcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH07XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIEl0J3MgYSByZWd1bGFyIGhpc3RvcnkgcGFnZSwgc28gbWFrZSAoY3VyIHwgbGFzdCkgbGlua3Ncblx0XHRcdGNvbnN0IGZpcnN0UmV2aWQgPSBoWzBdLnJldmlkO1xuXHRcdFx0bWFrZUZpcnN0Q29sdW1uTGlua3MgPSAoY3VycmVudFJldmlzaW9uKSA9PiB7XG5cdFx0XHRcdGxldCByZXN1bHQgPSAnKCc7XG5cdFx0XHRcdHJlc3VsdCArPSBgPGEgaHJlZj1cIiR7cGcud2lraS50aXRsZWJhc2V9JHtuZXcgVGl0bGUoY3VyYXJ0KS51cmxTdHJpbmcoKX0mZGlmZj0ke2ZpcnN0UmV2aWR9Jm9sZGlkPSR7XG5cdFx0XHRcdFx0Y3VycmVudFJldmlzaW9uLnJldmlkXG5cdFx0XHRcdH1cIj4ke3BvcHVwU3RyaW5nKCdjdXInKX08L2E+YDtcblx0XHRcdFx0cmVzdWx0ICs9ICcmbmJzcDt8Jm5ic3A7Jztcblx0XHRcdFx0cmVzdWx0ICs9IGA8YSBocmVmPVwiJHtwZy53aWtpLnRpdGxlYmFzZX0ke25ldyBUaXRsZShjdXJhcnQpLnVybFN0cmluZygpfSZkaWZmPXByZXYmb2xkaWQ9JHtcblx0XHRcdFx0XHRjdXJyZW50UmV2aXNpb24ucmV2aWRcblx0XHRcdFx0fVwiPiR7cG9wdXBTdHJpbmcoJ2xhc3QnKX08L2E+YDtcblx0XHRcdFx0cmVzdWx0ICs9ICcpJztcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH07XG5cdFx0fVxuXHRcdGZvciAoY29uc3QgW2ksIGVsZW1lbnRdIG9mIGguZW50cmllcygpKSB7XG5cdFx0XHRpZiAocmVhbGx5Q29udHJpYnMpIHtcblx0XHRcdFx0cGFnZSA9IGVsZW1lbnQudGl0bGU7XG5cdFx0XHRcdGN1cmFydCA9IG5ldyBUaXRsZShwYWdlKTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IG1pbm9yID0gZWxlbWVudC5taW5vciA/ICc8Yj5tIDwvYj4nIDogJyc7XG5cdFx0XHRjb25zdCBlZGl0RGF0ZSA9IG5ldyBEYXRlKGVsZW1lbnQudGltZXN0YW1wKTtcblx0XHRcdGxldCB0aGlzRGF5ID0gZm9ybWF0dGVkRGF0ZShlZGl0RGF0ZSk7XG5cdFx0XHRjb25zdCB0aGlzVGltZSA9IGZvcm1hdHRlZFRpbWUoZWRpdERhdGUpO1xuXHRcdFx0aWYgKHRoaXNEYXkgPT09IGRheSkge1xuXHRcdFx0XHR0aGlzRGF5ID0gJyc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkYXkgPSB0aGlzRGF5O1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXNEYXkpIHtcblx0XHRcdFx0aHRtbC5wdXNoKGA8dHI+PHRkIGNvbHNwYW49Mz48c3BhbiBjbGFzcz1cInBvcHVwX2hpc3RvcnlfZGF0ZVwiPiR7dGhpc0RheX08L3NwYW4+PC90ZD48L3RyPmApO1xuXHRcdFx0fVxuXHRcdFx0aHRtbC5wdXNoKFxuXHRcdFx0XHRgPHRyIGNsYXNzPVwicG9wdXBfaGlzdG9yeV9yb3dfJHtpICUgMiA/ICdvZGQnIDogJ2V2ZW4nfVwiPmAsXG5cdFx0XHRcdGA8dGQ+JHttYWtlRmlyc3RDb2x1bW5MaW5rcyhlbGVtZW50KX08L3RkPmAsXG5cdFx0XHRcdCc8dGQ+JyArXG5cdFx0XHRcdFx0YDxhIGhyZWY9XCIke3BnLndpa2kudGl0bGViYXNlfSR7bmV3IFRpdGxlKGN1cmFydCkudXJsU3RyaW5nKCl9Jm9sZGlkPSR7XG5cdFx0XHRcdFx0XHRlbGVtZW50LnJldmlkXG5cdFx0XHRcdFx0fVwiPiR7dGhpc1RpbWV9PC9hPjwvdGQ+YFxuXHRcdFx0KTtcblx0XHRcdGxldCBjb2wzdXJsID0gJyc7XG5cdFx0XHRsZXQgY29sM3R4dCA9ICcnO1xuXHRcdFx0aWYgKHJlYWxseUNvbnRyaWJzKSB7XG5cdFx0XHRcdGNvbDN1cmwgPSBwZy53aWtpLnRpdGxlYmFzZSArIGN1cmFydC51cmxTdHJpbmcoKTtcblx0XHRcdFx0Y29sM3R4dCA9IHBnLmVzY2FwZVF1b3Rlc0hUTUwocGFnZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCB7dXNlcn0gPSBlbGVtZW50O1xuXHRcdFx0XHRpZiAoZWxlbWVudC51c2VyaGlkZGVuKSB7XG5cdFx0XHRcdFx0Y29sM3VybCA9IGdldFZhbHVlT2YoJ3BvcHVwUmV2RGVsVXJsJyk7XG5cdFx0XHRcdFx0Y29sM3R4dCA9IHBnLmVzY2FwZVF1b3Rlc0hUTUwocG9wdXBTdHJpbmcoJ3JldmRlbCcpKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb2wzdXJsID0gcGcucmUuaXBVc2VyLnRlc3QodXNlcilcblx0XHRcdFx0XHRcdD8gYCR7XG5cdFx0XHRcdFx0XHRcdFx0cGcud2lraS50aXRsZWJhc2UgKyBtdy5jb25maWcuZ2V0KCd3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMnKVtwZy5uc1NwZWNpYWxJZF1cblx0XHRcdFx0XHRcdFx0fTpDb250cmlidXRpb25zJnRhcmdldD0ke25ldyBUaXRsZSh1c2VyKS51cmxTdHJpbmcoKX1gXG5cdFx0XHRcdFx0XHQ6IGAke3BnLndpa2kudGl0bGViYXNlICsgbXcuY29uZmlnLmdldCgnd2dGb3JtYXR0ZWROYW1lc3BhY2VzJylbcGcubnNVc2VySWRdfToke25ldyBUaXRsZShcblx0XHRcdFx0XHRcdFx0XHR1c2VyXG5cdFx0XHRcdFx0XHRcdCkudXJsU3RyaW5nKCl9YDtcblx0XHRcdFx0XHRjb2wzdHh0ID0gcGcuZXNjYXBlUXVvdGVzSFRNTCh1c2VyKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aHRtbC5wdXNoKGA8dGQ+JHtyZWFsbHlDb250cmlicyA/IG1pbm9yIDogJyd9PGEgaHJlZj1cIiR7Y29sM3VybH1cIj4ke2NvbDN0eHR9PC9hPjwvdGQ+YCk7XG5cdFx0XHRsZXQgY29tbWVudCA9ICcnO1xuXHRcdFx0Y29uc3QgYyA9IGVsZW1lbnQuY29tbWVudCB8fCBlbGVtZW50LmNvbnRlbnQ7XG5cdFx0XHRpZiAoYykge1xuXHRcdFx0XHRjb21tZW50ID0gbmV3IFByZXZpZXdtYWtlcihjLCBuZXcgVGl0bGUoY3VyYXJ0KS50b1VybCgpKS5lZGl0U3VtbWFyeVByZXZpZXcoKTtcblx0XHRcdH0gZWxzZSBpZiAoZWxlbWVudC5jb21tZW50aGlkZGVuKSB7XG5cdFx0XHRcdGNvbW1lbnQgPSBwb3B1cFN0cmluZygncmV2ZGVsJyk7XG5cdFx0XHR9XG5cdFx0XHRodG1sLnB1c2goYDx0ZD4ke3JlYWxseUNvbnRyaWJzID8gJycgOiBtaW5vcn0ke2NvbW1lbnR9PC90ZD5gLCAnPC90cj4nKTtcblx0XHRcdGh0bWwgPSBbaHRtbC5qb2luKCcnKV07XG5cdFx0fVxuXHRcdGh0bWwucHVzaCgnPC90YWJsZT4nKTtcblx0XHRyZXR1cm4gaHRtbC5qb2luKCcnKTtcblx0fTtcblx0Y29uc3QgYWRqdXN0RGF0ZSA9IChkLCBvZmZzZXQpID0+IHtcblx0XHQvLyBvZmZzZXQgaXMgaW4gbWludXRlc1xuXHRcdGNvbnN0IG8gPSBvZmZzZXQgKiA2MCAqIDEwMDA7XG5cdFx0cmV0dXJuIG5ldyBEYXRlKCtkICsgbyk7XG5cdH07XG5cdC8qKlxuXHQgKiBUaGlzIHJlbGllcyBvbiB0aGUgRGF0ZSBwYXJzZXIgdW5kZXJzdGFuZGluZyBlbi1VUyBkYXRlcyxcblx0ICogd2hpY2ggaXMgcHJldHR5IHNhZmUgYXNzdW1wdGlvbiwgYnV0IG5vdCBwZXJmZWN0LlxuXHQgKlxuXHQgKiBAcGFyYW0ge0RhdGV9IGRhdGVcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRpbWVab25lXG5cdCAqL1xuXHRjb25zdCBjb252ZXJ0VGltZVpvbmUgPSAoZGF0ZSwgdGltZVpvbmUpID0+IHtcblx0XHRyZXR1cm4gbmV3IERhdGUoZGF0ZS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7dGltZVpvbmV9KSk7XG5cdH07XG5cdGNvbnN0IGZvcm1hdHRlZERhdGVUaW1lID0gKGRhdGUpID0+IHtcblx0XHQvLyBmYWxsYmFjayBmb3IgSUUxMSBhbmQgdW5rbm93biB0aW1lem9uZXNcblx0XHRpZiAodXNlVGltZU9mZnNldCgpKSB7XG5cdFx0XHRyZXR1cm4gYCR7Zm9ybWF0dGVkRGF0ZShkYXRlKX0gJHtmb3JtYXR0ZWRUaW1lKGRhdGUpfWA7XG5cdFx0fVxuXHRcdGlmIChnZXRNV0RhdGVGb3JtYXQoKSA9PT0gJ0lTTyA4NjAxJykge1xuXHRcdFx0Y29uc3QgZDIgPSBjb252ZXJ0VGltZVpvbmUoZGF0ZSwgZ2V0VGltZVpvbmUoKSk7XG5cdFx0XHRyZXR1cm4gYCR7bWFwKHplcm9GaWxsLCBbZDIuZ2V0RnVsbFllYXIoKSwgZDIuZ2V0TW9udGgoKSArIDEsIGQyLmdldERhdGUoKV0pLmpvaW4oJy0nKX1UJHttYXAoemVyb0ZpbGwsIFtcblx0XHRcdFx0ZDIuZ2V0SG91cnMoKSxcblx0XHRcdFx0ZDIuZ2V0TWludXRlcygpLFxuXHRcdFx0XHRkMi5nZXRTZWNvbmRzKCksXG5cdFx0XHRdKS5qb2luKCc6Jyl9YDtcblx0XHR9XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IGdldFZhbHVlT2YoJ3BvcHVwRGF0ZVRpbWVGb3JtYXR0ZXJPcHRpb25zJyk7XG5cdFx0b3B0aW9ucy50aW1lWm9uZSA9IGdldFRpbWVab25lKCk7XG5cdFx0cmV0dXJuIGRhdGUudG9Mb2NhbGVTdHJpbmcoZ2V0TG9jYWxlcygpLCBvcHRpb25zKTtcblx0fTtcblx0Y29uc3QgZm9ybWF0dGVkRGF0ZSA9IChkYXRlKSA9PiB7XG5cdFx0bGV0IGQyO1xuXHRcdC8vIGZhbGxiYWNrIGZvciBJRTExIGFuZCB1bmtub3duIHRpbWV6b25lc1xuXHRcdGlmICh1c2VUaW1lT2Zmc2V0KCkpIHtcblx0XHRcdC8vIHdlIGFkanVzdCB0aGUgVVRDIHRpbWUsIHNvIHdlIHByaW50IHRoZSBhZGp1c3RlZCBVVEMsIGJ1dCBub3QgcmVhbGx5IFVUQyB2YWx1ZXNcblx0XHRcdGQyID0gYWRqdXN0RGF0ZShkYXRlLCBnZXRUaW1lT2Zmc2V0KCkpO1xuXHRcdFx0cmV0dXJuIG1hcCh6ZXJvRmlsbCwgW2QyLmdldFVUQ0Z1bGxZZWFyKCksIGQyLmdldFVUQ01vbnRoKCkgKyAxLCBkMi5nZXRVVENEYXRlKCldKS5qb2luKCctJyk7XG5cdFx0fVxuXHRcdGlmIChnZXRNV0RhdGVGb3JtYXQoKSA9PT0gJ0lTTyA4NjAxJykge1xuXHRcdFx0ZDIgPSBjb252ZXJ0VGltZVpvbmUoZGF0ZSwgZ2V0VGltZVpvbmUoKSk7XG5cdFx0XHRyZXR1cm4gbWFwKHplcm9GaWxsLCBbZDIuZ2V0RnVsbFllYXIoKSwgZDIuZ2V0TW9udGgoKSArIDEsIGQyLmdldERhdGUoKV0pLmpvaW4oJy0nKTtcblx0XHR9XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IGdldFZhbHVlT2YoJ3BvcHVwRGF0ZUZvcm1hdHRlck9wdGlvbnMnKTtcblx0XHRvcHRpb25zLnRpbWVab25lID0gZ2V0VGltZVpvbmUoKTtcblx0XHRyZXR1cm4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoZ2V0TG9jYWxlcygpLCBvcHRpb25zKTtcblx0fTtcblx0Y29uc3QgZm9ybWF0dGVkVGltZSA9IChkYXRlKSA9PiB7XG5cdFx0bGV0IGQyO1xuXHRcdC8vIGZhbGxiYWNrIGZvciBJRTExIGFuZCB1bmtub3duIHRpbWV6b25lc1xuXHRcdGlmICh1c2VUaW1lT2Zmc2V0KCkpIHtcblx0XHRcdC8vIHdlIGFkanVzdCB0aGUgVVRDIHRpbWUsIHNvIHdlIHByaW50IHRoZSBhZGp1c3RlZCBVVEMsIGJ1dCBub3QgcmVhbGx5IFVUQyB2YWx1ZXNcblx0XHRcdGQyID0gYWRqdXN0RGF0ZShkYXRlLCBnZXRUaW1lT2Zmc2V0KCkpO1xuXHRcdFx0cmV0dXJuIG1hcCh6ZXJvRmlsbCwgW2QyLmdldFVUQ0hvdXJzKCksIGQyLmdldFVUQ01pbnV0ZXMoKSwgZDIuZ2V0VVRDU2Vjb25kcygpXSkuam9pbignOicpO1xuXHRcdH1cblx0XHRpZiAoZ2V0TVdEYXRlRm9ybWF0KCkgPT09ICdJU08gODYwMScpIHtcblx0XHRcdGQyID0gY29udmVydFRpbWVab25lKGRhdGUsIGdldFRpbWVab25lKCkpO1xuXHRcdFx0cmV0dXJuIG1hcCh6ZXJvRmlsbCwgW2QyLmdldEhvdXJzKCksIGQyLmdldE1pbnV0ZXMoKSwgZDIuZ2V0U2Vjb25kcygpXSkuam9pbignOicpO1xuXHRcdH1cblx0XHRjb25zdCBvcHRpb25zID0gZ2V0VmFsdWVPZigncG9wdXBUaW1lRm9ybWF0dGVyT3B0aW9ucycpO1xuXHRcdG9wdGlvbnMudGltZVpvbmUgPSBnZXRUaW1lWm9uZSgpO1xuXHRcdHJldHVybiBkYXRlLnRvTG9jYWxlVGltZVN0cmluZyhnZXRMb2NhbGVzKCksIG9wdGlvbnMpO1xuXHR9O1xuXHQvLyBHZXQgdGhlIHByb3BlciBncm91cG5hbWVzIGZvciB0aGUgdGVjaG5pY2FsZ3JvdXBzXG5cdGNvbnN0IGZldGNoVXNlckdyb3VwTmFtZXMgPSAodXNlcmluZm9SZXNwb25zZSkgPT4ge1xuXHRcdGNvbnN0IHF1ZXJ5T2JqID0gZ2V0SnNPYmoodXNlcmluZm9SZXNwb25zZSkucXVlcnk7XG5cdFx0Y29uc3QgdXNlciA9IGFueUNoaWxkKHF1ZXJ5T2JqLnVzZXJzKTtcblx0XHRjb25zdCBtZXNzYWdlcyA9IFtdO1xuXHRcdGlmICh1c2VyLmdyb3Vwcykge1xuXHRcdFx0Zm9yIChjb25zdCBncm91cE5hbWUgb2YgdXNlci5ncm91cHMpIHtcblx0XHRcdFx0aWYgKCFbJyonLCAndXNlcicsICdhdXRvY29uZmlybWVkJ10uaW5jbHVkZXMoZ3JvdXBOYW1lKSkge1xuXHRcdFx0XHRcdG1lc3NhZ2VzLnB1c2goYGdyb3VwLSR7Z3JvdXBOYW1lfS1tZW1iZXJgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAocXVlcnlPYmouZ2xvYmFsdXNlcmluZm8gJiYgcXVlcnlPYmouZ2xvYmFsdXNlcmluZm8uZ3JvdXBzKSB7XG5cdFx0XHRmb3IgKGNvbnN0IGdyb3VwTmFtZSBvZiBxdWVyeU9iai5nbG9iYWx1c2VyaW5mby5ncm91cHMpIHtcblx0XHRcdFx0bWVzc2FnZXMucHVzaChgZ3JvdXAtJHtncm91cE5hbWV9LW1lbWJlcmApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZ2V0TXdBcGkoKS5sb2FkTWVzc2FnZXNJZk1pc3NpbmcobWVzc2FnZXMpO1xuXHR9O1xuXHRjb25zdCBzaG93QVBJUHJldmlldyA9IChxdWVyeVR5cGUsIGh0bWwsIGlkLCBuYXZwb3AsIGRvd25sb2FkKSA9PiB7XG5cdFx0Ly8gREo6IGRvbmVcblx0XHRsZXQgdGFyZ2V0ID0gJ3BvcHVwUHJldmlldyc7XG5cdFx0Y29tcGxldGVkTmF2cG9wVGFzayhuYXZwb3ApO1xuXHRcdHN3aXRjaCAocXVlcnlUeXBlKSB7XG5cdFx0XHRjYXNlICdpbWFnZWxpbmtzJzpcblx0XHRcdGNhc2UgJ2NhdGVnb3J5Jzpcblx0XHRcdFx0dGFyZ2V0ID0gJ3BvcHVwUG9zdFByZXZpZXcnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3VzZXJpbmZvJzpcblx0XHRcdFx0dGFyZ2V0ID0gJ3BvcHVwVXNlckRhdGEnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3JldmlzaW9uJzpcblx0XHRcdFx0aW5zZXJ0UHJldmlldyhkb3dubG9hZCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0c2V0UG9wdXBUaXBzQW5kSFRNTChodG1sLCB0YXJnZXQsIGlkKTtcblx0fTtcblx0Y29uc3QgQVBJcmV2aXNpb25QcmV2aWV3SFRNTCA9IChfYXJ0aWNsZSwgZG93bmxvYWQpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QganNPYmogPSBnZXRKc09iaihkb3dubG9hZC5kYXRhKTtcblx0XHRcdGNvbnN0IHBhZ2UgPSBhbnlDaGlsZChqc09iai5xdWVyeS5wYWdlcyk7XG5cdFx0XHRpZiAocGFnZS5taXNzaW5nKSB7XG5cdFx0XHRcdC8vIFRPRE8gd2UgbmVlZCB0byBmaXggdGhpcyBwcm9wZXIgbGF0ZXIgb25cblx0XHRcdFx0ZG93bmxvYWQub3duZXIgPSBudWxsO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBjb250ZW50ID1cblx0XHRcdFx0cGFnZSAmJiBwYWdlLnJldmlzaW9ucyAmJiBwYWdlLnJldmlzaW9uc1swXS5jb250ZW50bW9kZWwgPT09ICd3aWtpdGV4dCdcblx0XHRcdFx0XHQ/IHBhZ2UucmV2aXNpb25zWzBdLmNvbnRlbnRcblx0XHRcdFx0XHQ6IG51bGw7XG5cdFx0XHRpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdGRvd25sb2FkLmRhdGEgPSBjb250ZW50O1xuXHRcdFx0XHRkb3dubG9hZC5sYXN0TW9kaWZpZWQgPSBuZXcgRGF0ZShwYWdlLnJldmlzaW9uc1swXS50aW1lc3RhbXApO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmV0dXJuICdSZXZpc2lvbiBwcmV2aWV3IGZhaWxlZCA6KCc7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBBUEliYWNrbGlua3NQcmV2aWV3SFRNTCA9IChfYXJ0aWNsZSwgZG93bmxvYWQgLyogLCBuYXZwb3AgKi8pID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QganNPYmogPSBnZXRKc09iaihkb3dubG9hZC5kYXRhKTtcblx0XHRcdGNvbnN0IGxpc3QgPSBqc09iai5xdWVyeS5iYWNrbGlua3M7XG5cdFx0XHRsZXQgaHRtbCA9IFtdO1xuXHRcdFx0aWYgKCFsaXN0KSB7XG5cdFx0XHRcdHJldHVybiBwb3B1cFN0cmluZygnTm8gYmFja2xpbmtzIGZvdW5kJyk7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgbGlzdCkge1xuXHRcdFx0XHRjb25zdCB0ID0gbmV3IFRpdGxlKGVsZW1lbnQudGl0bGUpO1xuXHRcdFx0XHRodG1sLnB1c2goYDxhIGhyZWY9XCIke3BnLndpa2kudGl0bGViYXNlfSR7dC51cmxTdHJpbmcoKX1cIj4ke3QudG9TdHJpbmcoKS5lbnRpZnkoKX08L2E+YCk7XG5cdFx0XHR9XG5cdFx0XHRodG1sID0gaHRtbC5qb2luKCcsICcpO1xuXHRcdFx0aWYgKGpzT2JqLmNvbnRpbnVlICYmIGpzT2JqLmNvbnRpbnVlLmJsY29udGludWUpIHtcblx0XHRcdFx0aHRtbCArPSBwb3B1cFN0cmluZygnIGFuZCBtb3JlJyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gaHRtbDtcblx0XHR9IGNhdGNoIHtcblx0XHRcdHJldHVybiAnYmFja2xpbmtzUHJldmlld0hUTUwgd2VudCB3b25reSc7XG5cdFx0fVxuXHR9O1xuXHRwZy5mbi5BUElzaGFyZWRJbWFnZVBhZ2VQcmV2aWV3SFRNTCA9IChvYmopID0+IHtcblx0XHRsb2coJ0FQSXNoYXJlZEltYWdlUGFnZVByZXZpZXdIVE1MJyk7XG5cdFx0Y29uc3QgcG9wdXBpZCA9IG9iai5yZXF1ZXN0aWQ7XG5cdFx0aWYgKG9iai5xdWVyeSAmJiBvYmoucXVlcnkucGFnZXMpIHtcblx0XHRcdGNvbnN0IHBhZ2UgPSBhbnlDaGlsZChvYmoucXVlcnkucGFnZXMpO1xuXHRcdFx0Y29uc3QgY29udGVudCA9XG5cdFx0XHRcdHBhZ2UgJiYgcGFnZS5yZXZpc2lvbnMgJiYgcGFnZS5yZXZpc2lvbnNbMF0uY29udGVudG1vZGVsID09PSAnd2lraXRleHQnXG5cdFx0XHRcdFx0PyBwYWdlLnJldmlzaW9uc1swXS5jb250ZW50XG5cdFx0XHRcdFx0OiBudWxsO1xuXHRcdFx0aWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJyAmJiBwZyAmJiBwZy5jdXJyZW50ICYmIHBnLmN1cnJlbnQubGluayAmJiBwZy5jdXJyZW50LmxpbmsubmF2cG9wdXApIHtcblx0XHRcdFx0LyogTm90IGVudGlyZWx5IHNhZmUsIGJ1dCB0aGUgYmVzdCB3ZSBjYW4gZG8gKi9cblx0XHRcdFx0Y29uc3QgcCA9IG5ldyBQcmV2aWV3bWFrZXIoY29udGVudCwgcGcuY3VycmVudC5saW5rLm5hdnBvcHVwLmFydGljbGUsIHBnLmN1cnJlbnQubGluay5uYXZwb3B1cCk7XG5cdFx0XHRcdHAubWFrZVByZXZpZXcoKTtcblx0XHRcdFx0c2V0UG9wdXBIVE1MKHAuaHRtbCwgJ3BvcHVwU2Vjb25kUHJldmlldycsIHBvcHVwaWQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0Y29uc3QgQVBJaW1hZ2VwYWdlUHJldmlld0hUTUwgPSAoYXJ0aWNsZSwgZG93bmxvYWQsIG5hdnBvcCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBqc09iaiA9IGdldEpzT2JqKGRvd25sb2FkLmRhdGEpO1xuXHRcdFx0Y29uc3QgcGFnZSA9IGFueUNoaWxkKGpzT2JqLnF1ZXJ5LnBhZ2VzKTtcblx0XHRcdGNvbnN0IGNvbnRlbnQgPVxuXHRcdFx0XHRwYWdlICYmIHBhZ2UucmV2aXNpb25zICYmIHBhZ2UucmV2aXNpb25zWzBdLmNvbnRlbnRtb2RlbCA9PT0gJ3dpa2l0ZXh0J1xuXHRcdFx0XHRcdD8gcGFnZS5yZXZpc2lvbnNbMF0uY29udGVudFxuXHRcdFx0XHRcdDogbnVsbDtcblx0XHRcdGxldCByZXQgPSAnJztcblx0XHRcdGxldCBhbHQgPSAnJztcblx0XHRcdHRyeSB7XG5cdFx0XHRcdFt7YWx0fV0gPSBuYXZwb3AucGFyZW50QW5jaG9yLmNoaWxkTm9kZXM7XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0LyogZW1wdHkgKi9cblx0XHRcdH1cblx0XHRcdGlmIChhbHQpIHtcblx0XHRcdFx0cmV0ID0gYCR7cmV0fTxocj48Yj4ke3BvcHVwU3RyaW5nKCdBbHQgdGV4dDonKX08L2I+ICR7cGcuZXNjYXBlUXVvdGVzSFRNTChhbHQpfWA7XG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdGNvbnN0IHAgPSBwcmVwUHJldmlld21ha2VyKGNvbnRlbnQsIGFydGljbGUsIG5hdnBvcCk7XG5cdFx0XHRcdHAubWFrZVByZXZpZXcoKTtcblx0XHRcdFx0aWYgKHAuaHRtbCkge1xuXHRcdFx0XHRcdHJldCArPSBgPGhyPiR7cC5odG1sfWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwU3VtbWFyeURhdGEnKSkge1xuXHRcdFx0XHRcdGNvbnN0IGluZm8gPSBnZXRQYWdlSW5mbyhjb250ZW50LCBkb3dubG9hZCk7XG5cdFx0XHRcdFx0bG9nKGluZm8pO1xuXHRcdFx0XHRcdHNldFBvcHVwVHJhaWxlcihpbmZvLCBuYXZwb3AuaWROdW1iZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAocGFnZSAmJiBwYWdlLmltYWdlcmVwb3NpdG9yeSA9PT0gJ3NoYXJlZCcpIHtcblx0XHRcdFx0Y29uc3QgYXJ0ID0gbmV3IFRpdGxlKGFydGljbGUpO1xuXHRcdFx0XHRjb25zdCBlbmNhcnQgPSBlbmNvZGVVUklDb21wb25lbnQoYEZpbGU6JHthcnQuc3RyaXBOYW1lc3BhY2UoKX1gKTtcblx0XHRcdFx0Y29uc3Qgc2hhcmVkX3VybCA9XG5cdFx0XHRcdFx0YCR7cGcud2lraS5hcGljb21tb25zYmFzZX0/Zm9ybWF0PWpzb24mZm9ybWF0dmVyc2lvbj0yYCArXG5cdFx0XHRcdFx0JyZjYWxsYmFjaz1wZy5mbi5BUElzaGFyZWRJbWFnZVBhZ2VQcmV2aWV3SFRNTCcgK1xuXHRcdFx0XHRcdGAmcmVxdWVzdGlkPSR7bmF2cG9wLmlkTnVtYmVyfSZhY3Rpb249cXVlcnkmcHJvcD1yZXZpc2lvbnMmcnZwcm9wPWNvbnRlbnQmdGl0bGVzPSR7ZW5jYXJ0fWA7XG5cdFx0XHRcdHJldCA9IGAke3JldH08aHI+JHtwb3B1cFN0cmluZygnSW1hZ2UgZnJvbSBDb21tb25zJyl9OiA8YSBocmVmPVwiJHtcblx0XHRcdFx0XHRwZy53aWtpLmNvbW1vbnNiYXNlXG5cdFx0XHRcdH0/dGl0bGU9JHtlbmNhcnR9XCI+JHtwb3B1cFN0cmluZygnRGVzY3JpcHRpb24gcGFnZScpfTwvYT5gO1xuXHRcdFx0XHRtdy5sb2FkZXIubG9hZChzaGFyZWRfdXJsKTtcblx0XHRcdH1cblx0XHRcdHNob3dBUElQcmV2aWV3KCdpbWFnZWxpbmtzJywgQVBJaW1hZ2VsaW5rc1ByZXZpZXdIVE1MKGFydGljbGUsIGRvd25sb2FkKSwgbmF2cG9wLmlkTnVtYmVyLCBkb3dubG9hZCk7XG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmV0dXJuICdBUEkgaW1hZ2VwYWdlIHByZXZpZXcgZmFpbGVkIDooJztcblx0XHR9XG5cdH07XG5cdGNvbnN0IEFQSWltYWdlbGlua3NQcmV2aWV3SFRNTCA9IChfYXJ0aWNsZSwgZG93bmxvYWQpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QganNvYmogPSBnZXRKc09iaihkb3dubG9hZC5kYXRhKTtcblx0XHRcdGNvbnN0IGxpc3QgPSBqc29iai5xdWVyeS5pbWFnZXVzYWdlO1xuXHRcdFx0aWYgKGxpc3QpIHtcblx0XHRcdFx0Y29uc3QgcmV0ID0gW107XG5cdFx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBsaXN0KSB7XG5cdFx0XHRcdFx0cmV0LnB1c2goZWxlbWVudC50aXRsZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHJldC5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRyZXR1cm4gcG9wdXBTdHJpbmcoJ05vIGltYWdlIGxpbmtzIGZvdW5kJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGA8aDI+JHtwb3B1cFN0cmluZygnRmlsZSBsaW5rcycpfTwvaDI+JHtsaW5rTGlzdChyZXQpfWA7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcG9wdXBTdHJpbmcoJ05vIGltYWdlIGxpbmtzIGZvdW5kJyk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRyZXR1cm4gJ0ltYWdlIGxpbmtzIHByZXZpZXcgZ2VuZXJhdGlvbiBmYWlsZWQgOignO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgQVBJY2F0ZWdvcnlQcmV2aWV3SFRNTCA9IChfYXJ0aWNsZSwgZG93bmxvYWQpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QganNvYmogPSBnZXRKc09iaihkb3dubG9hZC5kYXRhKTtcblx0XHRcdGNvbnN0IGxpc3QgPSBqc29iai5xdWVyeS5jYXRlZ29yeW1lbWJlcnM7XG5cdFx0XHRsZXQgcmV0ID0gW107XG5cdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgbGlzdCkge1xuXHRcdFx0XHRyZXQucHVzaChlbGVtZW50LnRpdGxlKTtcblx0XHRcdH1cblx0XHRcdGlmIChyZXQubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiBwb3B1cFN0cmluZygnRW1wdHkgY2F0ZWdvcnknKTtcblx0XHRcdH1cblx0XHRcdHJldCA9IGA8aDI+JHt0cHJpbnRmKCdDYXRlZ29yeSBtZW1iZXJzICglcyBzaG93biknLCBbcmV0Lmxlbmd0aF0pfTwvaDI+JHtsaW5rTGlzdChyZXQpfWA7XG5cdFx0XHRpZiAoanNvYmouY29udGludWUgJiYganNvYmouY29udGludWUuY21jb250aW51ZSkge1xuXHRcdFx0XHRyZXQgKz0gcG9wdXBTdHJpbmcoJyBhbmQgbW9yZScpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJldDtcblx0XHR9IGNhdGNoIHtcblx0XHRcdHJldHVybiAnQ2F0ZWdvcnkgcHJldmlldyBmYWlsZWQgOignO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgQVBJdXNlckluZm9QcmV2aWV3SFRNTCA9IChfYXJ0aWNsZSwgZG93bmxvYWQpID0+IHtcblx0XHRsZXQgcmV0ID0gW107XG5cdFx0bGV0IHF1ZXJ5b2JqID0ge307XG5cdFx0dHJ5IHtcblx0XHRcdHF1ZXJ5b2JqID0gZ2V0SnNPYmooZG93bmxvYWQuZGF0YSkucXVlcnk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRyZXR1cm4gJ1VzZXJpbmZvIHByZXZpZXcgZmFpbGVkIDooJztcblx0XHR9XG5cdFx0Y29uc3QgdXNlciA9IGFueUNoaWxkKHF1ZXJ5b2JqLnVzZXJzKTtcblx0XHRpZiAodXNlcikge1xuXHRcdFx0Y29uc3Qge2dsb2JhbHVzZXJpbmZvfSA9IHF1ZXJ5b2JqO1xuXHRcdFx0aWYgKHVzZXIuaW52YWxpZCA9PT0gJycpIHtcblx0XHRcdFx0cmV0LnB1c2gocG9wdXBTdHJpbmcoJ0ludmFsaWQgdXNlcicpKTtcblx0XHRcdH0gZWxzZSBpZiAodXNlci5taXNzaW5nID09PSAnJykge1xuXHRcdFx0XHRyZXQucHVzaChwb3B1cFN0cmluZygnTm90IGEgcmVnaXN0ZXJlZCB1c2VybmFtZScpKTtcblx0XHRcdH1cblx0XHRcdGlmICh1c2VyLmJsb2NrZWRieSkge1xuXHRcdFx0XHRpZiAodXNlci5ibG9ja3BhcnRpYWwpIHtcblx0XHRcdFx0XHRyZXQucHVzaChgPGI+JHtwb3B1cFN0cmluZygnSGFzIGJsb2NrcycpfTwvYj5gKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXQucHVzaChgPGI+JHtwb3B1cFN0cmluZygnQkxPQ0tFRCcpfTwvYj5gKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGdsb2JhbHVzZXJpbmZvICYmICgnbG9ja2VkJyBpbiBnbG9iYWx1c2VyaW5mbyB8fCAnaGlkZGVuJyBpbiBnbG9iYWx1c2VyaW5mbykpIHtcblx0XHRcdFx0bGV0IGxvY2tlZFN1bEFjY291bnRJc0F0dGFjaGVkVG9UaGlzID0gdHJ1ZTtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGdsb2JhbHVzZXJpbmZvLnVuYXR0YWNoZWQgJiYgaSA8IGdsb2JhbHVzZXJpbmZvLnVuYXR0YWNoZWQubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoZ2xvYmFsdXNlcmluZm8udW5hdHRhY2hlZFtpXS53aWtpID09PSBtdy5jb25maWcuZ2V0KCd3Z0RCbmFtZScpKSB7XG5cdFx0XHRcdFx0XHRsb2NrZWRTdWxBY2NvdW50SXNBdHRhY2hlZFRvVGhpcyA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChsb2NrZWRTdWxBY2NvdW50SXNBdHRhY2hlZFRvVGhpcykge1xuXHRcdFx0XHRcdGlmICgnbG9ja2VkJyBpbiBnbG9iYWx1c2VyaW5mbykge1xuXHRcdFx0XHRcdFx0cmV0LnB1c2goYDxiPjxpPiR7cG9wdXBTdHJpbmcoJ0xPQ0tFRCcpfTwvaT48L2I+YCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICgnaGlkZGVuJyBpbiBnbG9iYWx1c2VyaW5mbykge1xuXHRcdFx0XHRcdFx0cmV0LnB1c2goYDxiPjxpPiR7cG9wdXBTdHJpbmcoJ0hJRERFTicpfTwvaT48L2I+YCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBTaG93R2VuZGVyJykgJiYgdXNlci5nZW5kZXIpIHtcblx0XHRcdFx0c3dpdGNoICh1c2VyLmdlbmRlcikge1xuXHRcdFx0XHRcdGNhc2UgJ21hbGUnOlxuXHRcdFx0XHRcdFx0cmV0LnB1c2goYCR7cG9wdXBTdHJpbmcoJ2hlL2hpbScpfSDCtyBgKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ2ZlbWFsZSc6XG5cdFx0XHRcdFx0XHRyZXQucHVzaChgJHtwb3B1cFN0cmluZygnc2hlL2hlcicpfSDCtyBgKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAodXNlci5ncm91cHMpIHtcblx0XHRcdFx0Zm9yIChjb25zdCBncm91cE5hbWUgb2YgdXNlci5ncm91cHMpIHtcblx0XHRcdFx0XHRpZiAoIVsnKicsICd1c2VyJywgJ2F1dG9jb25maXJtZWQnXS5pbmNsdWRlcyhncm91cE5hbWUpKSB7XG5cdFx0XHRcdFx0XHQvLyBNZXNzYWdlcyB0aGF0IGNhbiBiZSB1c2VkIGhlcmU6XG5cdFx0XHRcdFx0XHQvLyAqIHNlZSBbW1NwZWNpYWw6UHJlZml4SW5kZXgvTWVkaWFXaWtpOkdyb3VwLV1dXG5cdFx0XHRcdFx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0XHRcdFx0XHRyZXQucHVzaChwZy5lc2NhcGVRdW90ZXNIVE1MKG13Lm1lc3NhZ2UoYGdyb3VwLSR7Z3JvdXBOYW1lfS1tZW1iZXJgLCB1c2VyLmdlbmRlcikudGV4dCgpKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZ2xvYmFsdXNlcmluZm8gJiYgZ2xvYmFsdXNlcmluZm8uZ3JvdXBzKSB7XG5cdFx0XHRcdGZvciAoY29uc3QgZ3JvdXBOYW1lIG9mIGdsb2JhbHVzZXJpbmZvLmdyb3Vwcykge1xuXHRcdFx0XHRcdHJldC5wdXNoKFxuXHRcdFx0XHRcdFx0Ly8gTWVzc2FnZXMgdGhhdCBjYW4gYmUgdXNlZCBoZXJlOlxuXHRcdFx0XHRcdFx0Ly8gKiBzZWUgW1tTcGVjaWFsOlByZWZpeEluZGV4L01lZGlhV2lraTpHcm91cC1dXVxuXHRcdFx0XHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0XHRcdFx0YDxpPiR7cGcuZXNjYXBlUXVvdGVzSFRNTChtdy5tZXNzYWdlKGBncm91cC0ke2dyb3VwTmFtZX0tbWVtYmVyYCwgdXNlci5nZW5kZXIpLnRleHQoKSl9PC9pPmBcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAodXNlci5yZWdpc3RyYXRpb24pIHtcblx0XHRcdFx0cmV0LnB1c2goXG5cdFx0XHRcdFx0cGcuZXNjYXBlUXVvdGVzSFRNTChcblx0XHRcdFx0XHRcdCh1c2VyLmVkaXRjb3VudCA/PyAnMCcpICtcblx0XHRcdFx0XHRcdFx0cG9wdXBTdHJpbmcoJyBlZGl0cyBzaW5jZTogJykgK1xuXHRcdFx0XHRcdFx0XHQodXNlci5yZWdpc3RyYXRpb24gPyBmb3JtYXR0ZWREYXRlKG5ldyBEYXRlKHVzZXIucmVnaXN0cmF0aW9uKSkgOiAnJylcblx0XHRcdFx0XHQpXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChxdWVyeW9iai51c2VyY29udHJpYnMgJiYgcXVlcnlvYmoudXNlcmNvbnRyaWJzLmxlbmd0aCA+IDApIHtcblx0XHRcdHJldC5wdXNoKHBvcHVwU3RyaW5nKCdsYXN0IGVkaXQgb24gJykgKyBmb3JtYXR0ZWREYXRlKG5ldyBEYXRlKHF1ZXJ5b2JqLnVzZXJjb250cmlic1swXS50aW1lc3RhbXApKSk7XG5cdFx0fVxuXHRcdGlmIChxdWVyeW9iai5ibG9ja3MpIHtcblx0XHRcdHJldC5wdXNoKHBvcHVwU3RyaW5nKCdJUCB1c2VyJykpOyAvLyB3ZSBvbmx5IHJlcXVlc3QgbGlzdD1ibG9ja3MgZm9yIElQc1xuXHRcdFx0Zm9yIChsZXQgbCA9IDA7IGwgPCBxdWVyeW9iai5ibG9ja3MubGVuZ3RoOyBsKyspIHtcblx0XHRcdFx0bGV0IHJic3RyID0gcXVlcnlvYmouYmxvY2tzW2xdLnJhbmdlc3RhcnQgPT09IHF1ZXJ5b2JqLmJsb2Nrc1tsXS5yYW5nZWVuZCA/ICdCTE9DSycgOiAnUkFOR0VCTE9DSyc7XG5cdFx0XHRcdHJic3RyID0gQXJyYXkuaXNBcnJheShxdWVyeW9iai5ibG9ja3NbbF0ucmVzdHJpY3Rpb25zKSA/IGAke3Jic3RyfUVEYCA6IGBIYXMgJHtyYnN0ci50b0xvd2VyQ2FzZSgpfXNgO1xuXHRcdFx0XHRyZXQucHVzaChgPGI+JHtwb3B1cFN0cmluZyhyYnN0cil9PC9iPmApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBpZiBhbnkgZWxlbWVudCBvZiByZXQgZW5kcyB3aXRoICcgwrcgJywgbWVyZ2UgaXQgd2l0aCB0aGUgbmV4dCBlbGVtZW50IHRvIGF2b2lkXG5cdFx0Ly8gdGhlIC5qb2luKCcsICcpIGNhbGwgaW5zZXJ0aW5nIGEgY29tbWEgYWZ0ZXIgaXRcblx0XHRmb3IgKGxldCBtID0gMDsgbSA8IHJldC5sZW5ndGggLSAxOyBtKyspIHtcblx0XHRcdGlmIChyZXRbbV0ubGVuZ3RoID4gMyAmJiByZXRbbV0uc2xpY2UoTWF0aC5tYXgoMCwgcmV0W21dLmxlbmd0aCAtIDMpKSA9PT0gJyDCtyAnKSB7XG5cdFx0XHRcdHJldFttXSArPSByZXRbbSArIDFdO1xuXHRcdFx0XHRyZXQuc3BsaWNlKG0gKyAxLCAxKTsgLy8gZGVsZXRlIGVsZW1lbnQgYXQgaW5kZXggbSsxXG5cdFx0XHRcdG0tLTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0ID0gYDxocj4ke3JldC5qb2luKCcsICcpfWA7XG5cdFx0cmV0dXJuIHJldDtcblx0fTtcblx0Y29uc3QgQVBJY29udHJpYnNQcmV2aWV3SFRNTCA9IChhcnRpY2xlLCBkb3dubG9hZCwgbmF2cG9wKSA9PiB7XG5cdFx0cmV0dXJuIEFQSWhpc3RvcnlQcmV2aWV3SFRNTChhcnRpY2xlLCBkb3dubG9hZCwgbmF2cG9wLCB0cnVlKTtcblx0fTtcblx0Y29uc3QgQVBJaGlzdG9yeVByZXZpZXdIVE1MID0gKGFydGljbGUsIGRvd25sb2FkLCBfbmF2cG9wLCByZWFsbHlDb250cmlicykgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBqc29iaiA9IGdldEpzT2JqKGRvd25sb2FkLmRhdGEpO1xuXHRcdFx0bGV0IGVkaXRzID0gW107XG5cdFx0XHRlZGl0cyA9IHJlYWxseUNvbnRyaWJzID8ganNvYmoucXVlcnkudXNlcmNvbnRyaWJzIDogYW55Q2hpbGQoanNvYmoucXVlcnkucGFnZXMpLnJldmlzaW9ucztcblx0XHRcdGNvbnN0IHJldCA9IGVkaXRQcmV2aWV3VGFibGUoYXJ0aWNsZSwgZWRpdHMsIHJlYWxseUNvbnRyaWJzKTtcblx0XHRcdHJldHVybiByZXQ7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRyZXR1cm4gJ0hpc3RvcnkgcHJldmlldyBmYWlsZWQgOi0oJztcblx0XHR9XG5cdH07XG5cdC8vIEVOREZJTEU6IHF1ZXJ5cHJldmlldy5qc1xuXHQvLyBTVEFSVEZJTEU6IGRlYnVnLmpzXG5cdC8vIERlYnVnZ2luZyBmdW5jdGlvbnNcblx0Y29uc3Qgc2V0dXBEZWJ1Z2dpbmcgPSAoKSA9PiB7XG5cdFx0aWYgKHdpbmRvdy5wb3B1cERlYnVnKSB7XG5cdFx0XHQvLyBwb3B1cERlYnVnIGlzIHNldCBmcm9tIC52ZXJzaW9uXG5cdFx0XHR3aW5kb3cubG9nID0gKHgpID0+IHtcblx0XHRcdFx0Ly8gaWYgKGcgTXNnICE9PSAnJykgeyBnTXNnICs9ICdcXG4nOyBnTXNnKz10aW1lKCkgKyAnICcgKyB4OyB9XG5cdFx0XHRcdGNvbnNvbGUubG9nKHgpO1xuXHRcdFx0fTtcblx0XHRcdHdpbmRvdy5lcnJsb2cgPSAoeCkgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKGBbUG9wdXBzXSAke3h9YCk7XG5cdFx0XHR9O1xuXHRcdFx0bG9nKCdJbml0aWFsaXppbmcgbG9nZ2VyJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdpbmRvdy5sb2cgPSAoKSA9PiB7fTtcblx0XHRcdHdpbmRvdy5lcnJsb2cgPSAoKSA9PiB7fTtcblx0XHR9XG5cdH07XG5cdC8vIEVOREZJTEU6IGRlYnVnLmpzXG5cdC8vIFNUQVJURklMRTogaW1hZ2VzLmpzXG5cdC8vIGxvYWQgaW1hZ2Ugb2YgdHlwZSBUaXRsZS5cblx0Y29uc3QgbG9hZEltYWdlID0gKGltYWdlLCBuYXZwb3ApID0+IHtcblx0XHRpZiAodHlwZW9mIGltYWdlLnN0cmlwTmFtZXNwYWNlICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHR2b2lkIG13Lm5vdGlmeSgnbG9hZEltYWdlcyBiYWQnLCB7dGFnOiAncG9wdXBzJywgdHlwZTogJ2Vycm9yJ30pO1xuXHRcdH1cblx0XHQvLyBBUEkgY2FsbCB0byByZXRyaWV2ZSBpbWFnZSBpbmZvLlxuXHRcdGlmICghZ2V0VmFsdWVPZigncG9wdXBJbWFnZXMnKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoIWlzVmFsaWRJbWFnZU5hbWUoaW1hZ2UudG9TdHJpbmcoKSkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0Y29uc3QgYXJ0ID0gaW1hZ2UudXJsU3RyaW5nKCk7XG5cdFx0bGV0IHVybCA9IGAke3BnLndpa2kuYXBpd2lraWJhc2V9P2Zvcm1hdD1qc29uJmZvcm1hdHZlcnNpb249MiZhY3Rpb249cXVlcnlgO1xuXHRcdHVybCArPSBgJnByb3A9aW1hZ2VpbmZvJmlpcHJvcD11cmx8bWltZSZpaXVybHdpZHRoPSR7Z2V0VmFsdWVPZigncG9wdXBJbWFnZVNpemVMYXJnZScpfWA7XG5cdFx0dXJsICs9IGAmdGl0bGVzPSR7YXJ0fWA7XG5cdFx0cGVuZGluZ05hdnBvcFRhc2sobmF2cG9wKTtcblx0XHRjb25zdCBjYWxsYmFjayA9IChkKSA9PiB7XG5cdFx0XHRwb3B1cHNJbnNlcnRJbWFnZShuYXZwb3AuaWROdW1iZXIsIG5hdnBvcCwgZCk7XG5cdFx0fTtcblx0XHRjb25zdCBnbyA9ICgpID0+IHtcblx0XHRcdGdldFBhZ2VXaXRoQ2FjaGluZyh1cmwsIGNhbGxiYWNrLCBuYXZwb3ApO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fTtcblx0XHRpZiAobmF2cG9wLnZpc2libGUgfHwgIWdldFZhbHVlT2YoJ3BvcHVwTGF6eURvd25sb2FkcycpKSB7XG5cdFx0XHRnbygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRuYXZwb3AuYWRkSG9vayhnbywgJ3VuaGlkZScsICdhZnRlcicsICdET1dOTE9BRF9JTUFHRV9RVUVSWV9EQVRBJyk7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBwb3B1cHNJbnNlcnRJbWFnZSA9IChpZCwgX25hdnBvcCwgZG93bmxvYWQpID0+IHtcblx0XHRsb2coJ3BvcHVwc0luc2VydEltYWdlJyk7XG5cdFx0bGV0IGltYWdlaW5mbztcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QganNPYmogPSBnZXRKc09iaihkb3dubG9hZC5kYXRhKTtcblx0XHRcdGNvbnN0IGltYWdlcGFnZSA9IGFueUNoaWxkKGpzT2JqLnF1ZXJ5LnBhZ2VzKTtcblx0XHRcdGlmIChpbWFnZXBhZ2UuaW1hZ2VpbmZvID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0W2ltYWdlaW5mb10gPSBpbWFnZXBhZ2UuaW1hZ2VpbmZvO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0bG9nKCdwb3B1cHNJbnNlcnRJbWFnZSBmYWlsZWQgOignKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgcG9wdXBJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwb3B1cEltZyR7aWR9YCk7XG5cdFx0aWYgKCFwb3B1cEltYWdlKSB7XG5cdFx0XHRsb2coJ2NvdWxkIG5vdCBmaW5kIGluc2VydGlvbiBwb2ludCBmb3IgaW1hZ2UnKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0cG9wdXBJbWFnZS53aWR0aCA9IGdldFZhbHVlT2YoJ3BvcHVwSW1hZ2VTaXplJyk7XG5cdFx0cG9wdXBJbWFnZS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XG5cdFx0Ly8gU2V0IHRoZSBzb3VyY2UgZm9yIHRoZSBpbWFnZS5cblx0XHRpZiAoaW1hZ2VpbmZvLnRodW1idXJsKSB7XG5cdFx0XHRwb3B1cEltYWdlLnNyYyA9IGltYWdlaW5mby50aHVtYnVybDtcblx0XHR9IGVsc2UgaWYgKGltYWdlaW5mby5taW1lLmluZGV4T2YoJ2ltYWdlJykgPT09IDApIHtcblx0XHRcdHBvcHVwSW1hZ2Uuc3JjID0gaW1hZ2VpbmZvLnVybDtcblx0XHRcdGxvZygnYSB0aHVtYiBjb3VsZCBub3QgYmUgZm91bmQsIHVzaW5nIG9yaWdpbmFsIGltYWdlJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxvZyhcImZ1bGxzaXplIGltYWdldGh1bWIsIGJ1dCBub3Qgc3VyZSBpZiBpdCdzIGFuIGltYWdlXCIpO1xuXHRcdH1cblx0XHRjb25zdCBhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3BvcHVwSW1hZ2VMaW5rJHtpZH1gKTtcblx0XHRpZiAoYSA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdC8vIERldGVybWluZSB0aGUgYWN0aW9uIG9mIHRoZSBzdXJyb3VkaW5nIGltYWdlbGluay5cblx0XHRzd2l0Y2ggKGdldFZhbHVlT2YoJ3BvcHVwVGh1bWJBY3Rpb24nKSkge1xuXHRcdFx0Y2FzZSAnaW1hZ2VwYWdlJzpcblx0XHRcdFx0aWYgKHBnLmN1cnJlbnQuYXJ0aWNsZS5uYW1lc3BhY2VJZCgpICE9PSBwZy5uc0ltYWdlSWQpIHtcblx0XHRcdFx0XHRhLmhyZWYgPSBpbWFnZWluZm8uZGVzY3JpcHRpb251cmw7XG5cdFx0XHRcdFx0Ly8gRklYTUU6IHVucmVsaWFibGUgcGcuaWROdW1iZXJcblx0XHRcdFx0XHRwb3BUaXBzU29vbkZuKGBwb3B1cEltYWdlJHtpZH1gKSgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHQvKiBmYWxscyB0aHJvdWdoICovXG5cdFx0XHRjYXNlICdzaXpldG9nZ2xlJzpcblx0XHRcdFx0YS5vbmNsaWNrID0gdG9nZ2xlU2l6ZTtcblx0XHRcdFx0YS50aXRsZSA9IHBvcHVwU3RyaW5nKCdUb2dnbGUgaW1hZ2Ugc2l6ZScpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHRjYXNlICdsaW5rZnVsbCc6XG5cdFx0XHRcdGEuaHJlZiA9IGltYWdlaW5mby51cmw7XG5cdFx0XHRcdGEudGl0bGUgPSBwb3B1cFN0cmluZygnT3BlbiBmdWxsLXNpemUgaW1hZ2UnKTtcblx0XHR9XG5cdH07XG5cdC8vIFRvZ2dsZXMgdGhlIGltYWdlIGJldHdlZW4gaW5saW5lIHNtYWxsIGFuZCBuYXZwb3AgZnVsbHdpZHRoLlxuXHQvLyBJdCdzIHRoZSBzYW1lIGltYWdlLCBubyBhY3R1YWwgc2l6ZWNoYW5nZSBvY2N1cnMsIG9ubHkgZGlzcGxheSB3aWR0aC5cblx0Y29uc3QgdG9nZ2xlU2l6ZSA9IGZ1bmN0aW9uIHRvZ2dsZVNpemUoKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0aWYgKCFzZWxmKSB7XG5cdFx0XHR2b2lkIG13Lm5vdGlmeSgnc2VsZiBpcyBudWxsIDovJywge3RhZzogJ3BvcHVwcycsIHR5cGU6ICdlcnJvcid9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgaW1nID0gc2VsZi5maXJzdENoaWxkO1xuXHRcdGlmICghaW1nKSB7XG5cdFx0XHR2b2lkIG13Lm5vdGlmeSgnaW1nIGlzIG51bGwgOi8nLCB7dGFnOiAncG9wdXBzJywgdHlwZTogJ2Vycm9yJ30pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpbWcuc3R5bGUud2lkdGggPSAhaW1nLnN0eWxlLndpZHRoIHx8IGltZy5zdHlsZS53aWR0aCA9PT0gJycgPyAnMTAwJScgOiAnJztcblx0fTtcblx0Ly8gUmV0dXJucyBvbmUgdGl0bGUgb2YgYW4gaW1hZ2UgZnJvbSB3aWtpVGV4dC5cblx0Y29uc3QgZ2V0VmFsaWRJbWFnZUZyb21XaWtpVGV4dCA9ICh3aWtpVGV4dCkgPT4ge1xuXHRcdC8vIG5iIGluIHBnLnJlLmltYWdlIHdlJ3JlIGludGVyZXN0ZWQgaW4gdGhlIHNlY29uZCBicmFja2V0ZWQgZXhwcmVzc2lvblxuXHRcdC8vIHRoaXMgbWF5IGNoYW5nZSBpZiB0aGUgcmVnZXggY2hhbmdlcyA6LShcblx0XHQvLyBsZXQgbWF0Y2g9cGcucmUuaW1hZ2UuZXhlYyh3aWtpVGV4dCk7XG5cdFx0bGV0IG1hdGNoZWQ7XG5cdFx0bGV0IG1hdGNoO1xuXHRcdC8vIHN0cmlwIGh0bWwgY29tbWVudHMsIHVzZWQgYnkgZXZpbCBib3RzIDotKFxuXHRcdGNvbnN0IHQgPSByZW1vdmVNYXRjaGVzVW5sZXNzKHdpa2lUZXh0LCAvKDwhLS1bXFxTXFxzXSo/LS0+KS8sIDEsIC9ePCEtLVteW10qcG9wdXAvaSk7XG5cdFx0d2hpbGUgKChtYXRjaCA9IHBnLnJlLmltYWdlLmV4ZWModCkpICE9PSBudWxsKSB7XG5cdFx0XHQvLyBub3cgZmluZCBhIHNhbmUgaW1hZ2UgbmFtZSAtIGV4Y2x1ZGUgdGVtcGxhdGVzIGJ5IHNlZWtpbmcge1xuXHRcdFx0Y29uc3QgbSA9IG1hdGNoWzJdIHx8IG1hdGNoWzZdO1xuXHRcdFx0aWYgKGlzVmFsaWRJbWFnZU5hbWUobSkpIHtcblx0XHRcdFx0bWF0Y2hlZCA9IG07XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRwZy5yZS5pbWFnZS5sYXN0SW5kZXggPSAwO1xuXHRcdGlmICghbWF0Y2hlZCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHJldHVybiBgJHttdy5jb25maWcuZ2V0KCd3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMnKVtwZy5uc0ltYWdlSWRdfToke3VwY2FzZUZpcnN0KG1hdGNoZWQpfWA7XG5cdH07XG5cdGNvbnN0IHJlbW92ZU1hdGNoZXNVbmxlc3MgPSAoc3RyLCByZTEsIHBhcmVuY291bnQsIHJlMikgPT4ge1xuXHRcdGNvbnN0IHNwbGl0ID0gc3RyLnNwbGl0KHJlMSk7XG5cdFx0Y29uc3QgYyA9IHBhcmVuY291bnQgKyAxO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc3BsaXQubGVuZ3RoOyArK2kpIHtcblx0XHRcdGlmIChpICUgYyA9PT0gMCB8fCByZTIudGVzdChzcGxpdFtpXSkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRzcGxpdFtpXSA9ICcnO1xuXHRcdH1cblx0XHRyZXR1cm4gc3BsaXQuam9pbignJyk7XG5cdH07XG5cdC8vIEVOREZJTEU6IGltYWdlcy5qc1xuXHQvLyBTVEFSVEZJTEU6IG5hbWVzcGFjZXMuanNcblx0Ly8gU2V0IHVwIG5hbWVzcGFjZXMgYW5kIG90aGVyIG5vbi1zdHJpbmdzLmpzIGxvY2FsaXphdGlvblxuXHQvLyAoY3VycmVudGx5IHRoYXQgbWVhbnMgcmVkaXJzIHRvbylcblx0Y29uc3Qgc2V0TmFtZXNwYWNlcyA9ICgpID0+IHtcblx0XHRwZy5uc1NwZWNpYWxJZCA9IC0xO1xuXHRcdHBnLm5zTWFpbnNwYWNlSWQgPSAwO1xuXHRcdHBnLm5zSW1hZ2VJZCA9IDY7XG5cdFx0cGcubnNVc2VySWQgPSAyO1xuXHRcdHBnLm5zVXNlcnRhbGtJZCA9IDM7XG5cdFx0cGcubnNDYXRlZ29yeUlkID0gMTQ7XG5cdFx0cGcubnNUZW1wbGF0ZUlkID0gMTA7XG5cdH07XG5cdGNvbnN0IHNldFJlZGlycyA9ICgpID0+IHtcblx0XHRjb25zdCByID0gJ3JlZGlyZWN0Jztcblx0XHRjb25zdCBSID0gJ1JFRElSRUNUJztcblx0XHRjb25zdCByZWRpckxpc3RzID0ge1xuXHRcdFx0YXI6IFtSLCAn2KrYrdmI2YrZhCddLFxuXHRcdFx0YmU6IFtyLCAn0L/QtdGA0LDQvdCw0LrRltGA0LDQstCw0L3RjNC90LUnXSxcblx0XHRcdGJnOiBbciwgJ9C/0YDQtdC90LDRgdC+0YfQstCw0L3QtScsICfQstC40LYnXSxcblx0XHRcdGJzOiBbciwgJ1ByZXVzbWplcmknLCAncHJldXNtamVyaScsICdQUkVVU01KRVJJJ10sXG5cdFx0XHRibjogW1IsICfgpqrgp4HgpqjgprDgp43gpqjgpr/gprDgp43gpqbgp4fgprYnXSxcblx0XHRcdGNzOiBbUiwgJ1DFmEVTTcSaUlVKJ10sXG5cdFx0XHRjeTogW3IsICdhaWwtY3lmZWlyaW8nXSxcblx0XHRcdGRlOiBbUiwgJ1dFSVRFUkxFSVRVTkcnXSxcblx0XHRcdGVsOiBbUiwgJ86Rzp3Okc6azpHOpM6VzqXOmM6lzp3Oo86XJ10sXG5cdFx0XHRlbzogW1IsICdBTElESVJFS1RVJywgJ0FMSURJUkVLVEknXSxcblx0XHRcdGVzOiBbUiwgJ1JFRElSRUNDScOTTiddLFxuXHRcdFx0ZXQ6IFtyLCAnc3V1bmEnXSxcblx0XHRcdGdhOiBbciwgJ2F0aHNoZW9sYWRoJ10sXG5cdFx0XHRnbDogW3IsICdSRURJUkVDQ0nDk04nLCAnUkVESVJFQ0lPTkFNRU5UTyddLFxuXHRcdFx0aGU6IFtSLCAn15TXpNeg15nXlCddLFxuXHRcdFx0aHU6IFtSLCAnw4FUSVLDgU5Zw41Uw4FTJ10sXG5cdFx0XHRpczogW3IsICd0aWx2w61zdW4nLCAnVElMVsONU1VOJ10sXG5cdFx0XHRpdDogW1IsICdSSU5WSUEnLCAnUmludmlhJ10sXG5cdFx0XHRqYTogW1IsICfou6LpgIEnXSxcblx0XHRcdG1rOiBbciwgJ9C/0YDQtdC90LDRgdC+0YfRg9Cy0LDRmtC1JywgJ9Cy0LjQtNC4J10sXG5cdFx0XHRuZHM6IFtyLCAnd2llZGVybGVpZGVuJ10sXG5cdFx0XHQnbmRzLW5sJzogW1IsICdERVVSVkVSV0lFWklORycsICdEVVVSVkVSV0lFWklORyddLFxuXHRcdFx0bmw6IFtSLCAnRE9PUlZFUldJSlpJTkcnXSxcblx0XHRcdG5uOiBbciwgJ29tZGlyaWdlciddLFxuXHRcdFx0cGw6IFtSLCAnUEFUUlonLCAnUFJaRUtJRVJVSicsICdUQU0nXSxcblx0XHRcdHB0OiBbUiwgJ3JlZGlyJ10sXG5cdFx0XHRydTogW1IsICfQn9CV0KDQldCd0JDQn9Cg0JDQktCb0JXQndCY0JUnLCAn0J/QldCg0JXQndCQ0J/QoCddLFxuXHRcdFx0c2s6IFtyLCAncHJlc21lcnVqJ10sXG5cdFx0XHRzcjogW3IsICfQn9GA0LXRg9GB0LzQtdGA0LgnLCAn0L/RgNC10YPRgdC80LXRgNC4JywgJ9Cf0KDQldCj0KHQnNCV0KDQmCcsICdQcmV1c21lcmknLCAncHJldXNtZXJpJywgJ1BSRVVTTUVSSSddLFxuXHRcdFx0dHQ6IFtSLCAnecO8bsOkbHTDvCcsICfQv9C10YDQtdC90LDQv9GA0LDQstC70LXQvdC40LUnLCAn0L/QtdGA0LXQvdCw0L/RgCddLFxuXHRcdFx0dWs6IFtSLCAn0J/QldCg0JXQndCQ0J/QoNCQ0JLQm9CV0J3QndCvJywgJ9Cf0JXQoNCV0J3QkNCf0KAnXSxcblx0XHRcdHZpOiBbciwgJ8SR4buVaSddLFxuXHRcdFx0eWk6IFtSLCAn15XXldeZ15nXmNei16jXpNeZ16jXnyddLFxuXHRcdFx0emg6IFtSLCAn6YeN5a6a5ZCRJ10sIC8vIG5vIGNvbW1hXG5cdFx0fTtcblx0XHRjb25zdCByZWRpckxpc3QgPSByZWRpckxpc3RzW3BnLndpa2kubGFuZ10gfHwgW3IsIFJdO1xuXHRcdC8vIE1lZGlhd2lraSBpcyB2ZXJ5IHRvbGVyYW50IGFib3V0IHdoYXQgY29tZXMgYWZ0ZXIgdGhlICNyZWRpcmVjdCBhdCB0aGUgc3RhcnRcblx0XHRwZy5yZS5yZWRpcmVjdCA9IG5ldyBSZWdFeHAoXG5cdFx0XHRgXlxcXFxzKlsjXSgke3JlZGlyTGlzdC5qb2luKCd8Jyl9KS4qP1xcXFxbezJ9KFteXFxcXHxcXFxcXV0qKSh8W15cXFxcXV0qKT9cXFxcXXsyfVxcXFxzKiguKilgLFxuXHRcdFx0J2knXG5cdFx0KTtcblx0fTtcblx0Y29uc3Qgc2V0SW50ZXJ3aWtpID0gKCkgPT4ge1xuXHRcdGlmIChwZy53aWtpLndpa2ltZWRpYSkge1xuXHRcdFx0Ly8gRnJvbSB7QGxpbmsgaHR0cHM6Ly9tZXRhLndpa2ltZWRpYS5vcmcvd2lraS9MaXN0X29mX1dpa2lwZWRpYXN9XG5cdFx0XHQvLyB7QGxpbmsgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3cvYXBpLnBocD9hY3Rpb249c2l0ZW1hdHJpeCZmb3JtYXQ9anNvbiZzbXR5cGU9bGFuZ3VhZ2Umc21sYW5ncHJvcD1jb2RlJmZvcm1hdHZlcnNpb249Mn1cblx0XHRcdHBnLndpa2kuaW50ZXJ3aWtpID1cblx0XHRcdFx0J2FhfGFifGFjZXxhZnxha3xhbHN8YW18YW58YW5nfGFyfGFyY3xhcnp8YXN8YXN0fGF2fGF5fGF6fGJhfGJhcnxiYXQtc21nfGJjbHxiZXxiZS14LW9sZHxiZ3xiaHxiaXxiam58Ym18Ym58Ym98YnB5fGJyfGJzfGJ1Z3xieHJ8Y2F8Y2JrLXphbXxjZG98Y2V8Y2VifGNofGNob3xjaHJ8Y2h5fGNrYnxjb3xjcnxjcmh8Y3N8Y3NifGN1fGN2fGN5fGRhfGRlfGRpcXxkc2J8ZHZ8ZHp8ZWV8ZWx8ZW1sfGVufGVvfGVzfGV0fGV1fGV4dHxmYXxmZnxmaXxmaXUtdnJvfGZqfGZvfGZyfGZycHxmcnJ8ZnVyfGZ5fGdhfGdhZ3xnYW58Z2R8Z2x8Z2xrfGdufGdvdHxndXxndnxoYXxoYWt8aGF3fGhlfGhpfGhpZnxob3xocnxoc2J8aHR8aHV8aHl8aHp8aWF8aWR8aWV8aWd8aWl8aWt8aWxvfGlvfGlzfGl0fGl1fGphfGpib3xqdnxrYXxrYWF8a2FifGtiZHxrZ3xraXxranxra3xrbHxrbXxrbnxrb3xrb2l8a3J8a3JjfGtzfGtzaHxrdXxrdnxrd3xreXxsYXxsYWR8bGJ8bGJlfGxnfGxpfGxpanxsbW98bG58bG98bHR8bHRnfGx2fG1hcC1ibXN8bWRmfG1nfG1ofG1ocnxtaXxta3xtbHxtbnxtb3xtcnxtcmp8bXN8bXR8bXVzfG13bHxteXxteXZ8bXpufG5hfG5haHxuYXB8bmRzfG5kcy1ubHxuZXxuZXd8bmd8bmx8bm58bm98bm92fG5ybXxudnxueXxvY3xvbXxvcnxvc3xwYXxwYWd8cGFtfHBhcHxwY2R8cGRjfHBmbHxwaXxwaWh8cGx8cG1zfHBuYnxwbnR8cHN8cHR8cXV8cm18cm15fHJufHJvfHJvYS1ydXB8cm9hLXRhcmF8cnV8cnVlfHJ3fHNhfHNhaHxzY3xzY258c2NvfHNkfHNlfHNnfHNofHNpfHNpbXBsZXxza3xzbHxzbXxzbnxzb3xzcXxzcnxzcm58c3N8c3R8c3RxfHN1fHN2fHN3fHN6bHx0YXx0ZXx0ZXR8dGd8dGh8dGl8dGt8dGx8dG58dG98dHBpfHRyfHRzfHR0fHR1bXx0d3x0eXx1ZG18dWd8dWt8dXJ8dXp8dmV8dmVjfHZpfHZsc3x2b3x3YXx3YXJ8d298d3V1fHhhbHx4aHx5aXx5b3x6YXx6ZWF8emh8emgtY2xhc3NpY2FsfHpoLW1pbi1uYW58emgteXVlfHp1Jztcblx0XHRcdHBnLnJlLmludGVyd2lraSA9IG5ldyBSZWdFeHAoYF4ke3BnLndpa2kuaW50ZXJ3aWtpfTpgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cGcud2lraS5pbnRlcndpa2kgPSBudWxsO1xuXHRcdFx0cGcucmUuaW50ZXJ3aWtpID0gL14kLztcblx0XHR9XG5cdH07XG5cdC8vIHJldHVybiBhIHJlZ2V4cCBwYXR0ZXJuIG1hdGNoaW5nIGFsbCB2YXJpYW50cyB0byB3cml0ZSB0aGUgZ2l2ZW4gbmFtZXNwYWNlXG5cdGNvbnN0IG5zUmUgPSAobmFtZXNwYWNlSWQpID0+IHtcblx0XHRjb25zdCBpbWFnZU5hbWVzcGFjZVZhcmlhbnRzID0gW107XG5cdFx0Zm9yIChjb25zdCBbX2xvY2FsaXplZE5hbWVzcGFjZUxjLCBfbmFtZXNwYWNlSWRdIG9mIE9iamVjdC5lbnRyaWVzKG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlSWRzJykpKSB7XG5cdFx0XHRpZiAoX25hbWVzcGFjZUlkICE9PSBuYW1lc3BhY2VJZCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGxvY2FsaXplZE5hbWVzcGFjZUxjID0gdXBjYXNlRmlyc3QoX2xvY2FsaXplZE5hbWVzcGFjZUxjKTtcblx0XHRcdGltYWdlTmFtZXNwYWNlVmFyaWFudHMucHVzaChcblx0XHRcdFx0bXcudXRpbC5lc2NhcGVSZWdFeHAobG9jYWxpemVkTmFtZXNwYWNlTGMpLnNwbGl0KCcgJykuam9pbignWyBfXScpLFxuXHRcdFx0XHRtdy51dGlsLmVzY2FwZVJlZ0V4cChlbmNvZGVVUkkobG9jYWxpemVkTmFtZXNwYWNlTGMpKVxuXHRcdFx0KTtcblx0XHR9XG5cdFx0cmV0dXJuIGAoPzoke2ltYWdlTmFtZXNwYWNlVmFyaWFudHMuam9pbignfCcpfSlgO1xuXHR9O1xuXHRjb25zdCBuc1JlSW1hZ2UgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIG5zUmUocGcubnNJbWFnZUlkKTtcblx0fTtcblx0Ly8gRU5ERklMRTogbmFtZXNwYWNlcy5qc1xuXHQvLyBTVEFSVEZJTEU6IHNlbHBvcC5qc1xuXHRjb25zdCBnZXRFZGl0Ym94U2VsZWN0aW9uID0gKCkgPT4ge1xuXHRcdC8vIHNlZSB7QGxpbmsgaHR0cDovL3d3dy53ZWJndXJ1c2ZvcnVtLmNvbS84LzEyLzB9XG5cdFx0bGV0IGVkaXRib3g7XG5cdFx0dHJ5IHtcblx0XHRcdGVkaXRib3ggPSBkb2N1bWVudC5lZGl0Zm9ybS53cFRleHRib3gxO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHQvLyBJRSwgT3BlcmFcblx0XHRpZiAoZG9jdW1lbnQuc2VsZWN0aW9uKSB7XG5cdFx0XHRyZXR1cm4gZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKCkudGV4dDtcblx0XHR9XG5cdFx0Ly8gTW96aWxsYVxuXHRcdGNvbnN0IHNlbFN0YXJ0ID0gZWRpdGJveC5zZWxlY3Rpb25TdGFydDtcblx0XHRjb25zdCBzZWxFbmQgPSBlZGl0Ym94LnNlbGVjdGlvbkVuZDtcblx0XHRyZXR1cm4gZWRpdGJveC52YWx1ZS5zdWJzdHJpbmcoc2VsU3RhcnQsIHNlbEVuZCk7XG5cdH07XG5cdGNvbnN0IGRvU2VsZWN0aW9uUG9wdXAgPSAoKSA9PiB7XG5cdFx0Ly8gcG9wdXAgaWYgdGhlIHNlbGVjdGlvbiBsb29rcyBsaWtlIFtbZm9vfGFueXRoaW5nIGFmdGVyd2FyZHMgYXQgYWxsXG5cdFx0Ly8gb3IgW1tmb298YmFyXV10ZXh0IHdpdGhvdXQgJ11dJ1xuXHRcdC8vIG9yIFtbZm9vfGJhcl1dXG5cdFx0Y29uc3Qgc2VsID0gZ2V0RWRpdGJveFNlbGVjdGlvbigpO1xuXHRcdGNvbnN0IG9wZW4gPSBzZWwuaW5kZXhPZignW1snKTtcblx0XHRjb25zdCBwaXBlID0gc2VsLmluZGV4T2YoJ3wnKTtcblx0XHRjb25zdCBjbG9zZSA9IHNlbC5pbmRleE9mKCddXScpO1xuXHRcdGlmIChvcGVuID09PSAtMSB8fCAocGlwZSA9PT0gLTEgJiYgY2xvc2UgPT09IC0xKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoKHBpcGUgIT09IC0xICYmIG9wZW4gPiBwaXBlKSB8fCAoY2xvc2UgIT09IC0xICYmIG9wZW4gPiBjbG9zZSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgYXJ0aWNsZSA9IG5ldyBUaXRsZShzZWwuc3Vic3RyaW5nKG9wZW4gKyAyLCBwaXBlIDwgMCA/IGNsb3NlIDogcGlwZSkpO1xuXHRcdGlmIChnZXRWYWx1ZU9mKCdwb3B1cE9uRWRpdFNlbGVjdGlvbicpID09PSAnYm94cHJldmlldycpIHtcblx0XHRcdHJldHVybiBkb1NlcGFyYXRlU2VsZWN0aW9uUG9wdXAoc2VsLCBhcnRpY2xlKTtcblx0XHR9XG5cdFx0aWYgKGNsb3NlID4gMCAmJiBzZWwuc2xpY2UoTWF0aC5tYXgoMCwgY2xvc2UgKyAyKSkuaW5jbHVkZXMoJ1tbJykpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRhLmhyZWYgPSBwZy53aWtpLnRpdGxlYmFzZSArIGFydGljbGUudXJsU3RyaW5nKCk7XG5cdFx0bW91c2VPdmVyV2lraUxpbmsyKGEpO1xuXHRcdGlmIChhLm5hdnBvcHVwKSB7XG5cdFx0XHRhLm5hdnBvcHVwLmFkZEhvb2soXG5cdFx0XHRcdCgpID0+IHtcblx0XHRcdFx0XHRydW5TdG9wUG9wdXBUaW1lcihhLm5hdnBvcHVwKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0J3VuaGlkZScsXG5cdFx0XHRcdCdhZnRlcidcblx0XHRcdCk7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBkb1NlcGFyYXRlU2VsZWN0aW9uUG9wdXAgPSAoc3RyLCBhcnRpY2xlKSA9PiB7XG5cdFx0bGV0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3Rpb25QcmV2aWV3Jyk7XG5cdFx0aWYgKCFkaXYpIHtcblx0XHRcdGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0ZGl2LmlkID0gJ3NlbGVjdGlvblByZXZpZXcnO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgYm94ID0gZG9jdW1lbnQuZWRpdGZvcm0ud3BUZXh0Ym94MTtcblx0XHRcdFx0Ym94LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGRpdiwgYm94KTtcblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNvbnN0IHAgPSBwcmVwUHJldmlld21ha2VyKHN0ciwgYXJ0aWNsZSwgbmV3TmF2cG9wdXAoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpLCBhcnRpY2xlKSk7XG5cdFx0cC5tYWtlUHJldmlldygpO1xuXHRcdGlmIChwLmh0bWwpIHtcblx0XHRcdGRpdi5pbm5lckhUTUwgPSBwLmh0bWw7XG5cdFx0fVxuXHRcdGRpdi5yYW5TZXR1cFRvb2x0aXBzQWxyZWFkeSA9IGZhbHNlO1xuXHRcdHBvcFRpcHNTb29uRm4oJ3NlbGVjdGlvblByZXZpZXcnKSgpO1xuXHR9O1xuXHQvLyBFTkRGSUxFOiBzZWxwb3AuanNcblx0Ly8gU1RBUlRGSUxFOiBuYXZwb3B1cC5qc1xuXHQvKipcblx0ICogQGZpbGVvdmVydmlldyAgRGVmaW5lcyB0d28gY2xhc3Nlczoge0Bzb3VyY2UgTmF2cG9wdXB9IGFuZCB7QHNvdXJjZSBNb3VzZXRyYWNrZXJ9LlxuXHQgKlxuXHQgKiA8Y29kZT5OYXZwb3B1cDwvY29kZT4gZGVzY3JpYmVzIHBvcHVwczogd2hlbiB0aGV5IGFwcGVhciwgd2hlcmUsIHdoYXRcblx0ICogdGhleSBsb29rIGxpa2UgYW5kIHNvIG9uLlxuXHQgKlxuXHQgKiA8Y29kZT5Nb3VzZXRyYWNrZXI8L2NvZGU+IFwiY2FwdHVyZXNcIiB0aGUgbW91c2UgdXNpbmdcblx0ICogPGNvZGU+ZG9jdW1lbnQub25tb3VzZW1vdmU8L2NvZGU+LlxuXHQgKi9cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuZXcgTW91c2V0cmFja2VyLlxuXHQgKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQGNsYXNzIFRoZSBNb3VzZXRyYWNrZXIgY2xhc3MuIFRoaXMgbW9uaXRvcnMgbW91c2UgbW92ZW1lbnRzIGFuZCBtYW5hZ2VzIGFzc29jaWF0ZWQgaG9va3MuXG5cdCAqL1xuXHRjbGFzcyBNb3VzZXRyYWNrZXIge1xuXHRcdGNvbnN0cnVjdG9yKCkge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBJbnRlcnZhbCB0byByZWd1bGFybHkgcnVuIHRoZSBob29rcyBhbnl3YXksIGluIG1pbGxpc2Vjb25kcy5cblx0XHRcdCAqXG5cdFx0XHQgKiBAdHlwZSBJbnRlZ2VyXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMubG9vcERlbGF5ID0gNDAwO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBUaW1lciBmb3IgdGhlIGxvb3AuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHR5cGUgVGltZXJcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50aW1lciA9IG51bGw7XG5cdFx0XHQvKipcblx0XHRcdCAqIEZsYWcgLSBhcmUgd2Ugc3dpdGNoZWQgb24/XG5cdFx0XHQgKlxuXHRcdFx0ICogQHR5cGUgQm9vbGVhblxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBGbGFnIC0gYXJlIHdlIHByb2JhYmx5IGluYWNjdXJhdGUsIGkuZS4gbm90IHJlZmxlY3RpbmcgdGhlIGFjdHVhbCBtb3VzZSBwb3NpdGlvbj9cblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5kaXJ0eSA9IHRydWU7XG5cdFx0XHQvKipcblx0XHRcdCAqIEFycmF5IG9mIGhvb2sgZnVuY3Rpb25zLlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwcml2YXRlXG5cdFx0XHQgKiBAdHlwZSBBcnJheVxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLmhvb2tzID0gW107XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEFkZHMgYSBob29rLCB0byBiZSBjYWxsZWQgd2hlbiB3ZSBnZXQgZXZlbnRzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gZiBBIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCBhc1xuXHRcdCAqIDxjb2RlPmYoeCx5KTwvY29kZT4uIEl0IHNob3VsZCByZXR1cm4gPGNvZGU+dHJ1ZTwvY29kZT4gd2hlbiBpdFxuXHRcdCAqIHdhbnRzIHRvIGJlIHJlbW92ZWQsIGFuZCA8Y29kZT5mYWxzZTwvY29kZT4gb3RoZXJ3aXNlLlxuXHRcdCAqL1xuXHRcdGFkZEhvb2soZikge1xuXHRcdFx0dGhpcy5ob29rcy5wdXNoKGYpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBSdW5zIGhvb2tzLCBwYXNzaW5nIHRoZW0gdGhlIHhcblx0XHQgKiBhbmQgeSBjb29yZHMgb2YgdGhlIG1vdXNlLiAgSG9vayBmdW5jdGlvbnMgdGhhdCByZXR1cm4gdHJ1ZSBhcmVcblx0XHQgKiBwYXNzZWQgdG8ge0Bzb3VyY2UgTW91c2V0cmFja2VyI3JlbW92ZUhvb2tzfSBmb3IgcmVtb3ZhbC5cblx0XHQgKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0cnVuSG9va3MoKSB7XG5cdFx0XHRpZiAoIXRoaXMuaG9va3MgfHwgdGhpcy5ob29rcy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Ly8gbG9nKCdNb3VzZXRyYWNrZXIucnVuSG9va3M7IHdlIGdvdCBzb21lIGhvb2tzIHRvIHJ1bicpO1xuXHRcdFx0bGV0IHJlbW92ZSA9IGZhbHNlO1xuXHRcdFx0Y29uc3QgcmVtb3ZlT2JqID0ge307XG5cdFx0XHQvLyB0aGlzIG1ldGhvZCBnZXRzIGNhbGxlZCBhIExPVCAtXG5cdFx0XHQvLyBwcmUtY2FjaGUgc29tZSB2YXJpYWJsZXNcblx0XHRcdGNvbnN0IHt4fSA9IHRoaXM7XG5cdFx0XHRjb25zdCB7eX0gPSB0aGlzO1xuXHRcdFx0Y29uc3QgbGVuID0gdGhpcy5ob29rcy5sZW5ndGg7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG5cdFx0XHRcdC8vIH4gcnVuIHRoZSBob29rIGZ1bmN0aW9uLCBhbmQgcmVtb3ZlIGl0IGlmIGl0IHJldHVybnMgdHJ1ZVxuXHRcdFx0XHRpZiAodGhpcy5ob29rc1tpXSh4LCB5KSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdHJlbW92ZSA9IHRydWU7XG5cdFx0XHRcdFx0cmVtb3ZlT2JqW2ldID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHJlbW92ZSkge1xuXHRcdFx0XHR0aGlzLnJlbW92ZUhvb2tzKHJlbW92ZU9iaik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFJlbW92ZXMgaG9va3MuXG5cdFx0ICpcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSByZW1vdmVPYmogQW4gb2JqZWN0IHdob3NlIGtleXMgYXJlIHRoZSBpbmRleFxuXHRcdCAqIG51bWJlcnMgb2YgZnVuY3Rpb25zIGZvciByZW1vdmFsLCB3aXRoIHZhbHVlcyB0aGF0IGV2YWx1YXRlIHRvIHRydWVcblx0XHQgKi9cblx0XHRyZW1vdmVIb29rcyhyZW1vdmVPYmopIHtcblx0XHRcdGNvbnN0IG5ld0hvb2tzID0gW107XG5cdFx0XHRjb25zdCBsZW4gPSB0aGlzLmhvb2tzLmxlbmd0aDtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcblx0XHRcdFx0aWYgKCFyZW1vdmVPYmpbaV0pIHtcblx0XHRcdFx0XHRuZXdIb29rcy5wdXNoKHRoaXMuaG9va3NbaV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmhvb2tzID0gbmV3SG9va3M7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEV2ZW50IGxpc3RlbmVyIGZvciBtb3VzZSB3aWdnbGVzLlxuXHRcdCAqIFdlIHNpbXBseSBncmFiIHRoZSBldmVudCwgc2V0IHggYW5kIHkgYW5kIHJ1biB0aGUgaG9va3MuXG5cdFx0ICogVGhpcyBtYWtlcyB0aGUgY3B1IGFsbCBob3QgYW5kIGJvdGhlcmVkIDotKFxuXHRcdCAqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKiBAcGFyYW0ge0V2ZW50fSBlIE1vdXNlbW92ZSBldmVudFxuXHRcdCAqL1xuXHRcdHRyYWNrKGUpIHtcblx0XHRcdC8vIH4gQXBwYXJlbnRseSB0aGlzIGlzIG5lZWRlZCBpbiBJRS5cblx0XHRcdGUgfHw9IHdpbmRvdy5ldmVudDtcblx0XHRcdGxldCB4O1xuXHRcdFx0bGV0IHk7XG5cdFx0XHRpZiAoZSkge1xuXHRcdFx0XHRpZiAoZS5wYWdlWCkge1xuXHRcdFx0XHRcdHggPSBlLnBhZ2VYO1xuXHRcdFx0XHRcdHkgPSBlLnBhZ2VZO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGUuY2xpZW50WCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxldCBsZWZ0O1xuXHRcdFx0XHRcdGxldCB0b3A7XG5cdFx0XHRcdFx0Y29uc3QgZG9jRWx0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXHRcdFx0XHRcdGlmIChkb2NFbHQpIHtcblx0XHRcdFx0XHRcdGxlZnQgPSBkb2NFbHQuc2Nyb2xsTGVmdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bGVmdCB8fD0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnNjcm9sbExlZnQgfHwgZG9jdW1lbnQuc2Nyb2xsTGVmdCB8fCAwO1xuXHRcdFx0XHRcdGlmIChkb2NFbHQpIHtcblx0XHRcdFx0XHRcdHRvcCA9IGRvY0VsdC5zY3JvbGxUb3A7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRvcCB8fD0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnNjcm9sbFRvcCB8fCBkb2N1bWVudC5zY3JvbGxUb3AgfHwgMDtcblx0XHRcdFx0XHR4ID0gZS5jbGllbnRYICsgbGVmdDtcblx0XHRcdFx0XHR5ID0gZS5jbGllbnRZICsgdG9wO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc2V0UG9zaXRpb24oeCwgeSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFNldHMgdGhlIHggYW5kIHkgY29vcmRpbmF0ZXMgc3RvcmVkIGFuZCB0YWtlcyBhcHByb3ByaWF0ZSBhY3Rpb24sXG5cdFx0ICogcnVubmluZyBob29rcyBhcyBhcHByb3ByaWF0ZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7SW50ZWdlcn0geCwgeSBTY3JlZW4gY29vcmRpbmF0ZXMgdG8gc2V0XG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IHhcblx0XHQgKiBAcGFyYW0ge251bWJlcn0geVxuXHRcdCAqL1xuXHRcdHNldFBvc2l0aW9uKHgsIHkpIHtcblx0XHRcdHRoaXMueCA9IHg7XG5cdFx0XHR0aGlzLnkgPSB5O1xuXHRcdFx0aWYgKHRoaXMuZGlydHkgfHwgdGhpcy5ob29rcy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0dGhpcy5kaXJ0eSA9IGZhbHNlO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mIHRoaXMubGFzdEhvb2tfeCAhPT0gJ251bWJlcicpIHtcblx0XHRcdFx0dGhpcy5sYXN0SG9va194ID0gLTEwMDtcblx0XHRcdFx0dGhpcy5sYXN0SG9va195ID0gLTEwMDtcblx0XHRcdH1cblx0XHRcdGxldCBkaWZmID0gKHRoaXMubGFzdEhvb2tfeCAtIHgpICogKHRoaXMubGFzdEhvb2tfeSAtIHkpO1xuXHRcdFx0ZGlmZiA9IGRpZmYgPj0gMCA/IGRpZmYgOiAtZGlmZjtcblx0XHRcdGlmIChkaWZmID4gMSkge1xuXHRcdFx0XHR0aGlzLmxhc3RIb29rX3ggPSB4O1xuXHRcdFx0XHR0aGlzLmxhc3RIb29rX3kgPSB5O1xuXHRcdFx0XHRpZiAodGhpcy5kaXJ0eSkge1xuXHRcdFx0XHRcdHRoaXMuZGlydHkgPSBmYWxzZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnJ1bkhvb2tzKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogU2V0cyB0aGluZ3MgaW4gbW90aW9uLCB1bmxlc3MgdGhleSBhcmUgYWxyZWFkeSB0aGF0IGlzLCByZWdpc3RlcmluZyBhbiBldmVudCBsaXN0ZW5lciBvblxuXHRcdCAqIDxjb2RlPmRvY3VtZW50Lm9ubW91c2Vtb3ZlPC9jb2RlPi4gQSBoYWxmLWhlYXJ0ZWQgYXR0ZW1wdCBpcyBtYWRlIHRvIHByZXNlcnZlIHRoZSBvbGQgZXZlbnRcblx0XHQgKiBsaXN0ZW5lciBpZiB0aGVyZSBpcyBvbmUuXG5cdFx0ICovXG5cdFx0ZW5hYmxlKCkge1xuXHRcdFx0aWYgKHRoaXMuYWN0aXZlKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRoaXMuYWN0aXZlID0gdHJ1ZTtcblx0XHRcdC8vIH4gU2F2ZSB0aGUgY3VycmVudCBsaXN0ZW5lciBmb3IgbW91c2Vtb3ZlIGV2ZW50cy4gVGhpcyBpc24ndCB0b29cblx0XHRcdC8vIH4gcm9idXN0LCBvZiBjb3Vyc2UuXG5cdFx0XHR0aGlzLnNhdmVkTGlzdGVuZXIgPSBkb2N1bWVudC5vbm1vdXNlbW92ZTtcblx0XHRcdC8vIH4gR290dGEgc2F2ZSBAdHR7dGhpc30gYWdhaW4gZm9yIHRoZSBjbG9zdXJlLCBhbmQgdXNlIGFwcGx5IGZvclxuXHRcdFx0Ly8gfiB0aGUgbWVtYmVyIGZ1bmN0aW9uLlxuXHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHRkb2N1bWVudC5vbm1vdXNlbW92ZSA9IChlKSA9PiB7XG5cdFx0XHRcdHNlbGYudHJhY2soZSk7XG5cdFx0XHR9O1xuXHRcdFx0aWYgKHRoaXMubG9vcERlbGF5KSB7XG5cdFx0XHRcdHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRcdFx0Ly8gbG9nKCdsb29wIGRlbGF5IGluIG1vdXNldHJhY2tlciBpcyB3b3JraW5nJyk7XG5cdFx0XHRcdFx0c2VsZi5ydW5Ib29rcygpO1xuXHRcdFx0XHR9LCB0aGlzLmxvb3BEZWxheSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIERpc2FibGVzIHRoZSB0cmFja2VyLCByZW1vdmluZyB0aGUgZXZlbnQgbGlzdGVuZXIuXG5cdFx0ICovXG5cdFx0ZGlzYWJsZSgpIHtcblx0XHRcdGlmICghdGhpcy5hY3RpdmUpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLnNhdmVkTGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0ZG9jdW1lbnQub25tb3VzZW1vdmUgPSB0aGlzLnNhdmVkTGlzdGVuZXI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkZWxldGUgZG9jdW1lbnQub25tb3VzZW1vdmU7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy50aW1lcikge1xuXHRcdFx0XHRjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5hY3RpdmUgPSBmYWxzZTtcblx0XHR9XG5cdH1cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuZXcgTmF2cG9wdXAuXG5cdCAqIEdldHMgYSBVSUQgZm9yIHRoZSBwb3B1cCBhbmRcblx0ICpcblx0ICogQHBhcmFtIGluaXQgQ29udHJ1Y3RvciBvYmplY3QuIElmIDxjb2RlPmluaXQuZHJhZ2dhYmxlPC9jb2RlPiBpcyB0cnVlIG9yIGFic2VudCwgdGhlIHBvcHVwIGJlY29tZXMgZHJhZ2dhYmxlLlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQGNsYXNzIFRoZSBOYXZwb3B1cCBjbGFzcy4gVGhpcyBnZW5lcmF0ZXMgcG9wdXAgaGludHMsIGFuZCBkb2VzIHNvbWUgbWFuYWdlbWVudCBvZiB0aGVtLlxuXHQgKi9cblx0Y2xhc3MgTmF2cG9wdXAge1xuXHRcdGNvbnN0cnVjdG9yKCkge1xuXHRcdFx0Ly8gbXcubm90aWZ5KCduZXcgTmF2cG9wdXAoaW5pdCknLCB7dGFnOiAncG9wdXBzJywgdHlwZTogJ3dhcm4nfSk7XG5cdFx0XHQvKipcblx0XHRcdCAqIFVJRCBmb3IgZWFjaCBOYXZwb3B1cCBpbnN0YW5jZS5cblx0XHRcdCAqIFJlYWQtb25seS5cblx0XHRcdCAqXG5cdFx0XHQgKiBAdHlwZSBpbnRlZ2VyXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudWlkID0gTmF2cG9wdXAudWlkKys7XG5cdFx0XHQvKipcblx0XHRcdCAqIFJlYWQtb25seSBmbGFnIGZvciBjdXJyZW50IHZpc2liaWxpdHkgb2YgdGhlIHBvcHVwLlxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIGJvb2xlYW5cblx0XHRcdCAqIEBwcml2YXRlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBGbGFnIHRvIGJlIHNldCB3aGVuIHdlIHdhbnQgdG8gY2FuY2VsIGEgcHJldmlvdXMgcmVxdWVzdCB0b1xuXHRcdFx0ICogc2hvdyB0aGUgcG9wdXAgaW4gYSBsaXR0bGUgd2hpbGUuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHByaXZhdGVcblx0XHRcdCAqIEB0eXBlIGJvb2xlYW5cblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5ub3Nob3cgPSBmYWxzZTtcblx0XHRcdC8qKlxuXHRcdFx0ICogQ2F0ZWdvcmlzZWQgbGlzdCBvZiBob29rcy5cblx0XHRcdCAqXG5cdFx0XHQgKiBAc2VlICNydW5Ib29rc1xuXHRcdFx0ICogQHNlZSAjYWRkSG9va1xuXHRcdFx0ICogQHByaXZhdGVcblx0XHRcdCAqIEB0eXBlIE9iamVjdFxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLmhvb2tzID0ge1xuXHRcdFx0XHRjcmVhdGU6IFtdLFxuXHRcdFx0XHR1bmhpZGU6IFtdLFxuXHRcdFx0XHRoaWRlOiBbXSxcblx0XHRcdH07XG5cdFx0XHQvKipcblx0XHRcdCAqIGxpc3Qgb2YgdW5pcXVlIElEcyBvZiBob29rIGZ1bmN0aW9ucywgdG8gYXZvaWQgZHVwbGljYXRlc1xuXHRcdFx0ICpcblx0XHRcdCAqIEBwcml2YXRlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMuaG9va0lkcyA9IHt9O1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBMaXN0IG9mIGRvd25sb2FkcyBhc3NvY2lhdGVkIHdpdGggdGhlIHBvcHVwLlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwcml2YXRlXG5cdFx0XHQgKiBAdHlwZSBBcnJheVxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLmRvd25sb2FkcyA9IFtdO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBOdW1iZXIgb2YgdW5jb21wbGV0ZWQgZG93bmxvYWRzLlxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIGludGVnZXJcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5wZW5kaW5nID0gbnVsbDtcblx0XHRcdC8qKlxuXHRcdFx0ICogVG9sZXJhbmNlIGluIHBpeGVscyB3aGVuIGRldGVjdGluZyB3aGV0aGVyIHRoZSBtb3VzZSBoYXMgbGVmdCB0aGUgcG9wdXAuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHR5cGUgaW50ZWdlclxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLmZ1enogPSA1O1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBGbGFnIHRvIHRvZ2dsZSBydW5uaW5nIHtAc291cmNlICNsaW1pdEhvcml6b250YWxQb3NpdGlvbn0gdG8gcmVndWxhdGUgdGhlIHBvcHVwJ3MgcG9zaXRpb24uXG5cdFx0XHQgKlxuXHRcdFx0ICogQHR5cGUgYm9vbGVhblxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLmNvbnN0cmFpbmVkID0gdHJ1ZTtcblx0XHRcdC8qKlxuXHRcdFx0ICogVGhlIHBvcHVwIHdpZHRoIGluIHBpeGVscy5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcHJpdmF0ZVxuXHRcdFx0ICogQHR5cGUgaW50ZWdlclxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLndpZHRoID0gMDtcblx0XHRcdC8qKlxuXHRcdFx0ICogVGhlIHBvcHVwIHdpZHRoIGluIHBpeGVscy5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcHJpdmF0ZVxuXHRcdFx0ICogQHR5cGUgaW50ZWdlclxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLmhlaWdodCA9IDA7XG5cdFx0XHQvKipcblx0XHRcdCAqIFRoZSBtYWluIGNvbnRlbnQgRElWIGVsZW1lbnQuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHR5cGUgSFRNTERpdkVsZW1lbnRcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5tYWluRGl2ID0gbnVsbDtcblx0XHRcdHRoaXMuY3JlYXRlTWFpbkRpdigpO1xuXHRcdFx0Ly9cdGlmICghaW5pdCB8fCB0eXBlb2YgaW5pdC5wb3B1cHNfZHJhZ2dhYmxlPT0ndW5kZWZpbmVkJyB8fCBpbml0LnBvcHVwc19kcmFnZ2FibGUpIHtcblx0XHRcdC8vXHRcdHRoaXMubWFrZURyYWdnYWJsZSh0cnVlKTtcblx0XHRcdC8vXHR9XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFJldHJpZXZlcyB0aGUge0Bzb3VyY2UgI3Zpc2libGV9IGF0dHJpYnV0ZSwgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBwb3B1cCBpcyBjdXJyZW50bHkgdmlzaWJsZS5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIGJvb2xlYW5cblx0XHQgKi9cblx0XHRpc1Zpc2libGUoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy52aXNpYmxlO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBSZXBvc2l0aW9ucyBwb3B1cCB1c2luZyBDU1Mgc3R5bGUuXG5cdFx0ICpcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqIEBwYXJhbSB7aW50ZWdlcn0geCB4LWNvb3JkaW5hdGUgKHB4KVxuXHRcdCAqIEBwYXJhbSB7aW50ZWdlcn0geSB5LWNvb3JkaW5hdGUgKHB4KVxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gbm9MaW1pdEhvciBEb24ndCBjYWxsIHtAc291cmNlICNsaW1pdEhvcml6b250YWxQb3NpdGlvbn1cblx0XHQgKi9cblx0XHRyZXBvc2l0aW9uKHgsIHksIG5vTGltaXRIb3IpIHtcblx0XHRcdGxvZyhgcmVwb3NpdGlvbigke3h9LCR7eX0sJHtub0xpbWl0SG9yfSlgKTtcblx0XHRcdGlmICh4ICE9PSB1bmRlZmluZWQgJiYgeCAhPT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLmxlZnQgPSB4O1xuXHRcdFx0fVxuXHRcdFx0aWYgKHkgIT09IHVuZGVmaW5lZCAmJiB5ICE9PSBudWxsKSB7XG5cdFx0XHRcdHRoaXMudG9wID0geTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmxlZnQgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnRvcCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMubWFpbkRpdi5zdHlsZS5sZWZ0ID0gYCR7dGhpcy5sZWZ0fXB4YDtcblx0XHRcdFx0dGhpcy5tYWluRGl2LnN0eWxlLnRvcCA9IGAke3RoaXMudG9wfXB4YDtcblx0XHRcdH1cblx0XHRcdGlmICghbm9MaW1pdEhvcikge1xuXHRcdFx0XHR0aGlzLmxpbWl0SG9yaXpvbnRhbFBvc2l0aW9uKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFByZXZlbnRzIHBvcHVwcyBmcm9tIGJlaW5nIGluIHNpbGx5IGxvY2F0aW9ucy4gSG9wZWZ1bGx5LlxuXHRcdCAqIFNob3VsZCBub3QgYmUgcnVuIGlmIHtAc291cmNlICNjb25zdHJhaW5lZH0gaXMgdHJ1ZS5cblx0XHQgKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0bGltaXRIb3Jpem9udGFsUG9zaXRpb24oKSB7XG5cdFx0XHRpZiAoIXRoaXMuY29uc3RyYWluZWQgfHwgdGhpcy50b29XaWRlKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRoaXMudXBkYXRlRGltZW5zaW9ucygpO1xuXHRcdFx0Y29uc3QgeCA9IHRoaXMubGVmdDtcblx0XHRcdGNvbnN0IHcgPSB0aGlzLndpZHRoO1xuXHRcdFx0Y29uc3QgY1dpZHRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsaWVudFdpZHRoO1xuXHRcdFx0Ly9cdGxvZygnbGltaXRIb3Jpem9udGFsUG9zaXRpb246IHg9Jyt4K1xuXHRcdFx0Ly9cdFx0XHQnLCB0aGlzLmxlZnQ9JyArIHRoaXMubGVmdCArXG5cdFx0XHQvL1x0XHRcdCcsIHRoaXMud2lkdGg9JyArIHRoaXMud2lkdGggK1xuXHRcdFx0Ly9cdFx0XHQnLCBjV2lkdGg9JyArIGNXaWR0aCk7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHggKyB3ID49IGNXaWR0aCB8fFxuXHRcdFx0XHQoeCA+IDAgJiZcblx0XHRcdFx0XHR0aGlzLm1heFdpZHRoICYmXG5cdFx0XHRcdFx0dGhpcy53aWR0aCA8IHRoaXMubWF4V2lkdGggJiZcblx0XHRcdFx0XHR0aGlzLmhlaWdodCA+IHRoaXMud2lkdGggJiZcblx0XHRcdFx0XHR4ID4gY1dpZHRoIC0gdGhpcy5tYXhXaWR0aClcblx0XHRcdCkge1xuXHRcdFx0XHQvLyBUaGlzIGlzIGEgdmVyeSBuYXN0eSBoYWNrLiBUaGVyZSBoYXMgdG8gYmUgYSBiZXR0ZXIgd2F5IVxuXHRcdFx0XHQvLyBXZSBmaW5kIHRoZSBcIm5hdHVyYWxcIiB3aWR0aCBvZiB0aGUgZGl2IGJ5IHBvc2l0aW9uaW5nIGl0IGF0IHRoZSBmYXIgbGVmdFxuXHRcdFx0XHQvLyB0aGVuIHJlc2V0IGl0IHNvIHRoYXQgaXQgc2hvdWxkIGJlIGZsdXNoIHJpZ2h0ICh3ZWxsLCBuZWFybHkpXG5cdFx0XHRcdHRoaXMubWFpbkRpdi5zdHlsZS5sZWZ0ID0gJy0xMDAwMHB4Jztcblx0XHRcdFx0dGhpcy5tYWluRGl2LnN0eWxlLndpZHRoID0gYCR7dGhpcy5tYXhXaWR0aH1weGA7XG5cdFx0XHRcdGNvbnN0IG5hdHVyYWxXaWR0aCA9IE51bWJlci5wYXJzZUludCh0aGlzLm1haW5EaXYub2Zmc2V0V2lkdGgsIDEwKTtcblx0XHRcdFx0bGV0IG5ld0xlZnQgPSBjV2lkdGggLSBuYXR1cmFsV2lkdGggLSAxO1xuXHRcdFx0XHRpZiAobmV3TGVmdCA8IDApIHtcblx0XHRcdFx0XHRuZXdMZWZ0ID0gMDtcblx0XHRcdFx0XHR0aGlzLnRvb1dpZGUgPSB0cnVlO1xuXHRcdFx0XHR9IC8vIHN0aWxsIHVuc3RhYmxlIGZvciByZWFsbHkgd2lkZSBwb3B1cHM/XG5cdFx0XHRcdGxvZyhcblx0XHRcdFx0XHRgbGltaXRIb3Jpem9udGFsUG9zaXRpb246IG1vdmluZyB0byAoJHtuZXdMZWZ0fSwke3RoaXMudG9wfSk7YCArXG5cdFx0XHRcdFx0XHRgIG5hdHVyYWxXaWR0aD0ke25hdHVyYWxXaWR0aH0sIGNsaWVudFdpZHRoPSR7Y1dpZHRofWBcblx0XHRcdFx0KTtcblx0XHRcdFx0dGhpcy5yZXBvc2l0aW9uKG5ld0xlZnQsIG51bGwsIHRydWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvKipcblx0XHQgKiBCcmluZ3MgcG9wdXAgdG8gdGhlIHRvcCBvZiB0aGUgei1vcmRlci5cblx0XHQgKiBXZSBpbmNyZW1lbnQgdGhlIHtAc291cmNlICNoaWdoZXN0fSBwcm9wZXJ0eSBvZiB0aGUgY29udHJ1Y3RvciBoZXJlLlxuXHRcdCAqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRyYWlzZSgpIHtcblx0XHRcdHRoaXMubWFpbkRpdi5zdHlsZS56SW5kZXggPSBOYXZwb3B1cC5oaWdoZXN0ICsgMTtcblx0XHRcdCsrTmF2cG9wdXAuaGlnaGVzdDtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogU2hvd3MgdGhlIHBvcHVwIHByb3ZpZGVkIHtAc291cmNlICNub3Nob3d9IGlzIG5vdCB0cnVlLlxuXHRcdCAqIFVwZGF0ZXMgdGhlIHBvc2l0aW9uLCBicmluZ3MgdGhlIHBvcHVwIHRvIHRoZSB0b3Agb2YgdGhlIHotb3JkZXIgYW5kIHVuaGlkZXMgaXQuXG5cdFx0ICovXG5cdFx0c2hvdygpIHtcblx0XHRcdC8vIGRvY3VtZW50LnRpdGxlKz0ncyc7XG5cdFx0XHRpZiAodGhpcy5ub3Nob3cpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Ly8gZG9jdW1lbnQudGl0bGUrPSd0Jztcblx0XHRcdHRoaXMucmVwb3NpdGlvbigpO1xuXHRcdFx0dGhpcy5yYWlzZSgpO1xuXHRcdFx0dGhpcy51bmhpZGUoKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgbW91c2UgcG9pbnRlciBoYXNcblx0XHQgKiBzdGFiaWxpc2VkIChjaGVja2luZyBldmVyeSA8Y29kZT50aW1lPC9jb2RlPi8yIG1pbGxpc2Vjb25kcykgYW5kIHJ1bnMgdGhlXG5cdFx0ICoge0Bzb3VyY2UgI3Nob3d9IG1ldGhvZCBpZiBpdCBoYXMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2ludGVnZXJ9IHRpbWUgVGhlIG1pbmltdW0gdGltZSAobXMpIGJlZm9yZSB0aGUgcG9wdXAgbWF5IGJlIHNob3duLlxuXHRcdCAqL1xuXHRcdHNob3dTb29uSWZTdGFibGUodGltZSkge1xuXHRcdFx0bG9nKGBzaG93U29vbklmU3RhYmxlLCB0aW1lPSR7dGltZX1gKTtcblx0XHRcdGlmICh0aGlzLnZpc2libGUpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5ub3Nob3cgPSBmYWxzZTtcblx0XHRcdC8vIH4gaW5pdGlhbGl6ZSB0aGVzZSB2YXJpYWJsZXMgc28gdGhhdCB3ZSBuZXZlciBydW4gQHR0e3Nob3d9IGFmdGVyXG5cdFx0XHQvLyB+IGp1c3QgaGFsZiB0aGUgdGltZVxuXHRcdFx0dGhpcy5zdGFibGVfeCA9IC0xZTQ7XG5cdFx0XHR0aGlzLnN0YWJsZV95ID0gLTFlNDtcblx0XHRcdGNvbnN0IHN0YWJsZVNob3cgPSAoKSA9PiB7XG5cdFx0XHRcdGxvZygnc3RhYmxlU2hvdyBjYWxsZWQnKTtcblx0XHRcdFx0Y29uc3QgbmV3X3ggPSBOYXZwb3B1cC50cmFja2VyLng7XG5cdFx0XHRcdGNvbnN0IG5ld195ID0gTmF2cG9wdXAudHJhY2tlci55O1xuXHRcdFx0XHRjb25zdCBkeCA9IHNlbGYuc3RhYmxlX3ggLSBuZXdfeDtcblx0XHRcdFx0Y29uc3QgZHkgPSBzZWxmLnN0YWJsZV95IC0gbmV3X3k7XG5cdFx0XHRcdGNvbnN0IGZ1enoyID0gMDsgLy8gc2F2ZWRUaGlzLmZ1enogKiBzYXZlZFRoaXMuZnV6ejtcblx0XHRcdFx0Ly8gZG9jdW1lbnQudGl0bGUgKz0gJ1snICsgW3NhdmVkVGhpcy5zdGFibGVfeCxuZXdfeCwgc2F2ZWRUaGlzLnN0YWJsZV95LG5ld195LCBkeCwgZHksIGZ1enoyXS5qb2luKCcsJykgKyAnXSAnO1xuXHRcdFx0XHRpZiAoZHggKiBkeCA8PSBmdXp6MiAmJiBkeSAqIGR5IDw9IGZ1enoyKSB7XG5cdFx0XHRcdFx0bG9nKCdtb3VzZSBpcyBzdGFibGUnKTtcblx0XHRcdFx0XHRjbGVhckludGVydmFsKHNlbGYuc2hvd1Nvb25TdGFibGVUaW1lcik7XG5cdFx0XHRcdFx0c2VsZi5yZXBvc2l0aW9uKG5ld194ICsgMiwgbmV3X3kgKyAyKTtcblx0XHRcdFx0XHRzZWxmLnNob3coKTtcblx0XHRcdFx0XHRzZWxmLmxpbWl0SG9yaXpvbnRhbFBvc2l0aW9uKCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNlbGYuc3RhYmxlX3ggPSBuZXdfeDtcblx0XHRcdFx0c2VsZi5zdGFibGVfeSA9IG5ld195O1xuXHRcdFx0fTtcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0dGhpcy5zaG93U29vblN0YWJsZVRpbWVyID0gc2V0SW50ZXJ2YWwoc3RhYmxlU2hvdywgdGltZSAvIDIpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBTZXRzIHRoZSB7QHNvdXJjZSAjbm9zaG93fSBmbGFnIGFuZCBoaWRlcyB0aGUgcG9wdXAuIFRoaXMgc2hvdWxkIGJlIGNhbGxlZFxuXHRcdCAqIHdoZW4gdGhlIG1vdXNlIGxlYXZlcyB0aGUgbGluayBiZWZvcmVcblx0XHQgKiAob3IgYWZ0ZXIpIGl0J3MgYWN0dWFsbHkgYmVlbiBkaXNwbGF5ZWQuXG5cdFx0ICovXG5cdFx0YmFuaXNoKCkge1xuXHRcdFx0bG9nKCdiYW5pc2ggY2FsbGVkJyk7XG5cdFx0XHQvLyBoaWRlIGFuZCBwcmV2ZW50IHNob3dpbmcgd2l0aCBzaG93U29vbiBpbiB0aGUgZnV0dXJlXG5cdFx0XHR0aGlzLm5vc2hvdyA9IHRydWU7XG5cdFx0XHRpZiAodGhpcy5zaG93U29vblN0YWJsZVRpbWVyKSB7XG5cdFx0XHRcdGxvZygnY2xlYXJpbmcgc2hvd1Nvb25TdGFibGVUaW1lcicpO1xuXHRcdFx0XHRjbGVhckludGVydmFsKHRoaXMuc2hvd1Nvb25TdGFibGVUaW1lcik7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmhpZGUoKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogUnVucyBob29rcyBhZGRlZCB3aXRoIHtAc291cmNlICNhZGRIb29rfS5cblx0XHQgKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGtleSBLZXkgbmFtZSBvZiB0aGUge0Bzb3VyY2UgI2hvb2tzfSBhcnJheSAtIG9uZSBvZiAnY3JlYXRlJywgJ3VuaGlkZScsICdoaWRlJ1xuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB3aGVuIENvbnRyb2xzIGV4YWN0bHkgd2hlbiB0aGUgaG9vayBpcyBydW46IGVpdGhlciAnYmVmb3JlJyBvciAnYWZ0ZXInXG5cdFx0ICovXG5cdFx0cnVuSG9va3Moa2V5LCB3aGVuKSB7XG5cdFx0XHRpZiAoIXRoaXMuaG9va3Nba2V5XSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBrZXlIb29rcyA9IHRoaXMuaG9va3Nba2V5XTtcblx0XHRcdGNvbnN0IGxlbiA9IGtleUhvb2tzLmxlbmd0aDtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcblx0XHRcdFx0aWYgKGtleUhvb2tzW2ldICYmIGtleUhvb2tzW2ldLndoZW4gPT09IHdoZW4gJiYgUmVmbGVjdC5hcHBseShrZXlIb29rc1tpXS5ob29rLCB0aGlzLCBbXSkpIHtcblx0XHRcdFx0XHQvLyByZW1vdmUgdGhlIGhvb2tcblx0XHRcdFx0XHRpZiAoa2V5SG9va3NbaV0uaG9va0lkKSB7XG5cdFx0XHRcdFx0XHRkZWxldGUgdGhpcy5ob29rSWRzW2tleUhvb2tzW2ldLmhvb2tJZF07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGtleUhvb2tzW2ldID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHQvKipcblx0XHQgKiBBZGRzIGEgaG9vayB0byB0aGUgcG9wdXAuIEhvb2sgZnVuY3Rpb25zIGFyZSBydW4gd2l0aCA8Y29kZT50aGlzPC9jb2RlPiBzZXQgdG8gcmVmZXIgdG8gdGhlXG5cdFx0ICogTmF2cG9wdXAgaW5zdGFuY2UsIGFuZCBubyBhcmd1bWVudHMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBob29rIFRoZSBob29rIGZ1bmN0aW9uLiBGdW5jdGlvbnMgdGhhdCByZXR1cm4gdHJ1ZSBhcmUgZGVsZXRlZC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5IEtleSBuYW1lIG9mIHRoZSB7QHNvdXJjZSAjaG9va3N9IGFycmF5IC0gb25lIG9mICdjcmVhdGUnLCAndW5oaWRlJywgJ2hpZGUnXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHdoZW4gQ29udHJvbHMgZXhhY3RseSB3aGVuIHRoZSBob29rIGlzIHJ1bjogZWl0aGVyICdiZWZvcmUnIG9yICdhZnRlcidcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdWlkIEEgdHJ1dGh5IHN0cmluZyBpZGVudGlmeWluZyB0aGUgaG9vayBmdW5jdGlvbjsgaWYgaXQgbWF0Y2hlcyBhbm90aGVyIGhvb2tcblx0XHQgKiBpbiB0aGlzIHBvc2l0aW9uLCBpdCB3b24ndCBiZSBhZGRlZCBhZ2Fpbi5cblx0XHQgKi9cblx0XHRhZGRIb29rKGhvb2ssIGtleSwgd2hlbiwgdWlkKSB7XG5cdFx0XHR3aGVuIHx8PSAnYWZ0ZXInO1xuXHRcdFx0aWYgKCF0aGlzLmhvb2tzW2tleV0pIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Ly8gaWYgdWlkIGlzIHNwZWNpZmllZCwgZG9uJ3QgYWRkIGR1cGxpY2F0ZXNcblx0XHRcdGxldCBob29rSWQ7XG5cdFx0XHRpZiAodWlkKSB7XG5cdFx0XHRcdGhvb2tJZCA9IFtrZXksIHdoZW4sIHVpZF0uam9pbignfCcpO1xuXHRcdFx0XHRpZiAodGhpcy5ob29rSWRzW2hvb2tJZF0pIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5ob29rSWRzW2hvb2tJZF0gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5ob29rc1trZXldLnB1c2goe1xuXHRcdFx0XHRob29rLFxuXHRcdFx0XHR3aGVuLFxuXHRcdFx0XHRob29rSWQsXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQ3JlYXRlcyB0aGUgbWFpbiBESVYgZWxlbWVudCwgd2hpY2ggY29udGFpbnMgYWxsIHRoZSBhY3R1YWwgcG9wdXAgY29udGVudC5cblx0XHQgKiBSdW5zIGhvb2tzIHdpdGgga2V5ICdjcmVhdGUnLlxuXHRcdCAqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRjcmVhdGVNYWluRGl2KCkge1xuXHRcdFx0aWYgKHRoaXMubWFpbkRpdikge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnJ1bkhvb2tzKCdjcmVhdGUnLCAnYmVmb3JlJyk7XG5cdFx0XHRjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdG1haW5EaXYub25jbGljayA9IChlKSA9PiB7XG5cdFx0XHRcdHNlbGYub25jbGlja0xpc3RlbmVyKGUpO1xuXHRcdFx0fTtcblx0XHRcdG1haW5EaXYuY2xhc3NOYW1lID0gdGhpcy5jbGFzc05hbWUgPz8gJ25hdnBvcHVwX21haW5kaXYnO1xuXHRcdFx0bWFpbkRpdi5pZCA9IG1haW5EaXYuY2xhc3NOYW1lICsgdGhpcy51aWQ7XG5cdFx0XHRtYWluRGl2LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcblx0XHRcdG1haW5EaXYuc3R5bGUubWluV2lkdGggPSAnMzUwcHgnO1xuXHRcdFx0bWFpbkRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0bWFpbkRpdi5jbGFzc05hbWUgPSAnbmF2cG9wdXAnO1xuXHRcdFx0Ly8gZWFzeSBhY2Nlc3MgdG8gamF2YXNjcmlwdCBvYmplY3QgdGhyb3VnaCBET00gZnVuY3Rpb25zXG5cdFx0XHRtYWluRGl2Lm5hdnBvcHVwID0gdGhpcztcblx0XHRcdHRoaXMubWFpbkRpdiA9IG1haW5EaXY7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kKG1haW5EaXYpO1xuXHRcdFx0dGhpcy5ydW5Ib29rcygnY3JlYXRlJywgJ2FmdGVyJyk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIENhbGxzIHRoZSB7QHNvdXJjZSAjcmFpc2V9IG1ldGhvZC5cblx0XHQgKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0b25jbGlja0xpc3RlbmVyKCkge1xuXHRcdFx0dGhpcy5yYWlzZSgpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBNYWtlcyB0aGUgcG9wdXAgZHJhZ2dhYmxlLCB1c2luZyBhIHtAc291cmNlIERyYWd9IG9iamVjdC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBoYW5kbGVOYW1lXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRtYWtlRHJhZ2dhYmxlKGhhbmRsZU5hbWUpIHtcblx0XHRcdGlmICghdGhpcy5tYWluRGl2KSB7XG5cdFx0XHRcdHRoaXMuY3JlYXRlTWFpbkRpdigpO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgZHJhZyA9IG5ldyBEcmFnKCk7XG5cdFx0XHRpZiAoIWhhbmRsZU5hbWUpIHtcblx0XHRcdFx0ZHJhZy5zdGFydENvbmRpdGlvbiA9IChlKSA9PiB7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdGlmICghZS5zaGlmdEtleSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0bGV0IGRyYWdIYW5kbGU7XG5cdFx0XHRpZiAoaGFuZGxlTmFtZSkge1xuXHRcdFx0XHRkcmFnSGFuZGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aGFuZGxlTmFtZX1gKTtcblx0XHRcdH1cblx0XHRcdGRyYWdIYW5kbGUgfHw9IHRoaXMubWFpbkRpdjtcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0ZHJhZy5lbmRIb29rID0gKHgsIHkpID0+IHtcblx0XHRcdFx0TmF2cG9wdXAudHJhY2tlci5kaXJ0eSA9IHRydWU7XG5cdFx0XHRcdHNlbGYucmVwb3NpdGlvbih4LCB5KTtcblx0XHRcdH07XG5cdFx0XHRkcmFnLmluaXQoZHJhZ0hhbmRsZSwgdGhpcy5tYWluRGl2KTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogSGlkZXMgdGhlIHBvcHVwIHVzaW5nIENTUy4gUnVucyBob29rcyB3aXRoIGtleSAnaGlkZScuXG5cdFx0ICogU2V0cyB7QHNvdXJjZSAjdmlzaWJsZX0gYXBwcm9wcmlhdGVseS5cblx0XHQgKiB7QHNvdXJjZSAjYmFuaXNofSBzaG91bGQgYmUgY2FsbGVkIGV4dGVybmFsbHkgaW5zdGVhZCBvZiB0aGlzIG1ldGhvZC5cblx0XHQgKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0aGlkZSgpIHtcblx0XHRcdHRoaXMucnVuSG9va3MoJ2hpZGUnLCAnYmVmb3JlJyk7XG5cdFx0XHR0aGlzLmFib3J0RG93bmxvYWRzKCk7XG5cdFx0XHRpZiAodGhpcy52aXNpYmxlICE9PSB1bmRlZmluZWQgJiYgdGhpcy52aXNpYmxlKSB7XG5cdFx0XHRcdHRoaXMubWFpbkRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR0aGlzLnZpc2libGUgPSBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHRoaXMucnVuSG9va3MoJ2hpZGUnLCAnYWZ0ZXInKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogU2hvd3MgdGhlIHBvcHVwIHVzaW5nIENTUy4gUnVucyBob29rcyB3aXRoIGtleSAndW5oaWRlJy5cblx0XHQgKiBTZXRzIHtAc291cmNlICN2aXNpYmxlfSBhcHByb3ByaWF0ZWx5LiAgIHtAc291cmNlICNzaG93fSBzaG91bGQgYmUgY2FsbGVkIGV4dGVybmFsbHkgaW5zdGVhZCBvZiB0aGlzIG1ldGhvZC5cblx0XHQgKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0dW5oaWRlKCkge1xuXHRcdFx0dGhpcy5ydW5Ib29rcygndW5oaWRlJywgJ2JlZm9yZScpO1xuXHRcdFx0aWYgKHRoaXMudmlzaWJsZSAhPT0gdW5kZWZpbmVkICYmICF0aGlzLnZpc2libGUpIHtcblx0XHRcdFx0dGhpcy5tYWluRGl2LnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcblx0XHRcdFx0dGhpcy52aXNpYmxlID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHRoaXMucnVuSG9va3MoJ3VuaGlkZScsICdhZnRlcicpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBTZXRzIHRoZSA8Y29kZT5pbm5lckhUTUw8L2NvZGU+IGF0dHJpYnV0ZSBvZiB0aGUgbWFpbiBkaXYgY29udGFpbmluZyB0aGUgcG9wdXAgY29udGVudC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBodG1sIFRoZSBIVE1MIHRvIHNldC5cblx0XHQgKi9cblx0XHRzZXRJbm5lckhUTUwoaHRtbCkge1xuXHRcdFx0dGhpcy5tYWluRGl2LmlubmVySFRNTCA9IGh0bWw7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFVwZGF0ZXMgdGhlIHtAc291cmNlICN3aWR0aH0gYW5kIHtAc291cmNlICNoZWlnaHR9IGF0dHJpYnV0ZXMgd2l0aCB0aGUgQ1NTIHByb3BlcnRpZXMuXG5cdFx0ICpcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHVwZGF0ZURpbWVuc2lvbnMoKSB7XG5cdFx0XHR0aGlzLndpZHRoID0gTnVtYmVyLnBhcnNlSW50KHRoaXMubWFpbkRpdi5vZmZzZXRXaWR0aCwgMTApO1xuXHRcdFx0dGhpcy5oZWlnaHQgPSBOdW1iZXIucGFyc2VJbnQodGhpcy5tYWluRGl2Lm9mZnNldEhlaWdodCwgMTApO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBDaGVja3MgaWYgdGhlIHBvaW50ICh4LHkpIGlzIHdpdGhpbiB7QHNvdXJjZSAjZnV6en0gb2YgdGhlXG5cdFx0ICoge0Bzb3VyY2UgI21haW5EaXZ9LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtpbnRlZ2VyfSB4IHgtY29vcmRpbmF0ZSAocHgpXG5cdFx0ICogQHBhcmFtIHtpbnRlZ2VyfSB5IHktY29vcmRpbmF0ZSAocHgpXG5cdFx0ICogQHR5cGUgYm9vbGVhblxuXHRcdCAqL1xuXHRcdGlzV2l0aGluKHgsIHkpIHtcblx0XHRcdC8vIH4gSWYgd2UncmUgbm90IGV2ZW4gdmlzaWJsZSwgbm8gcG9pbnQgc2hvdWxkIGJlIGNvbnNpZGVyZWQgYXNcblx0XHRcdC8vIH4gYmVpbmcgd2l0aGluIHRoZSBwb3B1cC5cblx0XHRcdGlmICghdGhpcy52aXNpYmxlKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHRoaXMudXBkYXRlRGltZW5zaW9ucygpO1xuXHRcdFx0Y29uc3QgZnV6eiA9IHRoaXMuZnV6eiB8fCAwO1xuXHRcdFx0Ly8gfiBVc2UgYSBzaW1wbGUgYm94IG1ldHJpYyBoZXJlLlxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0eCArIGZ1enogPj0gdGhpcy5sZWZ0ICYmXG5cdFx0XHRcdHggLSBmdXp6IDw9IHRoaXMubGVmdCArIHRoaXMud2lkdGggJiZcblx0XHRcdFx0eSArIGZ1enogPj0gdGhpcy50b3AgJiZcblx0XHRcdFx0eSAtIGZ1enogPD0gdGhpcy50b3AgKyB0aGlzLmhlaWdodFxuXHRcdFx0KTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQWRkcyBhIGRvd25sb2FkIHRvIHtAc291cmNlICNkb3dubG9hZHN9LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtEb3dubG9hZGVyfSBkb3dubG9hZFxuXHRcdCAqL1xuXHRcdGFkZERvd25sb2FkKGRvd25sb2FkKSB7XG5cdFx0XHRpZiAoIWRvd25sb2FkKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRoaXMuZG93bmxvYWRzLnB1c2goZG93bmxvYWQpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBBYm9ydHMgdGhlIGRvd25sb2FkcyBsaXN0ZWQgaW4ge0Bzb3VyY2UgI2Rvd25sb2Fkc30uXG5cdFx0ICpcblx0XHQgKiBAc2VlIERvd25sb2FkZXIjYWJvcnRcblx0XHQgKi9cblx0XHRhYm9ydERvd25sb2FkcygpIHtcblx0XHRcdGZvciAoY29uc3QgZCBvZiB0aGlzLmRvd25sb2Fkcykge1xuXHRcdFx0XHRpZiAoZCAmJiBkLmFib3J0KSB7XG5cdFx0XHRcdFx0ZC5hYm9ydCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmRvd25sb2FkcyA9IFtdO1xuXHRcdH1cblx0fVxuXHQvKipcblx0ICogQSBVSUQgZm9yIGVhY2ggTmF2cG9wdXAuIFRoaXMgY29uc3RydWN0b3IgcHJvcGVydHkgaXMganVzdCBhIGNvdW50ZXIuXG5cdCAqXG5cdCAqIEB0eXBlIGludGVnZXJcblx0ICogQHByaXZhdGVcblx0ICovXG5cdE5hdnBvcHVwLnVpZCA9IDA7XG5cdC8qKlxuXHQgKiBDb3VudGVyIGluZGljYXRpbmcgdGhlIHotb3JkZXIgb2YgdGhlIFwiaGlnaGVzdFwiIHBvcHVwLlxuXHQgKiBXZSBzdGFydCB0aGUgei1pbmRleCBhdCAxMDAwIHNvIHRoYXQgcG9wdXBzIGFyZSBhYm92ZSBldmVyeXRoaW5nXG5cdCAqIGVsc2Ugb24gdGhlIHNjcmVlbi5cblx0ICpcblx0ICogQHByaXZhdGVcblx0ICogQHR5cGUgaW50ZWdlclxuXHQgKi9cblx0TmF2cG9wdXAuaGlnaGVzdCA9IDEwMDA7XG5cdC8qKlxuXHQgKiBBIHtAc291cmNlIE1vdXNldHJhY2tlcn0gaW5zdGFuY2Ugd2hpY2ggaXMgYSBwcm9wZXJ0eSBvZiB0aGUgY29uc3RydWN0b3IgKHBzZXVkby1nbG9iYWwpLlxuXHQgKi9cblx0TmF2cG9wdXAudHJhY2tlciA9IG5ldyBNb3VzZXRyYWNrZXIoKTtcblx0Ly8gRU5ERklMRTogbmF2cG9wdXAuanNcblx0Ly8gU1RBUlRGSUxFOiBkaWZmLmpzXG5cdC8qKlxuXHQgKiBKYXZhc2NyaXB0IERpZmYgQWxnb3JpdGhtIEJ5IEpvaG4gUmVzaWcgKGh0dHA6Ly9lam9obi5vcmcvKSBhbmQgTHVwaW5cblx0ICpcblx0ICogTW9yZSBJbmZvOiBodHRwOi8vZWpvaG4ub3JnL3Byb2plY3RzL2phdmFzY3JpcHQtZGlmZi1hbGdvcml0aG0vXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nW119IHhcblx0ICovXG5cdGNvbnN0IGRlbEZtdCA9ICh4KSA9PiB7XG5cdFx0aWYgKHgubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXHRcdHJldHVybiBgPGRlbCBjbGFzcz0ncG9wdXBEaWZmJz4ke3guam9pbignJyl9PC9kZWw+YDtcblx0fTtcblx0Y29uc3QgaW5zRm10ID0gKHgpID0+IHtcblx0XHRpZiAoeC5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cdFx0cmV0dXJuIGA8aW5zIGNsYXNzPSdwb3B1cERpZmYnPiR7eC5qb2luKCcnKX08L2lucz5gO1xuXHR9O1xuXHRjb25zdCBjb3VudENyb3NzaW5ncyA9IChhLCBiLCBpLCBlamVjdCkgPT4ge1xuXHRcdC8vIGNvdW50IHRoZSBjcm9zc2luZ3Mgb24gdGhlIGVkZ2Ugc3RhcnRpbmcgYXQgYltpXVxuXHRcdGlmICghYltpXS5yb3cgJiYgYltpXS5yb3cgIT09IDApIHtcblx0XHRcdHJldHVybiAtMTtcblx0XHR9XG5cdFx0bGV0IGNvdW50ID0gMDtcblx0XHRmb3IgKGNvbnN0IFtqLCBlbGVtZW50XSBvZiBhLmVudHJpZXMoKSkge1xuXHRcdFx0aWYgKCFlbGVtZW50LnJvdyAmJiBlbGVtZW50LnJvdyAhPT0gMCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGlmICgoaiAtIGJbaV0ucm93KSAqIChpIC0gZWxlbWVudC5yb3cpID4gMCkge1xuXHRcdFx0XHRpZiAoZWplY3QpIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb3VudCsrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gY291bnQ7XG5cdH07XG5cdGNvbnN0IHNob3J0ZW5EaWZmU3RyaW5nID0gZnVuY3Rpb24gc2hvcnRlbkRpZmZTdHJpbmcoc3RyLCBjb250ZXh0KSB7XG5cdFx0Y29uc3QgcmUgPSAvKDxkZWxbXFxTXFxzXSo/PFxcL2RlbD58PGluc1tcXFNcXHNdKj88XFwvaW5zPikvO1xuXHRcdGNvbnN0IHNwbGl0dGVkID0gc3RyLnNwbGl0KHJlKTtcblx0XHRsZXQgcmV0ID0gWycnXTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNwbGl0dGVkLmxlbmd0aDsgaSArPSAyKSB7XG5cdFx0XHRpZiAoc3BsaXR0ZWRbaV0ubGVuZ3RoIDwgMiAqIGNvbnRleHQpIHtcblx0XHRcdFx0cmV0W3JldC5sZW5ndGggLSAxXSArPSBzcGxpdHRlZFtpXTtcblx0XHRcdFx0aWYgKGkgKyAxIDwgc3BsaXR0ZWQubGVuZ3RoKSB7XG5cdFx0XHRcdFx0cmV0W3JldC5sZW5ndGggLSAxXSArPSBzcGxpdHRlZFtpICsgMV07XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoaSA+IDApIHtcblx0XHRcdFx0XHRyZXRbcmV0Lmxlbmd0aCAtIDFdICs9IHNwbGl0dGVkW2ldLnNsaWNlKDAsIE1hdGgubWF4KDAsIGNvbnRleHQpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoaSArIDEgPCBzcGxpdHRlZC5sZW5ndGgpIHtcblx0XHRcdFx0XHRyZXQucHVzaChzcGxpdHRlZFtpXS5zbGljZShNYXRoLm1heCgwLCBzcGxpdHRlZFtpXS5sZW5ndGggLSBjb250ZXh0KSkgKyBzcGxpdHRlZFtpICsgMV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHdoaWxlIChyZXQubGVuZ3RoID4gMCAmJiAhcmV0WzBdKSB7XG5cdFx0XHRyZXQgPSByZXQuc2xpY2UoMSk7XG5cdFx0fVxuXHRcdHJldHVybiByZXQ7XG5cdH07XG5cdGNvbnN0IGRpZmZTdHJpbmcgPSAobywgbikgPT4ge1xuXHRcdC8vICBXZSBuZWVkIHRvIHNwbGl0IHRoZSBzdHJpbmdzIG8gYW5kIG4gZmlyc3QsIGFuZCBlbnRpZnkoKSB0aGUgcGFydHNcblx0XHQvLyAgaW5kaXZpZHVhbGx5LCBzbyB0aGF0IHRoZSBIVE1MIGVudGl0aWVzIGFyZSBuZXZlciBjdXQgYXBhcnQuIChBeGVsQm9sZHQpXG5cdFx0bGV0IGk7XG5cdFx0Y29uc3Qgb1NwbGl0dGVkID0gby5zcGxpdCgvXFxiLyk7XG5cdFx0Y29uc3QgblNwbGl0dGVkID0gbi5zcGxpdCgvXFxiLyk7XG5cdFx0Zm9yIChpID0gMDsgaSA8IG9TcGxpdHRlZC5sZW5ndGg7ICsraSkge1xuXHRcdFx0b1NwbGl0dGVkW2ldID0gb1NwbGl0dGVkW2ldLmVudGlmeSgpO1xuXHRcdH1cblx0XHRmb3IgKGkgPSAwOyBpIDwgblNwbGl0dGVkLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRuU3BsaXR0ZWRbaV0gPSBuU3BsaXR0ZWRbaV0uZW50aWZ5KCk7XG5cdFx0fVxuXHRcdGNvbnN0IG91dCA9IGRpZmYob1NwbGl0dGVkLCBuU3BsaXR0ZWQpO1xuXHRcdGxldCBzdHIgPSAnJztcblx0XHRsZXQgYWNjID0gW107IC8vIGFjY3VtdWxhdG9yIGZvciBwcmV0dGllciBvdXRwdXRcblxuXHRcdC8vIGNyb3NzaW5nIHBhaXJpbmdzIC0tIGVnICdBIEInIHZzICdCIEEnIC0tIGNhdXNlIHByb2JsZW1zLCBzbyBsZXQncyBpcm9uIHRoZW0gb3V0XG5cdFx0Ly8gdGhpcyBkb2Vzbid0IGFsd2F5cyBkbyB0aGluZ3Mgb3B0aW1hbGx5IGJ1dCBpdCBzaG91bGQgYmUgZmFzdCBlbm91Z2hcblx0XHRsZXQgbWF4T3V0cHV0UGFpciA9IDA7XG5cdFx0Zm9yIChpID0gMDsgaSA8IG91dC5uLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRpZiAob3V0Lm5baV0ucGFpcmVkKSB7XG5cdFx0XHRcdGlmIChtYXhPdXRwdXRQYWlyID4gb3V0Lm5baV0ucm93KSB7XG5cdFx0XHRcdFx0Ly8gdGFuZ2xlIC0gZGVsZXRlIHBhaXJpbmdcblx0XHRcdFx0XHRvdXQub1tvdXQubltpXS5yb3ddID0gb3V0Lm9bb3V0Lm5baV0ucm93XS50ZXh0O1xuXHRcdFx0XHRcdG91dC5uW2ldID0gb3V0Lm5baV0udGV4dDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAobWF4T3V0cHV0UGFpciA8IG91dC5uW2ldLnJvdykge1xuXHRcdFx0XHRcdG1heE91dHB1dFBhaXIgPSBvdXQubltpXS5yb3c7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gb3V0cHV0IHRoZSBzdHVmZiBwcmVjZWRpbmcgdGhlIGZpcnN0IHBhaXJlZCBvbGQgbGluZVxuXHRcdGZvciAoaSA9IDA7IGkgPCBvdXQuby5sZW5ndGggJiYgIW91dC5vW2ldLnBhaXJlZDsgKytpKSB7XG5cdFx0XHRhY2MucHVzaChvdXQub1tpXSk7XG5cdFx0fVxuXHRcdHN0ciArPSBkZWxGbXQoYWNjKTtcblx0XHRhY2MgPSBbXTtcblx0XHQvLyBtYWluIGxvb3Bcblx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0Lm4ubGVuZ3RoOyArK2kpIHtcblx0XHRcdC8vIG91dHB1dCB1bnBhaXJlZCBuZXcgXCJsaW5lc1wiXG5cdFx0XHR3aGlsZSAoaSA8IG91dC5uLmxlbmd0aCAmJiAhb3V0Lm5baV0ucGFpcmVkKSB7XG5cdFx0XHRcdGFjYy5wdXNoKG91dC5uW2krK10pO1xuXHRcdFx0fVxuXHRcdFx0c3RyICs9IGluc0ZtdChhY2MpO1xuXHRcdFx0YWNjID0gW107XG5cdFx0XHRpZiAoaSA8IG91dC5uLmxlbmd0aCkge1xuXHRcdFx0XHQvLyB0aGlzIG5ldyBcImxpbmVcIiBpcyBwYWlyZWQgd2l0aCB0aGUgKG91dC5uW2ldLnJvdyl0aCBvbGQgXCJsaW5lXCJcblx0XHRcdFx0c3RyICs9IG91dC5uW2ldLnRleHQ7XG5cdFx0XHRcdC8vIG91dHB1dCB1bnBhaXJlZCBvbGQgcm93cyBzdGFydGluZyBhZnRlciB0aGlzIG5ldyBsaW5lJ3MgcGFydG5lclxuXHRcdFx0XHRsZXQgbSA9IG91dC5uW2ldLnJvdyArIDE7XG5cdFx0XHRcdHdoaWxlIChtIDwgb3V0Lm8ubGVuZ3RoICYmICFvdXQub1ttXS5wYWlyZWQpIHtcblx0XHRcdFx0XHRhY2MucHVzaChvdXQub1ttKytdKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzdHIgKz0gZGVsRm10KGFjYyk7XG5cdFx0XHRcdGFjYyA9IFtdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gc3RyO1xuXHR9O1xuXHQvLyBzZWUge0BsaW5rIGh0dHA6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vZG9jcy9Db3JlX0phdmFTY3JpcHRfMS41X1JlZmVyZW5jZTpHbG9iYWxfT2JqZWN0czpPYmplY3R9XG5cdC8vIEZJWE1FOiB1c2Ugb2JqLmhhc093blByb3BlcnR5IGluc3RlYWQgb2YgdGhpcyBrbHVkZ2UhXG5cdGNvbnN0IGpzUmVzZXJ2ZWRQcm9wZXJ0aWVzID0gbmV3IFJlZ0V4cChcblx0XHQnXihjb25zdHJ1Y3Rvcnxwcm90b3R5cGV8X18oKGRlZmluZXxsb29rdXApW0dTXWV0dGVyKV9fJyArXG5cdFx0XHQnfGV2YWx8aGFzT3duUHJvcGVydHl8cHJvcGVydHlJc0VudW1lcmFibGUnICtcblx0XHRcdCd8dG8oU291cmNlfFN0cmluZ3xMb2NhbGVTdHJpbmcpfCh1bik/d2F0Y2h8dmFsdWVPZikkJ1xuXHQpO1xuXHRjb25zdCBkaWZmQnVnQWxlcnQgPSBmdW5jdGlvbiBkaWZmQnVnQWxlcnQod29yZCkge1xuXHRcdGlmICghZGlmZkJ1Z0FsZXJ0Lmxpc3Rbd29yZF0pIHtcblx0XHRcdGRpZmZCdWdBbGVydC5saXN0W3dvcmRdID0gMTtcblx0XHRcdHZvaWQgbXcubm90aWZ5KGBCYWQgd29yZDogJHt3b3JkfVxcblxcblBsZWFzZSByZXBvcnQgdGhpcyBidWcuYCwge3RhZzogJ3BvcHVwcycsIHR5cGU6ICdlcnJvcid9KTtcblx0XHR9XG5cdH07XG5cdGRpZmZCdWdBbGVydC5saXN0ID0ge307XG5cdGNvbnN0IG1ha2VEaWZmSGFzaHRhYmxlID0gKHNyYykgPT4ge1xuXHRcdGNvbnN0IHJldCA9IHt9O1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc3JjLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoanNSZXNlcnZlZFByb3BlcnRpZXMudGVzdChzcmNbaV0pKSB7XG5cdFx0XHRcdHNyY1tpXSArPSAnPCEtLSAtLT4nO1xuXHRcdFx0fVxuXHRcdFx0cmV0W3NyY1tpXV0gPz89IFtdO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cmV0W3NyY1tpXV0ucHVzaChpKTtcblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRkaWZmQnVnQWxlcnQoc3JjW2ldKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJldDtcblx0fTtcblx0Y29uc3QgZGlmZiA9IChvLCBuKSA9PiB7XG5cdFx0Ly8gcGFzcyAxOiBtYWtlIGhhc2h0YWJsZSBucyB3aXRoIG5ldyByb3dzIGFzIGtleXNcblx0XHRjb25zdCBucyA9IG1ha2VEaWZmSGFzaHRhYmxlKG4pO1xuXHRcdC8vIHBhc3MgMjogbWFrZSBoYXNodGFibGUgb3Mgd2l0aCBvbGQgcm93cyBhcyBrZXlzXG5cdFx0Y29uc3Qgb3MgPSBtYWtlRGlmZkhhc2h0YWJsZShvKTtcblx0XHQvLyBwYXNzIDM6IHBhaXIgdW5pcXVlIG5ldyByb3dzIGFuZCBtYXRjaGluZyB1bmlxdWUgb2xkIHJvd3Ncblx0XHRsZXQgaTtcblx0XHRmb3IgKGkgaW4gbnMpIHtcblx0XHRcdGlmIChuc1tpXS5sZW5ndGggPT09IDEgJiYgb3NbaV0gJiYgb3NbaV0ubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdG5bbnNbaV1bMF1dID0ge1xuXHRcdFx0XHRcdHRleHQ6IG5bbnNbaV1bMF1dLFxuXHRcdFx0XHRcdHJvdzogb3NbaV1bMF0sXG5cdFx0XHRcdFx0cGFpcmVkOiB0cnVlLFxuXHRcdFx0XHR9O1xuXHRcdFx0XHRvW29zW2ldWzBdXSA9IHtcblx0XHRcdFx0XHR0ZXh0OiBvW29zW2ldWzBdXSxcblx0XHRcdFx0XHRyb3c6IG5zW2ldWzBdLFxuXHRcdFx0XHRcdHBhaXJlZDogdHJ1ZSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gcGFzcyA0OiBwYWlyIG1hdGNoaW5nIHJvd3MgaW1tZWRpYXRlbHkgZm9sbG93aW5nIHBhaXJlZCByb3dzIChub3QgbmVjZXNzYXJpbHkgdW5pcXVlKVxuXHRcdGZvciAoaSA9IDA7IGkgPCBuLmxlbmd0aCAtIDE7IGkrKykge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuW2ldLnBhaXJlZCAmJlxuXHRcdFx0XHQhbltpICsgMV0ucGFpcmVkICYmXG5cdFx0XHRcdG5baV0ucm93ICsgMSA8IG8ubGVuZ3RoICYmXG5cdFx0XHRcdCFvW25baV0ucm93ICsgMV0ucGFpcmVkICYmXG5cdFx0XHRcdG5baSArIDFdID09PSBvW25baV0ucm93ICsgMV1cblx0XHRcdCkge1xuXHRcdFx0XHRuW2kgKyAxXSA9IHtcblx0XHRcdFx0XHR0ZXh0OiBuW2kgKyAxXSxcblx0XHRcdFx0XHRyb3c6IG5baV0ucm93ICsgMSxcblx0XHRcdFx0XHRwYWlyZWQ6IHRydWUsXG5cdFx0XHRcdH07XG5cdFx0XHRcdG9bbltpXS5yb3cgKyAxXSA9IHtcblx0XHRcdFx0XHR0ZXh0OiBvW25baV0ucm93ICsgMV0sXG5cdFx0XHRcdFx0cm93OiBpICsgMSxcblx0XHRcdFx0XHRwYWlyZWQ6IHRydWUsXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIHBhc3MgNTogcGFpciBtYXRjaGluZyByb3dzIGltbWVkaWF0ZWx5IHByZWNlZGluZyBwYWlyZWQgcm93cyAobm90IG5lY2Vzc2FyaWx5IHVuaXF1ZSlcblx0XHRmb3IgKGkgPSBuLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bltpXS5wYWlyZWQgJiZcblx0XHRcdFx0IW5baSAtIDFdLnBhaXJlZCAmJlxuXHRcdFx0XHRuW2ldLnJvdyA+IDAgJiZcblx0XHRcdFx0IW9bbltpXS5yb3cgLSAxXS5wYWlyZWQgJiZcblx0XHRcdFx0bltpIC0gMV0gPT09IG9bbltpXS5yb3cgLSAxXVxuXHRcdFx0KSB7XG5cdFx0XHRcdG5baSAtIDFdID0ge1xuXHRcdFx0XHRcdHRleHQ6IG5baSAtIDFdLFxuXHRcdFx0XHRcdHJvdzogbltpXS5yb3cgLSAxLFxuXHRcdFx0XHRcdHBhaXJlZDogdHJ1ZSxcblx0XHRcdFx0fTtcblx0XHRcdFx0b1tuW2ldLnJvdyAtIDFdID0ge1xuXHRcdFx0XHRcdHRleHQ6IG9bbltpXS5yb3cgLSAxXSxcblx0XHRcdFx0XHRyb3c6IGkgLSAxLFxuXHRcdFx0XHRcdHBhaXJlZDogdHJ1ZSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdG8sXG5cdFx0XHRuLFxuXHRcdH07XG5cdH07XG5cdC8vIEVOREZJTEU6IGRpZmYuanNcblx0Ly8gU1RBUlRGSUxFOiBpbml0LmpzXG5cdGNvbnN0IHNldFNpdGVJbmZvID0gKCkgPT4ge1xuXHRcdGlmICh3aW5kb3cucG9wdXBMb2NhbERlYnVnKSB7XG5cdFx0XHRwZy53aWtpLmhvc3RuYW1lID0gJ2VuLndpa2lwZWRpYS5vcmcnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwZy53aWtpLmhvc3RuYW1lID0gbG9jYXRpb24uaG9zdG5hbWU7IC8vIHVzZSBpbiBwcmVmZXJlbmNlIHRvIGxvY2F0aW9uLmhvc3RuYW1lIGZvciBmbGV4aWJpbGl0eSAoPylcblx0XHR9XG5cdFx0cGcud2lraS53aWtpbWVkaWEgPVxuXHRcdFx0Lyh3aWtpKFttcF1lZGlhfHNvdXJjZXxib29rc3xuZXdzfHF1b3RlfHZlcnNpdHl8c3BlY2llc3x2b3lhZ2V8ZGF0YSl8bWV0YXdpa2l8d2lrdGlvbmFyeXxtZWRpYXdpa2kpXFwub3JnLy50ZXN0KFxuXHRcdFx0XHRwZy53aWtpLmhvc3RuYW1lXG5cdFx0XHQpO1xuXHRcdHBnLndpa2kud2lraWEgPSAvXFwud2lraWFcXC5jb20kL2kudGVzdChwZy53aWtpLmhvc3RuYW1lKTtcblx0XHRwZy53aWtpLmlzTG9jYWwgPSBwZy53aWtpLmhvc3RuYW1lLnN0YXJ0c1dpdGgoJ2xvY2FsaG9zdCcpO1xuXHRcdHBnLndpa2kuY29tbW9ucyA9XG5cdFx0XHRwZy53aWtpLndpa2ltZWRpYSAmJiBwZy53aWtpLmhvc3RuYW1lICE9PSAnY29tbW9ucy53aWtpbWVkaWEub3JnJyA/ICdjb21tb25zLndpa2ltZWRpYS5vcmcnIDogbnVsbDtcblx0XHRwZy53aWtpLmxhbmcgPSBtdy5jb25maWcuZ2V0KCd3Z0NvbnRlbnRMYW5ndWFnZScpO1xuXHRcdGNvbnN0IHBvcnQgPSBsb2NhdGlvbi5wb3J0ID8gYDoke2xvY2F0aW9uLnBvcnR9YCA6ICcnO1xuXHRcdHBnLndpa2kuc2l0ZWJhc2UgPSBwZy53aWtpLmhvc3RuYW1lICsgcG9ydDtcblx0fTtcblx0Y29uc3Qgc2V0VXNlckluZm8gPSAoKSA9PiB7XG5cdFx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0bGlzdDogJ3VzZXJzJyxcblx0XHRcdHVzdXNlcnM6IG13LmNvbmZpZy5nZXQoJ3dnVXNlck5hbWUnKSxcblx0XHRcdHVzcHJvcDogJ3JpZ2h0cycsXG5cdFx0fTtcblx0XHRwZy51c2VyLmNhblJldmlldyA9IGZhbHNlO1xuXHRcdGlmIChnZXRWYWx1ZU9mKCdwb3B1cFJldmlldycpKSB7XG5cdFx0XHRnZXRNd0FwaSgpXG5cdFx0XHRcdC5nZXQocGFyYW1zKVxuXHRcdFx0XHQuZG9uZSgoZGF0YSkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IFt7cmlnaHRzfV0gPSBkYXRhLnF1ZXJ5LnVzZXJzO1xuXHRcdFx0XHRcdHBnLnVzZXIuY2FuUmV2aWV3ID0gcmlnaHRzLmluY2x1ZGVzKCdyZXZpZXcnKTsgLy8gVE9ETzogU2hvdWxkIGl0IGJlIGEgZ2V0VmFsdWVPZignUmV2aWV3UmlnaHQnKSA/XG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgZmV0Y2hTcGVjaWFsUGFnZU5hbWVzID0gKCkgPT4ge1xuXHRcdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0bWV0YTogJ3NpdGVpbmZvJyxcblx0XHRcdHNpcHJvcDogJ3NwZWNpYWxwYWdlYWxpYXNlcycsXG5cdFx0XHR1c2VsYW5nOiAnY29udGVudCcsXG5cdFx0XHQvLyBjYWNoZSBmb3IgYW4gaG91clxuXHRcdFx0c21heGFnZTogMzYwMCxcblx0XHRcdG1heGFnZTogMzYwMCxcblx0XHR9O1xuXHRcdHJldHVybiBnZXRNd0FwaSgpXG5cdFx0XHQuZ2V0KHBhcmFtcylcblx0XHRcdC50aGVuKChkYXRhKSA9PiB7XG5cdFx0XHRcdHBnLndpa2kuc3BlY2lhbHBhZ2VhbGlhc2VzID0gZGF0YS5xdWVyeS5zcGVjaWFscGFnZWFsaWFzZXM7XG5cdFx0XHR9KTtcblx0fTtcblx0Y29uc3Qgc2V0VGl0bGVCYXNlID0gKCkgPT4ge1xuXHRcdGNvbnN0IHByb3RvY29sID0gd2luZG93LnBvcHVwTG9jYWxEZWJ1ZyA/ICdodHRwOicgOiBsb2NhdGlvbi5wcm90b2NvbDtcblx0XHRwZy53aWtpLmFydGljbGVQYXRoID0gbXcuY29uZmlnLmdldCgnd2dBcnRpY2xlUGF0aCcpLnJlcGxhY2UoL1xcL1xcJDEvLCAnJyk7IC8vIGFzIGluIGh0dHA6Ly9zb21lLnRoaW5nLmNvbS93aWtpL0FydGljbGVcblx0XHRwZy53aWtpLmJvdEludGVyZmFjZVBhdGggPSBtdy5jb25maWcuZ2V0KCd3Z1NjcmlwdCcpO1xuXHRcdHBnLndpa2kuQVBJUGF0aCA9IGAke213LmNvbmZpZy5nZXQoJ3dnU2NyaXB0UGF0aCcpfS9hcGkucGhwYDtcblx0XHQvLyBkZWZhdWx0IG1lZGlhd2lraSBzZXR0aW5nIGlzIHBhdGhzIGxpa2UgaHR0cDovL3NvbWUudGhpbmcuY29tL2FydGljbGVQYXRoL2luZGV4LnBocD90aXRsZT1mb29cblx0XHRjb25zdCB0aXRsZXRhaWwgPSBgJHtwZy53aWtpLmJvdEludGVyZmFjZVBhdGh9P3RpdGxlPWA7XG5cdFx0Ly8gbGV0IHRpdGxldGFpbDIgPSBqb2luUGF0aChbcGcud2lraS5ib3RJbnRlcmZhY2VQYXRoLCAnd2lraS5waHRtbD90aXRsZT0nXSk7XG5cdFx0Ly8gb3RoZXIgc2l0ZXMgbWF5IG5lZWQgdG8gYWRkIGNvZGUgaGVyZSB0byBzZXQgdGl0bGV0YWlsIGRlcGVuZGluZyBvbiBob3cgdGhlaXIgdXJscyB3b3JrXG5cdFx0cGcud2lraS50aXRsZWJhc2UgPSBgJHtwcm90b2NvbH0vLyR7cGcud2lraS5zaXRlYmFzZX0ke3RpdGxldGFpbH1gO1xuXHRcdC8vIHBnLndpa2kudGl0bGViYXNlMiAgPSBwcm90b2NvbCArICcvLycgKyBqb2luUGF0aChbcGcud2lraS5zaXRlYmFzZSwgdGl0bGV0YWlsMl0pO1xuXHRcdHBnLndpa2kud2lraWJhc2UgPSBgJHtwcm90b2NvbH0vLyR7cGcud2lraS5zaXRlYmFzZX0ke3BnLndpa2kuYm90SW50ZXJmYWNlUGF0aH1gO1xuXHRcdHBnLndpa2kuYXBpd2lraWJhc2UgPSBgJHtwcm90b2NvbH0vLyR7cGcud2lraS5zaXRlYmFzZX0ke3BnLndpa2kuQVBJUGF0aH1gO1xuXHRcdHBnLndpa2kuYXJ0aWNsZWJhc2UgPSBgJHtwcm90b2NvbH0vLyR7cGcud2lraS5zaXRlYmFzZX0ke3BnLndpa2kuYXJ0aWNsZVBhdGh9YDtcblx0XHRwZy53aWtpLmNvbW1vbnNiYXNlID0gYCR7cHJvdG9jb2x9Ly8ke3BnLndpa2kuY29tbW9uc30ke3BnLndpa2kuYm90SW50ZXJmYWNlUGF0aH1gO1xuXHRcdHBnLndpa2kuYXBpY29tbW9uc2Jhc2UgPSBgJHtwcm90b2NvbH0vLyR7cGcud2lraS5jb21tb25zfSR7cGcud2lraS5BUElQYXRofWA7XG5cdFx0cGcucmUuYmFzZW5hbWVzID0gbmV3IFJlZ0V4cChgXigke21hcChsaXRlcmFsaXplUmVnZXgsIFtwZy53aWtpLnRpdGxlYmFzZSwgcGcud2lraS5hcnRpY2xlYmFzZV0pLmpvaW4oJ3wnKX0pYCk7XG5cdH07XG5cdC8vIEdsb2JhbCByZWdleHBzXG5cdGNvbnN0IHNldE1haW5SZWdleCA9ICgpID0+IHtcblx0XHRjb25zdCByZVN0YXJ0ID0gJ1teOl0qOi8vJztcblx0XHRsZXQgcHJlVGl0bGVzID0gYCR7bGl0ZXJhbGl6ZVJlZ2V4KG13LmNvbmZpZy5nZXQoJ3dnU2NyaXB0UGF0aCcpKX0vKD86aW5kZXhbLl1waHB8d2lraVsuXXBodG1sKVs/XXRpdGxlPWA7XG5cdFx0cHJlVGl0bGVzICs9IGB8JHtsaXRlcmFsaXplUmVnZXgoYCR7cGcud2lraS5hcnRpY2xlUGF0aH0vYCl9YDtcblx0XHRjb25zdCByZUVuZCA9IGAoJHtwcmVUaXRsZXN9KShbXiY/I10qKVteI10qKD86IyguKykpP2A7XG5cdFx0cGcucmUubWFpbiA9IG5ldyBSZWdFeHAocmVTdGFydCArIGxpdGVyYWxpemVSZWdleChwZy53aWtpLnNpdGViYXNlKSArIHJlRW5kKTtcblx0fTtcblx0Y29uc3QgYnVpbGRTcGVjaWFsUGFnZUdyb3VwID0gKHNwZWNpYWxQYWdlT2JqKSA9PiB7XG5cdFx0Y29uc3QgdmFyaWFudHMgPSBbXTtcblx0XHR2YXJpYW50cy5wdXNoKFxuXHRcdFx0bXcudXRpbC5lc2NhcGVSZWdFeHAoc3BlY2lhbFBhZ2VPYmoucmVhbG5hbWUpLFxuXHRcdFx0bXcudXRpbC5lc2NhcGVSZWdFeHAoZW5jb2RlVVJJKHNwZWNpYWxQYWdlT2JqLnJlYWxuYW1lKSlcblx0XHQpO1xuXHRcdGZvciAoY29uc3QgYWxpYXMgb2Ygc3BlY2lhbFBhZ2VPYmouYWxpYXNlcykge1xuXHRcdFx0dmFyaWFudHMucHVzaChtdy51dGlsLmVzY2FwZVJlZ0V4cChhbGlhcyksIG13LnV0aWwuZXNjYXBlUmVnRXhwKGVuY29kZVVSSShhbGlhcykpKTtcblx0XHR9XG5cdFx0cmV0dXJuIHZhcmlhbnRzLmpvaW4oJ3wnKTtcblx0fTtcblx0Y29uc3Qgc2V0UmVnZXhwcyA9ICgpID0+IHtcblx0XHRzZXRNYWluUmVnZXgoKTtcblx0XHRjb25zdCBzcCA9IG5zUmUocGcubnNTcGVjaWFsSWQpO1xuXHRcdHBnLnJlLnVybE5vUG9wdXAgPSBuZXcgUmVnRXhwKGAoKHRpdGxlPXwvKSR7c3B9KD86JTNBfDopfHNlY3Rpb249WzAtOV18XiMkKWApO1xuXHRcdGZvciAoY29uc3Qgc3BlY2lhbHBhZ2Ugb2YgcGcud2lraS5zcGVjaWFscGFnZWFsaWFzZXMpIHtcblx0XHRcdHN3aXRjaCAoc3BlY2lhbHBhZ2UucmVhbG5hbWUpIHtcblx0XHRcdFx0Y2FzZSAnQ29udHJpYnV0aW9ucyc6XG5cdFx0XHRcdFx0cGcucmUuY29udHJpYnMgPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRcdFx0YCh0aXRsZT18Lykke3NwfSg/OiUzQXw6KSg/OiR7YnVpbGRTcGVjaWFsUGFnZUdyb3VwKHNwZWNpYWxwYWdlKX0pYCArXG5cdFx0XHRcdFx0XHRcdGAoJnRhcmdldD18L3wvJHtuc1JlKHBnLm5zVXNlcklkKX06KSguKilgLFxuXHRcdFx0XHRcdFx0J2knXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnRGlmZic6XG5cdFx0XHRcdFx0cGcucmUuc3BlY2lhbGRpZmYgPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRcdFx0YC8ke3NwfSg/OiUzQXw6KSg/OiR7YnVpbGRTcGVjaWFsUGFnZUdyb3VwKHNwZWNpYWxwYWdlKX0pLyhbXj8jXSopYCxcblx0XHRcdFx0XHRcdCdpJ1xuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ0VtYWlsdXNlcic6XG5cdFx0XHRcdFx0cGcucmUuZW1haWwgPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRcdFx0YCh0aXRsZT18Lykke3NwfSg/OiUzQXw6KSg/OiR7YnVpbGRTcGVjaWFsUGFnZUdyb3VwKHNwZWNpYWxwYWdlKX0pYCArXG5cdFx0XHRcdFx0XHRcdGAoJnRhcmdldD18L3wvKD86JHtuc1JlKHBnLm5zVXNlcklkKX06KT8pKC4qKWAsXG5cdFx0XHRcdFx0XHQnaSdcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdXaGF0bGlua3NoZXJlJzpcblx0XHRcdFx0XHRwZy5yZS5iYWNrbGlua3MgPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRcdFx0YCh0aXRsZT18Lykke3NwfSg/OiUzQXw6KSg/OiR7YnVpbGRTcGVjaWFsUGFnZUdyb3VwKHNwZWNpYWxwYWdlKX0pKCZ0YXJnZXQ9fC8pKFteJl0qKWAsXG5cdFx0XHRcdFx0XHQnaSdcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjb25zdCBpbSA9IG5zUmVJbWFnZSgpO1xuXHRcdC8vIG5vdGU6IHRyaWVzIHRvIGdldCBpbWFnZXMgaW4gaW5mb2JveCB0ZW1wbGF0ZXMgdG9vLCBlLmcuIG1vdmllIHBhZ2VzLCBhbGJ1bSBwYWdlcyBldGNcblx0XHQvL1x0XHRcdFx0XHQgIChefFxcW1xcWylpbWFnZTogKihbXnxcXF1dKltefFxcXSBdKSAqXG5cdFx0Ly9cdFx0XHRcdFx0ICAoXnxcXFtcXFspaW1hZ2U6ICooW158XFxdXSpbXnxcXF0gXSkoW14wLTlcXF1dKihbMC05XSspICpweCk/XG5cdFx0Ly9cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0JDQgPSAxMjAgYXMgaW4gMTIwcHhcblx0XHRwZy5yZS5pbWFnZSA9IG5ldyBSZWdFeHAoXG5cdFx0XHRgKF58XFxcXFtcXFxcWykke2ltfTogKihbXnxcXFxcXV0qW158XFxcXF0gXSkke1N0cmluZy5yYXdgKFteMC05XFxdXSooWzAtOV0rKSAqcHgpP3woPzpcXG4gKlt8XT98W3xdKSAqYH0oJHtnZXRWYWx1ZU9mKCdwb3B1cEltYWdlVmFyc1JlZ2V4cCcpfSlgICtcblx0XHRcdFx0YCAqPSAqKD86XFxcXFtcXFxcWyAqKT8oPzoke2ltfTopPyR7U3RyaW5nLnJhd2AoW158XSo/KSg/OlxcXVxcXSk/ICpbfF0/ICpcXG5gfWAsXG5cdFx0XHQnaW1nJ1xuXHRcdCk7XG5cdFx0cGcucmUuaW1hZ2VCcmFja2V0Q291bnQgPSA2O1xuXHRcdHBnLnJlLmNhdGVnb3J5ID0gbmV3IFJlZ0V4cChgXFxcXFtcXFxcWyR7bnNSZShwZy5uc0NhdGVnb3J5SWQpfTogKihbXnxcXFxcXV0qW158XFxcXF0gXSkgKmAsICdpJyk7XG5cdFx0cGcucmUuY2F0ZWdvcnlCcmFja2V0Q291bnQgPSAxO1xuXHRcdC8vIElQdjYgfCBJUHY0XG5cdFx0cGcucmUuaXBVc2VyID1cblx0XHRcdC9eKD86Oig/Ojp8KD86OltcXGRBLUZhLWZdezEsNH0pezEsN30pfFtcXGRBLUZhLWZdezEsNH0oPzo6W1xcZEEtRmEtZl17MSw0fSl7MCw2fTo6fFtcXGRBLUZhLWZdezEsNH0oPzo6W1xcZEEtRmEtZl17MSw0fSl7N30pfCgoKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV1cXGR8XFxkKVxcLil7M30oMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XVxcZHxcXGQpKSQvO1xuXHRcdHBnLnJlLnN0dWIgPSBuZXcgUmVnRXhwKGdldFZhbHVlT2YoJ3BvcHVwU3R1YlJlZ2V4cCcpLCAnaW0nKTtcblx0XHRwZy5yZS5kaXNhbWJpZyA9IG5ldyBSZWdFeHAoZ2V0VmFsdWVPZigncG9wdXBEYWJSZWdleHAnKSwgJ2ltJyk7XG5cdFx0Ly8gRklYTUUgcmVwbGFjZSB3aXRoIGdlbmVyYWwgcGFyYW1ldGVyIHBhcnNpbmcgZnVuY3Rpb24sIHRoaXMgaXMgZGFmdFxuXHRcdHBnLnJlLm9sZGlkID0gL1smP11vbGRpZD0oW14mXSopLztcblx0XHRwZy5yZS5kaWZmID0gL1smP11kaWZmPShbXiZdKikvO1xuXHR9O1xuXHQvLyBtaXNjZWxsYW55XG5cdGNvbnN0IHNldHVwQ2FjaGUgPSAoKSA9PiB7XG5cdFx0Ly8gcGFnZSBjYWNoaW5nXG5cdFx0cGcuY2FjaGUucGFnZXMgPSBbXTtcblx0fTtcblx0Y29uc3Qgc2V0TWlzYyA9ICgpID0+IHtcblx0XHRwZy5jdXJyZW50LmxpbmsgPSBudWxsO1xuXHRcdHBnLmN1cnJlbnQubGlua3MgPSBbXTtcblx0XHRwZy5jdXJyZW50LmxpbmtzSGFzaCA9IHt9O1xuXHRcdHNldHVwQ2FjaGUoKTtcblx0XHRwZy50aW1lci5jaGVja1BvcHVwUG9zaXRpb24gPSBudWxsO1xuXHRcdHBnLmNvdW50ZXIubG9vcCA9IDA7XG5cdFx0Ly8gaWRzIGNoYW5nZSB3aXRoIGVhY2ggcG9wdXA6IHBvcHVwSW1hZ2UwLCBwb3B1cEltYWdlMSBldGNcblx0XHRwZy5pZE51bWJlciA9IDA7XG5cdFx0Ly8gZm9yIG15RGVjb2RlVVJJXG5cdFx0cGcubWlzYy5kZWNvZGVFeHRyYXMgPSBbXG5cdFx0XHR7ZnJvbTogJyUyQycsIHRvOiAnLCd9LFxuXHRcdFx0e2Zyb206ICdfJywgdG86ICcgJ30sXG5cdFx0XHR7ZnJvbTogJyUyNCcsIHRvOiAnJCd9LFxuXHRcdFx0e2Zyb206ICclMjYnLCB0bzogJyYnfSwgLy8gbm8gLFxuXHRcdF07XG5cdH07XG5cdGNvbnN0IGdldE13QXBpID0gKCkgPT4ge1xuXHRcdGlmICghcGcuYXBpLmNsaWVudCkge1xuXHRcdFx0cGcuYXBpLnVzZXJBZ2VudCA9ICdOYXZpZ2F0aW9uIHBvcHVwcy8xLjAnO1xuXHRcdFx0cGcuYXBpLmNsaWVudCA9IGFwaTtcblx0XHR9XG5cdFx0cmV0dXJuIHBnLmFwaS5jbGllbnQ7XG5cdH07XG5cdC8vIFdlIG5lZWQgYSBjYWxsYmFjayBzaW5jZSB0aGlzIG1pZ2h0IGVuZCB1cCBhc3luY2hyb25vdXMgYmVjYXVzZSBvZlxuXHQvLyB0aGUgbXcubG9hZGVyLnVzaW5nKCkgY2FsbC5cblx0Y29uc3Qgc2V0dXBQb3B1cHMgPSBmdW5jdGlvbiBzZXR1cFBvcHVwcyhjYWxsYmFjaykge1xuXHRcdGlmIChzZXR1cFBvcHVwcy5jb21wbGV0ZWQpIHtcblx0XHRcdGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Y2FsbGJhY2soKTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Ly8gVGhlc2UgZGVwZW5kZW5jaWVzIHNob3VsZCBhbHNlIGJlIGVuZm9yY2VkIGZyb20gdGhlIGdhZGdldCxcblx0XHQvLyBidXQgbm90IGV2ZXJ5b25lIGxvYWRzIHRoaXMgYXMgYSBnYWRnZXQsIHNvIGRvdWJsZSBjaGVja1xuXHRcdGZldGNoU3BlY2lhbFBhZ2VOYW1lcygpLnRoZW4oKCkgPT4ge1xuXHRcdFx0Ly8gTkIgdHJhbnNsYXRhYmxlIHN0cmluZ3Mgc2hvdWxkIGJlIHNldCB1cCBmaXJzdCAoc3RyaW5ncy5qcylcblx0XHRcdC8vIGJhc2ljc1xuXHRcdFx0c2V0dXBEZWJ1Z2dpbmcoKTtcblx0XHRcdHNldFNpdGVJbmZvKCk7XG5cdFx0XHRzZXRUaXRsZUJhc2UoKTtcblx0XHRcdHNldE9wdGlvbnMoKTsgLy8gc2VlIG9wdGlvbnMuanNcblx0XHRcdHNldFVzZXJJbmZvKCk7XG5cdFx0XHQvLyBuYW1lc3BhY2VzIGV0Y1xuXHRcdFx0c2V0TmFtZXNwYWNlcygpO1xuXHRcdFx0c2V0SW50ZXJ3aWtpKCk7XG5cdFx0XHQvLyByZWdleHBzXG5cdFx0XHRzZXRSZWdleHBzKCk7XG5cdFx0XHRzZXRSZWRpcnMoKTtcblx0XHRcdC8vIG90aGVyIHN0dWZmXG5cdFx0XHRzZXRNaXNjKCk7XG5cdFx0XHRzZXR1cExpdmVQcmV2aWV3KCk7XG5cdFx0XHQvLyBtYWluIGRlYWwgaGVyZVxuXHRcdFx0c2V0dXBUb29sdGlwcygpO1xuXHRcdFx0bG9nKCdJbiBzZXR1cFBvcHVwcygpLCBqdXN0IGNhbGxlZCBzZXR1cFRvb2x0aXBzKCknKTtcblx0XHRcdE5hdnBvcHVwLnRyYWNrZXIuZW5hYmxlKCk7XG5cdFx0XHRzZXR1cFBvcHVwcy5jb21wbGV0ZWQgPSB0cnVlO1xuXHRcdFx0aWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXHQvLyBFTkRGSUxFOiBpbml0LmpzXG5cdC8vIFNUQVJURklMRTogbmF2bGlua3MuanNcblx0Ly8gbmF2bGlua3MuLi4gbGV0IHRoZSBmdW4gYmVnaW5cblx0Ly9cblx0Y29uc3QgZGVmYXVsdE5hdmxpbmtTcGVjID0gKCkgPT4ge1xuXHRcdGxldCBzdHIgPSAnJztcblx0XHRzdHIgKz0gJzxiPjw8bWFpbmxpbmt8c2hvcnRjdXQ9ID4+PC9iPic7XG5cdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwTGFzdEVkaXRMaW5rJykpIHtcblx0XHRcdHN0ciArPSAnKjw8bGFzdEVkaXR8c2hvcnRjdXQ9Lz4+fDw8bGFzdENvbnRyaWI+Pnw8PHNpbmNlTWU+PmlmKG9sZGlkKXt8PDxvbGRFZGl0Pj58PDxkaWZmQ3VyPj59Jztcblx0XHR9XG5cdFx0Ly8gdXNlciBsaW5rc1xuXHRcdC8vIGNvbnRyaWJzIC0gbG9nIC0gY291bnQgLSBlbWFpbCAtIGJsb2NrXG5cdFx0Ly8gY291bnQgb25seSBpZiBhcHBsaWNhYmxlOyBibG9jayBvbmx5IGlmIHBvcHVwQWRtaW5MaW5rc1xuXHRcdHN0ciArPSAnaWYodXNlcil7PGJyPjw8Y29udHJpYnN8c2hvcnRjdXQ9Yz4+Kjw8dXNlcmxvZ3xzaG9ydGN1dD1MfGxvZz4+Jztcblx0XHRzdHIgKz0gJ2lmKGlwdXNlcil7Kjw8YXJpbj4+fWlmKHdpa2ltZWRpYSl7Kjw8Y291bnR8c2hvcnRjdXQ9Iz4+fSc7XG5cdFx0c3RyICs9ICdpZihpcHVzZXIpe31lbHNleyo8PGVtYWlsfHNob3J0Y3V0PUU+Pn1pZihhZG1pbil7Kjw8YmxvY2t8c2hvcnRjdXQ9Yj4+fDw8YmxvY2tsb2d8bG9nPj59fSc7XG5cdFx0Ly8gZWRpdGluZyBsaW5rc1xuXHRcdC8vIHRhbGtwYWdlICAgLT4gZWRpdHxuZXcgLSBoaXN0b3J5IC0gdW58d2F0Y2ggLSBhcnRpY2xlfGVkaXRcblx0XHQvLyBvdGhlciBwYWdlIC0+IGVkaXQgLSBoaXN0b3J5IC0gdW58d2F0Y2ggLSB0YWxrfGVkaXR8bmV3XG5cdFx0Y29uc3QgZWRpdHN0ciA9ICc8PGVkaXR8c2hvcnRjdXQ9ZT4+Jztcblx0XHRjb25zdCBlZGl0T2xkaWRTdHIgPSBgaWYob2xkaWQpezw8ZWRpdE9sZHxzaG9ydGN1dD1lPj58PDxyZXZlcnR8c2hvcnRjdXQ9dnxydj4+fDw8ZWRpdHxjdXI+Pn1lbHNleyR7ZWRpdHN0cn19YDtcblx0XHRjb25zdCBoaXN0b3J5c3RyID0gJzw8aGlzdG9yeXxzaG9ydGN1dD1oPj58PDxlZGl0b3JzfHNob3J0Y3V0PUV8Pj4nO1xuXHRcdGNvbnN0IHdhdGNoc3RyID0gJzw8dW53YXRjaHx1bndhdGNoU2hvcnQ+Pnw8PHdhdGNofHNob3J0Y3V0PXd8d2F0Y2hUaGluZ3k+Pic7XG5cdFx0c3RyICs9XG5cdFx0XHRgPGJyPmlmKHRhbGspeyR7ZWRpdE9sZGlkU3RyfXw8PG5ld3xzaG9ydGN1dD0rPj5gICtcblx0XHRcdGAqJHtoaXN0b3J5c3RyfSoke3dhdGNoc3RyfSpgICtcblx0XHRcdCc8Yj48PGFydGljbGV8c2hvcnRjdXQ9YT4+PC9iPnw8PGVkaXRBcnRpY2xlfGVkaXQ+PicgK1xuXHRcdFx0YH1lbHNleyR7XG5cdFx0XHRcdC8vIG5vdCBhIHRhbGsgcGFnZVxuXHRcdFx0XHRlZGl0T2xkaWRTdHJcblx0XHRcdH0qJHtoaXN0b3J5c3RyfSoke3dhdGNoc3RyfSpgICtcblx0XHRcdCc8Yj48PHRhbGt8c2hvcnRjdXQ9dD4+PC9iPnw8PGVkaXRUYWxrfGVkaXQ+Pnw8PG5ld1RhbGt8c2hvcnRjdXQ9K3xuZXc+Pn0nO1xuXHRcdC8vIG1pc2MgbGlua3Ncblx0XHRzdHIgKz0gJzxicj48PHdoYXRMaW5rc0hlcmV8c2hvcnRjdXQ9bD4+Kjw8cmVsYXRlZENoYW5nZXN8c2hvcnRjdXQ9cj4+Kjw8bW92ZXxzaG9ydGN1dD1tPj4nO1xuXHRcdC8vIGFkbWluIGxpbmtzXG5cdFx0c3RyICs9XG5cdFx0XHQnaWYoYWRtaW4pezxicj48PHVucHJvdGVjdHx1bnByb3RlY3RTaG9ydD4+fDw8cHJvdGVjdHxzaG9ydGN1dD1wPj58PDxwcm90ZWN0bG9nfGxvZz4+KicgK1xuXHRcdFx0Jzw8dW5kZWxldGV8dW5kZWxldGVTaG9ydD4+fDw8ZGVsZXRlfHNob3J0Y3V0PWQ+Pnw8PGRlbGV0ZWxvZ3xsb2c+Pn0nO1xuXHRcdHJldHVybiBzdHI7XG5cdH07XG5cdGNvbnN0IG5hdkxpbmtzSFRNTCA9IChhcnRpY2xlLCBfaGludCwgcGFyYW1zKSA9PiB7XG5cdFx0Ly8gb2xkaWQsIHJjaWQpIHtcblx0XHRjb25zdCBzdHIgPSBgPHNwYW4gY2xhc3M9XCJwb3B1cE5hdkxpbmtzXCI+JHtkZWZhdWx0TmF2bGlua1NwZWMoKX08L3NwYW4+YDtcblx0XHQvLyBCQU1cblx0XHRyZXR1cm4gbmF2bGlua1N0cmluZ1RvSFRNTChzdHIsIGFydGljbGUsIHBhcmFtcyk7XG5cdH07XG5cdGNvbnN0IGV4cGFuZENvbmRpdGlvbmFsTmF2bGlua1N0cmluZyA9IGZ1bmN0aW9uIGV4cGFuZENvbmRpdGlvbmFsTmF2bGlua1N0cmluZyhzLCBhcnRpY2xlLCB6LCByZWN1cnNpb25Db3VudCkge1xuXHRcdGNvbnN0IHtvbGRpZH0gPSB6O1xuXHRcdGNvbnN0IHtyY2lkfSA9IHo7XG5cdFx0Y29uc3Qge2RpZmZ9ID0gejtcblx0XHQvLyBuZXN0ZWQgY29uZGl0aW9uYWxzICh1cCB0byAxMCBkZWVwKSBhcmUgb2ssIGhvcGVmdWxseSEgKHdvcmsgZnJvbSB0aGUgaW5zaWRlIG91dClcblx0XHRpZiAodHlwZW9mIHJlY3Vyc2lvbkNvdW50ICE9PSB0eXBlb2YgMCkge1xuXHRcdFx0cmVjdXJzaW9uQ291bnQgPSAwO1xuXHRcdH1cblx0XHQvLyAoMVx0IGlmXHRcXFxcKFx0KDJcdDIpXHRcXFxcKVx0ICB7KDNcdDMpfSAgKDQgICBlbHNlXHQgIHsoNVx0IDUpfSAgNCkxKVxuXHRcdGNvbnN0IGNvbmRpdGlvbmFsU3BsaXRSZWdleCA9IC8oOz9cXHMqaWZcXHMqXFwoXFxzKihcXHcqKVxccypcXClcXHMqeyhbXnt9XSopfShcXHMqZWxzZVxccyp7KFtee31dKj8pfXwpKS9pO1xuXHRcdGNvbnN0IHNwbGl0dGVkID0gcy5zcGxpdChjb25kaXRpb25hbFNwbGl0UmVnZXgpO1xuXHRcdC8vICQxOiB3aG9sZSBjb25kaXRpb25hbFxuXHRcdC8vICQyOiB0ZXN0IGNvbmRpdGlvblxuXHRcdC8vICQzOiB0cnVlIGV4cGFuc2lvblxuXHRcdC8vICQ0OiBlbHNlIGNsYXVzZSAocG9zc2libHkgZW1wdHkpXG5cdFx0Ly8gJDU6IGZhbHNlIGV4cGFuc2lvbiAocG9zc2libHkgbnVsbClcblx0XHRjb25zdCBudW1QYXJlbnMgPSA1O1xuXHRcdGxldCBbcmV0XSA9IHNwbGl0dGVkO1xuXHRcdGZvciAobGV0IGkgPSAxOyBpIDwgc3BsaXR0ZWQubGVuZ3RoOyBpID0gaSArIG51bVBhcmVucyArIDEpIHtcblx0XHRcdGNvbnN0IHRlc3RTdHJpbmcgPSBzcGxpdHRlZFtpICsgMiAtIDFdO1xuXHRcdFx0Y29uc3QgdHJ1ZVN0cmluZyA9IHNwbGl0dGVkW2kgKyAzIC0gMV07XG5cdFx0XHRsZXQgZmFsc2VTdHJpbmcgPSBzcGxpdHRlZFtpICsgNSAtIDFdO1xuXHRcdFx0aWYgKGZhbHNlU3RyaW5nID09PSB1bmRlZmluZWQgfHwgIWZhbHNlU3RyaW5nKSB7XG5cdFx0XHRcdGZhbHNlU3RyaW5nID0gJyc7XG5cdFx0XHR9XG5cdFx0XHRsZXQgdGVzdFJlc3VsdDtcblx0XHRcdHN3aXRjaCAodGVzdFN0cmluZykge1xuXHRcdFx0XHRjYXNlICd1c2VyJzpcblx0XHRcdFx0XHR0ZXN0UmVzdWx0ID0gISFhcnRpY2xlLnVzZXJOYW1lKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3RhbGsnOlxuXHRcdFx0XHRcdHRlc3RSZXN1bHQgPSAhYXJ0aWNsZS50YWxrUGFnZSgpOyAvLyB0YWxrUGFnZSBjb252ZXJ0cyBfYXJ0aWNsZXNfIHRvIHRhbGtQYWdlc1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdhZG1pbic6XG5cdFx0XHRcdFx0dGVzdFJlc3VsdCA9ICEhZ2V0VmFsdWVPZigncG9wdXBBZG1pbkxpbmtzJyk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ29sZGlkJzpcblx0XHRcdFx0XHR0ZXN0UmVzdWx0ID0gISEob2xkaWQgIT09IHVuZGVmaW5lZCAmJiBvbGRpZCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3JjaWQnOlxuXHRcdFx0XHRcdHRlc3RSZXN1bHQgPSAhIShyY2lkICE9PSB1bmRlZmluZWQgJiYgcmNpZCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2lwdXNlcic6XG5cdFx0XHRcdFx0dGVzdFJlc3VsdCA9ICEhYXJ0aWNsZS5pc0lwVXNlcigpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdtYWluc3BhY2VfZW4nOlxuXHRcdFx0XHRcdHRlc3RSZXN1bHQgPSBpc0luTWFpbk5hbWVzcGFjZShhcnRpY2xlKSAmJiBwZy53aWtpLmhvc3RuYW1lID09PSAnZW4ud2lraXBlZGlhLm9yZyc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3dpa2ltZWRpYSc6XG5cdFx0XHRcdFx0dGVzdFJlc3VsdCA9ICEhcGcud2lraS53aWtpbWVkaWE7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2RpZmYnOlxuXHRcdFx0XHRcdHRlc3RSZXN1bHQgPSAhIShkaWZmICE9PSB1bmRlZmluZWQgJiYgZGlmZik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRzd2l0Y2ggKHRlc3RSZXN1bHQpIHtcblx0XHRcdFx0Y2FzZSBudWxsOlxuXHRcdFx0XHRcdHJldCArPSBzcGxpdHRlZFtpXTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSB0cnVlOlxuXHRcdFx0XHRcdHJldCArPSB0cnVlU3RyaW5nO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIGZhbHNlOlxuXHRcdFx0XHRcdHJldCArPSBmYWxzZVN0cmluZztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdC8vIGFwcGVuZCBub24tY29uZGl0aW9uYWwgc3RyaW5nXG5cdFx0XHRyZXQgKz0gc3BsaXR0ZWRbaSArIG51bVBhcmVuc107XG5cdFx0fVxuXHRcdGlmIChjb25kaXRpb25hbFNwbGl0UmVnZXgudGVzdChyZXQpICYmIHJlY3Vyc2lvbkNvdW50IDwgMTApIHtcblx0XHRcdHJldHVybiBleHBhbmRDb25kaXRpb25hbE5hdmxpbmtTdHJpbmcocmV0LCBhcnRpY2xlLCB6LCByZWN1cnNpb25Db3VudCArIDEpO1xuXHRcdH1cblx0XHRyZXR1cm4gcmV0O1xuXHR9O1xuXHRjb25zdCBuYXZsaW5rU3RyaW5nVG9BcnJheSA9IChzLCBhcnRpY2xlLCBwYXJhbXMpID0+IHtcblx0XHRzID0gZXhwYW5kQ29uZGl0aW9uYWxOYXZsaW5rU3RyaW5nKHMsIGFydGljbGUsIHBhcmFtcyk7XG5cdFx0Y29uc3Qgc3BsaXR0ZWQgPSBzLnNwbGl0KC88PCguKj8pPj4vKTtcblx0XHRjb25zdCByZXQgPSBbXTtcblx0XHRmb3IgKGNvbnN0IFtpLCBlbGVtZW50XSBvZiBzcGxpdHRlZC5lbnRyaWVzKCkpIHtcblx0XHRcdGlmIChpICUgMikge1xuXHRcdFx0XHQvLyBpIG9kZCwgc28gcyBpcyBhIHRhZ1xuXHRcdFx0XHRjb25zdCB0ID0gbmV3IG5hdmxpbmtUYWcoKTtcblx0XHRcdFx0Y29uc3Qgc3MgPSBlbGVtZW50LnNwbGl0KCd8Jyk7XG5cdFx0XHRcdFt0LmlkXSA9IHNzO1xuXHRcdFx0XHRmb3IgKGxldCBqID0gMTsgaiA8IHNzLmxlbmd0aDsgKytqKSB7XG5cdFx0XHRcdFx0Y29uc3Qgc3NzID0gc3Nbal0uc3BsaXQoJz0nKTtcblx0XHRcdFx0XHRpZiAoc3NzLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRcdFssIHRbc3NzWzBdXV0gPSBzc3M7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIG5vIGFzc2lnbm1lbnQgKG5vIFwiPVwiKSwgc28gdHJlYXQgdGhpcyBhcyBhIHRpdGxlIChvdmVyd3JpdGluZyB0aGUgbGFzdCBvbmUpXG5cdFx0XHRcdFx0XHR0LnRleHQgPSBwb3B1cFN0cmluZyhzc3NbMF0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0LmFydGljbGUgPSBhcnRpY2xlO1xuXHRcdFx0XHRjb25zdCB7b2xkaWR9ID0gcGFyYW1zO1xuXHRcdFx0XHRjb25zdCB7cmNpZH0gPSBwYXJhbXM7XG5cdFx0XHRcdGNvbnN0IHtkaWZmfSA9IHBhcmFtcztcblx0XHRcdFx0aWYgKG9sZGlkICE9PSB1bmRlZmluZWQgJiYgb2xkaWQgIT09IG51bGwpIHtcblx0XHRcdFx0XHR0Lm9sZGlkID0gb2xkaWQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHJjaWQgIT09IHVuZGVmaW5lZCAmJiByY2lkICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0dC5yY2lkID0gcmNpZDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGlmZiAhPT0gdW5kZWZpbmVkICYmIGRpZmYgIT09IG51bGwpIHtcblx0XHRcdFx0XHR0LmRpZmYgPSBkaWZmO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghdC50ZXh0ICYmIHQuaWQgIT09ICdtYWlubGluaycpIHtcblx0XHRcdFx0XHR0LnRleHQgPSBwb3B1cFN0cmluZyh0LmlkKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXQucHVzaCh0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIHBsYWluIEhUTUxcblx0XHRcdFx0cmV0LnB1c2goZWxlbWVudCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXQ7XG5cdH07XG5cdGNvbnN0IG5hdmxpbmtTdWJzdGl0dXRlSFRNTCA9IChzKSA9PiB7XG5cdFx0cmV0dXJuIHNcblx0XHRcdC5zcGxpdCgnKicpXG5cdFx0XHQuam9pbihnZXRWYWx1ZU9mKCdwb3B1cE5hdkxpbmtTZXBhcmF0b3InKSlcblx0XHRcdC5zcGxpdCgnPG1lbnVyb3c+Jylcblx0XHRcdC5qb2luKCc8bGkgY2xhc3M9XCJwb3B1cF9tZW51X3Jvd1wiPicpXG5cdFx0XHQuc3BsaXQoJzwvbWVudXJvdz4nKVxuXHRcdFx0LmpvaW4oJzwvbGk+Jylcblx0XHRcdC5zcGxpdCgnPG1lbnU+Jylcblx0XHRcdC5qb2luKCc8dWwgY2xhc3M9XCJwb3B1cF9tZW51XCI+Jylcblx0XHRcdC5zcGxpdCgnPC9tZW51PicpXG5cdFx0XHQuam9pbignPC91bD4nKTtcblx0fTtcblx0Y29uc3QgbmF2bGlua0RlcHRoID0gKG1hZ2ljLCBzKSA9PiB7XG5cdFx0cmV0dXJuIHMuc3BsaXQoYDwke21hZ2ljfT5gKS5sZW5ndGggLSBzLnNwbGl0KGA8LyR7bWFnaWN9PmApLmxlbmd0aDtcblx0fTtcblx0Ly8gbmF2bGlua1N0cmluZzogKiBiZWNvbWVzIHRoZSBzZXBhcmF0b3Jcblx0Ly9cdFx0XHRcdDw8Zm9vfGJhcj1iYXp8ZnViYXI+PiBiZWNvbWVzIGEgZm9vLWxpbmsgd2l0aCBhdHRyaWJ1dGUgYmFyPSdiYXonXG5cdC8vXHRcdFx0XHRcdFx0XHRcdFx0ICBhbmQgdmlzaWJsZSB0ZXh0ICdmdWJhcidcblx0Ly9cdFx0XHRcdGlmKHRlc3Qpey4uLn0gYW5kIGlmKHRlc3Qpey4uLn1lbHNley4uLn0gd29yayB0b28gKG5lc3RlZCBvaylcblx0Y29uc3QgbmF2bGlua1N0cmluZ1RvSFRNTCA9IChzLCBhcnRpY2xlLCBwYXJhbXMpID0+IHtcblx0XHQvLyBsaW1pdEFsZXJ0KG5hdmxpbmtTdHJpbmdUb0hUTUwsIDUsICduYXZsaW5rU3RyaW5nVG9IVE1MXFxuJyArIGFydGljbGUgKyAnXFxuJyArICh0eXBlb2YgYXJ0aWNsZSkpO1xuXHRcdGNvbnN0IHAgPSBuYXZsaW5rU3RyaW5nVG9BcnJheShzLCBhcnRpY2xlLCBwYXJhbXMpO1xuXHRcdGxldCBodG1sID0gJyc7XG5cdFx0bGV0IG1lbnVkZXB0aCA9IDA7IC8vIG5lc3RlZCBtZW51cyBub3QgY3VycmVudGx5IGFsbG93ZWQsIGJ1dCBkb2Vzbid0IGRvIGFueSBoYXJtIHRvIGNvZGUgZm9yIGl0XG5cdFx0bGV0IG1lbnVyb3dkZXB0aCA9IDA7XG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIHApIHtcblx0XHRcdGlmICh0eXBlb2YgZWxlbWVudCA9PT0gdHlwZW9mICcnKSB7XG5cdFx0XHRcdGh0bWwgKz0gbmF2bGlua1N1YnN0aXR1dGVIVE1MKGVsZW1lbnQpO1xuXHRcdFx0XHRtZW51ZGVwdGggKz0gbmF2bGlua0RlcHRoKCdtZW51JywgZWxlbWVudCk7XG5cdFx0XHRcdG1lbnVyb3dkZXB0aCArPSBuYXZsaW5rRGVwdGgoJ21lbnVyb3cnLCBlbGVtZW50KTtcblx0XHRcdFx0Ly9cdFx0XHRpZiAobWVudWRlcHRoID09PSAwKSB7XG5cdFx0XHRcdC8vXHRcdFx0XHR0YWdUeXBlPSdzcGFuJztcblx0XHRcdFx0Ly9cdFx0XHR9IGVsc2UgaWYgKG1lbnVyb3dkZXB0aCA9PT0gMCkge1xuXHRcdFx0XHQvL1x0XHRcdFx0dGFnVHlwZT0nbGknO1xuXHRcdFx0XHQvL1x0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vXHRcdFx0XHR0YWdUeXBlID0gbnVsbDtcblx0XHRcdFx0Ly9cdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGVsZW1lbnQudHlwZSAhPT0gdW5kZWZpbmVkICYmIGVsZW1lbnQudHlwZSA9PT0gJ25hdmxpbmtUYWcnKSB7XG5cdFx0XHRcdGh0bWwgKz1cblx0XHRcdFx0XHRtZW51ZGVwdGggPiAwICYmIG1lbnVyb3dkZXB0aCA9PT0gMFxuXHRcdFx0XHRcdFx0PyBgPGxpIGNsYXNzPVwicG9wdXBfbWVudV9pdGVtXCI+JHtlbGVtZW50Lmh0bWwoKX08L2xpPmBcblx0XHRcdFx0XHRcdDogZWxlbWVudC5odG1sKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBodG1sO1xuXHR9O1xuXHRjbGFzcyBuYXZsaW5rVGFnIHtcblx0XHRjb25zdHJ1Y3RvcigpIHtcblx0XHRcdHRoaXMudHlwZSA9ICduYXZsaW5rVGFnJztcblx0XHR9XG5cdFx0aHRtbCgpIHtcblx0XHRcdHRoaXMuZ2V0TmV3V2luKCk7XG5cdFx0XHR0aGlzLmdldFByaW50RnVuY3Rpb24oKTtcblx0XHRcdGxldCBodG1sID0gJyc7XG5cdFx0XHRsZXQgb3BlbmluZztcblx0XHRcdGxldCBjbG9zaW5nO1xuXHRcdFx0Y29uc3QgdGFnVHlwZSA9ICdzcGFuJztcblx0XHRcdGlmICh0YWdUeXBlKSB7XG5cdFx0XHRcdG9wZW5pbmcgPSBgPCR7dGFnVHlwZX0gY2xhc3M9XCJwb3B1cF8ke3RoaXMuaWR9XCI+YDtcblx0XHRcdFx0Y2xvc2luZyA9IGA8LyR7dGFnVHlwZX0+YDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG9wZW5pbmcgPSAnJztcblx0XHRcdFx0Y2xvc2luZyA9ICcnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLnByaW50ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGh0bWwgPSB0aGlzLnByaW50KHRoaXMpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGh0bWwgIT09IHR5cGVvZiAnJykge1xuXHRcdFx0XHRcdGh0bWwgPSAnJztcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLnNob3J0Y3V0ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRodG1sID0gYWRkUG9wdXBTaG9ydGN1dChodG1sLCB0aGlzLnNob3J0Y3V0KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZXJybG9nKGBPaCBkZWFyIC0gaW52YWxpZCBwcmludCBmdW5jdGlvbiBmb3IgYSBuYXZsaW5rVGFnLCBpZD0ke3RoaXMuaWR9YCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gb3BlbmluZyArIGh0bWwgKyBjbG9zaW5nO1xuXHRcdH1cblx0XHRnZXROZXdXaW4oKSB7XG5cdFx0XHRnZXRWYWx1ZU9mKCdwb3B1cExpbmtzTmV3V2luZG93Jyk7XG5cdFx0XHRpZiAocGcub3B0aW9uLnBvcHVwTGlua3NOZXdXaW5kb3dbdGhpcy5pZF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLm5ld1dpbiA9IG51bGw7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLm5ld1dpbiA9IHBnLm9wdGlvbi5wb3B1cExpbmtzTmV3V2luZG93W3RoaXMuaWRdO1xuXHRcdH1cblx0XHRnZXRQcmludEZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gdGhpbmsgYWJvdXQgdGhpcyBzb21lIG1vcmVcblx0XHRcdC8vIHRoaXMuaWQgYW5kIHRoaXMuYXJ0aWNsZSBzaG91bGQgYWxyZWFkeSBiZSBkZWZpbmVkXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMuaWQgIT09IHR5cGVvZiAnJyB8fCB0eXBlb2YgdGhpcy5hcnRpY2xlICE9PSB0eXBlb2Yge30pIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5ub1BvcHVwID0gMTtcblx0XHRcdHN3aXRjaCAodGhpcy5pZCkge1xuXHRcdFx0XHRjYXNlICdjb250cmlicyc6XG5cdFx0XHRcdGNhc2UgJ2hpc3RvcnknOlxuXHRcdFx0XHRjYXNlICd3aGF0TGlua3NIZXJlJzpcblx0XHRcdFx0Y2FzZSAndXNlclBhZ2UnOlxuXHRcdFx0XHRjYXNlICd1c2VyVGFsayc6XG5cdFx0XHRcdGNhc2UgJ3RhbGsnOlxuXHRcdFx0XHRjYXNlICdhcnRpY2xlJzpcblx0XHRcdFx0Y2FzZSAnbGFzdEVkaXQnOlxuXHRcdFx0XHRcdHRoaXMubm9Qb3B1cCA9IG51bGw7XG5cdFx0XHR9XG5cdFx0XHRzd2l0Y2ggKHRoaXMuaWQpIHtcblx0XHRcdFx0Y2FzZSAnZW1haWwnOlxuXHRcdFx0XHRjYXNlICdjb250cmlicyc6XG5cdFx0XHRcdGNhc2UgJ2Jsb2NrJzpcblx0XHRcdFx0Y2FzZSAndW5ibG9jayc6XG5cdFx0XHRcdGNhc2UgJ3VzZXJsb2cnOlxuXHRcdFx0XHRjYXNlICd1c2VyU3BhY2UnOlxuXHRcdFx0XHRjYXNlICdkZWxldGVkQ29udHJpYnMnOlxuXHRcdFx0XHRcdHRoaXMuYXJ0aWNsZSA9IHRoaXMuYXJ0aWNsZS51c2VyTmFtZSgpO1xuXHRcdFx0fVxuXHRcdFx0c3dpdGNoICh0aGlzLmlkKSB7XG5cdFx0XHRcdGNhc2UgJ3VzZXJUYWxrJzpcblx0XHRcdFx0Y2FzZSAnbmV3VXNlclRhbGsnOlxuXHRcdFx0XHRjYXNlICdlZGl0VXNlclRhbGsnOlxuXHRcdFx0XHRjYXNlICd1c2VyUGFnZSc6XG5cdFx0XHRcdGNhc2UgJ2Jsb2NrbG9nJzpcblx0XHRcdFx0XHR0aGlzLmFydGljbGUgPSB0aGlzLmFydGljbGUudXNlck5hbWUodHJ1ZSk7XG5cdFx0XHRcdC8qIGZhbGxzIHRocm91Z2ggKi9cblx0XHRcdFx0Y2FzZSAncGFnZWxvZyc6XG5cdFx0XHRcdGNhc2UgJ2RlbGV0ZWxvZyc6XG5cdFx0XHRcdGNhc2UgJ3Byb3RlY3Rsb2cnOlxuXHRcdFx0XHRcdGRlbGV0ZSB0aGlzLm9sZGlkO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuaWQgIT09ICdtYWlubGluaycpIHtcblx0XHRcdFx0Ly8gRklYTUUgYW5jaG9yIGhhbmRsaW5nIHNob3VsZCBiZSBkb25lIGRpZmZlcmVudGx5IHdpdGggVGl0bGUgb2JqZWN0XG5cdFx0XHRcdHRoaXMuYXJ0aWNsZSA9IHRoaXMuYXJ0aWNsZS5yZW1vdmVBbmNob3IoKTtcblx0XHRcdFx0Ly8gaWYgKHR5cGVvZiB0aGlzLnRleHQ9PSd1bmRlZmluZWQnKSB7IHRoaXMudGV4dD1wb3B1cFN0cmluZyh0aGlzLmlkKTsgfVxuXHRcdFx0fVxuXHRcdFx0c3dpdGNoICh0aGlzLmlkKSB7XG5cdFx0XHRcdGNhc2UgJ3VuZGVsZXRlJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gc3BlY2lhbExpbms7XG5cdFx0XHRcdFx0dGhpcy5zcGVjaWFscGFnZSA9ICdVbmRlbGV0ZSc7XG5cdFx0XHRcdFx0dGhpcy5zZXAgPSAnLyc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3doYXRMaW5rc0hlcmUnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBzcGVjaWFsTGluaztcblx0XHRcdFx0XHR0aGlzLnNwZWNpYWxwYWdlID0gJ1doYXRsaW5rc2hlcmUnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdyZWxhdGVkQ2hhbmdlcyc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHNwZWNpYWxMaW5rO1xuXHRcdFx0XHRcdHRoaXMuc3BlY2lhbHBhZ2UgPSAnUmVjZW50Y2hhbmdlc2xpbmtlZCc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ21vdmUnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBzcGVjaWFsTGluaztcblx0XHRcdFx0XHR0aGlzLnNwZWNpYWxwYWdlID0gJ01vdmVwYWdlJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnY29udHJpYnMnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBzcGVjaWFsTGluaztcblx0XHRcdFx0XHR0aGlzLnNwZWNpYWxwYWdlID0gJ0NvbnRyaWJ1dGlvbnMnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdkZWxldGVkQ29udHJpYnMnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBzcGVjaWFsTGluaztcblx0XHRcdFx0XHR0aGlzLnNwZWNpYWxwYWdlID0gJ0RlbGV0ZWRjb250cmlidXRpb25zJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnZW1haWwnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBzcGVjaWFsTGluaztcblx0XHRcdFx0XHR0aGlzLnNwZWNpYWxwYWdlID0gJ0VtYWlsVXNlcic7XG5cdFx0XHRcdFx0dGhpcy5zZXAgPSAnLyc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2Jsb2NrJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gc3BlY2lhbExpbms7XG5cdFx0XHRcdFx0dGhpcy5zcGVjaWFscGFnZSA9ICdCbG9ja2lwJztcblx0XHRcdFx0XHR0aGlzLnNlcCA9ICcmaXA9Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAndW5ibG9jayc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHNwZWNpYWxMaW5rO1xuXHRcdFx0XHRcdHRoaXMuc3BlY2lhbHBhZ2UgPSAnSXBibG9ja2xpc3QnO1xuXHRcdFx0XHRcdHRoaXMuc2VwID0gJyZhY3Rpb249dW5ibG9jayZpcD0nO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICd1c2VybG9nJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gc3BlY2lhbExpbms7XG5cdFx0XHRcdFx0dGhpcy5zcGVjaWFscGFnZSA9ICdMb2cnO1xuXHRcdFx0XHRcdHRoaXMuc2VwID0gJyZ1c2VyPSc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2Jsb2NrbG9nJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gc3BlY2lhbExpbms7XG5cdFx0XHRcdFx0dGhpcy5zcGVjaWFscGFnZSA9ICdMb2cnO1xuXHRcdFx0XHRcdHRoaXMuc2VwID0gJyZ0eXBlPWJsb2NrJnBhZ2U9Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAncGFnZWxvZyc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHNwZWNpYWxMaW5rO1xuXHRcdFx0XHRcdHRoaXMuc3BlY2lhbHBhZ2UgPSAnTG9nJztcblx0XHRcdFx0XHR0aGlzLnNlcCA9ICcmcGFnZT0nO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdwcm90ZWN0bG9nJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gc3BlY2lhbExpbms7XG5cdFx0XHRcdFx0dGhpcy5zcGVjaWFscGFnZSA9ICdMb2cnO1xuXHRcdFx0XHRcdHRoaXMuc2VwID0gJyZ0eXBlPXByb3RlY3QmcGFnZT0nO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdkZWxldGVsb2cnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBzcGVjaWFsTGluaztcblx0XHRcdFx0XHR0aGlzLnNwZWNpYWxwYWdlID0gJ0xvZyc7XG5cdFx0XHRcdFx0dGhpcy5zZXAgPSAnJnR5cGU9ZGVsZXRlJnBhZ2U9Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAndXNlclNwYWNlJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gc3BlY2lhbExpbms7XG5cdFx0XHRcdFx0dGhpcy5zcGVjaWFscGFnZSA9ICdQcmVmaXhJbmRleCc7XG5cdFx0XHRcdFx0dGhpcy5zZXAgPSAnJm5hbWVzcGFjZT0yJnByZWZpeD0nO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdzZWFyY2gnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBzcGVjaWFsTGluaztcblx0XHRcdFx0XHR0aGlzLnNwZWNpYWxwYWdlID0gJ1NlYXJjaCc7XG5cdFx0XHRcdFx0dGhpcy5zZXAgPSAnJmZ1bGx0ZXh0PVNlYXJjaCZzZWFyY2g9Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAndGhhbmsnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBzcGVjaWFsTGluaztcblx0XHRcdFx0XHR0aGlzLnNwZWNpYWxwYWdlID0gJ1RoYW5rcyc7XG5cdFx0XHRcdFx0dGhpcy5zZXAgPSAnLyc7XG5cdFx0XHRcdFx0dGhpcy5hcnRpY2xlLnZhbHVlID0gdGhpcy5kaWZmID09PSAncHJldicgPyB0aGlzLm9sZGlkIDogdGhpcy5kaWZmO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICd1bndhdGNoJzpcblx0XHRcdFx0Y2FzZSAnd2F0Y2gnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBtYWdpY1dhdGNoTGluaztcblx0XHRcdFx0XHR0aGlzLmFjdGlvbiA9IGAke3RoaXMuaWR9JmF1dG93YXRjaGxpc3Q9MSZhdXRvaW1wbD0ke3BvcHVwU3RyaW5nKFxuXHRcdFx0XHRcdFx0J2F1dG9lZGl0X3ZlcnNpb24nXG5cdFx0XHRcdFx0KX0mYWN0b2tlbj0ke2F1dG9DbGlja1Rva2VuKCl9YDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnaGlzdG9yeSc6XG5cdFx0XHRcdGNhc2UgJ2hpc3RvcnlmZWVkJzpcblx0XHRcdFx0Y2FzZSAndW5wcm90ZWN0Jzpcblx0XHRcdFx0Y2FzZSAncHJvdGVjdCc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHdpa2lMaW5rO1xuXHRcdFx0XHRcdHRoaXMuYWN0aW9uID0gdGhpcy5pZDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnZGVsZXRlJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gd2lraUxpbms7XG5cdFx0XHRcdFx0dGhpcy5hY3Rpb24gPSAnZGVsZXRlJztcblx0XHRcdFx0XHRpZiAodGhpcy5hcnRpY2xlLm5hbWVzcGFjZUlkKCkgPT09IHBnLm5zSW1hZ2VJZCkge1xuXHRcdFx0XHRcdFx0Y29uc3QgaW1nID0gdGhpcy5hcnRpY2xlLnN0cmlwTmFtZXNwYWNlKCk7XG5cdFx0XHRcdFx0XHR0aGlzLmFjdGlvbiArPSBgJmltYWdlPSR7aW1nfWA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdtYXJrcGF0cm9sbGVkJzpcblx0XHRcdFx0Y2FzZSAnZWRpdCc6XG5cdFx0XHRcdFx0Ly8gZWRpdE9sZCBzaG91bGQga2VlcCB0aGUgb2xkaWQsIGJ1dCBlZGl0IHNob3VsZCBub3QuXG5cdFx0XHRcdFx0ZGVsZXRlIHRoaXMub2xkaWQ7XG5cdFx0XHRcdC8qIGZhbGxzIHRocm91Z2ggKi9cblx0XHRcdFx0Y2FzZSAndmlldyc6XG5cdFx0XHRcdGNhc2UgJ3B1cmdlJzpcblx0XHRcdFx0Y2FzZSAncmVuZGVyJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gd2lraUxpbms7XG5cdFx0XHRcdFx0dGhpcy5hY3Rpb24gPSB0aGlzLmlkO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdyYXcnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSB3aWtpTGluaztcblx0XHRcdFx0XHR0aGlzLmFjdGlvbiA9ICdyYXcnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICduZXcnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSB3aWtpTGluaztcblx0XHRcdFx0XHR0aGlzLmFjdGlvbiA9ICdlZGl0JnNlY3Rpb249bmV3Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnbWFpbmxpbmsnOlxuXHRcdFx0XHRcdGlmICh0aGlzLnRleHQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0dGhpcy50ZXh0ID0gdGhpcy5hcnRpY2xlLnRvU3RyaW5nKCkuZW50aWZ5KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChnZXRWYWx1ZU9mKCdwb3B1cFNpbXBsaWZ5TWFpbkxpbmsnKSAmJiBpc0luU3RyaXBwYWJsZU5hbWVzcGFjZSh0aGlzLmFydGljbGUpKSB7XG5cdFx0XHRcdFx0XHQvLyBvbmx5IHNob3cgdGhlIC9zdWJwYWdlIHBhcnQgb2YgdGhlIHRpdGxlIHRleHRcblx0XHRcdFx0XHRcdGNvbnN0IHMgPSB0aGlzLnRleHQuc3BsaXQoJy8nKTtcblx0XHRcdFx0XHRcdHRoaXMudGV4dCA9IHMuYXQoLTEpO1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMudGV4dCA9PT0gJycgJiYgcy5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMudGV4dCA9IHMuYXQoLTIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnByaW50ID0gdGl0bGVkV2lraUxpbms7XG5cdFx0XHRcdFx0aWYgKHRoaXMudGl0bGUgPT09IHVuZGVmaW5lZCAmJiBwZy5jdXJyZW50LmxpbmsgJiYgcGcuY3VycmVudC5saW5rLmhyZWYgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0dGhpcy50aXRsZSA9IHNhZmVEZWNvZGVVUkkocGcuY3VycmVudC5saW5rLm9yaWdpbmFsVGl0bGUgPz8gdGhpcy5hcnRpY2xlKTtcblx0XHRcdFx0XHRcdGlmICh0aGlzLm9sZGlkICE9PSB1bmRlZmluZWQgJiYgdGhpcy5vbGRpZCkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnRpdGxlID0gdHByaW50ZignUmV2aXNpb24gJXMgb2YgJXMnLCBbdGhpcy5vbGRpZCwgdGhpcy50aXRsZV0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLmFjdGlvbiA9ICd2aWV3Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAndXNlclBhZ2UnOlxuXHRcdFx0XHRjYXNlICdhcnRpY2xlJzpcblx0XHRcdFx0Y2FzZSAnZWRpdEFydGljbGUnOlxuXHRcdFx0XHRcdGRlbGV0ZSB0aGlzLm9sZGlkO1xuXHRcdFx0XHRcdC8vIG13Lm5vdGlmeShgJHt0aGlzLmlkfVxcbiR7dGhpcy5hcnRpY2xlfVxcbiR7dHlwZW9mIHRoaXMuYXJ0aWNsZX1gLCB7dGFnOiAncG9wdXBzJywgdHlwZTogJ3dhcm4nfSk7XG5cdFx0XHRcdFx0dGhpcy5hcnRpY2xlID0gdGhpcy5hcnRpY2xlLmFydGljbGVGcm9tVGFsa09yQXJ0aWNsZSgpO1xuXHRcdFx0XHRcdC8vIG13Lm5vdGlmeShgJHt0aGlzLmlkfVxcbiR7dGhpcy5hcnRpY2xlfVxcbiR7dHlwZW9mIHRoaXMuYXJ0aWNsZX1gLCB7dGFnOiAncG9wdXBzJywgdHlwZTogJ3dhcm4nfSk7XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHdpa2lMaW5rO1xuXHRcdFx0XHRcdHRoaXMuYWN0aW9uID0gdGhpcy5pZC5pbmRleE9mKCdlZGl0JykgPT09IDAgPyAnZWRpdCcgOiAndmlldyc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3VzZXJUYWxrJzpcblx0XHRcdFx0Y2FzZSAndGFsayc6XG5cdFx0XHRcdFx0dGhpcy5hcnRpY2xlID0gdGhpcy5hcnRpY2xlLnRhbGtQYWdlKCk7XG5cdFx0XHRcdFx0ZGVsZXRlIHRoaXMub2xkaWQ7XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHdpa2lMaW5rO1xuXHRcdFx0XHRcdHRoaXMuYWN0aW9uID0gJ3ZpZXcnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdhcmluJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gYXJpbkxpbms7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2NvdW50Jzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gZWRpdENvdW50ZXJMaW5rO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdlZGl0b3JzJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gZWRpdG9yTGlzdExpbms7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2xhc3RFZGl0Jzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gdGl0bGVkRGlmZkxpbms7XG5cdFx0XHRcdFx0dGhpcy50aXRsZSA9IHBvcHVwU3RyaW5nKCdTaG93IHRoZSBsYXN0IGVkaXQnKTtcblx0XHRcdFx0XHR0aGlzLmZyb20gPSAncHJldic7XG5cdFx0XHRcdFx0dGhpcy50byA9ICdjdXInO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdvbGRFZGl0Jzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gdGl0bGVkRGlmZkxpbms7XG5cdFx0XHRcdFx0dGhpcy50aXRsZSA9IGAke3BvcHVwU3RyaW5nKCdTaG93IHRoZSBlZGl0IG1hZGUgdG8gZ2V0IHJldmlzaW9uJyl9ICR7dGhpcy5vbGRpZH1gO1xuXHRcdFx0XHRcdHRoaXMuZnJvbSA9ICdwcmV2Jztcblx0XHRcdFx0XHR0aGlzLnRvID0gdGhpcy5vbGRpZDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnZWRpdE9sZCc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHdpa2lMaW5rO1xuXHRcdFx0XHRcdHRoaXMuYWN0aW9uID0gJ2VkaXQnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICd1bmRvJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gd2lraUxpbms7XG5cdFx0XHRcdFx0dGhpcy5hY3Rpb24gPSAnZWRpdCZ1bmRvPSc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3JldmVydCc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHdpa2lMaW5rO1xuXHRcdFx0XHRcdHRoaXMuYWN0aW9uID0gJ3JldmVydCc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ251bGxFZGl0Jzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gd2lraUxpbms7XG5cdFx0XHRcdFx0dGhpcy5hY3Rpb24gPSAnbnVsbEVkaXQnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdkaWZmQ3VyJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gdGl0bGVkRGlmZkxpbms7XG5cdFx0XHRcdFx0dGhpcy50aXRsZSA9IHRwcmludGYoJ1Nob3cgY2hhbmdlcyBzaW5jZSByZXZpc2lvbiAlcycsIFt0aGlzLm9sZGlkXSk7XG5cdFx0XHRcdFx0dGhpcy5mcm9tID0gdGhpcy5vbGRpZDtcblx0XHRcdFx0XHR0aGlzLnRvID0gJ2N1cic7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2VkaXRVc2VyVGFsayc6XG5cdFx0XHRcdGNhc2UgJ2VkaXRUYWxrJzpcblx0XHRcdFx0XHRkZWxldGUgdGhpcy5vbGRpZDtcblx0XHRcdFx0XHR0aGlzLmFydGljbGUgPSB0aGlzLmFydGljbGUudGFsa1BhZ2UoKTtcblx0XHRcdFx0XHR0aGlzLmFjdGlvbiA9ICdlZGl0Jztcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gd2lraUxpbms7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ25ld1VzZXJUYWxrJzpcblx0XHRcdFx0Y2FzZSAnbmV3VGFsayc6XG5cdFx0XHRcdFx0dGhpcy5hcnRpY2xlID0gdGhpcy5hcnRpY2xlLnRhbGtQYWdlKCk7XG5cdFx0XHRcdFx0dGhpcy5hY3Rpb24gPSAnZWRpdCZzZWN0aW9uPW5ldyc7XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHdpa2lMaW5rO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdsYXN0Q29udHJpYic6XG5cdFx0XHRcdGNhc2UgJ3NpbmNlTWUnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBtYWdpY0hpc3RvcnlMaW5rO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICd0b2dnbGVQcmV2aWV3cyc6XG5cdFx0XHRcdFx0dGhpcy50ZXh0ID0gcG9wdXBTdHJpbmcocGcub3B0aW9uLnNpbXBsZVBvcHVwcyA/ICdlbmFibGUgcHJldmlld3MnIDogJ2Rpc2FibGUgcHJldmlld3MnKTtcblx0XHRcdFx0LyogZmFsbHMgdGhyb3VnaCAqL1xuXHRcdFx0XHRjYXNlICdkaXNhYmxlUG9wdXBzJzpcblx0XHRcdFx0Y2FzZSAncHVyZ2VQb3B1cHMnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBwb3B1cE1lbnVMaW5rO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gYFVua25vd24gbmF2bGluayB0eXBlOiAke3RoaXMuaWR9YDtcblx0XHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQvL1xuXHQvLyAgZW5kIG5hdmxpbmtzXG5cdC8vIEVOREZJTEU6IG5hdmxpbmtzLmpzXG5cdC8vIFNUQVJURklMRTogc2hvcnRjdXRrZXlzLmpzXG5cdGNvbnN0IHBvcHVwSGFuZGxlS2V5cHJlc3MgPSBmdW5jdGlvbiBwb3B1cEhhbmRsZUtleXByZXNzKGV2dCkge1xuXHRcdGNvbnN0IGtleUNvZGUgPSB3aW5kb3cuZXZlbnQgPyB3aW5kb3cuZXZlbnQua2V5Q29kZSA6IChldnQua2V5Q29kZSA/PyBldnQud2hpY2gpO1xuXHRcdGlmICgha2V5Q29kZSB8fCAhcGcuY3VycmVudC5saW5rIHx8ICFwZy5jdXJyZW50LmxpbmsubmF2cG9wdXApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKGtleUNvZGUgPT09IDI3KSB7XG5cdFx0XHQvLyBlc2NhcGVcblx0XHRcdGtpbGxQb3B1cCgpO1xuXHRcdFx0cmV0dXJuIGZhbHNlOyAvLyBzd2FsbG93IGtleXByZXNzXG5cdFx0fVxuXHRcdGNvbnN0IGxldHRlciA9IFN0cmluZy5mcm9tQ29kZVBvaW50KGtleUNvZGUpO1xuXHRcdGNvbnN0IGxpbmtzID0gcGcuY3VycmVudC5saW5rLm5hdnBvcHVwLm1haW5EaXYucXVlcnlTZWxlY3RvckFsbCgnQScpO1xuXHRcdGxldCBzdGFydExpbmsgPSAwO1xuXHRcdGxldCBpO1xuXHRcdGxldCBqO1xuXHRcdGlmIChwb3B1cEhhbmRsZUtleXByZXNzLmxhc3RQb3B1cExpbmtTZWxlY3RlZCkge1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdGlmIChsaW5rc1tpXSA9PT0gcG9wdXBIYW5kbGVLZXlwcmVzcy5sYXN0UG9wdXBMaW5rU2VsZWN0ZWQpIHtcblx0XHRcdFx0XHRzdGFydExpbmsgPSBpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZvciAoaiA9IDA7IGogPCBsaW5rcy5sZW5ndGg7ICsraikge1xuXHRcdFx0aSA9IChzdGFydExpbmsgKyBqICsgMSkgJSBsaW5rcy5sZW5ndGg7XG5cdFx0XHRpZiAobGlua3NbaV0uZ2V0QXR0cmlidXRlKCdwb3B1cGtleScpID09PSBsZXR0ZXIpIHtcblx0XHRcdFx0aWYgKGV2dCAmJiBldnQucHJldmVudERlZmF1bHQpIHtcblx0XHRcdFx0XHRldnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaW5rc1tpXS5mb2N1cygpO1xuXHRcdFx0XHRwb3B1cEhhbmRsZUtleXByZXNzLmxhc3RQb3B1cExpbmtTZWxlY3RlZCA9IGxpbmtzW2ldO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7IC8vIHN3YWxsb3cga2V5cHJlc3Ncblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gcGFzcyBrZXlwcmVzcyBvblxuXHRcdGlmIChkb2N1bWVudC5vbGRQb3B1cE9ua2V5cHJlc3MpIHtcblx0XHRcdHJldHVybiBkb2N1bWVudC5vbGRQb3B1cE9ua2V5cHJlc3MoZXZ0KTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH07XG5cdGNvbnN0IGFkZFBvcHVwU2hvcnRjdXRzID0gKCkgPT4ge1xuXHRcdGlmIChkb2N1bWVudC5vbmtleXByZXNzICE9PSBwb3B1cEhhbmRsZUtleXByZXNzKSB7XG5cdFx0XHRkb2N1bWVudC5vbGRQb3B1cE9ua2V5cHJlc3MgPSBkb2N1bWVudC5vbmtleXByZXNzO1xuXHRcdH1cblx0XHRkb2N1bWVudC5vbmtleXByZXNzID0gcG9wdXBIYW5kbGVLZXlwcmVzcztcblx0fTtcblx0Y29uc3Qgcm1Qb3B1cFNob3J0Y3V0cyA9ICgpID0+IHtcblx0XHRwb3B1cEhhbmRsZUtleXByZXNzLmxhc3RQb3B1cExpbmtTZWxlY3RlZCA9IG51bGw7XG5cdFx0dHJ5IHtcblx0XHRcdGlmIChkb2N1bWVudC5vbGRQb3B1cE9ua2V5cHJlc3MgJiYgZG9jdW1lbnQub2xkUG9wdXBPbmtleXByZXNzID09PSBwb3B1cEhhbmRsZUtleXByZXNzKSB7XG5cdFx0XHRcdC8vIHBhbmljXG5cdFx0XHRcdGRvY3VtZW50Lm9ua2V5cHJlc3MgPSBudWxsOyAvLyAoKSA9PiB7fTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0ZG9jdW1lbnQub25rZXlwcmVzcyA9IGRvY3VtZW50Lm9sZFBvcHVwT25rZXlwcmVzcztcblx0XHR9IGNhdGNoIHtcblx0XHRcdC8qIElFIGdvZXMgaGVyZSAqL1xuXHRcdH1cblx0fTtcblx0Y29uc3QgYWRkTGlua1Byb3BlcnR5ID0gKGh0bWwsIHByb3BlcnR5KSA9PiB7XG5cdFx0Ly8gdGFrZSBcIjxhIGhyZWY9Li4uPi4uLjwvYT4gYW5kIGFkZCBhIHByb3BlcnR5XG5cdFx0Ly8gbm90IHNvcGhpc3RpY2F0ZWQgYXQgYWxsLCBlYXNpbHkgYnJva2VuXG5cdFx0Y29uc3QgaSA9IGh0bWwuaW5kZXhPZignPicpO1xuXHRcdGlmIChpID09PSAtMSkge1xuXHRcdFx0cmV0dXJuIGh0bWw7XG5cdFx0fVxuXHRcdHJldHVybiBgJHtodG1sLnNsaWNlKDAsIE1hdGgubWF4KDAsIGkpKX0gJHtwcm9wZXJ0eX0ke2h0bWwuc2xpY2UoTWF0aC5tYXgoMCwgaSkpfWA7XG5cdH07XG5cdGNvbnN0IGFkZFBvcHVwU2hvcnRjdXQgPSAoaHRtbCwga2V5KSA9PiB7XG5cdFx0aWYgKCFnZXRWYWx1ZU9mKCdwb3B1cFNob3J0Y3V0S2V5cycpKSB7XG5cdFx0XHRyZXR1cm4gaHRtbDtcblx0XHR9XG5cdFx0Y29uc3QgcmV0ID0gYWRkTGlua1Byb3BlcnR5KGh0bWwsIGBwb3B1cGtleT1cIiR7a2V5fVwiYCk7XG5cdFx0aWYgKGtleSA9PT0gJyAnKSB7XG5cdFx0XHRrZXkgPSBwb3B1cFN0cmluZygnc3BhY2ViYXInKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJldC5yZXBsYWNlKC9eKC4qPykodGl0bGU9XCIpKC4qPykoXCIuKikkL2ksIGAkMSQyJDMgWyR7a2V5fV0kNGApO1xuXHR9O1xuXHQvLyBFTkRGSUxFOiBzaG9ydGN1dGtleXMuanNcblx0Ly8gU1RBUlRGSUxFOiBkaWZmcHJldmlldy5qc1xuXHQvLyBsZXRzIGp1bXAgdGhyb3VnaCBob29wcyB0byBmaW5kIHRoZSByZXYgaWRzIHdlIG5lZWQgdG8gcmV0cmlldmVcblx0Y29uc3QgbG9hZERpZmYgPSAoYXJ0aWNsZSwgb2xkaWQsIGRpZmYsIG5hdnBvcCkgPT4ge1xuXHRcdG5hdnBvcC5kaWZmRGF0YSA9IHtcblx0XHRcdG9sZFJldjoge30sXG5cdFx0XHRuZXdSZXY6IHt9LFxuXHRcdH07XG5cdFx0Y29uc3QgYXBpID0gZ2V0TXdBcGkoKTtcblx0XHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdjb21wYXJlJyxcblx0XHRcdHByb3A6IFsnaWRzJywgJ3RpdGxlJ10sXG5cdFx0XHRzbWF4YWdlOiA2MDAsXG5cdFx0XHRtYXhhZ2U6IDYwMCxcblx0XHR9O1xuXHRcdGlmIChhcnRpY2xlLnRpdGxlKSB7XG5cdFx0XHRwYXJhbXMuZnJvbXRpdGxlID0gYXJ0aWNsZS50aXRsZTtcblx0XHR9XG5cdFx0c3dpdGNoIChkaWZmKSB7XG5cdFx0XHRjYXNlICdjdXInOlxuXHRcdFx0XHRzd2l0Y2ggKG9sZGlkKSB7XG5cdFx0XHRcdFx0Y2FzZSBudWxsOlxuXHRcdFx0XHRcdGNhc2UgJyc6XG5cdFx0XHRcdFx0Y2FzZSAncHJldic6XG5cdFx0XHRcdFx0XHQvLyB0aGlzIGNhbiBvbmx5IHdvcmsgaWYgd2UgaGF2ZSB0aGUgdGl0bGVcblx0XHRcdFx0XHRcdC8vIGN1ciAtPiBwcmV2XG5cdFx0XHRcdFx0XHRwYXJhbXMudG9yZWxhdGl2ZSA9ICdwcmV2Jztcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRwYXJhbXMuZnJvbXJldiA9IG9sZGlkO1xuXHRcdFx0XHRcdFx0cGFyYW1zLnRvcmVsYXRpdmUgPSAnY3VyJztcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAncHJldic6XG5cdFx0XHRcdGlmIChvbGRpZCkge1xuXHRcdFx0XHRcdHBhcmFtcy5mcm9tcmV2ID0gb2xkaWQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0cGFyYW1zLnRvcmVsYXRpdmUgPSAncHJldic7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnbmV4dCc6XG5cdFx0XHRcdHBhcmFtcy5mcm9tcmV2ID0gb2xkaWQgfHwgMDtcblx0XHRcdFx0cGFyYW1zLnRvcmVsYXRpdmUgPSAnbmV4dCc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cGFyYW1zLmZyb21yZXYgPSBvbGRpZCB8fCAwO1xuXHRcdFx0XHRwYXJhbXMudG9yZXYgPSBkaWZmIHx8IDA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRhcGkuZ2V0KHBhcmFtcykudGhlbigoZGF0YSkgPT4ge1xuXHRcdFx0bmF2cG9wLmRpZmZEYXRhLm9sZFJldi5yZXZpZCA9IGRhdGEuY29tcGFyZS5mcm9tcmV2aWQ7XG5cdFx0XHRuYXZwb3AuZGlmZkRhdGEubmV3UmV2LnJldmlkID0gZGF0YS5jb21wYXJlLnRvcmV2aWQ7XG5cdFx0XHRhZGRSZXZpZXdMaW5rKG5hdnBvcCwgJ3BvcHVwTWlzY1Rvb2xzJyk7XG5cdFx0XHRjb25zdCBnbyA9ICgpID0+IHtcblx0XHRcdFx0cGVuZGluZ05hdnBvcFRhc2sobmF2cG9wKTtcblx0XHRcdFx0bGV0IHVybCA9IGAke3BnLndpa2kuYXBpd2lraWJhc2V9P2Zvcm1hdD1qc29uJmZvcm1hdHZlcnNpb249MiZhY3Rpb249cXVlcnkmYDtcblx0XHRcdFx0dXJsICs9IGByZXZpZHM9JHtuYXZwb3AuZGlmZkRhdGEub2xkUmV2LnJldmlkfXwke25hdnBvcC5kaWZmRGF0YS5uZXdSZXYucmV2aWR9YDtcblx0XHRcdFx0dXJsICs9ICcmcHJvcD1yZXZpc2lvbnMmcnZwcm9wPWlkc3x0aW1lc3RhbXB8Y29udGVudCc7XG5cdFx0XHRcdGdldFBhZ2VXaXRoQ2FjaGluZyh1cmwsIGRvbmVEaWZmLCBuYXZwb3ApO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTsgLy8gcmVtb3ZlIGhvb2sgb25jZSBydW5cblx0XHRcdH07XG5cdFx0XHRpZiAobmF2cG9wLnZpc2libGUgfHwgIWdldFZhbHVlT2YoJ3BvcHVwTGF6eURvd25sb2FkcycpKSB7XG5cdFx0XHRcdGdvKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRuYXZwb3AuYWRkSG9vayhnbywgJ3VuaGlkZScsICdiZWZvcmUnLCAnRE9XTkxPQURfRElGRlMnKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblx0Ly8gUHV0IGEgXCJtYXJrIHBhdHJvbGxlZFwiIGxpbmsgdG8gYW4gZWxlbWVudCB0YXJnZXRcblx0Ly8gVE9ETzogQWxsb3cgcGF0cm9sIGEgcmV2aXNpb24sIGFzIHdlbGwgYXMgYSBkaWZmXG5cdGNvbnN0IGFkZFJldmlld0xpbmsgPSAobmF2cG9wLCB0YXJnZXQpID0+IHtcblx0XHRpZiAoIXBnLnVzZXIuY2FuUmV2aWV3KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vIElmICduZXdSZXYnIGlzIG9sZGVyIHRoYW4gJ29sZFJldicgdGhhbiBpdCBjb3VsZCBiZSBjb25mdXNpbmcsIHNvIHdlIGRvIG5vdCBzaG93IHRoZSByZXZpZXcgbGluay5cblx0XHRpZiAobmF2cG9wLmRpZmZEYXRhLm5ld1Jldi5yZXZpZCA8PSBuYXZwb3AuZGlmZkRhdGEub2xkUmV2LnJldmlkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0cHJvcDogWydpbmZvJywgJ2ZsYWdnZWQnXSxcblx0XHRcdHJldmlkczogbmF2cG9wLmRpZmZEYXRhLm9sZFJldi5yZXZpZCxcblx0XHR9O1xuXHRcdGdldE13QXBpKClcblx0XHRcdC5nZXQocGFyYW1zKVxuXHRcdFx0LnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdFx0Y29uc3Qgc3RhYmxlX3JldmlkID0gKGRhdGEucXVlcnkucGFnZXNbMF0uZmxhZ2dlZCAmJiBkYXRhLnF1ZXJ5LnBhZ2VzWzBdLmZsYWdnZWQuc3RhYmxlX3JldmlkKSB8fCAwO1xuXHRcdFx0XHQvLyBUaGUgZGlmZiBjYW4gYmUgcmV2aWV3ZWQgaWYgdGhlIG9sZCB2ZXJzaW9uIGlzIHRoZSBsYXN0IHJldmlld2VkIHZlcnNpb25cblx0XHRcdFx0Ly8gVE9ETzogT3RoZXIgcG9zc2libGUgY29uZGl0aW9ucyB0aGF0IHdlIG1heSB3YW50IHRvIGltcGxlbWVudCBpbnN0ZWFkIG9mIHRoaXMgb25lOlxuXHRcdFx0XHQvLyAtIG9sZCB2ZXJzaW9uIGlzIHBhdHJvbGxlZCBhbmQgdGhlIG5ldyB2ZXJzaW9uIGlzIG5vdCBwYXRyb2xsZWRcblx0XHRcdFx0Ly8gLSBvbGQgdmVyc2lvbiBpcyBwYXRyb2xsZWQgYW5kIHRoZSBuZXcgdmVyc2lvbiBpcyBtb3JlIHJlY2VudCB0aGFuIHRoZSBsYXN0IHJldmlld2VkIHZlcnNpb25cblx0XHRcdFx0aWYgKHN0YWJsZV9yZXZpZCA9PT0gbmF2cG9wLmRpZmZEYXRhLm9sZFJldi5yZXZpZCkge1xuXHRcdFx0XHRcdGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdFx0XHRcdFx0YS5pbm5lckhUTUwgPSBwb3B1cFN0cmluZygnbWFyayBwYXRyb2xsZWQnKTtcblx0XHRcdFx0XHRhLnRpdGxlID0gcG9wdXBTdHJpbmcoJ21hcmtwYXRyb2xsZWRIaW50Jyk7XG5cdFx0XHRcdFx0YS5vbmNsaWNrID0gKCkgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdFx0XHRcdFx0XHRhY3Rpb246ICdyZXZpZXcnLFxuXHRcdFx0XHRcdFx0XHRjb21tZW50OiB0cHJpbnRmKCdkZWZhdWx0cG9wdXBSZXZpZXdlZFN1bW1hcnknLCBbXG5cdFx0XHRcdFx0XHRcdFx0bmF2cG9wLmRpZmZEYXRhLm9sZFJldi5yZXZpZCxcblx0XHRcdFx0XHRcdFx0XHRuYXZwb3AuZGlmZkRhdGEubmV3UmV2LnJldmlkLFxuXHRcdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRcdFx0cmV2aWQ6IG5hdnBvcC5kaWZmRGF0YS5uZXdSZXYucmV2aWQsXG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0Z2V0TXdBcGkoKVxuXHRcdFx0XHRcdFx0XHQucG9zdFdpdGhUb2tlbignY3NyZicsIHBhcmFtcylcblx0XHRcdFx0XHRcdFx0LmRvbmUoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0XHRcdFx0XHQvLyBUT0RPOiBVcGRhdGUgY3VycmVudCBwYWdlIGFuZCBvdGhlciBhbHJlYWR5IGNvbnN0cnVjdGVkIHBvcHVwc1xuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHQuZmFpbCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkocG9wdXBTdHJpbmcoJ0NvdWxkIG5vdCBtYXJrZWQgdGhpcyBlZGl0IGFzIHBhdHJvbGxlZCcpLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0YWc6ICdwb3B1cHMnLFxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRzZXRQb3B1cEhUTUwoYSwgdGFyZ2V0LCBuYXZwb3AuaWROdW1iZXIsIG51bGwsIHRydWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0fTtcblx0Y29uc3QgZG9uZURpZmYgPSAoZG93bmxvYWQpID0+IHtcblx0XHRpZiAoIWRvd25sb2FkLm93bmVyIHx8ICFkb3dubG9hZC5vd25lci5kaWZmRGF0YSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBuYXZwb3AgPSBkb3dubG9hZC5vd25lcjtcblx0XHRjb21wbGV0ZWROYXZwb3BUYXNrKG5hdnBvcCk7XG5cdFx0bGV0IHBhZ2VzO1xuXHRcdGxldCByZXZpc2lvbnMgPSBbXTtcblx0XHR0cnkge1xuXHRcdFx0Ly8gUHJvY2VzcyB0aGUgZG93bmxvYWRzXG5cdFx0XHQoe3BhZ2VzfSA9IGdldEpzT2JqKGRvd25sb2FkLmRhdGEpLnF1ZXJ5KTtcblx0XHRcdGZvciAoY29uc3QgcGFnZSBvZiBwYWdlcykge1xuXHRcdFx0XHRyZXZpc2lvbnMgPSBbLi4ucmV2aXNpb25zLCAuLi5wYWdlLnJldmlzaW9uc107XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGNvbnN0IHJldmlzaW9uIG9mIHJldmlzaW9ucykge1xuXHRcdFx0XHRpZiAocmV2aXNpb24ucmV2aWQgPT09IG5hdnBvcC5kaWZmRGF0YS5vbGRSZXYucmV2aWQpIHtcblx0XHRcdFx0XHRuYXZwb3AuZGlmZkRhdGEub2xkUmV2LnJldmlzaW9uID0gcmV2aXNpb247XG5cdFx0XHRcdH0gZWxzZSBpZiAocmV2aXNpb24ucmV2aWQgPT09IG5hdnBvcC5kaWZmRGF0YS5uZXdSZXYucmV2aWQpIHtcblx0XHRcdFx0XHRuYXZwb3AuZGlmZkRhdGEubmV3UmV2LnJldmlzaW9uID0gcmV2aXNpb247XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdGVycmxvZygnQ291bGQgbm90IGdldCBkaWZmJyk7XG5cdFx0fVxuXHRcdGluc2VydERpZmYobmF2cG9wKTtcblx0fTtcblx0Y29uc3Qgcm1Cb3JpbmdMaW5lcyA9IChhLCBiLCBjb250ZXh0KSA9PiB7XG5cdFx0aWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y29udGV4dCA9IDI7XG5cdFx0fVxuXHRcdC8vIHRoaXMgaXMgZmFpcmx5IHNsb3cuLi4gaSB0aGluayBpdCdzIHF1aWNrZXIgdGhhbiBkb2luZyBhIHdvcmQtYmFzZWQgZGlmZiBmcm9tIHRoZSBvZmYsIHRob3VnaFxuXHRcdGNvbnN0IGFhID0gW107XG5cdFx0Y29uc3QgYWFhID0gW107XG5cdFx0Y29uc3QgYmIgPSBbXTtcblx0XHRjb25zdCBiYmIgPSBbXTtcblx0XHRsZXQgaTtcblx0XHRsZXQgajtcblx0XHQvLyBmaXJzdCwgZ2F0aGVyIGFsbCBkaXNjb25uZWN0ZWQgbm9kZXMgaW4gYSBhbmQgYWxsIGNyb3NzaW5nIG5vZGVzIGluIGEgYW5kIGJcblx0XHRmb3IgKGkgPSAwOyBpIDwgYS5sZW5ndGg7ICsraSkge1xuXHRcdFx0aWYgKCFhW2ldLnBhaXJlZCkge1xuXHRcdFx0XHRhYVtpXSA9IDE7XG5cdFx0XHR9IGVsc2UgaWYgKGNvdW50Q3Jvc3NpbmdzKGIsIGEsIGksIHRydWUpKSB7XG5cdFx0XHRcdGFhW2ldID0gMTtcblx0XHRcdFx0YmJbYVtpXS5yb3ddID0gMTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gcGljayB1cCByZW1haW5pbmcgZGlzY29ubmVjdGVkIG5vZGVzIGluIGJcblx0XHRmb3IgKGkgPSAwOyBpIDwgYi5sZW5ndGg7ICsraSkge1xuXHRcdFx0aWYgKGJiW2ldID09PSAxKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFiW2ldLnBhaXJlZCkge1xuXHRcdFx0XHRiYltpXSA9IDE7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIGFub3RoZXIgcGFzcyB0byBnYXRoZXIgY29udGV4dDogd2Ugd2FudCB0aGUgbmVpZ2hib3VycyBvZiBpbmNsdWRlZCBub2RlcyB3aGljaCBhcmUgbm90XG5cdFx0Ly8geWV0IGluY2x1ZGVkIHdlIGhhdmUgdG8gYWRkIGluIHBhcnRuZXJzIG9mIHRoZXNlIG5vZGVzLCBidXQgd2UgZG9uJ3Qgd2FudCB0byBhZGQgY29udGV4dFxuXHRcdC8vIGZvciAqdGhvc2UqIG5vZGVzIGluIHRoZSBuZXh0IHBhc3Ncblx0XHRmb3IgKGkgPSAwOyBpIDwgYi5sZW5ndGg7ICsraSkge1xuXHRcdFx0aWYgKGJiW2ldID09PSAxKSB7XG5cdFx0XHRcdGZvciAoaiA9IE1hdGgubWF4KDAsIGkgLSBjb250ZXh0KTsgaiA8IE1hdGgubWluKGIubGVuZ3RoLCBpICsgY29udGV4dCk7ICsraikge1xuXHRcdFx0XHRcdGlmICghYmJbal0pIHtcblx0XHRcdFx0XHRcdGJiW2pdID0gMTtcblx0XHRcdFx0XHRcdGFhW2Jbal0ucm93XSA9IDAuNTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Zm9yIChpID0gMDsgaSA8IGEubGVuZ3RoOyArK2kpIHtcblx0XHRcdGlmIChhYVtpXSA9PT0gMSkge1xuXHRcdFx0XHRmb3IgKGogPSBNYXRoLm1heCgwLCBpIC0gY29udGV4dCk7IGogPCBNYXRoLm1pbihhLmxlbmd0aCwgaSArIGNvbnRleHQpOyArK2opIHtcblx0XHRcdFx0XHRpZiAoIWFhW2pdKSB7XG5cdFx0XHRcdFx0XHRhYVtqXSA9IDE7XG5cdFx0XHRcdFx0XHRiYlthW2pdLnJvd10gPSAwLjU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZvciAoaSA9IDA7IGkgPCBiYi5sZW5ndGg7ICsraSkge1xuXHRcdFx0aWYgKGJiW2ldID4gMCkge1xuXHRcdFx0XHQvLyBpdCdzIGEgcm93IHdlIG5lZWRcblx0XHRcdFx0aWYgKGJbaV0ucGFpcmVkKSB7XG5cdFx0XHRcdFx0YmJiLnB1c2goYltpXS50ZXh0KTsgLy8gam9pbmVkOyBwYXJ0bmVyIHNob3VsZCBiZSBpbiBhYVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGJiYi5wdXNoKGJbaV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZvciAoaSA9IDA7IGkgPCBhYS5sZW5ndGg7ICsraSkge1xuXHRcdFx0aWYgKGFhW2ldID4gMCkge1xuXHRcdFx0XHQvLyBpdCdzIGEgcm93IHdlIG5lZWRcblx0XHRcdFx0aWYgKGFbaV0ucGFpcmVkKSB7XG5cdFx0XHRcdFx0YWFhLnB1c2goYVtpXS50ZXh0KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBqb2luZWQ7IHBhcnRuZXIgc2hvdWxkIGJlIGluIGFhXG5cdFx0XHRcdFx0YWFhLnB1c2goYVtpXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdGE6IGFhYSxcblx0XHRcdGI6IGJiYixcblx0XHR9O1xuXHR9O1xuXHRjb25zdCBzdHJpcE91dGVyQ29tbW9uTGluZXMgPSAoYSwgYiwgY29udGV4dCkgPT4ge1xuXHRcdGxldCBpID0gMDtcblx0XHR3aGlsZSAoaSA8IGEubGVuZ3RoICYmIGkgPCBiLmxlbmd0aCAmJiBhW2ldID09PSBiW2ldKSB7XG5cdFx0XHQrK2k7XG5cdFx0fVxuXHRcdGxldCBqID0gYS5sZW5ndGggLSAxO1xuXHRcdGxldCBrID0gYi5sZW5ndGggLSAxO1xuXHRcdHdoaWxlIChqID49IDAgJiYgayA+PSAwICYmIGFbal0gPT09IGJba10pIHtcblx0XHRcdC0tajtcblx0XHRcdC0taztcblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdGE6IGEuc2xpY2UoTWF0aC5tYXgoMCwgaSAtIDEgLSBjb250ZXh0KSwgTWF0aC5taW4oYS5sZW5ndGggKyAxLCBqICsgY29udGV4dCArIDEpKSxcblx0XHRcdGI6IGIuc2xpY2UoTWF0aC5tYXgoMCwgaSAtIDEgLSBjb250ZXh0KSwgTWF0aC5taW4oYi5sZW5ndGggKyAxLCBrICsgY29udGV4dCArIDEpKSxcblx0XHR9O1xuXHR9O1xuXHRjb25zdCBpbnNlcnREaWZmID0gKG5hdnBvcCkgPT4ge1xuXHRcdC8vIGZvciBzcGVlZCByZWFzb25zLCB3ZSBmaXJzdCBkbyBhIGxpbmUtYmFzZWQgZGlmZiwgZGlzY2FyZCBzdHVmZiB0aGF0IHNlZW1zIGJvcmluZywgdGhlblxuXHRcdC8vIGRvIGEgd29yZC1iYXNlZCBkaWZmXG5cdFx0Ly8gRklYTUU6IHNvbWV0aW1lcyB0aGlzIGdpdmVzIG1pc2xlYWRpbmcgZGlmZnMgYXMgZGlzdGFudCBjaHVua3MgYXJlIHNxdWFzaGVkIHRvZ2V0aGVyXG5cdFx0bGV0IG9sZGxpbmVzID0gbmF2cG9wLmRpZmZEYXRhLm9sZFJldi5yZXZpc2lvbi5jb250ZW50LnNwbGl0KCdcXG4nKTtcblx0XHRsZXQgbmV3bGluZXMgPSBuYXZwb3AuZGlmZkRhdGEubmV3UmV2LnJldmlzaW9uLmNvbnRlbnQuc3BsaXQoJ1xcbicpO1xuXHRcdGxldCBpbm5lciA9IHN0cmlwT3V0ZXJDb21tb25MaW5lcyhvbGRsaW5lcywgbmV3bGluZXMsIGdldFZhbHVlT2YoJ3BvcHVwRGlmZkNvbnRleHRMaW5lcycpKTtcblx0XHRvbGRsaW5lcyA9IGlubmVyLmE7XG5cdFx0bmV3bGluZXMgPSBpbm5lci5iO1xuXHRcdGxldCB0cnVuY2F0ZWQgPSBmYWxzZTtcblx0XHRnZXRWYWx1ZU9mKCdwb3B1cERpZmZNYXhMaW5lcycpO1xuXHRcdGlmIChvbGRsaW5lcy5sZW5ndGggPiBwZy5vcHRpb24ucG9wdXBEaWZmTWF4TGluZXMgfHwgbmV3bGluZXMubGVuZ3RoID4gcGcub3B0aW9uLnBvcHVwRGlmZk1heExpbmVzKSB7XG5cdFx0XHQvLyB0cnVuY2F0ZVxuXHRcdFx0dHJ1bmNhdGVkID0gdHJ1ZTtcblx0XHRcdGlubmVyID0gc3RyaXBPdXRlckNvbW1vbkxpbmVzKFxuXHRcdFx0XHRvbGRsaW5lcy5zbGljZSgwLCBwZy5vcHRpb24ucG9wdXBEaWZmTWF4TGluZXMpLFxuXHRcdFx0XHRuZXdsaW5lcy5zbGljZSgwLCBwZy5vcHRpb24ucG9wdXBEaWZmTWF4TGluZXMpLFxuXHRcdFx0XHRwZy5vcHRpb24ucG9wdXBEaWZmQ29udGV4dExpbmVzXG5cdFx0XHQpO1xuXHRcdFx0b2xkbGluZXMgPSBpbm5lci5hO1xuXHRcdFx0bmV3bGluZXMgPSBpbm5lci5iO1xuXHRcdH1cblx0XHRjb25zdCBsaW5lRGlmZiA9IGRpZmYob2xkbGluZXMsIG5ld2xpbmVzKTtcblx0XHRjb25zdCBsaW5lczIgPSBybUJvcmluZ0xpbmVzKGxpbmVEaWZmLm8sIGxpbmVEaWZmLm4pO1xuXHRcdGNvbnN0IG9sZGxpbmVzMiA9IGxpbmVzMi5hO1xuXHRcdGNvbnN0IG5ld2xpbmVzMiA9IGxpbmVzMi5iO1xuXHRcdGxldCBodG1sID0gJzxocj4nO1xuXHRcdGlmIChnZXRWYWx1ZU9mKCdwb3B1cERpZmZEYXRlcycpKSB7XG5cdFx0XHRodG1sICs9IGRpZmZEYXRlc1RhYmxlKG5hdnBvcCk7XG5cdFx0XHRodG1sICs9ICc8aHI+Jztcblx0XHR9XG5cdFx0aHRtbCArPSBzaG9ydGVuRGlmZlN0cmluZyhcblx0XHRcdGRpZmZTdHJpbmcob2xkbGluZXMyLmpvaW4oJ1xcbicpLCBuZXdsaW5lczIuam9pbignXFxuJykpLFxuXHRcdFx0Z2V0VmFsdWVPZigncG9wdXBEaWZmQ29udGV4dENoYXJhY3RlcnMnKVxuXHRcdCkuam9pbignPGhyPicpO1xuXHRcdHNldFBvcHVwVGlwc0FuZEhUTUwoXG5cdFx0XHRodG1sLnNwbGl0KCdcXG4nKS5qb2luKCc8YnI+JykgK1xuXHRcdFx0XHQodHJ1bmNhdGVkID8gYDxocj48Yj4ke3BvcHVwU3RyaW5nKCdEaWZmIHRydW5jYXRlZCBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucycpfTwvYj5gIDogJycpLFxuXHRcdFx0J3BvcHVwUHJldmlldycsXG5cdFx0XHRuYXZwb3AuaWROdW1iZXJcblx0XHQpO1xuXHR9O1xuXHRjb25zdCBkaWZmRGF0ZXNUYWJsZSA9IChuYXZwb3ApID0+IHtcblx0XHRsZXQgaHRtbCA9ICc8dGFibGUgY2xhc3M9XCJwb3B1cF9kaWZmX2RhdGVzXCI+Jztcblx0XHRodG1sICs9IGRpZmZEYXRlc1RhYmxlUm93KG5hdnBvcC5kaWZmRGF0YS5uZXdSZXYucmV2aXNpb24sIHRwcmludGYoJ05ldyByZXZpc2lvbicpKTtcblx0XHRodG1sICs9IGRpZmZEYXRlc1RhYmxlUm93KG5hdnBvcC5kaWZmRGF0YS5vbGRSZXYucmV2aXNpb24sIHRwcmludGYoJ09sZCByZXZpc2lvbicpKTtcblx0XHRodG1sICs9ICc8L3RhYmxlPic7XG5cdFx0cmV0dXJuIGh0bWw7XG5cdH07XG5cdGNvbnN0IGRpZmZEYXRlc1RhYmxlUm93ID0gKHJldmlzaW9uLCBsYWJlbCkgPT4ge1xuXHRcdGxldCB0eHQgPSAnJztcblx0XHRjb25zdCBsYXN0TW9kaWZpZWREYXRlID0gbmV3IERhdGUocmV2aXNpb24udGltZXN0YW1wKTtcblx0XHR0eHQgPSBmb3JtYXR0ZWREYXRlVGltZShsYXN0TW9kaWZpZWREYXRlKTtcblx0XHRjb25zdCByZXZsaW5rID0gZ2VuZXJhbExpbmsoe1xuXHRcdFx0dXJsOiBgJHttdy5jb25maWcuZ2V0KCd3Z1NjcmlwdCcpfT9vbGRpZD0ke3JldmlzaW9uLnJldmlkfWAsXG5cdFx0XHR0ZXh0OiBsYWJlbCxcblx0XHRcdHRpdGxlOiBsYWJlbCxcblx0XHR9KTtcblx0XHRyZXR1cm4gc2ltcGxlUHJpbnRmKCc8dHI+PHRkPiVzPC90ZD48dGQ+JXM8L3RkPjwvdHI+JywgW3JldmxpbmssIHR4dF0pO1xuXHR9O1xuXHQvLyBFTkRGSUxFOiBkaWZmcHJldmlldy5qc1xuXHQvLyBTVEFSVEZJTEU6IGxpbmtzLmpzXG5cdC8vIExJTksgR0VORVJBVElPTiAvL1xuXHQvLyB0aXRsZWREaWZmTGluayAtLT4gdGl0bGVkV2lraUxpbmsgLS0+IGdlbmVyYWxMaW5rXG5cdC8vIHdpa2lMaW5rXHQgICAtLT4gdGl0bGVkV2lraUxpbmsgLS0+IGdlbmVyYWxMaW5rXG5cdC8vIGVkaXRDb3VudGVyTGluayAtLT4gZ2VuZXJhbExpbmtcblx0Ly8gVE9ETyBNYWtlIHRoZXNlIGZ1bmN0aW9ucyByZXR1cm4gRWxlbWVudCBvYmplY3RzLCBub3QganVzdCByYXcgSFRNTCBzdHJpbmdzLlxuXHRjb25zdCB0aXRsZWREaWZmTGluayA9IChsKSA9PiB7XG5cdFx0cmV0dXJuIHRpdGxlZFdpa2lMaW5rKHtcblx0XHRcdGFydGljbGU6IGwuYXJ0aWNsZSxcblx0XHRcdGFjdGlvbjogYCR7bC50b30mb2xkaWQ9JHtsLmZyb219YCxcblx0XHRcdG5ld1dpbjogbC5uZXdXaW4sXG5cdFx0XHRub1BvcHVwOiBsLm5vUG9wdXAsXG5cdFx0XHR0ZXh0OiBsLnRleHQsXG5cdFx0XHR0aXRsZTogbC50aXRsZSxcblx0XHRcdC8qIGhhY2s6IG5vIG9sZGlkIGhlcmUgKi9cblx0XHRcdGFjdGlvbk5hbWU6ICdkaWZmJyxcblx0XHR9KTtcblx0fTtcblx0Y29uc3Qgd2lraUxpbmsgPSAobCkgPT4ge1xuXHRcdC8vIHthcnRpY2xlOmFydGljbGUsIGFjdGlvbjphY3Rpb24sIHRleHQ6dGV4dCwgb2xkaWQsIG5ld2lkfSkge1xuXHRcdGlmICghKHR5cGVvZiBsLmFydGljbGUgPT09IHR5cGVvZiB7fSAmJiB0eXBlb2YgbC5hY3Rpb24gPT09IHR5cGVvZiAnJyAmJiB0eXBlb2YgbC50ZXh0ID09PSB0eXBlb2YgJycpKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0aWYgKGwub2xkaWQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0bC5vbGRpZCA9IG51bGw7XG5cdFx0fVxuXHRcdGNvbnN0IHNhdmVkT2xkaWQgPSBsLm9sZGlkO1xuXHRcdGlmICghL14oZWRpdHx2aWV3fHJldmVydHxyZW5kZXIpJHxecmF3Ly50ZXN0KGwuYWN0aW9uKSkge1xuXHRcdFx0bC5vbGRpZCA9IG51bGw7XG5cdFx0fVxuXHRcdGxldCBoaW50ID0gcG9wdXBTdHJpbmcoYCR7bC5hY3Rpb259SGludGApOyAvLyByZXZlcnRIaW50IGV0YyBldGMgZXRjXG5cdFx0Y29uc3Qgb2xkaWREYXRhID0gW2wub2xkaWQsIHNhZmVEZWNvZGVVUkkobC5hcnRpY2xlKV07XG5cdFx0bGV0IHJldmlzaW9uU3RyaW5nID0gdHByaW50ZigncmV2aXNpb24gJXMgb2YgJXMnLCBvbGRpZERhdGEpO1xuXHRcdGxvZyhgcmV2aXNpb25TdHJpbmc9JHtyZXZpc2lvblN0cmluZ31gKTtcblx0XHRzd2l0Y2ggKGwuYWN0aW9uKSB7XG5cdFx0XHRjYXNlICdlZGl0JnNlY3Rpb249bmV3Jzpcblx0XHRcdFx0aGludCA9IHBvcHVwU3RyaW5nKCduZXdTZWN0aW9uSGludCcpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2VkaXQmdW5kbz0nOlxuXHRcdFx0XHRpZiAobC5kaWZmICYmIGwuZGlmZiAhPT0gJ3ByZXYnICYmIHNhdmVkT2xkaWQpIHtcblx0XHRcdFx0XHRsLmFjdGlvbiArPSBgJHtsLmRpZmZ9JnVuZG9hZnRlcj0ke3NhdmVkT2xkaWR9YDtcblx0XHRcdFx0fSBlbHNlIGlmIChzYXZlZE9sZGlkKSB7XG5cdFx0XHRcdFx0bC5hY3Rpb24gKz0gc2F2ZWRPbGRpZDtcblx0XHRcdFx0fVxuXHRcdFx0XHRoaW50ID0gcG9wdXBTdHJpbmcoJ3VuZG9IaW50Jyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAncmF3JmN0eXBlPXRleHQvY3NzJzpcblx0XHRcdFx0aGludCA9IHBvcHVwU3RyaW5nKCdyYXdIaW50Jyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAncmV2ZXJ0Jzoge1xuXHRcdFx0XHRjb25zdCBwID0gcGFyc2VQYXJhbXMocGcuY3VycmVudC5saW5rLmhyZWYpO1xuXHRcdFx0XHRsLmFjdGlvbiA9IGBlZGl0JmF1dG9jbGljaz13cFNhdmUmYWN0b2tlbj0ke2F1dG9DbGlja1Rva2VuKCl9JmF1dG9pbXBsPSR7cG9wdXBTdHJpbmcoXG5cdFx0XHRcdFx0J2F1dG9lZGl0X3ZlcnNpb24nXG5cdFx0XHRcdCl9JmF1dG9zdW1tYXJ5PSR7cmV2ZXJ0U3VtbWFyeShsLm9sZGlkLCBwLmRpZmYpfWA7XG5cdFx0XHRcdGlmIChwLmRpZmYgPT09ICdwcmV2Jykge1xuXHRcdFx0XHRcdGwuYWN0aW9uICs9ICcmZGlyZWN0aW9uPXByZXYnO1xuXHRcdFx0XHRcdHJldmlzaW9uU3RyaW5nID0gdHByaW50ZigndGhlIHJldmlzaW9uIHByaW9yIHRvIHJldmlzaW9uICVzIG9mICVzJywgb2xkaWREYXRhKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBSZXZlcnRTdW1tYXJ5UHJvbXB0JykpIHtcblx0XHRcdFx0XHRsLmFjdGlvbiArPSAnJmF1dG9zdW1tYXJ5cHJvbXB0PXRydWUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChnZXRWYWx1ZU9mKCdwb3B1cE1pbm9yUmV2ZXJ0cycpKSB7XG5cdFx0XHRcdFx0bC5hY3Rpb24gKz0gJyZhdXRvbWlub3I9dHJ1ZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0bG9nKGByZXZpc2lvblN0cmluZyBpcyBub3cgJHtyZXZpc2lvblN0cmluZ31gKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRjYXNlICdudWxsRWRpdCc6XG5cdFx0XHRcdGwuYWN0aW9uID0gYGVkaXQmYXV0b2NsaWNrPXdwU2F2ZSZhY3Rva2VuPSR7YXV0b0NsaWNrVG9rZW4oKX0mYXV0b2ltcGw9JHtwb3B1cFN0cmluZyhcblx0XHRcdFx0XHQnYXV0b2VkaXRfdmVyc2lvbidcblx0XHRcdFx0KX0mYXV0b3N1bW1hcnk9bnVsbGA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnaGlzdG9yeWZlZWQnOlxuXHRcdFx0XHRsLmFjdGlvbiA9ICdoaXN0b3J5JmZlZWQ9cnNzJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdtYXJrcGF0cm9sbGVkJzpcblx0XHRcdFx0bC5hY3Rpb24gPSBgbWFya3BhdHJvbGxlZCZyY2lkPSR7bC5yY2lkfWA7XG5cdFx0fVxuXHRcdGlmIChoaW50KSB7XG5cdFx0XHRoaW50ID0gbC5vbGRpZCA/IHNpbXBsZVByaW50ZihoaW50LCBbcmV2aXNpb25TdHJpbmddKSA6IHNpbXBsZVByaW50ZihoaW50LCBbc2FmZURlY29kZVVSSShsLmFydGljbGUpXSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGhpbnQgPSBzYWZlRGVjb2RlVVJJKGAke2wuYXJ0aWNsZX0mYWN0aW9uPSR7bC5hY3Rpb259YCkgKyBsLm9sZGlkID8gYCZvbGRpZD0ke2wub2xkaWR9YCA6ICcnO1xuXHRcdH1cblx0XHRyZXR1cm4gdGl0bGVkV2lraUxpbmsoe1xuXHRcdFx0YXJ0aWNsZTogbC5hcnRpY2xlLFxuXHRcdFx0YWN0aW9uOiBsLmFjdGlvbixcblx0XHRcdHRleHQ6IGwudGV4dCxcblx0XHRcdG5ld1dpbjogbC5uZXdXaW4sXG5cdFx0XHR0aXRsZTogaGludCxcblx0XHRcdG9sZGlkOiBsLm9sZGlkLFxuXHRcdFx0bm9Qb3B1cDogbC5ub1BvcHVwLFxuXHRcdFx0b25jbGljazogbC5vbmNsaWNrLFxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCByZXZlcnRTdW1tYXJ5ID0gKG9sZGlkLCBkaWZmKSA9PiB7XG5cdFx0bGV0IHJldCA9ICcnO1xuXHRcdHJldCA9XG5cdFx0XHRkaWZmID09PSAncHJldidcblx0XHRcdFx0PyBnZXRWYWx1ZU9mKCdwb3B1cFF1ZXJpZWRSZXZlcnRUb1ByZXZpb3VzU3VtbWFyeScpXG5cdFx0XHRcdDogZ2V0VmFsdWVPZigncG9wdXBRdWVyaWVkUmV2ZXJ0U3VtbWFyeScpO1xuXHRcdHJldHVybiBgJHtyZXR9JmF1dG9ydj0ke29sZGlkfWA7XG5cdH07XG5cdGNvbnN0IHRpdGxlZFdpa2lMaW5rID0gKGwpID0+IHtcblx0XHQvLyBwb3NzaWJsZSBwcm9wZXJ0aWVzIG9mIGFyZ3VtZW50OlxuXHRcdC8vIGFydGljbGUsIGFjdGlvbiwgdGV4dCwgdGl0bGUsIG9sZGlkLCBhY3Rpb25OYW1lLCBjbGFzc05hbWUsIG5vUG9wdXBcblx0XHQvLyBvbGRpZCA9IG51bGwgaXMgZmluZSBoZXJlXG5cdFx0Ly8gYXJ0aWNsZSBhbmQgYWN0aW9uIGFyZSBtYW5kYXRvcnkgYXJnc1xuXHRcdGlmIChsLmFydGljbGUgPT09IHVuZGVmaW5lZCB8fCBsLmFjdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRlcnJsb2coJ2dvdCB1bmRlZmluZWQgYXJ0aWNsZSBvciBhY3Rpb24gaW4gdGl0bGVkV2lraUxpbmsnKTtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRjb25zdCBiYXNlID0gcGcud2lraS50aXRsZWJhc2UgKyBsLmFydGljbGUudXJsU3RyaW5nKCk7XG5cdFx0bGV0IHVybCA9IGJhc2U7XG5cdFx0aWYgKGwuYWN0aW9uTmFtZSA9PT0gdW5kZWZpbmVkIHx8ICFsLmFjdGlvbk5hbWUpIHtcblx0XHRcdGwuYWN0aW9uTmFtZSA9ICdhY3Rpb24nO1xuXHRcdH1cblx0XHQvLyBubyBuZWVkIHRvIGFkZCAmYWN0aW9uPXZpZXcsIGFuZCB0aGlzIGNvbmZ1c2VzIGFuY2hvcnNcblx0XHRpZiAobC5hY3Rpb24gIT09ICd2aWV3Jykge1xuXHRcdFx0dXJsID0gYCR7YmFzZX0mJHtsLmFjdGlvbk5hbWV9PSR7bC5hY3Rpb259YDtcblx0XHR9XG5cdFx0aWYgKGwub2xkaWQgIT09IHVuZGVmaW5lZCAmJiBsLm9sZGlkKSB7XG5cdFx0XHR1cmwgKz0gYCZvbGRpZD0ke2wub2xkaWR9YDtcblx0XHR9XG5cdFx0bGV0IGNzc0NsYXNzID0gcGcubWlzYy5kZWZhdWx0TmF2bGlua0NsYXNzbmFtZTtcblx0XHRpZiAobC5jbGFzc05hbWUgIT09IHVuZGVmaW5lZCAmJiBsLmNsYXNzTmFtZSkge1xuXHRcdFx0Y3NzQ2xhc3MgPSBsLmNsYXNzTmFtZTtcblx0XHR9XG5cdFx0cmV0dXJuIGdlbmVyYWxOYXZMaW5rKHtcblx0XHRcdHVybCxcblx0XHRcdG5ld1dpbjogbC5uZXdXaW4sXG5cdFx0XHR0aXRsZTogbC50aXRsZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGwudGl0bGUsXG5cdFx0XHR0ZXh0OiBsLnRleHQgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBsLnRleHQsXG5cdFx0XHRjbGFzc05hbWU6IGNzc0NsYXNzLFxuXHRcdFx0bm9Qb3B1cDogbC5ub1BvcHVwLFxuXHRcdFx0b25jbGljazogbC5vbmNsaWNrLFxuXHRcdH0pO1xuXHR9O1xuXHRwZy5mbi5nZXRMYXN0Q29udHJpYiA9ICh3aWtpcGFnZSwgbmV3V2luKSA9PiB7XG5cdFx0Z2V0SGlzdG9yeUluZm8od2lraXBhZ2UsICh4KSA9PiB7XG5cdFx0XHRwcm9jZXNzTGFzdENvbnRyaWJJbmZvKHgsIHtwYWdlOiB3aWtpcGFnZSwgbmV3V2lufSk7XG5cdFx0fSk7XG5cdH07XG5cdGNvbnN0IHByb2Nlc3NMYXN0Q29udHJpYkluZm8gPSAoaW5mbywgc3R1ZmYpID0+IHtcblx0XHRpZiAoIWluZm8uZWRpdHMgfHwgaW5mby5lZGl0cy5sZW5ndGggPT09IDApIHtcblx0XHRcdHZvaWQgbXcubm90aWZ5KCdQb3B1cHM6IGFuIG9kZCB0aGluZyBoYXBwZW5lZC4gUGxlYXNlIHJldHJ5LicsIHt0YWc6ICdwb3B1cHMnLCB0eXBlOiAnZXJyb3InfSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICghaW5mby5maXJzdE5ld0VkaXRvcikge1xuXHRcdFx0dm9pZCBtdy5ub3RpZnkoXG5cdFx0XHRcdHRwcmludGYoJ09ubHkgZm91bmQgb25lIGVkaXRvcjogJXMgbWFkZSAlcyBlZGl0cycsIFtpbmZvLmVkaXRzWzBdLmVkaXRvciwgaW5mby5lZGl0cy5sZW5ndGhdKSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRhZzogJ3BvcHVwcycsXG5cdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgbmV3VXJsID0gYCR7cGcud2lraS50aXRsZWJhc2UgKyBuZXcgVGl0bGUoc3R1ZmYucGFnZSkudXJsU3RyaW5nKCl9JmRpZmY9Y3VyJm9sZGlkPSR7XG5cdFx0XHRpbmZvLmZpcnN0TmV3RWRpdG9yLm9sZGlkXG5cdFx0fWA7XG5cdFx0ZGlzcGxheVVybChuZXdVcmwsIHN0dWZmLm5ld1dpbik7XG5cdH07XG5cdHBnLmZuLmdldERpZmZTaW5jZU15RWRpdCA9ICh3aWtpcGFnZSwgbmV3V2luKSA9PiB7XG5cdFx0Z2V0SGlzdG9yeUluZm8od2lraXBhZ2UsICh4KSA9PiB7XG5cdFx0XHRwcm9jZXNzRGlmZlNpbmNlTXlFZGl0KHgsIHtwYWdlOiB3aWtpcGFnZSwgbmV3V2lufSk7XG5cdFx0fSk7XG5cdH07XG5cdGNvbnN0IHByb2Nlc3NEaWZmU2luY2VNeUVkaXQgPSAoaW5mbywgc3R1ZmYpID0+IHtcblx0XHRpZiAoIWluZm8uZWRpdHMgfHwgaW5mby5lZGl0cy5sZW5ndGggPT09IDApIHtcblx0XHRcdHZvaWQgbXcubm90aWZ5KCdQb3B1cHM6IHNvbWV0aGluZyBmaXNoeSBoYXBwZW5lZC4gUGxlYXNlIHRyeSBhZ2Fpbi4nLCB7dGFnOiAncG9wdXBzJywgdHlwZTogJ2Vycm9yJ30pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBmcmllbmRseU5hbWUgPSBzdHVmZi5wYWdlLnNwbGl0KCdfJykuam9pbignICcpO1xuXHRcdGlmICghaW5mby5teUxhc3RFZGl0KSB7XG5cdFx0XHR2b2lkIG13Lm5vdGlmeShcblx0XHRcdFx0dHByaW50ZihcIkNvdWxkbid0IGZpbmQgYW4gZWRpdCBieSAlc1xcbmluIHRoZSBsYXN0ICVzIGVkaXRzIHRvXFxuJXNcIiwgW1xuXHRcdFx0XHRcdGluZm8udXNlck5hbWUsXG5cdFx0XHRcdFx0Z2V0VmFsdWVPZigncG9wdXBIaXN0b3J5TGltaXQnKSxcblx0XHRcdFx0XHRmcmllbmRseU5hbWUsXG5cdFx0XHRcdF0pLFxuXHRcdFx0XHR7dGFnOiAncG9wdXBzJywgdHlwZTogJ2Vycm9yJ31cblx0XHRcdCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmIChpbmZvLm15TGFzdEVkaXQuaW5kZXggPT09IDApIHtcblx0XHRcdHZvaWQgbXcubm90aWZ5KHRwcmludGYoJyVzIHNlZW1zIHRvIGJlIHRoZSBsYXN0IGVkaXRvciB0byB0aGUgcGFnZSAlcycsIFtpbmZvLnVzZXJOYW1lLCBmcmllbmRseU5hbWVdKSwge1xuXHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IG5ld1VybCA9IGAke3BnLndpa2kudGl0bGViYXNlICsgbmV3IFRpdGxlKHN0dWZmLnBhZ2UpLnVybFN0cmluZygpfSZkaWZmPWN1ciZvbGRpZD0ke1xuXHRcdFx0aW5mby5teUxhc3RFZGl0Lm9sZGlkXG5cdFx0fWA7XG5cdFx0ZGlzcGxheVVybChuZXdVcmwsIHN0dWZmLm5ld1dpbik7XG5cdH07XG5cdGNvbnN0IGRpc3BsYXlVcmwgPSAodXJsLCBuZXdXaW4pID0+IHtcblx0XHRpZiAobmV3V2luKSB7XG5cdFx0XHR3aW5kb3cub3Blbih1cmwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb2N1bWVudC5sb2NhdGlvbiA9IHVybDtcblx0XHR9XG5cdH07XG5cdHBnLmZuLnB1cmdlUG9wdXBzID0gKCkgPT4ge1xuXHRcdHByb2Nlc3NBbGxQb3B1cHModHJ1ZSk7XG5cdFx0c2V0dXBDYWNoZSgpOyAvLyBkZWxldGVzIGFsbCBjYWNoZWQgaXRlbXMgKG5vdCBicm93c2VyIGNhY2hlZCwgdGhvdWdoLi4uKVxuXHRcdHBnLm9wdGlvbiA9IHt9O1xuXHRcdGFib3J0QWxsRG93bmxvYWRzKCk7XG5cdH07XG5cdGNvbnN0IHByb2Nlc3NBbGxQb3B1cHMgPSAobnVsbGlmeSwgYmFuaXNoKSA9PiB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IHBnLmN1cnJlbnQubGlua3MgJiYgaSA8IHBnLmN1cnJlbnQubGlua3MubGVuZ3RoOyArK2kpIHtcblx0XHRcdGlmICghcGcuY3VycmVudC5saW5rc1tpXS5uYXZwb3B1cCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGlmIChudWxsaWZ5IHx8IGJhbmlzaCkge1xuXHRcdFx0XHRwZy5jdXJyZW50LmxpbmtzW2ldLm5hdnBvcHVwLmJhbmlzaCgpO1xuXHRcdFx0fVxuXHRcdFx0cGcuY3VycmVudC5saW5rc1tpXS5zaW1wbGVOb01vcmUgPSBmYWxzZTtcblx0XHRcdGlmIChudWxsaWZ5KSB7XG5cdFx0XHRcdHBnLmN1cnJlbnQubGlua3NbaV0ubmF2cG9wdXAgPSBudWxsO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cGcuZm4uZGlzYWJsZVBvcHVwcyA9ICgpID0+IHtcblx0XHRwcm9jZXNzQWxsUG9wdXBzKGZhbHNlLCB0cnVlKTtcblx0XHRzZXR1cFRvb2x0aXBzKG51bGwsIHRydWUpO1xuXHR9O1xuXHRwZy5mbi50b2dnbGVQcmV2aWV3cyA9ICgpID0+IHtcblx0XHRwcm9jZXNzQWxsUG9wdXBzKHRydWUsIHRydWUpO1xuXHRcdHBnLm9wdGlvbi5zaW1wbGVQb3B1cHMgPSAhcGcub3B0aW9uLnNpbXBsZVBvcHVwcztcblx0XHRhYm9ydEFsbERvd25sb2FkcygpO1xuXHR9O1xuXHRjb25zdCBtYWdpY1dhdGNoTGluayA9IGZ1bmN0aW9uIG1hZ2ljV2F0Y2hMaW5rKGwpIHtcblx0XHQvLyBZdWNrISEgV291bGQgcmVxdWlyZSBhIHRob3JvdWdoIHJlZGVzaWduIHRvIGFkZCB0aGlzIGFzIGEgY2xpY2sgZXZlbnQgdGhvdWdoIC4uLlxuXHRcdGwub25jbGljayA9IHNpbXBsZVByaW50ZihcInBnLmZuLm1vZGlmeVdhdGNobGlzdCgnJXMnLCclcycpO3JldHVybiBmYWxzZTtcIiwgW1xuXHRcdFx0bC5hcnRpY2xlXG5cdFx0XHRcdC50b1N0cmluZyh0cnVlKVxuXHRcdFx0XHQuc3BsaXQoJ1xcXFwnKVxuXHRcdFx0XHQuam9pbignXFxcXFxcXFwnKVxuXHRcdFx0XHQuc3BsaXQoXCInXCIpXG5cdFx0XHRcdC5qb2luKFN0cmluZy5yYXdgXFwnYCksXG5cdFx0XHR0aGlzLmlkLFxuXHRcdF0pO1xuXHRcdHJldHVybiB3aWtpTGluayhsKTtcblx0fTtcblx0cGcuZm4ubW9kaWZ5V2F0Y2hsaXN0ID0gYXN5bmMgKHRpdGxlLCBhY3Rpb24pID0+IHtcblx0XHRjb25zdCByZXFEYXRhID0ge1xuXHRcdFx0YWN0aW9uOiAnd2F0Y2gnLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0dGl0bGVzOiB0aXRsZSxcblx0XHRcdHVzZWxhbmc6IG13LmNvbmZpZy5nZXQoJ3dnVXNlckxhbmd1YWdlJyksXG5cdFx0fTtcblx0XHRpZiAoYWN0aW9uID09PSAndW53YXRjaCcpIHtcblx0XHRcdHJlcURhdGEudW53YXRjaCA9IHRydWU7XG5cdFx0fVxuXHRcdC8vIExvYWQgdGhlIEFkZGVkd2F0Y2h0ZXh0IG9yIFJlbW92ZWR3YXRjaHRleHQgbWVzc2FnZSBhbmQgc2hvdyBpdFxuXHRcdGNvbnN0IG13VGl0bGUgPSBtdy5UaXRsZS5uZXdGcm9tVGV4dCh0aXRsZSk7XG5cdFx0bGV0IG1lc3NhZ2VOYW1lO1xuXHRcdGlmIChtd1RpdGxlICYmIG13VGl0bGUuZ2V0TmFtZXNwYWNlSWQoKSA+IDAgJiYgbXdUaXRsZS5nZXROYW1lc3BhY2VJZCgpICUgMiA9PT0gMSkge1xuXHRcdFx0bWVzc2FnZU5hbWUgPSBhY3Rpb24gPT09ICd3YXRjaCcgPyAnYWRkZWR3YXRjaHRleHQtdGFsaycgOiAncmVtb3ZlZHdhdGNodGV4dC10YWxrJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWVzc2FnZU5hbWUgPSBhY3Rpb24gPT09ICd3YXRjaCcgPyAnYWRkZWR3YXRjaHRleHQnIDogJ3JlbW92ZWR3YXRjaHRleHQnO1xuXHRcdH1cblx0XHRhd2FpdCBnZXRNd0FwaSgpLnBvc3RXaXRoVG9rZW4oJ3dhdGNoJywgcmVxRGF0YSk7XG5cdFx0YXdhaXQgZ2V0TXdBcGkoKS5sb2FkTWVzc2FnZXNJZk1pc3NpbmcoW21lc3NhZ2VOYW1lXSk7XG5cdFx0Ly8gTWVzc2FnZXMgdGhhdCBjYW4gYmUgdXNlZCBoZXJlOlxuXHRcdC8vICogc2VlIHN0cmluZy5qc1xuXHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHR2b2lkIG13Lm5vdGlmeShtdy5tZXNzYWdlKG1lc3NhZ2VOYW1lLCB0aXRsZSkucGFyc2VEb20oKSwge3RhZzogJ3BvcHVwcyd9KTtcblx0fTtcblx0Y29uc3QgbWFnaWNIaXN0b3J5TGluayA9IChsKSA9PiB7XG5cdFx0Ly8gRklYTUUgdXNlIG9uY2xpY2sgY2hhbmdlIGhyZWYgdHJpY2sgdG8gc29ydCB0aGlzIG91dCBpbnN0ZWFkIG9mIHdpbmRvdy5vcGVuXG5cdFx0bGV0IGpzVXJsID0gJyc7XG5cdFx0bGV0IHRpdGxlID0gJyc7XG5cdFx0bGV0IG9uQ2xpY2sgPSAnJztcblx0XHRzd2l0Y2ggKGwuaWQpIHtcblx0XHRcdGNhc2UgJ2xhc3RDb250cmliJzpcblx0XHRcdFx0b25DbGljayA9IHNpbXBsZVByaW50ZihcInBnLmZuLmdldExhc3RDb250cmliKCclcycsJXMpXCIsIFtcblx0XHRcdFx0XHRsLmFydGljbGVcblx0XHRcdFx0XHRcdC50b1N0cmluZyh0cnVlKVxuXHRcdFx0XHRcdFx0LnNwbGl0KCdcXFxcJylcblx0XHRcdFx0XHRcdC5qb2luKCdcXFxcXFxcXCcpXG5cdFx0XHRcdFx0XHQuc3BsaXQoXCInXCIpXG5cdFx0XHRcdFx0XHQuam9pbihTdHJpbmcucmF3YFxcJ2ApLFxuXHRcdFx0XHRcdGwubmV3V2luLFxuXHRcdFx0XHRdKTtcblx0XHRcdFx0dGl0bGUgPSBwb3B1cFN0cmluZygnbGFzdENvbnRyaWJIaW50Jyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnc2luY2VNZSc6XG5cdFx0XHRcdG9uQ2xpY2sgPSBzaW1wbGVQcmludGYoXCJwZy5mbi5nZXREaWZmU2luY2VNeUVkaXQoJyVzJywlcylcIiwgW1xuXHRcdFx0XHRcdGwuYXJ0aWNsZVxuXHRcdFx0XHRcdFx0LnRvU3RyaW5nKHRydWUpXG5cdFx0XHRcdFx0XHQuc3BsaXQoJ1xcXFwnKVxuXHRcdFx0XHRcdFx0LmpvaW4oJ1xcXFxcXFxcJylcblx0XHRcdFx0XHRcdC5zcGxpdChcIidcIilcblx0XHRcdFx0XHRcdC5qb2luKFN0cmluZy5yYXdgXFwnYCksXG5cdFx0XHRcdFx0bC5uZXdXaW4sXG5cdFx0XHRcdF0pO1xuXHRcdFx0XHR0aXRsZSA9IHBvcHVwU3RyaW5nKCdzaW5jZU1lSGludCcpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0anNVcmwgPSBgamF2YXNjcmlwdDoke29uQ2xpY2t9YDsgLy8ganNoaW50IGlnbm9yZTpsaW5lXG5cdFx0b25DbGljayArPSAnO3JldHVybiBmYWxzZTsnO1xuXHRcdHJldHVybiBnZW5lcmFsTmF2TGluayh7XG5cdFx0XHR1cmw6IGpzVXJsLFxuXHRcdFx0bmV3V2luOiBmYWxzZSxcblx0XHRcdHRpdGxlLFxuXHRcdFx0dGV4dDogbC50ZXh0LFxuXHRcdFx0bm9Qb3B1cDogbC5ub1BvcHVwLFxuXHRcdFx0b25jbGljazogb25DbGljayxcblx0XHR9KTtcblx0fTtcblx0Y29uc3QgcG9wdXBNZW51TGluayA9IChsKSA9PiB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNjcmlwdC11cmxcblx0XHRjb25zdCBqc1VybCA9IHNpbXBsZVByaW50ZignamF2YXNjcmlwdDpwZy5mbi4lcygpJywgW2wuaWRdKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXG5cdFx0Y29uc3QgdGl0bGUgPSBwb3B1cFN0cmluZyhzaW1wbGVQcmludGYoJyVzSGludCcsIFtsLmlkXSkpO1xuXHRcdGNvbnN0IG9uQ2xpY2sgPSBzaW1wbGVQcmludGYoJ3BnLmZuLiVzKCk7cmV0dXJuIGZhbHNlOycsIFtsLmlkXSk7XG5cdFx0cmV0dXJuIGdlbmVyYWxOYXZMaW5rKHtcblx0XHRcdHVybDoganNVcmwsXG5cdFx0XHRuZXdXaW46IGZhbHNlLFxuXHRcdFx0dGl0bGUsXG5cdFx0XHR0ZXh0OiBsLnRleHQsXG5cdFx0XHRub1BvcHVwOiBsLm5vUG9wdXAsXG5cdFx0XHRvbmNsaWNrOiBvbkNsaWNrLFxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCBzcGVjaWFsTGluayA9IChsKSA9PiB7XG5cdFx0Ly8gcHJvcGVydGllczogYXJ0aWNsZSwgc3BlY2lhbHBhZ2UsIHRleHQsIHNlcFxuXHRcdGlmIChsLnNwZWNpYWxwYWdlID09PSB1bmRlZmluZWQgfHwgIWwuc3BlY2lhbHBhZ2UpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRjb25zdCBiYXNlID0gYCR7cGcud2lraS50aXRsZWJhc2UgKyBtdy5jb25maWcuZ2V0KCd3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMnKVtwZy5uc1NwZWNpYWxJZF19OiR7bC5zcGVjaWFscGFnZX1gO1xuXHRcdGwuc2VwID8/PSAnJnRhcmdldD0nO1xuXHRcdGxldCBhcnRpY2xlID0gbC5hcnRpY2xlLnVybFN0cmluZyh7XG5cdFx0XHRrZWVwU3BhY2VzOiBsLnNwZWNpYWxwYWdlID09PSAnU2VhcmNoJyxcblx0XHR9KTtcblx0XHRsZXQgaGludCA9IHBvcHVwU3RyaW5nKGAke2wuc3BlY2lhbHBhZ2V9SGludGApO1xuXHRcdHN3aXRjaCAobC5zcGVjaWFscGFnZSkge1xuXHRcdFx0Y2FzZSAnTG9nJzpcblx0XHRcdFx0c3dpdGNoIChsLnNlcCkge1xuXHRcdFx0XHRcdGNhc2UgJyZ1c2VyPSc6XG5cdFx0XHRcdFx0XHRoaW50ID0gcG9wdXBTdHJpbmcoJ3VzZXJMb2dIaW50Jyk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICcmdHlwZT1ibG9jayZwYWdlPSc6XG5cdFx0XHRcdFx0XHRoaW50ID0gcG9wdXBTdHJpbmcoJ2Jsb2NrTG9nSGludCcpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnJnBhZ2U9Jzpcblx0XHRcdFx0XHRcdGhpbnQgPSBwb3B1cFN0cmluZygncGFnZUxvZ0hpbnQnKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJyZ0eXBlPXByb3RlY3QmcGFnZT0nOlxuXHRcdFx0XHRcdFx0aGludCA9IHBvcHVwU3RyaW5nKCdwcm90ZWN0TG9nSGludCcpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnJnR5cGU9ZGVsZXRlJnBhZ2U9Jzpcblx0XHRcdFx0XHRcdGhpbnQgPSBwb3B1cFN0cmluZygnZGVsZXRlTG9nSGludCcpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdGxvZyhgVW5rbm93biBsb2cgdHlwZSwgc2VwPSR7bC5zZXB9YCk7XG5cdFx0XHRcdFx0XHRoaW50ID0gJ01pc3NpbmcgaGludCAoRklYTUUpJztcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ1ByZWZpeEluZGV4Jzpcblx0XHRcdFx0YXJ0aWNsZSArPSAnLyc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRoaW50ID0gaGludCA/IHNpbXBsZVByaW50ZihoaW50LCBbc2FmZURlY29kZVVSSShsLmFydGljbGUpXSkgOiBzYWZlRGVjb2RlVVJJKGAke2wuc3BlY2lhbHBhZ2V9OiR7bC5hcnRpY2xlfWApO1xuXHRcdGNvbnN0IHVybCA9IGJhc2UgKyBsLnNlcCArIGFydGljbGU7XG5cdFx0cmV0dXJuIGdlbmVyYWxOYXZMaW5rKHtcblx0XHRcdHVybCxcblx0XHRcdHRpdGxlOiBoaW50LFxuXHRcdFx0dGV4dDogbC50ZXh0LFxuXHRcdFx0bmV3V2luOiBsLm5ld1dpbixcblx0XHRcdG5vUG9wdXA6IGwubm9Qb3B1cCxcblx0XHR9KTtcblx0fTtcblx0Y29uc3QgZ2VuZXJhbExpbmsgPSAobCkgPT4ge1xuXHRcdC8vIGwudXJsLCBsLnRleHQsIGwudGl0bGUsIGwubmV3V2luLCBsLmNsYXNzTmFtZSwgbC5ub1BvcHVwLCBsLm9uY2xpY2tcblx0XHRpZiAobC51cmwgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdC8vIG9ubHkgcXVvdGF0aW9uIG1hcmtzIGluIHRoZSB1cmwgY2FuIHNjcmV3IHVzIHVwIG5vdy4uLiBJIHRoaW5rXG5cdFx0Y29uc3QgdXJsID0gbC51cmwuc3BsaXQoJ1wiJykuam9pbignJTIyJyk7XG5cdFx0bGV0IHJldCA9IGA8YSBocmVmPVwiJHt1cmx9XCJgO1xuXHRcdGlmIChsLnRpdGxlICE9PSB1bmRlZmluZWQgJiYgbC50aXRsZSkge1xuXHRcdFx0cmV0ICs9IGAgdGl0bGU9XCIke3BnLmVzY2FwZVF1b3Rlc0hUTUwobC50aXRsZSl9XCJgO1xuXHRcdH1cblx0XHRpZiAobC5vbmNsaWNrICE9PSB1bmRlZmluZWQgJiYgbC5vbmNsaWNrKSB7XG5cdFx0XHRyZXQgKz0gYCBvbmNsaWNrPVwiJHtwZy5lc2NhcGVRdW90ZXNIVE1MKGwub25jbGljayl9XCJgO1xuXHRcdH1cblx0XHRpZiAobC5ub1BvcHVwKSB7XG5cdFx0XHRyZXQgKz0gJyBub1BvcHVwPTEnO1xuXHRcdH1cblx0XHRsZXQgbmV3V2luO1xuXHRcdGlmIChsLm5ld1dpbiA9PT0gdW5kZWZpbmVkIHx8IGwubmV3V2luID09PSBudWxsKSB7XG5cdFx0XHRuZXdXaW4gPSBnZXRWYWx1ZU9mKCdwb3B1cE5ld1dpbmRvd3MnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0KHtuZXdXaW59ID0gbCk7XG5cdFx0fVxuXHRcdGlmIChuZXdXaW4pIHtcblx0XHRcdHJldCArPSAnIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCInO1xuXHRcdH1cblx0XHRpZiAobC5jbGFzc05hbWUgIT09IHVuZGVmaW5lZCAmJiBsLmNsYXNzTmFtZSkge1xuXHRcdFx0cmV0ICs9IGAgY2xhc3M9XCIke2wuY2xhc3NOYW1lfVwiYDtcblx0XHR9XG5cdFx0cmV0ICs9ICc+Jztcblx0XHRpZiAodHlwZW9mIGwudGV4dCA9PT0gdHlwZW9mICcnKSB7XG5cdFx0XHQvLyBXZSBuZWVkIHRvIEhUTUwtZXNjYXBlIHRoaXMgdG8gYXZvaWQgWFNTLCBidXQgd2UgYWxzbyB3YW50IHRvXG5cdFx0XHQvLyBkaXNwbGF5IGFueSBleGlzdGluZyBIVE1MIGVudGl0aWVzIGNvcnJlY3RseSwgc28gdW5lc2NhcGUgaXQgZmlyc3QuXG5cdFx0XHQvLyBGb3IgZXhhbXBsZSwgdGhlIGRpc3BsYXkgdGV4dCBvZiB0aGUgdXNlciBwYWdlIG1lbnUgaXRlbSBpcyBkZWZpbmVkXG5cdFx0XHQvLyBhcyBcInVzZXImbmJzcDtwYWdlXCIsIHNvIHdlIG5lZWQgdG8gdW5lc2NhcGUgZmlyc3QgdG8gYXZvaWQgaXQgYmVpbmdcblx0XHRcdC8vIGVzY2FwZWQgdG8gXCJ1c2VyJmFtcDtuYnNwO3BhZ2VcIi5cblx0XHRcdHJldCArPSBwZy5lc2NhcGVRdW90ZXNIVE1MKHBnLnVuZXNjYXBlUXVvdGVzSFRNTChsLnRleHQpKTtcblx0XHR9XG5cdFx0cmV0ICs9ICc8L2E+Jztcblx0XHRyZXR1cm4gcmV0O1xuXHR9O1xuXHRjb25zdCBhcHBlbmRQYXJhbXNUb0xpbmsgPSAobGlua3N0ciwgcGFyYW1zKSA9PiB7XG5cdFx0Y29uc3Qgc3AgPSBsaW5rc3RyLnNwbGl0KC8oaHJlZj1cIlteXCJdKz8pXCIvaSk7XG5cdFx0aWYgKHNwLmxlbmd0aCA8IDIpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRsZXQgcmV0ID0gc3Auc2hpZnQoKSArIHNwLnNoaWZ0KCk7XG5cdFx0cmV0ICs9IGAmJHtwYXJhbXN9XCJgO1xuXHRcdHJldCArPSBzcC5qb2luKCcnKTtcblx0XHRyZXR1cm4gcmV0O1xuXHR9O1xuXHRjb25zdCBjaGFuZ2VMaW5rVGFyZ2V0TGluayA9ICh4KSA9PiB7XG5cdFx0Ly8gbmV3VGFyZ2V0LCB0ZXh0LCBoaW50LCBzdW1tYXJ5LCBjbGlja0J1dHRvbiwgbWlub3IsIHRpdGxlIChvcHRpb25hbCksIGFsc29DaGFuZ2VMYWJlbCB7XG5cdFx0aWYgKHgubmV3VGFyZ2V0KSB7XG5cdFx0XHRsb2coYGNoYW5nZUxpbmtUYXJnZXRMaW5rOiBuZXdUYXJnZXQ9JHt4Lm5ld1RhcmdldH1gKTtcblx0XHR9XG5cdFx0aWYgKHgub2xkVGFyZ2V0ICE9PSBkZWNvZGVVUklDb21wb25lbnQoeC5vbGRUYXJnZXQpKSB7XG5cdFx0XHRsb2coYFRoaXMgbWlnaHQgYmUgYW4gaW5wdXQgcHJvYmxlbTogJHt4Lm9sZFRhcmdldH1gKTtcblx0XHR9XG5cdFx0Ly8gRklYTUU6IGZpcnN0IGNoYXJhY3RlciBvZiBwYWdlIHRpdGxlIGFzIHdlbGwgYXMgbmFtZXNwYWNlIHNob3VsZCBiZSBjYXNlIGluc2Vuc2l0aXZlXG5cdFx0Ly8gZWcgW1s6Y2F0ZWdvcnk6WDFdXSBhbmQgW1s6Q2F0ZWdvcnk6WDFdXSBhcmUgZXF1aXZhbGVudFxuXHRcdC8vIHRoaXMnbGwgYnJlYWsgaWYgY2hhckF0KDApIGlzIG5hc3R5XG5cdFx0Y29uc3QgY0EgPSBtdy51dGlsLmVzY2FwZVJlZ0V4cCh4Lm9sZFRhcmdldCk7XG5cdFx0bGV0IGNocyA9IGNBLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpO1xuXHRcdGNocyA9IGBbJHtjaHN9JHtjaHMudG9Mb3dlckNhc2UoKX1dYDtcblx0XHRsZXQgY3VycmVudEFydGljbGVSZWdleEJpdCA9IGNocyArIGNBLnNsaWNlKDEpO1xuXHRcdGN1cnJlbnRBcnRpY2xlUmVnZXhCaXQgPSBjdXJyZW50QXJ0aWNsZVJlZ2V4Qml0XG5cdFx0XHQuc3BsaXQoL1sgX10rfCUyMC9nKVxuXHRcdFx0LmpvaW4oJyg/OltfIF0rfCUyMCknKVxuXHRcdFx0LnNwbGl0KFN0cmluZy5yYXdgXFwoYClcblx0XHRcdC5qb2luKFN0cmluZy5yYXdgKD86JTI4fFxcKClgKVxuXHRcdFx0LnNwbGl0KFN0cmluZy5yYXdgXFwpYClcblx0XHRcdC5qb2luKFN0cmluZy5yYXdgKD86JTI5fFxcKSlgKTsgLy8gd2h5IGRvZXMgdGhpcyBuZWVkIHRvIG1hdGNoIGVuY29kZWQgc3RyaW5ncyA/IGxpbmtzIGluIHRoZSBkb2N1bWVudCA/XG5cblx0XHQvLyBsZWFkaW5nIGFuZCB0cmFpbGluZyBzcGFjZSBzaG91bGQgYmUgaWdub3JlZCwgYW5kIGFuY2hvciBiaXRzIG9wdGlvbmFsOlxuXHRcdGN1cnJlbnRBcnRpY2xlUmVnZXhCaXQgPSBgXFxcXHMqKCR7Y3VycmVudEFydGljbGVSZWdleEJpdH0oPzojW15cXFxcW1xcXFx8XSopPylcXFxccypgO1xuXHRcdC8vIGUuZy4gQ29tcHV0ZXIgKGFyY2hhaWMpIC0+IFxccyooW0NjXW9tcHV0ZXJbXyBdKD86JTI1Mjh8XFwoKWFyY2hhaWMoPzolMjUyOHxcXCkpKVxccypcblx0XHQvLyBhdXRvZWRpdD1zflxcW1xcWyhbQ2NdYWQpXFxdXFxdfltbQ29tcHV0ZXItYWlkZWQlMjBkZXNpZ258JDFdXX5nO3N+XFxbXFxbKFtDY11BRClbfF1+W1tDb21wdXRlci1haWRlZCUyMGRlc2lnbnx+Z1xuXHRcdGNvbnN0IHRpdGxlID0geC50aXRsZSB8fCBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJykuc3BsaXQoJ18nKS5qb2luKCcgJyk7XG5cdFx0Y29uc3QgbGsgPSB0aXRsZWRXaWtpTGluayh7XG5cdFx0XHRhcnRpY2xlOiBuZXcgVGl0bGUodGl0bGUpLFxuXHRcdFx0bmV3V2luOiB4Lm5ld1dpbixcblx0XHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdFx0dGV4dDogeC50ZXh0LFxuXHRcdFx0dGl0bGU6IHguaGludCxcblx0XHRcdGNsYXNzTmFtZTogJ3BvcHVwX2NoYW5nZV90aXRsZV9saW5rJyxcblx0XHR9KTtcblx0XHRsZXQgY21kID0gJyc7XG5cdFx0aWYgKHgubmV3VGFyZ2V0KSB7XG5cdFx0XHQvLyBlc2NhcGUgJyYnIGFuZCBvdGhlciBuYXN0aWVzXG5cdFx0XHRjb25zdCB0ID0geC5uZXdUYXJnZXQ7XG5cdFx0XHRjb25zdCBzID0gbXcudXRpbC5lc2NhcGVSZWdFeHAoeC5uZXdUYXJnZXQpO1xuXHRcdFx0aWYgKHguYWxzb0NoYW5nZUxhYmVsKSB7XG5cdFx0XHRcdGNtZCArPSBgc35cXFxcW1xcXFxbJHtjdXJyZW50QXJ0aWNsZVJlZ2V4Qml0fVxcXFxdXFxcXF1+W1ske3R9XV1+ZztgO1xuXHRcdFx0XHRjbWQgKz0gYHN+XFxcXFtcXFxcWyR7Y3VycmVudEFydGljbGVSZWdleEJpdH1bfF1+W1ske3R9fH5nO2A7XG5cdFx0XHRcdGNtZCArPSBgc35cXFxcW1xcXFxbJHtzfVxcXFx8JHtzfVxcXFxdXFxcXF1+W1ske3R9XV1+Z2A7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjbWQgKz0gYHN+XFxcXFtcXFxcWyR7Y3VycmVudEFydGljbGVSZWdleEJpdH1cXFxcXVxcXFxdfltbJHt0fXwkMV1dfmc7YDtcblx0XHRcdFx0Y21kICs9IGBzflxcXFxbXFxcXFske2N1cnJlbnRBcnRpY2xlUmVnZXhCaXR9W3xdfltbJHt0fXx+ZztgO1xuXHRcdFx0XHRjbWQgKz0gYHN+XFxcXFtcXFxcWyR7c31cXFxcfCR7c31cXFxcXVxcXFxdfltbJHt0fV1dfmdgO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjbWQgKz0gYHN+XFxcXFtcXFxcWyR7Y3VycmVudEFydGljbGVSZWdleEJpdH1cXFxcXVxcXFxdfiQxfmc7YDtcblx0XHRcdGNtZCArPSBgc35cXFxcW1xcXFxbJHtjdXJyZW50QXJ0aWNsZVJlZ2V4Qml0fVt8XSguKj8pXFxcXF1cXFxcXX4kMn5nYDtcblx0XHR9XG5cdFx0Ly8gQnVpbGQgcXVlcnlcblx0XHRjbWQgPSBgYXV0b2VkaXQ9JHtlbmNvZGVVUklDb21wb25lbnQoY21kKX1gO1xuXHRcdGNtZCArPSBgJmF1dG9jbGljaz0ke2VuY29kZVVSSUNvbXBvbmVudCh4LmNsaWNrQnV0dG9uKX0mYWN0b2tlbj0ke2VuY29kZVVSSUNvbXBvbmVudChhdXRvQ2xpY2tUb2tlbigpKX1gO1xuXHRcdGNtZCArPSB4Lm1pbm9yID09PSBudWxsID8gJycgOiBgJmF1dG9taW5vcj0ke2VuY29kZVVSSUNvbXBvbmVudCh4Lm1pbm9yKX1gO1xuXHRcdGNtZCArPSB4LndhdGNoID09PSBudWxsID8gJycgOiBgJmF1dG93YXRjaD0ke2VuY29kZVVSSUNvbXBvbmVudCh4LndhdGNoKX1gO1xuXHRcdGNtZCArPSBgJmF1dG9zdW1tYXJ5PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHguc3VtbWFyeSl9YDtcblx0XHRjbWQgKz0gYCZhdXRvaW1wbD0ke2VuY29kZVVSSUNvbXBvbmVudChwb3B1cFN0cmluZygnYXV0b2VkaXRfdmVyc2lvbicpKX1gO1xuXHRcdHJldHVybiBhcHBlbmRQYXJhbXNUb0xpbmsobGssIGNtZCk7XG5cdH07XG5cdGNvbnN0IHJlZGlyTGluayA9IChyZWRpck1hdGNoLCBhcnRpY2xlKSA9PiB7XG5cdFx0Ly8gTkIgcmVkaXJNYXRjaCBpcyBpbiB3aWtpVGV4dFxuXHRcdGxldCByZXQgPSAnJztcblx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBBcHBlbmRSZWRpck5hdkxpbmtzJykgJiYgZ2V0VmFsdWVPZigncG9wdXBOYXZMaW5rcycpKSB7XG5cdFx0XHRyZXQgKz0gJzxocj4nO1xuXHRcdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwRml4UmVkaXJzJykgJiYgYXV0b0VkaXQgIT09IHVuZGVmaW5lZCAmJiBhdXRvRWRpdCkge1xuXHRcdFx0XHRyZXQgKz0gcG9wdXBTdHJpbmcoJ1JlZGlyZWN0cyB0bzogKEZpeCAnKTtcblx0XHRcdFx0bG9nKGByZWRpckxpbms6IG5ld1RhcmdldD0ke3JlZGlyTWF0Y2h9YCk7XG5cdFx0XHRcdHJldCArPSBhZGRQb3B1cFNob3J0Y3V0KFxuXHRcdFx0XHRcdGNoYW5nZUxpbmtUYXJnZXRMaW5rKHtcblx0XHRcdFx0XHRcdG5ld1RhcmdldDogcmVkaXJNYXRjaCxcblx0XHRcdFx0XHRcdHRleHQ6IHBvcHVwU3RyaW5nKCd0YXJnZXQnKSxcblx0XHRcdFx0XHRcdGhpbnQ6IHBvcHVwU3RyaW5nKCdGaXggdGhpcyByZWRpcmVjdCwgY2hhbmdpbmcganVzdCB0aGUgbGluayB0YXJnZXQnKSxcblx0XHRcdFx0XHRcdHN1bW1hcnk6IHNpbXBsZVByaW50ZihnZXRWYWx1ZU9mKCdwb3B1cEZpeFJlZGlyc1N1bW1hcnknKSwgW2FydGljbGUudG9TdHJpbmcoKSwgcmVkaXJNYXRjaF0pLFxuXHRcdFx0XHRcdFx0b2xkVGFyZ2V0OiBhcnRpY2xlLnRvU3RyaW5nKCksXG5cdFx0XHRcdFx0XHRjbGlja0J1dHRvbjogZ2V0VmFsdWVPZigncG9wdXBSZWRpckF1dG9DbGljaycpLFxuXHRcdFx0XHRcdFx0bWlub3I6IHRydWUsXG5cdFx0XHRcdFx0XHR3YXRjaDogZ2V0VmFsdWVPZigncG9wdXBXYXRjaFJlZGlycmVkUGFnZXMnKSxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHQnUidcblx0XHRcdFx0KTtcblx0XHRcdFx0cmV0ICs9IHBvcHVwU3RyaW5nKCcgb3IgJyk7XG5cdFx0XHRcdHJldCArPSBhZGRQb3B1cFNob3J0Y3V0KFxuXHRcdFx0XHRcdGNoYW5nZUxpbmtUYXJnZXRMaW5rKHtcblx0XHRcdFx0XHRcdG5ld1RhcmdldDogcmVkaXJNYXRjaCxcblx0XHRcdFx0XHRcdHRleHQ6IHBvcHVwU3RyaW5nKCd0YXJnZXQgJiBsYWJlbCcpLFxuXHRcdFx0XHRcdFx0aGludDogcG9wdXBTdHJpbmcoJ0ZpeCB0aGlzIHJlZGlyZWN0LCBjaGFuZ2luZyB0aGUgbGluayB0YXJnZXQgYW5kIGxhYmVsJyksXG5cdFx0XHRcdFx0XHRzdW1tYXJ5OiBzaW1wbGVQcmludGYoZ2V0VmFsdWVPZigncG9wdXBGaXhSZWRpcnNTdW1tYXJ5JyksIFthcnRpY2xlLnRvU3RyaW5nKCksIHJlZGlyTWF0Y2hdKSxcblx0XHRcdFx0XHRcdG9sZFRhcmdldDogYXJ0aWNsZS50b1N0cmluZygpLFxuXHRcdFx0XHRcdFx0Y2xpY2tCdXR0b246IGdldFZhbHVlT2YoJ3BvcHVwUmVkaXJBdXRvQ2xpY2snKSxcblx0XHRcdFx0XHRcdG1pbm9yOiB0cnVlLFxuXHRcdFx0XHRcdFx0d2F0Y2g6IGdldFZhbHVlT2YoJ3BvcHVwV2F0Y2hSZWRpcnJlZFBhZ2VzJyksXG5cdFx0XHRcdFx0XHRhbHNvQ2hhbmdlTGFiZWw6IHRydWUsXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0J1InXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHJldCArPSBwb3B1cFN0cmluZygnKScpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0ICs9IHBvcHVwU3RyaW5nKCdSZWRpcmVjdHMnKSArIHBvcHVwU3RyaW5nKCcgdG8gJyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH1cblx0XHRyZXR1cm4gYDxicj4gJHtwb3B1cFN0cmluZygnUmVkaXJlY3RzJyl9JHtwb3B1cFN0cmluZygnIHRvICcpfSR7dGl0bGVkV2lraUxpbmsoe1xuXHRcdFx0YXJ0aWNsZTogbmV3IFRpdGxlKCkuZnJvbVdpa2lUZXh0KHJlZGlyTWF0Y2gpLFxuXHRcdFx0YWN0aW9uOiAndmlldycgLyogRklYTUU6IG5ld1dpbiAqLyxcblx0XHRcdHRleHQ6IHNhZmVEZWNvZGVVUkkocmVkaXJNYXRjaCksXG5cdFx0XHR0aXRsZTogcG9wdXBTdHJpbmcoJ0J5cGFzcyByZWRpcmVjdCcpLFxuXHRcdH0pfWA7XG5cdH07XG5cdGNvbnN0IGFyaW5MaW5rID0gKGwpID0+IHtcblx0XHRpZiAoIXNhbmVMaW5rQ2hlY2sobCkpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRpZiAoIWwuYXJ0aWNsZS5pc0lwVXNlcigpIHx8ICFwZy53aWtpLndpa2ltZWRpYSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGNvbnN0IHVOID0gbC5hcnRpY2xlLnVzZXJOYW1lKCk7XG5cdFx0cmV0dXJuIGdlbmVyYWxOYXZMaW5rKHtcblx0XHRcdHVybDogYGh0dHA6Ly93cy5hcmluLm5ldC9jZ2ktYmluL3dob2lzLnBsP3F1ZXJ5aW5wdXQ9JHtlbmNvZGVVUklDb21wb25lbnQodU4pfWAsXG5cdFx0XHRuZXdXaW46IGwubmV3V2luLFxuXHRcdFx0dGl0bGU6IHRwcmludGYoJ0xvb2sgdXAgJXMgaW4gQVJJTiB3aG9pcyBkYXRhYmFzZScsIFt1Tl0pLFxuXHRcdFx0dGV4dDogbC50ZXh0LFxuXHRcdFx0bm9Qb3B1cDogMSxcblx0XHR9KTtcblx0fTtcblx0Y29uc3QgdG9vbERiTmFtZSA9IChjb29raWVTdHlsZSkgPT4ge1xuXHRcdGxldCByZXQgPSBtdy5jb25maWcuZ2V0KCd3Z0RCbmFtZScpO1xuXHRcdGlmICghY29va2llU3R5bGUpIHtcblx0XHRcdHJldCArPSAnX3AnO1xuXHRcdH1cblx0XHRyZXR1cm4gcmV0O1xuXHR9O1xuXHRjb25zdCBzYW5lTGlua0NoZWNrID0gKGwpID0+IHtcblx0XHRpZiAodHlwZW9mIGwuYXJ0aWNsZSAhPT0gdHlwZW9mIHt9IHx8IHR5cGVvZiBsLnRleHQgIT09IHR5cGVvZiAnJykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcblx0Y29uc3QgZWRpdENvdW50ZXJMaW5rID0gKGwpID0+IHtcblx0XHRpZiAoIXNhbmVMaW5rQ2hlY2sobCkpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRpZiAoIXBnLndpa2kud2lraW1lZGlhKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y29uc3QgdU4gPSBsLmFydGljbGUudXNlck5hbWUoKTtcblx0XHRjb25zdCB0b29sID0gZ2V0VmFsdWVPZigncG9wdXBFZGl0Q291bnRlclRvb2wnKTtcblx0XHRsZXQgdXJsO1xuXHRcdGNvbnN0IGRlZmF1bHRUb29sVXJsID0gJy8vdG9vbHMud21mbGFicy5vcmcvc3VwZXJjb3VudC9pbmRleC5waHA/dXNlcj0kMSZwcm9qZWN0PSQyLiQzJztcblx0XHRzd2l0Y2ggKHRvb2wpIHtcblx0XHRcdGNhc2UgJ2N1c3RvbSc6XG5cdFx0XHRcdHVybCA9IHNpbXBsZVByaW50ZihnZXRWYWx1ZU9mKCdwb3B1cEVkaXRDb3VudGVyVXJsJyksIFtlbmNvZGVVUklDb21wb25lbnQodU4pLCB0b29sRGJOYW1lKCldKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OiB7XG5cdFx0XHRcdGNvbnN0IHRoZVdpa2kgPSBwZy53aWtpLmhvc3RuYW1lLnNwbGl0KCcuJyk7XG5cdFx0XHRcdHVybCA9IHNpbXBsZVByaW50ZihkZWZhdWx0VG9vbFVybCwgW2VuY29kZVVSSUNvbXBvbmVudCh1TiksIHRoZVdpa2lbMF0sIHRoZVdpa2lbMV1dKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGdlbmVyYWxOYXZMaW5rKHtcblx0XHRcdHVybCxcblx0XHRcdHRpdGxlOiB0cHJpbnRmKCdlZGl0Q291bnRlckxpbmtIaW50JywgW3VOXSksXG5cdFx0XHRuZXdXaW46IGwubmV3V2luLFxuXHRcdFx0dGV4dDogbC50ZXh0LFxuXHRcdFx0bm9Qb3B1cDogMSxcblx0XHR9KTtcblx0fTtcblx0Y29uc3QgZWRpdG9yTGlzdExpbmsgPSAobCkgPT4ge1xuXHRcdGlmICghc2FuZUxpbmtDaGVjayhsKSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGNvbnN0IGFydGljbGUgPSBsLmFydGljbGUuYXJ0aWNsZUZyb21UYWxrUGFnZSgpIHx8IGwuYXJ0aWNsZTtcblx0XHRjb25zdCB1cmwgPSBgaHR0cHM6Ly94dG9vbHMud21mbGFicy5vcmcvYXJ0aWNsZWluZm8vJHtlbmNvZGVVUkkoXG5cdFx0XHRwZy53aWtpLmhvc3RuYW1lXG5cdFx0KX0vJHthcnRpY2xlLnVybFN0cmluZygpfT91c2VsYW5nPSR7bXcuY29uZmlnLmdldCgnd2dVc2VyTGFuZ3VhZ2UnKX1gO1xuXHRcdHJldHVybiBnZW5lcmFsTmF2TGluayh7XG5cdFx0XHR1cmwsXG5cdFx0XHR0aXRsZTogdHByaW50ZignZWRpdG9yTGlzdEhpbnQnLCBbYXJ0aWNsZV0pLFxuXHRcdFx0bmV3V2luOiBsLm5ld1dpbixcblx0XHRcdHRleHQ6IGwudGV4dCxcblx0XHRcdG5vUG9wdXA6IDEsXG5cdFx0fSk7XG5cdH07XG5cdGNvbnN0IGdlbmVyYWxOYXZMaW5rID0gKGwpID0+IHtcblx0XHRsLmNsYXNzTmFtZSA9IGwuY2xhc3NOYW1lID09PSBudWxsID8gJ3BvcHVwTmF2TGluaycgOiBsLmNsYXNzTmFtZTtcblx0XHRyZXR1cm4gZ2VuZXJhbExpbmsobCk7XG5cdH07XG5cdC8vIG1hZ2ljIGhpc3RvcnkgbGlua3Ncblx0Ly9cblx0Y29uc3QgZ2V0SGlzdG9yeUluZm8gPSAod2lraXBhZ2UsIHdoYXROZXh0KSA9PiB7XG5cdFx0bG9nKCdnZXRIaXN0b3J5SW5mbycpO1xuXHRcdGdldEhpc3RvcnkoXG5cdFx0XHR3aWtpcGFnZSxcblx0XHRcdHdoYXROZXh0XG5cdFx0XHRcdD8gKGQpID0+IHtcblx0XHRcdFx0XHRcdHdoYXROZXh0KHByb2Nlc3NIaXN0b3J5KGQpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdDogcHJvY2Vzc0hpc3Rvcnlcblx0XHQpO1xuXHR9O1xuXHQvLyBGSVhNRSBlbGltaW5hdGUgcGcuaWROdW1iZXIgLi4uIGhvdz8gOi0oXG5cdGNvbnN0IGdldEhpc3RvcnkgPSAod2lraXBhZ2UsIG9uQ29tcGxldGUpID0+IHtcblx0XHRsb2coJ2dldEhpc3RvcnknKTtcblx0XHRjb25zdCB1cmwgPSBgJHtwZy53aWtpLmFwaXdpa2liYXNlfT9mb3JtYXQ9anNvbiZmb3JtYXR2ZXJzaW9uPTImYWN0aW9uPXF1ZXJ5JnByb3A9cmV2aXNpb25zJnRpdGxlcz0ke25ldyBUaXRsZShcblx0XHRcdHdpa2lwYWdlXG5cdFx0KS51cmxTdHJpbmcoKX0mcnZsaW1pdD0ke2dldFZhbHVlT2YoJ3BvcHVwSGlzdG9yeUxpbWl0Jyl9YDtcblx0XHRsb2coYGdldEhpc3Rvcnk6IHVybD0ke3VybH1gKTtcblx0XHRyZXR1cm4gc3RhcnREb3dubG9hZCh1cmwsIGAke3BnLmlkTnVtYmVyfWhpc3RvcnlgLCBvbkNvbXBsZXRlKTtcblx0fTtcblx0Y29uc3QgcHJvY2Vzc0hpc3RvcnkgPSAoZG93bmxvYWQpID0+IHtcblx0XHRjb25zdCBqc29iaiA9IGdldEpzT2JqKGRvd25sb2FkLmRhdGEpO1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCB7cmV2aXNpb25zfSA9IGFueUNoaWxkKGpzb2JqLnF1ZXJ5LnBhZ2VzKTtcblx0XHRcdGNvbnN0IGVkaXRzID0gW107XG5cdFx0XHRmb3IgKGNvbnN0IHJldmlzaW9uIG9mIHJldmlzaW9ucykge1xuXHRcdFx0XHRlZGl0cy5wdXNoKHtcblx0XHRcdFx0XHRvbGRpZDogcmV2aXNpb24ucmV2aWQsXG5cdFx0XHRcdFx0ZWRpdG9yOiByZXZpc2lvbi51c2VyLFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdGxvZyhgcHJvY2Vzc2VkICR7ZWRpdHMubGVuZ3RofSBlZGl0c2ApO1xuXHRcdFx0cmV0dXJuIGZpbmlzaFByb2Nlc3NIaXN0b3J5KGVkaXRzLCBtdy5jb25maWcuZ2V0KCd3Z1VzZXJOYW1lJykpO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0bG9nKCdTb21ldGhpbmcgd2VudCB3cm9uZyB3aXRoIEpTT04gYnVzaW5lc3MnKTtcblx0XHRcdHJldHVybiBmaW5pc2hQcm9jZXNzSGlzdG9yeShbXSk7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBmaW5pc2hQcm9jZXNzSGlzdG9yeSA9IChlZGl0cywgdXNlck5hbWUpID0+IHtcblx0XHRjb25zdCBoaXN0SW5mbyA9IHt9O1xuXHRcdGhpc3RJbmZvLmVkaXRzID0gZWRpdHM7XG5cdFx0aGlzdEluZm8udXNlck5hbWUgPSB1c2VyTmFtZTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGVkaXRzLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRpZiAoaGlzdEluZm8ubXlMYXN0RWRpdCA9PT0gdW5kZWZpbmVkICYmIHVzZXJOYW1lICYmIGVkaXRzW2ldLmVkaXRvciA9PT0gdXNlck5hbWUpIHtcblx0XHRcdFx0aGlzdEluZm8ubXlMYXN0RWRpdCA9IHtcblx0XHRcdFx0XHRpbmRleDogaSxcblx0XHRcdFx0XHRvbGRpZDogZWRpdHNbaV0ub2xkaWQsXG5cdFx0XHRcdFx0cHJldmlkOiBpID09PSAwID8gbnVsbCA6IGVkaXRzW2kgLSAxXS5vbGRpZCxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmIChoaXN0SW5mby5maXJzdE5ld0VkaXRvciA9PT0gdW5kZWZpbmVkICYmIGVkaXRzW2ldLmVkaXRvciAhPT0gZWRpdHNbMF0uZWRpdG9yKSB7XG5cdFx0XHRcdGhpc3RJbmZvLmZpcnN0TmV3RWRpdG9yID0ge1xuXHRcdFx0XHRcdGluZGV4OiBpLFxuXHRcdFx0XHRcdG9sZGlkOiBlZGl0c1tpXS5vbGRpZCxcblx0XHRcdFx0XHRwcmV2aWQ6IGkgPT09IDAgPyBudWxsIDogZWRpdHNbaSAtIDFdLm9sZGlkLFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBwZy5taXNjLmhpc3RvcnlJbmZvPWhpc3RJbmZvO1xuXHRcdHJldHVybiBoaXN0SW5mbztcblx0fTtcblx0Ly8gRU5ERklMRTogbGlua3MuanNcblx0Ly8gU1RBUlRGSUxFOiBvcHRpb25zLmpzXG5cdC8vIG9wdGlvbnNcblx0Ly8gY2hlY2sgZm9yIGV4aXN0aW5nIHZhbHVlLCBlbHNlIHVzZSBkZWZhdWx0XG5cdGNvbnN0IGRlZmF1bHRpemUgPSAoeCkgPT4ge1xuXHRcdHBnLm9wdGlvblt4XSA/Pz0gd2luZG93W3hdID09PSB1bmRlZmluZWQgPyBwZy5vcHRpb25EZWZhdWx0W3hdIDogd2luZG93W3hdO1xuXHR9O1xuXHRjb25zdCBuZXdPcHRpb24gPSAoeCwgZGVmKSA9PiB7XG5cdFx0cGcub3B0aW9uRGVmYXVsdFt4XSA9IGRlZjtcblx0fTtcblx0Y29uc3Qgc2V0RGVmYXVsdCA9ICh4LCBkZWYpID0+IHtcblx0XHRyZXR1cm4gbmV3T3B0aW9uKHgsIGRlZik7XG5cdH07XG5cdGNvbnN0IGdldFZhbHVlT2YgPSAodmFyTmFtZSkgPT4ge1xuXHRcdGRlZmF1bHRpemUodmFyTmFtZSk7XG5cdFx0cmV0dXJuIHBnLm9wdGlvblt2YXJOYW1lXTtcblx0fTtcblx0Y29uc3Qgc2V0T3B0aW9ucyA9ICgpID0+IHtcblx0XHQvLyB1c2VyLXNldHRhYmxlIHBhcmFtZXRlcnMgYW5kIGRlZmF1bHRzXG5cdFx0bGV0IHVzZXJJc1N5c29wID0gZmFsc2U7XG5cdFx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnVXNlckdyb3VwcycpKSB7XG5cdFx0XHRmb3IgKGxldCBnID0gMDsgZyA8IG13LmNvbmZpZy5nZXQoJ3dnVXNlckdyb3VwcycpLmxlbmd0aDsgKytnKSB7XG5cdFx0XHRcdGlmIChtdy5jb25maWcuZ2V0KCd3Z1VzZXJHcm91cHMnKVtnXSA9PT0gJ3N5c29wJykge1xuXHRcdFx0XHRcdHVzZXJJc1N5c29wID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAobXcuY29uZmlnLmdldCgnd2dVc2VyR3JvdXBzJylbZ10gPT09ICdzdGV3YXJkJykge1xuXHRcdFx0XHRcdHVzZXJJc1N5c29wID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBCYXNpYyBvcHRpb25zXG5cdFx0bmV3T3B0aW9uKCdwb3B1cERlbGF5JywgMC41KTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwSGlkZURlbGF5JywgMC41KTtcblx0XHRuZXdPcHRpb24oJ3NpbXBsZVBvcHVwcycsIGZhbHNlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwU3RydWN0dXJlJywgJ3Nob3J0bWVudXMnKTsgLy8gc2VlIGxhdGVyIC0gZGVmYXVsdCBmb3IgcG9wdXBTdHJ1Y3R1cmUgaXMgJ29yaWdpbmFsJyBpZiBzaW1wbGVQb3B1cHMgaXMgdHJ1ZVxuXHRcdG5ld09wdGlvbigncG9wdXBBY3Rpb25zTWVudScsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBTZXR1cE1lbnUnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwQWRtaW5MaW5rcycsIHVzZXJJc1N5c29wKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwU2hvcnRjdXRLZXlzJywgZmFsc2UpO1xuXHRcdG5ld09wdGlvbigncG9wdXBIaXN0b3JpY2FsTGlua3MnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwT25seUFydGljbGVMaW5rcycsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncmVtb3ZlVGl0bGVzJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cE1heFdpZHRoJywgMzUwKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwU2ltcGxpZnlNYWluTGluaycsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBBcHBlbmRSZWRpck5hdkxpbmtzJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFRvY0xpbmtzJywgZmFsc2UpO1xuXHRcdG5ld09wdGlvbigncG9wdXBTdWJwb3B1cHMnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwRHJhZ0hhbmRsZScsIGZhbHNlIC8qICdwb3B1cFRvcExpbmtzJyAqLyk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cExhenlQcmV2aWV3cycsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBMYXp5RG93bmxvYWRzJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cEFsbERhYnNTdHVicycsIGZhbHNlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwRGVidWdnaW5nJywgZmFsc2UpO1xuXHRcdG5ld09wdGlvbigncG9wdXBBY3RpdmVOYXZsaW5rcycsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBNb2RpZmllcicsIGZhbHNlKTsgLy8gY3RybCwgc2hpZnQsIGFsdCBvciBtZXRhXG5cdFx0bmV3T3B0aW9uKCdwb3B1cE1vZGlmaWVyQWN0aW9uJywgJ2VuYWJsZScpOyAvLyBvciAnZGlzYWJsZSdcblx0XHRuZXdPcHRpb24oJ3BvcHVwRHJhZ2dhYmxlJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFJldmlldycsIGZhbHNlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwTG9jYWxlJywgZmFsc2UpO1xuXHRcdG5ld09wdGlvbigncG9wdXBEYXRlVGltZUZvcm1hdHRlck9wdGlvbnMnLCB7XG5cdFx0XHR5ZWFyOiAnbnVtZXJpYycsXG5cdFx0XHRtb250aDogJ2xvbmcnLFxuXHRcdFx0ZGF5OiAnbnVtZXJpYycsXG5cdFx0XHRob3VyMTI6IGZhbHNlLFxuXHRcdFx0aG91cjogJzItZGlnaXQnLFxuXHRcdFx0bWludXRlOiAnMi1kaWdpdCcsXG5cdFx0XHRzZWNvbmQ6ICcyLWRpZ2l0Jyxcblx0XHR9KTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwRGF0ZUZvcm1hdHRlck9wdGlvbnMnLCB7XG5cdFx0XHR5ZWFyOiAnbnVtZXJpYycsXG5cdFx0XHRtb250aDogJ2xvbmcnLFxuXHRcdFx0ZGF5OiAnbnVtZXJpYycsXG5cdFx0fSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFRpbWVGb3JtYXR0ZXJPcHRpb25zJywge1xuXHRcdFx0aG91cjEyOiBmYWxzZSxcblx0XHRcdGhvdXI6ICcyLWRpZ2l0Jyxcblx0XHRcdG1pbnV0ZTogJzItZGlnaXQnLFxuXHRcdFx0c2Vjb25kOiAnMi1kaWdpdCcsXG5cdFx0fSk7XG5cdFx0Ly8gaW1hZ2VzXG5cdFx0bmV3T3B0aW9uKCdwb3B1cEltYWdlcycsIHRydWUpO1xuXHRcdG5ld09wdGlvbignaW1hZ2VQb3B1cHNGb3JJbWFnZXMnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwTmV2ZXJHZXRUaHVtYnMnLCBmYWxzZSk7XG5cdFx0Ly8gbmV3T3B0aW9uKCdwb3B1cEltYWdlc1RvZ2dsZVNpemUnLCAgICAgICB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwVGh1bWJBY3Rpb24nLCAnaW1hZ2VwYWdlJyk7IC8vICdzaXpldG9nZ2xlJyk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cEltYWdlU2l6ZScsIDYwKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwSW1hZ2VTaXplTGFyZ2UnLCAyMDApO1xuXHRcdC8vIHJlZGlycywgZGFicywgcmV2ZXJzaW9uXG5cdFx0bmV3T3B0aW9uKCdwb3B1cEZpeFJlZGlycycsIGZhbHNlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwUmVkaXJBdXRvQ2xpY2snLCAnd3BEaWZmJyk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cEZpeERhYnMnLCBmYWxzZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cERhYnNBdXRvQ2xpY2snLCAnd3BEaWZmJyk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFJldmVydFN1bW1hcnlQcm9tcHQnLCBmYWxzZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cE1pbm9yUmV2ZXJ0cycsIGZhbHNlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwUmVkbGlua1JlbW92YWwnLCBmYWxzZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFJlZGxpbmtBdXRvQ2xpY2snLCAnd3BEaWZmJyk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFdhdGNoRGlzYW1iaWdnZWRQYWdlcycsIG51bGwpO1xuXHRcdG5ld09wdGlvbigncG9wdXBXYXRjaFJlZGlycmVkUGFnZXMnLCBudWxsKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwRGFiV2lrdGlvbmFyeScsICdsYXN0Jyk7XG5cdFx0Ly8gbmF2bGlua3Ncblx0XHRuZXdPcHRpb24oJ3BvcHVwTmF2TGlua3MnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwTmF2TGlua1NlcGFyYXRvcicsICcgJnNkb3Q7ICcpO1xuXHRcdG5ld09wdGlvbigncG9wdXBMYXN0RWRpdExpbmsnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwRWRpdENvdW50ZXJUb29sJywgJ3N1cGVyY291bnQnKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwRWRpdENvdW50ZXJVcmwnLCAnJyk7XG5cdFx0Ly8gcHJldmlld3MgZXRjXG5cdFx0bmV3T3B0aW9uKCdwb3B1cFByZXZpZXdzJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFN1bW1hcnlEYXRhJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cE1heFByZXZpZXdTZW50ZW5jZXMnLCA1KTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwTWF4UHJldmlld0NoYXJhY3RlcnMnLCA2MDApO1xuXHRcdG5ld09wdGlvbigncG9wdXBMYXN0TW9kaWZpZWQnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwUHJldmlld0tpbGxUZW1wbGF0ZXMnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwUHJldmlld1Jhd1RlbXBsYXRlcycsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBQcmV2aWV3Rmlyc3RQYXJPbmx5JywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFByZXZpZXdDdXRIZWFkaW5ncycsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBQcmV2aWV3QnV0dG9uJywgZmFsc2UpO1xuXHRcdG5ld09wdGlvbigncG9wdXBQcmV2aWV3QnV0dG9uRXZlbnQnLCAnY2xpY2snKTtcblx0XHQvLyBkaWZmc1xuXHRcdG5ld09wdGlvbigncG9wdXBQcmV2aWV3RGlmZnMnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwRGlmZk1heExpbmVzJywgMTAwKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwRGlmZkNvbnRleHRMaW5lcycsIDIpO1xuXHRcdG5ld09wdGlvbigncG9wdXBEaWZmQ29udGV4dENoYXJhY3RlcnMnLCA0MCk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cERpZmZEYXRlcycsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBEaWZmRGF0ZVByaW50ZXInLCAndG9Mb2NhbGVTdHJpbmcnKTsgLy8gbm8gbG9uZ2VyIGluIHVzZVxuXG5cdFx0Ly8gZWRpdCBzdW1tYXJpZXMuIEdvZCwgdGhlc2UgYXJlIHVnbHkuXG5cdFx0bmV3T3B0aW9uKCdwb3B1cFJldmlld2VkU3VtbWFyeScsIHBvcHVwU3RyaW5nKCdkZWZhdWx0cG9wdXBSZXZpZXdlZFN1bW1hcnknKSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cEZpeERhYnNTdW1tYXJ5JywgcG9wdXBTdHJpbmcoJ2RlZmF1bHRwb3B1cEZpeERhYnNTdW1tYXJ5JykpO1xuXHRcdG5ld09wdGlvbigncG9wdXBFeHRlbmRlZFJldmVydFN1bW1hcnknLCBwb3B1cFN0cmluZygnZGVmYXVsdHBvcHVwRXh0ZW5kZWRSZXZlcnRTdW1tYXJ5JykpO1xuXHRcdG5ld09wdGlvbigncG9wdXBSZXZlcnRTdW1tYXJ5JywgcG9wdXBTdHJpbmcoJ2RlZmF1bHRwb3B1cFJldmVydFN1bW1hcnknKSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFJldmVydFRvUHJldmlvdXNTdW1tYXJ5JywgcG9wdXBTdHJpbmcoJ2RlZmF1bHRwb3B1cFJldmVydFRvUHJldmlvdXNTdW1tYXJ5JykpO1xuXHRcdG5ld09wdGlvbigncG9wdXBRdWVyaWVkUmV2ZXJ0U3VtbWFyeScsIHBvcHVwU3RyaW5nKCdkZWZhdWx0cG9wdXBRdWVyaWVkUmV2ZXJ0U3VtbWFyeScpKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwUXVlcmllZFJldmVydFRvUHJldmlvdXNTdW1tYXJ5JywgcG9wdXBTdHJpbmcoJ2RlZmF1bHRwb3B1cFF1ZXJpZWRSZXZlcnRUb1ByZXZpb3VzU3VtbWFyeScpKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwRml4UmVkaXJzU3VtbWFyeScsIHBvcHVwU3RyaW5nKCdkZWZhdWx0cG9wdXBGaXhSZWRpcnNTdW1tYXJ5JykpO1xuXHRcdG5ld09wdGlvbigncG9wdXBSZWRsaW5rU3VtbWFyeScsIHBvcHVwU3RyaW5nKCdkZWZhdWx0cG9wdXBSZWRsaW5rU3VtbWFyeScpKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwUm1EYWJMaW5rU3VtbWFyeScsIHBvcHVwU3RyaW5nKCdkZWZhdWx0cG9wdXBSbURhYkxpbmtTdW1tYXJ5JykpO1xuXHRcdC8vIG1pc2Ncblx0XHRuZXdPcHRpb24oJ3BvcHVwSGlzdG9yeUxpbWl0JywgNTApO1xuXHRcdG5ld09wdGlvbigncG9wdXBGaWx0ZXJzJywgW1xuXHRcdFx0cG9wdXBGaWx0ZXJTdHViRGV0ZWN0LFxuXHRcdFx0cG9wdXBGaWx0ZXJEaXNhbWJpZ0RldGVjdCxcblx0XHRcdHBvcHVwRmlsdGVyUGFnZVNpemUsXG5cdFx0XHRwb3B1cEZpbHRlckNvdW50TGlua3MsXG5cdFx0XHRwb3B1cEZpbHRlckNvdW50SW1hZ2VzLFxuXHRcdFx0cG9wdXBGaWx0ZXJDb3VudENhdGVnb3JpZXMsXG5cdFx0XHRwb3B1cEZpbHRlckxhc3RNb2RpZmllZCxcblx0XHRdKTtcblx0XHRuZXdPcHRpb24oJ2V4dHJhUG9wdXBGaWx0ZXJzJywgW10pO1xuXHRcdG5ld09wdGlvbigncG9wdXBPbkVkaXRTZWxlY3Rpb24nLCAnY3Vyc29yJyk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFByZXZpZXdIaXN0b3J5JywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cEltYWdlTGlua3MnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwQ2F0ZWdvcnlNZW1iZXJzJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFVzZXJJbmZvJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cEhpc3RvcnlQcmV2aWV3TGltaXQnLCAyNSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cENvbnRyaWJzUHJldmlld0xpbWl0JywgMjUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBSZXZEZWxVcmwnLCAnLy9lbi53aWtpcGVkaWEub3JnL3dpa2kvV2lraXBlZGlhOlJldmlzaW9uX2RlbGV0aW9uJyk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFNob3dHZW5kZXInLCB0cnVlKTtcblx0XHQvLyBuZXcgd2luZG93c1xuXHRcdG5ld09wdGlvbigncG9wdXBOZXdXaW5kb3dzJywgZmFsc2UpO1xuXHRcdG5ld09wdGlvbigncG9wdXBMaW5rc05ld1dpbmRvdycsIHtsYXN0Q29udHJpYjogdHJ1ZSwgc2luY2VNZTogdHJ1ZX0pO1xuXHRcdC8vIHJlZ2V4cHNcblx0XHRuZXdPcHRpb24oXG5cdFx0XHQncG9wdXBEYWJSZWdleHAnLFxuXHRcdFx0U3RyaW5nLnJhd2BcXHtcXHtcXHMqKGQoYWJ8aXNhbWIoaWcodWF0aW9uKT8pPyl8KCgoZ2VvfGhufHJvYWQ/fHNjaG9vbHxudW1iZXIpZGlzKXxbMjM0XVtsY11bYWN3XXwocm9hZHxzaGlwKWluZGV4KSlcXHMqKFxcfFtefV0qKT9cXH1cXH18aXMgYSAuKmRpc2FtYmlndWF0aW9uLipwYWdlYFxuXHRcdCk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cEFuY2hvclJlZ2V4cCcsICdhbmNob3JzPycpOyAvLyBob3cgdG8gaWRlbnRpZnkgYW4gYW5jaG9ycyB0ZW1wbGF0ZVxuXHRcdG5ld09wdGlvbigncG9wdXBTdHViUmVnZXhwJywgJyhzZWN0KT9zdHViW31dW31dfFRoaXMgLiotcmVsYXRlZCBhcnRpY2xlIGlzIGEgLipzdHViJyk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cEltYWdlVmFyc1JlZ2V4cCcsICdpbWFnZXxpbWFnZV8oPzpmaWxlfHNreWxpbmV8bmFtZXxmbGFnfHNlYWwpfGNvdmVyfGJhZGdlfGxvZ28nKTtcblx0fTtcblx0Ly8gRU5ERklMRTogb3B0aW9ucy5qc1xuXHQvLyBTVEFSVEZJTEU6IHN0cmluZ3MuanNcblx0Ly8gVHJhbnNsYXRhYmxlIHN0cmluZ3Ncblx0Ly9cblx0Ly8gU2VlIGluc3RydWN0aW9ucyBhdFxuXHQvLyB7QGxpbmsgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV2lraXBlZGlhOlRvb2xzL05hdmlnYXRpb25fcG9wdXBzL1RyYW5zbGF0aW9ufVxuXHRwZy5zdHJpbmcgPSB7XG5cdFx0Ly8gc3VtbWFyeSBkYXRhLCBzZWFyY2hpbmcgZXRjLlxuXHRcdGFydGljbGU6ICdhcnRpY2xlJyxcblx0XHRjYXRlZ29yeTogJ2NhdGVnb3J5Jyxcblx0XHRjYXRlZ29yaWVzOiAnY2F0ZWdvcmllcycsXG5cdFx0aW1hZ2U6ICdpbWFnZScsXG5cdFx0aW1hZ2VzOiAnaW1hZ2VzJyxcblx0XHRzdHViOiAnc3R1YicsXG5cdFx0J3NlY3Rpb24gc3R1Yic6ICdzZWN0aW9uIHN0dWInLFxuXHRcdCdFbXB0eSBwYWdlJzogJ0VtcHR5IHBhZ2UnLFxuXHRcdGtCOiAna0InLFxuXHRcdGJ5dGVzOiAnYnl0ZXMnLFxuXHRcdGRheTogJ2RheScsXG5cdFx0ZGF5czogJ2RheXMnLFxuXHRcdGhvdXI6ICdob3VyJyxcblx0XHRob3VyczogJ2hvdXJzJyxcblx0XHRtaW51dGU6ICdtaW51dGUnLFxuXHRcdG1pbnV0ZXM6ICdtaW51dGVzJyxcblx0XHRzZWNvbmQ6ICdzZWNvbmQnLFxuXHRcdHNlY29uZHM6ICdzZWNvbmRzJyxcblx0XHR3ZWVrOiAnd2VlaycsXG5cdFx0d2Vla3M6ICd3ZWVrcycsXG5cdFx0c2VhcmNoOiAnc2VhcmNoJyxcblx0XHRTZWFyY2hIaW50OiAnRmluZCBFbmdsaXNoIFdpa2lwZWRpYSBhcnRpY2xlcyBjb250YWluaW5nICVzJyxcblx0XHR3ZWI6ICd3ZWInLFxuXHRcdGdsb2JhbDogJ2dsb2JhbCcsXG5cdFx0Ly8gYXJ0aWNsZS1yZWxhdGVkIGFjdGlvbnMgYW5kIGluZm9cblx0XHQvLyAoc29tZSBhY3Rpb25zIGFsc28gYXBwbHkgdG8gdXNlciBwYWdlcylcblx0XHRhY3Rpb25zOiAnYWN0aW9ucycsXG5cdFx0cG9wdXBzTWVudTogJ3BvcHVwcycsXG5cdFx0dG9nZ2xlUHJldmlld3NIaW50OiAnVG9nZ2xlIHByZXZpZXcgZ2VuZXJhdGlvbiBpbiBwb3B1cHMgb24gdGhpcyBwYWdlJyxcblx0XHQnZW5hYmxlIHByZXZpZXdzJzogJ2VuYWJsZSBwcmV2aWV3cycsXG5cdFx0J2Rpc2FibGUgcHJldmlld3MnOiAnZGlzYWJsZSBwcmV2aWV3cycsXG5cdFx0J3RvZ2dsZSBwcmV2aWV3cyc6ICd0b2dnbGUgcHJldmlld3MnLFxuXHRcdCdzaG93IHByZXZpZXcnOiAnc2hvdyBwcmV2aWV3Jyxcblx0XHRyZXNldDogJ3Jlc2V0Jyxcblx0XHQnbW9yZS4uLic6ICdtb3JlLi4uJyxcblx0XHRkaXNhYmxlOiAnZGlzYWJsZSBwb3B1cHMnLFxuXHRcdGRpc2FibGVQb3B1cHNIaW50OiAnRGlzYWJsZSBwb3B1cHMgb24gdGhpcyBwYWdlLiBSZWxvYWQgcGFnZSB0byByZS1lbmFibGUuJyxcblx0XHRoaXN0b3J5ZmVlZEhpbnQ6ICdSU1MgZmVlZCBvZiByZWNlbnQgY2hhbmdlcyB0byB0aGlzIHBhZ2UnLFxuXHRcdHB1cmdlUG9wdXBzSGludDogJ1Jlc2V0IHBvcHVwcywgY2xlYXJpbmcgYWxsIGNhY2hlZCBwb3B1cCBkYXRhLicsXG5cdFx0UG9wdXBzSGludDogJ1Jlc2V0IHBvcHVwcywgY2xlYXJpbmcgYWxsIGNhY2hlZCBwb3B1cCBkYXRhLicsXG5cdFx0c3BhY2ViYXI6ICdzcGFjZScsXG5cdFx0dmlldzogJ3ZpZXcnLFxuXHRcdCd2aWV3IGFydGljbGUnOiAndmlldyBhcnRpY2xlJyxcblx0XHR2aWV3SGludDogJ0dvIHRvICVzJyxcblx0XHR0YWxrOiAndGFsaycsXG5cdFx0J3RhbGsgcGFnZSc6ICd0YWxrIHBhZ2UnLFxuXHRcdCd0aGlzJm5ic3A7cmV2aXNpb24nOiAndGhpcyZuYnNwO3JldmlzaW9uJyxcblx0XHQncmV2aXNpb24gJXMgb2YgJXMnOiAncmV2aXNpb24gJXMgb2YgJXMnLFxuXHRcdCdSZXZpc2lvbiAlcyBvZiAlcyc6ICdSZXZpc2lvbiAlcyBvZiAlcycsXG5cdFx0J3RoZSByZXZpc2lvbiBwcmlvciB0byByZXZpc2lvbiAlcyBvZiAlcyc6ICd0aGUgcmV2aXNpb24gcHJpb3IgdG8gcmV2aXNpb24gJXMgb2YgJXMnLFxuXHRcdCdUb2dnbGUgaW1hZ2Ugc2l6ZSc6ICdDbGljayB0byB0b2dnbGUgaW1hZ2Ugc2l6ZScsXG5cdFx0ZGVsOiAnZGVsJyxcblx0XHRkZWxldGU6ICdkZWxldGUnLFxuXHRcdGRlbGV0ZUhpbnQ6ICdEZWxldGUgJXMnLFxuXHRcdHVuZGVsZXRlU2hvcnQ6ICd1bicsXG5cdFx0VW5kZWxldGVIaW50OiAnU2hvdyB0aGUgZGVsZXRpb24gaGlzdG9yeSBmb3IgJXMnLFxuXHRcdHByb3RlY3Q6ICdwcm90ZWN0Jyxcblx0XHRwcm90ZWN0SGludDogJ1Jlc3RyaWN0IGVkaXRpbmcgcmlnaHRzIHRvICVzJyxcblx0XHR1bnByb3RlY3RTaG9ydDogJ3VuJyxcblx0XHR1bnByb3RlY3RIaW50OiAnQWxsb3cgJXMgdG8gYmUgZWRpdGVkIGJ5IGFueW9uZSBhZ2FpbicsXG5cdFx0J3NlbmQgdGhhbmtzJzogJ3NlbmQgdGhhbmtzJyxcblx0XHRUaGFua3NIaW50OiAnU2VuZCBhIHRoYW5rIHlvdSBub3RpZmljYXRpb24gdG8gdGhpcyB1c2VyJyxcblx0XHRtb3ZlOiAnbW92ZScsXG5cdFx0J21vdmUgcGFnZSc6ICdtb3ZlIHBhZ2UnLFxuXHRcdE1vdmVwYWdlSGludDogJ0NoYW5nZSB0aGUgdGl0bGUgb2YgJXMnLFxuXHRcdGVkaXQ6ICdlZGl0Jyxcblx0XHQnZWRpdCBhcnRpY2xlJzogJ2VkaXQgYXJ0aWNsZScsXG5cdFx0ZWRpdEhpbnQ6ICdDaGFuZ2UgdGhlIGNvbnRlbnQgb2YgJXMnLFxuXHRcdCdlZGl0IHRhbGsnOiAnZWRpdCB0YWxrJyxcblx0XHRuZXc6ICduZXcnLFxuXHRcdCduZXcgdG9waWMnOiAnbmV3IHRvcGljJyxcblx0XHRuZXdTZWN0aW9uSGludDogJ1N0YXJ0IGEgbmV3IHNlY3Rpb24gb24gJXMnLFxuXHRcdCdudWxsIGVkaXQnOiAnbnVsbCBlZGl0Jyxcblx0XHRudWxsRWRpdEhpbnQ6ICdTdWJtaXQgYW4gZWRpdCB0byAlcywgbWFraW5nIG5vIGNoYW5nZXMgJyxcblx0XHRoaXN0OiAnaGlzdCcsXG5cdFx0aGlzdG9yeTogJ2hpc3RvcnknLFxuXHRcdGhpc3RvcnlIaW50OiAnTGlzdCB0aGUgY2hhbmdlcyBtYWRlIHRvICVzJyxcblx0XHRsYXN0OiAncHJldicsXG5cdFx0bGFzdEVkaXQ6ICdsYXN0RWRpdCcsXG5cdFx0J21hcmsgcGF0cm9sbGVkJzogJ21hcmsgcGF0cm9sbGVkJyxcblx0XHRtYXJrcGF0cm9sbGVkSGludDogJ01hcmsgdGhpcyBlZGl0IGFzIHBhdHJvbGxlZCcsXG5cdFx0J0NvdWxkIG5vdCBtYXJrZWQgdGhpcyBlZGl0IGFzIHBhdHJvbGxlZCc6ICdDb3VsZCBub3QgbWFya2VkIHRoaXMgZWRpdCBhcyBwYXRyb2xsZWQnLFxuXHRcdCdzaG93IGxhc3QgZWRpdCc6ICdtb3N0IHJlY2VudCBlZGl0Jyxcblx0XHQnU2hvdyB0aGUgbGFzdCBlZGl0JzogJ1Nob3cgdGhlIGVmZmVjdHMgb2YgdGhlIG1vc3QgcmVjZW50IGNoYW5nZScsXG5cdFx0bGFzdENvbnRyaWI6ICdsYXN0Q29udHJpYicsXG5cdFx0J2xhc3Qgc2V0IG9mIGVkaXRzJzogJ2xhdGVzdCBlZGl0cycsXG5cdFx0bGFzdENvbnRyaWJIaW50OiAnU2hvdyB0aGUgbmV0IGVmZmVjdCBvZiBjaGFuZ2VzIG1hZGUgYnkgdGhlIGxhc3QgZWRpdG9yJyxcblx0XHRjdXI6ICdjdXInLFxuXHRcdGRpZmZDdXI6ICdkaWZmQ3VyJyxcblx0XHQnU2hvdyBjaGFuZ2VzIHNpbmNlIHJldmlzaW9uICVzJzogJ1Nob3cgY2hhbmdlcyBzaW5jZSByZXZpc2lvbiAlcycsXG5cdFx0JyVzIG9sZCc6ICclcyBvbGQnLFxuXHRcdG9sZEVkaXQ6ICdvbGRFZGl0Jyxcblx0XHRwdXJnZTogJ3B1cmdlJyxcblx0XHRwdXJnZUhpbnQ6ICdEZW1hbmQgYSBmcmVzaCBjb3B5IG9mICVzJyxcblx0XHRyYXc6ICdzb3VyY2UnLFxuXHRcdHJhd0hpbnQ6ICdEb3dubG9hZCB0aGUgc291cmNlIG9mICVzJyxcblx0XHRyZW5kZXI6ICdzaW1wbGUnLFxuXHRcdHJlbmRlckhpbnQ6ICdTaG93IGEgcGxhaW4gSFRNTCB2ZXJzaW9uIG9mICVzJyxcblx0XHQnU2hvdyB0aGUgZWRpdCBtYWRlIHRvIGdldCByZXZpc2lvbic6ICdTaG93IHRoZSBlZGl0IG1hZGUgdG8gZ2V0IHJldmlzaW9uJyxcblx0XHRzaW5jZU1lOiAnc2luY2VNZScsXG5cdFx0J2NoYW5nZXMgc2luY2UgbWluZSc6ICdkaWZmIG15IGVkaXQnLFxuXHRcdHNpbmNlTWVIaW50OiAnU2hvdyBjaGFuZ2VzIHNpbmNlIG15IGxhc3QgZWRpdCcsXG5cdFx0XCJDb3VsZG4ndCBmaW5kIGFuIGVkaXQgYnkgJXNcXG5pbiB0aGUgbGFzdCAlcyBlZGl0cyB0b1xcbiVzXCI6XG5cdFx0XHRcIkNvdWxkbid0IGZpbmQgYW4gZWRpdCBieSAlc1xcbmluIHRoZSBsYXN0ICVzIGVkaXRzIHRvXFxuJXNcIixcblx0XHRlZHM6ICdlZHMnLFxuXHRcdGVkaXRvcnM6ICdlZGl0b3JzJyxcblx0XHRlZGl0b3JMaXN0SGludDogJ0xpc3QgdGhlIHVzZXJzIHdobyBoYXZlIGVkaXRlZCAlcycsXG5cdFx0cmVsYXRlZDogJ3JlbGF0ZWQnLFxuXHRcdHJlbGF0ZWRDaGFuZ2VzOiAncmVsYXRlZENoYW5nZXMnLFxuXHRcdCdyZWxhdGVkIGNoYW5nZXMnOiAncmVsYXRlZCBjaGFuZ2VzJyxcblx0XHRSZWNlbnRjaGFuZ2VzbGlua2VkSGludDogJ1Nob3cgY2hhbmdlcyBpbiBhcnRpY2xlcyByZWxhdGVkIHRvICVzJyxcblx0XHRlZGl0T2xkOiAnZWRpdE9sZCcsXG5cdFx0cnY6ICdydicsXG5cdFx0cmV2ZXJ0OiAncmV2ZXJ0Jyxcblx0XHRyZXZlcnRIaW50OiAnUmV2ZXJ0IHRvICVzJyxcblx0XHRkZWZhdWx0cG9wdXBSZXZpZXdlZFN1bW1hcnk6XG5cdFx0XHQnQWNjZXB0ZWQgYnkgcmV2aWV3aW5nIHRoZSBbW1NwZWNpYWw6ZGlmZi8lcy8lc3xkaWZmZXJlbmNlXV0gYmV0d2VlbiB0aGlzIHZlcnNpb24gYW5kIHByZXZpb3VzbHkgYWNjZXB0ZWQgdmVyc2lvbiB1c2luZyBbWzplbndpa2k6V2lraXBlZGlhOlRvb2xzL05hdmlnYXRpb25fcG9wdXBzfHBvcHVwc11dJyxcblx0XHRkZWZhdWx0cG9wdXBSZWRsaW5rU3VtbWFyeTpcblx0XHRcdCdSZW1vdmluZyBsaW5rIHRvIGVtcHR5IHBhZ2UgW1slc11dIHVzaW5nIFtbOmVud2lraTpXaWtpcGVkaWE6VG9vbHMvTmF2aWdhdGlvbl9wb3B1cHN8cG9wdXBzXV0nLFxuXHRcdGRlZmF1bHRwb3B1cEZpeERhYnNTdW1tYXJ5OlxuXHRcdFx0J0Rpc2FtYmlndWF0ZSBbWyVzXV0gdG8gW1slc11dIHVzaW5nIFtbOmVud2lraTpXaWtpcGVkaWE6VG9vbHMvTmF2aWdhdGlvbl9wb3B1cHN8cG9wdXBzXV0nLFxuXHRcdGRlZmF1bHRwb3B1cEZpeFJlZGlyc1N1bW1hcnk6XG5cdFx0XHQnUmVkaXJlY3QgYnlwYXNzIGZyb20gW1slc11dIHRvIFtbJXNdXSB1c2luZyBbWzplbndpa2k6V2lraXBlZGlhOlRvb2xzL05hdmlnYXRpb25fcG9wdXBzfHBvcHVwc11dJyxcblx0XHRkZWZhdWx0cG9wdXBFeHRlbmRlZFJldmVydFN1bW1hcnk6XG5cdFx0XHQnUmV2ZXJ0IHRvIHJldmlzaW9uIGRhdGVkICVzIGJ5ICVzLCBvbGRpZCAlcyB1c2luZyBbWzplbndpa2k6V2lraXBlZGlhOlRvb2xzL05hdmlnYXRpb25fcG9wdXBzfHBvcHVwc11dJyxcblx0XHRkZWZhdWx0cG9wdXBSZXZlcnRUb1ByZXZpb3VzU3VtbWFyeTpcblx0XHRcdCdSZXZlcnQgdG8gdGhlIHJldmlzaW9uIHByaW9yIHRvIHJldmlzaW9uICVzIHVzaW5nIFtbOmVud2lraTpXaWtpcGVkaWE6VG9vbHMvTmF2aWdhdGlvbl9wb3B1cHN8cG9wdXBzXV0nLFxuXHRcdGRlZmF1bHRwb3B1cFJldmVydFN1bW1hcnk6ICdSZXZlcnQgdG8gcmV2aXNpb24gJXMgdXNpbmcgW1s6ZW53aWtpOldpa2lwZWRpYTpUb29scy9OYXZpZ2F0aW9uX3BvcHVwc3xwb3B1cHNdXScsXG5cdFx0ZGVmYXVsdHBvcHVwUXVlcmllZFJldmVydFRvUHJldmlvdXNTdW1tYXJ5OlxuXHRcdFx0J1JldmVydCB0byB0aGUgcmV2aXNpb24gcHJpb3IgdG8gcmV2aXNpb24gJDEgZGF0ZWQgJDIgYnkgJDMgdXNpbmcgW1s6ZW53aWtpOldpa2lwZWRpYTpUb29scy9OYXZpZ2F0aW9uX3BvcHVwc3xwb3B1cHNdXScsXG5cdFx0ZGVmYXVsdHBvcHVwUXVlcmllZFJldmVydFN1bW1hcnk6XG5cdFx0XHQnUmV2ZXJ0IHRvIHJldmlzaW9uICQxIGRhdGVkICQyIGJ5ICQzIHVzaW5nIFtbOmVud2lraTpXaWtpcGVkaWE6VG9vbHMvTmF2aWdhdGlvbl9wb3B1cHN8cG9wdXBzXV0nLFxuXHRcdGRlZmF1bHRwb3B1cFJtRGFiTGlua1N1bW1hcnk6XG5cdFx0XHQnUmVtb3ZlIGxpbmsgdG8gZGFiIHBhZ2UgW1slc11dIHVzaW5nIFtbOmVud2lraTpXaWtpcGVkaWE6VG9vbHMvTmF2aWdhdGlvbl9wb3B1cHN8cG9wdXBzXV0nLFxuXHRcdFJlZGlyZWN0czogJ1JlZGlyZWN0cycsXG5cdFx0JyB0byAnOiAnIHRvICcsXG5cdFx0J0J5cGFzcyByZWRpcmVjdCc6ICdCeXBhc3MgcmVkaXJlY3QnLFxuXHRcdCdGaXggdGhpcyByZWRpcmVjdCc6ICdGaXggdGhpcyByZWRpcmVjdCcsXG5cdFx0ZGlzYW1iaWc6ICdkaXNhbWJpZycsXG5cdFx0ZGlzYW1iaWdIaW50OiAnRGlzYW1iaWd1YXRlIHRoaXMgbGluayB0byBbWyVzXV0nLFxuXHRcdCdDbGljayB0byBkaXNhbWJpZ3VhdGUgdGhpcyBsaW5rIHRvOic6ICdDbGljayB0byBkaXNhbWJpZ3VhdGUgdGhpcyBsaW5rIHRvOicsXG5cdFx0J3JlbW92ZSB0aGlzIGxpbmsnOiAncmVtb3ZlIHRoaXMgbGluaycsXG5cdFx0J3JlbW92ZSBhbGwgbGlua3MgdG8gdGhpcyBwYWdlIGZyb20gdGhpcyBhcnRpY2xlJzogJ3JlbW92ZSBhbGwgbGlua3MgdG8gdGhpcyBwYWdlIGZyb20gdGhpcyBhcnRpY2xlJyxcblx0XHQncmVtb3ZlIGFsbCBsaW5rcyB0byB0aGlzIGRpc2FtYmlnIHBhZ2UgZnJvbSB0aGlzIGFydGljbGUnOlxuXHRcdFx0J3JlbW92ZSBhbGwgbGlua3MgdG8gdGhpcyBkaXNhbWJpZyBwYWdlIGZyb20gdGhpcyBhcnRpY2xlJyxcblx0XHRtYWlubGluazogJ21haW5saW5rJyxcblx0XHR3aWtpTGluazogJ3dpa2lMaW5rJyxcblx0XHR3aWtpTGlua3M6ICd3aWtpTGlua3MnLFxuXHRcdCdsaW5rcyBoZXJlJzogJ2xpbmtzIGhlcmUnLFxuXHRcdHdoYXRMaW5rc0hlcmU6ICd3aGF0TGlua3NIZXJlJyxcblx0XHQnd2hhdCBsaW5rcyBoZXJlJzogJ3doYXQgbGlua3MgaGVyZScsXG5cdFx0V2hhdGxpbmtzaGVyZUhpbnQ6ICdMaXN0IHRoZSBwYWdlcyB0aGF0IGFyZSBoeXBlcmxpbmtlZCB0byAlcycsXG5cdFx0dW53YXRjaFNob3J0OiAndW4nLFxuXHRcdHdhdGNoVGhpbmd5OiAnd2F0Y2gnLFxuXHRcdHdhdGNoSGludDogJ0FkZCAlcyB0byBteSB3YXRjaGxpc3QnLFxuXHRcdHVud2F0Y2hIaW50OiAnUmVtb3ZlICVzIGZyb20gbXkgd2F0Y2hsaXN0Jyxcblx0XHQnT25seSBmb3VuZCBvbmUgZWRpdG9yOiAlcyBtYWRlICVzIGVkaXRzJzogJ09ubHkgZm91bmQgb25lIGVkaXRvcjogJXMgbWFkZSAlcyBlZGl0cycsXG5cdFx0JyVzIHNlZW1zIHRvIGJlIHRoZSBsYXN0IGVkaXRvciB0byB0aGUgcGFnZSAlcyc6ICclcyBzZWVtcyB0byBiZSB0aGUgbGFzdCBlZGl0b3IgdG8gdGhlIHBhZ2UgJXMnLFxuXHRcdHJzczogJ3JzcycsXG5cdFx0Ly8gZGlmZiBwcmV2aWV3c1xuXHRcdCdEaWZmIHRydW5jYXRlZCBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucyc6ICdEaWZmIHRydW5jYXRlZCBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucycsXG5cdFx0J09sZCByZXZpc2lvbic6ICdPbGQgcmV2aXNpb24nLFxuXHRcdCdOZXcgcmV2aXNpb24nOiAnTmV3IHJldmlzaW9uJyxcblx0XHQnU29tZXRoaW5nIHdlbnQgd3JvbmcgOi0oJzogJ1NvbWV0aGluZyB3ZW50IHdyb25nIDotKCcsXG5cdFx0J0VtcHR5IHJldmlzaW9uLCBtYXliZSBub24tZXhpc3RlbnQnOiAnRW1wdHkgcmV2aXNpb24sIG1heWJlIG5vbi1leGlzdGVudCcsXG5cdFx0J1Vua25vd24gZGF0ZSc6ICdVbmtub3duIGRhdGUnLFxuXHRcdC8vIG90aGVyIHNwZWNpYWwgcHJldmlld3Ncblx0XHQnRW1wdHkgY2F0ZWdvcnknOiAnRW1wdHkgY2F0ZWdvcnknLFxuXHRcdCdDYXRlZ29yeSBtZW1iZXJzICglcyBzaG93biknOiAnQ2F0ZWdvcnkgbWVtYmVycyAoJXMgc2hvd24pJyxcblx0XHQnTm8gaW1hZ2UgbGlua3MgZm91bmQnOiAnTm8gaW1hZ2UgbGlua3MgZm91bmQnLFxuXHRcdCdGaWxlIGxpbmtzJzogJ0ZpbGUgbGlua3MnLFxuXHRcdCdObyBpbWFnZSBmb3VuZCc6ICdObyBpbWFnZSBmb3VuZCcsXG5cdFx0J0ltYWdlIGZyb20gQ29tbW9ucyc6ICdJbWFnZSBmcm9tIENvbW1vbnMnLFxuXHRcdCdEZXNjcmlwdGlvbiBwYWdlJzogJ0Rlc2NyaXB0aW9uIHBhZ2UnLFxuXHRcdCdBbHQgdGV4dDonOiAnQWx0IHRleHQ6Jyxcblx0XHRyZXZkZWw6ICdIaWRkZW4gcmV2aXNpb24nLFxuXHRcdC8vIHVzZXItcmVsYXRlZCBhY3Rpb25zIGFuZCBpbmZvXG5cdFx0dXNlcjogJ3VzZXInLFxuXHRcdCd1c2VyJm5ic3A7cGFnZSc6ICd1c2VyJm5ic3A7cGFnZScsXG5cdFx0J3VzZXIgdGFsayc6ICd1c2VyIHRhbGsnLFxuXHRcdCdlZGl0IHVzZXIgdGFsayc6ICdlZGl0IHVzZXIgdGFsaycsXG5cdFx0J2xlYXZlIGNvbW1lbnQnOiAnbGVhdmUgY29tbWVudCcsXG5cdFx0ZW1haWw6ICdlbWFpbCcsXG5cdFx0J2VtYWlsIHVzZXInOiAnZW1haWwgdXNlcicsXG5cdFx0RW1haWx1c2VySGludDogJ1NlbmQgYW4gZW1haWwgdG8gJXMnLFxuXHRcdHNwYWNlOiAnc3BhY2UnLFxuXHRcdFByZWZpeEluZGV4SGludDogJ1Nob3cgcGFnZXMgaW4gdGhlIHVzZXJzcGFjZSBvZiAlcycsXG5cdFx0Y291bnQ6ICdjb3VudCcsXG5cdFx0J2VkaXQgY291bnRlcic6ICdlZGl0IGNvdW50ZXInLFxuXHRcdGVkaXRDb3VudGVyTGlua0hpbnQ6ICdDb3VudCB0aGUgY29udHJpYnV0aW9ucyBtYWRlIGJ5ICVzJyxcblx0XHRjb250cmliczogJ2NvbnRyaWJzJyxcblx0XHRjb250cmlidXRpb25zOiAnY29udHJpYnV0aW9ucycsXG5cdFx0ZGVsZXRlZENvbnRyaWJzOiAnZGVsZXRlZCBjb250cmlidXRpb25zJyxcblx0XHREZWxldGVkY29udHJpYnV0aW9uc0hpbnQ6ICdMaXN0IGRlbGV0ZWQgZWRpdHMgbWFkZSBieSAlcycsXG5cdFx0Q29udHJpYnV0aW9uc0hpbnQ6ICdMaXN0IHRoZSBjb250cmlidXRpb25zIG1hZGUgYnkgJXMnLFxuXHRcdGxvZzogJ2xvZycsXG5cdFx0J3VzZXIgbG9nJzogJ3VzZXIgbG9nJyxcblx0XHR1c2VyTG9nSGludDogXCJTaG93ICVzJ3MgdXNlciBsb2dcIixcblx0XHRhcmluOiAnQVJJTiBsb29rdXAnLFxuXHRcdCdMb29rIHVwICVzIGluIEFSSU4gd2hvaXMgZGF0YWJhc2UnOiAnTG9vayB1cCAlcyBpbiB0aGUgQVJJTiB3aG9pcyBkYXRhYmFzZScsXG5cdFx0dW5ibG9ja1Nob3J0OiAndW4nLFxuXHRcdGJsb2NrOiAnYmxvY2snLFxuXHRcdCdibG9jayB1c2VyJzogJ2Jsb2NrIHVzZXInLFxuXHRcdElwYmxvY2tsaXN0SGludDogJ1VuYmxvY2sgJXMnLFxuXHRcdEJsb2NraXBIaW50OiAnUHJldmVudCAlcyBmcm9tIGVkaXRpbmcnLFxuXHRcdCdibG9jayBsb2cnOiAnYmxvY2sgbG9nJyxcblx0XHRibG9ja0xvZ0hpbnQ6ICdTaG93IHRoZSBibG9jayBsb2cgZm9yICVzJyxcblx0XHRwcm90ZWN0TG9nSGludDogJ1Nob3cgdGhlIHByb3RlY3Rpb24gbG9nIGZvciAlcycsXG5cdFx0cGFnZUxvZ0hpbnQ6ICdTaG93IHRoZSBwYWdlIGxvZyBmb3IgJXMnLFxuXHRcdGRlbGV0ZUxvZ0hpbnQ6ICdTaG93IHRoZSBkZWxldGlvbiBsb2cgZm9yICVzJyxcblx0XHQnSW52YWxpZCAlcyAlcyc6ICdUaGUgb3B0aW9uICVzIGlzIGludmFsaWQ6ICVzJyxcblx0XHQnTm8gYmFja2xpbmtzIGZvdW5kJzogJ05vIGJhY2tsaW5rcyBmb3VuZCcsXG5cdFx0JyBhbmQgbW9yZSc6ICcgYW5kIG1vcmUnLFxuXHRcdHVuZG86ICd1bmRvJyxcblx0XHR1bmRvSGludDogJ3VuZG8gdGhpcyBlZGl0Jyxcblx0XHQnRG93bmxvYWQgcHJldmlldyBkYXRhJzogJ0Rvd25sb2FkIHByZXZpZXcgZGF0YScsXG5cdFx0J0ludmFsaWQgb3IgSVAgdXNlcic6ICdJbnZhbGlkIG9yIElQIHVzZXInLFxuXHRcdCdOb3QgYSByZWdpc3RlcmVkIHVzZXJuYW1lJzogJ05vdCBhIHJlZ2lzdGVyZWQgdXNlcm5hbWUnLFxuXHRcdEJMT0NLRUQ6ICdCTE9DS0VEJyxcblx0XHQnSGFzIGJsb2Nrcyc6ICdIYXMgYmxvY2tzJyxcblx0XHQnIGVkaXRzIHNpbmNlOiAnOiAnIGVkaXRzIHNpbmNlOiAnLFxuXHRcdCdsYXN0IGVkaXQgb24gJzogJ2xhc3QgZWRpdCBvbiAnLFxuXHRcdCdoZS9oaW0nOiAnaGUvaGltJyxcblx0XHQnc2hlL2hlcic6ICdzaGUvaGVyJyxcblx0XHQvLyBBdXRvZWRpdGluZ1xuXHRcdCdFbnRlciBhIG5vbi1lbXB0eSBlZGl0IHN1bW1hcnkgb3IgcHJlc3MgY2FuY2VsIHRvIGFib3J0Jzpcblx0XHRcdCdFbnRlciBhIG5vbi1lbXB0eSBlZGl0IHN1bW1hcnkgb3IgcHJlc3MgY2FuY2VsIHRvIGFib3J0Jyxcblx0XHQnRmFpbGVkIHRvIGdldCByZXZpc2lvbiBpbmZvcm1hdGlvbiwgcGxlYXNlIGVkaXQgbWFudWFsbHkuXFxuXFxuJzpcblx0XHRcdCdGYWlsZWQgdG8gZ2V0IHJldmlzaW9uIGluZm9ybWF0aW9uLCBwbGVhc2UgZWRpdCBtYW51YWxseS5cXG5cXG4nLFxuXHRcdCdUaGUgJXMgYnV0dG9uIGhhcyBiZWVuIGF1dG9tYXRpY2FsbHkgY2xpY2tlZC4gUGxlYXNlIHdhaXQgZm9yIHRoZSBuZXh0IHBhZ2UgdG8gbG9hZC4nOlxuXHRcdFx0J1RoZSAlcyBidXR0b24gaGFzIGJlZW4gYXV0b21hdGljYWxseSBjbGlja2VkLiBQbGVhc2Ugd2FpdCBmb3IgdGhlIG5leHQgcGFnZSB0byBsb2FkLicsXG5cdFx0J0NvdWxkIG5vdCBmaW5kIGJ1dHRvbiAlcy4gUGxlYXNlIGNoZWNrIHRoZSBzZXR0aW5ncyBpbiB5b3VyIGphdmFzY3JpcHQgZmlsZS4nOlxuXHRcdFx0J0NvdWxkIG5vdCBmaW5kIGJ1dHRvbiAlcy4gUGxlYXNlIGNoZWNrIHRoZSBzZXR0aW5ncyBpbiB5b3VyIGphdmFzY3JpcHQgZmlsZS4nLFxuXHRcdC8vIFBvcHVwcyBzZXR1cFxuXHRcdCdPcGVuIGZ1bGwtc2l6ZSBpbWFnZSc6ICdPcGVuIGZ1bGwtc2l6ZSBpbWFnZScsXG5cdFx0YXV0b2VkaXRfdmVyc2lvbjogJ25wMjAxNDA0MTYnLFxuXHR9O1xuXHRjb25zdCBwb3B1cFN0cmluZyA9IChzdHIpID0+IHtcblx0XHRpZiAobWVzc2FnZSAhPT0gdW5kZWZpbmVkICYmIG1lc3NhZ2UgJiYgbWVzc2FnZVtzdHJdKSB7XG5cdFx0XHRyZXR1cm4gbWVzc2FnZVtzdHJdO1xuXHRcdH1cblx0XHRpZiAocGcuc3RyaW5nW3N0cl0pIHtcblx0XHRcdHJldHVybiBwZy5zdHJpbmdbc3RyXTtcblx0XHR9XG5cdFx0cmV0dXJuIHN0cjtcblx0fTtcblx0Y29uc3QgdHByaW50ZiA9IChzdHIsIHN1YnMpID0+IHtcblx0XHRpZiAodHlwZW9mIHN1YnMgIT09IHR5cGVvZiBbXSkge1xuXHRcdFx0c3VicyA9IFtzdWJzXTtcblx0XHR9XG5cdFx0cmV0dXJuIHNpbXBsZVByaW50Zihwb3B1cFN0cmluZyhzdHIpLCBzdWJzKTtcblx0fTtcblx0Ly8gRU5ERklMRTogc3RyaW5ncy5qc1xuXHQvLyBTVEFSVEZJTEU6IHJ1bi5qc1xuXHQvLyBSdW4gdGhpbmdzXG5cdC8vIEZvciBzb21lIHJlYXNvbiBwb3B1cHMgcmVxdWlyZXMgYSBmdWxseSBsb2FkZWQgcGFnZSBqUXVlcnkucmVhZHkoLi4uKSBjYXVzZXMgcHJvYmxlbXMgZm9yIHNvbWUuXG5cdC8vIFRoZSBvbGQgYWRkT25sb2FkSG9vayBkaWQgc29tZXRoaW5nIHNpbWlsYXIgdG8gdGhlIGJlbG93XG5cdGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG5cdFx0YXV0b0VkaXQoKTtcblx0fSBlbHNlIHtcblx0XHQvLyB3aWxsIHNldHVwIHBvcHVwc1xuXHRcdCQod2luZG93KS5vbignbG9hZCcsIGF1dG9FZGl0KTtcblx0fVxuXHQvLyBTdXBwb3J0IGZvciBNZWRpYVdpa2kncyBsaXZlIHByZXZpZXcsIFZpc3VhbEVkaXRvcidzIHNhdmVzIGFuZCBFY2hvJ3MgZmx5b3V0LlxuXHQoKCkgPT4ge1xuXHRcdGxldCBvbmNlID0gdHJ1ZTtcblx0XHRjb25zdCBkeW5hbWljQ29udGVudEhhbmRsZXIgPSAoJGNvbnRlbnQpID0+IHtcblx0XHRcdC8vIFRyeSB0byBkZXRlY3QgdGhlIGhvb2sgZmlyZWQgb24gaW5pdGlhbCBwYWdlIGxvYWQgYW5kIGRpc3JlZ2FyZFxuXHRcdFx0Ly8gaXQsIHdlIGFscmVhZHkgaG9vayB0byBvbmxvYWQgKHBvc3NpYmx5IHRvIGRpZmZlcmVudCBwYXJ0cyBvZlxuXHRcdFx0Ly8gcGFnZSAtIGl0J3MgY29uZmlndXJhYmxlKSBhbmQgcnVubmluZyB0d2ljZSBtaWdodCBiZSBiYWQuIFVnbHkuLi5cblx0XHRcdGlmICgkY29udGVudC5hdHRyKCdpZCcpID09PSAnbXctY29udGVudC10ZXh0JyAmJiBvbmNlKSB7XG5cdFx0XHRcdG9uY2UgPSBmYWxzZTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcmVnaXN0ZXJIb29rc0ZvclZpc2libGVOYXZwb3BzID0gKCkgPT4ge1xuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgcGcuY3VycmVudC5saW5rcyAmJiBpIDwgcGcuY3VycmVudC5saW5rcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGNvbnN0IG5hdnBvcCA9IHBnLmN1cnJlbnQubGlua3NbaV0ubmF2cG9wdXA7XG5cdFx0XHRcdFx0aWYgKCFuYXZwb3AgfHwgIW5hdnBvcC5pc1Zpc2libGUoKSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdE5hdnBvcHVwLnRyYWNrZXIuYWRkSG9vayhwb3NDaGVja2VySG9vayhuYXZwb3ApKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdGNvbnN0IGRvSXQgPSAoKSA9PiB7XG5cdFx0XHRcdHJlZ2lzdGVySG9va3NGb3JWaXNpYmxlTmF2cG9wcygpO1xuXHRcdFx0XHQkY29udGVudC5lYWNoKChfaW5kZXgsIGVsZW1lbnQpID0+IHtcblx0XHRcdFx0XHRlbGVtZW50LnJhblNldHVwVG9vbHRpcHNBbHJlYWR5ID0gZmFsc2U7XG5cdFx0XHRcdFx0c2V0dXBUb29sdGlwcyhlbGVtZW50KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9O1xuXHRcdFx0c2V0dXBQb3B1cHMoZG9JdCk7XG5cdFx0fTtcblx0XHQvLyBUaGlzIGhvb2sgaXMgYWxzbyBmaXJlZCBhZnRlciBwYWdlIGxvYWQuXG5cdFx0bXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmFkZChkeW5hbWljQ29udGVudEhhbmRsZXIpO1xuXHRcdG13Lmhvb2soJ2V4dC5lY2hvLm92ZXJsYXkuYmVmb3JlU2hvd2luZ092ZXJsYXknKS5hZGQoKCRvdmVybGF5KSA9PiB7XG5cdFx0XHRkeW5hbWljQ29udGVudEhhbmRsZXIoJG92ZXJsYXkuZmluZCgnLm13LWVjaG8tc3RhdGUnKSk7XG5cdFx0fSk7XG5cdH0pKCk7XG5cdC8vIEVOREZJTEU6IHJ1bi5qc1xufTtcblxuZXhwb3J0IHtwb3B1cHN9O1xuIiwgImltcG9ydCAnLi9OYXZpZ2F0aW9uX3BvcHVwcy5sZXNzJztcbmltcG9ydCB7cG9wdXBzfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbiQocG9wdXBzKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QkFBU0csS0FBSyxDQUFDQyxRQUFRamtDLFlBQVk7QUFDbENBLGtCQUFRclQsMEJBQTBCO0FBQ2xDYix3QkFBY2tVLE9BQU87UUFDdEIsQ0FBQztNQUNGO0FBQ0E4QixrQkFBWWlpQyxJQUFJO0lBQ2pCO0FBRUF2aUMsT0FBRzB3QixLQUFLLGtCQUFrQixFQUFFZ1MsSUFBSU4scUJBQXFCO0FBQ3JEcGlDLE9BQUcwd0IsS0FBSyx1Q0FBdUMsRUFBRWdTLElBQUtDLGNBQWE7QUFDbEVQLDRCQUFzQk8sU0FBUzl1QixLQUFLLGdCQUFnQixDQUFDO0lBQ3RELENBQUM7RUFDRixHQUFHO0FBRUo7O0FDbCtQQUQsRUFBRXhxQixNQUFNOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImFwaSIsICJpbml0TXdBcGkiLCAibWVzc2FnZSIsICJhcnRpY2xlIiwgIndpbmRvdyIsICJ3Z1VMUyIsICJjYXRlZ29yeSIsICJjYXRlZ29yaWVzIiwgImltYWdlIiwgImltYWdlcyIsICJzdHViIiwgImtCIiwgImJ5dGVzIiwgImRheSIsICJkYXlzIiwgImhvdXIiLCAiaG91cnMiLCAibWludXRlIiwgIm1pbnV0ZXMiLCAic2Vjb25kIiwgInNlY29uZHMiLCAid2VlayIsICJ3ZWVrcyIsICJtb250aCIsICJtb250aHMiLCAieWVhciIsICJ5ZWFycyIsICJzZWFyY2giLCAiU2VhcmNoSGludCIsICJ3ZWIiLCAiZ2xvYmFsIiwgImFjdGlvbnMiLCAicG9wdXBzTWVudSIsICJ0b2dnbGVQcmV2aWV3c0hpbnQiLCAicmVzZXQiLCAiZGlzYWJsZSIsICJkaXNhYmxlUG9wdXBzSGludCIsICJwdXJnZVBvcHVwc0hpbnQiLCAiUG9wdXBzSGludCIsICJzcGFjZWJhciIsICJ2aWV3IiwgInZpZXdIaW50IiwgInRhbGsiLCAiZGVsIiwgImRlbGV0ZSIsICJkZWxldGVIaW50IiwgInVuZGVsZXRlU2hvcnQiLCAiVW5kZWxldGVIaW50IiwgInByb3RlY3QiLCAicHJvdGVjdEhpbnQiLCAidW5wcm90ZWN0U2hvcnQiLCAidW5wcm90ZWN0SGludCIsICJtb3ZlIiwgIk1vdmVwYWdlSGludCIsICJlZGl0IiwgImVkaXRIaW50IiwgIm5ldyIsICJuZXdTZWN0aW9uSGludCIsICJudWxsRWRpdEhpbnQiLCAiaGlzdCIsICJoaXN0b3J5IiwgImhpc3RvcnlIaW50IiwgImxhc3QiLCAibGFzdEVkaXQiLCAibGFzdENvbnRyaWIiLCAibGFzdENvbnRyaWJIaW50IiwgImN1ciIsICJkaWZmQ3VyIiwgIm9sZEVkaXQiLCAicHVyZ2UiLCAicHVyZ2VIaW50IiwgInJhdyIsICJyYXdIaW50IiwgInJlbmRlciIsICJyZW5kZXJIaW50IiwgInNpbmNlTWUiLCAic2luY2VNZUhpbnQiLCAiZWRzIiwgImVkaXRvcnMiLCAiZWRpdG9yTGlzdEhpbnQiLCAicmVsYXRlZCIsICJyZWxhdGVkQ2hhbmdlcyIsICJSZWNlbnRjaGFuZ2VzbGlua2VkSGludCIsICJlZGl0T2xkIiwgInJ2IiwgInJldmVydCIsICJyZXZlcnRIaW50IiwgInVuZG8iLCAidW5kb0hpbnQiLCAiZGVmYXVsdHBvcHVwUmVkbGlua1N1bW1hcnkiLCAiZGVmYXVsdHBvcHVwRml4RGFic1N1bW1hcnkiLCAiZGVmYXVsdHBvcHVwRml4UmVkaXJzU3VtbWFyeSIsICJkZWZhdWx0cG9wdXBFeHRlbmRlZFJldmVydFN1bW1hcnkiLCAiZGVmYXVsdHBvcHVwUmV2ZXJ0VG9QcmV2aW91c1N1bW1hcnkiLCAiZGVmYXVsdHBvcHVwUmV2ZXJ0U3VtbWFyeSIsICJkZWZhdWx0cG9wdXBRdWVyaWVkUmV2ZXJ0VG9QcmV2aW91c1N1bW1hcnkiLCAiZGVmYXVsdHBvcHVwUXVlcmllZFJldmVydFN1bW1hcnkiLCAiZGVmYXVsdHBvcHVwUm1EYWJMaW5rU3VtbWFyeSIsICJSZWRpcmVjdHMiLCAiZGlzYW1iaWciLCAiZGlzYW1iaWdIaW50IiwgIm1haW5saW5rIiwgIndpa2lMaW5rIiwgIndpa2lMaW5rcyIsICJ3aGF0TGlua3NIZXJlIiwgIldoYXRsaW5rc2hlcmVIaW50IiwgInVud2F0Y2hTaG9ydCIsICJ3YXRjaFRoaW5neSIsICJ3YXRjaEhpbnQiLCAidW53YXRjaEhpbnQiLCAicnNzIiwgInVzZXIiLCAiZW1haWwiLCAiRW1haWx1c2VySGludCIsICJzcGFjZSIsICJQcmVmaXhpbmRleEhpbnQiLCAiY291bnQiLCAia2F0ZWxpbmtIaW50IiwgImNvbnRyaWJzIiwgImNvbnRyaWJ1dGlvbnMiLCAiZGVsZXRlZENvbnRyaWJzIiwgIkNvbnRyaWJ1dGlvbnNIaW50IiwgInRyZWUiLCAiY29udHJpYnNUcmVlSGludCIsICJsb2ciLCAidXNlckxvZ0hpbnQiLCAidW5ibG9ja1Nob3J0IiwgImJsb2NrIiwgIklwYmxvY2tsaXN0SGludCIsICJCbG9ja2lwSGludCIsICJibG9ja0xvZ0hpbnQiLCAicHJvdGVjdExvZ0hpbnQiLCAicGFnZUxvZ0hpbnQiLCAiZGVsZXRlTG9nSGludCIsICJtIiwgImJpbmdTZWFyY2hIaW50IiwgImhpc3RvcnlmZWVkSGludCIsICJUaGFua3NIaW50IiwgIm1hcmtwYXRyb2xsZWRIaW50IiwgImRlZmF1bHRwb3B1cFJldmlld2VkU3VtbWFyeSIsICJyZXZkZWwiLCAiRGVsZXRlZGNvbnRyaWJ1dGlvbnNIaW50IiwgIkJMT0NLRUQiLCAiRW1haWxVc2VySGludCIsICJSQU5HRUJMT0NLRUQiLCAiSElEREVOIiwgIkxPQ0tFRCIsICJkaWZmIiwgImF1dG9lZGl0X3ZlcnNpb24iLCAiUHJlZml4SW5kZXhIaW50IiwgIm51bGxFZGl0U3VtbWFyeSIsICJzZXBhcmF0b3IiLCAiY29tbWEiLCAicG9wdXBzIiwgInBnIiwgInJlIiwgIm5zIiwgInN0cmluZyIsICJ3aWtpIiwgIm1pc2MiLCAib3B0aW9uIiwgIm9wdGlvbkRlZmF1bHQiLCAiZmxhZyIsICJjYWNoZSIsICJzdHJ1Y3R1cmVzIiwgInRpbWVyIiwgImNvdW50ZXIiLCAiY3VycmVudCIsICJmbiIsICJlbmRvZmxpc3QiLCAiSFRNTEVsZW1lbnQiLCAic2V0dXBUb29sdGlwcyIsICJjb250YWluZXIiLCAicmVtb3ZlIiwgImZvcmNlIiwgInBvcERhdGEiLCAiY29uY2F0IiwgImdldFZhbHVlT2YiLCAiZG9jdW1lbnQiLCAiZWRpdGZvcm0iLCAid3BUZXh0Ym94MSIsICJvbm1vdXNldXAiLCAiZG9TZWxlY3Rpb25Qb3B1cCIsICJkZWZhdWx0UG9wdXBzQ29udGFpbmVyIiwgInJhblNldHVwVG9vbHRpcHNBbHJlYWR5IiwgImFuY2hvcnMiLCAicXVlcnlTZWxlY3RvckFsbCIsICJzZXR1cFRvb2x0aXBzTG9vcCIsICJxdWVyeVNlbGVjdG9yIiwgInNldHVwVG9vbHRpcHNMb29wMiIsICJiZWdpbiIsICJob3dtYW55IiwgInNsZWVwIiwgImFyZ3MiLCAic2ltcGxlUHJpbnRmIiwgImZpbmlzaCIsICJsb29wZW5kIiwgIk1hdGgiLCAibWluIiwgImxlbmd0aCIsICJqIiwgImRvVG9vbHRpcCIsICJyZW1vdmVUb29sdGlwIiwgImFkZFRvb2x0aXAiLCAiYSIsICJocmVmIiwgInNldFRpbWVvdXQiLCAicm1Ub2NUb29sdGlwcyIsICJmaW5pc2hlZExvYWRpbmciLCAidG9jIiwgInRvY0xpbmtzIiwgInRvY0xlbiIsICJpc1BvcHVwTGluayIsICJvbm1vdXNlb3ZlciIsICJtb3VzZU92ZXJXaWtpTGluayIsICJvbm1vdXNlb3V0IiwgIm1vdXNlT3V0V2lraUxpbmsiLCAib25tb3VzZWRvd24iLCAia2lsbFBvcHVwIiwgImhhc1BvcHVwIiwgIm9yaWdpbmFsVGl0bGUiLCAidGl0bGUiLCAicmVtb3ZlVGl0bGUiLCAicmVzdG9yZVRpdGxlIiwgInJlZ2lzdGVySG9va3MiLCAibnAiLCAicG9wdXBNYXhXaWR0aCIsICJzZXRNYXhXaWR0aCIsICJtYWluRGl2IiwgInN0eWxlIiwgIm1heFdpZHRoIiwgImFkZEhvb2siLCAiYWRkUG9wdXBTaG9ydGN1dHMiLCAicm1Qb3B1cFNob3J0Y3V0cyIsICJyZW1vdmVNb2RpZmllcktleUxpc3RlbmVyIiwgInJlbW92ZUV2ZW50TGlzdGVuZXIiLCAibW9kaWZpZXJLZXlMaXN0ZW5lciIsICJtb3VzZU92ZXJXaWtpTGluazMiLCAiZXZ0IiwgImV2ZW50IiwgImFjdGlvbiIsICJrZXkiLCAic2VsZiIsICJldnQyIiwgIm1vdXNlT3Zlcldpa2lMaW5rMiIsICJhZGRFdmVudExpc3RlbmVyIiwgImZvb3Rub3RlVGFyZ2V0IiwgImFUaXRsZSIsICJUaXRsZSIsICJmcm9tQW5jaG9yIiwgImFuY2giLCAiYW5jaG9yIiwgInRlc3QiLCAibFRpdGxlIiwgImZyb21VUkwiLCAibG9jYXRpb24iLCAidG9TdHJpbmciLCAiZWwiLCAibm9kZU5hbWUiLCAibnQiLCAidG9Mb3dlckNhc2UiLCAicGFyZW50Tm9kZSIsICJmb290bm90ZVByZXZpZXciLCAieCIsICJuYXZwb3AiLCAic2V0UG9wdXBIVE1MIiwgImlubmVySFRNTCIsICJpZE51bWJlciIsICJtb2RpZmllclByZXNzZWQiLCAibW9kIiwgImlzQ29ycmVjdE1vZGlmaWVyIiwgIl9hIiwgImxpbmsiLCAibmF2cG9wdXAiLCAiaXNWaXNpYmxlIiwgInBvcHVwU3RydWN0dXJlIiwgInNldERlZmF1bHQiLCAibmV3TmF2cG9wdXAiLCAibGlua3NIYXNoIiwgImxpbmtzIiwgInB1c2giLCAicGVuZGluZyIsICJzaW1wbGVQb3B1cENvbnRlbnQiLCAic2hvd1Nvb25JZlN0YWJsZSIsICJkZWxheSIsICJjbGVhckludGVydmFsIiwgImNoZWNrUG9wdXBQb3NpdGlvbiIsICJzZXRJbnRlcnZhbCIsICJzaW1wbGVOb01vcmUiLCAiZCIsICJjcmVhdGVFbGVtZW50IiwgImNsYXNzTmFtZSIsICJzIiwgImFwcGVuZCIsICJkaXNwbGF5IiwgIm5vbnNpbXBsZVBvcHVwQ29udGVudCIsICJwb3B1cFN0cmluZyIsICJoYXNQb3B1cE1lbnUiLCAic2V0SW5uZXJIVE1MIiwgInBvcHVwSFRNTCIsICJmaWxsRW1wdHlTcGFucyIsICJkcmFnSGFuZGxlIiwgIm1ha2VEcmFnZ2FibGUiLCAicG9wdXBSZWRsaW5rSFRNTCIsICJkZWJ1Z0RhdGEiLCAiTmF2cG9wdXAiLCAiZnV6eiIsICJwYXJlbnRBbmNob3IiLCAicGFyZW50UG9wdXAiLCAib3duZXIiLCAic2hvdWxkU2hvd05vblNpbXBsZSIsICJzaG91bGRTaG93IiwgImRpZmYyIiwgInBhcmFtcyIsICJwYXJzZVBhcmFtcyIsICJvbGRpZCIsICJyZWZlcmVuY2VFbGVtZW50IiwgImxvYWREaWZmIiwgImxvYWRBUElQcmV2aWV3IiwgImJhY2tsaW5rcyIsICJuYW1lc3BhY2VJZCIsICJuc0ltYWdlSWQiLCAiYW5jaG9yQ29udGFpbnNJbWFnZSIsICJsb2FkSW1hZ2UiLCAibnNDYXRlZ29yeUlkIiwgIm5zVXNlcklkIiwgIm5zVXNlcnRhbGtJZCIsICJzdGFydEFydGljbGVQcmV2aWV3IiwgInBlbmRpbmdOYXZwb3BUYXNrIiwgImNvbXBsZXRlZE5hdnBvcFRhc2siLCAicmVkaXIiLCAibG9hZFByZXZpZXciLCAib3JpZ2luYWxBcnRpY2xlIiwgImxvYWRQcmV2aWV3RnJvbVJlZGlyIiwgInJlZGlyTWF0Y2giLCAidGFyZ2V0IiwgImZyb21XaWtpVGV4dCIsICJyZWRpclRhcmdldCIsICJ3YXJuUmVkaXIiLCAicmVkaXJMaW5rIiwgImluc2VydFByZXZpZXciLCAiZG93bmxvYWQiLCAicmVkaXJlY3QiLCAiZXhlYyIsICJkYXRhIiwgInZpc2libGUiLCAiaW5zZXJ0UHJldmlld05vdyIsICJpZCIsICJ3aWtpVGV4dCIsICJhcnQiLCAibWFrZUZpeERhYnMiLCAiZ2V0UGFnZUluZm8iLCAic2V0UG9wdXBUcmFpbGVyIiwgImltYWdlUGFnZSIsICJnZXRWYWxpZEltYWdlRnJvbVdpa2lUZXh0IiwgImluc2VydEFydGljbGVQcmV2aWV3IiwgIm5zVGVtcGxhdGVJZCIsICJoIiwgImVudGlmeSIsICJzcGxpdCIsICJTdHJpbmciLCAiX3RlbXBsYXRlT2JqZWN0IiwgIl90YWdnZWRUZW1wbGF0ZUxpdGVyYWwiLCAiam9pbiIsICJfdGVtcGxhdGVPYmplY3QyIiwgInAiLCAicHJlcFByZXZpZXdtYWtlciIsICJzaG93UHJldmlldyIsICJhbmNob3JpemUiLCAiYW5jaG9yU3RyaW5nIiwgInVybEJhc2UiLCAiam9pblBhdGgiLCAiYXJ0aWNsZWJhc2UiLCAidXJsU3RyaW5nIiwgIlByZXZpZXdtYWtlciIsICJhbmNoUmUiLCAiUmVnRXhwIiwgImxpdGVyYWxpemVSZWdleCIsICJyZXBsYWNlIiwgIm1hdGNoIiwgInNsaWNlIiwgIm1heCIsICJpbmRleE9mIiwgImxpbmVzIiwgImkiLCAia2lsbFBvcHVwMiIsICJiYW5pc2giLCAiYWJvcnRBbGxEb3dubG9hZHMiLCAiRHJhZyIsICJjb25zdHJ1Y3RvciIsICJzdGFydENvbmRpdGlvbiIsICJlbmRIb29rIiwgImZpeEUiLCAiZSIsICJsYXllclgiLCAib2Zmc2V0WCIsICJsYXllclkiLCAib2Zmc2V0WSIsICJpbml0IiwgIm8iLCAib1Jvb3QiLCAib2JqIiwgInN0YXJ0IiwgImRyYWdnaW5nIiwgInBvcHVwc19kcmFnZ2FibGUiLCAiaG1vZGUiLCAidm1vZGUiLCAicm9vdCIsICJOdW1iZXIiLCAiaXNOYU4iLCAicGFyc2VJbnQiLCAibGVmdCIsICJ0b3AiLCAib250aGlzU3RhcnQiLCAib250aGlzRW5kIiwgIm9udGhpcyIsICJ5IiwgImJvdHRvbSIsICJyaWdodCIsICJsYXN0TW91c2VYIiwgImNsaWVudFgiLCAibGFzdE1vdXNlWSIsICJjbGllbnRZIiwgIm9ubW91c2Vtb3ZlRGVmYXVsdCIsICJvbm1vdXNlbW92ZSIsICJlMiIsICJkcmFnIiwgImVuZCIsICJleSIsICJleCIsICJueCIsICJueSIsICJvcmlnaW5hbCIsICJwb3B1cExheW91dCIsICJwb3B1cFJlZGlyU3BhbnMiLCAicG9wdXBUaXRsZSIsICJuYXZsaW5rU3RyaW5nVG9IVE1MIiwgInBvcHVwVG9wTGlua3MiLCAibmF2TGlua3NIVE1MIiwgImhpbnQiLCAicG9wdXBJbWFnZSIsICJpbWFnZUhUTUwiLCAicG9wdXBSZWRpclRpdGxlIiwgInBvcHVwUmVkaXJUb3BMaW5rcyIsICJjb3B5U3RydWN0dXJlIiwgIm9sZFN0cnVjdHVyZSIsICJuZXdTdHJ1Y3R1cmUiLCAicHJvcCIsICJPYmplY3QiLCAiaGFzT3duIiwgIm5vc3RhbGdpYSIsICJzdHIiLCAiZWRpdHN0ciIsICJlZGl0T2xkaWRTdHIiLCAiaGlzdG9yeXN0ciIsICJ3YXRjaHN0ciIsICJmYW5jeSIsICJ3YXRjaCIsICJwb3B1cE90aGVyTGlua3MiLCAiYWRtaW4iLCAibm9ybWFsIiwgInBvcHVwUmVkaXJPdGhlckxpbmtzIiwgImZhbmN5MiIsICJtZW51cyIsICJzaG9ydGVyIiwgImRyb3BkaXYiLCAiZW5kZGl2IiwgImxhc3RlZGl0IiwgInRoYW5rIiwgImpzSGlzdG9yeSIsICJsaW5rc2hlcmUiLCAibnVsbFB1cmdlIiwgInZpZXdPcHRpb25zIiwgImVkaXRSb3ciLCAibWFya1BhdHJvbGxlZCIsICJuZXdUb3BpYyIsICJwcm90ZWN0RGVsZXRlIiwgIm1lbnVUaXRsZSIsICJzaG9ydG1lbnVzIiwgImxpdGUiLCAic3Vic3RpdHV0ZSIsICJjbWRCb2R5IiwgImZyb21SZSIsICJmcm9tIiwgImZsYWdzIiwgInRvIiwgImV4ZWNDbWRzIiwgImNtZExpc3QiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgIm4iLCAiZG9uZSIsICJlbGVtZW50IiwgInZhbHVlIiwgImVyciIsICJmIiwgInBhcnNlQ21kIiwgInBhcnNlQ21kMiIsICJjaGFyQXQiLCAicGFyc2VTdWJzdGl0dXRlIiwgInJlbWFpbmRlciIsICJ1bkVzY2FwZSIsICJzZXAiLCAiX3RlbXBsYXRlT2JqZWN0MyIsICJ0bXAiLCAic2tpcE92ZXIiLCAic2VnbWVudCIsICJza2lwVG9FbmQiLCAiZW5kU2VnbWVudCIsICJmaW5kTmV4dCIsICJfc2VwIiwgImNoIiwgInNldENoZWNrYm94IiwgInBhcmFtIiwgImJveCIsICJ2YWwiLCAibXciLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgImNoZWNrZWQiLCAiYXV0b0VkaXQiLCAiYXV0b0VkaXQ0IiwgInNldHVwUG9wdXBzIiwgImF1dG9DbGlja1Rva2VuIiwgIm1vZGlmeVdhdGNobGlzdCIsICJhbHJlYWR5UmFuIiwgImNtZFN0cmluZyIsICJlZGl0Ym94IiwgImlucHV0IiwgIm91dHB1dCIsICJ3cE1pbm9yZWRpdCIsICJ3cFdhdGNodGhpcyIsICJydmlkIiwgInVybCIsICJhcGl3aWtpYmFzZSIsICJzdGFydERvd25sb2FkIiwgImF1dG9FZGl0MiIsICJzdW1tYXJ5IiwgInN1bW1hcnlwcm9tcHQiLCAic3VtbWFyeW5vdGljZSIsICJnZXRSdlN1bW1hcnkiLCAidHh0IiwgInJlc3BvbnNlIiwgInByb21wdCIsICJ3cFN1bW1hcnkiLCAiYXV0b0VkaXQzIiwgInNlc3Npb25JZCIsICJidG4iLCAiYnV0dG9uIiwgIm1zZyIsICJ0cHJpbnRmIiwgImJhbm5lck1lc3NhZ2UiLCAiY2xpY2siLCAibm90aWZ5IiwgInRhZyIsICJ0eXBlIiwgImhlYWRpbmdzIiwgImRpdiIsICJlc2NhcGVRdW90ZXNIVE1MIiwgImluc2VydEJlZm9yZSIsICJ0ZW1wbGF0ZSIsICJqc29uIiwgImdldEpzT2JqIiwgImFueUNoaWxkIiwgInF1ZXJ5IiwgInBhZ2VzIiwgInJldmlzaW9ucyIsICJ0aW1lc3RhbXAiLCAicmV2aWQiLCAidXNlcmhpZGRlbiIsICJEb3dubG9hZGVyIiwgIlhNTEh0dHBSZXF1ZXN0IiwgImh0dHAiLCAibGFzdE1vZGlmaWVkIiwgImNhbGxiYWNrRnVuY3Rpb24iLCAib25GYWlsdXJlIiwgImFib3J0ZWQiLCAibWV0aG9kIiwgImFzeW5jIiwgInNlbmQiLCAiYWJvcnQiLCAiZ2V0RGF0YSIsICJyZXNwb25zZVRleHQiLCAic2V0VGFyZ2V0IiwgIm9wZW4iLCAic2V0UmVxdWVzdEhlYWRlciIsICJ1c2VyQWdlbnQiLCAiZ2V0UmVhZHlTdGF0ZSIsICJyZWFkeVN0YXRlIiwgImRvd25sb2Fkc0luUHJvZ3Jlc3MiLCAiZ2V0TGFzdE1vZGlmaWVkRGF0ZSIsICJsYXN0bW9kIiwgImdldFJlc3BvbnNlSGVhZGVyIiwgIkRhdGUiLCAic2V0Q2FsbGJhY2siLCAib25yZWFkeXN0YXRlY2hhbmdlIiwgImdldFN0YXR1cyIsICJzdGF0dXMiLCAibmV3RG93bmxvYWQiLCAibmV3RG93bmxvYWQyIiwgImNhbGxiYWNrIiwgIm9uZmFpbHVyZSIsICJmYWtlRG93bmxvYWQiLCAiSW5zdGEiLCAic2V0dXBMaXZlUHJldmlldyIsICJfSW5zdGEkY29uZiR1c2VyIiwgIl9iIiwgImNvbmYiLCAiYmFzZVVybCIsICJsYW5nIiwgImludGVyd2lraSIsICJkZWZhdWx0X3RodW1iX3dpZHRoIiwgInBhdGhzIiwgImFydGljbGVzIiwgImFydGljbGVQYXRoIiwgIm1hdGgiLCAiaW1hZ2VzX2ZhbGxiYWNrIiwgImxvY2FsZSIsICJjb25maWciLCAiZ2V0IiwgIm5hbWUiLCAic2lnbmF0dXJlIiwgIkJMT0NLX0lNQUdFIiwgImR1bXAiLCAiY29udmVydCIsICJsbCIsICJyIiwgInJlbWFpbiIsICJzaCIsICJzaGlmdCIsICJwcyIsICJmMiIsICJmMyIsICJvMiIsICJjIiwgInAyIiwgImh0bWxfZW50aXRpZXMiLCAiaHRtbGVzY2FwZV90ZXh0IiwgImh0bWxlc2NhcGVfYXR0ciIsICJzdHJfaW1hdGNoIiwgImIiLCAibCIsICJjb21wYXJlTGluZVN0cmluZ09yUmVnIiwgImNvbXBhcmVMaW5lU3RyaW5nIiwgImNoYXJBdFBvaW50IiwgImVuZGwiLCAicGFyc2VfbGlzdCIsICJwcmV2IiwgImxfbWF0Y2giLCAiaXBvcyIsICJwcmV2UG9zIiwgInBpIiwgIm1hdGNoUG9zIiwgImxpIiwgImF0IiwgInBhcnNlX2lubGluZV9ub3dpa2kiLCAiZHRfbWF0Y2giLCAidW5zaGlmdCIsICJwYXJzZV90YWJsZSIsICJwYXJzZV90YWJsZV9kYXRhIiwgInRkX2xpbmUiLCAibWF0Y2hfaSIsICJ0ZF9tYXRjaCIsICJwb3AiLCAidGMiLCAidGQiLCAicGFyc2VfcHJlIiwgInBhcnNlX2Jsb2NrX2ltYWdlIiwgInBhcnNlX2ltYWdlIiwgInN1YnN0cmluZyIsICJ3aWR0aCIsICJhdHRyIiwgImZpbGVuYW1lIiwgImNhcHRpb24iLCAidGh1bWIiLCAiZnJhbWUiLCAiY2VudGVyIiwgImFsaWduIiwgIm5lc3RpbmciLCAibGFzdF9hdHRyIiwgIndfbWF0Y2giLCAibGFzdGVuZCIsICJzdWJzdGFydCIsICJuZXN0bGV2IiwgImNsb3NlIiwgInN1Ymxvb3AiLCAiaHRtbCIsICJwYXJzZV9pbmxpbmVfd2lraSIsICJwYXJzZV9pbmxpbmVfaW1hZ2VzIiwgImxvb3AiLCAid2lraTIiLCAicGFyc2VfaW5saW5lX2Zvcm1hdHRpbmciLCAiZW0iLCAic3QiLCAiZGF0ZSIsICJnZXRVVENNaW51dGVzIiwgImdldFVUQ0hvdXJzIiwgImdldFVUQ0RhdGUiLCAiZ2V0VVRDTW9udGgiLCAiZ2V0VVRDRnVsbFllYXIiLCAiXyQwIiwgIiQxIiwgIiQyIiwgIiQzIiwgIiQ0IiwgIndpa2kyaHRtbCIsICJiYXNldXJsIiwgInBvcHVwRmlsdGVyUGFnZVNpemUiLCAiZm9ybWF0Qnl0ZXMiLCAicG9wdXBGaWx0ZXJDb3VudExpbmtzIiwgIm51bSIsICJjb3VudExpbmtzIiwgInBvcHVwRmlsdGVyQ291bnRJbWFnZXMiLCAiY291bnRJbWFnZXMiLCAicG9wdXBGaWx0ZXJDb3VudENhdGVnb3JpZXMiLCAiY291bnRDYXRlZ29yaWVzIiwgInBvcHVwRmlsdGVyTGFzdE1vZGlmaWVkIiwgIl9kYXRhIiwgIm5vdyIsICJhZ2UiLCAiZm9ybWF0QWdlIiwgImFhIiwgInNlY2xlbiIsICJtaW5sZW4iLCAiaG91cmxlbiIsICJkYXlsZW4iLCAid2Vla2xlbiIsICJudW13ZWVrcyIsICJzd2Vla3MiLCAiYWRkdW5pdCIsICJudW1kYXlzIiwgInNkYXlzIiwgIm51bWhvdXJzIiwgInNob3VycyIsICJudW1taW5zIiwgInNtaW5zIiwgIm51bXNlY3MiLCAic3NlY3MiLCAicnVuUG9wdXBGaWx0ZXJzIiwgImxpc3QiLCAicmV0IiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgInBvcHVwRmlsdGVycyIsICJleHRyYVBvcHVwRmlsdGVycyIsICJwYWdlSW5mb0FycmF5IiwgInBhZ2VJbmZvIiwgInVwY2FzZUZpcnN0IiwgImltYWdlQnJhY2tldENvdW50IiwgImNhdGVnb3J5QnJhY2tldENvdW50IiwgInBvcHVwRmlsdGVyU3R1YkRldGVjdCIsICJfZG93bmxvYWQiLCAiY291bnRzIiwgInN0dWJDb3VudCIsICJyZWFsIiwgInNlY3QiLCAicG9wdXBGaWx0ZXJEaXNhbWJpZ0RldGVjdCIsICJuYW1lc3BhY2UiLCAiaXNEaXNhbWJpZyIsICJyb3VuZCIsICJTdHJpbmd3cmFwcGVyIiwgIlN0cmluZ3dyYXBwZXIyIiwgInNldFV0ZiIsICJvbWl0QW5jaG9yIiwgImxlbiIsICJkZWNvZGVVUklDb21wb25lbnQiLCAidXJsQW5jaG9yIiwgImFuY2hvckZyb21VdGYiLCAiZW5jb2RlVVJJQ29tcG9uZW50IiwgInNwbGl0dGVkIiwgInUiLCAiZGVjb2RlTmFzdGllcyIsICJzdHJpcE5hbWVzcGFjZSIsICJzcGVjaWFsZGlmZiIsICJuc1NwZWNpYWxJZCIsICJtYWluIiwgImZyb21Cb3RJbnRlcmZhY2UiLCAiZXh0cmFjdGVkIiwgImlzU2FmYXJpIiwgInVuZXNjYXBlIiwgImRlY29kZVVSSSIsICJkZWNvZGVFc2NhcGVzIiwgIm15RGVjb2RlVVJJIiwgImhpbnRWYWx1ZSIsICJzYWZlRGVjb2RlVVJJIiwgInRvVXNlck5hbWUiLCAid2l0aE5zIiwgInVzZXJOYW1lIiwgInQiLCAidG9UYWxrUGFnZSIsICJsb2NhbGl6ZWROYW1lc3BhY2UiLCAidGFsa1BhZ2UiLCAiaXNUYWxrUGFnZSIsICJ0b0FydGljbGVGcm9tVGFsa1BhZ2UiLCAiYXJ0aWNsZUZyb21UYWxrUGFnZSIsICJhcnRpY2xlRnJvbVRhbGtPckFydGljbGUiLCAiaXNJcFVzZXIiLCAiaXBVc2VyIiwgIm5zTWFpbnNwYWNlSWQiLCAic2V0VXJsIiwgInVybGZyYWciLCAidiIsICJrZWVwU3BhY2VzIiwgImVuY29kZVVSSSIsICJyZW1vdmVBbmNob3IiLCAidG9VcmwiLCAidGl0bGViYXNlIiwgInNwZWNpYWxEaWZmIiwgImluY2x1ZGVzIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgInoiLCAiaGVscGVyIiwgImRlY29kZUV4dHJhcyIsICJzZWN0U3R1YiIsICJyZWFsU3R1YiIsICJpc1ZhbGlkSW1hZ2VOYW1lIiwgImlzSW5TdHJpcHBhYmxlTmFtZXNwYWNlIiwgImlzSW5NYWluTmFtZXNwYWNlIiwgImtpZHMiLCAiY2hpbGROb2RlcyIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJraWQiLCAibWFya05vcG9wdXBTcGFuTGlua3MiLCAiaW5Ob3BvcHVwU3BhbiIsICJnZXRBdHRyaWJ1dGUiLCAiYmFzZW5hbWVzIiwgInVybE5vUG9wdXAiLCAibWFya05vcG9wdXBTcGFuTGlua3MyIiwgImZpeFZlY3Rvck1lbnVQb3B1cHMiLCAiJGJvZHkiLCAiJCIsICJmaW5kIiwgInRvQXJyYXkiLCAiX2l0ZXJhdG9yNSIsICJfc3RlcDUiLCAiYXMiLCAiX2l0ZXJhdG9yNiIsICJfc3RlcDYiLCAiZ2V0UGFnZVdpdGhDYWNoaW5nIiwgIm9uQ29tcGxldGUiLCAiZmluZEluUGFnZUNhY2hlIiwgImdldFBhZ2UiLCAiYWRkRG93bmxvYWQiLCAiYWRkUGFnZVRvQ2FjaGUiLCAicGFnZSIsICJqc29uX3JldCIsICJKU09OIiwgInBhcnNlIiwgIndhcm5pbmdzIiwgInciLCAiZXJyb3IiLCAiZXJybG9nIiwgImNvZGUiLCAiaW5mbyIsICJ0b1VwcGVyQ2FzZSIsICJmaW5kSW5BcnJheSIsICJhcnIiLCAiZm9vIiwgIm5leHRPbmUiLCAiYXJyYXkiLCAiZXNjYXBlUmVnRXhwIiwgInByb3RvdHlwZSIsICJyZW1vdmVOdWxscyIsICJmaWx0ZXIiLCAic3VicyIsICJjbWQiLCAiaXNTdHJpbmciLCAiaXNOdW1iZXIiLCAiaXNSZWdFeHAiLCAiaXNBcnJheSIsICJBcnJheSIsICJpc09iamVjdCIsICJpc0Z1bmN0aW9uIiwgIkZ1bmN0aW9uIiwgInJlcGVhdFN0cmluZyIsICJtdWx0IiwgInplcm9GaWxsIiwgIm1hcCIsICJtYXBfYXJyYXkiLCAibWFwX29iamVjdCIsICJfaXRlcmF0b3I3IiwgIl9zdGVwNyIsICJ0ZXh0IiwgInVuZXNjYXBlUXVvdGVzSFRNTCIsICJyZXRhcmdldERhYiIsICJuZXdUYXJnZXQiLCAib2xkVGFyZ2V0IiwgImZyaWVuZGx5Q3VycmVudEFydGljbGVOYW1lIiwgInRpdGxlVG9FZGl0IiwgImNoYW5nZUxpbmtUYXJnZXRMaW5rIiwgImNsaWNrQnV0dG9uIiwgIm1pbm9yIiwgImxpc3RMaW5rcyIsICJ3aWtpdGV4dCIsICJyZWciLCAib21pdFJlZ2V4IiwgIndpa1BvcyIsICJybUR1cGVzRnJvbVNvcnRlZExpc3QiLCAic29ydCIsICJ3aWtUYXJnZXQiLCAibWV0aCIsICJfaXRlcmF0b3I4IiwgIl9zdGVwOCIsICJtYWtlRml4RGFiIiwgInNldFBvcHVwSFRNTDIiLCAiZWxlbWVudElkIiwgInBvcHVwSWQiLCAib25TdWNjZXNzIiwgInBvcHVwRWxlbWVudCIsICJyY2lkIiwgInN0cnVjdHVyZSIsICJzcGFucyIsICJmbGF0dGVuIiwgImxheW91dCIsICJudW1zcGFucyIsICJyZWRpcnMiLCAicmVkaXJTcGFucyIsICJmb3VuZCIsICJzdHJ1Y3R1cmVmbiIsICJzZXRmbiIsICJzZXRQb3B1cFRpcHNBbmRIVE1MIiwgImZsYXR0ZW4yIiwgInBvcHVwSFRNTDIiLCAibWFrZUVtcHR5U3BhbnMiLCAibWFrZUVtcHR5U3BhbnMyIiwgIl9pdGVyYXRvcjkiLCAiX3N0ZXA5IiwgImVtcHR5U3BhbkhUTUwiLCAibm9kZVR5cGUiLCAiZW1wdHlTcGFuSFRNTDIiLCAiY2xhc3NuYW1lIiwgImNsYXNzQWxpYXNlcyIsICJwb3B1cFNlY29uZFByZXZpZXciLCAiX2FydGljbGUiLCAicG9wVGlwc1Nvb25GbiIsICJ3aGVuIiwgInBvcFRpcHMiLCAiZGl2bmFtZSIsICJpZG51bWJlciIsICJmdXp6eUN1cnNvck9mZk1lbnVzIiwgIl94IiwgIl95IiwgIl9mdXp6IiwgInBhcmVudCIsICJ1bHMiLCAiX2l0ZXJhdG9yMCIsICJfc3RlcDAiLCAidWwiLCAib2Zmc2V0V2lkdGgiLCAibGltaXRIb3Jpem9udGFsUG9zaXRpb24iLCAibW91c2VPdXRXaWtpTGluazIiLCAidHJhY2tlciIsICJwb3NDaGVja2VySG9vayIsICJkaXJ0eSIsICJtb3VzZU92ZXJOYXZwb3AiLCAiaXNXaXRoaW4iLCAibW91c2VMZWF2aW5nVGltZSIsICJydW5TdG9wUG9wdXBUaW1lciIsICJzdG9wUG9wdXBUaW1lciIsICJvcmlnaW5hbERhdGEiLCAibWF4Q2hhcmFjdGVycyIsICJtYXhTZW50ZW5jZXMiLCAic2V0RGF0YSIsICJtYXhTaXplIiwgImtpbGxDb21tZW50cyIsICJraWxsRGl2cyIsICJraWxsR2FsbGVyaWVzIiwgImtpbGwiLCAib3BlbmluZyIsICJjbG9zaW5nIiwgInN1Ym9wZW5pbmciLCAic3ViY2xvc2luZyIsICJyZXBsIiwgIm9sZGsiLCAiayIsICJraWxsU3R1ZmYiLCAib3AiLCAibWFrZVJlZ2V4cCIsICJjbCIsICJzYiIsICJzYyIsICJvcFJlc3VsdCIsICJpbmRleCIsICJkZXB0aCIsICJyZW1vdmFsIiwgInByZWZpeCIsICJzdWZmaXgiLCAicmVTdHIiLCAic3AiLCAia2lsbEJveFRlbXBsYXRlcyIsICJraWxsVGVtcGxhdGVzIiwgImtpbGxUYWJsZXMiLCAia2lsbEltYWdlcyIsICJmb3JiaWRkZW5OYW1lc3BhY2VBbGlhc2VzIiwgIl9pIiwgIl9PYmplY3QkZW50cmllcyIsICJlbnRyaWVzIiwgImxvY2FsaXplZE5hbWVzcGFjZUxjIiwgImtpbGxIVE1MIiwgImtpbGxDaHVua3MiLCAiaXRhbGljQ2h1bmtSZWdleCIsICJtb3B1cCIsICJmaXJzdEJpdCIsICJzdHVmZiIsICJub3RTZW50ZW5jZUVuZHMiLCAiZml4U2VudGVuY2VFbmRzIiwgImZ1bGxMZW5ndGgiLCAiZGQiLCAiZmlyc3RTZW50ZW5jZXMiLCAic3RycyIsICJraWxsQmFkV2hpdGVzcGFjZSIsICJtYWtlUHJldmlldyIsICJraWxsTXVsdGlsaW5lVGVtcGxhdGVzIiwgImZpeEhUTUwiLCAic3RyaXBMb25nVGVtcGxhdGVzIiwgImVzV2lraTJIdG1sUGFydCIsICJyZUxpbmtzIiwgImxhc3RJbmRleCIsICJyZXN1bHQiLCAicG9zdGZpeEluZGV4IiwgIl9tYXRjaCQiLCAiZWRpdFN1bW1hcnlQcmV2aWV3IiwgInJlQWVzIiwgInNlY3Rpb24iLCAicG9zdGZpeCIsICJzZWN0aW9uTGluayIsICJtb3JlIiwgIm1vcmVMaW5rIiwgIm9uY2xpY2siLCAicXVlcnlUeXBlIiwgImh0bWxHZW5lcmF0b3IiLCAidXNlcm5hbWVhcnQiLCAiQVBJaGlzdG9yeVByZXZpZXdIVE1MIiwgIkFQSWNhdGVnb3J5UHJldmlld0hUTUwiLCAidXNlcm5hbWUiLCAiQVBJdXNlckluZm9QcmV2aWV3SFRNTCIsICJBUEljb250cmlic1ByZXZpZXdIVE1MIiwgInRyYWlsIiwgIkFQSWltYWdlcGFnZVByZXZpZXdIVE1MIiwgIkFQSWJhY2tsaW5rc1ByZXZpZXdIVE1MIiwgIkFQSXJldmlzaW9uUHJldmlld0hUTUwiLCAiZmV0Y2hVc2VyR3JvdXBOYW1lcyIsICJ0aGVuIiwgInNob3dBUElQcmV2aWV3IiwgImdvIiwgImxpbmtMaXN0IiwgImJ1ZiIsICJfaXRlcmF0b3IxIiwgIl9zdGVwMSIsICJnZXRUaW1lT2Zmc2V0IiwgInR6IiwgIm9wdGlvbnMiLCAiZ2V0VGltZVpvbmUiLCAidGltZVpvbmUiLCAidHpDb21wb25lbnRzIiwgInVzZVRpbWVPZmZzZXQiLCAiSW50bCIsICJEYXRlVGltZUZvcm1hdCIsICJmb3JtYXRUb1BhcnRzIiwgImdldExvY2FsZXMiLCAibG9jYWxlcyIsICJ1c2VyTGFuZ3VhZ2UiLCAiZ2V0TVdEYXRlRm9ybWF0IiwgInN1cHBvcnRlZExvY2FsZXNPZiIsICJuYXZpZ2F0b3IiLCAibGFuZ3VhZ2UiLCAiZWRpdFByZXZpZXdUYWJsZSIsICJyZWFsbHlDb250cmlicyIsICJjdXJhcnQiLCAibWFrZUZpcnN0Q29sdW1uTGlua3MiLCAiY3VycmVudFJldmlzaW9uIiwgImZpcnN0UmV2aWQiLCAiX2l0ZXJhdG9yMTAiLCAiX3N0ZXAxMCIsICJlZGl0RGF0ZSIsICJ0aGlzRGF5IiwgImZvcm1hdHRlZERhdGUiLCAidGhpc1RpbWUiLCAiZm9ybWF0dGVkVGltZSIsICJjb2wzdXJsIiwgImNvbDN0eHQiLCAiY29tbWVudCIsICJjb250ZW50IiwgImNvbW1lbnRoaWRkZW4iLCAiYWRqdXN0RGF0ZSIsICJvZmZzZXQiLCAiY29udmVydFRpbWVab25lIiwgInRvTG9jYWxlU3RyaW5nIiwgImZvcm1hdHRlZERhdGVUaW1lIiwgImQyIiwgImdldEZ1bGxZZWFyIiwgImdldE1vbnRoIiwgImdldERhdGUiLCAiZ2V0SG91cnMiLCAiZ2V0TWludXRlcyIsICJnZXRTZWNvbmRzIiwgInRvTG9jYWxlRGF0ZVN0cmluZyIsICJnZXRVVENTZWNvbmRzIiwgInRvTG9jYWxlVGltZVN0cmluZyIsICJ1c2VyaW5mb1Jlc3BvbnNlIiwgInF1ZXJ5T2JqIiwgInVzZXJzIiwgIm1lc3NhZ2VzIiwgImdyb3VwcyIsICJfaXRlcmF0b3IxMSIsICJfc3RlcDExIiwgImdyb3VwTmFtZSIsICJnbG9iYWx1c2VyaW5mbyIsICJfaXRlcmF0b3IxMiIsICJfc3RlcDEyIiwgImdldE13QXBpIiwgImxvYWRNZXNzYWdlc0lmTWlzc2luZyIsICJqc09iaiIsICJtaXNzaW5nIiwgImNvbnRlbnRtb2RlbCIsICJfaXRlcmF0b3IxMyIsICJfc3RlcDEzIiwgImNvbnRpbnVlIiwgImJsY29udGludWUiLCAiQVBJc2hhcmVkSW1hZ2VQYWdlUHJldmlld0hUTUwiLCAicG9wdXBpZCIsICJyZXF1ZXN0aWQiLCAiYWx0IiwgImltYWdlcmVwb3NpdG9yeSIsICJlbmNhcnQiLCAic2hhcmVkX3VybCIsICJhcGljb21tb25zYmFzZSIsICJjb21tb25zYmFzZSIsICJsb2FkZXIiLCAibG9hZCIsICJBUElpbWFnZWxpbmtzUHJldmlld0hUTUwiLCAianNvYmoiLCAiaW1hZ2V1c2FnZSIsICJfaXRlcmF0b3IxNCIsICJfc3RlcDE0IiwgImNhdGVnb3J5bWVtYmVycyIsICJfaXRlcmF0b3IxNSIsICJfc3RlcDE1IiwgImNtY29udGludWUiLCAicXVlcnlvYmoiLCAiaW52YWxpZCIsICJibG9ja2VkYnkiLCAiYmxvY2twYXJ0aWFsIiwgImxvY2tlZFN1bEFjY291bnRJc0F0dGFjaGVkVG9UaGlzIiwgInVuYXR0YWNoZWQiLCAiZ2VuZGVyIiwgIl9pdGVyYXRvcjE2IiwgIl9zdGVwMTYiLCAiX2l0ZXJhdG9yMTciLCAiX3N0ZXAxNyIsICJyZWdpc3RyYXRpb24iLCAiX3VzZXIkZWRpdGNvdW50IiwgImVkaXRjb3VudCIsICJ1c2VyY29udHJpYnMiLCAiYmxvY2tzIiwgInJic3RyIiwgInJhbmdlc3RhcnQiLCAicmFuZ2VlbmQiLCAicmVzdHJpY3Rpb25zIiwgInNwbGljZSIsICJfbmF2cG9wIiwgImVkaXRzIiwgInNldHVwRGVidWdnaW5nIiwgInBvcHVwRGVidWciLCAiY29uc29sZSIsICJwb3B1cHNJbnNlcnRJbWFnZSIsICJpbWFnZWluZm8iLCAiaW1hZ2VwYWdlIiwgInRodW1idXJsIiwgInNyYyIsICJtaW1lIiwgImRlc2NyaXB0aW9udXJsIiwgInRvZ2dsZVNpemUiLCAidG9nZ2xlU2l6ZTIiLCAiaW1nIiwgImZpcnN0Q2hpbGQiLCAibWF0Y2hlZCIsICJyZW1vdmVNYXRjaGVzVW5sZXNzIiwgInJlMSIsICJwYXJlbmNvdW50IiwgInJlMiIsICJzZXROYW1lc3BhY2VzIiwgInNldFJlZGlycyIsICJSIiwgInJlZGlyTGlzdHMiLCAiYXIiLCAiYmUiLCAiYmciLCAiYnMiLCAiYm4iLCAiY3MiLCAiY3kiLCAiZGUiLCAiZW8iLCAiZXMiLCAiZXQiLCAiZ2EiLCAiZ2wiLCAiaGUiLCAiaHUiLCAiaXMiLCAiaXQiLCAiamEiLCAibWsiLCAibmRzIiwgIm5sIiwgIm5uIiwgInBsIiwgInB0IiwgInJ1IiwgInNrIiwgInNyIiwgInR0IiwgInVrIiwgInZpIiwgInlpIiwgInpoIiwgInJlZGlyTGlzdCIsICJzZXRJbnRlcndpa2kiLCAid2lraW1lZGlhIiwgIm5zUmUiLCAiaW1hZ2VOYW1lc3BhY2VWYXJpYW50cyIsICJfaTIiLCAiX09iamVjdCRlbnRyaWVzMiIsICJfbG9jYWxpemVkTmFtZXNwYWNlTGMiLCAiX25hbWVzcGFjZUlkIiwgIm5zUmVJbWFnZSIsICJnZXRFZGl0Ym94U2VsZWN0aW9uIiwgInNlbGVjdGlvbiIsICJjcmVhdGVSYW5nZSIsICJzZWxTdGFydCIsICJzZWxlY3Rpb25TdGFydCIsICJzZWxFbmQiLCAic2VsZWN0aW9uRW5kIiwgInNlbCIsICJwaXBlIiwgImRvU2VwYXJhdGVTZWxlY3Rpb25Qb3B1cCIsICJNb3VzZXRyYWNrZXIiLCAibG9vcERlbGF5IiwgImFjdGl2ZSIsICJob29rcyIsICJydW5Ib29rcyIsICJyZW1vdmVPYmoiLCAicmVtb3ZlSG9va3MiLCAibmV3SG9va3MiLCAidHJhY2siLCAicGFnZVgiLCAicGFnZVkiLCAiZG9jRWx0IiwgImRvY3VtZW50RWxlbWVudCIsICJzY3JvbGxMZWZ0IiwgInNjcm9sbFRvcCIsICJzZXRQb3NpdGlvbiIsICJsYXN0SG9va194IiwgImxhc3RIb29rX3kiLCAiZW5hYmxlIiwgInNhdmVkTGlzdGVuZXIiLCAidWlkIiwgIm5vc2hvdyIsICJjcmVhdGUiLCAidW5oaWRlIiwgImhpZGUiLCAiaG9va0lkcyIsICJkb3dubG9hZHMiLCAiY29uc3RyYWluZWQiLCAiaGVpZ2h0IiwgImNyZWF0ZU1haW5EaXYiLCAicmVwb3NpdGlvbiIsICJub0xpbWl0SG9yIiwgInRvb1dpZGUiLCAidXBkYXRlRGltZW5zaW9ucyIsICJjV2lkdGgiLCAiY2xpZW50V2lkdGgiLCAibmF0dXJhbFdpZHRoIiwgIm5ld0xlZnQiLCAicmFpc2UiLCAiekluZGV4IiwgImhpZ2hlc3QiLCAic2hvdyIsICJ0aW1lIiwgInN0YWJsZV94IiwgInN0YWJsZV95IiwgInN0YWJsZVNob3ciLCAibmV3X3giLCAibmV3X3kiLCAiZHgiLCAiZHkiLCAiZnV6ejIiLCAic2hvd1Nvb25TdGFibGVUaW1lciIsICJrZXlIb29rcyIsICJSZWZsZWN0IiwgImFwcGx5IiwgImhvb2siLCAiaG9va0lkIiwgIl90aGlzJGNsYXNzTmFtZSIsICJvbmNsaWNrTGlzdGVuZXIiLCAicG9zaXRpb24iLCAibWluV2lkdGgiLCAiaGFuZGxlTmFtZSIsICJzaGlmdEtleSIsICJhYm9ydERvd25sb2FkcyIsICJvZmZzZXRIZWlnaHQiLCAiX2l0ZXJhdG9yMTgiLCAiX3N0ZXAxOCIsICJkZWxGbXQiLCAiaW5zRm10IiwgImNvdW50Q3Jvc3NpbmdzIiwgImVqZWN0IiwgInJvdyIsICJfaXRlcmF0b3IxOSIsICJfc3RlcDE5IiwgInNob3J0ZW5EaWZmU3RyaW5nIiwgInNob3J0ZW5EaWZmU3RyaW5nMiIsICJjb250ZXh0IiwgImRpZmZTdHJpbmciLCAib1NwbGl0dGVkIiwgIm5TcGxpdHRlZCIsICJvdXQiLCAiYWNjIiwgIm1heE91dHB1dFBhaXIiLCAicGFpcmVkIiwgImpzUmVzZXJ2ZWRQcm9wZXJ0aWVzIiwgImRpZmZCdWdBbGVydCIsICJkaWZmQnVnQWxlcnQyIiwgIndvcmQiLCAibWFrZURpZmZIYXNodGFibGUiLCAiX3NyYyRpIiwgIl9yZXQkX3NyYyRpIiwgIm9zIiwgInNldFNpdGVJbmZvIiwgInBvcHVwTG9jYWxEZWJ1ZyIsICJob3N0bmFtZSIsICJ3aWtpYSIsICJpc0xvY2FsIiwgInN0YXJ0c1dpdGgiLCAiY29tbW9ucyIsICJwb3J0IiwgInNpdGViYXNlIiwgInNldFVzZXJJbmZvIiwgInVzdXNlcnMiLCAidXNwcm9wIiwgImNhblJldmlldyIsICJyaWdodHMiLCAiZmV0Y2hTcGVjaWFsUGFnZU5hbWVzIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgIm1ldGEiLCAic2lwcm9wIiwgInVzZWxhbmciLCAic21heGFnZSIsICJtYXhhZ2UiLCAic3BlY2lhbHBhZ2VhbGlhc2VzIiwgInNldFRpdGxlQmFzZSIsICJwcm90b2NvbCIsICJib3RJbnRlcmZhY2VQYXRoIiwgIkFQSVBhdGgiLCAidGl0bGV0YWlsIiwgIndpa2liYXNlIiwgInNldE1haW5SZWdleCIsICJyZVN0YXJ0IiwgInByZVRpdGxlcyIsICJyZUVuZCIsICJidWlsZFNwZWNpYWxQYWdlR3JvdXAiLCAic3BlY2lhbFBhZ2VPYmoiLCAidmFyaWFudHMiLCAicmVhbG5hbWUiLCAiX2l0ZXJhdG9yMjAiLCAiYWxpYXNlcyIsICJfc3RlcDIwIiwgImFsaWFzIiwgInNldFJlZ2V4cHMiLCAiX2l0ZXJhdG9yMjEiLCAiX3N0ZXAyMSIsICJzcGVjaWFscGFnZSIsICJpbSIsICJfdGVtcGxhdGVPYmplY3Q0IiwgIl90ZW1wbGF0ZU9iamVjdDUiLCAic2V0dXBDYWNoZSIsICJzZXRNaXNjIiwgImNsaWVudCIsICJzZXR1cFBvcHVwczIiLCAiY29tcGxldGVkIiwgInNldE9wdGlvbnMiLCAiZGVmYXVsdE5hdmxpbmtTcGVjIiwgIl9oaW50IiwgImV4cGFuZENvbmRpdGlvbmFsTmF2bGlua1N0cmluZyIsICJleHBhbmRDb25kaXRpb25hbE5hdmxpbmtTdHJpbmcyIiwgInJlY3Vyc2lvbkNvdW50IiwgImNvbmRpdGlvbmFsU3BsaXRSZWdleCIsICJudW1QYXJlbnMiLCAidGVzdFN0cmluZyIsICJ0cnVlU3RyaW5nIiwgImZhbHNlU3RyaW5nIiwgInRlc3RSZXN1bHQiLCAibmF2bGlua1N0cmluZ1RvQXJyYXkiLCAiX2l0ZXJhdG9yMjIiLCAiX3N0ZXAyMiIsICJuYXZsaW5rVGFnIiwgInNzIiwgInNzcyIsICJuYXZsaW5rU3Vic3RpdHV0ZUhUTUwiLCAibmF2bGlua0RlcHRoIiwgIm1hZ2ljIiwgIm1lbnVkZXB0aCIsICJtZW51cm93ZGVwdGgiLCAiX2l0ZXJhdG9yMjMiLCAiX3N0ZXAyMyIsICJnZXROZXdXaW4iLCAiZ2V0UHJpbnRGdW5jdGlvbiIsICJ0YWdUeXBlIiwgInByaW50IiwgInNob3J0Y3V0IiwgImFkZFBvcHVwU2hvcnRjdXQiLCAicG9wdXBMaW5rc05ld1dpbmRvdyIsICJuZXdXaW4iLCAibm9Qb3B1cCIsICJzcGVjaWFsTGluayIsICJtYWdpY1dhdGNoTGluayIsICJ0aXRsZWRXaWtpTGluayIsICJfcGckY3VycmVudCRsaW5rJG9yaWciLCAiYXJpbkxpbmsiLCAiZWRpdENvdW50ZXJMaW5rIiwgImVkaXRvckxpc3RMaW5rIiwgInRpdGxlZERpZmZMaW5rIiwgIm1hZ2ljSGlzdG9yeUxpbmsiLCAic2ltcGxlUG9wdXBzIiwgInBvcHVwTWVudUxpbmsiLCAicG9wdXBIYW5kbGVLZXlwcmVzcyIsICJwb3B1cEhhbmRsZUtleXByZXNzMiIsICJfZXZ0JGtleUNvZGUiLCAia2V5Q29kZSIsICJ3aGljaCIsICJsZXR0ZXIiLCAiZnJvbUNvZGVQb2ludCIsICJzdGFydExpbmsiLCAibGFzdFBvcHVwTGlua1NlbGVjdGVkIiwgInByZXZlbnREZWZhdWx0IiwgImZvY3VzIiwgIm9sZFBvcHVwT25rZXlwcmVzcyIsICJvbmtleXByZXNzIiwgImFkZExpbmtQcm9wZXJ0eSIsICJwcm9wZXJ0eSIsICJkaWZmRGF0YSIsICJvbGRSZXYiLCAibmV3UmV2IiwgImFwaTIiLCAiZnJvbXRpdGxlIiwgInRvcmVsYXRpdmUiLCAiZnJvbXJldiIsICJ0b3JldiIsICJjb21wYXJlIiwgImZyb21yZXZpZCIsICJ0b3JldmlkIiwgImFkZFJldmlld0xpbmsiLCAiZG9uZURpZmYiLCAicmV2aWRzIiwgInN0YWJsZV9yZXZpZCIsICJmbGFnZ2VkIiwgInBhcmFtczIiLCAicG9zdFdpdGhUb2tlbiIsICJmYWlsIiwgIl9pdGVyYXRvcjI0IiwgIl9zdGVwMjQiLCAiX2kzIiwgIl9yZXZpc2lvbnMiLCAicmV2aXNpb24iLCAiaW5zZXJ0RGlmZiIsICJybUJvcmluZ0xpbmVzIiwgImFhYSIsICJiYiIsICJiYmIiLCAic3RyaXBPdXRlckNvbW1vbkxpbmVzIiwgIm9sZGxpbmVzIiwgIm5ld2xpbmVzIiwgImlubmVyIiwgInRydW5jYXRlZCIsICJwb3B1cERpZmZNYXhMaW5lcyIsICJwb3B1cERpZmZDb250ZXh0TGluZXMiLCAibGluZURpZmYiLCAibGluZXMyIiwgIm9sZGxpbmVzMiIsICJuZXdsaW5lczIiLCAiZGlmZkRhdGVzVGFibGUiLCAiZGlmZkRhdGVzVGFibGVSb3ciLCAibGFiZWwiLCAibGFzdE1vZGlmaWVkRGF0ZSIsICJyZXZsaW5rIiwgImdlbmVyYWxMaW5rIiwgImFjdGlvbk5hbWUiLCAic2F2ZWRPbGRpZCIsICJvbGRpZERhdGEiLCAicmV2aXNpb25TdHJpbmciLCAicmV2ZXJ0U3VtbWFyeSIsICJiYXNlIiwgImNzc0NsYXNzIiwgImRlZmF1bHROYXZsaW5rQ2xhc3NuYW1lIiwgImdlbmVyYWxOYXZMaW5rIiwgImdldExhc3RDb250cmliIiwgIndpa2lwYWdlIiwgImdldEhpc3RvcnlJbmZvIiwgInByb2Nlc3NMYXN0Q29udHJpYkluZm8iLCAiZmlyc3ROZXdFZGl0b3IiLCAiZWRpdG9yIiwgIm5ld1VybCIsICJkaXNwbGF5VXJsIiwgImdldERpZmZTaW5jZU15RWRpdCIsICJwcm9jZXNzRGlmZlNpbmNlTXlFZGl0IiwgImZyaWVuZGx5TmFtZSIsICJteUxhc3RFZGl0IiwgInB1cmdlUG9wdXBzIiwgInByb2Nlc3NBbGxQb3B1cHMiLCAibnVsbGlmeSIsICJkaXNhYmxlUG9wdXBzIiwgInRvZ2dsZVByZXZpZXdzIiwgIm1hZ2ljV2F0Y2hMaW5rMiIsICJfdGVtcGxhdGVPYmplY3Q2IiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAicmVxRGF0YSIsICJ0aXRsZXMiLCAidW53YXRjaCIsICJtd1RpdGxlIiwgIm5ld0Zyb21UZXh0IiwgIm1lc3NhZ2VOYW1lIiwgImdldE5hbWVzcGFjZUlkIiwgInBhcnNlRG9tIiwgIl94MiIsICJfeDMiLCAiYXJndW1lbnRzIiwgImpzVXJsIiwgIm9uQ2xpY2siLCAiX3RlbXBsYXRlT2JqZWN0NyIsICJfdGVtcGxhdGVPYmplY3Q4IiwgIl9sJHNlcCIsICJhcHBlbmRQYXJhbXNUb0xpbmsiLCAibGlua3N0ciIsICJjQSIsICJjaHMiLCAiY3VycmVudEFydGljbGVSZWdleEJpdCIsICJfdGVtcGxhdGVPYmplY3Q5IiwgIl90ZW1wbGF0ZU9iamVjdDAiLCAiX3RlbXBsYXRlT2JqZWN0MSIsICJfdGVtcGxhdGVPYmplY3QxMCIsICJsayIsICJhbHNvQ2hhbmdlTGFiZWwiLCAic2FuZUxpbmtDaGVjayIsICJ1TiIsICJ0b29sRGJOYW1lIiwgImNvb2tpZVN0eWxlIiwgInRvb2wiLCAiZGVmYXVsdFRvb2xVcmwiLCAidGhlV2lraSIsICJ3aGF0TmV4dCIsICJnZXRIaXN0b3J5IiwgInByb2Nlc3NIaXN0b3J5IiwgIl9pdGVyYXRvcjI1IiwgIl9zdGVwMjUiLCAiZmluaXNoUHJvY2Vzc0hpc3RvcnkiLCAiaGlzdEluZm8iLCAicHJldmlkIiwgImRlZmF1bHRpemUiLCAiX3BnJG9wdGlvbiIsICJfcGckb3B0aW9uJHgiLCAibmV3T3B0aW9uIiwgImRlZiIsICJ2YXJOYW1lIiwgInVzZXJJc1N5c29wIiwgImciLCAiaG91cjEyIiwgIl90ZW1wbGF0ZU9iamVjdDExIiwgImVkaXRDb3VudGVyTGlua0hpbnQiLCAiYXJpbiIsICJvbiIsICJvbmNlIiwgImR5bmFtaWNDb250ZW50SGFuZGxlciIsICIkY29udGVudCIsICJyZWdpc3Rlckhvb2tzRm9yVmlzaWJsZU5hdnBvcHMiLCAiZG9JdCIsICJlYWNoIiwgIl9pbmRleCIsICJhZGQiLCAiJG92ZXJsYXkiXQp9Cg==
