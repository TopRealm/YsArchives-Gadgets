/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://en.wikipedia.org/wiki/User:Guarapiranga/accessKeysCheatSheet.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/AccessKeyCheatsheet}
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

// dist/AccessKeyCheatsheet/AccessKeyCheatsheet.js
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
//! src/AccessKeyCheatsheet/modules/addListener.ts
var messageDialog;
var addListener = ($element, windowManager, messageDialogProperty) => {
  $element.on("click", (event) => {
    event.preventDefault();
    if (messageDialog) {
      if (messageDialog.isOpened()) {
        messageDialog.close();
      } else {
        messageDialog.open(messageDialogProperty);
      }
      return;
    }
    messageDialog = new OO.ui.MessageDialog();
    windowManager.addWindows([messageDialog]);
    void windowManager.openWindow(messageDialog, messageDialogProperty);
  });
};
//! src/AccessKeyCheatsheet/modules/util/generateElements.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.JSX"), 1);
//! src/AccessKeyCheatsheet/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Close: (0, import_ext_gadget.localize)({
      en: "Close",
      ja: "閉じる",
      ru: "Закрыть",
      "zh-hans": "关闭",
      "zh-hant": "關閉"
    }),
    Text: (0, import_ext_gadget.localize)({
      en: "Open access keys cheatsheet",
      ja: "アクセスキーのチートシート",
      ru: "Открыть подсказку с клавиатурными ярлыками",
      "zh-hans": "显示键盘快捷键提示",
      "zh-hant": "顯示鍵盤快速鍵提示"
    }),
    Title: (0, import_ext_gadget.localize)({
      en: "Access keys cheatsheet",
      ja: "アクセスキーのチートシート",
      ru: "Подсказки клавиатурных ярлыков",
      "zh-hans": "键盘快捷键提示",
      "zh-hant": "鍵盤快速鍵提示"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/AccessKeyCheatsheet/modules/util/generateElements.tsx
var generateElements = ($body) => {
  const table = /* @__PURE__ */ import_ext_gadget2.default.createElement("table", {
    className: "wikitable",
    style: {
      width: "100%"
    }
  }, [...$body.find("[accesskey]")].map((element, index) => /* @__PURE__ */ import_ext_gadget2.default.createElement("tr", {
    key: index
  }, /* @__PURE__ */ import_ext_gadget2.default.createElement("th", null, element.accessKey.toUpperCase()), /* @__PURE__ */ import_ext_gadget2.default.createElement("td", null, (element.getAttribute("aria-label") || element.title || element.textContent || element.value || $body.find('label[for="'.concat(element.id, '"]')).text()).replace(/\s*?\[.+?]$/, "").trim()))));
  const $table = $(table);
  const $opener = $(/* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
    accessKey: "?"
  }, getMessage("Text")));
  return {
    $table,
    $opener
  };
};
//! src/AccessKeyCheatsheet/modules/util/generateMessageDialogProperty.ts
var generateMessageDialogProperty = ($element) => {
  const messageDialogProperty = {
    title: getMessage("Title"),
    message: $element,
    actions: [{
      action: "close",
      flags: ["safe", "close"],
      label: getMessage("Close")
    }],
    size: "medium"
  };
  return messageDialogProperty;
};
//! src/AccessKeyCheatsheet/AccessKeyCheatsheet.ts
var import_ext_gadget3 = require("ext.gadget.Util");
//! src/AccessKeyCheatsheet/modules/initWindowManager.ts
var initWindowManager = () => {
  const windowManager = new OO.ui.WindowManager();
  windowManager.$element.css({
    "margin-bottom": "0",
    width: "35em"
  });
  return windowManager;
};
//! src/AccessKeyCheatsheet/AccessKeyCheatsheet.ts
void (0, import_ext_gadget3.getBody)().then(function accessKeyCheatsheet($body) {
  const {
    $table,
    $opener
  } = generateElements($body);
  $opener.hide().appendTo($body);
  const windowManager = initWindowManager();
  windowManager.$element.appendTo($body);
  const messageDialogProperty = generateMessageDialogProperty($table);
  addListener($opener, windowManager, messageDialogProperty);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0FjY2Vzc0tleUNoZWF0c2hlZXQvbW9kdWxlcy9hZGRMaXN0ZW5lci50cyIsICJzcmMvQWNjZXNzS2V5Q2hlYXRzaGVldC9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVFbGVtZW50cy50c3giLCAic3JjL0FjY2Vzc0tleUNoZWF0c2hlZXQvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9BY2Nlc3NLZXlDaGVhdHNoZWV0L21vZHVsZXMvdXRpbC9nZW5lcmF0ZU1lc3NhZ2VEaWFsb2dQcm9wZXJ0eS50cyIsICJzcmMvQWNjZXNzS2V5Q2hlYXRzaGVldC9BY2Nlc3NLZXlDaGVhdHNoZWV0LnRzIiwgInNyYy9BY2Nlc3NLZXlDaGVhdHNoZWV0L21vZHVsZXMvaW5pdFdpbmRvd01hbmFnZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImxldCBtZXNzYWdlRGlhbG9nOiBPTy51aS5NZXNzYWdlRGlhbG9nO1xuXG5jb25zdCBhZGRMaXN0ZW5lciA9IChcblx0JGVsZW1lbnQ6IEpRdWVyeSxcblx0d2luZG93TWFuYWdlcjogT08udWkuV2luZG93TWFuYWdlcixcblx0bWVzc2FnZURpYWxvZ1Byb3BlcnR5OiBPTy51aS5XaW5kb3dNYW5hZ2VyLldpbmRvd09wZW5pbmdEYXRhXG4pOiB2b2lkID0+IHtcblx0JGVsZW1lbnQub24oJ2NsaWNrJywgKGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGlmIChtZXNzYWdlRGlhbG9nKSB7XG5cdFx0XHRpZiAobWVzc2FnZURpYWxvZy5pc09wZW5lZCgpKSB7XG5cdFx0XHRcdG1lc3NhZ2VEaWFsb2cuY2xvc2UoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG1lc3NhZ2VEaWFsb2cub3BlbihtZXNzYWdlRGlhbG9nUHJvcGVydHkpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdG1lc3NhZ2VEaWFsb2cgPSBuZXcgT08udWkuTWVzc2FnZURpYWxvZygpO1xuXHRcdHdpbmRvd01hbmFnZXIuYWRkV2luZG93cyhbbWVzc2FnZURpYWxvZ10pO1xuXHRcdHZvaWQgd2luZG93TWFuYWdlci5vcGVuV2luZG93KG1lc3NhZ2VEaWFsb2csIG1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHthZGRMaXN0ZW5lcn07XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuSlNYJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNvbnN0IGdlbmVyYXRlRWxlbWVudHMgPSAoXG5cdCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PlxuKToge1xuXHQkdGFibGU6IEpRdWVyeTtcblx0JG9wZW5lcjogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50Pjtcbn0gPT4ge1xuXHRjb25zdCB0YWJsZSA9IChcblx0XHQ8dGFibGUgY2xhc3NOYW1lPVwid2lraXRhYmxlXCIgc3R5bGU9e3t3aWR0aDogJzEwMCUnfX0+XG5cdFx0XHR7Wy4uLiRib2R5LmZpbmQoJ1thY2Nlc3NrZXldJyldLm1hcDxSZWFjdC5SZWFjdEVsZW1lbnQ+KChlbGVtZW50LCBpbmRleCkgPT4gKFxuXHRcdFx0XHQ8dHIga2V5PXtpbmRleH0+XG5cdFx0XHRcdFx0PHRoPntlbGVtZW50LmFjY2Vzc0tleS50b1VwcGVyQ2FzZSgpfTwvdGg+XG5cdFx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0eyhcblx0XHRcdFx0XHRcdFx0ZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSB8fFxuXHRcdFx0XHRcdFx0XHRlbGVtZW50LnRpdGxlIHx8XG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQudGV4dENvbnRlbnQgfHxcblx0XHRcdFx0XHRcdFx0KGVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgfHxcblx0XHRcdFx0XHRcdFx0JGJvZHkuZmluZChgbGFiZWxbZm9yPVwiJHtlbGVtZW50LmlkfVwiXWApLnRleHQoKVxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHQucmVwbGFjZSgvXFxzKj9cXFsuKz9dJC8sICcnKVxuXHRcdFx0XHRcdFx0XHQudHJpbSgpfVxuXHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdDwvdHI+XG5cdFx0XHQpKX1cblx0XHQ8L3RhYmxlPlxuXHQpO1xuXHRjb25zdCAkdGFibGUgPSAkKHRhYmxlKSBhcyBKUXVlcnk7XG5cblx0Y29uc3QgJG9wZW5lciA9ICQoPGEgYWNjZXNzS2V5PVwiP1wiPntnZXRNZXNzYWdlKCdUZXh0Jyl9PC9hPikgYXMgSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PjtcblxuXHRyZXR1cm4ge1xuXHRcdCR0YWJsZSxcblx0XHQkb3BlbmVyLFxuXHR9O1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZUVsZW1lbnRzfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0Q2xvc2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ2xvc2UnLFxuXHRcdFx0amE6ICfplonjgZjjgosnLFxuXHRcdFx0cnU6ICfQl9Cw0LrRgNGL0YLRjCcsXG5cdFx0XHQnemgtaGFucyc6ICflhbPpl60nLFxuXHRcdFx0J3poLWhhbnQnOiAn6Zec6ZaJJyxcblx0XHR9KSxcblx0XHRUZXh0OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ09wZW4gYWNjZXNzIGtleXMgY2hlYXRzaGVldCcsXG5cdFx0XHRqYTogJ+OCouOCr+OCu+OCueOCreODvOOBruODgeODvOODiOOCt+ODvOODiCcsXG5cdFx0XHRydTogJ9Ce0YLQutGA0YvRgtGMINC/0L7QtNGB0LrQsNC30LrRgyDRgSDQutC70LDQstC40LDRgtGD0YDQvdGL0LzQuCDRj9GA0LvRi9C60LDQvNC4Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+aYvuekuumUruebmOW/q+aNt+mUruaPkOekuicsXG5cdFx0XHQnemgtaGFudCc6ICfpoa/npLrpjbXnm6Tlv6vpgJ/pjbXmj5DnpLonLFxuXHRcdH0pLFxuXHRcdFRpdGxlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0FjY2VzcyBrZXlzIGNoZWF0c2hlZXQnLFxuXHRcdFx0amE6ICfjgqLjgq/jgrvjgrnjgq3jg7zjga7jg4Hjg7zjg4jjgrfjg7zjg4gnLFxuXHRcdFx0cnU6ICfQn9C+0LTRgdC60LDQt9C60Lgg0LrQu9Cw0LLQuNCw0YLRg9GA0L3Ri9GFINGP0YDQu9GL0LrQvtCyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+mUruebmOW/q+aNt+mUruaPkOekuicsXG5cdFx0XHQnemgtaGFudCc6ICfpjbXnm6Tlv6vpgJ/pjbXmj5DnpLonLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5jb25zdCBnZW5lcmF0ZU1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSA9ICgkZWxlbWVudDogSlF1ZXJ5KTogT08udWkuV2luZG93TWFuYWdlci5XaW5kb3dPcGVuaW5nRGF0YSA9PiB7XG5cdGNvbnN0IG1lc3NhZ2VEaWFsb2dQcm9wZXJ0eTogT08udWkuV2luZG93TWFuYWdlci5XaW5kb3dPcGVuaW5nRGF0YSA9IHtcblx0XHR0aXRsZTogZ2V0TWVzc2FnZSgnVGl0bGUnKSxcblx0XHRtZXNzYWdlOiAkZWxlbWVudCxcblx0XHRhY3Rpb25zOiBbXG5cdFx0XHR7XG5cdFx0XHRcdGFjdGlvbjogJ2Nsb3NlJyxcblx0XHRcdFx0ZmxhZ3M6IFsnc2FmZScsICdjbG9zZSddLFxuXHRcdFx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnQ2xvc2UnKSxcblx0XHRcdH0sXG5cdFx0XSxcblx0XHRzaXplOiAnbWVkaXVtJyxcblx0fTtcblxuXHRyZXR1cm4gbWVzc2FnZURpYWxvZ1Byb3BlcnR5O1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZU1lc3NhZ2VEaWFsb2dQcm9wZXJ0eX07XG4iLCAiaW1wb3J0IHthZGRMaXN0ZW5lcn0gZnJvbSAnLi9tb2R1bGVzL2FkZExpc3RlbmVyJztcbmltcG9ydCB7Z2VuZXJhdGVFbGVtZW50c30gZnJvbSAnLi9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVFbGVtZW50cyc7XG5pbXBvcnQge2dlbmVyYXRlTWVzc2FnZURpYWxvZ1Byb3BlcnR5fSBmcm9tICcuL21vZHVsZXMvdXRpbC9nZW5lcmF0ZU1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2luaXRXaW5kb3dNYW5hZ2VyfSBmcm9tICcuL21vZHVsZXMvaW5pdFdpbmRvd01hbmFnZXInO1xuXG4vKipcbiAqIEFkZHMgYWx0K3NoaWZ0Kz8gYXMgYW4gYWNjZXNzIGtleSB0byBzaG93IGEgbGlzdCBvZiBhbGwgZGVmYXVsdCBhY2Nlc3Mga2V5c1xuICovXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGFjY2Vzc0tleUNoZWF0c2hlZXQoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdGNvbnN0IHskdGFibGUsICRvcGVuZXJ9ID0gZ2VuZXJhdGVFbGVtZW50cygkYm9keSk7XG5cdCRvcGVuZXIuaGlkZSgpLmFwcGVuZFRvKCRib2R5KTtcblxuXHRjb25zdCB3aW5kb3dNYW5hZ2VyOiBPTy51aS5XaW5kb3dNYW5hZ2VyID0gaW5pdFdpbmRvd01hbmFnZXIoKTtcblx0d2luZG93TWFuYWdlci4kZWxlbWVudC5hcHBlbmRUbygkYm9keSk7XG5cblx0Y29uc3QgbWVzc2FnZURpYWxvZ1Byb3BlcnR5OiBPTy51aS5XaW5kb3dNYW5hZ2VyLldpbmRvd09wZW5pbmdEYXRhID0gZ2VuZXJhdGVNZXNzYWdlRGlhbG9nUHJvcGVydHkoJHRhYmxlKTtcblxuXHRhZGRMaXN0ZW5lcigkb3BlbmVyLCB3aW5kb3dNYW5hZ2VyLCBtZXNzYWdlRGlhbG9nUHJvcGVydHkpO1xufSk7XG4iLCAiY29uc3QgaW5pdFdpbmRvd01hbmFnZXIgPSAoKTogT08udWkuV2luZG93TWFuYWdlciA9PiB7XG5cdGNvbnN0IHdpbmRvd01hbmFnZXI6IE9PLnVpLldpbmRvd01hbmFnZXIgPSBuZXcgT08udWkuV2luZG93TWFuYWdlcigpO1xuXG5cdHdpbmRvd01hbmFnZXIuJGVsZW1lbnQuY3NzKHtcblx0XHQnbWFyZ2luLWJvdHRvbSc6ICcwJyxcblx0XHR3aWR0aDogJzM1ZW0nLFxuXHR9KTtcblxuXHRyZXR1cm4gd2luZG93TWFuYWdlcjtcbn07XG5cbmV4cG9ydCB7aW5pdFdpbmRvd01hbmFnZXJ9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBO0FBRUosSUFBTUMsY0FBY0EsQ0FDbkJDLFVBQ0FDLGVBQ0FDLDBCQUNVO0FBQ1ZGLFdBQVNHLEdBQUcsU0FBVUMsV0FBZ0I7QUFDckNBLFVBQU1DLGVBQWU7QUFFckIsUUFBSVAsZUFBZTtBQUNsQixVQUFJQSxjQUFjUSxTQUFTLEdBQUc7QUFDN0JSLHNCQUFjUyxNQUFNO01BQ3JCLE9BQU87QUFDTlQsc0JBQWNVLEtBQUtOLHFCQUFxQjtNQUN6QztBQUNBO0lBQ0Q7QUFFQUosb0JBQWdCLElBQUlXLEdBQUdDLEdBQUdDLGNBQWM7QUFDeENWLGtCQUFjVyxXQUFXLENBQUNkLGFBQWEsQ0FBQztBQUN4QyxTQUFLRyxjQUFjWSxXQUFXZixlQUFlSSxxQkFBcUI7RUFDbkUsQ0FBQztBQUNGOztBQ3ZCQSxJQUFBWSxxQkFBa0JDLFFBQUFD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ZXMiOiBbIm1lc3NhZ2VEaWFsb2ciLCAiYWRkTGlzdGVuZXIiLCAiJGVsZW1lbnQiLCAid2luZG93TWFuYWdlciIsICJtZXNzYWdlRGlhbG9nUHJvcGVydHkiLCAib24iLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAiaXNPcGVuZWQiLCAiY2xvc2UiLCAib3BlbiIsICJPTyIsICJ1aSIsICJNZXNzYWdlRGlhbG9nIiwgImFkZFdpbmRvd3MiLCAib3BlbldpbmRvdyIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJDbG9zZSIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJydSIsICJUZXh0IiwgIlRpdGxlIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJnZW5lcmF0ZUVsZW1lbnRzIiwgIiRib2R5IiwgInRhYmxlIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAic3R5bGUiLCAid2lkdGgiLCAiZmluZCIsICJtYXAiLCAiZWxlbWVudCIsICJpbmRleCIsICJhY2Nlc3NLZXkiLCAidG9VcHBlckNhc2UiLCAiZ2V0QXR0cmlidXRlIiwgInRpdGxlIiwgInRleHRDb250ZW50IiwgInZhbHVlIiwgImNvbmNhdCIsICJpZCIsICJ0ZXh0IiwgInJlcGxhY2UiLCAidHJpbSIsICIkdGFibGUiLCAiJCIsICIkb3BlbmVyIiwgImdlbmVyYXRlTWVzc2FnZURpYWxvZ1Byb3BlcnR5IiwgIm1lc3NhZ2UiLCAiYWN0aW9ucyIsICJhY3Rpb24iLCAiZmxhZ3MiLCAibGFiZWwiLCAic2l6ZSIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiaW5pdFdpbmRvd01hbmFnZXIiLCAiV2luZG93TWFuYWdlciIsICJjc3MiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImFjY2Vzc0tleUNoZWF0c2hlZXQiLCAiaGlkZSIsICJhcHBlbmRUbyJdCn0K
