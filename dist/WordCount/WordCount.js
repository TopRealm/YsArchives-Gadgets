/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-Wordcount.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/WordCount}
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

// dist/WordCount/WordCount.js
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
//! src/WordCount/modules/wordCount.tsx
var import_ext_gadget3 = __toESM(require("ext.gadget.JSX"), 1);
//! src/WordCount/modules/util/countLength.ts
var countLength = (text) => {
  return text.length;
};
//! src/WordCount/modules/util/countByte.ts
var countByte = (text) => {
  return countLength(text.replace(/[\u0000-\u007F]/g, ".").replace(/[\u0080-\u07FF\uD800-\uDFFF]/g, "..").replace(/[\u0800-\uD7FF\uE000-\uFFFF]/g, "..."));
};
//! src/WordCount/modules/util/countCJK.ts
var countCJK = (text) => {
  return countLength(text.replace(/\./g, "").replace(/[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DB5\u4E00-\u9FCC\uF900-\uFA6D\uFA70-\uFAD9]|[\uD840-\uD868][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|[\uD86A-\uD86C][\uDC00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]/g, ".").replace(/[^.]/g, ""));
};
//! src/WordCount/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "character(s)": (0, import_ext_gadget.localize)({
      en: " character(s)",
      "zh-hans": "字符",
      "zh-hant": "字元"
    }),
    "(": (0, import_ext_gadget.localize)({
      en: " (",
      zh: "（"
    }),
    ")": (0, import_ext_gadget.localize)({
      en: ") ",
      zh: "）"
    }),
    CJK: (0, import_ext_gadget.localize)({
      en: " CJK",
      "zh-hans": "个CJK字符",
      "zh-hant": "个CJK字元"
    }),
    "byte(s) in UTF-8 encoding": (0, import_ext_gadget.localize)({
      en: "byte(s) in UTF-8 encoding",
      "zh-hans": "字节（UTF-8编码）",
      "zh-hant": "位元組（UTF-8編碼）"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/WordCount/modules/getCount.ts
var getCountByTextLength = (text) => {
  return "".concat(countLength(text)).concat(getMessage("character(s)"));
};
var getCJKCountByTextLength = (text) => {
  return "".concat(getMessage("(")).concat(countCJK(text)).concat(getMessage("CJK")).concat(getMessage(")"));
};
var getUTF8CountByTextLength = (text) => {
  return "".concat(countByte(text)).concat(getMessage("byte(s) in UTF-8 encoding"));
};
//! src/WordCount/components/WordCount.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.JSX"), 1);
//! src/WordCount/components/WordCount.module.less
var tip = "WordCount-module__tip_HBDn5a__4100";
//! src/WordCount/components/WordCount.tsx
var WordCount = ({
  text
}) => /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
  className: [tip, "noprint", "ui-state-highlight", "ui-corner-all"],
  id: "gadget-word_count-tip"
}, getCountByTextLength(text), getCJKCountByTextLength(text), /* @__PURE__ */ import_ext_gadget2.default.createElement("br", null), getUTF8CountByTextLength(text));
var WordCount_default = WordCount;
//! src/WordCount/modules/wordCount.tsx
var wordCount = ($body) => {
  var _window$getSelection;
  $body.find(".".concat(tip)).remove();
  const text = (_window$getSelection = window.getSelection()) === null || _window$getSelection === void 0 ? void 0 : _window$getSelection.toString();
  if (!text) {
    return;
  }
  const $element = $(/* @__PURE__ */ import_ext_gadget3.default.createElement(WordCount_default, {
    text
  }));
  $element.appendTo($body);
  setTimeout(() => {
    $element.fadeOut("slow", () => {
      $element.remove();
    });
  }, 5 * 1e3);
};
//! src/WordCount/modules/addListener.ts
var addListener = ($body) => {
  if ("ontouchstart" in document) {
    $body.on("touchstart touchend", {
      passive: true
    }, () => {
      wordCount($body);
    });
  } else {
    $body.on("mouseup keyup", () => {
      wordCount($body);
    });
  }
};
//! src/WordCount/WordCount.ts
var import_ext_gadget4 = require("ext.gadget.Util");
void (0, import_ext_gadget4.getBody)().then(addListener);

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dvcmRDb3VudC9tb2R1bGVzL3dvcmRDb3VudC50c3giLCAic3JjL1dvcmRDb3VudC9tb2R1bGVzL3V0aWwvY291bnRMZW5ndGgudHMiLCAic3JjL1dvcmRDb3VudC9tb2R1bGVzL3V0aWwvY291bnRCeXRlLnRzIiwgInNyYy9Xb3JkQ291bnQvbW9kdWxlcy91dGlsL2NvdW50Q0pLLnRzIiwgInNyYy9Xb3JkQ291bnQvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9Xb3JkQ291bnQvbW9kdWxlcy9nZXRDb3VudC50cyIsICJzcmMvV29yZENvdW50L2NvbXBvbmVudHMvV29yZENvdW50LnRzeCIsICJzcmMvV29yZENvdW50L2NvbXBvbmVudHMvV29yZENvdW50Lm1vZHVsZS5sZXNzIiwgInNyYy9Xb3JkQ291bnQvbW9kdWxlcy9hZGRMaXN0ZW5lci50cyIsICJzcmMvV29yZENvdW50L1dvcmRDb3VudC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuSlNYJztcbmltcG9ydCBXb3JkQ291bnQgZnJvbSAnLi4vY29tcG9uZW50cy9Xb3JkQ291bnQnO1xuaW1wb3J0IHt0aXB9IGZyb20gJy4uL2NvbXBvbmVudHMvV29yZENvdW50Lm1vZHVsZS5sZXNzJztcblxuY29uc3Qgd29yZENvdW50ID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQkYm9keS5maW5kKGAuJHt0aXB9YCkucmVtb3ZlKCk7XG5cblx0Y29uc3QgdGV4dDogc3RyaW5nIHwgdW5kZWZpbmVkID0gd2luZG93LmdldFNlbGVjdGlvbigpPy50b1N0cmluZygpO1xuXHRpZiAoIXRleHQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkZWxlbWVudCA9ICQoPFdvcmRDb3VudCB0ZXh0PXt0ZXh0fSAvPik7XG5cblx0JGVsZW1lbnQuYXBwZW5kVG8oJGJvZHkpO1xuXG5cdHNldFRpbWVvdXQoKCk6IHZvaWQgPT4ge1xuXHRcdCRlbGVtZW50LmZhZGVPdXQoJ3Nsb3cnLCAoKTogdm9pZCA9PiB7XG5cdFx0XHQkZWxlbWVudC5yZW1vdmUoKTtcblx0XHR9KTtcblx0fSwgNSAqIDEwMDApO1xufTtcblxuZXhwb3J0IHt3b3JkQ291bnR9O1xuIiwgImNvbnN0IGNvdW50TGVuZ3RoID0gKHRleHQ6IHN0cmluZyk6IG51bWJlciA9PiB7XG5cdHJldHVybiB0ZXh0Lmxlbmd0aDtcbn07XG5cbmV4cG9ydCB7Y291bnRMZW5ndGh9O1xuIiwgImltcG9ydCB7Y291bnRMZW5ndGh9IGZyb20gJy4vY291bnRMZW5ndGgnO1xuXG5jb25zdCBjb3VudEJ5dGUgPSAodGV4dDogc3RyaW5nKTogbnVtYmVyID0+IHtcblx0cmV0dXJuIGNvdW50TGVuZ3RoKFxuXHRcdHRleHRcblx0XHRcdC5yZXBsYWNlKC9bXFx1MDAwMC1cXHUwMDdGXS9nLCAnLicpXG5cdFx0XHQucmVwbGFjZSgvW1xcdTAwODAtXFx1MDdGRlxcdUQ4MDAtXFx1REZGRl0vZywgJy4uJylcblx0XHRcdC5yZXBsYWNlKC9bXFx1MDgwMC1cXHVEN0ZGXFx1RTAwMC1cXHVGRkZGXS9nLCAnLi4uJylcblx0KTtcbn07XG5cbmV4cG9ydCB7Y291bnRCeXRlfTtcbiIsICJpbXBvcnQge2NvdW50TGVuZ3RofSBmcm9tICcuL2NvdW50TGVuZ3RoJztcblxuY29uc3QgY291bnRDSksgPSAodGV4dDogc3RyaW5nKTogbnVtYmVyID0+IHtcblx0cmV0dXJuIGNvdW50TGVuZ3RoKFxuXHRcdHRleHRcblx0XHRcdC5yZXBsYWNlKC9cXC4vZywgJycpXG5cdFx0XHQucmVwbGFjZShcblx0XHRcdFx0L1tcXHUyRTgwLVxcdTJFOTlcXHUyRTlCLVxcdTJFRjNcXHUyRjAwLVxcdTJGRDVcXHUzMDA1XFx1MzAwN1xcdTMwMjEtXFx1MzAyOVxcdTMwMzgtXFx1MzAzQlxcdTM0MDAtXFx1NERCNVxcdTRFMDAtXFx1OUZDQ1xcdUY5MDAtXFx1RkE2RFxcdUZBNzAtXFx1RkFEOV18W1xcdUQ4NDAtXFx1RDg2OF1bXFx1REMwMC1cXHVERkZGXXxcXHVEODY5W1xcdURDMDAtXFx1REVENlxcdURGMDAtXFx1REZGRl18W1xcdUQ4NkEtXFx1RDg2Q11bXFx1REMwMC1cXHVERkZGXXxcXHVEODZEW1xcdURDMDAtXFx1REYzNFxcdURGNDAtXFx1REZGRl18XFx1RDg2RVtcXHVEQzAwLVxcdURDMURdfFxcdUQ4N0VbXFx1REMwMC1cXHVERTFEXS9nLFxuXHRcdFx0XHQnLidcblx0XHRcdClcblx0XHRcdC5yZXBsYWNlKC9bXi5dL2csICcnKVxuXHQpO1xufTtcblxuZXhwb3J0IHtjb3VudENKS307XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdjaGFyYWN0ZXIocyknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyBjaGFyYWN0ZXIocyknLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2X56ymJyxcblx0XHRcdCd6aC1oYW50JzogJ+Wtl+WFgycsXG5cdFx0fSksXG5cdFx0JygnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyAoJyxcblx0XHRcdHpoOiAn77yIJyxcblx0XHR9KSxcblx0XHQnKSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnKSAnLFxuXHRcdFx0emg6ICfvvIknLFxuXHRcdH0pLFxuXHRcdENKSzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcgQ0pLJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4qkNKS+Wtl+espicsXG5cdFx0XHQnemgtaGFudCc6ICfkuKpDSkvlrZflhYMnLFxuXHRcdH0pLFxuXHRcdCdieXRlKHMpIGluIFVURi04IGVuY29kaW5nJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdieXRlKHMpIGluIFVURi04IGVuY29kaW5nJyxcblx0XHRcdCd6aC1oYW5zJzogJ+Wtl+iKgu+8iFVURi0457yW56CB77yJJyxcblx0XHRcdCd6aC1oYW50JzogJ+S9jeWFg+e1hO+8iFVURi0457eo56K877yJJyxcblx0XHR9KSxcblx0fTtcbn07XG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7Y291bnRCeXRlfSBmcm9tICcuL3V0aWwvY291bnRCeXRlJztcbmltcG9ydCB7Y291bnRDSkt9IGZyb20gJy4vdXRpbC9jb3VudENKSyc7XG5pbXBvcnQge2NvdW50TGVuZ3RofSBmcm9tICcuL3V0aWwvY291bnRMZW5ndGgnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBnZXRDb3VudEJ5VGV4dExlbmd0aCA9ICh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRyZXR1cm4gYCR7Y291bnRMZW5ndGgodGV4dCl9JHtnZXRNZXNzYWdlKCdjaGFyYWN0ZXIocyknKX1gO1xufTtcblxuY29uc3QgZ2V0Q0pLQ291bnRCeVRleHRMZW5ndGggPSAodGV4dDogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0cmV0dXJuIGAke2dldE1lc3NhZ2UoJygnKX0ke2NvdW50Q0pLKHRleHQpfSR7Z2V0TWVzc2FnZSgnQ0pLJyl9JHtnZXRNZXNzYWdlKCcpJyl9YDtcbn07XG5cbmNvbnN0IGdldFVURjhDb3VudEJ5VGV4dExlbmd0aCA9ICh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRyZXR1cm4gYCR7Y291bnRCeXRlKHRleHQpfSR7Z2V0TWVzc2FnZSgnYnl0ZShzKSBpbiBVVEYtOCBlbmNvZGluZycpfWA7XG59O1xuXG5leHBvcnQge2dldENvdW50QnlUZXh0TGVuZ3RoLCBnZXRDSktDb3VudEJ5VGV4dExlbmd0aCwgZ2V0VVRGOENvdW50QnlUZXh0TGVuZ3RofTtcbiIsICJpbXBvcnQge2dldENKS0NvdW50QnlUZXh0TGVuZ3RoLCBnZXRDb3VudEJ5VGV4dExlbmd0aCwgZ2V0VVRGOENvdW50QnlUZXh0TGVuZ3RofSBmcm9tICcuLi9tb2R1bGVzL2dldENvdW50JztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5pbXBvcnQge3RpcH0gZnJvbSAnLi9Xb3JkQ291bnQubW9kdWxlLmxlc3MnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuXHR0ZXh0OiBzdHJpbmc7XG59XG5cbmNvbnN0IFdvcmRDb3VudCA9ICh7dGV4dH06IFByb3BzKSA9PiAoXG5cdDxkaXYgY2xhc3NOYW1lPXtbdGlwLCAnbm9wcmludCcsICd1aS1zdGF0ZS1oaWdobGlnaHQnLCAndWktY29ybmVyLWFsbCddfSBpZD1cImdhZGdldC13b3JkX2NvdW50LXRpcFwiPlxuXHRcdHtnZXRDb3VudEJ5VGV4dExlbmd0aCh0ZXh0KX1cblx0XHR7Z2V0Q0pLQ291bnRCeVRleHRMZW5ndGgodGV4dCl9XG5cdFx0PGJyIC8+XG5cdFx0e2dldFVURjhDb3VudEJ5VGV4dExlbmd0aCh0ZXh0KX1cblx0PC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBXb3JkQ291bnQ7XG4iLCAiaW1wb3J0IFwiZXNidWlsZC1jc3MtbW9kdWxlcy1wbHVnaW4tbnMtY3NzOnNyYy9Xb3JkQ291bnQvY29tcG9uZW50cy9Xb3JkQ291bnQubW9kdWxlLmxlc3NcIjtcbmV4cG9ydCBjb25zdCB0aXAgPSBcIldvcmRDb3VudC1tb2R1bGVfX3RpcF9IQkRuNWFfXzQxMDBcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcInRpcFwiOiB0aXBcbn07XG4gICAgICAiLCAiaW1wb3J0IHt3b3JkQ291bnR9IGZyb20gJy4vd29yZENvdW50JztcblxuY29uc3QgYWRkTGlzdGVuZXIgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudCkge1xuXHRcdCRib2R5Lm9uKCd0b3VjaHN0YXJ0IHRvdWNoZW5kJywge3Bhc3NpdmU6IHRydWV9LCAoKTogdm9pZCA9PiB7XG5cdFx0XHR3b3JkQ291bnQoJGJvZHkpO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdCRib2R5Lm9uKCdtb3VzZXVwIGtleXVwJywgKCk6IHZvaWQgPT4ge1xuXHRcdFx0d29yZENvdW50KCRib2R5KTtcblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0IHthZGRMaXN0ZW5lcn07XG4iLCAiaW1wb3J0IHthZGRMaXN0ZW5lcn0gZnJvbSAnLi9tb2R1bGVzL2FkZExpc3RlbmVyJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihhZGRMaXN0ZW5lcik7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQWtCQyxRQUFBQyxRQUFBLGdCQUFBLEdBQUEsQ0FBQTs7QUNBbEIsSUFBTUMsY0FBZUMsVUFBeUI7QUFDN0MsU0FBT0EsS0FBS0M7QUFDYjs7QUNBQSxJQUFNQyxZQUFhRixVQUF5QjtBQUMzQyxTQUFPRCxZQUNOQyxLQUNFRyxRQUFRLG9CQUFvQixHQUFHLEVBQy9CQSxRQUFRLGlDQUFpQyxJQUFJLEVBQzdDQSxRQUFRLGlDQUFpQyxLQUFLLENBQ2pEO0FBQ0Q7O0FDUEEsSUFBTUMsV0FBWUosVUFBeUI7QUFDMUMsU0FBT0QsWUFDTkMsS0FDRUcsUUFBUSxPQUFPLEVBQUUsRUFDakJBLFFBQ0Esd1RBQ0EsR0FDRCxFQUNDQSxRQUFRLFNBQVMsRUFBRSxDQUN0QjtBQUNEOztBQ1pBLElBQUFFLG9CQUF1QlAsUUFBQSxpQkFBQTtBQUV2QixJQUFNUSxrQkFBa0JBLE1BQU07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OiBbImltcG9ydF9leHRfZ2FkZ2V0MyIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiY291bnRMZW5ndGgiLCAidGV4dCIsICJsZW5ndGgiLCAiY291bnRCeXRlIiwgInJlcGxhY2UiLCAiY291bnRDSksiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgInpoIiwgIkNKSyIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiZ2V0Q291bnRCeVRleHRMZW5ndGgiLCAiY29uY2F0IiwgImdldENKS0NvdW50QnlUZXh0TGVuZ3RoIiwgImdldFVURjhDb3VudEJ5VGV4dExlbmd0aCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAidGlwIiwgIldvcmRDb3VudCIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgImlkIiwgIldvcmRDb3VudF9kZWZhdWx0IiwgIndvcmRDb3VudCIsICIkYm9keSIsICJfd2luZG93JGdldFNlbGVjdGlvbiIsICJmaW5kIiwgInJlbW92ZSIsICJ3aW5kb3ciLCAiZ2V0U2VsZWN0aW9uIiwgInRvU3RyaW5nIiwgIiRlbGVtZW50IiwgIiQiLCAiYXBwZW5kVG8iLCAic2V0VGltZW91dCIsICJmYWRlT3V0IiwgImFkZExpc3RlbmVyIiwgImRvY3VtZW50IiwgIm9uIiwgInBhc3NpdmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImdldEJvZHkiLCAidGhlbiJdCn0K
