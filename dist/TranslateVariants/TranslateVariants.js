/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/User:Xiplus/js/TranslateVariants}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/TranslateVariants}
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

// dist/TranslateVariants/TranslateVariants.js
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
//! src/TranslateVariants/TranslateVariants.ts
var import_ext_gadget3 = require("ext.gadget.Util");
//! src/TranslateVariants/options.json
var contentID = "TranslateVariants-content";
var translateVariantsSummary = "自动转换变体自[[$1]]（[[MediaWiki:Gadget-TranslateVariants.js|TranslateVariants]]）";
var version = "2.0";
//! src/TranslateVariants/TranslateVariants.module.less
var noChanges = "TranslateVariants-module__noChanges_Yvm-lW__4100";
var publishChanges = "TranslateVariants-module__publishChanges_Yvm-lW__4100";
var submitAll = "TranslateVariants-module__submitAll_Yvm-lW__4100";
var warning = "TranslateVariants-module__warning_Yvm-lW__4100";
//! src/TranslateVariants/modules/translateVariants.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.JSX"), 1);
//! src/TranslateVariants/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("TranslateVariants/".concat(version));
//! src/TranslateVariants/modules/translateVariants.tsx
var langs = ["zh", "zh-hans", "zh-cn", "zh-my", "zh-sg", "zh-hant", "zh-hk", "zh-mo", "zh-tw"];
var nameOfLangs = {
  zh: "原始",
  "zh-hans": "简体",
  "zh-cn": "中国大陆简体",
  "zh-my": "马来西亚简体",
  "zh-sg": "新加坡简体",
  "zh-hant": "繁體",
  "zh-hk": "中國香港繁體",
  "zh-mo": "中國澳門繁體",
  "zh-tw": "中國臺灣繁體"
};
var translateVariants = (wgPageName) => {
  var _prompt;
  const summary = translateVariantsSummary.replace(/\$1/g, wgPageName);
  const $wrapper = $(/* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
    id: "TranslateVariants"
  })).prependTo("#bodyContent");
  const $submitAll = $(/* @__PURE__ */ import_ext_gadget2.default.createElement("button", {
    className: ["cdx-button", "cdx-button--action-progressive", "cdx-button--weight-primary"]
  }, window.wgULS("发布所有更改", "發佈所有變更")));
  $submitAll.on("click", () => {
    const $buttons = $wrapper.find(".".concat(publishChanges));
    if (!$buttons.length) {
      void mw.notify(window.wgULS("没有任何可以发布的更改", "沒有任何變更可發佈"), {
        tag: "TranslateVariants",
        type: "error"
      });
      return;
    }
    if (!confirm(window.wgULS("发布$1个更改？", "發佈$1個變更？").replace("$1", "".concat($buttons.length)))) {
      void mw.notify(window.wgULS("已取消发布", "已取消發佈"), {
        tag: "TranslateVariants",
        type: "warn"
      });
      return;
    }
    var _iterator2 = _createForOfIteratorHelper($buttons), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        const button = _step2.value;
        $(button).trigger("click");
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  });
  $wrapper.append($(/* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
    className: submitAll
  })).append($submitAll), /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
    className: warning
  }, window.wgULS("提醒：TranslateVariants工具使用IT及MediaWiki转换组进行自动转换，请确认转换结果是否正确！", "提醒：TranslateVariants工具使用IT及MediaWiki轉換組進行自動轉換，請確認轉換結果是否正確！")));
  const defaultLangs = [...langs];
  let runLangs = (_prompt = prompt(window.wgULS("转换以下语言（以逗号隔开）：", "轉換以下語言（以逗號隔開）："), defaultLangs.join(","))) === null || _prompt === void 0 ? void 0 : _prompt.split(",");
  if (runLangs === null) {
    runLangs = defaultLangs;
  }
  const langQueue = runLangs.map((lang) => lang.trim()).filter((lang) => langs.includes(lang));
  const process = (pageContent) => {
    if (!langQueue.length) {
      return;
    }
    const lang = langQueue.shift();
    const $diffTable = $(/* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
      id: "TranslateVariants-diff-".concat(lang)
    }));
    $wrapper.append($diffTable, /* @__PURE__ */ import_ext_gadget2.default.createElement("hr", null));
    const basePageName = wgPageName.replace(/\/zh$/, "");
    const targetTitle = lang === "zh" ? basePageName : "".concat(basePageName, "/").concat(lang);
    let newPageContent = "";
    void api.parse('{{NoteTA|G1=IT|G2=MediaWiki}}<div id="'.concat(contentID, '">').concat(pageContent, "</div>"), {
      action: "parse",
      uselang: lang
    }).then((content) => {
      newPageContent = $(/* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
        innerHTML: content
      })).find("#".concat(contentID)).text();
      const queryDiffParams = {
        action: "query",
        format: "json",
        formatversion: "2",
        titles: targetTitle,
        prop: "revisions",
        rvdifftotext: newPageContent
      };
      return api.get(queryDiffParams);
    }, (error) => {
      void mw.notify(window.wgULS("解析$1时发生错误：", "解析$1時發生錯誤：").replace("$1", lang) + error, {
        tag: "TranslateVariants",
        type: "error"
      });
      return null;
    }).then((data) => {
      if (data === null) {
        return;
      }
      const $tool = $(/* @__PURE__ */ import_ext_gadget2.default.createElement("div", null, /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
        href: mw.util.getUrl(targetTitle)
      }, lang, "（", nameOfLangs[lang], "）"), "（", /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
        href: mw.util.getUrl(targetTitle, {
          action: "edit"
        })
      }, window.wgULS("编", "編")), "）"));
      $diffTable.append($tool);
      const [page] = data["query"].pages;
      if (page.missing) {
        const $submit = $(/* @__PURE__ */ import_ext_gadget2.default.createElement("button", {
          className: [publishChanges, "cdx-button"]
        }, window.wgULS("发布页面", "發佈頁面")));
        $submit.on("click", () => {
          $submit.remove();
          api.create(targetTitle, {
            summary
          }, newPageContent).then(() => {
            void mw.notify(window.wgULS("已编辑 ", "已編輯 ") + targetTitle, {
              tag: "TranslateVariants",
              type: "success"
            });
          }, (error) => {
            void mw.notify(window.wgULS("编辑", "編輯 ") + targetTitle + window.wgULS(" 发生错误：", " 發生錯誤：") + error, {
              tag: "TranslateVariants",
              type: "error"
            });
          });
        });
        $tool.append($submit);
        $diffTable.append(/* @__PURE__ */ import_ext_gadget2.default.createElement("pre", {
          innerHTML: newPageContent.replace(/[&<>]/gim, (string) => "&#".concat(string.codePointAt(0), ";"))
        }));
        return;
      }
      const diff = page.revisions[0].diff.body;
      if (diff === "") {
        $tool.append(/* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
          className: noChanges
        }, window.wgULS("无更改", "無變更")));
      } else {
        const $submit = $(/* @__PURE__ */ import_ext_gadget2.default.createElement("button", {
          className: [publishChanges, "cdx-button"]
        }, window.wgULS("发布更改", "發佈變更")));
        $submit.on("click", () => {
          $submit.remove();
          api.edit(targetTitle, () => ({
            summary,
            text: newPageContent,
            nocreate: false
          })).then(() => {
            void mw.notify(window.wgULS("已编辑", "已編輯 ") + targetTitle, {
              tag: "TranslateVariants",
              type: "success"
            });
          }, (error) => {
            void mw.notify(window.wgULS("编辑$1发生错误：", "編輯$1發生錯誤：").replace("$1", targetTitle) + error, {
              tag: "TranslateVariants",
              type: "error"
            });
          });
        });
        $tool.append($submit);
        $diffTable.append($(/* @__PURE__ */ import_ext_gadget2.default.createElement("table", {
          className: "diff",
          innerHTML: diff
        })).prepend(/* @__PURE__ */ import_ext_gadget2.default.createElement("colgroup", null, /* @__PURE__ */ import_ext_gadget2.default.createElement("col", {
          className: "diff-marker"
        }), /* @__PURE__ */ import_ext_gadget2.default.createElement("col", {
          className: "diff-content"
        }), /* @__PURE__ */ import_ext_gadget2.default.createElement("col", {
          className: "diff-marker"
        }), /* @__PURE__ */ import_ext_gadget2.default.createElement("col", {
          className: "diff-content"
        }))));
      }
    }, (error) => {
      void mw.notify(window.wgULS("获取$1差异时发生错误：", "取得$1差異時發生錯誤：").replace("$1", lang) + error, {
        tag: "TranslateVariants",
        type: "error"
      });
    }).always(() => {
      process(pageContent);
    });
  };
  const queryContentParams = {
    action: "query",
    format: "json",
    formatversion: "2",
    prop: "revisions",
    titles: wgPageName,
    curtimestamp: true,
    rvprop: ["content", "timestamp"]
  };
  void api.get(queryContentParams).then((data) => {
    var _data$query;
    if (!((_data$query = data["query"]) !== null && _data$query !== void 0 && _data$query.pages)) {
      return $.Deferred().reject("unknown");
    }
    const [page] = data["query"].pages;
    if (page.invalid) {
      return $.Deferred().reject("invalidtitle");
    }
    if (page.missing) {
      return $.Deferred().reject("nocreate-missing");
    }
    const [{
      content
    }] = page.revisions;
    return content;
  }).then((content) => {
    let pageContent = content;
    pageContent = pageContent.replace(/[\s#&'*:<>[\]_{|}]/gim, (string) => "&#".concat(string.codePointAt(0), ";"));
    pageContent = pageContent.replace(/(&#91;&#91;)((?:(?!&#124;)(?!&#93;).)+?)(&#124;(?:(?!&#93;).)+?&#93;&#93;)/g, "$1-{$2}-$3");
    pageContent = pageContent.replace(/-&#123;(.+?)&#125;-/g, (string) => string.replace("-&#123;", "-{").replace("-&#123;", "-{").replace("&#125;-", "}-").replace(/&#124;/g, "|").replace(/&#32;/g, " ").replace(/&#61;/g, "=").replace(/&#62;/g, ">").replace(/&#58;/g, ":"));
    return pageContent;
  }).then((pageContent) => {
    process(pageContent);
  });
};
//! src/TranslateVariants/TranslateVariants.ts
void (0, import_ext_gadget3.getBody)().then(($body) => {
  const {
    wgPageName
  } = mw.config.get();
  if (!/^MediaWiki:[^/]+(\/zh)?$/.test(wgPageName)) {
    return;
  }
  const portletId = $body.find("#p-cactions").length ? "p-cactions" : "p-tb";
  const element = mw.util.addPortletLink(portletId, "#", window.wgULS("转换变体", "轉換變體"));
  element === null || element === void 0 || element.addEventListener("click", () => {
    element.remove();
    translateVariants(wgPageName);
  });
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1RyYW5zbGF0ZVZhcmlhbnRzL1RyYW5zbGF0ZVZhcmlhbnRzLnRzIiwgInNyYy9UcmFuc2xhdGVWYXJpYW50cy9vcHRpb25zLmpzb24iLCAic3JjL1RyYW5zbGF0ZVZhcmlhbnRzL1RyYW5zbGF0ZVZhcmlhbnRzLm1vZHVsZS5sZXNzIiwgInNyYy9UcmFuc2xhdGVWYXJpYW50cy9tb2R1bGVzL3RyYW5zbGF0ZVZhcmlhbnRzLnRzeCIsICJzcmMvVHJhbnNsYXRlVmFyaWFudHMvbW9kdWxlcy9hcGkudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7dHJhbnNsYXRlVmFyaWFudHN9IGZyb20gJy4vbW9kdWxlcy90cmFuc2xhdGVWYXJpYW50cyc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmICghL15NZWRpYVdpa2k6W14vXSsoXFwvemgpPyQvLnRlc3Qod2dQYWdlTmFtZSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwb3J0bGV0SWQ6ICdwLWNhY3Rpb25zJyB8ICdwLXRiJyA9ICRib2R5LmZpbmQoJyNwLWNhY3Rpb25zJykubGVuZ3RoID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRjb25zdCBlbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsIHdpbmRvdy53Z1VMUygn6L2s5o2i5Y+Y5L2TJywgJ+i9ieaPm+iuiumrlCcpKTtcblxuXHRlbGVtZW50Py5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHRlbGVtZW50LnJlbW92ZSgpO1xuXHRcdHRyYW5zbGF0ZVZhcmlhbnRzKHdnUGFnZU5hbWUpO1xuXHR9KTtcbn0pO1xuIiwgIntcblx0XCJjb250ZW50SURcIjogXCJUcmFuc2xhdGVWYXJpYW50cy1jb250ZW50XCIsXG5cdFwidHJhbnNsYXRlVmFyaWFudHNTdW1tYXJ5XCI6IFwi6Ieq5Yqo6L2s5o2i5Y+Y5L2T6IeqW1skMV1d77yIW1tNZWRpYVdpa2k6R2FkZ2V0LVRyYW5zbGF0ZVZhcmlhbnRzLmpzfFRyYW5zbGF0ZVZhcmlhbnRzXV3vvIlcIixcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL1RyYW5zbGF0ZVZhcmlhbnRzL1RyYW5zbGF0ZVZhcmlhbnRzLm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3Qgbm9DaGFuZ2VzID0gXCJUcmFuc2xhdGVWYXJpYW50cy1tb2R1bGVfX25vQ2hhbmdlc19Zdm0tbFdfXzQxMDBcIjtcbmV4cG9ydCBjb25zdCBwdWJsaXNoQ2hhbmdlcyA9IFwiVHJhbnNsYXRlVmFyaWFudHMtbW9kdWxlX19wdWJsaXNoQ2hhbmdlc19Zdm0tbFdfXzQxMDBcIjtcbmV4cG9ydCBjb25zdCBzdWJtaXRBbGwgPSBcIlRyYW5zbGF0ZVZhcmlhbnRzLW1vZHVsZV9fc3VibWl0QWxsX1l2bS1sV19fNDEwMFwiO1xuZXhwb3J0IGNvbnN0IHdhcm5pbmcgPSBcIlRyYW5zbGF0ZVZhcmlhbnRzLW1vZHVsZV9fd2FybmluZ19Zdm0tbFdfXzQxMDBcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcIm5vQ2hhbmdlc1wiOiBub0NoYW5nZXMsXG4gIFwicHVibGlzaENoYW5nZXNcIjogcHVibGlzaENoYW5nZXMsXG4gIFwic3VibWl0QWxsXCI6IHN1Ym1pdEFsbCxcbiAgXCJ3YXJuaW5nXCI6IHdhcm5pbmdcbn07XG4gICAgICAiLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtub0NoYW5nZXMsIHB1Ymxpc2hDaGFuZ2VzLCBzdWJtaXRBbGwsIHdhcm5pbmd9IGZyb20gJy4uL1RyYW5zbGF0ZVZhcmlhbnRzLm1vZHVsZS5sZXNzJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG50eXBlIExhbmdzID0gJ3poJyB8ICd6aC1oYW5zJyB8ICd6aC1jbicgfCAnemgtbXknIHwgJ3poLXNnJyB8ICd6aC1oYW50JyB8ICd6aC1oaycgfCAnemgtbW8nIHwgJ3poLXR3JztcbmNvbnN0IGxhbmdzOiBMYW5nc1tdID0gWyd6aCcsICd6aC1oYW5zJywgJ3poLWNuJywgJ3poLW15JywgJ3poLXNnJywgJ3poLWhhbnQnLCAnemgtaGsnLCAnemgtbW8nLCAnemgtdHcnXTtcbmNvbnN0IG5hbWVPZkxhbmdzID0ge1xuXHR6aDogJ+WOn+WniycsXG5cdCd6aC1oYW5zJzogJ+eugOS9kycsXG5cdCd6aC1jbic6ICfkuK3lm73lpKfpmYbnroDkvZMnLFxuXHQnemgtbXknOiAn6ams5p2l6KW/5Lqa566A5L2TJyxcblx0J3poLXNnJzogJ+aWsOWKoOWdoeeugOS9kycsXG5cdCd6aC1oYW50JzogJ+e5gemrlCcsXG5cdCd6aC1oayc6ICfkuK3lnIvpppnmuK/nuYHpq5QnLFxuXHQnemgtbW8nOiAn5Lit5ZyL5r6z6ZaA57mB6auUJyxcblx0J3poLXR3JzogJ+S4reWci+iHuueBo+e5gemrlCcsXG59IGFzIGNvbnN0IHNhdGlzZmllcyBSZWNvcmQ8TGFuZ3MsIHN0cmluZz47XG5cbmNvbnN0IHRyYW5zbGF0ZVZhcmlhbnRzID0gKHdnUGFnZU5hbWU6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRjb25zdCBzdW1tYXJ5OiBzdHJpbmcgPSBPUFRJT05TLnRyYW5zbGF0ZVZhcmlhbnRzU3VtbWFyeS5yZXBsYWNlKC9cXCQxL2csIHdnUGFnZU5hbWUpO1xuXG5cdGNvbnN0ICR3cmFwcGVyOiBKUXVlcnkgPSAoJCg8ZGl2IGlkPVwiVHJhbnNsYXRlVmFyaWFudHNcIiAvPikgYXMgSlF1ZXJ5KS5wcmVwZW5kVG8oJyNib2R5Q29udGVudCcpO1xuXG5cdGNvbnN0ICRzdWJtaXRBbGw6IEpRdWVyeSA9ICQoXG5cdFx0PGJ1dHRvbiBjbGFzc05hbWU9e1snY2R4LWJ1dHRvbicsICdjZHgtYnV0dG9uLS1hY3Rpb24tcHJvZ3Jlc3NpdmUnLCAnY2R4LWJ1dHRvbi0td2VpZ2h0LXByaW1hcnknXX0+XG5cdFx0XHR7d2luZG93LndnVUxTKCflj5HluIPmiYDmnInmm7TmlLknLCAn55m85L2I5omA5pyJ6K6K5pu0Jyl9XG5cdFx0PC9idXR0b24+XG5cdCkgYXMgSlF1ZXJ5O1xuXHQkc3VibWl0QWxsLm9uKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHRjb25zdCAkYnV0dG9uczogSlF1ZXJ5ID0gJHdyYXBwZXIuZmluZChgLiR7cHVibGlzaENoYW5nZXN9YCk7XG5cdFx0aWYgKCEkYnV0dG9ucy5sZW5ndGgpIHtcblx0XHRcdHZvaWQgbXcubm90aWZ5KHdpbmRvdy53Z1VMUygn5rKh5pyJ5Lu75L2V5Y+v5Lul5Y+R5biD55qE5pu05pS5JywgJ+aykuacieS7u+S9leiuiuabtOWPr+eZvOS9iCcpLCB7XG5cdFx0XHRcdHRhZzogJ1RyYW5zbGF0ZVZhcmlhbnRzJyxcblx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICghY29uZmlybSh3aW5kb3cud2dVTFMoJ+WPkeW4gyQx5Liq5pu05pS577yfJywgJ+eZvOS9iCQx5YCL6K6K5pu077yfJykucmVwbGFjZSgnJDEnLCBgJHskYnV0dG9ucy5sZW5ndGh9YCkpKSB7XG5cdFx0XHR2b2lkIG13Lm5vdGlmeSh3aW5kb3cud2dVTFMoJ+W3suWPlua2iOWPkeW4gycsICflt7Llj5bmtojnmbzkvYgnKSwge3RhZzogJ1RyYW5zbGF0ZVZhcmlhbnRzJywgdHlwZTogJ3dhcm4nfSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBidXR0b24gb2YgJGJ1dHRvbnMpIHtcblx0XHRcdCQoYnV0dG9uKS50cmlnZ2VyKCdjbGljaycpO1xuXHRcdH1cblx0fSk7XG5cblx0JHdyYXBwZXIuYXBwZW5kKFxuXHRcdCQoPGRpdiBjbGFzc05hbWU9e3N1Ym1pdEFsbH0gLz4pLmFwcGVuZCgkc3VibWl0QWxsKSxcblx0XHQ8ZGl2IGNsYXNzTmFtZT17d2FybmluZ30+XG5cdFx0XHR7d2luZG93LndnVUxTKFxuXHRcdFx0XHQn5o+Q6YaS77yaVHJhbnNsYXRlVmFyaWFudHPlt6Xlhbfkvb/nlKhJVOWPik1lZGlhV2lraei9rOaNoue7hOi/m+ihjOiHquWKqOi9rOaNou+8jOivt+ehruiupOi9rOaNoue7k+aenOaYr+WQpuato+ehru+8gScsXG5cdFx0XHRcdCfmj5DphpLvvJpUcmFuc2xhdGVWYXJpYW50c+W3peWFt+S9v+eUqElU5Y+KTWVkaWFXaWtp6L2J5o+b57WE6YCy6KGM6Ieq5YuV6L2J5o+b77yM6KuL56K66KqN6L2J5o+b57WQ5p6c5piv5ZCm5q2j56K677yBJ1xuXHRcdFx0KX1cblx0XHQ8L2Rpdj5cblx0KTtcblxuXHRjb25zdCBkZWZhdWx0TGFuZ3M6IExhbmdzW10gPSBbLi4ubGFuZ3NdO1xuXG5cdGxldCBydW5MYW5ncyA9IHByb21wdChcblx0XHR3aW5kb3cud2dVTFMoJ+i9rOaNouS7peS4i+ivreiogO+8iOS7pemAl+WPt+malOW8gO+8ie+8micsICfovYnmj5vku6XkuIvoqp7oqIDvvIjku6XpgJfomZ/pmpTplovvvInvvJonKSxcblx0XHRkZWZhdWx0TGFuZ3Muam9pbignLCcpXG5cdCk/LnNwbGl0KCcsJykgYXMgTGFuZ3NbXSB8IG51bGw7XG5cdGlmIChydW5MYW5ncyA9PT0gbnVsbCkge1xuXHRcdHJ1bkxhbmdzID0gZGVmYXVsdExhbmdzO1xuXHR9XG5cblx0Y29uc3QgbGFuZ1F1ZXVlOiBMYW5nc1tdID0gcnVuTGFuZ3Ncblx0XHQubWFwKChsYW5nOiBMYW5ncyk6IExhbmdzID0+IGxhbmcudHJpbSgpIGFzIExhbmdzKVxuXHRcdC5maWx0ZXIoKGxhbmc6IExhbmdzKTogYm9vbGVhbiA9PiBsYW5ncy5pbmNsdWRlcyhsYW5nKSk7XG5cblx0Y29uc3QgcHJvY2VzcyA9IChwYWdlQ29udGVudDogc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0aWYgKCFsYW5nUXVldWUubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgbGFuZyA9IGxhbmdRdWV1ZS5zaGlmdCgpIGFzIExhbmdzO1xuXG5cdFx0Y29uc3QgJGRpZmZUYWJsZTogSlF1ZXJ5ID0gJCg8ZGl2IGlkPXtgVHJhbnNsYXRlVmFyaWFudHMtZGlmZi0ke2xhbmd9YH0gLz4pIGFzIEpRdWVyeTtcblx0XHQkd3JhcHBlci5hcHBlbmQoJGRpZmZUYWJsZSwgPGhyIC8+KTtcblxuXHRcdGNvbnN0IGJhc2VQYWdlTmFtZTogc3RyaW5nID0gd2dQYWdlTmFtZS5yZXBsYWNlKC9cXC96aCQvLCAnJyk7XG5cdFx0Y29uc3QgdGFyZ2V0VGl0bGU6IHN0cmluZyA9IGxhbmcgPT09ICd6aCcgPyBiYXNlUGFnZU5hbWUgOiBgJHtiYXNlUGFnZU5hbWV9LyR7bGFuZ31gO1xuXG5cdFx0bGV0IG5ld1BhZ2VDb250ZW50OiBzdHJpbmcgPSAnJztcblx0XHR2b2lkIGFwaVxuXHRcdFx0LnBhcnNlKGB7e05vdGVUQXxHMT1JVHxHMj1NZWRpYVdpa2l9fTxkaXYgaWQ9XCIke09QVElPTlMuY29udGVudElEfVwiPiR7cGFnZUNvbnRlbnR9PC9kaXY+YCwge1xuXHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdHVzZWxhbmc6IGxhbmcsXG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oXG5cdFx0XHRcdChjb250ZW50OiBzdHJpbmcpID0+IHtcblx0XHRcdFx0XHRuZXdQYWdlQ29udGVudCA9ICQoPGRpdiBpbm5lckhUTUw9e2NvbnRlbnR9IC8+KVxuXHRcdFx0XHRcdFx0LmZpbmQoYCMke09QVElPTlMuY29udGVudElEfWApXG5cdFx0XHRcdFx0XHQudGV4dCgpO1xuXG5cdFx0XHRcdFx0Y29uc3QgcXVlcnlEaWZmUGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyA9IHtcblx0XHRcdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRcdFx0dGl0bGVzOiB0YXJnZXRUaXRsZSxcblx0XHRcdFx0XHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdFx0XHRcdFx0cnZkaWZmdG90ZXh0OiBuZXdQYWdlQ29udGVudCxcblx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0cmV0dXJuIGFwaS5nZXQocXVlcnlEaWZmUGFyYW1zKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0KGVycm9yKTogbnVsbCA9PiB7XG5cdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+ino+aekCQx5pe25Y+R55Sf6ZSZ6K+v77yaJywgJ+ino+aekCQx5pmC55m855Sf6Yyv6Kqk77yaJykucmVwbGFjZSgnJDEnLCBsYW5nKSArIGVycm9yLFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0YWc6ICdUcmFuc2xhdGVWYXJpYW50cycsXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0XHQudGhlbihcblx0XHRcdFx0KGRhdGEpID0+IHtcblx0XHRcdFx0XHRpZiAoZGF0YSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbnN0ICR0b29sID0gJChcblx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9e213LnV0aWwuZ2V0VXJsKHRhcmdldFRpdGxlKX0+XG5cdFx0XHRcdFx0XHRcdFx0e2xhbmd977yIe25hbWVPZkxhbmdzW2xhbmddfe+8iVxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdO+8iDxhIGhyZWY9e213LnV0aWwuZ2V0VXJsKHRhcmdldFRpdGxlLCB7YWN0aW9uOiAnZWRpdCd9KX0+e3dpbmRvdy53Z1VMUygn57yWJywgJ+e3qCcpfTwvYT7vvIlcblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdCkgYXMgSlF1ZXJ5O1xuXG5cdFx0XHRcdFx0JGRpZmZUYWJsZS5hcHBlbmQoJHRvb2wpO1xuXG5cdFx0XHRcdFx0Y29uc3QgW3BhZ2VdID0gZGF0YVsncXVlcnknXS5wYWdlcztcblx0XHRcdFx0XHRpZiAocGFnZS5taXNzaW5nKSB7XG5cdFx0XHRcdFx0XHRjb25zdCAkc3VibWl0ID0gJChcblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9e1twdWJsaXNoQ2hhbmdlcywgJ2NkeC1idXR0b24nXX0+XG5cdFx0XHRcdFx0XHRcdFx0e3dpbmRvdy53Z1VMUygn5Y+R5biD6aG16Z2iJywgJ+eZvOS9iOmggemdoicpfVxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdCkgYXMgSlF1ZXJ5O1xuXHRcdFx0XHRcdFx0JHN1Ym1pdC5vbignY2xpY2snLCAoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdCRzdWJtaXQucmVtb3ZlKCk7XG5cblx0XHRcdFx0XHRcdFx0YXBpLmNyZWF0ZShcblx0XHRcdFx0XHRcdFx0XHR0YXJnZXRUaXRsZSxcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0bmV3UGFnZUNvbnRlbnRcblx0XHRcdFx0XHRcdFx0KS50aGVuKFxuXHRcdFx0XHRcdFx0XHRcdCgpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KHdpbmRvdy53Z1VMUygn5bey57yW6L6RICcsICflt7Lnt6jovK8gJykgKyB0YXJnZXRUaXRsZSwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0YWc6ICdUcmFuc2xhdGVWYXJpYW50cycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdzdWNjZXNzJyxcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0KGVycm9yKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeShcblx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfnvJbovpEnLCAn57eo6LyvICcpICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0YXJnZXRUaXRsZSArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCcg5Y+R55Sf6ZSZ6K+v77yaJywgJyDnmbznlJ/pjK/oqqTvvJonKSArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3IsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0YWc6ICdUcmFuc2xhdGVWYXJpYW50cycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0JHRvb2wuYXBwZW5kKCRzdWJtaXQpO1xuXHRcdFx0XHRcdFx0JGRpZmZUYWJsZS5hcHBlbmQoXG5cdFx0XHRcdFx0XHRcdDxwcmVcblx0XHRcdFx0XHRcdFx0XHRpbm5lckhUTUw9e25ld1BhZ2VDb250ZW50LnJlcGxhY2UoXG5cdFx0XHRcdFx0XHRcdFx0XHQvWyY8Pl0vZ2ltLFxuXHRcdFx0XHRcdFx0XHRcdFx0KHN0cmluZzogc3RyaW5nKTogc3RyaW5nID0+IGAmIyR7c3RyaW5nLmNvZGVQb2ludEF0KDApfTtgXG5cdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjb25zdCBkaWZmOiBzdHJpbmcgPSBwYWdlLnJldmlzaW9uc1swXS5kaWZmLmJvZHk7XG5cdFx0XHRcdFx0aWYgKGRpZmYgPT09ICcnKSB7XG5cdFx0XHRcdFx0XHQkdG9vbC5hcHBlbmQoPHNwYW4gY2xhc3NOYW1lPXtub0NoYW5nZXN9Pnt3aW5kb3cud2dVTFMoJ+aXoOabtOaUuScsICfnhKHorormm7QnKX08L3NwYW4+KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Y29uc3QgJHN1Ym1pdCA9ICQoXG5cdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPXtbcHVibGlzaENoYW5nZXMsICdjZHgtYnV0dG9uJ119PlxuXHRcdFx0XHRcdFx0XHRcdHt3aW5kb3cud2dVTFMoJ+WPkeW4g+abtOaUuScsICfnmbzkvYjorormm7QnKX1cblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQpIGFzIEpRdWVyeTtcblx0XHRcdFx0XHRcdCRzdWJtaXQub24oJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHQkc3VibWl0LnJlbW92ZSgpO1xuXG5cdFx0XHRcdFx0XHRcdGFwaS5lZGl0KHRhcmdldFRpdGxlLCAoKSA9PiAoe1xuXHRcdFx0XHRcdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdFx0XHRcdFx0dGV4dDogbmV3UGFnZUNvbnRlbnQsXG5cdFx0XHRcdFx0XHRcdFx0bm9jcmVhdGU6IGZhbHNlLFxuXHRcdFx0XHRcdFx0XHR9KSkudGhlbihcblx0XHRcdFx0XHRcdFx0XHQoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeSh3aW5kb3cud2dVTFMoJ+W3sue8lui+kScsICflt7Lnt6jovK8gJykgKyB0YXJnZXRUaXRsZSwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0YWc6ICdUcmFuc2xhdGVWYXJpYW50cycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdzdWNjZXNzJyxcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0KGVycm9yKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeShcblx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LndnVUxTKCfnvJbovpEkMeWPkeeUn+mUmeivr++8micsICfnt6jovK8kMeeZvOeUn+mMr+iqpO+8micpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LnJlcGxhY2UoJyQxJywgdGFyZ2V0VGl0bGUpICsgZXJyb3IsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0YWc6ICdUcmFuc2xhdGVWYXJpYW50cycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0JHRvb2wuYXBwZW5kKCRzdWJtaXQpO1xuXHRcdFx0XHRcdFx0JGRpZmZUYWJsZS5hcHBlbmQoXG5cdFx0XHRcdFx0XHRcdCQoPHRhYmxlIGNsYXNzTmFtZT1cImRpZmZcIiBpbm5lckhUTUw9e2RpZmZ9IC8+KS5wcmVwZW5kKFxuXHRcdFx0XHRcdFx0XHRcdDxjb2xncm91cD5cblx0XHRcdFx0XHRcdFx0XHRcdDxjb2wgY2xhc3NOYW1lPVwiZGlmZi1tYXJrZXJcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGNvbCBjbGFzc05hbWU9XCJkaWZmLWNvbnRlbnRcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGNvbCBjbGFzc05hbWU9XCJkaWZmLW1hcmtlclwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8Y29sIGNsYXNzTmFtZT1cImRpZmYtY29udGVudFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9jb2xncm91cD5cblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdChlcnJvcik6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KFxuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfojrflj5YkMeW3ruW8guaXtuWPkeeUn+mUmeivr++8micsICflj5blvpckMeW3rueVsOaZgueZvOeUn+mMr+iqpO+8micpLnJlcGxhY2UoJyQxJywgbGFuZykgKyBlcnJvcixcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGFnOiAnVHJhbnNsYXRlVmFyaWFudHMnLFxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHRcdC5hbHdheXMoKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRwcm9jZXNzKHBhZ2VDb250ZW50KTtcblx0XHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IHF1ZXJ5Q29udGVudFBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdHRpdGxlczogd2dQYWdlTmFtZSxcblx0XHRjdXJ0aW1lc3RhbXA6IHRydWUsXG5cdFx0cnZwcm9wOiBbJ2NvbnRlbnQnLCAndGltZXN0YW1wJ10sXG5cdH0gYXMgY29uc3Qgc2F0aXNmaWVzIEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zO1xuXG5cdHZvaWQgYXBpXG5cdFx0LmdldChxdWVyeUNvbnRlbnRQYXJhbXMpXG5cdFx0LnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdGlmICghZGF0YVsncXVlcnknXT8ucGFnZXMpIHtcblx0XHRcdFx0cmV0dXJuICQuRGVmZXJyZWQoKS5yZWplY3QoJ3Vua25vd24nKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgW3BhZ2VdID0gZGF0YVsncXVlcnknXS5wYWdlcztcblxuXHRcdFx0aWYgKHBhZ2UuaW52YWxpZCkge1xuXHRcdFx0XHRyZXR1cm4gJC5EZWZlcnJlZCgpLnJlamVjdCgnaW52YWxpZHRpdGxlJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAocGFnZS5taXNzaW5nKSB7XG5cdFx0XHRcdHJldHVybiAkLkRlZmVycmVkKCkucmVqZWN0KCdub2NyZWF0ZS1taXNzaW5nJyk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IFt7Y29udGVudH1dID0gcGFnZS5yZXZpc2lvbnM7XG5cblx0XHRcdHJldHVybiBjb250ZW50IGFzIHN0cmluZztcblx0XHR9KVxuXHRcdC50aGVuKChjb250ZW50OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdFx0bGV0IHBhZ2VDb250ZW50OiBzdHJpbmcgPSBjb250ZW50O1xuXG5cdFx0XHRwYWdlQ29udGVudCA9IHBhZ2VDb250ZW50LnJlcGxhY2UoXG5cdFx0XHRcdC9bXFxzIyYnKjo8PltcXF1fe3x9XS9naW0sXG5cdFx0XHRcdChzdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PiBgJiMke3N0cmluZy5jb2RlUG9pbnRBdCgwKX07YFxuXHRcdFx0KTtcblx0XHRcdHBhZ2VDb250ZW50ID0gcGFnZUNvbnRlbnQucmVwbGFjZShcblx0XHRcdFx0LygmIzkxOyYjOTE7KSgoPzooPyEmIzEyNDspKD8hJiM5MzspLikrPykoJiMxMjQ7KD86KD8hJiM5MzspLikrPyYjOTM7JiM5MzspL2csXG5cdFx0XHRcdCckMS17JDJ9LSQzJ1xuXHRcdFx0KTtcblx0XHRcdHBhZ2VDb250ZW50ID0gcGFnZUNvbnRlbnQucmVwbGFjZSgvLSYjMTIzOyguKz8pJiMxMjU7LS9nLCAoc3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcgPT5cblx0XHRcdFx0c3RyaW5nXG5cdFx0XHRcdFx0LnJlcGxhY2UoJy0mIzEyMzsnLCAnLXsnKVxuXHRcdFx0XHRcdC5yZXBsYWNlKCctJiMxMjM7JywgJy17Jylcblx0XHRcdFx0XHQucmVwbGFjZSgnJiMxMjU7LScsICd9LScpXG5cdFx0XHRcdFx0LnJlcGxhY2UoLyYjMTI0Oy9nLCAnfCcpXG5cdFx0XHRcdFx0LnJlcGxhY2UoLyYjMzI7L2csICcgJylcblx0XHRcdFx0XHQucmVwbGFjZSgvJiM2MTsvZywgJz0nKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC8mIzYyOy9nLCAnPicpXG5cdFx0XHRcdFx0LnJlcGxhY2UoLyYjNTg7L2csICc6Jylcblx0XHRcdCk7XG5cblx0XHRcdHJldHVybiBwYWdlQ29udGVudDtcblx0XHR9KVxuXHRcdC50aGVuKChwYWdlQ29udGVudDogc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0XHRwcm9jZXNzKHBhZ2VDb250ZW50KTtcblx0XHR9KTtcbn07XG5cbmV4cG9ydCB7dHJhbnNsYXRlVmFyaWFudHN9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgVHJhbnNsYXRlVmFyaWFudHMvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBc0JDLFFBQUEsaUJBQUE7O0FDQ3JCLElBQUFDLFlBQWE7QUFDYixJQUFBQywyQkFBNEI7QUFDNUIsSUFBQUMsVUFBVzs7QUNGTCxJQUFNQyxZQUFZO0FBQ2xCLElBQU1DLGlCQUFpQjtBQUN2QixJQUFNQyxZQUFZO0FBQ2xCLElBQU1DLFVBQVU7O0FDRnZCLElBQUFDLHFCQUFrQkMsUUFBQVQsUUFB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QUMzRixRQUFNb0YsVUFBZ0NuRixHQUFHc0QsS0FBSzhCLGVBQWVGLFdBQVcsS0FBS3hGLE9BQU9DLE1BQU0sUUFBUSxNQUFNLENBQUM7QUFFekd3RixjQUFBLFFBQUFBLFlBQUEsVUFBQUEsUUFBU0UsaUJBQWlCLFNBQVMsTUFBWTtBQUM5Q0YsWUFBUXZCLE9BQU87QUFDZi9FLHNCQUFrQkMsVUFBVTtFQUM3QixDQUFDO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQzIiwgInJlcXVpcmUiLCAiY29udGVudElEIiwgInRyYW5zbGF0ZVZhcmlhbnRzU3VtbWFyeSIsICJ2ZXJzaW9uIiwgIm5vQ2hhbmdlcyIsICJwdWJsaXNoQ2hhbmdlcyIsICJzdWJtaXRBbGwiLCAid2FybmluZyIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiX190b0VTTSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJsYW5ncyIsICJuYW1lT2ZMYW5ncyIsICJ6aCIsICJ0cmFuc2xhdGVWYXJpYW50cyIsICJ3Z1BhZ2VOYW1lIiwgIl9wcm9tcHQiLCAic3VtbWFyeSIsICJyZXBsYWNlIiwgIiR3cmFwcGVyIiwgIiQiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImlkIiwgInByZXBlbmRUbyIsICIkc3VibWl0QWxsIiwgImNsYXNzTmFtZSIsICJ3aW5kb3ciLCAid2dVTFMiLCAib24iLCAiJGJ1dHRvbnMiLCAiZmluZCIsICJsZW5ndGgiLCAibXciLCAibm90aWZ5IiwgInRhZyIsICJ0eXBlIiwgImNvbmZpcm0iLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiYnV0dG9uIiwgInZhbHVlIiwgInRyaWdnZXIiLCAiZXJyIiwgImUiLCAiZiIsICJhcHBlbmQiLCAiZGVmYXVsdExhbmdzIiwgInJ1bkxhbmdzIiwgInByb21wdCIsICJqb2luIiwgInNwbGl0IiwgImxhbmdRdWV1ZSIsICJtYXAiLCAibGFuZyIsICJ0cmltIiwgImZpbHRlciIsICJpbmNsdWRlcyIsICJwcm9jZXNzIiwgInBhZ2VDb250ZW50IiwgInNoaWZ0IiwgIiRkaWZmVGFibGUiLCAiYmFzZVBhZ2VOYW1lIiwgInRhcmdldFRpdGxlIiwgIm5ld1BhZ2VDb250ZW50IiwgInBhcnNlIiwgImFjdGlvbiIsICJ1c2VsYW5nIiwgInRoZW4iLCAiY29udGVudCIsICJpbm5lckhUTUwiLCAidGV4dCIsICJxdWVyeURpZmZQYXJhbXMiLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAidGl0bGVzIiwgInByb3AiLCAicnZkaWZmdG90ZXh0IiwgImdldCIsICJlcnJvciIsICJkYXRhIiwgIiR0b29sIiwgImhyZWYiLCAidXRpbCIsICJnZXRVcmwiLCAicGFnZSIsICJwYWdlcyIsICJtaXNzaW5nIiwgIiRzdWJtaXQiLCAicmVtb3ZlIiwgImNyZWF0ZSIsICJzdHJpbmciLCAiY29kZVBvaW50QXQiLCAiZGlmZiIsICJyZXZpc2lvbnMiLCAiYm9keSIsICJlZGl0IiwgIm5vY3JlYXRlIiwgInByZXBlbmQiLCAiYWx3YXlzIiwgInF1ZXJ5Q29udGVudFBhcmFtcyIsICJjdXJ0aW1lc3RhbXAiLCAicnZwcm9wIiwgIl9kYXRhJHF1ZXJ5IiwgIkRlZmVycmVkIiwgInJlamVjdCIsICJpbnZhbGlkIiwgImdldEJvZHkiLCAiJGJvZHkiLCAiY29uZmlnIiwgInRlc3QiLCAicG9ydGxldElkIiwgImVsZW1lbnQiLCAiYWRkUG9ydGxldExpbmsiLCAiYWRkRXZlbnRMaXN0ZW5lciJdCn0K
