/**
 * SPDX-License-Identifier: BSD-3-Clause
 * _addText: '{{Gadget Header|license=BSD}}'
 *
 * @base {@link https://github.com/diskdance/gadget-text-spacing}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/TextSpacing}
 * @license BSD-3-Clause {@link https://github.com/diskdance/gadget-text-spacing/blob/main/LICENSE}
 */

/**
 * BSD 3-Clause License
 *
 * Copyright 2023 diskdance
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in
 *    the documentation and/or other materials provided with the
 *    distribution.
 *
 * 3. The name of the author may not be used to
 *    endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE AUTHOR “AS IS” AND ANY EXPRESS OR
 * IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
 * STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING
 * IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
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

// dist/TextSpacing/TextSpacing.js
var _templateObject;
var _templateObject2;
var _templateObject3;
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
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
//! src/TextSpacing/modules/util.ts
var import_ext_gadget = require("ext.gadget.Util");
var isInlineHTMLElement = (node) => {
  return node instanceof HTMLElement && window.getComputedStyle(node).display.includes("inline");
};
var isTextNode = (node) => {
  return node.nodeType === Node.TEXT_NODE;
};
var isVisible = (element) => {
  const style = window.getComputedStyle(element);
  return style.display !== "none" && !["hidden", "collapse"].includes(style.visibility) && Number.parseFloat(style.opacity) > 0;
};
var getNodeText = (node) => {
  return node instanceof HTMLElement ? node.innerText : node.data;
};
var splitAtIndexes = (str, indexes) => {
  const result = [];
  const normalizedIndexes = [
    // Remove duplications and sort in ascending order
    ...(0, import_ext_gadget.uniqueArray)(
      // Replace Set with uniqueArray, avoiding core-js polyfilling
      indexes.sort((a, b) => {
        return a - b;
      }).filter((i) => {
        return i >= 0 && i <= str.length;
      })
    ),
    str.length
  ];
  for (let i = 0; i < normalizedIndexes.length; i++) {
    const slice = str.slice(normalizedIndexes[i - 1], normalizedIndexes[i]);
    result[result.length] = slice;
  }
  return result;
};
//! src/TextSpacing/modules/queue.ts
var pendingActions = /* @__PURE__ */ new WeakMap();
var onIntersection = (entries) => {
  var _iterator = _createForOfIteratorHelper(entries), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const entry = _step.value;
      if (!entry.isIntersecting) {
        continue;
      }
      const element = entry.target;
      observer.unobserve(element);
      const callbacks = pendingActions.get(element);
      if (!callbacks) {
        continue;
      }
      while (true) {
        const callback = callbacks.shift();
        if (!callback) {
          break;
        }
        callback(element);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
var observer = new IntersectionObserver(onIntersection);
var queueDomMutation = (element, callback) => {
  if (!pendingActions.has(element)) {
    pendingActions.set(element, []);
  }
  if (pendingActions.get(element) !== void 0) {
    pendingActions.get(element)[pendingActions.get(element).length] = callback;
  }
  observer.observe(element);
};
//! src/TextSpacing/modules/spacing.ts
var REGEX_RANGE_CHINESE = String.raw(_templateObject || (_templateObject = _taggedTemplateLiteral(["(?:[⺀-⺙⺛-⻳⼀-⿕々〇〡-〩〸-〻㐀-䶿一-鿿豈-舘並-龎]|\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])"], ["(?:[\\u2E80-\\u2E99\\u2E9B-\\u2EF3\\u2F00-\\u2FD5\\u3005\\u3007\\u3021-\\u3029\\u3038-\\u303B\\u3400-\\u4DBF\\u4E00-\\u9FFF\\uF900-\\uFA6D\\uFA70-\\uFAD9]|\\uD81B[\\uDFE2\\uDFE3\\uDFF0\\uDFF1]|[\\uD840-\\uD868\\uD86A-\\uD86C\\uD86F-\\uD872\\uD874-\\uD879\\uD880-\\uD883][\\uDC00-\\uDFFF]|\\uD869[\\uDC00-\\uDEDF\\uDF00-\\uDFFF]|\\uD86D[\\uDC00-\\uDF38\\uDF40-\\uDFFF]|\\uD86E[\\uDC00-\\uDC1D\\uDC20-\\uDFFF]|\\uD873[\\uDC00-\\uDEA1\\uDEB0-\\uDFFF]|\\uD87A[\\uDC00-\\uDFE0]|\\uD87E[\\uDC00-\\uDE1D]|\\uD884[\\uDC00-\\uDF4A])"])));
var REGEX_RANGE_OTHER_LEFT = String.raw(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["[A-Za-z0-9@~%+=|±)}#$¥€£₤]"], ["[A-Za-z0-9@~%+=|±\\)}#$¥€£₤]"])));
var REGEX_RANGE_OTHER_RIGHT = String.raw(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["[A-Za-z0-9@~%+=|±({#$¥€£₤]"], ["[A-Za-z0-9@~%+=|±\\({#$¥€£₤]"])));
var REGEX_STR_INTER_SCRIPT = "(?:(".concat(REGEX_RANGE_CHINESE, ")(?=").concat(REGEX_RANGE_OTHER_RIGHT, ")|(").concat(REGEX_RANGE_OTHER_LEFT, ")(?=").concat(REGEX_RANGE_CHINESE, "))");
var SPACE = " ";
var WRAPPER_CLASS = "gadget-text_spacing";
var SELECTOR_ALLOWED = ["a", "abbr", "article", "aside", "b", "bdi", "big", "blockquote", "button", "caption", "center", "cite", "data", "dd", "del", "details", "dfn", "div", "dt", "em", "figcaption", "footer", "h1", "h2", "h3", "h4", "h5", "header", "i", "ins", "label", "legend", "li", "main", "mark", "option", "p", "q", "ruby", "s", "section", "small", "span", "strike", "strong", "sub", "summary", "sup", "td", "th", "time", "u"];
var SELECTOR_BLOCKED = [
  "code",
  "kbd",
  "pre",
  "rp",
  "rt",
  "samp",
  "textarea",
  "var",
  // Elements with this class are excluded
  ".gadget-nospace",
  // Editable elements
  '[contenteditable="true"]',
  // ACE editor content
  ".ace_editor",
  // Visual Editor (and 2017 Wikitext Editor) content & diff
  ".ve-ui-surface",
  ".ve-init-mw-diffPage-diff",
  // Diff
  ".diff-context",
  ".diff-addedline",
  ".diff-deletedline",
  // Diff (inline mode)
  ".mw-diff-inline-added",
  ".mw-diff-inline-deleted",
  ".mw-diff-inline-moved",
  ".mw-diff-inline-changed",
  ".mw-diff-inline-context"
];
var SELECTOR = SELECTOR_ALLOWED.map((allowed) => {
  return "".concat(allowed, ":not(").concat(SELECTOR_BLOCKED.flatMap((blocked) => {
    return blocked[0].match(/[a-z]/i) ? "".concat(blocked, " *") : [blocked, "".concat(blocked, " *")];
  }).join(","), ")");
}).join(",");
var getLeafElements = (parent) => {
  const candidates = parent.querySelectorAll(SELECTOR);
  const result = [];
  if (parent.matches(SELECTOR)) {
    result[result.length] = parent;
  }
  var _iterator2 = _createForOfIteratorHelper(candidates), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      const candidate = _step2.value;
      var _iterator3 = _createForOfIteratorHelper(candidate.childNodes), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          const childNode = _step3.value;
          if (isTextNode(childNode)) {
            result[result.length] = candidate;
            break;
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
  return result;
};
var getNextVisibleSibling = (node) => {
  let currentNode = node;
  while (true) {
    const candidate = currentNode.nextSibling;
    if (!candidate) {
      const parent = currentNode.parentElement;
      if (!parent) {
        return null;
      }
      currentNode = parent;
      continue;
    }
    if (!(candidate instanceof HTMLElement || candidate instanceof Text)) {
      currentNode = candidate;
      continue;
    }
    if (candidate instanceof HTMLElement) {
      if (!isVisible(candidate)) {
        currentNode = candidate;
        continue;
      }
      if (!isInlineHTMLElement(candidate)) {
        return null;
      }
    }
    if (candidate instanceof Text && !candidate.data.trim()) {
      currentNode = candidate;
      continue;
    }
    return candidate;
  }
};
var createSpacingWrapper = (str) => {
  const span = document.createElement("span");
  span.className = WRAPPER_CLASS;
  span.textContent = str.slice(-1);
  return [str.slice(0, -1), span];
};
var adjustSpacing = (element) => {
  const childNodes = [...element.childNodes];
  const textSpacingPosMap = /* @__PURE__ */ new Map();
  for (var _i = 0, _childNodes = childNodes; _i < _childNodes.length; _i++) {
    const child = _childNodes[_i];
    if (!(child instanceof Text)) {
      continue;
    }
    const nextSibling = getNextVisibleSibling(child);
    let testString = getNodeText(child);
    if (nextSibling) {
      var _getNodeText$;
      testString += (_getNodeText$ = getNodeText(nextSibling)[0]) !== null && _getNodeText$ !== void 0 ? _getNodeText$ : "";
    }
    const indexes = [];
    const regexTextNodeData = new RegExp(REGEX_STR_INTER_SCRIPT, "g");
    while (true) {
      const match = regexTextNodeData.exec(testString);
      if (!match) {
        break;
      }
      indexes[indexes.length] = match.index + 1;
    }
    if (!indexes.length) {
      continue;
    }
    textSpacingPosMap.set(child, indexes);
  }
  queueDomMutation(element, () => {
    var _iterator4 = _createForOfIteratorHelper(textSpacingPosMap), _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
        const [node, indexes] = _step4.value;
        const text = node.data;
        const fragments = splitAtIndexes(text, indexes);
        const replacement = fragments.slice(0, -1).flatMap((fragment) => {
          return createSpacingWrapper(fragment);
        });
        replacement[replacement.length] = fragments.at(-1);
        requestAnimationFrame(() => {
          node.replaceWith(...replacement);
        });
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  });
};
var addSpaceToString = (str) => {
  const regex = new RegExp(REGEX_STR_INTER_SCRIPT, "g");
  return str.replace(regex, "$1$2".concat(SPACE));
};
//! src/TextSpacing/TextSpacing.ts
var run = (element) => {
  const leaves = getLeafElements(element);
  var _iterator5 = _createForOfIteratorHelper(leaves), _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
      const leaf = _step5.value;
      adjustSpacing(leaf);
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
};
var mutationObserver = new MutationObserver((records) => {
  var _iterator6 = _createForOfIteratorHelper(records), _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
      const record = _step6.value;
      if (record.type !== "childList") {
        continue;
      }
      const addedNodes = [...record.addedNodes];
      if (addedNodes.some((node) => {
        return node instanceof HTMLElement && node.classList.contains(WRAPPER_CLASS);
      })) {
        continue;
      }
      for (var _i2 = 0, _addedNodes = addedNodes; _i2 < _addedNodes.length; _i2++) {
        const node = _addedNodes[_i2];
        if (node instanceof HTMLElement) {
          run(node);
        } else if (node instanceof Text) {
          const {
            parentElement
          } = node;
          if (parentElement) {
            run(parentElement);
          }
        }
      }
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
});
var main = () => {
  document.title = addSpaceToString(document.title);
  const output = document.querySelector(".mw-parser-output");
  if (!output) {
    return;
  }
  mutationObserver.observe(output, {
    subtree: true,
    childList: true
  });
  run(output);
};
$(main);

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1RleHRTcGFjaW5nL21vZHVsZXMvdXRpbC50cyIsICJzcmMvVGV4dFNwYWNpbmcvbW9kdWxlcy9xdWV1ZS50cyIsICJzcmMvVGV4dFNwYWNpbmcvbW9kdWxlcy9zcGFjaW5nLnRzIiwgInNyYy9UZXh0U3BhY2luZy9UZXh0U3BhY2luZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHt1bmlxdWVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgaXNJbmxpbmVIVE1MRWxlbWVudCA9IChub2RlOiBOb2RlKTogbm9kZSBpcyBIVE1MRWxlbWVudCA9PiB7XG5cdHJldHVybiBub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSkuZGlzcGxheS5pbmNsdWRlcygnaW5saW5lJyk7XG59O1xuXG5jb25zdCBpc1RleHROb2RlID0gKG5vZGU6IE5vZGUpOiBub2RlIGlzIFRleHQgPT4ge1xuXHRyZXR1cm4gbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREU7XG59O1xuXG5jb25zdCBpc1Zpc2libGUgPSAoZWxlbWVudDogRWxlbWVudCk6IGJvb2xlYW4gPT4ge1xuXHRjb25zdCBzdHlsZTogQ1NTU3R5bGVEZWNsYXJhdGlvbiA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuXG5cdHJldHVybiAoXG5cdFx0c3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnICYmXG5cdFx0IVsnaGlkZGVuJywgJ2NvbGxhcHNlJ10uaW5jbHVkZXMoc3R5bGUudmlzaWJpbGl0eSkgJiZcblx0XHROdW1iZXIucGFyc2VGbG9hdChzdHlsZS5vcGFjaXR5KSA+IDBcblx0KTtcbn07XG5cbmNvbnN0IGdldE5vZGVUZXh0ID0gKG5vZGU6IEhUTUxFbGVtZW50IHwgVGV4dCk6IHN0cmluZyA9PiB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1kb20tbm9kZS10ZXh0LWNvbnRlbnRcblx0cmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA/IG5vZGUuaW5uZXJUZXh0IDogbm9kZS5kYXRhO1xufTtcblxuLyoqXG4gKiBTcGxpdCBhIHN0cmluZyBiZWZvcmUgYW4gYXJyYXkgb2YgaW5kZXhlcy5cbiAqXG4gKiBGb3IgZXhhbXBsZSxcbiAqIGBgYFxuICogc3BsaXRBdEluZGV4ZXMoJzEyMzQ1Njc4OScsIFszLCA1LCA3XSk7XG4gKiBgYGBcbiAqIHJlc3VsdHMgaW5cbiAqIGBgYFxuICogWycxMjMnLCAnNDUnLCAnNjcnLCAnODknXVxuICogYGBgXG4gKlxuICogTm90ZSB0aGF0IGVtcHR5IHN0cmluZyBhcmUgaW5jbHVkZWQ6XG4gKiBgYGBcbiAqIHNwbGl0QXRJbmRleGVzKCcxMjM0NTY3ODknLCBbMCwgOV0pO1xuICogYGBgXG4gKiByZXN1bHRzIGluXG4gKiBgYGBcbiAqIFsnJywgJzEyMzQ1Njc4OScsICcnXVxuICogYGBgXG4gKlxuICogSW5kZXhlcyB0aGF0IGFyZSBuZWdhdGl2ZSBvciBncmVhdGVyIHRoYW4gdGhlIGxlbmd0aCBvZiB0aGUgc3RyaW5nIGFyZSBpZ25vcmVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgc3RyaW5nIHRvIHNwbGl0XG4gKiBAcGFyYW0ge251bWJlcltdfSBpbmRleGVzIGluZGV4ZXNcbiAqIEByZXR1cm4ge3N0cmluZ1tdfSBzcGxpdHRlZCBzdHJpbmcgZnJhZ21lbnRzXG4gKi9cbmNvbnN0IHNwbGl0QXRJbmRleGVzID0gKHN0cjogc3RyaW5nLCBpbmRleGVzOiBudW1iZXJbXSk6IHN0cmluZ1tdID0+IHtcblx0Y29uc3QgcmVzdWx0OiBzdHJpbmdbXSA9IFtdO1xuXG5cdGNvbnN0IG5vcm1hbGl6ZWRJbmRleGVzOiBudW1iZXJbXSA9IFtcblx0XHQvLyBSZW1vdmUgZHVwbGljYXRpb25zIGFuZCBzb3J0IGluIGFzY2VuZGluZyBvcmRlclxuXHRcdC4uLnVuaXF1ZUFycmF5KFxuXHRcdFx0Ly8gUmVwbGFjZSBTZXQgd2l0aCB1bmlxdWVBcnJheSwgYXZvaWRpbmcgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXHRcdFx0aW5kZXhlc1xuXHRcdFx0XHQuc29ydCgoYTogbnVtYmVyLCBiOiBudW1iZXIpOiBudW1iZXIgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBhIC0gYjtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmZpbHRlcigoaTogbnVtYmVyKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGkgPj0gMCAmJiBpIDw9IHN0ci5sZW5ndGg7XG5cdFx0XHRcdH0pXG5cdFx0KSxcblx0XHRzdHIubGVuZ3RoLFxuXHRdO1xuXG5cdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBub3JtYWxpemVkSW5kZXhlcy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHNsaWNlOiBzdHJpbmcgPSBzdHIuc2xpY2Uobm9ybWFsaXplZEluZGV4ZXNbaSAtIDFdLCBub3JtYWxpemVkSW5kZXhlc1tpXSk7XG5cdFx0cmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0gc2xpY2U7IC8vIFJlcGxhY2UgQXJyYXkjcHVzaCB0byBhdm9pZCBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IHtpc0lubGluZUhUTUxFbGVtZW50LCBpc1RleHROb2RlLCBpc1Zpc2libGUsIGdldE5vZGVUZXh0LCBzcGxpdEF0SW5kZXhlc307XG4iLCAidHlwZSBEb21NdXRhdGlvbkZ1bmMgPSAoZWxlbWVudDogRWxlbWVudCkgPT4gdm9pZDtcblxuY29uc3QgcGVuZGluZ0FjdGlvbnM6IFdlYWtNYXA8RWxlbWVudCwgRG9tTXV0YXRpb25GdW5jW10+ID0gbmV3IFdlYWtNYXA8RWxlbWVudCwgRG9tTXV0YXRpb25GdW5jW10+KCk7XG5cbmNvbnN0IG9uSW50ZXJzZWN0aW9uID0gKGVudHJpZXM6IEludGVyc2VjdGlvbk9ic2VydmVyRW50cnlbXSk6IHZvaWQgPT4ge1xuXHRmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcblx0XHRpZiAoIWVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBlbGVtZW50OiBFbGVtZW50ID0gZW50cnkudGFyZ2V0O1xuXHRcdG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTtcblxuXHRcdGNvbnN0IGNhbGxiYWNrczogRG9tTXV0YXRpb25GdW5jW10gfCB1bmRlZmluZWQgPSBwZW5kaW5nQWN0aW9ucy5nZXQoZWxlbWVudCk7XG5cdFx0aWYgKCFjYWxsYmFja3MpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRjb25zdCBjYWxsYmFjazogRG9tTXV0YXRpb25GdW5jIHwgdW5kZWZpbmVkID0gY2FsbGJhY2tzLnNoaWZ0KCk7IC8vIEZJRk9cblx0XHRcdGlmICghY2FsbGJhY2spIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRjYWxsYmFjayhlbGVtZW50KTtcblx0XHR9XG5cdH1cbn07XG5cbi8vIE9wdGltaXphdGlvbjogbGF6aWx5IGV4ZWN1dGUgcGVuZGluZyBhY3Rpb25zIG9uY2UgYW4gZWxlbWVudCBpcyB2aXNpYmxlXG5jb25zdCBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIob25JbnRlcnNlY3Rpb24pO1xuXG5jb25zdCBxdWV1ZURvbU11dGF0aW9uID0gKGVsZW1lbnQ6IEVsZW1lbnQsIGNhbGxiYWNrOiBEb21NdXRhdGlvbkZ1bmMpOiB2b2lkID0+IHtcblx0aWYgKCFwZW5kaW5nQWN0aW9ucy5oYXMoZWxlbWVudCkpIHtcblx0XHRwZW5kaW5nQWN0aW9ucy5zZXQoZWxlbWVudCwgW10pO1xuXHR9XG5cblx0aWYgKHBlbmRpbmdBY3Rpb25zLmdldChlbGVtZW50KSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0KHBlbmRpbmdBY3Rpb25zLmdldChlbGVtZW50KSBhcyBEb21NdXRhdGlvbkZ1bmNbXSlbKHBlbmRpbmdBY3Rpb25zLmdldChlbGVtZW50KSBhcyBEb21NdXRhdGlvbkZ1bmNbXSkubGVuZ3RoXSA9XG5cdFx0XHRjYWxsYmFjaztcblx0fVxuXHRvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xufTtcblxuZXhwb3J0IHtxdWV1ZURvbU11dGF0aW9ufTtcbiIsICJpbXBvcnQge2dldE5vZGVUZXh0LCBpc0lubGluZUhUTUxFbGVtZW50LCBpc1RleHROb2RlLCBpc1Zpc2libGUsIHNwbGl0QXRJbmRleGVzfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHtxdWV1ZURvbU11dGF0aW9ufSBmcm9tICcuL3F1ZXVlJztcblxuY29uc3QgUkVHRVhfUkFOR0VfQ0hJTkVTRTogc3RyaW5nID0gU3RyaW5nLnJhd2AoPzpbXFx1MkU4MC1cXHUyRTk5XFx1MkU5Qi1cXHUyRUYzXFx1MkYwMC1cXHUyRkQ1XFx1MzAwNVxcdTMwMDdcXHUzMDIxLVxcdTMwMjlcXHUzMDM4LVxcdTMwM0JcXHUzNDAwLVxcdTREQkZcXHU0RTAwLVxcdTlGRkZcXHVGOTAwLVxcdUZBNkRcXHVGQTcwLVxcdUZBRDldfFxcdUQ4MUJbXFx1REZFMlxcdURGRTNcXHVERkYwXFx1REZGMV18W1xcdUQ4NDAtXFx1RDg2OFxcdUQ4NkEtXFx1RDg2Q1xcdUQ4NkYtXFx1RDg3MlxcdUQ4NzQtXFx1RDg3OVxcdUQ4ODAtXFx1RDg4M11bXFx1REMwMC1cXHVERkZGXXxcXHVEODY5W1xcdURDMDAtXFx1REVERlxcdURGMDAtXFx1REZGRl18XFx1RDg2RFtcXHVEQzAwLVxcdURGMzhcXHVERjQwLVxcdURGRkZdfFxcdUQ4NkVbXFx1REMwMC1cXHVEQzFEXFx1REMyMC1cXHVERkZGXXxcXHVEODczW1xcdURDMDAtXFx1REVBMVxcdURFQjAtXFx1REZGRl18XFx1RDg3QVtcXHVEQzAwLVxcdURGRTBdfFxcdUQ4N0VbXFx1REMwMC1cXHVERTFEXXxcXHVEODg0W1xcdURDMDAtXFx1REY0QV0pYDtcbmNvbnN0IFJFR0VYX1JBTkdFX09USEVSX0xFRlQ6IHN0cmluZyA9IFN0cmluZy5yYXdgW0EtWmEtejAtOUB+JSs9fMKxXFwpfSMkwqXigqzCo+KCpF1gO1xuY29uc3QgUkVHRVhfUkFOR0VfT1RIRVJfUklHSFQ6IHN0cmluZyA9IFN0cmluZy5yYXdgW0EtWmEtejAtOUB+JSs9fMKxXFwoeyMkwqXigqzCo+KCpF1gO1xuY29uc3QgUkVHRVhfU1RSX0lOVEVSX1NDUklQVDogc3RyaW5nID0gYCg/Oigke1JFR0VYX1JBTkdFX0NISU5FU0V9KSg/PSR7UkVHRVhfUkFOR0VfT1RIRVJfUklHSFR9KXwoJHtSRUdFWF9SQU5HRV9PVEhFUl9MRUZUfSkoPz0ke1JFR0VYX1JBTkdFX0NISU5FU0V9KSlgO1xuXG5jb25zdCBTUEFDRTogc3RyaW5nID0gJ1xcdTIwMEEnO1xuXG5jb25zdCBXUkFQUEVSX0NMQVNTOiBzdHJpbmcgPSAnZ2FkZ2V0LXRleHRfc3BhY2luZyc7XG5cbmNvbnN0IFNFTEVDVE9SX0FMTE9XRUQ6IHN0cmluZ1tdID0gW1xuXHQnYScsXG5cdCdhYmJyJyxcblx0J2FydGljbGUnLFxuXHQnYXNpZGUnLFxuXHQnYicsXG5cdCdiZGknLFxuXHQnYmlnJyxcblx0J2Jsb2NrcXVvdGUnLFxuXHQnYnV0dG9uJyxcblx0J2NhcHRpb24nLFxuXHQnY2VudGVyJyxcblx0J2NpdGUnLFxuXHQnZGF0YScsXG5cdCdkZCcsXG5cdCdkZWwnLFxuXHQnZGV0YWlscycsXG5cdCdkZm4nLFxuXHQnZGl2Jyxcblx0J2R0Jyxcblx0J2VtJyxcblx0J2ZpZ2NhcHRpb24nLFxuXHQnZm9vdGVyJyxcblx0J2gxJyxcblx0J2gyJyxcblx0J2gzJyxcblx0J2g0Jyxcblx0J2g1Jyxcblx0J2hlYWRlcicsXG5cdCdpJyxcblx0J2lucycsXG5cdCdsYWJlbCcsXG5cdCdsZWdlbmQnLFxuXHQnbGknLFxuXHQnbWFpbicsXG5cdCdtYXJrJyxcblx0J29wdGlvbicsXG5cdCdwJyxcblx0J3EnLFxuXHQncnVieScsXG5cdCdzJyxcblx0J3NlY3Rpb24nLFxuXHQnc21hbGwnLFxuXHQnc3BhbicsXG5cdCdzdHJpa2UnLFxuXHQnc3Ryb25nJyxcblx0J3N1YicsXG5cdCdzdW1tYXJ5Jyxcblx0J3N1cCcsXG5cdCd0ZCcsXG5cdCd0aCcsXG5cdCd0aW1lJyxcblx0J3UnLFxuXTtcbmNvbnN0IFNFTEVDVE9SX0JMT0NLRUQ6IHN0cmluZ1tdID0gW1xuXHQnY29kZScsXG5cdCdrYmQnLFxuXHQncHJlJyxcblx0J3JwJyxcblx0J3J0Jyxcblx0J3NhbXAnLFxuXHQndGV4dGFyZWEnLFxuXHQndmFyJyxcblx0Ly8gRWxlbWVudHMgd2l0aCB0aGlzIGNsYXNzIGFyZSBleGNsdWRlZFxuXHQnLmdhZGdldC1ub3NwYWNlJyxcblx0Ly8gRWRpdGFibGUgZWxlbWVudHNcblx0J1tjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCJdJyxcblx0Ly8gQUNFIGVkaXRvciBjb250ZW50XG5cdCcuYWNlX2VkaXRvcicsXG5cdC8vIFZpc3VhbCBFZGl0b3IgKGFuZCAyMDE3IFdpa2l0ZXh0IEVkaXRvcikgY29udGVudCAmIGRpZmZcblx0Jy52ZS11aS1zdXJmYWNlJyxcblx0Jy52ZS1pbml0LW13LWRpZmZQYWdlLWRpZmYnLFxuXHQvLyBEaWZmXG5cdCcuZGlmZi1jb250ZXh0Jyxcblx0Jy5kaWZmLWFkZGVkbGluZScsXG5cdCcuZGlmZi1kZWxldGVkbGluZScsXG5cdC8vIERpZmYgKGlubGluZSBtb2RlKVxuXHQnLm13LWRpZmYtaW5saW5lLWFkZGVkJyxcblx0Jy5tdy1kaWZmLWlubGluZS1kZWxldGVkJyxcblx0Jy5tdy1kaWZmLWlubGluZS1tb3ZlZCcsXG5cdCcubXctZGlmZi1pbmxpbmUtY2hhbmdlZCcsXG5cdCcubXctZGlmZi1pbmxpbmUtY29udGV4dCcsXG5dO1xuXG4vLyBGSVhNRTogVXNlIDppcygpIGluIHRoZSBmdXR1cmUgb25jZSBpdCBoYXMgYmV0dGVyIGJyb3dzZXIgY29tcGF0aWJpbGl0eVxuY29uc3QgU0VMRUNUT1I6IHN0cmluZyA9IFNFTEVDVE9SX0FMTE9XRUQubWFwKChhbGxvd2VkOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRyZXR1cm4gYCR7YWxsb3dlZH06bm90KCR7U0VMRUNUT1JfQkxPQ0tFRC5mbGF0TWFwKChibG9ja2VkOiBzdHJpbmcpOiBzdHJpbmcgfCBzdHJpbmdbXSA9PiB7XG5cdFx0Ly8gTm90IGluY2x1ZGUgaXRzZWxmIGlmIGl0IGlzIGEgdGFnIHNlbGVjdG9yXG5cdFx0cmV0dXJuIChibG9ja2VkWzBdIGFzIHN0cmluZykubWF0Y2goL1thLXpdL2kpID8gYCR7YmxvY2tlZH0gKmAgOiBbYmxvY2tlZCwgYCR7YmxvY2tlZH0gKmBdO1xuXHR9KS5qb2luKCcsJyl9KWA7XG59KS5qb2luKCcsJyk7XG5cbmNvbnN0IGdldExlYWZFbGVtZW50cyA9IChwYXJlbnQ6IEhUTUxFbGVtZW50KTogSFRNTEVsZW1lbnRbXSA9PiB7XG5cdGNvbnN0IGNhbmRpZGF0ZXM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1IpO1xuXHRjb25zdCByZXN1bHQ6IEhUTUxFbGVtZW50W10gPSBbXTtcblxuXHRpZiAocGFyZW50Lm1hdGNoZXMoU0VMRUNUT1IpKSB7XG5cdFx0cmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0gcGFyZW50OyAvLyBSZXBsYWNlIEFycmF5I3B1c2ggdG8gYXZvaWQgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXHR9XG5cblx0Zm9yIChjb25zdCBjYW5kaWRhdGUgb2YgY2FuZGlkYXRlcykge1xuXHRcdGZvciAoY29uc3QgY2hpbGROb2RlIG9mIGNhbmRpZGF0ZS5jaGlsZE5vZGVzKSB7XG5cdFx0XHRpZiAoaXNUZXh0Tm9kZShjaGlsZE5vZGUpKSB7XG5cdFx0XHRcdHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IGNhbmRpZGF0ZTsgLy8gUmVwbGFjZSBBcnJheSNwdXNoIHRvIGF2b2lkIGNvcmUtanMgcG9seWZpbGxpbmdcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn07XG5cbmNvbnN0IGdldE5leHRWaXNpYmxlU2libGluZyA9IChub2RlOiBOb2RlKTogSFRNTEVsZW1lbnQgfCBUZXh0IHwgbnVsbCA9PiB7XG5cdGxldCBjdXJyZW50Tm9kZTogTm9kZSA9IG5vZGU7XG5cblx0Ly8gVXNlIGxvb3BzIHJhdGhlciB0aGFuIHJlY3Vyc2lvbiBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlXG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0Y29uc3QgY2FuZGlkYXRlOiBDaGlsZE5vZGUgfCBudWxsID0gY3VycmVudE5vZGUubmV4dFNpYmxpbmc7XG5cblx0XHRpZiAoIWNhbmRpZGF0ZSkge1xuXHRcdFx0Y29uc3QgcGFyZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBjdXJyZW50Tm9kZS5wYXJlbnRFbGVtZW50O1xuXHRcdFx0aWYgKCFwYXJlbnQpIHtcblx0XHRcdFx0Ly8gUGFyZW50IGlzIERvY3VtZW50LCBzbyBubyB2aXNpYmxlIHNpYmxpbmdcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHQvLyBCdWJibGUgdXAgdG8gaXRzIHBhcmVudCBhbmQgZ2V0IGl0cyBzaWJsaW5nXG5cdFx0XHRjdXJyZW50Tm9kZSA9IHBhcmVudDtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmICghKGNhbmRpZGF0ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IGNhbmRpZGF0ZSBpbnN0YW5jZW9mIFRleHQpKSB7XG5cdFx0XHQvLyBDb21tZW50cywgU1ZHcywgZXRjLjogZ2V0IGl0cyBzaWJsaW5nIGFzIHJlc3VsdFxuXHRcdFx0Y3VycmVudE5vZGUgPSBjYW5kaWRhdGU7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAoY2FuZGlkYXRlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcblx0XHRcdGlmICghaXNWaXNpYmxlKGNhbmRpZGF0ZSkpIHtcblx0XHRcdFx0Ly8gSW52aXNpYmxlOiByZWN1cnNpdmVseSBnZXQgdGhpcyBlbGVtZW50J3MgbmV4dCBzaWJsaW5nXG5cdFx0XHRcdGN1cnJlbnROb2RlID0gY2FuZGlkYXRlO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFpc0lubGluZUhUTUxFbGVtZW50KGNhbmRpZGF0ZSkpIHtcblx0XHRcdFx0Ly8gTmV4dCBzaWJsaW5nIGlzIG5vdCBpbmxpbmUgKGF0IG5leHQgbGluZSksIHNvIG5vIHNpYmxpbmdzXG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChjYW5kaWRhdGUgaW5zdGFuY2VvZiBUZXh0ICYmICFjYW5kaWRhdGUuZGF0YS50cmltKCkpIHtcblx0XHRcdC8vIFNraXAgZW1wdHkgVGV4dCBub2RlcyAoZS5nLiBsaW5lIGJyZWFrcylcblx0XHRcdGN1cnJlbnROb2RlID0gY2FuZGlkYXRlO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNhbmRpZGF0ZTtcblx0fVxufTtcblxuY29uc3QgY3JlYXRlU3BhY2luZ1dyYXBwZXIgPSAoc3RyOiBzdHJpbmcpOiBbc3RyaW5nLCBIVE1MU3BhbkVsZW1lbnRdID0+IHtcblx0Y29uc3Qgc3BhbjogSFRNTFNwYW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWVkaWF3aWtpL2NsYXNzLWRvY1xuXHRzcGFuLmNsYXNzTmFtZSA9IFdSQVBQRVJfQ0xBU1M7XG5cdHNwYW4udGV4dENvbnRlbnQgPSBzdHIuc2xpY2UoLTEpO1xuXG5cdHJldHVybiBbc3RyLnNsaWNlKDAsIC0xKSwgc3Bhbl07XG59O1xuXG5jb25zdCBhZGp1c3RTcGFjaW5nID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCA9PiB7XG5cdC8vIEZyZWV6ZSBOb2RlTGlzdCBpbiBhZHZhbmNlXG5cdGNvbnN0IGNoaWxkTm9kZXM6IENoaWxkTm9kZVtdID0gWy4uLmVsZW1lbnQuY2hpbGROb2Rlc107XG5cdGNvbnN0IHRleHRTcGFjaW5nUG9zTWFwOiBNYXA8VGV4dCwgbnVtYmVyW10+ID0gbmV3IE1hcDxUZXh0LCBudW1iZXJbXT4oKTtcblxuXHRmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkTm9kZXMpIHtcblx0XHRpZiAoIShjaGlsZCBpbnN0YW5jZW9mIFRleHQpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBuZXh0U2libGluZzogSFRNTEVsZW1lbnQgfCBUZXh0IHwgbnVsbCA9IGdldE5leHRWaXNpYmxlU2libGluZyhjaGlsZCk7XG5cblx0XHRsZXQgdGVzdFN0cmluZzogc3RyaW5nID0gZ2V0Tm9kZVRleHQoY2hpbGQpO1xuXHRcdGlmIChuZXh0U2libGluZykge1xuXHRcdFx0Ly8gQXBwZW5kIGZpcnN0IGNoYXJhY3RlciB0byBkZXRlY3Qgc2NyaXB0IGludGVyc2VjdGlvblxuXHRcdFx0dGVzdFN0cmluZyArPSBnZXROb2RlVGV4dChuZXh0U2libGluZylbMF0gPz8gJyc7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaW5kZXhlczogbnVtYmVyW10gPSBbXTtcblx0XHQvLyBHbG9iYWwgcmVnZXhwcyBhcmUgc3RhdGVmdWwgc28gZG8gaW5pdGlhbGl6YXRpb24gaW4gZWFjaCBsb29wXG5cdFx0Y29uc3QgcmVnZXhUZXh0Tm9kZURhdGE6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoUkVHRVhfU1RSX0lOVEVSX1NDUklQVCwgJ2cnKTtcblxuXHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRjb25zdCBtYXRjaDogUmVnRXhwRXhlY0FycmF5IHwgbnVsbCA9IHJlZ2V4VGV4dE5vZGVEYXRhLmV4ZWModGVzdFN0cmluZyk7XG5cdFx0XHRpZiAoIW1hdGNoKSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0aW5kZXhlc1tpbmRleGVzLmxlbmd0aF0gPSBtYXRjaC5pbmRleCArIDE7IC8vIFJlcGxhY2UgQXJyYXkjcHVzaCB0byBhdm9pZCBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdFx0fVxuXG5cdFx0aWYgKCFpbmRleGVzLmxlbmd0aCkge1xuXHRcdFx0Ly8gT3B0aW1pemF0aW9uOiBza2lwIGZ1cnRoZXIgc3RlcHNcblx0XHRcdC8vIEFsc28gcHJldmVudCB1bm5lY2Vzc2FyeSBtdXRhdGlvbiwgd2hpY2ggd2lsbCBiZSBkZXRlY3RlZCBieSBNdXRhdGlvbk9ic2VydmVyLFxuXHRcdFx0Ly8gcmVzdWx0aW5nIGluIGluZmluaXRlIGxvb3BzXG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHR0ZXh0U3BhY2luZ1Bvc01hcC5zZXQoY2hpbGQsIGluZGV4ZXMpO1xuXHR9XG5cblx0Ly8gU2NoZWR1bGUgRE9NIG11dGF0aW9uIHRvIHByZXZlbnQgZm9yY2VkIHJlZmxvd3Ncblx0cXVldWVEb21NdXRhdGlvbihlbGVtZW50LCAoKTogdm9pZCA9PiB7XG5cdFx0Zm9yIChjb25zdCBbbm9kZSwgaW5kZXhlc10gb2YgdGV4dFNwYWNpbmdQb3NNYXApIHtcblx0XHRcdGNvbnN0IHRleHQ6IHN0cmluZyA9IG5vZGUuZGF0YTtcblx0XHRcdGNvbnN0IGZyYWdtZW50czogc3RyaW5nW10gPSBzcGxpdEF0SW5kZXhlcyh0ZXh0LCBpbmRleGVzKTtcblxuXHRcdFx0Y29uc3QgcmVwbGFjZW1lbnQ6IChzdHJpbmcgfCBIVE1MU3BhbkVsZW1lbnQpW10gPSBmcmFnbWVudHNcblx0XHRcdFx0LnNsaWNlKDAsIC0xKVxuXHRcdFx0XHQuZmxhdE1hcCgoZnJhZ21lbnQ6IHN0cmluZyk6IFtzdHJpbmcsIEhUTUxTcGFuRWxlbWVudF0gPT4ge1xuXHRcdFx0XHRcdHJldHVybiBjcmVhdGVTcGFjaW5nV3JhcHBlcihmcmFnbWVudCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0cmVwbGFjZW1lbnRbcmVwbGFjZW1lbnQubGVuZ3RoXSA9IGZyYWdtZW50cy5hdCgtMSkgYXMgc3RyaW5nOyAvLyBSZXBsYWNlIEFycmF5I3B1c2ggdG8gYXZvaWQgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXG5cdFx0XHQvLyBPcHRpbWl6YXRpb246IHByZXZlbnQgZm9yY2VkIHJlZmxvd3Ncblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG5cdFx0XHRcdG5vZGUucmVwbGFjZVdpdGgoLi4ucmVwbGFjZW1lbnQpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcbn07XG5cbmNvbnN0IGFkZFNwYWNlVG9TdHJpbmcgPSAoc3RyOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRjb25zdCByZWdleDogUmVnRXhwID0gbmV3IFJlZ0V4cChSRUdFWF9TVFJfSU5URVJfU0NSSVBULCAnZycpO1xuXG5cdHJldHVybiBzdHIucmVwbGFjZShyZWdleCwgYCQxJDIke1NQQUNFfWApO1xufTtcblxuZXhwb3J0IHtnZXRMZWFmRWxlbWVudHMsIGFkanVzdFNwYWNpbmcsIGFkZFNwYWNlVG9TdHJpbmcsIFdSQVBQRVJfQ0xBU1N9O1xuIiwgImltcG9ydCAnLi9UZXh0U3BhY2luZy5sZXNzJztcbmltcG9ydCB7V1JBUFBFUl9DTEFTUywgYWRkU3BhY2VUb1N0cmluZywgYWRqdXN0U3BhY2luZywgZ2V0TGVhZkVsZW1lbnRzfSBmcm9tICcuL21vZHVsZXMvc3BhY2luZyc7XG5cbmNvbnN0IHJ1biA9IChlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQgPT4ge1xuXHRjb25zdCBsZWF2ZXM6IEhUTUxFbGVtZW50W10gPSBnZXRMZWFmRWxlbWVudHMoZWxlbWVudCk7XG5cdGZvciAoY29uc3QgbGVhZiBvZiBsZWF2ZXMpIHtcblx0XHRhZGp1c3RTcGFjaW5nKGxlYWYpO1xuXHR9XG59O1xuXG5jb25zdCBtdXRhdGlvbk9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKHJlY29yZHM6IE11dGF0aW9uUmVjb3JkW10pOiB2b2lkID0+IHtcblx0Zm9yIChjb25zdCByZWNvcmQgb2YgcmVjb3Jkcykge1xuXHRcdGlmIChyZWNvcmQudHlwZSAhPT0gJ2NoaWxkTGlzdCcpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGFkZGVkTm9kZXM6IE5vZGVbXSA9IFsuLi5yZWNvcmQuYWRkZWROb2Rlc107XG5cblx0XHQvLyBFeGNsdWRlIG11dGF0aW9ucyBjYXVzZWQgYnkgYWRqdXN0U3BhY2luZygpIHRvIHByZXZlbnQgaW5maW5pdGUgbG9vcHNcblx0XHQvLyBUeXBpY2FsbHkgdGhleSB3aWxsIGNvbnRhaW4gbm9kZXMgd2l0aCBjbGFzcyBXUkFQUEVSX0NMQVNTXG5cdFx0aWYgKFxuXHRcdFx0YWRkZWROb2Rlcy5zb21lKChub2RlOiBOb2RlKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRcdHJldHVybiBub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoV1JBUFBFUl9DTEFTUyk7XG5cdFx0XHR9KVxuXHRcdCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBub2RlIG9mIGFkZGVkTm9kZXMpIHtcblx0XHRcdGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcblx0XHRcdFx0cnVuKG5vZGUpO1xuXHRcdFx0fSBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgVGV4dCkge1xuXHRcdFx0XHRjb25zdCB7cGFyZW50RWxlbWVudH0gPSBub2RlO1xuXHRcdFx0XHRpZiAocGFyZW50RWxlbWVudCkge1xuXHRcdFx0XHRcdHJ1bihwYXJlbnRFbGVtZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufSk7XG5cbmNvbnN0IG1haW4gPSAoKTogdm9pZCA9PiB7XG5cdGRvY3VtZW50LnRpdGxlID0gYWRkU3BhY2VUb1N0cmluZyhkb2N1bWVudC50aXRsZSk7XG5cdGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcubXctcGFyc2VyLW91dHB1dCcpO1xuXHRpZiAoIW91dHB1dCkge1xuXHRcdHJldHVybjtcblx0fVxuXHQvLyBXYXRjaCBmb3IgYWRkZWQgbm9kZXNcblx0bXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKG91dHB1dCwge1xuXHRcdHN1YnRyZWU6IHRydWUsXG5cdFx0Y2hpbGRMaXN0OiB0cnVlLFxuXHR9KTtcblx0cnVuKG91dHB1dCk7XG59O1xuXG4kKG1haW4pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBMEJDLFFBQUEsaUJBQUE7QUFFMUIsSUFBTUMsc0JBQXVCQyxVQUFvQztBQUNoRSxTQUFPQSxnQkFBZ0JDLGVBQWVDLE9BQU9DLGlCQUFpQkgsSUFBSSxFQUFFSSxRQUFRQyxTQUFTLFFBQVE7QUFDOUY7QUFFQSxJQUFNQyxhQUFjTixVQUE2QjtBQUNoRCxTQUFPQSxLQUFLTyxhQUFhQyxLQUFLQztBQUMvQjtBQUVBLElBQU1DLFlBQWFDLGFBQThCO0FBQ2hELFFBQU1DLFFBQTZCVixPQUFPQyxpQkFBaUJRLE9BQU87QUFFbEUsU0FDQ0MsTUFBTVIsWUFBWSxVQUNsQixDQUFDLENBQUMsVUFBVSxVQUFVLEVBQUVDLFNBQVNPLE1BQU1DLFVBQVUsS0FDakRDLE9BQU9DLFdBQVdILE1BQU1JLE9BQU8sSUFBSTtBQUVyQztBQUVBLElBQU1DLGNBQWVqQixVQUFxQztBQUV6RCxTQUFPQSxnQkFBZ0JDLGNBQWNELEtBQUtrQixZQUFZbEIsS0FBS21CO0FBQzVEO0FBNkJBLElBQU1DLGlCQUFpQkEsQ0FBQ0MsS0FBYUMsWUFBZ0M7QUFDcEUsUUFBTUMsU0FBbUIsQ0FBQTtBQUV6QixRQUFNQyxvQkFBOEI7O0lBRW5DLElBQUEsR0FBRzNCLGtCQUFBNEI7O01BRUZILFFBQ0VJLEtBQUssQ0FBQ0MsR0FBV0MsTUFBc0I7QUFDdkMsZUFBT0QsSUFBSUM7TUFDWixDQUFD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aW5lSFRNTEVsZW1lbnQiLCAibm9kZSIsICJIVE1MRWxlbWVudCIsICJ3aW5kb3ciLCAiZ2V0Q29tcHV0ZWRTdHlsZSIsICJkaXNwbGF5IiwgImluY2x1ZGVzIiwgImlzVGV4dE5vZGUiLCAibm9kZVR5cGUiLCAiTm9kZSIsICJURVhUX05PREUiLCAiaXNWaXNpYmxlIiwgImVsZW1lbnQiLCAic3R5bGUiLCAidmlzaWJpbGl0eSIsICJOdW1iZXIiLCAicGFyc2VGbG9hdCIsICJvcGFjaXR5IiwgImdldE5vZGVUZXh0IiwgImlubmVyVGV4dCIsICJkYXRhIiwgInNwbGl0QXRJbmRleGVzIiwgInN0ciIsICJpbmRleGVzIiwgInJlc3VsdCIsICJub3JtYWxpemVkSW5kZXhlcyIsICJ1bmlxdWVBcnJheSIsICJzb3J0IiwgImEiLCAiYiIsICJmaWx0ZXIiLCAiaSIsICJsZW5ndGgiLCAic2xpY2UiLCAicGVuZGluZ0FjdGlvbnMiLCAiV2Vha01hcCIsICJvbkludGVyc2VjdGlvbiIsICJlbnRyaWVzIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJlbnRyeSIsICJ2YWx1ZSIsICJpc0ludGVyc2VjdGluZyIsICJ0YXJnZXQiLCAib2JzZXJ2ZXIiLCAidW5vYnNlcnZlIiwgImNhbGxiYWNrcyIsICJnZXQiLCAiY2FsbGJhY2siLCAic2hpZnQiLCAiZXJyIiwgImUiLCAiZiIsICJJbnRlcnNlY3Rpb25PYnNlcnZlciIsICJxdWV1ZURvbU11dGF0aW9uIiwgImhhcyIsICJzZXQiLCAib2JzZXJ2ZSIsICJSRUdFWF9SQU5HRV9DSElORVNFIiwgIlN0cmluZyIsICJyYXciLCAiX3RlbXBsYXRlT2JqZWN0IiwgIl90YWdnZWRUZW1wbGF0ZUxpdGVyYWwiLCAiUkVHRVhfUkFOR0VfT1RIRVJfTEVGVCIsICJfdGVtcGxhdGVPYmplY3QyIiwgIlJFR0VYX1JBTkdFX09USEVSX1JJR0hUIiwgIl90ZW1wbGF0ZU9iamVjdDMiLCAiUkVHRVhfU1RSX0lOVEVSX1NDUklQVCIsICJjb25jYXQiLCAiU1BBQ0UiLCAiV1JBUFBFUl9DTEFTUyIsICJTRUxFQ1RPUl9BTExPV0VEIiwgIlNFTEVDVE9SX0JMT0NLRUQiLCAiU0VMRUNUT1IiLCAibWFwIiwgImFsbG93ZWQiLCAiZmxhdE1hcCIsICJibG9ja2VkIiwgIm1hdGNoIiwgImpvaW4iLCAiZ2V0TGVhZkVsZW1lbnRzIiwgInBhcmVudCIsICJjYW5kaWRhdGVzIiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAibWF0Y2hlcyIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJjYW5kaWRhdGUiLCAiX2l0ZXJhdG9yMyIsICJjaGlsZE5vZGVzIiwgIl9zdGVwMyIsICJjaGlsZE5vZGUiLCAiZ2V0TmV4dFZpc2libGVTaWJsaW5nIiwgImN1cnJlbnROb2RlIiwgIm5leHRTaWJsaW5nIiwgInBhcmVudEVsZW1lbnQiLCAiVGV4dCIsICJ0cmltIiwgImNyZWF0ZVNwYWNpbmdXcmFwcGVyIiwgInNwYW4iLCAiZG9jdW1lbnQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAidGV4dENvbnRlbnQiLCAiYWRqdXN0U3BhY2luZyIsICJ0ZXh0U3BhY2luZ1Bvc01hcCIsICJNYXAiLCAiX2kiLCAiX2NoaWxkTm9kZXMiLCAiY2hpbGQiLCAidGVzdFN0cmluZyIsICJfZ2V0Tm9kZVRleHQkIiwgInJlZ2V4VGV4dE5vZGVEYXRhIiwgIlJlZ0V4cCIsICJleGVjIiwgImluZGV4IiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgInRleHQiLCAiZnJhZ21lbnRzIiwgInJlcGxhY2VtZW50IiwgImZyYWdtZW50IiwgImF0IiwgInJlcXVlc3RBbmltYXRpb25GcmFtZSIsICJyZXBsYWNlV2l0aCIsICJhZGRTcGFjZVRvU3RyaW5nIiwgInJlZ2V4IiwgInJlcGxhY2UiLCAicnVuIiwgImxlYXZlcyIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJsZWFmIiwgIm11dGF0aW9uT2JzZXJ2ZXIiLCAiTXV0YXRpb25PYnNlcnZlciIsICJyZWNvcmRzIiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgInJlY29yZCIsICJ0eXBlIiwgImFkZGVkTm9kZXMiLCAic29tZSIsICJjbGFzc0xpc3QiLCAiY29udGFpbnMiLCAiX2kyIiwgIl9hZGRlZE5vZGVzIiwgIm1haW4iLCAidGl0bGUiLCAib3V0cHV0IiwgInF1ZXJ5U2VsZWN0b3IiLCAic3VidHJlZSIsICJjaGlsZExpc3QiLCAiJCJdCn0K
