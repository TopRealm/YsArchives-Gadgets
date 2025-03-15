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

// dist/Mainpage_JS/Mainpage.js
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
//! src/Mainpage_JS/modules/util/animateNumber.ts
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
//! src/Mainpage_JS/modules/index-header.ts
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
  const SearchFormHTML = '<form name="bodySearch0.048433246538" id="bodySearch0.048433246538" class="search-input bodySearch mw-inputbox-inline" action="/wiki/Special:%E6%90%9C%E7%B4%A2">\n	<input name="search" class="mw-searchInput mw-ui-input mw-ui-input-inline" size="50" id="bodySearchInput0.048433246538" dir="ltr" placeholder="搜索有兽档案馆" aria-label="搜索有兽档案馆" autocomplete="off">\n	<button type="submit" name="go" class="search-input-icon index-Inverted-color-filter"><i></i></button>\n	<i class="search-input-border"></i>\n	</form>';
  const Search = document.querySelector("#Search");
  if (Search) Search.innerHTML = SearchFormHTML;
};
//! src/Mainpage_JS/modules/util/dateLookup.ts
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
//! src/Mainpage_JS/modules/summary.ts
var libSummary = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* () {
    const summary = document.querySelectorAll(".summary");
    if (!summary.length) return;
    const k = getPreviousOddWeek();
    const d = (/* @__PURE__ */ new Date()).getFullYear();
    const titleStr = "有兽档案馆:档案馆双周报/".concat(d, "年").concat(getMonthFromWeek(d, k + 1), "月/第").concat(k, "-").concat(k + 1, "周");
    const url = "/api.php?action=query&prop=extracts&exsectionformat=plain&exchars=175&format=json&titles=".concat(titleStr, "/summary");
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
//! src/Mainpage_JS/Mainpage.ts
_asyncToGenerator(function* () {
  libHeader();
  searchInjection();
  yield summary_default();
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL01haW5wYWdlX0pTL21vZHVsZXMvdXRpbC9hbmltYXRlTnVtYmVyLnRzIiwgIi4uLy4uL3NyYy9NYWlucGFnZV9KUy9tb2R1bGVzL2luZGV4LWhlYWRlci50cyIsICIuLi8uLi9zcmMvTWFpbnBhZ2VfSlMvbW9kdWxlcy91dGlsL2RhdGVMb29rdXAudHMiLCAiLi4vLi4vc3JjL01haW5wYWdlX0pTL21vZHVsZXMvc3VtbWFyeS50cyIsICIuLi8uLi9zcmMvTWFpbnBhZ2VfSlMvTWFpbnBhZ2UudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qXG4gKiBAY29kaW5nOiBVVEYtOFxuICogQEF1dGhvcjogQXdBamllXG4gKiBARGF0ZTogMjAyNS0wMy0wMSAwMTowMTo1NVxuICovXG5jb25zdCBhbmltYXRlTnVtYmVyID0gZnVuY3Rpb24gKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyLCBlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuXHRsZXQgc3RhcnRUaW1lOiBudW1iZXIgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdCB1cGRhdGUgPSAoY3VycmVudFRpbWU6IERPTUhpZ2hSZXNUaW1lU3RhbXApOiB2b2lkID0+IHtcblx0XHRzdGFydFRpbWUgfHw9IGN1cnJlbnRUaW1lO1xuXHRcdGNvbnN0IHRpbWVFbGFwc2VkID0gY3VycmVudFRpbWUgLSBzdGFydFRpbWU7XG5cdFx0Y29uc3QgcHJvZ3Jlc3MgPSBNYXRoLm1pbih0aW1lRWxhcHNlZCAvIGR1cmF0aW9uLCAxKTtcblx0XHRjb25zdCBjdXJyZW50TnVtYmVyID0gTWF0aC5mbG9vcihwcm9ncmVzcyAqIChlbmQgLSBzdGFydCkgKyBzdGFydCk7XG5cblx0XHRlbGVtZW50LnRleHRDb250ZW50ID0gY3VycmVudE51bWJlci50b1N0cmluZygpO1xuXG5cdFx0aWYgKHByb2dyZXNzIDwgMSkge1xuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XG5cdFx0fVxuXHR9O1xuXG5cdHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYW5pbWF0ZU51bWJlcjtcbiIsICJpbXBvcnQgYW5pbWF0ZU51bWJlciBmcm9tICcuL3V0aWwvYW5pbWF0ZU51bWJlcic7XG5jb25zdCBsaWJIZWFkZXIgPSAoKSA9PiB7XG5cdGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnZhbHVlJyk7XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG5cdFx0Y29uc3Qgc3RhcnQgPSAwO1xuXHRcdGNvbnN0IGVuZCA9IE51bWJlci5wYXJzZUludCgoZWxlbWVudC50ZXh0Q29udGVudCB8fCAnMCcpLnJlcGxhY2UoL1suLC8jISQlXiYqOzp7fT1cXC1fYH4oKV0vZywgJycpIHx8ICcwJywgMTApO1xuXHRcdGNvbnN0IGR1cmF0aW9uID0gMTUwMDtcblx0XHRhbmltYXRlTnVtYmVyKHN0YXJ0LCBlbmQsIGR1cmF0aW9uLCBlbGVtZW50IGFzIEhUTUxFbGVtZW50KTtcblx0fVxufTtcblxuY29uc3Qgc2VhcmNoSW5qZWN0aW9uID0gKCkgPT4ge1xuXHRjb25zdCBTZWFyY2hGb3JtSFRNTCA9IGA8Zm9ybSBuYW1lPVwiYm9keVNlYXJjaDAuMDQ4NDMzMjQ2NTM4XCIgaWQ9XCJib2R5U2VhcmNoMC4wNDg0MzMyNDY1MzhcIiBjbGFzcz1cInNlYXJjaC1pbnB1dCBib2R5U2VhcmNoIG13LWlucHV0Ym94LWlubGluZVwiIGFjdGlvbj1cIi93aWtpL1NwZWNpYWw6JUU2JTkwJTlDJUU3JUI0JUEyXCI+XG5cdDxpbnB1dCBuYW1lPVwic2VhcmNoXCIgY2xhc3M9XCJtdy1zZWFyY2hJbnB1dCBtdy11aS1pbnB1dCBtdy11aS1pbnB1dC1pbmxpbmVcIiBzaXplPVwiNTBcIiBpZD1cImJvZHlTZWFyY2hJbnB1dDAuMDQ4NDMzMjQ2NTM4XCIgZGlyPVwibHRyXCIgcGxhY2Vob2xkZXI9XCLmkJzntKLmnInlhb3moaPmoYjppoZcIiBhcmlhLWxhYmVsPVwi5pCc57Si5pyJ5YW95qGj5qGI6aaGXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCI+XG5cdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG5hbWU9XCJnb1wiIGNsYXNzPVwic2VhcmNoLWlucHV0LWljb24gaW5kZXgtSW52ZXJ0ZWQtY29sb3ItZmlsdGVyXCI+PGk+PC9pPjwvYnV0dG9uPlxuXHQ8aSBjbGFzcz1cInNlYXJjaC1pbnB1dC1ib3JkZXJcIj48L2k+XG5cdDwvZm9ybT5gO1xuXHRjb25zdCBTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjU2VhcmNoJyk7XG5cdGlmIChTZWFyY2gpIFNlYXJjaC5pbm5lckhUTUwgPSBTZWFyY2hGb3JtSFRNTDtcbn07XG5cbmV4cG9ydCB7bGliSGVhZGVyLCBzZWFyY2hJbmplY3Rpb259O1xuIiwgIi8qXG4gKiBAY29kaW5nOiBVVEYtOFxuICogQEF1dGhvcjogQXdBamllXG4gKiBARGF0ZTogMjAyNS0wMy0wMSAwMToxNjoyMFxuICovXG5jb25zdCBnZXRQcmV2aW91c09kZFdlZWsgPSAoKSA9PiB7XG5cdGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG5cdGNvbnN0IHRvZGF5VVRDID0gbmV3IERhdGUoRGF0ZS5VVEMobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpLCBub3cuZ2V0RGF0ZSgpKSk7XG5cblx0Y29uc3QgdGh1cnNkYXlVVEMgPSBuZXcgRGF0ZSh0b2RheVVUQyk7XG5cdHRodXJzZGF5VVRDLnNldFVUQ0RhdGUodG9kYXlVVEMuZ2V0VVRDRGF0ZSgpICsgNCAtICh0b2RheVVUQy5nZXRVVENEYXkoKSB8fCA3KSk7XG5cblx0Y29uc3QgeWVhclN0YXJ0ID0gbmV3IERhdGUoRGF0ZS5VVEModGh1cnNkYXlVVEMuZ2V0VVRDRnVsbFllYXIoKSwgMCwgMSkpO1xuXG5cdGNvbnN0IHRpbWVEaWZmID0gdGh1cnNkYXlVVEMuZ2V0VGltZSgpIC0geWVhclN0YXJ0LmdldFRpbWUoKTtcblx0Y29uc3QgZGF5c0RpZmYgPSBNYXRoLmZsb29yKHRpbWVEaWZmIC8gODZfNDAwXzAwMCkgKyAxO1xuXHRjb25zdCBjdXJyZW50V2VlayA9IE1hdGguY2VpbChkYXlzRGlmZiAvIDcpO1xuXG5cdGxldCBwcmV2aW91c09kZFdlZWsgPSBjdXJyZW50V2VlayAlIDIgPT09IDEgPyBjdXJyZW50V2VlayAtIDIgOiBjdXJyZW50V2VlayAtIDM7XG5cblx0aWYgKHByZXZpb3VzT2RkV2VlayA8PSAwKSB7XG5cdFx0Y29uc3QgbGFzdFllYXJFbmQgPSBuZXcgRGF0ZShEYXRlLlVUQyh0aHVyc2RheVVUQy5nZXRVVENGdWxsWWVhcigpIC0gMSwgMTEsIDMxKSk7XG5cdFx0bGFzdFllYXJFbmQuc2V0VVRDRGF0ZShsYXN0WWVhckVuZC5nZXRVVENEYXRlKCkgKyA0IC0gKGxhc3RZZWFyRW5kLmdldFVUQ0RheSgpIHx8IDcpKTtcblx0XHRjb25zdCBsYXN0WWVhclN0YXJ0ID0gbmV3IERhdGUoRGF0ZS5VVEMobGFzdFllYXJFbmQuZ2V0VVRDRnVsbFllYXIoKSwgMCwgMSkpO1xuXHRcdGNvbnN0IGxhc3RZZWFyV2Vla3MgPSBNYXRoLmNlaWwoKGxhc3RZZWFyRW5kLmdldFRpbWUoKSAtIGxhc3RZZWFyU3RhcnQuZ2V0VGltZSgpKSAvIDYwNF84MDBfMDAwKTtcblx0XHRwcmV2aW91c09kZFdlZWsgPSBsYXN0WWVhcldlZWtzICUgMiA9PT0gMSA/IGxhc3RZZWFyV2Vla3MgOiBsYXN0WWVhcldlZWtzIC0gMTtcblx0fVxuXG5cdHJldHVybiBwcmV2aW91c09kZFdlZWs7XG59O1xuXG5jb25zdCBnZXRNb250aEZyb21XZWVrID0gKHllYXI6IG51bWJlciwgd2VlazogbnVtYmVyKSA9PiB7XG5cdGNvbnN0IGZpcnN0RGF5T2ZZZWFyID0gbmV3IERhdGUoeWVhciwgMCwgMSk7XG5cdGNvbnN0IGZpcnN0VGh1cnNkYXkgPSBuZXcgRGF0ZShmaXJzdERheU9mWWVhcik7XG5cdGZpcnN0VGh1cnNkYXkuc2V0RGF0ZShmaXJzdERheU9mWWVhci5nZXREYXRlKCkgKyAoKDQgLSBmaXJzdERheU9mWWVhci5nZXREYXkoKSArIDcpICUgNykpO1xuXHRjb25zdCB3ZWVrU3RhcnQgPSBuZXcgRGF0ZShmaXJzdFRodXJzZGF5KTtcblx0d2Vla1N0YXJ0LnNldERhdGUoZmlyc3RUaHVyc2RheS5nZXREYXRlKCkgKyAod2VlayAtIDEpICogNyAtIDMpO1xuXHRjb25zdCBtaWRkbGVPZldlZWsgPSBuZXcgRGF0ZSh3ZWVrU3RhcnQpO1xuXHRtaWRkbGVPZldlZWsuc2V0RGF0ZSh3ZWVrU3RhcnQuZ2V0RGF0ZSgpICsgMyk7XG5cdHJldHVybiBtaWRkbGVPZldlZWsuZ2V0TW9udGgoKSArIDE7XG59O1xuXG5leHBvcnQge2dldE1vbnRoRnJvbVdlZWssIGdldFByZXZpb3VzT2RkV2Vla307XG4iLCAiLypcbiAqIEBjb2Rpbmc6IFVURi04XG4gKiBAQXV0aG9yOiBBd0FqaWVcbiAqIEBEYXRlOiAyMDI1LTAzLTAxIDAxOjEzOjExXG4gKi9cbmltcG9ydCB7Z2V0TW9udGhGcm9tV2VlaywgZ2V0UHJldmlvdXNPZGRXZWVrfSBmcm9tICcuL3V0aWwvZGF0ZUxvb2t1cCc7XG5cbmludGVyZmFjZSBSZXMge1xuXHRxdWVyeToge1xuXHRcdHBhZ2VzOiB7XG5cdFx0XHRba2V5OiBzdHJpbmddOiB7XG5cdFx0XHRcdGV4dHJhY3Q/OiBzdHJpbmc7XG5cdFx0XHR9O1xuXHRcdH07XG5cdH07XG59XG5jb25zdCBsaWJTdW1tYXJ5ID0gYXN5bmMgKCkgPT4ge1xuXHRjb25zdCBzdW1tYXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN1bW1hcnknKTtcblx0aWYgKCFzdW1tYXJ5Lmxlbmd0aCkgcmV0dXJuO1xuXG5cdGNvbnN0IGsgPSBnZXRQcmV2aW91c09kZFdlZWsoKTtcblx0Y29uc3QgZCA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcblx0Y29uc3QgdGl0bGVTdHIgPSBg5pyJ5YW95qGj5qGI6aaGOuaho+ahiOmmhuWPjOWRqOaKpS8ke2R95bm0JHtnZXRNb250aEZyb21XZWVrKGQsIGsgKyAxKX3mnIgv56ysJHtrfS0ke2sgKyAxfeWRqGA7XG5cdGNvbnN0IHVybCA9IGAvYXBpLnBocD9hY3Rpb249cXVlcnkmcHJvcD1leHRyYWN0cyZleHNlY3Rpb25mb3JtYXQ9cGxhaW4mZXhjaGFycz0xNzUmZm9ybWF0PWpzb24mdGl0bGVzPSR7dGl0bGVTdHJ9L3N1bW1hcnlgO1xuXHR0cnkge1xuXHRcdGNvbnN0IGEgPSBhd2FpdCBmZXRjaCh1cmwpO1xuXHRcdGNvbnN0IHJlcyA9IChhd2FpdCBhLmpzb24oKSkgYXMgUmVzO1xuXHRcdGNvbnN0IHBhZ2VLZXlzID0gT2JqZWN0LmtleXMocmVzLnF1ZXJ5LnBhZ2VzKTtcblxuXHRcdGNvbnN0IHN1bW1hcnlVcmxIdG1sID0gYDxhIGhyZWY9XCJodHRwczovL3lvdXNob3Uud2lraS93aWtpLyR7dGl0bGVTdHJ9XCI+5pu05aSa5raI5oGv77yM6K+35p+l6ZiF5pys5pyf5Y+M5ZGo5oql6K+m57uG5L+h5oGvPC9hPmA7XG5cdFx0Y29uc3Qge3BhZ2VzfSA9IHJlcy5xdWVyeTtcblx0XHRjb25zdCBbcGFnZUtleV0gPSBwYWdlS2V5cztcblxuXHRcdGNvbnN0IHBhZ2UgPSBwYWdlS2V5ID8gcGFnZXNbcGFnZUtleV0gOiB1bmRlZmluZWQ7XG5cdFx0bGV0IGV4dHJhY3Q6IHN0cmluZztcblx0XHRpZiAocGFnZSkge1xuXHRcdFx0ZXh0cmFjdCA9XG5cdFx0XHRcdHBhZ2UgJiYgcGFnZS5leHRyYWN0XG5cdFx0XHRcdFx0PyBwYWdlLmV4dHJhY3QucmVwbGFjZSgn5pu05aSa5raI5oGv77yM6K+35p+l6ZiF5pys5pyf5Y+M5ZGo5oql6K+m57uG5L+h5oGvJywgc3VtbWFyeVVybEh0bWwpLnJlcGxhY2UoL+KApiQvZywgJycpXG5cdFx0XHRcdFx0OiAnJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZXh0cmFjdCA9ICfliqDovb3lpLHotKVRV1HvvIzliLfmlrDor5Xor5XlkKcnO1xuXHRcdH1cblx0XHRmb3IgKGNvbnN0IGVsIG9mIHN1bW1hcnkpIHtcblx0XHRcdGVsLmlubmVySFRNTCA9IGV4dHJhY3Q7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ+iOt+WPluaRmOimgeaXtuWHuumUmTonLCBlcnJvcik7XG5cdFx0Zm9yIChjb25zdCBlbCBvZiBzdW1tYXJ5KSB7XG5cdFx0XHRlbC5pbm5lckhUTUwgPSAn5Yqg6L295aSx6LSlUVdR77yM5Yi35paw6K+V6K+V5ZCnJztcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxpYlN1bW1hcnk7XG4iLCAiaW1wb3J0IHtsaWJIZWFkZXIsIHNlYXJjaEluamVjdGlvbn0gZnJvbSAnLi9tb2R1bGVzL2luZGV4LWhlYWRlcic7XG5pbXBvcnQgbGliU3VtbWFyeSBmcm9tICcuL21vZHVsZXMvc3VtbWFyeSc7XG5cbihhc3luYyAoKSA9PiB7XG5cdGxpYkhlYWRlcigpO1xuXHRzZWFyY2hJbmplY3Rpb24oKTtcblx0YXdhaXQgbGliU3VtbWFyeSgpO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBLElBQU1BLGdCQUFnQixTQUFVQyxPQUFlQyxLQUFhQyxVQUFrQkMsU0FBNEI7QUFDekcsTUFBSUMsWUFBMkI7QUFFL0IsUUFBTUMsU0FBVUMsaUJBQTJDO0FBQzFERixrQkFBQUEsWUFBY0U7QUFDZCxVQUFNQyxjQUFjRCxjQUFjRjtBQUNsQyxVQUFNSSxXQUFXQyxLQUFLQyxJQUFJSCxjQUFjTCxVQUFVLENBQUM7QUFDbkQsVUFBTVMsZ0JBQWdCRixLQUFLRyxNQUFNSixZQUFZUCxNQUFNRCxTQUFTQSxLQUFLO0FBRWpFRyxZQUFRVSxjQUFjRixjQUFjRyxTQUFTO0FBRTdDLFFBQUlOLFdB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O0FBQUEsVUFBQUMsYUFBQXhFLDJCQUNpQm9ELE9BQUEsR0FBQXFCO0FBQUEsVUFBQTtBQUFqQixhQUFBRCxXQUFBdEUsRUFBQSxHQUFBLEVBQUF1RSxTQUFBRCxXQUFBckUsRUFBQSxHQUFBQyxRQUEwQjtBQUFBLGdCQUFmc0UsS0FBQUQsT0FBQXBFO0FBQ1ZxRSxhQUFHMUQsWUFBWXVEO1FBQ2hCO01BQUEsU0FBQTlELEtBQUE7QUFBQStELG1CQUFBOUQsRUFBQUQsR0FBQTtNQUFBLFVBQUE7QUFBQStELG1CQUFBN0QsRUFBQTtNQUFBO0lBQ0QsU0FBU2dFLE9BQU87QUFDZkMsY0FBUUQsTUFBTSxZQUFZQSxLQUFLO0FBQUEsVUFBQUUsYUFBQTdFLDJCQUNkb0QsT0FBQSxHQUFBMEI7QUFBQSxVQUFBO0FBQWpCLGFBQUFELFdBQUEzRSxFQUFBLEdBQUEsRUFBQTRFLFNBQUFELFdBQUExRSxFQUFBLEdBQUFDLFFBQTBCO0FBQUEsZ0JBQWZzRSxLQUFBSSxPQUFBekU7QUFDVnFFLGFBQUcxRCxZQUFZO1FBQ2hCO01BQUEsU0FBQVAsS0FBQTtBQUFBb0UsbUJBQUFuRSxFQUFBRCxHQUFBO01BQUEsVUFBQTtBQUFBb0UsbUJBQUFsRSxFQUFBO01BQUE7SUFDRDtFQUNELENBQUE7QUFBQSxTQUFBLFNBcENNc0MsY0FBQTtBQUFBLFdBQUFDLEtBQUE2QixNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7QUFzQ04sSUFBT0Msa0JBQVFoQzs7a0JDbkRkLGFBQVk7QUFDWnRELFlBQVU7QUFDVmlCLGtCQUFnQjtBQUNoQixRQUFNcUUsZ0JBQVc7QUFDbEIsQ0FBQSxFQUFHOyIsCiAgIm5hbWVzIjogWyJhbmltYXRlTnVtYmVyIiwgInN0YXJ0IiwgImVuZCIsICJkdXJhdGlvbiIsICJlbGVtZW50IiwgInN0YXJ0VGltZSIsICJ1cGRhdGUiLCAiY3VycmVudFRpbWUiLCAidGltZUVsYXBzZWQiLCAicHJvZ3Jlc3MiLCAiTWF0aCIsICJtaW4iLCAiY3VycmVudE51bWJlciIsICJmbG9vciIsICJ0ZXh0Q29udGVudCIsICJ0b1N0cmluZyIsICJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCAiYW5pbWF0ZU51bWJlcl9kZWZhdWx0IiwgImxpYkhlYWRlciIsICJlbGVtZW50cyIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJ2YWx1ZSIsICJOdW1iZXIiLCAicGFyc2VJbnQiLCAicmVwbGFjZSIsICJlcnIiLCAiZSIsICJmIiwgInNlYXJjaEluamVjdGlvbiIsICJTZWFyY2hGb3JtSFRNTCIsICJTZWFyY2giLCAicXVlcnlTZWxlY3RvciIsICJpbm5lckhUTUwiLCAiZ2V0UHJldmlvdXNPZGRXZWVrIiwgIm5vdyIsICJEYXRlIiwgInRvZGF5VVRDIiwgIlVUQyIsICJnZXRGdWxsWWVhciIsICJnZXRNb250aCIsICJnZXREYXRlIiwgInRodXJzZGF5VVRDIiwgInNldFVUQ0RhdGUiLCAiZ2V0VVRDRGF0ZSIsICJnZXRVVENEYXkiLCAieWVhclN0YXJ0IiwgImdldFVUQ0Z1bGxZZWFyIiwgInRpbWVEaWZmIiwgImdldFRpbWUiLCAiZGF5c0RpZmYiLCAiY3VycmVudFdlZWsiLCAiY2VpbCIsICJwcmV2aW91c09kZFdlZWsiLCAibGFzdFllYXJFbmQiLCAibGFzdFllYXJTdGFydCIsICJsYXN0WWVhcldlZWtzIiwgImdldE1vbnRoRnJvbVdlZWsiLCAieWVhciIsICJ3ZWVrIiwgImZpcnN0RGF5T2ZZZWFyIiwgImZpcnN0VGh1cnNkYXkiLCAic2V0RGF0ZSIsICJnZXREYXkiLCAid2Vla1N0YXJ0IiwgIm1pZGRsZU9mV2VlayIsICJsaWJTdW1tYXJ5IiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAic3VtbWFyeSIsICJsZW5ndGgiLCAiayIsICJkIiwgInRpdGxlU3RyIiwgImNvbmNhdCIsICJ1cmwiLCAiYSIsICJmZXRjaCIsICJyZXMiLCAianNvbiIsICJwYWdlS2V5cyIsICJPYmplY3QiLCAia2V5cyIsICJxdWVyeSIsICJwYWdlcyIsICJzdW1tYXJ5VXJsSHRtbCIsICJwYWdlS2V5IiwgInBhZ2UiLCAiZXh0cmFjdCIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJlbCIsICJlcnJvciIsICJjb25zb2xlIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJzdW1tYXJ5X2RlZmF1bHQiXQp9Cg==
