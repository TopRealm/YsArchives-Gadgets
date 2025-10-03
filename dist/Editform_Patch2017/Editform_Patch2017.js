/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/Editform_Patch2017}
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

// dist/Editform_Patch2017/Editform_Patch2017.js
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
//! src/Editform_Patch2017/Editform_Patch2017.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/Editform_Patch2017/options.json
var dialogLicenseId = "ve-ui-mwSaveDialog-license";
var targetClass = "ve-ui-mwSaveDialog-checkboxes";
//! src/Editform_Patch2017/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    minoredit: (0, import_ext_gadget.localize)({
      en: "This is a minor edit",
      "zh-hans": "这是一次小编辑",
      "zh-hant": "這是次要編輯"
    }),
    watchthis: (0, import_ext_gadget.localize)({
      en: "Watch this page",
      "zh-hans": "监视此页面",
      "zh-hant": "監視此頁面"
    }),
    copyrightwarning: (0, import_ext_gadget.localize)({
      en: '<p>By clicking the "Save page" or "Save changes" button, you agree to the <i><a href="/wiki/LIB:TOS" title="Terms of Use">Terms of Use</a></i>, <i><a href="/wiki/LIB:ZC" title="Common Program">Common Program</a></i>, and the <i><a href="/wiki/LIB:CP" title="Copyright Policy">Copyright Policy</a></i>. You agree to released all your contributions under the <i><a href="/wiki/LIB:CC-BY-SA-4.0" title="Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)">Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)</a></i>. You promise to us that the content you submit does not involve in copyright infringement or infringement on legitimate rights and interests of others.<br><b>If you do not agree to terms and policies mentioned above, please do not submit your work.</b></p>',
      "zh-hans": '<p>点击“<b>保存页面</b>”或“<b>保存更改</b>”按钮，即表示您<b>同意</b>《<b><a href="/wiki/LIB:TOS" title="有兽档案馆用户协议">有兽档案馆用户协议</a></b>》、《<b><a href="/wiki/LIB:ZC" title="有兽档案馆章程">有兽档案馆章程</a></b>》及本网站<b><a href="/wiki/LIB:CP" title="著作权条例">著作权条例</a></b>，<b>同意</b>依据<b><a href="/wiki/Help:CC-BY-SA-4.0" title="知识共享 署名—相同方式共享 4.0 协议国际版">CC-BY-SA 4.0</a></b>协议授权他人使用您所发布的内容，并<b>承诺</b>所提交的内容不侵犯他人的著作权及其他合法权益。<br>若您不同意《用户协议》、《档案馆章程》或本网站著作权条例，请勿点击按钮发布内容。</p>',
      "zh-hant": '<p>點擊“<b>儲存頁面</b>”或“<b>儲存變更</b>”按鈕，即表示您<b>同意</b>《<b><a href="/wiki/LIB:TOS" title="有兽档案馆用戶協議">有兽档案馆用戶協議</a></b>》、《<b><a href="/wiki/LIB:ZC" title="有兽档案馆章程">有兽档案馆章程</a></b>》及本網站<b><a href="/wiki/LIB:CP" title="著作權條例">著作權條例</a></b>，<b>同意</b>依據<b><a href="/wiki/Help:CC-BY-SA-4.0" title="知识共享 署名—相同方式共享 4.0 协议国际版">CC-BY-SA 4.0</a></b>協議授權他人使用您所發佈的內容，並<b>承諾</b>所提交的內容不侵犯他人的著作權及其他合法權益。<br>若您不同意《用戶協議》、《档案馆章程》或本網站著作權條例，請勿點擊按鈕發佈內容。</p>'
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
var setMessages = () => {
  mw.messages.set({
    minoredit: getMessage("minoredit"),
    watchthis: getMessage("watchthis")
  });
};
//! src/Editform_Patch2017/modules/processVisualEditor.ts
var processVisualEditor = ($body) => {
  const $labels = $body.find(".".concat(targetClass)).find("label");
  var _iterator = _createForOfIteratorHelper($labels), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var _label$textContent;
      const label = _step.value;
      if (!((_label$textContent = label.textContent) !== null && _label$textContent !== void 0 && _label$textContent.startsWith("⧼"))) {
        continue;
      }
      const labelName = label.textContent.replace("⧼", "").replace("⧽", "");
      if (["minoredit", "watchthis"].includes(labelName)) {
        label.textContent = getMessage(labelName);
        label.title = getMessage(labelName);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (!$body.find(".".concat(dialogLicenseId)).children().length) {
    $body.find(".".concat(dialogLicenseId)).append($("<div>").addClass("fmbox plainlinks fmbox-system").append($("<div>").addClass("mbox-text").html(getMessage("copyrightwarning"))));
  }
};
//! src/Editform_Patch2017/Editform_Patch2017.ts
void (0, import_ext_gadget2.getBody)().then(function editForm($body) {
  setMessages();
  mw.hook("ve.saveDialog.stateChanged").add(() => {
    processVisualEditor($body);
  });
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRmb3JtX1BhdGNoMjAxNy9FZGl0Zm9ybV9QYXRjaDIwMTcudHMiLCAic3JjL0VkaXRmb3JtX1BhdGNoMjAxNy9vcHRpb25zLmpzb24iLCAic3JjL0VkaXRmb3JtX1BhdGNoMjAxNy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0VkaXRmb3JtX1BhdGNoMjAxNy9tb2R1bGVzL3Byb2Nlc3NWaXN1YWxFZGl0b3IudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7cHJvY2Vzc1Zpc3VhbEVkaXRvcn0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NWaXN1YWxFZGl0b3InO1xuaW1wb3J0IHtzZXRNZXNzYWdlc30gZnJvbSAnLi9tb2R1bGVzL2kxOG4nO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiDkv67mraMyMDE354mI5rqQ5Luj56CB57yW6L6R5Zmo55WM6Z2i6ZSZ6K+vXG4gKi9cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gZWRpdEZvcm0oJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdHNldE1lc3NhZ2VzKCk7XG5cblx0bXcuaG9vaygndmUuc2F2ZURpYWxvZy5zdGF0ZUNoYW5nZWQnKS5hZGQoKCk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NWaXN1YWxFZGl0b3IoJGJvZHkpO1xuXHR9KTtcbn0pO1xuIiwgIntcblx0XCJkaWFsb2dMaWNlbnNlSWRcIjogXCJ2ZS11aS1td1NhdmVEaWFsb2ctbGljZW5zZVwiLFxuXHRcInRhcmdldENsYXNzXCI6IFwidmUtdWktbXdTYXZlRGlhbG9nLWNoZWNrYm94ZXNcIlxufVxuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRtaW5vcmVkaXQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBpcyBhIG1pbm9yIGVkaXQnLFxuXHRcdFx0J3poLWhhbnMnOiAn6L+Z5piv5LiA5qyh5bCP57yW6L6RJyxcblx0XHRcdCd6aC1oYW50JzogJ+mAmeaYr+asoeimgee3qOi8rycsXG5cdFx0fSksXG5cdFx0d2F0Y2h0aGlzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1dhdGNoIHRoaXMgcGFnZScsXG5cdFx0XHQnemgtaGFucyc6ICfnm5Hop4bmraTpobXpnaInLFxuXHRcdFx0J3poLWhhbnQnOiAn55uj6KaW5q2k6aCB6Z2iJyxcblx0XHR9KSxcblx0XHRjb3B5cmlnaHR3YXJuaW5nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJzxwPkJ5IGNsaWNraW5nIHRoZSBcIlNhdmUgcGFnZVwiIG9yIFwiU2F2ZSBjaGFuZ2VzXCIgYnV0dG9uLCB5b3UgYWdyZWUgdG8gdGhlIDxpPjxhIGhyZWY9XCIvd2lraS9MSUI6VE9TXCIgdGl0bGU9XCJUZXJtcyBvZiBVc2VcIj5UZXJtcyBvZiBVc2U8L2E+PC9pPiwgPGk+PGEgaHJlZj1cIi93aWtpL0xJQjpaQ1wiIHRpdGxlPVwiQ29tbW9uIFByb2dyYW1cIj5Db21tb24gUHJvZ3JhbTwvYT48L2k+LCBhbmQgdGhlIDxpPjxhIGhyZWY9XCIvd2lraS9MSUI6Q1BcIiB0aXRsZT1cIkNvcHlyaWdodCBQb2xpY3lcIj5Db3B5cmlnaHQgUG9saWN5PC9hPjwvaT4uIFlvdSBhZ3JlZSB0byByZWxlYXNlZCBhbGwgeW91ciBjb250cmlidXRpb25zIHVuZGVyIHRoZSA8aT48YSBocmVmPVwiL3dpa2kvTElCOkNDLUJZLVNBLTQuMFwiIHRpdGxlPVwiQ3JlYXRpdmUgQ29tbW9ucyBBdHRyaWJ1dGlvbi1TaGFyZUFsaWtlIDQuMCBJbnRlcm5hdGlvbmFsIChDQyBCWS1TQSA0LjApXCI+Q3JlYXRpdmUgQ29tbW9ucyBBdHRyaWJ1dGlvbi1TaGFyZUFsaWtlIDQuMCBJbnRlcm5hdGlvbmFsIChDQyBCWS1TQSA0LjApPC9hPjwvaT4uIFlvdSBwcm9taXNlIHRvIHVzIHRoYXQgdGhlIGNvbnRlbnQgeW91IHN1Ym1pdCBkb2VzIG5vdCBpbnZvbHZlIGluIGNvcHlyaWdodCBpbmZyaW5nZW1lbnQgb3IgaW5mcmluZ2VtZW50IG9uIGxlZ2l0aW1hdGUgcmlnaHRzIGFuZCBpbnRlcmVzdHMgb2Ygb3RoZXJzLjxicj48Yj5JZiB5b3UgZG8gbm90IGFncmVlIHRvIHRlcm1zIGFuZCBwb2xpY2llcyBtZW50aW9uZWQgYWJvdmUsIHBsZWFzZSBkbyBub3Qgc3VibWl0IHlvdXIgd29yay48L2I+PC9wPicsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCc8cD7ngrnlh7vigJw8Yj7kv53lrZjpobXpnaI8L2I+4oCd5oiW4oCcPGI+5L+d5a2Y5pu05pS5PC9iPuKAneaMiemSru+8jOWNs+ihqOekuuaCqDxiPuWQjOaEjzwvYj7jgIo8Yj48YSBocmVmPVwiL3dpa2kvTElCOlRPU1wiIHRpdGxlPVwi5pyJ5YW95qGj5qGI6aaG55So5oi35Y2P6K6uXCI+5pyJ5YW95qGj5qGI6aaG55So5oi35Y2P6K6uPC9hPjwvYj7jgIvjgIHjgIo8Yj48YSBocmVmPVwiL3dpa2kvTElCOlpDXCIgdGl0bGU9XCLmnInlhb3moaPmoYjppobnq6DnqItcIj7mnInlhb3moaPmoYjppobnq6DnqIs8L2E+PC9iPuOAi+WPiuacrOe9keermTxiPjxhIGhyZWY9XCIvd2lraS9MSUI6Q1BcIiB0aXRsZT1cIuiRl+S9nOadg+adoeS+i1wiPuiRl+S9nOadg+adoeS+izwvYT48L2I+77yMPGI+5ZCM5oSPPC9iPuS+neaNrjxiPjxhIGhyZWY9XCIvd2lraS9IZWxwOkNDLUJZLVNBLTQuMFwiIHRpdGxlPVwi55+l6K+G5YWx5LqrIOe9suWQjeKAlOebuOWQjOaWueW8j+WFseS6qyA0LjAg5Y2P6K6u5Zu96ZmF54mIXCI+Q0MtQlktU0EgNC4wPC9hPjwvYj7ljY/orq7mjojmnYPku5bkurrkvb/nlKjmgqjmiYDlj5HluIPnmoTlhoXlrrnvvIzlubY8Yj7mib/or7o8L2I+5omA5o+Q5Lqk55qE5YaF5a655LiN5L6154qv5LuW5Lq655qE6JGX5L2c5p2D5Y+K5YW25LuW5ZCI5rOV5p2D55uK44CCPGJyPuiLpeaCqOS4jeWQjOaEj+OAiueUqOaIt+WNj+iuruOAi+OAgeOAiuaho+ahiOmmhueroOeoi+OAi+aIluacrOe9keermeiRl+S9nOadg+adoeS+i++8jOivt+WLv+eCueWHu+aMiemSruWPkeW4g+WGheWuueOAgjwvcD4nLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQnPHA+6bue5pOK4oCcPGI+5YSy5a2Y6aCB6Z2iPC9iPuKAneaIluKAnDxiPuWEsuWtmOiuiuabtDwvYj7igJ3mjInpiJXvvIzljbPooajnpLrmgqg8Yj7lkIzmhI88L2I+44CKPGI+PGEgaHJlZj1cIi93aWtpL0xJQjpUT1NcIiB0aXRsZT1cIuacieWFveaho+ahiOmmhueUqOaItuWNlOitsFwiPuacieWFveaho+ahiOmmhueUqOaItuWNlOitsDwvYT48L2I+44CL44CB44CKPGI+PGEgaHJlZj1cIi93aWtpL0xJQjpaQ1wiIHRpdGxlPVwi5pyJ5YW95qGj5qGI6aaG56ug56iLXCI+5pyJ5YW95qGj5qGI6aaG56ug56iLPC9hPjwvYj7jgIvlj4rmnKzntrLnq5k8Yj48YSBocmVmPVwiL3dpa2kvTElCOkNQXCIgdGl0bGU9XCLokZfkvZzmrIrmop3kvotcIj7okZfkvZzmrIrmop3kvos8L2E+PC9iPu+8jDxiPuWQjOaEjzwvYj7kvp3mk5o8Yj48YSBocmVmPVwiL3dpa2kvSGVscDpDQy1CWS1TQS00LjBcIiB0aXRsZT1cIuefpeivhuWFseS6qyDnvbLlkI3igJTnm7jlkIzmlrnlvI/lhbHkuqsgNC4wIOWNj+iuruWbvemZheeJiFwiPkNDLUJZLVNBIDQuMDwvYT48L2I+5Y2U6K2w5o6I5qyK5LuW5Lq65L2/55So5oKo5omA55m85L2I55qE5YWn5a6577yM5LimPGI+5om/6Ku+PC9iPuaJgOaPkOS6pOeahOWFp+WuueS4jeS+teeKr+S7luS6uueahOiRl+S9nOasiuWPiuWFtuS7luWQiOazleasiuebiuOAgjxicj7oi6XmgqjkuI3lkIzmhI/jgIrnlKjmiLbljZTorbDjgIvjgIHjgIrmoaPmoYjppobnq6DnqIvjgIvmiJbmnKzntrLnq5nokZfkvZzmrIrmop3kvovvvIzoq4vli7/pu57mk4rmjInpiJXnmbzkvYjlhaflrrnjgII8L3A+Jyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmNvbnN0IHNldE1lc3NhZ2VzID0gKCkgPT4ge1xuXHRtdy5tZXNzYWdlcy5zZXQoe21pbm9yZWRpdDogZ2V0TWVzc2FnZSgnbWlub3JlZGl0JyksIHdhdGNodGhpczogZ2V0TWVzc2FnZSgnd2F0Y2h0aGlzJyl9KTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZSwgc2V0TWVzc2FnZXN9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnfi9FZGl0Zm9ybV9QYXRjaDIwMTcvb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgcHJvY2Vzc1Zpc3VhbEVkaXRvciA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Ly8gTWlzc2luZyBsYWJlbCBtZXNzYWdlc1xuXHRjb25zdCAkbGFiZWxzOiBKUXVlcnkgPSAkYm9keS5maW5kKGAuJHtPUFRJT05TLnRhcmdldENsYXNzfWApLmZpbmQoJ2xhYmVsJyk7XG5cdGZvciAoY29uc3QgbGFiZWwgb2YgJGxhYmVscykge1xuXHRcdGlmICghbGFiZWwudGV4dENvbnRlbnQ/LnN0YXJ0c1dpdGgoJ+KnvCcpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBsYWJlbE5hbWUgPSBsYWJlbC50ZXh0Q29udGVudC5yZXBsYWNlKCfip7wnLCAnJykucmVwbGFjZSgn4qe9JywgJycpO1xuXG5cdFx0aWYgKFsnbWlub3JlZGl0JywgJ3dhdGNodGhpcyddLmluY2x1ZGVzKGxhYmVsTmFtZSkpIHtcblx0XHRcdGxhYmVsLnRleHRDb250ZW50ID0gZ2V0TWVzc2FnZShsYWJlbE5hbWUgYXMgJ21pbm9yZWRpdCcgfCAnd2F0Y2h0aGlzJyk7XG5cdFx0XHRsYWJlbC50aXRsZSA9IGdldE1lc3NhZ2UobGFiZWxOYW1lIGFzICdtaW5vcmVkaXQnIHwgJ3dhdGNodGhpcycpO1xuXHRcdH1cblx0fVxuXG5cdC8vIE1pc3NpbmcgY29weXJpZ2h0IHdhcm5pbmdcblx0aWYgKCEkYm9keS5maW5kKGAuJHtPUFRJT05TLmRpYWxvZ0xpY2Vuc2VJZH1gKS5jaGlsZHJlbigpLmxlbmd0aCkge1xuXHRcdCRib2R5LmZpbmQoYC4ke09QVElPTlMuZGlhbG9nTGljZW5zZUlkfWApLmFwcGVuZChcblx0XHRcdCQoJzxkaXY+Jylcblx0XHRcdFx0LmFkZENsYXNzKCdmbWJveCBwbGFpbmxpbmtzIGZtYm94LXN5c3RlbScpXG5cdFx0XHRcdC5hcHBlbmQoJCgnPGRpdj4nKS5hZGRDbGFzcygnbWJveC10ZXh0JykuaHRtbChnZXRNZXNzYWdlKCdjb3B5cmlnaHR3YXJuaW5nJykpKVxuXHRcdCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7cHJvY2Vzc1Zpc3VhbEVkaXRvcn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBc0JDLFFBQUEsaUJBQUE7O0FDQ3JCLElBQUFDLGtCQUFtQjtBQUNuQixJQUFBQyxjQUFlOztBQ0ZoQixJQUFBQyxvQkFBdUJILFFBQUEsaUJBQUE7QUFFdkIsSUFBTUksa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsWUFBQSxHQUFXRixrQkFBQUcsVUFBUztNQUNuQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEQyxZQUFBLEdBQVdMLGtCQUFBRyxVQUFTO01BQ25CQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RFLG1CQUFBLEdBQWtCTixrQkFBQUcsVUFBUztNQUMxQkMsSUFBSTtNQUNKLFdBQ0M7TUFDRCxXQUNDO0lBQ0YsQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNRyxlQUFlTixnQkFBZ0I7QUFFckMsSUFBTU8sYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3QjtBQUVBLElBQU1DLGNBQWNBLE1BQU07QUFDekJDLEtBQUdDLFNBQVNDLElBQUk7SUFBQ1gsV0FBV00sV0FBVyxXQUFXO0lBQUdILFdBQVdHLFdBQVcsV0FBVztFQUFDLENBQUM7QUFDekY7O0FDN0JBLElBQU1NLHNCQUF1QkMsV0FBeUM7QUFFckUsUUFBTUMsVUFBa0JELE1BQU1FLEtBQUEsSUFBQUMsT0FBaUJuQixXQUFXLENBQUUsRUFBRWtCLEtBQUssT0FBTztBQUFBLE1BQUFFLFlBQUFDLDJCQUN0REosT0FBQSxHQUFBSztBQUFBLE1BQUE7QUFBcEIsU0FBQUYsVUFBQUcsRUFBQSxHQUFBLEVBQUFELFFBQUFGLFVBQUFJLEVBQUEsR0FBQUMsUUFBNkI7QUFBQSxVQUFBQztBQUFBLFlBQWxCQyxRQUFBTCxNQUFBTTtBQUNWLFVBQUksR0FBQUYscUJBQUNDLE1BQU1FLGlCQUFBLFFBQUFILHVCQUFBLFVBQU5BLG1CQUFtQkksV0FBVyxHQUFHLElBQUc7QUFDeEM7TUFDRDtBQUVBLFlBQU1DLFlBQVlKLE1BQU1FLFlBQVlHLFFBQVEsS0FBSyxFQUFFLEVBQUVBLFFBQVEsS0FBSyxFQUFFO0FBRXBFLFVBQUksQ0FBQyxhQUFhLFdBQVcsRUFBRUMsU0FBU0YsU0FBUyxHQUFHO0FBQ25ESixjQUFNRSxjQUFjcEIsV0FBV3NCLFNBQXNDO0FBQ3JFSixjQUFNTyxRQUFRekIsV0FBV3NCLFNBQXNDO01BQ2hFO0lBQ0Q7RUFBQSxTQUFBSSxLQUFBO0FBQUFmLGNBQUFnQixFQUFBRCxHQUFBO0VBQUEsVUFBQTtBQUFBZixjQUFBaUIsRUFBQTtFQUFBO0FBR0EsTUFBSSxDQUFDckIsTUFBTUUsS0FBQSxJQUFBQyxPQUFpQnBCLGVBQWUsQ0FBRSxFQUFFdUMsU0FBUyxFQUFFQyxRQUFRO0FBQ2pFdkIsVUFBTUUsS0FBQSxJQUFBQyxPQUFpQnBCLGVBQWUsQ0FBRSxFQUFFeUMsT0FDekNDLEVBQUUsT0FBTyxFQUNQQyxTQUFTLCtCQUErQixFQUN4Q0YsT0FBT0MsRUFBRSxPQUFPLEVBQUVDLFNBQVMsV0FBVyxFQUFFQyxLQUFLbEMsV0FBVyxrQkFBa0IsQ0FBQyxDQUFDLENBQy9FO0VBQ0Q7QUFDRDs7QUhwQkEsTUFBQSxHQUFLWixtQkFBQStDLFNBQVEsRUFBRUMsS0FBSyxTQUFTQyxTQUFTOUIsT0FBc0M7QUFDM0VMLGNBQVk7QUFFWkMsS0FBR21DLEtBQUssNEJBQTRCLEVBQUVDLElBQUksTUFBWTtBQUNyRGpDLHdCQUFvQkMsS0FBSztFQUMxQixDQUFDO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiZGlhbG9nTGljZW5zZUlkIiwgInRhcmdldENsYXNzIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJtaW5vcmVkaXQiLCAibG9jYWxpemUiLCAiZW4iLCAid2F0Y2h0aGlzIiwgImNvcHlyaWdodHdhcm5pbmciLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgInNldE1lc3NhZ2VzIiwgIm13IiwgIm1lc3NhZ2VzIiwgInNldCIsICJwcm9jZXNzVmlzdWFsRWRpdG9yIiwgIiRib2R5IiwgIiRsYWJlbHMiLCAiZmluZCIsICJjb25jYXQiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgIl9sYWJlbCR0ZXh0Q29udGVudCIsICJsYWJlbCIsICJ2YWx1ZSIsICJ0ZXh0Q29udGVudCIsICJzdGFydHNXaXRoIiwgImxhYmVsTmFtZSIsICJyZXBsYWNlIiwgImluY2x1ZGVzIiwgInRpdGxlIiwgImVyciIsICJlIiwgImYiLCAiY2hpbGRyZW4iLCAibGVuZ3RoIiwgImFwcGVuZCIsICIkIiwgImFkZENsYXNzIiwgImh0bWwiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImVkaXRGb3JtIiwgImhvb2siLCAiYWRkIl0KfQo=
