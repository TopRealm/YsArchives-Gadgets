/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/LoginToEdit}
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

// dist/LoginToEdit/LoginToEdit.js
//! src/LoginToEdit/LoginToEdit.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/AjaxLogin/options.json
var loginElementSelector = 'a:has(.ajaxlogin-mount-point),#pt-login>a,.vector-user-menu-login>a,#user-tools>a[href*="Special"],.mainpage-top-menu>li:nth-child(2) a';
//! src/LoginToEdit/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Cancel: (0, import_ext_gadget.localize)({
      en: "Cancel",
      ja: "キャンセル",
      "zh-hans": "暂不登录账号",
      "zh-hant": "暫不登入賬號"
    }),
    Edit: (0, import_ext_gadget.localize)({
      en: "Edit",
      ja: "編集",
      "zh-hans": "编辑",
      "zh-hant": "編輯"
    }),
    Login: (0, import_ext_gadget.localize)({
      en: "Login",
      ja: "ログイン",
      "zh-hans": "登录已有账号",
      "zh-hant": "登入已有賬號"
    }),
    Register: (0, import_ext_gadget.localize)({
      en: "Register",
      ja: "アカウントを作成",
      "zh-hans": "注册新的账号",
      "zh-hant": "註冊新的賬號"
    }),
    DialogTitle: (0, import_ext_gadget.localize)({
      en: "Welcome to Youshou Archives!",
      ja: "「有兽档案馆」へようこそです！",
      "zh-hans": "欢迎来到有兽档案馆！",
      "zh-hant": "歡迎來到有獸檔案館！"
    }),
    DialogMessage: (0, import_ext_gadget.localize)({
      en: "You have not yet logged in. Register and log in to your account to contribute.",
      ja: "あなたはまだ有獣アーカイブスにログインしていません。アカウントを作成し、ログインして有獣アーカイブスを改善することができます。",
      "zh-hans": "您尚未登录到有兽档案馆。您可以注册并登录账号，帮助完善有兽档案馆。",
      "zh-hant": "您尚未登錄到有獸檔案館。您可以注冊並登錄賬戶，幫助完善有獸檔案館。"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/LoginToEdit/modules/util/generateMessageDialogProperty.ts
var generateMessageDialogProperty = () => {
  const $title = $("<b>").addClass("oo-ui-window-head").text(getMessage("DialogTitle"));
  const $message = $("<span>").addClass("oo-ui-window-foot").text(getMessage("DialogMessage"));
  const messageDialogProperty = {
    title: $title,
    message: $message,
    actions: [{
      action: "login",
      flags: ["primary", "progressive"],
      label: $("<b>").text(getMessage("Login"))
    }, {
      action: "register",
      flags: "progressive",
      label: $("<b>").text(getMessage("Register"))
    }, {
      action: "cancel",
      flags: ["safe", "close"],
      label: $("<b>").text(getMessage("Cancel"))
    }]
  };
  return messageDialogProperty;
};
//! src/LoginToEdit/modules/initWindowManager.ts
var initWindowManager = () => {
  const windowManager = new OO.ui.WindowManager();
  return windowManager;
};
//! src/LoginToEdit/modules/initDialog.ts
var {
  skin,
  wgAction,
  wgPageName
} = mw.config.get();
var isCitizen = skin === "citizen";
var loginURL = mw.util.getUrl("Special:UserLogin", {
  returnto: wgPageName
});
var registerURL = mw.util.getUrl("Special:CreateAccount", {
  returnto: wgPageName
});
var messageDialog;
var initDialog = ($body) => {
  const windowManager = initWindowManager();
  windowManager.$element.appendTo($body);
  const messageDialogProperty = generateMessageDialogProperty();
  const openDialog = () => {
    if (messageDialog) {
      if (messageDialog.isOpened()) {
        messageDialog.close();
      } else {
        messageDialog.open(messageDialogProperty);
      }
      return;
    }
    messageDialog = new OO.ui.MessageDialog();
    messageDialog.getActionProcess = (action) => {
      if (action === "login") {
        const $element = $(loginElementSelector);
        if ($element.length) {
          $element.trigger("click");
        } else {
          location.href = loginURL;
        }
      } else if (action === "register") {
        location.href = registerURL;
      }
      return new OO.ui.Process(() => {
        void windowManager.closeWindow(messageDialog);
      });
    };
    windowManager.addWindows([messageDialog]);
    void windowManager.openWindow(messageDialog, messageDialogProperty);
  };
  const $caViewsource = $body.find("#ca-viewsource");
  if ($caViewsource.length) {
    const editIcon = isCitizen ? '<span class="citizen-ui-icon mw-ui-icon-wikimedia-edit"></span>' : "";
    $caViewsource.attr("id", "ca-edit").find("a").attr("aria-label", getMessage("DialogMessage")).html(editIcon + getMessage("Edit")).on("click", (event) => {
      event.preventDefault();
      openDialog();
    });
  }
  if (["edit", "submit"].includes(wgAction)) {
    openDialog();
  }
};
//! src/LoginToEdit/LoginToEdit.ts
void (0, import_ext_gadget2.getBody)().then(function loginToEdit($body) {
  const {
    wgUserName
  } = mw.config.get();
  if (wgUserName) {
    return;
  }
  initDialog($body);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0xvZ2luVG9FZGl0L0xvZ2luVG9FZGl0LnRzIiwgInNyYy9BamF4TG9naW4vb3B0aW9ucy5qc29uIiwgInNyYy9Mb2dpblRvRWRpdC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0xvZ2luVG9FZGl0L21vZHVsZXMvdXRpbC9nZW5lcmF0ZU1lc3NhZ2VEaWFsb2dQcm9wZXJ0eS50cyIsICJzcmMvTG9naW5Ub0VkaXQvbW9kdWxlcy9pbml0V2luZG93TWFuYWdlci50cyIsICJzcmMvTG9naW5Ub0VkaXQvbW9kdWxlcy9pbml0RGlhbG9nLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2luaXREaWFsb2d9IGZyb20gJy4vbW9kdWxlcy9pbml0RGlhbG9nJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBsb2dpblRvRWRpdCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0Y29uc3Qge3dnVXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICh3Z1VzZXJOYW1lKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aW5pdERpYWxvZygkYm9keSk7XG59KTtcbiIsICJ7XG5cdFwibG9naW5FbGVtZW50U2VsZWN0b3JcIjogXCJhOmhhcyguYWpheGxvZ2luLW1vdW50LXBvaW50KSwjcHQtbG9naW4+YSwudmVjdG9yLXVzZXItbWVudS1sb2dpbj5hLCN1c2VyLXRvb2xzPmFbaHJlZio9XFxcIlNwZWNpYWxcXFwiXSwubWFpbnBhZ2UtdG9wLW1lbnU+bGk6bnRoLWNoaWxkKDIpIGFcIixcblx0XCJ2ZXJzaW9uXCI6IFwiNC4wXCJcbn1cbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0Q2FuY2VsOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NhbmNlbCcsXG5cdFx0XHRqYTogJ+OCreODo+ODs+OCu+ODqycsXG5cdFx0XHQnemgtaGFucyc6ICfmmoLkuI3nmbvlvZXotKblj7cnLFxuXHRcdFx0J3poLWhhbnQnOiAn5pqr5LiN55m75YWl6LOs6JmfJyxcblx0XHR9KSxcblx0XHRFZGl0OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VkaXQnLFxuXHRcdFx0amE6ICfnt6jpm4YnLFxuXHRcdFx0J3poLWhhbnMnOiAn57yW6L6RJyxcblx0XHRcdCd6aC1oYW50JzogJ+e3qOi8rycsXG5cdFx0fSksXG5cdFx0TG9naW46IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9naW4nLFxuXHRcdFx0amE6ICfjg63jgrDjgqTjg7MnLFxuXHRcdFx0J3poLWhhbnMnOiAn55m75b2V5bey5pyJ6LSm5Y+3Jyxcblx0XHRcdCd6aC1oYW50JzogJ+eZu+WFpeW3suacieizrOiZnycsXG5cdFx0fSksXG5cdFx0UmVnaXN0ZXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUmVnaXN0ZXInLFxuXHRcdFx0amE6ICfjgqLjgqvjgqbjg7Pjg4jjgpLkvZzmiJAnLFxuXHRcdFx0J3poLWhhbnMnOiAn5rOo5YaM5paw55qE6LSm5Y+3Jyxcblx0XHRcdCd6aC1oYW50JzogJ+iou+WGiuaWsOeahOizrOiZnycsXG5cdFx0fSksXG5cdFx0RGlhbG9nVGl0bGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnV2VsY29tZSB0byBZb3VzaG91IEFyY2hpdmVzIScsXG5cdFx0XHRqYTogJ+OAjOacieWFveaho+ahiOmmhuOAjeOBuOOCiOOBhuOBk+OBneOBp+OBme+8gScsXG5cdFx0XHQnemgtaGFucyc6ICfmrKLov47mnaXliLDmnInlhb3moaPmoYjppobvvIEnLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2h6L+O5L6G5Yiw5pyJ54245qqU5qGI6aSo77yBJyxcblx0XHR9KSxcblx0XHREaWFsb2dNZXNzYWdlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1lvdSBoYXZlIG5vdCB5ZXQgbG9nZ2VkIGluLiBSZWdpc3RlciBhbmQgbG9nIGluIHRvIHlvdXIgYWNjb3VudCB0byBjb250cmlidXRlLicsXG5cdFx0XHRqYTogJ+OBguOBquOBn+OBr+OBvuOBoOacieeNo+OCouODvOOCq+OCpOODluOCueOBq+ODreOCsOOCpOODs+OBl+OBpuOBhOOBvuOBm+OCk+OAguOCouOCq+OCpuODs+ODiOOCkuS9nOaIkOOBl+OAgeODreOCsOOCpOODs+OBl+OBpuacieeNo+OCouODvOOCq+OCpOODluOCueOCkuaUueWWhOOBmeOCi+OBk+OBqOOBjOOBp+OBjeOBvuOBmeOAgicsXG5cdFx0XHQnemgtaGFucyc6ICfmgqjlsJrmnKrnmbvlvZXliLDmnInlhb3moaPmoYjppobjgILmgqjlj6/ku6Xms6jlhozlubbnmbvlvZXotKblj7fvvIzluK7liqnlrozlloTmnInlhb3moaPmoYjppobjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5oKo5bCa5pyq55m76YyE5Yiw5pyJ54245qqU5qGI6aSo44CC5oKo5Y+v5Lul5rOo5YaK5Lim55m76YyE6LOs5oi277yM5bmr5Yqp5a6M5ZaE5pyJ54245qqU5qGI6aSo44CCJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3QgZ2VuZXJhdGVNZXNzYWdlRGlhbG9nUHJvcGVydHkgPSAoKTogT08udWkuV2luZG93TWFuYWdlci5XaW5kb3dPcGVuaW5nRGF0YSA9PiB7XG5cdGNvbnN0ICR0aXRsZTogSlF1ZXJ5ID0gJCgnPGI+JykuYWRkQ2xhc3MoJ29vLXVpLXdpbmRvdy1oZWFkJykudGV4dChnZXRNZXNzYWdlKCdEaWFsb2dUaXRsZScpKTtcblx0Y29uc3QgJG1lc3NhZ2U6IEpRdWVyeSA9ICQoJzxzcGFuPicpLmFkZENsYXNzKCdvby11aS13aW5kb3ctZm9vdCcpLnRleHQoZ2V0TWVzc2FnZSgnRGlhbG9nTWVzc2FnZScpKTtcblxuXHRjb25zdCBtZXNzYWdlRGlhbG9nUHJvcGVydHk6IE9PLnVpLldpbmRvd01hbmFnZXIuV2luZG93T3BlbmluZ0RhdGEgPSB7XG5cdFx0dGl0bGU6ICR0aXRsZSxcblx0XHRtZXNzYWdlOiAkbWVzc2FnZSxcblx0XHRhY3Rpb25zOiBbXG5cdFx0XHR7XG5cdFx0XHRcdGFjdGlvbjogJ2xvZ2luJyxcblx0XHRcdFx0ZmxhZ3M6IFsncHJpbWFyeScsICdwcm9ncmVzc2l2ZSddLFxuXHRcdFx0XHRsYWJlbDogJCgnPGI+JykudGV4dChnZXRNZXNzYWdlKCdMb2dpbicpKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGFjdGlvbjogJ3JlZ2lzdGVyJyxcblx0XHRcdFx0ZmxhZ3M6ICdwcm9ncmVzc2l2ZScsXG5cdFx0XHRcdGxhYmVsOiAkKCc8Yj4nKS50ZXh0KGdldE1lc3NhZ2UoJ1JlZ2lzdGVyJykpLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0YWN0aW9uOiAnY2FuY2VsJyxcblx0XHRcdFx0ZmxhZ3M6IFsnc2FmZScsICdjbG9zZSddLFxuXHRcdFx0XHRsYWJlbDogJCgnPGI+JykudGV4dChnZXRNZXNzYWdlKCdDYW5jZWwnKSksXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH07XG5cblx0cmV0dXJuIG1lc3NhZ2VEaWFsb2dQcm9wZXJ0eTtcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVNZXNzYWdlRGlhbG9nUHJvcGVydHl9O1xuIiwgImNvbnN0IGluaXRXaW5kb3dNYW5hZ2VyID0gKCk6IE9PLnVpLldpbmRvd01hbmFnZXIgPT4ge1xuXHRjb25zdCB3aW5kb3dNYW5hZ2VyOiBPTy51aS5XaW5kb3dNYW5hZ2VyID0gbmV3IE9PLnVpLldpbmRvd01hbmFnZXIoKTtcblxuXHRyZXR1cm4gd2luZG93TWFuYWdlcjtcbn07XG5cbmV4cG9ydCB7aW5pdFdpbmRvd01hbmFnZXJ9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnfi9BamF4TG9naW4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Z2VuZXJhdGVNZXNzYWdlRGlhbG9nUHJvcGVydHl9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZU1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2luaXRXaW5kb3dNYW5hZ2VyfSBmcm9tICcuL2luaXRXaW5kb3dNYW5hZ2VyJztcblxuY29uc3Qge3NraW4sIHdnQWN0aW9uLCB3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcbmNvbnN0IGlzQ2l0aXplbjogYm9vbGVhbiA9IHNraW4gPT09ICdjaXRpemVuJztcbmNvbnN0IGxvZ2luVVJMOiBzdHJpbmcgPSBtdy51dGlsLmdldFVybCgnU3BlY2lhbDpVc2VyTG9naW4nLCB7XG5cdHJldHVybnRvOiB3Z1BhZ2VOYW1lLFxufSk7XG5jb25zdCByZWdpc3RlclVSTDogc3RyaW5nID0gbXcudXRpbC5nZXRVcmwoJ1NwZWNpYWw6Q3JlYXRlQWNjb3VudCcsIHtcblx0cmV0dXJudG86IHdnUGFnZU5hbWUsXG59KTtcblxubGV0IG1lc3NhZ2VEaWFsb2c6IE9PLnVpLk1lc3NhZ2VEaWFsb2c7XG5cbmNvbnN0IGluaXREaWFsb2cgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0IHdpbmRvd01hbmFnZXI6IE9PLnVpLldpbmRvd01hbmFnZXIgPSBpbml0V2luZG93TWFuYWdlcigpO1xuXHR3aW5kb3dNYW5hZ2VyLiRlbGVtZW50LmFwcGVuZFRvKCRib2R5KTtcblxuXHRjb25zdCBtZXNzYWdlRGlhbG9nUHJvcGVydHk6IE9PLnVpLldpbmRvd01hbmFnZXIuV2luZG93T3BlbmluZ0RhdGEgPSBnZW5lcmF0ZU1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSgpO1xuXG5cdGNvbnN0IG9wZW5EaWFsb2cgPSAoKTogdm9pZCA9PiB7XG5cdFx0aWYgKG1lc3NhZ2VEaWFsb2cpIHtcblx0XHRcdGlmIChtZXNzYWdlRGlhbG9nLmlzT3BlbmVkKCkpIHtcblx0XHRcdFx0bWVzc2FnZURpYWxvZy5jbG9zZSgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bWVzc2FnZURpYWxvZy5vcGVuKG1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bWVzc2FnZURpYWxvZyA9IG5ldyBPTy51aS5NZXNzYWdlRGlhbG9nKCk7XG5cdFx0bWVzc2FnZURpYWxvZy5nZXRBY3Rpb25Qcm9jZXNzID0gKGFjdGlvbjogc3RyaW5nKTogT08udWkuUHJvY2VzcyA9PiB7XG5cdFx0XHRpZiAoYWN0aW9uID09PSAnbG9naW4nKSB7XG5cdFx0XHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+ID0gJChPUFRJT05TLmxvZ2luRWxlbWVudFNlbGVjdG9yKTtcblx0XHRcdFx0aWYgKCRlbGVtZW50Lmxlbmd0aCkge1xuXHRcdFx0XHRcdCRlbGVtZW50LnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bG9jYXRpb24uaHJlZiA9IGxvZ2luVVJMO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGFjdGlvbiA9PT0gJ3JlZ2lzdGVyJykge1xuXHRcdFx0XHRsb2NhdGlvbi5ocmVmID0gcmVnaXN0ZXJVUkw7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbmV3IE9PLnVpLlByb2Nlc3MoKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHR2b2lkIHdpbmRvd01hbmFnZXIuY2xvc2VXaW5kb3cobWVzc2FnZURpYWxvZyk7XG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0d2luZG93TWFuYWdlci5hZGRXaW5kb3dzKFttZXNzYWdlRGlhbG9nXSk7XG5cdFx0dm9pZCB3aW5kb3dNYW5hZ2VyLm9wZW5XaW5kb3cobWVzc2FnZURpYWxvZywgbWVzc2FnZURpYWxvZ1Byb3BlcnR5KTtcblx0fTtcblxuXHRjb25zdCAkY2FWaWV3c291cmNlOiBKUXVlcnkgPSAkYm9keS5maW5kKCcjY2Etdmlld3NvdXJjZScpO1xuXHRpZiAoJGNhVmlld3NvdXJjZS5sZW5ndGgpIHtcblx0XHRjb25zdCBlZGl0SWNvbjogc3RyaW5nID0gaXNDaXRpemVuID8gJzxzcGFuIGNsYXNzPVwiY2l0aXplbi11aS1pY29uIG13LXVpLWljb24td2lraW1lZGlhLWVkaXRcIj48L3NwYW4+JyA6ICcnO1xuXHRcdCRjYVZpZXdzb3VyY2Vcblx0XHRcdC5hdHRyKCdpZCcsICdjYS1lZGl0Jylcblx0XHRcdC5maW5kKCdhJylcblx0XHRcdC5hdHRyKCdhcmlhLWxhYmVsJywgZ2V0TWVzc2FnZSgnRGlhbG9nTWVzc2FnZScpKVxuXHRcdFx0Lmh0bWwoZWRpdEljb24gKyBnZXRNZXNzYWdlKCdFZGl0JykpXG5cdFx0XHQub24oJ2NsaWNrJywgKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRvcGVuRGlhbG9nKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdGlmIChbJ2VkaXQnLCAnc3VibWl0J10uaW5jbHVkZXMod2dBY3Rpb24pKSB7XG5cdFx0b3BlbkRpYWxvZygpO1xuXHR9XG59O1xuXG5leHBvcnQge2luaXREaWFsb2d9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBc0JDLFFBQUEsaUJBQUE7O0FDQ3JCLElBQUFDLHVCQUF3Qjs7QUNEekIsSUFBQUMsb0JBQXVCRixRQUFBLGlCQUFBO0FBRXZCLElBQU1HLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLFNBQUEsR0FBUUYsa0JBQUFHLFVBQVM7TUFDaEJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEQyxPQUFBLEdBQU1OLGtCQUFBRyxVQUFTO01BQ2RDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERSxRQUFBLEdBQU9QLGtCQUFBRyxVQUFTO01BQ2ZDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERyxXQUFBLEdBQVVSLGtCQUFBRyxVQUFTO01BQ2xCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREksY0FBQSxHQUFhVCxrQkFBQUcsVUFBUztNQUNyQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RLLGdCQUFBLEdBQWVWLGtCQUFBRyxVQUFTO01BQ3ZCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTU0sZUFBZVYsZ0JBQWdCO0FBRXJDLElBQU1XLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FDN0NBLElBQU1DLGdDQUFnQ0EsTUFBNkM7QUFDbEYsUUFBTUMsU0FBaUJDLEVBQUUsS0FBSyxFQUFFQyxTQUFTLG1CQUFtQixFQUFFQyxLQUFLTixXQUFXLGFBQWEsQ0FBQztBQUM1RixRQUFNTyxXQUFtQkgsRUFBRSxRQUFRLEVBQUVDLFNBQVMsbUJBQW1CLEVBQUVDLEtBQUtOLFdBQVcsZUFBZSxDQUFDO0FBRW5HLFFBQU1RLHdCQUErRDtJQUNwRUMsT0FBT047SUFDUE8sU0FBU0g7SUFDVEksU0FBUyxDQUNSO01BQ0NDLFFBQVE7TUFDUkMsT0FBTyxDQUFDLFdBQVcsYUFBYTtNQUNoQ0MsT0FBT1YsRUFBRSxLQUFLLEVBQUVFLEtBQUtOLFdBQVcsT0FBTyxDQUFDO0lBQ3pDLEdBQ0E7TUFDQ1ksUUFBUTtNQUNSQyxPQUFPO01BQ1BDLE9BQU9WLEVBQUUsS0FBSyxFQUFFRSxLQUFLTixXQUFXLFVBQVUsQ0FBQztJQUM1QyxHQUNBO01BQ0NZLFFBQVE7TUFDUkMsT0FBTyxDQUFDLFFBQVEsT0FBTztNQUN2QkMsT0FBT1YsRUFBRSxLQUFLLEVBQUVFLEtBQUtOLFdBQVcsUUFBUSxDQUFDO0lBQzFDLENBQUE7RUFFRjtBQUVBLFNBQU9RO0FBQ1I7O0FDN0JBLElBQU1PLG9CQUFvQkEsTUFBMkI7QUFDcEQsUUFBTUMsZ0JBQXFDLElBQUlDLEdBQUdDLEdBQUdDLGNBQWM7QUFFbkUsU0FBT0g7QUFDUjs7QUNDQSxJQUFNO0VBQUNJO0VBQU1DO0VBQVVDO0FBQVUsSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUNuRCxJQUFNQyxZQUFxQk4sU0FBUztBQUNwQyxJQUFNTyxXQUFtQkosR0FBR0ssS0FBS0MsT0FBTyxxQkFBcUI7RUFDNURDLFVBQVVSO0FBQ1gsQ0FBQztBQUNELElBQU1TLGNBQXNCUixHQUFHSyxLQUFLQyxPQUFPLHlCQUF5QjtFQUNuRUMsVUFBVVI7QUFDWCxDQUFDO0FBRUQsSUFBSVU7QUFFSixJQUFNQyxhQUFjQyxXQUF5QztBQUM1RCxRQUFNbEIsZ0JBQXFDRCxrQkFBa0I7QUFDN0RDLGdCQUFjbUIsU0FBU0MsU0FBU0YsS0FBSztBQUVyQyxRQUFNMUIsd0JBQStETiw4QkFBOEI7QUFFbkcsUUFBTW1DLGFBQWFBLE1BQVk7QUFDOUIsUUFBSUwsZUFBZTtBQUNsQixVQUFJQSxjQUFjTSxTQUFTLEdBQUc7QUFDN0JOLHNCQUFjTyxNQUFNO01BQ3JCLE9BQU87QUFDTlAsc0JBQWNRLEtBQUtoQyxxQkFBcUI7TUFDekM7QUFDQTtJQUNEO0FBRUF3QixvQkFBZ0IsSUFBSWYsR0FBR0MsR0FBR3VCLGNBQWM7QUFDeENULGtCQUFjVSxtQkFBb0I5QixZQUFrQztBQUNuRSxVQUFJQSxXQUFXLFNBQVM7QUFDdkIsY0FBTXVCLFdBQXNDL0IsRUFBVWpCLG9CQUFvQjtBQUMxRSxZQUFJZ0QsU0FBU1EsUUFBUTtBQUNwQlIsbUJBQVNTLFFBQVEsT0FBTztRQUN6QixPQUFPO0FBQ05DLG1CQUFTQyxPQUFPbkI7UUFDakI7TUFDRCxXQUFXZixXQUFXLFlBQVk7QUFDakNpQyxpQkFBU0MsT0FBT2Y7TUFDakI7QUFDQSxhQUFPLElBQUlkLEdBQUdDLEdBQUc2QixRQUFRLE1BQVk7QUFDcEMsYUFBSy9CLGNBQWNnQyxZQUFZaEIsYUFBYTtNQUM3QyxDQUFDO0lBQ0Y7QUFFQWhCLGtCQUFjaUMsV0FBVyxDQUFDakIsYUFBYSxDQUFDO0FBQ3hDLFNBQUtoQixjQUFja0MsV0FBV2xCLGVBQWV4QixxQkFBcUI7RUFDbkU7QUFFQSxRQUFNMkMsZ0JBQXdCakIsTUFBTWtCLEtBQUssZ0JBQWdCO0FBQ3pELE1BQUlELGNBQWNSLFFBQVE7QUFDekIsVUFBTVUsV0FBbUIzQixZQUFZLG9FQUFvRTtBQUN6R3lCLGtCQUNFRyxLQUFLLE1BQU0sU0FBUyxFQUNwQkYsS0FBSyxHQUFHLEVBQ1JFLEtBQUssY0FBY3RELFdBQVcsZUFBZSxDQUFDLEVBQzlDdUQsS0FBS0YsV0FBV3JELFdBQVcsTUFBTSxDQUFDLEVBQ2xDd0QsR0FBRyxTQUFVQyxXQUFtQztBQUNoREEsWUFBTUMsZUFBZTtBQUNyQnJCLGlCQUFXO0lBQ1osQ0FBQztFQUNIO0FBRUEsTUFBSSxDQUFDLFFBQVEsUUFBUSxFQUFFc0IsU0FBU3RDLFFBQVEsR0FBRztBQUMxQ2dCLGVBQVc7RUFDWjtBQUNEOztBTG5FQSxNQUFBLEdBQUtwRCxtQkFBQTJFLFNBQVEsRUFBRUMsS0FBSyxTQUFTQyxZQUFZNUIsT0FBc0M7QUFDOUUsUUFBTTtJQUFDNkI7RUFBVSxJQUFJeEMsR0FBR0MsT0FBT0MsSUFBSTtBQUVuQyxNQUFJc0MsWUFBWTtBQUNmO0VBQ0Q7QUFFQTlCLGFBQVdDLEtBQUs7QUFDakIsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAibG9naW5FbGVtZW50U2VsZWN0b3IiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkNhbmNlbCIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJFZGl0IiwgIkxvZ2luIiwgIlJlZ2lzdGVyIiwgIkRpYWxvZ1RpdGxlIiwgIkRpYWxvZ01lc3NhZ2UiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImdlbmVyYXRlTWVzc2FnZURpYWxvZ1Byb3BlcnR5IiwgIiR0aXRsZSIsICIkIiwgImFkZENsYXNzIiwgInRleHQiLCAiJG1lc3NhZ2UiLCAibWVzc2FnZURpYWxvZ1Byb3BlcnR5IiwgInRpdGxlIiwgIm1lc3NhZ2UiLCAiYWN0aW9ucyIsICJhY3Rpb24iLCAiZmxhZ3MiLCAibGFiZWwiLCAiaW5pdFdpbmRvd01hbmFnZXIiLCAid2luZG93TWFuYWdlciIsICJPTyIsICJ1aSIsICJXaW5kb3dNYW5hZ2VyIiwgInNraW4iLCAid2dBY3Rpb24iLCAid2dQYWdlTmFtZSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImlzQ2l0aXplbiIsICJsb2dpblVSTCIsICJ1dGlsIiwgImdldFVybCIsICJyZXR1cm50byIsICJyZWdpc3RlclVSTCIsICJtZXNzYWdlRGlhbG9nIiwgImluaXREaWFsb2ciLCAiJGJvZHkiLCAiJGVsZW1lbnQiLCAiYXBwZW5kVG8iLCAib3BlbkRpYWxvZyIsICJpc09wZW5lZCIsICJjbG9zZSIsICJvcGVuIiwgIk1lc3NhZ2VEaWFsb2ciLCAiZ2V0QWN0aW9uUHJvY2VzcyIsICJsZW5ndGgiLCAidHJpZ2dlciIsICJsb2NhdGlvbiIsICJocmVmIiwgIlByb2Nlc3MiLCAiY2xvc2VXaW5kb3ciLCAiYWRkV2luZG93cyIsICJvcGVuV2luZG93IiwgIiRjYVZpZXdzb3VyY2UiLCAiZmluZCIsICJlZGl0SWNvbiIsICJhdHRyIiwgImh0bWwiLCAib24iLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAiaW5jbHVkZXMiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImxvZ2luVG9FZGl0IiwgIndnVXNlck5hbWUiXQp9Cg==
