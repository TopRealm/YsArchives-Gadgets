/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://en.wiktionary.org/wiki/MediaWiki:Gadget-CodeLinks.js}
 * @base {@link https://zh.wiktionary.org/wiki/MediaWiki:Gadget-CodeLinks.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/CodeLinks}
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

// dist/CodeLinks/CodeLinks.js
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
//! src/CodeLinks/modules/addLink.tsx
var import_ext_gadget = __toESM(require("ext.gadget.JSX"), 1);
var addLink = (element, targetTitle) => {
  if (!(element instanceof Element)) {
    throw new TypeError("Expected Element interface");
  }
  const {
    firstChild
  } = element;
  if (!(firstChild instanceof Text)) {
    throw new TypeError("Expected Text interface");
  }
  element.append(/* @__PURE__ */ import_ext_gadget.default.createElement("a", {
    href: mw.util.getUrl(targetTitle)
  }, firstChild));
};
//! src/CodeLinks/CodeLinks.ts
var import_ext_gadget3 = require("ext.gadget.Util");
//! src/CodeLinks/modules/constant.ts
/**
 * @preserve
 * @author John Gruber
 * @copyright 2002–2023 The Daring Fireball Company LLC.
 * @see {@link https://daringfireball.net/2010/07/improved_regex_for_matching_urls}
 */
var REGEX_URL = /\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()[\]{};:'".,<>?«»“”‘’]))/i;
//! src/CodeLinks/modules/processComment.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.JSX"), 1);
var processComment = (element) => {
  var _index, _ref;
  const {
    firstChild
  } = element;
  if (!(firstChild instanceof Text)) {
    throw new TypeError("Expected Text interface");
  }
  const {
    textContent
  } = firstChild;
  if (!textContent) {
    return;
  }
  const templateMatch = /(\{\{(?:#invoke:)?)([^|{}[\]\n#]+)(?=\||}})/i.exec(textContent);
  const wikilinkMatch = /\[\[([^|{}[\]\n]+)?(?:\|.*?)?]]/.exec(textContent);
  const urlMatch = REGEX_URL.exec(textContent);
  if (!(templateMatch || wikilinkMatch || urlMatch)) {
    return;
  }
  const link = /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
    className: "code-link"
  });
  let linkText = "";
  let start = (_index = (_ref = wikilinkMatch || templateMatch || urlMatch) === null || _ref === void 0 ? void 0 : _ref.index) !== null && _index !== void 0 ? _index : 0;
  if (urlMatch) {
    const [url] = urlMatch;
    linkText = url;
    link.href = url;
  } else {
    let fullPageName = "";
    if (wikilinkMatch) {
      [linkText] = wikilinkMatch;
      fullPageName = wikilinkMatch[1];
    } else if (templateMatch) {
      const prefix = templateMatch[1];
      const pageName = templateMatch[2];
      fullPageName = "".concat(prefix === "{{#invoke:" ? "Module:" : "Template:").concat(pageName);
      linkText = pageName;
      link.title = fullPageName;
      start += prefix.length;
    }
    link.href = mw.util.getUrl(fullPageName);
  }
  link.append(document.createTextNode(linkText));
  firstChild.before(link);
  const afterLink = textContent.slice(Math.max(0, start + linkText.length));
  firstChild.textContent = afterLink;
  const beforeLink = textContent.slice(0, Math.max(0, start));
  element.insertBefore(document.createTextNode(beforeLink), link);
};
//! src/CodeLinks/CodeLinks.ts
void (0, import_ext_gadget3.getBody)().then(function codeLinks($body) {
  var _iterator2 = _createForOfIteratorHelper($body.find(".mw-highlight")), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      const codeBlock = _step2.value;
      for (var _i2 = 0, _arr2 = ["c", "c1", "cm"]; _i2 < _arr2.length; _i2++) {
        const commentClass = _arr2[_i2];
        var _iterator5 = _createForOfIteratorHelper(codeBlock.querySelectorAll(".".concat(commentClass))), _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
            const comment = _step5.value;
            processComment(comment);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  const classes = {
    identifier: "n",
    functionName: "nb",
    singleQuoteString: "s1",
    doubleQuoteString: "s2"
  };
  const moduleNameElementArray = [];
  var _iterator3 = _createForOfIteratorHelper($body.find(".".concat(classes.functionName))), _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
      var _functionNameElement$, _nextElement$firstChi, _nextElement$firstChi3, _nextElementFirstValu;
      const functionNameElement = _step3.value;
      const text = (_functionNameElement$ = functionNameElement.firstChild) === null || _functionNameElement$ === void 0 ? void 0 : _functionNameElement$.nodeValue;
      if (text !== "require") {
        continue;
      }
      let nextElement = functionNameElement.nextElementSibling;
      if (!nextElement) {
        continue;
      }
      let nextElementFirstValue = (_nextElement$firstChi = nextElement.firstChild) === null || _nextElement$firstChi === void 0 ? void 0 : _nextElement$firstChi.nodeValue;
      const hasParenthesis = nextElementFirstValue === "(";
      if (hasParenthesis) {
        var _nextElement$firstChi2;
        nextElement = nextElement.nextElementSibling;
        if (!nextElement) {
          continue;
        }
        nextElementFirstValue = (_nextElement$firstChi2 = nextElement.firstChild) === null || _nextElement$firstChi2 === void 0 ? void 0 : _nextElement$firstChi2.nodeValue;
      }
      const {
        classList
      } = nextElement;
      if (!(classList.contains(classes.singleQuoteString) || classList.contains(classes.doubleQuoteString))) {
        continue;
      }
      const element = nextElement;
      const elementValue = nextElementFirstValue;
      if (!elementValue) {
        continue;
      }
      nextElement = nextElement.nextElementSibling;
      if (!nextElement) {
        continue;
      }
      nextElementFirstValue = (_nextElement$firstChi3 = nextElement.firstChild) === null || _nextElement$firstChi3 === void 0 ? void 0 : _nextElement$firstChi3.nodeValue;
      if (hasParenthesis && ((_nextElementFirstValu = nextElementFirstValue) === null || _nextElementFirstValu === void 0 ? void 0 : _nextElementFirstValu[0]) !== ")") {
        continue;
      }
      moduleNameElementArray[moduleNameElementArray.length] = element;
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  const dataModuleNameElementArray = [];
  var _iterator4 = _createForOfIteratorHelper($body.find(".".concat(classes.singleQuoteString, ",.").concat(classes.doubleQuoteString))), _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
      var _element$firstChild2, _prevElement$firstChi, _prevElement$firstChi3, _prevElement$firstChi4;
      const element = _step4.value;
      if (moduleNameElementArray.includes(element)) {
        continue;
      }
      const elementFirstValue = (_element$firstChild2 = element.firstChild) === null || _element$firstChild2 === void 0 ? void 0 : _element$firstChild2.nodeValue;
      if (!elementFirstValue || !/^["'](?:module|模[组組块]):/i.test(elementFirstValue)) {
        continue;
      }
      let prevElement = element.previousElementSibling;
      if (!prevElement) {
        continue;
      }
      let prevElementFirstValue = (_prevElement$firstChi = prevElement.firstChild) === null || _prevElement$firstChi === void 0 ? void 0 : _prevElement$firstChi.nodeValue;
      if (prevElementFirstValue === "(") {
        var _nextElement$firstChi4, _prevElement$firstChi2;
        const nextElement = element.nextElementSibling;
        if (!nextElement) {
          continue;
        }
        const nextElementFirstValue = (_nextElement$firstChi4 = nextElement.firstChild) === null || _nextElement$firstChi4 === void 0 ? void 0 : _nextElement$firstChi4.nodeValue;
        if ((nextElementFirstValue === null || nextElementFirstValue === void 0 ? void 0 : nextElementFirstValue[0]) !== ")") {
          continue;
        }
        prevElement = prevElement.previousElementSibling;
        if (!prevElement) {
          continue;
        }
        prevElementFirstValue = (_prevElement$firstChi2 = prevElement.firstChild) === null || _prevElement$firstChi2 === void 0 ? void 0 : _prevElement$firstChi2.nodeValue;
      }
      if (prevElementFirstValue !== "loadData") {
        continue;
      }
      prevElement = prevElement.previousElementSibling;
      if (!prevElement) {
        continue;
      }
      prevElementFirstValue = (_prevElement$firstChi3 = prevElement.firstChild) === null || _prevElement$firstChi3 === void 0 ? void 0 : _prevElement$firstChi3.nodeValue;
      if (prevElementFirstValue !== ".") {
        continue;
      }
      prevElement = prevElement.previousElementSibling;
      if (!prevElement) {
        continue;
      }
      prevElementFirstValue = (_prevElement$firstChi4 = prevElement.firstChild) === null || _prevElement$firstChi4 === void 0 ? void 0 : _prevElement$firstChi4.nodeValue;
      if (prevElementFirstValue !== "mw") {
        continue;
      }
      dataModuleNameElementArray[dataModuleNameElementArray.length] = element;
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  for (var _i = 0, _arr = [...moduleNameElementArray, ...dataModuleNameElementArray]; _i < _arr.length; _i++) {
    var _element$firstChild;
    const element = _arr[_i];
    const elementFirstValue = (_element$firstChild = element.firstChild) === null || _element$firstChild === void 0 ? void 0 : _element$firstChild.nodeValue;
    if (!elementFirstValue) {
      continue;
    }
    const moduleName = elementFirstValue.slice(1, -1);
    const targetTitle = /^(?:module|模[组組块])?:/i.test(moduleName) ? moduleName : "Help:Lua#".concat(moduleName);
    addLink(element, targetTitle);
  }
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NvZGVMaW5rcy9tb2R1bGVzL2FkZExpbmsudHN4IiwgInNyYy9Db2RlTGlua3MvQ29kZUxpbmtzLnRzIiwgInNyYy9Db2RlTGlua3MvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvQ29kZUxpbmtzL21vZHVsZXMvcHJvY2Vzc0NvbW1lbnQudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuXG5jb25zdCBhZGRMaW5rID0gKGVsZW1lbnQ6IEVsZW1lbnQsIHRhcmdldFRpdGxlOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0aWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgRWxlbWVudCBpbnRlcmZhY2UnKTtcblx0fVxuXG5cdGNvbnN0IHtmaXJzdENoaWxkfSA9IGVsZW1lbnQ7XG5cdGlmICghKGZpcnN0Q2hpbGQgaW5zdGFuY2VvZiBUZXh0KSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFRleHQgaW50ZXJmYWNlJyk7XG5cdH1cblxuXHRlbGVtZW50LmFwcGVuZCg8YSBocmVmPXttdy51dGlsLmdldFVybCh0YXJnZXRUaXRsZSl9PntmaXJzdENoaWxkfTwvYT4pO1xufTtcblxuZXhwb3J0IHthZGRMaW5rfTtcbiIsICJpbXBvcnQge2FkZExpbmt9IGZyb20gJy4vbW9kdWxlcy9hZGRMaW5rJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7cHJvY2Vzc0NvbW1lbnR9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzQ29tbWVudCc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gY29kZUxpbmtzKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRmb3IgKGNvbnN0IGNvZGVCbG9jayBvZiAkYm9keS5maW5kKCcubXctaGlnaGxpZ2h0JykpIHtcblx0XHRmb3IgKGNvbnN0IGNvbW1lbnRDbGFzcyBvZiBbJ2MnLCAnYzEnLCAnY20nXSkge1xuXHRcdFx0Zm9yIChjb25zdCBjb21tZW50IG9mIGNvZGVCbG9jay5xdWVyeVNlbGVjdG9yQWxsKGAuJHtjb21tZW50Q2xhc3N9YCkpIHtcblx0XHRcdFx0cHJvY2Vzc0NvbW1lbnQoY29tbWVudCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gTGluayBtb2R1bGUgbmFtZXMgYWZ0ZXIgYHJlcXVpcmVgIGFuZCBgbXcubG9hZERhdGFgLCBhbmQgdHJhY2tpbmcgdGVtcGxhdGVcblx0Ly8gbmFtZXMgYWZ0ZXIgYHJlcXVpcmUoXCJNb2R1bGU6ZGVidWdcIikudHJhY2tgLlxuXHRjb25zdCBjbGFzc2VzID0ge1xuXHRcdGlkZW50aWZpZXI6ICduJyxcblx0XHRmdW5jdGlvbk5hbWU6ICduYicsXG5cdFx0c2luZ2xlUXVvdGVTdHJpbmc6ICdzMScsXG5cdFx0ZG91YmxlUXVvdGVTdHJpbmc6ICdzMicsXG5cdH0gYXMgY29uc3Qgc2F0aXNmaWVzIFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG5cblx0Y29uc3QgbW9kdWxlTmFtZUVsZW1lbnRBcnJheTogRWxlbWVudFtdID0gW107XG5cdGZvciAoY29uc3QgZnVuY3Rpb25OYW1lRWxlbWVudCBvZiAkYm9keS5maW5kKGAuJHtjbGFzc2VzLmZ1bmN0aW9uTmFtZX1gKSkge1xuXHRcdGNvbnN0IHRleHQ6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQgPSBmdW5jdGlvbk5hbWVFbGVtZW50LmZpcnN0Q2hpbGQ/Lm5vZGVWYWx1ZTtcblx0XHRpZiAodGV4dCAhPT0gJ3JlcXVpcmUnKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRsZXQgbmV4dEVsZW1lbnQ6IEVsZW1lbnQgfCBudWxsID0gZnVuY3Rpb25OYW1lRWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG5cdFx0aWYgKCFuZXh0RWxlbWVudCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0bGV0IG5leHRFbGVtZW50Rmlyc3RWYWx1ZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCA9IG5leHRFbGVtZW50LmZpcnN0Q2hpbGQ/Lm5vZGVWYWx1ZTtcblx0XHRjb25zdCBoYXNQYXJlbnRoZXNpczogYm9vbGVhbiA9IG5leHRFbGVtZW50Rmlyc3RWYWx1ZSA9PT0gJygnO1xuXHRcdGlmIChoYXNQYXJlbnRoZXNpcykge1xuXHRcdFx0bmV4dEVsZW1lbnQgPSBuZXh0RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG5cdFx0XHRpZiAoIW5leHRFbGVtZW50KSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0bmV4dEVsZW1lbnRGaXJzdFZhbHVlID0gbmV4dEVsZW1lbnQuZmlyc3RDaGlsZD8ubm9kZVZhbHVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHtjbGFzc0xpc3R9ID0gbmV4dEVsZW1lbnQ7XG5cdFx0aWYgKCEoY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzZXMuc2luZ2xlUXVvdGVTdHJpbmcpIHx8IGNsYXNzTGlzdC5jb250YWlucyhjbGFzc2VzLmRvdWJsZVF1b3RlU3RyaW5nKSkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGVsZW1lbnQ6IEVsZW1lbnQgPSBuZXh0RWxlbWVudDtcblx0XHRjb25zdCBlbGVtZW50VmFsdWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQgPSBuZXh0RWxlbWVudEZpcnN0VmFsdWU7XG5cdFx0aWYgKCFlbGVtZW50VmFsdWUpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdG5leHRFbGVtZW50ID0gbmV4dEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xuXHRcdGlmICghbmV4dEVsZW1lbnQpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdG5leHRFbGVtZW50Rmlyc3RWYWx1ZSA9IG5leHRFbGVtZW50LmZpcnN0Q2hpbGQ/Lm5vZGVWYWx1ZTtcblx0XHRpZiAoaGFzUGFyZW50aGVzaXMgJiYgbmV4dEVsZW1lbnRGaXJzdFZhbHVlPy5bMF0gIT09ICcpJykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0bW9kdWxlTmFtZUVsZW1lbnRBcnJheVttb2R1bGVOYW1lRWxlbWVudEFycmF5Lmxlbmd0aF0gPSBlbGVtZW50O1xuXHR9XG5cblx0Y29uc3QgZGF0YU1vZHVsZU5hbWVFbGVtZW50QXJyYXk6IEVsZW1lbnRbXSA9IFtdO1xuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGJvZHkuZmluZChgLiR7Y2xhc3Nlcy5zaW5nbGVRdW90ZVN0cmluZ30sLiR7Y2xhc3Nlcy5kb3VibGVRdW90ZVN0cmluZ31gKSkge1xuXHRcdGlmIChtb2R1bGVOYW1lRWxlbWVudEFycmF5LmluY2x1ZGVzKGVsZW1lbnQpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBlbGVtZW50Rmlyc3RWYWx1ZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCA9IGVsZW1lbnQuZmlyc3RDaGlsZD8ubm9kZVZhbHVlO1xuXHRcdGlmICghZWxlbWVudEZpcnN0VmFsdWUgfHwgIS9eW1wiJ10oPzptb2R1bGV85qihW+e7hOe1hOWdl10pOi9pLnRlc3QoZWxlbWVudEZpcnN0VmFsdWUpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRsZXQgcHJldkVsZW1lbnQ6IEVsZW1lbnQgfCBudWxsID0gZWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuXHRcdGlmICghcHJldkVsZW1lbnQpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGxldCBwcmV2RWxlbWVudEZpcnN0VmFsdWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQgPSBwcmV2RWxlbWVudC5maXJzdENoaWxkPy5ub2RlVmFsdWU7XG5cdFx0aWYgKHByZXZFbGVtZW50Rmlyc3RWYWx1ZSA9PT0gJygnKSB7XG5cdFx0XHRjb25zdCBuZXh0RWxlbWVudDogRWxlbWVudCB8IG51bGwgPSBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcblx0XHRcdGlmICghbmV4dEVsZW1lbnQpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBuZXh0RWxlbWVudEZpcnN0VmFsdWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQgPSBuZXh0RWxlbWVudC5maXJzdENoaWxkPy5ub2RlVmFsdWU7XG5cdFx0XHRpZiAobmV4dEVsZW1lbnRGaXJzdFZhbHVlPy5bMF0gIT09ICcpJykge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHByZXZFbGVtZW50ID0gcHJldkVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZztcblx0XHRcdGlmICghcHJldkVsZW1lbnQpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRwcmV2RWxlbWVudEZpcnN0VmFsdWUgPSBwcmV2RWxlbWVudC5maXJzdENoaWxkPy5ub2RlVmFsdWU7XG5cdFx0fVxuXHRcdGlmIChwcmV2RWxlbWVudEZpcnN0VmFsdWUgIT09ICdsb2FkRGF0YScpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHByZXZFbGVtZW50ID0gcHJldkVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZztcblx0XHRpZiAoIXByZXZFbGVtZW50KSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRwcmV2RWxlbWVudEZpcnN0VmFsdWUgPSBwcmV2RWxlbWVudC5maXJzdENoaWxkPy5ub2RlVmFsdWU7XG5cdFx0aWYgKHByZXZFbGVtZW50Rmlyc3RWYWx1ZSAhPT0gJy4nKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRwcmV2RWxlbWVudCA9IHByZXZFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG5cdFx0aWYgKCFwcmV2RWxlbWVudCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0cHJldkVsZW1lbnRGaXJzdFZhbHVlID0gcHJldkVsZW1lbnQuZmlyc3RDaGlsZD8ubm9kZVZhbHVlO1xuXHRcdGlmIChwcmV2RWxlbWVudEZpcnN0VmFsdWUgIT09ICdtdycpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGRhdGFNb2R1bGVOYW1lRWxlbWVudEFycmF5W2RhdGFNb2R1bGVOYW1lRWxlbWVudEFycmF5Lmxlbmd0aF0gPSBlbGVtZW50O1xuXHR9XG5cblx0Ly8gTGluayBtb2R1bGUgbmFtZXMgdG8gbW9kdWxlIHBhZ2VzLFxuXHQvLyBvciB0byB0aGUgc2VjdGlvbiBpbiB0aGUgU2NyaWJ1bnRvIG1hbnVhbC5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mIFsuLi5tb2R1bGVOYW1lRWxlbWVudEFycmF5LCAuLi5kYXRhTW9kdWxlTmFtZUVsZW1lbnRBcnJheV0pIHtcblx0XHRjb25zdCBlbGVtZW50Rmlyc3RWYWx1ZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCA9IGVsZW1lbnQuZmlyc3RDaGlsZD8ubm9kZVZhbHVlO1xuXHRcdGlmICghZWxlbWVudEZpcnN0VmFsdWUpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IG1vZHVsZU5hbWU6IHN0cmluZyA9IGVsZW1lbnRGaXJzdFZhbHVlLnNsaWNlKDEsIC0xKTtcblx0XHRjb25zdCB0YXJnZXRUaXRsZTogc3RyaW5nID0gL14oPzptb2R1bGV85qihW+e7hOe1hOWdl10pPzovaS50ZXN0KG1vZHVsZU5hbWUpXG5cdFx0XHQ/IG1vZHVsZU5hbWVcblx0XHRcdDogYEhlbHA6THVhIyR7bW9kdWxlTmFtZX1gO1xuXHRcdGFkZExpbmsoZWxlbWVudCwgdGFyZ2V0VGl0bGUpO1xuXHR9XG59KTtcbiIsICIvKipcbiAqIEBwcmVzZXJ2ZVxuICogQGF1dGhvciBKb2huIEdydWJlclxuICogQGNvcHlyaWdodCAyMDAy4oCTMjAyMyBUaGUgRGFyaW5nIEZpcmViYWxsIENvbXBhbnkgTExDLlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9kYXJpbmdmaXJlYmFsbC5uZXQvMjAxMC8wNy9pbXByb3ZlZF9yZWdleF9mb3JfbWF0Y2hpbmdfdXJsc31cbiAqL1xuY29uc3QgUkVHRVhfVVJMOiBSZWdFeHAgPVxuXHQvXFxiKCg/Omh0dHBzPzpcXC9cXC98d3d3XFxkezAsM31bLl18W2EtejAtOS4tXStbLl1bYS16XXsyLDR9XFwvKSg/OlteXFxzKCk8Pl0rfFxcKChbXlxccygpPD5dK3woXFwoW15cXHMoKTw+XStcXCkpKSpcXCkpKyg/OlxcKChbXlxccygpPD5dK3woXFwoW15cXHMoKTw+XStcXCkpKSpcXCl8W15cXHNgISgpW1xcXXt9OzonXCIuLDw+P8KrwrvigJzigJ3igJjigJldKSkvaTtcblxuZXhwb3J0IHtSRUdFWF9VUkx9O1xuIiwgImltcG9ydCB7UkVHRVhfVVJMfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5cbmNvbnN0IHByb2Nlc3NDb21tZW50ID0gKGVsZW1lbnQ6IEVsZW1lbnQpOiB2b2lkID0+IHtcblx0Y29uc3Qge2ZpcnN0Q2hpbGR9ID0gZWxlbWVudDtcblx0aWYgKCEoZmlyc3RDaGlsZCBpbnN0YW5jZW9mIFRleHQpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgVGV4dCBpbnRlcmZhY2UnKTtcblx0fVxuXG5cdGNvbnN0IHt0ZXh0Q29udGVudH0gPSBmaXJzdENoaWxkO1xuXHRpZiAoIXRleHRDb250ZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgdGVtcGxhdGVNYXRjaDogUmVnRXhwRXhlY0FycmF5IHwgbnVsbCA9IC8oXFx7XFx7KD86I2ludm9rZTopPykoW158e31bXFxdXFxuI10rKSg/PVxcfHx9fSkvaS5leGVjKHRleHRDb250ZW50KTtcblx0Y29uc3Qgd2lraWxpbmtNYXRjaDogUmVnRXhwRXhlY0FycmF5IHwgbnVsbCA9IC9cXFtcXFsoW158e31bXFxdXFxuXSspPyg/OlxcfC4qPyk/XV0vLmV4ZWModGV4dENvbnRlbnQpO1xuXHRjb25zdCB1cmxNYXRjaDogUmVnRXhwRXhlY0FycmF5IHwgbnVsbCA9IFJFR0VYX1VSTC5leGVjKHRleHRDb250ZW50KTtcblx0aWYgKCEodGVtcGxhdGVNYXRjaCB8fCB3aWtpbGlua01hdGNoIHx8IHVybE1hdGNoKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGxpbmsgPSAoPGEgY2xhc3NOYW1lPVwiY29kZS1saW5rXCIgLz4pIGFzIEhUTUxBbmNob3JFbGVtZW50O1xuXG5cdGxldCBsaW5rVGV4dDogc3RyaW5nID0gJyc7XG5cdGxldCBzdGFydDogbnVtYmVyID0gKHdpa2lsaW5rTWF0Y2ggfHwgdGVtcGxhdGVNYXRjaCB8fCB1cmxNYXRjaCk/LmluZGV4ID8/IDA7XG5cdGlmICh1cmxNYXRjaCkge1xuXHRcdGNvbnN0IFt1cmxdID0gdXJsTWF0Y2g7XG5cdFx0bGlua1RleHQgPSB1cmw7XG5cdFx0bGluay5ocmVmID0gdXJsO1xuXHR9IGVsc2Uge1xuXHRcdGxldCBmdWxsUGFnZU5hbWU6IHN0cmluZyA9ICcnO1xuXHRcdGlmICh3aWtpbGlua01hdGNoKSB7XG5cdFx0XHRbbGlua1RleHRdID0gd2lraWxpbmtNYXRjaDtcblx0XHRcdGZ1bGxQYWdlTmFtZSA9IHdpa2lsaW5rTWF0Y2hbMV0gYXMgc3RyaW5nO1xuXHRcdH0gZWxzZSBpZiAodGVtcGxhdGVNYXRjaCkge1xuXHRcdFx0Y29uc3QgcHJlZml4OiBzdHJpbmcgPSB0ZW1wbGF0ZU1hdGNoWzFdIGFzIHN0cmluZztcblx0XHRcdGNvbnN0IHBhZ2VOYW1lOiBzdHJpbmcgPSB0ZW1wbGF0ZU1hdGNoWzJdIGFzIHN0cmluZztcblx0XHRcdGZ1bGxQYWdlTmFtZSA9IGAke3ByZWZpeCA9PT0gJ3t7I2ludm9rZTonID8gJ01vZHVsZTonIDogJ1RlbXBsYXRlOid9JHtwYWdlTmFtZX1gO1xuXHRcdFx0bGlua1RleHQgPSBwYWdlTmFtZTtcblx0XHRcdGxpbmsudGl0bGUgPSBmdWxsUGFnZU5hbWU7XG5cdFx0XHRzdGFydCArPSBwcmVmaXgubGVuZ3RoO1xuXHRcdH1cblx0XHRsaW5rLmhyZWYgPSBtdy51dGlsLmdldFVybChmdWxsUGFnZU5hbWUpO1xuXHR9XG5cblx0bGluay5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobGlua1RleHQpKTtcblx0Zmlyc3RDaGlsZC5iZWZvcmUobGluayk7XG5cblx0Y29uc3QgYWZ0ZXJMaW5rOiBzdHJpbmcgPSB0ZXh0Q29udGVudC5zbGljZShNYXRoLm1heCgwLCBzdGFydCArIGxpbmtUZXh0Lmxlbmd0aCkpO1xuXHRmaXJzdENoaWxkLnRleHRDb250ZW50ID0gYWZ0ZXJMaW5rO1xuXG5cdGNvbnN0IGJlZm9yZUxpbms6IHN0cmluZyA9IHRleHRDb250ZW50LnNsaWNlKDAsIE1hdGgubWF4KDAsIHN0YXJ0KSk7XG5cdGVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGJlZm9yZUxpbmspLCBsaW5rKTtcbn07XG5cbmV4cG9ydCB7cHJvY2Vzc0NvbW1lbnR9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBa0JDLFFBQUFDLFFBQUEsZ0JBQUEsR0FBQSxDQUFBO0FBRWxCLElBQU1DLFVBQVVBLENBQUNDLFNBQWtCQyxnQkFBOEI7QUFDaEUsTUFBSSxFQUFFRCxtQkFBbUJFLFVBQVU7QUFDbEMsVUFBTSxJQUFJQyxVQUFVLDRCQUE0QjtFQUNqRDtBQUVBLFFBQU07SUFBQ0M7RUFBVSxJQUFJSjtBQUNyQixNQUFJLEVBQUVJLHNCQUFzQkMsT0FBTztBQUNsQyxVQUFNLElBQUlGLFVBQVUseUJBQXlCO0VBQzlDO0FBRUFILFVBQVFNLE9BQU9WLGtDQUFBVyxRQUFBQyxjQUFDLEtBQUE7SUFBRUMs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Q0QsYUFBYTtBQUNqQjtNQUNEO0FBRUFFLCtCQUFBTix5QkFBd0JJLFlBQVlqRyxnQkFBQSxRQUFBNkYsMkJBQUEsU0FBQSxTQUFaQSx1QkFBd0JmO0FBQ2hELFVBQUlxQiwwQkFBMEIsTUFBTTtBQUNuQztNQUNEO0FBRUFaLGlDQUEyQkEsMkJBQTJCeEQsTUFBTSxJQUFJbkM7SUFDakU7RUFBQSxTQUFBaUUsS0FBQTtBQUFBMkIsZUFBQTFCLEVBQUFELEdBQUE7RUFBQSxVQUFBO0FBQUEyQixlQUFBekIsRUFBQTtFQUFBO0FBSUEsV0FBQXVDLEtBQUEsR0FBQUMsT0FBc0IsQ0FBQyxHQUFHbEMsd0JBQXdCLEdBQUdrQiwwQkFBMEIsR0FBQWUsS0FBQUMsS0FBQXhFLFFBQUF1RSxNQUFHO0FBQUEsUUFBQUU7QUFBbEYsVUFBVzVHLFVBQUEyRyxLQUFBRCxFQUFBO0FBQ1YsVUFBTVAscUJBQUFTLHNCQUErQzVHLFFBQVFJLGdCQUFBLFFBQUF3Ryx3QkFBQSxTQUFBLFNBQVJBLG9CQUFvQjFCO0FBQ3pFLFFBQUksQ0FBQ2lCLG1CQUFtQjtBQUN2QjtJQUNEO0FBRUEsVUFBTVUsYUFBcUJWLGtCQUFrQjNELE1BQU0sR0FBRyxFQUFFO0FBQ3hELFVBQU12QyxjQUFzQix3QkFBd0JtRyxLQUFLUyxVQUFVLElBQ2hFQSxhQUFBLFlBQUE1RSxPQUNZNEUsVUFBVTtBQUN6QjlHLFlBQVFDLFNBQVNDLFdBQVc7RUFDN0I7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldCIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiYWRkTGluayIsICJlbGVtZW50IiwgInRhcmdldFRpdGxlIiwgIkVsZW1lbnQiLCAiVHlwZUVycm9yIiwgImZpcnN0Q2hpbGQiLCAiVGV4dCIsICJhcHBlbmQiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImhyZWYiLCAibXciLCAidXRpbCIsICJnZXRVcmwiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgIlJFR0VYX1VSTCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAicHJvY2Vzc0NvbW1lbnQiLCAiX2luZGV4IiwgIl9yZWYiLCAidGV4dENvbnRlbnQiLCAidGVtcGxhdGVNYXRjaCIsICJleGVjIiwgIndpa2lsaW5rTWF0Y2giLCAidXJsTWF0Y2giLCAibGluayIsICJjbGFzc05hbWUiLCAibGlua1RleHQiLCAic3RhcnQiLCAiaW5kZXgiLCAidXJsIiwgImZ1bGxQYWdlTmFtZSIsICJwcmVmaXgiLCAicGFnZU5hbWUiLCAiY29uY2F0IiwgInRpdGxlIiwgImxlbmd0aCIsICJkb2N1bWVudCIsICJjcmVhdGVUZXh0Tm9kZSIsICJiZWZvcmUiLCAiYWZ0ZXJMaW5rIiwgInNsaWNlIiwgIk1hdGgiLCAibWF4IiwgImJlZm9yZUxpbmsiLCAiaW5zZXJ0QmVmb3JlIiwgImdldEJvZHkiLCAidGhlbiIsICJjb2RlTGlua3MiLCAiJGJvZHkiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJmaW5kIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJjb2RlQmxvY2siLCAidmFsdWUiLCAiX2kyIiwgIl9hcnIyIiwgImNvbW1lbnRDbGFzcyIsICJfaXRlcmF0b3I1IiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAiX3N0ZXA1IiwgImNvbW1lbnQiLCAiZXJyIiwgImUiLCAiZiIsICJjbGFzc2VzIiwgImlkZW50aWZpZXIiLCAiZnVuY3Rpb25OYW1lIiwgInNpbmdsZVF1b3RlU3RyaW5nIiwgImRvdWJsZVF1b3RlU3RyaW5nIiwgIm1vZHVsZU5hbWVFbGVtZW50QXJyYXkiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiX2Z1bmN0aW9uTmFtZUVsZW1lbnQkIiwgIl9uZXh0RWxlbWVudCRmaXJzdENoaSIsICJfbmV4dEVsZW1lbnQkZmlyc3RDaGkzIiwgIl9uZXh0RWxlbWVudEZpcnN0VmFsdSIsICJmdW5jdGlvbk5hbWVFbGVtZW50IiwgInRleHQiLCAibm9kZVZhbHVlIiwgIm5leHRFbGVtZW50IiwgIm5leHRFbGVtZW50U2libGluZyIsICJuZXh0RWxlbWVudEZpcnN0VmFsdWUiLCAiaGFzUGFyZW50aGVzaXMiLCAiX25leHRFbGVtZW50JGZpcnN0Q2hpMiIsICJjbGFzc0xpc3QiLCAiY29udGFpbnMiLCAiZWxlbWVudFZhbHVlIiwgImRhdGFNb2R1bGVOYW1lRWxlbWVudEFycmF5IiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgIl9lbGVtZW50JGZpcnN0Q2hpbGQyIiwgIl9wcmV2RWxlbWVudCRmaXJzdENoaSIsICJfcHJldkVsZW1lbnQkZmlyc3RDaGkzIiwgIl9wcmV2RWxlbWVudCRmaXJzdENoaTQiLCAiaW5jbHVkZXMiLCAiZWxlbWVudEZpcnN0VmFsdWUiLCAidGVzdCIsICJwcmV2RWxlbWVudCIsICJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwgInByZXZFbGVtZW50Rmlyc3RWYWx1ZSIsICJfbmV4dEVsZW1lbnQkZmlyc3RDaGk0IiwgIl9wcmV2RWxlbWVudCRmaXJzdENoaTIiLCAiX2kiLCAiX2FyciIsICJfZWxlbWVudCRmaXJzdENoaWxkIiwgIm1vZHVsZU5hbWUiXQp9Cg==
