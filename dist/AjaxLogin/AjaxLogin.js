/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/AjaxLogin}
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
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/global-this.js
var require_global_this = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/global-this.js"(exports, module2) {
    "use strict";
    var check = function(it) {
      return it && it.Math === Math && it;
    };
    module2.exports = // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == "object" && self) || check(typeof global == "object" && global) || check(typeof exports == "object" && exports) || // eslint-disable-next-line no-new-func -- fallback
    /* @__PURE__ */ (function() {
      return this;
    })() || Function("return this")();
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/fails.js
var require_fails = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/fails.js"(exports, module2) {
    "use strict";
    module2.exports = function(exec) {
      try {
        return !!exec();
      } catch (error) {
        return true;
      }
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/descriptors.js
var require_descriptors = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/descriptors.js"(exports, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      return Object.defineProperty({}, 1, { get: function() {
        return 7;
      } })[1] !== 7;
    });
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/function-bind-native.js
var require_function_bind_native = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/function-bind-native.js"(exports, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      var test = (function() {
      }).bind();
      return typeof test != "function" || test.hasOwnProperty("prototype");
    });
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/function-call.js
var require_function_call = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/function-call.js"(exports, module2) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var call = Function.prototype.call;
    module2.exports = NATIVE_BIND ? call.bind(call) : function() {
      return call.apply(call, arguments);
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-property-is-enumerable.js
var require_object_property_is_enumerable = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-property-is-enumerable.js"(exports) {
    "use strict";
    var $propertyIsEnumerable = {}.propertyIsEnumerable;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);
    exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
      var descriptor = getOwnPropertyDescriptor(this, V);
      return !!descriptor && descriptor.enumerable;
    } : $propertyIsEnumerable;
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/create-property-descriptor.js
var require_create_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/create-property-descriptor.js"(exports, module2) {
    "use strict";
    module2.exports = function(bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value
      };
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/function-uncurry-this.js
var require_function_uncurry_this = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/function-uncurry-this.js"(exports, module2) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var FunctionPrototype = Function.prototype;
    var call = FunctionPrototype.call;
    var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
    module2.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
      return function() {
        return call.apply(fn, arguments);
      };
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/classof-raw.js
var require_classof_raw = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/classof-raw.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toString = uncurryThis({}.toString);
    var stringSlice = uncurryThis("".slice);
    module2.exports = function(it) {
      return stringSlice(toString(it), 8, -1);
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/indexed-object.js
var require_indexed_object = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/indexed-object.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var fails = require_fails();
    var classof = require_classof_raw();
    var $Object = Object;
    var split = uncurryThis("".split);
    module2.exports = fails(function() {
      return !$Object("z").propertyIsEnumerable(0);
    }) ? function(it) {
      return classof(it) === "String" ? split(it, "") : $Object(it);
    } : $Object;
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/is-null-or-undefined.js
var require_is_null_or_undefined = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/is-null-or-undefined.js"(exports, module2) {
    "use strict";
    module2.exports = function(it) {
      return it === null || it === void 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/require-object-coercible.js"(exports, module2) {
    "use strict";
    var isNullOrUndefined = require_is_null_or_undefined();
    var $TypeError = TypeError;
    module2.exports = function(it) {
      if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
      return it;
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/to-indexed-object.js
var require_to_indexed_object = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/to-indexed-object.js"(exports, module2) {
    "use strict";
    var IndexedObject = require_indexed_object();
    var requireObjectCoercible = require_require_object_coercible();
    module2.exports = function(it) {
      return IndexedObject(requireObjectCoercible(it));
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/is-callable.js
var require_is_callable = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/is-callable.js"(exports, module2) {
    "use strict";
    var documentAll = typeof document == "object" && document.all;
    module2.exports = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
      return typeof argument == "function" || argument === documentAll;
    } : function(argument) {
      return typeof argument == "function";
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/is-object.js
var require_is_object = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/is-object.js"(exports, module2) {
    "use strict";
    var isCallable = require_is_callable();
    module2.exports = function(it) {
      return typeof it == "object" ? it !== null : isCallable(it);
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/get-built-in.js
var require_get_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/get-built-in.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var isCallable = require_is_callable();
    var aFunction = function(argument) {
      return isCallable(argument) ? argument : void 0;
    };
    module2.exports = function(namespace, method) {
      return arguments.length < 2 ? aFunction(globalThis2[namespace]) : globalThis2[namespace] && globalThis2[namespace][method];
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-is-prototype-of.js
var require_object_is_prototype_of = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-is-prototype-of.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    module2.exports = uncurryThis({}.isPrototypeOf);
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/environment-user-agent.js
var require_environment_user_agent = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/environment-user-agent.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var navigator = globalThis2.navigator;
    var userAgent = navigator && navigator.userAgent;
    module2.exports = userAgent ? String(userAgent) : "";
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/environment-v8-version.js
var require_environment_v8_version = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/environment-v8-version.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var userAgent = require_environment_user_agent();
    var process = globalThis2.process;
    var Deno = globalThis2.Deno;
    var versions = process && process.versions || Deno && Deno.version;
    var v8 = versions && versions.v8;
    var match;
    var version2;
    if (v8) {
      match = v8.split(".");
      version2 = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
    }
    if (!version2 && userAgent) {
      match = userAgent.match(/Edge\/(\d+)/);
      if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version2 = +match[1];
      }
    }
    module2.exports = version2;
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/symbol-constructor-detection.js
var require_symbol_constructor_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/symbol-constructor-detection.js"(exports, module2) {
    "use strict";
    var V8_VERSION = require_environment_v8_version();
    var fails = require_fails();
    var globalThis2 = require_global_this();
    var $String = globalThis2.String;
    module2.exports = !!Object.getOwnPropertySymbols && !fails(function() {
      var symbol = Symbol("symbol detection");
      return !$String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && V8_VERSION && V8_VERSION < 41;
    });
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/use-symbol-as-uid.js
var require_use_symbol_as_uid = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/use-symbol-as-uid.js"(exports, module2) {
    "use strict";
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/is-symbol.js
var require_is_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/is-symbol.js"(exports, module2) {
    "use strict";
    var getBuiltIn = require_get_built_in();
    var isCallable = require_is_callable();
    var isPrototypeOf = require_object_is_prototype_of();
    var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
    var $Object = Object;
    module2.exports = USE_SYMBOL_AS_UID ? function(it) {
      return typeof it == "symbol";
    } : function(it) {
      var $Symbol = getBuiltIn("Symbol");
      return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/try-to-string.js
var require_try_to_string = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/try-to-string.js"(exports, module2) {
    "use strict";
    var $String = String;
    module2.exports = function(argument) {
      try {
        return $String(argument);
      } catch (error) {
        return "Object";
      }
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/a-callable.js
var require_a_callable = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/a-callable.js"(exports, module2) {
    "use strict";
    var isCallable = require_is_callable();
    var tryToString = require_try_to_string();
    var $TypeError = TypeError;
    module2.exports = function(argument) {
      if (isCallable(argument)) return argument;
      throw new $TypeError(tryToString(argument) + " is not a function");
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/get-method.js
var require_get_method = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/get-method.js"(exports, module2) {
    "use strict";
    var aCallable = require_a_callable();
    var isNullOrUndefined = require_is_null_or_undefined();
    module2.exports = function(V, P) {
      var func = V[P];
      return isNullOrUndefined(func) ? void 0 : aCallable(func);
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/ordinary-to-primitive.js
var require_ordinary_to_primitive = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/ordinary-to-primitive.js"(exports, module2) {
    "use strict";
    var call = require_function_call();
    var isCallable = require_is_callable();
    var isObject = require_is_object();
    var $TypeError = TypeError;
    module2.exports = function(input, pref) {
      var fn, val;
      if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
      if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
      if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
      throw new $TypeError("Can't convert object to primitive value");
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/is-pure.js
var require_is_pure = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/is-pure.js"(exports, module2) {
    "use strict";
    module2.exports = false;
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/define-global-property.js
var require_define_global_property = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/define-global-property.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var defineProperty = Object.defineProperty;
    module2.exports = function(key, value) {
      try {
        defineProperty(globalThis2, key, { value, configurable: true, writable: true });
      } catch (error) {
        globalThis2[key] = value;
      }
      return value;
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/shared-store.js
var require_shared_store = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/shared-store.js"(exports, module2) {
    "use strict";
    var IS_PURE = require_is_pure();
    var globalThis2 = require_global_this();
    var defineGlobalProperty = require_define_global_property();
    var SHARED = "__core-js_shared__";
    var store = module2.exports = globalThis2[SHARED] || defineGlobalProperty(SHARED, {});
    (store.versions || (store.versions = [])).push({
      version: "3.45.1",
      mode: IS_PURE ? "pure" : "global",
      copyright: "© 2014-2025 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.45.1/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/shared.js
var require_shared = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/shared.js"(exports, module2) {
    "use strict";
    var store = require_shared_store();
    module2.exports = function(key, value) {
      return store[key] || (store[key] = value || {});
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/to-object.js
var require_to_object = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/to-object.js"(exports, module2) {
    "use strict";
    var requireObjectCoercible = require_require_object_coercible();
    var $Object = Object;
    module2.exports = function(argument) {
      return $Object(requireObjectCoercible(argument));
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/has-own-property.js
var require_has_own_property = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/has-own-property.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toObject = require_to_object();
    var hasOwnProperty = uncurryThis({}.hasOwnProperty);
    module2.exports = Object.hasOwn || function hasOwn(it, key) {
      return hasOwnProperty(toObject(it), key);
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/uid.js
var require_uid = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/uid.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var id = 0;
    var postfix = Math.random();
    var toString = uncurryThis(1.1.toString);
    module2.exports = function(key) {
      return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString(++id + postfix, 36);
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/well-known-symbol.js
var require_well_known_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/well-known-symbol.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var shared = require_shared();
    var hasOwn = require_has_own_property();
    var uid = require_uid();
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
    var Symbol2 = globalThis2.Symbol;
    var WellKnownSymbolsStore = shared("wks");
    var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2["for"] || Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
    module2.exports = function(name) {
      if (!hasOwn(WellKnownSymbolsStore, name)) {
        WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol2, name) ? Symbol2[name] : createWellKnownSymbol("Symbol." + name);
      }
      return WellKnownSymbolsStore[name];
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/to-primitive.js
var require_to_primitive = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/to-primitive.js"(exports, module2) {
    "use strict";
    var call = require_function_call();
    var isObject = require_is_object();
    var isSymbol = require_is_symbol();
    var getMethod = require_get_method();
    var ordinaryToPrimitive = require_ordinary_to_primitive();
    var wellKnownSymbol = require_well_known_symbol();
    var $TypeError = TypeError;
    var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
    module2.exports = function(input, pref) {
      if (!isObject(input) || isSymbol(input)) return input;
      var exoticToPrim = getMethod(input, TO_PRIMITIVE);
      var result;
      if (exoticToPrim) {
        if (pref === void 0) pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result)) return result;
        throw new $TypeError("Can't convert object to primitive value");
      }
      if (pref === void 0) pref = "number";
      return ordinaryToPrimitive(input, pref);
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/to-property-key.js
var require_to_property_key = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/to-property-key.js"(exports, module2) {
    "use strict";
    var toPrimitive = require_to_primitive();
    var isSymbol = require_is_symbol();
    module2.exports = function(argument) {
      var key = toPrimitive(argument, "string");
      return isSymbol(key) ? key : key + "";
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/document-create-element.js
var require_document_create_element = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/document-create-element.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var isObject = require_is_object();
    var document2 = globalThis2.document;
    var EXISTS = isObject(document2) && isObject(document2.createElement);
    module2.exports = function(it) {
      return EXISTS ? document2.createElement(it) : {};
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/ie8-dom-define.js"(exports, module2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var fails = require_fails();
    var createElement = require_document_create_element();
    module2.exports = !DESCRIPTORS && !fails(function() {
      return Object.defineProperty(createElement("div"), "a", {
        get: function() {
          return 7;
        }
      }).a !== 7;
    });
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-get-own-property-descriptor.js
var require_object_get_own_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var call = require_function_call();
    var propertyIsEnumerableModule = require_object_property_is_enumerable();
    var createPropertyDescriptor = require_create_property_descriptor();
    var toIndexedObject = require_to_indexed_object();
    var toPropertyKey = require_to_property_key();
    var hasOwn = require_has_own_property();
    var IE8_DOM_DEFINE = require_ie8_dom_define();
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
      O = toIndexedObject(O);
      P = toPropertyKey(P);
      if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O, P);
      } catch (error) {
      }
      if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/v8-prototype-define-bug.js"(exports, module2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var fails = require_fails();
    module2.exports = DESCRIPTORS && fails(function() {
      return Object.defineProperty(function() {
      }, "prototype", {
        value: 42,
        writable: false
      }).prototype !== 42;
    });
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/an-object.js
var require_an_object = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/an-object.js"(exports, module2) {
    "use strict";
    var isObject = require_is_object();
    var $String = String;
    var $TypeError = TypeError;
    module2.exports = function(argument) {
      if (isObject(argument)) return argument;
      throw new $TypeError($String(argument) + " is not an object");
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-define-property.js
var require_object_define_property = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-define-property.js"(exports) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var IE8_DOM_DEFINE = require_ie8_dom_define();
    var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
    var anObject = require_an_object();
    var toPropertyKey = require_to_property_key();
    var $TypeError = TypeError;
    var $defineProperty = Object.defineProperty;
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ENUMERABLE = "enumerable";
    var CONFIGURABLE = "configurable";
    var WRITABLE = "writable";
    exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPropertyKey(P);
      anObject(Attributes);
      if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
          O[P] = Attributes.value;
          Attributes = {
            configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
            enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
            writable: false
          };
        }
      }
      return $defineProperty(O, P, Attributes);
    } : $defineProperty : function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPropertyKey(P);
      anObject(Attributes);
      if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
      } catch (error) {
      }
      if ("get" in Attributes || "set" in Attributes) throw new $TypeError("Accessors not supported");
      if ("value" in Attributes) O[P] = Attributes.value;
      return O;
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/create-non-enumerable-property.js
var require_create_non_enumerable_property = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/create-non-enumerable-property.js"(exports, module2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var definePropertyModule = require_object_define_property();
    var createPropertyDescriptor = require_create_property_descriptor();
    module2.exports = DESCRIPTORS ? function(object, key, value) {
      return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
    } : function(object, key, value) {
      object[key] = value;
      return object;
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/function-name.js
var require_function_name = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/function-name.js"(exports, module2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var hasOwn = require_has_own_property();
    var FunctionPrototype = Function.prototype;
    var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
    var EXISTS = hasOwn(FunctionPrototype, "name");
    var PROPER = EXISTS && (function something() {
    }).name === "something";
    var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
    module2.exports = {
      EXISTS,
      PROPER,
      CONFIGURABLE
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/inspect-source.js
var require_inspect_source = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/inspect-source.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var isCallable = require_is_callable();
    var store = require_shared_store();
    var functionToString = uncurryThis(Function.toString);
    if (!isCallable(store.inspectSource)) {
      store.inspectSource = function(it) {
        return functionToString(it);
      };
    }
    module2.exports = store.inspectSource;
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/weak-map-basic-detection.js
var require_weak_map_basic_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/weak-map-basic-detection.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var isCallable = require_is_callable();
    var WeakMap = globalThis2.WeakMap;
    module2.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/shared-key.js
var require_shared_key = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/shared-key.js"(exports, module2) {
    "use strict";
    var shared = require_shared();
    var uid = require_uid();
    var keys = shared("keys");
    module2.exports = function(key) {
      return keys[key] || (keys[key] = uid(key));
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/hidden-keys.js
var require_hidden_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/hidden-keys.js"(exports, module2) {
    "use strict";
    module2.exports = {};
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/internal-state.js
var require_internal_state = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/internal-state.js"(exports, module2) {
    "use strict";
    var NATIVE_WEAK_MAP = require_weak_map_basic_detection();
    var globalThis2 = require_global_this();
    var isObject = require_is_object();
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var hasOwn = require_has_own_property();
    var shared = require_shared_store();
    var sharedKey = require_shared_key();
    var hiddenKeys = require_hidden_keys();
    var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
    var TypeError2 = globalThis2.TypeError;
    var WeakMap = globalThis2.WeakMap;
    var set;
    var get;
    var has;
    var enforce = function(it) {
      return has(it) ? get(it) : set(it, {});
    };
    var getterFor = function(TYPE) {
      return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) {
          throw new TypeError2("Incompatible receiver, " + TYPE + " required");
        }
        return state;
      };
    };
    if (NATIVE_WEAK_MAP || shared.state) {
      store = shared.state || (shared.state = new WeakMap());
      store.get = store.get;
      store.has = store.has;
      store.set = store.set;
      set = function(it, metadata) {
        if (store.has(it)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        store.set(it, metadata);
        return metadata;
      };
      get = function(it) {
        return store.get(it) || {};
      };
      has = function(it) {
        return store.has(it);
      };
    } else {
      STATE = sharedKey("state");
      hiddenKeys[STATE] = true;
      set = function(it, metadata) {
        if (hasOwn(it, STATE)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
      };
      get = function(it) {
        return hasOwn(it, STATE) ? it[STATE] : {};
      };
      has = function(it) {
        return hasOwn(it, STATE);
      };
    }
    var store;
    var STATE;
    module2.exports = {
      set,
      get,
      has,
      enforce,
      getterFor
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/make-built-in.js
var require_make_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/make-built-in.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var fails = require_fails();
    var isCallable = require_is_callable();
    var hasOwn = require_has_own_property();
    var DESCRIPTORS = require_descriptors();
    var CONFIGURABLE_FUNCTION_NAME = require_function_name().CONFIGURABLE;
    var inspectSource = require_inspect_source();
    var InternalStateModule = require_internal_state();
    var enforceInternalState = InternalStateModule.enforce;
    var getInternalState = InternalStateModule.get;
    var $String = String;
    var defineProperty = Object.defineProperty;
    var stringSlice = uncurryThis("".slice);
    var replace = uncurryThis("".replace);
    var join = uncurryThis([].join);
    var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
      return defineProperty(function() {
      }, "length", { value: 8 }).length !== 8;
    });
    var TEMPLATE = String(String).split("String");
    var makeBuiltIn = module2.exports = function(value, name, options) {
      if (stringSlice($String(name), 0, 7) === "Symbol(") {
        name = "[" + replace($String(name), /^Symbol\(([^)]*)\).*$/, "$1") + "]";
      }
      if (options && options.getter) name = "get " + name;
      if (options && options.setter) name = "set " + name;
      if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS) defineProperty(value, "name", { value: name, configurable: true });
        else value.name = name;
      }
      if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) {
        defineProperty(value, "length", { value: options.arity });
      }
      try {
        if (options && hasOwn(options, "constructor") && options.constructor) {
          if (DESCRIPTORS) defineProperty(value, "prototype", { writable: false });
        } else if (value.prototype) value.prototype = void 0;
      } catch (error) {
      }
      var state = enforceInternalState(value);
      if (!hasOwn(state, "source")) {
        state.source = join(TEMPLATE, typeof name == "string" ? name : "");
      }
      return value;
    };
    Function.prototype.toString = makeBuiltIn(function toString() {
      return isCallable(this) && getInternalState(this).source || inspectSource(this);
    }, "toString");
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/define-built-in.js
var require_define_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/define-built-in.js"(exports, module2) {
    "use strict";
    var isCallable = require_is_callable();
    var definePropertyModule = require_object_define_property();
    var makeBuiltIn = require_make_built_in();
    var defineGlobalProperty = require_define_global_property();
    module2.exports = function(O, key, value, options) {
      if (!options) options = {};
      var simple = options.enumerable;
      var name = options.name !== void 0 ? options.name : key;
      if (isCallable(value)) makeBuiltIn(value, name, options);
      if (options.global) {
        if (simple) O[key] = value;
        else defineGlobalProperty(key, value);
      } else {
        try {
          if (!options.unsafe) delete O[key];
          else if (O[key]) simple = true;
        } catch (error) {
        }
        if (simple) O[key] = value;
        else definePropertyModule.f(O, key, {
          value,
          enumerable: false,
          configurable: !options.nonConfigurable,
          writable: !options.nonWritable
        });
      }
      return O;
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/math-trunc.js
var require_math_trunc = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/math-trunc.js"(exports, module2) {
    "use strict";
    var ceil = Math.ceil;
    var floor = Math.floor;
    module2.exports = Math.trunc || function trunc(x) {
      var n = +x;
      return (n > 0 ? floor : ceil)(n);
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/to-integer-or-infinity.js
var require_to_integer_or_infinity = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/to-integer-or-infinity.js"(exports, module2) {
    "use strict";
    var trunc = require_math_trunc();
    module2.exports = function(argument) {
      var number = +argument;
      return number !== number || number === 0 ? 0 : trunc(number);
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/to-absolute-index.js
var require_to_absolute_index = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/to-absolute-index.js"(exports, module2) {
    "use strict";
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var max = Math.max;
    var min = Math.min;
    module2.exports = function(index, length) {
      var integer = toIntegerOrInfinity(index);
      return integer < 0 ? max(integer + length, 0) : min(integer, length);
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/to-length.js
var require_to_length = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/to-length.js"(exports, module2) {
    "use strict";
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var min = Math.min;
    module2.exports = function(argument) {
      var len = toIntegerOrInfinity(argument);
      return len > 0 ? min(len, 9007199254740991) : 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/length-of-array-like.js
var require_length_of_array_like = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/length-of-array-like.js"(exports, module2) {
    "use strict";
    var toLength = require_to_length();
    module2.exports = function(obj) {
      return toLength(obj.length);
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/array-includes.js
var require_array_includes = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/array-includes.js"(exports, module2) {
    "use strict";
    var toIndexedObject = require_to_indexed_object();
    var toAbsoluteIndex = require_to_absolute_index();
    var lengthOfArrayLike = require_length_of_array_like();
    var createMethod = function(IS_INCLUDES) {
      return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        if (length === 0) return !IS_INCLUDES && -1;
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        if (IS_INCLUDES && el !== el) while (length > index) {
          value = O[index++];
          if (value !== value) return true;
        }
        else for (; length > index; index++) {
          if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
      };
    };
    module2.exports = {
      // `Array.prototype.includes` method
      // https://tc39.es/ecma262/#sec-array.prototype.includes
      includes: createMethod(true),
      // `Array.prototype.indexOf` method
      // https://tc39.es/ecma262/#sec-array.prototype.indexof
      indexOf: createMethod(false)
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-keys-internal.js
var require_object_keys_internal = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-keys-internal.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var hasOwn = require_has_own_property();
    var toIndexedObject = require_to_indexed_object();
    var indexOf = require_array_includes().indexOf;
    var hiddenKeys = require_hidden_keys();
    var push = uncurryThis([].push);
    module2.exports = function(object, names) {
      var O = toIndexedObject(object);
      var i = 0;
      var result = [];
      var key;
      for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
      while (names.length > i) if (hasOwn(O, key = names[i++])) {
        ~indexOf(result, key) || push(result, key);
      }
      return result;
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/enum-bug-keys.js
var require_enum_bug_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/enum-bug-keys.js"(exports, module2) {
    "use strict";
    module2.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf"
    ];
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-get-own-property-names.js
var require_object_get_own_property_names = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-get-own-property-names.js"(exports) {
    "use strict";
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = enumBugKeys.concat("length", "prototype");
    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return internalObjectKeys(O, hiddenKeys);
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-get-own-property-symbols.js
var require_object_get_own_property_symbols = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-get-own-property-symbols.js"(exports) {
    "use strict";
    exports.f = Object.getOwnPropertySymbols;
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/own-keys.js
var require_own_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/own-keys.js"(exports, module2) {
    "use strict";
    var getBuiltIn = require_get_built_in();
    var uncurryThis = require_function_uncurry_this();
    var getOwnPropertyNamesModule = require_object_get_own_property_names();
    var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
    var anObject = require_an_object();
    var concat = uncurryThis([].concat);
    module2.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
      var keys = getOwnPropertyNamesModule.f(anObject(it));
      var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
      return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/copy-constructor-properties.js
var require_copy_constructor_properties = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/copy-constructor-properties.js"(exports, module2) {
    "use strict";
    var hasOwn = require_has_own_property();
    var ownKeys = require_own_keys();
    var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
    var definePropertyModule = require_object_define_property();
    module2.exports = function(target, source, exceptions) {
      var keys = ownKeys(source);
      var defineProperty = definePropertyModule.f;
      var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
          defineProperty(target, key, getOwnPropertyDescriptor(source, key));
        }
      }
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/is-forced.js
var require_is_forced = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/is-forced.js"(exports, module2) {
    "use strict";
    var fails = require_fails();
    var isCallable = require_is_callable();
    var replacement = /#|\.prototype\./;
    var isForced = function(feature, detection) {
      var value = data[normalize(feature)];
      return value === POLYFILL ? true : value === NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
    };
    var normalize = isForced.normalize = function(string) {
      return String(string).replace(replacement, ".").toLowerCase();
    };
    var data = isForced.data = {};
    var NATIVE = isForced.NATIVE = "N";
    var POLYFILL = isForced.POLYFILL = "P";
    module2.exports = isForced;
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/export.js
var require_export = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/export.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var defineBuiltIn = require_define_built_in();
    var defineGlobalProperty = require_define_global_property();
    var copyConstructorProperties = require_copy_constructor_properties();
    var isForced = require_is_forced();
    module2.exports = function(options, source) {
      var TARGET = options.target;
      var GLOBAL = options.global;
      var STATIC = options.stat;
      var FORCED, target, key, targetProperty, sourceProperty, descriptor;
      if (GLOBAL) {
        target = globalThis2;
      } else if (STATIC) {
        target = globalThis2[TARGET] || defineGlobalProperty(TARGET, {});
      } else {
        target = globalThis2[TARGET] && globalThis2[TARGET].prototype;
      }
      if (target) for (key in source) {
        sourceProperty = source[key];
        if (options.dontCallGetSet) {
          descriptor = getOwnPropertyDescriptor(target, key);
          targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
        if (!FORCED && targetProperty !== void 0) {
          if (typeof sourceProperty == typeof targetProperty) continue;
          copyConstructorProperties(sourceProperty, targetProperty);
        }
        if (options.sham || targetProperty && targetProperty.sham) {
          createNonEnumerableProperty(sourceProperty, "sham", true);
        }
        defineBuiltIn(target, key, sourceProperty, options);
      }
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/an-instance.js
var require_an_instance = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/an-instance.js"(exports, module2) {
    "use strict";
    var isPrototypeOf = require_object_is_prototype_of();
    var $TypeError = TypeError;
    module2.exports = function(it, Prototype) {
      if (isPrototypeOf(Prototype, it)) return it;
      throw new $TypeError("Incorrect invocation");
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/correct-prototype-getter.js
var require_correct_prototype_getter = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/correct-prototype-getter.js"(exports, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      function F() {
      }
      F.prototype.constructor = null;
      return Object.getPrototypeOf(new F()) !== F.prototype;
    });
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-get-prototype-of.js
var require_object_get_prototype_of = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-get-prototype-of.js"(exports, module2) {
    "use strict";
    var hasOwn = require_has_own_property();
    var isCallable = require_is_callable();
    var toObject = require_to_object();
    var sharedKey = require_shared_key();
    var CORRECT_PROTOTYPE_GETTER = require_correct_prototype_getter();
    var IE_PROTO = sharedKey("IE_PROTO");
    var $Object = Object;
    var ObjectPrototype = $Object.prototype;
    module2.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function(O) {
      var object = toObject(O);
      if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
      var constructor = object.constructor;
      if (isCallable(constructor) && object instanceof constructor) {
        return constructor.prototype;
      }
      return object instanceof $Object ? ObjectPrototype : null;
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/define-built-in-accessor.js
var require_define_built_in_accessor = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/define-built-in-accessor.js"(exports, module2) {
    "use strict";
    var makeBuiltIn = require_make_built_in();
    var defineProperty = require_object_define_property();
    module2.exports = function(target, name, descriptor) {
      if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
      if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
      return defineProperty.f(target, name, descriptor);
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/create-property.js
var require_create_property = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/create-property.js"(exports, module2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var definePropertyModule = require_object_define_property();
    var createPropertyDescriptor = require_create_property_descriptor();
    module2.exports = function(object, key, value) {
      if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
      else object[key] = value;
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-keys.js
var require_object_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-keys.js"(exports, module2) {
    "use strict";
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    module2.exports = Object.keys || function keys(O) {
      return internalObjectKeys(O, enumBugKeys);
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-define-properties.js
var require_object_define_properties = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-define-properties.js"(exports) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
    var definePropertyModule = require_object_define_property();
    var anObject = require_an_object();
    var toIndexedObject = require_to_indexed_object();
    var objectKeys = require_object_keys();
    exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
      anObject(O);
      var props = toIndexedObject(Properties);
      var keys = objectKeys(Properties);
      var length = keys.length;
      var index = 0;
      var key;
      while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
      return O;
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/html.js
var require_html = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/html.js"(exports, module2) {
    "use strict";
    var getBuiltIn = require_get_built_in();
    module2.exports = getBuiltIn("document", "documentElement");
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-create.js
var require_object_create = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-create.js"(exports, module2) {
    "use strict";
    var anObject = require_an_object();
    var definePropertiesModule = require_object_define_properties();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = require_hidden_keys();
    var html = require_html();
    var documentCreateElement = require_document_create_element();
    var sharedKey = require_shared_key();
    var GT = ">";
    var LT = "<";
    var PROTOTYPE = "prototype";
    var SCRIPT = "script";
    var IE_PROTO = sharedKey("IE_PROTO");
    var EmptyConstructor = function() {
    };
    var scriptTag = function(content) {
      return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
    };
    var NullProtoObjectViaActiveX = function(activeXDocument2) {
      activeXDocument2.write(scriptTag(""));
      activeXDocument2.close();
      var temp = activeXDocument2.parentWindow.Object;
      activeXDocument2 = null;
      return temp;
    };
    var NullProtoObjectViaIFrame = function() {
      var iframe = documentCreateElement("iframe");
      var JS = "java" + SCRIPT + ":";
      var iframeDocument;
      iframe.style.display = "none";
      html.appendChild(iframe);
      iframe.src = String(JS);
      iframeDocument = iframe.contentWindow.document;
      iframeDocument.open();
      iframeDocument.write(scriptTag("document.F=Object"));
      iframeDocument.close();
      return iframeDocument.F;
    };
    var activeXDocument;
    var NullProtoObject = function() {
      try {
        activeXDocument = new ActiveXObject("htmlfile");
      } catch (error) {
      }
      NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
      var length = enumBugKeys.length;
      while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
      return NullProtoObject();
    };
    hiddenKeys[IE_PROTO] = true;
    module2.exports = Object.create || function create(O, Properties) {
      var result;
      if (O !== null) {
        EmptyConstructor[PROTOTYPE] = anObject(O);
        result = new EmptyConstructor();
        EmptyConstructor[PROTOTYPE] = null;
        result[IE_PROTO] = O;
      } else result = NullProtoObject();
      return Properties === void 0 ? result : definePropertiesModule.f(result, Properties);
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/iterators-core.js
var require_iterators_core = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/iterators-core.js"(exports, module2) {
    "use strict";
    var fails = require_fails();
    var isCallable = require_is_callable();
    var isObject = require_is_object();
    var create = require_object_create();
    var getPrototypeOf = require_object_get_prototype_of();
    var defineBuiltIn = require_define_built_in();
    var wellKnownSymbol = require_well_known_symbol();
    var IS_PURE = require_is_pure();
    var ITERATOR = wellKnownSymbol("iterator");
    var BUGGY_SAFARI_ITERATORS = false;
    var IteratorPrototype;
    var PrototypeOfArrayIteratorPrototype;
    var arrayIterator;
    if ([].keys) {
      arrayIterator = [].keys();
      if (!("next" in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
      else {
        PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
        if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
      }
    }
    var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function() {
      var test = {};
      return IteratorPrototype[ITERATOR].call(test) !== test;
    });
    if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
    else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);
    if (!isCallable(IteratorPrototype[ITERATOR])) {
      defineBuiltIn(IteratorPrototype, ITERATOR, function() {
        return this;
      });
    }
    module2.exports = {
      IteratorPrototype,
      BUGGY_SAFARI_ITERATORS
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/modules/es.iterator.constructor.js
var require_es_iterator_constructor = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/modules/es.iterator.constructor.js"() {
    "use strict";
    var $2 = require_export();
    var globalThis2 = require_global_this();
    var anInstance = require_an_instance();
    var anObject = require_an_object();
    var isCallable = require_is_callable();
    var getPrototypeOf = require_object_get_prototype_of();
    var defineBuiltInAccessor = require_define_built_in_accessor();
    var createProperty = require_create_property();
    var fails = require_fails();
    var hasOwn = require_has_own_property();
    var wellKnownSymbol = require_well_known_symbol();
    var IteratorPrototype = require_iterators_core().IteratorPrototype;
    var DESCRIPTORS = require_descriptors();
    var IS_PURE = require_is_pure();
    var CONSTRUCTOR = "constructor";
    var ITERATOR = "Iterator";
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    var $TypeError = TypeError;
    var NativeIterator = globalThis2[ITERATOR];
    var FORCED = IS_PURE || !isCallable(NativeIterator) || NativeIterator.prototype !== IteratorPrototype || !fails(function() {
      NativeIterator({});
    });
    var IteratorConstructor = function Iterator() {
      anInstance(this, IteratorPrototype);
      if (getPrototypeOf(this) === IteratorPrototype) throw new $TypeError("Abstract class Iterator not directly constructable");
    };
    var defineIteratorPrototypeAccessor = function(key, value) {
      if (DESCRIPTORS) {
        defineBuiltInAccessor(IteratorPrototype, key, {
          configurable: true,
          get: function() {
            return value;
          },
          set: function(replacement) {
            anObject(this);
            if (this === IteratorPrototype) throw new $TypeError("You can't redefine this property");
            if (hasOwn(this, key)) this[key] = replacement;
            else createProperty(this, key, replacement);
          }
        });
      } else IteratorPrototype[key] = value;
    };
    if (!hasOwn(IteratorPrototype, TO_STRING_TAG)) defineIteratorPrototypeAccessor(TO_STRING_TAG, ITERATOR);
    if (FORCED || !hasOwn(IteratorPrototype, CONSTRUCTOR) || IteratorPrototype[CONSTRUCTOR] === Object) {
      defineIteratorPrototypeAccessor(CONSTRUCTOR, IteratorConstructor);
    }
    IteratorConstructor.prototype = IteratorPrototype;
    $2({ global: true, constructor: true, forced: FORCED }, {
      Iterator: IteratorConstructor
    });
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/function-uncurry-this-clause.js
var require_function_uncurry_this_clause = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/function-uncurry-this-clause.js"(exports, module2) {
    "use strict";
    var classofRaw = require_classof_raw();
    var uncurryThis = require_function_uncurry_this();
    module2.exports = function(fn) {
      if (classofRaw(fn) === "Function") return uncurryThis(fn);
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/function-bind-context.js
var require_function_bind_context = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/function-bind-context.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this_clause();
    var aCallable = require_a_callable();
    var NATIVE_BIND = require_function_bind_native();
    var bind = uncurryThis(uncurryThis.bind);
    module2.exports = function(fn, that) {
      aCallable(fn);
      return that === void 0 ? fn : NATIVE_BIND ? bind(fn, that) : function() {
        return fn.apply(that, arguments);
      };
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/iterators.js
var require_iterators = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/iterators.js"(exports, module2) {
    "use strict";
    module2.exports = {};
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/is-array-iterator-method.js
var require_is_array_iterator_method = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/is-array-iterator-method.js"(exports, module2) {
    "use strict";
    var wellKnownSymbol = require_well_known_symbol();
    var Iterators = require_iterators();
    var ITERATOR = wellKnownSymbol("iterator");
    var ArrayPrototype = Array.prototype;
    module2.exports = function(it) {
      return it !== void 0 && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/to-string-tag-support.js
var require_to_string_tag_support = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/to-string-tag-support.js"(exports, module2) {
    "use strict";
    var wellKnownSymbol = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    var test = {};
    test[TO_STRING_TAG] = "z";
    module2.exports = String(test) === "[object z]";
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/classof.js
var require_classof = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/classof.js"(exports, module2) {
    "use strict";
    var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
    var isCallable = require_is_callable();
    var classofRaw = require_classof_raw();
    var wellKnownSymbol = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    var $Object = Object;
    var CORRECT_ARGUMENTS = classofRaw(/* @__PURE__ */ (function() {
      return arguments;
    })()) === "Arguments";
    var tryGet = function(it, key) {
      try {
        return it[key];
      } catch (error) {
      }
    };
    module2.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
      var O, tag, result;
      return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) === "Object" && isCallable(O.callee) ? "Arguments" : result;
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/get-iterator-method.js
var require_get_iterator_method = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/get-iterator-method.js"(exports, module2) {
    "use strict";
    var classof = require_classof();
    var getMethod = require_get_method();
    var isNullOrUndefined = require_is_null_or_undefined();
    var Iterators = require_iterators();
    var wellKnownSymbol = require_well_known_symbol();
    var ITERATOR = wellKnownSymbol("iterator");
    module2.exports = function(it) {
      if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR) || getMethod(it, "@@iterator") || Iterators[classof(it)];
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/get-iterator.js
var require_get_iterator = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/get-iterator.js"(exports, module2) {
    "use strict";
    var call = require_function_call();
    var aCallable = require_a_callable();
    var anObject = require_an_object();
    var tryToString = require_try_to_string();
    var getIteratorMethod = require_get_iterator_method();
    var $TypeError = TypeError;
    module2.exports = function(argument, usingIterator) {
      var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
      if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
      throw new $TypeError(tryToString(argument) + " is not iterable");
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/iterator-close.js
var require_iterator_close = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/iterator-close.js"(exports, module2) {
    "use strict";
    var call = require_function_call();
    var anObject = require_an_object();
    var getMethod = require_get_method();
    module2.exports = function(iterator, kind, value) {
      var innerResult, innerError;
      anObject(iterator);
      try {
        innerResult = getMethod(iterator, "return");
        if (!innerResult) {
          if (kind === "throw") throw value;
          return value;
        }
        innerResult = call(innerResult, iterator);
      } catch (error) {
        innerError = true;
        innerResult = error;
      }
      if (kind === "throw") throw value;
      if (innerError) throw innerResult;
      anObject(innerResult);
      return value;
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/iterate.js
var require_iterate = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/iterate.js"(exports, module2) {
    "use strict";
    var bind = require_function_bind_context();
    var call = require_function_call();
    var anObject = require_an_object();
    var tryToString = require_try_to_string();
    var isArrayIteratorMethod = require_is_array_iterator_method();
    var lengthOfArrayLike = require_length_of_array_like();
    var isPrototypeOf = require_object_is_prototype_of();
    var getIterator = require_get_iterator();
    var getIteratorMethod = require_get_iterator_method();
    var iteratorClose = require_iterator_close();
    var $TypeError = TypeError;
    var Result = function(stopped, result) {
      this.stopped = stopped;
      this.result = result;
    };
    var ResultPrototype = Result.prototype;
    module2.exports = function(iterable, unboundFunction, options) {
      var that = options && options.that;
      var AS_ENTRIES = !!(options && options.AS_ENTRIES);
      var IS_RECORD = !!(options && options.IS_RECORD);
      var IS_ITERATOR = !!(options && options.IS_ITERATOR);
      var INTERRUPTED = !!(options && options.INTERRUPTED);
      var fn = bind(unboundFunction, that);
      var iterator, iterFn, index, length, result, next, step;
      var stop = function(condition) {
        if (iterator) iteratorClose(iterator, "normal");
        return new Result(true, condition);
      };
      var callFn = function(value) {
        if (AS_ENTRIES) {
          anObject(value);
          return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
        }
        return INTERRUPTED ? fn(value, stop) : fn(value);
      };
      if (IS_RECORD) {
        iterator = iterable.iterator;
      } else if (IS_ITERATOR) {
        iterator = iterable;
      } else {
        iterFn = getIteratorMethod(iterable);
        if (!iterFn) throw new $TypeError(tryToString(iterable) + " is not iterable");
        if (isArrayIteratorMethod(iterFn)) {
          for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
            result = callFn(iterable[index]);
            if (result && isPrototypeOf(ResultPrototype, result)) return result;
          }
          return new Result(false);
        }
        iterator = getIterator(iterable, iterFn);
      }
      next = IS_RECORD ? iterable.next : iterator.next;
      while (!(step = call(next, iterator)).done) {
        try {
          result = callFn(step.value);
        } catch (error) {
          iteratorClose(iterator, "throw", error);
        }
        if (typeof result == "object" && result && isPrototypeOf(ResultPrototype, result)) return result;
      }
      return new Result(false);
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/get-iterator-direct.js
var require_get_iterator_direct = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/get-iterator-direct.js"(exports, module2) {
    "use strict";
    module2.exports = function(obj) {
      return {
        iterator: obj,
        next: obj.next,
        done: false
      };
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/iterator-helper-without-closing-on-early-error.js
var require_iterator_helper_without_closing_on_early_error = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/iterator-helper-without-closing-on-early-error.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    module2.exports = function(METHOD_NAME, ExpectedError) {
      var Iterator = globalThis2.Iterator;
      var IteratorPrototype = Iterator && Iterator.prototype;
      var method = IteratorPrototype && IteratorPrototype[METHOD_NAME];
      var CLOSED = false;
      if (method) try {
        method.call({
          next: function() {
            return { done: true };
          },
          "return": function() {
            CLOSED = true;
          }
        }, -1);
      } catch (error) {
        if (!(error instanceof ExpectedError)) CLOSED = false;
      }
      if (!CLOSED) return method;
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/modules/es.iterator.find.js
var require_es_iterator_find = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/modules/es.iterator.find.js"() {
    "use strict";
    var $2 = require_export();
    var call = require_function_call();
    var iterate = require_iterate();
    var aCallable = require_a_callable();
    var anObject = require_an_object();
    var getIteratorDirect = require_get_iterator_direct();
    var iteratorClose = require_iterator_close();
    var iteratorHelperWithoutClosingOnEarlyError = require_iterator_helper_without_closing_on_early_error();
    var findWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError("find", TypeError);
    $2({ target: "Iterator", proto: true, real: true, forced: findWithoutClosingOnEarlyError }, {
      find: function find(predicate) {
        anObject(this);
        try {
          aCallable(predicate);
        } catch (error) {
          iteratorClose(this, "throw", error);
        }
        if (findWithoutClosingOnEarlyError) return call(findWithoutClosingOnEarlyError, this, predicate);
        var record = getIteratorDirect(this);
        var counter = 0;
        return iterate(record, function(value, stop) {
          if (predicate(value, counter++)) return stop(value);
        }, { IS_RECORD: true, INTERRUPTED: true }).result;
      }
    });
  }
});

// dist/AjaxLogin/AjaxLogin.js
require_es_iterator_constructor();
require_es_iterator_find();
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
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    var _iterator = _createForOfIteratorHelper(__getOwnPropNames2(from)), _step;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: true
  }) : target,
  mod
));
//! src/AjaxLogin/options.json
var loginElementSelector = 'a:has(.ajaxlogin-mount-point),#pt-login>a,.vector-user-menu-login>a,#user-tools>a[href*="Special"],.mainpage-top-menu>li:nth-child(2) a';
var version = "4.0";
//! src/AjaxLogin/AjaxLogin.ts
var import_ext_gadget13 = require("ext.gadget.Util");
//! src/AjaxLogin/modules/addListener.ts
var import_ext_gadget = require("ext.gadget.FilterAlteredClicks");
var addListener = ($element, eventListener) => {
  $element.on("click", (0, import_ext_gadget.filterAlteredClicks)(eventListener));
  $element.on("keydown", eventListener);
};
//! src/AjaxLogin/modules/api.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var api = (0, import_ext_gadget2.initMwApi)("AjaxLogin/".concat(version));
//! src/AjaxLogin/modules/core.tsx
var import_ext_gadget11 = __toESM(require("ext.gadget.JSX"), 1);
//! src/AjaxLogin/modules/util/checkValid.tsx
var import_ext_gadget4 = __toESM(require("ext.gadget.JSX"), 1);
//! src/AjaxLogin/modules/i18n.ts
var import_ext_gadget3 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "6-digit number": (0, import_ext_gadget3.localize)({
      en: "6-digit number",
      ja: "6桁の数字",
      "zh-hans": "6位数字",
      "zh-hant": "6位數字"
    }),
    Cancel: (0, import_ext_gadget3.localize)({
      en: "Cancel",
      ja: "キャンセル",
      zh: "取消"
    }),
    "Enter password": (0, import_ext_gadget3.localize)({
      en: "Enter password",
      ja: "パスワード",
      "zh-hans": "请输入密码",
      "zh-hant": "請輸入密碼"
    }),
    "Enter 2FA verification code": (0, import_ext_gadget3.localize)({
      en: "2FA verification code",
      ja: "2FA認証コード",
      "zh-hans": "请输入2FA验证码",
      "zh-hant": "請輸入2FA驗證碼"
    }),
    "Forgot password?": (0, import_ext_gadget3.localize)({
      en: "Forgot password?",
      ja: "パスワードをお忘れですか？",
      "zh-hans": "忘记密码？",
      "zh-hant": "忘記密碼？"
    }),
    "Getting login token": (0, import_ext_gadget3.localize)({
      en: "Getting login token",
      ja: "ログイントークンを取得しています",
      "zh-hans": "正在获取登录令牌",
      "zh-hant": "正在獲取登入權杖"
    }),
    "help for I agree with the relevant terms": (0, import_ext_gadget3.localize)({
      en: 'When you login, it means that you have carefully read, fully understood and agreed to comply with the <a rel="noopener" target="_blank" href="/wiki/LIB:TOS" title="Terms of Service">Terms of Service</a>, <a rel="noopener" target="_blank" href="/wiki/LIB:PIPP" title="Personal Information Protection Policy">Personal Information Protection Policy</a> and <a rel="noopener" target="_blank" href="/wiki/LIB:DAGZC" title="YsArchives Association">YsArchives Association</a>.',
      ja: 'ログインをすると、あなたは本サイトの『<a rel="noopener" target="_blank" href="/wiki/LIB:TOS" title="利用規約">利用規約</a>』『<a rel="noopener" target="_blank" href="/wiki/LIB:PIPP" title="個人情報保護条例">個人情報保護条例</a>』『<a rel="noopener" target="_blank" href="/wiki/LIB:GP" title="档案馆章程">档案馆章程</a>』を十分に理解し、同意したことになります。',
      "zh-hans": '登录时，即代表您已仔细阅读、充分了解并同意遵守本网站的《<a rel="noopener" target="_blank" href="/wiki/LIB:TOS" title="用户协议">用户协议</a>》《<a rel="noopener" target="_blank" href="/wiki/LIB:PIPP" title="个人信息保护条例">个人信息保护条例</a>》《<a rel="noopener" target="_blank" href="/wiki/LIB:GP" title="档案馆章程">档案馆章程</a>》。',
      "zh-hant": '登錄時，即代表您已仔細閱讀、充分了解並同意遵守本網站的《<a rel="noopener" target="_blank" href="/wiki/LIB:TOS" title="用戶協議">用戶協議</a>》《<a rel="noopener" target="_blank" href="/wiki/LIB:PIPP" title="個人信息保護条例">個人信息保護条例</a>》《<a rel="noopener" target="_blank" href="/wiki/LIB:GP" title="档案馆章程">档案馆章程</a>》。'
    }),
    "I agree": (0, import_ext_gadget3.localize)({
      en: "I agree",
      ja: "同意する",
      zh: "我同意"
    }),
    "I agree with the relevant terms": (0, import_ext_gadget3.localize)({
      en: "I agree with the relevant terms",
      ja: "関連する規約を読み、同意",
      "zh-hans": "我已阅读并同意相关条款",
      "zh-hant": "我已閲讀並同意相關條款"
    }),
    "Invalid 2FA verification code": (0, import_ext_gadget3.localize)({
      en: "Invalid 2FA verification code",
      ja: "2FA認証コードが間違っています",
      "zh-hans": "2FA验证码错误",
      "zh-hant": "2FA驗證碼錯誤"
    }),
    "Invalid username or password": (0, import_ext_gadget3.localize)({
      en: "Invalid username or password",
      ja: "利用者名またはパスワードが間違っています",
      "zh-cn": "用户名或密码错误",
      "zh-hk": "用戶名稱或密碼錯誤",
      "zh-tw": "使用者名稱或密碼錯誤"
    }),
    "Keep me logged in": (0, import_ext_gadget3.localize)({
      en: "Keep me logged in",
      ja: "ログイン状態を保持",
      "zh-hans": "记住我的登录状态",
      "zh-hant": "記住我的登入狀態"
    }),
    "Logging in": (0, import_ext_gadget3.localize)({
      en: "Logging in",
      ja: "ログインしています",
      "zh-hans": "正在登录",
      "zh-hant": "正在登入"
    }),
    Login: (0, import_ext_gadget3.localize)({
      en: "Login",
      ja: "ログイン",
      "zh-hans": "登录",
      "zh-hant": "登入"
    }),
    "Login cancelled": (0, import_ext_gadget3.localize)({
      en: "Login cancelled",
      ja: "ログインキャンセル",
      "zh-hans": "登录取消",
      "zh-hant": "登入取消"
    }),
    "Login succeed": (0, import_ext_gadget3.localize)({
      en: "Login succeed",
      ja: "ログインに成功しました",
      "zh-hans": "登录成功",
      "zh-hant": "登入成功"
    }),
    "Login token got": (0, import_ext_gadget3.localize)({
      en: "Login token got",
      ja: "ログイントークンの取得に成功しました",
      "zh-hans": "获取登录令牌成功",
      "zh-hant": "獲取登入權杖成功"
    }),
    "New password": (0, import_ext_gadget3.localize)({
      en: "New password",
      ja: "新しいパスワード",
      "zh-hans": "新密码",
      "zh-hant": "新密碼"
    }),
    "New password is required": (0, import_ext_gadget3.localize)({
      en: "New password is required",
      ja: "新しいパスワードを設定してください",
      "zh-hans": "需要设置新密码",
      "zh-hant": "需要設置新密碼"
    }),
    Password: (0, import_ext_gadget3.localize)({
      en: "Password",
      ja: "パスワード",
      "zh-hans": "密码",
      "zh-hant": "密碼"
    }),
    "Reset password": (0, import_ext_gadget3.localize)({
      en: "Reset password",
      ja: "パスワードをリセット",
      "zh-hans": "重置密码",
      "zh-hant": "重新設定密碼"
    }),
    Username: (0, import_ext_gadget3.localize)({
      en: "Username",
      ja: "利用者名",
      "zh-cn": "用户名",
      "zh-hk": "用戶名稱",
      "zh-tw": "使用者名稱"
    }),
    AgreedOrNot: (0, import_ext_gadget3.localize)({
      en: "Please read the relevant terms. If you agree, check the checkbox to confirm",
      ja: "関連する規約をお読みいただき、同意される場合は、チェックボックスにチェックを入れて確認してください",
      "zh-hans": "请阅读相关条款。若同意，勾选复选框以确认",
      "zh-hant": "請閲讀相關條款。若同意，勾選複選框以確認"
    }),
    DoubleCheckAgreedOrNot: (0, import_ext_gadget3.localize)({
      en: 'You have carefully read, fully understood and agreed to comply with our <a rel="noopener" target="_blank" href="/wiki/LIB:TOS" title="Terms of Service">Terms of Service</a>, <a rel="noopener" target="_blank" href="/wiki/LIB:PIPP" title="Personal Information Protection Policy">Personal Information Protection Policy</a> and <a rel="noopener" target="_blank" href="/wiki/LIB:DAGZC" title="YsArchives Association">YsArchives Association</a>.',
      ja: 'あなたは本サイトの『<a rel="noopener" target="_blank" href="/wiki/LIB:TOS" title="利用規約">利用規約</a>』『<a rel="noopener" target="_blank" href="/wiki/LIB:PIPP" title="個人情報保護条例">個人情報保護条例</a>』『<a rel="noopener" target="_blank" href="/wiki/LIB:GP" title="档案馆章程">档案馆章程</a>』を十分に理解し、同意したことになります。',
      "zh-hans": '您已仔细阅读、充分了解并同意遵守本网站的《<a rel="noopener" target="_blank" href="/wiki/LIB:TOS" title="用户协议">用户协议</a>》《<a rel="noopener" target="_blank" href="/wiki/LIB:PIPP" title="个人信息保护条例">个人信息保护条例</a>》《<a rel="noopener" target="_blank" href="/wiki/LIB:GP" title="档案馆章程">档案馆章程</a>》。',
      "zh-hant": '您已仔細閱讀、充分了解並同意遵守本網站的《<a rel="noopener" target="_blank" href="/wiki/LIB:TOS" title="用戶協議">用戶協議</a>》《<a rel="noopener" target="_blank" href="/wiki/LIB:PIPP" title="個人信息保護条例">個人信息保護条例</a>》《<a rel="noopener" target="_blank" href="/wiki/LIB:GP" title="档案馆章程">档案馆章程</a>》。'
    }),
    Empty2FA: (0, import_ext_gadget3.localize)({
      en: "The 2FA verification code cannot be empty",
      ja: "2FA認証コードが入力されていません",
      "zh-hans": "2FA验证码不能为空",
      "zh-hant": "2FA驗證碼不能爲空"
    }),
    EmptyPassword: (0, import_ext_gadget3.localize)({
      en: "The password cannot be empty",
      ja: "パスワードが入力されていません",
      "zh-hans": "密码不能为空",
      "zh-hant": "密碼不能爲空"
    }),
    EmptyUsernameOrPassword: (0, import_ext_gadget3.localize)({
      en: "The username or password cannot be empty",
      ja: "利用者名またはパスワードが入力されていません",
      "zh-cn": "用户名或密码不能为空",
      "zh-hk": "用戶名稱或密碼不能爲空",
      "zh-tw": "使用者名稱或密碼不能爲空"
    }),
    "Network error": (0, import_ext_gadget3.localize)({
      en: "Network error. Redirecting...",
      ja: "ネットワークエラー、リダイレクト中...",
      "zh-hans": "网络异常。重定向中……",
      "zh-hant": "網路異常。重新導向中……"
    }),
    SelectedOrNot: (0, import_ext_gadget3.localize)({
      en: "Keep logged in for 6 months if selected; otherwise until the browser closes.",
      ja: "チェックを入れるとログイン状態が6ヶ月間保持され、入れない場合はブラウザを閉じるまで保持されます。",
      "zh-hans": "勾选则保持登录状态6个月，否则将在浏览器关闭时退出登录。",
      "zh-hant": "勾選则保持登入狀態6個月，否則將在瀏覽器關閉時登出。"
    }),
    TooFrequent: (0, import_ext_gadget3.localize)({
      en: "The user login is too frequent, please try again in five minutes",
      ja: "利用者が頻繁すぎるため、5分後に再試行してください",
      "zh-cn": "用户登录过于频繁，请五分钟后再试",
      "zh-hk": "用戶登入過於頻繁，請五分鐘後再試",
      "zh-tw": "使用者登入过于频繁，请五分钟后再试"
    }),
    "Unexpected API response": (0, import_ext_gadget3.localize)({
      en: "Unexpected API response: $1. Redirecting...",
      ja: "予期せぬAPIの応答：$1、リダイレクト中...",
      "zh-hans": "意外的API响应：$1。重定向中……",
      "zh-hant": "意外的API響應：$1。重新導向中……"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/AjaxLogin/modules/initWindowManager.ts
var initWindowManager = () => {
  return new OO.ui.WindowManager();
};
var windowManager = initWindowManager();
//! src/AjaxLogin/modules/util/oouiConfirm.ts
var oouiConfirm = /* @__PURE__ */ (function() {
  var _ref = _asyncToGenerator(function* (options) {
    const messageDialog = new OO.ui.MessageDialog();
    windowManager.addWindows([messageDialog]);
    const instance = windowManager.openWindow(messageDialog, options);
    const data = yield instance.closed;
    const _data = data;
    return !!((_data === null || _data === void 0 ? void 0 : _data.action) === "accept");
  });
  return function oouiConfirm2(_x) {
    return _ref.apply(this, arguments);
  };
})();
//! src/AjaxLogin/modules/util/checkValid.tsx
var import_ext_gadget5 = require("ext.gadget.Toastify");
var checkValid = /* @__PURE__ */ (function() {
  var _ref2 = _asyncToGenerator(function* ([agreeTosCheckbox, nameInput, pwdInput], toastifyInstance) {
    let isAgreeTos = agreeTosCheckbox.isSelected();
    const isFill = ![nameInput.getValue().trim(), pwdInput.getValue().trim()].includes("");
    toastifyInstance.hideToast();
    yield windowManager.clearWindows();
    if (!isAgreeTos) {
      isAgreeTos = yield oouiConfirm({
        message: $(/* @__PURE__ */ import_ext_gadget4.default.createElement("span", {
          innerHTML: getMessage("DoubleCheckAgreedOrNot")
        })),
        actions: [{
          label: $(/* @__PURE__ */ import_ext_gadget4.default.createElement("b", null, getMessage("Cancel"))),
          action: "cancel",
          flags: ["safe", "close"]
        }, {
          label: $(/* @__PURE__ */ import_ext_gadget4.default.createElement("b", null, getMessage("I agree"))),
          action: "accept",
          flags: ["primary", "progressive"]
        }]
      });
      if (!isAgreeTos) {
        toastifyInstance = (0, import_ext_gadget5.toastify)({
          text: getMessage("AgreedOrNot"),
          duration: -1
        }, "info");
      }
    } else if (!isFill) {
      toastifyInstance = (0, import_ext_gadget5.toastify)({
        text: getMessage("EmptyUsernameOrPassword"),
        duration: -1
      }, "info");
    }
    const isValid = isAgreeTos && isFill;
    return {
      isAgreeTos,
      isValid,
      toastifyInstance
    };
  });
  return function checkValid2(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
})();
//! src/AjaxLogin/modules/util/generateElements.tsx
var import_ext_gadget6 = __toESM(require("ext.gadget.JSX"), 1);
var generateElements = (isAgreeTos) => {
  const messageDialog = new OO.ui.MessageDialog();
  const nameInput = new OO.ui.TextInputWidget({
    icon: "userAvatar",
    placeholder: getMessage("Username"),
    validate: "non-empty"
  });
  const pwdInput = new OO.ui.TextInputWidget({
    icon: "key",
    placeholder: getMessage("Password"),
    type: "password",
    validate: "non-empty"
  });
  const agreeTosCheckbox = new OO.ui.CheckboxInputWidget({
    selected: isAgreeTos
  });
  const agreeTosLayout = new OO.ui.FieldLayout(agreeTosCheckbox, {
    align: "inline",
    label: getMessage("I agree with the relevant terms")
  });
  const keepLoginCheckbox = new OO.ui.CheckboxInputWidget();
  const keepLoginLayout = new OO.ui.FieldLayout(keepLoginCheckbox, {
    align: "inline",
    help: getMessage("SelectedOrNot"),
    label: getMessage("Keep me logged in")
  });
  const label = /* @__PURE__ */ import_ext_gadget6.default.createElement("label", {
    className: ["oo-ui-labelWidget", "oo-ui-labelElement-label"],
    style: {
      fontSize: "90%",
      textAlign: "justify"
    }
  });
  const $label = $(label);
  const $agreeTos = $label.clone().append(agreeTosLayout.$element);
  const $forgotPassword = $label.clone().css("float", "right").append(/* @__PURE__ */ import_ext_gadget6.default.createElement("a", {
    href: mw.util.getUrl("Special:PasswordReset"),
    title: getMessage("Reset password")
  }, getMessage("Forgot password?")));
  const $inputBox = $label.clone().css({
    display: "block",
    "font-size": "inherit",
    padding: "6px 0"
  }).append(nameInput.$element.css("margin-bottom", "6px"), pwdInput.$element);
  const $tosLabel = $label.clone().html(getMessage("help for I agree with the relevant terms"));
  const $rememberMe = $label.clone().append(keepLoginLayout.$element.css("margin-top", "6px"));
  return {
    $agreeTos,
    $forgotPassword,
    $inputBox,
    $rememberMe,
    $tosLabel,
    agreeTosCheckbox,
    keepLoginCheckbox,
    messageDialog,
    nameInput,
    pwdInput
  };
};
//! src/AjaxLogin/modules/util/oouiPrompt.tsx
var import_ext_gadget7 = __toESM(require("ext.gadget.JSX"), 1);
//! src/AjaxLogin/modules/util/removeWindowResizeHandler.ts
var removeWindowResizeHandler = () => {
  $(window).off({
    "orientationchange resize": windowManager.onWindowResizeHandler
  });
};
//! src/AjaxLogin/modules/util/oouiPrompt.tsx
var oouiPrompt = /* @__PURE__ */ (function() {
  var _ref3 = _asyncToGenerator(function* (retypePassword) {
    const codeDialog = new OO.ui.MessageDialog();
    const codeInput = new OO.ui.TextInputWidget({
      icon: "key",
      placeholder: retypePassword ? getMessage("New password") : getMessage("6-digit number"),
      validate: "integer"
    });
    const codeLayout = new OO.ui.FieldLayout(codeInput, {
      align: "top",
      label: $(/* @__PURE__ */ import_ext_gadget7.default.createElement("b", {
        className: ["oo-ui-messageDialog-title", "oo-ui-window-head"]
      }, retypePassword ? getMessage("Enter password") : getMessage("Enter 2FA verification code")))
    });
    windowManager.addWindows([codeDialog]);
    const instance = windowManager.openWindow(codeDialog, {
      message: codeLayout.$element
    });
    removeWindowResizeHandler();
    void instance.opened.then(() => {
      codeInput.on("enter", () => {
        windowManager.getCurrentWindow().close({
          action: "accept"
        });
      });
      codeInput.focus();
    });
    const data = yield instance.closed;
    const _data = data;
    return (_data === null || _data === void 0 ? void 0 : _data.action) === "accept" ? codeInput.getValue() : null;
  });
  return function oouiPrompt2(_x4) {
    return _ref3.apply(this, arguments);
  };
})();
//! src/AjaxLogin/modules/util/queryLoginToken.ts
var import_ext_gadget8 = require("ext.gadget.Toastify");
var queryLoginToken = /* @__PURE__ */ (function() {
  var _ref4 = _asyncToGenerator(function* (toastifyInstance) {
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget8.toastify)({
      text: getMessage("Getting login token")
    });
    const loginToken = yield api.getToken("login");
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget8.toastify)({
      text: getMessage("Login token got"),
      duration: -1
    });
    return {
      loginToken,
      toastifyInstance
    };
  });
  return function queryLoginToken2(_x5) {
    return _ref4.apply(this, arguments);
  };
})();
//! src/AjaxLogin/modules/util/redirectOriginLoginPage.ts
var import_ext_gadget9 = require("ext.gadget.Util");
var redirectOriginLoginPage = /* @__PURE__ */ (function() {
  var _ref5 = _asyncToGenerator(function* () {
    yield windowManager.clearWindows();
    yield (0, import_ext_gadget9.delay)(3 * 1e3);
    location.href = mw.util.getUrl("Special:Userlogin");
  });
  return function redirectOriginLoginPage2() {
    return _ref5.apply(this, arguments);
  };
})();
//! src/AjaxLogin/modules/util/showError.ts
var import_ext_gadget10 = require("ext.gadget.Toastify");
var showError = (error, toastifyInstance) => {
  console.error("[AjaxLogin] Ajax error:", error);
  toastifyInstance.hideToast();
  (0, import_ext_gadget10.toastify)({
    text: getMessage("Network error"),
    close: true,
    duration: -1
  }, "error");
};
//! src/AjaxLogin/modules/core.tsx
var import_ext_gadget12 = require("ext.gadget.Toastify");
var ajaxLogin = (toastifyInstance, isAgreeTos = false) => {
  const {
    $agreeTos,
    $forgotPassword,
    $inputBox,
    $rememberMe,
    $tosLabel,
    agreeTosCheckbox,
    keepLoginCheckbox,
    messageDialog,
    nameInput,
    pwdInput
  } = generateElements(isAgreeTos);
  let loginToken = "";
  const _login = /* @__PURE__ */ (function() {
    var _ref6 = _asyncToGenerator(function* ({
      loginContinue = false,
      retypePassword = false
    } = {}) {
      try {
        var _response$clientlogin, _response$clientlogin2;
        if (!loginContinue) {
          ({
            loginToken,
            toastifyInstance
          } = yield queryLoginToken(toastifyInstance));
        }
        const params = {
          action: "clientlogin",
          format: "json",
          formatversion: "2",
          logintoken: loginToken,
          loginreturnurl: location.href,
          username: nameInput.getValue(),
          password: pwdInput.getValue()
        };
        if (keepLoginCheckbox.isSelected()) {
          params.rememberMe = true;
        }
        if (loginContinue || retypePassword) {
          yield windowManager.clearWindows();
          delete params.loginreturnurl;
          delete params.username;
          delete params.password;
          params.logincontinue = true;
          const value = yield oouiPrompt(retypePassword);
          toastifyInstance.hideToast();
          if (value === null) {
            (0, import_ext_gadget12.toastify)({
              text: getMessage("Login cancelled")
            }, "info");
            void windowManager.clearWindows();
            return;
          } else if (value === "") {
            if (retypePassword) {
              toastifyInstance = (0, import_ext_gadget12.toastify)({
                text: getMessage("EmptyPassword"),
                duration: -1
              }, "warning");
              void _login({
                retypePassword: true
              });
            } else {
              toastifyInstance = (0, import_ext_gadget12.toastify)({
                text: getMessage("Empty2FA"),
                duration: -1
              }, "warning");
              void _login({
                loginContinue: true
              });
            }
            return;
          }
          if (retypePassword) {
            params.password = value;
            params.retype = value;
          } else {
            params.OATHToken = value;
          }
        }
        toastifyInstance.hideToast();
        toastifyInstance = (0, import_ext_gadget12.toastify)({
          text: getMessage("Logging in")
        }, "info");
        const response = yield api.post(params);
        toastifyInstance.hideToast();
        if (((_response$clientlogin = response["clientlogin"]) === null || _response$clientlogin === void 0 ? void 0 : _response$clientlogin.status) === "PASS") {
          (0, import_ext_gadget12.toastify)({
            text: getMessage("Login succeed")
          }, "success");
          location.reload();
        } else if ((_response$clientlogin2 = response["clientlogin"]) !== null && _response$clientlogin2 !== void 0 && _response$clientlogin2.messagecode) {
          const {
            messagecode
          } = response["clientlogin"];
          switch (messagecode) {
            case "login-throttled":
              toastifyInstance = (0, import_ext_gadget12.toastify)({
                text: getMessage("TooFrequent"),
                duration: -1
              }, "error");
              break;
            case "oathauth-auth-ui":
              void _login({
                loginContinue: true
              });
              break;
            case "oathauth-login-failed":
              toastifyInstance = (0, import_ext_gadget12.toastify)({
                text: getMessage("Invalid 2FA verification code"),
                duration: -1
              }, "warning");
              void _login({
                loginContinue: true
              });
              break;
            case "resetpass-temp-emailed":
              toastifyInstance = (0, import_ext_gadget12.toastify)({
                text: getMessage("New password is required"),
                duration: -1
              }, "warning");
              void _login({
                retypePassword: true
              });
              break;
            case "wrongpassword":
              toastifyInstance = (0, import_ext_gadget12.toastify)({
                text: getMessage("Invalid username or password"),
                duration: -1
              }, "warning");
              yield windowManager.clearWindows();
              ajaxLogin(toastifyInstance);
              break;
            default:
              (0, import_ext_gadget12.toastify)({
                text: getMessage("Unexpected API response").replace("$1", messagecode),
                close: true,
                duration: -1
              }, "error");
              void redirectOriginLoginPage();
          }
        }
      } catch (error) {
        showError(error, toastifyInstance);
        void redirectOriginLoginPage();
      }
    });
    return function login() {
      return _ref6.apply(this, arguments);
    };
  })();
  const check = /* @__PURE__ */ (function() {
    var _ref7 = _asyncToGenerator(function* () {
      const {
        isValid,
        isAgreeTos: lastIsAgreeTos,
        toastifyInstance: lastToastifyInstance
      } = yield checkValid([agreeTosCheckbox, nameInput, pwdInput], toastifyInstance);
      toastifyInstance = lastToastifyInstance;
      if (isValid) {
        void _login();
      } else {
        ajaxLogin(toastifyInstance, lastIsAgreeTos);
      }
    });
    return function check2() {
      return _ref7.apply(this, arguments);
    };
  })();
  pwdInput.on("enter", () => {
    void check();
  });
  messageDialog.getActionProcess = (action) => new OO.ui.Process(() => {
    if (action === "login") {
      void check();
    } else {
      toastifyInstance.hideToast();
      void windowManager.clearWindows();
    }
  });
  windowManager.addWindows([messageDialog]);
  void windowManager.openWindow(messageDialog, {
    actions: [{
      action: "login",
      flags: ["primary", "progressive"],
      label: $(/* @__PURE__ */ import_ext_gadget11.default.createElement("b", null, getMessage("Login")))
    }, {
      action: "cancel",
      flags: ["safe", "close"],
      label: $(/* @__PURE__ */ import_ext_gadget11.default.createElement("b", null, getMessage("Cancel")))
    }],
    message: $(/* @__PURE__ */ import_ext_gadget11.default.createElement("div", {
      className: "oo-ui-window-foot"
    }, [$inputBox, $forgotPassword, $rememberMe, $agreeTos, $tosLabel])),
    title: $(/* @__PURE__ */ import_ext_gadget11.default.createElement("b", {
      className: "oo-ui-window-head"
    }, getMessage("Login"))),
    size: "small"
  });
  removeWindowResizeHandler();
};
//! src/AjaxLogin/AjaxLogin.ts
void (0, import_ext_gadget13.getBody)().then(function initAutoLogin($body) {
  const {
    wgUserName
  } = mw.config.get();
  if (wgUserName) {
    return;
  }
  const $loginElement = $body.find(loginElementSelector);
  if (!$loginElement.length) {
    return;
  }
  windowManager.$element.appendTo($body);
  const fakeToastifyInstance = {
    hideToast: () => {
    }
  };
  const eventListener = (event) => {
    if (!(0, import_ext_gadget13.checkA11yConfirmKey)(event)) {
      return;
    }
    event.preventDefault();
    ajaxLogin(fakeToastifyInstance);
  };
  addListener($loginElement, eventListener);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwtdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi1yYXcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmRleGVkLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1jYWxsYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1idWlsdC1pbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnZpcm9ubWVudC11c2VyLWFnZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYW4taW5zdGFuY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3JyZWN0LXByb3RvdHlwZS1nZXR0ZXIuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbi1hY2Nlc3Nvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaHRtbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1jcmVhdGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMtY29yZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5pdGVyYXRvci5jb25zdHJ1Y3Rvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy1jbGF1c2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1hcnJheS1pdGVyYXRvci1tZXRob2QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jbGFzc29mLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1pdGVyYXRvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1pdGVyYXRvci1kaXJlY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvci1oZWxwZXItd2l0aG91dC1jbG9zaW5nLW9uLWVhcmx5LWVycm9yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLml0ZXJhdG9yLmZpbmQuanMiLCAic3JjL0FqYXhMb2dpbi9vcHRpb25zLmpzb24iLCAic3JjL0FqYXhMb2dpbi9BamF4TG9naW4udHMiLCAic3JjL0FqYXhMb2dpbi9tb2R1bGVzL2FkZExpc3RlbmVyLnRzIiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy9hcGkudHMiLCAic3JjL0FqYXhMb2dpbi9tb2R1bGVzL2NvcmUudHN4IiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy91dGlsL2NoZWNrVmFsaWQudHN4IiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy9pMThuLnRzIiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy9pbml0V2luZG93TWFuYWdlci50cyIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9vb3VpQ29uZmlybS50cyIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9nZW5lcmF0ZUVsZW1lbnRzLnRzeCIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9vb3VpUHJvbXB0LnRzeCIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9yZW1vdmVXaW5kb3dSZXNpemVIYW5kbGVyLnRzIiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy91dGlsL3F1ZXJ5TG9naW5Ub2tlbi50cyIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9yZWRpcmVjdE9yaWdpbkxvZ2luUGFnZS50cyIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9zaG93RXJyb3IudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIid1c2Ugc3RyaWN0JztcbnZhciBjaGVjayA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgJiYgaXQuTWF0aCA9PT0gTWF0aCAmJiBpdDtcbn07XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG5tb2R1bGUuZXhwb3J0cyA9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1nbG9iYWwtdGhpcyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBnbG9iYWxUaGlzID09ICdvYmplY3QnICYmIGdsb2JhbFRoaXMpIHx8XG4gIGNoZWNrKHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93KSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzIC0tIHNhZmVcbiAgY2hlY2sodHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZikgfHxcbiAgY2hlY2sodHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwpIHx8XG4gIGNoZWNrKHR5cGVvZiB0aGlzID09ICdvYmplY3QnICYmIHRoaXMpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuYyAtLSBmYWxsYmFja1xuICAoZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSkoKSB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIERldGVjdCBJRTgncyBpbmNvbXBsZXRlIGRlZmluZVByb3BlcnR5IGltcGxlbWVudGF0aW9uXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgMSwgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSlbMV0gIT09IDc7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZnVuY3Rpb24tcHJvdG90eXBlLWJpbmQgLS0gc2FmZVxuICB2YXIgdGVzdCA9IChmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0pLmJpbmQoKTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGlucyAtLSBzYWZlXG4gIHJldHVybiB0eXBlb2YgdGVzdCAhPSAnZnVuY3Rpb24nIHx8IHRlc3QuaGFzT3duUHJvcGVydHkoJ3Byb3RvdHlwZScpO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBjYWxsID0gRnVuY3Rpb24ucHJvdG90eXBlLmNhbGw7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZnVuY3Rpb24tcHJvdG90eXBlLWJpbmQgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IGNhbGwuYmluZChjYWxsKSA6IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGNhbGwuYXBwbHkoY2FsbCwgYXJndW1lbnRzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIE5hc2hvcm4gfiBKREs4IGJ1Z1xudmFyIE5BU0hPUk5fQlVHID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmICEkcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh7IDE6IDIgfSwgMSk7XG5cbi8vIGBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eWlzZW51bWVyYWJsZVxuZXhwb3J0cy5mID0gTkFTSE9STl9CVUcgPyBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShWKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMsIFYpO1xuICByZXR1cm4gISFkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IuZW51bWVyYWJsZTtcbn0gOiAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIGNhbGwgPSBGdW5jdGlvblByb3RvdHlwZS5jYWxsO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbnZhciB1bmN1cnJ5VGhpc1dpdGhCaW5kID0gTkFUSVZFX0JJTkQgJiYgRnVuY3Rpb25Qcm90b3R5cGUuYmluZC5iaW5kKGNhbGwsIGNhbGwpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9CSU5EID8gdW5jdXJyeVRoaXNXaXRoQmluZCA6IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjYWxsLmFwcGx5KGZuLCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbnZhciB0b1N0cmluZyA9IHVuY3VycnlUaGlzKHt9LnRvU3RyaW5nKTtcbnZhciBzdHJpbmdTbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHN0cmluZ1NsaWNlKHRvU3RyaW5nKGl0KSwgOCwgLTEpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xudmFyIHNwbGl0ID0gdW5jdXJyeVRoaXMoJycuc3BsaXQpO1xuXG4vLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xubW9kdWxlLmV4cG9ydHMgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIHRocm93cyBhbiBlcnJvciBpbiByaGlubywgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3JoaW5vL2lzc3Vlcy8zNDZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGlucyAtLSBzYWZlXG4gIHJldHVybiAhJE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApO1xufSkgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNsYXNzb2YoaXQpID09PSAnU3RyaW5nJyA/IHNwbGl0KGl0LCAnJykgOiAkT2JqZWN0KGl0KTtcbn0gOiAkT2JqZWN0O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIHdlIGNhbid0IHVzZSBqdXN0IGBpdCA9PSBudWxsYCBzaW5jZSBvZiBgZG9jdW1lbnQuYWxsYCBzcGVjaWFsIGNhc2Vcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtSXNIVE1MRERBLWludGVybmFsLXNsb3QtYWVjXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPT09IG51bGwgfHwgaXQgPT09IHVuZGVmaW5lZDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgUmVxdWlyZU9iamVjdENvZXJjaWJsZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlcXVpcmVvYmplY3Rjb2VyY2libGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpc051bGxPclVuZGVmaW5lZChpdCkpIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEluZGV4ZWRPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShpdCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90XG52YXIgZG9jdW1lbnRBbGwgPSB0eXBlb2YgZG9jdW1lbnQgPT0gJ29iamVjdCcgJiYgZG9jdW1lbnQuYWxsO1xuXG4vLyBgSXNDYWxsYWJsZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWlzY2FsbGFibGVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL25vLXR5cGVvZi11bmRlZmluZWQgLS0gcmVxdWlyZWQgZm9yIHRlc3Rpbmdcbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIGRvY3VtZW50QWxsID09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50QWxsICE9PSB1bmRlZmluZWQgPyBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PSAnZnVuY3Rpb24nIHx8IGFyZ3VtZW50ID09PSBkb2N1bWVudEFsbDtcbn0gOiBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PSAnZnVuY3Rpb24nO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiBpc0NhbGxhYmxlKGl0KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciBhRnVuY3Rpb24gPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGlzQ2FsbGFibGUoYXJndW1lbnQpID8gYXJndW1lbnQgOiB1bmRlZmluZWQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lc3BhY2UsIG1ldGhvZCkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBhRnVuY3Rpb24oZ2xvYmFsVGhpc1tuYW1lc3BhY2VdKSA6IGdsb2JhbFRoaXNbbmFtZXNwYWNlXSAmJiBnbG9iYWxUaGlzW25hbWVzcGFjZV1bbWV0aG9kXTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVuY3VycnlUaGlzKHt9LmlzUHJvdG90eXBlT2YpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG5cbnZhciBuYXZpZ2F0b3IgPSBnbG9iYWxUaGlzLm5hdmlnYXRvcjtcbnZhciB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudDtcblxubW9kdWxlLmV4cG9ydHMgPSB1c2VyQWdlbnQgPyBTdHJpbmcodXNlckFnZW50KSA6ICcnO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Vudmlyb25tZW50LXVzZXItYWdlbnQnKTtcblxudmFyIHByb2Nlc3MgPSBnbG9iYWxUaGlzLnByb2Nlc3M7XG52YXIgRGVubyA9IGdsb2JhbFRoaXMuRGVubztcbnZhciB2ZXJzaW9ucyA9IHByb2Nlc3MgJiYgcHJvY2Vzcy52ZXJzaW9ucyB8fCBEZW5vICYmIERlbm8udmVyc2lvbjtcbnZhciB2OCA9IHZlcnNpb25zICYmIHZlcnNpb25zLnY4O1xudmFyIG1hdGNoLCB2ZXJzaW9uO1xuXG5pZiAodjgpIHtcbiAgbWF0Y2ggPSB2OC5zcGxpdCgnLicpO1xuICAvLyBpbiBvbGQgQ2hyb21lLCB2ZXJzaW9ucyBvZiBWOCBpc24ndCBWOCA9IENocm9tZSAvIDEwXG4gIC8vIGJ1dCB0aGVpciBjb3JyZWN0IHZlcnNpb25zIGFyZSBub3QgaW50ZXJlc3RpbmcgZm9yIHVzXG4gIHZlcnNpb24gPSBtYXRjaFswXSA+IDAgJiYgbWF0Y2hbMF0gPCA0ID8gMSA6ICsobWF0Y2hbMF0gKyBtYXRjaFsxXSk7XG59XG5cbi8vIEJyb3dzZXJGUyBOb2RlSlMgYHByb2Nlc3NgIHBvbHlmaWxsIGluY29ycmVjdGx5IHNldCBgLnY4YCB0byBgMC4wYFxuLy8gc28gY2hlY2sgYHVzZXJBZ2VudGAgZXZlbiBpZiBgLnY4YCBleGlzdHMsIGJ1dCAwXG5pZiAoIXZlcnNpb24gJiYgdXNlckFnZW50KSB7XG4gIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9FZGdlXFwvKFxcZCspLyk7XG4gIGlmICghbWF0Y2ggfHwgbWF0Y2hbMV0gPj0gNzQpIHtcbiAgICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvQ2hyb21lXFwvKFxcZCspLyk7XG4gICAgaWYgKG1hdGNoKSB2ZXJzaW9uID0gK21hdGNoWzFdO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmVyc2lvbjtcbiIsICIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1zeW1ib2wgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Vudmlyb25tZW50LXY4LXZlcnNpb24nKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcblxudmFyICRTdHJpbmcgPSBnbG9iYWxUaGlzLlN0cmluZztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gcmVxdWlyZWQgZm9yIHRlc3Rpbmdcbm1vZHVsZS5leHBvcnRzID0gISFPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBzeW1ib2wgPSBTeW1ib2woJ3N5bWJvbCBkZXRlY3Rpb24nKTtcbiAgLy8gQ2hyb21lIDM4IFN5bWJvbCBoYXMgaW5jb3JyZWN0IHRvU3RyaW5nIGNvbnZlcnNpb25cbiAgLy8gYGdldC1vd24tcHJvcGVydHktc3ltYm9sc2AgcG9seWZpbGwgc3ltYm9scyBjb252ZXJ0ZWQgdG8gb2JqZWN0IGFyZSBub3QgU3ltYm9sIGluc3RhbmNlc1xuICAvLyBuYjogRG8gbm90IGNhbGwgYFN0cmluZ2AgZGlyZWN0bHkgdG8gYXZvaWQgdGhpcyBiZWluZyBvcHRpbWl6ZWQgb3V0IHRvIGBzeW1ib2wrJydgIHdoaWNoIHdpbGwsXG4gIC8vIG9mIGNvdXJzZSwgZmFpbC5cbiAgcmV0dXJuICEkU3RyaW5nKHN5bWJvbCkgfHwgIShPYmplY3Qoc3ltYm9sKSBpbnN0YW5jZW9mIFN5bWJvbCkgfHxcbiAgICAvLyBDaHJvbWUgMzgtNDAgc3ltYm9scyBhcmUgbm90IGluaGVyaXRlZCBmcm9tIERPTSBjb2xsZWN0aW9ucyBwcm90b3R5cGVzIHRvIGluc3RhbmNlc1xuICAgICFTeW1ib2wuc2hhbSAmJiBWOF9WRVJTSU9OICYmIFY4X1ZFUlNJT04gPCA0MTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9TWU1CT0wgJiZcbiAgIVN5bWJvbC5zaGFtICYmXG4gIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCc7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZicpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVTRV9TWU1CT0xfQVNfVUlEID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHZhciAkU3ltYm9sID0gZ2V0QnVpbHRJbignU3ltYm9sJyk7XG4gIHJldHVybiBpc0NhbGxhYmxlKCRTeW1ib2wpICYmIGlzUHJvdG90eXBlT2YoJFN5bWJvbC5wcm90b3R5cGUsICRPYmplY3QoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICRTdHJpbmcgPSBTdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICRTdHJpbmcoYXJndW1lbnQpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiAnT2JqZWN0JztcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHRyeVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RyeS10by1zdHJpbmcnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBBc3NlcnQ6IElzQ2FsbGFibGUoYXJndW1lbnQpIGlzIHRydWVgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNDYWxsYWJsZShhcmd1bWVudCkpIHJldHVybiBhcmd1bWVudDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IodHJ5VG9TdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG4vLyBgR2V0TWV0aG9kYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZ2V0bWV0aG9kXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChWLCBQKSB7XG4gIHZhciBmdW5jID0gVltQXTtcbiAgcmV0dXJuIGlzTnVsbE9yVW5kZWZpbmVkKGZ1bmMpID8gdW5kZWZpbmVkIDogYUNhbGxhYmxlKGZ1bmMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYE9yZGluYXJ5VG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vcmRpbmFyeXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKHByZWYgPT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChpc0NhbGxhYmxlKGZuID0gaW5wdXQudmFsdWVPZikgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChwcmVmICE9PSAnc3RyaW5nJyAmJiBpc0NhbGxhYmxlKGZuID0gaW5wdXQudG9TdHJpbmcpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICB0cnkge1xuICAgIGRlZmluZVByb3BlcnR5KGdsb2JhbFRoaXMsIGtleSwgeyB2YWx1ZTogdmFsdWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZ2xvYmFsVGhpc1trZXldID0gdmFsdWU7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gbW9kdWxlLmV4cG9ydHMgPSBnbG9iYWxUaGlzW1NIQVJFRF0gfHwgZGVmaW5lR2xvYmFsUHJvcGVydHkoU0hBUkVELCB7fSk7XG5cbihzdG9yZS52ZXJzaW9ucyB8fCAoc3RvcmUudmVyc2lvbnMgPSBbXSkpLnB1c2goe1xuICB2ZXJzaW9uOiAnMy40NS4xJyxcbiAgbW9kZTogSVNfUFVSRSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE0LTIwMjUgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknLFxuICBsaWNlbnNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvYmxvYi92My40NS4xL0xJQ0VOU0UnLFxuICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcydcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlIHx8IHt9KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG4vLyBgVG9PYmplY3RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b29iamVjdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuICRPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IHVuY3VycnlUaGlzKHt9Lmhhc093blByb3BlcnR5KTtcblxuLy8gYEhhc093blByb3BlcnR5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaGFzb3ducHJvcGVydHlcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaGFzb3duIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0Lmhhc093biB8fCBmdW5jdGlvbiBoYXNPd24oaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkodG9PYmplY3QoaXQpLCBrZXkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbnZhciBpZCA9IDA7XG52YXIgcG9zdGZpeCA9IE1hdGgucmFuZG9tKCk7XG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcygxLjEudG9TdHJpbmcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJyArIChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5KSArICcpXycgKyB0b1N0cmluZygrK2lkICsgcG9zdGZpeCwgMzYpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24nKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xuXG52YXIgU3ltYm9sID0gZ2xvYmFsVGhpcy5TeW1ib2w7XG52YXIgV2VsbEtub3duU3ltYm9sc1N0b3JlID0gc2hhcmVkKCd3a3MnKTtcbnZhciBjcmVhdGVXZWxsS25vd25TeW1ib2wgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IFN5bWJvbFsnZm9yJ10gfHwgU3ltYm9sIDogU3ltYm9sICYmIFN5bWJvbC53aXRob3V0U2V0dGVyIHx8IHVpZDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICBpZiAoIWhhc093bihXZWxsS25vd25TeW1ib2xzU3RvcmUsIG5hbWUpKSB7XG4gICAgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID0gTkFUSVZFX1NZTUJPTCAmJiBoYXNPd24oU3ltYm9sLCBuYW1lKVxuICAgICAgPyBTeW1ib2xbbmFtZV1cbiAgICAgIDogY3JlYXRlV2VsbEtub3duU3ltYm9sKCdTeW1ib2wuJyArIG5hbWUpO1xuICB9IHJldHVybiBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1zeW1ib2wnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xudmFyIG9yZGluYXJ5VG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3JkaW5hcnktdG8tcHJpbWl0aXZlJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xudmFyIFRPX1BSSU1JVElWRSA9IHdlbGxLbm93blN5bWJvbCgndG9QcmltaXRpdmUnKTtcblxuLy8gYFRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIGlmICghaXNPYmplY3QoaW5wdXQpIHx8IGlzU3ltYm9sKGlucHV0KSkgcmV0dXJuIGlucHV0O1xuICB2YXIgZXhvdGljVG9QcmltID0gZ2V0TWV0aG9kKGlucHV0LCBUT19QUklNSVRJVkUpO1xuICB2YXIgcmVzdWx0O1xuICBpZiAoZXhvdGljVG9QcmltKSB7XG4gICAgaWYgKHByZWYgPT09IHVuZGVmaW5lZCkgcHJlZiA9ICdkZWZhdWx0JztcbiAgICByZXN1bHQgPSBjYWxsKGV4b3RpY1RvUHJpbSwgaW5wdXQsIHByZWYpO1xuICAgIGlmICghaXNPYmplY3QocmVzdWx0KSB8fCBpc1N5bWJvbChyZXN1bHQpKSByZXR1cm4gcmVzdWx0O1xuICAgIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xuICB9XG4gIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnbnVtYmVyJztcbiAgcmV0dXJuIG9yZGluYXJ5VG9QcmltaXRpdmUoaW5wdXQsIHByZWYpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG5cbi8vIGBUb1Byb3BlcnR5S2V5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcm9wZXJ0eWtleVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCAnc3RyaW5nJyk7XG4gIHJldHVybiBpc1N5bWJvbChrZXkpID8ga2V5IDoga2V5ICsgJyc7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciBkb2N1bWVudCA9IGdsb2JhbFRoaXMuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBFWElTVFMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBFWElTVFMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcblxuLy8gVGhhbmtzIHRvIElFOCBmb3IgaXRzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3JlYXRlRWxlbWVudCgnZGl2JyksICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfVxuICB9KS5hICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhc093bihPLCBQKSkgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcighY2FsbChwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mLCBPLCBQKSwgT1tQXSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIFY4IH4gQ2hyb21lIDM2LVxuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzMzNFxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdwcm90b3R5cGUnLCB7XG4gICAgdmFsdWU6IDQyLFxuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KS5wcm90b3R5cGUgIT09IDQyO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFN0cmluZyA9IFN0cmluZztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBUeXBlKGFyZ3VtZW50KSBpcyBPYmplY3RgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNPYmplY3QoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKCRTdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYW4gb2JqZWN0Jyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG52YXIgVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdjgtcHJvdG90eXBlLWRlZmluZS1idWcnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBFTlVNRVJBQkxFID0gJ2VudW1lcmFibGUnO1xudmFyIENPTkZJR1VSQUJMRSA9ICdjb25maWd1cmFibGUnO1xudmFyIFdSSVRBQkxFID0gJ3dyaXRhYmxlJztcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA/IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKHR5cGVvZiBPID09PSAnZnVuY3Rpb24nICYmIFAgPT09ICdwcm90b3R5cGUnICYmICd2YWx1ZScgaW4gQXR0cmlidXRlcyAmJiBXUklUQUJMRSBpbiBBdHRyaWJ1dGVzICYmICFBdHRyaWJ1dGVzW1dSSVRBQkxFXSkge1xuICAgIHZhciBjdXJyZW50ID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgICBpZiAoY3VycmVudCAmJiBjdXJyZW50W1dSSVRBQkxFXSkge1xuICAgICAgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gICAgICBBdHRyaWJ1dGVzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IENPTkZJR1VSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tDT05GSUdVUkFCTEVdIDogY3VycmVudFtDT05GSUdVUkFCTEVdLFxuICAgICAgICBlbnVtZXJhYmxlOiBFTlVNRVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0VOVU1FUkFCTEVdIDogY3VycmVudFtFTlVNRVJBQkxFXSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgICB9O1xuICAgIH1cbiAgfSByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xufSA6ICRkZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0RGVzY3JpcHRvciA9IERFU0NSSVBUT1JTICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbnZhciBFWElTVFMgPSBoYXNPd24oRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJyk7XG4vLyBhZGRpdGlvbmFsIHByb3RlY3Rpb24gZnJvbSBtaW5pZmllZCAvIG1hbmdsZWQgLyBkcm9wcGVkIGZ1bmN0aW9uIG5hbWVzXG52YXIgUFJPUEVSID0gRVhJU1RTICYmIChmdW5jdGlvbiBzb21ldGhpbmcoKSB7IC8qIGVtcHR5ICovIH0pLm5hbWUgPT09ICdzb21ldGhpbmcnO1xudmFyIENPTkZJR1VSQUJMRSA9IEVYSVNUUyAmJiAoIURFU0NSSVBUT1JTIHx8IChERVNDUklQVE9SUyAmJiBnZXREZXNjcmlwdG9yKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpLmNvbmZpZ3VyYWJsZSkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRVhJU1RTOiBFWElTVFMsXG4gIFBST1BFUjogUFJPUEVSLFxuICBDT05GSUdVUkFCTEU6IENPTkZJR1VSQUJMRVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG52YXIgZnVuY3Rpb25Ub1N0cmluZyA9IHVuY3VycnlUaGlzKEZ1bmN0aW9uLnRvU3RyaW5nKTtcblxuLy8gdGhpcyBoZWxwZXIgYnJva2VuIGluIGBjb3JlLWpzQDMuNC4xLTMuNC40YCwgc28gd2UgY2FuJ3QgdXNlIGBzaGFyZWRgIGhlbHBlclxuaWYgKCFpc0NhbGxhYmxlKHN0b3JlLmluc3BlY3RTb3VyY2UpKSB7XG4gIHN0b3JlLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb25Ub1N0cmluZyhpdCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmUuaW5zcGVjdFNvdXJjZTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWxUaGlzLldlYWtNYXA7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNDYWxsYWJsZShXZWFrTWFwKSAmJiAvbmF0aXZlIGNvZGUvLnRlc3QoU3RyaW5nKFdlYWtNYXApKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcblxudmFyIGtleXMgPSBzaGFyZWQoJ2tleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBrZXlzW2tleV0gfHwgKGtleXNba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX1dFQUtfTUFQID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlYWstbWFwLWJhc2ljLWRldGVjdGlvbicpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCA9ICdPYmplY3QgYWxyZWFkeSBpbml0aWFsaXplZCc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsVGhpcy5UeXBlRXJyb3I7XG52YXIgV2Vha01hcCA9IGdsb2JhbFRoaXMuV2Vha01hcDtcbnZhciBzZXQsIGdldCwgaGFzO1xuXG52YXIgZW5mb3JjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaGFzKGl0KSA/IGdldChpdCkgOiBzZXQoaXQsIHt9KTtcbn07XG5cbnZhciBnZXR0ZXJGb3IgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIHN0YXRlO1xuICAgIGlmICghaXNPYmplY3QoaXQpIHx8IChzdGF0ZSA9IGdldChpdCkpLnR5cGUgIT09IFRZUEUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkJyk7XG4gICAgfSByZXR1cm4gc3RhdGU7XG4gIH07XG59O1xuXG5pZiAoTkFUSVZFX1dFQUtfTUFQIHx8IHNoYXJlZC5zdGF0ZSkge1xuICB2YXIgc3RvcmUgPSBzaGFyZWQuc3RhdGUgfHwgKHNoYXJlZC5zdGF0ZSA9IG5ldyBXZWFrTWFwKCkpO1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG4gIHN0b3JlLmdldCA9IHN0b3JlLmdldDtcbiAgc3RvcmUuaGFzID0gc3RvcmUuaGFzO1xuICBzdG9yZS5zZXQgPSBzdG9yZS5zZXQ7XG4gIC8qIGVzbGludC1lbmFibGUgbm8tc2VsZi1hc3NpZ24gLS0gcHJvdG90eXBlIG1ldGhvZHMgcHJvdGVjdGlvbiAqL1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKHN0b3JlLmhhcyhpdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIHN0b3JlLnNldChpdCwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHN0b3JlLmdldChpdCkgfHwge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBzdG9yZS5oYXMoaXQpO1xuICB9O1xufSBlbHNlIHtcbiAgdmFyIFNUQVRFID0gc2hhcmVkS2V5KCdzdGF0ZScpO1xuICBoaWRkZW5LZXlzW1NUQVRFXSA9IHRydWU7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoaGFzT3duKGl0LCBTVEFURSkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShpdCwgU1RBVEUsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKSA/IGl0W1NUQVRFXSA6IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldCxcbiAgZ2V0OiBnZXQsXG4gIGhhczogaGFzLFxuICBlbmZvcmNlOiBlbmZvcmNlLFxuICBnZXR0ZXJGb3I6IGdldHRlckZvclxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLW5hbWUnKS5DT05GSUdVUkFCTEU7XG52YXIgaW5zcGVjdFNvdXJjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZScpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcblxudmFyIGVuZm9yY2VJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5lbmZvcmNlO1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldDtcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG52YXIgcmVwbGFjZSA9IHVuY3VycnlUaGlzKCcnLnJlcGxhY2UpO1xudmFyIGpvaW4gPSB1bmN1cnJ5VGhpcyhbXS5qb2luKTtcblxudmFyIENPTkZJR1VSQUJMRV9MRU5HVEggPSBERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAnbGVuZ3RoJywgeyB2YWx1ZTogOCB9KS5sZW5ndGggIT09IDg7XG59KTtcblxudmFyIFRFTVBMQVRFID0gU3RyaW5nKFN0cmluZykuc3BsaXQoJ1N0cmluZycpO1xuXG52YXIgbWFrZUJ1aWx0SW4gPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgbmFtZSwgb3B0aW9ucykge1xuICBpZiAoc3RyaW5nU2xpY2UoJFN0cmluZyhuYW1lKSwgMCwgNykgPT09ICdTeW1ib2woJykge1xuICAgIG5hbWUgPSAnWycgKyByZXBsYWNlKCRTdHJpbmcobmFtZSksIC9eU3ltYm9sXFwoKFteKV0qKVxcKS4qJC8sICckMScpICsgJ10nO1xuICB9XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZ2V0dGVyKSBuYW1lID0gJ2dldCAnICsgbmFtZTtcbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5zZXR0ZXIpIG5hbWUgPSAnc2V0ICcgKyBuYW1lO1xuICBpZiAoIWhhc093bih2YWx1ZSwgJ25hbWUnKSB8fCAoQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgJiYgdmFsdWUubmFtZSAhPT0gbmFtZSkpIHtcbiAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbmFtZScsIHsgdmFsdWU6IG5hbWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbiAgICBlbHNlIHZhbHVlLm5hbWUgPSBuYW1lO1xuICB9XG4gIGlmIChDT05GSUdVUkFCTEVfTEVOR1RIICYmIG9wdGlvbnMgJiYgaGFzT3duKG9wdGlvbnMsICdhcml0eScpICYmIHZhbHVlLmxlbmd0aCAhPT0gb3B0aW9ucy5hcml0eSkge1xuICAgIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbGVuZ3RoJywgeyB2YWx1ZTogb3B0aW9ucy5hcml0eSB9KTtcbiAgfVxuICB0cnkge1xuICAgIGlmIChvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnY29uc3RydWN0b3InKSAmJiBvcHRpb25zLmNvbnN0cnVjdG9yKSB7XG4gICAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAncHJvdG90eXBlJywgeyB3cml0YWJsZTogZmFsc2UgfSk7XG4gICAgLy8gaW4gVjggfiBDaHJvbWUgNTMsIHByb3RvdHlwZXMgb2Ygc29tZSBtZXRob2RzLCBsaWtlIGBBcnJheS5wcm90b3R5cGUudmFsdWVzYCwgYXJlIG5vbi13cml0YWJsZVxuICAgIH0gZWxzZSBpZiAodmFsdWUucHJvdG90eXBlKSB2YWx1ZS5wcm90b3R5cGUgPSB1bmRlZmluZWQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgdmFyIHN0YXRlID0gZW5mb3JjZUludGVybmFsU3RhdGUodmFsdWUpO1xuICBpZiAoIWhhc093bihzdGF0ZSwgJ3NvdXJjZScpKSB7XG4gICAgc3RhdGUuc291cmNlID0gam9pbihURU1QTEFURSwgdHlwZW9mIG5hbWUgPT0gJ3N0cmluZycgPyBuYW1lIDogJycpO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG5cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV4dGVuZC1uYXRpdmUgLS0gcmVxdWlyZWRcbkZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IG1ha2VCdWlsdEluKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gaXNDYWxsYWJsZSh0aGlzKSAmJiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnNvdXJjZSB8fCBpbnNwZWN0U291cmNlKHRoaXMpO1xufSwgJ3RvU3RyaW5nJyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgbWFrZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWFrZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgdmFyIHNpbXBsZSA9IG9wdGlvbnMuZW51bWVyYWJsZTtcbiAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWUgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubmFtZSA6IGtleTtcbiAgaWYgKGlzQ2FsbGFibGUodmFsdWUpKSBtYWtlQnVpbHRJbih2YWx1ZSwgbmFtZSwgb3B0aW9ucyk7XG4gIGlmIChvcHRpb25zLmdsb2JhbCkge1xuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lR2xvYmFsUHJvcGVydHkoa2V5LCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghb3B0aW9ucy51bnNhZmUpIGRlbGV0ZSBPW2tleV07XG4gICAgICBlbHNlIGlmIChPW2tleV0pIHNpbXBsZSA9IHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiAhb3B0aW9ucy5ub25Db25maWd1cmFibGUsXG4gICAgICB3cml0YWJsZTogIW9wdGlvbnMubm9uV3JpdGFibGVcbiAgICB9KTtcbiAgfSByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4vLyBgTWF0aC50cnVuY2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hdGgudHJ1bmNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1tYXRoLXRydW5jIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gTWF0aC50cnVuYyB8fCBmdW5jdGlvbiB0cnVuYyh4KSB7XG4gIHZhciBuID0gK3g7XG4gIHJldHVybiAobiA+IDAgPyBmbG9vciA6IGNlaWwpKG4pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdHJ1bmMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWF0aC10cnVuYycpO1xuXG4vLyBgVG9JbnRlZ2VyT3JJbmZpbml0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvaW50ZWdlcm9yaW5maW5pdHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBudW1iZXIgPSArYXJndW1lbnQ7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gIHJldHVybiBudW1iZXIgIT09IG51bWJlciB8fCBudW1iZXIgPT09IDAgPyAwIDogdHJ1bmMobnVtYmVyKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIEhlbHBlciBmb3IgYSBwb3B1bGFyIHJlcGVhdGluZyBjYXNlIG9mIHRoZSBzcGVjOlxuLy8gTGV0IGludGVnZXIgYmUgPyBUb0ludGVnZXIoaW5kZXgpLlxuLy8gSWYgaW50ZWdlciA8IDAsIGxldCByZXN1bHQgYmUgbWF4KChsZW5ndGggKyBpbnRlZ2VyKSwgMCk7IGVsc2UgbGV0IHJlc3VsdCBiZSBtaW4oaW50ZWdlciwgbGVuZ3RoKS5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgdmFyIGludGVnZXIgPSB0b0ludGVnZXJPckluZmluaXR5KGluZGV4KTtcbiAgcmV0dXJuIGludGVnZXIgPCAwID8gbWF4KGludGVnZXIgKyBsZW5ndGgsIDApIDogbWluKGludGVnZXIsIGxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBgVG9MZW5ndGhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2xlbmd0aFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGxlbiA9IHRvSW50ZWdlck9ySW5maW5pdHkoYXJndW1lbnQpO1xuICByZXR1cm4gbGVuID4gMCA/IG1pbihsZW4sIDB4MUZGRkZGRkZGRkZGRkYpIDogMDsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG5cbi8vIGBMZW5ndGhPZkFycmF5TGlrZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWxlbmd0aG9mYXJyYXlsaWtlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHRvTGVuZ3RoKG9iai5sZW5ndGgpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGluZGV4T2YsIGluY2x1ZGVzIH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gICAgaWYgKGxlbmd0aCA9PT0gMCkgcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT09IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgICBpZiAodmFsdWUgIT09IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICBpZiAoKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pICYmIE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuICBpbmNsdWRlczogY3JlYXRlTWV0aG9kKHRydWUpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4gIGluZGV4T2Y6IGNyZWF0ZU1ldGhvZChmYWxzZSlcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgaW5kZXhPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluZGV4T2Y7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSAhaGFzT3duKGhpZGRlbktleXMsIGtleSkgJiYgaGFzT3duKE8sIGtleSkgJiYgcHVzaChyZXN1bHQsIGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXNPd24oTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+aW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcHVzaChyZXN1bHQsIGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gSUU4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IFtcbiAgJ2NvbnN0cnVjdG9yJyxcbiAgJ2hhc093blByb3BlcnR5JyxcbiAgJ2lzUHJvdG90eXBlT2YnLFxuICAncHJvcGVydHlJc0VudW1lcmFibGUnLFxuICAndG9Mb2NhbGVTdHJpbmcnLFxuICAndG9TdHJpbmcnLFxuICAndmFsdWVPZidcbl07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxudmFyIGhpZGRlbktleXMgPSBlbnVtQnVnS2V5cy5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5bmFtZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHluYW1lcyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcblxudmFyIGNvbmNhdCA9IHVuY3VycnlUaGlzKFtdLmNvbmNhdCk7XG5cbi8vIGFsbCBvYmplY3Qga2V5cywgaW5jbHVkZXMgbm9uLWVudW1lcmFibGUgYW5kIHN5bWJvbHNcbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignUmVmbGVjdCcsICdvd25LZXlzJykgfHwgZnVuY3Rpb24gb3duS2V5cyhpdCkge1xuICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUuZihhbk9iamVjdChpdCkpO1xuICB2YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlLmY7XG4gIHJldHVybiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBjb25jYXQoa2V5cywgZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSkgOiBrZXlzO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBvd25LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL293bi1rZXlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlLCBleGNlcHRpb25zKSB7XG4gIHZhciBrZXlzID0gb3duS2V5cyhzb3VyY2UpO1xuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mO1xuICB2YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmY7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGlmICghaGFzT3duKHRhcmdldCwga2V5KSAmJiAhKGV4Y2VwdGlvbnMgJiYgaGFzT3duKGV4Y2VwdGlvbnMsIGtleSkpKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgfVxuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIHJlcGxhY2VtZW50ID0gLyN8XFwucHJvdG90eXBlXFwuLztcblxudmFyIGlzRm9yY2VkID0gZnVuY3Rpb24gKGZlYXR1cmUsIGRldGVjdGlvbikge1xuICB2YXIgdmFsdWUgPSBkYXRhW25vcm1hbGl6ZShmZWF0dXJlKV07XG4gIHJldHVybiB2YWx1ZSA9PT0gUE9MWUZJTEwgPyB0cnVlXG4gICAgOiB2YWx1ZSA9PT0gTkFUSVZFID8gZmFsc2VcbiAgICA6IGlzQ2FsbGFibGUoZGV0ZWN0aW9uKSA/IGZhaWxzKGRldGVjdGlvbilcbiAgICA6ICEhZGV0ZWN0aW9uO1xufTtcblxudmFyIG5vcm1hbGl6ZSA9IGlzRm9yY2VkLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UocmVwbGFjZW1lbnQsICcuJykudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBkYXRhID0gaXNGb3JjZWQuZGF0YSA9IHt9O1xudmFyIE5BVElWRSA9IGlzRm9yY2VkLk5BVElWRSA9ICdOJztcbnZhciBQT0xZRklMTCA9IGlzRm9yY2VkLlBPTFlGSUxMID0gJ1AnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRm9yY2VkO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcbnZhciBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcycpO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xuXG4vKlxuICBvcHRpb25zLnRhcmdldCAgICAgICAgIC0gbmFtZSBvZiB0aGUgdGFyZ2V0IG9iamVjdFxuICBvcHRpb25zLmdsb2JhbCAgICAgICAgIC0gdGFyZ2V0IGlzIHRoZSBnbG9iYWwgb2JqZWN0XG4gIG9wdGlvbnMuc3RhdCAgICAgICAgICAgLSBleHBvcnQgYXMgc3RhdGljIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucHJvdG8gICAgICAgICAgLSBleHBvcnQgYXMgcHJvdG90eXBlIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucmVhbCAgICAgICAgICAgLSByZWFsIHByb3RvdHlwZSBtZXRob2QgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLmZvcmNlZCAgICAgICAgIC0gZXhwb3J0IGV2ZW4gaWYgdGhlIG5hdGl2ZSBmZWF0dXJlIGlzIGF2YWlsYWJsZVxuICBvcHRpb25zLmJpbmQgICAgICAgICAgIC0gYmluZCBtZXRob2RzIHRvIHRoZSB0YXJnZXQsIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy53cmFwICAgICAgICAgICAtIHdyYXAgY29uc3RydWN0b3JzIHRvIHByZXZlbnRpbmcgZ2xvYmFsIHBvbGx1dGlvbiwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLnVuc2FmZSAgICAgICAgIC0gdXNlIHRoZSBzaW1wbGUgYXNzaWdubWVudCBvZiBwcm9wZXJ0eSBpbnN0ZWFkIG9mIGRlbGV0ZSArIGRlZmluZVByb3BlcnR5XG4gIG9wdGlvbnMuc2hhbSAgICAgICAgICAgLSBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gIG9wdGlvbnMuZW51bWVyYWJsZSAgICAgLSBleHBvcnQgYXMgZW51bWVyYWJsZSBwcm9wZXJ0eVxuICBvcHRpb25zLmRvbnRDYWxsR2V0U2V0IC0gcHJldmVudCBjYWxsaW5nIGEgZ2V0dGVyIG9uIHRhcmdldFxuICBvcHRpb25zLm5hbWUgICAgICAgICAgIC0gdGhlIC5uYW1lIG9mIHRoZSBmdW5jdGlvbiBpZiBpdCBkb2VzIG5vdCBtYXRjaCB0aGUga2V5XG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucywgc291cmNlKSB7XG4gIHZhciBUQVJHRVQgPSBvcHRpb25zLnRhcmdldDtcbiAgdmFyIEdMT0JBTCA9IG9wdGlvbnMuZ2xvYmFsO1xuICB2YXIgU1RBVElDID0gb3B0aW9ucy5zdGF0O1xuICB2YXIgRk9SQ0VELCB0YXJnZXQsIGtleSwgdGFyZ2V0UHJvcGVydHksIHNvdXJjZVByb3BlcnR5LCBkZXNjcmlwdG9yO1xuICBpZiAoR0xPQkFMKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsVGhpcztcbiAgfSBlbHNlIGlmIChTVEFUSUMpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxUaGlzW1RBUkdFVF0gfHwgZGVmaW5lR2xvYmFsUHJvcGVydHkoVEFSR0VULCB7fSk7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsVGhpc1tUQVJHRVRdICYmIGdsb2JhbFRoaXNbVEFSR0VUXS5wcm90b3R5cGU7XG4gIH1cbiAgaWYgKHRhcmdldCkgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgc291cmNlUHJvcGVydHkgPSBzb3VyY2Vba2V5XTtcbiAgICBpZiAob3B0aW9ucy5kb250Q2FsbEdldFNldCkge1xuICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gICAgICB0YXJnZXRQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci52YWx1ZTtcbiAgICB9IGVsc2UgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRba2V5XTtcbiAgICBGT1JDRUQgPSBpc0ZvcmNlZChHTE9CQUwgPyBrZXkgOiBUQVJHRVQgKyAoU1RBVElDID8gJy4nIDogJyMnKSArIGtleSwgb3B0aW9ucy5mb3JjZWQpO1xuICAgIC8vIGNvbnRhaW5lZCBpbiB0YXJnZXRcbiAgICBpZiAoIUZPUkNFRCAmJiB0YXJnZXRQcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZW9mIHNvdXJjZVByb3BlcnR5ID09IHR5cGVvZiB0YXJnZXRQcm9wZXJ0eSkgY29udGludWU7XG4gICAgICBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKHNvdXJjZVByb3BlcnR5LCB0YXJnZXRQcm9wZXJ0eSk7XG4gICAgfVxuICAgIC8vIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgICBpZiAob3B0aW9ucy5zaGFtIHx8ICh0YXJnZXRQcm9wZXJ0eSAmJiB0YXJnZXRQcm9wZXJ0eS5zaGFtKSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHNvdXJjZVByb3BlcnR5LCAnc2hhbScsIHRydWUpO1xuICAgIH1cbiAgICBkZWZpbmVCdWlsdEluKHRhcmdldCwga2V5LCBzb3VyY2VQcm9wZXJ0eSwgb3B0aW9ucyk7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZicpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFByb3RvdHlwZSkge1xuICBpZiAoaXNQcm90b3R5cGVPZihQcm90b3R5cGUsIGl0KSkgcmV0dXJuIGl0O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcignSW5jb3JyZWN0IGludm9jYXRpb24nKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRigpIHsgLyogZW1wdHkgKi8gfVxuICBGLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IG51bGw7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0cHJvdG90eXBlb2YgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZihuZXcgRigpKSAhPT0gRi5wcm90b3R5cGU7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBDT1JSRUNUX1BST1RPVFlQRV9HRVRURVIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29ycmVjdC1wcm90b3R5cGUtZ2V0dGVyJyk7XG5cbnZhciBJRV9QUk9UTyA9IHNoYXJlZEtleSgnSUVfUFJPVE8nKTtcbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xudmFyIE9iamVjdFByb3RvdHlwZSA9ICRPYmplY3QucHJvdG90eXBlO1xuXG4vLyBgT2JqZWN0LmdldFByb3RvdHlwZU9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldHByb3RvdHlwZW9mXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldHByb3RvdHlwZW9mIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gQ09SUkVDVF9QUk9UT1RZUEVfR0VUVEVSID8gJE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIChPKSB7XG4gIHZhciBvYmplY3QgPSB0b09iamVjdChPKTtcbiAgaWYgKGhhc093bihvYmplY3QsIElFX1BST1RPKSkgcmV0dXJuIG9iamVjdFtJRV9QUk9UT107XG4gIHZhciBjb25zdHJ1Y3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcjtcbiAgaWYgKGlzQ2FsbGFibGUoY29uc3RydWN0b3IpICYmIG9iamVjdCBpbnN0YW5jZW9mIGNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gb2JqZWN0IGluc3RhbmNlb2YgJE9iamVjdCA/IE9iamVjdFByb3RvdHlwZSA6IG51bGw7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBtYWtlQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9tYWtlLWJ1aWx0LWluJyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpIHtcbiAgaWYgKGRlc2NyaXB0b3IuZ2V0KSBtYWtlQnVpbHRJbihkZXNjcmlwdG9yLmdldCwgbmFtZSwgeyBnZXR0ZXI6IHRydWUgfSk7XG4gIGlmIChkZXNjcmlwdG9yLnNldCkgbWFrZUJ1aWx0SW4oZGVzY3JpcHRvci5zZXQsIG5hbWUsIHsgc2V0dGVyOiB0cnVlIH0pO1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkuZih0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBrZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtrZXldID0gdmFsdWU7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG5cbi8vIGBPYmplY3Qua2V5c2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5rZXlzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWtleXMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Y4LXByb3RvdHlwZS1kZWZpbmUtYnVnJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIG9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMnKTtcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnRpZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydGllcyAtLSBzYWZlXG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyAmJiAhVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIHByb3BzID0gdG9JbmRleGVkT2JqZWN0KFByb3BlcnRpZXMpO1xuICB2YXIga2V5cyA9IG9iamVjdEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKE8sIGtleSA9IGtleXNbaW5kZXgrK10sIHByb3BzW2tleV0pO1xuICByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignZG9jdW1lbnQnLCAnZG9jdW1lbnRFbGVtZW50Jyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZ2xvYmFsIEFjdGl2ZVhPYmplY3QgLS0gb2xkIElFLCBXU0ggKi9cbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBkZWZpbmVQcm9wZXJ0aWVzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydGllcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG52YXIgaHRtbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9odG1sJyk7XG52YXIgZG9jdW1lbnRDcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcblxudmFyIEdUID0gJz4nO1xudmFyIExUID0gJzwnO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIFNDUklQVCA9ICdzY3JpcHQnO1xudmFyIElFX1BST1RPID0gc2hhcmVkS2V5KCdJRV9QUk9UTycpO1xuXG52YXIgRW1wdHlDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcblxudmFyIHNjcmlwdFRhZyA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gIHJldHVybiBMVCArIFNDUklQVCArIEdUICsgY29udGVudCArIExUICsgJy8nICsgU0NSSVBUICsgR1Q7XG59O1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgQWN0aXZlWCBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVggPSBmdW5jdGlvbiAoYWN0aXZlWERvY3VtZW50KSB7XG4gIGFjdGl2ZVhEb2N1bWVudC53cml0ZShzY3JpcHRUYWcoJycpKTtcbiAgYWN0aXZlWERvY3VtZW50LmNsb3NlKCk7XG4gIHZhciB0ZW1wID0gYWN0aXZlWERvY3VtZW50LnBhcmVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWFzc2lnbm1lbnQgLS0gYXZvaWQgbWVtb3J5IGxlYWtcbiAgYWN0aXZlWERvY3VtZW50ID0gbnVsbDtcbiAgcmV0dXJuIHRlbXA7XG59O1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgTnVsbFByb3RvT2JqZWN0VmlhSUZyYW1lID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gZG9jdW1lbnRDcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgdmFyIEpTID0gJ2phdmEnICsgU0NSSVBUICsgJzonO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBodG1sLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy80NzVcbiAgaWZyYW1lLnNyYyA9IFN0cmluZyhKUyk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUoc2NyaXB0VGFnKCdkb2N1bWVudC5GPU9iamVjdCcpKTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgcmV0dXJuIGlmcmFtZURvY3VtZW50LkY7XG59O1xuXG4vLyBDaGVjayBmb3IgZG9jdW1lbnQuZG9tYWluIGFuZCBhY3RpdmUgeCBzdXBwb3J0XG4vLyBObyBuZWVkIHRvIHVzZSBhY3RpdmUgeCBhcHByb2FjaCB3aGVuIGRvY3VtZW50LmRvbWFpbiBpcyBub3Qgc2V0XG4vLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltL2lzc3Vlcy8xNTBcbi8vIHZhcmlhdGlvbiBvZiBodHRwczovL2dpdGh1Yi5jb20va2l0Y2FtYnJpZGdlL2VzNS1zaGltL2NvbW1pdC80ZjczOGFjMDY2MzQ2XG4vLyBhdm9pZCBJRSBHQyBidWdcbnZhciBhY3RpdmVYRG9jdW1lbnQ7XG52YXIgTnVsbFByb3RvT2JqZWN0ID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIGFjdGl2ZVhEb2N1bWVudCA9IG5ldyBBY3RpdmVYT2JqZWN0KCdodG1sZmlsZScpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBpZ25vcmUgKi8gfVxuICBOdWxsUHJvdG9PYmplY3QgPSB0eXBlb2YgZG9jdW1lbnQgIT0gJ3VuZGVmaW5lZCdcbiAgICA/IGRvY3VtZW50LmRvbWFpbiAmJiBhY3RpdmVYRG9jdW1lbnRcbiAgICAgID8gTnVsbFByb3RvT2JqZWN0VmlhQWN0aXZlWChhY3RpdmVYRG9jdW1lbnQpIC8vIG9sZCBJRVxuICAgICAgOiBOdWxsUHJvdG9PYmplY3RWaWFJRnJhbWUoKVxuICAgIDogTnVsbFByb3RvT2JqZWN0VmlhQWN0aXZlWChhY3RpdmVYRG9jdW1lbnQpOyAvLyBXU0hcbiAgdmFyIGxlbmd0aCA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSBkZWxldGUgTnVsbFByb3RvT2JqZWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbbGVuZ3RoXV07XG4gIHJldHVybiBOdWxsUHJvdG9PYmplY3QoKTtcbn07XG5cbmhpZGRlbktleXNbSUVfUFJPVE9dID0gdHJ1ZTtcblxuLy8gYE9iamVjdC5jcmVhdGVgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuY3JlYXRlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWNyZWF0ZSAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eUNvbnN0cnVjdG9yW1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHlDb25zdHJ1Y3RvcigpO1xuICAgIEVtcHR5Q29uc3RydWN0b3JbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gTnVsbFByb3RvT2JqZWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkZWZpbmVQcm9wZXJ0aWVzTW9kdWxlLmYocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YnKTtcbnZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbicpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1lfU0FGQVJJX0lURVJBVE9SUyA9IGZhbHNlO1xuXG4vLyBgJUl0ZXJhdG9yUHJvdG90eXBlJWAgb2JqZWN0XG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSVpdGVyYXRvcnByb3RvdHlwZSUtb2JqZWN0XG52YXIgSXRlcmF0b3JQcm90b3R5cGUsIFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSwgYXJyYXlJdGVyYXRvcjtcblxuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWtleXMgLS0gc2FmZSAqL1xuaWYgKFtdLmtleXMpIHtcbiAgYXJyYXlJdGVyYXRvciA9IFtdLmtleXMoKTtcbiAgLy8gU2FmYXJpIDggaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gIGlmICghKCduZXh0JyBpbiBhcnJheUl0ZXJhdG9yKSkgQlVHR1lfU0FGQVJJX0lURVJBVE9SUyA9IHRydWU7XG4gIGVsc2Uge1xuICAgIFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKGdldFByb3RvdHlwZU9mKGFycmF5SXRlcmF0b3IpKTtcbiAgICBpZiAoUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlKSBJdGVyYXRvclByb3RvdHlwZSA9IFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxufVxuXG52YXIgTkVXX0lURVJBVE9SX1BST1RPVFlQRSA9ICFpc09iamVjdChJdGVyYXRvclByb3RvdHlwZSkgfHwgZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgdGVzdCA9IHt9O1xuICAvLyBGRjQ0LSBsZWdhY3kgaXRlcmF0b3JzIGNhc2VcbiAgcmV0dXJuIEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXS5jYWxsKHRlc3QpICE9PSB0ZXN0O1xufSk7XG5cbmlmIChORVdfSVRFUkFUT1JfUFJPVE9UWVBFKSBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuZWxzZSBpZiAoSVNfUFVSRSkgSXRlcmF0b3JQcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuXG4vLyBgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtJWl0ZXJhdG9ycHJvdG90eXBlJS1AQGl0ZXJhdG9yXG5pZiAoIWlzQ2FsbGFibGUoSXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdKSkge1xuICBkZWZpbmVCdWlsdEluKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEl0ZXJhdG9yUHJvdG90eXBlOiBJdGVyYXRvclByb3RvdHlwZSxcbiAgQlVHR1lfU0FGQVJJX0lURVJBVE9SUzogQlVHR1lfU0FGQVJJX0lURVJBVE9SU1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1pbnN0YW5jZScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZicpO1xudmFyIGRlZmluZUJ1aWx0SW5BY2Nlc3NvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4tYWNjZXNzb3InKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzLWNvcmUnKS5JdGVyYXRvclByb3RvdHlwZTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xuXG52YXIgQ09OU1RSVUNUT1IgPSAnY29uc3RydWN0b3InO1xudmFyIElURVJBVE9SID0gJ0l0ZXJhdG9yJztcbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBOYXRpdmVJdGVyYXRvciA9IGdsb2JhbFRoaXNbSVRFUkFUT1JdO1xuXG4vLyBGRjU2LSBoYXZlIG5vbi1zdGFuZGFyZCBnbG9iYWwgaGVscGVyIGBJdGVyYXRvcmBcbnZhciBGT1JDRUQgPSBJU19QVVJFXG4gIHx8ICFpc0NhbGxhYmxlKE5hdGl2ZUl0ZXJhdG9yKVxuICB8fCBOYXRpdmVJdGVyYXRvci5wcm90b3R5cGUgIT09IEl0ZXJhdG9yUHJvdG90eXBlXG4gIC8vIEZGNDQtIG5vbi1zdGFuZGFyZCBgSXRlcmF0b3JgIHBhc3NlcyBwcmV2aW91cyB0ZXN0c1xuICB8fCAhZmFpbHMoZnVuY3Rpb24gKCkgeyBOYXRpdmVJdGVyYXRvcih7fSk7IH0pO1xuXG52YXIgSXRlcmF0b3JDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uIEl0ZXJhdG9yKCkge1xuICBhbkluc3RhbmNlKHRoaXMsIEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgaWYgKGdldFByb3RvdHlwZU9mKHRoaXMpID09PSBJdGVyYXRvclByb3RvdHlwZSkgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fic3RyYWN0IGNsYXNzIEl0ZXJhdG9yIG5vdCBkaXJlY3RseSBjb25zdHJ1Y3RhYmxlJyk7XG59O1xuXG52YXIgZGVmaW5lSXRlcmF0b3JQcm90b3R5cGVBY2Nlc3NvciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIGlmIChERVNDUklQVE9SUykge1xuICAgIGRlZmluZUJ1aWx0SW5BY2Nlc3NvcihJdGVyYXRvclByb3RvdHlwZSwga2V5LCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gKHJlcGxhY2VtZW50KSB7XG4gICAgICAgIGFuT2JqZWN0KHRoaXMpO1xuICAgICAgICBpZiAodGhpcyA9PT0gSXRlcmF0b3JQcm90b3R5cGUpIHRocm93IG5ldyAkVHlwZUVycm9yKFwiWW91IGNhbid0IHJlZGVmaW5lIHRoaXMgcHJvcGVydHlcIik7XG4gICAgICAgIGlmIChoYXNPd24odGhpcywga2V5KSkgdGhpc1trZXldID0gcmVwbGFjZW1lbnQ7XG4gICAgICAgIGVsc2UgY3JlYXRlUHJvcGVydHkodGhpcywga2V5LCByZXBsYWNlbWVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSBJdGVyYXRvclByb3RvdHlwZVtrZXldID0gdmFsdWU7XG59O1xuXG5pZiAoIWhhc093bihJdGVyYXRvclByb3RvdHlwZSwgVE9fU1RSSU5HX1RBRykpIGRlZmluZUl0ZXJhdG9yUHJvdG90eXBlQWNjZXNzb3IoVE9fU1RSSU5HX1RBRywgSVRFUkFUT1IpO1xuXG5pZiAoRk9SQ0VEIHx8ICFoYXNPd24oSXRlcmF0b3JQcm90b3R5cGUsIENPTlNUUlVDVE9SKSB8fCBJdGVyYXRvclByb3RvdHlwZVtDT05TVFJVQ1RPUl0gPT09IE9iamVjdCkge1xuICBkZWZpbmVJdGVyYXRvclByb3RvdHlwZUFjY2Vzc29yKENPTlNUUlVDVE9SLCBJdGVyYXRvckNvbnN0cnVjdG9yKTtcbn1cblxuSXRlcmF0b3JDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBJdGVyYXRvclByb3RvdHlwZTtcblxuLy8gYEl0ZXJhdG9yYCBjb25zdHJ1Y3RvclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pdGVyYXRvclxuJCh7IGdsb2JhbDogdHJ1ZSwgY29uc3RydWN0b3I6IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgSXRlcmF0b3I6IEl0ZXJhdG9yQ29uc3RydWN0b3Jcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjbGFzc29mUmF3ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuKSB7XG4gIC8vIE5hc2hvcm4gYnVnOlxuICAvLyAgIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xMTI4XG4gIC8vICAgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzExMzBcbiAgaWYgKGNsYXNzb2ZSYXcoZm4pID09PSAnRnVuY3Rpb24nKSByZXR1cm4gdW5jdXJyeVRoaXMoZm4pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLWNsYXVzZScpO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIGJpbmQgPSB1bmN1cnJ5VGhpcyh1bmN1cnJ5VGhpcy5iaW5kKTtcblxuLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCkge1xuICBhQ2FsbGFibGUoZm4pO1xuICByZXR1cm4gdGhhdCA9PT0gdW5kZWZpbmVkID8gZm4gOiBOQVRJVkVfQklORCA/IGJpbmQoZm4sIHRoYXQpIDogZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycycpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgQXJyYXlQcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG5cbi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3Jcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG90eXBlW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xudmFyIHRlc3QgPSB7fTtcblxudGVzdFtUT19TVFJJTkdfVEFHXSA9ICd6JztcblxubW9kdWxlLmV4cG9ydHMgPSBTdHJpbmcodGVzdCkgPT09ICdbb2JqZWN0IHpdJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgVE9fU1RSSU5HX1RBR19TVVBQT1JUID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZy10YWctc3VwcG9ydCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBjbGFzc29mUmF3ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQ09SUkVDVF9BUkdVTUVOVFMgPSBjbGFzc29mUmF3KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxufTtcblxuLy8gZ2V0dGluZyB0YWcgZnJvbSBFUzYrIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYFxubW9kdWxlLmV4cG9ydHMgPSBUT19TVFJJTkdfVEFHX1NVUFBPUlQgPyBjbGFzc29mUmF3IDogZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCB0YWcsIHJlc3VsdDtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKHRhZyA9IHRyeUdldChPID0gJE9iamVjdChpdCksIFRPX1NUUklOR19UQUcpKSA9PSAnc3RyaW5nJyA/IHRhZ1xuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQ09SUkVDVF9BUkdVTUVOVFMgPyBjbGFzc29mUmF3KE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKHJlc3VsdCA9IGNsYXNzb2ZSYXcoTykpID09PSAnT2JqZWN0JyAmJiBpc0NhbGxhYmxlKE8uY2FsbGVlKSA/ICdBcmd1bWVudHMnIDogcmVzdWx0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKGl0KSkgcmV0dXJuIGdldE1ldGhvZChpdCwgSVRFUkFUT1IpXG4gICAgfHwgZ2V0TWV0aG9kKGl0LCAnQEBpdGVyYXRvcicpXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xudmFyIGdldEl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvci1tZXRob2QnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50LCB1c2luZ0l0ZXJhdG9yKSB7XG4gIHZhciBpdGVyYXRvck1ldGhvZCA9IGFyZ3VtZW50cy5sZW5ndGggPCAyID8gZ2V0SXRlcmF0b3JNZXRob2QoYXJndW1lbnQpIDogdXNpbmdJdGVyYXRvcjtcbiAgaWYgKGFDYWxsYWJsZShpdGVyYXRvck1ldGhvZCkpIHJldHVybiBhbk9iamVjdChjYWxsKGl0ZXJhdG9yTWV0aG9kLCBhcmd1bWVudCkpO1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcih0cnlUb1N0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBpdGVyYWJsZScpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGtpbmQsIHZhbHVlKSB7XG4gIHZhciBpbm5lclJlc3VsdCwgaW5uZXJFcnJvcjtcbiAgYW5PYmplY3QoaXRlcmF0b3IpO1xuICB0cnkge1xuICAgIGlubmVyUmVzdWx0ID0gZ2V0TWV0aG9kKGl0ZXJhdG9yLCAncmV0dXJuJyk7XG4gICAgaWYgKCFpbm5lclJlc3VsdCkge1xuICAgICAgaWYgKGtpbmQgPT09ICd0aHJvdycpIHRocm93IHZhbHVlO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBpbm5lclJlc3VsdCA9IGNhbGwoaW5uZXJSZXN1bHQsIGl0ZXJhdG9yKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpbm5lckVycm9yID0gdHJ1ZTtcbiAgICBpbm5lclJlc3VsdCA9IGVycm9yO1xuICB9XG4gIGlmIChraW5kID09PSAndGhyb3cnKSB0aHJvdyB2YWx1ZTtcbiAgaWYgKGlubmVyRXJyb3IpIHRocm93IGlubmVyUmVzdWx0O1xuICBhbk9iamVjdChpbm5lclJlc3VsdCk7XG4gIHJldHVybiB2YWx1ZTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xudmFyIGlzQXJyYXlJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheS1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xudmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZicpO1xudmFyIGdldEl0ZXJhdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvcicpO1xudmFyIGdldEl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBpdGVyYXRvckNsb3NlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG52YXIgUmVzdWx0ID0gZnVuY3Rpb24gKHN0b3BwZWQsIHJlc3VsdCkge1xuICB0aGlzLnN0b3BwZWQgPSBzdG9wcGVkO1xuICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcbn07XG5cbnZhciBSZXN1bHRQcm90b3R5cGUgPSBSZXN1bHQucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgdW5ib3VuZEZ1bmN0aW9uLCBvcHRpb25zKSB7XG4gIHZhciB0aGF0ID0gb3B0aW9ucyAmJiBvcHRpb25zLnRoYXQ7XG4gIHZhciBBU19FTlRSSUVTID0gISEob3B0aW9ucyAmJiBvcHRpb25zLkFTX0VOVFJJRVMpO1xuICB2YXIgSVNfUkVDT1JEID0gISEob3B0aW9ucyAmJiBvcHRpb25zLklTX1JFQ09SRCk7XG4gIHZhciBJU19JVEVSQVRPUiA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5JU19JVEVSQVRPUik7XG4gIHZhciBJTlRFUlJVUFRFRCA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5JTlRFUlJVUFRFRCk7XG4gIHZhciBmbiA9IGJpbmQodW5ib3VuZEZ1bmN0aW9uLCB0aGF0KTtcbiAgdmFyIGl0ZXJhdG9yLCBpdGVyRm4sIGluZGV4LCBsZW5ndGgsIHJlc3VsdCwgbmV4dCwgc3RlcDtcblxuICB2YXIgc3RvcCA9IGZ1bmN0aW9uIChjb25kaXRpb24pIHtcbiAgICBpZiAoaXRlcmF0b3IpIGl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsICdub3JtYWwnKTtcbiAgICByZXR1cm4gbmV3IFJlc3VsdCh0cnVlLCBjb25kaXRpb24pO1xuICB9O1xuXG4gIHZhciBjYWxsRm4gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoQVNfRU5UUklFUykge1xuICAgICAgYW5PYmplY3QodmFsdWUpO1xuICAgICAgcmV0dXJuIElOVEVSUlVQVEVEID8gZm4odmFsdWVbMF0sIHZhbHVlWzFdLCBzdG9wKSA6IGZuKHZhbHVlWzBdLCB2YWx1ZVsxXSk7XG4gICAgfSByZXR1cm4gSU5URVJSVVBURUQgPyBmbih2YWx1ZSwgc3RvcCkgOiBmbih2YWx1ZSk7XG4gIH07XG5cbiAgaWYgKElTX1JFQ09SRCkge1xuICAgIGl0ZXJhdG9yID0gaXRlcmFibGUuaXRlcmF0b3I7XG4gIH0gZWxzZSBpZiAoSVNfSVRFUkFUT1IpIHtcbiAgICBpdGVyYXRvciA9IGl0ZXJhYmxlO1xuICB9IGVsc2Uge1xuICAgIGl0ZXJGbiA9IGdldEl0ZXJhdG9yTWV0aG9kKGl0ZXJhYmxlKTtcbiAgICBpZiAoIWl0ZXJGbikgdGhyb3cgbmV3ICRUeXBlRXJyb3IodHJ5VG9TdHJpbmcoaXRlcmFibGUpICsgJyBpcyBub3QgaXRlcmFibGUnKTtcbiAgICAvLyBvcHRpbWlzYXRpb24gZm9yIGFycmF5IGl0ZXJhdG9yc1xuICAgIGlmIChpc0FycmF5SXRlcmF0b3JNZXRob2QoaXRlckZuKSkge1xuICAgICAgZm9yIChpbmRleCA9IDAsIGxlbmd0aCA9IGxlbmd0aE9mQXJyYXlMaWtlKGl0ZXJhYmxlKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgICAgcmVzdWx0ID0gY2FsbEZuKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgICAgIGlmIChyZXN1bHQgJiYgaXNQcm90b3R5cGVPZihSZXN1bHRQcm90b3R5cGUsIHJlc3VsdCkpIHJldHVybiByZXN1bHQ7XG4gICAgICB9IHJldHVybiBuZXcgUmVzdWx0KGZhbHNlKTtcbiAgICB9XG4gICAgaXRlcmF0b3IgPSBnZXRJdGVyYXRvcihpdGVyYWJsZSwgaXRlckZuKTtcbiAgfVxuXG4gIG5leHQgPSBJU19SRUNPUkQgPyBpdGVyYWJsZS5uZXh0IDogaXRlcmF0b3IubmV4dDtcbiAgd2hpbGUgKCEoc3RlcCA9IGNhbGwobmV4dCwgaXRlcmF0b3IpKS5kb25lKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9IGNhbGxGbihzdGVwLnZhbHVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaXRlcmF0b3JDbG9zZShpdGVyYXRvciwgJ3Rocm93JywgZXJyb3IpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHJlc3VsdCA9PSAnb2JqZWN0JyAmJiByZXN1bHQgJiYgaXNQcm90b3R5cGVPZihSZXN1bHRQcm90b3R5cGUsIHJlc3VsdCkpIHJldHVybiByZXN1bHQ7XG4gIH0gcmV0dXJuIG5ldyBSZXN1bHQoZmFsc2UpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBgR2V0SXRlcmF0b3JEaXJlY3Qob2JqKWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWdldGl0ZXJhdG9yZGlyZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHtcbiAgICBpdGVyYXRvcjogb2JqLFxuICAgIG5leHQ6IG9iai5uZXh0LFxuICAgIGRvbmU6IGZhbHNlXG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L2VjbWEyNjIvcHVsbC8zNDY3XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSwgRXhwZWN0ZWRFcnJvcikge1xuICB2YXIgSXRlcmF0b3IgPSBnbG9iYWxUaGlzLkl0ZXJhdG9yO1xuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSBJdGVyYXRvciAmJiBJdGVyYXRvci5wcm90b3R5cGU7XG4gIHZhciBtZXRob2QgPSBJdGVyYXRvclByb3RvdHlwZSAmJiBJdGVyYXRvclByb3RvdHlwZVtNRVRIT0RfTkFNRV07XG5cbiAgdmFyIENMT1NFRCA9IGZhbHNlO1xuXG4gIGlmIChtZXRob2QpIHRyeSB7XG4gICAgbWV0aG9kLmNhbGwoe1xuICAgICAgbmV4dDogZnVuY3Rpb24gKCkgeyByZXR1cm4geyBkb25lOiB0cnVlIH07IH0sXG4gICAgICAncmV0dXJuJzogZnVuY3Rpb24gKCkgeyBDTE9TRUQgPSB0cnVlOyB9XG4gICAgfSwgLTEpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yOTExOTVcbiAgICBpZiAoIShlcnJvciBpbnN0YW5jZW9mIEV4cGVjdGVkRXJyb3IpKSBDTE9TRUQgPSBmYWxzZTtcbiAgfVxuXG4gIGlmICghQ0xPU0VEKSByZXR1cm4gbWV0aG9kO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpdGVyYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdGUnKTtcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGdldEl0ZXJhdG9yRGlyZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvci1kaXJlY3QnKTtcbnZhciBpdGVyYXRvckNsb3NlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlJyk7XG52YXIgaXRlcmF0b3JIZWxwZXJXaXRob3V0Q2xvc2luZ09uRWFybHlFcnJvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1oZWxwZXItd2l0aG91dC1jbG9zaW5nLW9uLWVhcmx5LWVycm9yJyk7XG5cbnZhciBmaW5kV2l0aG91dENsb3NpbmdPbkVhcmx5RXJyb3IgPSBpdGVyYXRvckhlbHBlcldpdGhvdXRDbG9zaW5nT25FYXJseUVycm9yKCdmaW5kJywgVHlwZUVycm9yKTtcblxuLy8gYEl0ZXJhdG9yLnByb3RvdHlwZS5maW5kYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXRlcmF0b3IucHJvdG90eXBlLmZpbmRcbiQoeyB0YXJnZXQ6ICdJdGVyYXRvcicsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6IGZpbmRXaXRob3V0Q2xvc2luZ09uRWFybHlFcnJvciB9LCB7XG4gIGZpbmQ6IGZ1bmN0aW9uIGZpbmQocHJlZGljYXRlKSB7XG4gICAgYW5PYmplY3QodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGFDYWxsYWJsZShwcmVkaWNhdGUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpdGVyYXRvckNsb3NlKHRoaXMsICd0aHJvdycsIGVycm9yKTtcbiAgICB9XG5cbiAgICBpZiAoZmluZFdpdGhvdXRDbG9zaW5nT25FYXJseUVycm9yKSByZXR1cm4gY2FsbChmaW5kV2l0aG91dENsb3NpbmdPbkVhcmx5RXJyb3IsIHRoaXMsIHByZWRpY2F0ZSk7XG5cbiAgICB2YXIgcmVjb3JkID0gZ2V0SXRlcmF0b3JEaXJlY3QodGhpcyk7XG4gICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgIHJldHVybiBpdGVyYXRlKHJlY29yZCwgZnVuY3Rpb24gKHZhbHVlLCBzdG9wKSB7XG4gICAgICBpZiAocHJlZGljYXRlKHZhbHVlLCBjb3VudGVyKyspKSByZXR1cm4gc3RvcCh2YWx1ZSk7XG4gICAgfSwgeyBJU19SRUNPUkQ6IHRydWUsIElOVEVSUlVQVEVEOiB0cnVlIH0pLnJlc3VsdDtcbiAgfVxufSk7XG4iLCAie1xuXHRcImxvZ2luRWxlbWVudFNlbGVjdG9yXCI6IFwiYTpoYXMoLmFqYXhsb2dpbi1tb3VudC1wb2ludCksI3B0LWxvZ2luPmEsLnZlY3Rvci11c2VyLW1lbnUtbG9naW4+YSwjdXNlci10b29scz5hW2hyZWYqPVxcXCJTcGVjaWFsXFxcIl0sLm1haW5wYWdlLXRvcC1tZW51PmxpOm50aC1jaGlsZCgyKSBhXCIsXG5cdFwidmVyc2lvblwiOiBcIjQuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2NoZWNrQTExeUNvbmZpcm1LZXksIGdldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2FkZExpc3RlbmVyfSBmcm9tICcuL21vZHVsZXMvYWRkTGlzdGVuZXInO1xuaW1wb3J0IHthamF4TG9naW59IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcbmltcG9ydCB7d2luZG93TWFuYWdlcn0gZnJvbSAnLi9tb2R1bGVzL2luaXRXaW5kb3dNYW5hZ2VyJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBpbml0QXV0b0xvZ2luKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRjb25zdCB7d2dVc2VyTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHdnVXNlck5hbWUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkbG9naW5FbGVtZW50OiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+ID0gJGJvZHkuZmluZDxIVE1MQW5jaG9yRWxlbWVudD4oT1BUSU9OUy5sb2dpbkVsZW1lbnRTZWxlY3Rvcik7XG5cdGlmICghJGxvZ2luRWxlbWVudC5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR3aW5kb3dNYW5hZ2VyLiRlbGVtZW50LmFwcGVuZFRvKCRib2R5KTtcblxuXHRjb25zdCBmYWtlVG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSA9IHtcblx0XHRoaWRlVG9hc3Q6ICgpID0+IHt9LFxuXHR9O1xuXG5cdGNvbnN0IGV2ZW50TGlzdGVuZXIgPSAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50IHwgSlF1ZXJ5LktleURvd25FdmVudCk6IHZvaWQgPT4ge1xuXHRcdGlmICghY2hlY2tBMTF5Q29uZmlybUtleShldmVudCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGFqYXhMb2dpbihmYWtlVG9hc3RpZnlJbnN0YW5jZSk7XG5cdH07XG5cdGFkZExpc3RlbmVyKCRsb2dpbkVsZW1lbnQsIGV2ZW50TGlzdGVuZXIpO1xufSk7XG4iLCAiaW1wb3J0IHtmaWx0ZXJBbHRlcmVkQ2xpY2tzfSBmcm9tICdleHQuZ2FkZ2V0LkZpbHRlckFsdGVyZWRDbGlja3MnO1xuXG5jb25zdCBhZGRMaXN0ZW5lciA9IChcblx0JGVsZW1lbnQ6IEpRdWVyeSxcblx0ZXZlbnRMaXN0ZW5lcjogKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCB8IEpRdWVyeS5LZXlEb3duRXZlbnQpID0+IHZvaWRcbik6IHZvaWQgPT4ge1xuXHQkZWxlbWVudC5vbignY2xpY2snLCBmaWx0ZXJBbHRlcmVkQ2xpY2tzKGV2ZW50TGlzdGVuZXIpKTtcblx0JGVsZW1lbnQub24oJ2tleWRvd24nLCBldmVudExpc3RlbmVyKTtcbn07XG5cbmV4cG9ydCB7YWRkTGlzdGVuZXJ9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG50eXBlIENsaWVudExvZ2luUGFyYW1zID0gQXBpQ2xpZW50TG9naW5QYXJhbXMgJiB7XG5cdHVzZXJuYW1lPzogc3RyaW5nO1xuXHRwYXNzd29yZD86IHN0cmluZztcblx0cmVtZW1iZXJNZT86IGJvb2xlYW47XG5cdHJldHlwZT86IHN0cmluZztcblx0T0FUSFRva2VuPzogc3RyaW5nO1xufTtcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYEFqYXhMb2dpbi8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHt0eXBlIENsaWVudExvZ2luUGFyYW1zLCBhcGl9O1xuIiwgImltcG9ydCB7dHlwZSBDbGllbnRMb2dpblBhcmFtcywgYXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IHtjaGVja1ZhbGlkfSBmcm9tICcuL3V0aWwvY2hlY2tWYWxpZCc7XG5pbXBvcnQge2dlbmVyYXRlRWxlbWVudHN9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZUVsZW1lbnRzJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7b291aVByb21wdH0gZnJvbSAnLi91dGlsL29vdWlQcm9tcHQnO1xuaW1wb3J0IHtxdWVyeUxvZ2luVG9rZW59IGZyb20gJy4vdXRpbC9xdWVyeUxvZ2luVG9rZW4nO1xuaW1wb3J0IHtyZWRpcmVjdE9yaWdpbkxvZ2luUGFnZX0gZnJvbSAnLi91dGlsL3JlZGlyZWN0T3JpZ2luTG9naW5QYWdlJztcbmltcG9ydCB7cmVtb3ZlV2luZG93UmVzaXplSGFuZGxlcn0gZnJvbSAnLi91dGlsL3JlbW92ZVdpbmRvd1Jlc2l6ZUhhbmRsZXInO1xuaW1wb3J0IHtzaG93RXJyb3J9IGZyb20gJy4vdXRpbC9zaG93RXJyb3InO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5pbXBvcnQge3dpbmRvd01hbmFnZXJ9IGZyb20gJy4vaW5pdFdpbmRvd01hbmFnZXInO1xuXG5jb25zdCBhamF4TG9naW4gPSAodG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSwgaXNBZ3JlZVRvczogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCA9PiB7XG5cdGNvbnN0IHtcblx0XHQkYWdyZWVUb3MsXG5cdFx0JGZvcmdvdFBhc3N3b3JkLFxuXHRcdCRpbnB1dEJveCxcblx0XHQkcmVtZW1iZXJNZSxcblx0XHQkdG9zTGFiZWwsXG5cdFx0YWdyZWVUb3NDaGVja2JveCxcblx0XHRrZWVwTG9naW5DaGVja2JveCxcblx0XHRtZXNzYWdlRGlhbG9nLFxuXHRcdG5hbWVJbnB1dCxcblx0XHRwd2RJbnB1dCxcblx0fSA9IGdlbmVyYXRlRWxlbWVudHMoaXNBZ3JlZVRvcyk7XG5cblx0bGV0IGxvZ2luVG9rZW46IHN0cmluZyA9ICcnO1xuXHRjb25zdCBsb2dpbiA9IGFzeW5jICh7bG9naW5Db250aW51ZSA9IGZhbHNlLCByZXR5cGVQYXNzd29yZCA9IGZhbHNlfSA9IHt9KTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGlmICghbG9naW5Db250aW51ZSkge1xuXHRcdFx0XHQoe2xvZ2luVG9rZW4sIHRvYXN0aWZ5SW5zdGFuY2V9ID0gYXdhaXQgcXVlcnlMb2dpblRva2VuKHRvYXN0aWZ5SW5zdGFuY2UpKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgcGFyYW1zOiBDbGllbnRMb2dpblBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAnY2xpZW50bG9naW4nLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRsb2dpbnRva2VuOiBsb2dpblRva2VuLFxuXHRcdFx0XHRsb2dpbnJldHVybnVybDogbG9jYXRpb24uaHJlZixcblx0XHRcdFx0dXNlcm5hbWU6IG5hbWVJbnB1dC5nZXRWYWx1ZSgpLFxuXHRcdFx0XHRwYXNzd29yZDogcHdkSW5wdXQuZ2V0VmFsdWUoKSxcblx0XHRcdH07XG5cdFx0XHRpZiAoa2VlcExvZ2luQ2hlY2tib3guaXNTZWxlY3RlZCgpKSB7XG5cdFx0XHRcdHBhcmFtcy5yZW1lbWJlck1lID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGlmIChsb2dpbkNvbnRpbnVlIHx8IHJldHlwZVBhc3N3b3JkKSB7XG5cdFx0XHRcdGF3YWl0IHdpbmRvd01hbmFnZXIuY2xlYXJXaW5kb3dzKCk7XG5cdFx0XHRcdGRlbGV0ZSBwYXJhbXMubG9naW5yZXR1cm51cmw7XG5cdFx0XHRcdGRlbGV0ZSBwYXJhbXMudXNlcm5hbWU7XG5cdFx0XHRcdGRlbGV0ZSBwYXJhbXMucGFzc3dvcmQ7XG5cdFx0XHRcdHBhcmFtcy5sb2dpbmNvbnRpbnVlID0gdHJ1ZTtcblxuXHRcdFx0XHRjb25zdCB2YWx1ZTogc3RyaW5nIHwgbnVsbCA9IGF3YWl0IG9vdWlQcm9tcHQocmV0eXBlUGFzc3dvcmQpO1xuXG5cdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cblx0XHRcdFx0aWYgKHZhbHVlID09PSBudWxsKSB7XG5cdFx0XHRcdFx0dG9hc3RpZnkoXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0xvZ2luIGNhbmNlbGxlZCcpLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdCdpbmZvJ1xuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0dm9pZCB3aW5kb3dNYW5hZ2VyLmNsZWFyV2luZG93cygpO1xuXG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHZhbHVlID09PSAnJykge1xuXHRcdFx0XHRcdGlmIChyZXR5cGVQYXNzd29yZCkge1xuXHRcdFx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnRW1wdHlQYXNzd29yZCcpLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0J3dhcm5pbmcnXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0dm9pZCBsb2dpbih7XG5cdFx0XHRcdFx0XHRcdHJldHlwZVBhc3N3b3JkOiB0cnVlLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0VtcHR5MkZBJyksXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQnd2FybmluZydcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR2b2lkIGxvZ2luKHtcblx0XHRcdFx0XHRcdFx0bG9naW5Db250aW51ZTogdHJ1ZSxcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChyZXR5cGVQYXNzd29yZCkge1xuXHRcdFx0XHRcdHBhcmFtcy5wYXNzd29yZCA9IHZhbHVlO1xuXHRcdFx0XHRcdHBhcmFtcy5yZXR5cGUgPSB2YWx1ZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRwYXJhbXMuT0FUSFRva2VuID0gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0xvZ2dpbmcgaW4nKSxcblx0XHRcdFx0fSxcblx0XHRcdFx0J2luZm8nXG5cdFx0XHQpO1xuXG5cdFx0XHRjb25zdCByZXNwb25zZSA9IChhd2FpdCBhcGkucG9zdChwYXJhbXMpKSBhcyB7XG5cdFx0XHRcdGNsaWVudGxvZ2luOiB7XG5cdFx0XHRcdFx0c3RhdHVzPzogc3RyaW5nO1xuXHRcdFx0XHRcdG1lc3NhZ2Vjb2RlPzogc3RyaW5nO1xuXHRcdFx0XHR9O1xuXHRcdFx0fTtcblxuXHRcdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblxuXHRcdFx0aWYgKHJlc3BvbnNlWydjbGllbnRsb2dpbiddPy5zdGF0dXMgPT09ICdQQVNTJykge1xuXHRcdFx0XHR0b2FzdGlmeShcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdMb2dpbiBzdWNjZWVkJyksXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQnc3VjY2Vzcydcblx0XHRcdFx0KTtcblx0XHRcdFx0bG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0XHR9IGVsc2UgaWYgKHJlc3BvbnNlWydjbGllbnRsb2dpbiddPy5tZXNzYWdlY29kZSkge1xuXHRcdFx0XHRjb25zdCB7bWVzc2FnZWNvZGV9ID0gcmVzcG9uc2VbJ2NsaWVudGxvZ2luJ107XG5cdFx0XHRcdHN3aXRjaCAobWVzc2FnZWNvZGUpIHtcblx0XHRcdFx0XHRjYXNlICdsb2dpbi10aHJvdHRsZWQnOlxuXHRcdFx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnVG9vRnJlcXVlbnQnKSxcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdCdlcnJvcidcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdvYXRoYXV0aC1hdXRoLXVpJzpcblx0XHRcdFx0XHRcdHZvaWQgbG9naW4oe1xuXHRcdFx0XHRcdFx0XHRsb2dpbkNvbnRpbnVlOiB0cnVlLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdvYXRoYXV0aC1sb2dpbi1mYWlsZWQnOlxuXHRcdFx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnSW52YWxpZCAyRkEgdmVyaWZpY2F0aW9uIGNvZGUnKSxcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdCd3YXJuaW5nJ1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHZvaWQgbG9naW4oe1xuXHRcdFx0XHRcdFx0XHRsb2dpbkNvbnRpbnVlOiB0cnVlLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdyZXNldHBhc3MtdGVtcC1lbWFpbGVkJzpcblx0XHRcdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ05ldyBwYXNzd29yZCBpcyByZXF1aXJlZCcpLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0J3dhcm5pbmcnXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0dm9pZCBsb2dpbih7XG5cdFx0XHRcdFx0XHRcdHJldHlwZVBhc3N3b3JkOiB0cnVlLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICd3cm9uZ3Bhc3N3b3JkJzpcblx0XHRcdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0ludmFsaWQgdXNlcm5hbWUgb3IgcGFzc3dvcmQnKSxcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdCd3YXJuaW5nJ1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdGF3YWl0IHdpbmRvd01hbmFnZXIuY2xlYXJXaW5kb3dzKCk7XG5cdFx0XHRcdFx0XHRhamF4TG9naW4odG9hc3RpZnlJbnN0YW5jZSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0dG9hc3RpZnkoXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdVbmV4cGVjdGVkIEFQSSByZXNwb25zZScpLnJlcGxhY2UoJyQxJywgbWVzc2FnZWNvZGUpLFxuXHRcdFx0XHRcdFx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0J2Vycm9yJ1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHZvaWQgcmVkaXJlY3RPcmlnaW5Mb2dpblBhZ2UoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRzaG93RXJyb3IoZXJyb3IsIHRvYXN0aWZ5SW5zdGFuY2UpO1xuXHRcdFx0dm9pZCByZWRpcmVjdE9yaWdpbkxvZ2luUGFnZSgpO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBjaGVjayA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRjb25zdCB7XG5cdFx0XHRpc1ZhbGlkLFxuXHRcdFx0aXNBZ3JlZVRvczogbGFzdElzQWdyZWVUb3MsXG5cdFx0XHR0b2FzdGlmeUluc3RhbmNlOiBsYXN0VG9hc3RpZnlJbnN0YW5jZSxcblx0XHR9ID0gYXdhaXQgY2hlY2tWYWxpZChbYWdyZWVUb3NDaGVja2JveCwgbmFtZUlucHV0LCBwd2RJbnB1dF0sIHRvYXN0aWZ5SW5zdGFuY2UpO1xuXG5cdFx0dG9hc3RpZnlJbnN0YW5jZSA9IGxhc3RUb2FzdGlmeUluc3RhbmNlO1xuXG5cdFx0aWYgKGlzVmFsaWQpIHtcblx0XHRcdHZvaWQgbG9naW4oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YWpheExvZ2luKHRvYXN0aWZ5SW5zdGFuY2UsIGxhc3RJc0FncmVlVG9zKTtcblx0XHR9XG5cdH07XG5cblx0cHdkSW5wdXQub24oJ2VudGVyJywgKCk6IHZvaWQgPT4ge1xuXHRcdHZvaWQgY2hlY2soKTtcblx0fSk7XG5cdG1lc3NhZ2VEaWFsb2cuZ2V0QWN0aW9uUHJvY2VzcyA9IChhY3Rpb24pOiBPTy51aS5Qcm9jZXNzID0+XG5cdFx0bmV3IE9PLnVpLlByb2Nlc3MoKCk6IHZvaWQgPT4ge1xuXHRcdFx0aWYgKGFjdGlvbiA9PT0gJ2xvZ2luJykge1xuXHRcdFx0XHR2b2lkIGNoZWNrKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRcdFx0XHR2b2lkIHdpbmRvd01hbmFnZXIuY2xlYXJXaW5kb3dzKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0d2luZG93TWFuYWdlci5hZGRXaW5kb3dzKFttZXNzYWdlRGlhbG9nXSk7XG5cdHZvaWQgd2luZG93TWFuYWdlci5vcGVuV2luZG93KG1lc3NhZ2VEaWFsb2csIHtcblx0XHRhY3Rpb25zOiBbXG5cdFx0XHR7XG5cdFx0XHRcdGFjdGlvbjogJ2xvZ2luJyxcblx0XHRcdFx0ZmxhZ3M6IFsncHJpbWFyeScsICdwcm9ncmVzc2l2ZSddLFxuXHRcdFx0XHRsYWJlbDogJCg8Yj57Z2V0TWVzc2FnZSgnTG9naW4nKX08L2I+KSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGFjdGlvbjogJ2NhbmNlbCcsXG5cdFx0XHRcdGZsYWdzOiBbJ3NhZmUnLCAnY2xvc2UnXSxcblx0XHRcdFx0bGFiZWw6ICQoPGI+e2dldE1lc3NhZ2UoJ0NhbmNlbCcpfTwvYj4pLFxuXHRcdFx0fSxcblx0XHRdLFxuXHRcdG1lc3NhZ2U6ICQoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9vLXVpLXdpbmRvdy1mb290XCI+e1skaW5wdXRCb3gsICRmb3Jnb3RQYXNzd29yZCwgJHJlbWVtYmVyTWUsICRhZ3JlZVRvcywgJHRvc0xhYmVsXX08L2Rpdj5cblx0XHQpLFxuXHRcdHRpdGxlOiAkKDxiIGNsYXNzTmFtZT1cIm9vLXVpLXdpbmRvdy1oZWFkXCI+e2dldE1lc3NhZ2UoJ0xvZ2luJyl9PC9iPiksXG5cdFx0c2l6ZTogJ3NtYWxsJyxcblx0fSk7XG5cdHJlbW92ZVdpbmRvd1Jlc2l6ZUhhbmRsZXIoKTtcbn07XG5cbmV4cG9ydCB7YWpheExvZ2lufTtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7b291aUNvbmZpcm19IGZyb20gJy4vb291aUNvbmZpcm0nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5pbXBvcnQge3dpbmRvd01hbmFnZXJ9IGZyb20gJy4uL2luaXRXaW5kb3dNYW5hZ2VyJztcblxuY29uc3QgY2hlY2tWYWxpZCA9IGFzeW5jIChcblx0W2FncmVlVG9zQ2hlY2tib3gsIG5hbWVJbnB1dCwgcHdkSW5wdXRdOiBbT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCwgT08udWkuVGV4dElucHV0V2lkZ2V0LCBPTy51aS5UZXh0SW5wdXRXaWRnZXRdLFxuXHR0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlXG4pOiBQcm9taXNlPHtcblx0aXNBZ3JlZVRvczogYm9vbGVhbjtcblx0aXNWYWxpZDogYm9vbGVhbjtcblx0dG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZTtcbn0+ID0+IHtcblx0bGV0IGlzQWdyZWVUb3M6IGJvb2xlYW4gPSBhZ3JlZVRvc0NoZWNrYm94LmlzU2VsZWN0ZWQoKTtcblx0Y29uc3QgaXNGaWxsOiBib29sZWFuID0gIVtuYW1lSW5wdXQuZ2V0VmFsdWUoKS50cmltKCksIHB3ZElucHV0LmdldFZhbHVlKCkudHJpbSgpXS5pbmNsdWRlcygnJyk7XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0YXdhaXQgd2luZG93TWFuYWdlci5jbGVhcldpbmRvd3MoKTtcblxuXHRpZiAoIWlzQWdyZWVUb3MpIHtcblx0XHRpc0FncmVlVG9zID0gYXdhaXQgb291aUNvbmZpcm0oe1xuXHRcdFx0bWVzc2FnZTogJCg8c3BhbiBpbm5lckhUTUw9e2dldE1lc3NhZ2UoJ0RvdWJsZUNoZWNrQWdyZWVkT3JOb3QnKX0gLz4pIGFzIEpRdWVyeSxcblx0XHRcdGFjdGlvbnM6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGxhYmVsOiAkKDxiPntnZXRNZXNzYWdlKCdDYW5jZWwnKX08L2I+KSxcblx0XHRcdFx0XHRhY3Rpb246ICdjYW5jZWwnLFxuXHRcdFx0XHRcdGZsYWdzOiBbJ3NhZmUnLCAnY2xvc2UnXSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGxhYmVsOiAkKDxiPntnZXRNZXNzYWdlKCdJIGFncmVlJyl9PC9iPiksXG5cdFx0XHRcdFx0YWN0aW9uOiAnYWNjZXB0Jyxcblx0XHRcdFx0XHRmbGFnczogWydwcmltYXJ5JywgJ3Byb2dyZXNzaXZlJ10sXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdH0pO1xuXG5cdFx0aWYgKCFpc0FncmVlVG9zKSB7XG5cdFx0XHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdBZ3JlZWRPck5vdCcpLFxuXHRcdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0J2luZm8nXG5cdFx0XHQpO1xuXHRcdH1cblx0fSBlbHNlIGlmICghaXNGaWxsKSB7XG5cdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdFbXB0eVVzZXJuYW1lT3JQYXNzd29yZCcpLFxuXHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHR9LFxuXHRcdFx0J2luZm8nXG5cdFx0KTtcblx0fVxuXG5cdGNvbnN0IGlzVmFsaWQ6IGJvb2xlYW4gPSBpc0FncmVlVG9zICYmIGlzRmlsbDtcblxuXHRyZXR1cm4ge1xuXHRcdGlzQWdyZWVUb3MsXG5cdFx0aXNWYWxpZCxcblx0XHR0b2FzdGlmeUluc3RhbmNlLFxuXHR9O1xufTtcblxuZXhwb3J0IHtjaGVja1ZhbGlkfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0JzYtZGlnaXQgbnVtYmVyJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICc2LWRpZ2l0IG51bWJlcicsXG5cdFx0XHRqYTogJzbmoYHjga7mlbDlrZcnLFxuXHRcdFx0J3poLWhhbnMnOiAnNuS9jeaVsOWtlycsXG5cdFx0XHQnemgtaGFudCc6ICc25L2N5pW45a2XJyxcblx0XHR9KSxcblx0XHRDYW5jZWw6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ2FuY2VsJyxcblx0XHRcdGphOiAn44Kt44Oj44Oz44K744OrJyxcblx0XHRcdHpoOiAn5Y+W5raIJyxcblx0XHR9KSxcblx0XHQnRW50ZXIgcGFzc3dvcmQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VudGVyIHBhc3N3b3JkJyxcblx0XHRcdGphOiAn44OR44K544Ov44O844OJJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ivt+i+k+WFpeWvhueggScsXG5cdFx0XHQnemgtaGFudCc6ICfoq4vovLjlhaXlr4bnorwnLFxuXHRcdH0pLFxuXHRcdCdFbnRlciAyRkEgdmVyaWZpY2F0aW9uIGNvZGUnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJzJGQSB2ZXJpZmljYXRpb24gY29kZScsXG5cdFx0XHRqYTogJzJGQeiqjeiovOOCs+ODvOODiScsXG5cdFx0XHQnemgtaGFucyc6ICfor7fovpPlhaUyRkHpqozor4HnoIEnLFxuXHRcdFx0J3poLWhhbnQnOiAn6KuL6Ly45YWlMkZB6amX6K2J56K8Jyxcblx0XHR9KSxcblx0XHQnRm9yZ290IHBhc3N3b3JkPyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRm9yZ290IHBhc3N3b3JkPycsXG5cdFx0XHRqYTogJ+ODkeOCueODr+ODvOODieOCkuOBiuW/mOOCjOOBp+OBmeOBi++8nycsXG5cdFx0XHQnemgtaGFucyc6ICflv5jorrDlr4bnoIHvvJ8nLFxuXHRcdFx0J3poLWhhbnQnOiAn5b+Y6KiY5a+G56K877yfJyxcblx0XHR9KSxcblx0XHQnR2V0dGluZyBsb2dpbiB0b2tlbic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnR2V0dGluZyBsb2dpbiB0b2tlbicsXG5cdFx0XHRqYTogJ+ODreOCsOOCpOODs+ODiOODvOOCr+ODs+OCkuWPluW+l+OBl+OBpuOBhOOBvuOBmScsXG5cdFx0XHQnemgtaGFucyc6ICfmraPlnKjojrflj5bnmbvlvZXku6TniYwnLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2j5Zyo542y5Y+W55m75YWl5qyK5p2WJyxcblx0XHR9KSxcblx0XHQnaGVscCBmb3IgSSBhZ3JlZSB3aXRoIHRoZSByZWxldmFudCB0ZXJtcyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnV2hlbiB5b3UgbG9naW4sIGl0IG1lYW5zIHRoYXQgeW91IGhhdmUgY2FyZWZ1bGx5IHJlYWQsIGZ1bGx5IHVuZGVyc3Rvb2QgYW5kIGFncmVlZCB0byBjb21wbHkgd2l0aCB0aGUgPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOlRPU1wiIHRpdGxlPVwiVGVybXMgb2YgU2VydmljZVwiPlRlcm1zIG9mIFNlcnZpY2U8L2E+LCA8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6UElQUFwiIHRpdGxlPVwiUGVyc29uYWwgSW5mb3JtYXRpb24gUHJvdGVjdGlvbiBQb2xpY3lcIj5QZXJzb25hbCBJbmZvcm1hdGlvbiBQcm90ZWN0aW9uIFBvbGljeTwvYT4gYW5kIDxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpEQUdaQ1wiIHRpdGxlPVwiWXNBcmNoaXZlcyBBc3NvY2lhdGlvblwiPllzQXJjaGl2ZXMgQXNzb2NpYXRpb248L2E+LicsXG5cdFx0XHRqYTogJ+ODreOCsOOCpOODs+OCkuOBmeOCi+OBqOOAgeOBguOBquOBn+OBr+acrOOCteOCpOODiOOBruOAjjxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpUT1NcIiB0aXRsZT1cIuWIqeeUqOimj+e0hFwiPuWIqeeUqOimj+e0hDwvYT7jgI/jgI48YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6UElQUFwiIHRpdGxlPVwi5YCL5Lq65oOF5aCx5L+d6K235p2h5L6LXCI+5YCL5Lq65oOF5aCx5L+d6K235p2h5L6LPC9hPuOAj+OAjjxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpHUFwiIHRpdGxlPVwi5qGj5qGI6aaG56ug56iLXCI+5qGj5qGI6aaG56ug56iLPC9hPuOAj+OCkuWNgeWIhuOBq+eQhuino+OBl+OAgeWQjOaEj+OBl+OBn+OBk+OBqOOBq+OBquOCiuOBvuOBmeOAgicsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCfnmbvlvZXml7bvvIzljbPku6Pooajmgqjlt7Lku5Tnu4bpmIXor7vjgIHlhYXliIbkuobop6PlubblkIzmhI/pgbXlrojmnKznvZHnq5nnmoTjgIo8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6VE9TXCIgdGl0bGU9XCLnlKjmiLfljY/orq5cIj7nlKjmiLfljY/orq48L2E+44CL44CKPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOlBJUFBcIiB0aXRsZT1cIuS4quS6uuS/oeaBr+S/neaKpOadoeS+i1wiPuS4quS6uuS/oeaBr+S/neaKpOadoeS+izwvYT7jgIvjgIo8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6R1BcIiB0aXRsZT1cIuaho+ahiOmmhueroOeoi1wiPuaho+ahiOmmhueroOeoizwvYT7jgIvjgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn55m76YyE5pmC77yM5Y2z5Luj6KGo5oKo5bey5LuU57Sw6Zax6K6A44CB5YWF5YiG5LqG6Kej5Lim5ZCM5oSP6YG15a6I5pys57ay56uZ55qE44CKPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOlRPU1wiIHRpdGxlPVwi55So5oi25Y2U6K2wXCI+55So5oi25Y2U6K2wPC9hPuOAi+OAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpQSVBQXCIgdGl0bGU9XCLlgIvkurrkv6Hmga/kv53orbfmnaHkvotcIj7lgIvkurrkv6Hmga/kv53orbfmnaHkvos8L2E+44CL44CKPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOkdQXCIgdGl0bGU9XCLmoaPmoYjppobnq6DnqItcIj7moaPmoYjppobnq6DnqIs8L2E+44CL44CCJyxcblx0XHR9KSxcblx0XHQnSSBhZ3JlZSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSSBhZ3JlZScsXG5cdFx0XHRqYTogJ+WQjOaEj+OBmeOCiycsXG5cdFx0XHR6aDogJ+aIkeWQjOaEjycsXG5cdFx0fSksXG5cdFx0J0kgYWdyZWUgd2l0aCB0aGUgcmVsZXZhbnQgdGVybXMnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0kgYWdyZWUgd2l0aCB0aGUgcmVsZXZhbnQgdGVybXMnLFxuXHRcdFx0amE6ICfplqLpgKPjgZnjgovopo/ntITjgpLoqq3jgb/jgIHlkIzmhI8nLFxuXHRcdFx0J3poLWhhbnMnOiAn5oiR5bey6ZiF6K+75bm25ZCM5oSP55u45YWz5p2h5qy+Jyxcblx0XHRcdCd6aC1oYW50JzogJ+aIkeW3sumWsuiugOS4puWQjOaEj+ebuOmXnOaineasvicsXG5cdFx0fSksXG5cdFx0J0ludmFsaWQgMkZBIHZlcmlmaWNhdGlvbiBjb2RlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdJbnZhbGlkIDJGQSB2ZXJpZmljYXRpb24gY29kZScsXG5cdFx0XHRqYTogJzJGQeiqjeiovOOCs+ODvOODieOBjOmWk+mBleOBo+OBpuOBhOOBvuOBmScsXG5cdFx0XHQnemgtaGFucyc6ICcyRkHpqozor4HnoIHplJnor68nLFxuXHRcdFx0J3poLWhhbnQnOiAnMkZB6amX6K2J56K86Yyv6KqkJyxcblx0XHR9KSxcblx0XHQnSW52YWxpZCB1c2VybmFtZSBvciBwYXNzd29yZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSW52YWxpZCB1c2VybmFtZSBvciBwYXNzd29yZCcsXG5cdFx0XHRqYTogJ+WIqeeUqOiAheWQjeOBvuOBn+OBr+ODkeOCueODr+ODvOODieOBjOmWk+mBleOBo+OBpuOBhOOBvuOBmScsXG5cdFx0XHQnemgtY24nOiAn55So5oi35ZCN5oiW5a+G56CB6ZSZ6K+vJyxcblx0XHRcdCd6aC1oayc6ICfnlKjmiLblkI3nqLHmiJblr4bnorzpjK/oqqQnLFxuXHRcdFx0J3poLXR3JzogJ+S9v+eUqOiAheWQjeeoseaIluWvhueivOmMr+iqpCcsXG5cdFx0fSksXG5cdFx0J0tlZXAgbWUgbG9nZ2VkIGluJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdLZWVwIG1lIGxvZ2dlZCBpbicsXG5cdFx0XHRqYTogJ+ODreOCsOOCpOODs+eKtuaFi+OCkuS/neaMgScsXG5cdFx0XHQnemgtaGFucyc6ICforrDkvY/miJHnmoTnmbvlvZXnirbmgIEnLFxuXHRcdFx0J3poLWhhbnQnOiAn6KiY5L2P5oiR55qE55m75YWl54uA5oWLJyxcblx0XHR9KSxcblx0XHQnTG9nZ2luZyBpbic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9nZ2luZyBpbicsXG5cdFx0XHRqYTogJ+ODreOCsOOCpOODs+OBl+OBpuOBhOOBvuOBmScsXG5cdFx0XHQnemgtaGFucyc6ICfmraPlnKjnmbvlvZUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2j5Zyo55m75YWlJyxcblx0XHR9KSxcblx0XHRMb2dpbjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMb2dpbicsXG5cdFx0XHRqYTogJ+ODreOCsOOCpOODsycsXG5cdFx0XHQnemgtaGFucyc6ICfnmbvlvZUnLFxuXHRcdFx0J3poLWhhbnQnOiAn55m75YWlJyxcblx0XHR9KSxcblx0XHQnTG9naW4gY2FuY2VsbGVkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMb2dpbiBjYW5jZWxsZWQnLFxuXHRcdFx0amE6ICfjg63jgrDjgqTjg7Pjgq3jg6Pjg7Pjgrvjg6snLFxuXHRcdFx0J3poLWhhbnMnOiAn55m75b2V5Y+W5raIJyxcblx0XHRcdCd6aC1oYW50JzogJ+eZu+WFpeWPlua2iCcsXG5cdFx0fSksXG5cdFx0J0xvZ2luIHN1Y2NlZWQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvZ2luIHN1Y2NlZWQnLFxuXHRcdFx0amE6ICfjg63jgrDjgqTjg7PjgavmiJDlip/jgZfjgb7jgZfjgZ8nLFxuXHRcdFx0J3poLWhhbnMnOiAn55m75b2V5oiQ5YqfJyxcblx0XHRcdCd6aC1oYW50JzogJ+eZu+WFpeaIkOWKnycsXG5cdFx0fSksXG5cdFx0J0xvZ2luIHRva2VuIGdvdCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9naW4gdG9rZW4gZ290Jyxcblx0XHRcdGphOiAn44Ot44Kw44Kk44Oz44OI44O844Kv44Oz44Gu5Y+W5b6X44Gr5oiQ5Yqf44GX44G+44GX44GfJyxcblx0XHRcdCd6aC1oYW5zJzogJ+iOt+WPlueZu+W9leS7pOeJjOaIkOWKnycsXG5cdFx0XHQnemgtaGFudCc6ICfnjbLlj5bnmbvlhaXmrIrmnZbmiJDlip8nLFxuXHRcdH0pLFxuXHRcdCdOZXcgcGFzc3dvcmQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ05ldyBwYXNzd29yZCcsXG5cdFx0XHRqYTogJ+aWsOOBl+OBhOODkeOCueODr+ODvOODiScsXG5cdFx0XHQnemgtaGFucyc6ICfmlrDlr4bnoIEnLFxuXHRcdFx0J3poLWhhbnQnOiAn5paw5a+G56K8Jyxcblx0XHR9KSxcblx0XHQnTmV3IHBhc3N3b3JkIGlzIHJlcXVpcmVkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdOZXcgcGFzc3dvcmQgaXMgcmVxdWlyZWQnLFxuXHRcdFx0amE6ICfmlrDjgZfjgYTjg5Hjgrnjg6/jg7zjg4njgpLoqK3lrprjgZfjgabjgY/jgaDjgZXjgYQnLFxuXHRcdFx0J3poLWhhbnMnOiAn6ZyA6KaB6K6+572u5paw5a+G56CBJyxcblx0XHRcdCd6aC1oYW50JzogJ+mcgOimgeioree9ruaWsOWvhueivCcsXG5cdFx0fSksXG5cdFx0UGFzc3dvcmQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGFzc3dvcmQnLFxuXHRcdFx0amE6ICfjg5Hjgrnjg6/jg7zjg4knLFxuXHRcdFx0J3poLWhhbnMnOiAn5a+G56CBJyxcblx0XHRcdCd6aC1oYW50JzogJ+WvhueivCcsXG5cdFx0fSksXG5cdFx0J1Jlc2V0IHBhc3N3b3JkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdSZXNldCBwYXNzd29yZCcsXG5cdFx0XHRqYTogJ+ODkeOCueODr+ODvOODieOCkuODquOCu+ODg+ODiCcsXG5cdFx0XHQnemgtaGFucyc6ICfph43nva7lr4bnoIEnLFxuXHRcdFx0J3poLWhhbnQnOiAn6YeN5paw6Kit5a6a5a+G56K8Jyxcblx0XHR9KSxcblx0XHRVc2VybmFtZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdVc2VybmFtZScsXG5cdFx0XHRqYTogJ+WIqeeUqOiAheWQjScsXG5cdFx0XHQnemgtY24nOiAn55So5oi35ZCNJyxcblx0XHRcdCd6aC1oayc6ICfnlKjmiLblkI3nqLEnLFxuXHRcdFx0J3poLXR3JzogJ+S9v+eUqOiAheWQjeeosScsXG5cdFx0fSksXG5cdFx0QWdyZWVkT3JOb3Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGxlYXNlIHJlYWQgdGhlIHJlbGV2YW50IHRlcm1zLiBJZiB5b3UgYWdyZWUsIGNoZWNrIHRoZSBjaGVja2JveCB0byBjb25maXJtJyxcblx0XHRcdGphOiAn6Zai6YCj44GZ44KL6KaP57SE44KS44GK6Kqt44G/44GE44Gf44Gg44GN44CB5ZCM5oSP44GV44KM44KL5aC05ZCI44Gv44CB44OB44Kn44OD44Kv44Oc44OD44Kv44K544Gr44OB44Kn44OD44Kv44KS5YWl44KM44Gm56K66KqN44GX44Gm44GP44Gg44GV44GEJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ivt+mYheivu+ebuOWFs+adoeasvuOAguiLpeWQjOaEj++8jOWLvumAieWkjemAieahhuS7peehruiupCcsXG5cdFx0XHQnemgtaGFudCc6ICfoq4vplrLoroDnm7jpl5zmop3mrL7jgILoi6XlkIzmhI/vvIzli77pgbjopIfpgbjmoYbku6Xnorroqo0nLFxuXHRcdH0pLFxuXHRcdERvdWJsZUNoZWNrQWdyZWVkT3JOb3Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnWW91IGhhdmUgY2FyZWZ1bGx5IHJlYWQsIGZ1bGx5IHVuZGVyc3Rvb2QgYW5kIGFncmVlZCB0byBjb21wbHkgd2l0aCBvdXIgPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOlRPU1wiIHRpdGxlPVwiVGVybXMgb2YgU2VydmljZVwiPlRlcm1zIG9mIFNlcnZpY2U8L2E+LCA8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6UElQUFwiIHRpdGxlPVwiUGVyc29uYWwgSW5mb3JtYXRpb24gUHJvdGVjdGlvbiBQb2xpY3lcIj5QZXJzb25hbCBJbmZvcm1hdGlvbiBQcm90ZWN0aW9uIFBvbGljeTwvYT4gYW5kIDxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpEQUdaQ1wiIHRpdGxlPVwiWXNBcmNoaXZlcyBBc3NvY2lhdGlvblwiPllzQXJjaGl2ZXMgQXNzb2NpYXRpb248L2E+LicsXG5cdFx0XHRqYTogJ+OBguOBquOBn+OBr+acrOOCteOCpOODiOOBruOAjjxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpUT1NcIiB0aXRsZT1cIuWIqeeUqOimj+e0hFwiPuWIqeeUqOimj+e0hDwvYT7jgI/jgI48YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6UElQUFwiIHRpdGxlPVwi5YCL5Lq65oOF5aCx5L+d6K235p2h5L6LXCI+5YCL5Lq65oOF5aCx5L+d6K235p2h5L6LPC9hPuOAj+OAjjxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpHUFwiIHRpdGxlPVwi5qGj5qGI6aaG56ug56iLXCI+5qGj5qGI6aaG56ug56iLPC9hPuOAj+OCkuWNgeWIhuOBq+eQhuino+OBl+OAgeWQjOaEj+OBl+OBn+OBk+OBqOOBq+OBquOCiuOBvuOBmeOAgicsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCfmgqjlt7Lku5Tnu4bpmIXor7vjgIHlhYXliIbkuobop6PlubblkIzmhI/pgbXlrojmnKznvZHnq5nnmoTjgIo8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6VE9TXCIgdGl0bGU9XCLnlKjmiLfljY/orq5cIj7nlKjmiLfljY/orq48L2E+44CL44CKPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOlBJUFBcIiB0aXRsZT1cIuS4quS6uuS/oeaBr+S/neaKpOadoeS+i1wiPuS4quS6uuS/oeaBr+S/neaKpOadoeS+izwvYT7jgIvjgIo8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6R1BcIiB0aXRsZT1cIuaho+ahiOmmhueroOeoi1wiPuaho+ahiOmmhueroOeoizwvYT7jgIvjgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn5oKo5bey5LuU57Sw6Zax6K6A44CB5YWF5YiG5LqG6Kej5Lim5ZCM5oSP6YG15a6I5pys57ay56uZ55qE44CKPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOlRPU1wiIHRpdGxlPVwi55So5oi25Y2U6K2wXCI+55So5oi25Y2U6K2wPC9hPuOAi+OAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpQSVBQXCIgdGl0bGU9XCLlgIvkurrkv6Hmga/kv53orbfmnaHkvotcIj7lgIvkurrkv6Hmga/kv53orbfmnaHkvos8L2E+44CL44CKPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOkdQXCIgdGl0bGU9XCLmoaPmoYjppobnq6DnqItcIj7moaPmoYjppobnq6DnqIs8L2E+44CL44CCJyxcblx0XHR9KSxcblx0XHRFbXB0eTJGQTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGUgMkZBIHZlcmlmaWNhdGlvbiBjb2RlIGNhbm5vdCBiZSBlbXB0eScsXG5cdFx0XHRqYTogJzJGQeiqjeiovOOCs+ODvOODieOBjOWFpeWKm+OBleOCjOOBpuOBhOOBvuOBm+OCkycsXG5cdFx0XHQnemgtaGFucyc6ICcyRkHpqozor4HnoIHkuI3og73kuLrnqbonLFxuXHRcdFx0J3poLWhhbnQnOiAnMkZB6amX6K2J56K85LiN6IO954iy56m6Jyxcblx0XHR9KSxcblx0XHRFbXB0eVBhc3N3b3JkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoZSBwYXNzd29yZCBjYW5ub3QgYmUgZW1wdHknLFxuXHRcdFx0amE6ICfjg5Hjgrnjg6/jg7zjg4njgYzlhaXlipvjgZXjgozjgabjgYTjgb7jgZvjgpMnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a+G56CB5LiN6IO95Li656m6Jyxcblx0XHRcdCd6aC1oYW50JzogJ+WvhueivOS4jeiDveeIsuepuicsXG5cdFx0fSksXG5cdFx0RW1wdHlVc2VybmFtZU9yUGFzc3dvcmQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhlIHVzZXJuYW1lIG9yIHBhc3N3b3JkIGNhbm5vdCBiZSBlbXB0eScsXG5cdFx0XHRqYTogJ+WIqeeUqOiAheWQjeOBvuOBn+OBr+ODkeOCueODr+ODvOODieOBjOWFpeWKm+OBleOCjOOBpuOBhOOBvuOBm+OCkycsXG5cdFx0XHQnemgtY24nOiAn55So5oi35ZCN5oiW5a+G56CB5LiN6IO95Li656m6Jyxcblx0XHRcdCd6aC1oayc6ICfnlKjmiLblkI3nqLHmiJblr4bnorzkuI3og73niLLnqbonLFxuXHRcdFx0J3poLXR3JzogJ+S9v+eUqOiAheWQjeeoseaIluWvhueivOS4jeiDveeIsuepuicsXG5cdFx0fSksXG5cdFx0J05ldHdvcmsgZXJyb3InOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ05ldHdvcmsgZXJyb3IuIFJlZGlyZWN0aW5nLi4uJyxcblx0XHRcdGphOiAn44ON44OD44OI44Ov44O844Kv44Ko44Op44O844CB44Oq44OA44Kk44Os44Kv44OI5LitLi4uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+e9kee7nOW8guW4uOOAgumHjeWumuWQkeS4reKApuKApicsXG5cdFx0XHQnemgtaGFudCc6ICfntrLot6/nlbDluLjjgILph43mlrDlsI7lkJHkuK3igKbigKYnLFxuXHRcdH0pLFxuXHRcdFNlbGVjdGVkT3JOb3Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnS2VlcCBsb2dnZWQgaW4gZm9yIDYgbW9udGhzIGlmIHNlbGVjdGVkOyBvdGhlcndpc2UgdW50aWwgdGhlIGJyb3dzZXIgY2xvc2VzLicsXG5cdFx0XHRqYTogJ+ODgeOCp+ODg+OCr+OCkuWFpeOCjOOCi+OBqOODreOCsOOCpOODs+eKtuaFi+OBjDbjg7bmnIjplpPkv53mjIHjgZXjgozjgIHlhaXjgozjgarjgYTloLTlkIjjga/jg5bjg6njgqbjgrbjgpLplonjgZjjgovjgb7jgafkv53mjIHjgZXjgozjgb7jgZnjgIInLFxuXHRcdFx0J3poLWhhbnMnOiAn5Yu+6YCJ5YiZ5L+d5oyB55m75b2V54q25oCBNuS4quaciO+8jOWQpuWImeWwhuWcqOa1j+iniOWZqOWFs+mXreaXtumAgOWHuueZu+W9leOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfli77pgbjliJnkv53mjIHnmbvlhaXni4DmhYs25YCL5pyI77yM5ZCm5YmH5bCH5Zyo54CP6Ka95Zmo6Zec6ZaJ5pmC55m75Ye644CCJyxcblx0XHR9KSxcblx0XHRUb29GcmVxdWVudDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGUgdXNlciBsb2dpbiBpcyB0b28gZnJlcXVlbnQsIHBsZWFzZSB0cnkgYWdhaW4gaW4gZml2ZSBtaW51dGVzJyxcblx0XHRcdGphOiAn5Yip55So6ICF44GM6aC757mB44GZ44GO44KL44Gf44KB44CBNeWIhuW+jOOBq+WGjeippuihjOOBl+OBpuOBj+OBoOOBleOBhCcsXG5cdFx0XHQnemgtY24nOiAn55So5oi355m75b2V6L+H5LqO6aKR57mB77yM6K+35LqU5YiG6ZKf5ZCO5YaN6K+VJyxcblx0XHRcdCd6aC1oayc6ICfnlKjmiLbnmbvlhaXpgY7mlrzpoLvnuYHvvIzoq4vkupTliIbpkJjlvozlho3oqaYnLFxuXHRcdFx0J3poLXR3JzogJ+S9v+eUqOiAheeZu+WFpei/h+S6jumikee5ge+8jOivt+S6lOWIhumSn+WQjuWGjeivlScsXG5cdFx0fSksXG5cdFx0J1VuZXhwZWN0ZWQgQVBJIHJlc3BvbnNlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdVbmV4cGVjdGVkIEFQSSByZXNwb25zZTogJDEuIFJlZGlyZWN0aW5nLi4uJyxcblx0XHRcdGphOiAn5LqI5pyf44Gb44GsQVBJ44Gu5b+c562U77yaJDHjgIHjg6rjg4DjgqTjg6zjgq/jg4jkuK0uLi4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5oSP5aSW55qEQVBJ5ZON5bqU77yaJDHjgILph43lrprlkJHkuK3igKbigKYnLFxuXHRcdFx0J3poLWhhbnQnOiAn5oSP5aSW55qEQVBJ6Z+/5oeJ77yaJDHjgILph43mlrDlsI7lkJHkuK3igKbigKYnLFxuXHRcdH0pLFxuXHR9O1xufTtcbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiY29uc3QgaW5pdFdpbmRvd01hbmFnZXIgPSAoKTogT08udWkuV2luZG93TWFuYWdlciA9PiB7XG5cdHJldHVybiBuZXcgT08udWkuV2luZG93TWFuYWdlcigpO1xufTtcblxuY29uc3Qgd2luZG93TWFuYWdlcjogT08udWkuV2luZG93TWFuYWdlciA9IGluaXRXaW5kb3dNYW5hZ2VyKCk7XG5cbmV4cG9ydCB7d2luZG93TWFuYWdlcn07XG4iLCAiaW1wb3J0IHt3aW5kb3dNYW5hZ2VyfSBmcm9tICcuLi9pbml0V2luZG93TWFuYWdlcic7XG5cbmNvbnN0IG9vdWlDb25maXJtID0gYXN5bmMgKG9wdGlvbnM6IE9PLnVpLk1lc3NhZ2VEaWFsb2cuU2V0dXBEYXRhTWFwKTogUHJvbWlzZTxib29sZWFuPiA9PiB7XG5cdGNvbnN0IG1lc3NhZ2VEaWFsb2c6IE9PLnVpLk1lc3NhZ2VEaWFsb2cgPSBuZXcgT08udWkuTWVzc2FnZURpYWxvZygpO1xuXHR3aW5kb3dNYW5hZ2VyLmFkZFdpbmRvd3MoW21lc3NhZ2VEaWFsb2ddKTtcblxuXHRjb25zdCBpbnN0YW5jZTogT08udWkuV2luZG93SW5zdGFuY2UgPSB3aW5kb3dNYW5hZ2VyLm9wZW5XaW5kb3cobWVzc2FnZURpYWxvZywgb3B0aW9ucyk7XG5cblx0Y29uc3QgZGF0YTogdm9pZCA9IGF3YWl0IGluc3RhbmNlLmNsb3NlZDtcblx0Y29uc3QgX2RhdGEgPSBkYXRhIGFzIHthY3Rpb246IHN0cmluZ30gfCB2b2lkO1xuXG5cdHJldHVybiAhIShfZGF0YT8uYWN0aW9uID09PSAnYWNjZXB0Jyk7XG59O1xuXG5leHBvcnQge29vdWlDb25maXJtfTtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3QgZ2VuZXJhdGVFbGVtZW50cyA9IChpc0FncmVlVG9zOiBib29sZWFuKSA9PiB7XG5cdGNvbnN0IG1lc3NhZ2VEaWFsb2c6IE9PLnVpLk1lc3NhZ2VEaWFsb2cgPSBuZXcgT08udWkuTWVzc2FnZURpYWxvZygpO1xuXG5cdGNvbnN0IG5hbWVJbnB1dDogT08udWkuVGV4dElucHV0V2lkZ2V0ID0gbmV3IE9PLnVpLlRleHRJbnB1dFdpZGdldCh7XG5cdFx0aWNvbjogJ3VzZXJBdmF0YXInLFxuXHRcdHBsYWNlaG9sZGVyOiBnZXRNZXNzYWdlKCdVc2VybmFtZScpLFxuXHRcdHZhbGlkYXRlOiAnbm9uLWVtcHR5Jyxcblx0fSk7XG5cblx0Y29uc3QgcHdkSW5wdXQ6IE9PLnVpLlRleHRJbnB1dFdpZGdldCA9IG5ldyBPTy51aS5UZXh0SW5wdXRXaWRnZXQoe1xuXHRcdGljb246ICdrZXknLFxuXHRcdHBsYWNlaG9sZGVyOiBnZXRNZXNzYWdlKCdQYXNzd29yZCcpLFxuXHRcdHR5cGU6ICdwYXNzd29yZCcsXG5cdFx0dmFsaWRhdGU6ICdub24tZW1wdHknLFxuXHR9KTtcblxuXHRjb25zdCBhZ3JlZVRvc0NoZWNrYm94OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0ID0gbmV3IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQoe1xuXHRcdHNlbGVjdGVkOiBpc0FncmVlVG9zLFxuXHR9KTtcblx0Y29uc3QgYWdyZWVUb3NMYXlvdXQ6IE9PLnVpLkZpZWxkTGF5b3V0PE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGFncmVlVG9zQ2hlY2tib3gsIHtcblx0XHRhbGlnbjogJ2lubGluZScsXG5cdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ0kgYWdyZWUgd2l0aCB0aGUgcmVsZXZhbnQgdGVybXMnKSxcblx0fSk7XG5cblx0Y29uc3Qga2VlcExvZ2luQ2hlY2tib3g6IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQgPSBuZXcgT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCgpO1xuXHRjb25zdCBrZWVwTG9naW5MYXlvdXQ6IE9PLnVpLkZpZWxkTGF5b3V0PE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGtlZXBMb2dpbkNoZWNrYm94LCB7XG5cdFx0YWxpZ246ICdpbmxpbmUnLFxuXHRcdGhlbHA6IGdldE1lc3NhZ2UoJ1NlbGVjdGVkT3JOb3QnKSxcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnS2VlcCBtZSBsb2dnZWQgaW4nKSxcblx0fSk7XG5cblx0Y29uc3QgbGFiZWwgPSAoXG5cdFx0PGxhYmVsXG5cdFx0XHRjbGFzc05hbWU9e1snb28tdWktbGFiZWxXaWRnZXQnLCAnb28tdWktbGFiZWxFbGVtZW50LWxhYmVsJ119XG5cdFx0XHRzdHlsZT17e2ZvbnRTaXplOiAnOTAlJywgdGV4dEFsaWduOiAnanVzdGlmeSd9fVxuXHRcdC8+XG5cdCk7XG5cdGNvbnN0ICRsYWJlbCA9ICQobGFiZWwpIGFzIEpRdWVyeTtcblxuXHRjb25zdCAkYWdyZWVUb3M6IEpRdWVyeSA9ICRsYWJlbC5jbG9uZSgpLmFwcGVuZChhZ3JlZVRvc0xheW91dC4kZWxlbWVudCk7XG5cdGNvbnN0ICRmb3Jnb3RQYXNzd29yZDogSlF1ZXJ5ID0gJGxhYmVsXG5cdFx0LmNsb25lKClcblx0XHQuY3NzKCdmbG9hdCcsICdyaWdodCcpXG5cdFx0LmFwcGVuZChcblx0XHRcdDxhIGhyZWY9e213LnV0aWwuZ2V0VXJsKCdTcGVjaWFsOlBhc3N3b3JkUmVzZXQnKX0gdGl0bGU9e2dldE1lc3NhZ2UoJ1Jlc2V0IHBhc3N3b3JkJyl9PlxuXHRcdFx0XHR7Z2V0TWVzc2FnZSgnRm9yZ290IHBhc3N3b3JkPycpfVxuXHRcdFx0PC9hPlxuXHRcdCk7XG5cdGNvbnN0ICRpbnB1dEJveDogSlF1ZXJ5ID0gJGxhYmVsXG5cdFx0LmNsb25lKClcblx0XHQuY3NzKHtcblx0XHRcdGRpc3BsYXk6ICdibG9jaycsXG5cdFx0XHQnZm9udC1zaXplJzogJ2luaGVyaXQnLFxuXHRcdFx0cGFkZGluZzogJzZweCAwJyxcblx0XHR9KVxuXHRcdC5hcHBlbmQobmFtZUlucHV0LiRlbGVtZW50LmNzcygnbWFyZ2luLWJvdHRvbScsICc2cHgnKSwgcHdkSW5wdXQuJGVsZW1lbnQpO1xuXHRjb25zdCAkdG9zTGFiZWw6IEpRdWVyeSA9ICRsYWJlbC5jbG9uZSgpLmh0bWwoZ2V0TWVzc2FnZSgnaGVscCBmb3IgSSBhZ3JlZSB3aXRoIHRoZSByZWxldmFudCB0ZXJtcycpKTtcblx0Y29uc3QgJHJlbWVtYmVyTWU6IEpRdWVyeSA9ICRsYWJlbC5jbG9uZSgpLmFwcGVuZChrZWVwTG9naW5MYXlvdXQuJGVsZW1lbnQuY3NzKCdtYXJnaW4tdG9wJywgJzZweCcpKTtcblxuXHRyZXR1cm4ge1xuXHRcdCRhZ3JlZVRvcyxcblx0XHQkZm9yZ290UGFzc3dvcmQsXG5cdFx0JGlucHV0Qm94LFxuXHRcdCRyZW1lbWJlck1lLFxuXHRcdCR0b3NMYWJlbCxcblx0XHRhZ3JlZVRvc0NoZWNrYm94LFxuXHRcdGtlZXBMb2dpbkNoZWNrYm94LFxuXHRcdG1lc3NhZ2VEaWFsb2csXG5cdFx0bmFtZUlucHV0LFxuXHRcdHB3ZElucHV0LFxuXHR9O1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZUVsZW1lbnRzfTtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7cmVtb3ZlV2luZG93UmVzaXplSGFuZGxlcn0gZnJvbSAnLi9yZW1vdmVXaW5kb3dSZXNpemVIYW5kbGVyJztcbmltcG9ydCB7d2luZG93TWFuYWdlcn0gZnJvbSAnLi4vaW5pdFdpbmRvd01hbmFnZXInO1xuXG5jb25zdCBvb3VpUHJvbXB0ID0gYXN5bmMgKHJldHlwZVBhc3N3b3JkOiBib29sZWFuKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiA9PiB7XG5cdGNvbnN0IGNvZGVEaWFsb2c6IE9PLnVpLk1lc3NhZ2VEaWFsb2cgPSBuZXcgT08udWkuTWVzc2FnZURpYWxvZygpO1xuXHRjb25zdCBjb2RlSW5wdXQ6IE9PLnVpLlRleHRJbnB1dFdpZGdldCA9IG5ldyBPTy51aS5UZXh0SW5wdXRXaWRnZXQoe1xuXHRcdGljb246ICdrZXknLFxuXHRcdHBsYWNlaG9sZGVyOiByZXR5cGVQYXNzd29yZCA/IGdldE1lc3NhZ2UoJ05ldyBwYXNzd29yZCcpIDogZ2V0TWVzc2FnZSgnNi1kaWdpdCBudW1iZXInKSxcblx0XHR2YWxpZGF0ZTogJ2ludGVnZXInLFxuXHR9KTtcblxuXHRjb25zdCBjb2RlTGF5b3V0OiBPTy51aS5GaWVsZExheW91dDxPTy51aS5UZXh0SW5wdXRXaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGNvZGVJbnB1dCwge1xuXHRcdGFsaWduOiAndG9wJyxcblx0XHRsYWJlbDogJChcblx0XHRcdDxiIGNsYXNzTmFtZT17Wydvby11aS1tZXNzYWdlRGlhbG9nLXRpdGxlJywgJ29vLXVpLXdpbmRvdy1oZWFkJ119PlxuXHRcdFx0XHR7cmV0eXBlUGFzc3dvcmQgPyBnZXRNZXNzYWdlKCdFbnRlciBwYXNzd29yZCcpIDogZ2V0TWVzc2FnZSgnRW50ZXIgMkZBIHZlcmlmaWNhdGlvbiBjb2RlJyl9XG5cdFx0XHQ8L2I+XG5cdFx0KSxcblx0fSk7XG5cblx0d2luZG93TWFuYWdlci5hZGRXaW5kb3dzKFtjb2RlRGlhbG9nXSk7XG5cblx0Y29uc3QgaW5zdGFuY2U6IE9PLnVpLldpbmRvd0luc3RhbmNlID0gd2luZG93TWFuYWdlci5vcGVuV2luZG93KGNvZGVEaWFsb2csIHtcblx0XHRtZXNzYWdlOiBjb2RlTGF5b3V0LiRlbGVtZW50LFxuXHR9KTtcblxuXHRyZW1vdmVXaW5kb3dSZXNpemVIYW5kbGVyKCk7XG5cblx0dm9pZCBpbnN0YW5jZS5vcGVuZWQudGhlbigoKTogdm9pZCA9PiB7XG5cdFx0Y29kZUlucHV0Lm9uKCdlbnRlcicsICgpOiB2b2lkID0+IHtcblx0XHRcdCh3aW5kb3dNYW5hZ2VyLmdldEN1cnJlbnRXaW5kb3coKSBhcyBPTy51aS5XaW5kb3cpLmNsb3NlKHtcblx0XHRcdFx0YWN0aW9uOiAnYWNjZXB0Jyxcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdGNvZGVJbnB1dC5mb2N1cygpO1xuXHR9KTtcblxuXHRjb25zdCBkYXRhOiB2b2lkID0gYXdhaXQgaW5zdGFuY2UuY2xvc2VkO1xuXHRjb25zdCBfZGF0YSA9IGRhdGEgYXMge2FjdGlvbjogc3RyaW5nfSB8IHZvaWQ7XG5cblx0cmV0dXJuIF9kYXRhPy5hY3Rpb24gPT09ICdhY2NlcHQnID8gY29kZUlucHV0LmdldFZhbHVlKCkgOiBudWxsO1xufTtcblxuZXhwb3J0IHtvb3VpUHJvbXB0fTtcbiIsICJpbXBvcnQge3dpbmRvd01hbmFnZXJ9IGZyb20gJy4uL2luaXRXaW5kb3dNYW5hZ2VyJztcblxuY29uc3QgcmVtb3ZlV2luZG93UmVzaXplSGFuZGxlciA9ICgpOiB2b2lkID0+IHtcblx0JCh3aW5kb3cpLm9mZih7XG5cdFx0J29yaWVudGF0aW9uY2hhbmdlIHJlc2l6ZSc6ICh3aW5kb3dNYW5hZ2VyIGFzIHVua25vd24gYXMge29uV2luZG93UmVzaXplSGFuZGxlcjogKCkgPT4gdm9pZH0pXG5cdFx0XHQub25XaW5kb3dSZXNpemVIYW5kbGVyLFxuXHR9KTtcbn07XG5cbmV4cG9ydCB7cmVtb3ZlV2luZG93UmVzaXplSGFuZGxlcn07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4uL2FwaSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmNvbnN0IHF1ZXJ5TG9naW5Ub2tlbiA9IGFzeW5jIChcblx0dG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZVxuKTogUHJvbWlzZTx7XG5cdGxvZ2luVG9rZW46IHN0cmluZztcblx0dG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZTtcbn0+ID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KHtcblx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdHZXR0aW5nIGxvZ2luIHRva2VuJyksXG5cdH0pO1xuXG5cdGNvbnN0IGxvZ2luVG9rZW46IHN0cmluZyA9IGF3YWl0IGFwaS5nZXRUb2tlbignbG9naW4nKTtcblxuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoe1xuXHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0xvZ2luIHRva2VuIGdvdCcpLFxuXHRcdGR1cmF0aW9uOiAtMSxcblx0fSk7XG5cblx0cmV0dXJuIHtcblx0XHRsb2dpblRva2VuLFxuXHRcdHRvYXN0aWZ5SW5zdGFuY2UsXG5cdH07XG59O1xuXG5leHBvcnQge3F1ZXJ5TG9naW5Ub2tlbn07XG4iLCAiaW1wb3J0IHtkZWxheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7d2luZG93TWFuYWdlcn0gZnJvbSAnLi4vaW5pdFdpbmRvd01hbmFnZXInO1xuXG5jb25zdCByZWRpcmVjdE9yaWdpbkxvZ2luUGFnZSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0YXdhaXQgd2luZG93TWFuYWdlci5jbGVhcldpbmRvd3MoKTtcblx0YXdhaXQgZGVsYXkoMyAqIDEwMDApO1xuXHRsb2NhdGlvbi5ocmVmID0gbXcudXRpbC5nZXRVcmwoJ1NwZWNpYWw6VXNlcmxvZ2luJyk7XG59O1xuXG5leHBvcnQge3JlZGlyZWN0T3JpZ2luTG9naW5QYWdlfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmNvbnN0IHNob3dFcnJvciA9IChlcnJvcjogdW5rbm93biwgdG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSk6IHZvaWQgPT4ge1xuXHRjb25zb2xlLmVycm9yKCdbQWpheExvZ2luXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnTmV0d29yayBlcnJvcicpLFxuXHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnZXJyb3InXG5cdCk7XG59O1xuXG5leHBvcnQge3Nob3dFcnJvcn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUEsNkZBQUFBLFNBQUE7QUFBQTtBQUNBLFFBQUksUUFBUSxTQUFVLElBQUk7QUFDeEIsYUFBTyxNQUFNLEdBQUcsU0FBUyxRQUFRO0FBQUEsSUFDbkM7QUFHQSxJQUFBQSxRQUFPO0FBQUEsSUFFTCxNQUFNLE9BQU8sY0FBYyxZQUFZLFVBQVUsS0FDakQsTUFBTSxPQUFPLFVBQVUsWUFBWSxNQUFNO0FBQUEsSUFFekMsTUFBTSxPQUFPLFFBQVEsWUFBWSxJQUFJLEtBQ3JDLE1BQU0sT0FBTyxVQUFVLFlBQVksTUFBTSxLQUN6QyxNQUFNLE9BQU8sV0FBUSxZQUFZLE9BQUk7QUFBQSxJQUVwQyw0QkFBWTtBQUFFLGFBQU87QUFBQSxJQUFNLEdBQUcsS0FBSyxTQUFTLGFBQWEsRUFBRTtBQUFBO0FBQUE7OztBQ2Y5RDtBQUFBLHVGQUFBQyxTQUFBO0FBQUE7QUFDQSxJQUFBQSxRQUFPLFVBQVUsU0FBVSxNQUFNO0FBQy9CLFVBQUk7QUFDRixlQUFPLENBQUMsQ0FBQyxLQUFLO0FBQUEsTUFDaEIsU0FBUyxPQUFPO0FBQ2QsZUFBTztBQUFBLE1BQ1Q7QUFBQSxJQUNGO0FBQUE7QUFBQTs7O0FDUEE7QUFBQSw2RkFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxRQUFRO0FBR1osSUFBQUEsUUFBTyxVQUFVLENBQUMsTUFBTSxXQUFZO0FBRWxDLGFBQU8sT0FBTyxlQUFlLENBQUMsR0FBRyxHQUFHLEVBQUUsS0FBSyxXQUFZO0FBQUUsZUFBTztBQUFBLE1BQUcsRUFBRSxD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NkQsUUFBQUMsY0FBQyxLQUFBO01BQUUwQixXQUFVO0lBQUEsR0FBcUJuRSxXQUFXLE9BQU8sQ0FBRSxDQUFJO0lBQ25FdUosTUFBTTtFQUNQLENBQUM7QUFDRDlELDRCQUEwQjtBQUMzQjs7QUhsUEEsTUFBQSxHQUFLMUgsb0JBQUF5TCxTQUFRLEVBQUVwRCxLQUFLLFNBQVNxRCxjQUFjQyxPQUFzQztBQUNoRixRQUFNO0lBQUNDO0VBQVUsSUFBSTdFLEdBQUc4RSxPQUFPQyxJQUFJO0FBRW5DLE1BQUlGLFlBQVk7QUFDZjtFQUNEO0FBRUEsUUFBTUcsZ0JBQTJDSixNQUFNSyxLQUFnQ2xNLG9CQUFvQjtBQUMzRyxNQUFJLENBQUNpTSxjQUFjRSxRQUFRO0FBQzFCO0VBQ0Q7QUFFQTFKLGdCQUFjbkMsU0FBUzhMLFNBQVNQLEtBQUs7QUFFckMsUUFBTVEsdUJBQXlDO0lBQzlDOUgsV0FBV0EsTUFBTTtJQUFDO0VBQ25CO0FBRUEsUUFBTWhFLGdCQUFpQitMLFdBQXlEO0FBQy9FLFFBQUksRUFBQSxHQUFDcE0sb0JBQUFxTSxxQkFBb0JELEtBQUssR0FBRztBQUNoQztJQUNEO0FBRUFBLFVBQU1FLGVBQWU7QUFDckI1QyxjQUFVeUMsb0JBQW9CO0VBQy9CO0FBQ0FoTSxjQUFZNEwsZUFBZTFMLGFBQWE7QUFDekMsQ0FBQzsiLAogICJuYW1lcyI6IFsibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAidmVyc2lvbiIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIlN5bWJvbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgImRvY3VtZW50IiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiVHlwZUVycm9yIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImFjdGl2ZVhEb2N1bWVudCIsICJtb2R1bGUiLCAiJCIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiJCIsICJsb2dpbkVsZW1lbnRTZWxlY3RvciIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0MTMiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJhZGRMaXN0ZW5lciIsICIkZWxlbWVudCIsICJldmVudExpc3RlbmVyIiwgIm9uIiwgImZpbHRlckFsdGVyZWRDbGlja3MiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgImltcG9ydF9leHRfZ2FkZ2V0MTEiLCAiX190b0VTTSIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJDYW5jZWwiLCAiemgiLCAiTG9naW4iLCAiUGFzc3dvcmQiLCAiVXNlcm5hbWUiLCAiQWdyZWVkT3JOb3QiLCAiRG91YmxlQ2hlY2tBZ3JlZWRPck5vdCIsICJFbXB0eTJGQSIsICJFbXB0eVBhc3N3b3JkIiwgIkVtcHR5VXNlcm5hbWVPclBhc3N3b3JkIiwgIlNlbGVjdGVkT3JOb3QiLCAiVG9vRnJlcXVlbnQiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImluaXRXaW5kb3dNYW5hZ2VyIiwgIk9PIiwgInVpIiwgIldpbmRvd01hbmFnZXIiLCAid2luZG93TWFuYWdlciIsICJvb3VpQ29uZmlybSIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgIm9wdGlvbnMiLCAibWVzc2FnZURpYWxvZyIsICJNZXNzYWdlRGlhbG9nIiwgImFkZFdpbmRvd3MiLCAiaW5zdGFuY2UiLCAib3BlbldpbmRvdyIsICJkYXRhIiwgImNsb3NlZCIsICJfZGF0YSIsICJhY3Rpb24iLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImltcG9ydF9leHRfZ2FkZ2V0NSIsICJjaGVja1ZhbGlkIiwgIl9yZWYyIiwgImFncmVlVG9zQ2hlY2tib3giLCAibmFtZUlucHV0IiwgInB3ZElucHV0IiwgInRvYXN0aWZ5SW5zdGFuY2UiLCAiaXNBZ3JlZVRvcyIsICJpc1NlbGVjdGVkIiwgImlzRmlsbCIsICJnZXRWYWx1ZSIsICJ0cmltIiwgImluY2x1ZGVzIiwgImhpZGVUb2FzdCIsICJjbGVhcldpbmRvd3MiLCAibWVzc2FnZSIsICIkIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJpbm5lckhUTUwiLCAiYWN0aW9ucyIsICJsYWJlbCIsICJmbGFncyIsICJ0b2FzdGlmeSIsICJ0ZXh0IiwgImR1cmF0aW9uIiwgImlzVmFsaWQiLCAiX3gyIiwgIl94MyIsICJpbXBvcnRfZXh0X2dhZGdldDYiLCAiZ2VuZXJhdGVFbGVtZW50cyIsICJUZXh0SW5wdXRXaWRnZXQiLCAiaWNvbiIsICJwbGFjZWhvbGRlciIsICJ2YWxpZGF0ZSIsICJ0eXBlIiwgIkNoZWNrYm94SW5wdXRXaWRnZXQiLCAic2VsZWN0ZWQiLCAiYWdyZWVUb3NMYXlvdXQiLCAiRmllbGRMYXlvdXQiLCAiYWxpZ24iLCAia2VlcExvZ2luQ2hlY2tib3giLCAia2VlcExvZ2luTGF5b3V0IiwgImhlbHAiLCAiY2xhc3NOYW1lIiwgInN0eWxlIiwgImZvbnRTaXplIiwgInRleHRBbGlnbiIsICIkbGFiZWwiLCAiJGFncmVlVG9zIiwgImNsb25lIiwgImFwcGVuZCIsICIkZm9yZ290UGFzc3dvcmQiLCAiY3NzIiwgImhyZWYiLCAibXciLCAidXRpbCIsICJnZXRVcmwiLCAidGl0bGUiLCAiJGlucHV0Qm94IiwgImRpc3BsYXkiLCAicGFkZGluZyIsICIkdG9zTGFiZWwiLCAiaHRtbCIsICIkcmVtZW1iZXJNZSIsICJpbXBvcnRfZXh0X2dhZGdldDciLCAicmVtb3ZlV2luZG93UmVzaXplSGFuZGxlciIsICJ3aW5kb3ciLCAib2ZmIiwgIm9uV2luZG93UmVzaXplSGFuZGxlciIsICJvb3VpUHJvbXB0IiwgIl9yZWYzIiwgInJldHlwZVBhc3N3b3JkIiwgImNvZGVEaWFsb2ciLCAiY29kZUlucHV0IiwgImNvZGVMYXlvdXQiLCAib3BlbmVkIiwgInRoZW4iLCAiZ2V0Q3VycmVudFdpbmRvdyIsICJjbG9zZSIsICJmb2N1cyIsICJfeDQiLCAiaW1wb3J0X2V4dF9nYWRnZXQ4IiwgInF1ZXJ5TG9naW5Ub2tlbiIsICJfcmVmNCIsICJsb2dpblRva2VuIiwgImdldFRva2VuIiwgIl94NSIsICJpbXBvcnRfZXh0X2dhZGdldDkiLCAicmVkaXJlY3RPcmlnaW5Mb2dpblBhZ2UiLCAiX3JlZjUiLCAiZGVsYXkiLCAibG9jYXRpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQxMCIsICJzaG93RXJyb3IiLCAiZXJyb3IiLCAiY29uc29sZSIsICJpbXBvcnRfZXh0X2dhZGdldDEyIiwgImFqYXhMb2dpbiIsICJsb2dpbiIsICJfcmVmNiIsICJsb2dpbkNvbnRpbnVlIiwgIl9yZXNwb25zZSRjbGllbnRsb2dpbiIsICJfcmVzcG9uc2UkY2xpZW50bG9naW4yIiwgInBhcmFtcyIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJsb2dpbnRva2VuIiwgImxvZ2lucmV0dXJudXJsIiwgInVzZXJuYW1lIiwgInBhc3N3b3JkIiwgInJlbWVtYmVyTWUiLCAibG9naW5jb250aW51ZSIsICJ2YWx1ZSIsICJyZXR5cGUiLCAiT0FUSFRva2VuIiwgInJlc3BvbnNlIiwgInBvc3QiLCAic3RhdHVzIiwgInJlbG9hZCIsICJtZXNzYWdlY29kZSIsICJyZXBsYWNlIiwgImNoZWNrIiwgIl9yZWY3IiwgImxhc3RJc0FncmVlVG9zIiwgImxhc3RUb2FzdGlmeUluc3RhbmNlIiwgImdldEFjdGlvblByb2Nlc3MiLCAiUHJvY2VzcyIsICJzaXplIiwgImdldEJvZHkiLCAiaW5pdEF1dG9Mb2dpbiIsICIkYm9keSIsICJ3Z1VzZXJOYW1lIiwgImNvbmZpZyIsICJnZXQiLCAiJGxvZ2luRWxlbWVudCIsICJmaW5kIiwgImxlbmd0aCIsICJhcHBlbmRUbyIsICJmYWtlVG9hc3RpZnlJbnN0YW5jZSIsICJldmVudCIsICJjaGVja0ExMXlDb25maXJtS2V5IiwgInByZXZlbnREZWZhdWx0Il0KfQo=
