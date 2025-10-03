/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/DiffLink}
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

// dist/DiffLink/DiffLink.js
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
//! src/DiffLink/modules/util/checkDiffPage.ts
var checkDiffPage = ($content) => {
  const {
    wgCurRevisionId
  } = mw.config.get();
  return $content.find("table").hasClass("diff") && !!wgCurRevisionId;
};
//! src/DiffLink/modules/util/checkRevisionPage.ts
var checkRevisionPage = ($content) => {
  return ($content.find("#contentSub #mw-revision-nav").length || $content.find("main#content>.pre-content #mw-revision-nav").length) > 0;
};
//! src/DiffLink/modules/addPortletLink.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/DiffLink/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "Network error": (0, import_ext_gadget.localize)({
      ja: "ネットワークエラー",
      "zh-hans": "网络异常",
      "zh-hant": "網路異常"
    }),
    CopyDiff: (0, import_ext_gadget.localize)({
      en: "Copy the link to the diff version (wiki syntax)",
      ja: "現在の版間の差分リンクをコピーします（ウィキ記法）",
      "zh-hans": "复制链接到当前差异版本的维基语法",
      "zh-hant": "複製連結到當前差異版本的維基語法"
    }),
    CopyPermanent: (0, import_ext_gadget.localize)({
      en: "Copy the permanent link to the current version (wiki syntax)",
      ja: "このページのこの版への固定リンクをコピーします（ウィキ記法）",
      "zh-hans": "复制链接到当前修订版本的维基语法",
      "zh-hant": "複製連結到當前修訂版本的維基語法"
    }),
    Diff: (0, import_ext_gadget.localize)({
      en: "Diff link",
      ja: "現在の版間の差分リンク",
      "zh-hans": "当前差异链接",
      "zh-hant": "當前差異連結"
    }),
    DiffVersion: (0, import_ext_gadget.localize)({
      en: "diff version",
      ja: "版間の差分",
      "zh-hans": "差异版本",
      "zh-hant": "差異版本"
    }),
    Permanent: (0, import_ext_gadget.localize)({
      en: "Permanent link",
      ja: "この版への固定リンク",
      "zh-hans": "当前修订链接",
      "zh-hant": "當前修訂連結"
    }),
    PermanentVersion: (0, import_ext_gadget.localize)({
      en: "permanent version",
      ja: "版への固定リンク",
      "zh-hans": "固定版本链接",
      "zh-hant": "固定版本連結"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/DiffLink/modules/addPortletLink.ts
/*!
 * 若想自定义复制结果中的文本可通过向自己的common.js中加入以下内容：
 *   window.DiffLink = ['版本差异', '固定版本'];
 * 若想使用默认值1，但自定值2，请将值1留空，如下例：
 *   window.DiffLink = ['', '固定版本'];
 */
var defaultTextArray = [getMessage("DiffVersion"), getMessage("PermanentVersion")];
if (window.DiffLink && Object.prototype.toString.call(window.DiffLink) === "[object Array]") {
  const textArray = window.DiffLink;
  if (textArray[0] && Object.prototype.toString.call(textArray[0]) === "[object String]") {
    [defaultTextArray[0]] = textArray;
  }
  if (textArray[1] && Object.prototype.toString.call(textArray[1]) === "[object String]") {
    [defaultTextArray[1]] = textArray;
  }
}
var eventListener = {
  remove: () => {
  }
};
var addPortletLink = ({
  text,
  tooltip,
  link,
  defaultTextArrayIndex,
  isPermaLink
}) => {
  var _element$firstElement;
  let element = document.querySelector("#t-difflink");
  if (!element) {
    const portletId = document.querySelector("#p-cactions") ? "p-cactions" : "p-tb";
    element = mw.util.addPortletLink(portletId, "#", text, "t-difflink", tooltip);
  }
  if (!element) {
    return;
  }
  const clickListener = (event) => {
    event.preventDefault();
    const $element = $("<div>");
    const hash = isPermaLink ? decodeURIComponent(location.hash) : "";
    for (var _i = 0, _arr = [link, "[[".concat(link).concat(hash, "]]"), "[[".concat(link).concat(hash, "|").concat(defaultTextArray[defaultTextArrayIndex], "]]")]; _i < _arr.length; _i++) {
      const value = _arr[_i];
      $element.append(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-explicit-any
        new mw.widgets.CopyTextLayout({
          align: "top",
          copyText: value
        }).$element
      );
    }
    void OO.ui.alert($element, {
      size: "medium"
    });
  };
  eventListener.remove();
  eventListener = (0, import_ext_gadget2.addEventListenerWithRemover)({
    target: (_element$firstElement = element.firstElementChild) !== null && _element$firstElement !== void 0 ? _element$firstElement : element,
    type: "click",
    listener: clickListener
  });
};
//! src/DiffLink/modules/buildLink.ts
var buildLink = (oldId, diffId) => {
  let link = "Special:Diff/";
  if (oldId) {
    link += "".concat(oldId, "/");
  }
  link += diffId;
  addPortletLink({
    link,
    text: getMessage("Diff"),
    tooltip: getMessage("CopyDiff"),
    defaultTextArrayIndex: 0
  });
};
//! src/DiffLink/options.json
var version = "2.0";
//! src/DiffLink/modules/api.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var api = (0, import_ext_gadget3.initMwApi)("DiffLink/".concat(version));
//! src/DiffLink/modules/util/queryApi.ts
var import_ext_gadget4 = require("ext.gadget.Toastify");
var parameters = {
  action: "compare",
  format: "json",
  formatversion: "2",
  prop: "ids",
  torelative: "prev",
  smaxage: 600,
  maxage: 600
};
var queryApi = /* @__PURE__ */ (function() {
  var _ref = _asyncToGenerator(function* (diffId) {
    try {
      return yield api.get({
        ...parameters,
        fromrev: diffId
      });
    } catch (error) {
      console.error("[DiffLink] Ajax error:", error);
      (0, import_ext_gadget4.toastify)({
        text: getMessage("Network error"),
        close: true,
        duration: -1
      }, "error");
      return {};
    }
  });
  return function queryApi2(_x) {
    return _ref.apply(this, arguments);
  };
})();
//! src/DiffLink/modules/compareWithRemoteDiffId.ts
var compareWithRemoteDiffId = /* @__PURE__ */ (function() {
  var _ref2 = _asyncToGenerator(function* (diffId) {
    var _response$compare;
    const response = yield queryApi(diffId);
    const {
      wgDiffNewId,
      wgDiffOldId
    } = mw.config.get();
    if (diffId === wgDiffNewId && ((_response$compare = response["compare"]) === null || _response$compare === void 0 ? void 0 : _response$compare.fromrevid) === wgDiffOldId) {
      buildLink(0, diffId);
    }
  });
  return function compareWithRemoteDiffId2(_x2) {
    return _ref2.apply(this, arguments);
  };
})();
//! src/DiffLink/modules/processId.ts
var processId = (isRevisionPage, {
  diffId,
  oldId,
  revisionId
}) => {
  if (diffId) {
    buildLink(oldId, diffId);
    if (oldId) {
      void compareWithRemoteDiffId(diffId);
    }
  } else if (revisionId && isRevisionPage) {
    addPortletLink({
      text: getMessage("Permanent"),
      tooltip: getMessage("CopyPermanent"),
      link: "Special:PermaLink/".concat(revisionId),
      defaultTextArrayIndex: 1,
      isPermaLink: true
    });
  }
};
//! src/DiffLink/DiffLink.ts
mw.hook("wikipage.content").add(function diffLink($content) {
  if ($content.attr("id") !== "mw-content-text") {
    return;
  }
  const isDiffPage = checkDiffPage($content);
  const isRevisionPage = checkRevisionPage($content);
  if (!isDiffPage && !isRevisionPage) {
    return;
  }
  const {
    wgDiffNewId,
    wgDiffOldId,
    wgRevisionId
  } = mw.config.get();
  processId(isRevisionPage, {
    diffId: wgDiffNewId !== null && wgDiffNewId !== void 0 ? wgDiffNewId : null,
    oldId: wgDiffOldId !== null && wgDiffOldId !== void 0 ? wgDiffOldId : null,
    revisionId: wgRevisionId !== null && wgRevisionId !== void 0 ? wgRevisionId : null
  });
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0RpZmZMaW5rL21vZHVsZXMvdXRpbC9jaGVja0RpZmZQYWdlLnRzIiwgInNyYy9EaWZmTGluay9tb2R1bGVzL3V0aWwvY2hlY2tSZXZpc2lvblBhZ2UudHMiLCAic3JjL0RpZmZMaW5rL21vZHVsZXMvYWRkUG9ydGxldExpbmsudHMiLCAic3JjL0RpZmZMaW5rL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRGlmZkxpbmsvbW9kdWxlcy9idWlsZExpbmsudHMiLCAic3JjL0RpZmZMaW5rL29wdGlvbnMuanNvbiIsICJzcmMvRGlmZkxpbmsvbW9kdWxlcy9hcGkudHMiLCAic3JjL0RpZmZMaW5rL21vZHVsZXMvdXRpbC9xdWVyeUFwaS50cyIsICJzcmMvRGlmZkxpbmsvbW9kdWxlcy9jb21wYXJlV2l0aFJlbW90ZURpZmZJZC50cyIsICJzcmMvRGlmZkxpbmsvbW9kdWxlcy9wcm9jZXNzSWQudHMiLCAic3JjL0RpZmZMaW5rL0RpZmZMaW5rLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBjaGVja0RpZmZQYWdlID0gKCRjb250ZW50OiBKUXVlcnkpOiBib29sZWFuID0+IHtcblx0Y29uc3Qge3dnQ3VyUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdHJldHVybiAkY29udGVudC5maW5kKCd0YWJsZScpLmhhc0NsYXNzKCdkaWZmJykgJiYgISF3Z0N1clJldmlzaW9uSWQ7XG59O1xuXG5leHBvcnQge2NoZWNrRGlmZlBhZ2V9O1xuIiwgImNvbnN0IGNoZWNrUmV2aXNpb25QYWdlID0gKCRjb250ZW50OiBKUXVlcnkpOiBib29sZWFuID0+IHtcblx0cmV0dXJuIChcblx0XHQoJGNvbnRlbnQuZmluZCgnI2NvbnRlbnRTdWIgI213LXJldmlzaW9uLW5hdicpLmxlbmd0aCB8fFxuXHRcdFx0JGNvbnRlbnQuZmluZCgnbWFpbiNjb250ZW50Pi5wcmUtY29udGVudCAjbXctcmV2aXNpb24tbmF2JykubGVuZ3RoKSA+IDBcblx0KTtcbn07XG5cbmV4cG9ydCB7Y2hlY2tSZXZpc2lvblBhZ2V9O1xuIiwgImltcG9ydCB7YWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG4vKiFcbiAqIOiLpeaDs+iHquWumuS5ieWkjeWItue7k+aenOS4reeahOaWh+acrOWPr+mAmui/h+WQkeiHquW3seeahGNvbW1vbi5qc+S4reWKoOWFpeS7peS4i+WGheWuue+8mlxuICogICB3aW5kb3cuRGlmZkxpbmsgPSBbJ+eJiOacrOW3ruW8gicsICflm7rlrprniYjmnKwnXTtcbiAqIOiLpeaDs+S9v+eUqOm7mOiupOWAvDHvvIzkvYboh6rlrprlgLwy77yM6K+35bCG5YC8MeeVmeepuu+8jOWmguS4i+S+i++8mlxuICogICB3aW5kb3cuRGlmZkxpbmsgPSBbJycsICflm7rlrprniYjmnKwnXTtcbiAqL1xuY29uc3QgZGVmYXVsdFRleHRBcnJheTogW3N0cmluZywgc3RyaW5nXSA9IFtnZXRNZXNzYWdlKCdEaWZmVmVyc2lvbicpLCBnZXRNZXNzYWdlKCdQZXJtYW5lbnRWZXJzaW9uJyldO1xuaWYgKHdpbmRvdy5EaWZmTGluayAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwod2luZG93LkRpZmZMaW5rKSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuXHRjb25zdCB0ZXh0QXJyYXkgPSB3aW5kb3cuRGlmZkxpbmsgYXMgdW5rbm93bltdO1xuXHRpZiAodGV4dEFycmF5WzBdICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0ZXh0QXJyYXlbMF0pID09PSAnW29iamVjdCBTdHJpbmddJykge1xuXHRcdFtkZWZhdWx0VGV4dEFycmF5WzBdXSA9IHRleHRBcnJheSBhcyBbc3RyaW5nXTtcblx0fVxuXHRpZiAodGV4dEFycmF5WzFdICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0ZXh0QXJyYXlbMV0pID09PSAnW29iamVjdCBTdHJpbmddJykge1xuXHRcdFtkZWZhdWx0VGV4dEFycmF5WzFdXSA9IHRleHRBcnJheSBhcyBbc3RyaW5nLCBzdHJpbmddO1xuXHR9XG59XG5cbmxldCBldmVudExpc3RlbmVyOiBSZXR1cm5UeXBlPHR5cGVvZiBhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXI+ID0ge1xuXHRyZW1vdmU6ICgpOiB2b2lkID0+IHt9LFxufTtcblxuY29uc3QgYWRkUG9ydGxldExpbmsgPSAoe1xuXHR0ZXh0LFxuXHR0b29sdGlwLFxuXHRsaW5rLFxuXHRkZWZhdWx0VGV4dEFycmF5SW5kZXgsXG5cdGlzUGVybWFMaW5rLFxufToge1xuXHR0ZXh0OiBzdHJpbmc7XG5cdHRvb2x0aXA6IHN0cmluZztcblx0bGluazogc3RyaW5nO1xuXHRkZWZhdWx0VGV4dEFycmF5SW5kZXg6IG51bWJlcjtcblx0aXNQZXJtYUxpbms/OiBib29sZWFuO1xufSk6IHZvaWQgPT4ge1xuXHRsZXQgZWxlbWVudDogSFRNTExJRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdC1kaWZmbGluaycpO1xuXHRpZiAoIWVsZW1lbnQpIHtcblx0XHRjb25zdCBwb3J0bGV0SWQ6ICdwLWNhY3Rpb25zJyB8ICdwLXRiJyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwLWNhY3Rpb25zJykgPyAncC1jYWN0aW9ucycgOiAncC10Yic7XG5cdFx0ZWxlbWVudCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsIHRleHQsICd0LWRpZmZsaW5rJywgdG9vbHRpcCk7XG5cdH1cblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgY2xpY2tMaXN0ZW5lciA9IChldmVudDogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoJzxkaXY+Jyk7XG5cdFx0Y29uc3QgaGFzaDogc3RyaW5nID0gaXNQZXJtYUxpbmsgPyBkZWNvZGVVUklDb21wb25lbnQobG9jYXRpb24uaGFzaCkgOiAnJztcblx0XHRmb3IgKGNvbnN0IHZhbHVlIG9mIFtcblx0XHRcdGxpbmssXG5cdFx0XHRgW1ske2xpbmt9JHtoYXNofV1dYCxcblx0XHRcdGBbWyR7bGlua30ke2hhc2h9fCR7ZGVmYXVsdFRleHRBcnJheVtkZWZhdWx0VGV4dEFycmF5SW5kZXhdfV1dYCxcblx0XHRdKSB7XG5cdFx0XHQkZWxlbWVudC5hcHBlbmQoXG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWNhbGwsIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcblx0XHRcdFx0bmV3IChtdyBhcyBhbnkpLndpZGdldHMuQ29weVRleHRMYXlvdXQoe1xuXHRcdFx0XHRcdGFsaWduOiAndG9wJyxcblx0XHRcdFx0XHRjb3B5VGV4dDogdmFsdWUsXG5cdFx0XHRcdH0pLiRlbGVtZW50IGFzIEpRdWVyeVxuXHRcdFx0KTtcblx0XHR9XG5cdFx0dm9pZCBPTy51aS5hbGVydCgkZWxlbWVudCwge1xuXHRcdFx0c2l6ZTogJ21lZGl1bScsXG5cdFx0fSk7XG5cdH07XG5cblx0ZXZlbnRMaXN0ZW5lci5yZW1vdmUoKTtcblx0ZXZlbnRMaXN0ZW5lciA9IGFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcih7XG5cdFx0dGFyZ2V0OiAoZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCA/PyBlbGVtZW50KSBhcyBIVE1MRWxlbWVudCxcblx0XHR0eXBlOiAnY2xpY2snLFxuXHRcdGxpc3RlbmVyOiBjbGlja0xpc3RlbmVyLFxuXHR9KTtcbn07XG5cbmV4cG9ydCB7YWRkUG9ydGxldExpbmt9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnTmV0d29yayBlcnJvcic6IGxvY2FsaXplKHtcblx0XHRcdGphOiAn44ON44OD44OI44Ov44O844Kv44Ko44Op44O8Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+e9kee7nOW8guW4uCcsXG5cdFx0XHQnemgtaGFudCc6ICfntrLot6/nlbDluLgnLFxuXHRcdH0pLFxuXHRcdENvcHlEaWZmOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvcHkgdGhlIGxpbmsgdG8gdGhlIGRpZmYgdmVyc2lvbiAod2lraSBzeW50YXgpJyxcblx0XHRcdGphOiAn54++5Zyo44Gu54mI6ZaT44Gu5beu5YiG44Oq44Oz44Kv44KS44Kz44OU44O844GX44G+44GZ77yI44Km44Kj44Kt6KiY5rOV77yJJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WkjeWItumTvuaOpeWIsOW9k+WJjeW3ruW8gueJiOacrOeahOe7tOWfuuivreazlScsXG5cdFx0XHQnemgtaGFudCc6ICfopIfoo73pgKPntZDliLDnlbbliY3lt67nlbDniYjmnKznmoTntq3ln7roqp7ms5UnLFxuXHRcdH0pLFxuXHRcdENvcHlQZXJtYW5lbnQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29weSB0aGUgcGVybWFuZW50IGxpbmsgdG8gdGhlIGN1cnJlbnQgdmVyc2lvbiAod2lraSBzeW50YXgpJyxcblx0XHRcdGphOiAn44GT44Gu44Oa44O844K444Gu44GT44Gu54mI44G444Gu5Zu65a6a44Oq44Oz44Kv44KS44Kz44OU44O844GX44G+44GZ77yI44Km44Kj44Kt6KiY5rOV77yJJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WkjeWItumTvuaOpeWIsOW9k+WJjeS/ruiuoueJiOacrOeahOe7tOWfuuivreazlScsXG5cdFx0XHQnemgtaGFudCc6ICfopIfoo73pgKPntZDliLDnlbbliY3kv67oqILniYjmnKznmoTntq3ln7roqp7ms5UnLFxuXHRcdH0pLFxuXHRcdERpZmY6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRGlmZiBsaW5rJyxcblx0XHRcdGphOiAn54++5Zyo44Gu54mI6ZaT44Gu5beu5YiG44Oq44Oz44KvJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W9k+WJjeW3ruW8gumTvuaOpScsXG5cdFx0XHQnemgtaGFudCc6ICfnlbbliY3lt67nlbDpgKPntZAnLFxuXHRcdH0pLFxuXHRcdERpZmZWZXJzaW9uOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RpZmYgdmVyc2lvbicsXG5cdFx0XHRqYTogJ+eJiOmWk+OBruW3ruWIhicsXG5cdFx0XHQnemgtaGFucyc6ICflt67lvILniYjmnKwnLFxuXHRcdFx0J3poLWhhbnQnOiAn5beu55Ww54mI5pysJyxcblx0XHR9KSxcblx0XHRQZXJtYW5lbnQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGVybWFuZW50IGxpbmsnLFxuXHRcdFx0amE6ICfjgZPjga7niYjjgbjjga7lm7rlrprjg6rjg7Pjgq8nLFxuXHRcdFx0J3poLWhhbnMnOiAn5b2T5YmN5L+u6K6i6ZO+5o6lJyxcblx0XHRcdCd6aC1oYW50JzogJ+eVtuWJjeS/ruiogumAo+e1kCcsXG5cdFx0fSksXG5cdFx0UGVybWFuZW50VmVyc2lvbjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdwZXJtYW5lbnQgdmVyc2lvbicsXG5cdFx0XHRqYTogJ+eJiOOBuOOBruWbuuWumuODquODs+OCrycsXG5cdFx0XHQnemgtaGFucyc6ICflm7rlrprniYjmnKzpk77mjqUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5Zu65a6a54mI5pys6YCj57WQJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHthZGRQb3J0bGV0TGlua30gZnJvbSAnLi9hZGRQb3J0bGV0TGluayc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IGJ1aWxkTGluayA9IChvbGRJZDogbnVtYmVyIHwgbnVsbCwgZGlmZklkOiBudW1iZXIpOiB2b2lkID0+IHtcblx0bGV0IGxpbms6IHN0cmluZyA9ICdTcGVjaWFsOkRpZmYvJztcblx0aWYgKG9sZElkKSB7XG5cdFx0bGluayArPSBgJHtvbGRJZH0vYDtcblx0fVxuXHRsaW5rICs9IGRpZmZJZDtcblxuXHRhZGRQb3J0bGV0TGluayh7XG5cdFx0bGluayxcblx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdEaWZmJyksXG5cdFx0dG9vbHRpcDogZ2V0TWVzc2FnZSgnQ29weURpZmYnKSxcblx0XHRkZWZhdWx0VGV4dEFycmF5SW5kZXg6IDAsXG5cdH0pO1xufTtcblxuZXhwb3J0IHtidWlsZExpbmt9O1xuIiwgIntcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYERpZmZMaW5rLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4uL2FwaSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbnR5cGUgQ29tcGFyZVJlc3BvbnNlID0ge1xuXHRjb21wYXJlPzoge1xuXHRcdGZyb21yZXZpZDogbnVtYmVyO1xuXHR9O1xufTtcblxuY29uc3QgcGFyYW1ldGVyczogQXBpQ29tcGFyZVBhZ2VzUGFyYW1zID0ge1xuXHRhY3Rpb246ICdjb21wYXJlJyxcblx0Zm9ybWF0OiAnanNvbicsXG5cdGZvcm1hdHZlcnNpb246ICcyJyxcblx0cHJvcDogJ2lkcycsXG5cdHRvcmVsYXRpdmU6ICdwcmV2Jyxcblx0c21heGFnZTogNjAwLFxuXHRtYXhhZ2U6IDYwMCxcbn07XG5cbmNvbnN0IHF1ZXJ5QXBpID0gYXN5bmMgKGRpZmZJZDogbnVtYmVyKTogUHJvbWlzZTxDb21wYXJlUmVzcG9uc2U+ID0+IHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gYXdhaXQgYXBpLmdldCh7XG5cdFx0XHQuLi5wYXJhbWV0ZXJzLFxuXHRcdFx0ZnJvbXJldjogZGlmZklkLFxuXHRcdH0gYXMgdHlwZW9mIHBhcmFtZXRlcnMpO1xuXHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1tEaWZmTGlua10gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdFx0dG9hc3RpZnkoXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ05ldHdvcmsgZXJyb3InKSxcblx0XHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdH0sXG5cdFx0XHQnZXJyb3InXG5cdFx0KTtcblxuXHRcdHJldHVybiB7fTtcblx0fVxufTtcblxuZXhwb3J0IHtxdWVyeUFwaX07XG4iLCAiaW1wb3J0IHtidWlsZExpbmt9IGZyb20gJy4vYnVpbGRMaW5rJztcbmltcG9ydCB7cXVlcnlBcGl9IGZyb20gJy4vdXRpbC9xdWVyeUFwaSc7XG5cbmNvbnN0IGNvbXBhcmVXaXRoUmVtb3RlRGlmZklkID0gYXN5bmMgKGRpZmZJZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IHJlc3BvbnNlOiBBd2FpdGVkPFJldHVyblR5cGU8dHlwZW9mIHF1ZXJ5QXBpPj4gPSBhd2FpdCBxdWVyeUFwaShkaWZmSWQpO1xuXHRjb25zdCB7d2dEaWZmTmV3SWQsIHdnRGlmZk9sZElkfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKGRpZmZJZCA9PT0gd2dEaWZmTmV3SWQgJiYgcmVzcG9uc2VbJ2NvbXBhcmUnXT8uZnJvbXJldmlkID09PSB3Z0RpZmZPbGRJZCkge1xuXHRcdGJ1aWxkTGluaygwLCBkaWZmSWQpO1xuXHR9XG59O1xuXG5leHBvcnQge2NvbXBhcmVXaXRoUmVtb3RlRGlmZklkfTtcbiIsICJpbXBvcnQge2FkZFBvcnRsZXRMaW5rfSBmcm9tICcuL2FkZFBvcnRsZXRMaW5rJztcbmltcG9ydCB7YnVpbGRMaW5rfSBmcm9tICcuL2J1aWxkTGluayc7XG5pbXBvcnQge2NvbXBhcmVXaXRoUmVtb3RlRGlmZklkfSBmcm9tICcuL2NvbXBhcmVXaXRoUmVtb3RlRGlmZklkJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgcHJvY2Vzc0lkID0gKFxuXHRpc1JldmlzaW9uUGFnZTogYm9vbGVhbixcblx0e2RpZmZJZCwgb2xkSWQsIHJldmlzaW9uSWR9OiB7ZGlmZklkOiBudW1iZXIgfCBudWxsOyBvbGRJZDogbnVtYmVyIHwgbnVsbDsgcmV2aXNpb25JZDogbnVtYmVyIHwgbnVsbH1cbik6IHZvaWQgPT4ge1xuXHRpZiAoZGlmZklkKSB7XG5cdFx0YnVpbGRMaW5rKG9sZElkLCBkaWZmSWQpO1xuXHRcdGlmIChvbGRJZCkge1xuXHRcdFx0dm9pZCBjb21wYXJlV2l0aFJlbW90ZURpZmZJZChkaWZmSWQpO1xuXHRcdH1cblx0fSBlbHNlIGlmIChyZXZpc2lvbklkICYmIGlzUmV2aXNpb25QYWdlKSB7XG5cdFx0YWRkUG9ydGxldExpbmsoe1xuXHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnUGVybWFuZW50JyksXG5cdFx0XHR0b29sdGlwOiBnZXRNZXNzYWdlKCdDb3B5UGVybWFuZW50JyksXG5cdFx0XHRsaW5rOiBgU3BlY2lhbDpQZXJtYUxpbmsvJHtyZXZpc2lvbklkfWAsXG5cdFx0XHRkZWZhdWx0VGV4dEFycmF5SW5kZXg6IDEsXG5cdFx0XHRpc1Blcm1hTGluazogdHJ1ZSxcblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0IHtwcm9jZXNzSWR9O1xuIiwgImltcG9ydCB7Y2hlY2tEaWZmUGFnZX0gZnJvbSAnLi9tb2R1bGVzL3V0aWwvY2hlY2tEaWZmUGFnZSc7XG5pbXBvcnQge2NoZWNrUmV2aXNpb25QYWdlfSBmcm9tICcuL21vZHVsZXMvdXRpbC9jaGVja1JldmlzaW9uUGFnZSc7XG5pbXBvcnQge3Byb2Nlc3NJZH0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NJZCc7XG5cbm13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5hZGQoZnVuY3Rpb24gZGlmZkxpbmsoJGNvbnRlbnQpOiB2b2lkIHtcblx0aWYgKCRjb250ZW50LmF0dHIoJ2lkJykgIT09ICdtdy1jb250ZW50LXRleHQnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgaXNEaWZmUGFnZTogYm9vbGVhbiA9IGNoZWNrRGlmZlBhZ2UoJGNvbnRlbnQpO1xuXHRjb25zdCBpc1JldmlzaW9uUGFnZTogYm9vbGVhbiA9IGNoZWNrUmV2aXNpb25QYWdlKCRjb250ZW50KTtcblx0aWYgKCFpc0RpZmZQYWdlICYmICFpc1JldmlzaW9uUGFnZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHt3Z0RpZmZOZXdJZCwgd2dEaWZmT2xkSWQsIHdnUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0cHJvY2Vzc0lkKGlzUmV2aXNpb25QYWdlLCB7XG5cdFx0ZGlmZklkOiB3Z0RpZmZOZXdJZCA/PyBudWxsLFxuXHRcdG9sZElkOiB3Z0RpZmZPbGRJZCA/PyBudWxsLFxuXHRcdHJldmlzaW9uSWQ6IHdnUmV2aXNpb25JZCA/PyBudWxsLFxuXHR9KTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLGdCQUFpQkMsY0FBOEI7QUFDcEQsUUFBTTtJQUFDQztFQUFlLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFDeEMsU0FBT0osU0FBU0ss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SXBDLFFBQVE7QUFDWEYsY0FBVUMsT0FBT0MsTUFBTTtBQUN2QixRQUFJRCxPQUFPO0FBQ1YsV0FBSzJCLHdCQUF3QjFCLE1BQU07SUFDcEM7RUFDRCxXQUFXb0MsY0FBY0QsZ0JBQWdCO0FBQ3hDM0UsbUJBQWU7TUFDZEMsTUFBTWIsV0FBVyxXQUFXO01BQzVCYyxTQUFTZCxXQUFXLGVBQWU7TUFDbkNlLE1BQUEscUJBQUFtQixPQUEyQnNELFVBQVU7TUFDckN4RSx1QkFBdUI7TUFDdkJDLGFBQWE7SUFDZCxDQUFDO0VBQ0Y7QUFDRDs7QUNuQkF0QyxHQUFHOEcsS0FBSyxrQkFBa0IsRUFBRUMsSUFBSSxTQUFTQyxTQUFTbEgsVUFBZ0I7QUFDakUsTUFBSUEsU0FBU21ILEtBQUssSUFBSSxNQUFNLG1CQUFtQjtBQUM5QztFQUNEO0FBRUEsUUFBTUMsYUFBc0JySCxjQUFjQyxRQUFRO0FBQ2xELFFBQU04RyxpQkFBMEJ2RyxrQkFBa0JQLFFBQVE7QUFDMUQsTUFBSSxDQUFDb0gsY0FBYyxDQUFDTixnQkFBZ0I7QUFDbkM7RUFDRDtBQUVBLFFBQU07SUFBQ0w7SUFBYUM7SUFBYVc7RUFBWSxJQUFJbkgsR0FBR0MsT0FBT0MsSUFBSTtBQUUvRHlHLFlBQVVDLGdCQUFnQjtJQUN6Qm5DLFFBQVE4QixnQkFBQSxRQUFBQSxnQkFBQSxTQUFBQSxjQUFlO0lBQ3ZCL0IsT0FBT2dDLGdCQUFBLFFBQUFBLGdCQUFBLFNBQUFBLGNBQWU7SUFDdEJLLFlBQVlNLGlCQUFBLFFBQUFBLGlCQUFBLFNBQUFBLGVBQWdCO0VBQzdCLENBQUM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJjaGVja0RpZmZQYWdlIiwgIiRjb250ZW50IiwgIndnQ3VyUmV2aXNpb25JZCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImZpbmQiLCAiaGFzQ2xhc3MiLCAiY2hlY2tSZXZpc2lvblBhZ2UiLCAibGVuZ3RoIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJqYSIsICJDb3B5RGlmZiIsICJlbiIsICJDb3B5UGVybWFuZW50IiwgIkRpZmYiLCAiRGlmZlZlcnNpb24iLCAiUGVybWFuZW50IiwgIlBlcm1hbmVudFZlcnNpb24iLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImRlZmF1bHRUZXh0QXJyYXkiLCAid2luZG93IiwgIkRpZmZMaW5rIiwgIk9iamVjdCIsICJwcm90b3R5cGUiLCAidG9TdHJpbmciLCAiY2FsbCIsICJ0ZXh0QXJyYXkiLCAiZXZlbnRMaXN0ZW5lciIsICJyZW1vdmUiLCAiYWRkUG9ydGxldExpbmsiLCAidGV4dCIsICJ0b29sdGlwIiwgImxpbmsiLCAiZGVmYXVsdFRleHRBcnJheUluZGV4IiwgImlzUGVybWFMaW5rIiwgIl9lbGVtZW50JGZpcnN0RWxlbWVudCIsICJlbGVtZW50IiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAicG9ydGxldElkIiwgInV0aWwiLCAiY2xpY2tMaXN0ZW5lciIsICJldmVudCIsICJwcmV2ZW50RGVmYXVsdCIsICIkZWxlbWVudCIsICIkIiwgImhhc2giLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgImxvY2F0aW9uIiwgIl9pIiwgIl9hcnIiLCAiY29uY2F0IiwgInZhbHVlIiwgImFwcGVuZCIsICJ3aWRnZXRzIiwgIkNvcHlUZXh0TGF5b3V0IiwgImFsaWduIiwgImNvcHlUZXh0IiwgIk9PIiwgInVpIiwgImFsZXJ0IiwgInNpemUiLCAiYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyIiwgInRhcmdldCIsICJmaXJzdEVsZW1lbnRDaGlsZCIsICJ0eXBlIiwgImxpc3RlbmVyIiwgImJ1aWxkTGluayIsICJvbGRJZCIsICJkaWZmSWQiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiYXBpIiwgImluaXRNd0FwaSIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAicGFyYW1ldGVycyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJ0b3JlbGF0aXZlIiwgInNtYXhhZ2UiLCAibWF4YWdlIiwgInF1ZXJ5QXBpIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiZnJvbXJldiIsICJlcnJvciIsICJjb25zb2xlIiwgInRvYXN0aWZ5IiwgImNsb3NlIiwgImR1cmF0aW9uIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJjb21wYXJlV2l0aFJlbW90ZURpZmZJZCIsICJfcmVmMiIsICJfcmVzcG9uc2UkY29tcGFyZSIsICJyZXNwb25zZSIsICJ3Z0RpZmZOZXdJZCIsICJ3Z0RpZmZPbGRJZCIsICJmcm9tcmV2aWQiLCAiX3gyIiwgInByb2Nlc3NJZCIsICJpc1JldmlzaW9uUGFnZSIsICJyZXZpc2lvbklkIiwgImhvb2siLCAiYWRkIiwgImRpZmZMaW5rIiwgImF0dHIiLCAiaXNEaWZmUGFnZSIsICJ3Z1JldmlzaW9uSWQiXQp9Cg==
