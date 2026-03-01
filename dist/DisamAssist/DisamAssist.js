/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/User:Peacearth/DisamAssist.js}
 * @base {@link https://es.wikipedia.org/wiki/Usuario:Qwertyytrewqqwerty/DisamAssist.js}
 * @base {@link https://es.wikipedia.org/wiki/Usuario:Qwertyytrewqqwerty/DisamAssist.css}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/DisamAssist}
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

// dist/DisamAssist/DisamAssist.js
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
//! src/DisamAssist/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("DisamAssist/1.1");
//! src/DisamAssist/modules/config.ts
var cfg = {
  /* Categories where disambiguation pages are added (usually by a template like {{Disambiguation}} */
  disamCategories: ["全部消歧义页面"],
  /* "Canonical names" of the templates that may appear after ambiguous links and which should be removed when fixing those links */
  disamLinkTemplates: ["Disambiguation needed", "Ambiguous link", "Amblink", "Dab needed", "Disamb-link", "Disambig needed", "Disambiguate", "Dn", "Needdab"],
  /* "Canonical names" of the templates that designate intentional links to disambiguation pages */
  disamLinkIgnoreTemplates: ["R from ambiguous page", "R to disambiguation page", "R from incomplete disambiguation"],
  /* Format string for "Foo (disambiguation)"-style pages */
  disamFormat: "$1（消歧义）",
  /* Regular expression matching the titles of disambiguation pages (when they are different from the titles of the primary topics) */
  disamRegExp: "^(.*)（(消歧义|消歧義)）$",
  /* Text that will be inserted after the link if the user requests help. If the value is null, the option to request help won't be offered */
  disamNeededText: "{{dn|date={{".concat("subst:", "CURRENTMONTHNAME", "}} {{", "subst:", "CURRENTYEAR}}}}"),
  /* Content of the "Foo (disambiguation)" pages that will be created automatically when using DisamAssist from a "Foo" page */
  redirectToDisam: "#重定向 [[$1]]".concat("{{R to disambiguation page}}"),
  /* Whether intentional links to disambiguation pages can be explicitly marked by adding " (disambiguation)" */
  intentionalLinkOption: false,
  /* Namespaces that will be searched for incoming links to the disambiguation page (pages in other namespaces will be ignored) */
  targetNamespaces: [6, 10, 14, 302, 0],
  /* Number of backlinks that will be downloaded at once When using blredirect, the maximum limit is supposedly halved (see http://www.mediawiki.org/wiki/API:Backlinks) */
  backlinkLimit: 250,
  /* Number of titles we can query for at once */
  queryTitleLimit: 50,
  /* Number of characters before and after the incoming link that will be displayed */
  radius: 300,
  /* Height of the context box, in lines */
  numContextLines: 4,
  /* Number of pages that will be stored before saving, so that changes to them can be undone if need be */
  historySize: 2,
  /* Minimum time in seconds since the last change was saved before a new edit can be made. A negative value or 0 disables the cooldown. Users with the "bot" right won't be affected by the cooldown */
  editCooldown: 0,
  /* Specify how the watchlist is affected by DisamAssist edits. Possible values: "watch", "unwatch", "preferences", "nochange" */
  watch: "nochange"
};
//! src/DisamAssist/modules/messages.js
var messages = {
  start: "为链接消歧义",
  startMain: "为链至主条目的链接消歧义",
  startSame: "为链至消歧义页的链接消歧义",
  close: "关闭",
  undo: "复原",
  omit: "跳过",
  refresh: "重新整理",
  titleAsText: "其它目标",
  disamNeeded: "标示{{dn}}",
  intentionalLink: "有意链到消歧义页的链接",
  titleAsTextPrompt: "请输入新的链接目标：",
  removeLink: "去除链接",
  optionMarker: " [链接到这里]",
  targetOptionMarker: " [当前目标]",
  redirectOptionMarker: " [当前目标（重定向）]",
  pageTitleLine: '<a href="$1">$2</a>：',
  noMoreLinks: "没有需要消歧义的链接了。",
  pendingEditCounter: "已保存$1个，已编辑$2个",
  pendingEditBox: "DisamAssist正在储存您的编辑（$1）。",
  pendingEditBoxTimeEstimation: "$1；剩余时间：$2",
  pendingEditBoxLimited: "在所有更改保存前，请不要关闭页面；你可以在另一个页面编辑求闻百科，但是请勿同时使用多个DisamAssist。",
  error: "错误：$1",
  fetchRedirectsError: '获取重定向失败："$1".',
  getBacklinksError: '下载反向链接失败："$1".',
  fetchRightsError: '获取用户权限失败："$1",',
  loadPageError: '加载$1失败："$2".',
  savePageError: '保存至$1失败："$2".',
  dismissError: "Dismiss",
  pending: "DisamAssist尚有未储存的编辑。如欲储存之，请按“关闭”。",
  editInProgress: "DisamAssist正在进行编辑。若您将本分页关闭，可能会丧失您的编辑。",
  ellipsis: "……",
  notifyCharacter: "✔",
  summary: "使用[[MediaWiki:Gadget-DisamAssist.js|DisamAssist]]清理[[LIB:DAB|消歧义]]链接：[[$1]]（$2）。",
  summaryChanged: "改链接至[[$1]]",
  summaryOmitted: "链接已跳过",
  summaryRemoved: "链接已移除",
  summaryIntentional: "刻意链接至消歧义页面",
  summaryHelpNeeded: "需要帮助",
  summarySeparator: "; ",
  redirectSummary: "使用[[MediaWiki:Gadget-DisamAssist.js|DisamAssist]]创建目标为[[$1]]的重定向。"
};
//! src/DisamAssist/modules/core.js
var startLink;
var ui;
var links;
var pageChanges;
var currentPageTitle;
var currentPageParameters;
var currentLink;
var possibleBacklinkDestinations;
var forceSamePage = false;
var running = false;
var choosing = false;
var canMarkIntentionalLinks = false;
var displayedPages = {};
var editCount = 0;
var editLimit;
var pendingSaves = [];
var pendingEditBox;
var pendingEditBoxText;
var lastEditMillis = 0;
var runningSaves = false;
var install = () => {
  const {
    wgAction
  } = mw.config.get();
  if (wgAction !== "view" || !isDisam()) {
    return;
  }
  $(() => {
    const portletId = document.querySelector("#p-cactions") ? "p-cactions" : "p-tb";
    if (new RegExp(cfg.disamRegExp).test(getTitle())) {
      const startMainLink = $(mw.util.addPortletLink(portletId, "#", messages.startMain, "ca-disamassist-main")).on("click", startMain);
      const startSameLink = $(mw.util.addPortletLink(portletId, "#", messages.startSame, "ca-disamassist-same")).on("click", startSame);
      startLink = startMainLink.add(startSameLink);
    } else {
      startLink = $(mw.util.addPortletLink(portletId, "#", messages.start, "ca-disamassist-page")).on("click", start);
    }
  });
};
var start = () => {
  if (running) {
    return;
  }
  running = true;
  links = [];
  pageChanges = [];
  displayedPages = {};
  ensureDABExists().then((canMark) => {
    canMarkIntentionalLinks = canMark;
    createUI();
    addUnloadConfirm();
    markDisamOptions();
    checkEditLimit().then(() => {
      togglePendingEditBox(false);
      doPage();
    });
  });
};
var startSame = () => {
  forceSamePage = true;
  start();
};
var startMain = () => {
  forceSamePage = false;
  start();
};
var createUI = () => {
  const $body = $("body");
  ui = {
    display: $("<div>").addClass("disamassist-box disamassist-mainbox"),
    finishedMessage: $("<div>").text(messages.noMoreLinks).hide(),
    pageTitleLine: $("<span>").addClass("disamassist-pagetitleline"),
    pendingEditCounter: $("<div>").addClass("disamassist-editcounter"),
    context: $("<span>").addClass("disamassist-context"),
    undoButton: createButton(messages.undo, undo),
    omitButton: createButton(messages.omit, omit),
    endButton: createButton(messages.close, saveAndEnd),
    refreshButton: createButton(messages.refresh, refresh),
    titleAsTextButton: createButton(messages.titleAsText, chooseTitleFromPrompt),
    intentionalLinkButton: canMarkIntentionalLinks ? createButton(messages.intentionalLink, chooseIntentionalLink) : $("<span>"),
    disamNeededButton: cfg.disamNeededText ? createButton(messages.disamNeeded, chooseDisamNeeded) : $("<span>"),
    removeLinkButton: createButton(messages.removeLink, chooseLinkRemoval)
  };
  const top = $("<div>").addClass("disamassist-top").append([ui.pendingEditCounter, ui.finishedMessage, ui.pageTitleLine]);
  const leftButtons = $("<div>").addClass("disamassist-leftbuttons").append([ui.titleAsTextButton, ui.removeLinkButton, ui.intentionalLinkButton, ui.disamNeededButton, ui.omitButton]);
  const rightButtons = $("<div>").addClass("disamassist-rightbuttons").append([ui.undoButton, ui.refreshButton, ui.endButton]);
  const allButtons = $("<div>").addClass("disamassist-allbuttons").append([leftButtons, rightButtons]);
  ui.display.append([top, ui.context, allButtons]);
  updateEditCounter();
  toggleActionButtons(false);
  $body.find("#mw-content-text").before(ui.display);
  ui.display.hide().fadeIn();
};
var addUnloadConfirm = () => {
  $(window).on("beforeunload", () => {
    if (running && checkActualChanges()) {
      return messages.pending;
    } else if (editCount !== 0) {
      return messages.editInProgress;
    }
  });
};
var markDisamOptions = () => {
  const optionPageTitles = [];
  const optionMarkers = [];
  getDisamOptions().each((_index, element) => {
    const link = $(element);
    const title = extractPageName(link);
    const optionMarker = $("<a>").attr("href", "#").addClass("disamassist-optionmarker").text(messages.optionMarker).on("click", (ev) => {
      ev.preventDefault();
      chooseReplacement(title);
    });
    link.after(optionMarker);
    optionMarkers[optionMarkers.length] = optionMarker;
    optionPageTitles[optionPageTitles.length] = title;
  });
  const targetPage = getTargetPage();
  fetchRedirects([...optionPageTitles, ...targetPage]).done((redirects) => {
    const endTargetPage = resolveRedirect(targetPage, redirects);
    var _iterator = _createForOfIteratorHelper(optionPageTitles.entries()), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        const [ii, optionPageTitle] = _step.value;
        const endOptionTitle = resolveRedirect(optionPageTitle, redirects);
        if (isSamePage(optionPageTitle, targetPage)) {
          optionMarkers[ii].text(messages.targetOptionMarker).addClass("disamassist-curroptionmarker");
        } else if (isSamePage(endOptionTitle, endTargetPage)) {
          optionMarkers[ii].text(messages.redirectOptionMarker).addClass("disamassist-curroptionmarker");
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }).fail(error);
};
var ensureDABExists = () => {
  const deferred = new $.Deferred();
  const title = getTitle();
  if (!cfg.intentionalLinkOption) {
    deferred.resolve(false);
  } else if (new RegExp(cfg.disamRegExp).exec(title)) {
    deferred.resolve(true);
  } else {
    const disamTitle = cfg.disamFormat.replace("$1", title);
    loadPage(disamTitle).done((page) => {
      if (page.missing) {
        page.content = cfg.redirectToDisam.replace("$1", title);
        const summary = messages.redirectSummary.replace("$1", title);
        savePage(disamTitle, page, summary, false, true).done(() => {
          deferred.resolve(true);
        }).fail((description) => {
          error(description);
          deferred.resolve(false);
        });
      } else {
        deferred.resolve(true);
      }
    }).fail((description) => {
      error(description);
      deferred.resolve(false);
    });
  }
  return deferred.promise();
};
var checkEditLimit = () => {
  const deferred = new $.Deferred();
  if (cfg.editCooldown <= 0) {
    editLimit = false;
    deferred.resolve();
  } else {
    fetchRights().done((rights) => {
      editLimit = !rights.includes("bot");
    }).fail((description) => {
      error(description);
      editLimit = true;
    }).always(() => {
      deferred.resolve();
    });
  }
  return deferred.promise();
};
var doPage = () => {
  if (pageChanges.length > cfg.historySize) {
    applyChange(pageChanges.shift());
  }
  if (links.length) {
    currentPageTitle = links.shift();
    displayedPages[currentPageTitle] = true;
    toggleActionButtons(false);
    loadPage(currentPageTitle).done((data) => {
      currentPageParameters = data;
      currentLink = void 0;
      doLink();
    }).fail(error);
  } else {
    const targetPage = getTargetPage();
    getBacklinks(targetPage).done((backlinks, pageTitles) => {
      const pending = {};
      for (var _i = 0, _pendingSaves = pendingSaves; _i < _pendingSaves.length; _i++) {
        const el = _pendingSaves[_i];
        pending[el[0]] = true;
      }
      possibleBacklinkDestinations = pageTitles.filter((t) => {
        if (t === targetPage) {
          return true;
        }
        return removeDisam(t) !== targetPage;
      });
      links = backlinks.filter((el) => {
        return !displayedPages[el] && !pending[el];
      });
      if (links.length) {
        doPage();
      } else {
        updateContext();
      }
    }).fail(error);
  }
};
var doLink = () => {
  currentLink = extractLinkToPage(currentPageParameters.content, possibleBacklinkDestinations, currentLink ? currentLink.end : 0);
  if (currentLink) {
    updateContext();
  } else {
    doPage();
  }
};
var chooseReplacement = (pageTitle, extra, summary) => {
  if (choosing) {
    choosing = false;
    summary || (summary = pageTitle ? messages.summaryChanged.replace("$1", pageTitle) : messages.summaryOmitted);
    addChange(currentPageTitle, currentPageParameters, currentPageParameters.content, currentLink, summary);
    if (pageTitle && (pageTitle !== getTargetPage() || extra)) {
      currentPageParameters.content = replaceLink(currentPageParameters.content, pageTitle, currentLink, extra || "");
    }
    doLink();
  }
};
var chooseIntentionalLink = () => {
  const disamTitle = cfg.disamFormat.replace("$1", getTargetPage());
  chooseReplacement(disamTitle, "", messages.summaryIntentional);
};
var chooseTitleFromPrompt = () => {
  const title = prompt(messages.titleAsTextPrompt);
  if (title !== null) {
    chooseReplacement(title);
  }
};
var chooseLinkRemoval = () => {
  if (choosing) {
    const summary = messages.summaryRemoved;
    addChange(currentPageTitle, currentPageParameters, currentPageParameters.content, currentLink, summary);
    currentPageParameters.content = removeLink(currentPageParameters.content, currentLink);
    doLink();
  }
};
var chooseDisamNeeded = () => {
  chooseReplacement(currentLink.title, cfg.disamNeededText, messages.summaryHelpNeeded);
};
var undo = () => {
  if (pageChanges.length) {
    const lastPage = pageChanges.at(-1);
    if (currentPageTitle !== lastPage.title) {
      links.unshift(currentPageTitle);
      currentPageTitle = lastPage.title;
    }
    currentPageParameters = lastPage.page;
    currentPageParameters.content = lastPage.contentBefore.pop();
    currentLink = lastPage.links.pop();
    lastPage.summary.pop();
    if (!lastPage.contentBefore.length) {
      pageChanges.pop();
    }
    updateContext();
  }
};
var omit = () => {
  chooseReplacement();
};
var refresh = () => {
  saveAndEnd();
  start();
};
var toggleActionButtons = (enabled) => {
  const affectedButtons = [ui.omitButton, ui.titleAsTextButton, ui.removeLinkButton, ui.intentionalLinkButton, ui.disamNeededButton, ui.undoButton];
  for (var _i2 = 0, _affectedButtons = affectedButtons; _i2 < _affectedButtons.length; _i2++) {
    const button = _affectedButtons[_i2];
    button.prop("disabled", !enabled);
  }
};
var toggleFinishedMessage = (show) => {
  toggleActionButtons(!show);
  ui.undoButton.prop("disabled", !pageChanges.length);
  ui.finishedMessage.toggle(show);
  ui.pageTitleLine.toggle(!show);
  ui.context.toggle(!show);
};
var togglePendingEditBox = (show) => {
  const $body = $("body");
  if (!pendingEditBox) {
    pendingEditBox = $("<div>").addClass("disamassist-box disamassist-pendingeditbox");
    pendingEditBoxText = $("<div>");
    pendingEditBox.append(pendingEditBoxText).hide();
    if (editLimit) {
      pendingEditBox.append($("<div>").text(messages.pendingEditBoxLimited).addClass("disamassist-subtitle"));
    }
    $body.find("#mw-content-text").before(pendingEditBox);
    updateEditCounter();
  }
  if (show) {
    pendingEditBox.fadeIn();
  } else {
    pendingEditBox.fadeOut();
  }
};
var notifyCompletion = () => {
  const $body = $("body");
  const oldTitle = document.title;
  document.title = messages.notifyCharacter + document.title;
  $body.one("mousemove", () => {
    document.title = oldTitle;
  });
};
var updateContext = () => {
  updateEditCounter();
  if (currentLink) {
    ui.pageTitleLine.html(messages.pageTitleLine.replace("$1", mw.util.getUrl(currentPageTitle, {
      redirect: "no"
    })).replace("$2", mw.html.escape(currentPageTitle)));
    const context = extractContext(currentPageParameters.content, currentLink);
    ui.context.empty().append($("<span>").text(context[0])).append($("<span>").text(context[1]).addClass("disamassist-inclink")).append($("<span>").text(context[2]));
    const numLines = Math.ceil(ui.context.height() / Number.parseFloat(ui.context.css("line-height")));
    if (numLines < cfg.numContextLines) {
      ui.context.append(Array.from({
        length: cfg.numContextLines - numLines + 2
      }).join("<br>"));
    }
    toggleFinishedMessage(false);
    ui.undoButton.prop("disabled", !pageChanges.length);
    ui.removeLinkButton.prop("disabled", currentPageParameters.redirect);
    ui.intentionalLinkButton.prop("disabled", currentPageParameters.redirect);
    ui.disamNeededButton.prop("disabled", currentPageParameters.redirect || currentLink.hasDisamTemplate);
    choosing = true;
  } else {
    toggleFinishedMessage(true);
  }
};
var updateEditCounter = () => {
  if (ui.pendingEditCounter) {
    ui.pendingEditCounter.text(messages.pendingEditCounter.replace("$1", editCount).replace("$2", countActuallyChangedFullyCheckedPages()));
  }
  if (pendingEditBox) {
    if (editCount === 0 && !running) {
      togglePendingEditBox(false);
      notifyCompletion();
    }
    let textContent = editCount;
    if (editLimit) {
      textContent = messages.pendingEditBoxTimeEstimation.replace("$1", editCount).replace("$2", secondsToHHMMSS(cfg.editCooldown * editCount));
    }
    pendingEditBoxText.text(messages.pendingEditBox.replace("$1", textContent));
  }
};
var applyChange = (pageChange) => {
  if (pageChange.page.content !== pageChange.contentBefore[0]) {
    editCount++;
    const changeSummaries = pageChange.summary.join(messages.summarySeparator);
    const summary = messages.summary.replace("$1", getTargetPage()).replace("$2", changeSummaries);
    const save = editLimit ? saveWithCooldown : savePage;
    save(pageChange.title, pageChange.page, summary, true, true).always(() => {
      if (editCount > 0) {
        editCount--;
      }
      updateEditCounter();
    }).fail(error);
    updateEditCounter();
  }
};
var applyAllChanges = () => {
  var _iterator2 = _createForOfIteratorHelper(pageChanges), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      const pageChange = _step2.value;
      applyChange(pageChange);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  pageChanges = [];
};
var addChange = (pageTitle, page, oldContent, link, summary) => {
  if (!pageChanges.length || pageChanges.at(-1).title !== pageTitle) {
    pageChanges[pageChanges.length] = {
      title: pageTitle,
      page,
      contentBefore: [],
      links: [],
      summary: []
    };
  }
  const lastPageChange = pageChanges.at(-1);
  lastPageChange.contentBefore[lastPageChange.contentBefore.length] = oldContent;
  lastPageChange.links[lastPageChange.links.length] = link;
  lastPageChange.summary[lastPageChange.summary.length] = summary;
};
var checkActualChanges = () => {
  return countActualChanges() !== 0;
};
var countActualChanges = () => {
  let changeCount = 0;
  var _iterator3 = _createForOfIteratorHelper(pageChanges), _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
      const pageChange = _step3.value;
      if (pageChange.page.content !== pageChange.contentBefore[0]) {
        changeCount++;
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return changeCount;
};
var countActuallyChangedFullyCheckedPages = () => {
  let changeCount = countActualChanges();
  if (pageChanges.length) {
    const lastChange = pageChanges.at(-1);
    if (lastChange.title === currentPageTitle && currentLink && lastChange.page.content !== lastChange.contentBefore[0]) {
      changeCount--;
    }
  }
  return changeCount;
};
var getDisamOptions = () => {
  const $body = $("body");
  return $body.find("#mw-content-text a").filter((_index, element) => {
    return !!extractPageName($(element));
  });
};
var saveAndEnd = () => {
  applyAllChanges();
  end();
};
var end = () => {
  const $body = $("body");
  const currentToolUI = ui.display;
  choosing = false;
  running = false;
  startLink.removeClass("selected");
  $body.find(".disamassist-optionmarker").remove();
  currentToolUI.fadeOut({
    complete() {
      currentToolUI.remove();
      if (editCount) {
        togglePendingEditBox(true);
      }
    }
  });
};
var error = (errorDescription) => {
  const $body = $("body");
  const errorBox = $("<div>").addClass("disamassist-box disamassist-errorbox");
  errorBox.text(messages.error.replace("$1", errorDescription));
  errorBox.append(createButton(messages.dismissError, () => {
    errorBox.fadeOut();
  }).addClass("disamassist-errorbutton"));
  const uiIsInPlace = ui && $.contains(document.documentElement, ui.display[0]);
  const nextElement = uiIsInPlace ? ui.display : $body.find("#mw-content-text");
  nextElement.before(errorBox);
  errorBox.hide().fadeIn();
};
var replaceLink = (text, title, link, extra) => {
  let newContent;
  if (isSamePage(title, link.description)) {
    newContent = link.description;
  } else {
    newContent = "".concat(title, "|").concat(link.description);
  }
  const linkStart = text.slice(0, Math.max(0, link.start));
  const linkEnd = text.slice(Math.max(0, link.end));
  return "".concat(linkStart, "[[").concat(newContent, "]]").concat(link.afterDescription).concat(extra || "").concat(linkEnd);
};
var removeLink = (text, link) => {
  const linkStart = text.slice(0, Math.max(0, link.start));
  const linkEnd = text.slice(Math.max(0, link.end));
  return linkStart + link.description + link.afterDescription + linkEnd;
};
var extractLink = (text, lastIndex) => {
  const titleRegex = /\[\[(.*?)(?:\|(.*?))?]]/g;
  const templateRegex = /^(\w*[\s!),.:;?}]*){{\s*([^{|}]+?)\s*(?:\|[^{]*?)?}}/;
  titleRegex.lastIndex = lastIndex;
  const match = titleRegex.exec(text);
  if (match && match.index !== -1) {
    var _match$;
    let possiblyAmbiguous = true;
    let hasDisamTemplate = false;
    let _end = match.index + 4 + match[1].length + (match[2] ? 1 + match[2].length : 0);
    let afterDescription = "";
    const rest = text.slice(Math.max(0, _end));
    const templateMatch = templateRegex.exec(rest);
    if (templateMatch) {
      const templateTitle = getCanonicalTitle(templateMatch[2]);
      const {
        disamLinkTemplates
      } = cfg;
      const {
        disamLinkIgnoreTemplates
      } = cfg;
      if (disamLinkTemplates.includes(templateTitle)) {
        _end += templateMatch[0].length;
        afterDescription = templateMatch[1].replace(/\s$/, "");
        hasDisamTemplate = true;
      } else if (disamLinkIgnoreTemplates.includes(templateTitle)) {
        possiblyAmbiguous = false;
      }
    }
    return {
      start: match.index,
      end: _end,
      possiblyAmbiguous,
      hasDisamTemplate,
      title: match[1],
      description: (_match$ = match[2]) !== null && _match$ !== void 0 ? _match$ : match[1],
      afterDescription
    };
  }
};
var extractLinkToPage = (text, destinations, lastIndex) => {
  let link;
  let title;
  do {
    link = extractLink(text, lastIndex);
    if (link) {
      lastIndex = link.end;
      title = getCanonicalTitle(link.title);
    }
  } while (link && (!link.possiblyAmbiguous || !(destinations !== null && destinations !== void 0 && destinations.includes(title))));
  return link;
};
var getTargetPage = () => {
  const title = getTitle();
  return forceSamePage ? title : removeDisam(title);
};
var getTitle = () => {
  const {
    wgPageName
  } = mw.config.get();
  return wgPageName.replace(/_/g, " ");
};
var removeDisam = (title) => {
  var _match$2;
  const match = new RegExp(cfg.disamRegExp).exec(title);
  return (_match$2 = match === null || match === void 0 ? void 0 : match[1]) !== null && _match$2 !== void 0 ? _match$2 : title;
};
var isSamePage = (title1, title2) => {
  return getCanonicalTitle(title1) === getCanonicalTitle(title2);
};
var getCanonicalTitle = (title) => {
  try {
    title = new mw.Title(title).getPrefixedText();
  } catch {
  }
  return title;
};
var extractContext = (text, link) => {
  const contextStart = link.start - cfg.radius;
  const contextEnd = link.end + cfg.radius;
  let contextPrev = text.slice(contextStart, link.start);
  if (contextStart > 0) {
    contextPrev = messages.ellipsis + contextPrev;
  }
  let contextNext = text.slice(link.end, contextEnd);
  if (contextEnd < text.length) {
    contextNext += messages.ellipsis;
  }
  return [contextPrev, text.slice(link.start, link.end), contextNext];
};
var extractPageName = (link) => {
  let pageName = extractPageNameRaw(link);
  if (pageName) {
    const sectionPos = pageName.indexOf("#");
    let section = "";
    if (sectionPos !== -1) {
      section = pageName.slice(Math.max(0, sectionPos));
      pageName = pageName.slice(0, Math.max(0, sectionPos));
    }
    return getCanonicalTitle(pageName) + section;
  }
};
var extractPageNameRaw = (link) => {
  const {
    wgScript,
    wgArticlePath
  } = mw.config.get();
  if (!link.hasClass("image")) {
    const href = link.attr("href");
    if (link.hasClass("new")) {
      if (href.includes(wgScript)) {
        return mw.util.getParamValue("title", href);
      }
    } else {
      const regex = wgArticlePath.replace("$1", "(.*)");
      const regexResult = new RegExp("^".concat(regex, "$")).exec(href);
      if (Array.isArray(regexResult) && regexResult.length) {
        return decodeURIComponent(regexResult[1]);
      }
    }
  }
};
var isDisam = () => {
  const {
    wgCategories
  } = mw.config.get();
  const categories = wgCategories !== null && wgCategories !== void 0 ? wgCategories : [];
  var _iterator4 = _createForOfIteratorHelper(categories), _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
      const category = _step4.value;
      const {
        disamCategories
      } = cfg;
      if (disamCategories.includes(category)) {
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
var secondsToHHMMSS = (totalSeconds) => {
  let hhmmss = "";
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor(totalSeconds % 3600 / 60);
  const seconds = Math.floor(totalSeconds % 3600 % 60);
  if (hours >= 1) {
    hhmmss = "".concat(pad(hours, "0", 2), ":");
  }
  hhmmss += "".concat(pad(minutes, "0", 2), ":").concat(pad(seconds, "0", 2));
  return hhmmss;
};
var pad = (str, z, width) => {
  str = str.toString();
  if (str.length >= width) {
    return str;
  }
  return Array.from({
    length: width - str.length + 1
  }).join(z) + str;
};
var createButton = (text, onClick) => {
  const button = $("<input>").attr({
    type: "button",
    value: text
  });
  button.addClass("disamassist-button").on("click", onClick);
  return button;
};
var resolveRedirect = (pageTitle, possibleRedirects) => {
  let appliedRedirect = true;
  const visitedPages = {};
  let currentPage = getCanonicalTitle(pageTitle);
  while (appliedRedirect) {
    appliedRedirect = false;
    var _iterator5 = _createForOfIteratorHelper(possibleRedirects), _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
        const possibleRedirect = _step5.value;
        if (possibleRedirect.from === currentPage) {
          if (visitedPages[possibleRedirect.to]) {
            return pageTitle;
          }
          visitedPages[currentPage] = true;
          appliedRedirect = true;
          currentPage = possibleRedirect.to;
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
  }
  return currentPage;
};
var getBacklinks = (page) => {
  const deferred = new $.Deferred();
  const params = {
    action: "query",
    list: "backlinks",
    bltitle: page,
    blredirect: true,
    bllimit: cfg.backlinkLimit,
    blnamespace: cfg.targetNamespaces.join("|")
  };
  api.get(params).done(({
    query
  }) => {
    const backlinks = [];
    const linkTitles = [getCanonicalTitle(page)];
    const backlinksQuery = query.backlinks;
    var _iterator6 = _createForOfIteratorHelper(backlinksQuery), _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
        const element = _step6.value;
        backlinks[backlinks.length] = element.title;
        if (!element.redirlinks) {
          continue;
        }
        linkTitles[linkTitles.length] = element.title;
        const {
          redirlinks
        } = element;
        var _iterator7 = _createForOfIteratorHelper(redirlinks), _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
            const {
              title
            } = _step7.value;
            backlinks[backlinks.length] = title;
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    deferred.resolve(backlinks, linkTitles);
  }).fail((code) => {
    deferred.reject(messages.getBacklinksError.replace("$1", code));
  });
  return deferred.promise();
};
var fetchRedirects = (pageTitles) => {
  const deferred = new $.Deferred();
  const currentTitles = pageTitles.slice(0, cfg.queryTitleLimit);
  const restTitles = pageTitles.slice(cfg.queryTitleLimit);
  const params = {
    action: "query",
    titles: currentTitles.join("|"),
    redirects: true
  };
  api.get(params).done(({
    query
  }) => {
    var _query$redirects;
    const theseRedirects = (_query$redirects = query.redirects) !== null && _query$redirects !== void 0 ? _query$redirects : [];
    if (restTitles.length) {
      fetchRedirects(restTitles).done((redirects) => {
        deferred.resolve([...theseRedirects, ...redirects]);
      }).fail((description) => {
        deferred.reject(description);
      });
    } else {
      deferred.resolve(theseRedirects);
    }
  }).fail((code) => {
    deferred.reject(messages.fetchRedirectsError.replace("$1", code));
  });
  return deferred.promise();
};
var fetchRights = () => {
  const deferred = $.Deferred();
  const params = {
    action: "query",
    meta: "userinfo",
    uiprop: "rights"
  };
  api.get(params).done(({
    query
  }) => {
    deferred.resolve(query.userinfo.rights);
  }).fail((code) => {
    deferred.reject(messages.fetchRightsError.replace("$1", code));
  });
  return deferred.promise();
};
var loadPage = (pageTitle) => {
  const deferred = new $.Deferred();
  const params = {
    action: "query",
    format: "json",
    formatversion: "2",
    titles: pageTitle,
    prop: "revisions",
    rvprop: ["timestamp", "content"],
    rvslots: "main",
    meta: "tokens",
    type: "csrf"
  };
  api.get(params).done(({
    query
  }) => {
    const [rawPage] = query.pages;
    const page = {};
    page.redirect = rawPage.redirect !== void 0;
    page.missing = rawPage.missing !== void 0;
    if (rawPage.revisions) {
      page.content = rawPage.revisions[0].slots.main.content;
      page.baseTimeStamp = rawPage.revisions[0].timestamp;
    } else {
      page.content = "";
      page.baseTimeStamp = void 0;
    }
    page.startTimeStamp = rawPage.starttimestamp;
    page.editToken = query.tokens.csrftoken;
    deferred.resolve(page);
  }).fail((code) => {
    deferred.reject(messages.loadPageError.replace("$1", pageTitle).replace("$2", code));
  });
  return deferred.promise();
};
var saveWithCooldown = (...args) => {
  const deferred = new $.Deferred();
  pendingSaves[pendingSaves.length] = {
    args,
    dfd: deferred
  };
  if (!runningSaves) {
    checkAndSave();
  }
  return deferred.promise();
};
var checkAndSave = function() {
  if (!pendingSaves.length) {
    runningSaves = false;
    return;
  }
  runningSaves = true;
  const millisSinceLast = Date.now() - lastEditMillis;
  if (millisSinceLast < cfg.editCooldown * 1e3) {
    setTimeout(checkAndSave, cfg.editCooldown * 1e3 - millisSinceLast);
  } else {
    const save = pendingSaves.shift();
    savePage.apply(this, save.args).done(() => {
      checkAndSave();
      save.dfd.resolve();
    }).fail((description) => {
      checkAndSave();
      save.dfd.reject(description);
    });
    lastEditMillis = Date.now();
  }
};
var savePage = (pageTitle, {
  editToken,
  content,
  baseTimeStamp,
  startTimeStamp
}, summary, minorEdit, botEdit) => {
  const deferred = new $.Deferred();
  const params = {
    action: "edit",
    title: pageTitle,
    token: editToken,
    text: content,
    basetimestamp: baseTimeStamp,
    starttimestamp: startTimeStamp,
    summary,
    watchlist: cfg.watch,
    minor: minorEdit,
    bot: botEdit
  };
  api.post(params).done(() => {
    deferred.resolve();
  }).fail((code) => {
    deferred.reject(messages.savePageError.replace("$1", pageTitle).replace("$2", code));
  });
  return deferred.promise();
};
//! src/DisamAssist/DisamAssist.ts
$(install);

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0Rpc2FtQXNzaXN0L21vZHVsZXMvYXBpLnRzIiwgInNyYy9EaXNhbUFzc2lzdC9tb2R1bGVzL2NvbmZpZy50cyIsICJzcmMvRGlzYW1Bc3Npc3QvbW9kdWxlcy9tZXNzYWdlcy5qcyIsICJzcmMvRGlzYW1Bc3Npc3QvbW9kdWxlcy9jb3JlLmpzIiwgInNyYy9EaXNhbUFzc2lzdC9EaXNhbUFzc2lzdC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKCdEaXNhbUFzc2lzdC8xLjEnKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImNvbnN0IGNmZyA9IHtcblx0LyogQ2F0ZWdvcmllcyB3aGVyZSBkaXNhbWJpZ3VhdGlvbiBwYWdlcyBhcmUgYWRkZWQgKHVzdWFsbHkgYnkgYSB0ZW1wbGF0ZSBsaWtlIHt7RGlzYW1iaWd1YXRpb259fSAqL1xuXHRkaXNhbUNhdGVnb3JpZXM6IFsn5YWo6YOo5raI5q2n5LmJ6aG16Z2iJ10sXG5cdC8qIFwiQ2Fub25pY2FsIG5hbWVzXCIgb2YgdGhlIHRlbXBsYXRlcyB0aGF0IG1heSBhcHBlYXIgYWZ0ZXIgYW1iaWd1b3VzIGxpbmtzIGFuZCB3aGljaCBzaG91bGQgYmUgcmVtb3ZlZCB3aGVuIGZpeGluZyB0aG9zZSBsaW5rcyAqL1xuXHRkaXNhbUxpbmtUZW1wbGF0ZXM6IFtcblx0XHQnRGlzYW1iaWd1YXRpb24gbmVlZGVkJyxcblx0XHQnQW1iaWd1b3VzIGxpbmsnLFxuXHRcdCdBbWJsaW5rJyxcblx0XHQnRGFiIG5lZWRlZCcsXG5cdFx0J0Rpc2FtYi1saW5rJyxcblx0XHQnRGlzYW1iaWcgbmVlZGVkJyxcblx0XHQnRGlzYW1iaWd1YXRlJyxcblx0XHQnRG4nLFxuXHRcdCdOZWVkZGFiJyxcblx0XSxcblx0LyogXCJDYW5vbmljYWwgbmFtZXNcIiBvZiB0aGUgdGVtcGxhdGVzIHRoYXQgZGVzaWduYXRlIGludGVudGlvbmFsIGxpbmtzIHRvIGRpc2FtYmlndWF0aW9uIHBhZ2VzICovXG5cdGRpc2FtTGlua0lnbm9yZVRlbXBsYXRlczogWydSIGZyb20gYW1iaWd1b3VzIHBhZ2UnLCAnUiB0byBkaXNhbWJpZ3VhdGlvbiBwYWdlJywgJ1IgZnJvbSBpbmNvbXBsZXRlIGRpc2FtYmlndWF0aW9uJ10sXG5cdC8qIEZvcm1hdCBzdHJpbmcgZm9yIFwiRm9vIChkaXNhbWJpZ3VhdGlvbilcIi1zdHlsZSBwYWdlcyAqL1xuXHRkaXNhbUZvcm1hdDogJyQx77yI5raI5q2n5LmJ77yJJyxcblx0LyogUmVndWxhciBleHByZXNzaW9uIG1hdGNoaW5nIHRoZSB0aXRsZXMgb2YgZGlzYW1iaWd1YXRpb24gcGFnZXMgKHdoZW4gdGhleSBhcmUgZGlmZmVyZW50IGZyb20gdGhlIHRpdGxlcyBvZiB0aGUgcHJpbWFyeSB0b3BpY3MpICovXG5cdGRpc2FtUmVnRXhwOiAnXiguKinvvIgo5raI5q2n5LmJfOa2iOatp+e+qSnvvIkkJyxcblx0LyogVGV4dCB0aGF0IHdpbGwgYmUgaW5zZXJ0ZWQgYWZ0ZXIgdGhlIGxpbmsgaWYgdGhlIHVzZXIgcmVxdWVzdHMgaGVscC4gSWYgdGhlIHZhbHVlIGlzIG51bGwsIHRoZSBvcHRpb24gdG8gcmVxdWVzdCBoZWxwIHdvbid0IGJlIG9mZmVyZWQgKi9cblx0ZGlzYW1OZWVkZWRUZXh0OiAne3tkbnxkYXRlPXt7Jy5jb25jYXQoJ3N1YnN0OicsICdDVVJSRU5UTU9OVEhOQU1FJywgJ319IHt7JywgJ3N1YnN0OicsICdDVVJSRU5UWUVBUn19fX0nKSxcblx0LyogQ29udGVudCBvZiB0aGUgXCJGb28gKGRpc2FtYmlndWF0aW9uKVwiIHBhZ2VzIHRoYXQgd2lsbCBiZSBjcmVhdGVkIGF1dG9tYXRpY2FsbHkgd2hlbiB1c2luZyBEaXNhbUFzc2lzdCBmcm9tIGEgXCJGb29cIiBwYWdlICovXG5cdHJlZGlyZWN0VG9EaXNhbTogJyPph43lrprlkJEgW1skMV1dJy5jb25jYXQoJ3t7UiB0byBkaXNhbWJpZ3VhdGlvbiBwYWdlfX0nKSxcblx0LyogV2hldGhlciBpbnRlbnRpb25hbCBsaW5rcyB0byBkaXNhbWJpZ3VhdGlvbiBwYWdlcyBjYW4gYmUgZXhwbGljaXRseSBtYXJrZWQgYnkgYWRkaW5nIFwiIChkaXNhbWJpZ3VhdGlvbilcIiAqL1xuXHRpbnRlbnRpb25hbExpbmtPcHRpb246IGZhbHNlLFxuXHQvKiBOYW1lc3BhY2VzIHRoYXQgd2lsbCBiZSBzZWFyY2hlZCBmb3IgaW5jb21pbmcgbGlua3MgdG8gdGhlIGRpc2FtYmlndWF0aW9uIHBhZ2UgKHBhZ2VzIGluIG90aGVyIG5hbWVzcGFjZXMgd2lsbCBiZSBpZ25vcmVkKSAqL1xuXHR0YXJnZXROYW1lc3BhY2VzOiBbNiwgMTAsIDE0LCAzMDIsIDBdLFxuXHQvKiBOdW1iZXIgb2YgYmFja2xpbmtzIHRoYXQgd2lsbCBiZSBkb3dubG9hZGVkIGF0IG9uY2UgV2hlbiB1c2luZyBibHJlZGlyZWN0LCB0aGUgbWF4aW11bSBsaW1pdCBpcyBzdXBwb3NlZGx5IGhhbHZlZCAoc2VlIGh0dHA6Ly93d3cubWVkaWF3aWtpLm9yZy93aWtpL0FQSTpCYWNrbGlua3MpICovXG5cdGJhY2tsaW5rTGltaXQ6IDI1MCxcblx0LyogTnVtYmVyIG9mIHRpdGxlcyB3ZSBjYW4gcXVlcnkgZm9yIGF0IG9uY2UgKi9cblx0cXVlcnlUaXRsZUxpbWl0OiA1MCxcblx0LyogTnVtYmVyIG9mIGNoYXJhY3RlcnMgYmVmb3JlIGFuZCBhZnRlciB0aGUgaW5jb21pbmcgbGluayB0aGF0IHdpbGwgYmUgZGlzcGxheWVkICovXG5cdHJhZGl1czogMzAwLFxuXHQvKiBIZWlnaHQgb2YgdGhlIGNvbnRleHQgYm94LCBpbiBsaW5lcyAqL1xuXHRudW1Db250ZXh0TGluZXM6IDQsXG5cdC8qIE51bWJlciBvZiBwYWdlcyB0aGF0IHdpbGwgYmUgc3RvcmVkIGJlZm9yZSBzYXZpbmcsIHNvIHRoYXQgY2hhbmdlcyB0byB0aGVtIGNhbiBiZSB1bmRvbmUgaWYgbmVlZCBiZSAqL1xuXHRoaXN0b3J5U2l6ZTogMixcblx0LyogTWluaW11bSB0aW1lIGluIHNlY29uZHMgc2luY2UgdGhlIGxhc3QgY2hhbmdlIHdhcyBzYXZlZCBiZWZvcmUgYSBuZXcgZWRpdCBjYW4gYmUgbWFkZS4gQSBuZWdhdGl2ZSB2YWx1ZSBvciAwIGRpc2FibGVzIHRoZSBjb29sZG93bi4gVXNlcnMgd2l0aCB0aGUgXCJib3RcIiByaWdodCB3b24ndCBiZSBhZmZlY3RlZCBieSB0aGUgY29vbGRvd24gKi9cblx0ZWRpdENvb2xkb3duOiAwLFxuXHQvKiBTcGVjaWZ5IGhvdyB0aGUgd2F0Y2hsaXN0IGlzIGFmZmVjdGVkIGJ5IERpc2FtQXNzaXN0IGVkaXRzLiBQb3NzaWJsZSB2YWx1ZXM6IFwid2F0Y2hcIiwgXCJ1bndhdGNoXCIsIFwicHJlZmVyZW5jZXNcIiwgXCJub2NoYW5nZVwiICovXG5cdHdhdGNoOiAnbm9jaGFuZ2UnLFxufTtcblxuZXhwb3J0IHtjZmd9O1xuIiwgImNvbnN0IG1lc3NhZ2VzID0ge1xuXHRzdGFydDogJ+S4uumTvuaOpea2iOatp+S5iScsXG5cdHN0YXJ0TWFpbjogJ+S4uumTvuiHs+S4u+adoeebrueahOmTvuaOpea2iOatp+S5iScsXG5cdHN0YXJ0U2FtZTogJ+S4uumTvuiHs+a2iOatp+S5iemhteeahOmTvuaOpea2iOatp+S5iScsXG5cdGNsb3NlOiAn5YWz6ZetJyxcblx0dW5kbzogJ+WkjeWOnycsXG5cdG9taXQ6ICfot7Pov4cnLFxuXHRyZWZyZXNoOiAn6YeN5paw5pW055CGJyxcblx0dGl0bGVBc1RleHQ6ICflhbblroPnm67moIcnLFxuXHRkaXNhbU5lZWRlZDogJ+agh+ekunt7ZG59fScsXG5cdGludGVudGlvbmFsTGluazogJ+acieaEj+mTvuWIsOa2iOatp+S5iemhteeahOmTvuaOpScsXG5cdHRpdGxlQXNUZXh0UHJvbXB0OiAn6K+36L6T5YWl5paw55qE6ZO+5o6l55uu5qCH77yaJyxcblx0cmVtb3ZlTGluazogJ+WOu+mZpOmTvuaOpScsXG5cdG9wdGlvbk1hcmtlcjogJyBb6ZO+5o6l5Yiw6L+Z6YeMXScsXG5cdHRhcmdldE9wdGlvbk1hcmtlcjogJyBb5b2T5YmN55uu5qCHXScsXG5cdHJlZGlyZWN0T3B0aW9uTWFya2VyOiAnIFvlvZPliY3nm67moIfvvIjph43lrprlkJHvvIldJyxcblx0cGFnZVRpdGxlTGluZTogJzxhIGhyZWY9XCIkMVwiPiQyPC9hPu+8micsXG5cdG5vTW9yZUxpbmtzOiAn5rKh5pyJ6ZyA6KaB5raI5q2n5LmJ55qE6ZO+5o6l5LqG44CCJyxcblx0cGVuZGluZ0VkaXRDb3VudGVyOiAn5bey5L+d5a2YJDHkuKrvvIzlt7LnvJbovpEkMuS4qicsXG5cdHBlbmRpbmdFZGl0Qm94OiAnRGlzYW1Bc3Npc3TmraPlnKjlgqjlrZjmgqjnmoTnvJbovpHvvIgkMe+8ieOAgicsXG5cdHBlbmRpbmdFZGl0Qm94VGltZUVzdGltYXRpb246ICckMe+8m+WJqeS9meaXtumXtO+8miQyJyxcblx0cGVuZGluZ0VkaXRCb3hMaW1pdGVkOlxuXHRcdCflnKjmiYDmnInmm7TmlLnkv53lrZjliY3vvIzor7fkuI3opoHlhbPpl63pobXpnaLvvJvkvaDlj6/ku6XlnKjlj6bkuIDkuKrpobXpnaLnvJbovpHmsYLpl7vnmb7np5HvvIzkvYbmmK/or7fli7/lkIzml7bkvb/nlKjlpJrkuKpEaXNhbUFzc2lzdOOAgicsXG5cdGVycm9yOiAn6ZSZ6K+v77yaJDEnLFxuXHRmZXRjaFJlZGlyZWN0c0Vycm9yOiAn6I635Y+W6YeN5a6a5ZCR5aSx6LSl77yaXCIkMVwiLicsXG5cdGdldEJhY2tsaW5rc0Vycm9yOiAn5LiL6L295Y+N5ZCR6ZO+5o6l5aSx6LSl77yaXCIkMVwiLicsXG5cdGZldGNoUmlnaHRzRXJyb3I6ICfojrflj5bnlKjmiLfmnYPpmZDlpLHotKXvvJpcIiQxXCIsJyxcblx0bG9hZFBhZ2VFcnJvcjogJ+WKoOi9vSQx5aSx6LSl77yaXCIkMlwiLicsXG5cdHNhdmVQYWdlRXJyb3I6ICfkv53lrZjoh7MkMeWksei0pe+8mlwiJDJcIi4nLFxuXHRkaXNtaXNzRXJyb3I6ICdEaXNtaXNzJyxcblx0cGVuZGluZzogJ0Rpc2FtQXNzaXN05bCa5pyJ5pyq5YKo5a2Y55qE57yW6L6R44CC5aaC5qyy5YKo5a2Y5LmL77yM6K+35oyJ4oCc5YWz6Zet4oCd44CCJyxcblx0ZWRpdEluUHJvZ3Jlc3M6ICdEaXNhbUFzc2lzdOato+WcqOi/m+ihjOe8lui+keOAguiLpeaCqOWwhuacrOWIhumhteWFs+mXre+8jOWPr+iDveS8muS4p+WkseaCqOeahOe8lui+keOAgicsXG5cdGVsbGlwc2lzOiAn4oCm4oCmJyxcblx0bm90aWZ5Q2hhcmFjdGVyOiAn4pyUJyxcblx0c3VtbWFyeTogJ+S9v+eUqFtbTWVkaWFXaWtpOkdhZGdldC1EaXNhbUFzc2lzdC5qc3xEaXNhbUFzc2lzdF1d5riF55CGW1tMSUI6REFCfOa2iOatp+S5iV1d6ZO+5o6l77yaW1skMV1d77yIJDLvvInjgIInLFxuXHRzdW1tYXJ5Q2hhbmdlZDogJ+aUuemTvuaOpeiHs1tbJDFdXScsXG5cdHN1bW1hcnlPbWl0dGVkOiAn6ZO+5o6l5bey6Lez6L+HJyxcblx0c3VtbWFyeVJlbW92ZWQ6ICfpk77mjqXlt7Lnp7vpmaQnLFxuXHRzdW1tYXJ5SW50ZW50aW9uYWw6ICfliLvmhI/pk77mjqXoh7PmtojmrafkuYnpobXpnaInLFxuXHRzdW1tYXJ5SGVscE5lZWRlZDogJ+mcgOimgeW4ruWKqScsXG5cdHN1bW1hcnlTZXBhcmF0b3I6ICc7ICcsXG5cdHJlZGlyZWN0U3VtbWFyeTogJ+S9v+eUqFtbTWVkaWFXaWtpOkdhZGdldC1EaXNhbUFzc2lzdC5qc3xEaXNhbUFzc2lzdF1d5Yib5bu655uu5qCH5Li6W1skMV1d55qE6YeN5a6a5ZCR44CCJyxcbn07XG5cbmV4cG9ydCB7bWVzc2FnZXN9O1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHtjZmd9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7bWVzc2FnZXN9IGZyb20gJy4vbWVzc2FnZXMnO1xuXG5sZXQgc3RhcnRMaW5rO1xubGV0IHVpO1xubGV0IGxpbmtzO1xubGV0IHBhZ2VDaGFuZ2VzO1xubGV0IGN1cnJlbnRQYWdlVGl0bGU7XG5sZXQgY3VycmVudFBhZ2VQYXJhbWV0ZXJzO1xubGV0IGN1cnJlbnRMaW5rO1xubGV0IHBvc3NpYmxlQmFja2xpbmtEZXN0aW5hdGlvbnM7XG5sZXQgZm9yY2VTYW1lUGFnZSA9IGZhbHNlO1xubGV0IHJ1bm5pbmcgPSBmYWxzZTtcbmxldCBjaG9vc2luZyA9IGZhbHNlO1xubGV0IGNhbk1hcmtJbnRlbnRpb25hbExpbmtzID0gZmFsc2U7XG5sZXQgZGlzcGxheWVkUGFnZXMgPSB7fTtcbmxldCBlZGl0Q291bnQgPSAwO1xubGV0IGVkaXRMaW1pdDtcbmNvbnN0IHBlbmRpbmdTYXZlcyA9IFtdO1xubGV0IHBlbmRpbmdFZGl0Qm94O1xubGV0IHBlbmRpbmdFZGl0Qm94VGV4dDtcbmxldCBsYXN0RWRpdE1pbGxpcyA9IDA7XG5sZXQgcnVubmluZ1NhdmVzID0gZmFsc2U7XG5cbi8qIEVudHJ5IHBvaW50LiBDaGVjayB3aGV0aGVyIHdlIGFyZSBpbiBhIGRpc2FtYmlndWF0aW9uIHBhZ2UuIElmIHNvLCBhZGQgYSBsaW5rIHRvIHN0YXJ0IHRoZSB0b29sICovXG5jb25zdCBpbnN0YWxsID0gKCkgPT4ge1xuXHRjb25zdCB7d2dBY3Rpb259ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAod2dBY3Rpb24gIT09ICd2aWV3JyB8fCAhaXNEaXNhbSgpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdCQoKCkgPT4ge1xuXHRcdGNvbnN0IHBvcnRsZXRJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwLWNhY3Rpb25zJykgPyAncC1jYWN0aW9ucycgOiAncC10Yic7XG5cdFx0Ly8gVGhpcyBpcyBhIFwiIChkaXNhbWJpZ3VhdGlvbilcIiBwYWdlXG5cdFx0aWYgKG5ldyBSZWdFeHAoY2ZnLmRpc2FtUmVnRXhwKS50ZXN0KGdldFRpdGxlKCkpKSB7XG5cdFx0XHRjb25zdCBzdGFydE1haW5MaW5rID0gJChcblx0XHRcdFx0bXcudXRpbC5hZGRQb3J0bGV0TGluayhwb3J0bGV0SWQsICcjJywgbWVzc2FnZXMuc3RhcnRNYWluLCAnY2EtZGlzYW1hc3Npc3QtbWFpbicpXG5cdFx0XHQpLm9uKCdjbGljaycsIHN0YXJ0TWFpbik7XG5cdFx0XHRjb25zdCBzdGFydFNhbWVMaW5rID0gJChcblx0XHRcdFx0bXcudXRpbC5hZGRQb3J0bGV0TGluayhwb3J0bGV0SWQsICcjJywgbWVzc2FnZXMuc3RhcnRTYW1lLCAnY2EtZGlzYW1hc3Npc3Qtc2FtZScpXG5cdFx0XHQpLm9uKCdjbGljaycsIHN0YXJ0U2FtZSk7XG5cdFx0XHRzdGFydExpbmsgPSBzdGFydE1haW5MaW5rLmFkZChzdGFydFNhbWVMaW5rKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3RhcnRMaW5rID0gJChtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgJyMnLCBtZXNzYWdlcy5zdGFydCwgJ2NhLWRpc2FtYXNzaXN0LXBhZ2UnKSkub24oXG5cdFx0XHRcdCdjbGljaycsXG5cdFx0XHRcdHN0YXJ0XG5cdFx0XHQpO1xuXHRcdH1cblx0fSk7XG59O1xuXG4vKiBTdGFydCB0aGUgdG9vbC4gRGlzcGxheSB0aGUgVUkgYW5kIGJlZ2luIGxvb2tpbmcgZm9yIGxpbmtzIHRvIGZpeCAqL1xuY29uc3Qgc3RhcnQgPSAoKSA9PiB7XG5cdGlmIChydW5uaW5nKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0cnVubmluZyA9IHRydWU7XG5cdGxpbmtzID0gW107XG5cdHBhZ2VDaGFuZ2VzID0gW107XG5cdGRpc3BsYXllZFBhZ2VzID0ge307XG5cdGVuc3VyZURBQkV4aXN0cygpLnRoZW4oKGNhbk1hcmspID0+IHtcblx0XHRjYW5NYXJrSW50ZW50aW9uYWxMaW5rcyA9IGNhbk1hcms7XG5cdFx0Y3JlYXRlVUkoKTtcblx0XHRhZGRVbmxvYWRDb25maXJtKCk7XG5cdFx0bWFya0Rpc2FtT3B0aW9ucygpO1xuXHRcdGNoZWNrRWRpdExpbWl0KCkudGhlbigoKSA9PiB7XG5cdFx0XHR0b2dnbGVQZW5kaW5nRWRpdEJveChmYWxzZSk7XG5cdFx0XHRkb1BhZ2UoKTtcblx0XHR9KTtcblx0fSk7XG59O1xuXG4vKiBTdGFydCBEaXNhbUFzc2lzdC4gRGlzYW1iaWd1YXRlIGluY29taW5nIGxpbmtzIHRvIHRoZSBjdXJyZW50IHBhZ2UsIHJlZ2FyZGxlc3Mgb2YgdGhlIHRpdGxlLiAqL1xuY29uc3Qgc3RhcnRTYW1lID0gKCkgPT4ge1xuXHRmb3JjZVNhbWVQYWdlID0gdHJ1ZTtcblx0c3RhcnQoKTtcbn07XG5cbi8qIFN0YXJ0IERpc2FtQXNzaXN0LiBJZiB0aGUgcGFnZSB0aXRsZSBlbmRzIHdpdGggXCIgKGRpc2FtYmlndWF0aW9uKVwiLCBkaXNhbWJpZ3VhdGUgbGlua3MgdG8gdGhlIHByaW1hcnkgdG9waWMgYXJ0aWNsZS4gT3RoZXJ3aXNlLCBkaXNhbWJpZ3VhdGUgbGlua3MgdG8gdGhlIGN1cnJlbnQgcGFnZS4gKi9cbmNvbnN0IHN0YXJ0TWFpbiA9ICgpID0+IHtcblx0Zm9yY2VTYW1lUGFnZSA9IGZhbHNlO1xuXHRzdGFydCgpO1xufTtcblxuLyogQ3JlYXRlIGFuZCBzaG93IHRoZSB1c2VyIGludGVyZmFjZS4gKi9cbmNvbnN0IGNyZWF0ZVVJID0gKCkgPT4ge1xuXHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0dWkgPSB7XG5cdFx0ZGlzcGxheTogJCgnPGRpdj4nKS5hZGRDbGFzcygnZGlzYW1hc3Npc3QtYm94IGRpc2FtYXNzaXN0LW1haW5ib3gnKSxcblx0XHRmaW5pc2hlZE1lc3NhZ2U6ICQoJzxkaXY+JykudGV4dChtZXNzYWdlcy5ub01vcmVMaW5rcykuaGlkZSgpLFxuXHRcdHBhZ2VUaXRsZUxpbmU6ICQoJzxzcGFuPicpLmFkZENsYXNzKCdkaXNhbWFzc2lzdC1wYWdldGl0bGVsaW5lJyksXG5cdFx0cGVuZGluZ0VkaXRDb3VudGVyOiAkKCc8ZGl2PicpLmFkZENsYXNzKCdkaXNhbWFzc2lzdC1lZGl0Y291bnRlcicpLFxuXHRcdGNvbnRleHQ6ICQoJzxzcGFuPicpLmFkZENsYXNzKCdkaXNhbWFzc2lzdC1jb250ZXh0JyksXG5cdFx0dW5kb0J1dHRvbjogY3JlYXRlQnV0dG9uKG1lc3NhZ2VzLnVuZG8sIHVuZG8pLFxuXHRcdG9taXRCdXR0b246IGNyZWF0ZUJ1dHRvbihtZXNzYWdlcy5vbWl0LCBvbWl0KSxcblx0XHRlbmRCdXR0b246IGNyZWF0ZUJ1dHRvbihtZXNzYWdlcy5jbG9zZSwgc2F2ZUFuZEVuZCksXG5cdFx0cmVmcmVzaEJ1dHRvbjogY3JlYXRlQnV0dG9uKG1lc3NhZ2VzLnJlZnJlc2gsIHJlZnJlc2gpLFxuXHRcdHRpdGxlQXNUZXh0QnV0dG9uOiBjcmVhdGVCdXR0b24obWVzc2FnZXMudGl0bGVBc1RleHQsIGNob29zZVRpdGxlRnJvbVByb21wdCksXG5cdFx0aW50ZW50aW9uYWxMaW5rQnV0dG9uOiBjYW5NYXJrSW50ZW50aW9uYWxMaW5rc1xuXHRcdFx0PyBjcmVhdGVCdXR0b24obWVzc2FnZXMuaW50ZW50aW9uYWxMaW5rLCBjaG9vc2VJbnRlbnRpb25hbExpbmspXG5cdFx0XHQ6ICQoJzxzcGFuPicpLFxuXHRcdGRpc2FtTmVlZGVkQnV0dG9uOiBjZmcuZGlzYW1OZWVkZWRUZXh0ID8gY3JlYXRlQnV0dG9uKG1lc3NhZ2VzLmRpc2FtTmVlZGVkLCBjaG9vc2VEaXNhbU5lZWRlZCkgOiAkKCc8c3Bhbj4nKSxcblx0XHRyZW1vdmVMaW5rQnV0dG9uOiBjcmVhdGVCdXR0b24obWVzc2FnZXMucmVtb3ZlTGluaywgY2hvb3NlTGlua1JlbW92YWwpLFxuXHR9O1xuXHRjb25zdCB0b3AgPSAkKCc8ZGl2PicpXG5cdFx0LmFkZENsYXNzKCdkaXNhbWFzc2lzdC10b3AnKVxuXHRcdC5hcHBlbmQoW3VpLnBlbmRpbmdFZGl0Q291bnRlciwgdWkuZmluaXNoZWRNZXNzYWdlLCB1aS5wYWdlVGl0bGVMaW5lXSk7XG5cdGNvbnN0IGxlZnRCdXR0b25zID0gJCgnPGRpdj4nKVxuXHRcdC5hZGRDbGFzcygnZGlzYW1hc3Npc3QtbGVmdGJ1dHRvbnMnKVxuXHRcdC5hcHBlbmQoW1xuXHRcdFx0dWkudGl0bGVBc1RleHRCdXR0b24sXG5cdFx0XHR1aS5yZW1vdmVMaW5rQnV0dG9uLFxuXHRcdFx0dWkuaW50ZW50aW9uYWxMaW5rQnV0dG9uLFxuXHRcdFx0dWkuZGlzYW1OZWVkZWRCdXR0b24sXG5cdFx0XHR1aS5vbWl0QnV0dG9uLFxuXHRcdF0pO1xuXHRjb25zdCByaWdodEJ1dHRvbnMgPSAkKCc8ZGl2PicpXG5cdFx0LmFkZENsYXNzKCdkaXNhbWFzc2lzdC1yaWdodGJ1dHRvbnMnKVxuXHRcdC5hcHBlbmQoW3VpLnVuZG9CdXR0b24sIHVpLnJlZnJlc2hCdXR0b24sIHVpLmVuZEJ1dHRvbl0pO1xuXHRjb25zdCBhbGxCdXR0b25zID0gJCgnPGRpdj4nKS5hZGRDbGFzcygnZGlzYW1hc3Npc3QtYWxsYnV0dG9ucycpLmFwcGVuZChbbGVmdEJ1dHRvbnMsIHJpZ2h0QnV0dG9uc10pO1xuXHR1aS5kaXNwbGF5LmFwcGVuZChbdG9wLCB1aS5jb250ZXh0LCBhbGxCdXR0b25zXSk7XG5cdHVwZGF0ZUVkaXRDb3VudGVyKCk7XG5cdHRvZ2dsZUFjdGlvbkJ1dHRvbnMoZmFsc2UpO1xuXHQvLyBJbnNlcnQgdGhlIFVJIGluIHRoZSBwYWdlXG5cdCRib2R5LmZpbmQoJyNtdy1jb250ZW50LXRleHQnKS5iZWZvcmUodWkuZGlzcGxheSk7XG5cdHVpLmRpc3BsYXkuaGlkZSgpLmZhZGVJbigpO1xufTtcblxuLyogSWYgdGhlcmUgYXJlIHBlbmRpbmcgY2hhbmdlcywgc2hvdyBhIGNvbmZpcm0gZGlhbG9nIGJlZm9yZSBjbG9zaW5nICovXG5jb25zdCBhZGRVbmxvYWRDb25maXJtID0gKCkgPT4ge1xuXHQkKHdpbmRvdykub24oJ2JlZm9yZXVubG9hZCcsICgpID0+IHtcblx0XHRpZiAocnVubmluZyAmJiBjaGVja0FjdHVhbENoYW5nZXMoKSkge1xuXHRcdFx0cmV0dXJuIG1lc3NhZ2VzLnBlbmRpbmc7XG5cdFx0fSBlbHNlIGlmIChlZGl0Q291bnQgIT09IDApIHtcblx0XHRcdHJldHVybiBtZXNzYWdlcy5lZGl0SW5Qcm9ncmVzcztcblx0XHR9XG5cdH0pO1xufTtcblxuLyogTWFyayB0aGUgZGlzYW1iaWd1YXRpb24gb3B0aW9ucyBhcyBzdWNoICovXG5jb25zdCBtYXJrRGlzYW1PcHRpb25zID0gKCkgPT4ge1xuXHRjb25zdCBvcHRpb25QYWdlVGl0bGVzID0gW107XG5cdGNvbnN0IG9wdGlvbk1hcmtlcnMgPSBbXTtcblx0Z2V0RGlzYW1PcHRpb25zKCkuZWFjaCgoX2luZGV4LCBlbGVtZW50KSA9PiB7XG5cdFx0Y29uc3QgbGluayA9ICQoZWxlbWVudCk7XG5cdFx0Y29uc3QgdGl0bGUgPSBleHRyYWN0UGFnZU5hbWUobGluayk7XG5cdFx0Y29uc3Qgb3B0aW9uTWFya2VyID0gJCgnPGE+Jylcblx0XHRcdC5hdHRyKCdocmVmJywgJyMnKVxuXHRcdFx0LmFkZENsYXNzKCdkaXNhbWFzc2lzdC1vcHRpb25tYXJrZXInKVxuXHRcdFx0LnRleHQobWVzc2FnZXMub3B0aW9uTWFya2VyKVxuXHRcdFx0Lm9uKCdjbGljaycsIChldikgPT4ge1xuXHRcdFx0XHRldi5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRjaG9vc2VSZXBsYWNlbWVudCh0aXRsZSk7XG5cdFx0XHR9KTtcblx0XHRsaW5rLmFmdGVyKG9wdGlvbk1hcmtlcik7XG5cdFx0b3B0aW9uTWFya2Vyc1tvcHRpb25NYXJrZXJzLmxlbmd0aF0gPSBvcHRpb25NYXJrZXI7XG5cdFx0b3B0aW9uUGFnZVRpdGxlc1tvcHRpb25QYWdlVGl0bGVzLmxlbmd0aF0gPSB0aXRsZTtcblx0fSk7XG5cdC8vIE5vdyBjaGVjayB0aGUgZGlzYW1iaWd1YXRpb24gb3B0aW9ucyBhbmQgZGlzcGxheSBhIGRpZmZlcmVudCBtZXNzYWdlIGZvciB0aG9zZSB0aGF0IGFyZVxuXHQvLyBhY3R1YWxseSB0aGUgc2FtZSBhcyB0aGUgdGFyZ2V0IHBhZ2Ugd2hlcmUgdGhlIGxpbmtzIGdvLCBhcyBjaG9vc2luZyB0aG9zZSBvcHRpb25zIGRvZXNuJ3QgcmVhbGx5XG5cdC8vIGFjY29tcGxpc2ggYW55dGhpbmcgKGV4Y2VwdCBieXBhc3NpbmcgcmVkaXJlY3RzLCB3aGljaCBtaWdodCBiZSB1c2VmdWwgaW4gc29tZSBjYXNlcylcblx0Y29uc3QgdGFyZ2V0UGFnZSA9IGdldFRhcmdldFBhZ2UoKTtcblx0ZmV0Y2hSZWRpcmVjdHMoWy4uLm9wdGlvblBhZ2VUaXRsZXMsIC4uLnRhcmdldFBhZ2VdKVxuXHRcdC5kb25lKChyZWRpcmVjdHMpID0+IHtcblx0XHRcdGNvbnN0IGVuZFRhcmdldFBhZ2UgPSByZXNvbHZlUmVkaXJlY3QodGFyZ2V0UGFnZSwgcmVkaXJlY3RzKTtcblx0XHRcdGZvciAoY29uc3QgW2lpLCBvcHRpb25QYWdlVGl0bGVdIG9mIG9wdGlvblBhZ2VUaXRsZXMuZW50cmllcygpKSB7XG5cdFx0XHRcdGNvbnN0IGVuZE9wdGlvblRpdGxlID0gcmVzb2x2ZVJlZGlyZWN0KG9wdGlvblBhZ2VUaXRsZSwgcmVkaXJlY3RzKTtcblx0XHRcdFx0aWYgKGlzU2FtZVBhZ2Uob3B0aW9uUGFnZVRpdGxlLCB0YXJnZXRQYWdlKSkge1xuXHRcdFx0XHRcdG9wdGlvbk1hcmtlcnNbaWldLnRleHQobWVzc2FnZXMudGFyZ2V0T3B0aW9uTWFya2VyKS5hZGRDbGFzcygnZGlzYW1hc3Npc3QtY3Vycm9wdGlvbm1hcmtlcicpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGlzU2FtZVBhZ2UoZW5kT3B0aW9uVGl0bGUsIGVuZFRhcmdldFBhZ2UpKSB7XG5cdFx0XHRcdFx0b3B0aW9uTWFya2Vyc1tpaV0udGV4dChtZXNzYWdlcy5yZWRpcmVjdE9wdGlvbk1hcmtlcikuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LWN1cnJvcHRpb25tYXJrZXInKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pXG5cdFx0LmZhaWwoZXJyb3IpO1xufTtcblxuLyogQ2hlY2sgd2hldGhlciBpbnRlbnRpb25hbCBsaW5rcyB0byBkaXNhbWJpZ3VhdGlvbiBwYWdlcyBjYW4gYmUgZXhwbGljaXRseSBtYXJrZWQvKiAqIGFzIHN1Y2ggaW4gdGhpcyB3aWtpLiBJZiBzbywgZW5zdXJlIHRoYXQgYSBcIkZvbyAoZGlzYW1iaWd1YXRpb24pXCIgcGFnZSBleGlzdHMuLyogKiBSZXR1cm5zIGEgalF1ZXJ5IHByb21pc2UgKi9cbmNvbnN0IGVuc3VyZURBQkV4aXN0cyA9ICgpID0+IHtcblx0Y29uc3QgZGVmZXJyZWQgPSBuZXcgJC5EZWZlcnJlZCgpO1xuXHRjb25zdCB0aXRsZSA9IGdldFRpdGxlKCk7XG5cdC8vIFRoYXQgY29uY2VwdCBkb2Vzbid0IGV4aXN0IGluIHRoaXMgd2lraS5cblx0aWYgKCFjZmcuaW50ZW50aW9uYWxMaW5rT3B0aW9uKSB7XG5cdFx0ZGVmZXJyZWQucmVzb2x2ZShmYWxzZSk7XG5cdFx0Ly8gXCJGb28gKGRpc2FtYmlndWF0aW9uKVwiIGV4aXN0czogaXQncyB0aGUgY3VycmVudCBwYWdlLlxuXHR9IGVsc2UgaWYgKG5ldyBSZWdFeHAoY2ZnLmRpc2FtUmVnRXhwKS5leGVjKHRpdGxlKSkge1xuXHRcdGRlZmVycmVkLnJlc29sdmUodHJ1ZSk7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc3QgZGlzYW1UaXRsZSA9IGNmZy5kaXNhbUZvcm1hdC5yZXBsYWNlKCckMScsIHRpdGxlKTtcblx0XHRsb2FkUGFnZShkaXNhbVRpdGxlKVxuXHRcdFx0LmRvbmUoKHBhZ2UpID0+IHtcblx0XHRcdFx0Ly8gXCJGb28gKGRpc2FtYmlndWF0aW9uKVwiIGRvZXNuJ3QgZXhpc3QuXG5cdFx0XHRcdGlmIChwYWdlLm1pc3NpbmcpIHtcblx0XHRcdFx0XHQvLyBXZSB0cnkgdG8gY3JlYXRlIGl0XG5cdFx0XHRcdFx0cGFnZS5jb250ZW50ID0gY2ZnLnJlZGlyZWN0VG9EaXNhbS5yZXBsYWNlKCckMScsIHRpdGxlKTtcblx0XHRcdFx0XHRjb25zdCBzdW1tYXJ5ID0gbWVzc2FnZXMucmVkaXJlY3RTdW1tYXJ5LnJlcGxhY2UoJyQxJywgdGl0bGUpO1xuXHRcdFx0XHRcdHNhdmVQYWdlKGRpc2FtVGl0bGUsIHBhZ2UsIHN1bW1hcnksIGZhbHNlLCB0cnVlKVxuXHRcdFx0XHRcdFx0LmRvbmUoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHRydWUpO1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdC5mYWlsKChkZXNjcmlwdGlvbikgPT4ge1xuXHRcdFx0XHRcdFx0XHRlcnJvcihkZXNjcmlwdGlvbik7XG5cdFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUoZmFsc2UpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0Ly8gSXQgZG9lcyBleGlzdFxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUodHJ1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0XHQuZmFpbCgoZGVzY3JpcHRpb24pID0+IHtcblx0XHRcdFx0ZXJyb3IoZGVzY3JpcHRpb24pO1xuXHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKGZhbHNlKTtcblx0XHRcdH0pO1xuXHR9XG5cdHJldHVybiBkZWZlcnJlZC5wcm9taXNlKCk7XG59O1xuXG4vKiBDaGVjayB3aGV0aGVyIHRoZSBlZGl0IGNvb2xkb3duIGFwcGxpZXMgYW5kIHNldHMgZWRpdExpbWl0IGFjY29yZGluZ2x5Li8qICogUmV0dXJucyBhIGpRdWVyeSBwcm9taXNlICovXG5jb25zdCBjaGVja0VkaXRMaW1pdCA9ICgpID0+IHtcblx0Y29uc3QgZGVmZXJyZWQgPSBuZXcgJC5EZWZlcnJlZCgpO1xuXHRpZiAoY2ZnLmVkaXRDb29sZG93biA8PSAwKSB7XG5cdFx0ZWRpdExpbWl0ID0gZmFsc2U7XG5cdFx0ZGVmZXJyZWQucmVzb2x2ZSgpO1xuXHR9IGVsc2Uge1xuXHRcdGZldGNoUmlnaHRzKClcblx0XHRcdC5kb25lKChyaWdodHMpID0+IHtcblx0XHRcdFx0ZWRpdExpbWl0ID0gIXJpZ2h0cy5pbmNsdWRlcygnYm90Jyk7XG5cdFx0XHR9KVxuXHRcdFx0LmZhaWwoKGRlc2NyaXB0aW9uKSA9PiB7XG5cdFx0XHRcdGVycm9yKGRlc2NyaXB0aW9uKTtcblx0XHRcdFx0ZWRpdExpbWl0ID0gdHJ1ZTtcblx0XHRcdH0pXG5cdFx0XHQuYWx3YXlzKCgpID0+IHtcblx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZSgpO1xuXHRcdFx0fSk7XG5cdH1cblx0cmV0dXJuIGRlZmVycmVkLnByb21pc2UoKTtcbn07XG5cbi8qIEZpbmQgYW5kIGFzayB0aGUgdXNlciB0byBmaXggYWxsIHRoZSBpbmNvbWluZyBsaW5rcyB0byB0aGUgZGlzYW1iaWd1YXRpb24gKFwidGFyZ2V0XCIpLyogKiBwYWdlIGZyb20gYSBzaW5nbGUgXCJvcmlnaW5cIiBwYWdlICovXG5jb25zdCBkb1BhZ2UgPSAoKSA9PiB7XG5cdGlmIChwYWdlQ2hhbmdlcy5sZW5ndGggPiBjZmcuaGlzdG9yeVNpemUpIHtcblx0XHRhcHBseUNoYW5nZShwYWdlQ2hhbmdlcy5zaGlmdCgpKTtcblx0fVxuXHRpZiAobGlua3MubGVuZ3RoKSB7XG5cdFx0Y3VycmVudFBhZ2VUaXRsZSA9IGxpbmtzLnNoaWZ0KCk7XG5cdFx0ZGlzcGxheWVkUGFnZXNbY3VycmVudFBhZ2VUaXRsZV0gPSB0cnVlO1xuXHRcdHRvZ2dsZUFjdGlvbkJ1dHRvbnMoZmFsc2UpO1xuXHRcdGxvYWRQYWdlKGN1cnJlbnRQYWdlVGl0bGUpXG5cdFx0XHQuZG9uZSgoZGF0YSkgPT4ge1xuXHRcdFx0XHRjdXJyZW50UGFnZVBhcmFtZXRlcnMgPSBkYXRhO1xuXHRcdFx0XHRjdXJyZW50TGluayA9IHVuZGVmaW5lZDtcblx0XHRcdFx0ZG9MaW5rKCk7XG5cdFx0XHR9KVxuXHRcdFx0LmZhaWwoZXJyb3IpO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnN0IHRhcmdldFBhZ2UgPSBnZXRUYXJnZXRQYWdlKCk7XG5cdFx0Z2V0QmFja2xpbmtzKHRhcmdldFBhZ2UpXG5cdFx0XHQuZG9uZSgoYmFja2xpbmtzLCBwYWdlVGl0bGVzKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHBlbmRpbmcgPSB7fTtcblx0XHRcdFx0Zm9yIChjb25zdCBlbCBvZiBwZW5kaW5nU2F2ZXMpIHtcblx0XHRcdFx0XHRwZW5kaW5nW2VsWzBdXSA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0cG9zc2libGVCYWNrbGlua0Rlc3RpbmF0aW9ucyA9IHBhZ2VUaXRsZXMuZmlsdGVyKCh0KSA9PiB7XG5cdFx0XHRcdFx0aWYgKHQgPT09IHRhcmdldFBhZ2UpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gcmVtb3ZlRGlzYW0odCkgIT09IHRhcmdldFBhZ2U7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQvLyBPbmx5IGluY29taW5nIGxpbmtzIGZyb20gcGFnZXMgd2UgaGF2ZW4ndCBzZWVuIHlldCBhbmQgd2UgYXJlbid0IGN1cnJlbnRseVxuXHRcdFx0XHQvLyBzYXZpbmcgKGRpc3BsYXllZFBhZ2VzIGlzIHJlc2V0IHdoZW4gdGhlIHRvb2wgaXMgY2xvc2VkIGFuZCBvcGVuZWQgYWdhaW4sXG5cdFx0XHRcdC8vIHdoaWxlIHRoZSBsaXN0IG9mIHBlbmRpbmcgY2hhbmdlcyBpc24ndDsgaWYgdGhlIGVkaXQgY29vbGRvd24gaXMgZGlzYWJsZWQsXG5cdFx0XHRcdC8vIGl0IHdpbGwgYmUgZW1wdHkpXG5cdFx0XHRcdGxpbmtzID0gYmFja2xpbmtzLmZpbHRlcigoZWwpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gIWRpc3BsYXllZFBhZ2VzW2VsXSAmJiAhcGVuZGluZ1tlbF07XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRpZiAobGlua3MubGVuZ3RoKSB7XG5cdFx0XHRcdFx0ZG9QYWdlKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dXBkYXRlQ29udGV4dCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdFx0LmZhaWwoZXJyb3IpO1xuXHR9XG59O1xuXG4vKiBGaW5kIGFuZCBhc2sgdGhlIHVzZXIgdG8gZml4IGEgc2luZ2xlIGluY29taW5nIGxpbmsgdG8gdGhlIGRpc2FtYmlndWF0aW9uIChcInRhcmdldFwiKS8qICogcGFnZSAqL1xuY29uc3QgZG9MaW5rID0gKCkgPT4ge1xuXHRjdXJyZW50TGluayA9IGV4dHJhY3RMaW5rVG9QYWdlKFxuXHRcdGN1cnJlbnRQYWdlUGFyYW1ldGVycy5jb250ZW50LFxuXHRcdHBvc3NpYmxlQmFja2xpbmtEZXN0aW5hdGlvbnMsXG5cdFx0Y3VycmVudExpbmsgPyBjdXJyZW50TGluay5lbmQgOiAwXG5cdCk7XG5cdGlmIChjdXJyZW50TGluaykge1xuXHRcdHVwZGF0ZUNvbnRleHQoKTtcblx0fSBlbHNlIHtcblx0XHRkb1BhZ2UoKTtcblx0fVxufTtcblxuLyogUmVwbGFjZSB0aGUgdGFyZ2V0IG9mIGEgbGluayB3aXRoIGEgZGlmZmVyZW50IG9uZS8qICogcGFnZVRpdGxlOiBOZXcgbGluayB0YXJnZXQvKiAqIGV4dHJhOiBBZGRpdGlvbmFsIHRleHQgYWZ0ZXIgdGhlIGxpbmsgKG9wdGlvbmFsKS8qICogc3VtbWFyeTogQ2hhbmdlIHN1bW1hcnkgKG9wdGlvbmFsKSAqL1xuY29uc3QgY2hvb3NlUmVwbGFjZW1lbnQgPSAocGFnZVRpdGxlLCBleHRyYSwgc3VtbWFyeSkgPT4ge1xuXHRpZiAoY2hvb3NpbmcpIHtcblx0XHRjaG9vc2luZyA9IGZhbHNlO1xuXHRcdHN1bW1hcnkgfHw9IHBhZ2VUaXRsZSA/IG1lc3NhZ2VzLnN1bW1hcnlDaGFuZ2VkLnJlcGxhY2UoJyQxJywgcGFnZVRpdGxlKSA6IG1lc3NhZ2VzLnN1bW1hcnlPbWl0dGVkO1xuXHRcdGFkZENoYW5nZShjdXJyZW50UGFnZVRpdGxlLCBjdXJyZW50UGFnZVBhcmFtZXRlcnMsIGN1cnJlbnRQYWdlUGFyYW1ldGVycy5jb250ZW50LCBjdXJyZW50TGluaywgc3VtbWFyeSk7XG5cdFx0aWYgKHBhZ2VUaXRsZSAmJiAocGFnZVRpdGxlICE9PSBnZXRUYXJnZXRQYWdlKCkgfHwgZXh0cmEpKSB7XG5cdFx0XHRjdXJyZW50UGFnZVBhcmFtZXRlcnMuY29udGVudCA9IHJlcGxhY2VMaW5rKFxuXHRcdFx0XHRjdXJyZW50UGFnZVBhcmFtZXRlcnMuY29udGVudCxcblx0XHRcdFx0cGFnZVRpdGxlLFxuXHRcdFx0XHRjdXJyZW50TGluayxcblx0XHRcdFx0ZXh0cmEgfHwgJydcblx0XHRcdCk7XG5cdFx0fVxuXHRcdGRvTGluaygpO1xuXHR9XG59O1xuXG4vKiBSZXBsYWNlIHRoZSBsaW5rIHdpdGggYW4gZXhwbGljaXQgbGluayB0byB0aGUgZGlzYW1iaWd1YXRpb24gcGFnZSAqL1xuY29uc3QgY2hvb3NlSW50ZW50aW9uYWxMaW5rID0gKCkgPT4ge1xuXHRjb25zdCBkaXNhbVRpdGxlID0gY2ZnLmRpc2FtRm9ybWF0LnJlcGxhY2UoJyQxJywgZ2V0VGFyZ2V0UGFnZSgpKTtcblx0Y2hvb3NlUmVwbGFjZW1lbnQoZGlzYW1UaXRsZSwgJycsIG1lc3NhZ2VzLnN1bW1hcnlJbnRlbnRpb25hbCk7XG59O1xuXG4vKiBQcm9tcHQgZm9yIGFuIGFsdGVybmF0aXZlIGxpbmsgdGFyZ2V0IGFuZCB1c2UgaXQgYXMgYSByZXBsYWNlbWVudCAqL1xuY29uc3QgY2hvb3NlVGl0bGVGcm9tUHJvbXB0ID0gKCkgPT4ge1xuXHRjb25zdCB0aXRsZSA9IHByb21wdChtZXNzYWdlcy50aXRsZUFzVGV4dFByb21wdCk7XG5cdGlmICh0aXRsZSAhPT0gbnVsbCkge1xuXHRcdGNob29zZVJlcGxhY2VtZW50KHRpdGxlKTtcblx0fVxufTtcblxuLyogUmVtb3ZlIHRoZSBjdXJyZW50IGxpbmssIGxlYXZpbmcgdGhlIHRleHQgdW5jaGFuZ2VkICovXG5jb25zdCBjaG9vc2VMaW5rUmVtb3ZhbCA9ICgpID0+IHtcblx0aWYgKGNob29zaW5nKSB7XG5cdFx0Y29uc3Qgc3VtbWFyeSA9IG1lc3NhZ2VzLnN1bW1hcnlSZW1vdmVkO1xuXHRcdGFkZENoYW5nZShjdXJyZW50UGFnZVRpdGxlLCBjdXJyZW50UGFnZVBhcmFtZXRlcnMsIGN1cnJlbnRQYWdlUGFyYW1ldGVycy5jb250ZW50LCBjdXJyZW50TGluaywgc3VtbWFyeSk7XG5cdFx0Y3VycmVudFBhZ2VQYXJhbWV0ZXJzLmNvbnRlbnQgPSByZW1vdmVMaW5rKGN1cnJlbnRQYWdlUGFyYW1ldGVycy5jb250ZW50LCBjdXJyZW50TGluayk7XG5cdFx0ZG9MaW5rKCk7XG5cdH1cbn07XG5cbi8qIEFkZCBhIFwiZGlzYW1iaWd1YXRpb24gbmVlZGVkXCIgdGVtcGxhdGUgYWZ0ZXIgdGhlIGxpbmsgKi9cbmNvbnN0IGNob29zZURpc2FtTmVlZGVkID0gKCkgPT4ge1xuXHRjaG9vc2VSZXBsYWNlbWVudChjdXJyZW50TGluay50aXRsZSwgY2ZnLmRpc2FtTmVlZGVkVGV4dCwgbWVzc2FnZXMuc3VtbWFyeUhlbHBOZWVkZWQpO1xufTtcblxuLyogVW5kbyB0aGUgbGFzdCBjaGFuZ2UgKi9cbmNvbnN0IHVuZG8gPSAoKSA9PiB7XG5cdGlmIChwYWdlQ2hhbmdlcy5sZW5ndGgpIHtcblx0XHRjb25zdCBsYXN0UGFnZSA9IHBhZ2VDaGFuZ2VzLmF0KC0xKTtcblx0XHRpZiAoY3VycmVudFBhZ2VUaXRsZSAhPT0gbGFzdFBhZ2UudGl0bGUpIHtcblx0XHRcdGxpbmtzLnVuc2hpZnQoY3VycmVudFBhZ2VUaXRsZSk7XG5cdFx0XHRjdXJyZW50UGFnZVRpdGxlID0gbGFzdFBhZ2UudGl0bGU7XG5cdFx0fVxuXHRcdGN1cnJlbnRQYWdlUGFyYW1ldGVycyA9IGxhc3RQYWdlLnBhZ2U7XG5cdFx0Y3VycmVudFBhZ2VQYXJhbWV0ZXJzLmNvbnRlbnQgPSBsYXN0UGFnZS5jb250ZW50QmVmb3JlLnBvcCgpO1xuXHRcdGN1cnJlbnRMaW5rID0gbGFzdFBhZ2UubGlua3MucG9wKCk7XG5cdFx0bGFzdFBhZ2Uuc3VtbWFyeS5wb3AoKTtcblx0XHRpZiAoIWxhc3RQYWdlLmNvbnRlbnRCZWZvcmUubGVuZ3RoKSB7XG5cdFx0XHRwYWdlQ2hhbmdlcy5wb3AoKTtcblx0XHR9XG5cdFx0dXBkYXRlQ29udGV4dCgpO1xuXHR9XG59O1xuXG4vKiBPbWl0IHRoZSBjdXJyZW50IGxpbmsgd2l0aG91dCBtYWtpbmcgYSBjaGFuZ2UgKi9cbmNvbnN0IG9taXQgPSAoKSA9PiB7XG5cdGNob29zZVJlcGxhY2VtZW50KCk7XG59O1xuXG4vKiBTYXZlIGFsbCB0aGUgcGVuZGluZyBjaGFuZ2VzIGFuZCByZXN0YXJ0IHRoZSB0b29sLiAqL1xuY29uc3QgcmVmcmVzaCA9ICgpID0+IHtcblx0c2F2ZUFuZEVuZCgpO1xuXHRzdGFydCgpO1xufTtcblxuLyogRW5hYmxlIG9yIGRpc2FibGUgdGhlIGJ1dHRvbnMgdGhhdCBjYW4gcGVyZm9ybSBhY3Rpb25zIG9uIGEgcGFnZSBvciBjaGFuZ2UgdGhlIGN1cnJlbnQgbGluay4vKiAqIGVuYWJsZWQ6IFdoZXRoZXIgdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIGJ1dHRvbnMgKi9cbmNvbnN0IHRvZ2dsZUFjdGlvbkJ1dHRvbnMgPSAoZW5hYmxlZCkgPT4ge1xuXHRjb25zdCBhZmZlY3RlZEJ1dHRvbnMgPSBbXG5cdFx0dWkub21pdEJ1dHRvbixcblx0XHR1aS50aXRsZUFzVGV4dEJ1dHRvbixcblx0XHR1aS5yZW1vdmVMaW5rQnV0dG9uLFxuXHRcdHVpLmludGVudGlvbmFsTGlua0J1dHRvbixcblx0XHR1aS5kaXNhbU5lZWRlZEJ1dHRvbixcblx0XHR1aS51bmRvQnV0dG9uLFxuXHRdO1xuXHRmb3IgKGNvbnN0IGJ1dHRvbiBvZiBhZmZlY3RlZEJ1dHRvbnMpIHtcblx0XHRidXR0b24ucHJvcCgnZGlzYWJsZWQnLCAhZW5hYmxlZCk7XG5cdH1cbn07XG5cbi8qIFNob3cgb3IgaGlkZSB0aGUgJ25vIG1vcmUgbGlua3MnIG1lc3NhZ2UvKiAqIHNob3c6IFdoZXRoZXIgdG8gc2hvdyBvciBoaWRlIHRoZSBtZXNzYWdlICovXG5jb25zdCB0b2dnbGVGaW5pc2hlZE1lc3NhZ2UgPSAoc2hvdykgPT4ge1xuXHR0b2dnbGVBY3Rpb25CdXR0b25zKCFzaG93KTtcblx0dWkudW5kb0J1dHRvbi5wcm9wKCdkaXNhYmxlZCcsICFwYWdlQ2hhbmdlcy5sZW5ndGgpO1xuXHR1aS5maW5pc2hlZE1lc3NhZ2UudG9nZ2xlKHNob3cpO1xuXHR1aS5wYWdlVGl0bGVMaW5lLnRvZ2dsZSghc2hvdyk7XG5cdHVpLmNvbnRleHQudG9nZ2xlKCFzaG93KTtcbn07XG5cbmNvbnN0IHRvZ2dsZVBlbmRpbmdFZGl0Qm94ID0gKHNob3cpID0+IHtcblx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdGlmICghcGVuZGluZ0VkaXRCb3gpIHtcblx0XHRwZW5kaW5nRWRpdEJveCA9ICQoJzxkaXY+JykuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LWJveCBkaXNhbWFzc2lzdC1wZW5kaW5nZWRpdGJveCcpO1xuXHRcdHBlbmRpbmdFZGl0Qm94VGV4dCA9ICQoJzxkaXY+Jyk7XG5cdFx0cGVuZGluZ0VkaXRCb3guYXBwZW5kKHBlbmRpbmdFZGl0Qm94VGV4dCkuaGlkZSgpO1xuXHRcdGlmIChlZGl0TGltaXQpIHtcblx0XHRcdHBlbmRpbmdFZGl0Qm94LmFwcGVuZCgkKCc8ZGl2PicpLnRleHQobWVzc2FnZXMucGVuZGluZ0VkaXRCb3hMaW1pdGVkKS5hZGRDbGFzcygnZGlzYW1hc3Npc3Qtc3VidGl0bGUnKSk7XG5cdFx0fVxuXHRcdCRib2R5LmZpbmQoJyNtdy1jb250ZW50LXRleHQnKS5iZWZvcmUocGVuZGluZ0VkaXRCb3gpO1xuXHRcdHVwZGF0ZUVkaXRDb3VudGVyKCk7XG5cdH1cblx0aWYgKHNob3cpIHtcblx0XHRwZW5kaW5nRWRpdEJveC5mYWRlSW4oKTtcblx0fSBlbHNlIHtcblx0XHRwZW5kaW5nRWRpdEJveC5mYWRlT3V0KCk7XG5cdH1cbn07XG5cbmNvbnN0IG5vdGlmeUNvbXBsZXRpb24gPSAoKSA9PiB7XG5cdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRjb25zdCBvbGRUaXRsZSA9IGRvY3VtZW50LnRpdGxlO1xuXHRkb2N1bWVudC50aXRsZSA9IG1lc3NhZ2VzLm5vdGlmeUNoYXJhY3RlciArIGRvY3VtZW50LnRpdGxlO1xuXHQkYm9keS5vbmUoJ21vdXNlbW92ZScsICgpID0+IHtcblx0XHRkb2N1bWVudC50aXRsZSA9IG9sZFRpdGxlO1xuXHR9KTtcbn07XG5cbi8qIFVwZGF0ZSB0aGUgZGlzcGxheWVkIGluZm9ybWF0aW9uIHRvIG1hdGNoIHRoZSBjdXJyZW50IGxpbmsvKiAqIG9yIGxhY2sgdGhlcmVvZiAqL1xuY29uc3QgdXBkYXRlQ29udGV4dCA9ICgpID0+IHtcblx0dXBkYXRlRWRpdENvdW50ZXIoKTtcblx0aWYgKGN1cnJlbnRMaW5rKSB7XG5cdFx0dWkucGFnZVRpdGxlTGluZS5odG1sKFxuXHRcdFx0bWVzc2FnZXMucGFnZVRpdGxlTGluZVxuXHRcdFx0XHQucmVwbGFjZShcblx0XHRcdFx0XHQnJDEnLFxuXHRcdFx0XHRcdG13LnV0aWwuZ2V0VXJsKGN1cnJlbnRQYWdlVGl0bGUsIHtcblx0XHRcdFx0XHRcdHJlZGlyZWN0OiAnbm8nLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdClcblx0XHRcdFx0LnJlcGxhY2UoJyQyJywgbXcuaHRtbC5lc2NhcGUoY3VycmVudFBhZ2VUaXRsZSkpXG5cdFx0KTtcblx0XHRjb25zdCBjb250ZXh0ID0gZXh0cmFjdENvbnRleHQoY3VycmVudFBhZ2VQYXJhbWV0ZXJzLmNvbnRlbnQsIGN1cnJlbnRMaW5rKTtcblx0XHR1aS5jb250ZXh0XG5cdFx0XHQuZW1wdHkoKVxuXHRcdFx0LmFwcGVuZCgkKCc8c3Bhbj4nKS50ZXh0KGNvbnRleHRbMF0pKVxuXHRcdFx0LmFwcGVuZCgkKCc8c3Bhbj4nKS50ZXh0KGNvbnRleHRbMV0pLmFkZENsYXNzKCdkaXNhbWFzc2lzdC1pbmNsaW5rJykpXG5cdFx0XHQuYXBwZW5kKCQoJzxzcGFuPicpLnRleHQoY29udGV4dFsyXSkpO1xuXHRcdGNvbnN0IG51bUxpbmVzID0gTWF0aC5jZWlsKHVpLmNvbnRleHQuaGVpZ2h0KCkgLyBOdW1iZXIucGFyc2VGbG9hdCh1aS5jb250ZXh0LmNzcygnbGluZS1oZWlnaHQnKSkpO1xuXHRcdGlmIChudW1MaW5lcyA8IGNmZy5udW1Db250ZXh0TGluZXMpIHtcblx0XHRcdC8vIEFkZCBjZmcubnVtQ29udGV4dExpbmVzIC0gbnVtTGluZXMgKyAxIGxpbmUgYnJlYWtzLCBzbyB0aGF0IHRoZSB0b3RhbCBudW1iZXJcblx0XHRcdC8vIG9mIGxpbmVzIGlzIGNmZy5udW1Db250ZXh0TGluZXNcblx0XHRcdHVpLmNvbnRleHQuYXBwZW5kKFxuXHRcdFx0XHRBcnJheS5mcm9tKHtcblx0XHRcdFx0XHRsZW5ndGg6IGNmZy5udW1Db250ZXh0TGluZXMgLSBudW1MaW5lcyArIDIsXG5cdFx0XHRcdH0pLmpvaW4oJzxicj4nKVxuXHRcdFx0KTtcblx0XHR9XG5cdFx0dG9nZ2xlRmluaXNoZWRNZXNzYWdlKGZhbHNlKTtcblx0XHR1aS51bmRvQnV0dG9uLnByb3AoJ2Rpc2FibGVkJywgIXBhZ2VDaGFuZ2VzLmxlbmd0aCk7XG5cdFx0dWkucmVtb3ZlTGlua0J1dHRvbi5wcm9wKCdkaXNhYmxlZCcsIGN1cnJlbnRQYWdlUGFyYW1ldGVycy5yZWRpcmVjdCk7XG5cdFx0dWkuaW50ZW50aW9uYWxMaW5rQnV0dG9uLnByb3AoJ2Rpc2FibGVkJywgY3VycmVudFBhZ2VQYXJhbWV0ZXJzLnJlZGlyZWN0KTtcblx0XHR1aS5kaXNhbU5lZWRlZEJ1dHRvbi5wcm9wKCdkaXNhYmxlZCcsIGN1cnJlbnRQYWdlUGFyYW1ldGVycy5yZWRpcmVjdCB8fCBjdXJyZW50TGluay5oYXNEaXNhbVRlbXBsYXRlKTtcblx0XHRjaG9vc2luZyA9IHRydWU7XG5cdH0gZWxzZSB7XG5cdFx0dG9nZ2xlRmluaXNoZWRNZXNzYWdlKHRydWUpO1xuXHR9XG59O1xuXG4vKiBVcGRhdGUgdGhlIGNvdW50IG9mIHBlbmRpbmcgY2hhbmdlcyAqL1xuY29uc3QgdXBkYXRlRWRpdENvdW50ZXIgPSAoKSA9PiB7XG5cdGlmICh1aS5wZW5kaW5nRWRpdENvdW50ZXIpIHtcblx0XHR1aS5wZW5kaW5nRWRpdENvdW50ZXIudGV4dChcblx0XHRcdG1lc3NhZ2VzLnBlbmRpbmdFZGl0Q291bnRlci5yZXBsYWNlKCckMScsIGVkaXRDb3VudCkucmVwbGFjZSgnJDInLCBjb3VudEFjdHVhbGx5Q2hhbmdlZEZ1bGx5Q2hlY2tlZFBhZ2VzKCkpXG5cdFx0KTtcblx0fVxuXHRpZiAocGVuZGluZ0VkaXRCb3gpIHtcblx0XHRpZiAoZWRpdENvdW50ID09PSAwICYmICFydW5uaW5nKSB7XG5cdFx0XHR0b2dnbGVQZW5kaW5nRWRpdEJveChmYWxzZSk7XG5cdFx0XHRub3RpZnlDb21wbGV0aW9uKCk7XG5cdFx0fVxuXHRcdGxldCB0ZXh0Q29udGVudCA9IGVkaXRDb3VudDtcblx0XHRpZiAoZWRpdExpbWl0KSB7XG5cdFx0XHR0ZXh0Q29udGVudCA9IG1lc3NhZ2VzLnBlbmRpbmdFZGl0Qm94VGltZUVzdGltYXRpb25cblx0XHRcdFx0LnJlcGxhY2UoJyQxJywgZWRpdENvdW50KVxuXHRcdFx0XHQucmVwbGFjZSgnJDInLCBzZWNvbmRzVG9ISE1NU1MoY2ZnLmVkaXRDb29sZG93biAqIGVkaXRDb3VudCkpO1xuXHRcdH1cblx0XHRwZW5kaW5nRWRpdEJveFRleHQudGV4dChtZXNzYWdlcy5wZW5kaW5nRWRpdEJveC5yZXBsYWNlKCckMScsIHRleHRDb250ZW50KSk7XG5cdH1cbn07XG5cbi8qIEFwcGx5IHRoZSBjaGFuZ2VzIG1hZGUgdG8gYW4gXCJvcmlnaW5cIiBwYWdlLyogKiBwYWdlQ2hhbmdlOiBDaGFuZ2UgdGhhdCB3aWxsIGJlIHNhdmVkICovXG5jb25zdCBhcHBseUNoYW5nZSA9IChwYWdlQ2hhbmdlKSA9PiB7XG5cdGlmIChwYWdlQ2hhbmdlLnBhZ2UuY29udGVudCAhPT0gcGFnZUNoYW5nZS5jb250ZW50QmVmb3JlWzBdKSB7XG5cdFx0ZWRpdENvdW50Kys7XG5cdFx0Y29uc3QgY2hhbmdlU3VtbWFyaWVzID0gcGFnZUNoYW5nZS5zdW1tYXJ5LmpvaW4obWVzc2FnZXMuc3VtbWFyeVNlcGFyYXRvcik7XG5cdFx0Y29uc3Qgc3VtbWFyeSA9IG1lc3NhZ2VzLnN1bW1hcnkucmVwbGFjZSgnJDEnLCBnZXRUYXJnZXRQYWdlKCkpLnJlcGxhY2UoJyQyJywgY2hhbmdlU3VtbWFyaWVzKTtcblx0XHRjb25zdCBzYXZlID0gZWRpdExpbWl0ID8gc2F2ZVdpdGhDb29sZG93biA6IHNhdmVQYWdlO1xuXHRcdHNhdmUocGFnZUNoYW5nZS50aXRsZSwgcGFnZUNoYW5nZS5wYWdlLCBzdW1tYXJ5LCB0cnVlLCB0cnVlKVxuXHRcdFx0LmFsd2F5cygoKSA9PiB7XG5cdFx0XHRcdGlmIChlZGl0Q291bnQgPiAwKSB7XG5cdFx0XHRcdFx0ZWRpdENvdW50LS07XG5cdFx0XHRcdH1cblx0XHRcdFx0dXBkYXRlRWRpdENvdW50ZXIoKTtcblx0XHRcdH0pXG5cdFx0XHQuZmFpbChlcnJvcik7XG5cdFx0dXBkYXRlRWRpdENvdW50ZXIoKTtcblx0fVxufTtcblxuLyogU2F2ZSBhbGwgdGhlIHBlbmRpbmcgY2hhbmdlcyAqL1xuY29uc3QgYXBwbHlBbGxDaGFuZ2VzID0gKCkgPT4ge1xuXHRmb3IgKGNvbnN0IHBhZ2VDaGFuZ2Ugb2YgcGFnZUNoYW5nZXMpIHtcblx0XHRhcHBseUNoYW5nZShwYWdlQ2hhbmdlKTtcblx0fVxuXHRwYWdlQ2hhbmdlcyA9IFtdO1xufTtcblxuLyogUmVjb3JkIGEgbmV3IHBlbmRpbmcgY2hhbmdlLyogKiBwYWdlVGl0bGU6IFRpdGxlIG9mIHRoZSBwYWdlLyogKiBwYWdlOiBDb250ZW50IG9mIHRoZSBwYWdlLyogKiBvbGRDb250ZW50OiBDb250ZW50IG9mIHRoZSBwYWdlIGJlZm9yZSB0aGUgY2hhbmdlLyogKiBsaW5rOiBMaW5rIHRoYXQgaGFzIGJlZW4gY2hhbmdlZC8qICogc3VtbWFyeTogQ2hhbmdlIHN1bW1hcnkgKi9cbmNvbnN0IGFkZENoYW5nZSA9IChwYWdlVGl0bGUsIHBhZ2UsIG9sZENvbnRlbnQsIGxpbmssIHN1bW1hcnkpID0+IHtcblx0aWYgKCFwYWdlQ2hhbmdlcy5sZW5ndGggfHwgcGFnZUNoYW5nZXMuYXQoLTEpLnRpdGxlICE9PSBwYWdlVGl0bGUpIHtcblx0XHRwYWdlQ2hhbmdlc1twYWdlQ2hhbmdlcy5sZW5ndGhdID0ge1xuXHRcdFx0dGl0bGU6IHBhZ2VUaXRsZSxcblx0XHRcdHBhZ2UsXG5cdFx0XHRjb250ZW50QmVmb3JlOiBbXSxcblx0XHRcdGxpbmtzOiBbXSxcblx0XHRcdHN1bW1hcnk6IFtdLFxuXHRcdH07XG5cdH1cblx0Y29uc3QgbGFzdFBhZ2VDaGFuZ2UgPSBwYWdlQ2hhbmdlcy5hdCgtMSk7XG5cdGxhc3RQYWdlQ2hhbmdlLmNvbnRlbnRCZWZvcmVbbGFzdFBhZ2VDaGFuZ2UuY29udGVudEJlZm9yZS5sZW5ndGhdID0gb2xkQ29udGVudDtcblx0bGFzdFBhZ2VDaGFuZ2UubGlua3NbbGFzdFBhZ2VDaGFuZ2UubGlua3MubGVuZ3RoXSA9IGxpbms7XG5cdGxhc3RQYWdlQ2hhbmdlLnN1bW1hcnlbbGFzdFBhZ2VDaGFuZ2Uuc3VtbWFyeS5sZW5ndGhdID0gc3VtbWFyeTtcbn07XG5cbi8qIENoZWNrIHdoZXRoZXIgYWN0dWFsIGNoYW5nZXMgYXJlIHN0b3JlZCBpbiB0aGUgaGlzdG9yeSBhcnJheSAqL1xuY29uc3QgY2hlY2tBY3R1YWxDaGFuZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4gY291bnRBY3R1YWxDaGFuZ2VzKCkgIT09IDA7XG59O1xuXG4vKiBSZXR1cm4gdGhlIG51bWJlciBvZiBlbnRyaWVzIGluIHRoZSBoaXN0b3J5IGFycmF5IHRoYXQgcmVwcmVzZW50IGFjdHVhbCBjaGFuZ2VzICovXG5jb25zdCBjb3VudEFjdHVhbENoYW5nZXMgPSAoKSA9PiB7XG5cdGxldCBjaGFuZ2VDb3VudCA9IDA7XG5cdGZvciAoY29uc3QgcGFnZUNoYW5nZSBvZiBwYWdlQ2hhbmdlcykge1xuXHRcdGlmIChwYWdlQ2hhbmdlLnBhZ2UuY29udGVudCAhPT0gcGFnZUNoYW5nZS5jb250ZW50QmVmb3JlWzBdKSB7XG5cdFx0XHRjaGFuZ2VDb3VudCsrO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gY2hhbmdlQ291bnQ7XG59O1xuXG4vKiBSZXR1cm4gdGhlIG51bWJlciBvZiBjaGFuZ2VkIHBhZ2VzIGluIHRoZSBoaXN0b3J5IGFycmF5LCBpZ25vcmluZyB0aGUgbGFzdCBlbnRyeS8qICogaWYgd2UgYXJlbid0IGRvbmUgd2l0aCB0aGF0IHBhZ2UgeWV0ICovXG5jb25zdCBjb3VudEFjdHVhbGx5Q2hhbmdlZEZ1bGx5Q2hlY2tlZFBhZ2VzID0gKCkgPT4ge1xuXHRsZXQgY2hhbmdlQ291bnQgPSBjb3VudEFjdHVhbENoYW5nZXMoKTtcblx0aWYgKHBhZ2VDaGFuZ2VzLmxlbmd0aCkge1xuXHRcdGNvbnN0IGxhc3RDaGFuZ2UgPSBwYWdlQ2hhbmdlcy5hdCgtMSk7XG5cdFx0aWYgKFxuXHRcdFx0bGFzdENoYW5nZS50aXRsZSA9PT0gY3VycmVudFBhZ2VUaXRsZSAmJlxuXHRcdFx0Y3VycmVudExpbmsgJiZcblx0XHRcdGxhc3RDaGFuZ2UucGFnZS5jb250ZW50ICE9PSBsYXN0Q2hhbmdlLmNvbnRlbnRCZWZvcmVbMF1cblx0XHQpIHtcblx0XHRcdGNoYW5nZUNvdW50LS07XG5cdFx0fVxuXHR9XG5cdHJldHVybiBjaGFuZ2VDb3VudDtcbn07XG5cbi8qIEZpbmQgdGhlIGxpbmtzIHRvIGRpc2FtYmlndWF0aW9uIG9wdGlvbnMgaW4gYSBkaXNhbWJpZ3VhdGlvbiBwYWdlICovXG5jb25zdCBnZXREaXNhbU9wdGlvbnMgPSAoKSA9PiB7XG5cdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRyZXR1cm4gJGJvZHkuZmluZCgnI213LWNvbnRlbnQtdGV4dCBhJykuZmlsdGVyKChfaW5kZXgsIGVsZW1lbnQpID0+IHtcblx0XHRyZXR1cm4gISFleHRyYWN0UGFnZU5hbWUoJChlbGVtZW50KSk7XG5cdH0pO1xufTtcblxuLyogU2F2ZSBhbGwgdGhlIHBlbmRpbmcgY2hhbmdlcyBhbmQgY2xvc2UgdGhlIHRvb2wgKi9cbmNvbnN0IHNhdmVBbmRFbmQgPSAoKSA9PiB7XG5cdGFwcGx5QWxsQ2hhbmdlcygpO1xuXHRlbmQoKTtcbn07XG5cbi8qIENsb3NlIHRoZSB0b29sICovXG5jb25zdCBlbmQgPSAoKSA9PiB7XG5cdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRjb25zdCBjdXJyZW50VG9vbFVJID0gdWkuZGlzcGxheTtcblx0Y2hvb3NpbmcgPSBmYWxzZTtcblx0cnVubmluZyA9IGZhbHNlO1xuXHRzdGFydExpbmsucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG5cdCRib2R5LmZpbmQoJy5kaXNhbWFzc2lzdC1vcHRpb25tYXJrZXInKS5yZW1vdmUoKTtcblx0Y3VycmVudFRvb2xVSS5mYWRlT3V0KHtcblx0XHRjb21wbGV0ZSgpIHtcblx0XHRcdGN1cnJlbnRUb29sVUkucmVtb3ZlKCk7XG5cdFx0XHRpZiAoZWRpdENvdW50KSB7XG5cdFx0XHRcdHRvZ2dsZVBlbmRpbmdFZGl0Qm94KHRydWUpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdH0pO1xufTtcblxuLyogRGlzcGxheSBhbiBlcnJvciBtZXNzYWdlICovXG5jb25zdCBlcnJvciA9IChlcnJvckRlc2NyaXB0aW9uKSA9PiB7XG5cdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRjb25zdCBlcnJvckJveCA9ICQoJzxkaXY+JykuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LWJveCBkaXNhbWFzc2lzdC1lcnJvcmJveCcpO1xuXHRlcnJvckJveC50ZXh0KG1lc3NhZ2VzLmVycm9yLnJlcGxhY2UoJyQxJywgZXJyb3JEZXNjcmlwdGlvbikpO1xuXHRlcnJvckJveC5hcHBlbmQoXG5cdFx0Y3JlYXRlQnV0dG9uKG1lc3NhZ2VzLmRpc21pc3NFcnJvciwgKCkgPT4ge1xuXHRcdFx0ZXJyb3JCb3guZmFkZU91dCgpO1xuXHRcdH0pLmFkZENsYXNzKCdkaXNhbWFzc2lzdC1lcnJvcmJ1dHRvbicpXG5cdCk7XG5cdGNvbnN0IHVpSXNJblBsYWNlID0gdWkgJiYgJC5jb250YWlucyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHVpLmRpc3BsYXlbMF0pO1xuXHRjb25zdCBuZXh0RWxlbWVudCA9IHVpSXNJblBsYWNlID8gdWkuZGlzcGxheSA6ICRib2R5LmZpbmQoJyNtdy1jb250ZW50LXRleHQnKTtcblx0bmV4dEVsZW1lbnQuYmVmb3JlKGVycm9yQm94KTtcblx0ZXJyb3JCb3guaGlkZSgpLmZhZGVJbigpO1xufTtcblxuLyogQ2hhbmdlIGEgbGluayBzbyB0aGF0IGl0IHBvaW50cyB0byB0aGUgdGl0bGUvKiAqIHRleHQ6IFRoZSB3aWtpdGV4dCBvZiB0aGUgd2hvbGUgcGFnZS8qICogdGl0bGU6IFRoZSBuZXcgZGVzdGluYXRpb24gb2YgdGhlIGxpbmsvKiAqIGxpbms6IFRoZSBsaW5rIHRoYXQgd2lsbCBiZSBtb2RpZmllZC8qICogZXh0cmE6IFRleHQgdGhhdCB3aWxsIGJlIGFkZGVkIGFmdGVyIHRoZSBsaW5rIChvcHRpb25hbCkgKi9cbmNvbnN0IHJlcGxhY2VMaW5rID0gKHRleHQsIHRpdGxlLCBsaW5rLCBleHRyYSkgPT4ge1xuXHRsZXQgbmV3Q29udGVudDtcblx0aWYgKGlzU2FtZVBhZ2UodGl0bGUsIGxpbmsuZGVzY3JpcHRpb24pKSB7XG5cdFx0bmV3Q29udGVudCA9IGxpbmsuZGVzY3JpcHRpb247XG5cdH0gZWxzZSB7XG5cdFx0bmV3Q29udGVudCA9IGAke3RpdGxlfXwke2xpbmsuZGVzY3JpcHRpb259YDtcblx0fVxuXHRjb25zdCBsaW5rU3RhcnQgPSB0ZXh0LnNsaWNlKDAsIE1hdGgubWF4KDAsIGxpbmsuc3RhcnQpKTtcblx0Y29uc3QgbGlua0VuZCA9IHRleHQuc2xpY2UoTWF0aC5tYXgoMCwgbGluay5lbmQpKTtcblx0cmV0dXJuIGAke2xpbmtTdGFydH1bWyR7bmV3Q29udGVudH1dXSR7bGluay5hZnRlckRlc2NyaXB0aW9ufSR7ZXh0cmEgfHwgJyd9JHtsaW5rRW5kfWA7XG59O1xuXG4vKiBSZW1vdmUgYSBsaW5rIGZyb20gdGhlIHRleHQvKiAqIHRleHQ6IFRoZSB3aWtpdGV4dCBvZiB0aGUgd2hvbGUgcGFnZS8qICogbGluazogVGhlIGxpbmsgdGhhdCB3aWxsIGJlIHJlbW92ZWQgKi9cbmNvbnN0IHJlbW92ZUxpbmsgPSAodGV4dCwgbGluaykgPT4ge1xuXHRjb25zdCBsaW5rU3RhcnQgPSB0ZXh0LnNsaWNlKDAsIE1hdGgubWF4KDAsIGxpbmsuc3RhcnQpKTtcblx0Y29uc3QgbGlua0VuZCA9IHRleHQuc2xpY2UoTWF0aC5tYXgoMCwgbGluay5lbmQpKTtcblx0cmV0dXJuIGxpbmtTdGFydCArIGxpbmsuZGVzY3JpcHRpb24gKyBsaW5rLmFmdGVyRGVzY3JpcHRpb24gKyBsaW5rRW5kO1xufTtcblxuLyogRXh0cmFjdCBhIGxpbmsgZnJvbSBhIHN0cmluZyBpbiB3aWtpIGZvcm1hdCwvKiAqIHN0YXJ0aW5nIGZyb20gYSBnaXZlbiBpbmRleC4gUmV0dXJuIGEgbGluayBpZiBvbmUgY2FuIGJlIGZvdW5kLC8qICogb3RoZXJ3aXNlIHJldHVybiBudWxsLiBUaGUgXCJsaW5rXCIgaW5jbHVkZXMgXCJkaXNhbWJpZ3VhdGlvbiBuZWVkZWRcIi8qICogdGVtcGxhdGVzIGlubWVkaWF0ZWx5IGZvbGxvd2luZyB0aGUgbGluayBwcm9wZXIvKiAqIHRleHQ6IFRleHQgZnJvbSB3aGljaCB0aGUgbGluayB3aWxsIGJlIGV4dHJhY3RlZC8qICogbGFzdEluZGV4OiBJbmRleCBmcm9tIHdoaWNoIHRoZSBzZWFyY2ggd2lsbCBzdGFydCAqL1xuY29uc3QgZXh0cmFjdExpbmsgPSAodGV4dCwgbGFzdEluZGV4KSA9PiB7XG5cdC8vIEZJWE1FOiBOb3QgYW4gYWN0dWFsIHRpdGxlIHJlZ2V4IChsb3RzIG9mIGZhbHNlIHBvc2l0aXZlc1xuXHQvLyBhbmQgc29tZSBmYWxzZSBuZWdhdGl2ZXMpLCBidXQgaG9wZWZ1bGx5IGdvb2QgZW5vdWdoLlxuXHRjb25zdCB0aXRsZVJlZ2V4ID0gL1xcW1xcWyguKj8pKD86XFx8KC4qPykpP11dL2c7XG5cdC8vIERpdHRvIGZvciB0aGUgdGVtcGxhdGUgcmVnZXguIERpc2FtYmlndWF0aW9uIGxpbmsgdGVtcGxhdGVzXG5cdC8vIHNob3VsZCBiZSBzaW1wbGUgZW5vdWdoIGZvciB0aGlzIG5vdCB0byBtYXR0ZXIsIHRob3VnaC5cblx0Y29uc3QgdGVtcGxhdGVSZWdleCA9IC9eKFxcdypbXFxzISksLjo7P31dKil7e1xccyooW157fH1dKz8pXFxzKig/OlxcfFtee10qPyk/fX0vO1xuXHR0aXRsZVJlZ2V4Lmxhc3RJbmRleCA9IGxhc3RJbmRleDtcblx0Y29uc3QgbWF0Y2ggPSB0aXRsZVJlZ2V4LmV4ZWModGV4dCk7XG5cdGlmIChtYXRjaCAmJiBtYXRjaC5pbmRleCAhPT0gLTEpIHtcblx0XHRsZXQgcG9zc2libHlBbWJpZ3VvdXMgPSB0cnVlO1xuXHRcdGxldCBoYXNEaXNhbVRlbXBsYXRlID0gZmFsc2U7XG5cdFx0bGV0IF9lbmQgPSBtYXRjaC5pbmRleCArIDQgKyBtYXRjaFsxXS5sZW5ndGggKyAobWF0Y2hbMl0gPyAxICsgbWF0Y2hbMl0ubGVuZ3RoIDogMCk7XG5cdFx0bGV0IGFmdGVyRGVzY3JpcHRpb24gPSAnJztcblx0XHRjb25zdCByZXN0ID0gdGV4dC5zbGljZShNYXRoLm1heCgwLCBfZW5kKSk7XG5cdFx0Y29uc3QgdGVtcGxhdGVNYXRjaCA9IHRlbXBsYXRlUmVnZXguZXhlYyhyZXN0KTtcblx0XHRpZiAodGVtcGxhdGVNYXRjaCkge1xuXHRcdFx0Y29uc3QgdGVtcGxhdGVUaXRsZSA9IGdldENhbm9uaWNhbFRpdGxlKHRlbXBsYXRlTWF0Y2hbMl0pO1xuXHRcdFx0Y29uc3Qge2Rpc2FtTGlua1RlbXBsYXRlc30gPSBjZmc7XG5cdFx0XHRjb25zdCB7ZGlzYW1MaW5rSWdub3JlVGVtcGxhdGVzfSA9IGNmZztcblx0XHRcdGlmIChkaXNhbUxpbmtUZW1wbGF0ZXMuaW5jbHVkZXModGVtcGxhdGVUaXRsZSkpIHtcblx0XHRcdFx0X2VuZCArPSB0ZW1wbGF0ZU1hdGNoWzBdLmxlbmd0aDtcblx0XHRcdFx0YWZ0ZXJEZXNjcmlwdGlvbiA9IHRlbXBsYXRlTWF0Y2hbMV0ucmVwbGFjZSgvXFxzJC8sICcnKTtcblx0XHRcdFx0aGFzRGlzYW1UZW1wbGF0ZSA9IHRydWU7XG5cdFx0XHR9IGVsc2UgaWYgKGRpc2FtTGlua0lnbm9yZVRlbXBsYXRlcy5pbmNsdWRlcyh0ZW1wbGF0ZVRpdGxlKSkge1xuXHRcdFx0XHRwb3NzaWJseUFtYmlndW91cyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0c3RhcnQ6IG1hdGNoLmluZGV4LFxuXHRcdFx0ZW5kOiBfZW5kLFxuXHRcdFx0cG9zc2libHlBbWJpZ3VvdXMsXG5cdFx0XHRoYXNEaXNhbVRlbXBsYXRlLFxuXHRcdFx0dGl0bGU6IG1hdGNoWzFdLFxuXHRcdFx0ZGVzY3JpcHRpb246IG1hdGNoWzJdID8/IG1hdGNoWzFdLFxuXHRcdFx0YWZ0ZXJEZXNjcmlwdGlvbixcblx0XHR9O1xuXHR9XG59O1xuXG4vKiBFeHRyYWN0IGEgbGluayB0byBvbmUgb2YgYSBudW1iZXIgb2YgZGVzdGluYXRpb24gcGFnZXMgZnJvbSBhIHN0cmluZy8qICogKFwidGV4dFwiKSBpbiB3aWtpIGZvcm1hdCwgc3RhcnRpbmcgZnJvbSBhIGdpdmVuIGluZGV4IChcImxhc3RJbmRleFwiKS4vKiAqIFwiRGlzYW1iaWd1YXRpb24gbmVlZGVkXCIgdGVtcGxhdGVzIGFyZSBpbmNsdWRlZCBhcyBwYXJ0IG9mIHRoZSBsaW5rcy4vKiAqIHRleHQ6IFBhZ2UgaW4gd2lraSBmb3JtYXQvKiAqIGRlc3RpbmF0aW9uczogQXJyYXkgb2YgcGFnZSB0aXRsZXMgdG8gbG9vayBmb3IvKiAqIGxhc3RJbmRleDogSW5kZXggZnJvbSB3aGljaCB0aGUgc2VhcmNoIHdpbGwgc3RhcnQgKi9cbmNvbnN0IGV4dHJhY3RMaW5rVG9QYWdlID0gKHRleHQsIGRlc3RpbmF0aW9ucywgbGFzdEluZGV4KSA9PiB7XG5cdGxldCBsaW5rO1xuXHRsZXQgdGl0bGU7XG5cdGRvIHtcblx0XHRsaW5rID0gZXh0cmFjdExpbmsodGV4dCwgbGFzdEluZGV4KTtcblx0XHRpZiAobGluaykge1xuXHRcdFx0bGFzdEluZGV4ID0gbGluay5lbmQ7XG5cdFx0XHR0aXRsZSA9IGdldENhbm9uaWNhbFRpdGxlKGxpbmsudGl0bGUpO1xuXHRcdH1cblx0fSB3aGlsZSAobGluayAmJiAoIWxpbmsucG9zc2libHlBbWJpZ3VvdXMgfHwgIWRlc3RpbmF0aW9ucz8uaW5jbHVkZXModGl0bGUpKSk7XG5cdHJldHVybiBsaW5rO1xufTtcblxuLyogRmluZCB0aGUgXCJ0YXJnZXRcIiBwYWdlOiBlaXRoZXIgdGhlIG9uZSB3ZSBhcmUgaW4gb3IgdGhlIFwibWFpblwiIG9uZSBmb3VuZCBieSBleHRyYWN0aW5nLyogKiB0aGUgdGl0bGUgZnJvbSBcIi4qIChkaXNhbWJpZ3VhdGlvbilcIiBvciB3aGF0ZXZlciB0aGUgYXBwcm9waWF0ZSBsb2NhbCBmb3JtYXQgaXMgKi9cbmNvbnN0IGdldFRhcmdldFBhZ2UgPSAoKSA9PiB7XG5cdGNvbnN0IHRpdGxlID0gZ2V0VGl0bGUoKTtcblx0cmV0dXJuIGZvcmNlU2FtZVBhZ2UgPyB0aXRsZSA6IHJlbW92ZURpc2FtKHRpdGxlKTtcbn07XG5cbi8qIEdldCB0aGUgcGFnZSB0aXRsZSwgd2l0aCB0aGUgbmFtZXNwYWNlIHByZWZpeCBpZiBhbnkuICovXG5jb25zdCBnZXRUaXRsZSA9ICgpID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRyZXR1cm4gd2dQYWdlTmFtZS5yZXBsYWNlKC9fL2csICcgJyk7XG59O1xuXG4vKiBFeHRyYWN0IGEgXCJtYWluXCIgdGl0bGUgZnJvbSBcIi4qIChkaXNhbWJpZ3VhdGlvbilcIiBvciB3aGF0ZXZlciB0aGUgYXBwcm9waWF0ZSBsb2NhbCBmb3JtYXQgaXMgKi9cbmNvbnN0IHJlbW92ZURpc2FtID0gKHRpdGxlKSA9PiB7XG5cdGNvbnN0IG1hdGNoID0gbmV3IFJlZ0V4cChjZmcuZGlzYW1SZWdFeHApLmV4ZWModGl0bGUpO1xuXHRyZXR1cm4gbWF0Y2g/LlsxXSA/PyB0aXRsZTtcbn07XG5cbi8qIENoZWNrIHdoZXRoZXIgdHdvIHBhZ2UgdGl0bGVzIGFyZSB0aGUgc2FtZSAqL1xuY29uc3QgaXNTYW1lUGFnZSA9ICh0aXRsZTEsIHRpdGxlMikgPT4ge1xuXHRyZXR1cm4gZ2V0Q2Fub25pY2FsVGl0bGUodGl0bGUxKSA9PT0gZ2V0Q2Fub25pY2FsVGl0bGUodGl0bGUyKTtcbn07XG5cbi8qIFJldHVybiB0aGUgJ2Nhbm9uaWNhbCB0aXRsZScgb2YgYSBwYWdlICovXG5jb25zdCBnZXRDYW5vbmljYWxUaXRsZSA9ICh0aXRsZSkgPT4ge1xuXHR0cnkge1xuXHRcdC8vIG13LlRpdGxlIHNlZW1zIHRvIGJlIGJ1Z2d5LCBhbmQgc29tZSB2YWxpZCB0aXRsZXMgYXJlIHJlamVjdGVkXG5cdFx0Ly8gRklYTUU6IFRoaXMgbWF5IGNhdXNlIGZhbHNlIG5lZ2F0aXZlc1xuXHRcdHRpdGxlID0gbmV3IG13LlRpdGxlKHRpdGxlKS5nZXRQcmVmaXhlZFRleHQoKTtcblx0fSBjYXRjaCB7XG5cdFx0LyogZW1wdHkgKi9cblx0fVxuXHRyZXR1cm4gdGl0bGU7XG59O1xuXG4vKiBFeHRyYWN0IHRoZSBjb250ZXh0IGFyb3VuZCBhIGdpdmVuIGxpbmsgaW4gYSB0ZXh0IHN0cmluZyAqL1xuY29uc3QgZXh0cmFjdENvbnRleHQgPSAodGV4dCwgbGluaykgPT4ge1xuXHRjb25zdCBjb250ZXh0U3RhcnQgPSBsaW5rLnN0YXJ0IC0gY2ZnLnJhZGl1cztcblx0Y29uc3QgY29udGV4dEVuZCA9IGxpbmsuZW5kICsgY2ZnLnJhZGl1cztcblx0bGV0IGNvbnRleHRQcmV2ID0gdGV4dC5zbGljZShjb250ZXh0U3RhcnQsIGxpbmsuc3RhcnQpO1xuXHRpZiAoY29udGV4dFN0YXJ0ID4gMCkge1xuXHRcdGNvbnRleHRQcmV2ID0gbWVzc2FnZXMuZWxsaXBzaXMgKyBjb250ZXh0UHJldjtcblx0fVxuXHRsZXQgY29udGV4dE5leHQgPSB0ZXh0LnNsaWNlKGxpbmsuZW5kLCBjb250ZXh0RW5kKTtcblx0aWYgKGNvbnRleHRFbmQgPCB0ZXh0Lmxlbmd0aCkge1xuXHRcdGNvbnRleHROZXh0ICs9IG1lc3NhZ2VzLmVsbGlwc2lzO1xuXHR9XG5cdHJldHVybiBbY29udGV4dFByZXYsIHRleHQuc2xpY2UobGluay5zdGFydCwgbGluay5lbmQpLCBjb250ZXh0TmV4dF07XG59O1xuXG4vKiBFeHRyYWN0IHRoZSBwcmVmaXhlZCBwYWdlIG5hbWUgZnJvbSBhIGxpbmsgKi9cbmNvbnN0IGV4dHJhY3RQYWdlTmFtZSA9IChsaW5rKSA9PiB7XG5cdGxldCBwYWdlTmFtZSA9IGV4dHJhY3RQYWdlTmFtZVJhdyhsaW5rKTtcblx0aWYgKHBhZ2VOYW1lKSB7XG5cdFx0Y29uc3Qgc2VjdGlvblBvcyA9IHBhZ2VOYW1lLmluZGV4T2YoJyMnKTtcblx0XHRsZXQgc2VjdGlvbiA9ICcnO1xuXHRcdGlmIChzZWN0aW9uUG9zICE9PSAtMSkge1xuXHRcdFx0c2VjdGlvbiA9IHBhZ2VOYW1lLnNsaWNlKE1hdGgubWF4KDAsIHNlY3Rpb25Qb3MpKTtcblx0XHRcdHBhZ2VOYW1lID0gcGFnZU5hbWUuc2xpY2UoMCwgTWF0aC5tYXgoMCwgc2VjdGlvblBvcykpO1xuXHRcdH1cblx0XHRyZXR1cm4gZ2V0Q2Fub25pY2FsVGl0bGUocGFnZU5hbWUpICsgc2VjdGlvbjtcblx0fVxufTtcblxuLyogRXh0cmFjdCB0aGUgcGFnZSBuYW1lIGZyb20gYSBsaW5rLCBhcyBpcyAqL1xuY29uc3QgZXh0cmFjdFBhZ2VOYW1lUmF3ID0gKGxpbmspID0+IHtcblx0Y29uc3Qge3dnU2NyaXB0LCB3Z0FydGljbGVQYXRofSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKCFsaW5rLmhhc0NsYXNzKCdpbWFnZScpKSB7XG5cdFx0Y29uc3QgaHJlZiA9IGxpbmsuYXR0cignaHJlZicpO1xuXHRcdGlmIChsaW5rLmhhc0NsYXNzKCduZXcnKSkge1xuXHRcdFx0Ly8gXCJSZWRcIiBsaW5rXG5cdFx0XHRpZiAoaHJlZi5pbmNsdWRlcyh3Z1NjcmlwdCkpIHtcblx0XHRcdFx0cmV0dXJuIG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndGl0bGUnLCBocmVmKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgcmVnZXggPSB3Z0FydGljbGVQYXRoLnJlcGxhY2UoJyQxJywgJyguKiknKTtcblx0XHRcdGNvbnN0IHJlZ2V4UmVzdWx0ID0gbmV3IFJlZ0V4cChgXiR7cmVnZXh9JGApLmV4ZWMoaHJlZik7XG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShyZWdleFJlc3VsdCkgJiYgcmVnZXhSZXN1bHQubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocmVnZXhSZXN1bHRbMV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuLyogQ2hlY2sgd2hldGhlciB0aGlzIGlzIGEgZGlzYW1iaWd1YXRpb24gcGFnZSAqL1xuY29uc3QgaXNEaXNhbSA9ICgpID0+IHtcblx0Y29uc3Qge3dnQ2F0ZWdvcmllc30gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IGNhdGVnb3JpZXMgPSB3Z0NhdGVnb3JpZXMgPz8gW107XG5cdGZvciAoY29uc3QgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllcykge1xuXHRcdGNvbnN0IHtkaXNhbUNhdGVnb3JpZXN9ID0gY2ZnO1xuXHRcdGlmIChkaXNhbUNhdGVnb3JpZXMuaW5jbHVkZXMoY2F0ZWdvcnkpKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3Qgc2Vjb25kc1RvSEhNTVNTID0gKHRvdGFsU2Vjb25kcykgPT4ge1xuXHRsZXQgaGhtbXNzID0gJyc7XG5cdGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcih0b3RhbFNlY29uZHMgLyAzNjAwKTtcblx0Y29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKHRvdGFsU2Vjb25kcyAlIDM2MDApIC8gNjApO1xuXHRjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigodG90YWxTZWNvbmRzICUgMzYwMCkgJSA2MCk7XG5cdGlmIChob3VycyA+PSAxKSB7XG5cdFx0aGhtbXNzID0gYCR7cGFkKGhvdXJzLCAnMCcsIDIpfTpgO1xuXHR9XG5cdGhobW1zcyArPSBgJHtwYWQobWludXRlcywgJzAnLCAyKX06JHtwYWQoc2Vjb25kcywgJzAnLCAyKX1gO1xuXHRyZXR1cm4gaGhtbXNzO1xufTtcblxuY29uc3QgcGFkID0gKHN0ciwgeiwgd2lkdGgpID0+IHtcblx0c3RyID0gc3RyLnRvU3RyaW5nKCk7XG5cdGlmIChzdHIubGVuZ3RoID49IHdpZHRoKSB7XG5cdFx0cmV0dXJuIHN0cjtcblx0fVxuXHRyZXR1cm4gKFxuXHRcdEFycmF5LmZyb20oe1xuXHRcdFx0bGVuZ3RoOiB3aWR0aCAtIHN0ci5sZW5ndGggKyAxLFxuXHRcdH0pLmpvaW4oeikgKyBzdHJcblx0KTtcbn07XG5cbi8qIENyZWF0ZSBhIG5ldyBidXR0b25cbiAqIHRleHQ6IFRleHQgdGhhdCB3aWxsIGJlIGRpc3BsYXllZCBvbiB0aGUgYnV0dG9uXG4gKiBvbkNsaWNrOiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlXG4gKiBidXR0b24gaXMgY2xpY2tlZFxuICovXG5jb25zdCBjcmVhdGVCdXR0b24gPSAodGV4dCwgb25DbGljaykgPT4ge1xuXHRjb25zdCBidXR0b24gPSAkKCc8aW5wdXQ+JykuYXR0cih7XG5cdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0dmFsdWU6IHRleHQsXG5cdH0pO1xuXHRidXR0b24uYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LWJ1dHRvbicpLm9uKCdjbGljaycsIG9uQ2xpY2spO1xuXHRyZXR1cm4gYnV0dG9uO1xufTtcblxuLyogR2l2ZW4gYSBwYWdlIHRpdGxlIGFuZCBhbiBhcnJheSBvZiBwb3NzaWJsZSByZWRpcmVjdHMge2Zyb20sIHRvfSAoXCJjYW5vbmljYWwgdGl0bGVzXCIpLCBmaW5kIHRoZSBwYWdlLyogKiBhdCB0aGUgZW5kIG9mIHRoZSByZWRpcmVjdCBjaGFpbiwgaWYgdGhlcmUgaXMgb25lLiBPdGhlcndpc2UsIHJldHVybiB0aGUgcGFnZSB0aXRsZSB0aGF0IHdhcyBwYXNzZWQgKi9cbmNvbnN0IHJlc29sdmVSZWRpcmVjdCA9IChwYWdlVGl0bGUsIHBvc3NpYmxlUmVkaXJlY3RzKSA9PiB7XG5cdGxldCBhcHBsaWVkUmVkaXJlY3QgPSB0cnVlO1xuXHRjb25zdCB2aXNpdGVkUGFnZXMgPSB7fTtcblx0bGV0IGN1cnJlbnRQYWdlID0gZ2V0Q2Fub25pY2FsVGl0bGUocGFnZVRpdGxlKTtcblx0d2hpbGUgKGFwcGxpZWRSZWRpcmVjdCkge1xuXHRcdGFwcGxpZWRSZWRpcmVjdCA9IGZhbHNlO1xuXHRcdGZvciAoY29uc3QgcG9zc2libGVSZWRpcmVjdCBvZiBwb3NzaWJsZVJlZGlyZWN0cykge1xuXHRcdFx0aWYgKHBvc3NpYmxlUmVkaXJlY3QuZnJvbSA9PT0gY3VycmVudFBhZ2UpIHtcblx0XHRcdFx0aWYgKHZpc2l0ZWRQYWdlc1twb3NzaWJsZVJlZGlyZWN0LnRvXSkge1xuXHRcdFx0XHRcdC8vIFJlZGlyZWN0IGNoYWluIGRldGVjdGVkXG5cdFx0XHRcdFx0cmV0dXJuIHBhZ2VUaXRsZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR2aXNpdGVkUGFnZXNbY3VycmVudFBhZ2VdID0gdHJ1ZTtcblx0XHRcdFx0YXBwbGllZFJlZGlyZWN0ID0gdHJ1ZTtcblx0XHRcdFx0Y3VycmVudFBhZ2UgPSBwb3NzaWJsZVJlZGlyZWN0LnRvO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQvLyBObyByZWRpcmVjdCBydWxlcyBhcHBsaWVkIGZvciBhbiBpdGVyYXRpb24gb2YgdGhlIG91dGVyIGxvb3A6XG5cdC8vIG5vIG1vcmUgcmVkaXJlY3RzLiBXZSBhcmUgZG9uZVxuXHRyZXR1cm4gY3VycmVudFBhZ2U7XG59O1xuXG4vKiBGZXRjaCB0aGUgaW5jb21pbmcgbGlua3MgdG8gYSBwYWdlLiBSZXR1cm5zIGEgalF1ZXJ5IHByb21pc2UvKiAqIChzdWNjZXNzIC0gYXJyYXkgb2YgdGl0bGVzIG9mIHBhZ2VzIHRoYXQgY29udGFpbiBsaW5rcyB0byB0aGUgdGFyZ2V0IHBhZ2UgYW5kLyogKiBhcnJheSBvZiBcImNhbm9uaWNhbCB0aXRsZXNcIiBvZiBwb3NzaWJsZSBkZXN0aW5hdGlvbnMgb2YgdGhlIGJhY2tsaW5rcyAoZWl0aGVyLyogKiB0aGUgdGFyZ2V0IHBhZ2Ugb3IgcmVkaXJlY3RzIHRvIHRoZSB0YXJnZXQgcGFnZSksIGZhaWx1cmUgLSBlcnJvciBkZXNjcmlwdGlvbikvKiAqIHBhZ2U6IFRhcmdldCBwYWdlICovXG5jb25zdCBnZXRCYWNrbGlua3MgPSAocGFnZSkgPT4ge1xuXHRjb25zdCBkZWZlcnJlZCA9IG5ldyAkLkRlZmVycmVkKCk7XG5cdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0bGlzdDogJ2JhY2tsaW5rcycsXG5cdFx0Ymx0aXRsZTogcGFnZSxcblx0XHRibHJlZGlyZWN0OiB0cnVlLFxuXHRcdGJsbGltaXQ6IGNmZy5iYWNrbGlua0xpbWl0LFxuXHRcdGJsbmFtZXNwYWNlOiBjZmcudGFyZ2V0TmFtZXNwYWNlcy5qb2luKCd8JyksXG5cdH07XG5cdGFwaS5nZXQocGFyYW1zKVxuXHRcdC5kb25lKCh7cXVlcnl9KSA9PiB7XG5cdFx0XHQvLyBUaGVyZSBtaWdodCBiZSBkdXBsaWNhdGUgZW50cmllcyBpbiBzb21lIGNvcm5lciBjYXNlcy4gV2UgZG9uJ3QgY2FyZSxcblx0XHRcdC8vIHNpbmNlIHdlIGFyZSBnb2luZyB0byBjaGVjayBsYXRlciwgYW55d2F5XG5cdFx0XHRjb25zdCBiYWNrbGlua3MgPSBbXTtcblx0XHRcdGNvbnN0IGxpbmtUaXRsZXMgPSBbZ2V0Q2Fub25pY2FsVGl0bGUocGFnZSldO1xuXHRcdFx0Y29uc3QgYmFja2xpbmtzUXVlcnkgPSBxdWVyeS5iYWNrbGlua3M7XG5cdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgYmFja2xpbmtzUXVlcnkpIHtcblx0XHRcdFx0YmFja2xpbmtzW2JhY2tsaW5rcy5sZW5ndGhdID0gZWxlbWVudC50aXRsZTtcblx0XHRcdFx0aWYgKCFlbGVtZW50LnJlZGlybGlua3MpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaW5rVGl0bGVzW2xpbmtUaXRsZXMubGVuZ3RoXSA9IGVsZW1lbnQudGl0bGU7XG5cdFx0XHRcdGNvbnN0IHtyZWRpcmxpbmtzfSA9IGVsZW1lbnQ7XG5cdFx0XHRcdGZvciAoY29uc3Qge3RpdGxlfSBvZiByZWRpcmxpbmtzKSB7XG5cdFx0XHRcdFx0YmFja2xpbmtzW2JhY2tsaW5rcy5sZW5ndGhdID0gdGl0bGU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGRlZmVycmVkLnJlc29sdmUoYmFja2xpbmtzLCBsaW5rVGl0bGVzKTtcblx0XHR9KVxuXHRcdC5mYWlsKChjb2RlKSA9PiB7XG5cdFx0XHRkZWZlcnJlZC5yZWplY3QobWVzc2FnZXMuZ2V0QmFja2xpbmtzRXJyb3IucmVwbGFjZSgnJDEnLCBjb2RlKSk7XG5cdFx0fSk7XG5cdHJldHVybiBkZWZlcnJlZC5wcm9taXNlKCk7XG59O1xuXG4vKiBEb3dubG9hZCBhIGxpc3Qgb2YgcmVkaXJlY3RzIGZvciBzb21lIHBhZ2VzLiBSZXR1cm5zIGEgalF1ZXJ5IGNhbGxiYWNrIChzdWNjZXNzIC0vKiAqIGFycmF5IG9mIHJlZGlyZWN0cyAoe2Zyb20sIHRvfSksIGZhaWx1cmUgLSBlcnJvciBkZXNjcmlwdGlvbiApLyogKiBwYWdlVGl0bGVzOiBBcnJheSBvZiBwYWdlIHRpdGxlcyAqL1xuY29uc3QgZmV0Y2hSZWRpcmVjdHMgPSAocGFnZVRpdGxlcykgPT4ge1xuXHRjb25zdCBkZWZlcnJlZCA9IG5ldyAkLkRlZmVycmVkKCk7XG5cdGNvbnN0IGN1cnJlbnRUaXRsZXMgPSBwYWdlVGl0bGVzLnNsaWNlKDAsIGNmZy5xdWVyeVRpdGxlTGltaXQpO1xuXHRjb25zdCByZXN0VGl0bGVzID0gcGFnZVRpdGxlcy5zbGljZShjZmcucXVlcnlUaXRsZUxpbWl0KTtcblx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHR0aXRsZXM6IGN1cnJlbnRUaXRsZXMuam9pbignfCcpLFxuXHRcdHJlZGlyZWN0czogdHJ1ZSxcblx0fTtcblx0YXBpLmdldChwYXJhbXMpXG5cdFx0LmRvbmUoKHtxdWVyeX0pID0+IHtcblx0XHRcdGNvbnN0IHRoZXNlUmVkaXJlY3RzID0gcXVlcnkucmVkaXJlY3RzID8/IFtdO1xuXHRcdFx0aWYgKHJlc3RUaXRsZXMubGVuZ3RoKSB7XG5cdFx0XHRcdGZldGNoUmVkaXJlY3RzKHJlc3RUaXRsZXMpXG5cdFx0XHRcdFx0LmRvbmUoKHJlZGlyZWN0cykgPT4ge1xuXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShbLi4udGhlc2VSZWRpcmVjdHMsIC4uLnJlZGlyZWN0c10pO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmZhaWwoKGRlc2NyaXB0aW9uKSA9PiB7XG5cdFx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3QoZGVzY3JpcHRpb24pO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZSh0aGVzZVJlZGlyZWN0cyk7XG5cdFx0XHR9XG5cdFx0fSlcblx0XHQuZmFpbCgoY29kZSkgPT4ge1xuXHRcdFx0ZGVmZXJyZWQucmVqZWN0KG1lc3NhZ2VzLmZldGNoUmVkaXJlY3RzRXJyb3IucmVwbGFjZSgnJDEnLCBjb2RlKSk7XG5cdFx0fSk7XG5cdHJldHVybiBkZWZlcnJlZC5wcm9taXNlKCk7XG59O1xuXG4vKiBEb3dubG9hZCB0aGUgbGlzdCBvZiB1c2VyIHJpZ2h0cyBmb3IgdGhlIGN1cnJlbnQgdXNlci4gUmV0dXJucyBhLyogKiBqUXVlcnkgcHJvbWlzZSAoc3VjY2VzcyAtIGFycmF5IG9mIHJpZ2h0IG5hbWVzLCBlcnJvciAtIGVycm9yIGRlc2NyaXB0aW9uKSAqL1xuY29uc3QgZmV0Y2hSaWdodHMgPSAoKSA9PiB7XG5cdGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZCgpO1xuXHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdG1ldGE6ICd1c2VyaW5mbycsXG5cdFx0dWlwcm9wOiAncmlnaHRzJyxcblx0fTtcblx0YXBpLmdldChwYXJhbXMpXG5cdFx0LmRvbmUoKHtxdWVyeX0pID0+IHtcblx0XHRcdGRlZmVycmVkLnJlc29sdmUocXVlcnkudXNlcmluZm8ucmlnaHRzKTtcblx0XHR9KVxuXHRcdC5mYWlsKChjb2RlKSA9PiB7XG5cdFx0XHRkZWZlcnJlZC5yZWplY3QobWVzc2FnZXMuZmV0Y2hSaWdodHNFcnJvci5yZXBsYWNlKCckMScsIGNvZGUpKTtcblx0XHR9KTtcblx0cmV0dXJuIGRlZmVycmVkLnByb21pc2UoKTtcbn07XG5cbi8qIExvYWQgdGhlIHJhdyBwYWdlIHRleHQgZm9yIGEgZ2l2ZW4gdGl0bGUuIFJldHVybnMgYSBqUXVlcnkgcHJvbWlzZSAoc3VjY2VzcyAtIHBhZ2UvKiAqIGNvbnRlbnQsIGZhaWx1cmUgLSBlcnJvciBkZXNjcmlwdGlvbikvKiAqIHBhZ2VUaXRsZTogVGl0bGUgb2YgdGhlIHBhZ2UgKi9cbmNvbnN0IGxvYWRQYWdlID0gKHBhZ2VUaXRsZSkgPT4ge1xuXHRjb25zdCBkZWZlcnJlZCA9IG5ldyAkLkRlZmVycmVkKCk7XG5cdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHRpdGxlczogcGFnZVRpdGxlLFxuXHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdHJ2cHJvcDogWyd0aW1lc3RhbXAnLCAnY29udGVudCddLFxuXHRcdHJ2c2xvdHM6ICdtYWluJyxcblx0XHRtZXRhOiAndG9rZW5zJyxcblx0XHR0eXBlOiAnY3NyZicsXG5cdH07XG5cdGFwaS5nZXQocGFyYW1zKVxuXHRcdC5kb25lKCh7cXVlcnl9KSA9PiB7XG5cdFx0XHRjb25zdCBbcmF3UGFnZV0gPSBxdWVyeS5wYWdlcztcblx0XHRcdGNvbnN0IHBhZ2UgPSB7fTtcblx0XHRcdHBhZ2UucmVkaXJlY3QgPSByYXdQYWdlLnJlZGlyZWN0ICE9PSB1bmRlZmluZWQ7XG5cdFx0XHRwYWdlLm1pc3NpbmcgPSByYXdQYWdlLm1pc3NpbmcgIT09IHVuZGVmaW5lZDtcblx0XHRcdGlmIChyYXdQYWdlLnJldmlzaW9ucykge1xuXHRcdFx0XHRwYWdlLmNvbnRlbnQgPSByYXdQYWdlLnJldmlzaW9uc1swXS5zbG90cy5tYWluLmNvbnRlbnQ7XG5cdFx0XHRcdHBhZ2UuYmFzZVRpbWVTdGFtcCA9IHJhd1BhZ2UucmV2aXNpb25zWzBdLnRpbWVzdGFtcDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHBhZ2UuY29udGVudCA9ICcnO1xuXHRcdFx0XHRwYWdlLmJhc2VUaW1lU3RhbXAgPSB1bmRlZmluZWQ7XG5cdFx0XHR9XG5cdFx0XHRwYWdlLnN0YXJ0VGltZVN0YW1wID0gcmF3UGFnZS5zdGFydHRpbWVzdGFtcDtcblx0XHRcdHBhZ2UuZWRpdFRva2VuID0gcXVlcnkudG9rZW5zLmNzcmZ0b2tlbjtcblx0XHRcdGRlZmVycmVkLnJlc29sdmUocGFnZSk7XG5cdFx0fSlcblx0XHQuZmFpbCgoY29kZSkgPT4ge1xuXHRcdFx0ZGVmZXJyZWQucmVqZWN0KG1lc3NhZ2VzLmxvYWRQYWdlRXJyb3IucmVwbGFjZSgnJDEnLCBwYWdlVGl0bGUpLnJlcGxhY2UoJyQyJywgY29kZSkpO1xuXHRcdH0pO1xuXHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZSgpO1xufTtcblxuLyogUmVnaXN0ZXIgY2hhbmdlcyB0byBhIHBhZ2UsIHRvIGJlIHNhdmVkIGxhdGVyLiBSZXR1cm5zIGEgalF1ZXJ5IHByb21pc2UvKiAqIChzdWNjZXNzIC0gbm8gcGFyYW1zLCBmYWlsdXJlIC0gZXJyb3IgZGVzY3JpcHRpb24pLiBUYWtlcyB0aGUgc2FtZSBwYXJhbWV0ZXJzLyogKiBhcyBzYXZlUGFnZSAqL1xuY29uc3Qgc2F2ZVdpdGhDb29sZG93biA9ICguLi5hcmdzKSA9PiB7XG5cdGNvbnN0IGRlZmVycmVkID0gbmV3ICQuRGVmZXJyZWQoKTtcblx0cGVuZGluZ1NhdmVzW3BlbmRpbmdTYXZlcy5sZW5ndGhdID0ge1xuXHRcdGFyZ3MsXG5cdFx0ZGZkOiBkZWZlcnJlZCxcblx0fTtcblx0aWYgKCFydW5uaW5nU2F2ZXMpIHtcblx0XHRjaGVja0FuZFNhdmUoKTtcblx0fVxuXHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZSgpO1xufTtcblxuLyogU2F2ZSB0aGUgZmlyc3Qgc2V0IG9mIGNoYW5nZXMgaW4gdGhlIGxpc3Qgb2YgcGVuZGluZyBjaGFuZ2VzLCBwcm92aWRpbmcgdGhhdC8qICogZW5vdWdoIHRpbWUgaGFzIHBhc3NlZCBzaW5jZSB0aGUgbGFzdCBlZGl0ICovXG5jb25zdCBjaGVja0FuZFNhdmUgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICghcGVuZGluZ1NhdmVzLmxlbmd0aCkge1xuXHRcdHJ1bm5pbmdTYXZlcyA9IGZhbHNlO1xuXHRcdHJldHVybjtcblx0fVxuXHRydW5uaW5nU2F2ZXMgPSB0cnVlO1xuXHRjb25zdCBtaWxsaXNTaW5jZUxhc3QgPSBEYXRlLm5vdygpIC0gbGFzdEVkaXRNaWxsaXM7XG5cdGlmIChtaWxsaXNTaW5jZUxhc3QgPCBjZmcuZWRpdENvb2xkb3duICogMTAwMCkge1xuXHRcdHNldFRpbWVvdXQoY2hlY2tBbmRTYXZlLCBjZmcuZWRpdENvb2xkb3duICogMTAwMCAtIG1pbGxpc1NpbmNlTGFzdCk7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gVGhlIGxhc3QgZWRpdCBzdGFydGVkIGF0IGxlYXN0IGNmZy5lZGl0Q29vbGRvd24gc2Vjb25kcyBhZ29cblx0XHRjb25zdCBzYXZlID0gcGVuZGluZ1NhdmVzLnNoaWZ0KCk7XG5cdFx0c2F2ZVBhZ2Vcblx0XHRcdC5hcHBseSh0aGlzLCBzYXZlLmFyZ3MpXG5cdFx0XHQuZG9uZSgoKSA9PiB7XG5cdFx0XHRcdGNoZWNrQW5kU2F2ZSgpO1xuXHRcdFx0XHRzYXZlLmRmZC5yZXNvbHZlKCk7XG5cdFx0XHR9KVxuXHRcdFx0LmZhaWwoKGRlc2NyaXB0aW9uKSA9PiB7XG5cdFx0XHRcdGNoZWNrQW5kU2F2ZSgpO1xuXHRcdFx0XHRzYXZlLmRmZC5yZWplY3QoZGVzY3JpcHRpb24pO1xuXHRcdFx0fSk7XG5cdFx0Ly8gV2UnbGwgdXNlIHRoZSB0aW1lIHNpbmNlIHRoZSBsYXN0IGVkaXQgc3RhcnRlZFxuXHRcdGxhc3RFZGl0TWlsbGlzID0gRGF0ZS5ub3coKTtcblx0fVxufTtcblxuLyogU2F2ZSB0aGUgY2hhbmdlcyBtYWRlIHRvIGEgcGFnZS4gUmV0dXJucyBhIGpRdWVyeSBwcm9taXNlIChzdWNjZXNzIC0gbm8gcGFyYW1zLC8qICogZmFpbHVyZSAtIGVycm9yIGRlc2NyaXB0aW9uKS8qICogcGFnZVRpdGxlOiBUaXRsZSBvZiB0aGUgcGFnZS8qICogcGFnZTogUGFnZSBkYXRhLyogKiBzdW1tYXJ5OiBTdW1tYXJ5IG9mIHRoZSBjaGFuZ2VzIG1hZGUgdG8gdGhlIHBhZ2UvKiAqIG1pbm9yRWRpdDogV2hldGhlciB0byBtYXJrIHRoZSBlZGl0IGFzICdtaW5vcicvKiAqIGJvdEVkaXQ6IFdoZXRoZXIgdG8gbWFyayB0aGUgZWRpdCBhcyAnYm90JyAqL1xuY29uc3Qgc2F2ZVBhZ2UgPSAocGFnZVRpdGxlLCB7ZWRpdFRva2VuLCBjb250ZW50LCBiYXNlVGltZVN0YW1wLCBzdGFydFRpbWVTdGFtcH0sIHN1bW1hcnksIG1pbm9yRWRpdCwgYm90RWRpdCkgPT4ge1xuXHRjb25zdCBkZWZlcnJlZCA9IG5ldyAkLkRlZmVycmVkKCk7XG5cdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHR0aXRsZTogcGFnZVRpdGxlLFxuXHRcdHRva2VuOiBlZGl0VG9rZW4sXG5cdFx0dGV4dDogY29udGVudCxcblx0XHRiYXNldGltZXN0YW1wOiBiYXNlVGltZVN0YW1wLFxuXHRcdHN0YXJ0dGltZXN0YW1wOiBzdGFydFRpbWVTdGFtcCxcblx0XHRzdW1tYXJ5LFxuXHRcdHdhdGNobGlzdDogY2ZnLndhdGNoLFxuXHRcdG1pbm9yOiBtaW5vckVkaXQsXG5cdFx0Ym90OiBib3RFZGl0LFxuXHR9O1xuXHRhcGkucG9zdChwYXJhbXMpXG5cdFx0LmRvbmUoKCkgPT4ge1xuXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZSgpO1xuXHRcdH0pXG5cdFx0LmZhaWwoKGNvZGUpID0+IHtcblx0XHRcdGRlZmVycmVkLnJlamVjdChtZXNzYWdlcy5zYXZlUGFnZUVycm9yLnJlcGxhY2UoJyQxJywgcGFnZVRpdGxlKS5yZXBsYWNlKCckMicsIGNvZGUpKTtcblx0XHR9KTtcblx0cmV0dXJuIGRlZmVycmVkLnByb21pc2UoKTtcbn07XG5cbmV4cG9ydCB7aW5zdGFsbH07XG4iLCAiLyoqXG4gKiBEaXNhbUFzc2lzdDogYSB0b29sIGZvciByZXBhaXJpbmcgbGlua3MgZnJvbSBhcnRpY2xlcyB0byBkaXNhbWJpZ3VhdGlvbiBwYWdlcy5cbiAqIOeUsVF3ZXJ0eXl0cmV3cXF3ZXJ0eeacgOWIneiuvuiuoe+8mkNDIEJZLVNBIDMuMFxuICog55SxR1pXRGVy5pys5Zyw5YyW77yaMjAyMC0wOC0xOSBDQyBCWS1TQSAzLjBcbiAqIOeUseWSjOW5s+Wli+aWl+aVkeWcsOeQg+eojeS9nOe/u+ivkSAyMDIxLTA1LTE1IENDIEJZLVNBIDMuMFxuICog5rGC6Ze755m+56eRTmp6anrnroDkvZPljJYgMjAyMi0yLTE0IENDIEJZLVNBIDQuMFxuICovXG5pbXBvcnQgJy4vRGlzYW1Bc3Npc3QubGVzcyc7XG5cbmltcG9ydCB7aW5zdGFsbH0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuXG4kKGluc3RhbGwpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEs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QUFNLEVBQ2I3TCxLQUFLLE1BQU07QUFDWG1CLGFBQVNFLFFBQVE7RUFDbEIsQ0FBQyxFQUNBSCxLQUFNMEwsVUFBUztBQUNmekwsYUFBUzBMLE9BQU94VixTQUFTMkIsY0FBY3dJLFFBQVEsTUFBTTRCLFNBQVMsRUFBRTVCLFFBQVEsTUFBTW9MLElBQUksQ0FBQztFQUNwRixDQUFDO0FBQ0YsU0FBT3pMLFNBQVNZLFFBQVE7QUFDekI7O0FDcmdDQXhHLEVBQUVOLE9BQU87IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjZmciLCAiZGlzYW1DYXRlZ29yaWVzIiwgImRpc2FtTGlua1RlbXBsYXRlcyIsICJkaXNhbUxpbmtJZ25vcmVUZW1wbGF0ZXMiLCAiZGlzYW1Gb3JtYXQiLCAiZGlzYW1SZWdFeHAiLCAiZGlzYW1OZWVkZWRUZXh0IiwgImNvbmNhdCIsICJyZWRpcmVjdFRvRGlzYW0iLCAiaW50ZW50aW9uYWxMaW5rT3B0aW9uIiwgInRhcmdldE5hbWVzcGFjZXMiLCAiYmFja2xpbmtMaW1pdCIsICJxdWVyeVRpdGxlTGltaXQiLCAicmFkaXVzIiwgIm51bUNvbnRleHRMaW5lcyIsICJoaXN0b3J5U2l6ZSIsICJlZGl0Q29vbGRvd24iLCAid2F0Y2giLCAibWVzc2FnZXMiLCAic3RhcnQiLCAic3RhcnRNYWluIiwgInN0YXJ0U2FtZSIsICJjbG9zZSIsICJ1bmRvIiwgIm9taXQiLCAicmVmcmVzaCIsICJ0aXRsZUFzVGV4dCIsICJkaXNhbU5lZWRlZCIsICJpbnRlbnRpb25hbExpbmsiLCAidGl0bGVBc1RleHRQcm9tcHQiLCAicmVtb3ZlTGluayIsICJvcHRpb25NYXJrZXIiLCAidGFyZ2V0T3B0aW9uTWFya2VyIiwgInJlZGlyZWN0T3B0aW9uTWFya2VyIiwgInBhZ2VUaXRsZUxpbmUiLCAibm9Nb3JlTGlua3MiLCAicGVuZGluZ0VkaXRDb3VudGVyIiwgInBlbmRpbmdFZGl0Qm94IiwgInBlbmRpbmdFZGl0Qm94VGltZUVzdGltYXRpb24iLCAicGVuZGluZ0VkaXRCb3hMaW1pdGVkIiwgImVycm9yIiwgImZldGNoUmVkaXJlY3RzRXJyb3IiLCAiZ2V0QmFja2xpbmtzRXJyb3IiLCAiZmV0Y2hSaWdodHNFcnJvciIsICJsb2FkUGFnZUVycm9yIiwgInNhdmVQYWdlRXJyb3IiLCAiZGlzbWlzc0Vycm9yIiwgInBlbmRpbmciLCAiZWRpdEluUHJvZ3Jlc3MiLCAiZWxsaXBzaXMiLCAibm90aWZ5Q2hhcmFjdGVyIiwgInN1bW1hcnkiLCAic3VtbWFyeUNoYW5nZWQiLCAic3VtbWFyeU9taXR0ZWQiLCAic3VtbWFyeVJlbW92ZWQiLCAic3VtbWFyeUludGVudGlvbmFsIiwgInN1bW1hcnlIZWxwTmVlZGVkIiwgInN1bW1hcnlTZXBhcmF0b3IiLCAicmVkaXJlY3RTdW1tYXJ5IiwgInN0YXJ0TGluayIsICJ1aSIsICJsaW5rcyIsICJwYWdlQ2hhbmdlcyIsICJjdXJyZW50UGFnZVRpdGxlIiwgImN1cnJlbnRQYWdlUGFyYW1ldGVycyIsICJjdXJyZW50TGluayIsICJwb3NzaWJsZUJhY2tsaW5rRGVzdGluYXRpb25zIiwgImZvcmNlU2FtZVBhZ2UiLCAicnVubmluZyIsICJjaG9vc2luZyIsICJjYW5NYXJrSW50ZW50aW9uYWxMaW5rcyIsICJkaXNwbGF5ZWRQYWdlcyIsICJlZGl0Q291bnQiLCAiZWRpdExpbWl0IiwgInBlbmRpbmdTYXZlcyIsICJwZW5kaW5nRWRpdEJveFRleHQiLCAibGFzdEVkaXRNaWxsaXMiLCAicnVubmluZ1NhdmVzIiwgImluc3RhbGwiLCAid2dBY3Rpb24iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJpc0Rpc2FtIiwgIiQiLCAicG9ydGxldElkIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiUmVnRXhwIiwgInRlc3QiLCAiZ2V0VGl0bGUiLCAic3RhcnRNYWluTGluayIsICJ1dGlsIiwgImFkZFBvcnRsZXRMaW5rIiwgIm9uIiwgInN0YXJ0U2FtZUxpbmsiLCAiYWRkIiwgImVuc3VyZURBQkV4aXN0cyIsICJ0aGVuIiwgImNhbk1hcmsiLCAiY3JlYXRlVUkiLCAiYWRkVW5sb2FkQ29uZmlybSIsICJtYXJrRGlzYW1PcHRpb25zIiwgImNoZWNrRWRpdExpbWl0IiwgInRvZ2dsZVBlbmRpbmdFZGl0Qm94IiwgImRvUGFnZSIsICIkYm9keSIsICJkaXNwbGF5IiwgImFkZENsYXNzIiwgImZpbmlzaGVkTWVzc2FnZSIsICJ0ZXh0IiwgImhpZGUiLCAiY29udGV4dCIsICJ1bmRvQnV0dG9uIiwgImNyZWF0ZUJ1dHRvbiIsICJvbWl0QnV0dG9uIiwgImVuZEJ1dHRvbiIsICJzYXZlQW5kRW5kIiwgInJlZnJlc2hCdXR0b24iLCAidGl0bGVBc1RleHRCdXR0b24iLCAiY2hvb3NlVGl0bGVGcm9tUHJvbXB0IiwgImludGVudGlvbmFsTGlua0J1dHRvbiIsICJjaG9vc2VJbnRlbnRpb25hbExpbmsiLCAiZGlzYW1OZWVkZWRCdXR0b24iLCAiY2hvb3NlRGlzYW1OZWVkZWQiLCAicmVtb3ZlTGlua0J1dHRvbiIsICJjaG9vc2VMaW5rUmVtb3ZhbCIsICJ0b3AiLCAiYXBwZW5kIiwgImxlZnRCdXR0b25zIiwgInJpZ2h0QnV0dG9ucyIsICJhbGxCdXR0b25zIiwgInVwZGF0ZUVkaXRDb3VudGVyIiwgInRvZ2dsZUFjdGlvbkJ1dHRvbnMiLCAiZmluZCIsICJiZWZvcmUiLCAiZmFkZUluIiwgIndpbmRvdyIsICJjaGVja0FjdHVhbENoYW5nZXMiLCAib3B0aW9uUGFnZVRpdGxlcyIsICJvcHRpb25NYXJrZXJzIiwgImdldERpc2FtT3B0aW9ucyIsICJlYWNoIiwgIl9pbmRleCIsICJlbGVtZW50IiwgImxpbmsiLCAidGl0bGUiLCAiZXh0cmFjdFBhZ2VOYW1lIiwgImF0dHIiLCAiZXYiLCAicHJldmVudERlZmF1bHQiLCAiY2hvb3NlUmVwbGFjZW1lbnQiLCAiYWZ0ZXIiLCAibGVuZ3RoIiwgInRhcmdldFBhZ2UiLCAiZ2V0VGFyZ2V0UGFnZSIsICJmZXRjaFJlZGlyZWN0cyIsICJkb25lIiwgInJlZGlyZWN0cyIsICJlbmRUYXJnZXRQYWdlIiwgInJlc29sdmVSZWRpcmVjdCIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiZW50cmllcyIsICJfc3RlcCIsICJzIiwgIm4iLCAiaWkiLCAib3B0aW9uUGFnZVRpdGxlIiwgInZhbHVlIiwgImVuZE9wdGlvblRpdGxlIiwgImlzU2FtZVBhZ2UiLCAiZXJyIiwgImUiLCAiZiIsICJmYWlsIiwgImRlZmVycmVkIiwgIkRlZmVycmVkIiwgInJlc29sdmUiLCAiZXhlYyIsICJkaXNhbVRpdGxlIiwgInJlcGxhY2UiLCAibG9hZFBhZ2UiLCAicGFnZSIsICJtaXNzaW5nIiwgImNvbnRlbnQiLCAic2F2ZVBhZ2UiLCAiZGVzY3JpcHRpb24iLCAicHJvbWlzZSIsICJmZXRjaFJpZ2h0cyIsICJyaWdodHMiLCAiaW5jbHVkZXMiLCAiYWx3YXlzIiwgImFwcGx5Q2hhbmdlIiwgInNoaWZ0IiwgImRhdGEiLCAiZG9MaW5rIiwgImdldEJhY2tsaW5rcyIsICJiYWNrbGlua3MiLCAicGFnZVRpdGxlcyIsICJfaSIsICJfcGVuZGluZ1NhdmVzIiwgImVsIiwgImZpbHRlciIsICJ0IiwgInJlbW92ZURpc2FtIiwgInVwZGF0ZUNvbnRleHQiLCAiZXh0cmFjdExpbmtUb1BhZ2UiLCAiZW5kIiwgInBhZ2VUaXRsZSIsICJleHRyYSIsICJhZGRDaGFuZ2UiLCAicmVwbGFjZUxpbmsiLCAicHJvbXB0IiwgImxhc3RQYWdlIiwgImF0IiwgInVuc2hpZnQiLCAiY29udGVudEJlZm9yZSIsICJwb3AiLCAiZW5hYmxlZCIsICJhZmZlY3RlZEJ1dHRvbnMiLCAiX2kyIiwgIl9hZmZlY3RlZEJ1dHRvbnMiLCAiYnV0dG9uIiwgInByb3AiLCAidG9nZ2xlRmluaXNoZWRNZXNzYWdlIiwgInNob3ciLCAidG9nZ2xlIiwgImZhZGVPdXQiLCAibm90aWZ5Q29tcGxldGlvbiIsICJvbGRUaXRsZSIsICJvbmUiLCAiaHRtbCIsICJnZXRVcmwiLCAicmVkaXJlY3QiLCAiZXNjYXBlIiwgImV4dHJhY3RDb250ZXh0IiwgImVtcHR5IiwgIm51bUxpbmVzIiwgIk1hdGgiLCAiY2VpbCIsICJoZWlnaHQiLCAiTnVtYmVyIiwgInBhcnNlRmxvYXQiLCAiY3NzIiwgIkFycmF5IiwgImZyb20iLCAiam9pbiIsICJoYXNEaXNhbVRlbXBsYXRlIiwgImNvdW50QWN0dWFsbHlDaGFuZ2VkRnVsbHlDaGVja2VkUGFnZXMiLCAidGV4dENvbnRlbnQiLCAic2Vjb25kc1RvSEhNTVNTIiwgInBhZ2VDaGFuZ2UiLCAiY2hhbmdlU3VtbWFyaWVzIiwgInNhdmUiLCAic2F2ZVdpdGhDb29sZG93biIsICJhcHBseUFsbENoYW5nZXMiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAib2xkQ29udGVudCIsICJsYXN0UGFnZUNoYW5nZSIsICJjb3VudEFjdHVhbENoYW5nZXMiLCAiY2hhbmdlQ291bnQiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAibGFzdENoYW5nZSIsICJjdXJyZW50VG9vbFVJIiwgInJlbW92ZUNsYXNzIiwgInJlbW92ZSIsICJjb21wbGV0ZSIsICJlcnJvckRlc2NyaXB0aW9uIiwgImVycm9yQm94IiwgInVpSXNJblBsYWNlIiwgImNvbnRhaW5zIiwgImRvY3VtZW50RWxlbWVudCIsICJuZXh0RWxlbWVudCIsICJuZXdDb250ZW50IiwgImxpbmtTdGFydCIsICJzbGljZSIsICJtYXgiLCAibGlua0VuZCIsICJhZnRlckRlc2NyaXB0aW9uIiwgImV4dHJhY3RMaW5rIiwgImxhc3RJbmRleCIsICJ0aXRsZVJlZ2V4IiwgInRlbXBsYXRlUmVnZXgiLCAibWF0Y2giLCAiaW5kZXgiLCAiX21hdGNoJCIsICJwb3NzaWJseUFtYmlndW91cyIsICJfZW5kIiwgInJlc3QiLCAidGVtcGxhdGVNYXRjaCIsICJ0ZW1wbGF0ZVRpdGxlIiwgImdldENhbm9uaWNhbFRpdGxlIiwgImRlc3RpbmF0aW9ucyIsICJ3Z1BhZ2VOYW1lIiwgIl9tYXRjaCQyIiwgInRpdGxlMSIsICJ0aXRsZTIiLCAiVGl0bGUiLCAiZ2V0UHJlZml4ZWRUZXh0IiwgImNvbnRleHRTdGFydCIsICJjb250ZXh0RW5kIiwgImNvbnRleHRQcmV2IiwgImNvbnRleHROZXh0IiwgInBhZ2VOYW1lIiwgImV4dHJhY3RQYWdlTmFtZVJhdyIsICJzZWN0aW9uUG9zIiwgImluZGV4T2YiLCAic2VjdGlvbiIsICJ3Z1NjcmlwdCIsICJ3Z0FydGljbGVQYXRoIiwgImhhc0NsYXNzIiwgImhyZWYiLCAiZ2V0UGFyYW1WYWx1ZSIsICJyZWdleCIsICJyZWdleFJlc3VsdCIsICJpc0FycmF5IiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJ3Z0NhdGVnb3JpZXMiLCAiY2F0ZWdvcmllcyIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJjYXRlZ29yeSIsICJ0b3RhbFNlY29uZHMiLCAiaGhtbXNzIiwgImhvdXJzIiwgImZsb29yIiwgIm1pbnV0ZXMiLCAic2Vjb25kcyIsICJwYWQiLCAic3RyIiwgInoiLCAid2lkdGgiLCAidG9TdHJpbmciLCAib25DbGljayIsICJ0eXBlIiwgInBvc3NpYmxlUmVkaXJlY3RzIiwgImFwcGxpZWRSZWRpcmVjdCIsICJ2aXNpdGVkUGFnZXMiLCAiY3VycmVudFBhZ2UiLCAiX2l0ZXJhdG9yNSIsICJfc3RlcDUiLCAicG9zc2libGVSZWRpcmVjdCIsICJ0byIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImxpc3QiLCAiYmx0aXRsZSIsICJibHJlZGlyZWN0IiwgImJsbGltaXQiLCAiYmxuYW1lc3BhY2UiLCAicXVlcnkiLCAibGlua1RpdGxlcyIsICJiYWNrbGlua3NRdWVyeSIsICJfaXRlcmF0b3I2IiwgIl9zdGVwNiIsICJyZWRpcmxpbmtzIiwgIl9pdGVyYXRvcjciLCAiX3N0ZXA3IiwgImNvZGUiLCAicmVqZWN0IiwgImN1cnJlbnRUaXRsZXMiLCAicmVzdFRpdGxlcyIsICJ0aXRsZXMiLCAiX3F1ZXJ5JHJlZGlyZWN0cyIsICJ0aGVzZVJlZGlyZWN0cyIsICJtZXRhIiwgInVpcHJvcCIsICJ1c2VyaW5mbyIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJydnByb3AiLCAicnZzbG90cyIsICJyYXdQYWdlIiwgInBhZ2VzIiwgInJldmlzaW9ucyIsICJzbG90cyIsICJtYWluIiwgImJhc2VUaW1lU3RhbXAiLCAidGltZXN0YW1wIiwgInN0YXJ0VGltZVN0YW1wIiwgInN0YXJ0dGltZXN0YW1wIiwgImVkaXRUb2tlbiIsICJ0b2tlbnMiLCAiY3NyZnRva2VuIiwgImFyZ3MiLCAiZGZkIiwgImNoZWNrQW5kU2F2ZSIsICJtaWxsaXNTaW5jZUxhc3QiLCAiRGF0ZSIsICJub3ciLCAic2V0VGltZW91dCIsICJhcHBseSIsICJtaW5vckVkaXQiLCAiYm90RWRpdCIsICJ0b2tlbiIsICJiYXNldGltZXN0YW1wIiwgIndhdGNobGlzdCIsICJtaW5vciIsICJib3QiLCAicG9zdCJdCn0K
