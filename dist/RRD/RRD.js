/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/User:WhitePhosphorus/js/rrd.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/RRD}
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

// dist/RRD/RRD.js
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
//! src/RRD/options.json
var rrdPage = "有兽档案馆_talk:版本删除提报";
var version = "2.0";
//! src/RRD/components/ReportButton.tsx
var import_ext_gadget = __toESM(require("ext.gadget.JSX"), 1);
//! src/RRD/modules/i18n.ts
var getI18nMessages = () => {
  const {
    wgULS
  } = window;
  return {
    editSummary: wgULS("[[MediaWiki:Gadget-RRD.js|半自动提报]]修订版本删除", "[[MediaWiki:Gadget-RRD.js|半自動提報]]修訂版本刪除"),
    errNoRevisionProvided: wgULS("您没有选择需隐藏的版本！", "您沒有選擇需隱藏的版本！"),
    errNoItemProvided: wgULS("您没有选择需隐藏的项目！", "您沒有選擇需隱藏的項目！"),
    warnNoReasonProvided: wgULS("您没有输入任何理由！确定要继续吗？", "您沒有輸入任何理由！確定要繼續嗎？"),
    hideItems: wgULS("需隐藏的项目：", "需隱藏的項目："),
    hideContent: wgULS("编辑内容", "編輯內容"),
    hideLog: wgULS("日志目标与参数", "日誌目標與參數"),
    hideUsername: wgULS("编辑者用户名", "編輯者用戶名"),
    hideSummary: wgULS("编辑摘要", "編輯摘要"),
    hideReason: wgULS("理据：", "理據："),
    hideReasonRD1: wgULS("RD1：条目中明显侵犯著作权的内容", "RD1：條目中明顯侵犯著作權的內容"),
    hideReasonRD2: wgULS("RD2：严重侮辱、贬低或攻击性文本", "RD2：嚴重侮辱、貶低或攻擊性文本"),
    hideReasonRD3: wgULS("RD3：纯粹扰乱性内容", "純粹擾亂性內容"),
    hideReasonRD4: wgULS("RD4：明显违反法律法规或违背公序良俗的内容", "RD4：明顯違反法律法規或違背公序良俗的內容"),
    hideReasonRD5: wgULS("RD5：其他不宜公开的版本内容", "RD5：其他不宜公開的版本內容"),
    hideReasonOS1: wgULS("OS1：未公开的个人资料", "OS1：未公開的個人資料"),
    hideReasonOS2: wgULS("OS2：可能影响百科运作的内容", "OS2：可能影響百科運作的內容"),
    hideReasonOS3: wgULS("OS3：破坏性、扰乱性用户名", "OS3：破壞性、擾亂性用戶名"),
    hideReasonOS4: wgULS("OS4：原页面内容来自外部来源、不符合有兽档案馆条例，但经过改写后，已符合有兽档案馆条例的页面", "OS4：原頁面內容來自外部來源、不符合有獸檔案館條例，但經過覆寫後，已符合有獸檔案館條例的頁面"),
    hideReasonOther: wgULS("仅使用下方的附加理由", "僅使用下方的附加理由"),
    otherReasons: wgULS("附加理由（可选，不用签名）", "附加理由（可選，不用簽名）"),
    dialogTitle: wgULS("提报修订版本删除", "提報修訂版本刪除"),
    dialogButtonSubmit: wgULS("提报", "提報"),
    dialogButtonCancel: wgULS("取消", "取消"),
    reportButtonTitle: wgULS("将选中的版本提报到", "將選中的版本提報到"),
    reportButtonText: wgULS("请求删除被选版本", "請求刪除被選版本"),
    reportButtonLogText: wgULS("请求删除被选日志", "請求刪除被選日誌")
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/RRD/modules/isSpecialLog.ts
var isSpecialLog = () => {
  const {
    wgCanonicalSpecialPageName
  } = mw.config.get();
  return wgCanonicalSpecialPageName === "Log";
};
//! src/RRD/components/ReportButton.tsx
var ReportButton = ({
  onClick
}) => /* @__PURE__ */ import_ext_gadget.default.createElement("button", {
  type: "button",
  className: ["rrd__report", "cdx-button", "cdx-button--weight-primary"],
  title: getMessage("reportButtonTitle") + rrdPage,
  onClick
}, isSpecialLog() ? getMessage("reportButtonLogText") : getMessage("reportButtonText"));
var ReportButton_default = ReportButton;
//! src/RRD/RRD.ts
var import_ext_gadget5 = require("ext.gadget.Util");
//! src/RRD/modules/rrdConfig.ts
var config = {
  checkboxes: {},
  others: {}
};
var updateConfig = () => {
  var _document$querySelect, _document$querySelect2, _document$querySelect3;
  const checkBoxes = {};
  if ((_document$querySelect = document.querySelector("#rrd__hide-content")) !== null && _document$querySelect !== void 0 && _document$querySelect.checked) {
    checkBoxes.rrdHideContent = true;
  }
  if ((_document$querySelect2 = document.querySelector("#rrd__hide-username")) !== null && _document$querySelect2 !== void 0 && _document$querySelect2.checked) {
    checkBoxes.rrdHideUsername = true;
  }
  if ((_document$querySelect3 = document.querySelector("#rrd__hide-summary")) !== null && _document$querySelect3 !== void 0 && _document$querySelect3.checked) {
    checkBoxes.rrdHideSummary = true;
  }
  config.checkboxes = checkBoxes;
  const others = {};
  const reasonInput = document.querySelector("#rrd__reason");
  const otherReasonsInput = document.querySelector("#rrd__other-reasons");
  if (reasonInput) {
    others.rrdReason = reasonInput.value;
  }
  if (otherReasonsInput) {
    others.rrdOtherReasons = otherReasonsInput.value;
  }
  config.others = others;
};
//! src/RRD/components/DialogInner.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.JSX"), 1);
//! src/RRD/components/DialogInner.module.less
var contentWrapper = "DialogInner-module__contentWrapper_6TdTVG__4100";
//! src/RRD/components/DialogInner.tsx
var DialogInner = () => /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
  id: "rrd__config"
}, getMessage("hideItems"), /* @__PURE__ */ import_ext_gadget2.default.createElement("br", null), /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
  className: contentWrapper
}, /* @__PURE__ */ import_ext_gadget2.default.createElement("input", {
  name: "content",
  id: "rrd__hide-content",
  type: "checkbox",
  value: "content",
  checked: true
}), /* @__PURE__ */ import_ext_gadget2.default.createElement("label", {
  htmlFor: "rrd__hide-content",
  id: "rrd-content"
}, isSpecialLog() ? getMessage("hideLog") : getMessage("hideContent"))), /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
  className: contentWrapper
}, /* @__PURE__ */ import_ext_gadget2.default.createElement("input", {
  name: "username",
  id: "rrd__hide-username",
  type: "checkbox",
  value: "username"
}), /* @__PURE__ */ import_ext_gadget2.default.createElement("label", {
  htmlFor: "rrd__hide-username",
  id: "rrd-username"
}, getMessage("hideUsername"))), /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
  className: contentWrapper
}, /* @__PURE__ */ import_ext_gadget2.default.createElement("input", {
  name: "summary",
  id: "rrd__hide-summary",
  type: "checkbox",
  value: "summary"
}), /* @__PURE__ */ import_ext_gadget2.default.createElement("label", {
  htmlFor: "rrd__hide-summary",
  id: "rrd-summary"
}, getMessage("hideSummary"))), /* @__PURE__ */ import_ext_gadget2.default.createElement("br", null), /* @__PURE__ */ import_ext_gadget2.default.createElement("br", null), getMessage("hideReason"), /* @__PURE__ */ import_ext_gadget2.default.createElement("br", null), /* @__PURE__ */ import_ext_gadget2.default.createElement("select", {
  name: "rrd__reason",
  id: "rrd__reason"
}, /* @__PURE__ */ import_ext_gadget2.default.createElement("option", {
  value: getMessage("hideReasonRD1")
}, getMessage("hideReasonRD1")), /* @__PURE__ */ import_ext_gadget2.default.createElement("option", {
  value: getMessage("hideReasonRD2")
}, getMessage("hideReasonRD2")), /* @__PURE__ */ import_ext_gadget2.default.createElement("option", {
  value: getMessage("hideReasonRD3")
}, getMessage("hideReasonRD3")), /* @__PURE__ */ import_ext_gadget2.default.createElement("option", {
  value: getMessage("hideReasonRD4")
}, getMessage("hideReasonRD4")), /* @__PURE__ */ import_ext_gadget2.default.createElement("option", {
  value: getMessage("hideReasonRD5")
}, getMessage("hideReasonRD5")), /* @__PURE__ */ import_ext_gadget2.default.createElement("option", {
  value: getMessage("hideReasonOS1")
}, getMessage("hideReasonOS1")), /* @__PURE__ */ import_ext_gadget2.default.createElement("option", {
  value: getMessage("hideReasonOS2")
}, getMessage("hideReasonOS2")), /* @__PURE__ */ import_ext_gadget2.default.createElement("option", {
  value: getMessage("hideReasonOS3")
}, getMessage("hideReasonOS3")), /* @__PURE__ */ import_ext_gadget2.default.createElement("option", {
  value: getMessage("hideReasonOS4")
}, getMessage("hideReasonOS4")), /* @__PURE__ */ import_ext_gadget2.default.createElement("option", {
  value: ""
}, getMessage("hideReasonOther"))), /* @__PURE__ */ import_ext_gadget2.default.createElement("br", null), /* @__PURE__ */ import_ext_gadget2.default.createElement("br", null), getMessage("otherReasons"), /* @__PURE__ */ import_ext_gadget2.default.createElement("br", null), /* @__PURE__ */ import_ext_gadget2.default.createElement("textarea", {
  name: "otherReasons",
  id: "rrd__other-reasons",
  rows: 4
}));
var DialogInner_default = DialogInner;
//! src/RRD/modules/loadIds.ts
var loadIds = ($body) => {
  const ids = [];
  const boxes = $body.find("input");
  var _iterator2 = _createForOfIteratorHelper(boxes), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      const box = _step2.value;
      const {
        checked,
        name,
        type
      } = box;
      if (type !== "checkbox" || !checked) {
        continue;
      }
      const idRegex = /ids\[(\d+)]/;
      const idArray = idRegex.exec(name);
      if ((idArray === null || idArray === void 0 ? void 0 : idArray[1]) === void 0) {
        continue;
      }
      [, ids[ids.length]] = idArray;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return ids;
};
//! src/RRD/modules/api.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var api = (0, import_ext_gadget3.initMwApi)("RRD/".concat(version));
//! src/RRD/modules/submit.ts
var import_ext_gadget4 = require("ext.gadget.Util");
var queryRevisions = /* @__PURE__ */ (function() {
  var _ref = _asyncToGenerator(function* (titles) {
    const params = {
      titles,
      action: "query",
      format: "json",
      formatversion: "2",
      prop: "revisions",
      rvprop: "content",
      rvslots: "main"
    };
    const response = yield api.get(params);
    return response;
  });
  return function queryRevisions2(_x) {
    return _ref.apply(this, arguments);
  };
})();
var edit = /* @__PURE__ */ (function() {
  var _ref2 = _asyncToGenerator(function* (title, text, summary) {
    const params = {
      title,
      text,
      action: "edit",
      format: "json",
      formatversion: "2"
    };
    if (summary) {
      params.summary = summary;
    }
    const response = yield api.postWithEditToken(params);
    return response;
  });
  return function edit2(_x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
})();
var submit = /* @__PURE__ */ (function() {
  var _ref3 = _asyncToGenerator(function* (ids, toHide, reason, otherReasons) {
    const {
      wgPageName
    } = mw.config.get();
    for (var _i = 0, _arr = [1, 2, 3, 4, 5]; _i < _arr.length; _i++) {
      const RDid = _arr[_i];
      if (reason.includes("RD".concat(RDid))) {
        reason = "RD".concat(RDid);
        break;
      }
    }
    for (var _i2 = 0, _arr2 = [1, 2, 3, 4]; _i2 < _arr2.length; _i2++) {
      const OSid = _arr2[_i2];
      if (reason.includes("OS".concat(OSid))) {
        reason = "OS".concat(OSid);
        break;
      }
    }
    const rrdArr = ["{{Revdel", "|status = ", "|article = ".concat(wgPageName), "|set = ".concat(toHide), "|reason = ".concat(reason).concat(otherReasons)];
    var _iterator3 = _createForOfIteratorHelper((0, import_ext_gadget4.uniqueArray)(ids).entries()), _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
        const [index, id] = _step3.value;
        rrdArr[rrdArr.length] = "|id".concat(index + 1, " = ").concat(id);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    rrdArr[rrdArr.length] = "}}\n——~~".concat("~~");
    try {
      var _response$query;
      const response = yield queryRevisions(rrdPage);
      let content;
      if ((_response$query = response["query"]) !== null && _response$query !== void 0 && _response$query.pages) {
        content = response["query"].pages[0].revisions[0].slots.main.content;
      }
      if (content === void 0) {
        void mw.notify("Error when loading page ".concat(rrdPage, ": missing"), {
          tag: "RRD",
          type: "error"
        });
        return;
      }
      try {
        var _result$edit, _result$error;
        const result = yield edit(rrdPage, "".concat(content, "\n\n").concat(rrdArr.join("\n")), getMessage("editSummary"));
        if (((_result$edit = result["edit"]) === null || _result$edit === void 0 ? void 0 : _result$edit.result) === "Success") {
          location.replace(mw.util.getUrl(rrdPage));
        } else if ((_result$error = result["error"]) !== null && _result$error !== void 0 && _result$error.code) {
          void mw.notify("Some errors occured while saving page: ".concat(result["error"].code), {
            tag: "RRD",
            type: "error"
          });
        } else {
          void mw.notify("Some errors occured while saving page: unknown", {
            tag: "RRD",
            type: "error"
          });
        }
      } catch {
        void mw.notify("Error when editing page ".concat(rrdPage), {
          tag: "RRD",
          type: "error"
        });
      }
    } catch {
      void mw.notify("Error when loading page ".concat(rrdPage), {
        tag: "RRD",
        type: "error"
      });
    }
  });
  return function submit2(_x5, _x6, _x7, _x8) {
    return _ref3.apply(this, arguments);
  };
})();
//! src/RRD/modules/showDialog.ts
var $dialog;
var showDialog = ($body) => {
  const ids = loadIds($body);
  if (!ids.length) {
    void mw.notify(getMessage("errNoRevisionProvided"), {
      tag: "RRD",
      type: "error"
    });
    return;
  }
  const dialog = DialogInner_default();
  if ($dialog) {
    $dialog.html(dialog).dialog("open");
    for (var _i3 = 0, _Object$entries = Object.entries(config.others); _i3 < _Object$entries.length; _i3++) {
      const [id, value] = _Object$entries[_i3];
      $body.find("#".concat(id)).val(value);
    }
    for (var _i4 = 0, _Object$entries2 = Object.entries(config.checkboxes); _i4 < _Object$entries2.length; _i4++) {
      const [id, value] = _Object$entries2[_i4];
      if (value === true) {
        $body.find("#".concat(id)).prop("checked", true);
      }
    }
    return;
  }
  $dialog = $(dialog).dialog({
    title: getMessage("dialogTitle"),
    minWidth: 515,
    minHeight: 150,
    close: updateConfig,
    buttons: [{
      text: getMessage("dialogButtonSubmit"),
      click() {
        $(this).dialog("close");
        const {
          checkboxes: {
            rrdHideContent,
            rrdHideUsername,
            rrdHideSummary
          },
          others: {
            rrdReason
          }
        } = config;
        let {
          rrdOtherReasons
        } = config.others;
        if (rrdOtherReasons && rrdReason) {
          rrdOtherReasons = "，".concat(rrdOtherReasons);
        }
        const toHide = [];
        if (rrdHideContent) {
          toHide[toHide.length] = isSpecialLog() ? getMessage("hideLog") : getMessage("hideContent");
        }
        if (rrdHideUsername) {
          toHide[toHide.length] = getMessage("hideUsername");
        }
        if (rrdHideSummary) {
          toHide[toHide.length] = getMessage("hideSummary");
        }
        if (!toHide.length) {
          void mw.notify(getMessage("errNoItemProvided"), {
            tag: "RRD",
            type: "error"
          });
          return;
        }
        let cont = true;
        if (!rrdReason && !rrdOtherReasons) {
          cont = confirm(getMessage("warnNoReasonProvided"));
        }
        if (cont) {
          void submit(ids, toHide.join("、"), rrdReason !== null && rrdReason !== void 0 ? rrdReason : "", rrdOtherReasons !== null && rrdOtherReasons !== void 0 ? rrdOtherReasons : "");
        }
      }
    }, {
      text: getMessage("dialogButtonCancel"),
      click() {
        $(this).dialog("close");
      }
    }]
  });
};
//! src/RRD/RRD.ts
void (0, import_ext_gadget5.getBody)().then(function rrd($body) {
  const {
    wgAction,
    wgCanonicalSpecialPageName
  } = mw.config.get();
  if (wgAction === "history" || wgCanonicalSpecialPageName === "Log") {
    var _iterator4 = _createForOfIteratorHelper($body.find([".historysubmit.mw-history-compareselectedversions-button", ".editchangetags-log-submit.mw-log-editchangetags-button"].join(","))), _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
        const element = _step4.value;
        element.after(ReportButton_default({
          onClick: () => {
            showDialog($body);
          }
        }));
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  }
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1JSRC9vcHRpb25zLmpzb24iLCAic3JjL1JSRC9jb21wb25lbnRzL1JlcG9ydEJ1dHRvbi50c3giLCAic3JjL1JSRC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1JSRC9tb2R1bGVzL2lzU3BlY2lhbExvZy50cyIsICJzcmMvUlJEL1JSRC50cyIsICJzcmMvUlJEL21vZHVsZXMvcnJkQ29uZmlnLnRzIiwgInNyYy9SUkQvY29tcG9uZW50cy9EaWFsb2dJbm5lci50c3giLCAic3JjL1JSRC9jb21wb25lbnRzL0RpYWxvZ0lubmVyLm1vZHVsZS5sZXNzIiwgInNyYy9SUkQvbW9kdWxlcy9sb2FkSWRzLnRzIiwgInNyYy9SUkQvbW9kdWxlcy9hcGkudHMiLCAic3JjL1JSRC9tb2R1bGVzL3N1Ym1pdC50cyIsICJzcmMvUlJEL21vZHVsZXMvc2hvd0RpYWxvZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcInJyZFBhZ2VcIjogXCLmnInlhb3moaPmoYjppoZfdGFsazrniYjmnKzliKDpmaTmj5DmiqVcIixcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9tb2R1bGVzL2kxOG4nO1xuaW1wb3J0IHtpc1NwZWNpYWxMb2d9IGZyb20gJy4uL21vZHVsZXMvaXNTcGVjaWFsTG9nJztcblxuaW50ZXJmYWNlIFByb3BzIHtcblx0b25DbGljazogKCkgPT4gdm9pZDtcbn1cblxuY29uc3QgUmVwb3J0QnV0dG9uID0gKHtvbkNsaWNrfTogUHJvcHMpID0+IChcblx0PGJ1dHRvblxuXHRcdHR5cGU9eydidXR0b24nfVxuXHRcdGNsYXNzTmFtZT17WydycmRfX3JlcG9ydCcsICdjZHgtYnV0dG9uJywgJ2NkeC1idXR0b24tLXdlaWdodC1wcmltYXJ5J119XG5cdFx0dGl0bGU9e2dldE1lc3NhZ2UoJ3JlcG9ydEJ1dHRvblRpdGxlJykgKyBPUFRJT05TLnJyZFBhZ2V9XG5cdFx0b25DbGljaz17b25DbGlja31cblx0PlxuXHRcdHtpc1NwZWNpYWxMb2coKSA/IGdldE1lc3NhZ2UoJ3JlcG9ydEJ1dHRvbkxvZ1RleHQnKSA6IGdldE1lc3NhZ2UoJ3JlcG9ydEJ1dHRvblRleHQnKX1cblx0PC9idXR0b24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBSZXBvcnRCdXR0b247XG4iLCAiY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRjb25zdCB7d2dVTFN9ID0gd2luZG93O1xuXHRyZXR1cm4ge1xuXHRcdGVkaXRTdW1tYXJ5OiB3Z1VMUyhcblx0XHRcdCdbW01lZGlhV2lraTpHYWRnZXQtUlJELmpzfOWNiuiHquWKqOaPkOaKpV1d5L+u6K6i54mI5pys5Yig6ZmkJyxcblx0XHRcdCdbW01lZGlhV2lraTpHYWRnZXQtUlJELmpzfOWNiuiHquWLleaPkOWgsV1d5L+u6KiC54mI5pys5Yiq6ZmkJ1xuXHRcdCksXG5cdFx0ZXJyTm9SZXZpc2lvblByb3ZpZGVkOiB3Z1VMUygn5oKo5rKh5pyJ6YCJ5oup6ZyA6ZqQ6JeP55qE54mI5pys77yBJywgJ+aCqOaykuaciemBuOaTh+mcgOmaseiXj+eahOeJiOacrO+8gScpLFxuXHRcdGVyck5vSXRlbVByb3ZpZGVkOiB3Z1VMUygn5oKo5rKh5pyJ6YCJ5oup6ZyA6ZqQ6JeP55qE6aG555uu77yBJywgJ+aCqOaykuaciemBuOaTh+mcgOmaseiXj+eahOmgheebru+8gScpLFxuXHRcdHdhcm5Ob1JlYXNvblByb3ZpZGVkOiB3Z1VMUygn5oKo5rKh5pyJ6L6T5YWl5Lu75L2V55CG55Sx77yB56Gu5a6a6KaB57un57ut5ZCX77yfJywgJ+aCqOaykuaciei8uOWFpeS7u+S9leeQhueUse+8geeiuuWumuimgee5vOe6jOWXju+8nycpLFxuXHRcdGhpZGVJdGVtczogd2dVTFMoJ+mcgOmakOiXj+eahOmhueebru+8micsICfpnIDpmrHol4/nmoTpoIXnm67vvJonKSxcblx0XHRoaWRlQ29udGVudDogd2dVTFMoJ+e8lui+keWGheWuuScsICfnt6jovK/lhaflrrknKSxcblx0XHRoaWRlTG9nOiB3Z1VMUygn5pel5b+X55uu5qCH5LiO5Y+C5pWwJywgJ+aXpeiqjOebruaomeiIh+WPg+aVuCcpLFxuXHRcdGhpZGVVc2VybmFtZTogd2dVTFMoJ+e8lui+keiAheeUqOaIt+WQjScsICfnt6jovK/ogIXnlKjmiLblkI0nKSxcblx0XHRoaWRlU3VtbWFyeTogd2dVTFMoJ+e8lui+keaRmOimgScsICfnt6jovK/mkZjopoEnKSxcblx0XHRoaWRlUmVhc29uOiB3Z1VMUygn55CG5o2u77yaJywgJ+eQhuaTmu+8micpLFxuXHRcdGhpZGVSZWFzb25SRDE6IHdnVUxTKCdSRDHvvJrmnaHnm67kuK3mmI7mmL7kvrXniq/okZfkvZzmnYPnmoTlhoXlrrknLCAnUkQx77ya5qKd55uu5Lit5piO6aGv5L6154qv6JGX5L2c5qyK55qE5YWn5a65JyksXG5cdFx0aGlkZVJlYXNvblJEMjogd2dVTFMoJ1JEMu+8muS4pemHjeS+rui+seOAgei0rOS9juaIluaUu+WHu+aAp+aWh+acrCcsICdSRDLvvJrlmrTph43kvq7ovrHjgIHosrbkvY7miJbmlLvmk4rmgKfmlofmnKwnKSxcblx0XHRoaWRlUmVhc29uUkQzOiB3Z1VMUygnUkQz77ya57qv57K55omw5Lmx5oCn5YaF5a65JywgJ+e0lOeyueaTvuS6guaAp+WFp+WuuScpLFxuXHRcdGhpZGVSZWFzb25SRDQ6IHdnVUxTKCdSRDTvvJrmmI7mmL7ov53lj43ms5Xlvovms5Xop4TmiJbov53og4zlhazluo/oia/kv5fnmoTlhoXlrrknLCAnUkQ077ya5piO6aGv6YGV5Y+N5rOV5b6L5rOV6KaP5oiW6YGV6IOM5YWs5bqP6Imv5L+X55qE5YWn5a65JyksXG5cdFx0aGlkZVJlYXNvblJENTogd2dVTFMoJ1JENe+8muWFtuS7luS4jeWunOWFrOW8gOeahOeJiOacrOWGheWuuScsICdSRDXvvJrlhbbku5bkuI3lrpzlhazplovnmoTniYjmnKzlhaflrrknKSxcblx0XHRoaWRlUmVhc29uT1MxOiB3Z1VMUygnT1Mx77ya5pyq5YWs5byA55qE5Liq5Lq66LWE5paZJywgJ09TMe+8muacquWFrOmWi+eahOWAi+S6uuizh+aWmScpLFxuXHRcdGhpZGVSZWFzb25PUzI6IHdnVUxTKCdPUzLvvJrlj6/og73lvbHlk43nmb7np5Hov5DkvZznmoTlhoXlrrknLCAnT1My77ya5Y+v6IO95b2x6Z+/55m+56eR6YGL5L2c55qE5YWn5a65JyksXG5cdFx0aGlkZVJlYXNvbk9TMzogd2dVTFMoJ09TM++8muegtOWdj+aAp+OAgeaJsOS5seaAp+eUqOaIt+WQjScsICdPUzPvvJrnoLTlo57mgKfjgIHmk77kuoLmgKfnlKjmiLblkI0nKSxcblx0XHRoaWRlUmVhc29uT1M0OiB3Z1VMUyhcblx0XHRcdCdPUzTvvJrljp/pobXpnaLlhoXlrrnmnaXoh6rlpJbpg6jmnaXmupDjgIHkuI3nrKblkIjmnInlhb3moaPmoYjppobmnaHkvovvvIzkvYbnu4/ov4fmlLnlhpnlkI7vvIzlt7LnrKblkIjmnInlhb3moaPmoYjppobmnaHkvovnmoTpobXpnaInLFxuXHRcdFx0J09TNO+8muWOn+mggemdouWFp+WuueS+huiHquWklumDqOS+hua6kOOAgeS4jeespuWQiOacieeNuOaqlOahiOmkqOaineS+i++8jOS9hue2k+mBjuimhuWvq+W+jO+8jOW3suespuWQiOacieeNuOaqlOahiOmkqOaineS+i+eahOmggemdoidcblx0XHQpLFxuXHRcdGhpZGVSZWFzb25PdGhlcjogd2dVTFMoJ+S7heS9v+eUqOS4i+aWueeahOmZhOWKoOeQhueUsScsICflg4Xkvb/nlKjkuIvmlrnnmoTpmYTliqDnkIbnlLEnKSxcblx0XHRvdGhlclJlYXNvbnM6IHdnVUxTKCfpmYTliqDnkIbnlLHvvIjlj6/pgInvvIzkuI3nlKjnrb7lkI3vvIknLCAn6ZmE5Yqg55CG55Sx77yI5Y+v6YG477yM5LiN55So57C95ZCN77yJJyksXG5cdFx0ZGlhbG9nVGl0bGU6IHdnVUxTKCfmj5DmiqXkv67orqLniYjmnKzliKDpmaQnLCAn5o+Q5aCx5L+u6KiC54mI5pys5Yiq6ZmkJyksXG5cdFx0ZGlhbG9nQnV0dG9uU3VibWl0OiB3Z1VMUygn5o+Q5oqlJywgJ+aPkOWgsScpLFxuXHRcdGRpYWxvZ0J1dHRvbkNhbmNlbDogd2dVTFMoJ+WPlua2iCcsICflj5bmtognKSxcblx0XHRyZXBvcnRCdXR0b25UaXRsZTogd2dVTFMoJ+WwhumAieS4reeahOeJiOacrOaPkOaKpeWIsCcsICflsIfpgbjkuK3nmoTniYjmnKzmj5DloLHliLAnKSxcblx0XHRyZXBvcnRCdXR0b25UZXh0OiB3Z1VMUygn6K+35rGC5Yig6Zmk6KKr6YCJ54mI5pysJywgJ+iri+axguWIqumZpOiiq+mBuOeJiOacrCcpLFxuXHRcdHJlcG9ydEJ1dHRvbkxvZ1RleHQ6IHdnVUxTKCfor7fmsYLliKDpmaTooqvpgInml6Xlv5cnLCAn6KuL5rGC5Yiq6Zmk6KKr6YG45pel6KqMJyksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImNvbnN0IGlzU3BlY2lhbExvZyA9ICgpID0+IHtcblx0Y29uc3Qge3dnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0cmV0dXJuIHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lID09PSAnTG9nJztcbn07XG5cbmV4cG9ydCB7aXNTcGVjaWFsTG9nfTtcbiIsICJpbXBvcnQgUmVwb3J0QnV0dG9uIGZyb20gJy4vY29tcG9uZW50cy9SZXBvcnRCdXR0b24nO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtzaG93RGlhbG9nfSBmcm9tICcuL21vZHVsZXMvc2hvd0RpYWxvZyc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gcnJkKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRjb25zdCB7d2dBY3Rpb24sIHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAod2dBY3Rpb24gPT09ICdoaXN0b3J5JyB8fCB3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSA9PT0gJ0xvZycpIHtcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGJvZHkuZmluZChcblx0XHRcdFtcblx0XHRcdFx0Jy5oaXN0b3J5c3VibWl0Lm13LWhpc3RvcnktY29tcGFyZXNlbGVjdGVkdmVyc2lvbnMtYnV0dG9uJyxcblx0XHRcdFx0Jy5lZGl0Y2hhbmdldGFncy1sb2ctc3VibWl0Lm13LWxvZy1lZGl0Y2hhbmdldGFncy1idXR0b24nLFxuXHRcdFx0XS5qb2luKCcsJylcblx0XHQpKSB7XG5cdFx0XHRlbGVtZW50LmFmdGVyKFxuXHRcdFx0XHRSZXBvcnRCdXR0b24oe1xuXHRcdFx0XHRcdG9uQ2xpY2s6ICgpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdHNob3dEaWFsb2coJGJvZHkpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxufSk7XG4iLCAiaW1wb3J0IHR5cGUge1JyZENvbmZpZ30gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IGNvbmZpZzogUnJkQ29uZmlnID0ge1xuXHRjaGVja2JveGVzOiB7fSxcblx0b3RoZXJzOiB7fSxcbn07XG5cbmNvbnN0IHVwZGF0ZUNvbmZpZyA9ICgpOiB2b2lkID0+IHtcblx0Y29uc3QgY2hlY2tCb3hlczogUnJkQ29uZmlnWydjaGVja2JveGVzJ10gPSB7fTtcblxuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PignI3JyZF9faGlkZS1jb250ZW50Jyk/LmNoZWNrZWQpIHtcblx0XHRjaGVja0JveGVzLnJyZEhpZGVDb250ZW50ID0gdHJ1ZTtcblx0fVxuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PignI3JyZF9faGlkZS11c2VybmFtZScpPy5jaGVja2VkKSB7XG5cdFx0Y2hlY2tCb3hlcy5ycmRIaWRlVXNlcm5hbWUgPSB0cnVlO1xuXHR9XG5cdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KCcjcnJkX19oaWRlLXN1bW1hcnknKT8uY2hlY2tlZCkge1xuXHRcdGNoZWNrQm94ZXMucnJkSGlkZVN1bW1hcnkgPSB0cnVlO1xuXHR9XG5cblx0Y29uZmlnLmNoZWNrYm94ZXMgPSBjaGVja0JveGVzO1xuXG5cdGNvbnN0IG90aGVyczogUnJkQ29uZmlnWydvdGhlcnMnXSA9IHt9O1xuXG5cdGNvbnN0IHJlYXNvbklucHV0OiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJyNycmRfX3JlYXNvbicpO1xuXHRjb25zdCBvdGhlclJlYXNvbnNJbnB1dDogSFRNTElucHV0RWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KCcjcnJkX19vdGhlci1yZWFzb25zJyk7XG5cdGlmIChyZWFzb25JbnB1dCkge1xuXHRcdG90aGVycy5ycmRSZWFzb24gPSByZWFzb25JbnB1dC52YWx1ZTtcblx0fVxuXHRpZiAob3RoZXJSZWFzb25zSW5wdXQpIHtcblx0XHRvdGhlcnMucnJkT3RoZXJSZWFzb25zID0gb3RoZXJSZWFzb25zSW5wdXQudmFsdWU7XG5cdH1cblxuXHRjb25maWcub3RoZXJzID0gb3RoZXJzO1xufTtcblxuZXhwb3J0IHtjb25maWcsIHVwZGF0ZUNvbmZpZ307XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuSlNYJztcbmltcG9ydCB7Y29udGVudFdyYXBwZXJ9IGZyb20gJy4vRGlhbG9nSW5uZXIubW9kdWxlLmxlc3MnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9tb2R1bGVzL2kxOG4nO1xuaW1wb3J0IHtpc1NwZWNpYWxMb2d9IGZyb20gJy4uL21vZHVsZXMvaXNTcGVjaWFsTG9nJztcblxuY29uc3QgRGlhbG9nSW5uZXIgPSAoKSA9PiAoXG5cdDxkaXYgaWQ9XCJycmRfX2NvbmZpZ1wiPlxuXHRcdHtnZXRNZXNzYWdlKCdoaWRlSXRlbXMnKX1cblx0XHQ8YnIgLz5cblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y29udGVudFdyYXBwZXJ9PlxuXHRcdFx0PGlucHV0IG5hbWU9XCJjb250ZW50XCIgaWQ9XCJycmRfX2hpZGUtY29udGVudFwiIHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwiY29udGVudFwiIGNoZWNrZWQgLz5cblx0XHRcdDxsYWJlbCBodG1sRm9yPVwicnJkX19oaWRlLWNvbnRlbnRcIiBpZD1cInJyZC1jb250ZW50XCI+XG5cdFx0XHRcdHtpc1NwZWNpYWxMb2coKSA/IGdldE1lc3NhZ2UoJ2hpZGVMb2cnKSA6IGdldE1lc3NhZ2UoJ2hpZGVDb250ZW50Jyl9XG5cdFx0XHQ8L2xhYmVsPlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjb250ZW50V3JhcHBlcn0+XG5cdFx0XHQ8aW5wdXQgbmFtZT1cInVzZXJuYW1lXCIgaWQ9XCJycmRfX2hpZGUtdXNlcm5hbWVcIiB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cInVzZXJuYW1lXCIgLz5cblx0XHRcdDxsYWJlbCBodG1sRm9yPVwicnJkX19oaWRlLXVzZXJuYW1lXCIgaWQ9XCJycmQtdXNlcm5hbWVcIj5cblx0XHRcdFx0e2dldE1lc3NhZ2UoJ2hpZGVVc2VybmFtZScpfVxuXHRcdFx0PC9sYWJlbD5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y29udGVudFdyYXBwZXJ9PlxuXHRcdFx0PGlucHV0IG5hbWU9XCJzdW1tYXJ5XCIgaWQ9XCJycmRfX2hpZGUtc3VtbWFyeVwiIHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwic3VtbWFyeVwiIC8+XG5cdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInJyZF9faGlkZS1zdW1tYXJ5XCIgaWQ9XCJycmQtc3VtbWFyeVwiPlxuXHRcdFx0XHR7Z2V0TWVzc2FnZSgnaGlkZVN1bW1hcnknKX1cblx0XHRcdDwvbGFiZWw+XG5cdFx0PC9kaXY+XG5cdFx0PGJyIC8+XG5cdFx0PGJyIC8+XG5cdFx0e2dldE1lc3NhZ2UoJ2hpZGVSZWFzb24nKX1cblx0XHQ8YnIgLz5cblx0XHQ8c2VsZWN0IG5hbWU9XCJycmRfX3JlYXNvblwiIGlkPVwicnJkX19yZWFzb25cIj5cblx0XHRcdDxvcHRpb24gdmFsdWU9e2dldE1lc3NhZ2UoJ2hpZGVSZWFzb25SRDEnKX0+e2dldE1lc3NhZ2UoJ2hpZGVSZWFzb25SRDEnKX08L29wdGlvbj5cblx0XHRcdDxvcHRpb24gdmFsdWU9e2dldE1lc3NhZ2UoJ2hpZGVSZWFzb25SRDInKX0+e2dldE1lc3NhZ2UoJ2hpZGVSZWFzb25SRDInKX08L29wdGlvbj5cblx0XHRcdDxvcHRpb24gdmFsdWU9e2dldE1lc3NhZ2UoJ2hpZGVSZWFzb25SRDMnKX0+e2dldE1lc3NhZ2UoJ2hpZGVSZWFzb25SRDMnKX08L29wdGlvbj5cblx0XHRcdDxvcHRpb24gdmFsdWU9e2dldE1lc3NhZ2UoJ2hpZGVSZWFzb25SRDQnKX0+e2dldE1lc3NhZ2UoJ2hpZGVSZWFzb25SRDQnKX08L29wdGlvbj5cblx0XHRcdDxvcHRpb24gdmFsdWU9e2dldE1lc3NhZ2UoJ2hpZGVSZWFzb25SRDUnKX0+e2dldE1lc3NhZ2UoJ2hpZGVSZWFzb25SRDUnKX08L29wdGlvbj5cblx0XHRcdDxvcHRpb24gdmFsdWU9e2dldE1lc3NhZ2UoJ2hpZGVSZWFzb25PUzEnKX0+e2dldE1lc3NhZ2UoJ2hpZGVSZWFzb25PUzEnKX08L29wdGlvbj5cblx0XHRcdDxvcHRpb24gdmFsdWU9e2dldE1lc3NhZ2UoJ2hpZGVSZWFzb25PUzInKX0+e2dldE1lc3NhZ2UoJ2hpZGVSZWFzb25PUzInKX08L29wdGlvbj5cblx0XHRcdDxvcHRpb24gdmFsdWU9e2dldE1lc3NhZ2UoJ2hpZGVSZWFzb25PUzMnKX0+e2dldE1lc3NhZ2UoJ2hpZGVSZWFzb25PUzMnKX08L29wdGlvbj5cblx0XHRcdDxvcHRpb24gdmFsdWU9e2dldE1lc3NhZ2UoJ2hpZGVSZWFzb25PUzQnKX0+e2dldE1lc3NhZ2UoJ2hpZGVSZWFzb25PUzQnKX08L29wdGlvbj5cblx0XHRcdDxvcHRpb24gdmFsdWU9XCJcIj57Z2V0TWVzc2FnZSgnaGlkZVJlYXNvbk90aGVyJyl9PC9vcHRpb24+XG5cdFx0PC9zZWxlY3Q+XG5cdFx0PGJyIC8+XG5cdFx0PGJyIC8+XG5cdFx0e2dldE1lc3NhZ2UoJ290aGVyUmVhc29ucycpfVxuXHRcdDxiciAvPlxuXHRcdDx0ZXh0YXJlYSBuYW1lPVwib3RoZXJSZWFzb25zXCIgaWQ9XCJycmRfX290aGVyLXJlYXNvbnNcIiByb3dzPXs0fT48L3RleHRhcmVhPlxuXHQ8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IERpYWxvZ0lubmVyO1xuIiwgImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvUlJEL2NvbXBvbmVudHMvRGlhbG9nSW5uZXIubW9kdWxlLmxlc3NcIjtcbmV4cG9ydCBjb25zdCBjb250ZW50V3JhcHBlciA9IFwiRGlhbG9nSW5uZXItbW9kdWxlX19jb250ZW50V3JhcHBlcl82VGRUVkdfXzQxMDBcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcImNvbnRlbnRXcmFwcGVyXCI6IGNvbnRlbnRXcmFwcGVyXG59O1xuICAgICAgIiwgImNvbnN0IGxvYWRJZHMgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogc3RyaW5nW10gPT4ge1xuXHRjb25zdCBpZHM6IHN0cmluZ1tdID0gW107XG5cblx0Y29uc3QgYm94ZXM6IEpRdWVyeTxIVE1MSW5wdXRFbGVtZW50PiA9ICRib2R5LmZpbmQoJ2lucHV0Jyk7XG5cdGZvciAoY29uc3QgYm94IG9mIGJveGVzKSB7XG5cdFx0Y29uc3Qge2NoZWNrZWQsIG5hbWUsIHR5cGV9ID0gYm94O1xuXG5cdFx0aWYgKHR5cGUgIT09ICdjaGVja2JveCcgfHwgIWNoZWNrZWQpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlkUmVnZXg6IFJlZ0V4cCA9IC9pZHNcXFsoXFxkKyldLztcblx0XHRjb25zdCBpZEFycmF5OiBSZWdFeHBFeGVjQXJyYXkgfCBudWxsID0gaWRSZWdleC5leGVjKG5hbWUpO1xuXHRcdGlmIChpZEFycmF5Py5bMV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0WywgaWRzW2lkcy5sZW5ndGhdXSA9IGlkQXJyYXk7XG5cdH1cblxuXHRyZXR1cm4gaWRzO1xufTtcblxuZXhwb3J0IHtsb2FkSWRzfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFJSRC8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge3VuaXF1ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBxdWVyeVJldmlzaW9ucyA9IGFzeW5jICh0aXRsZXM6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgPSB7XG5cdFx0dGl0bGVzLFxuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0cnZwcm9wOiAnY29udGVudCcsXG5cdFx0cnZzbG90czogJ21haW4nLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBlZGl0ID0gYXN5bmMgKHRpdGxlOiBzdHJpbmcsIHRleHQ6IHN0cmluZywgc3VtbWFyeT86IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaUVkaXRQYWdlUGFyYW1zID0ge1xuXHRcdHRpdGxlLFxuXHRcdHRleHQsXG5cdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHR9O1xuXHRpZiAoc3VtbWFyeSkge1xuXHRcdHBhcmFtcy5zdW1tYXJ5ID0gc3VtbWFyeTtcblx0fVxuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbihwYXJhbXMpO1xuXG5cdHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IHN1Ym1pdCA9IGFzeW5jIChpZHM6IHN0cmluZ1tdLCB0b0hpZGU6IHN0cmluZywgcmVhc29uOiBzdHJpbmcsIG90aGVyUmVhc29uczogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRmb3IgKGNvbnN0IFJEaWQgb2YgWzEsIDIsIDMsIDQsIDVdKSB7XG5cdFx0aWYgKHJlYXNvbi5pbmNsdWRlcyhgUkQke1JEaWR9YCkpIHtcblx0XHRcdHJlYXNvbiA9IGBSRCR7UkRpZH1gO1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0Zm9yIChjb25zdCBPU2lkIG9mIFsxLCAyLCAzLCA0XSkge1xuXHRcdGlmIChyZWFzb24uaW5jbHVkZXMoYE9TJHtPU2lkfWApKSB7XG5cdFx0XHRyZWFzb24gPSBgT1Mke09TaWR9YDtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IHJyZEFycjogc3RyaW5nW10gPSBbXG5cdFx0J3t7UmV2ZGVsJyxcblx0XHQnfHN0YXR1cyA9ICcsXG5cdFx0YHxhcnRpY2xlID0gJHt3Z1BhZ2VOYW1lfWAsXG5cdFx0YHxzZXQgPSAke3RvSGlkZX1gLFxuXHRcdGB8cmVhc29uID0gJHtyZWFzb259JHtvdGhlclJlYXNvbnN9YCxcblx0XTtcblxuXHRmb3IgKGNvbnN0IFtpbmRleCwgaWRdIG9mIHVuaXF1ZUFycmF5KGlkcykuZW50cmllcygpKSB7XG5cdFx0Ly8gUmVwbGFjZSBTZXQgd2l0aCB1bmlxdWVBcnJheSwgYXZvaWRpbmcgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXHRcdHJyZEFycltycmRBcnIubGVuZ3RoXSA9IGB8aWQke2luZGV4ICsgMX0gPSAke2lkfWA7XG5cdH1cblx0cnJkQXJyW3JyZEFyci5sZW5ndGhdID0gJ319XFxu4oCU4oCUfn4nLmNvbmNhdCgnfn4nKTtcblxuXHR0cnkge1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcXVlcnlSZXZpc2lvbnMoT1BUSU9OUy5ycmRQYWdlKTtcblxuXHRcdGxldCBjb250ZW50OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdFx0aWYgKHJlc3BvbnNlWydxdWVyeSddPy5wYWdlcykge1xuXHRcdFx0Y29udGVudCA9IHJlc3BvbnNlWydxdWVyeSddLnBhZ2VzWzBdLnJldmlzaW9uc1swXS5zbG90cy5tYWluLmNvbnRlbnQgYXMgc3RyaW5nO1xuXHRcdH1cblxuXHRcdGlmIChjb250ZW50ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHZvaWQgbXcubm90aWZ5KGBFcnJvciB3aGVuIGxvYWRpbmcgcGFnZSAke09QVElPTlMucnJkUGFnZX06IG1pc3NpbmdgLCB7XG5cdFx0XHRcdHRhZzogJ1JSRCcsXG5cdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBlZGl0KE9QVElPTlMucnJkUGFnZSwgYCR7Y29udGVudH1cXG5cXG4ke3JyZEFyci5qb2luKCdcXG4nKX1gLCBnZXRNZXNzYWdlKCdlZGl0U3VtbWFyeScpKTtcblxuXHRcdFx0aWYgKHJlc3VsdFsnZWRpdCddPy5yZXN1bHQgPT09ICdTdWNjZXNzJykge1xuXHRcdFx0XHRsb2NhdGlvbi5yZXBsYWNlKG13LnV0aWwuZ2V0VXJsKE9QVElPTlMucnJkUGFnZSkpO1xuXHRcdFx0fSBlbHNlIGlmIChyZXN1bHRbJ2Vycm9yJ10/LmNvZGUpIHtcblx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoYFNvbWUgZXJyb3JzIG9jY3VyZWQgd2hpbGUgc2F2aW5nIHBhZ2U6ICR7cmVzdWx0WydlcnJvciddLmNvZGV9YCwge1xuXHRcdFx0XHRcdHRhZzogJ1JSRCcsXG5cdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2b2lkIG13Lm5vdGlmeSgnU29tZSBlcnJvcnMgb2NjdXJlZCB3aGlsZSBzYXZpbmcgcGFnZTogdW5rbm93bicsIHtcblx0XHRcdFx0XHR0YWc6ICdSUkQnLFxuXHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0dm9pZCBtdy5ub3RpZnkoYEVycm9yIHdoZW4gZWRpdGluZyBwYWdlICR7T1BUSU9OUy5ycmRQYWdlfWAsIHt0YWc6ICdSUkQnLCB0eXBlOiAnZXJyb3InfSk7XG5cdFx0fVxuXHR9IGNhdGNoIHtcblx0XHR2b2lkIG13Lm5vdGlmeShgRXJyb3Igd2hlbiBsb2FkaW5nIHBhZ2UgJHtPUFRJT05TLnJyZFBhZ2V9YCwge3RhZzogJ1JSRCcsIHR5cGU6ICdlcnJvcid9KTtcblx0fVxufTtcblxuZXhwb3J0IHtzdWJtaXR9O1xuIiwgImltcG9ydCB7Y29uZmlnLCB1cGRhdGVDb25maWd9IGZyb20gJy4vcnJkQ29uZmlnJztcbmltcG9ydCBEaWFsb2dJbm5lciBmcm9tICcuLi9jb21wb25lbnRzL0RpYWxvZ0lubmVyJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2lzU3BlY2lhbExvZ30gZnJvbSAnLi9pc1NwZWNpYWxMb2cnO1xuaW1wb3J0IHtsb2FkSWRzfSBmcm9tICcuL2xvYWRJZHMnO1xuaW1wb3J0IHtzdWJtaXR9IGZyb20gJy4vc3VibWl0JztcblxubGV0ICRkaWFsb2c6IEpRdWVyeSB8IHVuZGVmaW5lZDtcblxuY29uc3Qgc2hvd0RpYWxvZyA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3QgaWRzOiBzdHJpbmdbXSA9IGxvYWRJZHMoJGJvZHkpO1xuXHRpZiAoIWlkcy5sZW5ndGgpIHtcblx0XHR2b2lkIG13Lm5vdGlmeShnZXRNZXNzYWdlKCdlcnJOb1JldmlzaW9uUHJvdmlkZWQnKSwge1xuXHRcdFx0dGFnOiAnUlJEJyxcblx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0fSk7XG5cblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBkaWFsb2c6IFJlYWN0LlJlYWN0RWxlbWVudCA9IERpYWxvZ0lubmVyKCk7XG5cdGlmICgkZGlhbG9nKSB7XG5cdFx0JGRpYWxvZy5odG1sKGRpYWxvZykuZGlhbG9nKCdvcGVuJyk7XG5cblx0XHRmb3IgKGNvbnN0IFtpZCwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGNvbmZpZy5vdGhlcnMpKSB7XG5cdFx0XHQkYm9keS5maW5kKGAjJHtpZH1gKS52YWwodmFsdWUgYXMgc3RyaW5nKTtcblx0XHR9XG5cdFx0Zm9yIChjb25zdCBbaWQsIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhjb25maWcuY2hlY2tib3hlcykpIHtcblx0XHRcdGlmICh2YWx1ZSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHQkYm9keS5maW5kKGAjJHtpZH1gKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0JGRpYWxvZyA9ICQoZGlhbG9nKS5kaWFsb2coe1xuXHRcdHRpdGxlOiBnZXRNZXNzYWdlKCdkaWFsb2dUaXRsZScpLFxuXHRcdG1pbldpZHRoOiA1MTUsXG5cdFx0bWluSGVpZ2h0OiAxNTAsXG5cdFx0Y2xvc2U6IHVwZGF0ZUNvbmZpZyxcblx0XHRidXR0b25zOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ2RpYWxvZ0J1dHRvblN1Ym1pdCcpLFxuXHRcdFx0XHRjbGljaygpOiB2b2lkIHtcblx0XHRcdFx0XHQkKHRoaXMpLmRpYWxvZygnY2xvc2UnKTtcblxuXHRcdFx0XHRcdGNvbnN0IHtcblx0XHRcdFx0XHRcdGNoZWNrYm94ZXM6IHtycmRIaWRlQ29udGVudCwgcnJkSGlkZVVzZXJuYW1lLCBycmRIaWRlU3VtbWFyeX0sXG5cdFx0XHRcdFx0XHRvdGhlcnM6IHtycmRSZWFzb259LFxuXHRcdFx0XHRcdH0gPSBjb25maWc7XG5cblx0XHRcdFx0XHRsZXQge3JyZE90aGVyUmVhc29uc30gPSBjb25maWcub3RoZXJzO1xuXHRcdFx0XHRcdGlmIChycmRPdGhlclJlYXNvbnMgJiYgcnJkUmVhc29uKSB7XG5cdFx0XHRcdFx0XHRycmRPdGhlclJlYXNvbnMgPSBg77yMJHtycmRPdGhlclJlYXNvbnN9YDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjb25zdCB0b0hpZGU6IHN0cmluZ1tdID0gW107XG5cdFx0XHRcdFx0aWYgKHJyZEhpZGVDb250ZW50KSB7XG5cdFx0XHRcdFx0XHR0b0hpZGVbdG9IaWRlLmxlbmd0aF0gPSBpc1NwZWNpYWxMb2coKSA/IGdldE1lc3NhZ2UoJ2hpZGVMb2cnKSA6IGdldE1lc3NhZ2UoJ2hpZGVDb250ZW50Jyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChycmRIaWRlVXNlcm5hbWUpIHtcblx0XHRcdFx0XHRcdHRvSGlkZVt0b0hpZGUubGVuZ3RoXSA9IGdldE1lc3NhZ2UoJ2hpZGVVc2VybmFtZScpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAocnJkSGlkZVN1bW1hcnkpIHtcblx0XHRcdFx0XHRcdHRvSGlkZVt0b0hpZGUubGVuZ3RoXSA9IGdldE1lc3NhZ2UoJ2hpZGVTdW1tYXJ5Jyk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCF0b0hpZGUubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeShnZXRNZXNzYWdlKCdlcnJOb0l0ZW1Qcm92aWRlZCcpLCB7XG5cdFx0XHRcdFx0XHRcdHRhZzogJ1JSRCcsXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGxldCBjb250OiBib29sZWFuID0gdHJ1ZTtcblx0XHRcdFx0XHRpZiAoIXJyZFJlYXNvbiAmJiAhcnJkT3RoZXJSZWFzb25zKSB7XG5cdFx0XHRcdFx0XHRjb250ID0gY29uZmlybShnZXRNZXNzYWdlKCd3YXJuTm9SZWFzb25Qcm92aWRlZCcpKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoY29udCkge1xuXHRcdFx0XHRcdFx0dm9pZCBzdWJtaXQoaWRzLCB0b0hpZGUuam9pbign44CBJyksIHJyZFJlYXNvbiA/PyAnJywgcnJkT3RoZXJSZWFzb25zID8/ICcnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdkaWFsb2dCdXR0b25DYW5jZWwnKSxcblx0XHRcdFx0Y2xpY2soKTogdm9pZCB7XG5cdFx0XHRcdFx0JCh0aGlzKS5kaWFsb2coJ2Nsb3NlJyk7XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdF0s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QzBHO0lBQVVsSjtFQUEwQixJQUFJQyxHQUFHQyxPQUFPQyxJQUFJO0FBRTdELE1BQUkrSSxhQUFhLGFBQWFsSiwrQkFBK0IsT0FBTztBQUFBLFFBQUFtSixhQUFBdEcsMkJBQzdDTCxNQUFNRyxLQUMzQixDQUNDLDREQUNBLHlEQUFBLEVBQ0N3RSxLQUFLLEdBQUcsQ0FDWCxDQUFBLEdBQUFpQztBQUFBLFFBQUE7QUFMQSxXQUFBRCxXQUFBcEcsRUFBQSxHQUFBLEVBQUFxRyxTQUFBRCxXQUFBbkcsRUFBQSxHQUFBQyxRQUtHO0FBQUEsY0FMUW9HLFVBQUFELE9BQUF2SDtBQU1Wd0gsZ0JBQVFDLE1BQ1AzSSxxQkFBYTtVQUNaTixTQUFTQSxNQUFZO0FBQ3BCeUgsdUJBQVd0RixLQUFLO1VBQ2pCO1FBQ0QsQ0FBQyxDQUNGO01BQ0Q7SUFBQSxTQUFBZSxLQUFBO0FBQUE0RixpQkFBQTNGLEVBQUFELEdBQUE7SUFBQSxVQUFBO0FBQUE0RixpQkFBQTFGLEVBQUE7SUFBQTtFQUNEO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFsicnJkUGFnZSIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJnZXRJMThuTWVzc2FnZXMiLCAid2dVTFMiLCAid2luZG93IiwgImVkaXRTdW1tYXJ5IiwgImVyck5vUmV2aXNpb25Qcm92aWRlZCIsICJlcnJOb0l0ZW1Qcm92aWRlZCIsICJ3YXJuTm9SZWFzb25Qcm92aWRlZCIsICJoaWRlSXRlbXMiLCAiaGlkZUNvbnRlbnQiLCAiaGlkZUxvZyIsICJoaWRlVXNlcm5hbWUiLCAiaGlkZVN1bW1hcnkiLCAiaGlkZVJlYXNvbiIsICJoaWRlUmVhc29uUkQxIiwgImhpZGVSZWFzb25SRDIiLCAiaGlkZVJlYXNvblJEMyIsICJoaWRlUmVhc29uUkQ0IiwgImhpZGVSZWFzb25SRDUiLCAiaGlkZVJlYXNvbk9TMSIsICJoaWRlUmVhc29uT1MyIiwgImhpZGVSZWFzb25PUzMiLCAiaGlkZVJlYXNvbk9TNCIsICJoaWRlUmVhc29uT3RoZXIiLCAib3RoZXJSZWFzb25zIiwgImRpYWxvZ1RpdGxlIiwgImRpYWxvZ0J1dHRvblN1Ym1pdCIsICJkaWFsb2dCdXR0b25DYW5jZWwiLCAicmVwb3J0QnV0dG9uVGl0bGUiLCAicmVwb3J0QnV0dG9uVGV4dCIsICJyZXBvcnRCdXR0b25Mb2dUZXh0IiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJpc1NwZWNpYWxMb2ciLCAid2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJSZXBvcnRCdXR0b24iLCAib25DbGljayIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAidHlwZSIsICJjbGFzc05hbWUiLCAidGl0bGUiLCAiUmVwb3J0QnV0dG9uX2RlZmF1bHQiLCAiaW1wb3J0X2V4dF9nYWRnZXQ1IiwgImNoZWNrYm94ZXMiLCAib3RoZXJzIiwgInVwZGF0ZUNvbmZpZyIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0MiIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QzIiwgImNoZWNrQm94ZXMiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJjaGVja2VkIiwgInJyZEhpZGVDb250ZW50IiwgInJyZEhpZGVVc2VybmFtZSIsICJycmRIaWRlU3VtbWFyeSIsICJyZWFzb25JbnB1dCIsICJvdGhlclJlYXNvbnNJbnB1dCIsICJycmRSZWFzb24iLCAidmFsdWUiLCAicnJkT3RoZXJSZWFzb25zIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJjb250ZW50V3JhcHBlciIsICJEaWFsb2dJbm5lciIsICJpZCIsICJuYW1lIiwgImh0bWxGb3IiLCAicm93cyIsICJEaWFsb2dJbm5lcl9kZWZhdWx0IiwgImxvYWRJZHMiLCAiJGJvZHkiLCAiaWRzIiwgImJveGVzIiwgImZpbmQiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiYm94IiwgImlkUmVnZXgiLCAiaWRBcnJheSIsICJleGVjIiwgImxlbmd0aCIsICJlcnIiLCAiZSIsICJmIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAicXVlcnlSZXZpc2lvbnMiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJ0aXRsZXMiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInJ2cHJvcCIsICJydnNsb3RzIiwgInJlc3BvbnNlIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJlZGl0IiwgIl9yZWYyIiwgInRleHQiLCAic3VtbWFyeSIsICJwb3N0V2l0aEVkaXRUb2tlbiIsICJfeDIiLCAiX3gzIiwgIl94NCIsICJzdWJtaXQiLCAiX3JlZjMiLCAidG9IaWRlIiwgInJlYXNvbiIsICJ3Z1BhZ2VOYW1lIiwgIl9pIiwgIl9hcnIiLCAiUkRpZCIsICJpbmNsdWRlcyIsICJfaTIiLCAiX2FycjIiLCAiT1NpZCIsICJycmRBcnIiLCAiX2l0ZXJhdG9yMyIsICJ1bmlxdWVBcnJheSIsICJlbnRyaWVzIiwgIl9zdGVwMyIsICJpbmRleCIsICJfcmVzcG9uc2UkcXVlcnkiLCAiY29udGVudCIsICJwYWdlcyIsICJyZXZpc2lvbnMiLCAic2xvdHMiLCAibWFpbiIsICJub3RpZnkiLCAidGFnIiwgIl9yZXN1bHQkZWRpdCIsICJfcmVzdWx0JGVycm9yIiwgInJlc3VsdCIsICJqb2luIiwgImxvY2F0aW9uIiwgInJlcGxhY2UiLCAidXRpbCIsICJnZXRVcmwiLCAiY29kZSIsICJfeDUiLCAiX3g2IiwgIl94NyIsICJfeDgiLCAiJGRpYWxvZyIsICJzaG93RGlhbG9nIiwgImRpYWxvZyIsICJodG1sIiwgIl9pMyIsICJfT2JqZWN0JGVudHJpZXMiLCAiT2JqZWN0IiwgInZhbCIsICJfaTQiLCAiX09iamVjdCRlbnRyaWVzMiIsICIkIiwgIm1pbldpZHRoIiwgIm1pbkhlaWdodCIsICJjbG9zZSIsICJidXR0b25zIiwgImNsaWNrIiwgImNvbnQiLCAiY29uZmlybSIsICJnZXRCb2R5IiwgInRoZW4iLCAicnJkIiwgIndnQWN0aW9uIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgImVsZW1lbnQiLCAiYWZ0ZXIiXQp9Cg==
