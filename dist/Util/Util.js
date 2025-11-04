/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/Util}
 * @author 安忆 <i@anyi.in>
 * @license GPL-3.0-or-later {@link https://youshou.wiki/wiki/H:GPLV3}
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

// dist/Util/Util.js
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);
//! src/Util/Util.ts
var Util_exports = {};
__export(Util_exports, {
  MwUri: () => MwUri,
  addEventListenerWithRemover: () => addEventListenerWithRemover,
  changeOpacityWhenMouseEnterOrLeave: () => changeOpacityWhenMouseEnterOrLeave,
  checkA11yConfirmKey: () => checkA11yConfirmKey,
  checkDependencies: () => checkDependencies,
  delay: () => delay,
  findVariants: () => findVariants,
  generateArray: () => generateArray,
  generateSvgDataUrl: () => generateSvgDataUrl,
  getBody: () => getBody,
  getWpSummaryContent: () => getWpSummaryContent,
  getWpTextbox1Content: () => getWpTextbox1Content,
  initMwApi: () => initMwApi,
  isValidKey: () => isValidKey,
  oouiConfirmWithStyle: () => oouiConfirmWithStyle,
  queryGlobalUserGroups: () => queryGlobalUserGroups,
  queryUserGroups: () => queryUserGroups,
  scrollTop: () => scrollTop,
  setWpSummaryContent: () => setWpSummaryContent,
  setWpTextbox1Content: () => setWpTextbox1Content,
  uniqueArray: () => uniqueArray,
  userIsInGroup: () => userIsInGroup
});
module.exports = __toCommonJS(Util_exports);
//! src/Util/modules/addEventListenerWithRemover.ts
var addEventListenerWithRemover = ({
  target,
  type,
  listener,
  options = {}
}) => {
  target.addEventListener(type, listener, options);
  return {
    remove: () => {
      target.removeEventListener(type, listener, options);
    }
  };
};
//! src/Util/modules/changeOpacityWhenMouseEnterOrLeave.ts
var changeOpacityWhenMouseEnterOrLeave = (event, opacity = 0.7) => {
  event.currentTarget.style.opacity = event.type === "mouseenter" ? "1" : opacity.toString();
};
//! src/Util/modules/checkA11yConfirmKey.ts
var checkA11yConfirmKey = (event) => {
  if (["click", "keydown"].includes(event.type)) {
    if (event.type === "keydown") {
      return ["Enter", " "].includes(event.key);
    }
    return true;
  }
  return false;
};
//! src/Util/modules/generateArray.ts
function generateArray(...args) {
  return args.flatMap((arg) => {
    if (Array.isArray(arg)) {
      return arg;
    }
    if (arg instanceof NodeList) {
      return [...arg];
    }
    return [arg];
  });
}
//! src/Util/modules/initMwApi.ts
function initMwApi(userAgent, apiUri) {
  const apiOptions = {
    ajax: {
      headers: {
        "Api-User-Agent": userAgent ? "YsArchives/1.1 (".concat(userAgent, ")") : "YsArchives/1.1"
      }
    }
  };
  if (apiUri) {
    return new mw.ForeignApi(apiUri, apiOptions);
  }
  return new mw.Api(apiOptions);
}
//! src/Util/modules/uniqueArray.ts
var uniqueArray = function uniqueArray2(args) {
  /**!
   * SPDX-License-Identifier: CC-BY-SA-4.0
   *
   * @source {@link https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array/922982}
   * @license CC-BY-SA-4.0
   */
  const result = [];
  var _iterator2 = _createForOfIteratorHelper(args), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      const item = _step2.value;
      if (!result.includes(item)) {
        result[result.length] = item;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return result;
};
//! src/Util/modules/checkDependencies.ts
function checkDependencies(_x, _x2) {
  return _checkDependencies.apply(this, arguments);
}
//! src/Util/modules/delay.ts
function _checkDependencies() {
  _checkDependencies = _asyncToGenerator(function* (gadgetNames, option) {
    const api = initMwApi("Util-CheckDependencies");
    const gadgets = uniqueArray(generateArray(gadgetNames));
    option || (option = 1);
    var _iterator3 = _createForOfIteratorHelper(gadgets), _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
        const gadget = _step3.value;
        if (option === "0" && mw.user.options.get("gadget-".concat(gadget)) || option === "1" && !mw.user.options.get("gadget-".concat(gadget))) {
          yield api.postWithEditToken({
            action: "options",
            change: "gadget-".concat(gadget, "=").concat(option)
          });
          yield mw.loader.using("ext.gadget.".concat(gadget));
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  });
  return _checkDependencies.apply(this, arguments);
}
var delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};
//! src/Util/modules/findVariants.ts
function findVariants(_x3) {
  return _findVariants.apply(this, arguments);
}
//! src/Util/modules/generateSvgDataUrl.ts
function _findVariants() {
  _findVariants = _asyncToGenerator(function* (text) {
    const api = initMwApi("Util-FindVariants");
    const VARIANTS = ["zh-hans", "zh-hant", "zh-cn", "zh-hk", "zh-mo", "zh-sg", "zh-my", "zh-tw"];
    const allVariants = [];
    const params = {
      action: "parse",
      contentmodel: "wikitext",
      format: "json",
      formatversion: "2",
      prop: ["displaytitle"],
      title: "temp",
      text
    };
    for (var _i2 = 0, _VARIANTS = VARIANTS; _i2 < _VARIANTS.length; _i2++) {
      var _response$query;
      const variant = _VARIANTS[_i2];
      params.uselang = variant;
      params.variant = variant;
      const response = yield api.post(params);
      const displaytitle = response === null || response === void 0 || (_response$query = response["query"]) === null || _response$query === void 0 ? void 0 : _response$query.displaytitle;
      const variantElement = document.createElement("variant");
      variantElement.innerHTML = displaytitle;
      if (variantElement.textContent) {
        allVariants[allVariants.length] = variantElement.textContent;
      }
    }
    return uniqueArray(allVariants);
  });
  return _findVariants.apply(this, arguments);
}
var generateSvgDataUrl = (svg) => {
  /**!
   * SPDX-License-Identifier: MIT
   *
   * @source svg-to-data-uri.js {@link https://github.com/heyallan/svg-to-data-uri/}
   * @author Allan Moreno
   * @license MIT {@link https://github.com/heyallan/svg-to-data-uri/blob/master/LICENSE}
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   */
  svg = svg.trim();
  svg = svg.slice(svg.indexOf("<svg"));
  if (!svg.startsWith("<svg") || !svg.endsWith("svg>")) {
    return "";
  }
  if (!svg.includes("http://www.w3.org/2000/svg")) {
    svg = svg.replace(/<svg/g, "<svg xmlns='http://www.w3.org/2000/svg'");
  }
  svg = svg.replace(/<!--.{1,}-->/g, "");
  svg = svg.replace(/version=["'](.{0,}?)["'](?=[\s>])/g, "");
  svg = svg.replace(/"'(.{1,})'"/g, "'$1'");
  svg = svg.replace(/"/g, "'");
  svg = svg.replace(/>\s{1,}</g, "><");
  svg = svg.replace(/\s{2,}/g, " ");
  svg = svg.trim();
  if (!svg.startsWith("<svg") || !svg.endsWith("svg>")) {
    return "";
  }
  svg = svg.replace(/&/g, "&amp;");
  svg = svg.replace(/[%#<>?[\\\]^`{|}]/g, encodeURIComponent);
  svg = "data:image/svg+xml,".concat(svg);
  return svg;
};
//! src/Util/modules/getBody.ts
var getBody = () => {
  return $.ready.then(() => {
    const $body = $("body");
    return $body;
  });
};
//! src/Util/modules/isValidKey.ts
var isValidKey = (object, key) => {
  return key in object;
};
//! src/Util/modules/mwUri.ts
var MwUri = class extends URL {
  extend(object) {
    for (var _i = 0, _Object$entries = Object.entries(object); _i < _Object$entries.length; _i++) {
      const [key, value] = _Object$entries[_i];
      this.searchParams.set(key, value);
    }
    return this;
  }
  getRelativePath() {
    return this.pathname + this.search + this.hash;
  }
};
//! src/Util/modules/oouiConfirmWithStyle.tsx
var import_ext_gadget = __toESM(require("ext.gadget.JSX"), 1);
var oouiConfirmWithStyle = (message) => OO.ui.confirm($(/* @__PURE__ */ import_ext_gadget.default.createElement("div", {
  className: "oo-ui-window-foot",
  style: {
    border: ".1rem solid #0645ad",
    display: "flex",
    justifyContent: "space-evenly"
  }
}, /* @__PURE__ */ import_ext_gadget.default.createElement("span", {
  style: {
    fontSize: "1.2rem",
    fontWeight: "500",
    lineHeight: "1.8",
    padding: ".4em 0"
  }
}, message)))).then((isConfirm) => isConfirm);
//! src/Util/modules/queryGlobalUserGroups.ts
function queryGlobalUserGroups(_x4) {
  return _queryGlobalUserGroups.apply(this, arguments);
}
//! src/Util/modules/queryUserGroups.ts
function _queryGlobalUserGroups() {
  _queryGlobalUserGroups = _asyncToGenerator(function* (guiuser) {
    const api = initMwApi("Util-QueryGlobalUserGroups");
    const CACHE_KEY_PREFIX = "ext.gadget.Util_queryGlobalUserGroups-";
    let groups = [];
    if (mw.storage.getObject(CACHE_KEY_PREFIX + guiuser)) {
      groups = mw.storage.getObject(CACHE_KEY_PREFIX + guiuser);
      groups = groups.filter((element) => {
        return element !== "*";
      });
    } else {
      const params = {
        action: "query",
        format: "json",
        formatversion: "2",
        meta: "globaluserinfo",
        guiuser,
        guiprop: "groups",
        smaxage: 600,
        maxage: 600
      };
      const response = yield api.get(params);
      const query = response["query"];
      if (query !== null && query !== void 0 && query.globaluserinfo) {
        var _query$globaluserinfo, _query$globaluserinfo2;
        groups = (_query$globaluserinfo = (_query$globaluserinfo2 = query.globaluserinfo) === null || _query$globaluserinfo2 === void 0 ? void 0 : _query$globaluserinfo2.groups) !== null && _query$globaluserinfo !== void 0 ? _query$globaluserinfo : [];
        groups = groups.filter((element) => {
          return element !== "*";
        });
        mw.storage.setObject(CACHE_KEY_PREFIX + guiuser, groups, 60 * 60);
      }
    }
    return {
      query: {
        globaluserinfo: {
          name: guiuser,
          groups
        }
      }
    };
  });
  return _queryGlobalUserGroups.apply(this, arguments);
}
function queryUserGroups(_x5) {
  return _queryUserGroups.apply(this, arguments);
}
//! src/Util/modules/scrollTop.ts
function _queryUserGroups() {
  _queryUserGroups = _asyncToGenerator(function* (users) {
    var _query$users;
    const api = initMwApi("Util-QueryUserGroups");
    const CACHE_KEY_PREFIX = "ext.gadget.Util_queryUserGroups-";
    const cachedQueryUsers = [];
    var _iterator4 = _createForOfIteratorHelper(users), _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
        const user = _step4.value;
        if (mw.storage.getObject(CACHE_KEY_PREFIX + user)) {
          let groups = mw.storage.getObject(CACHE_KEY_PREFIX + user);
          groups = groups.filter((element) => {
            return element !== "*";
          });
          cachedQueryUsers[cachedQueryUsers.length] = {
            name: user,
            groups
          };
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    const ususers = users.filter((v) => {
      return !mw.storage.getObject(CACHE_KEY_PREFIX + v);
    });
    const params = {
      ususers,
      action: "query",
      format: "json",
      formatversion: "2",
      list: "users",
      usprop: "groups",
      smaxage: 600,
      maxage: 600
    };
    const response = yield api.get(params);
    const query = response["query"];
    const queryUsers = [...(_query$users = query === null || query === void 0 ? void 0 : query.users) !== null && _query$users !== void 0 ? _query$users : [], ...cachedQueryUsers];
    for (var _i3 = 0, _queryUsers = queryUsers; _i3 < _queryUsers.length; _i3++) {
      const user = _queryUsers[_i3];
      if (user !== null && user !== void 0 && user.groups && user !== null && user !== void 0 && user.name) {
        let {
          groups
        } = user;
        groups = groups.filter((element) => {
          return element !== "*";
        });
        mw.storage.setObject(CACHE_KEY_PREFIX + user.name, groups, 60 * 60);
      }
    }
    return {
      query: {
        users: queryUsers
      }
    };
  });
  return _queryUserGroups.apply(this, arguments);
}
var scrollTop = (targetHeight, effectsOptionsOrDuration = {}) => {
  const options = typeof effectsOptionsOrDuration === "number" || typeof effectsOptionsOrDuration === "string" ? {
    duration: effectsOptionsOrDuration,
    easing: "linear"
  } : {
    duration: "slow",
    easing: "linear",
    ...effectsOptionsOrDuration
  };
  $(document).find("html, body").animate({
    scrollTop: targetHeight
  }, options);
};
//! src/Util/modules/userIsInGroup.ts
var userIsInGroup = (groups) => {
  const {
    wgUserGroups,
    wgGlobalGroups
  } = mw.config.get();
  return [...wgUserGroups || [], ...wgGlobalGroups || []].some((element) => {
    return generateArray(groups).includes(element);
  });
};
//! src/Util/modules/wpSummaryContent.ts
var getWpSummaryContent = ({
  $editForm
}) => {
  var _$editForm$find$val, _$editForm$find;
  return (_$editForm$find$val = (_$editForm$find = $editForm.find("#wpSummary")) === null || _$editForm$find === void 0 ? void 0 : _$editForm$find.val()) !== null && _$editForm$find$val !== void 0 ? _$editForm$find$val : "";
};
var setWpSummaryContent = ({
  $editForm,
  content
}) => {
  $editForm.find("#wpSummary").val(content);
};
//! src/Util/modules/wpTextbox1Content.ts
var getWpTextbox1Content = ({
  $editForm
}) => {
  var _$editForm$find$textS;
  return (_$editForm$find$textS = $editForm.find("#wpTextbox1").textSelection("getContents")) !== null && _$editForm$find$textS !== void 0 ? _$editForm$find$textS : "";
};
var setWpTextbox1Content = ({
  $editForm,
  content
}) => {
  $editForm.find("#wpTextbox1").textSelection("setContents", content);
};

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1V0aWwvVXRpbC50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlci50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2NoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9jaGVja0ExMXlDb25maXJtS2V5LnRzIiwgInNyYy9VdGlsL21vZHVsZXMvZ2VuZXJhdGVBcnJheS50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2luaXRNd0FwaS50cyIsICJzcmMvVXRpbC9tb2R1bGVzL3VuaXF1ZUFycmF5LnRzIiwgInNyYy9VdGlsL21vZHVsZXMvY2hlY2tEZXBlbmRlbmNpZXMudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9kZWxheS50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2ZpbmRWYXJpYW50cy50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2dlbmVyYXRlU3ZnRGF0YVVybC50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2dldEJvZHkudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9pc1ZhbGlkS2V5LnRzIiwgInNyYy9VdGlsL21vZHVsZXMvbXdVcmkudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9vb3VpQ29uZmlybVdpdGhTdHlsZS50c3giLCAic3JjL1V0aWwvbW9kdWxlcy9xdWVyeUdsb2JhbFVzZXJHcm91cHMudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9xdWVyeVVzZXJHcm91cHMudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9zY3JvbGxUb3AudHMiLCAic3JjL1V0aWwvbW9kdWxlcy91c2VySXNJbkdyb3VwLnRzIiwgInNyYy9VdGlsL21vZHVsZXMvd3BTdW1tYXJ5Q29udGVudC50cyIsICJzcmMvVXRpbC9tb2R1bGVzL3dwVGV4dGJveDFDb250ZW50LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQge2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcn0gZnJvbSAnLi9tb2R1bGVzL2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcic7XG5leHBvcnQge2NoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmV9IGZyb20gJy4vbW9kdWxlcy9jaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlJztcbmV4cG9ydCB7Y2hlY2tBMTF5Q29uZmlybUtleX0gZnJvbSAnLi9tb2R1bGVzL2NoZWNrQTExeUNvbmZpcm1LZXknO1xuZXhwb3J0IHtjaGVja0RlcGVuZGVuY2llc30gZnJvbSAnLi9tb2R1bGVzL2NoZWNrRGVwZW5kZW5jaWVzLnRzJztcbmV4cG9ydCB7ZGVsYXl9IGZyb20gJy4vbW9kdWxlcy9kZWxheSc7XG5leHBvcnQge2ZpbmRWYXJpYW50c30gZnJvbSAnLi9tb2R1bGVzL2ZpbmRWYXJpYW50cyc7XG5leHBvcnQge2dlbmVyYXRlQXJyYXl9IGZyb20gJy4vbW9kdWxlcy9nZW5lcmF0ZUFycmF5JztcbmV4cG9ydCB7Z2VuZXJhdGVTdmdEYXRhVXJsfSBmcm9tICcuL21vZHVsZXMvZ2VuZXJhdGVTdmdEYXRhVXJsJztcbmV4cG9ydCB7Z2V0Qm9keX0gZnJvbSAnLi9tb2R1bGVzL2dldEJvZHknO1xuZXhwb3J0IHtpbml0TXdBcGl9IGZyb20gJy4vbW9kdWxlcy9pbml0TXdBcGknO1xuZXhwb3J0IHtpc1ZhbGlkS2V5fSBmcm9tICcuL21vZHVsZXMvaXNWYWxpZEtleSc7XG5leHBvcnQge013VXJpfSBmcm9tICcuL21vZHVsZXMvbXdVcmknO1xuZXhwb3J0IHtvb3VpQ29uZmlybVdpdGhTdHlsZX0gZnJvbSAnLi9tb2R1bGVzL29vdWlDb25maXJtV2l0aFN0eWxlJztcbmV4cG9ydCB7cXVlcnlHbG9iYWxVc2VyR3JvdXBzfSBmcm9tICcuL21vZHVsZXMvcXVlcnlHbG9iYWxVc2VyR3JvdXBzJztcbmV4cG9ydCB7cXVlcnlVc2VyR3JvdXBzfSBmcm9tICcuL21vZHVsZXMvcXVlcnlVc2VyR3JvdXBzJztcbmV4cG9ydCB7c2Nyb2xsVG9wfSBmcm9tICcuL21vZHVsZXMvc2Nyb2xsVG9wJztcbmV4cG9ydCB7dXNlcklzSW5Hcm91cH0gZnJvbSAnLi9tb2R1bGVzL3VzZXJJc0luR3JvdXAnO1xuZXhwb3J0IHt1bmlxdWVBcnJheX0gZnJvbSAnLi9tb2R1bGVzL3VuaXF1ZUFycmF5JztcbmV4cG9ydCB7Z2V0V3BTdW1tYXJ5Q29udGVudCwgc2V0V3BTdW1tYXJ5Q29udGVudH0gZnJvbSAnLi9tb2R1bGVzL3dwU3VtbWFyeUNvbnRlbnQnO1xuZXhwb3J0IHtnZXRXcFRleHRib3gxQ29udGVudCwgc2V0V3BUZXh0Ym94MUNvbnRlbnR9IGZyb20gJy4vbW9kdWxlcy93cFRleHRib3gxQ29udGVudCc7XG4iLCAidHlwZSBBZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIgPSA8XG5cdFRhcmdldCBleHRlbmRzIERvY3VtZW50IHwgSFRNTEVsZW1lbnQgfCBFbGVtZW50IHwgTWVkaWFRdWVyeUxpc3QgfCBXaW5kb3csXG5cdFR5cGUgZXh0ZW5kcyBUYXJnZXQgZXh0ZW5kcyBEb2N1bWVudFxuXHRcdD8ga2V5b2YgRG9jdW1lbnRFdmVudE1hcFxuXHRcdDogVGFyZ2V0IGV4dGVuZHMgSFRNTEVsZW1lbnRcblx0XHRcdD8ga2V5b2YgSFRNTEVsZW1lbnRFdmVudE1hcFxuXHRcdFx0OiBUYXJnZXQgZXh0ZW5kcyBNZWRpYVF1ZXJ5TGlzdFxuXHRcdFx0XHQ/IGtleW9mIE1lZGlhUXVlcnlMaXN0RXZlbnRNYXBcblx0XHRcdFx0OiBUYXJnZXQgZXh0ZW5kcyBXaW5kb3dcblx0XHRcdFx0XHQ/IGtleW9mIFdpbmRvd0V2ZW50TWFwXG5cdFx0XHRcdFx0OiBrZXlvZiBHbG9iYWxFdmVudEhhbmRsZXJzRXZlbnRNYXAsXG5cdExpc3RlbmVyIGV4dGVuZHMgVGFyZ2V0IGV4dGVuZHMgRG9jdW1lbnRcblx0XHQ/IFR5cGUgZXh0ZW5kcyBrZXlvZiBEb2N1bWVudEV2ZW50TWFwXG5cdFx0XHQ/ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBEb2N1bWVudEV2ZW50TWFwW1R5cGVdKSA9PiB1bmtub3duXG5cdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93blxuXHRcdDogVGFyZ2V0IGV4dGVuZHMgSFRNTEVsZW1lbnRcblx0XHRcdD8gVHlwZSBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50RXZlbnRNYXBcblx0XHRcdFx0PyAodGhpczogVGFyZ2V0LCBldmVudDogSFRNTEVsZW1lbnRFdmVudE1hcFtUeXBlXSkgPT4gdW5rbm93blxuXHRcdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93blxuXHRcdFx0OiBUYXJnZXQgZXh0ZW5kcyBFbGVtZW50XG5cdFx0XHRcdD8gVHlwZSBleHRlbmRzIGtleW9mIEVsZW1lbnRFdmVudE1hcFxuXHRcdFx0XHRcdD8gKHRoaXM6IFRhcmdldCwgZXZlbnQ6IEVsZW1lbnRFdmVudE1hcFtUeXBlXSkgPT4gdW5rbm93blxuXHRcdFx0XHRcdDogKHRoaXM6IFRhcmdldCwgZXZlbnQ6IEV2ZW50KSA9PiB1bmtub3duXG5cdFx0XHRcdDogVGFyZ2V0IGV4dGVuZHMgTWVkaWFRdWVyeUxpc3Rcblx0XHRcdFx0XHQ/IFR5cGUgZXh0ZW5kcyBrZXlvZiBNZWRpYVF1ZXJ5TGlzdEV2ZW50TWFwXG5cdFx0XHRcdFx0XHQ/ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBNZWRpYVF1ZXJ5TGlzdEV2ZW50TWFwW1R5cGVdKSA9PiB1bmtub3duXG5cdFx0XHRcdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93blxuXHRcdFx0XHRcdDogVGFyZ2V0IGV4dGVuZHMgV2luZG93XG5cdFx0XHRcdFx0XHQ/IFR5cGUgZXh0ZW5kcyBrZXlvZiBXaW5kb3dFdmVudE1hcFxuXHRcdFx0XHRcdFx0XHQ/ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBXaW5kb3dFdmVudE1hcFtUeXBlXSkgPT4gdW5rbm93blxuXHRcdFx0XHRcdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93blxuXHRcdFx0XHRcdFx0OiAodGhpczogVGFyZ2V0LCBldmVudDogRXZlbnQpID0+IHVua25vd24sXG4+KHtcblx0dGFyZ2V0LFxuXHR0eXBlLFxuXHRsaXN0ZW5lcixcblx0b3B0aW9ucyxcbn06IHtcblx0dGFyZ2V0OiBUYXJnZXQ7XG5cdHR5cGU6IFR5cGU7XG5cdGxpc3RlbmVyOiBMaXN0ZW5lcjtcblx0b3B0aW9ucz86IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zO1xufSkgPT4ge1xuXHRyZW1vdmU6ICgpID0+IHZvaWQ7XG59O1xuXG5jb25zdCBhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXI6IEFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3ZlciA9ICh7dGFyZ2V0LCB0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyA9IHt9fSkgPT4ge1xuXHR0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciBhcyBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0LCBvcHRpb25zKTtcblx0cmV0dXJuIHtcblx0XHRyZW1vdmU6ICgpOiB2b2lkID0+IHtcblx0XHRcdHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyIGFzIEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QsIG9wdGlvbnMpO1xuXHRcdH0sXG5cdH07XG59O1xuXG5leHBvcnQge3R5cGUgQWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyLCBhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXJ9O1xuIiwgInR5cGUgQ2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZSA9IChldmVudDogTW91c2VFdmVudCB8IEpRdWVyeS5UcmlnZ2VyZWRFdmVudCwgb3BhY2l0eT86IG51bWJlcikgPT4gdm9pZDtcblxuY29uc3QgY2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZTogQ2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZSA9IChldmVudCwgb3BhY2l0eSA9IDAuNykgPT4ge1xuXHQoZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MRWxlbWVudCkuc3R5bGUub3BhY2l0eSA9IGV2ZW50LnR5cGUgPT09ICdtb3VzZWVudGVyJyA/ICcxJyA6IG9wYWNpdHkudG9TdHJpbmcoKTtcbn07XG5cbmV4cG9ydCB7dHlwZSBDaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlLCBjaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlfTtcbiIsICJ0eXBlIENoZWNrQTExeUNvbmZpcm1LZXkgPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQgfCBNb3VzZUV2ZW50IHwgSlF1ZXJ5LkNsaWNrRXZlbnQgfCBKUXVlcnkuS2V5RG93bkV2ZW50KSA9PiBib29sZWFuO1xuXG5jb25zdCBjaGVja0ExMXlDb25maXJtS2V5OiBDaGVja0ExMXlDb25maXJtS2V5ID0gKGV2ZW50KTogYm9vbGVhbiA9PiB7XG5cdGlmIChbJ2NsaWNrJywgJ2tleWRvd24nXS5pbmNsdWRlcyhldmVudC50eXBlKSkge1xuXHRcdGlmIChldmVudC50eXBlID09PSAna2V5ZG93bicpIHtcblx0XHRcdHJldHVybiBbJ0VudGVyJywgJyAnXS5pbmNsdWRlcygoZXZlbnQgYXMgS2V5Ym9hcmRFdmVudCkua2V5KTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IHt0eXBlIENoZWNrQTExeUNvbmZpcm1LZXksIGNoZWNrQTExeUNvbmZpcm1LZXl9O1xuIiwgInR5cGUgR2VuZXJhdGVBcnJheSA9IHR5cGVvZiBnZW5lcmF0ZUFycmF5O1xuXG5mdW5jdGlvbiBnZW5lcmF0ZUFycmF5PFQgZXh0ZW5kcyBbXT4oLi4uYXJnczogKFQgfCBUW10pW10pOiBUW107XG5mdW5jdGlvbiBnZW5lcmF0ZUFycmF5PFQgZXh0ZW5kcyBOb2RlTGlzdD4oLi4uYXJnczogKFQgfCBUW10pW10pOiBOb2RlW107XG5mdW5jdGlvbiBnZW5lcmF0ZUFycmF5PFQgPSB1bmtub3duPiguLi5hcmdzOiAoVCB8IFRbXSlbXSk6IFRbXTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLXN0eWxlXG5mdW5jdGlvbiBnZW5lcmF0ZUFycmF5PFQ+KC4uLmFyZ3M6IChUIHwgVFtdKVtdKTogVFtdIHtcblx0cmV0dXJuIGFyZ3MuZmxhdE1hcCgoYXJnKSA9PiB7XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0cmV0dXJuIGFyZztcblx0XHR9XG5cblx0XHRpZiAoYXJnIGluc3RhbmNlb2YgTm9kZUxpc3QpIHtcblx0XHRcdHJldHVybiBbLi4uYXJnXSBhcyBUO1xuXHRcdH1cblxuXHRcdHJldHVybiBbYXJnXTtcblx0fSk7XG59XG5cbmV4cG9ydCB7dHlwZSBHZW5lcmF0ZUFycmF5LCBnZW5lcmF0ZUFycmF5fTtcbiIsICJ0eXBlIEluaXRNd0FwaSA9IHR5cGVvZiBpbml0TXdBcGk7XG5cbi8qKlxuICogQHJlcXVpcmVzIG1lZGlhd2lraS5hcGlcbiAqIEBwYXJhbSB7c3RyaW5nfSBbdXNlckFnZW50XVxuICogQHBhcmFtIHtzdHJpbmd9IFthcGlVcmldXG4gKiBAcmV0dXJuIHttdy5BcGl8bXcuRm9yZWlnbkFwaX1cbiAqL1xuZnVuY3Rpb24gaW5pdE13QXBpKHVzZXJBZ2VudD86IHN0cmluZyk6IG13LkFwaTtcbmZ1bmN0aW9uIGluaXRNd0FwaSh1c2VyQWdlbnQ6IHN0cmluZywgYXBpVXJpOiBzdHJpbmcpOiBtdy5Gb3JlaWduQXBpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtc3R5bGVcbmZ1bmN0aW9uIGluaXRNd0FwaSh1c2VyQWdlbnQ/OiBzdHJpbmcsIGFwaVVyaT86IHN0cmluZyk6IG13LkFwaSB8IG13LkZvcmVpZ25BcGkge1xuXHRjb25zdCBhcGlPcHRpb25zID0ge1xuXHRcdGFqYXg6IHtcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0J0FwaS1Vc2VyLUFnZW50JzogdXNlckFnZW50ID8gYFlzQXJjaGl2ZXMvMS4xICgke3VzZXJBZ2VudH0pYCA6ICdZc0FyY2hpdmVzLzEuMScsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH07XG5cblx0aWYgKGFwaVVyaSkge1xuXHRcdHJldHVybiBuZXcgbXcuRm9yZWlnbkFwaShhcGlVcmksIGFwaU9wdGlvbnMpO1xuXHR9XG5cblx0cmV0dXJuIG5ldyBtdy5BcGkoYXBpT3B0aW9ucyk7XG59XG5cbmV4cG9ydCB7dHlwZSBJbml0TXdBcGksIGluaXRNd0FwaX07XG4iLCAidHlwZSBVbmlxdWVBcnJheSA9IHR5cGVvZiB1bmlxdWVBcnJheTtcblxuY29uc3QgdW5pcXVlQXJyYXkgPSBmdW5jdGlvbiB1bmlxdWVBcnJheTxUPihhcmdzOiBUW10pOiBUW10ge1xuXHQvKiohXG5cdCAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBDQy1CWS1TQS00LjBcblx0ICpcblx0ICogQHNvdXJjZSB7QGxpbmsgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvOTIyOTY0NS9yZW1vdmUtZHVwbGljYXRlLXZhbHVlcy1mcm9tLWpzLWFycmF5LzkyMjk4Mn1cblx0ICogQGxpY2Vuc2UgQ0MtQlktU0EtNC4wXG5cdCAqL1xuXHRjb25zdCByZXN1bHQ6IHR5cGVvZiBhcmdzID0gW107XG5cdGZvciAoY29uc3QgaXRlbSBvZiBhcmdzKSB7XG5cdFx0aWYgKCFyZXN1bHQuaW5jbHVkZXMoaXRlbSkpIHtcblx0XHRcdHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IGl0ZW07IC8vIFJlcGxhY2UgQXJyYXkjcHVzaCB0byBhdm9pZCBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQge3R5cGUgVW5pcXVlQXJyYXksIHVuaXF1ZUFycmF5fTtcbiIsICJpbXBvcnQge2dlbmVyYXRlQXJyYXl9IGZyb20gJy4vZ2VuZXJhdGVBcnJheSc7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnLi9pbml0TXdBcGknO1xuaW1wb3J0IHt1bmlxdWVBcnJheX0gZnJvbSAnLi91bmlxdWVBcnJheSc7XG5cbnR5cGUgQm9vbGVhbiA9ICcwJyB8ICcxJyB8IDAgfCAxO1xudHlwZSBDaGVja0RlcGVuZGVuY2llcyA9IHR5cGVvZiBjaGVja0RlcGVuZGVuY2llcztcblxuZnVuY3Rpb24gY2hlY2tEZXBlbmRlbmNpZXMoZ2FkZ2V0TmFtZXM6IHN0cmluZyB8IHN0cmluZ1tdKTogUHJvbWlzZTx2b2lkPjtcbmZ1bmN0aW9uIGNoZWNrRGVwZW5kZW5jaWVzKGdhZGdldE5hbWVzOiBzdHJpbmcsIG9wdGlvbjogQm9vbGVhbik6IFByb21pc2U8dm9pZD47XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1zdHlsZVxuYXN5bmMgZnVuY3Rpb24gY2hlY2tEZXBlbmRlbmNpZXMoZ2FkZ2V0TmFtZXM6IHN0cmluZyB8IHN0cmluZ1tdLCBvcHRpb24/OiBCb29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKCdVdGlsLUNoZWNrRGVwZW5kZW5jaWVzJyk7XG5cdGNvbnN0IGdhZGdldHMgPSB1bmlxdWVBcnJheShnZW5lcmF0ZUFycmF5KGdhZGdldE5hbWVzKSk7XG5cdG9wdGlvbiB8fD0gMTtcblxuXHRmb3IgKGNvbnN0IGdhZGdldCBvZiBnYWRnZXRzKSB7XG5cdFx0aWYgKFxuXHRcdFx0KG9wdGlvbiA9PT0gJzAnICYmIG13LnVzZXIub3B0aW9ucy5nZXQoYGdhZGdldC0ke2dhZGdldH1gKSkgfHxcblx0XHRcdChvcHRpb24gPT09ICcxJyAmJiAhbXcudXNlci5vcHRpb25zLmdldChgZ2FkZ2V0LSR7Z2FkZ2V0fWApKVxuXHRcdCkge1xuXHRcdFx0YXdhaXQgYXBpLnBvc3RXaXRoRWRpdFRva2VuKHtcblx0XHRcdFx0YWN0aW9uOiAnb3B0aW9ucycsXG5cdFx0XHRcdGNoYW5nZTogYGdhZGdldC0ke2dhZGdldH09JHtvcHRpb259YCxcblx0XHRcdH0gYXMgQXBpT3B0aW9uc1BhcmFtcyk7XG5cdFx0XHRhd2FpdCBtdy5sb2FkZXIudXNpbmcoYGV4dC5nYWRnZXQuJHtnYWRnZXR9YCk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCB7dHlwZSBDaGVja0RlcGVuZGVuY2llcywgY2hlY2tEZXBlbmRlbmNpZXN9O1xuIiwgInR5cGUgRGVsYXkgPSAobXM6IG51bWJlcikgPT4gUHJvbWlzZTx2b2lkPjtcblxuY29uc3QgZGVsYXk6IERlbGF5ID0gKG1zKSA9PiB7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZTogKCkgPT4gdm9pZCk6IHZvaWQgPT4ge1xuXHRcdHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpO1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7dHlwZSBEZWxheSwgZGVsYXl9O1xuIiwgImltcG9ydCB7aW5pdE13QXBpfSBmcm9tICcuL2luaXRNd0FwaSc7XG5pbXBvcnQge3VuaXF1ZUFycmF5fSBmcm9tICcuL3VuaXF1ZUFycmF5JztcblxudHlwZSBGaW5kVmFyaWFudHMgPSB0eXBlb2YgZmluZFZhcmlhbnRzO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1zdHlsZVxuYXN5bmMgZnVuY3Rpb24gZmluZFZhcmlhbnRzKHRleHQ6IHN0cmluZykge1xuXHRjb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaSgnVXRpbC1GaW5kVmFyaWFudHMnKTtcblxuXHRjb25zdCBWQVJJQU5UUyA9IFsnemgtaGFucycsICd6aC1oYW50JywgJ3poLWNuJywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXNnJywgJ3poLW15JywgJ3poLXR3J107XG5cblx0Y29uc3QgYWxsVmFyaWFudHM6IHN0cmluZ1tdID0gW107XG5cblx0Y29uc3QgcGFyYW1zOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0Y29udGVudG1vZGVsOiAnd2lraXRleHQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiBbJ2Rpc3BsYXl0aXRsZSddLFxuXHRcdHRpdGxlOiAndGVtcCcsXG5cdFx0dGV4dCxcblx0fTtcblxuXHRmb3IgKGNvbnN0IHZhcmlhbnQgb2YgVkFSSUFOVFMpIHtcblx0XHRwYXJhbXMudXNlbGFuZyA9IHZhcmlhbnQ7XG5cdFx0cGFyYW1zLnZhcmlhbnQgPSB2YXJpYW50O1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QocGFyYW1zKTtcblxuXHRcdGNvbnN0IGRpc3BsYXl0aXRsZSA9IHJlc3BvbnNlPy5bJ3F1ZXJ5J10/LmRpc3BsYXl0aXRsZSBhcyBzdHJpbmc7XG5cdFx0Y29uc3QgdmFyaWFudEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2YXJpYW50Jyk7XG5cdFx0dmFyaWFudEVsZW1lbnQuaW5uZXJIVE1MID0gZGlzcGxheXRpdGxlO1xuXG5cdFx0aWYgKHZhcmlhbnRFbGVtZW50LnRleHRDb250ZW50KSB7XG5cdFx0XHRhbGxWYXJpYW50c1thbGxWYXJpYW50cy5sZW5ndGhdID0gdmFyaWFudEVsZW1lbnQudGV4dENvbnRlbnQ7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHVuaXF1ZUFycmF5KGFsbFZhcmlhbnRzKTtcbn1cblxuZXhwb3J0IHt0eXBlIEZpbmRWYXJpYW50cywgZmluZFZhcmlhbnRzfTtcbiIsICJ0eXBlIEdlbmVyYXRlU3ZnRGF0YVVybCA9IChzdmc6IHN0cmluZykgPT4gc3RyaW5nO1xuXG5jb25zdCBnZW5lcmF0ZVN2Z0RhdGFVcmw6IEdlbmVyYXRlU3ZnRGF0YVVybCA9IChzdmcpID0+IHtcblx0LyoqIVxuXHQgKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTUlUXG5cdCAqXG5cdCAqIEBzb3VyY2Ugc3ZnLXRvLWRhdGEtdXJpLmpzIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vaGV5YWxsYW4vc3ZnLXRvLWRhdGEtdXJpL31cblx0ICogQGF1dGhvciBBbGxhbiBNb3Jlbm9cblx0ICogQGxpY2Vuc2UgTUlUIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vaGV5YWxsYW4vc3ZnLXRvLWRhdGEtdXJpL2Jsb2IvbWFzdGVyL0xJQ0VOU0V9XG5cdCAqXG5cdCAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0ICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHQgKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdCAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0ICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdCAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cdCAqXG5cdCAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHQgKiBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXHQgKlxuXHQgKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdCAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHQgKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0ICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHQgKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHQgKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHQgKiBTT0ZUV0FSRS5cblx0ICovXG5cdHN2ZyA9IHN2Zy50cmltKCk7XG5cdC8vIHJlbW92ZSB4bWwsIGRvY3R5cGUsIGdlbmVyYXRvci4uLlxuXHRzdmcgPSBzdmcuc2xpY2Uoc3ZnLmluZGV4T2YoJzxzdmcnKSk7XG5cdC8vIHNvZnQgdmFsaWRhdGVcblx0aWYgKCFzdmcuc3RhcnRzV2l0aCgnPHN2ZycpIHx8ICFzdmcuZW5kc1dpdGgoJ3N2Zz4nKSkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXHQvLyBhZGQgbmFtZXNwYWNlIGlmIG5lY2Vzc2FyeVxuXHRpZiAoIXN2Zy5pbmNsdWRlcygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnKSkge1xuXHRcdHN2ZyA9IHN2Zy5yZXBsYWNlKC88c3ZnL2csIFwiPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXCIpO1xuXHR9XG5cdC8vIHJlbW92ZSBjb21tZW50c1xuXHRzdmcgPSBzdmcucmVwbGFjZSgvPCEtLS57MSx9LS0+L2csICcnKTtcblx0Ly8gcmVtb3ZlIHVubmVjZXNzYXJ5IGF0dHJpYnV0ZXNcblx0c3ZnID0gc3ZnLnJlcGxhY2UoL3ZlcnNpb249W1wiJ10oLnswLH0/KVtcIiddKD89W1xccz5dKS9nLCAnJyk7XG5cdC8vIHJlcGxhY2UgbmVzdGVkIHF1b3Rlc1xuXHRzdmcgPSBzdmcucmVwbGFjZSgvXCInKC57MSx9KSdcIi9nLCBcIickMSdcIik7XG5cdC8vIHJlcGxhY2UgZG91YmxlIHF1b3Rlc1xuXHRzdmcgPSBzdmcucmVwbGFjZSgvXCIvZywgXCInXCIpO1xuXHQvLyByZW1vdmUgZW1wdHkgc3BhY2VzIGJldHdlZW4gdGFnc1xuXHRzdmcgPSBzdmcucmVwbGFjZSgvPlxcc3sxLH08L2csICc+PCcpO1xuXHQvLyByZW1vdmUgZHVwbGljYXRlIHNwYWNlc1xuXHRzdmcgPSBzdmcucmVwbGFjZSgvXFxzezIsfS9nLCAnICcpO1xuXHQvLyB0cmltIGFnYWluXG5cdHN2ZyA9IHN2Zy50cmltKCk7XG5cdC8vIHNvZnQgdmFsaWRhdGUgYWdhaW5cblx0aWYgKCFzdmcuc3RhcnRzV2l0aCgnPHN2ZycpIHx8ICFzdmcuZW5kc1dpdGgoJ3N2Zz4nKSkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXHQvLyByZXBsYWNlIGFtcGVyc2FuZFxuXHRzdmcgPSBzdmcucmVwbGFjZSgvJi9nLCAnJmFtcDsnKTtcblx0Ly8gZW5jb2RlIG9ubHkgdW5zYWZlIHN5bWJvbHNcblx0c3ZnID0gc3ZnLnJlcGxhY2UoL1slIzw+P1tcXFxcXFxdXmB7fH1dL2csIGVuY29kZVVSSUNvbXBvbmVudCk7XG5cdC8vIGJ1aWxkIGRhdGEgdXJpXG5cdHN2ZyA9IGBkYXRhOmltYWdlL3N2Zyt4bWwsJHtzdmd9YDtcblx0Ly8gb2ssIHNoaXAgaXQhXG5cdHJldHVybiBzdmc7XG59O1xuXG5leHBvcnQge3R5cGUgR2VuZXJhdGVTdmdEYXRhVXJsLCBnZW5lcmF0ZVN2Z0RhdGFVcmx9O1xuIiwgInR5cGUgR2V0Qm9keSA9ICgpID0+IEpRdWVyeS5UaGVuYWJsZTxKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pj47XG5cbmNvbnN0IGdldEJvZHkgPSAoKSA9PiB7XG5cdHJldHVybiAkLnJlYWR5LnRoZW4oKCk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0+IHtcblx0XHRjb25zdCAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPSAkKCdib2R5Jyk7XG5cblx0XHRyZXR1cm4gJGJvZHk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHt0eXBlIEdldEJvZHksIGdldEJvZHl9O1xuIiwgInR5cGUgSXNWYWxpZEtleSA9IHR5cGVvZiBpc1ZhbGlkS2V5O1xuXG5jb25zdCBpc1ZhbGlkS2V5ID0gKG9iamVjdDogb2JqZWN0LCBrZXk6IHN0cmluZyB8IG51bWJlciB8IHN5bWJvbCk6IGtleSBpcyBrZXlvZiB0eXBlb2Ygb2JqZWN0ID0+IHtcblx0cmV0dXJuIGtleSBpbiBvYmplY3Q7XG59O1xuXG5leHBvcnQge3R5cGUgSXNWYWxpZEtleSwgaXNWYWxpZEtleX07XG4iLCAidHlwZSBDbGFzc013VXJpID0gdHlwZW9mIE13VXJpO1xuXG5jbGFzcyBNd1VyaSBleHRlbmRzIFVSTCB7XG5cdGV4dGVuZChvYmplY3Q6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9KSB7XG5cdFx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob2JqZWN0KSkge1xuXHRcdFx0dGhpcy5zZWFyY2hQYXJhbXMuc2V0KGtleSwgdmFsdWUpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRnZXRSZWxhdGl2ZVBhdGgoKSB7XG5cdFx0cmV0dXJuIHRoaXMucGF0aG5hbWUgKyB0aGlzLnNlYXJjaCArIHRoaXMuaGFzaDtcblx0fVxufVxuXG5leHBvcnQge3R5cGUgQ2xhc3NNd1VyaSwgTXdVcml9O1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5cbnR5cGUgT291aUNvbmZpcm1XaXRoU3R5bGUgPSAobWVzc2FnZTogc3RyaW5nKSA9PiBKUXVlcnkuUHJvbWlzZTxib29sZWFuPjtcblxuLyoqXG4gKiBAcmVxdWlyZXMgb29qcy11aS13aW5kb3dzXG4gKiBAcGFyYW0ge3N0cmluZ30gW21lc3NhZ2VdXG4gKiBAcmV0dXJuIHtKUXVlcnkuUHJvbWlzZTxib29sZWFuPn1cbiAqL1xuY29uc3Qgb291aUNvbmZpcm1XaXRoU3R5bGU6IE9vdWlDb25maXJtV2l0aFN0eWxlID0gKG1lc3NhZ2UpID0+XG5cdE9PLnVpXG5cdFx0LmNvbmZpcm0oXG5cdFx0XHQkKFxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwib28tdWktd2luZG93LWZvb3RcIlxuXHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRib3JkZXI6ICcuMXJlbSBzb2xpZCAjMDY0NWFkJyxcblx0XHRcdFx0XHRcdGRpc3BsYXk6ICdmbGV4Jyxcblx0XHRcdFx0XHRcdGp1c3RpZnlDb250ZW50OiAnc3BhY2UtZXZlbmx5Jyxcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdGZvbnRTaXplOiAnMS4ycmVtJyxcblx0XHRcdFx0XHRcdFx0Zm9udFdlaWdodDogJzUwMCcsXG5cdFx0XHRcdFx0XHRcdGxpbmVIZWlnaHQ6ICcxLjgnLFxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAnLjRlbSAwJyxcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e21lc3NhZ2V9XG5cdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCkgYXMgSlF1ZXJ5XG5cdFx0KVxuXHRcdC50aGVuKChpc0NvbmZpcm06IGJvb2xlYW4pOiBib29sZWFuID0+IGlzQ29uZmlybSk7XG5cbmV4cG9ydCB7dHlwZSBPb3VpQ29uZmlybVdpdGhTdHlsZSwgb291aUNvbmZpcm1XaXRoU3R5bGV9O1xuIiwgImltcG9ydCB7aW5pdE13QXBpfSBmcm9tICcuL2luaXRNd0FwaSc7XG5cbnR5cGUgUXVlcnlHbG9iYWxVc2VyR3JvdXBzID0gdHlwZW9mIHF1ZXJ5R2xvYmFsVXNlckdyb3VwcztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtc3R5bGVcbmFzeW5jIGZ1bmN0aW9uIHF1ZXJ5R2xvYmFsVXNlckdyb3VwcyhndWl1c2VyOiBzdHJpbmcpIHtcblx0Y29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoJ1V0aWwtUXVlcnlHbG9iYWxVc2VyR3JvdXBzJyk7XG5cblx0Y29uc3QgQ0FDSEVfS0VZX1BSRUZJWCA9ICdleHQuZ2FkZ2V0LlV0aWxfcXVlcnlHbG9iYWxVc2VyR3JvdXBzLSc7XG5cblx0bGV0IGdyb3Vwczogc3RyaW5nW10gPSBbXTtcblxuXHQvLyBRdWVyeSBmcm9tIGNhY2hlXG5cdC8vIENoZWNrIGlmIHVzZXIgZ3JvdXAgaW5mbyBpcyBjYWNoZWQgaW4gTG9jYWxTdG9yYWdlXG5cdC8vIElmIGNhY2hlZCwgZ2V0IHRoZW0gZnJvbSBMb2NhbFN0b3JhZ2Vcblx0aWYgKG13LnN0b3JhZ2UuZ2V0T2JqZWN0KENBQ0hFX0tFWV9QUkVGSVggKyBndWl1c2VyKSkge1xuXHRcdGdyb3VwcyA9IG13LnN0b3JhZ2UuZ2V0T2JqZWN0KENBQ0hFX0tFWV9QUkVGSVggKyBndWl1c2VyKSBhcyBzdHJpbmdbXTtcblx0XHQvLyBSZW1vdmUgJyonIGZyb20gZ3JvdXBzXG5cdFx0Z3JvdXBzID0gZ3JvdXBzLmZpbHRlcigoZWxlbWVudCkgPT4ge1xuXHRcdFx0cmV0dXJuIGVsZW1lbnQgIT09ICcqJztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHQvLyBRdWVyeSBmcm9tIHdlYlxuXHRcdC8vIFF1ZXJ5IHBhcmFtc1xuXHRcdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0bWV0YTogJ2dsb2JhbHVzZXJpbmZvJyxcblx0XHRcdGd1aXVzZXIsXG5cdFx0XHRndWlwcm9wOiAnZ3JvdXBzJyxcblx0XHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRcdG1heGFnZTogNjAwLFxuXHRcdH07XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0XHQvLyBEZS1jb25zdHJ1Y3QgdGhlIHJlc3BvbnNlIG9iamVjdFxuXHRcdGNvbnN0IHF1ZXJ5ID0gcmVzcG9uc2VbJ3F1ZXJ5J10gYXMge1xuXHRcdFx0Z2xvYmFsdXNlcmluZm86IHtncm91cHM6IHN0cmluZ1tdOyBuYW1lOiBzdHJpbmd9O1xuXHRcdH07XG5cblx0XHRpZiAocXVlcnk/Lmdsb2JhbHVzZXJpbmZvKSB7XG5cdFx0XHRncm91cHMgPSBxdWVyeS5nbG9iYWx1c2VyaW5mbz8uZ3JvdXBzID8/IFtdO1xuXHRcdFx0Ly8gUmVtb3ZlICcqJyBmcm9tIGdyb3Vwc1xuXHRcdFx0Z3JvdXBzID0gZ3JvdXBzLmZpbHRlcigoZWxlbWVudCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gZWxlbWVudCAhPT0gJyonO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIENhY2hlIGZvciAxIGhvdXJcblx0XHRcdG13LnN0b3JhZ2Uuc2V0T2JqZWN0KENBQ0hFX0tFWV9QUkVGSVggKyBndWl1c2VyLCBncm91cHMsIDYwICogNjApO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB7cXVlcnk6IHtnbG9iYWx1c2VyaW5mbzoge25hbWU6IGd1aXVzZXIsIGdyb3Vwc319fTtcbn1cblxuZXhwb3J0IHt0eXBlIFF1ZXJ5R2xvYmFsVXNlckdyb3VwcywgcXVlcnlHbG9iYWxVc2VyR3JvdXBzfTtcbiIsICJpbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnLi9pbml0TXdBcGknO1xuXG50eXBlIFF1ZXJ5VXNlckdyb3VwcyA9IHR5cGVvZiBxdWVyeVVzZXJHcm91cHM7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLXN0eWxlXG5hc3luYyBmdW5jdGlvbiBxdWVyeVVzZXJHcm91cHModXNlcnM6IHN0cmluZ1tdKSB7XG5cdGNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKCdVdGlsLVF1ZXJ5VXNlckdyb3VwcycpO1xuXG5cdGNvbnN0IENBQ0hFX0tFWV9QUkVGSVggPSAnZXh0LmdhZGdldC5VdGlsX3F1ZXJ5VXNlckdyb3Vwcy0nO1xuXG5cdGNvbnN0IGNhY2hlZFF1ZXJ5VXNlcnM6IHtncm91cHM6IHN0cmluZ1tdOyBuYW1lOiBzdHJpbmd9W10gPSBbXTtcblxuXHQvLyBRdWVyeSBmcm9tIGNhY2hlXG5cdGZvciAoY29uc3QgdXNlciBvZiB1c2Vycykge1xuXHRcdC8vIENoZWNrIGlmIHVzZXIgZ3JvdXAgaW5mbyBpcyBjYWNoZWQgaW4gTG9jYWxTdG9yYWdlXG5cdFx0Ly8gSWYgY2FjaGVkLCBnZXQgdGhlbSBmcm9tIExvY2FsU3RvcmFnZVxuXHRcdGlmIChtdy5zdG9yYWdlLmdldE9iamVjdChDQUNIRV9LRVlfUFJFRklYICsgdXNlcikpIHtcblx0XHRcdGxldCBncm91cHMgPSBtdy5zdG9yYWdlLmdldE9iamVjdChDQUNIRV9LRVlfUFJFRklYICsgdXNlcikgYXMgc3RyaW5nW107XG5cdFx0XHQvLyBSZW1vdmUgJyonIGZyb20gZ3JvdXBzXG5cdFx0XHRncm91cHMgPSBncm91cHMuZmlsdGVyKChlbGVtZW50KSA9PiB7XG5cdFx0XHRcdHJldHVybiBlbGVtZW50ICE9PSAnKic7XG5cdFx0XHR9KTtcblx0XHRcdC8vIFN0b3JlIGludG8gYXJyYXlcblx0XHRcdGNhY2hlZFF1ZXJ5VXNlcnNbY2FjaGVkUXVlcnlVc2Vycy5sZW5ndGhdID0ge25hbWU6IHVzZXIsIGdyb3Vwc307XG5cdFx0fVxuXHR9XG5cblx0Ly8gUXVlcnkgZnJvbSB3ZWJcblx0Y29uc3QgdXN1c2VycyA9IHVzZXJzLmZpbHRlcigodikgPT4ge1xuXHRcdC8vIFJlbW92ZSB1c2VyIHRoYXQgaGF2ZSBjYWNoZWQgdXNlciBncm91cHMgbG9jYWxseVxuXHRcdHJldHVybiAhbXcuc3RvcmFnZS5nZXRPYmplY3QoQ0FDSEVfS0VZX1BSRUZJWCArIHYpO1xuXHR9KTtcblxuXHQvLyBRdWVyeSBwYXJhbXNcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVVzZXJzUGFyYW1zID0ge1xuXHRcdHVzdXNlcnMsXG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRsaXN0OiAndXNlcnMnLFxuXHRcdHVzcHJvcDogJ2dyb3VwcycsXG5cdFx0c21heGFnZTogNjAwLFxuXHRcdG1heGFnZTogNjAwLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHQvLyBEZS1jb25zdHJ1Y3QgdGhlIHJlc3BvbnNlIG9iamVjdFxuXHRjb25zdCBxdWVyeSA9IHJlc3BvbnNlWydxdWVyeSddIGFzIHtcblx0XHR1c2Vyczoge2dyb3Vwczogc3RyaW5nW107IG5hbWU6IHN0cmluZ31bXTtcblx0fTtcblx0Y29uc3QgcXVlcnlVc2VycyA9IFsuLi4ocXVlcnk/LnVzZXJzID8/IFtdKSwgLi4uY2FjaGVkUXVlcnlVc2Vyc107XG5cblx0Zm9yIChjb25zdCB1c2VyIG9mIHF1ZXJ5VXNlcnMpIHtcblx0XHRpZiAodXNlcj8uZ3JvdXBzICYmIHVzZXI/Lm5hbWUpIHtcblx0XHRcdGxldCB7Z3JvdXBzfSA9IHVzZXI7XG5cdFx0XHQvLyBSZW1vdmUgJyonIGZyb20gZ3JvdXBzXG5cdFx0XHRncm91cHMgPSBncm91cHMuZmlsdGVyKChlbGVtZW50KSA9PiB7XG5cdFx0XHRcdHJldHVybiBlbGVtZW50ICE9PSAnKic7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gQ2FjaGUgZm9yIDEgaG91clxuXHRcdFx0bXcuc3RvcmFnZS5zZXRPYmplY3QoQ0FDSEVfS0VZX1BSRUZJWCArIHVzZXIubmFtZSwgZ3JvdXBzLCA2MCAqIDYwKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4ge3F1ZXJ5OiB7dXNlcnM6IHF1ZXJ5VXNlcnN9fTtcbn1cblxuZXhwb3J0IHt0eXBlIFF1ZXJ5VXNlckdyb3VwcywgcXVlcnlVc2VyR3JvdXBzfTtcbiIsICJ0eXBlIFNjcm9sbFRvcCA9IChcblx0dGFyZ2V0SGVpZ2h0OiBudW1iZXIgfCBzdHJpbmcsXG5cdGVmZmVjdHNPcHRpb25zT3JEdXJhdGlvbj86IEpRdWVyeS5FZmZlY3RzT3B0aW9uczxIVE1MRWxlbWVudD4gfCBudW1iZXIgfCAnZmFzdCcgfCAnc2xvdydcbikgPT4gdm9pZDtcblxuY29uc3Qgc2Nyb2xsVG9wOiBTY3JvbGxUb3AgPSAodGFyZ2V0SGVpZ2h0LCBlZmZlY3RzT3B0aW9uc09yRHVyYXRpb24gPSB7fSkgPT4ge1xuXHRjb25zdCBvcHRpb25zOiBKUXVlcnkuRWZmZWN0c09wdGlvbnM8SFRNTEVsZW1lbnQ+ID1cblx0XHR0eXBlb2YgZWZmZWN0c09wdGlvbnNPckR1cmF0aW9uID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgZWZmZWN0c09wdGlvbnNPckR1cmF0aW9uID09PSAnc3RyaW5nJ1xuXHRcdFx0PyB7XG5cdFx0XHRcdFx0ZHVyYXRpb246IGVmZmVjdHNPcHRpb25zT3JEdXJhdGlvbixcblx0XHRcdFx0XHRlYXNpbmc6ICdsaW5lYXInLFxuXHRcdFx0XHR9XG5cdFx0XHQ6IHtcblx0XHRcdFx0XHRkdXJhdGlvbjogJ3Nsb3cnLFxuXHRcdFx0XHRcdGVhc2luZzogJ2xpbmVhcicsXG5cdFx0XHRcdFx0Li4uZWZmZWN0c09wdGlvbnNPckR1cmF0aW9uLFxuXHRcdFx0XHR9O1xuXHQkKGRvY3VtZW50KS5maW5kKCdodG1sLCBib2R5JykuYW5pbWF0ZShcblx0XHR7XG5cdFx0XHRzY3JvbGxUb3A6IHRhcmdldEhlaWdodCxcblx0XHR9LFxuXHRcdG9wdGlvbnNcblx0KTtcbn07XG5cbmV4cG9ydCB7dHlwZSBTY3JvbGxUb3AsIHNjcm9sbFRvcH07XG4iLCAiaW1wb3J0IHtnZW5lcmF0ZUFycmF5fSBmcm9tICcuL2dlbmVyYXRlQXJyYXknO1xuXG50eXBlIFVzZXJJc0luR3JvdXAgPSB0eXBlb2YgdXNlcklzSW5Hcm91cDtcblxuY29uc3QgdXNlcklzSW5Hcm91cCA9IChncm91cHM6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB7XG5cdGNvbnN0IHt3Z1VzZXJHcm91cHMsIHdnR2xvYmFsR3JvdXBzfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0cmV0dXJuIFsuLi4od2dVc2VyR3JvdXBzIHx8IFtdKSwgLi4uKCh3Z0dsb2JhbEdyb3VwcyBhcyBzdHJpbmdbXSkgfHwgW10pXS5zb21lKChlbGVtZW50OiBzdHJpbmcpOiBib29sZWFuID0+IHtcblx0XHRyZXR1cm4gZ2VuZXJhdGVBcnJheShncm91cHMpLmluY2x1ZGVzKGVsZW1lbnQpO1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7dHlwZSBVc2VySXNJbkdyb3VwLCB1c2VySXNJbkdyb3VwfTtcbiIsICJ0eXBlIEdldFdwU3VtbWFyeUNvbnRlbnQgPSB0eXBlb2YgZ2V0V3BTdW1tYXJ5Q29udGVudDtcbnR5cGUgU2V0V3BTdW1tYXJ5Q29udGVudCA9IHR5cGVvZiBzZXRXcFN1bW1hcnlDb250ZW50O1xuXG5jb25zdCBnZXRXcFN1bW1hcnlDb250ZW50ID0gKHskZWRpdEZvcm19OiB7JGVkaXRGb3JtOiBKUXVlcnk8SFRNTEVsZW1lbnQ+fSk6IHN0cmluZyA9PiB7XG5cdHJldHVybiAkZWRpdEZvcm0uZmluZDxIVE1MSW5wdXRFbGVtZW50PignI3dwU3VtbWFyeScpPy52YWwoKSA/PyAnJztcbn07XG5cbmNvbnN0IHNldFdwU3VtbWFyeUNvbnRlbnQgPSAoeyRlZGl0Rm9ybSwgY29udGVudH06IHskZWRpdEZvcm06IEpRdWVyeTxIVE1MRWxlbWVudD47IGNvbnRlbnQ6IHN0cmluZ30pOiB2b2lkID0+IHtcblx0JGVkaXRGb3JtLmZpbmQ8SFRNTElucHV0RWxlbWVudD4oJyN3cFN1bW1hcnknKS52YWwoY29udGVudCk7XG59O1xuXG5leHBvcnQge2dldFdwU3VtbWFyeUNvbnRlbnQsIHR5cGUgR2V0V3BTdW1tYXJ5Q29udGVudCwgc2V0V3BTdW1tYXJ5Q29udGVudCwgdHlwZSBTZXRXcFN1bW1hcnlDb250ZW50fTtcbiIsICJ0eXBlIEdldFdwVGV4dGJveDFDb250ZW50ID0gdHlwZW9mIGdldFdwVGV4dGJveDFDb250ZW50O1xudHlwZSBTZXRXcFRleHRib3gxQ29udGVudCA9IHR5cGVvZiBzZXRXcFRleHRib3gxQ29udGVudDtcblxuY29uc3QgZ2V0V3BUZXh0Ym94MUNvbnRlbnQgPSAoeyRlZGl0Rm9ybX06IHskZWRpdEZvcm06IEpRdWVyeTxIVE1MRWxlbWVudD59KTogc3RyaW5nID0+IHtcblx0cmV0dXJuICRlZGl0Rm9ybS5maW5kPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KCcjd3BUZXh0Ym94MScpLnRleHRTZWxlY3Rpb24oJ2dldENvbnRlbnRzJykgPz8gJyc7XG59O1xuXG5jb25zdCBzZXRXcFRleHRib3gxQ29udGVudCA9ICh7JGVkaXRGb3JtLCBjb250ZW50fTogeyRlZGl0Rm9ybTogSlF1ZXJ5PEhUTUxFbGVtZW50PjsgY29udGVudDogc3RyaW5nfSk6IHZvaWQgPT4ge1xuXHQkZWRpdEZvcm0uZmluZDxIVE1MVGV4dEFyZWFFbGVtZW50PignI3dwVGV4dGJveDEnKS50ZXh0U2VsZWN0aW9uKCdzZXRDb250ZW50cycsIGNvbnRlbnQpO1xufTtcblxuZXhwb3J0IHtnZXRXcFRleHRib3gxQ29udGVudCwgdHlwZSBHZXRXcFRleHRib3gxQ29udGVudCwgc2V0V3BUZXh0Ym94MUNvbnRlbnQsIHR5cGUgU2V0V3BUZXh0Ym94MUNvbnRlbnR9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxlQUFBLENBQUE7QUFBQUMsU0FBQUQsY0FBQTtFQUFBRSxPQUFBQSxNQUFBQTtFQUFBQyw2QkFBQUEsTUFBQUE7RUFBQUMsb0NBQUFBLE1BQUFBO0VBQUFDLHFCQUFBQSxNQUFBQTtFQUFBQyxtQkFBQUEsTUFBQUE7RUFBQUMsT0FBQUEsTUFBQUE7RUFBQUMsY0FBQUEsTUFBQUE7RUFBQUMsZUFBQUEsTUFBQUE7RUFBQUMsb0JBQUFBLE1BQUFBO0VBQUFDLFNBQUFBLE1BQUFBO0VBQUFDLHFC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QVdJO0FBQU8sTUFBK0Q7QUFDL0dKLFlBQVVOLEtBQTBCLGFBQWEsRUFBRVksY0FBYyxlQUFlRixPQUFPO0FBQ3hGOyIsCiAgIm5hbWVzIjogWyJVdGlsX2V4cG9ydHMiLCAiX19leHBvcnQiLCAiTXdVcmkiLCAiYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyIiwgImNoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUiLCAiY2hlY2tBMTF5Q29uZmlybUtleSIsICJjaGVja0RlcGVuZGVuY2llcyIsICJkZWxheSIsICJmaW5kVmFyaWFudHMiLCAiZ2VuZXJhdGVBcnJheSIsICJnZW5lcmF0ZVN2Z0RhdGFVcmwiLCAiZ2V0Qm9keSIsICJnZXRXcFN1bW1hcnlDb250ZW50IiwgImdldFdwVGV4dGJveDFDb250ZW50IiwgImluaXRNd0FwaSIsICJpc1ZhbGlkS2V5IiwgIm9vdWlDb25maXJtV2l0aFN0eWxlIiwgInF1ZXJ5R2xvYmFsVXNlckdyb3VwcyIsICJxdWVyeVVzZXJHcm91cHMiLCAic2Nyb2xsVG9wIiwgInNldFdwU3VtbWFyeUNvbnRlbnQiLCAic2V0V3BUZXh0Ym94MUNvbnRlbnQiLCAidW5pcXVlQXJyYXkiLCAidXNlcklzSW5Hcm91cCIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJfX3RvQ29tbW9uSlMiLCAidGFyZ2V0IiwgInR5cGUiLCAibGlzdGVuZXIiLCAib3B0aW9ucyIsICJhZGRFdmVudExpc3RlbmVyIiwgInJlbW92ZSIsICJyZW1vdmVFdmVudExpc3RlbmVyIiwgImV2ZW50IiwgIm9wYWNpdHkiLCAiY3VycmVudFRhcmdldCIsICJzdHlsZSIsICJ0b1N0cmluZyIsICJpbmNsdWRlcyIsICJrZXkiLCAiYXJncyIsICJmbGF0TWFwIiwgImFyZyIsICJBcnJheSIsICJpc0FycmF5IiwgIk5vZGVMaXN0IiwgInVzZXJBZ2VudCIsICJhcGlVcmkiLCAiYXBpT3B0aW9ucyIsICJhamF4IiwgImhlYWRlcnMiLCAiY29uY2F0IiwgIm13IiwgIkZvcmVpZ25BcGkiLCAiQXBpIiwgInVuaXF1ZUFycmF5MiIsICJyZXN1bHQiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiaXRlbSIsICJ2YWx1ZSIsICJsZW5ndGgiLCAiZXJyIiwgImUiLCAiZiIsICJfeCIsICJfeDIiLCAiX2NoZWNrRGVwZW5kZW5jaWVzIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJnYWRnZXROYW1lcyIsICJvcHRpb24iLCAiYXBpIiwgImdhZGdldHMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiZ2FkZ2V0IiwgInVzZXIiLCAiZ2V0IiwgInBvc3RXaXRoRWRpdFRva2VuIiwgImFjdGlvbiIsICJjaGFuZ2UiLCAibG9hZGVyIiwgInVzaW5nIiwgIm1zIiwgIlByb21pc2UiLCAicmVzb2x2ZSIsICJzZXRUaW1lb3V0IiwgIl94MyIsICJfZmluZFZhcmlhbnRzIiwgInRleHQiLCAiVkFSSUFOVFMiLCAiYWxsVmFyaWFudHMiLCAicGFyYW1zIiwgImNvbnRlbnRtb2RlbCIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInRpdGxlIiwgIl9pMiIsICJfVkFSSUFOVFMiLCAiX3Jlc3BvbnNlJHF1ZXJ5IiwgInZhcmlhbnQiLCAidXNlbGFuZyIsICJyZXNwb25zZSIsICJwb3N0IiwgImRpc3BsYXl0aXRsZSIsICJ2YXJpYW50RWxlbWVudCIsICJkb2N1bWVudCIsICJjcmVhdGVFbGVtZW50IiwgImlubmVySFRNTCIsICJ0ZXh0Q29udGVudCIsICJzdmciLCAidHJpbSIsICJzbGljZSIsICJpbmRleE9mIiwgInN0YXJ0c1dpdGgiLCAiZW5kc1dpdGgiLCAicmVwbGFjZSIsICJlbmNvZGVVUklDb21wb25lbnQiLCAiJCIsICJyZWFkeSIsICJ0aGVuIiwgIiRib2R5IiwgIm9iamVjdCIsICJVUkwiLCAiZXh0ZW5kIiwgIl9pIiwgIl9PYmplY3QkZW50cmllcyIsICJPYmplY3QiLCAiZW50cmllcyIsICJzZWFyY2hQYXJhbXMiLCAic2V0IiwgImdldFJlbGF0aXZlUGF0aCIsICJwYXRobmFtZSIsICJzZWFyY2giLCAiaGFzaCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAibWVzc2FnZSIsICJPTyIsICJ1aSIsICJjb25maXJtIiwgImRlZmF1bHQiLCAiY2xhc3NOYW1lIiwgImJvcmRlciIsICJkaXNwbGF5IiwgImp1c3RpZnlDb250ZW50IiwgImZvbnRTaXplIiwgImZvbnRXZWlnaHQiLCAibGluZUhlaWdodCIsICJwYWRkaW5nIiwgImlzQ29uZmlybSIsICJfeDQiLCAiX3F1ZXJ5R2xvYmFsVXNlckdyb3VwcyIsICJndWl1c2VyIiwgIkNBQ0hFX0tFWV9QUkVGSVgiLCAiZ3JvdXBzIiwgInN0b3JhZ2UiLCAiZ2V0T2JqZWN0IiwgImZpbHRlciIsICJlbGVtZW50IiwgIm1ldGEiLCAiZ3VpcHJvcCIsICJzbWF4YWdlIiwgIm1heGFnZSIsICJxdWVyeSIsICJnbG9iYWx1c2VyaW5mbyIsICJfcXVlcnkkZ2xvYmFsdXNlcmluZm8iLCAiX3F1ZXJ5JGdsb2JhbHVzZXJpbmZvMiIsICJzZXRPYmplY3QiLCAibmFtZSIsICJfeDUiLCAiX3F1ZXJ5VXNlckdyb3VwcyIsICJ1c2VycyIsICJfcXVlcnkkdXNlcnMiLCAiY2FjaGVkUXVlcnlVc2VycyIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJ1c3VzZXJzIiwgInYiLCAibGlzdCIsICJ1c3Byb3AiLCAicXVlcnlVc2VycyIsICJfaTMiLCAiX3F1ZXJ5VXNlcnMiLCAidGFyZ2V0SGVpZ2h0IiwgImVmZmVjdHNPcHRpb25zT3JEdXJhdGlvbiIsICJkdXJhdGlvbiIsICJlYXNpbmciLCAiZmluZCIsICJhbmltYXRlIiwgIndnVXNlckdyb3VwcyIsICJ3Z0dsb2JhbEdyb3VwcyIsICJjb25maWciLCAic29tZSIsICIkZWRpdEZvcm0iLCAiXyRlZGl0Rm9ybSRmaW5kJHZhbCIsICJfJGVkaXRGb3JtJGZpbmQiLCAidmFsIiwgImNvbnRlbnQiLCAiXyRlZGl0Rm9ybSRmaW5kJHRleHRTIiwgInRleHRTZWxlY3Rpb24iXQp9Cg==
