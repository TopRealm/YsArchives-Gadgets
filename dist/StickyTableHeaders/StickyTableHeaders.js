/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/StickyTableHeaders}
 * @author 安忆 <i@anyi.in>
 * @license GPL-3.0-or-later {@link https://youshou.wiki/wiki/H:GPL-3.0}
 */

/**
 * Copyright (C)  安忆
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
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

// dist/StickyTableHeaders/StickyTableHeaders.js
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
//! src/StickyTableHeaders/StickyTableHeaders.module.less
var stickyheader = "StickyTableHeaders-module__stickyheader_eOk_LG__4100";
var thead = "StickyTableHeaders-module__thead_eOk_LG__4100";
//! src/StickyTableHeaders/StickyTableHeaders.ts
var import_ext_gadget = require("ext.gadget.Util");
void (0, import_ext_gadget.getBody)().then(($body) => {
  var _iterator = _createForOfIteratorHelper($body.find(".wikitable:not(.sortable)")), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const table = _step.value;
      const $table = $(table);
      const $thead = $table.find("thead");
      const $trTh = $table.find("tbody > tr > th").parent().eq(0);
      const $trTd = $table.find("tbody > tr > td").parent();
      const $target = $thead.length ? $thead : $trTh.length ? $trTh : null;
      if ($target && $trTd.length >= 5) {
        $table.addClass(stickyheader);
        $target.addClass(thead);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1N0aWNreVRhYmxlSGVhZGVycy9TdGlja3lUYWJsZUhlYWRlcnMubW9kdWxlLmxlc3MiLCAic3JjL1N0aWNreVRhYmxlSGVhZGVycy9TdGlja3lUYWJsZUhlYWRlcnMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvU3RpY2t5VGFibGVIZWFkZXJzL1N0aWNreVRhYmxlSGVhZGVycy5tb2R1bGUubGVzc1wiO1xuZXhwb3J0IGNvbnN0IHN0aWNreWhlYWRlciA9IFwiU3RpY2t5VGFibGVIZWFkZXJzLW1vZHVsZV9fc3RpY2t5aGVhZGVyX2VPa19MR19fNDEwMFwiO1xuZXhwb3J0IGNvbnN0IHRoZWFkID0gXCJTdGlja3lUYWJsZUhlYWRlcnMtbW9kdWxlX190aGVhZF9lT2tfTEdfXzQxMDBcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcInN0aWNreWhlYWRlclwiOiBzdGlja3loZWFkZXIsXG4gIFwidGhlYWRcIjogdGhlYWRcbn07XG4gICAgICAiLCAiLyogZXNsaW50LWRpc2FibGUgbWVkaWF3aWtpL2NsYXNzLWRvYyAqL1xuaW1wb3J0IHtzdGlja3loZWFkZXIsIHRoZWFkfSBmcm9tICcuL1N0aWNreVRhYmxlSGVhZGVycy5tb2R1bGUubGVzcyc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRmb3IgKGNvbnN0IHRhYmxlIG9mICRib2R5LmZpbmQ8SFRNTFRhYmxlRWxlbWVudD4oJy53aWtpdGFibGU6bm90KC5zb3J0YWJsZSknKSkge1xuXHRcdGNvbnN0ICR0YWJsZTogSlF1ZXJ5PEhUTUxUYWJsZUVsZW1lbnQ+ID0gJCh0YWJsZSk7XG5cblx0XHRjb25zdCAkdGhlYWQ6IEpRdWVyeTxIVE1MVGFibGVTZWN0aW9uRWxlbWVudD4gPSAkdGFibGUuZmluZCgndGhlYWQnKTtcblx0XHRjb25zdCAkdHJUaCA9ICR0YWJsZS5maW5kKCd0Ym9keSA+IHRyID4gdGgnKS5wYXJlbnQ8SFRNTFRhYmxlUm93RWxlbWVudD4oKS5lcSgwKTtcblx0XHRjb25zdCAkdHJUZCA9ICR0YWJsZS5maW5kKCd0Ym9keSA+IHRyID4gdGQnKS5wYXJlbnQoKTtcblxuXHRcdGNvbnN0ICR0YXJnZXQ6IEpRdWVyeTxIVE1MVGFibGVTZWN0aW9uRWxlbWVudD4gfCBKUXVlcnk8SFRNTFRhYmxlUm93RWxlbWVudD4gfCBudWxsID0gJHRoZWFkLmxlbmd0aFxuXHRcdFx0PyAkdGhlYWRcblx0XHRcdDogJHRyVGgubGVuZ3RoXG5cdFx0XHRcdD8gJHRyVGhcblx0XHRcdFx0OiBudWxsO1xuXG5cdFx0aWYgKCR0YXJnZXQgJiYgJHRyVGQubGVuZ3RoID49IDUpIHtcblx0XHRcdCR0YWJsZS5hZGRDbGFzcyhzdGlja3loZWFkZXIgYXMgc3RyaW5nKTtcblx0XHRcdCR0YXJnZXQuYWRkQ2xhc3ModGhlYWQgYXMgc3RyaW5nKTtcblx0XHR9XG5cdH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ08sSUFBTUEsZUFBZTtBQUNyQixJQUFNQyxRQUFROztBQ0FyQixJQUFBQyxvQkFBc0JDLFFBQUEsaUJBQUE7QUFFdEIsTUFBQSxHQUFLRCxrQkFBQUUsU0FBUSxFQUFFQyxLQUFNQyxXQUF5QztBQUFBLE1BQUFDLFlBQUFDLDJCQUN6Q0YsTUFBTUcsS0FBdUIsMkJBQTJCLENBQUEsR0FBQUM7QUFBQSxNQUFBO0FBQTVFLFNBQUFILFVBQUFJLEVBQUEsR0FBQSxFQUFBRCxRQUFBSCxVQUFBSyxFQUFBLEdBQUFDLFFBQStFO0FBQUEsWUFBcEVDLFFBQUFKLE1BQUFLO0FBQ1YsWUFBTUMsU0FBbUNDLEVBQUVILEtBQUs7QUFFaEQsWUFBTUksU0FBMENGLE9BQU9QLEtBQUssT0FBTztBQUNuRSxZQUFNVSxRQUFRSCxPQUFPUCxLQUFLLGlCQUFpQixFQUFFVyxPQUE0QixFQUFFQyxHQUFHLENBQUM7QUFDL0UsWUFBTUMsUUFBUU4sT0FBT1AsS0FBSyxpQkFBaUIsRUFBRVcsT0FBTztBQUVwRCxZQUFNRyxVQUFnRkwsT0FBT00sU0FDMUZOLFNBQ0FDLE1BQU1LLFNBQ0xMLFFBQ0E7QUFFSixVQUFJSSxXQUFXRCxNQUFNRSxVQUFVLEdBQUc7QUFDakNSLGVBQU9TLFNBQVN6QixZQUFzQjtBQUN0Q3VCLGdCQUFRRSxTQUFTeEIsS0FBZTtNQUNqQztJQUNEO0VBQUEsU0FBQXlCLEtBQUE7QUFBQW5CLGNBQUFvQixFQUFBRCxHQUFBO0VBQUEsVUFBQTtBQUFBbkIsY0FBQXFCLEVBQUE7RUFBQTtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbInN0aWNreWhlYWRlciIsICJ0aGVhZCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImdldEJvZHkiLCAidGhlbiIsICIkYm9keSIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiZmluZCIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJ0YWJsZSIsICJ2YWx1ZSIsICIkdGFibGUiLCAiJCIsICIkdGhlYWQiLCAiJHRyVGgiLCAicGFyZW50IiwgImVxIiwgIiR0clRkIiwgIiR0YXJnZXQiLCAibGVuZ3RoIiwgImFkZENsYXNzIiwgImVyciIsICJlIiwgImYiXQp9Cg==
