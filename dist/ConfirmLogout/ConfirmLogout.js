/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/ConfirmLogout}
 * @author 安忆 <i@anyi.in>
 * @license GPL-3.0-or-later {@link https://youshou.wiki/wiki/H:GPLV3}
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

// dist/ConfirmLogout/ConfirmLogout.js
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}
//! src/ConfirmLogout/options.json
var logoutElementSelector = '#ca-cb-logout>a,#topbar>a[href*="UserLogout"],#pt-logout>a';
var logoutElementSelectorOfVector2022StickyHeader = "#pt-logout-sticky-header>a";
var version = "3.0";
//! src/ConfirmLogout/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "Network error": (0, import_ext_gadget.localize)({
      en: "Network error",
      ja: "ネットワークエラー",
      "zh-hans": "网络异常",
      "zh-hant": "網路異常"
    }),
    Confirm: (0, import_ext_gadget.localize)({
      en: "Confirm logout?",
      ja: "ログアウトしますか？",
      "zh-hans": "您确定要退出吗？",
      "zh-hant": "您確定要登出嗎？"
    }),
    Succeed: (0, import_ext_gadget.localize)({
      en: "Logout succeed. Refreshing...",
      ja: "ログアウトに成功しました。再読み込みします...",
      "zh-hans": "退出成功，即将刷新页面……",
      "zh-hant": "登出成功，即將重新載入……"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/ConfirmLogout/modules/addListener.ts
var import_ext_gadget6 = require("ext.gadget.Util");
//! src/ConfirmLogout/modules/util/refreshEventListener.ts
var import_ext_gadget2 = require("ext.gadget.FilterAlteredClicks");
var refreshEventListener = ($element, clickListener2) => {
  const hoverListener = () => {
    $element.off("click");
    $element.on("click", (0, import_ext_gadget2.filterAlteredClicks)(clickListener2));
  };
  const hoverListenerWithDebounce = mw.util.debounce(hoverListener, 200, true);
  $element.on("mouseover touchstart", {
    passive: true
  }, hoverListenerWithDebounce);
};
//! src/ConfirmLogout/modules/addListener.ts
var import_ext_gadget7 = require("ext.gadget.Toastify");
//! src/ConfirmLogout/modules/api.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var api = (0, import_ext_gadget3.initMwApi)("ConfirmLogout/".concat(version));
//! src/ConfirmLogout/modules/util/logout.ts
var import_ext_gadget4 = require("ext.gadget.Toastify");
var logout = /* @__PURE__ */ (function() {
  var _ref = _asyncToGenerator(function* (toastifyInstance) {
    yield api.postWithEditToken({
      action: "logout"
    });
    toastifyInstance.hideToast();
    (0, import_ext_gadget4.toastify)({
      text: getMessage("Succeed")
    }, "success");
    location.reload();
  });
  return function logout2(_x) {
    return _ref.apply(this, arguments);
  };
})();
//! src/ConfirmLogout/modules/util/showError.ts
var import_ext_gadget5 = require("ext.gadget.Toastify");
var showError = (error, toastifyInstance) => {
  console.error("[ConfirmLogout] Ajax error:", error);
  toastifyInstance.hideToast();
  (0, import_ext_gadget5.toastify)({
    text: getMessage("Network error")
  }, "error");
};
//! src/ConfirmLogout/modules/tryLogout.ts
var tryLogout = /* @__PURE__ */ (function() {
  var _ref2 = _asyncToGenerator(function* (toastifyInstance) {
    try {
      yield logout(toastifyInstance);
    } catch (error) {
      showError(error, toastifyInstance);
    }
  });
  return function tryLogout2(_x2) {
    return _ref2.apply(this, arguments);
  };
})();
//! src/ConfirmLogout/modules/addListener.ts
var {
  skin
} = mw.config.get();
var clickListener = /* @__PURE__ */ (function() {
  var _ref3 = _asyncToGenerator(function* (event) {
    event.preventDefault();
    const isConfirm = yield (0, import_ext_gadget6.oouiConfirmWithStyle)(getMessage("Confirm"));
    if (!isConfirm) {
      return;
    }
    const toastifyInstance = (0, import_ext_gadget7.toastify)({
      text: mw.msg("logging-out-notify"),
      duration: -1
    }, "info");
    void tryLogout(toastifyInstance);
  });
  return function clickListener2(_x3) {
    return _ref3.apply(this, arguments);
  };
})();
var addListener = ($element) => {
  var _$body$get;
  refreshEventListener($element, (event) => {
    void clickListener(event);
  });
  if (skin !== "vector-2022") {
    return;
  }
  const $body = $element.parents("body");
  const observerCallback = (_mutations, observer) => {
    if (!$body.hasClass("vector-sticky-header-visible")) {
      return;
    }
    const SELECTOR = logoutElementSelectorOfVector2022StickyHeader;
    const element = document.querySelector(SELECTOR);
    if (!element) {
      return;
    }
    const elementClone = element.cloneNode(true);
    element.replaceWith(elementClone);
    refreshEventListener($body.find(SELECTOR), (event) => {
      void clickListener(event);
    });
    observer.disconnect();
  };
  const mutationObserver = new MutationObserver(observerCallback);
  mutationObserver.observe((_$body$get = $body.get(0)) !== null && _$body$get !== void 0 ? _$body$get : document.documentElement, {
    attributes: true,
    attributeFilter: ["class"]
  });
};
//! src/ConfirmLogout/ConfirmLogout.ts
var import_ext_gadget8 = require("ext.gadget.Util");
var {
  wgUserName
} = mw.config.get();
void (0, import_ext_gadget8.getBody)().then(function confirmLogout($body) {
  if (!wgUserName) {
    return;
  }
  const $element = $body.find(logoutElementSelector);
  if (!$element.length) {
    return;
  }
  addListener($element);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NvbmZpcm1Mb2dvdXQvb3B0aW9ucy5qc29uIiwgInNyYy9Db25maXJtTG9nb3V0L21vZHVsZXMvaTE4bi50cyIsICJzcmMvQ29uZmlybUxvZ291dC9tb2R1bGVzL2FkZExpc3RlbmVyLnRzIiwgInNyYy9Db25maXJtTG9nb3V0L21vZHVsZXMvdXRpbC9yZWZyZXNoRXZlbnRMaXN0ZW5lci50cyIsICJzcmMvQ29uZmlybUxvZ291dC9tb2R1bGVzL2FwaS50cyIsICJzcmMvQ29uZmlybUxvZ291dC9tb2R1bGVzL3V0aWwvbG9nb3V0LnRzIiwgInNyYy9Db25maXJtTG9nb3V0L21vZHVsZXMvdXRpbC9zaG93RXJyb3IudHMiLCAic3JjL0NvbmZpcm1Mb2dvdXQvbW9kdWxlcy90cnlMb2dvdXQudHMiLCAic3JjL0NvbmZpcm1Mb2dvdXQvQ29uZmlybUxvZ291dC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcImxvZ291dEVsZW1lbnRTZWxlY3RvclwiOiBcIiNjYS1jYi1sb2dvdXQ+YSwjdG9wYmFyPmFbaHJlZio9XFxcIlVzZXJMb2dvdXRcXFwiXSwjcHQtbG9nb3V0PmFcIixcblx0XCJsb2dvdXRFbGVtZW50U2VsZWN0b3JPZlZlY3RvcjIwMjJTdGlja3lIZWFkZXJcIjogXCIjcHQtbG9nb3V0LXN0aWNreS1oZWFkZXI+YVwiLFxuXHRcInZlcnNpb25cIjogXCIzLjBcIlxufVxuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnTmV0d29yayBlcnJvcic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTmV0d29yayBlcnJvcicsXG5cdFx0XHRqYTogJ+ODjeODg+ODiOODr+ODvOOCr+OCqOODqeODvCcsXG5cdFx0XHQnemgtaGFucyc6ICfnvZHnu5zlvILluLgnLFxuXHRcdFx0J3poLWhhbnQnOiAn57ay6Lev55Ww5bi4Jyxcblx0XHR9KSxcblx0XHRDb25maXJtOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvbmZpcm0gbG9nb3V0PycsXG5cdFx0XHRqYTogJ+ODreOCsOOCouOCpuODiOOBl+OBvuOBmeOBi++8nycsXG5cdFx0XHQnemgtaGFucyc6ICfmgqjnoa7lrpropoHpgIDlh7rlkJfvvJ8nLFxuXHRcdFx0J3poLWhhbnQnOiAn5oKo56K65a6a6KaB55m75Ye65ZeO77yfJyxcblx0XHR9KSxcblx0XHRTdWNjZWVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvZ291dCBzdWNjZWVkLiBSZWZyZXNoaW5nLi4uJyxcblx0XHRcdGphOiAn44Ot44Kw44Ki44Km44OI44Gr5oiQ5Yqf44GX44G+44GX44Gf44CC5YaN6Kqt44G/6L6844G/44GX44G+44GZLi4uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+mAgOWHuuaIkOWKn++8jOWNs+WwhuWIt+aWsOmhtemdouKApuKApicsXG5cdFx0XHQnemgtaGFudCc6ICfnmbvlh7rmiJDlip/vvIzljbPlsIfph43mlrDovInlhaXigKbigKYnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge29vdWlDb25maXJtV2l0aFN0eWxlfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtyZWZyZXNoRXZlbnRMaXN0ZW5lcn0gZnJvbSAnLi91dGlsL3JlZnJlc2hFdmVudExpc3RlbmVyJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuaW1wb3J0IHt0cnlMb2dvdXR9IGZyb20gJy4vdHJ5TG9nb3V0JztcblxuY29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXG5jb25zdCBjbGlja0xpc3RlbmVyID0gYXN5bmMgKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdGNvbnN0IGlzQ29uZmlybTogYm9vbGVhbiA9IGF3YWl0IG9vdWlDb25maXJtV2l0aFN0eWxlKGdldE1lc3NhZ2UoJ0NvbmZpcm0nKSk7XG5cdGlmICghaXNDb25maXJtKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgdG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IG13Lm1zZygnbG9nZ2luZy1vdXQtbm90aWZ5JyksXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblx0dm9pZCB0cnlMb2dvdXQodG9hc3RpZnlJbnN0YW5jZSk7XG59O1xuXG5jb25zdCBhZGRMaXN0ZW5lciA9ICgkZWxlbWVudDogSlF1ZXJ5KTogdm9pZCA9PiB7XG5cdHJlZnJlc2hFdmVudExpc3RlbmVyKCRlbGVtZW50LCAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50KTogdm9pZCA9PiB7XG5cdFx0dm9pZCBjbGlja0xpc3RlbmVyKGV2ZW50KTtcblx0fSk7XG5cblx0aWYgKHNraW4gIT09ICd2ZWN0b3ItMjAyMicpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPSAkZWxlbWVudC5wYXJlbnRzKCdib2R5Jyk7XG5cblx0Y29uc3Qgb2JzZXJ2ZXJDYWxsYmFjayA9IChfbXV0YXRpb25zOiBNdXRhdGlvblJlY29yZFtdLCBvYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlcik6IHZvaWQgPT4ge1xuXHRcdGlmICghJGJvZHkuaGFzQ2xhc3MoJ3ZlY3Rvci1zdGlja3ktaGVhZGVyLXZpc2libGUnKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IFNFTEVDVE9SOiBzdHJpbmcgPSBPUFRJT05TLmxvZ291dEVsZW1lbnRTZWxlY3Rvck9mVmVjdG9yMjAyMlN0aWNreUhlYWRlcjtcblx0XHRjb25zdCBlbGVtZW50OiBIVE1MQW5jaG9yRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SKTtcblx0XHRpZiAoIWVsZW1lbnQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBlbGVtZW50Q2xvbmU6IE5vZGUgPSBlbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcblx0XHRlbGVtZW50LnJlcGxhY2VXaXRoKGVsZW1lbnRDbG9uZSk7XG5cblx0XHRyZWZyZXNoRXZlbnRMaXN0ZW5lcigkYm9keS5maW5kKFNFTEVDVE9SKSwgKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0dm9pZCBjbGlja0xpc3RlbmVyKGV2ZW50KTtcblx0XHR9KTtcblx0XHRvYnNlcnZlci5kaXNjb25uZWN0KCk7XG5cdH07XG5cdGNvbnN0IG11dGF0aW9uT2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihvYnNlcnZlckNhbGxiYWNrKTtcblx0bXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKCRib2R5LmdldCgwKSA/PyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHtcblx0XHRhdHRyaWJ1dGVzOiB0cnVlLFxuXHRcdGF0dHJpYnV0ZUZpbHRlcjogWydjbGFzcyddLFxuXHR9KTtcbn07XG5cbmV4cG9ydCB7YWRkTGlzdGVuZXJ9O1xuIiwgImltcG9ydCB7ZmlsdGVyQWx0ZXJlZENsaWNrc30gZnJvbSAnZXh0LmdhZGdldC5GaWx0ZXJBbHRlcmVkQ2xpY2tzJztcblxuY29uc3QgcmVmcmVzaEV2ZW50TGlzdGVuZXIgPSAoJGVsZW1lbnQ6IEpRdWVyeSwgY2xpY2tMaXN0ZW5lcjogKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCkgPT4gdm9pZCk6IHZvaWQgPT4ge1xuXHRjb25zdCBob3Zlckxpc3RlbmVyID0gKCk6IHZvaWQgPT4ge1xuXHRcdCRlbGVtZW50Lm9mZignY2xpY2snKTtcblx0XHQkZWxlbWVudC5vbignY2xpY2snLCBmaWx0ZXJBbHRlcmVkQ2xpY2tzKGNsaWNrTGlzdGVuZXIpKTtcblx0fTtcblx0Y29uc3QgaG92ZXJMaXN0ZW5lcldpdGhEZWJvdW5jZTogdHlwZW9mIGhvdmVyTGlzdGVuZXIgPSBtdy51dGlsLmRlYm91bmNlKGhvdmVyTGlzdGVuZXIsIDIwMCwgdHJ1ZSk7XG5cblx0JGVsZW1lbnQub24oJ21vdXNlb3ZlciB0b3VjaHN0YXJ0Jywge3Bhc3NpdmU6IHRydWV9LCBob3Zlckxpc3RlbmVyV2l0aERlYm91bmNlKTtcbn07XG5cbmV4cG9ydCB7cmVmcmVzaEV2ZW50TGlzdGVuZXJ9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgQ29uZmlybUxvZ291dC8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuLi9hcGknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5jb25zdCBsb2dvdXQgPSBhc3luYyAodG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRhd2FpdCBhcGkucG9zdFdpdGhFZGl0VG9rZW4oe1xuXHRcdGFjdGlvbjogJ2xvZ291dCcsXG5cdH0pO1xuXG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ1N1Y2NlZWQnKSxcblx0XHR9LFxuXHRcdCdzdWNjZXNzJ1xuXHQpO1xuXG5cdGxvY2F0aW9uLnJlbG9hZCgpO1xufTtcblxuZXhwb3J0IHtsb2dvdXR9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3Qgc2hvd0Vycm9yID0gKGVycm9yOiB1bmtub3duLCB0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlKTogdm9pZCA9PiB7XG5cdGNvbnNvbGUuZXJyb3IoJ1tDb25maXJtTG9nb3V0XSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnTmV0d29yayBlcnJvcicpLFxuXHRcdH0sXG5cdFx0J2Vycm9yJ1xuXHQpO1xufTtcblxuZXhwb3J0IHtzaG93RXJyb3J9O1xuIiwgImltcG9ydCB7bG9nb3V0fSBmcm9tICcuL3V0aWwvbG9nb3V0JztcbmltcG9ydCB7c2hvd0Vycm9yfSBmcm9tICcuL3V0aWwvc2hvd0Vycm9yJztcblxuY29uc3QgdHJ5TG9nb3V0ID0gYXN5bmMgKHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0dHJ5IHtcblx0XHRhd2FpdCBsb2dvdXQodG9hc3RpZnlJbnN0YW5jZSk7XG5cdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0c2hvd0Vycm9yKGVycm9yLCB0b2FzdGlmeUluc3RhbmNlKTtcblx0fVxufTtcblxuZXhwb3J0IHt0cnlMb2dvdXR9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHthZGRMaXN0ZW5lcn0gZnJvbSAnLi9tb2R1bGVzL2FkZExpc3RlbmVyJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3Qge3dnVXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGNvbmZpcm1Mb2dvdXQoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdGlmICghd2dVc2VyTmFtZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkYm9keS5maW5kKE9QVElPTlMubG9nb3V0RWxlbWVudFNlbGVjdG9yKTtcblx0aWYgKCEkZWxlbWVudC5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRhZGRMaXN0ZW5lcigkZWxlbWVudCk7XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSx3QkFBeUI7QUFDekIsSUFBQUMsZ0RBQWlEO0FBQ2pELElBQUFDLFVBQVc7O0FDSFosSUFBQUMsb0JBQXVCQyxRQUFBLGlCQUFBO0FBRXZCLElBQU1DLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ04sa0JBQUEsR0FBaUJGLGtCQUFBRyxVQUFTO01BQ3pCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsVUFBQSxHQUFTTixrQkFBQUcsVUFBUztNQUNqQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RFLFVBQUEsR0FBU1Asa0JBQUFHLFVBQVM7TUFDakJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFX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QVE7QUFDckIsQ0FBQzsiLAogICJuYW1lcyI6IFsibG9nb3V0RWxlbWVudFNlbGVjdG9yIiwgImxvZ291dEVsZW1lbnRTZWxlY3Rvck9mVmVjdG9yMjAyMlN0aWNreUhlYWRlciIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIkNvbmZpcm0iLCAiU3VjY2VlZCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaW1wb3J0X2V4dF9nYWRnZXQ2IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZWZyZXNoRXZlbnRMaXN0ZW5lciIsICIkZWxlbWVudCIsICJjbGlja0xpc3RlbmVyMiIsICJob3Zlckxpc3RlbmVyIiwgIm9mZiIsICJvbiIsICJmaWx0ZXJBbHRlcmVkQ2xpY2tzIiwgImhvdmVyTGlzdGVuZXJXaXRoRGVib3VuY2UiLCAibXciLCAidXRpbCIsICJkZWJvdW5jZSIsICJwYXNzaXZlIiwgImltcG9ydF9leHRfZ2FkZ2V0NyIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImxvZ291dCIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInRvYXN0aWZ5SW5zdGFuY2UiLCAicG9zdFdpdGhFZGl0VG9rZW4iLCAiYWN0aW9uIiwgImhpZGVUb2FzdCIsICJ0b2FzdGlmeSIsICJ0ZXh0IiwgImxvY2F0aW9uIiwgInJlbG9hZCIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiaW1wb3J0X2V4dF9nYWRnZXQ1IiwgInNob3dFcnJvciIsICJlcnJvciIsICJjb25zb2xlIiwgInRyeUxvZ291dCIsICJfcmVmMiIsICJfeDIiLCAic2tpbiIsICJjb25maWciLCAiZ2V0IiwgImNsaWNrTGlzdGVuZXIiLCAiX3JlZjMiLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAiaXNDb25maXJtIiwgIm9vdWlDb25maXJtV2l0aFN0eWxlIiwgIm1zZyIsICJkdXJhdGlvbiIsICJfeDMiLCAiYWRkTGlzdGVuZXIiLCAiXyRib2R5JGdldCIsICIkYm9keSIsICJwYXJlbnRzIiwgIm9ic2VydmVyQ2FsbGJhY2siLCAiX211dGF0aW9ucyIsICJvYnNlcnZlciIsICJoYXNDbGFzcyIsICJTRUxFQ1RPUiIsICJlbGVtZW50IiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiZWxlbWVudENsb25lIiwgImNsb25lTm9kZSIsICJyZXBsYWNlV2l0aCIsICJmaW5kIiwgImRpc2Nvbm5lY3QiLCAibXV0YXRpb25PYnNlcnZlciIsICJNdXRhdGlvbk9ic2VydmVyIiwgIm9ic2VydmUiLCAiZG9jdW1lbnRFbGVtZW50IiwgImF0dHJpYnV0ZXMiLCAiYXR0cmlidXRlRmlsdGVyIiwgImltcG9ydF9leHRfZ2FkZ2V0OCIsICJ3Z1VzZXJOYW1lIiwgImdldEJvZHkiLCAidGhlbiIsICJjb25maXJtTG9nb3V0IiwgImxlbmd0aCJdCn0K
