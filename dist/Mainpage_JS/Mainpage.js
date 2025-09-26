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
  let firstFrameRendered = false;
  if (!element.dataset["animating"]) {
    element.dataset["animating"] = "true";
    injectHidingStyleOnce();
  }
  const update = (currentTime) => {
    startTime || (startTime = currentTime);
    const timeElapsed = currentTime - startTime;
    const linearProgress = Math.min(timeElapsed / duration, 1);
    const easedProgress = 1 - (1 - linearProgress) ** 5;
    const currentNumber = Math.floor(easedProgress * (end - start) + start);
    element.textContent = currentNumber.toLocaleString();
    if (!firstFrameRendered) {
      firstFrameRendered = true;
      delete element.dataset["animating"];
    }
    if (linearProgress < 1) {
      requestAnimationFrame(update);
    }
  };
  requestAnimationFrame(update);
};
var animateNumberStyleInjected = false;
var injectHidingStyleOnce = () => {
  if (animateNumberStyleInjected) return;
  const style = document.createElement("style");
  style.dataset["animateNumberStyle"] = "true";
  style.textContent = "[data-animating]{visibility:hidden;}";
  document.head.append(style);
  animateNumberStyleInjected = true;
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
var libSummary = /* @__PURE__ */ (function() {
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
})();
var summary_default = libSummary;
//! src/Mainpage_JS/Mainpage.ts
_asyncToGenerator(function* () {
  libHeader();
  searchInjection();
  yield summary_default();
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01haW5wYWdlX0pTL21vZHVsZXMvdXRpbC9hbmltYXRlTnVtYmVyLnRzIiwgInNyYy9NYWlucGFnZV9KUy9tb2R1bGVzL2luZGV4LWhlYWRlci50cyIsICJzcmMvTWFpbnBhZ2VfSlMvbW9kdWxlcy91dGlsL2RhdGVMb29rdXAudHMiLCAic3JjL01haW5wYWdlX0pTL21vZHVsZXMvc3VtbWFyeS50cyIsICJzcmMvTWFpbnBhZ2VfSlMvTWFpbnBhZ2UudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qXG4gKiBAY29kaW5nOiBVVEYtOFxuICogQEF1dGhvcjogQXdBamllXG4gKiBARGF0ZTogMjAyNS0wMy0wMSAwMTowMTo1NVxuICovXG5jb25zdCBhbmltYXRlTnVtYmVyID0gZnVuY3Rpb24gKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyLCBlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuXHRsZXQgc3RhcnRUaW1lOiBudW1iZXIgfCBudWxsID0gbnVsbDtcblx0bGV0IGZpcnN0RnJhbWVSZW5kZXJlZCA9IGZhbHNlO1xuXG5cdC8vIOWIneWni+makOiXj++8jOmBv+WFjeWcqOiEmuacrOaJp+ihjOWJjeeci+WIsOe7iOWAvO+8m+WPquWcqOWwmuaXoCBkYXRhLWFuaW1hdGluZyDml7borr7nva5cblx0aWYgKCFlbGVtZW50LmRhdGFzZXRbJ2FuaW1hdGluZyddKSB7XG5cdFx0ZWxlbWVudC5kYXRhc2V0WydhbmltYXRpbmcnXSA9ICd0cnVlJztcblx0XHQvLyDkuI3nm7TmjqXmuIXnqbrmlofmnKzvvIzkv53nlZnlhoXlrrnkvpvop6PmnpDvvJvpgJrov4fmoLflvI/pmpDol49cblx0XHRpbmplY3RIaWRpbmdTdHlsZU9uY2UoKTtcblx0fVxuXG5cdGNvbnN0IHVwZGF0ZSA9IChjdXJyZW50VGltZTogRE9NSGlnaFJlc1RpbWVTdGFtcCk6IHZvaWQgPT4ge1xuXHRcdHN0YXJ0VGltZSB8fD0gY3VycmVudFRpbWU7XG5cdFx0Y29uc3QgdGltZUVsYXBzZWQgPSBjdXJyZW50VGltZSAtIHN0YXJ0VGltZTtcblx0XHQvLyDnur/mgKfljp/lp4vov5vluqYgMH4xXG5cdFx0Y29uc3QgbGluZWFyUHJvZ3Jlc3MgPSBNYXRoLm1pbih0aW1lRWxhcHNlZCAvIGR1cmF0aW9uLCAxKTtcblx0XHQvLyDmm7TlvLrnmoQgZWFzZS1vdXTvvJpxdWludGljIDEgLSAoMSAtIHApXjXvvIzlkI7mrrXmm7TmmI7mmL7lh4/pgJ9cblx0XHRjb25zdCBlYXNlZFByb2dyZXNzID0gMSAtICgxIC0gbGluZWFyUHJvZ3Jlc3MpICoqIDU7XG5cdFx0Y29uc3QgY3VycmVudE51bWJlciA9IE1hdGguZmxvb3IoZWFzZWRQcm9ncmVzcyAqIChlbmQgLSBzdGFydCkgKyBzdGFydCk7XG5cblx0XHQvLyDljYPliIbkvY3moLzlvI/ljJbmmL7npLrvvIjkvb/nlKjmtY/op4jlmajmnKzlnLDljJbop4TliJnvvIlcblx0XHRlbGVtZW50LnRleHRDb250ZW50ID0gY3VycmVudE51bWJlci50b0xvY2FsZVN0cmluZygpO1xuXG5cdFx0aWYgKCFmaXJzdEZyYW1lUmVuZGVyZWQpIHtcblx0XHRcdGZpcnN0RnJhbWVSZW5kZXJlZCA9IHRydWU7XG5cdFx0XHQvLyDpppbluKfmuLLmn5PlkI7mmL7npLpcblx0XHRcdGRlbGV0ZSBlbGVtZW50LmRhdGFzZXRbJ2FuaW1hdGluZyddO1xuXHRcdH1cblxuXHRcdGlmIChsaW5lYXJQcm9ncmVzcyA8IDEpIHtcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xuXHRcdH1cblx0fTtcblxuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcbn07XG5cbi8vIOWwhumakOiXj+agt+W8j+WPquazqOWFpeS4gOasoVxubGV0IGFuaW1hdGVOdW1iZXJTdHlsZUluamVjdGVkID0gZmFsc2U7XG5jb25zdCBpbmplY3RIaWRpbmdTdHlsZU9uY2UgPSAoKTogdm9pZCA9PiB7XG5cdGlmIChhbmltYXRlTnVtYmVyU3R5bGVJbmplY3RlZCkgcmV0dXJuO1xuXHRjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cdHN0eWxlLmRhdGFzZXRbJ2FuaW1hdGVOdW1iZXJTdHlsZSddID0gJ3RydWUnO1xuXHRzdHlsZS50ZXh0Q29udGVudCA9ICdbZGF0YS1hbmltYXRpbmdde3Zpc2liaWxpdHk6aGlkZGVuO30nO1xuXHRkb2N1bWVudC5oZWFkLmFwcGVuZChzdHlsZSk7XG5cdGFuaW1hdGVOdW1iZXJTdHlsZUluamVjdGVkID0gdHJ1ZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFuaW1hdGVOdW1iZXI7XG4iLCAiaW1wb3J0IGFuaW1hdGVOdW1iZXIgZnJvbSAnLi91dGlsL2FuaW1hdGVOdW1iZXInO1xuY29uc3QgbGliSGVhZGVyID0gKCkgPT4ge1xuXHRjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy52YWx1ZScpO1xuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xuXHRcdGNvbnN0IHN0YXJ0ID0gMDtcblx0XHRjb25zdCBlbmQgPSBOdW1iZXIucGFyc2VJbnQoKGVsZW1lbnQudGV4dENvbnRlbnQgfHwgJzAnKS5yZXBsYWNlKC9bLiwvIyEkJV4mKjs6e309XFwtX2B+KCldL2csICcnKSB8fCAnMCcsIDEwKTtcblx0XHRjb25zdCBkdXJhdGlvbiA9IDE1MDA7XG5cdFx0YW5pbWF0ZU51bWJlcihzdGFydCwgZW5kLCBkdXJhdGlvbiwgZWxlbWVudCBhcyBIVE1MRWxlbWVudCk7XG5cdH1cbn07XG5cbmNvbnN0IHNlYXJjaEluamVjdGlvbiA9ICgpID0+IHtcblx0Y29uc3QgU2VhcmNoRm9ybUhUTUwgPSBgPGZvcm0gbmFtZT1cImJvZHlTZWFyY2gwLjA0ODQzMzI0NjUzOFwiIGlkPVwiYm9keVNlYXJjaDAuMDQ4NDMzMjQ2NTM4XCIgY2xhc3M9XCJzZWFyY2gtaW5wdXQgYm9keVNlYXJjaCBtdy1pbnB1dGJveC1pbmxpbmVcIiBhY3Rpb249XCIvd2lraS9TcGVjaWFsOiVFNiU5MCU5QyVFNyVCNCVBMlwiPlxuXHQ8aW5wdXQgbmFtZT1cInNlYXJjaFwiIGNsYXNzPVwibXctc2VhcmNoSW5wdXQgbXctdWktaW5wdXQgbXctdWktaW5wdXQtaW5saW5lXCIgc2l6ZT1cIjUwXCIgaWQ9XCJib2R5U2VhcmNoSW5wdXQwLjA0ODQzMzI0NjUzOFwiIGRpcj1cImx0clwiIHBsYWNlaG9sZGVyPVwi5pCc57Si5pyJ5YW95qGj5qGI6aaGXCIgYXJpYS1sYWJlbD1cIuaQnOe0ouacieWFveaho+ahiOmmhlwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiPlxuXHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBuYW1lPVwiZ29cIiBjbGFzcz1cInNlYXJjaC1pbnB1dC1pY29uIGluZGV4LUludmVydGVkLWNvbG9yLWZpbHRlclwiPjxpPjwvaT48L2J1dHRvbj5cblx0PGkgY2xhc3M9XCJzZWFyY2gtaW5wdXQtYm9yZGVyXCI+PC9pPlxuXHQ8L2Zvcm0+YDtcblx0Y29uc3QgU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1NlYXJjaCcpO1xuXHRpZiAoU2VhcmNoKSBTZWFyY2guaW5uZXJIVE1MID0gU2VhcmNoRm9ybUhUTUw7XG59O1xuXG5leHBvcnQge2xpYkhlYWRlciwgc2VhcmNoSW5qZWN0aW9ufTtcbiIsICIvKlxuICogQGNvZGluZzogVVRGLThcbiAqIEBBdXRob3I6IEF3QWppZVxuICogQERhdGU6IDIwMjUtMDMtMDEgMDE6MTY6MjBcbiAqL1xuY29uc3QgZ2V0UHJldmlvdXNPZGRXZWVrID0gKCkgPT4ge1xuXHRjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuXHRjb25zdCB0b2RheVVUQyA9IG5ldyBEYXRlKERhdGUuVVRDKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSwgbm93LmdldERhdGUoKSkpO1xuXG5cdGNvbnN0IHRodXJzZGF5VVRDID0gbmV3IERhdGUodG9kYXlVVEMpO1xuXHR0aHVyc2RheVVUQy5zZXRVVENEYXRlKHRvZGF5VVRDLmdldFVUQ0RhdGUoKSArIDQgLSAodG9kYXlVVEMuZ2V0VVRDRGF5KCkgfHwgNykpO1xuXG5cdGNvbnN0IHllYXJTdGFydCA9IG5ldyBEYXRlKERhdGUuVVRDKHRodXJzZGF5VVRDLmdldFVUQ0Z1bGxZZWFyKCksIDAsIDEpKTtcblxuXHRjb25zdCB0aW1lRGlmZiA9IHRodXJzZGF5VVRDLmdldFRpbWUoKSAtIHllYXJTdGFydC5nZXRUaW1lKCk7XG5cdGNvbnN0IGRheXNEaWZmID0gTWF0aC5mbG9vcih0aW1lRGlmZiAvIDg2XzQwMF8wMDApICsgMTtcblx0Y29uc3QgY3VycmVudFdlZWsgPSBNYXRoLmNlaWwoZGF5c0RpZmYgLyA3KTtcblxuXHRsZXQgcHJldmlvdXNPZGRXZWVrID0gY3VycmVudFdlZWsgJSAyID09PSAxID8gY3VycmVudFdlZWsgLSAyIDogY3VycmVudFdlZWsgLSAzO1xuXG5cdGlmIChwcmV2aW91c09kZFdlZWsgPD0gMCkge1xuXHRcdGNvbnN0IGxhc3RZZWFyRW5kID0gbmV3IERhdGUoRGF0ZS5VVEModGh1cnNkYXlVVEMuZ2V0VVRDRnVsbFllYXIoKSAtIDEsIDExLCAzMSkpO1xuXHRcdGxhc3RZZWFyRW5kLnNldFVUQ0RhdGUobGFzdFllYXJFbmQuZ2V0VVRDRGF0ZSgpICsgNCAtIChsYXN0WWVhckVuZC5nZXRVVENEYXkoKSB8fCA3KSk7XG5cdFx0Y29uc3QgbGFzdFllYXJTdGFydCA9IG5ldyBEYXRlKERhdGUuVVRDKGxhc3RZZWFyRW5kLmdldFVUQ0Z1bGxZZWFyKCksIDAsIDEpKTtcblx0XHRjb25zdCBsYXN0WWVhcldlZWtzID0gTWF0aC5jZWlsKChsYXN0WWVhckVuZC5nZXRUaW1lKCkgLSBsYXN0WWVhclN0YXJ0LmdldFRpbWUoKSkgLyA2MDRfODAwXzAwMCk7XG5cdFx0cHJldmlvdXNPZGRXZWVrID0gbGFzdFllYXJXZWVrcyAlIDIgPT09IDEgPyBsYXN0WWVhcldlZWtzIDogbGFzdFllYXJXZWVrcyAtIDE7XG5cdH1cblxuXHRyZXR1cm4gcHJldmlvdXNPZGRXZWVrO1xufTtcblxuY29uc3QgZ2V0TW9udGhGcm9tV2VlayA9ICh5ZWFyOiBudW1iZXIsIHdlZWs6IG51bWJlcikgPT4ge1xuXHRjb25zdCBmaXJzdERheU9mWWVhciA9IG5ldyBEYXRlKHllYXIsIDAsIDEpO1xuXHRjb25zdCBmaXJzdFRodXJzZGF5ID0gbmV3IERhdGUoZmlyc3REYXlPZlllYXIpO1xuXHRmaXJzdFRodXJzZGF5LnNldERhdGUoZmlyc3REYXlPZlllYXIuZ2V0RGF0ZSgpICsgKCg0IC0gZmlyc3REYXlPZlllYXIuZ2V0RGF5KCkgKyA3KSAlIDcpKTtcblx0Y29uc3Qgd2Vla1N0YXJ0ID0gbmV3IERhdGUoZmlyc3RUaHVyc2RheSk7XG5cdHdlZWtTdGFydC5zZXREYXRlKGZpcnN0VGh1cnNkYXkuZ2V0RGF0ZSgpICsgKHdlZWsgLSAxKSAqIDcgLSAzKTtcblx0Y29uc3QgbWlkZGxlT2ZXZWVrID0gbmV3IERhdGUod2Vla1N0YXJ0KTtcblx0bWlkZGxlT2ZXZWVrLnNldERhdGUod2Vla1N0YXJ0LmdldERhdGUoKSArIDMpO1xuXHRyZXR1cm4gbWlkZGxlT2ZXZWVrLmdldE1vbnRoKCkgKyAxO1xufTtcblxuZXhwb3J0IHtnZXRNb250aEZyb21XZWVrLCBnZXRQcmV2aW91c09kZFdlZWt9O1xuIiwgIi8qXG4gKiBAY29kaW5nOiBVVEYtOFxuICogQEF1dGhvcjogQXdBamllXG4gKiBARGF0ZTogMjAyNS0wMy0wMSAwMToxMzoxMVxuICovXG5pbXBvcnQge2dldE1vbnRoRnJvbVdlZWssIGdldFByZXZpb3VzT2RkV2Vla30gZnJvbSAnLi91dGlsL2RhdGVMb29rdXAnO1xuXG5pbnRlcmZhY2UgUmVzIHtcblx0cXVlcnk6IHtcblx0XHRwYWdlczoge1xuXHRcdFx0W2tleTogc3RyaW5nXToge1xuXHRcdFx0XHRleHRyYWN0Pzogc3RyaW5nO1xuXHRcdFx0fTtcblx0XHR9O1xuXHR9O1xufVxuY29uc3QgbGliU3VtbWFyeSA9IGFzeW5jICgpID0+IHtcblx0Y29uc3Qgc3VtbWFyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdW1tYXJ5Jyk7XG5cdGlmICghc3VtbWFyeS5sZW5ndGgpIHJldHVybjtcblxuXHRjb25zdCBrID0gZ2V0UHJldmlvdXNPZGRXZWVrKCk7XG5cdGNvbnN0IGQgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG5cdGNvbnN0IHRpdGxlU3RyID0gYOacieWFveaho+ahiOmmhjrmoaPmoYjppoblj4zlkajmiqUvJHtkfeW5tCR7Z2V0TW9udGhGcm9tV2VlayhkLCBrICsgMSl95pyIL+esrCR7a30tJHtrICsgMX3lkahgO1xuXHRjb25zdCB1cmwgPSBgL2FwaS5waHA/YWN0aW9uPXF1ZXJ5JnByb3A9ZXh0cmFjdHMmZXhzZWN0aW9uZm9ybWF0PXBsYWluJmV4Y2hhcnM9MTIwMCZmb3JtYXQ9anNvbiZ0aXRsZXM9JHt0aXRsZVN0cn0vc3VtbWFyeWA7XG5cdHRyeSB7XG5cdFx0Y29uc3QgYSA9IGF3YWl0IGZldGNoKHVybCk7XG5cdFx0Y29uc3QgcmVzID0gKGF3YWl0IGEuanNvbigpKSBhcyBSZXM7XG5cdFx0Y29uc3QgcGFnZUtleXMgPSBPYmplY3Qua2V5cyhyZXMucXVlcnkucGFnZXMpO1xuXG5cdFx0Y29uc3Qgc3VtbWFyeVVybEh0bWwgPSBgPHA+5pu05aSa5raI5oGv77yMPGEgaHJlZj1cImh0dHBzOi8veW91c2hvdS53aWtpL3dpa2kvJHt0aXRsZVN0cn1cIj7or7fmn6XpmIXmnKzmnJ/lj4zlkajmiqXor6bnu4bkv6Hmga88L2E+PC9wPmA7XG5cdFx0Y29uc3Qge3BhZ2VzfSA9IHJlcy5xdWVyeTtcblx0XHRjb25zdCBbcGFnZUtleV0gPSBwYWdlS2V5cztcblxuXHRcdGNvbnN0IHBhZ2UgPSBwYWdlS2V5ID8gcGFnZXNbcGFnZUtleV0gOiB1bmRlZmluZWQ7XG5cdFx0bGV0IGV4dHJhY3Q6IHN0cmluZztcblx0XHRpZiAocGFnZSkge1xuXHRcdFx0Y29uc3QgYWxsUFRhZyA9IHBhZ2UuZXh0cmFjdCA/IHBhZ2UuZXh0cmFjdC5tYXRjaCgvPHA+W1xcc1xcU10qPzxcXC9wPi9nKSA6IFtdO1xuXHRcdFx0Y29uc3QgbWF0Y2hDaGFyYWN0ZXJzID0gYWxsUFRhZyAmJiBhbGxQVGFnLmxlbmd0aCA/IGFsbFBUYWcuYXQoLTEpIDogJyc7XG5cdFx0XHRleHRyYWN0ID1cblx0XHRcdFx0cGFnZSAmJiBwYWdlLmV4dHJhY3Rcblx0XHRcdFx0XHQ/IHBhZ2UuZXh0cmFjdC5yZXBsYWNlKG1hdGNoQ2hhcmFjdGVycyB8fCAnJywgc3VtbWFyeVVybEh0bWwpLnJlcGxhY2UoL+KApiQvZywgJycpXG5cdFx0XHRcdFx0OiAnJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZXh0cmFjdCA9ICfliqDovb3lpLHotKVRV1HvvIzliLfmlrDor5Xor5XlkKcnO1xuXHRcdH1cblx0XHRmb3IgKGNvbnN0IGVsIG9mIHN1bW1hcnkpIHtcblx0XHRcdGVsLmlubmVySFRNTCA9IGV4dHJhY3Q7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ+iOt+WPluaRmOimgeaXtuWHuumUmTonLCBlcnJvcik7XG5cdFx0Zm9yIChjb25zdCBlbCBvZiBzdW1tYXJ5KSB7XG5cdFx0XHRlbC5pbm5lckhUTUwgPSAn5Yqg6L295aSx6LSlUVdR77yM5Yi35paw6K+V6K+V5ZCnJztcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxpYlN1bW1hcnk7XG4iLCAiaW1wb3J0IHtsaWJIZWFkZXIsIHNlYXJjaEluamVjdGlvbn0gZnJvbSAnLi9tb2R1bGVzL2luZGV4LWhlYWRlcic7XG5pbXBvcnQgbGliU3VtbWFyeSBmcm9tICcuL21vZHVsZXMvc3VtbWFyeSc7XG5cbihhc3luYyAoKSA9PiB7XG5cdGxpYkhlYWRlcigpO1xuXHRzZWFyY2hJbmplY3Rpb24oKTtcblx0YXdhaXQgbGliU3VtbWFyeSgpO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LFVBQUFLLGFBQUE1RSwyQkFDaUJvRCxPQUFBLEdBQUF5QjtBQUFBLFVBQUE7QUFBakIsYUFBQUQsV0FBQTFFLEVBQUEsR0FBQSxFQUFBMkUsU0FBQUQsV0FBQXpFLEVBQUEsR0FBQUMsUUFBMEI7QUFBQSxnQkFBZjBFLEtBQUFELE9BQUF4RTtBQUNWeUUsYUFBRzlELFlBQVl1RDtRQUNoQjtNQUFBLFNBQUE5RCxLQUFBO0FBQUFtRSxtQkFBQWxFLEVBQUFELEdBQUE7TUFBQSxVQUFBO0FBQUFtRSxtQkFBQWpFLEVBQUE7TUFBQTtJQUNELFNBQVNvRSxPQUFPO0FBQ2ZDLGNBQVFELE1BQU0sWUFBWUEsS0FBSztBQUFBLFVBQUFFLGFBQUFqRiwyQkFDZG9ELE9BQUEsR0FBQThCO0FBQUEsVUFBQTtBQUFqQixhQUFBRCxXQUFBL0UsRUFBQSxHQUFBLEVBQUFnRixTQUFBRCxXQUFBOUUsRUFBQSxHQUFBQyxRQUEwQjtBQUFBLGdCQUFmMEUsS0FBQUksT0FBQTdFO0FBQ1Z5RSxhQUFHOUQsWUFBWTtRQUNoQjtNQUFBLFNBQUFQLEtBQUE7QUFBQXdFLG1CQUFBdkUsRUFBQUQsR0FBQTtNQUFBLFVBQUE7QUFBQXdFLG1CQUFBdEUsRUFBQTtNQUFBO0lBQ0Q7RUFDRCxDQUFBO0FBQUEsU0FBQSxTQXRDTXNDLGNBQUE7QUFBQSxXQUFBQyxLQUFBaUMsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxHQUFBO0FBd0NOLElBQU9DLGtCQUFRcEM7O2tCQ3JEZCxhQUFZO0FBQ1pyRCxZQUFVO0FBQ1ZnQixrQkFBZ0I7QUFDaEIsUUFBTXlFLGdCQUFXO0FBQ2xCLENBQUEsRUFBRzsiLAogICJuYW1lcyI6IFsiYW5pbWF0ZU51bWJlciIsICJzdGFydCIsICJlbmQiLCAiZHVyYXRpb24iLCAiZWxlbWVudCIsICJzdGFydFRpbWUiLCAiZmlyc3RGcmFtZVJlbmRlcmVkIiwgImRhdGFzZXQiLCAiaW5qZWN0SGlkaW5nU3R5bGVPbmNlIiwgInVwZGF0ZSIsICJjdXJyZW50VGltZSIsICJ0aW1lRWxhcHNlZCIsICJsaW5lYXJQcm9ncmVzcyIsICJNYXRoIiwgIm1pbiIsICJlYXNlZFByb2dyZXNzIiwgImN1cnJlbnROdW1iZXIiLCAiZmxvb3IiLCAidGV4dENvbnRlbnQiLCAidG9Mb2NhbGVTdHJpbmciLCAicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwgImFuaW1hdGVOdW1iZXJTdHlsZUluamVjdGVkIiwgInN0eWxlIiwgImRvY3VtZW50IiwgImNyZWF0ZUVsZW1lbnQiLCAiaGVhZCIsICJhcHBlbmQiLCAiYW5pbWF0ZU51bWJlcl9kZWZhdWx0IiwgImxpYkhlYWRlciIsICJlbGVtZW50cyIsICJxdWVyeVNlbGVjdG9yQWxsIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJ2YWx1ZSIsICJOdW1iZXIiLCAicGFyc2VJbnQiLCAicmVwbGFjZSIsICJlcnIiLCAiZSIsICJmIiwgInNlYXJjaEluamVjdGlvbiIsICJTZWFyY2hGb3JtSFRNTCIsICJTZWFyY2giLCAicXVlcnlTZWxlY3RvciIsICJpbm5lckhUTUwiLCAiZ2V0UHJldmlvdXNPZGRXZWVrIiwgIm5vdyIsICJEYXRlIiwgInRvZGF5VVRDIiwgIlVUQyIsICJnZXRGdWxsWWVhciIsICJnZXRNb250aCIsICJnZXREYXRlIiwgInRodXJzZGF5VVRDIiwgInNldFVUQ0RhdGUiLCAiZ2V0VVRDRGF0ZSIsICJnZXRVVENEYXkiLCAieWVhclN0YXJ0IiwgImdldFVUQ0Z1bGxZZWFyIiwgInRpbWVEaWZmIiwgImdldFRpbWUiLCAiZGF5c0RpZmYiLCAiY3VycmVudFdlZWsiLCAiY2VpbCIsICJwcmV2aW91c09kZFdlZWsiLCAibGFzdFllYXJFbmQiLCAibGFzdFllYXJTdGFydCIsICJsYXN0WWVhcldlZWtzIiwgImdldE1vbnRoRnJvbVdlZWsiLCAieWVhciIsICJ3ZWVrIiwgImZpcnN0RGF5T2ZZZWFyIiwgImZpcnN0VGh1cnNkYXkiLCAic2V0RGF0ZSIsICJnZXREYXkiLCAid2Vla1N0YXJ0IiwgIm1pZGRsZU9mV2VlayIsICJsaWJTdW1tYXJ5IiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAic3VtbWFyeSIsICJsZW5ndGgiLCAiayIsICJkIiwgInRpdGxlU3RyIiwgImNvbmNhdCIsICJ1cmwiLCAiYSIsICJmZXRjaCIsICJyZXMiLCAianNvbiIsICJwYWdlS2V5cyIsICJPYmplY3QiLCAia2V5cyIsICJxdWVyeSIsICJwYWdlcyIsICJzdW1tYXJ5VXJsSHRtbCIsICJwYWdlS2V5IiwgInBhZ2UiLCAiZXh0cmFjdCIsICJhbGxQVGFnIiwgIm1hdGNoIiwgIm1hdGNoQ2hhcmFjdGVycyIsICJhdCIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJlbCIsICJlcnJvciIsICJjb25zb2xlIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJzdW1tYXJ5X2RlZmF1bHQiXQp9Cg==
