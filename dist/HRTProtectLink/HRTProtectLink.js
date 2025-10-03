/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/HRTProtectLink|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/User:Xiplus/js/HRTProtectLink.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/HRTProtectLink}
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

// dist/HRTProtectLink/HRTProtectLink.js
//! src/HRTProtectLink/HRTProtectLink.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/HRTProtectLink/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    HRT: (0, import_ext_gadget.localize)({
      en: "High-risk template",
      "zh-hans": "高风险模板",
      "zh-hant": "高風險模板"
    }),
    "Full-protect HRT": (0, import_ext_gadget.localize)({
      en: "Enforce full-protection to this high-risk template",
      "zh-hans": "全保护高风险模板",
      "zh-hant": "全保護高風險模板"
    }),
    "Semi-protect HRT": (0, import_ext_gadget.localize)({
      en: "Enforce semi-protection to this high-risk template",
      "zh-hans": "半保护高风险模板",
      "zh-hant": "半保護高風險模板"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/HRTProtectLink/HRTProtectLink.ts
void (0, import_ext_gadget2.getBody)().then(function HRTProtectLink($body) {
  const {
    wgNamespaceNumber
  } = mw.config.get();
  if (![10, 828].includes(wgNamespaceNumber)) {
    return;
  }
  const {
    wgPageName
  } = mw.config.get();
  const semiProtectURL = mw.util.getUrl(wgPageName, {
    action: "protect",
    "mwProtect-level-edit": "autoconfirmed",
    "mwProtect-level-move": "autoconfirmed",
    "mwProtect-reason": getMessage("HRT")
  });
  const fullProtectURL = mw.util.getUrl(wgPageName, {
    action: "protect",
    "mwProtect-level-edit": "sysop",
    "mwProtect-level-move": "sysop",
    "mwProtect-reason": getMessage("HRT")
  });
  const portletId = $body.find("#p-cactions").length ? "p-cactions" : "p-tb";
  mw.util.addPortletLink(portletId, semiProtectURL, getMessage("Semi-protect HRT"), "t-hrt-semiprotect");
  mw.util.addPortletLink(portletId, fullProtectURL, getMessage("Full-protect HRT"), "t-hrt-fullprotect");
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0hSVFByb3RlY3RMaW5rL0hSVFByb3RlY3RMaW5rLnRzIiwgInNyYy9IUlRQcm90ZWN0TGluay9tb2R1bGVzL2kxOG4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9tb2R1bGVzL2kxOG4nO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIEhSVFByb3RlY3RMaW5rKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRjb25zdCB7d2dOYW1lc3BhY2VOdW1iZXJ9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAoIVsxMCwgODI4XS5pbmNsdWRlcyh3Z05hbWVzcGFjZU51bWJlcikpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IHNlbWlQcm90ZWN0VVJMOiBzdHJpbmcgPSBtdy51dGlsLmdldFVybCh3Z1BhZ2VOYW1lLCB7XG5cdFx0YWN0aW9uOiAncHJvdGVjdCcsXG5cdFx0J213UHJvdGVjdC1sZXZlbC1lZGl0JzogJ2F1dG9jb25maXJtZWQnLFxuXHRcdCdtd1Byb3RlY3QtbGV2ZWwtbW92ZSc6ICdhdXRvY29uZmlybWVkJyxcblx0XHQnbXdQcm90ZWN0LXJlYXNvbic6IGdldE1lc3NhZ2UoJ0hSVCcpLFxuXHR9KTtcblx0Y29uc3QgZnVsbFByb3RlY3RVUkw6IHN0cmluZyA9IG13LnV0aWwuZ2V0VXJsKHdnUGFnZU5hbWUsIHtcblx0XHRhY3Rpb246ICdwcm90ZWN0Jyxcblx0XHQnbXdQcm90ZWN0LWxldmVsLWVkaXQnOiAnc3lzb3AnLFxuXHRcdCdtd1Byb3RlY3QtbGV2ZWwtbW92ZSc6ICdzeXNvcCcsXG5cdFx0J213UHJvdGVjdC1yZWFzb24nOiBnZXRNZXNzYWdlKCdIUlQnKSxcblx0fSk7XG5cblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSAkYm9keS5maW5kKCcjcC1jYWN0aW9ucycpLmxlbmd0aCA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJztcblx0bXcudXRpbC5hZGRQb3J0bGV0TGluayhwb3J0bGV0SWQsIHNlbWlQcm90ZWN0VVJMLCBnZXRNZXNzYWdlKCdTZW1pLXByb3RlY3QgSFJUJyksICd0LWhydC1zZW1pcHJvdGVjdCcpO1xuXHRtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgZnVsbFByb3RlY3RVUkwsIGdldE1lc3NhZ2UoJ0Z1bGwtcHJvdGVjdCBIUlQnKSwgJ3QtaHJ0LWZ1bGxwcm90ZWN0Jyk7XG59KTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0SFJUOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0hpZ2gtcmlzayB0ZW1wbGF0ZScsXG5cdFx0XHQnemgtaGFucyc6ICfpq5jpo47pmanmqKHmnb8nLFxuXHRcdFx0J3poLWhhbnQnOiAn6auY6aKo6Zqq5qih5p2/Jyxcblx0XHR9KSxcblx0XHQnRnVsbC1wcm90ZWN0IEhSVCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRW5mb3JjZSBmdWxsLXByb3RlY3Rpb24gdG8gdGhpcyBoaWdoLXJpc2sgdGVtcGxhdGUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5YWo5L+d5oqk6auY6aOO6Zmp5qih5p2/Jyxcblx0XHRcdCd6aC1oYW50JzogJ+WFqOS/neitt+mrmOmiqOmaquaooeadvycsXG5cdFx0fSksXG5cdFx0J1NlbWktcHJvdGVjdCBIUlQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VuZm9yY2Ugc2VtaS1wcm90ZWN0aW9uIHRvIHRoaXMgaGlnaC1yaXNrIHRlbXBsYXRlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WNiuS/neaKpOmrmOmjjumZqeaooeadvycsXG5cdFx0XHQnemgtaGFudCc6ICfljYrkv53orbfpq5jpoqjpmqrmqKHmnb8nLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFzQkMsUUFBQSxpQkFBQTs7QUNBdEIsSUFBQUMsb0JBQXVCRCxRQUFBLGlCQUFBO0FBRXZCLElBQU1FLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLE1BQUEsR0FBS0Ysa0JBQUFHLFVBQVM7TUFDYkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELHFCQUFBLEdBQW9CSixrQkFBQUcsVUFBUztNQUM1QkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELHFCQUFBLEdBQW9CSixrQkFBQUcsVUFBUztNQUM1QkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNQyxlQUFlSixnQkFBZ0I7QUFFckMsSUFBTUssYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QUR2QkEsTUFBQSxHQUFLVCxtQkFBQVUsU0FBUSxFQUFFQyxLQUFLLFNBQVNDLGVBQWVDLE9BQXNDO0FBQ2pGLFFBQU07SUFBQ0M7RUFBaUIsSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUMxQyxNQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRUMsU0FBU0osaUJBQWlCLEdBQUc7QUFDM0M7RUFDRDtBQUVBLFFBQU07SUFBQ0s7RUFBVSxJQUFJSixHQUFHQyxPQUFPQyxJQUFJO0FBQ25DLFFBQU1HLGlCQUF5QkwsR0FBR00sS0FBS0MsT0FBT0gsWUFBWTtJQUN6REksUUFBUTtJQUNSLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsb0JBQW9CZixXQUFXLEtBQUs7RUFDckMsQ0FBQztBQUNELFFBQU1nQixpQkFBeUJULEdBQUdNLEtBQUtDLE9BQU9ILFlBQVk7SUFDekRJLFFBQVE7SUFDUix3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLG9CQUFvQmYsV0FBVyxLQUFLO0VBQ3JDLENBQUM7QUFFRCxRQUFNaUIsWUFBbUNaLE1BQU1hLEtBQUssYUFBYSxFQUFFQyxTQUFTLGVBQWU7QUFDM0ZaLEtBQUdNLEtBQUtPLGVBQWVILFdBQVdMLGdCQUFnQlosV0FBVyxrQkFBa0IsR0FBRyxtQkFBbUI7QUFDckdPLEtBQUdNLEtBQUtPLGVBQWVILFdBQVdELGdCQUFnQmhCLFdBQVcsa0JBQWtCLEdBQUcsbUJBQW1CO0FBQ3RHLENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJIUlQiLCAibG9jYWxpemUiLCAiZW4iLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImdldEJvZHkiLCAidGhlbiIsICJIUlRQcm90ZWN0TGluayIsICIkYm9keSIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImluY2x1ZGVzIiwgIndnUGFnZU5hbWUiLCAic2VtaVByb3RlY3RVUkwiLCAidXRpbCIsICJnZXRVcmwiLCAiYWN0aW9uIiwgImZ1bGxQcm90ZWN0VVJMIiwgInBvcnRsZXRJZCIsICJmaW5kIiwgImxlbmd0aCIsICJhZGRQb3J0bGV0TGluayJdCn0K
