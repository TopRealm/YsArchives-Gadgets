/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/GeoLocation}
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

// dist/GeoLocation/GeoLocation.js
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
//! src/GeoLocation/modules/constant.ts
var SYSTEM_SCRIPT_LIST = ["滥用过滤器", "Example", "External contributors", "Maintenance script", "MediaWiki default", "MediaWiki message delivery", "New user page"];
var WEBMASTER_LIST = ["WebMaster", "Qiuwen"];
//! src/GeoLocation/GeoLocation.ts
var import_ext_gadget3 = require("ext.gadget.Geo");
//! src/GeoLocation/options.json
var apiTag = "GeoLocation";
var version = "3.0";
//! src/GeoLocation/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("GeoLocation/".concat(version));
//! src/GeoLocation/modules/i18n.ts
var import_ext_gadget2 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Update: (0, import_ext_gadget2.localize)({
      en: "Update IP location information",
      ja: "IP地域の情報を更新",
      "zh-hans": "更新IP属地信息",
      "zh-hant": "更新IP屬地資訊"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/GeoLocation/modules/storeLocation.ts
var queryRevisons = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (titles) {
    const params = {
      titles,
      action: "query",
      format: "json",
      formatversion: "2",
      prop: "revisions",
      rvprop: "content",
      rvslots: "main",
      smaxage: 600,
      maxage: 600
    };
    const response = yield api.get(params);
    return response;
  });
  return function queryRevisons2(_x) {
    return _ref.apply(this, arguments);
  };
}();
var edit = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* (title, text, summary) {
    const params = {
      title,
      text,
      action: "edit",
      format: "json",
      formatversion: "2",
      contentformat: "application/json",
      contentmodel: "json",
      minor: true,
      recreate: true,
      watchlist: "unwatch",
      tags: apiTag
    };
    if (summary) {
      params.summary = summary;
    }
    const response = yield api.postWithEditToken(params);
    return response;
  });
  return function edit2(_x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var storeLocation = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* ({
    countryOrArea,
    region
  }) {
    const {
      wgUserName
    } = mw.config.get();
    const storePageTitle = "User:".concat(wgUserName, "/GeoIP.json");
    try {
      var _data$query$pages$;
      const data = yield queryRevisons(storePageTitle);
      const content = ((_data$query$pages$ = data["query"].pages[0]) === null || _data$query$pages$ === void 0 || (_data$query$pages$ = _data$query$pages$.revisions) === null || _data$query$pages$ === void 0 ? void 0 : _data$query$pages$[0].slots.main.content) || "";
      const response = JSON.parse(content);
      if (response.countryOrArea && response.countryOrArea === countryOrArea) {
        if (!response.region || !region) {
          return;
        }
        if (response.region === region) {
          return;
        }
      }
    } catch {
    }
    const geoInfo = {
      countryOrArea,
      region
    };
    try {
      yield edit(storePageTitle, JSON.stringify(geoInfo), getMessage("Update"));
    } catch (error) {
      console.error("[GeoLocation] Ajax error:", error);
    }
  });
  return function storeLocation2(_x5) {
    return _ref3.apply(this, arguments);
  };
}();
//! src/GeoLocation/GeoLocation.ts
var import_ext_gadget4 = require("ext.gadget.Util");
(function() {
  var _geoLocation = _asyncToGenerator(function* () {
    const {
      wgUserName
    } = mw.config.get();
    if (!wgUserName || SYSTEM_SCRIPT_LIST.includes(wgUserName) || WEBMASTER_LIST.includes(wgUserName)) {
      return;
    }
    if ((0, import_ext_gadget4.userIsInGroup)(["steward", "bot"])) {
      return;
    }
    const {
      countryOrArea,
      region
    } = yield (0, import_ext_gadget3.getGeoInfo)();
    if (!countryOrArea) {
      return;
    }
    void storeLocation({
      countryOrArea,
      region
    });
  });
  function geoLocation() {
    return _geoLocation.apply(this, arguments);
  }
  return geoLocation;
})()();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dlb0xvY2F0aW9uL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0dlb0xvY2F0aW9uL0dlb0xvY2F0aW9uLnRzIiwgInNyYy9HZW9Mb2NhdGlvbi9vcHRpb25zLmpzb24iLCAic3JjL0dlb0xvY2F0aW9uL21vZHVsZXMvYXBpLnRzIiwgInNyYy9HZW9Mb2NhdGlvbi9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0dlb0xvY2F0aW9uL21vZHVsZXMvc3RvcmVMb2NhdGlvbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgU1lTVEVNX1NDUklQVF9MSVNUOiBzdHJpbmdbXSA9IFtcblx0J+a7peeUqOi/h+a7pOWZqCcsXG5cdCdFeGFtcGxlJyxcblx0J0V4dGVybmFsIGNvbnRyaWJ1dG9ycycsXG5cdCdNYWludGVuYW5jZSBzY3JpcHQnLFxuXHQnTWVkaWFXaWtpIGRlZmF1bHQnLFxuXHQnTWVkaWFXaWtpIG1lc3NhZ2UgZGVsaXZlcnknLFxuXHQnTmV3IHVzZXIgcGFnZScsXG5dO1xuY29uc3QgV0VCTUFTVEVSX0xJU1Q6IHN0cmluZ1tdID0gWydXZWJNYXN0ZXInLCAnUWl1d2VuJ107XG5cbmV4cG9ydCB7U1lTVEVNX1NDUklQVF9MSVNULCBXRUJNQVNURVJfTElTVH07XG4iLCAiaW1wb3J0IHtTWVNURU1fU0NSSVBUX0xJU1QsIFdFQk1BU1RFUl9MSVNUfSBmcm9tICcuL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IHtnZXRHZW9JbmZvfSBmcm9tICdleHQuZ2FkZ2V0Lkdlbyc7XG5pbXBvcnQge3N0b3JlTG9jYXRpb259IGZyb20gJy4vbW9kdWxlcy9zdG9yZUxvY2F0aW9uJztcbmltcG9ydCB7dXNlcklzSW5Hcm91cH0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuKGFzeW5jIGZ1bmN0aW9uIGdlb0xvY2F0aW9uKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCB7d2dVc2VyTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKCF3Z1VzZXJOYW1lIHx8IFNZU1RFTV9TQ1JJUFRfTElTVC5pbmNsdWRlcyh3Z1VzZXJOYW1lKSB8fCBXRUJNQVNURVJfTElTVC5pbmNsdWRlcyh3Z1VzZXJOYW1lKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIERpc2FibGVkIGZvciBvZmZpY2lhbCB1c2Vyc1xuXHRpZiAodXNlcklzSW5Hcm91cChbJ3N0ZXdhcmQnLCAnYm90J10pKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qge2NvdW50cnlPckFyZWEsIHJlZ2lvbn0gPSBhd2FpdCBnZXRHZW9JbmZvKCk7XG5cdGlmICghY291bnRyeU9yQXJlYSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHZvaWQgc3RvcmVMb2NhdGlvbih7XG5cdFx0Y291bnRyeU9yQXJlYSxcblx0XHRyZWdpb24sXG5cdH0pO1xufSkoKTtcbiIsICJ7XG5cdFwiYXBpVGFnXCI6IFwiR2VvTG9jYXRpb25cIixcblx0XCJ2ZXJzaW9uXCI6IFwiMy4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYEdlb0xvY2F0aW9uLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdFVwZGF0ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdVcGRhdGUgSVAgbG9jYXRpb24gaW5mb3JtYXRpb24nLFxuXHRcdFx0amE6ICdJUOWcsOWfn+OBruaDheWgseOCkuabtOaWsCcsXG5cdFx0XHQnemgtaGFucyc6ICfmm7TmlrBJUOWxnuWcsOS/oeaBrycsXG5cdFx0XHQnemgtaGFudCc6ICfmm7TmlrBJUOWxrOWcsOizh+ioiicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB0eXBlIHtTdG9yZUdlb0luZm99IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgcXVlcnlSZXZpc29ucyA9IGFzeW5jICh0aXRsZXM6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgPSB7XG5cdFx0dGl0bGVzLFxuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0cnZwcm9wOiAnY29udGVudCcsXG5cdFx0cnZzbG90czogJ21haW4nLFxuXHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRtYXhhZ2U6IDYwMCxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgZWRpdCA9IGFzeW5jICh0aXRsZTogc3RyaW5nLCB0ZXh0OiBzdHJpbmcsIHN1bW1hcnk/OiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlFZGl0UGFnZVBhcmFtcyA9IHtcblx0XHR0aXRsZSxcblx0XHR0ZXh0LFxuXHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRjb250ZW50Zm9ybWF0OiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0Y29udGVudG1vZGVsOiAnanNvbicsXG5cdFx0bWlub3I6IHRydWUsXG5cdFx0cmVjcmVhdGU6IHRydWUsXG5cdFx0d2F0Y2hsaXN0OiAndW53YXRjaCcsXG5cdFx0dGFnczogT1BUSU9OUy5hcGlUYWcsXG5cdH07XG5cdGlmIChzdW1tYXJ5KSB7XG5cdFx0cGFyYW1zLnN1bW1hcnkgPSBzdW1tYXJ5O1xuXHR9XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3RXaXRoRWRpdFRva2VuKHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3Qgc3RvcmVMb2NhdGlvbiA9IGFzeW5jICh7Y291bnRyeU9yQXJlYSwgcmVnaW9ufTogU3RvcmVHZW9JbmZvKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IHt3Z1VzZXJOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3Qgc3RvcmVQYWdlVGl0bGU6IHN0cmluZyA9IGBVc2VyOiR7d2dVc2VyTmFtZX0vR2VvSVAuanNvbmA7XG5cblx0dHJ5IHtcblx0XHRjb25zdCBkYXRhID0gYXdhaXQgcXVlcnlSZXZpc29ucyhzdG9yZVBhZ2VUaXRsZSk7XG5cdFx0Y29uc3QgY29udGVudCA9IChkYXRhWydxdWVyeSddLnBhZ2VzWzBdPy5yZXZpc2lvbnM/LlswXS5zbG90cy5tYWluLmNvbnRlbnQgYXMgc3RyaW5nKSB8fCAnJztcblx0XHRjb25zdCByZXNwb25zZSA9IEpTT04ucGFyc2UoY29udGVudCkgYXMgUGFydGlhbDxTdG9yZUdlb0luZm8+O1xuXG5cdFx0aWYgKHJlc3BvbnNlLmNvdW50cnlPckFyZWEgJiYgcmVzcG9uc2UuY291bnRyeU9yQXJlYSA9PT0gY291bnRyeU9yQXJlYSkge1xuXHRcdFx0aWYgKCFyZXNwb25zZS5yZWdpb24gfHwgIXJlZ2lvbikge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmIChyZXNwb25zZS5yZWdpb24gPT09IHJlZ2lvbikge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGNhdGNoIHt9XG5cblx0Y29uc3QgZ2VvSW5mbzogU3RvcmVHZW9JbmZvID0ge1xuXHRcdGNvdW50cnlPckFyZWEsXG5cdFx0cmVnaW9uLFxuXHR9O1xuXG5cdHRyeSB7XG5cdFx0YXdhaXQgZWRpdChzdG9yZVBhZ2VUaXRsZSwgSlNPTi5zdHJpbmdpZnkoZ2VvSW5mbyksIGdldE1lc3NhZ2UoJ1VwZGF0ZScpKTtcblx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRjb25zb2xlLmVycm9yKCdbR2VvTG9jYXRpb25dIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHR9XG59O1xuXG5leHBvcnQge3N0b3JlTG9jYXRpb259O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLHFCQUErQixDQUNwQyxTQUNBLFdBQ0EseUJBQ0Esc0JBQ0EscUJBQ0EsOEJBQ0EsZUFBQTtBQUVELElBQU1DLGlCQUEyQixDQUFDLGFBQWEsUUFBUTs7QUNSdkQsSUFBQUMscUJBQXlCQyxRQUFBLGdCQUFBOztBQ0F4QixJQUFBQyxTQUFVO0FBQ1YsSUFBQUMsVUFBVzs7QUNEWixJQUFBQyxvQkFBd0JILFFBQUEsaUJBQUE7QUFFeEIsSUFBTUksT0FBQSxHQUFjRCxrQkFBQUUsV0FBQSxlQUFBQyxPQUFpQ0osT0FBTyxDQUFFOztBQ0g5RCxJQUFBSyxxQkFBdUJQLFFBQUEsaUJBQUE7QUFFdkIsSUFBTVEsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsU0FBQSxHQUFRRixtQkFBQUcsVUFBUztNQUNoQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1DLGVBQWVMLGdCQUFnQjtBQUVyQyxJQUFNTSxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBQ1pBLElBQU1DLGdCQUFBLDJCQUFBO0FBQUEsTUFBQUMsT0FBQUMsa0JBQWdCLFdBQU9DLFFBQThCO0FBQzFELFVBQU1DLFNBQWtDO01BQ3ZDRDtNQUNBRSxRQUFRO01BQ1JDLFFBQVE7TUFDUkMsZUFBZTtNQUNmQyxNQUFNO01BQ05DLFFBQVE7TUFDUkMsU0FBUztNQUNUQyxTQUFTO01BQ1RDLFFBQVE7SUFDVDtBQUNBLFVBQU1DLFdBQUEsTUFBaUJ6QixJQUFJMEIsSUFBSVYsTUFBTTtBQUVyQyxXQUFPUztFQUNSLENBQUE7QUFBQSxTQUFBLFNBZk1iLGVBQUFlLElBQUE7QUFBQSxXQUFBZCxLQUFBZSxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7QUFpQk4sSUFBTUMsT0FBQSwyQkFBQTtBQUFBLE1BQUFDLFFBQUFqQixrQkFBTyxXQUFPa0IsT0FBZUMsTUFBY0MsU0FBcUI7QUFDckUsVUFBTWxCLFNBQTRCO01BQ2pDZ0I7TUFDQUM7TUFDQWhCLFFBQVE7TUFDUkMsUUFBUTtNQUNSQyxlQUFlO01BQ2ZnQixlQUFlO01BQ2ZDLGNBQWM7TUFDZEMsT0FBTztNQUNQQyxVQUFVO01BQ1ZDLFdBQVc7TUFDWEMsTUFBYzNDO0lBQ2Y7QUFDQSxRQUFJcUMsU0FBUztBQUNabEIsYUFBT2tCLFVBQVVBO0lBQ2xCO0FBQ0EsVUFBTVQsV0FBQSxNQUFpQnpCLElBQUl5QyxrQkFBa0J6QixNQUFNO0FBRW5ELFdBQU9TO0VBQ1IsQ0FBQTtBQUFBLFNBQUEsU0FwQk1LLE1BQUFZLEtBQUFDLEtBQUFDLEtBQUE7QUFBQSxXQUFBYixNQUFBSCxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7QUFzQk4sSUFBTWdCLGdCQUFBLDJCQUFBO0FBQUEsTUFBQUMsUUFBQWhDLGtCQUFnQixXQUFPO0lBQUNpQztJQUFlQztFQUFNLEdBQW1DO0FBQ3JGLFVBQU07TUFBQ0M7SUFBVSxJQUFJQyxHQUFHQyxPQUFPekIsSUFBSTtBQUNuQyxVQUFNMEIsaUJBQUEsUUFBQWxELE9BQWlDK0MsWUFBVSxhQUFBO0FBRWpELFFBQUk7QUFBQSxVQUFBSTtBQUNILFlBQU1DLE9BQUEsTUFBYTFDLGNBQWN3QyxjQUFjO0FBQy9DLFlBQU1HLFlBQVdGLHFCQUFBQyxLQUFLLE9BQU8sRUFBRUUsTUFBTSxDQUFDLE9BQUEsUUFBQUgsdUJBQUEsV0FBQUEscUJBQXJCQSxtQkFBd0JJLGVBQUEsUUFBQUosdUJBQUEsU0FBQSxTQUF4QkEsbUJBQW9DLENBQUMsRUFBRUssTUFBTUMsS0FBS0osWUFBc0I7QUFDekYsWUFBTTlCLFdBQVdtQyxLQUFLQyxNQUFNTixPQUFPO0FBRW5DLFVBQUk5QixTQUFTc0IsaUJBQWlCdEIsU0FBU3NCLGtCQUFrQkEsZUFBZTtBQUN2RSxZQUFJLENBQUN0QixTQUFTdUIsVUFBVSxDQUFDQSxRQUFRO0FBQ2hDO1FBQ0Q7QUFFQSxZQUFJdkIsU0FBU3VCLFdBQVdBLFFBQVE7QUFDL0I7UUFDRDtNQUNEO0lBQ0QsUUFBUTtJQUFDO0FBRVQsVUFBTWMsVUFBd0I7TUFDN0JmO01BQ0FDO0lBQ0Q7QUFFQSxRQUFJO0FBQ0gsWUFBTWxCLEtBQUtzQixnQkFBZ0JRLEtBQUtHLFVBQVVELE9BQU8sR0FBR3BELFdBQVcsUUFBUSxDQUFDO0lBQ3pFLFNBQVNzRCxPQUFnQjtBQUN4QkMsY0FBUUQsTUFBTSw2QkFBNkJBLEtBQUs7SUFDakQ7RUFDRCxDQUFBO0FBQUEsU0FBQSxTQTlCTW5CLGVBQUFxQixLQUFBO0FBQUEsV0FBQXBCLE1BQUFsQixNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7O0FKekNOLElBQUFzQyxxQkFBNEJ2RSxRQUFBLGlCQUFBO0NBQUEsV0FBQTtBQUFBLE1BQUF3RSxlQUFBdEQsa0JBRTNCLGFBQTRDO0FBQzVDLFVBQU07TUFBQ21DO0lBQVUsSUFBSUMsR0FBR0MsT0FBT3pCLElBQUk7QUFFbkMsUUFBSSxDQUFDdUIsY0FBY3hELG1CQUFtQjRFLFNBQVNwQixVQUFVLEtBQUt2RCxlQUFlMkUsU0FBU3BCLFVBQVUsR0FBRztBQUNsRztJQUNEO0FBR0EsU0FBQSxHQUFJa0IsbUJBQUFHLGVBQWMsQ0FBQyxXQUFXLEtBQUssQ0FBQyxHQUFHO0FBQ3RDO0lBQ0Q7QUFFQSxVQUFNO01BQUN2QjtNQUFlQztJQUFNLElBQUEsT0FBSSxHQUFNckQsbUJBQUE0RSxZQUFXO0FBQ2pELFFBQUksQ0FBQ3hCLGVBQWU7QUFDbkI7SUFDRDtBQUVBLFNBQUtGLGNBQWM7TUFDbEJFO01BQ0FDO0lBQ0QsQ0FBQztFQUNGLENBQUE7QUFBQSxXQXJCZ0J3QixjQUFBO0FBQUEsV0FBQUosYUFBQXhDLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsU0FBQTJDO0FBQUEsR0FBQSxFQXFCYjsiLAogICJuYW1lcyI6IFsiU1lTVEVNX1NDUklQVF9MSVNUIiwgIldFQk1BU1RFUl9MSVNUIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJyZXF1aXJlIiwgImFwaVRhZyIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJnZXRJMThuTWVzc2FnZXMiLCAiVXBkYXRlIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJxdWVyeVJldmlzb25zIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidGl0bGVzIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJydnByb3AiLCAicnZzbG90cyIsICJzbWF4YWdlIiwgIm1heGFnZSIsICJyZXNwb25zZSIsICJnZXQiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImVkaXQiLCAiX3JlZjIiLCAidGl0bGUiLCAidGV4dCIsICJzdW1tYXJ5IiwgImNvbnRlbnRmb3JtYXQiLCAiY29udGVudG1vZGVsIiwgIm1pbm9yIiwgInJlY3JlYXRlIiwgIndhdGNobGlzdCIsICJ0YWdzIiwgInBvc3RXaXRoRWRpdFRva2VuIiwgIl94MiIsICJfeDMiLCAiX3g0IiwgInN0b3JlTG9jYXRpb24iLCAiX3JlZjMiLCAiY291bnRyeU9yQXJlYSIsICJyZWdpb24iLCAid2dVc2VyTmFtZSIsICJtdyIsICJjb25maWciLCAic3RvcmVQYWdlVGl0bGUiLCAiX2RhdGEkcXVlcnkkcGFnZXMkIiwgImRhdGEiLCAiY29udGVudCIsICJwYWdlcyIsICJyZXZpc2lvbnMiLCAic2xvdHMiLCAibWFpbiIsICJKU09OIiwgInBhcnNlIiwgImdlb0luZm8iLCAic3RyaW5naWZ5IiwgImVycm9yIiwgImNvbnNvbGUiLCAiX3g1IiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJfZ2VvTG9jYXRpb24iLCAiaW5jbHVkZXMiLCAidXNlcklzSW5Hcm91cCIsICJnZXRHZW9JbmZvIiwgImdlb0xvY2F0aW9uIl0KfQo=
