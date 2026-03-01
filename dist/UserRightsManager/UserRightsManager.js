/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/User:Xiplus/js/userRightsManager.js}
 * @base {@link https://en.wikipedia.org/wiki/User:MusikAnimal/userRightsManager.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/src/branch/master/src/UserRightsManager}
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

// dist/UserRightsManager/UserRightsManager.js
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
//! src/UserRightsManager/UserRightsManager.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/UserRightsManager/modules/getPagePermissions.ts
var getPagePermissions = () => {
  const {
    wgPageName
  } = mw.config.get();
  const pagePermissions = {
    "LIB_talk:权限申请/申请巡查回退权": "patroller",
    "LIB_talk:权限申请/申请优质编辑者": "autopatrolled",
    "LIB_talk:权限申请/申请确认用户权": "confirmed",
    "LIB_talk:权限申请/申请大量消息发送权": "massmessage-sender",
    "LIB_talk:权限申请/申请导入权": "importer",
    "LIB_talk:权限申请/申请模板编辑权": "templateeditor",
    "LIB_talk:权限申请/申请机器人权限": "bot"
  };
  let permission = null;
  for (var _i = 0, _Object$entries = Object.entries(pagePermissions); _i < _Object$entries.length; _i++) {
    const [pageName, pagePermission] = _Object$entries[_i];
    if (pageName === wgPageName) {
      permission = pagePermission;
    } else {
      continue;
    }
  }
  return permission;
};
//! src/UserRightsManager/options.json
var userRightsManagerSummary = "（[[MediaWiki:Gadget-UserRightsManager.js|UserRightsManager]]）";
var version = "2.0";
//! src/UserRightsManager/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("morebits.js; UserRightsManager/".concat(version));
//! src/UserRightsManager/modules/getPermissionNames.ts
var getPermissionNames = (permission) => {
  const permissionNames = {
    patroller: "巡查员",
    autopatrolled: "优质编辑者",
    confirmed: "确认用户",
    "massmessage-sender": "大量消息发送者",
    importer: "导入者",
    templateeditor: "模板编辑员",
    bot: "机器人",
    "rnrsverify-exempt": "实名制验证豁免",
    "ipblock-exempt": "IP封禁豁免"
  };
  let permissionName = null;
  for (var _i2 = 0, _Object$entries2 = Object.entries(permissionNames); _i2 < _Object$entries2.length; _i2++) {
    const [right, name] = _Object$entries2[_i2];
    if (permission === right) {
      permissionName = name;
    } else {
      continue;
    }
  }
  return permissionName;
};
//! src/UserRightsManager/modules/assignPermission.ts
var assignPermission = ({
  userName,
  permission,
  summary,
  revId,
  expiry
}) => {
  const permaLink = "[[Special:PermaLink/".concat(revId, "#User:").concat(userName, "|权限申请]]");
  let fullSummary = "+".concat(getPermissionNames(permission), "；").concat(permaLink);
  if (summary !== "") {
    fullSummary += "；".concat(summary);
  }
  fullSummary += userRightsManagerSummary;
  const params = {
    action: "userrights",
    user: userName.replace(/ /g, "_"),
    reason: fullSummary,
    // @ts-expect-error TS2322
    add: [permission],
    expiry: expiry === "" ? "infinity" : expiry
  };
  if (permission === "patroller" && expiry === "infinite") {
    params.remove = "autoreviewer";
  }
  return api.postWithToken("userrights", params);
};
//! src/UserRightsManager/modules/getTemplates.ts
var getPermissionTemplate = (permission) => {
  const permissionTemplates = {
    patroller: "Patrol granted",
    autopatrolled: "Autopatrol granted",
    "massmessage-sender": "MMS granted",
    templateeditor: "Template editor granted",
    importer: "Importer granted"
  };
  let template = null;
  for (var _i3 = 0, _Object$entries3 = Object.entries(permissionTemplates); _i3 < _Object$entries3.length; _i3++) {
    const [pagePermission, templateName] = _Object$entries3[_i3];
    if (permission === pagePermission) {
      template = templateName;
    } else {
      continue;
    }
  }
  return template;
};
//! src/UserRightsManager/modules/issueTemplate.ts
var issueTemplate = ({
  userName,
  permission,
  watch
}) => {
  const permissionTemplate = getPermissionTemplate(permission);
  if (!permissionTemplate) {
    return;
  }
  const permissionName = getPermissionNames(permission);
  const talkPage = "User talk:".concat(userName.replace(/ /g, "_"));
  const params = {
    action: "edit",
    format: "json",
    title: talkPage,
    appendtext: "\n\n{{".concat("subst:", permissionTemplate, "}}"),
    summary: "根据共识授予".concat(permissionName).concat(userRightsManagerSummary),
    watchlist: watch ? "watch" : "unwatch"
  };
  return api.postWithEditToken(params);
};
//! src/UserRightsManager/modules/markAsDone.ts
var tagLine = userRightsManagerSummary;
var queryRevisions = /* @__PURE__ */ (function() {
  var _ref = _asyncToGenerator(function* (titles, rvsection) {
    const params = {
      titles,
      rvsection,
      action: "query",
      format: "json",
      formatversion: "2",
      prop: "revisions",
      curtimestamp: true,
      rvprop: ["content", "timestamp"],
      rvslots: "main"
    };
    return yield api.get(params);
  });
  return function queryRevisions2(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();
var markAsDone = ({
  userName,
  index,
  closingRemarks
}) => {
  const {
    wgPageName,
    wgUserName
  } = mw.config.get();
  const sectionNode = document.getElementById("User:".concat(userName.replace(/"/g, ".22").replace(/ /g, "_")).concat(index !== null && index !== void 0 ? index : ""));
  const sectionNumber = $(sectionNode).siblings(".mw-editsection").find("a:not(.mw-editsection-visualeditor)[href*=edit]").prop("href").match(/section=(\d+)/)[1];
  let basetimestamp;
  let curtimestamp;
  let content;
  let revision;
  return queryRevisions(wgPageName, sectionNumber).then((data) => {
    if (!data["query"] || !data["query"].pages) {
      return $.Deferred().reject("unknown");
    }
    const {
      pages
    } = data["query"];
    const [page] = pages;
    if (!page || page.invalid) {
      return $.Deferred().reject("invalidtitle");
    }
    if (page.missing) {
      return $.Deferred().reject("nocreate-missing");
    }
    [revision] = page.revisions;
    if (revision) {
      ({
        slots: {
          main: {
            content
          }
        },
        timestamp: basetimestamp
      } = revision);
    }
    curtimestamp = data["curtimestamp"];
    return $.Deferred().resolve();
  }).then(() => {
    content = content.trim();
    content = content.replace(/(:\s*{{Status)(\|.*?)?}}/i, "$1|+}}");
    content += closingRemarks;
    const editParams = {
      action: "edit",
      format: "json",
      formatversion: "2",
      title: wgPageName,
      section: sectionNumber,
      text: content,
      summary: "/* User:".concat(userName, " */ 完成").concat(tagLine),
      basetimestamp,
      starttimestamp: curtimestamp,
      nocreate: true
    };
    if (wgUserName) {
      editParams.assert = "user";
    }
    return api.postWithEditToken(editParams);
  });
};
//! src/UserRightsManager/modules/showDialog.ts
var showDialog = function showDialog2({
  $body,
  userName,
  permission,
  index
}) {
  const {
    wgULS
  } = window;
  const permissionTemplate = getPermissionTemplate(permission);
  const permissionName = getPermissionNames(permission);
  class Dialog extends OO.ui.ProcessDialog {
    static editPanel;
    static rightLog;
    static editFieldset;
    static rightsChangeSummaryInput;
    static expiryInput;
    static closingRemarksInput;
    static watchTalkPageCheckbox;
    static submitPanel;
    static submitFieldset;
    static stackLayout;
    $body;
    constructor() {
      super({
        size: "medium"
      });
    }
    // eslint-disable-next-line class-methods-use-this
    getBodyHeight() {
      return 255;
    }
    initialize() {
      super.initialize();
      Dialog.editPanel = new OO.ui.PanelLayout({
        expanded: false
      });
      const rightLogWapper = $("<span>");
      const url = mw.util.getUrl("Special:Log/rights", {
        type: "rights",
        page: "User:".concat(userName)
      });
      $("<a>").text(wgULS("最近权限日志", "最近權限日誌")).attr({
        href: url,
        target: "_blank"
      }).appendTo(rightLogWapper);
      rightLogWapper.append("：");
      const rightLogText = $("<span>").text(wgULS("获取中", "取得中")).appendTo(rightLogWapper);
      Dialog.rightLog = new OO.ui.LabelWidget({
        label: rightLogWapper
      });
      Dialog.editPanel.$element.append(Dialog.rightLog.$element);
      const queryLogEventsParams = {
        action: "query",
        format: "json",
        list: "logevents",
        leaction: "rights/rights",
        letitle: "User:".concat(userName),
        lelimit: 1
      };
      void api.get(queryLogEventsParams).done((data) => {
        const {
          logevents: logs
        } = data["query"];
        if (logs.length === 0 || !logs[0]) {
          rightLogText.text(wgULS("没有任何日志", "沒有任何日誌"));
        } else {
          const timestamp = new Morebits.date(logs[0].timestamp).calendar();
          const rights = logs[0].params.newgroups.join("、") || wgULS("（无）", "（無）");
          rightLogText.text("".concat(timestamp, " ").concat(logs[0].user).concat(wgULS("将用户组改为", "將使用者群組改為")).concat(rights));
        }
      });
      Dialog.editFieldset = new OO.ui.FieldsetLayout({
        classes: ["container"]
      });
      Dialog.editPanel.$element.append(Dialog.editFieldset.$element);
      Dialog.rightsChangeSummaryInput = new OO.ui.TextInputWidget({
        value: "",
        placeholder: "可留空"
      });
      Dialog.expiryInput = new mw.widgets.ExpiryWidget({
        $overlay: $body.find(".oo-ui-window"),
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
        RelativeInputClass: mw.widgets.SelectWithInputWidget,
        relativeInput: {
          or: true,
          dropdowninput: {
            options: [{
              data: "1 day",
              label: "1天"
            }, {
              data: "1 week",
              label: wgULS("1周", "1週")
            }, {
              data: "1 month",
              label: wgULS("1个月", "1個月")
            }, {
              data: "3 months",
              label: wgULS("3个月", "3個月")
            }, {
              data: "6 months",
              label: wgULS("6个月", "6個月")
            }, {
              data: "1 year",
              label: "1年"
            }, {
              data: "infinite",
              label: wgULS("没有期限", "沒有期限")
            }, {
              data: "other",
              label: wgULS("其他时间", "其他時間")
            }],
            value: "infinite"
          },
          textinput: {
            required: true
          }
        }
      });
      Dialog.closingRemarksInput = new OO.ui.TextInputWidget({
        value: "{{done}}--~~~~"
      });
      Dialog.watchTalkPageCheckbox = new OO.ui.CheckboxInputWidget({
        selected: false
      });
      const formElements = [new OO.ui.FieldLayout(Dialog.rightsChangeSummaryInput, {
        label: wgULS("授权原因", "授權原因")
      }), new OO.ui.FieldLayout(Dialog.expiryInput, {
        label: wgULS("结束时间", "結束時間")
      }), new OO.ui.FieldLayout(Dialog.closingRemarksInput, {
        label: wgULS("关闭请求留言", "關閉請求留言")
      })];
      if (permissionTemplate) {
        formElements.push(new OO.ui.FieldLayout(Dialog.watchTalkPageCheckbox, {
          label: wgULS("监视用户讨论页", "監視使用者討論頁")
        }));
      }
      Dialog.editFieldset.addItems(formElements);
      Dialog.submitPanel = new OO.ui.PanelLayout({
        expanded: false
      });
      Dialog.submitFieldset = new OO.ui.FieldsetLayout({
        classes: ["container"]
      });
      Dialog.submitPanel.$element.append(Dialog.submitFieldset.$element);
      Dialog.submitPanel.$element.append(Dialog.submitFieldset.$element);
      Dialog.stackLayout = new OO.ui.StackLayout({
        items: [Dialog.editPanel, Dialog.submitPanel],
        padded: true
      });
      this.$body.append(Dialog.stackLayout.$element);
      return this;
    }
    static onSubmit() {
      void markAsDone({
        userName,
        index,
        closingRemarks: "\n:".concat(Dialog.closingRemarksInput.getValue())
      }).then((data) => {
        void assignPermission({
          userName,
          permission,
          summary: Dialog.rightsChangeSummaryInput.getValue(),
          revId: Number.parseInt(data["edit"].newrevid, 10),
          expiry: Dialog.expiryInput.getValue()
        });
      }).then(() => {
        void issueTemplate({
          userName,
          permission,
          watch: Dialog.watchTalkPageCheckbox.isSelected()
        });
      }).then(() => {
        setTimeout(() => {
          location.reload();
        }, 1e3);
      });
      Dialog.stackLayout.setItem(Dialog.submitPanel);
    }
    static pushPending() {
      throw new Error("Method not implemented.");
    }
    static popPending() {
      throw new Error("Method not implemented.");
    }
    getActionProcess(action) {
      return super.getActionProcess(action).next(function() {
        if (action === "submit") {
          return Dialog.onSubmit();
        }
        return Dialog.super.prototype.getActionProcess.call(this, action);
      }, this);
    }
  }
  Dialog.static = {
    ...OO.ui.ProcessDialog.static
  };
  Dialog.static.name = "user-rights-manager";
  Dialog.static.title = "授予".concat(permissionName).concat(wgULS("给", "給")).concat(userName);
  Dialog.static.actions = [{
    action: "submit",
    label: wgULS("授权", "授權"),
    flags: ["primary", "progressive"]
  }, {
    label: "取消",
    flags: "safe"
  }];
  const dialog = new Dialog();
  const windowManager = new OO.ui.WindowManager();
  $("body").append(windowManager.$element);
  windowManager.addWindows([dialog]);
  void windowManager.openWindow(dialog);
};
//! src/UserRightsManager/UserRightsManager.ts
void (0, import_ext_gadget2.getBody)().then(($body) => {
  const permission = getPagePermissions();
  if (!permission) {
    return;
  }
  $body.find(".perm-assign-permissions a").on("click", function(event) {
    var _$element$parents$pre;
    event.preventDefault();
    const $element = $(this);
    const userName = mw.util.getParamValue("user", $element.attr("href"));
    if (!userName) {
      return;
    }
    const sectionId = (_$element$parents$pre = $element.parents("dl").prev("h4").find(".mw-headline").attr("id")) !== null && _$element$parents$pre !== void 0 ? _$element$parents$pre : "";
    const index = sectionId === "User:".concat(userName) || sectionId === "User:".concat(userName).replace(/"/g, ".22").replace(/ /g, "_") ? "" : sectionId.replace("User:", "").replace(userName, "").replace(userName.replace(/"/g, ".22").replace(/ /g, "_"), "");
    showDialog({
      $body,
      userName,
      permission,
      index
    });
  });
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1VzZXJSaWdodHNNYW5hZ2VyL1VzZXJSaWdodHNNYW5hZ2VyLnRzIiwgInNyYy9Vc2VyUmlnaHRzTWFuYWdlci9tb2R1bGVzL2dldFBhZ2VQZXJtaXNzaW9ucy50cyIsICJzcmMvVXNlclJpZ2h0c01hbmFnZXIvb3B0aW9ucy5qc29uIiwgInNyYy9Vc2VyUmlnaHRzTWFuYWdlci9tb2R1bGVzL2FwaS50cyIsICJzcmMvVXNlclJpZ2h0c01hbmFnZXIvbW9kdWxlcy9nZXRQZXJtaXNzaW9uTmFtZXMudHMiLCAic3JjL1VzZXJSaWdodHNNYW5hZ2VyL21vZHVsZXMvYXNzaWduUGVybWlzc2lvbi50cyIsICJzcmMvVXNlclJpZ2h0c01hbmFnZXIvbW9kdWxlcy9nZXRUZW1wbGF0ZXMudHMiLCAic3JjL1VzZXJSaWdodHNNYW5hZ2VyL21vZHVsZXMvaXNzdWVUZW1wbGF0ZS50cyIsICJzcmMvVXNlclJpZ2h0c01hbmFnZXIvbW9kdWxlcy9tYXJrQXNEb25lLnRzIiwgInNyYy9Vc2VyUmlnaHRzTWFuYWdlci9tb2R1bGVzL3Nob3dEaWFsb2cudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0UGFnZVBlcm1pc3Npb25zfSBmcm9tICcuL21vZHVsZXMvZ2V0UGFnZVBlcm1pc3Npb25zJztcbmltcG9ydCB7c2hvd0RpYWxvZ30gZnJvbSAnLi9tb2R1bGVzL3Nob3dEaWFsb2cnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3QgcGVybWlzc2lvbiA9IGdldFBhZ2VQZXJtaXNzaW9ucygpO1xuXHRpZiAoIXBlcm1pc3Npb24pIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQkYm9keS5maW5kKCcucGVybS1hc3NpZ24tcGVybWlzc2lvbnMgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PiA9ICQodGhpcyBhcyBIVE1MQW5jaG9yRWxlbWVudCk7XG5cdFx0Y29uc3QgdXNlck5hbWUgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3VzZXInLCAkZWxlbWVudC5hdHRyKCdocmVmJykpO1xuXHRcdGlmICghdXNlck5hbWUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBzZWN0aW9uSWQ6IHN0cmluZyA9ICRlbGVtZW50LnBhcmVudHMoJ2RsJykucHJldignaDQnKS5maW5kKCcubXctaGVhZGxpbmUnKS5hdHRyKCdpZCcpID8/ICcnO1xuXHRcdGNvbnN0IGluZGV4OiBzdHJpbmcgPVxuXHRcdFx0c2VjdGlvbklkID09PSBgVXNlcjoke3VzZXJOYW1lfWAgfHwgc2VjdGlvbklkID09PSBgVXNlcjoke3VzZXJOYW1lfWAucmVwbGFjZSgvXCIvZywgJy4yMicpLnJlcGxhY2UoLyAvZywgJ18nKVxuXHRcdFx0XHQ/ICcnXG5cdFx0XHRcdDogc2VjdGlvbklkXG5cdFx0XHRcdFx0XHQucmVwbGFjZSgnVXNlcjonLCAnJylcblx0XHRcdFx0XHRcdC5yZXBsYWNlKHVzZXJOYW1lLCAnJylcblx0XHRcdFx0XHRcdC5yZXBsYWNlKHVzZXJOYW1lLnJlcGxhY2UoL1wiL2csICcuMjInKS5yZXBsYWNlKC8gL2csICdfJyksICcnKTtcblxuXHRcdHNob3dEaWFsb2coeyRib2R5LCB1c2VyTmFtZSwgcGVybWlzc2lvbiwgaW5kZXh9KTtcblx0fSk7XG59KTtcbiIsICJpbXBvcnQgdHlwZSB7VXNlclJpZ2h0c30gZnJvbSAnfi9NYXJrUmlnaHRzL21vZHVsZXMvdHlwZXMnO1xuXG5jb25zdCBnZXRQYWdlUGVybWlzc2lvbnMgPSAoKTogVXNlclJpZ2h0cyB8IG51bGwgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y29uc3QgcGFnZVBlcm1pc3Npb25zID0ge1xuXHRcdCdMSUJfdGFsazrmnYPpmZDnlLPor7cv55Sz6K+35beh5p+l5Zue6YCA5p2DJzogJ3BhdHJvbGxlcicsXG5cdFx0J0xJQl90YWxrOuadg+mZkOeUs+ivty/nlLPor7fkvJjotKjnvJbovpHogIUnOiAnYXV0b3BhdHJvbGxlZCcsXG5cdFx0J0xJQl90YWxrOuadg+mZkOeUs+ivty/nlLPor7fnoa7orqTnlKjmiLfmnYMnOiAnY29uZmlybWVkJyxcblx0XHQnTElCX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+Wkp+mHj+a2iOaBr+WPkemAgeadgyc6ICdtYXNzbWVzc2FnZS1zZW5kZXInLFxuXHRcdCdMSUJfdGFsazrmnYPpmZDnlLPor7cv55Sz6K+35a+85YWl5p2DJzogJ2ltcG9ydGVyJyxcblx0XHQnTElCX3RhbGs65p2D6ZmQ55Sz6K+3L+eUs+ivt+aooeadv+e8lui+keadgyc6ICd0ZW1wbGF0ZWVkaXRvcicsXG5cdFx0J0xJQl90YWxrOuadg+mZkOeUs+ivty/nlLPor7fmnLrlmajkurrmnYPpmZAnOiAnYm90Jyxcblx0fSBhcyBjb25zdCBzYXRpc2ZpZXMgUGFydGlhbDxSZWNvcmQ8c3RyaW5nLCBVc2VyUmlnaHRzPj47XG5cblx0bGV0IHBlcm1pc3Npb246IFVzZXJSaWdodHMgfCBudWxsID0gbnVsbDtcblx0Zm9yIChjb25zdCBbcGFnZU5hbWUsIHBhZ2VQZXJtaXNzaW9uXSBvZiBPYmplY3QuZW50cmllcyhwYWdlUGVybWlzc2lvbnMpKSB7XG5cdFx0aWYgKHBhZ2VOYW1lID09PSB3Z1BhZ2VOYW1lKSB7XG5cdFx0XHRwZXJtaXNzaW9uID0gcGFnZVBlcm1pc3Npb247XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBwZXJtaXNzaW9uO1xufTtcblxuZXhwb3J0IHtnZXRQYWdlUGVybWlzc2lvbnN9O1xuIiwgIntcblx0XCJ1c2VyUmlnaHRzTWFuYWdlclN1bW1hcnlcIjogXCLvvIhbW01lZGlhV2lraTpHYWRnZXQtVXNlclJpZ2h0c01hbmFnZXIuanN8VXNlclJpZ2h0c01hbmFnZXJdXe+8iVwiLFxuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgbW9yZWJpdHMuanM7IFVzZXJSaWdodHNNYW5hZ2VyLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHR5cGUge1VzZXJSaWdodHN9IGZyb20gJ34vTWFya1JpZ2h0cy9tb2R1bGVzL3R5cGVzJztcblxuY29uc3QgZ2V0UGVybWlzc2lvbk5hbWVzID0gKHBlcm1pc3Npb246IFVzZXJSaWdodHMpOiBzdHJpbmcgfCBudWxsID0+IHtcblx0Y29uc3QgcGVybWlzc2lvbk5hbWVzID0ge1xuXHRcdHBhdHJvbGxlcjogJ+W3oeafpeWRmCcsXG5cdFx0YXV0b3BhdHJvbGxlZDogJ+S8mOi0qOe8lui+keiAhScsXG5cdFx0Y29uZmlybWVkOiAn56Gu6K6k55So5oi3Jyxcblx0XHQnbWFzc21lc3NhZ2Utc2VuZGVyJzogJ+Wkp+mHj+a2iOaBr+WPkemAgeiAhScsXG5cdFx0aW1wb3J0ZXI6ICflr7zlhaXogIUnLFxuXHRcdHRlbXBsYXRlZWRpdG9yOiAn5qih5p2/57yW6L6R5ZGYJyxcblx0XHRib3Q6ICfmnLrlmajkuronLFxuXHRcdCdybnJzdmVyaWZ5LWV4ZW1wdCc6ICflrp7lkI3liLbpqozor4HosYHlhY0nLFxuXHRcdCdpcGJsb2NrLWV4ZW1wdCc6ICdJUOWwgeemgeixgeWFjScsXG5cdH0gYXMgY29uc3Qgc2F0aXNmaWVzIFBhcnRpYWw8UmVjb3JkPFVzZXJSaWdodHMsIHN0cmluZz4+O1xuXG5cdGxldCBwZXJtaXNzaW9uTmFtZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cdGZvciAoY29uc3QgW3JpZ2h0LCBuYW1lXSBvZiBPYmplY3QuZW50cmllcyhwZXJtaXNzaW9uTmFtZXMpKSB7XG5cdFx0aWYgKHBlcm1pc3Npb24gPT09IHJpZ2h0KSB7XG5cdFx0XHRwZXJtaXNzaW9uTmFtZSA9IG5hbWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBwZXJtaXNzaW9uTmFtZTtcbn07XG5cbmV4cG9ydCB7Z2V0UGVybWlzc2lvbk5hbWVzfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge1VzZXJSaWdodHN9IGZyb20gJ34vTWFya1JpZ2h0cy9tb2R1bGVzL3R5cGVzJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2dldFBlcm1pc3Npb25OYW1lc30gZnJvbSAnLi9nZXRQZXJtaXNzaW9uTmFtZXMnO1xuXG5jb25zdCBhc3NpZ25QZXJtaXNzaW9uID0gKHtcblx0dXNlck5hbWUsXG5cdHBlcm1pc3Npb24sXG5cdHN1bW1hcnksXG5cdHJldklkLFxuXHRleHBpcnksXG59OiB7XG5cdHVzZXJOYW1lOiBzdHJpbmc7XG5cdHBlcm1pc3Npb246IFVzZXJSaWdodHM7XG5cdHN1bW1hcnk6IHN0cmluZztcblx0cmV2SWQ6IG51bWJlcjtcblx0ZXhwaXJ5OiBzdHJpbmc7XG59KSA9PiB7XG5cdGNvbnN0IHBlcm1hTGluayA9IGBbW1NwZWNpYWw6UGVybWFMaW5rLyR7cmV2SWR9I1VzZXI6JHt1c2VyTmFtZX185p2D6ZmQ55Sz6K+3XV1gO1xuXHRsZXQgZnVsbFN1bW1hcnkgPSBgKyR7Z2V0UGVybWlzc2lvbk5hbWVzKHBlcm1pc3Npb24pfe+8myR7cGVybWFMaW5rfWA7XG5cdGlmIChzdW1tYXJ5ICE9PSAnJykge1xuXHRcdGZ1bGxTdW1tYXJ5ICs9IGDvvJske3N1bW1hcnl9YDtcblx0fVxuXHRmdWxsU3VtbWFyeSArPSBPUFRJT05TLnVzZXJSaWdodHNNYW5hZ2VyU3VtbWFyeTtcblx0Y29uc3QgcGFyYW1zOiBBcGlVc2VycmlnaHRzUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3VzZXJyaWdodHMnLFxuXHRcdHVzZXI6IHVzZXJOYW1lLnJlcGxhY2UoLyAvZywgJ18nKSxcblx0XHRyZWFzb246IGZ1bGxTdW1tYXJ5LFxuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzIyXG5cdFx0YWRkOiBbcGVybWlzc2lvbl0sXG5cdFx0ZXhwaXJ5OiBleHBpcnkgPT09ICcnID8gJ2luZmluaXR5JyA6IGV4cGlyeSxcblx0fTtcblx0aWYgKHBlcm1pc3Npb24gPT09ICdwYXRyb2xsZXInICYmIGV4cGlyeSA9PT0gJ2luZmluaXRlJykge1xuXHRcdHBhcmFtcy5yZW1vdmUgPSAnYXV0b3Jldmlld2VyJztcblx0fVxuXHRyZXR1cm4gYXBpLnBvc3RXaXRoVG9rZW4oJ3VzZXJyaWdodHMnLCBwYXJhbXMpO1xufTtcblxuZXhwb3J0IHthc3NpZ25QZXJtaXNzaW9ufTtcbiIsICJpbXBvcnQgdHlwZSB7VXNlclJpZ2h0c30gZnJvbSAnfi9NYXJrUmlnaHRzL21vZHVsZXMvdHlwZXMnO1xuXG5jb25zdCBnZXRQZXJtaXNzaW9uVGVtcGxhdGUgPSAocGVybWlzc2lvbjogVXNlclJpZ2h0cyk6IHN0cmluZyB8IG51bGwgPT4ge1xuXHRjb25zdCBwZXJtaXNzaW9uVGVtcGxhdGVzID0ge1xuXHRcdHBhdHJvbGxlcjogJ1BhdHJvbCBncmFudGVkJyxcblx0XHRhdXRvcGF0cm9sbGVkOiAnQXV0b3BhdHJvbCBncmFudGVkJyxcblx0XHQnbWFzc21lc3NhZ2Utc2VuZGVyJzogJ01NUyBncmFudGVkJyxcblx0XHR0ZW1wbGF0ZWVkaXRvcjogJ1RlbXBsYXRlIGVkaXRvciBncmFudGVkJyxcblx0XHRpbXBvcnRlcjogJ0ltcG9ydGVyIGdyYW50ZWQnLFxuXHR9IGFzIGNvbnN0IHNhdGlzZmllcyBQYXJ0aWFsPFJlY29yZDxVc2VyUmlnaHRzLCBzdHJpbmc+PjtcblxuXHRsZXQgdGVtcGxhdGU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXHRmb3IgKGNvbnN0IFtwYWdlUGVybWlzc2lvbiwgdGVtcGxhdGVOYW1lXSBvZiBPYmplY3QuZW50cmllcyhwZXJtaXNzaW9uVGVtcGxhdGVzKSkge1xuXHRcdGlmIChwZXJtaXNzaW9uID09PSBwYWdlUGVybWlzc2lvbikge1xuXHRcdFx0dGVtcGxhdGUgPSB0ZW1wbGF0ZU5hbWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0ZW1wbGF0ZTtcbn07XG5cbmV4cG9ydCB7Z2V0UGVybWlzc2lvblRlbXBsYXRlfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge0FwaVJlc3BvbnNlfSBmcm9tICd0eXBlcy1tZWRpYXdpa2kvbXcvQXBpJztcbmltcG9ydCB7VXNlclJpZ2h0c30gZnJvbSAnfi9NYXJrUmlnaHRzL21vZHVsZXMvdHlwZXMnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2V0UGVybWlzc2lvbk5hbWVzfSBmcm9tICcuL2dldFBlcm1pc3Npb25OYW1lcyc7XG5pbXBvcnQge2dldFBlcm1pc3Npb25UZW1wbGF0ZX0gZnJvbSAnLi9nZXRUZW1wbGF0ZXMnO1xuXG5jb25zdCBpc3N1ZVRlbXBsYXRlID0gKHtcblx0dXNlck5hbWUsXG5cdHBlcm1pc3Npb24sXG5cdHdhdGNoLFxufToge1xuXHR1c2VyTmFtZTogc3RyaW5nO1xuXHRwZXJtaXNzaW9uOiBVc2VyUmlnaHRzO1xuXHR3YXRjaDogYm9vbGVhbiB8ICd3YXRjaCcgfCAndW53YXRjaCc7XG59KTogSlF1ZXJ5LlByb21pc2U8QXBpUmVzcG9uc2U+IHwgdm9pZCA9PiB7XG5cdGNvbnN0IHBlcm1pc3Npb25UZW1wbGF0ZSA9IGdldFBlcm1pc3Npb25UZW1wbGF0ZShwZXJtaXNzaW9uKTtcblx0aWYgKCFwZXJtaXNzaW9uVGVtcGxhdGUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwZXJtaXNzaW9uTmFtZSA9IGdldFBlcm1pc3Npb25OYW1lcyhwZXJtaXNzaW9uKTtcblx0Y29uc3QgdGFsa1BhZ2UgPSBgVXNlciB0YWxrOiR7dXNlck5hbWUucmVwbGFjZSgvIC9nLCAnXycpfWA7XG5cdGNvbnN0IHBhcmFtczogQXBpRWRpdFBhZ2VQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0dGl0bGU6IHRhbGtQYWdlLFxuXHRcdGFwcGVuZHRleHQ6ICdcXG5cXG57eycuY29uY2F0KCdzdWJzdDonLCBwZXJtaXNzaW9uVGVtcGxhdGUsICd9fScpLFxuXHRcdHN1bW1hcnk6IGDmoLnmja7lhbHor4bmjojkuogke3Blcm1pc3Npb25OYW1lfSR7T1BUSU9OUy51c2VyUmlnaHRzTWFuYWdlclN1bW1hcnl9YCxcblx0XHR3YXRjaGxpc3Q6IHdhdGNoID8gJ3dhdGNoJyA6ICd1bndhdGNoJyxcblx0fTtcblx0cmV0dXJuIGFwaS5wb3N0V2l0aEVkaXRUb2tlbihwYXJhbXMpO1xufTtcblxuZXhwb3J0IHtpc3N1ZVRlbXBsYXRlfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuY29uc3QgdGFnTGluZSA9IE9QVElPTlMudXNlclJpZ2h0c01hbmFnZXJTdW1tYXJ5O1xuXG5jb25zdCBxdWVyeVJldmlzaW9ucyA9IGFzeW5jICh0aXRsZXM6IHN0cmluZyB8IHN0cmluZ1tdLCBydnNlY3Rpb246IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zID0ge1xuXHRcdHRpdGxlcyxcblx0XHRydnNlY3Rpb24sXG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRjdXJ0aW1lc3RhbXA6IHRydWUsXG5cdFx0cnZwcm9wOiBbJ2NvbnRlbnQnLCAndGltZXN0YW1wJ10sXG5cdFx0cnZzbG90czogJ21haW4nLFxuXHR9O1xuXG5cdHJldHVybiBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG59O1xuXG5jb25zdCBtYXJrQXNEb25lID0gKHt1c2VyTmFtZSwgaW5kZXgsIGNsb3NpbmdSZW1hcmtzfToge3VzZXJOYW1lOiBzdHJpbmc7IGluZGV4OiBzdHJpbmc7IGNsb3NpbmdSZW1hcmtzOiBzdHJpbmd9KSA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lLCB3Z1VzZXJOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLXF1ZXJ5LXNlbGVjdG9yXG5cdGNvbnN0IHNlY3Rpb25Ob2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG5cdFx0YFVzZXI6JHt1c2VyTmFtZS5yZXBsYWNlKC9cIi9nLCAnLjIyJykucmVwbGFjZSgvIC9nLCAnXycpfSR7aW5kZXggPz8gJyd9YFxuXHQpO1xuXG5cdGNvbnN0IHNlY3Rpb25OdW1iZXIgPSAoXG5cdFx0KFxuXHRcdFx0JChzZWN0aW9uTm9kZSBhcyBIVE1MRWxlbWVudClcblx0XHRcdFx0LnNpYmxpbmdzKCcubXctZWRpdHNlY3Rpb24nKVxuXHRcdFx0XHQuZmluZCgnYTpub3QoLm13LWVkaXRzZWN0aW9uLXZpc3VhbGVkaXRvcilbaHJlZio9ZWRpdF0nKVxuXHRcdFx0XHQucHJvcCgnaHJlZicpIGFzIHN0cmluZ1xuXHRcdCkubWF0Y2goL3NlY3Rpb249KFxcZCspLykgYXMgUmVnRXhwTWF0Y2hBcnJheVxuXHQpWzFdIGFzIHN0cmluZztcblxuXHRsZXQgYmFzZXRpbWVzdGFtcDogc3RyaW5nO1xuXHRsZXQgY3VydGltZXN0YW1wOiBzdHJpbmc7XG5cdGxldCBjb250ZW50OiBzdHJpbmc7XG5cdGxldCByZXZpc2lvbjtcblxuXHRyZXR1cm4gcXVlcnlSZXZpc2lvbnMod2dQYWdlTmFtZSwgc2VjdGlvbk51bWJlcilcblx0XHQudGhlbigoZGF0YSkgPT4ge1xuXHRcdFx0aWYgKCFkYXRhWydxdWVyeSddIHx8ICFkYXRhWydxdWVyeSddLnBhZ2VzKSB7XG5cdFx0XHRcdHJldHVybiAkLkRlZmVycmVkKCkucmVqZWN0KCd1bmtub3duJyk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHtwYWdlc30gPSBkYXRhWydxdWVyeSddIGFzIHtcblx0XHRcdFx0cGFnZXM6IHtcblx0XHRcdFx0XHRpbnZhbGlkPzogYm9vbGVhbjtcblx0XHRcdFx0XHRtaXNzaW5nPzogYm9vbGVhbjtcblx0XHRcdFx0XHRyZXZpc2lvbnM6IHtcblx0XHRcdFx0XHRcdHRpbWVzdGFtcDogc3RyaW5nO1xuXHRcdFx0XHRcdFx0c2xvdHM6IHtcblx0XHRcdFx0XHRcdFx0bWFpbjoge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IHN0cmluZztcblx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0fVtdO1xuXHRcdFx0XHR9W107XG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgW3BhZ2VdID0gcGFnZXM7XG5cblx0XHRcdGlmICghcGFnZSB8fCBwYWdlLmludmFsaWQpIHtcblx0XHRcdFx0cmV0dXJuICQuRGVmZXJyZWQoKS5yZWplY3QoJ2ludmFsaWR0aXRsZScpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAocGFnZS5taXNzaW5nKSB7XG5cdFx0XHRcdHJldHVybiAkLkRlZmVycmVkKCkucmVqZWN0KCdub2NyZWF0ZS1taXNzaW5nJyk7XG5cdFx0XHR9XG5cblx0XHRcdFtyZXZpc2lvbl0gPSBwYWdlLnJldmlzaW9ucztcblx0XHRcdGlmIChyZXZpc2lvbikge1xuXHRcdFx0XHQoe1xuXHRcdFx0XHRcdHNsb3RzOiB7XG5cdFx0XHRcdFx0XHRtYWluOiB7Y29udGVudH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR0aW1lc3RhbXA6IGJhc2V0aW1lc3RhbXAsXG5cdFx0XHRcdH0gPSByZXZpc2lvbik7XG5cdFx0XHR9XG5cdFx0XHRjdXJ0aW1lc3RhbXAgPSBkYXRhWydjdXJ0aW1lc3RhbXAnXSBhcyBzdHJpbmc7XG5cdFx0XHRyZXR1cm4gJC5EZWZlcnJlZCgpLnJlc29sdmUoKTtcblx0XHR9KVxuXHRcdC50aGVuKCgpID0+IHtcblx0XHRcdGNvbnRlbnQgPSBjb250ZW50LnRyaW0oKTtcblx0XHRcdGNvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UoLyg6XFxzKnt7U3RhdHVzKShcXHwuKj8pP319L2ksICckMXwrfX0nKTtcblx0XHRcdGNvbnRlbnQgKz0gY2xvc2luZ1JlbWFya3M7XG5cblx0XHRcdGNvbnN0IGVkaXRQYXJhbXM6IEFwaUVkaXRQYWdlUGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0dGl0bGU6IHdnUGFnZU5hbWUsXG5cdFx0XHRcdHNlY3Rpb246IHNlY3Rpb25OdW1iZXIsXG5cdFx0XHRcdHRleHQ6IGNvbnRlbnQsXG5cdFx0XHRcdHN1bW1hcnk6IGAvKiBVc2VyOiR7dXNlck5hbWV9ICovIOWujOaIkCR7dGFnTGluZX1gLFxuXHRcdFx0XHRiYXNldGltZXN0YW1wLFxuXHRcdFx0XHRzdGFydHRpbWVzdGFtcDogY3VydGltZXN0YW1wLFxuXHRcdFx0XHRub2NyZWF0ZTogdHJ1ZSxcblx0XHRcdH07XG5cdFx0XHRpZiAod2dVc2VyTmFtZSkge1xuXHRcdFx0XHRlZGl0UGFyYW1zLmFzc2VydCA9ICd1c2VyJztcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGFwaS5wb3N0V2l0aEVkaXRUb2tlbihlZGl0UGFyYW1zKTtcblx0XHR9KTtcbn07XG5cbmV4cG9ydCB7bWFya0FzRG9uZX07XG4iLCAiaW1wb3J0IHtVc2VyUmlnaHRzfSBmcm9tICd+L01hcmtSaWdodHMvbW9kdWxlcy90eXBlcyc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHthc3NpZ25QZXJtaXNzaW9ufSBmcm9tICcuL2Fzc2lnblBlcm1pc3Npb24nO1xuaW1wb3J0IHtnZXRQZXJtaXNzaW9uTmFtZXN9IGZyb20gJy4vZ2V0UGVybWlzc2lvbk5hbWVzJztcbmltcG9ydCB7Z2V0UGVybWlzc2lvblRlbXBsYXRlfSBmcm9tICcuL2dldFRlbXBsYXRlcyc7XG5pbXBvcnQge2lzc3VlVGVtcGxhdGV9IGZyb20gJy4vaXNzdWVUZW1wbGF0ZSc7XG5pbXBvcnQge21hcmtBc0RvbmV9IGZyb20gJy4vbWFya0FzRG9uZSc7XG5cbmNvbnN0IHNob3dEaWFsb2cgPSBmdW5jdGlvbiBzaG93RGlhbG9nKHtcblx0JGJvZHksXG5cdHVzZXJOYW1lLFxuXHRwZXJtaXNzaW9uLFxuXHRpbmRleCxcbn06IHtcblx0JGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+O1xuXHR1c2VyTmFtZTogc3RyaW5nO1xuXHRwZXJtaXNzaW9uOiBVc2VyUmlnaHRzO1xuXHRpbmRleDogc3RyaW5nO1xufSkge1xuXHRjb25zdCB7d2dVTFN9ID0gd2luZG93O1xuXHRjb25zdCBwZXJtaXNzaW9uVGVtcGxhdGUgPSBnZXRQZXJtaXNzaW9uVGVtcGxhdGUocGVybWlzc2lvbik7XG5cdGNvbnN0IHBlcm1pc3Npb25OYW1lID0gZ2V0UGVybWlzc2lvbk5hbWVzKHBlcm1pc3Npb24pO1xuXG5cdGNsYXNzIERpYWxvZyBleHRlbmRzIE9PLnVpLlByb2Nlc3NEaWFsb2cge1xuXHRcdHByaXZhdGUgc3RhdGljIGVkaXRQYW5lbDogT08udWkuUGFuZWxMYXlvdXQ7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmlnaHRMb2c6IE9PLnVpLkxhYmVsV2lkZ2V0O1xuXHRcdHByaXZhdGUgc3RhdGljIGVkaXRGaWVsZHNldDogT08udWkuRmllbGRzZXRMYXlvdXQ7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmlnaHRzQ2hhbmdlU3VtbWFyeUlucHV0OiBPTy51aS5UZXh0SW5wdXRXaWRnZXQ7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgZXhwaXJ5SW5wdXQ6IE9PLnVpLldpZGdldDtcblx0XHRwcml2YXRlIHN0YXRpYyBjbG9zaW5nUmVtYXJrc0lucHV0OiBPTy51aS5UZXh0SW5wdXRXaWRnZXQ7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgd2F0Y2hUYWxrUGFnZUNoZWNrYm94OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0O1xuXHRcdHByaXZhdGUgc3RhdGljIHN1Ym1pdFBhbmVsOiBPTy51aS5QYW5lbExheW91dDtcblx0XHRwcml2YXRlIHN0YXRpYyBzdWJtaXRGaWVsZHNldDogT08udWkuRmllbGRzZXRMYXlvdXQ7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgc3RhY2tMYXlvdXQ6IE9PLnVpLlN0YWNrTGF5b3V0O1xuXHRcdHByaXZhdGUgJGJvZHk6IEpRdWVyeSB8IHVuZGVmaW5lZDtcblxuXHRcdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcblx0XHRcdHN1cGVyKHtcblx0XHRcdFx0c2l6ZTogJ21lZGl1bScsXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcblx0XHRwdWJsaWMgb3ZlcnJpZGUgZ2V0Qm9keUhlaWdodCgpIHtcblx0XHRcdHJldHVybiAyNTU7XG5cdFx0fVxuXHRcdHB1YmxpYyBvdmVycmlkZSBpbml0aWFsaXplKCkge1xuXHRcdFx0c3VwZXIuaW5pdGlhbGl6ZSgpO1xuXHRcdFx0RGlhbG9nLmVkaXRQYW5lbCA9IG5ldyBPTy51aS5QYW5lbExheW91dCh7XG5cdFx0XHRcdGV4cGFuZGVkOiBmYWxzZSxcblx0XHRcdH0pO1xuXHRcdFx0Y29uc3QgcmlnaHRMb2dXYXBwZXIgPSAkKCc8c3Bhbj4nKTtcblx0XHRcdGNvbnN0IHVybCA9IG13LnV0aWwuZ2V0VXJsKCdTcGVjaWFsOkxvZy9yaWdodHMnLCB7dHlwZTogJ3JpZ2h0cycsIHBhZ2U6IGBVc2VyOiR7dXNlck5hbWV9YH0pO1xuXHRcdFx0JCgnPGE+Jylcblx0XHRcdFx0LnRleHQod2dVTFMoJ+acgOi/keadg+mZkOaXpeW/lycsICfmnIDov5HmrIrpmZDml6XoqownKSlcblx0XHRcdFx0LmF0dHIoe2hyZWY6IHVybCwgdGFyZ2V0OiAnX2JsYW5rJ30pXG5cdFx0XHRcdC5hcHBlbmRUbyhyaWdodExvZ1dhcHBlcik7XG5cdFx0XHRyaWdodExvZ1dhcHBlci5hcHBlbmQoJ++8micpO1xuXHRcdFx0Y29uc3QgcmlnaHRMb2dUZXh0ID0gJCgnPHNwYW4+JykudGV4dCh3Z1VMUygn6I635Y+W5LitJywgJ+WPluW+l+S4rScpKS5hcHBlbmRUbyhyaWdodExvZ1dhcHBlcik7XG5cdFx0XHREaWFsb2cucmlnaHRMb2cgPSBuZXcgT08udWkuTGFiZWxXaWRnZXQoe1xuXHRcdFx0XHRsYWJlbDogcmlnaHRMb2dXYXBwZXIsXG5cdFx0XHR9KTtcblx0XHRcdERpYWxvZy5lZGl0UGFuZWwuJGVsZW1lbnQuYXBwZW5kKERpYWxvZy5yaWdodExvZy4kZWxlbWVudCk7XG5cblx0XHRcdGNvbnN0IHF1ZXJ5TG9nRXZlbnRzUGFyYW1zOiBBcGlRdWVyeUxvZ0V2ZW50c1BhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0bGlzdDogJ2xvZ2V2ZW50cycsXG5cdFx0XHRcdGxlYWN0aW9uOiAncmlnaHRzL3JpZ2h0cycsXG5cdFx0XHRcdGxldGl0bGU6IGBVc2VyOiR7dXNlck5hbWV9YCxcblx0XHRcdFx0bGVsaW1pdDogMSxcblx0XHRcdH07XG5cblx0XHRcdHZvaWQgYXBpLmdldChxdWVyeUxvZ0V2ZW50c1BhcmFtcykuZG9uZSgoZGF0YSkgPT4ge1xuXHRcdFx0XHRjb25zdCB7bG9nZXZlbnRzOiBsb2dzfSA9IGRhdGFbJ3F1ZXJ5J10gYXMge1xuXHRcdFx0XHRcdGxvZ2V2ZW50czoge1xuXHRcdFx0XHRcdFx0cGFyYW1zOiB7XG5cdFx0XHRcdFx0XHRcdG5ld2dyb3Vwczogc3RyaW5nW107XG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0dXNlcjogc3RyaW5nO1xuXHRcdFx0XHRcdH1bXTtcblx0XHRcdFx0fTtcblx0XHRcdFx0aWYgKGxvZ3MubGVuZ3RoID09PSAwIHx8ICFsb2dzWzBdKSB7XG5cdFx0XHRcdFx0cmlnaHRMb2dUZXh0LnRleHQod2dVTFMoJ+ayoeacieS7u+S9leaXpeW/lycsICfmspLmnInku7vkvZXml6XoqownKSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzIzMDRcblx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1jYWxsLCBuZXctY2FwXG5cdFx0XHRcdFx0Y29uc3QgdGltZXN0YW1wID0gbmV3IE1vcmViaXRzLmRhdGUobG9nc1swXS50aW1lc3RhbXApLmNhbGVuZGFyKCkgYXMgc3RyaW5nO1xuXHRcdFx0XHRcdGNvbnN0IHJpZ2h0cyA9IGxvZ3NbMF0ucGFyYW1zLm5ld2dyb3Vwcy5qb2luKCfjgIEnKSB8fCB3Z1VMUygn77yI5peg77yJJywgJ++8iOeEoe+8iScpO1xuXHRcdFx0XHRcdHJpZ2h0TG9nVGV4dC50ZXh0KFxuXHRcdFx0XHRcdFx0YCR7dGltZXN0YW1wfSAke2xvZ3NbMF0udXNlcn0ke3dnVUxTKCflsIbnlKjmiLfnu4TmlLnkuLonLCAn5bCH5L2/55So6ICF576k57WE5pS554K6Jyl9JHtyaWdodHN9YFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHREaWFsb2cuZWRpdEZpZWxkc2V0ID0gbmV3IE9PLnVpLkZpZWxkc2V0TGF5b3V0KHtcblx0XHRcdFx0Y2xhc3NlczogWydjb250YWluZXInXSxcblx0XHRcdH0pO1xuXHRcdFx0RGlhbG9nLmVkaXRQYW5lbC4kZWxlbWVudC5hcHBlbmQoRGlhbG9nLmVkaXRGaWVsZHNldC4kZWxlbWVudCk7XG5cblx0XHRcdERpYWxvZy5yaWdodHNDaGFuZ2VTdW1tYXJ5SW5wdXQgPSBuZXcgT08udWkuVGV4dElucHV0V2lkZ2V0KHtcblx0XHRcdFx0dmFsdWU6ICcnLFxuXHRcdFx0XHRwbGFjZWhvbGRlcjogJ+WPr+eVmeepuicsXG5cdFx0XHR9KTtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWNhbGwsIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcblx0XHRcdERpYWxvZy5leHBpcnlJbnB1dCA9IG5ldyAobXcgYXMgYW55KS53aWRnZXRzLkV4cGlyeVdpZGdldCh7XG5cdFx0XHRcdCRvdmVybGF5OiAkYm9keS5maW5kKCcub28tdWktd2luZG93JyksXG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnQsIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcblx0XHRcdFx0UmVsYXRpdmVJbnB1dENsYXNzOiAobXcgYXMgYW55KS53aWRnZXRzLlNlbGVjdFdpdGhJbnB1dFdpZGdldCxcblx0XHRcdFx0cmVsYXRpdmVJbnB1dDoge1xuXHRcdFx0XHRcdG9yOiB0cnVlLFxuXHRcdFx0XHRcdGRyb3Bkb3duaW5wdXQ6IHtcblx0XHRcdFx0XHRcdG9wdGlvbnM6IFtcblx0XHRcdFx0XHRcdFx0e2RhdGE6ICcxIGRheScsIGxhYmVsOiAnMeWkqSd9LFxuXHRcdFx0XHRcdFx0XHR7ZGF0YTogJzEgd2VlaycsIGxhYmVsOiB3Z1VMUygnMeWRqCcsICcx6YCxJyl9LFxuXHRcdFx0XHRcdFx0XHR7ZGF0YTogJzEgbW9udGgnLCBsYWJlbDogd2dVTFMoJzHkuKrmnIgnLCAnMeWAi+aciCcpfSxcblx0XHRcdFx0XHRcdFx0e2RhdGE6ICczIG1vbnRocycsIGxhYmVsOiB3Z1VMUygnM+S4quaciCcsICcz5YCL5pyIJyl9LFxuXHRcdFx0XHRcdFx0XHR7ZGF0YTogJzYgbW9udGhzJywgbGFiZWw6IHdnVUxTKCc25Liq5pyIJywgJzblgIvmnIgnKX0sXG5cdFx0XHRcdFx0XHRcdHtkYXRhOiAnMSB5ZWFyJywgbGFiZWw6ICcx5bm0J30sXG5cdFx0XHRcdFx0XHRcdHtkYXRhOiAnaW5maW5pdGUnLCBsYWJlbDogd2dVTFMoJ+ayoeacieacn+mZkCcsICfmspLmnInmnJ/pmZAnKX0sXG5cdFx0XHRcdFx0XHRcdHtkYXRhOiAnb3RoZXInLCBsYWJlbDogd2dVTFMoJ+WFtuS7luaXtumXtCcsICflhbbku5bmmYLplpMnKX0sXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0dmFsdWU6ICdpbmZpbml0ZScsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR0ZXh0aW5wdXQ6IHtcblx0XHRcdFx0XHRcdHJlcXVpcmVkOiB0cnVlLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9KSBhcyBPTy51aS5XaWRnZXQ7XG5cdFx0XHREaWFsb2cuY2xvc2luZ1JlbWFya3NJbnB1dCA9IG5ldyBPTy51aS5UZXh0SW5wdXRXaWRnZXQoe1xuXHRcdFx0XHR2YWx1ZTogJ3t7ZG9uZX19LS1+fn5+Jyxcblx0XHRcdH0pO1xuXHRcdFx0RGlhbG9nLndhdGNoVGFsa1BhZ2VDaGVja2JveCA9IG5ldyBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0KHtcblx0XHRcdFx0c2VsZWN0ZWQ6IGZhbHNlLFxuXHRcdFx0fSk7XG5cdFx0XHRjb25zdCBmb3JtRWxlbWVudHMgPSBbXG5cdFx0XHRcdG5ldyBPTy51aS5GaWVsZExheW91dChEaWFsb2cucmlnaHRzQ2hhbmdlU3VtbWFyeUlucHV0LCB7XG5cdFx0XHRcdFx0bGFiZWw6IHdnVUxTKCfmjojmnYPljp/lm6AnLCAn5o6I5qyK5Y6f5ZugJyksXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoRGlhbG9nLmV4cGlyeUlucHV0LCB7XG5cdFx0XHRcdFx0bGFiZWw6IHdnVUxTKCfnu5PmnZ/ml7bpl7QnLCAn57WQ5p2f5pmC6ZaTJyksXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoRGlhbG9nLmNsb3NpbmdSZW1hcmtzSW5wdXQsIHtcblx0XHRcdFx0XHRsYWJlbDogd2dVTFMoJ+WFs+mXreivt+axgueVmeiogCcsICfpl5zplonoq4vmsYLnlZnoqIAnKSxcblx0XHRcdFx0fSksXG5cdFx0XHRdO1xuXHRcdFx0aWYgKHBlcm1pc3Npb25UZW1wbGF0ZSkge1xuXHRcdFx0XHRmb3JtRWxlbWVudHMucHVzaChcblx0XHRcdFx0XHRuZXcgT08udWkuRmllbGRMYXlvdXQoRGlhbG9nLndhdGNoVGFsa1BhZ2VDaGVja2JveCwge1xuXHRcdFx0XHRcdFx0bGFiZWw6IHdnVUxTKCfnm5Hop4bnlKjmiLforqjorrrpobUnLCAn55uj6KaW5L2/55So6ICF6KiO6KuW6aCBJyksXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdERpYWxvZy5lZGl0RmllbGRzZXQuYWRkSXRlbXMoZm9ybUVsZW1lbnRzKTtcblx0XHRcdERpYWxvZy5zdWJtaXRQYW5lbCA9IG5ldyBPTy51aS5QYW5lbExheW91dCh7XG5cdFx0XHRcdGV4cGFuZGVkOiBmYWxzZSxcblx0XHRcdH0pO1xuXHRcdFx0RGlhbG9nLnN1Ym1pdEZpZWxkc2V0ID0gbmV3IE9PLnVpLkZpZWxkc2V0TGF5b3V0KHtcblx0XHRcdFx0Y2xhc3NlczogWydjb250YWluZXInXSxcblx0XHRcdH0pO1xuXHRcdFx0RGlhbG9nLnN1Ym1pdFBhbmVsLiRlbGVtZW50LmFwcGVuZChEaWFsb2cuc3VibWl0RmllbGRzZXQuJGVsZW1lbnQpO1xuXHRcdFx0RGlhbG9nLnN1Ym1pdFBhbmVsLiRlbGVtZW50LmFwcGVuZChEaWFsb2cuc3VibWl0RmllbGRzZXQuJGVsZW1lbnQpO1xuXHRcdFx0RGlhbG9nLnN0YWNrTGF5b3V0ID0gbmV3IE9PLnVpLlN0YWNrTGF5b3V0KHtcblx0XHRcdFx0aXRlbXM6IFtEaWFsb2cuZWRpdFBhbmVsLCBEaWFsb2cuc3VibWl0UGFuZWxdLFxuXHRcdFx0XHRwYWRkZWQ6IHRydWUsXG5cdFx0XHR9KTtcblx0XHRcdCh0aGlzLiRib2R5IGFzIEpRdWVyeSkuYXBwZW5kKERpYWxvZy5zdGFja0xheW91dC4kZWxlbWVudCk7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblx0XHRwdWJsaWMgc3RhdGljIG9uU3VibWl0KCkge1xuXHRcdFx0dm9pZCBtYXJrQXNEb25lKHt1c2VyTmFtZSwgaW5kZXgsIGNsb3NpbmdSZW1hcmtzOiBgXFxuOiR7RGlhbG9nLmNsb3NpbmdSZW1hcmtzSW5wdXQuZ2V0VmFsdWUoKX1gfSlcblx0XHRcdFx0LnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdFx0XHR2b2lkIGFzc2lnblBlcm1pc3Npb24oe1xuXHRcdFx0XHRcdFx0dXNlck5hbWUsXG5cdFx0XHRcdFx0XHRwZXJtaXNzaW9uLFxuXHRcdFx0XHRcdFx0c3VtbWFyeTogRGlhbG9nLnJpZ2h0c0NoYW5nZVN1bW1hcnlJbnB1dC5nZXRWYWx1ZSgpLFxuXHRcdFx0XHRcdFx0cmV2SWQ6IE51bWJlci5wYXJzZUludChkYXRhWydlZGl0J10ubmV3cmV2aWQgYXMgc3RyaW5nLCAxMCksXG5cdFx0XHRcdFx0XHRleHBpcnk6IChEaWFsb2cuZXhwaXJ5SW5wdXQgYXMgT08udWkuVGV4dElucHV0V2lkZ2V0KS5nZXRWYWx1ZSgpLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0dm9pZCBpc3N1ZVRlbXBsYXRlKHt1c2VyTmFtZSwgcGVybWlzc2lvbiwgd2F0Y2g6IERpYWxvZy53YXRjaFRhbGtQYWdlQ2hlY2tib3guaXNTZWxlY3RlZCgpfSk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdGxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdFx0XHRcdH0sIDEwMDApO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0RGlhbG9nLnN0YWNrTGF5b3V0LnNldEl0ZW0oRGlhbG9nLnN1Ym1pdFBhbmVsKTtcblx0XHR9XG5cdFx0c3RhdGljIHB1c2hQZW5kaW5nKCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuXHRcdH1cblx0XHRzdGF0aWMgcG9wUGVuZGluZygpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcblx0XHR9XG5cblx0XHRwdWJsaWMgb3ZlcnJpZGUgZ2V0QWN0aW9uUHJvY2VzcyhhY3Rpb24/OiBzdHJpbmcpOiBPTy51aS5Qcm9jZXNzIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdHN1cGVyXG5cdFx0XHRcdFx0LmdldEFjdGlvblByb2Nlc3MoYWN0aW9uKVxuXHRcdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFM3MDMwXG5cdFx0XHRcdFx0Lm5leHQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0aWYgKGFjdGlvbiA9PT0gJ3N1Ym1pdCcpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIERpYWxvZy5vblN1Ym1pdCgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cmV0dXJuIERpYWxvZy5zdXBlci5wcm90b3R5cGUuZ2V0QWN0aW9uUHJvY2Vzcy5jYWxsKHRoaXMsIGFjdGlvbik7XG5cdFx0XHRcdFx0fSwgdGhpcylcblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cdERpYWxvZy5zdGF0aWMgPSB7XG5cdFx0Li4uT08udWkuUHJvY2Vzc0RpYWxvZy5zdGF0aWMsXG5cdH07XG5cdERpYWxvZy5zdGF0aWMubmFtZSA9ICd1c2VyLXJpZ2h0cy1tYW5hZ2VyJztcblx0RGlhbG9nLnN0YXRpYy50aXRsZSA9IGDmjojkuogke3Blcm1pc3Npb25OYW1lfSR7d2dVTFMoJ+e7mScsICfntaYnKX0ke3VzZXJOYW1lfWA7XG5cdERpYWxvZy5zdGF0aWMuYWN0aW9ucyA9IFtcblx0XHR7YWN0aW9uOiAnc3VibWl0JywgbGFiZWw6IHdnVUxTKCfmjojmnYMnLCAn5o6I5qyKJyksIGZsYWdzOiBbJ3ByaW1hcnknLCAncHJvZ3Jlc3NpdmUnXX0sXG5cdFx0e2xhYmVsOiAn5Y+W5raIJywgZmxhZ3M6ICdzYWZlJ30sXG5cdF07XG5cblx0Y29uc3QgZGlhbG9nID0gbmV3IERpYWxvZygpO1xuXG5cdGNvbnN0IHdpbmRvd01hbmFnZXIgPSBuZXcgT08udWkuV2luZG93TWFuYWdlcigpO1xuXHQkKCdib2R5JykuYXBwZW5kKHdpbmRvd01hbmFnZXIuJGVsZW1lbnQpO1xuXHR3aW5kb3dNYW5hZ2VyLmFkZFdpbmRvd3MoW2RpYWxvZ10pO1xuXHR2b2lkIHdpbmRvd01hbmFnZXIub3BlbldpbmRvdyhkaWFsb2cpO1xufTtcblxuZXhwb3J0IHtzaG93RGlhbG9nfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFzQkMsUUFBQSxpQkFBQTs7QUNFdEIsSUFBTUMscUJBQXFCQSxNQUF5QjtBQUNuRCxRQUFNO0lBQUNDO0VBQVUsSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUVuQyxRQUFNQyxrQkFBa0I7SUFDdkIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIseUJBQXlCO0VBQzFCO0FBRUEsTUFBSUMsYUFBZ0M7QUFDcEMsV0FBQUMsS0FBQSxHQUFBQyxrQkFBeUNDLE9BQU9DLFFBQVFMLGVBQWUsR0FBQUUsS0FBQUMsZ0JBQUFHLFFBQUFKLE1BQUc7QUFBMUUsVUFBVyxDQUFDSyxVQUFVQyxjQUFjLElBQUFMLGdCQUFBRCxFQUFBO0FBQ25DLFFBQUlLLGFBQWFYLFlBQVk7QUFDNUJLLG1CQUFhTztJQUNkLE9BQU87QUFDTjtJQUNEO0VBQ0Q7QUFFQSxTQUFPUDtBQUNSOztBQ3hCQyxJQUFBUSwyQkFBNEI7QUFDNUIsSUFBQUMsVUFBVzs7QUNEWixJQUFBQyxvQkFBd0JqQixRQUFBLGlCQUFBO0FBRXhCLElBQU1rQixPQUFBLEdBQWNELGtCQUFBRSxXQUFBLGtDQUFBQyxPQUFvREosT0FBTyxDQUFFOztBQ0RqRixJQUFNSyxxQkFBc0JkLGdCQUEwQztBQUNyRSxRQUFNZSxrQkFBa0I7SUFDdkJDLFdBQVc7SUFDWEMsZUFBZTtJQUNmQyxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCQyxVQUFVO0lBQ1ZDLGdCQUFnQjtJQUNoQkMsS0FBSztJQUNMLHFCQUFxQjtJQUNyQixrQkFBa0I7RUFDbkI7QUFFQSxNQUFJQyxpQkFBZ0M7QUFDcEMsV0FBQUMsTUFBQSxHQUFBQyxtQkFBNEJyQixPQUFPQyxRQUFRVyxlQUFlLEdBQUFRLE1BQUFDLGlCQUFBbkIsUUFBQWtCLE9BQUc7QUFBN0QsVUFBVyxDQUFDRSxPQUFPQyxJQUFJLElBQUFGLGlCQUFBRCxHQUFBO0FBQ3RCLFFBQUl2QixlQUFleUIsT0FBTztBQUN6QkgsdUJBQWlCSTtJQUNsQixPQUFPO0FBQ047SUFDRDtFQUNEO0FBRUEsU0FBT0o7QUFDUjs7QUNwQkEsSUFBTUssbUJBQW1CQSxDQUFDO0VBQ3pCQztFQUNBNUI7RUFDQTZCO0VBQ0FDO0VBQ0FDO0FBQ0QsTUFNTTtBQUNMLFFBQU1DLFlBQUEsdUJBQUFuQixPQUFtQ2lCLE9BQUssUUFBQSxFQUFBakIsT0FBU2UsVUFBUSxTQUFBO0FBQy9ELE1BQUlLLGNBQUEsSUFBQXBCLE9BQWtCQyxtQkFBbUJkLFVBQVUsR0FBQyxHQUFBLEVBQUFhLE9BQUltQixTQUFTO0FBQ2pFLE1BQUlILFlBQVksSUFBSTtBQUNuQkksbUJBQUEsSUFBQXBCLE9BQW1CZ0IsT0FBTztFQUMzQjtBQUNBSSxpQkFBdUJ6QjtBQUN2QixRQUFNMEIsU0FBOEI7SUFDbkNDLFFBQVE7SUFDUkMsTUFBTVIsU0FBU1MsUUFBUSxNQUFNLEdBQUc7SUFDaENDLFFBQVFMOztJQUVSTSxLQUFLLENBQUN2QyxVQUFVO0lBQ2hCK0IsUUFBUUEsV0FBVyxLQUFLLGFBQWFBO0VBQ3RDO0FBQ0EsTUFBSS9CLGVBQWUsZUFBZStCLFdBQVcsWUFBWTtBQUN4REcsV0FBT00sU0FBUztFQUNqQjtBQUNBLFNBQU83QixJQUFJOEIsY0FBYyxjQUFjUCxNQUFNO0FBQzlDOztBQ2xDQSxJQUFNUSx3QkFBeUIxQyxnQkFBMEM7QUFDeEUsUUFBTTJDLHNCQUFzQjtJQUMzQjNCLFdBQVc7SUFDWEMsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QkcsZ0JBQWdCO0lBQ2hCRCxVQUFVO0VBQ1g7QUFFQSxNQUFJeUIsV0FBMEI7QUFDOUIsV0FBQUMsTUFBQSxHQUFBQyxtQkFBNkMzQyxPQUFPQyxRQUFRdUMsbUJBQW1CLEdBQUFFLE1BQUFDLGlCQUFBekMsUUFBQXdDLE9BQUc7QUFBbEYsVUFBVyxDQUFDdEMsZ0JBQWdCd0MsWUFBWSxJQUFBRCxpQkFBQUQsR0FBQTtBQUN2QyxRQUFJN0MsZUFBZU8sZ0JBQWdCO0FBQ2xDcUMsaUJBQVdHO0lBQ1osT0FBTztBQUNOO0lBQ0Q7RUFDRDtBQUVBLFNBQU9IO0FBQ1I7O0FDZEEsSUFBTUksZ0JBQWdCQSxDQUFDO0VBQ3RCcEI7RUFDQTVCO0VBQ0FpRDtBQUNELE1BSTBDO0FBQ3pDLFFBQU1DLHFCQUFxQlIsc0JBQXNCMUMsVUFBVTtBQUMzRCxNQUFJLENBQUNrRCxvQkFBb0I7QUFDeEI7RUFDRDtBQUVBLFFBQU01QixpQkFBaUJSLG1CQUFtQmQsVUFBVTtBQUNwRCxRQUFNbUQsV0FBQSxhQUFBdEMsT0FBd0JlLFNBQVNTLFFBQVEsTUFBTSxHQUFHLENBQUM7QUFDekQsUUFBTUgsU0FBNEI7SUFDakNDLFFBQVE7SUFDUmlCLFFBQVE7SUFDUkMsT0FBT0Y7SUFDUEcsWUFBWSxTQUFTekMsT0FBTyxVQUFVcUMsb0JBQW9CLElBQUk7SUFDOURyQixTQUFBLFNBQUFoQixPQUFrQlMsY0FBYyxFQUFBVCxPQUFXTCx3QkFBd0I7SUFDbkUrQyxXQUFXTixRQUFRLFVBQVU7RUFDOUI7QUFDQSxTQUFPdEMsSUFBSTZDLGtCQUFrQnRCLE1BQU07QUFDcEM7O0FDOUJBLElBQU11QixVQUFrQmpEO0FBRXhCLElBQU1rRCxpQkFBQSw0QkFBQTtBQUFBLE1BQUFDLE9BQUFDLGtCQUFpQixXQUFPQyxRQUEyQkMsV0FBc0I7QUFDOUUsVUFBTTVCLFNBQWtDO01BQ3ZDMkI7TUFDQUM7TUFDQTNCLFFBQVE7TUFDUmlCLFFBQVE7TUFDUlcsZUFBZTtNQUNmQyxNQUFNO01BQ05DLGNBQWM7TUFDZEMsUUFBUSxDQUFDLFdBQVcsV0FBVztNQUMvQkMsU0FBUztJQUNWO0FBRUEsV0FBQSxNQUFheEQsSUFBSWIsSUFBSW9DLE1BQU07RUFDNUIsQ0FBQTtBQUFBLFNBQUEsU0FkTXdCLGdCQUFBVSxJQUFBQyxLQUFBO0FBQUEsV0FBQVYsS0FBQVcsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxHQUFBO0FBZ0JOLElBQU1DLGFBQWFBLENBQUM7RUFBQzVDO0VBQVU2QztFQUFPQztBQUFjLE1BQWlFO0FBQ3BILFFBQU07SUFBQy9FO0lBQVlnRjtFQUFVLElBQUkvRSxHQUFHQyxPQUFPQyxJQUFJO0FBRS9DLFFBQU04RSxjQUFjQyxTQUFTQyxlQUFBLFFBQUFqRSxPQUNwQmUsU0FBU1MsUUFBUSxNQUFNLEtBQUssRUFBRUEsUUFBUSxNQUFNLEdBQUcsQ0FBQyxFQUFBeEIsT0FBRzRELFVBQUEsUUFBQUEsVUFBQSxTQUFBQSxRQUFTLEVBQUUsQ0FDdkU7QUFFQSxRQUFNTSxnQkFFSkMsRUFBRUosV0FBMEIsRUFDMUJLLFNBQVMsaUJBQWlCLEVBQzFCQyxLQUFLLGlEQUFpRCxFQUN0RGxCLEtBQUssTUFBTSxFQUNabUIsTUFBTSxlQUFlLEVBQ3RCLENBQUM7QUFFSCxNQUFJQztBQUNKLE1BQUluQjtBQUNKLE1BQUlvQjtBQUNKLE1BQUlDO0FBRUosU0FBTzVCLGVBQWUvRCxZQUFZb0YsYUFBYSxFQUM3Q1EsS0FBTUMsVUFBUztBQUNmLFFBQUksQ0FBQ0EsS0FBSyxPQUFPLEtBQUssQ0FBQ0EsS0FBSyxPQUFPLEVBQUVDLE9BQU87QUFDM0MsYUFBT1QsRUFBRVUsU0FBUyxFQUFFQyxPQUFPLFNBQVM7SUFDckM7QUFFQSxVQUFNO01BQUNGO0lBQUssSUFBSUQsS0FBSyxPQUFPO0FBYzVCLFVBQU0sQ0FBQ0ksSUFBSSxJQUFJSDtBQUVmLFFBQUksQ0FBQ0csUUFBUUEsS0FBS0MsU0FBUztBQUMxQixhQUFPYixFQUFFVSxTQUFTLEVBQUVDLE9BQU8sY0FBYztJQUMxQztBQUVBLFFBQUlDLEtBQUtFLFNBQVM7QUFDakIsYUFBT2QsRUFBRVUsU0FBUyxFQUFFQyxPQUFPLGtCQUFrQjtJQUM5QztBQUVBLEtBQUNMLFFBQVEsSUFBSU0sS0FBS0c7QUFDbEIsUUFBSVQsVUFBVTtBQUNiLE9BQUM7UUFDQVUsT0FBTztVQUNOQyxNQUFNO1lBQUNaO1VBQU87UUFDZjtRQUNBYSxXQUFXZDtNQUNaLElBQUlFO0lBQ0w7QUFDQXJCLG1CQUFldUIsS0FBSyxjQUFjO0FBQ2xDLFdBQU9SLEVBQUVVLFNBQVMsRUFBRVMsUUFBUTtFQUM3QixDQUFDLEVBQ0FaLEtBQUssTUFBTTtBQUNYRixjQUFVQSxRQUFRZSxLQUFLO0FBQ3ZCZixjQUFVQSxRQUFRaEQsUUFBUSw2QkFBNkIsUUFBUTtBQUMvRGdELGVBQVdYO0FBRVgsVUFBTTJCLGFBQWdDO01BQ3JDbEUsUUFBUTtNQUNSaUIsUUFBUTtNQUNSVyxlQUFlO01BQ2ZWLE9BQU8xRDtNQUNQMkcsU0FBU3ZCO01BQ1R3QixNQUFNbEI7TUFDTnhELFNBQUEsV0FBQWhCLE9BQW9CZSxVQUFRLFFBQUEsRUFBQWYsT0FBUzRDLE9BQU87TUFDNUMyQjtNQUNBb0IsZ0JBQWdCdkM7TUFDaEJ3QyxVQUFVO0lBQ1g7QUFDQSxRQUFJOUIsWUFBWTtBQUNmMEIsaUJBQVdLLFNBQVM7SUFDckI7QUFFQSxXQUFPL0YsSUFBSTZDLGtCQUFrQjZDLFVBQVU7RUFDeEMsQ0FBQztBQUNIOztBQ2xHQSxJQUFNTSxhQUFhLFNBQVNDLFlBQVc7RUFDdENDO0VBQ0FqRjtFQUNBNUI7RUFDQXlFO0FBQ0QsR0FLRztBQUNGLFFBQU07SUFBQ3FDO0VBQUssSUFBSUM7QUFDaEIsUUFBTTdELHFCQUFxQlIsc0JBQXNCMUMsVUFBVTtBQUMzRCxRQUFNc0IsaUJBQWlCUixtQkFBbUJkLFVBQVU7RUFFcEQsTUFBTWdILGVBQWVDLEdBQUdDLEdBQUdDLGNBQWM7SUFDeEMsT0FBZUM7SUFDZixPQUFlQztJQUNmLE9BQWVDO0lBQ2YsT0FBZUM7SUFDZixPQUFlQztJQUNmLE9BQWVDO0lBQ2YsT0FBZUM7SUFDZixPQUFlQztJQUNmLE9BQWVDO0lBQ2YsT0FBZUM7SUFDUGhCO0lBRURpQixjQUFjO0FBQ3BCLFlBQU07UUFDTEMsTUFBTTtNQUNQLENBQUM7SUFDRjs7SUFFZ0JDLGdCQUFnQjtBQUMvQixhQUFPO0lBQ1I7SUFDZ0JDLGFBQWE7QUFDNUIsWUFBTUEsV0FBVztBQUNqQmpCLGFBQU9JLFlBQVksSUFBSUgsR0FBR0MsR0FBR2dCLFlBQVk7UUFDeENDLFVBQVU7TUFDWCxDQUFDO0FBQ0QsWUFBTUMsaUJBQWlCcEQsRUFBRSxRQUFRO0FBQ2pDLFlBQU1xRCxNQUFNekksR0FBRzBJLEtBQUtDLE9BQU8sc0JBQXNCO1FBQUNDLE1BQU07UUFBVTVDLE1BQUEsUUFBQS9FLE9BQWNlLFFBQVE7TUFBRSxDQUFDO0FBQzNGb0QsUUFBRSxLQUFLLEVBQ0x1QixLQUFLTyxNQUFNLFVBQVUsUUFBUSxDQUFDLEVBQzlCMkIsS0FBSztRQUFDQyxNQUFNTDtRQUFLTSxRQUFRO01BQVEsQ0FBQyxFQUNsQ0MsU0FBU1IsY0FBYztBQUN6QkEscUJBQWVTLE9BQU8sR0FBRztBQUN6QixZQUFNQyxlQUFlOUQsRUFBRSxRQUFRLEVBQUV1QixLQUFLTyxNQUFNLE9BQU8sS0FBSyxDQUFDLEVBQUU4QixTQUFTUixjQUFjO0FBQ2xGcEIsYUFBT0ssV0FBVyxJQUFJSixHQUFHQyxHQUFHNkIsWUFBWTtRQUN2Q0MsT0FBT1o7TUFDUixDQUFDO0FBQ0RwQixhQUFPSSxVQUFVNkIsU0FBU0osT0FBTzdCLE9BQU9LLFNBQVM0QixRQUFRO0FBRXpELFlBQU1DLHVCQUFnRDtRQUNyRC9HLFFBQVE7UUFDUmlCLFFBQVE7UUFDUitGLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxTQUFBLFFBQUF4SSxPQUFpQmUsUUFBUTtRQUN6QjBILFNBQVM7TUFDVjtBQUVBLFdBQUszSSxJQUFJYixJQUFJb0osb0JBQW9CLEVBQUVLLEtBQU0vRCxVQUFTO0FBQ2pELGNBQU07VUFBQ2dFLFdBQVdDO1FBQUksSUFBSWpFLEtBQUssT0FBTztBQVF0QyxZQUFJaUUsS0FBS3BKLFdBQVcsS0FBSyxDQUFDb0osS0FBSyxDQUFDLEdBQUc7QUFDbENYLHVCQUFhdkMsS0FBS08sTUFBTSxVQUFVLFFBQVEsQ0FBQztRQUM1QyxPQUFPO0FBR04sZ0JBQU1aLFlBQVksSUFBSXdELFNBQVNDLEtBQUtGLEtBQUssQ0FBQyxFQUFFdkQsU0FBUyxFQUFFMEQsU0FBUztBQUNoRSxnQkFBTUMsU0FBU0osS0FBSyxDQUFDLEVBQUV2SCxPQUFPNEgsVUFBVUMsS0FBSyxHQUFHLEtBQUtqRCxNQUFNLE9BQU8sS0FBSztBQUN2RWdDLHVCQUFhdkMsS0FBQSxHQUFBMUYsT0FDVHFGLFdBQVMsR0FBQSxFQUFBckYsT0FBSTRJLEtBQUssQ0FBQyxFQUFFckgsSUFBSSxFQUFBdkIsT0FBR2lHLE1BQU0sVUFBVSxVQUFVLENBQUMsRUFBQWpHLE9BQUdnSixNQUFNLENBQ3BFO1FBQ0Q7TUFDRCxDQUFDO0FBRUQ3QyxhQUFPTSxlQUFlLElBQUlMLEdBQUdDLEdBQUc4QyxlQUFlO1FBQzlDQyxTQUFTLENBQUMsV0FBVztNQUN0QixDQUFDO0FBQ0RqRCxhQUFPSSxVQUFVNkIsU0FBU0osT0FBTzdCLE9BQU9NLGFBQWEyQixRQUFRO0FBRTdEakMsYUFBT08sMkJBQTJCLElBQUlOLEdBQUdDLEdBQUdnRCxnQkFBZ0I7UUFDM0RDLE9BQU87UUFDUEMsYUFBYTtNQUNkLENBQUM7QUFFRHBELGFBQU9RLGNBQWMsSUFBSzVILEdBQVd5SyxRQUFRQyxhQUFhO1FBQ3pEQyxVQUFVMUQsTUFBTTNCLEtBQUssZUFBZTs7UUFFcENzRixvQkFBcUI1SyxHQUFXeUssUUFBUUk7UUFDeENDLGVBQWU7VUFDZEMsSUFBSTtVQUNKQyxlQUFlO1lBQ2RDLFNBQVMsQ0FDUjtjQUFDckYsTUFBTTtjQUFTd0QsT0FBTztZQUFJLEdBQzNCO2NBQUN4RCxNQUFNO2NBQVV3RCxPQUFPbEMsTUFBTSxNQUFNLElBQUk7WUFBQyxHQUN6QztjQUFDdEIsTUFBTTtjQUFXd0QsT0FBT2xDLE1BQU0sT0FBTyxLQUFLO1lBQUMsR0FDNUM7Y0FBQ3RCLE1BQU07Y0FBWXdELE9BQU9sQyxNQUFNLE9BQU8sS0FBSztZQUFDLEdBQzdDO2NBQUN0QixNQUFNO2NBQVl3RCxPQUFPbEMsTUFBTSxPQUFPLEtBQUs7WUFBQyxHQUM3QztjQUFDdEIsTUFBTTtjQUFVd0QsT0FBTztZQUFJLEdBQzVCO2NBQUN4RCxNQUFNO2NBQVl3RCxPQUFPbEMsTUFBTSxRQUFRLE1BQU07WUFBQyxHQUMvQztjQUFDdEIsTUFBTTtjQUFTd0QsT0FBT2xDLE1BQU0sUUFBUSxNQUFNO1lBQUMsQ0FBQTtZQUU3Q3FELE9BQU87VUFDUjtVQUNBVyxXQUFXO1lBQ1ZDLFVBQVU7VUFDWDtRQUNEO01BQ0QsQ0FBQztBQUNEL0QsYUFBT1Msc0JBQXNCLElBQUlSLEdBQUdDLEdBQUdnRCxnQkFBZ0I7UUFDdERDLE9BQU87TUFDUixDQUFDO0FBQ0RuRCxhQUFPVSx3QkFBd0IsSUFBSVQsR0FBR0MsR0FBRzhELG9CQUFvQjtRQUM1REMsVUFBVTtNQUNYLENBQUM7QUFDRCxZQUFNQyxlQUFlLENBQ3BCLElBQUlqRSxHQUFHQyxHQUFHaUUsWUFBWW5FLE9BQU9PLDBCQUEwQjtRQUN0RHlCLE9BQU9sQyxNQUFNLFFBQVEsTUFBTTtNQUM1QixDQUFDLEdBQ0QsSUFBSUcsR0FBR0MsR0FBR2lFLFlBQVluRSxPQUFPUSxhQUFhO1FBQ3pDd0IsT0FBT2xDLE1BQU0sUUFBUSxNQUFNO01BQzVCLENBQUMsR0FDRCxJQUFJRyxHQUFHQyxHQUFHaUUsWUFBWW5FLE9BQU9TLHFCQUFxQjtRQUNqRHVCLE9BQU9sQyxNQUFNLFVBQVUsUUFBUTtNQUNoQyxDQUFDLENBQUE7QUFFRixVQUFJNUQsb0JBQW9CO0FBQ3ZCZ0kscUJBQWFFLEtBQ1osSUFBSW5FLEdBQUdDLEdBQUdpRSxZQUFZbkUsT0FBT1UsdUJBQXVCO1VBQ25Ec0IsT0FBT2xDLE1BQU0sV0FBVyxVQUFVO1FBQ25DLENBQUMsQ0FDRjtNQUNEO0FBQ0FFLGFBQU9NLGFBQWErRCxTQUFTSCxZQUFZO0FBQ3pDbEUsYUFBT1csY0FBYyxJQUFJVixHQUFHQyxHQUFHZ0IsWUFBWTtRQUMxQ0MsVUFBVTtNQUNYLENBQUM7QUFDRG5CLGFBQU9ZLGlCQUFpQixJQUFJWCxHQUFHQyxHQUFHOEMsZUFBZTtRQUNoREMsU0FBUyxDQUFDLFdBQVc7TUFDdEIsQ0FBQztBQUNEakQsYUFBT1csWUFBWXNCLFNBQVNKLE9BQU83QixPQUFPWSxlQUFlcUIsUUFBUTtBQUNqRWpDLGFBQU9XLFlBQVlzQixTQUFTSixPQUFPN0IsT0FBT1ksZUFBZXFCLFFBQVE7QUFDakVqQyxhQUFPYSxjQUFjLElBQUlaLEdBQUdDLEdBQUdvRSxZQUFZO1FBQzFDQyxPQUFPLENBQUN2RSxPQUFPSSxXQUFXSixPQUFPVyxXQUFXO1FBQzVDNkQsUUFBUTtNQUNULENBQUM7QUFDQSxXQUFLM0UsTUFBaUJnQyxPQUFPN0IsT0FBT2EsWUFBWW9CLFFBQVE7QUFFekQsYUFBTztJQUNSO0lBQ0EsT0FBY3dDLFdBQVc7QUFDeEIsV0FBS2pILFdBQVc7UUFBQzVDO1FBQVU2QztRQUFPQyxnQkFBQSxNQUFBN0QsT0FBc0JtRyxPQUFPUyxvQkFBb0JpRSxTQUFTLENBQUM7TUFBRSxDQUFDLEVBQzlGbkcsS0FBTUMsVUFBUztBQUNmLGFBQUs3RCxpQkFBaUI7VUFDckJDO1VBQ0E1QjtVQUNBNkIsU0FBU21GLE9BQU9PLHlCQUF5Qm1FLFNBQVM7VUFDbEQ1SixPQUFPNkosT0FBT0MsU0FBU3BHLEtBQUssTUFBTSxFQUFFcUcsVUFBb0IsRUFBRTtVQUMxRDlKLFFBQVNpRixPQUFPUSxZQUFzQ2tFLFNBQVM7UUFDaEUsQ0FBQztNQUNGLENBQUMsRUFDQW5HLEtBQUssTUFBTTtBQUNYLGFBQUt2QyxjQUFjO1VBQUNwQjtVQUFVNUI7VUFBWWlELE9BQU8rRCxPQUFPVSxzQkFBc0JvRSxXQUFXO1FBQUMsQ0FBQztNQUM1RixDQUFDLEVBQ0F2RyxLQUFLLE1BQU07QUFDWHdHLG1CQUFXLE1BQU07QUFDaEJDLG1CQUFTQyxPQUFPO1FBQ2pCLEdBQUcsR0FBSTtNQUNSLENBQUM7QUFFRmpGLGFBQU9hLFlBQVlxRSxRQUFRbEYsT0FBT1csV0FBVztJQUM5QztJQUNBLE9BQU93RSxjQUFjO0FBQ3BCLFlBQU0sSUFBSUMsTUFBTSx5QkFBeUI7SUFDMUM7SUFDQSxPQUFPQyxhQUFhO0FBQ25CLFlBQU0sSUFBSUQsTUFBTSx5QkFBeUI7SUFDMUM7SUFFZ0JFLGlCQUFpQm5LLFFBQWdDO0FBQ2hFLGFBQ0MsTUFDRW1LLGlCQUFpQm5LLE1BQU0sRUFFdkJvSyxLQUFLLFdBQVk7QUFDakIsWUFBSXBLLFdBQVcsVUFBVTtBQUN4QixpQkFBTzZFLE9BQU95RSxTQUFTO1FBQ3hCO0FBQ0EsZUFBT3pFLE9BQU93RixNQUFNQyxVQUFVSCxpQkFBaUJJLEtBQUssTUFBTXZLLE1BQU07TUFDakUsR0FBRyxJQUFJO0lBRVY7RUFDRDtBQUNBNkUsU0FBTzJGLFNBQVM7SUFDZixHQUFHMUYsR0FBR0MsR0FBR0MsY0FBY3dGO0VBQ3hCO0FBQ0EzRixTQUFPMkYsT0FBT2pMLE9BQU87QUFDckJzRixTQUFPMkYsT0FBT3RKLFFBQUEsS0FBQXhDLE9BQWFTLGNBQWMsRUFBQVQsT0FBR2lHLE1BQU0sS0FBSyxHQUFHLENBQUMsRUFBQWpHLE9BQUdlLFFBQVE7QUFDdEVvRixTQUFPMkYsT0FBT0MsVUFBVSxDQUN2QjtJQUFDekssUUFBUTtJQUFVNkcsT0FBT2xDLE1BQU0sTUFBTSxJQUFJO0lBQUcrRixPQUFPLENBQUMsV0FBVyxhQUFhO0VBQUMsR0FDOUU7SUFBQzdELE9BQU87SUFBTTZELE9BQU87RUFBTSxDQUFBO0FBRzVCLFFBQU1DLFNBQVMsSUFBSTlGLE9BQU87QUFFMUIsUUFBTStGLGdCQUFnQixJQUFJOUYsR0FBR0MsR0FBRzhGLGNBQWM7QUFDOUNoSSxJQUFFLE1BQU0sRUFBRTZELE9BQU9rRSxjQUFjOUQsUUFBUTtBQUN2QzhELGdCQUFjRSxXQUFXLENBQUNILE1BQU0sQ0FBQztBQUNqQyxPQUFLQyxjQUFjRyxXQUFXSixNQUFNO0FBQ3JDOztBVGhPQSxNQUFBLEdBQUt0TixtQkFBQTJOLFNBQVEsRUFBRTVILEtBQU1zQixXQUF5QztBQUM3RCxRQUFNN0csYUFBYU4sbUJBQW1CO0FBQ3RDLE1BQUksQ0FBQ00sWUFBWTtBQUNoQjtFQUNEO0FBRUE2RyxRQUFNM0IsS0FBSyw0QkFBNEIsRUFBRWtJLEdBQUcsU0FBUyxTQUFVQyxPQUFPO0FBQUEsUUFBQUM7QUFDckVELFVBQU1FLGVBQWU7QUFFckIsVUFBTXRFLFdBQXNDakUsRUFBRSxJQUF5QjtBQUN2RSxVQUFNcEQsV0FBV2hDLEdBQUcwSSxLQUFLa0YsY0FBYyxRQUFRdkUsU0FBU1IsS0FBSyxNQUFNLENBQUM7QUFDcEUsUUFBSSxDQUFDN0csVUFBVTtBQUNkO0lBQ0Q7QUFFQSxVQUFNNkwsYUFBQUgsd0JBQW9CckUsU0FBU3lFLFFBQVEsSUFBSSxFQUFFQyxLQUFLLElBQUksRUFBRXpJLEtBQUssY0FBYyxFQUFFdUQsS0FBSyxJQUFJLE9BQUEsUUFBQTZFLDBCQUFBLFNBQUFBLHdCQUFLO0FBQy9GLFVBQU03SSxRQUNMZ0osY0FBQSxRQUFBNU0sT0FBc0JlLFFBQVEsS0FBTTZMLGNBQWMsUUFBQTVNLE9BQVFlLFFBQVEsRUFBR1MsUUFBUSxNQUFNLEtBQUssRUFBRUEsUUFBUSxNQUFNLEdBQUcsSUFDeEcsS0FDQW9MLFVBQ0NwTCxRQUFRLFNBQVMsRUFBRSxFQUNuQkEsUUFBUVQsVUFBVSxFQUFFLEVBQ3BCUyxRQUFRVCxTQUFTUyxRQUFRLE1BQU0sS0FBSyxFQUFFQSxRQUFRLE1BQU0sR0FBRyxHQUFHLEVBQUU7QUFFakVzRSxlQUFXO01BQUNFO01BQU9qRjtNQUFVNUI7TUFBWXlFO0lBQUssQ0FBQztFQUNoRCxDQUFDO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiZ2V0UGFnZVBlcm1pc3Npb25zIiwgIndnUGFnZU5hbWUiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJwYWdlUGVybWlzc2lvbnMiLCAicGVybWlzc2lvbiIsICJfaSIsICJfT2JqZWN0JGVudHJpZXMiLCAiT2JqZWN0IiwgImVudHJpZXMiLCAibGVuZ3RoIiwgInBhZ2VOYW1lIiwgInBhZ2VQZXJtaXNzaW9uIiwgInVzZXJSaWdodHNNYW5hZ2VyU3VtbWFyeSIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgImdldFBlcm1pc3Npb25OYW1lcyIsICJwZXJtaXNzaW9uTmFtZXMiLCAicGF0cm9sbGVyIiwgImF1dG9wYXRyb2xsZWQiLCAiY29uZmlybWVkIiwgImltcG9ydGVyIiwgInRlbXBsYXRlZWRpdG9yIiwgImJvdCIsICJwZXJtaXNzaW9uTmFtZSIsICJfaTIiLCAiX09iamVjdCRlbnRyaWVzMiIsICJyaWdodCIsICJuYW1lIiwgImFzc2lnblBlcm1pc3Npb24iLCAidXNlck5hbWUiLCAic3VtbWFyeSIsICJyZXZJZCIsICJleHBpcnkiLCAicGVybWFMaW5rIiwgImZ1bGxTdW1tYXJ5IiwgInBhcmFtcyIsICJhY3Rpb24iLCAidXNlciIsICJyZXBsYWNlIiwgInJlYXNvbiIsICJhZGQiLCAicmVtb3ZlIiwgInBvc3RXaXRoVG9rZW4iLCAiZ2V0UGVybWlzc2lvblRlbXBsYXRlIiwgInBlcm1pc3Npb25UZW1wbGF0ZXMiLCAidGVtcGxhdGUiLCAiX2kzIiwgIl9PYmplY3QkZW50cmllczMiLCAidGVtcGxhdGVOYW1lIiwgImlzc3VlVGVtcGxhdGUiLCAid2F0Y2giLCAicGVybWlzc2lvblRlbXBsYXRlIiwgInRhbGtQYWdlIiwgImZvcm1hdCIsICJ0aXRsZSIsICJhcHBlbmR0ZXh0IiwgIndhdGNobGlzdCIsICJwb3N0V2l0aEVkaXRUb2tlbiIsICJ0YWdMaW5lIiwgInF1ZXJ5UmV2aXNpb25zIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidGl0bGVzIiwgInJ2c2VjdGlvbiIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAiY3VydGltZXN0YW1wIiwgInJ2cHJvcCIsICJydnNsb3RzIiwgIl94IiwgIl94MiIsICJhcHBseSIsICJhcmd1bWVudHMiLCAibWFya0FzRG9uZSIsICJpbmRleCIsICJjbG9zaW5nUmVtYXJrcyIsICJ3Z1VzZXJOYW1lIiwgInNlY3Rpb25Ob2RlIiwgImRvY3VtZW50IiwgImdldEVsZW1lbnRCeUlkIiwgInNlY3Rpb25OdW1iZXIiLCAiJCIsICJzaWJsaW5ncyIsICJmaW5kIiwgIm1hdGNoIiwgImJhc2V0aW1lc3RhbXAiLCAiY29udGVudCIsICJyZXZpc2lvbiIsICJ0aGVuIiwgImRhdGEiLCAicGFnZXMiLCAiRGVmZXJyZWQiLCAicmVqZWN0IiwgInBhZ2UiLCAiaW52YWxpZCIsICJtaXNzaW5nIiwgInJldmlzaW9ucyIsICJzbG90cyIsICJtYWluIiwgInRpbWVzdGFtcCIsICJyZXNvbHZlIiwgInRyaW0iLCAiZWRpdFBhcmFtcyIsICJzZWN0aW9uIiwgInRleHQiLCAic3RhcnR0aW1lc3RhbXAiLCAibm9jcmVhdGUiLCAiYXNzZXJ0IiwgInNob3dEaWFsb2ciLCAic2hvd0RpYWxvZzIiLCAiJGJvZHkiLCAid2dVTFMiLCAid2luZG93IiwgIkRpYWxvZyIsICJPTyIsICJ1aSIsICJQcm9jZXNzRGlhbG9nIiwgImVkaXRQYW5lbCIsICJyaWdodExvZyIsICJlZGl0RmllbGRzZXQiLCAicmlnaHRzQ2hhbmdlU3VtbWFyeUlucHV0IiwgImV4cGlyeUlucHV0IiwgImNsb3NpbmdSZW1hcmtzSW5wdXQiLCAid2F0Y2hUYWxrUGFnZUNoZWNrYm94IiwgInN1Ym1pdFBhbmVsIiwgInN1Ym1pdEZpZWxkc2V0IiwgInN0YWNrTGF5b3V0IiwgImNvbnN0cnVjdG9yIiwgInNpemUiLCAiZ2V0Qm9keUhlaWdodCIsICJpbml0aWFsaXplIiwgIlBhbmVsTGF5b3V0IiwgImV4cGFuZGVkIiwgInJpZ2h0TG9nV2FwcGVyIiwgInVybCIsICJ1dGlsIiwgImdldFVybCIsICJ0eXBlIiwgImF0dHIiLCAiaHJlZiIsICJ0YXJnZXQiLCAiYXBwZW5kVG8iLCAiYXBwZW5kIiwgInJpZ2h0TG9nVGV4dCIsICJMYWJlbFdpZGdldCIsICJsYWJlbCIsICIkZWxlbWVudCIsICJxdWVyeUxvZ0V2ZW50c1BhcmFtcyIsICJsaXN0IiwgImxlYWN0aW9uIiwgImxldGl0bGUiLCAibGVsaW1pdCIsICJkb25lIiwgImxvZ2V2ZW50cyIsICJsb2dzIiwgIk1vcmViaXRzIiwgImRhdGUiLCAiY2FsZW5kYXIiLCAicmlnaHRzIiwgIm5ld2dyb3VwcyIsICJqb2luIiwgIkZpZWxkc2V0TGF5b3V0IiwgImNsYXNzZXMiLCAiVGV4dElucHV0V2lkZ2V0IiwgInZhbHVlIiwgInBsYWNlaG9sZGVyIiwgIndpZGdldHMiLCAiRXhwaXJ5V2lkZ2V0IiwgIiRvdmVybGF5IiwgIlJlbGF0aXZlSW5wdXRDbGFzcyIsICJTZWxlY3RXaXRoSW5wdXRXaWRnZXQiLCAicmVsYXRpdmVJbnB1dCIsICJvciIsICJkcm9wZG93bmlucHV0IiwgIm9wdGlvbnMiLCAidGV4dGlucHV0IiwgInJlcXVpcmVkIiwgIkNoZWNrYm94SW5wdXRXaWRnZXQiLCAic2VsZWN0ZWQiLCAiZm9ybUVsZW1lbnRzIiwgIkZpZWxkTGF5b3V0IiwgInB1c2giLCAiYWRkSXRlbXMiLCAiU3RhY2tMYXlvdXQiLCAiaXRlbXMiLCAicGFkZGVkIiwgIm9uU3VibWl0IiwgImdldFZhbHVlIiwgIk51bWJlciIsICJwYXJzZUludCIsICJuZXdyZXZpZCIsICJpc1NlbGVjdGVkIiwgInNldFRpbWVvdXQiLCAibG9jYXRpb24iLCAicmVsb2FkIiwgInNldEl0ZW0iLCAicHVzaFBlbmRpbmciLCAiRXJyb3IiLCAicG9wUGVuZGluZyIsICJnZXRBY3Rpb25Qcm9jZXNzIiwgIm5leHQiLCAic3VwZXIiLCAicHJvdG90eXBlIiwgImNhbGwiLCAic3RhdGljIiwgImFjdGlvbnMiLCAiZmxhZ3MiLCAiZGlhbG9nIiwgIndpbmRvd01hbmFnZXIiLCAiV2luZG93TWFuYWdlciIsICJhZGRXaW5kb3dzIiwgIm9wZW5XaW5kb3ciLCAiZ2V0Qm9keSIsICJvbiIsICJldmVudCIsICJfJGVsZW1lbnQkcGFyZW50cyRwcmUiLCAicHJldmVudERlZmF1bHQiLCAiZ2V0UGFyYW1WYWx1ZSIsICJzZWN0aW9uSWQiLCAicGFyZW50cyIsICJwcmV2Il0KfQo=
