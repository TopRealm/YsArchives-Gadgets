/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/ScrollUpButton}
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

// dist/ScrollUpButton/ScrollUpButton.js
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
//! src/ScrollUpButton/ScrollUpButton.ts
var import_ext_gadget6 = require("ext.gadget.Util");
//! src/ScrollUpButton/modules/constant.ts
var CLASS_NAME = "gadget-scroll_up_button";
var CLASS_NAME_DOWN = "".concat(CLASS_NAME, "-down");
var CLASS_NAME_UP = "".concat(CLASS_NAME, "-up");
//! src/ScrollUpButton/components/scrollButton.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.JSX"), 1);
//! src/ScrollUpButton/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    ToBottom: (0, import_ext_gadget.localize)({
      en: "Scroll to the bottom",
      "zh-hans": "滚动至页底",
      "zh-hant": "滾動至頁底"
    }),
    ToTop: (0, import_ext_gadget.localize)({
      en: "Go back to the top",
      "zh-hans": "滚动至页顶",
      "zh-hant": "滾動至頁頂"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/ScrollUpButton/components/scrollButton.tsx
var import_ext_gadget3 = require("ext.gadget.Util");
function ScrollButton(props) {
  const {
    additionalClassName,
    alt,
    ariaLabel,
    onClick,
    onMouseEnter,
    onMouseLeave
  } = props;
  return /* @__PURE__ */ import_ext_gadget2.default.createElement("img", {
    className: [CLASS_NAME, additionalClassName, "noprint"],
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3C/svg%3E",
    width: "32",
    height: "32",
    draggable: false,
    alt,
    "aria-label": ariaLabel,
    onClick,
    onMouseEnter,
    onMouseLeave
  });
}
var TO_BOTTOM = getMessage("ToBottom");
var TO_TOP = getMessage("ToTop");
var ScrollDownButton = (onMouseEnterMouseLeave) => /* @__PURE__ */ import_ext_gadget2.default.createElement(ScrollButton, {
  additionalClassName: CLASS_NAME_DOWN,
  alt: TO_BOTTOM,
  ariaLabel: TO_BOTTOM,
  onClick: () => {
    var _$$height, _$$height2;
    (0, import_ext_gadget3.scrollTop)(((_$$height = $(document).height()) !== null && _$$height !== void 0 ? _$$height : 0) - ((_$$height2 = $(window).height()) !== null && _$$height2 !== void 0 ? _$$height2 : 0));
  },
  onMouseEnter: onMouseEnterMouseLeave,
  onMouseLeave: onMouseEnterMouseLeave
});
var ScrollUpButton = (onMouseEnterMouseLeave) => /* @__PURE__ */ import_ext_gadget2.default.createElement(ScrollButton, {
  additionalClassName: CLASS_NAME_UP,
  alt: TO_TOP,
  ariaLabel: TO_TOP,
  onClick: () => {
    (0, import_ext_gadget3.scrollTop)(0);
  },
  onMouseEnter: onMouseEnterMouseLeave,
  onMouseLeave: onMouseEnterMouseLeave
});
//! src/ScrollUpButton/modules/insertElementAndListener.ts
var import_ext_gadget4 = require("ext.gadget.Util");
var import_ext_gadget5 = require("ext.gadget.Tippy");
var insertElementandListener = ($body) => {
  const onMouseEnterMouseLeave = (event) => {
    (0, import_ext_gadget4.changeOpacityWhenMouseEnterOrLeave)(event);
  };
  const scrollDownButton = ScrollDownButton(onMouseEnterMouseLeave);
  const scrollUpButton2 = ScrollUpButton(onMouseEnterMouseLeave);
  for (var _i = 0, _arr = [scrollDownButton, scrollUpButton2]; _i < _arr.length; _i++) {
    const element = _arr[_i];
    $body.append(element);
    (0, import_ext_gadget5.tippy)(element, {
      arrow: true,
      content: element.getAttribute("alt"),
      placement: "left"
    });
  }
  const scrollListener = () => {
    let downButtonButtom;
    let upButtonButtom;
    if (document.querySelector("#proveit") || document.querySelector(".gadget-cat_a_lot-container") || document.querySelector("#gadget-word_count-tip")) {
      downButtonButtom = "85px";
      upButtonButtom = "127px";
    } else {
      downButtonButtom = "45px";
      upButtonButtom = "85px";
    }
    scrollDownButton.style.bottom = downButtonButtom;
    scrollUpButton2.style.bottom = upButtonButtom;
  };
  const scrollListenerWithThrottle = mw.util.throttle(scrollListener, 200);
  $(window).on("scroll selectionchange", scrollListenerWithThrottle);
};
//! src/ScrollUpButton/ScrollUpButton.ts
void (0, import_ext_gadget6.getBody)().then(function scrollUpButton($body) {
  insertElementandListener($body);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Njcm9sbFVwQnV0dG9uL1Njcm9sbFVwQnV0dG9uLnRzIiwgInNyYy9TY3JvbGxVcEJ1dHRvbi9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9TY3JvbGxVcEJ1dHRvbi9jb21wb25lbnRzL3Njcm9sbEJ1dHRvbi50c3giLCAic3JjL1Njcm9sbFVwQnV0dG9uL21vZHVsZXMvaTE4bi50cyIsICJzcmMvU2Nyb2xsVXBCdXR0b24vbW9kdWxlcy9pbnNlcnRFbGVtZW50QW5kTGlzdGVuZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7aW5zZXJ0RWxlbWVudGFuZExpc3RlbmVyfSBmcm9tICcuL21vZHVsZXMvaW5zZXJ0RWxlbWVudEFuZExpc3RlbmVyJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBzY3JvbGxVcEJ1dHRvbigkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0aW5zZXJ0RWxlbWVudGFuZExpc3RlbmVyKCRib2R5KTtcbn0pO1xuIiwgImNvbnN0IENMQVNTX05BTUU6IHN0cmluZyA9ICdnYWRnZXQtc2Nyb2xsX3VwX2J1dHRvbic7XG5jb25zdCBDTEFTU19OQU1FX0RPV046IHN0cmluZyA9IGAke0NMQVNTX05BTUV9LWRvd25gO1xuY29uc3QgQ0xBU1NfTkFNRV9VUDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX0tdXBgO1xuXG5leHBvcnQge0NMQVNTX05BTUUsIENMQVNTX05BTUVfRE9XTiwgQ0xBU1NfTkFNRV9VUH07XG4iLCAiaW1wb3J0IHtDTEFTU19OQU1FLCBDTEFTU19OQU1FX0RPV04sIENMQVNTX05BTUVfVVB9IGZyb20gJy4uL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuSlNYJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vbW9kdWxlcy9pMThuJztcbmltcG9ydCB7c2Nyb2xsVG9wfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuXHRhZGRpdGlvbmFsQ2xhc3NOYW1lOiBzdHJpbmc7XG5cdGFsdDogc3RyaW5nO1xuXHRhcmlhTGFiZWw6IHN0cmluZztcblx0b25DbGljazogKGV2ZW50PzogTW91c2VFdmVudCkgPT4gdm9pZDtcblx0b25Nb3VzZUVudGVyOiAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHZvaWQ7XG5cdG9uTW91c2VMZWF2ZTogKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB2b2lkO1xufVxuXG5mdW5jdGlvbiBTY3JvbGxCdXR0b24ocHJvcHM6IFByb3BzKSB7XG5cdGNvbnN0IHthZGRpdGlvbmFsQ2xhc3NOYW1lLCBhbHQsIGFyaWFMYWJlbCwgb25DbGljaywgb25Nb3VzZUVudGVyLCBvbk1vdXNlTGVhdmV9ID0gcHJvcHM7XG5cblx0cmV0dXJuIChcblx0XHQ8aW1nXG5cdFx0XHRjbGFzc05hbWU9e1tDTEFTU19OQU1FLCBhZGRpdGlvbmFsQ2xhc3NOYW1lLCAnbm9wcmludCddfVxuXHRcdFx0c3JjPXtcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMScgaGVpZ2h0PScxJyUzRSUzQy9zdmclM0VcIn1cblx0XHRcdHdpZHRoPVwiMzJcIlxuXHRcdFx0aGVpZ2h0PVwiMzJcIlxuXHRcdFx0ZHJhZ2dhYmxlPXtmYWxzZX1cblx0XHRcdGFsdD17YWx0fVxuXHRcdFx0YXJpYS1sYWJlbD17YXJpYUxhYmVsfVxuXHRcdFx0b25DbGljaz17b25DbGlja31cblx0XHRcdG9uTW91c2VFbnRlcj17b25Nb3VzZUVudGVyfVxuXHRcdFx0b25Nb3VzZUxlYXZlPXtvbk1vdXNlTGVhdmV9XG5cdFx0Lz5cblx0KTtcbn1cblxuY29uc3QgVE9fQk9UVE9NOiBzdHJpbmcgPSBnZXRNZXNzYWdlKCdUb0JvdHRvbScpO1xuY29uc3QgVE9fVE9QOiBzdHJpbmcgPSBnZXRNZXNzYWdlKCdUb1RvcCcpO1xuXG5jb25zdCBTY3JvbGxEb3duQnV0dG9uID0gKG9uTW91c2VFbnRlck1vdXNlTGVhdmU6IChldmVudDogTW91c2VFdmVudCkgPT4gdm9pZCkgPT4gKFxuXHQ8U2Nyb2xsQnV0dG9uXG5cdFx0YWRkaXRpb25hbENsYXNzTmFtZT17Q0xBU1NfTkFNRV9ET1dOfVxuXHRcdGFsdD17VE9fQk9UVE9NfVxuXHRcdGFyaWFMYWJlbD17VE9fQk9UVE9NfVxuXHRcdG9uQ2xpY2s9eygpOiB2b2lkID0+IHtcblx0XHRcdHNjcm9sbFRvcCgoJChkb2N1bWVudCkuaGVpZ2h0KCkgPz8gMCkgLSAoJCh3aW5kb3cpLmhlaWdodCgpID8/IDApKTtcblx0XHR9fVxuXHRcdG9uTW91c2VFbnRlcj17b25Nb3VzZUVudGVyTW91c2VMZWF2ZX1cblx0XHRvbk1vdXNlTGVhdmU9e29uTW91c2VFbnRlck1vdXNlTGVhdmV9XG5cdC8+XG4pO1xuXG5jb25zdCBTY3JvbGxVcEJ1dHRvbiA9IChvbk1vdXNlRW50ZXJNb3VzZUxlYXZlOiAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHZvaWQpID0+IChcblx0PFNjcm9sbEJ1dHRvblxuXHRcdGFkZGl0aW9uYWxDbGFzc05hbWU9e0NMQVNTX05BTUVfVVB9XG5cdFx0YWx0PXtUT19UT1B9XG5cdFx0YXJpYUxhYmVsPXtUT19UT1B9XG5cdFx0b25DbGljaz17KCk6IHZvaWQgPT4ge1xuXHRcdFx0c2Nyb2xsVG9wKDApO1xuXHRcdH19XG5cdFx0b25Nb3VzZUVudGVyPXtvbk1vdXNlRW50ZXJNb3VzZUxlYXZlfVxuXHRcdG9uTW91c2VMZWF2ZT17b25Nb3VzZUVudGVyTW91c2VMZWF2ZX1cblx0Lz5cbik7XG5cbmV4cG9ydCB7U2Nyb2xsRG93bkJ1dHRvbiwgU2Nyb2xsVXBCdXR0b259O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRUb0JvdHRvbTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTY3JvbGwgdG8gdGhlIGJvdHRvbScsXG5cdFx0XHQnemgtaGFucyc6ICfmu5rliqjoh7PpobXlupUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5ru+5YuV6Iez6aCB5bqVJyxcblx0XHR9KSxcblx0XHRUb1RvcDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdHbyBiYWNrIHRvIHRoZSB0b3AnLFxuXHRcdFx0J3poLWhhbnMnOiAn5rua5Yqo6Iez6aG16aG2Jyxcblx0XHRcdCd6aC1oYW50JzogJ+a7vuWLleiHs+mggemggicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7U2Nyb2xsRG93bkJ1dHRvbiwgU2Nyb2xsVXBCdXR0b259IGZyb20gJy4uL2NvbXBvbmVudHMvc2Nyb2xsQnV0dG9uJztcbmltcG9ydCB7Y2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7dGlwcHl9IGZyb20gJ2V4dC5nYWRnZXQuVGlwcHknO1xuXG5jb25zdCBpbnNlcnRFbGVtZW50YW5kTGlzdGVuZXIgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0IG9uTW91c2VFbnRlck1vdXNlTGVhdmUgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcblx0XHRjaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlKGV2ZW50KTtcblx0fTtcblxuXHRjb25zdCBzY3JvbGxEb3duQnV0dG9uID0gU2Nyb2xsRG93bkJ1dHRvbihvbk1vdXNlRW50ZXJNb3VzZUxlYXZlKTtcblx0Y29uc3Qgc2Nyb2xsVXBCdXR0b24gPSBTY3JvbGxVcEJ1dHRvbihvbk1vdXNlRW50ZXJNb3VzZUxlYXZlKTtcblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgW3Njcm9sbERvd25CdXR0b24sIHNjcm9sbFVwQnV0dG9uXSkge1xuXHRcdCRib2R5LmFwcGVuZChlbGVtZW50KTtcblxuXHRcdHRpcHB5KGVsZW1lbnQsIHtcblx0XHRcdGFycm93OiB0cnVlLFxuXHRcdFx0Y29udGVudDogZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FsdCcpIGFzIHN0cmluZyxcblx0XHRcdHBsYWNlbWVudDogJ2xlZnQnLFxuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3Qgc2Nyb2xsTGlzdGVuZXIgPSAoKTogdm9pZCA9PiB7XG5cdFx0bGV0IGRvd25CdXR0b25CdXR0b206IHN0cmluZztcblx0XHRsZXQgdXBCdXR0b25CdXR0b206IHN0cmluZztcblxuXHRcdGlmIChcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm92ZWl0JykgfHxcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWRnZXQtY2F0X2FfbG90LWNvbnRhaW5lcicpIHx8XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FkZ2V0LXdvcmRfY291bnQtdGlwJylcblx0XHQpIHtcblx0XHRcdGRvd25CdXR0b25CdXR0b20gPSAnODVweCc7XG5cdFx0XHR1cEJ1dHRvbkJ1dHRvbSA9ICcxMjdweCc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRvd25CdXR0b25CdXR0b20gPSAnNDVweCc7XG5cdFx0XHR1cEJ1dHRvbkJ1dHRvbSA9ICc4NXB4Jztcblx0XHR9XG5cblx0XHRzY3JvbGxEb3duQnV0dG9uLnN0eWxlLmJvdHRvbSA9IGRvd25CdXR0b25CdXR0b207XG5cdFx0c2Nyb2xsVXBCdXR0b24uc3R5bGUuYm90dG9tID0gdXBCdXR0b25CdXR0b207XG5cdH07XG5cdGNvbnN0IHNjcm9sbExpc3RlbmVyV2l0aFRocm90dGxlOiB0eXBlb2Ygc2Nyb2xsTGlzdGVuZXIgPSBtdy51dGlsLnRocm90dGxlKHNjcm9sbExpc3RlbmVyLCAyMDApO1xuXG5cdCQod2luZG93KS5vbignc2Nyb2xsIHNlbGVjdGlvbmNoYW5nZScsIHNjcm9sbExpc3RlbmVyV2l0aFRocm90dGxlKTtcbn07XG5cbmV4cG9ydCB7aW5zZXJ0RWxlbWVudGFuZExpc3RlbmVyfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFzQkMsUUFBQSxpQkFBQTs7QUNBdEIsSUFBTUMsYUFBcUI7QUFDM0IsSUFBTUMsa0JBQUEsR0FBQUMsT0FBNkJGLFlBQVUsT0FBQTtBQUM3QyxJQUFNRyxnQkFBQSxHQUFBRCxPQUEyQkYsWUFBVSxLQUFBOztBQ0QzQyxJQUFBSSxxQkFBa0JDLFFBQUFOLFFBQUEsZ0JBQUEsR0FBQSxDQUFBOztBQ0RsQixJQUFBTyxvQkFBdUJQLFFBQUEsaUJBQUE7QUFFdkIsSUFBTVEsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsV0FBQSxHQUFVRixrQkFBQUcsVUFBUztNQUNsQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEQyxRQUFBLEdBQU9MLGtCQUFBRyxVQUFTO01BQ2ZDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTUUsZUFBZUwsZ0JBQWdCO0FBRXJDLElBQU1NLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FEbEJBLElBQUFDLHFCQUF3QmhCLFFBQUEsaUJBQUE7QUFXeEIs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X05BTUVfRE9XTiIsICJjb25jYXQiLCAiQ0xBU1NfTkFNRV9VUCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiX190b0VTTSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiVG9Cb3R0b20iLCAibG9jYWxpemUiLCAiZW4iLCAiVG9Ub3AiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJTY3JvbGxCdXR0b24iLCAicHJvcHMiLCAiYWRkaXRpb25hbENsYXNzTmFtZSIsICJhbHQiLCAiYXJpYUxhYmVsIiwgIm9uQ2xpY2siLCAib25Nb3VzZUVudGVyIiwgIm9uTW91c2VMZWF2ZSIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgInNyYyIsICJ3aWR0aCIsICJoZWlnaHQiLCAiZHJhZ2dhYmxlIiwgIlRPX0JPVFRPTSIsICJUT19UT1AiLCAiU2Nyb2xsRG93bkJ1dHRvbiIsICJvbk1vdXNlRW50ZXJNb3VzZUxlYXZlIiwgIl8kJGhlaWdodCIsICJfJCRoZWlnaHQyIiwgInNjcm9sbFRvcCIsICIkIiwgImRvY3VtZW50IiwgIndpbmRvdyIsICJTY3JvbGxVcEJ1dHRvbiIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiaW1wb3J0X2V4dF9nYWRnZXQ1IiwgImluc2VydEVsZW1lbnRhbmRMaXN0ZW5lciIsICIkYm9keSIsICJldmVudCIsICJjaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlIiwgInNjcm9sbERvd25CdXR0b24iLCAic2Nyb2xsVXBCdXR0b24yIiwgIl9pIiwgIl9hcnIiLCAibGVuZ3RoIiwgImVsZW1lbnQiLCAiYXBwZW5kIiwgInRpcHB5IiwgImFycm93IiwgImNvbnRlbnQiLCAiZ2V0QXR0cmlidXRlIiwgInBsYWNlbWVudCIsICJzY3JvbGxMaXN0ZW5lciIsICJkb3duQnV0dG9uQnV0dG9tIiwgInVwQnV0dG9uQnV0dG9tIiwgInF1ZXJ5U2VsZWN0b3IiLCAic3R5bGUiLCAiYm90dG9tIiwgInNjcm9sbExpc3RlbmVyV2l0aFRocm90dGxlIiwgIm13IiwgInV0aWwiLCAidGhyb3R0bGUiLCAib24iLCAiZ2V0Qm9keSIsICJ0aGVuIiwgInNjcm9sbFVwQnV0dG9uIl0KfQo=
