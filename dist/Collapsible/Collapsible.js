/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://rs.miraheze.org/wiki/MediaWiki:Gadget-collapsible.js}
 * @base {@link https://rs.miraheze.org/wiki/MediaWiki:Gadget-collapsible.css}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src//Collapsible}
 * @author SolidBlock
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

// dist/Collapsible/Collapsible.js
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
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    var _iterator = _createForOfIteratorHelper(__getOwnPropNames(from)), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        let key = _step.value;
        if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: true
  }) : target,
  mod
));
//! src/Collapsible/modules/util/generateTargetElements.ts
var generateTargetElements = ($content) => {
  var _iterator2 = _createForOfIteratorHelper($content.find(".parent-collapsible, .parent-collapsible-using-slide, .parent-collapsible-next")), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      const element = _step2.value;
      const $parent = $(element).parent();
      var _iterator3 = _createForOfIteratorHelper(element.classList), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          const className = _step3.value;
          if (className.slice(0, 18) === "parent-collapsible") {
            $parent.addClass(className.replace(/^parent-/, ""));
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  $content.find(".collapsible-using-slide, .collapsible-next").addClass("collapsible");
  const $collapsibles = $content.find(".collapsible");
  return $collapsibles;
};
//! src/Collapsible/modules/addListener.ts
var import_ext_gadget = require("ext.gadget.Util");
//! src/Collapsible/modules/util/hideElement.ts
var hideElement = ($collapsible, time) => {
  const useSlide = $collapsible.hasClass("collapsible-using-slide");
  if ($collapsible.hasClass("collapsible-next")) {
    const $element = $collapsible.next();
    if (useSlide) {
      $element.slideUp(time);
    } else {
      $element.fadeOut(time);
    }
  } else {
    const $elements = $collapsible.is("table") ? $collapsible.children().children("tr") : $collapsible.contents();
    var _iterator4 = _createForOfIteratorHelper($elements), _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
        const element = _step4.value;
        const $element = $(element);
        if ($element.hasClass("collapsible-cascade")) {
          hideElement($element, time);
        } else if (!$element.hasClass("collapsible-always-show")) {
          if (useSlide) {
            $element.slideUp(time);
          } else {
            $element.fadeOut(time);
          }
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  }
};
//! src/Collapsible/modules/util/showElement.ts
var showElement = ($collapsible, time) => {
  const useSlide = $collapsible.hasClass("collapsible-using-slide");
  if ($collapsible.hasClass("collapsible-next")) {
    const $element = $collapsible.next();
    if (useSlide) {
      $element.slideDown(time);
    } else {
      $element.fadeIn(time);
    }
  } else {
    const $elements = $collapsible.is("table") ? $collapsible.children().children("tr") : $collapsible.contents();
    var _iterator5 = _createForOfIteratorHelper($elements), _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
        const element = _step5.value;
        const $element = $(element);
        if ($element.hasClass("collapsible-cascade")) {
          showElement($element, time);
        } else if (!$element.hasClass("collapsible-always-show")) {
          if (useSlide) {
            $element.slideDown(time);
          } else {
            $element.fadeIn(time);
          }
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
  }
};
//! src/Collapsible/modules/util/toggleElement.ts
var toggleElement = ($collapsible) => {
  const collapsed = $collapsible.hasClass("collapsed");
  const duration = Number.parseInt($collapsible.data("collapse-duration"), 10) || 200;
  if (collapsed) {
    showElement($collapsible, duration);
    $collapsible.removeClass("collapsed");
  } else {
    hideElement($collapsible, duration);
    $collapsible.addClass("collapsed");
  }
};
//! src/Collapsible/modules/addListener.ts
var addListener = ($collapsible, $togglerLink, hideText, showText) => {
  const eventListener = (event) => {
    if (!(0, import_ext_gadget.checkA11yConfirmKey)(event)) {
      return;
    }
    event.preventDefault();
    toggleElement($collapsible);
    if ($collapsible.hasClass("collapsed")) {
      $togglerLink.text(showText);
    } else {
      $togglerLink.text(hideText);
    }
  };
  $togglerLink.on("click", eventListener);
  $togglerLink.on("keydown", eventListener);
};
//! src/Collapsible/modules/addToggler.ts
var addToggler = ($collapsible, $toggler) => {
  const $appendHere = $collapsible.find(".collapsible-toggle-append-here").not(".collapsible-toggle-appended");
  if ($collapsible.hasClass("collapsible-next")) {
    $collapsible.append($toggler);
  } else if ($appendHere.length) {
    $appendHere.append($toggler);
    $appendHere.addClass("collapsible-toggle-appended");
    $appendHere.parentsUntil($collapsible).addClass("collapsible-always-show");
  } else if ($collapsible.hasClass("navbox")) {
    $collapsible.children(".navbox-title").first().addClass("collapsible-always-show").append($toggler);
  } else if ($collapsible.hasClass("NavFrame")) {
    $collapsible.children(".NavHead").first().addClass("collapsible-always-show").append($toggler);
  } else if ($collapsible.is("table")) {
    const $caption = $collapsible.children("caption");
    if ($caption.length) {
      $caption.first().append($toggler);
    } else {
      const $trows = $collapsible.children().children("tr");
      $trows.first().addClass("collapsible-always-show").children().last().append($toggler);
    }
  } else {
    const $toToggle = $collapsible.children(".collapsible-always-show");
    if ($toToggle.length) {
      $toToggle.first().append($toggler);
    } else {
      $collapsible.prepend($toggler);
      $toggler.addClass("collapsible-always-show");
    }
  }
};
//! src/Collapsible/modules/util/generateTogglerElement.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.JSX"), 1);
//! src/Collapsible/modules/util/Collapsible.module.less
var toggler = "Collapsible-module__toggler_kvMGjG__4100";
//! src/Collapsible/modules/util/generateTogglerElement.tsx
var generateTogglerElement = ($collapsible, hideText, showText) => {
  const $toggler = $(/* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
    className: [toggler, "noprint"]
  }, "[", /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
    role: "button",
    tabIndex: 0
  }, $collapsible.hasClass("collapsed") ? showText : hideText), "]"));
  return $toggler;
};
//! src/Collapsible/modules/i18n.ts
var import_ext_gadget3 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Collapse: (0, import_ext_gadget3.localize)({
      en: "collapse",
      ja: "折り畳み",
      "zh-hans": "折叠",
      "zh-hant": "折疊"
    }),
    Expand: (0, import_ext_gadget3.localize)({
      en: "expand",
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
//! src/Collapsible/modules/makeCollapsible.ts
var makeCollapsible = ($collapsibles) => {
  var _iterator6 = _createForOfIteratorHelper($collapsibles), _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
      const element = _step6.value;
      const $collapsible = $(element);
      if ($collapsible.data("made-collapsible")) {
        continue;
      }
      const hideText = $collapsible.data("collapsetext") || getMessage("Collapse");
      const showText = $collapsible.data("expandtext") || getMessage("Expand");
      const $toggler = generateTogglerElement($collapsible, hideText, showText);
      const $togglerLink = $toggler.find("a");
      addToggler($collapsible, $toggler);
      if ($collapsible.hasClass("collapsed")) {
        hideElement($collapsible, 0);
      }
      addListener($collapsible, $togglerLink, hideText, showText);
      $collapsible.data("made-collapsible", true);
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
};
//! src/Collapsible/modules/navFrame.ts
var navFrame = ($content) => {
  var _iterator7 = _createForOfIteratorHelper($content.find(".NavToggle, .toggleShow, .toggleHide, .NavEnd")), _step7;
  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
      const element = _step7.value;
      element.remove();
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
  var _iterator8 = _createForOfIteratorHelper($content.find(".NavFrame, .Boxmerge")), _step8;
  try {
    for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
      const element = _step8.value;
      if (!element.classList.contains("collapsible")) {
        element.classList.add("collapsible");
      }
      if (!element.classList.contains("Boxmerge")) {
        element.classList.replace("Boxmerge", "NavFrame");
      }
    }
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
  }
  var _iterator9 = _createForOfIteratorHelper($content.find(".NavContent, .NavPic")), _step9;
  try {
    for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
      const element = _step9.value;
      if (element.style.display !== "none") {
        continue;
      }
      if (element.parentElement && element.parentElement.classList.contains("NavFrame")) {
        element.parentElement.classList.add("collapsed");
      }
    }
  } catch (err) {
    _iterator9.e(err);
  } finally {
    _iterator9.f();
  }
};
//! src/Collapsible/Collapsible.ts
/*!
 * @description 为元素添加“隐藏”和“显示”的按钮。
 *
 * 用法说明：
 *
 * 带有 collapsible 类的元素默认可折叠。
 * - 对于 navbox，折叠时会保留标题栏，并将折叠按钮添加在标题栏中。
 * - 对于 table，折叠时会保留 caption 或第一行，并将折叠按钮添加在 caption 末尾
 *   或者第一行最后一格末尾。
 * - 对于其他元素，
 *   - 若其子元素有带有 collapsible-always-show 类，那么除了该子元素之外的各个
 *   子元素都会随折叠隐藏，且折叠按钮添加在该子元素末尾。
 *   - 若没有子元素带有 collapsible-always-show 类，那么所有子元素都会被折叠，
 *   折叠按钮添加在整个 collapsible 元素的开头，且该按钮不会随折叠隐藏。
 *   - 若子元素带有 collapsible-cascade 类，那么当折叠时，该元素自身不是隐藏，
 *   而是隐藏其所有的子元素，这些子元素同样可以受 collapsible-always-show 和
 *   collapsible-cascade 类的影响。
 *   - 注意必须是子元素，直接的文本节点不会随折叠隐藏，例如：
 *     <div class="collapsible">123<span>456</span></div>
 *   折叠时，“456”会随折叠隐藏，但“123”不会。
 * - 若带有 collapsible-using-slide 类，那么折叠时，使用滑动动画而非淡入淡出的
 *   动画。建议当只有一个元素会被隐藏时，才加此类。
 *   - 带有 collapsible-using-slide 类的元素会自动带有 collapsible 类。
 * - 若带有 collapsible-next 类，那么其折叠的不是其自身的子元素，而是折叠紧随
 *   其后的一个元素。
 *   - 这种情况下，折叠按钮默认附在该 collapsible-next 元素的末尾。
 *   - 带有 collapsible-next 类的元素会自动带有 collapsible 类。
 * - data-collapse-duration 属性可以设置折叠动画的时长，默认为 200 毫秒。
 * - 带有 collapsed 类的元素初始就是已折叠的。
 * - data-expandtext 和 data-collapsetext 可用于控制折叠按钮的显示文字。不支持
 *   繁简转换，但是其默认值是可以正常根据界面语言繁简转换的。
 */
mw.hook("wikipage.content").add(($content) => {
  navFrame($content);
  const $collapsibles = generateTargetElements($content);
  if (!$collapsibles.length) {
    return;
  }
  makeCollapsible($collapsibles);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NvbGxhcHNpYmxlL21vZHVsZXMvdXRpbC9nZW5lcmF0ZVRhcmdldEVsZW1lbnRzLnRzIiwgInNyYy9Db2xsYXBzaWJsZS9tb2R1bGVzL2FkZExpc3RlbmVyLnRzIiwgInNyYy9Db2xsYXBzaWJsZS9tb2R1bGVzL3V0aWwvaGlkZUVsZW1lbnQudHMiLCAic3JjL0NvbGxhcHNpYmxlL21vZHVsZXMvdXRpbC9zaG93RWxlbWVudC50cyIsICJzcmMvQ29sbGFwc2libGUvbW9kdWxlcy91dGlsL3RvZ2dsZUVsZW1lbnQudHMiLCAic3JjL0NvbGxhcHNpYmxlL21vZHVsZXMvYWRkVG9nZ2xlci50cyIsICJzcmMvQ29sbGFwc2libGUvbW9kdWxlcy91dGlsL2dlbmVyYXRlVG9nZ2xlckVsZW1lbnQudHN4IiwgInNyYy9Db2xsYXBzaWJsZS9tb2R1bGVzL3V0aWwvQ29sbGFwc2libGUubW9kdWxlLmxlc3MiLCAic3JjL0NvbGxhcHNpYmxlL21vZHVsZXMvaTE4bi50cyIsICJzcmMvQ29sbGFwc2libGUvbW9kdWxlcy9tYWtlQ29sbGFwc2libGUudHMiLCAic3JjL0NvbGxhcHNpYmxlL21vZHVsZXMvbmF2RnJhbWUudHMiLCAic3JjL0NvbGxhcHNpYmxlL0NvbGxhcHNpYmxlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBnZW5lcmF0ZVRhcmdldEVsZW1lbnRzID0gKCRjb250ZW50OiBKUXVlcnkpOiBKUXVlcnkgPT4ge1xuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGNvbnRlbnQuZmluZChcblx0XHQnLnBhcmVudC1jb2xsYXBzaWJsZSwgLnBhcmVudC1jb2xsYXBzaWJsZS11c2luZy1zbGlkZSwgLnBhcmVudC1jb2xsYXBzaWJsZS1uZXh0J1xuXHQpKSB7XG5cdFx0Y29uc3QgJHBhcmVudDogSlF1ZXJ5ID0gJChlbGVtZW50KS5wYXJlbnQoKTtcblx0XHRmb3IgKGNvbnN0IGNsYXNzTmFtZSBvZiBlbGVtZW50LmNsYXNzTGlzdCkge1xuXHRcdFx0aWYgKGNsYXNzTmFtZS5zbGljZSgwLCAxOCkgPT09ICdwYXJlbnQtY29sbGFwc2libGUnKSB7XG5cdFx0XHRcdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHRcdFx0XHQvLyAqIGNvbGxhcHNpYmxlXG5cdFx0XHRcdC8vICogY29sbGFwc2libGUtdXNpbmctc2xpZGVcblx0XHRcdFx0Ly8gKiBjb2xsYXBzaWJsZS1uZXh0XG5cdFx0XHRcdCRwYXJlbnQuYWRkQ2xhc3MoY2xhc3NOYW1lLnJlcGxhY2UoL15wYXJlbnQtLywgJycpKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQkY29udGVudC5maW5kKCcuY29sbGFwc2libGUtdXNpbmctc2xpZGUsIC5jb2xsYXBzaWJsZS1uZXh0JykuYWRkQ2xhc3MoJ2NvbGxhcHNpYmxlJyk7XG5cblx0Y29uc3QgJGNvbGxhcHNpYmxlczogSlF1ZXJ5ID0gJGNvbnRlbnQuZmluZCgnLmNvbGxhcHNpYmxlJyk7XG5cblx0cmV0dXJuICRjb2xsYXBzaWJsZXM7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlVGFyZ2V0RWxlbWVudHN9O1xuIiwgImltcG9ydCB7Y2hlY2tBMTF5Q29uZmlybUtleX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7dG9nZ2xlRWxlbWVudH0gZnJvbSAnLi91dGlsL3RvZ2dsZUVsZW1lbnQnO1xuXG5jb25zdCBhZGRMaXN0ZW5lciA9ICgkY29sbGFwc2libGU6IEpRdWVyeSwgJHRvZ2dsZXJMaW5rOiBKUXVlcnksIGhpZGVUZXh0OiBzdHJpbmcsIHNob3dUZXh0OiBzdHJpbmcpOiB2b2lkID0+IHtcblx0Y29uc3QgZXZlbnRMaXN0ZW5lciA9IChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQgfCBKUXVlcnkuS2V5RG93bkV2ZW50KTogdm9pZCA9PiB7XG5cdFx0aWYgKCFjaGVja0ExMXlDb25maXJtS2V5KGV2ZW50KSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHR0b2dnbGVFbGVtZW50KCRjb2xsYXBzaWJsZSk7XG5cblx0XHRpZiAoJGNvbGxhcHNpYmxlLmhhc0NsYXNzKCdjb2xsYXBzZWQnKSkge1xuXHRcdFx0JHRvZ2dsZXJMaW5rLnRleHQoc2hvd1RleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkdG9nZ2xlckxpbmsudGV4dChoaWRlVGV4dCk7XG5cdFx0fVxuXHR9O1xuXG5cdCR0b2dnbGVyTGluay5vbignY2xpY2snLCBldmVudExpc3RlbmVyKTtcblx0JHRvZ2dsZXJMaW5rLm9uKCdrZXlkb3duJywgZXZlbnRMaXN0ZW5lcik7XG59O1xuXG5leHBvcnQge2FkZExpc3RlbmVyfTtcbiIsICIvLyDpmpDol4/mn5DkuKrlj6/mipjlj6DnmoTlhYPntKDjgIJcbmNvbnN0IGhpZGVFbGVtZW50ID0gKCRjb2xsYXBzaWJsZTogSlF1ZXJ5LCB0aW1lOiBudW1iZXIpOiB2b2lkID0+IHtcblx0Y29uc3QgdXNlU2xpZGU6IGJvb2xlYW4gPSAkY29sbGFwc2libGUuaGFzQ2xhc3MoJ2NvbGxhcHNpYmxlLXVzaW5nLXNsaWRlJyk7XG5cdGlmICgkY29sbGFwc2libGUuaGFzQ2xhc3MoJ2NvbGxhcHNpYmxlLW5leHQnKSkge1xuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkY29sbGFwc2libGUubmV4dCgpO1xuXG5cdFx0aWYgKHVzZVNsaWRlKSB7XG5cdFx0XHQkZWxlbWVudC5zbGlkZVVwKHRpbWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkZWxlbWVudC5mYWRlT3V0KHRpbWUpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRjb25zdCAkZWxlbWVudHM6IEpRdWVyeSA9ICRjb2xsYXBzaWJsZS5pcygndGFibGUnKVxuXHRcdFx0PyAkY29sbGFwc2libGUuY2hpbGRyZW4oKS5jaGlsZHJlbigndHInKVxuXHRcdFx0OiAoJGNvbGxhcHNpYmxlLmNvbnRlbnRzKCkgYXMgSlF1ZXJ5KTtcblxuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiAkZWxlbWVudHMpIHtcblx0XHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXHRcdFx0aWYgKCRlbGVtZW50Lmhhc0NsYXNzKCdjb2xsYXBzaWJsZS1jYXNjYWRlJykpIHtcblx0XHRcdFx0aGlkZUVsZW1lbnQoJGVsZW1lbnQsIHRpbWUpO1xuXHRcdFx0fSBlbHNlIGlmICghJGVsZW1lbnQuaGFzQ2xhc3MoJ2NvbGxhcHNpYmxlLWFsd2F5cy1zaG93JykpIHtcblx0XHRcdFx0aWYgKHVzZVNsaWRlKSB7XG5cdFx0XHRcdFx0JGVsZW1lbnQuc2xpZGVVcCh0aW1lKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkZWxlbWVudC5mYWRlT3V0KHRpbWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge2hpZGVFbGVtZW50fTtcbiIsICIvLyDmmL7npLrmn5DkuKrlj6/mipjlj6DnmoTlhYPntKDjgIJcbmNvbnN0IHNob3dFbGVtZW50ID0gKCRjb2xsYXBzaWJsZTogSlF1ZXJ5LCB0aW1lOiBudW1iZXIpOiB2b2lkID0+IHtcblx0Y29uc3QgdXNlU2xpZGU6IGJvb2xlYW4gPSAkY29sbGFwc2libGUuaGFzQ2xhc3MoJ2NvbGxhcHNpYmxlLXVzaW5nLXNsaWRlJyk7XG5cdGlmICgkY29sbGFwc2libGUuaGFzQ2xhc3MoJ2NvbGxhcHNpYmxlLW5leHQnKSkge1xuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkY29sbGFwc2libGUubmV4dCgpO1xuXG5cdFx0aWYgKHVzZVNsaWRlKSB7XG5cdFx0XHQkZWxlbWVudC5zbGlkZURvd24odGltZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRlbGVtZW50LmZhZGVJbih0aW1lKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Y29uc3QgJGVsZW1lbnRzOiBKUXVlcnkgPSAkY29sbGFwc2libGUuaXMoJ3RhYmxlJylcblx0XHRcdD8gJGNvbGxhcHNpYmxlLmNoaWxkcmVuKCkuY2hpbGRyZW4oJ3RyJylcblx0XHRcdDogKCRjb2xsYXBzaWJsZS5jb250ZW50cygpIGFzIEpRdWVyeSk7XG5cblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGVsZW1lbnRzKSB7XG5cdFx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJChlbGVtZW50KTtcblx0XHRcdGlmICgkZWxlbWVudC5oYXNDbGFzcygnY29sbGFwc2libGUtY2FzY2FkZScpKSB7XG5cdFx0XHRcdHNob3dFbGVtZW50KCRlbGVtZW50LCB0aW1lKTtcblx0XHRcdH0gZWxzZSBpZiAoISRlbGVtZW50Lmhhc0NsYXNzKCdjb2xsYXBzaWJsZS1hbHdheXMtc2hvdycpKSB7XG5cdFx0XHRcdGlmICh1c2VTbGlkZSkge1xuXHRcdFx0XHRcdCRlbGVtZW50LnNsaWRlRG93bih0aW1lKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkZWxlbWVudC5mYWRlSW4odGltZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7c2hvd0VsZW1lbnR9O1xuIiwgImltcG9ydCB7aGlkZUVsZW1lbnR9IGZyb20gJy4vaGlkZUVsZW1lbnQnO1xuaW1wb3J0IHtzaG93RWxlbWVudH0gZnJvbSAnLi9zaG93RWxlbWVudCc7XG5cbmNvbnN0IHRvZ2dsZUVsZW1lbnQgPSAoJGNvbGxhcHNpYmxlOiBKUXVlcnkpOiB2b2lkID0+IHtcblx0Y29uc3QgY29sbGFwc2VkOiBib29sZWFuID0gJGNvbGxhcHNpYmxlLmhhc0NsYXNzKCdjb2xsYXBzZWQnKTtcblx0Y29uc3QgZHVyYXRpb246IG51bWJlciA9IE51bWJlci5wYXJzZUludCgkY29sbGFwc2libGUuZGF0YSgnY29sbGFwc2UtZHVyYXRpb24nKSBhcyBzdHJpbmcsIDEwKSB8fCAyMDA7XG5cblx0aWYgKGNvbGxhcHNlZCkge1xuXHRcdHNob3dFbGVtZW50KCRjb2xsYXBzaWJsZSwgZHVyYXRpb24pO1xuXHRcdCRjb2xsYXBzaWJsZS5yZW1vdmVDbGFzcygnY29sbGFwc2VkJyk7XG5cdH0gZWxzZSB7XG5cdFx0aGlkZUVsZW1lbnQoJGNvbGxhcHNpYmxlLCBkdXJhdGlvbik7XG5cdFx0JGNvbGxhcHNpYmxlLmFkZENsYXNzKCdjb2xsYXBzZWQnKTtcblx0fVxufTtcblxuZXhwb3J0IHt0b2dnbGVFbGVtZW50fTtcbiIsICJjb25zdCBhZGRUb2dnbGVyID0gKCRjb2xsYXBzaWJsZTogSlF1ZXJ5LCAkdG9nZ2xlcjogSlF1ZXJ5KTogdm9pZCA9PiB7XG5cdGNvbnN0ICRhcHBlbmRIZXJlOiBKUXVlcnkgPSAkY29sbGFwc2libGVcblx0XHQuZmluZCgnLmNvbGxhcHNpYmxlLXRvZ2dsZS1hcHBlbmQtaGVyZScpXG5cdFx0Lm5vdCgnLmNvbGxhcHNpYmxlLXRvZ2dsZS1hcHBlbmRlZCcpO1xuXG5cdGlmICgkY29sbGFwc2libGUuaGFzQ2xhc3MoJ2NvbGxhcHNpYmxlLW5leHQnKSkge1xuXHRcdC8vIOiLpeaciSBjb2xsYXBzaWJsZS1uZXh0IOexu++8jOmCo+S5iOiiq+aKmOWPoOeahOWFg+e0oOS4jeWcqOivpeWFg+e0oOWGhe+8jOatpOaXtuebtOaOpeWwhuaKmOWPoOaMiemSrua3u+WKoOWcqOacq+WwvuOAglxuXHRcdCRjb2xsYXBzaWJsZS5hcHBlbmQoJHRvZ2dsZXIpO1xuXHR9IGVsc2UgaWYgKCRhcHBlbmRIZXJlLmxlbmd0aCkge1xuXHRcdC8vIOW4puaciSBjb2xsYXBzaWJsZS10b2dnbGUtYXBwZW5kLWhlcmUg57G755qE5YWD57Sg77yM6Iul5a2Y5Zyo77yM5YiZ5peg6K665Y+v5oqY5Y+g5YWD57Sg5piv5LuA5LmI77yM5YiZ5by65Yi25bCG5oqY5Y+g5oyJ6ZKu5re75Yqg6Iez6K+l5YWD57Sg5Lit44CCXG5cdFx0JGFwcGVuZEhlcmUuYXBwZW5kKCR0b2dnbGVyKTtcblx0XHQkYXBwZW5kSGVyZS5hZGRDbGFzcygnY29sbGFwc2libGUtdG9nZ2xlLWFwcGVuZGVkJyk7XG5cdFx0JGFwcGVuZEhlcmUucGFyZW50c1VudGlsKCRjb2xsYXBzaWJsZSkuYWRkQ2xhc3MoJ2NvbGxhcHNpYmxlLWFsd2F5cy1zaG93Jyk7XG5cdH0gZWxzZSBpZiAoJGNvbGxhcHNpYmxlLmhhc0NsYXNzKCduYXZib3gnKSkge1xuXHRcdC8vIG5hdmJveCDlhYPntKDnmoTmipjlj6DmjInpkq7mt7vliqDoh7MgbmF2Ym94LXRpdGxlIOS4re+8jOS4lOivpSBuYXZib3gtdGl0bGUg5Lya6YG/5YWN6KKr5oqY5Y+g5b2x5ZON5Yiw44CCXG5cdFx0JGNvbGxhcHNpYmxlLmNoaWxkcmVuKCcubmF2Ym94LXRpdGxlJykuZmlyc3QoKS5hZGRDbGFzcygnY29sbGFwc2libGUtYWx3YXlzLXNob3cnKS5hcHBlbmQoJHRvZ2dsZXIpO1xuXHR9IGVsc2UgaWYgKCRjb2xsYXBzaWJsZS5oYXNDbGFzcygnTmF2RnJhbWUnKSkge1xuXHRcdC8vIE5hdkZyYW1lIOWFg+e0oOeahOaKmOWPoOaMiemSrua3u+WKoOiHs+WFtuWtkOWFg+e0oCBOYXZIZWFkIOS4re+8jOS4lOivpSBOYXZIZWFkIOS8mumBv+WFjeiiq+aKmOWPoOW9seWTjeWIsOOAglxuXHRcdCRjb2xsYXBzaWJsZS5jaGlsZHJlbignLk5hdkhlYWQnKS5maXJzdCgpLmFkZENsYXNzKCdjb2xsYXBzaWJsZS1hbHdheXMtc2hvdycpLmFwcGVuZCgkdG9nZ2xlcik7XG5cdH0gZWxzZSBpZiAoJGNvbGxhcHNpYmxlLmlzKCd0YWJsZScpKSB7XG5cdFx0Ly8g5a+55LqOIHRhYmxlIOWvueixoe+8jOWwneivlea3u+WKoOWIsCBjYXB0aW9uIOS4re+8jOiLpSBjYXB0aW9uIOS4jeWtmOWcqO+8jOWImea3u+WKoOWIsOesrOS4gOihjOeahOacgOWQjuS4gOWIl++8jOW5tuWwhuesrOS4gOihjOiuvuS4uuWni+e7iOaYvuekuuOAglxuXHRcdGNvbnN0ICRjYXB0aW9uOiBKUXVlcnkgPSAkY29sbGFwc2libGUuY2hpbGRyZW4oJ2NhcHRpb24nKTtcblx0XHRpZiAoJGNhcHRpb24ubGVuZ3RoKSB7XG5cdFx0XHQvLyDmnIljYXB0aW9u55qE5oOF5Ya1XG5cdFx0XHQkY2FwdGlvbi5maXJzdCgpLmFwcGVuZCgkdG9nZ2xlcik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0ICR0cm93czogSlF1ZXJ5PEhUTUxUYWJsZVJvd0VsZW1lbnQ+ID0gJGNvbGxhcHNpYmxlLmNoaWxkcmVuKCkuY2hpbGRyZW4oJ3RyJyk7XG5cdFx0XHQkdHJvd3MuZmlyc3QoKS5hZGRDbGFzcygnY29sbGFwc2libGUtYWx3YXlzLXNob3cnKS5jaGlsZHJlbigpLmxhc3QoKS5hcHBlbmQoJHRvZ2dsZXIpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHQvLyDlsJ3or5Xmn6Xmib7luKbmnIkgY29sbGFwc2libGUtYWx3YXlzLXNob3cg57G755qE5a2Q5YWD57Sg77yM6Iul5a2Y5Zyo5YiZ5bCG5oqY5Y+g5oyJ6ZKu5re75Yqg6Iez5YW25Lit44CCXG5cdFx0Ly8g5ZCm5YiZ77yM5re75Yqg6Iez5pW05Liq5Y+v5oqY5Y+g5YWD57Sg55qE5pyA5YmN6Z2i44CCXG5cdFx0Y29uc3QgJHRvVG9nZ2xlOiBKUXVlcnkgPSAkY29sbGFwc2libGUuY2hpbGRyZW4oJy5jb2xsYXBzaWJsZS1hbHdheXMtc2hvdycpO1xuXHRcdGlmICgkdG9Ub2dnbGUubGVuZ3RoKSB7XG5cdFx0XHQkdG9Ub2dnbGUuZmlyc3QoKS5hcHBlbmQoJHRvZ2dsZXIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkY29sbGFwc2libGUucHJlcGVuZCgkdG9nZ2xlcik7XG5cdFx0XHQkdG9nZ2xlci5hZGRDbGFzcygnY29sbGFwc2libGUtYWx3YXlzLXNob3cnKTtcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7YWRkVG9nZ2xlcn07XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuSlNYJztcbmltcG9ydCB7dG9nZ2xlcn0gZnJvbSAnLi9Db2xsYXBzaWJsZS5tb2R1bGUubGVzcyc7XG5cbmNvbnN0IGdlbmVyYXRlVG9nZ2xlckVsZW1lbnQgPSAoJGNvbGxhcHNpYmxlOiBKUXVlcnksIGhpZGVUZXh0OiBzdHJpbmcsIHNob3dUZXh0OiBzdHJpbmcpOiBKUXVlcnkgPT4ge1xuXHRjb25zdCAkdG9nZ2xlciA9ICQoXG5cdFx0PHNwYW4gY2xhc3NOYW1lPXtbdG9nZ2xlciwgJ25vcHJpbnQnXX0+XG5cdFx0XHR7J1snfVxuXHRcdFx0PGEgcm9sZT1cImJ1dHRvblwiIHRhYkluZGV4PXswfT5cblx0XHRcdFx0eyRjb2xsYXBzaWJsZS5oYXNDbGFzcygnY29sbGFwc2VkJykgPyBzaG93VGV4dCA6IGhpZGVUZXh0fVxuXHRcdFx0PC9hPlxuXHRcdFx0eyddJ31cblx0XHQ8L3NwYW4+XG5cdCkgYXMgSlF1ZXJ5O1xuXG5cdHJldHVybiAkdG9nZ2xlcjtcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVUb2dnbGVyRWxlbWVudH07XG4iLCAiaW1wb3J0IFwiZXNidWlsZC1jc3MtbW9kdWxlcy1wbHVnaW4tbnMtY3NzOnNyYy9Db2xsYXBzaWJsZS9tb2R1bGVzL3V0aWwvQ29sbGFwc2libGUubW9kdWxlLmxlc3NcIjtcbmV4cG9ydCBjb25zdCB0b2dnbGVyID0gXCJDb2xsYXBzaWJsZS1tb2R1bGVfX3RvZ2dsZXJfa3ZNR2pHX180MTAwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJ0b2dnbGVyXCI6IHRvZ2dsZXJcbn07XG4gICAgICAiLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdENvbGxhcHNlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2NvbGxhcHNlJyxcblx0XHRcdGphOiAn5oqY44KK55Wz44G/Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+aKmOWPoCcsXG5cdFx0XHQnemgtaGFudCc6ICfmipjnloonLFxuXHRcdH0pLFxuXHRcdEV4cGFuZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdleHBhbmQnLFxuXHRcdFx0amE6ICflsZXplosnLFxuXHRcdFx0J3poLWhhbnMnOiAn5bGV5byAJyxcblx0XHRcdCd6aC1oYW50JzogJ+WxlemWiycsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7YWRkTGlzdGVuZXJ9IGZyb20gJy4vYWRkTGlzdGVuZXInO1xuaW1wb3J0IHthZGRUb2dnbGVyfSBmcm9tICcuL2FkZFRvZ2dsZXInO1xuaW1wb3J0IHtnZW5lcmF0ZVRvZ2dsZXJFbGVtZW50fSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVUb2dnbGVyRWxlbWVudCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2hpZGVFbGVtZW50fSBmcm9tICcuL3V0aWwvaGlkZUVsZW1lbnQnO1xuXG5jb25zdCBtYWtlQ29sbGFwc2libGUgPSAoJGNvbGxhcHNpYmxlczogSlF1ZXJ5KTogdm9pZCA9PiB7XG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkY29sbGFwc2libGVzKSB7XG5cdFx0Y29uc3QgJGNvbGxhcHNpYmxlOiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXHRcdGlmICgkY29sbGFwc2libGUuZGF0YSgnbWFkZS1jb2xsYXBzaWJsZScpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBoaWRlVGV4dDogc3RyaW5nID0gKCRjb2xsYXBzaWJsZS5kYXRhKCdjb2xsYXBzZXRleHQnKSBhcyBzdHJpbmcpIHx8IGdldE1lc3NhZ2UoJ0NvbGxhcHNlJyk7XG5cdFx0Y29uc3Qgc2hvd1RleHQ6IHN0cmluZyA9ICgkY29sbGFwc2libGUuZGF0YSgnZXhwYW5kdGV4dCcpIGFzIHN0cmluZykgfHwgZ2V0TWVzc2FnZSgnRXhwYW5kJyk7XG5cblx0XHRjb25zdCAkdG9nZ2xlcjogSlF1ZXJ5ID0gZ2VuZXJhdGVUb2dnbGVyRWxlbWVudCgkY29sbGFwc2libGUsIGhpZGVUZXh0LCBzaG93VGV4dCk7XG5cdFx0Y29uc3QgJHRvZ2dsZXJMaW5rOiBKUXVlcnkgPSAkdG9nZ2xlci5maW5kKCdhJyk7XG5cblx0XHRhZGRUb2dnbGVyKCRjb2xsYXBzaWJsZSwgJHRvZ2dsZXIpO1xuXG5cdFx0Ly8g5Yid5aeL5YyW6ZqQ6JeP5omA5pyJ5YWD57Sg77yM6K+l6L+H56iL5rKh5pyJ5Yqo55S744CCXG5cdFx0aWYgKCRjb2xsYXBzaWJsZS5oYXNDbGFzcygnY29sbGFwc2VkJykpIHtcblx0XHRcdGhpZGVFbGVtZW50KCRjb2xsYXBzaWJsZSwgMCk7XG5cdFx0fVxuXG5cdFx0YWRkTGlzdGVuZXIoJGNvbGxhcHNpYmxlLCAkdG9nZ2xlckxpbmssIGhpZGVUZXh0LCBzaG93VGV4dCk7XG5cblx0XHQkY29sbGFwc2libGUuZGF0YSgnbWFkZS1jb2xsYXBzaWJsZScsIHRydWUpO1xuXHR9XG59O1xuXG5leHBvcnQge21ha2VDb2xsYXBzaWJsZX07XG4iLCAiY29uc3QgbmF2RnJhbWUgPSAoJGNvbnRlbnQ6IEpRdWVyeSk6IHZvaWQgPT4ge1xuXHQvLyDliKDpmaQgTmF2RnJhbWUg5YWD57Sg6Ieq5bim55qE5oqY5Y+g44CCXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkY29udGVudC5maW5kPEhUTUxTcGFuRWxlbWVudD4oJy5OYXZUb2dnbGUsIC50b2dnbGVTaG93LCAudG9nZ2xlSGlkZSwgLk5hdkVuZCcpKSB7XG5cdFx0ZWxlbWVudC5yZW1vdmUoKTtcblx0fVxuXG5cdC8vIOS4uiBOYXZGcmFtZSDlhYPntKDmt7vliqAgY29sbGFwc2libGXjgIJcblx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRjb250ZW50LmZpbmQ8SFRNTERpdkVsZW1lbnQ+KCcuTmF2RnJhbWUsIC5Cb3htZXJnZScpKSB7XG5cdFx0aWYgKCFlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnY29sbGFwc2libGUnKSkge1xuXHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzaWJsZScpO1xuXHRcdH1cblxuXHRcdGlmICghZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ0JveG1lcmdlJykpIHtcblx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LnJlcGxhY2UoJ0JveG1lcmdlJywgJ05hdkZyYW1lJyk7XG5cdFx0fVxuXHR9XG5cblx0Ly8g5aaC5p6cIE5hdkNvbnRlbnQg5oiWIE5hdlBpYyDlhYPntKDooqvpmpDol4/vvIzliJnnu5nniLblhYPntKAgTmF2RnJhbWUg5re75YqgIGNvbGxhcHNlZOOAglxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGNvbnRlbnQuZmluZDxIVE1MRGl2RWxlbWVudD4oJy5OYXZDb250ZW50LCAuTmF2UGljJykpIHtcblx0XHRpZiAoZWxlbWVudC5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmIChlbGVtZW50LnBhcmVudEVsZW1lbnQgJiYgZWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnTmF2RnJhbWUnKSkge1xuXHRcdFx0ZWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlZCcpO1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHtuYXZGcmFtZX07XG4iLCAiLyohXG4gKiBAZGVzY3JpcHRpb24g5Li65YWD57Sg5re75Yqg4oCc6ZqQ6JeP4oCd5ZKM4oCc5pi+56S64oCd55qE5oyJ6ZKu44CCXG4gKlxuICog55So5rOV6K+05piO77yaXG4gKlxuICog5bim5pyJIGNvbGxhcHNpYmxlIOexu+eahOWFg+e0oOm7mOiupOWPr+aKmOWPoOOAglxuICogLSDlr7nkuo4gbmF2Ym9477yM5oqY5Y+g5pe25Lya5L+d55WZ5qCH6aKY5qCP77yM5bm25bCG5oqY5Y+g5oyJ6ZKu5re75Yqg5Zyo5qCH6aKY5qCP5Lit44CCXG4gKiAtIOWvueS6jiB0YWJsZe+8jOaKmOWPoOaXtuS8muS/neeVmSBjYXB0aW9uIOaIluesrOS4gOihjO+8jOW5tuWwhuaKmOWPoOaMiemSrua3u+WKoOWcqCBjYXB0aW9uIOacq+WwvlxuICogICDmiJbogIXnrKzkuIDooYzmnIDlkI7kuIDmoLzmnKvlsL7jgIJcbiAqIC0g5a+55LqO5YW25LuW5YWD57Sg77yMXG4gKiAgIC0g6Iul5YW25a2Q5YWD57Sg5pyJ5bim5pyJIGNvbGxhcHNpYmxlLWFsd2F5cy1zaG93IOexu++8jOmCo+S5iOmZpOS6huivpeWtkOWFg+e0oOS5i+WklueahOWQhOS4qlxuICogICDlrZDlhYPntKDpg73kvJrpmo/mipjlj6DpmpDol4/vvIzkuJTmipjlj6DmjInpkq7mt7vliqDlnKjor6XlrZDlhYPntKDmnKvlsL7jgIJcbiAqICAgLSDoi6XmsqHmnInlrZDlhYPntKDluKbmnIkgY29sbGFwc2libGUtYWx3YXlzLXNob3cg57G777yM6YKj5LmI5omA5pyJ5a2Q5YWD57Sg6YO95Lya6KKr5oqY5Y+g77yMXG4gKiAgIOaKmOWPoOaMiemSrua3u+WKoOWcqOaVtOS4qiBjb2xsYXBzaWJsZSDlhYPntKDnmoTlvIDlpLTvvIzkuJTor6XmjInpkq7kuI3kvJrpmo/mipjlj6DpmpDol4/jgIJcbiAqICAgLSDoi6XlrZDlhYPntKDluKbmnIkgY29sbGFwc2libGUtY2FzY2FkZSDnsbvvvIzpgqPkuYjlvZPmipjlj6Dml7bvvIzor6XlhYPntKDoh6rouqvkuI3mmK/pmpDol4/vvIxcbiAqICAg6ICM5piv6ZqQ6JeP5YW25omA5pyJ55qE5a2Q5YWD57Sg77yM6L+Z5Lqb5a2Q5YWD57Sg5ZCM5qC35Y+v5Lul5Y+XIGNvbGxhcHNpYmxlLWFsd2F5cy1zaG93IOWSjFxuICogICBjb2xsYXBzaWJsZS1jYXNjYWRlIOexu+eahOW9seWTjeOAglxuICogICAtIOazqOaEj+W/hemhu+aYr+WtkOWFg+e0oO+8jOebtOaOpeeahOaWh+acrOiKgueCueS4jeS8mumaj+aKmOWPoOmakOiXj++8jOS+i+Wmgu+8mlxuICogICAgIDxkaXYgY2xhc3M9XCJjb2xsYXBzaWJsZVwiPjEyMzxzcGFuPjQ1Njwvc3Bhbj48L2Rpdj5cbiAqICAg5oqY5Y+g5pe277yM4oCcNDU24oCd5Lya6ZqP5oqY5Y+g6ZqQ6JeP77yM5L2G4oCcMTIz4oCd5LiN5Lya44CCXG4gKiAtIOiLpeW4puaciSBjb2xsYXBzaWJsZS11c2luZy1zbGlkZSDnsbvvvIzpgqPkuYjmipjlj6Dml7bvvIzkvb/nlKjmu5HliqjliqjnlLvogIzpnZ7mt6HlhaXmt6Hlh7rnmoRcbiAqICAg5Yqo55S744CC5bu66K6u5b2T5Y+q5pyJ5LiA5Liq5YWD57Sg5Lya6KKr6ZqQ6JeP5pe277yM5omN5Yqg5q2k57G744CCXG4gKiAgIC0g5bim5pyJIGNvbGxhcHNpYmxlLXVzaW5nLXNsaWRlIOexu+eahOWFg+e0oOS8muiHquWKqOW4puaciSBjb2xsYXBzaWJsZSDnsbvjgIJcbiAqIC0g6Iul5bim5pyJIGNvbGxhcHNpYmxlLW5leHQg57G777yM6YKj5LmI5YW25oqY5Y+g55qE5LiN5piv5YW26Ieq6Lqr55qE5a2Q5YWD57Sg77yM6ICM5piv5oqY5Y+g57Sn6ZqPXG4gKiAgIOWFtuWQjueahOS4gOS4quWFg+e0oOOAglxuICogICAtIOi/meenjeaDheWGteS4i++8jOaKmOWPoOaMiemSrum7mOiupOmZhOWcqOivpSBjb2xsYXBzaWJsZS1uZXh0IOWFg+e0oOeahOacq+WwvuOAglxuICogICAtIOW4puaciSBjb2xsYXBzaWJsZS1uZXh0IOexu+eahOWFg+e0oOS8muiHquWKqOW4puaciSBjb2xsYXBzaWJsZSDnsbvjgIJcbiAqIC0gZGF0YS1jb2xsYXBzZS1kdXJhdGlvbiDlsZ7mgKflj6/ku6Xorr7nva7mipjlj6DliqjnlLvnmoTml7bplb/vvIzpu5jorqTkuLogMjAwIOavq+enkuOAglxuICogLSDluKbmnIkgY29sbGFwc2VkIOexu+eahOWFg+e0oOWIneWni+WwseaYr+W3suaKmOWPoOeahOOAglxuICogLSBkYXRhLWV4cGFuZHRleHQg5ZKMIGRhdGEtY29sbGFwc2V0ZXh0IOWPr+eUqOS6juaOp+WItuaKmOWPoOaMiemSrueahOaYvuekuuaWh+Wtl+OAguS4jeaUr+aMgVxuICogICDnuYHnroDovazmjaLvvIzkvYbmmK/lhbbpu5jorqTlgLzmmK/lj6/ku6XmraPluLjmoLnmja7nlYzpnaLor63oqIDnuYHnroDovazmjaLnmoTjgIJcbiAqL1xuaW1wb3J0IHtnZW5lcmF0ZVRhcmdldEVsZW1lbnRzfSBmcm9tICcuL21vZHVsZXMvdXRpbC9nZW5lcmF0ZVRhcmdldEVsZW1lbnRzJztcbmltcG9ydCB7bWFrZUNvbGxhcHNpYmxlfSBmcm9tICcuL21vZHVsZXMvbWFrZUNvbGxhcHNpYmxlJztcbmltcG9ydCB7bmF2RnJhbWV9IGZyb20gJy4vbW9kdWxlcy9uYXZGcmFtZSc7XG5cbm13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5hZGQoKCRjb250ZW50KTogdm9pZCA9PiB7XG5cdC8vIGNvbXBhdGlibGUgd2l0aCBvbGQgbmF2RnJhbWVzIChzZWUge3tIaWRlSH19IGFuZCB7e0hpZGVGfX0pXG5cdG5hdkZyYW1lKCRjb250ZW50KTtcblxuXHRjb25zdCAkY29sbGFwc2libGVzOiBKUXVlcnkgPSBnZW5lcmF0ZVRhcmdldEVsZW1lbnRzKCRjb250ZW50KTtcblx0aWYgKCEkY29sbGFwc2libGVzLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG1ha2VDb2xsYXBzaWJsZSgkY29sbGFwc2libGVzKTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEseUJBQTBCQyxjQUE2QjtBQUFBLE1BQUFDLGFBQUFDLDJCQUN0Q0YsU0FBU0csS0FDOUIsZ0ZBQ0QsQ0FBQSxHQUFBQztBQUFBLE1BQUE7QUFGQSxTQUFBSCxXQUFBSSxFQUFB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QixnQkFBd0J4Qix1QkFBdUJDLFFBQVE7QUFDN0QsTUFBSSxDQUFDdUIsY0FBYzZDLFFBQVE7QUFDMUI7RUFDRDtBQUVBMEIsa0JBQWdCdkUsYUFBYTtBQUM5QixDQUFDOyIsCiAgIm5hbWVzIjogWyJnZW5lcmF0ZVRhcmdldEVsZW1lbnRzIiwgIiRjb250ZW50IiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiZmluZCIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiZWxlbWVudCIsICJ2YWx1ZSIsICIkcGFyZW50IiwgIiQiLCAicGFyZW50IiwgIl9pdGVyYXRvcjMiLCAiY2xhc3NMaXN0IiwgIl9zdGVwMyIsICJjbGFzc05hbWUiLCAic2xpY2UiLCAiYWRkQ2xhc3MiLCAicmVwbGFjZSIsICJlcnIiLCAiZSIsICJmIiwgIiRjb2xsYXBzaWJsZXMiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJoaWRlRWxlbWVudCIsICIkY29sbGFwc2libGUiLCAidGltZSIsICJ1c2VTbGlkZSIsICJoYXNDbGFzcyIsICIkZWxlbWVudCIsICJuZXh0IiwgInNsaWRlVXAiLCAiZmFkZU91dCIsICIkZWxlbWVudHMiLCAiaXMiLCAiY2hpbGRyZW4iLCAiY29udGVudHMiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAic2hvd0VsZW1lbnQiLCAic2xpZGVEb3duIiwgImZhZGVJbiIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJ0b2dnbGVFbGVtZW50IiwgImNvbGxhcHNlZCIsICJkdXJhdGlvbiIsICJOdW1iZXIiLCAicGFyc2VJbnQiLCAiZGF0YSIsICJyZW1vdmVDbGFzcyIsICJhZGRMaXN0ZW5lciIsICIkdG9nZ2xlckxpbmsiLCAiaGlkZVRleHQiLCAic2hvd1RleHQiLCAiZXZlbnRMaXN0ZW5lciIsICJldmVudCIsICJjaGVja0ExMXlDb25maXJtS2V5IiwgInByZXZlbnREZWZhdWx0IiwgInRleHQiLCAib24iLCAiYWRkVG9nZ2xlciIsICIkdG9nZ2xlciIsICIkYXBwZW5kSGVyZSIsICJub3QiLCAiYXBwZW5kIiwgImxlbmd0aCIsICJwYXJlbnRzVW50aWwiLCAiZmlyc3QiLCAiJGNhcHRpb24iLCAiJHRyb3dzIiwgImxhc3QiLCAiJHRvVG9nZ2xlIiwgInByZXBlbmQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAidG9nZ2xlciIsICJnZW5lcmF0ZVRvZ2dsZXJFbGVtZW50IiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJyb2xlIiwgInRhYkluZGV4IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJnZXRJMThuTWVzc2FnZXMiLCAiQ29sbGFwc2UiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiRXhwYW5kIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJtYWtlQ29sbGFwc2libGUiLCAiX2l0ZXJhdG9yNiIsICJfc3RlcDYiLCAibmF2RnJhbWUiLCAiX2l0ZXJhdG9yNyIsICJfc3RlcDciLCAicmVtb3ZlIiwgIl9pdGVyYXRvcjgiLCAiX3N0ZXA4IiwgImNvbnRhaW5zIiwgImFkZCIsICJfaXRlcmF0b3I5IiwgIl9zdGVwOSIsICJzdHlsZSIsICJkaXNwbGF5IiwgInBhcmVudEVsZW1lbnQiLCAibXciLCAiaG9vayJdCn0K
