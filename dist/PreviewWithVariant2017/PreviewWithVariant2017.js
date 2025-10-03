/**
 * SPDX-License-Identifier: MIT
 * _addText: '{{Gadget Header|license=MIT|attribution=Diskdance, et. al.}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-PreviewWithVariant2017.js}
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-PreviewWithVariant2017.css}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/PreviewWithVariant2017}
 * @license MIT {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-PreviewWithVariant2017.js}
 */

/**
 * Copyright Diskdance
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

// dist/PreviewWithVariant2017/PreviewWithVariant2017.js
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
//! src/PreviewWithVariant2017/PreviewWithVariant2017.ts
var import_ext_gadget = require("ext.gadget.Util");
//! src/PreviewWithVariant2017/options.json
var className = "pwv-2017-variant";
var configKey = "gadget-PreviewWithVariant2017__Initialized";
//! src/PreviewWithVariant2017/modules/constant.ts
var DATA = [{
  var: "zh",
  htmlLang: "zh",
  msg: "pwv-2017-zh"
}, {
  var: "zh-hans",
  htmlLang: "zh-Hans",
  msg: "pwv-2017-zh-hans"
}, {
  var: "zh-hant",
  htmlLang: "zh-Hant",
  msg: "pwv-2017-zh-hant"
}, {
  var: "zh-cn",
  htmlLang: "zh-Hans-CN",
  msg: "pwv-2017-zh-cn"
}, {
  var: "zh-hk",
  htmlLang: "zh-Hant-HK",
  msg: "pwv-2017-zh-hk"
}, {
  var: "zh-mo",
  htmlLang: "zh-Hant-MO",
  msg: "pwv-2017-zh-mo"
}, {
  var: "zh-my",
  htmlLang: "zh-Hans-MY",
  msg: "pwv-2017-zh-my"
}, {
  var: "zh-sg",
  htmlLang: "zh-Hans-SG",
  msg: "pwv-2017-zh-sg"
}, {
  var: "zh-tw",
  htmlLang: "zh-Hant-TW",
  msg: "pwv-2017-zh-tw"
}];
//! src/PreviewWithVariant2017/modules/messages.ts
var PWV2017messages = () => {
  mw.messages.set({
    "pwv-2017-caption": window.wgULS("选择语言变体", "選擇語言變體"),
    "pwv-2017-zh": window.wgULS("不转换", "不轉換"),
    "pwv-2017-zh-hans": "简体",
    "pwv-2017-zh-hant": "繁體",
    "pwv-2017-zh-cn": "中国大陆简体",
    "pwv-2017-zh-hk": "中國香港繁體",
    "pwv-2017-zh-mo": "中國澳門繁體",
    "pwv-2017-zh-my": "马来西亚简体",
    "pwv-2017-zh-sg": "新加坡简体",
    "pwv-2017-zh-tw": "中國臺灣繁體"
  });
};
//! src/PreviewWithVariant2017/modules/processVisualEditor.js
PWV2017messages();
var PendingStackLayout = function PendingStackLayout2(config) {
  PendingStackLayout2.super.call(this, config);
  OO.ui.mixin.PendingElement.call(this);
  this.$element.addClass("pwv-2017-pendingStackLayout");
};
OO.inheritClass(PendingStackLayout, OO.ui.StackLayout);
OO.mixinClass(PendingStackLayout, OO.ui.mixin.PendingElement);
var processVisualEditor = ($body) => {
  const {
    skin,
    wgUserLanguage,
    wgUserVariant
  } = mw.config.get();
  let variant, target, saveDialog, dropdown, stackLayout, panelLayouts, windowManager, errorDialog;
  const constructDocument = (title, wikitext, categories) => {
    const $result = $("<div>").addClass("mw-body mw-body-content");
    if (skin === "vector") {
      $result.addClass("vector-body");
    }
    $result.append(
      $("<h1>").addClass("firstHeading").html(title),
      // Classes used here:
      // * mw-content-ltr
      // * mw-content-rtl
      $("<div>").addClass("mw-content-".concat(mw.config.get("wgVisualEditor").pageLanguageDir)).attr("lang", DATA.find((item) => {
        return item.var === variant;
      }).htmlLang).html(wikitext),
      $.parseHTML(categories)
    );
    mw.hook("wikipage.content").fire($result);
    ve.targetLinksToNewWindow($result[0]);
    return $result;
  };
  const fetchPreview = () => {
    const deferred = $.Deferred();
    target.getContentApi().post({
      action: "parse",
      disableeditsection: true,
      errorformat: "html",
      errorlang: wgUserLanguage,
      errorsuselocal: true,
      formatversion: "2",
      prop: ["text", "indicators", "displaytitle", "categorieshtml", "parsewarningshtml"],
      pst: true,
      preview: true,
      title: target.getPageName(),
      text: target.getDocToSave(),
      uselang: wgUserLanguage,
      variant
    }).then((response) => {
      void deferred.resolve(constructDocument(response.parse.displaytitle, response.parse.text, response.parse.categorieshtml));
    }, (error, detail) => {
      void deferred.reject(detail);
    });
    return deferred;
  };
  const changeVariant = function changeVariant2(val) {
    saveDialog.previewPanel.$element[0].focus();
    variant = val;
    const targetPanel = stackLayout.findItemFromData(variant);
    if (targetPanel.$element.children().length) {
      stackLayout.setItem(targetPanel);
    } else {
      stackLayout.pushPending();
      dropdown.setDisabled(true);
      void fetchPreview().then(($previewContainer) => {
        targetPanel.$element.append($previewContainer);
        stackLayout.setItem(targetPanel);
      }, (error) => {
        windowManager.openWindow(errorDialog, {
          title: OO.ui.msg("ooui-dialog-process-error"),
          message: window.ve.init.target.getContentApi().getErrorMessage(error),
          actions: [{
            action: "reject",
            label: OO.ui.deferMsg("ooui-dialog-message-reject"),
            flags: "safe"
          }, {
            action: "retry",
            label: OO.ui.deferMsg("ooui-dialog-process-retry"),
            flags: ["primary", "progressive"]
          }]
        }).closed.then((data) => {
          if (data && data.action === "retry") {
            changeVariant2(variant);
          } else {
            dropdown.setValue(stackLayout.getCurrentItem().getData());
          }
        });
      }).always(() => {
        stackLayout.popPending();
        dropdown.setDisabled(false);
      });
    }
  };
  const previewWithVariant = () => {
    const currentPanel = stackLayout.getCurrentItem();
    if (currentPanel.$element.children().length) {
      saveDialog.swapPanel("preview");
      saveDialog.previewPanel.$element.prepend(dropdown.$element);
    } else {
      target.emit("savePreview");
      saveDialog.pushPending();
      void fetchPreview().then(($previewContent) => {
        target.getSurface().getModel().getDocument().once("transact", () => {
          var _iterator = _createForOfIteratorHelper(panelLayouts), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              const item = _step.value;
              item.$element.empty();
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        });
        saveDialog.swapPanel("preview");
        currentPanel.$element.append($previewContent);
        stackLayout.setItem(stackLayout.findItemFromData(variant));
        if (!saveDialog.$element.find(".".concat(className)).length) {
          saveDialog.previewPanel.$element.prepend(dropdown.$element);
        }
      }, (error) => {
        saveDialog.showErrors(new OO.ui.Error(window.ve.init.target.getContentApi().getErrorMessage(error), {
          recoverable: true
        }));
      }).always(() => {
        saveDialog.popPending();
      });
    }
  };
  const init = () => {
    variant = wgUserVariant;
    ({
      target
    } = window.ve.init);
    ({
      saveDialog
    } = target);
    dropdown = new OO.ui.DropdownInputWidget({
      $overlay: saveDialog.$overlay,
      classes: [className],
      options: [{
        optgroup: mw.msg("pwv-2017-caption")
      }, ...DATA.map((item) => {
        return {
          data: item.var,
          label: mw.msg(item.msg)
        };
      })],
      value: variant
    });
    dropdown.on("change", changeVariant);
    panelLayouts = DATA.map((item) => {
      return new OO.ui.PanelLayout({
        expanded: false,
        data: item.var
      });
    });
    stackLayout = new PendingStackLayout({
      expanded: false,
      items: panelLayouts
    });
    stackLayout.setItem(stackLayout.findItemFromData(variant));
    saveDialog.previewPanel.$element.append(stackLayout.$element);
    errorDialog = new OO.ui.MessageDialog();
    windowManager = new OO.ui.WindowManager();
    windowManager.addWindows([errorDialog]);
    $body.append(windowManager.$element);
    const handlerToRemove = "onSaveDialogPreview";
    saveDialog.off("preview", handlerToRemove, target).on("preview", previewWithVariant);
    mw.hook("ve.activationComplete").add(() => {
      if (mw.config.get(configKey)) {
        mw.config.set(configKey, false);
      }
    });
  };
  if (!mw.config.get(configKey)) {
    init();
    mw.config.set(configKey, true);
  }
};
//! src/PreviewWithVariant2017/PreviewWithVariant2017.ts
void (0, import_ext_gadget.getBody)().then(function previewWithVariants2017($body) {
  mw.hook("ve.saveDialog.stateChanged").add(() => {
    processVisualEditor($body);
  });
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ByZXZpZXdXaXRoVmFyaWFudDIwMTcvUHJldmlld1dpdGhWYXJpYW50MjAxNy50cyIsICJzcmMvUHJldmlld1dpdGhWYXJpYW50MjAxNy9vcHRpb25zLmpzb24iLCAic3JjL1ByZXZpZXdXaXRoVmFyaWFudDIwMTcvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvUHJldmlld1dpdGhWYXJpYW50MjAxNy9tb2R1bGVzL21lc3NhZ2VzLnRzIiwgInNyYy9QcmV2aWV3V2l0aFZhcmlhbnQyMDE3L21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvci5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtwcm9jZXNzVmlzdWFsRWRpdG9yfSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvci5qcyc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gcHJldmlld1dpdGhWYXJpYW50czIwMTcoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdG13Lmhvb2soJ3ZlLnNhdmVEaWFsb2cuc3RhdGVDaGFuZ2VkJykuYWRkKCgpOiB2b2lkID0+IHtcblx0XHRwcm9jZXNzVmlzdWFsRWRpdG9yKCRib2R5KTtcblx0fSk7XG59KTtcbiIsICJ7XG5cdFwiY2xhc3NOYW1lXCI6IFwicHd2LTIwMTctdmFyaWFudFwiLFxuXHRcImNvbmZpZ0tleVwiOiBcImdhZGdldC1QcmV2aWV3V2l0aFZhcmlhbnQyMDE3X19Jbml0aWFsaXplZFwiXG59XG4iLCAiY29uc3QgREFUQSA9IFtcblx0e3ZhcjogJ3poJywgaHRtbExhbmc6ICd6aCcsIG1zZzogJ3B3di0yMDE3LXpoJ30sXG5cdHt2YXI6ICd6aC1oYW5zJywgaHRtbExhbmc6ICd6aC1IYW5zJywgbXNnOiAncHd2LTIwMTctemgtaGFucyd9LFxuXHR7dmFyOiAnemgtaGFudCcsIGh0bWxMYW5nOiAnemgtSGFudCcsIG1zZzogJ3B3di0yMDE3LXpoLWhhbnQnfSxcblx0e3ZhcjogJ3poLWNuJywgaHRtbExhbmc6ICd6aC1IYW5zLUNOJywgbXNnOiAncHd2LTIwMTctemgtY24nfSxcblx0e3ZhcjogJ3poLWhrJywgaHRtbExhbmc6ICd6aC1IYW50LUhLJywgbXNnOiAncHd2LTIwMTctemgtaGsnfSxcblx0e3ZhcjogJ3poLW1vJywgaHRtbExhbmc6ICd6aC1IYW50LU1PJywgbXNnOiAncHd2LTIwMTctemgtbW8nfSxcblx0e3ZhcjogJ3poLW15JywgaHRtbExhbmc6ICd6aC1IYW5zLU1ZJywgbXNnOiAncHd2LTIwMTctemgtbXknfSxcblx0e3ZhcjogJ3poLXNnJywgaHRtbExhbmc6ICd6aC1IYW5zLVNHJywgbXNnOiAncHd2LTIwMTctemgtc2cnfSxcblx0e3ZhcjogJ3poLXR3JywgaHRtbExhbmc6ICd6aC1IYW50LVRXJywgbXNnOiAncHd2LTIwMTctemgtdHcnfSxcbl07XG5cbmV4cG9ydCB7REFUQX07XG4iLCAiY29uc3QgUFdWMjAxN21lc3NhZ2VzID0gKCkgPT4ge1xuXHRtdy5tZXNzYWdlcy5zZXQoe1xuXHRcdCdwd3YtMjAxNy1jYXB0aW9uJzogd2luZG93LndnVUxTKCfpgInmi6nor63oqIDlj5jkvZMnLCAn6YG45pOH6Kqe6KiA6K6K6auUJyksXG5cdFx0J3B3di0yMDE3LXpoJzogd2luZG93LndnVUxTKCfkuI3ovazmjaInLCAn5LiN6L2J5o+bJyksXG5cdFx0J3B3di0yMDE3LXpoLWhhbnMnOiAn566A5L2TJyxcblx0XHQncHd2LTIwMTctemgtaGFudCc6ICfnuYHpq5QnLFxuXHRcdCdwd3YtMjAxNy16aC1jbic6ICfkuK3lm73lpKfpmYbnroDkvZMnLFxuXHRcdCdwd3YtMjAxNy16aC1oayc6ICfkuK3lnIvpppnmuK/nuYHpq5QnLFxuXHRcdCdwd3YtMjAxNy16aC1tbyc6ICfkuK3lnIvmvrPploDnuYHpq5QnLFxuXHRcdCdwd3YtMjAxNy16aC1teSc6ICfpqazmnaXopb/kuprnroDkvZMnLFxuXHRcdCdwd3YtMjAxNy16aC1zZyc6ICfmlrDliqDlnaHnroDkvZMnLFxuXHRcdCdwd3YtMjAxNy16aC10dyc6ICfkuK3lnIvoh7rngaPnuYHpq5QnLFxuXHR9KTtcbn07XG5cbmV4cG9ydCB7UFdWMjAxN21lc3NhZ2VzfTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0ICcuL3Byb2Nlc3NWaXN1YWxFZGl0b3IubGVzcyc7XG5pbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge0RBVEF9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHtQV1YyMDE3bWVzc2FnZXN9IGZyb20gJy4vbWVzc2FnZXMnO1xuXG5QV1YyMDE3bWVzc2FnZXMoKTtcblxuY29uc3QgUGVuZGluZ1N0YWNrTGF5b3V0ID0gZnVuY3Rpb24gUGVuZGluZ1N0YWNrTGF5b3V0KGNvbmZpZykge1xuXHRQZW5kaW5nU3RhY2tMYXlvdXQuc3VwZXIuY2FsbCh0aGlzLCBjb25maWcpO1xuXHRPTy51aS5taXhpbi5QZW5kaW5nRWxlbWVudC5jYWxsKHRoaXMpO1xuXHR0aGlzLiRlbGVtZW50LmFkZENsYXNzKCdwd3YtMjAxNy1wZW5kaW5nU3RhY2tMYXlvdXQnKTtcbn07XG5cbk9PLmluaGVyaXRDbGFzcyhQZW5kaW5nU3RhY2tMYXlvdXQsIE9PLnVpLlN0YWNrTGF5b3V0KTtcbk9PLm1peGluQ2xhc3MoUGVuZGluZ1N0YWNrTGF5b3V0LCBPTy51aS5taXhpbi5QZW5kaW5nRWxlbWVudCk7XG5cbmNvbnN0IHByb2Nlc3NWaXN1YWxFZGl0b3IgPSAoJGJvZHkpID0+IHtcblx0Y29uc3Qge3NraW4sIHdnVXNlckxhbmd1YWdlLCB3Z1VzZXJWYXJpYW50fSA9IG13LmNvbmZpZy5nZXQoKTtcblx0bGV0IHZhcmlhbnQsIHRhcmdldCwgc2F2ZURpYWxvZywgZHJvcGRvd24sIHN0YWNrTGF5b3V0LCBwYW5lbExheW91dHMsIHdpbmRvd01hbmFnZXIsIGVycm9yRGlhbG9nO1xuXG5cdGNvbnN0IGNvbnN0cnVjdERvY3VtZW50ID0gKHRpdGxlLCB3aWtpdGV4dCwgY2F0ZWdvcmllcykgPT4ge1xuXHRcdGNvbnN0ICRyZXN1bHQgPSAkKCc8ZGl2PicpLmFkZENsYXNzKCdtdy1ib2R5IG13LWJvZHktY29udGVudCcpO1xuXG5cdFx0aWYgKHNraW4gPT09ICd2ZWN0b3InKSB7XG5cdFx0XHQvLyBBZGRpdGlvbmFsIGNsYXNzZXMgcmVxdWlyZWQgaW4gdmVjdG9yIHRvIGdldCBjb3JyZWN0IGFwcGVhcmFuY2Vcblx0XHRcdCRyZXN1bHQuYWRkQ2xhc3MoJ3ZlY3Rvci1ib2R5Jyk7XG5cdFx0fVxuXG5cdFx0JHJlc3VsdC5hcHBlbmQoXG5cdFx0XHQkKCc8aDE+JykuYWRkQ2xhc3MoJ2ZpcnN0SGVhZGluZycpLmh0bWwodGl0bGUpLFxuXHRcdFx0Ly8gQ2xhc3NlcyB1c2VkIGhlcmU6XG5cdFx0XHQvLyAqIG13LWNvbnRlbnQtbHRyXG5cdFx0XHQvLyAqIG13LWNvbnRlbnQtcnRsXG5cdFx0XHQkKCc8ZGl2PicpXG5cdFx0XHRcdC5hZGRDbGFzcyhgbXctY29udGVudC0ke213LmNvbmZpZy5nZXQoJ3dnVmlzdWFsRWRpdG9yJykucGFnZUxhbmd1YWdlRGlyfWApXG5cdFx0XHRcdC5hdHRyKFxuXHRcdFx0XHRcdCdsYW5nJyxcblx0XHRcdFx0XHREQVRBLmZpbmQoKGl0ZW0pID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBpdGVtLnZhciA9PT0gdmFyaWFudDtcblx0XHRcdFx0XHR9KS5odG1sTGFuZ1xuXHRcdFx0XHQpXG5cdFx0XHRcdC5odG1sKHdpa2l0ZXh0KSxcblx0XHRcdCQucGFyc2VIVE1MKGNhdGVnb3JpZXMpXG5cdFx0KTtcblxuXHRcdC8vIE1ha2Ugb3RoZXIgdGhpbmdzIGxpa2UgUmVmZXJlbmNlIFRvb2x0aXAgZnVuY3Rpb25cblx0XHRtdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuZmlyZSgkcmVzdWx0KTtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0XHR2ZS50YXJnZXRMaW5rc1RvTmV3V2luZG93KCRyZXN1bHRbMF0pO1xuXHRcdHJldHVybiAkcmVzdWx0O1xuXHR9O1xuXG5cdGNvbnN0IGZldGNoUHJldmlldyA9ICgpID0+IHtcblx0XHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQoKTtcblx0XHQvLyBDdXJyZW50bHkgKEF1ZyAyMDIxKSwgUGFyc29pZCBBUEkgZG9lcyBub3QgaGF2ZSBmdWxsIExDIGZ1bmN0aW9uYWxpdHksXG5cdFx0Ly8gaGVuY2UgdXNlIHBhcnNlIEFQSSBpbnN0ZWFkLlxuXHRcdHRhcmdldFxuXHRcdFx0LmdldENvbnRlbnRBcGkoKVxuXHRcdFx0LnBvc3Qoe1xuXHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdGRpc2FibGVlZGl0c2VjdGlvbjogdHJ1ZSxcblx0XHRcdFx0ZXJyb3Jmb3JtYXQ6ICdodG1sJyxcblx0XHRcdFx0ZXJyb3JsYW5nOiB3Z1VzZXJMYW5ndWFnZSxcblx0XHRcdFx0ZXJyb3JzdXNlbG9jYWw6IHRydWUsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0cHJvcDogWyd0ZXh0JywgJ2luZGljYXRvcnMnLCAnZGlzcGxheXRpdGxlJywgJ2NhdGVnb3JpZXNodG1sJywgJ3BhcnNld2FybmluZ3NodG1sJ10sXG5cdFx0XHRcdHBzdDogdHJ1ZSxcblx0XHRcdFx0cHJldmlldzogdHJ1ZSxcblx0XHRcdFx0dGl0bGU6IHRhcmdldC5nZXRQYWdlTmFtZSgpLFxuXHRcdFx0XHR0ZXh0OiB0YXJnZXQuZ2V0RG9jVG9TYXZlKCksXG5cdFx0XHRcdHVzZWxhbmc6IHdnVXNlckxhbmd1YWdlLFxuXHRcdFx0XHR2YXJpYW50LFxuXHRcdFx0fSlcblx0XHRcdC50aGVuKFxuXHRcdFx0XHQocmVzcG9uc2UpID0+IHtcblx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlc29sdmUoXG5cdFx0XHRcdFx0XHRjb25zdHJ1Y3REb2N1bWVudChcblx0XHRcdFx0XHRcdFx0cmVzcG9uc2UucGFyc2UuZGlzcGxheXRpdGxlLFxuXHRcdFx0XHRcdFx0XHRyZXNwb25zZS5wYXJzZS50ZXh0LFxuXHRcdFx0XHRcdFx0XHRyZXNwb25zZS5wYXJzZS5jYXRlZ29yaWVzaHRtbFxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdChlcnJvciwgZGV0YWlsKSA9PiB7XG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZWplY3QoZGV0YWlsKTtcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHRyZXR1cm4gZGVmZXJyZWQ7XG5cdH07XG5cblx0Y29uc3QgY2hhbmdlVmFyaWFudCA9IGZ1bmN0aW9uIGNoYW5nZVZhcmlhbnQodmFsKSB7XG5cdFx0c2F2ZURpYWxvZy5wcmV2aWV3UGFuZWwuJGVsZW1lbnRbMF0uZm9jdXMoKTtcblx0XHR2YXJpYW50ID0gdmFsO1xuXG5cdFx0Y29uc3QgdGFyZ2V0UGFuZWwgPSBzdGFja0xheW91dC5maW5kSXRlbUZyb21EYXRhKHZhcmlhbnQpO1xuXHRcdGlmICh0YXJnZXRQYW5lbC4kZWxlbWVudC5jaGlsZHJlbigpLmxlbmd0aCkge1xuXHRcdFx0c3RhY2tMYXlvdXQuc2V0SXRlbSh0YXJnZXRQYW5lbCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0YWNrTGF5b3V0LnB1c2hQZW5kaW5nKCk7XG5cdFx0XHRkcm9wZG93bi5zZXREaXNhYmxlZCh0cnVlKTtcblxuXHRcdFx0dm9pZCBmZXRjaFByZXZpZXcoKVxuXHRcdFx0XHQudGhlbihcblx0XHRcdFx0XHQoJHByZXZpZXdDb250YWluZXIpID0+IHtcblx0XHRcdFx0XHRcdHRhcmdldFBhbmVsLiRlbGVtZW50LmFwcGVuZCgkcHJldmlld0NvbnRhaW5lcik7XG5cdFx0XHRcdFx0XHRzdGFja0xheW91dC5zZXRJdGVtKHRhcmdldFBhbmVsKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdChlcnJvcikgPT4ge1xuXHRcdFx0XHRcdFx0d2luZG93TWFuYWdlclxuXHRcdFx0XHRcdFx0XHQub3BlbldpbmRvdyhlcnJvckRpYWxvZywge1xuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiBPTy51aS5tc2coJ29vdWktZGlhbG9nLXByb2Nlc3MtZXJyb3InKSxcblx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiB3aW5kb3cudmUuaW5pdC50YXJnZXQuZ2V0Q29udGVudEFwaSgpLmdldEVycm9yTWVzc2FnZShlcnJvciksXG5cdFx0XHRcdFx0XHRcdFx0YWN0aW9uczogW1xuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRhY3Rpb246ICdyZWplY3QnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogT08udWkuZGVmZXJNc2coJ29vdWktZGlhbG9nLW1lc3NhZ2UtcmVqZWN0JyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZsYWdzOiAnc2FmZScsXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRhY3Rpb246ICdyZXRyeScsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiBPTy51aS5kZWZlck1zZygnb291aS1kaWFsb2ctcHJvY2Vzcy1yZXRyeScpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbGFnczogWydwcmltYXJ5JywgJ3Byb2dyZXNzaXZlJ10sXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdC5jbG9zZWQudGhlbigoZGF0YSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChkYXRhICYmIGRhdGEuYWN0aW9uID09PSAncmV0cnknKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBEbyBub3QgdXNlIHNldFZhbHVlKCkgc2luY2UgaXQgd2lsbCBub3QgdHJpZ2dlciBldmVudFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2hhbmdlVmFyaWFudCh2YXJpYW50KTtcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gXCJ2YXJpYW50XCIgd2lsbCBiZSBzZXQgYnkgZXZlbnQgaGFuZGxlclxuXHRcdFx0XHRcdFx0XHRcdFx0ZHJvcGRvd24uc2V0VmFsdWUoc3RhY2tMYXlvdXQuZ2V0Q3VycmVudEl0ZW0oKS5nZXREYXRhKCkpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5hbHdheXMoKCkgPT4ge1xuXHRcdFx0XHRcdHN0YWNrTGF5b3V0LnBvcFBlbmRpbmcoKTtcblx0XHRcdFx0XHRkcm9wZG93bi5zZXREaXNhYmxlZChmYWxzZSk7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBwcmV2aWV3V2l0aFZhcmlhbnQgPSAoKSA9PiB7XG5cdFx0Y29uc3QgY3VycmVudFBhbmVsID0gc3RhY2tMYXlvdXQuZ2V0Q3VycmVudEl0ZW0oKTtcblxuXHRcdGlmIChjdXJyZW50UGFuZWwuJGVsZW1lbnQuY2hpbGRyZW4oKS5sZW5ndGgpIHtcblx0XHRcdHNhdmVEaWFsb2cuc3dhcFBhbmVsKCdwcmV2aWV3Jyk7XG5cdFx0XHRzYXZlRGlhbG9nLnByZXZpZXdQYW5lbC4kZWxlbWVudC5wcmVwZW5kKGRyb3Bkb3duLiRlbGVtZW50KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmVtaXQoJ3NhdmVQcmV2aWV3Jyk7XG5cdFx0XHRzYXZlRGlhbG9nLnB1c2hQZW5kaW5nKCk7XG5cblx0XHRcdHZvaWQgZmV0Y2hQcmV2aWV3KClcblx0XHRcdFx0LnRoZW4oXG5cdFx0XHRcdFx0KCRwcmV2aWV3Q29udGVudCkgPT4ge1xuXHRcdFx0XHRcdFx0dGFyZ2V0XG5cdFx0XHRcdFx0XHRcdC5nZXRTdXJmYWNlKClcblx0XHRcdFx0XHRcdFx0LmdldE1vZGVsKClcblx0XHRcdFx0XHRcdFx0LmdldERvY3VtZW50KClcblx0XHRcdFx0XHRcdFx0Lm9uY2UoJ3RyYW5zYWN0JywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGZvciAoY29uc3QgaXRlbSBvZiBwYW5lbExheW91dHMpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGl0ZW0uJGVsZW1lbnQuZW1wdHkoKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0c2F2ZURpYWxvZy5zd2FwUGFuZWwoJ3ByZXZpZXcnKTtcblx0XHRcdFx0XHRcdGN1cnJlbnRQYW5lbC4kZWxlbWVudC5hcHBlbmQoJHByZXZpZXdDb250ZW50KTtcblx0XHRcdFx0XHRcdHN0YWNrTGF5b3V0LnNldEl0ZW0oc3RhY2tMYXlvdXQuZmluZEl0ZW1Gcm9tRGF0YSh2YXJpYW50KSk7XG5cdFx0XHRcdFx0XHRpZiAoIXNhdmVEaWFsb2cuJGVsZW1lbnQuZmluZChgLiR7T1BUSU9OUy5jbGFzc05hbWV9YCkubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRcdHNhdmVEaWFsb2cucHJldmlld1BhbmVsLiRlbGVtZW50LnByZXBlbmQoZHJvcGRvd24uJGVsZW1lbnQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0KGVycm9yKSA9PiB7XG5cdFx0XHRcdFx0XHRzYXZlRGlhbG9nLnNob3dFcnJvcnMoXG5cdFx0XHRcdFx0XHRcdG5ldyBPTy51aS5FcnJvcih3aW5kb3cudmUuaW5pdC50YXJnZXQuZ2V0Q29udGVudEFwaSgpLmdldEVycm9yTWVzc2FnZShlcnJvciksIHtcblx0XHRcdFx0XHRcdFx0XHRyZWNvdmVyYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5hbHdheXMoKCkgPT4ge1xuXHRcdFx0XHRcdHNhdmVEaWFsb2cucG9wUGVuZGluZygpO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgaW5pdCA9ICgpID0+IHtcblx0XHR2YXJpYW50ID0gd2dVc2VyVmFyaWFudDtcblx0XHQoe3RhcmdldH0gPSB3aW5kb3cudmUuaW5pdCk7XG5cdFx0KHtzYXZlRGlhbG9nfSA9IHRhcmdldCk7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1lZGlhd2lraS9jbGFzcy1kb2Ncblx0XHRkcm9wZG93biA9IG5ldyBPTy51aS5Ecm9wZG93bklucHV0V2lkZ2V0KHtcblx0XHRcdCRvdmVybGF5OiBzYXZlRGlhbG9nLiRvdmVybGF5LFxuXHRcdFx0Y2xhc3NlczogW09QVElPTlMuY2xhc3NOYW1lXSxcblx0XHRcdG9wdGlvbnM6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdG9wdGdyb3VwOiBtdy5tc2coJ3B3di0yMDE3LWNhcHRpb24nKSxcblx0XHRcdFx0fSxcblx0XHRcdFx0Li4uREFUQS5tYXAoKGl0ZW0pID0+IHtcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0ZGF0YTogaXRlbS52YXIsXG5cdFx0XHRcdFx0XHRsYWJlbDogbXcubXNnKGl0ZW0ubXNnKSAvKiBlc2xpbnQtZGlzYWJsZS1saW5lIG1lZGlhd2lraS9tc2ctZG9jICovLFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH0pLFxuXHRcdFx0XSxcblx0XHRcdHZhbHVlOiB2YXJpYW50LFxuXHRcdH0pO1xuXHRcdGRyb3Bkb3duLm9uKCdjaGFuZ2UnLCBjaGFuZ2VWYXJpYW50KTtcblx0XHRwYW5lbExheW91dHMgPSBEQVRBLm1hcCgoaXRlbSkgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBPTy51aS5QYW5lbExheW91dCh7XG5cdFx0XHRcdGV4cGFuZGVkOiBmYWxzZSxcblx0XHRcdFx0ZGF0YTogaXRlbS52YXIsXG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRzdGFja0xheW91dCA9IG5ldyBQZW5kaW5nU3RhY2tMYXlvdXQoe1xuXHRcdFx0ZXhwYW5kZWQ6IGZhbHNlLFxuXHRcdFx0aXRlbXM6IHBhbmVsTGF5b3V0cyxcblx0XHR9KTtcblx0XHRzdGFja0xheW91dC5zZXRJdGVtKHN0YWNrTGF5b3V0LmZpbmRJdGVtRnJvbURhdGEodmFyaWFudCkpO1xuXHRcdHNhdmVEaWFsb2cucHJldmlld1BhbmVsLiRlbGVtZW50LmFwcGVuZChzdGFja0xheW91dC4kZWxlbWVudCk7XG5cdFx0ZXJyb3JEaWFsb2cgPSBuZXcgT08udWkuTWVzc2FnZURpYWxvZygpO1xuXHRcdHdpbmRvd01hbmFnZXIgPSBuZXcgT08udWkuV2luZG93TWFuYWdlcigpO1xuXHRcdHdpbmRvd01hbmFnZXIuYWRkV2luZG93cyhbZXJyb3JEaWFsb2ddKTtcblx0XHQkYm9keS5hcHBlbmQod2luZG93TWFuYWdlci4kZWxlbWVudCk7XG5cblx0XHRjb25zdCBoYW5kbGVyVG9SZW1vdmUgPSAnb25TYXZlRGlhbG9nUHJldmlldyc7XG5cdFx0c2F2ZURpYWxvZy5vZmYoJ3ByZXZpZXcnLCBoYW5kbGVyVG9SZW1vdmUsIHRhcmdldCkub24oJ3ByZXZpZXcnLCBwcmV2aWV3V2l0aFZhcmlhbnQpO1xuXG5cdFx0Ly8gUmVpbml0aWFsaXphdGlvbiBpcyByZXF1aXJlZCBmb3Igc3dpdGNoaW5nIGJldHdlZW4gVmlzdWFsRWRpdG9yIGFuZCBOZXcgV2lraXRleHQgRWRpdG9yICgyMDE3KVxuXHRcdG13Lmhvb2soJ3ZlLmFjdGl2YXRpb25Db21wbGV0ZScpLmFkZCgoKSA9PiB7XG5cdFx0XHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkpIHtcblx0XHRcdFx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleSwgZmFsc2UpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKCFtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5KSkge1xuXHRcdGluaXQoKTtcblxuXHRcdC8vIFNldCBndWFyZFxuXHRcdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXksIHRy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Q00sR0FBR08sT0FBT2lCLElBQVk5QixTQUFTLEdBQUc7QUFDdENtRyxTQUFLO0FBR0w3RixPQUFHTyxPQUFPTCxJQUFZUixXQUFXLElBQUk7RUFDdEM7QUFDRDs7QUpsUEEsTUFBQSxHQUFLSCxrQkFBQTJKLFNBQVEsRUFBRTdFLEtBQUssU0FBUzhFLHdCQUF3Qi9ILE9BQXNDO0FBQzFGcEIsS0FBRytDLEtBQUssNEJBQTRCLEVBQUVrRyxJQUFJLE1BQVk7QUFDckQ5SCx3QkFBb0JDLEtBQUs7RUFDMUIsQ0FBQztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiY2xhc3NOYW1lIiwgImNvbmZpZ0tleSIsICJEQVRBIiwgInZhciIsICJodG1sTGFuZyIsICJtc2ciLCAiUFdWMjAxN21lc3NhZ2VzIiwgIm13IiwgIm1lc3NhZ2VzIiwgInNldCIsICJ3aW5kb3ciLCAid2dVTFMiLCAiUGVuZGluZ1N0YWNrTGF5b3V0IiwgIlBlbmRpbmdTdGFja0xheW91dDIiLCAiY29uZmlnIiwgInN1cGVyIiwgImNhbGwiLCAiT08iLCAidWkiLCAibWl4aW4iLCAiUGVuZGluZ0VsZW1lbnQiLCAiJGVsZW1lbnQiLCAiYWRkQ2xhc3MiLCAiaW5oZXJpdENsYXNzIiwgIlN0YWNrTGF5b3V0IiwgIm1peGluQ2xhc3MiLCAicHJvY2Vzc1Zpc3VhbEVkaXRvciIsICIkYm9keSIsICJza2luIiwgIndnVXNlckxhbmd1YWdlIiwgIndnVXNlclZhcmlhbnQiLCAiZ2V0IiwgInZhcmlhbnQiLCAidGFyZ2V0IiwgInNhdmVEaWFsb2ciLCAiZHJvcGRvd24iLCAic3RhY2tMYXlvdXQiLCAicGFuZWxMYXlvdXRzIiwgIndpbmRvd01hbmFnZXIiLCAiZXJyb3JEaWFsb2ciLCAiY29uc3RydWN0RG9jdW1lbnQiLCAidGl0bGUiLCAid2lraXRleHQiLCAiY2F0ZWdvcmllcyIsICIkcmVzdWx0IiwgIiQiLCAiYXBwZW5kIiwgImh0bWwiLCAiY29uY2F0IiwgInBhZ2VMYW5ndWFnZURpciIsICJhdHRyIiwgImZpbmQiLCAiaXRlbSIsICJwYXJzZUhUTUwiLCAiaG9vayIsICJmaXJlIiwgInZlIiwgInRhcmdldExpbmtzVG9OZXdXaW5kb3ciLCAiZmV0Y2hQcmV2aWV3IiwgImRlZmVycmVkIiwgIkRlZmVycmVkIiwgImdldENvbnRlbnRBcGkiLCAicG9zdCIsICJhY3Rpb24iLCAiZGlzYWJsZWVkaXRzZWN0aW9uIiwgImVycm9yZm9ybWF0IiwgImVycm9ybGFuZyIsICJlcnJvcnN1c2Vsb2NhbCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAicHN0IiwgInByZXZpZXciLCAiZ2V0UGFnZU5hbWUiLCAidGV4dCIsICJnZXREb2NUb1NhdmUiLCAidXNlbGFuZyIsICJ0aGVuIiwgInJlc3BvbnNlIiwgInJlc29sdmUiLCAicGFyc2UiLCAiZGlzcGxheXRpdGxlIiwgImNhdGVnb3JpZXNodG1sIiwgImVycm9yIiwgImRldGFpbCIsICJyZWplY3QiLCAiY2hhbmdlVmFyaWFudCIsICJjaGFuZ2VWYXJpYW50MiIsICJ2YWwiLCAicHJldmlld1BhbmVsIiwgImZvY3VzIiwgInRhcmdldFBhbmVsIiwgImZpbmRJdGVtRnJvbURhdGEiLCAiY2hpbGRyZW4iLCAibGVuZ3RoIiwgInNldEl0ZW0iLCAicHVzaFBlbmRpbmciLCAic2V0RGlzYWJsZWQiLCAiJHByZXZpZXdDb250YWluZXIiLCAib3BlbldpbmRvdyIsICJtZXNzYWdlIiwgImluaXQiLCAiZ2V0RXJyb3JNZXNzYWdlIiwgImFjdGlvbnMiLCAibGFiZWwiLCAiZGVmZXJNc2ciLCAiZmxhZ3MiLCAiY2xvc2VkIiwgImRhdGEiLCAic2V0VmFsdWUiLCAiZ2V0Q3VycmVudEl0ZW0iLCAiZ2V0RGF0YSIsICJhbHdheXMiLCAicG9wUGVuZGluZyIsICJwcmV2aWV3V2l0aFZhcmlhbnQiLCAiY3VycmVudFBhbmVsIiwgInN3YXBQYW5lbCIsICJwcmVwZW5kIiwgImVtaXQiLCAiJHByZXZpZXdDb250ZW50IiwgImdldFN1cmZhY2UiLCAiZ2V0TW9kZWwiLCAiZ2V0RG9jdW1lbnQiLCAib25jZSIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAidmFsdWUiLCAiZW1wdHkiLCAiZXJyIiwgImUiLCAiZiIsICJzaG93RXJyb3JzIiwgIkVycm9yIiwgInJlY292ZXJhYmxlIiwgIkRyb3Bkb3duSW5wdXRXaWRnZXQiLCAiJG92ZXJsYXkiLCAiY2xhc3NlcyIsICJvcHRpb25zIiwgIm9wdGdyb3VwIiwgIm1hcCIsICJvbiIsICJQYW5lbExheW91dCIsICJleHBhbmRlZCIsICJpdGVtcyIsICJNZXNzYWdlRGlhbG9nIiwgIldpbmRvd01hbmFnZXIiLCAiYWRkV2luZG93cyIsICJoYW5kbGVyVG9SZW1vdmUiLCAib2ZmIiwgImFkZCIsICJnZXRCb2R5IiwgInByZXZpZXdXaXRoVmFyaWFudHMyMDE3Il0KfQo=
