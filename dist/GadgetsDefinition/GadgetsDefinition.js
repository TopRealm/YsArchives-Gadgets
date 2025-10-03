/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://en.wiktionary.org/wiki/User:Erutuon/scripts/gadgets-definition.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/GadgetsDefinition}
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

// dist/GadgetsDefinition/GadgetsDefinition.js
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
//! src/GadgetsDefinition/modules/util/generateGadgetId.ts
var generateGadgetId = (gadgetName) => {
  return "Gadget-".concat(gadgetName);
};
//! src/GadgetsDefinition/GadgetsDefinition.ts
var import_ext_gadget = require("ext.gadget.Util");
//! src/GadgetsDefinition/modules/constant.ts
var REXEX_GADGET_NAME = /^(\s*)([\w_-]+)\s*/;
//! src/GadgetsDefinition/modules/util/matchGadgetName.ts
var matchGadgetName = (innerHTML) => {
  var _ref;
  const regExpExecArray = REXEX_GADGET_NAME.exec(innerHTML);
  return (_ref = regExpExecArray ? regExpExecArray[2] : null) !== null && _ref !== void 0 ? _ref : "";
};
//! src/GadgetsDefinition/modules/util/makeLink.ts
var makeLink = (href, text) => {
  const link = document.createElement("a");
  link.href = href;
  link.textContent = text;
  return link.outerHTML;
};
var makeWikilink = (page, text) => {
  return makeLink(mw.util.getUrl(page), text || page);
};
//! src/GadgetsDefinition/modules/processGadgetDefinition.ts
var linkGadgetSource = (sourcePage) => {
  return makeWikilink("MediaWiki:Gadget-".concat(sourcePage), sourcePage);
};
var linkGadgetAnchor = (gadgetName, text) => {
  return makeLink("#".concat(generateGadgetId(gadgetName)), text || gadgetName);
};
var processGadgetDefinition = (innerHTML) => {
  return innerHTML.replace(REXEX_GADGET_NAME, (_wholeMatch, whitespace, gadgetName) => {
    return "".concat(whitespace + linkGadgetSource(gadgetName), " ");
  }).replace(/([\w_\-.]+\.(?:css|js(?:on)?))/g, linkGadgetSource).replace(/\s*\|\s*/g, " | ").replace(/([a-z]+)\s*=\s*(.+?)(?=\s*[|\]])/g, (_wholeMatch, key, value) => {
    let splitValue = value.split(/\s*,\s*/g);
    switch (key) {
      case "dependencies":
        splitValue = splitValue.map((dependency) => {
          const gadgetName = /^ext\.gadget\.(.+)$/.exec(dependency);
          if (gadgetName) {
            var _gadgetName$;
            const _gadgetName = (_gadgetName$ = gadgetName[1]) !== null && _gadgetName$ !== void 0 ? _gadgetName$ : "";
            return linkGadgetAnchor(_gadgetName, dependency);
          }
          return makeWikilink("Special:GoToInterwiki/mw:ResourceLoader/Core_modules#".concat(dependency), dependency);
        });
        break;
      case "rights":
        key = makeWikilink("Special:GoToInterwiki/mw:Manual:User_rights#List_of_permissions", key);
        break;
      case "peers":
        splitValue = splitValue.map((gadgetName) => {
          return linkGadgetAnchor(gadgetName);
        });
    }
    return "".concat(key, " = ").concat(splitValue.join(", "));
  });
};
//! src/GadgetsDefinition/GadgetsDefinition.ts
void (0, import_ext_gadget.getBody)().then(function gadgetsDefinition($body) {
  const {
    wgCanonicalNamespace,
    wgTitle
  } = mw.config.get();
  const isDefinitionPage = wgCanonicalNamespace === "MediaWiki" && wgTitle === "Gadgets-definition";
  const $parserOutput = $body.find(".mw-parser-output");
  if (!isDefinitionPage || !$parserOutput.length) {
    return;
  }
  var _iterator = _createForOfIteratorHelper($parserOutput.find("li")), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const element = _step.value;
      const gadgetName = matchGadgetName(element.innerHTML);
      if (gadgetName) {
        element.id = generateGadgetId(gadgetName);
      }
      element.innerHTML = processGadgetDefinition(element.innerHTML);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var _iterator2 = _createForOfIteratorHelper($parserOutput.find("pre")), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      const element = _step2.value;
      element.innerHTML = element.innerHTML.replace(/[^\n]+/g, processGadgetDefinition);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dhZGdldHNEZWZpbml0aW9uL21vZHVsZXMvdXRpbC9nZW5lcmF0ZUdhZGdldElkLnRzIiwgInNyYy9HYWRnZXRzRGVmaW5pdGlvbi9HYWRnZXRzRGVmaW5pdGlvbi50cyIsICJzcmMvR2FkZ2V0c0RlZmluaXRpb24vbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvR2FkZ2V0c0RlZmluaXRpb24vbW9kdWxlcy91dGlsL21hdGNoR2FkZ2V0TmFtZS50cyIsICJzcmMvR2FkZ2V0c0RlZmluaXRpb24vbW9kdWxlcy91dGlsL21ha2VMaW5rLnRzIiwgInNyYy9HYWRnZXRzRGVmaW5pdGlvbi9tb2R1bGVzL3Byb2Nlc3NHYWRnZXREZWZpbml0aW9uLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBnZW5lcmF0ZUdhZGdldElkID0gKGdhZGdldE5hbWU6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdHJldHVybiBgR2FkZ2V0LSR7Z2FkZ2V0TmFtZX1gO1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZUdhZGdldElkfTtcbiIsICIvKipcbiAqIEBkZXNjcmlwdGlvbiBBZGRzIGxpbmtzIHRvIGdhZGdldCBkZWZpbml0aW9ucyBpbiBbW01lZGlhV2lraTpHYWRnZXRzLWRlZmluaXRpb25dXSBhbmRcbiAqIHByZXR0aWZpZXMgdGhlbSBieSBhZGRpbmcgd2hpdGVzcGFjZS5cbiAqIEFkZHMgYW5jaG9ycyB0byBnYWRnZXQgZGVmaW5pdGlvbnMgYXMgd2VsbCBhcyBDU1MgdG8gaGlnaGxpZ2h0IHRoZW0gd2hlbiB3ZVxuICogY2xpY2sgYSBsaW5rIHRvIHRoZW0uXG4gKi9cbi8vIFRlY2huaXF1ZSBnbGVhbmVkIGZyb20gW1tlbndpa2k6ZnI6VXRpbGlzYXRldXI6T2Qxbi9BZGRMaW5rc0dhZGdldHNEZWZpbml0aW9uLmpzXV0uXG5pbXBvcnQgJy4vR2FkZ2V0c0RlZmluaXRpb24ubGVzcyc7XG5pbXBvcnQge2dlbmVyYXRlR2FkZ2V0SWR9IGZyb20gJy4vbW9kdWxlcy91dGlsL2dlbmVyYXRlR2FkZ2V0SWQnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHttYXRjaEdhZGdldE5hbWV9IGZyb20gJy4vbW9kdWxlcy91dGlsL21hdGNoR2FkZ2V0TmFtZSc7XG5pbXBvcnQge3Byb2Nlc3NHYWRnZXREZWZpbml0aW9ufSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc0dhZGdldERlZmluaXRpb24nO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGdhZGdldHNEZWZpbml0aW9uKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRjb25zdCB7d2dDYW5vbmljYWxOYW1lc3BhY2UsIHdnVGl0bGV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBpc0RlZmluaXRpb25QYWdlOiBib29sZWFuID0gd2dDYW5vbmljYWxOYW1lc3BhY2UgPT09ICdNZWRpYVdpa2knICYmIHdnVGl0bGUgPT09ICdHYWRnZXRzLWRlZmluaXRpb24nO1xuXHRjb25zdCAkcGFyc2VyT3V0cHV0OiBKUXVlcnkgPSAkYm9keS5maW5kKCcubXctcGFyc2VyLW91dHB1dCcpO1xuXG5cdC8vIE9ubHkgb3BlcmF0ZSBvbiBbW01lZGlhV2lraTpHYWRnZXRzLWRlZmluaXRpb25dXSB3aGVuIHRoZSB0ZXh0IGlzIHZpc2libGUuXG5cdGlmICghaXNEZWZpbml0aW9uUGFnZSB8fCAhJHBhcnNlck91dHB1dC5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBQcm9jZXNzIGdhZGdldCBkZWZpbml0aW9ucyBpbiBsaXN0cy5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRwYXJzZXJPdXRwdXQuZmluZCgnbGknKSkge1xuXHRcdC8vIEFkZCBpZCBzbyB0aGF0IGdhZGdldCBkZWZpbml0aW9ucyBjYW4gYmUgaGlnaGxpZ2h0ZWQgd2hlbiB3ZSBjbGljayBhIGxpbmsgdG8gdGhlbS5cblx0XHRjb25zdCBnYWRnZXROYW1lOiBzdHJpbmcgPSBtYXRjaEdhZGdldE5hbWUoZWxlbWVudC5pbm5lckhUTUwpO1xuXHRcdGlmIChnYWRnZXROYW1lKSB7XG5cdFx0XHRlbGVtZW50LmlkID0gZ2VuZXJhdGVHYWRnZXRJZChnYWRnZXROYW1lKTtcblx0XHR9XG5cblx0XHRlbGVtZW50LmlubmVySFRNTCA9IHByb2Nlc3NHYWRnZXREZWZpbml0aW9uKGVsZW1lbnQuaW5uZXJIVE1MKTtcblx0fVxuXG5cdC8vIFByb2Nlc3MgZ2FkZ2V0IGRlZmluaXRpb25zIGluIHByZSB0YWdzLlxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJHBhcnNlck91dHB1dC5maW5kKCdwcmUnKSkge1xuXHRcdGVsZW1lbnQuaW5uZXJIVE1MID0gZWxlbWVudC5pbm5lckhUTUwucmVwbGFjZSgvW15cXG5dKy9nLCBwcm9jZXNzR2FkZ2V0RGVmaW5pdGlvbik7XG5cdH1cbn0pO1xuIiwgImNvbnN0IFJFWEVYX0dBREdFVF9OQU1FOiBSZWdFeHAgPSAvXihcXHMqKShbXFx3Xy1dKylcXHMqLztcblxuZXhwb3J0IHtSRVhFWF9HQURHRVRfTkFNRX07XG4iLCAiaW1wb3J0IHtSRVhFWF9HQURHRVRfTkFNRX0gZnJvbSAnLi4vY29uc3RhbnQnO1xuXG5jb25zdCBtYXRjaEdhZGdldE5hbWUgPSAoaW5uZXJIVE1MOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRjb25zdCByZWdFeHBFeGVjQXJyYXk6IFJlZ0V4cEV4ZWNBcnJheSB8IG51bGwgPSBSRVhFWF9HQURHRVRfTkFNRS5leGVjKGlubmVySFRNTCk7XG5cblx0cmV0dXJuIChyZWdFeHBFeGVjQXJyYXkgPyByZWdFeHBFeGVjQXJyYXlbMl0gOiBudWxsKSA/PyAnJztcbn07XG5cbmV4cG9ydCB7bWF0Y2hHYWRnZXROYW1lfTtcbiIsICJjb25zdCBtYWtlTGluayA9IChocmVmOiBzdHJpbmcsIHRleHQ6IHN0cmluZyB8IG51bGwpOiBzdHJpbmcgPT4ge1xuXHQvLyBUaGlzIGFuY2hvciBlbGVtZW50IGlzIHVzZWQgdG8gZ2VuZXJhdGUgbGlua3MgYW5kIGlzIG5vdCBhdHRhY2hlZCB0byB0aGUgZG9jdW1lbnQuXG5cdGNvbnN0IGxpbms6IEhUTUxBbmNob3JFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG5cdGxpbmsuaHJlZiA9IGhyZWY7XG5cdGxpbmsudGV4dENvbnRlbnQgPSB0ZXh0O1xuXG5cdHJldHVybiBsaW5rLm91dGVySFRNTDtcbn07XG5cbmNvbnN0IG1ha2VXaWtpbGluayA9IChwYWdlOiBzdHJpbmcsIHRleHQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdHJldHVybiBtYWtlTGluayhtdy51dGlsLmdldFVybChwYWdlKSwgdGV4dCB8fCBwYWdlKTtcbn07XG5cbmV4cG9ydCB7bWFrZUxpbmssIG1ha2VXaWtpbGlua307XG4iLCAiaW1wb3J0IHttYWtlTGluaywgbWFrZVdpa2lsaW5rfSBmcm9tICcuL3V0aWwvbWFrZUxpbmsnO1xuaW1wb3J0IHtSRVhFWF9HQURHRVRfTkFNRX0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge2dlbmVyYXRlR2FkZ2V0SWR9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZUdhZGdldElkJztcblxuY29uc3QgbGlua0dhZGdldFNvdXJjZSA9IChzb3VyY2VQYWdlOiBzdHJpbmcpID0+IHtcblx0cmV0dXJuIG1ha2VXaWtpbGluayhgTWVkaWFXaWtpOkdhZGdldC0ke3NvdXJjZVBhZ2V9YCwgc291cmNlUGFnZSk7XG59O1xuXG5jb25zdCBsaW5rR2FkZ2V0QW5jaG9yID0gKGdhZGdldE5hbWU6IHN0cmluZywgdGV4dD86IHN0cmluZykgPT4ge1xuXHRyZXR1cm4gbWFrZUxpbmsoYCMke2dlbmVyYXRlR2FkZ2V0SWQoZ2FkZ2V0TmFtZSl9YCwgdGV4dCB8fCBnYWRnZXROYW1lKTtcbn07XG5cbmNvbnN0IHByb2Nlc3NHYWRnZXREZWZpbml0aW9uID0gKGlubmVySFRNTDogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0cmV0dXJuIChcblx0XHRpbm5lckhUTUxcblx0XHRcdC8vIGxpbmsgZ2FkZ2V0IG5hbWUgdG8gc3lzdGVtIG1lc3NhZ2UgcGFnZSBhbmQgYWRkIHNwYWNlIGFmdGVyIGl0XG5cdFx0XHQucmVwbGFjZShSRVhFWF9HQURHRVRfTkFNRSwgKF93aG9sZU1hdGNoOiBzdHJpbmcsIHdoaXRlc3BhY2U6IHN0cmluZywgZ2FkZ2V0TmFtZTogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRcdFx0cmV0dXJuIGAke3doaXRlc3BhY2UgKyBsaW5rR2FkZ2V0U291cmNlKGdhZGdldE5hbWUpfSBgO1xuXHRcdFx0fSlcblx0XHRcdC5yZXBsYWNlKC8oW1xcd19cXC0uXStcXC4oPzpjc3N8anMoPzpvbik/KSkvZywgbGlua0dhZGdldFNvdXJjZSkgLy8gbGluayBzY3JpcHQgbmFtZXNcblx0XHRcdC5yZXBsYWNlKC9cXHMqXFx8XFxzKi9nLCAnIHwgJykgLy8gc3BhY2VzIGFyb3VuZCBwaXBlc1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBwcm9jZXNzIG9wdGlvbnNcblx0XHRcdCAqXG5cdFx0XHQgKiBMaW5rIGRlcGVuZGVuY2llczogZXh0LmdhZGdldC5uYW1lIHRvIGVudHJ5IG9uIHRoaXMgcGFnZSwgb3RoZXJzIHRvXG5cdFx0XHQgKiBbW213OlJlc291cmNlTG9hZGVyL0NvcmUgbW9kdWxlc11dIChldmVuIHRob3VnaCBub3QgYWxsIGhhdmUgYW4gZW50cnlcblx0XHRcdCAqIHRoZXJlKS5cblx0XHRcdCAqXG5cdFx0XHQgKiBMaW5rIHBlZXJzIHRvIGVudHJ5IG9uIHRoaXMgcGFnZS5cblx0XHRcdCAqXG5cdFx0XHQgKiBMaW5rIHJpZ2h0cyB0byBbW213Ok1hbnVhbDpVc2VyX3JpZ2h0cyNMaXN0X29mX3Blcm1pc3Npb25zXV0uIFRoZXJlXG5cdFx0XHQgKiBhcmUgdW5mb3J0dW5hdGVseSBubyBhbmNob3JzIGZvciBpbmRpdmlkdWFsIHJpZ2h0cy5cblx0XHRcdCAqL1xuXHRcdFx0LnJlcGxhY2UoLyhbYS16XSspXFxzKj1cXHMqKC4rPykoPz1cXHMqW3xcXF1dKS9nLCAoX3dob2xlTWF0Y2g6IHN0cmluZywga2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0bGV0IHNwbGl0VmFsdWU6IHN0cmluZ1tdID0gdmFsdWUuc3BsaXQoL1xccyosXFxzKi9nKTtcblx0XHRcdFx0c3dpdGNoIChrZXkpIHtcblx0XHRcdFx0XHRjYXNlICdkZXBlbmRlbmNpZXMnOlxuXHRcdFx0XHRcdFx0c3BsaXRWYWx1ZSA9IHNwbGl0VmFsdWUubWFwKChkZXBlbmRlbmN5OiBzdHJpbmcpID0+IHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgZ2FkZ2V0TmFtZTogUmVnRXhwRXhlY0FycmF5IHwgbnVsbCA9IC9eZXh0XFwuZ2FkZ2V0XFwuKC4rKSQvLmV4ZWMoZGVwZW5kZW5jeSk7XG5cdFx0XHRcdFx0XHRcdGlmIChnYWRnZXROYW1lKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgX2dhZGdldE5hbWU6IHN0cmluZyA9IGdhZGdldE5hbWVbMV0gPz8gJyc7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGxpbmtHYWRnZXRBbmNob3IoX2dhZGdldE5hbWUsIGRlcGVuZGVuY3kpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHJldHVybiBtYWtlV2lraWxpbmsoXG5cdFx0XHRcdFx0XHRcdFx0YFNwZWNpYWw6R29Ub0ludGVyd2lraS9tdzpSZXNvdXJjZUxvYWRlci9Db3JlX21vZHVsZXMjJHtkZXBlbmRlbmN5fWAsXG5cdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeVxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdyaWdodHMnOlxuXHRcdFx0XHRcdFx0a2V5ID0gbWFrZVdpa2lsaW5rKCdTcGVjaWFsOkdvVG9JbnRlcndpa2kvbXc6TWFudWFsOlVzZXJfcmlnaHRzI0xpc3Rfb2ZfcGVybWlzc2lvbnMnLCBrZXkpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAncGVlcnMnOlxuXHRcdFx0XHRcdFx0c3BsaXRWYWx1ZSA9IHNwbGl0VmFsdWUubWFwKChnYWRnZXROYW1lOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gbGlua0dhZGdldEFuY2hvcihnYWRnZXROYW1lKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBgJHtrZXl9ID0gJHtzcGxpdFZhbHVlLmpvaW4oJywgJyl9YDtcblx0XHRcdH0pXG5cdCk7XG59O1xuXG5leHBvcnQge3Byb2Nlc3NHYWRnZXREZWZpbml0aW9ufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxtQkFBb0JDLGdCQUErQjtBQUN4RCxTQUFBLFVBQUFDLE9BQWlCRCxVQUFVO0FBQzVCOztBQ09BLElBQUFFLG9CQUFzQkMsUUFBQSxpQkFBQTs7QUNUdEIsSUFBTUMsb0JBQTRCOztBQ0VsQyxJQUFNQyxrQkFBbUJDLGVBQThCO0FBQUEsTUFBQUM7QUFDdEQsUUFBTUMsa0JBQTBDSixrQkFBa0JLLEtBQUtILFNBQVM7QUFFaEYsVUFBQUMsT0FBUUMsa0JBQWtCQSxnQkFBZ0IsQ0FBQyxJQUFJLFVBQUEsUUFBQUQsU0FBQSxTQUFBQSxPQUFTO0FBQ3pEOztBQ05BLElBQU1HLFdBQVdBLENBQUNDLE1BQWNDLFNBQWdDO0FBRS9ELFFBQU1DLE9BQTBCQyxTQUFTQyxjQUFjLEdBQUc7QUFFMURGLE9BQUtGLE9BQU9BO0FBQ1pFLE9BQUtHLGNBQWNKO0FBRW5CLFNBQU9DLEtBQUtJO0FBQ2I7QUFFQSxJQUFNQyxlQUFlQSxDQUFDQyxNQUFjUCxTQUF5QjtBQUM1RCxTQUFPRixTQUFTVSxHQUFHQyxLQUFLQyxPQUFPSCxJQUFJLEdBQUdQLFFBQVFPLElBQUk7QUFDbkQ7O0FDUkEsSUFBTUksbUJB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QUFBaUMsS0FBQTtBQUFBRyxlQUFBRixFQUFBRCxHQUFBO0VBQUEsVUFBQTtBQUFBRyxlQUFBRCxFQUFBO0VBQUE7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogWyJnZW5lcmF0ZUdhZGdldElkIiwgImdhZGdldE5hbWUiLCAiY29uY2F0IiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiUkVYRVhfR0FER0VUX05BTUUiLCAibWF0Y2hHYWRnZXROYW1lIiwgImlubmVySFRNTCIsICJfcmVmIiwgInJlZ0V4cEV4ZWNBcnJheSIsICJleGVjIiwgIm1ha2VMaW5rIiwgImhyZWYiLCAidGV4dCIsICJsaW5rIiwgImRvY3VtZW50IiwgImNyZWF0ZUVsZW1lbnQiLCAidGV4dENvbnRlbnQiLCAib3V0ZXJIVE1MIiwgIm1ha2VXaWtpbGluayIsICJwYWdlIiwgIm13IiwgInV0aWwiLCAiZ2V0VXJsIiwgImxpbmtHYWRnZXRTb3VyY2UiLCAic291cmNlUGFnZSIsICJsaW5rR2FkZ2V0QW5jaG9yIiwgInByb2Nlc3NHYWRnZXREZWZpbml0aW9uIiwgInJlcGxhY2UiLCAiX3dob2xlTWF0Y2giLCAid2hpdGVzcGFjZSIsICJrZXkiLCAidmFsdWUiLCAic3BsaXRWYWx1ZSIsICJzcGxpdCIsICJtYXAiLCAiZGVwZW5kZW5jeSIsICJfZ2FkZ2V0TmFtZSQiLCAiX2dhZGdldE5hbWUiLCAiam9pbiIsICJnZXRCb2R5IiwgInRoZW4iLCAiZ2FkZ2V0c0RlZmluaXRpb24iLCAiJGJvZHkiLCAid2dDYW5vbmljYWxOYW1lc3BhY2UiLCAid2dUaXRsZSIsICJjb25maWciLCAiZ2V0IiwgImlzRGVmaW5pdGlvblBhZ2UiLCAiJHBhcnNlck91dHB1dCIsICJmaW5kIiwgImxlbmd0aCIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiZWxlbWVudCIsICJpZCIsICJlcnIiLCAiZSIsICJmIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIl0KfQo=
