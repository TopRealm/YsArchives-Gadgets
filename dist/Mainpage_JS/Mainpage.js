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
    const url = "/api.php?action=query&prop=extracts&exsectionformat=plain&exchars=1200&format=json&titles=".concat(titleStr, "/summary");
    try {
      const a = yield fetch(url);
      const res = yield a.json();
      const pageKeys = Object.keys(res.query.pages);
      const summaryUrlHtml = '<p>更多消息，<a href="https://youshou.wiki/wiki/'.concat(titleStr, '">请查阅本期双周报详细信息</a></p>');
      const {
        pages
      } = res.query;
      const [pageKey] = pageKeys;
      const page = pageKey ? pages[pageKey] : void 0;
      let extract;
      if (page) {
        const allPTag = page.extract ? page.extract.match(/<p>[\s\S]*?<\/p>/g) : [];
        const matchCharacters = allPTag && allPTag.length ? allPTag.at(-1) : "";
        extract = page && page.extract ? page.extract.replace(matchCharacters || "", summaryUrlHtml).replace(/…$/g, "") : "";
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01haW5wYWdlX0pTL21vZHVsZXMvdXRpbC9hbmltYXRlTnVtYmVyLnRzIiwgInNyYy9NYWlucGFnZV9KUy9tb2R1bGVzL2luZGV4LWhlYWRlci50cyIsICJzcmMvTWFpbnBhZ2VfSlMvbW9kdWxlcy91dGlsL2RhdGVMb29rdXAudHMiLCAic3JjL01haW5wYWdlX0pTL21vZHVsZXMvc3VtbWFyeS50cyIsICJzcmMvTWFpbnBhZ2VfSlMvTWFpbnBhZ2UudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qXG4gKiBAY29kaW5nOiBVVEYtOFxuICogQEF1dGhvcjogQXdBamllXG4gKiBARGF0ZTogMjAyNS0wMy0wMSAwMTowMTo1NVxuICovXG5jb25zdCBhbmltYXRlTnVtYmVyID0gZnVuY3Rpb24gKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyLCBlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuXHRsZXQgc3RhcnRUaW1lOiBudW1iZXIgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdCB1cGRhdGUgPSAoY3VycmVudFRpbWU6IERPTUhpZ2hSZXNUaW1lU3RhbXApOiB2b2lkID0+IHtcblx0XHRzdGFydFRpbWUgfHw9IGN1cnJlbnRUaW1lO1xuXHRcdGNvbnN0IHRpbWVFbGFwc2VkID0gY3VycmVudFRpbWUgLSBzdGFydFRpbWU7XG5cdFx0Y29uc3QgcHJvZ3Jlc3MgPSBNYXRoLm1pbih0aW1lRWxhcHNlZCAvIGR1cmF0aW9uLCAxKTtcblx0XHRjb25zdCBjdXJyZW50TnVtYmVyID0gTWF0aC5mbG9vcihwcm9ncmVzcyAqIChlbmQgLSBzdGFydCkgKyBzdGFydCk7XG5cblx0XHRlbGVtZW50LnRleHRDb250ZW50ID0gY3VycmVudE51bWJlci50b1N0cmluZygpO1xuXG5cdFx0aWYgKHByb2dyZXNzIDwgMSkge1xuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XG5cdFx0fVxuXHR9O1xuXG5cdHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYW5pbWF0ZU51bWJlcjtcbiIsICJpbXBvcnQgYW5pbWF0ZU51bWJlciBmcm9tICcuL3V0aWwvYW5pbWF0ZU51bWJlcic7XG5jb25zdCBsaWJIZWFkZXIgPSAoKSA9PiB7XG5cdGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnZhbHVlJyk7XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG5cdFx0Y29uc3Qgc3RhcnQgPSAwO1xuXHRcdGNvbnN0IGVuZCA9IE51bWJlci5wYXJzZUludCgoZWxlbWVudC50ZXh0Q29udGVudCB8fCAnMCcpLnJlcGxhY2UoL1suLC8jISQlXiYqOzp7fT1cXC1fYH4oKV0vZywgJycpIHx8ICcwJywgMTApO1xuXHRcdGNvbnN0IGR1cmF0aW9uID0gMTUwMDtcblx0XHRhbmltYXRlTnVtYmVyKHN0YXJ0LCBlbmQsIGR1cmF0aW9uLCBlbGVtZW50IGFzIEhUTUxFbGVtZW50KTtcblx0fVxufTtcblxuY29uc3Qgc2VhcmNoSW5qZWN0aW9uID0gKCkgPT4ge1xuXHRjb25zdCBTZWFyY2hGb3JtSFRNTCA9IGA8Zm9ybSBuYW1lPVwiYm9keVNlYXJjaDAuMDQ4NDMzMjQ2NTM4XCIgaWQ9XCJib2R5U2VhcmNoMC4wNDg0MzMyNDY1MzhcIiBjbGFzcz1cInNlYXJjaC1pbnB1dCBib2R5U2VhcmNoIG13LWlucHV0Ym94LWlubGluZVwiIGFjdGlvbj1cIi93aWtpL1NwZWNpYWw6JUU2JTkwJTlDJUU3JUI0JUEyXCI+XG5cdDxpbnB1dCBuYW1lPVwic2VhcmNoXCIgY2xhc3M9XCJtdy1zZWFyY2hJbnB1dCBtdy11aS1pbnB1dCBtdy11aS1pbnB1dC1pbmxpbmVcIiBzaXplPVwiNTBcIiBpZD1cImJvZHlTZWFyY2hJbnB1dDAuMDQ4NDMzMjQ2NTM4XCIgZGlyPVwibHRyXCIgcGxhY2Vob2xkZXI9XCLmkJzntKLmnInlhb3moaPmoYjppoZcIiBhcmlhLWxhYmVsPVwi5pCc57Si5pyJ5YW95qGj5qGI6aaGXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCI+XG5cdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG5hbWU9XCJnb1wiIGNsYXNzPVwic2VhcmNoLWlucHV0LWljb24gaW5kZXgtSW52ZXJ0ZWQtY29sb3ItZmlsdGVyXCI+PGk+PC9pPjwvYnV0dG9uPlxuXHQ8aSBjbGFzcz1cInNlYXJjaC1pbnB1dC1ib3JkZXJcIj48L2k+XG5cdDwvZm9ybT5gO1xuXHRjb25zdCBTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjU2VhcmNoJyk7XG5cdGlmIChTZWFyY2gpIFNlYXJjaC5pbm5lckhUTUwgPSBTZWFyY2hGb3JtSFRNTDtcbn07XG5cbmV4cG9ydCB7bGliSGVhZGVyLCBzZWFyY2hJbmplY3Rpb259O1xuIiwgIi8qXG4gKiBAY29kaW5nOiBVVEYtOFxuICogQEF1dGhvcjogQXdBamllXG4gKiBARGF0ZTogMjAyNS0wMy0wMSAwMToxNjoyMFxuICovXG5jb25zdCBnZXRQcmV2aW91c09kZFdlZWsgPSAoKSA9PiB7XG5cdGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG5cdGNvbnN0IHRvZGF5VVRDID0gbmV3IERhdGUoRGF0ZS5VVEMobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpLCBub3cuZ2V0RGF0ZSgpKSk7XG5cblx0Y29uc3QgdGh1cnNkYXlVVEMgPSBuZXcgRGF0ZSh0b2RheVVUQyk7XG5cdHRodXJzZGF5VVRDLnNldFVUQ0RhdGUodG9kYXlVVEMuZ2V0VVRDRGF0ZSgpICsgNCAtICh0b2RheVVUQy5nZXRVVENEYXkoKSB8fCA3KSk7XG5cblx0Y29uc3QgeWVhclN0YXJ0ID0gbmV3IERhdGUoRGF0ZS5VVEModGh1cnNkYXlVVEMuZ2V0VVRDRnVsbFllYXIoKSwgMCwgMSkpO1xuXG5cdGNvbnN0IHRpbWVEaWZmID0gdGh1cnNkYXlVVEMuZ2V0VGltZSgpIC0geWVhclN0YXJ0LmdldFRpbWUoKTtcblx0Y29uc3QgZGF5c0RpZmYgPSBNYXRoLmZsb29yKHRpbWVEaWZmIC8gODZfNDAwXzAwMCkgKyAxO1xuXHRjb25zdCBjdXJyZW50V2VlayA9IE1hdGguY2VpbChkYXlzRGlmZiAvIDcpO1xuXG5cdGxldCBwcmV2aW91c09kZFdlZWsgPSBjdXJyZW50V2VlayAlIDIgPT09IDEgPyBjdXJyZW50V2VlayAtIDIgOiBjdXJyZW50V2VlayAtIDM7XG5cblx0aWYgKHByZXZpb3VzT2RkV2VlayA8PSAwKSB7XG5cdFx0Y29uc3QgbGFzdFllYXJFbmQgPSBuZXcgRGF0ZShEYXRlLlVUQyh0aHVyc2RheVVUQy5nZXRVVENGdWxsWWVhcigpIC0gMSwgMTEsIDMxKSk7XG5cdFx0bGFzdFllYXJFbmQuc2V0VVRDRGF0ZShsYXN0WWVhckVuZC5nZXRVVENEYXRlKCkgKyA0IC0gKGxhc3RZZWFyRW5kLmdldFVUQ0RheSgpIHx8IDcpKTtcblx0XHRjb25zdCBsYXN0WWVhclN0YXJ0ID0gbmV3IERhdGUoRGF0ZS5VVEMobGFzdFllYXJFbmQuZ2V0VVRDRnVsbFllYXIoKSwgMCwgMSkpO1xuXHRcdGNvbnN0IGxhc3RZZWFyV2Vla3MgPSBNYXRoLmNlaWwoKGxhc3RZZWFyRW5kLmdldFRpbWUoKSAtIGxhc3RZZWFyU3RhcnQuZ2V0VGltZSgpKSAvIDYwNF84MDBfMDAwKTtcblx0XHRwcmV2aW91c09kZFdlZWsgPSBsYXN0WWVhcldlZWtzICUgMiA9PT0gMSA/IGxhc3RZZWFyV2Vla3MgOiBsYXN0WWVhcldlZWtzIC0gMTtcblx0fVxuXG5cdHJldHVybiBwcmV2aW91c09kZFdlZWs7XG59O1xuXG5jb25zdCBnZXRNb250aEZyb21XZWVrID0gKHllYXI6IG51bWJlciwgd2VlazogbnVtYmVyKSA9PiB7XG5cdGNvbnN0IGZpcnN0RGF5T2ZZZWFyID0gbmV3IERhdGUoeWVhciwgMCwgMSk7XG5cdGNvbnN0IGZpcnN0VGh1cnNkYXkgPSBuZXcgRGF0ZShmaXJzdERheU9mWWVhcik7XG5cdGZpcnN0VGh1cnNkYXkuc2V0RGF0ZShmaXJzdERheU9mWWVhci5nZXREYXRlKCkgKyAoKDQgLSBmaXJzdERheU9mWWVhci5nZXREYXkoKSArIDcpICUgNykpO1xuXHRjb25zdCB3ZWVrU3RhcnQgPSBuZXcgRGF0ZShmaXJzdFRodXJzZGF5KTtcblx0d2Vla1N0YXJ0LnNldERhdGUoZmlyc3RUaHVyc2RheS5nZXREYXRlKCkgKyAod2VlayAtIDEpICogNyAtIDMpO1xuXHRjb25zdCBtaWRkbGVPZldlZWsgPSBuZXcgRGF0ZSh3ZWVrU3RhcnQpO1xuXHRtaWRkbGVPZldlZWsuc2V0RGF0ZSh3ZWVrU3RhcnQuZ2V0RGF0ZSgpICsgMyk7XG5cdHJldHVybiBtaWRkbGVPZldlZWsuZ2V0TW9udGgoKSArIDE7XG59O1xuXG5leHBvcnQge2dldE1vbnRoRnJvbVdlZWssIGdldFByZXZpb3VzT2RkV2Vla307XG4iLCAiLypcbiAqIEBjb2Rpbmc6IFVURi04XG4gKiBAQXV0aG9yOiBBd0FqaWVcbiAqIEBEYXRlOiAyMDI1LTAzLTAxIDAxOjEzOjExXG4gKi9cbmltcG9ydCB7Z2V0TW9udGhGcm9tV2VlaywgZ2V0UHJldmlvdXNPZGRXZWVrfSBmcm9tICcuL3V0aWwvZGF0ZUxvb2t1cCc7XG5cbmludGVyZmFjZSBSZXMge1xuXHRxdWVyeToge1xuXHRcdHBhZ2VzOiB7XG5cdFx0XHRba2V5OiBzdHJpbmddOiB7XG5cdFx0XHRcdGV4dHJhY3Q/OiBzdHJpbmc7XG5cdFx0XHR9O1xuXHRcdH07XG5cdH07XG59XG5jb25zdCBsaWJTdW1tYXJ5ID0gYXN5bmMgKCkgPT4ge1xuXHRjb25zdCBzdW1tYXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN1bW1hcnknKTtcblx0aWYgKCFzdW1tYXJ5Lmxlbmd0aCkgcmV0dXJuO1xuXG5cdGNvbnN0IGsgPSBnZXRQcmV2aW91c09kZFdlZWsoKTtcblx0Y29uc3QgZCA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcblx0Y29uc3QgdGl0bGVTdHIgPSBg5pyJ5YW95qGj5qGI6aaGOuaho+ahiOmmhuWPjOWRqOaKpS8ke2R95bm0JHtnZXRNb250aEZyb21XZWVrKGQsIGsgKyAxKX3mnIgv56ysJHtrfS0ke2sgKyAxfeWRqGA7XG5cdGNvbnN0IHVybCA9IGAvYXBpLnBocD9hY3Rpb249cXVlcnkmcHJvcD1leHRyYWN0cyZleHNlY3Rpb25mb3JtYXQ9cGxhaW4mZXhjaGFycz0xMjAwJmZvcm1hdD1qc29uJnRpdGxlcz0ke3RpdGxlU3RyfS9zdW1tYXJ5YDtcblx0dHJ5IHtcblx0XHRjb25zdCBhID0gYXdhaXQgZmV0Y2godXJsKTtcblx0XHRjb25zdCByZXMgPSAoYXdhaXQgYS5qc29uKCkpIGFzIFJlcztcblx0XHRjb25zdCBwYWdlS2V5cyA9IE9iamVjdC5rZXlzKHJlcy5xdWVyeS5wYWdlcyk7XG5cblx0XHRjb25zdCBzdW1tYXJ5VXJsSHRtbCA9IGA8cD7mm7TlpJrmtojmga/vvIw8YSBocmVmPVwiaHR0cHM6Ly95b3VzaG91Lndpa2kvd2lraS8ke3RpdGxlU3RyfVwiPuivt+afpemYheacrOacn+WPjOWRqOaKpeivpue7huS/oeaBrzwvYT48L3A+YDtcblx0XHRjb25zdCB7cGFnZXN9ID0gcmVzLnF1ZXJ5O1xuXHRcdGNvbnN0IFtwYWdlS2V5XSA9IHBhZ2VLZXlzO1xuXG5cdFx0Y29uc3QgcGFnZSA9IHBhZ2VLZXkgPyBwYWdlc1twYWdlS2V5XSA6IHVuZGVmaW5lZDtcblx0XHRsZXQgZXh0cmFjdDogc3RyaW5nO1xuXHRcdGlmIChwYWdlKSB7XG5cdFx0XHRjb25zdCBhbGxQVGFnID0gcGFnZS5leHRyYWN0ID8gcGFnZS5leHRyYWN0Lm1hdGNoKC88cD5bXFxzXFxTXSo/PFxcL3A+L2cpIDogW107XG5cdFx0XHRjb25zdCBtYXRjaENoYXJhY3RlcnMgPSBhbGxQVGFnICYmIGFsbFBUYWcubGVuZ3RoID8gYWxsUFRhZy5hdCgtMSkgOiAnJztcblx0XHRcdGV4dHJhY3QgPVxuXHRcdFx0XHRwYWdlICYmIHBhZ2UuZXh0cmFjdFxuXHRcdFx0XHRcdD8gcGFnZS5leHRyYWN0LnJlcGxhY2UobWF0Y2hDaGFyYWN0ZXJzIHx8ICcnLCBzdW1tYXJ5VXJsSHRtbCkucmVwbGFjZSgv4oCmJC9nLCAnJylcblx0XHRcdFx0XHQ6ICcnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRleHRyYWN0ID0gJ+WKoOi9veWksei0pVFXUe+8jOWIt+aWsOivleivleWQpyc7XG5cdFx0fVxuXHRcdGZvciAoY29uc3QgZWwgb2Ygc3VtbWFyeSkge1xuXHRcdFx0ZWwuaW5uZXJIVE1MID0gZXh0cmFjdDtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcign6I635Y+W5pGY6KaB5pe25Ye66ZSZOicsIGVycm9yKTtcblx0XHRmb3IgKGNvbnN0IGVsIG9mIHN1bW1hcnkpIHtcblx0XHRcdGVsLmlubmVySFRNTCA9ICfliqDovb3lpLHotKVRV1HvvIzliLfmlrDor5Xor5XlkKcnO1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbGliU3VtbWFyeTtcbiIsICJpbXBvcnQge2xpYkhlYWRlciwgc2VhcmNoSW5qZWN0aW9ufSBmcm9tICcuL21vZHVsZXMvaW5kZXgtaGVhZGVyJztcbmltcG9ydCBsaWJTdW1tYXJ5IGZyb20gJy4vbW9kdWxlcy9zdW1tYXJ5JztcblxuKGFzeW5jICgpID0+IHtcblx0bGliSGVhZGVyKCk7XG5cdHNlYXJjaEluamVjdGlvbigpO1xuXHRhd2FpdCBsaWJTdW1tYXJ5KCk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsSUFBTUEsZ0JBQWdCLFNBQVVDLE9BQWVDLEtBQWFDLFVBQWtCQyxTQUE0QjtBQUN6RyxNQUFJQyxZQUEyQjtBQUUvQixRQUFNQyxTQUFVQyxpQkFBMkM7QUFDMURGLGtCQUFBQSxZQUFjRTtBQUNkLFVBQU1DLGNBQWNELGNBQWNGO0FBQ2xDLFVBQU1JLFdBQVdDLEtBQUtDLElBQUlILGNB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Q1p0RCxZQUFVO0FBQ1ZpQixrQkFBZ0I7QUFDaEIsUUFBTXlFLGdCQUFXO0FBQ2xCLENBQUEsRUFBRzsiLAogICJuYW1lcyI6IFsiYW5pbWF0ZU51bWJlciIsICJzdGFydCIsICJlbmQiLCAiZHVyYXRpb24iLCAiZWxlbWVudCIsICJzdGFydFRpbWUiLCAidXBkYXRlIiwgImN1cnJlbnRUaW1lIiwgInRpbWVFbGFwc2VkIiwgInByb2dyZXNzIiwgIk1hdGgiLCAibWluIiwgImN1cnJlbnROdW1iZXIiLCAiZmxvb3IiLCAidGV4dENvbnRlbnQiLCAidG9TdHJpbmciLCAicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwgImFuaW1hdGVOdW1iZXJfZGVmYXVsdCIsICJsaWJIZWFkZXIiLCAiZWxlbWVudHMiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvckFsbCIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAidmFsdWUiLCAiTnVtYmVyIiwgInBhcnNlSW50IiwgInJlcGxhY2UiLCAiZXJyIiwgImUiLCAiZiIsICJzZWFyY2hJbmplY3Rpb24iLCAiU2VhcmNoRm9ybUhUTUwiLCAiU2VhcmNoIiwgInF1ZXJ5U2VsZWN0b3IiLCAiaW5uZXJIVE1MIiwgImdldFByZXZpb3VzT2RkV2VlayIsICJub3ciLCAiRGF0ZSIsICJ0b2RheVVUQyIsICJVVEMiLCAiZ2V0RnVsbFllYXIiLCAiZ2V0TW9udGgiLCAiZ2V0RGF0ZSIsICJ0aHVyc2RheVVUQyIsICJzZXRVVENEYXRlIiwgImdldFVUQ0RhdGUiLCAiZ2V0VVRDRGF5IiwgInllYXJTdGFydCIsICJnZXRVVENGdWxsWWVhciIsICJ0aW1lRGlmZiIsICJnZXRUaW1lIiwgImRheXNEaWZmIiwgImN1cnJlbnRXZWVrIiwgImNlaWwiLCAicHJldmlvdXNPZGRXZWVrIiwgImxhc3RZZWFyRW5kIiwgImxhc3RZZWFyU3RhcnQiLCAibGFzdFllYXJXZWVrcyIsICJnZXRNb250aEZyb21XZWVrIiwgInllYXIiLCAid2VlayIsICJmaXJzdERheU9mWWVhciIsICJmaXJzdFRodXJzZGF5IiwgInNldERhdGUiLCAiZ2V0RGF5IiwgIndlZWtTdGFydCIsICJtaWRkbGVPZldlZWsiLCAibGliU3VtbWFyeSIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInN1bW1hcnkiLCAibGVuZ3RoIiwgImsiLCAiZCIsICJ0aXRsZVN0ciIsICJjb25jYXQiLCAidXJsIiwgImEiLCAiZmV0Y2giLCAicmVzIiwgImpzb24iLCAicGFnZUtleXMiLCAiT2JqZWN0IiwgImtleXMiLCAicXVlcnkiLCAicGFnZXMiLCAic3VtbWFyeVVybEh0bWwiLCAicGFnZUtleSIsICJwYWdlIiwgImV4dHJhY3QiLCAiYWxsUFRhZyIsICJtYXRjaCIsICJtYXRjaENoYXJhY3RlcnMiLCAiYXQiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAiZWwiLCAiZXJyb3IiLCAiY29uc29sZSIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJhcHBseSIsICJhcmd1bWVudHMiLCAic3VtbWFyeV9kZWZhdWx0Il0KfQo=
