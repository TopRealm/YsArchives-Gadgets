/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://en.wikipedia.org/wiki/MediaWiki:Gadget-defaultsummaries.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/DefaultSummaries}
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

// dist/DefaultSummaries/DefaultSummaries.js
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
//! src/DefaultSummaries/DefaultSummaries.ts
var import_ext_gadget = require("ext.gadget.Util");
//! src/DefaultSummaries/options.json
var configKey = "gadget-DefaultSummaries__Initialized";
var configKeyVe = "gadget-DefaultSummaries__Initialized__VE";
var dropdownId = "editform_default_summary";
//! src/DefaultSummaries/modules/messages.ts
var {
  wgULS
} = window;
var {
  wgCurRevisionId
} = mw.config.get();
var COMMON_SUMMARIES_LABEL = wgULS("常用编辑摘要", "常用編輯摘要");
var COMMON_SUMMARIES = [wgULS("修正语法", "修正語法"), wgULS("修正错字", "修正錯字"), wgULS("调整格式", "調整格式"), wgULS("移除破坏", "移除破壞"), wgULS("移除测试", "移除測試")];
if (!wgCurRevisionId) {
  COMMON_SUMMARIES = [wgULS("新页面", "新頁面"), ...COMMON_SUMMARIES];
}
var ARTICLE_SUMMARIES = [wgULS("扩写条目", "擴寫條目"), wgULS("调整来源", "調整來源"), wgULS("调整分类", "調整分類"), wgULS("调整链接", "调整連結"), wgULS("删除无来源内容", "刪除無來源內容"), wgULS("恢复移除的内容", "恢復移除的內容")];
var TALKPAGE_SUMMARIES = [wgULS("回复", "回覆"), wgULS("评论", "評論"), wgULS("意见", "意見"), wgULS("请求", "請求")];
//! src/DefaultSummaries/modules/util/generateSummaryDropdown.ts
var generateMenuOptionWidget = (label) => {
  return new OO.ui.MenuOptionWidget({
    label
  });
};
var addOptionsToDropdown = (dropdownWidget, summaries) => {
  const menuOptionWidgets = [];
  var _iterator = _createForOfIteratorHelper(summaries), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const summary = _step.value;
      menuOptionWidgets[menuOptionWidgets.length] = generateMenuOptionWidget(summary);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  dropdownWidget.getMenu().addItems(menuOptionWidgets);
};
var onSelectCallback = (optionWidget, $wpSummary) => {
  var _$wpSummary$val;
  const originSummary = (_$wpSummary$val = $wpSummary.val()) !== null && _$wpSummary$val !== void 0 ? _$wpSummary$val : "";
  const customSummary = optionWidget.getLabel();
  $wpSummary.val(originSummary.trim() ? "".concat(originSummary, " ").concat(customSummary) : customSummary).trigger("change");
};
var generateSummaryDropdown = ($wpSummary) => {
  const {
    wgNamespaceNumber
  } = mw.config.get();
  const dropdownWidget = new OO.ui.DropdownWidget({
    label: COMMON_SUMMARIES_LABEL
  });
  dropdownWidget.setElementId(dropdownId);
  dropdownWidget.getMenu().on("select", (optionWidget) => {
    onSelectCallback(optionWidget, $wpSummary);
  });
  addOptionsToDropdown(dropdownWidget, COMMON_SUMMARIES);
  if (wgNamespaceNumber === 0) {
    addOptionsToDropdown(dropdownWidget, ARTICLE_SUMMARIES);
  } else if (wgNamespaceNumber % 2 !== 0 && wgNamespaceNumber !== 3) {
    addOptionsToDropdown(dropdownWidget, TALKPAGE_SUMMARIES);
  } else if (wgNamespaceNumber === 302) {
    addOptionsToDropdown(dropdownWidget, ARTICLE_SUMMARIES);
  }
  return dropdownWidget.$element;
};
//! src/DefaultSummaries/modules/processVisualEditor.ts
var processVisualEditor = () => {
  if (mw.config.get(configKeyVe)) {
    return;
  }
  const {
    target
  } = window.ve.init;
  const {
    saveDialog
  } = target;
  const {
    $saveOptions
  } = saveDialog;
  if (!$saveOptions.length) {
    return;
  }
  mw.config.set(configKeyVe, true);
  const $dropdowns = generateSummaryDropdown(target.saveDialog.editSummaryInput.$input);
  if (!saveDialog.$element.find("#".concat(dropdownId)).length) {
    $saveOptions.before($dropdowns);
  }
  mw.hook("ve.activationComplete").add(() => {
    if (mw.config.get(configKeyVe)) {
      mw.config.set(configKeyVe, false);
    }
  });
};
//! src/DefaultSummaries/modules/processWikiEditor.ts
var processWikiEditor = ($editForm) => {
  if (mw.config.get(configKey)) {
    return;
  }
  mw.config.set(configKey, true);
  const $editCheckboxes = $editForm.find(".editCheckboxes");
  if (!$editCheckboxes.length) {
    return;
  }
  const $dropdowns = generateSummaryDropdown($editForm.find("input[name=wpSummary]"));
  $dropdowns.css({
    "padding-bottom": "1em",
    width: "48%"
  });
  if (!$editForm.find("#".concat(dropdownId)).length) {
    $editCheckboxes.before($dropdowns);
  }
};
//! src/DefaultSummaries/DefaultSummaries.ts
void (0, import_ext_gadget.getBody)().then(function defaultSummaries() {
  mw.hook("wikipage.editform").add(($editForm) => {
    processWikiEditor($editForm);
  });
  mw.hook("ve.saveDialog.stateChanged").add(() => {
    processVisualEditor();
  });
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0RlZmF1bHRTdW1tYXJpZXMvRGVmYXVsdFN1bW1hcmllcy50cyIsICJzcmMvRGVmYXVsdFN1bW1hcmllcy9vcHRpb25zLmpzb24iLCAic3JjL0RlZmF1bHRTdW1tYXJpZXMvbW9kdWxlcy9tZXNzYWdlcy50cyIsICJzcmMvRGVmYXVsdFN1bW1hcmllcy9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVTdW1tYXJ5RHJvcGRvd24udHMiLCAic3JjL0RlZmF1bHRTdW1tYXJpZXMvbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yLnRzIiwgInNyYy9EZWZhdWx0U3VtbWFyaWVzL21vZHVsZXMvcHJvY2Vzc1dpa2lFZGl0b3IudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7cHJvY2Vzc1Zpc3VhbEVkaXRvcn0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NWaXN1YWxFZGl0b3InO1xuaW1wb3J0IHtwcm9jZXNzV2lraUVkaXRvcn0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBkZWZhdWx0U3VtbWFyaWVzKCk6IHZvaWQge1xuXHRtdy5ob29rKCd3aWtpcGFnZS5lZGl0Zm9ybScpLmFkZCgoJGVkaXRGb3JtKTogdm9pZCA9PiB7XG5cdFx0cHJvY2Vzc1dpa2lFZGl0b3IoJGVkaXRGb3JtKTtcblx0fSk7XG5cblx0bXcuaG9vaygndmUuc2F2ZURpYWxvZy5zdGF0ZUNoYW5nZWQnKS5hZGQoKCk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NWaXN1YWxFZGl0b3IoKTtcblx0fSk7XG59KTtcbiIsICJ7XG5cdFwiY29uZmlnS2V5XCI6IFwiZ2FkZ2V0LURlZmF1bHRTdW1tYXJpZXNfX0luaXRpYWxpemVkXCIsXG5cdFwiY29uZmlnS2V5VmVcIjogXCJnYWRnZXQtRGVmYXVsdFN1bW1hcmllc19fSW5pdGlhbGl6ZWRfX1ZFXCIsXG5cdFwiZHJvcGRvd25JZFwiOiBcImVkaXRmb3JtX2RlZmF1bHRfc3VtbWFyeVwiXG59XG4iLCAiY29uc3Qge3dnVUxTfSA9IHdpbmRvdztcbmNvbnN0IHt3Z0N1clJldmlzaW9uSWR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5jb25zdCBDT01NT05fU1VNTUFSSUVTX0xBQkVMOiBzdHJpbmcgPSB3Z1VMUygn5bi455So57yW6L6R5pGY6KaBJywgJ+W4uOeUqOe3qOi8r+aRmOimgScpO1xuXG5sZXQgQ09NTU9OX1NVTU1BUklFUzogc3RyaW5nW10gPSBbXG5cdHdnVUxTKCfkv67mraPor63ms5UnLCAn5L+u5q2j6Kqe5rOVJyksXG5cdHdnVUxTKCfkv67mraPplJnlrZcnLCAn5L+u5q2j6Yyv5a2XJyksXG5cdHdnVUxTKCfosIPmlbTmoLzlvI8nLCAn6Kq/5pW05qC85byPJyksXG5cdHdnVUxTKCfnp7vpmaTnoLTlnY8nLCAn56e76Zmk56C05aOeJyksXG5cdHdnVUxTKCfnp7vpmaTmtYvor5UnLCAn56e76Zmk5ris6KmmJyksXG5dO1xuXG5pZiAoIXdnQ3VyUmV2aXNpb25JZCkge1xuXHRDT01NT05fU1VNTUFSSUVTID0gW3dnVUxTKCfmlrDpobXpnaInLCAn5paw6aCB6Z2iJyksIC4uLkNPTU1PTl9TVU1NQVJJRVNdO1xufVxuXG5jb25zdCBBUlRJQ0xFX1NVTU1BUklFUzogc3RyaW5nW10gPSBbXG5cdHdnVUxTKCfmianlhpnmnaHnm64nLCAn5pO05a+r5qKd55uuJyksXG5cdHdnVUxTKCfosIPmlbTmnaXmupAnLCAn6Kq/5pW05L6G5rqQJyksXG5cdHdnVUxTKCfosIPmlbTliIbnsbsnLCAn6Kq/5pW05YiG6aGeJyksXG5cdHdnVUxTKCfosIPmlbTpk77mjqUnLCAn6LCD5pW06YCj57WQJyksXG5cdHdnVUxTKCfliKDpmaTml6DmnaXmupDlhoXlrrknLCAn5Yiq6Zmk54Sh5L6G5rqQ5YWn5a65JyksXG5cdHdnVUxTKCfmgaLlpI3np7vpmaTnmoTlhoXlrrknLCAn5oGi5b6p56e76Zmk55qE5YWn5a65JyksXG5dO1xuXG5jb25zdCBUQUxLUEFHRV9TVU1NQVJJRVM6IHN0cmluZ1tdID0gW1xuXHR3Z1VMUygn5Zue5aSNJywgJ+WbnuimhicpLFxuXHR3Z1VMUygn6K+E6K66JywgJ+ipleirlicpLFxuXHR3Z1VMUygn5oSP6KeBJywgJ+aEj+imiycpLFxuXHR3Z1VMUygn6K+35rGCJywgJ+iri+axgicpLFxuXTtcblxuZXhwb3J0IHtDT01NT05fU1VNTUFSSUVTX0xBQkVMLCBDT01NT05fU1VNTUFSSUVTLCBBUlRJQ0xFX1NVTU1BUklFUywgVEFMS1BBR0VfU1VNTUFSSUVTfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge0FSVElDTEVfU1VNTUFSSUVTLCBDT01NT05fU1VNTUFSSUVTLCBDT01NT05fU1VNTUFSSUVTX0xBQkVMLCBUQUxLUEFHRV9TVU1NQVJJRVN9IGZyb20gJy4uL21lc3NhZ2VzJztcblxuY29uc3QgZ2VuZXJhdGVNZW51T3B0aW9uV2lkZ2V0ID0gKGxhYmVsOiBzdHJpbmcpOiBPTy51aS5NZW51T3B0aW9uV2lkZ2V0ID0+IHtcblx0cmV0dXJuIG5ldyBPTy51aS5NZW51T3B0aW9uV2lkZ2V0KHtcblx0XHRsYWJlbCxcblx0fSk7XG59O1xuXG5jb25zdCBhZGRPcHRpb25zVG9Ecm9wZG93biA9IChkcm9wZG93bldpZGdldDogT08udWkuRHJvcGRvd25XaWRnZXQsIHN1bW1hcmllczogc3RyaW5nW10pOiB2b2lkID0+IHtcblx0Y29uc3QgbWVudU9wdGlvbldpZGdldHM6IE9PLnVpLk1lbnVPcHRpb25XaWRnZXRbXSA9IFtdO1xuXG5cdGZvciAoY29uc3Qgc3VtbWFyeSBvZiBzdW1tYXJpZXMpIHtcblx0XHRtZW51T3B0aW9uV2lkZ2V0c1ttZW51T3B0aW9uV2lkZ2V0cy5sZW5ndGhdID0gZ2VuZXJhdGVNZW51T3B0aW9uV2lkZ2V0KHN1bW1hcnkpOyAvLyBSZXBsYWNlIEFycmF5I3B1c2ggdG8gYXZvaWQgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXHR9XG5cblx0ZHJvcGRvd25XaWRnZXQuZ2V0TWVudSgpLmFkZEl0ZW1zKG1lbnVPcHRpb25XaWRnZXRzKTtcbn07XG5cbmNvbnN0IG9uU2VsZWN0Q2FsbGJhY2sgPSAob3B0aW9uV2lkZ2V0OiBPTy51aS5PcHRpb25XaWRnZXQsICR3cFN1bW1hcnk6IEpRdWVyeSk6IHZvaWQgPT4ge1xuXHRjb25zdCBvcmlnaW5TdW1tYXJ5OiBzdHJpbmcgPSAoJHdwU3VtbWFyeS52YWwoKSBhcyBzdHJpbmcgfCB1bmRlZmluZWQpID8/ICcnO1xuXHRjb25zdCBjdXN0b21TdW1tYXJ5OiBzdHJpbmcgPSBvcHRpb25XaWRnZXQuZ2V0TGFiZWwoKSBhcyBzdHJpbmc7XG5cblx0JHdwU3VtbWFyeS52YWwob3JpZ2luU3VtbWFyeS50cmltKCkgPyBgJHtvcmlnaW5TdW1tYXJ5fSAke2N1c3RvbVN1bW1hcnl9YCA6IGN1c3RvbVN1bW1hcnkpLnRyaWdnZXIoJ2NoYW5nZScpO1xufTtcblxuY29uc3QgZ2VuZXJhdGVTdW1tYXJ5RHJvcGRvd24gPSAoJHdwU3VtbWFyeTogSlF1ZXJ5KTogSlF1ZXJ5ID0+IHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRjb25zdCBkcm9wZG93bldpZGdldDogT08udWkuRHJvcGRvd25XaWRnZXQgPSBuZXcgT08udWkuRHJvcGRvd25XaWRnZXQoe1xuXHRcdGxhYmVsOiBDT01NT05fU1VNTUFSSUVTX0xBQkVMLFxuXHR9KTtcblxuXHRkcm9wZG93bldpZGdldC5zZXRFbGVtZW50SWQoT1BUSU9OUy5kcm9wZG93bklkKTtcblxuXHRkcm9wZG93bldpZGdldC5nZXRNZW51KCkub24oJ3NlbGVjdCcsIChvcHRpb25XaWRnZXQ6IE9PLnVpLk9wdGlvbldpZGdldCB8IE9PLnVpLk9wdGlvbldpZGdldFtdIHwgbnVsbCk6IHZvaWQgPT4ge1xuXHRcdG9uU2VsZWN0Q2FsbGJhY2sob3B0aW9uV2lkZ2V0IGFzIE9PLnVpLk9wdGlvbldpZGdldCwgJHdwU3VtbWFyeSk7XG5cdH0pO1xuXG5cdGFkZE9wdGlvbnNUb0Ryb3Bkb3duKGRyb3Bkb3duV2lkZ2V0LCBDT01NT05fU1VNTUFSSUVTKTtcblx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyID09PSAwKSB7XG5cdFx0YWRkT3B0aW9uc1RvRHJvcGRvd24oZHJvcGRvd25XaWRnZXQsIEFSVElDTEVfU1VNTUFSSUVTKTtcblx0fSBlbHNlIGlmICh3Z05hbWVzcGFjZU51bWJlciAlIDIgIT09IDAgJiYgd2dOYW1lc3BhY2VOdW1iZXIgIT09IDMpIHtcblx0XHRhZGRPcHRpb25zVG9Ecm9wZG93bihkcm9wZG93bldpZGdldCwgVEFMS1BBR0VfU1VNTUFSSUVTKTtcblx0fSBlbHNlIGlmICh3Z05hbWVzcGFjZU51bWJlciA9PT0gMzAyKSB7XG5cdFx0YWRkT3B0aW9uc1RvRHJvcGRvd24oZHJvcGRvd25XaWRnZXQsIEFSVElDTEVfU1VNTUFSSUVTKTtcblx0fVxuXG5cdHJldHVybiBkcm9wZG93bldpZGdldC4kZWxlbWVudDtcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVTdW1tYXJ5RHJvcGRvd259O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnfi9EZWZhdWx0U3VtbWFyaWVzL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2dlbmVyYXRlU3VtbWFyeURyb3Bkb3dufSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVTdW1tYXJ5RHJvcGRvd24nO1xuXG5jb25zdCBwcm9jZXNzVmlzdWFsRWRpdG9yID0gKCk6IHZvaWQgPT4ge1xuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5VmUpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qge3RhcmdldH0gPSB3aW5kb3cudmUuaW5pdDtcblx0Y29uc3Qge3NhdmVEaWFsb2d9ID0gdGFyZ2V0O1xuXHRjb25zdCB7JHNhdmVPcHRpb25zfSA9IHNhdmVEaWFsb2c7XG5cdGlmICghJHNhdmVPcHRpb25zLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIFNldCBndWFyZFxuXHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5VmUsIHRydWUpO1xuXG5cdGNvbnN0ICRkcm9wZG93bnM6IEpRdWVyeSA9IGdlbmVyYXRlU3VtbWFyeURyb3Bkb3duKHRhcmdldC5zYXZlRGlhbG9nLmVkaXRTdW1tYXJ5SW5wdXQuJGlucHV0KTtcblxuXHRpZiAoIXNhdmVEaWFsb2cuJGVsZW1lbnQuZmluZChgIyR7T1BUSU9OUy5kcm9wZG93bklkfWApLmxlbmd0aCkge1xuXHRcdCRzYXZlT3B0aW9ucy5iZWZvcmUoJGRyb3Bkb3ducyk7XG5cdH1cblxuXHQvLyBSZWluaXRpYWxpemF0aW9uIGlzIHJlcXVpcmVkIGZvciBzd2l0Y2hpbmcgYmV0d2VlbiBWaXN1YWxFZGl0b3IgYW5kIE5ldyBXaWtpdGV4dCBFZGl0b3IgKDIwMTcpXG5cdG13Lmhvb2soJ3ZlLmFjdGl2YXRpb25Db21wbGV0ZScpLmFkZCgoKSA9PiB7XG5cdFx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXlWZSkpIHtcblx0XHRcdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXlWZSwgZmFsc2UpO1xuXHRcdH1cblx0fSk7XG59O1xuXG5leHBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnfi9EZWZhdWx0U3VtbWFyaWVzL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2dlbmVyYXRlU3VtbWFyeURyb3Bkb3dufSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVTdW1tYXJ5RHJvcGRvd24nO1xuXG5jb25zdCBwcm9jZXNzV2lraUVkaXRvciA9ICgkZWRpdEZvcm06IEpRdWVyeTxIVE1MRWxlbWVudD4pOiB2b2lkID0+IHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBTZXQgZ3VhcmRcblx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleSwgdHJ1ZSk7XG5cblx0Y29uc3QgJGVkaXRDaGVja2JveGVzOiBKUXVlcnkgPSAkZWRpdEZvcm0uZmluZCgnLmVkaXRDaGVja2JveGVzJyk7XG5cdGlmICghJGVkaXRDaGVja2JveGVzLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICRkcm9wZG93bnM6IEpRdWVyeSA9IGdlbmVyYXRlU3VtbWFyeURyb3Bkb3duKCRlZGl0Rm9ybS5maW5kKCdpbnB1dFtuYW1lPXdwU3VtbWFyeV0nKSk7XG5cblx0JGRyb3Bkb3ducy5jc3Moe1xuXHRcdCdwYWRkaW5nLWJvdHRvbSc6ICcxZW0nLFxuXHRcdHdpZHRoOiAnNDglJyxcblx0fSk7XG5cblx0aWYgKCEkZWRpdEZvcm0uZmluZChgIyR7T1BUSU9OUy5kcm9wZG93bklkfWApLmxlbmd0aCkge1xuXHRcdCRlZGl0Q2hlY2tib3hlcy5iZWZvcmUoJGRyb3Bkb3ducyk7XG5cdH1cbn07XG5cbmV4cG9ydCB7cHJvY2Vzc1dpa2lFZGl0b3J9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG9CQUFzQkMsUUFBQSxpQkFBQTs7QUNDckIsSUFBQUMsWUFBYTtBQUNiLElBQUFDLGNBQWU7QUFDZixJQUFBQyxhQUFjOztBQ0hmLElBQU07RUFBQ0M7QUFBSyxJQUFJQztBQUNoQixJQUFNO0VBQUNDO0FBQWUsSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUV4QyxJQUFNQyx5QkFBaUNOLE1BQU0sVUFBVSxRQUFRO0FBRS9ELElBQUlPLG1CQUE2QixDQUNoQ1AsTUFBTSxRQUFRLE1BQU0sR0FDcEJBLE1BQU0sUUFBUSxN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QzVCLENBQUM7QUFFRDlELEtBQUcyRCxLQUFLLDRCQUE0QixFQUFFQyxJQUFJLE1BQVk7QUFDckRiLHdCQUFvQjtFQUNyQixDQUFDO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJjb25maWdLZXkiLCAiY29uZmlnS2V5VmUiLCAiZHJvcGRvd25JZCIsICJ3Z1VMUyIsICJ3aW5kb3ciLCAid2dDdXJSZXZpc2lvbklkIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiQ09NTU9OX1NVTU1BUklFU19MQUJFTCIsICJDT01NT05fU1VNTUFSSUVTIiwgIkFSVElDTEVfU1VNTUFSSUVTIiwgIlRBTEtQQUdFX1NVTU1BUklFUyIsICJnZW5lcmF0ZU1lbnVPcHRpb25XaWRnZXQiLCAibGFiZWwiLCAiT08iLCAidWkiLCAiTWVudU9wdGlvbldpZGdldCIsICJhZGRPcHRpb25zVG9Ecm9wZG93biIsICJkcm9wZG93bldpZGdldCIsICJzdW1tYXJpZXMiLCAibWVudU9wdGlvbldpZGdldHMiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgInN1bW1hcnkiLCAidmFsdWUiLCAibGVuZ3RoIiwgImVyciIsICJlIiwgImYiLCAiZ2V0TWVudSIsICJhZGRJdGVtcyIsICJvblNlbGVjdENhbGxiYWNrIiwgIm9wdGlvbldpZGdldCIsICIkd3BTdW1tYXJ5IiwgIl8kd3BTdW1tYXJ5JHZhbCIsICJvcmlnaW5TdW1tYXJ5IiwgInZhbCIsICJjdXN0b21TdW1tYXJ5IiwgImdldExhYmVsIiwgInRyaW0iLCAiY29uY2F0IiwgInRyaWdnZXIiLCAiZ2VuZXJhdGVTdW1tYXJ5RHJvcGRvd24iLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAiRHJvcGRvd25XaWRnZXQiLCAic2V0RWxlbWVudElkIiwgIm9uIiwgIiRlbGVtZW50IiwgInByb2Nlc3NWaXN1YWxFZGl0b3IiLCAidGFyZ2V0IiwgInZlIiwgImluaXQiLCAic2F2ZURpYWxvZyIsICIkc2F2ZU9wdGlvbnMiLCAic2V0IiwgIiRkcm9wZG93bnMiLCAiZWRpdFN1bW1hcnlJbnB1dCIsICIkaW5wdXQiLCAiZmluZCIsICJiZWZvcmUiLCAiaG9vayIsICJhZGQiLCAicHJvY2Vzc1dpa2lFZGl0b3IiLCAiJGVkaXRGb3JtIiwgIiRlZGl0Q2hlY2tib3hlcyIsICJjc3MiLCAid2lkdGgiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImRlZmF1bHRTdW1tYXJpZXMiXQp9Cg==
