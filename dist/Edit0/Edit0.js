/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/Edit0|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-edit0.css}
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-edit0.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/Edit0}
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

// dist/Edit0/Edit0.js
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
//! src/Edit0/modules/core.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/Edit0/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Edit0: (0, import_ext_gadget.localize)({
      en: "Edit lead section",
      ja: "最初の段落を編集",
      "zh-hans": "编辑首段",
      "zh-hant": "編輯首段"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/Edit0/modules/core.ts
var edit0 = ($body) => {
  const $content = $body.find("#content, #mw_content").first();
  const $span1 = $content.find("span.mw-editsection:not(.plainlinks)").first();
  if (!$span1.length) {
    return;
  }
  const $span0 = $span1.clone();
  $span0.removeClass("mw-editsection").addClass("mw-editsection-section-0");
  if ($span0.find(".easy-archive-link").length) {
    $span0.find(".easy-archive-link").remove();
  }
  const {
    skin
  } = mw.config.get();
  switch (skin) {
    case "citizen":
      $body.find(".mw-indicators").prepend($span0);
      break;
    default:
      $body.find("#content h1#firstHeading").append($span0);
  }
  $span0.addClass("mw-editsection");
  var _iterator = _createForOfIteratorHelper($span0.find("a")), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const element = _step.value;
      element.title = getMessage("Edit0");
      const {
        href
      } = element;
      let urlSearch = {
        summary: "/* top */ ",
        section: "0"
      };
      if (!/&(?:ve)?section=T/.test(href)) {
      } else if (/&vesection=/.test(href)) {
        urlSearch = {
          ...urlSearch,
          veaction: "edit",
          vesection: "0"
        };
      } else {
        urlSearch = {
          ...urlSearch,
          action: "edit"
        };
      }
      element.href = new import_ext_gadget2.MwUri(href).extend(urlSearch).toString();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
//! src/Edit0/Edit0.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var {
  wgNamespaceNumber
} = mw.config.get();
if (wgNamespaceNumber >= 0) {
  void (0, import_ext_gadget3.getBody)().then(edit0);
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXQwL21vZHVsZXMvY29yZS50cyIsICJzcmMvRWRpdDAvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9FZGl0MC9FZGl0MC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtNd1VyaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgZWRpdDAgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0ICRjb250ZW50OiBKUXVlcnkgPSAkYm9keS5maW5kKCcjY29udGVudCwgI213X2NvbnRlbnQnKS5maXJzdCgpO1xuXHRjb25zdCAkc3BhbjE6IEpRdWVyeSA9ICRjb250ZW50LmZpbmQoJ3NwYW4ubXctZWRpdHNlY3Rpb246bm90KC5wbGFpbmxpbmtzKScpLmZpcnN0KCk7XG5cdGlmICghJHNwYW4xLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICRzcGFuMDogSlF1ZXJ5ID0gJHNwYW4xLmNsb25lKCk7XG5cdCRzcGFuMC5yZW1vdmVDbGFzcygnbXctZWRpdHNlY3Rpb24nKS5hZGRDbGFzcygnbXctZWRpdHNlY3Rpb24tc2VjdGlvbi0wJyk7XG5cblx0aWYgKCRzcGFuMC5maW5kKCcuZWFzeS1hcmNoaXZlLWxpbmsnKS5sZW5ndGgpIHtcblx0XHQkc3BhbjAuZmluZCgnLmVhc3ktYXJjaGl2ZS1saW5rJykucmVtb3ZlKCk7XG5cdH1cblxuXHRjb25zdCB7c2tpbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0c3dpdGNoIChza2luKSB7XG5cdFx0Y2FzZSAnY2l0aXplbic6XG5cdFx0XHQkYm9keS5maW5kKCcubXctaW5kaWNhdG9ycycpLnByZXBlbmQoJHNwYW4wKTtcblx0XHRcdGJyZWFrO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHQkYm9keS5maW5kKCcjY29udGVudCBoMSNmaXJzdEhlYWRpbmcnKS5hcHBlbmQoJHNwYW4wKTtcblx0fVxuXG5cdCRzcGFuMC5hZGRDbGFzcygnbXctZWRpdHNlY3Rpb24nKTtcblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJHNwYW4wLmZpbmQoJ2EnKSkge1xuXHRcdGVsZW1lbnQudGl0bGUgPSBnZXRNZXNzYWdlKCdFZGl0MCcpO1xuXG5cdFx0Y29uc3Qge2hyZWZ9ID0gZWxlbWVudDtcblx0XHRsZXQgdXJsU2VhcmNoOiB7XG5cdFx0XHRhY3Rpb24/OiBzdHJpbmc7XG5cdFx0XHRzdW1tYXJ5OiBzdHJpbmc7XG5cdFx0XHRzZWN0aW9uOiBzdHJpbmc7XG5cdFx0XHR2ZWFjdGlvbj86IHN0cmluZztcblx0XHRcdHZlc2VjdGlvbj86IHN0cmluZztcblx0XHR9ID0ge1xuXHRcdFx0c3VtbWFyeTogJy8qIHRvcCAqLyAnLFxuXHRcdFx0c2VjdGlvbjogJzAnLFxuXHRcdH07XG5cblx0XHRpZiAoIS8mKD86dmUpP3NlY3Rpb249VC8udGVzdChocmVmKSkge1xuXHRcdFx0Ly8gbm90IHRyYW5zY2x1ZGVkXG5cdFx0fSBlbHNlIGlmICgvJnZlc2VjdGlvbj0vLnRlc3QoaHJlZikpIHtcblx0XHRcdC8vIHRyYW5zY2x1ZGVkLCBWRVxuXHRcdFx0dXJsU2VhcmNoID0ge1xuXHRcdFx0XHQuLi51cmxTZWFyY2gsXG5cdFx0XHRcdHZlYWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdHZlc2VjdGlvbjogJzAnLFxuXHRcdFx0fTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gdHJhbnNjbHVkZWQsIG5vdCBWRVxuXHRcdFx0dXJsU2VhcmNoID0ge1xuXHRcdFx0XHQuLi51cmxTZWFyY2gsXG5cdFx0XHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRlbGVtZW50LmhyZWYgPSBuZXcgTXdVcmkoaHJlZikuZXh0ZW5kKHVybFNlYXJjaCkudG9TdHJpbmcoKTtcblx0fVxufTtcblxuZXhwb3J0IHtlZGl0MH07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdEVkaXQwOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VkaXQgbGVhZCBzZWN0aW9uJyxcblx0XHRcdGphOiAn5pyA5Yid44Gu5q616JC944KS57eo6ZuGJyxcblx0XHRcdCd6aC1oYW5zJzogJ+e8lui+kemmluautScsXG5cdFx0XHQnemgtaGFudCc6ICfnt6jovK/pppbmrrUnLFxuXHRcdH0pLFxuXHR9O1xufTtcbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0ICcuL0VkaXQwLmxlc3MnO1xuaW1wb3J0IHtlZGl0MH0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCB7d2dOYW1lc3BhY2VOdW1iZXJ9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5pZiAod2dOYW1lc3BhY2VOdW1iZXIgPj0gMCkge1xuXHR2b2lkIGdldEJvZHkoKS50aGVuKGVkaXQwKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQW9CQyxRQUFBLGlCQUFBOztBQ0FwQixJQUFBQyxvQkFBdUJELFFBQUEsaUJBQUE7QUFFdkIsSUFBTUUsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsUUFBQSxHQUFPRixrQkFBQUcsVUFBUztNQUNmQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNEO0FBQ0EsSUFBTUMsZUFBZUwsZ0JBQWdCO0FBRXJDLElBQU1NLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FEYkEsSUFBTUMsUUFBU0MsV0FBeUM7QUFDdkQsUUFBTUMsV0FBbUJELE1BQU1FLEtBQUssdUJBQXVCLEVBQUVDLE1BQU07QUFDbkUsUUFBTUMsU0FBaUJILFNBQVNDLEtBQUssc0NBQXNDLEVBQUVDLE1BQU07QUFDbkYsTUFBSSxDQUFDQyxPQUFPQyxRQUFRO0FBQ25CO0VBQ0Q7QUFFQSxRQUFNQyxTQUFpQkYsT0FBT0csTUFBTTtBQUNwQ0QsU0FBT0UsWUFBWSxnQkFBZ0IsRUFBRUMsU0FBUywwQkFBMEI7QUFFeEUsTUFBSUgsT0FBT0osS0FBSyxvQkFBb0IsRUFBRUcsUUFBUTtBQUM3Q0MsV0FBT0osS0FBSyxvQkFBb0IsRUFBRVEsT0FBTztFQUMxQztBQUVBLFFBQU07SUFBQ0M7RUFBSSxJQUFJQyxHQUFHQyxPQUFPQyxJQUFJO0FBRTdCLFVBQVFILE1BQUE7SUFDUCxLQUFLO0FBQ0pYLFlBQU1FLEtBQUssZ0JBQWdCLEVBQUVhLFFBQVFULE1BQU07QUFDM0M7SUFDRDtBQUNDTixZQUFNRSxLQUFLLDBCQUEwQixFQUFFYyxPQUFPVixNQUFNO0VBQ3REO0FBRUFBLFNBQU9HLFNBQVMsZ0JBQWdCO0FBQUEsTUFBQVEsWUFBQUMsMkJBRVZaLE9BQU9KLEtBQUssR0FBRyxDQUFBLEdBQUFpQjtBQUFBLE1BQUE7QUFBckMsU0FBQUYsVUFBQUcsRUFBQSxHQUFBLEVBQUFELFFBQUFGLFVBQUFJLEVBQUEsR0FBQUMsUUFBd0M7QUFBQSxZQUE3QkMsVUFBQUosTUFBQUs7QUFDVkQsY0FBUUUsUUFBUTVCLFdBQVcsT0FBTztBQUVsQyxZQUFNO1FBQUM2QjtNQUFJLElBQUlIO0FBQ2YsVUFBSUksWUFNQTtRQUNIQyxTQUFTO1FBQ1RDLFNBQVM7TUFDVjtBQUVBLFVBQUksQ0FBQyxvQkFBb0JDLEtBQUtKLElBQUksR0FBRztNQUVyQyxXQUFXLGNBQWNJLEtBQUtKLElBQUksR0FBRztBQUVwQ0Msb0JBQVk7VUFDWCxHQUFHQTtVQUNISSxVQUFVO1VBQ1ZDLFdBQVc7UUFDWjtNQUNELE9BQU87QUFFTkwsb0JBQVk7VUFDWCxHQUFHQTtVQUNITSxRQUFRO1FBQ1Q7TUFDRDtBQUVBVixjQUFRRyxPQUFPLElBQUl0QyxtQkFBQThDLE1BQU1SLElBQUksRUFBRVMsT0FBT1IsU0FBUyxFQUFFUyxTQUFTO0lBQzNEO0VBQUEsU0FBQUMsS0FBQTtBQUFBcEIsY0FBQXFCLEVBQUFELEdBQUE7RUFBQSxVQUFBO0FBQUFwQixjQUFBc0IsRUFBQTtFQUFBO0FBQ0Q7O0FFN0RBLElBQUFDLHFCQUFzQm5ELFFBQUEsaUJBQUE7QUFFdEIsSUFBTTtFQUFDb0Q7QUFBaUIsSUFBSTdCLEdBQUdDLE9BQU9DLElBQUk7QUFFMUMsSUFBSTJCLHFCQUFxQixHQUFHO0FBQzNCLFFBQUEsR0FBS0QsbUJBQUFFLFNBQVEsRUFBRUMsS0FBSzVDLEtBQUs7QUFDMUI7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJFZGl0MCIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiZWRpdDAiLCAiJGJvZHkiLCAiJGNvbnRlbnQiLCAiZmluZCIsICJmaXJzdCIsICIkc3BhbjEiLCAibGVuZ3RoIiwgIiRzcGFuMCIsICJjbG9uZSIsICJyZW1vdmVDbGFzcyIsICJhZGRDbGFzcyIsICJyZW1vdmUiLCAic2tpbiIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgInByZXBlbmQiLCAiYXBwZW5kIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJlbGVtZW50IiwgInZhbHVlIiwgInRpdGxlIiwgImhyZWYiLCAidXJsU2VhcmNoIiwgInN1bW1hcnkiLCAic2VjdGlvbiIsICJ0ZXN0IiwgInZlYWN0aW9uIiwgInZlc2VjdGlvbiIsICJhY3Rpb24iLCAiTXdVcmkiLCAiZXh0ZW5kIiwgInRvU3RyaW5nIiwgImVyciIsICJlIiwgImYiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgImdldEJvZHkiLCAidGhlbiJdCn0K
