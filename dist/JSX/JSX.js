/**
 * SPDX-License-Identifier: BSD-3-Clause
 * _addText: '{{Gadget Header|license=BSD|attribution=proteriax}}'
 *
 * @base {@link https://github.com/alex-kinokon/jsx-dom}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/JSX}
 * @license BSD-3-Clause {@link https://github.com/alex-kinokon/jsx-dom/blob/master/LICENSE}
 */

/**
 * BSD 3-Clause License
 *
 * Copyright (c) proteriax
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
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
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// node_modules/.pnpm/proxy-polyfill@0.3.2/node_modules/proxy-polyfill/proxy.min.js
var require_proxy_min = __commonJS({
  "node_modules/.pnpm/proxy-polyfill@0.3.2/node_modules/proxy-polyfill/proxy.min.js"() {
    (function() {
      function n() {
        function v() {
          return null;
        }
        function l(a) {
          return a ? "object" === typeof a || "function" === typeof a : false;
        }
        function p(a) {
          if (null !== a && !l(a)) throw new TypeError("Object prototype may only be an Object or null: " + a);
        }
        var q = null, e = Object, w = !!e.create || !({ __proto__: null } instanceof e), A = e.create || (w ? function(a) {
          p(a);
          return { __proto__: a };
        } : function(a) {
          function c() {
          }
          p(a);
          if (null === a) throw new SyntaxError("Native Object.create is required to create objects with null prototype");
          c.prototype = a;
          return new c();
        }), B = e.getPrototypeOf || ([].__proto__ === Array.prototype ? function(a) {
          a = a.__proto__;
          return l(a) ? a : null;
        } : v);
        var m = function(a, c) {
          function k() {
          }
          if (void 0 === (this && this instanceof m ? this.constructor : void 0)) throw new TypeError("Constructor Proxy requires 'new'");
          if (!l(a) || !l(c)) throw new TypeError("Cannot create proxy with a non-object as target or handler");
          q = function() {
            a = null;
            k = function(b) {
              throw new TypeError("Cannot perform '" + b + "' on a proxy that has been revoked");
            };
          };
          setTimeout(function() {
            q = null;
          }, 0);
          var g = c;
          c = { get: null, set: null, apply: null, construct: null };
          for (var h in g) {
            if (!(h in c)) throw new TypeError("Proxy polyfill does not support trap '" + h + "'");
            c[h] = g[h];
          }
          "function" === typeof g && (c.apply = g.apply.bind(g));
          g = B(a);
          var r = false, t = false;
          if ("function" === typeof a) {
            var f = function() {
              var b = this && this.constructor === f, d = Array.prototype.slice.call(arguments);
              k(b ? "construct" : "apply");
              return b && c.construct ? c.construct.call(this, a, d) : !b && c.apply ? c.apply(a, this, d) : b ? (d.unshift(a), new (a.bind.apply(a, d))()) : a.apply(
                this,
                d
              );
            };
            r = true;
          } else a instanceof Array ? (f = [], t = true) : f = w || null !== g ? A(g) : {};
          var x = c.get ? function(b) {
            k("get");
            return c.get(this, b, f);
          } : function(b) {
            k("get");
            return this[b];
          }, C = c.set ? function(b, d) {
            k("set");
            c.set(this, b, d, f);
          } : function(b, d) {
            k("set");
            this[b] = d;
          }, y = {};
          e.getOwnPropertyNames(a).forEach(function(b) {
            if (!((r || t) && b in f)) {
              var d = e.getOwnPropertyDescriptor(a, b);
              e.defineProperty(f, b, { enumerable: !!d.enumerable, get: x.bind(a, b), set: C.bind(a, b) });
              y[b] = true;
            }
          });
          h = true;
          if (r || t) {
            var D = e.setPrototypeOf || ([].__proto__ === Array.prototype ? function(b, d) {
              p(d);
              b.__proto__ = d;
              return b;
            } : v);
            g && D(f, g) || (h = false);
          }
          if (c.get || !h) for (var u in a) y[u] || e.defineProperty(f, u, { get: x.bind(a, u) });
          e.seal(a);
          e.seal(f);
          return f;
        };
        m.revocable = function(a, c) {
          return { proxy: new m(a, c), revoke: q };
        };
        return m;
      }
      ;
      var z = "undefined" !== typeof process && "[object process]" === {}.toString.call(process) || "undefined" !== typeof navigator && "ReactNative" === navigator.product ? global : self;
      z.Proxy || (z.Proxy = n(), z.Proxy.revocable = z.Proxy.revocable);
    })();
  }
});

// dist/JSX/JSX.js
require_proxy_min();
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
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    var _iterator = _createForOfIteratorHelper(__getOwnPropNames2(from)), _step;
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
//! src/JSX/JSX.ts
var JSX_exports = {};
__export(JSX_exports, {
  Component: () => Component,
  Fragment: () => Fragment,
  PureComponent: () => Component,
  SVGNamespace: () => SVGNamespace,
  ShadowRoot: () => ShadowRoot,
  StrictMode: () => Fragment,
  className: () => className,
  createElement: () => createElement,
  createFactory: () => createFactory,
  createRef: () => createRef,
  forwardRef: () => forwardRef,
  h: () => createElement,
  isRef: () => isRef,
  jsx: () => jsx,
  jsxs: () => jsx,
  memo: () => identity,
  preventDefault: () => preventDefault,
  stopPropagation: () => stopPropagation,
  styled: () => styled,
  useCallback: () => identity,
  useClassList: () => useClassList,
  useImperativeHandle: () => useImperativeHandle,
  useMemo: () => useMemo,
  useRef: () => createRef,
  useText: () => useText
});
module.exports = __toCommonJS(JSX_exports);
var keys = Object.keys;
function identity(value) {
  return value;
}
function isBoolean(val) {
  return typeof val === "boolean";
}
function isElement(val) {
  return val && typeof val.nodeType === "number";
}
function isString(val) {
  return typeof val === "string";
}
function isNumber(val) {
  return typeof val === "number";
}
function isObject(val) {
  return typeof val === "object" ? val !== null : isFunction(val);
}
function isFunction(val) {
  return typeof val === "function";
}
function isComponentClass(Component2) {
  return !!(Component2 && Component2.isComponent);
}
function isArrayLike(obj) {
  return isObject(obj) && typeof obj.length === "number" && typeof obj.nodeType !== "number";
}
function forEach(value, fn) {
  if (!value) return;
  var _iterator2 = _createForOfIteratorHelper(keys(value)), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      const key = _step2.value;
      fn(value[key], key);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}
function createRef() {
  return Object.seal({
    current: null
  });
}
function isRef(maybeRef) {
  return isObject(maybeRef) && "current" in maybeRef;
}
var isUnitlessNumber = {
  animationIterationCount: 0,
  borderImageOutset: 0,
  borderImageSlice: 0,
  borderImageWidth: 0,
  boxFlex: 0,
  boxFlexGroup: 0,
  boxOrdinalGroup: 0,
  columnCount: 0,
  columns: 0,
  flex: 0,
  flexGrow: 0,
  flexPositive: 0,
  flexShrink: 0,
  flexNegative: 0,
  flexOrder: 0,
  gridArea: 0,
  gridRow: 0,
  gridRowEnd: 0,
  gridRowSpan: 0,
  gridRowStart: 0,
  gridColumn: 0,
  gridColumnEnd: 0,
  gridColumnSpan: 0,
  gridColumnStart: 0,
  fontWeight: 0,
  lineClamp: 0,
  lineHeight: 0,
  opacity: 0,
  order: 0,
  orphans: 0,
  tabSize: 0,
  widows: 0,
  zIndex: 0,
  zoom: 0,
  // SVG-related properties
  fillOpacity: 0,
  floodOpacity: 0,
  stopOpacity: 0,
  strokeDasharray: 0,
  strokeDashoffset: 0,
  strokeMiterlimit: 0,
  strokeOpacity: 0,
  strokeWidth: 0
};
function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}
var prefixes = ["Webkit", "ms", "Moz", "O"];
keys(isUnitlessNumber).forEach((prop) => {
  prefixes.forEach((prefix) => {
    isUnitlessNumber[prefixKey(prefix, prop)] = 0;
  });
});
var jsxDomType = Symbol.for("jsx-dom:type");
var JsxDomType = /* @__PURE__ */ (function(JsxDomType2) {
  JsxDomType2["ShadowRoot"] = "ShadowRoot";
  return JsxDomType2;
})(JsxDomType || {});
function ShadowRoot(_ref) {
  let {
    children,
    ref,
    ...attr2
  } = _ref;
  return {
    [jsxDomType]: JsxDomType.ShadowRoot,
    ref,
    attr: attr2,
    children
  };
}
function isShadowRoot(el) {
  return el != null && el[jsxDomType] === JsxDomType.ShadowRoot;
}
var SVGNamespace = "http://www.w3.org/2000/svg";
var XLinkNamespace = "http://www.w3.org/1999/xlink";
var XMLNamespace = "http://www.w3.org/XML/1998/namespace";
function isVisibleChild(value) {
  return !isBoolean(value) && value != null;
}
function className(value) {
  if (Array.isArray(value)) {
    return value.map(className).filter(Boolean).join(" ");
  } else if (isObject(value)) {
    if (Symbol.iterator in value) {
      return className(Array.from(value));
    }
    return keys(value).filter((k) => value[k]).join(" ");
  } else if (isVisibleChild(value)) {
    return "" + value;
  } else {
    return "";
  }
}
var svg = {
  animate: 0,
  circle: 0,
  clipPath: 0,
  defs: 0,
  desc: 0,
  ellipse: 0,
  feBlend: 0,
  feColorMatrix: 0,
  feComponentTransfer: 0,
  feComposite: 0,
  feConvolveMatrix: 0,
  feDiffuseLighting: 0,
  feDisplacementMap: 0,
  feDistantLight: 0,
  feFlood: 0,
  feFuncA: 0,
  feFuncB: 0,
  feFuncG: 0,
  feFuncR: 0,
  feGaussianBlur: 0,
  feImage: 0,
  feMerge: 0,
  feMergeNode: 0,
  feMorphology: 0,
  feOffset: 0,
  fePointLight: 0,
  feSpecularLighting: 0,
  feSpotLight: 0,
  feTile: 0,
  feTurbulence: 0,
  filter: 0,
  foreignObject: 0,
  g: 0,
  image: 0,
  line: 0,
  linearGradient: 0,
  marker: 0,
  mask: 0,
  metadata: 0,
  path: 0,
  pattern: 0,
  polygon: 0,
  polyline: 0,
  radialGradient: 0,
  rect: 0,
  stop: 0,
  svg: 0,
  switch: 0,
  symbol: 0,
  text: 0,
  textPath: 0,
  tspan: 0,
  use: 0,
  view: 0
};
var nonPresentationSVGAttributes = /^(a(ll|t|u)|base[FP]|c(al|lipPathU|on)|di|ed|ex|filter[RU]|g(lyphR|r)|ke|l(en|im)|ma(rker[HUW]|s)|n|pat|pr|point[^e]|re[^n]|s[puy]|st[^or]|ta|textL|vi|xC|y|z)/;
function createFactory(tag) {
  return createElement.bind(null, tag);
}
function Fragment(attr2) {
  const fragment = document.createDocumentFragment();
  appendChild(attr2.children, fragment);
  return fragment;
}
var Component = class {
  static isComponent = true;
  constructor(props) {
    this.props = props;
  }
  render() {
    return null;
  }
};
function initComponentClass(Class, attr2, children) {
  attr2 = {
    ...attr2,
    children
  };
  const instance = new Class(attr2);
  const node = instance.render();
  if ("ref" in attr2) {
    attachRef(attr2.ref, instance);
  }
  return node;
}
function jsx(tag, _ref) {
  let {
    children,
    ...attr2
  } = _ref;
  if (!attr2.namespaceURI && svg[tag] === 0) {
    attr2 = {
      ...attr2,
      namespaceURI: SVGNamespace
    };
  }
  let node;
  if (isString(tag)) {
    node = attr2.namespaceURI ? document.createElementNS(attr2.namespaceURI, tag) : document.createElement(tag);
    attributes(attr2, node);
    appendChild(children, node);
    if (node instanceof window.HTMLSelectElement && attr2.value != null) {
      if (attr2.multiple === true && Array.isArray(attr2.value)) {
        const values = attr2.value.map((value) => String(value));
        node.querySelectorAll("option").forEach((option) => option.selected = values.includes(option.value));
      } else {
        node.value = attr2.value;
      }
    }
    attachRef(attr2.ref, node);
  } else if (isFunction(tag)) {
    if (isObject(tag.defaultProps)) {
      attr2 = {
        ...tag.defaultProps,
        ...attr2
      };
    }
    node = isComponentClass(tag) ? initComponentClass(tag, attr2, children) : tag({
      ...attr2,
      children
    });
  } else {
    throw new TypeError("Invalid JSX element type: ".concat(tag));
  }
  return node;
}
function createElement(tag, attr2) {
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key2 = 2; _key2 < _len; _key2++) {
    children[_key2 - 2] = arguments[_key2];
  }
  if (isString(attr2) || Array.isArray(attr2)) {
    children.unshift(attr2);
    attr2 = {};
  }
  attr2 = attr2 || {};
  if (attr2.children != null && !children.length) {
    ({
      children,
      ...attr2
    } = attr2);
  }
  return jsx(tag, {
    ...attr2,
    children
  }, attr2.key);
}
function attachRef(ref, node) {
  if (isRef(ref)) {
    ref.current = node;
  } else if (isFunction(ref)) {
    ref(node);
  }
}
function appendChild(child, node) {
  if (isArrayLike(child)) {
    appendChildren(child, node);
  } else if (isString(child) || isNumber(child)) {
    appendChildToNode(document.createTextNode(child), node);
  } else if (child === null) {
    appendChildToNode(document.createComment(""), node);
  } else if (isElement(child)) {
    appendChildToNode(child, node);
  } else if (isShadowRoot(child)) {
    const shadowRoot = node.attachShadow(child.attr);
    appendChild(child.children, shadowRoot);
    attachRef(child.ref, shadowRoot);
  }
}
function appendChildren(children, node) {
  for (var _i = 0, _arr = [...children]; _i < _arr.length; _i++) {
    const child = _arr[_i];
    appendChild(child, node);
  }
  return node;
}
function appendChildToNode(child, node) {
  if (node instanceof window.HTMLTemplateElement) {
    node.content.appendChild(child);
  } else {
    node.appendChild(child);
  }
}
function normalizeAttribute(s, separator) {
  return s.replace(/[A-Z]/g, (match) => separator + match.toLowerCase());
}
function style(node, value) {
  if (value == null || value === false) ;
  else if (Array.isArray(value)) {
    value.forEach((v) => style(node, v));
  } else if (isString(value)) {
    node.setAttribute("style", value);
  } else if (isObject(value)) {
    forEach(value, (val, key) => {
      if (key.indexOf("-") === 0) {
        node.style.setProperty(key, val);
      } else if (isNumber(val) && isUnitlessNumber[key] !== 0) {
        node.style[key] = val + "px";
      } else {
        node.style[key] = val;
      }
    });
  }
}
function attribute(key, value, node) {
  switch (key) {
    case "xlinkActuate":
    case "xlinkArcrole":
    case "xlinkHref":
    case "xlinkRole":
    case "xlinkShow":
    case "xlinkTitle":
    case "xlinkType":
      attrNS(node, XLinkNamespace, normalizeAttribute(key, ":"), value);
      return;
    case "xmlnsXlink":
      attr(node, normalizeAttribute(key, ":"), value);
      return;
    case "xmlBase":
    case "xmlLang":
    case "xmlSpace":
      attrNS(node, XMLNamespace, normalizeAttribute(key, ":"), value);
      return;
  }
  switch (key) {
    case "htmlFor":
      attr(node, "for", value);
      return;
    case "dataset":
      forEach(value, (dataValue, dataKey) => {
        if (dataValue != null) {
          node.dataset[dataKey] = dataValue;
        }
      });
      return;
    case "innerHTML":
    case "innerText":
    case "textContent":
      if (isVisibleChild(value)) {
        node[key] = value;
      }
      return;
    case "dangerouslySetInnerHTML":
      if (isObject(value)) {
        node.innerHTML = value["__html"];
      }
      return;
    case "value":
      if (value == null || node instanceof window.HTMLSelectElement) {
        return;
      } else if (node instanceof window.HTMLTextAreaElement) {
        node.value = value;
        return;
      }
      break;
    case "spellCheck":
      node.spellcheck = value;
      return;
    case "class":
    case "className":
      if (isFunction(value)) {
        value(node);
      } else {
        attr(node, "class", className(value));
      }
      return;
    case "ref":
    case "namespaceURI":
      return;
    case "style":
      style(node, value);
      return;
    case "on":
    case "onCapture":
      forEach(value, (eventHandler, eventName) => {
        node.addEventListener(eventName, eventHandler, key === "onCapture");
      });
      return;
  }
  if (isFunction(value)) {
    if (key[0] === "o" && key[1] === "n") {
      let attribute2 = key.toLowerCase();
      const useCapture = attribute2.endsWith("capture");
      if (attribute2 === "ondoubleclick") {
        attribute2 = "ondblclick";
      } else if (useCapture && attribute2 === "ondoubleclickcapture") {
        attribute2 = "ondblclickcapture";
      }
      if (!useCapture && node[attribute2] === null) {
        node[attribute2] = value;
      } else if (useCapture) {
        node.addEventListener(attribute2.substring(2, attribute2.length - 7), value, true);
      } else {
        let eventName;
        if (attribute2 in window) {
          const standardEventName = attribute2.substring(2);
          eventName = standardEventName;
        } else {
          const customEventName = attribute2[2] + key.slice(3);
          eventName = customEventName;
        }
        node.addEventListener(eventName, value);
      }
    }
  } else if (isObject(value)) {
    node[key] = value;
  } else if (value === true) {
    attr(node, key, "");
  } else if (value !== false && value != null) {
    if (node instanceof SVGElement && !nonPresentationSVGAttributes.test(key)) {
      attr(node, normalizeAttribute(key, "-"), value);
    } else {
      attr(node, key, value);
    }
  }
}
function attr(node, key, value) {
  node.setAttribute(key, value);
}
function attrNS(node, namespace, key, value) {
  node.setAttributeNS(namespace, key, value);
}
function attributes(attr2, node) {
  var _iterator3 = _createForOfIteratorHelper(keys(attr2)), _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
      const key = _step3.value;
      attribute(key, attr2[key], node);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return node;
}
function useText(initialValue) {
  const text = new Text();
  Object.defineProperty(text, "toString", {
    value() {
      return this.textContent;
    }
  });
  function setText(value) {
    text.textContent = value;
  }
  if (initialValue != null) {
    setText(initialValue);
  }
  return [text, setText];
}
function useClassList(initialValue) {
  const div = document.createElement("div");
  if (initialValue != null) {
    div.className = className(initialValue);
  }
  let list = div.classList;
  function ClassList(value) {
    value.setAttribute("class", list.value);
    list = value.classList;
  }
  Object.defineProperties(ClassList, Object.getOwnPropertyDescriptors({
    get size() {
      return list.length;
    },
    get value() {
      return list.value;
    },
    add() {
      list.add(...arguments);
    },
    remove() {
      list.remove(...arguments);
    },
    toggle(token, force) {
      list.toggle(token, force);
    },
    contains(token) {
      return list.contains(token);
    }
  }));
  return ClassList;
}
function useMemo(factory) {
  return factory();
}
function forwardRef(render) {
  return (_ref) => {
    let {
      ref,
      ...props
    } = _ref;
    return render(props, ref !== null && ref !== void 0 ? ref : createRef());
  };
}
function useImperativeHandle(ref, init) {
  attachRef(ref, init());
}
var cache = /* @__PURE__ */ new Map();
var createStyledComponent = (name) => function(list) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }
  return (_ref) => {
    let {
      style: style2,
      ...props
    } = _ref;
    const lastIndex = list.length - 1;
    const css = list.slice(0, lastIndex).reduce((p, s, i) => {
      const interpolation = interpolations[i];
      const current = typeof interpolation === "function" ? interpolation(props) : interpolation;
      return p + s + current;
    }, "") + list[lastIndex];
    return createElement(name, {
      style: [css, style2],
      ...props
    });
  };
};
var baseStyled = (customComponent) => createStyledComponent(customComponent);
var styled = /* @__PURE__ */ new Proxy(baseStyled, {
  get(_, name) {
    return setIfAbsent(cache, name, () => createStyledComponent(name));
  }
});
function setIfAbsent(map, key, getValue) {
  if (map.has(key)) {
    return map.get(key);
  } else {
    const value = getValue(key);
    map.set(key, value);
    return value;
  }
}
function preventDefault(event) {
  event.preventDefault();
  return event;
}
function stopPropagation(event) {
  event.stopPropagation();
  return event;
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL3Byb3h5LXBvbHlmaWxsQDAuMy4yL25vZGVfbW9kdWxlcy9wcm94eS1wb2x5ZmlsbC9wcm94eS5taW4uanMiLCAic3JjL0pTWC9KU1gudHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2pzeC1kb21AOC4xLjYvbm9kZV9tb2R1bGVzL2pzeC1kb20vaW5kZXguanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIihmdW5jdGlvbigpe2Z1bmN0aW9uIG4oKXtmdW5jdGlvbiB2KCl7cmV0dXJuIG51bGx9ZnVuY3Rpb24gbChhKXtyZXR1cm4gYT9cIm9iamVjdFwiPT09dHlwZW9mIGF8fFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhOiExfWZ1bmN0aW9uIHAoYSl7aWYobnVsbCE9PWEmJiFsKGEpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgcHJvdG90eXBlIG1heSBvbmx5IGJlIGFuIE9iamVjdCBvciBudWxsOiBcIithKTt9dmFyIHE9bnVsbCxlPU9iamVjdCx3PSEhZS5jcmVhdGV8fCEoe19fcHJvdG9fXzpudWxsfWluc3RhbmNlb2YgZSksQT1lLmNyZWF0ZXx8KHc/ZnVuY3Rpb24oYSl7cChhKTtyZXR1cm57X19wcm90b19fOmF9fTpmdW5jdGlvbihhKXtmdW5jdGlvbiBjKCl7fXAoYSk7aWYobnVsbD09PWEpdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiTmF0aXZlIE9iamVjdC5jcmVhdGUgaXMgcmVxdWlyZWQgdG8gY3JlYXRlIG9iamVjdHMgd2l0aCBudWxsIHByb3RvdHlwZVwiKTtjLnByb3RvdHlwZT1hO3JldHVybiBuZXcgY30pLFxuQj1lLmdldFByb3RvdHlwZU9mfHwoW10uX19wcm90b19fPT09QXJyYXkucHJvdG90eXBlP2Z1bmN0aW9uKGEpe2E9YS5fX3Byb3RvX187cmV0dXJuIGwoYSk/YTpudWxsfTp2KTt2YXIgbT1mdW5jdGlvbihhLGMpe2Z1bmN0aW9uIGsoKXt9aWYodm9pZCAwPT09KHRoaXMmJnRoaXMgaW5zdGFuY2VvZiBtP3RoaXMuY29uc3RydWN0b3I6dm9pZCAwKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ29uc3RydWN0b3IgUHJveHkgcmVxdWlyZXMgJ25ldydcIik7aWYoIWwoYSl8fCFsKGMpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY3JlYXRlIHByb3h5IHdpdGggYSBub24tb2JqZWN0IGFzIHRhcmdldCBvciBoYW5kbGVyXCIpO3E9ZnVuY3Rpb24oKXthPW51bGw7az1mdW5jdGlvbihiKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHBlcmZvcm0gJ1wiK2IrXCInIG9uIGEgcHJveHkgdGhhdCBoYXMgYmVlbiByZXZva2VkXCIpO319O3NldFRpbWVvdXQoZnVuY3Rpb24oKXtxPW51bGx9LDApO3ZhciBnPVxuYztjPXtnZXQ6bnVsbCxzZXQ6bnVsbCxhcHBseTpudWxsLGNvbnN0cnVjdDpudWxsfTtmb3IodmFyIGggaW4gZyl7aWYoIShoIGluIGMpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJQcm94eSBwb2x5ZmlsbCBkb2VzIG5vdCBzdXBwb3J0IHRyYXAgJ1wiK2grXCInXCIpO2NbaF09Z1toXX1cImZ1bmN0aW9uXCI9PT10eXBlb2YgZyYmKGMuYXBwbHk9Zy5hcHBseS5iaW5kKGcpKTtnPUIoYSk7dmFyIHI9ITEsdD0hMTtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYSl7dmFyIGY9ZnVuY3Rpb24oKXt2YXIgYj10aGlzJiZ0aGlzLmNvbnN0cnVjdG9yPT09ZixkPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7ayhiP1wiY29uc3RydWN0XCI6XCJhcHBseVwiKTtyZXR1cm4gYiYmYy5jb25zdHJ1Y3Q/Yy5jb25zdHJ1Y3QuY2FsbCh0aGlzLGEsZCk6IWImJmMuYXBwbHk/Yy5hcHBseShhLHRoaXMsZCk6Yj8oZC51bnNoaWZ0KGEpLG5ldyAoYS5iaW5kLmFwcGx5KGEsZCkpKTphLmFwcGx5KHRoaXMsXG5kKX07cj0hMH1lbHNlIGEgaW5zdGFuY2VvZiBBcnJheT8oZj1bXSx0PSEwKTpmPXd8fG51bGwhPT1nP0EoZyk6e307dmFyIHg9Yy5nZXQ/ZnVuY3Rpb24oYil7ayhcImdldFwiKTtyZXR1cm4gYy5nZXQodGhpcyxiLGYpfTpmdW5jdGlvbihiKXtrKFwiZ2V0XCIpO3JldHVybiB0aGlzW2JdfSxDPWMuc2V0P2Z1bmN0aW9uKGIsZCl7ayhcInNldFwiKTtjLnNldCh0aGlzLGIsZCxmKX06ZnVuY3Rpb24oYixkKXtrKFwic2V0XCIpO3RoaXNbYl09ZH0seT17fTtlLmdldE93blByb3BlcnR5TmFtZXMoYSkuZm9yRWFjaChmdW5jdGlvbihiKXtpZighKChyfHx0KSYmYiBpbiBmKSl7dmFyIGQ9ZS5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYSxiKTtlLmRlZmluZVByb3BlcnR5KGYsYix7ZW51bWVyYWJsZTohIWQuZW51bWVyYWJsZSxnZXQ6eC5iaW5kKGEsYiksc2V0OkMuYmluZChhLGIpfSk7eVtiXT0hMH19KTtoPSEwO2lmKHJ8fHQpe3ZhciBEPWUuc2V0UHJvdG90eXBlT2Z8fChbXS5fX3Byb3RvX189PT1cbkFycmF5LnByb3RvdHlwZT9mdW5jdGlvbihiLGQpe3AoZCk7Yi5fX3Byb3RvX189ZDtyZXR1cm4gYn06dik7ZyYmRChmLGcpfHwoaD0hMSl9aWYoYy5nZXR8fCFoKWZvcih2YXIgdSBpbiBhKXlbdV18fGUuZGVmaW5lUHJvcGVydHkoZix1LHtnZXQ6eC5iaW5kKGEsdSl9KTtlLnNlYWwoYSk7ZS5zZWFsKGYpO3JldHVybiBmfTttLnJldm9jYWJsZT1mdW5jdGlvbihhLGMpe3JldHVybntwcm94eTpuZXcgbShhLGMpLHJldm9rZTpxfX07cmV0dXJuIG19O3ZhciB6PVwidW5kZWZpbmVkXCIhPT10eXBlb2YgcHJvY2VzcyYmXCJbb2JqZWN0IHByb2Nlc3NdXCI9PT17fS50b1N0cmluZy5jYWxsKHByb2Nlc3MpfHxcInVuZGVmaW5lZFwiIT09dHlwZW9mIG5hdmlnYXRvciYmXCJSZWFjdE5hdGl2ZVwiPT09bmF2aWdhdG9yLnByb2R1Y3Q/Z2xvYmFsOnNlbGY7ei5Qcm94eXx8KHouUHJveHk9bigpLHouUHJveHkucmV2b2NhYmxlPXouUHJveHkucmV2b2NhYmxlKTt9KSgpO1xuIiwgIi8vIOWmguaenOS9v+eUqCBqc3gtZG9t77yM5YiZ5Y+W5raI5rOo6YeK5Lul5LiL6KGMIC8gVG8gVXNlIGpzeC1kb20sIHVuY29tbWVudCB0aGUgZm9sbG93aW5nIGxpbmVcbmV4cG9ydCAqIGZyb20gJ2pzeC1kb20nO1xuIiwgIi8qIGVzbGludC1kaXNhYmxlICovXG5jb25zdCBrZXlzID0gT2JqZWN0LmtleXM7XG5mdW5jdGlvbiBpZGVudGl0eSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiBpc0Jvb2xlYW4odmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSBcImJvb2xlYW5cIjtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAmJiB0eXBlb2YgdmFsLm5vZGVUeXBlID09PSBcIm51bWJlclwiO1xufVxuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiO1xufVxuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSBcIm51bWJlclwiO1xufVxuZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSBcIm9iamVjdFwiID8gdmFsICE9PSBudWxsIDogaXNGdW5jdGlvbih2YWwpO1xufVxuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09IFwiZnVuY3Rpb25cIjtcbn1cbmZ1bmN0aW9uIGlzQ29tcG9uZW50Q2xhc3MoQ29tcG9uZW50KSB7XG4gIHJldHVybiAhIShDb21wb25lbnQgJiYgQ29tcG9uZW50LmlzQ29tcG9uZW50KTtcbn1cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKG9iaikge1xuICByZXR1cm4gKFxuICAgIGlzT2JqZWN0KG9iaikgJiZcbiAgICB0eXBlb2Ygb2JqLmxlbmd0aCA9PT0gXCJudW1iZXJcIiAmJlxuICAgIHR5cGVvZiBvYmoubm9kZVR5cGUgIT09IFwibnVtYmVyXCJcbiAgKTtcbn1cbmZ1bmN0aW9uIGZvckVhY2godmFsdWUsIGZuKSB7XG4gIGlmICghdmFsdWUpIHJldHVybjtcbiAgZm9yIChjb25zdCBrZXkgb2Yga2V5cyh2YWx1ZSkpIHtcbiAgICBmbih2YWx1ZVtrZXldLCBrZXkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlZigpIHtcbiAgcmV0dXJuIE9iamVjdC5zZWFsKHtcbiAgICBjdXJyZW50OiBudWxsLFxuICB9KTtcbn1cbmZ1bmN0aW9uIGlzUmVmKG1heWJlUmVmKSB7XG4gIHJldHVybiBpc09iamVjdChtYXliZVJlZikgJiYgXCJjdXJyZW50XCIgaW4gbWF5YmVSZWY7XG59XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgb25cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iL2I4N2FhYmRmZTFiNzQ2MWU3MzMxYWJiMzYwMWQ5ZTZiYjI3NTQ0YmMvTElDRU5TRVxuICovXG5cbi8qKlxuICogQ1NTIHByb3BlcnRpZXMgd2hpY2ggYWNjZXB0IG51bWJlcnMgYnV0IGFyZSBub3QgaW4gdW5pdHMgb2YgXCJweFwiLlxuICovXG5jb25zdCBpc1VuaXRsZXNzTnVtYmVyID0ge1xuICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogMCxcbiAgYm9yZGVySW1hZ2VPdXRzZXQ6IDAsXG4gIGJvcmRlckltYWdlU2xpY2U6IDAsXG4gIGJvcmRlckltYWdlV2lkdGg6IDAsXG4gIGJveEZsZXg6IDAsXG4gIGJveEZsZXhHcm91cDogMCxcbiAgYm94T3JkaW5hbEdyb3VwOiAwLFxuICBjb2x1bW5Db3VudDogMCxcbiAgY29sdW1uczogMCxcbiAgZmxleDogMCxcbiAgZmxleEdyb3c6IDAsXG4gIGZsZXhQb3NpdGl2ZTogMCxcbiAgZmxleFNocmluazogMCxcbiAgZmxleE5lZ2F0aXZlOiAwLFxuICBmbGV4T3JkZXI6IDAsXG4gIGdyaWRBcmVhOiAwLFxuICBncmlkUm93OiAwLFxuICBncmlkUm93RW5kOiAwLFxuICBncmlkUm93U3BhbjogMCxcbiAgZ3JpZFJvd1N0YXJ0OiAwLFxuICBncmlkQ29sdW1uOiAwLFxuICBncmlkQ29sdW1uRW5kOiAwLFxuICBncmlkQ29sdW1uU3BhbjogMCxcbiAgZ3JpZENvbHVtblN0YXJ0OiAwLFxuICBmb250V2VpZ2h0OiAwLFxuICBsaW5lQ2xhbXA6IDAsXG4gIGxpbmVIZWlnaHQ6IDAsXG4gIG9wYWNpdHk6IDAsXG4gIG9yZGVyOiAwLFxuICBvcnBoYW5zOiAwLFxuICB0YWJTaXplOiAwLFxuICB3aWRvd3M6IDAsXG4gIHpJbmRleDogMCxcbiAgem9vbTogMCxcbiAgLy8gU1ZHLXJlbGF0ZWQgcHJvcGVydGllc1xuICBmaWxsT3BhY2l0eTogMCxcbiAgZmxvb2RPcGFjaXR5OiAwLFxuICBzdG9wT3BhY2l0eTogMCxcbiAgc3Ryb2tlRGFzaGFycmF5OiAwLFxuICBzdHJva2VEYXNob2Zmc2V0OiAwLFxuICBzdHJva2VNaXRlcmxpbWl0OiAwLFxuICBzdHJva2VPcGFjaXR5OiAwLFxuICBzdHJva2VXaWR0aDogMCxcbn07XG5cbi8qKlxuICogQHBhcmFtIHByZWZpeCB2ZW5kb3Itc3BlY2lmaWMgcHJlZml4LCBlZzogV2Via2l0XG4gKiBAcGFyYW0ga2V5IHN0eWxlIG5hbWUsIGVnOiB0cmFuc2l0aW9uRHVyYXRpb25cbiAqIEByZXR1cm4gc3R5bGUgbmFtZSBwcmVmaXhlZCB3aXRoIGBwcmVmaXhgLCBwcm9wZXJseSBjYW1lbENhc2VkLCBlZzpcbiAqIFdlYmtpdFRyYW5zaXRpb25EdXJhdGlvblxuICovXG5mdW5jdGlvbiBwcmVmaXhLZXkocHJlZml4LCBrZXkpIHtcbiAgcmV0dXJuIHByZWZpeCArIGtleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zdWJzdHJpbmcoMSk7XG59XG5cbi8qKlxuICogU3VwcG9ydCBzdHlsZSBuYW1lcyB0aGF0IG1heSBjb21lIHBhc3NlZCBpbiBwcmVmaXhlZCBieSBhZGRpbmcgcGVybXV0YXRpb25zXG4gKiBvZiB2ZW5kb3IgcHJlZml4ZXMuXG4gKi9cbmNvbnN0IHByZWZpeGVzID0gW1wiV2Via2l0XCIsIFwibXNcIiwgXCJNb3pcIiwgXCJPXCJdO1xuLy8gVXNpbmcgT2JqZWN0LmtleXMgaGVyZSwgb3IgZWxzZSB0aGUgdmFuaWxsYSBmb3ItaW4gbG9vcCBtYWtlcyBJRTggZ28gaW50byBhblxuLy8gaW5maW5pdGUgbG9vcCwgYmVjYXVzZSBpdCBpdGVyYXRlcyBvdmVyIHRoZSBuZXdseSBhZGRlZCBwcm9wcyB0b28uXG5rZXlzKGlzVW5pdGxlc3NOdW1iZXIpLmZvckVhY2goKHByb3ApID0+IHtcbiAgcHJlZml4ZXMuZm9yRWFjaCgocHJlZml4KSA9PiB7XG4gICAgaXNVbml0bGVzc051bWJlcltwcmVmaXhLZXkocHJlZml4LCBwcm9wKV0gPSAwOyAvLyBpc1VuaXRsZXNzTnVtYmVyW3Byb3BdXG4gIH0pO1xufSk7XG5cbmNvbnN0IGpzeERvbVR5cGUgPSBTeW1ib2wuZm9yKFwianN4LWRvbTp0eXBlXCIpO1xudmFyIEpzeERvbVR5cGUgPSAvKiNfX1BVUkVfXyovIChmdW5jdGlvbiAoSnN4RG9tVHlwZSkge1xuICBKc3hEb21UeXBlW1wiU2hhZG93Um9vdFwiXSA9IFwiU2hhZG93Um9vdFwiO1xuICByZXR1cm4gSnN4RG9tVHlwZTtcbn0pKEpzeERvbVR5cGUgfHwge30pO1xuZnVuY3Rpb24gU2hhZG93Um9vdChfcmVmKSB7XG4gIGxldCB7IGNoaWxkcmVuLCByZWYsIC4uLmF0dHIgfSA9IF9yZWY7XG4gIHJldHVybiB7XG4gICAgW2pzeERvbVR5cGVdOiBKc3hEb21UeXBlLlNoYWRvd1Jvb3QsXG4gICAgcmVmLFxuICAgIGF0dHIsXG4gICAgY2hpbGRyZW4sXG4gIH07XG59XG5mdW5jdGlvbiBpc1NoYWRvd1Jvb3QoZWwpIHtcbiAgcmV0dXJuIGVsICE9IG51bGwgJiYgZWxbanN4RG9tVHlwZV0gPT09IEpzeERvbVR5cGUuU2hhZG93Um9vdDtcbn1cblxuY29uc3QgU1ZHTmFtZXNwYWNlID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xuY29uc3QgWExpbmtOYW1lc3BhY2UgPSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIjtcbmNvbnN0IFhNTE5hbWVzcGFjZSA9IFwiaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlXCI7XG5cbi8vIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvanN4LWluLWRlcHRoLmh0bWwjYm9vbGVhbnMtbnVsbC1hbmQtdW5kZWZpbmVkLWFyZS1pZ25vcmVkXG4vLyBFbXVsYXRlIEpTWCBFeHByZXNzaW9uIGxvZ2ljIHRvIGlnbm9yZSBjZXJ0YWluIHR5cGUgb2YgY2hpbGRyZW4gb3IgY2xhc3NOYW1lLlxuZnVuY3Rpb24gaXNWaXNpYmxlQ2hpbGQodmFsdWUpIHtcbiAgcmV0dXJuICFpc0Jvb2xlYW4odmFsdWUpICYmIHZhbHVlICE9IG51bGw7XG59XG5cbi8qKlxuICogQ29udmVydCBhIGB2YWx1ZWAgdG8gYSBjbGFzc05hbWUgc3RyaW5nLlxuICogYHZhbHVlYCBjYW4gYmUgYSBzdHJpbmcsIGFuIGFycmF5IG9yIGEgYERpY3Rpb25hcnk8Ym9vbGVhbj5gLlxuICovXG5mdW5jdGlvbiBjbGFzc05hbWUodmFsdWUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLm1hcChjbGFzc05hbWUpLmZpbHRlcihCb29sZWFuKS5qb2luKFwiIFwiKTtcbiAgfSBlbHNlIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIHZhbHVlKSB7XG4gICAgICByZXR1cm4gY2xhc3NOYW1lKEFycmF5LmZyb20odmFsdWUpKTtcbiAgICB9XG4gICAgcmV0dXJuIGtleXModmFsdWUpXG4gICAgICAuZmlsdGVyKChrKSA9PiB2YWx1ZVtrXSlcbiAgICAgIC5qb2luKFwiIFwiKTtcbiAgfSBlbHNlIGlmIChpc1Zpc2libGVDaGlsZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gXCJcIiArIHZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBcIlwiO1xuICB9XG59XG5jb25zdCBzdmcgPSB7XG4gIGFuaW1hdGU6IDAsXG4gIGNpcmNsZTogMCxcbiAgY2xpcFBhdGg6IDAsXG4gIGRlZnM6IDAsXG4gIGRlc2M6IDAsXG4gIGVsbGlwc2U6IDAsXG4gIGZlQmxlbmQ6IDAsXG4gIGZlQ29sb3JNYXRyaXg6IDAsXG4gIGZlQ29tcG9uZW50VHJhbnNmZXI6IDAsXG4gIGZlQ29tcG9zaXRlOiAwLFxuICBmZUNvbnZvbHZlTWF0cml4OiAwLFxuICBmZURpZmZ1c2VMaWdodGluZzogMCxcbiAgZmVEaXNwbGFjZW1lbnRNYXA6IDAsXG4gIGZlRGlzdGFudExpZ2h0OiAwLFxuICBmZUZsb29kOiAwLFxuICBmZUZ1bmNBOiAwLFxuICBmZUZ1bmNCOiAwLFxuICBmZUZ1bmNHOiAwLFxuICBmZUZ1bmNSOiAwLFxuICBmZUdhdXNzaWFuQmx1cjogMCxcbiAgZmVJbWFnZTogMCxcbiAgZmVNZXJnZTogMCxcbiAgZmVNZXJnZU5vZGU6IDAsXG4gIGZlTW9ycGhvbG9neTogMCxcbiAgZmVPZmZzZXQ6IDAsXG4gIGZlUG9pbnRMaWdodDogMCxcbiAgZmVTcGVjdWxhckxpZ2h0aW5nOiAwLFxuICBmZVNwb3RMaWdodDogMCxcbiAgZmVUaWxlOiAwLFxuICBmZVR1cmJ1bGVuY2U6IDAsXG4gIGZpbHRlcjogMCxcbiAgZm9yZWlnbk9iamVjdDogMCxcbiAgZzogMCxcbiAgaW1hZ2U6IDAsXG4gIGxpbmU6IDAsXG4gIGxpbmVhckdyYWRpZW50OiAwLFxuICBtYXJrZXI6IDAsXG4gIG1hc2s6IDAsXG4gIG1ldGFkYXRhOiAwLFxuICBwYXRoOiAwLFxuICBwYXR0ZXJuOiAwLFxuICBwb2x5Z29uOiAwLFxuICBwb2x5bGluZTogMCxcbiAgcmFkaWFsR3JhZGllbnQ6IDAsXG4gIHJlY3Q6IDAsXG4gIHN0b3A6IDAsXG4gIHN2ZzogMCxcbiAgc3dpdGNoOiAwLFxuICBzeW1ib2w6IDAsXG4gIHRleHQ6IDAsXG4gIHRleHRQYXRoOiAwLFxuICB0c3BhbjogMCxcbiAgdXNlOiAwLFxuICB2aWV3OiAwLFxufTtcbmNvbnN0IG5vblByZXNlbnRhdGlvblNWR0F0dHJpYnV0ZXMgPVxuICAvXihhKGxsfHR8dSl8YmFzZVtGUF18YyhhbHxsaXBQYXRoVXxvbil8ZGl8ZWR8ZXh8ZmlsdGVyW1JVXXxnKGx5cGhSfHIpfGtlfGwoZW58aW0pfG1hKHJrZXJbSFVXXXxzKXxufHBhdHxwcnxwb2ludFteZV18cmVbXm5dfHNbcHV5XXxzdFteb3JdfHRhfHRleHRMfHZpfHhDfHl8eikvO1xuZnVuY3Rpb24gY3JlYXRlRmFjdG9yeSh0YWcpIHtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQuYmluZChudWxsLCB0YWcpO1xufVxuZnVuY3Rpb24gRnJhZ21lbnQoYXR0cikge1xuICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgYXBwZW5kQ2hpbGQoYXR0ci5jaGlsZHJlbiwgZnJhZ21lbnQpO1xuICByZXR1cm4gZnJhZ21lbnQ7XG59XG5jbGFzcyBDb21wb25lbnQge1xuICBzdGF0aWMgaXNDb21wb25lbnQgPSB0cnVlO1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbmZ1bmN0aW9uIGluaXRDb21wb25lbnRDbGFzcyhDbGFzcywgYXR0ciwgY2hpbGRyZW4pIHtcbiAgYXR0ciA9IHtcbiAgICAuLi5hdHRyLFxuICAgIGNoaWxkcmVuLFxuICB9O1xuICBjb25zdCBpbnN0YW5jZSA9IG5ldyBDbGFzcyhhdHRyKTtcbiAgY29uc3Qgbm9kZSA9IGluc3RhbmNlLnJlbmRlcigpO1xuICBpZiAoXCJyZWZcIiBpbiBhdHRyKSB7XG4gICAgYXR0YWNoUmVmKGF0dHIucmVmLCBpbnN0YW5jZSk7XG4gIH1cbiAgcmV0dXJuIG5vZGU7XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmZ1bmN0aW9uIGpzeCh0YWcsIF9yZWYpIHtcbiAgbGV0IHsgY2hpbGRyZW4sIC4uLmF0dHIgfSA9IF9yZWY7XG4gIGlmICghYXR0ci5uYW1lc3BhY2VVUkkgJiYgc3ZnW3RhZ10gPT09IDApIHtcbiAgICBhdHRyID0ge1xuICAgICAgLi4uYXR0cixcbiAgICAgIG5hbWVzcGFjZVVSSTogU1ZHTmFtZXNwYWNlLFxuICAgIH07XG4gIH1cbiAgbGV0IG5vZGU7XG4gIGlmIChpc1N0cmluZyh0YWcpKSB7XG4gICAgbm9kZSA9IGF0dHIubmFtZXNwYWNlVVJJXG4gICAgICA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhhdHRyLm5hbWVzcGFjZVVSSSwgdGFnKVxuICAgICAgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgYXR0cmlidXRlcyhhdHRyLCBub2RlKTtcbiAgICBhcHBlbmRDaGlsZChjaGlsZHJlbiwgbm9kZSk7XG5cbiAgICAvLyBTZWxlY3QgYG9wdGlvbmAgZWxlbWVudHMgaW4gYHNlbGVjdGBcbiAgICBpZiAobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MU2VsZWN0RWxlbWVudCAmJiBhdHRyLnZhbHVlICE9IG51bGwpIHtcbiAgICAgIGlmIChhdHRyLm11bHRpcGxlID09PSB0cnVlICYmIEFycmF5LmlzQXJyYXkoYXR0ci52YWx1ZSkpIHtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gYXR0ci52YWx1ZS5tYXAoKHZhbHVlKSA9PiBTdHJpbmcodmFsdWUpKTtcbiAgICAgICAgbm9kZVxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwib3B0aW9uXCIpXG4gICAgICAgICAgLmZvckVhY2goXG4gICAgICAgICAgICAob3B0aW9uKSA9PiAob3B0aW9uLnNlbGVjdGVkID0gdmFsdWVzLmluY2x1ZGVzKG9wdGlvbi52YWx1ZSkpLFxuICAgICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlLnZhbHVlID0gYXR0ci52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgYXR0YWNoUmVmKGF0dHIucmVmLCBub2RlKTtcbiAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKHRhZykpIHtcbiAgICAvLyBDdXN0b20gZWxlbWVudHMuXG4gICAgaWYgKGlzT2JqZWN0KHRhZy5kZWZhdWx0UHJvcHMpKSB7XG4gICAgICBhdHRyID0ge1xuICAgICAgICAuLi50YWcuZGVmYXVsdFByb3BzLFxuICAgICAgICAuLi5hdHRyLFxuICAgICAgfTtcbiAgICB9XG4gICAgbm9kZSA9IGlzQ29tcG9uZW50Q2xhc3ModGFnKVxuICAgICAgPyBpbml0Q29tcG9uZW50Q2xhc3ModGFnLCBhdHRyLCBjaGlsZHJlbilcbiAgICAgIDogdGFnKHtcbiAgICAgICAgICAuLi5hdHRyLFxuICAgICAgICAgIGNoaWxkcmVuLFxuICAgICAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkIEpTWCBlbGVtZW50IHR5cGU6ICR7dGFnfWApO1xuICB9XG4gIHJldHVybiBub2RlO1xufVxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWcsIGF0dHIpIHtcbiAgZm9yIChcbiAgICB2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsXG4gICAgICBjaGlsZHJlbiA9IG5ldyBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksXG4gICAgICBfa2V5MiA9IDI7XG4gICAgX2tleTIgPCBfbGVuO1xuICAgIF9rZXkyKytcbiAgKSB7XG4gICAgY2hpbGRyZW5bX2tleTIgLSAyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gIH1cbiAgaWYgKGlzU3RyaW5nKGF0dHIpIHx8IEFycmF5LmlzQXJyYXkoYXR0cikpIHtcbiAgICBjaGlsZHJlbi51bnNoaWZ0KGF0dHIpO1xuICAgIGF0dHIgPSB7fTtcbiAgfVxuICBhdHRyID0gYXR0ciB8fCB7fTtcbiAgaWYgKGF0dHIuY2hpbGRyZW4gIT0gbnVsbCAmJiAhY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgKHsgY2hpbGRyZW4sIC4uLmF0dHIgfSA9IGF0dHIpO1xuICB9XG4gIHJldHVybiBqc3goXG4gICAgdGFnLFxuICAgIHtcbiAgICAgIC4uLmF0dHIsXG4gICAgICBjaGlsZHJlbixcbiAgICB9LFxuICAgIGF0dHIua2V5LFxuICApO1xufVxuZnVuY3Rpb24gYXR0YWNoUmVmKHJlZiwgbm9kZSkge1xuICBpZiAoaXNSZWYocmVmKSkge1xuICAgIHJlZi5jdXJyZW50ID0gbm9kZTtcbiAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKHJlZikpIHtcbiAgICByZWYobm9kZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGFwcGVuZENoaWxkKGNoaWxkLCBub2RlKSB7XG4gIGlmIChpc0FycmF5TGlrZShjaGlsZCkpIHtcbiAgICBhcHBlbmRDaGlsZHJlbihjaGlsZCwgbm9kZSk7XG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcoY2hpbGQpIHx8IGlzTnVtYmVyKGNoaWxkKSkge1xuICAgIGFwcGVuZENoaWxkVG9Ob2RlKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNoaWxkKSwgbm9kZSk7XG4gIH0gZWxzZSBpZiAoY2hpbGQgPT09IG51bGwpIHtcbiAgICBhcHBlbmRDaGlsZFRvTm9kZShkb2N1bWVudC5jcmVhdGVDb21tZW50KFwiXCIpLCBub2RlKTtcbiAgfSBlbHNlIGlmIChpc0VsZW1lbnQoY2hpbGQpKSB7XG4gICAgYXBwZW5kQ2hpbGRUb05vZGUoY2hpbGQsIG5vZGUpO1xuICB9IGVsc2UgaWYgKGlzU2hhZG93Um9vdChjaGlsZCkpIHtcbiAgICBjb25zdCBzaGFkb3dSb290ID0gbm9kZS5hdHRhY2hTaGFkb3coY2hpbGQuYXR0cik7XG4gICAgYXBwZW5kQ2hpbGQoY2hpbGQuY2hpbGRyZW4sIHNoYWRvd1Jvb3QpO1xuICAgIGF0dGFjaFJlZihjaGlsZC5yZWYsIHNoYWRvd1Jvb3QpO1xuICB9XG59XG5mdW5jdGlvbiBhcHBlbmRDaGlsZHJlbihjaGlsZHJlbiwgbm9kZSkge1xuICBmb3IgKGNvbnN0IGNoaWxkIG9mIFsuLi5jaGlsZHJlbl0pIHtcbiAgICBhcHBlbmRDaGlsZChjaGlsZCwgbm9kZSk7XG4gIH1cbiAgcmV0dXJuIG5vZGU7XG59XG5mdW5jdGlvbiBhcHBlbmRDaGlsZFRvTm9kZShjaGlsZCwgbm9kZSkge1xuICBpZiAobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MVGVtcGxhdGVFbGVtZW50KSB7XG4gICAgbm9kZS5jb250ZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgfSBlbHNlIHtcbiAgICBub2RlLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgfVxufVxuZnVuY3Rpb24gbm9ybWFsaXplQXR0cmlidXRlKHMsIHNlcGFyYXRvcikge1xuICByZXR1cm4gcy5yZXBsYWNlKC9bQS1aXS9nLCAobWF0Y2gpID0+IHNlcGFyYXRvciArIG1hdGNoLnRvTG93ZXJDYXNlKCkpO1xufVxuZnVuY3Rpb24gc3R5bGUobm9kZSwgdmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT09IGZhbHNlKTtcbiAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICB2YWx1ZS5mb3JFYWNoKCh2KSA9PiBzdHlsZShub2RlLCB2KSk7XG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCB2YWx1ZSk7XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgZm9yRWFjaCh2YWx1ZSwgKHZhbCwga2V5KSA9PiB7XG4gICAgICBpZiAoa2V5LmluZGV4T2YoXCItXCIpID09PSAwKSB7XG4gICAgICAgIC8vIENTUyBjdXN0b20gcHJvcGVydGllcyAodmFyaWFibGVzKSBzdGFydCB3aXRoIGAtYCAoZS5nLiBgLS1teS12YXJpYWJsZWApXG4gICAgICAgIC8vIGFuZCBtdXN0IGJlIGFzc2lnbmVkIHZpYSBgc2V0UHJvcGVydHlgLlxuICAgICAgICBub2RlLnN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFsKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNOdW1iZXIodmFsKSAmJiBpc1VuaXRsZXNzTnVtYmVyW2tleV0gIT09IDApIHtcbiAgICAgICAgbm9kZS5zdHlsZVtrZXldID0gdmFsICsgXCJweFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZS5zdHlsZVtrZXldID0gdmFsO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5mdW5jdGlvbiBhdHRyaWJ1dGUoa2V5LCB2YWx1ZSwgbm9kZSkge1xuICBzd2l0Y2ggKGtleSkge1xuICAgIGNhc2UgXCJ4bGlua0FjdHVhdGVcIjpcbiAgICBjYXNlIFwieGxpbmtBcmNyb2xlXCI6XG4gICAgY2FzZSBcInhsaW5rSHJlZlwiOlxuICAgIGNhc2UgXCJ4bGlua1JvbGVcIjpcbiAgICBjYXNlIFwieGxpbmtTaG93XCI6XG4gICAgY2FzZSBcInhsaW5rVGl0bGVcIjpcbiAgICBjYXNlIFwieGxpbmtUeXBlXCI6XG4gICAgICBhdHRyTlMobm9kZSwgWExpbmtOYW1lc3BhY2UsIG5vcm1hbGl6ZUF0dHJpYnV0ZShrZXksIFwiOlwiKSwgdmFsdWUpO1xuICAgICAgcmV0dXJuO1xuICAgIGNhc2UgXCJ4bWxuc1hsaW5rXCI6XG4gICAgICBhdHRyKG5vZGUsIG5vcm1hbGl6ZUF0dHJpYnV0ZShrZXksIFwiOlwiKSwgdmFsdWUpO1xuICAgICAgcmV0dXJuO1xuICAgIGNhc2UgXCJ4bWxCYXNlXCI6XG4gICAgY2FzZSBcInhtbExhbmdcIjpcbiAgICBjYXNlIFwieG1sU3BhY2VcIjpcbiAgICAgIGF0dHJOUyhub2RlLCBYTUxOYW1lc3BhY2UsIG5vcm1hbGl6ZUF0dHJpYnV0ZShrZXksIFwiOlwiKSwgdmFsdWUpO1xuICAgICAgcmV0dXJuO1xuICB9XG4gIHN3aXRjaCAoa2V5KSB7XG4gICAgY2FzZSBcImh0bWxGb3JcIjpcbiAgICAgIGF0dHIobm9kZSwgXCJmb3JcIiwgdmFsdWUpO1xuICAgICAgcmV0dXJuO1xuICAgIGNhc2UgXCJkYXRhc2V0XCI6XG4gICAgICBmb3JFYWNoKHZhbHVlLCAoZGF0YVZhbHVlLCBkYXRhS2V5KSA9PiB7XG4gICAgICAgIGlmIChkYXRhVmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgIG5vZGUuZGF0YXNldFtkYXRhS2V5XSA9IGRhdGFWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgY2FzZSBcImlubmVySFRNTFwiOlxuICAgIGNhc2UgXCJpbm5lclRleHRcIjpcbiAgICBjYXNlIFwidGV4dENvbnRlbnRcIjpcbiAgICAgIGlmIChpc1Zpc2libGVDaGlsZCh2YWx1ZSkpIHtcbiAgICAgICAgbm9kZVtrZXldID0gdmFsdWU7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgY2FzZSBcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCI6XG4gICAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgIG5vZGUuaW5uZXJIVE1MID0gdmFsdWVbXCJfX2h0bWxcIl07XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgY2FzZSBcInZhbHVlXCI6XG4gICAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCBub2RlIGluc3RhbmNlb2Ygd2luZG93LkhUTUxTZWxlY3RFbGVtZW50KSB7XG4gICAgICAgIC8vIHNraXAgbnVsbGlzaCB2YWx1ZXNcbiAgICAgICAgLy8gZm9yIGA8c2VsZWN0PmAgYXBwbHkgdmFsdWUgYWZ0ZXIgYXBwZW5kaW5nIGA8b3B0aW9uPmAgZWxlbWVudHNcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIGlmIChub2RlIGluc3RhbmNlb2Ygd2luZG93LkhUTUxUZXh0QXJlYUVsZW1lbnQpIHtcbiAgICAgICAgbm9kZS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyB1c2UgYXR0cmlidXRlIGZvciBvdGhlciBlbGVtZW50c1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInNwZWxsQ2hlY2tcIjpcbiAgICAgIG5vZGUuc3BlbGxjaGVjayA9IHZhbHVlO1xuICAgICAgcmV0dXJuO1xuICAgIGNhc2UgXCJjbGFzc1wiOlxuICAgIGNhc2UgXCJjbGFzc05hbWVcIjpcbiAgICAgIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgICB2YWx1ZShub2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF0dHIobm9kZSwgXCJjbGFzc1wiLCBjbGFzc05hbWUodmFsdWUpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICBjYXNlIFwicmVmXCI6XG4gICAgY2FzZSBcIm5hbWVzcGFjZVVSSVwiOlxuICAgICAgcmV0dXJuO1xuICAgIGNhc2UgXCJzdHlsZVwiOlxuICAgICAgc3R5bGUobm9kZSwgdmFsdWUpO1xuICAgICAgcmV0dXJuO1xuICAgIGNhc2UgXCJvblwiOlxuICAgIGNhc2UgXCJvbkNhcHR1cmVcIjpcbiAgICAgIGZvckVhY2godmFsdWUsIChldmVudEhhbmRsZXIsIGV2ZW50TmFtZSkgPT4ge1xuICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudEhhbmRsZXIsIGtleSA9PT0gXCJvbkNhcHR1cmVcIik7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICAvLyBmYWxsdGhyb3VnaFxuICB9XG4gIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgIGlmIChrZXlbMF0gPT09IFwib1wiICYmIGtleVsxXSA9PT0gXCJuXCIpIHtcbiAgICAgIGxldCBhdHRyaWJ1dGUgPSBrZXkudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNvbnN0IHVzZUNhcHR1cmUgPSBhdHRyaWJ1dGUuZW5kc1dpdGgoXCJjYXB0dXJlXCIpO1xuICAgICAgaWYgKGF0dHJpYnV0ZSA9PT0gXCJvbmRvdWJsZWNsaWNrXCIpIHtcbiAgICAgICAgYXR0cmlidXRlID0gXCJvbmRibGNsaWNrXCI7XG4gICAgICB9IGVsc2UgaWYgKHVzZUNhcHR1cmUgJiYgYXR0cmlidXRlID09PSBcIm9uZG91YmxlY2xpY2tjYXB0dXJlXCIpIHtcbiAgICAgICAgYXR0cmlidXRlID0gXCJvbmRibGNsaWNrY2FwdHVyZVwiO1xuICAgICAgfVxuICAgICAgaWYgKCF1c2VDYXB0dXJlICYmIG5vZGVbYXR0cmlidXRlXSA9PT0gbnVsbCkge1xuICAgICAgICAvLyB1c2UgcHJvcGVydHkgd2hlbiBwb3NzaWJsZSBQUiAjMTdcbiAgICAgICAgbm9kZVthdHRyaWJ1dGVdID0gdmFsdWU7XG4gICAgICB9IGVsc2UgaWYgKHVzZUNhcHR1cmUpIHtcbiAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIGF0dHJpYnV0ZS5zdWJzdHJpbmcoMiwgYXR0cmlidXRlLmxlbmd0aCAtIDcpLFxuICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZXZlbnROYW1lO1xuICAgICAgICBpZiAoYXR0cmlidXRlIGluIHdpbmRvdykge1xuICAgICAgICAgIC8vIHN0YW5kYXJkIGV2ZW50XG4gICAgICAgICAgLy8gdGhlIEpTWCBhdHRyaWJ1dGUgY291bGQgaGF2ZSBiZWVuIFwib25Nb3VzZU92ZXJcIiBhbmQgdGhlXG4gICAgICAgICAgLy8gbWVtYmVyIG5hbWUgXCJvbm1vdXNlb3ZlclwiIGlzIG9uIHRoZSB3aW5kb3cncyBwcm90b3R5cGVcbiAgICAgICAgICAvLyBzbyBsZXQncyBhZGQgdGhlIGxpc3RlbmVyIFwibW91c2VvdmVyXCIsIHdoaWNoIGlzIGFsbCBsb3dlcmNhc2VkXG4gICAgICAgICAgY29uc3Qgc3RhbmRhcmRFdmVudE5hbWUgPSBhdHRyaWJ1dGUuc3Vic3RyaW5nKDIpO1xuICAgICAgICAgIGV2ZW50TmFtZSA9IHN0YW5kYXJkRXZlbnROYW1lO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGN1c3RvbSBldmVudFxuICAgICAgICAgIC8vIHRoZSBKU1ggYXR0cmlidXRlIGNvdWxkIGhhdmUgYmVlbiBcIm9uTXlDdXN0b21FdmVudFwiXG4gICAgICAgICAgLy8gc28gbGV0J3MgdHJpbSBvZmYgdGhlIFwib25cIiBwcmVmaXggYW5kIGxvd2VyY2FzZSB0aGUgZmlyc3QgY2hhcmFjdGVyXG4gICAgICAgICAgLy8gYW5kIGFkZCB0aGUgbGlzdGVuZXIgXCJteUN1c3RvbUV2ZW50XCJcbiAgICAgICAgICAvLyBleGNlcHQgZm9yIHRoZSBmaXJzdCBjaGFyYWN0ZXIsIHdlIGtlZXAgdGhlIGV2ZW50IG5hbWUgY2FzZVxuICAgICAgICAgIGNvbnN0IGN1c3RvbUV2ZW50TmFtZSA9IGF0dHJpYnV0ZVsyXSArIGtleS5zbGljZSgzKTtcbiAgICAgICAgICBldmVudE5hbWUgPSBjdXN0b21FdmVudE5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICBub2RlW2tleV0gPSB2YWx1ZTtcbiAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gdHJ1ZSkge1xuICAgIGF0dHIobm9kZSwga2V5LCBcIlwiKTtcbiAgfSBlbHNlIGlmICh2YWx1ZSAhPT0gZmFsc2UgJiYgdmFsdWUgIT0gbnVsbCkge1xuICAgIGlmIChub2RlIGluc3RhbmNlb2YgU1ZHRWxlbWVudCAmJiAhbm9uUHJlc2VudGF0aW9uU1ZHQXR0cmlidXRlcy50ZXN0KGtleSkpIHtcbiAgICAgIGF0dHIobm9kZSwgbm9ybWFsaXplQXR0cmlidXRlKGtleSwgXCItXCIpLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF0dHIobm9kZSwga2V5LCB2YWx1ZSk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBhdHRyKG5vZGUsIGtleSwgdmFsdWUpIHtcbiAgbm9kZS5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG59XG5mdW5jdGlvbiBhdHRyTlMobm9kZSwgbmFtZXNwYWNlLCBrZXksIHZhbHVlKSB7XG4gIG5vZGUuc2V0QXR0cmlidXRlTlMobmFtZXNwYWNlLCBrZXksIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGF0dHJpYnV0ZXMoYXR0ciwgbm9kZSkge1xuICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKGF0dHIpKSB7XG4gICAgYXR0cmlidXRlKGtleSwgYXR0cltrZXldLCBub2RlKTtcbiAgfVxuICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gdXNlVGV4dChpbml0aWFsVmFsdWUpIHtcbiAgY29uc3QgdGV4dCA9IG5ldyBUZXh0KCk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0ZXh0LCBcInRvU3RyaW5nXCIsIHtcbiAgICB2YWx1ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnRleHRDb250ZW50O1xuICAgIH0sXG4gIH0pO1xuICBmdW5jdGlvbiBzZXRUZXh0KHZhbHVlKSB7XG4gICAgdGV4dC50ZXh0Q29udGVudCA9IHZhbHVlO1xuICB9XG4gIGlmIChpbml0aWFsVmFsdWUgIT0gbnVsbCkge1xuICAgIHNldFRleHQoaW5pdGlhbFZhbHVlKTtcbiAgfVxuICByZXR1cm4gW3RleHQsIHNldFRleHRdO1xufVxuZnVuY3Rpb24gdXNlQ2xhc3NMaXN0KGluaXRpYWxWYWx1ZSkge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpZiAoaW5pdGlhbFZhbHVlICE9IG51bGwpIHtcbiAgICBkaXYuY2xhc3NOYW1lID0gY2xhc3NOYW1lKGluaXRpYWxWYWx1ZSk7XG4gIH1cbiAgbGV0IGxpc3QgPSBkaXYuY2xhc3NMaXN0O1xuICBmdW5jdGlvbiBDbGFzc0xpc3QodmFsdWUpIHtcbiAgICB2YWx1ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBsaXN0LnZhbHVlKTtcbiAgICBsaXN0ID0gdmFsdWUuY2xhc3NMaXN0O1xuICB9XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFxuICAgIENsYXNzTGlzdCxcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyh7XG4gICAgICBnZXQgc2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIGxpc3QubGVuZ3RoO1xuICAgICAgfSxcbiAgICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIGxpc3QudmFsdWU7XG4gICAgICB9LFxuICAgICAgYWRkKCkge1xuICAgICAgICBsaXN0LmFkZCguLi5hcmd1bWVudHMpO1xuICAgICAgfSxcbiAgICAgIHJlbW92ZSgpIHtcbiAgICAgICAgbGlzdC5yZW1vdmUoLi4uYXJndW1lbnRzKTtcbiAgICAgIH0sXG4gICAgICB0b2dnbGUodG9rZW4sIGZvcmNlKSB7XG4gICAgICAgIGxpc3QudG9nZ2xlKHRva2VuLCBmb3JjZSk7XG4gICAgICB9LFxuICAgICAgY29udGFpbnModG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIGxpc3QuY29udGFpbnModG9rZW4pO1xuICAgICAgfSxcbiAgICB9KSxcbiAgKTtcbiAgcmV0dXJuIENsYXNzTGlzdDtcbn1cblxuZnVuY3Rpb24gdXNlTWVtbyhmYWN0b3J5KSB7XG4gIHJldHVybiBmYWN0b3J5KCk7XG59XG5mdW5jdGlvbiBmb3J3YXJkUmVmKHJlbmRlcikge1xuICByZXR1cm4gKF9yZWYpID0+IHtcbiAgICBsZXQgeyByZWYsIC4uLnByb3BzIH0gPSBfcmVmO1xuICAgIHJldHVybiByZW5kZXIocHJvcHMsIHJlZiA/PyBjcmVhdGVSZWYoKSk7XG4gIH07XG59XG5mdW5jdGlvbiB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgaW5pdCkge1xuICBhdHRhY2hSZWYocmVmLCBpbml0KCkpO1xufVxuXG5jb25zdCBjYWNoZSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG5jb25zdCBjcmVhdGVTdHlsZWRDb21wb25lbnQgPSAobmFtZSkgPT5cbiAgZnVuY3Rpb24gKGxpc3QpIHtcbiAgICBmb3IgKFxuICAgICAgdmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLFxuICAgICAgICBpbnRlcnBvbGF0aW9ucyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksXG4gICAgICAgIF9rZXkgPSAxO1xuICAgICAgX2tleSA8IF9sZW47XG4gICAgICBfa2V5KytcbiAgICApIHtcbiAgICAgIGludGVycG9sYXRpb25zW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIChfcmVmKSA9PiB7XG4gICAgICBsZXQgeyBzdHlsZSwgLi4ucHJvcHMgfSA9IF9yZWY7XG4gICAgICBjb25zdCBsYXN0SW5kZXggPSBsaXN0Lmxlbmd0aCAtIDE7XG4gICAgICBjb25zdCBjc3MgPVxuICAgICAgICBsaXN0LnNsaWNlKDAsIGxhc3RJbmRleCkucmVkdWNlKChwLCBzLCBpKSA9PiB7XG4gICAgICAgICAgY29uc3QgaW50ZXJwb2xhdGlvbiA9IGludGVycG9sYXRpb25zW2ldO1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPVxuICAgICAgICAgICAgdHlwZW9mIGludGVycG9sYXRpb24gPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgICAgICA/IGludGVycG9sYXRpb24ocHJvcHMpXG4gICAgICAgICAgICAgIDogaW50ZXJwb2xhdGlvbjtcbiAgICAgICAgICByZXR1cm4gcCArIHMgKyBjdXJyZW50O1xuICAgICAgICB9LCBcIlwiKSArIGxpc3RbbGFzdEluZGV4XTtcbiAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KG5hbWUsIHtcbiAgICAgICAgc3R5bGU6IFtjc3MsIHN0eWxlXSxcbiAgICAgICAgLi4ucHJvcHMsXG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xuY29uc3QgYmFzZVN0eWxlZCA9IChjdXN0b21Db21wb25lbnQpID0+IGNyZWF0ZVN0eWxlZENvbXBvbmVudChjdXN0b21Db21wb25lbnQpO1xuY29uc3Qgc3R5bGVkID0gLyogQF9fUFVSRV9fICovIG5ldyBQcm94eShiYXNlU3R5bGVkLCB7XG4gIGdldChfLCBuYW1lKSB7XG4gICAgcmV0dXJuIHNldElmQWJzZW50KGNhY2hlLCBuYW1lLCAoKSA9PiBjcmVhdGVTdHlsZWRDb21wb25lbnQobmFtZSkpO1xuICB9LFxufSk7XG5mdW5jdGlvbiBzZXRJZkFic2VudChtYXAsIGtleSwgZ2V0VmFsdWUpIHtcbiAgaWYgKG1hcC5oYXMoa2V5KSkge1xuICAgIHJldHVybiBtYXAuZ2V0KGtleSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdmFsdWUgPSBnZXRWYWx1ZShrZXkpO1xuICAgIG1hcC5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59XG5cbnZhciBpbmRleCA9IHtcbiAgQ29tcG9uZW50LFxuICBQdXJlQ29tcG9uZW50OiBDb21wb25lbnQsXG4gIGNyZWF0ZUVsZW1lbnQsXG4gIEZyYWdtZW50LFxuICBTaGFkb3dSb290LFxufTtcbmZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIHJldHVybiBldmVudDtcbn1cbmZ1bmN0aW9uIHN0b3BQcm9wYWdhdGlvbihldmVudCkge1xuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgcmV0dXJuIGV2ZW50O1xufVxuXG5leHBvcnQge1xuICBDb21wb25lbnQsXG4gIEZyYWdtZW50LFxuICBDb21wb25lbnQgYXMgUHVyZUNvbXBvbmVudCxcbiAgU1ZHTmFtZXNwYWNlLFxuICBTaGFkb3dSb290LFxuICBGcmFnbWVudCBhcyBTdHJpY3RNb2RlLFxuICBjbGFzc05hbWUsXG4gIGNyZWF0ZUVsZW1lbnQsXG4gIGNyZWF0ZUZhY3RvcnksXG4gIGNyZWF0ZVJlZixcbiAgaW5kZXggYXMgZGVmYXVsdCxcbiAgZm9yd2FyZFJlZixcbiAgY3JlYXRlRWxlbWVudCBhcyBoLFxuICBpc1JlZixcbiAganN4LFxuICBqc3ggYXMganN4cyxcbiAgaWRlbnRpdHkgYXMgbWVtbyxcbiAgcHJldmVudERlZmF1bHQsXG4gIHN0b3BQcm9wYWdhdGlvbixcbiAgc3R5bGVkLFxuICBpZGVudGl0eSBhcyB1c2VDYWxsYmFjayxcbiAgdXNlQ2xhc3NMaXN0LFxuICB1c2VJbXBlcmF0aXZlSGFuZGxlLFxuICB1c2VNZW1vLFxuICBjcmVhdGVSZWYgYXMgdXNlUmVmLFxuICB1c2VUZXh0LFxufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLEtBQUMsV0FBVTtBQUFDLGVBQVMsSUFBRztBQUFDLGlCQUFTLElBQUc7QUFBQyxpQkFBTztBQUFBLFFBQUk7QUFBQyxpQkFBUyxFQUFFLEdBQUU7QUFBQyxpQkFBTyxJQUFFLGFBQVcsT0FBTyxLQUFHLGVBQWEsT0FBTyxJQUFFO0FBQUEsUUFBRTtBQUFDLGlCQUFTLEVBQUUsR0FBRTtBQUFDLGNBQUcsU0FBTyxLQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTSxJQUFJLFVBQVUscURBQW1ELENBQUM7QUFBQSxRQUFFO0FBQUMsWUFBSSxJQUFFLE1BQUssSUFBRSxRQUFPLElBQUUsQ0FBQyxDQUFDLEVBQUUsVUFBUSxFQUFFLEVBQUMsV0FBVSxLQUFJLGFBQVksSUFBRyxJQUFFLEVBQUUsV0FBUyxJQUFFLFNBQVMsR0FBRTtBQUFDLFlBQUUsQ0FBQztBQUFFLGlCQUFNLEVBQUMsV0FBVSxFQUFDO0FBQUEsUUFBQyxJQUFFLFNBQVMsR0FBRTtBQUFDLG1CQUFTLElBQUc7QUFBQSxVQUFDO0FBQUMsWUFBRSxDQUFDO0FBQUUsY0FBRyxTQUFPLEVBQUUsT0FBTSxJQUFJLFlBQVksd0VBQXdFO0FBQUUsWUFBRSxZQUFVO0FBQUUsaUJBQU8sSUFBSTtBQUFB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QUFDO0VBQ0g7QUFDRjtBQUNGLElBQU11RyxhQUFjQyxxQkFBb0JaLHNCQUFzQlksZUFBZTtBQUM3RSxJQUFNelIsU0FBeUIsb0JBQUkwUixNQUFNRixZQUFZO0VBQ25ERyxJQUFJQyxHQUFHZCxNQUFNO0FBQ1gsV0FBT2UsWUFBWWxCLE9BQU9HLE1BQU0sTUFBTUQsc0JBQXNCQyxJQUFJLENBQUM7RUFDbkU7QUFDRixDQUFDO0FBQ0QsU0FBU2UsWUFBWWhMLEtBQUsxRSxLQUFLMlAsVUFBVTtBQUN2QyxNQUFJakwsSUFBSWtMLElBQUk1UCxHQUFHLEdBQUc7QUFDaEIsV0FBTzBFLElBQUk4SyxJQUFJeFAsR0FBRztFQUNwQixPQUFPO0FBQ0wsVUFBTXZCLFFBQVFrUixTQUFTM1AsR0FBRztBQUMxQjBFLFFBQUltTCxJQUFJN1AsS0FBS3ZCLEtBQUs7QUFDbEIsV0FBT0E7RUFDVDtBQUNGO0FBU0EsU0FBU2QsZUFBZW1TLE9BQU87QUFDN0JBLFFBQU1uUyxlQUFlO0FBQ3JCLFNBQU9tUztBQUNUO0FBQ0EsU0FBU2xTLGdCQUFnQmtTLE9BQU87QUFDOUJBLFFBQU1sUyxnQkFBZ0I7QUFDdEIsU0FBT2tTO0FBQ1Q7IiwKICAibmFtZXMiOiBbIkpTWF9leHBvcnRzIiwgIl9fZXhwb3J0IiwgIkNvbXBvbmVudCIsICJGcmFnbWVudCIsICJQdXJlQ29tcG9uZW50IiwgIlNWR05hbWVzcGFjZSIsICJTaGFkb3dSb290IiwgIlN0cmljdE1vZGUiLCAiY2xhc3NOYW1lIiwgImNyZWF0ZUVsZW1lbnQiLCAiY3JlYXRlRmFjdG9yeSIsICJjcmVhdGVSZWYiLCAiZm9yd2FyZFJlZiIsICJoIiwgImlzUmVmIiwgImpzeCIsICJqc3hzIiwgIm1lbW8iLCAiaWRlbnRpdHkiLCAicHJldmVudERlZmF1bHQiLCAic3RvcFByb3BhZ2F0aW9uIiwgInN0eWxlZCIsICJ1c2VDYWxsYmFjayIsICJ1c2VDbGFzc0xpc3QiLCAidXNlSW1wZXJhdGl2ZUhhbmRsZSIsICJ1c2VNZW1vIiwgInVzZVJlZiIsICJ1c2VUZXh0IiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIl9fdG9Db21tb25KUyIsICJrZXlzIiwgIk9iamVjdCIsICJ2YWx1ZSIsICJpc0Jvb2xlYW4iLCAidmFsIiwgImlzRWxlbWVudCIsICJub2RlVHlwZSIsICJpc1N0cmluZyIsICJpc051bWJlciIsICJpc09iamVjdCIsICJpc0Z1bmN0aW9uIiwgImlzQ29tcG9uZW50Q2xhc3MiLCAiQ29tcG9uZW50MiIsICJpc0NvbXBvbmVudCIsICJpc0FycmF5TGlrZSIsICJvYmoiLCAibGVuZ3RoIiwgImZvckVhY2giLCAiZm4iLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAia2V5IiwgImVyciIsICJlIiwgImYiLCAic2VhbCIsICJjdXJyZW50IiwgIm1heWJlUmVmIiwgImlzVW5pdGxlc3NOdW1iZXIiLCAiYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQiLCAiYm9yZGVySW1hZ2VPdXRzZXQiLCAiYm9yZGVySW1hZ2VTbGljZSIsICJib3JkZXJJbWFnZVdpZHRoIiwgImJveEZsZXgiLCAiYm94RmxleEdyb3VwIiwgImJveE9yZGluYWxHcm91cCIsICJjb2x1bW5Db3VudCIsICJjb2x1bW5zIiwgImZsZXgiLCAiZmxleEdyb3ciLCAiZmxleFBvc2l0aXZlIiwgImZsZXhTaHJpbmsiLCAiZmxleE5lZ2F0aXZlIiwgImZsZXhPcmRlciIsICJncmlkQXJlYSIsICJncmlkUm93IiwgImdyaWRSb3dFbmQiLCAiZ3JpZFJvd1NwYW4iLCAiZ3JpZFJvd1N0YXJ0IiwgImdyaWRDb2x1bW4iLCAiZ3JpZENvbHVtbkVuZCIsICJncmlkQ29sdW1uU3BhbiIsICJncmlkQ29sdW1uU3RhcnQiLCAiZm9udFdlaWdodCIsICJsaW5lQ2xhbXAiLCAibGluZUhlaWdodCIsICJvcGFjaXR5IiwgIm9yZGVyIiwgIm9ycGhhbnMiLCAidGFiU2l6ZSIsICJ3aWRvd3MiLCAiekluZGV4IiwgInpvb20iLCAiZmlsbE9wYWNpdHkiLCAiZmxvb2RPcGFjaXR5IiwgInN0b3BPcGFjaXR5IiwgInN0cm9rZURhc2hhcnJheSIsICJzdHJva2VEYXNob2Zmc2V0IiwgInN0cm9rZU1pdGVybGltaXQiLCAic3Ryb2tlT3BhY2l0eSIsICJzdHJva2VXaWR0aCIsICJwcmVmaXhLZXkiLCAicHJlZml4IiwgImNoYXJBdCIsICJ0b1VwcGVyQ2FzZSIsICJzdWJzdHJpbmciLCAicHJlZml4ZXMiLCAicHJvcCIsICJqc3hEb21UeXBlIiwgIlN5bWJvbCIsICJmb3IiLCAiSnN4RG9tVHlwZSIsICJKc3hEb21UeXBlMiIsICJfcmVmIiwgImNoaWxkcmVuIiwgInJlZiIsICJhdHRyMiIsICJhdHRyIiwgImlzU2hhZG93Um9vdCIsICJlbCIsICJYTGlua05hbWVzcGFjZSIsICJYTUxOYW1lc3BhY2UiLCAiaXNWaXNpYmxlQ2hpbGQiLCAiQXJyYXkiLCAiaXNBcnJheSIsICJtYXAiLCAiZmlsdGVyIiwgIkJvb2xlYW4iLCAiam9pbiIsICJpdGVyYXRvciIsICJmcm9tIiwgImsiLCAic3ZnIiwgImFuaW1hdGUiLCAiY2lyY2xlIiwgImNsaXBQYXRoIiwgImRlZnMiLCAiZGVzYyIsICJlbGxpcHNlIiwgImZlQmxlbmQiLCAiZmVDb2xvck1hdHJpeCIsICJmZUNvbXBvbmVudFRyYW5zZmVyIiwgImZlQ29tcG9zaXRlIiwgImZlQ29udm9sdmVNYXRyaXgiLCAiZmVEaWZmdXNlTGlnaHRpbmciLCAiZmVEaXNwbGFjZW1lbnRNYXAiLCAiZmVEaXN0YW50TGlnaHQiLCAiZmVGbG9vZCIsICJmZUZ1bmNBIiwgImZlRnVuY0IiLCAiZmVGdW5jRyIsICJmZUZ1bmNSIiwgImZlR2F1c3NpYW5CbHVyIiwgImZlSW1hZ2UiLCAiZmVNZXJnZSIsICJmZU1lcmdlTm9kZSIsICJmZU1vcnBob2xvZ3kiLCAiZmVPZmZzZXQiLCAiZmVQb2ludExpZ2h0IiwgImZlU3BlY3VsYXJMaWdodGluZyIsICJmZVNwb3RMaWdodCIsICJmZVRpbGUiLCAiZmVUdXJidWxlbmNlIiwgImZvcmVpZ25PYmplY3QiLCAiZyIsICJpbWFnZSIsICJsaW5lIiwgImxpbmVhckdyYWRpZW50IiwgIm1hcmtlciIsICJtYXNrIiwgIm1ldGFkYXRhIiwgInBhdGgiLCAicGF0dGVybiIsICJwb2x5Z29uIiwgInBvbHlsaW5lIiwgInJhZGlhbEdyYWRpZW50IiwgInJlY3QiLCAic3RvcCIsICJzd2l0Y2giLCAic3ltYm9sIiwgInRleHQiLCAidGV4dFBhdGgiLCAidHNwYW4iLCAidXNlIiwgInZpZXciLCAibm9uUHJlc2VudGF0aW9uU1ZHQXR0cmlidXRlcyIsICJ0YWciLCAiYmluZCIsICJmcmFnbWVudCIsICJkb2N1bWVudCIsICJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwgImFwcGVuZENoaWxkIiwgImNvbnN0cnVjdG9yIiwgInByb3BzIiwgInJlbmRlciIsICJpbml0Q29tcG9uZW50Q2xhc3MiLCAiQ2xhc3MiLCAiaW5zdGFuY2UiLCAibm9kZSIsICJhdHRhY2hSZWYiLCAibmFtZXNwYWNlVVJJIiwgImNyZWF0ZUVsZW1lbnROUyIsICJhdHRyaWJ1dGVzIiwgIndpbmRvdyIsICJIVE1MU2VsZWN0RWxlbWVudCIsICJtdWx0aXBsZSIsICJ2YWx1ZXMiLCAiU3RyaW5nIiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAib3B0aW9uIiwgInNlbGVjdGVkIiwgImluY2x1ZGVzIiwgImRlZmF1bHRQcm9wcyIsICJUeXBlRXJyb3IiLCAiY29uY2F0IiwgIl9sZW4iLCAiYXJndW1lbnRzIiwgIl9rZXkyIiwgInVuc2hpZnQiLCAiY2hpbGQiLCAiYXBwZW5kQ2hpbGRyZW4iLCAiYXBwZW5kQ2hpbGRUb05vZGUiLCAiY3JlYXRlVGV4dE5vZGUiLCAiY3JlYXRlQ29tbWVudCIsICJzaGFkb3dSb290IiwgImF0dGFjaFNoYWRvdyIsICJfaSIsICJfYXJyIiwgIkhUTUxUZW1wbGF0ZUVsZW1lbnQiLCAiY29udGVudCIsICJub3JtYWxpemVBdHRyaWJ1dGUiLCAic2VwYXJhdG9yIiwgInJlcGxhY2UiLCAibWF0Y2giLCAidG9Mb3dlckNhc2UiLCAic3R5bGUiLCAidiIsICJzZXRBdHRyaWJ1dGUiLCAiaW5kZXhPZiIsICJzZXRQcm9wZXJ0eSIsICJhdHRyaWJ1dGUiLCAiYXR0ck5TIiwgImRhdGFWYWx1ZSIsICJkYXRhS2V5IiwgImRhdGFzZXQiLCAiaW5uZXJIVE1MIiwgIkhUTUxUZXh0QXJlYUVsZW1lbnQiLCAic3BlbGxjaGVjayIsICJldmVudEhhbmRsZXIiLCAiZXZlbnROYW1lIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiYXR0cmlidXRlMiIsICJ1c2VDYXB0dXJlIiwgImVuZHNXaXRoIiwgInN0YW5kYXJkRXZlbnROYW1lIiwgImN1c3RvbUV2ZW50TmFtZSIsICJzbGljZSIsICJTVkdFbGVtZW50IiwgInRlc3QiLCAibmFtZXNwYWNlIiwgInNldEF0dHJpYnV0ZU5TIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgImluaXRpYWxWYWx1ZSIsICJUZXh0IiwgImRlZmluZVByb3BlcnR5IiwgInRleHRDb250ZW50IiwgInNldFRleHQiLCAiZGl2IiwgImxpc3QiLCAiY2xhc3NMaXN0IiwgIkNsYXNzTGlzdCIsICJkZWZpbmVQcm9wZXJ0aWVzIiwgImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCAic2l6ZSIsICJhZGQiLCAicmVtb3ZlIiwgInRvZ2dsZSIsICJ0b2tlbiIsICJmb3JjZSIsICJjb250YWlucyIsICJmYWN0b3J5IiwgImluaXQiLCAiY2FjaGUiLCAiTWFwIiwgImNyZWF0ZVN0eWxlZENvbXBvbmVudCIsICJuYW1lIiwgImludGVycG9sYXRpb25zIiwgIl9rZXkiLCAic3R5bGUyIiwgImxhc3RJbmRleCIsICJjc3MiLCAicmVkdWNlIiwgInAiLCAiaSIsICJpbnRlcnBvbGF0aW9uIiwgImJhc2VTdHlsZWQiLCAiY3VzdG9tQ29tcG9uZW50IiwgIlByb3h5IiwgImdldCIsICJfIiwgInNldElmQWJzZW50IiwgImdldFZhbHVlIiwgImhhcyIsICJzZXQiLCAiZXZlbnQiXQp9Cg==
