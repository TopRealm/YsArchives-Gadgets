/**
 * SPDX-License-Identifier: MIT + CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 * _addText: '{{Gadget Header|license=MIT|attribution=Diskdance, Lt2818}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-PreviewWithVariant.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/PreviewWithVariant}
 * @license MIT {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-PreviewWithVariant.js}
 * @license CC-BY-SA-4.0 {@link https://youshou.wiki/wiki/H:CC-BY-SA-4.0}
 */

/**
 * Copyright Diskdance, Lt2818
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
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

// dist/PreviewWithVariant/PreviewWithVariant.js
//! src/PreviewWithVariant/options.json
var configKey = "gadget-PreviewWithVariant__Initialized";
//! src/PreviewWithVariant/modules/processWikiEditor.ts
var import_ext_gadget = require("ext.gadget.Util");
//! src/PreviewWithVariant/modules/constant.ts
var VARIANTS = [{
  data: "zh",
  label: window.wgULS("不转换", "不轉換")
}, {
  data: "zh-hans",
  label: "简体"
}, {
  data: "zh-hant",
  label: "繁體"
}, {
  data: "zh-cn",
  label: "中国大陆简体"
}, {
  data: "zh-hk",
  label: "中國香港繁體"
}, {
  data: "zh-mo",
  label: "中國澳門繁體"
}, {
  data: "zh-my",
  label: "马来西亚简体"
}, {
  data: "zh-sg",
  label: "新加坡简体"
}, {
  data: "zh-tw",
  label: "中國臺灣繁體"
}];
//! src/PreviewWithVariant/modules/processWikiEditor.ts
var processWikiEditor = ($editForm) => {
  if (mw.config.get(configKey)) {
    return;
  }
  const {
    wgPageContentModel,
    wgUserVariant
  } = mw.config.get();
  const $templateSandboxPreview = $editForm.find('input[name="wpTemplateSandboxPreview"]');
  if (wgPageContentModel !== "wikitext" && !$templateSandboxPreview.length) {
    return;
  }
  const $layout = $editForm.find(".editCheckboxes .oo-ui-horizontalLayout");
  if (!$layout.length) {
    return;
  }
  mw.config.set(configKey, true);
  const uriVariant = mw.util.getParamValue("variant");
  const checkbox = new OO.ui.CheckboxInputWidget({
    selected: Boolean(uriVariant)
  });
  const dropdown = new OO.ui.DropdownWidget({
    $overlay: true,
    disabled: !checkbox.isSelected(),
    menu: {
      items: VARIANTS.map(({
        data,
        label
      }) => {
        return new OO.ui.MenuOptionWidget({
          data,
          label
        });
      })
    }
  });
  dropdown.getMenu().selectItemByData(wgUserVariant || uriVariant || mw.user.options.get("variant"));
  checkbox.on("change", (selected) => {
    dropdown.setDisabled(!selected);
  });
  const getSelectedVariant = () => {
    if (!checkbox.isSelected()) {
      return;
    }
    const selectedItem = dropdown.getMenu().findSelectedItem();
    return selectedItem ? selectedItem.getData() : void 0;
  };
  const manipulateActionUrl = () => {
    const selectedVariant = getSelectedVariant();
    const originalAction = $editForm.attr("action");
    if (selectedVariant && originalAction) {
      $editForm.attr("action", new import_ext_gadget.MwUri(originalAction).extend({
        variant: selectedVariant
      }).getRelativePath());
    }
  };
  const manipulateVariantConfig = () => {
    mw.config.set("wgUserVariant", getSelectedVariant() || mw.user.options.get("variant"));
  };
  $editForm.find("input[name=wpPreview]").on("click", mw.user.options.get("uselivepreview") ? manipulateVariantConfig : manipulateActionUrl);
  $templateSandboxPreview.on("click", manipulateActionUrl);
  dropdown.getMenu().on("select", manipulateVariantConfig);
  const checkboxField = new OO.ui.FieldLayout(checkbox, {
    align: "inline",
    label: window.wgULS("预览字词转换", "預覽字詞轉換")
  });
  const dropdownField = new OO.ui.FieldLayout(dropdown, {
    align: "top",
    label: window.wgULS("使用该语言变体显示预览：", "使用該語言變體顯示預覽："),
    invisibleLabel: true
  });
  $layout.append($("<div>").attr("id", "pwv-area").append(checkboxField.$element, dropdownField.$element));
};
//! src/PreviewWithVariant/PreviewWithVariant.ts
(function previewWithVariants() {
  mw.hook("wikipage.editform").add(($editForm) => {
    processWikiEditor($editForm);
  });
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9vcHRpb25zLmpzb24iLCAic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yLnRzIiwgInNyYy9QcmV2aWV3V2l0aFZhcmlhbnQvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvUHJldmlld1dpdGhWYXJpYW50L1ByZXZpZXdXaXRoVmFyaWFudC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcImNvbmZpZ0tleVwiOiBcImdhZGdldC1QcmV2aWV3V2l0aFZhcmlhbnRfX0luaXRpYWxpemVkXCJcbn1cbiIsICJpbXBvcnQgJy4vcHJvY2Vzc1dpa2lFZGl0b3IubGVzcyc7XG5pbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge013VXJpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtWQVJJQU5UU30gZnJvbSAnLi9jb25zdGFudCc7XG4vKipcbiAqIEBkZXNjcmlwdGlvbiBBZGQgYSBcIlByZXZpZXcgd2l0aCB2YXJpYW50XCIgb3B0aW9uIHRvIHRoZSBlZGl0IGZvcm0uXG4gKlxuICogQHBhcmFtIHtKUXVlcnl9ICRlZGl0Rm9ybVxuICovXG5jb25zdCBwcm9jZXNzV2lraUVkaXRvciA9ICgkZWRpdEZvcm06IEpRdWVyeTxIVE1MRWxlbWVudD4pOiB2b2lkID0+IHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7d2dQYWdlQ29udGVudE1vZGVsLCB3Z1VzZXJWYXJpYW50fSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgJHRlbXBsYXRlU2FuZGJveFByZXZpZXc6IEpRdWVyeSA9ICRlZGl0Rm9ybS5maW5kKCdpbnB1dFtuYW1lPVwid3BUZW1wbGF0ZVNhbmRib3hQcmV2aWV3XCJdJyk7XG5cblx0Ly8gSXQgaXMgcG9zc2libGUgdGhhdCBhIHVzZXIgd2FudCB0byBwcmV2aWV3IGEgcGFnZSB3aXRoIGEgbm9uLXdpa2l0ZXh0IG1vZHVsZVxuXHQvLyBEbyBub3QgcmV0dXJuIGluIHRoaXMgY2FzZVxuXHRpZiAod2dQYWdlQ29udGVudE1vZGVsICE9PSAnd2lraXRleHQnICYmICEkdGVtcGxhdGVTYW5kYm94UHJldmlldy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkbGF5b3V0OiBKUXVlcnkgPSAkZWRpdEZvcm0uZmluZCgnLmVkaXRDaGVja2JveGVzIC5vby11aS1ob3Jpem9udGFsTGF5b3V0Jyk7XG5cdGlmICghJGxheW91dC5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCB0cnVlKTtcblxuXHRjb25zdCB1cmlWYXJpYW50OiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd2YXJpYW50Jyk7XG5cblx0Y29uc3QgY2hlY2tib3g6IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQgPSBuZXcgT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCh7XG5cdFx0c2VsZWN0ZWQ6IEJvb2xlYW4odXJpVmFyaWFudCksXG5cdH0pO1xuXG5cdGNvbnN0IGRyb3Bkb3duOiBPTy51aS5Ecm9wZG93bldpZGdldCA9IG5ldyBPTy51aS5Ecm9wZG93bldpZGdldCh7XG5cdFx0JG92ZXJsYXk6IHRydWUsXG5cdFx0ZGlzYWJsZWQ6ICFjaGVja2JveC5pc1NlbGVjdGVkKCksXG5cdFx0bWVudToge1xuXHRcdFx0aXRlbXM6IFZBUklBTlRTLm1hcCgoe2RhdGEsIGxhYmVsfSk6IE9PLnVpLk1lbnVPcHRpb25XaWRnZXQgPT4ge1xuXHRcdFx0XHRyZXR1cm4gbmV3IE9PLnVpLk1lbnVPcHRpb25XaWRnZXQoe1xuXHRcdFx0XHRcdGRhdGEsXG5cdFx0XHRcdFx0bGFiZWwsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSksXG5cdFx0fSxcblx0fSk7XG5cblx0ZHJvcGRvd24uZ2V0TWVudSgpLnNlbGVjdEl0ZW1CeURhdGEod2dVc2VyVmFyaWFudCB8fCB1cmlWYXJpYW50IHx8IG13LnVzZXIub3B0aW9ucy5nZXQoJ3ZhcmlhbnQnKSk7XG5cblx0Y2hlY2tib3gub24oJ2NoYW5nZScsIChzZWxlY3RlZDogYm9vbGVhbiB8IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdGRyb3Bkb3duLnNldERpc2FibGVkKCFzZWxlY3RlZCk7XG5cdH0pO1xuXG5cdGNvbnN0IGdldFNlbGVjdGVkVmFyaWFudCA9ICgpOiBzdHJpbmcgfCB1bmRlZmluZWQgPT4ge1xuXHRcdGlmICghY2hlY2tib3guaXNTZWxlY3RlZCgpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHNlbGVjdGVkSXRlbTogT08udWkuT3B0aW9uV2lkZ2V0IHwgbnVsbCA9IGRyb3Bkb3duXG5cdFx0XHQuZ2V0TWVudSgpXG5cdFx0XHQuZmluZFNlbGVjdGVkSXRlbSgpIGFzIE9PLnVpLk9wdGlvbldpZGdldCB8IG51bGw7XG5cdFx0cmV0dXJuIHNlbGVjdGVkSXRlbSA/IChzZWxlY3RlZEl0ZW0uZ2V0RGF0YSgpIGFzIHN0cmluZykgOiB1bmRlZmluZWQ7XG5cdH07XG5cblx0Y29uc3QgbWFuaXB1bGF0ZUFjdGlvblVybCA9ICgpOiB2b2lkID0+IHtcblx0XHRjb25zdCBzZWxlY3RlZFZhcmlhbnQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IGdldFNlbGVjdGVkVmFyaWFudCgpO1xuXHRcdGNvbnN0IG9yaWdpbmFsQWN0aW9uOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkZWRpdEZvcm0uYXR0cignYWN0aW9uJyk7XG5cdFx0aWYgKHNlbGVjdGVkVmFyaWFudCAmJiBvcmlnaW5hbEFjdGlvbikge1xuXHRcdFx0JGVkaXRGb3JtLmF0dHIoXG5cdFx0XHRcdCdhY3Rpb24nLFxuXHRcdFx0XHRuZXcgTXdVcmkob3JpZ2luYWxBY3Rpb24pXG5cdFx0XHRcdFx0LmV4dGVuZCh7XG5cdFx0XHRcdFx0XHR2YXJpYW50OiBzZWxlY3RlZFZhcmlhbnQsXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuZ2V0UmVsYXRpdmVQYXRoKClcblx0XHRcdCk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IG1hbmlwdWxhdGVWYXJpYW50Q29uZmlnID0gKCk6IHZvaWQgPT4ge1xuXHRcdG13LmNvbmZpZy5zZXQoJ3dnVXNlclZhcmlhbnQnLCBnZXRTZWxlY3RlZFZhcmlhbnQoKSB8fCAobXcudXNlci5vcHRpb25zLmdldCgndmFyaWFudCcpIGFzIHN0cmluZykpO1xuXHR9O1xuXG5cdCRlZGl0Rm9ybVxuXHRcdC5maW5kKCdpbnB1dFtuYW1lPXdwUHJldmlld10nKVxuXHRcdC5vbignY2xpY2snLCBtdy51c2VyLm9wdGlvbnMuZ2V0KCd1c2VsaXZlcHJldmlldycpID8gbWFuaXB1bGF0ZVZhcmlhbnRDb25maWcgOiBtYW5pcHVsYXRlQWN0aW9uVXJsKTtcblxuXHQkdGVtcGxhdGVTYW5kYm94UHJldmlldy5vbignY2xpY2snLCBtYW5pcHVsYXRlQWN0aW9uVXJsKTtcblxuXHRkcm9wZG93bi5nZXRNZW51KCkub24oJ3NlbGVjdCcsIG1hbmlwdWxhdGVWYXJpYW50Q29uZmlnKTtcblxuXHRjb25zdCBjaGVja2JveEZpZWxkOiBPTy51aS5GaWVsZExheW91dDxPTy51aS5DaGVja2JveElucHV0V2lkZ2V0PiA9IG5ldyBPTy51aS5GaWVsZExheW91dChjaGVja2JveCwge1xuXHRcdGFsaWduOiAnaW5saW5lJyxcblx0XHRsYWJlbDogd2luZG93LndnVUxTKCfpooTop4jlrZfor43ovazmjaInLCAn6aCQ6Ka95a2X6Kme6L2J5o+bJyksXG5cdH0pO1xuXG5cdGNvbnN0IGRyb3Bkb3duRmllbGQ6IE9PLnVpLkZpZWxkTGF5b3V0PE9PLnVpLkRyb3Bkb3duV2lkZ2V0PiA9IG5ldyBPTy51aS5GaWVsZExheW91dChkcm9wZG93biwge1xuXHRcdGFsaWduOiAndG9wJyxcblx0XHRsYWJlbDogd2luZG93LndnVUxTKCfkvb/nlKjor6Xor63oqIDlj5jkvZPmmL7npLrpooTop4jvvJonLCAn5L2/55So6Kmy6Kqe6KiA6K6K6auU6aGv56S66aCQ6Ka977yaJyksXG5cdFx0aW52aXNpYmxlTGFiZWw6IHRydWUsXG5cdH0pO1xuXG5cdCRsYXlvdXQuYXBwZW5kKCQoJzxkaXY+JykuYXR0cignaWQnLCAncHd2LWFyZWEnKS5hcHBlbmQoY2hlY2tib3hGaWVsZC4kZWxlbWVudCwgZHJvcGRvd25GaWVsZC4kZWxlbWVudCkpO1xufTtcblxuZXhwb3J0IHtwcm9jZXNzV2lraUVkaXRvcn07XG4iLCAiY29uc3QgVkFSSUFOVFM6IHtcblx0ZGF0YTogc3RyaW5nO1xuXHRsYWJlbDogc3RyaW5nO1xufVtdID0gW1xuXHR7XG5cdFx0ZGF0YTogJ3poJyxcblx0XHRsYWJlbDogd2luZG93LndnVUxTKCfkuI3ovazmjaInLCAn5LiN6L2J5o+bJyksXG5cdH0sXG5cdHtcblx0XHRkYXRhOiAnemgtaGFucycsXG5cdFx0bGFiZWw6ICfnroDkvZMnLFxuXHR9LFxuXHR7XG5cdFx0ZGF0YTogJ3poLWhhbnQnLFxuXHRcdGxhYmVsOiAn57mB6auUJyxcblx0fSxcblx0e1xuXHRcdGRhdGE6ICd6aC1jbicsXG5cdFx0bGFiZWw6ICfkuK3lm73lpKfpmYbnroDkvZMnLFxuXHR9LFxuXHR7XG5cdFx0ZGF0YTogJ3poLWhrJyxcblx0XHRsYWJlbDogJ+S4reWci+mmmea4r+e5gemrlCcsXG5cdH0sXG5cdHtcblx0XHRkYXRhOiAnemgtbW8nLFxuXHRcdGxhYmVsOiAn5Lit5ZyL5r6z6ZaA57mB6auUJyxcblx0fSxcblx0e1xuXHRcdGRhdGE6ICd6aC1teScsXG5cdFx0bGFiZWw6ICfpqazmnaXopb/kuprnroDkvZMnLFxuXHR9LFxuXHR7XG5cdFx0ZGF0YTogJ3poLXNnJyxcblx0XHRsYWJlbDogJ+aWsOWKoOWdoeeugOS9kycsXG5cdH0sXG5cdHtcblx0XHRkYXRhOiAnemgtdHcnLFxuXHRcdGxhYmVsOiAn5Lit5ZyL6Ie654Gj57mB6auUJyxcblx0fSxcbl07XG5cbmV4cG9ydCB7VkFSSUFOVFN9O1xuIiwgImltcG9ydCB7cHJvY2Vzc1dpa2lFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzV2lraUVkaXRvcic7XG5cbihmdW5jdGlvbiBwcmV2aWV3V2l0aFZhcmlhbnRzKCk6IHZvaWQge1xuXHRtdy5ob29rKCd3aWtpcGFnZS5lZGl0Zm9ybScpLmFkZCgoJGVkaXRGb3JtKTogdm9pZCA9PiB7XG5cdFx0cHJvY2Vzc1dpa2lFZGl0b3IoJGVkaXRGb3JtKTtcblx0fSk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLFlBQWE7O0FDQ2QsSUFBQUMsb0JBQW9CQyxRQUFBLGlCQUFBOztBQ0ZwQixJQUFNQyxXQUdBLENBQ0w7RUFDQ0MsTUFBTTtFQUNOQyxPQUFPQyxPQUFPQyxNQUFNLE9BQU8sS0FBSztBQUNqQyxHQUNBO0VBQ0NILE1BQU07RUFDTkMsT0FBTztBQUNSLEdBQ0E7RUFDQ0QsTUFBTTtFQUNOQyxPQUFPO0FBQ1IsR0FDQTtFQUNDRCxNQUFNO0VBQ05DLE9BQU87QUFDUixHQUNBO0VBQ0NELE1BQU07RUFDTkMsT0FBTztBQUNSLEdBQ0E7RUFDQ0QsTUFBTTtFQUNOQyxPQUFPO0FBQ1IsR0FDQTtFQUNDRCxNQUFNO0VBQ05DLE9BQU87QUFDUixHQUNBO0VBQ0NELE1BQU07RUFDTkMsT0FBTztBQUNSLEdBQ0E7RUFDQ0QsTUFBTTtFQUNOQyxPQUFPO0FBQ1IsQ0FBQTs7QUQ5QkQsSUFBTUcsb0JBQXFCQyxlQUF5QztBQUVuRSxNQUFJQyxHQUFHQyxPQUFPQyxJQUFZWixTQUFTLEdBQUc7QUFDckM7RUFDRDtBQUVBLFFBQU07SUFBQ2E7SUFBb0JDO0VBQWEsSUFBSUosR0FBR0MsT0FBT0MsSUFBSTtBQUMxRCxRQUFNRywwQkFBa0NOLFVB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OyIsCiAgIm5hbWVzIjogWyJjb25maWdLZXkiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJWQVJJQU5UUyIsICJkYXRhIiwgImxhYmVsIiwgIndpbmRvdyIsICJ3Z1VMUyIsICJwcm9jZXNzV2lraUVkaXRvciIsICIkZWRpdEZvcm0iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJ3Z1BhZ2VDb250ZW50TW9kZWwiLCAid2dVc2VyVmFyaWFudCIsICIkdGVtcGxhdGVTYW5kYm94UHJldmlldyIsICJmaW5kIiwgImxlbmd0aCIsICIkbGF5b3V0IiwgInNldCIsICJ1cmlWYXJpYW50IiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJjaGVja2JveCIsICJPTyIsICJ1aSIsICJDaGVja2JveElucHV0V2lkZ2V0IiwgInNlbGVjdGVkIiwgIkJvb2xlYW4iLCAiZHJvcGRvd24iLCAiRHJvcGRvd25XaWRnZXQiLCAiJG92ZXJsYXkiLCAiZGlzYWJsZWQiLCAiaXNTZWxlY3RlZCIsICJtZW51IiwgIml0ZW1zIiwgIm1hcCIsICJNZW51T3B0aW9uV2lkZ2V0IiwgImdldE1lbnUiLCAic2VsZWN0SXRlbUJ5RGF0YSIsICJ1c2VyIiwgIm9wdGlvbnMiLCAib24iLCAic2V0RGlzYWJsZWQiLCAiZ2V0U2VsZWN0ZWRWYXJpYW50IiwgInNlbGVjdGVkSXRlbSIsICJmaW5kU2VsZWN0ZWRJdGVtIiwgImdldERhdGEiLCAibWFuaXB1bGF0ZUFjdGlvblVybCIsICJzZWxlY3RlZFZhcmlhbnQiLCAib3JpZ2luYWxBY3Rpb24iLCAiYXR0ciIsICJNd1VyaSIsICJleHRlbmQiLCAidmFyaWFudCIsICJnZXRSZWxhdGl2ZVBhdGgiLCAibWFuaXB1bGF0ZVZhcmlhbnRDb25maWciLCAiY2hlY2tib3hGaWVsZCIsICJGaWVsZExheW91dCIsICJhbGlnbiIsICJkcm9wZG93bkZpZWxkIiwgImludmlzaWJsZUxhYmVsIiwgImFwcGVuZCIsICIkIiwgIiRlbGVtZW50IiwgInByZXZpZXdXaXRoVmFyaWFudHMiLCAiaG9vayIsICJhZGQiXQp9Cg==
