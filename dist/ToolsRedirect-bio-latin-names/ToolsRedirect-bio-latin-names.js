/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/Special:Permalink/61193369}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/ToolsRedirect-bio-latin-names}
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

// dist/ToolsRedirect-bio-latin-names/ToolsRedirect-bio-latin-names.js
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
//! src/ToolsRedirect-bio-latin-names/ToolsRedirect-bio-latin-names.ts
var import_ext_gadget3 = require("ext.gadget.Util");
//! src/ToolsRedirect-bio-latin-names/modules/bio-latin-names.ts
var import_ext_gadget = require("ext.gadget.ToolsRedirect");
var import_ext_gadget2 = require("ext.gadget.Util");
var checkRedirect = () => {
  const REGEX_PREFIX = /[学學]名\s*[:：]?\s*$/;
  const REGEX_COLON = /^\s*[:：]?\s*$/;
  (0, import_ext_gadget.findRedirectCallback)((_pageName, $content) => {
    const titles = [];
    var _iterator = _createForOfIteratorHelper($content.find('> p > [lang="la"], > p > i')), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var _previousNode$textCon, _previousNode$textCon2;
        const element = _step.value;
        const {
          textContent
        } = element;
        let {
          previousSibling: previousNode
        } = element;
        if (previousNode && REGEX_COLON.test((_previousNode$textCon = previousNode.textContent) !== null && _previousNode$textCon !== void 0 ? _previousNode$textCon : "")) {
          previousNode = previousNode.previousSibling;
        }
        if (previousNode && REGEX_PREFIX.test((_previousNode$textCon2 = previousNode.textContent) !== null && _previousNode$textCon2 !== void 0 ? _previousNode$textCon2 : "")) {
          const title = textContent === null || textContent === void 0 ? void 0 : textContent.trim();
          if (!title) {
            continue;
          }
          titles[titles.length] = title;
          (0, import_ext_gadget.setRedirectTextSuffix)(title, "{{学名重定向}}");
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return (0, import_ext_gadget2.uniqueArray)(titles);
  });
};
//! src/ToolsRedirect-bio-latin-names/ToolsRedirect-bio-latin-names.ts
(function toolsRedirectBioLatinNames() {
  void (0, import_ext_gadget3.checkDependencies)("ToolsRedirect").then(checkRedirect);
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Rvb2xzUmVkaXJlY3QtYmlvLWxhdGluLW5hbWVzL1Rvb2xzUmVkaXJlY3QtYmlvLWxhdGluLW5hbWVzLnRzIiwgInNyYy9Ub29sc1JlZGlyZWN0LWJpby1sYXRpbi1uYW1lcy9tb2R1bGVzL2Jpby1sYXRpbi1uYW1lcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtjaGVja0RlcGVuZGVuY2llc30gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Y2hlY2tSZWRpcmVjdH0gZnJvbSAnLi9tb2R1bGVzL2Jpby1sYXRpbi1uYW1lcyc7XG5cbihmdW5jdGlvbiB0b29sc1JlZGlyZWN0QmlvTGF0aW5OYW1lcygpIHtcblx0dm9pZCBjaGVja0RlcGVuZGVuY2llcygnVG9vbHNSZWRpcmVjdCcpLnRoZW4oY2hlY2tSZWRpcmVjdCk7XG59KSgpO1xuIiwgImltcG9ydCB7ZmluZFJlZGlyZWN0Q2FsbGJhY2ssIHNldFJlZGlyZWN0VGV4dFN1ZmZpeH0gZnJvbSAnZXh0LmdhZGdldC5Ub29sc1JlZGlyZWN0JztcbmltcG9ydCB7dW5pcXVlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGNoZWNrUmVkaXJlY3QgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IFJFR0VYX1BSRUZJWDogUmVnRXhwID0gL1vlrablrbhd5ZCNXFxzKls677yaXT9cXHMqJC87XG5cdGNvbnN0IFJFR0VYX0NPTE9OOiBSZWdFeHAgPSAvXlxccypbOu+8ml0/XFxzKiQvO1xuXG5cdGZpbmRSZWRpcmVjdENhbGxiYWNrKChfcGFnZU5hbWU6IHN0cmluZywgJGNvbnRlbnQ6IEpRdWVyeSk6IHN0cmluZ1tdID0+IHtcblx0XHRjb25zdCB0aXRsZXM6IHN0cmluZ1tdID0gW107XG5cblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGNvbnRlbnQuZmluZCgnPiBwID4gW2xhbmc9XCJsYVwiXSwgPiBwID4gaScpKSB7XG5cdFx0XHRjb25zdCB7dGV4dENvbnRlbnR9ID0gZWxlbWVudDtcblx0XHRcdGxldCB7cHJldmlvdXNTaWJsaW5nOiBwcmV2aW91c05vZGV9ID0gZWxlbWVudDtcblxuXHRcdFx0aWYgKHByZXZpb3VzTm9kZSAmJiBSRUdFWF9DT0xPTi50ZXN0KHByZXZpb3VzTm9kZS50ZXh0Q29udGVudCA/PyAnJykpIHtcblx0XHRcdFx0cHJldmlvdXNOb2RlID0gcHJldmlvdXNOb2RlLnByZXZpb3VzU2libGluZztcblx0XHRcdH1cblxuXHRcdFx0aWYgKHByZXZpb3VzTm9kZSAmJiBSRUdFWF9QUkVGSVgudGVzdChwcmV2aW91c05vZGUudGV4dENvbnRlbnQgPz8gJycpKSB7XG5cdFx0XHRcdGNvbnN0IHRpdGxlOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB0ZXh0Q29udGVudD8udHJpbSgpO1xuXHRcdFx0XHRpZiAoIXRpdGxlKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aXRsZXNbdGl0bGVzLmxlbmd0aF0gPSB0aXRsZTsgLy8gUmVwbGFjZSBBcnJheSNwdXNoIHRvIGF2b2lkIGNvcmUtanMgcG9seWZpbGxpbmdcblx0XHRcdFx0c2V0UmVkaXJlY3RUZXh0U3VmZml4KHRpdGxlLCAne3vlrablkI3ph43lrprlkJF9fScpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB1bmlxdWVBcnJheSh0aXRsZXMpOyAvLyBSZXBsYWNlIFNldCB3aXRoIHVuaXF1ZUFycmF5LCBhdm9pZGluZyBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdH0pO1xufTtcblxuZXhwb3J0IHtjaGVja1JlZGlyZWN0fTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBZ0NDLFFBQUEsaUJBQUE7O0FDQWhDLElBQUFDLG9CQUEwREQsUUFBQSwwQkFBQTtBQUMxRCxJQUFBRSxxQkFBMEJGLFFBQUEsaUJBQUE7QUFFMUIsSUFBTUcsZ0JBQWdCQSxNQUFZO0FBQ2pDLFFBQU1DLGVBQXVCO0FBQzdCLFFBQU1DLGNBQXNCO0FBRTVCLEdBQUEsR0FBQUosa0JBQUFLLHNCQUFxQixDQUFDQyxXQUFtQkMsYUFBK0I7QUFDdkUsVUFBTUMsU0FBbUIsQ0FBQTtBQUFDLFFBQUFDLFlBQUFDLDJCQUVKSCxTQUFTSSxLQUFLLDRCQUE0QixDQUFBLEdBQUFDO0FBQUEsUUFBQTtBQUFoRSxXQUFBSCxVQUFBSSxFQUFBLEdBQUEsRUFBQUQsUUFBQUgsVUFBQUssRUFBQSxHQUFBQyxRQUFtRTtBQUFBLFlBQUFDLHVCQUFBQztBQUFBLGNBQXhEQyxVQUFBTixNQUFBTztBQUNWLGNBQU07VUFBQ0M7UUFBVyxJQUFJRjtBQUN0QixZQUFJO1VBQUNHLGlCQUFpQkM7UUFBWSxJQUFJSjtBQUV0QyxZQUFJSSxnQkFBZ0JsQixZQUFZbUIsTUFBQVAsd0JBQUtNLGFBQWFGLGlCQUFBLFFBQUFKLDBCQUFBLFNBQUFBLHdCQUFlLEVBQUUsR0FBRztBQUNyRU0seUJBQWVBLGFBQWFEO1FBQzdCO0FBRUEsWUFBSUMsZ0JBQWdCbkIsYUFBYW9CLE1BQUFOLHlCQUFLSyxhQUFhRixpQkFBQSxRQUFBSCwyQkFBQSxTQUFBQSx5QkFBZSxFQUFFLEdBQUc7QUFDdEUsZ0JBQU1PLFFBQTRCSixnQkFBQSxRQUFBQSxnQkFBQSxTQUFBLFNBQUFBLFlBQWFLLEtBQUs7QUFDcEQsY0FBSSxDQUFDRCxPQUFPO0FBQ1g7VUFDRDtBQUVBaEIsaUJBQU9BLE9BQU9rQixNQUFNLElBQUlGO0FBQ3hCLFdBQUEsR0FBQXhCLGtCQUFBMkIsdUJBQXNCSCxPQUFPLFdBQVc7UUFDekM7TUFDRDtJQUFBLFNBQUFJLEtBQUE7QUFBQW5CLGdCQUFBb0IsRUFBQUQsR0FBQTtJQUFBLFVBQUE7QUFBQW5CLGdCQUFBcUIsRUFBQTtJQUFBO0FBRUEsWUFBQSxHQUFPN0IsbUJBQUE4QixhQUFZdkIsTUFBTTtFQUMxQixDQUFDO0FBQ0Y7O0NENUJDLFNBQVN3Qiw2QkFBNkI7QUFDdEMsUUFBQSxHQUFLbEMsbUJBQUFtQyxtQkFBa0IsZUFBZSxFQUFFQyxLQUFLaEMsYUFBYTtBQUMzRCxHQUFHOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDMiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiY2hlY2tSZWRpcmVjdCIsICJSRUdFWF9QUkVGSVgiLCAiUkVHRVhfQ09MT04iLCAiZmluZFJlZGlyZWN0Q2FsbGJhY2siLCAiX3BhZ2VOYW1lIiwgIiRjb250ZW50IiwgInRpdGxlcyIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiZmluZCIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJfcHJldmlvdXNOb2RlJHRleHRDb24iLCAiX3ByZXZpb3VzTm9kZSR0ZXh0Q29uMiIsICJlbGVtZW50IiwgInZhbHVlIiwgInRleHRDb250ZW50IiwgInByZXZpb3VzU2libGluZyIsICJwcmV2aW91c05vZGUiLCAidGVzdCIsICJ0aXRsZSIsICJ0cmltIiwgImxlbmd0aCIsICJzZXRSZWRpcmVjdFRleHRTdWZmaXgiLCAiZXJyIiwgImUiLCAiZiIsICJ1bmlxdWVBcnJheSIsICJ0b29sc1JlZGlyZWN0QmlvTGF0aW5OYW1lcyIsICJjaGVja0RlcGVuZGVuY2llcyIsICJ0aGVuIl0KfQo=
