/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0|import=no}}'
 * @author 顶呱呱的阿杰 
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

// dist/Mainpage/Mainpage.js
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
//! src/Mainpage/modules/util/animateNumber.ts
var animateNumber = function(start, end, duration, element) {
  let startTime = null;
  const update = (currentTime) => {
    startTime || (startTime = currentTime);
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const currentNumber = Math.floor(progress * (end - start) + start);
    element.textContent = currentNumber.toString();
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  };
  requestAnimationFrame(update);
};
var animateNumber_default = animateNumber;
//! src/Mainpage/modules/typescript/index-header.ts
var libHeader = () => {
  const elements = document.querySelectorAll(".value");
  var _iterator = _createForOfIteratorHelper(elements), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const element = _step.value;
      const start = 0;
      const end = Number.parseInt((element.textContent || "0").replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "") || "0", 10);
      const duration = 1500;
      animateNumber_default(start, end, duration, element);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
var searchInjection = () => {
  const SearchFormHTML = '<form name="bodySearch0.048433246538" id="bodySearch0.048433246538" class="search-input bodySearch mw-inputbox-inline" action="/wiki/Special:%E6%90%9C%E7%B4%A2">\n	<input name="search" class="mw-searchInput mw-ui-input mw-ui-input-inline" size="50" id="bodySearchInput0.048433246538" dir="ltr" placeholder="搜索有兽档案馆" aria-label="搜索有兽档案馆">\n	<button type="submit" name="go" class="search-input-icon filter mw-ui-button"><i></i></button>\n	<i class="search-input-border"></i>\n	</form>';
  const Search = document.querySelector("#Search");
  if (Search) Search.innerHTML = SearchFormHTML;
};
//! src/Mainpage/modules/util/dateLookup.ts
var getPreviousOddWeek = () => {
  const now = /* @__PURE__ */ new Date();
  const todayUTC = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
  const thursdayUTC = new Date(todayUTC);
  thursdayUTC.setUTCDate(todayUTC.getUTCDate() + 4 - (todayUTC.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(thursdayUTC.getUTCFullYear(), 0, 1));
  const timeDiff = thursdayUTC.getTime() - yearStart.getTime();
  const daysDiff = Math.floor(timeDiff / 864e5) + 1;
  const currentWeek = Math.ceil(daysDiff / 7);
  let previousOddWeek = currentWeek % 2 === 1 ? currentWeek - 2 : currentWeek - 3;
  if (previousOddWeek <= 0) {
    const lastYearEnd = new Date(Date.UTC(thursdayUTC.getUTCFullYear() - 1, 11, 31));
    lastYearEnd.setUTCDate(lastYearEnd.getUTCDate() + 4 - (lastYearEnd.getUTCDay() || 7));
    const lastYearStart = new Date(Date.UTC(lastYearEnd.getUTCFullYear(), 0, 1));
    const lastYearWeeks = Math.ceil((lastYearEnd.getTime() - lastYearStart.getTime()) / 6048e5);
    previousOddWeek = lastYearWeeks % 2 === 1 ? lastYearWeeks : lastYearWeeks - 1;
  }
  return previousOddWeek;
};
var getMonthFromWeek = (year, week) => {
  const firstDayOfYear = new Date(year, 0, 1);
  const firstThursday = new Date(firstDayOfYear);
  firstThursday.setDate(firstDayOfYear.getDate() + (4 - firstDayOfYear.getDay() + 7) % 7);
  const weekStart = new Date(firstThursday);
  weekStart.setDate(firstThursday.getDate() + (week - 1) * 7 - 3);
  const middleOfWeek = new Date(weekStart);
  middleOfWeek.setDate(weekStart.getDate() + 3);
  return middleOfWeek.getMonth() + 1;
};
//! src/Mainpage/modules/typescript/summary.ts
var libSummary = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* () {
    const summary = document.querySelectorAll(".summary");
    if (!summary.length) return;
    const k = getPreviousOddWeek();
    const d = (/* @__PURE__ */ new Date()).getFullYear();
    const titleStr = "有兽档案馆:档案馆双周报/".concat(d, "年").concat(getMonthFromWeek(d, k + 1), "月/第").concat(k, "-").concat(k + 1, "周");
    const url = "/api/api.php?action=query&prop=extracts&exsectionformat=plain&exchars=175&format=json&titles=".concat(titleStr, "/summary");
    try {
      const a = yield fetch(url);
      const res = yield a.json();
      const pageKeys = Object.keys(res.query.pages);
      const summaryUrlHtml = '<a href="https://youshou.wiki/wiki/'.concat(titleStr, '">更多消息，请查阅本期双周报详细信息</a>');
      const {
        pages
      } = res.query;
      const [pageKey] = pageKeys;
      const page = pageKey ? pages[pageKey] : void 0;
      let extract;
      if (page) {
        extract = page && page.extract ? page.extract.replace("更多消息，请查阅本期双周报详细信息", summaryUrlHtml).replace(/…$/g, "") : "";
      } else {
        extract = "加载失败QWQ，刷新试试吧";
      }
      var _iterator2 = _createForOfIteratorHelper(summary), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          const el = _step2.value;
          el.innerHTML = extract;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    } catch (error) {
      console.error("获取摘要时出错:", error);
      var _iterator3 = _createForOfIteratorHelper(summary), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          const el = _step3.value;
          el.innerHTML = "加载失败QWQ，刷新试试吧";
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  });
  return function libSummary2() {
    return _ref.apply(this, arguments);
  };
}();
var summary_default = libSummary;
//! src/Mainpage/Mainpage.ts
libHeader();
searchInjection();
summary_default();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01haW5wYWdlL21vZHVsZXMvdXRpbC9hbmltYXRlTnVtYmVyLnRzIiwgInNyYy9NYWlucGFnZS9tb2R1bGVzL3R5cGVzY3JpcHQvaW5kZXgtaGVhZGVyLnRzIiwgInNyYy9NYWlucGFnZS9tb2R1bGVzL3V0aWwvZGF0ZUxvb2t1cC50cyIsICJzcmMvTWFpbnBhZ2UvbW9kdWxlcy90eXBlc2NyaXB0L3N1bW1hcnkudHMiLCAic3JjL01haW5wYWdlL01haW5wYWdlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKlxuICogQGNvZGluZzogVVRGLThcbiAqIEBBdXRob3I6IEF3QWppZVxuICogQERhdGU6IDIwMjUtMDMtMDEgMDE6MDE6NTVcbiAqL1xuY29uc3QgYW5pbWF0ZU51bWJlciA9IGZ1bmN0aW9uIChzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlciwgZHVyYXRpb246IG51bWJlciwgZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcblx0bGV0IHN0YXJ0VGltZTogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3QgdXBkYXRlID0gKGN1cnJlbnRUaW1lOiBET01IaWdoUmVzVGltZVN0YW1wKTogdm9pZCA9PiB7XG5cdFx0c3RhcnRUaW1lIHx8PSBjdXJyZW50VGltZTtcblx0XHRjb25zdCB0aW1lRWxhcHNlZCA9IGN1cnJlbnRUaW1lIC0gc3RhcnRUaW1lO1xuXHRcdGNvbnN0IHByb2dyZXNzID0gTWF0aC5taW4odGltZUVsYXBzZWQgLyBkdXJhdGlvbiwgMSk7XG5cdFx0Y29uc3QgY3VycmVudE51bWJlciA9IE1hdGguZmxvb3IocHJvZ3Jlc3MgKiAoZW5kIC0gc3RhcnQpICsgc3RhcnQpO1xuXG5cdFx0ZWxlbWVudC50ZXh0Q29udGVudCA9IGN1cnJlbnROdW1iZXIudG9TdHJpbmcoKTtcblxuXHRcdGlmIChwcm9ncmVzcyA8IDEpIHtcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xuXHRcdH1cblx0fTtcblxuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFuaW1hdGVOdW1iZXI7XG4iLCAiaW1wb3J0IGFuaW1hdGVOdW1iZXIgZnJvbSAnLi4vdXRpbC9hbmltYXRlTnVtYmVyJztcbmNvbnN0IGxpYkhlYWRlciA9ICgpID0+IHtcblx0Y29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudmFsdWUnKTtcblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcblx0XHRjb25zdCBzdGFydCA9IDA7XG5cdFx0Y29uc3QgZW5kID0gTnVtYmVyLnBhcnNlSW50KChlbGVtZW50LnRleHRDb250ZW50IHx8ICcwJykucmVwbGFjZSgvWy4sLyMhJCVeJio7Ont9PVxcLV9gfigpXS9nLCAnJykgfHwgJzAnLCAxMCk7XG5cdFx0Y29uc3QgZHVyYXRpb24gPSAxNTAwO1xuXHRcdGFuaW1hdGVOdW1iZXIoc3RhcnQsIGVuZCwgZHVyYXRpb24sIGVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpO1xuXHR9XG59O1xuXG5jb25zdCBzZWFyY2hJbmplY3Rpb24gPSAoKSA9PiB7XG5cdGNvbnN0IFNlYXJjaEZvcm1IVE1MID0gYDxmb3JtIG5hbWU9XCJib2R5U2VhcmNoMC4wNDg0MzMyNDY1MzhcIiBpZD1cImJvZHlTZWFyY2gwLjA0ODQzMzI0NjUzOFwiIGNsYXNzPVwic2VhcmNoLWlucHV0IGJvZHlTZWFyY2ggbXctaW5wdXRib3gtaW5saW5lXCIgYWN0aW9uPVwiL3dpa2kvU3BlY2lhbDolRTYlOTAlOUMlRTclQjQlQTJcIj5cblx0PGlucHV0IG5hbWU9XCJzZWFyY2hcIiBjbGFzcz1cIm13LXNlYXJjaElucHV0IG13LXVpLWlucHV0IG13LXVpLWlucHV0LWlubGluZVwiIHNpemU9XCI1MFwiIGlkPVwiYm9keVNlYXJjaElucHV0MC4wNDg0MzMyNDY1MzhcIiBkaXI9XCJsdHJcIiBwbGFjZWhvbGRlcj1cIuaQnOe0ouacieWFveaho+ahiOmmhlwiIGFyaWEtbGFiZWw9XCLmkJzntKLmnInlhb3moaPmoYjppoZcIj5cblx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgbmFtZT1cImdvXCIgY2xhc3M9XCJzZWFyY2gtaW5wdXQtaWNvbiBmaWx0ZXIgbXctdWktYnV0dG9uXCI+PGk+PC9pPjwvYnV0dG9uPlxuXHQ8aSBjbGFzcz1cInNlYXJjaC1pbnB1dC1ib3JkZXJcIj48L2k+XG5cdDwvZm9ybT5gO1xuXHRjb25zdCBTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjU2VhcmNoJyk7XG5cdGlmIChTZWFyY2gpIFNlYXJjaC5pbm5lckhUTUwgPSBTZWFyY2hGb3JtSFRNTDtcbn07XG5cbmV4cG9ydCB7bGliSGVhZGVyLCBzZWFyY2hJbmplY3Rpb259O1xuIiwgIi8qXG4gKiBAY29kaW5nOiBVVEYtOFxuICogQEF1dGhvcjogQXdBamllXG4gKiBARGF0ZTogMjAyNS0wMy0wMSAwMToxNjoyMFxuICovXG5jb25zdCBnZXRQcmV2aW91c09kZFdlZWsgPSAoKSA9PiB7XG5cdGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG5cdGNvbnN0IHRvZGF5VVRDID0gbmV3IERhdGUoRGF0ZS5VVEMobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpLCBub3cuZ2V0RGF0ZSgpKSk7XG5cblx0Y29uc3QgdGh1cnNkYXlVVEMgPSBuZXcgRGF0ZSh0b2RheVVUQyk7XG5cdHRodXJzZGF5VVRDLnNldFVUQ0RhdGUodG9kYXlVVEMuZ2V0VVRDRGF0ZSgpICsgNCAtICh0b2RheVVUQy5nZXRVVENEYXkoKSB8fCA3KSk7XG5cblx0Y29uc3QgeWVhclN0YXJ0ID0gbmV3IERhdGUoRGF0ZS5VVEModGh1cnNkYXlVVEMuZ2V0VVRDRnVsbFllYXIoKSwgMCwgMSkpO1xuXG5cdGNvbnN0IHRpbWVEaWZmID0gdGh1cnNkYXlVVEMuZ2V0VGltZSgpIC0geWVhclN0YXJ0LmdldFRpbWUoKTtcblx0Y29uc3QgZGF5c0RpZmYgPSBNYXRoLmZsb29yKHRpbWVEaWZmIC8gODZfNDAwXzAwMCkgKyAxO1xuXHRjb25zdCBjdXJyZW50V2VlayA9IE1hdGguY2VpbChkYXlzRGlmZiAvIDcpO1xuXG5cdGxldCBwcmV2aW91c09kZFdlZWsgPSBjdXJyZW50V2VlayAlIDIgPT09IDEgPyBjdXJyZW50V2VlayAtIDIgOiBjdXJyZW50V2VlayAtIDM7XG5cblx0aWYgKHByZXZpb3VzT2RkV2VlayA8PSAwKSB7XG5cdFx0Y29uc3QgbGFzdFllYXJFbmQgPSBuZXcgRGF0ZShEYXRlLlVUQyh0aHVyc2RheVVUQy5nZXRVVENGdWxsWWVhcigpIC0gMSwgMTEsIDMxKSk7XG5cdFx0bGFzdFllYXJFbmQuc2V0VVRDRGF0ZShsYXN0WWVhckVuZC5nZXRVVENEYXRlKCkgKyA0IC0gKGxhc3RZZWFyRW5kLmdldFVUQ0RheSgpIHx8IDcpKTtcblx0XHRjb25zdCBsYXN0WWVhclN0YXJ0ID0gbmV3IERhdGUoRGF0ZS5VVEMobGFzdFllYXJFbmQuZ2V0VVRDRnVsbFllYXIoKSwgMCwgMSkpO1xuXHRcdGNvbnN0IGxhc3RZZWFyV2Vla3MgPSBNYXRoLmNlaWwoKGxhc3RZZWFyRW5kLmdldFRpbWUoKSAtIGxhc3RZZWFyU3RhcnQuZ2V0VGltZSgpKSAvIDYwNF84MDBfMDAwKTtcblx0XHRwcmV2aW91c09kZFdlZWsgPSBsYXN0WWVhcldlZWtzICUgMiA9PT0gMSA/IGxhc3RZZWFyV2Vla3MgOiBsYXN0WWVhcldlZWtzIC0gMTtcblx0fVxuXG5cdHJldHVybiBwcmV2aW91c09kZFdlZWs7XG59O1xuXG5jb25zdCBnZXRNb250aEZyb21XZWVrID0gKHllYXI6IG51bWJlciwgd2VlazogbnVtYmVyKSA9PiB7XG5cdGNvbnN0IGZpcnN0RGF5T2ZZZWFyID0gbmV3IERhdGUoeWVhciwgMCwgMSk7XG5cdGNvbnN0IGZpcnN0VGh1cnNkYXkgPSBuZXcgRGF0ZShmaXJzdERheU9mWWVhcik7XG5cdGZpcnN0VGh1cnNkYXkuc2V0RGF0ZShmaXJzdERheU9mWWVhci5nZXREYXRlKCkgKyAoKDQgLSBmaXJzdERheU9mWWVhci5nZXREYXkoKSArIDcpICUgNykpO1xuXHRjb25zdCB3ZWVrU3RhcnQgPSBuZXcgRGF0ZShmaXJzdFRodXJzZGF5KTtcblx0d2Vla1N0YXJ0LnNldERhdGUoZmlyc3RUaHVyc2RheS5nZXREYXRlKCkgKyAod2VlayAtIDEpICogNyAtIDMpO1xuXHRjb25zdCBtaWRkbGVPZldlZWsgPSBuZXcgRGF0ZSh3ZWVrU3RhcnQpO1xuXHRtaWRkbGVPZldlZWsuc2V0RGF0ZSh3ZWVrU3RhcnQuZ2V0RGF0ZSgpICsgMyk7XG5cdHJldHVybiBtaWRkbGVPZldlZWsuZ2V0TW9udGgoKSArIDE7XG59O1xuXG5leHBvcnQge2dldE1vbnRoRnJvbVdlZWssIGdldFByZXZpb3VzT2RkV2Vla307XG4iLCAiLypcbiAqIEBjb2Rpbmc6IFVURi04XG4gKiBAQXV0aG9yOiBBd0FqaWVcbiAqIEBEYXRlOiAyMDI1LTAzLTAxIDAxOjEzOjExXG4gKi9cbmltcG9ydCB7Z2V0TW9udGhGcm9tV2VlaywgZ2V0UHJldmlvdXNPZGRXZWVrfSBmcm9tICcuLi91dGlsL2RhdGVMb29rdXAnO1xuXG5pbnRlcmZhY2UgUmVzIHtcblx0cXVlcnk6IHtcblx0XHRwYWdlczoge1xuXHRcdFx0W2tleTogc3RyaW5nXToge1xuXHRcdFx0XHRleHRyYWN0Pzogc3RyaW5nO1xuXHRcdFx0fTtcblx0XHR9O1xuXHR9O1xufVxuY29uc3QgbGliU3VtbWFyeSA9IGFzeW5jICgpID0+IHtcblx0Y29uc3Qgc3VtbWFyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdW1tYXJ5Jyk7XG5cdGlmICghc3VtbWFyeS5sZW5ndGgpIHJldHVybjtcblxuXHRjb25zdCBrID0gZ2V0UHJldmlvdXNPZGRXZWVrKCk7XG5cdGNvbnN0IGQgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG5cdGNvbnN0IHRpdGxlU3RyID0gYOacieWFveaho+ahiOmmhjrmoaPmoYjppoblj4zlkajmiqUvJHtkfeW5tCR7Z2V0TW9udGhGcm9tV2VlayhkLCBrICsgMSl95pyIL+esrCR7a30tJHtrICsgMX3lkahgO1xuXHRjb25zdCB1cmwgPSBgL2FwaS9hcGkucGhwP2FjdGlvbj1xdWVyeSZwcm9wPWV4dHJhY3RzJmV4c2VjdGlvbmZvcm1hdD1wbGFpbiZleGNoYXJzPTE3NSZmb3JtYXQ9anNvbiZ0aXRsZXM9JHt0aXRsZVN0cn0vc3VtbWFyeWA7XG5cdHRyeSB7XG5cdFx0Y29uc3QgYSA9IGF3YWl0IGZldGNoKHVybCk7XG5cdFx0Y29uc3QgcmVzID0gKGF3YWl0IGEuanNvbigpKSBhcyBSZXM7XG5cdFx0Y29uc3QgcGFnZUtleXMgPSBPYmplY3Qua2V5cyhyZXMucXVlcnkucGFnZXMpO1xuXG5cdFx0Y29uc3Qgc3VtbWFyeVVybEh0bWwgPSBgPGEgaHJlZj1cImh0dHBzOi8veW91c2hvdS53aWtpL3dpa2kvJHt0aXRsZVN0cn1cIj7mm7TlpJrmtojmga/vvIzor7fmn6XpmIXmnKzmnJ/lj4zlkajmiqXor6bnu4bkv6Hmga88L2E+YDtcblx0XHRjb25zdCB7cGFnZXN9ID0gcmVzLnF1ZXJ5O1xuXHRcdGNvbnN0IFtwYWdlS2V5XSA9IHBhZ2VLZXlzO1xuXG5cdFx0Y29uc3QgcGFnZSA9IHBhZ2VLZXkgPyBwYWdlc1twYWdlS2V5XSA6IHVuZGVmaW5lZDtcblx0XHRsZXQgZXh0cmFjdDogc3RyaW5nO1xuXHRcdGlmIChwYWdlKSB7XG5cdFx0XHRleHRyYWN0ID1cblx0XHRcdFx0cGFnZSAmJiBwYWdlLmV4dHJhY3Rcblx0XHRcdFx0XHQ/IHBhZ2UuZXh0cmFjdC5yZXBsYWNlKCfmm7TlpJrmtojmga/vvIzor7fmn6XpmIXmnKzmnJ/lj4zlkajmiqXor6bnu4bkv6Hmga8nLCBzdW1tYXJ5VXJsSHRtbCkucmVwbGFjZSgv4oCmJC9nLCAnJylcblx0XHRcdFx0XHQ6ICcnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRleHRyYWN0ID0gJ+WKoOi9veWksei0pVFXUe+8jOWIt+aWsOivleivleWQpyc7XG5cdFx0fVxuXHRcdGZvciAoY29uc3QgZWwgb2Ygc3VtbWFyeSkge1xuXHRcdFx0ZWwuaW5uZXJIVE1MID0gZXh0cmFjdDtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcign6I635Y+W5pGY6KaB5pe25Ye66ZSZOicsIGVycm9yKTtcblx0XHRmb3IgKGNvbnN0IGVsIG9mIHN1bW1hcnkpIHtcblx0XHRcdGVsLmlubmVySFRNTCA9ICfliqDovb3lpLHotKVRV1HvvIzliLfmlrDor5Xor5XlkKcnO1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbGliU3VtbWFyeTtcbiIsICJpbXBvcnQgJy4vTWFpbnBhZ2UubGVzcyc7XG5cbmltcG9ydCB7bGliSGVhZGVyLCBzZWFyY2hJbmplY3Rpb259IGZyb20gJy4vbW9kdWxlcy90eXBlc2NyaXB0L2luZGV4LWhlYWRlcic7XG5pbXBvcnQgbGliU3VtbWFyeSBmcm9tICcuL21vZHVsZXMvdHlwZXNjcmlwdC9zdW1tYXJ5JztcblxubGliSGVhZGVyKCk7XG5zZWFyY2hJbmplY3Rpb24oKTtcbmxpYlN1bW1hcnkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBLElBQU1BLGdCQUFnQixTQUFVQyxPQUFlQyxLQUFhQyxVQUFrQkMsU0FBNEI7QUFDekcsTUFBSUMsWUFBMkI7QUFFL0IsUUFBTUMsU0FBVUMsaUJBQTJDO0FBQzFERixrQkFBQUEsWUFBY0U7QUFDZCxVQUFNQyxjQUFjRCxjQUFjRjtBQUNsQyxVQUFNSSxXQUFXQyxLQUFLQyxJQUFJSCxjQUFjTCxVQUFVLENBQUM7QUFDbkQsVUFBTVMsZ0JBQWdCRixLQUFLRyxNQUFNSixZQUFZUCxNQUFNRCxTQUFTQSxLQUFLO0FBRWpFRyxZQUFRVSxjQUFjRixjQUFjRyxTQUFTO0FBRTdDLFFBQUlOLFdBQVcsR0FBRztBQUNqQk8sNEJBQXNCVixNQUFNO0lB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QUEsR0FBQXFCO0FBQUEsVUFBQTtBQUFqQixhQUFBRCxXQUFBdEUsRUFBQSxHQUFBLEVBQUF1RSxTQUFBRCxXQUFBckUsRUFBQSxHQUFBQyxRQUEwQjtBQUFBLGdCQUFmc0UsS0FBQUQsT0FBQXBFO0FBQ1ZxRSxhQUFHMUQsWUFBWXVEO1FBQ2hCO01BQUEsU0FBQTlELEtBQUE7QUFBQStELG1CQUFBOUQsRUFBQUQsR0FBQTtNQUFBLFVBQUE7QUFBQStELG1CQUFBN0QsRUFBQTtNQUFBO0lBQ0QsU0FBU2dFLE9BQU87QUFDZkMsY0FBUUQsTUFBTSxZQUFZQSxLQUFLO0FBQUEsVUFBQUUsYUFBQTdFLDJCQUNkb0QsT0FBQSxHQUFBMEI7QUFBQSxVQUFBO0FBQWpCLGFBQUFELFdBQUEzRSxFQUFBLEdBQUEsRUFBQTRFLFNBQUFELFdBQUExRSxFQUFBLEdBQUFDLFFBQTBCO0FBQUEsZ0JBQWZzRSxLQUFBSSxPQUFBekU7QUFDVnFFLGFBQUcxRCxZQUFZO1FBQ2hCO01BQUEsU0FBQVAsS0FBQTtBQUFBb0UsbUJBQUFuRSxFQUFBRCxHQUFBO01BQUEsVUFBQTtBQUFBb0UsbUJBQUFsRSxFQUFBO01BQUE7SUFDRDtFQUNELENBQUE7QUFBQSxTQUFBLFNBcENNc0MsY0FBQTtBQUFBLFdBQUFDLEtBQUE2QixNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7QUFzQ04sSUFBT0Msa0JBQVFoQzs7QUNqRGZ0RCxVQUFVO0FBQ1ZpQixnQkFBZ0I7QUFDaEJxRSxnQkFBVzsiLAogICJuYW1lcyI6IFsiYW5pbWF0ZU51bWJlciIsICJzdGFydCIsICJlbmQiLCAiZHVyYXRpb24iLCAiZWxlbWVudCIsICJzdGFydFRpbWUiLCAidXBkYXRlIiwgImN1cnJlbnRUaW1lIiwgInRpbWVFbGFwc2VkIiwgInByb2dyZXNzIiwgIk1hdGgiLCAibWluIiwgImN1cnJlbnROdW1iZXIiLCAiZmxvb3IiLCAidGV4dENvbnRlbnQiLCAidG9TdHJpbmciLCAicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwgImFuaW1hdGVOdW1iZXJfZGVmYXVsdCIsICJsaWJIZWFkZXIiLCAiZWxlbWVudHMiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvckFsbCIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAidmFsdWUiLCAiTnVtYmVyIiwgInBhcnNlSW50IiwgInJlcGxhY2UiLCAiZXJyIiwgImUiLCAiZiIsICJzZWFyY2hJbmplY3Rpb24iLCAiU2VhcmNoRm9ybUhUTUwiLCAiU2VhcmNoIiwgInF1ZXJ5U2VsZWN0b3IiLCAiaW5uZXJIVE1MIiwgImdldFByZXZpb3VzT2RkV2VlayIsICJub3ciLCAiRGF0ZSIsICJ0b2RheVVUQyIsICJVVEMiLCAiZ2V0RnVsbFllYXIiLCAiZ2V0TW9udGgiLCAiZ2V0RGF0ZSIsICJ0aHVyc2RheVVUQyIsICJzZXRVVENEYXRlIiwgImdldFVUQ0RhdGUiLCAiZ2V0VVRDRGF5IiwgInllYXJTdGFydCIsICJnZXRVVENGdWxsWWVhciIsICJ0aW1lRGlmZiIsICJnZXRUaW1lIiwgImRheXNEaWZmIiwgImN1cnJlbnRXZWVrIiwgImNlaWwiLCAicHJldmlvdXNPZGRXZWVrIiwgImxhc3RZZWFyRW5kIiwgImxhc3RZZWFyU3RhcnQiLCAibGFzdFllYXJXZWVrcyIsICJnZXRNb250aEZyb21XZWVrIiwgInllYXIiLCAid2VlayIsICJmaXJzdERheU9mWWVhciIsICJmaXJzdFRodXJzZGF5IiwgInNldERhdGUiLCAiZ2V0RGF5IiwgIndlZWtTdGFydCIsICJtaWRkbGVPZldlZWsiLCAibGliU3VtbWFyeSIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInN1bW1hcnkiLCAibGVuZ3RoIiwgImsiLCAiZCIsICJ0aXRsZVN0ciIsICJjb25jYXQiLCAidXJsIiwgImEiLCAiZmV0Y2giLCAicmVzIiwgImpzb24iLCAicGFnZUtleXMiLCAiT2JqZWN0IiwgImtleXMiLCAicXVlcnkiLCAicGFnZXMiLCAic3VtbWFyeVVybEh0bWwiLCAicGFnZUtleSIsICJwYWdlIiwgImV4dHJhY3QiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAiZWwiLCAiZXJyb3IiLCAiY29uc29sZSIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJhcHBseSIsICJhcmd1bWVudHMiLCAic3VtbWFyeV9kZWZhdWx0Il0KfQo=
