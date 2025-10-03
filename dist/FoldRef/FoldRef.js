/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/User:燃灯/foldRef.js}
 * @base {@link https://zh.wikipedia.org/wiki/User:燃灯/foldRef.css}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/FoldRef}
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

// dist/FoldRef/FoldRef.js
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
//! src/FoldRef/modules/FoldRef.module.less
var expand = "FoldRef-module__expand_FNkcvW__4100";
var refarea = "FoldRef-module__refarea_FNkcvW__4100";
//! src/FoldRef/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Expand: (0, import_ext_gadget.localize)({
      en: "Expand",
      ja: "展開",
      "zh-hans": "展开",
      "zh-hant": "展開"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/FoldRef/modules/util/processElement.ts
var processElement = ($element) => {
  const $refFolder = $("<div>").addClass(refarea);
  $refFolder.insertBefore($element);
  $element.appendTo($refFolder);
  const $expandButton = $("<div>").addClass(expand).text(getMessage("Expand"));
  $refFolder.after($expandButton);
};
//! src/FoldRef/modules/core.ts
var foldRef = ($body) => {
  const $foldRef = $body.find(".mw-references-wrap,.refbegin");
  var _iterator = _createForOfIteratorHelper($foldRef), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const element = _step.value;
      const $element = $(element);
      if ($element.parent("div").parent("div").hasClass(refarea) || $element.parent("div").hasClass(refarea)) {
        continue;
      }
      const height = $element.height();
      if (!height || height <= window.innerHeight * 0.9) {
        continue;
      }
      processElement($element);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  $body.find(".".concat(expand)).on("click", (event) => {
    const $element = $(event.currentTarget);
    $element.prev(".".concat(refarea)).removeClass(refarea);
    $element.remove();
  });
};
//! src/FoldRef/FoldRef.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var {
  wgNamespaceNumber
} = mw.config.get();
if (wgNamespaceNumber === 0) {
  void (0, import_ext_gadget2.getBody)().then(foldRef);
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0ZvbGRSZWYvbW9kdWxlcy9Gb2xkUmVmLm1vZHVsZS5sZXNzIiwgInNyYy9Gb2xkUmVmL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRm9sZFJlZi9tb2R1bGVzL3V0aWwvcHJvY2Vzc0VsZW1lbnQudHMiLCAic3JjL0ZvbGRSZWYvbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9Gb2xkUmVmL0ZvbGRSZWYudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvRm9sZFJlZi9tb2R1bGVzL0ZvbGRSZWYubW9kdWxlLmxlc3NcIjtcbmV4cG9ydCBjb25zdCBleHBhbmQgPSBcIkZvbGRSZWYtbW9kdWxlX19leHBhbmRfRk5rY3ZXX180MTAwXCI7XG5leHBvcnQgY29uc3QgcmVmYXJlYSA9IFwiRm9sZFJlZi1tb2R1bGVfX3JlZmFyZWFfRk5rY3ZXX180MTAwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJleHBhbmRcIjogZXhwYW5kLFxuICBcInJlZmFyZWFcIjogcmVmYXJlYVxufTtcbiAgICAgICIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0RXhwYW5kOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0V4cGFuZCcsXG5cdFx0XHRqYTogJ+WxlemWiycsXG5cdFx0XHQnemgtaGFucyc6ICflsZXlvIAnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bGV6ZaLJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtleHBhbmQsIHJlZmFyZWF9IGZyb20gJy4uL0ZvbGRSZWYubW9kdWxlLmxlc3MnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuLy8gY3JlYXRlIGEgZGl2LCBwbGFjZSB7e1JlZmxpc3R9fXMgaW5zaWRlXG5jb25zdCBwcm9jZXNzRWxlbWVudCA9ICgkZWxlbWVudDogSlF1ZXJ5KTogdm9pZCA9PiB7XG5cdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHQvLyAqIHNlZSBjb25zdGFudC50c1xuXHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdGNvbnN0ICRyZWZGb2xkZXI6IEpRdWVyeSA9ICQoJzxkaXY+JykuYWRkQ2xhc3MocmVmYXJlYSBhcyBzdHJpbmcpO1xuXG5cdCRyZWZGb2xkZXIuaW5zZXJ0QmVmb3JlKCRlbGVtZW50KTtcblx0JGVsZW1lbnQuYXBwZW5kVG8oJHJlZkZvbGRlcik7XG5cblx0Ly8gYWRkIGFuIGV4cGFuZCBidXR0b24gYXQgdGhlIGJvdHRvbVxuXHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0Ly8gKiBzZWUgY29uc3RhbnQudHNcblx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRjb25zdCAkZXhwYW5kQnV0dG9uOiBKUXVlcnkgPSAkKCc8ZGl2PicpXG5cdFx0LmFkZENsYXNzKGV4cGFuZCBhcyBzdHJpbmcpXG5cdFx0LnRleHQoZ2V0TWVzc2FnZSgnRXhwYW5kJykpO1xuXHQkcmVmRm9sZGVyLmFmdGVyKCRleHBhbmRCdXR0b24pO1xufTtcblxuZXhwb3J0IHtwcm9jZXNzRWxlbWVudH07XG4iLCAiaW1wb3J0IHtleHBhbmQsIHJlZmFyZWF9IGZyb20gJy4vRm9sZFJlZi5tb2R1bGUubGVzcyc7XG5pbXBvcnQge3Byb2Nlc3NFbGVtZW50fSBmcm9tICcuL3V0aWwvcHJvY2Vzc0VsZW1lbnQnO1xuXG5jb25zdCBmb2xkUmVmID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvLyBmb3IgYXJ0aWNsZXMgdXNpbmcgPHJlZmVyZW5jZXMgLz4sIHt7UmVmbGlzdH19cyBvciBzaW1pbGFyIHRlbXBsYXRlc1xuXHRjb25zdCAkZm9sZFJlZjogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnLm13LXJlZmVyZW5jZXMtd3JhcCwucmVmYmVnaW4nKTtcblx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRmb2xkUmVmKSB7XG5cdFx0Y29uc3QgJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuXHRcdGlmIChcblx0XHRcdCRlbGVtZW50XG5cdFx0XHRcdC5wYXJlbnQoJ2RpdicpXG5cdFx0XHRcdC5wYXJlbnQoJ2RpdicpXG5cdFx0XHRcdC5oYXNDbGFzcyhyZWZhcmVhIGFzIHN0cmluZykgfHxcblx0XHRcdCRlbGVtZW50LnBhcmVudCgnZGl2JykuaGFzQ2xhc3MocmVmYXJlYSBhcyBzdHJpbmcpXG5cdFx0KSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBoZWlnaHQ6IG51bWJlciB8IHVuZGVmaW5lZCA9ICRlbGVtZW50LmhlaWdodCgpO1xuXHRcdGlmICghaGVpZ2h0IHx8IGhlaWdodCA8PSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIGlmIGdyZWF0ZXIgdGhhbiA5MCUgb2YgdGhlIHZpZXdwb3J0IGhlaWdodCwgZm9sZCB0aGUgcmVmZXJlbmNlcyBsaXN0XG5cdFx0cHJvY2Vzc0VsZW1lbnQoJGVsZW1lbnQpO1xuXHR9XG5cblx0Ly8gYXR0YWNoIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBleHBhbmQgYnV0dG9uc1xuXHQkYm9keS5maW5kKGAuJHtleHBhbmR9YCkub24oJ2NsaWNrJywgKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudDxIVE1MRWxlbWVudD4pOiB2b2lkID0+IHtcblx0XHRjb25zdCAkZWxlbWVudCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkgYXMgSlF1ZXJ5O1xuXG5cdFx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdFx0Ly8gKiBzZWUgY29uc3RhbnQudHNcblx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0JGVsZW1lbnQucHJldihgLiR7cmVmYXJlYX1gKS5yZW1vdmVDbGFzcyhyZWZhcmVhIGFzIHN0cmluZyk7XG5cdFx0JGVsZW1lbnQucmVtb3ZlKCk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHtmb2xkUmVmfTtcbiIsICJpbXBvcnQge2ZvbGRSZWZ9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuaWYgKHdnTmFtZXNwYWNlTnVtYmVyID09PSAwKSB7XG5cdHZvaWQgZ2V0Qm9keSgpLnRoZW4oZm9sZFJlZik7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNPLElBQU1BLFNBQVM7QUFDZixJQUFNQyxVQUFVOztBQ0Z2QixJQUFBQyxvQkFBdUJDLFFBQUEsaUJBQUE7QUFFdkIsSUFBTUMsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsU0FBQSxHQUFRSCxrQkFBQUksVUFBUztNQUNoQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1DLGVBQWVMLGdCQUFnQjtBQUVyQyxJQUFNTSxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBQ2JBLElBQU1DLGlCQUFrQkMsY0FBMkI7QUFJbEQsUUFBTUMsYUFBcUJDLEVBQUUsT0FBTyxFQUFFQyxTQUFTZixPQUFpQjtBQUVoRWEsYUFBV0csYUFBYUosUUFBUTtBQUNoQ0EsV0FBU0ssU0FBU0osVUFBVTtBQU01QixRQUFNSyxnQkFBd0JKLEVBQUUsT0FBTyxFQUNyQ0MsU0FBU2hCLE1BQWdCLEVBQ3pCb0IsS0FBS1YsV0FBVyxRQUFRLENBQUM7QUFDM0JJLGFBQVdPLE1BQU1GLGFBQWE7QUFDL0I7O0FDbEJBLElBQU1HLFVBQVdDLFdBQXlDO0FBRXpELFFBQU1DLFdBQW1CRCxNQUFNRSxLQUFLLCtCQUErQjtBQUFBLE1BQUFDLFlBQUFDLDJCQUM3Q0gsUUFBQSxHQUFBSTtBQUFBLE1BQUE7QUFBdEIsU0FBQUYsVUFBQUcsRUFBQSxHQUFBLEVBQUFELFFBQUFGLFVBQUFJLEVBQUEsR0FBQUMsUUFBZ0M7QUFBQSxZQUFyQkMsVUFBQUosTUFBQUs7QUFDVixZQUFNcEIsV0FBV0UsRUFBRWlCLE9BQU87QUFDMUIsVUFDQ25CLFNBQ0VxQixPQUFPLEtBQUssRUFDWkEsT0FBTyxLQUFLLEVBQ1pDLFNBQVNsQyxPQUFpQixLQUM1QlksU0FBU3FCLE9BQU8sS0FBSyxFQUFFQyxTQUFTbEMsT0FBaUIsR0FDaEQ7QUFDRDtNQUNEO0FBRUEsWUFBTW1DLFNBQTZCdkIsU0FBU3VCLE9BQU87QUFDbkQsVUFBSSxDQUFDQSxVQUFVQSxVQUFVQyxPQUFPQyxjQUFjLEtBQUs7QUFDbEQ7TUFDRDtBQUdBMUIscUJBQWVDLFFBQVE7SUFDeEI7RUFBQSxTQUFBMEIsS0FBQTtBQUFBYixjQUFBYyxFQUFBRCxHQUFBO0VBQUEsVUFBQTtBQUFBYixjQUFBZSxFQUFBO0VBQUE7QUFHQWxCLFFBQU1FLEtBQUEsSUFBQWlCLE9BQVMxQyxNQUFNLENBQUUsRUFBRTJDLEdBQUcsU0FBVUMsV0FBZ0Q7QUFDckYsVUFBTS9CLFdBQVdFLEVBQUU2QixNQUFNQyxhQUFhO0FBS3RDaEMsYUFBU2lDLEtBQUEsSUFBQUosT0FBU3pDLE9BQU8sQ0FBRSxFQUFFOEMsWUFBWTlDLE9BQWlCO0FBQzFEWSxhQUFTbUMsT0FBTztFQUNqQixDQUFDO0FBQ0Y7O0FDcENBLElBQUFDLHFCQUFzQjlDLFFBQUEsaUJBQUE7QUFFdEIsSUFBTTtFQUFDK0M7QUFBaUIsSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUUxQyxJQUFJSCxzQkFBc0IsR0FBRztBQUM1QixRQUFBLEdBQUtELG1CQUFBSyxTQUFRLEVBQUVDLEtBQUtqQyxPQUFPO0FBQzVCOyIsCiAgIm5hbWVzIjogWyJleHBhbmQiLCAicmVmYXJlYSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImdldEkxOG5NZXNzYWdlcyIsICJFeHBhbmQiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgInByb2Nlc3NFbGVtZW50IiwgIiRlbGVtZW50IiwgIiRyZWZGb2xkZXIiLCAiJCIsICJhZGRDbGFzcyIsICJpbnNlcnRCZWZvcmUiLCAiYXBwZW5kVG8iLCAiJGV4cGFuZEJ1dHRvbiIsICJ0ZXh0IiwgImFmdGVyIiwgImZvbGRSZWYiLCAiJGJvZHkiLCAiJGZvbGRSZWYiLCAiZmluZCIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiZWxlbWVudCIsICJ2YWx1ZSIsICJwYXJlbnQiLCAiaGFzQ2xhc3MiLCAiaGVpZ2h0IiwgIndpbmRvdyIsICJpbm5lckhlaWdodCIsICJlcnIiLCAiZSIsICJmIiwgImNvbmNhdCIsICJvbiIsICJldmVudCIsICJjdXJyZW50VGFyZ2V0IiwgInByZXYiLCAicmVtb3ZlQ2xhc3MiLCAicmVtb3ZlIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImdldEJvZHkiLCAidGhlbiJdCn0K
