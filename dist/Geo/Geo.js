/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/Geo}
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

// dist/Geo/Geo.js
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
//! src/Geo/Geo.ts
var Geo_exports = {};
__export(Geo_exports, {
  getGeoInfo: () => getGeoInfo
});
module.exports = __toCommonJS(Geo_exports);
//! src/Geo/options.json
var defaultGeoInfo = {
  countryOrArea: "",
  region: "",
  city: ""
};
var storageKey = "ext.gadget.Geo";
//! src/Geo/Geo.ts
var getGeoInfo = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* () {
    const storeGeoInfo = mw.storage.getObject(storageKey);
    if (storeGeoInfo) {
      return storeGeoInfo;
    }
    try {
      var _ref2, _response$country, _response$region, _response$city;
      const response = yield $.getJSON("https://geo.qiuwen.net.cn");
      const geoInfo = {
        countryOrArea: (_ref2 = (_response$country = response.country) !== null && _response$country !== void 0 ? _response$country : response.countryOrArea) !== null && _ref2 !== void 0 ? _ref2 : "",
        region: (_response$region = response.region) !== null && _response$region !== void 0 ? _response$region : "",
        city: (_response$city = response.city) !== null && _response$city !== void 0 ? _response$city : ""
      };
      mw.storage.setObject(storageKey, geoInfo, 60 * 60 * 24);
      return geoInfo;
    } catch {
      return defaultGeoInfo;
    }
  });
  return function getGeoInfo2() {
    return _ref.apply(this, arguments);
  };
}();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dlby9HZW8udHMiLCAic3JjL0dlby9vcHRpb25zLmpzb24iXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHR5cGUge0dlb0luZm99IGZyb20gJy4vbW9kdWxlcy90eXBlcyc7XG5cbmNvbnN0IGdldEdlb0luZm8gPSBhc3luYyAoKTogUHJvbWlzZTxHZW9JbmZvPiA9PiB7XG5cdGNvbnN0IHN0b3JlR2VvSW5mbyA9IG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleSkgYXMgR2VvSW5mbyB8IG51bGw7XG5cdGlmIChzdG9yZUdlb0luZm8pIHtcblx0XHRyZXR1cm4gc3RvcmVHZW9JbmZvO1xuXHR9XG5cblx0dHJ5IHtcblx0XHRjb25zdCByZXNwb25zZSA9IChhd2FpdCAkLmdldEpTT04oJ2h0dHBzOi8vZ2VvLnFpdXdlbi5uZXQuY24nKSkgYXMgUGFydGlhbDxHZW9JbmZvPiAmIHtcblx0XHRcdGNvdW50cnk/OiBzdHJpbmc7XG5cdFx0fTtcblx0XHRjb25zdCBnZW9JbmZvOiBHZW9JbmZvID0ge1xuXHRcdFx0Y291bnRyeU9yQXJlYTogcmVzcG9uc2UuY291bnRyeSA/PyByZXNwb25zZS5jb3VudHJ5T3JBcmVhID8/ICcnLFxuXHRcdFx0cmVnaW9uOiByZXNwb25zZS5yZWdpb24gPz8gJycsXG5cdFx0XHRjaXR5OiByZXNwb25zZS5jaXR5ID8/ICcnLFxuXHRcdH07XG5cblx0XHRtdy5zdG9yYWdlLnNldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXksIGdlb0luZm8sIDYwICogNjAgKiAyNCk7IC8vIDEgZGF5XG5cblx0XHRyZXR1cm4gZ2VvSW5mbztcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIE9QVElPTlMuZGVmYXVsdEdlb0luZm87XG5cdH1cbn07XG5cbmV4cG9ydCB7Z2V0R2VvSW5mb307XG4iLCAie1xuXHRcImRlZmF1bHRHZW9JbmZvXCI6IHtcblx0XHRcImNvdW50cnlPckFyZWFcIjogXCJcIixcblx0XHRcInJlZ2lvblwiOiBcIlwiLFxuXHRcdFwiY2l0eVwiOiBcIlwiXG5cdH0sXG5cdFwic3RvcmFnZUtleVwiOiBcImV4dC5nYWRnZXQuR2VvXCJcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxjQUFBLENBQUE7QUFBQUMsU0FBQUQsYUFBQTtFQUFBRSxZQUFBQSxNQUFBQTtBQUFBLENBQUE7QUFBQUMsT0FBQUMsVUFBQUMsYUFBQUwsV0FBQTs7QUNDQyxJQUFBTSxpQkFBa0I7RUFDakJDLGVBQWlCO0VBQ2pCQyxRQUFVO0VBQ1ZDLE1BQVE7QUFDVDtBQUNBLElBQUFDLGFBQWM7O0FESGYsSUFBTVIsYUFBQSwyQkFBQTtBQUFBLE1BQUFTLE9BQUFDLGtCQUFhLGFBQThCO0FBQ2hELFVBQU1DLGVBQWVDLEdBQUdDLFFBQVFDLFVBQWtCTixVQUFVO0FBQzVELFFBQUlHLGNBQWM7QUFDakIsYUFBT0E7SUFDUjtBQUVBLFFBQUk7QUFBQSxVQUFBSSxPQUFBQyxtQkFBQUMsa0JBQUFDO0FBQ0gsWUFBTUMsV0FBQSxNQUFrQkMsRUFBRUMsUUFBUSwyQkFBMkI7QUFHN0QsWUFBTUMsVUFBbUI7UUFDeEJqQixnQkFBQVUsU0FBQUMsb0JBQWVHLFNBQVNJLGFBQUEsUUFBQVAsc0JBQUEsU0FBQUEsb0JBQVdHLFNBQVNkLG1CQUFBLFFBQUFVLFVBQUEsU0FBQUEsUUFBaUI7UUFDN0RULFNBQUFXLG1CQUFRRSxTQUFTYixZQUFBLFFBQUFXLHFCQUFBLFNBQUFBLG1CQUFVO1FBQzNCVixPQUFBVyxpQkFBTUMsU0FBU1osVUFBQSxRQUFBVyxtQkFBQSxTQUFBQSxpQkFBUTtNQUN4QjtBQUVBTixTQUFHQyxRQUFRVyxVQUFrQmhCLFlBQVljLFNBQVMsS0FBSyxLQUFLLEVBQUU7QUFFOUQsYUFBT0E7SUFDUixRQUFRO0FBQ1AsYUFBZWxCO0lBQ2hCO0VBQ0QsQ0FBQTtBQUFBLFNBQUEsU0F0Qk1KLGNBQUE7QUFBQSxXQUFBUyxLQUFBZ0IsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBOyIsCiAgIm5hbWVzIjogWyJHZW9fZXhwb3J0cyIsICJfX2V4cG9ydCIsICJnZXRHZW9JbmZvIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIl9fdG9Db21tb25KUyIsICJkZWZhdWx0R2VvSW5mbyIsICJjb3VudHJ5T3JBcmVhIiwgInJlZ2lvbiIsICJjaXR5IiwgInN0b3JhZ2VLZXkiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJzdG9yZUdlb0luZm8iLCAibXciLCAic3RvcmFnZSIsICJnZXRPYmplY3QiLCAiX3JlZjIiLCAiX3Jlc3BvbnNlJGNvdW50cnkiLCAiX3Jlc3BvbnNlJHJlZ2lvbiIsICJfcmVzcG9uc2UkY2l0eSIsICJyZXNwb25zZSIsICIkIiwgImdldEpTT04iLCAiZ2VvSW5mbyIsICJjb3VudHJ5IiwgInNldE9iamVjdCIsICJhcHBseSIsICJhcmd1bWVudHMiXQp9Cg==
