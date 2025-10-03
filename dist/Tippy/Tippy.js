/**
 * SPDX-License-Identifier: MIT
 * _addText: '{{Gadget Header|license=MIT}}'
 *
 * @base {@link https://github.com/atomiks/tippyjs}
* @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/Tippy}
 * @license MIT {@link https://github.com/atomiks/tippyjs/blob/master/LICENSE}
 */

/**
 * Copyright (c) 2017-present atomiks
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

// dist/Tippy/Tippy.js
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
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);
//! src/Tippy/Tippy.ts
var Tippy_exports = {};
__export(Tippy_exports, {
  tippy: () => tippy_esm_default
});
module.exports = __toCommonJS(Tippy_exports);
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles_default = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect,
  requires: ["computeStyles"]
};
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
var max = Math.max;
var min = Math.min;
var round = Math.round;
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  };
}
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
function within(min2, value, max2) {
  return max(min2, min(value, max2));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect2(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow_default = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect2,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function getVariation(placement) {
  return placement.split("-")[1];
}
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x, y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }, getWindow(popper2)) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles_default = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};
var passive = {
  passive: true
};
function effect3(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners_default = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect: effect3,
  data: {}
};
var hash = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}
var hash2 = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash2[matched];
  });
}
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements2.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements2;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break") break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip_default = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide_default = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
var offset_default = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets_default = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min2 = offset2 + overflow[mainSide];
    var max2 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow_default = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper2(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect5 = _ref.effect;
        if (typeof effect5 === "function") {
          var cleanupFn = effect5({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
var createPopper = /* @__PURE__ */ popperGenerator({
  defaultModifiers
});
var BOX_CLASS = "tippy-box";
var CONTENT_CLASS = "tippy-content";
var BACKDROP_CLASS = "tippy-backdrop";
var ARROW_CLASS = "tippy-arrow";
var SVG_ARROW_CLASS = "tippy-svg-arrow";
var TOUCH_OPTIONS = {
  passive: true,
  capture: true
};
var TIPPY_DEFAULT_APPEND_TO = function TIPPY_DEFAULT_APPEND_TO2() {
  return document.body;
};
function getValueAtIndexOrReturn(value, index, defaultValue) {
  if (Array.isArray(value)) {
    var v = value[index];
    return v == null ? Array.isArray(defaultValue) ? defaultValue[index] : defaultValue : v;
  }
  return value;
}
function isType(value, type) {
  var str = {}.toString.call(value);
  return str.indexOf("[object") === 0 && str.indexOf(type + "]") > -1;
}
function invokeWithArgsOrReturn(value, args) {
  return typeof value === "function" ? value.apply(void 0, args) : value;
}
function debounce2(fn2, ms) {
  if (ms === 0) {
    return fn2;
  }
  var timeout;
  return function(arg) {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      fn2(arg);
    }, ms);
  };
}
function splitBySpaces(value) {
  return value.split(/\s+/).filter(Boolean);
}
function normalizeToArray(value) {
  return [].concat(value);
}
function pushIfUnique(arr, value) {
  if (arr.indexOf(value) === -1) {
    arr.push(value);
  }
}
function unique(arr) {
  return arr.filter(function(item, index) {
    return arr.indexOf(item) === index;
  });
}
function getBasePlacement2(placement) {
  return placement.split("-")[0];
}
function arrayFrom(value) {
  return [].slice.call(value);
}
function removeUndefinedProps(obj) {
  return Object.keys(obj).reduce(function(acc, key) {
    if (obj[key] !== void 0) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}
function div() {
  return document.createElement("div");
}
function isElement2(value) {
  return ["Element", "Fragment"].some(function(type) {
    return isType(value, type);
  });
}
function isNodeList(value) {
  return isType(value, "NodeList");
}
function isMouseEvent(value) {
  return isType(value, "MouseEvent");
}
function isReferenceElement(value) {
  return !!(value && value._tippy && value._tippy.reference === value);
}
function getArrayOfElements(value) {
  if (isElement2(value)) {
    return [value];
  }
  if (isNodeList(value)) {
    return arrayFrom(value);
  }
  if (Array.isArray(value)) {
    return value;
  }
  return arrayFrom(document.querySelectorAll(value));
}
function setTransitionDuration(els, value) {
  els.forEach(function(el) {
    if (el) {
      el.style.transitionDuration = value + "ms";
    }
  });
}
function setVisibilityState(els, state) {
  els.forEach(function(el) {
    if (el) {
      el.setAttribute("data-state", state);
    }
  });
}
function getOwnerDocument(elementOrElements) {
  var _element$ownerDocumen;
  var _normalizeToArray = normalizeToArray(elementOrElements), element = _normalizeToArray[0];
  return element != null && (_element$ownerDocumen = element.ownerDocument) != null && _element$ownerDocumen.body ? element.ownerDocument : document;
}
function isCursorOutsideInteractiveBorder(popperTreeData, event) {
  var clientX = event.clientX, clientY = event.clientY;
  return popperTreeData.every(function(_ref) {
    var popperRect = _ref.popperRect, popperState = _ref.popperState, props = _ref.props;
    var interactiveBorder = props.interactiveBorder;
    var basePlacement = getBasePlacement2(popperState.placement);
    var offsetData = popperState.modifiersData.offset;
    if (!offsetData) {
      return true;
    }
    var topDistance = basePlacement === "bottom" ? offsetData.top.y : 0;
    var bottomDistance = basePlacement === "top" ? offsetData.bottom.y : 0;
    var leftDistance = basePlacement === "right" ? offsetData.left.x : 0;
    var rightDistance = basePlacement === "left" ? offsetData.right.x : 0;
    var exceedsTop = popperRect.top - clientY + topDistance > interactiveBorder;
    var exceedsBottom = clientY - popperRect.bottom - bottomDistance > interactiveBorder;
    var exceedsLeft = popperRect.left - clientX + leftDistance > interactiveBorder;
    var exceedsRight = clientX - popperRect.right - rightDistance > interactiveBorder;
    return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
  });
}
function updateTransitionEndListener(box, action, listener) {
  var method = action + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(event) {
    box[method](event, listener);
  });
}
function actualContains(parent, child) {
  var target = child;
  while (target) {
    var _target$getRootNode;
    if (parent.contains(target)) {
      return true;
    }
    target = target.getRootNode == null ? void 0 : (_target$getRootNode = target.getRootNode()) == null ? void 0 : _target$getRootNode.host;
  }
  return false;
}
var currentInput = {
  isTouch: false
};
var lastMouseMoveTime = 0;
function onDocumentTouchStart() {
  if (currentInput.isTouch) {
    return;
  }
  currentInput.isTouch = true;
  if (window.performance) {
    document.addEventListener("mousemove", onDocumentMouseMove);
  }
}
function onDocumentMouseMove() {
  var now = performance.now();
  if (now - lastMouseMoveTime < 20) {
    currentInput.isTouch = false;
    document.removeEventListener("mousemove", onDocumentMouseMove);
  }
  lastMouseMoveTime = now;
}
function onWindowBlur() {
  var activeElement = document.activeElement;
  if (isReferenceElement(activeElement)) {
    var instance = activeElement._tippy;
    if (activeElement.blur && !instance.state.isVisible) {
      activeElement.blur();
    }
  }
}
function bindGlobalEventListeners() {
  document.addEventListener("touchstart", onDocumentTouchStart, TOUCH_OPTIONS);
  window.addEventListener("blur", onWindowBlur);
}
var isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
var isIE11 = isBrowser ? (
  // @ts-ignore
  !!window.msCrypto
) : false;
if (false) {
  resetVisitedMessages();
}
var pluginProps = {
  animateFill: false,
  followCursor: false,
  inlinePositioning: false,
  sticky: false
};
var renderProps = {
  allowHTML: false,
  animation: "fade",
  arrow: true,
  content: "",
  inertia: false,
  maxWidth: 350,
  role: "tooltip",
  theme: "",
  zIndex: 9999
};
var defaultProps = Object.assign({
  appendTo: TIPPY_DEFAULT_APPEND_TO,
  aria: {
    content: "auto",
    expanded: "auto"
  },
  delay: 0,
  duration: [300, 250],
  getReferenceClientRect: null,
  hideOnClick: true,
  ignoreAttributes: false,
  interactive: false,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  moveTransition: "",
  offset: [0, 10],
  onAfterUpdate: function onAfterUpdate() {
  },
  onBeforeUpdate: function onBeforeUpdate() {
  },
  onCreate: function onCreate() {
  },
  onDestroy: function onDestroy() {
  },
  onHidden: function onHidden() {
  },
  onHide: function onHide() {
  },
  onMount: function onMount() {
  },
  onShow: function onShow() {
  },
  onShown: function onShown() {
  },
  onTrigger: function onTrigger() {
  },
  onUntrigger: function onUntrigger() {
  },
  onClickOutside: function onClickOutside() {
  },
  placement: "top",
  plugins: [],
  popperOptions: {},
  render: null,
  showOnCreate: false,
  touch: true,
  trigger: "mouseenter focus",
  triggerTarget: null
}, pluginProps, renderProps);
var defaultKeys = Object.keys(defaultProps);
var setDefaultProps = function setDefaultProps2(partialProps) {
  if (false) {
    validateProps(partialProps, []);
  }
  var keys = Object.keys(partialProps);
  keys.forEach(function(key) {
    defaultProps[key] = partialProps[key];
  });
};
function getExtendedPassedProps(passedProps) {
  var plugins = passedProps.plugins || [];
  var pluginProps2 = plugins.reduce(function(acc, plugin) {
    var name = plugin.name, defaultValue = plugin.defaultValue;
    if (name) {
      var _name;
      acc[name] = passedProps[name] !== void 0 ? passedProps[name] : (_name = defaultProps[name]) != null ? _name : defaultValue;
    }
    return acc;
  }, {});
  return Object.assign({}, passedProps, pluginProps2);
}
function getDataAttributeProps(reference2, plugins) {
  var propKeys = plugins ? Object.keys(getExtendedPassedProps(Object.assign({}, defaultProps, {
    plugins
  }))) : defaultKeys;
  var props = propKeys.reduce(function(acc, key) {
    var valueAsString = (reference2.getAttribute("data-tippy-" + key) || "").trim();
    if (!valueAsString) {
      return acc;
    }
    if (key === "content") {
      acc[key] = valueAsString;
    } else {
      try {
        acc[key] = JSON.parse(valueAsString);
      } catch (e) {
        acc[key] = valueAsString;
      }
    }
    return acc;
  }, {});
  return props;
}
function evaluateProps(reference2, props) {
  var out = Object.assign({}, props, {
    content: invokeWithArgsOrReturn(props.content, [reference2])
  }, props.ignoreAttributes ? {} : getDataAttributeProps(reference2, props.plugins));
  out.aria = Object.assign({}, defaultProps.aria, out.aria);
  out.aria = {
    expanded: out.aria.expanded === "auto" ? props.interactive : out.aria.expanded,
    content: out.aria.content === "auto" ? props.interactive ? null : "describedby" : out.aria.content
  };
  return out;
}
var innerHTML = function innerHTML2() {
  return "innerHTML";
};
function dangerouslySetInnerHTML(element, html) {
  element[innerHTML()] = html;
}
function createArrowElement(value) {
  var arrow2 = div();
  if (value === true) {
    arrow2.className = ARROW_CLASS;
  } else {
    arrow2.className = SVG_ARROW_CLASS;
    if (isElement2(value)) {
      arrow2.appendChild(value);
    } else {
      dangerouslySetInnerHTML(arrow2, value);
    }
  }
  return arrow2;
}
function setContent(content, props) {
  if (isElement2(props.content)) {
    dangerouslySetInnerHTML(content, "");
    content.appendChild(props.content);
  } else if (typeof props.content !== "function") {
    if (props.allowHTML) {
      dangerouslySetInnerHTML(content, props.content);
    } else {
      content.textContent = props.content;
    }
  }
}
function getChildren(popper2) {
  var box = popper2.firstElementChild;
  var boxChildren = arrayFrom(box.children);
  return {
    box,
    content: boxChildren.find(function(node) {
      return node.classList.contains(CONTENT_CLASS);
    }),
    arrow: boxChildren.find(function(node) {
      return node.classList.contains(ARROW_CLASS) || node.classList.contains(SVG_ARROW_CLASS);
    }),
    backdrop: boxChildren.find(function(node) {
      return node.classList.contains(BACKDROP_CLASS);
    })
  };
}
function render(instance) {
  var popper2 = div();
  var box = div();
  box.className = BOX_CLASS;
  box.setAttribute("data-state", "hidden");
  box.setAttribute("tabindex", "-1");
  var content = div();
  content.className = CONTENT_CLASS;
  content.setAttribute("data-state", "hidden");
  setContent(content, instance.props);
  popper2.appendChild(box);
  box.appendChild(content);
  onUpdate(instance.props, instance.props);
  function onUpdate(prevProps, nextProps) {
    var _getChildren = getChildren(popper2), box2 = _getChildren.box, content2 = _getChildren.content, arrow2 = _getChildren.arrow;
    if (nextProps.theme) {
      box2.setAttribute("data-theme", nextProps.theme);
    } else {
      box2.removeAttribute("data-theme");
    }
    if (typeof nextProps.animation === "string") {
      box2.setAttribute("data-animation", nextProps.animation);
    } else {
      box2.removeAttribute("data-animation");
    }
    if (nextProps.inertia) {
      box2.setAttribute("data-inertia", "");
    } else {
      box2.removeAttribute("data-inertia");
    }
    box2.style.maxWidth = typeof nextProps.maxWidth === "number" ? nextProps.maxWidth + "px" : nextProps.maxWidth;
    if (nextProps.role) {
      box2.setAttribute("role", nextProps.role);
    } else {
      box2.removeAttribute("role");
    }
    if (prevProps.content !== nextProps.content || prevProps.allowHTML !== nextProps.allowHTML) {
      setContent(content2, instance.props);
    }
    if (nextProps.arrow) {
      if (!arrow2) {
        box2.appendChild(createArrowElement(nextProps.arrow));
      } else if (prevProps.arrow !== nextProps.arrow) {
        box2.removeChild(arrow2);
        box2.appendChild(createArrowElement(nextProps.arrow));
      }
    } else if (arrow2) {
      box2.removeChild(arrow2);
    }
  }
  return {
    popper: popper2,
    onUpdate
  };
}
render.$$tippy = true;
var idCounter = 1;
var mouseMoveListeners = [];
var mountedInstances = [];
function createTippy(reference2, passedProps) {
  var props = evaluateProps(reference2, Object.assign({}, defaultProps, getExtendedPassedProps(removeUndefinedProps(passedProps))));
  var showTimeout;
  var hideTimeout;
  var scheduleHideAnimationFrame;
  var isVisibleFromClick = false;
  var didHideDueToDocumentMouseDown = false;
  var didTouchMove = false;
  var ignoreOnFirstUpdate = false;
  var lastTriggerEvent;
  var currentTransitionEndListener;
  var onFirstUpdate;
  var listeners = [];
  var debouncedOnMouseMove = debounce2(onMouseMove, props.interactiveDebounce);
  var currentTarget;
  var id = idCounter++;
  var popperInstance = null;
  var plugins = unique(props.plugins);
  var state = {
    // Is the instance currently enabled?
    isEnabled: true,
    // Is the tippy currently showing and not transitioning out?
    isVisible: false,
    // Has the instance been destroyed?
    isDestroyed: false,
    // Is the tippy currently mounted to the DOM?
    isMounted: false,
    // Has the tippy finished transitioning in?
    isShown: false
  };
  var instance = {
    // properties
    id,
    reference: reference2,
    popper: div(),
    popperInstance,
    props,
    state,
    plugins,
    // methods
    clearDelayTimeouts,
    setProps,
    setContent: setContent2,
    show,
    hide: hide2,
    hideWithInteractivity,
    enable,
    disable,
    unmount,
    destroy
  };
  if (!props.render) {
    if (false) {
      errorWhen(true, "render() function has not been supplied.");
    }
    return instance;
  }
  var _props$render = props.render(instance), popper2 = _props$render.popper, onUpdate = _props$render.onUpdate;
  popper2.setAttribute("data-tippy-root", "");
  popper2.id = "tippy-" + instance.id;
  instance.popper = popper2;
  reference2._tippy = instance;
  popper2._tippy = instance;
  var pluginsHooks = plugins.map(function(plugin) {
    return plugin.fn(instance);
  });
  var hasAriaExpanded = reference2.hasAttribute("aria-expanded");
  addListeners();
  handleAriaExpandedAttribute();
  handleStyles();
  invokeHook("onCreate", [instance]);
  if (props.showOnCreate) {
    scheduleShow();
  }
  popper2.addEventListener("mouseenter", function() {
    if (instance.props.interactive && instance.state.isVisible) {
      instance.clearDelayTimeouts();
    }
  });
  popper2.addEventListener("mouseleave", function() {
    if (instance.props.interactive && instance.props.trigger.indexOf("mouseenter") >= 0) {
      getDocument().addEventListener("mousemove", debouncedOnMouseMove);
    }
  });
  return instance;
  function getNormalizedTouchSettings() {
    var touch = instance.props.touch;
    return Array.isArray(touch) ? touch : [touch, 0];
  }
  function getIsCustomTouchBehavior() {
    return getNormalizedTouchSettings()[0] === "hold";
  }
  function getIsDefaultRenderFn() {
    var _instance$props$rende;
    return !!((_instance$props$rende = instance.props.render) != null && _instance$props$rende.$$tippy);
  }
  function getCurrentTarget() {
    return currentTarget || reference2;
  }
  function getDocument() {
    var parent = getCurrentTarget().parentNode;
    return parent ? getOwnerDocument(parent) : document;
  }
  function getDefaultTemplateChildren() {
    return getChildren(popper2);
  }
  function getDelay(isShow) {
    if (instance.state.isMounted && !instance.state.isVisible || currentInput.isTouch || lastTriggerEvent && lastTriggerEvent.type === "focus") {
      return 0;
    }
    return getValueAtIndexOrReturn(instance.props.delay, isShow ? 0 : 1, defaultProps.delay);
  }
  function handleStyles(fromHide) {
    if (fromHide === void 0) {
      fromHide = false;
    }
    popper2.style.pointerEvents = instance.props.interactive && !fromHide ? "" : "none";
    popper2.style.zIndex = "" + instance.props.zIndex;
  }
  function invokeHook(hook, args, shouldInvokePropsHook) {
    if (shouldInvokePropsHook === void 0) {
      shouldInvokePropsHook = true;
    }
    pluginsHooks.forEach(function(pluginHooks) {
      if (pluginHooks[hook]) {
        pluginHooks[hook].apply(pluginHooks, args);
      }
    });
    if (shouldInvokePropsHook) {
      var _instance$props;
      (_instance$props = instance.props)[hook].apply(_instance$props, args);
    }
  }
  function handleAriaContentAttribute() {
    var aria = instance.props.aria;
    if (!aria.content) {
      return;
    }
    var attr = "aria-" + aria.content;
    var id2 = popper2.id;
    var nodes = normalizeToArray(instance.props.triggerTarget || reference2);
    nodes.forEach(function(node) {
      var currentValue = node.getAttribute(attr);
      if (instance.state.isVisible) {
        node.setAttribute(attr, currentValue ? currentValue + " " + id2 : id2);
      } else {
        var nextValue = currentValue && currentValue.replace(id2, "").trim();
        if (nextValue) {
          node.setAttribute(attr, nextValue);
        } else {
          node.removeAttribute(attr);
        }
      }
    });
  }
  function handleAriaExpandedAttribute() {
    if (hasAriaExpanded || !instance.props.aria.expanded) {
      return;
    }
    var nodes = normalizeToArray(instance.props.triggerTarget || reference2);
    nodes.forEach(function(node) {
      if (instance.props.interactive) {
        node.setAttribute("aria-expanded", instance.state.isVisible && node === getCurrentTarget() ? "true" : "false");
      } else {
        node.removeAttribute("aria-expanded");
      }
    });
  }
  function cleanupInteractiveMouseListeners() {
    getDocument().removeEventListener("mousemove", debouncedOnMouseMove);
    mouseMoveListeners = mouseMoveListeners.filter(function(listener) {
      return listener !== debouncedOnMouseMove;
    });
  }
  function onDocumentPress(event) {
    if (currentInput.isTouch) {
      if (didTouchMove || event.type === "mousedown") {
        return;
      }
    }
    var actualTarget = event.composedPath && event.composedPath()[0] || event.target;
    if (instance.props.interactive && actualContains(popper2, actualTarget)) {
      return;
    }
    if (normalizeToArray(instance.props.triggerTarget || reference2).some(function(el) {
      return actualContains(el, actualTarget);
    })) {
      if (currentInput.isTouch) {
        return;
      }
      if (instance.state.isVisible && instance.props.trigger.indexOf("click") >= 0) {
        return;
      }
    } else {
      invokeHook("onClickOutside", [instance, event]);
    }
    if (instance.props.hideOnClick === true) {
      instance.clearDelayTimeouts();
      instance.hide();
      didHideDueToDocumentMouseDown = true;
      setTimeout(function() {
        didHideDueToDocumentMouseDown = false;
      });
      if (!instance.state.isMounted) {
        removeDocumentPress();
      }
    }
  }
  function onTouchMove() {
    didTouchMove = true;
  }
  function onTouchStart() {
    didTouchMove = false;
  }
  function addDocumentPress() {
    var doc = getDocument();
    doc.addEventListener("mousedown", onDocumentPress, true);
    doc.addEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
    doc.addEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
    doc.addEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
  }
  function removeDocumentPress() {
    var doc = getDocument();
    doc.removeEventListener("mousedown", onDocumentPress, true);
    doc.removeEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
    doc.removeEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
    doc.removeEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
  }
  function onTransitionedOut(duration, callback) {
    onTransitionEnd(duration, function() {
      if (!instance.state.isVisible && popper2.parentNode && popper2.parentNode.contains(popper2)) {
        callback();
      }
    });
  }
  function onTransitionedIn(duration, callback) {
    onTransitionEnd(duration, callback);
  }
  function onTransitionEnd(duration, callback) {
    var box = getDefaultTemplateChildren().box;
    function listener(event) {
      if (event.target === box) {
        updateTransitionEndListener(box, "remove", listener);
        callback();
      }
    }
    if (duration === 0) {
      return callback();
    }
    updateTransitionEndListener(box, "remove", currentTransitionEndListener);
    updateTransitionEndListener(box, "add", listener);
    currentTransitionEndListener = listener;
  }
  function on(eventType, handler, options) {
    if (options === void 0) {
      options = false;
    }
    var nodes = normalizeToArray(instance.props.triggerTarget || reference2);
    nodes.forEach(function(node) {
      node.addEventListener(eventType, handler, options);
      listeners.push({
        node,
        eventType,
        handler,
        options
      });
    });
  }
  function addListeners() {
    if (getIsCustomTouchBehavior()) {
      on("touchstart", onTrigger2, {
        passive: true
      });
      on("touchend", onMouseLeave, {
        passive: true
      });
    }
    splitBySpaces(instance.props.trigger).forEach(function(eventType) {
      if (eventType === "manual") {
        return;
      }
      on(eventType, onTrigger2);
      switch (eventType) {
        case "mouseenter":
          on("mouseleave", onMouseLeave);
          break;
        case "focus":
          on(isIE11 ? "focusout" : "blur", onBlurOrFocusOut);
          break;
        case "focusin":
          on("focusout", onBlurOrFocusOut);
          break;
      }
    });
  }
  function removeListeners() {
    listeners.forEach(function(_ref) {
      var node = _ref.node, eventType = _ref.eventType, handler = _ref.handler, options = _ref.options;
      node.removeEventListener(eventType, handler, options);
    });
    listeners = [];
  }
  function onTrigger2(event) {
    var _lastTriggerEvent;
    var shouldScheduleClickHide = false;
    if (!instance.state.isEnabled || isEventListenerStopped(event) || didHideDueToDocumentMouseDown) {
      return;
    }
    var wasFocused = ((_lastTriggerEvent = lastTriggerEvent) == null ? void 0 : _lastTriggerEvent.type) === "focus";
    lastTriggerEvent = event;
    currentTarget = event.currentTarget;
    handleAriaExpandedAttribute();
    if (!instance.state.isVisible && isMouseEvent(event)) {
      mouseMoveListeners.forEach(function(listener) {
        return listener(event);
      });
    }
    if (event.type === "click" && (instance.props.trigger.indexOf("mouseenter") < 0 || isVisibleFromClick) && instance.props.hideOnClick !== false && instance.state.isVisible) {
      shouldScheduleClickHide = true;
    } else {
      scheduleShow(event);
    }
    if (event.type === "click") {
      isVisibleFromClick = !shouldScheduleClickHide;
    }
    if (shouldScheduleClickHide && !wasFocused) {
      scheduleHide(event);
    }
  }
  function onMouseMove(event) {
    var target = event.target;
    var isCursorOverReferenceOrPopper = getCurrentTarget().contains(target) || popper2.contains(target);
    if (event.type === "mousemove" && isCursorOverReferenceOrPopper) {
      return;
    }
    var popperTreeData = getNestedPopperTree().concat(popper2).map(function(popper3) {
      var _instance$popperInsta;
      var instance2 = popper3._tippy;
      var state2 = (_instance$popperInsta = instance2.popperInstance) == null ? void 0 : _instance$popperInsta.state;
      if (state2) {
        return {
          popperRect: popper3.getBoundingClientRect(),
          popperState: state2,
          props
        };
      }
      return null;
    }).filter(Boolean);
    if (isCursorOutsideInteractiveBorder(popperTreeData, event)) {
      cleanupInteractiveMouseListeners();
      scheduleHide(event);
    }
  }
  function onMouseLeave(event) {
    var shouldBail = isEventListenerStopped(event) || instance.props.trigger.indexOf("click") >= 0 && isVisibleFromClick;
    if (shouldBail) {
      return;
    }
    if (instance.props.interactive) {
      instance.hideWithInteractivity(event);
      return;
    }
    scheduleHide(event);
  }
  function onBlurOrFocusOut(event) {
    if (instance.props.trigger.indexOf("focusin") < 0 && event.target !== getCurrentTarget()) {
      return;
    }
    if (instance.props.interactive && event.relatedTarget && popper2.contains(event.relatedTarget)) {
      return;
    }
    scheduleHide(event);
  }
  function isEventListenerStopped(event) {
    return currentInput.isTouch ? getIsCustomTouchBehavior() !== event.type.indexOf("touch") >= 0 : false;
  }
  function createPopperInstance() {
    destroyPopperInstance();
    var _instance$props2 = instance.props, popperOptions = _instance$props2.popperOptions, placement = _instance$props2.placement, offset2 = _instance$props2.offset, getReferenceClientRect = _instance$props2.getReferenceClientRect, moveTransition = _instance$props2.moveTransition;
    var arrow2 = getIsDefaultRenderFn() ? getChildren(popper2).arrow : null;
    var computedReference = getReferenceClientRect ? {
      getBoundingClientRect: getReferenceClientRect,
      contextElement: getReferenceClientRect.contextElement || getCurrentTarget()
    } : reference2;
    var tippyModifier = {
      name: "$$tippy",
      enabled: true,
      phase: "beforeWrite",
      requires: ["computeStyles"],
      fn: function fn2(_ref2) {
        var state2 = _ref2.state;
        if (getIsDefaultRenderFn()) {
          var _getDefaultTemplateCh = getDefaultTemplateChildren(), box = _getDefaultTemplateCh.box;
          ["placement", "reference-hidden", "escaped"].forEach(function(attr) {
            if (attr === "placement") {
              box.setAttribute("data-placement", state2.placement);
            } else {
              if (state2.attributes.popper["data-popper-" + attr]) {
                box.setAttribute("data-" + attr, "");
              } else {
                box.removeAttribute("data-" + attr);
              }
            }
          });
          state2.attributes.popper = {};
        }
      }
    };
    var modifiers = [{
      name: "offset",
      options: {
        offset: offset2
      }
    }, {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    }, {
      name: "flip",
      options: {
        padding: 5
      }
    }, {
      name: "computeStyles",
      options: {
        adaptive: !moveTransition
      }
    }, tippyModifier];
    if (getIsDefaultRenderFn() && arrow2) {
      modifiers.push({
        name: "arrow",
        options: {
          element: arrow2,
          padding: 3
        }
      });
    }
    modifiers.push.apply(modifiers, (popperOptions == null ? void 0 : popperOptions.modifiers) || []);
    instance.popperInstance = createPopper(computedReference, popper2, Object.assign({}, popperOptions, {
      placement,
      onFirstUpdate,
      modifiers
    }));
  }
  function destroyPopperInstance() {
    if (instance.popperInstance) {
      instance.popperInstance.destroy();
      instance.popperInstance = null;
    }
  }
  function mount() {
    var appendTo = instance.props.appendTo;
    var parentNode;
    var node = getCurrentTarget();
    if (instance.props.interactive && appendTo === TIPPY_DEFAULT_APPEND_TO || appendTo === "parent") {
      parentNode = node.parentNode;
    } else {
      parentNode = invokeWithArgsOrReturn(appendTo, [node]);
    }
    if (!parentNode.contains(popper2)) {
      parentNode.appendChild(popper2);
    }
    instance.state.isMounted = true;
    createPopperInstance();
    if (false) {
      warnWhen(instance.props.interactive && appendTo === defaultProps.appendTo && node.nextElementSibling !== popper2, ["Interactive tippy element may not be accessible via keyboard", "navigation because it is not directly after the reference element", "in the DOM source order.", "\n\n", "Using a wrapper <div> or <span> tag around the reference element", "solves this by creating a new parentNode context.", "\n\n", "Specifying `appendTo: document.body` silences this warning, but it", "assumes you are using a focus management solution to handle", "keyboard navigation.", "\n\n", "See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity"].join(" "));
    }
  }
  function getNestedPopperTree() {
    return arrayFrom(popper2.querySelectorAll("[data-tippy-root]"));
  }
  function scheduleShow(event) {
    instance.clearDelayTimeouts();
    if (event) {
      invokeHook("onTrigger", [instance, event]);
    }
    addDocumentPress();
    var delay = getDelay(true);
    var _getNormalizedTouchSe = getNormalizedTouchSettings(), touchValue = _getNormalizedTouchSe[0], touchDelay = _getNormalizedTouchSe[1];
    if (currentInput.isTouch && touchValue === "hold" && touchDelay) {
      delay = touchDelay;
    }
    if (delay) {
      showTimeout = setTimeout(function() {
        instance.show();
      }, delay);
    } else {
      instance.show();
    }
  }
  function scheduleHide(event) {
    instance.clearDelayTimeouts();
    invokeHook("onUntrigger", [instance, event]);
    if (!instance.state.isVisible) {
      removeDocumentPress();
      return;
    }
    if (instance.props.trigger.indexOf("mouseenter") >= 0 && instance.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(event.type) >= 0 && isVisibleFromClick) {
      return;
    }
    var delay = getDelay(false);
    if (delay) {
      hideTimeout = setTimeout(function() {
        if (instance.state.isVisible) {
          instance.hide();
        }
      }, delay);
    } else {
      scheduleHideAnimationFrame = requestAnimationFrame(function() {
        instance.hide();
      });
    }
  }
  function enable() {
    instance.state.isEnabled = true;
  }
  function disable() {
    instance.hide();
    instance.state.isEnabled = false;
  }
  function clearDelayTimeouts() {
    clearTimeout(showTimeout);
    clearTimeout(hideTimeout);
    cancelAnimationFrame(scheduleHideAnimationFrame);
  }
  function setProps(partialProps) {
    if (false) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("setProps"));
    }
    if (instance.state.isDestroyed) {
      return;
    }
    invokeHook("onBeforeUpdate", [instance, partialProps]);
    removeListeners();
    var prevProps = instance.props;
    var nextProps = evaluateProps(reference2, Object.assign({}, prevProps, removeUndefinedProps(partialProps), {
      ignoreAttributes: true
    }));
    instance.props = nextProps;
    addListeners();
    if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
      cleanupInteractiveMouseListeners();
      debouncedOnMouseMove = debounce2(onMouseMove, nextProps.interactiveDebounce);
    }
    if (prevProps.triggerTarget && !nextProps.triggerTarget) {
      normalizeToArray(prevProps.triggerTarget).forEach(function(node) {
        node.removeAttribute("aria-expanded");
      });
    } else if (nextProps.triggerTarget) {
      reference2.removeAttribute("aria-expanded");
    }
    handleAriaExpandedAttribute();
    handleStyles();
    if (onUpdate) {
      onUpdate(prevProps, nextProps);
    }
    if (instance.popperInstance) {
      createPopperInstance();
      getNestedPopperTree().forEach(function(nestedPopper) {
        requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate);
      });
    }
    invokeHook("onAfterUpdate", [instance, partialProps]);
  }
  function setContent2(content) {
    instance.setProps({
      content
    });
  }
  function show() {
    if (false) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("show"));
    }
    var isAlreadyVisible = instance.state.isVisible;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled;
    var isTouchAndTouchDisabled = currentInput.isTouch && !instance.props.touch;
    var duration = getValueAtIndexOrReturn(instance.props.duration, 0, defaultProps.duration);
    if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) {
      return;
    }
    if (getCurrentTarget().hasAttribute("disabled")) {
      return;
    }
    invokeHook("onShow", [instance], false);
    if (instance.props.onShow(instance) === false) {
      return;
    }
    instance.state.isVisible = true;
    if (getIsDefaultRenderFn()) {
      popper2.style.visibility = "visible";
    }
    handleStyles();
    addDocumentPress();
    if (!instance.state.isMounted) {
      popper2.style.transition = "none";
    }
    if (getIsDefaultRenderFn()) {
      var _getDefaultTemplateCh2 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh2.box, content = _getDefaultTemplateCh2.content;
      setTransitionDuration([box, content], 0);
    }
    onFirstUpdate = function onFirstUpdate2() {
      var _instance$popperInsta2;
      if (!instance.state.isVisible || ignoreOnFirstUpdate) {
        return;
      }
      ignoreOnFirstUpdate = true;
      void popper2.offsetHeight;
      popper2.style.transition = instance.props.moveTransition;
      if (getIsDefaultRenderFn() && instance.props.animation) {
        var _getDefaultTemplateCh3 = getDefaultTemplateChildren(), _box = _getDefaultTemplateCh3.box, _content = _getDefaultTemplateCh3.content;
        setTransitionDuration([_box, _content], duration);
        setVisibilityState([_box, _content], "visible");
      }
      handleAriaContentAttribute();
      handleAriaExpandedAttribute();
      pushIfUnique(mountedInstances, instance);
      (_instance$popperInsta2 = instance.popperInstance) == null ? void 0 : _instance$popperInsta2.forceUpdate();
      invokeHook("onMount", [instance]);
      if (instance.props.animation && getIsDefaultRenderFn()) {
        onTransitionedIn(duration, function() {
          instance.state.isShown = true;
          invokeHook("onShown", [instance]);
        });
      }
    };
    mount();
  }
  function hide2() {
    if (false) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("hide"));
    }
    var isAlreadyHidden = !instance.state.isVisible;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled;
    var duration = getValueAtIndexOrReturn(instance.props.duration, 1, defaultProps.duration);
    if (isAlreadyHidden || isDestroyed || isDisabled) {
      return;
    }
    invokeHook("onHide", [instance], false);
    if (instance.props.onHide(instance) === false) {
      return;
    }
    instance.state.isVisible = false;
    instance.state.isShown = false;
    ignoreOnFirstUpdate = false;
    isVisibleFromClick = false;
    if (getIsDefaultRenderFn()) {
      popper2.style.visibility = "hidden";
    }
    cleanupInteractiveMouseListeners();
    removeDocumentPress();
    handleStyles(true);
    if (getIsDefaultRenderFn()) {
      var _getDefaultTemplateCh4 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh4.box, content = _getDefaultTemplateCh4.content;
      if (instance.props.animation) {
        setTransitionDuration([box, content], duration);
        setVisibilityState([box, content], "hidden");
      }
    }
    handleAriaContentAttribute();
    handleAriaExpandedAttribute();
    if (instance.props.animation) {
      if (getIsDefaultRenderFn()) {
        onTransitionedOut(duration, instance.unmount);
      }
    } else {
      instance.unmount();
    }
  }
  function hideWithInteractivity(event) {
    if (false) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("hideWithInteractivity"));
    }
    getDocument().addEventListener("mousemove", debouncedOnMouseMove);
    pushIfUnique(mouseMoveListeners, debouncedOnMouseMove);
    debouncedOnMouseMove(event);
  }
  function unmount() {
    if (false) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("unmount"));
    }
    if (instance.state.isVisible) {
      instance.hide();
    }
    if (!instance.state.isMounted) {
      return;
    }
    destroyPopperInstance();
    getNestedPopperTree().forEach(function(nestedPopper) {
      nestedPopper._tippy.unmount();
    });
    if (popper2.parentNode) {
      popper2.parentNode.removeChild(popper2);
    }
    mountedInstances = mountedInstances.filter(function(i) {
      return i !== instance;
    });
    instance.state.isMounted = false;
    invokeHook("onHidden", [instance]);
  }
  function destroy() {
    if (false) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("destroy"));
    }
    if (instance.state.isDestroyed) {
      return;
    }
    instance.clearDelayTimeouts();
    instance.unmount();
    removeListeners();
    delete reference2._tippy;
    instance.state.isDestroyed = true;
    invokeHook("onDestroy", [instance]);
  }
}
function tippy(targets, optionalProps) {
  if (optionalProps === void 0) {
    optionalProps = {};
  }
  var plugins = defaultProps.plugins.concat(optionalProps.plugins || []);
  if (false) {
    validateTargets(targets);
    validateProps(optionalProps, plugins);
  }
  bindGlobalEventListeners();
  var passedProps = Object.assign({}, optionalProps, {
    plugins
  });
  var elements = getArrayOfElements(targets);
  if (false) {
    var isSingleContentElement = isElement2(passedProps.content);
    var isMoreThanOneReferenceElement = elements.length > 1;
    warnWhen(isSingleContentElement && isMoreThanOneReferenceElement, ["tippy() was passed an Element as the `content` prop, but more than", "one tippy instance was created by this invocation. This means the", "content element will only be appended to the last tippy instance.", "\n\n", "Instead, pass the .innerHTML of the element, or use a function that", "returns a cloned version of the element instead.", "\n\n", "1) content: element.innerHTML\n", "2) content: () => element.cloneNode(true)"].join(" "));
  }
  var instances = elements.reduce(function(acc, reference2) {
    var instance = reference2 && createTippy(reference2, passedProps);
    if (instance) {
      acc.push(instance);
    }
    return acc;
  }, []);
  return isElement2(targets) ? instances[0] : instances;
}
tippy.defaultProps = defaultProps;
tippy.setDefaultProps = setDefaultProps;
tippy.currentInput = currentInput;
var applyStylesModifier = Object.assign({}, applyStyles_default, {
  effect: function effect4(_ref) {
    var state = _ref.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }
  }
});
tippy.setDefaultProps({
  render
});
var tippy_esm_default = tippy;

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1RpcHB5L1RpcHB5LnRzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9lbnVtcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE5vZGVOYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0V2luZG93LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2FwcGx5U3R5bGVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9tYXRoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy91c2VyQWdlbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9pc0xheW91dFZpZXdwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2NvbnRhaW5zLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Q29tcHV0ZWRTdHlsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2lzVGFibGVFbGVtZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0RG9jdW1lbnRFbGVtZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0UGFyZW50Tm9kZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy93aXRoaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldEZyZXNoU2lkZU9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvbWVyZ2VQYWRkaW5nT2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9leHBhbmRUb0hhc2hNYXAuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9hcnJvdy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0VmFyaWF0aW9uLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvY29tcHV0ZVN0eWxlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2V2ZW50TGlzdGVuZXJzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRPcHBvc2l0ZVBsYWNlbWVudC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRXaW5kb3dTY3JvbGwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRXaW5kb3dTY3JvbGxCYXJYLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Vmlld3BvcnRSZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0RG9jdW1lbnRSZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvaXNTY3JvbGxQYXJlbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRTY3JvbGxQYXJlbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9saXN0U2Nyb2xsUGFyZW50cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvcmVjdFRvQ2xpZW50UmVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldENsaXBwaW5nUmVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvY29tcHV0ZU9mZnNldHMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2RldGVjdE92ZXJmbG93LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9jb21wdXRlQXV0b1BsYWNlbWVudC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2ZsaXAuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9oaWRlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvb2Zmc2V0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvcG9wcGVyT2Zmc2V0cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0QWx0QXhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL3ByZXZlbnRPdmVyZmxvdy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldEhUTUxFbGVtZW50U2Nyb2xsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Tm9kZVNjcm9sbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldENvbXBvc2l0ZVJlY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL29yZGVyTW9kaWZpZXJzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9kZWJvdW5jZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvbWVyZ2VCeU5hbWUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2NyZWF0ZVBvcHBlci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvcG9wcGVyLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS90aXBweS5qc0A2LjMuNy9ub2RlX21vZHVsZXMvdGlwcHkuanMvc3JjL2NvbnN0YW50cy50cyIsICJub2RlX21vZHVsZXMvLnBucG0vdGlwcHkuanNANi4zLjcvbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy91dGlscy50cyIsICJub2RlX21vZHVsZXMvLnBucG0vdGlwcHkuanNANi4zLjcvbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy9kb20tdXRpbHMudHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL3RpcHB5LmpzQDYuMy43L25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvYmluZEdsb2JhbEV2ZW50TGlzdGVuZXJzLnRzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS90aXBweS5qc0A2LjMuNy9ub2RlX21vZHVsZXMvdGlwcHkuanMvc3JjL2Jyb3dzZXIudHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL3RpcHB5LmpzQDYuMy43L25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvdmFsaWRhdGlvbi50cyIsICJub2RlX21vZHVsZXMvLnBucG0vdGlwcHkuanNANi4zLjcvbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy9wcm9wcy50cyIsICJub2RlX21vZHVsZXMvLnBucG0vdGlwcHkuanNANi4zLjcvbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy90ZW1wbGF0ZS50cyIsICJub2RlX21vZHVsZXMvLnBucG0vdGlwcHkuanNANi4zLjcvbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy9jcmVhdGVUaXBweS50cyIsICJub2RlX21vZHVsZXMvLnBucG0vdGlwcHkuanNANi4zLjcvbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy9pbmRleC50cyIsICJub2RlX21vZHVsZXMvLnBucG0vdGlwcHkuanNANi4zLjcvbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy9hZGRvbnMvY3JlYXRlU2luZ2xldG9uLnRzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS90aXBweS5qc0A2LjMuNy9ub2RlX21vZHVsZXMvdGlwcHkuanMvc3JjL2FkZG9ucy9kZWxlZ2F0ZS50cyIsICJub2RlX21vZHVsZXMvLnBucG0vdGlwcHkuanNANi4zLjcvbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy9wbHVnaW5zL2FuaW1hdGVGaWxsLnRzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS90aXBweS5qc0A2LjMuNy9ub2RlX21vZHVsZXMvdGlwcHkuanMvc3JjL3BsdWdpbnMvZm9sbG93Q3Vyc29yLnRzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS90aXBweS5qc0A2LjMuNy9ub2RlX21vZHVsZXMvdGlwcHkuanMvc3JjL3BsdWdpbnMvaW5saW5lUG9zaXRpb25pbmcudHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL3RpcHB5LmpzQDYuMy43L25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvcGx1Z2lucy9zdGlja3kudHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL3RpcHB5LmpzQDYuMy43L25vZGVfbW9kdWxlcy90aXBweS5qcy9idWlsZC9iYXNlLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgJ3RpcHB5LmpzL2Rpc3QvdGlwcHkuY3NzJztcblxuZXhwb3J0IHtkZWZhdWx0IGFzIHRpcHB5fSBmcm9tICd0aXBweS5qcyc7XG4iLCAiZXhwb3J0IHZhciB0b3AgPSAndG9wJztcbmV4cG9ydCB2YXIgYm90dG9tID0gJ2JvdHRvbSc7XG5leHBvcnQgdmFyIHJpZ2h0ID0gJ3JpZ2h0JztcbmV4cG9ydCB2YXIgbGVmdCA9ICdsZWZ0JztcbmV4cG9ydCB2YXIgYXV0byA9ICdhdXRvJztcbmV4cG9ydCB2YXIgYmFzZVBsYWNlbWVudHMgPSBbdG9wLCBib3R0b20sIHJpZ2h0LCBsZWZ0XTtcbmV4cG9ydCB2YXIgc3RhcnQgPSAnc3RhcnQnO1xuZXhwb3J0IHZhciBlbmQgPSAnZW5kJztcbmV4cG9ydCB2YXIgY2xpcHBpbmdQYXJlbnRzID0gJ2NsaXBwaW5nUGFyZW50cyc7XG5leHBvcnQgdmFyIHZpZXdwb3J0ID0gJ3ZpZXdwb3J0JztcbmV4cG9ydCB2YXIgcG9wcGVyID0gJ3BvcHBlcic7XG5leHBvcnQgdmFyIHJlZmVyZW5jZSA9ICdyZWZlcmVuY2UnO1xuZXhwb3J0IHZhciB2YXJpYXRpb25QbGFjZW1lbnRzID0gLyojX19QVVJFX18qL2Jhc2VQbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIGFjYy5jb25jYXQoW3BsYWNlbWVudCArIFwiLVwiICsgc3RhcnQsIHBsYWNlbWVudCArIFwiLVwiICsgZW5kXSk7XG59LCBbXSk7XG5leHBvcnQgdmFyIHBsYWNlbWVudHMgPSAvKiNfX1BVUkVfXyovW10uY29uY2F0KGJhc2VQbGFjZW1lbnRzLCBbYXV0b10pLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIGFjYy5jb25jYXQoW3BsYWNlbWVudCwgcGxhY2VtZW50ICsgXCItXCIgKyBzdGFydCwgcGxhY2VtZW50ICsgXCItXCIgKyBlbmRdKTtcbn0sIFtdKTsgLy8gbW9kaWZpZXJzIHRoYXQgbmVlZCB0byByZWFkIHRoZSBET01cblxuZXhwb3J0IHZhciBiZWZvcmVSZWFkID0gJ2JlZm9yZVJlYWQnO1xuZXhwb3J0IHZhciByZWFkID0gJ3JlYWQnO1xuZXhwb3J0IHZhciBhZnRlclJlYWQgPSAnYWZ0ZXJSZWFkJzsgLy8gcHVyZS1sb2dpYyBtb2RpZmllcnNcblxuZXhwb3J0IHZhciBiZWZvcmVNYWluID0gJ2JlZm9yZU1haW4nO1xuZXhwb3J0IHZhciBtYWluID0gJ21haW4nO1xuZXhwb3J0IHZhciBhZnRlck1haW4gPSAnYWZ0ZXJNYWluJzsgLy8gbW9kaWZpZXIgd2l0aCB0aGUgcHVycG9zZSB0byB3cml0ZSB0byB0aGUgRE9NIChvciB3cml0ZSBpbnRvIGEgZnJhbWV3b3JrIHN0YXRlKVxuXG5leHBvcnQgdmFyIGJlZm9yZVdyaXRlID0gJ2JlZm9yZVdyaXRlJztcbmV4cG9ydCB2YXIgd3JpdGUgPSAnd3JpdGUnO1xuZXhwb3J0IHZhciBhZnRlcldyaXRlID0gJ2FmdGVyV3JpdGUnO1xuZXhwb3J0IHZhciBtb2RpZmllclBoYXNlcyA9IFtiZWZvcmVSZWFkLCByZWFkLCBhZnRlclJlYWQsIGJlZm9yZU1haW4sIG1haW4sIGFmdGVyTWFpbiwgYmVmb3JlV3JpdGUsIHdyaXRlLCBhZnRlcldyaXRlXTsiLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Tm9kZU5hbWUoZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudCA/IChlbGVtZW50Lm5vZGVOYW1lIHx8ICcnKS50b0xvd2VyQ2FzZSgpIDogbnVsbDtcbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0V2luZG93KG5vZGUpIHtcbiAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cblxuICBpZiAobm9kZS50b1N0cmluZygpICE9PSAnW29iamVjdCBXaW5kb3ddJykge1xuICAgIHZhciBvd25lckRvY3VtZW50ID0gbm9kZS5vd25lckRvY3VtZW50O1xuICAgIHJldHVybiBvd25lckRvY3VtZW50ID8gb3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyB8fCB3aW5kb3cgOiB3aW5kb3c7XG4gIH1cblxuICByZXR1cm4gbm9kZTtcbn0iLCAiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcblxuZnVuY3Rpb24gaXNFbGVtZW50KG5vZGUpIHtcbiAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuRWxlbWVudDtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBpc0hUTUxFbGVtZW50KG5vZGUpIHtcbiAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuSFRNTEVsZW1lbnQ7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGlzU2hhZG93Um9vdChub2RlKSB7XG4gIC8vIElFIDExIGhhcyBubyBTaGFkb3dSb290XG4gIGlmICh0eXBlb2YgU2hhZG93Um9vdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5TaGFkb3dSb290O1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3Q7XG59XG5cbmV4cG9ydCB7IGlzRWxlbWVudCwgaXNIVE1MRWxlbWVudCwgaXNTaGFkb3dSb290IH07IiwgImltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4uL2RvbS11dGlscy9pbnN0YW5jZU9mLmpzXCI7IC8vIFRoaXMgbW9kaWZpZXIgdGFrZXMgdGhlIHN0eWxlcyBwcmVwYXJlZCBieSB0aGUgYGNvbXB1dGVTdHlsZXNgIG1vZGlmaWVyXG4vLyBhbmQgYXBwbGllcyB0aGVtIHRvIHRoZSBIVE1MRWxlbWVudHMgc3VjaCBhcyBwb3BwZXIgYW5kIGFycm93XG5cbmZ1bmN0aW9uIGFwcGx5U3R5bGVzKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZTtcbiAgT2JqZWN0LmtleXMoc3RhdGUuZWxlbWVudHMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgc3R5bGUgPSBzdGF0ZS5zdHlsZXNbbmFtZV0gfHwge307XG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBzdGF0ZS5hdHRyaWJ1dGVzW25hbWVdIHx8IHt9O1xuICAgIHZhciBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbbmFtZV07IC8vIGFycm93IGlzIG9wdGlvbmFsICsgdmlydHVhbCBlbGVtZW50c1xuXG4gICAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8ICFnZXROb2RlTmFtZShlbGVtZW50KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gRmxvdyBkb2Vzbid0IHN1cHBvcnQgdG8gZXh0ZW5kIHRoaXMgcHJvcGVydHksIGJ1dCBpdCdzIHRoZSBtb3N0XG4gICAgLy8gZWZmZWN0aXZlIHdheSB0byBhcHBseSBzdHlsZXMgdG8gYW4gSFRNTEVsZW1lbnRcbiAgICAvLyAkRmxvd0ZpeE1lW2Nhbm5vdC13cml0ZV1cblxuXG4gICAgT2JqZWN0LmFzc2lnbihlbGVtZW50LnN0eWxlLCBzdHlsZSk7XG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgdmFyIHZhbHVlID0gYXR0cmlidXRlc1tuYW1lXTtcblxuICAgICAgaWYgKHZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlID09PSB0cnVlID8gJycgOiB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBlZmZlY3QoX3JlZjIpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGU7XG4gIHZhciBpbml0aWFsU3R5bGVzID0ge1xuICAgIHBvcHBlcjoge1xuICAgICAgcG9zaXRpb246IHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3ksXG4gICAgICBsZWZ0OiAnMCcsXG4gICAgICB0b3A6ICcwJyxcbiAgICAgIG1hcmdpbjogJzAnXG4gICAgfSxcbiAgICBhcnJvdzoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgICB9LFxuICAgIHJlZmVyZW5jZToge31cbiAgfTtcbiAgT2JqZWN0LmFzc2lnbihzdGF0ZS5lbGVtZW50cy5wb3BwZXIuc3R5bGUsIGluaXRpYWxTdHlsZXMucG9wcGVyKTtcbiAgc3RhdGUuc3R5bGVzID0gaW5pdGlhbFN0eWxlcztcblxuICBpZiAoc3RhdGUuZWxlbWVudHMuYXJyb3cpIHtcbiAgICBPYmplY3QuYXNzaWduKHN0YXRlLmVsZW1lbnRzLmFycm93LnN0eWxlLCBpbml0aWFsU3R5bGVzLmFycm93KTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgT2JqZWN0LmtleXMoc3RhdGUuZWxlbWVudHMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHZhciBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbbmFtZV07XG4gICAgICB2YXIgYXR0cmlidXRlcyA9IHN0YXRlLmF0dHJpYnV0ZXNbbmFtZV0gfHwge307XG4gICAgICB2YXIgc3R5bGVQcm9wZXJ0aWVzID0gT2JqZWN0LmtleXMoc3RhdGUuc3R5bGVzLmhhc093blByb3BlcnR5KG5hbWUpID8gc3RhdGUuc3R5bGVzW25hbWVdIDogaW5pdGlhbFN0eWxlc1tuYW1lXSk7IC8vIFNldCBhbGwgdmFsdWVzIHRvIGFuIGVtcHR5IHN0cmluZyB0byB1bnNldCB0aGVtXG5cbiAgICAgIHZhciBzdHlsZSA9IHN0eWxlUHJvcGVydGllcy5yZWR1Y2UoZnVuY3Rpb24gKHN0eWxlLCBwcm9wZXJ0eSkge1xuICAgICAgICBzdHlsZVtwcm9wZXJ0eV0gPSAnJztcbiAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgfSwge30pOyAvLyBhcnJvdyBpcyBvcHRpb25hbCArIHZpcnR1YWwgZWxlbWVudHNcblxuICAgICAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8ICFnZXROb2RlTmFtZShlbGVtZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5zdHlsZSwgc3R5bGUpO1xuICAgICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoYXR0cmlidXRlKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2FwcGx5U3R5bGVzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICd3cml0ZScsXG4gIGZuOiBhcHBseVN0eWxlcyxcbiAgZWZmZWN0OiBlZmZlY3QsXG4gIHJlcXVpcmVzOiBbJ2NvbXB1dGVTdHlsZXMnXVxufTsiLCAiaW1wb3J0IHsgYXV0byB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xufSIsICJleHBvcnQgdmFyIG1heCA9IE1hdGgubWF4O1xuZXhwb3J0IHZhciBtaW4gPSBNYXRoLm1pbjtcbmV4cG9ydCB2YXIgcm91bmQgPSBNYXRoLnJvdW5kOyIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVQVN0cmluZygpIHtcbiAgdmFyIHVhRGF0YSA9IG5hdmlnYXRvci51c2VyQWdlbnREYXRhO1xuXG4gIGlmICh1YURhdGEgIT0gbnVsbCAmJiB1YURhdGEuYnJhbmRzICYmIEFycmF5LmlzQXJyYXkodWFEYXRhLmJyYW5kcykpIHtcbiAgICByZXR1cm4gdWFEYXRhLmJyYW5kcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtLmJyYW5kICsgXCIvXCIgKyBpdGVtLnZlcnNpb247XG4gICAgfSkuam9pbignICcpO1xuICB9XG5cbiAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQ7XG59IiwgImltcG9ydCBnZXRVQVN0cmluZyBmcm9tIFwiLi4vdXRpbHMvdXNlckFnZW50LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0xheW91dFZpZXdwb3J0KCkge1xuICByZXR1cm4gIS9eKCg/IWNocm9tZXxhbmRyb2lkKS4pKnNhZmFyaS9pLnRlc3QoZ2V0VUFTdHJpbmcoKSk7XG59IiwgImltcG9ydCB7IGlzRWxlbWVudCwgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCB7IHJvdW5kIH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjtcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgaXNMYXlvdXRWaWV3cG9ydCBmcm9tIFwiLi9pc0xheW91dFZpZXdwb3J0LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCwgaW5jbHVkZVNjYWxlLCBpc0ZpeGVkU3RyYXRlZ3kpIHtcbiAgaWYgKGluY2x1ZGVTY2FsZSA9PT0gdm9pZCAwKSB7XG4gICAgaW5jbHVkZVNjYWxlID0gZmFsc2U7XG4gIH1cblxuICBpZiAoaXNGaXhlZFN0cmF0ZWd5ID09PSB2b2lkIDApIHtcbiAgICBpc0ZpeGVkU3RyYXRlZ3kgPSBmYWxzZTtcbiAgfVxuXG4gIHZhciBjbGllbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgdmFyIHNjYWxlWCA9IDE7XG4gIHZhciBzY2FsZVkgPSAxO1xuXG4gIGlmIChpbmNsdWRlU2NhbGUgJiYgaXNIVE1MRWxlbWVudChlbGVtZW50KSkge1xuICAgIHNjYWxlWCA9IGVsZW1lbnQub2Zmc2V0V2lkdGggPiAwID8gcm91bmQoY2xpZW50UmVjdC53aWR0aCkgLyBlbGVtZW50Lm9mZnNldFdpZHRoIHx8IDEgOiAxO1xuICAgIHNjYWxlWSA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0ID4gMCA/IHJvdW5kKGNsaWVudFJlY3QuaGVpZ2h0KSAvIGVsZW1lbnQub2Zmc2V0SGVpZ2h0IHx8IDEgOiAxO1xuICB9XG5cbiAgdmFyIF9yZWYgPSBpc0VsZW1lbnQoZWxlbWVudCkgPyBnZXRXaW5kb3coZWxlbWVudCkgOiB3aW5kb3csXG4gICAgICB2aXN1YWxWaWV3cG9ydCA9IF9yZWYudmlzdWFsVmlld3BvcnQ7XG5cbiAgdmFyIGFkZFZpc3VhbE9mZnNldHMgPSAhaXNMYXlvdXRWaWV3cG9ydCgpICYmIGlzRml4ZWRTdHJhdGVneTtcbiAgdmFyIHggPSAoY2xpZW50UmVjdC5sZWZ0ICsgKGFkZFZpc3VhbE9mZnNldHMgJiYgdmlzdWFsVmlld3BvcnQgPyB2aXN1YWxWaWV3cG9ydC5vZmZzZXRMZWZ0IDogMCkpIC8gc2NhbGVYO1xuICB2YXIgeSA9IChjbGllbnRSZWN0LnRvcCArIChhZGRWaXN1YWxPZmZzZXRzICYmIHZpc3VhbFZpZXdwb3J0ID8gdmlzdWFsVmlld3BvcnQub2Zmc2V0VG9wIDogMCkpIC8gc2NhbGVZO1xuICB2YXIgd2lkdGggPSBjbGllbnRSZWN0LndpZHRoIC8gc2NhbGVYO1xuICB2YXIgaGVpZ2h0ID0gY2xpZW50UmVjdC5oZWlnaHQgLyBzY2FsZVk7XG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIHRvcDogeSxcbiAgICByaWdodDogeCArIHdpZHRoLFxuICAgIGJvdHRvbTogeSArIGhlaWdodCxcbiAgICBsZWZ0OiB4LFxuICAgIHg6IHgsXG4gICAgeTogeVxuICB9O1xufSIsICJpbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiOyAvLyBSZXR1cm5zIHRoZSBsYXlvdXQgcmVjdCBvZiBhbiBlbGVtZW50IHJlbGF0aXZlIHRvIGl0cyBvZmZzZXRQYXJlbnQuIExheW91dFxuLy8gbWVhbnMgaXQgZG9lc24ndCB0YWtlIGludG8gYWNjb3VudCB0cmFuc2Zvcm1zLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRMYXlvdXRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIGNsaWVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCk7IC8vIFVzZSB0aGUgY2xpZW50UmVjdCBzaXplcyBpZiBpdCdzIG5vdCBiZWVuIHRyYW5zZm9ybWVkLlxuICAvLyBGaXhlcyBodHRwczovL2dpdGh1Yi5jb20vcG9wcGVyanMvcG9wcGVyLWNvcmUvaXNzdWVzLzEyMjNcblxuICB2YXIgd2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuICB2YXIgaGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgaWYgKE1hdGguYWJzKGNsaWVudFJlY3Qud2lkdGggLSB3aWR0aCkgPD0gMSkge1xuICAgIHdpZHRoID0gY2xpZW50UmVjdC53aWR0aDtcbiAgfVxuXG4gIGlmIChNYXRoLmFicyhjbGllbnRSZWN0LmhlaWdodCAtIGhlaWdodCkgPD0gMSkge1xuICAgIGhlaWdodCA9IGNsaWVudFJlY3QuaGVpZ2h0O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB4OiBlbGVtZW50Lm9mZnNldExlZnQsXG4gICAgeTogZWxlbWVudC5vZmZzZXRUb3AsXG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0XG4gIH07XG59IiwgImltcG9ydCB7IGlzU2hhZG93Um9vdCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhaW5zKHBhcmVudCwgY2hpbGQpIHtcbiAgdmFyIHJvb3ROb2RlID0gY2hpbGQuZ2V0Um9vdE5vZGUgJiYgY2hpbGQuZ2V0Um9vdE5vZGUoKTsgLy8gRmlyc3QsIGF0dGVtcHQgd2l0aCBmYXN0ZXIgbmF0aXZlIG1ldGhvZFxuXG4gIGlmIChwYXJlbnQuY29udGFpbnMoY2hpbGQpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gdGhlbiBmYWxsYmFjayB0byBjdXN0b20gaW1wbGVtZW50YXRpb24gd2l0aCBTaGFkb3cgRE9NIHN1cHBvcnRcbiAgZWxzZSBpZiAocm9vdE5vZGUgJiYgaXNTaGFkb3dSb290KHJvb3ROb2RlKSkge1xuICAgICAgdmFyIG5leHQgPSBjaGlsZDtcblxuICAgICAgZG8ge1xuICAgICAgICBpZiAobmV4dCAmJiBwYXJlbnQuaXNTYW1lTm9kZShuZXh0KSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXTogbmVlZCBhIGJldHRlciB3YXkgdG8gaGFuZGxlIHRoaXMuLi5cblxuXG4gICAgICAgIG5leHQgPSBuZXh0LnBhcmVudE5vZGUgfHwgbmV4dC5ob3N0O1xuICAgICAgfSB3aGlsZSAobmV4dCk7XG4gICAgfSAvLyBHaXZlIHVwLCB0aGUgcmVzdWx0IGlzIGZhbHNlXG5cblxuICByZXR1cm4gZmFsc2U7XG59IiwgImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGdldFdpbmRvdyhlbGVtZW50KS5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xufSIsICJpbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVGFibGVFbGVtZW50KGVsZW1lbnQpIHtcbiAgcmV0dXJuIFsndGFibGUnLCAndGQnLCAndGgnXS5pbmRleE9mKGdldE5vZGVOYW1lKGVsZW1lbnQpKSA+PSAwO1xufSIsICJpbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkge1xuICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBhc3N1bWUgYm9keSBpcyBhbHdheXMgYXZhaWxhYmxlXG4gIHJldHVybiAoKGlzRWxlbWVudChlbGVtZW50KSA/IGVsZW1lbnQub3duZXJEb2N1bWVudCA6IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICBlbGVtZW50LmRvY3VtZW50KSB8fCB3aW5kb3cuZG9jdW1lbnQpLmRvY3VtZW50RWxlbWVudDtcbn0iLCAiaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IHsgaXNTaGFkb3dSb290IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UGFyZW50Tm9kZShlbGVtZW50KSB7XG4gIGlmIChnZXROb2RlTmFtZShlbGVtZW50KSA9PT0gJ2h0bWwnKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICByZXR1cm4gKC8vIHRoaXMgaXMgYSBxdWlja2VyIChidXQgbGVzcyB0eXBlIHNhZmUpIHdheSB0byBzYXZlIHF1aXRlIHNvbWUgYnl0ZXMgZnJvbSB0aGUgYnVuZGxlXG4gICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXVxuICAgIC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICAgIGVsZW1lbnQuYXNzaWduZWRTbG90IHx8IC8vIHN0ZXAgaW50byB0aGUgc2hhZG93IERPTSBvZiB0aGUgcGFyZW50IG9mIGEgc2xvdHRlZCBub2RlXG4gICAgZWxlbWVudC5wYXJlbnROb2RlIHx8ICggLy8gRE9NIEVsZW1lbnQgZGV0ZWN0ZWRcbiAgICBpc1NoYWRvd1Jvb3QoZWxlbWVudCkgPyBlbGVtZW50Lmhvc3QgOiBudWxsKSB8fCAvLyBTaGFkb3dSb290IGRldGVjdGVkXG4gICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtY2FsbF06IEhUTUxFbGVtZW50IGlzIGEgTm9kZVxuICAgIGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSAvLyBmYWxsYmFja1xuXG4gICk7XG59IiwgImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQsIGlzU2hhZG93Um9vdCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBpc1RhYmxlRWxlbWVudCBmcm9tIFwiLi9pc1RhYmxlRWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSBcIi4vZ2V0UGFyZW50Tm9kZS5qc1wiO1xuaW1wb3J0IGdldFVBU3RyaW5nIGZyb20gXCIuLi91dGlscy91c2VyQWdlbnQuanNcIjtcblxuZnVuY3Rpb24gZ2V0VHJ1ZU9mZnNldFBhcmVudChlbGVtZW50KSB7XG4gIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAvLyBodHRwczovL2dpdGh1Yi5jb20vcG9wcGVyanMvcG9wcGVyLWNvcmUvaXNzdWVzLzgzN1xuICBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uID09PSAnZml4ZWQnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudC5vZmZzZXRQYXJlbnQ7XG59IC8vIGAub2Zmc2V0UGFyZW50YCByZXBvcnRzIGBudWxsYCBmb3IgZml4ZWQgZWxlbWVudHMsIHdoaWxlIGFic29sdXRlIGVsZW1lbnRzXG4vLyByZXR1cm4gdGhlIGNvbnRhaW5pbmcgYmxvY2tcblxuXG5mdW5jdGlvbiBnZXRDb250YWluaW5nQmxvY2soZWxlbWVudCkge1xuICB2YXIgaXNGaXJlZm94ID0gL2ZpcmVmb3gvaS50ZXN0KGdldFVBU3RyaW5nKCkpO1xuICB2YXIgaXNJRSA9IC9UcmlkZW50L2kudGVzdChnZXRVQVN0cmluZygpKTtcblxuICBpZiAoaXNJRSAmJiBpc0hUTUxFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgLy8gSW4gSUUgOSwgMTAgYW5kIDExIGZpeGVkIGVsZW1lbnRzIGNvbnRhaW5pbmcgYmxvY2sgaXMgYWx3YXlzIGVzdGFibGlzaGVkIGJ5IHRoZSB2aWV3cG9ydFxuICAgIHZhciBlbGVtZW50Q3NzID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcblxuICAgIGlmIChlbGVtZW50Q3NzLnBvc2l0aW9uID09PSAnZml4ZWQnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICB2YXIgY3VycmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKGVsZW1lbnQpO1xuXG4gIGlmIChpc1NoYWRvd1Jvb3QoY3VycmVudE5vZGUpKSB7XG4gICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5ob3N0O1xuICB9XG5cbiAgd2hpbGUgKGlzSFRNTEVsZW1lbnQoY3VycmVudE5vZGUpICYmIFsnaHRtbCcsICdib2R5J10uaW5kZXhPZihnZXROb2RlTmFtZShjdXJyZW50Tm9kZSkpIDwgMCkge1xuICAgIHZhciBjc3MgPSBnZXRDb21wdXRlZFN0eWxlKGN1cnJlbnROb2RlKTsgLy8gVGhpcyBpcyBub24tZXhoYXVzdGl2ZSBidXQgY292ZXJzIHRoZSBtb3N0IGNvbW1vbiBDU1MgcHJvcGVydGllcyB0aGF0XG4gICAgLy8gY3JlYXRlIGEgY29udGFpbmluZyBibG9jay5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQ29udGFpbmluZ19ibG9jayNpZGVudGlmeWluZ190aGVfY29udGFpbmluZ19ibG9ja1xuXG4gICAgaWYgKGNzcy50cmFuc2Zvcm0gIT09ICdub25lJyB8fCBjc3MucGVyc3BlY3RpdmUgIT09ICdub25lJyB8fCBjc3MuY29udGFpbiA9PT0gJ3BhaW50JyB8fCBbJ3RyYW5zZm9ybScsICdwZXJzcGVjdGl2ZSddLmluZGV4T2YoY3NzLndpbGxDaGFuZ2UpICE9PSAtMSB8fCBpc0ZpcmVmb3ggJiYgY3NzLndpbGxDaGFuZ2UgPT09ICdmaWx0ZXInIHx8IGlzRmlyZWZveCAmJiBjc3MuZmlsdGVyICYmIGNzcy5maWx0ZXIgIT09ICdub25lJykge1xuICAgICAgcmV0dXJuIGN1cnJlbnROb2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59IC8vIEdldHMgdGhlIGNsb3Nlc3QgYW5jZXN0b3IgcG9zaXRpb25lZCBlbGVtZW50LiBIYW5kbGVzIHNvbWUgZWRnZSBjYXNlcyxcbi8vIHN1Y2ggYXMgdGFibGUgYW5jZXN0b3JzIGFuZCBjcm9zcyBicm93c2VyIGJ1Z3MuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdyhlbGVtZW50KTtcbiAgdmFyIG9mZnNldFBhcmVudCA9IGdldFRydWVPZmZzZXRQYXJlbnQoZWxlbWVudCk7XG5cbiAgd2hpbGUgKG9mZnNldFBhcmVudCAmJiBpc1RhYmxlRWxlbWVudChvZmZzZXRQYXJlbnQpICYmIGdldENvbXB1dGVkU3R5bGUob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcbiAgICBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KG9mZnNldFBhcmVudCk7XG4gIH1cblxuICBpZiAob2Zmc2V0UGFyZW50ICYmIChnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpID09PSAnaHRtbCcgfHwgZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSA9PT0gJ2JvZHknICYmIGdldENvbXB1dGVkU3R5bGUob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfVxuXG4gIHJldHVybiBvZmZzZXRQYXJlbnQgfHwgZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHx8IHdpbmRvdztcbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gWyd0b3AnLCAnYm90dG9tJ10uaW5kZXhPZihwbGFjZW1lbnQpID49IDAgPyAneCcgOiAneSc7XG59IiwgImltcG9ydCB7IG1heCBhcyBtYXRoTWF4LCBtaW4gYXMgbWF0aE1pbiB9IGZyb20gXCIuL21hdGguanNcIjtcbmV4cG9ydCBmdW5jdGlvbiB3aXRoaW4obWluLCB2YWx1ZSwgbWF4KSB7XG4gIHJldHVybiBtYXRoTWF4KG1pbiwgbWF0aE1pbih2YWx1ZSwgbWF4KSk7XG59XG5leHBvcnQgZnVuY3Rpb24gd2l0aGluTWF4Q2xhbXAobWluLCB2YWx1ZSwgbWF4KSB7XG4gIHZhciB2ID0gd2l0aGluKG1pbiwgdmFsdWUsIG1heCk7XG4gIHJldHVybiB2ID4gbWF4ID8gbWF4IDogdjtcbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RnJlc2hTaWRlT2JqZWN0KCkge1xuICByZXR1cm4ge1xuICAgIHRvcDogMCxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgbGVmdDogMFxuICB9O1xufSIsICJpbXBvcnQgZ2V0RnJlc2hTaWRlT2JqZWN0IGZyb20gXCIuL2dldEZyZXNoU2lkZU9iamVjdC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2VQYWRkaW5nT2JqZWN0KHBhZGRpbmdPYmplY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGdldEZyZXNoU2lkZU9iamVjdCgpLCBwYWRkaW5nT2JqZWN0KTtcbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXhwYW5kVG9IYXNoTWFwKHZhbHVlLCBrZXlzKSB7XG4gIHJldHVybiBrZXlzLnJlZHVjZShmdW5jdGlvbiAoaGFzaE1hcCwga2V5KSB7XG4gICAgaGFzaE1hcFtrZXldID0gdmFsdWU7XG4gICAgcmV0dXJuIGhhc2hNYXA7XG4gIH0sIHt9KTtcbn0iLCAiaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRMYXlvdXRSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qc1wiO1xuaW1wb3J0IGNvbnRhaW5zIGZyb20gXCIuLi9kb20tdXRpbHMvY29udGFpbnMuanNcIjtcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldE1haW5BeGlzRnJvbVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHsgd2l0aGluIH0gZnJvbSBcIi4uL3V0aWxzL3dpdGhpbi5qc1wiO1xuaW1wb3J0IG1lcmdlUGFkZGluZ09iamVjdCBmcm9tIFwiLi4vdXRpbHMvbWVyZ2VQYWRkaW5nT2JqZWN0LmpzXCI7XG5pbXBvcnQgZXhwYW5kVG9IYXNoTWFwIGZyb20gXCIuLi91dGlscy9leHBhbmRUb0hhc2hNYXAuanNcIjtcbmltcG9ydCB7IGxlZnQsIHJpZ2h0LCBiYXNlUGxhY2VtZW50cywgdG9wLCBib3R0b20gfSBmcm9tIFwiLi4vZW51bXMuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG52YXIgdG9QYWRkaW5nT2JqZWN0ID0gZnVuY3Rpb24gdG9QYWRkaW5nT2JqZWN0KHBhZGRpbmcsIHN0YXRlKSB7XG4gIHBhZGRpbmcgPSB0eXBlb2YgcGFkZGluZyA9PT0gJ2Z1bmN0aW9uJyA/IHBhZGRpbmcoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUucmVjdHMsIHtcbiAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudFxuICB9KSkgOiBwYWRkaW5nO1xuICByZXR1cm4gbWVyZ2VQYWRkaW5nT2JqZWN0KHR5cGVvZiBwYWRkaW5nICE9PSAnbnVtYmVyJyA/IHBhZGRpbmcgOiBleHBhbmRUb0hhc2hNYXAocGFkZGluZywgYmFzZVBsYWNlbWVudHMpKTtcbn07XG5cbmZ1bmN0aW9uIGFycm93KF9yZWYpIHtcbiAgdmFyIF9zdGF0ZSRtb2RpZmllcnNEYXRhJDtcblxuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnM7XG4gIHZhciBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdztcbiAgdmFyIHBvcHBlck9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHM7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpO1xuICB2YXIgYXhpcyA9IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KTtcbiAgdmFyIGlzVmVydGljYWwgPSBbbGVmdCwgcmlnaHRdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMDtcbiAgdmFyIGxlbiA9IGlzVmVydGljYWwgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgaWYgKCFhcnJvd0VsZW1lbnQgfHwgIXBvcHBlck9mZnNldHMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgcGFkZGluZ09iamVjdCA9IHRvUGFkZGluZ09iamVjdChvcHRpb25zLnBhZGRpbmcsIHN0YXRlKTtcbiAgdmFyIGFycm93UmVjdCA9IGdldExheW91dFJlY3QoYXJyb3dFbGVtZW50KTtcbiAgdmFyIG1pblByb3AgPSBheGlzID09PSAneScgPyB0b3AgOiBsZWZ0O1xuICB2YXIgbWF4UHJvcCA9IGF4aXMgPT09ICd5JyA/IGJvdHRvbSA6IHJpZ2h0O1xuICB2YXIgZW5kRGlmZiA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtsZW5dICsgc3RhdGUucmVjdHMucmVmZXJlbmNlW2F4aXNdIC0gcG9wcGVyT2Zmc2V0c1theGlzXSAtIHN0YXRlLnJlY3RzLnBvcHBlcltsZW5dO1xuICB2YXIgc3RhcnREaWZmID0gcG9wcGVyT2Zmc2V0c1theGlzXSAtIHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtheGlzXTtcbiAgdmFyIGFycm93T2Zmc2V0UGFyZW50ID0gZ2V0T2Zmc2V0UGFyZW50KGFycm93RWxlbWVudCk7XG4gIHZhciBjbGllbnRTaXplID0gYXJyb3dPZmZzZXRQYXJlbnQgPyBheGlzID09PSAneScgPyBhcnJvd09mZnNldFBhcmVudC5jbGllbnRIZWlnaHQgfHwgMCA6IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudFdpZHRoIHx8IDAgOiAwO1xuICB2YXIgY2VudGVyVG9SZWZlcmVuY2UgPSBlbmREaWZmIC8gMiAtIHN0YXJ0RGlmZiAvIDI7IC8vIE1ha2Ugc3VyZSB0aGUgYXJyb3cgZG9lc24ndCBvdmVyZmxvdyB0aGUgcG9wcGVyIGlmIHRoZSBjZW50ZXIgcG9pbnQgaXNcbiAgLy8gb3V0c2lkZSBvZiB0aGUgcG9wcGVyIGJvdW5kc1xuXG4gIHZhciBtaW4gPSBwYWRkaW5nT2JqZWN0W21pblByb3BdO1xuICB2YXIgbWF4ID0gY2xpZW50U2l6ZSAtIGFycm93UmVjdFtsZW5dIC0gcGFkZGluZ09iamVjdFttYXhQcm9wXTtcbiAgdmFyIGNlbnRlciA9IGNsaWVudFNpemUgLyAyIC0gYXJyb3dSZWN0W2xlbl0gLyAyICsgY2VudGVyVG9SZWZlcmVuY2U7XG4gIHZhciBvZmZzZXQgPSB3aXRoaW4obWluLCBjZW50ZXIsIG1heCk7IC8vIFByZXZlbnRzIGJyZWFraW5nIHN5bnRheCBoaWdobGlnaHRpbmcuLi5cblxuICB2YXIgYXhpc1Byb3AgPSBheGlzO1xuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gKF9zdGF0ZSRtb2RpZmllcnNEYXRhJCA9IHt9LCBfc3RhdGUkbW9kaWZpZXJzRGF0YSRbYXhpc1Byb3BdID0gb2Zmc2V0LCBfc3RhdGUkbW9kaWZpZXJzRGF0YSQuY2VudGVyT2Zmc2V0ID0gb2Zmc2V0IC0gY2VudGVyLCBfc3RhdGUkbW9kaWZpZXJzRGF0YSQpO1xufVxuXG5mdW5jdGlvbiBlZmZlY3QoX3JlZjIpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZjIub3B0aW9ucztcbiAgdmFyIF9vcHRpb25zJGVsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQsXG4gICAgICBhcnJvd0VsZW1lbnQgPSBfb3B0aW9ucyRlbGVtZW50ID09PSB2b2lkIDAgPyAnW2RhdGEtcG9wcGVyLWFycm93XScgOiBfb3B0aW9ucyRlbGVtZW50O1xuXG4gIGlmIChhcnJvd0VsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfSAvLyBDU1Mgc2VsZWN0b3JcblxuXG4gIGlmICh0eXBlb2YgYXJyb3dFbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLnBvcHBlci5xdWVyeVNlbGVjdG9yKGFycm93RWxlbWVudCk7XG5cbiAgICBpZiAoIWFycm93RWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29udGFpbnMoc3RhdGUuZWxlbWVudHMucG9wcGVyLCBhcnJvd0VsZW1lbnQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc3RhdGUuZWxlbWVudHMuYXJyb3cgPSBhcnJvd0VsZW1lbnQ7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdhcnJvdycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBhcnJvdyxcbiAgZWZmZWN0OiBlZmZlY3QsXG4gIHJlcXVpcmVzOiBbJ3BvcHBlck9mZnNldHMnXSxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydwcmV2ZW50T3ZlcmZsb3cnXVxufTsiLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnNwbGl0KCctJylbMV07XG59IiwgImltcG9ydCB7IHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSwgZW5kIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0VmFyaWF0aW9uIGZyb20gXCIuLi91dGlscy9nZXRWYXJpYXRpb24uanNcIjtcbmltcG9ydCB7IHJvdW5kIH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG52YXIgdW5zZXRTaWRlcyA9IHtcbiAgdG9wOiAnYXV0bycsXG4gIHJpZ2h0OiAnYXV0bycsXG4gIGJvdHRvbTogJ2F1dG8nLFxuICBsZWZ0OiAnYXV0bydcbn07IC8vIFJvdW5kIHRoZSBvZmZzZXRzIHRvIHRoZSBuZWFyZXN0IHN1aXRhYmxlIHN1YnBpeGVsIGJhc2VkIG9uIHRoZSBEUFIuXG4vLyBab29taW5nIGNhbiBjaGFuZ2UgdGhlIERQUiwgYnV0IGl0IHNlZW1zIHRvIHJlcG9ydCBhIHZhbHVlIHRoYXQgd2lsbFxuLy8gY2xlYW5seSBkaXZpZGUgdGhlIHZhbHVlcyBpbnRvIHRoZSBhcHByb3ByaWF0ZSBzdWJwaXhlbHMuXG5cbmZ1bmN0aW9uIHJvdW5kT2Zmc2V0c0J5RFBSKF9yZWYsIHdpbikge1xuICB2YXIgeCA9IF9yZWYueCxcbiAgICAgIHkgPSBfcmVmLnk7XG4gIHZhciBkcHIgPSB3aW4uZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xuICByZXR1cm4ge1xuICAgIHg6IHJvdW5kKHggKiBkcHIpIC8gZHByIHx8IDAsXG4gICAgeTogcm91bmQoeSAqIGRwcikgLyBkcHIgfHwgMFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFwVG9TdHlsZXMoX3JlZjIpIHtcbiAgdmFyIF9PYmplY3QkYXNzaWduMjtcblxuICB2YXIgcG9wcGVyID0gX3JlZjIucG9wcGVyLFxuICAgICAgcG9wcGVyUmVjdCA9IF9yZWYyLnBvcHBlclJlY3QsXG4gICAgICBwbGFjZW1lbnQgPSBfcmVmMi5wbGFjZW1lbnQsXG4gICAgICB2YXJpYXRpb24gPSBfcmVmMi52YXJpYXRpb24sXG4gICAgICBvZmZzZXRzID0gX3JlZjIub2Zmc2V0cyxcbiAgICAgIHBvc2l0aW9uID0gX3JlZjIucG9zaXRpb24sXG4gICAgICBncHVBY2NlbGVyYXRpb24gPSBfcmVmMi5ncHVBY2NlbGVyYXRpb24sXG4gICAgICBhZGFwdGl2ZSA9IF9yZWYyLmFkYXB0aXZlLFxuICAgICAgcm91bmRPZmZzZXRzID0gX3JlZjIucm91bmRPZmZzZXRzLFxuICAgICAgaXNGaXhlZCA9IF9yZWYyLmlzRml4ZWQ7XG4gIHZhciBfb2Zmc2V0cyR4ID0gb2Zmc2V0cy54LFxuICAgICAgeCA9IF9vZmZzZXRzJHggPT09IHZvaWQgMCA/IDAgOiBfb2Zmc2V0cyR4LFxuICAgICAgX29mZnNldHMkeSA9IG9mZnNldHMueSxcbiAgICAgIHkgPSBfb2Zmc2V0cyR5ID09PSB2b2lkIDAgPyAwIDogX29mZnNldHMkeTtcblxuICB2YXIgX3JlZjMgPSB0eXBlb2Ygcm91bmRPZmZzZXRzID09PSAnZnVuY3Rpb24nID8gcm91bmRPZmZzZXRzKHtcbiAgICB4OiB4LFxuICAgIHk6IHlcbiAgfSkgOiB7XG4gICAgeDogeCxcbiAgICB5OiB5XG4gIH07XG5cbiAgeCA9IF9yZWYzLng7XG4gIHkgPSBfcmVmMy55O1xuICB2YXIgaGFzWCA9IG9mZnNldHMuaGFzT3duUHJvcGVydHkoJ3gnKTtcbiAgdmFyIGhhc1kgPSBvZmZzZXRzLmhhc093blByb3BlcnR5KCd5Jyk7XG4gIHZhciBzaWRlWCA9IGxlZnQ7XG4gIHZhciBzaWRlWSA9IHRvcDtcbiAgdmFyIHdpbiA9IHdpbmRvdztcblxuICBpZiAoYWRhcHRpdmUpIHtcbiAgICB2YXIgb2Zmc2V0UGFyZW50ID0gZ2V0T2Zmc2V0UGFyZW50KHBvcHBlcik7XG4gICAgdmFyIGhlaWdodFByb3AgPSAnY2xpZW50SGVpZ2h0JztcbiAgICB2YXIgd2lkdGhQcm9wID0gJ2NsaWVudFdpZHRoJztcblxuICAgIGlmIChvZmZzZXRQYXJlbnQgPT09IGdldFdpbmRvdyhwb3BwZXIpKSB7XG4gICAgICBvZmZzZXRQYXJlbnQgPSBnZXREb2N1bWVudEVsZW1lbnQocG9wcGVyKTtcblxuICAgICAgaWYgKGdldENvbXB1dGVkU3R5bGUob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiAhPT0gJ3N0YXRpYycgJiYgcG9zaXRpb24gPT09ICdhYnNvbHV0ZScpIHtcbiAgICAgICAgaGVpZ2h0UHJvcCA9ICdzY3JvbGxIZWlnaHQnO1xuICAgICAgICB3aWR0aFByb3AgPSAnc2Nyb2xsV2lkdGgnO1xuICAgICAgfVxuICAgIH0gLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtY2FzdF06IGZvcmNlIHR5cGUgcmVmaW5lbWVudCwgd2UgY29tcGFyZSBvZmZzZXRQYXJlbnQgd2l0aCB3aW5kb3cgYWJvdmUsIGJ1dCBGbG93IGRvZXNuJ3QgZGV0ZWN0IGl0XG5cblxuICAgIG9mZnNldFBhcmVudCA9IG9mZnNldFBhcmVudDtcblxuICAgIGlmIChwbGFjZW1lbnQgPT09IHRvcCB8fCAocGxhY2VtZW50ID09PSBsZWZ0IHx8IHBsYWNlbWVudCA9PT0gcmlnaHQpICYmIHZhcmlhdGlvbiA9PT0gZW5kKSB7XG4gICAgICBzaWRlWSA9IGJvdHRvbTtcbiAgICAgIHZhciBvZmZzZXRZID0gaXNGaXhlZCAmJiBvZmZzZXRQYXJlbnQgPT09IHdpbiAmJiB3aW4udmlzdWFsVmlld3BvcnQgPyB3aW4udmlzdWFsVmlld3BvcnQuaGVpZ2h0IDogLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gICAgICBvZmZzZXRQYXJlbnRbaGVpZ2h0UHJvcF07XG4gICAgICB5IC09IG9mZnNldFkgLSBwb3BwZXJSZWN0LmhlaWdodDtcbiAgICAgIHkgKj0gZ3B1QWNjZWxlcmF0aW9uID8gMSA6IC0xO1xuICAgIH1cblxuICAgIGlmIChwbGFjZW1lbnQgPT09IGxlZnQgfHwgKHBsYWNlbWVudCA9PT0gdG9wIHx8IHBsYWNlbWVudCA9PT0gYm90dG9tKSAmJiB2YXJpYXRpb24gPT09IGVuZCkge1xuICAgICAgc2lkZVggPSByaWdodDtcbiAgICAgIHZhciBvZmZzZXRYID0gaXNGaXhlZCAmJiBvZmZzZXRQYXJlbnQgPT09IHdpbiAmJiB3aW4udmlzdWFsVmlld3BvcnQgPyB3aW4udmlzdWFsVmlld3BvcnQud2lkdGggOiAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cbiAgICAgIG9mZnNldFBhcmVudFt3aWR0aFByb3BdO1xuICAgICAgeCAtPSBvZmZzZXRYIC0gcG9wcGVyUmVjdC53aWR0aDtcbiAgICAgIHggKj0gZ3B1QWNjZWxlcmF0aW9uID8gMSA6IC0xO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb21tb25TdHlsZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBwb3NpdGlvbjogcG9zaXRpb25cbiAgfSwgYWRhcHRpdmUgJiYgdW5zZXRTaWRlcyk7XG5cbiAgdmFyIF9yZWY0ID0gcm91bmRPZmZzZXRzID09PSB0cnVlID8gcm91bmRPZmZzZXRzQnlEUFIoe1xuICAgIHg6IHgsXG4gICAgeTogeVxuICB9LCBnZXRXaW5kb3cocG9wcGVyKSkgOiB7XG4gICAgeDogeCxcbiAgICB5OiB5XG4gIH07XG5cbiAgeCA9IF9yZWY0Lng7XG4gIHkgPSBfcmVmNC55O1xuXG4gIGlmIChncHVBY2NlbGVyYXRpb24pIHtcbiAgICB2YXIgX09iamVjdCRhc3NpZ247XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCAoX09iamVjdCRhc3NpZ24gPSB7fSwgX09iamVjdCRhc3NpZ25bc2lkZVldID0gaGFzWSA/ICcwJyA6ICcnLCBfT2JqZWN0JGFzc2lnbltzaWRlWF0gPSBoYXNYID8gJzAnIDogJycsIF9PYmplY3QkYXNzaWduLnRyYW5zZm9ybSA9ICh3aW4uZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSA8PSAxID8gXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweClcIiA6IFwidHJhbnNsYXRlM2QoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweCwgMClcIiwgX09iamVjdCRhc3NpZ24pKTtcbiAgfVxuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIChfT2JqZWN0JGFzc2lnbjIgPSB7fSwgX09iamVjdCRhc3NpZ24yW3NpZGVZXSA9IGhhc1kgPyB5ICsgXCJweFwiIDogJycsIF9PYmplY3QkYXNzaWduMltzaWRlWF0gPSBoYXNYID8geCArIFwicHhcIiA6ICcnLCBfT2JqZWN0JGFzc2lnbjIudHJhbnNmb3JtID0gJycsIF9PYmplY3QkYXNzaWduMikpO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlU3R5bGVzKF9yZWY1KSB7XG4gIHZhciBzdGF0ZSA9IF9yZWY1LnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWY1Lm9wdGlvbnM7XG4gIHZhciBfb3B0aW9ucyRncHVBY2NlbGVyYXQgPSBvcHRpb25zLmdwdUFjY2VsZXJhdGlvbixcbiAgICAgIGdwdUFjY2VsZXJhdGlvbiA9IF9vcHRpb25zJGdwdUFjY2VsZXJhdCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGdwdUFjY2VsZXJhdCxcbiAgICAgIF9vcHRpb25zJGFkYXB0aXZlID0gb3B0aW9ucy5hZGFwdGl2ZSxcbiAgICAgIGFkYXB0aXZlID0gX29wdGlvbnMkYWRhcHRpdmUgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRhZGFwdGl2ZSxcbiAgICAgIF9vcHRpb25zJHJvdW5kT2Zmc2V0cyA9IG9wdGlvbnMucm91bmRPZmZzZXRzLFxuICAgICAgcm91bmRPZmZzZXRzID0gX29wdGlvbnMkcm91bmRPZmZzZXRzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkcm91bmRPZmZzZXRzO1xuICB2YXIgY29tbW9uU3R5bGVzID0ge1xuICAgIHBsYWNlbWVudDogZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpLFxuICAgIHZhcmlhdGlvbjogZ2V0VmFyaWF0aW9uKHN0YXRlLnBsYWNlbWVudCksXG4gICAgcG9wcGVyOiBzdGF0ZS5lbGVtZW50cy5wb3BwZXIsXG4gICAgcG9wcGVyUmVjdDogc3RhdGUucmVjdHMucG9wcGVyLFxuICAgIGdwdUFjY2VsZXJhdGlvbjogZ3B1QWNjZWxlcmF0aW9uLFxuICAgIGlzRml4ZWQ6IHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3kgPT09ICdmaXhlZCdcbiAgfTtcblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzICE9IG51bGwpIHtcbiAgICBzdGF0ZS5zdHlsZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuc3R5bGVzLnBvcHBlciwgbWFwVG9TdHlsZXMoT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCB7XG4gICAgICBvZmZzZXRzOiBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMsXG4gICAgICBwb3NpdGlvbjogc3RhdGUub3B0aW9ucy5zdHJhdGVneSxcbiAgICAgIGFkYXB0aXZlOiBhZGFwdGl2ZSxcbiAgICAgIHJvdW5kT2Zmc2V0czogcm91bmRPZmZzZXRzXG4gICAgfSkpKTtcbiAgfVxuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLmFycm93ICE9IG51bGwpIHtcbiAgICBzdGF0ZS5zdHlsZXMuYXJyb3cgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5zdHlsZXMuYXJyb3csIG1hcFRvU3R5bGVzKE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywge1xuICAgICAgb2Zmc2V0czogc3RhdGUubW9kaWZpZXJzRGF0YS5hcnJvdyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgYWRhcHRpdmU6IGZhbHNlLFxuICAgICAgcm91bmRPZmZzZXRzOiByb3VuZE9mZnNldHNcbiAgICB9KSkpO1xuICB9XG5cbiAgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciwge1xuICAgICdkYXRhLXBvcHBlci1wbGFjZW1lbnQnOiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdjb21wdXRlU3R5bGVzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdiZWZvcmVXcml0ZScsXG4gIGZuOiBjb21wdXRlU3R5bGVzLFxuICBkYXRhOiB7fVxufTsiLCAiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldFdpbmRvdy5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbnZhciBwYXNzaXZlID0ge1xuICBwYXNzaXZlOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBlZmZlY3QoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgaW5zdGFuY2UgPSBfcmVmLmluc3RhbmNlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucztcbiAgdmFyIF9vcHRpb25zJHNjcm9sbCA9IG9wdGlvbnMuc2Nyb2xsLFxuICAgICAgc2Nyb2xsID0gX29wdGlvbnMkc2Nyb2xsID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkc2Nyb2xsLFxuICAgICAgX29wdGlvbnMkcmVzaXplID0gb3B0aW9ucy5yZXNpemUsXG4gICAgICByZXNpemUgPSBfb3B0aW9ucyRyZXNpemUgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRyZXNpemU7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coc3RhdGUuZWxlbWVudHMucG9wcGVyKTtcbiAgdmFyIHNjcm9sbFBhcmVudHMgPSBbXS5jb25jYXQoc3RhdGUuc2Nyb2xsUGFyZW50cy5yZWZlcmVuY2UsIHN0YXRlLnNjcm9sbFBhcmVudHMucG9wcGVyKTtcblxuICBpZiAoc2Nyb2xsKSB7XG4gICAgc2Nyb2xsUGFyZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzY3JvbGxQYXJlbnQpIHtcbiAgICAgIHNjcm9sbFBhcmVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKHJlc2l6ZSkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICBzY3JvbGxQYXJlbnRzLmZvckVhY2goZnVuY3Rpb24gKHNjcm9sbFBhcmVudCkge1xuICAgICAgICBzY3JvbGxQYXJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyZXNpemUpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgIH1cbiAgfTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2V2ZW50TGlzdGVuZXJzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICd3cml0ZScsXG4gIGZuOiBmdW5jdGlvbiBmbigpIHt9LFxuICBlZmZlY3Q6IGVmZmVjdCxcbiAgZGF0YToge31cbn07IiwgInZhciBoYXNoID0ge1xuICBsZWZ0OiAncmlnaHQnLFxuICByaWdodDogJ2xlZnQnLFxuICBib3R0b206ICd0b3AnLFxuICB0b3A6ICdib3R0b20nXG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvbGVmdHxyaWdodHxib3R0b218dG9wL2csIGZ1bmN0aW9uIChtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGhhc2hbbWF0Y2hlZF07XG4gIH0pO1xufSIsICJ2YXIgaGFzaCA9IHtcbiAgc3RhcnQ6ICdlbmQnLFxuICBlbmQ6ICdzdGFydCdcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9zdGFydHxlbmQvZywgZnVuY3Rpb24gKG1hdGNoZWQpIHtcbiAgICByZXR1cm4gaGFzaFttYXRjaGVkXTtcbiAgfSk7XG59IiwgImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGwobm9kZSkge1xuICB2YXIgd2luID0gZ2V0V2luZG93KG5vZGUpO1xuICB2YXIgc2Nyb2xsTGVmdCA9IHdpbi5wYWdlWE9mZnNldDtcbiAgdmFyIHNjcm9sbFRvcCA9IHdpbi5wYWdlWU9mZnNldDtcbiAgcmV0dXJuIHtcbiAgICBzY3JvbGxMZWZ0OiBzY3JvbGxMZWZ0LFxuICAgIHNjcm9sbFRvcDogc2Nyb2xsVG9wXG4gIH07XG59IiwgImltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4vZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGwuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCkge1xuICAvLyBJZiA8aHRtbD4gaGFzIGEgQ1NTIHdpZHRoIGdyZWF0ZXIgdGhhbiB0aGUgdmlld3BvcnQsIHRoZW4gdGhpcyB3aWxsIGJlXG4gIC8vIGluY29ycmVjdCBmb3IgUlRMLlxuICAvLyBQb3BwZXIgMSBpcyBicm9rZW4gaW4gdGhpcyBjYXNlIGFuZCBuZXZlciBoYWQgYSBidWcgcmVwb3J0IHNvIGxldCdzIGFzc3VtZVxuICAvLyBpdCdzIG5vdCBhbiBpc3N1ZS4gSSBkb24ndCB0aGluayBhbnlvbmUgZXZlciBzcGVjaWZpZXMgd2lkdGggb24gPGh0bWw+XG4gIC8vIGFueXdheS5cbiAgLy8gQnJvd3NlcnMgd2hlcmUgdGhlIGxlZnQgc2Nyb2xsYmFyIGRvZXNuJ3QgY2F1c2UgYW4gaXNzdWUgcmVwb3J0IGAwYCBmb3JcbiAgLy8gdGhpcyAoZS5nLiBFZGdlIDIwMTksIElFMTEsIFNhZmFyaSlcbiAgcmV0dXJuIGdldEJvdW5kaW5nQ2xpZW50UmVjdChnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkpLmxlZnQgKyBnZXRXaW5kb3dTY3JvbGwoZWxlbWVudCkuc2Nyb2xsTGVmdDtcbn0iLCAiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsQmFyWCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGxCYXJYLmpzXCI7XG5pbXBvcnQgaXNMYXlvdXRWaWV3cG9ydCBmcm9tIFwiLi9pc0xheW91dFZpZXdwb3J0LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRWaWV3cG9ydFJlY3QoZWxlbWVudCwgc3RyYXRlZ3kpIHtcbiAgdmFyIHdpbiA9IGdldFdpbmRvdyhlbGVtZW50KTtcbiAgdmFyIGh0bWwgPSBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCk7XG4gIHZhciB2aXN1YWxWaWV3cG9ydCA9IHdpbi52aXN1YWxWaWV3cG9ydDtcbiAgdmFyIHdpZHRoID0gaHRtbC5jbGllbnRXaWR0aDtcbiAgdmFyIGhlaWdodCA9IGh0bWwuY2xpZW50SGVpZ2h0O1xuICB2YXIgeCA9IDA7XG4gIHZhciB5ID0gMDtcblxuICBpZiAodmlzdWFsVmlld3BvcnQpIHtcbiAgICB3aWR0aCA9IHZpc3VhbFZpZXdwb3J0LndpZHRoO1xuICAgIGhlaWdodCA9IHZpc3VhbFZpZXdwb3J0LmhlaWdodDtcbiAgICB2YXIgbGF5b3V0Vmlld3BvcnQgPSBpc0xheW91dFZpZXdwb3J0KCk7XG5cbiAgICBpZiAobGF5b3V0Vmlld3BvcnQgfHwgIWxheW91dFZpZXdwb3J0ICYmIHN0cmF0ZWd5ID09PSAnZml4ZWQnKSB7XG4gICAgICB4ID0gdmlzdWFsVmlld3BvcnQub2Zmc2V0TGVmdDtcbiAgICAgIHkgPSB2aXN1YWxWaWV3cG9ydC5vZmZzZXRUb3A7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgeDogeCArIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCksXG4gICAgeTogeVxuICB9O1xufSIsICJpbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbEJhclggZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsQmFyWC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGwuanNcIjtcbmltcG9ydCB7IG1heCB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7IC8vIEdldHMgdGhlIGVudGlyZSBzaXplIG9mIHRoZSBzY3JvbGxhYmxlIGRvY3VtZW50IGFyZWEsIGV2ZW4gZXh0ZW5kaW5nIG91dHNpZGVcbi8vIG9mIHRoZSBgPGh0bWw+YCBhbmQgYDxib2R5PmAgcmVjdCBib3VuZHMgaWYgaG9yaXpvbnRhbGx5IHNjcm9sbGFibGVcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RG9jdW1lbnRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIF9lbGVtZW50JG93bmVyRG9jdW1lbjtcblxuICB2YXIgaHRtbCA9IGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KTtcbiAgdmFyIHdpblNjcm9sbCA9IGdldFdpbmRvd1Njcm9sbChlbGVtZW50KTtcbiAgdmFyIGJvZHkgPSAoX2VsZW1lbnQkb3duZXJEb2N1bWVuID0gZWxlbWVudC5vd25lckRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX2VsZW1lbnQkb3duZXJEb2N1bWVuLmJvZHk7XG4gIHZhciB3aWR0aCA9IG1heChodG1sLnNjcm9sbFdpZHRoLCBodG1sLmNsaWVudFdpZHRoLCBib2R5ID8gYm9keS5zY3JvbGxXaWR0aCA6IDAsIGJvZHkgPyBib2R5LmNsaWVudFdpZHRoIDogMCk7XG4gIHZhciBoZWlnaHQgPSBtYXgoaHRtbC5zY3JvbGxIZWlnaHQsIGh0bWwuY2xpZW50SGVpZ2h0LCBib2R5ID8gYm9keS5zY3JvbGxIZWlnaHQgOiAwLCBib2R5ID8gYm9keS5jbGllbnRIZWlnaHQgOiAwKTtcbiAgdmFyIHggPSAtd2luU2Nyb2xsLnNjcm9sbExlZnQgKyBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpO1xuICB2YXIgeSA9IC13aW5TY3JvbGwuc2Nyb2xsVG9wO1xuXG4gIGlmIChnZXRDb21wdXRlZFN0eWxlKGJvZHkgfHwgaHRtbCkuZGlyZWN0aW9uID09PSAncnRsJykge1xuICAgIHggKz0gbWF4KGh0bWwuY2xpZW50V2lkdGgsIGJvZHkgPyBib2R5LmNsaWVudFdpZHRoIDogMCkgLSB3aWR0aDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIHg6IHgsXG4gICAgeTogeVxuICB9O1xufSIsICJpbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1Njcm9sbFBhcmVudChlbGVtZW50KSB7XG4gIC8vIEZpcmVmb3ggd2FudHMgdXMgdG8gY2hlY2sgYC14YCBhbmQgYC15YCB2YXJpYXRpb25zIGFzIHdlbGxcbiAgdmFyIF9nZXRDb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KSxcbiAgICAgIG92ZXJmbG93ID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3csXG4gICAgICBvdmVyZmxvd1ggPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvd1gsXG4gICAgICBvdmVyZmxvd1kgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvd1k7XG5cbiAgcmV0dXJuIC9hdXRvfHNjcm9sbHxvdmVybGF5fGhpZGRlbi8udGVzdChvdmVyZmxvdyArIG92ZXJmbG93WSArIG92ZXJmbG93WCk7XG59IiwgImltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gXCIuL2dldFBhcmVudE5vZGUuanNcIjtcbmltcG9ydCBpc1Njcm9sbFBhcmVudCBmcm9tIFwiLi9pc1Njcm9sbFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0U2Nyb2xsUGFyZW50KG5vZGUpIHtcbiAgaWYgKFsnaHRtbCcsICdib2R5JywgJyNkb2N1bWVudCddLmluZGV4T2YoZ2V0Tm9kZU5hbWUobm9kZSkpID49IDApIHtcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBhc3N1bWUgYm9keSBpcyBhbHdheXMgYXZhaWxhYmxlXG4gICAgcmV0dXJuIG5vZGUub3duZXJEb2N1bWVudC5ib2R5O1xuICB9XG5cbiAgaWYgKGlzSFRNTEVsZW1lbnQobm9kZSkgJiYgaXNTY3JvbGxQYXJlbnQobm9kZSkpIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHJldHVybiBnZXRTY3JvbGxQYXJlbnQoZ2V0UGFyZW50Tm9kZShub2RlKSk7XG59IiwgImltcG9ydCBnZXRTY3JvbGxQYXJlbnQgZnJvbSBcIi4vZ2V0U2Nyb2xsUGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tIFwiLi9nZXRQYXJlbnROb2RlLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGlzU2Nyb2xsUGFyZW50IGZyb20gXCIuL2lzU2Nyb2xsUGFyZW50LmpzXCI7XG4vKlxuZ2l2ZW4gYSBET00gZWxlbWVudCwgcmV0dXJuIHRoZSBsaXN0IG9mIGFsbCBzY3JvbGwgcGFyZW50cywgdXAgdGhlIGxpc3Qgb2YgYW5jZXNvcnNcbnVudGlsIHdlIGdldCB0byB0aGUgdG9wIHdpbmRvdyBvYmplY3QuIFRoaXMgbGlzdCBpcyB3aGF0IHdlIGF0dGFjaCBzY3JvbGwgbGlzdGVuZXJzXG50bywgYmVjYXVzZSBpZiBhbnkgb2YgdGhlc2UgcGFyZW50IGVsZW1lbnRzIHNjcm9sbCwgd2UnbGwgbmVlZCB0byByZS1jYWxjdWxhdGUgdGhlXG5yZWZlcmVuY2UgZWxlbWVudCdzIHBvc2l0aW9uLlxuKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlzdFNjcm9sbFBhcmVudHMoZWxlbWVudCwgbGlzdCkge1xuICB2YXIgX2VsZW1lbnQkb3duZXJEb2N1bWVuO1xuXG4gIGlmIChsaXN0ID09PSB2b2lkIDApIHtcbiAgICBsaXN0ID0gW107XG4gIH1cblxuICB2YXIgc2Nyb2xsUGFyZW50ID0gZ2V0U2Nyb2xsUGFyZW50KGVsZW1lbnQpO1xuICB2YXIgaXNCb2R5ID0gc2Nyb2xsUGFyZW50ID09PSAoKF9lbGVtZW50JG93bmVyRG9jdW1lbiA9IGVsZW1lbnQub3duZXJEb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9lbGVtZW50JG93bmVyRG9jdW1lbi5ib2R5KTtcbiAgdmFyIHdpbiA9IGdldFdpbmRvdyhzY3JvbGxQYXJlbnQpO1xuICB2YXIgdGFyZ2V0ID0gaXNCb2R5ID8gW3dpbl0uY29uY2F0KHdpbi52aXN1YWxWaWV3cG9ydCB8fCBbXSwgaXNTY3JvbGxQYXJlbnQoc2Nyb2xsUGFyZW50KSA/IHNjcm9sbFBhcmVudCA6IFtdKSA6IHNjcm9sbFBhcmVudDtcbiAgdmFyIHVwZGF0ZWRMaXN0ID0gbGlzdC5jb25jYXQodGFyZ2V0KTtcbiAgcmV0dXJuIGlzQm9keSA/IHVwZGF0ZWRMaXN0IDogLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtY2FsbF06IGlzQm9keSB0ZWxscyB1cyB0YXJnZXQgd2lsbCBiZSBhbiBIVE1MRWxlbWVudCBoZXJlXG4gIHVwZGF0ZWRMaXN0LmNvbmNhdChsaXN0U2Nyb2xsUGFyZW50cyhnZXRQYXJlbnROb2RlKHRhcmdldCkpKTtcbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVjdFRvQ2xpZW50UmVjdChyZWN0KSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCByZWN0LCB7XG4gICAgbGVmdDogcmVjdC54LFxuICAgIHRvcDogcmVjdC55LFxuICAgIHJpZ2h0OiByZWN0LnggKyByZWN0LndpZHRoLFxuICAgIGJvdHRvbTogcmVjdC55ICsgcmVjdC5oZWlnaHRcbiAgfSk7XG59IiwgImltcG9ydCB7IHZpZXdwb3J0IH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZ2V0Vmlld3BvcnRSZWN0IGZyb20gXCIuL2dldFZpZXdwb3J0UmVjdC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50UmVjdCBmcm9tIFwiLi9nZXREb2N1bWVudFJlY3QuanNcIjtcbmltcG9ydCBsaXN0U2Nyb2xsUGFyZW50cyBmcm9tIFwiLi9saXN0U2Nyb2xsUGFyZW50cy5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgeyBpc0VsZW1lbnQsIGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSBcIi4vZ2V0UGFyZW50Tm9kZS5qc1wiO1xuaW1wb3J0IGNvbnRhaW5zIGZyb20gXCIuL2NvbnRhaW5zLmpzXCI7XG5pbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCByZWN0VG9DbGllbnRSZWN0IGZyb20gXCIuLi91dGlscy9yZWN0VG9DbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgeyBtYXgsIG1pbiB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7XG5cbmZ1bmN0aW9uIGdldElubmVyQm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQsIHN0cmF0ZWd5KSB7XG4gIHZhciByZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQsIGZhbHNlLCBzdHJhdGVneSA9PT0gJ2ZpeGVkJyk7XG4gIHJlY3QudG9wID0gcmVjdC50b3AgKyBlbGVtZW50LmNsaWVudFRvcDtcbiAgcmVjdC5sZWZ0ID0gcmVjdC5sZWZ0ICsgZWxlbWVudC5jbGllbnRMZWZ0O1xuICByZWN0LmJvdHRvbSA9IHJlY3QudG9wICsgZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gIHJlY3QucmlnaHQgPSByZWN0LmxlZnQgKyBlbGVtZW50LmNsaWVudFdpZHRoO1xuICByZWN0LndpZHRoID0gZWxlbWVudC5jbGllbnRXaWR0aDtcbiAgcmVjdC5oZWlnaHQgPSBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgcmVjdC54ID0gcmVjdC5sZWZ0O1xuICByZWN0LnkgPSByZWN0LnRvcDtcbiAgcmV0dXJuIHJlY3Q7XG59XG5cbmZ1bmN0aW9uIGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGNsaXBwaW5nUGFyZW50LCBzdHJhdGVneSkge1xuICByZXR1cm4gY2xpcHBpbmdQYXJlbnQgPT09IHZpZXdwb3J0ID8gcmVjdFRvQ2xpZW50UmVjdChnZXRWaWV3cG9ydFJlY3QoZWxlbWVudCwgc3RyYXRlZ3kpKSA6IGlzRWxlbWVudChjbGlwcGluZ1BhcmVudCkgPyBnZXRJbm5lckJvdW5kaW5nQ2xpZW50UmVjdChjbGlwcGluZ1BhcmVudCwgc3RyYXRlZ3kpIDogcmVjdFRvQ2xpZW50UmVjdChnZXREb2N1bWVudFJlY3QoZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpKSk7XG59IC8vIEEgXCJjbGlwcGluZyBwYXJlbnRcIiBpcyBhbiBvdmVyZmxvd2FibGUgY29udGFpbmVyIHdpdGggdGhlIGNoYXJhY3RlcmlzdGljIG9mXG4vLyBjbGlwcGluZyAob3IgaGlkaW5nKSBvdmVyZmxvd2luZyBlbGVtZW50cyB3aXRoIGEgcG9zaXRpb24gZGlmZmVyZW50IGZyb21cbi8vIGBpbml0aWFsYFxuXG5cbmZ1bmN0aW9uIGdldENsaXBwaW5nUGFyZW50cyhlbGVtZW50KSB7XG4gIHZhciBjbGlwcGluZ1BhcmVudHMgPSBsaXN0U2Nyb2xsUGFyZW50cyhnZXRQYXJlbnROb2RlKGVsZW1lbnQpKTtcbiAgdmFyIGNhbkVzY2FwZUNsaXBwaW5nID0gWydhYnNvbHV0ZScsICdmaXhlZCddLmluZGV4T2YoZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbikgPj0gMDtcbiAgdmFyIGNsaXBwZXJFbGVtZW50ID0gY2FuRXNjYXBlQ2xpcHBpbmcgJiYgaXNIVE1MRWxlbWVudChlbGVtZW50KSA/IGdldE9mZnNldFBhcmVudChlbGVtZW50KSA6IGVsZW1lbnQ7XG5cbiAgaWYgKCFpc0VsZW1lbnQoY2xpcHBlckVsZW1lbnQpKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mbG93L2lzc3Vlcy8xNDE0XG5cblxuICByZXR1cm4gY2xpcHBpbmdQYXJlbnRzLmZpbHRlcihmdW5jdGlvbiAoY2xpcHBpbmdQYXJlbnQpIHtcbiAgICByZXR1cm4gaXNFbGVtZW50KGNsaXBwaW5nUGFyZW50KSAmJiBjb250YWlucyhjbGlwcGluZ1BhcmVudCwgY2xpcHBlckVsZW1lbnQpICYmIGdldE5vZGVOYW1lKGNsaXBwaW5nUGFyZW50KSAhPT0gJ2JvZHknO1xuICB9KTtcbn0gLy8gR2V0cyB0aGUgbWF4aW11bSBhcmVhIHRoYXQgdGhlIGVsZW1lbnQgaXMgdmlzaWJsZSBpbiBkdWUgdG8gYW55IG51bWJlciBvZlxuLy8gY2xpcHBpbmcgcGFyZW50c1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENsaXBwaW5nUmVjdChlbGVtZW50LCBib3VuZGFyeSwgcm9vdEJvdW5kYXJ5LCBzdHJhdGVneSkge1xuICB2YXIgbWFpbkNsaXBwaW5nUGFyZW50cyA9IGJvdW5kYXJ5ID09PSAnY2xpcHBpbmdQYXJlbnRzJyA/IGdldENsaXBwaW5nUGFyZW50cyhlbGVtZW50KSA6IFtdLmNvbmNhdChib3VuZGFyeSk7XG4gIHZhciBjbGlwcGluZ1BhcmVudHMgPSBbXS5jb25jYXQobWFpbkNsaXBwaW5nUGFyZW50cywgW3Jvb3RCb3VuZGFyeV0pO1xuICB2YXIgZmlyc3RDbGlwcGluZ1BhcmVudCA9IGNsaXBwaW5nUGFyZW50c1swXTtcbiAgdmFyIGNsaXBwaW5nUmVjdCA9IGNsaXBwaW5nUGFyZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjY1JlY3QsIGNsaXBwaW5nUGFyZW50KSB7XG4gICAgdmFyIHJlY3QgPSBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBjbGlwcGluZ1BhcmVudCwgc3RyYXRlZ3kpO1xuICAgIGFjY1JlY3QudG9wID0gbWF4KHJlY3QudG9wLCBhY2NSZWN0LnRvcCk7XG4gICAgYWNjUmVjdC5yaWdodCA9IG1pbihyZWN0LnJpZ2h0LCBhY2NSZWN0LnJpZ2h0KTtcbiAgICBhY2NSZWN0LmJvdHRvbSA9IG1pbihyZWN0LmJvdHRvbSwgYWNjUmVjdC5ib3R0b20pO1xuICAgIGFjY1JlY3QubGVmdCA9IG1heChyZWN0LmxlZnQsIGFjY1JlY3QubGVmdCk7XG4gICAgcmV0dXJuIGFjY1JlY3Q7XG4gIH0sIGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGZpcnN0Q2xpcHBpbmdQYXJlbnQsIHN0cmF0ZWd5KSk7XG4gIGNsaXBwaW5nUmVjdC53aWR0aCA9IGNsaXBwaW5nUmVjdC5yaWdodCAtIGNsaXBwaW5nUmVjdC5sZWZ0O1xuICBjbGlwcGluZ1JlY3QuaGVpZ2h0ID0gY2xpcHBpbmdSZWN0LmJvdHRvbSAtIGNsaXBwaW5nUmVjdC50b3A7XG4gIGNsaXBwaW5nUmVjdC54ID0gY2xpcHBpbmdSZWN0LmxlZnQ7XG4gIGNsaXBwaW5nUmVjdC55ID0gY2xpcHBpbmdSZWN0LnRvcDtcbiAgcmV0dXJuIGNsaXBwaW5nUmVjdDtcbn0iLCAiaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4vZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi9nZXRWYXJpYXRpb24uanNcIjtcbmltcG9ydCBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQgZnJvbSBcIi4vZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgeyB0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQsIHN0YXJ0LCBlbmQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVPZmZzZXRzKF9yZWYpIHtcbiAgdmFyIHJlZmVyZW5jZSA9IF9yZWYucmVmZXJlbmNlLFxuICAgICAgZWxlbWVudCA9IF9yZWYuZWxlbWVudCxcbiAgICAgIHBsYWNlbWVudCA9IF9yZWYucGxhY2VtZW50O1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IHBsYWNlbWVudCA/IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSA6IG51bGw7XG4gIHZhciB2YXJpYXRpb24gPSBwbGFjZW1lbnQgPyBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSA6IG51bGw7XG4gIHZhciBjb21tb25YID0gcmVmZXJlbmNlLnggKyByZWZlcmVuY2Uud2lkdGggLyAyIC0gZWxlbWVudC53aWR0aCAvIDI7XG4gIHZhciBjb21tb25ZID0gcmVmZXJlbmNlLnkgKyByZWZlcmVuY2UuaGVpZ2h0IC8gMiAtIGVsZW1lbnQuaGVpZ2h0IC8gMjtcbiAgdmFyIG9mZnNldHM7XG5cbiAgc3dpdGNoIChiYXNlUGxhY2VtZW50KSB7XG4gICAgY2FzZSB0b3A6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiBjb21tb25YLFxuICAgICAgICB5OiByZWZlcmVuY2UueSAtIGVsZW1lbnQuaGVpZ2h0XG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIGJvdHRvbTpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IGNvbW1vblgsXG4gICAgICAgIHk6IHJlZmVyZW5jZS55ICsgcmVmZXJlbmNlLmhlaWdodFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSByaWdodDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZS54ICsgcmVmZXJlbmNlLndpZHRoLFxuICAgICAgICB5OiBjb21tb25ZXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIGxlZnQ6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCAtIGVsZW1lbnQud2lkdGgsXG4gICAgICAgIHk6IGNvbW1vbllcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnlcbiAgICAgIH07XG4gIH1cblxuICB2YXIgbWFpbkF4aXMgPSBiYXNlUGxhY2VtZW50ID8gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpIDogbnVsbDtcblxuICBpZiAobWFpbkF4aXMgIT0gbnVsbCkge1xuICAgIHZhciBsZW4gPSBtYWluQXhpcyA9PT0gJ3knID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gICAgc3dpdGNoICh2YXJpYXRpb24pIHtcbiAgICAgIGNhc2Ugc3RhcnQ6XG4gICAgICAgIG9mZnNldHNbbWFpbkF4aXNdID0gb2Zmc2V0c1ttYWluQXhpc10gLSAocmVmZXJlbmNlW2xlbl0gLyAyIC0gZWxlbWVudFtsZW5dIC8gMik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIGVuZDpcbiAgICAgICAgb2Zmc2V0c1ttYWluQXhpc10gPSBvZmZzZXRzW21haW5BeGlzXSArIChyZWZlcmVuY2VbbGVuXSAvIDIgLSBlbGVtZW50W2xlbl0gLyAyKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9mZnNldHM7XG59IiwgImltcG9ydCBnZXRDbGlwcGluZ1JlY3QgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRDbGlwcGluZ1JlY3QuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4uL2RvbS11dGlscy9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCBjb21wdXRlT2Zmc2V0cyBmcm9tIFwiLi9jb21wdXRlT2Zmc2V0cy5qc1wiO1xuaW1wb3J0IHJlY3RUb0NsaWVudFJlY3QgZnJvbSBcIi4vcmVjdFRvQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IHsgY2xpcHBpbmdQYXJlbnRzLCByZWZlcmVuY2UsIHBvcHBlciwgYm90dG9tLCB0b3AsIHJpZ2h0LCBiYXNlUGxhY2VtZW50cywgdmlld3BvcnQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCB7IGlzRWxlbWVudCB9IGZyb20gXCIuLi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IG1lcmdlUGFkZGluZ09iamVjdCBmcm9tIFwiLi9tZXJnZVBhZGRpbmdPYmplY3QuanNcIjtcbmltcG9ydCBleHBhbmRUb0hhc2hNYXAgZnJvbSBcIi4vZXhwYW5kVG9IYXNoTWFwLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICBfb3B0aW9ucyRwbGFjZW1lbnQgPSBfb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICBwbGFjZW1lbnQgPSBfb3B0aW9ucyRwbGFjZW1lbnQgPT09IHZvaWQgMCA/IHN0YXRlLnBsYWNlbWVudCA6IF9vcHRpb25zJHBsYWNlbWVudCxcbiAgICAgIF9vcHRpb25zJHN0cmF0ZWd5ID0gX29wdGlvbnMuc3RyYXRlZ3ksXG4gICAgICBzdHJhdGVneSA9IF9vcHRpb25zJHN0cmF0ZWd5ID09PSB2b2lkIDAgPyBzdGF0ZS5zdHJhdGVneSA6IF9vcHRpb25zJHN0cmF0ZWd5LFxuICAgICAgX29wdGlvbnMkYm91bmRhcnkgPSBfb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIGJvdW5kYXJ5ID0gX29wdGlvbnMkYm91bmRhcnkgPT09IHZvaWQgMCA/IGNsaXBwaW5nUGFyZW50cyA6IF9vcHRpb25zJGJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMkcm9vdEJvdW5kYXJ5ID09PSB2b2lkIDAgPyB2aWV3cG9ydCA6IF9vcHRpb25zJHJvb3RCb3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJGVsZW1lbnRDb250ZSA9IF9vcHRpb25zLmVsZW1lbnRDb250ZXh0LFxuICAgICAgZWxlbWVudENvbnRleHQgPSBfb3B0aW9ucyRlbGVtZW50Q29udGUgPT09IHZvaWQgMCA/IHBvcHBlciA6IF9vcHRpb25zJGVsZW1lbnRDb250ZSxcbiAgICAgIF9vcHRpb25zJGFsdEJvdW5kYXJ5ID0gX29wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeSA9IF9vcHRpb25zJGFsdEJvdW5kYXJ5ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9vcHRpb25zJGFsdEJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkcGFkZGluZyA9IF9vcHRpb25zLnBhZGRpbmcsXG4gICAgICBwYWRkaW5nID0gX29wdGlvbnMkcGFkZGluZyA9PT0gdm9pZCAwID8gMCA6IF9vcHRpb25zJHBhZGRpbmc7XG4gIHZhciBwYWRkaW5nT2JqZWN0ID0gbWVyZ2VQYWRkaW5nT2JqZWN0KHR5cGVvZiBwYWRkaW5nICE9PSAnbnVtYmVyJyA/IHBhZGRpbmcgOiBleHBhbmRUb0hhc2hNYXAocGFkZGluZywgYmFzZVBsYWNlbWVudHMpKTtcbiAgdmFyIGFsdENvbnRleHQgPSBlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyID8gcmVmZXJlbmNlIDogcG9wcGVyO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIGVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50c1thbHRCb3VuZGFyeSA/IGFsdENvbnRleHQgOiBlbGVtZW50Q29udGV4dF07XG4gIHZhciBjbGlwcGluZ0NsaWVudFJlY3QgPSBnZXRDbGlwcGluZ1JlY3QoaXNFbGVtZW50KGVsZW1lbnQpID8gZWxlbWVudCA6IGVsZW1lbnQuY29udGV4dEVsZW1lbnQgfHwgZ2V0RG9jdW1lbnRFbGVtZW50KHN0YXRlLmVsZW1lbnRzLnBvcHBlciksIGJvdW5kYXJ5LCByb290Qm91bmRhcnksIHN0cmF0ZWd5KTtcbiAgdmFyIHJlZmVyZW5jZUNsaWVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3Qoc3RhdGUuZWxlbWVudHMucmVmZXJlbmNlKTtcbiAgdmFyIHBvcHBlck9mZnNldHMgPSBjb21wdXRlT2Zmc2V0cyh7XG4gICAgcmVmZXJlbmNlOiByZWZlcmVuY2VDbGllbnRSZWN0LFxuICAgIGVsZW1lbnQ6IHBvcHBlclJlY3QsXG4gICAgc3RyYXRlZ3k6ICdhYnNvbHV0ZScsXG4gICAgcGxhY2VtZW50OiBwbGFjZW1lbnRcbiAgfSk7XG4gIHZhciBwb3BwZXJDbGllbnRSZWN0ID0gcmVjdFRvQ2xpZW50UmVjdChPYmplY3QuYXNzaWduKHt9LCBwb3BwZXJSZWN0LCBwb3BwZXJPZmZzZXRzKSk7XG4gIHZhciBlbGVtZW50Q2xpZW50UmVjdCA9IGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgPyBwb3BwZXJDbGllbnRSZWN0IDogcmVmZXJlbmNlQ2xpZW50UmVjdDsgLy8gcG9zaXRpdmUgPSBvdmVyZmxvd2luZyB0aGUgY2xpcHBpbmcgcmVjdFxuICAvLyAwIG9yIG5lZ2F0aXZlID0gd2l0aGluIHRoZSBjbGlwcGluZyByZWN0XG5cbiAgdmFyIG92ZXJmbG93T2Zmc2V0cyA9IHtcbiAgICB0b3A6IGNsaXBwaW5nQ2xpZW50UmVjdC50b3AgLSBlbGVtZW50Q2xpZW50UmVjdC50b3AgKyBwYWRkaW5nT2JqZWN0LnRvcCxcbiAgICBib3R0b206IGVsZW1lbnRDbGllbnRSZWN0LmJvdHRvbSAtIGNsaXBwaW5nQ2xpZW50UmVjdC5ib3R0b20gKyBwYWRkaW5nT2JqZWN0LmJvdHRvbSxcbiAgICBsZWZ0OiBjbGlwcGluZ0NsaWVudFJlY3QubGVmdCAtIGVsZW1lbnRDbGllbnRSZWN0LmxlZnQgKyBwYWRkaW5nT2JqZWN0LmxlZnQsXG4gICAgcmlnaHQ6IGVsZW1lbnRDbGllbnRSZWN0LnJpZ2h0IC0gY2xpcHBpbmdDbGllbnRSZWN0LnJpZ2h0ICsgcGFkZGluZ09iamVjdC5yaWdodFxuICB9O1xuICB2YXIgb2Zmc2V0RGF0YSA9IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0OyAvLyBPZmZzZXRzIGNhbiBiZSBhcHBsaWVkIG9ubHkgdG8gdGhlIHBvcHBlciBlbGVtZW50XG5cbiAgaWYgKGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgJiYgb2Zmc2V0RGF0YSkge1xuICAgIHZhciBvZmZzZXQgPSBvZmZzZXREYXRhW3BsYWNlbWVudF07XG4gICAgT2JqZWN0LmtleXMob3ZlcmZsb3dPZmZzZXRzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBtdWx0aXBseSA9IFtyaWdodCwgYm90dG9tXS5pbmRleE9mKGtleSkgPj0gMCA/IDEgOiAtMTtcbiAgICAgIHZhciBheGlzID0gW3RvcCwgYm90dG9tXS5pbmRleE9mKGtleSkgPj0gMCA/ICd5JyA6ICd4JztcbiAgICAgIG92ZXJmbG93T2Zmc2V0c1trZXldICs9IG9mZnNldFtheGlzXSAqIG11bHRpcGx5O1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG92ZXJmbG93T2Zmc2V0cztcbn0iLCAiaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi9nZXRWYXJpYXRpb24uanNcIjtcbmltcG9ydCB7IHZhcmlhdGlvblBsYWNlbWVudHMsIGJhc2VQbGFjZW1lbnRzLCBwbGFjZW1lbnRzIGFzIGFsbFBsYWNlbWVudHMgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tIFwiLi9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4vZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZUF1dG9QbGFjZW1lbnQoc3RhdGUsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICBwbGFjZW1lbnQgPSBfb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeSA9IF9vcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZyA9IF9vcHRpb25zLnBhZGRpbmcsXG4gICAgICBmbGlwVmFyaWF0aW9ucyA9IF9vcHRpb25zLmZsaXBWYXJpYXRpb25zLFxuICAgICAgX29wdGlvbnMkYWxsb3dlZEF1dG9QID0gX29wdGlvbnMuYWxsb3dlZEF1dG9QbGFjZW1lbnRzLFxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzID0gX29wdGlvbnMkYWxsb3dlZEF1dG9QID09PSB2b2lkIDAgPyBhbGxQbGFjZW1lbnRzIDogX29wdGlvbnMkYWxsb3dlZEF1dG9QO1xuICB2YXIgdmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCk7XG4gIHZhciBwbGFjZW1lbnRzID0gdmFyaWF0aW9uID8gZmxpcFZhcmlhdGlvbnMgPyB2YXJpYXRpb25QbGFjZW1lbnRzIDogdmFyaWF0aW9uUGxhY2VtZW50cy5maWx0ZXIoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgIHJldHVybiBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSA9PT0gdmFyaWF0aW9uO1xuICB9KSA6IGJhc2VQbGFjZW1lbnRzO1xuICB2YXIgYWxsb3dlZFBsYWNlbWVudHMgPSBwbGFjZW1lbnRzLmZpbHRlcihmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGFsbG93ZWRBdXRvUGxhY2VtZW50cy5pbmRleE9mKHBsYWNlbWVudCkgPj0gMDtcbiAgfSk7XG5cbiAgaWYgKGFsbG93ZWRQbGFjZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIGFsbG93ZWRQbGFjZW1lbnRzID0gcGxhY2VtZW50cztcbiAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS10eXBlXTogRmxvdyBzZWVtcyB0byBoYXZlIHByb2JsZW1zIHdpdGggdHdvIGFycmF5IHVuaW9ucy4uLlxuXG5cbiAgdmFyIG92ZXJmbG93cyA9IGFsbG93ZWRQbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICBhY2NbcGxhY2VtZW50XSA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZzogcGFkZGluZ1xuICAgIH0pW2dldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KV07XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuICByZXR1cm4gT2JqZWN0LmtleXMob3ZlcmZsb3dzKS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIG92ZXJmbG93c1thXSAtIG92ZXJmbG93c1tiXTtcbiAgfSk7XG59IiwgImltcG9ydCBnZXRPcHBvc2l0ZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0T3Bwb3NpdGVQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4uL3V0aWxzL2RldGVjdE92ZXJmbG93LmpzXCI7XG5pbXBvcnQgY29tcHV0ZUF1dG9QbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2NvbXB1dGVBdXRvUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgeyBib3R0b20sIHRvcCwgc3RhcnQsIHJpZ2h0LCBsZWZ0LCBhdXRvIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZ2V0VmFyaWF0aW9uIGZyb20gXCIuLi91dGlscy9nZXRWYXJpYXRpb24uanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5mdW5jdGlvbiBnZXRFeHBhbmRlZEZhbGxiYWNrUGxhY2VtZW50cyhwbGFjZW1lbnQpIHtcbiAgaWYgKGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSA9PT0gYXV0bykge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHZhciBvcHBvc2l0ZVBsYWNlbWVudCA9IGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gIHJldHVybiBbZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQocGxhY2VtZW50KSwgb3Bwb3NpdGVQbGFjZW1lbnQsIGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KG9wcG9zaXRlUGxhY2VtZW50KV07XG59XG5cbmZ1bmN0aW9uIGZsaXAoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucyxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0uX3NraXApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgX29wdGlvbnMkbWFpbkF4aXMgPSBvcHRpb25zLm1haW5BeGlzLFxuICAgICAgY2hlY2tNYWluQXhpcyA9IF9vcHRpb25zJG1haW5BeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkbWFpbkF4aXMsXG4gICAgICBfb3B0aW9ucyRhbHRBeGlzID0gb3B0aW9ucy5hbHRBeGlzLFxuICAgICAgY2hlY2tBbHRBeGlzID0gX29wdGlvbnMkYWx0QXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGFsdEF4aXMsXG4gICAgICBzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMgPSBvcHRpb25zLmZhbGxiYWNrUGxhY2VtZW50cyxcbiAgICAgIHBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmcsXG4gICAgICBib3VuZGFyeSA9IG9wdGlvbnMuYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBvcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5ID0gb3B0aW9ucy5hbHRCb3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJGZsaXBWYXJpYXRpbyA9IG9wdGlvbnMuZmxpcFZhcmlhdGlvbnMsXG4gICAgICBmbGlwVmFyaWF0aW9ucyA9IF9vcHRpb25zJGZsaXBWYXJpYXRpbyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGZsaXBWYXJpYXRpbyxcbiAgICAgIGFsbG93ZWRBdXRvUGxhY2VtZW50cyA9IG9wdGlvbnMuYWxsb3dlZEF1dG9QbGFjZW1lbnRzO1xuICB2YXIgcHJlZmVycmVkUGxhY2VtZW50ID0gc3RhdGUub3B0aW9ucy5wbGFjZW1lbnQ7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChwcmVmZXJyZWRQbGFjZW1lbnQpO1xuICB2YXIgaXNCYXNlUGxhY2VtZW50ID0gYmFzZVBsYWNlbWVudCA9PT0gcHJlZmVycmVkUGxhY2VtZW50O1xuICB2YXIgZmFsbGJhY2tQbGFjZW1lbnRzID0gc3BlY2lmaWVkRmFsbGJhY2tQbGFjZW1lbnRzIHx8IChpc0Jhc2VQbGFjZW1lbnQgfHwgIWZsaXBWYXJpYXRpb25zID8gW2dldE9wcG9zaXRlUGxhY2VtZW50KHByZWZlcnJlZFBsYWNlbWVudCldIDogZ2V0RXhwYW5kZWRGYWxsYmFja1BsYWNlbWVudHMocHJlZmVycmVkUGxhY2VtZW50KSk7XG4gIHZhciBwbGFjZW1lbnRzID0gW3ByZWZlcnJlZFBsYWNlbWVudF0uY29uY2F0KGZhbGxiYWNrUGxhY2VtZW50cykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICAgIHJldHVybiBhY2MuY29uY2F0KGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSA9PT0gYXV0byA/IGNvbXB1dGVBdXRvUGxhY2VtZW50KHN0YXRlLCB7XG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZzogcGFkZGluZyxcbiAgICAgIGZsaXBWYXJpYXRpb25zOiBmbGlwVmFyaWF0aW9ucyxcbiAgICAgIGFsbG93ZWRBdXRvUGxhY2VtZW50czogYWxsb3dlZEF1dG9QbGFjZW1lbnRzXG4gICAgfSkgOiBwbGFjZW1lbnQpO1xuICB9LCBbXSk7XG4gIHZhciByZWZlcmVuY2VSZWN0ID0gc3RhdGUucmVjdHMucmVmZXJlbmNlO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIGNoZWNrc01hcCA9IG5ldyBNYXAoKTtcbiAgdmFyIG1ha2VGYWxsYmFja0NoZWNrcyA9IHRydWU7XG4gIHZhciBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnRzWzBdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGxhY2VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBwbGFjZW1lbnQgPSBwbGFjZW1lbnRzW2ldO1xuXG4gICAgdmFyIF9iYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuXG4gICAgdmFyIGlzU3RhcnRWYXJpYXRpb24gPSBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSA9PT0gc3RhcnQ7XG4gICAgdmFyIGlzVmVydGljYWwgPSBbdG9wLCBib3R0b21dLmluZGV4T2YoX2Jhc2VQbGFjZW1lbnQpID49IDA7XG4gICAgdmFyIGxlbiA9IGlzVmVydGljYWwgPyAnd2lkdGgnIDogJ2hlaWdodCc7XG4gICAgdmFyIG92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeTogYWx0Qm91bmRhcnksXG4gICAgICBwYWRkaW5nOiBwYWRkaW5nXG4gICAgfSk7XG4gICAgdmFyIG1haW5WYXJpYXRpb25TaWRlID0gaXNWZXJ0aWNhbCA/IGlzU3RhcnRWYXJpYXRpb24gPyByaWdodCA6IGxlZnQgOiBpc1N0YXJ0VmFyaWF0aW9uID8gYm90dG9tIDogdG9wO1xuXG4gICAgaWYgKHJlZmVyZW5jZVJlY3RbbGVuXSA+IHBvcHBlclJlY3RbbGVuXSkge1xuICAgICAgbWFpblZhcmlhdGlvblNpZGUgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChtYWluVmFyaWF0aW9uU2lkZSk7XG4gICAgfVxuXG4gICAgdmFyIGFsdFZhcmlhdGlvblNpZGUgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChtYWluVmFyaWF0aW9uU2lkZSk7XG4gICAgdmFyIGNoZWNrcyA9IFtdO1xuXG4gICAgaWYgKGNoZWNrTWFpbkF4aXMpIHtcbiAgICAgIGNoZWNrcy5wdXNoKG92ZXJmbG93W19iYXNlUGxhY2VtZW50XSA8PSAwKTtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tBbHRBeGlzKSB7XG4gICAgICBjaGVja3MucHVzaChvdmVyZmxvd1ttYWluVmFyaWF0aW9uU2lkZV0gPD0gMCwgb3ZlcmZsb3dbYWx0VmFyaWF0aW9uU2lkZV0gPD0gMCk7XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrcy5ldmVyeShmdW5jdGlvbiAoY2hlY2spIHtcbiAgICAgIHJldHVybiBjaGVjaztcbiAgICB9KSkge1xuICAgICAgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gcGxhY2VtZW50O1xuICAgICAgbWFrZUZhbGxiYWNrQ2hlY2tzID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjaGVja3NNYXAuc2V0KHBsYWNlbWVudCwgY2hlY2tzKTtcbiAgfVxuXG4gIGlmIChtYWtlRmFsbGJhY2tDaGVja3MpIHtcbiAgICAvLyBgMmAgbWF5IGJlIGRlc2lyZWQgaW4gc29tZSBjYXNlcyDigJMgcmVzZWFyY2ggbGF0ZXJcbiAgICB2YXIgbnVtYmVyT2ZDaGVja3MgPSBmbGlwVmFyaWF0aW9ucyA/IDMgOiAxO1xuXG4gICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoX2kpIHtcbiAgICAgIHZhciBmaXR0aW5nUGxhY2VtZW50ID0gcGxhY2VtZW50cy5maW5kKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICAgICAgdmFyIGNoZWNrcyA9IGNoZWNrc01hcC5nZXQocGxhY2VtZW50KTtcblxuICAgICAgICBpZiAoY2hlY2tzKSB7XG4gICAgICAgICAgcmV0dXJuIGNoZWNrcy5zbGljZSgwLCBfaSkuZXZlcnkoZnVuY3Rpb24gKGNoZWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hlY2s7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZml0dGluZ1BsYWNlbWVudCkge1xuICAgICAgICBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBmaXR0aW5nUGxhY2VtZW50O1xuICAgICAgICByZXR1cm4gXCJicmVha1wiO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmb3IgKHZhciBfaSA9IG51bWJlck9mQ2hlY2tzOyBfaSA+IDA7IF9pLS0pIHtcbiAgICAgIHZhciBfcmV0ID0gX2xvb3AoX2kpO1xuXG4gICAgICBpZiAoX3JldCA9PT0gXCJicmVha1wiKSBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoc3RhdGUucGxhY2VtZW50ICE9PSBmaXJzdEZpdHRpbmdQbGFjZW1lbnQpIHtcbiAgICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdLl9za2lwID0gdHJ1ZTtcbiAgICBzdGF0ZS5wbGFjZW1lbnQgPSBmaXJzdEZpdHRpbmdQbGFjZW1lbnQ7XG4gICAgc3RhdGUucmVzZXQgPSB0cnVlO1xuICB9XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdmbGlwJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgZm46IGZsaXAsXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsnb2Zmc2V0J10sXG4gIGRhdGE6IHtcbiAgICBfc2tpcDogZmFsc2VcbiAgfVxufTsiLCAiaW1wb3J0IHsgdG9wLCBib3R0b20sIGxlZnQsIHJpZ2h0IH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4uL3V0aWxzL2RldGVjdE92ZXJmbG93LmpzXCI7XG5cbmZ1bmN0aW9uIGdldFNpZGVPZmZzZXRzKG92ZXJmbG93LCByZWN0LCBwcmV2ZW50ZWRPZmZzZXRzKSB7XG4gIGlmIChwcmV2ZW50ZWRPZmZzZXRzID09PSB2b2lkIDApIHtcbiAgICBwcmV2ZW50ZWRPZmZzZXRzID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0b3A6IG92ZXJmbG93LnRvcCAtIHJlY3QuaGVpZ2h0IC0gcHJldmVudGVkT2Zmc2V0cy55LFxuICAgIHJpZ2h0OiBvdmVyZmxvdy5yaWdodCAtIHJlY3Qud2lkdGggKyBwcmV2ZW50ZWRPZmZzZXRzLngsXG4gICAgYm90dG9tOiBvdmVyZmxvdy5ib3R0b20gLSByZWN0LmhlaWdodCArIHByZXZlbnRlZE9mZnNldHMueSxcbiAgICBsZWZ0OiBvdmVyZmxvdy5sZWZ0IC0gcmVjdC53aWR0aCAtIHByZXZlbnRlZE9mZnNldHMueFxuICB9O1xufVxuXG5mdW5jdGlvbiBpc0FueVNpZGVGdWxseUNsaXBwZWQob3ZlcmZsb3cpIHtcbiAgcmV0dXJuIFt0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnRdLnNvbWUoZnVuY3Rpb24gKHNpZGUpIHtcbiAgICByZXR1cm4gb3ZlcmZsb3dbc2lkZV0gPj0gMDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhpZGUoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgcHJldmVudGVkT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucHJldmVudE92ZXJmbG93O1xuICB2YXIgcmVmZXJlbmNlT3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgIGVsZW1lbnRDb250ZXh0OiAncmVmZXJlbmNlJ1xuICB9KTtcbiAgdmFyIHBvcHBlckFsdE92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICBhbHRCb3VuZGFyeTogdHJ1ZVxuICB9KTtcbiAgdmFyIHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyA9IGdldFNpZGVPZmZzZXRzKHJlZmVyZW5jZU92ZXJmbG93LCByZWZlcmVuY2VSZWN0KTtcbiAgdmFyIHBvcHBlckVzY2FwZU9mZnNldHMgPSBnZXRTaWRlT2Zmc2V0cyhwb3BwZXJBbHRPdmVyZmxvdywgcG9wcGVyUmVjdCwgcHJldmVudGVkT2Zmc2V0cyk7XG4gIHZhciBpc1JlZmVyZW5jZUhpZGRlbiA9IGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChyZWZlcmVuY2VDbGlwcGluZ09mZnNldHMpO1xuICB2YXIgaGFzUG9wcGVyRXNjYXBlZCA9IGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChwb3BwZXJFc2NhcGVPZmZzZXRzKTtcbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IHtcbiAgICByZWZlcmVuY2VDbGlwcGluZ09mZnNldHM6IHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyxcbiAgICBwb3BwZXJFc2NhcGVPZmZzZXRzOiBwb3BwZXJFc2NhcGVPZmZzZXRzLFxuICAgIGlzUmVmZXJlbmNlSGlkZGVuOiBpc1JlZmVyZW5jZUhpZGRlbixcbiAgICBoYXNQb3BwZXJFc2NhcGVkOiBoYXNQb3BwZXJFc2NhcGVkXG4gIH07XG4gIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIsIHtcbiAgICAnZGF0YS1wb3BwZXItcmVmZXJlbmNlLWhpZGRlbic6IGlzUmVmZXJlbmNlSGlkZGVuLFxuICAgICdkYXRhLXBvcHBlci1lc2NhcGVkJzogaGFzUG9wcGVyRXNjYXBlZFxuICB9KTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2hpZGUnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ3ByZXZlbnRPdmVyZmxvdyddLFxuICBmbjogaGlkZVxufTsiLCAiaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCB7IHRvcCwgbGVmdCwgcmlnaHQsIHBsYWNlbWVudHMgfSBmcm9tIFwiLi4vZW51bXMuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzdGFuY2VBbmRTa2lkZGluZ1RvWFkocGxhY2VtZW50LCByZWN0cywgb2Zmc2V0KSB7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICB2YXIgaW52ZXJ0RGlzdGFuY2UgPSBbbGVmdCwgdG9wXS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDAgPyAtMSA6IDE7XG5cbiAgdmFyIF9yZWYgPSB0eXBlb2Ygb2Zmc2V0ID09PSAnZnVuY3Rpb24nID8gb2Zmc2V0KE9iamVjdC5hc3NpZ24oe30sIHJlY3RzLCB7XG4gICAgcGxhY2VtZW50OiBwbGFjZW1lbnRcbiAgfSkpIDogb2Zmc2V0LFxuICAgICAgc2tpZGRpbmcgPSBfcmVmWzBdLFxuICAgICAgZGlzdGFuY2UgPSBfcmVmWzFdO1xuXG4gIHNraWRkaW5nID0gc2tpZGRpbmcgfHwgMDtcbiAgZGlzdGFuY2UgPSAoZGlzdGFuY2UgfHwgMCkgKiBpbnZlcnREaXN0YW5jZTtcbiAgcmV0dXJuIFtsZWZ0LCByaWdodF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwID8ge1xuICAgIHg6IGRpc3RhbmNlLFxuICAgIHk6IHNraWRkaW5nXG4gIH0gOiB7XG4gICAgeDogc2tpZGRpbmcsXG4gICAgeTogZGlzdGFuY2VcbiAgfTtcbn1cblxuZnVuY3Rpb24gb2Zmc2V0KF9yZWYyKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYyLm9wdGlvbnMsXG4gICAgICBuYW1lID0gX3JlZjIubmFtZTtcbiAgdmFyIF9vcHRpb25zJG9mZnNldCA9IG9wdGlvbnMub2Zmc2V0LFxuICAgICAgb2Zmc2V0ID0gX29wdGlvbnMkb2Zmc2V0ID09PSB2b2lkIDAgPyBbMCwgMF0gOiBfb3B0aW9ucyRvZmZzZXQ7XG4gIHZhciBkYXRhID0gcGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgYWNjW3BsYWNlbWVudF0gPSBkaXN0YW5jZUFuZFNraWRkaW5nVG9YWShwbGFjZW1lbnQsIHN0YXRlLnJlY3RzLCBvZmZzZXQpO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbiAgdmFyIF9kYXRhJHN0YXRlJHBsYWNlbWVudCA9IGRhdGFbc3RhdGUucGxhY2VtZW50XSxcbiAgICAgIHggPSBfZGF0YSRzdGF0ZSRwbGFjZW1lbnQueCxcbiAgICAgIHkgPSBfZGF0YSRzdGF0ZSRwbGFjZW1lbnQueTtcblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzICE9IG51bGwpIHtcbiAgICBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMueCArPSB4O1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cy55ICs9IHk7XG4gIH1cblxuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gZGF0YTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ29mZnNldCcsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIHJlcXVpcmVzOiBbJ3BvcHBlck9mZnNldHMnXSxcbiAgZm46IG9mZnNldFxufTsiLCAiaW1wb3J0IGNvbXB1dGVPZmZzZXRzIGZyb20gXCIuLi91dGlscy9jb21wdXRlT2Zmc2V0cy5qc1wiO1xuXG5mdW5jdGlvbiBwb3BwZXJPZmZzZXRzKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG4gIC8vIE9mZnNldHMgYXJlIHRoZSBhY3R1YWwgcG9zaXRpb24gdGhlIHBvcHBlciBuZWVkcyB0byBoYXZlIHRvIGJlXG4gIC8vIHByb3Blcmx5IHBvc2l0aW9uZWQgbmVhciBpdHMgcmVmZXJlbmNlIGVsZW1lbnRcbiAgLy8gVGhpcyBpcyB0aGUgbW9zdCBiYXNpYyBwbGFjZW1lbnQsIGFuZCB3aWxsIGJlIGFkanVzdGVkIGJ5XG4gIC8vIHRoZSBtb2RpZmllcnMgaW4gdGhlIG5leHQgc3RlcFxuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gY29tcHV0ZU9mZnNldHMoe1xuICAgIHJlZmVyZW5jZTogc3RhdGUucmVjdHMucmVmZXJlbmNlLFxuICAgIGVsZW1lbnQ6IHN0YXRlLnJlY3RzLnBvcHBlcixcbiAgICBzdHJhdGVneTogJ2Fic29sdXRlJyxcbiAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudFxuICB9KTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3BvcHBlck9mZnNldHMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ3JlYWQnLFxuICBmbjogcG9wcGVyT2Zmc2V0cyxcbiAgZGF0YToge31cbn07IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEFsdEF4aXMoYXhpcykge1xuICByZXR1cm4gYXhpcyA9PT0gJ3gnID8gJ3knIDogJ3gnO1xufSIsICJpbXBvcnQgeyB0b3AsIGxlZnQsIHJpZ2h0LCBib3R0b20sIHN0YXJ0IH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0QWx0QXhpcyBmcm9tIFwiLi4vdXRpbHMvZ2V0QWx0QXhpcy5qc1wiO1xuaW1wb3J0IHsgd2l0aGluLCB3aXRoaW5NYXhDbGFtcCB9IGZyb20gXCIuLi91dGlscy93aXRoaW4uanNcIjtcbmltcG9ydCBnZXRMYXlvdXRSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuLi91dGlscy9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi4vdXRpbHMvZ2V0VmFyaWF0aW9uLmpzXCI7XG5pbXBvcnQgZ2V0RnJlc2hTaWRlT2JqZWN0IGZyb20gXCIuLi91dGlscy9nZXRGcmVzaFNpZGVPYmplY3QuanNcIjtcbmltcG9ydCB7IG1pbiBhcyBtYXRoTWluLCBtYXggYXMgbWF0aE1heCB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7XG5cbmZ1bmN0aW9uIHByZXZlbnRPdmVyZmxvdyhfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcbiAgdmFyIF9vcHRpb25zJG1haW5BeGlzID0gb3B0aW9ucy5tYWluQXhpcyxcbiAgICAgIGNoZWNrTWFpbkF4aXMgPSBfb3B0aW9ucyRtYWluQXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJG1haW5BeGlzLFxuICAgICAgX29wdGlvbnMkYWx0QXhpcyA9IG9wdGlvbnMuYWx0QXhpcyxcbiAgICAgIGNoZWNrQWx0QXhpcyA9IF9vcHRpb25zJGFsdEF4aXMgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkYWx0QXhpcyxcbiAgICAgIGJvdW5kYXJ5ID0gb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IG9wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnkgPSBvcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyxcbiAgICAgIF9vcHRpb25zJHRldGhlciA9IG9wdGlvbnMudGV0aGVyLFxuICAgICAgdGV0aGVyID0gX29wdGlvbnMkdGV0aGVyID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkdGV0aGVyLFxuICAgICAgX29wdGlvbnMkdGV0aGVyT2Zmc2V0ID0gb3B0aW9ucy50ZXRoZXJPZmZzZXQsXG4gICAgICB0ZXRoZXJPZmZzZXQgPSBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQgPT09IHZvaWQgMCA/IDAgOiBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQ7XG4gIHZhciBvdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgIHBhZGRpbmc6IHBhZGRpbmcsXG4gICAgYWx0Qm91bmRhcnk6IGFsdEJvdW5kYXJ5XG4gIH0pO1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KTtcbiAgdmFyIHZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihzdGF0ZS5wbGFjZW1lbnQpO1xuICB2YXIgaXNCYXNlUGxhY2VtZW50ID0gIXZhcmlhdGlvbjtcbiAgdmFyIG1haW5BeGlzID0gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpO1xuICB2YXIgYWx0QXhpcyA9IGdldEFsdEF4aXMobWFpbkF4aXMpO1xuICB2YXIgcG9wcGVyT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cztcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgdGV0aGVyT2Zmc2V0VmFsdWUgPSB0eXBlb2YgdGV0aGVyT2Zmc2V0ID09PSAnZnVuY3Rpb24nID8gdGV0aGVyT2Zmc2V0KE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnJlY3RzLCB7XG4gICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSkpIDogdGV0aGVyT2Zmc2V0O1xuICB2YXIgbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlID0gdHlwZW9mIHRldGhlck9mZnNldFZhbHVlID09PSAnbnVtYmVyJyA/IHtcbiAgICBtYWluQXhpczogdGV0aGVyT2Zmc2V0VmFsdWUsXG4gICAgYWx0QXhpczogdGV0aGVyT2Zmc2V0VmFsdWVcbiAgfSA6IE9iamVjdC5hc3NpZ24oe1xuICAgIG1haW5BeGlzOiAwLFxuICAgIGFsdEF4aXM6IDBcbiAgfSwgdGV0aGVyT2Zmc2V0VmFsdWUpO1xuICB2YXIgb2Zmc2V0TW9kaWZpZXJTdGF0ZSA9IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0ID8gc3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXRbc3RhdGUucGxhY2VtZW50XSA6IG51bGw7XG4gIHZhciBkYXRhID0ge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9O1xuXG4gIGlmICghcG9wcGVyT2Zmc2V0cykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChjaGVja01haW5BeGlzKSB7XG4gICAgdmFyIF9vZmZzZXRNb2RpZmllclN0YXRlJDtcblxuICAgIHZhciBtYWluU2lkZSA9IG1haW5BeGlzID09PSAneScgPyB0b3AgOiBsZWZ0O1xuICAgIHZhciBhbHRTaWRlID0gbWFpbkF4aXMgPT09ICd5JyA/IGJvdHRvbSA6IHJpZ2h0O1xuICAgIHZhciBsZW4gPSBtYWluQXhpcyA9PT0gJ3knID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICAgIHZhciBvZmZzZXQgPSBwb3BwZXJPZmZzZXRzW21haW5BeGlzXTtcbiAgICB2YXIgbWluID0gb2Zmc2V0ICsgb3ZlcmZsb3dbbWFpblNpZGVdO1xuICAgIHZhciBtYXggPSBvZmZzZXQgLSBvdmVyZmxvd1thbHRTaWRlXTtcbiAgICB2YXIgYWRkaXRpdmUgPSB0ZXRoZXIgPyAtcG9wcGVyUmVjdFtsZW5dIC8gMiA6IDA7XG4gICAgdmFyIG1pbkxlbiA9IHZhcmlhdGlvbiA9PT0gc3RhcnQgPyByZWZlcmVuY2VSZWN0W2xlbl0gOiBwb3BwZXJSZWN0W2xlbl07XG4gICAgdmFyIG1heExlbiA9IHZhcmlhdGlvbiA9PT0gc3RhcnQgPyAtcG9wcGVyUmVjdFtsZW5dIDogLXJlZmVyZW5jZVJlY3RbbGVuXTsgLy8gV2UgbmVlZCB0byBpbmNsdWRlIHRoZSBhcnJvdyBpbiB0aGUgY2FsY3VsYXRpb24gc28gdGhlIGFycm93IGRvZXNuJ3QgZ29cbiAgICAvLyBvdXRzaWRlIHRoZSByZWZlcmVuY2UgYm91bmRzXG5cbiAgICB2YXIgYXJyb3dFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMuYXJyb3c7XG4gICAgdmFyIGFycm93UmVjdCA9IHRldGhlciAmJiBhcnJvd0VsZW1lbnQgPyBnZXRMYXlvdXRSZWN0KGFycm93RWxlbWVudCkgOiB7XG4gICAgICB3aWR0aDogMCxcbiAgICAgIGhlaWdodDogMFxuICAgIH07XG4gICAgdmFyIGFycm93UGFkZGluZ09iamVjdCA9IHN0YXRlLm1vZGlmaWVyc0RhdGFbJ2Fycm93I3BlcnNpc3RlbnQnXSA/IHN0YXRlLm1vZGlmaWVyc0RhdGFbJ2Fycm93I3BlcnNpc3RlbnQnXS5wYWRkaW5nIDogZ2V0RnJlc2hTaWRlT2JqZWN0KCk7XG4gICAgdmFyIGFycm93UGFkZGluZ01pbiA9IGFycm93UGFkZGluZ09iamVjdFttYWluU2lkZV07XG4gICAgdmFyIGFycm93UGFkZGluZ01heCA9IGFycm93UGFkZGluZ09iamVjdFthbHRTaWRlXTsgLy8gSWYgdGhlIHJlZmVyZW5jZSBsZW5ndGggaXMgc21hbGxlciB0aGFuIHRoZSBhcnJvdyBsZW5ndGgsIHdlIGRvbid0IHdhbnRcbiAgICAvLyB0byBpbmNsdWRlIGl0cyBmdWxsIHNpemUgaW4gdGhlIGNhbGN1bGF0aW9uLiBJZiB0aGUgcmVmZXJlbmNlIGlzIHNtYWxsXG4gICAgLy8gYW5kIG5lYXIgdGhlIGVkZ2Ugb2YgYSBib3VuZGFyeSwgdGhlIHBvcHBlciBjYW4gb3ZlcmZsb3cgZXZlbiBpZiB0aGVcbiAgICAvLyByZWZlcmVuY2UgaXMgbm90IG92ZXJmbG93aW5nIGFzIHdlbGwgKGUuZy4gdmlydHVhbCBlbGVtZW50cyB3aXRoIG5vXG4gICAgLy8gd2lkdGggb3IgaGVpZ2h0KVxuXG4gICAgdmFyIGFycm93TGVuID0gd2l0aGluKDAsIHJlZmVyZW5jZVJlY3RbbGVuXSwgYXJyb3dSZWN0W2xlbl0pO1xuICAgIHZhciBtaW5PZmZzZXQgPSBpc0Jhc2VQbGFjZW1lbnQgPyByZWZlcmVuY2VSZWN0W2xlbl0gLyAyIC0gYWRkaXRpdmUgLSBhcnJvd0xlbiAtIGFycm93UGFkZGluZ01pbiAtIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5tYWluQXhpcyA6IG1pbkxlbiAtIGFycm93TGVuIC0gYXJyb3dQYWRkaW5nTWluIC0gbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLm1haW5BeGlzO1xuICAgIHZhciBtYXhPZmZzZXQgPSBpc0Jhc2VQbGFjZW1lbnQgPyAtcmVmZXJlbmNlUmVjdFtsZW5dIC8gMiArIGFkZGl0aXZlICsgYXJyb3dMZW4gKyBhcnJvd1BhZGRpbmdNYXggKyBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUubWFpbkF4aXMgOiBtYXhMZW4gKyBhcnJvd0xlbiArIGFycm93UGFkZGluZ01heCArIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5tYWluQXhpcztcbiAgICB2YXIgYXJyb3dPZmZzZXRQYXJlbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdyAmJiBnZXRPZmZzZXRQYXJlbnQoc3RhdGUuZWxlbWVudHMuYXJyb3cpO1xuICAgIHZhciBjbGllbnRPZmZzZXQgPSBhcnJvd09mZnNldFBhcmVudCA/IG1haW5BeGlzID09PSAneScgPyBhcnJvd09mZnNldFBhcmVudC5jbGllbnRUb3AgfHwgMCA6IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudExlZnQgfHwgMCA6IDA7XG4gICAgdmFyIG9mZnNldE1vZGlmaWVyVmFsdWUgPSAoX29mZnNldE1vZGlmaWVyU3RhdGUkID0gb2Zmc2V0TW9kaWZpZXJTdGF0ZSA9PSBudWxsID8gdm9pZCAwIDogb2Zmc2V0TW9kaWZpZXJTdGF0ZVttYWluQXhpc10pICE9IG51bGwgPyBfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQgOiAwO1xuICAgIHZhciB0ZXRoZXJNaW4gPSBvZmZzZXQgKyBtaW5PZmZzZXQgLSBvZmZzZXRNb2RpZmllclZhbHVlIC0gY2xpZW50T2Zmc2V0O1xuICAgIHZhciB0ZXRoZXJNYXggPSBvZmZzZXQgKyBtYXhPZmZzZXQgLSBvZmZzZXRNb2RpZmllclZhbHVlO1xuICAgIHZhciBwcmV2ZW50ZWRPZmZzZXQgPSB3aXRoaW4odGV0aGVyID8gbWF0aE1pbihtaW4sIHRldGhlck1pbikgOiBtaW4sIG9mZnNldCwgdGV0aGVyID8gbWF0aE1heChtYXgsIHRldGhlck1heCkgOiBtYXgpO1xuICAgIHBvcHBlck9mZnNldHNbbWFpbkF4aXNdID0gcHJldmVudGVkT2Zmc2V0O1xuICAgIGRhdGFbbWFpbkF4aXNdID0gcHJldmVudGVkT2Zmc2V0IC0gb2Zmc2V0O1xuICB9XG5cbiAgaWYgKGNoZWNrQWx0QXhpcykge1xuICAgIHZhciBfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQyO1xuXG4gICAgdmFyIF9tYWluU2lkZSA9IG1haW5BeGlzID09PSAneCcgPyB0b3AgOiBsZWZ0O1xuXG4gICAgdmFyIF9hbHRTaWRlID0gbWFpbkF4aXMgPT09ICd4JyA/IGJvdHRvbSA6IHJpZ2h0O1xuXG4gICAgdmFyIF9vZmZzZXQgPSBwb3BwZXJPZmZzZXRzW2FsdEF4aXNdO1xuXG4gICAgdmFyIF9sZW4gPSBhbHRBeGlzID09PSAneScgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgICB2YXIgX21pbiA9IF9vZmZzZXQgKyBvdmVyZmxvd1tfbWFpblNpZGVdO1xuXG4gICAgdmFyIF9tYXggPSBfb2Zmc2V0IC0gb3ZlcmZsb3dbX2FsdFNpZGVdO1xuXG4gICAgdmFyIGlzT3JpZ2luU2lkZSA9IFt0b3AsIGxlZnRdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgIT09IC0xO1xuXG4gICAgdmFyIF9vZmZzZXRNb2RpZmllclZhbHVlID0gKF9vZmZzZXRNb2RpZmllclN0YXRlJDIgPSBvZmZzZXRNb2RpZmllclN0YXRlID09IG51bGwgPyB2b2lkIDAgOiBvZmZzZXRNb2RpZmllclN0YXRlW2FsdEF4aXNdKSAhPSBudWxsID8gX29mZnNldE1vZGlmaWVyU3RhdGUkMiA6IDA7XG5cbiAgICB2YXIgX3RldGhlck1pbiA9IGlzT3JpZ2luU2lkZSA/IF9taW4gOiBfb2Zmc2V0IC0gcmVmZXJlbmNlUmVjdFtfbGVuXSAtIHBvcHBlclJlY3RbX2xlbl0gLSBfb2Zmc2V0TW9kaWZpZXJWYWx1ZSArIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5hbHRBeGlzO1xuXG4gICAgdmFyIF90ZXRoZXJNYXggPSBpc09yaWdpblNpZGUgPyBfb2Zmc2V0ICsgcmVmZXJlbmNlUmVjdFtfbGVuXSArIHBvcHBlclJlY3RbX2xlbl0gLSBfb2Zmc2V0TW9kaWZpZXJWYWx1ZSAtIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5hbHRBeGlzIDogX21heDtcblxuICAgIHZhciBfcHJldmVudGVkT2Zmc2V0ID0gdGV0aGVyICYmIGlzT3JpZ2luU2lkZSA/IHdpdGhpbk1heENsYW1wKF90ZXRoZXJNaW4sIF9vZmZzZXQsIF90ZXRoZXJNYXgpIDogd2l0aGluKHRldGhlciA/IF90ZXRoZXJNaW4gOiBfbWluLCBfb2Zmc2V0LCB0ZXRoZXIgPyBfdGV0aGVyTWF4IDogX21heCk7XG5cbiAgICBwb3BwZXJPZmZzZXRzW2FsdEF4aXNdID0gX3ByZXZlbnRlZE9mZnNldDtcbiAgICBkYXRhW2FsdEF4aXNdID0gX3ByZXZlbnRlZE9mZnNldCAtIF9vZmZzZXQ7XG4gIH1cblxuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gZGF0YTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBwcmV2ZW50T3ZlcmZsb3csXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsnb2Zmc2V0J11cbn07IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEhUTUxFbGVtZW50U2Nyb2xsKGVsZW1lbnQpIHtcbiAgcmV0dXJuIHtcbiAgICBzY3JvbGxMZWZ0OiBlbGVtZW50LnNjcm9sbExlZnQsXG4gICAgc2Nyb2xsVG9wOiBlbGVtZW50LnNjcm9sbFRvcFxuICB9O1xufSIsICJpbXBvcnQgZ2V0V2luZG93U2Nyb2xsIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgZ2V0SFRNTEVsZW1lbnRTY3JvbGwgZnJvbSBcIi4vZ2V0SFRNTEVsZW1lbnRTY3JvbGwuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE5vZGVTY3JvbGwobm9kZSkge1xuICBpZiAobm9kZSA9PT0gZ2V0V2luZG93KG5vZGUpIHx8ICFpc0hUTUxFbGVtZW50KG5vZGUpKSB7XG4gICAgcmV0dXJuIGdldFdpbmRvd1Njcm9sbChub2RlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZ2V0SFRNTEVsZW1lbnRTY3JvbGwobm9kZSk7XG4gIH1cbn0iLCAiaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCBnZXROb2RlU2Nyb2xsIGZyb20gXCIuL2dldE5vZGVTY3JvbGwuanNcIjtcbmltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGxCYXJYIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbEJhclguanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgaXNTY3JvbGxQYXJlbnQgZnJvbSBcIi4vaXNTY3JvbGxQYXJlbnQuanNcIjtcbmltcG9ydCB7IHJvdW5kIH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjtcblxuZnVuY3Rpb24gaXNFbGVtZW50U2NhbGVkKGVsZW1lbnQpIHtcbiAgdmFyIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgc2NhbGVYID0gcm91bmQocmVjdC53aWR0aCkgLyBlbGVtZW50Lm9mZnNldFdpZHRoIHx8IDE7XG4gIHZhciBzY2FsZVkgPSByb3VuZChyZWN0LmhlaWdodCkgLyBlbGVtZW50Lm9mZnNldEhlaWdodCB8fCAxO1xuICByZXR1cm4gc2NhbGVYICE9PSAxIHx8IHNjYWxlWSAhPT0gMTtcbn0gLy8gUmV0dXJucyB0aGUgY29tcG9zaXRlIHJlY3Qgb2YgYW4gZWxlbWVudCByZWxhdGl2ZSB0byBpdHMgb2Zmc2V0UGFyZW50LlxuLy8gQ29tcG9zaXRlIG1lYW5zIGl0IHRha2VzIGludG8gYWNjb3VudCB0cmFuc2Zvcm1zIGFzIHdlbGwgYXMgbGF5b3V0LlxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENvbXBvc2l0ZVJlY3QoZWxlbWVudE9yVmlydHVhbEVsZW1lbnQsIG9mZnNldFBhcmVudCwgaXNGaXhlZCkge1xuICBpZiAoaXNGaXhlZCA9PT0gdm9pZCAwKSB7XG4gICAgaXNGaXhlZCA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ID0gaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICB2YXIgb2Zmc2V0UGFyZW50SXNTY2FsZWQgPSBpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCkgJiYgaXNFbGVtZW50U2NhbGVkKG9mZnNldFBhcmVudCk7XG4gIHZhciBkb2N1bWVudEVsZW1lbnQgPSBnZXREb2N1bWVudEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgdmFyIHJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudE9yVmlydHVhbEVsZW1lbnQsIG9mZnNldFBhcmVudElzU2NhbGVkLCBpc0ZpeGVkKTtcbiAgdmFyIHNjcm9sbCA9IHtcbiAgICBzY3JvbGxMZWZ0OiAwLFxuICAgIHNjcm9sbFRvcDogMFxuICB9O1xuICB2YXIgb2Zmc2V0cyA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcblxuICBpZiAoaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgfHwgIWlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ICYmICFpc0ZpeGVkKSB7XG4gICAgaWYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgIT09ICdib2R5JyB8fCAvLyBodHRwczovL2dpdGh1Yi5jb20vcG9wcGVyanMvcG9wcGVyLWNvcmUvaXNzdWVzLzEwNzhcbiAgICBpc1Njcm9sbFBhcmVudChkb2N1bWVudEVsZW1lbnQpKSB7XG4gICAgICBzY3JvbGwgPSBnZXROb2RlU2Nyb2xsKG9mZnNldFBhcmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KSkge1xuICAgICAgb2Zmc2V0cyA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChvZmZzZXRQYXJlbnQsIHRydWUpO1xuICAgICAgb2Zmc2V0cy54ICs9IG9mZnNldFBhcmVudC5jbGllbnRMZWZ0O1xuICAgICAgb2Zmc2V0cy55ICs9IG9mZnNldFBhcmVudC5jbGllbnRUb3A7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIG9mZnNldHMueCA9IGdldFdpbmRvd1Njcm9sbEJhclgoZG9jdW1lbnRFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IHJlY3QubGVmdCArIHNjcm9sbC5zY3JvbGxMZWZ0IC0gb2Zmc2V0cy54LFxuICAgIHk6IHJlY3QudG9wICsgc2Nyb2xsLnNjcm9sbFRvcCAtIG9mZnNldHMueSxcbiAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0XG4gIH07XG59IiwgImltcG9ydCB7IG1vZGlmaWVyUGhhc2VzIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7IC8vIHNvdXJjZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDk4NzUyNTVcblxuZnVuY3Rpb24gb3JkZXIobW9kaWZpZXJzKSB7XG4gIHZhciBtYXAgPSBuZXcgTWFwKCk7XG4gIHZhciB2aXNpdGVkID0gbmV3IFNldCgpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIG1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIG1hcC5zZXQobW9kaWZpZXIubmFtZSwgbW9kaWZpZXIpO1xuICB9KTsgLy8gT24gdmlzaXRpbmcgb2JqZWN0LCBjaGVjayBmb3IgaXRzIGRlcGVuZGVuY2llcyBhbmQgdmlzaXQgdGhlbSByZWN1cnNpdmVseVxuXG4gIGZ1bmN0aW9uIHNvcnQobW9kaWZpZXIpIHtcbiAgICB2aXNpdGVkLmFkZChtb2RpZmllci5uYW1lKTtcbiAgICB2YXIgcmVxdWlyZXMgPSBbXS5jb25jYXQobW9kaWZpZXIucmVxdWlyZXMgfHwgW10sIG1vZGlmaWVyLnJlcXVpcmVzSWZFeGlzdHMgfHwgW10pO1xuICAgIHJlcXVpcmVzLmZvckVhY2goZnVuY3Rpb24gKGRlcCkge1xuICAgICAgaWYgKCF2aXNpdGVkLmhhcyhkZXApKSB7XG4gICAgICAgIHZhciBkZXBNb2RpZmllciA9IG1hcC5nZXQoZGVwKTtcblxuICAgICAgICBpZiAoZGVwTW9kaWZpZXIpIHtcbiAgICAgICAgICBzb3J0KGRlcE1vZGlmaWVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJlc3VsdC5wdXNoKG1vZGlmaWVyKTtcbiAgfVxuXG4gIG1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIGlmICghdmlzaXRlZC5oYXMobW9kaWZpZXIubmFtZSkpIHtcbiAgICAgIC8vIGNoZWNrIGZvciB2aXNpdGVkIG9iamVjdFxuICAgICAgc29ydChtb2RpZmllcik7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3JkZXJNb2RpZmllcnMobW9kaWZpZXJzKSB7XG4gIC8vIG9yZGVyIGJhc2VkIG9uIGRlcGVuZGVuY2llc1xuICB2YXIgb3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyKG1vZGlmaWVycyk7IC8vIG9yZGVyIGJhc2VkIG9uIHBoYXNlXG5cbiAgcmV0dXJuIG1vZGlmaWVyUGhhc2VzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwaGFzZSkge1xuICAgIHJldHVybiBhY2MuY29uY2F0KG9yZGVyZWRNb2RpZmllcnMuZmlsdGVyKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgICAgcmV0dXJuIG1vZGlmaWVyLnBoYXNlID09PSBwaGFzZTtcbiAgICB9KSk7XG4gIH0sIFtdKTtcbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVib3VuY2UoZm4pIHtcbiAgdmFyIHBlbmRpbmc7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFwZW5kaW5nKSB7XG4gICAgICBwZW5kaW5nID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcGVuZGluZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICByZXNvbHZlKGZuKCkpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBwZW5kaW5nO1xuICB9O1xufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZXJnZUJ5TmFtZShtb2RpZmllcnMpIHtcbiAgdmFyIG1lcmdlZCA9IG1vZGlmaWVycy5yZWR1Y2UoZnVuY3Rpb24gKG1lcmdlZCwgY3VycmVudCkge1xuICAgIHZhciBleGlzdGluZyA9IG1lcmdlZFtjdXJyZW50Lm5hbWVdO1xuICAgIG1lcmdlZFtjdXJyZW50Lm5hbWVdID0gZXhpc3RpbmcgPyBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZywgY3VycmVudCwge1xuICAgICAgb3B0aW9uczogT2JqZWN0LmFzc2lnbih7fSwgZXhpc3Rpbmcub3B0aW9ucywgY3VycmVudC5vcHRpb25zKSxcbiAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oe30sIGV4aXN0aW5nLmRhdGEsIGN1cnJlbnQuZGF0YSlcbiAgICB9KSA6IGN1cnJlbnQ7XG4gICAgcmV0dXJuIG1lcmdlZDtcbiAgfSwge30pOyAvLyBJRTExIGRvZXMgbm90IHN1cHBvcnQgT2JqZWN0LnZhbHVlc1xuXG4gIHJldHVybiBPYmplY3Qua2V5cyhtZXJnZWQpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIG1lcmdlZFtrZXldO1xuICB9KTtcbn0iLCAiaW1wb3J0IGdldENvbXBvc2l0ZVJlY3QgZnJvbSBcIi4vZG9tLXV0aWxzL2dldENvbXBvc2l0ZVJlY3QuanNcIjtcbmltcG9ydCBnZXRMYXlvdXRSZWN0IGZyb20gXCIuL2RvbS11dGlscy9nZXRMYXlvdXRSZWN0LmpzXCI7XG5pbXBvcnQgbGlzdFNjcm9sbFBhcmVudHMgZnJvbSBcIi4vZG9tLXV0aWxzL2xpc3RTY3JvbGxQYXJlbnRzLmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBvcmRlck1vZGlmaWVycyBmcm9tIFwiLi91dGlscy9vcmRlck1vZGlmaWVycy5qc1wiO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gXCIuL3V0aWxzL2RlYm91bmNlLmpzXCI7XG5pbXBvcnQgbWVyZ2VCeU5hbWUgZnJvbSBcIi4vdXRpbHMvbWVyZ2VCeU5hbWUuanNcIjtcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tIFwiLi91dGlscy9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IHsgaXNFbGVtZW50IH0gZnJvbSBcIi4vZG9tLXV0aWxzL2luc3RhbmNlT2YuanNcIjtcbnZhciBERUZBVUxUX09QVElPTlMgPSB7XG4gIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gIG1vZGlmaWVyczogW10sXG4gIHN0cmF0ZWd5OiAnYWJzb2x1dGUnXG59O1xuXG5mdW5jdGlvbiBhcmVWYWxpZEVsZW1lbnRzKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuICFhcmdzLnNvbWUoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gIShlbGVtZW50ICYmIHR5cGVvZiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCA9PT0gJ2Z1bmN0aW9uJyk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wcGVyR2VuZXJhdG9yKGdlbmVyYXRvck9wdGlvbnMpIHtcbiAgaWYgKGdlbmVyYXRvck9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIGdlbmVyYXRvck9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBfZ2VuZXJhdG9yT3B0aW9ucyA9IGdlbmVyYXRvck9wdGlvbnMsXG4gICAgICBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYgPSBfZ2VuZXJhdG9yT3B0aW9ucy5kZWZhdWx0TW9kaWZpZXJzLFxuICAgICAgZGVmYXVsdE1vZGlmaWVycyA9IF9nZW5lcmF0b3JPcHRpb25zJGRlZiA9PT0gdm9pZCAwID8gW10gOiBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYsXG4gICAgICBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyID0gX2dlbmVyYXRvck9wdGlvbnMuZGVmYXVsdE9wdGlvbnMsXG4gICAgICBkZWZhdWx0T3B0aW9ucyA9IF9nZW5lcmF0b3JPcHRpb25zJGRlZjIgPT09IHZvaWQgMCA/IERFRkFVTFRfT1BUSU9OUyA6IF9nZW5lcmF0b3JPcHRpb25zJGRlZjI7XG4gIHJldHVybiBmdW5jdGlvbiBjcmVhdGVQb3BwZXIocmVmZXJlbmNlLCBwb3BwZXIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0gZGVmYXVsdE9wdGlvbnM7XG4gICAgfVxuXG4gICAgdmFyIHN0YXRlID0ge1xuICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgIG9yZGVyZWRNb2RpZmllcnM6IFtdLFxuICAgICAgb3B0aW9uczogT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9PUFRJT05TLCBkZWZhdWx0T3B0aW9ucyksXG4gICAgICBtb2RpZmllcnNEYXRhOiB7fSxcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlLFxuICAgICAgICBwb3BwZXI6IHBvcHBlclxuICAgICAgfSxcbiAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgICAgc3R5bGVzOiB7fVxuICAgIH07XG4gICAgdmFyIGVmZmVjdENsZWFudXBGbnMgPSBbXTtcbiAgICB2YXIgaXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgICB2YXIgaW5zdGFuY2UgPSB7XG4gICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICBzZXRPcHRpb25zOiBmdW5jdGlvbiBzZXRPcHRpb25zKHNldE9wdGlvbnNBY3Rpb24pIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2V0T3B0aW9uc0FjdGlvbiA9PT0gJ2Z1bmN0aW9uJyA/IHNldE9wdGlvbnNBY3Rpb24oc3RhdGUub3B0aW9ucykgOiBzZXRPcHRpb25zQWN0aW9uO1xuICAgICAgICBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCk7XG4gICAgICAgIHN0YXRlLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgc3RhdGUub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIHN0YXRlLnNjcm9sbFBhcmVudHMgPSB7XG4gICAgICAgICAgcmVmZXJlbmNlOiBpc0VsZW1lbnQocmVmZXJlbmNlKSA/IGxpc3RTY3JvbGxQYXJlbnRzKHJlZmVyZW5jZSkgOiByZWZlcmVuY2UuY29udGV4dEVsZW1lbnQgPyBsaXN0U2Nyb2xsUGFyZW50cyhyZWZlcmVuY2UuY29udGV4dEVsZW1lbnQpIDogW10sXG4gICAgICAgICAgcG9wcGVyOiBsaXN0U2Nyb2xsUGFyZW50cyhwb3BwZXIpXG4gICAgICAgIH07IC8vIE9yZGVycyB0aGUgbW9kaWZpZXJzIGJhc2VkIG9uIHRoZWlyIGRlcGVuZGVuY2llcyBhbmQgYHBoYXNlYFxuICAgICAgICAvLyBwcm9wZXJ0aWVzXG5cbiAgICAgICAgdmFyIG9yZGVyZWRNb2RpZmllcnMgPSBvcmRlck1vZGlmaWVycyhtZXJnZUJ5TmFtZShbXS5jb25jYXQoZGVmYXVsdE1vZGlmaWVycywgc3RhdGUub3B0aW9ucy5tb2RpZmllcnMpKSk7IC8vIFN0cmlwIG91dCBkaXNhYmxlZCBtb2RpZmllcnNcblxuICAgICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzID0gb3JkZXJlZE1vZGlmaWVycy5maWx0ZXIoZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICByZXR1cm4gbS5lbmFibGVkO1xuICAgICAgICB9KTtcbiAgICAgICAgcnVuTW9kaWZpZXJFZmZlY3RzKCk7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZS51cGRhdGUoKTtcbiAgICAgIH0sXG4gICAgICAvLyBTeW5jIHVwZGF0ZSDigJMgaXQgd2lsbCBhbHdheXMgYmUgZXhlY3V0ZWQsIGV2ZW4gaWYgbm90IG5lY2Vzc2FyeS4gVGhpc1xuICAgICAgLy8gaXMgdXNlZnVsIGZvciBsb3cgZnJlcXVlbmN5IHVwZGF0ZXMgd2hlcmUgc3luYyBiZWhhdmlvciBzaW1wbGlmaWVzIHRoZVxuICAgICAgLy8gbG9naWMuXG4gICAgICAvLyBGb3IgaGlnaCBmcmVxdWVuY3kgdXBkYXRlcyAoZS5nLiBgcmVzaXplYCBhbmQgYHNjcm9sbGAgZXZlbnRzKSwgYWx3YXlzXG4gICAgICAvLyBwcmVmZXIgdGhlIGFzeW5jIFBvcHBlciN1cGRhdGUgbWV0aG9kXG4gICAgICBmb3JjZVVwZGF0ZTogZnVuY3Rpb24gZm9yY2VVcGRhdGUoKSB7XG4gICAgICAgIGlmIChpc0Rlc3Ryb3llZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfc3RhdGUkZWxlbWVudHMgPSBzdGF0ZS5lbGVtZW50cyxcbiAgICAgICAgICAgIHJlZmVyZW5jZSA9IF9zdGF0ZSRlbGVtZW50cy5yZWZlcmVuY2UsXG4gICAgICAgICAgICBwb3BwZXIgPSBfc3RhdGUkZWxlbWVudHMucG9wcGVyOyAvLyBEb24ndCBwcm9jZWVkIGlmIGByZWZlcmVuY2VgIG9yIGBwb3BwZXJgIGFyZSBub3QgdmFsaWQgZWxlbWVudHNcbiAgICAgICAgLy8gYW55bW9yZVxuXG4gICAgICAgIGlmICghYXJlVmFsaWRFbGVtZW50cyhyZWZlcmVuY2UsIHBvcHBlcikpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gLy8gU3RvcmUgdGhlIHJlZmVyZW5jZSBhbmQgcG9wcGVyIHJlY3RzIHRvIGJlIHJlYWQgYnkgbW9kaWZpZXJzXG5cblxuICAgICAgICBzdGF0ZS5yZWN0cyA9IHtcbiAgICAgICAgICByZWZlcmVuY2U6IGdldENvbXBvc2l0ZVJlY3QocmVmZXJlbmNlLCBnZXRPZmZzZXRQYXJlbnQocG9wcGVyKSwgc3RhdGUub3B0aW9ucy5zdHJhdGVneSA9PT0gJ2ZpeGVkJyksXG4gICAgICAgICAgcG9wcGVyOiBnZXRMYXlvdXRSZWN0KHBvcHBlcilcbiAgICAgICAgfTsgLy8gTW9kaWZpZXJzIGhhdmUgdGhlIGFiaWxpdHkgdG8gcmVzZXQgdGhlIGN1cnJlbnQgdXBkYXRlIGN5Y2xlLiBUaGVcbiAgICAgICAgLy8gbW9zdCBjb21tb24gdXNlIGNhc2UgZm9yIHRoaXMgaXMgdGhlIGBmbGlwYCBtb2RpZmllciBjaGFuZ2luZyB0aGVcbiAgICAgICAgLy8gcGxhY2VtZW50LCB3aGljaCB0aGVuIG5lZWRzIHRvIHJlLXJ1biBhbGwgdGhlIG1vZGlmaWVycywgYmVjYXVzZSB0aGVcbiAgICAgICAgLy8gbG9naWMgd2FzIHByZXZpb3VzbHkgcmFuIGZvciB0aGUgcHJldmlvdXMgcGxhY2VtZW50IGFuZCBpcyB0aGVyZWZvcmVcbiAgICAgICAgLy8gc3RhbGUvaW5jb3JyZWN0XG5cbiAgICAgICAgc3RhdGUucmVzZXQgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUucGxhY2VtZW50ID0gc3RhdGUub3B0aW9ucy5wbGFjZW1lbnQ7IC8vIE9uIGVhY2ggdXBkYXRlIGN5Y2xlLCB0aGUgYG1vZGlmaWVyc0RhdGFgIHByb3BlcnR5IGZvciBlYWNoIG1vZGlmaWVyXG4gICAgICAgIC8vIGlzIGZpbGxlZCB3aXRoIHRoZSBpbml0aWFsIGRhdGEgc3BlY2lmaWVkIGJ5IHRoZSBtb2RpZmllci4gVGhpcyBtZWFuc1xuICAgICAgICAvLyBpdCBkb2Vzbid0IHBlcnNpc3QgYW5kIGlzIGZyZXNoIG9uIGVhY2ggdXBkYXRlLlxuICAgICAgICAvLyBUbyBlbnN1cmUgcGVyc2lzdGVudCBkYXRhLCB1c2UgYCR7bmFtZX0jcGVyc2lzdGVudGBcblxuICAgICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgICAgICAgcmV0dXJuIHN0YXRlLm1vZGlmaWVyc0RhdGFbbW9kaWZpZXIubmFtZV0gPSBPYmplY3QuYXNzaWduKHt9LCBtb2RpZmllci5kYXRhKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHN0YXRlLm9yZGVyZWRNb2RpZmllcnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgaWYgKHN0YXRlLnJlc2V0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzdGF0ZS5yZXNldCA9IGZhbHNlO1xuICAgICAgICAgICAgaW5kZXggPSAtMTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBfc3RhdGUkb3JkZXJlZE1vZGlmaWUgPSBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzW2luZGV4XSxcbiAgICAgICAgICAgICAgZm4gPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUuZm4sXG4gICAgICAgICAgICAgIF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUub3B0aW9ucyxcbiAgICAgICAgICAgICAgX29wdGlvbnMgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyID09PSB2b2lkIDAgPyB7fSA6IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIsXG4gICAgICAgICAgICAgIG5hbWUgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUubmFtZTtcblxuICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHN0YXRlID0gZm4oe1xuICAgICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IF9vcHRpb25zLFxuICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICBpbnN0YW5jZTogaW5zdGFuY2VcbiAgICAgICAgICAgIH0pIHx8IHN0YXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIEFzeW5jIGFuZCBvcHRpbWlzdGljYWxseSBvcHRpbWl6ZWQgdXBkYXRlIOKAkyBpdCB3aWxsIG5vdCBiZSBleGVjdXRlZCBpZlxuICAgICAgLy8gbm90IG5lY2Vzc2FyeSAoZGVib3VuY2VkIHRvIHJ1biBhdCBtb3N0IG9uY2UtcGVyLXRpY2spXG4gICAgICB1cGRhdGU6IGRlYm91bmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgaW5zdGFuY2UuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgICByZXNvbHZlKHN0YXRlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KSxcbiAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgaXNEZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoIWFyZVZhbGlkRWxlbWVudHMocmVmZXJlbmNlLCBwb3BwZXIpKSB7XG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgaW5zdGFuY2Uuc2V0T3B0aW9ucyhvcHRpb25zKS50aGVuKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgaWYgKCFpc0Rlc3Ryb3llZCAmJiBvcHRpb25zLm9uRmlyc3RVcGRhdGUpIHtcbiAgICAgICAgb3B0aW9ucy5vbkZpcnN0VXBkYXRlKHN0YXRlKTtcbiAgICAgIH1cbiAgICB9KTsgLy8gTW9kaWZpZXJzIGhhdmUgdGhlIGFiaWxpdHkgdG8gZXhlY3V0ZSBhcmJpdHJhcnkgY29kZSBiZWZvcmUgdGhlIGZpcnN0XG4gICAgLy8gdXBkYXRlIGN5Y2xlIHJ1bnMuIFRoZXkgd2lsbCBiZSBleGVjdXRlZCBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgdXBkYXRlXG4gICAgLy8gY3ljbGUuIFRoaXMgaXMgdXNlZnVsIHdoZW4gYSBtb2RpZmllciBhZGRzIHNvbWUgcGVyc2lzdGVudCBkYXRhIHRoYXRcbiAgICAvLyBvdGhlciBtb2RpZmllcnMgbmVlZCB0byB1c2UsIGJ1dCB0aGUgbW9kaWZpZXIgaXMgcnVuIGFmdGVyIHRoZSBkZXBlbmRlbnRcbiAgICAvLyBvbmUuXG5cbiAgICBmdW5jdGlvbiBydW5Nb2RpZmllckVmZmVjdHMoKSB7XG4gICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgdmFyIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICAgICAgICBfcmVmJG9wdGlvbnMgPSBfcmVmLm9wdGlvbnMsXG4gICAgICAgICAgICBvcHRpb25zID0gX3JlZiRvcHRpb25zID09PSB2b2lkIDAgPyB7fSA6IF9yZWYkb3B0aW9ucyxcbiAgICAgICAgICAgIGVmZmVjdCA9IF9yZWYuZWZmZWN0O1xuXG4gICAgICAgIGlmICh0eXBlb2YgZWZmZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdmFyIGNsZWFudXBGbiA9IGVmZmVjdCh7XG4gICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgaW5zdGFuY2U6IGluc3RhbmNlLFxuICAgICAgICAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdmFyIG5vb3BGbiA9IGZ1bmN0aW9uIG5vb3BGbigpIHt9O1xuXG4gICAgICAgICAgZWZmZWN0Q2xlYW51cEZucy5wdXNoKGNsZWFudXBGbiB8fCBub29wRm4pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCkge1xuICAgICAgZWZmZWN0Q2xlYW51cEZucy5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgICAgICByZXR1cm4gZm4oKTtcbiAgICAgIH0pO1xuICAgICAgZWZmZWN0Q2xlYW51cEZucyA9IFtdO1xuICAgIH1cblxuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfTtcbn1cbmV4cG9ydCB2YXIgY3JlYXRlUG9wcGVyID0gLyojX19QVVJFX18qL3BvcHBlckdlbmVyYXRvcigpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IGRldGVjdE92ZXJmbG93IH07IiwgImltcG9ydCB7IHBvcHBlckdlbmVyYXRvciwgZGV0ZWN0T3ZlcmZsb3cgfSBmcm9tIFwiLi9jcmVhdGVQb3BwZXIuanNcIjtcbmltcG9ydCBldmVudExpc3RlbmVycyBmcm9tIFwiLi9tb2RpZmllcnMvZXZlbnRMaXN0ZW5lcnMuanNcIjtcbmltcG9ydCBwb3BwZXJPZmZzZXRzIGZyb20gXCIuL21vZGlmaWVycy9wb3BwZXJPZmZzZXRzLmpzXCI7XG5pbXBvcnQgY29tcHV0ZVN0eWxlcyBmcm9tIFwiLi9tb2RpZmllcnMvY29tcHV0ZVN0eWxlcy5qc1wiO1xuaW1wb3J0IGFwcGx5U3R5bGVzIGZyb20gXCIuL21vZGlmaWVycy9hcHBseVN0eWxlcy5qc1wiO1xuaW1wb3J0IG9mZnNldCBmcm9tIFwiLi9tb2RpZmllcnMvb2Zmc2V0LmpzXCI7XG5pbXBvcnQgZmxpcCBmcm9tIFwiLi9tb2RpZmllcnMvZmxpcC5qc1wiO1xuaW1wb3J0IHByZXZlbnRPdmVyZmxvdyBmcm9tIFwiLi9tb2RpZmllcnMvcHJldmVudE92ZXJmbG93LmpzXCI7XG5pbXBvcnQgYXJyb3cgZnJvbSBcIi4vbW9kaWZpZXJzL2Fycm93LmpzXCI7XG5pbXBvcnQgaGlkZSBmcm9tIFwiLi9tb2RpZmllcnMvaGlkZS5qc1wiO1xudmFyIGRlZmF1bHRNb2RpZmllcnMgPSBbZXZlbnRMaXN0ZW5lcnMsIHBvcHBlck9mZnNldHMsIGNvbXB1dGVTdHlsZXMsIGFwcGx5U3R5bGVzLCBvZmZzZXQsIGZsaXAsIHByZXZlbnRPdmVyZmxvdywgYXJyb3csIGhpZGVdO1xudmFyIGNyZWF0ZVBvcHBlciA9IC8qI19fUFVSRV9fKi9wb3BwZXJHZW5lcmF0b3Ioe1xuICBkZWZhdWx0TW9kaWZpZXJzOiBkZWZhdWx0TW9kaWZpZXJzXG59KTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgeyBjcmVhdGVQb3BwZXIsIHBvcHBlckdlbmVyYXRvciwgZGVmYXVsdE1vZGlmaWVycywgZGV0ZWN0T3ZlcmZsb3cgfTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgeyBjcmVhdGVQb3BwZXIgYXMgY3JlYXRlUG9wcGVyTGl0ZSB9IGZyb20gXCIuL3BvcHBlci1saXRlLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0ICogZnJvbSBcIi4vbW9kaWZpZXJzL2luZGV4LmpzXCI7IiwgImV4cG9ydCBjb25zdCBST1VORF9BUlJPVyA9XG4gICc8c3ZnIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCI2XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMCA2czEuNzk2LS4wMTMgNC42Ny0zLjYxNUM1Ljg1MS45IDYuOTMuMDA2IDggMGMxLjA3LS4wMDYgMi4xNDguODg3IDMuMzQzIDIuMzg1QzE0LjIzMyA2LjAwNSAxNiA2IDE2IDZIMHpcIj48L3N2Zz4nO1xuXG5leHBvcnQgY29uc3QgQk9YX0NMQVNTID0gYF9fTkFNRVNQQUNFX1BSRUZJWF9fLWJveGA7XG5leHBvcnQgY29uc3QgQ09OVEVOVF9DTEFTUyA9IGBfX05BTUVTUEFDRV9QUkVGSVhfXy1jb250ZW50YDtcbmV4cG9ydCBjb25zdCBCQUNLRFJPUF9DTEFTUyA9IGBfX05BTUVTUEFDRV9QUkVGSVhfXy1iYWNrZHJvcGA7XG5leHBvcnQgY29uc3QgQVJST1dfQ0xBU1MgPSBgX19OQU1FU1BBQ0VfUFJFRklYX18tYXJyb3dgO1xuZXhwb3J0IGNvbnN0IFNWR19BUlJPV19DTEFTUyA9IGBfX05BTUVTUEFDRV9QUkVGSVhfXy1zdmctYXJyb3dgO1xuXG5leHBvcnQgY29uc3QgVE9VQ0hfT1BUSU9OUyA9IHtwYXNzaXZlOiB0cnVlLCBjYXB0dXJlOiB0cnVlfTtcblxuZXhwb3J0IGNvbnN0IFRJUFBZX0RFRkFVTFRfQVBQRU5EX1RPID0gKCkgPT4gZG9jdW1lbnQuYm9keTtcbiIsICJpbXBvcnQge0Jhc2VQbGFjZW1lbnQsIFBsYWNlbWVudH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShcbiAgb2JqOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbiAga2V5OiBzdHJpbmdcbik6IGJvb2xlYW4ge1xuICByZXR1cm4ge30uaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZUF0SW5kZXhPclJldHVybjxUPihcbiAgdmFsdWU6IFQgfCBbVCB8IG51bGwsIFQgfCBudWxsXSxcbiAgaW5kZXg6IG51bWJlcixcbiAgZGVmYXVsdFZhbHVlOiBUIHwgW1QsIFRdXG4pOiBUIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgY29uc3QgdiA9IHZhbHVlW2luZGV4XTtcbiAgICByZXR1cm4gdiA9PSBudWxsXG4gICAgICA/IEFycmF5LmlzQXJyYXkoZGVmYXVsdFZhbHVlKVxuICAgICAgICA/IGRlZmF1bHRWYWx1ZVtpbmRleF1cbiAgICAgICAgOiBkZWZhdWx0VmFsdWVcbiAgICAgIDogdjtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVHlwZSh2YWx1ZTogYW55LCB0eXBlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3Qgc3RyID0ge30udG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIHJldHVybiBzdHIuaW5kZXhPZignW29iamVjdCcpID09PSAwICYmIHN0ci5pbmRleE9mKGAke3R5cGV9XWApID4gLTE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZva2VXaXRoQXJnc09yUmV0dXJuKHZhbHVlOiBhbnksIGFyZ3M6IGFueVtdKTogYW55IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyA/IHZhbHVlKC4uLmFyZ3MpIDogdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZTxUPihcbiAgZm46IChhcmc6IFQpID0+IHZvaWQsXG4gIG1zOiBudW1iZXJcbik6IChhcmc6IFQpID0+IHZvaWQge1xuICAvLyBBdm9pZCB3cmFwcGluZyBpbiBgc2V0VGltZW91dGAgaWYgbXMgaXMgMCBhbnl3YXlcbiAgaWYgKG1zID09PSAwKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgbGV0IHRpbWVvdXQ6IGFueTtcblxuICByZXR1cm4gKGFyZyk6IHZvaWQgPT4ge1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBmbihhcmcpO1xuICAgIH0sIG1zKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByb3BlcnRpZXM8VD4ob2JqOiBULCBrZXlzOiBzdHJpbmdbXSk6IFBhcnRpYWw8VD4ge1xuICBjb25zdCBjbG9uZSA9IHsuLi5vYmp9O1xuICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGRlbGV0ZSAoY2xvbmUgYXMgYW55KVtrZXldO1xuICB9KTtcbiAgcmV0dXJuIGNsb25lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3BsaXRCeVNwYWNlcyh2YWx1ZTogc3RyaW5nKTogc3RyaW5nW10ge1xuICByZXR1cm4gdmFsdWUuc3BsaXQoL1xccysvKS5maWx0ZXIoQm9vbGVhbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVUb0FycmF5PFQ+KHZhbHVlOiBUIHwgVFtdKTogVFtdIHtcbiAgcmV0dXJuIChbXSBhcyBUW10pLmNvbmNhdCh2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwdXNoSWZVbmlxdWU8VD4oYXJyOiBUW10sIHZhbHVlOiBUKTogdm9pZCB7XG4gIGlmIChhcnIuaW5kZXhPZih2YWx1ZSkgPT09IC0xKSB7XG4gICAgYXJyLnB1c2godmFsdWUpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRQeElmTnVtYmVyKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyA/IGAke3ZhbHVlfXB4YCA6IHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5pcXVlPFQ+KGFycjogVFtdKTogVFtdIHtcbiAgcmV0dXJuIGFyci5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiBhcnIuaW5kZXhPZihpdGVtKSA9PT0gaW5kZXgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TnVtYmVyKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyA/IHZhbHVlIDogcGFyc2VGbG9hdCh2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudDogUGxhY2VtZW50KTogQmFzZVBsYWNlbWVudCB7XG4gIHJldHVybiBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXSBhcyBCYXNlUGxhY2VtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlGcm9tKHZhbHVlOiBBcnJheUxpa2U8YW55Pik6IGFueVtdIHtcbiAgcmV0dXJuIFtdLnNsaWNlLmNhbGwodmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVW5kZWZpbmVkUHJvcHMoXG4gIG9iajogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbik6IFBhcnRpYWw8UmVjb3JkPHN0cmluZywgdW5rbm93bj4+IHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgIGlmIChvYmpba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAoYWNjIGFzIGFueSlba2V5XSA9IG9ialtrZXldO1xuICAgIH1cblxuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbn1cbiIsICJpbXBvcnQge1JlZmVyZW5jZUVsZW1lbnQsIFRhcmdldHN9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtQb3BwZXJUcmVlRGF0YX0gZnJvbSAnLi90eXBlcy1pbnRlcm5hbCc7XG5pbXBvcnQge2FycmF5RnJvbSwgaXNUeXBlLCBub3JtYWxpemVUb0FycmF5LCBnZXRCYXNlUGxhY2VtZW50fSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRpdigpOiBIVE1MRGl2RWxlbWVudCB7XG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRWxlbWVudCh2YWx1ZTogdW5rbm93bik6IHZhbHVlIGlzIEVsZW1lbnQgfCBEb2N1bWVudEZyYWdtZW50IHtcbiAgcmV0dXJuIFsnRWxlbWVudCcsICdGcmFnbWVudCddLnNvbWUoKHR5cGUpID0+IGlzVHlwZSh2YWx1ZSwgdHlwZSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOb2RlTGlzdCh2YWx1ZTogdW5rbm93bik6IHZhbHVlIGlzIE5vZGVMaXN0IHtcbiAgcmV0dXJuIGlzVHlwZSh2YWx1ZSwgJ05vZGVMaXN0Jyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc01vdXNlRXZlbnQodmFsdWU6IHVua25vd24pOiB2YWx1ZSBpcyBNb3VzZUV2ZW50IHtcbiAgcmV0dXJuIGlzVHlwZSh2YWx1ZSwgJ01vdXNlRXZlbnQnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVmZXJlbmNlRWxlbWVudCh2YWx1ZTogYW55KTogdmFsdWUgaXMgUmVmZXJlbmNlRWxlbWVudCB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fdGlwcHkgJiYgdmFsdWUuX3RpcHB5LnJlZmVyZW5jZSA9PT0gdmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXJyYXlPZkVsZW1lbnRzKHZhbHVlOiBUYXJnZXRzKTogRWxlbWVudFtdIHtcbiAgaWYgKGlzRWxlbWVudCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gW3ZhbHVlXTtcbiAgfVxuXG4gIGlmIChpc05vZGVMaXN0KHZhbHVlKSkge1xuICAgIHJldHVybiBhcnJheUZyb20odmFsdWUpO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIGFycmF5RnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHZhbHVlKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRUcmFuc2l0aW9uRHVyYXRpb24oXG4gIGVsczogKEhUTUxEaXZFbGVtZW50IHwgbnVsbClbXSxcbiAgdmFsdWU6IG51bWJlclxuKTogdm9pZCB7XG4gIGVscy5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGlmIChlbCkge1xuICAgICAgZWwuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gYCR7dmFsdWV9bXNgO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRWaXNpYmlsaXR5U3RhdGUoXG4gIGVsczogKEhUTUxEaXZFbGVtZW50IHwgbnVsbClbXSxcbiAgc3RhdGU6ICd2aXNpYmxlJyB8ICdoaWRkZW4nXG4pOiB2b2lkIHtcbiAgZWxzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgaWYgKGVsKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdGUnLCBzdGF0ZSk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE93bmVyRG9jdW1lbnQoXG4gIGVsZW1lbnRPckVsZW1lbnRzOiBFbGVtZW50IHwgRWxlbWVudFtdXG4pOiBEb2N1bWVudCB7XG4gIGNvbnN0IFtlbGVtZW50XSA9IG5vcm1hbGl6ZVRvQXJyYXkoZWxlbWVudE9yRWxlbWVudHMpO1xuXG4gIC8vIEVsZW1lbnRzIGNyZWF0ZWQgdmlhIGEgPHRlbXBsYXRlPiBoYXZlIGFuIG93bmVyRG9jdW1lbnQgd2l0aCBubyByZWZlcmVuY2UgdG8gdGhlIGJvZHlcbiAgcmV0dXJuIGVsZW1lbnQ/Lm93bmVyRG9jdW1lbnQ/LmJvZHkgPyBlbGVtZW50Lm93bmVyRG9jdW1lbnQgOiBkb2N1bWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ3Vyc29yT3V0c2lkZUludGVyYWN0aXZlQm9yZGVyKFxuICBwb3BwZXJUcmVlRGF0YTogUG9wcGVyVHJlZURhdGFbXSxcbiAgZXZlbnQ6IE1vdXNlRXZlbnRcbik6IGJvb2xlYW4ge1xuICBjb25zdCB7Y2xpZW50WCwgY2xpZW50WX0gPSBldmVudDtcblxuICByZXR1cm4gcG9wcGVyVHJlZURhdGEuZXZlcnkoKHtwb3BwZXJSZWN0LCBwb3BwZXJTdGF0ZSwgcHJvcHN9KSA9PiB7XG4gICAgY29uc3Qge2ludGVyYWN0aXZlQm9yZGVyfSA9IHByb3BzO1xuICAgIGNvbnN0IGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHBvcHBlclN0YXRlLnBsYWNlbWVudCk7XG4gICAgY29uc3Qgb2Zmc2V0RGF0YSA9IHBvcHBlclN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0O1xuXG4gICAgaWYgKCFvZmZzZXREYXRhKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCB0b3BEaXN0YW5jZSA9IGJhc2VQbGFjZW1lbnQgPT09ICdib3R0b20nID8gb2Zmc2V0RGF0YS50b3AhLnkgOiAwO1xuICAgIGNvbnN0IGJvdHRvbURpc3RhbmNlID0gYmFzZVBsYWNlbWVudCA9PT0gJ3RvcCcgPyBvZmZzZXREYXRhLmJvdHRvbSEueSA6IDA7XG4gICAgY29uc3QgbGVmdERpc3RhbmNlID0gYmFzZVBsYWNlbWVudCA9PT0gJ3JpZ2h0JyA/IG9mZnNldERhdGEubGVmdCEueCA6IDA7XG4gICAgY29uc3QgcmlnaHREaXN0YW5jZSA9IGJhc2VQbGFjZW1lbnQgPT09ICdsZWZ0JyA/IG9mZnNldERhdGEucmlnaHQhLnggOiAwO1xuXG4gICAgY29uc3QgZXhjZWVkc1RvcCA9XG4gICAgICBwb3BwZXJSZWN0LnRvcCAtIGNsaWVudFkgKyB0b3BEaXN0YW5jZSA+IGludGVyYWN0aXZlQm9yZGVyO1xuICAgIGNvbnN0IGV4Y2VlZHNCb3R0b20gPVxuICAgICAgY2xpZW50WSAtIHBvcHBlclJlY3QuYm90dG9tIC0gYm90dG9tRGlzdGFuY2UgPiBpbnRlcmFjdGl2ZUJvcmRlcjtcbiAgICBjb25zdCBleGNlZWRzTGVmdCA9XG4gICAgICBwb3BwZXJSZWN0LmxlZnQgLSBjbGllbnRYICsgbGVmdERpc3RhbmNlID4gaW50ZXJhY3RpdmVCb3JkZXI7XG4gICAgY29uc3QgZXhjZWVkc1JpZ2h0ID1cbiAgICAgIGNsaWVudFggLSBwb3BwZXJSZWN0LnJpZ2h0IC0gcmlnaHREaXN0YW5jZSA+IGludGVyYWN0aXZlQm9yZGVyO1xuXG4gICAgcmV0dXJuIGV4Y2VlZHNUb3AgfHwgZXhjZWVkc0JvdHRvbSB8fCBleGNlZWRzTGVmdCB8fCBleGNlZWRzUmlnaHQ7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVHJhbnNpdGlvbkVuZExpc3RlbmVyKFxuICBib3g6IEhUTUxEaXZFbGVtZW50LFxuICBhY3Rpb246ICdhZGQnIHwgJ3JlbW92ZScsXG4gIGxpc3RlbmVyOiAoZXZlbnQ6IFRyYW5zaXRpb25FdmVudCkgPT4gdm9pZFxuKTogdm9pZCB7XG4gIGNvbnN0IG1ldGhvZCA9IGAke2FjdGlvbn1FdmVudExpc3RlbmVyYCBhc1xuICAgIHwgJ2FkZEV2ZW50TGlzdGVuZXInXG4gICAgfCAncmVtb3ZlRXZlbnRMaXN0ZW5lcic7XG5cbiAgLy8gc29tZSBicm93c2VycyBhcHBhcmVudGx5IHN1cHBvcnQgYHRyYW5zaXRpb25gICh1bnByZWZpeGVkKSBidXQgb25seSBmaXJlXG4gIC8vIGB3ZWJraXRUcmFuc2l0aW9uRW5kYC4uLlxuICBbJ3RyYW5zaXRpb25lbmQnLCAnd2Via2l0VHJhbnNpdGlvbkVuZCddLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gICAgYm94W21ldGhvZF0oZXZlbnQsIGxpc3RlbmVyIGFzIEV2ZW50TGlzdGVuZXIpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBDb21wYXJlZCB0byB4eHguY29udGFpbnMsIHRoaXMgZnVuY3Rpb24gd29ya3MgZm9yIGRvbSBzdHJ1Y3R1cmVzIHdpdGggc2hhZG93XG4gKiBkb21cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFjdHVhbENvbnRhaW5zKHBhcmVudDogRWxlbWVudCwgY2hpbGQ6IEVsZW1lbnQpOiBib29sZWFuIHtcbiAgbGV0IHRhcmdldCA9IGNoaWxkO1xuICB3aGlsZSAodGFyZ2V0KSB7XG4gICAgaWYgKHBhcmVudC5jb250YWlucyh0YXJnZXQpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdGFyZ2V0ID0gKHRhcmdldC5nZXRSb290Tm9kZT8uKCkgYXMgYW55KT8uaG9zdDtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG4iLCAiaW1wb3J0IHtUT1VDSF9PUFRJT05TfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQge2lzUmVmZXJlbmNlRWxlbWVudH0gZnJvbSAnLi9kb20tdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgY3VycmVudElucHV0ID0ge2lzVG91Y2g6IGZhbHNlfTtcbmxldCBsYXN0TW91c2VNb3ZlVGltZSA9IDA7XG5cbi8qKlxuICogV2hlbiBhIGB0b3VjaHN0YXJ0YCBldmVudCBpcyBmaXJlZCwgaXQncyBhc3N1bWVkIHRoZSB1c2VyIGlzIHVzaW5nIHRvdWNoXG4gKiBpbnB1dC4gV2UnbGwgYmluZCBhIGBtb3VzZW1vdmVgIGV2ZW50IGxpc3RlbmVyIHRvIGxpc3RlbiBmb3IgbW91c2UgaW5wdXQgaW5cbiAqIHRoZSBmdXR1cmUuIFRoaXMgd2F5LCB0aGUgYGlzVG91Y2hgIHByb3BlcnR5IGlzIGZ1bGx5IGR5bmFtaWMgYW5kIHdpbGwgaGFuZGxlXG4gKiBoeWJyaWQgZGV2aWNlcyB0aGF0IHVzZSBhIG1peCBvZiB0b3VjaCArIG1vdXNlIGlucHV0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gb25Eb2N1bWVudFRvdWNoU3RhcnQoKTogdm9pZCB7XG4gIGlmIChjdXJyZW50SW5wdXQuaXNUb3VjaCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGN1cnJlbnRJbnB1dC5pc1RvdWNoID0gdHJ1ZTtcblxuICBpZiAod2luZG93LnBlcmZvcm1hbmNlKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Eb2N1bWVudE1vdXNlTW92ZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBXaGVuIHR3byBgbW91c2Vtb3ZlYCBldmVudCBhcmUgZmlyZWQgY29uc2VjdXRpdmVseSB3aXRoaW4gMjBtcywgaXQncyBhc3N1bWVkXG4gKiB0aGUgdXNlciBpcyB1c2luZyBtb3VzZSBpbnB1dCBhZ2Fpbi4gYG1vdXNlbW92ZWAgY2FuIGZpcmUgb24gdG91Y2ggZGV2aWNlcyBhc1xuICogd2VsbCwgYnV0IHZlcnkgcmFyZWx5IHRoYXQgcXVpY2tseS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9uRG9jdW1lbnRNb3VzZU1vdmUoKTogdm9pZCB7XG4gIGNvbnN0IG5vdyA9IHBlcmZvcm1hbmNlLm5vdygpO1xuXG4gIGlmIChub3cgLSBsYXN0TW91c2VNb3ZlVGltZSA8IDIwKSB7XG4gICAgY3VycmVudElucHV0LmlzVG91Y2ggPSBmYWxzZTtcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uRG9jdW1lbnRNb3VzZU1vdmUpO1xuICB9XG5cbiAgbGFzdE1vdXNlTW92ZVRpbWUgPSBub3c7XG59XG5cbi8qKlxuICogV2hlbiBhbiBlbGVtZW50IGlzIGluIGZvY3VzIGFuZCBoYXMgYSB0aXBweSwgbGVhdmluZyB0aGUgdGFiL3dpbmRvdyBhbmRcbiAqIHJldHVybmluZyBjYXVzZXMgaXQgdG8gc2hvdyBhZ2Fpbi4gRm9yIG1vdXNlIHVzZXJzIHRoaXMgaXMgdW5leHBlY3RlZCwgYnV0XG4gKiBmb3Iga2V5Ym9hcmQgdXNlIGl0IG1ha2VzIHNlbnNlLlxuICogVE9ETzogZmluZCBhIGJldHRlciB0ZWNobmlxdWUgdG8gc29sdmUgdGhpcyBwcm9ibGVtXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvbldpbmRvd0JsdXIoKTogdm9pZCB7XG4gIGNvbnN0IGFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50IHwgbnVsbDtcblxuICBpZiAoaXNSZWZlcmVuY2VFbGVtZW50KGFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBhY3RpdmVFbGVtZW50Ll90aXBweSE7XG5cbiAgICBpZiAoYWN0aXZlRWxlbWVudC5ibHVyICYmICFpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUpIHtcbiAgICAgIGFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBiaW5kR2xvYmFsRXZlbnRMaXN0ZW5lcnMoKTogdm9pZCB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvbkRvY3VtZW50VG91Y2hTdGFydCwgVE9VQ0hfT1BUSU9OUyk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgb25XaW5kb3dCbHVyKTtcbn1cbiIsICJleHBvcnQgY29uc3QgaXNCcm93c2VyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJztcblxuZXhwb3J0IGNvbnN0IGlzSUUxMSA9IGlzQnJvd3NlclxuICA/IC8vIEB0cy1pZ25vcmVcbiAgICAhIXdpbmRvdy5tc0NyeXB0b1xuICA6IGZhbHNlO1xuIiwgImltcG9ydCB7VGFyZ2V0c30gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNZW1vcnlMZWFrV2FybmluZyhtZXRob2Q6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHR4dCA9IG1ldGhvZCA9PT0gJ2Rlc3Ryb3knID8gJ24gYWxyZWFkeS0nIDogJyAnO1xuXG4gIHJldHVybiBbXG4gICAgYCR7bWV0aG9kfSgpIHdhcyBjYWxsZWQgb24gYSR7dHh0fWRlc3Ryb3llZCBpbnN0YW5jZS4gVGhpcyBpcyBhIG5vLW9wIGJ1dGAsXG4gICAgJ2luZGljYXRlcyBhIHBvdGVudGlhbCBtZW1vcnkgbGVhay4nLFxuICBdLmpvaW4oJyAnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFuKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBzcGFjZXNBbmRUYWJzID0gL1sgXFx0XXsyLH0vZztcbiAgY29uc3QgbGluZVN0YXJ0V2l0aFNwYWNlcyA9IC9eWyBcXHRdKi9nbTtcblxuICByZXR1cm4gdmFsdWVcbiAgICAucmVwbGFjZShzcGFjZXNBbmRUYWJzLCAnICcpXG4gICAgLnJlcGxhY2UobGluZVN0YXJ0V2l0aFNwYWNlcywgJycpXG4gICAgLnRyaW0oKTtcbn1cblxuZnVuY3Rpb24gZ2V0RGV2TWVzc2FnZShtZXNzYWdlOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gY2xlYW4oYFxuICAlY3RpcHB5LmpzXG5cbiAgJWMke2NsZWFuKG1lc3NhZ2UpfVxuXG4gICVj8J+Rt+KAjSBUaGlzIGlzIGEgZGV2ZWxvcG1lbnQtb25seSBtZXNzYWdlLiBJdCB3aWxsIGJlIHJlbW92ZWQgaW4gcHJvZHVjdGlvbi5cbiAgYCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGb3JtYXR0ZWRNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgcmV0dXJuIFtcbiAgICBnZXREZXZNZXNzYWdlKG1lc3NhZ2UpLFxuICAgIC8vIHRpdGxlXG4gICAgJ2NvbG9yOiAjMDBDNTg0OyBmb250LXNpemU6IDEuM2VtOyBmb250LXdlaWdodDogYm9sZDsnLFxuICAgIC8vIG1lc3NhZ2VcbiAgICAnbGluZS1oZWlnaHQ6IDEuNScsXG4gICAgLy8gZm9vdGVyXG4gICAgJ2NvbG9yOiAjYTZhMDk1OycsXG4gIF07XG59XG5cbi8vIEFzc3VtZSB3YXJuaW5ncyBhbmQgZXJyb3JzIG5ldmVyIGhhdmUgdGhlIHNhbWUgbWVzc2FnZVxubGV0IHZpc2l0ZWRNZXNzYWdlczogU2V0PHN0cmluZz47XG5pZiAoX19ERVZfXykge1xuICByZXNldFZpc2l0ZWRNZXNzYWdlcygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRWaXNpdGVkTWVzc2FnZXMoKTogdm9pZCB7XG4gIHZpc2l0ZWRNZXNzYWdlcyA9IG5ldyBTZXQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdhcm5XaGVuKGNvbmRpdGlvbjogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gIGlmIChjb25kaXRpb24gJiYgIXZpc2l0ZWRNZXNzYWdlcy5oYXMobWVzc2FnZSkpIHtcbiAgICB2aXNpdGVkTWVzc2FnZXMuYWRkKG1lc3NhZ2UpO1xuICAgIGNvbnNvbGUud2FybiguLi5nZXRGb3JtYXR0ZWRNZXNzYWdlKG1lc3NhZ2UpKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXJyb3JXaGVuKGNvbmRpdGlvbjogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gIGlmIChjb25kaXRpb24gJiYgIXZpc2l0ZWRNZXNzYWdlcy5oYXMobWVzc2FnZSkpIHtcbiAgICB2aXNpdGVkTWVzc2FnZXMuYWRkKG1lc3NhZ2UpO1xuICAgIGNvbnNvbGUuZXJyb3IoLi4uZ2V0Rm9ybWF0dGVkTWVzc2FnZShtZXNzYWdlKSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlVGFyZ2V0cyh0YXJnZXRzOiBUYXJnZXRzKTogdm9pZCB7XG4gIGNvbnN0IGRpZFBhc3NGYWxzeVZhbHVlID0gIXRhcmdldHM7XG4gIGNvbnN0IGRpZFBhc3NQbGFpbk9iamVjdCA9XG4gICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHRhcmdldHMpID09PSAnW29iamVjdCBPYmplY3RdJyAmJlxuICAgICEodGFyZ2V0cyBhcyBhbnkpLmFkZEV2ZW50TGlzdGVuZXI7XG5cbiAgZXJyb3JXaGVuKFxuICAgIGRpZFBhc3NGYWxzeVZhbHVlLFxuICAgIFtcbiAgICAgICd0aXBweSgpIHdhcyBwYXNzZWQnLFxuICAgICAgJ2AnICsgU3RyaW5nKHRhcmdldHMpICsgJ2AnLFxuICAgICAgJ2FzIGl0cyB0YXJnZXRzIChmaXJzdCkgYXJndW1lbnQuIFZhbGlkIHR5cGVzIGFyZTogU3RyaW5nLCBFbGVtZW50LCcsXG4gICAgICAnRWxlbWVudFtdLCBvciBOb2RlTGlzdC4nLFxuICAgIF0uam9pbignICcpXG4gICk7XG5cbiAgZXJyb3JXaGVuKFxuICAgIGRpZFBhc3NQbGFpbk9iamVjdCxcbiAgICBbXG4gICAgICAndGlwcHkoKSB3YXMgcGFzc2VkIGEgcGxhaW4gb2JqZWN0IHdoaWNoIGlzIG5vdCBzdXBwb3J0ZWQgYXMgYW4gYXJndW1lbnQnLFxuICAgICAgJ2ZvciB2aXJ0dWFsIHBvc2l0aW9uaW5nLiBVc2UgcHJvcHMuZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdCBpbnN0ZWFkLicsXG4gICAgXS5qb2luKCcgJylcbiAgKTtcbn1cbiIsICJpbXBvcnQge0RlZmF1bHRQcm9wcywgUGx1Z2luLCBQcm9wcywgUmVmZXJlbmNlRWxlbWVudCwgVGlwcHl9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtcbiAgaGFzT3duUHJvcGVydHksXG4gIHJlbW92ZVByb3BlcnRpZXMsXG4gIGludm9rZVdpdGhBcmdzT3JSZXR1cm4sXG59IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHt3YXJuV2hlbn0gZnJvbSAnLi92YWxpZGF0aW9uJztcbmltcG9ydCB7VElQUFlfREVGQVVMVF9BUFBFTkRfVE99IGZyb20gJy4vY29uc3RhbnRzJztcblxuY29uc3QgcGx1Z2luUHJvcHMgPSB7XG4gIGFuaW1hdGVGaWxsOiBmYWxzZSxcbiAgZm9sbG93Q3Vyc29yOiBmYWxzZSxcbiAgaW5saW5lUG9zaXRpb25pbmc6IGZhbHNlLFxuICBzdGlja3k6IGZhbHNlLFxufTtcblxuY29uc3QgcmVuZGVyUHJvcHMgPSB7XG4gIGFsbG93SFRNTDogZmFsc2UsXG4gIGFuaW1hdGlvbjogJ2ZhZGUnLFxuICBhcnJvdzogdHJ1ZSxcbiAgY29udGVudDogJycsXG4gIGluZXJ0aWE6IGZhbHNlLFxuICBtYXhXaWR0aDogMzUwLFxuICByb2xlOiAndG9vbHRpcCcsXG4gIHRoZW1lOiAnJyxcbiAgekluZGV4OiA5OTk5LFxufTtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRQcm9wczogRGVmYXVsdFByb3BzID0ge1xuICBhcHBlbmRUbzogVElQUFlfREVGQVVMVF9BUFBFTkRfVE8sXG4gIGFyaWE6IHtcbiAgICBjb250ZW50OiAnYXV0bycsXG4gICAgZXhwYW5kZWQ6ICdhdXRvJyxcbiAgfSxcbiAgZGVsYXk6IDAsXG4gIGR1cmF0aW9uOiBbMzAwLCAyNTBdLFxuICBnZXRSZWZlcmVuY2VDbGllbnRSZWN0OiBudWxsLFxuICBoaWRlT25DbGljazogdHJ1ZSxcbiAgaWdub3JlQXR0cmlidXRlczogZmFsc2UsXG4gIGludGVyYWN0aXZlOiBmYWxzZSxcbiAgaW50ZXJhY3RpdmVCb3JkZXI6IDIsXG4gIGludGVyYWN0aXZlRGVib3VuY2U6IDAsXG4gIG1vdmVUcmFuc2l0aW9uOiAnJyxcbiAgb2Zmc2V0OiBbMCwgMTBdLFxuICBvbkFmdGVyVXBkYXRlKCkge30sXG4gIG9uQmVmb3JlVXBkYXRlKCkge30sXG4gIG9uQ3JlYXRlKCkge30sXG4gIG9uRGVzdHJveSgpIHt9LFxuICBvbkhpZGRlbigpIHt9LFxuICBvbkhpZGUoKSB7fSxcbiAgb25Nb3VudCgpIHt9LFxuICBvblNob3coKSB7fSxcbiAgb25TaG93bigpIHt9LFxuICBvblRyaWdnZXIoKSB7fSxcbiAgb25VbnRyaWdnZXIoKSB7fSxcbiAgb25DbGlja091dHNpZGUoKSB7fSxcbiAgcGxhY2VtZW50OiAndG9wJyxcbiAgcGx1Z2luczogW10sXG4gIHBvcHBlck9wdGlvbnM6IHt9LFxuICByZW5kZXI6IG51bGwsXG4gIHNob3dPbkNyZWF0ZTogZmFsc2UsXG4gIHRvdWNoOiB0cnVlLFxuICB0cmlnZ2VyOiAnbW91c2VlbnRlciBmb2N1cycsXG4gIHRyaWdnZXJUYXJnZXQ6IG51bGwsXG4gIC4uLnBsdWdpblByb3BzLFxuICAuLi5yZW5kZXJQcm9wcyxcbn07XG5cbmNvbnN0IGRlZmF1bHRLZXlzID0gT2JqZWN0LmtleXMoZGVmYXVsdFByb3BzKTtcblxuZXhwb3J0IGNvbnN0IHNldERlZmF1bHRQcm9wczogVGlwcHlbJ3NldERlZmF1bHRQcm9wcyddID0gKHBhcnRpYWxQcm9wcykgPT4ge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoX19ERVZfXykge1xuICAgIHZhbGlkYXRlUHJvcHMocGFydGlhbFByb3BzLCBbXSk7XG4gIH1cblxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocGFydGlhbFByb3BzKSBhcyBBcnJheTxrZXlvZiBEZWZhdWx0UHJvcHM+O1xuICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgIChkZWZhdWx0UHJvcHMgYXMgYW55KVtrZXldID0gcGFydGlhbFByb3BzW2tleV07XG4gIH0pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEV4dGVuZGVkUGFzc2VkUHJvcHMoXG4gIHBhc3NlZFByb3BzOiBQYXJ0aWFsPFByb3BzPiAmIFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4pOiBQYXJ0aWFsPFByb3BzPiB7XG4gIGNvbnN0IHBsdWdpbnMgPSBwYXNzZWRQcm9wcy5wbHVnaW5zIHx8IFtdO1xuICBjb25zdCBwbHVnaW5Qcm9wcyA9IHBsdWdpbnMucmVkdWNlPFJlY29yZDxzdHJpbmcsIHVua25vd24+PigoYWNjLCBwbHVnaW4pID0+IHtcbiAgICBjb25zdCB7bmFtZSwgZGVmYXVsdFZhbHVlfSA9IHBsdWdpbjtcblxuICAgIGlmIChuYW1lKSB7XG4gICAgICBhY2NbbmFtZV0gPVxuICAgICAgICBwYXNzZWRQcm9wc1tuYW1lXSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyBwYXNzZWRQcm9wc1tuYW1lXVxuICAgICAgICAgIDogKGRlZmF1bHRQcm9wcyBhcyBhbnkpW25hbWVdID8/IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5wYXNzZWRQcm9wcyxcbiAgICAuLi5wbHVnaW5Qcm9wcyxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGFBdHRyaWJ1dGVQcm9wcyhcbiAgcmVmZXJlbmNlOiBSZWZlcmVuY2VFbGVtZW50LFxuICBwbHVnaW5zOiBQbHVnaW5bXVxuKTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4ge1xuICBjb25zdCBwcm9wS2V5cyA9IHBsdWdpbnNcbiAgICA/IE9iamVjdC5rZXlzKGdldEV4dGVuZGVkUGFzc2VkUHJvcHMoey4uLmRlZmF1bHRQcm9wcywgcGx1Z2luc30pKVxuICAgIDogZGVmYXVsdEtleXM7XG5cbiAgY29uc3QgcHJvcHMgPSBwcm9wS2V5cy5yZWR1Y2UoXG4gICAgKGFjYzogUGFydGlhbDxQcm9wcz4gJiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiwga2V5KSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZUFzU3RyaW5nID0gKFxuICAgICAgICByZWZlcmVuY2UuZ2V0QXR0cmlidXRlKGBkYXRhLXRpcHB5LSR7a2V5fWApIHx8ICcnXG4gICAgICApLnRyaW0oKTtcblxuICAgICAgaWYgKCF2YWx1ZUFzU3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9XG5cbiAgICAgIGlmIChrZXkgPT09ICdjb250ZW50Jykge1xuICAgICAgICBhY2Nba2V5XSA9IHZhbHVlQXNTdHJpbmc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGFjY1trZXldID0gSlNPTi5wYXJzZSh2YWx1ZUFzU3RyaW5nKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGFjY1trZXldID0gdmFsdWVBc1N0cmluZztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sXG4gICAge31cbiAgKTtcblxuICByZXR1cm4gcHJvcHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsdWF0ZVByb3BzKFxuICByZWZlcmVuY2U6IFJlZmVyZW5jZUVsZW1lbnQsXG4gIHByb3BzOiBQcm9wc1xuKTogUHJvcHMge1xuICBjb25zdCBvdXQgPSB7XG4gICAgLi4ucHJvcHMsXG4gICAgY29udGVudDogaW52b2tlV2l0aEFyZ3NPclJldHVybihwcm9wcy5jb250ZW50LCBbcmVmZXJlbmNlXSksXG4gICAgLi4uKHByb3BzLmlnbm9yZUF0dHJpYnV0ZXNcbiAgICAgID8ge31cbiAgICAgIDogZ2V0RGF0YUF0dHJpYnV0ZVByb3BzKHJlZmVyZW5jZSwgcHJvcHMucGx1Z2lucykpLFxuICB9O1xuXG4gIG91dC5hcmlhID0ge1xuICAgIC4uLmRlZmF1bHRQcm9wcy5hcmlhLFxuICAgIC4uLm91dC5hcmlhLFxuICB9O1xuXG4gIG91dC5hcmlhID0ge1xuICAgIGV4cGFuZGVkOlxuICAgICAgb3V0LmFyaWEuZXhwYW5kZWQgPT09ICdhdXRvJyA/IHByb3BzLmludGVyYWN0aXZlIDogb3V0LmFyaWEuZXhwYW5kZWQsXG4gICAgY29udGVudDpcbiAgICAgIG91dC5hcmlhLmNvbnRlbnQgPT09ICdhdXRvJ1xuICAgICAgICA/IHByb3BzLmludGVyYWN0aXZlXG4gICAgICAgICAgPyBudWxsXG4gICAgICAgICAgOiAnZGVzY3JpYmVkYnknXG4gICAgICAgIDogb3V0LmFyaWEuY29udGVudCxcbiAgfTtcblxuICByZXR1cm4gb3V0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVQcm9wcyhcbiAgcGFydGlhbFByb3BzOiBQYXJ0aWFsPFByb3BzPiA9IHt9LFxuICBwbHVnaW5zOiBQbHVnaW5bXSA9IFtdXG4pOiB2b2lkIHtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHBhcnRpYWxQcm9wcykgYXMgQXJyYXk8a2V5b2YgUHJvcHM+O1xuICBrZXlzLmZvckVhY2goKHByb3ApID0+IHtcbiAgICBjb25zdCBub25QbHVnaW5Qcm9wcyA9IHJlbW92ZVByb3BlcnRpZXMoXG4gICAgICBkZWZhdWx0UHJvcHMsXG4gICAgICBPYmplY3Qua2V5cyhwbHVnaW5Qcm9wcylcbiAgICApO1xuXG4gICAgbGV0IGRpZFBhc3NVbmtub3duUHJvcCA9ICFoYXNPd25Qcm9wZXJ0eShub25QbHVnaW5Qcm9wcywgcHJvcCk7XG5cbiAgICAvLyBDaGVjayBpZiB0aGUgcHJvcCBleGlzdHMgaW4gYHBsdWdpbnNgXG4gICAgaWYgKGRpZFBhc3NVbmtub3duUHJvcCkge1xuICAgICAgZGlkUGFzc1Vua25vd25Qcm9wID1cbiAgICAgICAgcGx1Z2lucy5maWx0ZXIoKHBsdWdpbikgPT4gcGx1Z2luLm5hbWUgPT09IHByb3ApLmxlbmd0aCA9PT0gMDtcbiAgICB9XG5cbiAgICB3YXJuV2hlbihcbiAgICAgIGRpZFBhc3NVbmtub3duUHJvcCxcbiAgICAgIFtcbiAgICAgICAgYFxcYCR7cHJvcH1cXGBgLFxuICAgICAgICBcImlzIG5vdCBhIHZhbGlkIHByb3AuIFlvdSBtYXkgaGF2ZSBzcGVsbGVkIGl0IGluY29ycmVjdGx5LCBvciBpZiBpdCdzXCIsXG4gICAgICAgICdhIHBsdWdpbiwgZm9yZ290IHRvIHBhc3MgaXQgaW4gYW4gYXJyYXkgYXMgcHJvcHMucGx1Z2lucy4nLFxuICAgICAgICAnXFxuXFxuJyxcbiAgICAgICAgJ0FsbCBwcm9wczogaHR0cHM6Ly9hdG9taWtzLmdpdGh1Yi5pby90aXBweWpzL3Y2L2FsbC1wcm9wcy9cXG4nLFxuICAgICAgICAnUGx1Z2luczogaHR0cHM6Ly9hdG9taWtzLmdpdGh1Yi5pby90aXBweWpzL3Y2L3BsdWdpbnMvJyxcbiAgICAgIF0uam9pbignICcpXG4gICAgKTtcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgQVJST1dfQ0xBU1MsXG4gIEJBQ0tEUk9QX0NMQVNTLFxuICBCT1hfQ0xBU1MsXG4gIENPTlRFTlRfQ0xBU1MsXG4gIFNWR19BUlJPV19DTEFTUyxcbn0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHtkaXYsIGlzRWxlbWVudH0gZnJvbSAnLi9kb20tdXRpbHMnO1xuaW1wb3J0IHtJbnN0YW5jZSwgUG9wcGVyRWxlbWVudCwgUHJvcHN9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtQb3BwZXJDaGlsZHJlbn0gZnJvbSAnLi90eXBlcy1pbnRlcm5hbCc7XG5pbXBvcnQge2FycmF5RnJvbX0gZnJvbSAnLi91dGlscyc7XG5cbi8vIEZpcmVmb3ggZXh0ZW5zaW9ucyBkb24ndCBhbGxvdyAuaW5uZXJIVE1MID0gXCIuLi5cIiBwcm9wZXJ0eS4gVGhpcyB0cmlja3MgaXQuXG5jb25zdCBpbm5lckhUTUwgPSAoKTogJ2lubmVySFRNTCcgPT4gJ2lubmVySFRNTCc7XG5cbmZ1bmN0aW9uIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKGVsZW1lbnQ6IEVsZW1lbnQsIGh0bWw6IHN0cmluZyk6IHZvaWQge1xuICBlbGVtZW50W2lubmVySFRNTCgpXSA9IGh0bWw7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFycm93RWxlbWVudCh2YWx1ZTogUHJvcHNbJ2Fycm93J10pOiBIVE1MRGl2RWxlbWVudCB7XG4gIGNvbnN0IGFycm93ID0gZGl2KCk7XG5cbiAgaWYgKHZhbHVlID09PSB0cnVlKSB7XG4gICAgYXJyb3cuY2xhc3NOYW1lID0gQVJST1dfQ0xBU1M7XG4gIH0gZWxzZSB7XG4gICAgYXJyb3cuY2xhc3NOYW1lID0gU1ZHX0FSUk9XX0NMQVNTO1xuXG4gICAgaWYgKGlzRWxlbWVudCh2YWx1ZSkpIHtcbiAgICAgIGFycm93LmFwcGVuZENoaWxkKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwoYXJyb3csIHZhbHVlIGFzIHN0cmluZyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFycm93O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q29udGVudChjb250ZW50OiBIVE1MRGl2RWxlbWVudCwgcHJvcHM6IFByb3BzKTogdm9pZCB7XG4gIGlmIChpc0VsZW1lbnQocHJvcHMuY29udGVudCkpIHtcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTChjb250ZW50LCAnJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwcm9wcy5jb250ZW50KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvcHMuY29udGVudCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmIChwcm9wcy5hbGxvd0hUTUwpIHtcbiAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKGNvbnRlbnQsIHByb3BzLmNvbnRlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZW50LnRleHRDb250ZW50ID0gcHJvcHMuY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENoaWxkcmVuKHBvcHBlcjogUG9wcGVyRWxlbWVudCk6IFBvcHBlckNoaWxkcmVuIHtcbiAgY29uc3QgYm94ID0gcG9wcGVyLmZpcnN0RWxlbWVudENoaWxkIGFzIEhUTUxEaXZFbGVtZW50O1xuICBjb25zdCBib3hDaGlsZHJlbiA9IGFycmF5RnJvbShib3guY2hpbGRyZW4pO1xuXG4gIHJldHVybiB7XG4gICAgYm94LFxuICAgIGNvbnRlbnQ6IGJveENoaWxkcmVuLmZpbmQoKG5vZGUpID0+IG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKENPTlRFTlRfQ0xBU1MpKSxcbiAgICBhcnJvdzogYm94Q2hpbGRyZW4uZmluZChcbiAgICAgIChub2RlKSA9PlxuICAgICAgICBub2RlLmNsYXNzTGlzdC5jb250YWlucyhBUlJPV19DTEFTUykgfHxcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoU1ZHX0FSUk9XX0NMQVNTKVxuICAgICksXG4gICAgYmFja2Ryb3A6IGJveENoaWxkcmVuLmZpbmQoKG5vZGUpID0+XG4gICAgICBub2RlLmNsYXNzTGlzdC5jb250YWlucyhCQUNLRFJPUF9DTEFTUylcbiAgICApLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKFxuICBpbnN0YW5jZTogSW5zdGFuY2Vcbik6IHtcbiAgcG9wcGVyOiBQb3BwZXJFbGVtZW50O1xuICBvblVwZGF0ZT86IChwcmV2UHJvcHM6IFByb3BzLCBuZXh0UHJvcHM6IFByb3BzKSA9PiB2b2lkO1xufSB7XG4gIGNvbnN0IHBvcHBlciA9IGRpdigpO1xuXG4gIGNvbnN0IGJveCA9IGRpdigpO1xuICBib3guY2xhc3NOYW1lID0gQk9YX0NMQVNTO1xuICBib3guc2V0QXR0cmlidXRlKCdkYXRhLXN0YXRlJywgJ2hpZGRlbicpO1xuICBib3guc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBkaXYoKTtcbiAgY29udGVudC5jbGFzc05hbWUgPSBDT05URU5UX0NMQVNTO1xuICBjb250ZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1zdGF0ZScsICdoaWRkZW4nKTtcblxuICBzZXRDb250ZW50KGNvbnRlbnQsIGluc3RhbmNlLnByb3BzKTtcblxuICBwb3BwZXIuYXBwZW5kQ2hpbGQoYm94KTtcbiAgYm94LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gIG9uVXBkYXRlKGluc3RhbmNlLnByb3BzLCBpbnN0YW5jZS5wcm9wcyk7XG5cbiAgZnVuY3Rpb24gb25VcGRhdGUocHJldlByb3BzOiBQcm9wcywgbmV4dFByb3BzOiBQcm9wcyk6IHZvaWQge1xuICAgIGNvbnN0IHtib3gsIGNvbnRlbnQsIGFycm93fSA9IGdldENoaWxkcmVuKHBvcHBlcik7XG5cbiAgICBpZiAobmV4dFByb3BzLnRoZW1lKSB7XG4gICAgICBib3guc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgbmV4dFByb3BzLnRoZW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYm94LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10aGVtZScpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgbmV4dFByb3BzLmFuaW1hdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGJveC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYW5pbWF0aW9uJywgbmV4dFByb3BzLmFuaW1hdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJveC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtYW5pbWF0aW9uJyk7XG4gICAgfVxuXG4gICAgaWYgKG5leHRQcm9wcy5pbmVydGlhKSB7XG4gICAgICBib3guc2V0QXR0cmlidXRlKCdkYXRhLWluZXJ0aWEnLCAnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJveC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtaW5lcnRpYScpO1xuICAgIH1cblxuICAgIGJveC5zdHlsZS5tYXhXaWR0aCA9XG4gICAgICB0eXBlb2YgbmV4dFByb3BzLm1heFdpZHRoID09PSAnbnVtYmVyJ1xuICAgICAgICA/IGAke25leHRQcm9wcy5tYXhXaWR0aH1weGBcbiAgICAgICAgOiBuZXh0UHJvcHMubWF4V2lkdGg7XG5cbiAgICBpZiAobmV4dFByb3BzLnJvbGUpIHtcbiAgICAgIGJveC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCBuZXh0UHJvcHMucm9sZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJveC5yZW1vdmVBdHRyaWJ1dGUoJ3JvbGUnKTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBwcmV2UHJvcHMuY29udGVudCAhPT0gbmV4dFByb3BzLmNvbnRlbnQgfHxcbiAgICAgIHByZXZQcm9wcy5hbGxvd0hUTUwgIT09IG5leHRQcm9wcy5hbGxvd0hUTUxcbiAgICApIHtcbiAgICAgIHNldENvbnRlbnQoY29udGVudCwgaW5zdGFuY2UucHJvcHMpO1xuICAgIH1cblxuICAgIGlmIChuZXh0UHJvcHMuYXJyb3cpIHtcbiAgICAgIGlmICghYXJyb3cpIHtcbiAgICAgICAgYm94LmFwcGVuZENoaWxkKGNyZWF0ZUFycm93RWxlbWVudChuZXh0UHJvcHMuYXJyb3cpKTtcbiAgICAgIH0gZWxzZSBpZiAocHJldlByb3BzLmFycm93ICE9PSBuZXh0UHJvcHMuYXJyb3cpIHtcbiAgICAgICAgYm94LnJlbW92ZUNoaWxkKGFycm93KTtcbiAgICAgICAgYm94LmFwcGVuZENoaWxkKGNyZWF0ZUFycm93RWxlbWVudChuZXh0UHJvcHMuYXJyb3cpKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFycm93KSB7XG4gICAgICBib3gucmVtb3ZlQ2hpbGQoYXJyb3chKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBvcHBlcixcbiAgICBvblVwZGF0ZSxcbiAgfTtcbn1cblxuLy8gUnVudGltZSBjaGVjayB0byBpZGVudGlmeSBpZiB0aGUgcmVuZGVyIGZ1bmN0aW9uIGlzIHRoZSBkZWZhdWx0IG9uZTsgdGhpc1xuLy8gd2F5IHdlIGNhbiBhcHBseSBkZWZhdWx0IENTUyB0cmFuc2l0aW9ucyBsb2dpYyBhbmQgaXQgY2FuIGJlIHRyZWUtc2hha2VuIGF3YXlcbnJlbmRlci4kJHRpcHB5ID0gdHJ1ZTtcbiIsICJpbXBvcnQge2NyZWF0ZVBvcHBlciwgU3RyaWN0TW9kaWZpZXJzLCBNb2RpZmllcn0gZnJvbSAnQHBvcHBlcmpzL2NvcmUnO1xuaW1wb3J0IHtjdXJyZW50SW5wdXR9IGZyb20gJy4vYmluZEdsb2JhbEV2ZW50TGlzdGVuZXJzJztcbmltcG9ydCB7aXNJRTExfSBmcm9tICcuL2Jyb3dzZXInO1xuaW1wb3J0IHtUSVBQWV9ERUZBVUxUX0FQUEVORF9UTywgVE9VQ0hfT1BUSU9OU30gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHtcbiAgYWN0dWFsQ29udGFpbnMsXG4gIGRpdixcbiAgZ2V0T3duZXJEb2N1bWVudCxcbiAgaXNDdXJzb3JPdXRzaWRlSW50ZXJhY3RpdmVCb3JkZXIsXG4gIGlzTW91c2VFdmVudCxcbiAgc2V0VHJhbnNpdGlvbkR1cmF0aW9uLFxuICBzZXRWaXNpYmlsaXR5U3RhdGUsXG4gIHVwZGF0ZVRyYW5zaXRpb25FbmRMaXN0ZW5lcixcbn0gZnJvbSAnLi9kb20tdXRpbHMnO1xuaW1wb3J0IHtkZWZhdWx0UHJvcHMsIGV2YWx1YXRlUHJvcHMsIGdldEV4dGVuZGVkUGFzc2VkUHJvcHN9IGZyb20gJy4vcHJvcHMnO1xuaW1wb3J0IHtnZXRDaGlsZHJlbn0gZnJvbSAnLi90ZW1wbGF0ZSc7XG5pbXBvcnQge1xuICBDb250ZW50LFxuICBJbnN0YW5jZSxcbiAgTGlmZWN5Y2xlSG9va3MsXG4gIFBvcHBlckVsZW1lbnQsXG4gIFByb3BzLFxuICBSZWZlcmVuY2VFbGVtZW50LFxufSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7TGlzdGVuZXJPYmplY3QsIFBvcHBlclRyZWVEYXRhLCBQb3BwZXJDaGlsZHJlbn0gZnJvbSAnLi90eXBlcy1pbnRlcm5hbCc7XG5pbXBvcnQge1xuICBhcnJheUZyb20sXG4gIGRlYm91bmNlLFxuICBnZXRWYWx1ZUF0SW5kZXhPclJldHVybixcbiAgaW52b2tlV2l0aEFyZ3NPclJldHVybixcbiAgbm9ybWFsaXplVG9BcnJheSxcbiAgcHVzaElmVW5pcXVlLFxuICBzcGxpdEJ5U3BhY2VzLFxuICB1bmlxdWUsXG4gIHJlbW92ZVVuZGVmaW5lZFByb3BzLFxufSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7Y3JlYXRlTWVtb3J5TGVha1dhcm5pbmcsIGVycm9yV2hlbiwgd2FybldoZW59IGZyb20gJy4vdmFsaWRhdGlvbic7XG5cbmxldCBpZENvdW50ZXIgPSAxO1xubGV0IG1vdXNlTW92ZUxpc3RlbmVyczogKChldmVudDogTW91c2VFdmVudCkgPT4gdm9pZClbXSA9IFtdO1xuXG4vLyBVc2VkIGJ5IGBoaWRlQWxsKClgXG5leHBvcnQgbGV0IG1vdW50ZWRJbnN0YW5jZXM6IEluc3RhbmNlW10gPSBbXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVGlwcHkoXG4gIHJlZmVyZW5jZTogUmVmZXJlbmNlRWxlbWVudCxcbiAgcGFzc2VkUHJvcHM6IFBhcnRpYWw8UHJvcHM+XG4pOiBJbnN0YW5jZSB7XG4gIGNvbnN0IHByb3BzID0gZXZhbHVhdGVQcm9wcyhyZWZlcmVuY2UsIHtcbiAgICAuLi5kZWZhdWx0UHJvcHMsXG4gICAgLi4uZ2V0RXh0ZW5kZWRQYXNzZWRQcm9wcyhyZW1vdmVVbmRlZmluZWRQcm9wcyhwYXNzZWRQcm9wcykpLFxuICB9KTtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8g8J+UkiBQcml2YXRlIG1lbWJlcnNcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGxldCBzaG93VGltZW91dDogYW55O1xuICBsZXQgaGlkZVRpbWVvdXQ6IGFueTtcbiAgbGV0IHNjaGVkdWxlSGlkZUFuaW1hdGlvbkZyYW1lOiBudW1iZXI7XG4gIGxldCBpc1Zpc2libGVGcm9tQ2xpY2sgPSBmYWxzZTtcbiAgbGV0IGRpZEhpZGVEdWVUb0RvY3VtZW50TW91c2VEb3duID0gZmFsc2U7XG4gIGxldCBkaWRUb3VjaE1vdmUgPSBmYWxzZTtcbiAgbGV0IGlnbm9yZU9uRmlyc3RVcGRhdGUgPSBmYWxzZTtcbiAgbGV0IGxhc3RUcmlnZ2VyRXZlbnQ6IEV2ZW50IHwgdW5kZWZpbmVkO1xuICBsZXQgY3VycmVudFRyYW5zaXRpb25FbmRMaXN0ZW5lcjogKGV2ZW50OiBUcmFuc2l0aW9uRXZlbnQpID0+IHZvaWQ7XG4gIGxldCBvbkZpcnN0VXBkYXRlOiAoKSA9PiB2b2lkO1xuICBsZXQgbGlzdGVuZXJzOiBMaXN0ZW5lck9iamVjdFtdID0gW107XG4gIGxldCBkZWJvdW5jZWRPbk1vdXNlTW92ZSA9IGRlYm91bmNlKG9uTW91c2VNb3ZlLCBwcm9wcy5pbnRlcmFjdGl2ZURlYm91bmNlKTtcbiAgbGV0IGN1cnJlbnRUYXJnZXQ6IEVsZW1lbnQ7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIPCflJEgUHVibGljIG1lbWJlcnNcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGNvbnN0IGlkID0gaWRDb3VudGVyKys7XG4gIGNvbnN0IHBvcHBlckluc3RhbmNlID0gbnVsbDtcbiAgY29uc3QgcGx1Z2lucyA9IHVuaXF1ZShwcm9wcy5wbHVnaW5zKTtcblxuICBjb25zdCBzdGF0ZSA9IHtcbiAgICAvLyBJcyB0aGUgaW5zdGFuY2UgY3VycmVudGx5IGVuYWJsZWQ/XG4gICAgaXNFbmFibGVkOiB0cnVlLFxuICAgIC8vIElzIHRoZSB0aXBweSBjdXJyZW50bHkgc2hvd2luZyBhbmQgbm90IHRyYW5zaXRpb25pbmcgb3V0P1xuICAgIGlzVmlzaWJsZTogZmFsc2UsXG4gICAgLy8gSGFzIHRoZSBpbnN0YW5jZSBiZWVuIGRlc3Ryb3llZD9cbiAgICBpc0Rlc3Ryb3llZDogZmFsc2UsXG4gICAgLy8gSXMgdGhlIHRpcHB5IGN1cnJlbnRseSBtb3VudGVkIHRvIHRoZSBET00/XG4gICAgaXNNb3VudGVkOiBmYWxzZSxcbiAgICAvLyBIYXMgdGhlIHRpcHB5IGZpbmlzaGVkIHRyYW5zaXRpb25pbmcgaW4/XG4gICAgaXNTaG93bjogZmFsc2UsXG4gIH07XG5cbiAgY29uc3QgaW5zdGFuY2U6IEluc3RhbmNlID0ge1xuICAgIC8vIHByb3BlcnRpZXNcbiAgICBpZCxcbiAgICByZWZlcmVuY2UsXG4gICAgcG9wcGVyOiBkaXYoKSxcbiAgICBwb3BwZXJJbnN0YW5jZSxcbiAgICBwcm9wcyxcbiAgICBzdGF0ZSxcbiAgICBwbHVnaW5zLFxuICAgIC8vIG1ldGhvZHNcbiAgICBjbGVhckRlbGF5VGltZW91dHMsXG4gICAgc2V0UHJvcHMsXG4gICAgc2V0Q29udGVudCxcbiAgICBzaG93LFxuICAgIGhpZGUsXG4gICAgaGlkZVdpdGhJbnRlcmFjdGl2aXR5LFxuICAgIGVuYWJsZSxcbiAgICBkaXNhYmxlLFxuICAgIHVubW91bnQsXG4gICAgZGVzdHJveSxcbiAgfTtcblxuICAvLyBUT0RPOiBJbnZlc3RpZ2F0ZSB3aHkgdGhpcyBlYXJseSByZXR1cm4gY2F1c2VzIGEgVERaIGVycm9yIGluIHRoZSB0ZXN0cyDigJRcbiAgLy8gaXQgZG9lc24ndCBzZWVtIHRvIGhhcHBlbiBpbiB0aGUgYnJvd3NlclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKCFwcm9wcy5yZW5kZXIpIHtcbiAgICBpZiAoX19ERVZfXykge1xuICAgICAgZXJyb3JXaGVuKHRydWUsICdyZW5kZXIoKSBmdW5jdGlvbiBoYXMgbm90IGJlZW4gc3VwcGxpZWQuJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIEluaXRpYWwgbXV0YXRpb25zXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBjb25zdCB7cG9wcGVyLCBvblVwZGF0ZX0gPSBwcm9wcy5yZW5kZXIoaW5zdGFuY2UpO1xuXG4gIHBvcHBlci5zZXRBdHRyaWJ1dGUoJ2RhdGEtX19OQU1FU1BBQ0VfUFJFRklYX18tcm9vdCcsICcnKTtcbiAgcG9wcGVyLmlkID0gYF9fTkFNRVNQQUNFX1BSRUZJWF9fLSR7aW5zdGFuY2UuaWR9YDtcblxuICBpbnN0YW5jZS5wb3BwZXIgPSBwb3BwZXI7XG4gIHJlZmVyZW5jZS5fdGlwcHkgPSBpbnN0YW5jZTtcbiAgcG9wcGVyLl90aXBweSA9IGluc3RhbmNlO1xuXG4gIGNvbnN0IHBsdWdpbnNIb29rcyA9IHBsdWdpbnMubWFwKChwbHVnaW4pID0+IHBsdWdpbi5mbihpbnN0YW5jZSkpO1xuICBjb25zdCBoYXNBcmlhRXhwYW5kZWQgPSByZWZlcmVuY2UuaGFzQXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJyk7XG5cbiAgYWRkTGlzdGVuZXJzKCk7XG4gIGhhbmRsZUFyaWFFeHBhbmRlZEF0dHJpYnV0ZSgpO1xuICBoYW5kbGVTdHlsZXMoKTtcblxuICBpbnZva2VIb29rKCdvbkNyZWF0ZScsIFtpbnN0YW5jZV0pO1xuXG4gIGlmIChwcm9wcy5zaG93T25DcmVhdGUpIHtcbiAgICBzY2hlZHVsZVNob3coKTtcbiAgfVxuXG4gIC8vIFByZXZlbnQgYSB0aXBweSB3aXRoIGEgZGVsYXkgZnJvbSBoaWRpbmcgaWYgdGhlIGN1cnNvciBsZWZ0IHRoZW4gcmV0dXJuZWRcbiAgLy8gYmVmb3JlIGl0IHN0YXJ0ZWQgaGlkaW5nXG4gIHBvcHBlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgIGlmIChpbnN0YW5jZS5wcm9wcy5pbnRlcmFjdGl2ZSAmJiBpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUpIHtcbiAgICAgIGluc3RhbmNlLmNsZWFyRGVsYXlUaW1lb3V0cygpO1xuICAgIH1cbiAgfSk7XG5cbiAgcG9wcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgaW5zdGFuY2UucHJvcHMuaW50ZXJhY3RpdmUgJiZcbiAgICAgIGluc3RhbmNlLnByb3BzLnRyaWdnZXIuaW5kZXhPZignbW91c2VlbnRlcicpID49IDBcbiAgICApIHtcbiAgICAgIGdldERvY3VtZW50KCkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZGVib3VuY2VkT25Nb3VzZU1vdmUpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyDwn5SSIFByaXZhdGUgbWV0aG9kc1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgZnVuY3Rpb24gZ2V0Tm9ybWFsaXplZFRvdWNoU2V0dGluZ3MoKTogW3N0cmluZyB8IGJvb2xlYW4sIG51bWJlcl0ge1xuICAgIGNvbnN0IHt0b3VjaH0gPSBpbnN0YW5jZS5wcm9wcztcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh0b3VjaCkgPyB0b3VjaCA6IFt0b3VjaCwgMF07XG4gIH1cblxuICBmdW5jdGlvbiBnZXRJc0N1c3RvbVRvdWNoQmVoYXZpb3IoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGdldE5vcm1hbGl6ZWRUb3VjaFNldHRpbmdzKClbMF0gPT09ICdob2xkJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldElzRGVmYXVsdFJlbmRlckZuKCk6IGJvb2xlYW4ge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICByZXR1cm4gISFpbnN0YW5jZS5wcm9wcy5yZW5kZXI/LiQkdGlwcHk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDdXJyZW50VGFyZ2V0KCk6IEVsZW1lbnQge1xuICAgIHJldHVybiBjdXJyZW50VGFyZ2V0IHx8IHJlZmVyZW5jZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERvY3VtZW50KCk6IERvY3VtZW50IHtcbiAgICBjb25zdCBwYXJlbnQgPSBnZXRDdXJyZW50VGFyZ2V0KCkucGFyZW50Tm9kZSBhcyBFbGVtZW50O1xuICAgIHJldHVybiBwYXJlbnQgPyBnZXRPd25lckRvY3VtZW50KHBhcmVudCkgOiBkb2N1bWVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERlZmF1bHRUZW1wbGF0ZUNoaWxkcmVuKCk6IFBvcHBlckNoaWxkcmVuIHtcbiAgICByZXR1cm4gZ2V0Q2hpbGRyZW4ocG9wcGVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERlbGF5KGlzU2hvdzogYm9vbGVhbik6IG51bWJlciB7XG4gICAgLy8gRm9yIHRvdWNoIG9yIGtleWJvYXJkIGlucHV0LCBmb3JjZSBgMGAgZGVsYXkgZm9yIFVYIHJlYXNvbnNcbiAgICAvLyBBbHNvIGlmIHRoZSBpbnN0YW5jZSBpcyBtb3VudGVkIGJ1dCBub3QgdmlzaWJsZSAodHJhbnNpdGlvbmluZyBvdXQpLFxuICAgIC8vIGlnbm9yZSBkZWxheVxuICAgIGlmIChcbiAgICAgIChpbnN0YW5jZS5zdGF0ZS5pc01vdW50ZWQgJiYgIWluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSkgfHxcbiAgICAgIGN1cnJlbnRJbnB1dC5pc1RvdWNoIHx8XG4gICAgICAobGFzdFRyaWdnZXJFdmVudCAmJiBsYXN0VHJpZ2dlckV2ZW50LnR5cGUgPT09ICdmb2N1cycpXG4gICAgKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0VmFsdWVBdEluZGV4T3JSZXR1cm4oXG4gICAgICBpbnN0YW5jZS5wcm9wcy5kZWxheSxcbiAgICAgIGlzU2hvdyA/IDAgOiAxLFxuICAgICAgZGVmYXVsdFByb3BzLmRlbGF5XG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVN0eWxlcyhmcm9tSGlkZSA9IGZhbHNlKTogdm9pZCB7XG4gICAgcG9wcGVyLnN0eWxlLnBvaW50ZXJFdmVudHMgPVxuICAgICAgaW5zdGFuY2UucHJvcHMuaW50ZXJhY3RpdmUgJiYgIWZyb21IaWRlID8gJycgOiAnbm9uZSc7XG4gICAgcG9wcGVyLnN0eWxlLnpJbmRleCA9IGAke2luc3RhbmNlLnByb3BzLnpJbmRleH1gO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlSG9vayhcbiAgICBob29rOiBrZXlvZiBMaWZlY3ljbGVIb29rcyxcbiAgICBhcmdzOiBbSW5zdGFuY2UsIGFueT9dLFxuICAgIHNob3VsZEludm9rZVByb3BzSG9vayA9IHRydWVcbiAgKTogdm9pZCB7XG4gICAgcGx1Z2luc0hvb2tzLmZvckVhY2goKHBsdWdpbkhvb2tzKSA9PiB7XG4gICAgICBpZiAocGx1Z2luSG9va3NbaG9va10pIHtcbiAgICAgICAgcGx1Z2luSG9va3NbaG9va10hKC4uLmFyZ3MpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHNob3VsZEludm9rZVByb3BzSG9vaykge1xuICAgICAgaW5zdGFuY2UucHJvcHNbaG9va10oLi4uYXJncyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQXJpYUNvbnRlbnRBdHRyaWJ1dGUoKTogdm9pZCB7XG4gICAgY29uc3Qge2FyaWF9ID0gaW5zdGFuY2UucHJvcHM7XG5cbiAgICBpZiAoIWFyaWEuY29udGVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGF0dHIgPSBgYXJpYS0ke2FyaWEuY29udGVudH1gO1xuICAgIGNvbnN0IGlkID0gcG9wcGVyLmlkO1xuICAgIGNvbnN0IG5vZGVzID0gbm9ybWFsaXplVG9BcnJheShpbnN0YW5jZS5wcm9wcy50cmlnZ2VyVGFyZ2V0IHx8IHJlZmVyZW5jZSk7XG5cbiAgICBub2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSBub2RlLmdldEF0dHJpYnV0ZShhdHRyKTtcblxuICAgICAgaWYgKGluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSkge1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShhdHRyLCBjdXJyZW50VmFsdWUgPyBgJHtjdXJyZW50VmFsdWV9ICR7aWR9YCA6IGlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5leHRWYWx1ZSA9IGN1cnJlbnRWYWx1ZSAmJiBjdXJyZW50VmFsdWUucmVwbGFjZShpZCwgJycpLnRyaW0oKTtcblxuICAgICAgICBpZiAobmV4dFZhbHVlKSB7XG4gICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoYXR0ciwgbmV4dFZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQXJpYUV4cGFuZGVkQXR0cmlidXRlKCk6IHZvaWQge1xuICAgIGlmIChoYXNBcmlhRXhwYW5kZWQgfHwgIWluc3RhbmNlLnByb3BzLmFyaWEuZXhwYW5kZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlcyA9IG5vcm1hbGl6ZVRvQXJyYXkoaW5zdGFuY2UucHJvcHMudHJpZ2dlclRhcmdldCB8fCByZWZlcmVuY2UpO1xuXG4gICAgbm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgaWYgKGluc3RhbmNlLnByb3BzLmludGVyYWN0aXZlKSB7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICdhcmlhLWV4cGFuZGVkJyxcbiAgICAgICAgICBpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUgJiYgbm9kZSA9PT0gZ2V0Q3VycmVudFRhcmdldCgpXG4gICAgICAgICAgICA/ICd0cnVlJ1xuICAgICAgICAgICAgOiAnZmFsc2UnXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYW51cEludGVyYWN0aXZlTW91c2VMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgZ2V0RG9jdW1lbnQoKS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBkZWJvdW5jZWRPbk1vdXNlTW92ZSk7XG4gICAgbW91c2VNb3ZlTGlzdGVuZXJzID0gbW91c2VNb3ZlTGlzdGVuZXJzLmZpbHRlcihcbiAgICAgIChsaXN0ZW5lcikgPT4gbGlzdGVuZXIgIT09IGRlYm91bmNlZE9uTW91c2VNb3ZlXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRG9jdW1lbnRQcmVzcyhldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpOiB2b2lkIHtcbiAgICAvLyBNb3ZlZCBmaW5nZXIgdG8gc2Nyb2xsIGluc3RlYWQgb2YgYW4gaW50ZW50aW9uYWwgdGFwIG91dHNpZGVcbiAgICBpZiAoY3VycmVudElucHV0LmlzVG91Y2gpIHtcbiAgICAgIGlmIChkaWRUb3VjaE1vdmUgfHwgZXZlbnQudHlwZSA9PT0gJ21vdXNlZG93bicpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFjdHVhbFRhcmdldCA9XG4gICAgICAoZXZlbnQuY29tcG9zZWRQYXRoICYmIGV2ZW50LmNvbXBvc2VkUGF0aCgpWzBdKSB8fCBldmVudC50YXJnZXQ7XG5cbiAgICAvLyBDbGlja2VkIG9uIGludGVyYWN0aXZlIHBvcHBlclxuICAgIGlmIChcbiAgICAgIGluc3RhbmNlLnByb3BzLmludGVyYWN0aXZlICYmXG4gICAgICBhY3R1YWxDb250YWlucyhwb3BwZXIsIGFjdHVhbFRhcmdldCBhcyBFbGVtZW50KVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENsaWNrZWQgb24gdGhlIGV2ZW50IGxpc3RlbmVycyB0YXJnZXRcbiAgICBpZiAoXG4gICAgICBub3JtYWxpemVUb0FycmF5KGluc3RhbmNlLnByb3BzLnRyaWdnZXJUYXJnZXQgfHwgcmVmZXJlbmNlKS5zb21lKChlbCkgPT5cbiAgICAgICAgYWN0dWFsQ29udGFpbnMoZWwsIGFjdHVhbFRhcmdldCBhcyBFbGVtZW50KVxuICAgICAgKVxuICAgICkge1xuICAgICAgaWYgKGN1cnJlbnRJbnB1dC5pc1RvdWNoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUgJiZcbiAgICAgICAgaW5zdGFuY2UucHJvcHMudHJpZ2dlci5pbmRleE9mKCdjbGljaycpID49IDBcbiAgICAgICkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGludm9rZUhvb2soJ29uQ2xpY2tPdXRzaWRlJywgW2luc3RhbmNlLCBldmVudF0pO1xuICAgIH1cblxuICAgIGlmIChpbnN0YW5jZS5wcm9wcy5oaWRlT25DbGljayA9PT0gdHJ1ZSkge1xuICAgICAgaW5zdGFuY2UuY2xlYXJEZWxheVRpbWVvdXRzKCk7XG4gICAgICBpbnN0YW5jZS5oaWRlKCk7XG5cbiAgICAgIC8vIGBtb3VzZWRvd25gIGV2ZW50IGlzIGZpcmVkIHJpZ2h0IGJlZm9yZSBgZm9jdXNgIGlmIHByZXNzaW5nIHRoZVxuICAgICAgLy8gY3VycmVudFRhcmdldC4gVGhpcyBsZXRzIGEgdGlwcHkgd2l0aCBgZm9jdXNgIHRyaWdnZXIga25vdyB0aGF0IGl0XG4gICAgICAvLyBzaG91bGQgbm90IHNob3dcbiAgICAgIGRpZEhpZGVEdWVUb0RvY3VtZW50TW91c2VEb3duID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkaWRIaWRlRHVlVG9Eb2N1bWVudE1vdXNlRG93biA9IGZhbHNlO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIFRoZSBsaXN0ZW5lciBnZXRzIGFkZGVkIGluIGBzY2hlZHVsZVNob3coKWAsIGJ1dCB0aGlzIG1heSBiZSBoaWRpbmcgaXRcbiAgICAgIC8vIGJlZm9yZSBpdCBzaG93cywgYW5kIGhpZGUoKSdzIGVhcmx5IGJhaWwtb3V0IGJlaGF2aW9yIGNhbiBwcmV2ZW50IGl0XG4gICAgICAvLyBmcm9tIGJlaW5nIGNsZWFuZWQgdXBcbiAgICAgIGlmICghaW5zdGFuY2Uuc3RhdGUuaXNNb3VudGVkKSB7XG4gICAgICAgIHJlbW92ZURvY3VtZW50UHJlc3MoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvblRvdWNoTW92ZSgpOiB2b2lkIHtcbiAgICBkaWRUb3VjaE1vdmUgPSB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KCk6IHZvaWQge1xuICAgIGRpZFRvdWNoTW92ZSA9IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkRG9jdW1lbnRQcmVzcygpOiB2b2lkIHtcbiAgICBjb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbkRvY3VtZW50UHJlc3MsIHRydWUpO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uRG9jdW1lbnRQcmVzcywgVE9VQ0hfT1BUSU9OUyk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQsIFRPVUNIX09QVElPTlMpO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSwgVE9VQ0hfT1BUSU9OUyk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVEb2N1bWVudFByZXNzKCk6IHZvaWQge1xuICAgIGNvbnN0IGRvYyA9IGdldERvY3VtZW50KCk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uRG9jdW1lbnRQcmVzcywgdHJ1ZSk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Eb2N1bWVudFByZXNzLCBUT1VDSF9PUFRJT05TKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCwgVE9VQ0hfT1BUSU9OUyk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlLCBUT1VDSF9PUFRJT05TKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uVHJhbnNpdGlvbmVkT3V0KGR1cmF0aW9uOiBudW1iZXIsIGNhbGxiYWNrOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgb25UcmFuc2l0aW9uRW5kKGR1cmF0aW9uLCAoKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgICFpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUgJiZcbiAgICAgICAgcG9wcGVyLnBhcmVudE5vZGUgJiZcbiAgICAgICAgcG9wcGVyLnBhcmVudE5vZGUuY29udGFpbnMocG9wcGVyKVxuICAgICAgKSB7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBvblRyYW5zaXRpb25lZEluKGR1cmF0aW9uOiBudW1iZXIsIGNhbGxiYWNrOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgb25UcmFuc2l0aW9uRW5kKGR1cmF0aW9uLCBjYWxsYmFjayk7XG4gIH1cblxuICBmdW5jdGlvbiBvblRyYW5zaXRpb25FbmQoZHVyYXRpb246IG51bWJlciwgY2FsbGJhY2s6ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBjb25zdCBib3ggPSBnZXREZWZhdWx0VGVtcGxhdGVDaGlsZHJlbigpLmJveDtcblxuICAgIGZ1bmN0aW9uIGxpc3RlbmVyKGV2ZW50OiBUcmFuc2l0aW9uRXZlbnQpOiB2b2lkIHtcbiAgICAgIGlmIChldmVudC50YXJnZXQgPT09IGJveCkge1xuICAgICAgICB1cGRhdGVUcmFuc2l0aW9uRW5kTGlzdGVuZXIoYm94LCAncmVtb3ZlJywgbGlzdGVuZXIpO1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1ha2UgY2FsbGJhY2sgc3luY2hyb25vdXMgaWYgZHVyYXRpb24gaXMgMFxuICAgIC8vIGB0cmFuc2l0aW9uZW5kYCB3b24ndCBmaXJlIG90aGVyd2lzZVxuICAgIGlmIChkdXJhdGlvbiA9PT0gMCkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlVHJhbnNpdGlvbkVuZExpc3RlbmVyKGJveCwgJ3JlbW92ZScsIGN1cnJlbnRUcmFuc2l0aW9uRW5kTGlzdGVuZXIpO1xuICAgIHVwZGF0ZVRyYW5zaXRpb25FbmRMaXN0ZW5lcihib3gsICdhZGQnLCBsaXN0ZW5lcik7XG5cbiAgICBjdXJyZW50VHJhbnNpdGlvbkVuZExpc3RlbmVyID0gbGlzdGVuZXI7XG4gIH1cblxuICBmdW5jdGlvbiBvbihcbiAgICBldmVudFR5cGU6IHN0cmluZyxcbiAgICBoYW5kbGVyOiBFdmVudExpc3RlbmVyLFxuICAgIG9wdGlvbnM6IGJvb2xlYW4gfCBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IGZhbHNlXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IG5vZGVzID0gbm9ybWFsaXplVG9BcnJheShpbnN0YW5jZS5wcm9wcy50cmlnZ2VyVGFyZ2V0IHx8IHJlZmVyZW5jZSk7XG4gICAgbm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgICBsaXN0ZW5lcnMucHVzaCh7bm9kZSwgZXZlbnRUeXBlLCBoYW5kbGVyLCBvcHRpb25zfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgaWYgKGdldElzQ3VzdG9tVG91Y2hCZWhhdmlvcigpKSB7XG4gICAgICBvbigndG91Y2hzdGFydCcsIG9uVHJpZ2dlciwge3Bhc3NpdmU6IHRydWV9KTtcbiAgICAgIG9uKCd0b3VjaGVuZCcsIG9uTW91c2VMZWF2ZSBhcyBFdmVudExpc3RlbmVyLCB7cGFzc2l2ZTogdHJ1ZX0pO1xuICAgIH1cblxuICAgIHNwbGl0QnlTcGFjZXMoaW5zdGFuY2UucHJvcHMudHJpZ2dlcikuZm9yRWFjaCgoZXZlbnRUeXBlKSA9PiB7XG4gICAgICBpZiAoZXZlbnRUeXBlID09PSAnbWFudWFsJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIG9uKGV2ZW50VHlwZSwgb25UcmlnZ2VyKTtcblxuICAgICAgc3dpdGNoIChldmVudFR5cGUpIHtcbiAgICAgICAgY2FzZSAnbW91c2VlbnRlcic6XG4gICAgICAgICAgb24oJ21vdXNlbGVhdmUnLCBvbk1vdXNlTGVhdmUgYXMgRXZlbnRMaXN0ZW5lcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2ZvY3VzJzpcbiAgICAgICAgICBvbihpc0lFMTEgPyAnZm9jdXNvdXQnIDogJ2JsdXInLCBvbkJsdXJPckZvY3VzT3V0IGFzIEV2ZW50TGlzdGVuZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdmb2N1c2luJzpcbiAgICAgICAgICBvbignZm9jdXNvdXQnLCBvbkJsdXJPckZvY3VzT3V0IGFzIEV2ZW50TGlzdGVuZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXJzKCk6IHZvaWQge1xuICAgIGxpc3RlbmVycy5mb3JFYWNoKCh7bm9kZSwgZXZlbnRUeXBlLCBoYW5kbGVyLCBvcHRpb25zfTogTGlzdGVuZXJPYmplY3QpID0+IHtcbiAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIH0pO1xuICAgIGxpc3RlbmVycyA9IFtdO1xuICB9XG5cbiAgZnVuY3Rpb24gb25UcmlnZ2VyKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGxldCBzaG91bGRTY2hlZHVsZUNsaWNrSGlkZSA9IGZhbHNlO1xuXG4gICAgaWYgKFxuICAgICAgIWluc3RhbmNlLnN0YXRlLmlzRW5hYmxlZCB8fFxuICAgICAgaXNFdmVudExpc3RlbmVyU3RvcHBlZChldmVudCkgfHxcbiAgICAgIGRpZEhpZGVEdWVUb0RvY3VtZW50TW91c2VEb3duXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgd2FzRm9jdXNlZCA9IGxhc3RUcmlnZ2VyRXZlbnQ/LnR5cGUgPT09ICdmb2N1cyc7XG5cbiAgICBsYXN0VHJpZ2dlckV2ZW50ID0gZXZlbnQ7XG4gICAgY3VycmVudFRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgRWxlbWVudDtcblxuICAgIGhhbmRsZUFyaWFFeHBhbmRlZEF0dHJpYnV0ZSgpO1xuXG4gICAgaWYgKCFpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUgJiYgaXNNb3VzZUV2ZW50KGV2ZW50KSkge1xuICAgICAgLy8gSWYgc2Nyb2xsaW5nLCBgbW91c2VlbnRlcmAgZXZlbnRzIGNhbiBiZSBmaXJlZCBpZiB0aGUgY3Vyc29yIGxhbmRzXG4gICAgICAvLyBvdmVyIGEgbmV3IHRhcmdldCwgYnV0IGBtb3VzZW1vdmVgIGV2ZW50cyBkb24ndCBnZXQgZmlyZWQuIFRoaXNcbiAgICAgIC8vIGNhdXNlcyBpbnRlcmFjdGl2ZSB0b29sdGlwcyB0byBnZXQgc3R1Y2sgb3BlbiB1bnRpbCB0aGUgY3Vyc29yIGlzXG4gICAgICAvLyBtb3ZlZFxuICAgICAgbW91c2VNb3ZlTGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiBsaXN0ZW5lcihldmVudCkpO1xuICAgIH1cblxuICAgIC8vIFRvZ2dsZSBzaG93L2hpZGUgd2hlbiBjbGlja2luZyBjbGljay10cmlnZ2VyZWQgdG9vbHRpcHNcbiAgICBpZiAoXG4gICAgICBldmVudC50eXBlID09PSAnY2xpY2snICYmXG4gICAgICAoaW5zdGFuY2UucHJvcHMudHJpZ2dlci5pbmRleE9mKCdtb3VzZWVudGVyJykgPCAwIHx8XG4gICAgICAgIGlzVmlzaWJsZUZyb21DbGljaykgJiZcbiAgICAgIGluc3RhbmNlLnByb3BzLmhpZGVPbkNsaWNrICE9PSBmYWxzZSAmJlxuICAgICAgaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlXG4gICAgKSB7XG4gICAgICBzaG91bGRTY2hlZHVsZUNsaWNrSGlkZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjaGVkdWxlU2hvdyhldmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycpIHtcbiAgICAgIGlzVmlzaWJsZUZyb21DbGljayA9ICFzaG91bGRTY2hlZHVsZUNsaWNrSGlkZTtcbiAgICB9XG5cbiAgICBpZiAoc2hvdWxkU2NoZWR1bGVDbGlja0hpZGUgJiYgIXdhc0ZvY3VzZWQpIHtcbiAgICAgIHNjaGVkdWxlSGlkZShldmVudCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25Nb3VzZU1vdmUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgTm9kZTtcbiAgICBjb25zdCBpc0N1cnNvck92ZXJSZWZlcmVuY2VPclBvcHBlciA9XG4gICAgICBnZXRDdXJyZW50VGFyZ2V0KCkuY29udGFpbnModGFyZ2V0KSB8fCBwb3BwZXIuY29udGFpbnModGFyZ2V0KTtcblxuICAgIGlmIChldmVudC50eXBlID09PSAnbW91c2Vtb3ZlJyAmJiBpc0N1cnNvck92ZXJSZWZlcmVuY2VPclBvcHBlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBvcHBlclRyZWVEYXRhID0gZ2V0TmVzdGVkUG9wcGVyVHJlZSgpXG4gICAgICAuY29uY2F0KHBvcHBlcilcbiAgICAgIC5tYXAoKHBvcHBlcikgPT4ge1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IHBvcHBlci5fdGlwcHkhO1xuICAgICAgICBjb25zdCBzdGF0ZSA9IGluc3RhbmNlLnBvcHBlckluc3RhbmNlPy5zdGF0ZTtcblxuICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9wcGVyUmVjdDogcG9wcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgICAgcG9wcGVyU3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoQm9vbGVhbikgYXMgUG9wcGVyVHJlZURhdGFbXTtcblxuICAgIGlmIChpc0N1cnNvck91dHNpZGVJbnRlcmFjdGl2ZUJvcmRlcihwb3BwZXJUcmVlRGF0YSwgZXZlbnQpKSB7XG4gICAgICBjbGVhbnVwSW50ZXJhY3RpdmVNb3VzZUxpc3RlbmVycygpO1xuICAgICAgc2NoZWR1bGVIaWRlKGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbk1vdXNlTGVhdmUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBzaG91bGRCYWlsID1cbiAgICAgIGlzRXZlbnRMaXN0ZW5lclN0b3BwZWQoZXZlbnQpIHx8XG4gICAgICAoaW5zdGFuY2UucHJvcHMudHJpZ2dlci5pbmRleE9mKCdjbGljaycpID49IDAgJiYgaXNWaXNpYmxlRnJvbUNsaWNrKTtcblxuICAgIGlmIChzaG91bGRCYWlsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGluc3RhbmNlLnByb3BzLmludGVyYWN0aXZlKSB7XG4gICAgICBpbnN0YW5jZS5oaWRlV2l0aEludGVyYWN0aXZpdHkoZXZlbnQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNjaGVkdWxlSGlkZShldmVudCk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkJsdXJPckZvY3VzT3V0KGV2ZW50OiBGb2N1c0V2ZW50KTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgaW5zdGFuY2UucHJvcHMudHJpZ2dlci5pbmRleE9mKCdmb2N1c2luJykgPCAwICYmXG4gICAgICBldmVudC50YXJnZXQgIT09IGdldEN1cnJlbnRUYXJnZXQoKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIElmIGZvY3VzIHdhcyBtb3ZlZCB0byB3aXRoaW4gdGhlIHBvcHBlclxuICAgIGlmIChcbiAgICAgIGluc3RhbmNlLnByb3BzLmludGVyYWN0aXZlICYmXG4gICAgICBldmVudC5yZWxhdGVkVGFyZ2V0ICYmXG4gICAgICBwb3BwZXIuY29udGFpbnMoZXZlbnQucmVsYXRlZFRhcmdldCBhcyBFbGVtZW50KVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNjaGVkdWxlSGlkZShldmVudCk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0V2ZW50TGlzdGVuZXJTdG9wcGVkKGV2ZW50OiBFdmVudCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBjdXJyZW50SW5wdXQuaXNUb3VjaFxuICAgICAgPyBnZXRJc0N1c3RvbVRvdWNoQmVoYXZpb3IoKSAhPT0gZXZlbnQudHlwZS5pbmRleE9mKCd0b3VjaCcpID49IDBcbiAgICAgIDogZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQb3BwZXJJbnN0YW5jZSgpOiB2b2lkIHtcbiAgICBkZXN0cm95UG9wcGVySW5zdGFuY2UoKTtcblxuICAgIGNvbnN0IHtcbiAgICAgIHBvcHBlck9wdGlvbnMsXG4gICAgICBwbGFjZW1lbnQsXG4gICAgICBvZmZzZXQsXG4gICAgICBnZXRSZWZlcmVuY2VDbGllbnRSZWN0LFxuICAgICAgbW92ZVRyYW5zaXRpb24sXG4gICAgfSA9IGluc3RhbmNlLnByb3BzO1xuXG4gICAgY29uc3QgYXJyb3cgPSBnZXRJc0RlZmF1bHRSZW5kZXJGbigpID8gZ2V0Q2hpbGRyZW4ocG9wcGVyKS5hcnJvdyA6IG51bGw7XG5cbiAgICBjb25zdCBjb21wdXRlZFJlZmVyZW5jZSA9IGdldFJlZmVyZW5jZUNsaWVudFJlY3RcbiAgICAgID8ge1xuICAgICAgICAgIGdldEJvdW5kaW5nQ2xpZW50UmVjdDogZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdCxcbiAgICAgICAgICBjb250ZXh0RWxlbWVudDpcbiAgICAgICAgICAgIGdldFJlZmVyZW5jZUNsaWVudFJlY3QuY29udGV4dEVsZW1lbnQgfHwgZ2V0Q3VycmVudFRhcmdldCgpLFxuICAgICAgICB9XG4gICAgICA6IHJlZmVyZW5jZTtcblxuICAgIGNvbnN0IHRpcHB5TW9kaWZpZXI6IE1vZGlmaWVyPCckJHRpcHB5JywgUmVjb3JkPHN0cmluZywgdW5rbm93bj4+ID0ge1xuICAgICAgbmFtZTogJyQkdGlwcHknLFxuICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIHBoYXNlOiAnYmVmb3JlV3JpdGUnLFxuICAgICAgcmVxdWlyZXM6IFsnY29tcHV0ZVN0eWxlcyddLFxuICAgICAgZm4oe3N0YXRlfSkge1xuICAgICAgICBpZiAoZ2V0SXNEZWZhdWx0UmVuZGVyRm4oKSkge1xuICAgICAgICAgIGNvbnN0IHtib3h9ID0gZ2V0RGVmYXVsdFRlbXBsYXRlQ2hpbGRyZW4oKTtcblxuICAgICAgICAgIFsncGxhY2VtZW50JywgJ3JlZmVyZW5jZS1oaWRkZW4nLCAnZXNjYXBlZCddLmZvckVhY2goKGF0dHIpID0+IHtcbiAgICAgICAgICAgIGlmIChhdHRyID09PSAncGxhY2VtZW50Jykge1xuICAgICAgICAgICAgICBib3guc2V0QXR0cmlidXRlKCdkYXRhLXBsYWNlbWVudCcsIHN0YXRlLnBsYWNlbWVudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoc3RhdGUuYXR0cmlidXRlcy5wb3BwZXJbYGRhdGEtcG9wcGVyLSR7YXR0cn1gXSkge1xuICAgICAgICAgICAgICAgIGJveC5zZXRBdHRyaWJ1dGUoYGRhdGEtJHthdHRyfWAsICcnKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBib3gucmVtb3ZlQXR0cmlidXRlKGBkYXRhLSR7YXR0cn1gKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIgPSB7fTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgdHlwZSBUaXBweU1vZGlmaWVyID0gTW9kaWZpZXI8JyQkdGlwcHknLCBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj47XG4gICAgdHlwZSBFeHRlbmRlZE1vZGlmaWVycyA9IFN0cmljdE1vZGlmaWVycyB8IFBhcnRpYWw8VGlwcHlNb2RpZmllcj47XG5cbiAgICBjb25zdCBtb2RpZmllcnM6IEFycmF5PEV4dGVuZGVkTW9kaWZpZXJzPiA9IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ29mZnNldCcsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBvZmZzZXQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIHBhZGRpbmc6IHtcbiAgICAgICAgICAgIHRvcDogMixcbiAgICAgICAgICAgIGJvdHRvbTogMixcbiAgICAgICAgICAgIGxlZnQ6IDUsXG4gICAgICAgICAgICByaWdodDogNSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2ZsaXAnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgcGFkZGluZzogNSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdjb21wdXRlU3R5bGVzJyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIGFkYXB0aXZlOiAhbW92ZVRyYW5zaXRpb24sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgdGlwcHlNb2RpZmllcixcbiAgICBdO1xuXG4gICAgaWYgKGdldElzRGVmYXVsdFJlbmRlckZuKCkgJiYgYXJyb3cpIHtcbiAgICAgIG1vZGlmaWVycy5wdXNoKHtcbiAgICAgICAgbmFtZTogJ2Fycm93JyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIGVsZW1lbnQ6IGFycm93LFxuICAgICAgICAgIHBhZGRpbmc6IDMsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBtb2RpZmllcnMucHVzaCguLi4ocG9wcGVyT3B0aW9ucz8ubW9kaWZpZXJzIHx8IFtdKSk7XG5cbiAgICBpbnN0YW5jZS5wb3BwZXJJbnN0YW5jZSA9IGNyZWF0ZVBvcHBlcjxFeHRlbmRlZE1vZGlmaWVycz4oXG4gICAgICBjb21wdXRlZFJlZmVyZW5jZSxcbiAgICAgIHBvcHBlcixcbiAgICAgIHtcbiAgICAgICAgLi4ucG9wcGVyT3B0aW9ucyxcbiAgICAgICAgcGxhY2VtZW50LFxuICAgICAgICBvbkZpcnN0VXBkYXRlLFxuICAgICAgICBtb2RpZmllcnMsXG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3Ryb3lQb3BwZXJJbnN0YW5jZSgpOiB2b2lkIHtcbiAgICBpZiAoaW5zdGFuY2UucG9wcGVySW5zdGFuY2UpIHtcbiAgICAgIGluc3RhbmNlLnBvcHBlckluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICAgIGluc3RhbmNlLnBvcHBlckluc3RhbmNlID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtb3VudCgpOiB2b2lkIHtcbiAgICBjb25zdCB7YXBwZW5kVG99ID0gaW5zdGFuY2UucHJvcHM7XG5cbiAgICBsZXQgcGFyZW50Tm9kZTogYW55O1xuXG4gICAgLy8gQnkgZGVmYXVsdCwgd2UnbGwgYXBwZW5kIHRoZSBwb3BwZXIgdG8gdGhlIHRyaWdnZXJUYXJnZXRzJ3MgcGFyZW50Tm9kZSBzb1xuICAgIC8vIGl0J3MgZGlyZWN0bHkgYWZ0ZXIgdGhlIHJlZmVyZW5jZSBlbGVtZW50IHNvIHRoZSBlbGVtZW50cyBpbnNpZGUgdGhlXG4gICAgLy8gdGlwcHkgY2FuIGJlIHRhYmJlZCB0b1xuICAgIC8vIElmIHRoZXJlIGFyZSBjbGlwcGluZyBpc3N1ZXMsIHRoZSB1c2VyIGNhbiBzcGVjaWZ5IGEgZGlmZmVyZW50IGFwcGVuZFRvXG4gICAgLy8gYW5kIGVuc3VyZSBmb2N1cyBtYW5hZ2VtZW50IGlzIGhhbmRsZWQgY29ycmVjdGx5IG1hbnVhbGx5XG4gICAgY29uc3Qgbm9kZSA9IGdldEN1cnJlbnRUYXJnZXQoKTtcblxuICAgIGlmIChcbiAgICAgIChpbnN0YW5jZS5wcm9wcy5pbnRlcmFjdGl2ZSAmJiBhcHBlbmRUbyA9PT0gVElQUFlfREVGQVVMVF9BUFBFTkRfVE8pIHx8XG4gICAgICBhcHBlbmRUbyA9PT0gJ3BhcmVudCdcbiAgICApIHtcbiAgICAgIHBhcmVudE5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmVudE5vZGUgPSBpbnZva2VXaXRoQXJnc09yUmV0dXJuKGFwcGVuZFRvLCBbbm9kZV0pO1xuICAgIH1cblxuICAgIC8vIFRoZSBwb3BwZXIgZWxlbWVudCBuZWVkcyB0byBleGlzdCBvbiB0aGUgRE9NIGJlZm9yZSBpdHMgcG9zaXRpb24gY2FuIGJlXG4gICAgLy8gdXBkYXRlZCBhcyBQb3BwZXIgbmVlZHMgdG8gcmVhZCBpdHMgZGltZW5zaW9uc1xuICAgIGlmICghcGFyZW50Tm9kZS5jb250YWlucyhwb3BwZXIpKSB7XG4gICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKHBvcHBlcik7XG4gICAgfVxuXG4gICAgaW5zdGFuY2Uuc3RhdGUuaXNNb3VudGVkID0gdHJ1ZTtcblxuICAgIGNyZWF0ZVBvcHBlckluc3RhbmNlKCk7XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAvLyBBY2Nlc3NpYmlsaXR5IGNoZWNrXG4gICAgICB3YXJuV2hlbihcbiAgICAgICAgaW5zdGFuY2UucHJvcHMuaW50ZXJhY3RpdmUgJiZcbiAgICAgICAgICBhcHBlbmRUbyA9PT0gZGVmYXVsdFByb3BzLmFwcGVuZFRvICYmXG4gICAgICAgICAgbm9kZS5uZXh0RWxlbWVudFNpYmxpbmcgIT09IHBvcHBlcixcbiAgICAgICAgW1xuICAgICAgICAgICdJbnRlcmFjdGl2ZSB0aXBweSBlbGVtZW50IG1heSBub3QgYmUgYWNjZXNzaWJsZSB2aWEga2V5Ym9hcmQnLFxuICAgICAgICAgICduYXZpZ2F0aW9uIGJlY2F1c2UgaXQgaXMgbm90IGRpcmVjdGx5IGFmdGVyIHRoZSByZWZlcmVuY2UgZWxlbWVudCcsXG4gICAgICAgICAgJ2luIHRoZSBET00gc291cmNlIG9yZGVyLicsXG4gICAgICAgICAgJ1xcblxcbicsXG4gICAgICAgICAgJ1VzaW5nIGEgd3JhcHBlciA8ZGl2PiBvciA8c3Bhbj4gdGFnIGFyb3VuZCB0aGUgcmVmZXJlbmNlIGVsZW1lbnQnLFxuICAgICAgICAgICdzb2x2ZXMgdGhpcyBieSBjcmVhdGluZyBhIG5ldyBwYXJlbnROb2RlIGNvbnRleHQuJyxcbiAgICAgICAgICAnXFxuXFxuJyxcbiAgICAgICAgICAnU3BlY2lmeWluZyBgYXBwZW5kVG86IGRvY3VtZW50LmJvZHlgIHNpbGVuY2VzIHRoaXMgd2FybmluZywgYnV0IGl0JyxcbiAgICAgICAgICAnYXNzdW1lcyB5b3UgYXJlIHVzaW5nIGEgZm9jdXMgbWFuYWdlbWVudCBzb2x1dGlvbiB0byBoYW5kbGUnLFxuICAgICAgICAgICdrZXlib2FyZCBuYXZpZ2F0aW9uLicsXG4gICAgICAgICAgJ1xcblxcbicsXG4gICAgICAgICAgJ1NlZTogaHR0cHM6Ly9hdG9taWtzLmdpdGh1Yi5pby90aXBweWpzL3Y2L2FjY2Vzc2liaWxpdHkvI2ludGVyYWN0aXZpdHknLFxuICAgICAgICBdLmpvaW4oJyAnKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXROZXN0ZWRQb3BwZXJUcmVlKCk6IFBvcHBlckVsZW1lbnRbXSB7XG4gICAgcmV0dXJuIGFycmF5RnJvbShcbiAgICAgIHBvcHBlci5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1fX05BTUVTUEFDRV9QUkVGSVhfXy1yb290XScpXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNjaGVkdWxlU2hvdyhldmVudD86IEV2ZW50KTogdm9pZCB7XG4gICAgaW5zdGFuY2UuY2xlYXJEZWxheVRpbWVvdXRzKCk7XG5cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGludm9rZUhvb2soJ29uVHJpZ2dlcicsIFtpbnN0YW5jZSwgZXZlbnRdKTtcbiAgICB9XG5cbiAgICBhZGREb2N1bWVudFByZXNzKCk7XG5cbiAgICBsZXQgZGVsYXkgPSBnZXREZWxheSh0cnVlKTtcbiAgICBjb25zdCBbdG91Y2hWYWx1ZSwgdG91Y2hEZWxheV0gPSBnZXROb3JtYWxpemVkVG91Y2hTZXR0aW5ncygpO1xuXG4gICAgaWYgKGN1cnJlbnRJbnB1dC5pc1RvdWNoICYmIHRvdWNoVmFsdWUgPT09ICdob2xkJyAmJiB0b3VjaERlbGF5KSB7XG4gICAgICBkZWxheSA9IHRvdWNoRGVsYXk7XG4gICAgfVxuXG4gICAgaWYgKGRlbGF5KSB7XG4gICAgICBzaG93VGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpbnN0YW5jZS5zaG93KCk7XG4gICAgICB9LCBkZWxheSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluc3RhbmNlLnNob3coKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzY2hlZHVsZUhpZGUoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgaW5zdGFuY2UuY2xlYXJEZWxheVRpbWVvdXRzKCk7XG5cbiAgICBpbnZva2VIb29rKCdvblVudHJpZ2dlcicsIFtpbnN0YW5jZSwgZXZlbnRdKTtcblxuICAgIGlmICghaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlKSB7XG4gICAgICByZW1vdmVEb2N1bWVudFByZXNzKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBGb3IgaW50ZXJhY3RpdmUgdGlwcGllcywgc2NoZWR1bGVIaWRlIGlzIGFkZGVkIHRvIGEgZG9jdW1lbnQuYm9keSBoYW5kbGVyXG4gICAgLy8gZnJvbSBvbk1vdXNlTGVhdmUgc28gbXVzdCBpbnRlcmNlcHQgc2NoZWR1bGVkIGhpZGVzIGZyb20gbW91c2Vtb3ZlL2xlYXZlXG4gICAgLy8gZXZlbnRzIHdoZW4gdHJpZ2dlciBjb250YWlucyBtb3VzZWVudGVyIGFuZCBjbGljaywgYW5kIHRoZSB0aXAgaXNcbiAgICAvLyBjdXJyZW50bHkgc2hvd24gYXMgYSByZXN1bHQgb2YgYSBjbGljay5cbiAgICBpZiAoXG4gICAgICBpbnN0YW5jZS5wcm9wcy50cmlnZ2VyLmluZGV4T2YoJ21vdXNlZW50ZXInKSA+PSAwICYmXG4gICAgICBpbnN0YW5jZS5wcm9wcy50cmlnZ2VyLmluZGV4T2YoJ2NsaWNrJykgPj0gMCAmJlxuICAgICAgWydtb3VzZWxlYXZlJywgJ21vdXNlbW92ZSddLmluZGV4T2YoZXZlbnQudHlwZSkgPj0gMCAmJlxuICAgICAgaXNWaXNpYmxlRnJvbUNsaWNrXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGVsYXkgPSBnZXREZWxheShmYWxzZSk7XG5cbiAgICBpZiAoZGVsYXkpIHtcbiAgICAgIGhpZGVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmIChpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUpIHtcbiAgICAgICAgICBpbnN0YW5jZS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIGRlbGF5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRml4ZXMgYSBgdHJhbnNpdGlvbmVuZGAgcHJvYmxlbSB3aGVuIGl0IGZpcmVzIDEgZnJhbWUgdG9vXG4gICAgICAvLyBsYXRlIHNvbWV0aW1lcywgd2UgZG9uJ3Qgd2FudCBoaWRlKCkgdG8gYmUgY2FsbGVkLlxuICAgICAgc2NoZWR1bGVIaWRlQW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBpbnN0YW5jZS5oaWRlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8g8J+UkSBQdWJsaWMgbWV0aG9kc1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgZnVuY3Rpb24gZW5hYmxlKCk6IHZvaWQge1xuICAgIGluc3RhbmNlLnN0YXRlLmlzRW5hYmxlZCA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNhYmxlKCk6IHZvaWQge1xuICAgIC8vIERpc2FibGluZyB0aGUgaW5zdGFuY2Ugc2hvdWxkIGFsc28gaGlkZSBpdFxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hdG9taWtzL3RpcHB5LmpzLXJlYWN0L2lzc3Vlcy8xMDZcbiAgICBpbnN0YW5jZS5oaWRlKCk7XG4gICAgaW5zdGFuY2Uuc3RhdGUuaXNFbmFibGVkID0gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhckRlbGF5VGltZW91dHMoKTogdm9pZCB7XG4gICAgY2xlYXJUaW1lb3V0KHNob3dUaW1lb3V0KTtcbiAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHNjaGVkdWxlSGlkZUFuaW1hdGlvbkZyYW1lKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFByb3BzKHBhcnRpYWxQcm9wczogUGFydGlhbDxQcm9wcz4pOiB2b2lkIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICB3YXJuV2hlbihpbnN0YW5jZS5zdGF0ZS5pc0Rlc3Ryb3llZCwgY3JlYXRlTWVtb3J5TGVha1dhcm5pbmcoJ3NldFByb3BzJykpO1xuICAgIH1cblxuICAgIGlmIChpbnN0YW5jZS5zdGF0ZS5pc0Rlc3Ryb3llZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGludm9rZUhvb2soJ29uQmVmb3JlVXBkYXRlJywgW2luc3RhbmNlLCBwYXJ0aWFsUHJvcHNdKTtcblxuICAgIHJlbW92ZUxpc3RlbmVycygpO1xuXG4gICAgY29uc3QgcHJldlByb3BzID0gaW5zdGFuY2UucHJvcHM7XG4gICAgY29uc3QgbmV4dFByb3BzID0gZXZhbHVhdGVQcm9wcyhyZWZlcmVuY2UsIHtcbiAgICAgIC4uLnByZXZQcm9wcyxcbiAgICAgIC4uLnJlbW92ZVVuZGVmaW5lZFByb3BzKHBhcnRpYWxQcm9wcyksXG4gICAgICBpZ25vcmVBdHRyaWJ1dGVzOiB0cnVlLFxuICAgIH0pO1xuXG4gICAgaW5zdGFuY2UucHJvcHMgPSBuZXh0UHJvcHM7XG5cbiAgICBhZGRMaXN0ZW5lcnMoKTtcblxuICAgIGlmIChwcmV2UHJvcHMuaW50ZXJhY3RpdmVEZWJvdW5jZSAhPT0gbmV4dFByb3BzLmludGVyYWN0aXZlRGVib3VuY2UpIHtcbiAgICAgIGNsZWFudXBJbnRlcmFjdGl2ZU1vdXNlTGlzdGVuZXJzKCk7XG4gICAgICBkZWJvdW5jZWRPbk1vdXNlTW92ZSA9IGRlYm91bmNlKFxuICAgICAgICBvbk1vdXNlTW92ZSxcbiAgICAgICAgbmV4dFByb3BzLmludGVyYWN0aXZlRGVib3VuY2VcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gRW5zdXJlIHN0YWxlIGFyaWEtZXhwYW5kZWQgYXR0cmlidXRlcyBhcmUgcmVtb3ZlZFxuICAgIGlmIChwcmV2UHJvcHMudHJpZ2dlclRhcmdldCAmJiAhbmV4dFByb3BzLnRyaWdnZXJUYXJnZXQpIHtcbiAgICAgIG5vcm1hbGl6ZVRvQXJyYXkocHJldlByb3BzLnRyaWdnZXJUYXJnZXQpLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobmV4dFByb3BzLnRyaWdnZXJUYXJnZXQpIHtcbiAgICAgIHJlZmVyZW5jZS5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKTtcbiAgICB9XG5cbiAgICBoYW5kbGVBcmlhRXhwYW5kZWRBdHRyaWJ1dGUoKTtcbiAgICBoYW5kbGVTdHlsZXMoKTtcblxuICAgIGlmIChvblVwZGF0ZSkge1xuICAgICAgb25VcGRhdGUocHJldlByb3BzLCBuZXh0UHJvcHMpO1xuICAgIH1cblxuICAgIGlmIChpbnN0YW5jZS5wb3BwZXJJbnN0YW5jZSkge1xuICAgICAgY3JlYXRlUG9wcGVySW5zdGFuY2UoKTtcblxuICAgICAgLy8gRml4ZXMgYW4gaXNzdWUgd2l0aCBuZXN0ZWQgdGlwcGllcyBpZiB0aGV5IGFyZSBhbGwgZ2V0dGluZyByZS1yZW5kZXJlZCxcbiAgICAgIC8vIGFuZCB0aGUgbmVzdGVkIG9uZXMgZ2V0IHJlLXJlbmRlcmVkIGZpcnN0LlxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2F0b21pa3MvdGlwcHlqcy1yZWFjdC9pc3N1ZXMvMTc3XG4gICAgICAvLyBUT0RPOiBmaW5kIGEgY2xlYW5lciAvIG1vcmUgZWZmaWNpZW50IHNvbHV0aW9uKCEpXG4gICAgICBnZXROZXN0ZWRQb3BwZXJUcmVlKCkuZm9yRWFjaCgobmVzdGVkUG9wcGVyKSA9PiB7XG4gICAgICAgIC8vIFJlYWN0IChhbmQgb3RoZXIgVUkgbGlicyBsaWtlbHkpIHJlcXVpcmVzIGEgckFGIHdyYXBwZXIgYXMgaXQgZmx1c2hlc1xuICAgICAgICAvLyBpdHMgd29yayBpbiBvbmVcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKG5lc3RlZFBvcHBlci5fdGlwcHkhLnBvcHBlckluc3RhbmNlIS5mb3JjZVVwZGF0ZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpbnZva2VIb29rKCdvbkFmdGVyVXBkYXRlJywgW2luc3RhbmNlLCBwYXJ0aWFsUHJvcHNdKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldENvbnRlbnQoY29udGVudDogQ29udGVudCk6IHZvaWQge1xuICAgIGluc3RhbmNlLnNldFByb3BzKHtjb250ZW50fSk7XG4gIH1cblxuICBmdW5jdGlvbiBzaG93KCk6IHZvaWQge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKF9fREVWX18pIHtcbiAgICAgIHdhcm5XaGVuKGluc3RhbmNlLnN0YXRlLmlzRGVzdHJveWVkLCBjcmVhdGVNZW1vcnlMZWFrV2FybmluZygnc2hvdycpKTtcbiAgICB9XG5cbiAgICAvLyBFYXJseSBiYWlsLW91dFxuICAgIGNvbnN0IGlzQWxyZWFkeVZpc2libGUgPSBpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGU7XG4gICAgY29uc3QgaXNEZXN0cm95ZWQgPSBpbnN0YW5jZS5zdGF0ZS5pc0Rlc3Ryb3llZDtcbiAgICBjb25zdCBpc0Rpc2FibGVkID0gIWluc3RhbmNlLnN0YXRlLmlzRW5hYmxlZDtcbiAgICBjb25zdCBpc1RvdWNoQW5kVG91Y2hEaXNhYmxlZCA9XG4gICAgICBjdXJyZW50SW5wdXQuaXNUb3VjaCAmJiAhaW5zdGFuY2UucHJvcHMudG91Y2g7XG4gICAgY29uc3QgZHVyYXRpb24gPSBnZXRWYWx1ZUF0SW5kZXhPclJldHVybihcbiAgICAgIGluc3RhbmNlLnByb3BzLmR1cmF0aW9uLFxuICAgICAgMCxcbiAgICAgIGRlZmF1bHRQcm9wcy5kdXJhdGlvblxuICAgICk7XG5cbiAgICBpZiAoXG4gICAgICBpc0FscmVhZHlWaXNpYmxlIHx8XG4gICAgICBpc0Rlc3Ryb3llZCB8fFxuICAgICAgaXNEaXNhYmxlZCB8fFxuICAgICAgaXNUb3VjaEFuZFRvdWNoRGlzYWJsZWRcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBOb3JtYWxpemUgYGRpc2FibGVkYCBiZWhhdmlvciBhY3Jvc3MgYnJvd3NlcnMuXG4gICAgLy8gRmlyZWZveCBhbGxvd3MgZXZlbnRzIG9uIGRpc2FibGVkIGVsZW1lbnRzLCBidXQgQ2hyb21lIGRvZXNuJ3QuXG4gICAgLy8gVXNpbmcgYSB3cmFwcGVyIGVsZW1lbnQgKGkuZS4gPHNwYW4+KSBpcyByZWNvbW1lbmRlZC5cbiAgICBpZiAoZ2V0Q3VycmVudFRhcmdldCgpLmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGludm9rZUhvb2soJ29uU2hvdycsIFtpbnN0YW5jZV0sIGZhbHNlKTtcbiAgICBpZiAoaW5zdGFuY2UucHJvcHMub25TaG93KGluc3RhbmNlKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUgPSB0cnVlO1xuXG4gICAgaWYgKGdldElzRGVmYXVsdFJlbmRlckZuKCkpIHtcbiAgICAgIHBvcHBlci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgIH1cblxuICAgIGhhbmRsZVN0eWxlcygpO1xuICAgIGFkZERvY3VtZW50UHJlc3MoKTtcblxuICAgIGlmICghaW5zdGFuY2Uuc3RhdGUuaXNNb3VudGVkKSB7XG4gICAgICBwb3BwZXIuc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJztcbiAgICB9XG5cbiAgICAvLyBJZiBmbGlwcGluZyB0byB0aGUgb3Bwb3NpdGUgc2lkZSBhZnRlciBoaWRpbmcgYXQgbGVhc3Qgb25jZSwgdGhlXG4gICAgLy8gYW5pbWF0aW9uIHdpbGwgdXNlIHRoZSB3cm9uZyBwbGFjZW1lbnQgd2l0aG91dCByZXNldHRpbmcgdGhlIGR1cmF0aW9uXG4gICAgaWYgKGdldElzRGVmYXVsdFJlbmRlckZuKCkpIHtcbiAgICAgIGNvbnN0IHtib3gsIGNvbnRlbnR9ID0gZ2V0RGVmYXVsdFRlbXBsYXRlQ2hpbGRyZW4oKTtcbiAgICAgIHNldFRyYW5zaXRpb25EdXJhdGlvbihbYm94LCBjb250ZW50XSwgMCk7XG4gICAgfVxuXG4gICAgb25GaXJzdFVwZGF0ZSA9ICgpOiB2b2lkID0+IHtcbiAgICAgIGlmICghaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlIHx8IGlnbm9yZU9uRmlyc3RVcGRhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZ25vcmVPbkZpcnN0VXBkYXRlID0gdHJ1ZTtcblxuICAgICAgLy8gcmVmbG93XG4gICAgICB2b2lkIHBvcHBlci5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgIHBvcHBlci5zdHlsZS50cmFuc2l0aW9uID0gaW5zdGFuY2UucHJvcHMubW92ZVRyYW5zaXRpb247XG5cbiAgICAgIGlmIChnZXRJc0RlZmF1bHRSZW5kZXJGbigpICYmIGluc3RhbmNlLnByb3BzLmFuaW1hdGlvbikge1xuICAgICAgICBjb25zdCB7Ym94LCBjb250ZW50fSA9IGdldERlZmF1bHRUZW1wbGF0ZUNoaWxkcmVuKCk7XG4gICAgICAgIHNldFRyYW5zaXRpb25EdXJhdGlvbihbYm94LCBjb250ZW50XSwgZHVyYXRpb24pO1xuICAgICAgICBzZXRWaXNpYmlsaXR5U3RhdGUoW2JveCwgY29udGVudF0sICd2aXNpYmxlJyk7XG4gICAgICB9XG5cbiAgICAgIGhhbmRsZUFyaWFDb250ZW50QXR0cmlidXRlKCk7XG4gICAgICBoYW5kbGVBcmlhRXhwYW5kZWRBdHRyaWJ1dGUoKTtcblxuICAgICAgcHVzaElmVW5pcXVlKG1vdW50ZWRJbnN0YW5jZXMsIGluc3RhbmNlKTtcblxuICAgICAgLy8gY2VydGFpbiBtb2RpZmllcnMgKGUuZy4gYG1heFNpemVgKSByZXF1aXJlIGEgc2Vjb25kIHVwZGF0ZSBhZnRlciB0aGVcbiAgICAgIC8vIHBvcHBlciBoYXMgYmVlbiBwb3NpdGlvbmVkIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgaW5zdGFuY2UucG9wcGVySW5zdGFuY2U/LmZvcmNlVXBkYXRlKCk7XG5cbiAgICAgIGludm9rZUhvb2soJ29uTW91bnQnLCBbaW5zdGFuY2VdKTtcblxuICAgICAgaWYgKGluc3RhbmNlLnByb3BzLmFuaW1hdGlvbiAmJiBnZXRJc0RlZmF1bHRSZW5kZXJGbigpKSB7XG4gICAgICAgIG9uVHJhbnNpdGlvbmVkSW4oZHVyYXRpb24sICgpID0+IHtcbiAgICAgICAgICBpbnN0YW5jZS5zdGF0ZS5pc1Nob3duID0gdHJ1ZTtcbiAgICAgICAgICBpbnZva2VIb29rKCdvblNob3duJywgW2luc3RhbmNlXSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBtb3VudCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZSgpOiB2b2lkIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICB3YXJuV2hlbihpbnN0YW5jZS5zdGF0ZS5pc0Rlc3Ryb3llZCwgY3JlYXRlTWVtb3J5TGVha1dhcm5pbmcoJ2hpZGUnKSk7XG4gICAgfVxuXG4gICAgLy8gRWFybHkgYmFpbC1vdXRcbiAgICBjb25zdCBpc0FscmVhZHlIaWRkZW4gPSAhaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlO1xuICAgIGNvbnN0IGlzRGVzdHJveWVkID0gaW5zdGFuY2Uuc3RhdGUuaXNEZXN0cm95ZWQ7XG4gICAgY29uc3QgaXNEaXNhYmxlZCA9ICFpbnN0YW5jZS5zdGF0ZS5pc0VuYWJsZWQ7XG4gICAgY29uc3QgZHVyYXRpb24gPSBnZXRWYWx1ZUF0SW5kZXhPclJldHVybihcbiAgICAgIGluc3RhbmNlLnByb3BzLmR1cmF0aW9uLFxuICAgICAgMSxcbiAgICAgIGRlZmF1bHRQcm9wcy5kdXJhdGlvblxuICAgICk7XG5cbiAgICBpZiAoaXNBbHJlYWR5SGlkZGVuIHx8IGlzRGVzdHJveWVkIHx8IGlzRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpbnZva2VIb29rKCdvbkhpZGUnLCBbaW5zdGFuY2VdLCBmYWxzZSk7XG4gICAgaWYgKGluc3RhbmNlLnByb3BzLm9uSGlkZShpbnN0YW5jZSkgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlID0gZmFsc2U7XG4gICAgaW5zdGFuY2Uuc3RhdGUuaXNTaG93biA9IGZhbHNlO1xuICAgIGlnbm9yZU9uRmlyc3RVcGRhdGUgPSBmYWxzZTtcbiAgICBpc1Zpc2libGVGcm9tQ2xpY2sgPSBmYWxzZTtcblxuICAgIGlmIChnZXRJc0RlZmF1bHRSZW5kZXJGbigpKSB7XG4gICAgICBwb3BwZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIH1cblxuICAgIGNsZWFudXBJbnRlcmFjdGl2ZU1vdXNlTGlzdGVuZXJzKCk7XG4gICAgcmVtb3ZlRG9jdW1lbnRQcmVzcygpO1xuICAgIGhhbmRsZVN0eWxlcyh0cnVlKTtcblxuICAgIGlmIChnZXRJc0RlZmF1bHRSZW5kZXJGbigpKSB7XG4gICAgICBjb25zdCB7Ym94LCBjb250ZW50fSA9IGdldERlZmF1bHRUZW1wbGF0ZUNoaWxkcmVuKCk7XG5cbiAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5hbmltYXRpb24pIHtcbiAgICAgICAgc2V0VHJhbnNpdGlvbkR1cmF0aW9uKFtib3gsIGNvbnRlbnRdLCBkdXJhdGlvbik7XG4gICAgICAgIHNldFZpc2liaWxpdHlTdGF0ZShbYm94LCBjb250ZW50XSwgJ2hpZGRlbicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUFyaWFDb250ZW50QXR0cmlidXRlKCk7XG4gICAgaGFuZGxlQXJpYUV4cGFuZGVkQXR0cmlidXRlKCk7XG5cbiAgICBpZiAoaW5zdGFuY2UucHJvcHMuYW5pbWF0aW9uKSB7XG4gICAgICBpZiAoZ2V0SXNEZWZhdWx0UmVuZGVyRm4oKSkge1xuICAgICAgICBvblRyYW5zaXRpb25lZE91dChkdXJhdGlvbiwgaW5zdGFuY2UudW5tb3VudCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGluc3RhbmNlLnVubW91bnQoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoaWRlV2l0aEludGVyYWN0aXZpdHkoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICB3YXJuV2hlbihcbiAgICAgICAgaW5zdGFuY2Uuc3RhdGUuaXNEZXN0cm95ZWQsXG4gICAgICAgIGNyZWF0ZU1lbW9yeUxlYWtXYXJuaW5nKCdoaWRlV2l0aEludGVyYWN0aXZpdHknKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXREb2N1bWVudCgpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGRlYm91bmNlZE9uTW91c2VNb3ZlKTtcbiAgICBwdXNoSWZVbmlxdWUobW91c2VNb3ZlTGlzdGVuZXJzLCBkZWJvdW5jZWRPbk1vdXNlTW92ZSk7XG4gICAgZGVib3VuY2VkT25Nb3VzZU1vdmUoZXZlbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gdW5tb3VudCgpOiB2b2lkIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICB3YXJuV2hlbihpbnN0YW5jZS5zdGF0ZS5pc0Rlc3Ryb3llZCwgY3JlYXRlTWVtb3J5TGVha1dhcm5pbmcoJ3VubW91bnQnKSk7XG4gICAgfVxuXG4gICAgaWYgKGluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSkge1xuICAgICAgaW5zdGFuY2UuaGlkZSgpO1xuICAgIH1cblxuICAgIGlmICghaW5zdGFuY2Uuc3RhdGUuaXNNb3VudGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZGVzdHJveVBvcHBlckluc3RhbmNlKCk7XG5cbiAgICAvLyBJZiBhIHBvcHBlciBpcyBub3QgaW50ZXJhY3RpdmUsIGl0IHdpbGwgYmUgYXBwZW5kZWQgb3V0c2lkZSB0aGUgcG9wcGVyXG4gICAgLy8gdHJlZSBieSBkZWZhdWx0LiBUaGlzIHNlZW1zIG1haW5seSBmb3IgaW50ZXJhY3RpdmUgdGlwcGllcywgYnV0IHdlIHNob3VsZFxuICAgIC8vIGZpbmQgYSB3b3JrYXJvdW5kIGlmIHBvc3NpYmxlXG4gICAgZ2V0TmVzdGVkUG9wcGVyVHJlZSgpLmZvckVhY2goKG5lc3RlZFBvcHBlcikgPT4ge1xuICAgICAgbmVzdGVkUG9wcGVyLl90aXBweSEudW5tb3VudCgpO1xuICAgIH0pO1xuXG4gICAgaWYgKHBvcHBlci5wYXJlbnROb2RlKSB7XG4gICAgICBwb3BwZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChwb3BwZXIpO1xuICAgIH1cblxuICAgIG1vdW50ZWRJbnN0YW5jZXMgPSBtb3VudGVkSW5zdGFuY2VzLmZpbHRlcigoaSkgPT4gaSAhPT0gaW5zdGFuY2UpO1xuXG4gICAgaW5zdGFuY2Uuc3RhdGUuaXNNb3VudGVkID0gZmFsc2U7XG4gICAgaW52b2tlSG9vaygnb25IaWRkZW4nLCBbaW5zdGFuY2VdKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAoX19ERVZfXykge1xuICAgICAgd2FybldoZW4oaW5zdGFuY2Uuc3RhdGUuaXNEZXN0cm95ZWQsIGNyZWF0ZU1lbW9yeUxlYWtXYXJuaW5nKCdkZXN0cm95JykpO1xuICAgIH1cblxuICAgIGlmIChpbnN0YW5jZS5zdGF0ZS5pc0Rlc3Ryb3llZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGluc3RhbmNlLmNsZWFyRGVsYXlUaW1lb3V0cygpO1xuICAgIGluc3RhbmNlLnVubW91bnQoKTtcblxuICAgIHJlbW92ZUxpc3RlbmVycygpO1xuXG4gICAgZGVsZXRlIHJlZmVyZW5jZS5fdGlwcHk7XG5cbiAgICBpbnN0YW5jZS5zdGF0ZS5pc0Rlc3Ryb3llZCA9IHRydWU7XG5cbiAgICBpbnZva2VIb29rKCdvbkRlc3Ryb3knLCBbaW5zdGFuY2VdKTtcbiAgfVxufVxuIiwgImltcG9ydCBiaW5kR2xvYmFsRXZlbnRMaXN0ZW5lcnMsIHtcbiAgY3VycmVudElucHV0LFxufSBmcm9tICcuL2JpbmRHbG9iYWxFdmVudExpc3RlbmVycyc7XG5pbXBvcnQgY3JlYXRlVGlwcHksIHttb3VudGVkSW5zdGFuY2VzfSBmcm9tICcuL2NyZWF0ZVRpcHB5JztcbmltcG9ydCB7Z2V0QXJyYXlPZkVsZW1lbnRzLCBpc0VsZW1lbnQsIGlzUmVmZXJlbmNlRWxlbWVudH0gZnJvbSAnLi9kb20tdXRpbHMnO1xuaW1wb3J0IHtkZWZhdWx0UHJvcHMsIHNldERlZmF1bHRQcm9wcywgdmFsaWRhdGVQcm9wc30gZnJvbSAnLi9wcm9wcyc7XG5pbXBvcnQge0hpZGVBbGwsIEhpZGVBbGxPcHRpb25zLCBJbnN0YW5jZSwgUHJvcHMsIFRhcmdldHN9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHt2YWxpZGF0ZVRhcmdldHMsIHdhcm5XaGVufSBmcm9tICcuL3ZhbGlkYXRpb24nO1xuXG5mdW5jdGlvbiB0aXBweShcbiAgdGFyZ2V0czogVGFyZ2V0cyxcbiAgb3B0aW9uYWxQcm9wczogUGFydGlhbDxQcm9wcz4gPSB7fVxuKTogSW5zdGFuY2UgfCBJbnN0YW5jZVtdIHtcbiAgY29uc3QgcGx1Z2lucyA9IGRlZmF1bHRQcm9wcy5wbHVnaW5zLmNvbmNhdChvcHRpb25hbFByb3BzLnBsdWdpbnMgfHwgW10pO1xuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmIChfX0RFVl9fKSB7XG4gICAgdmFsaWRhdGVUYXJnZXRzKHRhcmdldHMpO1xuICAgIHZhbGlkYXRlUHJvcHMob3B0aW9uYWxQcm9wcywgcGx1Z2lucyk7XG4gIH1cblxuICBiaW5kR2xvYmFsRXZlbnRMaXN0ZW5lcnMoKTtcblxuICBjb25zdCBwYXNzZWRQcm9wczogUGFydGlhbDxQcm9wcz4gPSB7Li4ub3B0aW9uYWxQcm9wcywgcGx1Z2luc307XG5cbiAgY29uc3QgZWxlbWVudHMgPSBnZXRBcnJheU9mRWxlbWVudHModGFyZ2V0cyk7XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKF9fREVWX18pIHtcbiAgICBjb25zdCBpc1NpbmdsZUNvbnRlbnRFbGVtZW50ID0gaXNFbGVtZW50KHBhc3NlZFByb3BzLmNvbnRlbnQpO1xuICAgIGNvbnN0IGlzTW9yZVRoYW5PbmVSZWZlcmVuY2VFbGVtZW50ID0gZWxlbWVudHMubGVuZ3RoID4gMTtcbiAgICB3YXJuV2hlbihcbiAgICAgIGlzU2luZ2xlQ29udGVudEVsZW1lbnQgJiYgaXNNb3JlVGhhbk9uZVJlZmVyZW5jZUVsZW1lbnQsXG4gICAgICBbXG4gICAgICAgICd0aXBweSgpIHdhcyBwYXNzZWQgYW4gRWxlbWVudCBhcyB0aGUgYGNvbnRlbnRgIHByb3AsIGJ1dCBtb3JlIHRoYW4nLFxuICAgICAgICAnb25lIHRpcHB5IGluc3RhbmNlIHdhcyBjcmVhdGVkIGJ5IHRoaXMgaW52b2NhdGlvbi4gVGhpcyBtZWFucyB0aGUnLFxuICAgICAgICAnY29udGVudCBlbGVtZW50IHdpbGwgb25seSBiZSBhcHBlbmRlZCB0byB0aGUgbGFzdCB0aXBweSBpbnN0YW5jZS4nLFxuICAgICAgICAnXFxuXFxuJyxcbiAgICAgICAgJ0luc3RlYWQsIHBhc3MgdGhlIC5pbm5lckhUTUwgb2YgdGhlIGVsZW1lbnQsIG9yIHVzZSBhIGZ1bmN0aW9uIHRoYXQnLFxuICAgICAgICAncmV0dXJucyBhIGNsb25lZCB2ZXJzaW9uIG9mIHRoZSBlbGVtZW50IGluc3RlYWQuJyxcbiAgICAgICAgJ1xcblxcbicsXG4gICAgICAgICcxKSBjb250ZW50OiBlbGVtZW50LmlubmVySFRNTFxcbicsXG4gICAgICAgICcyKSBjb250ZW50OiAoKSA9PiBlbGVtZW50LmNsb25lTm9kZSh0cnVlKScsXG4gICAgICBdLmpvaW4oJyAnKVxuICAgICk7XG4gIH1cblxuICBjb25zdCBpbnN0YW5jZXMgPSBlbGVtZW50cy5yZWR1Y2U8SW5zdGFuY2VbXT4oXG4gICAgKGFjYywgcmVmZXJlbmNlKTogSW5zdGFuY2VbXSA9PiB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHJlZmVyZW5jZSAmJiBjcmVhdGVUaXBweShyZWZlcmVuY2UsIHBhc3NlZFByb3BzKTtcblxuICAgICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgIGFjYy5wdXNoKGluc3RhbmNlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LFxuICAgIFtdXG4gICk7XG5cbiAgcmV0dXJuIGlzRWxlbWVudCh0YXJnZXRzKSA/IGluc3RhbmNlc1swXSA6IGluc3RhbmNlcztcbn1cblxudGlwcHkuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xudGlwcHkuc2V0RGVmYXVsdFByb3BzID0gc2V0RGVmYXVsdFByb3BzO1xudGlwcHkuY3VycmVudElucHV0ID0gY3VycmVudElucHV0O1xuXG5leHBvcnQgZGVmYXVsdCB0aXBweTtcblxuZXhwb3J0IGNvbnN0IGhpZGVBbGw6IEhpZGVBbGwgPSAoe1xuICBleGNsdWRlOiBleGNsdWRlZFJlZmVyZW5jZU9ySW5zdGFuY2UsXG4gIGR1cmF0aW9uLFxufTogSGlkZUFsbE9wdGlvbnMgPSB7fSkgPT4ge1xuICBtb3VudGVkSW5zdGFuY2VzLmZvckVhY2goKGluc3RhbmNlKSA9PiB7XG4gICAgbGV0IGlzRXhjbHVkZWQgPSBmYWxzZTtcblxuICAgIGlmIChleGNsdWRlZFJlZmVyZW5jZU9ySW5zdGFuY2UpIHtcbiAgICAgIGlzRXhjbHVkZWQgPSBpc1JlZmVyZW5jZUVsZW1lbnQoZXhjbHVkZWRSZWZlcmVuY2VPckluc3RhbmNlKVxuICAgICAgICA/IGluc3RhbmNlLnJlZmVyZW5jZSA9PT0gZXhjbHVkZWRSZWZlcmVuY2VPckluc3RhbmNlXG4gICAgICAgIDogaW5zdGFuY2UucG9wcGVyID09PSAoZXhjbHVkZWRSZWZlcmVuY2VPckluc3RhbmNlIGFzIEluc3RhbmNlKS5wb3BwZXI7XG4gICAgfVxuXG4gICAgaWYgKCFpc0V4Y2x1ZGVkKSB7XG4gICAgICBjb25zdCBvcmlnaW5hbER1cmF0aW9uID0gaW5zdGFuY2UucHJvcHMuZHVyYXRpb247XG5cbiAgICAgIGluc3RhbmNlLnNldFByb3BzKHtkdXJhdGlvbn0pO1xuICAgICAgaW5zdGFuY2UuaGlkZSgpO1xuXG4gICAgICBpZiAoIWluc3RhbmNlLnN0YXRlLmlzRGVzdHJveWVkKSB7XG4gICAgICAgIGluc3RhbmNlLnNldFByb3BzKHtkdXJhdGlvbjogb3JpZ2luYWxEdXJhdGlvbn0pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuIiwgImltcG9ydCB0aXBweSBmcm9tICcuLic7XG5pbXBvcnQge2Rpdn0gZnJvbSAnLi4vZG9tLXV0aWxzJztcbmltcG9ydCB7XG4gIENyZWF0ZVNpbmdsZXRvbixcbiAgUGx1Z2luLFxuICBDcmVhdGVTaW5nbGV0b25Qcm9wcyxcbiAgUmVmZXJlbmNlRWxlbWVudCxcbiAgQ3JlYXRlU2luZ2xldG9uSW5zdGFuY2UsXG4gIEluc3RhbmNlLFxuICBQcm9wcyxcbn0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHtub3JtYWxpemVUb0FycmF5LCByZW1vdmVQcm9wZXJ0aWVzfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQge2Vycm9yV2hlbn0gZnJvbSAnLi4vdmFsaWRhdGlvbic7XG5pbXBvcnQge2FwcGx5U3R5bGVzLCBNb2RpZmllcn0gZnJvbSAnQHBvcHBlcmpzL2NvcmUnO1xuXG4vLyBUaGUgZGVmYXVsdCBgYXBwbHlTdHlsZXNgIG1vZGlmaWVyIGhhcyBhIGNsZWFudXAgZnVuY3Rpb24gdGhhdCBnZXRzIGNhbGxlZFxuLy8gZXZlcnkgdGltZSB0aGUgcG9wcGVyIGlzIGRlc3Ryb3llZCAoaS5lLiBhIG5ldyB0YXJnZXQpLCByZW1vdmluZyB0aGUgc3R5bGVzXG4vLyBhbmQgY2F1c2luZyB0cmFuc2l0aW9ucyB0byBicmVhayBmb3Igc2luZ2xldG9ucyB3aGVuIHRoZSBjb25zb2xlIGlzIG9wZW4sIGJ1dFxuLy8gbW9zdCBub3RhYmx5IGZvciBub24tdHJhbnNmb3JtIHN0eWxlcyBiZWluZyB1c2VkLCBgZ3B1QWNjZWxlcmF0aW9uOiBmYWxzZWAuXG5jb25zdCBhcHBseVN0eWxlc01vZGlmaWVyOiBNb2RpZmllcjwnYXBwbHlTdHlsZXMnLCBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4gPSB7XG4gIC4uLmFwcGx5U3R5bGVzLFxuICBlZmZlY3Qoe3N0YXRlfSkge1xuICAgIGNvbnN0IGluaXRpYWxTdHlsZXMgPSB7XG4gICAgICBwb3BwZXI6IHtcbiAgICAgICAgcG9zaXRpb246IHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3ksXG4gICAgICAgIGxlZnQ6ICcwJyxcbiAgICAgICAgdG9wOiAnMCcsXG4gICAgICAgIG1hcmdpbjogJzAnLFxuICAgICAgfSxcbiAgICAgIGFycm93OiB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgfSxcbiAgICAgIHJlZmVyZW5jZToge30sXG4gICAgfTtcblxuICAgIE9iamVjdC5hc3NpZ24oc3RhdGUuZWxlbWVudHMucG9wcGVyLnN0eWxlLCBpbml0aWFsU3R5bGVzLnBvcHBlcik7XG4gICAgc3RhdGUuc3R5bGVzID0gaW5pdGlhbFN0eWxlcztcblxuICAgIGlmIChzdGF0ZS5lbGVtZW50cy5hcnJvdykge1xuICAgICAgT2JqZWN0LmFzc2lnbihzdGF0ZS5lbGVtZW50cy5hcnJvdy5zdHlsZSwgaW5pdGlhbFN0eWxlcy5hcnJvdyk7XG4gICAgfVxuXG4gICAgLy8gaW50ZW50aW9uYWxseSByZXR1cm4gbm8gY2xlYW51cCBmdW5jdGlvblxuICAgIC8vIHJldHVybiAoKSA9PiB7IC4uLiB9XG4gIH0sXG59O1xuXG5jb25zdCBjcmVhdGVTaW5nbGV0b246IENyZWF0ZVNpbmdsZXRvbiA9IChcbiAgdGlwcHlJbnN0YW5jZXMsXG4gIG9wdGlvbmFsUHJvcHMgPSB7fVxuKSA9PiB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmIChfX0RFVl9fKSB7XG4gICAgZXJyb3JXaGVuKFxuICAgICAgIUFycmF5LmlzQXJyYXkodGlwcHlJbnN0YW5jZXMpLFxuICAgICAgW1xuICAgICAgICAnVGhlIGZpcnN0IGFyZ3VtZW50IHBhc3NlZCB0byBjcmVhdGVTaW5nbGV0b24oKSBtdXN0IGJlIGFuIGFycmF5IG9mJyxcbiAgICAgICAgJ3RpcHB5IGluc3RhbmNlcy4gVGhlIHBhc3NlZCB2YWx1ZSB3YXMnLFxuICAgICAgICBTdHJpbmcodGlwcHlJbnN0YW5jZXMpLFxuICAgICAgXS5qb2luKCcgJylcbiAgICApO1xuICB9XG5cbiAgbGV0IGluZGl2aWR1YWxJbnN0YW5jZXMgPSB0aXBweUluc3RhbmNlcztcbiAgbGV0IHJlZmVyZW5jZXM6IEFycmF5PFJlZmVyZW5jZUVsZW1lbnQ+ID0gW107XG4gIGxldCB0cmlnZ2VyVGFyZ2V0czogQXJyYXk8RWxlbWVudD4gPSBbXTtcbiAgbGV0IGN1cnJlbnRUYXJnZXQ6IEVsZW1lbnQgfCBudWxsO1xuICBsZXQgb3ZlcnJpZGVzID0gb3B0aW9uYWxQcm9wcy5vdmVycmlkZXM7XG4gIGxldCBpbnRlcmNlcHRTZXRQcm9wc0NsZWFudXBzOiBBcnJheTwoKSA9PiB2b2lkPiA9IFtdO1xuICBsZXQgc2hvd25PbkNyZWF0ZSA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIHNldFRyaWdnZXJUYXJnZXRzKCk6IHZvaWQge1xuICAgIHRyaWdnZXJUYXJnZXRzID0gaW5kaXZpZHVhbEluc3RhbmNlc1xuICAgICAgLm1hcCgoaW5zdGFuY2UpID0+XG4gICAgICAgIG5vcm1hbGl6ZVRvQXJyYXkoaW5zdGFuY2UucHJvcHMudHJpZ2dlclRhcmdldCB8fCBpbnN0YW5jZS5yZWZlcmVuY2UpXG4gICAgICApXG4gICAgICAucmVkdWNlKChhY2MsIGl0ZW0pID0+IGFjYy5jb25jYXQoaXRlbSksIFtdKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFJlZmVyZW5jZXMoKTogdm9pZCB7XG4gICAgcmVmZXJlbmNlcyA9IGluZGl2aWR1YWxJbnN0YW5jZXMubWFwKChpbnN0YW5jZSkgPT4gaW5zdGFuY2UucmVmZXJlbmNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVuYWJsZUluc3RhbmNlcyhpc0VuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpbmRpdmlkdWFsSW5zdGFuY2VzLmZvckVhY2goKGluc3RhbmNlKSA9PiB7XG4gICAgICBpZiAoaXNFbmFibGVkKSB7XG4gICAgICAgIGluc3RhbmNlLmVuYWJsZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5zdGFuY2UuZGlzYWJsZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW50ZXJjZXB0U2V0UHJvcHMoc2luZ2xldG9uOiBJbnN0YW5jZSk6IEFycmF5PCgpID0+IHZvaWQ+IHtcbiAgICByZXR1cm4gaW5kaXZpZHVhbEluc3RhbmNlcy5tYXAoKGluc3RhbmNlKSA9PiB7XG4gICAgICBjb25zdCBvcmlnaW5hbFNldFByb3BzID0gaW5zdGFuY2Uuc2V0UHJvcHM7XG5cbiAgICAgIGluc3RhbmNlLnNldFByb3BzID0gKHByb3BzKTogdm9pZCA9PiB7XG4gICAgICAgIG9yaWdpbmFsU2V0UHJvcHMocHJvcHMpO1xuXG4gICAgICAgIGlmIChpbnN0YW5jZS5yZWZlcmVuY2UgPT09IGN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgICBzaW5nbGV0b24uc2V0UHJvcHMocHJvcHMpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gKCk6IHZvaWQgPT4ge1xuICAgICAgICBpbnN0YW5jZS5zZXRQcm9wcyA9IG9yaWdpbmFsU2V0UHJvcHM7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgLy8gaGF2ZSB0byBwYXNzIHNpbmdsZXRvbiwgYXMgaXQgbWF5YmUgdW5kZWZpbmVkIG9uIGZpcnN0IGNhbGxcbiAgZnVuY3Rpb24gcHJlcGFyZUluc3RhbmNlKFxuICAgIHNpbmdsZXRvbjogSW5zdGFuY2UsXG4gICAgdGFyZ2V0OiBSZWZlcmVuY2VFbGVtZW50XG4gICk6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4ID0gdHJpZ2dlclRhcmdldHMuaW5kZXhPZih0YXJnZXQpO1xuXG4gICAgLy8gYmFpbC1vdXRcbiAgICBpZiAodGFyZ2V0ID09PSBjdXJyZW50VGFyZ2V0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY3VycmVudFRhcmdldCA9IHRhcmdldDtcblxuICAgIGNvbnN0IG92ZXJyaWRlUHJvcHM6IFBhcnRpYWw8UHJvcHM+ID0gKG92ZXJyaWRlcyB8fCBbXSlcbiAgICAgIC5jb25jYXQoJ2NvbnRlbnQnKVxuICAgICAgLnJlZHVjZSgoYWNjLCBwcm9wKSA9PiB7XG4gICAgICAgIChhY2MgYXMgYW55KVtwcm9wXSA9IGluZGl2aWR1YWxJbnN0YW5jZXNbaW5kZXhdLnByb3BzW3Byb3BdO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwge30pO1xuXG4gICAgc2luZ2xldG9uLnNldFByb3BzKHtcbiAgICAgIC4uLm92ZXJyaWRlUHJvcHMsXG4gICAgICBnZXRSZWZlcmVuY2VDbGllbnRSZWN0OlxuICAgICAgICB0eXBlb2Ygb3ZlcnJpZGVQcm9wcy5nZXRSZWZlcmVuY2VDbGllbnRSZWN0ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgPyBvdmVycmlkZVByb3BzLmdldFJlZmVyZW5jZUNsaWVudFJlY3RcbiAgICAgICAgICA6ICgpOiBDbGllbnRSZWN0ID0+IHJlZmVyZW5jZXNbaW5kZXhdPy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICB9KTtcbiAgfVxuXG4gIGVuYWJsZUluc3RhbmNlcyhmYWxzZSk7XG4gIHNldFJlZmVyZW5jZXMoKTtcbiAgc2V0VHJpZ2dlclRhcmdldHMoKTtcblxuICBjb25zdCBwbHVnaW46IFBsdWdpbiA9IHtcbiAgICBmbigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgICBlbmFibGVJbnN0YW5jZXModHJ1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uSGlkZGVuKCk6IHZvaWQge1xuICAgICAgICAgIGN1cnJlbnRUYXJnZXQgPSBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBvbkNsaWNrT3V0c2lkZShpbnN0YW5jZSk6IHZvaWQge1xuICAgICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5zaG93T25DcmVhdGUgJiYgIXNob3duT25DcmVhdGUpIHtcbiAgICAgICAgICAgIHNob3duT25DcmVhdGUgPSB0cnVlO1xuICAgICAgICAgICAgY3VycmVudFRhcmdldCA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvblNob3coaW5zdGFuY2UpOiB2b2lkIHtcbiAgICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMuc2hvd09uQ3JlYXRlICYmICFzaG93bk9uQ3JlYXRlKSB7XG4gICAgICAgICAgICBzaG93bk9uQ3JlYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIHByZXBhcmVJbnN0YW5jZShpbnN0YW5jZSwgcmVmZXJlbmNlc1swXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvblRyaWdnZXIoaW5zdGFuY2UsIGV2ZW50KTogdm9pZCB7XG4gICAgICAgICAgcHJlcGFyZUluc3RhbmNlKGluc3RhbmNlLCBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEVsZW1lbnQpO1xuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IHNpbmdsZXRvbiA9IHRpcHB5KGRpdigpLCB7XG4gICAgLi4ucmVtb3ZlUHJvcGVydGllcyhvcHRpb25hbFByb3BzLCBbJ292ZXJyaWRlcyddKSxcbiAgICBwbHVnaW5zOiBbcGx1Z2luLCAuLi4ob3B0aW9uYWxQcm9wcy5wbHVnaW5zIHx8IFtdKV0sXG4gICAgdHJpZ2dlclRhcmdldDogdHJpZ2dlclRhcmdldHMsXG4gICAgcG9wcGVyT3B0aW9uczoge1xuICAgICAgLi4ub3B0aW9uYWxQcm9wcy5wb3BwZXJPcHRpb25zLFxuICAgICAgbW9kaWZpZXJzOiBbXG4gICAgICAgIC4uLihvcHRpb25hbFByb3BzLnBvcHBlck9wdGlvbnM/Lm1vZGlmaWVycyB8fCBbXSksXG4gICAgICAgIGFwcGx5U3R5bGVzTW9kaWZpZXIsXG4gICAgICBdLFxuICAgIH0sXG4gIH0pIGFzIENyZWF0ZVNpbmdsZXRvbkluc3RhbmNlPENyZWF0ZVNpbmdsZXRvblByb3BzPjtcblxuICBjb25zdCBvcmlnaW5hbFNob3cgPSBzaW5nbGV0b24uc2hvdztcblxuICBzaW5nbGV0b24uc2hvdyA9ICh0YXJnZXQ/OiBSZWZlcmVuY2VFbGVtZW50IHwgSW5zdGFuY2UgfCBudW1iZXIpOiB2b2lkID0+IHtcbiAgICBvcmlnaW5hbFNob3coKTtcblxuICAgIC8vIGZpcnN0IHRpbWUsIHNob3dPbkNyZWF0ZSBvciBwcm9ncmFtbWF0aWMgY2FsbCB3aXRoIG5vIHBhcmFtc1xuICAgIC8vIGRlZmF1bHQgdG8gc2hvd2luZyBmaXJzdCBpbnN0YW5jZVxuICAgIGlmICghY3VycmVudFRhcmdldCAmJiB0YXJnZXQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHByZXBhcmVJbnN0YW5jZShzaW5nbGV0b24sIHJlZmVyZW5jZXNbMF0pO1xuICAgIH1cblxuICAgIC8vIHRyaWdnZXJlZCBmcm9tIGV2ZW50IChkbyBub3RoaW5nIGFzIHByZXBhcmVJbnN0YW5jZSBhbHJlYWR5IGNhbGxlZCBieSBvblRyaWdnZXIpXG4gICAgLy8gcHJvZ3JhbW1hdGljIGNhbGwgd2l0aCBubyBwYXJhbXMgd2hlbiBhbHJlYWR5IHZpc2libGUgKGRvIG5vdGhpbmcgYWdhaW4pXG4gICAgaWYgKGN1cnJlbnRUYXJnZXQgJiYgdGFyZ2V0ID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyB0YXJnZXQgaXMgaW5kZXggb2YgaW5zdGFuY2VcbiAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHJlZmVyZW5jZXNbdGFyZ2V0XSAmJiBwcmVwYXJlSW5zdGFuY2Uoc2luZ2xldG9uLCByZWZlcmVuY2VzW3RhcmdldF0pXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIHRhcmdldCBpcyBhIGNoaWxkIHRpcHB5IGluc3RhbmNlXG4gICAgaWYgKGluZGl2aWR1YWxJbnN0YW5jZXMuaW5kZXhPZih0YXJnZXQgYXMgSW5zdGFuY2UpID49IDApIHtcbiAgICAgIGNvbnN0IHJlZiA9ICh0YXJnZXQgYXMgSW5zdGFuY2UpLnJlZmVyZW5jZTtcbiAgICAgIHJldHVybiBwcmVwYXJlSW5zdGFuY2Uoc2luZ2xldG9uLCByZWYpO1xuICAgIH1cblxuICAgIC8vIHRhcmdldCBpcyBhIFJlZmVyZW5jZUVsZW1lbnRcbiAgICBpZiAocmVmZXJlbmNlcy5pbmRleE9mKHRhcmdldCBhcyBSZWZlcmVuY2VFbGVtZW50KSA+PSAwKSB7XG4gICAgICByZXR1cm4gcHJlcGFyZUluc3RhbmNlKHNpbmdsZXRvbiwgdGFyZ2V0IGFzIFJlZmVyZW5jZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcblxuICBzaW5nbGV0b24uc2hvd05leHQgPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc3QgZmlyc3QgPSByZWZlcmVuY2VzWzBdO1xuICAgIGlmICghY3VycmVudFRhcmdldCkge1xuICAgICAgcmV0dXJuIHNpbmdsZXRvbi5zaG93KDApO1xuICAgIH1cbiAgICBjb25zdCBpbmRleCA9IHJlZmVyZW5jZXMuaW5kZXhPZihjdXJyZW50VGFyZ2V0KTtcbiAgICBzaW5nbGV0b24uc2hvdyhyZWZlcmVuY2VzW2luZGV4ICsgMV0gfHwgZmlyc3QpO1xuICB9O1xuXG4gIHNpbmdsZXRvbi5zaG93UHJldmlvdXMgPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc3QgbGFzdCA9IHJlZmVyZW5jZXNbcmVmZXJlbmNlcy5sZW5ndGggLSAxXTtcbiAgICBpZiAoIWN1cnJlbnRUYXJnZXQpIHtcbiAgICAgIHJldHVybiBzaW5nbGV0b24uc2hvdyhsYXN0KTtcbiAgICB9XG4gICAgY29uc3QgaW5kZXggPSByZWZlcmVuY2VzLmluZGV4T2YoY3VycmVudFRhcmdldCk7XG4gICAgY29uc3QgdGFyZ2V0ID0gcmVmZXJlbmNlc1tpbmRleCAtIDFdIHx8IGxhc3Q7XG4gICAgc2luZ2xldG9uLnNob3codGFyZ2V0KTtcbiAgfTtcblxuICBjb25zdCBvcmlnaW5hbFNldFByb3BzID0gc2luZ2xldG9uLnNldFByb3BzO1xuXG4gIHNpbmdsZXRvbi5zZXRQcm9wcyA9IChwcm9wcyk6IHZvaWQgPT4ge1xuICAgIG92ZXJyaWRlcyA9IHByb3BzLm92ZXJyaWRlcyB8fCBvdmVycmlkZXM7XG4gICAgb3JpZ2luYWxTZXRQcm9wcyhwcm9wcyk7XG4gIH07XG5cbiAgc2luZ2xldG9uLnNldEluc3RhbmNlcyA9IChuZXh0SW5zdGFuY2VzKTogdm9pZCA9PiB7XG4gICAgZW5hYmxlSW5zdGFuY2VzKHRydWUpO1xuICAgIGludGVyY2VwdFNldFByb3BzQ2xlYW51cHMuZm9yRWFjaCgoZm4pID0+IGZuKCkpO1xuXG4gICAgaW5kaXZpZHVhbEluc3RhbmNlcyA9IG5leHRJbnN0YW5jZXM7XG5cbiAgICBlbmFibGVJbnN0YW5jZXMoZmFsc2UpO1xuICAgIHNldFJlZmVyZW5jZXMoKTtcbiAgICBzZXRUcmlnZ2VyVGFyZ2V0cygpO1xuICAgIGludGVyY2VwdFNldFByb3BzQ2xlYW51cHMgPSBpbnRlcmNlcHRTZXRQcm9wcyhzaW5nbGV0b24pO1xuXG4gICAgc2luZ2xldG9uLnNldFByb3BzKHt0cmlnZ2VyVGFyZ2V0OiB0cmlnZ2VyVGFyZ2V0c30pO1xuICB9O1xuXG4gIGludGVyY2VwdFNldFByb3BzQ2xlYW51cHMgPSBpbnRlcmNlcHRTZXRQcm9wcyhzaW5nbGV0b24pO1xuXG4gIHJldHVybiBzaW5nbGV0b247XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTaW5nbGV0b247XG4iLCAiaW1wb3J0IHRpcHB5IGZyb20gJy4uJztcbmltcG9ydCB7VE9VQ0hfT1BUSU9OU30gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7ZGVmYXVsdFByb3BzfSBmcm9tICcuLi9wcm9wcyc7XG5pbXBvcnQge0luc3RhbmNlLCBQcm9wcywgVGFyZ2V0c30gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHtMaXN0ZW5lck9iamVjdH0gZnJvbSAnLi4vdHlwZXMtaW50ZXJuYWwnO1xuaW1wb3J0IHtub3JtYWxpemVUb0FycmF5LCByZW1vdmVQcm9wZXJ0aWVzfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQge2Vycm9yV2hlbn0gZnJvbSAnLi4vdmFsaWRhdGlvbic7XG5cbmNvbnN0IEJVQkJMSU5HX0VWRU5UU19NQVAgPSB7XG4gIG1vdXNlb3ZlcjogJ21vdXNlZW50ZXInLFxuICBmb2N1c2luOiAnZm9jdXMnLFxuICBjbGljazogJ2NsaWNrJyxcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRlbGVnYXRlIGluc3RhbmNlIHRoYXQgY29udHJvbHMgdGhlIGNyZWF0aW9uIG9mIHRpcHB5IGluc3RhbmNlc1xuICogZm9yIGNoaWxkIGVsZW1lbnRzIChgdGFyZ2V0YCBDU1Mgc2VsZWN0b3IpLlxuICovXG5mdW5jdGlvbiBkZWxlZ2F0ZShcbiAgdGFyZ2V0czogVGFyZ2V0cyxcbiAgcHJvcHM6IFBhcnRpYWw8UHJvcHM+ICYge3RhcmdldDogc3RyaW5nfVxuKTogSW5zdGFuY2UgfCBJbnN0YW5jZVtdIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKF9fREVWX18pIHtcbiAgICBlcnJvcldoZW4oXG4gICAgICAhKHByb3BzICYmIHByb3BzLnRhcmdldCksXG4gICAgICBbXG4gICAgICAgICdZb3UgbXVzdCBzcGVjaXR5IGEgYHRhcmdldGAgcHJvcCBpbmRpY2F0aW5nIGEgQ1NTIHNlbGVjdG9yIHN0cmluZyBtYXRjaGluZycsXG4gICAgICAgICd0aGUgdGFyZ2V0IGVsZW1lbnRzIHRoYXQgc2hvdWxkIHJlY2VpdmUgYSB0aXBweS4nLFxuICAgICAgXS5qb2luKCcgJylcbiAgICApO1xuICB9XG5cbiAgbGV0IGxpc3RlbmVyczogTGlzdGVuZXJPYmplY3RbXSA9IFtdO1xuICBsZXQgY2hpbGRUaXBweUluc3RhbmNlczogSW5zdGFuY2VbXSA9IFtdO1xuICBsZXQgZGlzYWJsZWQgPSBmYWxzZTtcblxuICBjb25zdCB7dGFyZ2V0fSA9IHByb3BzO1xuXG4gIGNvbnN0IG5hdGl2ZVByb3BzID0gcmVtb3ZlUHJvcGVydGllcyhwcm9wcywgWyd0YXJnZXQnXSk7XG4gIGNvbnN0IHBhcmVudFByb3BzID0gey4uLm5hdGl2ZVByb3BzLCB0cmlnZ2VyOiAnbWFudWFsJywgdG91Y2g6IGZhbHNlfTtcbiAgY29uc3QgY2hpbGRQcm9wcyA9IHtcbiAgICB0b3VjaDogZGVmYXVsdFByb3BzLnRvdWNoLFxuICAgIC4uLm5hdGl2ZVByb3BzLFxuICAgIHNob3dPbkNyZWF0ZTogdHJ1ZSxcbiAgfTtcblxuICBjb25zdCByZXR1cm5WYWx1ZSA9IHRpcHB5KHRhcmdldHMsIHBhcmVudFByb3BzKTtcbiAgY29uc3Qgbm9ybWFsaXplZFJldHVyblZhbHVlID0gbm9ybWFsaXplVG9BcnJheShyZXR1cm5WYWx1ZSk7XG5cbiAgZnVuY3Rpb24gb25UcmlnZ2VyKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGlmICghZXZlbnQudGFyZ2V0IHx8IGRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdGFyZ2V0Tm9kZSA9IChldmVudC50YXJnZXQgYXMgRWxlbWVudCkuY2xvc2VzdCh0YXJnZXQpO1xuXG4gICAgaWYgKCF0YXJnZXROb2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gR2V0IHJlbGV2YW50IHRyaWdnZXIgd2l0aCBmYWxsYmFja3M6XG4gICAgLy8gMS4gQ2hlY2sgYGRhdGEtdGlwcHktdHJpZ2dlcmAgYXR0cmlidXRlIG9uIHRhcmdldCBub2RlXG4gICAgLy8gMi4gRmFsbGJhY2sgdG8gYHRyaWdnZXJgIHBhc3NlZCB0byBgZGVsZWdhdGUoKWBcbiAgICAvLyAzLiBGYWxsYmFjayB0byBgZGVmYXVsdFByb3BzLnRyaWdnZXJgXG4gICAgY29uc3QgdHJpZ2dlciA9XG4gICAgICB0YXJnZXROb2RlLmdldEF0dHJpYnV0ZSgnZGF0YS10aXBweS10cmlnZ2VyJykgfHxcbiAgICAgIHByb3BzLnRyaWdnZXIgfHxcbiAgICAgIGRlZmF1bHRQcm9wcy50cmlnZ2VyO1xuXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGlmICh0YXJnZXROb2RlLl90aXBweSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChldmVudC50eXBlID09PSAndG91Y2hzdGFydCcgJiYgdHlwZW9mIGNoaWxkUHJvcHMudG91Y2ggPT09ICdib29sZWFuJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGV2ZW50LnR5cGUgIT09ICd0b3VjaHN0YXJ0JyAmJlxuICAgICAgdHJpZ2dlci5pbmRleE9mKChCVUJCTElOR19FVkVOVFNfTUFQIGFzIGFueSlbZXZlbnQudHlwZV0pIDwgMFxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGluc3RhbmNlID0gdGlwcHkodGFyZ2V0Tm9kZSwgY2hpbGRQcm9wcyk7XG5cbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgIGNoaWxkVGlwcHlJbnN0YW5jZXMgPSBjaGlsZFRpcHB5SW5zdGFuY2VzLmNvbmNhdChpbnN0YW5jZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb24oXG4gICAgbm9kZTogRWxlbWVudCxcbiAgICBldmVudFR5cGU6IHN0cmluZyxcbiAgICBoYW5kbGVyOiBFdmVudExpc3RlbmVyLFxuICAgIG9wdGlvbnM6IGJvb2xlYW4gfCBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IGZhbHNlXG4gICk6IHZvaWQge1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIGxpc3RlbmVycy5wdXNoKHtub2RlLCBldmVudFR5cGUsIGhhbmRsZXIsIG9wdGlvbnN9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKGluc3RhbmNlOiBJbnN0YW5jZSk6IHZvaWQge1xuICAgIGNvbnN0IHtyZWZlcmVuY2V9ID0gaW5zdGFuY2U7XG5cbiAgICBvbihyZWZlcmVuY2UsICd0b3VjaHN0YXJ0Jywgb25UcmlnZ2VyLCBUT1VDSF9PUFRJT05TKTtcbiAgICBvbihyZWZlcmVuY2UsICdtb3VzZW92ZXInLCBvblRyaWdnZXIpO1xuICAgIG9uKHJlZmVyZW5jZSwgJ2ZvY3VzaW4nLCBvblRyaWdnZXIpO1xuICAgIG9uKHJlZmVyZW5jZSwgJ2NsaWNrJywgb25UcmlnZ2VyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCk6IHZvaWQge1xuICAgIGxpc3RlbmVycy5mb3JFYWNoKCh7bm9kZSwgZXZlbnRUeXBlLCBoYW5kbGVyLCBvcHRpb25zfTogTGlzdGVuZXJPYmplY3QpID0+IHtcbiAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIH0pO1xuICAgIGxpc3RlbmVycyA9IFtdO1xuICB9XG5cbiAgZnVuY3Rpb24gYXBwbHlNdXRhdGlvbnMoaW5zdGFuY2U6IEluc3RhbmNlKTogdm9pZCB7XG4gICAgY29uc3Qgb3JpZ2luYWxEZXN0cm95ID0gaW5zdGFuY2UuZGVzdHJveTtcbiAgICBjb25zdCBvcmlnaW5hbEVuYWJsZSA9IGluc3RhbmNlLmVuYWJsZTtcbiAgICBjb25zdCBvcmlnaW5hbERpc2FibGUgPSBpbnN0YW5jZS5kaXNhYmxlO1xuXG4gICAgaW5zdGFuY2UuZGVzdHJveSA9IChzaG91bGREZXN0cm95Q2hpbGRJbnN0YW5jZXMgPSB0cnVlKTogdm9pZCA9PiB7XG4gICAgICBpZiAoc2hvdWxkRGVzdHJveUNoaWxkSW5zdGFuY2VzKSB7XG4gICAgICAgIGNoaWxkVGlwcHlJbnN0YW5jZXMuZm9yRWFjaCgoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgICBpbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBjaGlsZFRpcHB5SW5zdGFuY2VzID0gW107XG5cbiAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICBvcmlnaW5hbERlc3Ryb3koKTtcbiAgICB9O1xuXG4gICAgaW5zdGFuY2UuZW5hYmxlID0gKCk6IHZvaWQgPT4ge1xuICAgICAgb3JpZ2luYWxFbmFibGUoKTtcbiAgICAgIGNoaWxkVGlwcHlJbnN0YW5jZXMuZm9yRWFjaCgoaW5zdGFuY2UpID0+IGluc3RhbmNlLmVuYWJsZSgpKTtcbiAgICAgIGRpc2FibGVkID0gZmFsc2U7XG4gICAgfTtcblxuICAgIGluc3RhbmNlLmRpc2FibGUgPSAoKTogdm9pZCA9PiB7XG4gICAgICBvcmlnaW5hbERpc2FibGUoKTtcbiAgICAgIGNoaWxkVGlwcHlJbnN0YW5jZXMuZm9yRWFjaCgoaW5zdGFuY2UpID0+IGluc3RhbmNlLmRpc2FibGUoKSk7XG4gICAgICBkaXNhYmxlZCA9IHRydWU7XG4gICAgfTtcblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKGluc3RhbmNlKTtcbiAgfVxuXG4gIG5vcm1hbGl6ZWRSZXR1cm5WYWx1ZS5mb3JFYWNoKGFwcGx5TXV0YXRpb25zKTtcblxuICByZXR1cm4gcmV0dXJuVmFsdWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlbGVnYXRlO1xuIiwgImltcG9ydCB7QkFDS0RST1BfQ0xBU1N9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge2Rpdiwgc2V0VmlzaWJpbGl0eVN0YXRlfSBmcm9tICcuLi9kb20tdXRpbHMnO1xuaW1wb3J0IHtnZXRDaGlsZHJlbn0gZnJvbSAnLi4vdGVtcGxhdGUnO1xuaW1wb3J0IHtBbmltYXRlRmlsbH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHtlcnJvcldoZW59IGZyb20gJy4uL3ZhbGlkYXRpb24nO1xuXG5jb25zdCBhbmltYXRlRmlsbDogQW5pbWF0ZUZpbGwgPSB7XG4gIG5hbWU6ICdhbmltYXRlRmlsbCcsXG4gIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gIGZuKGluc3RhbmNlKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGlmICghaW5zdGFuY2UucHJvcHMucmVuZGVyPy4kJHRpcHB5KSB7XG4gICAgICBpZiAoX19ERVZfXykge1xuICAgICAgICBlcnJvcldoZW4oXG4gICAgICAgICAgaW5zdGFuY2UucHJvcHMuYW5pbWF0ZUZpbGwsXG4gICAgICAgICAgJ1RoZSBgYW5pbWF0ZUZpbGxgIHBsdWdpbiByZXF1aXJlcyB0aGUgZGVmYXVsdCByZW5kZXIgZnVuY3Rpb24uJ1xuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgY29uc3Qge2JveCwgY29udGVudH0gPSBnZXRDaGlsZHJlbihpbnN0YW5jZS5wb3BwZXIpO1xuXG4gICAgY29uc3QgYmFja2Ryb3AgPSBpbnN0YW5jZS5wcm9wcy5hbmltYXRlRmlsbFxuICAgICAgPyBjcmVhdGVCYWNrZHJvcEVsZW1lbnQoKVxuICAgICAgOiBudWxsO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG9uQ3JlYXRlKCk6IHZvaWQge1xuICAgICAgICBpZiAoYmFja2Ryb3ApIHtcbiAgICAgICAgICBib3guaW5zZXJ0QmVmb3JlKGJhY2tkcm9wLCBib3guZmlyc3RFbGVtZW50Q2hpbGQhKTtcbiAgICAgICAgICBib3guc2V0QXR0cmlidXRlKCdkYXRhLWFuaW1hdGVmaWxsJywgJycpO1xuICAgICAgICAgIGJveC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuXG4gICAgICAgICAgaW5zdGFuY2Uuc2V0UHJvcHMoe2Fycm93OiBmYWxzZSwgYW5pbWF0aW9uOiAnc2hpZnQtYXdheSd9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uTW91bnQoKTogdm9pZCB7XG4gICAgICAgIGlmIChiYWNrZHJvcCkge1xuICAgICAgICAgIGNvbnN0IHt0cmFuc2l0aW9uRHVyYXRpb259ID0gYm94LnN0eWxlO1xuICAgICAgICAgIGNvbnN0IGR1cmF0aW9uID0gTnVtYmVyKHRyYW5zaXRpb25EdXJhdGlvbi5yZXBsYWNlKCdtcycsICcnKSk7XG5cbiAgICAgICAgICAvLyBUaGUgY29udGVudCBzaG91bGQgZmFkZSBpbiBhZnRlciB0aGUgYmFja2Ryb3AgaGFzIG1vc3RseSBmaWxsZWQgdGhlXG4gICAgICAgICAgLy8gdG9vbHRpcCBlbGVtZW50LiBgY2xpcC1wYXRoYCBpcyB0aGUgb3RoZXIgYWx0ZXJuYXRpdmUgYnV0IGlzIG5vdFxuICAgICAgICAgIC8vIHdlbGwtc3VwcG9ydGVkIGFuZCBpcyBidWdneSBvbiBzb21lIGRldmljZXMuXG4gICAgICAgICAgY29udGVudC5zdHlsZS50cmFuc2l0aW9uRGVsYXkgPSBgJHtNYXRoLnJvdW5kKGR1cmF0aW9uIC8gMTApfW1zYDtcblxuICAgICAgICAgIGJhY2tkcm9wLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IHRyYW5zaXRpb25EdXJhdGlvbjtcbiAgICAgICAgICBzZXRWaXNpYmlsaXR5U3RhdGUoW2JhY2tkcm9wXSwgJ3Zpc2libGUnKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uU2hvdygpOiB2b2lkIHtcbiAgICAgICAgaWYgKGJhY2tkcm9wKSB7XG4gICAgICAgICAgYmFja2Ryb3Auc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzBtcyc7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbkhpZGUoKTogdm9pZCB7XG4gICAgICAgIGlmIChiYWNrZHJvcCkge1xuICAgICAgICAgIHNldFZpc2liaWxpdHlTdGF0ZShbYmFja2Ryb3BdLCAnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFuaW1hdGVGaWxsO1xuXG5mdW5jdGlvbiBjcmVhdGVCYWNrZHJvcEVsZW1lbnQoKTogSFRNTERpdkVsZW1lbnQge1xuICBjb25zdCBiYWNrZHJvcCA9IGRpdigpO1xuICBiYWNrZHJvcC5jbGFzc05hbWUgPSBCQUNLRFJPUF9DTEFTUztcbiAgc2V0VmlzaWJpbGl0eVN0YXRlKFtiYWNrZHJvcF0sICdoaWRkZW4nKTtcbiAgcmV0dXJuIGJhY2tkcm9wO1xufVxuIiwgImltcG9ydCB7Z2V0T3duZXJEb2N1bWVudCwgaXNNb3VzZUV2ZW50fSBmcm9tICcuLi9kb20tdXRpbHMnO1xuaW1wb3J0IHtGb2xsb3dDdXJzb3IsIEluc3RhbmNlfSBmcm9tICcuLi90eXBlcyc7XG5cbmxldCBtb3VzZUNvb3JkcyA9IHtjbGllbnRYOiAwLCBjbGllbnRZOiAwfTtcbmxldCBhY3RpdmVJbnN0YW5jZXM6IEFycmF5PHtpbnN0YW5jZTogSW5zdGFuY2U7IGRvYzogRG9jdW1lbnR9PiA9IFtdO1xuXG5mdW5jdGlvbiBzdG9yZU1vdXNlQ29vcmRzKHtjbGllbnRYLCBjbGllbnRZfTogTW91c2VFdmVudCk6IHZvaWQge1xuICBtb3VzZUNvb3JkcyA9IHtjbGllbnRYLCBjbGllbnRZfTtcbn1cblxuZnVuY3Rpb24gYWRkTW91c2VDb29yZHNMaXN0ZW5lcihkb2M6IERvY3VtZW50KTogdm9pZCB7XG4gIGRvYy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBzdG9yZU1vdXNlQ29vcmRzKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlTW91c2VDb29yZHNMaXN0ZW5lcihkb2M6IERvY3VtZW50KTogdm9pZCB7XG4gIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBzdG9yZU1vdXNlQ29vcmRzKTtcbn1cblxuY29uc3QgZm9sbG93Q3Vyc29yOiBGb2xsb3dDdXJzb3IgPSB7XG4gIG5hbWU6ICdmb2xsb3dDdXJzb3InLFxuICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICBmbihpbnN0YW5jZSkge1xuICAgIGNvbnN0IHJlZmVyZW5jZSA9IGluc3RhbmNlLnJlZmVyZW5jZTtcbiAgICBjb25zdCBkb2MgPSBnZXRPd25lckRvY3VtZW50KGluc3RhbmNlLnByb3BzLnRyaWdnZXJUYXJnZXQgfHwgcmVmZXJlbmNlKTtcblxuICAgIGxldCBpc0ludGVybmFsVXBkYXRlID0gZmFsc2U7XG4gICAgbGV0IHdhc0ZvY3VzRXZlbnQgPSBmYWxzZTtcbiAgICBsZXQgaXNVbm1vdW50ZWQgPSB0cnVlO1xuICAgIGxldCBwcmV2UHJvcHMgPSBpbnN0YW5jZS5wcm9wcztcblxuICAgIGZ1bmN0aW9uIGdldElzSW5pdGlhbEJlaGF2aW9yKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgaW5zdGFuY2UucHJvcHMuZm9sbG93Q3Vyc29yID09PSAnaW5pdGlhbCcgJiYgaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlXG4gICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZExpc3RlbmVyKCk6IHZvaWQge1xuICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcigpOiB2b2lkIHtcbiAgICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdW5zZXRHZXRSZWZlcmVuY2VDbGllbnRSZWN0KCk6IHZvaWQge1xuICAgICAgaXNJbnRlcm5hbFVwZGF0ZSA9IHRydWU7XG4gICAgICBpbnN0YW5jZS5zZXRQcm9wcyh7Z2V0UmVmZXJlbmNlQ2xpZW50UmVjdDogbnVsbH0pO1xuICAgICAgaXNJbnRlcm5hbFVwZGF0ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTW91c2VNb3ZlKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgICAvLyBJZiB0aGUgaW5zdGFuY2UgaXMgaW50ZXJhY3RpdmUsIGF2b2lkIHVwZGF0aW5nIHRoZSBwb3NpdGlvbiB1bmxlc3MgaXQnc1xuICAgICAgLy8gb3ZlciB0aGUgcmVmZXJlbmNlIGVsZW1lbnRcbiAgICAgIGNvbnN0IGlzQ3Vyc29yT3ZlclJlZmVyZW5jZSA9IGV2ZW50LnRhcmdldFxuICAgICAgICA/IHJlZmVyZW5jZS5jb250YWlucyhldmVudC50YXJnZXQgYXMgTm9kZSlcbiAgICAgICAgOiB0cnVlO1xuICAgICAgY29uc3Qge2ZvbGxvd0N1cnNvcn0gPSBpbnN0YW5jZS5wcm9wcztcbiAgICAgIGNvbnN0IHtjbGllbnRYLCBjbGllbnRZfSA9IGV2ZW50O1xuXG4gICAgICBjb25zdCByZWN0ID0gcmVmZXJlbmNlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgcmVsYXRpdmVYID0gY2xpZW50WCAtIHJlY3QubGVmdDtcbiAgICAgIGNvbnN0IHJlbGF0aXZlWSA9IGNsaWVudFkgLSByZWN0LnRvcDtcblxuICAgICAgaWYgKGlzQ3Vyc29yT3ZlclJlZmVyZW5jZSB8fCAhaW5zdGFuY2UucHJvcHMuaW50ZXJhY3RpdmUpIHtcbiAgICAgICAgaW5zdGFuY2Uuc2V0UHJvcHMoe1xuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgLSB1bm5lZWRlZCBET01SZWN0IHByb3BlcnRpZXNcbiAgICAgICAgICBnZXRSZWZlcmVuY2VDbGllbnRSZWN0KCkge1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IHJlZmVyZW5jZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICAgICAgbGV0IHggPSBjbGllbnRYO1xuICAgICAgICAgICAgbGV0IHkgPSBjbGllbnRZO1xuXG4gICAgICAgICAgICBpZiAoZm9sbG93Q3Vyc29yID09PSAnaW5pdGlhbCcpIHtcbiAgICAgICAgICAgICAgeCA9IHJlY3QubGVmdCArIHJlbGF0aXZlWDtcbiAgICAgICAgICAgICAgeSA9IHJlY3QudG9wICsgcmVsYXRpdmVZO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB0b3AgPSBmb2xsb3dDdXJzb3IgPT09ICdob3Jpem9udGFsJyA/IHJlY3QudG9wIDogeTtcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0ID0gZm9sbG93Q3Vyc29yID09PSAndmVydGljYWwnID8gcmVjdC5yaWdodCA6IHg7XG4gICAgICAgICAgICBjb25zdCBib3R0b20gPSBmb2xsb3dDdXJzb3IgPT09ICdob3Jpem9udGFsJyA/IHJlY3QuYm90dG9tIDogeTtcbiAgICAgICAgICAgIGNvbnN0IGxlZnQgPSBmb2xsb3dDdXJzb3IgPT09ICd2ZXJ0aWNhbCcgPyByZWN0LmxlZnQgOiB4O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICB3aWR0aDogcmlnaHQgLSBsZWZ0LFxuICAgICAgICAgICAgICBoZWlnaHQ6IGJvdHRvbSAtIHRvcCxcbiAgICAgICAgICAgICAgdG9wLFxuICAgICAgICAgICAgICByaWdodCxcbiAgICAgICAgICAgICAgYm90dG9tLFxuICAgICAgICAgICAgICBsZWZ0LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGUoKTogdm9pZCB7XG4gICAgICBpZiAoaW5zdGFuY2UucHJvcHMuZm9sbG93Q3Vyc29yKSB7XG4gICAgICAgIGFjdGl2ZUluc3RhbmNlcy5wdXNoKHtpbnN0YW5jZSwgZG9jfSk7XG4gICAgICAgIGFkZE1vdXNlQ29vcmRzTGlzdGVuZXIoZG9jKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgYWN0aXZlSW5zdGFuY2VzID0gYWN0aXZlSW5zdGFuY2VzLmZpbHRlcihcbiAgICAgICAgKGRhdGEpID0+IGRhdGEuaW5zdGFuY2UgIT09IGluc3RhbmNlXG4gICAgICApO1xuXG4gICAgICBpZiAoYWN0aXZlSW5zdGFuY2VzLmZpbHRlcigoZGF0YSkgPT4gZGF0YS5kb2MgPT09IGRvYykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJlbW92ZU1vdXNlQ29vcmRzTGlzdGVuZXIoZG9jKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgb25DcmVhdGU6IGNyZWF0ZSxcbiAgICAgIG9uRGVzdHJveTogZGVzdHJveSxcbiAgICAgIG9uQmVmb3JlVXBkYXRlKCk6IHZvaWQge1xuICAgICAgICBwcmV2UHJvcHMgPSBpbnN0YW5jZS5wcm9wcztcbiAgICAgIH0sXG4gICAgICBvbkFmdGVyVXBkYXRlKF8sIHtmb2xsb3dDdXJzb3J9KTogdm9pZCB7XG4gICAgICAgIGlmIChpc0ludGVybmFsVXBkYXRlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIGZvbGxvd0N1cnNvciAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgcHJldlByb3BzLmZvbGxvd0N1cnNvciAhPT0gZm9sbG93Q3Vyc29yXG4gICAgICAgICkge1xuICAgICAgICAgIGRlc3Ryb3koKTtcblxuICAgICAgICAgIGlmIChmb2xsb3dDdXJzb3IpIHtcbiAgICAgICAgICAgIGNyZWF0ZSgpO1xuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGluc3RhbmNlLnN0YXRlLmlzTW91bnRlZCAmJlxuICAgICAgICAgICAgICAhd2FzRm9jdXNFdmVudCAmJlxuICAgICAgICAgICAgICAhZ2V0SXNJbml0aWFsQmVoYXZpb3IoKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGFkZExpc3RlbmVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbW92ZUxpc3RlbmVyKCk7XG4gICAgICAgICAgICB1bnNldEdldFJlZmVyZW5jZUNsaWVudFJlY3QoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbk1vdW50KCk6IHZvaWQge1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMuZm9sbG93Q3Vyc29yICYmICF3YXNGb2N1c0V2ZW50KSB7XG4gICAgICAgICAgaWYgKGlzVW5tb3VudGVkKSB7XG4gICAgICAgICAgICBvbk1vdXNlTW92ZShtb3VzZUNvb3JkcyBhcyBNb3VzZUV2ZW50KTtcbiAgICAgICAgICAgIGlzVW5tb3VudGVkID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFnZXRJc0luaXRpYWxCZWhhdmlvcigpKSB7XG4gICAgICAgICAgICBhZGRMaXN0ZW5lcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uVHJpZ2dlcihfLCBldmVudCk6IHZvaWQge1xuICAgICAgICBpZiAoaXNNb3VzZUV2ZW50KGV2ZW50KSkge1xuICAgICAgICAgIG1vdXNlQ29vcmRzID0ge2NsaWVudFg6IGV2ZW50LmNsaWVudFgsIGNsaWVudFk6IGV2ZW50LmNsaWVudFl9O1xuICAgICAgICB9XG4gICAgICAgIHdhc0ZvY3VzRXZlbnQgPSBldmVudC50eXBlID09PSAnZm9jdXMnO1xuICAgICAgfSxcbiAgICAgIG9uSGlkZGVuKCk6IHZvaWQge1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMuZm9sbG93Q3Vyc29yKSB7XG4gICAgICAgICAgdW5zZXRHZXRSZWZlcmVuY2VDbGllbnRSZWN0KCk7XG4gICAgICAgICAgcmVtb3ZlTGlzdGVuZXIoKTtcbiAgICAgICAgICBpc1VubW91bnRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvbGxvd0N1cnNvcjtcbiIsICJpbXBvcnQge01vZGlmaWVyLCBQbGFjZW1lbnR9IGZyb20gJ0Bwb3BwZXJqcy9jb3JlJztcbmltcG9ydCB7aXNNb3VzZUV2ZW50fSBmcm9tICcuLi9kb20tdXRpbHMnO1xuaW1wb3J0IHtCYXNlUGxhY2VtZW50LCBJbmxpbmVQb3NpdGlvbmluZywgUHJvcHN9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7YXJyYXlGcm9tLCBnZXRCYXNlUGxhY2VtZW50fSBmcm9tICcuLi91dGlscyc7XG5cbmZ1bmN0aW9uIGdldFByb3BzKHByb3BzOiBQcm9wcywgbW9kaWZpZXI6IE1vZGlmaWVyPGFueSwgYW55Pik6IFBhcnRpYWw8UHJvcHM+IHtcbiAgcmV0dXJuIHtcbiAgICBwb3BwZXJPcHRpb25zOiB7XG4gICAgICAuLi5wcm9wcy5wb3BwZXJPcHRpb25zLFxuICAgICAgbW9kaWZpZXJzOiBbXG4gICAgICAgIC4uLihwcm9wcy5wb3BwZXJPcHRpb25zPy5tb2RpZmllcnMgfHwgW10pLmZpbHRlcihcbiAgICAgICAgICAoe25hbWV9KSA9PiBuYW1lICE9PSBtb2RpZmllci5uYW1lXG4gICAgICAgICksXG4gICAgICAgIG1vZGlmaWVyLFxuICAgICAgXSxcbiAgICB9LFxuICB9O1xufVxuXG5jb25zdCBpbmxpbmVQb3NpdGlvbmluZzogSW5saW5lUG9zaXRpb25pbmcgPSB7XG4gIG5hbWU6ICdpbmxpbmVQb3NpdGlvbmluZycsXG4gIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gIGZuKGluc3RhbmNlKSB7XG4gICAgY29uc3Qge3JlZmVyZW5jZX0gPSBpbnN0YW5jZTtcblxuICAgIGZ1bmN0aW9uIGlzRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAhIWluc3RhbmNlLnByb3BzLmlubGluZVBvc2l0aW9uaW5nO1xuICAgIH1cblxuICAgIGxldCBwbGFjZW1lbnQ6IFBsYWNlbWVudDtcbiAgICBsZXQgY3Vyc29yUmVjdEluZGV4ID0gLTE7XG4gICAgbGV0IGlzSW50ZXJuYWxVcGRhdGUgPSBmYWxzZTtcbiAgICBsZXQgdHJpZWRQbGFjZW1lbnRzOiBBcnJheTxzdHJpbmc+ID0gW107XG5cbiAgICBjb25zdCBtb2RpZmllcjogTW9kaWZpZXI8XG4gICAgICAndGlwcHlJbmxpbmVQb3NpdGlvbmluZycsXG4gICAgICBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICAgID4gPSB7XG4gICAgICBuYW1lOiAndGlwcHlJbmxpbmVQb3NpdGlvbmluZycsXG4gICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgcGhhc2U6ICdhZnRlcldyaXRlJyxcbiAgICAgIGZuKHtzdGF0ZX0pIHtcbiAgICAgICAgaWYgKGlzRW5hYmxlZCgpKSB7XG4gICAgICAgICAgaWYgKHRyaWVkUGxhY2VtZW50cy5pbmRleE9mKHN0YXRlLnBsYWNlbWVudCkgIT09IC0xKSB7XG4gICAgICAgICAgICB0cmllZFBsYWNlbWVudHMgPSBbXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBwbGFjZW1lbnQgIT09IHN0YXRlLnBsYWNlbWVudCAmJlxuICAgICAgICAgICAgdHJpZWRQbGFjZW1lbnRzLmluZGV4T2Yoc3RhdGUucGxhY2VtZW50KSA9PT0gLTFcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRyaWVkUGxhY2VtZW50cy5wdXNoKHN0YXRlLnBsYWNlbWVudCk7XG4gICAgICAgICAgICBpbnN0YW5jZS5zZXRQcm9wcyh7XG4gICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgLSB1bm5lZWRlZCBET01SZWN0IHByb3BlcnRpZXNcbiAgICAgICAgICAgICAgZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdDogKCkgPT5cbiAgICAgICAgICAgICAgICBnZXRSZWZlcmVuY2VDbGllbnRSZWN0KHN0YXRlLnBsYWNlbWVudCksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwbGFjZW1lbnQgPSBzdGF0ZS5wbGFjZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGdldFJlZmVyZW5jZUNsaWVudFJlY3QocGxhY2VtZW50OiBQbGFjZW1lbnQpOiBQYXJ0aWFsPERPTVJlY3Q+IHtcbiAgICAgIHJldHVybiBnZXRJbmxpbmVCb3VuZGluZ0NsaWVudFJlY3QoXG4gICAgICAgIGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSxcbiAgICAgICAgcmVmZXJlbmNlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICBhcnJheUZyb20ocmVmZXJlbmNlLmdldENsaWVudFJlY3RzKCkpLFxuICAgICAgICBjdXJzb3JSZWN0SW5kZXhcbiAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0SW50ZXJuYWxQcm9wcyhwYXJ0aWFsUHJvcHM6IFBhcnRpYWw8UHJvcHM+KTogdm9pZCB7XG4gICAgICBpc0ludGVybmFsVXBkYXRlID0gdHJ1ZTtcbiAgICAgIGluc3RhbmNlLnNldFByb3BzKHBhcnRpYWxQcm9wcyk7XG4gICAgICBpc0ludGVybmFsVXBkYXRlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkTW9kaWZpZXIoKTogdm9pZCB7XG4gICAgICBpZiAoIWlzSW50ZXJuYWxVcGRhdGUpIHtcbiAgICAgICAgc2V0SW50ZXJuYWxQcm9wcyhnZXRQcm9wcyhpbnN0YW5jZS5wcm9wcywgbW9kaWZpZXIpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgb25DcmVhdGU6IGFkZE1vZGlmaWVyLFxuICAgICAgb25BZnRlclVwZGF0ZTogYWRkTW9kaWZpZXIsXG4gICAgICBvblRyaWdnZXIoXywgZXZlbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKGlzTW91c2VFdmVudChldmVudCkpIHtcbiAgICAgICAgICBjb25zdCByZWN0cyA9IGFycmF5RnJvbShpbnN0YW5jZS5yZWZlcmVuY2UuZ2V0Q2xpZW50UmVjdHMoKSk7XG4gICAgICAgICAgY29uc3QgY3Vyc29yUmVjdCA9IHJlY3RzLmZpbmQoXG4gICAgICAgICAgICAocmVjdCkgPT5cbiAgICAgICAgICAgICAgcmVjdC5sZWZ0IC0gMiA8PSBldmVudC5jbGllbnRYICYmXG4gICAgICAgICAgICAgIHJlY3QucmlnaHQgKyAyID49IGV2ZW50LmNsaWVudFggJiZcbiAgICAgICAgICAgICAgcmVjdC50b3AgLSAyIDw9IGV2ZW50LmNsaWVudFkgJiZcbiAgICAgICAgICAgICAgcmVjdC5ib3R0b20gKyAyID49IGV2ZW50LmNsaWVudFlcbiAgICAgICAgICApO1xuICAgICAgICAgIGNvbnN0IGluZGV4ID0gcmVjdHMuaW5kZXhPZihjdXJzb3JSZWN0KTtcbiAgICAgICAgICBjdXJzb3JSZWN0SW5kZXggPSBpbmRleCA+IC0xID8gaW5kZXggOiBjdXJzb3JSZWN0SW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbkhpZGRlbigpOiB2b2lkIHtcbiAgICAgICAgY3Vyc29yUmVjdEluZGV4ID0gLTE7XG4gICAgICB9LFxuICAgIH07XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbmxpbmVQb3NpdGlvbmluZztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldElubGluZUJvdW5kaW5nQ2xpZW50UmVjdChcbiAgY3VycmVudEJhc2VQbGFjZW1lbnQ6IEJhc2VQbGFjZW1lbnQgfCBudWxsLFxuICBib3VuZGluZ1JlY3Q6IERPTVJlY3QsXG4gIGNsaWVudFJlY3RzOiBET01SZWN0W10sXG4gIGN1cnNvclJlY3RJbmRleDogbnVtYmVyXG4pOiB7XG4gIHRvcDogbnVtYmVyO1xuICBib3R0b206IG51bWJlcjtcbiAgbGVmdDogbnVtYmVyO1xuICByaWdodDogbnVtYmVyO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbn0ge1xuICAvLyBOb3QgYW4gaW5saW5lIGVsZW1lbnQsIG9yIHBsYWNlbWVudCBpcyBub3QgeWV0IGtub3duXG4gIGlmIChjbGllbnRSZWN0cy5sZW5ndGggPCAyIHx8IGN1cnJlbnRCYXNlUGxhY2VtZW50ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGJvdW5kaW5nUmVjdDtcbiAgfVxuXG4gIC8vIFRoZXJlIGFyZSB0d28gcmVjdHMgYW5kIHRoZXkgYXJlIGRpc2pvaW5lZFxuICBpZiAoXG4gICAgY2xpZW50UmVjdHMubGVuZ3RoID09PSAyICYmXG4gICAgY3Vyc29yUmVjdEluZGV4ID49IDAgJiZcbiAgICBjbGllbnRSZWN0c1swXS5sZWZ0ID4gY2xpZW50UmVjdHNbMV0ucmlnaHRcbiAgKSB7XG4gICAgcmV0dXJuIGNsaWVudFJlY3RzW2N1cnNvclJlY3RJbmRleF0gfHwgYm91bmRpbmdSZWN0O1xuICB9XG5cbiAgc3dpdGNoIChjdXJyZW50QmFzZVBsYWNlbWVudCkge1xuICAgIGNhc2UgJ3RvcCc6XG4gICAgY2FzZSAnYm90dG9tJzoge1xuICAgICAgY29uc3QgZmlyc3RSZWN0ID0gY2xpZW50UmVjdHNbMF07XG4gICAgICBjb25zdCBsYXN0UmVjdCA9IGNsaWVudFJlY3RzW2NsaWVudFJlY3RzLmxlbmd0aCAtIDFdO1xuICAgICAgY29uc3QgaXNUb3AgPSBjdXJyZW50QmFzZVBsYWNlbWVudCA9PT0gJ3RvcCc7XG5cbiAgICAgIGNvbnN0IHRvcCA9IGZpcnN0UmVjdC50b3A7XG4gICAgICBjb25zdCBib3R0b20gPSBsYXN0UmVjdC5ib3R0b207XG4gICAgICBjb25zdCBsZWZ0ID0gaXNUb3AgPyBmaXJzdFJlY3QubGVmdCA6IGxhc3RSZWN0LmxlZnQ7XG4gICAgICBjb25zdCByaWdodCA9IGlzVG9wID8gZmlyc3RSZWN0LnJpZ2h0IDogbGFzdFJlY3QucmlnaHQ7XG4gICAgICBjb25zdCB3aWR0aCA9IHJpZ2h0IC0gbGVmdDtcbiAgICAgIGNvbnN0IGhlaWdodCA9IGJvdHRvbSAtIHRvcDtcblxuICAgICAgcmV0dXJuIHt0b3AsIGJvdHRvbSwgbGVmdCwgcmlnaHQsIHdpZHRoLCBoZWlnaHR9O1xuICAgIH1cbiAgICBjYXNlICdsZWZ0JzpcbiAgICBjYXNlICdyaWdodCc6IHtcbiAgICAgIGNvbnN0IG1pbkxlZnQgPSBNYXRoLm1pbiguLi5jbGllbnRSZWN0cy5tYXAoKHJlY3RzKSA9PiByZWN0cy5sZWZ0KSk7XG4gICAgICBjb25zdCBtYXhSaWdodCA9IE1hdGgubWF4KC4uLmNsaWVudFJlY3RzLm1hcCgocmVjdHMpID0+IHJlY3RzLnJpZ2h0KSk7XG4gICAgICBjb25zdCBtZWFzdXJlUmVjdHMgPSBjbGllbnRSZWN0cy5maWx0ZXIoKHJlY3QpID0+XG4gICAgICAgIGN1cnJlbnRCYXNlUGxhY2VtZW50ID09PSAnbGVmdCdcbiAgICAgICAgICA/IHJlY3QubGVmdCA9PT0gbWluTGVmdFxuICAgICAgICAgIDogcmVjdC5yaWdodCA9PT0gbWF4UmlnaHRcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IHRvcCA9IG1lYXN1cmVSZWN0c1swXS50b3A7XG4gICAgICBjb25zdCBib3R0b20gPSBtZWFzdXJlUmVjdHNbbWVhc3VyZVJlY3RzLmxlbmd0aCAtIDFdLmJvdHRvbTtcbiAgICAgIGNvbnN0IGxlZnQgPSBtaW5MZWZ0O1xuICAgICAgY29uc3QgcmlnaHQgPSBtYXhSaWdodDtcbiAgICAgIGNvbnN0IHdpZHRoID0gcmlnaHQgLSBsZWZ0O1xuICAgICAgY29uc3QgaGVpZ2h0ID0gYm90dG9tIC0gdG9wO1xuXG4gICAgICByZXR1cm4ge3RvcCwgYm90dG9tLCBsZWZ0LCByaWdodCwgd2lkdGgsIGhlaWdodH07XG4gICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiBib3VuZGluZ1JlY3Q7XG4gICAgfVxuICB9XG59XG4iLCAiaW1wb3J0IHtWaXJ0dWFsRWxlbWVudH0gZnJvbSAnQHBvcHBlcmpzL2NvcmUnO1xuaW1wb3J0IHtSZWZlcmVuY2VFbGVtZW50LCBTdGlja3l9IGZyb20gJy4uL3R5cGVzJztcblxuY29uc3Qgc3RpY2t5OiBTdGlja3kgPSB7XG4gIG5hbWU6ICdzdGlja3knLFxuICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICBmbihpbnN0YW5jZSkge1xuICAgIGNvbnN0IHtyZWZlcmVuY2UsIHBvcHBlcn0gPSBpbnN0YW5jZTtcblxuICAgIGZ1bmN0aW9uIGdldFJlZmVyZW5jZSgpOiBSZWZlcmVuY2VFbGVtZW50IHwgVmlydHVhbEVsZW1lbnQge1xuICAgICAgcmV0dXJuIGluc3RhbmNlLnBvcHBlckluc3RhbmNlXG4gICAgICAgID8gaW5zdGFuY2UucG9wcGVySW5zdGFuY2Uuc3RhdGUuZWxlbWVudHMucmVmZXJlbmNlXG4gICAgICAgIDogcmVmZXJlbmNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3VsZENoZWNrKHZhbHVlOiAncmVmZXJlbmNlJyB8ICdwb3BwZXInKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gaW5zdGFuY2UucHJvcHMuc3RpY2t5ID09PSB0cnVlIHx8IGluc3RhbmNlLnByb3BzLnN0aWNreSA9PT0gdmFsdWU7XG4gICAgfVxuXG4gICAgbGV0IHByZXZSZWZSZWN0OiBDbGllbnRSZWN0IHwgbnVsbCA9IG51bGw7XG4gICAgbGV0IHByZXZQb3BSZWN0OiBDbGllbnRSZWN0IHwgbnVsbCA9IG51bGw7XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVQb3NpdGlvbigpOiB2b2lkIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRSZWZSZWN0ID0gc2hvdWxkQ2hlY2soJ3JlZmVyZW5jZScpXG4gICAgICAgID8gZ2V0UmVmZXJlbmNlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgOiBudWxsO1xuICAgICAgY29uc3QgY3VycmVudFBvcFJlY3QgPSBzaG91bGRDaGVjaygncG9wcGVyJylcbiAgICAgICAgPyBwb3BwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgOiBudWxsO1xuXG4gICAgICBpZiAoXG4gICAgICAgIChjdXJyZW50UmVmUmVjdCAmJiBhcmVSZWN0c0RpZmZlcmVudChwcmV2UmVmUmVjdCwgY3VycmVudFJlZlJlY3QpKSB8fFxuICAgICAgICAoY3VycmVudFBvcFJlY3QgJiYgYXJlUmVjdHNEaWZmZXJlbnQocHJldlBvcFJlY3QsIGN1cnJlbnRQb3BSZWN0KSlcbiAgICAgICkge1xuICAgICAgICBpZiAoaW5zdGFuY2UucG9wcGVySW5zdGFuY2UpIHtcbiAgICAgICAgICBpbnN0YW5jZS5wb3BwZXJJbnN0YW5jZS51cGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwcmV2UmVmUmVjdCA9IGN1cnJlbnRSZWZSZWN0O1xuICAgICAgcHJldlBvcFJlY3QgPSBjdXJyZW50UG9wUmVjdDtcblxuICAgICAgaWYgKGluc3RhbmNlLnN0YXRlLmlzTW91bnRlZCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlUG9zaXRpb24pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBvbk1vdW50KCk6IHZvaWQge1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMuc3RpY2t5KSB7XG4gICAgICAgICAgdXBkYXRlUG9zaXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9O1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgc3RpY2t5O1xuXG5mdW5jdGlvbiBhcmVSZWN0c0RpZmZlcmVudChcbiAgcmVjdEE6IENsaWVudFJlY3QgfCBudWxsLFxuICByZWN0QjogQ2xpZW50UmVjdCB8IG51bGxcbik6IGJvb2xlYW4ge1xuICBpZiAocmVjdEEgJiYgcmVjdEIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgcmVjdEEudG9wICE9PSByZWN0Qi50b3AgfHxcbiAgICAgIHJlY3RBLnJpZ2h0ICE9PSByZWN0Qi5yaWdodCB8fFxuICAgICAgcmVjdEEuYm90dG9tICE9PSByZWN0Qi5ib3R0b20gfHxcbiAgICAgIHJlY3RBLmxlZnQgIT09IHJlY3RCLmxlZnRcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG4iLCAiaW1wb3J0IHRpcHB5IGZyb20gJy4uL3NyYyc7XG5pbXBvcnQge3JlbmRlcn0gZnJvbSAnLi4vc3JjL3RlbXBsYXRlJztcblxudGlwcHkuc2V0RGVmYXVsdFByb3BzKHtyZW5kZXJ9KTtcblxuZXhwb3J0IHtkZWZhdWx0LCBoaWRlQWxsfSBmcm9tICcuLi9zcmMnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGNyZWF0ZVNpbmdsZXRvbn0gZnJvbSAnLi4vc3JjL2FkZG9ucy9jcmVhdGVTaW5nbGV0b24nO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGRlbGVnYXRlfSBmcm9tICcuLi9zcmMvYWRkb25zL2RlbGVnYXRlJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBhbmltYXRlRmlsbH0gZnJvbSAnLi4vc3JjL3BsdWdpbnMvYW5pbWF0ZUZpbGwnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGZvbGxvd0N1cnNvcn0gZnJvbSAnLi4vc3JjL3BsdWdpbnMvZm9sbG93Q3Vyc29yJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpbmxpbmVQb3NpdGlvbmluZ30gZnJvbSAnLi4vc3JjL3BsdWdpbnMvaW5saW5lUG9zaXRpb25pbmcnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHN0aWNreX0gZnJvbSAnLi4vc3JjL3BsdWdpbnMvc3RpY2t5JztcbmV4cG9ydCB7Uk9VTkRfQVJST1cgYXMgcm91bmRBcnJvd30gZnJvbSAnLi4vc3JjL2NvbnN0YW50cyc7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGdCQUFBLENBQUE7QUFBQUMsU0FBQUQsZUFBQTtFQUFBRSxPQUFBQSxNQUFBQztBQUFBLENBQUE7QUFBQUMsT0FBQUMsVUFBQUMsYUFBQU4sYUFBQTtBQ0FPLElBQUlPLE1BQU07QUFDVixJQUFJQyxTQUFTO0FBQ2IsSUFBSUMsUUFBUTtBQUNaLElBQUlDLE9BQU87QUFDWCxJQUFJQyxPQUFPO0FBQ1gsSUFBSUMsaUJBQWlCLENBQUNMLEtBQUtDLFFBQVFDLE9BQU9DLElBQUk7QUFDOUMsSUFBSUcsUUFBUTtBQUNaLElBQUlDLE1BQU07QUFDVixJQUFJQyxrQkFBa0I7QUFDdEIsSUFBSUMsV0FBVztBQUNmLElBQUlDLFNBQVM7QUFDYixJQUFJQyxZQUFZO0FBQ2hCLElBQUlDLHNCQUFtQ1AsK0JBQWVRLE9BQU8sU0FBVUMsS0FBS0MsV0FBVztBQUM1RixTQUFPRCxJQUFJRSxPQUFPLENBQUNELFlBQVksTUFBTVQsT0FBT1MsWUFBWSxNQUFNUixHQUFHLENBQUM7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QUFhbVksWUFBWW5ZLFlBQVcyVixXQUFaO0FBRXpDLFFBQUkxWixVQUFVO0FBQ1ozTixVQUFJd1YsS0FBSzdILFFBQVQ7SUFDRDtBQUVELFdBQU8zTjtFQUNSLEdBQ0QsQ0FBQSxDQVZnQjtBQWFsQixTQUFPNGdCLFdBQVV3USxPQUFELElBQVlLLFVBQVUsQ0FBRCxJQUFNQTtBQUM1QztBQUVENXlCLE1BQU1tbUIsZUFBZUE7QUFDckJubUIsTUFBTW1vQixrQkFBa0JBO0FBQ3hCbm9CLE1BQU1xa0IsZUFBZUE7QUM5Q3JCLElBQU13TyxzQkFBcUV4dkIsT0FBQVEsT0FBQSxDQUFBLEdBQ3RFa0IscUJBRHNFO0VBRXpFYixRQUZ5RSxTQUFBNHVCLFFBQUEzdkIsTUFFekQ7QUFBQSxRQUFSQyxRQUFRRCxLQUFSQztBQUNOLFFBQU1nQixnQkFBZ0I7TUFDcEJyRCxRQUFRO1FBQ05zRCxVQUFVakIsTUFBTWtCLFFBQVFDO1FBQ3hCL0QsTUFBTTtRQUNOSCxLQUFLO1FBQ0xtRSxRQUFRO01BSkY7TUFNUkMsT0FBTztRQUNMSixVQUFVO01BREw7TUFHUHJELFdBQVcsQ0FBQTtJQVZTO0FBYXRCcUMsV0FBT1EsT0FBT1QsTUFBTUcsU0FBU3hDLE9BQU8yQyxPQUFPVSxjQUFjckQsTUFBekQ7QUFDQXFDLFVBQU1PLFNBQVNTO0FBRWYsUUFBSWhCLE1BQU1HLFNBQVNrQixPQUFPO0FBQ3hCcEIsYUFBT1EsT0FBT1QsTUFBTUcsU0FBU2tCLE1BQU1mLE9BQU9VLGNBQWNLLEtBQXhEO0lBQ0Q7RUFJRjtBQXpCd0UsQ0FBQTtBTWhCM0V6RSxNQUFNbW9CLGdCQUFnQjtFQUFDTjtBQUFELENBQXRCOzsiLAogICJuYW1lcyI6IFsiVGlwcHlfZXhwb3J0cyIsICJfX2V4cG9ydCIsICJ0aXBweSIsICJ0aXBweV9lc21fZGVmYXVsdCIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJfX3RvQ29tbW9uSlMiLCAidG9wIiwgImJvdHRvbSIsICJyaWdodCIsICJsZWZ0IiwgImF1dG8iLCAiYmFzZVBsYWNlbWVudHMiLCAic3RhcnQiLCAiZW5kIiwgImNsaXBwaW5nUGFyZW50cyIsICJ2aWV3cG9ydCIsICJwb3BwZXIiLCAicmVmZXJlbmNlIiwgInZhcmlhdGlvblBsYWNlbWVudHMiLCAicmVkdWNlIiwgImFjYyIsICJwbGFjZW1lbnQiLCAiY29uY2F0IiwgInBsYWNlbWVudHMiLCAiYmVmb3JlUmVhZCIsICJyZWFkIiwgImFmdGVyUmVhZCIsICJiZWZvcmVNYWluIiwgIm1haW4iLCAiYWZ0ZXJNYWluIiwgImJlZm9yZVdyaXRlIiwgIndyaXRlIiwgImFmdGVyV3JpdGUiLCAibW9kaWZpZXJQaGFzZXMiLCAiZ2V0Tm9kZU5hbWUiLCAiZWxlbWVudCIsICJub2RlTmFtZSIsICJ0b0xvd2VyQ2FzZSIsICJnZXRXaW5kb3ciLCAibm9kZSIsICJ3aW5kb3ciLCAidG9TdHJpbmciLCAib3duZXJEb2N1bWVudCIsICJkZWZhdWx0VmlldyIsICJpc0VsZW1lbnQiLCAiT3duRWxlbWVudCIsICJFbGVtZW50IiwgImlzSFRNTEVsZW1lbnQiLCAiSFRNTEVsZW1lbnQiLCAiaXNTaGFkb3dSb290IiwgIlNoYWRvd1Jvb3QiLCAiYXBwbHlTdHlsZXMiLCAiX3JlZiIsICJzdGF0ZSIsICJPYmplY3QiLCAia2V5cyIsICJlbGVtZW50cyIsICJmb3JFYWNoIiwgIm5hbWUiLCAic3R5bGUiLCAic3R5bGVzIiwgImF0dHJpYnV0ZXMiLCAiYXNzaWduIiwgIm5hbWUyIiwgInZhbHVlIiwgInJlbW92ZUF0dHJpYnV0ZSIsICJzZXRBdHRyaWJ1dGUiLCAiZWZmZWN0IiwgIl9yZWYyIiwgImluaXRpYWxTdHlsZXMiLCAicG9zaXRpb24iLCAib3B0aW9ucyIsICJzdHJhdGVneSIsICJtYXJnaW4iLCAiYXJyb3ciLCAic3R5bGVQcm9wZXJ0aWVzIiwgImhhc093blByb3BlcnR5IiwgInN0eWxlMiIsICJwcm9wZXJ0eSIsICJhdHRyaWJ1dGUiLCAiYXBwbHlTdHlsZXNfZGVmYXVsdCIsICJlbmFibGVkIiwgInBoYXNlIiwgImZuIiwgInJlcXVpcmVzIiwgImdldEJhc2VQbGFjZW1lbnQiLCAic3BsaXQiLCAibWF4IiwgIk1hdGgiLCAibWluIiwgInJvdW5kIiwgImdldFVBU3RyaW5nIiwgInVhRGF0YSIsICJuYXZpZ2F0b3IiLCAidXNlckFnZW50RGF0YSIsICJicmFuZHMiLCAiQXJyYXkiLCAiaXNBcnJheSIsICJtYXAiLCAiaXRlbSIsICJicmFuZCIsICJ2ZXJzaW9uIiwgImpvaW4iLCAidXNlckFnZW50IiwgImlzTGF5b3V0Vmlld3BvcnQiLCAidGVzdCIsICJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCAiaW5jbHVkZVNjYWxlIiwgImlzRml4ZWRTdHJhdGVneSIsICJjbGllbnRSZWN0IiwgInNjYWxlWCIsICJzY2FsZVkiLCAib2Zmc2V0V2lkdGgiLCAid2lkdGgiLCAib2Zmc2V0SGVpZ2h0IiwgImhlaWdodCIsICJ2aXN1YWxWaWV3cG9ydCIsICJhZGRWaXN1YWxPZmZzZXRzIiwgIngiLCAib2Zmc2V0TGVmdCIsICJ5IiwgIm9mZnNldFRvcCIsICJnZXRMYXlvdXRSZWN0IiwgImFicyIsICJjb250YWlucyIsICJwYXJlbnQiLCAiY2hpbGQiLCAicm9vdE5vZGUiLCAiZ2V0Um9vdE5vZGUiLCAibmV4dCIsICJpc1NhbWVOb2RlIiwgInBhcmVudE5vZGUiLCAiaG9zdCIsICJnZXRDb21wdXRlZFN0eWxlIiwgImlzVGFibGVFbGVtZW50IiwgImluZGV4T2YiLCAiZ2V0RG9jdW1lbnRFbGVtZW50IiwgImRvY3VtZW50IiwgImRvY3VtZW50RWxlbWVudCIsICJnZXRQYXJlbnROb2RlIiwgImFzc2lnbmVkU2xvdCIsICJnZXRUcnVlT2Zmc2V0UGFyZW50IiwgIm9mZnNldFBhcmVudCIsICJnZXRDb250YWluaW5nQmxvY2siLCAiaXNGaXJlZm94IiwgImlzSUUiLCAiZWxlbWVudENzcyIsICJjdXJyZW50Tm9kZSIsICJjc3MiLCAidHJhbnNmb3JtIiwgInBlcnNwZWN0aXZlIiwgImNvbnRhaW4iLCAid2lsbENoYW5nZSIsICJmaWx0ZXIiLCAiZ2V0T2Zmc2V0UGFyZW50IiwgIndpbmRvdzIiLCAiZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50IiwgIndpdGhpbiIsICJtaW4yIiwgIm1heDIiLCAid2l0aGluTWF4Q2xhbXAiLCAidiIsICJnZXRGcmVzaFNpZGVPYmplY3QiLCAibWVyZ2VQYWRkaW5nT2JqZWN0IiwgInBhZGRpbmdPYmplY3QiLCAiZXhwYW5kVG9IYXNoTWFwIiwgImhhc2hNYXAiLCAia2V5IiwgInRvUGFkZGluZ09iamVjdCIsICJ0b1BhZGRpbmdPYmplY3QyIiwgInBhZGRpbmciLCAicmVjdHMiLCAiX3N0YXRlJG1vZGlmaWVyc0RhdGEkIiwgImFycm93RWxlbWVudCIsICJwb3BwZXJPZmZzZXRzMiIsICJtb2RpZmllcnNEYXRhIiwgInBvcHBlck9mZnNldHMiLCAiYmFzZVBsYWNlbWVudCIsICJheGlzIiwgImlzVmVydGljYWwiLCAibGVuIiwgImFycm93UmVjdCIsICJtaW5Qcm9wIiwgIm1heFByb3AiLCAiZW5kRGlmZiIsICJzdGFydERpZmYiLCAiYXJyb3dPZmZzZXRQYXJlbnQiLCAiY2xpZW50U2l6ZSIsICJjbGllbnRIZWlnaHQiLCAiY2xpZW50V2lkdGgiLCAiY2VudGVyVG9SZWZlcmVuY2UiLCAiY2VudGVyIiwgIm9mZnNldDIiLCAiYXhpc1Byb3AiLCAiY2VudGVyT2Zmc2V0IiwgImVmZmVjdDIiLCAiX29wdGlvbnMkZWxlbWVudCIsICJxdWVyeVNlbGVjdG9yIiwgImFycm93X2RlZmF1bHQiLCAicmVxdWlyZXNJZkV4aXN0cyIsICJnZXRWYXJpYXRpb24iLCAidW5zZXRTaWRlcyIsICJyb3VuZE9mZnNldHNCeURQUiIsICJ3aW4iLCAiZHByIiwgImRldmljZVBpeGVsUmF0aW8iLCAibWFwVG9TdHlsZXMiLCAiX09iamVjdCRhc3NpZ24yIiwgInBvcHBlcjIiLCAicG9wcGVyUmVjdCIsICJ2YXJpYXRpb24iLCAib2Zmc2V0cyIsICJncHVBY2NlbGVyYXRpb24iLCAiYWRhcHRpdmUiLCAicm91bmRPZmZzZXRzIiwgImlzRml4ZWQiLCAiX29mZnNldHMkeCIsICJfb2Zmc2V0cyR5IiwgIl9yZWYzIiwgImhhc1giLCAiaGFzWSIsICJzaWRlWCIsICJzaWRlWSIsICJoZWlnaHRQcm9wIiwgIndpZHRoUHJvcCIsICJvZmZzZXRZIiwgIm9mZnNldFgiLCAiY29tbW9uU3R5bGVzIiwgIl9yZWY0IiwgIl9PYmplY3QkYXNzaWduIiwgImNvbXB1dGVTdHlsZXMiLCAiX3JlZjUiLCAiX29wdGlvbnMkZ3B1QWNjZWxlcmF0IiwgIl9vcHRpb25zJGFkYXB0aXZlIiwgIl9vcHRpb25zJHJvdW5kT2Zmc2V0cyIsICJjb21wdXRlU3R5bGVzX2RlZmF1bHQiLCAiZGF0YSIsICJwYXNzaXZlIiwgImVmZmVjdDMiLCAiaW5zdGFuY2UiLCAiX29wdGlvbnMkc2Nyb2xsIiwgInNjcm9sbCIsICJfb3B0aW9ucyRyZXNpemUiLCAicmVzaXplIiwgInNjcm9sbFBhcmVudHMiLCAic2Nyb2xsUGFyZW50IiwgImFkZEV2ZW50TGlzdGVuZXIiLCAidXBkYXRlIiwgInJlbW92ZUV2ZW50TGlzdGVuZXIiLCAiZXZlbnRMaXN0ZW5lcnNfZGVmYXVsdCIsICJoYXNoIiwgImdldE9wcG9zaXRlUGxhY2VtZW50IiwgInJlcGxhY2UiLCAibWF0Y2hlZCIsICJoYXNoMiIsICJnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudCIsICJnZXRXaW5kb3dTY3JvbGwiLCAic2Nyb2xsTGVmdCIsICJwYWdlWE9mZnNldCIsICJzY3JvbGxUb3AiLCAicGFnZVlPZmZzZXQiLCAiZ2V0V2luZG93U2Nyb2xsQmFyWCIsICJnZXRWaWV3cG9ydFJlY3QiLCAiaHRtbCIsICJsYXlvdXRWaWV3cG9ydCIsICJnZXREb2N1bWVudFJlY3QiLCAiX2VsZW1lbnQkb3duZXJEb2N1bWVuIiwgIndpblNjcm9sbCIsICJib2R5IiwgInNjcm9sbFdpZHRoIiwgInNjcm9sbEhlaWdodCIsICJkaXJlY3Rpb24iLCAiaXNTY3JvbGxQYXJlbnQiLCAiX2dldENvbXB1dGVkU3R5bGUiLCAib3ZlcmZsb3ciLCAib3ZlcmZsb3dYIiwgIm92ZXJmbG93WSIsICJnZXRTY3JvbGxQYXJlbnQiLCAibGlzdFNjcm9sbFBhcmVudHMiLCAibGlzdCIsICJpc0JvZHkiLCAidGFyZ2V0IiwgInVwZGF0ZWRMaXN0IiwgInJlY3RUb0NsaWVudFJlY3QiLCAicmVjdCIsICJnZXRJbm5lckJvdW5kaW5nQ2xpZW50UmVjdCIsICJjbGllbnRUb3AiLCAiY2xpZW50TGVmdCIsICJnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZSIsICJjbGlwcGluZ1BhcmVudCIsICJnZXRDbGlwcGluZ1BhcmVudHMiLCAiY2xpcHBpbmdQYXJlbnRzMiIsICJjYW5Fc2NhcGVDbGlwcGluZyIsICJjbGlwcGVyRWxlbWVudCIsICJnZXRDbGlwcGluZ1JlY3QiLCAiYm91bmRhcnkiLCAicm9vdEJvdW5kYXJ5IiwgIm1haW5DbGlwcGluZ1BhcmVudHMiLCAiZmlyc3RDbGlwcGluZ1BhcmVudCIsICJjbGlwcGluZ1JlY3QiLCAiYWNjUmVjdCIsICJjb21wdXRlT2Zmc2V0cyIsICJyZWZlcmVuY2UyIiwgImNvbW1vblgiLCAiY29tbW9uWSIsICJtYWluQXhpcyIsICJkZXRlY3RPdmVyZmxvdyIsICJfb3B0aW9ucyIsICJfb3B0aW9ucyRwbGFjZW1lbnQiLCAiX29wdGlvbnMkc3RyYXRlZ3kiLCAiX29wdGlvbnMkYm91bmRhcnkiLCAiX29wdGlvbnMkcm9vdEJvdW5kYXJ5IiwgIl9vcHRpb25zJGVsZW1lbnRDb250ZSIsICJlbGVtZW50Q29udGV4dCIsICJfb3B0aW9ucyRhbHRCb3VuZGFyeSIsICJhbHRCb3VuZGFyeSIsICJfb3B0aW9ucyRwYWRkaW5nIiwgImFsdENvbnRleHQiLCAiY2xpcHBpbmdDbGllbnRSZWN0IiwgImNvbnRleHRFbGVtZW50IiwgInJlZmVyZW5jZUNsaWVudFJlY3QiLCAicG9wcGVyQ2xpZW50UmVjdCIsICJlbGVtZW50Q2xpZW50UmVjdCIsICJvdmVyZmxvd09mZnNldHMiLCAib2Zmc2V0RGF0YSIsICJvZmZzZXQiLCAibXVsdGlwbHkiLCAiY29tcHV0ZUF1dG9QbGFjZW1lbnQiLCAiZmxpcFZhcmlhdGlvbnMiLCAiX29wdGlvbnMkYWxsb3dlZEF1dG9QIiwgImFsbG93ZWRBdXRvUGxhY2VtZW50cyIsICJwbGFjZW1lbnRzMiIsICJwbGFjZW1lbnQyIiwgImFsbG93ZWRQbGFjZW1lbnRzIiwgImxlbmd0aCIsICJvdmVyZmxvd3MiLCAic29ydCIsICJhIiwgImIiLCAiZ2V0RXhwYW5kZWRGYWxsYmFja1BsYWNlbWVudHMiLCAib3Bwb3NpdGVQbGFjZW1lbnQiLCAiZmxpcCIsICJfc2tpcCIsICJfb3B0aW9ucyRtYWluQXhpcyIsICJjaGVja01haW5BeGlzIiwgIl9vcHRpb25zJGFsdEF4aXMiLCAiYWx0QXhpcyIsICJjaGVja0FsdEF4aXMiLCAic3BlY2lmaWVkRmFsbGJhY2tQbGFjZW1lbnRzIiwgImZhbGxiYWNrUGxhY2VtZW50cyIsICJfb3B0aW9ucyRmbGlwVmFyaWF0aW8iLCAicHJlZmVycmVkUGxhY2VtZW50IiwgImlzQmFzZVBsYWNlbWVudCIsICJyZWZlcmVuY2VSZWN0IiwgImNoZWNrc01hcCIsICJNYXAiLCAibWFrZUZhbGxiYWNrQ2hlY2tzIiwgImZpcnN0Rml0dGluZ1BsYWNlbWVudCIsICJpIiwgIl9iYXNlUGxhY2VtZW50IiwgImlzU3RhcnRWYXJpYXRpb24iLCAibWFpblZhcmlhdGlvblNpZGUiLCAiYWx0VmFyaWF0aW9uU2lkZSIsICJjaGVja3MiLCAicHVzaCIsICJldmVyeSIsICJjaGVjayIsICJzZXQiLCAibnVtYmVyT2ZDaGVja3MiLCAiX2xvb3AiLCAiX2xvb3AyIiwgIl9pMiIsICJmaXR0aW5nUGxhY2VtZW50IiwgImZpbmQiLCAiY2hlY2tzMiIsICJnZXQiLCAic2xpY2UiLCAiX2kiLCAiX3JldCIsICJyZXNldCIsICJmbGlwX2RlZmF1bHQiLCAiZ2V0U2lkZU9mZnNldHMiLCAicHJldmVudGVkT2Zmc2V0cyIsICJpc0FueVNpZGVGdWxseUNsaXBwZWQiLCAic29tZSIsICJzaWRlIiwgImhpZGUiLCAicHJldmVudE92ZXJmbG93IiwgInJlZmVyZW5jZU92ZXJmbG93IiwgInBvcHBlckFsdE92ZXJmbG93IiwgInJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyIsICJwb3BwZXJFc2NhcGVPZmZzZXRzIiwgImlzUmVmZXJlbmNlSGlkZGVuIiwgImhhc1BvcHBlckVzY2FwZWQiLCAiaGlkZV9kZWZhdWx0IiwgImRpc3RhbmNlQW5kU2tpZGRpbmdUb1hZIiwgImludmVydERpc3RhbmNlIiwgInNraWRkaW5nIiwgImRpc3RhbmNlIiwgIl9vcHRpb25zJG9mZnNldCIsICJfZGF0YSRzdGF0ZSRwbGFjZW1lbnQiLCAib2Zmc2V0X2RlZmF1bHQiLCAicG9wcGVyT2Zmc2V0c19kZWZhdWx0IiwgImdldEFsdEF4aXMiLCAiX29wdGlvbnMkdGV0aGVyIiwgInRldGhlciIsICJfb3B0aW9ucyR0ZXRoZXJPZmZzZXQiLCAidGV0aGVyT2Zmc2V0IiwgInRldGhlck9mZnNldFZhbHVlIiwgIm5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZSIsICJvZmZzZXRNb2RpZmllclN0YXRlIiwgIl9vZmZzZXRNb2RpZmllclN0YXRlJCIsICJtYWluU2lkZSIsICJhbHRTaWRlIiwgImFkZGl0aXZlIiwgIm1pbkxlbiIsICJtYXhMZW4iLCAiYXJyb3dQYWRkaW5nT2JqZWN0IiwgImFycm93UGFkZGluZ01pbiIsICJhcnJvd1BhZGRpbmdNYXgiLCAiYXJyb3dMZW4iLCAibWluT2Zmc2V0IiwgIm1heE9mZnNldCIsICJjbGllbnRPZmZzZXQiLCAib2Zmc2V0TW9kaWZpZXJWYWx1ZSIsICJ0ZXRoZXJNaW4iLCAidGV0aGVyTWF4IiwgInByZXZlbnRlZE9mZnNldCIsICJfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQyIiwgIl9tYWluU2lkZSIsICJfYWx0U2lkZSIsICJfb2Zmc2V0IiwgIl9sZW4iLCAiX21pbiIsICJfbWF4IiwgImlzT3JpZ2luU2lkZSIsICJfb2Zmc2V0TW9kaWZpZXJWYWx1ZSIsICJfdGV0aGVyTWluIiwgIl90ZXRoZXJNYXgiLCAiX3ByZXZlbnRlZE9mZnNldCIsICJwcmV2ZW50T3ZlcmZsb3dfZGVmYXVsdCIsICJnZXRIVE1MRWxlbWVudFNjcm9sbCIsICJnZXROb2RlU2Nyb2xsIiwgImlzRWxlbWVudFNjYWxlZCIsICJnZXRDb21wb3NpdGVSZWN0IiwgImVsZW1lbnRPclZpcnR1YWxFbGVtZW50IiwgImlzT2Zmc2V0UGFyZW50QW5FbGVtZW50IiwgIm9mZnNldFBhcmVudElzU2NhbGVkIiwgIm9yZGVyIiwgIm1vZGlmaWVycyIsICJ2aXNpdGVkIiwgIlNldCIsICJyZXN1bHQiLCAibW9kaWZpZXIiLCAiYWRkIiwgImRlcCIsICJoYXMiLCAiZGVwTW9kaWZpZXIiLCAib3JkZXJNb2RpZmllcnMiLCAib3JkZXJlZE1vZGlmaWVycyIsICJkZWJvdW5jZSIsICJmbjIiLCAicGVuZGluZyIsICJQcm9taXNlIiwgInJlc29sdmUiLCAidGhlbiIsICJtZXJnZUJ5TmFtZSIsICJtZXJnZWQiLCAibWVyZ2VkMiIsICJjdXJyZW50IiwgImV4aXN0aW5nIiwgIkRFRkFVTFRfT1BUSU9OUyIsICJhcmVWYWxpZEVsZW1lbnRzIiwgImFyZ3VtZW50cyIsICJhcmdzIiwgIl9rZXkiLCAicG9wcGVyR2VuZXJhdG9yIiwgImdlbmVyYXRvck9wdGlvbnMiLCAiX2dlbmVyYXRvck9wdGlvbnMiLCAiX2dlbmVyYXRvck9wdGlvbnMkZGVmIiwgImRlZmF1bHRNb2RpZmllcnMiLCAiZGVmYXVsdE1vZGlmaWVyczIiLCAiX2dlbmVyYXRvck9wdGlvbnMkZGVmMiIsICJkZWZhdWx0T3B0aW9ucyIsICJjcmVhdGVQb3BwZXIyIiwgImVmZmVjdENsZWFudXBGbnMiLCAiaXNEZXN0cm95ZWQiLCAic2V0T3B0aW9ucyIsICJzZXRPcHRpb25zQWN0aW9uIiwgIm9wdGlvbnMyIiwgImNsZWFudXBNb2RpZmllckVmZmVjdHMiLCAibSIsICJydW5Nb2RpZmllckVmZmVjdHMiLCAiZm9yY2VVcGRhdGUiLCAiX3N0YXRlJGVsZW1lbnRzIiwgInJlZmVyZW5jZTMiLCAicG9wcGVyMyIsICJpbmRleCIsICJfc3RhdGUkb3JkZXJlZE1vZGlmaWUiLCAiX3N0YXRlJG9yZGVyZWRNb2RpZmllMiIsICJkZXN0cm95IiwgInN0YXRlMiIsICJvbkZpcnN0VXBkYXRlIiwgIl9yZWYkb3B0aW9ucyIsICJlZmZlY3Q1IiwgImNsZWFudXBGbiIsICJub29wRm4iLCAibm9vcEZuMiIsICJjcmVhdGVQb3BwZXIiLCAiQk9YX0NMQVNTIiwgIkNPTlRFTlRfQ0xBU1MiLCAiQkFDS0RST1BfQ0xBU1MiLCAiQVJST1dfQ0xBU1MiLCAiU1ZHX0FSUk9XX0NMQVNTIiwgIlRPVUNIX09QVElPTlMiLCAiY2FwdHVyZSIsICJUSVBQWV9ERUZBVUxUX0FQUEVORF9UTyIsICJUSVBQWV9ERUZBVUxUX0FQUEVORF9UTzIiLCAiZ2V0VmFsdWVBdEluZGV4T3JSZXR1cm4iLCAiZGVmYXVsdFZhbHVlIiwgImlzVHlwZSIsICJ0eXBlIiwgInN0ciIsICJjYWxsIiwgImludm9rZVdpdGhBcmdzT3JSZXR1cm4iLCAiYXBwbHkiLCAiZGVib3VuY2UyIiwgIm1zIiwgInRpbWVvdXQiLCAiYXJnIiwgImNsZWFyVGltZW91dCIsICJzZXRUaW1lb3V0IiwgInNwbGl0QnlTcGFjZXMiLCAiQm9vbGVhbiIsICJub3JtYWxpemVUb0FycmF5IiwgInB1c2hJZlVuaXF1ZSIsICJhcnIiLCAidW5pcXVlIiwgImdldEJhc2VQbGFjZW1lbnQyIiwgImFycmF5RnJvbSIsICJyZW1vdmVVbmRlZmluZWRQcm9wcyIsICJvYmoiLCAiZGl2IiwgImNyZWF0ZUVsZW1lbnQiLCAiaXNFbGVtZW50MiIsICJpc05vZGVMaXN0IiwgImlzTW91c2VFdmVudCIsICJpc1JlZmVyZW5jZUVsZW1lbnQiLCAiX3RpcHB5IiwgImdldEFycmF5T2ZFbGVtZW50cyIsICJxdWVyeVNlbGVjdG9yQWxsIiwgInNldFRyYW5zaXRpb25EdXJhdGlvbiIsICJlbHMiLCAiZWwiLCAidHJhbnNpdGlvbkR1cmF0aW9uIiwgInNldFZpc2liaWxpdHlTdGF0ZSIsICJnZXRPd25lckRvY3VtZW50IiwgImVsZW1lbnRPckVsZW1lbnRzIiwgIl9ub3JtYWxpemVUb0FycmF5IiwgImlzQ3Vyc29yT3V0c2lkZUludGVyYWN0aXZlQm9yZGVyIiwgInBvcHBlclRyZWVEYXRhIiwgImV2ZW50IiwgImNsaWVudFgiLCAiY2xpZW50WSIsICJwb3BwZXJTdGF0ZSIsICJwcm9wcyIsICJpbnRlcmFjdGl2ZUJvcmRlciIsICJ0b3BEaXN0YW5jZSIsICJib3R0b21EaXN0YW5jZSIsICJsZWZ0RGlzdGFuY2UiLCAicmlnaHREaXN0YW5jZSIsICJleGNlZWRzVG9wIiwgImV4Y2VlZHNCb3R0b20iLCAiZXhjZWVkc0xlZnQiLCAiZXhjZWVkc1JpZ2h0IiwgInVwZGF0ZVRyYW5zaXRpb25FbmRMaXN0ZW5lciIsICJib3giLCAiYWN0aW9uIiwgImxpc3RlbmVyIiwgIm1ldGhvZCIsICJhY3R1YWxDb250YWlucyIsICJfdGFyZ2V0JGdldFJvb3ROb2RlIiwgImN1cnJlbnRJbnB1dCIsICJpc1RvdWNoIiwgImxhc3RNb3VzZU1vdmVUaW1lIiwgIm9uRG9jdW1lbnRUb3VjaFN0YXJ0IiwgInBlcmZvcm1hbmNlIiwgIm9uRG9jdW1lbnRNb3VzZU1vdmUiLCAibm93IiwgIm9uV2luZG93Qmx1ciIsICJhY3RpdmVFbGVtZW50IiwgImJsdXIiLCAiaXNWaXNpYmxlIiwgImJpbmRHbG9iYWxFdmVudExpc3RlbmVycyIsICJpc0Jyb3dzZXIiLCAiaXNJRTExIiwgIm1zQ3J5cHRvIiwgInJlc2V0VmlzaXRlZE1lc3NhZ2VzIiwgInBsdWdpblByb3BzIiwgImFuaW1hdGVGaWxsIiwgImZvbGxvd0N1cnNvciIsICJpbmxpbmVQb3NpdGlvbmluZyIsICJzdGlja3kiLCAicmVuZGVyUHJvcHMiLCAiYWxsb3dIVE1MIiwgImFuaW1hdGlvbiIsICJjb250ZW50IiwgImluZXJ0aWEiLCAibWF4V2lkdGgiLCAicm9sZSIsICJ0aGVtZSIsICJ6SW5kZXgiLCAiZGVmYXVsdFByb3BzIiwgImFwcGVuZFRvIiwgImFyaWEiLCAiZXhwYW5kZWQiLCAiZGVsYXkiLCAiZHVyYXRpb24iLCAiZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdCIsICJoaWRlT25DbGljayIsICJpZ25vcmVBdHRyaWJ1dGVzIiwgImludGVyYWN0aXZlIiwgImludGVyYWN0aXZlRGVib3VuY2UiLCAibW92ZVRyYW5zaXRpb24iLCAib25BZnRlclVwZGF0ZSIsICJvbkJlZm9yZVVwZGF0ZSIsICJvbkNyZWF0ZSIsICJvbkRlc3Ryb3kiLCAib25IaWRkZW4iLCAib25IaWRlIiwgIm9uTW91bnQiLCAib25TaG93IiwgIm9uU2hvd24iLCAib25UcmlnZ2VyIiwgIm9uVW50cmlnZ2VyIiwgIm9uQ2xpY2tPdXRzaWRlIiwgInBsdWdpbnMiLCAicG9wcGVyT3B0aW9ucyIsICJyZW5kZXIiLCAic2hvd09uQ3JlYXRlIiwgInRvdWNoIiwgInRyaWdnZXIiLCAidHJpZ2dlclRhcmdldCIsICJkZWZhdWx0S2V5cyIsICJzZXREZWZhdWx0UHJvcHMiLCAic2V0RGVmYXVsdFByb3BzMiIsICJwYXJ0aWFsUHJvcHMiLCAidmFsaWRhdGVQcm9wcyIsICJnZXRFeHRlbmRlZFBhc3NlZFByb3BzIiwgInBhc3NlZFByb3BzIiwgInBsdWdpblByb3BzMiIsICJwbHVnaW4iLCAiX25hbWUiLCAiZ2V0RGF0YUF0dHJpYnV0ZVByb3BzIiwgInByb3BLZXlzIiwgInZhbHVlQXNTdHJpbmciLCAiZ2V0QXR0cmlidXRlIiwgInRyaW0iLCAiSlNPTiIsICJwYXJzZSIsICJlIiwgImV2YWx1YXRlUHJvcHMiLCAib3V0IiwgImlubmVySFRNTCIsICJpbm5lckhUTUwyIiwgImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwgImNyZWF0ZUFycm93RWxlbWVudCIsICJhcnJvdzIiLCAiY2xhc3NOYW1lIiwgImFwcGVuZENoaWxkIiwgInNldENvbnRlbnQiLCAidGV4dENvbnRlbnQiLCAiZ2V0Q2hpbGRyZW4iLCAiZmlyc3RFbGVtZW50Q2hpbGQiLCAiYm94Q2hpbGRyZW4iLCAiY2hpbGRyZW4iLCAiY2xhc3NMaXN0IiwgImJhY2tkcm9wIiwgIm9uVXBkYXRlIiwgInByZXZQcm9wcyIsICJuZXh0UHJvcHMiLCAiX2dldENoaWxkcmVuIiwgImJveDIiLCAiY29udGVudDIiLCAicmVtb3ZlQ2hpbGQiLCAiJCR0aXBweSIsICJpZENvdW50ZXIiLCAibW91c2VNb3ZlTGlzdGVuZXJzIiwgIm1vdW50ZWRJbnN0YW5jZXMiLCAiY3JlYXRlVGlwcHkiLCAic2hvd1RpbWVvdXQiLCAiaGlkZVRpbWVvdXQiLCAic2NoZWR1bGVIaWRlQW5pbWF0aW9uRnJhbWUiLCAiaXNWaXNpYmxlRnJvbUNsaWNrIiwgImRpZEhpZGVEdWVUb0RvY3VtZW50TW91c2VEb3duIiwgImRpZFRvdWNoTW92ZSIsICJpZ25vcmVPbkZpcnN0VXBkYXRlIiwgImxhc3RUcmlnZ2VyRXZlbnQiLCAiY3VycmVudFRyYW5zaXRpb25FbmRMaXN0ZW5lciIsICJsaXN0ZW5lcnMiLCAiZGVib3VuY2VkT25Nb3VzZU1vdmUiLCAib25Nb3VzZU1vdmUiLCAiY3VycmVudFRhcmdldCIsICJpZCIsICJwb3BwZXJJbnN0YW5jZSIsICJpc0VuYWJsZWQiLCAiaXNNb3VudGVkIiwgImlzU2hvd24iLCAiY2xlYXJEZWxheVRpbWVvdXRzIiwgInNldFByb3BzIiwgInNldENvbnRlbnQyIiwgInNob3ciLCAiaGlkZTIiLCAiaGlkZVdpdGhJbnRlcmFjdGl2aXR5IiwgImVuYWJsZSIsICJkaXNhYmxlIiwgInVubW91bnQiLCAiZXJyb3JXaGVuIiwgIl9wcm9wcyRyZW5kZXIiLCAicGx1Z2luc0hvb2tzIiwgImhhc0FyaWFFeHBhbmRlZCIsICJoYXNBdHRyaWJ1dGUiLCAiYWRkTGlzdGVuZXJzIiwgImhhbmRsZUFyaWFFeHBhbmRlZEF0dHJpYnV0ZSIsICJoYW5kbGVTdHlsZXMiLCAiaW52b2tlSG9vayIsICJzY2hlZHVsZVNob3ciLCAiZ2V0RG9jdW1lbnQiLCAiZ2V0Tm9ybWFsaXplZFRvdWNoU2V0dGluZ3MiLCAiZ2V0SXNDdXN0b21Ub3VjaEJlaGF2aW9yIiwgImdldElzRGVmYXVsdFJlbmRlckZuIiwgIl9pbnN0YW5jZSRwcm9wcyRyZW5kZSIsICJnZXRDdXJyZW50VGFyZ2V0IiwgImdldERlZmF1bHRUZW1wbGF0ZUNoaWxkcmVuIiwgImdldERlbGF5IiwgImlzU2hvdyIsICJmcm9tSGlkZSIsICJwb2ludGVyRXZlbnRzIiwgImhvb2siLCAic2hvdWxkSW52b2tlUHJvcHNIb29rIiwgInBsdWdpbkhvb2tzIiwgIl9pbnN0YW5jZSRwcm9wcyIsICJoYW5kbGVBcmlhQ29udGVudEF0dHJpYnV0ZSIsICJhdHRyIiwgImlkMiIsICJub2RlcyIsICJjdXJyZW50VmFsdWUiLCAibmV4dFZhbHVlIiwgImNsZWFudXBJbnRlcmFjdGl2ZU1vdXNlTGlzdGVuZXJzIiwgIm9uRG9jdW1lbnRQcmVzcyIsICJhY3R1YWxUYXJnZXQiLCAiY29tcG9zZWRQYXRoIiwgInJlbW92ZURvY3VtZW50UHJlc3MiLCAib25Ub3VjaE1vdmUiLCAib25Ub3VjaFN0YXJ0IiwgImFkZERvY3VtZW50UHJlc3MiLCAiZG9jIiwgIm9uVHJhbnNpdGlvbmVkT3V0IiwgImNhbGxiYWNrIiwgIm9uVHJhbnNpdGlvbkVuZCIsICJvblRyYW5zaXRpb25lZEluIiwgIm9uIiwgImV2ZW50VHlwZSIsICJoYW5kbGVyIiwgIm9uVHJpZ2dlcjIiLCAib25Nb3VzZUxlYXZlIiwgIm9uQmx1ck9yRm9jdXNPdXQiLCAicmVtb3ZlTGlzdGVuZXJzIiwgIl9sYXN0VHJpZ2dlckV2ZW50IiwgInNob3VsZFNjaGVkdWxlQ2xpY2tIaWRlIiwgImlzRXZlbnRMaXN0ZW5lclN0b3BwZWQiLCAid2FzRm9jdXNlZCIsICJzY2hlZHVsZUhpZGUiLCAiaXNDdXJzb3JPdmVyUmVmZXJlbmNlT3JQb3BwZXIiLCAiZ2V0TmVzdGVkUG9wcGVyVHJlZSIsICJfaW5zdGFuY2UkcG9wcGVySW5zdGEiLCAiaW5zdGFuY2UyIiwgInNob3VsZEJhaWwiLCAicmVsYXRlZFRhcmdldCIsICJjcmVhdGVQb3BwZXJJbnN0YW5jZSIsICJkZXN0cm95UG9wcGVySW5zdGFuY2UiLCAiX2luc3RhbmNlJHByb3BzMiIsICJjb21wdXRlZFJlZmVyZW5jZSIsICJ0aXBweU1vZGlmaWVyIiwgIl9nZXREZWZhdWx0VGVtcGxhdGVDaCIsICJtb3VudCIsICJ3YXJuV2hlbiIsICJuZXh0RWxlbWVudFNpYmxpbmciLCAiX2dldE5vcm1hbGl6ZWRUb3VjaFNlIiwgInRvdWNoVmFsdWUiLCAidG91Y2hEZWxheSIsICJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCAiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCAiY3JlYXRlTWVtb3J5TGVha1dhcm5pbmciLCAibmVzdGVkUG9wcGVyIiwgImlzQWxyZWFkeVZpc2libGUiLCAiaXNEaXNhYmxlZCIsICJpc1RvdWNoQW5kVG91Y2hEaXNhYmxlZCIsICJ2aXNpYmlsaXR5IiwgInRyYW5zaXRpb24iLCAiX2dldERlZmF1bHRUZW1wbGF0ZUNoMiIsICJvbkZpcnN0VXBkYXRlMiIsICJfaW5zdGFuY2UkcG9wcGVySW5zdGEyIiwgIl9nZXREZWZhdWx0VGVtcGxhdGVDaDMiLCAiX2JveCIsICJfY29udGVudCIsICJpc0FscmVhZHlIaWRkZW4iLCAiX2dldERlZmF1bHRUZW1wbGF0ZUNoNCIsICJ0YXJnZXRzIiwgIm9wdGlvbmFsUHJvcHMiLCAidmFsaWRhdGVUYXJnZXRzIiwgImlzU2luZ2xlQ29udGVudEVsZW1lbnQiLCAiaXNNb3JlVGhhbk9uZVJlZmVyZW5jZUVsZW1lbnQiLCAiaW5zdGFuY2VzIiwgImFwcGx5U3R5bGVzTW9kaWZpZXIiLCAiZWZmZWN0NCJdCn0K
