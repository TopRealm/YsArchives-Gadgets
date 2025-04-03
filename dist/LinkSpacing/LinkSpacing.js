/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/LinkSpacing}
 * @license CC-BY-SA-4.0 {@link https://youshou.wiki/wiki/H:CC-BY-SA-4.0}
 */

/**
 * Inspired by Kcx36 at {@link https://zh.wikipedia.org/w/index.php?diff=prev&oldid=84670731}
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

// dist/LinkSpacing/LinkSpacing.js
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
//! src/LinkSpacing/util/LinkSpace.tsx
var import_ext_gadget = __toESM(require("ext.gadget.JSX"), 1);
//! src/LinkSpacing/util/LinkSpacing.module.less
var linkSpace = "LinkSpacing-module__linkSpace_E9P2BW__492";
//! src/LinkSpacing/util/LinkSpace.tsx
var LinkSpace = () => /* @__PURE__ */ import_ext_gadget.default.createElement("span", {
  className: linkSpace
});
//! src/LinkSpacing/LinkSpacing.ts
var links = document.querySelectorAll(".mw-parser-output a");
var _iterator2 = _createForOfIteratorHelper(links.entries());
var _step2;
try {
  for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
    const [index, link] = _step2.value;
    if (!(index > 0)) {
      continue;
    }
    const beforeElement = links[index - 1];
    if (!beforeElement) {
      continue;
    }
    if (beforeElement.nextSibling === link) {
      const spacer = LinkSpace().cloneNode();
      link.before(spacer, link);
    }
  }
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0xpbmtTcGFjaW5nL3V0aWwvTGlua1NwYWNlLnRzeCIsICJzcmMvTGlua1NwYWNpbmcvdXRpbC9MaW5rU3BhY2luZy5tb2R1bGUubGVzcyIsICJzcmMvTGlua1NwYWNpbmcvTGlua1NwYWNpbmcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5pbXBvcnQge2xpbmtTcGFjZX0gZnJvbSAnLi9MaW5rU3BhY2luZy5tb2R1bGUubGVzcyc7XG5cbmNvbnN0IExpbmtTcGFjZSA9ICgpID0+IDxzcGFuIGNsYXNzTmFtZT17bGlua1NwYWNlfSAvPjtcblxuZXhwb3J0IHtMaW5rU3BhY2V9O1xuIiwgImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvTGlua1NwYWNpbmcvdXRpbC9MaW5rU3BhY2luZy5tb2R1bGUubGVzc1wiO1xuZXhwb3J0IGNvbnN0IGxpbmtTcGFjZSA9IFwiTGlua1NwYWNpbmctbW9kdWxlX19saW5rU3BhY2VfRTlQMkJXX180OTJcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcImxpbmtTcGFjZVwiOiBsaW5rU3BhY2Vcbn07XG4gICAgICAiLCAiaW1wb3J0IHtMaW5rU3BhY2V9IGZyb20gJy4vdXRpbC9MaW5rU3BhY2UnO1xuXG5jb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tdy1wYXJzZXItb3V0cHV0IGEnKTtcblxuZm9yIChjb25zdCBbaW5kZXgsIGxpbmtdIG9mIGxpbmtzLmVudHJpZXMoKSkge1xuXHRpZiAoIShpbmRleCA+IDApKSB7XG5cdFx0Y29udGludWU7XG5cdH1cblxuXHRjb25zdCBiZWZvcmVFbGVtZW50ID0gbGlua3NbaW5kZXggLSAxXTtcblx0aWYgKCFiZWZvcmVFbGVtZW50KSB7XG5cdFx0Y29udGludWU7XG5cdH1cblxuXHRpZiAoYmVmb3JlRWxlbWVudC5uZXh0U2libGluZyA9PT0gbGluaykge1xuXHRcdGNvbnN0IHNwYWNlciA9IExpbmtTcGFjZSgpLmNsb25lTm9kZSgpO1xuXHRcdGxpbmsuYmVmb3JlKHNwYWNlciwgbGluayk7XG5cdH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBa0JDLFFBQUFDLFFBQUEsZ0JBQUEsR0FBQSxDQUFBOztBQ0NYLElBQU1DLFlBQVk7O0FERXpCLElBQU1DLFlBQVlBLE1BQU1KLGtDQUFBSyxRQUFBQyxjQUFDLFFBQUE7RUFBS0MsV0FBV0o7QUFBQSxDQUFXOztBRURwRCxJQUFNSyxRQUFRQyxTQUFTQyxpQkFBaUIscUJBQXFCO0FBQUEsSUFBQUMsYUFBQUMsMkJBRWpDSixNQUFNSyxRQUFRLENBQUE7QUFGbUIsSUFFbkJDO0FBQUEsSUFBQTtBQUExQyxPQUFBSCxXQUFBSSxFQUFBLEdBQUEsRUFBQUQsU0FBQUgsV0FBQUssRUFBQSxHQUFBQyxRQUE2QztBQUFBLFVBQWxDLENBQUNDLE9BQU9DLElBQUksSUFBQUwsT0FBQU07QUFDdEIsUUFBSSxFQUFFRixRQUFRLElBQUk7QUFDakI7SUFDRDtBQUVBLFVBQU1HLGdCQUFnQmIsTUFBTVUsUUFBUSxDQUFDO0FBQ3JDLFFBQUksQ0FBQ0csZUFBZTtBQUNuQjtJQUNEO0FBRUEsUUFBSUEsY0FBY0MsZ0JBQWdCSCxNQUFNO0FBQ3ZDLFlBQU1JLFNBQVNuQixVQUFVLEVBQUVvQixVQUFVO0FBQ3JDTCxXQUFLTSxPQUFPRixRQUFRSixJQUFJO0lBQ3pCO0VBQ0Q7QUFBQSxTQUFBTyxLQUFBO0FBQUFmLGFBQUFnQixFQUFBRCxHQUFBO0FBQUEsVUFBQTtBQUFBZixhQUFBaUIsRUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldCIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAibGlua1NwYWNlIiwgIkxpbmtTcGFjZSIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgImxpbmtzIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJlbnRyaWVzIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJpbmRleCIsICJsaW5rIiwgInZhbHVlIiwgImJlZm9yZUVsZW1lbnQiLCAibmV4dFNpYmxpbmciLCAic3BhY2VyIiwgImNsb25lTm9kZSIsICJiZWZvcmUiLCAiZXJyIiwgImUiLCAiZiJdCn0K
