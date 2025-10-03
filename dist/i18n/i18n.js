/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/i18n}
 * @author 安忆 <i@anyi.in>
 * @license GPL-3.0-or-later {@link https://youshou.wiki/wiki/H:GPLV3}
 */

/**
 * Copyright (C)  安忆
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
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

// dist/i18n/i18n.js
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
//! src/i18n/i18n.ts
var i18n_exports = {};
__export(i18n_exports, {
  content: () => content,
  localize: () => localize,
  vary: () => vary
});
module.exports = __toCommonJS(i18n_exports);
//! src/i18n/options.json
var defaultLanguageCode = "en";
var fallbackTable = {
  zh: ["zh", "zh-hans", "zh-hant", "zh-cn", "zh-tw", "zh-hk", "zh-sg", "zh-mo", "zh-my"],
  "zh-hans": ["zh-hans", "zh-cn", "zh-sg", "zh-my", "zh", "zh-hant", "zh-tw", "zh-hk", "zh-mo"],
  "zh-hant": ["zh-hant", "zh-tw", "zh-hk", "zh-mo", "zh", "zh-hans", "zh-cn", "zh-sg", "zh-my"],
  "zh-cn": ["zh-cn", "zh-hans", "zh-sg", "zh-my", "zh", "zh-hant", "zh-tw", "zh-hk", "zh-mo"],
  "zh-sg": ["zh-sg", "zh-hans", "zh-cn", "zh-my", "zh", "zh-hant", "zh-tw", "zh-hk", "zh-mo"],
  "zh-my": ["zh-my", "zh-hans", "zh-cn", "zh-sg", "zh", "zh-hant", "zh-tw", "zh-hk", "zh-mo"],
  "zh-tw": ["zh-tw", "zh-hant", "zh-hk", "zh-mo", "zh", "zh-hans", "zh-cn", "zh-sg", "zh-my"],
  "zh-hk": ["zh-hk", "zh-hant", "zh-mo", "zh-tw", "zh", "zh-hans", "zh-cn", "zh-sg", "zh-my"],
  "zh-mo": ["zh-mo", "zh-hant", "zh-hk", "zh-tw", "zh", "zh-hans", "zh-cn", "zh-sg", "zh-my"]
};
//! src/i18n/modules/initI18nMethods.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/i18n/modules/util/generateDefaultFallbackList.ts
var import_ext_gadget = require("ext.gadget.Util");
//! src/i18n/modules/util/generateLanguageCodeSplitArray.ts
var generateLanguageCodeSplitArray = (originLanguageCode) => {
  const languageCodeSplitArray = originLanguageCode.split("-").map((value) => {
    return value.toLowerCase();
  });
  return languageCodeSplitArray;
};
//! src/i18n/modules/util/generateDefaultFallbackList.ts
var generateDefaultFallbackList = () => {
  const documentLanguageSplitArray = generateLanguageCodeSplitArray(document.documentElement.lang);
  const navigatorLanguageSplitArray = generateLanguageCodeSplitArray(navigator.language);
  let languageCode = defaultLanguageCode;
  for (var _i = 0, _arr = [documentLanguageSplitArray, navigatorLanguageSplitArray]; _i < _arr.length; _i++) {
    const languageCodeSplitArray = _arr[_i];
    switch (languageCodeSplitArray.length) {
      case 2:
        languageCode = "".concat(languageCodeSplitArray[0], "-").concat(languageCodeSplitArray[1]);
        break;
      case 3:
        languageCode = "".concat(languageCodeSplitArray[0], "-").concat(languageCodeSplitArray[2]);
        break;
      default:
        languageCode = languageCodeSplitArray[0];
        break;
    }
    if ((0, import_ext_gadget.isValidKey)(fallbackTable, languageCode)) {
      break;
    }
  }
  return (0, import_ext_gadget.uniqueArray)([languageCode, defaultLanguageCode]);
};
//! src/i18n/modules/initI18nMethods.ts
var initI18nMethods = () => {
  const defaultFallbackList = generateDefaultFallbackList();
  const elect = (candidates, locale) => {
    let fallbackList = defaultFallbackList;
    for (var _i2 = 0, _arr2 = [locale, ...fallbackList]; _i2 < _arr2.length; _i2++) {
      const key = _arr2[_i2];
      if ((0, import_ext_gadget2.isValidKey)(fallbackTable, key)) {
        fallbackList = fallbackTable[key];
        break;
      }
    }
    var _iterator2 = _createForOfIteratorHelper((0, import_ext_gadget2.uniqueArray)([locale, ...fallbackList, ...defaultFallbackList])), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        const key = _step2.value;
        if ((0, import_ext_gadget2.isValidKey)(candidates, key)) {
          return candidates[key];
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return "";
  };
  const {
    wgContentLanguage,
    wgUserLanguage,
    wgUserVariant
  } = mw.config.get();
  const i18nMethods2 = {
    content: (candidates) => {
      return elect(candidates, wgContentLanguage);
    },
    localize: (candidates) => {
      return elect(candidates, wgUserLanguage);
    },
    vary: (candidates) => {
      return elect(candidates, wgUserVariant !== null && wgUserVariant !== void 0 ? wgUserVariant : wgContentLanguage);
    }
  };
  return i18nMethods2;
};
//! src/i18n/modules/initShims.ts
var initShims = (i18nMethods2) => {
  const wgUXS = (hans, hant, cn, tw, hk, sg, zh, mo, my, en, method) => {
    var _ref, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _ref0, _ref1, _ref10, _ref11, _ref12;
    zh = String((_ref = (_ref2 = (_ref3 = (_ref4 = (_ref5 = (_ref6 = (_ref7 = (_ref8 = zh !== null && zh !== void 0 ? zh : hans) !== null && _ref8 !== void 0 ? _ref8 : hant) !== null && _ref7 !== void 0 ? _ref7 : cn) !== null && _ref6 !== void 0 ? _ref6 : tw) !== null && _ref5 !== void 0 ? _ref5 : hk) !== null && _ref4 !== void 0 ? _ref4 : sg) !== null && _ref3 !== void 0 ? _ref3 : mo) !== null && _ref2 !== void 0 ? _ref2 : my) !== null && _ref !== void 0 ? _ref : en);
    hans = String((_ref9 = (_ref0 = (_ref1 = hans !== null && hans !== void 0 ? hans : cn) !== null && _ref1 !== void 0 ? _ref1 : sg) !== null && _ref0 !== void 0 ? _ref0 : my) !== null && _ref9 !== void 0 ? _ref9 : zh);
    hant = String((_ref10 = (_ref11 = (_ref12 = hant !== null && hant !== void 0 ? hant : tw) !== null && _ref12 !== void 0 ? _ref12 : hk) !== null && _ref11 !== void 0 ? _ref11 : mo) !== null && _ref10 !== void 0 ? _ref10 : zh);
    cn = String(cn !== null && cn !== void 0 ? cn : hans);
    sg = String(sg !== null && sg !== void 0 ? sg : hans);
    tw = String(tw !== null && tw !== void 0 ? tw : hant);
    hk = String(hk !== null && hk !== void 0 ? hk : hant);
    mo = String(mo !== null && mo !== void 0 ? mo : hant);
    my = String(my !== null && my !== void 0 ? my : hant);
    en = String(en !== null && en !== void 0 ? en : zh);
    return i18nMethods2[method]({
      en,
      zh,
      "zh-hans": hans,
      "zh-hant": hant,
      "zh-cn": cn,
      "zh-tw": tw,
      "zh-hk": hk,
      "zh-sg": sg,
      "zh-mo": mo,
      "zh-my": my
    });
  };
  window.wgUCS = (hans, hant, cn, tw, hk, sg, zh, mo, my, en) => {
    return wgUXS(hans, hant, cn, tw, hk, sg, zh, mo, my, en, "content");
  };
  window.wgULS = (hans, hant, cn, tw, hk, sg, zh, mo, my, en) => {
    return wgUXS(hans, hant, cn, tw, hk, sg, zh, mo, my, en, "localize");
  };
  window.wgUVS = (hans, hant, cn, tw, hk, sg, zh, mo, my, en) => {
    return wgUXS(hans, hant, cn, tw, hk, sg, zh, mo, my, en, "vary");
  };
};
//! src/i18n/i18n.ts
var i18nMethods = initI18nMethods();
initShims(i18nMethods);
var {
  content,
  localize,
  vary
} = i18nMethods;
/*!
// 仓库内用法
	// 定义多条消息
	// 支持多语言，可选值定义在modules/types.d.ts#L-1，可直接添加其他值（RFC 5646）
	import {content, localize, vary} from 'ext.gadget.i18n';
	const getI18nMessages = () => {
		// i18n的三个方法会匹配当前语言和它所接收对象中的键，对于localize来说，假设已定义zh、en和ja，则
		//   当页面语言（wgUserLanguage ?? wgContentLanguage）为中文/英语/日语时，返回页面语言所对应的值
		//   当页面语言为法语，浏览器语言为中文/英语/日语时，返回浏览器语言所对应的值
		//   当页面语言为法语，且不存在浏览器语言所对应的键，返回L-25定义的键所对应的值。若此键同样没被定义，则返回空字符串
		return {
			Cancel: content({
				en: 'Cancel',
				ja: 'キャンセル',
				zh: '取消',
			}),
			QiuWen: localize({
				en: 'QiuWen',
				ja: 'ちゅううん',
				'zh-cn': '求闻',
				'zh-hk': '求聞',
			}),
			LongText: vary({
				en: 'This is a very long text',
				ja: 'これは非常に長いテキストです',
				'zh-hans': '这是一段非常长的文本',
				'zh-hant': '這是一段非常長的文字',
			}),
		};
	};
	const i18nMessages = getI18nMessages();
	const getMessage: GetMessages<typeof i18nMessages> = (key) => {
		return i18nMessages[key] || key;
	};
	// 调用
	getMessage('Cancel'); // en: Cancel, ja: キャンセル, zh: 取消, zh-hans: 取消, zh-hant: 取消, zh-cn: 取消, zh-hk: 取消, zh-tw: 取消
	getMessage('QiuWen'); // en: QiuWen, ja: ちゅううん, zh: 求闻, zh-hans: 求闻, zh-hant: 求聞, zh-cn: 求闻, zh-hk: 求聞, zh-tw: 求聞
	getMessage('LongText');
		// en: This is a very long text
		// ja: これは非常に長いテキストです
		// zh: 这是一段非常长的文本
		// zh-hans: 这是一段非常长的文本
		// zh-hant: 這是一段非常長的文字
		// zh-cn: 这是一段非常长的文本
		// zh-hk: 這是一段非常長的文字
		// zh-tw: 這是一段非常長的文字

	// 直接转换单条消息（不推荐，仅为兼容性保留）
	// 仅支持传递中文和英语。在非中文环境且未传递英语文本时，最终返回zh的值
	wgUCS('求闻', '求聞'); // en: 求闻, ja: 求闻, zh: 求闻, zh-hans: 求闻, zh-hant: 求聞, zh-cn: 求闻, zh-hk: 求聞, zh-tw: 求聞
	wgULS('求闻', '求聞'); // en: 求闻, ja: 求闻, zh: 求闻, zh-hans: 求闻, zh-hant: 求聞, zh-cn: 求闻, zh-hk: 求聞, zh-tw: 求聞
	wgUVS('求闻', '求聞'); // en: 求闻, ja: 求闻, zh: 求闻, zh-hans: 求闻, zh-hant: 求聞, zh-cn: 求闻, zh-hk: 求聞, zh-tw: 求聞

	// 非MediaWiki命名空间的脚本可以通过mw.loader.using加载ext.gadget.i18n模块
	mw.loader.using('ext.gadget.i18n').then((require) => {
		const {content, localize, vary} = require('ext.gadget.i18n');
	});
 */

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2kxOG4vaTE4bi50cyIsICJzcmMvaTE4bi9vcHRpb25zLmpzb24iLCAic3JjL2kxOG4vbW9kdWxlcy9pbml0STE4bk1ldGhvZHMudHMiLCAic3JjL2kxOG4vbW9kdWxlcy91dGlsL2dlbmVyYXRlRGVmYXVsdEZhbGxiYWNrTGlzdC50cyIsICJzcmMvaTE4bi9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVMYW5ndWFnZUNvZGVTcGxpdEFycmF5LnRzIiwgInNyYy9pMThuL21vZHVsZXMvaW5pdFNoaW1zLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2luaXRJMThuTWV0aG9kc30gZnJvbSAnLi9tb2R1bGVzL2luaXRJMThuTWV0aG9kcyc7XG5pbXBvcnQge2luaXRTaGltc30gZnJvbSAnLi9tb2R1bGVzL2luaXRTaGltcyc7XG5cbmNvbnN0IGkxOG5NZXRob2RzOiBSZXR1cm5UeXBlPHR5cGVvZiBpbml0STE4bk1ldGhvZHM+ID0gaW5pdEkxOG5NZXRob2RzKCk7XG5pbml0U2hpbXMoaTE4bk1ldGhvZHMpO1xuXG5leHBvcnQgY29uc3Qge2NvbnRlbnQsIGxvY2FsaXplLCB2YXJ5fSA9IGkxOG5NZXRob2RzO1xuXG4vKiFcbi8vIOS7k+W6k+WGheeUqOazlVxuXHQvLyDlrprkuYnlpJrmnaHmtojmga9cblx0Ly8g5pSv5oyB5aSa6K+t6KiA77yM5Y+v6YCJ5YC85a6a5LmJ5ZyobW9kdWxlcy90eXBlcy5kLnRzI0wtMe+8jOWPr+ebtOaOpea3u+WKoOWFtuS7luWAvO+8iFJGQyA1NjQ277yJXG5cdGltcG9ydCB7Y29udGVudCwgbG9jYWxpemUsIHZhcnl9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cdGNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0XHQvLyBpMThu55qE5LiJ5Liq5pa55rOV5Lya5Yy56YWN5b2T5YmN6K+t6KiA5ZKM5a6D5omA5o6l5pS25a+56LGh5Lit55qE6ZSu77yM5a+55LqObG9jYWxpemXmnaXor7TvvIzlgYforr7lt7LlrprkuYl6aOOAgWVu5ZKMamHvvIzliJlcblx0XHQvLyAgIOW9k+mhtemdouivreiogO+8iHdnVXNlckxhbmd1YWdlID8/IHdnQ29udGVudExhbmd1YWdl77yJ5Li65Lit5paHL+iLseivrS/ml6Xor63ml7bvvIzov5Tlm57pobXpnaLor63oqIDmiYDlr7nlupTnmoTlgLxcblx0XHQvLyAgIOW9k+mhtemdouivreiogOS4uuazleivre+8jOa1j+iniOWZqOivreiogOS4uuS4reaWhy/oi7Hor60v5pel6K+t5pe277yM6L+U5Zue5rWP6KeI5Zmo6K+t6KiA5omA5a+55bqU55qE5YC8XG5cdFx0Ly8gICDlvZPpobXpnaLor63oqIDkuLrms5Xor63vvIzkuJTkuI3lrZjlnKjmtY/op4jlmajor63oqIDmiYDlr7nlupTnmoTplK7vvIzov5Tlm55MLTI15a6a5LmJ55qE6ZSu5omA5a+55bqU55qE5YC844CC6Iul5q2k6ZSu5ZCM5qC35rKh6KKr5a6a5LmJ77yM5YiZ6L+U5Zue56m65a2X56ym5LiyXG5cdFx0cmV0dXJuIHtcblx0XHRcdENhbmNlbDogY29udGVudCh7XG5cdFx0XHRcdGVuOiAnQ2FuY2VsJyxcblx0XHRcdFx0amE6ICfjgq3jg6Pjg7Pjgrvjg6snLFxuXHRcdFx0XHR6aDogJ+WPlua2iCcsXG5cdFx0XHR9KSxcblx0XHRcdFFpdVdlbjogbG9jYWxpemUoe1xuXHRcdFx0XHRlbjogJ1FpdVdlbicsXG5cdFx0XHRcdGphOiAn44Gh44KF44GG44GG44KTJyxcblx0XHRcdFx0J3poLWNuJzogJ+axgumXuycsXG5cdFx0XHRcdCd6aC1oayc6ICfmsYLogZ4nLFxuXHRcdFx0fSksXG5cdFx0XHRMb25nVGV4dDogdmFyeSh7XG5cdFx0XHRcdGVuOiAnVGhpcyBpcyBhIHZlcnkgbG9uZyB0ZXh0Jyxcblx0XHRcdFx0amE6ICfjgZPjgozjga/pnZ7luLjjgavplbfjgYTjg4bjgq3jgrnjg4jjgafjgZknLFxuXHRcdFx0XHQnemgtaGFucyc6ICfov5nmmK/kuIDmrrXpnZ7luLjplb/nmoTmlofmnKwnLFxuXHRcdFx0XHQnemgtaGFudCc6ICfpgJnmmK/kuIDmrrXpnZ7luLjplbfnmoTmloflrZcnLFxuXHRcdFx0fSksXG5cdFx0fTtcblx0fTtcblx0Y29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cdGNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRcdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG5cdH07XG5cdC8vIOiwg+eUqFxuXHRnZXRNZXNzYWdlKCdDYW5jZWwnKTsgLy8gZW46IENhbmNlbCwgamE6IOOCreODo+ODs+OCu+ODqywgemg6IOWPlua2iCwgemgtaGFuczog5Y+W5raILCB6aC1oYW50OiDlj5bmtogsIHpoLWNuOiDlj5bmtogsIHpoLWhrOiDlj5bmtogsIHpoLXR3OiDlj5bmtohcblx0Z2V0TWVzc2FnZSgnUWl1V2VuJyk7IC8vIGVuOiBRaXVXZW4sIGphOiDjgaHjgoXjgYbjgYbjgpMsIHpoOiDmsYLpl7ssIHpoLWhhbnM6IOaxgumXuywgemgtaGFudDog5rGC6IGeLCB6aC1jbjog5rGC6Ze7LCB6aC1oazog5rGC6IGeLCB6aC10dzog5rGC6IGeXG5cdGdldE1lc3NhZ2UoJ0xvbmdUZXh0Jyk7XG5cdFx0Ly8gZW46IFRoaXMgaXMgYSB2ZXJ5IGxvbmcgdGV4dFxuXHRcdC8vIGphOiDjgZPjgozjga/pnZ7luLjjgavplbfjgYTjg4bjgq3jgrnjg4jjgafjgZlcblx0XHQvLyB6aDog6L+Z5piv5LiA5q616Z2e5bi46ZW/55qE5paH5pysXG5cdFx0Ly8gemgtaGFuczog6L+Z5piv5LiA5q616Z2e5bi46ZW/55qE5paH5pysXG5cdFx0Ly8gemgtaGFudDog6YCZ5piv5LiA5q616Z2e5bi46ZW355qE5paH5a2XXG5cdFx0Ly8gemgtY246IOi/meaYr+S4gOautemdnuW4uOmVv+eahOaWh+acrFxuXHRcdC8vIHpoLWhrOiDpgJnmmK/kuIDmrrXpnZ7luLjplbfnmoTmloflrZdcblx0XHQvLyB6aC10dzog6YCZ5piv5LiA5q616Z2e5bi46ZW355qE5paH5a2XXG5cblx0Ly8g55u05o6l6L2s5o2i5Y2V5p2h5raI5oGv77yI5LiN5o6o6I2Q77yM5LuF5Li65YW85a655oCn5L+d55WZ77yJXG5cdC8vIOS7heaUr+aMgeS8oOmAkuS4reaWh+WSjOiLseivreOAguWcqOmdnuS4reaWh+eOr+Wig+S4lOacquS8oOmAkuiLseivreaWh+acrOaXtu+8jOacgOe7iOi/lOWbnnpo55qE5YC8XG5cdHdnVUNTKCfmsYLpl7snLCAn5rGC6IGeJyk7IC8vIGVuOiDmsYLpl7ssIGphOiDmsYLpl7ssIHpoOiDmsYLpl7ssIHpoLWhhbnM6IOaxgumXuywgemgtaGFudDog5rGC6IGeLCB6aC1jbjog5rGC6Ze7LCB6aC1oazog5rGC6IGeLCB6aC10dzog5rGC6IGeXG5cdHdnVUxTKCfmsYLpl7snLCAn5rGC6IGeJyk7IC8vIGVuOiDmsYLpl7ssIGphOiDmsYLpl7ssIHpoOiDmsYLpl7ssIHpoLWhhbnM6IOaxgumXuywgemgtaGFudDog5rGC6IGeLCB6aC1jbjog5rGC6Ze7LCB6aC1oazog5rGC6IGeLCB6aC10dzog5rGC6IGeXG5cdHdnVVZTKCfmsYLpl7snLCAn5rGC6IGeJyk7IC8vIGVuOiDmsYLpl7ssIGphOiDmsYLpl7ssIHpoOiDmsYLpl7ssIHpoLWhhbnM6IOaxgumXuywgemgtaGFudDog5rGC6IGeLCB6aC1jbjog5rGC6Ze7LCB6aC1oazog5rGC6IGeLCB6aC10dzog5rGC6IGeXG5cblx0Ly8g6Z2eTWVkaWFXaWtp5ZG95ZCN56m66Ze055qE6ISa5pys5Y+v5Lul6YCa6L+HbXcubG9hZGVyLnVzaW5n5Yqg6L29ZXh0LmdhZGdldC5pMThu5qih5Z2XXG5cdG13LmxvYWRlci51c2luZygnZXh0LmdhZGdldC5pMThuJykudGhlbigocmVxdWlyZSkgPT4ge1xuXHRcdGNvbnN0IHtjb250ZW50LCBsb2NhbGl6ZSwgdmFyeX0gPSByZXF1aXJlKCdleHQuZ2FkZ2V0LmkxOG4nKTtcblx0fSk7XG4gKi9cbiIsICJ7XG5cdFwiZGVmYXVsdExhbmd1YWdlQ29kZVwiOiBcImVuXCIsXG5cdFwiZmFsbGJhY2tUYWJsZVwiOiB7XG5cdFx0XCJ6aFwiOiBbXCJ6aFwiLCBcInpoLWhhbnNcIiwgXCJ6aC1oYW50XCIsIFwiemgtY25cIiwgXCJ6aC10d1wiLCBcInpoLWhrXCIsIFwiemgtc2dcIiwgXCJ6aC1tb1wiLCBcInpoLW15XCJdLFxuXHRcdFwiemgtaGFuc1wiOiBbXCJ6aC1oYW5zXCIsIFwiemgtY25cIiwgXCJ6aC1zZ1wiLCBcInpoLW15XCIsIFwiemhcIiwgXCJ6aC1oYW50XCIsIFwiemgtdHdcIiwgXCJ6aC1oa1wiLCBcInpoLW1vXCJdLFxuXHRcdFwiemgtaGFudFwiOiBbXCJ6aC1oYW50XCIsIFwiemgtdHdcIiwgXCJ6aC1oa1wiLCBcInpoLW1vXCIsIFwiemhcIiwgXCJ6aC1oYW5zXCIsIFwiemgtY25cIiwgXCJ6aC1zZ1wiLCBcInpoLW15XCJdLFxuXHRcdFwiemgtY25cIjogW1wiemgtY25cIiwgXCJ6aC1oYW5zXCIsIFwiemgtc2dcIiwgXCJ6aC1teVwiLCBcInpoXCIsIFwiemgtaGFudFwiLCBcInpoLXR3XCIsIFwiemgtaGtcIiwgXCJ6aC1tb1wiXSxcblx0XHRcInpoLXNnXCI6IFtcInpoLXNnXCIsIFwiemgtaGFuc1wiLCBcInpoLWNuXCIsIFwiemgtbXlcIiwgXCJ6aFwiLCBcInpoLWhhbnRcIiwgXCJ6aC10d1wiLCBcInpoLWhrXCIsIFwiemgtbW9cIl0sXG5cdFx0XCJ6aC1teVwiOiBbXCJ6aC1teVwiLCBcInpoLWhhbnNcIiwgXCJ6aC1jblwiLCBcInpoLXNnXCIsIFwiemhcIiwgXCJ6aC1oYW50XCIsIFwiemgtdHdcIiwgXCJ6aC1oa1wiLCBcInpoLW1vXCJdLFxuXHRcdFwiemgtdHdcIjogW1wiemgtdHdcIiwgXCJ6aC1oYW50XCIsIFwiemgtaGtcIiwgXCJ6aC1tb1wiLCBcInpoXCIsIFwiemgtaGFuc1wiLCBcInpoLWNuXCIsIFwiemgtc2dcIiwgXCJ6aC1teVwiXSxcblx0XHRcInpoLWhrXCI6IFtcInpoLWhrXCIsIFwiemgtaGFudFwiLCBcInpoLW1vXCIsIFwiemgtdHdcIiwgXCJ6aFwiLCBcInpoLWhhbnNcIiwgXCJ6aC1jblwiLCBcInpoLXNnXCIsIFwiemgtbXlcIl0sXG5cdFx0XCJ6aC1tb1wiOiBbXCJ6aC1tb1wiLCBcInpoLWhhbnRcIiwgXCJ6aC1oa1wiLCBcInpoLXR3XCIsIFwiemhcIiwgXCJ6aC1oYW5zXCIsIFwiemgtY25cIiwgXCJ6aC1zZ1wiLCBcInpoLW15XCJdXG5cdH1cbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2lzVmFsaWRLZXksIHVuaXF1ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHR5cGUge0kxOG5DYW5kaWRhdGVzfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7Z2VuZXJhdGVEZWZhdWx0RmFsbGJhY2tMaXN0fSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVEZWZhdWx0RmFsbGJhY2tMaXN0JztcblxuY29uc3QgaW5pdEkxOG5NZXRob2RzID0gKCk6IHR5cGVvZiBpMThuTWV0aG9kcyA9PiB7XG5cdGNvbnN0IGRlZmF1bHRGYWxsYmFja0xpc3Q6IHN0cmluZ1tdID0gZ2VuZXJhdGVEZWZhdWx0RmFsbGJhY2tMaXN0KCk7XG5cblx0Y29uc3QgZWxlY3QgPSAoY2FuZGlkYXRlczogSTE4bkNhbmRpZGF0ZXMsIGxvY2FsZTogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRsZXQgZmFsbGJhY2tMaXN0OiBzdHJpbmdbXSA9IGRlZmF1bHRGYWxsYmFja0xpc3Q7XG5cdFx0Zm9yIChjb25zdCBrZXkgb2YgW2xvY2FsZSwgLi4uZmFsbGJhY2tMaXN0XSkge1xuXHRcdFx0aWYgKGlzVmFsaWRLZXkoT1BUSU9OUy5mYWxsYmFja1RhYmxlLCBrZXkpKSB7XG5cdFx0XHRcdGZhbGxiYWNrTGlzdCA9IE9QVElPTlMuZmFsbGJhY2tUYWJsZVtrZXldO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBSZXBsYWNlIFNldCB3aXRoIHVuaXF1ZUFycmF5LCBhdm9pZGluZyBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdFx0Zm9yIChjb25zdCBrZXkgb2YgdW5pcXVlQXJyYXkoW2xvY2FsZSwgLi4uZmFsbGJhY2tMaXN0LCAuLi5kZWZhdWx0RmFsbGJhY2tMaXN0XSkpIHtcblx0XHRcdGlmIChpc1ZhbGlkS2V5KGNhbmRpZGF0ZXMsIGtleSkpIHtcblx0XHRcdFx0cmV0dXJuIGNhbmRpZGF0ZXNba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gJyc7XG5cdH07XG5cblx0Y29uc3Qge3dnQ29udGVudExhbmd1YWdlLCB3Z1VzZXJMYW5ndWFnZSwgd2dVc2VyVmFyaWFudH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y29uc3QgaTE4bk1ldGhvZHM6IHR5cGVvZiBpbXBvcnQoJ2V4dC5nYWRnZXQuaTE4bicpID0ge1xuXHRcdGNvbnRlbnQ6IChjYW5kaWRhdGVzKSA9PiB7XG5cdFx0XHRyZXR1cm4gZWxlY3QoY2FuZGlkYXRlcywgd2dDb250ZW50TGFuZ3VhZ2UpO1xuXHRcdH0sXG5cdFx0bG9jYWxpemU6IChjYW5kaWRhdGVzKSA9PiB7XG5cdFx0XHRyZXR1cm4gZWxlY3QoY2FuZGlkYXRlcywgd2dVc2VyTGFuZ3VhZ2UpO1xuXHRcdH0sXG5cdFx0dmFyeTogKGNhbmRpZGF0ZXMpID0+IHtcblx0XHRcdHJldHVybiBlbGVjdChjYW5kaWRhdGVzLCB3Z1VzZXJWYXJpYW50ID8/IHdnQ29udGVudExhbmd1YWdlKTtcblx0XHR9LFxuXHR9O1xuXG5cdHJldHVybiBpMThuTWV0aG9kcztcbn07XG5cbmV4cG9ydCB7aW5pdEkxOG5NZXRob2RzfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2lzVmFsaWRLZXksIHVuaXF1ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtnZW5lcmF0ZUxhbmd1YWdlQ29kZVNwbGl0QXJyYXl9IGZyb20gJy4vZ2VuZXJhdGVMYW5ndWFnZUNvZGVTcGxpdEFycmF5JztcblxuY29uc3QgZ2VuZXJhdGVEZWZhdWx0RmFsbGJhY2tMaXN0ID0gKCk6IHN0cmluZ1tdID0+IHtcblx0Y29uc3QgZG9jdW1lbnRMYW5ndWFnZVNwbGl0QXJyYXk6IHN0cmluZ1tdID0gZ2VuZXJhdGVMYW5ndWFnZUNvZGVTcGxpdEFycmF5KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nKTtcblx0Y29uc3QgbmF2aWdhdG9yTGFuZ3VhZ2VTcGxpdEFycmF5OiBzdHJpbmdbXSA9IGdlbmVyYXRlTGFuZ3VhZ2VDb2RlU3BsaXRBcnJheShuYXZpZ2F0b3IubGFuZ3VhZ2UpO1xuXG5cdGxldCBsYW5ndWFnZUNvZGU6IHN0cmluZyA9IE9QVElPTlMuZGVmYXVsdExhbmd1YWdlQ29kZTtcblx0Zm9yIChjb25zdCBsYW5ndWFnZUNvZGVTcGxpdEFycmF5IG9mIFtkb2N1bWVudExhbmd1YWdlU3BsaXRBcnJheSwgbmF2aWdhdG9yTGFuZ3VhZ2VTcGxpdEFycmF5XSkge1xuXHRcdHN3aXRjaCAobGFuZ3VhZ2VDb2RlU3BsaXRBcnJheS5sZW5ndGgpIHtcblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0bGFuZ3VhZ2VDb2RlID0gYCR7bGFuZ3VhZ2VDb2RlU3BsaXRBcnJheVswXX0tJHtsYW5ndWFnZUNvZGVTcGxpdEFycmF5WzFdfWA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHRsYW5ndWFnZUNvZGUgPSBgJHtsYW5ndWFnZUNvZGVTcGxpdEFycmF5WzBdfS0ke2xhbmd1YWdlQ29kZVNwbGl0QXJyYXlbMl19YDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRsYW5ndWFnZUNvZGUgPSBsYW5ndWFnZUNvZGVTcGxpdEFycmF5WzBdIGFzIHN0cmluZztcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdGlmIChpc1ZhbGlkS2V5KE9QVElPTlMuZmFsbGJhY2tUYWJsZSwgbGFuZ3VhZ2VDb2RlKSkge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHVuaXF1ZUFycmF5KFtsYW5ndWFnZUNvZGUsIE9QVElPTlMuZGVmYXVsdExhbmd1YWdlQ29kZV0pOyAvLyBSZXBsYWNlIFNldCB3aXRoIHVuaXF1ZUFycmF5LCBhdm9pZGluZyBjb3JlLWpzIHBvbHlmaWxsaW5nXG59O1xuXG5leHBvcnQge2dlbmVyYXRlRGVmYXVsdEZhbGxiYWNrTGlzdH07XG4iLCAiY29uc3QgZ2VuZXJhdGVMYW5ndWFnZUNvZGVTcGxpdEFycmF5ID0gKG9yaWdpbkxhbmd1YWdlQ29kZTogc3RyaW5nKTogc3RyaW5nW10gPT4ge1xuXHRjb25zdCBsYW5ndWFnZUNvZGVTcGxpdEFycmF5OiBzdHJpbmdbXSA9IG9yaWdpbkxhbmd1YWdlQ29kZS5zcGxpdCgnLScpLm1hcCgodmFsdWU6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0cmV0dXJuIHZhbHVlLnRvTG93ZXJDYXNlKCk7XG5cdH0pO1xuXG5cdHJldHVybiBsYW5ndWFnZUNvZGVTcGxpdEFycmF5O1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZUxhbmd1YWdlQ29kZVNwbGl0QXJyYXl9O1xuIiwgImNvbnN0IGluaXRTaGltcyA9IChpMThuTWV0aG9kczogdHlwZW9mIGltcG9ydCgnZXh0LmdhZGdldC5pMThuJykpOiB2b2lkID0+IHtcblx0Y29uc3Qgd2dVWFMgPSAoXG5cdFx0aGFuczogdW5rbm93bixcblx0XHRoYW50OiB1bmtub3duLFxuXHRcdGNuOiB1bmtub3duLFxuXHRcdHR3OiB1bmtub3duLFxuXHRcdGhrOiB1bmtub3duLFxuXHRcdHNnOiB1bmtub3duLFxuXHRcdHpoOiB1bmtub3duLFxuXHRcdG1vOiB1bmtub3duLFxuXHRcdG15OiB1bmtub3duLFxuXHRcdGVuOiB1bmtub3duLFxuXHRcdG1ldGhvZDogJ2NvbnRlbnQnIHwgJ2xvY2FsaXplJyB8ICd2YXJ5J1xuXHQpOiBzdHJpbmcgPT4ge1xuXHRcdHpoID0gU3RyaW5nKHpoID8/IGhhbnMgPz8gaGFudCA/PyBjbiA/PyB0dyA/PyBoayA/PyBzZyA/PyBtbyA/PyBteSA/PyBlbik7XG5cdFx0aGFucyA9IFN0cmluZyhoYW5zID8/IGNuID8/IHNnID8/IG15ID8/IHpoKTtcblx0XHRoYW50ID0gU3RyaW5nKGhhbnQgPz8gdHcgPz8gaGsgPz8gbW8gPz8gemgpO1xuXHRcdGNuID0gU3RyaW5nKGNuID8/IGhhbnMpO1xuXHRcdHNnID0gU3RyaW5nKHNnID8/IGhhbnMpO1xuXHRcdHR3ID0gU3RyaW5nKHR3ID8/IGhhbnQpO1xuXHRcdGhrID0gU3RyaW5nKGhrID8/IGhhbnQpO1xuXHRcdG1vID0gU3RyaW5nKG1vID8/IGhhbnQpO1xuXHRcdG15ID0gU3RyaW5nKG15ID8/IGhhbnQpO1xuXHRcdGVuID0gU3RyaW5nKGVuID8/IHpoKTtcblxuXHRcdHJldHVybiBpMThuTWV0aG9kc1ttZXRob2RdKHtcblx0XHRcdGVuOiBlbiBhcyBzdHJpbmcsXG5cdFx0XHR6aDogemggYXMgc3RyaW5nLFxuXHRcdFx0J3poLWhhbnMnOiBoYW5zIGFzIHN0cmluZyxcblx0XHRcdCd6aC1oYW50JzogaGFudCBhcyBzdHJpbmcsXG5cdFx0XHQnemgtY24nOiBjbiBhcyBzdHJpbmcsXG5cdFx0XHQnemgtdHcnOiB0dyBhcyBzdHJpbmcsXG5cdFx0XHQnemgtaGsnOiBoayBhcyBzdHJpbmcsXG5cdFx0XHQnemgtc2cnOiBzZyBhcyBzdHJpbmcsXG5cdFx0XHQnemgtbW8nOiBtbyBhcyBzdHJpbmcsXG5cdFx0XHQnemgtbXknOiBteSBhcyBzdHJpbmcsXG5cdFx0fSk7XG5cdH07XG5cblx0d2luZG93LndnVUNTID0gKGhhbnMsIGhhbnQsIGNuLCB0dywgaGssIHNnLCB6aCwgbW8sIG15LCBlbikgPT4ge1xuXHRcdHJldHVybiB3Z1VYUyhoYW5zLCBoYW50LCBjbiwgdHcsIGhrLCBzZywgemgsIG1vLCBteSwgZW4sICdjb250ZW50Jyk7XG5cdH07XG5cdHdpbmRvdy53Z1VMUyA9IChoYW5zLCBoYW50LCBjbiwgdHcsIGhrLCBzZywgemgsIG1vLCBteSwgZW4pID0+IHtcblx0XHRyZXR1cm4gd2dVWFMoaGFucywgaGFudCwgY24sIHR3LCBoaywgc2csIHpoLCBtbywgbXksIGVuLCAnbG9jYWxpemUnKTtcblx0fTtcblx0d2luZG93LndnVVZTID0gKGhhbnMsIGhhbnQsIGNuLCB0dywgaGssIHNnLCB6aCwgbW8sIG15LCBlbikgPT4ge1xuXHRcdHJldHVybiB3Z1VYUyhoYW5zLCBoYW50LCBjbiwgdHcsIGhrLCBzZywgemgsIG1vLCBteSwgZW4sICd2YXJ5Jyk7XG5cdH07XG59O1xuXG5leHBvcnQge2luaXRTaGltc307XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGVBQUEsQ0FBQTtBQUFBQyxTQUFBRCxjQUFBO0VBQUFFLFNBQUFBLE1BQUFBO0VBQUFDLFVBQUFBLE1BQUFBO0VBQUFDLE1BQUFBLE1BQUFBO0FBQUEsQ0FBQTtBQUFBQyxPQUFBQyxVQUFBQyxhQUFBUCxZQUFBOztBQ0NDLElBQUFRLHNCQUF1QjtBQUN2QixJQUFBQyxnQkFBaUI7RUFDaEJDLElBQU0sQ0FBQyxNQUFNLFdBQVcsV0FBVyxTQUFTLFNBQVMsU0FBUyxTQUFTLFNBQVMsT0FBTztFQUN2RixXQUFXLENBQUMsV0FBVyxTQUFTLFNBQVMsU0FBUyxNQUFNLFdBQVcsU0FBUyxTQUFTLE9BQU87RUFDNUYsV0FBVyxDQUFDLFdBQVcsU0FBUyxTQUFTLFNBQVMsTUFBTSxXQUFXLFNBQVMsU0FBUyxPQUFPO0VBQzVGLFNBQVMsQ0FBQyxTQUFTLFdBQVcsU0FBUyxTQUFTLE1BQU0sV0FBVyxTQUFTLFNBQVMsT0FBTztF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TUMsTUFBTUMsSUFBSUMsSUFBSUMsSUFBSUMsSUFBSTFELElBQUkyRCxJQUFJQyxJQUFJQyxJQUFJLFNBQVM7RUFDbkU7QUFDQWlCLFNBQU9FLFFBQVEsQ0FBQzNCLE1BQU1DLE1BQU1DLElBQUlDLElBQUlDLElBQUlDLElBQUkxRCxJQUFJMkQsSUFBSUMsSUFBSUMsT0FBTztBQUM5RCxXQUFPVCxNQUFNQyxNQUFNQyxNQUFNQyxJQUFJQyxJQUFJQyxJQUFJQyxJQUFJMUQsSUFBSTJELElBQUlDLElBQUlDLElBQUksVUFBVTtFQUNwRTtBQUNBaUIsU0FBT0csUUFBUSxDQUFDNUIsTUFBTUMsTUFBTUMsSUFBSUMsSUFBSUMsSUFBSUMsSUFBSTFELElBQUkyRCxJQUFJQyxJQUFJQyxPQUFPO0FBQzlELFdBQU9ULE1BQU1DLE1BQU1DLE1BQU1DLElBQUlDLElBQUlDLElBQUlDLElBQUkxRCxJQUFJMkQsSUFBSUMsSUFBSUMsSUFBSSxNQUFNO0VBQ2hFO0FBQ0Q7O0FMN0NBLElBQU1xQixjQUFrRHhELGdCQUFnQjtBQUN4RXlCLFVBQVUrQixXQUFXO0FBRWQsSUFBTTtFQUFDMUY7RUFBU0M7RUFBVUM7QUFBSSxJQUFJd0Y7QUFFekM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwKICAibmFtZXMiOiBbImkxOG5fZXhwb3J0cyIsICJfX2V4cG9ydCIsICJjb250ZW50IiwgImxvY2FsaXplIiwgInZhcnkiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiX190b0NvbW1vbkpTIiwgImRlZmF1bHRMYW5ndWFnZUNvZGUiLCAiZmFsbGJhY2tUYWJsZSIsICJ6aCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZW5lcmF0ZUxhbmd1YWdlQ29kZVNwbGl0QXJyYXkiLCAib3JpZ2luTGFuZ3VhZ2VDb2RlIiwgImxhbmd1YWdlQ29kZVNwbGl0QXJyYXkiLCAic3BsaXQiLCAibWFwIiwgInZhbHVlIiwgInRvTG93ZXJDYXNlIiwgImdlbmVyYXRlRGVmYXVsdEZhbGxiYWNrTGlzdCIsICJkb2N1bWVudExhbmd1YWdlU3BsaXRBcnJheSIsICJkb2N1bWVudCIsICJkb2N1bWVudEVsZW1lbnQiLCAibGFuZyIsICJuYXZpZ2F0b3JMYW5ndWFnZVNwbGl0QXJyYXkiLCAibmF2aWdhdG9yIiwgImxhbmd1YWdlIiwgImxhbmd1YWdlQ29kZSIsICJfaSIsICJfYXJyIiwgImxlbmd0aCIsICJjb25jYXQiLCAiaXNWYWxpZEtleSIsICJ1bmlxdWVBcnJheSIsICJpbml0STE4bk1ldGhvZHMiLCAiZGVmYXVsdEZhbGxiYWNrTGlzdCIsICJlbGVjdCIsICJjYW5kaWRhdGVzIiwgImxvY2FsZSIsICJmYWxsYmFja0xpc3QiLCAiX2kyIiwgIl9hcnIyIiwgImtleSIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJlcnIiLCAiZSIsICJmIiwgIndnQ29udGVudExhbmd1YWdlIiwgIndnVXNlckxhbmd1YWdlIiwgIndnVXNlclZhcmlhbnQiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJpMThuTWV0aG9kczIiLCAiaW5pdFNoaW1zIiwgIndnVVhTIiwgImhhbnMiLCAiaGFudCIsICJjbiIsICJ0dyIsICJoayIsICJzZyIsICJtbyIsICJteSIsICJlbiIsICJtZXRob2QiLCAiX3JlZiIsICJfcmVmMiIsICJfcmVmMyIsICJfcmVmNCIsICJfcmVmNSIsICJfcmVmNiIsICJfcmVmNyIsICJfcmVmOCIsICJfcmVmOSIsICJfcmVmMCIsICJfcmVmMSIsICJfcmVmMTAiLCAiX3JlZjExIiwgIl9yZWYxMiIsICJTdHJpbmciLCAid2luZG93IiwgIndnVUNTIiwgIndnVUxTIiwgIndnVVZTIiwgImkxOG5NZXRob2RzIl0KfQo=
