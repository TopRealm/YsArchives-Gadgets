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
  const SearchFormHTML = '<form name="bodySearch0.048433246538" id="bodySearch0.048433246538" class="search-input bodySearch mw-inputbox-inline" action="/wiki/Special:%E6%90%9C%E7%B4%A2">\n	<input name="search" class="mw-searchInput mw-ui-input mw-ui-input-inline" size="50" id="bodySearchInput0.048433246538" dir="ltr" placeholder="搜索有兽档案馆" aria-label="搜索有兽档案馆">\n	<button type="submit" name="go" class="search-input-icon filter mw-ui-button"><i></i></button>\n	<i class="search-input-border"></i>\n	</form>';
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL01haW5wYWdlX0pTL21vZHVsZXMvdXRpbC9hbmltYXRlTnVtYmVyLnRzIiwgIi4uLy4uL3NyYy9NYWlucGFnZV9KUy9tb2R1bGVzL2luZGV4LWhlYWRlci50cyIsICIuLi8uLi9zcmMvTWFpbnBhZ2VfSlMvbW9kdWxlcy91dGlsL2RhdGVMb29rdXAudHMiLCAiLi4vLi4vc3JjL01haW5wYWdlX0pTL21vZHVsZXMvc3VtbWFyeS50cyIsICIuLi8uLi9zcmMvTWFpbnBhZ2VfSlMvTWFpbnBhZ2UudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qXG4gKiBAY29kaW5nOiBVVEYtOFxuICogQEF1dGhvcjogQXdBamllXG4gKiBARGF0ZTogMjAyNS0wMy0wMSAwMTowMTo1NVxuICovXG5jb25zdCBhbmltYXRlTnVtYmVyID0gZnVuY3Rpb24gKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyLCBlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuXHRsZXQgc3RhcnRUaW1lOiBudW1iZXIgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdCB1cGRhdGUgPSAoY3VycmVudFRpbWU6IERPTUhpZ2hSZXNUaW1lU3RhbXApOiB2b2lkID0+IHtcblx0XHRzdGFydFRpbWUgfHw9IGN1cnJlbnRUaW1lO1xuXHRcdGNvbnN0IHRpbWVFbGFwc2VkID0gY3VycmVudFRpbWUgLSBzdGFydFRpbWU7XG5cdFx0Y29uc3QgcHJvZ3Jlc3MgPSBNYXRoLm1pbih0aW1lRWxhcHNlZCAvIGR1cmF0aW9uLCAxKTtcblx0XHRjb25zdCBjdXJyZW50TnVtYmVyID0gTWF0aC5mbG9vcihwcm9ncmVzcyAqIChlbmQgLSBzdGFydCkgKyBzdGFydCk7XG5cblx0XHRlbGVtZW50LnRleHRDb250ZW50ID0gY3VycmVudE51bWJlci50b1N0cmluZygpO1xuXG5cdFx0aWYgKHByb2dyZXNzIDwgMSkge1xuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XG5cdFx0fVxuXHR9O1xuXG5cdHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYW5pbWF0ZU51bWJlcjtcbiIsICJpbXBvcnQgYW5pbWF0ZU51bWJlciBmcm9tICcuL3V0aWwvYW5pbWF0ZU51bWJlcic7XG5jb25zdCBsaWJIZWFkZXIgPSAoKSA9PiB7XG5cdGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnZhbHVlJyk7XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG5cdFx0Y29uc3Qgc3RhcnQgPSAwO1xuXHRcdGNvbnN0IGVuZCA9IE51bWJlci5wYXJzZUludCgoZWxlbWVudC50ZXh0Q29udGVudCB8fCAnMCcpLnJlcGxhY2UoL1suLC8jISQlXiYqOzp7fT1cXC1fYH4oKV0vZywgJycpIHx8ICcwJywgMTApO1xuXHRcdGNvbnN0IGR1cmF0aW9uID0gMTUwMDtcblx0XHRhbmltYXRlTnVtYmVyKHN0YXJ0LCBlbmQsIGR1cmF0aW9uLCBlbGVtZW50IGFzIEhUTUxFbGVtZW50KTtcblx0fVxufTtcblxuY29uc3Qgc2VhcmNoSW5qZWN0aW9uID0gKCkgPT4ge1xuXHRjb25zdCBTZWFyY2hGb3JtSFRNTCA9IGA8Zm9ybSBuYW1lPVwiYm9keVNlYXJjaDAuMDQ4NDMzMjQ2NTM4XCIgaWQ9XCJib2R5U2VhcmNoMC4wNDg0MzMyNDY1MzhcIiBjbGFzcz1cInNlYXJjaC1pbnB1dCBib2R5U2VhcmNoIG13LWlucHV0Ym94LWlubGluZVwiIGFjdGlvbj1cIi93aWtpL1NwZWNpYWw6JUU2JTkwJTlDJUU3JUI0JUEyXCI+XG5cdDxpbnB1dCBuYW1lPVwic2VhcmNoXCIgY2xhc3M9XCJtdy1zZWFyY2hJbnB1dCBtdy11aS1pbnB1dCBtdy11aS1pbnB1dC1pbmxpbmVcIiBzaXplPVwiNTBcIiBpZD1cImJvZHlTZWFyY2hJbnB1dDAuMDQ4NDMzMjQ2NTM4XCIgZGlyPVwibHRyXCIgcGxhY2Vob2xkZXI9XCLmkJzntKLmnInlhb3moaPmoYjppoZcIiBhcmlhLWxhYmVsPVwi5pCc57Si5pyJ5YW95qGj5qGI6aaGXCI+XG5cdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG5hbWU9XCJnb1wiIGNsYXNzPVwic2VhcmNoLWlucHV0LWljb24gZmlsdGVyIG13LXVpLWJ1dHRvblwiPjxpPjwvaT48L2J1dHRvbj5cblx0PGkgY2xhc3M9XCJzZWFyY2gtaW5wdXQtYm9yZGVyXCI+PC9pPlxuXHQ8L2Zvcm0+YDtcblx0Y29uc3QgU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1NlYXJjaCcpO1xuXHRpZiAoU2VhcmNoKSBTZWFyY2guaW5uZXJIVE1MID0gU2VhcmNoRm9ybUhUTUw7XG59O1xuXG5leHBvcnQge2xpYkhlYWRlciwgc2VhcmNoSW5qZWN0aW9ufTtcbiIsICIvKlxuICogQGNvZGluZzogVVRGLThcbiAqIEBBdXRob3I6IEF3QWppZVxuICogQERhdGU6IDIwMjUtMDMtMDEgMDE6MTY6MjBcbiAqL1xuY29uc3QgZ2V0UHJldmlvdXNPZGRXZWVrID0gKCkgPT4ge1xuXHRjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuXHRjb25zdCB0b2RheVVUQyA9IG5ldyBEYXRlKERhdGUuVVRDKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSwgbm93LmdldERhdGUoKSkpO1xuXG5cdGNvbnN0IHRodXJzZGF5VVRDID0gbmV3IERhdGUodG9kYXlVVEMpO1xuXHR0aHVyc2RheVVUQy5zZXRVVENEYXRlKHRvZGF5VVRDLmdldFVUQ0RhdGUoKSArIDQgLSAodG9kYXlVVEMuZ2V0VVRDRGF5KCkgfHwgNykpO1xuXG5cdGNvbnN0IHllYXJTdGFydCA9IG5ldyBEYXRlKERhdGUuVVRDKHRodXJzZGF5VVRDLmdldFVUQ0Z1bGxZZWFyKCksIDAsIDEpKTtcblxuXHRjb25zdCB0aW1lRGlmZiA9IHRodXJzZGF5VVRDLmdldFRpbWUoKSAtIHllYXJTdGFydC5nZXRUaW1lKCk7XG5cdGNvbnN0IGRheXNEaWZmID0gTWF0aC5mbG9vcih0aW1lRGlmZiAvIDg2XzQwMF8wMDApICsgMTtcblx0Y29uc3QgY3VycmVudFdlZWsgPSBNYXRoLmNlaWwoZGF5c0RpZmYgLyA3KTtcblxuXHRsZXQgcHJldmlvdXNPZGRXZWVrID0gY3VycmVudFdlZWsgJSAyID09PSAxID8gY3VycmVudFdlZWsgLSAyIDogY3VycmVudFdlZWsgLSAzO1xuXG5cdGlmIChwcmV2aW91c09kZFdlZWsgPD0gMCkge1xuXHRcdGNvbnN0IGxhc3RZZWFyRW5kID0gbmV3IERhdGUoRGF0ZS5VVEModGh1cnNkYXlVVEMuZ2V0VVRDRnVsbFllYXIoKSAtIDEsIDExLCAzMSkpO1xuXHRcdGxhc3RZZWFyRW5kLnNldFVUQ0RhdGUobGFzdFllYXJFbmQuZ2V0VVRDRGF0ZSgpICsgNCAtIChsYXN0WWVhckVuZC5nZXRVVENEYXkoKSB8fCA3KSk7XG5cdFx0Y29uc3QgbGFzdFllYXJTdGFydCA9IG5ldyBEYXRlKERhdGUuVVRDKGxhc3RZZWFyRW5kLmdldFVUQ0Z1bGxZZWFyKCksIDAsIDEpKTtcblx0XHRjb25zdCBsYXN0WWVhcldlZWtzID0gTWF0aC5jZWlsKChsYXN0WWVhckVuZC5nZXRUaW1lKCkgLSBsYXN0WWVhclN0YXJ0LmdldFRpbWUoKSkgLyA2MDRfODAwXzAwMCk7XG5cdFx0cHJldmlvdXNPZGRXZWVrID0gbGFzdFllYXJXZWVrcyAlIDIgPT09IDEgPyBsYXN0WWVhcldlZWtzIDogbGFzdFllYXJXZWVrcyAtIDE7XG5cdH1cblxuXHRyZXR1cm4gcHJldmlvdXNPZGRXZWVrO1xufTtcblxuY29uc3QgZ2V0TW9udGhGcm9tV2VlayA9ICh5ZWFyOiBudW1iZXIsIHdlZWs6IG51bWJlcikgPT4ge1xuXHRjb25zdCBmaXJzdERheU9mWWVhciA9IG5ldyBEYXRlKHllYXIsIDAsIDEpO1xuXHRjb25zdCBmaXJzdFRodXJzZGF5ID0gbmV3IERhdGUoZmlyc3REYXlPZlllYXIpO1xuXHRmaXJzdFRodXJzZGF5LnNldERhdGUoZmlyc3REYXlPZlllYXIuZ2V0RGF0ZSgpICsgKCg0IC0gZmlyc3REYXlPZlllYXIuZ2V0RGF5KCkgKyA3KSAlIDcpKTtcblx0Y29uc3Qgd2Vla1N0YXJ0ID0gbmV3IERhdGUoZmlyc3RUaHVyc2RheSk7XG5cdHdlZWtTdGFydC5zZXREYXRlKGZpcnN0VGh1cnNkYXkuZ2V0RGF0ZSgpICsgKHdlZWsgLSAxKSAqIDcgLSAzKTtcblx0Y29uc3QgbWlkZGxlT2ZXZWVrID0gbmV3IERhdGUod2Vla1N0YXJ0KTtcblx0bWlkZGxlT2ZXZWVrLnNldERhdGUod2Vla1N0YXJ0LmdldERhdGUoKSArIDMpO1xuXHRyZXR1cm4gbWlkZGxlT2ZXZWVrLmdldE1vbnRoKCkgKyAxO1xufTtcblxuZXhwb3J0IHtnZXRNb250aEZyb21XZWVrLCBnZXRQcmV2aW91c09kZFdlZWt9O1xuIiwgIi8qXG4gKiBAY29kaW5nOiBVVEYtOFxuICogQEF1dGhvcjogQXdBamllXG4gKiBARGF0ZTogMjAyNS0wMy0wMSAwMToxMzoxMVxuICovXG5pbXBvcnQge2dldE1vbnRoRnJvbVdlZWssIGdldFByZXZpb3VzT2RkV2Vla30gZnJvbSAnLi91dGlsL2RhdGVMb29rdXAnO1xuXG5pbnRlcmZhY2UgUmVzIHtcblx0cXVlcnk6IHtcblx0XHRwYWdlczoge1xuXHRcdFx0W2tleTogc3RyaW5nXToge1xuXHRcdFx0XHRleHRyYWN0Pzogc3RyaW5nO1xuXHRcdFx0fTtcblx0XHR9O1xuXHR9O1xufVxuY29uc3QgbGliU3VtbWFyeSA9IGFzeW5jICgpID0+IHtcblx0Y29uc3Qgc3VtbWFyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdW1tYXJ5Jyk7XG5cdGlmICghc3VtbWFyeS5sZW5ndGgpIHJldHVybjtcblxuXHRjb25zdCBrID0gZ2V0UHJldmlvdXNPZGRXZWVrKCk7XG5cdGNvbnN0IGQgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG5cdGNvbnN0IHRpdGxlU3RyID0gYOacieWFveaho+ahiOmmhjrmoaPmoYjppoblj4zlkajmiqUvJHtkfeW5tCR7Z2V0TW9udGhGcm9tV2VlayhkLCBrICsgMSl95pyIL+esrCR7a30tJHtrICsgMX3lkahgO1xuXHRjb25zdCB1cmwgPSBgL2FwaS5waHA/YWN0aW9uPXF1ZXJ5JnByb3A9ZXh0cmFjdHMmZXhzZWN0aW9uZm9ybWF0PXBsYWluJmV4Y2hhcnM9MTc1JmZvcm1hdD1qc29uJnRpdGxlcz0ke3RpdGxlU3RyfS9zdW1tYXJ5YDtcblx0dHJ5IHtcblx0XHRjb25zdCBhID0gYXdhaXQgZmV0Y2godXJsKTtcblx0XHRjb25zdCByZXMgPSAoYXdhaXQgYS5qc29uKCkpIGFzIFJlcztcblx0XHRjb25zdCBwYWdlS2V5cyA9IE9iamVjdC5rZXlzKHJlcy5xdWVyeS5wYWdlcyk7XG5cblx0XHRjb25zdCBzdW1tYXJ5VXJsSHRtbCA9IGA8YSBocmVmPVwiaHR0cHM6Ly95b3VzaG91Lndpa2kvd2lraS8ke3RpdGxlU3RyfVwiPuabtOWkmua2iOaBr++8jOivt+afpemYheacrOacn+WPjOWRqOaKpeivpue7huS/oeaBrzwvYT5gO1xuXHRcdGNvbnN0IHtwYWdlc30gPSByZXMucXVlcnk7XG5cdFx0Y29uc3QgW3BhZ2VLZXldID0gcGFnZUtleXM7XG5cblx0XHRjb25zdCBwYWdlID0gcGFnZUtleSA/IHBhZ2VzW3BhZ2VLZXldIDogdW5kZWZpbmVkO1xuXHRcdGxldCBleHRyYWN0OiBzdHJpbmc7XG5cdFx0aWYgKHBhZ2UpIHtcblx0XHRcdGV4dHJhY3QgPVxuXHRcdFx0XHRwYWdlICYmIHBhZ2UuZXh0cmFjdFxuXHRcdFx0XHRcdD8gcGFnZS5leHRyYWN0LnJlcGxhY2UoJ+abtOWkmua2iOaBr++8jOivt+afpemYheacrOacn+WPjOWRqOaKpeivpue7huS/oeaBrycsIHN1bW1hcnlVcmxIdG1sKS5yZXBsYWNlKC/igKYkL2csICcnKVxuXHRcdFx0XHRcdDogJyc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGV4dHJhY3QgPSAn5Yqg6L295aSx6LSlUVdR77yM5Yi35paw6K+V6K+V5ZCnJztcblx0XHR9XG5cdFx0Zm9yIChjb25zdCBlbCBvZiBzdW1tYXJ5KSB7XG5cdFx0XHRlbC5pbm5lckhUTUwgPSBleHRyYWN0O1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKCfojrflj5bmkZjopoHml7blh7rplJk6JywgZXJyb3IpO1xuXHRcdGZvciAoY29uc3QgZWwgb2Ygc3VtbWFyeSkge1xuXHRcdFx0ZWwuaW5uZXJIVE1MID0gJ+WKoOi9veWksei0pVFXUe+8jOWIt+aWsOivleivleWQpyc7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsaWJTdW1tYXJ5O1xuIiwgImltcG9ydCB7bGliSGVhZGVyLCBzZWFyY2hJbmplY3Rpb259IGZyb20gJy4vbW9kdWxlcy9pbmRleC1oZWFkZXInO1xuaW1wb3J0IGxpYlN1bW1hcnkgZnJvbSAnLi9tb2R1bGVzL3N1bW1hcnknO1xuXG4oYXN5bmMgKCkgPT4ge1xuXHRsaWJIZWFkZXIoKTtcblx0c2VhcmNoSW5qZWN0aW9uKCk7XG5cdGF3YWl0IGxpYlN1bW1hcnkoKTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQSxJQUFNQSxnQkFBZ0IsU0FBVUMsT0FBZUMsS0FBYUMsVUFBa0JDLFNBQTRCO0FBQ3pHLE1BQUlDLFlBQTJCO0FBRS9CLFFBQU1DLFNBQVVDLGlCQUEyQztBQUMxREYsa0JBQUFBLFlBQWNFO0FBQ2QsVUFBTUMsY0FBY0QsY0FBY0Y7QUFDbEMsVUFBTUksV0FBV0MsS0FBS0MsSUFBSUgsY0FBY0wsVUFBVSxDQUFDO0FBQ25ELFVBQU1TLGdCQUFnQkYsS0FBS0csTUFBTUosWUFBWVAsTUFBTUQsU0FBU0EsS0FBSztBQUVqRUcsWUFBUVUsY0FBY0YsY0FBY0csU0FBUztBQUU3QyxRQUFJTixXQUFXLEdBQUc7QUFDakJPLDRCQUFzQlYsTUFBTTtJ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QUFBLEdBQUFxQjtBQUFBLFVBQUE7QUFBakIsYUFBQUQsV0FBQXRFLEVBQUEsR0FBQSxFQUFBdUUsU0FBQUQsV0FBQXJFLEVBQUEsR0FBQUMsUUFBMEI7QUFBQSxnQkFBZnNFLEtBQUFELE9BQUFwRTtBQUNWcUUsYUFBRzFELFlBQVl1RDtRQUNoQjtNQUFBLFNBQUE5RCxLQUFBO0FBQUErRCxtQkFBQTlELEVBQUFELEdBQUE7TUFBQSxVQUFBO0FBQUErRCxtQkFBQTdELEVBQUE7TUFBQTtJQUNELFNBQVNnRSxPQUFPO0FBQ2ZDLGNBQVFELE1BQU0sWUFBWUEsS0FBSztBQUFBLFVBQUFFLGFBQUE3RSwyQkFDZG9ELE9BQUEsR0FBQTBCO0FBQUEsVUFBQTtBQUFqQixhQUFBRCxXQUFBM0UsRUFBQSxHQUFBLEVBQUE0RSxTQUFBRCxXQUFBMUUsRUFBQSxHQUFBQyxRQUEwQjtBQUFBLGdCQUFmc0UsS0FBQUksT0FBQXpFO0FBQ1ZxRSxhQUFHMUQsWUFBWTtRQUNoQjtNQUFBLFNBQUFQLEtBQUE7QUFBQW9FLG1CQUFBbkUsRUFBQUQsR0FBQTtNQUFBLFVBQUE7QUFBQW9FLG1CQUFBbEUsRUFBQTtNQUFBO0lBQ0Q7RUFDRCxDQUFBO0FBQUEsU0FBQSxTQXBDTXNDLGNBQUE7QUFBQSxXQUFBQyxLQUFBNkIsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBO0FBc0NOLElBQU9DLGtCQUFRaEM7O2tCQ25EZCxhQUFZO0FBQ1p0RCxZQUFVO0FBQ1ZpQixrQkFBZ0I7QUFDaEIsUUFBTXFFLGdCQUFXO0FBQ2xCLENBQUEsRUFBRzsiLAogICJuYW1lcyI6IFsiYW5pbWF0ZU51bWJlciIsICJzdGFydCIsICJlbmQiLCAiZHVyYXRpb24iLCAiZWxlbWVudCIsICJzdGFydFRpbWUiLCAidXBkYXRlIiwgImN1cnJlbnRUaW1lIiwgInRpbWVFbGFwc2VkIiwgInByb2dyZXNzIiwgIk1hdGgiLCAibWluIiwgImN1cnJlbnROdW1iZXIiLCAiZmxvb3IiLCAidGV4dENvbnRlbnQiLCAidG9TdHJpbmciLCAicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwgImFuaW1hdGVOdW1iZXJfZGVmYXVsdCIsICJsaWJIZWFkZXIiLCAiZWxlbWVudHMiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvckFsbCIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAidmFsdWUiLCAiTnVtYmVyIiwgInBhcnNlSW50IiwgInJlcGxhY2UiLCAiZXJyIiwgImUiLCAiZiIsICJzZWFyY2hJbmplY3Rpb24iLCAiU2VhcmNoRm9ybUhUTUwiLCAiU2VhcmNoIiwgInF1ZXJ5U2VsZWN0b3IiLCAiaW5uZXJIVE1MIiwgImdldFByZXZpb3VzT2RkV2VlayIsICJub3ciLCAiRGF0ZSIsICJ0b2RheVVUQyIsICJVVEMiLCAiZ2V0RnVsbFllYXIiLCAiZ2V0TW9udGgiLCAiZ2V0RGF0ZSIsICJ0aHVyc2RheVVUQyIsICJzZXRVVENEYXRlIiwgImdldFVUQ0RhdGUiLCAiZ2V0VVRDRGF5IiwgInllYXJTdGFydCIsICJnZXRVVENGdWxsWWVhciIsICJ0aW1lRGlmZiIsICJnZXRUaW1lIiwgImRheXNEaWZmIiwgImN1cnJlbnRXZWVrIiwgImNlaWwiLCAicHJldmlvdXNPZGRXZWVrIiwgImxhc3RZZWFyRW5kIiwgImxhc3RZZWFyU3RhcnQiLCAibGFzdFllYXJXZWVrcyIsICJnZXRNb250aEZyb21XZWVrIiwgInllYXIiLCAid2VlayIsICJmaXJzdERheU9mWWVhciIsICJmaXJzdFRodXJzZGF5IiwgInNldERhdGUiLCAiZ2V0RGF5IiwgIndlZWtTdGFydCIsICJtaWRkbGVPZldlZWsiLCAibGliU3VtbWFyeSIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInN1bW1hcnkiLCAibGVuZ3RoIiwgImsiLCAiZCIsICJ0aXRsZVN0ciIsICJjb25jYXQiLCAidXJsIiwgImEiLCAiZmV0Y2giLCAicmVzIiwgImpzb24iLCAicGFnZUtleXMiLCAiT2JqZWN0IiwgImtleXMiLCAicXVlcnkiLCAicGFnZXMiLCAic3VtbWFyeVVybEh0bWwiLCAicGFnZUtleSIsICJwYWdlIiwgImV4dHJhY3QiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAiZWwiLCAiZXJyb3IiLCAiY29uc29sZSIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJhcHBseSIsICJhcmd1bWVudHMiLCAic3VtbWFyeV9kZWZhdWx0Il0KfQo=
