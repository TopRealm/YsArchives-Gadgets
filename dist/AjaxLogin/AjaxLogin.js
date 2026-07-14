/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/AjaxLogin}
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

// dist/AjaxLogin/AjaxLogin.js
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
//! src/AjaxLogin/options.json
var loginElementSelector = 'a:has(.ajaxlogin-mount-point),#pt-login>a,.vector-user-menu-login>a,#user-tools>a[href*="Special"],.mainpage-top-menu>li:nth-child(2) a';
var version = "4.1";
//! src/AjaxLogin/AjaxLogin.ts
var import_ext_gadget14 = require("ext.gadget.Util");
//! src/AjaxLogin/modules/addListener.ts
var import_ext_gadget = require("ext.gadget.FilterAlteredClicks");
var addListener = ($element, eventListener) => {
  $element.on("click", (0, import_ext_gadget.filterAlteredClicks)(eventListener));
  $element.on("keydown", eventListener);
};
//! src/AjaxLogin/modules/api.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var api = (0, import_ext_gadget2.initMwApi)("AjaxLogin/".concat(version));
//! src/AjaxLogin/modules/core.tsx
var import_ext_gadget12 = __toESM(require("ext.gadget.JSX"), 1);
//! src/AjaxLogin/modules/util/checkValid.tsx
var import_ext_gadget4 = __toESM(require("ext.gadget.JSX"), 1);
//! src/AjaxLogin/modules/i18n.ts
var import_ext_gadget3 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "6-digit number": (0, import_ext_gadget3.localize)({
      en: "6-digit number",
      ja: "6桁の数字",
      "zh-hans": "6位数字",
      "zh-hant": "6位數字"
    }),
    Cancel: (0, import_ext_gadget3.localize)({
      en: "Cancel",
      ja: "キャンセル",
      zh: "取消"
    }),
    "Enter password": (0, import_ext_gadget3.localize)({
      en: "Enter password",
      ja: "パスワード",
      "zh-hans": "请输入密码",
      "zh-hant": "請輸入密碼"
    }),
    "Enter 2FA verification code": (0, import_ext_gadget3.localize)({
      en: "2FA verification code",
      ja: "2FA認証コード",
      "zh-hans": "请输入2FA验证码",
      "zh-hant": "請輸入2FA驗證碼"
    }),
    "Forgot password?": (0, import_ext_gadget3.localize)({
      en: "Forgot password?",
      ja: "パスワードをお忘れですか？",
      "zh-hans": "忘记密码？",
      "zh-hant": "忘記密碼？"
    }),
    "Getting login token": (0, import_ext_gadget3.localize)({
      en: "Getting login token",
      ja: "ログイントークンを取得しています",
      "zh-hans": "正在获取登录令牌",
      "zh-hant": "正在獲取登入權杖"
    }),
    "help for I agree with the relevant terms": (0, import_ext_gadget3.localize)({
      en: 'When you login, it means that you have carefully read, fully understood and agreed to comply with the <a rel="noopener" target="_blank" href="/wiki/LIB:TOS" title="Terms of Service">Terms of Service</a>, <a rel="noopener" target="_blank" href="/wiki/LIB:PIPP" title="Personal Information Protection Policy">Personal Information Protection Policy</a> and <a rel="noopener" target="_blank" href="/wiki/LIB:DAGZC" title="YsArchives Association">YsArchives Association</a>.',
      ja: 'ログインをすると、あなたは本サイトの『<a rel="noopener" target="_blank" href="/wiki/LIB:TOS" title="利用規約">利用規約</a>』『<a rel="noopener" target="_blank" href="/wiki/LIB:PIPP" title="個人情報保護条例">個人情報保護条例</a>』『<a rel="noopener" target="_blank" href="/wiki/LIB:GP" title="档案馆章程">档案馆章程</a>』を十分に理解し、同意したことになります。',
      "zh-hans": '登录时，即代表您已仔细阅读、充分了解并同意遵守本网站的《<a rel="noopener" target="_blank" href="/wiki/LIB:TOS" title="用户协议">用户协议</a>》《<a rel="noopener" target="_blank" href="/wiki/LIB:PIPP" title="个人信息保护条例">个人信息保护条例</a>》《<a rel="noopener" target="_blank" href="/wiki/LIB:GP" title="档案馆章程">档案馆章程</a>》。',
      "zh-hant": '登錄時，即代表您已仔細閱讀、充分了解並同意遵守本網站的《<a rel="noopener" target="_blank" href="/wiki/LIB:TOS" title="用戶協議">用戶協議</a>》《<a rel="noopener" target="_blank" href="/wiki/LIB:PIPP" title="個人信息保護条例">個人信息保護条例</a>》《<a rel="noopener" target="_blank" href="/wiki/LIB:GP" title="档案馆章程">档案馆章程</a>》。'
    }),
    "I agree": (0, import_ext_gadget3.localize)({
      en: "I agree",
      ja: "同意する",
      zh: "我同意"
    }),
    "I agree with the relevant terms": (0, import_ext_gadget3.localize)({
      en: "I agree with the relevant terms",
      ja: "関連する規約を読み、同意",
      "zh-hans": "我已阅读并同意相关条款",
      "zh-hant": "我已閲讀並同意相關條款"
    }),
    "Invalid 2FA verification code": (0, import_ext_gadget3.localize)({
      en: "Invalid 2FA verification code",
      ja: "2FA認証コードが間違っています",
      "zh-hans": "2FA验证码错误",
      "zh-hant": "2FA驗證碼錯誤"
    }),
    "Invalid username or password": (0, import_ext_gadget3.localize)({
      en: "Invalid username or password",
      ja: "利用者名またはパスワードが間違っています",
      "zh-cn": "用户名或密码错误",
      "zh-hk": "用戶名稱或密碼錯誤",
      "zh-tw": "使用者名稱或密碼錯誤"
    }),
    "Keep me logged in": (0, import_ext_gadget3.localize)({
      en: "Keep me logged in",
      ja: "ログイン状態を保持",
      "zh-hans": "记住我的登录状态",
      "zh-hant": "記住我的登入狀態"
    }),
    "Logging in": (0, import_ext_gadget3.localize)({
      en: "Logging in",
      ja: "ログインしています",
      "zh-hans": "正在登录",
      "zh-hant": "正在登入"
    }),
    Login: (0, import_ext_gadget3.localize)({
      en: "Login",
      ja: "ログイン",
      "zh-hans": "登录",
      "zh-hant": "登入"
    }),
    "Login cancelled": (0, import_ext_gadget3.localize)({
      en: "Login cancelled",
      ja: "ログインキャンセル",
      "zh-hans": "登录取消",
      "zh-hant": "登入取消"
    }),
    "Login succeed": (0, import_ext_gadget3.localize)({
      en: "Login succeed",
      ja: "ログインに成功しました",
      "zh-hans": "登录成功",
      "zh-hant": "登入成功"
    }),
    "Login token got": (0, import_ext_gadget3.localize)({
      en: "Login token got",
      ja: "ログイントークンの取得に成功しました",
      "zh-hans": "获取登录令牌成功",
      "zh-hant": "獲取登入權杖成功"
    }),
    "New password": (0, import_ext_gadget3.localize)({
      en: "New password",
      ja: "新しいパスワード",
      "zh-hans": "新密码",
      "zh-hant": "新密碼"
    }),
    "New password is required": (0, import_ext_gadget3.localize)({
      en: "New password is required",
      ja: "新しいパスワードを設定してください",
      "zh-hans": "需要设置新密码",
      "zh-hant": "需要設置新密碼"
    }),
    Password: (0, import_ext_gadget3.localize)({
      en: "Password",
      ja: "パスワード",
      "zh-hans": "密码",
      "zh-hant": "密碼"
    }),
    "Reset password": (0, import_ext_gadget3.localize)({
      en: "Reset password",
      ja: "パスワードをリセット",
      "zh-hans": "重置密码",
      "zh-hant": "重新設定密碼"
    }),
    Username: (0, import_ext_gadget3.localize)({
      en: "Username",
      ja: "利用者名",
      "zh-cn": "用户名",
      "zh-hk": "用戶名稱",
      "zh-tw": "使用者名稱"
    }),
    AgreedOrNot: (0, import_ext_gadget3.localize)({
      en: "Please read the relevant terms. If you agree, check the checkbox to confirm",
      ja: "関連する規約をお読みいただき、同意される場合は、チェックボックスにチェックを入れて確認してください",
      "zh-hans": "请阅读相关条款。若同意，勾选复选框以确认",
      "zh-hant": "請閲讀相關條款。若同意，勾選複選框以確認"
    }),
    DoubleCheckAgreedOrNot: (0, import_ext_gadget3.localize)({
      en: 'You have carefully read, fully understood and agreed to comply with our <a rel="noopener" target="_blank" href="/wiki/LIB:TOS" title="Terms of Service">Terms of Service</a>, <a rel="noopener" target="_blank" href="/wiki/LIB:PIPP" title="Personal Information Protection Policy">Personal Information Protection Policy</a> and <a rel="noopener" target="_blank" href="/wiki/LIB:DAGZC" title="YsArchives Association">YsArchives Association</a>.',
      ja: 'あなたは本サイトの『<a rel="noopener" target="_blank" href="/wiki/LIB:TOS" title="利用規約">利用規約</a>』『<a rel="noopener" target="_blank" href="/wiki/LIB:PIPP" title="個人情報保護条例">個人情報保護条例</a>』『<a rel="noopener" target="_blank" href="/wiki/LIB:GP" title="档案馆章程">档案馆章程</a>』を十分に理解し、同意したことになります。',
      "zh-hans": '您已仔细阅读、充分了解并同意遵守本网站的《<a rel="noopener" target="_blank" href="/wiki/LIB:TOS" title="用户协议">用户协议</a>》《<a rel="noopener" target="_blank" href="/wiki/LIB:PIPP" title="个人信息保护条例">个人信息保护条例</a>》《<a rel="noopener" target="_blank" href="/wiki/LIB:GP" title="档案馆章程">档案馆章程</a>》。',
      "zh-hant": '您已仔細閱讀、充分了解並同意遵守本網站的《<a rel="noopener" target="_blank" href="/wiki/LIB:TOS" title="用戶協議">用戶協議</a>》《<a rel="noopener" target="_blank" href="/wiki/LIB:PIPP" title="個人信息保護条例">個人信息保護条例</a>》《<a rel="noopener" target="_blank" href="/wiki/LIB:GP" title="档案馆章程">档案馆章程</a>》。'
    }),
    Empty2FA: (0, import_ext_gadget3.localize)({
      en: "The 2FA verification code cannot be empty",
      ja: "2FA認証コードが入力されていません",
      "zh-hans": "2FA验证码不能为空",
      "zh-hant": "2FA驗證碼不能爲空"
    }),
    EmptyPassword: (0, import_ext_gadget3.localize)({
      en: "The password cannot be empty",
      ja: "パスワードが入力されていません",
      "zh-hans": "密码不能为空",
      "zh-hant": "密碼不能爲空"
    }),
    EmptyUsernameOrPassword: (0, import_ext_gadget3.localize)({
      en: "The username or password cannot be empty",
      ja: "利用者名またはパスワードが入力されていません",
      "zh-cn": "用户名或密码不能为空",
      "zh-hk": "用戶名稱或密碼不能爲空",
      "zh-tw": "使用者名稱或密碼不能爲空"
    }),
    "Network error": (0, import_ext_gadget3.localize)({
      en: "Network error. Redirecting...",
      ja: "ネットワークエラー、リダイレクト中...",
      "zh-hans": "网络异常。重定向中……",
      "zh-hant": "網路異常。重新導向中……"
    }),
    SelectedOrNot: (0, import_ext_gadget3.localize)({
      en: "Keep logged in for 6 months if selected; otherwise until the browser closes.",
      ja: "チェックを入れるとログイン状態が6ヶ月間保持され、入れない場合はブラウザを閉じるまで保持されます。",
      "zh-hans": "勾选则保持登录状态6个月，否则将在浏览器关闭时退出登录。",
      "zh-hant": "勾選则保持登入狀態6個月，否則將在瀏覽器關閉時登出。"
    }),
    TooFrequent: (0, import_ext_gadget3.localize)({
      en: "The user login is too frequent, please try again in five minutes",
      ja: "利用者が頻繁すぎるため、5分後に再試行してください",
      "zh-cn": "用户登录过于频繁，请五分钟后再试",
      "zh-hk": "用戶登入過於頻繁，請五分鐘後再試",
      "zh-tw": "使用者登入过于频繁，请五分钟后再试"
    }),
    "Unexpected API response": (0, import_ext_gadget3.localize)({
      en: "Unexpected API response: $1. Redirecting...",
      ja: "予期せぬAPIの応答：$1、リダイレクト中...",
      "zh-hans": "意外的API响应：$1。重定向中……",
      "zh-hant": "意外的API響應：$1。重新導向中……"
    }),
    "Login with QQ": (0, import_ext_gadget3.localize)({
      en: "Login with QQ",
      ja: "QQでログイン",
      "zh-hans": "QQ登录",
      "zh-hant": "QQ登入"
    }),
    Or: (0, import_ext_gadget3.localize)({
      en: "or",
      ja: "または",
      "zh-hans": "或",
      "zh-hant": "或"
    }),
    "QQ login description": (0, import_ext_gadget3.localize)({
      en: "Use your QQ account to log in quickly. You will be redirected to the QQ authorization page.",
      ja: "QQアカウントで素早くログインできます。QQ認証ページにリダイレクトします。",
      "zh-hans": "使用 QQ 账户快捷登录，即将跳转至 QQ 授权页面。",
      "zh-hant": "使用 QQ 賬戶快捷登入，即將跳轉至 QQ 授權頁面。"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/AjaxLogin/modules/initWindowManager.ts
var initWindowManager = () => {
  return new OO.ui.WindowManager();
};
var windowManager = initWindowManager();
//! src/AjaxLogin/modules/util/oouiConfirm.ts
var oouiConfirm = /* @__PURE__ */ (function() {
  var _ref = _asyncToGenerator(function* (options) {
    const messageDialog = new OO.ui.MessageDialog();
    windowManager.addWindows([messageDialog]);
    const instance = windowManager.openWindow(messageDialog, options);
    const data = yield instance.closed;
    const _data = data;
    return !!((_data === null || _data === void 0 ? void 0 : _data.action) === "accept");
  });
  return function oouiConfirm2(_x) {
    return _ref.apply(this, arguments);
  };
})();
//! src/AjaxLogin/modules/util/checkValid.tsx
var import_ext_gadget5 = require("ext.gadget.Toastify");
var checkValid = /* @__PURE__ */ (function() {
  var _ref2 = _asyncToGenerator(function* ([agreeTosCheckbox, nameInput, pwdInput], toastifyInstance) {
    let isAgreeTos = agreeTosCheckbox.isSelected();
    const isFill = ![nameInput.getValue().trim(), pwdInput.getValue().trim()].includes("");
    toastifyInstance.hideToast();
    yield windowManager.clearWindows();
    if (!isAgreeTos) {
      isAgreeTos = yield oouiConfirm({
        message: $(/* @__PURE__ */ import_ext_gadget4.default.createElement("span", {
          innerHTML: getMessage("DoubleCheckAgreedOrNot")
        })),
        actions: [{
          label: $(/* @__PURE__ */ import_ext_gadget4.default.createElement("b", null, getMessage("Cancel"))),
          action: "cancel",
          flags: ["safe", "close"]
        }, {
          label: $(/* @__PURE__ */ import_ext_gadget4.default.createElement("b", null, getMessage("I agree"))),
          action: "accept",
          flags: ["primary", "progressive"]
        }]
      });
      if (!isAgreeTos) {
        toastifyInstance = (0, import_ext_gadget5.toastify)({
          text: getMessage("AgreedOrNot"),
          duration: -1
        }, "info");
      }
    } else if (!isFill) {
      toastifyInstance = (0, import_ext_gadget5.toastify)({
        text: getMessage("EmptyUsernameOrPassword"),
        duration: -1
      }, "info");
    }
    const isValid = isAgreeTos && isFill;
    return {
      isAgreeTos,
      isValid,
      toastifyInstance
    };
  });
  return function checkValid2(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
})();
//! src/AjaxLogin/modules/util/generateElements.tsx
var import_ext_gadget6 = __toESM(require("ext.gadget.JSX"), 1);
var import_ext_gadget7 = require("ext.gadget.Util");
//! src/AjaxLogin/images/SimpleIconsQq.svg
var SimpleIconsQq_default = '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path fill="currentColor" d="M21.395 15.035a40 40 0 0 0-.803-2.264l-1.079-2.695c.001-.032.014-.562.014-.836C19.526 4.632 17.351 0 12 0S4.474 4.632 4.474 9.241c0 .274.013.804.014.836l-1.08 2.695a39 39 0 0 0-.802 2.264c-1.021 3.283-.69 4.643-.438 4.673.54.065 2.103-2.472 2.103-2.472 0 1.469.756 3.387 2.394 4.771-.612.188-1.363.479-1.845.835-.434.32-.379.646-.301.778.343.578 5.883.369 7.482.189 1.6.18 7.14.389 7.483-.189.078-.132.132-.458-.301-.778-.483-.356-1.233-.646-1.846-.836 1.637-1.384 2.393-3.302 2.393-4.771 0 0 1.563 2.537 2.103 2.472.251-.03.581-1.39-.438-4.673"/></svg>';
//! src/AjaxLogin/modules/util/generateElements.tsx
var generateElements = (isAgreeTos) => {
  const messageDialog = new OO.ui.MessageDialog();
  const nameInput = new OO.ui.TextInputWidget({
    icon: "userAvatar",
    placeholder: getMessage("Username"),
    validate: "non-empty"
  });
  const pwdInput = new OO.ui.TextInputWidget({
    icon: "key",
    placeholder: getMessage("Password"),
    type: "password",
    validate: "non-empty"
  });
  const agreeTosCheckbox = new OO.ui.CheckboxInputWidget({
    selected: isAgreeTos
  });
  const agreeTosLayout = new OO.ui.FieldLayout(agreeTosCheckbox, {
    align: "inline",
    label: getMessage("I agree with the relevant terms")
  });
  const keepLoginCheckbox = new OO.ui.CheckboxInputWidget();
  const keepLoginLayout = new OO.ui.FieldLayout(keepLoginCheckbox, {
    align: "inline",
    help: getMessage("SelectedOrNot"),
    label: getMessage("Keep me logged in")
  });
  const label = /* @__PURE__ */ import_ext_gadget6.default.createElement("label", {
    className: ["oo-ui-labelWidget", "oo-ui-labelElement-label"],
    style: {
      fontSize: "90%",
      textAlign: "justify"
    }
  });
  const $label = $(label);
  const $agreeTos = $label.clone().append(agreeTosLayout.$element);
  const $forgotPassword = $label.clone().css("float", "right").append(/* @__PURE__ */ import_ext_gadget6.default.createElement("a", {
    href: mw.util.getUrl("Special:PasswordReset"),
    title: getMessage("Reset password")
  }, getMessage("Forgot password?")));
  const $inputBox = $label.clone().css({
    display: "block",
    "font-size": "inherit",
    padding: "6px 0"
  }).append(nameInput.$element.css("margin-bottom", "6px"), pwdInput.$element);
  const $tosLabel = $label.clone().html(getMessage("help for I agree with the relevant terms"));
  const $rememberMe = $label.clone().append(keepLoginLayout.$element.css("margin-top", "6px"));
  const qqLoginUrl = "".concat(mw.util.getUrl("Special:UserLogin"), "?returnto=").concat(encodeURIComponent(location.href));
  const qqIconDataUrl = (0, import_ext_gadget7.generateSvgDataUrl)(SimpleIconsQq_default);
  const $qqLoginSection = $label.clone().css({
    display: "block",
    "font-size": "inherit",
    "text-align": "center"
  }).append($("<span>").css({
    color: "#72777d",
    display: "block",
    margin: "4px 0"
  }).text(getMessage("Or")), $("<a>").attr({
    href: qqLoginUrl,
    title: getMessage("QQ login description")
  }).css({
    "background-color": "#12B7F5",
    border: "1px solid #12B7F5",
    "border-radius": "2px",
    color: "#fff",
    display: "inline-flex",
    "align-items": "center",
    gap: "6px",
    padding: "5px 12px",
    "font-weight": "bold",
    "font-size": "1em",
    "line-height": "1.42857143",
    "text-decoration": "none",
    "white-space": "nowrap"
  }).append($("<img>").attr({
    src: qqIconDataUrl,
    alt: "QQ",
    width: 20,
    height: 20
  }), getMessage("Login with QQ")));
  return {
    $agreeTos,
    $forgotPassword,
    $inputBox,
    $qqLoginSection,
    $rememberMe,
    $tosLabel,
    agreeTosCheckbox,
    keepLoginCheckbox,
    messageDialog,
    nameInput,
    pwdInput
  };
};
//! src/AjaxLogin/modules/util/oouiPrompt.tsx
var import_ext_gadget8 = __toESM(require("ext.gadget.JSX"), 1);
//! src/AjaxLogin/modules/util/removeWindowResizeHandler.ts
var removeWindowResizeHandler = () => {
  $(window).off({
    "orientationchange resize": windowManager.onWindowResizeHandler
  });
};
//! src/AjaxLogin/modules/util/oouiPrompt.tsx
var oouiPrompt = /* @__PURE__ */ (function() {
  var _ref3 = _asyncToGenerator(function* (retypePassword) {
    const codeDialog = new OO.ui.MessageDialog();
    const codeInput = new OO.ui.TextInputWidget({
      icon: "key",
      placeholder: retypePassword ? getMessage("New password") : getMessage("6-digit number"),
      validate: "integer"
    });
    const codeLayout = new OO.ui.FieldLayout(codeInput, {
      align: "top",
      label: $(/* @__PURE__ */ import_ext_gadget8.default.createElement("b", {
        className: ["oo-ui-messageDialog-title", "oo-ui-window-head"]
      }, retypePassword ? getMessage("Enter password") : getMessage("Enter 2FA verification code")))
    });
    windowManager.addWindows([codeDialog]);
    const instance = windowManager.openWindow(codeDialog, {
      message: codeLayout.$element
    });
    removeWindowResizeHandler();
    void instance.opened.then(() => {
      codeInput.on("enter", () => {
        windowManager.getCurrentWindow().close({
          action: "accept"
        });
      });
      codeInput.focus();
    });
    const data = yield instance.closed;
    const _data = data;
    return (_data === null || _data === void 0 ? void 0 : _data.action) === "accept" ? codeInput.getValue() : null;
  });
  return function oouiPrompt2(_x4) {
    return _ref3.apply(this, arguments);
  };
})();
//! src/AjaxLogin/modules/util/queryLoginToken.ts
var import_ext_gadget9 = require("ext.gadget.Toastify");
var queryLoginToken = /* @__PURE__ */ (function() {
  var _ref4 = _asyncToGenerator(function* (toastifyInstance) {
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget9.toastify)({
      text: getMessage("Getting login token")
    });
    const loginToken = yield api.getToken("login");
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget9.toastify)({
      text: getMessage("Login token got"),
      duration: -1
    });
    return {
      loginToken,
      toastifyInstance
    };
  });
  return function queryLoginToken2(_x5) {
    return _ref4.apply(this, arguments);
  };
})();
//! src/AjaxLogin/modules/util/redirectOriginLoginPage.ts
var import_ext_gadget10 = require("ext.gadget.Util");
var redirectOriginLoginPage = /* @__PURE__ */ (function() {
  var _ref5 = _asyncToGenerator(function* () {
    yield windowManager.clearWindows();
    yield (0, import_ext_gadget10.delay)(3 * 1e3);
    location.href = mw.util.getUrl("Special:Userlogin");
  });
  return function redirectOriginLoginPage2() {
    return _ref5.apply(this, arguments);
  };
})();
//! src/AjaxLogin/modules/util/showError.ts
var import_ext_gadget11 = require("ext.gadget.Toastify");
var showError = (error, toastifyInstance) => {
  console.error("[AjaxLogin] Ajax error:", error);
  toastifyInstance.hideToast();
  (0, import_ext_gadget11.toastify)({
    text: getMessage("Network error"),
    close: true,
    duration: -1
  }, "error");
};
//! src/AjaxLogin/modules/core.tsx
var import_ext_gadget13 = require("ext.gadget.Toastify");
var ajaxLogin = (toastifyInstance, isAgreeTos = false) => {
  const {
    $agreeTos,
    $forgotPassword,
    $inputBox,
    $qqLoginSection,
    $rememberMe,
    $tosLabel,
    agreeTosCheckbox,
    keepLoginCheckbox,
    messageDialog,
    nameInput,
    pwdInput
  } = generateElements(isAgreeTos);
  const hasQqConnect = Boolean(mw.config.get("wgQQConnectAppId"));
  let loginToken = "";
  const _login = /* @__PURE__ */ (function() {
    var _ref6 = _asyncToGenerator(function* ({
      loginContinue = false,
      retypePassword = false
    } = {}) {
      try {
        var _response$clientlogin, _response$clientlogin2;
        if (!loginContinue) {
          ({
            loginToken,
            toastifyInstance
          } = yield queryLoginToken(toastifyInstance));
        }
        const params = {
          action: "clientlogin",
          format: "json",
          formatversion: "2",
          logintoken: loginToken,
          loginreturnurl: location.href,
          username: nameInput.getValue(),
          password: pwdInput.getValue()
        };
        if (keepLoginCheckbox.isSelected()) {
          params.rememberMe = true;
        }
        if (loginContinue || retypePassword) {
          yield windowManager.clearWindows();
          delete params.loginreturnurl;
          delete params.username;
          delete params.password;
          params.logincontinue = true;
          const value = yield oouiPrompt(retypePassword);
          toastifyInstance.hideToast();
          if (value === null) {
            (0, import_ext_gadget13.toastify)({
              text: getMessage("Login cancelled")
            }, "info");
            void windowManager.clearWindows();
            return;
          } else if (value === "") {
            if (retypePassword) {
              toastifyInstance = (0, import_ext_gadget13.toastify)({
                text: getMessage("EmptyPassword"),
                duration: -1
              }, "warning");
              void _login({
                retypePassword: true
              });
            } else {
              toastifyInstance = (0, import_ext_gadget13.toastify)({
                text: getMessage("Empty2FA"),
                duration: -1
              }, "warning");
              void _login({
                loginContinue: true
              });
            }
            return;
          }
          if (retypePassword) {
            params.password = value;
            params.retype = value;
          } else {
            params.OATHToken = value;
          }
        }
        toastifyInstance.hideToast();
        toastifyInstance = (0, import_ext_gadget13.toastify)({
          text: getMessage("Logging in")
        }, "info");
        const response = yield api.post(params);
        toastifyInstance.hideToast();
        if (((_response$clientlogin = response["clientlogin"]) === null || _response$clientlogin === void 0 ? void 0 : _response$clientlogin.status) === "PASS") {
          (0, import_ext_gadget13.toastify)({
            text: getMessage("Login succeed")
          }, "success");
          location.reload();
        } else if ((_response$clientlogin2 = response["clientlogin"]) !== null && _response$clientlogin2 !== void 0 && _response$clientlogin2.messagecode) {
          const {
            messagecode
          } = response["clientlogin"];
          switch (messagecode) {
            case "login-throttled":
              toastifyInstance = (0, import_ext_gadget13.toastify)({
                text: getMessage("TooFrequent"),
                duration: -1
              }, "error");
              break;
            case "oathauth-auth-ui":
              void _login({
                loginContinue: true
              });
              break;
            case "oathauth-login-failed":
              toastifyInstance = (0, import_ext_gadget13.toastify)({
                text: getMessage("Invalid 2FA verification code"),
                duration: -1
              }, "warning");
              void _login({
                loginContinue: true
              });
              break;
            case "resetpass-temp-emailed":
              toastifyInstance = (0, import_ext_gadget13.toastify)({
                text: getMessage("New password is required"),
                duration: -1
              }, "warning");
              void _login({
                retypePassword: true
              });
              break;
            case "wrongpassword":
              toastifyInstance = (0, import_ext_gadget13.toastify)({
                text: getMessage("Invalid username or password"),
                duration: -1
              }, "warning");
              yield windowManager.clearWindows();
              ajaxLogin(toastifyInstance);
              break;
            default:
              (0, import_ext_gadget13.toastify)({
                text: getMessage("Unexpected API response").replace("$1", messagecode),
                close: true,
                duration: -1
              }, "error");
              void redirectOriginLoginPage();
          }
        }
      } catch (error) {
        showError(error, toastifyInstance);
        void redirectOriginLoginPage();
      }
    });
    return function login() {
      return _ref6.apply(this, arguments);
    };
  })();
  const check = /* @__PURE__ */ (function() {
    var _ref7 = _asyncToGenerator(function* () {
      const {
        isValid,
        isAgreeTos: lastIsAgreeTos,
        toastifyInstance: lastToastifyInstance
      } = yield checkValid([agreeTosCheckbox, nameInput, pwdInput], toastifyInstance);
      toastifyInstance = lastToastifyInstance;
      if (isValid) {
        void _login();
      } else {
        ajaxLogin(toastifyInstance, lastIsAgreeTos);
      }
    });
    return function check2() {
      return _ref7.apply(this, arguments);
    };
  })();
  pwdInput.on("enter", () => {
    void check();
  });
  messageDialog.getActionProcess = (action) => new OO.ui.Process(() => {
    if (action === "login") {
      void check();
    } else {
      toastifyInstance.hideToast();
      void windowManager.clearWindows();
    }
  });
  windowManager.addWindows([messageDialog]);
  void windowManager.openWindow(messageDialog, {
    actions: [{
      action: "login",
      flags: ["primary", "progressive"],
      label: $(/* @__PURE__ */ import_ext_gadget12.default.createElement("b", null, getMessage("Login")))
    }, {
      action: "cancel",
      flags: ["safe", "close"],
      label: $(/* @__PURE__ */ import_ext_gadget12.default.createElement("b", null, getMessage("Cancel")))
    }],
    message: $(/* @__PURE__ */ import_ext_gadget12.default.createElement("div", {
      className: "oo-ui-window-foot"
    }, [$inputBox, $forgotPassword, $rememberMe, $agreeTos, $tosLabel, ...hasQqConnect ? [$qqLoginSection] : []])),
    title: $(/* @__PURE__ */ import_ext_gadget12.default.createElement("b", {
      className: "oo-ui-window-head"
    }, getMessage("Login"))),
    size: "small"
  });
  removeWindowResizeHandler();
};
//! src/AjaxLogin/AjaxLogin.ts
void (0, import_ext_gadget14.getBody)().then(function initAutoLogin($body) {
  const {
    wgUserName
  } = mw.config.get();
  if (wgUserName) {
    return;
  }
  const $loginElement = $body.find(loginElementSelector);
  if (!$loginElement.length) {
    return;
  }
  windowManager.$element.appendTo($body);
  const fakeToastifyInstance = {
    hideToast: () => {
    }
  };
  const eventListener = (event) => {
    if (!(0, import_ext_gadget14.checkA11yConfirmKey)(event)) {
      return;
    }
    event.preventDefault();
    ajaxLogin(fakeToastifyInstance);
  };
  addListener($loginElement, eventListener);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0FqYXhMb2dpbi9vcHRpb25zLmpzb24iLCAic3JjL0FqYXhMb2dpbi9BamF4TG9naW4udHMiLCAic3JjL0FqYXhMb2dpbi9tb2R1bGVzL2FkZExpc3RlbmVyLnRzIiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy9hcGkudHMiLCAic3JjL0FqYXhMb2dpbi9tb2R1bGVzL2NvcmUudHN4IiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy91dGlsL2NoZWNrVmFsaWQudHN4IiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy9pMThuLnRzIiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy9pbml0V2luZG93TWFuYWdlci50cyIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9vb3VpQ29uZmlybS50cyIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9nZW5lcmF0ZUVsZW1lbnRzLnRzeCIsICJzcmMvQWpheExvZ2luL2ltYWdlcy9TaW1wbGVJY29uc1FxLnN2ZyIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9vb3VpUHJvbXB0LnRzeCIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9yZW1vdmVXaW5kb3dSZXNpemVIYW5kbGVyLnRzIiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy91dGlsL3F1ZXJ5TG9naW5Ub2tlbi50cyIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9yZWRpcmVjdE9yaWdpbkxvZ2luUGFnZS50cyIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9zaG93RXJyb3IudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJsb2dpbkVsZW1lbnRTZWxlY3RvclwiOiBcImE6aGFzKC5hamF4bG9naW4tbW91bnQtcG9pbnQpLCNwdC1sb2dpbj5hLC52ZWN0b3ItdXNlci1tZW51LWxvZ2luPmEsI3VzZXItdG9vbHM+YVtocmVmKj1cXFwiU3BlY2lhbFxcXCJdLC5tYWlucGFnZS10b3AtbWVudT5saTpudGgtY2hpbGQoMikgYVwiLFxuXHRcInZlcnNpb25cIjogXCI0LjFcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtjaGVja0ExMXlDb25maXJtS2V5LCBnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHthZGRMaXN0ZW5lcn0gZnJvbSAnLi9tb2R1bGVzL2FkZExpc3RlbmVyJztcbmltcG9ydCB7YWpheExvZ2lufSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5pbXBvcnQge3dpbmRvd01hbmFnZXJ9IGZyb20gJy4vbW9kdWxlcy9pbml0V2luZG93TWFuYWdlcic7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gaW5pdEF1dG9Mb2dpbigkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0Y29uc3Qge3dnVXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICh3Z1VzZXJOYW1lKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJGxvZ2luRWxlbWVudDogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PiA9ICRib2R5LmZpbmQ8SFRNTEFuY2hvckVsZW1lbnQ+KE9QVElPTlMubG9naW5FbGVtZW50U2VsZWN0b3IpO1xuXHRpZiAoISRsb2dpbkVsZW1lbnQubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0d2luZG93TWFuYWdlci4kZWxlbWVudC5hcHBlbmRUbygkYm9keSk7XG5cblx0Y29uc3QgZmFrZVRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB7XG5cdFx0aGlkZVRvYXN0OiAoKSA9PiB7fSxcblx0fTtcblxuXHRjb25zdCBldmVudExpc3RlbmVyID0gKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCB8IEpRdWVyeS5LZXlEb3duRXZlbnQpOiB2b2lkID0+IHtcblx0XHRpZiAoIWNoZWNrQTExeUNvbmZpcm1LZXkoZXZlbnQpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRhamF4TG9naW4oZmFrZVRvYXN0aWZ5SW5zdGFuY2UpO1xuXHR9O1xuXHRhZGRMaXN0ZW5lcigkbG9naW5FbGVtZW50LCBldmVudExpc3RlbmVyKTtcbn0pO1xuIiwgImltcG9ydCB7ZmlsdGVyQWx0ZXJlZENsaWNrc30gZnJvbSAnZXh0LmdhZGdldC5GaWx0ZXJBbHRlcmVkQ2xpY2tzJztcblxuY29uc3QgYWRkTGlzdGVuZXIgPSAoXG5cdCRlbGVtZW50OiBKUXVlcnksXG5cdGV2ZW50TGlzdGVuZXI6IChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQgfCBKUXVlcnkuS2V5RG93bkV2ZW50KSA9PiB2b2lkXG4pOiB2b2lkID0+IHtcblx0JGVsZW1lbnQub24oJ2NsaWNrJywgZmlsdGVyQWx0ZXJlZENsaWNrcyhldmVudExpc3RlbmVyKSk7XG5cdCRlbGVtZW50Lm9uKCdrZXlkb3duJywgZXZlbnRMaXN0ZW5lcik7XG59O1xuXG5leHBvcnQge2FkZExpc3RlbmVyfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxudHlwZSBDbGllbnRMb2dpblBhcmFtcyA9IEFwaUNsaWVudExvZ2luUGFyYW1zICYge1xuXHR1c2VybmFtZT86IHN0cmluZztcblx0cGFzc3dvcmQ/OiBzdHJpbmc7XG5cdHJlbWVtYmVyTWU/OiBib29sZWFuO1xuXHRyZXR5cGU/OiBzdHJpbmc7XG5cdE9BVEhUb2tlbj86IHN0cmluZztcbn07XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBBamF4TG9naW4vJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7dHlwZSBDbGllbnRMb2dpblBhcmFtcywgYXBpfTtcbiIsICJpbXBvcnQge3R5cGUgQ2xpZW50TG9naW5QYXJhbXMsIGFwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuSlNYJztcbmltcG9ydCB7Y2hlY2tWYWxpZH0gZnJvbSAnLi91dGlsL2NoZWNrVmFsaWQnO1xuaW1wb3J0IHtnZW5lcmF0ZUVsZW1lbnRzfSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVFbGVtZW50cyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge29vdWlQcm9tcHR9IGZyb20gJy4vdXRpbC9vb3VpUHJvbXB0JztcbmltcG9ydCB7cXVlcnlMb2dpblRva2VufSBmcm9tICcuL3V0aWwvcXVlcnlMb2dpblRva2VuJztcbmltcG9ydCB7cmVkaXJlY3RPcmlnaW5Mb2dpblBhZ2V9IGZyb20gJy4vdXRpbC9yZWRpcmVjdE9yaWdpbkxvZ2luUGFnZSc7XG5pbXBvcnQge3JlbW92ZVdpbmRvd1Jlc2l6ZUhhbmRsZXJ9IGZyb20gJy4vdXRpbC9yZW1vdmVXaW5kb3dSZXNpemVIYW5kbGVyJztcbmltcG9ydCB7c2hvd0Vycm9yfSBmcm9tICcuL3V0aWwvc2hvd0Vycm9yJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuaW1wb3J0IHt3aW5kb3dNYW5hZ2VyfSBmcm9tICcuL2luaXRXaW5kb3dNYW5hZ2VyJztcblxuY29uc3QgYWpheExvZ2luID0gKHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UsIGlzQWdyZWVUb3M6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQgPT4ge1xuXHRjb25zdCB7XG5cdFx0JGFncmVlVG9zLFxuXHRcdCRmb3Jnb3RQYXNzd29yZCxcblx0XHQkaW5wdXRCb3gsXG5cdFx0JHFxTG9naW5TZWN0aW9uLFxuXHRcdCRyZW1lbWJlck1lLFxuXHRcdCR0b3NMYWJlbCxcblx0XHRhZ3JlZVRvc0NoZWNrYm94LFxuXHRcdGtlZXBMb2dpbkNoZWNrYm94LFxuXHRcdG1lc3NhZ2VEaWFsb2csXG5cdFx0bmFtZUlucHV0LFxuXHRcdHB3ZElucHV0LFxuXHR9ID0gZ2VuZXJhdGVFbGVtZW50cyhpc0FncmVlVG9zKTtcblxuXHQvLyBDaGVjayB3aGV0aGVyIFFRQ29ubmVjdCBpcyBhdmFpbGFibGUgKGl0cyBBcHBJZCBpcyBwdWJsaWMgaW4gZXh0ZW5zaW9uLmpzb24pXG5cdGNvbnN0IGhhc1FxQ29ubmVjdDogYm9vbGVhbiA9IEJvb2xlYW4obXcuY29uZmlnLmdldCgnd2dRUUNvbm5lY3RBcHBJZCcpKTtcblxuXHRsZXQgbG9naW5Ub2tlbjogc3RyaW5nID0gJyc7XG5cdGNvbnN0IGxvZ2luID0gYXN5bmMgKHtsb2dpbkNvbnRpbnVlID0gZmFsc2UsIHJldHlwZVBhc3N3b3JkID0gZmFsc2V9ID0ge30pOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHR0cnkge1xuXHRcdFx0aWYgKCFsb2dpbkNvbnRpbnVlKSB7XG5cdFx0XHRcdCh7bG9naW5Ub2tlbiwgdG9hc3RpZnlJbnN0YW5jZX0gPSBhd2FpdCBxdWVyeUxvZ2luVG9rZW4odG9hc3RpZnlJbnN0YW5jZSkpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBwYXJhbXM6IENsaWVudExvZ2luUGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdjbGllbnRsb2dpbicsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdGxvZ2ludG9rZW46IGxvZ2luVG9rZW4sXG5cdFx0XHRcdGxvZ2lucmV0dXJudXJsOiBsb2NhdGlvbi5ocmVmLFxuXHRcdFx0XHR1c2VybmFtZTogbmFtZUlucHV0LmdldFZhbHVlKCksXG5cdFx0XHRcdHBhc3N3b3JkOiBwd2RJbnB1dC5nZXRWYWx1ZSgpLFxuXHRcdFx0fTtcblx0XHRcdGlmIChrZWVwTG9naW5DaGVja2JveC5pc1NlbGVjdGVkKCkpIHtcblx0XHRcdFx0cGFyYW1zLnJlbWVtYmVyTWUgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGxvZ2luQ29udGludWUgfHwgcmV0eXBlUGFzc3dvcmQpIHtcblx0XHRcdFx0YXdhaXQgd2luZG93TWFuYWdlci5jbGVhcldpbmRvd3MoKTtcblx0XHRcdFx0ZGVsZXRlIHBhcmFtcy5sb2dpbnJldHVybnVybDtcblx0XHRcdFx0ZGVsZXRlIHBhcmFtcy51c2VybmFtZTtcblx0XHRcdFx0ZGVsZXRlIHBhcmFtcy5wYXNzd29yZDtcblx0XHRcdFx0cGFyYW1zLmxvZ2luY29udGludWUgPSB0cnVlO1xuXG5cdFx0XHRcdGNvbnN0IHZhbHVlOiBzdHJpbmcgfCBudWxsID0gYXdhaXQgb291aVByb21wdChyZXR5cGVQYXNzd29yZCk7XG5cblx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblxuXHRcdFx0XHRpZiAodmFsdWUgPT09IG51bGwpIHtcblx0XHRcdFx0XHR0b2FzdGlmeShcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnTG9naW4gY2FuY2VsbGVkJyksXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0J2luZm8nXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR2b2lkIHdpbmRvd01hbmFnZXIuY2xlYXJXaW5kb3dzKCk7XG5cblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH0gZWxzZSBpZiAodmFsdWUgPT09ICcnKSB7XG5cdFx0XHRcdFx0aWYgKHJldHlwZVBhc3N3b3JkKSB7XG5cdFx0XHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdFbXB0eVBhc3N3b3JkJyksXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQnd2FybmluZydcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR2b2lkIGxvZ2luKHtcblx0XHRcdFx0XHRcdFx0cmV0eXBlUGFzc3dvcmQ6IHRydWUsXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnRW1wdHkyRkEnKSxcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdCd3YXJuaW5nJ1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHZvaWQgbG9naW4oe1xuXHRcdFx0XHRcdFx0XHRsb2dpbkNvbnRpbnVlOiB0cnVlLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHJldHlwZVBhc3N3b3JkKSB7XG5cdFx0XHRcdFx0cGFyYW1zLnBhc3N3b3JkID0gdmFsdWU7XG5cdFx0XHRcdFx0cGFyYW1zLnJldHlwZSA9IHZhbHVlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHBhcmFtcy5PQVRIVG9rZW4gPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRcdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnTG9nZ2luZyBpbicpLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQnaW5mbydcblx0XHRcdCk7XG5cblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gKGF3YWl0IGFwaS5wb3N0KHBhcmFtcykpIGFzIHtcblx0XHRcdFx0Y2xpZW50bG9naW46IHtcblx0XHRcdFx0XHRzdGF0dXM/OiBzdHJpbmc7XG5cdFx0XHRcdFx0bWVzc2FnZWNvZGU/OiBzdHJpbmc7XG5cdFx0XHRcdH07XG5cdFx0XHR9O1xuXG5cdFx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXG5cdFx0XHRpZiAocmVzcG9uc2VbJ2NsaWVudGxvZ2luJ10/LnN0YXR1cyA9PT0gJ1BBU1MnKSB7XG5cdFx0XHRcdHRvYXN0aWZ5KFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0xvZ2luIHN1Y2NlZWQnKSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdCdzdWNjZXNzJ1xuXHRcdFx0XHQpO1xuXHRcdFx0XHRsb2NhdGlvbi5yZWxvYWQoKTtcblx0XHRcdH0gZWxzZSBpZiAocmVzcG9uc2VbJ2NsaWVudGxvZ2luJ10/Lm1lc3NhZ2Vjb2RlKSB7XG5cdFx0XHRcdGNvbnN0IHttZXNzYWdlY29kZX0gPSByZXNwb25zZVsnY2xpZW50bG9naW4nXTtcblx0XHRcdFx0c3dpdGNoIChtZXNzYWdlY29kZSkge1xuXHRcdFx0XHRcdGNhc2UgJ2xvZ2luLXRocm90dGxlZCc6XG5cdFx0XHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdUb29GcmVxdWVudCcpLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0J2Vycm9yJ1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ29hdGhhdXRoLWF1dGgtdWknOlxuXHRcdFx0XHRcdFx0dm9pZCBsb2dpbih7XG5cdFx0XHRcdFx0XHRcdGxvZ2luQ29udGludWU6IHRydWUsXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ29hdGhhdXRoLWxvZ2luLWZhaWxlZCc6XG5cdFx0XHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdJbnZhbGlkIDJGQSB2ZXJpZmljYXRpb24gY29kZScpLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0J3dhcm5pbmcnXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0dm9pZCBsb2dpbih7XG5cdFx0XHRcdFx0XHRcdGxvZ2luQ29udGludWU6IHRydWUsXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ3Jlc2V0cGFzcy10ZW1wLWVtYWlsZWQnOlxuXHRcdFx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnTmV3IHBhc3N3b3JkIGlzIHJlcXVpcmVkJyksXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQnd2FybmluZydcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR2b2lkIGxvZ2luKHtcblx0XHRcdFx0XHRcdFx0cmV0eXBlUGFzc3dvcmQ6IHRydWUsXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ3dyb25ncGFzc3dvcmQnOlxuXHRcdFx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnSW52YWxpZCB1c2VybmFtZSBvciBwYXNzd29yZCcpLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0J3dhcm5pbmcnXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0YXdhaXQgd2luZG93TWFuYWdlci5jbGVhcldpbmRvd3MoKTtcblx0XHRcdFx0XHRcdGFqYXhMb2dpbih0b2FzdGlmeUluc3RhbmNlKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHR0b2FzdGlmeShcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ1VuZXhwZWN0ZWQgQVBJIHJlc3BvbnNlJykucmVwbGFjZSgnJDEnLCBtZXNzYWdlY29kZSksXG5cdFx0XHRcdFx0XHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQnZXJyb3InXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0dm9pZCByZWRpcmVjdE9yaWdpbkxvZ2luUGFnZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHNob3dFcnJvcihlcnJvciwgdG9hc3RpZnlJbnN0YW5jZSk7XG5cdFx0XHR2b2lkIHJlZGlyZWN0T3JpZ2luTG9naW5QYWdlKCk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IGNoZWNrID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdGNvbnN0IHtcblx0XHRcdGlzVmFsaWQsXG5cdFx0XHRpc0FncmVlVG9zOiBsYXN0SXNBZ3JlZVRvcyxcblx0XHRcdHRvYXN0aWZ5SW5zdGFuY2U6IGxhc3RUb2FzdGlmeUluc3RhbmNlLFxuXHRcdH0gPSBhd2FpdCBjaGVja1ZhbGlkKFthZ3JlZVRvc0NoZWNrYm94LCBuYW1lSW5wdXQsIHB3ZElucHV0XSwgdG9hc3RpZnlJbnN0YW5jZSk7XG5cblx0XHR0b2FzdGlmeUluc3RhbmNlID0gbGFzdFRvYXN0aWZ5SW5zdGFuY2U7XG5cblx0XHRpZiAoaXNWYWxpZCkge1xuXHRcdFx0dm9pZCBsb2dpbigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRhamF4TG9naW4odG9hc3RpZnlJbnN0YW5jZSwgbGFzdElzQWdyZWVUb3MpO1xuXHRcdH1cblx0fTtcblxuXHRwd2RJbnB1dC5vbignZW50ZXInLCAoKTogdm9pZCA9PiB7XG5cdFx0dm9pZCBjaGVjaygpO1xuXHR9KTtcblx0bWVzc2FnZURpYWxvZy5nZXRBY3Rpb25Qcm9jZXNzID0gKGFjdGlvbik6IE9PLnVpLlByb2Nlc3MgPT5cblx0XHRuZXcgT08udWkuUHJvY2VzcygoKTogdm9pZCA9PiB7XG5cdFx0XHRpZiAoYWN0aW9uID09PSAnbG9naW4nKSB7XG5cdFx0XHRcdHZvaWQgY2hlY2soKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdFx0XHRcdHZvaWQgd2luZG93TWFuYWdlci5jbGVhcldpbmRvd3MoKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHR3aW5kb3dNYW5hZ2VyLmFkZFdpbmRvd3MoW21lc3NhZ2VEaWFsb2ddKTtcblx0dm9pZCB3aW5kb3dNYW5hZ2VyLm9wZW5XaW5kb3cobWVzc2FnZURpYWxvZywge1xuXHRcdGFjdGlvbnM6IFtcblx0XHRcdHtcblx0XHRcdFx0YWN0aW9uOiAnbG9naW4nLFxuXHRcdFx0XHRmbGFnczogWydwcmltYXJ5JywgJ3Byb2dyZXNzaXZlJ10sXG5cdFx0XHRcdGxhYmVsOiAkKDxiPntnZXRNZXNzYWdlKCdMb2dpbicpfTwvYj4pLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0YWN0aW9uOiAnY2FuY2VsJyxcblx0XHRcdFx0ZmxhZ3M6IFsnc2FmZScsICdjbG9zZSddLFxuXHRcdFx0XHRsYWJlbDogJCg8Yj57Z2V0TWVzc2FnZSgnQ2FuY2VsJyl9PC9iPiksXG5cdFx0XHR9LFxuXHRcdF0sXG5cdFx0bWVzc2FnZTogJChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib28tdWktd2luZG93LWZvb3RcIj5cblx0XHRcdFx0e1tcblx0XHRcdFx0XHQkaW5wdXRCb3gsXG5cdFx0XHRcdFx0JGZvcmdvdFBhc3N3b3JkLFxuXHRcdFx0XHRcdCRyZW1lbWJlck1lLFxuXHRcdFx0XHRcdCRhZ3JlZVRvcyxcblx0XHRcdFx0XHQkdG9zTGFiZWwsXG5cdFx0XHRcdFx0Li4uKGhhc1FxQ29ubmVjdCA/IFskcXFMb2dpblNlY3Rpb25dIDogW10pLFxuXHRcdFx0XHRdfVxuXHRcdFx0PC9kaXY+XG5cdFx0KSxcblx0XHR0aXRsZTogJCg8YiBjbGFzc05hbWU9XCJvby11aS13aW5kb3ctaGVhZFwiPntnZXRNZXNzYWdlKCdMb2dpbicpfTwvYj4pLFxuXHRcdHNpemU6ICdzbWFsbCcsXG5cdH0pO1xuXHRyZW1vdmVXaW5kb3dSZXNpemVIYW5kbGVyKCk7XG59O1xuXG5leHBvcnQge2FqYXhMb2dpbn07XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuSlNYJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge29vdWlDb25maXJtfSBmcm9tICcuL29vdWlDb25maXJtJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuaW1wb3J0IHt3aW5kb3dNYW5hZ2VyfSBmcm9tICcuLi9pbml0V2luZG93TWFuYWdlcic7XG5cbmNvbnN0IGNoZWNrVmFsaWQgPSBhc3luYyAoXG5cdFthZ3JlZVRvc0NoZWNrYm94LCBuYW1lSW5wdXQsIHB3ZElucHV0XTogW09PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQsIE9PLnVpLlRleHRJbnB1dFdpZGdldCwgT08udWkuVGV4dElucHV0V2lkZ2V0XSxcblx0dG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZVxuKTogUHJvbWlzZTx7XG5cdGlzQWdyZWVUb3M6IGJvb2xlYW47XG5cdGlzVmFsaWQ6IGJvb2xlYW47XG5cdHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2U7XG59PiA9PiB7XG5cdGxldCBpc0FncmVlVG9zOiBib29sZWFuID0gYWdyZWVUb3NDaGVja2JveC5pc1NlbGVjdGVkKCk7XG5cdGNvbnN0IGlzRmlsbDogYm9vbGVhbiA9ICFbbmFtZUlucHV0LmdldFZhbHVlKCkudHJpbSgpLCBwd2RJbnB1dC5nZXRWYWx1ZSgpLnRyaW0oKV0uaW5jbHVkZXMoJycpO1xuXG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdGF3YWl0IHdpbmRvd01hbmFnZXIuY2xlYXJXaW5kb3dzKCk7XG5cblx0aWYgKCFpc0FncmVlVG9zKSB7XG5cdFx0aXNBZ3JlZVRvcyA9IGF3YWl0IG9vdWlDb25maXJtKHtcblx0XHRcdG1lc3NhZ2U6ICQoPHNwYW4gaW5uZXJIVE1MPXtnZXRNZXNzYWdlKCdEb3VibGVDaGVja0FncmVlZE9yTm90Jyl9IC8+KSBhcyBKUXVlcnksXG5cdFx0XHRhY3Rpb25zOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRsYWJlbDogJCg8Yj57Z2V0TWVzc2FnZSgnQ2FuY2VsJyl9PC9iPiksXG5cdFx0XHRcdFx0YWN0aW9uOiAnY2FuY2VsJyxcblx0XHRcdFx0XHRmbGFnczogWydzYWZlJywgJ2Nsb3NlJ10sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRsYWJlbDogJCg8Yj57Z2V0TWVzc2FnZSgnSSBhZ3JlZScpfTwvYj4pLFxuXHRcdFx0XHRcdGFjdGlvbjogJ2FjY2VwdCcsXG5cdFx0XHRcdFx0ZmxhZ3M6IFsncHJpbWFyeScsICdwcm9ncmVzc2l2ZSddLFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHR9KTtcblxuXHRcdGlmICghaXNBZ3JlZVRvcykge1xuXHRcdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnQWdyZWVkT3JOb3QnKSxcblx0XHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdpbmZvJ1xuXHRcdFx0KTtcblx0XHR9XG5cdH0gZWxzZSBpZiAoIWlzRmlsbCkge1xuXHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnRW1wdHlVc2VybmFtZU9yUGFzc3dvcmQnKSxcblx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0fSxcblx0XHRcdCdpbmZvJ1xuXHRcdCk7XG5cdH1cblxuXHRjb25zdCBpc1ZhbGlkOiBib29sZWFuID0gaXNBZ3JlZVRvcyAmJiBpc0ZpbGw7XG5cblx0cmV0dXJuIHtcblx0XHRpc0FncmVlVG9zLFxuXHRcdGlzVmFsaWQsXG5cdFx0dG9hc3RpZnlJbnN0YW5jZSxcblx0fTtcbn07XG5cbmV4cG9ydCB7Y2hlY2tWYWxpZH07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCc2LWRpZ2l0IG51bWJlcic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnNi1kaWdpdCBudW1iZXInLFxuXHRcdFx0amE6ICc25qGB44Gu5pWw5a2XJyxcblx0XHRcdCd6aC1oYW5zJzogJzbkvY3mlbDlrZcnLFxuXHRcdFx0J3poLWhhbnQnOiAnNuS9jeaVuOWtlycsXG5cdFx0fSksXG5cdFx0Q2FuY2VsOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NhbmNlbCcsXG5cdFx0XHRqYTogJ+OCreODo+ODs+OCu+ODqycsXG5cdFx0XHR6aDogJ+WPlua2iCcsXG5cdFx0fSksXG5cdFx0J0VudGVyIHBhc3N3b3JkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFbnRlciBwYXNzd29yZCcsXG5cdFx0XHRqYTogJ+ODkeOCueODr+ODvOODiScsXG5cdFx0XHQnemgtaGFucyc6ICfor7fovpPlhaXlr4bnoIEnLFxuXHRcdFx0J3poLWhhbnQnOiAn6KuL6Ly45YWl5a+G56K8Jyxcblx0XHR9KSxcblx0XHQnRW50ZXIgMkZBIHZlcmlmaWNhdGlvbiBjb2RlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcyRkEgdmVyaWZpY2F0aW9uIGNvZGUnLFxuXHRcdFx0amE6ICcyRkHoqo3oqLzjgrPjg7zjg4knLFxuXHRcdFx0J3poLWhhbnMnOiAn6K+36L6T5YWlMkZB6aqM6K+B56CBJyxcblx0XHRcdCd6aC1oYW50JzogJ+iri+i8uOWFpTJGQempl+itieeivCcsXG5cdFx0fSksXG5cdFx0J0ZvcmdvdCBwYXNzd29yZD8nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ZvcmdvdCBwYXNzd29yZD8nLFxuXHRcdFx0amE6ICfjg5Hjgrnjg6/jg7zjg4njgpLjgYrlv5jjgozjgafjgZnjgYvvvJ8nLFxuXHRcdFx0J3poLWhhbnMnOiAn5b+Y6K6w5a+G56CB77yfJyxcblx0XHRcdCd6aC1oYW50JzogJ+W/mOiomOWvhueivO+8nycsXG5cdFx0fSksXG5cdFx0J0dldHRpbmcgbG9naW4gdG9rZW4nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0dldHRpbmcgbG9naW4gdG9rZW4nLFxuXHRcdFx0amE6ICfjg63jgrDjgqTjg7Pjg4jjg7zjgq/jg7PjgpLlj5blvpfjgZfjgabjgYTjgb7jgZknLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2j5Zyo6I635Y+W55m75b2V5Luk54mMJyxcblx0XHRcdCd6aC1oYW50JzogJ+ato+WcqOeNsuWPlueZu+WFpeasiuadlicsXG5cdFx0fSksXG5cdFx0J2hlbHAgZm9yIEkgYWdyZWUgd2l0aCB0aGUgcmVsZXZhbnQgdGVybXMnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1doZW4geW91IGxvZ2luLCBpdCBtZWFucyB0aGF0IHlvdSBoYXZlIGNhcmVmdWxseSByZWFkLCBmdWxseSB1bmRlcnN0b29kIGFuZCBhZ3JlZWQgdG8gY29tcGx5IHdpdGggdGhlIDxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpUT1NcIiB0aXRsZT1cIlRlcm1zIG9mIFNlcnZpY2VcIj5UZXJtcyBvZiBTZXJ2aWNlPC9hPiwgPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOlBJUFBcIiB0aXRsZT1cIlBlcnNvbmFsIEluZm9ybWF0aW9uIFByb3RlY3Rpb24gUG9saWN5XCI+UGVyc29uYWwgSW5mb3JtYXRpb24gUHJvdGVjdGlvbiBQb2xpY3k8L2E+IGFuZCA8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6REFHWkNcIiB0aXRsZT1cIllzQXJjaGl2ZXMgQXNzb2NpYXRpb25cIj5Zc0FyY2hpdmVzIEFzc29jaWF0aW9uPC9hPi4nLFxuXHRcdFx0amE6ICfjg63jgrDjgqTjg7PjgpLjgZnjgovjgajjgIHjgYLjgarjgZ/jga/mnKzjgrXjgqTjg4jjga7jgI48YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6VE9TXCIgdGl0bGU9XCLliKnnlKjopo/ntIRcIj7liKnnlKjopo/ntIQ8L2E+44CP44COPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOlBJUFBcIiB0aXRsZT1cIuWAi+S6uuaDheWgseS/neitt+adoeS+i1wiPuWAi+S6uuaDheWgseS/neitt+adoeS+izwvYT7jgI/jgI48YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6R1BcIiB0aXRsZT1cIuaho+ahiOmmhueroOeoi1wiPuaho+ahiOmmhueroOeoizwvYT7jgI/jgpLljYHliIbjgavnkIbop6PjgZfjgIHlkIzmhI/jgZfjgZ/jgZPjgajjgavjgarjgorjgb7jgZnjgIInLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn55m75b2V5pe277yM5Y2z5Luj6KGo5oKo5bey5LuU57uG6ZiF6K+744CB5YWF5YiG5LqG6Kej5bm25ZCM5oSP6YG15a6I5pys572R56uZ55qE44CKPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOlRPU1wiIHRpdGxlPVwi55So5oi35Y2P6K6uXCI+55So5oi35Y2P6K6uPC9hPuOAi+OAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpQSVBQXCIgdGl0bGU9XCLkuKrkurrkv6Hmga/kv53miqTmnaHkvotcIj7kuKrkurrkv6Hmga/kv53miqTmnaHkvos8L2E+44CL44CKPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOkdQXCIgdGl0bGU9XCLmoaPmoYjppobnq6DnqItcIj7moaPmoYjppobnq6DnqIs8L2E+44CL44CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+eZu+mMhOaZgu+8jOWNs+S7o+ihqOaCqOW3suS7lOe0sOmWseiugOOAgeWFheWIhuS6huino+S4puWQjOaEj+mBteWuiOacrOe2suermeeahOOAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpUT1NcIiB0aXRsZT1cIueUqOaItuWNlOitsFwiPueUqOaItuWNlOitsDwvYT7jgIvjgIo8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6UElQUFwiIHRpdGxlPVwi5YCL5Lq65L+h5oGv5L+d6K235p2h5L6LXCI+5YCL5Lq65L+h5oGv5L+d6K235p2h5L6LPC9hPuOAi+OAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpHUFwiIHRpdGxlPVwi5qGj5qGI6aaG56ug56iLXCI+5qGj5qGI6aaG56ug56iLPC9hPuOAi+OAgicsXG5cdFx0fSksXG5cdFx0J0kgYWdyZWUnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0kgYWdyZWUnLFxuXHRcdFx0amE6ICflkIzmhI/jgZnjgosnLFxuXHRcdFx0emg6ICfmiJHlkIzmhI8nLFxuXHRcdH0pLFxuXHRcdCdJIGFncmVlIHdpdGggdGhlIHJlbGV2YW50IHRlcm1zJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdJIGFncmVlIHdpdGggdGhlIHJlbGV2YW50IHRlcm1zJyxcblx0XHRcdGphOiAn6Zai6YCj44GZ44KL6KaP57SE44KS6Kqt44G/44CB5ZCM5oSPJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aIkeW3sumYheivu+W5tuWQjOaEj+ebuOWFs+adoeasvicsXG5cdFx0XHQnemgtaGFudCc6ICfmiJHlt7LplrLoroDkuKblkIzmhI/nm7jpl5zmop3mrL4nLFxuXHRcdH0pLFxuXHRcdCdJbnZhbGlkIDJGQSB2ZXJpZmljYXRpb24gY29kZSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSW52YWxpZCAyRkEgdmVyaWZpY2F0aW9uIGNvZGUnLFxuXHRcdFx0amE6ICcyRkHoqo3oqLzjgrPjg7zjg4njgYzplpPpgZXjgaPjgabjgYTjgb7jgZknLFxuXHRcdFx0J3poLWhhbnMnOiAnMkZB6aqM6K+B56CB6ZSZ6K+vJyxcblx0XHRcdCd6aC1oYW50JzogJzJGQempl+itieeivOmMr+iqpCcsXG5cdFx0fSksXG5cdFx0J0ludmFsaWQgdXNlcm5hbWUgb3IgcGFzc3dvcmQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ludmFsaWQgdXNlcm5hbWUgb3IgcGFzc3dvcmQnLFxuXHRcdFx0amE6ICfliKnnlKjogIXlkI3jgb7jgZ/jga/jg5Hjgrnjg6/jg7zjg4njgYzplpPpgZXjgaPjgabjgYTjgb7jgZknLFxuXHRcdFx0J3poLWNuJzogJ+eUqOaIt+WQjeaIluWvhueggemUmeivrycsXG5cdFx0XHQnemgtaGsnOiAn55So5oi25ZCN56ix5oiW5a+G56K86Yyv6KqkJyxcblx0XHRcdCd6aC10dyc6ICfkvb/nlKjogIXlkI3nqLHmiJblr4bnorzpjK/oqqQnLFxuXHRcdH0pLFxuXHRcdCdLZWVwIG1lIGxvZ2dlZCBpbic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnS2VlcCBtZSBsb2dnZWQgaW4nLFxuXHRcdFx0amE6ICfjg63jgrDjgqTjg7PnirbmhYvjgpLkv53mjIEnLFxuXHRcdFx0J3poLWhhbnMnOiAn6K6w5L2P5oiR55qE55m75b2V54q25oCBJyxcblx0XHRcdCd6aC1oYW50JzogJ+iomOS9j+aIkeeahOeZu+WFpeeLgOaFiycsXG5cdFx0fSksXG5cdFx0J0xvZ2dpbmcgaW4nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvZ2dpbmcgaW4nLFxuXHRcdFx0amE6ICfjg63jgrDjgqTjg7PjgZfjgabjgYTjgb7jgZknLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2j5Zyo55m75b2VJyxcblx0XHRcdCd6aC1oYW50JzogJ+ato+WcqOeZu+WFpScsXG5cdFx0fSksXG5cdFx0TG9naW46IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9naW4nLFxuXHRcdFx0amE6ICfjg63jgrDjgqTjg7MnLFxuXHRcdFx0J3poLWhhbnMnOiAn55m75b2VJyxcblx0XHRcdCd6aC1oYW50JzogJ+eZu+WFpScsXG5cdFx0fSksXG5cdFx0J0xvZ2luIGNhbmNlbGxlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9naW4gY2FuY2VsbGVkJyxcblx0XHRcdGphOiAn44Ot44Kw44Kk44Oz44Kt44Oj44Oz44K744OrJyxcblx0XHRcdCd6aC1oYW5zJzogJ+eZu+W9leWPlua2iCcsXG5cdFx0XHQnemgtaGFudCc6ICfnmbvlhaXlj5bmtognLFxuXHRcdH0pLFxuXHRcdCdMb2dpbiBzdWNjZWVkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMb2dpbiBzdWNjZWVkJyxcblx0XHRcdGphOiAn44Ot44Kw44Kk44Oz44Gr5oiQ5Yqf44GX44G+44GX44GfJyxcblx0XHRcdCd6aC1oYW5zJzogJ+eZu+W9leaIkOWKnycsXG5cdFx0XHQnemgtaGFudCc6ICfnmbvlhaXmiJDlip8nLFxuXHRcdH0pLFxuXHRcdCdMb2dpbiB0b2tlbiBnb3QnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvZ2luIHRva2VuIGdvdCcsXG5cdFx0XHRqYTogJ+ODreOCsOOCpOODs+ODiOODvOOCr+ODs+OBruWPluW+l+OBq+aIkOWKn+OBl+OBvuOBl+OBnycsXG5cdFx0XHQnemgtaGFucyc6ICfojrflj5bnmbvlvZXku6TniYzmiJDlip8nLFxuXHRcdFx0J3poLWhhbnQnOiAn542y5Y+W55m75YWl5qyK5p2W5oiQ5YqfJyxcblx0XHR9KSxcblx0XHQnTmV3IHBhc3N3b3JkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdOZXcgcGFzc3dvcmQnLFxuXHRcdFx0amE6ICfmlrDjgZfjgYTjg5Hjgrnjg6/jg7zjg4knLFxuXHRcdFx0J3poLWhhbnMnOiAn5paw5a+G56CBJyxcblx0XHRcdCd6aC1oYW50JzogJ+aWsOWvhueivCcsXG5cdFx0fSksXG5cdFx0J05ldyBwYXNzd29yZCBpcyByZXF1aXJlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTmV3IHBhc3N3b3JkIGlzIHJlcXVpcmVkJyxcblx0XHRcdGphOiAn5paw44GX44GE44OR44K544Ov44O844OJ44KS6Kit5a6a44GX44Gm44GP44Gg44GV44GEJyxcblx0XHRcdCd6aC1oYW5zJzogJ+mcgOimgeiuvue9ruaWsOWvhueggScsXG5cdFx0XHQnemgtaGFudCc6ICfpnIDopoHoqK3nva7mlrDlr4bnorwnLFxuXHRcdH0pLFxuXHRcdFBhc3N3b3JkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1Bhc3N3b3JkJyxcblx0XHRcdGphOiAn44OR44K544Ov44O844OJJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WvhueggScsXG5cdFx0XHQnemgtaGFudCc6ICflr4bnorwnLFxuXHRcdH0pLFxuXHRcdCdSZXNldCBwYXNzd29yZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUmVzZXQgcGFzc3dvcmQnLFxuXHRcdFx0amE6ICfjg5Hjgrnjg6/jg7zjg4njgpLjg6rjgrvjg4Pjg4gnLFxuXHRcdFx0J3poLWhhbnMnOiAn6YeN572u5a+G56CBJyxcblx0XHRcdCd6aC1oYW50JzogJ+mHjeaWsOioreWumuWvhueivCcsXG5cdFx0fSksXG5cdFx0VXNlcm5hbWU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVXNlcm5hbWUnLFxuXHRcdFx0amE6ICfliKnnlKjogIXlkI0nLFxuXHRcdFx0J3poLWNuJzogJ+eUqOaIt+WQjScsXG5cdFx0XHQnemgtaGsnOiAn55So5oi25ZCN56ixJyxcblx0XHRcdCd6aC10dyc6ICfkvb/nlKjogIXlkI3nqLEnLFxuXHRcdH0pLFxuXHRcdEFncmVlZE9yTm90OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1BsZWFzZSByZWFkIHRoZSByZWxldmFudCB0ZXJtcy4gSWYgeW91IGFncmVlLCBjaGVjayB0aGUgY2hlY2tib3ggdG8gY29uZmlybScsXG5cdFx0XHRqYTogJ+mWoumAo+OBmeOCi+imj+e0hOOCkuOBiuiqreOBv+OBhOOBn+OBoOOBjeOAgeWQjOaEj+OBleOCjOOCi+WgtOWQiOOBr+OAgeODgeOCp+ODg+OCr+ODnOODg+OCr+OCueOBq+ODgeOCp+ODg+OCr+OCkuWFpeOCjOOBpueiuuiqjeOBl+OBpuOBj+OBoOOBleOBhCcsXG5cdFx0XHQnemgtaGFucyc6ICfor7fpmIXor7vnm7jlhbPmnaHmrL7jgILoi6XlkIzmhI/vvIzli77pgInlpI3pgInmoYbku6Xnoa7orqQnLFxuXHRcdFx0J3poLWhhbnQnOiAn6KuL6Zay6K6A55u46Zec5qKd5qy+44CC6Iul5ZCM5oSP77yM5Yu+6YG46KSH6YG45qGG5Lul56K66KqNJyxcblx0XHR9KSxcblx0XHREb3VibGVDaGVja0FncmVlZE9yTm90OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1lvdSBoYXZlIGNhcmVmdWxseSByZWFkLCBmdWxseSB1bmRlcnN0b29kIGFuZCBhZ3JlZWQgdG8gY29tcGx5IHdpdGggb3VyIDxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpUT1NcIiB0aXRsZT1cIlRlcm1zIG9mIFNlcnZpY2VcIj5UZXJtcyBvZiBTZXJ2aWNlPC9hPiwgPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOlBJUFBcIiB0aXRsZT1cIlBlcnNvbmFsIEluZm9ybWF0aW9uIFByb3RlY3Rpb24gUG9saWN5XCI+UGVyc29uYWwgSW5mb3JtYXRpb24gUHJvdGVjdGlvbiBQb2xpY3k8L2E+IGFuZCA8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6REFHWkNcIiB0aXRsZT1cIllzQXJjaGl2ZXMgQXNzb2NpYXRpb25cIj5Zc0FyY2hpdmVzIEFzc29jaWF0aW9uPC9hPi4nLFxuXHRcdFx0amE6ICfjgYLjgarjgZ/jga/mnKzjgrXjgqTjg4jjga7jgI48YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6VE9TXCIgdGl0bGU9XCLliKnnlKjopo/ntIRcIj7liKnnlKjopo/ntIQ8L2E+44CP44COPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOlBJUFBcIiB0aXRsZT1cIuWAi+S6uuaDheWgseS/neitt+adoeS+i1wiPuWAi+S6uuaDheWgseS/neitt+adoeS+izwvYT7jgI/jgI48YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6R1BcIiB0aXRsZT1cIuaho+ahiOmmhueroOeoi1wiPuaho+ahiOmmhueroOeoizwvYT7jgI/jgpLljYHliIbjgavnkIbop6PjgZfjgIHlkIzmhI/jgZfjgZ/jgZPjgajjgavjgarjgorjgb7jgZnjgIInLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn5oKo5bey5LuU57uG6ZiF6K+744CB5YWF5YiG5LqG6Kej5bm25ZCM5oSP6YG15a6I5pys572R56uZ55qE44CKPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOlRPU1wiIHRpdGxlPVwi55So5oi35Y2P6K6uXCI+55So5oi35Y2P6K6uPC9hPuOAi+OAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpQSVBQXCIgdGl0bGU9XCLkuKrkurrkv6Hmga/kv53miqTmnaHkvotcIj7kuKrkurrkv6Hmga/kv53miqTmnaHkvos8L2E+44CL44CKPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOkdQXCIgdGl0bGU9XCLmoaPmoYjppobnq6DnqItcIj7moaPmoYjppobnq6DnqIs8L2E+44CL44CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+aCqOW3suS7lOe0sOmWseiugOOAgeWFheWIhuS6huino+S4puWQjOaEj+mBteWuiOacrOe2suermeeahOOAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpUT1NcIiB0aXRsZT1cIueUqOaItuWNlOitsFwiPueUqOaItuWNlOitsDwvYT7jgIvjgIo8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6UElQUFwiIHRpdGxlPVwi5YCL5Lq65L+h5oGv5L+d6K235p2h5L6LXCI+5YCL5Lq65L+h5oGv5L+d6K235p2h5L6LPC9hPuOAi+OAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpHUFwiIHRpdGxlPVwi5qGj5qGI6aaG56ug56iLXCI+5qGj5qGI6aaG56ug56iLPC9hPuOAi+OAgicsXG5cdFx0fSksXG5cdFx0RW1wdHkyRkE6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhlIDJGQSB2ZXJpZmljYXRpb24gY29kZSBjYW5ub3QgYmUgZW1wdHknLFxuXHRcdFx0amE6ICcyRkHoqo3oqLzjgrPjg7zjg4njgYzlhaXlipvjgZXjgozjgabjgYTjgb7jgZvjgpMnLFxuXHRcdFx0J3poLWhhbnMnOiAnMkZB6aqM6K+B56CB5LiN6IO95Li656m6Jyxcblx0XHRcdCd6aC1oYW50JzogJzJGQempl+itieeivOS4jeiDveeIsuepuicsXG5cdFx0fSksXG5cdFx0RW1wdHlQYXNzd29yZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGUgcGFzc3dvcmQgY2Fubm90IGJlIGVtcHR5Jyxcblx0XHRcdGphOiAn44OR44K544Ov44O844OJ44GM5YWl5Yqb44GV44KM44Gm44GE44G+44Gb44KTJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WvhueggeS4jeiDveS4uuepuicsXG5cdFx0XHQnemgtaGFudCc6ICflr4bnorzkuI3og73niLLnqbonLFxuXHRcdH0pLFxuXHRcdEVtcHR5VXNlcm5hbWVPclBhc3N3b3JkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoZSB1c2VybmFtZSBvciBwYXNzd29yZCBjYW5ub3QgYmUgZW1wdHknLFxuXHRcdFx0amE6ICfliKnnlKjogIXlkI3jgb7jgZ/jga/jg5Hjgrnjg6/jg7zjg4njgYzlhaXlipvjgZXjgozjgabjgYTjgb7jgZvjgpMnLFxuXHRcdFx0J3poLWNuJzogJ+eUqOaIt+WQjeaIluWvhueggeS4jeiDveS4uuepuicsXG5cdFx0XHQnemgtaGsnOiAn55So5oi25ZCN56ix5oiW5a+G56K85LiN6IO954iy56m6Jyxcblx0XHRcdCd6aC10dyc6ICfkvb/nlKjogIXlkI3nqLHmiJblr4bnorzkuI3og73niLLnqbonLFxuXHRcdH0pLFxuXHRcdCdOZXR3b3JrIGVycm9yJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdOZXR3b3JrIGVycm9yLiBSZWRpcmVjdGluZy4uLicsXG5cdFx0XHRqYTogJ+ODjeODg+ODiOODr+ODvOOCr+OCqOODqeODvOOAgeODquODgOOCpOODrOOCr+ODiOS4rS4uLicsXG5cdFx0XHQnemgtaGFucyc6ICfnvZHnu5zlvILluLjjgILph43lrprlkJHkuK3igKbigKYnLFxuXHRcdFx0J3poLWhhbnQnOiAn57ay6Lev55Ww5bi444CC6YeN5paw5bCO5ZCR5Lit4oCm4oCmJyxcblx0XHR9KSxcblx0XHRTZWxlY3RlZE9yTm90OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0tlZXAgbG9nZ2VkIGluIGZvciA2IG1vbnRocyBpZiBzZWxlY3RlZDsgb3RoZXJ3aXNlIHVudGlsIHRoZSBicm93c2VyIGNsb3Nlcy4nLFxuXHRcdFx0amE6ICfjg4Hjgqfjg4Pjgq/jgpLlhaXjgozjgovjgajjg63jgrDjgqTjg7PnirbmhYvjgYw244O25pyI6ZaT5L+d5oyB44GV44KM44CB5YWl44KM44Gq44GE5aC05ZCI44Gv44OW44Op44Km44K244KS6ZaJ44GY44KL44G+44Gn5L+d5oyB44GV44KM44G+44GZ44CCJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WLvumAieWImeS/neaMgeeZu+W9leeKtuaAgTbkuKrmnIjvvIzlkKbliJnlsIblnKjmtY/op4jlmajlhbPpl63ml7bpgIDlh7rnmbvlvZXjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5Yu+6YG45YiZ5L+d5oyB55m75YWl54uA5oWLNuWAi+aciO+8jOWQpuWJh+Wwh+WcqOeAj+imveWZqOmXnOmWieaZgueZu+WHuuOAgicsXG5cdFx0fSksXG5cdFx0VG9vRnJlcXVlbnQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhlIHVzZXIgbG9naW4gaXMgdG9vIGZyZXF1ZW50LCBwbGVhc2UgdHJ5IGFnYWluIGluIGZpdmUgbWludXRlcycsXG5cdFx0XHRqYTogJ+WIqeeUqOiAheOBjOmgu+e5geOBmeOBjuOCi+OBn+OCgeOAgTXliIblvozjgavlho3oqabooYzjgZfjgabjgY/jgaDjgZXjgYQnLFxuXHRcdFx0J3poLWNuJzogJ+eUqOaIt+eZu+W9lei/h+S6jumikee5ge+8jOivt+S6lOWIhumSn+WQjuWGjeivlScsXG5cdFx0XHQnemgtaGsnOiAn55So5oi255m75YWl6YGO5pa86aC757mB77yM6KuL5LqU5YiG6ZCY5b6M5YaN6KmmJyxcblx0XHRcdCd6aC10dyc6ICfkvb/nlKjogIXnmbvlhaXov4fkuo7popHnuYHvvIzor7fkupTliIbpkp/lkI7lho3or5UnLFxuXHRcdH0pLFxuXHRcdCdVbmV4cGVjdGVkIEFQSSByZXNwb25zZSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVW5leHBlY3RlZCBBUEkgcmVzcG9uc2U6ICQxLiBSZWRpcmVjdGluZy4uLicsXG5cdFx0XHRqYTogJ+S6iOacn+OBm+OBrEFQSeOBruW/nOetlO+8miQx44CB44Oq44OA44Kk44Os44Kv44OI5LitLi4uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aEj+WklueahEFQSeWTjeW6lO+8miQx44CC6YeN5a6a5ZCR5Lit4oCm4oCmJyxcblx0XHRcdCd6aC1oYW50JzogJ+aEj+WklueahEFQSemfv+aHie+8miQx44CC6YeN5paw5bCO5ZCR5Lit4oCm4oCmJyxcblx0XHR9KSxcblx0XHQnTG9naW4gd2l0aCBRUSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9naW4gd2l0aCBRUScsXG5cdFx0XHRqYTogJ1FR44Gn44Ot44Kw44Kk44OzJyxcblx0XHRcdCd6aC1oYW5zJzogJ1FR55m75b2VJyxcblx0XHRcdCd6aC1oYW50JzogJ1FR55m75YWlJyxcblx0XHR9KSxcblx0XHRPcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdvcicsXG5cdFx0XHRqYTogJ+OBvuOBn+OBrycsXG5cdFx0XHQnemgtaGFucyc6ICfmiJYnLFxuXHRcdFx0J3poLWhhbnQnOiAn5oiWJyxcblx0XHR9KSxcblx0XHQnUVEgbG9naW4gZGVzY3JpcHRpb24nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1VzZSB5b3VyIFFRIGFjY291bnQgdG8gbG9nIGluIHF1aWNrbHkuIFlvdSB3aWxsIGJlIHJlZGlyZWN0ZWQgdG8gdGhlIFFRIGF1dGhvcml6YXRpb24gcGFnZS4nLFxuXHRcdFx0amE6ICdRUeOCouOCq+OCpuODs+ODiOOBp+e0oOaXqeOBj+ODreOCsOOCpOODs+OBp+OBjeOBvuOBmeOAglFR6KqN6Ki844Oa44O844K444Gr44Oq44OA44Kk44Os44Kv44OI44GX44G+44GZ44CCJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S9v+eUqCBRUSDotKbmiLflv6vmjbfnmbvlvZXvvIzljbPlsIbot7Povazoh7MgUVEg5o6I5p2D6aG16Z2i44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+S9v+eUqCBRUSDos6zmiLblv6vmjbfnmbvlhaXvvIzljbPlsIfot7PovYnoh7MgUVEg5o6I5qyK6aCB6Z2i44CCJyxcblx0XHR9KSxcblx0fTtcbn07XG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImNvbnN0IGluaXRXaW5kb3dNYW5hZ2VyID0gKCk6IE9PLnVpLldpbmRvd01hbmFnZXIgPT4ge1xuXHRyZXR1cm4gbmV3IE9PLnVpLldpbmRvd01hbmFnZXIoKTtcbn07XG5cbmNvbnN0IHdpbmRvd01hbmFnZXI6IE9PLnVpLldpbmRvd01hbmFnZXIgPSBpbml0V2luZG93TWFuYWdlcigpO1xuXG5leHBvcnQge3dpbmRvd01hbmFnZXJ9O1xuIiwgImltcG9ydCB7d2luZG93TWFuYWdlcn0gZnJvbSAnLi4vaW5pdFdpbmRvd01hbmFnZXInO1xuXG5jb25zdCBvb3VpQ29uZmlybSA9IGFzeW5jIChvcHRpb25zOiBPTy51aS5NZXNzYWdlRGlhbG9nLlNldHVwRGF0YU1hcCk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xuXHRjb25zdCBtZXNzYWdlRGlhbG9nOiBPTy51aS5NZXNzYWdlRGlhbG9nID0gbmV3IE9PLnVpLk1lc3NhZ2VEaWFsb2coKTtcblx0d2luZG93TWFuYWdlci5hZGRXaW5kb3dzKFttZXNzYWdlRGlhbG9nXSk7XG5cblx0Y29uc3QgaW5zdGFuY2U6IE9PLnVpLldpbmRvd0luc3RhbmNlID0gd2luZG93TWFuYWdlci5vcGVuV2luZG93KG1lc3NhZ2VEaWFsb2csIG9wdGlvbnMpO1xuXG5cdGNvbnN0IGRhdGE6IHZvaWQgPSBhd2FpdCBpbnN0YW5jZS5jbG9zZWQ7XG5cdGNvbnN0IF9kYXRhID0gZGF0YSBhcyB7YWN0aW9uOiBzdHJpbmd9IHwgdm9pZDtcblxuXHRyZXR1cm4gISEoX2RhdGE/LmFjdGlvbiA9PT0gJ2FjY2VwdCcpO1xufTtcblxuZXhwb3J0IHtvb3VpQ29uZmlybX07XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuSlNYJztcbmltcG9ydCB7Z2VuZXJhdGVTdmdEYXRhVXJsfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCBxcUxvZ29TdmcgZnJvbSAnLi4vLi4vaW1hZ2VzL1NpbXBsZUljb25zUXEuc3ZnJztcblxuY29uc3QgZ2VuZXJhdGVFbGVtZW50cyA9IChpc0FncmVlVG9zOiBib29sZWFuKSA9PiB7XG5cdGNvbnN0IG1lc3NhZ2VEaWFsb2c6IE9PLnVpLk1lc3NhZ2VEaWFsb2cgPSBuZXcgT08udWkuTWVzc2FnZURpYWxvZygpO1xuXG5cdGNvbnN0IG5hbWVJbnB1dDogT08udWkuVGV4dElucHV0V2lkZ2V0ID0gbmV3IE9PLnVpLlRleHRJbnB1dFdpZGdldCh7XG5cdFx0aWNvbjogJ3VzZXJBdmF0YXInLFxuXHRcdHBsYWNlaG9sZGVyOiBnZXRNZXNzYWdlKCdVc2VybmFtZScpLFxuXHRcdHZhbGlkYXRlOiAnbm9uLWVtcHR5Jyxcblx0fSk7XG5cblx0Y29uc3QgcHdkSW5wdXQ6IE9PLnVpLlRleHRJbnB1dFdpZGdldCA9IG5ldyBPTy51aS5UZXh0SW5wdXRXaWRnZXQoe1xuXHRcdGljb246ICdrZXknLFxuXHRcdHBsYWNlaG9sZGVyOiBnZXRNZXNzYWdlKCdQYXNzd29yZCcpLFxuXHRcdHR5cGU6ICdwYXNzd29yZCcsXG5cdFx0dmFsaWRhdGU6ICdub24tZW1wdHknLFxuXHR9KTtcblxuXHRjb25zdCBhZ3JlZVRvc0NoZWNrYm94OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0ID0gbmV3IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQoe1xuXHRcdHNlbGVjdGVkOiBpc0FncmVlVG9zLFxuXHR9KTtcblx0Y29uc3QgYWdyZWVUb3NMYXlvdXQ6IE9PLnVpLkZpZWxkTGF5b3V0PE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGFncmVlVG9zQ2hlY2tib3gsIHtcblx0XHRhbGlnbjogJ2lubGluZScsXG5cdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ0kgYWdyZWUgd2l0aCB0aGUgcmVsZXZhbnQgdGVybXMnKSxcblx0fSk7XG5cblx0Y29uc3Qga2VlcExvZ2luQ2hlY2tib3g6IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQgPSBuZXcgT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCgpO1xuXHRjb25zdCBrZWVwTG9naW5MYXlvdXQ6IE9PLnVpLkZpZWxkTGF5b3V0PE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGtlZXBMb2dpbkNoZWNrYm94LCB7XG5cdFx0YWxpZ246ICdpbmxpbmUnLFxuXHRcdGhlbHA6IGdldE1lc3NhZ2UoJ1NlbGVjdGVkT3JOb3QnKSxcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnS2VlcCBtZSBsb2dnZWQgaW4nKSxcblx0fSk7XG5cblx0Y29uc3QgbGFiZWwgPSAoXG5cdFx0PGxhYmVsXG5cdFx0XHRjbGFzc05hbWU9e1snb28tdWktbGFiZWxXaWRnZXQnLCAnb28tdWktbGFiZWxFbGVtZW50LWxhYmVsJ119XG5cdFx0XHRzdHlsZT17e2ZvbnRTaXplOiAnOTAlJywgdGV4dEFsaWduOiAnanVzdGlmeSd9fVxuXHRcdC8+XG5cdCk7XG5cdGNvbnN0ICRsYWJlbCA9ICQobGFiZWwpIGFzIEpRdWVyeTtcblxuXHRjb25zdCAkYWdyZWVUb3M6IEpRdWVyeSA9ICRsYWJlbC5jbG9uZSgpLmFwcGVuZChhZ3JlZVRvc0xheW91dC4kZWxlbWVudCk7XG5cdGNvbnN0ICRmb3Jnb3RQYXNzd29yZDogSlF1ZXJ5ID0gJGxhYmVsXG5cdFx0LmNsb25lKClcblx0XHQuY3NzKCdmbG9hdCcsICdyaWdodCcpXG5cdFx0LmFwcGVuZChcblx0XHRcdDxhIGhyZWY9e213LnV0aWwuZ2V0VXJsKCdTcGVjaWFsOlBhc3N3b3JkUmVzZXQnKX0gdGl0bGU9e2dldE1lc3NhZ2UoJ1Jlc2V0IHBhc3N3b3JkJyl9PlxuXHRcdFx0XHR7Z2V0TWVzc2FnZSgnRm9yZ290IHBhc3N3b3JkPycpfVxuXHRcdFx0PC9hPlxuXHRcdCk7XG5cdGNvbnN0ICRpbnB1dEJveDogSlF1ZXJ5ID0gJGxhYmVsXG5cdFx0LmNsb25lKClcblx0XHQuY3NzKHtcblx0XHRcdGRpc3BsYXk6ICdibG9jaycsXG5cdFx0XHQnZm9udC1zaXplJzogJ2luaGVyaXQnLFxuXHRcdFx0cGFkZGluZzogJzZweCAwJyxcblx0XHR9KVxuXHRcdC5hcHBlbmQobmFtZUlucHV0LiRlbGVtZW50LmNzcygnbWFyZ2luLWJvdHRvbScsICc2cHgnKSwgcHdkSW5wdXQuJGVsZW1lbnQpO1xuXHRjb25zdCAkdG9zTGFiZWw6IEpRdWVyeSA9ICRsYWJlbC5jbG9uZSgpLmh0bWwoZ2V0TWVzc2FnZSgnaGVscCBmb3IgSSBhZ3JlZSB3aXRoIHRoZSByZWxldmFudCB0ZXJtcycpKTtcblx0Y29uc3QgJHJlbWVtYmVyTWU6IEpRdWVyeSA9ICRsYWJlbC5jbG9uZSgpLmFwcGVuZChrZWVwTG9naW5MYXlvdXQuJGVsZW1lbnQuY3NzKCdtYXJnaW4tdG9wJywgJzZweCcpKTtcblxuXHQvLyBRUSBsb2dpbiBlbGVtZW50IOKAlCBjb25kaXRpb25hbGx5IGluY2x1ZGVkIHdoZW4gUVFDb25uZWN0IGlzIGF2YWlsYWJsZVxuXHRjb25zdCBxcUxvZ2luVXJsOiBzdHJpbmcgPSBgJHttdy51dGlsLmdldFVybCgnU3BlY2lhbDpVc2VyTG9naW4nKX0/cmV0dXJudG89JHtlbmNvZGVVUklDb21wb25lbnQobG9jYXRpb24uaHJlZil9YDtcblx0Y29uc3QgcXFJY29uRGF0YVVybDogc3RyaW5nID0gZ2VuZXJhdGVTdmdEYXRhVXJsKHFxTG9nb1N2ZyBhcyBzdHJpbmcpO1xuXHRjb25zdCAkcXFMb2dpblNlY3Rpb246IEpRdWVyeSA9ICRsYWJlbFxuXHRcdC5jbG9uZSgpXG5cdFx0LmNzcyh7XG5cdFx0XHRkaXNwbGF5OiAnYmxvY2snLFxuXHRcdFx0J2ZvbnQtc2l6ZSc6ICdpbmhlcml0Jyxcblx0XHRcdCd0ZXh0LWFsaWduJzogJ2NlbnRlcicsXG5cdFx0fSlcblx0XHQuYXBwZW5kKFxuXHRcdFx0JCgnPHNwYW4+Jylcblx0XHRcdFx0LmNzcyh7XG5cdFx0XHRcdFx0Y29sb3I6ICcjNzI3NzdkJyxcblx0XHRcdFx0XHRkaXNwbGF5OiAnYmxvY2snLFxuXHRcdFx0XHRcdG1hcmdpbjogJzRweCAwJyxcblx0XHRcdFx0fSlcblx0XHRcdFx0LnRleHQoZ2V0TWVzc2FnZSgnT3InKSksXG5cdFx0XHQkKCc8YT4nKVxuXHRcdFx0XHQuYXR0cih7XG5cdFx0XHRcdFx0aHJlZjogcXFMb2dpblVybCxcblx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgnUVEgbG9naW4gZGVzY3JpcHRpb24nKSxcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNzcyh7XG5cdFx0XHRcdFx0J2JhY2tncm91bmQtY29sb3InOiAnIzEyQjdGNScsXG5cdFx0XHRcdFx0Ym9yZGVyOiAnMXB4IHNvbGlkICMxMkI3RjUnLFxuXHRcdFx0XHRcdCdib3JkZXItcmFkaXVzJzogJzJweCcsXG5cdFx0XHRcdFx0Y29sb3I6ICcjZmZmJyxcblx0XHRcdFx0XHRkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuXHRcdFx0XHRcdCdhbGlnbi1pdGVtcyc6ICdjZW50ZXInLFxuXHRcdFx0XHRcdGdhcDogJzZweCcsXG5cdFx0XHRcdFx0cGFkZGluZzogJzVweCAxMnB4Jyxcblx0XHRcdFx0XHQnZm9udC13ZWlnaHQnOiAnYm9sZCcsXG5cdFx0XHRcdFx0J2ZvbnQtc2l6ZSc6ICcxZW0nLFxuXHRcdFx0XHRcdCdsaW5lLWhlaWdodCc6ICcxLjQyODU3MTQzJyxcblx0XHRcdFx0XHQndGV4dC1kZWNvcmF0aW9uJzogJ25vbmUnLFxuXHRcdFx0XHRcdCd3aGl0ZS1zcGFjZSc6ICdub3dyYXAnLFxuXHRcdFx0XHR9KVxuXHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdCQoJzxpbWc+JykuYXR0cih7XG5cdFx0XHRcdFx0XHRzcmM6IHFxSWNvbkRhdGFVcmwsXG5cdFx0XHRcdFx0XHRhbHQ6ICdRUScsXG5cdFx0XHRcdFx0XHR3aWR0aDogMjAsXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDIwLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdGdldE1lc3NhZ2UoJ0xvZ2luIHdpdGggUVEnKVxuXHRcdFx0XHQpXG5cdFx0KTtcblxuXHRyZXR1cm4ge1xuXHRcdCRhZ3JlZVRvcyxcblx0XHQkZm9yZ290UGFzc3dvcmQsXG5cdFx0JGlucHV0Qm94LFxuXHRcdCRxcUxvZ2luU2VjdGlvbixcblx0XHQkcmVtZW1iZXJNZSxcblx0XHQkdG9zTGFiZWwsXG5cdFx0YWdyZWVUb3NDaGVja2JveCxcblx0XHRrZWVwTG9naW5DaGVja2JveCxcblx0XHRtZXNzYWdlRGlhbG9nLFxuXHRcdG5hbWVJbnB1dCxcblx0XHRwd2RJbnB1dCxcblx0fTtcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVFbGVtZW50c307XG4iLCAiPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMjEuMzk1IDE1LjAzNWE0MCA0MCAwIDAgMC0uODAzLTIuMjY0bC0xLjA3OS0yLjY5NWMuMDAxLS4wMzIuMDE0LS41NjIuMDE0LS44MzZDMTkuNTI2IDQuNjMyIDE3LjM1MSAwIDEyIDBTNC40NzQgNC42MzIgNC40NzQgOS4yNDFjMCAuMjc0LjAxMy44MDQuMDE0LjgzNmwtMS4wOCAyLjY5NWEzOSAzOSAwIDAgMC0uODAyIDIuMjY0Yy0xLjAyMSAzLjI4My0uNjkgNC42NDMtLjQzOCA0LjY3My41NC4wNjUgMi4xMDMtMi40NzIgMi4xMDMtMi40NzIgMCAxLjQ2OS43NTYgMy4zODcgMi4zOTQgNC43NzEtLjYxMi4xODgtMS4zNjMuNDc5LTEuODQ1LjgzNS0uNDM0LjMyLS4zNzkuNjQ2LS4zMDEuNzc4LjM0My41NzggNS44ODMuMzY5IDcuNDgyLjE4OSAxLjYuMTggNy4xNC4zODkgNy40ODMtLjE4OS4wNzgtLjEzMi4xMzItLjQ1OC0uMzAxLS43NzgtLjQ4My0uMzU2LTEuMjMzLS42NDYtMS44NDYtLjgzNiAxLjYzNy0xLjM4NCAyLjM5My0zLjMwMiAyLjM5My00Ljc3MSAwIDAgMS41NjMgMi41MzcgMi4xMDMgMi40NzIuMjUxLS4wMy41ODEtMS4zOS0uNDM4LTQuNjczXCIvPjwvc3ZnPiIsICJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7cmVtb3ZlV2luZG93UmVzaXplSGFuZGxlcn0gZnJvbSAnLi9yZW1vdmVXaW5kb3dSZXNpemVIYW5kbGVyJztcbmltcG9ydCB7d2luZG93TWFuYWdlcn0gZnJvbSAnLi4vaW5pdFdpbmRvd01hbmFnZXInO1xuXG5jb25zdCBvb3VpUHJvbXB0ID0gYXN5bmMgKHJldHlwZVBhc3N3b3JkOiBib29sZWFuKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiA9PiB7XG5cdGNvbnN0IGNvZGVEaWFsb2c6IE9PLnVpLk1lc3NhZ2VEaWFsb2cgPSBuZXcgT08udWkuTWVzc2FnZURpYWxvZygpO1xuXHRjb25zdCBjb2RlSW5wdXQ6IE9PLnVpLlRleHRJbnB1dFdpZGdldCA9IG5ldyBPTy51aS5UZXh0SW5wdXRXaWRnZXQoe1xuXHRcdGljb246ICdrZXknLFxuXHRcdHBsYWNlaG9sZGVyOiByZXR5cGVQYXNzd29yZCA/IGdldE1lc3NhZ2UoJ05ldyBwYXNzd29yZCcpIDogZ2V0TWVzc2FnZSgnNi1kaWdpdCBudW1iZXInKSxcblx0XHR2YWxpZGF0ZTogJ2ludGVnZXInLFxuXHR9KTtcblxuXHRjb25zdCBjb2RlTGF5b3V0OiBPTy51aS5GaWVsZExheW91dDxPTy51aS5UZXh0SW5wdXRXaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGNvZGVJbnB1dCwge1xuXHRcdGFsaWduOiAndG9wJyxcblx0XHRsYWJlbDogJChcblx0XHRcdDxiIGNsYXNzTmFtZT17Wydvby11aS1tZXNzYWdlRGlhbG9nLXRpdGxlJywgJ29vLXVpLXdpbmRvdy1oZWFkJ119PlxuXHRcdFx0XHR7cmV0eXBlUGFzc3dvcmQgPyBnZXRNZXNzYWdlKCdFbnRlciBwYXNzd29yZCcpIDogZ2V0TWVzc2FnZSgnRW50ZXIgMkZBIHZlcmlmaWNhdGlvbiBjb2RlJyl9XG5cdFx0XHQ8L2I+XG5cdFx0KSxcblx0fSk7XG5cblx0d2luZG93TWFuYWdlci5hZGRXaW5kb3dzKFtjb2RlRGlhbG9nXSk7XG5cblx0Y29uc3QgaW5zdGFuY2U6IE9PLnVpLldpbmRvd0luc3RhbmNlID0gd2luZG93TWFuYWdlci5vcGVuV2luZG93KGNvZGVEaWFsb2csIHtcblx0XHRtZXNzYWdlOiBjb2RlTGF5b3V0LiRlbGVtZW50LFxuXHR9KTtcblxuXHRyZW1vdmVXaW5kb3dSZXNpemVIYW5kbGVyKCk7XG5cblx0dm9pZCBpbnN0YW5jZS5vcGVuZWQudGhlbigoKTogdm9pZCA9PiB7XG5cdFx0Y29kZUlucHV0Lm9uKCdlbnRlcicsICgpOiB2b2lkID0+IHtcblx0XHRcdCh3aW5kb3dNYW5hZ2VyLmdldEN1cnJlbnRXaW5kb3coKSBhcyBPTy51aS5XaW5kb3cpLmNsb3NlKHtcblx0XHRcdFx0YWN0aW9uOiAnYWNjZXB0Jyxcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdGNvZGVJbnB1dC5mb2N1cygpO1xuXHR9KTtcblxuXHRjb25zdCBkYXRhOiB2b2lkID0gYXdhaXQgaW5zdGFuY2UuY2xvc2VkO1xuXHRjb25zdCBfZGF0YSA9IGRhdGEgYXMge2FjdGlvbjogc3RyaW5nfSB8IHZvaWQ7XG5cblx0cmV0dXJuIF9kYXRhPy5hY3Rpb24gPT09ICdhY2NlcHQnID8gY29kZUlucHV0LmdldFZhbHVlKCkgOiBudWxsO1xufTtcblxuZXhwb3J0IHtvb3VpUHJvbXB0fTtcbiIsICJpbXBvcnQge3dpbmRvd01hbmFnZXJ9IGZyb20gJy4uL2luaXRXaW5kb3dNYW5hZ2VyJztcblxuY29uc3QgcmVtb3ZlV2luZG93UmVzaXplSGFuZGxlciA9ICgpOiB2b2lkID0+IHtcblx0JCh3aW5kb3cpLm9mZih7XG5cdFx0J29yaWVudGF0aW9uY2hhbmdlIHJlc2l6ZSc6ICh3aW5kb3dNYW5hZ2VyIGFzIHVua25vd24gYXMge29uV2luZG93UmVzaXplSGFuZGxlcjogKCkgPT4gdm9pZH0pXG5cdFx0XHQub25XaW5kb3dSZXNpemVIYW5kbGVyLFxuXHR9KTtcbn07XG5cbmV4cG9ydCB7cmVtb3ZlV2luZG93UmVzaXplSGFuZGxlcn07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4uL2FwaSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmNvbnN0IHF1ZXJ5TG9naW5Ub2tlbiA9IGFzeW5jIChcblx0dG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZVxuKTogUHJvbWlzZTx7XG5cdGxvZ2luVG9rZW46IHN0cmluZztcblx0dG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZTtcbn0+ID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KHtcblx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdHZXR0aW5nIGxvZ2luIHRva2VuJyksXG5cdH0pO1xuXG5cdGNvbnN0IGxvZ2luVG9rZW46IHN0cmluZyA9IGF3YWl0IGFwaS5nZXRUb2tlbignbG9naW4nKTtcblxuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoe1xuXHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0xvZ2luIHRva2VuIGdvdCcpLFxuXHRcdGR1cmF0aW9uOiAtMSxcblx0fSk7XG5cblx0cmV0dXJuIHtcblx0XHRsb2dpblRva2VuLFxuXHRcdHRvYXN0aWZ5SW5zdGFuY2UsXG5cdH07XG59O1xuXG5leHBvcnQge3F1ZXJ5TG9naW5Ub2tlbn07XG4iLCAiaW1wb3J0IHtkZWxheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7d2luZG93TWFuYWdlcn0gZnJvbSAnLi4vaW5pdFdpbmRvd01hbmFnZXInO1xuXG5jb25zdCByZWRpcmVjdE9yaWdpbkxvZ2luUGFnZSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0YXdhaXQgd2luZG93TWFuYWdlci5jbGVhcldpbmRvd3MoKTtcblx0YXdhaXQgZGVsYXkoMyAqIDEwMDApO1xuXHRsb2NhdGlvbi5ocmVmID0gbXcudXRpbC5nZXRVcmwoJ1NwZWNpYWw6VXNlcmxvZ2luJyk7XG59O1xuXG5leHBvcnQge3JlZGlyZWN0T3JpZ2luTG9naW5QYWdlfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmNvbnN0IHNob3dFcnJvciA9IChlcnJvcjogdW5rbm93biwgdG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSk6IHZvaWQgPT4ge1xuXHRjb25zb2xlLmVycm9yKCdbQWpheExvZ2luXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnTmV0d29yayBlcnJvcicpLFxuXHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnZXJyb3InXG5cdCk7XG59O1xuXG5leHBvcnQge3Nob3dFcnJvcn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QztJQUM5Q2hKLFdBQVdBLE1BQU07SUFBQztFQUNuQjtBQUVBLFFBQU1qRSxnQkFBaUJrTixXQUF5RDtBQUMvRSxRQUFJLEVBQUEsR0FBQ3ZOLG9CQUFBd04scUJBQW9CRCxLQUFLLEdBQUc7QUFDaEM7SUFDRDtBQUVBQSxVQUFNRSxlQUFlO0FBQ3JCOUMsY0FBVTJDLG9CQUFvQjtFQUMvQjtBQUNBbk4sY0FBWStNLGVBQWU3TSxhQUFhO0FBQ3pDLENBQUM7IiwKICAibmFtZXMiOiBbImxvZ2luRWxlbWVudFNlbGVjdG9yIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQxNCIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImFkZExpc3RlbmVyIiwgIiRlbGVtZW50IiwgImV2ZW50TGlzdGVuZXIiLCAib24iLCAiZmlsdGVyQWx0ZXJlZENsaWNrcyIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQxMiIsICJfX3RvRVNNIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIkNhbmNlbCIsICJ6aCIsICJMb2dpbiIsICJQYXNzd29yZCIsICJVc2VybmFtZSIsICJBZ3JlZWRPck5vdCIsICJEb3VibGVDaGVja0FncmVlZE9yTm90IiwgIkVtcHR5MkZBIiwgIkVtcHR5UGFzc3dvcmQiLCAiRW1wdHlVc2VybmFtZU9yUGFzc3dvcmQiLCAiU2VsZWN0ZWRPck5vdCIsICJUb29GcmVxdWVudCIsICJPciIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaW5pdFdpbmRvd01hbmFnZXIiLCAiT08iLCAidWkiLCAiV2luZG93TWFuYWdlciIsICJ3aW5kb3dNYW5hZ2VyIiwgIm9vdWlDb25maXJtIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAib3B0aW9ucyIsICJtZXNzYWdlRGlhbG9nIiwgIk1lc3NhZ2VEaWFsb2ciLCAiYWRkV2luZG93cyIsICJpbnN0YW5jZSIsICJvcGVuV2luZG93IiwgImRhdGEiLCAiY2xvc2VkIiwgIl9kYXRhIiwgImFjdGlvbiIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiaW1wb3J0X2V4dF9nYWRnZXQ1IiwgImNoZWNrVmFsaWQiLCAiX3JlZjIiLCAiYWdyZWVUb3NDaGVja2JveCIsICJuYW1lSW5wdXQiLCAicHdkSW5wdXQiLCAidG9hc3RpZnlJbnN0YW5jZSIsICJpc0FncmVlVG9zIiwgImlzU2VsZWN0ZWQiLCAiaXNGaWxsIiwgImdldFZhbHVlIiwgInRyaW0iLCAiaW5jbHVkZXMiLCAiaGlkZVRvYXN0IiwgImNsZWFyV2luZG93cyIsICJtZXNzYWdlIiwgIiQiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImlubmVySFRNTCIsICJhY3Rpb25zIiwgImxhYmVsIiwgImZsYWdzIiwgInRvYXN0aWZ5IiwgInRleHQiLCAiZHVyYXRpb24iLCAiaXNWYWxpZCIsICJfeDIiLCAiX3gzIiwgImltcG9ydF9leHRfZ2FkZ2V0NiIsICJpbXBvcnRfZXh0X2dhZGdldDciLCAiU2ltcGxlSWNvbnNRcV9kZWZhdWx0IiwgImdlbmVyYXRlRWxlbWVudHMiLCAiVGV4dElucHV0V2lkZ2V0IiwgImljb24iLCAicGxhY2Vob2xkZXIiLCAidmFsaWRhdGUiLCAidHlwZSIsICJDaGVja2JveElucHV0V2lkZ2V0IiwgInNlbGVjdGVkIiwgImFncmVlVG9zTGF5b3V0IiwgIkZpZWxkTGF5b3V0IiwgImFsaWduIiwgImtlZXBMb2dpbkNoZWNrYm94IiwgImtlZXBMb2dpbkxheW91dCIsICJoZWxwIiwgImNsYXNzTmFtZSIsICJzdHlsZSIsICJmb250U2l6ZSIsICJ0ZXh0QWxpZ24iLCAiJGxhYmVsIiwgIiRhZ3JlZVRvcyIsICJjbG9uZSIsICJhcHBlbmQiLCAiJGZvcmdvdFBhc3N3b3JkIiwgImNzcyIsICJocmVmIiwgIm13IiwgInV0aWwiLCAiZ2V0VXJsIiwgInRpdGxlIiwgIiRpbnB1dEJveCIsICJkaXNwbGF5IiwgInBhZGRpbmciLCAiJHRvc0xhYmVsIiwgImh0bWwiLCAiJHJlbWVtYmVyTWUiLCAicXFMb2dpblVybCIsICJlbmNvZGVVUklDb21wb25lbnQiLCAibG9jYXRpb24iLCAicXFJY29uRGF0YVVybCIsICJnZW5lcmF0ZVN2Z0RhdGFVcmwiLCAiJHFxTG9naW5TZWN0aW9uIiwgImNvbG9yIiwgIm1hcmdpbiIsICJhdHRyIiwgImJvcmRlciIsICJnYXAiLCAic3JjIiwgImFsdCIsICJ3aWR0aCIsICJoZWlnaHQiLCAiaW1wb3J0X2V4dF9nYWRnZXQ4IiwgInJlbW92ZVdpbmRvd1Jlc2l6ZUhhbmRsZXIiLCAid2luZG93IiwgIm9mZiIsICJvbldpbmRvd1Jlc2l6ZUhhbmRsZXIiLCAib291aVByb21wdCIsICJfcmVmMyIsICJyZXR5cGVQYXNzd29yZCIsICJjb2RlRGlhbG9nIiwgImNvZGVJbnB1dCIsICJjb2RlTGF5b3V0IiwgIm9wZW5lZCIsICJ0aGVuIiwgImdldEN1cnJlbnRXaW5kb3ciLCAiY2xvc2UiLCAiZm9jdXMiLCAiX3g0IiwgImltcG9ydF9leHRfZ2FkZ2V0OSIsICJxdWVyeUxvZ2luVG9rZW4iLCAiX3JlZjQiLCAibG9naW5Ub2tlbiIsICJnZXRUb2tlbiIsICJfeDUiLCAiaW1wb3J0X2V4dF9nYWRnZXQxMCIsICJyZWRpcmVjdE9yaWdpbkxvZ2luUGFnZSIsICJfcmVmNSIsICJkZWxheSIsICJpbXBvcnRfZXh0X2dhZGdldDExIiwgInNob3dFcnJvciIsICJlcnJvciIsICJjb25zb2xlIiwgImltcG9ydF9leHRfZ2FkZ2V0MTMiLCAiYWpheExvZ2luIiwgImhhc1FxQ29ubmVjdCIsICJCb29sZWFuIiwgImNvbmZpZyIsICJnZXQiLCAibG9naW4iLCAiX3JlZjYiLCAibG9naW5Db250aW51ZSIsICJfcmVzcG9uc2UkY2xpZW50bG9naW4iLCAiX3Jlc3BvbnNlJGNsaWVudGxvZ2luMiIsICJwYXJhbXMiLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAibG9naW50b2tlbiIsICJsb2dpbnJldHVybnVybCIsICJ1c2VybmFtZSIsICJwYXNzd29yZCIsICJyZW1lbWJlck1lIiwgImxvZ2luY29udGludWUiLCAidmFsdWUiLCAicmV0eXBlIiwgIk9BVEhUb2tlbiIsICJyZXNwb25zZSIsICJwb3N0IiwgInN0YXR1cyIsICJyZWxvYWQiLCAibWVzc2FnZWNvZGUiLCAicmVwbGFjZSIsICJjaGVjayIsICJfcmVmNyIsICJsYXN0SXNBZ3JlZVRvcyIsICJsYXN0VG9hc3RpZnlJbnN0YW5jZSIsICJnZXRBY3Rpb25Qcm9jZXNzIiwgIlByb2Nlc3MiLCAic2l6ZSIsICJnZXRCb2R5IiwgImluaXRBdXRvTG9naW4iLCAiJGJvZHkiLCAid2dVc2VyTmFtZSIsICIkbG9naW5FbGVtZW50IiwgImZpbmQiLCAibGVuZ3RoIiwgImFwcGVuZFRvIiwgImZha2VUb2FzdGlmeUluc3RhbmNlIiwgImV2ZW50IiwgImNoZWNrQTExeUNvbmZpcm1LZXkiLCAicHJldmVudERlZmF1bHQiXQp9Cg==
