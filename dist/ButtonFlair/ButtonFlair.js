/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0|import=no}}'
 * @author 顶呱呱的阿杰 
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

// dist/ButtonFlair/ButtonFlair.js
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
//! src/ButtonFlair/ButtonFlair.ts
var navigationItems = document.querySelectorAll(".button-flair");
var navigationItemsbg = document.querySelectorAll(".button-flair-bg");
var _iterator = _createForOfIteratorHelper(navigationItems.entries());
var _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done; ) {
    const [index, item] = _step.value;
    item.addEventListener("mousemove", (event) => {
      const {
        clientX,
        clientY
      } = event;
      const rect = item.getBoundingClientRect();
      const iwidth = item.clientWidth;
      const offset = iwidth * 1.5 / 2;
      const bgElement = navigationItemsbg[index];
      bgElement.style.width = "".concat(iwidth * 1.5, "px");
      bgElement.style.height = "".concat(iwidth * 1.5, "px");
      bgElement.style.transform = "translate(\n            ".concat(clientX - rect.left - offset, "px,\n            ").concat(clientY - rect.top - offset, "px\n		)");
      bgElement.classList.add("scale1");
    });
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
var _iterator2 = _createForOfIteratorHelper(navigationItems.entries());
var _step2;
try {
  for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
    const [index, item] = _step2.value;
    item.addEventListener("mouseleave", () => {
      navigationItemsbg[index].classList.remove("scale1");
    });
  }
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL0J1dHRvbkZsYWlyL0J1dHRvbkZsYWlyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgJy4vQnV0dG9uRmxhaXIubGVzcyc7XG5cbmNvbnN0IG5hdmlnYXRpb25JdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b24tZmxhaXInKTtcbmNvbnN0IG5hdmlnYXRpb25JdGVtc2JnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbi1mbGFpci1iZycpO1xuZm9yIChjb25zdCBbaW5kZXgsIGl0ZW1dIG9mIG5hdmlnYXRpb25JdGVtcy5lbnRyaWVzKCkpIHtcblx0aXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQ6IEV2ZW50KSA9PiB7XG5cdFx0Y29uc3Qge2NsaWVudFgsIGNsaWVudFl9ID0gZXZlbnQgYXMgTW91c2VFdmVudDtcblx0XHRjb25zdCByZWN0ID0gaXRlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRjb25zdCBpd2lkdGggPSBpdGVtLmNsaWVudFdpZHRoO1xuXHRcdGNvbnN0IG9mZnNldCA9IChpd2lkdGggKiAxLjUpIC8gMjtcblxuXHRcdGNvbnN0IGJnRWxlbWVudCA9IG5hdmlnYXRpb25JdGVtc2JnW2luZGV4XSBhcyBIVE1MRWxlbWVudDtcblx0XHRiZ0VsZW1lbnQuc3R5bGUud2lkdGggPSBgJHtpd2lkdGggKiAxLjV9cHhgO1xuXHRcdGJnRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHtpd2lkdGggKiAxLjV9cHhgO1xuXHRcdGJnRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKFxuICAgICAgICAgICAgJHtjbGllbnRYIC0gcmVjdC5sZWZ0IC0gb2Zmc2V0fXB4LFxuICAgICAgICAgICAgJHtjbGllbnRZIC0gcmVjdC50b3AgLSBvZmZzZXR9cHhcblx0XHQpYDtcblx0XHRiZ0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2NhbGUxJyk7XG5cdH0pO1xufVxuZm9yIChjb25zdCBbaW5kZXgsIGl0ZW1dIG9mIG5hdmlnYXRpb25JdGVtcy5lbnRyaWVzKCkpIHtcblx0aXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuXHRcdChuYXZpZ2F0aW9uSXRlbXNiZ1tpbmRleF0gYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5yZW1vdmUoJ3NjYWxlMScpO1xuXHR9KTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxrQkFBa0JDLFNBQVNDLGlCQUFpQixlQUFlO0FBQ2pFLElBQU1DLG9CQUFvQkYsU0FBU0MsaUJBQWlCLGtCQUFrQjtBQUFBLElBQUFFLFlBQUFDLDJCQUMxQ0wsZ0JBQWdCTSxRQUFRLENBQUE7QUFEa0IsSUFDbEJDO0FBQUEsSUFBQTtBQUFwRCxPQUFBSCxVQUFBSSxFQUFBLEdBQUEsRUFBQUQsUUFBQUgsVUFBQUssRUFBQSxHQUFBQyxRQUF1RDtBQUFBLFVBQTVDLENBQUNDLE9BQU9DLElBQUksSUFBQUwsTUFBQU07QUFDdEJELFNBQUtFLGlCQUFpQixhQUFjQyxXQUFpQjtBQUNwRCxZQUFNO1FBQUNDO1FBQVNDO01BQU8sSUFBSUY7QUFDM0IsWUFBTUcsT0FBT04sS0FBS08sc0JBQXNCO0FBQ3hDLFlBQU1DLFNBQVNSLEtBQUtTO0FBQ3BCLFlBQU1DLFNBQVVGLFNBQVMsTUFBTztBQUVoQyxZQUFNRyxZQUFZcEIsa0JBQWtCUSxLQUFLO0FBQ3pDWSxnQkFBVUMsTUFBTUMsUUFBQSxHQUFBQyxPQUFXTixTQUFTLEtBQUcsSUFBQTtBQUN2Q0csZ0JBQVVDLE1BQU1HLFNBQUEsR0FBQUQsT0FBWU4sU0FBUyxLQUFHLElBQUE7QUFDeENHLGdCQUFVQyxNQUFNSSxZQUFBLDJCQUFBRixPQUNKVixVQUFVRSxLQUFLVyxPQUFPUCxRQUFNLG1CQUFBLEVBQUFJLE9BQzVCVCxVQUFVQyxLQUFLWSxNQUFNUixRQUFNLFNBQUE7QUFFdkNDLGdCQUFVUSxVQUFVQyxJQUFJLFFBQVE7SUFDakMsQ0FBQztFQUNGO0FBQUEsU0FBQUMsS0FBQTtBQUFBN0IsWUFBQThCLEVBQUFELEdBQUE7QUFBQSxVQUFBO0FBQUE3QixZQUFBK0IsRUFBQTtBQUFBO0FBQUEsSUFBQUMsYUFBQS9CLDJCQUM0QkwsZ0JBQWdCTSxRQUFRLENBQUE7QUFEcEQsSUFDb0QrQjtBQUFBLElBQUE7QUFBcEQsT0FBQUQsV0FBQTVCLEVBQUEsR0FBQSxFQUFBNkIsU0FBQUQsV0FBQTNCLEVBQUEsR0FBQUMsUUFBdUQ7QUFBQSxVQUE1QyxDQUFDQyxPQUFPQyxJQUFJLElBQUF5QixPQUFBeEI7QUFDdEJELFNBQUtFLGlCQUFpQixjQUFjLE1BQU07QUFDeENYLHdCQUFrQlEsS0FBSyxFQUFrQm9CLFVBQVVPLE9BQU8sUUFBUTtJQUNwRSxDQUFDO0VBQ0Y7QUFBQSxTQUFBTCxLQUFBO0FBQUFHLGFBQUFGLEVBQUFELEdBQUE7QUFBQSxVQUFBO0FBQUFHLGFBQUFELEVBQUE7QUFBQTsiLAogICJuYW1lcyI6IFsibmF2aWdhdGlvbkl0ZW1zIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAibmF2aWdhdGlvbkl0ZW1zYmciLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgImVudHJpZXMiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiaW5kZXgiLCAiaXRlbSIsICJ2YWx1ZSIsICJhZGRFdmVudExpc3RlbmVyIiwgImV2ZW50IiwgImNsaWVudFgiLCAiY2xpZW50WSIsICJyZWN0IiwgImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsICJpd2lkdGgiLCAiY2xpZW50V2lkdGgiLCAib2Zmc2V0IiwgImJnRWxlbWVudCIsICJzdHlsZSIsICJ3aWR0aCIsICJjb25jYXQiLCAiaGVpZ2h0IiwgInRyYW5zZm9ybSIsICJsZWZ0IiwgInRvcCIsICJjbGFzc0xpc3QiLCAiYWRkIiwgImVyciIsICJlIiwgImYiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAicmVtb3ZlIl0KfQo=
