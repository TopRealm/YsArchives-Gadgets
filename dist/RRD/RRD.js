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
    hideUsername: wgULS("编辑者用户名/IP地址", "編輯者用戶名/IP位址"),
    hideSummary: wgULS("编辑摘要", "編輯摘要"),
    hideReason: wgULS("理据：", "理據："),
    hideReasonRD1: wgULS("RD1：条目中明显侵犯著作权的内容", "RD1：條目中明顯侵犯著作權的內容"),
    hideReasonRD2: wgULS("RD2：严重侮辱、贬低或攻击性文本", "RD2：嚴重侮辱、貶低或攻擊性文本"),
    hideReasonRD3: wgULS("RD3：纯粹扰乱性内容", "純粹擾亂性內容"),
    hideReasonRD4: wgULS("RD4：明显违反法律法规或违背公序良俗的内容", "RD4：明顯違反法律法規或違背公序良俗的內容"),
    hideReasonRD5: wgULS("RD5：其他不宜公开的版本内容", "RD5：其他不宜公開的版本內容"),
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
    rrdArr[rrdArr.length] = "}}\n--~~".concat("~~");
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
    for (var _i = 0, _Object$entries = Object.entries(config.others); _i < _Object$entries.length; _i++) {
      const [id, value] = _Object$entries[_i];
      $body.find("#".concat(id)).val(value);
    }
    for (var _i2 = 0, _Object$entries2 = Object.entries(config.checkboxes); _i2 < _Object$entries2.length; _i2++) {
      const [id, value] = _Object$entries2[_i2];
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1JSRC9vcHRpb25zLmpzb24iLCAic3JjL1JSRC9jb21wb25lbnRzL1JlcG9ydEJ1dHRvbi50c3giLCAic3JjL1JSRC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1JSRC9tb2R1bGVzL2lzU3BlY2lhbExvZy50cyIsICJzcmMvUlJEL1JSRC50cyIsICJzcmMvUlJEL21vZHVsZXMvcnJkQ29uZmlnLnRzIiwgInNyYy9SUkQvY29tcG9uZW50cy9EaWFsb2dJbm5lci50c3giLCAic3JjL1JSRC9jb21wb25lbnRzL0RpYWxvZ0lubmVyLm1vZHVsZS5sZXNzIiwgInNyYy9SUkQvbW9kdWxlcy9sb2FkSWRzLnRzIiwgInNyYy9SUkQvbW9kdWxlcy9hcGkudHMiLCAic3JjL1JSRC9tb2R1bGVzL3N1Ym1pdC50cyIsICJzcmMvUlJEL21vZHVsZXMvc2hvd0RpYWxvZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcInJyZFBhZ2VcIjogXCLmnInlhb3moaPmoYjppoZfdGFsazrniYjmnKzliKDpmaTmj5DmiqVcIixcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9tb2R1bGVzL2kxOG4nO1xuaW1wb3J0IHtpc1NwZWNpYWxMb2d9IGZyb20gJy4uL21vZHVsZXMvaXNTcGVjaWFsTG9nJztcblxuaW50ZXJmYWNlIFByb3BzIHtcblx0b25DbGljazogKCkgPT4gdm9pZDtcbn1cblxuY29uc3QgUmVwb3J0QnV0dG9uID0gKHtvbkNsaWNrfTogUHJvcHMpID0+IChcblx0PGJ1dHRvblxuXHRcdHR5cGU9eydidXR0b24nfVxuXHRcdGNsYXNzTmFtZT17WydycmRfX3JlcG9ydCcsICdjZHgtYnV0dG9uJywgJ2NkeC1idXR0b24tLXdlaWdodC1wcmltYXJ5J119XG5cdFx0dGl0bGU9e2dldE1lc3NhZ2UoJ3JlcG9ydEJ1dHRvblRpdGxlJykgKyBPUFRJT05TLnJyZFBhZ2V9XG5cdFx0b25DbGljaz17b25DbGlja31cblx0PlxuXHRcdHtpc1NwZWNpYWxMb2coKSA/IGdldE1lc3NhZ2UoJ3JlcG9ydEJ1dHRvbkxvZ1RleHQnKSA6IGdldE1lc3NhZ2UoJ3JlcG9ydEJ1dHRvblRleHQnKX1cblx0PC9idXR0b24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBSZXBvcnRCdXR0b247XG4iLCAiY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRjb25zdCB7d2dVTFN9ID0gd2luZG93O1xuXHRyZXR1cm4ge1xuXHRcdGVkaXRTdW1tYXJ5OiB3Z1VMUyhcblx0XHRcdCdbW01lZGlhV2lraTpHYWRnZXQtUlJELmpzfOWNiuiHquWKqOaPkOaKpV1d5L+u6K6i54mI5pys5Yig6ZmkJyxcblx0XHRcdCdbW01lZGlhV2lraTpHYWRnZXQtUlJELmpzfOWNiuiHquWLleaPkOWgsV1d5L+u6KiC54mI5pys5Yiq6ZmkJ1xuXHRcdCksXG5cdFx0ZXJyTm9SZXZpc2lvblByb3ZpZGVkOiB3Z1VMUygn5oKo5rKh5pyJ6YCJ5oup6ZyA6ZqQ6JeP55qE54mI5pys77yBJywgJ+aCqOaykuaciemBuOaTh+mcgOmaseiXj+eahOeJiOacrO+8gScpLFxuXHRcdGVyck5vSXRlbVByb3ZpZGVkOiB3Z1VMUygn5oKo5rKh5pyJ6YCJ5oup6ZyA6ZqQ6JeP55qE6aG555uu77yBJywgJ+aCqOaykuaciemBuOaTh+mcgOmaseiXj+eahOmgheebru+8gScpLFxuXHRcdHdhcm5Ob1JlYXNvblByb3ZpZGVkOiB3Z1VMUygn5oKo5rKh5pyJ6L6T5YWl5Lu75L2V55CG55Sx77yB56Gu5a6a6KaB57un57ut5ZCX77yfJywgJ+aCqOaykuaciei8uOWFpeS7u+S9leeQhueUse+8geeiuuWumuimgee5vOe6jOWXju+8nycpLFxuXHRcdGhpZGVJdGVtczogd2dVTFMoJ+mcgOmakOiXj+eahOmhueebru+8micsICfpnIDpmrHol4/nmoTpoIXnm67vvJonKSxcblx0XHRoaWRlQ29udGVudDogd2dVTFMoJ+e8lui+keWGheWuuScsICfnt6jovK/lhaflrrknKSxcblx0XHRoaWRlTG9nOiB3Z1VMUygn5pel5b+X55uu5qCH5LiO5Y+C5pWwJywgJ+aXpeiqjOebruaomeiIh+WPg+aVuCcpLFxuXHRcdGhpZGVVc2VybmFtZTogd2dVTFMoJ+e8lui+keiAheeUqOaIt+WQjS9JUOWcsOWdgCcsICfnt6jovK/ogIXnlKjmiLblkI0vSVDkvY3lnYAnKSxcblx0XHRoaWRlU3VtbWFyeTogd2dVTFMoJ+e8lui+keaRmOimgScsICfnt6jovK/mkZjopoEnKSxcblx0XHRoaWRlUmVhc29uOiB3Z1VMUygn55CG5o2u77yaJywgJ+eQhuaTmu+8micpLFxuXHRcdGhpZGVSZWFzb25SRDE6IHdnVUxTKCdSRDHvvJrmnaHnm67kuK3mmI7mmL7kvrXniq/okZfkvZzmnYPnmoTlhoXlrrknLCAnUkQx77ya5qKd55uu5Lit5piO6aGv5L6154qv6JGX5L2c5qyK55qE5YWn5a65JyksXG5cdFx0aGlkZVJlYXNvblJEMjogd2dVTFMoJ1JEMu+8muS4pemHjeS+rui+seOAgei0rOS9juaIluaUu+WHu+aAp+aWh+acrCcsICdSRDLvvJrlmrTph43kvq7ovrHjgIHosrbkvY7miJbmlLvmk4rmgKfmlofmnKwnKSxcblx0XHRoaWRlUmVhc29uUkQzOiB3Z1VMUygnUkQz77ya57qv57K55omw5Lmx5oCn5YaF5a65JywgJ+e0lOeyueaTvuS6guaAp+WFp+WuuScpLFxuXHRcdGhpZGVSZWFzb25SRDQ6IHdnVUxTKCdSRDTvvJrmmI7mmL7ov53lj43ms5Xlvovms5Xop4TmiJbov53og4zlhazluo/oia/kv5fnmoTlhoXlrrknLCAnUkQ077ya5piO6aGv6YGV5Y+N5rOV5b6L5rOV6KaP5oiW6YGV6IOM5YWs5bqP6Imv5L+X55qE5YWn5a65JyksXG5cdFx0aGlkZVJlYXNvblJENTogd2dVTFMoJ1JENe+8muWFtuS7luS4jeWunOWFrOW8gOeahOeJiOacrOWGheWuuScsICdSRDXvvJrlhbbku5bkuI3lrpzlhazplovnmoTniYjmnKzlhaflrrknKSxcblx0XHRoaWRlUmVhc29uT3RoZXI6IHdnVUxTKCfku4Xkvb/nlKjkuIvmlrnnmoTpmYTliqDnkIbnlLEnLCAn5YOF5L2/55So5LiL5pa555qE6ZmE5Yqg55CG55SxJyksXG5cdFx0b3RoZXJSZWFzb25zOiB3Z1VMUygn6ZmE5Yqg55CG55Sx77yI5Y+v6YCJ77yM5LiN55So562+5ZCN77yJJywgJ+mZhOWKoOeQhueUse+8iOWPr+mBuO+8jOS4jeeUqOewveWQje+8iScpLFxuXHRcdGRpYWxvZ1RpdGxlOiB3Z1VMUygn5o+Q5oql5L+u6K6i54mI5pys5Yig6ZmkJywgJ+aPkOWgseS/ruiogueJiOacrOWIqumZpCcpLFxuXHRcdGRpYWxvZ0J1dHRvblN1Ym1pdDogd2dVTFMoJ+aPkOaKpScsICfmj5DloLEnKSxcblx0XHRkaWFsb2dCdXR0b25DYW5jZWw6IHdnVUxTKCflj5bmtognLCAn5Y+W5raIJyksXG5cdFx0cmVwb3J0QnV0dG9uVGl0bGU6IHdnVUxTKCflsIbpgInkuK3nmoTniYjmnKzmj5DmiqXliLAnLCAn5bCH6YG45Lit55qE54mI5pys5o+Q5aCx5YiwJyksXG5cdFx0cmVwb3J0QnV0dG9uVGV4dDogd2dVTFMoJ+ivt+axguWIoOmZpOiiq+mAieeJiOacrCcsICfoq4vmsYLliKrpmaTooqvpgbjniYjmnKwnKSxcblx0XHRyZXBvcnRCdXR0b25Mb2dUZXh0OiB3Z1VMUygn6K+35rGC5Yig6Zmk6KKr6YCJ5pel5b+XJywgJ+iri+axguWIqumZpOiiq+mBuOaXpeiqjCcpLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJjb25zdCBpc1NwZWNpYWxMb2cgPSAoKSA9PiB7XG5cdGNvbnN0IHt3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdHJldHVybiB3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSA9PT0gJ0xvZyc7XG59O1xuXG5leHBvcnQge2lzU3BlY2lhbExvZ307XG4iLCAiaW1wb3J0IFJlcG9ydEJ1dHRvbiBmcm9tICcuL2NvbXBvbmVudHMvUmVwb3J0QnV0dG9uJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7c2hvd0RpYWxvZ30gZnJvbSAnLi9tb2R1bGVzL3Nob3dEaWFsb2cnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIHJyZCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0Y29uc3Qge3dnQWN0aW9uLCB3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHdnQWN0aW9uID09PSAnaGlzdG9yeScgfHwgd2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUgPT09ICdMb2cnKSB7XG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRib2R5LmZpbmQoXG5cdFx0XHRbXG5cdFx0XHRcdCcuaGlzdG9yeXN1Ym1pdC5tdy1oaXN0b3J5LWNvbXBhcmVzZWxlY3RlZHZlcnNpb25zLWJ1dHRvbicsXG5cdFx0XHRcdCcuZWRpdGNoYW5nZXRhZ3MtbG9nLXN1Ym1pdC5tdy1sb2ctZWRpdGNoYW5nZXRhZ3MtYnV0dG9uJyxcblx0XHRcdF0uam9pbignLCcpXG5cdFx0KSkge1xuXHRcdFx0ZWxlbWVudC5hZnRlcihcblx0XHRcdFx0UmVwb3J0QnV0dG9uKHtcblx0XHRcdFx0XHRvbkNsaWNrOiAoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRzaG93RGlhbG9nKCRib2R5KTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHR9XG5cdH1cbn0pO1xuIiwgImltcG9ydCB0eXBlIHtScmRDb25maWd9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBjb25maWc6IFJyZENvbmZpZyA9IHtcblx0Y2hlY2tib3hlczoge30sXG5cdG90aGVyczoge30sXG59O1xuXG5jb25zdCB1cGRhdGVDb25maWcgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IGNoZWNrQm94ZXM6IFJyZENvbmZpZ1snY2hlY2tib3hlcyddID0ge307XG5cblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJyNycmRfX2hpZGUtY29udGVudCcpPy5jaGVja2VkKSB7XG5cdFx0Y2hlY2tCb3hlcy5ycmRIaWRlQ29udGVudCA9IHRydWU7XG5cdH1cblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJyNycmRfX2hpZGUtdXNlcm5hbWUnKT8uY2hlY2tlZCkge1xuXHRcdGNoZWNrQm94ZXMucnJkSGlkZVVzZXJuYW1lID0gdHJ1ZTtcblx0fVxuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PignI3JyZF9faGlkZS1zdW1tYXJ5Jyk/LmNoZWNrZWQpIHtcblx0XHRjaGVja0JveGVzLnJyZEhpZGVTdW1tYXJ5ID0gdHJ1ZTtcblx0fVxuXG5cdGNvbmZpZy5jaGVja2JveGVzID0gY2hlY2tCb3hlcztcblxuXHRjb25zdCBvdGhlcnM6IFJyZENvbmZpZ1snb3RoZXJzJ10gPSB7fTtcblxuXHRjb25zdCByZWFzb25JbnB1dDogSFRNTElucHV0RWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KCcjcnJkX19yZWFzb24nKTtcblx0Y29uc3Qgb3RoZXJSZWFzb25zSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PignI3JyZF9fb3RoZXItcmVhc29ucycpO1xuXHRpZiAocmVhc29uSW5wdXQpIHtcblx0XHRvdGhlcnMucnJkUmVhc29uID0gcmVhc29uSW5wdXQudmFsdWU7XG5cdH1cblx0aWYgKG90aGVyUmVhc29uc0lucHV0KSB7XG5cdFx0b3RoZXJzLnJyZE90aGVyUmVhc29ucyA9IG90aGVyUmVhc29uc0lucHV0LnZhbHVlO1xuXHR9XG5cblx0Y29uZmlnLm90aGVycyA9IG90aGVycztcbn07XG5cbmV4cG9ydCB7Y29uZmlnLCB1cGRhdGVDb25maWd9O1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5pbXBvcnQge2NvbnRlbnRXcmFwcGVyfSBmcm9tICcuL0RpYWxvZ0lubmVyLm1vZHVsZS5sZXNzJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vbW9kdWxlcy9pMThuJztcbmltcG9ydCB7aXNTcGVjaWFsTG9nfSBmcm9tICcuLi9tb2R1bGVzL2lzU3BlY2lhbExvZyc7XG5cbmNvbnN0IERpYWxvZ0lubmVyID0gKCkgPT4gKFxuXHQ8ZGl2IGlkPVwicnJkX19jb25maWdcIj5cblx0XHR7Z2V0TWVzc2FnZSgnaGlkZUl0ZW1zJyl9XG5cdFx0PGJyIC8+XG5cdFx0PGRpdiBjbGFzc05hbWU9e2NvbnRlbnRXcmFwcGVyfT5cblx0XHRcdDxpbnB1dCBuYW1lPVwiY29udGVudFwiIGlkPVwicnJkX19oaWRlLWNvbnRlbnRcIiB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cImNvbnRlbnRcIiBjaGVja2VkIC8+XG5cdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInJyZF9faGlkZS1jb250ZW50XCIgaWQ9XCJycmQtY29udGVudFwiPlxuXHRcdFx0XHR7aXNTcGVjaWFsTG9nKCkgPyBnZXRNZXNzYWdlKCdoaWRlTG9nJykgOiBnZXRNZXNzYWdlKCdoaWRlQ29udGVudCcpfVxuXHRcdFx0PC9sYWJlbD5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y29udGVudFdyYXBwZXJ9PlxuXHRcdFx0PGlucHV0IG5hbWU9XCJ1c2VybmFtZVwiIGlkPVwicnJkX19oaWRlLXVzZXJuYW1lXCIgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJ1c2VybmFtZVwiIC8+XG5cdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInJyZF9faGlkZS11c2VybmFtZVwiIGlkPVwicnJkLXVzZXJuYW1lXCI+XG5cdFx0XHRcdHtnZXRNZXNzYWdlKCdoaWRlVXNlcm5hbWUnKX1cblx0XHRcdDwvbGFiZWw+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzc05hbWU9e2NvbnRlbnRXcmFwcGVyfT5cblx0XHRcdDxpbnB1dCBuYW1lPVwic3VtbWFyeVwiIGlkPVwicnJkX19oaWRlLXN1bW1hcnlcIiB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cInN1bW1hcnlcIiAvPlxuXHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJycmRfX2hpZGUtc3VtbWFyeVwiIGlkPVwicnJkLXN1bW1hcnlcIj5cblx0XHRcdFx0e2dldE1lc3NhZ2UoJ2hpZGVTdW1tYXJ5Jyl9XG5cdFx0XHQ8L2xhYmVsPlxuXHRcdDwvZGl2PlxuXHRcdDxiciAvPlxuXHRcdDxiciAvPlxuXHRcdHtnZXRNZXNzYWdlKCdoaWRlUmVhc29uJyl9XG5cdFx0PGJyIC8+XG5cdFx0PHNlbGVjdCBuYW1lPVwicnJkX19yZWFzb25cIiBpZD1cInJyZF9fcmVhc29uXCI+XG5cdFx0XHQ8b3B0aW9uIHZhbHVlPXtnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQxJyl9PntnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQxJyl9PC9vcHRpb24+XG5cdFx0XHQ8b3B0aW9uIHZhbHVlPXtnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQyJyl9PntnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQyJyl9PC9vcHRpb24+XG5cdFx0XHQ8b3B0aW9uIHZhbHVlPXtnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQzJyl9PntnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQzJyl9PC9vcHRpb24+XG5cdFx0XHQ8b3B0aW9uIHZhbHVlPXtnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQ0Jyl9PntnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQ0Jyl9PC9vcHRpb24+XG5cdFx0XHQ8b3B0aW9uIHZhbHVlPXtnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQ1Jyl9PntnZXRNZXNzYWdlKCdoaWRlUmVhc29uUkQ1Jyl9PC9vcHRpb24+XG5cdFx0XHQ8b3B0aW9uIHZhbHVlPVwiXCI+e2dldE1lc3NhZ2UoJ2hpZGVSZWFzb25PdGhlcicpfTwvb3B0aW9uPlxuXHRcdDwvc2VsZWN0PlxuXHRcdDxiciAvPlxuXHRcdDxiciAvPlxuXHRcdHtnZXRNZXNzYWdlKCdvdGhlclJlYXNvbnMnKX1cblx0XHQ8YnIgLz5cblx0XHQ8dGV4dGFyZWEgbmFtZT1cIm90aGVyUmVhc29uc1wiIGlkPVwicnJkX19vdGhlci1yZWFzb25zXCIgcm93cz17NH0+PC90ZXh0YXJlYT5cblx0PC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBEaWFsb2dJbm5lcjtcbiIsICJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL1JSRC9jb21wb25lbnRzL0RpYWxvZ0lubmVyLm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3QgY29udGVudFdyYXBwZXIgPSBcIkRpYWxvZ0lubmVyLW1vZHVsZV9fY29udGVudFdyYXBwZXJfNlRkVFZHX180MTAwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJjb250ZW50V3JhcHBlclwiOiBjb250ZW50V3JhcHBlclxufTtcbiAgICAgICIsICJjb25zdCBsb2FkSWRzID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHN0cmluZ1tdID0+IHtcblx0Y29uc3QgaWRzOiBzdHJpbmdbXSA9IFtdO1xuXG5cdGNvbnN0IGJveGVzOiBKUXVlcnk8SFRNTElucHV0RWxlbWVudD4gPSAkYm9keS5maW5kKCdpbnB1dCcpO1xuXHRmb3IgKGNvbnN0IGJveCBvZiBib3hlcykge1xuXHRcdGNvbnN0IHtjaGVja2VkLCBuYW1lLCB0eXBlfSA9IGJveDtcblxuXHRcdGlmICh0eXBlICE9PSAnY2hlY2tib3gnIHx8ICFjaGVja2VkKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBpZFJlZ2V4OiBSZWdFeHAgPSAvaWRzXFxbKFxcZCspXS87XG5cdFx0Y29uc3QgaWRBcnJheTogUmVnRXhwRXhlY0FycmF5IHwgbnVsbCA9IGlkUmVnZXguZXhlYyhuYW1lKTtcblx0XHRpZiAoaWRBcnJheT8uWzFdID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdFssIGlkc1tpZHMubGVuZ3RoXV0gPSBpZEFycmF5O1xuXHR9XG5cblx0cmV0dXJuIGlkcztcbn07XG5cbmV4cG9ydCB7bG9hZElkc307XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBSUkQvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHt1bmlxdWVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgcXVlcnlSZXZpc2lvbnMgPSBhc3luYyAodGl0bGVzOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zID0ge1xuXHRcdHRpdGxlcyxcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdHJ2cHJvcDogJ2NvbnRlbnQnLFxuXHRcdHJ2c2xvdHM6ICdtYWluJyxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgZWRpdCA9IGFzeW5jICh0aXRsZTogc3RyaW5nLCB0ZXh0OiBzdHJpbmcsIHN1bW1hcnk/OiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlFZGl0UGFnZVBhcmFtcyA9IHtcblx0XHR0aXRsZSxcblx0XHR0ZXh0LFxuXHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0fTtcblx0aWYgKHN1bW1hcnkpIHtcblx0XHRwYXJhbXMuc3VtbWFyeSA9IHN1bW1hcnk7XG5cdH1cblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdFdpdGhFZGl0VG9rZW4ocGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBzdWJtaXQgPSBhc3luYyAoaWRzOiBzdHJpbmdbXSwgdG9IaWRlOiBzdHJpbmcsIHJlYXNvbjogc3RyaW5nLCBvdGhlclJlYXNvbnM6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y29uc3QgcnJkQXJyOiBzdHJpbmdbXSA9IFtcblx0XHQne3tSZXZkZWwnLFxuXHRcdCd8c3RhdHVzID0gJyxcblx0XHRgfGFydGljbGUgPSAke3dnUGFnZU5hbWV9YCxcblx0XHRgfHNldCA9ICR7dG9IaWRlfWAsXG5cdFx0YHxyZWFzb24gPSAke3JlYXNvbn0ke290aGVyUmVhc29uc31gLFxuXHRdO1xuXG5cdGZvciAoY29uc3QgW2luZGV4LCBpZF0gb2YgdW5pcXVlQXJyYXkoaWRzKS5lbnRyaWVzKCkpIHtcblx0XHQvLyBSZXBsYWNlIFNldCB3aXRoIHVuaXF1ZUFycmF5LCBhdm9pZGluZyBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdFx0cnJkQXJyW3JyZEFyci5sZW5ndGhdID0gYHxpZCR7aW5kZXggKyAxfSA9ICR7aWR9YDtcblx0fVxuXHRycmRBcnJbcnJkQXJyLmxlbmd0aF0gPSAnfX1cXG4tLX5+Jy5jb25jYXQoJ35+Jyk7XG5cblx0dHJ5IHtcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IHF1ZXJ5UmV2aXNpb25zKE9QVElPTlMucnJkUGFnZSk7XG5cblx0XHRsZXQgY29udGVudDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRcdGlmIChyZXNwb25zZVsncXVlcnknXT8ucGFnZXMpIHtcblx0XHRcdGNvbnRlbnQgPSByZXNwb25zZVsncXVlcnknXS5wYWdlc1swXS5yZXZpc2lvbnNbMF0uc2xvdHMubWFpbi5jb250ZW50IGFzIHN0cmluZztcblx0XHR9XG5cblx0XHRpZiAoY29udGVudCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR2b2lkIG13Lm5vdGlmeShgRXJyb3Igd2hlbiBsb2FkaW5nIHBhZ2UgJHtPUFRJT05TLnJyZFBhZ2V9OiBtaXNzaW5nYCwge1xuXHRcdFx0XHR0YWc6ICdSUkQnLFxuXHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgZWRpdChPUFRJT05TLnJyZFBhZ2UsIGAke2NvbnRlbnR9XFxuXFxuJHtycmRBcnIuam9pbignXFxuJyl9YCwgZ2V0TWVzc2FnZSgnZWRpdFN1bW1hcnknKSk7XG5cblx0XHRcdGlmIChyZXN1bHRbJ2VkaXQnXT8ucmVzdWx0ID09PSAnU3VjY2VzcycpIHtcblx0XHRcdFx0bG9jYXRpb24ucmVwbGFjZShtdy51dGlsLmdldFVybChPUFRJT05TLnJyZFBhZ2UpKTtcblx0XHRcdH0gZWxzZSBpZiAocmVzdWx0WydlcnJvciddPy5jb2RlKSB7XG5cdFx0XHRcdHZvaWQgbXcubm90aWZ5KGBTb21lIGVycm9ycyBvY2N1cmVkIHdoaWxlIHNhdmluZyBwYWdlOiAke3Jlc3VsdFsnZXJyb3InXS5jb2RlfWAsIHtcblx0XHRcdFx0XHR0YWc6ICdSUkQnLFxuXHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoJ1NvbWUgZXJyb3JzIG9jY3VyZWQgd2hpbGUgc2F2aW5nIHBhZ2U6IHVua25vd24nLCB7XG5cdFx0XHRcdFx0dGFnOiAnUlJEJyxcblx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdHZvaWQgbXcubm90aWZ5KGBFcnJvciB3aGVuIGVkaXRpbmcgcGFnZSAke09QVElPTlMucnJkUGFnZX1gLCB7dGFnOiAnUlJEJywgdHlwZTogJ2Vycm9yJ30pO1xuXHRcdH1cblx0fSBjYXRjaCB7XG5cdFx0dm9pZCBtdy5ub3RpZnkoYEVycm9yIHdoZW4gbG9hZGluZyBwYWdlICR7T1BUSU9OUy5ycmRQYWdlfWAsIHt0YWc6ICdSUkQnLCB0eXBlOiAnZXJyb3InfSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7c3VibWl0fTtcbiIsICJpbXBvcnQge2NvbmZpZywgdXBkYXRlQ29uZmlnfSBmcm9tICcuL3JyZENvbmZpZyc7XG5pbXBvcnQgRGlhbG9nSW5uZXIgZnJvbSAnLi4vY29tcG9uZW50cy9EaWFsb2dJbm5lcic7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHtpc1NwZWNpYWxMb2d9IGZyb20gJy4vaXNTcGVjaWFsTG9nJztcbmltcG9ydCB7bG9hZElkc30gZnJvbSAnLi9sb2FkSWRzJztcbmltcG9ydCB7c3VibWl0fSBmcm9tICcuL3N1Ym1pdCc7XG5cbmxldCAkZGlhbG9nOiBKUXVlcnkgfCB1bmRlZmluZWQ7XG5cbmNvbnN0IHNob3dEaWFsb2cgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0IGlkczogc3RyaW5nW10gPSBsb2FkSWRzKCRib2R5KTtcblx0aWYgKCFpZHMubGVuZ3RoKSB7XG5cdFx0dm9pZCBtdy5ub3RpZnkoZ2V0TWVzc2FnZSgnZXJyTm9SZXZpc2lvblByb3ZpZGVkJyksIHtcblx0XHRcdHRhZzogJ1JSRCcsXG5cdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgZGlhbG9nOiBSZWFjdC5SZWFjdEVsZW1lbnQgPSBEaWFsb2dJbm5lcigpO1xuXHRpZiAoJGRpYWxvZykge1xuXHRcdCRkaWFsb2cuaHRtbChkaWFsb2cpLmRpYWxvZygnb3BlbicpO1xuXG5cdFx0Zm9yIChjb25zdCBbaWQsIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhjb25maWcub3RoZXJzKSkge1xuXHRcdFx0JGJvZHkuZmluZChgIyR7aWR9YCkudmFsKHZhbHVlIGFzIHN0cmluZyk7XG5cdFx0fVxuXHRcdGZvciAoY29uc3QgW2lkLCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoY29uZmlnLmNoZWNrYm94ZXMpKSB7XG5cdFx0XHRpZiAodmFsdWUgPT09IHRydWUpIHtcblx0XHRcdFx0JGJvZHkuZmluZChgIyR7aWR9YCkucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybjtcblx0fVxuXG5cdCRkaWFsb2cgPSAkKGRpYWxvZykuZGlhbG9nKHtcblx0XHR0aXRsZTogZ2V0TWVzc2FnZSgnZGlhbG9nVGl0bGUnKSxcblx0XHRtaW5XaWR0aDogNTE1LFxuXHRcdG1pbkhlaWdodDogMTUwLFxuXHRcdGNsb3NlOiB1cGRhdGVDb25maWcsXG5cdFx0YnV0dG9uczogW1xuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdkaWFsb2dCdXR0b25TdWJtaXQnKSxcblx0XHRcdFx0Y2xpY2soKTogdm9pZCB7XG5cdFx0XHRcdFx0JCh0aGlzKS5kaWFsb2coJ2Nsb3NlJyk7XG5cblx0XHRcdFx0XHRjb25zdCB7XG5cdFx0XHRcdFx0XHRjaGVja2JveGVzOiB7cnJkSGlkZUNvbnRlbnQsIHJyZEhpZGVVc2VybmFtZSwgcnJkSGlkZVN1bW1hcnl9LFxuXHRcdFx0XHRcdFx0b3RoZXJzOiB7cnJkUmVhc29ufSxcblx0XHRcdFx0XHR9ID0gY29uZmlnO1xuXG5cdFx0XHRcdFx0bGV0IHtycmRPdGhlclJlYXNvbnN9ID0gY29uZmlnLm90aGVycztcblx0XHRcdFx0XHRpZiAocnJkT3RoZXJSZWFzb25zICYmIHJyZFJlYXNvbikge1xuXHRcdFx0XHRcdFx0cnJkT3RoZXJSZWFzb25zID0gYO+8jCR7cnJkT3RoZXJSZWFzb25zfWA7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29uc3QgdG9IaWRlOiBzdHJpbmdbXSA9IFtdO1xuXHRcdFx0XHRcdGlmIChycmRIaWRlQ29udGVudCkge1xuXHRcdFx0XHRcdFx0dG9IaWRlW3RvSGlkZS5sZW5ndGhdID0gaXNTcGVjaWFsTG9nKCkgPyBnZXRNZXNzYWdlKCdoaWRlTG9nJykgOiBnZXRNZXNzYWdlKCdoaWRlQ29udGVudCcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAocnJkSGlkZVVzZXJuYW1lKSB7XG5cdFx0XHRcdFx0XHR0b0hpZGVbdG9IaWRlLmxlbmd0aF0gPSBnZXRNZXNzYWdlKCdoaWRlVXNlcm5hbWUnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHJyZEhpZGVTdW1tYXJ5KSB7XG5cdFx0XHRcdFx0XHR0b0hpZGVbdG9IaWRlLmxlbmd0aF0gPSBnZXRNZXNzYWdlKCdoaWRlU3VtbWFyeScpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICghdG9IaWRlLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoZ2V0TWVzc2FnZSgnZXJyTm9JdGVtUHJvdmlkZWQnKSwge1xuXHRcdFx0XHRcdFx0XHR0YWc6ICdSUkQnLFxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRsZXQgY29udDogYm9vbGVhbiA9IHRydWU7XG5cdFx0XHRcdFx0aWYgKCFycmRSZWFzb24gJiYgIXJyZE90aGVyUmVhc29ucykge1xuXHRcdFx0XHRcdFx0Y29udCA9IGNvbmZpcm0oZ2V0TWVzc2FnZSgnd2Fybk5vUmVhc29uUHJvdmlkZWQnKSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGNvbnQpIHtcblx0XHRcdFx0XHRcdHZvaWQgc3VibWl0KGlkcywgdG9IaWRlLmpvaW4oJ+OAgScpLCBycmRSZWFzb24gPz8gJycsIHJyZE90aGVyUmVhc29ucyA/PyAnJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnZGlhbG9nQnV0dG9uQ2FuY2VsJyksXG5cdFx0XHRcdGNsaWNrKCk6IHZvaWQge1xuXHRcdFx0XHRcdCQodGhpcykuZGlhbG9nKCdjbG9zZScpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRdLFxuXHR9KTtcbn07XG5cbmV4cG9ydCB7c2hvd0RpYWxvZ307XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxVQUFXO0FBQ1gsSUFBQUMsVUFBVzs7QUNEWixJQUFBQyxvQkFBa0JDLFFBQUFDLFFBQUEsZ0JBQUEsR0FBQSxDQUFBOztBQ0RsQixJQUFNQyxrQkFBa0JBLE1BQU07QUFDN0IsUUFBTTtJQUFDQztFQUFLLElBQUlDO0FBQ2hCLFNBQU87SUFDTkMsYUFBYUYsTUFDWiwyQ0FDQSx5Q0FDRDtJ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RjtNQUNEO0lBQUEsU0FBQWUsS0FBQTtBQUFBcUYsaUJBQUFwRixFQUFBRCxHQUFBO0lBQUEsVUFBQTtBQUFBcUYsaUJBQUFuRixFQUFBO0lBQUE7RUFDRDtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbInJyZFBhZ2UiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIndnVUxTIiwgIndpbmRvdyIsICJlZGl0U3VtbWFyeSIsICJlcnJOb1JldmlzaW9uUHJvdmlkZWQiLCAiZXJyTm9JdGVtUHJvdmlkZWQiLCAid2Fybk5vUmVhc29uUHJvdmlkZWQiLCAiaGlkZUl0ZW1zIiwgImhpZGVDb250ZW50IiwgImhpZGVMb2ciLCAiaGlkZVVzZXJuYW1lIiwgImhpZGVTdW1tYXJ5IiwgImhpZGVSZWFzb24iLCAiaGlkZVJlYXNvblJEMSIsICJoaWRlUmVhc29uUkQyIiwgImhpZGVSZWFzb25SRDMiLCAiaGlkZVJlYXNvblJENCIsICJoaWRlUmVhc29uUkQ1IiwgImhpZGVSZWFzb25PdGhlciIsICJvdGhlclJlYXNvbnMiLCAiZGlhbG9nVGl0bGUiLCAiZGlhbG9nQnV0dG9uU3VibWl0IiwgImRpYWxvZ0J1dHRvbkNhbmNlbCIsICJyZXBvcnRCdXR0b25UaXRsZSIsICJyZXBvcnRCdXR0b25UZXh0IiwgInJlcG9ydEJ1dHRvbkxvZ1RleHQiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImlzU3BlY2lhbExvZyIsICJ3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIlJlcG9ydEJ1dHRvbiIsICJvbkNsaWNrIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJ0eXBlIiwgImNsYXNzTmFtZSIsICJ0aXRsZSIsICJSZXBvcnRCdXR0b25fZGVmYXVsdCIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAiY2hlY2tib3hlcyIsICJvdGhlcnMiLCAidXBkYXRlQ29uZmlnIiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdCIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QyIiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdDMiLCAiY2hlY2tCb3hlcyIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgImNoZWNrZWQiLCAicnJkSGlkZUNvbnRlbnQiLCAicnJkSGlkZVVzZXJuYW1lIiwgInJyZEhpZGVTdW1tYXJ5IiwgInJlYXNvbklucHV0IiwgIm90aGVyUmVhc29uc0lucHV0IiwgInJyZFJlYXNvbiIsICJ2YWx1ZSIsICJycmRPdGhlclJlYXNvbnMiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImNvbnRlbnRXcmFwcGVyIiwgIkRpYWxvZ0lubmVyIiwgImlkIiwgIm5hbWUiLCAiaHRtbEZvciIsICJyb3dzIiwgIkRpYWxvZ0lubmVyX2RlZmF1bHQiLCAibG9hZElkcyIsICIkYm9keSIsICJpZHMiLCAiYm94ZXMiLCAiZmluZCIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJib3giLCAiaWRSZWdleCIsICJpZEFycmF5IiwgImV4ZWMiLCAibGVuZ3RoIiwgImVyciIsICJlIiwgImYiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJxdWVyeVJldmlzaW9ucyIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInRpdGxlcyIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAicnZwcm9wIiwgInJ2c2xvdHMiLCAicmVzcG9uc2UiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImVkaXQiLCAiX3JlZjIiLCAidGV4dCIsICJzdW1tYXJ5IiwgInBvc3RXaXRoRWRpdFRva2VuIiwgIl94MiIsICJfeDMiLCAiX3g0IiwgInN1Ym1pdCIsICJfcmVmMyIsICJ0b0hpZGUiLCAicmVhc29uIiwgIndnUGFnZU5hbWUiLCAicnJkQXJyIiwgIl9pdGVyYXRvcjMiLCAidW5pcXVlQXJyYXkiLCAiZW50cmllcyIsICJfc3RlcDMiLCAiaW5kZXgiLCAiX3Jlc3BvbnNlJHF1ZXJ5IiwgImNvbnRlbnQiLCAicGFnZXMiLCAicmV2aXNpb25zIiwgInNsb3RzIiwgIm1haW4iLCAibm90aWZ5IiwgInRhZyIsICJfcmVzdWx0JGVkaXQiLCAiX3Jlc3VsdCRlcnJvciIsICJyZXN1bHQiLCAiam9pbiIsICJsb2NhdGlvbiIsICJyZXBsYWNlIiwgInV0aWwiLCAiZ2V0VXJsIiwgImNvZGUiLCAiX3g1IiwgIl94NiIsICJfeDciLCAiX3g4IiwgIiRkaWFsb2ciLCAic2hvd0RpYWxvZyIsICJkaWFsb2ciLCAiaHRtbCIsICJfaSIsICJfT2JqZWN0JGVudHJpZXMiLCAiT2JqZWN0IiwgInZhbCIsICJfaTIiLCAiX09iamVjdCRlbnRyaWVzMiIsICIkIiwgIm1pbldpZHRoIiwgIm1pbkhlaWdodCIsICJjbG9zZSIsICJidXR0b25zIiwgImNsaWNrIiwgImNvbnQiLCAiY29uZmlybSIsICJnZXRCb2R5IiwgInRoZW4iLCAicnJkIiwgIndnQWN0aW9uIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgImVsZW1lbnQiLCAiYWZ0ZXIiXQp9Cg==
