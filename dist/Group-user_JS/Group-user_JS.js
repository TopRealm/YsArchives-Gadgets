/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Common.js}
 * @base {@link https://meta.wikimedia.org/wiki/MediaWiki:Gadget-SousPages.js}
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-CleanDeleteReasons.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/Group-user_JS}
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

// dist/Group-user_JS/Group-user_JS.js
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
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
//! src/Group-user_JS/options.json
var options_exports = {};
__export(options_exports, {
  configKey: () => configKey,
  default: () => options_default
});
var configKey = "gadget-Group-user_JS__Initialized";
var options_default = {
  configKey
};
//! src/Group-user_JS/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Edit: (0, import_ext_gadget.localize)({
      en: "Edit",
      ja: "編集",
      "zh-hans": "编辑",
      "zh-hant": "編輯"
    }),
    Log: (0, import_ext_gadget.localize)({
      en: "Log",
      ja: "ログ",
      "zh-hans": "日志",
      "zh-hant": "日誌"
    }),
    Subpages: (0, import_ext_gadget.localize)({
      en: "Subpage",
      ja: "子ページ",
      "zh-hans": "子页面",
      "zh-hant": "子頁面"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/Group-user_JS/modules/addLog.ts
var addLog = () => {
  const {
    wgNamespaceNumber,
    wgPageName
  } = mw.config.get();
  if ([-1, 2, 3].includes(wgNamespaceNumber)) {
    return;
  }
  mw.util.addPortletLink("p-tb", mw.util.getUrl("Special:Logs", {
    page: wgPageName
  }), getMessage("Log"), "t-log");
};
//! src/Group-user_JS/modules/addSubpage.ts
var addSubpage = () => {
  const {
    wgNamespaceNumber,
    wgPageName
  } = mw.config.get();
  if ([-1, 0, 14].includes(wgNamespaceNumber)) {
    return;
  }
  mw.util.addPortletLink("p-tb", mw.util.getUrl("Special:PrefixIndex/".concat(wgPageName)), getMessage("Subpages"), "t-subpage");
};
//! src/Group-user_JS/modules/fixReason.ts
var fixReason = ($body) => {
  const {
    wgAction
  } = mw.config.get();
  if (wgAction === "delete") {
    const $wpReason = $body.find("input[name=wpReason]");
    if (!$wpReason.length) {
      return;
    }
    const autoReasonRegExp = /(内容|page was empty|content before blanking was)/i;
    if (autoReasonRegExp.test(String($wpReason.val()))) {
      $wpReason.val("");
    }
  }
};
//! src/Group-user_JS/modules/fixSummary.ts
var fixSummary = ($body) => {
  const {
    wgCanonicalSpecialPageName
  } = mw.config.get();
  switch (wgCanonicalSpecialPageName) {
    case "MassEditRegex":
      $body.find("#wpSummaryLabel").html($body.find("#wpSummaryLabel").text().replace(/\[\[#\.\|(.+?)]]/g, "$1"));
      break;
    case "ReplaceText":
      $body.find("input[name=doAnnounce]").prop({
        checked: false,
        disabled: true
      });
      break;
  }
};
//! src/Group-user_JS/Group-user_JS.ts
var import_ext_gadget3 = require("ext.gadget.Util");
//! src/Group-user_JS/modules/linkSearchEditButton.ts
var linkSearchEditButton = ($body) => {
  const {
    wgCanonicalSpecialPageName
  } = mw.config.get();
  if (wgCanonicalSpecialPageName !== "LinkSearch") {
    return;
  }
  var _iterator = _createForOfIteratorHelper($body.find('.mw-spcontent a[href^="/wiki"]')), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const element = _step.value;
      $("<span>").append(" （", $("<a>").attr("href", "".concat(element.href, "?action=edit")).text(getMessage("Edit")), "）").insertAfter(element);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
//! src/Group-user_JS/modules/loadGadgetEditForm.ts
var loadGadgetEditForm = () => {
  const EDIT_GADGETS = ["ext.gadget.EditForm", "ext.gadget.EditForm_JS"];
  const usingEditFormJS = (gadgets) => {
    void mw.loader.using(gadgets);
  };
  const {
    wgAction
  } = mw.config.get();
  if (["edit", "submit"].includes(wgAction)) {
    usingEditFormJS(EDIT_GADGETS);
  }
};
//! src/Group-user_JS/modules/replaceRandom.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var replaceRandom = ($body) => {
  const {
    wgWikiID
  } = mw.config.get();
  if (wgWikiID !== "zhysy") {
    return;
  }
  if (!(0, import_ext_gadget2.userIsInGroup)(["rnrsverify-confirmed", "rnrsverify-exempt", "steward", "honorary-maintainer", "qiuwen", "confirmed", "autoconfirmed"])) {
    return;
  }
  const $randomPageLink = $body.find("#n-randompage a");
  $randomPageLink.attr("href", "/wiki/Special:RandomPage");
};
//! src/Group-user_JS/modules/smartNewSection.ts
var smartNewSection = ($body) => {
  if (!mw.user.options.get("discussiontools-newtopictool") || !mw.user.options.get("discussiontools-betaenable")) {
    const $caTalk = $body.find("#ca-talk");
    const {
      wgNamespaceNumber
    } = mw.config.get();
    if ($caTalk.hasClass("new") && wgNamespaceNumber !== 2) {
      const $a = $("a:first", $caTalk);
      $a.attr("href", "".concat($a.attr("href"), "&section=new"));
    }
  }
};
//! src/Group-user_JS/Group-user_JS.ts
(function userJS() {
  const {
    configKey: configKey2
  } = options_exports;
  if (mw.config.get(configKey2)) {
    return;
  }
  mw.config.set(configKey2, true);
  void loadGadgetEditForm();
  void (0, import_ext_gadget3.getBody)().then(($body) => {
    addLog();
    addSubpage();
    fixReason($body);
    fixSummary($body);
    linkSearchEditButton($body);
    smartNewSection($body);
    replaceRandom($body);
  });
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dyb3VwLXVzZXJfSlMvb3B0aW9ucy5qc29uIiwgInNyYy9Hcm91cC11c2VyX0pTL21vZHVsZXMvaTE4bi50cyIsICJzcmMvR3JvdXAtdXNlcl9KUy9tb2R1bGVzL2FkZExvZy50cyIsICJzcmMvR3JvdXAtdXNlcl9KUy9tb2R1bGVzL2FkZFN1YnBhZ2UudHMiLCAic3JjL0dyb3VwLXVzZXJfSlMvbW9kdWxlcy9maXhSZWFzb24udHMiLCAic3JjL0dyb3VwLXVzZXJfSlMvbW9kdWxlcy9maXhTdW1tYXJ5LnRzIiwgInNyYy9Hcm91cC11c2VyX0pTL0dyb3VwLXVzZXJfSlMudHMiLCAic3JjL0dyb3VwLXVzZXJfSlMvbW9kdWxlcy9saW5rU2VhcmNoRWRpdEJ1dHRvbi50cyIsICJzcmMvR3JvdXAtdXNlcl9KUy9tb2R1bGVzL2xvYWRHYWRnZXRFZGl0Rm9ybS50cyIsICJzcmMvR3JvdXAtdXNlcl9KUy9tb2R1bGVzL3JlcGxhY2VSYW5kb20udHMiLCAic3JjL0dyb3VwLXVzZXJfSlMvbW9kdWxlcy9zbWFydE5ld1NlY3Rpb24udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJjb25maWdLZXlcIjogXCJnYWRnZXQtR3JvdXAtdXNlcl9KU19fSW5pdGlhbGl6ZWRcIlxufVxuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRFZGl0OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VkaXQnLFxuXHRcdFx0amE6ICfnt6jpm4YnLFxuXHRcdFx0J3poLWhhbnMnOiAn57yW6L6RJyxcblx0XHRcdCd6aC1oYW50JzogJ+e3qOi8rycsXG5cdFx0fSksXG5cdFx0TG9nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvZycsXG5cdFx0XHRqYTogJ+ODreOCsCcsXG5cdFx0XHQnemgtaGFucyc6ICfml6Xlv5cnLFxuXHRcdFx0J3poLWhhbnQnOiAn5pel6KqMJyxcblx0XHR9KSxcblx0XHRTdWJwYWdlczogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTdWJwYWdlJyxcblx0XHRcdGphOiAn5a2Q44Oa44O844K4Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtkOmhtemdoicsXG5cdFx0XHQnemgtaGFudCc6ICflrZDpoIHpnaInLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IGFkZExvZyA9ICgpOiB2b2lkID0+IHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoWy0xLCAyLCAzXS5pbmNsdWRlcyh3Z05hbWVzcGFjZU51bWJlcikpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRtdy51dGlsLmFkZFBvcnRsZXRMaW5rKFxuXHRcdCdwLXRiJyxcblx0XHRtdy51dGlsLmdldFVybCgnU3BlY2lhbDpMb2dzJywge1xuXHRcdFx0cGFnZTogd2dQYWdlTmFtZSxcblx0XHR9KSxcblx0XHRnZXRNZXNzYWdlKCdMb2cnKSxcblx0XHQndC1sb2cnXG5cdCk7XG59O1xuXG5leHBvcnQge2FkZExvZ307XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG4vKiDlkJHkvqfovrnmoI/mt7vliqDigJzlrZDpobXpnaLigJ3oj5zljZUgKi9cbmNvbnN0IGFkZFN1YnBhZ2UgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IHt3Z05hbWVzcGFjZU51bWJlciwgd2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKFstMSwgMCwgMTRdLmluY2x1ZGVzKHdnTmFtZXNwYWNlTnVtYmVyKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG13LnV0aWwuYWRkUG9ydGxldExpbmsoXG5cdFx0J3AtdGInLFxuXHRcdG13LnV0aWwuZ2V0VXJsKGBTcGVjaWFsOlByZWZpeEluZGV4LyR7d2dQYWdlTmFtZX1gKSxcblx0XHRnZXRNZXNzYWdlKCdTdWJwYWdlcycpLFxuXHRcdCd0LXN1YnBhZ2UnXG5cdCk7XG59O1xuXG5leHBvcnQge2FkZFN1YnBhZ2V9O1xuIiwgImNvbnN0IGZpeFJlYXNvbiA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3Qge3dnQWN0aW9ufSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAod2dBY3Rpb24gPT09ICdkZWxldGUnKSB7XG5cdFx0Y29uc3QgJHdwUmVhc29uOiBKUXVlcnkgPSAkYm9keS5maW5kKCdpbnB1dFtuYW1lPXdwUmVhc29uXScpO1xuXHRcdGlmICghJHdwUmVhc29uLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGF1dG9SZWFzb25SZWdFeHA6IFJlZ0V4cCA9IC8o5YaF5a65fHBhZ2Ugd2FzIGVtcHR5fGNvbnRlbnQgYmVmb3JlIGJsYW5raW5nIHdhcykvaTtcblx0XHRpZiAoYXV0b1JlYXNvblJlZ0V4cC50ZXN0KFN0cmluZygkd3BSZWFzb24udmFsKCkpKSkge1xuXHRcdFx0JHdwUmVhc29uLnZhbCgnJyk7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge2ZpeFJlYXNvbn07XG4iLCAiY29uc3QgZml4U3VtbWFyeSA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3Qge3dnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0c3dpdGNoICh3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSkge1xuXHRcdGNhc2UgJ01hc3NFZGl0UmVnZXgnOlxuXHRcdFx0JGJvZHkuZmluZCgnI3dwU3VtbWFyeUxhYmVsJykuaHRtbChcblx0XHRcdFx0JGJvZHlcblx0XHRcdFx0XHQuZmluZCgnI3dwU3VtbWFyeUxhYmVsJylcblx0XHRcdFx0XHQudGV4dCgpXG5cdFx0XHRcdFx0LnJlcGxhY2UoL1xcW1xcWyNcXC5cXHwoLis/KV1dL2csICckMScpXG5cdFx0XHQpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnUmVwbGFjZVRleHQnOlxuXHRcdFx0JGJvZHkuZmluZCgnaW5wdXRbbmFtZT1kb0Fubm91bmNlXScpLnByb3Aoe1xuXHRcdFx0XHRjaGVja2VkOiBmYWxzZSxcblx0XHRcdFx0ZGlzYWJsZWQ6IHRydWUsXG5cdFx0XHR9KTtcblx0XHRcdGJyZWFrO1xuXHR9XG59O1xuXG5leHBvcnQge2ZpeFN1bW1hcnl9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHthZGRMb2d9IGZyb20gJy4vbW9kdWxlcy9hZGRMb2cnO1xuaW1wb3J0IHthZGRTdWJwYWdlfSBmcm9tICcuL21vZHVsZXMvYWRkU3VicGFnZSc7XG5pbXBvcnQge2ZpeFJlYXNvbn0gZnJvbSAnLi9tb2R1bGVzL2ZpeFJlYXNvbic7XG5pbXBvcnQge2ZpeFN1bW1hcnl9IGZyb20gJy4vbW9kdWxlcy9maXhTdW1tYXJ5JztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7bGlua1NlYXJjaEVkaXRCdXR0b259IGZyb20gJy4vbW9kdWxlcy9saW5rU2VhcmNoRWRpdEJ1dHRvbic7XG5pbXBvcnQge2xvYWRHYWRnZXRFZGl0Rm9ybX0gZnJvbSAnLi9tb2R1bGVzL2xvYWRHYWRnZXRFZGl0Rm9ybSc7XG5pbXBvcnQge3JlcGxhY2VSYW5kb219IGZyb20gJy4vbW9kdWxlcy9yZXBsYWNlUmFuZG9tJztcbmltcG9ydCB7c21hcnROZXdTZWN0aW9ufSBmcm9tICcuL21vZHVsZXMvc21hcnROZXdTZWN0aW9uJztcblxuKGZ1bmN0aW9uIHVzZXJKUygpOiB2b2lkIHtcblx0Y29uc3Qge2NvbmZpZ0tleX0gPSBPUFRJT05TO1xuXG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoY29uZmlnS2V5KSkge1xuXHRcdHJldHVybjtcblx0fVxuXHQvLyBTZXQgZ3VhcmRcblx0bXcuY29uZmlnLnNldChjb25maWdLZXksIHRydWUpO1xuXG5cdC8qIOWKoOi9vee8lui+keeVjOmdouiEmuacrCAqL1xuXHR2b2lkIGxvYWRHYWRnZXRFZGl0Rm9ybSgpO1xuXG5cdHZvaWQgZ2V0Qm9keSgpLnRoZW4oKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRcdC8qIOWQkeS+p+i+ueagj+a3u+WKoOKAnOaXpeW/l+KAneiPnOWNlSAqL1xuXHRcdGFkZExvZygpO1xuXHRcdC8qIOWQkeS+p+i+ueagj+a3u+WKoOKAnOWtkOmhtemdouKAneiPnOWNlSAqL1xuXHRcdGFkZFN1YnBhZ2UoKTtcblx0XHQvKiDkv67mlLnliKDpmaTmkZjopoEgKi9cblx0XHRmaXhSZWFzb24oJGJvZHkpO1xuXHRcdC8qIOS/ruaUuee8lui+keaRmOimgSAqL1xuXHRcdGZpeFN1bW1hcnkoJGJvZHkpO1xuXHRcdC8qIOWcqFtbU3BlY2lhbDpMaW5rU2VhcmNoXV3mmL7npLrigJznvJbovpHigJ3mjInpkq4gKi9cblx0XHRsaW5rU2VhcmNoRWRpdEJ1dHRvbigkYm9keSk7XG5cdFx0Lyog5pm66IO96K6o6K666aG157yW6L6R77yI5paw5bu677yJICovXG5cdFx0c21hcnROZXdTZWN0aW9uKCRib2R5KTtcblx0XHQvKiDmm7/mjaLpmo/mnLrpobXpnaLpk77mjqUgKi9cblx0XHRyZXBsYWNlUmFuZG9tKCRib2R5KTtcblx0fSk7XG59KSgpO1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgbGlua1NlYXJjaEVkaXRCdXR0b24gPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0IHt3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmICh3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSAhPT0gJ0xpbmtTZWFyY2gnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRib2R5LmZpbmQ8SFRNTEFuY2hvckVsZW1lbnQ+KCcubXctc3Bjb250ZW50IGFbaHJlZl49XCIvd2lraVwiXScpKSB7XG5cdFx0JCgnPHNwYW4+Jylcblx0XHRcdC5hcHBlbmQoJyDvvIgnLCAkKCc8YT4nKS5hdHRyKCdocmVmJywgYCR7ZWxlbWVudC5ocmVmfT9hY3Rpb249ZWRpdGApLnRleHQoZ2V0TWVzc2FnZSgnRWRpdCcpKSwgJ++8iScpXG5cdFx0XHQuaW5zZXJ0QWZ0ZXIoZWxlbWVudCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7bGlua1NlYXJjaEVkaXRCdXR0b259O1xuIiwgImNvbnN0IGxvYWRHYWRnZXRFZGl0Rm9ybSA9ICgpOiB2b2lkID0+IHtcblx0Y29uc3QgRURJVF9HQURHRVRTID0gWydleHQuZ2FkZ2V0LkVkaXRGb3JtJywgJ2V4dC5nYWRnZXQuRWRpdEZvcm1fSlMnXTtcblx0Y29uc3QgdXNpbmdFZGl0Rm9ybUpTID0gKGdhZGdldHM6IHN0cmluZyB8IHN0cmluZ1tdKTogdm9pZCA9PiB7XG5cdFx0dm9pZCBtdy5sb2FkZXIudXNpbmcoZ2FkZ2V0cyk7XG5cdH07XG5cdGNvbnN0IHt3Z0FjdGlvbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmIChbJ2VkaXQnLCAnc3VibWl0J10uaW5jbHVkZXMod2dBY3Rpb24pKSB7XG5cdFx0dXNpbmdFZGl0Rm9ybUpTKEVESVRfR0FER0VUUyk7XG5cdH1cbn07XG5cbmV4cG9ydCB7bG9hZEdhZGdldEVkaXRGb3JtfTtcbiIsICJpbXBvcnQge3VzZXJJc0luR3JvdXB9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IHJlcGxhY2VSYW5kb20gPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KSA9PiB7XG5cdGNvbnN0IHt3Z1dpa2lJRH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmICh3Z1dpa2lJRCAhPT0gJ3poeXN5Jykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChcblx0XHQhdXNlcklzSW5Hcm91cChbXG5cdFx0XHQncm5yc3ZlcmlmeS1jb25maXJtZWQnLFxuXHRcdFx0J3JucnN2ZXJpZnktZXhlbXB0Jyxcblx0XHRcdCdzdGV3YXJkJyxcblx0XHRcdCdob25vcmFyeS1tYWludGFpbmVyJyxcblx0XHRcdCdxaXV3ZW4nLFxuXHRcdFx0J2NvbmZpcm1lZCcsXG5cdFx0XHQnYXV0b2NvbmZpcm1lZCcsXG5cdFx0XSlcblx0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJHJhbmRvbVBhZ2VMaW5rID0gJGJvZHkuZmluZCgnI24tcmFuZG9tcGFnZSBhJyk7XG5cdCRyYW5kb21QYWdlTGluay5hdHRyKCdocmVmJywgJy93aWtpL1NwZWNpYWw6UmFuZG9tUGFnZScpO1xufTtcblxuZXhwb3J0IHtyZXBsYWNlUmFuZG9tfTtcbiIsICJjb25zdCBzbWFydE5ld1NlY3Rpb24gPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGlmICghbXcudXNlci5vcHRpb25zLmdldCgnZGlzY3Vzc2lvbnRvb2xzLW5ld3RvcGljdG9vbCcpIHx8ICFtdy51c2VyLm9wdGlvbnMuZ2V0KCdkaXNjdXNzaW9udG9vbHMtYmV0YWVuYWJsZScpKSB7XG5cdFx0Y29uc3QgJGNhVGFsazogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnI2NhLXRhbGsnKTtcblx0XHRjb25zdCB7d2dOYW1lc3BhY2VOdW1iZXJ9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRcdGlmICgkY2FUYWxrLmhhc0NsYXNzKCduZXcnKSAmJiB3Z05hbWVzcGFjZU51bWJlciAhPT0gMikge1xuXHRcdFx0Y29uc3QgJGE6IEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD4gPSAkKCdhOmZpcnN0JywgJGNhVGFsayk7XG5cdFx0XHQkYS5hdHRyKCdocmVmJywgYCR7JGEuYXR0cignaHJlZicpfSZzZWN0aW9uPW5ld2ApO1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHtzbWFydE5ld1NlY3Rpb259O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGtCQUFBLENBQUE7QUFBQUMsU0FBQUQsaUJBQUE7RUFBQUUsV0FBQUEsTUFBQUE7RUFBQUMsU0FBQUEsTUFBQUM7QUFBQSxDQUFBO0FBQ0MsSUFBQUYsWUFBYTtBQURkLElBQUFFLGtCQUFBO0VBQ0NGO0FBQ0Q7O0FDRkEsSUFBQUcsb0JBQXVCQyxRQUFBLGlCQUFBO0FBRXZCLElBQU1DLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLE9BQUEsR0FBTUgsa0JBQUFJLFVBQVM7TUFDZEMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLE1BQUEsR0FBS1Asa0JBQUFJLFVBQVM7TUFDYkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RFLFdBQUEsR0FBVVIsa0JBQUFJLFVBQVM7TUFDbEJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNRyxlQUFlUCxnQkFBZ0I7QUFFckMsSUFBTVEsYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QUMzQkEsSUFBTUMsU0FBU0EsTUFBWTtBQUMxQixR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R0FBS2xCLG1CQUFBc0MsU0FBUSxFQUFFQyxLQUFNeEQsV0FBeUM7QUFFN0RkLFdBQU87QUFFUFcsZUFBVztBQUVYRSxjQUFVQyxLQUFLO0FBRWZTLGVBQVdULEtBQUs7QUFFaEJrQix5QkFBcUJsQixLQUFLO0FBRTFCOEMsb0JBQWdCOUMsS0FBSztBQUVyQjBDLGtCQUFjMUMsS0FBSztFQUNwQixDQUFDO0FBQ0YsR0FBRzsiLAogICJuYW1lcyI6IFsib3B0aW9uc19leHBvcnRzIiwgIl9fZXhwb3J0IiwgImNvbmZpZ0tleSIsICJkZWZhdWx0IiwgIm9wdGlvbnNfZGVmYXVsdCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImdldEkxOG5NZXNzYWdlcyIsICJFZGl0IiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIkxvZyIsICJTdWJwYWdlcyIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiYWRkTG9nIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnUGFnZU5hbWUiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJpbmNsdWRlcyIsICJ1dGlsIiwgImFkZFBvcnRsZXRMaW5rIiwgImdldFVybCIsICJwYWdlIiwgImFkZFN1YnBhZ2UiLCAiY29uY2F0IiwgImZpeFJlYXNvbiIsICIkYm9keSIsICJ3Z0FjdGlvbiIsICIkd3BSZWFzb24iLCAiZmluZCIsICJsZW5ndGgiLCAiYXV0b1JlYXNvblJlZ0V4cCIsICJ0ZXN0IiwgIlN0cmluZyIsICJ2YWwiLCAiZml4U3VtbWFyeSIsICJ3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSIsICJodG1sIiwgInRleHQiLCAicmVwbGFjZSIsICJwcm9wIiwgImNoZWNrZWQiLCAiZGlzYWJsZWQiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImxpbmtTZWFyY2hFZGl0QnV0dG9uIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJlbGVtZW50IiwgInZhbHVlIiwgIiQiLCAiYXBwZW5kIiwgImF0dHIiLCAiaHJlZiIsICJpbnNlcnRBZnRlciIsICJlcnIiLCAiZSIsICJmIiwgImxvYWRHYWRnZXRFZGl0Rm9ybSIsICJFRElUX0dBREdFVFMiLCAidXNpbmdFZGl0Rm9ybUpTIiwgImdhZGdldHMiLCAibG9hZGVyIiwgInVzaW5nIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXBsYWNlUmFuZG9tIiwgIndnV2lraUlEIiwgInVzZXJJc0luR3JvdXAiLCAiJHJhbmRvbVBhZ2VMaW5rIiwgInNtYXJ0TmV3U2VjdGlvbiIsICJ1c2VyIiwgIm9wdGlvbnMiLCAiJGNhVGFsayIsICJoYXNDbGFzcyIsICIkYSIsICJ1c2VySlMiLCAiY29uZmlnS2V5MiIsICJzZXQiLCAiZ2V0Qm9keSIsICJ0aGVuIl0KfQo=
