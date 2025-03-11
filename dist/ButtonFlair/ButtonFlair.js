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
(() => {
  const navigationItems = document.querySelectorAll(".button-flair");
  const navigationItemsbg = document.querySelectorAll(".button-flair-bg");
  if (!navigationItems.length || !navigationItemsbg.length) return;
  var _iterator = _createForOfIteratorHelper(navigationItems.entries()), _step;
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
        bgElement.style.transform = "translate(\n				".concat(clientX - rect.left - offset, "px,\n				").concat(clientY - rect.top - offset, "px\n			)");
        bgElement.classList.add("scale1");
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var _iterator2 = _createForOfIteratorHelper(navigationItems.entries()), _step2;
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

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL0J1dHRvbkZsYWlyL0J1dHRvbkZsYWlyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgJy4vQnV0dG9uRmxhaXIubGVzcyc7XG5cbigoKSA9PiB7XG5cdGNvbnN0IG5hdmlnYXRpb25JdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b24tZmxhaXInKTtcblx0Y29uc3QgbmF2aWdhdGlvbkl0ZW1zYmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uLWZsYWlyLWJnJyk7XG5cdGlmICghbmF2aWdhdGlvbkl0ZW1zLmxlbmd0aCB8fCAhbmF2aWdhdGlvbkl0ZW1zYmcubGVuZ3RoKSByZXR1cm47XG5cdGZvciAoY29uc3QgW2luZGV4LCBpdGVtXSBvZiBuYXZpZ2F0aW9uSXRlbXMuZW50cmllcygpKSB7XG5cdFx0aXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQ6IEV2ZW50KSA9PiB7XG5cdFx0XHRjb25zdCB7Y2xpZW50WCwgY2xpZW50WX0gPSBldmVudCBhcyBNb3VzZUV2ZW50O1xuXHRcdFx0Y29uc3QgcmVjdCA9IGl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRjb25zdCBpd2lkdGggPSBpdGVtLmNsaWVudFdpZHRoO1xuXHRcdFx0Y29uc3Qgb2Zmc2V0ID0gKGl3aWR0aCAqIDEuNSkgLyAyO1xuXG5cdFx0XHRjb25zdCBiZ0VsZW1lbnQgPSBuYXZpZ2F0aW9uSXRlbXNiZ1tpbmRleF0gYXMgSFRNTEVsZW1lbnQ7XG5cdFx0XHRiZ0VsZW1lbnQuc3R5bGUud2lkdGggPSBgJHtpd2lkdGggKiAxLjV9cHhgO1xuXHRcdFx0YmdFbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke2l3aWR0aCAqIDEuNX1weGA7XG5cdFx0XHRiZ0VsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZShcblx0XHRcdFx0JHtjbGllbnRYIC0gcmVjdC5sZWZ0IC0gb2Zmc2V0fXB4LFxuXHRcdFx0XHQke2NsaWVudFkgLSByZWN0LnRvcCAtIG9mZnNldH1weFxuXHRcdFx0KWA7XG5cdFx0XHRiZ0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2NhbGUxJyk7XG5cdFx0fSk7XG5cdH1cblx0Zm9yIChjb25zdCBbaW5kZXgsIGl0ZW1dIG9mIG5hdmlnYXRpb25JdGVtcy5lbnRyaWVzKCkpIHtcblx0XHRpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG5cdFx0XHQobmF2aWdhdGlvbkl0ZW1zYmdbaW5kZXhdIGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QucmVtb3ZlKCdzY2FsZTEnKTtcblx0XHR9KTtcblx0fVxufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FFQyxNQUFNO0FBQ04sUUFBTUEsa0JBQWtCQyxTQUFTQyxpQkFBaUIsZUFBZTtBQUNqRSxRQUFNQyxvQkFBb0JGLFNBQVNDLGlCQUFpQixrQkFBa0I7QUFDdEUsTUFBSSxDQUFDRixnQkFBZ0JJLFVBQVUsQ0FBQ0Qsa0JBQWtCQyxPQUFRO0FBQUEsTUFBQUMsWUFBQUMsMkJBQzlCTixnQkFBZ0JPLFFBQVEsQ0FBQSxHQUFBQztBQUFBLE1BQUE7QUFBcEQsU0FBQUgsVUFBQUksRUFBQSxHQUFBLEVBQUFELFFBQUFILFVBQUFLLEVBQUEsR0FBQUMsUUFBdUQ7QUFBQSxZQUE1QyxDQUFDQyxPQUFPQyxJQUFJLElBQUFMLE1BQUFNO0FBQ3RCRCxXQUFLRSxpQkFBaUIsYUFBY0MsV0FBaUI7QUFDcEQsY0FBTTtVQUFDQztVQUFTQztRQUFPLElBQUlGO0FBQzNCLGNBQU1HLE9BQU9OLEtBQUtPLHNCQUFzQjtBQUN4QyxjQUFNQyxTQUFTUixLQUFLUztBQUNwQixjQUFNQyxTQUFVRixTQUFTLE1BQU87QUFFaEMsY0FBTUcsWUFBWXJCLGtCQUFrQlMsS0FBSztBQUN6Q1ksa0JBQVVDLE1BQU1DLFFBQUEsR0FBQUMsT0FBV04sU0FBUyxLQUFHLElBQUE7QUFDdkNHLGtCQUFVQyxNQUFNRyxTQUFBLEdBQUFELE9BQVlOLFNBQVMsS0FBRyxJQUFBO0FBQ3hDRyxrQkFBVUMsTUFBTUksWUFBQSxtQkFBQUYsT0FDYlYsVUFBVUUsS0FBS1csT0FBT1AsUUFBTSxXQUFBLEVBQUFJLE9BQzVCVCxVQUFVQyxLQUFLWSxNQUFNUixRQUFNLFVBQUE7QUFFOUJDLGtCQUFVUSxVQUFVQyxJQUFJLFFBQVE7TUFDakMsQ0FBQztJQUNGO0VBQUEsU0FBQUMsS0FBQTtBQUFBN0IsY0FBQThCLEVBQUFELEdBQUE7RUFBQSxVQUFBO0FBQUE3QixjQUFBK0IsRUFBQTtFQUFBO0FBQUEsTUFBQUMsYUFBQS9CLDJCQUM0Qk4sZ0JBQWdCTyxRQUFRLENBQUEsR0FBQStCO0FBQUEsTUFBQTtBQUFwRCxTQUFBRCxXQUFBNUIsRUFBQSxHQUFBLEVBQUE2QixTQUFBRCxXQUFBM0IsRUFBQSxHQUFBQyxRQUF1RDtBQUFBLFlBQTVDLENBQUNDLE9BQU9DLElBQUksSUFBQXlCLE9BQUF4QjtBQUN0QkQsV0FBS0UsaUJBQWlCLGNBQWMsTUFBTTtBQUN4Q1osMEJBQWtCUyxLQUFLLEVBQWtCb0IsVUFBVU8sT0FBTyxRQUFRO01BQ3BFLENBQUM7SUFDRjtFQUFBLFNBQUFMLEtBQUE7QUFBQUcsZUFBQUYsRUFBQUQsR0FBQTtFQUFBLFVBQUE7QUFBQUcsZUFBQUQsRUFBQTtFQUFBO0FBQ0QsR0FBRzsiLAogICJuYW1lcyI6IFsibmF2aWdhdGlvbkl0ZW1zIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAibmF2aWdhdGlvbkl0ZW1zYmciLCAibGVuZ3RoIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJlbnRyaWVzIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImluZGV4IiwgIml0ZW0iLCAidmFsdWUiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJldmVudCIsICJjbGllbnRYIiwgImNsaWVudFkiLCAicmVjdCIsICJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCAiaXdpZHRoIiwgImNsaWVudFdpZHRoIiwgIm9mZnNldCIsICJiZ0VsZW1lbnQiLCAic3R5bGUiLCAid2lkdGgiLCAiY29uY2F0IiwgImhlaWdodCIsICJ0cmFuc2Zvcm0iLCAibGVmdCIsICJ0b3AiLCAiY2xhc3NMaXN0IiwgImFkZCIsICJlcnIiLCAiZSIsICJmIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgInJlbW92ZSJdCn0K
