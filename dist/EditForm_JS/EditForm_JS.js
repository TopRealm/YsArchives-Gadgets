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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRGb3JtX0pTL21vZHVsZXMvY2xlYXJVbmRvU3VtbWFyeS50cyIsICJzcmMvRWRpdEZvcm1fSlMvbW9kdWxlcy9kaXNhYmxlVGl0bGUudHMiLCAic3JjL0VkaXRGb3JtX0pTL0VkaXRGb3JtX0pTLnRzIiwgInNyYy9FZGl0Rm9ybV9KUy9tb2R1bGVzL3V0aWwvYXBpLnRzIiwgInNyYy9FZGl0Rm9ybV9KUy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0VkaXRGb3JtX0pTL21vZHVsZXMvcHJlbG9hZFJldmlkLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBjbGVhclVuZG9TdW1tYXJ5ID0gKCRlZGl0Rm9ybTogSlF1ZXJ5PEhUTUxFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCAkd3BBdXRvU3VtbWFyeTogSlF1ZXJ5PEhUTUxJbnB1dEVsZW1lbnQ+ID0gJGVkaXRGb3JtLmZpbmQ8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W25hbWU9XCJ3cEF1dG9TdW1tYXJ5XCJdJyk7XG5cdGlmICghJHdwQXV0b1N1bW1hcnkubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndW5kbycpKSB7XG5cdFx0JHdwQXV0b1N1bW1hcnkudmFsKCcnKTtcblx0fVxufTtcblxuZXhwb3J0IHtjbGVhclVuZG9TdW1tYXJ5fTtcbiIsICJjb25zdCBkaXNhYmxlVGl0bGUgPSAoeyRib2R5LCAkZWRpdEZvcm19OiB7JGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+OyAkZWRpdEZvcm06IEpRdWVyeTxIVE1MRWxlbWVudD59KTogdm9pZCA9PiB7XG5cdGlmICgkYm9keS5maW5kKCcjbm8tbmV3LXRpdGxlJykubGVuZ3RoICYmICRib2R5LmZpbmQoJyNlZGl0Zm9ybSBpbnB1dFtuYW1lPVwid3BTZWN0aW9uXCJdJykudmFsKCkgPT09ICduZXcnKSB7XG5cdFx0Ly8g5Lyg57uf5paH5pys57yW6L6R5ZmoXG5cdFx0Y29uc3QgJHdwU3VtbWFyeTogSlF1ZXJ5ID0gJGVkaXRGb3JtLmZpbmQoJ2lucHV0W25hbWU9d3BTdW1tYXJ5XScpO1xuXHRcdCR3cFN1bW1hcnkucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcblx0XHQkd3BTdW1tYXJ5LnZhbCgnJyk7XG5cdH1cblxuXHRjb25zdCB7d2dXaWtpSUR9ID0gbXcuY29uZmlnLmdldCgpO1xuXHQvLyBEaXNhYmxlZCBmb3IgbG9naW53aWtpXG5cdGlmICh3Z1dpa2lJRCA9PT0gJ2xvZ2lud2lraScpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBub1NlY3Rpb25UaXRsZVBhZ2VzOiBzdHJpbmdbXSA9IFsn5pyJ5YW95qGj5qGI6aaGX3RhbGs65L615p2D5o+Q5oqlJywgJ+acieWFveaho+ahiOmmhl90YWxrOuWtmOW6n+iuqOiuui/lhbPms6jluqbmj5DmiqUnXTtcblx0Y29uc3Qgbm9TZWN0aW9uVGl0bGVQYWdlc1JlZ2V4OiBSZWdFeHAgPSAvXuacieWFveaho+ahiOmmhl90YWxrOuWtmOW6n+iuqOiuui87XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKFxuXHRcdChub1NlY3Rpb25UaXRsZVBhZ2VzLmluY2x1ZGVzKHdnUGFnZU5hbWUpIHx8IG5vU2VjdGlvblRpdGxlUGFnZXNSZWdleC50ZXN0KHdnUGFnZU5hbWUpKSAmJlxuXHRcdG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnc2VjdGlvbicpID09PSAnbmV3J1xuXHQpIHtcblx0XHQvLyDlj6/op4bljJbnvJbovpHlmaggLyDmlrB3aWtpdGV4dOaooeW8j1xuXHRcdG13LnV0aWwuYWRkQ1NTKCdoMi52ZS11aS1pbml0LWRlc2t0b3BBcnRpY2xlVGFyZ2V0LXNlY3Rpb25UaXRsZXtkaXNwbGF5Om5vbmV9Jyk7XG5cdH1cbn07XG5cbmV4cG9ydCB7ZGlzYWJsZVRpdGxlfTtcbiIsICJpbXBvcnQge2NsZWFyVW5kb1N1bW1hcnl9IGZyb20gJy4vbW9kdWxlcy9jbGVhclVuZG9TdW1tYXJ5JztcbmltcG9ydCB7ZGlzYWJsZVRpdGxlfSBmcm9tICcuL21vZHVsZXMvZGlzYWJsZVRpdGxlJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbi8vIGltcG9ydCB7aW50cm9BQ0h9IGZyb20gJy4vbW9kdWxlcy9pbnRyb0FDSCc7XG5pbXBvcnQge3ByZWxvYWRSZXZpZH0gZnJvbSAnLi9tb2R1bGVzL3ByZWxvYWRSZXZpZCc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gZWRpdEZvcm0oJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdG13Lmhvb2soJ3dpa2lwYWdlLmVkaXRmb3JtJykuYWRkKCgkZWRpdEZvcm0pOiB2b2lkID0+IHtcblx0XHQvLyDliKDpmaTlm57pgIDml7boh6rliqjnlJ/miJDnmoTnvJbovpHmkZjopoFcblx0XHRjbGVhclVuZG9TdW1tYXJ5KCRlZGl0Rm9ybSk7XG5cblx0XHQvLyDlnKjmj5DkuqTmlrDmrrXokL3ml7bvvIzorqnkuLvpopjmoI/lnKjnibnlrprmg4XlhrXkuIvlpLHmlYhcblx0XHRkaXNhYmxlVGl0bGUoeyRib2R5LCAkZWRpdEZvcm19KTtcblxuXHRcdC8vIOa6kOS7o+eggee8lui+keWZqOWKoOi9veKAnOe8lui+keivt+axguKAneihpeS4gVxuXHRcdHByZWxvYWRSZXZpZCgkZWRpdEZvcm0pO1xuXHR9KTtcblxuXHQvLyDmlrDnlKjmiLflvJXlr7zoh7PmnaHnm67liJvlu7rlkJHlr7zvvIhbW0xJQjpBRkNdXe+8iVxuXHQvLyBpbnRyb0FDSCgpO1xufSk7XG4iLCAiaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKCdFZGl0Rm9ybV9KUy8yLjAnKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRQcmV2aWV3OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1BsZWFzZSBwcmV2aWV3IHRoZSBlZGl0ZWQgdGV4dCcsXG5cdFx0XHRqYTogJ+ODl+ODrOODk+ODpeODvOOBl+OBpuOBj+OBoOOBleOBhCcsXG5cdFx0XHQnemgtaGFucyc6ICfor7flhYjpooTop4gnLFxuXHRcdFx0J3poLWhhbnQnOiAn6KuL5YWI6aCQ6Ka9Jyxcblx0XHR9KSxcblx0XHRSZXZpc2lvblByZWxvYWRlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDb250ZW50IG9mIHJldmlzaW9uICQxIHByZWxvYWRlZC4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey5Yqg6L2954mI5pysJDHnmoTlhoXlrrnjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey6LyJ5YWl54mI5pysJDHnmoTlhaflrrnjgIInLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICIvKipcbiAqIEBkZXNjcmlwdGlvbiBQcmVsb2FkIGNvbnRlbnRzIGZyb20gUmV2aXNpb24gSUQgKG9sZGlkKVxuICovXG5pbXBvcnQge2FwaX0gZnJvbSAnLi91dGlsL2FwaSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge3NldFdwVGV4dGJveDFDb250ZW50fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBwcmVsb2FkUmV2aWQgPSAoJGVkaXRGb3JtOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0IHJldmlkID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdwcmVsb2FkcmV2aWQnKTtcblxuXHRpZiAoIXJldmlkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKG13LmNvbmZpZy5nZXQoJ2dhZGdldC1FZGl0Rm9ybV9KU19fUmV2aXNpb25QcmVsb2FkZWQnKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG13LmNvbmZpZy5zZXQoJ2dhZGdldC1FZGl0Rm9ybV9KU19fUmV2aXNpb25QcmVsb2FkZWQnLCB0cnVlKTtcblxuXHRjb25zdCB7d2dBY3Rpb259ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICghWydlZGl0JywgJ3N1Ym1pdCddLmluY2x1ZGVzKHdnQWN0aW9uKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRyZXZpZHM6IE51bWJlci5wYXJzZUludChyZXZpZCwgMTApLFxuXHRcdHJ2cHJvcDogJ2NvbnRlbnQnLFxuXHRcdHJ2c2xvdHM6ICdtYWluJyxcblx0fTtcblxuXHR2b2lkIGFwaS5nZXQocGFyYW1zKS50aGVuKCh7cXVlcnl9KSA9PiB7XG5cdFx0Y29uc3Qge2NvbnRlbnR9ID0gcXVlcnkucGFnZXNbMF0ucmV2aXNpb25zWzBdLnNsb3RzLm1haW4gYXMge2NvbnRlbnQ6IHN0cmluZ307XG5cdFx0c2V0V3BUZXh0Ym94MUNvbnRlbnQoeyRlZGl0Rm9ybSwgY29udGVudH0pO1xuXHRcdHZvaWQgbXcubm90aWZ5KGdldE1lc3NhZ2UoJ1JldmlzaW9uUHJlbG9hZGVkJykucmVwbGFjZSgnJDEnLCByZXZpZCksIHt0eXBlOiAnc3VjY2Vzcyd9KTtcblx0fSk7XG59O1xuXG5leHBvcnQge3ByZWxvYWRSZXZpZH07XG4iXSwKICAi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QUFDekQ7TUFBV29EO0lBQU8sQ0FBQztBQUN6QyxTQUFLaEQsR0FBR3NELE9BQU94QixXQUFXLG1CQUFtQixFQUFFeUIsUUFBUSxNQUFNckIsS0FBSyxHQUFHO01BQUNzQixNQUFNO0lBQVMsQ0FBQztFQUN2RixDQUFDO0FBQ0Y7O0FIbkNBLE1BQUEsR0FBS3ZDLG1CQUFBd0MsU0FBUSxFQUFFWCxLQUFLLFNBQVNZLFNBQVNyRCxPQUFzQztBQUMzRUwsS0FBRzJELEtBQUssbUJBQW1CLEVBQUVDLElBQUtoRSxlQUFvQjtBQUVyREQscUJBQWlCQyxTQUFTO0FBRzFCUSxpQkFBYTtNQUFDQztNQUFPVDtJQUFTLENBQUM7QUFHL0JxQyxpQkFBYXJDLFNBQVM7RUFDdkIsQ0FBQztBQUlGLENBQUM7IiwKICAibmFtZXMiOiBbImNsZWFyVW5kb1N1bW1hcnkiLCAiJGVkaXRGb3JtIiwgIiR3cEF1dG9TdW1tYXJ5IiwgImZpbmQiLCAibGVuZ3RoIiwgIm13IiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJ2YWwiLCAiZGlzYWJsZVRpdGxlIiwgIiRib2R5IiwgIiR3cFN1bW1hcnkiLCAicHJvcCIsICJ3Z1dpa2lJRCIsICJjb25maWciLCAiZ2V0IiwgIm5vU2VjdGlvblRpdGxlUGFnZXMiLCAibm9TZWN0aW9uVGl0bGVQYWdlc1JlZ2V4IiwgIndnUGFnZU5hbWUiLCAiaW5jbHVkZXMiLCAidGVzdCIsICJhZGRDU1MiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIlByZXZpZXciLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiUmV2aXNpb25QcmVsb2FkZWQiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJwcmVsb2FkUmV2aWQiLCAicmV2aWQiLCAic2V0IiwgIndnQWN0aW9uIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicmV2aWRzIiwgIk51bWJlciIsICJwYXJzZUludCIsICJydnByb3AiLCAicnZzbG90cyIsICJ0aGVuIiwgInF1ZXJ5IiwgImNvbnRlbnQiLCAicGFnZXMiLCAicmV2aXNpb25zIiwgInNsb3RzIiwgIm1haW4iLCAic2V0V3BUZXh0Ym94MUNvbnRlbnQiLCAibm90aWZ5IiwgInJlcGxhY2UiLCAidHlwZSIsICJnZXRCb2R5IiwgImVkaXRGb3JtIiwgImhvb2siLCAiYWRkIl0KfQo=
