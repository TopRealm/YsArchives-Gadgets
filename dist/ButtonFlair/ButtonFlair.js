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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL0J1dHRvbkZsYWlyL0J1dHRvbkZsYWlyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBuYXZpZ2F0aW9uSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uLWZsYWlyJyk7XG5jb25zdCBuYXZpZ2F0aW9uSXRlbXNiZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b24tZmxhaXItYmcnKTtcbmZvciAoY29uc3QgW2luZGV4LCBpdGVtXSBvZiBuYXZpZ2F0aW9uSXRlbXMuZW50cmllcygpKSB7XG5cdGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2ZW50OiBFdmVudCkgPT4ge1xuXHRcdGNvbnN0IHtjbGllbnRYLCBjbGllbnRZfSA9IGV2ZW50IGFzIE1vdXNlRXZlbnQ7XG5cdFx0Y29uc3QgcmVjdCA9IGl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0Y29uc3QgaXdpZHRoID0gaXRlbS5jbGllbnRXaWR0aDtcblx0XHRjb25zdCBvZmZzZXQgPSAoaXdpZHRoICogMS41KSAvIDI7XG5cblx0XHRjb25zdCBiZ0VsZW1lbnQgPSBuYXZpZ2F0aW9uSXRlbXNiZ1tpbmRleF0gYXMgSFRNTEVsZW1lbnQ7XG5cdFx0YmdFbGVtZW50LnN0eWxlLndpZHRoID0gYCR7aXdpZHRoICogMS41fXB4YDtcblx0XHRiZ0VsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7aXdpZHRoICogMS41fXB4YDtcblx0XHRiZ0VsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZShcbiAgICAgICAgICAgICR7Y2xpZW50WCAtIHJlY3QubGVmdCAtIG9mZnNldH1weCxcbiAgICAgICAgICAgICR7Y2xpZW50WSAtIHJlY3QudG9wIC0gb2Zmc2V0fXB4XG5cdFx0KWA7XG5cdFx0YmdFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NjYWxlMScpO1xuXHR9KTtcbn1cbmZvciAoY29uc3QgW2luZGV4LCBpdGVtXSBvZiBuYXZpZ2F0aW9uSXRlbXMuZW50cmllcygpKSB7XG5cdGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcblx0XHQobmF2aWdhdGlvbkl0ZW1zYmdbaW5kZXhdIGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QucmVtb3ZlKCdzY2FsZTEnKTtcblx0fSk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsa0JBQWtCQyxTQUFTQyxpQkFBaUIsZUFBZTtBQUNqRSxJQUFNQyxvQkFBb0JGLFNBQVNDLGlCQUFpQixrQkFBa0I7QUFBQSxJQUFBRSxZQUFBQywyQkFDMUNMLGdCQUFnQk0sUUFBUSxDQUFBO0FBRGtCLElBQ2xCQztBQUFBLElBQUE7QUFBcEQsT0FBQUgsVUFBQUksRUFBQSxHQUFBLEVBQUFELFFBQUFILFVBQUFLLEVBQUEsR0FBQUMsUUFBdUQ7QUFBQSxVQUE1QyxDQUFDQyxPQUFPQyxJQUFJLElBQUFMLE1BQUFNO0FBQ3RCRCxTQUFLRSxpQkFBaUIsYUFBY0MsV0FBaUI7QUFDcEQsWUFBTTtRQUFDQztRQUFTQztNQUFPLElBQUlGO0FBQzNCLFlBQU1HLE9BQU9OLEtBQUtPLHNCQUFzQjtBQUN4QyxZQUFNQyxTQUFTUixLQUFLUztBQUNwQixZQUFNQyxTQUFVRixTQUFTLE1BQU87QUFFaEMsWUFBTUcsWUFBWXBCLGtCQUFrQlEsS0FBSztBQUN6Q1ksZ0JBQVVDLE1BQU1DLFFBQUEsR0FBQUMsT0FBV04sU0FBUyxLQUFHLElBQUE7QUFDdkNHLGdCQUFVQyxNQUFNRyxTQUFBLEdBQUFELE9BQVlOLFNBQVMsS0FBRyxJQUFBO0FBQ3hDRyxnQkFBVUMsTUFBTUksWUFBQSwyQkFBQUYsT0FDSlYsVUFBVUUsS0FBS1csT0FBT1AsUUFBTSxtQkFBQSxFQUFBSSxPQUM1QlQsVUFBVUMsS0FBS1ksTUFBTVIsUUFBTSxTQUFBO0FBRXZDQyxnQkFBVVEsVUFBVUMsSUFBSSxRQUFRO0lBQ2pDLENBQUM7RUFDRjtBQUFBLFNBQUFDLEtBQUE7QUFBQTdCLFlBQUE4QixFQUFBRCxHQUFBO0FBQUEsVUFBQTtBQUFBN0IsWUFBQStCLEVBQUE7QUFBQTtBQUFBLElBQUFDLGFBQUEvQiwyQkFDNEJMLGdCQUFnQk0sUUFBUSxDQUFBO0FBRHBELElBQ29EK0I7QUFBQSxJQUFBO0FBQXBELE9BQUFELFdBQUE1QixFQUFBLEdBQUEsRUFBQTZCLFNBQUFELFdBQUEzQixFQUFBLEdBQUFDLFFBQXVEO0FBQUEsVUFBNUMsQ0FBQ0MsT0FBT0MsSUFBSSxJQUFBeUIsT0FBQXhCO0FBQ3RCRCxTQUFLRSxpQkFBaUIsY0FBYyxNQUFNO0FBQ3hDWCx3QkFBa0JRLEtBQUssRUFBa0JvQixVQUFVTyxPQUFPLFFBQVE7SUFDcEUsQ0FBQztFQUNGO0FBQUEsU0FBQUwsS0FBQTtBQUFBRyxhQUFBRixFQUFBRCxHQUFBO0FBQUEsVUFBQTtBQUFBRyxhQUFBRCxFQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbIm5hdmlnYXRpb25JdGVtcyIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgIm5hdmlnYXRpb25JdGVtc2JnIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJlbnRyaWVzIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImluZGV4IiwgIml0ZW0iLCAidmFsdWUiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJldmVudCIsICJjbGllbnRYIiwgImNsaWVudFkiLCAicmVjdCIsICJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCAiaXdpZHRoIiwgImNsaWVudFdpZHRoIiwgIm9mZnNldCIsICJiZ0VsZW1lbnQiLCAic3R5bGUiLCAid2lkdGgiLCAiY29uY2F0IiwgImhlaWdodCIsICJ0cmFuc2Zvcm0iLCAibGVmdCIsICJ0b3AiLCAiY2xhc3NMaXN0IiwgImFkZCIsICJlcnIiLCAiZSIsICJmIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgInJlbW92ZSJdCn0K
