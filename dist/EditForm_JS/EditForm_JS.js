/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Common.js/edit.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/EditForm_JS}
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

// dist/EditForm_JS/EditForm_JS.js
//! src/EditForm_JS/modules/clearUndoSummary.ts
var clearUndoSummary = ($editForm) => {
  const $wpAutoSummary = $editForm.find('input[name="wpAutoSummary"]');
  if (!$wpAutoSummary.length) {
    return;
  }
  if (mw.util.getParamValue("undo")) {
    $wpAutoSummary.val("");
  }
};
//! src/EditForm_JS/modules/disableTitle.ts
var disableTitle = ({
  $body,
  $editForm
}) => {
  if ($body.find("#no-new-title").length && $body.find('#editform input[name="wpSection"]').val() === "new") {
    const $wpSummary = $editForm.find("input[name=wpSummary]");
    $wpSummary.prop("disabled", true);
    $wpSummary.val("");
  }
  const {
    wgWikiID
  } = mw.config.get();
  if (wgWikiID === "loginwiki") {
    return;
  }
  const noSectionTitlePages = ["有兽档案馆_talk:侵权提报", "有兽档案馆_talk:存废讨论/关注度提报"];
  const noSectionTitlePagesRegex = /^有兽档案馆_talk:存废讨论/;
  const {
    wgPageName
  } = mw.config.get();
  if ((noSectionTitlePages.includes(wgPageName) || noSectionTitlePagesRegex.test(wgPageName)) && mw.util.getParamValue("section") === "new") {
    mw.util.addCSS("h2.ve-ui-init-desktopArticleTarget-sectionTitle{display:none}");
  }
};
//! src/EditForm_JS/EditForm_JS.ts
var import_ext_gadget4 = require("ext.gadget.Util");
//! src/EditForm_JS/modules/util/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("EditForm_JS/2.0");
//! src/EditForm_JS/modules/i18n.ts
var import_ext_gadget2 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Preview: (0, import_ext_gadget2.localize)({
      en: "Please preview the edited text",
      ja: "プレビューしてください",
      "zh-hans": "请先预览",
      "zh-hant": "請先預覽"
    }),
    RevisionPreloaded: (0, import_ext_gadget2.localize)({
      en: "Content of revision $1 preloaded.",
      "zh-hans": "已加载版本$1的内容。",
      "zh-hant": "已載入版本$1的內容。"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/EditForm_JS/modules/preloadRevid.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var preloadRevid = ($editForm) => {
  const revid = mw.util.getParamValue("preloadrevid");
  if (!revid) {
    return;
  }
  if (mw.config.get("gadget-EditForm_JS__RevisionPreloaded")) {
    return;
  }
  mw.config.set("gadget-EditForm_JS__RevisionPreloaded", true);
  const {
    wgAction
  } = mw.config.get();
  if (!["edit", "submit"].includes(wgAction)) {
    return;
  }
  const params = {
    action: "query",
    format: "json",
    formatversion: "2",
    prop: "revisions",
    revids: Number.parseInt(revid, 10),
    rvprop: "content",
    rvslots: "main"
  };
  void api.get(params).then(({
    query
  }) => {
    const {
      content
    } = query.pages[0].revisions[0].slots.main;
    (0, import_ext_gadget3.setWpTextbox1Content)({
      $editForm,
      content
    });
    void mw.notify(getMessage("RevisionPreloaded").replace("$1", revid), {
      type: "success"
    });
  });
};
//! src/EditForm_JS/EditForm_JS.ts
void (0, import_ext_gadget4.getBody)().then(function editForm($body) {
  mw.hook("wikipage.editform").add(($editForm) => {
    clearUndoSummary($editForm);
    disableTitle({
      $body,
      $editForm
    });
    preloadRevid($editForm);
  });
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRGb3JtX0pTL21vZHVsZXMvY2xlYXJVbmRvU3VtbWFyeS50cyIsICJzcmMvRWRpdEZvcm1fSlMvbW9kdWxlcy9kaXNhYmxlVGl0bGUudHMiLCAic3JjL0VkaXRGb3JtX0pTL0VkaXRGb3JtX0pTLnRzIiwgInNyYy9FZGl0Rm9ybV9KUy9tb2R1bGVzL3V0aWwvYXBpLnRzIiwgInNyYy9FZGl0Rm9ybV9KUy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0VkaXRGb3JtX0pTL21vZHVsZXMvcHJlbG9hZFJldmlkLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBjbGVhclVuZG9TdW1tYXJ5ID0gKCRlZGl0Rm9ybTogSlF1ZXJ5PEhUTUxFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCAkd3BBdXRvU3VtbWFyeTogSlF1ZXJ5PEhUTUxJbnB1dEVsZW1lbnQ+ID0gJGVkaXRGb3JtLmZpbmQ8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W25hbWU9XCJ3cEF1dG9TdW1tYXJ5XCJdJyk7XG5cdGlmICghJHdwQXV0b1N1bW1hcnkubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndW5kbycpKSB7XG5cdFx0JHdwQXV0b1N1bW1hcnkudmFsKCcnKTtcblx0fVxufTtcblxuZXhwb3J0IHtjbGVhclVuZG9TdW1tYXJ5fTtcbiIsICJjb25zdCBkaXNhYmxlVGl0bGUgPSAoeyRib2R5LCAkZWRpdEZvcm19OiB7JGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+OyAkZWRpdEZvcm06IEpRdWVyeTxIVE1MRWxlbWVudD59KTogdm9pZCA9PiB7XG5cdGlmICgkYm9keS5maW5kKCcjbm8tbmV3LXRpdGxlJykubGVuZ3RoICYmICRib2R5LmZpbmQoJyNlZGl0Zm9ybSBpbnB1dFtuYW1lPVwid3BTZWN0aW9uXCJdJykudmFsKCkgPT09ICduZXcnKSB7XG5cdFx0Ly8g5Lyg57uf5paH5pys57yW6L6R5ZmoXG5cdFx0Y29uc3QgJHdwU3VtbWFyeTogSlF1ZXJ5ID0gJGVkaXRGb3JtLmZpbmQoJ2lucHV0W25hbWU9d3BTdW1tYXJ5XScpO1xuXHRcdCR3cFN1bW1hcnkucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcblx0XHQkd3BTdW1tYXJ5LnZhbCgnJyk7XG5cdH1cblxuXHRjb25zdCB7d2dXaWtpSUR9ID0gbXcuY29uZmlnLmdldCgpO1xuXHQvLyBEaXNhYmxlZCBmb3IgbG9naW53aWtpXG5cdGlmICh3Z1dpa2lJRCA9PT0gJ2xvZ2lud2lraScpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBub1NlY3Rpb25UaXRsZVBhZ2VzOiBzdHJpbmdbXSA9IFsn5pyJ5YW95qGj5qGI6aaGX3RhbGs65L615p2D5o+Q5oqlJywgJ+acieWFveaho+ahiOmmhl90YWxrOuWtmOW6n+iuqOiuui/lhbPms6jluqbmj5DmiqUnXTtcblx0Y29uc3Qgbm9TZWN0aW9uVGl0bGVQYWdlc1JlZ2V4OiBSZWdFeHAgPSAvXuacieWFveaho+ahiOmmhl90YWxrOuWtmOW6n+iuqOiuui87XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKFxuXHRcdChub1NlY3Rpb25UaXRsZVBhZ2VzLmluY2x1ZGVzKHdnUGFnZU5hbWUpIHx8IG5vU2VjdGlvblRpdGxlUGFnZXNSZWdleC50ZXN0KHdnUGFnZU5hbWUpKSAmJlxuXHRcdG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnc2VjdGlvbicpID09PSAnbmV3J1xuXHQpIHtcblx0XHQvLyDlj6/op4bljJbnvJbovpHlmaggLyDmlrB3aWtpdGV4dOaooeW8j1xuXHRcdG13LnV0aWwuYWRkQ1NTKCdoMi52ZS11aS1pbml0LWRlc2t0b3BBcnRpY2xlVGFyZ2V0LXNlY3Rpb25UaXRsZXtkaXNwbGF5Om5vbmV9Jyk7XG5cdH1cbn07XG5cbmV4cG9ydCB7ZGlzYWJsZVRpdGxlfTtcbiIsICJpbXBvcnQge2NsZWFyVW5kb1N1bW1hcnl9IGZyb20gJy4vbW9kdWxlcy9jbGVhclVuZG9TdW1tYXJ5JztcbmltcG9ydCB7ZGlzYWJsZVRpdGxlfSBmcm9tICcuL21vZHVsZXMvZGlzYWJsZVRpdGxlJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbi8vIGltcG9ydCB7aW50cm9BQ0h9IGZyb20gJy4vbW9kdWxlcy9pbnRyb0FDSCc7XG5pbXBvcnQge3ByZWxvYWRSZXZpZH0gZnJvbSAnLi9tb2R1bGVzL3ByZWxvYWRSZXZpZCc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gZWRpdEZvcm0oJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdG13Lmhvb2soJ3dpa2lwYWdlLmVkaXRmb3JtJykuYWRkKCgkZWRpdEZvcm0pOiB2b2lkID0+IHtcblx0XHQvLyDliKDpmaTlm57pgIDml7boh6rliqjnlJ/miJDnmoTnvJbovpHmkZjopoFcblx0XHRjbGVhclVuZG9TdW1tYXJ5KCRlZGl0Rm9ybSk7XG5cblx0XHQvLyDlnKjmj5DkuqTmlrDmrrXokL3ml7bvvIzorqnkuLvpopjmoI/lnKjnibnlrprmg4XlhrXkuIvlpLHmlYhcblx0XHRkaXNhYmxlVGl0bGUoeyRib2R5LCAkZWRpdEZvcm19KTtcblxuXHRcdC8vIOa6kOS7o+eggee8lui+keWZqOWKoOi9veKAnOe8lui+keivt+axguKAneihpeS4gVxuXHRcdHByZWxvYWRSZXZpZCgkZWRpdEZvcm0pO1xuXHR9KTtcblxuXHQvLyDmlrDnlKjmiLflvJXlr7zoh7PmnaHnm67liJvlu7rlkJHlr7zvvIhbW1FXOkFGQ11d77yJXG5cdC8vIGludHJvQUNIKCk7XG59KTtcbiIsICJpbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoJ0VkaXRGb3JtX0pTLzIuMCcpO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdFByZXZpZXc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGxlYXNlIHByZXZpZXcgdGhlIGVkaXRlZCB0ZXh0Jyxcblx0XHRcdGphOiAn44OX44Os44OT44Ol44O844GX44Gm44GP44Gg44GV44GEJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ivt+WFiOmihOiniCcsXG5cdFx0XHQnemgtaGFudCc6ICfoq4vlhYjpoJDopr0nLFxuXHRcdH0pLFxuXHRcdFJldmlzaW9uUHJlbG9hZGVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvbnRlbnQgb2YgcmV2aXNpb24gJDEgcHJlbG9hZGVkLicsXG5cdFx0XHQnemgtaGFucyc6ICflt7LliqDovb3niYjmnKwkMeeahOWGheWuueOAgicsXG5cdFx0XHQnemgtaGFudCc6ICflt7LovInlhaXniYjmnKwkMeeahOWFp+WuueOAgicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgIi8qKlxuICogQGRlc2NyaXB0aW9uIFByZWxvYWQgY29udGVudHMgZnJvbSBSZXZpc2lvbiBJRCAob2xkaWQpXG4gKi9cbmltcG9ydCB7YXBpfSBmcm9tICcuL3V0aWwvYXBpJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7c2V0V3BUZXh0Ym94MUNvbnRlbnR9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IHByZWxvYWRSZXZpZCA9ICgkZWRpdEZvcm06IEpRdWVyeTxIVE1MRWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3QgcmV2aWQgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3ByZWxvYWRyZXZpZCcpO1xuXG5cdGlmICghcmV2aWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAobXcuY29uZmlnLmdldCgnZ2FkZ2V0LUVkaXRGb3JtX0pTX19SZXZpc2lvblByZWxvYWRlZCcpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bXcuY29uZmlnLnNldCgnZ2FkZ2V0LUVkaXRGb3JtX0pTX19SZXZpc2lvblByZWxvYWRlZCcsIHRydWUpO1xuXG5cdGNvbnN0IHt3Z0FjdGlvbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKCFbJ2VkaXQnLCAnc3VibWl0J10uaW5jbHVkZXMod2dBY3Rpb24pKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdHJldmlkczogTnVtYmVyLnBhcnNlSW50KHJldmlkLCAxMCksXG5cdFx0cnZwcm9wOiAnY29udGVudCcsXG5cdFx0cnZzbG90czogJ21haW4nLFxuXHR9O1xuXG5cdHZvaWQgYXBpLmdldChwYXJhbXMpLnRoZW4oKHtxdWVyeX0pID0+IHtcblx0XHRjb25zdCB7Y29udGVudH0gPSBxdWVyeS5wYWdlc1swXS5yZXZpc2lvbnNbMF0uc2xvdHMubWFpbiBhcyB7Y29udGVudDogc3RyaW5nfTtcblx0XHRzZXRXcFRleHRib3gxQ29udGVudCh7JGVkaXRGb3JtLCBjb250ZW50fSk7XG5cdFx0dm9pZCBtdy5ub3RpZnkoZ2V0TWVzc2FnZSgnUmV2aXNpb25QcmVsb2FkZWQnKS5yZXBsYWNlKCckMScsIHJldmlkKSwge3R5cGU6ICdzdWNjZXNzJ30pO1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7cHJlbG9hZFJldmlkfTtcbiJdLAogICJt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QUN6RDtNQUFXb0Q7SUFBTyxDQUFDO0FBQ3pDLFNBQUtoRCxHQUFHc0QsT0FBT3hCLFdBQVcsbUJBQW1CLEVBQUV5QixRQUFRLE1BQU1yQixLQUFLLEdBQUc7TUFBQ3NCLE1BQU07SUFBUyxDQUFDO0VBQ3ZGLENBQUM7QUFDRjs7QUhuQ0EsTUFBQSxHQUFLdkMsbUJBQUF3QyxTQUFRLEVBQUVYLEtBQUssU0FBU1ksU0FBU3JELE9BQXNDO0FBQzNFTCxLQUFHMkQsS0FBSyxtQkFBbUIsRUFBRUMsSUFBS2hFLGVBQW9CO0FBRXJERCxxQkFBaUJDLFNBQVM7QUFHMUJRLGlCQUFhO01BQUNDO01BQU9UO0lBQVMsQ0FBQztBQUcvQnFDLGlCQUFhckMsU0FBUztFQUN2QixDQUFDO0FBSUYsQ0FBQzsiLAogICJuYW1lcyI6IFsiY2xlYXJVbmRvU3VtbWFyeSIsICIkZWRpdEZvcm0iLCAiJHdwQXV0b1N1bW1hcnkiLCAiZmluZCIsICJsZW5ndGgiLCAibXciLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgInZhbCIsICJkaXNhYmxlVGl0bGUiLCAiJGJvZHkiLCAiJHdwU3VtbWFyeSIsICJwcm9wIiwgIndnV2lraUlEIiwgImNvbmZpZyIsICJnZXQiLCAibm9TZWN0aW9uVGl0bGVQYWdlcyIsICJub1NlY3Rpb25UaXRsZVBhZ2VzUmVnZXgiLCAid2dQYWdlTmFtZSIsICJpbmNsdWRlcyIsICJ0ZXN0IiwgImFkZENTUyIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJhcGkiLCAiaW5pdE13QXBpIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJnZXRJMThuTWVzc2FnZXMiLCAiUHJldmlldyIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJSZXZpc2lvblByZWxvYWRlZCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgInByZWxvYWRSZXZpZCIsICJyZXZpZCIsICJzZXQiLCAid2dBY3Rpb24iLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJyZXZpZHMiLCAiTnVtYmVyIiwgInBhcnNlSW50IiwgInJ2cHJvcCIsICJydnNsb3RzIiwgInRoZW4iLCAicXVlcnkiLCAiY29udGVudCIsICJwYWdlcyIsICJyZXZpc2lvbnMiLCAic2xvdHMiLCAibWFpbiIsICJzZXRXcFRleHRib3gxQ29udGVudCIsICJub3RpZnkiLCAicmVwbGFjZSIsICJ0eXBlIiwgImdldEJvZHkiLCAiZWRpdEZvcm0iLCAiaG9vayIsICJhZGQiXQp9Cg==
