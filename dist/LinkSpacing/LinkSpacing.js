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
var linkSpace = "LinkSpacing-module__linkSpace_E9P2BW__4100";
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
    if (link.classList.contains("mw-file-description") || link.classList.contains("mw-file-source") || beforeElement.classList.contains("mw-file-description") || beforeElement.classList.contains("mw-file-source") || link.querySelector("img") || beforeElement.querySelector("img")) {
      continue;
    }
    if (beforeElement.nextSibling === link) {
      const spacer = LinkSpace().cloneNode();
      link.before(spacer);
    }
  }
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0xpbmtTcGFjaW5nL3V0aWwvTGlua1NwYWNlLnRzeCIsICJzcmMvTGlua1NwYWNpbmcvdXRpbC9MaW5rU3BhY2luZy5tb2R1bGUubGVzcyIsICJzcmMvTGlua1NwYWNpbmcvTGlua1NwYWNpbmcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5pbXBvcnQge2xpbmtTcGFjZX0gZnJvbSAnLi9MaW5rU3BhY2luZy5tb2R1bGUubGVzcyc7XG5cbmNvbnN0IExpbmtTcGFjZSA9ICgpID0+IDxzcGFuIGNsYXNzTmFtZT17bGlua1NwYWNlfSAvPjtcblxuZXhwb3J0IHtMaW5rU3BhY2V9O1xuIiwgImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvTGlua1NwYWNpbmcvdXRpbC9MaW5rU3BhY2luZy5tb2R1bGUubGVzc1wiO1xuZXhwb3J0IGNvbnN0IGxpbmtTcGFjZSA9IFwiTGlua1NwYWNpbmctbW9kdWxlX19saW5rU3BhY2VfRTlQMkJXX180MTAwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJsaW5rU3BhY2VcIjogbGlua1NwYWNlXG59O1xuICAgICAgIiwgImltcG9ydCB7TGlua1NwYWNlfSBmcm9tICcuL3V0aWwvTGlua1NwYWNlJztcblxuY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubXctcGFyc2VyLW91dHB1dCBhJyk7XG5cbmZvciAoY29uc3QgW2luZGV4LCBsaW5rXSBvZiBsaW5rcy5lbnRyaWVzKCkpIHtcblx0aWYgKCEoaW5kZXggPiAwKSkge1xuXHRcdGNvbnRpbnVlO1xuXHR9XG5cblx0Y29uc3QgYmVmb3JlRWxlbWVudCA9IGxpbmtzW2luZGV4IC0gMV07XG5cdGlmICghYmVmb3JlRWxlbWVudCkge1xuXHRcdGNvbnRpbnVlO1xuXHR9XG5cblx0aWYgKFxuXHRcdGxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKCdtdy1maWxlLWRlc2NyaXB0aW9uJykgfHxcblx0XHRsaW5rLmNsYXNzTGlzdC5jb250YWlucygnbXctZmlsZS1zb3VyY2UnKSB8fFxuXHRcdGJlZm9yZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtdy1maWxlLWRlc2NyaXB0aW9uJykgfHxcblx0XHRiZWZvcmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbXctZmlsZS1zb3VyY2UnKSB8fFxuXHRcdGxpbmsucXVlcnlTZWxlY3RvcignaW1nJykgfHxcblx0XHRiZWZvcmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXG5cdCkge1xuXHRcdGNvbnRpbnVlO1xuXHR9XG5cblx0aWYgKGJlZm9yZUVsZW1lbnQubmV4dFNpYmxpbmcgPT09IGxpbmspIHtcblx0XHRjb25zdCBzcGFjZXIgPSBMaW5rU3BhY2UoKS5jbG9uZU5vZGUoKTtcblx0XHRsaW5rLmJlZm9yZShzcGFjZXIpO1xuXHR9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQWtCQyxRQUFBQyxRQUFBLGdCQUFBLEdBQUEsQ0FBQTs7QUNDWCxJQUFNQyxZQUFZOztBREV6QixJQUFNQyxZQUFZQSxNQUFNSixrQ0FBQUssUUFBQUMsY0FBQyxRQUFBO0VBQUtDLFdBQVdKO0FBQUEsQ0FBVzs7QUVEcEQsSUFBTUssUUFBUUMsU0FBU0MsaUJBQWlCLHFCQUFxQjtBQUFBLElBQUFDLGFBQUFDLDJCQUVqQ0osTUFBTUssUUFBUSxDQUFBO0FBRm1CLElBRW5CQztBQUFBLElBQUE7QUFBMUMsT0FBQUgsV0FBQUksRUFBQSxHQUFBLEVBQUFELFNBQUFILFdBQUFLLEVBQUEsR0FBQUMsUUFBNkM7QUFBQSxVQUFsQyxDQUFDQyxPQUFPQyxJQUFJLElBQUFMLE9BQUFNO0FBQ3RCLFFBQUksRUFBRUYsUUFBUSxJQUFJO0FBQ2pCO0lBQ0Q7QUFFQSxVQUFNRyxnQkFBZ0JiLE1BQU1VLFFBQVEsQ0FBQztBQUNyQyxRQUFJLENBQUNHLGVBQWU7QUFDbkI7SUFDRDtBQUVBLFFBQ0NGLEtBQUtHLFVBQVVDLFNBQVMscUJBQXFCLEtBQzdDSixLQUFLRyxVQUFVQyxTQUFTLGdCQUFnQixLQUN4Q0YsY0FBY0MsVUFBVUMsU0FBUyxxQkFBcUIsS0FDdERGLGNBQWNDLFVBQVVDLFNBQVMsZ0JBQWdCLEtBQ2pESixLQUFLSyxjQUFjLEtBQUssS0FDeEJILGNBQWNHLGNBQWMsS0FBSyxHQUNoQztBQUNEO0lBQ0Q7QUFFQSxRQUFJSCxjQUFjSSxnQkFBZ0JOLE1BQU07QUFDdkMsWUFBTU8sU0FBU3RCLFVBQVUsRUFBRXVCLFVBQVU7QUFDckNSLFdBQUtTLE9BQU9GLE1BQU07SUFDbkI7RUFDRDtBQUFBLFNBQUFHLEtBQUE7QUFBQWxCLGFBQUFtQixFQUFBRCxHQUFBO0FBQUEsVUFBQTtBQUFBbEIsYUFBQW9CLEVBQUE7QUFBQTsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgImxpbmtTcGFjZSIsICJMaW5rU3BhY2UiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImNsYXNzTmFtZSIsICJsaW5rcyIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiZW50cmllcyIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiaW5kZXgiLCAibGluayIsICJ2YWx1ZSIsICJiZWZvcmVFbGVtZW50IiwgImNsYXNzTGlzdCIsICJjb250YWlucyIsICJxdWVyeVNlbGVjdG9yIiwgIm5leHRTaWJsaW5nIiwgInNwYWNlciIsICJjbG9uZU5vZGUiLCAiYmVmb3JlIiwgImVyciIsICJlIiwgImYiXQp9Cg==
