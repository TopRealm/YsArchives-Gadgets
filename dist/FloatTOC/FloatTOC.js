/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/FloatTOC}
 * @author 安忆 <i@anyi.in>
 * @license GPL-3.0-or-later {@link https://youshou.wiki/wiki/H:GPL-3.0}
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

// dist/FloatTOC/FloatTOC.js
//! src/FloatTOC/options.json
var elementId = "floatTOC";
//! src/FloatTOC/modules/core.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var import_ext_gadget3 = require("ext.gadget.FilterAlteredClicks");
//! src/FloatTOC/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Close: (0, import_ext_gadget.localize)({
      en: "Close",
      ja: "閉じる",
      "zh-hans": "关闭",
      "zh-hant": "關閉"
    }),
    Contents: (0, import_ext_gadget.localize)({
      en: "Contents",
      ja: "目次",
      zh: "目录"
    }),
    Collapse: (0, import_ext_gadget.localize)({
      en: "Collapse",
      ja: "折り畳み",
      "zh-hans": "折叠",
      "zh-hant": "摺叠"
    }),
    Expand: (0, import_ext_gadget.localize)({
      en: "Expand",
      ja: "展開",
      "zh-hans": "展开",
      "zh-hant": "展開"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/FloatTOC/modules/util/generateElements.ts
var generateElements = (originToc) => {
  var _toc$querySelector, _toc$querySelector2;
  const toc = originToc.cloneNode(true);
  (_toc$querySelector = toc.querySelector("input")) === null || _toc$querySelector === void 0 || _toc$querySelector.remove();
  (_toc$querySelector2 = toc.querySelector(".toctogglespan")) === null || _toc$querySelector2 === void 0 || _toc$querySelector2.remove();
  const $toc = $(toc);
  const $floatToc = $toc.clone().removeAttr("id").prepend($("<span>").addClass("oo-ui-indicatorElement-indicator oo-ui-icon-close").attr({
    id: "close",
    title: getMessage("Close"),
    role: "button",
    tabindex: "0"
  }));
  const $floatTocOpener = $("<div>").addClass("noprint").attr({
    id: "floatToc-opener",
    title: getMessage("Contents"),
    role: "button",
    tabindex: "0"
  }).append($("<span>").addClass("oo-ui-indicatorElement-indicator oo-ui-icon-reference"), $("<span>").text(getMessage("Contents")));
  return {
    $floatToc,
    $floatTocOpener
  };
};
//! src/FloatTOC/modules/util/generateTogglerElement.ts
var generateTogglerElement = (isCollapse) => {
  let $toggler = $("<span>").addClass("oo-ui-indicatorElement-indicator oo-ui-icon-downTriangle");
  $toggler = isCollapse ? $toggler.attr("title", getMessage("Expand")) : $toggler.attr("title", getMessage("Collapse")).addClass("collapse");
  return $toggler;
};
//! src/FloatTOC/modules/getConfig.ts
var getConfig = (id) => {
  let config = mw.storage.getObject(id);
  config || (config = {
    floatTOC: window.outerHeight < window.outerWidth ? "open" : "close",
    originTOC: "open"
  });
  return config;
};
//! src/FloatTOC/modules/setMwNotifyStyle.ts
var setMwNotifyStyle = () => {
  const style = mw.loader.addStyleTag(".mw-notification-area{right:unset;width:auto;max-width:20em}.mw-notification{transform:translateX(-999px)}.mw-notification-visible{transform:translateX(0)}");
  style.disabled = true;
  return style;
};
//! src/FloatTOC/modules/core.ts
var floatTOC = ($originToc) => {
  const {
    skin
  } = mw.config.get();
  const originToc = $originToc.get(0);
  const $body = $originToc.parents("body");
  const {
    $floatToc,
    $floatTocOpener
  } = generateElements(originToc);
  $floatTocOpener.hide().appendTo($body);
  const config = getConfig(elementId);
  const mwNotifyStyle = setMwNotifyStyle();
  let isShow = false;
  const storeState = (target, state) => {
    config[target] = state;
    mw.storage.setObject(elementId, config);
  };
  let disableMwNotifyStyleTimer;
  const disableMwNotifyStyle = () => {
    if (disableMwNotifyStyleTimer) {
      clearTimeout(disableMwNotifyStyleTimer);
    }
    disableMwNotifyStyleTimer = setTimeout(() => {
      if (!isShow) {
        mwNotifyStyle.disabled = true;
      }
    }, 5 * 1e3);
  };
  let notification;
  const closeNotification = (currentNotification) => {
    currentNotification.close();
    $floatTocOpener.fadeIn();
    storeState("floatTOC", "close");
    disableMwNotifyStyle();
  };
  const smoothScroll = (event) => {
    if (skin === "citizen") {
      return;
    }
    const target = event.target;
    const $target = $(target).parent();
    const href = $target.attr("href");
    if (!href) {
      return;
    }
    const anchorOffset = $(href).offset();
    if (!anchorOffset) {
      return;
    }
    event.preventDefault();
    (0, import_ext_gadget2.scrollTop)("".concat(anchorOffset.top, "px"));
  };
  const toggleToc = (currentIsShow = true, preNotification = void 0) => {
    var _preNotification;
    (_preNotification = preNotification) === null || _preNotification === void 0 || _preNotification.close();
    isShow = !!currentIsShow;
    switch (currentIsShow) {
      case true:
        if (config.floatTOC === "close") {
          $floatTocOpener.fadeIn();
          return;
        }
        break;
      case "open":
        $floatTocOpener.fadeOut();
        storeState("floatTOC", "open");
        break;
      default:
        $floatTocOpener.fadeOut();
        disableMwNotifyStyle();
        return;
    }
    mwNotifyStyle.disabled = false;
    if (preNotification) {
      preNotification.start();
    } else {
      preNotification = mw.notification.notify($floatToc, {
        classes: "noprint",
        id: elementId,
        autoHide: false
      });
      const notificationListener = (event) => {
        event.stopPropagation();
        if (!(0, import_ext_gadget2.checkA11yConfirmKey)(event)) {
          return;
        }
        const target = event.target;
        if (target.id === "close") {
          closeNotification(preNotification);
        } else {
          smoothScroll(event);
        }
      };
      preNotification.$notification.on("click", (0, import_ext_gadget3.filterAlteredClicks)((event) => {
        void notificationListener(event);
      }));
      preNotification.$notification.on("keydown", notificationListener);
    }
    return preNotification;
  };
  const observerCallback = (entries) => {
    const [entry] = entries;
    if (!entry) {
      return;
    }
    const {
      intersectionRatio
    } = entry;
    notification = toggleToc(intersectionRatio === 0, notification);
  };
  const intersectionObserver = new IntersectionObserver(observerCallback);
  intersectionObserver.observe(originToc);
  const openerListener = (event) => {
    event.preventDefault();
    if (!(0, import_ext_gadget2.checkA11yConfirmKey)(event)) {
      return;
    }
    notification = toggleToc("open");
  };
  $floatTocOpener.on("click", openerListener);
  $floatTocOpener.on("keydown", openerListener);
  const collapseOriginToc = () => {
    if (skin !== "citizen") {
      return;
    }
    const isCollapse = config.originTOC === "close";
    const $originTocTitle = $body.find("#toc .toctitle");
    const $originTocItem = $body.find("#toc ul");
    const $toggler = generateTogglerElement(isCollapse);
    $originTocTitle.append($toggler);
    const collapseToggle = () => {
      const $element = $originTocTitle.find(".oo-ui-indicatorElement-indicator");
      $element.toggleClass("collapse");
      if (isCollapse) {
        $element.attr("title", getMessage("Expand"));
      } else {
        $element.attr("title", getMessage("Collapse"));
      }
    };
    $originTocTitle.on("click", () => {
      storeState("originTOC", isCollapse ? "open" : "close");
      collapseToggle();
      $originTocItem.fadeToggle();
    });
    if (isCollapse) {
      $originTocItem.fadeOut();
    }
  };
  collapseOriginToc();
};
//! src/FloatTOC/FloatTOC.ts
var import_ext_gadget4 = require("ext.gadget.Util");
void (0, import_ext_gadget4.getBody)().then(($body) => {
  const $originToc = $body.find("#toc");
  if (!$originToc.length) {
    return;
  }
  floatTOC($originToc);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0Zsb2F0VE9DL29wdGlvbnMuanNvbiIsICJzcmMvRmxvYXRUT0MvbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9GbG9hdFRPQy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0Zsb2F0VE9DL21vZHVsZXMvdXRpbC9nZW5lcmF0ZUVsZW1lbnRzLnRzIiwgInNyYy9GbG9hdFRPQy9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVUb2dnbGVyRWxlbWVudC50cyIsICJzcmMvRmxvYXRUT0MvbW9kdWxlcy9nZXRDb25maWcudHMiLCAic3JjL0Zsb2F0VE9DL21vZHVsZXMvc2V0TXdOb3RpZnlTdHlsZS50cyIsICJzcmMvRmxvYXRUT0MvRmxvYXRUT0MudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJlbGVtZW50SWRcIjogXCJmbG9hdFRPQ1wiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHR5cGUge0NvbmZpZywgU3RhdGV9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtjaGVja0ExMXlDb25maXJtS2V5LCBzY3JvbGxUb3B9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2ZpbHRlckFsdGVyZWRDbGlja3N9IGZyb20gJ2V4dC5nYWRnZXQuRmlsdGVyQWx0ZXJlZENsaWNrcyc7XG5pbXBvcnQge2dlbmVyYXRlRWxlbWVudHN9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZUVsZW1lbnRzJztcbmltcG9ydCB7Z2VuZXJhdGVUb2dnbGVyRWxlbWVudH0gZnJvbSAnLi91dGlsL2dlbmVyYXRlVG9nZ2xlckVsZW1lbnQnO1xuaW1wb3J0IHtnZXRDb25maWd9IGZyb20gJy4vZ2V0Q29uZmlnJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7c2V0TXdOb3RpZnlTdHlsZX0gZnJvbSAnLi9zZXRNd05vdGlmeVN0eWxlJztcblxuY29uc3QgZmxvYXRUT0MgPSAoJG9yaWdpblRvYzogSlF1ZXJ5KTogdm9pZCA9PiB7XG5cdGNvbnN0IHtza2lufSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3Qgb3JpZ2luVG9jOiBIVE1MRWxlbWVudCA9ICRvcmlnaW5Ub2MuZ2V0KDApIGFzIEhUTUxFbGVtZW50O1xuXHRjb25zdCAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPSAkb3JpZ2luVG9jLnBhcmVudHMoJ2JvZHknKTtcblxuXHRjb25zdCB7JGZsb2F0VG9jLCAkZmxvYXRUb2NPcGVuZXJ9ID0gZ2VuZXJhdGVFbGVtZW50cyhvcmlnaW5Ub2MpO1xuXHQkZmxvYXRUb2NPcGVuZXIuaGlkZSgpLmFwcGVuZFRvKCRib2R5KTtcblxuXHRjb25zdCBjb25maWc6IENvbmZpZyA9IGdldENvbmZpZyhPUFRJT05TLmVsZW1lbnRJZCk7XG5cdGNvbnN0IG13Tm90aWZ5U3R5bGU6IEhUTUxTdHlsZUVsZW1lbnQgPSBzZXRNd05vdGlmeVN0eWxlKCk7XG5cblx0bGV0IGlzU2hvdzogYm9vbGVhbiA9IGZhbHNlO1xuXHRjb25zdCBzdG9yZVN0YXRlID0gKHRhcmdldDoga2V5b2YgQ29uZmlnLCBzdGF0ZTogU3RhdGUpOiB2b2lkID0+IHtcblx0XHRjb25maWdbdGFyZ2V0XSA9IHN0YXRlO1xuXHRcdG13LnN0b3JhZ2Uuc2V0T2JqZWN0KE9QVElPTlMuZWxlbWVudElkLCBjb25maWcpO1xuXHR9O1xuXG5cdGxldCBkaXNhYmxlTXdOb3RpZnlTdHlsZVRpbWVyOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0Pjtcblx0Y29uc3QgZGlzYWJsZU13Tm90aWZ5U3R5bGUgPSAoKTogdm9pZCA9PiB7XG5cdFx0aWYgKGRpc2FibGVNd05vdGlmeVN0eWxlVGltZXIpIHtcblx0XHRcdGNsZWFyVGltZW91dChkaXNhYmxlTXdOb3RpZnlTdHlsZVRpbWVyKTtcblx0XHR9XG5cdFx0ZGlzYWJsZU13Tm90aWZ5U3R5bGVUaW1lciA9IHNldFRpbWVvdXQoKCk6IHZvaWQgPT4ge1xuXHRcdFx0aWYgKCFpc1Nob3cpIHtcblx0XHRcdFx0bXdOb3RpZnlTdHlsZS5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fSwgNSAqIDEwMDApO1xuXHR9O1xuXG5cdGxldCBub3RpZmljYXRpb246IFJldHVyblR5cGU8dHlwZW9mIG13Lm5vdGlmaWNhdGlvbi5ub3RpZnk+IHwgdW5kZWZpbmVkO1xuXHRjb25zdCBjbG9zZU5vdGlmaWNhdGlvbiA9IChjdXJyZW50Tm90aWZpY2F0aW9uOiBOb25OdWxsYWJsZTx0eXBlb2Ygbm90aWZpY2F0aW9uPik6IHZvaWQgPT4ge1xuXHRcdGN1cnJlbnROb3RpZmljYXRpb24uY2xvc2UoKTtcblx0XHQkZmxvYXRUb2NPcGVuZXIuZmFkZUluKCk7XG5cdFx0c3RvcmVTdGF0ZSgnZmxvYXRUT0MnLCAnY2xvc2UnKTtcblx0XHRkaXNhYmxlTXdOb3RpZnlTdHlsZSgpO1xuXHR9O1xuXG5cdGNvbnN0IHNtb290aFNjcm9sbCA9IChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQgfCBKUXVlcnkuS2V5RG93bkV2ZW50KTogdm9pZCA9PiB7XG5cdFx0aWYgKHNraW4gPT09ICdjaXRpemVuJykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblx0XHRjb25zdCAkdGFyZ2V0OiBKUXVlcnkgPSAkKHRhcmdldCkucGFyZW50KCk7XG5cdFx0Y29uc3QgaHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkID0gJHRhcmdldC5hdHRyKCdocmVmJyk7XG5cdFx0aWYgKCFocmVmKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgYW5jaG9yT2Zmc2V0OiBKUXVlcnkuQ29vcmRpbmF0ZXMgfCB1bmRlZmluZWQgPSAkKGhyZWYpLm9mZnNldCgpO1xuXHRcdGlmICghYW5jaG9yT2Zmc2V0KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRzY3JvbGxUb3AoYCR7YW5jaG9yT2Zmc2V0LnRvcH1weGApO1xuXHR9O1xuXG5cdGNvbnN0IHRvZ2dsZVRvYyA9IChcblx0XHRjdXJyZW50SXNTaG93OiBib29sZWFuIHwgJ29wZW4nID0gdHJ1ZSxcblx0XHRwcmVOb3RpZmljYXRpb246IHR5cGVvZiBub3RpZmljYXRpb24gPSB1bmRlZmluZWRcblx0KTogdHlwZW9mIG5vdGlmaWNhdGlvbiA9PiB7XG5cdFx0cHJlTm90aWZpY2F0aW9uPy5jbG9zZSgpO1xuXHRcdGlzU2hvdyA9ICEhY3VycmVudElzU2hvdztcblxuXHRcdHN3aXRjaCAoY3VycmVudElzU2hvdykge1xuXHRcdFx0Y2FzZSB0cnVlOlxuXHRcdFx0XHRpZiAoY29uZmlnLmZsb2F0VE9DID09PSAnY2xvc2UnKSB7XG5cdFx0XHRcdFx0JGZsb2F0VG9jT3BlbmVyLmZhZGVJbigpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ29wZW4nOlxuXHRcdFx0XHQkZmxvYXRUb2NPcGVuZXIuZmFkZU91dCgpO1xuXHRcdFx0XHRzdG9yZVN0YXRlKCdmbG9hdFRPQycsICdvcGVuJyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0JGZsb2F0VG9jT3BlbmVyLmZhZGVPdXQoKTtcblx0XHRcdFx0ZGlzYWJsZU13Tm90aWZ5U3R5bGUoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdG13Tm90aWZ5U3R5bGUuZGlzYWJsZWQgPSBmYWxzZTtcblxuXHRcdGlmIChwcmVOb3RpZmljYXRpb24pIHtcblx0XHRcdHByZU5vdGlmaWNhdGlvbi5zdGFydCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwcmVOb3RpZmljYXRpb24gPSBtdy5ub3RpZmljYXRpb24ubm90aWZ5KCRmbG9hdFRvYywge1xuXHRcdFx0XHRjbGFzc2VzOiAnbm9wcmludCcsXG5cdFx0XHRcdGlkOiBPUFRJT05TLmVsZW1lbnRJZCxcblx0XHRcdFx0YXV0b0hpZGU6IGZhbHNlLFxuXHRcdFx0fSk7XG5cdFx0XHRjb25zdCBub3RpZmljYXRpb25MaXN0ZW5lciA9IChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQgfCBKUXVlcnkuS2V5RG93bkV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRpZiAoIWNoZWNrQTExeUNvbmZpcm1LZXkoZXZlbnQpKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblx0XHRcdFx0aWYgKHRhcmdldC5pZCA9PT0gJ2Nsb3NlJykge1xuXHRcdFx0XHRcdGNsb3NlTm90aWZpY2F0aW9uKHByZU5vdGlmaWNhdGlvbiBhcyBOb25OdWxsYWJsZTx0eXBlb2YgcHJlTm90aWZpY2F0aW9uPik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c21vb3RoU2Nyb2xsKGV2ZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdHByZU5vdGlmaWNhdGlvbi4kbm90aWZpY2F0aW9uLm9uKFxuXHRcdFx0XHQnY2xpY2snLFxuXHRcdFx0XHRmaWx0ZXJBbHRlcmVkQ2xpY2tzKChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHR2b2lkIG5vdGlmaWNhdGlvbkxpc3RlbmVyKGV2ZW50KTtcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0XHRwcmVOb3RpZmljYXRpb24uJG5vdGlmaWNhdGlvbi5vbigna2V5ZG93bicsIG5vdGlmaWNhdGlvbkxpc3RlbmVyKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcHJlTm90aWZpY2F0aW9uO1xuXHR9O1xuXG5cdGNvbnN0IG9ic2VydmVyQ2FsbGJhY2sgPSAoZW50cmllczogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeVtdKTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgW2VudHJ5XSA9IGVudHJpZXM7XG5cdFx0aWYgKCFlbnRyeSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCB7aW50ZXJzZWN0aW9uUmF0aW99ID0gZW50cnk7XG5cdFx0bm90aWZpY2F0aW9uID0gdG9nZ2xlVG9jKGludGVyc2VjdGlvblJhdGlvID09PSAwLCBub3RpZmljYXRpb24pO1xuXHR9O1xuXHRjb25zdCBpbnRlcnNlY3Rpb25PYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIob2JzZXJ2ZXJDYWxsYmFjayk7XG5cdGludGVyc2VjdGlvbk9ic2VydmVyLm9ic2VydmUob3JpZ2luVG9jKTtcblxuXHRjb25zdCBvcGVuZXJMaXN0ZW5lciA9IChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQgfCBKUXVlcnkuS2V5RG93bkV2ZW50KTogdm9pZCA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRpZiAoIWNoZWNrQTExeUNvbmZpcm1LZXkoZXZlbnQpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdG5vdGlmaWNhdGlvbiA9IHRvZ2dsZVRvYygnb3BlbicpO1xuXHR9O1xuXHQkZmxvYXRUb2NPcGVuZXIub24oJ2NsaWNrJywgb3BlbmVyTGlzdGVuZXIpO1xuXHQkZmxvYXRUb2NPcGVuZXIub24oJ2tleWRvd24nLCBvcGVuZXJMaXN0ZW5lcik7XG5cblx0Y29uc3QgY29sbGFwc2VPcmlnaW5Ub2MgPSAoKTogdm9pZCA9PiB7XG5cdFx0aWYgKHNraW4gIT09ICdjaXRpemVuJykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGlzQ29sbGFwc2U6IGJvb2xlYW4gPSBjb25maWcub3JpZ2luVE9DID09PSAnY2xvc2UnO1xuXG5cdFx0Y29uc3QgJG9yaWdpblRvY1RpdGxlOiBKUXVlcnkgPSAkYm9keS5maW5kKCcjdG9jIC50b2N0aXRsZScpO1xuXHRcdGNvbnN0ICRvcmlnaW5Ub2NJdGVtOiBKUXVlcnkgPSAkYm9keS5maW5kKCcjdG9jIHVsJyk7XG5cblx0XHRjb25zdCAkdG9nZ2xlcjogSlF1ZXJ5ID0gZ2VuZXJhdGVUb2dnbGVyRWxlbWVudChpc0NvbGxhcHNlKTtcblx0XHQkb3JpZ2luVG9jVGl0bGUuYXBwZW5kKCR0b2dnbGVyKTtcblxuXHRcdGNvbnN0IGNvbGxhcHNlVG9nZ2xlID0gKCk6IHZvaWQgPT4ge1xuXHRcdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICRvcmlnaW5Ub2NUaXRsZS5maW5kKCcub28tdWktaW5kaWNhdG9yRWxlbWVudC1pbmRpY2F0b3InKTtcblx0XHRcdCRlbGVtZW50LnRvZ2dsZUNsYXNzKCdjb2xsYXBzZScpO1xuXHRcdFx0aWYgKGlzQ29sbGFwc2UpIHtcblx0XHRcdFx0JGVsZW1lbnQuYXR0cigndGl0bGUnLCBnZXRNZXNzYWdlKCdFeHBhbmQnKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkZWxlbWVudC5hdHRyKCd0aXRsZScsIGdldE1lc3NhZ2UoJ0NvbGxhcHNlJykpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0JG9yaWdpblRvY1RpdGxlLm9uKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHRcdHN0b3JlU3RhdGUoJ29yaWdpblRPQycsIGlzQ29sbGFwc2UgPyAnb3BlbicgOiAnY2xvc2UnKTtcblx0XHRcdGNvbGxhcHNlVG9nZ2xlKCk7XG5cdFx0XHQkb3JpZ2luVG9jSXRlbS5mYWRlVG9nZ2xlKCk7XG5cdFx0fSk7XG5cblx0XHRpZiAoaXNDb2xsYXBzZSkge1xuXHRcdFx0JG9yaWdpblRvY0l0ZW0uZmFkZU91dCgpO1xuXHRcdH1cblx0fTtcblx0Y29sbGFwc2VPcmlnaW5Ub2MoKTtcbn07XG5cbmV4cG9ydCB7ZmxvYXRUT0N9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRDbG9zZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDbG9zZScsXG5cdFx0XHRqYTogJ+mWieOBmOOCiycsXG5cdFx0XHQnemgtaGFucyc6ICflhbPpl60nLFxuXHRcdFx0J3poLWhhbnQnOiAn6Zec6ZaJJyxcblx0XHR9KSxcblx0XHRDb250ZW50czogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDb250ZW50cycsXG5cdFx0XHRqYTogJ+ebruasoScsXG5cdFx0XHR6aDogJ+ebruW9lScsXG5cdFx0fSksXG5cdFx0Q29sbGFwc2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29sbGFwc2UnLFxuXHRcdFx0amE6ICfmipjjgornlbPjgb8nLFxuXHRcdFx0J3poLWhhbnMnOiAn5oqY5Y+gJyxcblx0XHRcdCd6aC1oYW50JzogJ+aRuuWPoCcsXG5cdFx0fSksXG5cdFx0RXhwYW5kOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0V4cGFuZCcsXG5cdFx0XHRqYTogJ+WxlemWiycsXG5cdFx0XHQnemgtaGFucyc6ICflsZXlvIAnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bGV6ZaLJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3QgZ2VuZXJhdGVFbGVtZW50cyA9IChvcmlnaW5Ub2M6IEhUTUxFbGVtZW50KSA9PiB7XG5cdGNvbnN0IHRvYzogSFRNTEVsZW1lbnQgPSBvcmlnaW5Ub2MuY2xvbmVOb2RlKHRydWUpIGFzIEhUTUxFbGVtZW50O1xuXHR0b2MucXVlcnlTZWxlY3RvcignaW5wdXQnKT8ucmVtb3ZlKCk7XG5cdHRvYy5xdWVyeVNlbGVjdG9yKCcudG9jdG9nZ2xlc3BhbicpPy5yZW1vdmUoKTtcblx0Y29uc3QgJHRvYzogSlF1ZXJ5ID0gJCh0b2MpO1xuXG5cdGNvbnN0ICRmbG9hdFRvYzogSlF1ZXJ5ID0gJHRvY1xuXHRcdC5jbG9uZSgpXG5cdFx0LnJlbW92ZUF0dHIoJ2lkJylcblx0XHQucHJlcGVuZChcblx0XHRcdCQoJzxzcGFuPicpXG5cdFx0XHRcdC5hZGRDbGFzcygnb28tdWktaW5kaWNhdG9yRWxlbWVudC1pbmRpY2F0b3Igb28tdWktaWNvbi1jbG9zZScpXG5cdFx0XHRcdC5hdHRyKHtcblx0XHRcdFx0XHRpZDogJ2Nsb3NlJyxcblx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgnQ2xvc2UnKSxcblx0XHRcdFx0XHRyb2xlOiAnYnV0dG9uJyxcblx0XHRcdFx0XHR0YWJpbmRleDogJzAnLFxuXHRcdFx0XHR9KVxuXHRcdCk7XG5cblx0Y29uc3QgJGZsb2F0VG9jT3BlbmVyOiBKUXVlcnkgPSAkKCc8ZGl2PicpXG5cdFx0LmFkZENsYXNzKCdub3ByaW50Jylcblx0XHQuYXR0cih7XG5cdFx0XHRpZDogJ2Zsb2F0VG9jLW9wZW5lcicsXG5cdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgnQ29udGVudHMnKSxcblx0XHRcdHJvbGU6ICdidXR0b24nLFxuXHRcdFx0dGFiaW5kZXg6ICcwJyxcblx0XHR9KVxuXHRcdC5hcHBlbmQoXG5cdFx0XHQkKCc8c3Bhbj4nKS5hZGRDbGFzcygnb28tdWktaW5kaWNhdG9yRWxlbWVudC1pbmRpY2F0b3Igb28tdWktaWNvbi1yZWZlcmVuY2UnKSxcblx0XHRcdCQoJzxzcGFuPicpLnRleHQoZ2V0TWVzc2FnZSgnQ29udGVudHMnKSlcblx0XHQpO1xuXG5cdHJldHVybiB7XG5cdFx0JGZsb2F0VG9jLFxuXHRcdCRmbG9hdFRvY09wZW5lcixcblx0fTtcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVFbGVtZW50c307XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3QgZ2VuZXJhdGVUb2dnbGVyRWxlbWVudCA9IChpc0NvbGxhcHNlOiBib29sZWFuKTogSlF1ZXJ5ID0+IHtcblx0bGV0ICR0b2dnbGVyOiBKUXVlcnkgPSAkKCc8c3Bhbj4nKS5hZGRDbGFzcygnb28tdWktaW5kaWNhdG9yRWxlbWVudC1pbmRpY2F0b3Igb28tdWktaWNvbi1kb3duVHJpYW5nbGUnKTtcblx0JHRvZ2dsZXIgPSBpc0NvbGxhcHNlXG5cdFx0PyAkdG9nZ2xlci5hdHRyKCd0aXRsZScsIGdldE1lc3NhZ2UoJ0V4cGFuZCcpKVxuXHRcdDogJHRvZ2dsZXIuYXR0cigndGl0bGUnLCBnZXRNZXNzYWdlKCdDb2xsYXBzZScpKS5hZGRDbGFzcygnY29sbGFwc2UnKTtcblxuXHRyZXR1cm4gJHRvZ2dsZXI7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlVG9nZ2xlckVsZW1lbnR9O1xuIiwgImltcG9ydCB0eXBlIHtDb25maWd9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBnZXRDb25maWcgPSAoaWQ6IHN0cmluZyk6IENvbmZpZyA9PiB7XG5cdGxldCBjb25maWcgPSBtdy5zdG9yYWdlLmdldE9iamVjdChpZCkgYXMgUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Q29uZmlnPjtcblx0Y29uZmlnIHx8PSB7XG5cdFx0ZmxvYXRUT0M6IHdpbmRvdy5vdXRlckhlaWdodCA8IHdpbmRvdy5vdXRlcldpZHRoID8gJ29wZW4nIDogJ2Nsb3NlJyxcblx0XHRvcmlnaW5UT0M6ICdvcGVuJyxcblx0fTtcblxuXHRyZXR1cm4gY29uZmlnO1xufTtcblxuZXhwb3J0IHtnZXRDb25maWd9O1xuIiwgImNvbnN0IHNldE13Tm90aWZ5U3R5bGUgPSAoKTogSFRNTFN0eWxlRWxlbWVudCA9PiB7XG5cdGNvbnN0IHN0eWxlOiBIVE1MU3R5bGVFbGVtZW50ID0gbXcubG9hZGVyLmFkZFN0eWxlVGFnKFxuXHRcdCcubXctbm90aWZpY2F0aW9uLWFyZWF7cmlnaHQ6dW5zZXQ7d2lkdGg6YXV0bzttYXgtd2lkdGg6MjBlbX0ubXctbm90aWZpY2F0aW9ue3RyYW5zZm9ybTp0cmFuc2xhdGVYKC05OTlweCl9Lm13LW5vdGlmaWNhdGlvbi12aXNpYmxle3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApfSdcblx0KTtcblxuXHRzdHlsZS5kaXNhYmxlZCA9IHRydWU7XG5cblx0cmV0dXJuIHN0eWxlO1xufTtcblxuZXhwb3J0IHtzZXRNd05vdGlmeVN0eWxlfTtcbiIsICJpbXBvcnQgJy4vRmxvYXRUT0MubGVzcyc7XG5pbXBvcnQge2Zsb2F0VE9DfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCAkb3JpZ2luVG9jOiBKUXVlcnkgPSAkYm9keS5maW5kKCcjdG9jJyk7XG5cdGlmICghJG9yaWdpblRvYy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRmbG9hdFRPQygkb3JpZ2luVG9jKTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxZQUFhOztBQ0NkLElBQUFDLHFCQUE2Q0MsUUFBQSxpQkFBQTtBQUM3QyxJQUFBQyxxQkFBa0NELFFBQUEsZ0NBQUE7O0FDSGxDLElBQUFFLG9CQUF1QkYsUUFBQSxpQkFBQTtBQUV2QixJQUFNRyxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxRQUFBLEdBQU9GLGtCQUFBRyxVQUFTO01BQ2ZDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEQyxXQUFBLEdBQVVOLGtCQUFBRyxVQUFTO01BQ2xCQyxJQUFJO01BQ0pDLElBQUk7TUFDSkUsSUFBSTtJQUNMLENBQUM7SUFDREMsV0FBQSxHQUFVUixrQkFBQUcsVUFBUztNQUNsQkMsSUFBSTtNQUNKQyxJQUFJ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LFFBQVE7QUFDdkI7RUFDRDtBQUVBN0UsV0FBU1UsVUFBVTtBQUNwQixDQUFDOyIsCiAgIm5hbWVzIjogWyJlbGVtZW50SWQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJDbG9zZSIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJDb250ZW50cyIsICJ6aCIsICJDb2xsYXBzZSIsICJFeHBhbmQiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImdlbmVyYXRlRWxlbWVudHMiLCAib3JpZ2luVG9jIiwgIl90b2MkcXVlcnlTZWxlY3RvciIsICJfdG9jJHF1ZXJ5U2VsZWN0b3IyIiwgInRvYyIsICJjbG9uZU5vZGUiLCAicXVlcnlTZWxlY3RvciIsICJyZW1vdmUiLCAiJHRvYyIsICIkIiwgIiRmbG9hdFRvYyIsICJjbG9uZSIsICJyZW1vdmVBdHRyIiwgInByZXBlbmQiLCAiYWRkQ2xhc3MiLCAiYXR0ciIsICJpZCIsICJ0aXRsZSIsICJyb2xlIiwgInRhYmluZGV4IiwgIiRmbG9hdFRvY09wZW5lciIsICJhcHBlbmQiLCAidGV4dCIsICJnZW5lcmF0ZVRvZ2dsZXJFbGVtZW50IiwgImlzQ29sbGFwc2UiLCAiJHRvZ2dsZXIiLCAiZ2V0Q29uZmlnIiwgImNvbmZpZyIsICJtdyIsICJzdG9yYWdlIiwgImdldE9iamVjdCIsICJmbG9hdFRPQyIsICJ3aW5kb3ciLCAib3V0ZXJIZWlnaHQiLCAib3V0ZXJXaWR0aCIsICJvcmlnaW5UT0MiLCAic2V0TXdOb3RpZnlTdHlsZSIsICJzdHlsZSIsICJsb2FkZXIiLCAiYWRkU3R5bGVUYWciLCAiZGlzYWJsZWQiLCAiJG9yaWdpblRvYyIsICJza2luIiwgImdldCIsICIkYm9keSIsICJwYXJlbnRzIiwgImhpZGUiLCAiYXBwZW5kVG8iLCAibXdOb3RpZnlTdHlsZSIsICJpc1Nob3ciLCAic3RvcmVTdGF0ZSIsICJ0YXJnZXQiLCAic3RhdGUiLCAic2V0T2JqZWN0IiwgImRpc2FibGVNd05vdGlmeVN0eWxlVGltZXIiLCAiZGlzYWJsZU13Tm90aWZ5U3R5bGUiLCAiY2xlYXJUaW1lb3V0IiwgInNldFRpbWVvdXQiLCAibm90aWZpY2F0aW9uIiwgImNsb3NlTm90aWZpY2F0aW9uIiwgImN1cnJlbnROb3RpZmljYXRpb24iLCAiY2xvc2UiLCAiZmFkZUluIiwgInNtb290aFNjcm9sbCIsICJldmVudCIsICIkdGFyZ2V0IiwgInBhcmVudCIsICJocmVmIiwgImFuY2hvck9mZnNldCIsICJvZmZzZXQiLCAicHJldmVudERlZmF1bHQiLCAic2Nyb2xsVG9wIiwgImNvbmNhdCIsICJ0b3AiLCAidG9nZ2xlVG9jIiwgImN1cnJlbnRJc1Nob3ciLCAicHJlTm90aWZpY2F0aW9uIiwgIl9wcmVOb3RpZmljYXRpb24iLCAiZmFkZU91dCIsICJzdGFydCIsICJub3RpZnkiLCAiY2xhc3NlcyIsICJhdXRvSGlkZSIsICJub3RpZmljYXRpb25MaXN0ZW5lciIsICJzdG9wUHJvcGFnYXRpb24iLCAiY2hlY2tBMTF5Q29uZmlybUtleSIsICIkbm90aWZpY2F0aW9uIiwgIm9uIiwgImZpbHRlckFsdGVyZWRDbGlja3MiLCAib2JzZXJ2ZXJDYWxsYmFjayIsICJlbnRyaWVzIiwgImVudHJ5IiwgImludGVyc2VjdGlvblJhdGlvIiwgImludGVyc2VjdGlvbk9ic2VydmVyIiwgIkludGVyc2VjdGlvbk9ic2VydmVyIiwgIm9ic2VydmUiLCAib3BlbmVyTGlzdGVuZXIiLCAiY29sbGFwc2VPcmlnaW5Ub2MiLCAiJG9yaWdpblRvY1RpdGxlIiwgImZpbmQiLCAiJG9yaWdpblRvY0l0ZW0iLCAiY29sbGFwc2VUb2dnbGUiLCAiJGVsZW1lbnQiLCAidG9nZ2xlQ2xhc3MiLCAiZmFkZVRvZ2dsZSIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImxlbmd0aCJdCn0K
