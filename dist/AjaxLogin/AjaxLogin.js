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
var version = "4.0";
//! src/AjaxLogin/AjaxLogin.ts
var import_ext_gadget13 = require("ext.gadget.Util");
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
var import_ext_gadget11 = __toESM(require("ext.gadget.JSX"), 1);
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
  return {
    $agreeTos,
    $forgotPassword,
    $inputBox,
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
var import_ext_gadget7 = __toESM(require("ext.gadget.JSX"), 1);
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
      label: $(/* @__PURE__ */ import_ext_gadget7.default.createElement("b", {
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
var import_ext_gadget8 = require("ext.gadget.Toastify");
var queryLoginToken = /* @__PURE__ */ (function() {
  var _ref4 = _asyncToGenerator(function* (toastifyInstance) {
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget8.toastify)({
      text: getMessage("Getting login token")
    });
    const loginToken = yield api.getToken("login");
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget8.toastify)({
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
var import_ext_gadget9 = require("ext.gadget.Util");
var redirectOriginLoginPage = /* @__PURE__ */ (function() {
  var _ref5 = _asyncToGenerator(function* () {
    yield windowManager.clearWindows();
    yield (0, import_ext_gadget9.delay)(3 * 1e3);
    location.href = mw.util.getUrl("Special:Userlogin");
  });
  return function redirectOriginLoginPage2() {
    return _ref5.apply(this, arguments);
  };
})();
//! src/AjaxLogin/modules/util/showError.ts
var import_ext_gadget10 = require("ext.gadget.Toastify");
var showError = (error, toastifyInstance) => {
  console.error("[AjaxLogin] Ajax error:", error);
  toastifyInstance.hideToast();
  (0, import_ext_gadget10.toastify)({
    text: getMessage("Network error"),
    close: true,
    duration: -1
  }, "error");
};
//! src/AjaxLogin/modules/core.tsx
var import_ext_gadget12 = require("ext.gadget.Toastify");
var ajaxLogin = (toastifyInstance, isAgreeTos = false) => {
  const {
    $agreeTos,
    $forgotPassword,
    $inputBox,
    $rememberMe,
    $tosLabel,
    agreeTosCheckbox,
    keepLoginCheckbox,
    messageDialog,
    nameInput,
    pwdInput
  } = generateElements(isAgreeTos);
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
            (0, import_ext_gadget12.toastify)({
              text: getMessage("Login cancelled")
            }, "info");
            void windowManager.clearWindows();
            return;
          } else if (value === "") {
            if (retypePassword) {
              toastifyInstance = (0, import_ext_gadget12.toastify)({
                text: getMessage("EmptyPassword"),
                duration: -1
              }, "warning");
              void _login({
                retypePassword: true
              });
            } else {
              toastifyInstance = (0, import_ext_gadget12.toastify)({
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
        toastifyInstance = (0, import_ext_gadget12.toastify)({
          text: getMessage("Logging in")
        }, "info");
        const response = yield api.post(params);
        toastifyInstance.hideToast();
        if (((_response$clientlogin = response["clientlogin"]) === null || _response$clientlogin === void 0 ? void 0 : _response$clientlogin.status) === "PASS") {
          (0, import_ext_gadget12.toastify)({
            text: getMessage("Login succeed")
          }, "success");
          location.reload();
        } else if ((_response$clientlogin2 = response["clientlogin"]) !== null && _response$clientlogin2 !== void 0 && _response$clientlogin2.messagecode) {
          const {
            messagecode
          } = response["clientlogin"];
          switch (messagecode) {
            case "login-throttled":
              toastifyInstance = (0, import_ext_gadget12.toastify)({
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
              toastifyInstance = (0, import_ext_gadget12.toastify)({
                text: getMessage("Invalid 2FA verification code"),
                duration: -1
              }, "warning");
              void _login({
                loginContinue: true
              });
              break;
            case "resetpass-temp-emailed":
              toastifyInstance = (0, import_ext_gadget12.toastify)({
                text: getMessage("New password is required"),
                duration: -1
              }, "warning");
              void _login({
                retypePassword: true
              });
              break;
            case "wrongpassword":
              toastifyInstance = (0, import_ext_gadget12.toastify)({
                text: getMessage("Invalid username or password"),
                duration: -1
              }, "warning");
              yield windowManager.clearWindows();
              ajaxLogin(toastifyInstance);
              break;
            default:
              (0, import_ext_gadget12.toastify)({
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
      label: $(/* @__PURE__ */ import_ext_gadget11.default.createElement("b", null, getMessage("Login")))
    }, {
      action: "cancel",
      flags: ["safe", "close"],
      label: $(/* @__PURE__ */ import_ext_gadget11.default.createElement("b", null, getMessage("Cancel")))
    }],
    message: $(/* @__PURE__ */ import_ext_gadget11.default.createElement("div", {
      className: "oo-ui-window-foot"
    }, [$inputBox, $forgotPassword, $rememberMe, $agreeTos, $tosLabel])),
    title: $(/* @__PURE__ */ import_ext_gadget11.default.createElement("b", {
      className: "oo-ui-window-head"
    }, getMessage("Login"))),
    size: "small"
  });
  removeWindowResizeHandler();
};
//! src/AjaxLogin/AjaxLogin.ts
void (0, import_ext_gadget13.getBody)().then(function initAutoLogin($body) {
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
    if (!(0, import_ext_gadget13.checkA11yConfirmKey)(event)) {
      return;
    }
    event.preventDefault();
    ajaxLogin(fakeToastifyInstance);
  };
  addListener($loginElement, eventListener);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0FqYXhMb2dpbi9vcHRpb25zLmpzb24iLCAic3JjL0FqYXhMb2dpbi9BamF4TG9naW4udHMiLCAic3JjL0FqYXhMb2dpbi9tb2R1bGVzL2FkZExpc3RlbmVyLnRzIiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy9hcGkudHMiLCAic3JjL0FqYXhMb2dpbi9tb2R1bGVzL2NvcmUudHN4IiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy91dGlsL2NoZWNrVmFsaWQudHN4IiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy9pMThuLnRzIiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy9pbml0V2luZG93TWFuYWdlci50cyIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9vb3VpQ29uZmlybS50cyIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9nZW5lcmF0ZUVsZW1lbnRzLnRzeCIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9vb3VpUHJvbXB0LnRzeCIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9yZW1vdmVXaW5kb3dSZXNpemVIYW5kbGVyLnRzIiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy91dGlsL3F1ZXJ5TG9naW5Ub2tlbi50cyIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9yZWRpcmVjdE9yaWdpbkxvZ2luUGFnZS50cyIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9zaG93RXJyb3IudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJsb2dpbkVsZW1lbnRTZWxlY3RvclwiOiBcImE6aGFzKC5hamF4bG9naW4tbW91bnQtcG9pbnQpLCNwdC1sb2dpbj5hLC52ZWN0b3ItdXNlci1tZW51LWxvZ2luPmEsI3VzZXItdG9vbHM+YVtocmVmKj1cXFwiU3BlY2lhbFxcXCJdLC5tYWlucGFnZS10b3AtbWVudT5saTpudGgtY2hpbGQoMikgYVwiLFxuXHRcInZlcnNpb25cIjogXCI0LjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtjaGVja0ExMXlDb25maXJtS2V5LCBnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHthZGRMaXN0ZW5lcn0gZnJvbSAnLi9tb2R1bGVzL2FkZExpc3RlbmVyJztcbmltcG9ydCB7YWpheExvZ2lufSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5pbXBvcnQge3dpbmRvd01hbmFnZXJ9IGZyb20gJy4vbW9kdWxlcy9pbml0V2luZG93TWFuYWdlcic7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gaW5pdEF1dG9Mb2dpbigkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0Y29uc3Qge3dnVXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICh3Z1VzZXJOYW1lKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJGxvZ2luRWxlbWVudDogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PiA9ICRib2R5LmZpbmQ8SFRNTEFuY2hvckVsZW1lbnQ+KE9QVElPTlMubG9naW5FbGVtZW50U2VsZWN0b3IpO1xuXHRpZiAoISRsb2dpbkVsZW1lbnQubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0d2luZG93TWFuYWdlci4kZWxlbWVudC5hcHBlbmRUbygkYm9keSk7XG5cblx0Y29uc3QgZmFrZVRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB7XG5cdFx0aGlkZVRvYXN0OiAoKSA9PiB7fSxcblx0fTtcblxuXHRjb25zdCBldmVudExpc3RlbmVyID0gKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCB8IEpRdWVyeS5LZXlEb3duRXZlbnQpOiB2b2lkID0+IHtcblx0XHRpZiAoIWNoZWNrQTExeUNvbmZpcm1LZXkoZXZlbnQpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRhamF4TG9naW4oZmFrZVRvYXN0aWZ5SW5zdGFuY2UpO1xuXHR9O1xuXHRhZGRMaXN0ZW5lcigkbG9naW5FbGVtZW50LCBldmVudExpc3RlbmVyKTtcbn0pO1xuIiwgImltcG9ydCB7ZmlsdGVyQWx0ZXJlZENsaWNrc30gZnJvbSAnZXh0LmdhZGdldC5GaWx0ZXJBbHRlcmVkQ2xpY2tzJztcblxuY29uc3QgYWRkTGlzdGVuZXIgPSAoXG5cdCRlbGVtZW50OiBKUXVlcnksXG5cdGV2ZW50TGlzdGVuZXI6IChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQgfCBKUXVlcnkuS2V5RG93bkV2ZW50KSA9PiB2b2lkXG4pOiB2b2lkID0+IHtcblx0JGVsZW1lbnQub24oJ2NsaWNrJywgZmlsdGVyQWx0ZXJlZENsaWNrcyhldmVudExpc3RlbmVyKSk7XG5cdCRlbGVtZW50Lm9uKCdrZXlkb3duJywgZXZlbnRMaXN0ZW5lcik7XG59O1xuXG5leHBvcnQge2FkZExpc3RlbmVyfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxudHlwZSBDbGllbnRMb2dpblBhcmFtcyA9IEFwaUNsaWVudExvZ2luUGFyYW1zICYge1xuXHR1c2VybmFtZT86IHN0cmluZztcblx0cGFzc3dvcmQ/OiBzdHJpbmc7XG5cdHJlbWVtYmVyTWU/OiBib29sZWFuO1xuXHRyZXR5cGU/OiBzdHJpbmc7XG5cdE9BVEhUb2tlbj86IHN0cmluZztcbn07XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBBamF4TG9naW4vJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7dHlwZSBDbGllbnRMb2dpblBhcmFtcywgYXBpfTtcbiIsICJpbXBvcnQge3R5cGUgQ2xpZW50TG9naW5QYXJhbXMsIGFwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuSlNYJztcbmltcG9ydCB7Y2hlY2tWYWxpZH0gZnJvbSAnLi91dGlsL2NoZWNrVmFsaWQnO1xuaW1wb3J0IHtnZW5lcmF0ZUVsZW1lbnRzfSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVFbGVtZW50cyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge29vdWlQcm9tcHR9IGZyb20gJy4vdXRpbC9vb3VpUHJvbXB0JztcbmltcG9ydCB7cXVlcnlMb2dpblRva2VufSBmcm9tICcuL3V0aWwvcXVlcnlMb2dpblRva2VuJztcbmltcG9ydCB7cmVkaXJlY3RPcmlnaW5Mb2dpblBhZ2V9IGZyb20gJy4vdXRpbC9yZWRpcmVjdE9yaWdpbkxvZ2luUGFnZSc7XG5pbXBvcnQge3JlbW92ZVdpbmRvd1Jlc2l6ZUhhbmRsZXJ9IGZyb20gJy4vdXRpbC9yZW1vdmVXaW5kb3dSZXNpemVIYW5kbGVyJztcbmltcG9ydCB7c2hvd0Vycm9yfSBmcm9tICcuL3V0aWwvc2hvd0Vycm9yJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuaW1wb3J0IHt3aW5kb3dNYW5hZ2VyfSBmcm9tICcuL2luaXRXaW5kb3dNYW5hZ2VyJztcblxuY29uc3QgYWpheExvZ2luID0gKHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UsIGlzQWdyZWVUb3M6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQgPT4ge1xuXHRjb25zdCB7XG5cdFx0JGFncmVlVG9zLFxuXHRcdCRmb3Jnb3RQYXNzd29yZCxcblx0XHQkaW5wdXRCb3gsXG5cdFx0JHJlbWVtYmVyTWUsXG5cdFx0JHRvc0xhYmVsLFxuXHRcdGFncmVlVG9zQ2hlY2tib3gsXG5cdFx0a2VlcExvZ2luQ2hlY2tib3gsXG5cdFx0bWVzc2FnZURpYWxvZyxcblx0XHRuYW1lSW5wdXQsXG5cdFx0cHdkSW5wdXQsXG5cdH0gPSBnZW5lcmF0ZUVsZW1lbnRzKGlzQWdyZWVUb3MpO1xuXG5cdGxldCBsb2dpblRva2VuOiBzdHJpbmcgPSAnJztcblx0Y29uc3QgbG9naW4gPSBhc3luYyAoe2xvZ2luQ29udGludWUgPSBmYWxzZSwgcmV0eXBlUGFzc3dvcmQgPSBmYWxzZX0gPSB7fSk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAoIWxvZ2luQ29udGludWUpIHtcblx0XHRcdFx0KHtsb2dpblRva2VuLCB0b2FzdGlmeUluc3RhbmNlfSA9IGF3YWl0IHF1ZXJ5TG9naW5Ub2tlbih0b2FzdGlmeUluc3RhbmNlKSk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHBhcmFtczogQ2xpZW50TG9naW5QYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ2NsaWVudGxvZ2luJyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0bG9naW50b2tlbjogbG9naW5Ub2tlbixcblx0XHRcdFx0bG9naW5yZXR1cm51cmw6IGxvY2F0aW9uLmhyZWYsXG5cdFx0XHRcdHVzZXJuYW1lOiBuYW1lSW5wdXQuZ2V0VmFsdWUoKSxcblx0XHRcdFx0cGFzc3dvcmQ6IHB3ZElucHV0LmdldFZhbHVlKCksXG5cdFx0XHR9O1xuXHRcdFx0aWYgKGtlZXBMb2dpbkNoZWNrYm94LmlzU2VsZWN0ZWQoKSkge1xuXHRcdFx0XHRwYXJhbXMucmVtZW1iZXJNZSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAobG9naW5Db250aW51ZSB8fCByZXR5cGVQYXNzd29yZCkge1xuXHRcdFx0XHRhd2FpdCB3aW5kb3dNYW5hZ2VyLmNsZWFyV2luZG93cygpO1xuXHRcdFx0XHRkZWxldGUgcGFyYW1zLmxvZ2lucmV0dXJudXJsO1xuXHRcdFx0XHRkZWxldGUgcGFyYW1zLnVzZXJuYW1lO1xuXHRcdFx0XHRkZWxldGUgcGFyYW1zLnBhc3N3b3JkO1xuXHRcdFx0XHRwYXJhbXMubG9naW5jb250aW51ZSA9IHRydWU7XG5cblx0XHRcdFx0Y29uc3QgdmFsdWU6IHN0cmluZyB8IG51bGwgPSBhd2FpdCBvb3VpUHJvbXB0KHJldHlwZVBhc3N3b3JkKTtcblxuXHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXG5cdFx0XHRcdGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdHRvYXN0aWZ5KFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdMb2dpbiBjYW5jZWxsZWQnKSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHQnaW5mbydcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdHZvaWQgd2luZG93TWFuYWdlci5jbGVhcldpbmRvd3MoKTtcblxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fSBlbHNlIGlmICh2YWx1ZSA9PT0gJycpIHtcblx0XHRcdFx0XHRpZiAocmV0eXBlUGFzc3dvcmQpIHtcblx0XHRcdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0VtcHR5UGFzc3dvcmQnKSxcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdCd3YXJuaW5nJ1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHZvaWQgbG9naW4oe1xuXHRcdFx0XHRcdFx0XHRyZXR5cGVQYXNzd29yZDogdHJ1ZSxcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdFbXB0eTJGQScpLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0J3dhcm5pbmcnXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0dm9pZCBsb2dpbih7XG5cdFx0XHRcdFx0XHRcdGxvZ2luQ29udGludWU6IHRydWUsXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAocmV0eXBlUGFzc3dvcmQpIHtcblx0XHRcdFx0XHRwYXJhbXMucGFzc3dvcmQgPSB2YWx1ZTtcblx0XHRcdFx0XHRwYXJhbXMucmV0eXBlID0gdmFsdWU7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cGFyYW1zLk9BVEhUb2tlbiA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdFx0XHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdMb2dnaW5nIGluJyksXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdpbmZvJ1xuXHRcdFx0KTtcblxuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSAoYXdhaXQgYXBpLnBvc3QocGFyYW1zKSkgYXMge1xuXHRcdFx0XHRjbGllbnRsb2dpbjoge1xuXHRcdFx0XHRcdHN0YXR1cz86IHN0cmluZztcblx0XHRcdFx0XHRtZXNzYWdlY29kZT86IHN0cmluZztcblx0XHRcdFx0fTtcblx0XHRcdH07XG5cblx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cblx0XHRcdGlmIChyZXNwb25zZVsnY2xpZW50bG9naW4nXT8uc3RhdHVzID09PSAnUEFTUycpIHtcblx0XHRcdFx0dG9hc3RpZnkoXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnTG9naW4gc3VjY2VlZCcpLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0J3N1Y2Nlc3MnXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdFx0fSBlbHNlIGlmIChyZXNwb25zZVsnY2xpZW50bG9naW4nXT8ubWVzc2FnZWNvZGUpIHtcblx0XHRcdFx0Y29uc3Qge21lc3NhZ2Vjb2RlfSA9IHJlc3BvbnNlWydjbGllbnRsb2dpbiddO1xuXHRcdFx0XHRzd2l0Y2ggKG1lc3NhZ2Vjb2RlKSB7XG5cdFx0XHRcdFx0Y2FzZSAnbG9naW4tdGhyb3R0bGVkJzpcblx0XHRcdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ1Rvb0ZyZXF1ZW50JyksXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQnZXJyb3InXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnb2F0aGF1dGgtYXV0aC11aSc6XG5cdFx0XHRcdFx0XHR2b2lkIGxvZ2luKHtcblx0XHRcdFx0XHRcdFx0bG9naW5Db250aW51ZTogdHJ1ZSxcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnb2F0aGF1dGgtbG9naW4tZmFpbGVkJzpcblx0XHRcdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0ludmFsaWQgMkZBIHZlcmlmaWNhdGlvbiBjb2RlJyksXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQnd2FybmluZydcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR2b2lkIGxvZ2luKHtcblx0XHRcdFx0XHRcdFx0bG9naW5Db250aW51ZTogdHJ1ZSxcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAncmVzZXRwYXNzLXRlbXAtZW1haWxlZCc6XG5cdFx0XHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdOZXcgcGFzc3dvcmQgaXMgcmVxdWlyZWQnKSxcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdCd3YXJuaW5nJ1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHZvaWQgbG9naW4oe1xuXHRcdFx0XHRcdFx0XHRyZXR5cGVQYXNzd29yZDogdHJ1ZSxcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnd3JvbmdwYXNzd29yZCc6XG5cdFx0XHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdJbnZhbGlkIHVzZXJuYW1lIG9yIHBhc3N3b3JkJyksXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQnd2FybmluZydcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRhd2FpdCB3aW5kb3dNYW5hZ2VyLmNsZWFyV2luZG93cygpO1xuXHRcdFx0XHRcdFx0YWpheExvZ2luKHRvYXN0aWZ5SW5zdGFuY2UpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdHRvYXN0aWZ5KFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnVW5leHBlY3RlZCBBUEkgcmVzcG9uc2UnKS5yZXBsYWNlKCckMScsIG1lc3NhZ2Vjb2RlKSxcblx0XHRcdFx0XHRcdFx0XHRjbG9zZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdCdlcnJvcidcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR2b2lkIHJlZGlyZWN0T3JpZ2luTG9naW5QYWdlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0c2hvd0Vycm9yKGVycm9yLCB0b2FzdGlmeUluc3RhbmNlKTtcblx0XHRcdHZvaWQgcmVkaXJlY3RPcmlnaW5Mb2dpblBhZ2UoKTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgY2hlY2sgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0aXNWYWxpZCxcblx0XHRcdGlzQWdyZWVUb3M6IGxhc3RJc0FncmVlVG9zLFxuXHRcdFx0dG9hc3RpZnlJbnN0YW5jZTogbGFzdFRvYXN0aWZ5SW5zdGFuY2UsXG5cdFx0fSA9IGF3YWl0IGNoZWNrVmFsaWQoW2FncmVlVG9zQ2hlY2tib3gsIG5hbWVJbnB1dCwgcHdkSW5wdXRdLCB0b2FzdGlmeUluc3RhbmNlKTtcblxuXHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSBsYXN0VG9hc3RpZnlJbnN0YW5jZTtcblxuXHRcdGlmIChpc1ZhbGlkKSB7XG5cdFx0XHR2b2lkIGxvZ2luKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGFqYXhMb2dpbih0b2FzdGlmeUluc3RhbmNlLCBsYXN0SXNBZ3JlZVRvcyk7XG5cdFx0fVxuXHR9O1xuXG5cdHB3ZElucHV0Lm9uKCdlbnRlcicsICgpOiB2b2lkID0+IHtcblx0XHR2b2lkIGNoZWNrKCk7XG5cdH0pO1xuXHRtZXNzYWdlRGlhbG9nLmdldEFjdGlvblByb2Nlc3MgPSAoYWN0aW9uKTogT08udWkuUHJvY2VzcyA9PlxuXHRcdG5ldyBPTy51aS5Qcm9jZXNzKCgpOiB2b2lkID0+IHtcblx0XHRcdGlmIChhY3Rpb24gPT09ICdsb2dpbicpIHtcblx0XHRcdFx0dm9pZCBjaGVjaygpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0XHRcdFx0dm9pZCB3aW5kb3dNYW5hZ2VyLmNsZWFyV2luZG93cygpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdHdpbmRvd01hbmFnZXIuYWRkV2luZG93cyhbbWVzc2FnZURpYWxvZ10pO1xuXHR2b2lkIHdpbmRvd01hbmFnZXIub3BlbldpbmRvdyhtZXNzYWdlRGlhbG9nLCB7XG5cdFx0YWN0aW9uczogW1xuXHRcdFx0e1xuXHRcdFx0XHRhY3Rpb246ICdsb2dpbicsXG5cdFx0XHRcdGZsYWdzOiBbJ3ByaW1hcnknLCAncHJvZ3Jlc3NpdmUnXSxcblx0XHRcdFx0bGFiZWw6ICQoPGI+e2dldE1lc3NhZ2UoJ0xvZ2luJyl9PC9iPiksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRhY3Rpb246ICdjYW5jZWwnLFxuXHRcdFx0XHRmbGFnczogWydzYWZlJywgJ2Nsb3NlJ10sXG5cdFx0XHRcdGxhYmVsOiAkKDxiPntnZXRNZXNzYWdlKCdDYW5jZWwnKX08L2I+KSxcblx0XHRcdH0sXG5cdFx0XSxcblx0XHRtZXNzYWdlOiAkKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvby11aS13aW5kb3ctZm9vdFwiPntbJGlucHV0Qm94LCAkZm9yZ290UGFzc3dvcmQsICRyZW1lbWJlck1lLCAkYWdyZWVUb3MsICR0b3NMYWJlbF19PC9kaXY+XG5cdFx0KSxcblx0XHR0aXRsZTogJCg8YiBjbGFzc05hbWU9XCJvby11aS13aW5kb3ctaGVhZFwiPntnZXRNZXNzYWdlKCdMb2dpbicpfTwvYj4pLFxuXHRcdHNpemU6ICdzbWFsbCcsXG5cdH0pO1xuXHRyZW1vdmVXaW5kb3dSZXNpemVIYW5kbGVyKCk7XG59O1xuXG5leHBvcnQge2FqYXhMb2dpbn07XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuSlNYJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge29vdWlDb25maXJtfSBmcm9tICcuL29vdWlDb25maXJtJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuaW1wb3J0IHt3aW5kb3dNYW5hZ2VyfSBmcm9tICcuLi9pbml0V2luZG93TWFuYWdlcic7XG5cbmNvbnN0IGNoZWNrVmFsaWQgPSBhc3luYyAoXG5cdFthZ3JlZVRvc0NoZWNrYm94LCBuYW1lSW5wdXQsIHB3ZElucHV0XTogW09PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQsIE9PLnVpLlRleHRJbnB1dFdpZGdldCwgT08udWkuVGV4dElucHV0V2lkZ2V0XSxcblx0dG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZVxuKTogUHJvbWlzZTx7XG5cdGlzQWdyZWVUb3M6IGJvb2xlYW47XG5cdGlzVmFsaWQ6IGJvb2xlYW47XG5cdHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2U7XG59PiA9PiB7XG5cdGxldCBpc0FncmVlVG9zOiBib29sZWFuID0gYWdyZWVUb3NDaGVja2JveC5pc1NlbGVjdGVkKCk7XG5cdGNvbnN0IGlzRmlsbDogYm9vbGVhbiA9ICFbbmFtZUlucHV0LmdldFZhbHVlKCkudHJpbSgpLCBwd2RJbnB1dC5nZXRWYWx1ZSgpLnRyaW0oKV0uaW5jbHVkZXMoJycpO1xuXG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdGF3YWl0IHdpbmRvd01hbmFnZXIuY2xlYXJXaW5kb3dzKCk7XG5cblx0aWYgKCFpc0FncmVlVG9zKSB7XG5cdFx0aXNBZ3JlZVRvcyA9IGF3YWl0IG9vdWlDb25maXJtKHtcblx0XHRcdG1lc3NhZ2U6ICQoPHNwYW4gaW5uZXJIVE1MPXtnZXRNZXNzYWdlKCdEb3VibGVDaGVja0FncmVlZE9yTm90Jyl9IC8+KSBhcyBKUXVlcnksXG5cdFx0XHRhY3Rpb25zOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRsYWJlbDogJCg8Yj57Z2V0TWVzc2FnZSgnQ2FuY2VsJyl9PC9iPiksXG5cdFx0XHRcdFx0YWN0aW9uOiAnY2FuY2VsJyxcblx0XHRcdFx0XHRmbGFnczogWydzYWZlJywgJ2Nsb3NlJ10sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRsYWJlbDogJCg8Yj57Z2V0TWVzc2FnZSgnSSBhZ3JlZScpfTwvYj4pLFxuXHRcdFx0XHRcdGFjdGlvbjogJ2FjY2VwdCcsXG5cdFx0XHRcdFx0ZmxhZ3M6IFsncHJpbWFyeScsICdwcm9ncmVzc2l2ZSddLFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHR9KTtcblxuXHRcdGlmICghaXNBZ3JlZVRvcykge1xuXHRcdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnQWdyZWVkT3JOb3QnKSxcblx0XHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdpbmZvJ1xuXHRcdFx0KTtcblx0XHR9XG5cdH0gZWxzZSBpZiAoIWlzRmlsbCkge1xuXHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnRW1wdHlVc2VybmFtZU9yUGFzc3dvcmQnKSxcblx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0fSxcblx0XHRcdCdpbmZvJ1xuXHRcdCk7XG5cdH1cblxuXHRjb25zdCBpc1ZhbGlkOiBib29sZWFuID0gaXNBZ3JlZVRvcyAmJiBpc0ZpbGw7XG5cblx0cmV0dXJuIHtcblx0XHRpc0FncmVlVG9zLFxuXHRcdGlzVmFsaWQsXG5cdFx0dG9hc3RpZnlJbnN0YW5jZSxcblx0fTtcbn07XG5cbmV4cG9ydCB7Y2hlY2tWYWxpZH07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCc2LWRpZ2l0IG51bWJlcic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnNi1kaWdpdCBudW1iZXInLFxuXHRcdFx0amE6ICc25qGB44Gu5pWw5a2XJyxcblx0XHRcdCd6aC1oYW5zJzogJzbkvY3mlbDlrZcnLFxuXHRcdFx0J3poLWhhbnQnOiAnNuS9jeaVuOWtlycsXG5cdFx0fSksXG5cdFx0Q2FuY2VsOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NhbmNlbCcsXG5cdFx0XHRqYTogJ+OCreODo+ODs+OCu+ODqycsXG5cdFx0XHR6aDogJ+WPlua2iCcsXG5cdFx0fSksXG5cdFx0J0VudGVyIHBhc3N3b3JkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFbnRlciBwYXNzd29yZCcsXG5cdFx0XHRqYTogJ+ODkeOCueODr+ODvOODiScsXG5cdFx0XHQnemgtaGFucyc6ICfor7fovpPlhaXlr4bnoIEnLFxuXHRcdFx0J3poLWhhbnQnOiAn6KuL6Ly45YWl5a+G56K8Jyxcblx0XHR9KSxcblx0XHQnRW50ZXIgMkZBIHZlcmlmaWNhdGlvbiBjb2RlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcyRkEgdmVyaWZpY2F0aW9uIGNvZGUnLFxuXHRcdFx0amE6ICcyRkHoqo3oqLzjgrPjg7zjg4knLFxuXHRcdFx0J3poLWhhbnMnOiAn6K+36L6T5YWlMkZB6aqM6K+B56CBJyxcblx0XHRcdCd6aC1oYW50JzogJ+iri+i8uOWFpTJGQempl+itieeivCcsXG5cdFx0fSksXG5cdFx0J0ZvcmdvdCBwYXNzd29yZD8nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ZvcmdvdCBwYXNzd29yZD8nLFxuXHRcdFx0amE6ICfjg5Hjgrnjg6/jg7zjg4njgpLjgYrlv5jjgozjgafjgZnjgYvvvJ8nLFxuXHRcdFx0J3poLWhhbnMnOiAn5b+Y6K6w5a+G56CB77yfJyxcblx0XHRcdCd6aC1oYW50JzogJ+W/mOiomOWvhueivO+8nycsXG5cdFx0fSksXG5cdFx0J0dldHRpbmcgbG9naW4gdG9rZW4nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0dldHRpbmcgbG9naW4gdG9rZW4nLFxuXHRcdFx0amE6ICfjg63jgrDjgqTjg7Pjg4jjg7zjgq/jg7PjgpLlj5blvpfjgZfjgabjgYTjgb7jgZknLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2j5Zyo6I635Y+W55m75b2V5Luk54mMJyxcblx0XHRcdCd6aC1oYW50JzogJ+ato+WcqOeNsuWPlueZu+WFpeasiuadlicsXG5cdFx0fSksXG5cdFx0J2hlbHAgZm9yIEkgYWdyZWUgd2l0aCB0aGUgcmVsZXZhbnQgdGVybXMnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1doZW4geW91IGxvZ2luLCBpdCBtZWFucyB0aGF0IHlvdSBoYXZlIGNhcmVmdWxseSByZWFkLCBmdWxseSB1bmRlcnN0b29kIGFuZCBhZ3JlZWQgdG8gY29tcGx5IHdpdGggdGhlIDxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpUT1NcIiB0aXRsZT1cIlRlcm1zIG9mIFNlcnZpY2VcIj5UZXJtcyBvZiBTZXJ2aWNlPC9hPiwgPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOlBJUFBcIiB0aXRsZT1cIlBlcnNvbmFsIEluZm9ybWF0aW9uIFByb3RlY3Rpb24gUG9saWN5XCI+UGVyc29uYWwgSW5mb3JtYXRpb24gUHJvdGVjdGlvbiBQb2xpY3k8L2E+IGFuZCA8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6REFHWkNcIiB0aXRsZT1cIllzQXJjaGl2ZXMgQXNzb2NpYXRpb25cIj5Zc0FyY2hpdmVzIEFzc29jaWF0aW9uPC9hPi4nLFxuXHRcdFx0amE6ICfjg63jgrDjgqTjg7PjgpLjgZnjgovjgajjgIHjgYLjgarjgZ/jga/mnKzjgrXjgqTjg4jjga7jgI48YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6VE9TXCIgdGl0bGU9XCLliKnnlKjopo/ntIRcIj7liKnnlKjopo/ntIQ8L2E+44CP44COPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOlBJUFBcIiB0aXRsZT1cIuWAi+S6uuaDheWgseS/neitt+adoeS+i1wiPuWAi+S6uuaDheWgseS/neitt+adoeS+izwvYT7jgI/jgI48YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6R1BcIiB0aXRsZT1cIuaho+ahiOmmhueroOeoi1wiPuaho+ahiOmmhueroOeoizwvYT7jgI/jgpLljYHliIbjgavnkIbop6PjgZfjgIHlkIzmhI/jgZfjgZ/jgZPjgajjgavjgarjgorjgb7jgZnjgIInLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn55m75b2V5pe277yM5Y2z5Luj6KGo5oKo5bey5LuU57uG6ZiF6K+744CB5YWF5YiG5LqG6Kej5bm25ZCM5oSP6YG15a6I5pys572R56uZ55qE44CKPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOlRPU1wiIHRpdGxlPVwi55So5oi35Y2P6K6uXCI+55So5oi35Y2P6K6uPC9hPuOAi+OAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpQSVBQXCIgdGl0bGU9XCLkuKrkurrkv6Hmga/kv53miqTmnaHkvotcIj7kuKrkurrkv6Hmga/kv53miqTmnaHkvos8L2E+44CL44CKPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOkdQXCIgdGl0bGU9XCLmoaPmoYjppobnq6DnqItcIj7moaPmoYjppobnq6DnqIs8L2E+44CL44CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+eZu+mMhOaZgu+8jOWNs+S7o+ihqOaCqOW3suS7lOe0sOmWseiugOOAgeWFheWIhuS6huino+S4puWQjOaEj+mBteWuiOacrOe2suermeeahOOAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpUT1NcIiB0aXRsZT1cIueUqOaItuWNlOitsFwiPueUqOaItuWNlOitsDwvYT7jgIvjgIo8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6UElQUFwiIHRpdGxlPVwi5YCL5Lq65L+h5oGv5L+d6K235p2h5L6LXCI+5YCL5Lq65L+h5oGv5L+d6K235p2h5L6LPC9hPuOAi+OAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpHUFwiIHRpdGxlPVwi5qGj5qGI6aaG56ug56iLXCI+5qGj5qGI6aaG56ug56iLPC9hPuOAi+OAgicsXG5cdFx0fSksXG5cdFx0J0kgYWdyZWUnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0kgYWdyZWUnLFxuXHRcdFx0amE6ICflkIzmhI/jgZnjgosnLFxuXHRcdFx0emg6ICfmiJHlkIzmhI8nLFxuXHRcdH0pLFxuXHRcdCdJIGFncmVlIHdpdGggdGhlIHJlbGV2YW50IHRlcm1zJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdJIGFncmVlIHdpdGggdGhlIHJlbGV2YW50IHRlcm1zJyxcblx0XHRcdGphOiAn6Zai6YCj44GZ44KL6KaP57SE44KS6Kqt44G/44CB5ZCM5oSPJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aIkeW3sumYheivu+W5tuWQjOaEj+ebuOWFs+adoeasvicsXG5cdFx0XHQnemgtaGFudCc6ICfmiJHlt7LplrLoroDkuKblkIzmhI/nm7jpl5zmop3mrL4nLFxuXHRcdH0pLFxuXHRcdCdJbnZhbGlkIDJGQSB2ZXJpZmljYXRpb24gY29kZSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSW52YWxpZCAyRkEgdmVyaWZpY2F0aW9uIGNvZGUnLFxuXHRcdFx0amE6ICcyRkHoqo3oqLzjgrPjg7zjg4njgYzplpPpgZXjgaPjgabjgYTjgb7jgZknLFxuXHRcdFx0J3poLWhhbnMnOiAnMkZB6aqM6K+B56CB6ZSZ6K+vJyxcblx0XHRcdCd6aC1oYW50JzogJzJGQempl+itieeivOmMr+iqpCcsXG5cdFx0fSksXG5cdFx0J0ludmFsaWQgdXNlcm5hbWUgb3IgcGFzc3dvcmQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ludmFsaWQgdXNlcm5hbWUgb3IgcGFzc3dvcmQnLFxuXHRcdFx0amE6ICfliKnnlKjogIXlkI3jgb7jgZ/jga/jg5Hjgrnjg6/jg7zjg4njgYzplpPpgZXjgaPjgabjgYTjgb7jgZknLFxuXHRcdFx0J3poLWNuJzogJ+eUqOaIt+WQjeaIluWvhueggemUmeivrycsXG5cdFx0XHQnemgtaGsnOiAn55So5oi25ZCN56ix5oiW5a+G56K86Yyv6KqkJyxcblx0XHRcdCd6aC10dyc6ICfkvb/nlKjogIXlkI3nqLHmiJblr4bnorzpjK/oqqQnLFxuXHRcdH0pLFxuXHRcdCdLZWVwIG1lIGxvZ2dlZCBpbic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnS2VlcCBtZSBsb2dnZWQgaW4nLFxuXHRcdFx0amE6ICfjg63jgrDjgqTjg7PnirbmhYvjgpLkv53mjIEnLFxuXHRcdFx0J3poLWhhbnMnOiAn6K6w5L2P5oiR55qE55m75b2V54q25oCBJyxcblx0XHRcdCd6aC1oYW50JzogJ+iomOS9j+aIkeeahOeZu+WFpeeLgOaFiycsXG5cdFx0fSksXG5cdFx0J0xvZ2dpbmcgaW4nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvZ2dpbmcgaW4nLFxuXHRcdFx0amE6ICfjg63jgrDjgqTjg7PjgZfjgabjgYTjgb7jgZknLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2j5Zyo55m75b2VJyxcblx0XHRcdCd6aC1oYW50JzogJ+ato+WcqOeZu+WFpScsXG5cdFx0fSksXG5cdFx0TG9naW46IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9naW4nLFxuXHRcdFx0amE6ICfjg63jgrDjgqTjg7MnLFxuXHRcdFx0J3poLWhhbnMnOiAn55m75b2VJyxcblx0XHRcdCd6aC1oYW50JzogJ+eZu+WFpScsXG5cdFx0fSksXG5cdFx0J0xvZ2luIGNhbmNlbGxlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9naW4gY2FuY2VsbGVkJyxcblx0XHRcdGphOiAn44Ot44Kw44Kk44Oz44Kt44Oj44Oz44K744OrJyxcblx0XHRcdCd6aC1oYW5zJzogJ+eZu+W9leWPlua2iCcsXG5cdFx0XHQnemgtaGFudCc6ICfnmbvlhaXlj5bmtognLFxuXHRcdH0pLFxuXHRcdCdMb2dpbiBzdWNjZWVkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMb2dpbiBzdWNjZWVkJyxcblx0XHRcdGphOiAn44Ot44Kw44Kk44Oz44Gr5oiQ5Yqf44GX44G+44GX44GfJyxcblx0XHRcdCd6aC1oYW5zJzogJ+eZu+W9leaIkOWKnycsXG5cdFx0XHQnemgtaGFudCc6ICfnmbvlhaXmiJDlip8nLFxuXHRcdH0pLFxuXHRcdCdMb2dpbiB0b2tlbiBnb3QnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvZ2luIHRva2VuIGdvdCcsXG5cdFx0XHRqYTogJ+ODreOCsOOCpOODs+ODiOODvOOCr+ODs+OBruWPluW+l+OBq+aIkOWKn+OBl+OBvuOBl+OBnycsXG5cdFx0XHQnemgtaGFucyc6ICfojrflj5bnmbvlvZXku6TniYzmiJDlip8nLFxuXHRcdFx0J3poLWhhbnQnOiAn542y5Y+W55m75YWl5qyK5p2W5oiQ5YqfJyxcblx0XHR9KSxcblx0XHQnTmV3IHBhc3N3b3JkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdOZXcgcGFzc3dvcmQnLFxuXHRcdFx0amE6ICfmlrDjgZfjgYTjg5Hjgrnjg6/jg7zjg4knLFxuXHRcdFx0J3poLWhhbnMnOiAn5paw5a+G56CBJyxcblx0XHRcdCd6aC1oYW50JzogJ+aWsOWvhueivCcsXG5cdFx0fSksXG5cdFx0J05ldyBwYXNzd29yZCBpcyByZXF1aXJlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTmV3IHBhc3N3b3JkIGlzIHJlcXVpcmVkJyxcblx0XHRcdGphOiAn5paw44GX44GE44OR44K544Ov44O844OJ44KS6Kit5a6a44GX44Gm44GP44Gg44GV44GEJyxcblx0XHRcdCd6aC1oYW5zJzogJ+mcgOimgeiuvue9ruaWsOWvhueggScsXG5cdFx0XHQnemgtaGFudCc6ICfpnIDopoHoqK3nva7mlrDlr4bnorwnLFxuXHRcdH0pLFxuXHRcdFBhc3N3b3JkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1Bhc3N3b3JkJyxcblx0XHRcdGphOiAn44OR44K544Ov44O844OJJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WvhueggScsXG5cdFx0XHQnemgtaGFudCc6ICflr4bnorwnLFxuXHRcdH0pLFxuXHRcdCdSZXNldCBwYXNzd29yZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUmVzZXQgcGFzc3dvcmQnLFxuXHRcdFx0amE6ICfjg5Hjgrnjg6/jg7zjg4njgpLjg6rjgrvjg4Pjg4gnLFxuXHRcdFx0J3poLWhhbnMnOiAn6YeN572u5a+G56CBJyxcblx0XHRcdCd6aC1oYW50JzogJ+mHjeaWsOioreWumuWvhueivCcsXG5cdFx0fSksXG5cdFx0VXNlcm5hbWU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVXNlcm5hbWUnLFxuXHRcdFx0amE6ICfliKnnlKjogIXlkI0nLFxuXHRcdFx0J3poLWNuJzogJ+eUqOaIt+WQjScsXG5cdFx0XHQnemgtaGsnOiAn55So5oi25ZCN56ixJyxcblx0XHRcdCd6aC10dyc6ICfkvb/nlKjogIXlkI3nqLEnLFxuXHRcdH0pLFxuXHRcdEFncmVlZE9yTm90OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1BsZWFzZSByZWFkIHRoZSByZWxldmFudCB0ZXJtcy4gSWYgeW91IGFncmVlLCBjaGVjayB0aGUgY2hlY2tib3ggdG8gY29uZmlybScsXG5cdFx0XHRqYTogJ+mWoumAo+OBmeOCi+imj+e0hOOCkuOBiuiqreOBv+OBhOOBn+OBoOOBjeOAgeWQjOaEj+OBleOCjOOCi+WgtOWQiOOBr+OAgeODgeOCp+ODg+OCr+ODnOODg+OCr+OCueOBq+ODgeOCp+ODg+OCr+OCkuWFpeOCjOOBpueiuuiqjeOBl+OBpuOBj+OBoOOBleOBhCcsXG5cdFx0XHQnemgtaGFucyc6ICfor7fpmIXor7vnm7jlhbPmnaHmrL7jgILoi6XlkIzmhI/vvIzli77pgInlpI3pgInmoYbku6Xnoa7orqQnLFxuXHRcdFx0J3poLWhhbnQnOiAn6KuL6Zay6K6A55u46Zec5qKd5qy+44CC6Iul5ZCM5oSP77yM5Yu+6YG46KSH6YG45qGG5Lul56K66KqNJyxcblx0XHR9KSxcblx0XHREb3VibGVDaGVja0FncmVlZE9yTm90OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1lvdSBoYXZlIGNhcmVmdWxseSByZWFkLCBmdWxseSB1bmRlcnN0b29kIGFuZCBhZ3JlZWQgdG8gY29tcGx5IHdpdGggb3VyIDxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpUT1NcIiB0aXRsZT1cIlRlcm1zIG9mIFNlcnZpY2VcIj5UZXJtcyBvZiBTZXJ2aWNlPC9hPiwgPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOlBJUFBcIiB0aXRsZT1cIlBlcnNvbmFsIEluZm9ybWF0aW9uIFByb3RlY3Rpb24gUG9saWN5XCI+UGVyc29uYWwgSW5mb3JtYXRpb24gUHJvdGVjdGlvbiBQb2xpY3k8L2E+IGFuZCA8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6REFHWkNcIiB0aXRsZT1cIllzQXJjaGl2ZXMgQXNzb2NpYXRpb25cIj5Zc0FyY2hpdmVzIEFzc29jaWF0aW9uPC9hPi4nLFxuXHRcdFx0amE6ICfjgYLjgarjgZ/jga/mnKzjgrXjgqTjg4jjga7jgI48YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6VE9TXCIgdGl0bGU9XCLliKnnlKjopo/ntIRcIj7liKnnlKjopo/ntIQ8L2E+44CP44COPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOlBJUFBcIiB0aXRsZT1cIuWAi+S6uuaDheWgseS/neitt+adoeS+i1wiPuWAi+S6uuaDheWgseS/neitt+adoeS+izwvYT7jgI/jgI48YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6R1BcIiB0aXRsZT1cIuaho+ahiOmmhueroOeoi1wiPuaho+ahiOmmhueroOeoizwvYT7jgI/jgpLljYHliIbjgavnkIbop6PjgZfjgIHlkIzmhI/jgZfjgZ/jgZPjgajjgavjgarjgorjgb7jgZnjgIInLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn5oKo5bey5LuU57uG6ZiF6K+744CB5YWF5YiG5LqG6Kej5bm25ZCM5oSP6YG15a6I5pys572R56uZ55qE44CKPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOlRPU1wiIHRpdGxlPVwi55So5oi35Y2P6K6uXCI+55So5oi35Y2P6K6uPC9hPuOAi+OAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpQSVBQXCIgdGl0bGU9XCLkuKrkurrkv6Hmga/kv53miqTmnaHkvotcIj7kuKrkurrkv6Hmga/kv53miqTmnaHkvos8L2E+44CL44CKPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOkdQXCIgdGl0bGU9XCLmoaPmoYjppobnq6DnqItcIj7moaPmoYjppobnq6DnqIs8L2E+44CL44CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+aCqOW3suS7lOe0sOmWseiugOOAgeWFheWIhuS6huino+S4puWQjOaEj+mBteWuiOacrOe2suermeeahOOAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpUT1NcIiB0aXRsZT1cIueUqOaItuWNlOitsFwiPueUqOaItuWNlOitsDwvYT7jgIvjgIo8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6UElQUFwiIHRpdGxlPVwi5YCL5Lq65L+h5oGv5L+d6K235p2h5L6LXCI+5YCL5Lq65L+h5oGv5L+d6K235p2h5L6LPC9hPuOAi+OAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpHUFwiIHRpdGxlPVwi5qGj5qGI6aaG56ug56iLXCI+5qGj5qGI6aaG56ug56iLPC9hPuOAi+OAgicsXG5cdFx0fSksXG5cdFx0RW1wdHkyRkE6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhlIDJGQSB2ZXJpZmljYXRpb24gY29kZSBjYW5ub3QgYmUgZW1wdHknLFxuXHRcdFx0amE6ICcyRkHoqo3oqLzjgrPjg7zjg4njgYzlhaXlipvjgZXjgozjgabjgYTjgb7jgZvjgpMnLFxuXHRcdFx0J3poLWhhbnMnOiAnMkZB6aqM6K+B56CB5LiN6IO95Li656m6Jyxcblx0XHRcdCd6aC1oYW50JzogJzJGQempl+itieeivOS4jeiDveeIsuepuicsXG5cdFx0fSksXG5cdFx0RW1wdHlQYXNzd29yZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGUgcGFzc3dvcmQgY2Fubm90IGJlIGVtcHR5Jyxcblx0XHRcdGphOiAn44OR44K544Ov44O844OJ44GM5YWl5Yqb44GV44KM44Gm44GE44G+44Gb44KTJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WvhueggeS4jeiDveS4uuepuicsXG5cdFx0XHQnemgtaGFudCc6ICflr4bnorzkuI3og73niLLnqbonLFxuXHRcdH0pLFxuXHRcdEVtcHR5VXNlcm5hbWVPclBhc3N3b3JkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoZSB1c2VybmFtZSBvciBwYXNzd29yZCBjYW5ub3QgYmUgZW1wdHknLFxuXHRcdFx0amE6ICfliKnnlKjogIXlkI3jgb7jgZ/jga/jg5Hjgrnjg6/jg7zjg4njgYzlhaXlipvjgZXjgozjgabjgYTjgb7jgZvjgpMnLFxuXHRcdFx0J3poLWNuJzogJ+eUqOaIt+WQjeaIluWvhueggeS4jeiDveS4uuepuicsXG5cdFx0XHQnemgtaGsnOiAn55So5oi25ZCN56ix5oiW5a+G56K85LiN6IO954iy56m6Jyxcblx0XHRcdCd6aC10dyc6ICfkvb/nlKjogIXlkI3nqLHmiJblr4bnorzkuI3og73niLLnqbonLFxuXHRcdH0pLFxuXHRcdCdOZXR3b3JrIGVycm9yJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdOZXR3b3JrIGVycm9yLiBSZWRpcmVjdGluZy4uLicsXG5cdFx0XHRqYTogJ+ODjeODg+ODiOODr+ODvOOCr+OCqOODqeODvOOAgeODquODgOOCpOODrOOCr+ODiOS4rS4uLicsXG5cdFx0XHQnemgtaGFucyc6ICfnvZHnu5zlvILluLjjgILph43lrprlkJHkuK3igKbigKYnLFxuXHRcdFx0J3poLWhhbnQnOiAn57ay6Lev55Ww5bi444CC6YeN5paw5bCO5ZCR5Lit4oCm4oCmJyxcblx0XHR9KSxcblx0XHRTZWxlY3RlZE9yTm90OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0tlZXAgbG9nZ2VkIGluIGZvciA2IG1vbnRocyBpZiBzZWxlY3RlZDsgb3RoZXJ3aXNlIHVudGlsIHRoZSBicm93c2VyIGNsb3Nlcy4nLFxuXHRcdFx0amE6ICfjg4Hjgqfjg4Pjgq/jgpLlhaXjgozjgovjgajjg63jgrDjgqTjg7PnirbmhYvjgYw244O25pyI6ZaT5L+d5oyB44GV44KM44CB5YWl44KM44Gq44GE5aC05ZCI44Gv44OW44Op44Km44K244KS6ZaJ44GY44KL44G+44Gn5L+d5oyB44GV44KM44G+44GZ44CCJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WLvumAieWImeS/neaMgeeZu+W9leeKtuaAgTbkuKrmnIjvvIzlkKbliJnlsIblnKjmtY/op4jlmajlhbPpl63ml7bpgIDlh7rnmbvlvZXjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5Yu+6YG45YiZ5L+d5oyB55m75YWl54uA5oWLNuWAi+aciO+8jOWQpuWJh+Wwh+WcqOeAj+imveWZqOmXnOmWieaZgueZu+WHuuOAgicsXG5cdFx0fSksXG5cdFx0VG9vRnJlcXVlbnQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhlIHVzZXIgbG9naW4gaXMgdG9vIGZyZXF1ZW50LCBwbGVhc2UgdHJ5IGFnYWluIGluIGZpdmUgbWludXRlcycsXG5cdFx0XHRqYTogJ+WIqeeUqOiAheOBjOmgu+e5geOBmeOBjuOCi+OBn+OCgeOAgTXliIblvozjgavlho3oqabooYzjgZfjgabjgY/jgaDjgZXjgYQnLFxuXHRcdFx0J3poLWNuJzogJ+eUqOaIt+eZu+W9lei/h+S6jumikee5ge+8jOivt+S6lOWIhumSn+WQjuWGjeivlScsXG5cdFx0XHQnemgtaGsnOiAn55So5oi255m75YWl6YGO5pa86aC757mB77yM6KuL5LqU5YiG6ZCY5b6M5YaN6KmmJyxcblx0XHRcdCd6aC10dyc6ICfkvb/nlKjogIXnmbvlhaXov4fkuo7popHnuYHvvIzor7fkupTliIbpkp/lkI7lho3or5UnLFxuXHRcdH0pLFxuXHRcdCdVbmV4cGVjdGVkIEFQSSByZXNwb25zZSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVW5leHBlY3RlZCBBUEkgcmVzcG9uc2U6ICQxLiBSZWRpcmVjdGluZy4uLicsXG5cdFx0XHRqYTogJ+S6iOacn+OBm+OBrEFQSeOBruW/nOetlO+8miQx44CB44Oq44OA44Kk44Os44Kv44OI5LitLi4uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aEj+WklueahEFQSeWTjeW6lO+8miQx44CC6YeN5a6a5ZCR5Lit4oCm4oCmJyxcblx0XHRcdCd6aC1oYW50JzogJ+aEj+WklueahEFQSemfv+aHie+8miQx44CC6YeN5paw5bCO5ZCR5Lit4oCm4oCmJyxcblx0XHR9KSxcblx0fTtcbn07XG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImNvbnN0IGluaXRXaW5kb3dNYW5hZ2VyID0gKCk6IE9PLnVpLldpbmRvd01hbmFnZXIgPT4ge1xuXHRyZXR1cm4gbmV3IE9PLnVpLldpbmRvd01hbmFnZXIoKTtcbn07XG5cbmNvbnN0IHdpbmRvd01hbmFnZXI6IE9PLnVpLldpbmRvd01hbmFnZXIgPSBpbml0V2luZG93TWFuYWdlcigpO1xuXG5leHBvcnQge3dpbmRvd01hbmFnZXJ9O1xuIiwgImltcG9ydCB7d2luZG93TWFuYWdlcn0gZnJvbSAnLi4vaW5pdFdpbmRvd01hbmFnZXInO1xuXG5jb25zdCBvb3VpQ29uZmlybSA9IGFzeW5jIChvcHRpb25zOiBPTy51aS5NZXNzYWdlRGlhbG9nLlNldHVwRGF0YU1hcCk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xuXHRjb25zdCBtZXNzYWdlRGlhbG9nOiBPTy51aS5NZXNzYWdlRGlhbG9nID0gbmV3IE9PLnVpLk1lc3NhZ2VEaWFsb2coKTtcblx0d2luZG93TWFuYWdlci5hZGRXaW5kb3dzKFttZXNzYWdlRGlhbG9nXSk7XG5cblx0Y29uc3QgaW5zdGFuY2U6IE9PLnVpLldpbmRvd0luc3RhbmNlID0gd2luZG93TWFuYWdlci5vcGVuV2luZG93KG1lc3NhZ2VEaWFsb2csIG9wdGlvbnMpO1xuXG5cdGNvbnN0IGRhdGE6IHZvaWQgPSBhd2FpdCBpbnN0YW5jZS5jbG9zZWQ7XG5cdGNvbnN0IF9kYXRhID0gZGF0YSBhcyB7YWN0aW9uOiBzdHJpbmd9IHwgdm9pZDtcblxuXHRyZXR1cm4gISEoX2RhdGE/LmFjdGlvbiA9PT0gJ2FjY2VwdCcpO1xufTtcblxuZXhwb3J0IHtvb3VpQ29uZmlybX07XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuSlNYJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNvbnN0IGdlbmVyYXRlRWxlbWVudHMgPSAoaXNBZ3JlZVRvczogYm9vbGVhbikgPT4ge1xuXHRjb25zdCBtZXNzYWdlRGlhbG9nOiBPTy51aS5NZXNzYWdlRGlhbG9nID0gbmV3IE9PLnVpLk1lc3NhZ2VEaWFsb2coKTtcblxuXHRjb25zdCBuYW1lSW5wdXQ6IE9PLnVpLlRleHRJbnB1dFdpZGdldCA9IG5ldyBPTy51aS5UZXh0SW5wdXRXaWRnZXQoe1xuXHRcdGljb246ICd1c2VyQXZhdGFyJyxcblx0XHRwbGFjZWhvbGRlcjogZ2V0TWVzc2FnZSgnVXNlcm5hbWUnKSxcblx0XHR2YWxpZGF0ZTogJ25vbi1lbXB0eScsXG5cdH0pO1xuXG5cdGNvbnN0IHB3ZElucHV0OiBPTy51aS5UZXh0SW5wdXRXaWRnZXQgPSBuZXcgT08udWkuVGV4dElucHV0V2lkZ2V0KHtcblx0XHRpY29uOiAna2V5Jyxcblx0XHRwbGFjZWhvbGRlcjogZ2V0TWVzc2FnZSgnUGFzc3dvcmQnKSxcblx0XHR0eXBlOiAncGFzc3dvcmQnLFxuXHRcdHZhbGlkYXRlOiAnbm9uLWVtcHR5Jyxcblx0fSk7XG5cblx0Y29uc3QgYWdyZWVUb3NDaGVja2JveDogT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCA9IG5ldyBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0KHtcblx0XHRzZWxlY3RlZDogaXNBZ3JlZVRvcyxcblx0fSk7XG5cdGNvbnN0IGFncmVlVG9zTGF5b3V0OiBPTy51aS5GaWVsZExheW91dDxPTy51aS5DaGVja2JveElucHV0V2lkZ2V0PiA9IG5ldyBPTy51aS5GaWVsZExheW91dChhZ3JlZVRvc0NoZWNrYm94LCB7XG5cdFx0YWxpZ246ICdpbmxpbmUnLFxuXHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdJIGFncmVlIHdpdGggdGhlIHJlbGV2YW50IHRlcm1zJyksXG5cdH0pO1xuXG5cdGNvbnN0IGtlZXBMb2dpbkNoZWNrYm94OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0ID0gbmV3IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQoKTtcblx0Y29uc3Qga2VlcExvZ2luTGF5b3V0OiBPTy51aS5GaWVsZExheW91dDxPTy51aS5DaGVja2JveElucHV0V2lkZ2V0PiA9IG5ldyBPTy51aS5GaWVsZExheW91dChrZWVwTG9naW5DaGVja2JveCwge1xuXHRcdGFsaWduOiAnaW5saW5lJyxcblx0XHRoZWxwOiBnZXRNZXNzYWdlKCdTZWxlY3RlZE9yTm90JyksXG5cdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ0tlZXAgbWUgbG9nZ2VkIGluJyksXG5cdH0pO1xuXG5cdGNvbnN0IGxhYmVsID0gKFxuXHRcdDxsYWJlbFxuXHRcdFx0Y2xhc3NOYW1lPXtbJ29vLXVpLWxhYmVsV2lkZ2V0JywgJ29vLXVpLWxhYmVsRWxlbWVudC1sYWJlbCddfVxuXHRcdFx0c3R5bGU9e3tmb250U2l6ZTogJzkwJScsIHRleHRBbGlnbjogJ2p1c3RpZnknfX1cblx0XHQvPlxuXHQpO1xuXHRjb25zdCAkbGFiZWwgPSAkKGxhYmVsKSBhcyBKUXVlcnk7XG5cblx0Y29uc3QgJGFncmVlVG9zOiBKUXVlcnkgPSAkbGFiZWwuY2xvbmUoKS5hcHBlbmQoYWdyZWVUb3NMYXlvdXQuJGVsZW1lbnQpO1xuXHRjb25zdCAkZm9yZ290UGFzc3dvcmQ6IEpRdWVyeSA9ICRsYWJlbFxuXHRcdC5jbG9uZSgpXG5cdFx0LmNzcygnZmxvYXQnLCAncmlnaHQnKVxuXHRcdC5hcHBlbmQoXG5cdFx0XHQ8YSBocmVmPXttdy51dGlsLmdldFVybCgnU3BlY2lhbDpQYXNzd29yZFJlc2V0Jyl9IHRpdGxlPXtnZXRNZXNzYWdlKCdSZXNldCBwYXNzd29yZCcpfT5cblx0XHRcdFx0e2dldE1lc3NhZ2UoJ0ZvcmdvdCBwYXNzd29yZD8nKX1cblx0XHRcdDwvYT5cblx0XHQpO1xuXHRjb25zdCAkaW5wdXRCb3g6IEpRdWVyeSA9ICRsYWJlbFxuXHRcdC5jbG9uZSgpXG5cdFx0LmNzcyh7XG5cdFx0XHRkaXNwbGF5OiAnYmxvY2snLFxuXHRcdFx0J2ZvbnQtc2l6ZSc6ICdpbmhlcml0Jyxcblx0XHRcdHBhZGRpbmc6ICc2cHggMCcsXG5cdFx0fSlcblx0XHQuYXBwZW5kKG5hbWVJbnB1dC4kZWxlbWVudC5jc3MoJ21hcmdpbi1ib3R0b20nLCAnNnB4JyksIHB3ZElucHV0LiRlbGVtZW50KTtcblx0Y29uc3QgJHRvc0xhYmVsOiBKUXVlcnkgPSAkbGFiZWwuY2xvbmUoKS5odG1sKGdldE1lc3NhZ2UoJ2hlbHAgZm9yIEkgYWdyZWUgd2l0aCB0aGUgcmVsZXZhbnQgdGVybXMnKSk7XG5cdGNvbnN0ICRyZW1lbWJlck1lOiBKUXVlcnkgPSAkbGFiZWwuY2xvbmUoKS5hcHBlbmQoa2VlcExvZ2luTGF5b3V0LiRlbGVtZW50LmNzcygnbWFyZ2luLXRvcCcsICc2cHgnKSk7XG5cblx0cmV0dXJuIHtcblx0XHQkYWdyZWVUb3MsXG5cdFx0JGZvcmdvdFBhc3N3b3JkLFxuXHRcdCRpbnB1dEJveCxcblx0XHQkcmVtZW1iZXJNZSxcblx0XHQkdG9zTGFiZWwsXG5cdFx0YWdyZWVUb3NDaGVja2JveCxcblx0XHRrZWVwTG9naW5DaGVja2JveCxcblx0XHRtZXNzYWdlRGlhbG9nLFxuXHRcdG5hbWVJbnB1dCxcblx0XHRwd2RJbnB1dCxcblx0fTtcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVFbGVtZW50c307XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuSlNYJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge3JlbW92ZVdpbmRvd1Jlc2l6ZUhhbmRsZXJ9IGZyb20gJy4vcmVtb3ZlV2luZG93UmVzaXplSGFuZGxlcic7XG5pbXBvcnQge3dpbmRvd01hbmFnZXJ9IGZyb20gJy4uL2luaXRXaW5kb3dNYW5hZ2VyJztcblxuY29uc3Qgb291aVByb21wdCA9IGFzeW5jIChyZXR5cGVQYXNzd29yZDogYm9vbGVhbik6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4gPT4ge1xuXHRjb25zdCBjb2RlRGlhbG9nOiBPTy51aS5NZXNzYWdlRGlhbG9nID0gbmV3IE9PLnVpLk1lc3NhZ2VEaWFsb2coKTtcblx0Y29uc3QgY29kZUlucHV0OiBPTy51aS5UZXh0SW5wdXRXaWRnZXQgPSBuZXcgT08udWkuVGV4dElucHV0V2lkZ2V0KHtcblx0XHRpY29uOiAna2V5Jyxcblx0XHRwbGFjZWhvbGRlcjogcmV0eXBlUGFzc3dvcmQgPyBnZXRNZXNzYWdlKCdOZXcgcGFzc3dvcmQnKSA6IGdldE1lc3NhZ2UoJzYtZGlnaXQgbnVtYmVyJyksXG5cdFx0dmFsaWRhdGU6ICdpbnRlZ2VyJyxcblx0fSk7XG5cblx0Y29uc3QgY29kZUxheW91dDogT08udWkuRmllbGRMYXlvdXQ8T08udWkuVGV4dElucHV0V2lkZ2V0PiA9IG5ldyBPTy51aS5GaWVsZExheW91dChjb2RlSW5wdXQsIHtcblx0XHRhbGlnbjogJ3RvcCcsXG5cdFx0bGFiZWw6ICQoXG5cdFx0XHQ8YiBjbGFzc05hbWU9e1snb28tdWktbWVzc2FnZURpYWxvZy10aXRsZScsICdvby11aS13aW5kb3ctaGVhZCddfT5cblx0XHRcdFx0e3JldHlwZVBhc3N3b3JkID8gZ2V0TWVzc2FnZSgnRW50ZXIgcGFzc3dvcmQnKSA6IGdldE1lc3NhZ2UoJ0VudGVyIDJGQSB2ZXJpZmljYXRpb24gY29kZScpfVxuXHRcdFx0PC9iPlxuXHRcdCksXG5cdH0pO1xuXG5cdHdpbmRvd01hbmFnZXIuYWRkV2luZG93cyhbY29kZURpYWxvZ10pO1xuXG5cdGNvbnN0IGluc3RhbmNlOiBPTy51aS5XaW5kb3dJbnN0YW5jZSA9IHdpbmRvd01hbmFnZXIub3BlbldpbmRvdyhjb2RlRGlhbG9nLCB7XG5cdFx0bWVzc2FnZTogY29kZUxheW91dC4kZWxlbWVudCxcblx0fSk7XG5cblx0cmVtb3ZlV2luZG93UmVzaXplSGFuZGxlcigpO1xuXG5cdHZvaWQgaW5zdGFuY2Uub3BlbmVkLnRoZW4oKCk6IHZvaWQgPT4ge1xuXHRcdGNvZGVJbnB1dC5vbignZW50ZXInLCAoKTogdm9pZCA9PiB7XG5cdFx0XHQod2luZG93TWFuYWdlci5nZXRDdXJyZW50V2luZG93KCkgYXMgT08udWkuV2luZG93KS5jbG9zZSh7XG5cdFx0XHRcdGFjdGlvbjogJ2FjY2VwdCcsXG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRjb2RlSW5wdXQuZm9jdXMoKTtcblx0fSk7XG5cblx0Y29uc3QgZGF0YTogdm9pZCA9IGF3YWl0IGluc3RhbmNlLmNsb3NlZDtcblx0Y29uc3QgX2RhdGEgPSBkYXRhIGFzIHthY3Rpb246IHN0cmluZ30gfCB2b2lkO1xuXG5cdHJldHVybiBfZGF0YT8uYWN0aW9uID09PSAnYWNjZXB0JyA/IGNvZGVJbnB1dC5nZXRWYWx1ZSgpIDogbnVsbDtcbn07XG5cbmV4cG9ydCB7b291aVByb21wdH07XG4iLCAiaW1wb3J0IHt3aW5kb3dNYW5hZ2VyfSBmcm9tICcuLi9pbml0V2luZG93TWFuYWdlcic7XG5cbmNvbnN0IHJlbW92ZVdpbmRvd1Jlc2l6ZUhhbmRsZXIgPSAoKTogdm9pZCA9PiB7XG5cdCQod2luZG93KS5vZmYoe1xuXHRcdCdvcmllbnRhdGlvbmNoYW5nZSByZXNpemUnOiAod2luZG93TWFuYWdlciBhcyB1bmtub3duIGFzIHtvbldpbmRvd1Jlc2l6ZUhhbmRsZXI6ICgpID0+IHZvaWR9KVxuXHRcdFx0Lm9uV2luZG93UmVzaXplSGFuZGxlcixcblx0fSk7XG59O1xuXG5leHBvcnQge3JlbW92ZVdpbmRvd1Jlc2l6ZUhhbmRsZXJ9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuLi9hcGknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5jb25zdCBxdWVyeUxvZ2luVG9rZW4gPSBhc3luYyAoXG5cdHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2Vcbik6IFByb21pc2U8e1xuXHRsb2dpblRva2VuOiBzdHJpbmc7XG5cdHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2U7XG59PiA9PiB7XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeSh7XG5cdFx0dGV4dDogZ2V0TWVzc2FnZSgnR2V0dGluZyBsb2dpbiB0b2tlbicpLFxuXHR9KTtcblxuXHRjb25zdCBsb2dpblRva2VuOiBzdHJpbmcgPSBhd2FpdCBhcGkuZ2V0VG9rZW4oJ2xvZ2luJyk7XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KHtcblx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdMb2dpbiB0b2tlbiBnb3QnKSxcblx0XHRkdXJhdGlvbjogLTEsXG5cdH0pO1xuXG5cdHJldHVybiB7XG5cdFx0bG9naW5Ub2tlbixcblx0XHR0b2FzdGlmeUluc3RhbmNlLFxuXHR9O1xufTtcblxuZXhwb3J0IHtxdWVyeUxvZ2luVG9rZW59O1xuIiwgImltcG9ydCB7ZGVsYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3dpbmRvd01hbmFnZXJ9IGZyb20gJy4uL2luaXRXaW5kb3dNYW5hZ2VyJztcblxuY29uc3QgcmVkaXJlY3RPcmlnaW5Mb2dpblBhZ2UgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGF3YWl0IHdpbmRvd01hbmFnZXIuY2xlYXJXaW5kb3dzKCk7XG5cdGF3YWl0IGRlbGF5KDMgKiAxMDAwKTtcblx0bG9jYXRpb24uaHJlZiA9IG13LnV0aWwuZ2V0VXJsKCdTcGVjaWFsOlVzZXJsb2dpbicpO1xufTtcblxuZXhwb3J0IHtyZWRpcmVjdE9yaWdpbkxvZ2luUGFnZX07XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5jb25zdCBzaG93RXJyb3IgPSAoZXJyb3I6IHVua25vd24sIHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UpOiB2b2lkID0+IHtcblx0Y29uc29sZS5lcnJvcignW0FqYXhMb2dpbl0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ05ldHdvcmsgZXJyb3InKSxcblx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2Vycm9yJ1xuXHQpO1xufTtcblxuZXhwb3J0IHtzaG93RXJyb3J9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSx1QkFBd0I7QUFDeEIsSUFBQUMsVUFBVzs7QUNEWixJQUFBQyxzQkFBMkNDLFFBQUEsaUJBQUE7O0FDRDNDLElBQUFDLG9CQUFrQ0QsUUFBQSxnQ0FBQTtBQUVsQyxJQUFNRSxjQUFjQSxDQUNuQkMsVUFDQUMsa0JBQ1U7QUFDVkQsV0FBU0UsR0FBRyxVQUFBLEdBQVNKLGtCQUFBSyxxQkFBb0JGLGFBQWEsQ0FBQztBQUN2REQsV0FBU0UsR0FBRyxXQUFXRCxhQUFhO0FBQ3JDOztBQ1BBLElBQUFHLHFCQUF3QlAsUUFBQSxpQkFBQTtBQVV4QixJQUFNUSxPQUFBLEdBQWNELG1CQUFBRSxXQUFBLGFBQUFDLE9BQStCWixPQUFPLENBQUU7O0FDVjVELElBQUFhLHNCQUFrQkMsUUFBQVosUUFBQSxnQkFBQSxHQUFBLENBQUE7O0FDRGxCLElBQUFhLHFCQUFrQkQsUUFBQVosUUFBQSxnQkFBQSxHQUFBLENBQUE7O0FDQWxCLElBQUFjLHFCQUF1QmQsUUFBQSxpQkFBQTtBQUV2QixJQUFNZSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOLG1CQUFBLEdBQWtCRCxtQkFBQUUsVUFBUztNQUMxQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLFNBQUEsR0FBUUwsbUJBQUFFLFVBQVM7TUFDaEJDLElBQUk7TUFDSkMsSUFB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QUFLO0FBRXJDLFFBQU1RLHVCQUF5QztJQUM5QzlILFdBQVdBLE1BQU07SUFBQztFQUNuQjtBQUVBLFFBQU1oRSxnQkFBaUIrTCxXQUF5RDtBQUMvRSxRQUFJLEVBQUEsR0FBQ3BNLG9CQUFBcU0scUJBQW9CRCxLQUFLLEdBQUc7QUFDaEM7SUFDRDtBQUVBQSxVQUFNRSxlQUFlO0FBQ3JCNUMsY0FBVXlDLG9CQUFvQjtFQUMvQjtBQUNBaE0sY0FBWTRMLGVBQWUxTCxhQUFhO0FBQ3pDLENBQUM7IiwKICAibmFtZXMiOiBbImxvZ2luRWxlbWVudFNlbGVjdG9yIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQxMyIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImFkZExpc3RlbmVyIiwgIiRlbGVtZW50IiwgImV2ZW50TGlzdGVuZXIiLCAib24iLCAiZmlsdGVyQWx0ZXJlZENsaWNrcyIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQxMSIsICJfX3RvRVNNIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIkNhbmNlbCIsICJ6aCIsICJMb2dpbiIsICJQYXNzd29yZCIsICJVc2VybmFtZSIsICJBZ3JlZWRPck5vdCIsICJEb3VibGVDaGVja0FncmVlZE9yTm90IiwgIkVtcHR5MkZBIiwgIkVtcHR5UGFzc3dvcmQiLCAiRW1wdHlVc2VybmFtZU9yUGFzc3dvcmQiLCAiU2VsZWN0ZWRPck5vdCIsICJUb29GcmVxdWVudCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaW5pdFdpbmRvd01hbmFnZXIiLCAiT08iLCAidWkiLCAiV2luZG93TWFuYWdlciIsICJ3aW5kb3dNYW5hZ2VyIiwgIm9vdWlDb25maXJtIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAib3B0aW9ucyIsICJtZXNzYWdlRGlhbG9nIiwgIk1lc3NhZ2VEaWFsb2ciLCAiYWRkV2luZG93cyIsICJpbnN0YW5jZSIsICJvcGVuV2luZG93IiwgImRhdGEiLCAiY2xvc2VkIiwgIl9kYXRhIiwgImFjdGlvbiIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiaW1wb3J0X2V4dF9nYWRnZXQ1IiwgImNoZWNrVmFsaWQiLCAiX3JlZjIiLCAiYWdyZWVUb3NDaGVja2JveCIsICJuYW1lSW5wdXQiLCAicHdkSW5wdXQiLCAidG9hc3RpZnlJbnN0YW5jZSIsICJpc0FncmVlVG9zIiwgImlzU2VsZWN0ZWQiLCAiaXNGaWxsIiwgImdldFZhbHVlIiwgInRyaW0iLCAiaW5jbHVkZXMiLCAiaGlkZVRvYXN0IiwgImNsZWFyV2luZG93cyIsICJtZXNzYWdlIiwgIiQiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImlubmVySFRNTCIsICJhY3Rpb25zIiwgImxhYmVsIiwgImZsYWdzIiwgInRvYXN0aWZ5IiwgInRleHQiLCAiZHVyYXRpb24iLCAiaXNWYWxpZCIsICJfeDIiLCAiX3gzIiwgImltcG9ydF9leHRfZ2FkZ2V0NiIsICJnZW5lcmF0ZUVsZW1lbnRzIiwgIlRleHRJbnB1dFdpZGdldCIsICJpY29uIiwgInBsYWNlaG9sZGVyIiwgInZhbGlkYXRlIiwgInR5cGUiLCAiQ2hlY2tib3hJbnB1dFdpZGdldCIsICJzZWxlY3RlZCIsICJhZ3JlZVRvc0xheW91dCIsICJGaWVsZExheW91dCIsICJhbGlnbiIsICJrZWVwTG9naW5DaGVja2JveCIsICJrZWVwTG9naW5MYXlvdXQiLCAiaGVscCIsICJjbGFzc05hbWUiLCAic3R5bGUiLCAiZm9udFNpemUiLCAidGV4dEFsaWduIiwgIiRsYWJlbCIsICIkYWdyZWVUb3MiLCAiY2xvbmUiLCAiYXBwZW5kIiwgIiRmb3Jnb3RQYXNzd29yZCIsICJjc3MiLCAiaHJlZiIsICJtdyIsICJ1dGlsIiwgImdldFVybCIsICJ0aXRsZSIsICIkaW5wdXRCb3giLCAiZGlzcGxheSIsICJwYWRkaW5nIiwgIiR0b3NMYWJlbCIsICJodG1sIiwgIiRyZW1lbWJlck1lIiwgImltcG9ydF9leHRfZ2FkZ2V0NyIsICJyZW1vdmVXaW5kb3dSZXNpemVIYW5kbGVyIiwgIndpbmRvdyIsICJvZmYiLCAib25XaW5kb3dSZXNpemVIYW5kbGVyIiwgIm9vdWlQcm9tcHQiLCAiX3JlZjMiLCAicmV0eXBlUGFzc3dvcmQiLCAiY29kZURpYWxvZyIsICJjb2RlSW5wdXQiLCAiY29kZUxheW91dCIsICJvcGVuZWQiLCAidGhlbiIsICJnZXRDdXJyZW50V2luZG93IiwgImNsb3NlIiwgImZvY3VzIiwgIl94NCIsICJpbXBvcnRfZXh0X2dhZGdldDgiLCAicXVlcnlMb2dpblRva2VuIiwgIl9yZWY0IiwgImxvZ2luVG9rZW4iLCAiZ2V0VG9rZW4iLCAiX3g1IiwgImltcG9ydF9leHRfZ2FkZ2V0OSIsICJyZWRpcmVjdE9yaWdpbkxvZ2luUGFnZSIsICJfcmVmNSIsICJkZWxheSIsICJsb2NhdGlvbiIsICJpbXBvcnRfZXh0X2dhZGdldDEwIiwgInNob3dFcnJvciIsICJlcnJvciIsICJjb25zb2xlIiwgImltcG9ydF9leHRfZ2FkZ2V0MTIiLCAiYWpheExvZ2luIiwgImxvZ2luIiwgIl9yZWY2IiwgImxvZ2luQ29udGludWUiLCAiX3Jlc3BvbnNlJGNsaWVudGxvZ2luIiwgIl9yZXNwb25zZSRjbGllbnRsb2dpbjIiLCAicGFyYW1zIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgImxvZ2ludG9rZW4iLCAibG9naW5yZXR1cm51cmwiLCAidXNlcm5hbWUiLCAicGFzc3dvcmQiLCAicmVtZW1iZXJNZSIsICJsb2dpbmNvbnRpbnVlIiwgInZhbHVlIiwgInJldHlwZSIsICJPQVRIVG9rZW4iLCAicmVzcG9uc2UiLCAicG9zdCIsICJzdGF0dXMiLCAicmVsb2FkIiwgIm1lc3NhZ2Vjb2RlIiwgInJlcGxhY2UiLCAiY2hlY2siLCAiX3JlZjciLCAibGFzdElzQWdyZWVUb3MiLCAibGFzdFRvYXN0aWZ5SW5zdGFuY2UiLCAiZ2V0QWN0aW9uUHJvY2VzcyIsICJQcm9jZXNzIiwgInNpemUiLCAiZ2V0Qm9keSIsICJpbml0QXV0b0xvZ2luIiwgIiRib2R5IiwgIndnVXNlck5hbWUiLCAiY29uZmlnIiwgImdldCIsICIkbG9naW5FbGVtZW50IiwgImZpbmQiLCAibGVuZ3RoIiwgImFwcGVuZFRvIiwgImZha2VUb2FzdGlmeUluc3RhbmNlIiwgImV2ZW50IiwgImNoZWNrQTExeUNvbmZpcm1LZXkiLCAicHJldmVudERlZmF1bHQiXQp9Cg==
