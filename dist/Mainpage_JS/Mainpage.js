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
var initDB = () => {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open("LIBDB", 3);
    request.onsuccess = (event) => {
      if (!event.target) return;
      const target = event.target;
      if (!target) return;
      const db = target.result;
      resolve(db);
    };
    request.onupgradeneeded = function(event) {
      if (!event.target) return;
      const target = event.target;
      if (!target) return;
      const db = target.result;
      if (!db.objectStoreNames.contains("summary")) {
        db.createObjectStore("summary", {
          keyPath: "date"
        });
      }
    };
    request.addEventListener("error", () => {
      reject(new Error("Database failed to open"));
    });
  });
};
var dbset = (db, value) => {
  const transaction = db.transaction(["summary"], "readwrite");
  const objectStore = transaction.objectStore("summary");
  objectStore.put(value);
};
var dbget = (db, key) => {
  return new Promise((resolve, reject) => {
    const request = db.transaction("summary", "readonly").objectStore("summary").get(key);
    request.onsuccess = (event) => {
      if (!event.target) return;
      const target = event.target;
      resolve({
        date: target.result.date,
        data: target.result.data
      });
    };
    request.addEventListener("error", () => {
      reject(new Error("Database operation failed"));
    });
  });
};
var renderSummary = (summary, extract) => {
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
};
var getSummaryHTMLData = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (summary, url, titleStr) {
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
    renderSummary(summary, extract);
    return extract;
  });
  return function getSummaryHTMLData2(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var libSummary = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* () {
    const summary = document.querySelectorAll(".summary");
    if (!summary.length) return;
    const k = getPreviousOddWeek();
    const d = (/* @__PURE__ */ new Date()).getFullYear();
    const titleStr = "有兽档案馆:档案馆双周报/".concat(d, "年").concat(getMonthFromWeek(d, k + 1), "月/第").concat(k, "-").concat(k + 1, "周");
    const url = "/api.php?action=query&prop=extracts&exsectionformat=plain&exchars=1200&format=json&titles=".concat(titleStr, "/summary");
    if (!("indexedDB" in window)) {
      const extract = yield getSummaryHTMLData(summary, url, titleStr);
      renderSummary(summary, extract);
      return;
    }
    const db = yield initDB();
    try {
      const cachedData = yield dbget(db, "".concat(d, "-").concat(k));
      if (cachedData.date === "".concat(d, "-").concat(getMonthFromWeek(d, k + 1), "/").concat(k, "-").concat(k + 1)) {
        renderSummary(summary, cachedData.data);
      }
    } catch {
      const extract = yield getSummaryHTMLData(summary, url, titleStr);
      if (extract === "加载失败QWQ，刷新试试吧") {
        renderSummary(summary, extract);
      } else if (extract && typeof extract === "string") {
        dbset(db, {
          date: "".concat(d, "-").concat(getMonthFromWeek(d, k + 1), "/").concat(k, "-").concat(k + 1),
          data: extract
        });
        renderSummary(summary, extract);
      }
    }
  });
  return function libSummary2() {
    return _ref2.apply(this, arguments);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01haW5wYWdlX0pTL21vZHVsZXMvdXRpbC9hbmltYXRlTnVtYmVyLnRzIiwgInNyYy9NYWlucGFnZV9KUy9tb2R1bGVzL2luZGV4LWhlYWRlci50cyIsICJzcmMvTWFpbnBhZ2VfSlMvbW9kdWxlcy91dGlsL2RhdGVMb29rdXAudHMiLCAic3JjL01haW5wYWdlX0pTL21vZHVsZXMvc3VtbWFyeS50cyIsICJzcmMvTWFpbnBhZ2VfSlMvTWFpbnBhZ2UudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qXG4gKiBAY29kaW5nOiBVVEYtOFxuICogQEF1dGhvcjogQXdBamllXG4gKiBARGF0ZTogMjAyNS0wMy0wMSAwMTowMTo1NVxuICovXG5jb25zdCBhbmltYXRlTnVtYmVyID0gZnVuY3Rpb24gKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyLCBlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuXHRsZXQgc3RhcnRUaW1lOiBudW1iZXIgfCBudWxsID0gbnVsbDtcblxuXHRjb25zdCB1cGRhdGUgPSAoY3VycmVudFRpbWU6IERPTUhpZ2hSZXNUaW1lU3RhbXApOiB2b2lkID0+IHtcblx0XHRzdGFydFRpbWUgfHw9IGN1cnJlbnRUaW1lO1xuXHRcdGNvbnN0IHRpbWVFbGFwc2VkID0gY3VycmVudFRpbWUgLSBzdGFydFRpbWU7XG5cdFx0Y29uc3QgcHJvZ3Jlc3MgPSBNYXRoLm1pbih0aW1lRWxhcHNlZCAvIGR1cmF0aW9uLCAxKTtcblx0XHRjb25zdCBjdXJyZW50TnVtYmVyID0gTWF0aC5mbG9vcihwcm9ncmVzcyAqIChlbmQgLSBzdGFydCkgKyBzdGFydCk7XG5cblx0XHRlbGVtZW50LnRleHRDb250ZW50ID0gY3VycmVudE51bWJlci50b1N0cmluZygpO1xuXG5cdFx0aWYgKHByb2dyZXNzIDwgMSkge1xuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XG5cdFx0fVxuXHR9O1xuXG5cdHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYW5pbWF0ZU51bWJlcjtcbiIsICJpbXBvcnQgYW5pbWF0ZU51bWJlciBmcm9tICcuL3V0aWwvYW5pbWF0ZU51bWJlcic7XG5jb25zdCBsaWJIZWFkZXIgPSAoKSA9PiB7XG5cdGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnZhbHVlJyk7XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG5cdFx0Y29uc3Qgc3RhcnQgPSAwO1xuXHRcdGNvbnN0IGVuZCA9IE51bWJlci5wYXJzZUludCgoZWxlbWVudC50ZXh0Q29udGVudCB8fCAnMCcpLnJlcGxhY2UoL1suLC8jISQlXiYqOzp7fT1cXC1fYH4oKV0vZywgJycpIHx8ICcwJywgMTApO1xuXHRcdGNvbnN0IGR1cmF0aW9uID0gMTUwMDtcblx0XHRhbmltYXRlTnVtYmVyKHN0YXJ0LCBlbmQsIGR1cmF0aW9uLCBlbGVtZW50IGFzIEhUTUxFbGVtZW50KTtcblx0fVxufTtcblxuY29uc3Qgc2VhcmNoSW5qZWN0aW9uID0gKCkgPT4ge1xuXHRjb25zdCBTZWFyY2hGb3JtSFRNTCA9IGA8Zm9ybSBuYW1lPVwiYm9keVNlYXJjaDAuMDQ4NDMzMjQ2NTM4XCIgaWQ9XCJib2R5U2VhcmNoMC4wNDg0MzMyNDY1MzhcIiBjbGFzcz1cInNlYXJjaC1pbnB1dCBib2R5U2VhcmNoIG13LWlucHV0Ym94LWlubGluZVwiIGFjdGlvbj1cIi93aWtpL1NwZWNpYWw6JUU2JTkwJTlDJUU3JUI0JUEyXCI+XG5cdDxpbnB1dCBuYW1lPVwic2VhcmNoXCIgY2xhc3M9XCJtdy1zZWFyY2hJbnB1dCBtdy11aS1pbnB1dCBtdy11aS1pbnB1dC1pbmxpbmVcIiBzaXplPVwiNTBcIiBpZD1cImJvZHlTZWFyY2hJbnB1dDAuMDQ4NDMzMjQ2NTM4XCIgZGlyPVwibHRyXCIgcGxhY2Vob2xkZXI9XCLmkJzntKLmnInlhb3moaPmoYjppoZcIiBhcmlhLWxhYmVsPVwi5pCc57Si5pyJ5YW95qGj5qGI6aaGXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCI+XG5cdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG5hbWU9XCJnb1wiIGNsYXNzPVwic2VhcmNoLWlucHV0LWljb24gaW5kZXgtSW52ZXJ0ZWQtY29sb3ItZmlsdGVyXCI+PGk+PC9pPjwvYnV0dG9uPlxuXHQ8aSBjbGFzcz1cInNlYXJjaC1pbnB1dC1ib3JkZXJcIj48L2k+XG5cdDwvZm9ybT5gO1xuXHRjb25zdCBTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjU2VhcmNoJyk7XG5cdGlmIChTZWFyY2gpIFNlYXJjaC5pbm5lckhUTUwgPSBTZWFyY2hGb3JtSFRNTDtcbn07XG5cbmV4cG9ydCB7bGliSGVhZGVyLCBzZWFyY2hJbmplY3Rpb259O1xuIiwgIi8qXG4gKiBAY29kaW5nOiBVVEYtOFxuICogQEF1dGhvcjogQXdBamllXG4gKiBARGF0ZTogMjAyNS0wMy0wMSAwMToxNjoyMFxuICovXG5jb25zdCBnZXRQcmV2aW91c09kZFdlZWsgPSAoKSA9PiB7XG5cdGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG5cdGNvbnN0IHRvZGF5VVRDID0gbmV3IERhdGUoRGF0ZS5VVEMobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpLCBub3cuZ2V0RGF0ZSgpKSk7XG5cblx0Y29uc3QgdGh1cnNkYXlVVEMgPSBuZXcgRGF0ZSh0b2RheVVUQyk7XG5cdHRodXJzZGF5VVRDLnNldFVUQ0RhdGUodG9kYXlVVEMuZ2V0VVRDRGF0ZSgpICsgNCAtICh0b2RheVVUQy5nZXRVVENEYXkoKSB8fCA3KSk7XG5cblx0Y29uc3QgeWVhclN0YXJ0ID0gbmV3IERhdGUoRGF0ZS5VVEModGh1cnNkYXlVVEMuZ2V0VVRDRnVsbFllYXIoKSwgMCwgMSkpO1xuXG5cdGNvbnN0IHRpbWVEaWZmID0gdGh1cnNkYXlVVEMuZ2V0VGltZSgpIC0geWVhclN0YXJ0LmdldFRpbWUoKTtcblx0Y29uc3QgZGF5c0RpZmYgPSBNYXRoLmZsb29yKHRpbWVEaWZmIC8gODZfNDAwXzAwMCkgKyAxO1xuXHRjb25zdCBjdXJyZW50V2VlayA9IE1hdGguY2VpbChkYXlzRGlmZiAvIDcpO1xuXG5cdGxldCBwcmV2aW91c09kZFdlZWsgPSBjdXJyZW50V2VlayAlIDIgPT09IDEgPyBjdXJyZW50V2VlayAtIDIgOiBjdXJyZW50V2VlayAtIDM7XG5cblx0aWYgKHByZXZpb3VzT2RkV2VlayA8PSAwKSB7XG5cdFx0Y29uc3QgbGFzdFllYXJFbmQgPSBuZXcgRGF0ZShEYXRlLlVUQyh0aHVyc2RheVVUQy5nZXRVVENGdWxsWWVhcigpIC0gMSwgMTEsIDMxKSk7XG5cdFx0bGFzdFllYXJFbmQuc2V0VVRDRGF0ZShsYXN0WWVhckVuZC5nZXRVVENEYXRlKCkgKyA0IC0gKGxhc3RZZWFyRW5kLmdldFVUQ0RheSgpIHx8IDcpKTtcblx0XHRjb25zdCBsYXN0WWVhclN0YXJ0ID0gbmV3IERhdGUoRGF0ZS5VVEMobGFzdFllYXJFbmQuZ2V0VVRDRnVsbFllYXIoKSwgMCwgMSkpO1xuXHRcdGNvbnN0IGxhc3RZZWFyV2Vla3MgPSBNYXRoLmNlaWwoKGxhc3RZZWFyRW5kLmdldFRpbWUoKSAtIGxhc3RZZWFyU3RhcnQuZ2V0VGltZSgpKSAvIDYwNF84MDBfMDAwKTtcblx0XHRwcmV2aW91c09kZFdlZWsgPSBsYXN0WWVhcldlZWtzICUgMiA9PT0gMSA/IGxhc3RZZWFyV2Vla3MgOiBsYXN0WWVhcldlZWtzIC0gMTtcblx0fVxuXG5cdHJldHVybiBwcmV2aW91c09kZFdlZWs7XG59O1xuXG5jb25zdCBnZXRNb250aEZyb21XZWVrID0gKHllYXI6IG51bWJlciwgd2VlazogbnVtYmVyKSA9PiB7XG5cdGNvbnN0IGZpcnN0RGF5T2ZZZWFyID0gbmV3IERhdGUoeWVhciwgMCwgMSk7XG5cdGNvbnN0IGZpcnN0VGh1cnNkYXkgPSBuZXcgRGF0ZShmaXJzdERheU9mWWVhcik7XG5cdGZpcnN0VGh1cnNkYXkuc2V0RGF0ZShmaXJzdERheU9mWWVhci5nZXREYXRlKCkgKyAoKDQgLSBmaXJzdERheU9mWWVhci5nZXREYXkoKSArIDcpICUgNykpO1xuXHRjb25zdCB3ZWVrU3RhcnQgPSBuZXcgRGF0ZShmaXJzdFRodXJzZGF5KTtcblx0d2Vla1N0YXJ0LnNldERhdGUoZmlyc3RUaHVyc2RheS5nZXREYXRlKCkgKyAod2VlayAtIDEpICogNyAtIDMpO1xuXHRjb25zdCBtaWRkbGVPZldlZWsgPSBuZXcgRGF0ZSh3ZWVrU3RhcnQpO1xuXHRtaWRkbGVPZldlZWsuc2V0RGF0ZSh3ZWVrU3RhcnQuZ2V0RGF0ZSgpICsgMyk7XG5cdHJldHVybiBtaWRkbGVPZldlZWsuZ2V0TW9udGgoKSArIDE7XG59O1xuXG5leHBvcnQge2dldE1vbnRoRnJvbVdlZWssIGdldFByZXZpb3VzT2RkV2Vla307XG4iLCAiLypcbiAqIEBjb2Rpbmc6IFVURi04XG4gKiBAQXV0aG9yOiBBd0FqaWVcbiAqIEBEYXRlOiAyMDI1LTAzLTAxIDAxOjEzOjExXG4gKi9cbmltcG9ydCB7Z2V0TW9udGhGcm9tV2VlaywgZ2V0UHJldmlvdXNPZGRXZWVrfSBmcm9tICcuL3V0aWwvZGF0ZUxvb2t1cCc7XG5cbmludGVyZmFjZSBSZXMge1xuXHRxdWVyeToge1xuXHRcdHBhZ2VzOiB7XG5cdFx0XHRba2V5OiBzdHJpbmddOiB7XG5cdFx0XHRcdGV4dHJhY3Q/OiBzdHJpbmc7XG5cdFx0XHR9O1xuXHRcdH07XG5cdH07XG59XG5cbmNvbnN0IGluaXREQiA9ICgpID0+IHtcblx0cmV0dXJuIG5ldyBQcm9taXNlPElEQkRhdGFiYXNlPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0Y29uc3QgcmVxdWVzdCA9IHdpbmRvdy5pbmRleGVkREIub3BlbignTElCREInLCAzKTtcblx0XHRyZXF1ZXN0Lm9uc3VjY2VzcyA9IChldmVudCkgPT4ge1xuXHRcdFx0aWYgKCFldmVudC50YXJnZXQpIHJldHVybjtcblx0XHRcdGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBJREJPcGVuREJSZXF1ZXN0O1xuXHRcdFx0aWYgKCF0YXJnZXQpIHJldHVybjtcblx0XHRcdGNvbnN0IGRiID0gdGFyZ2V0LnJlc3VsdDtcblx0XHRcdHJlc29sdmUoZGIpO1xuXHRcdH07XG5cdFx0cmVxdWVzdC5vbnVwZ3JhZGVuZWVkZWQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRcdGlmICghZXZlbnQudGFyZ2V0KSByZXR1cm47XG5cdFx0XHRjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSURCT3BlbkRCUmVxdWVzdDtcblx0XHRcdGlmICghdGFyZ2V0KSByZXR1cm47XG5cdFx0XHRjb25zdCBkYiA9IHRhcmdldC5yZXN1bHQ7XG5cdFx0XHRpZiAoIWRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoJ3N1bW1hcnknKSkge1xuXHRcdFx0XHRkYi5jcmVhdGVPYmplY3RTdG9yZSgnc3VtbWFyeScsIHtrZXlQYXRoOiAnZGF0ZSd9KTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG5cdFx0XHRyZWplY3QobmV3IEVycm9yKCdEYXRhYmFzZSBmYWlsZWQgdG8gb3BlbicpKTtcblx0XHR9KTtcblx0fSk7XG59O1xuXG5jb25zdCBkYnNldCA9IChkYjogSURCRGF0YWJhc2UsIHZhbHVlOiB7ZGF0ZTogc3RyaW5nOyBkYXRhOiBzdHJpbmd9KSA9PiB7XG5cdGNvbnN0IHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24oWydzdW1tYXJ5J10sICdyZWFkd3JpdGUnKTtcblx0Y29uc3Qgb2JqZWN0U3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZSgnc3VtbWFyeScpO1xuXHRvYmplY3RTdG9yZS5wdXQodmFsdWUpO1xufTtcblxuY29uc3QgZGJnZXQgPSAoZGI6IElEQkRhdGFiYXNlLCBrZXk6IHN0cmluZyk6IFByb21pc2U8e2RhdGU6IHN0cmluZzsgZGF0YTogc3RyaW5nfT4gPT4ge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdGNvbnN0IHJlcXVlc3QgPSBkYi50cmFuc2FjdGlvbignc3VtbWFyeScsICdyZWFkb25seScpLm9iamVjdFN0b3JlKCdzdW1tYXJ5JykuZ2V0KGtleSk7XG5cdFx0cmVxdWVzdC5vbnN1Y2Nlc3MgPSAoZXZlbnQpID0+IHtcblx0XHRcdGlmICghZXZlbnQudGFyZ2V0KSByZXR1cm47XG5cdFx0XHRjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSURCUmVxdWVzdDtcblx0XHRcdHJlc29sdmUoe1xuXHRcdFx0XHRkYXRlOiB0YXJnZXQucmVzdWx0LmRhdGUgYXMgc3RyaW5nLFxuXHRcdFx0XHRkYXRhOiB0YXJnZXQucmVzdWx0LmRhdGEgYXMgc3RyaW5nLFxuXHRcdFx0fSk7XG5cdFx0fTtcblx0XHRyZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuXHRcdFx0cmVqZWN0KG5ldyBFcnJvcignRGF0YWJhc2Ugb3BlcmF0aW9uIGZhaWxlZCcpKTtcblx0XHR9KTtcblx0fSk7XG59O1xuXG5jb25zdCByZW5kZXJTdW1tYXJ5ID0gKHN1bW1hcnk6IE5vZGVMaXN0T2Y8RWxlbWVudD4sIGV4dHJhY3Q6IHN0cmluZykgPT4ge1xuXHRmb3IgKGNvbnN0IGVsIG9mIHN1bW1hcnkpIHtcblx0XHRlbC5pbm5lckhUTUwgPSBleHRyYWN0O1xuXHR9XG59O1xuXG5jb25zdCBnZXRTdW1tYXJ5SFRNTERhdGEgPSBhc3luYyAoc3VtbWFyeTogTm9kZUxpc3RPZjxFbGVtZW50PiwgdXJsOiBzdHJpbmcsIHRpdGxlU3RyOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4gPT4ge1xuXHRjb25zdCBhID0gYXdhaXQgZmV0Y2godXJsKTtcblx0Y29uc3QgcmVzID0gKGF3YWl0IGEuanNvbigpKSBhcyBSZXM7XG5cdGNvbnN0IHBhZ2VLZXlzID0gT2JqZWN0LmtleXMocmVzLnF1ZXJ5LnBhZ2VzKTtcblx0Y29uc3Qgc3VtbWFyeVVybEh0bWwgPSBgPHA+5pu05aSa5raI5oGv77yMPGEgaHJlZj1cImh0dHBzOi8veW91c2hvdS53aWtpL3dpa2kvJHt0aXRsZVN0cn1cIj7or7fmn6XpmIXmnKzmnJ/lj4zlkajmiqXor6bnu4bkv6Hmga88L2E+PC9wPmA7XG5cdGNvbnN0IHtwYWdlc30gPSByZXMucXVlcnk7XG5cdGNvbnN0IFtwYWdlS2V5XSA9IHBhZ2VLZXlzO1xuXHRjb25zdCBwYWdlID0gcGFnZUtleSA/IHBhZ2VzW3BhZ2VLZXldIDogdW5kZWZpbmVkO1xuXHRsZXQgZXh0cmFjdDogc3RyaW5nO1xuXHRpZiAocGFnZSkge1xuXHRcdGNvbnN0IGFsbFBUYWcgPSBwYWdlLmV4dHJhY3QgPyBwYWdlLmV4dHJhY3QubWF0Y2goLzxwPltcXHNcXFNdKj88XFwvcD4vZykgOiBbXTtcblx0XHRjb25zdCBtYXRjaENoYXJhY3RlcnMgPSBhbGxQVGFnICYmIGFsbFBUYWcubGVuZ3RoID8gYWxsUFRhZy5hdCgtMSkgOiAnJztcblx0XHRleHRyYWN0ID1cblx0XHRcdHBhZ2UgJiYgcGFnZS5leHRyYWN0ID8gcGFnZS5leHRyYWN0LnJlcGxhY2UobWF0Y2hDaGFyYWN0ZXJzIHx8ICcnLCBzdW1tYXJ5VXJsSHRtbCkucmVwbGFjZSgv4oCmJC9nLCAnJykgOiAnJztcblx0fSBlbHNlIHtcblx0XHRleHRyYWN0ID0gJ+WKoOi9veWksei0pVFXUe+8jOWIt+aWsOivleivleWQpyc7XG5cdH1cblx0cmVuZGVyU3VtbWFyeShzdW1tYXJ5LCBleHRyYWN0KTtcblx0cmV0dXJuIGV4dHJhY3Q7XG59O1xuXG5jb25zdCBsaWJTdW1tYXJ5ID0gYXN5bmMgKCkgPT4ge1xuXHRjb25zdCBzdW1tYXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN1bW1hcnknKTtcblx0aWYgKCFzdW1tYXJ5Lmxlbmd0aCkgcmV0dXJuO1xuXG5cdGNvbnN0IGsgPSBnZXRQcmV2aW91c09kZFdlZWsoKTtcblx0Y29uc3QgZCA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcblx0Y29uc3QgdGl0bGVTdHIgPSBg5pyJ5YW95qGj5qGI6aaGOuaho+ahiOmmhuWPjOWRqOaKpS8ke2R95bm0JHtnZXRNb250aEZyb21XZWVrKGQsIGsgKyAxKX3mnIgv56ysJHtrfS0ke2sgKyAxfeWRqGA7XG5cdGNvbnN0IHVybCA9IGAvYXBpLnBocD9hY3Rpb249cXVlcnkmcHJvcD1leHRyYWN0cyZleHNlY3Rpb25mb3JtYXQ9cGxhaW4mZXhjaGFycz0xMjAwJmZvcm1hdD1qc29uJnRpdGxlcz0ke3RpdGxlU3RyfS9zdW1tYXJ5YDtcblxuXHRpZiAoISgnaW5kZXhlZERCJyBpbiB3aW5kb3cpKSB7XG5cdFx0Y29uc3QgZXh0cmFjdCA9IGF3YWl0IGdldFN1bW1hcnlIVE1MRGF0YShzdW1tYXJ5LCB1cmwsIHRpdGxlU3RyKTtcblx0XHRyZW5kZXJTdW1tYXJ5KHN1bW1hcnksIGV4dHJhY3QpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGRiID0gYXdhaXQgaW5pdERCKCk7XG5cblx0dHJ5IHtcblx0XHRjb25zdCBjYWNoZWREYXRhID0gYXdhaXQgZGJnZXQoZGIsIGAke2R9LSR7a31gKTtcblx0XHRpZiAoY2FjaGVkRGF0YS5kYXRlID09PSBgJHtkfS0ke2dldE1vbnRoRnJvbVdlZWsoZCwgayArIDEpfS8ke2t9LSR7ayArIDF9YCkge1xuXHRcdFx0cmVuZGVyU3VtbWFyeShzdW1tYXJ5LCBjYWNoZWREYXRhLmRhdGEpO1xuXHRcdH1cblx0fSBjYXRjaCB7XG5cdFx0Y29uc3QgZXh0cmFjdCA9IGF3YWl0IGdldFN1bW1hcnlIVE1MRGF0YShzdW1tYXJ5LCB1cmwsIHRpdGxlU3RyKTtcblx0XHRpZiAoZXh0cmFjdCA9PT0gJ+WKoOi9veWksei0pVFXUe+8jOWIt+aWsOivleivleWQpycpIHtcblx0XHRcdHJlbmRlclN1bW1hcnkoc3VtbWFyeSwgZXh0cmFjdCk7XG5cdFx0fSBlbHNlIGlmIChleHRyYWN0ICYmIHR5cGVvZiBleHRyYWN0ID09PSAnc3RyaW5nJykge1xuXHRcdFx0ZGJzZXQoZGIsIHtkYXRlOiBgJHtkfS0ke2dldE1vbnRoRnJvbVdlZWsoZCwgayArIDEpfS8ke2t9LSR7ayArIDF9YCwgZGF0YTogZXh0cmFjdH0pO1xuXHRcdFx0cmVuZGVyU3VtbWFyeShzdW1tYXJ5LCBleHRyYWN0KTtcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxpYlN1bW1hcnk7XG4iLCAiaW1wb3J0IHtsaWJIZWFkZXIsIHNlYXJjaEluamVjdGlvbn0gZnJvbSAnLi9tb2R1bGVzL2luZGV4LWhlYWRlcic7XG5pbXBvcnQgbGliU3VtbWFyeSBmcm9tICcuL21vZHVsZXMvc3VtbWFyeSc7XG5cbihhc3luYyAoKSA9PiB7XG5cdGxpYkhlYWRlcigpO1xuXHRzZWFyY2hJbmplY3Rpb24oKTtcblx0YXdhaXQgbGliU3VtbWFyeSgpO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBLElBQU1BLGdCQUFnQixTQUFVQyxPQUFlQyxLQUFhQyxVQUFrQkMsU0FBNEI7QUFDekcsTUFBSUMsWUFBMkI7QUFFL0IsUUFBTUMsU0FBVUMsaUJBQTJDO0FBQzFERixrQkFBQUEsWUFBY0U7QUFDZCxVQUFNQyxjQUFjRCxjQUFjRjtBQUNsQyxVQUFNSSxXQUFXQyxLQUFLQyxJQUFJSCxjQUFjTCxVQUFVLENBQUM7QUFDbkQsVUFBTVMsZ0JBQWdCRixLQUFLRyxNQUFNSixZQUFZUCxNQUFNRCxTQUFTQSxLQUFLO0FBRWpFRyxZQUFRVSxjQUFjRixjQUFjRyxTQUFTO0FBRTdDLFFBQUlOLFdBQVcsR0FBRztBQUNqQk8sNEJBQXNCVixNQUFNO0lBQzdCO0VBQ0Q7QUFFQVUsd0JBQXNCVixNQUFNO0FBQzdCO0FBRUEsSUFBT1csd0JBQVFqQjs7QUN2QmYsSUFBTWtCLFlBQVlBLE1BQU07QUFDdkIsUUFBTUMsV0FBV0MsU0FBU0MsaUJBQWlCLFFBQVE7QUFB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QUFBdUMsT0FBT2dCLEdBQUMsR0FBQSxFQUFBaEIsT0FBSWUsQ0FBQyxDQUFFO0FBQzlDLFVBQUlFLFdBQVd4QyxTQUFBLEdBQUF1QixPQUFZZ0IsR0FBQyxHQUFBLEVBQUFoQixPQUFJM0QsaUJBQWlCMkUsR0FBR0QsSUFBSSxDQUFDLEdBQUMsR0FBQSxFQUFBZixPQUFJZSxHQUFDLEdBQUEsRUFBQWYsT0FBSWUsSUFBSSxDQUFDLEdBQUk7QUFDM0VwQyxzQkFBY0MsU0FBU3FDLFdBQVd2QyxJQUFJO01BQ3ZDO0lBQ0QsUUFBUTtBQUNQLFlBQU1HLFVBQUEsTUFBZ0JJLG1CQUFtQkwsU0FBU1EsS0FBS0MsUUFBUTtBQUMvRCxVQUFJUixZQUFZLGlCQUFpQjtBQUNoQ0Ysc0JBQWNDLFNBQVNDLE9BQU87TUFDL0IsV0FBV0EsV0FBVyxPQUFPQSxZQUFZLFVBQVU7QUFDbERYLGNBQU1ULElBQUk7VUFBQ2dCLE1BQUEsR0FBQXVCLE9BQVNnQixHQUFDLEdBQUEsRUFBQWhCLE9BQUkzRCxpQkFBaUIyRSxHQUFHRCxJQUFJLENBQUMsR0FBQyxHQUFBLEVBQUFmLE9BQUllLEdBQUMsR0FBQSxFQUFBZixPQUFJZSxJQUFJLENBQUM7VUFBSXJDLE1BQU1HO1FBQU8sQ0FBQztBQUNuRkYsc0JBQWNDLFNBQVNDLE9BQU87TUFDL0I7SUFDRDtFQUNELENBQUE7QUFBQSxTQUFBLFNBL0JNZ0MsY0FBQTtBQUFBLFdBQUFDLE1BQUFILE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTtBQWlDTixJQUFPTSxrQkFBUUw7O2tCQzFIZCxhQUFZO0FBQ1pySCxZQUFVO0FBQ1ZpQixrQkFBZ0I7QUFDaEIsUUFBTXlHLGdCQUFXO0FBQ2xCLENBQUEsRUFBRzsiLAogICJuYW1lcyI6IFsiYW5pbWF0ZU51bWJlciIsICJzdGFydCIsICJlbmQiLCAiZHVyYXRpb24iLCAiZWxlbWVudCIsICJzdGFydFRpbWUiLCAidXBkYXRlIiwgImN1cnJlbnRUaW1lIiwgInRpbWVFbGFwc2VkIiwgInByb2dyZXNzIiwgIk1hdGgiLCAibWluIiwgImN1cnJlbnROdW1iZXIiLCAiZmxvb3IiLCAidGV4dENvbnRlbnQiLCAidG9TdHJpbmciLCAicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwgImFuaW1hdGVOdW1iZXJfZGVmYXVsdCIsICJsaWJIZWFkZXIiLCAiZWxlbWVudHMiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvckFsbCIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAidmFsdWUiLCAiTnVtYmVyIiwgInBhcnNlSW50IiwgInJlcGxhY2UiLCAiZXJyIiwgImUiLCAiZiIsICJzZWFyY2hJbmplY3Rpb24iLCAiU2VhcmNoRm9ybUhUTUwiLCAiU2VhcmNoIiwgInF1ZXJ5U2VsZWN0b3IiLCAiaW5uZXJIVE1MIiwgImdldFByZXZpb3VzT2RkV2VlayIsICJub3ciLCAiRGF0ZSIsICJ0b2RheVVUQyIsICJVVEMiLCAiZ2V0RnVsbFllYXIiLCAiZ2V0TW9udGgiLCAiZ2V0RGF0ZSIsICJ0aHVyc2RheVVUQyIsICJzZXRVVENEYXRlIiwgImdldFVUQ0RhdGUiLCAiZ2V0VVRDRGF5IiwgInllYXJTdGFydCIsICJnZXRVVENGdWxsWWVhciIsICJ0aW1lRGlmZiIsICJnZXRUaW1lIiwgImRheXNEaWZmIiwgImN1cnJlbnRXZWVrIiwgImNlaWwiLCAicHJldmlvdXNPZGRXZWVrIiwgImxhc3RZZWFyRW5kIiwgImxhc3RZZWFyU3RhcnQiLCAibGFzdFllYXJXZWVrcyIsICJnZXRNb250aEZyb21XZWVrIiwgInllYXIiLCAid2VlayIsICJmaXJzdERheU9mWWVhciIsICJmaXJzdFRodXJzZGF5IiwgInNldERhdGUiLCAiZ2V0RGF5IiwgIndlZWtTdGFydCIsICJtaWRkbGVPZldlZWsiLCAiaW5pdERCIiwgIlByb21pc2UiLCAicmVzb2x2ZSIsICJyZWplY3QiLCAicmVxdWVzdCIsICJ3aW5kb3ciLCAiaW5kZXhlZERCIiwgIm9wZW4iLCAib25zdWNjZXNzIiwgImV2ZW50IiwgInRhcmdldCIsICJkYiIsICJyZXN1bHQiLCAib251cGdyYWRlbmVlZGVkIiwgIm9iamVjdFN0b3JlTmFtZXMiLCAiY29udGFpbnMiLCAiY3JlYXRlT2JqZWN0U3RvcmUiLCAia2V5UGF0aCIsICJhZGRFdmVudExpc3RlbmVyIiwgIkVycm9yIiwgImRic2V0IiwgInRyYW5zYWN0aW9uIiwgIm9iamVjdFN0b3JlIiwgInB1dCIsICJkYmdldCIsICJrZXkiLCAiZ2V0IiwgImRhdGUiLCAiZGF0YSIsICJyZW5kZXJTdW1tYXJ5IiwgInN1bW1hcnkiLCAiZXh0cmFjdCIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJlbCIsICJnZXRTdW1tYXJ5SFRNTERhdGEiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJ1cmwiLCAidGl0bGVTdHIiLCAiYSIsICJmZXRjaCIsICJyZXMiLCAianNvbiIsICJwYWdlS2V5cyIsICJPYmplY3QiLCAia2V5cyIsICJxdWVyeSIsICJwYWdlcyIsICJzdW1tYXJ5VXJsSHRtbCIsICJjb25jYXQiLCAicGFnZUtleSIsICJwYWdlIiwgImFsbFBUYWciLCAibWF0Y2giLCAibWF0Y2hDaGFyYWN0ZXJzIiwgImxlbmd0aCIsICJhdCIsICJfeCIsICJfeDIiLCAiX3gzIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJsaWJTdW1tYXJ5IiwgIl9yZWYyIiwgImsiLCAiZCIsICJjYWNoZWREYXRhIiwgInN1bW1hcnlfZGVmYXVsdCJdCn0K
