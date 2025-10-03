/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/HideLongSummaries}
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

// dist/HideLongSummaries/HideLongSummaries.js
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
//! src/HideLongSummaries/options.json
var maxLength = 256;
//! src/HideLongSummaries/modules/constant.ts
var CLASS_NAME = "gadget-hide_long_summaries";
var CLASS_NAME_LONG = "".concat(CLASS_NAME, "--long");
var CLASS_NAME_SHORT = "".concat(CLASS_NAME, "--short");
var CLASS_NAME_SWITCH = "".concat(CLASS_NAME, "-switch");
//! src/HideLongSummaries/HideLongSummaries.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/HideLongSummaries/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Collapse: (0, import_ext_gadget.localize)({
      en: "collapse",
      ja: "折り畳み",
      "zh-hans": "折叠",
      "zh-hant": "折疊"
    }),
    Expand: (0, import_ext_gadget.localize)({
      en: "expand",
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
//! src/HideLongSummaries/HideLongSummaries.ts
void (0, import_ext_gadget2.getBody)().then(function hideLongSummaries($body) {
  const $switches = [];
  var _iterator = _createForOfIteratorHelper($body.find(".comment")), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const element = _step.value;
      if (!element.textContent || element.textContent.length <= maxLength || !element.parentElement) {
        continue;
      }
      $(element).addClass(CLASS_NAME_LONG).hide();
      $switches[$switches.length] = $("<a>").addClass(CLASS_NAME_SWITCH).text("[".concat(getMessage("Expand"), "]")).insertAfter(element);
      $("<span>").addClass("comment comment--without-parentheses ".concat(CLASS_NAME_SHORT)).text("".concat(element.textContent.slice(0, Math.max(0, maxLength + 1)), "...").concat(element.textContent.slice(-1))).insertAfter(element);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  for (var _i = 0, _$switches = $switches; _i < _$switches.length; _i++) {
    const $switch = _$switches[_i];
    $switch.on("click", (event) => {
      const parentElement = event.currentTarget.parentElement;
      const $parentElement = $(parentElement);
      const $long = $parentElement.find(".".concat(CLASS_NAME_LONG));
      const $short = $parentElement.find(".".concat(CLASS_NAME_SHORT));
      $switch.text($long.is(":visible") ? "[".concat(getMessage("Expand"), "]") : "[".concat(getMessage("Collapse"), "]"));
      $long.toggle();
      $short.toggle();
    });
  }
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0hpZGVMb25nU3VtbWFyaWVzL29wdGlvbnMuanNvbiIsICJzcmMvSGlkZUxvbmdTdW1tYXJpZXMvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvSGlkZUxvbmdTdW1tYXJpZXMvSGlkZUxvbmdTdW1tYXJpZXMudHMiLCAic3JjL0hpZGVMb25nU3VtbWFyaWVzL21vZHVsZXMvaTE4bi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcIm1heExlbmd0aFwiOiAyNTZcbn1cbiIsICJjb25zdCBDTEFTU19OQU1FOiBzdHJpbmcgPSAnZ2FkZ2V0LWhpZGVfbG9uZ19zdW1tYXJpZXMnO1xuY29uc3QgQ0xBU1NfTkFNRV9MT05HOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FfS0tbG9uZ2A7XG5jb25zdCBDTEFTU19OQU1FX1NIT1JUOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FfS0tc2hvcnRgO1xuY29uc3QgQ0xBU1NfTkFNRV9TV0lUQ0g6IHN0cmluZyA9IGAke0NMQVNTX05BTUV9LXN3aXRjaGA7XG5cbmV4cG9ydCB7Q0xBU1NfTkFNRV9MT05HLCBDTEFTU19OQU1FX1NIT1JULCBDTEFTU19OQU1FX1NXSVRDSH07XG4iLCAiLyogZXNsaW50LWRpc2FibGUgbWVkaWF3aWtpL2NsYXNzLWRvYyAqL1xuaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuL29wdGlvbnMuanNvbic7XG5pbXBvcnQge0NMQVNTX05BTUVfTE9ORywgQ0xBU1NfTkFNRV9TSE9SVCwgQ0xBU1NfTkFNRV9TV0lUQ0h9IGZyb20gJy4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vbW9kdWxlcy9pMThuJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBoaWRlTG9uZ1N1bW1hcmllcygkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0Y29uc3QgJHN3aXRjaGVzOiBKUXVlcnlbXSA9IFtdO1xuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkYm9keS5maW5kKCcuY29tbWVudCcpKSB7XG5cdFx0aWYgKCFlbGVtZW50LnRleHRDb250ZW50IHx8IGVsZW1lbnQudGV4dENvbnRlbnQubGVuZ3RoIDw9IE9QVElPTlMubWF4TGVuZ3RoIHx8ICFlbGVtZW50LnBhcmVudEVsZW1lbnQpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdCQoZWxlbWVudCkuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9MT05HKS5oaWRlKCk7XG5cblx0XHQkc3dpdGNoZXNbJHN3aXRjaGVzLmxlbmd0aF0gPSAkKCc8YT4nKVxuXHRcdFx0LmFkZENsYXNzKENMQVNTX05BTUVfU1dJVENIKVxuXHRcdFx0LnRleHQoYFske2dldE1lc3NhZ2UoJ0V4cGFuZCcpfV1gKVxuXHRcdFx0Lmluc2VydEFmdGVyKGVsZW1lbnQpOyAvLyBSZXBsYWNlIEFycmF5I3B1c2ggdG8gYXZvaWQgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXG5cdFx0JCgnPHNwYW4+Jylcblx0XHRcdC5hZGRDbGFzcyhgY29tbWVudCBjb21tZW50LS13aXRob3V0LXBhcmVudGhlc2VzICR7Q0xBU1NfTkFNRV9TSE9SVH1gKVxuXHRcdFx0LnRleHQoXG5cdFx0XHRcdGAke2VsZW1lbnQudGV4dENvbnRlbnQuc2xpY2UoMCwgTWF0aC5tYXgoMCwgT1BUSU9OUy5tYXhMZW5ndGggKyAxKSl9Li4uJHtlbGVtZW50LnRleHRDb250ZW50LnNsaWNlKC0xKX1gXG5cdFx0XHQpXG5cdFx0XHQuaW5zZXJ0QWZ0ZXIoZWxlbWVudCk7XG5cdH1cblxuXHRmb3IgKGNvbnN0ICRzd2l0Y2ggb2YgJHN3aXRjaGVzKSB7XG5cdFx0JHN3aXRjaC5vbignY2xpY2snLCAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRjb25zdCBwYXJlbnRFbGVtZW50ID0gKGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQpLnBhcmVudEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG5cblx0XHRcdGNvbnN0ICRwYXJlbnRFbGVtZW50OiBKUXVlcnkgPSAkKHBhcmVudEVsZW1lbnQpO1xuXHRcdFx0Y29uc3QgJGxvbmc6IEpRdWVyeSA9ICRwYXJlbnRFbGVtZW50LmZpbmQoYC4ke0NMQVNTX05BTUVfTE9OR31gKTtcblx0XHRcdGNvbnN0ICRzaG9ydDogSlF1ZXJ5ID0gJHBhcmVudEVsZW1lbnQuZmluZChgLiR7Q0xBU1NfTkFNRV9TSE9SVH1gKTtcblxuXHRcdFx0JHN3aXRjaC50ZXh0KCRsb25nLmlzKCc6dmlzaWJsZScpID8gYFske2dldE1lc3NhZ2UoJ0V4cGFuZCcpfV1gIDogYFske2dldE1lc3NhZ2UoJ0NvbGxhcHNlJyl9XWApO1xuXHRcdFx0JGxvbmcudG9nZ2xlKCk7XG5cdFx0XHQkc2hvcnQudG9nZ2xlKCk7XG5cdFx0fSk7XG5cdH1cbn0pO1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRDb2xsYXBzZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdjb2xsYXBzZScsXG5cdFx0XHRqYTogJ+aKmOOCiueVs+OBvycsXG5cdFx0XHQnemgtaGFucyc6ICfmipjlj6AnLFxuXHRcdFx0J3poLWhhbnQnOiAn5oqY55aKJyxcblx0XHR9KSxcblx0XHRFeHBhbmQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnZXhwYW5kJyxcblx0XHRcdGphOiAn5bGV6ZaLJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WxleW8gCcsXG5cdFx0XHQnemgtaGFudCc6ICflsZXplosnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLFlBQWE7O0FDRGQsSUFBTUMsYUFBcUI7QUFDM0IsSUFBTUMsa0JBQUEsR0FBQUMsT0FBNkJGLFlBQVUsUUFBQTtBQUM3QyxJQUFNRyxtQkFBQSxHQUFBRCxPQUE4QkYsWUFBVSxTQUFBO0FBQzlDLElBQU1JLG9CQUFBLEdBQUFGLE9BQStCRixZQUFVLFNBQUE7O0FDQS9DLElBQUFLLHFCQUFzQkMsUUFBQSxpQkFBQTs7QUNIdEIsSUFBQUMsb0JBQXVCRCxRQUFBLGlCQUFBO0FBRXZCLElBQU1FLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLFdBQUEsR0FBVUYsa0JBQUFHLFVBQVM7TUFDbEJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEQyxTQUFBLEdBQVFOLGtCQUFBRyxVQUFTO01BQ2hCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTUUsZUFBZU4sZ0JBQWdCO0FBRXJDLElBQU1PLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FEakJBLE1BQUEsR0FBS1gsbUJBQUFZLFNBQVEsRUFBRUMsS0FBSyxTQUFTQyxrQkFBa0JDLE9BQXNDO0FBQ3BGLFFBQU1DLFlBQXNCLENBQUE7QUFBQyxNQUFBQyxZQUFBQywyQkFFUEgsTUFBTUksS0FBSyxVQUFVLENBQUEsR0FBQUM7QUFBQSxNQUFBO0FBQTNDLFNBQUFILFVBQUFJLEVBQUEsR0FBQSxFQUFBRCxRQUFBSCxVQUFBSyxFQUFBLEdBQUFDLFFBQThDO0FBQUEsWUFBbkNDLFVBQUFKLE1BQUFLO0FBQ1YsVUFBSSxDQUFDRCxRQUFRRSxlQUFlRixRQUFRRSxZQUFZQyxVQUFrQmpDLGFBQWEsQ0FBQzhCLFFBQVFJLGVBQWU7QUFDdEc7TUFDRDtBQUVBQyxRQUFFTCxPQUFPLEVBQUVNLFNBQVNsQyxlQUFlLEVBQUVtQyxLQUFLO0FBRTFDZixnQkFBVUEsVUFBVVcsTUFBTSxJQUFJRSxFQUFFLEtBQUssRUFDbkNDLFNBQVMvQixpQkFBaUIsRUFDMUJpQyxLQUFBLElBQUFuQyxPQUFTYSxXQUFXLFFBQVEsR0FBQyxHQUFBLENBQUcsRUFDaEN1QixZQUFZVCxPQUFPO0FBRXJCSyxRQUFFLFFBQVEsRUFDUkMsU0FBQSx3Q0FBQWpDLE9BQWlEQyxnQkFBZ0IsQ0FBRSxFQUNuRWtDLEtBQUEsR0FBQW5DLE9BQ0cyQixRQUFRRSxZQUFZUSxNQUFNLEdBQUdDLEtBQUtDLElBQUksR0FBVzFDLFlBQVksQ0FBQyxDQUFDLEdBQUMsS0FBQSxFQUFBRyxPQUFNMkIsUUFBUUUsWUFBWVEsTUFBTSxFQUFFLENBQUMsQ0FDdkcsRUFDQ0QsWUFBWVQsT0FBTztJQUN0QjtFQUFBLFNBQUFhLEtBQUE7QUFBQXBCLGNBQUFxQixFQUFBRCxHQUFBO0VBQUEsVUFBQTtBQUFBcEIsY0FBQXNCLEVBQUE7RUFBQTtBQUVBLFdBQUFDLEtBQUEsR0FBQUMsYUFBc0J6QixXQUFBd0IsS0FBQUMsV0FBQWQsUUFBQWEsTUFBVztBQUFqQyxVQUFXRSxVQUFBRCxXQUFBRCxFQUFBO0FBQ1ZFLFlBQVFDLEdBQUcsU0FBVUMsV0FBbUM7QUFDdkQsWUFBTWhCLGdCQUFpQmdCLE1BQU1DLGNBQThCakI7QUFFM0QsWUFBTWtCLGlCQUF5QmpCLEVBQUVELGFBQWE7QUFDOUMsWUFBTW1CLFFBQWdCRCxlQUFlM0IsS0FBQSxJQUFBdEIsT0FBU0QsZUFBZSxDQUFFO0FBQy9ELFlBQU1vRCxTQUFpQkYsZUFBZTNCLEtBQUEsSUFBQXRCLE9BQVNDLGdCQUFnQixDQUFFO0FBRWpFNEMsY0FBUVYsS0FBS2UsTUFBTUUsR0FBRyxVQUFVLElBQUEsSUFBQXBELE9BQVFhLFdBQVcsUUFBUSxHQUFDLEdBQUEsSUFBQSxJQUFBYixPQUFVYSxXQUFXLFVBQVUsR0FBQyxHQUFBLENBQUc7QUFDL0ZxQyxZQUFNRyxPQUFPO0FBQ2JGLGFBQU9FLE9BQU87SUFDZixDQUFDO0VBQ0Y7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogWyJtYXhMZW5ndGgiLCAiQ0xBU1NfTkFNRSIsICJDTEFTU19OQU1FX0xPTkciLCAiY29uY2F0IiwgIkNMQVNTX05BTUVfU0hPUlQiLCAiQ0xBU1NfTkFNRV9TV0lUQ0giLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkNvbGxhcHNlIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIkV4cGFuZCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImhpZGVMb25nU3VtbWFyaWVzIiwgIiRib2R5IiwgIiRzd2l0Y2hlcyIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiZmluZCIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJlbGVtZW50IiwgInZhbHVlIiwgInRleHRDb250ZW50IiwgImxlbmd0aCIsICJwYXJlbnRFbGVtZW50IiwgIiQiLCAiYWRkQ2xhc3MiLCAiaGlkZSIsICJ0ZXh0IiwgImluc2VydEFmdGVyIiwgInNsaWNlIiwgIk1hdGgiLCAibWF4IiwgImVyciIsICJlIiwgImYiLCAiX2kiLCAiXyRzd2l0Y2hlcyIsICIkc3dpdGNoIiwgIm9uIiwgImV2ZW50IiwgImN1cnJlbnRUYXJnZXQiLCAiJHBhcmVudEVsZW1lbnQiLCAiJGxvbmciLCAiJHNob3J0IiwgImlzIiwgInRvZ2dsZSJdCn0K
