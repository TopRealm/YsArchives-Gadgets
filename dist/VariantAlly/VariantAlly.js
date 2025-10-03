/**
 * SPDX-License-Identifier: GPL-2.0-only
 * _addText: '{{Gadget Header|license=GPL-2.0-only}}'
 *
 * @base {@link https://github.com/wikimedia-gadgets/VariantAlly}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/VariantAlly}
 * @license GPL-2.0 {@link https://youshou.wiki/wiki/H:GPLV2}
 */

/**
 * VariantAlly
 * Copyright (C) 2023-2024 Diskdance
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation, version 2.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
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

// dist/VariantAlly/VariantAlly.js
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
//! src/VariantAlly/VariantAlly.ts
var VariantAlly_exports = {};
__export(VariantAlly_exports, {
  redirect: () => redirect,
  setLocalVariant: () => setLocalVariant,
  setOptOut: () => setOptOut
});
module.exports = __toCommonJS(VariantAlly_exports);
//! src/VariantAlly/modules/utils.ts
function isLoggedIn() {
  return mw.config.exists("wgUserId");
}
function isReferrerSelf() {
  try {
    return new URL(document.referrer).hostname === location.hostname;
  } catch {
    return false;
  }
}
function isViewingPage() {
  return mw.config.get("wgAction") === "view";
}
function isLangChinese() {
  return mw.config.get("wgUserLanguage").startsWith("zh");
}
function isWikitextPage() {
  return mw.config.get("wgCanonicalNamespace") !== "Special" && mw.config.get("wgPageContentModel") === "wikitext";
}
//! src/VariantAlly/modules/model.ts
var LOCAL_VARIANT_KEY = "va-var";
var OPTOUT_KEY = "va-optout";
var VALID_VARIANTS = ["zh-cn", "zh-sg", "zh-my", "zh-tw", "zh-hk", "zh-mo"];
var VARIANTS = ["zh", "zh-hans", "zh-hant", ...VALID_VARIANTS];
var EXT_VARIANTS = ["zh-hans-cn", "zh-hans-sg", "zh-hans-my", "zh-hant-tw", "zh-hant-hk", "zh-hant-mo", ...VARIANTS];
var EXT_MAPPING = {
  "zh-hans-cn": "zh-cn",
  "zh-hans-sg": "zh-sg",
  "zh-hans-my": "zh-my",
  "zh-hant-tw": "zh-tw",
  "zh-hant-hk": "zh-hk",
  "zh-hant-mo": "zh-mo"
};
function isVariant(str) {
  return VARIANTS.includes(str);
}
function isValidVariant(str) {
  return VALID_VARIANTS.includes(str);
}
function isExtVariant(str) {
  return EXT_VARIANTS.includes(str);
}
function normalizeVariant(extVariant) {
  var _EXT_MAPPING$extVaria;
  return (_EXT_MAPPING$extVaria = EXT_MAPPING[extVariant]) !== null && _EXT_MAPPING$extVaria !== void 0 ? _EXT_MAPPING$extVaria : extVariant;
}
function getPageVariant() {
  const result = mw.config.get("wgUserVariant");
  return result !== null && isExtVariant(result) ? normalizeVariant(result) : null;
}
function getAccountVariant() {
  if (isLoggedIn()) {
    const result = mw.user.options.get("variant");
    return isExtVariant(result) ? normalizeVariant(result) : null;
  }
  return null;
}
function getLocalVariant() {
  const result = localStorage.getItem(LOCAL_VARIANT_KEY);
  if (result === null || !isExtVariant(result)) {
    return null;
  }
  return normalizeVariant(result);
}
function getBrowserVariant() {
  var _navigator$languages$;
  return (_navigator$languages$ = navigator.languages.map((lang) => {
    return lang.toLowerCase();
  }).filter(isExtVariant).map(normalizeVariant).find(isVariant)) !== null && _navigator$languages$ !== void 0 ? _navigator$languages$ : null;
}
function getMediaWikiVariant() {
  var _getAccountVariant;
  return (_getAccountVariant = getAccountVariant()) !== null && _getAccountVariant !== void 0 ? _getAccountVariant : getBrowserVariant();
}
function calculatePreferredVariant() {
  return [getAccountVariant(), getBrowserVariant(), getLocalVariant()].map((variant) => {
    return variant !== null && isValidVariant(variant) ? variant : null;
  }).reduce((prev, curr) => {
    return prev !== null && prev !== void 0 ? prev : curr;
  });
}
function setLocalVariant(variant) {
  localStorage.setItem(LOCAL_VARIANT_KEY, variant);
}
function setOptOut() {
  localStorage.setItem(OPTOUT_KEY, "");
}
function isOptOuted() {
  return localStorage.getItem(OPTOUT_KEY) !== null;
}
//! src/VariantAlly/modules/controller.ts
var REGEX_WIKI_URL = /^\/(?:wiki|zh(?:-\w+)?)\//i;
var REGEX_VARIANT_URL = /^\/zh(?:-\w+)?\//i;
var VARIANT_PARAM = "va-variant";
function isEligibleForRewriting(link) {
  try {
    if (link === "") {
      return false;
    }
    const url = new URL(link, location.origin);
    if (REGEX_VARIANT_URL.test(url.pathname)) {
      return false;
    }
    if (url.searchParams.has("variant")) {
      return false;
    }
    if (url.host !== location.host) {
      return false;
    }
    return true;
  } catch {
    return false;
  }
}
function rewriteLink(link, variant) {
  try {
    const normalizationTargetVariant = getMediaWikiVariant();
    const url = new URL(link, location.origin);
    const {
      pathname,
      searchParams
    } = url;
    if (REGEX_WIKI_URL.test(pathname)) {
      url.pathname = "/".concat(variant, "/").concat(url.pathname.replace(REGEX_WIKI_URL, ""));
      searchParams.delete("variant");
    } else {
      searchParams.set("variant", variant);
    }
    if (variant === normalizationTargetVariant) {
      url.pathname = url.pathname.replace(REGEX_WIKI_URL, "/wiki/");
      url.searchParams.delete("variant");
    }
    const result = url.toString();
    return result;
  } catch {
    return link;
  }
}
function redirect(preferredVariant, options = {}) {
  var _options$link;
  const origLink = (_options$link = options.link) !== null && _options$link !== void 0 ? _options$link : location.href;
  const newLink = rewriteLink(origLink, preferredVariant);
  if (options.forced || newLink !== location.href) {
    location.replace(newLink);
  }
}
function checkThisPage(preferredVariant, pageVariant) {
  if (pageVariant === preferredVariant) {
    return;
  }
  const redirectionOrigin = mw.config.get("wgRedirectedFrom");
  if (redirectionOrigin === null) {
    redirect(preferredVariant);
    return;
  }
  const redirectionURL = new URL(location.href);
  redirectionURL.pathname = "/wiki/".concat(redirectionOrigin);
  redirect(preferredVariant, {
    link: redirectionURL.toString()
  });
}
function rewriteAnchors(variant) {
  for (var _i = 0, _arr = ["click", "auxclick", "dragstart"]; _i < _arr.length; _i++) {
    const name = _arr[_i];
    document.addEventListener(name, (ev) => {
      const {
        target
      } = ev;
      if (target instanceof Element) {
        const anchor = target.closest('a[href]:not([href^="#"])');
        if (anchor !== null) {
          const origLink = anchor.href;
          if (!isEligibleForRewriting(origLink)) {
            return;
          }
          const newLink = rewriteLink(origLink, variant);
          if (newLink === origLink) {
            return;
          }
          if (window.DragEvent && ev instanceof DragEvent && ev.dataTransfer) {
            var _iterator2 = _createForOfIteratorHelper(ev.dataTransfer.types), _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                const type = _step2.value;
                ev.dataTransfer.setData(type, newLink);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          } else {
            if (anchor.dataset["vaMutex"] === void 0) {
              anchor.dataset["vaMutex"] = "";
            }
            anchor.href = newLink;
            for (var _i2 = 0, _arr2 = ["mouseover", "mouseleave", "keyup"]; _i2 < _arr2.length; _i2++) {
              const innerName = _arr2[_i2];
              anchor.addEventListener(innerName, () => {
                if (anchor.dataset["vaMutex"] !== void 0) {
                  anchor.href = origLink;
                  delete anchor.dataset["vaMutex"];
                }
              }, {
                once: true
              });
            }
          }
        }
      }
    });
  }
}
function showVariantPrompt() {
  const moduleName = "ext.gadget.VariantAllyDialog";
  void mw.loader.using(moduleName, (require2) => {
    require2(moduleName);
  });
}
function applyURLVariant() {
  const variant = new URL(location.href).searchParams.get(VARIANT_PARAM);
  if (variant !== null && isValidVariant(variant)) {
    setLocalVariant(variant);
  }
}
//! src/VariantAlly/VariantAlly.ts
function main() {
  if (isOptOuted()) {
    return;
  }
  if (isLoggedIn()) {
    return;
  }
  if (!isLangChinese()) {
    return;
  }
  applyURLVariant();
  const preferredVariant = calculatePreferredVariant();
  if (preferredVariant !== null) {
    setLocalVariant(preferredVariant);
  }
  const pageVariant = getPageVariant();
  if (pageVariant === null || !isWikitextPage()) {
    if (preferredVariant !== null) {
      rewriteAnchors(preferredVariant);
    }
    return;
  }
  if (preferredVariant === null) {
    if (isViewingPage()) {
      showVariantPrompt();
      return;
    }
    return;
  }
  if (isReferrerSelf() && !isEligibleForRewriting(location.href)) {
    rewriteAnchors(preferredVariant);
    return;
  }
  checkThisPage(preferredVariant, pageVariant);
  rewriteAnchors(preferredVariant);
}
main();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ZhcmlhbnRBbGx5L1ZhcmlhbnRBbGx5LnRzIiwgInNyYy9WYXJpYW50QWxseS9tb2R1bGVzL3V0aWxzLnRzIiwgInNyYy9WYXJpYW50QWxseS9tb2R1bGVzL21vZGVsLnRzIiwgInNyYy9WYXJpYW50QWxseS9tb2R1bGVzL2NvbnRyb2xsZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7XG5cdGNoZWNrVGhpc1BhZ2UsXG5cdHJld3JpdGVBbmNob3JzLFxuXHRhcHBseVVSTFZhcmlhbnQsXG5cdHNob3dWYXJpYW50UHJvbXB0LFxuXHRpc0VsaWdpYmxlRm9yUmV3cml0aW5nLFxufSBmcm9tICcuL21vZHVsZXMvY29udHJvbGxlcic7XG5pbXBvcnQge2NhbGN1bGF0ZVByZWZlcnJlZFZhcmlhbnQsIGdldFBhZ2VWYXJpYW50LCBpc09wdE91dGVkLCBzZXRMb2NhbFZhcmlhbnR9IGZyb20gJy4vbW9kdWxlcy9tb2RlbCc7XG5pbXBvcnQge2lzTG9nZ2VkSW4sIGlzTGFuZ0NoaW5lc2UsIGlzV2lraXRleHRQYWdlLCBpc1ZpZXdpbmdQYWdlLCBpc1JlZmVycmVyU2VsZn0gZnJvbSAnLi9tb2R1bGVzL3V0aWxzJztcblxuZnVuY3Rpb24gbWFpbigpIHtcblx0Ly8gTWFudWFsbHkgb3B0IG91dGVkIHVzZXJzXG5cdGlmIChpc09wdE91dGVkKCkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoaXNMb2dnZWRJbigpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gTm9uLUNoaW5lc2UgcGFnZXMvdXNlcnNcblx0aWYgKCFpc0xhbmdDaGluZXNlKCkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRhcHBseVVSTFZhcmlhbnQoKTtcblxuXHRjb25zdCBwcmVmZXJyZWRWYXJpYW50ID0gY2FsY3VsYXRlUHJlZmVycmVkVmFyaWFudCgpO1xuXHRpZiAocHJlZmVycmVkVmFyaWFudCAhPT0gbnVsbCkge1xuXHRcdC8vIE9wdGltaXN0aWNhbGx5IHNldCBsb2NhbCB2YXJpYW50IHRvIGJlIGVxdWFsIHRvIGJyb3dzZXIgdmFyaWFudFxuXHRcdC8vIEluIGNhc2UgdGhlIHVzZXIncyBicm93c2VyIGxhbmd1YWdlIGJlY29tZXMgaW52YWxpZCBpbiB0aGUgZnV0dXJlLFxuXHRcdC8vIHRoaXMgcmVkdWNlcyB0aGUgcG9zc2liaWxpdHkgdG8gc2hvdyBwcm9tcHQgdG8gZGlzcnVwdCB1c2Vycy5cblx0XHRzZXRMb2NhbFZhcmlhbnQocHJlZmVycmVkVmFyaWFudCk7XG5cdH1cblxuXHRjb25zdCBwYWdlVmFyaWFudCA9IGdldFBhZ2VWYXJpYW50KCk7XG5cblx0Ly8gTm9uLWFydGljbGUgcGFnZSAoSlMvQ1NTIHBhZ2VzLCBTcGVjaWFsIHBhZ2VzIGV0Yy4pXG5cdGlmIChwYWdlVmFyaWFudCA9PT0gbnVsbCB8fCAhaXNXaWtpdGV4dFBhZ2UoKSkge1xuXHRcdC8vIFN1Y2ggcGFnZSBjYW4ndCBoYXZlIHZhcmlhbnQsIGJ1dCBwcmVmZXJyZWQgdmFyaWFudCBtYXkgYmUgYXZhaWxhYmxlXG5cdFx0Ly8gU28gc3RpbGwgcmV3cml0ZSBsaW5rc1xuXHRcdGlmIChwcmVmZXJyZWRWYXJpYW50ICE9PSBudWxsKSB7XG5cdFx0XHRyZXdyaXRlQW5jaG9ycyhwcmVmZXJyZWRWYXJpYW50KTtcblx0XHR9XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gUHJlZmVycmVkIHZhcmlhbnQgdW5hdmFpbGFibGVcblx0aWYgKHByZWZlcnJlZFZhcmlhbnQgPT09IG51bGwpIHtcblx0XHRpZiAoaXNWaWV3aW5nUGFnZSgpKSB7XG5cdFx0XHRzaG93VmFyaWFudFByb21wdCgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIE9uLXNpdGUgbmF2aWdhdGlvbiB0byBsaW5rcyBpbmVsaWdpYmxlIGZvciB3cml0aW5nXG5cdC8vIFRoZSBlbGlnaWJpbGl0eSBjaGVjayBpcyByZXF1aXJlIGJlY2F1c2UgdXNlciBtYXkgY2xpY2sgb24gYSBsaW5rIHdpdGggdmFyaWFudCBpbnRlbnRpb25hbGx5XG5cdC8vIGUuZy4gdmFyaWFudCBkcm9wZG93biBhbmQge3tWYXJpYW50LWNuaGt0d3NnfX1cblx0aWYgKGlzUmVmZXJyZXJTZWxmKCkgJiYgIWlzRWxpZ2libGVGb3JSZXdyaXRpbmcobG9jYXRpb24uaHJlZikpIHtcblx0XHRyZXdyaXRlQW5jaG9ycyhwcmVmZXJyZWRWYXJpYW50KTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjaGVja1RoaXNQYWdlKHByZWZlcnJlZFZhcmlhbnQsIHBhZ2VWYXJpYW50KTtcblx0cmV3cml0ZUFuY2hvcnMocHJlZmVycmVkVmFyaWFudCk7XG59XG5cbm1haW4oKTtcblxuLy8gRXhwb3NlIGZvciBWYXJpYW50QWxseURpYWxvZydzIHVzZVxuZXhwb3J0IHtzZXRMb2NhbFZhcmlhbnQsIHNldE9wdE91dH0gZnJvbSAnLi9tb2R1bGVzL21vZGVsJztcbmV4cG9ydCB7cmVkaXJlY3R9IGZyb20gJy4vbW9kdWxlcy9jb250cm9sbGVyJztcbiIsICJmdW5jdGlvbiBpc0xvZ2dlZEluKCk6IGJvb2xlYW4ge1xuXHRyZXR1cm4gbXcuY29uZmlnLmV4aXN0cygnd2dVc2VySWQnKTtcbn1cblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIHJlZmVycmVyIG9yaWdpbmF0ZXMgZnJvbSB0aGUgc2FtZSBkb21haW4uXG4gKi9cbmZ1bmN0aW9uIGlzUmVmZXJyZXJTZWxmKCk6IGJvb2xlYW4ge1xuXHR0cnkge1xuXHRcdHJldHVybiBuZXcgVVJMKGRvY3VtZW50LnJlZmVycmVyKS5ob3N0bmFtZSA9PT0gbG9jYXRpb24uaG9zdG5hbWU7XG5cdH0gY2F0Y2gge1xuXHRcdC8vIEludmFsaWQgVVJMXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGlzVmlld2luZ1BhZ2UoKTogYm9vbGVhbiB7XG5cdHJldHVybiBtdy5jb25maWcuZ2V0KCd3Z0FjdGlvbicpID09PSAndmlldyc7XG59XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciB0aGUgY3VycmVudCBsYW5ndWFnZSAoc2V0IGluIHVzZXIgcHJlZmVyZW5jZSBvciBieSA/dXNlbGFuZz14eHgpXG4gKiBpcyBDaGluZXNlIG9yIG5vdC5cbiAqL1xuZnVuY3Rpb24gaXNMYW5nQ2hpbmVzZSgpOiBib29sZWFuIHtcblx0cmV0dXJuIG13LmNvbmZpZy5nZXQoJ3dnVXNlckxhbmd1YWdlJykuc3RhcnRzV2l0aCgnemgnKTtcbn1cblxuZnVuY3Rpb24gaXNXaWtpdGV4dFBhZ2UoKTogYm9vbGVhbiB7XG5cdHJldHVybiBtdy5jb25maWcuZ2V0KCd3Z0Nhbm9uaWNhbE5hbWVzcGFjZScpICE9PSAnU3BlY2lhbCcgJiYgbXcuY29uZmlnLmdldCgnd2dQYWdlQ29udGVudE1vZGVsJykgPT09ICd3aWtpdGV4dCc7XG59XG5cbmV4cG9ydCB7aXNMb2dnZWRJbiwgaXNSZWZlcnJlclNlbGYsIGlzVmlld2luZ1BhZ2UsIGlzTGFuZ0NoaW5lc2UsIGlzV2lraXRleHRQYWdlfTtcbiIsICJpbXBvcnQge2lzTG9nZ2VkSW59IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBMT0NBTF9WQVJJQU5UX0tFWSA9ICd2YS12YXInO1xuY29uc3QgT1BUT1VUX0tFWSA9ICd2YS1vcHRvdXQnO1xuY29uc3QgVkFMSURfVkFSSUFOVFMgPSBbJ3poLWNuJywgJ3poLXNnJywgJ3poLW15JywgJ3poLXR3JywgJ3poLWhrJywgJ3poLW1vJ10gYXMgY29uc3Q7XG5jb25zdCBWQVJJQU5UUyA9IFsnemgnLCAnemgtaGFucycsICd6aC1oYW50JywgLi4uVkFMSURfVkFSSUFOVFNdIGFzIGNvbnN0O1xuY29uc3QgRVhUX1ZBUklBTlRTID0gW1xuXHQnemgtaGFucy1jbicsXG5cdCd6aC1oYW5zLXNnJyxcblx0J3poLWhhbnMtbXknLFxuXHQnemgtaGFudC10dycsXG5cdCd6aC1oYW50LWhrJyxcblx0J3poLWhhbnQtbW8nLFxuXHQuLi5WQVJJQU5UUyxcbl0gYXMgY29uc3Q7XG4vLyBTb21lIGJyb3dzZXJzIChlLmcuIEZpcmVmb3ggQW5kcm9pZCkgbWF5IHJldHVybiBzdWNoIGxhbmd1YWdlc1xuY29uc3QgRVhUX01BUFBJTkc6IFJlY29yZDxzdHJpbmcsIFZhbGlkVmFyaWFudD4gPSB7XG5cdCd6aC1oYW5zLWNuJzogJ3poLWNuJyxcblx0J3poLWhhbnMtc2cnOiAnemgtc2cnLFxuXHQnemgtaGFucy1teSc6ICd6aC1teScsXG5cdCd6aC1oYW50LXR3JzogJ3poLXR3Jyxcblx0J3poLWhhbnQtaGsnOiAnemgtaGsnLFxuXHQnemgtaGFudC1tbyc6ICd6aC1tbycsXG59O1xuXG50eXBlIFZhbGlkVmFyaWFudCA9ICh0eXBlb2YgVkFMSURfVkFSSUFOVFMpW251bWJlcl07XG50eXBlIFZhcmlhbnQgPSAodHlwZW9mIFZBUklBTlRTKVtudW1iZXJdO1xudHlwZSBFeHRWYXJpYW50ID0gKHR5cGVvZiBFWFRfVkFSSUFOVFMpW251bWJlcl07XG5cbmZ1bmN0aW9uIGlzVmFyaWFudChzdHI6IHN0cmluZyk6IHN0ciBpcyBWYXJpYW50IHtcblx0cmV0dXJuIChWQVJJQU5UUyBhcyBSZWFkb25seUFycmF5PHN0cmluZz4pLmluY2x1ZGVzKHN0cik7XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRWYXJpYW50KHN0cjogc3RyaW5nKTogc3RyIGlzIFZhbGlkVmFyaWFudCB7XG5cdHJldHVybiAoVkFMSURfVkFSSUFOVFMgYXMgUmVhZG9ubHlBcnJheTxzdHJpbmc+KS5pbmNsdWRlcyhzdHIpO1xufVxuXG5mdW5jdGlvbiBpc0V4dFZhcmlhbnQoc3RyOiBzdHJpbmcpOiBzdHIgaXMgRXh0VmFyaWFudCB7XG5cdHJldHVybiAoRVhUX1ZBUklBTlRTIGFzIFJlYWRvbmx5QXJyYXk8c3RyaW5nPikuaW5jbHVkZXMoc3RyKTtcbn1cblxuLyoqXG4gKiBNYXBzIGFkZGl0aW9uYWwgbGFuZyBjb2RlcyB0byBzdGFuZGFyZCB2YXJpYW50cy5cbiAqXG4gKiBAcmV0dXJucyBzdGFuZGFyZCB2YXJpYW50XG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZVZhcmlhbnQoZXh0VmFyaWFudDogRXh0VmFyaWFudCk6IFZhcmlhbnQge1xuXHRyZXR1cm4gKEVYVF9NQVBQSU5HW2V4dFZhcmlhbnRdID8/IGV4dFZhcmlhbnQpIGFzIFZhcmlhbnQ7XG59XG5cbi8qKlxuICogR2V0IGN1cnJlbnQgdmFyaWFudCBvZiB0aGUgcGFnZSAoZG9uJ3QgYmUgbWlzbGVkIGJ5IGNvbmZpZyBuYW1pbmcpLlxuICpcbiAqIEByZXR1cm5zIHZhcmlhbnQsIG51bGwgZm9yIG5vbi13aWtpdGV4dCBwYWdlIChidXQgTk9UIGFsbCBzdWNoIHBhZ2VzIHJldHVybnMgbnVsbCEpXG4gKi9cbmZ1bmN0aW9uIGdldFBhZ2VWYXJpYW50KCk6IFZhcmlhbnQgfCBudWxsIHtcblx0Y29uc3QgcmVzdWx0ID0gbXcuY29uZmlnLmdldCgnd2dVc2VyVmFyaWFudCcpO1xuXHRyZXR1cm4gcmVzdWx0ICE9PSBudWxsICYmIGlzRXh0VmFyaWFudChyZXN1bHQpID8gbm9ybWFsaXplVmFyaWFudChyZXN1bHQpIDogbnVsbDtcbn1cblxuLyoqXG4gKiBHZXQgYWNjb3VudCB2YXJpYW50LlxuICpcbiAqIEByZXR1cm5zIGFjY291bnQgdmFyaWFudCwgbnVsbCBmb3IgYW5vbnltb3VzIHVzZXJcbiAqL1xuZnVuY3Rpb24gZ2V0QWNjb3VudFZhcmlhbnQoKTogVmFyaWFudCB8IG51bGwge1xuXHRpZiAoaXNMb2dnZWRJbigpKSB7XG5cdFx0Y29uc3QgcmVzdWx0ID0gbXcudXNlci5vcHRpb25zLmdldCgndmFyaWFudCcpIGFzIHN0cmluZztcblx0XHRyZXR1cm4gaXNFeHRWYXJpYW50KHJlc3VsdCkgPyBub3JtYWxpemVWYXJpYW50KHJlc3VsdCkgOiBudWxsO1xuXHR9XG5cdHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBnZXRMb2NhbFZhcmlhbnQoKTogVmFyaWFudCB8IG51bGwge1xuXHRjb25zdCByZXN1bHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMT0NBTF9WQVJJQU5UX0tFWSk7XG5cdGlmIChyZXN1bHQgPT09IG51bGwgfHwgIWlzRXh0VmFyaWFudChyZXN1bHQpKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblx0cmV0dXJuIG5vcm1hbGl6ZVZhcmlhbnQocmVzdWx0KTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYnJvd3NlciBsYW5ndWFnZSBpZiBpdCdzIGEgQ2hpbmVzZSB2YXJpYW50LlxuICpcbiAqIEByZXR1cm5zIGJyb3dzZXIgdmFyaWFudFxuICovXG5mdW5jdGlvbiBnZXRCcm93c2VyVmFyaWFudCgpOiBWYXJpYW50IHwgbnVsbCB7XG5cdHJldHVybiAoXG5cdFx0bmF2aWdhdG9yLmxhbmd1YWdlc1xuXHRcdFx0Lm1hcCgobGFuZykgPT4ge1xuXHRcdFx0XHRyZXR1cm4gbGFuZy50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0fSlcblx0XHRcdC5maWx0ZXIoaXNFeHRWYXJpYW50KVxuXHRcdFx0Lm1hcChub3JtYWxpemVWYXJpYW50KVxuXHRcdFx0LmZpbmQoaXNWYXJpYW50KSA/PyBudWxsXG5cdCk7XG59XG5cbi8qKlxuICogR2V0IHRoZSBcIm5hdHVyYWxcIiB2YXJpYW50IGluZmVycmVkIGJ5IE1lZGlhV2lraSBmb3IgYW5vbnltb3VzIHVzZXJzXG4gKiB3aGVuIHRoZSBsaW5rIGRvZXNuJ3Qgc3BlY2lmeSBhIHZhcmlhbnQuXG4gKlxuICogVXNlZCBpbiBsaW5rIG5vcm1hbGl6YXRpb24uXG4gKlxuICogRklYTUU6IE9sZCBTYWZhcmkgaXMga25vd24gdG8gYnJlYWsgdGhpcyBtZXRob2QuXG4gKiBVc2VyIHJlcG9ydGVkIHRoYXQgb24gYW4gaU9TIDE0IGRldmljZSB3aXRoIENoaW5lc2UgbGFuZ3VhZ2UgYW5kIFNpbmdhcG9yZSByZWdpb24gc2V0dGluZ3MsXG4gKiBBY2NlcHQtTGFuZ3VhZ2UgaXMgemgtY24gKHRodXMgaW5mZXJyZWQgYnkgTWVkaWFXaWtpKSBidXQgdGhpcyBtZXRob2QgcmV0dXJucyB6aC1zZy5cbiAqXG4gKiBAcmV0dXJucyB2YXJpYW50XG4gKi9cbmZ1bmN0aW9uIGdldE1lZGlhV2lraVZhcmlhbnQoKTogVmFyaWFudCB8IG51bGwge1xuXHRyZXR1cm4gZ2V0QWNjb3VudFZhcmlhbnQoKSA/PyBnZXRCcm93c2VyVmFyaWFudCgpO1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZSBwcmVmZXJyZWQgdmFyaWFudCBmcm9tIGJyb3dzZXIgdmFyaWFudCwgbG9jYWwgdmFyaWFudCBhbmQgYWNjb3VudCB2YXJpYW50LlxuICpcbiAqIFByaW9yaXR5OiBhY2NvdW50IHZhcmlhbnQgPiBicm93c2VyIHZhcmlhbnQgPiBsb2NhbCB2YXJpYW50XG4gKlxuICogQHJldHVybnMgcHJlZmVycmVkIHZhcmlhbnRcbiAqL1xuZnVuY3Rpb24gY2FsY3VsYXRlUHJlZmVycmVkVmFyaWFudCgpOiBWYWxpZFZhcmlhbnQgfCBudWxsIHtcblx0cmV0dXJuIFtnZXRBY2NvdW50VmFyaWFudCgpLCBnZXRCcm93c2VyVmFyaWFudCgpLCBnZXRMb2NhbFZhcmlhbnQoKV1cblx0XHQubWFwKCh2YXJpYW50KSA9PiB7XG5cdFx0XHRyZXR1cm4gdmFyaWFudCAhPT0gbnVsbCAmJiBpc1ZhbGlkVmFyaWFudCh2YXJpYW50KSA/IHZhcmlhbnQgOiBudWxsO1xuXHRcdH0pXG5cdFx0LnJlZHVjZSgocHJldiwgY3VycikgPT4ge1xuXHRcdFx0cmV0dXJuIHByZXYgPz8gY3Vycjtcblx0XHR9KTtcbn1cblxudHlwZSBTZXRMb2NhbFZhcmlhbnQgPSB0eXBlb2Ygc2V0TG9jYWxWYXJpYW50O1xuXG5mdW5jdGlvbiBzZXRMb2NhbFZhcmlhbnQodmFyaWFudDogVmFyaWFudCk6IHZvaWQge1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShMT0NBTF9WQVJJQU5UX0tFWSwgdmFyaWFudCk7XG59XG5cbnR5cGUgU2V0T3B0T3V0ID0gdHlwZW9mIHNldE9wdE91dDtcblxuZnVuY3Rpb24gc2V0T3B0T3V0KCk6IHZvaWQge1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShPUFRPVVRfS0VZLCAnJyk7XG59XG5cbmZ1bmN0aW9uIGlzT3B0T3V0ZWQoKTogYm9vbGVhbiB7XG5cdHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShPUFRPVVRfS0VZKSAhPT0gbnVsbDtcbn1cblxuZXhwb3J0IHtcblx0dHlwZSBTZXRMb2NhbFZhcmlhbnQsXG5cdHR5cGUgU2V0T3B0T3V0LFxuXHR0eXBlIFZhbGlkVmFyaWFudCxcblx0dHlwZSBWYXJpYW50LFxuXHRpc1ZhcmlhbnQsXG5cdGlzVmFsaWRWYXJpYW50LFxuXHRnZXRQYWdlVmFyaWFudCxcblx0Z2V0QWNjb3VudFZhcmlhbnQsXG5cdGdldExvY2FsVmFyaWFudCxcblx0Z2V0QnJvd3NlclZhcmlhbnQsXG5cdGdldE1lZGlhV2lraVZhcmlhbnQsXG5cdGNhbGN1bGF0ZVByZWZlcnJlZFZhcmlhbnQsXG5cdHNldExvY2FsVmFyaWFudCxcblx0c2V0T3B0T3V0LFxuXHRpc09wdE91dGVkLFxufTtcbiIsICJpbXBvcnQge1ZhcmlhbnQsIGdldE1lZGlhV2lraVZhcmlhbnQsIGlzVmFsaWRWYXJpYW50LCBzZXRMb2NhbFZhcmlhbnR9IGZyb20gJy4vbW9kZWwnO1xuXG5jb25zdCBSRUdFWF9XSUtJX1VSTCA9IC9eXFwvKD86d2lraXx6aCg/Oi1cXHcrKT8pXFwvL2k7XG5jb25zdCBSRUdFWF9WQVJJQU5UX1VSTCA9IC9eXFwvemgoPzotXFx3Kyk/XFwvL2k7XG5jb25zdCBWQVJJQU5UX1BBUkFNID0gJ3ZhLXZhcmlhbnQnO1xuXG5mdW5jdGlvbiBpc0VsaWdpYmxlRm9yUmV3cml0aW5nKGxpbms6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHR0cnkge1xuXHRcdC8vIE5vIHJld3JpdGluZyBmb3IgZW1wdHkgbGlua3Ncblx0XHRpZiAobGluayA9PT0gJycpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0Y29uc3QgdXJsID0gbmV3IFVSTChsaW5rLCBsb2NhdGlvbi5vcmlnaW4pO1xuXHRcdC8vIE5vIHJld3JpdGluZyBpZiBsaW5rIGl0c2VsZiBoYXMgdmFyaWFudCBpbmZvXG5cdFx0aWYgKFJFR0VYX1ZBUklBTlRfVVJMLnRlc3QodXJsLnBhdGhuYW1lKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZiAodXJsLnNlYXJjaFBhcmFtcy5oYXMoJ3ZhcmlhbnQnKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHQvLyBObyByZXdyaXRpbmcgZm9yIGZvcmVpZ24gb3JpZ2luIFVSTHNcblx0XHQvLyBOb3RlIHRoYXQgbGlua3MgbGlrZSBqYXZhc2NyaXB0OnZvaWQoMCkgYXJlIGJsb2NrZWQgYnkgdGhpc1xuXHRcdGlmICh1cmwuaG9zdCAhPT0gbG9jYXRpb24uaG9zdCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmV3cml0ZUxpbmsobGluazogc3RyaW5nLCB2YXJpYW50OiBWYXJpYW50KTogc3RyaW5nIHtcblx0dHJ5IHtcblx0XHRjb25zdCBub3JtYWxpemF0aW9uVGFyZ2V0VmFyaWFudCA9IGdldE1lZGlhV2lraVZhcmlhbnQoKTtcblx0XHRjb25zdCB1cmwgPSBuZXcgVVJMKGxpbmssIGxvY2F0aW9uLm9yaWdpbik7XG5cdFx0Y29uc3Qge3BhdGhuYW1lLCBzZWFyY2hQYXJhbXN9ID0gdXJsO1xuXG5cdFx0aWYgKFJFR0VYX1dJS0lfVVJMLnRlc3QocGF0aG5hbWUpKSB7XG5cdFx0XHR1cmwucGF0aG5hbWUgPSBgLyR7dmFyaWFudH0vJHt1cmwucGF0aG5hbWUucmVwbGFjZShSRUdFWF9XSUtJX1VSTCwgJycpfWA7XG5cdFx0XHRzZWFyY2hQYXJhbXMuZGVsZXRlKCd2YXJpYW50Jyk7IC8vIEZvciB0aGluZ3MgbGlrZSAvemgtY24vQT92YXJpYW50PXpoLWhrXG5cdFx0fSBlbHNlIHtcblx0XHRcdHNlYXJjaFBhcmFtcy5zZXQoJ3ZhcmlhbnQnLCB2YXJpYW50KTtcblx0XHR9XG5cblx0XHRpZiAodmFyaWFudCA9PT0gbm9ybWFsaXphdGlvblRhcmdldFZhcmlhbnQpIHtcblx0XHRcdC8vIE5vcm1hbGl6ZSB0aGUgbGluay5cblx0XHRcdC8vXG5cdFx0XHQvLyBGb3IgZXhhbXBsZSwgZm9yIGxpbmsgL3poLXR3L1RpdGxlIGFuZCBub3JtYWxpemF0aW9uIHZhcmlhbnQgemgtdHcsIHRoZSByZXN1bHQgaXMgL3dpa2kvVGl0bGUsXG5cdFx0XHQvLyB3aGlsZSBmb3IgdGhlIHNhbWUgbGluayBhbmQgbm9ybWFsaXphdGlvbiB2YXJpYW50IHpoLWNuLCB0aGUgcmVzdWx0IGlzIC96aC10dy9UaXRsZSAodW5jaGFuZ2VkKS5cblx0XHRcdHVybC5wYXRobmFtZSA9IHVybC5wYXRobmFtZS5yZXBsYWNlKFJFR0VYX1dJS0lfVVJMLCAnL3dpa2kvJyk7XG5cdFx0XHR1cmwuc2VhcmNoUGFyYW1zLmRlbGV0ZSgndmFyaWFudCcpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHJlc3VsdCA9IHVybC50b1N0cmluZygpO1xuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIGxpbms7XG5cdH1cbn1cblxuaW50ZXJmYWNlIFJlZGlyZWN0aW9uT3B0aW9ucyB7XG5cdGxpbms/OiBzdHJpbmc7XG5cdC8qKiBTaG91bGQgc3RpbGwgcmVkaXJlY3QgZXZlbiBkZXN0aW5hdGlvbiBsaW5rIGlzIHRoZSBzYW1lIGFzIGN1cnJlbnQgcGFnZSAqL1xuXHRmb3JjZWQ/OiBib29sZWFuO1xufVxuXG50eXBlIFJlZGlyZWN0ID0gdHlwZW9mIHJlZGlyZWN0O1xuXG5mdW5jdGlvbiByZWRpcmVjdChwcmVmZXJyZWRWYXJpYW50OiBWYXJpYW50LCBvcHRpb25zOiBSZWRpcmVjdGlvbk9wdGlvbnMgPSB7fSk6IHZvaWQge1xuXHRjb25zdCBvcmlnTGluayA9IG9wdGlvbnMubGluayA/PyBsb2NhdGlvbi5ocmVmO1xuXHRjb25zdCBuZXdMaW5rID0gcmV3cml0ZUxpbmsob3JpZ0xpbmssIHByZWZlcnJlZFZhcmlhbnQpO1xuXG5cdC8vIFByZXZlbnQgaW5maW5pdGUgcmVkaXJlY3RzXG5cdC8vIFRoaXMgY291bGQgaGFwcGVuIG9jY2FzaW9uYWxseSwgc2VlIGdldE1lZGlhV2lraVZhcmlhbnQoKSdzIGNvbW1lbnRzXG5cdGlmIChvcHRpb25zLmZvcmNlZCB8fCBuZXdMaW5rICE9PSBsb2NhdGlvbi5ocmVmKSB7XG5cdFx0Ly8gVXNlIHJlcGxhY2UoKSB0byBwcmV2ZW50IG5hdmlnYXRpbmcgYmFja1xuXHRcdGxvY2F0aW9uLnJlcGxhY2UobmV3TGluayk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY2hlY2tUaGlzUGFnZShwcmVmZXJyZWRWYXJpYW50OiBWYXJpYW50LCBwYWdlVmFyaWFudD86IFZhcmlhbnQpOiB2b2lkIHtcblx0aWYgKHBhZ2VWYXJpYW50ID09PSBwcmVmZXJyZWRWYXJpYW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcmVkaXJlY3Rpb25PcmlnaW46IHN0cmluZyB8IG51bGwgPSBtdy5jb25maWcuZ2V0KCd3Z1JlZGlyZWN0ZWRGcm9tJyk7XG5cdGlmIChyZWRpcmVjdGlvbk9yaWdpbiA9PT0gbnVsbCkge1xuXHRcdHJlZGlyZWN0KHByZWZlcnJlZFZhcmlhbnQpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIFVzZSBVUkwgdG8gcmVzZXJ2ZSBvdGhlciBwYXJ0cyBvZiB0aGUgbGlua1xuXHRjb25zdCByZWRpcmVjdGlvblVSTCA9IG5ldyBVUkwobG9jYXRpb24uaHJlZik7XG5cdHJlZGlyZWN0aW9uVVJMLnBhdGhuYW1lID0gYC93aWtpLyR7cmVkaXJlY3Rpb25PcmlnaW59YDtcblx0cmVkaXJlY3QocHJlZmVycmVkVmFyaWFudCwge2xpbms6IHJlZGlyZWN0aW9uVVJMLnRvU3RyaW5nKCl9KTtcbn1cblxuZnVuY3Rpb24gcmV3cml0ZUFuY2hvcnModmFyaWFudDogVmFyaWFudCk6IHZvaWQge1xuXHRmb3IgKGNvbnN0IG5hbWUgb2YgWydjbGljaycsICdhdXhjbGljaycsICdkcmFnc3RhcnQnXSkge1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgKGV2KSA9PiB7XG5cdFx0XHRjb25zdCB7dGFyZ2V0fSA9IGV2O1xuXG5cdFx0XHRpZiAodGFyZ2V0IGluc3RhbmNlb2YgRWxlbWVudCkge1xuXHRcdFx0XHQvLyBEbyBub3Qgd3JpdGUgPGE+IHdpdGggaGFzaCBvbmx5IGhyZWYgb3Igbm8gaHJlZlxuXHRcdFx0XHQvLyB3aGljaCBpcyBrbm93biB0byBjYXVzZSBicmVha2FnZSBpbiBlLmcuIFZpc3VhbCBFZGl0b3Jcblx0XHRcdFx0Y29uc3QgYW5jaG9yOiBIVE1MQW5jaG9yRWxlbWVudCB8IG51bGwgPSB0YXJnZXQuY2xvc2VzdCgnYVtocmVmXTpub3QoW2hyZWZePVwiI1wiXSknKTtcblxuXHRcdFx0XHRpZiAoYW5jaG9yICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0Y29uc3Qgb3JpZ0xpbmsgPSBhbmNob3IuaHJlZjtcblx0XHRcdFx0XHRpZiAoIWlzRWxpZ2libGVGb3JSZXdyaXRpbmcob3JpZ0xpbmspKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29uc3QgbmV3TGluayA9IHJld3JpdGVMaW5rKG9yaWdMaW5rLCB2YXJpYW50KTtcblx0XHRcdFx0XHRpZiAobmV3TGluayA9PT0gb3JpZ0xpbmspIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBCcm93c2VyIHN1cHBvcnQ6IFNhZmFyaSA8IDE0XG5cdFx0XHRcdFx0Ly8gRmFpbCBzaWxlbnRseSB3aGVuIERyYWdFdmVudCBpcyBub3QgcHJlc2VudFxuXHRcdFx0XHRcdGlmICh3aW5kb3cuRHJhZ0V2ZW50ICYmIGV2IGluc3RhbmNlb2YgRHJhZ0V2ZW50ICYmIGV2LmRhdGFUcmFuc2Zlcikge1xuXHRcdFx0XHRcdFx0Ly8gTW9kaWZ5IGRyYWcgZGF0YSBkaXJlY3RseSBiZWNhdXNlIHNldHRpbmcgaHJlZiBoYXMgbm8gZWZmZWN0IGluIGRyYWcgZXZlbnRcblx0XHRcdFx0XHRcdGZvciAoY29uc3QgdHlwZSBvZiBldi5kYXRhVHJhbnNmZXIudHlwZXMpIHtcblx0XHRcdFx0XHRcdFx0ZXYuZGF0YVRyYW5zZmVyLnNldERhdGEodHlwZSwgbmV3TGluayk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIFVzZSBhIG11dGV4IHRvIGF2b2lkIGJlaW5nIG92ZXJ3cml0dGVuIGJ5IG92ZXJsYXBwZWQgaGFuZGxlciBjYWxsc1xuXHRcdFx0XHRcdFx0aWYgKGFuY2hvci5kYXRhc2V0Wyd2YU11dGV4J10gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0XHRhbmNob3IuZGF0YXNldFsndmFNdXRleCddID0gJyc7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGFuY2hvci5ocmVmID0gbmV3TGluaztcblxuXHRcdFx0XHRcdFx0Ly8gSEFDSzogd29ya2Fyb3VuZCBwb3B1cHMgbm90IHdvcmtpbmcgb24gbW9kaWZpZWQgbGlua3Ncblx0XHRcdFx0XHRcdC8vIEFkZCBoYW5kbGVyIHRvIDxhPiBkaXJlY3RseSBzbyBpdCB3YXMgdHJpZ2dlcmVkIGJlZm9yZSBhbnl0aGluZyBlbHNlXG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IGlubmVyTmFtZSBvZiBbJ21vdXNlb3ZlcicsICdtb3VzZWxlYXZlJywgJ2tleXVwJ10pIHtcblx0XHRcdFx0XHRcdFx0YW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdFx0XHRcdFx0aW5uZXJOYW1lLFxuXHRcdFx0XHRcdFx0XHRcdCgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChhbmNob3IuZGF0YXNldFsndmFNdXRleCddICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0YW5jaG9yLmhyZWYgPSBvcmlnTGluaztcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVsZXRlIGFuY2hvci5kYXRhc2V0Wyd2YU11dGV4J107XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHR7b25jZTogdHJ1ZX1cblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fVxufVxuXG5mdW5jdGlvbiBzaG93VmFyaWFudFByb21wdCgpOiB2b2lkIHtcblx0Y29uc3QgbW9kdWxlTmFtZSA9ICdleHQuZ2FkZ2V0LlZhcmlhbnRBbGx5RGlhbG9nJztcblx0dm9pZCBtdy5sb2FkZXIudXNpbmcobW9kdWxlTmFtZSwgKHJlcXVpcmUpID0+IHtcblx0XHRyZXF1aXJlKG1vZHVsZU5hbWUpO1xuXHR9KTtcbn1cblxuLyoqXG4gKiBTZXQgbG9jYWwgdmFyaWFudCBhY2NvcmRpbmcgdG8gVVJMIHF1ZXJ5IHBhcmFtZXRlcnMuXG4gKlxuICogZS5nLiBhIFVSTCB3aXRoID92YS12YXJpYW50PXpoLWNuIHdpbGwgc2V0IGxvY2FsIHZhcmlhbnQgdG8gemgtY25cbiAqL1xuZnVuY3Rpb24gYXBwbHlVUkxWYXJpYW50KCk6IHZvaWQge1xuXHRjb25zdCB2YXJpYW50ID0gbmV3IFVSTChsb2NhdGlvbi5ocmVmKS5zZWFyY2hQYXJhbXMuZ2V0KFZBUklBTlRfUEFSQU0pO1xuXHRpZiAodmFyaWFudCAhPT0gbnVsbCAmJiBpc1ZhbGlkVmFyaWFudCh2YXJpYW50KSkge1xuXHRcdHNldExvY2FsVmFyaWFudCh2YXJpYW50KTtcblx0fVxufVxuXG5leHBvcnQge1xuXHR0eXBlIFJlZGlyZWN0LFxuXHRpc0VsaWdpYmxlRm9yUmV3cml0aW5nLFxuXHRyZXdyaXRlTGluayxcblx0cmVkaXJlY3QsXG5cdGNoZWNrVGhpc1BhZ2UsXG5cdHJld3JpdGVBbmNob3JzLFxuXHRzaG93VmFyaWFudFByb21wdCxcblx0YXBwbHlVUkxWYXJpYW50LFxufTtcbiJdLAogICJt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Y0FBYyxHQUFHO0FBQ3JCO0VBQ0Q7QUFFQTZHLGtCQUFnQjtBQUVoQixRQUFNL0MsbUJBQW1CMUIsMEJBQTBCO0FBQ25ELE1BQUkwQixxQkFBcUIsTUFBTTtBQUk5Qi9FLG9CQUFnQitFLGdCQUFnQjtFQUNqQztBQUVBLFFBQU1PLGNBQWNwRCxlQUFlO0FBR25DLE1BQUlvRCxnQkFBZ0IsUUFBUSxDQUFDbkUsZUFBZSxHQUFHO0FBRzlDLFFBQUk0RCxxQkFBcUIsTUFBTTtBQUM5QlUscUJBQWVWLGdCQUFnQjtJQUNoQztBQUNBO0VBQ0Q7QUFHQSxNQUFJQSxxQkFBcUIsTUFBTTtBQUM5QixRQUFJaEUsY0FBYyxHQUFHO0FBQ3BCMEcsd0JBQWtCO0FBQ2xCO0lBQ0Q7QUFFQTtFQUNEO0FBS0EsTUFBSWhILGVBQWUsS0FBSyxDQUFDc0QsdUJBQXVCakQsU0FBU29FLElBQUksR0FBRztBQUMvRE8sbUJBQWVWLGdCQUFnQjtBQUMvQjtFQUNEO0FBRUFNLGdCQUFjTixrQkFBa0JPLFdBQVc7QUFDM0NHLGlCQUFlVixnQkFBZ0I7QUFDaEM7QUFFQWdELEtBQUs7IiwKICAibmFtZXMiOiBbIlZhcmlhbnRBbGx5X2V4cG9ydHMiLCAiX19leHBvcnQiLCAicmVkaXJlY3QiLCAic2V0TG9jYWxWYXJpYW50IiwgInNldE9wdE91dCIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJfX3RvQ29tbW9uSlMiLCAiaXNMb2dnZWRJbiIsICJtdyIsICJjb25maWciLCAiZXhpc3RzIiwgImlzUmVmZXJyZXJTZWxmIiwgIlVSTCIsICJkb2N1bWVudCIsICJyZWZlcnJlciIsICJob3N0bmFtZSIsICJsb2NhdGlvbiIsICJpc1ZpZXdpbmdQYWdlIiwgImdldCIsICJpc0xhbmdDaGluZXNlIiwgInN0YXJ0c1dpdGgiLCAiaXNXaWtpdGV4dFBhZ2UiLCAiTE9DQUxfVkFSSUFOVF9LRVkiLCAiT1BUT1VUX0tFWSIsICJWQUxJRF9WQVJJQU5UUyIsICJWQVJJQU5UUyIsICJFWFRfVkFSSUFOVFMiLCAiRVhUX01BUFBJTkciLCAiaXNWYXJpYW50IiwgInN0ciIsICJpbmNsdWRlcyIsICJpc1ZhbGlkVmFyaWFudCIsICJpc0V4dFZhcmlhbnQiLCAibm9ybWFsaXplVmFyaWFudCIsICJleHRWYXJpYW50IiwgIl9FWFRfTUFQUElORyRleHRWYXJpYSIsICJnZXRQYWdlVmFyaWFudCIsICJyZXN1bHQiLCAiZ2V0QWNjb3VudFZhcmlhbnQiLCAidXNlciIsICJvcHRpb25zIiwgImdldExvY2FsVmFyaWFudCIsICJsb2NhbFN0b3JhZ2UiLCAiZ2V0SXRlbSIsICJnZXRCcm93c2VyVmFyaWFudCIsICJfbmF2aWdhdG9yJGxhbmd1YWdlcyQiLCAibmF2aWdhdG9yIiwgImxhbmd1YWdlcyIsICJtYXAiLCAibGFuZyIsICJ0b0xvd2VyQ2FzZSIsICJmaWx0ZXIiLCAiZmluZCIsICJnZXRNZWRpYVdpa2lWYXJpYW50IiwgIl9nZXRBY2NvdW50VmFyaWFudCIsICJjYWxjdWxhdGVQcmVmZXJyZWRWYXJpYW50IiwgInZhcmlhbnQiLCAicmVkdWNlIiwgInByZXYiLCAiY3VyciIsICJzZXRJdGVtIiwgImlzT3B0T3V0ZWQiLCAiUkVHRVhfV0lLSV9VUkwiLCAiUkVHRVhfVkFSSUFOVF9VUkwiLCAiVkFSSUFOVF9QQVJBTSIsICJpc0VsaWdpYmxlRm9yUmV3cml0aW5nIiwgImxpbmsiLCAidXJsIiwgIm9yaWdpbiIsICJ0ZXN0IiwgInBhdGhuYW1lIiwgInNlYXJjaFBhcmFtcyIsICJoYXMiLCAiaG9zdCIsICJyZXdyaXRlTGluayIsICJub3JtYWxpemF0aW9uVGFyZ2V0VmFyaWFudCIsICJjb25jYXQiLCAicmVwbGFjZSIsICJkZWxldGUiLCAic2V0IiwgInRvU3RyaW5nIiwgInByZWZlcnJlZFZhcmlhbnQiLCAiX29wdGlvbnMkbGluayIsICJvcmlnTGluayIsICJocmVmIiwgIm5ld0xpbmsiLCAiZm9yY2VkIiwgImNoZWNrVGhpc1BhZ2UiLCAicGFnZVZhcmlhbnQiLCAicmVkaXJlY3Rpb25PcmlnaW4iLCAicmVkaXJlY3Rpb25VUkwiLCAicmV3cml0ZUFuY2hvcnMiLCAiX2kiLCAiX2FyciIsICJsZW5ndGgiLCAibmFtZSIsICJhZGRFdmVudExpc3RlbmVyIiwgImV2IiwgInRhcmdldCIsICJFbGVtZW50IiwgImFuY2hvciIsICJjbG9zZXN0IiwgIndpbmRvdyIsICJEcmFnRXZlbnQiLCAiZGF0YVRyYW5zZmVyIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAidHlwZXMiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgInR5cGUiLCAidmFsdWUiLCAic2V0RGF0YSIsICJlcnIiLCAiZSIsICJmIiwgImRhdGFzZXQiLCAiX2kyIiwgIl9hcnIyIiwgImlubmVyTmFtZSIsICJvbmNlIiwgInNob3dWYXJpYW50UHJvbXB0IiwgIm1vZHVsZU5hbWUiLCAibG9hZGVyIiwgInVzaW5nIiwgInJlcXVpcmUyIiwgImFwcGx5VVJMVmFyaWFudCIsICJtYWluIl0KfQo=
