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
    const linearProgress = Math.min(timeElapsed / duration, 1);
    const easedProgress = 1 - (1 - linearProgress) ** 3;
    const currentNumber = Math.floor(easedProgress * (end - start) + start);
    element.textContent = currentNumber.toLocaleString();
    if (linearProgress < 1) {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01haW5wYWdlX0pTL21vZHVsZXMvdXRpbC9hbmltYXRlTnVtYmVyLnRzIiwgInNyYy9NYWlucGFnZV9KUy9tb2R1bGVzL2luZGV4LWhlYWRlci50cyIsICJzcmMvTWFpbnBhZ2VfSlMvbW9kdWxlcy91dGlsL2RhdGVMb29rdXAudHMiLCAic3JjL01haW5wYWdlX0pTL21vZHVsZXMvc3VtbWFyeS50cyIsICJzcmMvTWFpbnBhZ2VfSlMvTWFpbnBhZ2UudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qXG4gKiBAY29kaW5nOiBVVEYtOFxuICogQEF1dGhvcjogQXdBamllXG4gKiBARGF0ZTogMjAyNS0wMy0wMSAwMTowMTo1NVxuICovXG5jb25zdCBhbmltYXRlTnVtYmVyID0gZnVuY3Rpb24gKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyLCBlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuXHRsZXQgc3RhcnRUaW1lOiBudW1iZXIgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdCB1cGRhdGUgPSAoY3VycmVudFRpbWU6IERPTUhpZ2hSZXNUaW1lU3RhbXApOiB2b2lkID0+IHtcblx0XHRzdGFydFRpbWUgfHw9IGN1cnJlbnRUaW1lO1xuXHRcdGNvbnN0IHRpbWVFbGFwc2VkID0gY3VycmVudFRpbWUgLSBzdGFydFRpbWU7XG5cdFx0Ly8g57q/5oCn5Y6f5aeL6L+b5bqmIDB+MVxuXHRcdGNvbnN0IGxpbmVhclByb2dyZXNzID0gTWF0aC5taW4odGltZUVsYXBzZWQgLyBkdXJhdGlvbiwgMSk7XG5cdFx0Ly8g5L2/55SoIGVhc2Utb3V077yIY3ViaWPvvInnvJPliqjvvJpwJyA9IDEgLSAoMSAtIHApXjPvvIzkvb/liY3mnJ/mm7Tlv6vvvIzlkI7mnJ/lh4/pgJ9cblx0XHRjb25zdCBlYXNlZFByb2dyZXNzID0gMSAtICgxIC0gbGluZWFyUHJvZ3Jlc3MpICoqIDM7XG5cdFx0Y29uc3QgY3VycmVudE51bWJlciA9IE1hdGguZmxvb3IoZWFzZWRQcm9ncmVzcyAqIChlbmQgLSBzdGFydCkgKyBzdGFydCk7XG5cblx0XHQvLyDljYPliIbkvY3moLzlvI/ljJbmmL7npLrvvIjkvb/nlKjmtY/op4jlmajmnKzlnLDljJbop4TliJnvvIlcblx0XHRlbGVtZW50LnRleHRDb250ZW50ID0gY3VycmVudE51bWJlci50b0xvY2FsZVN0cmluZygpO1xuXG5cdFx0aWYgKGxpbmVhclByb2dyZXNzIDwgMSkge1xuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XG5cdFx0fVxuXHR9O1xuXG5cdHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYW5pbWF0ZU51bWJlcjtcbiIsICJpbXBvcnQgYW5pbWF0ZU51bWJlciBmcm9tICcuL3V0aWwvYW5pbWF0ZU51bWJlcic7XG5jb25zdCBsaWJIZWFkZXIgPSAoKSA9PiB7XG5cdGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnZhbHVlJyk7XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG5cdFx0Y29uc3Qgc3RhcnQgPSAwO1xuXHRcdGNvbnN0IGVuZCA9IE51bWJlci5wYXJzZUludCgoZWxlbWVudC50ZXh0Q29udGVudCB8fCAnMCcpLnJlcGxhY2UoL1suLC8jISQlXiYqOzp7fT1cXC1fYH4oKV0vZywgJycpIHx8ICcwJywgMTApO1xuXHRcdGNvbnN0IGR1cmF0aW9uID0gMTUwMDtcblx0XHRhbmltYXRlTnVtYmVyKHN0YXJ0LCBlbmQsIGR1cmF0aW9uLCBlbGVtZW50IGFzIEhUTUxFbGVtZW50KTtcblx0fVxufTtcblxuY29uc3Qgc2VhcmNoSW5qZWN0aW9uID0gKCkgPT4ge1xuXHRjb25zdCBTZWFyY2hGb3JtSFRNTCA9IGA8Zm9ybSBuYW1lPVwiYm9keVNlYXJjaDAuMDQ4NDMzMjQ2NTM4XCIgaWQ9XCJib2R5U2VhcmNoMC4wNDg0MzMyNDY1MzhcIiBjbGFzcz1cInNlYXJjaC1pbnB1dCBib2R5U2VhcmNoIG13LWlucHV0Ym94LWlubGluZVwiIGFjdGlvbj1cIi93aWtpL1NwZWNpYWw6JUU2JTkwJTlDJUU3JUI0JUEyXCI+XG5cdDxpbnB1dCBuYW1lPVwic2VhcmNoXCIgY2xhc3M9XCJtdy1zZWFyY2hJbnB1dCBtdy11aS1pbnB1dCBtdy11aS1pbnB1dC1pbmxpbmVcIiBzaXplPVwiNTBcIiBpZD1cImJvZHlTZWFyY2hJbnB1dDAuMDQ4NDMzMjQ2NTM4XCIgZGlyPVwibHRyXCIgcGxhY2Vob2xkZXI9XCLmkJzntKLmnInlhb3moaPmoYjppoZcIiBhcmlhLWxhYmVsPVwi5pCc57Si5pyJ5YW95qGj5qGI6aaGXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCI+XG5cdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG5hbWU9XCJnb1wiIGNsYXNzPVwic2VhcmNoLWlucHV0LWljb24gaW5kZXgtSW52ZXJ0ZWQtY29sb3ItZmlsdGVyXCI+PGk+PC9pPjwvYnV0dG9uPlxuXHQ8aSBjbGFzcz1cInNlYXJjaC1pbnB1dC1ib3JkZXJcIj48L2k+XG5cdDwvZm9ybT5gO1xuXHRjb25zdCBTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjU2VhcmNoJyk7XG5cdGlmIChTZWFyY2gpIFNlYXJjaC5pbm5lckhUTUwgPSBTZWFyY2hGb3JtSFRNTDtcbn07XG5cbmV4cG9ydCB7bGliSGVhZGVyLCBzZWFyY2hJbmplY3Rpb259O1xuIiwgIi8qXG4gKiBAY29kaW5nOiBVVEYtOFxuICogQEF1dGhvcjogQXdBamllXG4gKiBARGF0ZTogMjAyNS0wMy0wMSAwMToxNjoyMFxuICovXG5jb25zdCBnZXRQcmV2aW91c09kZFdlZWsgPSAoKSA9PiB7XG5cdGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG5cdGNvbnN0IHRvZGF5VVRDID0gbmV3IERhdGUoRGF0ZS5VVEMobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpLCBub3cuZ2V0RGF0ZSgpKSk7XG5cblx0Y29uc3QgdGh1cnNkYXlVVEMgPSBuZXcgRGF0ZSh0b2RheVVUQyk7XG5cdHRodXJzZGF5VVRDLnNldFVUQ0RhdGUodG9kYXlVVEMuZ2V0VVRDRGF0ZSgpICsgNCAtICh0b2RheVVUQy5nZXRVVENEYXkoKSB8fCA3KSk7XG5cblx0Y29uc3QgeWVhclN0YXJ0ID0gbmV3IERhdGUoRGF0ZS5VVEModGh1cnNkYXlVVEMuZ2V0VVRDRnVsbFllYXIoKSwgMCwgMSkpO1xuXG5cdGNvbnN0IHRpbWVEaWZmID0gdGh1cnNkYXlVVEMuZ2V0VGltZSgpIC0geWVhclN0YXJ0LmdldFRpbWUoKTtcblx0Y29uc3QgZGF5c0RpZmYgPSBNYXRoLmZsb29yKHRpbWVEaWZmIC8gODZfNDAwXzAwMCkgKyAxO1xuXHRjb25zdCBjdXJyZW50V2VlayA9IE1hdGguY2VpbChkYXlzRGlmZiAvIDcpO1xuXG5cdGxldCBwcmV2aW91c09kZFdlZWsgPSBjdXJyZW50V2VlayAlIDIgPT09IDEgPyBjdXJyZW50V2VlayAtIDIgOiBjdXJyZW50V2VlayAtIDM7XG5cblx0aWYgKHByZXZpb3VzT2RkV2VlayA8PSAwKSB7XG5cdFx0Y29uc3QgbGFzdFllYXJFbmQgPSBuZXcgRGF0ZShEYXRlLlVUQyh0aHVyc2RheVVUQy5nZXRVVENGdWxsWWVhcigpIC0gMSwgMTEsIDMxKSk7XG5cdFx0bGFzdFllYXJFbmQuc2V0VVRDRGF0ZShsYXN0WWVhckVuZC5nZXRVVENEYXRlKCkgKyA0IC0gKGxhc3RZZWFyRW5kLmdldFVUQ0RheSgpIHx8IDcpKTtcblx0XHRjb25zdCBsYXN0WWVhclN0YXJ0ID0gbmV3IERhdGUoRGF0ZS5VVEMobGFzdFllYXJFbmQuZ2V0VVRDRnVsbFllYXIoKSwgMCwgMSkpO1xuXHRcdGNvbnN0IGxhc3RZZWFyV2Vla3MgPSBNYXRoLmNlaWwoKGxhc3RZZWFyRW5kLmdldFRpbWUoKSAtIGxhc3RZZWFyU3RhcnQuZ2V0VGltZSgpKSAvIDYwNF84MDBfMDAwKTtcblx0XHRwcmV2aW91c09kZFdlZWsgPSBsYXN0WWVhcldlZWtzICUgMiA9PT0gMSA/IGxhc3RZZWFyV2Vla3MgOiBsYXN0WWVhcldlZWtzIC0gMTtcblx0fVxuXG5cdHJldHVybiBwcmV2aW91c09kZFdlZWs7XG59O1xuXG5jb25zdCBnZXRNb250aEZyb21XZWVrID0gKHllYXI6IG51bWJlciwgd2VlazogbnVtYmVyKSA9PiB7XG5cdGNvbnN0IGZpcnN0RGF5T2ZZZWFyID0gbmV3IERhdGUoeWVhciwgMCwgMSk7XG5cdGNvbnN0IGZpcnN0VGh1cnNkYXkgPSBuZXcgRGF0ZShmaXJzdERheU9mWWVhcik7XG5cdGZpcnN0VGh1cnNkYXkuc2V0RGF0ZShmaXJzdERheU9mWWVhci5nZXREYXRlKCkgKyAoKDQgLSBmaXJzdERheU9mWWVhci5nZXREYXkoKSArIDcpICUgNykpO1xuXHRjb25zdCB3ZWVrU3RhcnQgPSBuZXcgRGF0ZShmaXJzdFRodXJzZGF5KTtcblx0d2Vla1N0YXJ0LnNldERhdGUoZmlyc3RUaHVyc2RheS5nZXREYXRlKCkgKyAod2VlayAtIDEpICogNyAtIDMpO1xuXHRjb25zdCBtaWRkbGVPZldlZWsgPSBuZXcgRGF0ZSh3ZWVrU3RhcnQpO1xuXHRtaWRkbGVPZldlZWsuc2V0RGF0ZSh3ZWVrU3RhcnQuZ2V0RGF0ZSgpICsgMyk7XG5cdHJldHVybiBtaWRkbGVPZldlZWsuZ2V0TW9udGgoKSArIDE7XG59O1xuXG5leHBvcnQge2dldE1vbnRoRnJvbVdlZWssIGdldFByZXZpb3VzT2RkV2Vla307XG4iLCAiLypcbiAqIEBjb2Rpbmc6IFVURi04XG4gKiBAQXV0aG9yOiBBd0FqaWVcbiAqIEBEYXRlOiAyMDI1LTAzLTAxIDAxOjEzOjExXG4gKi9cbmltcG9ydCB7Z2V0TW9udGhGcm9tV2VlaywgZ2V0UHJldmlvdXNPZGRXZWVrfSBmcm9tICcuL3V0aWwvZGF0ZUxvb2t1cCc7XG5cbmludGVyZmFjZSBSZXMge1xuXHRxdWVyeToge1xuXHRcdHBhZ2VzOiB7XG5cdFx0XHRba2V5OiBzdHJpbmddOiB7XG5cdFx0XHRcdGV4dHJhY3Q/OiBzdHJpbmc7XG5cdFx0XHR9O1xuXHRcdH07XG5cdH07XG59XG5jb25zdCBsaWJTdW1tYXJ5ID0gYXN5bmMgKCkgPT4ge1xuXHRjb25zdCBzdW1tYXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN1bW1hcnknKTtcblx0aWYgKCFzdW1tYXJ5Lmxlbmd0aCkgcmV0dXJuO1xuXG5cdGNvbnN0IGsgPSBnZXRQcmV2aW91c09kZFdlZWsoKTtcblx0Y29uc3QgZCA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcblx0Y29uc3QgdGl0bGVTdHIgPSBg5pyJ5YW95qGj5qGI6aaGOuaho+ahiOmmhuWPjOWRqOaKpS8ke2R95bm0JHtnZXRNb250aEZyb21XZWVrKGQsIGsgKyAxKX3mnIgv56ysJHtrfS0ke2sgKyAxfeWRqGA7XG5cdGNvbnN0IHVybCA9IGAvYXBpLnBocD9hY3Rpb249cXVlcnkmcHJvcD1leHRyYWN0cyZleHNlY3Rpb25mb3JtYXQ9cGxhaW4mZXhjaGFycz0xMjAwJmZvcm1hdD1qc29uJnRpdGxlcz0ke3RpdGxlU3RyfS9zdW1tYXJ5YDtcblx0dHJ5IHtcblx0XHRjb25zdCBhID0gYXdhaXQgZmV0Y2godXJsKTtcblx0XHRjb25zdCByZXMgPSAoYXdhaXQgYS5qc29uKCkpIGFzIFJlcztcblx0XHRjb25zdCBwYWdlS2V5cyA9IE9iamVjdC5rZXlzKHJlcy5xdWVyeS5wYWdlcyk7XG5cblx0XHRjb25zdCBzdW1tYXJ5VXJsSHRtbCA9IGA8cD7mm7TlpJrmtojmga/vvIw8YSBocmVmPVwiaHR0cHM6Ly95b3VzaG91Lndpa2kvd2lraS8ke3RpdGxlU3RyfVwiPuivt+afpemYheacrOacn+WPjOWRqOaKpeivpue7huS/oeaBrzwvYT48L3A+YDtcblx0XHRjb25zdCB7cGFnZXN9ID0gcmVzLnF1ZXJ5O1xuXHRcdGNvbnN0IFtwYWdlS2V5XSA9IHBhZ2VLZXlzO1xuXG5cdFx0Y29uc3QgcGFnZSA9IHBhZ2VLZXkgPyBwYWdlc1twYWdlS2V5XSA6IHVuZGVmaW5lZDtcblx0XHRsZXQgZXh0cmFjdDogc3RyaW5nO1xuXHRcdGlmIChwYWdlKSB7XG5cdFx0XHRjb25zdCBhbGxQVGFnID0gcGFnZS5leHRyYWN0ID8gcGFnZS5leHRyYWN0Lm1hdGNoKC88cD5bXFxzXFxTXSo/PFxcL3A+L2cpIDogW107XG5cdFx0XHRjb25zdCBtYXRjaENoYXJhY3RlcnMgPSBhbGxQVGFnICYmIGFsbFBUYWcubGVuZ3RoID8gYWxsUFRhZy5hdCgtMSkgOiAnJztcblx0XHRcdGV4dHJhY3QgPVxuXHRcdFx0XHRwYWdlICYmIHBhZ2UuZXh0cmFjdFxuXHRcdFx0XHRcdD8gcGFnZS5leHRyYWN0LnJlcGxhY2UobWF0Y2hDaGFyYWN0ZXJzIHx8ICcnLCBzdW1tYXJ5VXJsSHRtbCkucmVwbGFjZSgv4oCmJC9nLCAnJylcblx0XHRcdFx0XHQ6ICcnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRleHRyYWN0ID0gJ+WKoOi9veWksei0pVFXUe+8jOWIt+aWsOivleivleWQpyc7XG5cdFx0fVxuXHRcdGZvciAoY29uc3QgZWwgb2Ygc3VtbWFyeSkge1xuXHRcdFx0ZWwuaW5uZXJIVE1MID0gZXh0cmFjdDtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcign6I635Y+W5pGY6KaB5pe25Ye66ZSZOicsIGVycm9yKTtcblx0XHRmb3IgKGNvbnN0IGVsIG9mIHN1bW1hcnkpIHtcblx0XHRcdGVsLmlubmVySFRNTCA9ICfliqDovb3lpLHotKVRV1HvvIzliLfmlrDor5Xor5XlkKcnO1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbGliU3VtbWFyeTtcbiIsICJpbXBvcnQge2xpYkhlYWRlciwgc2VhcmNoSW5qZWN0aW9ufSBmcm9tICcuL21vZHVsZXMvaW5kZXgtaGVhZGVyJztcbmltcG9ydCBsaWJTdW1tYXJ5IGZyb20gJy4vbW9kdWxlcy9zdW1tYXJ5JztcblxuKGFzeW5jICgpID0+IHtcblx0bGliSGVhZGVyKCk7XG5cdHNlYXJjaEluamVjdGlvbigpO1xuXHRhd2FpdCBsaWJTdW1tYXJ5KCk7XG59KSgpO1xuIl0s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QUE7QUFBakIsYUFBQUQsV0FBQS9FLEVBQUEsR0FBQSxFQUFBZ0YsU0FBQUQsV0FBQTlFLEVBQUEsR0FBQUMsUUFBMEI7QUFBQSxnQkFBZjBFLEtBQUFJLE9BQUE3RTtBQUNWeUUsYUFBRzlELFlBQVk7UUFDaEI7TUFBQSxTQUFBUCxLQUFBO0FBQUF3RSxtQkFBQXZFLEVBQUFELEdBQUE7TUFBQSxVQUFBO0FBQUF3RSxtQkFBQXRFLEVBQUE7TUFBQTtJQUNEO0VBQ0QsQ0FBQTtBQUFBLFNBQUEsU0F0Q01zQyxjQUFBO0FBQUEsV0FBQUMsS0FBQWlDLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTtBQXdDTixJQUFPQyxrQkFBUXBDOztrQkNyRGQsYUFBWTtBQUNadEQsWUFBVTtBQUNWaUIsa0JBQWdCO0FBQ2hCLFFBQU15RSxnQkFBVztBQUNsQixDQUFBLEVBQUc7IiwKICAibmFtZXMiOiBbImFuaW1hdGVOdW1iZXIiLCAic3RhcnQiLCAiZW5kIiwgImR1cmF0aW9uIiwgImVsZW1lbnQiLCAic3RhcnRUaW1lIiwgInVwZGF0ZSIsICJjdXJyZW50VGltZSIsICJ0aW1lRWxhcHNlZCIsICJsaW5lYXJQcm9ncmVzcyIsICJNYXRoIiwgIm1pbiIsICJlYXNlZFByb2dyZXNzIiwgImN1cnJlbnROdW1iZXIiLCAiZmxvb3IiLCAidGV4dENvbnRlbnQiLCAidG9Mb2NhbGVTdHJpbmciLCAicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwgImFuaW1hdGVOdW1iZXJfZGVmYXVsdCIsICJsaWJIZWFkZXIiLCAiZWxlbWVudHMiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvckFsbCIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAidmFsdWUiLCAiTnVtYmVyIiwgInBhcnNlSW50IiwgInJlcGxhY2UiLCAiZXJyIiwgImUiLCAiZiIsICJzZWFyY2hJbmplY3Rpb24iLCAiU2VhcmNoRm9ybUhUTUwiLCAiU2VhcmNoIiwgInF1ZXJ5U2VsZWN0b3IiLCAiaW5uZXJIVE1MIiwgImdldFByZXZpb3VzT2RkV2VlayIsICJub3ciLCAiRGF0ZSIsICJ0b2RheVVUQyIsICJVVEMiLCAiZ2V0RnVsbFllYXIiLCAiZ2V0TW9udGgiLCAiZ2V0RGF0ZSIsICJ0aHVyc2RheVVUQyIsICJzZXRVVENEYXRlIiwgImdldFVUQ0RhdGUiLCAiZ2V0VVRDRGF5IiwgInllYXJTdGFydCIsICJnZXRVVENGdWxsWWVhciIsICJ0aW1lRGlmZiIsICJnZXRUaW1lIiwgImRheXNEaWZmIiwgImN1cnJlbnRXZWVrIiwgImNlaWwiLCAicHJldmlvdXNPZGRXZWVrIiwgImxhc3RZZWFyRW5kIiwgImxhc3RZZWFyU3RhcnQiLCAibGFzdFllYXJXZWVrcyIsICJnZXRNb250aEZyb21XZWVrIiwgInllYXIiLCAid2VlayIsICJmaXJzdERheU9mWWVhciIsICJmaXJzdFRodXJzZGF5IiwgInNldERhdGUiLCAiZ2V0RGF5IiwgIndlZWtTdGFydCIsICJtaWRkbGVPZldlZWsiLCAibGliU3VtbWFyeSIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInN1bW1hcnkiLCAibGVuZ3RoIiwgImsiLCAiZCIsICJ0aXRsZVN0ciIsICJjb25jYXQiLCAidXJsIiwgImEiLCAiZmV0Y2giLCAicmVzIiwgImpzb24iLCAicGFnZUtleXMiLCAiT2JqZWN0IiwgImtleXMiLCAicXVlcnkiLCAicGFnZXMiLCAic3VtbWFyeVVybEh0bWwiLCAicGFnZUtleSIsICJwYWdlIiwgImV4dHJhY3QiLCAiYWxsUFRhZyIsICJtYXRjaCIsICJtYXRjaENoYXJhY3RlcnMiLCAiYXQiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAiZWwiLCAiZXJyb3IiLCAiY29uc29sZSIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJhcHBseSIsICJhcmd1bWVudHMiLCAic3VtbWFyeV9kZWZhdWx0Il0KfQo=
