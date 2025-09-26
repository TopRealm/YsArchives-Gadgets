/**
 * SPDX-License-Identifier: MIT
 * _addText: '{{Gadget Header|license=MIT|attribution=Yawei sun}}'
 *
 * @base {@link https://github.com/vsme/chinese-days}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/ChineseDays}
 * @license MIT {@link https://github.com/vsme/chinese-days/blob/main/LICENSE}
 */

/**
 * MIT License
 *
 * Copyright (c) 2024 Yawei sun
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/global-this.js"(exports2, module2) {
    "use strict";
    var check = function(it2) {
      return it2 && it2.Math === Math && it2;
    };
    module2.exports = // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == "object" && self) || check(typeof global == "object" && global) || check(typeof exports2 == "object" && exports2) || // eslint-disable-next-line no-new-func -- fallback
    /* @__PURE__ */ (function() {
      return this;
    })() || Function("return this")();
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/fails.js
var require_fails = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/fails.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/descriptors.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/function-bind-native.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/function-call.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-property-is-enumerable.js"(exports2) {
    "use strict";
    var $propertyIsEnumerable = {}.propertyIsEnumerable;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);
    exports2.f = NASHORN_BUG ? function propertyIsEnumerable(V2) {
      var descriptor = getOwnPropertyDescriptor(this, V2);
      return !!descriptor && descriptor.enumerable;
    } : $propertyIsEnumerable;
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/create-property-descriptor.js
var require_create_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/create-property-descriptor.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/function-uncurry-this.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/classof-raw.js"(exports2, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toString = uncurryThis({}.toString);
    var stringSlice = uncurryThis("".slice);
    module2.exports = function(it2) {
      return stringSlice(toString(it2), 8, -1);
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/indexed-object.js
var require_indexed_object = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/indexed-object.js"(exports2, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var fails = require_fails();
    var classof = require_classof_raw();
    var $Object = Object;
    var split = uncurryThis("".split);
    module2.exports = fails(function() {
      return !$Object("z").propertyIsEnumerable(0);
    }) ? function(it2) {
      return classof(it2) === "String" ? split(it2, "") : $Object(it2);
    } : $Object;
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/is-null-or-undefined.js
var require_is_null_or_undefined = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/is-null-or-undefined.js"(exports2, module2) {
    "use strict";
    module2.exports = function(it2) {
      return it2 === null || it2 === void 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/require-object-coercible.js"(exports2, module2) {
    "use strict";
    var isNullOrUndefined = require_is_null_or_undefined();
    var $TypeError = TypeError;
    module2.exports = function(it2) {
      if (isNullOrUndefined(it2)) throw new $TypeError("Can't call method on " + it2);
      return it2;
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/to-indexed-object.js
var require_to_indexed_object = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/to-indexed-object.js"(exports2, module2) {
    "use strict";
    var IndexedObject = require_indexed_object();
    var requireObjectCoercible = require_require_object_coercible();
    module2.exports = function(it2) {
      return IndexedObject(requireObjectCoercible(it2));
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/is-callable.js
var require_is_callable = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/is-callable.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/is-object.js"(exports2, module2) {
    "use strict";
    var isCallable = require_is_callable();
    module2.exports = function(it2) {
      return typeof it2 == "object" ? it2 !== null : isCallable(it2);
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/get-built-in.js
var require_get_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/get-built-in.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-is-prototype-of.js"(exports2, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    module2.exports = uncurryThis({}.isPrototypeOf);
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/environment-user-agent.js
var require_environment_user_agent = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/environment-user-agent.js"(exports2, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var navigator = globalThis2.navigator;
    var userAgent = navigator && navigator.userAgent;
    module2.exports = userAgent ? String(userAgent) : "";
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/environment-v8-version.js
var require_environment_v8_version = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/environment-v8-version.js"(exports2, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var userAgent = require_environment_user_agent();
    var process = globalThis2.process;
    var Deno = globalThis2.Deno;
    var versions = process && process.versions || Deno && Deno.version;
    var v8 = versions && versions.v8;
    var match;
    var version;
    if (v8) {
      match = v8.split(".");
      version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
    }
    if (!version && userAgent) {
      match = userAgent.match(/Edge\/(\d+)/);
      if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version = +match[1];
      }
    }
    module2.exports = version;
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/symbol-constructor-detection.js
var require_symbol_constructor_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/symbol-constructor-detection.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/use-symbol-as-uid.js"(exports2, module2) {
    "use strict";
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/is-symbol.js
var require_is_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/is-symbol.js"(exports2, module2) {
    "use strict";
    var getBuiltIn = require_get_built_in();
    var isCallable = require_is_callable();
    var isPrototypeOf = require_object_is_prototype_of();
    var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
    var $Object = Object;
    module2.exports = USE_SYMBOL_AS_UID ? function(it2) {
      return typeof it2 == "symbol";
    } : function(it2) {
      var $Symbol = getBuiltIn("Symbol");
      return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it2));
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/try-to-string.js
var require_try_to_string = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/try-to-string.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/a-callable.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/get-method.js"(exports2, module2) {
    "use strict";
    var aCallable = require_a_callable();
    var isNullOrUndefined = require_is_null_or_undefined();
    module2.exports = function(V2, P2) {
      var func = V2[P2];
      return isNullOrUndefined(func) ? void 0 : aCallable(func);
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/ordinary-to-primitive.js
var require_ordinary_to_primitive = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/ordinary-to-primitive.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/is-pure.js"(exports2, module2) {
    "use strict";
    module2.exports = false;
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/define-global-property.js
var require_define_global_property = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/define-global-property.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/shared-store.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/shared.js"(exports2, module2) {
    "use strict";
    var store = require_shared_store();
    module2.exports = function(key, value) {
      return store[key] || (store[key] = value || {});
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/to-object.js
var require_to_object = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/to-object.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/has-own-property.js"(exports2, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toObject = require_to_object();
    var hasOwnProperty = uncurryThis({}.hasOwnProperty);
    module2.exports = Object.hasOwn || function hasOwn(it2, key) {
      return hasOwnProperty(toObject(it2), key);
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/uid.js
var require_uid = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/uid.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/well-known-symbol.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/to-primitive.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/to-property-key.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/document-create-element.js"(exports2, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var isObject = require_is_object();
    var document2 = globalThis2.document;
    var EXISTS = isObject(document2) && isObject(document2.createElement);
    module2.exports = function(it2) {
      return EXISTS ? document2.createElement(it2) : {};
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/ie8-dom-define.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports2) {
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
    exports2.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O2, P2) {
      O2 = toIndexedObject(O2);
      P2 = toPropertyKey(P2);
      if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O2, P2);
      } catch (error) {
      }
      if (hasOwn(O2, P2)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O2, P2), O2[P2]);
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/v8-prototype-define-bug.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/an-object.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-define-property.js"(exports2) {
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
    exports2.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O2, P2, Attributes) {
      anObject(O2);
      P2 = toPropertyKey(P2);
      anObject(Attributes);
      if (typeof O2 === "function" && P2 === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O2, P2);
        if (current && current[WRITABLE]) {
          O2[P2] = Attributes.value;
          Attributes = {
            configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
            enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
            writable: false
          };
        }
      }
      return $defineProperty(O2, P2, Attributes);
    } : $defineProperty : function defineProperty(O2, P2, Attributes) {
      anObject(O2);
      P2 = toPropertyKey(P2);
      anObject(Attributes);
      if (IE8_DOM_DEFINE) try {
        return $defineProperty(O2, P2, Attributes);
      } catch (error) {
      }
      if ("get" in Attributes || "set" in Attributes) throw new $TypeError("Accessors not supported");
      if ("value" in Attributes) O2[P2] = Attributes.value;
      return O2;
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/create-non-enumerable-property.js
var require_create_non_enumerable_property = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/create-non-enumerable-property.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/function-name.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/inspect-source.js"(exports2, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var isCallable = require_is_callable();
    var store = require_shared_store();
    var functionToString = uncurryThis(Function.toString);
    if (!isCallable(store.inspectSource)) {
      store.inspectSource = function(it2) {
        return functionToString(it2);
      };
    }
    module2.exports = store.inspectSource;
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/weak-map-basic-detection.js
var require_weak_map_basic_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/weak-map-basic-detection.js"(exports2, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var isCallable = require_is_callable();
    var WeakMap = globalThis2.WeakMap;
    module2.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/shared-key.js
var require_shared_key = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/shared-key.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/hidden-keys.js"(exports2, module2) {
    "use strict";
    module2.exports = {};
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/internal-state.js
var require_internal_state = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/internal-state.js"(exports2, module2) {
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
    var enforce = function(it2) {
      return has(it2) ? get(it2) : set(it2, {});
    };
    var getterFor = function(TYPE) {
      return function(it2) {
        var state;
        if (!isObject(it2) || (state = get(it2)).type !== TYPE) {
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
      set = function(it2, metadata) {
        if (store.has(it2)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it2;
        store.set(it2, metadata);
        return metadata;
      };
      get = function(it2) {
        return store.get(it2) || {};
      };
      has = function(it2) {
        return store.has(it2);
      };
    } else {
      STATE = sharedKey("state");
      hiddenKeys[STATE] = true;
      set = function(it2, metadata) {
        if (hasOwn(it2, STATE)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it2;
        createNonEnumerableProperty(it2, STATE, metadata);
        return metadata;
      };
      get = function(it2) {
        return hasOwn(it2, STATE) ? it2[STATE] : {};
      };
      has = function(it2) {
        return hasOwn(it2, STATE);
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/make-built-in.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/define-built-in.js"(exports2, module2) {
    "use strict";
    var isCallable = require_is_callable();
    var definePropertyModule = require_object_define_property();
    var makeBuiltIn = require_make_built_in();
    var defineGlobalProperty = require_define_global_property();
    module2.exports = function(O2, key, value, options) {
      if (!options) options = {};
      var simple = options.enumerable;
      var name = options.name !== void 0 ? options.name : key;
      if (isCallable(value)) makeBuiltIn(value, name, options);
      if (options.global) {
        if (simple) O2[key] = value;
        else defineGlobalProperty(key, value);
      } else {
        try {
          if (!options.unsafe) delete O2[key];
          else if (O2[key]) simple = true;
        } catch (error) {
        }
        if (simple) O2[key] = value;
        else definePropertyModule.f(O2, key, {
          value,
          enumerable: false,
          configurable: !options.nonConfigurable,
          writable: !options.nonWritable
        });
      }
      return O2;
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/math-trunc.js
var require_math_trunc = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/math-trunc.js"(exports2, module2) {
    "use strict";
    var ceil = Math.ceil;
    var floor = Math.floor;
    module2.exports = Math.trunc || function trunc(x2) {
      var n = +x2;
      return (n > 0 ? floor : ceil)(n);
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/to-integer-or-infinity.js
var require_to_integer_or_infinity = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/to-integer-or-infinity.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/to-absolute-index.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/to-length.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/length-of-array-like.js"(exports2, module2) {
    "use strict";
    var toLength = require_to_length();
    module2.exports = function(obj) {
      return toLength(obj.length);
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/array-includes.js
var require_array_includes = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/array-includes.js"(exports2, module2) {
    "use strict";
    var toIndexedObject = require_to_indexed_object();
    var toAbsoluteIndex = require_to_absolute_index();
    var lengthOfArrayLike = require_length_of_array_like();
    var createMethod = function(IS_INCLUDES) {
      return function($this, el, fromIndex) {
        var O2 = toIndexedObject($this);
        var length = lengthOfArrayLike(O2);
        if (length === 0) return !IS_INCLUDES && -1;
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        if (IS_INCLUDES && el !== el) while (length > index) {
          value = O2[index++];
          if (value !== value) return true;
        }
        else for (; length > index; index++) {
          if ((IS_INCLUDES || index in O2) && O2[index] === el) return IS_INCLUDES || index || 0;
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-keys-internal.js"(exports2, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var hasOwn = require_has_own_property();
    var toIndexedObject = require_to_indexed_object();
    var indexOf = require_array_includes().indexOf;
    var hiddenKeys = require_hidden_keys();
    var push = uncurryThis([].push);
    module2.exports = function(object, names) {
      var O2 = toIndexedObject(object);
      var i = 0;
      var result = [];
      var key;
      for (key in O2) !hasOwn(hiddenKeys, key) && hasOwn(O2, key) && push(result, key);
      while (names.length > i) if (hasOwn(O2, key = names[i++])) {
        ~indexOf(result, key) || push(result, key);
      }
      return result;
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/enum-bug-keys.js
var require_enum_bug_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/enum-bug-keys.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-get-own-property-names.js"(exports2) {
    "use strict";
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = enumBugKeys.concat("length", "prototype");
    exports2.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O2) {
      return internalObjectKeys(O2, hiddenKeys);
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-get-own-property-symbols.js
var require_object_get_own_property_symbols = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-get-own-property-symbols.js"(exports2) {
    "use strict";
    exports2.f = Object.getOwnPropertySymbols;
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/own-keys.js
var require_own_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/own-keys.js"(exports2, module2) {
    "use strict";
    var getBuiltIn = require_get_built_in();
    var uncurryThis = require_function_uncurry_this();
    var getOwnPropertyNamesModule = require_object_get_own_property_names();
    var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
    var anObject = require_an_object();
    var concat = uncurryThis([].concat);
    module2.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it2) {
      var keys = getOwnPropertyNamesModule.f(anObject(it2));
      var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
      return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it2)) : keys;
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/copy-constructor-properties.js
var require_copy_constructor_properties = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/copy-constructor-properties.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/is-forced.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/export.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/is-array.js
var require_is_array = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/is-array.js"(exports2, module2) {
    "use strict";
    var classof = require_classof_raw();
    module2.exports = Array.isArray || function isArray(argument) {
      return classof(argument) === "Array";
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/array-set-length.js
var require_array_set_length = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/array-set-length.js"(exports2, module2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var isArray = require_is_array();
    var $TypeError = TypeError;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !(function() {
      if (this !== void 0) return true;
      try {
        Object.defineProperty([], "length", { writable: false }).length = 1;
      } catch (error) {
        return error instanceof TypeError;
      }
    })();
    module2.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function(O2, length) {
      if (isArray(O2) && !getOwnPropertyDescriptor(O2, "length").writable) {
        throw new $TypeError("Cannot set read only .length");
      }
      return O2.length = length;
    } : function(O2, length) {
      return O2.length = length;
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/does-not-exceed-safe-integer.js
var require_does_not_exceed_safe_integer = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/does-not-exceed-safe-integer.js"(exports2, module2) {
    "use strict";
    var $TypeError = TypeError;
    var MAX_SAFE_INTEGER = 9007199254740991;
    module2.exports = function(it2) {
      if (it2 > MAX_SAFE_INTEGER) throw $TypeError("Maximum allowed index exceeded");
      return it2;
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/modules/es.array.push.js
var require_es_array_push = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/modules/es.array.push.js"() {
    "use strict";
    var $2 = require_export();
    var toObject = require_to_object();
    var lengthOfArrayLike = require_length_of_array_like();
    var setArrayLength = require_array_set_length();
    var doesNotExceedSafeInteger = require_does_not_exceed_safe_integer();
    var fails = require_fails();
    var INCORRECT_TO_LENGTH = fails(function() {
      return [].push.call({ length: 4294967296 }, 1) !== 4294967297;
    });
    var properErrorOnNonWritableLength = function() {
      try {
        Object.defineProperty([], "length", { writable: false }).push();
      } catch (error) {
        return error instanceof TypeError;
      }
    };
    var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();
    $2({ target: "Array", proto: true, arity: 1, forced: FORCED }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      push: function push(item) {
        var O2 = toObject(this);
        var len = lengthOfArrayLike(O2);
        var argCount = arguments.length;
        doesNotExceedSafeInteger(len + argCount);
        for (var i = 0; i < argCount; i++) {
          O2[len] = arguments[i];
          len++;
        }
        setArrayLength(O2, len);
        return len;
      }
    });
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/an-instance.js
var require_an_instance = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/an-instance.js"(exports2, module2) {
    "use strict";
    var isPrototypeOf = require_object_is_prototype_of();
    var $TypeError = TypeError;
    module2.exports = function(it2, Prototype) {
      if (isPrototypeOf(Prototype, it2)) return it2;
      throw new $TypeError("Incorrect invocation");
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/correct-prototype-getter.js
var require_correct_prototype_getter = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/correct-prototype-getter.js"(exports2, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      function F2() {
      }
      F2.prototype.constructor = null;
      return Object.getPrototypeOf(new F2()) !== F2.prototype;
    });
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-get-prototype-of.js
var require_object_get_prototype_of = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-get-prototype-of.js"(exports2, module2) {
    "use strict";
    var hasOwn = require_has_own_property();
    var isCallable = require_is_callable();
    var toObject = require_to_object();
    var sharedKey = require_shared_key();
    var CORRECT_PROTOTYPE_GETTER = require_correct_prototype_getter();
    var IE_PROTO = sharedKey("IE_PROTO");
    var $Object = Object;
    var ObjectPrototype = $Object.prototype;
    module2.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function(O2) {
      var object = toObject(O2);
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/define-built-in-accessor.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/create-property.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-keys.js"(exports2, module2) {
    "use strict";
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    module2.exports = Object.keys || function keys(O2) {
      return internalObjectKeys(O2, enumBugKeys);
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-define-properties.js
var require_object_define_properties = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-define-properties.js"(exports2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
    var definePropertyModule = require_object_define_property();
    var anObject = require_an_object();
    var toIndexedObject = require_to_indexed_object();
    var objectKeys = require_object_keys();
    exports2.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O2, Properties) {
      anObject(O2);
      var props = toIndexedObject(Properties);
      var keys = objectKeys(Properties);
      var length = keys.length;
      var index = 0;
      var key;
      while (length > index) definePropertyModule.f(O2, key = keys[index++], props[key]);
      return O2;
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/html.js
var require_html = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/html.js"(exports2, module2) {
    "use strict";
    var getBuiltIn = require_get_built_in();
    module2.exports = getBuiltIn("document", "documentElement");
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-create.js
var require_object_create = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-create.js"(exports2, module2) {
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
    module2.exports = Object.create || function create(O2, Properties) {
      var result;
      if (O2 !== null) {
        EmptyConstructor[PROTOTYPE] = anObject(O2);
        result = new EmptyConstructor();
        EmptyConstructor[PROTOTYPE] = null;
        result[IE_PROTO] = O2;
      } else result = NullProtoObject();
      return Properties === void 0 ? result : definePropertiesModule.f(result, Properties);
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/iterators-core.js
var require_iterators_core = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/iterators-core.js"(exports2, module2) {
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
    var IteratorConstructor = function Iterator2() {
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

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/get-iterator-direct.js
var require_get_iterator_direct = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/get-iterator-direct.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/define-built-ins.js
var require_define_built_ins = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/define-built-ins.js"(exports2, module2) {
    "use strict";
    var defineBuiltIn = require_define_built_in();
    module2.exports = function(target, src, options) {
      for (var key in src) defineBuiltIn(target, key, src[key], options);
      return target;
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/create-iter-result-object.js
var require_create_iter_result_object = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/create-iter-result-object.js"(exports2, module2) {
    "use strict";
    module2.exports = function(value, done) {
      return { value, done };
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/iterator-close.js
var require_iterator_close = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/iterator-close.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/iterator-close-all.js
var require_iterator_close_all = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/iterator-close-all.js"(exports2, module2) {
    "use strict";
    var iteratorClose = require_iterator_close();
    module2.exports = function(iters, kind, value) {
      for (var i = iters.length - 1; i >= 0; i--) {
        if (iters[i] === void 0) continue;
        try {
          value = iteratorClose(iters[i].iterator, kind, value);
        } catch (error) {
          kind = "throw";
          value = error;
        }
      }
      if (kind === "throw") throw value;
      return value;
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/iterator-create-proxy.js
var require_iterator_create_proxy = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/iterator-create-proxy.js"(exports2, module2) {
    "use strict";
    var call = require_function_call();
    var create = require_object_create();
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var defineBuiltIns = require_define_built_ins();
    var wellKnownSymbol = require_well_known_symbol();
    var InternalStateModule = require_internal_state();
    var getMethod = require_get_method();
    var IteratorPrototype = require_iterators_core().IteratorPrototype;
    var createIterResultObject = require_create_iter_result_object();
    var iteratorClose = require_iterator_close();
    var iteratorCloseAll = require_iterator_close_all();
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    var ITERATOR_HELPER = "IteratorHelper";
    var WRAP_FOR_VALID_ITERATOR = "WrapForValidIterator";
    var NORMAL = "normal";
    var THROW = "throw";
    var setInternalState = InternalStateModule.set;
    var createIteratorProxyPrototype = function(IS_ITERATOR) {
      var getInternalState = InternalStateModule.getterFor(IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER);
      return defineBuiltIns(create(IteratorPrototype), {
        next: function next() {
          var state = getInternalState(this);
          if (IS_ITERATOR) return state.nextHandler();
          if (state.done) return createIterResultObject(void 0, true);
          try {
            var result = state.nextHandler();
            return state.returnHandlerResult ? result : createIterResultObject(result, state.done);
          } catch (error) {
            state.done = true;
            throw error;
          }
        },
        "return": function() {
          var state = getInternalState(this);
          var iterator = state.iterator;
          state.done = true;
          if (IS_ITERATOR) {
            var returnMethod = getMethod(iterator, "return");
            return returnMethod ? call(returnMethod, iterator) : createIterResultObject(void 0, true);
          }
          if (state.inner) try {
            iteratorClose(state.inner.iterator, NORMAL);
          } catch (error) {
            return iteratorClose(iterator, THROW, error);
          }
          if (state.openIters) try {
            iteratorCloseAll(state.openIters, NORMAL);
          } catch (error) {
            return iteratorClose(iterator, THROW, error);
          }
          if (iterator) iteratorClose(iterator, NORMAL);
          return createIterResultObject(void 0, true);
        }
      });
    };
    var WrapForValidIteratorPrototype = createIteratorProxyPrototype(true);
    var IteratorHelperPrototype = createIteratorProxyPrototype(false);
    createNonEnumerableProperty(IteratorHelperPrototype, TO_STRING_TAG, "Iterator Helper");
    module2.exports = function(nextHandler, IS_ITERATOR, RETURN_HANDLER_RESULT) {
      var IteratorProxy = function Iterator2(record, state) {
        if (state) {
          state.iterator = record.iterator;
          state.next = record.next;
        } else state = record;
        state.type = IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER;
        state.returnHandlerResult = !!RETURN_HANDLER_RESULT;
        state.nextHandler = nextHandler;
        state.counter = 0;
        state.done = false;
        setInternalState(this, state);
      };
      IteratorProxy.prototype = IS_ITERATOR ? WrapForValidIteratorPrototype : IteratorHelperPrototype;
      return IteratorProxy;
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/call-with-safe-iteration-closing.js
var require_call_with_safe_iteration_closing = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/call-with-safe-iteration-closing.js"(exports2, module2) {
    "use strict";
    var anObject = require_an_object();
    var iteratorClose = require_iterator_close();
    module2.exports = function(iterator, fn, value, ENTRIES) {
      try {
        return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
      } catch (error) {
        iteratorClose(iterator, "throw", error);
      }
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/iterator-helper-throws-on-invalid-iterator.js
var require_iterator_helper_throws_on_invalid_iterator = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/iterator-helper-throws-on-invalid-iterator.js"(exports2, module2) {
    "use strict";
    module2.exports = function(methodName, argument) {
      var method = typeof Iterator == "function" && Iterator.prototype[methodName];
      if (method) try {
        method.call({ next: null }, argument).next();
      } catch (error) {
        return true;
      }
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/iterator-helper-without-closing-on-early-error.js
var require_iterator_helper_without_closing_on_early_error = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/iterator-helper-without-closing-on-early-error.js"(exports2, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    module2.exports = function(METHOD_NAME, ExpectedError) {
      var Iterator2 = globalThis2.Iterator;
      var IteratorPrototype = Iterator2 && Iterator2.prototype;
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

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/modules/es.iterator.filter.js
var require_es_iterator_filter = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/modules/es.iterator.filter.js"() {
    "use strict";
    var $2 = require_export();
    var call = require_function_call();
    var aCallable = require_a_callable();
    var anObject = require_an_object();
    var getIteratorDirect = require_get_iterator_direct();
    var createIteratorProxy = require_iterator_create_proxy();
    var callWithSafeIterationClosing = require_call_with_safe_iteration_closing();
    var IS_PURE = require_is_pure();
    var iteratorClose = require_iterator_close();
    var iteratorHelperThrowsOnInvalidIterator = require_iterator_helper_throws_on_invalid_iterator();
    var iteratorHelperWithoutClosingOnEarlyError = require_iterator_helper_without_closing_on_early_error();
    var FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR = !IS_PURE && !iteratorHelperThrowsOnInvalidIterator("filter", function() {
    });
    var filterWithoutClosingOnEarlyError = !IS_PURE && !FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR && iteratorHelperWithoutClosingOnEarlyError("filter", TypeError);
    var FORCED = IS_PURE || FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR || filterWithoutClosingOnEarlyError;
    var IteratorProxy = createIteratorProxy(function() {
      var iterator = this.iterator;
      var predicate = this.predicate;
      var next = this.next;
      var result, done, value;
      while (true) {
        result = anObject(call(next, iterator));
        done = this.done = !!result.done;
        if (done) return;
        value = result.value;
        if (callWithSafeIterationClosing(iterator, predicate, [value, this.counter++], true)) return value;
      }
    });
    $2({ target: "Iterator", proto: true, real: true, forced: FORCED }, {
      filter: function filter(predicate) {
        anObject(this);
        try {
          aCallable(predicate);
        } catch (error) {
          iteratorClose(this, "throw", error);
        }
        if (filterWithoutClosingOnEarlyError) return call(filterWithoutClosingOnEarlyError, this, predicate);
        return new IteratorProxy(getIteratorDirect(this), {
          predicate
        });
      }
    });
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/function-uncurry-this-clause.js
var require_function_uncurry_this_clause = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/function-uncurry-this-clause.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/function-bind-context.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/iterators.js"(exports2, module2) {
    "use strict";
    module2.exports = {};
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/is-array-iterator-method.js
var require_is_array_iterator_method = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/is-array-iterator-method.js"(exports2, module2) {
    "use strict";
    var wellKnownSymbol = require_well_known_symbol();
    var Iterators = require_iterators();
    var ITERATOR = wellKnownSymbol("iterator");
    var ArrayPrototype = Array.prototype;
    module2.exports = function(it2) {
      return it2 !== void 0 && (Iterators.Array === it2 || ArrayPrototype[ITERATOR] === it2);
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/to-string-tag-support.js
var require_to_string_tag_support = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/to-string-tag-support.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/classof.js"(exports2, module2) {
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
    var tryGet = function(it2, key) {
      try {
        return it2[key];
      } catch (error) {
      }
    };
    module2.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it2) {
      var O2, tag, result;
      return it2 === void 0 ? "Undefined" : it2 === null ? "Null" : typeof (tag = tryGet(O2 = $Object(it2), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O2) : (result = classofRaw(O2)) === "Object" && isCallable(O2.callee) ? "Arguments" : result;
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/get-iterator-method.js
var require_get_iterator_method = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/get-iterator-method.js"(exports2, module2) {
    "use strict";
    var classof = require_classof();
    var getMethod = require_get_method();
    var isNullOrUndefined = require_is_null_or_undefined();
    var Iterators = require_iterators();
    var wellKnownSymbol = require_well_known_symbol();
    var ITERATOR = wellKnownSymbol("iterator");
    module2.exports = function(it2) {
      if (!isNullOrUndefined(it2)) return getMethod(it2, ITERATOR) || getMethod(it2, "@@iterator") || Iterators[classof(it2)];
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/get-iterator.js
var require_get_iterator = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/get-iterator.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/iterate.js
var require_iterate = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/iterate.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/modules/es.iterator.for-each.js
var require_es_iterator_for_each = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/modules/es.iterator.for-each.js"() {
    "use strict";
    var $2 = require_export();
    var call = require_function_call();
    var iterate = require_iterate();
    var aCallable = require_a_callable();
    var anObject = require_an_object();
    var getIteratorDirect = require_get_iterator_direct();
    var iteratorClose = require_iterator_close();
    var iteratorHelperWithoutClosingOnEarlyError = require_iterator_helper_without_closing_on_early_error();
    var forEachWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError("forEach", TypeError);
    $2({ target: "Iterator", proto: true, real: true, forced: forEachWithoutClosingOnEarlyError }, {
      forEach: function forEach(fn) {
        anObject(this);
        try {
          aCallable(fn);
        } catch (error) {
          iteratorClose(this, "throw", error);
        }
        if (forEachWithoutClosingOnEarlyError) return call(forEachWithoutClosingOnEarlyError, this, fn);
        var record = getIteratorDirect(this);
        var counter = 0;
        iterate(record, function(value) {
          fn(value, counter++);
        }, { IS_RECORD: true });
      }
    });
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/modules/es.iterator.map.js
var require_es_iterator_map = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/modules/es.iterator.map.js"() {
    "use strict";
    var $2 = require_export();
    var call = require_function_call();
    var aCallable = require_a_callable();
    var anObject = require_an_object();
    var getIteratorDirect = require_get_iterator_direct();
    var createIteratorProxy = require_iterator_create_proxy();
    var callWithSafeIterationClosing = require_call_with_safe_iteration_closing();
    var iteratorClose = require_iterator_close();
    var iteratorHelperThrowsOnInvalidIterator = require_iterator_helper_throws_on_invalid_iterator();
    var iteratorHelperWithoutClosingOnEarlyError = require_iterator_helper_without_closing_on_early_error();
    var IS_PURE = require_is_pure();
    var MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR = !IS_PURE && !iteratorHelperThrowsOnInvalidIterator("map", function() {
    });
    var mapWithoutClosingOnEarlyError = !IS_PURE && !MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR && iteratorHelperWithoutClosingOnEarlyError("map", TypeError);
    var FORCED = IS_PURE || MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR || mapWithoutClosingOnEarlyError;
    var IteratorProxy = createIteratorProxy(function() {
      var iterator = this.iterator;
      var result = anObject(call(this.next, iterator));
      var done = this.done = !!result.done;
      if (!done) return callWithSafeIterationClosing(iterator, this.mapper, [result.value, this.counter++], true);
    });
    $2({ target: "Iterator", proto: true, real: true, forced: FORCED }, {
      map: function map(mapper) {
        anObject(this);
        try {
          aCallable(mapper);
        } catch (error) {
          iteratorClose(this, "throw", error);
        }
        if (mapWithoutClosingOnEarlyError) return call(mapWithoutClosingOnEarlyError, this, mapper);
        return new IteratorProxy(getIteratorDirect(this), {
          mapper
        });
      }
    });
  }
});

// dist/ChineseDays/ChineseDays.js
require_es_array_push();
require_es_iterator_constructor();
require_es_iterator_filter();
require_es_iterator_find();
require_es_iterator_for_each();
require_es_iterator_map();
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n = 0, F2 = function() {
      };
      return { s: F2, n: function() {
        return n >= r.length ? { done: true } : { done: false, value: r[n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F2 };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u2 = false;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u2 = true, o = r2;
  }, f: function() {
    try {
      a || null == t.return || t.return();
    } finally {
      if (u2) throw o;
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
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);
//! src/ChineseDays/ChineseDays.ts
var ChineseDays_exports = {};
__export(ChineseDays_exports, {
  findWorkday: () => X,
  getDayDetail: () => J,
  getHolidaysInRange: () => K,
  getLunarDate: () => m,
  getLunarDatesInRange: () => j,
  getLunarFestivals: () => q,
  getLunarYears: () => R,
  getSolarDateFromLunar: () => I,
  getSolarTermDate: () => L,
  getSolarTerms: () => at,
  getSolarTermsInRange: () => $,
  getWorkdaysInRange: () => Q,
  getYearLeapMonth: () => C,
  isHoliday: () => O,
  isInLieu: () => G,
  isWorkday: () => f,
  monthDays: () => D
});
module.exports = __toCommonJS(ChineseDays_exports);
var P = Object.defineProperty;
var U = (r, t, e) => t in r ? P(r, t, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: e
}) : r[t] = e;
var w = (r, t, e) => U(r, typeof t != "symbol" ? t + "" : t, e);
var l = class l2 {
  constructor(t) {
    w(this, "_date");
    t instanceof l2 ? this._date = new Date(t.toDate()) : t instanceof Date ? this._date = new Date(t) : typeof t == "string" || typeof t == "number" ? (this._date = new Date(t), typeof t == "string" && isNaN(this._date.getTime()) && (this._date = new Date(t.replace(/-/g, "/")))) : this._date = /* @__PURE__ */ new Date();
  }
  toDate() {
    return this._date;
  }
  isValid() {
    return !isNaN(this._date.getTime());
  }
  diff(t, e = "day") {
    const a = new l2(t).toDate(), o = this._date.getTime() - a.getTime();
    switch (e) {
      case "year":
        return this._date.getFullYear() - a.getFullYear();
      case "month":
        return (this._date.getFullYear() - a.getFullYear()) * 12 + (this._date.getMonth() - a.getMonth());
      case "day":
      default:
        return Math.floor(o / (1e3 * 60 * 60 * 24));
    }
  }
  startOf(t) {
    const e = new Date(this._date);
    switch (t) {
      case "year":
        e.setMonth(0), e.setDate(1), e.setHours(0, 0, 0, 0);
        break;
      case "month":
        e.setDate(1), e.setHours(0, 0, 0, 0);
        break;
      case "day":
        e.setHours(0, 0, 0, 0);
        break;
    }
    return new l2(e);
  }
  endOf(t) {
    const e = new Date(this._date);
    switch (t) {
      case "year":
        e.setMonth(11), e.setDate(31), e.setHours(23, 59, 59, 999);
        break;
      case "month":
        e.setDate(new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate()), e.setHours(23, 59, 59, 999);
        break;
      case "day":
        e.setHours(23, 59, 59, 999);
        break;
    }
    return new l2(e);
  }
  add(t, e) {
    const a = new Date(this._date);
    switch (e) {
      case "year":
        a.setFullYear(a.getFullYear() + t);
        break;
      case "month":
        a.setMonth(a.getMonth() + t);
        break;
      case "day":
        a.setDate(a.getDate() + t);
        break;
    }
    return new l2(a);
  }
  subtract(t, e) {
    return this.add(-t, e);
  }
  format(t) {
    const e = {
      YYYY: this._date.getFullYear(),
      MM: (this._date.getMonth() + 1).toString().padStart(2, "0"),
      DD: this._date.getDate().toString().padStart(2, "0"),
      HH: this._date.getHours().toString().padStart(2, "0"),
      mm: this._date.getMinutes().toString().padStart(2, "0"),
      ss: this._date.getSeconds().toString().padStart(2, "0"),
      dddd: l2.daysOfWeek[this._date.getDay()]
    };
    return t.replace(/YYYY|MM|DD|HH|mm|ss|dddd/g, (a) => e[a].toString());
  }
  year(t) {
    if (t === void 0) return this._date.getFullYear();
    const e = new Date(this._date);
    return e.setFullYear(t), new l2(e);
  }
  month(t) {
    if (t === void 0) return this._date.getMonth();
    const e = new Date(this._date);
    return e.setMonth(t), new l2(e);
  }
  date(t) {
    if (t === void 0) return this._date.getDate();
    const e = new Date(this._date);
    return e.setDate(t), new l2(e);
  }
  day(t) {
    if (t === void 0) return this._date.getDay();
    {
      const e = this._date.getDay(), a = t - e, o = new Date(this._date);
      return o.setDate(this._date.getDate() + a), new l2(o);
    }
  }
  isBefore(t) {
    const e = new l2(t).toDate();
    return this._date.getTime() < e.getTime();
  }
  isAfter(t) {
    const e = new l2(t).toDate();
    return this._date.getTime() > e.getTime();
  }
  isSame(t, e = "day") {
    const a = new l2(t).toDate();
    switch (e) {
      case "year":
        return this._date.getFullYear() === a.getFullYear();
      case "month":
        return this._date.getFullYear() === a.getFullYear() && this._date.getMonth() === a.getMonth();
      case "day":
      default:
        return this._date.getFullYear() === a.getFullYear() && this._date.getMonth() === a.getMonth() && this._date.getDate() === a.getDate();
    }
  }
  isBetween(t, e, a) {
    const o = new l2(t).startOf(a).toDate(), s = new l2(e).endOf(a).toDate(), n = this.toDate();
    return n >= o && n <= s;
  }
};
w(l, "daysOfWeek", ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]);
var S = l;
var h = (r) => new S(r);
var u = (r) => h(r).startOf("day");
var Y = (r, t) => {
  r = u(r), t = u(t);
  const e = t.diff(r, "day");
  return Array.from({
    length: e + 1
  }, (a, o) => r.add(o, "day"));
};
var W = {
  // 1999 元旦 1 天、春节、劳动节、国庆节放假 3天
  1999: {
    "New Year's Day,元旦": 1,
    "Spring Festival,春节": 3,
    "Labour Day,劳动节": 3,
    "National Day,国庆节": 3
  },
  // 2008 劳动节改为 1 天，增加清明、端午、中秋各 1 天
  2008: {
    "Tomb-sweeping Day,清明": 1,
    "Labour Day,劳动节": 1,
    "Dragon Boat Festival,端午": 1,
    "Mid-autumn Festival,中秋": 1
  },
  // 2014 春节剔除除夕，改为初一、二、三，依旧 3 天
  // 2015 增加 中国人民抗日战争暨世界反法西斯战争胜利70周年纪念日 1 天
  2015: {
    "Anti-Fascist 70th Day,中国人民抗日战争暨世界反法西斯战争胜利70周年纪念日": 1
  },
  // 2025 春节和劳动节 各增加 1 天
  2025: {
    "Spring Festival,春节": 4,
    "Labour Day,劳动节": 2
  }
};
var z = class {
  constructor() {
    w(this, "dayDetails", {});
    w(this, "holidays", {});
    w(this, "workdays", {});
    w(this, "inLieuDays", {});
  }
  /** year at */
  y(t) {
    return this.dayDetails.year = t, this;
  }
  /** 查询某年 节假日天数 */
  getHolidayDays(t, e) {
    let a = 0;
    for (var _i = 0, _Object$entries = Object.entries(W); _i < _Object$entries.length; _i++) {
      const [o, s] = _Object$entries[_i];
      if (parseInt(o) > t) break;
      s[e] !== void 0 && (a = s[e]);
    }
    return a;
  }
  mark(t) {
    return this.dayDetails.holiday = t, this;
  }
  save(t, e, a) {
    if (!this.dayDetails.year) throw new Error("should set year before saving holiday");
    if (!this.dayDetails.holiday) throw new Error("should set holiday before saving holiday");
    this.dayDetails.month = t, this.dayDetails.day = e, this.dayDetails.dayType = a;
    const o = h("".concat(this.dayDetails.year, "-").concat(t, "-").concat(e)).format("YYYY-MM-DD"), s = this.getHolidayDays(this.dayDetails.year, this.dayDetails.holiday), n = "".concat(this.dayDetails.holiday, ",").concat(s);
    return a === 2 ? this.holidays[o] = n : a === 1 ? this.workdays[o] = n : a === 3 && (this.inLieuDays[o] = n), this;
  }
  to(t, e) {
    if (!this.dayDetails.holiday || !this.dayDetails.year || !this.dayDetails.month || !this.dayDetails.day) throw new Error("should set year/month/day before saving holiday range");
    const a = h("".concat(this.dayDetails.year, "-").concat(this.dayDetails.month, "-").concat(this.dayDetails.day)), o = h("".concat(this.dayDetails.year, "-").concat(t, "-").concat(e));
    if (o.isBefore(a) || o.isSame(a)) throw new Error("end date should be after start date");
    const s = this.getHolidayDays(this.dayDetails.year, this.dayDetails.holiday), n = "".concat(this.dayDetails.holiday, ",").concat(s), d = o.diff(a, "day");
    for (let i = 1; i <= d; i++) {
      const _ = a.add(i, "day").format("YYYY-MM-DD");
      this.dayDetails.dayType === 2 ? this.holidays[_] = n : this.dayDetails.dayType === 1 ? this.workdays[_] = n : this.dayDetails.dayType === 3 && (this.inLieuDays[_] = n);
    }
    return this;
  }
  /** work day */
  w(t, e) {
    return this.save(
      t,
      e,
      1
      /* Workday */
    );
  }
  /** rest */
  r(t, e) {
    return this.save(
      t,
      e,
      2
      /* Holiday */
    );
  }
  /** in-lieu */
  i(t, e) {
    return this.save(
      t,
      e,
      3
      /* InLieu */
    );
  }
  /** New Year's Day 元旦 */
  ny() {
    return this.mark(
      "New Year's Day,元旦"
      /* NY */
    );
  }
  /** Spring Festival 春节 */
  s() {
    return this.mark(
      "Spring Festival,春节"
      /* S */
    );
  }
  /** Tomb-sweeping Day 清明 */
  t() {
    return this.mark(
      "Tomb-sweeping Day,清明"
      /* T */
    );
  }
  /** Labour Day 五一 */
  l() {
    return this.mark(
      "Labour Day,劳动节"
      /* L */
    );
  }
  /** Dragon Boat Festival 端午 */
  d() {
    return this.mark(
      "Dragon Boat Festival,端午"
      /* D */
    );
  }
  /** National Day 国庆节 */
  n() {
    return this.mark(
      "National Day,国庆节"
      /* N */
    );
  }
  /** Mid-autumn Festival 中秋 */
  m() {
    return this.mark(
      "Mid-autumn Festival,中秋"
      /* M */
    );
  }
  /** Anti-Fascist 70th Day 中国人民抗日战争暨世界反法西斯战争胜利70周年纪念日 */
  a() {
    return this.mark(
      "Anti-Fascist 70th Day,中国人民抗日战争暨世界反法西斯战争胜利70周年纪念日"
      /* A */
    );
  }
};
var V = () => {
  const r = new z();
  return r.y(2025).ny().r(1, 1).s().r(1, 28).to(2, 4).w(1, 26).w(2, 8).i(2, 3).i(2, 4).t().r(4, 4).to(4, 6).l().r(5, 1).to(5, 5).w(4, 27).i(5, 5).d().r(5, 31).to(6, 2).n().r(10, 1).to(10, 8).w(9, 28).w(10, 11).i(10, 7).i(10, 8).m().r(10, 6), r.y(2024).ny().r(1, 1).s().r(2, 10).to(2, 17).w(2, 4).w(2, 18).i(2, 15).to(2, 16).t().r(4, 4).to(4, 6).w(4, 7).i(4, 5).l().r(5, 1).to(5, 5).w(4, 28).w(5, 11).i(5, 2).to(5, 3).d().r(6, 10).m().r(9, 15).to(9, 17).w(9, 14).i(9, 16).n().r(10, 1).to(10, 7).w(9, 29).w(10, 12).i(10, 4).i(10, 7), r.y(2023).ny().r(1, 1).to(1, 2).s().r(1, 21).to(1, 27).w(1, 28).to(1, 29).i(1, 26).to(1, 27).t().r(4, 5).l().r(4, 29).to(5, 3).w(4, 23).w(5, 6).i(5, 2).to(5, 3).d().r(6, 22).to(6, 24).w(6, 25).i(6, 23).m().r(9, 29).n().r(9, 30).to(10, 6).w(10, 7).to(10, 8).i(10, 5).to(10, 6), r.y(2022).ny().r(1, 1).to(1, 3).s().r(1, 31).to(2, 6).w(1, 29).w(1, 30).i(2, 3).to(2, 4).t().r(4, 3).to(4, 5).w(4, 2).i(4, 4).l().r(4, 30).to(5, 4).w(4, 24).w(5, 7).i(5, 3).to(5, 4).d().r(6, 3).to(6, 5).m().r(9, 10).to(9, 12).n().r(10, 1).to(10, 7).w(10, 8).w(10, 9).i(10, 6).to(10, 7).ny().r(12, 31), r.y(2021).ny().r(1, 1).to(1, 3).s().r(2, 11).to(2, 17).w(2, 7).w(2, 20).i(2, 16).to(2, 17).t().r(4, 3).to(4, 5).l().r(5, 1).to(5, 5).w(4, 25).w(5, 8).i(5, 4).to(5, 5).d().r(6, 12).to(6, 14).m().r(9, 19).to(9, 21).w(9, 18).i(9, 20).n().r(10, 1).to(10, 7).w(9, 26).w(10, 9).i(10, 6).to(10, 7), r.y(2020).ny().r(1, 1).s().r(1, 24).to(2, 2).w(1, 19).i(1, 29).t().r(4, 4).to(4, 6).l().r(5, 1).to(5, 5).w(4, 26).w(5, 9).i(5, 4).to(5, 5).d().r(6, 25).to(6, 27).w(6, 28).i(6, 26).n().r(10, 1).to(10, 8).w(9, 27).w(10, 10).i(10, 7).to(10, 8), r.y(2019).ny().r(1, 1).s().r(2, 4).to(2, 10).w(2, 2).to(2, 3).i(2, 4).i(2, 8).t().r(4, 5).to(4, 7).l().r(5, 1).to(5, 4).w(4, 28).w(5, 5).i(5, 2).i(5, 3).d().r(6, 7).to(6, 9).m().r(9, 13).to(9, 15).n().r(10, 1).to(10, 7).w(9, 29).w(10, 12).i(10, 4).i(10, 7), r.y(2018).ny().r(1, 1).s().r(2, 15).to(2, 21).w(2, 11).w(2, 24).i(2, 19).to(2, 21).t().r(4, 5).to(4, 7).w(4, 8).i(4, 6).l().r(4, 29).to(5, 1).w(4, 28).i(4, 30).d().r(6, 18).n().r(10, 1).to(10, 7).w(9, 29).to(9, 30).i(10, 4).to(10, 5).m().r(9, 24).ny().r(12, 30).to(12, 31).w(12, 29).i(12, 31), r.y(2017).ny().r(1, 1).to(1, 2).s().r(1, 27).to(2, 2).w(1, 22).w(2, 4).i(2, 1).to(2, 2).t().r(4, 2).to(4, 4).w(4, 1).i(4, 3).l().r(5, 1).d().r(5, 28).to(5, 30).w(5, 27).i(5, 29).n().r(10, 1).to(10, 8).w(9, 30).i(10, 6).m().r(10, 4), r.y(2016).ny().r(1, 1).s().r(2, 7).to(2, 13).w(2, 6).w(2, 14).i(2, 11).to(2, 12).t().r(4, 4).l().r(5, 1).to(5, 2).d().r(6, 9).to(6, 11).w(6, 12).i(6, 10).m().r(9, 15).to(9, 17).w(9, 18).i(9, 16).n().r(10, 1).to(10, 7).w(10, 8).to(10, 9).i(10, 6).to(10, 7), r.y(2015).ny().r(1, 1).to(1, 3).w(1, 4).i(1, 2).s().r(2, 18).to(2, 24).w(2, 15).w(2, 28).i(2, 23).to(2, 24).t().r(4, 5).to(4, 6).l().r(5, 1).d().r(6, 20).r(6, 22).m().r(9, 27).n().r(10, 1).to(10, 7).w(10, 10).i(10, 7).a().r(9, 3).to(9, 4).w(9, 6).i(9, 4), r.y(2014).ny().r(1, 1).s().r(1, 31).to(2, 6).w(1, 26).w(2, 8).i(2, 5).to(2, 6).t().r(4, 5).to(4, 7).l().r(5, 1).to(5, 3).w(5, 4).i(5, 2).d().r(6, 2).m().r(9, 8).n().r(10, 1).to(10, 7).w(9, 28).w(10, 11).i(10, 6).to(10, 7), r.y(2013).ny().r(1, 1).to(1, 3).w(1, 5).to(1, 6).i(1, 2).to(1, 3).s().r(2, 9).to(2, 15).w(2, 16).to(2, 17).i(2, 14).to(2, 15).t().r(4, 4).to(4, 6).w(4, 7).i(4, 5).l().r(4, 29).to(5, 1).w(4, 27).to(4, 28).i(4, 29).to(4, 30).d().r(6, 10).to(6, 12).w(6, 8).to(6, 9).i(6, 10).to(6, 11).m().r(9, 19).to(9, 21).w(9, 22).i(9, 20).n().r(10, 1).to(10, 7).w(9, 29).w(10, 12).i(10, 4).i(10, 7), r.y(2012).ny().r(1, 1).to(1, 3).i(1, 3).s().r(1, 22).to(1, 28).w(1, 21).w(1, 29).i(1, 26).to(1, 27).t().r(4, 2).to(4, 4).w(3, 31).w(4, 1).i(4, 2).to(4, 3).l().r(4, 29).to(5, 1).w(4, 28).i(4, 30).d().r(6, 22).r(6, 24).m().r(9, 30).n().r(10, 1).to(10, 7).w(9, 29).i(10, 5), r.y(2011).ny().r(1, 1).to(1, 3).s().r(2, 2).to(2, 8).w(1, 30).w(2, 12).i(2, 7).to(2, 8).t().r(4, 3).to(4, 5).w(4, 2).i(4, 4).l().r(4, 30).to(5, 2).d().r(6, 4).r(6, 6).m().r(9, 10).to(9, 12).n().r(10, 1).to(10, 7).w(10, 8).to(10, 9).i(10, 6).to(10, 7).ny().w(12, 31), r.y(2010).ny().r(1, 1).to(1, 3).s().r(2, 13).to(2, 19).w(2, 20).to(2, 21).i(2, 18).to(2, 19).t().r(4, 3).to(4, 5).l().r(5, 1).to(5, 3).d().r(6, 14).to(6, 16).w(6, 12).to(6, 13).i(6, 14).to(6, 15).m().r(9, 22).to(9, 24).w(9, 19).w(9, 25).i(9, 23).to(9, 24).n().r(10, 1).to(10, 7).w(9, 26).w(10, 9).i(10, 6).to(10, 7), r.y(2009).ny().r(1, 1).to(1, 3).w(1, 4).i(1, 2).s().r(1, 25).to(1, 31).w(1, 24).w(2, 1).i(1, 29).to(1, 30).t().r(4, 4).to(4, 6).l().r(5, 1).to(5, 3).d().r(5, 28).to(5, 30).w(5, 31).i(5, 29).n().r(10, 1).to(10, 8).w(9, 27).w(10, 10).i(10, 7).to(10, 8).m().r(10, 3), r.y(2008).ny().r(1, 1).s().r(2, 6).to(2, 12).w(2, 2).to(2, 3).i(2, 11).to(2, 12).t().r(4, 4).to(4, 6).l().r(5, 1).to(5, 3).w(5, 4).i(5, 2).d().r(6, 7).to(6, 9).m().r(9, 13).to(9, 15).n().r(9, 29).to(10, 5).w(9, 27).to(9, 28).i(9, 29).to(9, 30), r.y(2007).ny().r(1, 1).to(1, 3).i(1, 2).to(1, 3).s().r(2, 18).to(2, 24).w(2, 17).w(2, 25).i(2, 22).to(2, 23).l().r(5, 1).to(5, 7).w(4, 28).to(4, 29).i(5, 4).i(5, 7).n().r(10, 1).to(10, 7).w(9, 29).to(9, 30).i(10, 4).to(10, 5).ny().r(12, 30).to(12, 31).w(12, 29).i(12, 31), r.y(2006).ny().r(1, 1).to(1, 3).s().r(1, 29).to(2, 4).w(1, 28).w(2, 5).i(2, 2).to(2, 3).l().r(5, 1).to(5, 7).w(4, 29).to(4, 30).i(5, 4).to(5, 5).n().r(10, 1).to(10, 7).w(9, 30).w(10, 8).i(10, 5).to(10, 6).ny().w(12, 30).to(12, 31), r.y(2005).ny().r(1, 1).to(1, 3).s().r(2, 9).to(2, 15).w(2, 5).to(2, 6).i(2, 14).to(2, 15).l().r(5, 1).to(5, 7).w(4, 30).w(5, 8).i(5, 5).to(5, 6).n().r(10, 1).to(10, 7).w(10, 8).to(10, 9).i(10, 6).to(10, 7), r.y(2004).ny().r(1, 1).s().r(1, 22).to(1, 28).w(1, 17).to(1, 18).i(1, 27).to(1, 28).l().r(5, 1).to(5, 7).w(5, 8).to(5, 9).i(5, 6).to(5, 7).n().r(10, 1).to(10, 7).w(10, 9).to(10, 10).i(10, 6).to(10, 7), {
    holidays: r.holidays,
    workdays: r.workdays,
    inLieuDays: r.inLieuDays
  };
};
var {
  holidays: M,
  workdays: k,
  inLieuDays: Z
} = V();
var c = (r) => {
  const t = u(r);
  if (!t.isValid()) throw new Error("unsupported type ".concat(typeof r, ", expected type is Date or Dayjs"));
  return t;
};
var O = (r) => !f(r);
var f = (r) => {
  const t = c(r), e = t.day(), a = t.format("YYYY-MM-DD");
  return !!(k[a] || e >= 1 && e <= 5 && !M[a]);
};
var G = (r) => {
  const t = c(r);
  return !!Z[t.format("YYYY-MM-DD")];
};
var J = (r) => {
  const t = c(r), e = t.format("YYYY-MM-DD");
  if (k[e]) return {
    date: e,
    work: true,
    name: k[e]
  };
  if (M[e]) return {
    date: e,
    work: false,
    name: M[e]
  };
  {
    const a = t.day();
    return {
      date: e,
      work: a !== 0 && a !== 6,
      name: t.format("dddd")
    };
  }
};
var K = (r, t, e = true) => {
  const a = c(r), o = c(t);
  return e ? Y(a, o).filter(O).map((s) => s.format("YYYY-MM-DD")) : Y(a, o).filter((s) => M[s.format("YYYY-MM-DD")]).map((s) => s.format("YYYY-MM-DD"));
};
var Q = (r, t, e = true) => {
  const a = c(r), o = c(t);
  return e ? Y(a, o).filter(f).map((s) => s.format("YYYY-MM-DD")) : Y(a, o).filter((s) => f(s) && s.day() >= 1 && s.day() <= 5).map((s) => s.format("YYYY-MM-DD"));
};
var X = (r = 0, t = h()) => {
  if (t = u(t), r === 0) {
    if (f(t)) return t.format("YYYY-MM-DD");
    r = 1;
  }
  const e = r > 0 ? 1 : -1;
  let a = Math.abs(r);
  for (; a > 0; ) t = t.add(e, "day"), f(t) && a--;
  return t.format("YYYY-MM-DD");
};
var tt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  findWorkday: X,
  getDayDetail: J,
  getHolidaysInRange: K,
  getWorkdaysInRange: Q,
  isHoliday: O,
  isInLieu: G,
  isWorkday: f
}, Symbol.toStringTag, {
  value: "Module"
}));
var et = {
  the_beginning_of_spring: [4.6295, 3.87],
  rain_water: [19.4599, 18.73],
  the_waking_of_insects: [6.3926, 5.63],
  the_spring_equinox: [21.4155, 20.646],
  pure_brightness: [5.59, 4.81],
  grain_rain: [20.888, 20.1],
  the_beginning_of_summer: [6.318, 5.52],
  lesser_fullness_of_grain: [21.86, 21.04],
  grain_in_beard: [6.5, 5.678],
  the_summer_solstice: [22.2, 21.37],
  lesser_heat: [7.928, 7.108],
  greater_heat: [23.65, 22.83],
  the_beginning_of_autumn: [28.35, 7.5],
  the_end_of_heat: [23.95, 23.13],
  white_dew: [8.44, 7.646],
  the_autumn_equinox: [23.822, 23.042],
  code_dew: [9.098, 8.318],
  frost_descent: [24.218, 23.438],
  the_beginning_of_winter: [8.218, 7.438],
  lesser_snow: [23.08, 22.36],
  greater_snow: [7.9, 7.18],
  the_winter_solstice: [22.6, 21.94],
  lesser_cold: [6.11, 5.4055],
  greater_cold: [20.84, 20.12]
};
var T = {
  1: ["lesser_cold", "greater_cold"],
  2: ["the_beginning_of_spring", "rain_water"],
  3: ["the_waking_of_insects", "the_spring_equinox"],
  4: ["pure_brightness", "grain_rain"],
  5: ["the_beginning_of_summer", "lesser_fullness_of_grain"],
  6: ["grain_in_beard", "the_summer_solstice"],
  7: ["lesser_heat", "greater_heat"],
  8: ["the_beginning_of_autumn", "the_end_of_heat"],
  9: ["white_dew", "the_autumn_equinox"],
  10: ["code_dew", "frost_descent"],
  11: ["the_beginning_of_winter", "lesser_snow"],
  12: ["greater_snow", "the_winter_solstice"]
};
var rt = {
  "2026_rain_water": -1,
  "2084_the_spring_equinox": 1,
  "1911_the_beginning_of_summer": 1,
  "2008_lesser_fullness_of_grain": 1,
  "1902_grain_in_beard": 1,
  "1928_the_summer_solstice": 1,
  "1925_lesser_heat": 1,
  "2016_lesser_heat": 1,
  "1922_greater_heat": 1,
  "2002_the_beginning_of_autumn": 1,
  "1927_white_dew": 1,
  "1942_the_autumn_equinox": 1,
  "2089_frost_descent": 1,
  "2089_the_beginning_of_winter": 1,
  "1978_lesser_snow": 1,
  "1954_greater_snow": 1,
  "1918_the_winter_solstice": -1,
  "2021_the_winter_solstice": -1,
  "1982_lesser_cold": 1,
  "2019_lesser_cold": -1,
  "2000_greater_cold": 1,
  "2082_greater_cold": 1
};
var E = {
  lesser_cold: "小寒",
  greater_cold: "大寒",
  the_beginning_of_spring: "立春",
  rain_water: "雨水",
  the_waking_of_insects: "惊蛰",
  the_spring_equinox: "春分",
  pure_brightness: "清明",
  grain_rain: "谷雨",
  the_beginning_of_summer: "立夏",
  lesser_fullness_of_grain: "小满",
  grain_in_beard: "芒种",
  the_summer_solstice: "夏至",
  lesser_heat: "小暑",
  greater_heat: "大暑",
  the_beginning_of_autumn: "立秋",
  the_end_of_heat: "处暑",
  white_dew: "白露",
  the_autumn_equinox: "秋分",
  code_dew: "寒露",
  frost_descent: "霜降",
  the_beginning_of_winter: "立冬",
  lesser_snow: "小雪",
  greater_snow: "大雪",
  the_winter_solstice: "冬至"
};
var L = (r, t, e) => {
  const a = r >= 2e3 ? 21 : 20, o = r % 100, s = 0.2422, n = et[e][a === 21 ? 1 : 0];
  let d = Math.floor(o / 4);
  ["lesser_cold", "greater_cold", "the_beginning_of_spring", "rain_water"].includes(e) && (d = Math.floor((o - 1) / 4));
  let i = Math.floor(o * s + n) - d;
  const _ = rt["".concat(r, "_").concat(e)];
  return _ && (i += _), h("".concat(r, "-").concat(t, "-").concat(i)).format("YYYY-MM-DD");
};
var at = (r, t) => {
  const e = [];
  let a = u(r);
  const o = u(t || r);
  for (; a.isBefore(o) || a.isSame(o); ) {
    const s = a.year(), n = a.month() + 1;
    T[n].forEach((d) => {
      const i = h(L(s, n, d));
      (i != null && i.isBefore(o) || i != null && i.isSame(o)) && (i != null && i.isAfter(a) || i != null && i.isSame(a)) && e.push({
        date: i.format("YYYY-MM-DD"),
        term: d,
        name: E[d],
        index: 1
      });
    }), n === 12 ? a = a.add(1, "year").startOf("year") : a = a.add(1, "month").startOf("month");
  }
  return e;
};
var $ = (r, t) => {
  let e = u(r).subtract(1, "month");
  const a = u(t || r).add(1, "month"), o = [];
  for (; e.isBefore(a) || e.isSame(a); ) {
    const n = e.year(), d = e.month() + 1;
    T[d].forEach((i) => {
      const _ = h(L(n, d, i));
      o.push({
        term: i,
        date: _
      });
    }), e.month() === 11 ? e = e.add(1, "year").startOf("year") : e = e.add(1, "month").startOf("month");
  }
  const s = [];
  return o.forEach((n, d) => {
    for (let i = n.date; o[d + 1] && i.isBefore(o[d + 1].date); i = i.add(1, "day")) s.push({
      day: i,
      term: n.term,
      name: E[n.term],
      index: i.diff(n.date, "day") + 1
    });
  }), t || (t = r), s.filter((n) => n.day.isBetween(r, t, "day")).map((n) => ({
    date: n.day.format("YYYY-MM-DD"),
    term: n.term,
    name: n.name,
    index: n.index
  }));
};
var ot = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getSolarTermDate: L,
  getSolarTerms: at,
  getSolarTermsInRange: $
}, Symbol.toStringTag, {
  value: "Module"
}));
var g = [
  19416,
  19168,
  42352,
  21717,
  53856,
  55632,
  91476,
  22176,
  39632,
  21970,
  //1900-1909
  19168,
  42422,
  42192,
  53840,
  119381,
  46400,
  54944,
  44450,
  38320,
  84343,
  //1910-1919
  18800,
  42160,
  46261,
  27216,
  27968,
  109396,
  11104,
  38256,
  21234,
  18800,
  //1920-1929
  25958,
  54432,
  59984,
  28309,
  23248,
  11104,
  100067,
  37600,
  116951,
  51536,
  //1930-1939
  54432,
  120998,
  46416,
  22176,
  107956,
  9680,
  37584,
  53938,
  43344,
  46423,
  //1940-1949
  27808,
  46416,
  86869,
  19872,
  42416,
  83315,
  21168,
  43432,
  59728,
  27296,
  //1950-1959
  44710,
  43856,
  19296,
  43748,
  42352,
  21088,
  62051,
  55632,
  23383,
  22176,
  //1960-1969
  38608,
  19925,
  19152,
  42192,
  54484,
  53840,
  54616,
  46400,
  46752,
  103846,
  //1970-1979
  38320,
  18864,
  43380,
  42160,
  45690,
  27216,
  27968,
  44870,
  43872,
  38256,
  //1980-1989
  19189,
  18800,
  25776,
  29859,
  59984,
  27480,
  21952,
  43872,
  38613,
  37600,
  //1990-1999
  51552,
  55636,
  54432,
  55888,
  30034,
  22176,
  43959,
  9680,
  37584,
  51893,
  //2000-2009
  43344,
  46240,
  47780,
  44368,
  21977,
  19360,
  42416,
  86390,
  21168,
  43312,
  //2010-2019
  31060,
  27296,
  44368,
  23378,
  19296,
  42726,
  42208,
  53856,
  60005,
  54576,
  //2020-2029
  23200,
  30371,
  38608,
  19195,
  19152,
  42192,
  118966,
  53840,
  54560,
  56645,
  //2030-2039
  46496,
  22224,
  21938,
  18864,
  42359,
  42160,
  43600,
  111189,
  27936,
  44448,
  //2040-2049
  84835,
  37744,
  18936,
  18800,
  25776,
  92326,
  59984,
  27424,
  108228,
  43744,
  //2050-2059
  41696,
  53987,
  51552,
  54615,
  54432,
  55888,
  23893,
  22176,
  42704,
  21972,
  //2060-2069
  21200,
  43448,
  43344,
  46240,
  46758,
  44368,
  21920,
  43940,
  42416,
  21168,
  //2070-2079
  45683,
  26928,
  29495,
  27296,
  44368,
  84821,
  19296,
  42352,
  21732,
  53600,
  //2080-2089
  59752,
  54560,
  55968,
  92838,
  22224,
  19168,
  43476,
  41680,
  53584,
  62034,
  //2090-2099
  54560
  //2100
];
var F = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
var A = ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"];
var H = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
var B = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
var nt = ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"];
var x = (r) => {
  let t = 348;
  for (let e = 32768; e > 8; e >>= 1) t += g[r - 1900] & e ? 1 : 0;
  return t + v(r);
};
var p = (r) => g[r - 1900] & 15;
var v = (r) => p(r) ? g[r - 1900] & 65536 ? 30 : 29 : 0;
var b = (r) => H[r % 10] + B[r % 12];
var D = (r, t) => g[r - 1900] & 65536 >> t ? 30 : 29;
var st = (r) => nt[(r - 4) % 12];
var it = (r) => {
  const t = ["初", "十", "廿", "三十"];
  if (r === 10) return "初十";
  if (r === 20) return "二十";
  if (r === 30) return "三十";
  const e = Math.floor(r / 10), a = r % 10;
  return t[e] + F[a];
};
var dt = (r) => "".concat(H[(r - 4) % 10]).concat(B[(r - 4) % 12], "年");
var R = (r, t) => {
  const e = [];
  for (let a = r; a <= t; a++) e.push({
    year: a,
    lunarYear: dt(a),
    lunarYearCN: a.toString().split("").map((o) => F[Number(o)]).join("")
  });
  return e;
};
var C = (r) => {
  const t = p(r);
  return {
    year: r,
    leapMonth: t || void 0,
    leapMonthCN: t ? "闰".concat(A[t - 1], "月") : void 0,
    days: t ? g[r - 1900] & 65536 ? 30 : 29 : 0
  };
};
var m = (r) => {
  const t = new Array(7).fill(0);
  let e = 0, a = 0;
  const o = h(new Date(1900, 0, 31)), s = h(r);
  let n = s.diff(o, "day");
  t[5] = n + 40, t[4] = 14;
  let d = 1900;
  for (; d < 2100 && n > 0; d++) e = x(d), n -= e, t[4] += 12;
  n < 0 && (n += e, d--, t[4] -= 12), t[0] = d, t[3] = d - 1864, a = p(d), t[6] = 0;
  for (let i = 1; i < 13 && n >= 0; i++) a > 0 && i === a + 1 && t[6] === 0 ? (--i, t[6] = 1, e = v(d)) : e = D(d, i), t[6] === 1 && i === a + 1 && (t[6] = 0), n -= e, t[6] === 0 && t[4]++, t[1] = i;
  return n < 0 && (n += e, t[1]--, t[4]--), t[2] = n + 1, {
    date: s.format("YYYY-MM-DD"),
    // 公历日期
    lunarYear: t[0],
    // 农历年份
    lunarMon: t[1] + 1,
    // 农历月份
    lunarDay: t[2],
    // 农历日期
    isLeap: !!t[6],
    // 是否闰月
    zodiac: st(t[0]),
    // 生肖
    yearCyl: b(t[3]),
    // 年柱
    monCyl: b(t[4]),
    // 月柱
    dayCyl: b(t[5]),
    // 日柱
    lunarYearCN: "".concat(t[0].toString().split("").map((i) => F[Number(i)]).join("")),
    // 农历年份中文表示
    lunarMonCN: "".concat(A[t[1]], "月"),
    // 农历月份中文表示
    lunarDayCN: it(t[2])
    // 农历日期中文表示
  };
};
var j = (r, t) => {
  const e = h(r), a = h(t), o = [];
  for (let s = e; s.isBefore(a) || s.isSame(a, "day"); s = s.add(1, "day")) o.push(m(s));
  return o;
};
var I = (r) => {
  const t = h(r), e = t.year(), a = t.month() + 1, o = t.date();
  let s = 0;
  for (let y = 1900; y < e; y++) s += x(y);
  let n = p(e);
  for (let y = 1; y < a; y++) s += D(e, y), y === n && (s += v(e));
  s += o - 1;
  const d = h(new Date(1900, 0, 31)), i = d.add(s, "day").format("YYYY-MM-DD");
  let _ = s, N;
  return n === a && (_ += D(e, a), N = d.add(_, "day").format("YYYY-MM-DD")), {
    date: i,
    leapMonthDate: N
  };
};
var lt = {
  getLunarYears: R,
  getYearLeapMonth: C,
  getLunarDate: m,
  getLunarDatesInRange: j,
  getSolarDateFromLunar: I
};
var ht = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lt,
  getLunarDate: m,
  getLunarDatesInRange: j,
  getLunarYears: R,
  getSolarDateFromLunar: I,
  getYearLeapMonth: C,
  monthDays: D
}, Symbol.toStringTag, {
  value: "Module"
}));
var _t = {
  1: {
    // 正月
    1: ["春节", "鸡日", "元始天尊诞辰"],
    2: ["犬日"],
    3: ["猪日", "小年朝"],
    4: ["羊日", "孙天医诞辰"],
    5: ["牛日", "破五日", "开市", "路神诞辰"],
    6: ["马日"],
    7: ["人日", "送火神"],
    8: ["谷日", "阎王诞辰"],
    9: ["天日", "玉皇诞辰"],
    10: ["地日", "石头生日"],
    13: ["上(试)灯日", "关公升天日"],
    15: ["元宵节", "上元节", "正灯日", "天官诞辰"],
    18: ["落灯日"],
    25: ["天仓(填仓)节"]
  },
  2: {
    // 二月
    1: ["太阳生日"],
    2: ["春龙节", "土地公生日", "济公活佛生日"],
    3: ["文昌帝君诞辰"],
    12: ["百花生日(花朝节)"],
    15: ["九天玄女诞辰", "太上老君诞辰", "精忠岳王诞辰"],
    19: ["观音菩萨诞辰"],
    21: ["普贤菩萨诞辰"]
  },
  3: {
    3: ["上巳节"],
    15: ["赵公元帅诞辰", "泰山老母诞辰"]
  },
  4: {
    1: ["祭雹神"],
    4: ["文殊菩萨诞辰"],
    8: ["浴佛节(龙华会)"],
    12: ["蛇王诞辰"],
    14: ["吕洞宾诞辰"],
    18: ["华佗诞辰"],
    28: ["药王(神农)诞辰"]
  },
  5: {
    5: ["端午节"],
    13: ["雨节", "黄帝诞辰"]
  },
  6: {
    1: ["半年节"],
    6: ["晒衣节"],
    19: ["观音菩萨得道"],
    24: ["雷神诞辰", "荷花生日", "关公诞辰"]
  },
  7: {
    1: ["祭海神"],
    7: ["乞巧节"],
    15: ["中元(鬼)节", "地官诞辰(孟兰盆会)"],
    18: ["西王母诞辰"],
    20: ["棉花生日"],
    23: ["诸葛亮诞辰"],
    30: ["地藏菩萨诞辰"]
  },
  8: {
    1: ["天医节"],
    3: ["灶君生日"],
    8: ["瑶池大会"],
    15: ["中秋节"],
    20: ["水稻生日"],
    28: ["孔子诞辰"]
  },
  9: {
    9: ["重阳节"],
    19: ["观音菩萨出家"]
  },
  10: {
    1: ["十月朝", "寒衣节"],
    15: ["下元节", "水官诞辰"]
  },
  12: {
    8: ["腊八节"],
    23: ["官家送灶"],
    24: ["民间送灶"],
    25: ["接玉皇"]
  }
};
var yt = [
  // 处理寒食节（清明前一日）
  (r, t) => {
    const e = r.add(1, "day");
    $(e).find((o) => o.term === "pure_brightness") && t.push({
      date: r.format("YYYY-MM-DD"),
      name: "寒食节",
      type: "solar_term"
    });
  },
  // 处理除夕（农历腊月最后一日）
  (r, t) => {
    const e = m(r);
    if (e.lunarMon === 12 && e.lunarDay === D(e.lunarYear, 12)) {
      const a = r.format("YYYY-MM-DD");
      ["除夕", "封井", "祭井神", "贴春联", "迎财神"].forEach((o) => {
        t.push({
          date: a,
          name: o,
          type: "lunar"
        });
      });
    }
  }
];
var q = (r, t) => {
  var s;
  const e = [];
  let a = h(r);
  const o = h(t || r);
  for (; a.isBefore(o) || a.isSame(o); ) {
    const n = m(a);
    n.isLeap || (((s = _t[n.lunarMon]) == null ? void 0 : s[n.lunarDay]) || []).forEach((i) => {
      e.push({
        date: a.format("YYYY-MM-DD"),
        name: i,
        type: "lunar"
      });
    }), yt.forEach((d) => d(a, e)), a = a.add(1, "day");
  }
  return e.reduce((n, d) => {
    const i = n.find((_) => _.date === d.date);
    return i ? i.name.push(d.name) : n.push({
      date: d.date,
      name: [d.name]
    }), n;
  }, []);
};
var ut = {
  getLunarFestivals: q
};
var wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ut,
  getLunarFestivals: q
}, Symbol.toStringTag, {
  value: "Module"
}));
var ft = {
  ...tt,
  ...ot,
  ...ht,
  ...wt
};

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwtdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi1yYXcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmRleGVkLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1jYWxsYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1idWlsdC1pbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnZpcm9ubWVudC11c2VyLWFnZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zZXQtbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5wdXNoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYW4taW5zdGFuY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3JyZWN0LXByb3RvdHlwZS1nZXR0ZXIuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbi1hY2Nlc3Nvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaHRtbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1jcmVhdGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMtY29yZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5pdGVyYXRvci5jb25zdHJ1Y3Rvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1pdGVyYXRvci1kaXJlY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW5zLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLWl0ZXItcmVzdWx0LW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0b3ItY2xvc2UtYWxsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0b3ItY3JlYXRlLXByb3h5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2FsbC13aXRoLXNhZmUtaXRlcmF0aW9uLWNsb3NpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvci1oZWxwZXItdGhyb3dzLW9uLWludmFsaWQtaXRlcmF0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvci1oZWxwZXItd2l0aG91dC1jbG9zaW5nLW9uLWVhcmx5LWVycm9yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLml0ZXJhdG9yLmZpbHRlci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy1jbGF1c2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1hcnJheS1pdGVyYXRvci1tZXRob2QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jbGFzc29mLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1pdGVyYXRvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuaXRlcmF0b3IuZmluZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5pdGVyYXRvci5mb3ItZWFjaC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5pdGVyYXRvci5tYXAuanMiLCAic3JjL0NoaW5lc2VEYXlzL0NoaW5lc2VEYXlzLnRzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jaGluZXNlLWRheXNAMS41LjEvbm9kZV9tb2R1bGVzL2NoaW5lc2UtZGF5cy9kaXN0L2luZGV4LmVzLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIndXNlIHN0cmljdCc7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT09IE1hdGggJiYgaXQ7XG59O1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxubW9kdWxlLmV4cG9ydHMgPVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZ2xvYmFsLXRoaXMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2YgZ2xvYmFsVGhpcyA9PSAnb2JqZWN0JyAmJiBnbG9iYWxUaGlzKSB8fFxuICBjaGVjayh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYpIHx8XG4gIGNoZWNrKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsKSB8fFxuICBjaGVjayh0eXBlb2YgdGhpcyA9PSAnb2JqZWN0JyAmJiB0aGlzKSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmMgLS0gZmFsbGJhY2tcbiAgKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pKCkgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBEZXRlY3QgSUU4J3MgaW5jb21wbGV0ZSBkZWZpbmVQcm9wZXJ0eSBpbXBsZW1lbnRhdGlvblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIDEsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pWzFdICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbiAgdmFyIHRlc3QgPSAoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KS5iaW5kKCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gdHlwZW9mIHRlc3QgIT0gJ2Z1bmN0aW9uJyB8fCB0ZXN0Lmhhc093blByb3BlcnR5KCdwcm90b3R5cGUnKTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgY2FsbCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX0JJTkQgPyBjYWxsLmJpbmQoY2FsbCkgOiBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBjYWxsLmFwcGx5KGNhbGwsIGFyZ3VtZW50cyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBOYXNob3JuIH4gSkRLOCBidWdcbnZhciBOQVNIT1JOX0JVRyA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvciAmJiAhJHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoeyAxOiAyIH0sIDEpO1xuXG4vLyBgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZWAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5wcm90b3R5cGUucHJvcGVydHlpc2VudW1lcmFibGVcbmV4cG9ydHMuZiA9IE5BU0hPUk5fQlVHID8gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoVikge1xuICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLCBWKTtcbiAgcmV0dXJuICEhZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLmVudW1lcmFibGU7XG59IDogJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBjYWxsID0gRnVuY3Rpb25Qcm90b3R5cGUuY2FsbDtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1mdW5jdGlvbi1wcm90b3R5cGUtYmluZCAtLSBzYWZlXG52YXIgdW5jdXJyeVRoaXNXaXRoQmluZCA9IE5BVElWRV9CSU5EICYmIEZ1bmN0aW9uUHJvdG90eXBlLmJpbmQuYmluZChjYWxsLCBjYWxsKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IHVuY3VycnlUaGlzV2l0aEJpbmQgOiBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2FsbC5hcHBseShmbiwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyh7fS50b1N0cmluZyk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBzdHJpbmdTbGljZSh0b1N0cmluZyhpdCksIDgsIC0xKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcbnZhciBzcGxpdCA9IHVuY3VycnlUaGlzKCcnLnNwbGl0KTtcblxuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3Ncbm1vZHVsZS5leHBvcnRzID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyB0aHJvd3MgYW4gZXJyb3IgaW4gcmhpbm8sIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9yaGluby9pc3N1ZXMvMzQ2XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gISRPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcbn0pID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjbGFzc29mKGl0KSA9PT0gJ1N0cmluZycgPyBzcGxpdChpdCwgJycpIDogJE9iamVjdChpdCk7XG59IDogJE9iamVjdDtcbiIsICIndXNlIHN0cmljdCc7XG4vLyB3ZSBjYW4ndCB1c2UganVzdCBgaXQgPT0gbnVsbGAgc2luY2Ugb2YgYGRvY3VtZW50LmFsbGAgc3BlY2lhbCBjYXNlXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90LWFlY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSBudWxsIHx8IGl0ID09PSB1bmRlZmluZWQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoaXQpKSB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdFxudmFyIGRvY3VtZW50QWxsID0gdHlwZW9mIGRvY3VtZW50ID09ICdvYmplY3QnICYmIGRvY3VtZW50LmFsbDtcblxuLy8gYElzQ2FsbGFibGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2NhbGxhYmxlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby10eXBlb2YtdW5kZWZpbmVkIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBkb2N1bWVudEFsbCA9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudEFsbCAhPT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJyB8fCBhcmd1bWVudCA9PT0gZG9jdW1lbnRBbGw7XG59IDogZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogaXNDYWxsYWJsZShpdCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgYUZ1bmN0aW9uID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKGFyZ3VtZW50KSA/IGFyZ3VtZW50IDogdW5kZWZpbmVkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZXNwYWNlLCBtZXRob2QpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gYUZ1bmN0aW9uKGdsb2JhbFRoaXNbbmFtZXNwYWNlXSkgOiBnbG9iYWxUaGlzW25hbWVzcGFjZV0gJiYgZ2xvYmFsVGhpc1tuYW1lc3BhY2VdW21ldGhvZF07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1bmN1cnJ5VGhpcyh7fS5pc1Byb3RvdHlwZU9mKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xuXG52YXIgbmF2aWdhdG9yID0gZ2xvYmFsVGhpcy5uYXZpZ2F0b3I7XG52YXIgdXNlckFnZW50ID0gbmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cbm1vZHVsZS5leHBvcnRzID0gdXNlckFnZW50ID8gU3RyaW5nKHVzZXJBZ2VudCkgOiAnJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnZpcm9ubWVudC11c2VyLWFnZW50Jyk7XG5cbnZhciBwcm9jZXNzID0gZ2xvYmFsVGhpcy5wcm9jZXNzO1xudmFyIERlbm8gPSBnbG9iYWxUaGlzLkRlbm87XG52YXIgdmVyc2lvbnMgPSBwcm9jZXNzICYmIHByb2Nlc3MudmVyc2lvbnMgfHwgRGVubyAmJiBEZW5vLnZlcnNpb247XG52YXIgdjggPSB2ZXJzaW9ucyAmJiB2ZXJzaW9ucy52ODtcbnZhciBtYXRjaCwgdmVyc2lvbjtcblxuaWYgKHY4KSB7XG4gIG1hdGNoID0gdjguc3BsaXQoJy4nKTtcbiAgLy8gaW4gb2xkIENocm9tZSwgdmVyc2lvbnMgb2YgVjggaXNuJ3QgVjggPSBDaHJvbWUgLyAxMFxuICAvLyBidXQgdGhlaXIgY29ycmVjdCB2ZXJzaW9ucyBhcmUgbm90IGludGVyZXN0aW5nIGZvciB1c1xuICB2ZXJzaW9uID0gbWF0Y2hbMF0gPiAwICYmIG1hdGNoWzBdIDwgNCA/IDEgOiArKG1hdGNoWzBdICsgbWF0Y2hbMV0pO1xufVxuXG4vLyBCcm93c2VyRlMgTm9kZUpTIGBwcm9jZXNzYCBwb2x5ZmlsbCBpbmNvcnJlY3RseSBzZXQgYC52OGAgdG8gYDAuMGBcbi8vIHNvIGNoZWNrIGB1c2VyQWdlbnRgIGV2ZW4gaWYgYC52OGAgZXhpc3RzLCBidXQgMFxuaWYgKCF2ZXJzaW9uICYmIHVzZXJBZ2VudCkge1xuICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvRWRnZVxcLyhcXGQrKS8pO1xuICBpZiAoIW1hdGNoIHx8IG1hdGNoWzFdID49IDc0KSB7XG4gICAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0Nocm9tZVxcLyhcXGQrKS8pO1xuICAgIGlmIChtYXRjaCkgdmVyc2lvbiA9ICttYXRjaFsxXTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZlcnNpb247XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnZpcm9ubWVudC12OC12ZXJzaW9uJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG5cbnZhciAkU3RyaW5nID0gZ2xvYmFsVGhpcy5TdHJpbmc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlzeW1ib2xzIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9ICEhT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgc3ltYm9sID0gU3ltYm9sKCdzeW1ib2wgZGV0ZWN0aW9uJyk7XG4gIC8vIENocm9tZSAzOCBTeW1ib2wgaGFzIGluY29ycmVjdCB0b1N0cmluZyBjb252ZXJzaW9uXG4gIC8vIGBnZXQtb3duLXByb3BlcnR5LXN5bWJvbHNgIHBvbHlmaWxsIHN5bWJvbHMgY29udmVydGVkIHRvIG9iamVjdCBhcmUgbm90IFN5bWJvbCBpbnN0YW5jZXNcbiAgLy8gbmI6IERvIG5vdCBjYWxsIGBTdHJpbmdgIGRpcmVjdGx5IHRvIGF2b2lkIHRoaXMgYmVpbmcgb3B0aW1pemVkIG91dCB0byBgc3ltYm9sKycnYCB3aGljaCB3aWxsLFxuICAvLyBvZiBjb3Vyc2UsIGZhaWwuXG4gIHJldHVybiAhJFN0cmluZyhzeW1ib2wpIHx8ICEoT2JqZWN0KHN5bWJvbCkgaW5zdGFuY2VvZiBTeW1ib2wpIHx8XG4gICAgLy8gQ2hyb21lIDM4LTQwIHN5bWJvbHMgYXJlIG5vdCBpbmhlcml0ZWQgZnJvbSBET00gY29sbGVjdGlvbnMgcHJvdG90eXBlcyB0byBpbnN0YW5jZXNcbiAgICAhU3ltYm9sLnNoYW0gJiYgVjhfVkVSU0lPTiAmJiBWOF9WRVJTSU9OIDwgNDE7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1zeW1ib2wgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfU1lNQk9MICYmXG4gICFTeW1ib2wuc2hhbSAmJlxuICB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc1Byb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YnKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxubW9kdWxlLmV4cG9ydHMgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgJFN5bWJvbCA9IGdldEJ1aWx0SW4oJ1N5bWJvbCcpO1xuICByZXR1cm4gaXNDYWxsYWJsZSgkU3ltYm9sKSAmJiBpc1Byb3RvdHlwZU9mKCRTeW1ib2wucHJvdG90eXBlLCAkT2JqZWN0KGl0KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB0cnkge1xuICAgIHJldHVybiAkU3RyaW5nKGFyZ3VtZW50KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gJ09iamVjdCc7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciB0cnlUb1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90cnktdG8tc3RyaW5nJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBJc0NhbGxhYmxlKGFyZ3VtZW50KSBpcyB0cnVlYFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGlzQ2FsbGFibGUoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKHRyeVRvU3RyaW5nKGFyZ3VtZW50KSArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcblxuLy8gYEdldE1ldGhvZGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWdldG1ldGhvZFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoViwgUCkge1xuICB2YXIgZnVuYyA9IFZbUF07XG4gIHJldHVybiBpc051bGxPclVuZGVmaW5lZChmdW5jKSA/IHVuZGVmaW5lZCA6IGFDYWxsYWJsZShmdW5jKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBPcmRpbmFyeVRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb3JkaW5hcnl0b3ByaW1pdGl2ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5wdXQsIHByZWYpIHtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChwcmVmID09PSAnc3RyaW5nJyAmJiBpc0NhbGxhYmxlKGZuID0gaW5wdXQudG9TdHJpbmcpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAoaXNDYWxsYWJsZShmbiA9IGlucHV0LnZhbHVlT2YpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAocHJlZiAhPT0gJ3N0cmluZycgJiYgaXNDYWxsYWJsZShmbiA9IGlucHV0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgdHJ5IHtcbiAgICBkZWZpbmVQcm9wZXJ0eShnbG9iYWxUaGlzLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdsb2JhbFRoaXNba2V5XSA9IHZhbHVlO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG5cbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IG1vZHVsZS5leHBvcnRzID0gZ2xvYmFsVGhpc1tTSEFSRURdIHx8IGRlZmluZUdsb2JhbFByb3BlcnR5KFNIQVJFRCwge30pO1xuXG4oc3RvcmUudmVyc2lvbnMgfHwgKHN0b3JlLnZlcnNpb25zID0gW10pKS5wdXNoKHtcbiAgdmVyc2lvbjogJzMuNDUuMScsXG4gIG1vZGU6IElTX1BVUkUgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxNC0yMDI1IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJyxcbiAgbGljZW5zZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2Jsb2IvdjMuNDUuMS9MSUNFTlNFJyxcbiAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMnXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSB8fCB7fSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxuLy8gYFRvT2JqZWN0YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9vYmplY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiAkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSB1bmN1cnJ5VGhpcyh7fS5oYXNPd25Qcm9wZXJ0eSk7XG5cbi8vIGBIYXNPd25Qcm9wZXJ0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWhhc293bnByb3BlcnR5XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWhhc293biAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5oYXNPd24gfHwgZnVuY3Rpb24gaGFzT3duKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5KHRvT2JqZWN0KGl0KSwga2V5KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgaWQgPSAwO1xudmFyIHBvc3RmaXggPSBNYXRoLnJhbmRvbSgpO1xudmFyIHRvU3RyaW5nID0gdW5jdXJyeVRoaXMoMS4xLnRvU3RyaW5nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcgKyAoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSkgKyAnKV8nICsgdG9TdHJpbmcoKytpZCArIHBvc3RmaXgsIDM2KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyIFN5bWJvbCA9IGdsb2JhbFRoaXMuU3ltYm9sO1xudmFyIFdlbGxLbm93blN5bWJvbHNTdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG52YXIgY3JlYXRlV2VsbEtub3duU3ltYm9sID0gVVNFX1NZTUJPTF9BU19VSUQgPyBTeW1ib2xbJ2ZvciddIHx8IFN5bWJvbCA6IFN5bWJvbCAmJiBTeW1ib2wud2l0aG91dFNldHRlciB8fCB1aWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgaWYgKCFoYXNPd24oV2VsbEtub3duU3ltYm9sc1N0b3JlLCBuYW1lKSkge1xuICAgIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IE5BVElWRV9TWU1CT0wgJiYgaGFzT3duKFN5bWJvbCwgbmFtZSlcbiAgICAgID8gU3ltYm9sW25hbWVdXG4gICAgICA6IGNyZWF0ZVdlbGxLbm93blN5bWJvbCgnU3ltYm9sLicgKyBuYW1lKTtcbiAgfSByZXR1cm4gV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciBvcmRpbmFyeVRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBUT19QUklNSVRJVkUgPSB3ZWxsS25vd25TeW1ib2woJ3RvUHJpbWl0aXZlJyk7XG5cbi8vIGBUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICBpZiAoIWlzT2JqZWN0KGlucHV0KSB8fCBpc1N5bWJvbChpbnB1dCkpIHJldHVybiBpbnB1dDtcbiAgdmFyIGV4b3RpY1RvUHJpbSA9IGdldE1ldGhvZChpbnB1dCwgVE9fUFJJTUlUSVZFKTtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKGV4b3RpY1RvUHJpbSkge1xuICAgIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnZGVmYXVsdCc7XG4gICAgcmVzdWx0ID0gY2FsbChleG90aWNUb1ByaW0sIGlucHV0LCBwcmVmKTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlc3VsdCkgfHwgaXNTeW1ib2wocmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbiAgfVxuICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ251bWJlcic7XG4gIHJldHVybiBvcmRpbmFyeVRvUHJpbWl0aXZlKGlucHV0LCBwcmVmKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xuXG4vLyBgVG9Qcm9wZXJ0eUtleWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJvcGVydHlrZXlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmd1bWVudCwgJ3N0cmluZycpO1xuICByZXR1cm4gaXNTeW1ib2woa2V5KSA/IGtleSA6IGtleSArICcnO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgZG9jdW1lbnQgPSBnbG9iYWxUaGlzLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgRVhJU1RTID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gRVhJU1RTID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG5cbi8vIFRoYW5rcyB0byBJRTggZm9yIGl0cyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGNyZWF0ZUVsZW1lbnQoJ2RpdicpLCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH1cbiAgfSkuYSAhPT0gNztcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlJyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXknKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yXG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JbmRleGVkT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXNPd24oTywgUCkpIHJldHVybiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoIWNhbGwocHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZiwgTywgUCksIE9bUF0pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBWOCB+IENocm9tZSAzNi1cbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMzMzRcbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAncHJvdG90eXBlJywge1xuICAgIHZhbHVlOiA0MixcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSkucHJvdG90eXBlICE9PSA0Mjtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyICRTdHJpbmcgPSBTdHJpbmc7XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogVHlwZShhcmd1bWVudCkgaXMgT2JqZWN0YFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGlzT2JqZWN0KGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcigkU3RyaW5nKGFyZ3VtZW50KSArICcgaXMgbm90IGFuIG9iamVjdCcpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xudmFyIFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Y4LXByb3RvdHlwZS1kZWZpbmUtYnVnJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXknKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciAkZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgRU5VTUVSQUJMRSA9ICdlbnVtZXJhYmxlJztcbnZhciBDT05GSUdVUkFCTEUgPSAnY29uZmlndXJhYmxlJztcbnZhciBXUklUQUJMRSA9ICd3cml0YWJsZSc7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydHlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydHlcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmICh0eXBlb2YgTyA9PT0gJ2Z1bmN0aW9uJyAmJiBQID09PSAncHJvdG90eXBlJyAmJiAndmFsdWUnIGluIEF0dHJpYnV0ZXMgJiYgV1JJVEFCTEUgaW4gQXR0cmlidXRlcyAmJiAhQXR0cmlidXRlc1tXUklUQUJMRV0pIHtcbiAgICB2YXIgY3VycmVudCA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gICAgaWYgKGN1cnJlbnQgJiYgY3VycmVudFtXUklUQUJMRV0pIHtcbiAgICAgIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICAgICAgQXR0cmlidXRlcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiBDT05GSUdVUkFCTEUgaW4gQXR0cmlidXRlcyA/IEF0dHJpYnV0ZXNbQ09ORklHVVJBQkxFXSA6IGN1cnJlbnRbQ09ORklHVVJBQkxFXSxcbiAgICAgICAgZW51bWVyYWJsZTogRU5VTUVSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tFTlVNRVJBQkxFXSA6IGN1cnJlbnRbRU5VTUVSQUJMRV0sXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgICAgfTtcbiAgICB9XG4gIH0gcmV0dXJuICRkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbn0gOiAkZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IG5ldyAkVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCcpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBrZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldERlc2NyaXB0b3IgPSBERVNDUklQVE9SUyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG52YXIgRVhJU1RTID0gaGFzT3duKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpO1xuLy8gYWRkaXRpb25hbCBwcm90ZWN0aW9uIGZyb20gbWluaWZpZWQgLyBtYW5nbGVkIC8gZHJvcHBlZCBmdW5jdGlvbiBuYW1lc1xudmFyIFBST1BFUiA9IEVYSVNUUyAmJiAoZnVuY3Rpb24gc29tZXRoaW5nKCkgeyAvKiBlbXB0eSAqLyB9KS5uYW1lID09PSAnc29tZXRoaW5nJztcbnZhciBDT05GSUdVUkFCTEUgPSBFWElTVFMgJiYgKCFERVNDUklQVE9SUyB8fCAoREVTQ1JJUFRPUlMgJiYgZ2V0RGVzY3JpcHRvcihGdW5jdGlvblByb3RvdHlwZSwgJ25hbWUnKS5jb25maWd1cmFibGUpKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEVYSVNUUzogRVhJU1RTLFxuICBQUk9QRVI6IFBST1BFUixcbiAgQ09ORklHVVJBQkxFOiBDT05GSUdVUkFCTEVcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxudmFyIGZ1bmN0aW9uVG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyhGdW5jdGlvbi50b1N0cmluZyk7XG5cbi8vIHRoaXMgaGVscGVyIGJyb2tlbiBpbiBgY29yZS1qc0AzLjQuMS0zLjQuNGAsIHNvIHdlIGNhbid0IHVzZSBgc2hhcmVkYCBoZWxwZXJcbmlmICghaXNDYWxsYWJsZShzdG9yZS5pbnNwZWN0U291cmNlKSkge1xuICBzdG9yZS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uVG9TdHJpbmcoaXQpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0b3JlLmluc3BlY3RTb3VyY2U7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciBXZWFrTWFwID0gZ2xvYmFsVGhpcy5XZWFrTWFwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQ2FsbGFibGUoV2Vha01hcCkgJiYgL25hdGl2ZSBjb2RlLy50ZXN0KFN0cmluZyhXZWFrTWFwKSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG5cbnZhciBrZXlzID0gc2hhcmVkKCdrZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4ga2V5c1trZXldIHx8IChrZXlzW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9XRUFLX01BUCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24nKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQgPSAnT2JqZWN0IGFscmVhZHkgaW5pdGlhbGl6ZWQnO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbFRoaXMuVHlwZUVycm9yO1xudmFyIFdlYWtNYXAgPSBnbG9iYWxUaGlzLldlYWtNYXA7XG52YXIgc2V0LCBnZXQsIGhhcztcblxudmFyIGVuZm9yY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGhhcyhpdCkgPyBnZXQoaXQpIDogc2V0KGl0LCB7fSk7XG59O1xuXG52YXIgZ2V0dGVyRm9yID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBzdGF0ZTtcbiAgICBpZiAoIWlzT2JqZWN0KGl0KSB8fCAoc3RhdGUgPSBnZXQoaXQpKS50eXBlICE9PSBUWVBFKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbmNvbXBhdGlibGUgcmVjZWl2ZXIsICcgKyBUWVBFICsgJyByZXF1aXJlZCcpO1xuICAgIH0gcmV0dXJuIHN0YXRlO1xuICB9O1xufTtcblxuaWYgKE5BVElWRV9XRUFLX01BUCB8fCBzaGFyZWQuc3RhdGUpIHtcbiAgdmFyIHN0b3JlID0gc2hhcmVkLnN0YXRlIHx8IChzaGFyZWQuc3RhdGUgPSBuZXcgV2Vha01hcCgpKTtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tc2VsZi1hc3NpZ24gLS0gcHJvdG90eXBlIG1ldGhvZHMgcHJvdGVjdGlvbiAqL1xuICBzdG9yZS5nZXQgPSBzdG9yZS5nZXQ7XG4gIHN0b3JlLmhhcyA9IHN0b3JlLmhhcztcbiAgc3RvcmUuc2V0ID0gc3RvcmUuc2V0O1xuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXNlbGYtYXNzaWduIC0tIHByb3RvdHlwZSBtZXRob2RzIHByb3RlY3Rpb24gKi9cbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIGlmIChzdG9yZS5oYXMoaXQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEKTtcbiAgICBtZXRhZGF0YS5mYWNhZGUgPSBpdDtcbiAgICBzdG9yZS5zZXQoaXQsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBzdG9yZS5nZXQoaXQpIHx8IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gc3RvcmUuaGFzKGl0KTtcbiAgfTtcbn0gZWxzZSB7XG4gIHZhciBTVEFURSA9IHNoYXJlZEtleSgnc3RhdGUnKTtcbiAgaGlkZGVuS2V5c1tTVEFURV0gPSB0cnVlO1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKGhhc093bihpdCwgU1RBVEUpKSB0aHJvdyBuZXcgVHlwZUVycm9yKE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEKTtcbiAgICBtZXRhZGF0YS5mYWNhZGUgPSBpdDtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoaXQsIFNUQVRFLCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSkgPyBpdFtTVEFURV0gOiB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGhhc093bihpdCwgU1RBVEUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXQsXG4gIGdldDogZ2V0LFxuICBoYXM6IGhhcyxcbiAgZW5mb3JjZTogZW5mb3JjZSxcbiAgZ2V0dGVyRm9yOiBnZXR0ZXJGb3Jcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1uYW1lJykuQ09ORklHVVJBQkxFO1xudmFyIGluc3BlY3RTb3VyY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG5cbnZhciBlbmZvcmNlSW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZW5mb3JjZTtcbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXQ7XG52YXIgJFN0cmluZyA9IFN0cmluZztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xudmFyIHJlcGxhY2UgPSB1bmN1cnJ5VGhpcygnJy5yZXBsYWNlKTtcbnZhciBqb2luID0gdW5jdXJyeVRoaXMoW10uam9pbik7XG5cbnZhciBDT05GSUdVUkFCTEVfTEVOR1RIID0gREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5KGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSwgJ2xlbmd0aCcsIHsgdmFsdWU6IDggfSkubGVuZ3RoICE9PSA4O1xufSk7XG5cbnZhciBURU1QTEFURSA9IFN0cmluZyhTdHJpbmcpLnNwbGl0KCdTdHJpbmcnKTtcblxudmFyIG1ha2VCdWlsdEluID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUsIG5hbWUsIG9wdGlvbnMpIHtcbiAgaWYgKHN0cmluZ1NsaWNlKCRTdHJpbmcobmFtZSksIDAsIDcpID09PSAnU3ltYm9sKCcpIHtcbiAgICBuYW1lID0gJ1snICsgcmVwbGFjZSgkU3RyaW5nKG5hbWUpLCAvXlN5bWJvbFxcKChbXildKilcXCkuKiQvLCAnJDEnKSArICddJztcbiAgfVxuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmdldHRlcikgbmFtZSA9ICdnZXQgJyArIG5hbWU7XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuc2V0dGVyKSBuYW1lID0gJ3NldCAnICsgbmFtZTtcbiAgaWYgKCFoYXNPd24odmFsdWUsICduYW1lJykgfHwgKENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FICYmIHZhbHVlLm5hbWUgIT09IG5hbWUpKSB7XG4gICAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ25hbWUnLCB7IHZhbHVlOiBuYW1lLCBjb25maWd1cmFibGU6IHRydWUgfSk7XG4gICAgZWxzZSB2YWx1ZS5uYW1lID0gbmFtZTtcbiAgfVxuICBpZiAoQ09ORklHVVJBQkxFX0xFTkdUSCAmJiBvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnYXJpdHknKSAmJiB2YWx1ZS5sZW5ndGggIT09IG9wdGlvbnMuYXJpdHkpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ2xlbmd0aCcsIHsgdmFsdWU6IG9wdGlvbnMuYXJpdHkgfSk7XG4gIH1cbiAgdHJ5IHtcbiAgICBpZiAob3B0aW9ucyAmJiBoYXNPd24ob3B0aW9ucywgJ2NvbnN0cnVjdG9yJykgJiYgb3B0aW9ucy5jb25zdHJ1Y3Rvcikge1xuICAgICAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ3Byb3RvdHlwZScsIHsgd3JpdGFibGU6IGZhbHNlIH0pO1xuICAgIC8vIGluIFY4IH4gQ2hyb21lIDUzLCBwcm90b3R5cGVzIG9mIHNvbWUgbWV0aG9kcywgbGlrZSBgQXJyYXkucHJvdG90eXBlLnZhbHVlc2AsIGFyZSBub24td3JpdGFibGVcbiAgICB9IGVsc2UgaWYgKHZhbHVlLnByb3RvdHlwZSkgdmFsdWUucHJvdG90eXBlID0gdW5kZWZpbmVkO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIHZhciBzdGF0ZSA9IGVuZm9yY2VJbnRlcm5hbFN0YXRlKHZhbHVlKTtcbiAgaWYgKCFoYXNPd24oc3RhdGUsICdzb3VyY2UnKSkge1xuICAgIHN0YXRlLnNvdXJjZSA9IGpvaW4oVEVNUExBVEUsIHR5cGVvZiBuYW1lID09ICdzdHJpbmcnID8gbmFtZSA6ICcnKTtcbiAgfSByZXR1cm4gdmFsdWU7XG59O1xuXG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1leHRlbmQtbmF0aXZlIC0tIHJlcXVpcmVkXG5GdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgPSBtYWtlQnVpbHRJbihmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIGlzQ2FsbGFibGUodGhpcykgJiYgZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKS5zb3VyY2UgfHwgaW5zcGVjdFNvdXJjZSh0aGlzKTtcbn0sICd0b1N0cmluZycpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIG1ha2VCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge307XG4gIHZhciBzaW1wbGUgPSBvcHRpb25zLmVudW1lcmFibGU7XG4gIHZhciBuYW1lID0gb3B0aW9ucy5uYW1lICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5hbWUgOiBrZXk7XG4gIGlmIChpc0NhbGxhYmxlKHZhbHVlKSkgbWFrZUJ1aWx0SW4odmFsdWUsIG5hbWUsIG9wdGlvbnMpO1xuICBpZiAob3B0aW9ucy5nbG9iYWwpIHtcbiAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgICBlbHNlIGRlZmluZUdsb2JhbFByb3BlcnR5KGtleSwgdmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIW9wdGlvbnMudW5zYWZlKSBkZWxldGUgT1trZXldO1xuICAgICAgZWxzZSBpZiAoT1trZXldKSBzaW1wbGUgPSB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgICBlbHNlIGRlZmluZVByb3BlcnR5TW9kdWxlLmYoTywga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogIW9wdGlvbnMubm9uQ29uZmlndXJhYmxlLFxuICAgICAgd3JpdGFibGU6ICFvcHRpb25zLm5vbldyaXRhYmxlXG4gICAgfSk7XG4gIH0gcmV0dXJuIE87XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcblxuLy8gYE1hdGgudHJ1bmNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1tYXRoLnRydW5jXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tbWF0aC10cnVuYyAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE1hdGgudHJ1bmMgfHwgZnVuY3Rpb24gdHJ1bmMoeCkge1xuICB2YXIgbiA9ICt4O1xuICByZXR1cm4gKG4gPiAwID8gZmxvb3IgOiBjZWlsKShuKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRydW5jID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL21hdGgtdHJ1bmMnKTtcblxuLy8gYFRvSW50ZWdlck9ySW5maW5pdHlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2ludGVnZXJvcmluZmluaXR5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIgbnVtYmVyID0gK2FyZ3VtZW50O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICByZXR1cm4gbnVtYmVyICE9PSBudW1iZXIgfHwgbnVtYmVyID09PSAwID8gMCA6IHRydW5jKG51bWJlcik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBIZWxwZXIgZm9yIGEgcG9wdWxhciByZXBlYXRpbmcgY2FzZSBvZiB0aGUgc3BlYzpcbi8vIExldCBpbnRlZ2VyIGJlID8gVG9JbnRlZ2VyKGluZGV4KS5cbi8vIElmIGludGVnZXIgPCAwLCBsZXQgcmVzdWx0IGJlIG1heCgobGVuZ3RoICsgaW50ZWdlciksIDApOyBlbHNlIGxldCByZXN1bHQgYmUgbWluKGludGVnZXIsIGxlbmd0aCkuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIHZhciBpbnRlZ2VyID0gdG9JbnRlZ2VyT3JJbmZpbml0eShpbmRleCk7XG4gIHJldHVybiBpbnRlZ2VyIDwgMCA/IG1heChpbnRlZ2VyICsgbGVuZ3RoLCAwKSA6IG1pbihpbnRlZ2VyLCBsZW5ndGgpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG5cbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gYFRvTGVuZ3RoYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9sZW5ndGhcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBsZW4gPSB0b0ludGVnZXJPckluZmluaXR5KGFyZ3VtZW50KTtcbiAgcmV0dXJuIGxlbiA+IDAgPyBtaW4obGVuLCAweDFGRkZGRkZGRkZGRkZGKSA6IDA7IC8vIDIgKiogNTMgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xuXG4vLyBgTGVuZ3RoT2ZBcnJheUxpa2VgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1sZW5ndGhvZmFycmF5bGlrZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0b0xlbmd0aChvYmoubGVuZ3RoKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUueyBpbmRleE9mLCBpbmNsdWRlcyB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IGxlbmd0aE9mQXJyYXlMaWtlKE8pO1xuICAgIGlmIChsZW5ndGggPT09IDApIHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9PSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgICAgaWYgKHZhbHVlICE9PSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgaWYgKChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSAmJiBPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbiAgaW5jbHVkZXM6IGNyZWF0ZU1ldGhvZCh0cnVlKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmRleE9mYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxuICBpbmRleE9mOiBjcmVhdGVNZXRob2QoZmFsc2UpXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGluZGV4T2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmRleE9mO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIHB1c2ggPSB1bmN1cnJ5VGhpcyhbXS5wdXNoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgIWhhc093bihoaWRkZW5LZXlzLCBrZXkpICYmIGhhc093bihPLCBrZXkpICYmIHB1c2gocmVzdWx0LCBrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzT3duKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHB1c2gocmVzdWx0LCBrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIElFOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSBbXG4gICdjb25zdHJ1Y3RvcicsXG4gICdoYXNPd25Qcm9wZXJ0eScsXG4gICdpc1Byb3RvdHlwZU9mJyxcbiAgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcbiAgJ3RvTG9jYWxlU3RyaW5nJyxcbiAgJ3RvU3RyaW5nJyxcbiAgJ3ZhbHVlT2YnXG5dO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG5cbnZhciBoaWRkZW5LZXlzID0gZW51bUJ1Z0tleXMuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eW5hbWVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5bmFtZXMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlzeW1ib2xzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbnZhciBjb25jYXQgPSB1bmN1cnJ5VGhpcyhbXS5jb25jYXQpO1xuXG4vLyBhbGwgb2JqZWN0IGtleXMsIGluY2x1ZGVzIG5vbi1lbnVtZXJhYmxlIGFuZCBzeW1ib2xzXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ1JlZmxlY3QnLCAnb3duS2V5cycpIHx8IGZ1bmN0aW9uIG93bktleXMoaXQpIHtcbiAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlLmYoYW5PYmplY3QoaXQpKTtcbiAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mO1xuICByZXR1cm4gZ2V0T3duUHJvcGVydHlTeW1ib2xzID8gY29uY2F0KGtleXMsIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkpIDoga2V5cztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgb3duS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vd24ta2V5cycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSwgZXhjZXB0aW9ucykge1xuICB2YXIga2V5cyA9IG93bktleXMoc291cmNlKTtcbiAgdmFyIGRlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHlNb2R1bGUuZjtcbiAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoIWhhc093bih0YXJnZXQsIGtleSkgJiYgIShleGNlcHRpb25zICYmIGhhc093bihleGNlcHRpb25zLCBrZXkpKSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgIH1cbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciByZXBsYWNlbWVudCA9IC8jfFxcLnByb3RvdHlwZVxcLi87XG5cbnZhciBpc0ZvcmNlZCA9IGZ1bmN0aW9uIChmZWF0dXJlLCBkZXRlY3Rpb24pIHtcbiAgdmFyIHZhbHVlID0gZGF0YVtub3JtYWxpemUoZmVhdHVyZSldO1xuICByZXR1cm4gdmFsdWUgPT09IFBPTFlGSUxMID8gdHJ1ZVxuICAgIDogdmFsdWUgPT09IE5BVElWRSA/IGZhbHNlXG4gICAgOiBpc0NhbGxhYmxlKGRldGVjdGlvbikgPyBmYWlscyhkZXRlY3Rpb24pXG4gICAgOiAhIWRldGVjdGlvbjtcbn07XG5cbnZhciBub3JtYWxpemUgPSBpc0ZvcmNlZC5ub3JtYWxpemUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gIHJldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKHJlcGxhY2VtZW50LCAnLicpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG52YXIgZGF0YSA9IGlzRm9yY2VkLmRhdGEgPSB7fTtcbnZhciBOQVRJVkUgPSBpc0ZvcmNlZC5OQVRJVkUgPSAnTic7XG52YXIgUE9MWUZJTEwgPSBpc0ZvcmNlZC5QT0xZRklMTCA9ICdQJztcblxubW9kdWxlLmV4cG9ydHMgPSBpc0ZvcmNlZDtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJykuZjtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG52YXIgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMnKTtcbnZhciBpc0ZvcmNlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1mb3JjZWQnKTtcblxuLypcbiAgb3B0aW9ucy50YXJnZXQgICAgICAgICAtIG5hbWUgb2YgdGhlIHRhcmdldCBvYmplY3RcbiAgb3B0aW9ucy5nbG9iYWwgICAgICAgICAtIHRhcmdldCBpcyB0aGUgZ2xvYmFsIG9iamVjdFxuICBvcHRpb25zLnN0YXQgICAgICAgICAgIC0gZXhwb3J0IGFzIHN0YXRpYyBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnByb3RvICAgICAgICAgIC0gZXhwb3J0IGFzIHByb3RvdHlwZSBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnJlYWwgICAgICAgICAgIC0gcmVhbCBwcm90b3R5cGUgbWV0aG9kIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy5mb3JjZWQgICAgICAgICAtIGV4cG9ydCBldmVuIGlmIHRoZSBuYXRpdmUgZmVhdHVyZSBpcyBhdmFpbGFibGVcbiAgb3B0aW9ucy5iaW5kICAgICAgICAgICAtIGJpbmQgbWV0aG9kcyB0byB0aGUgdGFyZ2V0LCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMud3JhcCAgICAgICAgICAgLSB3cmFwIGNvbnN0cnVjdG9ycyB0byBwcmV2ZW50aW5nIGdsb2JhbCBwb2xsdXRpb24sIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy51bnNhZmUgICAgICAgICAtIHVzZSB0aGUgc2ltcGxlIGFzc2lnbm1lbnQgb2YgcHJvcGVydHkgaW5zdGVhZCBvZiBkZWxldGUgKyBkZWZpbmVQcm9wZXJ0eVxuICBvcHRpb25zLnNoYW0gICAgICAgICAgIC0gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICBvcHRpb25zLmVudW1lcmFibGUgICAgIC0gZXhwb3J0IGFzIGVudW1lcmFibGUgcHJvcGVydHlcbiAgb3B0aW9ucy5kb250Q2FsbEdldFNldCAtIHByZXZlbnQgY2FsbGluZyBhIGdldHRlciBvbiB0YXJnZXRcbiAgb3B0aW9ucy5uYW1lICAgICAgICAgICAtIHRoZSAubmFtZSBvZiB0aGUgZnVuY3Rpb24gaWYgaXQgZG9lcyBub3QgbWF0Y2ggdGhlIGtleVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdGlvbnMsIHNvdXJjZSkge1xuICB2YXIgVEFSR0VUID0gb3B0aW9ucy50YXJnZXQ7XG4gIHZhciBHTE9CQUwgPSBvcHRpb25zLmdsb2JhbDtcbiAgdmFyIFNUQVRJQyA9IG9wdGlvbnMuc3RhdDtcbiAgdmFyIEZPUkNFRCwgdGFyZ2V0LCBrZXksIHRhcmdldFByb3BlcnR5LCBzb3VyY2VQcm9wZXJ0eSwgZGVzY3JpcHRvcjtcbiAgaWYgKEdMT0JBTCkge1xuICAgIHRhcmdldCA9IGdsb2JhbFRoaXM7XG4gIH0gZWxzZSBpZiAoU1RBVElDKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsVGhpc1tUQVJHRVRdIHx8IGRlZmluZUdsb2JhbFByb3BlcnR5KFRBUkdFVCwge30pO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldCA9IGdsb2JhbFRoaXNbVEFSR0VUXSAmJiBnbG9iYWxUaGlzW1RBUkdFVF0ucHJvdG90eXBlO1xuICB9XG4gIGlmICh0YXJnZXQpIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIHNvdXJjZVByb3BlcnR5ID0gc291cmNlW2tleV07XG4gICAgaWYgKG9wdGlvbnMuZG9udENhbGxHZXRTZXQpIHtcbiAgICAgIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICAgICAgdGFyZ2V0UHJvcGVydHkgPSBkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IudmFsdWU7XG4gICAgfSBlbHNlIHRhcmdldFByb3BlcnR5ID0gdGFyZ2V0W2tleV07XG4gICAgRk9SQ0VEID0gaXNGb3JjZWQoR0xPQkFMID8ga2V5IDogVEFSR0VUICsgKFNUQVRJQyA/ICcuJyA6ICcjJykgKyBrZXksIG9wdGlvbnMuZm9yY2VkKTtcbiAgICAvLyBjb250YWluZWQgaW4gdGFyZ2V0XG4gICAgaWYgKCFGT1JDRUQgJiYgdGFyZ2V0UHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGVvZiBzb3VyY2VQcm9wZXJ0eSA9PSB0eXBlb2YgdGFyZ2V0UHJvcGVydHkpIGNvbnRpbnVlO1xuICAgICAgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyhzb3VyY2VQcm9wZXJ0eSwgdGFyZ2V0UHJvcGVydHkpO1xuICAgIH1cbiAgICAvLyBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gICAgaWYgKG9wdGlvbnMuc2hhbSB8fCAodGFyZ2V0UHJvcGVydHkgJiYgdGFyZ2V0UHJvcGVydHkuc2hhbSkpIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShzb3VyY2VQcm9wZXJ0eSwgJ3NoYW0nLCB0cnVlKTtcbiAgICB9XG4gICAgZGVmaW5lQnVpbHRJbih0YXJnZXQsIGtleSwgc291cmNlUHJvcGVydHksIG9wdGlvbnMpO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbi8vIGBJc0FycmF5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNhcnJheVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LWlzYXJyYXkgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGNsYXNzb2YoYXJndW1lbnQpID09PSAnQXJyYXknO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIFNhZmFyaSA8IDEzIGRvZXMgbm90IHRocm93IGFuIGVycm9yIGluIHRoaXMgY2FzZVxudmFyIFNJTEVOVF9PTl9OT05fV1JJVEFCTEVfTEVOR1RIX1NFVCA9IERFU0NSSVBUT1JTICYmICFmdW5jdGlvbiAoKSB7XG4gIC8vIG1ha2VzIG5vIHNlbnNlIHdpdGhvdXQgcHJvcGVyIHN0cmljdCBtb2RlIHN1cHBvcnRcbiAgaWYgKHRoaXMgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHRydWU7XG4gIHRyeSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFtdLCAnbGVuZ3RoJywgeyB3cml0YWJsZTogZmFsc2UgfSkubGVuZ3RoID0gMTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3IgaW5zdGFuY2VvZiBUeXBlRXJyb3I7XG4gIH1cbn0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTSUxFTlRfT05fTk9OX1dSSVRBQkxFX0xFTkdUSF9TRVQgPyBmdW5jdGlvbiAoTywgbGVuZ3RoKSB7XG4gIGlmIChpc0FycmF5KE8pICYmICFnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgJ2xlbmd0aCcpLndyaXRhYmxlKSB7XG4gICAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Nhbm5vdCBzZXQgcmVhZCBvbmx5IC5sZW5ndGgnKTtcbiAgfSByZXR1cm4gTy5sZW5ndGggPSBsZW5ndGg7XG59IDogZnVuY3Rpb24gKE8sIGxlbmd0aCkge1xuICByZXR1cm4gTy5sZW5ndGggPSBsZW5ndGg7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSAweDFGRkZGRkZGRkZGRkZGOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA+IE1BWF9TQUZFX0lOVEVHRVIpIHRocm93ICRUeXBlRXJyb3IoJ01heGltdW0gYWxsb3dlZCBpbmRleCBleGNlZWRlZCcpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgc2V0QXJyYXlMZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2V0LWxlbmd0aCcpO1xudmFyIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2VzLW5vdC1leGNlZWQtc2FmZS1pbnRlZ2VyJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyIElOQ09SUkVDVF9UT19MRU5HVEggPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBbXS5wdXNoLmNhbGwoeyBsZW5ndGg6IDB4MTAwMDAwMDAwIH0sIDEpICE9PSA0Mjk0OTY3Mjk3O1xufSk7XG5cbi8vIFY4IDw9IDEyMSBhbmQgU2FmYXJpIDw9IDE1LjQ7IEZGIDwgMjMgdGhyb3dzIEludGVybmFsRXJyb3Jcbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTEyNjgxXG52YXIgcHJvcGVyRXJyb3JPbk5vbldyaXRhYmxlTGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShbXSwgJ2xlbmd0aCcsIHsgd3JpdGFibGU6IGZhbHNlIH0pLnB1c2goKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3IgaW5zdGFuY2VvZiBUeXBlRXJyb3I7XG4gIH1cbn07XG5cbnZhciBGT1JDRUQgPSBJTkNPUlJFQ1RfVE9fTEVOR1RIIHx8ICFwcm9wZXJFcnJvck9uTm9uV3JpdGFibGVMZW5ndGgoKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5wdXNoYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnB1c2hcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBhcml0eTogMSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnMgLS0gcmVxdWlyZWQgZm9yIGAubGVuZ3RoYFxuICBwdXNoOiBmdW5jdGlvbiBwdXNoKGl0ZW0pIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgIHZhciBsZW4gPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgICB2YXIgYXJnQ291bnQgPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlcihsZW4gKyBhcmdDb3VudCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdDb3VudDsgaSsrKSB7XG4gICAgICBPW2xlbl0gPSBhcmd1bWVudHNbaV07XG4gICAgICBsZW4rKztcbiAgICB9XG4gICAgc2V0QXJyYXlMZW5ndGgoTywgbGVuKTtcbiAgICByZXR1cm4gbGVuO1xuICB9XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUHJvdG90eXBlKSB7XG4gIGlmIChpc1Byb3RvdHlwZU9mKFByb3RvdHlwZSwgaXQpKSByZXR1cm4gaXQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKCdJbmNvcnJlY3QgaW52b2NhdGlvbicpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBGKCkgeyAvKiBlbXB0eSAqLyB9XG4gIEYucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gbnVsbDtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRwcm90b3R5cGVvZiAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKG5ldyBGKCkpICE9PSBGLnByb3RvdHlwZTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIENPUlJFQ1RfUFJPVE9UWVBFX0dFVFRFUiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3JyZWN0LXByb3RvdHlwZS1nZXR0ZXInKTtcblxudmFyIElFX1BST1RPID0gc2hhcmVkS2V5KCdJRV9QUk9UTycpO1xudmFyICRPYmplY3QgPSBPYmplY3Q7XG52YXIgT2JqZWN0UHJvdG90eXBlID0gJE9iamVjdC5wcm90b3R5cGU7XG5cbi8vIGBPYmplY3QuZ2V0UHJvdG90eXBlT2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0cHJvdG90eXBlb2Zcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0cHJvdG90eXBlb2YgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBDT1JSRUNUX1BST1RPVFlQRV9HRVRURVIgPyAkT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gKE8pIHtcbiAgdmFyIG9iamVjdCA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzT3duKG9iamVjdCwgSUVfUFJPVE8pKSByZXR1cm4gb2JqZWN0W0lFX1BST1RPXTtcbiAgdmFyIGNvbnN0cnVjdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yO1xuICBpZiAoaXNDYWxsYWJsZShjb25zdHJ1Y3RvcikgJiYgb2JqZWN0IGluc3RhbmNlb2YgY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBvYmplY3QgaW5zdGFuY2VvZiAkT2JqZWN0ID8gT2JqZWN0UHJvdG90eXBlIDogbnVsbDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIG1ha2VCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcikge1xuICBpZiAoZGVzY3JpcHRvci5nZXQpIG1ha2VCdWlsdEluKGRlc2NyaXB0b3IuZ2V0LCBuYW1lLCB7IGdldHRlcjogdHJ1ZSB9KTtcbiAgaWYgKGRlc2NyaXB0b3Iuc2V0KSBtYWtlQnVpbHRJbihkZXNjcmlwdG9yLnNldCwgbmFtZSwgeyBzZXR0ZXI6IHRydWUgfSk7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eS5mKHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIGlmIChERVNDUklQVE9SUykgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W2tleV0gPSB2YWx1ZTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxuLy8gYE9iamVjdC5rZXlzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmtleXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3Qta2V5cyAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdjgtcHJvdG90eXBlLWRlZmluZS1idWcnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgb2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cycpO1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnRpZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydGllc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0aWVzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTICYmICFWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIgcHJvcHMgPSB0b0luZGV4ZWRPYmplY3QoUHJvcGVydGllcyk7XG4gIHZhciBrZXlzID0gb2JqZWN0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYoTywga2V5ID0ga2V5c1tpbmRleCsrXSwgcHJvcHNba2V5XSk7XG4gIHJldHVybiBPO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCdkb2N1bWVudCcsICdkb2N1bWVudEVsZW1lbnQnKTtcbiIsICIndXNlIHN0cmljdCc7XG4vKiBnbG9iYWwgQWN0aXZlWE9iamVjdCAtLSBvbGQgSUUsIFdTSCAqL1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGRlZmluZVByb3BlcnRpZXNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2h0bWwnKTtcbnZhciBkb2N1bWVudENyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xuXG52YXIgR1QgPSAnPic7XG52YXIgTFQgPSAnPCc7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgU0NSSVBUID0gJ3NjcmlwdCc7XG52YXIgSUVfUFJPVE8gPSBzaGFyZWRLZXkoJ0lFX1BST1RPJyk7XG5cbnZhciBFbXB0eUNvbnN0cnVjdG9yID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuXG52YXIgc2NyaXB0VGFnID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgcmV0dXJuIExUICsgU0NSSVBUICsgR1QgKyBjb250ZW50ICsgTFQgKyAnLycgKyBTQ1JJUFQgKyBHVDtcbn07XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBBY3RpdmVYIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgTnVsbFByb3RvT2JqZWN0VmlhQWN0aXZlWCA9IGZ1bmN0aW9uIChhY3RpdmVYRG9jdW1lbnQpIHtcbiAgYWN0aXZlWERvY3VtZW50LndyaXRlKHNjcmlwdFRhZygnJykpO1xuICBhY3RpdmVYRG9jdW1lbnQuY2xvc2UoKTtcbiAgdmFyIHRlbXAgPSBhY3RpdmVYRG9jdW1lbnQucGFyZW50V2luZG93Lk9iamVjdDtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtYXNzaWdubWVudCAtLSBhdm9pZCBtZW1vcnkgbGVha1xuICBhY3RpdmVYRG9jdW1lbnQgPSBudWxsO1xuICByZXR1cm4gdGVtcDtcbn07XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBOdWxsUHJvdG9PYmplY3RWaWFJRnJhbWUgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSBkb2N1bWVudENyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICB2YXIgSlMgPSAnamF2YScgKyBTQ1JJUFQgKyAnOic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGh0bWwuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzQ3NVxuICBpZnJhbWUuc3JjID0gU3RyaW5nKEpTKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShzY3JpcHRUYWcoJ2RvY3VtZW50LkY9T2JqZWN0JykpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICByZXR1cm4gaWZyYW1lRG9jdW1lbnQuRjtcbn07XG5cbi8vIENoZWNrIGZvciBkb2N1bWVudC5kb21haW4gYW5kIGFjdGl2ZSB4IHN1cHBvcnRcbi8vIE5vIG5lZWQgdG8gdXNlIGFjdGl2ZSB4IGFwcHJvYWNoIHdoZW4gZG9jdW1lbnQuZG9tYWluIGlzIG5vdCBzZXRcbi8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW0vaXNzdWVzLzE1MFxuLy8gdmFyaWF0aW9uIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9raXRjYW1icmlkZ2UvZXM1LXNoaW0vY29tbWl0LzRmNzM4YWMwNjYzNDZcbi8vIGF2b2lkIElFIEdDIGJ1Z1xudmFyIGFjdGl2ZVhEb2N1bWVudDtcbnZhciBOdWxsUHJvdG9PYmplY3QgPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgYWN0aXZlWERvY3VtZW50ID0gbmV3IEFjdGl2ZVhPYmplY3QoJ2h0bWxmaWxlJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGlnbm9yZSAqLyB9XG4gIE51bGxQcm90b09iamVjdCA9IHR5cGVvZiBkb2N1bWVudCAhPSAndW5kZWZpbmVkJ1xuICAgID8gZG9jdW1lbnQuZG9tYWluICYmIGFjdGl2ZVhEb2N1bWVudFxuICAgICAgPyBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYKGFjdGl2ZVhEb2N1bWVudCkgLy8gb2xkIElFXG4gICAgICA6IE51bGxQcm90b09iamVjdFZpYUlGcmFtZSgpXG4gICAgOiBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYKGFjdGl2ZVhEb2N1bWVudCk7IC8vIFdTSFxuICB2YXIgbGVuZ3RoID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIGRlbGV0ZSBOdWxsUHJvdG9PYmplY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tsZW5ndGhdXTtcbiAgcmV0dXJuIE51bGxQcm90b09iamVjdCgpO1xufTtcblxuaGlkZGVuS2V5c1tJRV9QUk9UT10gPSB0cnVlO1xuXG4vLyBgT2JqZWN0LmNyZWF0ZWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5jcmVhdGVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtY3JlYXRlIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5Q29uc3RydWN0b3JbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eUNvbnN0cnVjdG9yKCk7XG4gICAgRW1wdHlDb25zdHJ1Y3RvcltQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBOdWxsUHJvdG9PYmplY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRlZmluZVByb3BlcnRpZXNNb2R1bGUuZihyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1jcmVhdGUnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZicpO1xudmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBCVUdHWV9TQUZBUklfSVRFUkFUT1JTID0gZmFsc2U7XG5cbi8vIGAlSXRlcmF0b3JQcm90b3R5cGUlYCBvYmplY3Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtJWl0ZXJhdG9ycHJvdG90eXBlJS1vYmplY3RcbnZhciBJdGVyYXRvclByb3RvdHlwZSwgUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlLCBhcnJheUl0ZXJhdG9yO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1hcnJheS1wcm90b3R5cGUta2V5cyAtLSBzYWZlICovXG5pZiAoW10ua2V5cykge1xuICBhcnJheUl0ZXJhdG9yID0gW10ua2V5cygpO1xuICAvLyBTYWZhcmkgOCBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgaWYgKCEoJ25leHQnIGluIGFycmF5SXRlcmF0b3IpKSBCVUdHWV9TQUZBUklfSVRFUkFUT1JTID0gdHJ1ZTtcbiAgZWxzZSB7XG4gICAgUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoZ2V0UHJvdG90eXBlT2YoYXJyYXlJdGVyYXRvcikpO1xuICAgIGlmIChQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpIEl0ZXJhdG9yUHJvdG90eXBlID0gUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG59XG5cbnZhciBORVdfSVRFUkFUT1JfUFJPVE9UWVBFID0gIWlzT2JqZWN0KEl0ZXJhdG9yUHJvdG90eXBlKSB8fCBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciB0ZXN0ID0ge307XG4gIC8vIEZGNDQtIGxlZ2FjeSBpdGVyYXRvcnMgY2FzZVxuICByZXR1cm4gSXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdLmNhbGwodGVzdCkgIT09IHRlc3Q7XG59KTtcblxuaWYgKE5FV19JVEVSQVRPUl9QUk9UT1RZUEUpIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5lbHNlIGlmIChJU19QVVJFKSBJdGVyYXRvclByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG5cbi8vIGAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy0laXRlcmF0b3Jwcm90b3R5cGUlLUBAaXRlcmF0b3JcbmlmICghaXNDYWxsYWJsZShJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0pKSB7XG4gIGRlZmluZUJ1aWx0SW4oSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgSXRlcmF0b3JQcm90b3R5cGU6IEl0ZXJhdG9yUHJvdG90eXBlLFxuICBCVUdHWV9TQUZBUklfSVRFUkFUT1JTOiBCVUdHWV9TQUZBUklfSVRFUkFUT1JTXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLWluc3RhbmNlJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgZGVmaW5lQnVpbHRJbkFjY2Vzc29yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbi1hY2Nlc3NvcicpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMtY29yZScpLkl0ZXJhdG9yUHJvdG90eXBlO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG5cbnZhciBDT05TVFJVQ1RPUiA9ICdjb25zdHJ1Y3Rvcic7XG52YXIgSVRFUkFUT1IgPSAnSXRlcmF0b3InO1xudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xudmFyIE5hdGl2ZUl0ZXJhdG9yID0gZ2xvYmFsVGhpc1tJVEVSQVRPUl07XG5cbi8vIEZGNTYtIGhhdmUgbm9uLXN0YW5kYXJkIGdsb2JhbCBoZWxwZXIgYEl0ZXJhdG9yYFxudmFyIEZPUkNFRCA9IElTX1BVUkVcbiAgfHwgIWlzQ2FsbGFibGUoTmF0aXZlSXRlcmF0b3IpXG4gIHx8IE5hdGl2ZUl0ZXJhdG9yLnByb3RvdHlwZSAhPT0gSXRlcmF0b3JQcm90b3R5cGVcbiAgLy8gRkY0NC0gbm9uLXN0YW5kYXJkIGBJdGVyYXRvcmAgcGFzc2VzIHByZXZpb3VzIHRlc3RzXG4gIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7IE5hdGl2ZUl0ZXJhdG9yKHt9KTsgfSk7XG5cbnZhciBJdGVyYXRvckNvbnN0cnVjdG9yID0gZnVuY3Rpb24gSXRlcmF0b3IoKSB7XG4gIGFuSW5zdGFuY2UodGhpcywgSXRlcmF0b3JQcm90b3R5cGUpO1xuICBpZiAoZ2V0UHJvdG90eXBlT2YodGhpcykgPT09IEl0ZXJhdG9yUHJvdG90eXBlKSB0aHJvdyBuZXcgJFR5cGVFcnJvcignQWJzdHJhY3QgY2xhc3MgSXRlcmF0b3Igbm90IGRpcmVjdGx5IGNvbnN0cnVjdGFibGUnKTtcbn07XG5cbnZhciBkZWZpbmVJdGVyYXRvclByb3RvdHlwZUFjY2Vzc29yID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgaWYgKERFU0NSSVBUT1JTKSB7XG4gICAgZGVmaW5lQnVpbHRJbkFjY2Vzc29yKEl0ZXJhdG9yUHJvdG90eXBlLCBrZXksIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAocmVwbGFjZW1lbnQpIHtcbiAgICAgICAgYW5PYmplY3QodGhpcyk7XG4gICAgICAgIGlmICh0aGlzID09PSBJdGVyYXRvclByb3RvdHlwZSkgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJZb3UgY2FuJ3QgcmVkZWZpbmUgdGhpcyBwcm9wZXJ0eVwiKTtcbiAgICAgICAgaWYgKGhhc093bih0aGlzLCBrZXkpKSB0aGlzW2tleV0gPSByZXBsYWNlbWVudDtcbiAgICAgICAgZWxzZSBjcmVhdGVQcm9wZXJ0eSh0aGlzLCBrZXksIHJlcGxhY2VtZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIEl0ZXJhdG9yUHJvdG90eXBlW2tleV0gPSB2YWx1ZTtcbn07XG5cbmlmICghaGFzT3duKEl0ZXJhdG9yUHJvdG90eXBlLCBUT19TVFJJTkdfVEFHKSkgZGVmaW5lSXRlcmF0b3JQcm90b3R5cGVBY2Nlc3NvcihUT19TVFJJTkdfVEFHLCBJVEVSQVRPUik7XG5cbmlmIChGT1JDRUQgfHwgIWhhc093bihJdGVyYXRvclByb3RvdHlwZSwgQ09OU1RSVUNUT1IpIHx8IEl0ZXJhdG9yUHJvdG90eXBlW0NPTlNUUlVDVE9SXSA9PT0gT2JqZWN0KSB7XG4gIGRlZmluZUl0ZXJhdG9yUHJvdG90eXBlQWNjZXNzb3IoQ09OU1RSVUNUT1IsIEl0ZXJhdG9yQ29uc3RydWN0b3IpO1xufVxuXG5JdGVyYXRvckNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IEl0ZXJhdG9yUHJvdG90eXBlO1xuXG4vLyBgSXRlcmF0b3JgIGNvbnN0cnVjdG9yXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWl0ZXJhdG9yXG4kKHsgZ2xvYmFsOiB0cnVlLCBjb25zdHJ1Y3RvcjogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICBJdGVyYXRvcjogSXRlcmF0b3JDb25zdHJ1Y3RvclxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gYEdldEl0ZXJhdG9yRGlyZWN0KG9iailgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1nZXRpdGVyYXRvcmRpcmVjdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB7XG4gICAgaXRlcmF0b3I6IG9iaixcbiAgICBuZXh0OiBvYmoubmV4dCxcbiAgICBkb25lOiBmYWxzZVxuICB9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzcmMsIG9wdGlvbnMpIHtcbiAgZm9yICh2YXIga2V5IGluIHNyYykgZGVmaW5lQnVpbHRJbih0YXJnZXQsIGtleSwgc3JjW2tleV0sIG9wdGlvbnMpO1xuICByZXR1cm4gdGFyZ2V0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBgQ3JlYXRlSXRlclJlc3VsdE9iamVjdGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWNyZWF0ZWl0ZXJyZXN1bHRvYmplY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlLCBkb25lKSB7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogZG9uZSB9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGtpbmQsIHZhbHVlKSB7XG4gIHZhciBpbm5lclJlc3VsdCwgaW5uZXJFcnJvcjtcbiAgYW5PYmplY3QoaXRlcmF0b3IpO1xuICB0cnkge1xuICAgIGlubmVyUmVzdWx0ID0gZ2V0TWV0aG9kKGl0ZXJhdG9yLCAncmV0dXJuJyk7XG4gICAgaWYgKCFpbm5lclJlc3VsdCkge1xuICAgICAgaWYgKGtpbmQgPT09ICd0aHJvdycpIHRocm93IHZhbHVlO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBpbm5lclJlc3VsdCA9IGNhbGwoaW5uZXJSZXN1bHQsIGl0ZXJhdG9yKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpbm5lckVycm9yID0gdHJ1ZTtcbiAgICBpbm5lclJlc3VsdCA9IGVycm9yO1xuICB9XG4gIGlmIChraW5kID09PSAndGhyb3cnKSB0aHJvdyB2YWx1ZTtcbiAgaWYgKGlubmVyRXJyb3IpIHRocm93IGlubmVyUmVzdWx0O1xuICBhbk9iamVjdChpbm5lclJlc3VsdCk7XG4gIHJldHVybiB2YWx1ZTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGl0ZXJhdG9yQ2xvc2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3ItY2xvc2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcnMsIGtpbmQsIHZhbHVlKSB7XG4gIGZvciAodmFyIGkgPSBpdGVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGlmIChpdGVyc1tpXSA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcbiAgICB0cnkge1xuICAgICAgdmFsdWUgPSBpdGVyYXRvckNsb3NlKGl0ZXJzW2ldLml0ZXJhdG9yLCBraW5kLCB2YWx1ZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGtpbmQgPSAndGhyb3cnO1xuICAgICAgdmFsdWUgPSBlcnJvcjtcbiAgICB9XG4gIH1cbiAgaWYgKGtpbmQgPT09ICd0aHJvdycpIHRocm93IHZhbHVlO1xuICByZXR1cm4gdmFsdWU7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZScpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBkZWZpbmVCdWlsdElucyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW5zJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzLWNvcmUnKS5JdGVyYXRvclByb3RvdHlwZTtcbnZhciBjcmVhdGVJdGVyUmVzdWx0T2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1pdGVyLXJlc3VsdC1vYmplY3QnKTtcbnZhciBpdGVyYXRvckNsb3NlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlJyk7XG52YXIgaXRlcmF0b3JDbG9zZUFsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1jbG9zZS1hbGwnKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG52YXIgSVRFUkFUT1JfSEVMUEVSID0gJ0l0ZXJhdG9ySGVscGVyJztcbnZhciBXUkFQX0ZPUl9WQUxJRF9JVEVSQVRPUiA9ICdXcmFwRm9yVmFsaWRJdGVyYXRvcic7XG52YXIgTk9STUFMID0gJ25vcm1hbCc7XG52YXIgVEhST1cgPSAndGhyb3cnO1xudmFyIHNldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLnNldDtcblxudmFyIGNyZWF0ZUl0ZXJhdG9yUHJveHlQcm90b3R5cGUgPSBmdW5jdGlvbiAoSVNfSVRFUkFUT1IpIHtcbiAgdmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldHRlckZvcihJU19JVEVSQVRPUiA/IFdSQVBfRk9SX1ZBTElEX0lURVJBVE9SIDogSVRFUkFUT1JfSEVMUEVSKTtcblxuICByZXR1cm4gZGVmaW5lQnVpbHRJbnMoY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKSwge1xuICAgIG5leHQ6IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpO1xuICAgICAgLy8gZm9yIHNpbXBsaWZpY2F0aW9uOlxuICAgICAgLy8gICBmb3IgYCVXcmFwRm9yVmFsaWRJdGVyYXRvclByb3RvdHlwZSUubmV4dGAgb3Igd2l0aCBgc3RhdGUucmV0dXJuSGFuZGxlclJlc3VsdGAgb3VyIGBuZXh0SGFuZGxlcmAgcmV0dXJucyBgSXRlclJlc3VsdE9iamVjdGBcbiAgICAgIC8vICAgZm9yIGAlSXRlcmF0b3JIZWxwZXJQcm90b3R5cGUlLm5leHRgIC0ganVzdCBhIHZhbHVlXG4gICAgICBpZiAoSVNfSVRFUkFUT1IpIHJldHVybiBzdGF0ZS5uZXh0SGFuZGxlcigpO1xuICAgICAgaWYgKHN0YXRlLmRvbmUpIHJldHVybiBjcmVhdGVJdGVyUmVzdWx0T2JqZWN0KHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gc3RhdGUubmV4dEhhbmRsZXIoKTtcbiAgICAgICAgcmV0dXJuIHN0YXRlLnJldHVybkhhbmRsZXJSZXN1bHQgPyByZXN1bHQgOiBjcmVhdGVJdGVyUmVzdWx0T2JqZWN0KHJlc3VsdCwgc3RhdGUuZG9uZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBzdGF0ZS5kb25lID0gdHJ1ZTtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgfSxcbiAgICAncmV0dXJuJzogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKTtcbiAgICAgIHZhciBpdGVyYXRvciA9IHN0YXRlLml0ZXJhdG9yO1xuICAgICAgc3RhdGUuZG9uZSA9IHRydWU7XG4gICAgICBpZiAoSVNfSVRFUkFUT1IpIHtcbiAgICAgICAgdmFyIHJldHVybk1ldGhvZCA9IGdldE1ldGhvZChpdGVyYXRvciwgJ3JldHVybicpO1xuICAgICAgICByZXR1cm4gcmV0dXJuTWV0aG9kID8gY2FsbChyZXR1cm5NZXRob2QsIGl0ZXJhdG9yKSA6IGNyZWF0ZUl0ZXJSZXN1bHRPYmplY3QodW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGlmIChzdGF0ZS5pbm5lcikgdHJ5IHtcbiAgICAgICAgaXRlcmF0b3JDbG9zZShzdGF0ZS5pbm5lci5pdGVyYXRvciwgTk9STUFMKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBUSFJPVywgZXJyb3IpO1xuICAgICAgfVxuICAgICAgaWYgKHN0YXRlLm9wZW5JdGVycykgdHJ5IHtcbiAgICAgICAgaXRlcmF0b3JDbG9zZUFsbChzdGF0ZS5vcGVuSXRlcnMsIE5PUk1BTCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JDbG9zZShpdGVyYXRvciwgVEhST1csIGVycm9yKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVyYXRvcikgaXRlcmF0b3JDbG9zZShpdGVyYXRvciwgTk9STUFMKTtcbiAgICAgIHJldHVybiBjcmVhdGVJdGVyUmVzdWx0T2JqZWN0KHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgfVxuICB9KTtcbn07XG5cbnZhciBXcmFwRm9yVmFsaWRJdGVyYXRvclByb3RvdHlwZSA9IGNyZWF0ZUl0ZXJhdG9yUHJveHlQcm90b3R5cGUodHJ1ZSk7XG52YXIgSXRlcmF0b3JIZWxwZXJQcm90b3R5cGUgPSBjcmVhdGVJdGVyYXRvclByb3h5UHJvdG90eXBlKGZhbHNlKTtcblxuY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KEl0ZXJhdG9ySGVscGVyUHJvdG90eXBlLCBUT19TVFJJTkdfVEFHLCAnSXRlcmF0b3IgSGVscGVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5leHRIYW5kbGVyLCBJU19JVEVSQVRPUiwgUkVUVVJOX0hBTkRMRVJfUkVTVUxUKSB7XG4gIHZhciBJdGVyYXRvclByb3h5ID0gZnVuY3Rpb24gSXRlcmF0b3IocmVjb3JkLCBzdGF0ZSkge1xuICAgIGlmIChzdGF0ZSkge1xuICAgICAgc3RhdGUuaXRlcmF0b3IgPSByZWNvcmQuaXRlcmF0b3I7XG4gICAgICBzdGF0ZS5uZXh0ID0gcmVjb3JkLm5leHQ7XG4gICAgfSBlbHNlIHN0YXRlID0gcmVjb3JkO1xuICAgIHN0YXRlLnR5cGUgPSBJU19JVEVSQVRPUiA/IFdSQVBfRk9SX1ZBTElEX0lURVJBVE9SIDogSVRFUkFUT1JfSEVMUEVSO1xuICAgIHN0YXRlLnJldHVybkhhbmRsZXJSZXN1bHQgPSAhIVJFVFVSTl9IQU5ETEVSX1JFU1VMVDtcbiAgICBzdGF0ZS5uZXh0SGFuZGxlciA9IG5leHRIYW5kbGVyO1xuICAgIHN0YXRlLmNvdW50ZXIgPSAwO1xuICAgIHN0YXRlLmRvbmUgPSBmYWxzZTtcbiAgICBzZXRJbnRlcm5hbFN0YXRlKHRoaXMsIHN0YXRlKTtcbiAgfTtcblxuICBJdGVyYXRvclByb3h5LnByb3RvdHlwZSA9IElTX0lURVJBVE9SID8gV3JhcEZvclZhbGlkSXRlcmF0b3JQcm90b3R5cGUgOiBJdGVyYXRvckhlbHBlclByb3RvdHlwZTtcblxuICByZXR1cm4gSXRlcmF0b3JQcm94eTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGl0ZXJhdG9yQ2xvc2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3ItY2xvc2UnKTtcblxuLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGZuLCB2YWx1ZSwgRU5UUklFUykge1xuICB0cnkge1xuICAgIHJldHVybiBFTlRSSUVTID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaXRlcmF0b3JDbG9zZShpdGVyYXRvciwgJ3Rocm93JywgZXJyb3IpO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIFNob3VsZCB0aHJvdyBhbiBlcnJvciBvbiBpbnZhbGlkIGl0ZXJhdG9yXG4vLyBodHRwczovL2lzc3Vlcy5jaHJvbWl1bS5vcmcvaXNzdWVzLzMzNjgzOTExNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobWV0aG9kTmFtZSwgYXJndW1lbnQpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWl0ZXJhdG9yIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHZhciBtZXRob2QgPSB0eXBlb2YgSXRlcmF0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBJdGVyYXRvci5wcm90b3R5cGVbbWV0aG9kTmFtZV07XG4gIGlmIChtZXRob2QpIHRyeSB7XG4gICAgbWV0aG9kLmNhbGwoeyBuZXh0OiBudWxsIH0sIGFyZ3VtZW50KS5uZXh0KCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvZWNtYTI2Mi9wdWxsLzM0Njdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FLCBFeHBlY3RlZEVycm9yKSB7XG4gIHZhciBJdGVyYXRvciA9IGdsb2JhbFRoaXMuSXRlcmF0b3I7XG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IEl0ZXJhdG9yICYmIEl0ZXJhdG9yLnByb3RvdHlwZTtcbiAgdmFyIG1ldGhvZCA9IEl0ZXJhdG9yUHJvdG90eXBlICYmIEl0ZXJhdG9yUHJvdG90eXBlW01FVEhPRF9OQU1FXTtcblxuICB2YXIgQ0xPU0VEID0gZmFsc2U7XG5cbiAgaWYgKG1ldGhvZCkgdHJ5IHtcbiAgICBtZXRob2QuY2FsbCh7XG4gICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB7IGRvbmU6IHRydWUgfTsgfSxcbiAgICAgICdyZXR1cm4nOiBmdW5jdGlvbiAoKSB7IENMT1NFRCA9IHRydWU7IH1cbiAgICB9LCAtMSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTI5MTE5NVxuICAgIGlmICghKGVycm9yIGluc3RhbmNlb2YgRXhwZWN0ZWRFcnJvcikpIENMT1NFRCA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKCFDTE9TRUQpIHJldHVybiBtZXRob2Q7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZ2V0SXRlcmF0b3JEaXJlY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLWRpcmVjdCcpO1xudmFyIGNyZWF0ZUl0ZXJhdG9yUHJveHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3ItY3JlYXRlLXByb3h5Jyk7XG52YXIgY2FsbFdpdGhTYWZlSXRlcmF0aW9uQ2xvc2luZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jYWxsLXdpdGgtc2FmZS1pdGVyYXRpb24tY2xvc2luZycpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIGl0ZXJhdG9yQ2xvc2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3ItY2xvc2UnKTtcbnZhciBpdGVyYXRvckhlbHBlclRocm93c09uSW52YWxpZEl0ZXJhdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWhlbHBlci10aHJvd3Mtb24taW52YWxpZC1pdGVyYXRvcicpO1xudmFyIGl0ZXJhdG9ySGVscGVyV2l0aG91dENsb3NpbmdPbkVhcmx5RXJyb3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3ItaGVscGVyLXdpdGhvdXQtY2xvc2luZy1vbi1lYXJseS1lcnJvcicpO1xuXG52YXIgRklMVEVSX1dJVEhPVVRfVEhST1dJTkdfT05fSU5WQUxJRF9JVEVSQVRPUiA9ICFJU19QVVJFICYmICFpdGVyYXRvckhlbHBlclRocm93c09uSW52YWxpZEl0ZXJhdG9yKCdmaWx0ZXInLCBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0pO1xudmFyIGZpbHRlcldpdGhvdXRDbG9zaW5nT25FYXJseUVycm9yID0gIUlTX1BVUkUgJiYgIUZJTFRFUl9XSVRIT1VUX1RIUk9XSU5HX09OX0lOVkFMSURfSVRFUkFUT1JcbiAgJiYgaXRlcmF0b3JIZWxwZXJXaXRob3V0Q2xvc2luZ09uRWFybHlFcnJvcignZmlsdGVyJywgVHlwZUVycm9yKTtcblxudmFyIEZPUkNFRCA9IElTX1BVUkUgfHwgRklMVEVSX1dJVEhPVVRfVEhST1dJTkdfT05fSU5WQUxJRF9JVEVSQVRPUiB8fCBmaWx0ZXJXaXRob3V0Q2xvc2luZ09uRWFybHlFcnJvcjtcblxudmFyIEl0ZXJhdG9yUHJveHkgPSBjcmVhdGVJdGVyYXRvclByb3h5KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGl0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcjtcbiAgdmFyIHByZWRpY2F0ZSA9IHRoaXMucHJlZGljYXRlO1xuICB2YXIgbmV4dCA9IHRoaXMubmV4dDtcbiAgdmFyIHJlc3VsdCwgZG9uZSwgdmFsdWU7XG4gIHdoaWxlICh0cnVlKSB7XG4gICAgcmVzdWx0ID0gYW5PYmplY3QoY2FsbChuZXh0LCBpdGVyYXRvcikpO1xuICAgIGRvbmUgPSB0aGlzLmRvbmUgPSAhIXJlc3VsdC5kb25lO1xuICAgIGlmIChkb25lKSByZXR1cm47XG4gICAgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgaWYgKGNhbGxXaXRoU2FmZUl0ZXJhdGlvbkNsb3NpbmcoaXRlcmF0b3IsIHByZWRpY2F0ZSwgW3ZhbHVlLCB0aGlzLmNvdW50ZXIrK10sIHRydWUpKSByZXR1cm4gdmFsdWU7XG4gIH1cbn0pO1xuXG4vLyBgSXRlcmF0b3IucHJvdG90eXBlLmZpbHRlcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWl0ZXJhdG9yLnByb3RvdHlwZS5maWx0ZXJcbiQoeyB0YXJnZXQ6ICdJdGVyYXRvcicsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKHByZWRpY2F0ZSkge1xuICAgIGFuT2JqZWN0KHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBhQ2FsbGFibGUocHJlZGljYXRlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaXRlcmF0b3JDbG9zZSh0aGlzLCAndGhyb3cnLCBlcnJvcik7XG4gICAgfVxuXG4gICAgaWYgKGZpbHRlcldpdGhvdXRDbG9zaW5nT25FYXJseUVycm9yKSByZXR1cm4gY2FsbChmaWx0ZXJXaXRob3V0Q2xvc2luZ09uRWFybHlFcnJvciwgdGhpcywgcHJlZGljYXRlKTtcblxuICAgIHJldHVybiBuZXcgSXRlcmF0b3JQcm94eShnZXRJdGVyYXRvckRpcmVjdCh0aGlzKSwge1xuICAgICAgcHJlZGljYXRlOiBwcmVkaWNhdGVcbiAgICB9KTtcbiAgfVxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNsYXNzb2ZSYXcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4pIHtcbiAgLy8gTmFzaG9ybiBidWc6XG4gIC8vICAgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzExMjhcbiAgLy8gICBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTEzMFxuICBpZiAoY2xhc3NvZlJhdyhmbikgPT09ICdGdW5jdGlvbicpIHJldHVybiB1bmN1cnJ5VGhpcyhmbik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMtY2xhdXNlJyk7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgYmluZCA9IHVuY3VycnlUaGlzKHVuY3VycnlUaGlzLmJpbmQpO1xuXG4vLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0KSB7XG4gIGFDYWxsYWJsZShmbik7XG4gIHJldHVybiB0aGF0ID09PSB1bmRlZmluZWQgPyBmbiA6IE5BVElWRV9CSU5EID8gYmluZChmbiwgdGhhdCkgOiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvdHlwZSA9IEFycmF5LnByb3RvdHlwZTtcblxuLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b3R5cGVbSVRFUkFUT1JdID09PSBpdCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG52YXIgdGVzdCA9IHt9O1xuXG50ZXN0W1RPX1NUUklOR19UQUddID0gJ3onO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0cmluZyh0ZXN0KSA9PT0gJ1tvYmplY3Qgel0nO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBUT19TVFJJTkdfVEFHX1NVUFBPUlQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nLXRhZy1zdXBwb3J0Jyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGNsYXNzb2ZSYXcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBDT1JSRUNUX0FSR1VNRU5UUyA9IGNsYXNzb2ZSYXcoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG4vLyBnZXR0aW5nIHRhZyBmcm9tIEVTNisgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgXG5tb2R1bGUuZXhwb3J0cyA9IFRPX1NUUklOR19UQUdfU1VQUE9SVCA/IGNsYXNzb2ZSYXcgOiBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIHRhZywgcmVzdWx0O1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAodGFnID0gdHJ5R2V0KE8gPSAkT2JqZWN0KGl0KSwgVE9fU1RSSU5HX1RBRykpID09ICdzdHJpbmcnID8gdGFnXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBDT1JSRUNUX0FSR1VNRU5UUyA/IGNsYXNzb2ZSYXcoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAocmVzdWx0ID0gY2xhc3NvZlJhdyhPKSkgPT09ICdPYmplY3QnICYmIGlzQ2FsbGFibGUoTy5jYWxsZWUpID8gJ0FyZ3VtZW50cycgOiByZXN1bHQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNOdWxsT3JVbmRlZmluZWQoaXQpKSByZXR1cm4gZ2V0TWV0aG9kKGl0LCBJVEVSQVRPUilcbiAgICB8fCBnZXRNZXRob2QoaXQsICdAQGl0ZXJhdG9yJylcbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0cnlUb1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90cnktdG8tc3RyaW5nJyk7XG52YXIgZ2V0SXRlcmF0b3JNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQsIHVzaW5nSXRlcmF0b3IpIHtcbiAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBnZXRJdGVyYXRvck1ldGhvZChhcmd1bWVudCkgOiB1c2luZ0l0ZXJhdG9yO1xuICBpZiAoYUNhbGxhYmxlKGl0ZXJhdG9yTWV0aG9kKSkgcmV0dXJuIGFuT2JqZWN0KGNhbGwoaXRlcmF0b3JNZXRob2QsIGFyZ3VtZW50KSk7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKHRyeVRvU3RyaW5nKGFyZ3VtZW50KSArICcgaXMgbm90IGl0ZXJhYmxlJyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRyeVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RyeS10by1zdHJpbmcnKTtcbnZhciBpc0FycmF5SXRlcmF0b3JNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXktaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciBpc1Byb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YnKTtcbnZhciBnZXRJdGVyYXRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3InKTtcbnZhciBnZXRJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgaXRlcmF0b3JDbG9zZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1jbG9zZScpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxudmFyIFJlc3VsdCA9IGZ1bmN0aW9uIChzdG9wcGVkLCByZXN1bHQpIHtcbiAgdGhpcy5zdG9wcGVkID0gc3RvcHBlZDtcbiAgdGhpcy5yZXN1bHQgPSByZXN1bHQ7XG59O1xuXG52YXIgUmVzdWx0UHJvdG90eXBlID0gUmVzdWx0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmFibGUsIHVuYm91bmRGdW5jdGlvbiwgb3B0aW9ucykge1xuICB2YXIgdGhhdCA9IG9wdGlvbnMgJiYgb3B0aW9ucy50aGF0O1xuICB2YXIgQVNfRU5UUklFUyA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5BU19FTlRSSUVTKTtcbiAgdmFyIElTX1JFQ09SRCA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5JU19SRUNPUkQpO1xuICB2YXIgSVNfSVRFUkFUT1IgPSAhIShvcHRpb25zICYmIG9wdGlvbnMuSVNfSVRFUkFUT1IpO1xuICB2YXIgSU5URVJSVVBURUQgPSAhIShvcHRpb25zICYmIG9wdGlvbnMuSU5URVJSVVBURUQpO1xuICB2YXIgZm4gPSBiaW5kKHVuYm91bmRGdW5jdGlvbiwgdGhhdCk7XG4gIHZhciBpdGVyYXRvciwgaXRlckZuLCBpbmRleCwgbGVuZ3RoLCByZXN1bHQsIG5leHQsIHN0ZXA7XG5cbiAgdmFyIHN0b3AgPSBmdW5jdGlvbiAoY29uZGl0aW9uKSB7XG4gICAgaWYgKGl0ZXJhdG9yKSBpdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCAnbm9ybWFsJyk7XG4gICAgcmV0dXJuIG5ldyBSZXN1bHQodHJ1ZSwgY29uZGl0aW9uKTtcbiAgfTtcblxuICB2YXIgY2FsbEZuID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKEFTX0VOVFJJRVMpIHtcbiAgICAgIGFuT2JqZWN0KHZhbHVlKTtcbiAgICAgIHJldHVybiBJTlRFUlJVUFRFRCA/IGZuKHZhbHVlWzBdLCB2YWx1ZVsxXSwgc3RvcCkgOiBmbih2YWx1ZVswXSwgdmFsdWVbMV0pO1xuICAgIH0gcmV0dXJuIElOVEVSUlVQVEVEID8gZm4odmFsdWUsIHN0b3ApIDogZm4odmFsdWUpO1xuICB9O1xuXG4gIGlmIChJU19SRUNPUkQpIHtcbiAgICBpdGVyYXRvciA9IGl0ZXJhYmxlLml0ZXJhdG9yO1xuICB9IGVsc2UgaWYgKElTX0lURVJBVE9SKSB7XG4gICAgaXRlcmF0b3IgPSBpdGVyYWJsZTtcbiAgfSBlbHNlIHtcbiAgICBpdGVyRm4gPSBnZXRJdGVyYXRvck1ldGhvZChpdGVyYWJsZSk7XG4gICAgaWYgKCFpdGVyRm4pIHRocm93IG5ldyAkVHlwZUVycm9yKHRyeVRvU3RyaW5nKGl0ZXJhYmxlKSArICcgaXMgbm90IGl0ZXJhYmxlJyk7XG4gICAgLy8gb3B0aW1pc2F0aW9uIGZvciBhcnJheSBpdGVyYXRvcnNcbiAgICBpZiAoaXNBcnJheUl0ZXJhdG9yTWV0aG9kKGl0ZXJGbikpIHtcbiAgICAgIGZvciAoaW5kZXggPSAwLCBsZW5ndGggPSBsZW5ndGhPZkFycmF5TGlrZShpdGVyYWJsZSk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICAgIHJlc3VsdCA9IGNhbGxGbihpdGVyYWJsZVtpbmRleF0pO1xuICAgICAgICBpZiAocmVzdWx0ICYmIGlzUHJvdG90eXBlT2YoUmVzdWx0UHJvdG90eXBlLCByZXN1bHQpKSByZXR1cm4gcmVzdWx0O1xuICAgICAgfSByZXR1cm4gbmV3IFJlc3VsdChmYWxzZSk7XG4gICAgfVxuICAgIGl0ZXJhdG9yID0gZ2V0SXRlcmF0b3IoaXRlcmFibGUsIGl0ZXJGbik7XG4gIH1cblxuICBuZXh0ID0gSVNfUkVDT1JEID8gaXRlcmFibGUubmV4dCA6IGl0ZXJhdG9yLm5leHQ7XG4gIHdoaWxlICghKHN0ZXAgPSBjYWxsKG5leHQsIGl0ZXJhdG9yKSkuZG9uZSkge1xuICAgIHRyeSB7XG4gICAgICByZXN1bHQgPSBjYWxsRm4oc3RlcC52YWx1ZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsICd0aHJvdycsIGVycm9yKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiByZXN1bHQgPT0gJ29iamVjdCcgJiYgcmVzdWx0ICYmIGlzUHJvdG90eXBlT2YoUmVzdWx0UHJvdG90eXBlLCByZXN1bHQpKSByZXR1cm4gcmVzdWx0O1xuICB9IHJldHVybiBuZXcgUmVzdWx0KGZhbHNlKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXRlcmF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRlJyk7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBnZXRJdGVyYXRvckRpcmVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItZGlyZWN0Jyk7XG52YXIgaXRlcmF0b3JDbG9zZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1jbG9zZScpO1xudmFyIGl0ZXJhdG9ySGVscGVyV2l0aG91dENsb3NpbmdPbkVhcmx5RXJyb3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3ItaGVscGVyLXdpdGhvdXQtY2xvc2luZy1vbi1lYXJseS1lcnJvcicpO1xuXG52YXIgZmluZFdpdGhvdXRDbG9zaW5nT25FYXJseUVycm9yID0gaXRlcmF0b3JIZWxwZXJXaXRob3V0Q2xvc2luZ09uRWFybHlFcnJvcignZmluZCcsIFR5cGVFcnJvcik7XG5cbi8vIGBJdGVyYXRvci5wcm90b3R5cGUuZmluZGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWl0ZXJhdG9yLnByb3RvdHlwZS5maW5kXG4kKHsgdGFyZ2V0OiAnSXRlcmF0b3InLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiBmaW5kV2l0aG91dENsb3NpbmdPbkVhcmx5RXJyb3IgfSwge1xuICBmaW5kOiBmdW5jdGlvbiBmaW5kKHByZWRpY2F0ZSkge1xuICAgIGFuT2JqZWN0KHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBhQ2FsbGFibGUocHJlZGljYXRlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaXRlcmF0b3JDbG9zZSh0aGlzLCAndGhyb3cnLCBlcnJvcik7XG4gICAgfVxuXG4gICAgaWYgKGZpbmRXaXRob3V0Q2xvc2luZ09uRWFybHlFcnJvcikgcmV0dXJuIGNhbGwoZmluZFdpdGhvdXRDbG9zaW5nT25FYXJseUVycm9yLCB0aGlzLCBwcmVkaWNhdGUpO1xuXG4gICAgdmFyIHJlY29yZCA9IGdldEl0ZXJhdG9yRGlyZWN0KHRoaXMpO1xuICAgIHZhciBjb3VudGVyID0gMDtcbiAgICByZXR1cm4gaXRlcmF0ZShyZWNvcmQsIGZ1bmN0aW9uICh2YWx1ZSwgc3RvcCkge1xuICAgICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgY291bnRlcisrKSkgcmV0dXJuIHN0b3AodmFsdWUpO1xuICAgIH0sIHsgSVNfUkVDT1JEOiB0cnVlLCBJTlRFUlJVUFRFRDogdHJ1ZSB9KS5yZXN1bHQ7XG4gIH1cbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGl0ZXJhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0ZScpO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZ2V0SXRlcmF0b3JEaXJlY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLWRpcmVjdCcpO1xudmFyIGl0ZXJhdG9yQ2xvc2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3ItY2xvc2UnKTtcbnZhciBpdGVyYXRvckhlbHBlcldpdGhvdXRDbG9zaW5nT25FYXJseUVycm9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWhlbHBlci13aXRob3V0LWNsb3Npbmctb24tZWFybHktZXJyb3InKTtcblxudmFyIGZvckVhY2hXaXRob3V0Q2xvc2luZ09uRWFybHlFcnJvciA9IGl0ZXJhdG9ySGVscGVyV2l0aG91dENsb3NpbmdPbkVhcmx5RXJyb3IoJ2ZvckVhY2gnLCBUeXBlRXJyb3IpO1xuXG4vLyBgSXRlcmF0b3IucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pdGVyYXRvci5wcm90b3R5cGUuZm9yZWFjaFxuJCh7IHRhcmdldDogJ0l0ZXJhdG9yJywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogZm9yRWFjaFdpdGhvdXRDbG9zaW5nT25FYXJseUVycm9yIH0sIHtcbiAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChmbikge1xuICAgIGFuT2JqZWN0KHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBhQ2FsbGFibGUoZm4pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpdGVyYXRvckNsb3NlKHRoaXMsICd0aHJvdycsIGVycm9yKTtcbiAgICB9XG5cbiAgICBpZiAoZm9yRWFjaFdpdGhvdXRDbG9zaW5nT25FYXJseUVycm9yKSByZXR1cm4gY2FsbChmb3JFYWNoV2l0aG91dENsb3NpbmdPbkVhcmx5RXJyb3IsIHRoaXMsIGZuKTtcblxuICAgIHZhciByZWNvcmQgPSBnZXRJdGVyYXRvckRpcmVjdCh0aGlzKTtcbiAgICB2YXIgY291bnRlciA9IDA7XG4gICAgaXRlcmF0ZShyZWNvcmQsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgZm4odmFsdWUsIGNvdW50ZXIrKyk7XG4gICAgfSwgeyBJU19SRUNPUkQ6IHRydWUgfSk7XG4gIH1cbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZ2V0SXRlcmF0b3JEaXJlY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLWRpcmVjdCcpO1xudmFyIGNyZWF0ZUl0ZXJhdG9yUHJveHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3ItY3JlYXRlLXByb3h5Jyk7XG52YXIgY2FsbFdpdGhTYWZlSXRlcmF0aW9uQ2xvc2luZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jYWxsLXdpdGgtc2FmZS1pdGVyYXRpb24tY2xvc2luZycpO1xudmFyIGl0ZXJhdG9yQ2xvc2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3ItY2xvc2UnKTtcbnZhciBpdGVyYXRvckhlbHBlclRocm93c09uSW52YWxpZEl0ZXJhdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWhlbHBlci10aHJvd3Mtb24taW52YWxpZC1pdGVyYXRvcicpO1xudmFyIGl0ZXJhdG9ySGVscGVyV2l0aG91dENsb3NpbmdPbkVhcmx5RXJyb3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3ItaGVscGVyLXdpdGhvdXQtY2xvc2luZy1vbi1lYXJseS1lcnJvcicpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xuXG52YXIgTUFQX1dJVEhPVVRfVEhST1dJTkdfT05fSU5WQUxJRF9JVEVSQVRPUiA9ICFJU19QVVJFICYmICFpdGVyYXRvckhlbHBlclRocm93c09uSW52YWxpZEl0ZXJhdG9yKCdtYXAnLCBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0pO1xudmFyIG1hcFdpdGhvdXRDbG9zaW5nT25FYXJseUVycm9yID0gIUlTX1BVUkUgJiYgIU1BUF9XSVRIT1VUX1RIUk9XSU5HX09OX0lOVkFMSURfSVRFUkFUT1JcbiAgJiYgaXRlcmF0b3JIZWxwZXJXaXRob3V0Q2xvc2luZ09uRWFybHlFcnJvcignbWFwJywgVHlwZUVycm9yKTtcblxudmFyIEZPUkNFRCA9IElTX1BVUkUgfHwgTUFQX1dJVEhPVVRfVEhST1dJTkdfT05fSU5WQUxJRF9JVEVSQVRPUiB8fCBtYXBXaXRob3V0Q2xvc2luZ09uRWFybHlFcnJvcjtcblxudmFyIEl0ZXJhdG9yUHJveHkgPSBjcmVhdGVJdGVyYXRvclByb3h5KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGl0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcjtcbiAgdmFyIHJlc3VsdCA9IGFuT2JqZWN0KGNhbGwodGhpcy5uZXh0LCBpdGVyYXRvcikpO1xuICB2YXIgZG9uZSA9IHRoaXMuZG9uZSA9ICEhcmVzdWx0LmRvbmU7XG4gIGlmICghZG9uZSkgcmV0dXJuIGNhbGxXaXRoU2FmZUl0ZXJhdGlvbkNsb3NpbmcoaXRlcmF0b3IsIHRoaXMubWFwcGVyLCBbcmVzdWx0LnZhbHVlLCB0aGlzLmNvdW50ZXIrK10sIHRydWUpO1xufSk7XG5cbi8vIGBJdGVyYXRvci5wcm90b3R5cGUubWFwYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXRlcmF0b3IucHJvdG90eXBlLm1hcFxuJCh7IHRhcmdldDogJ0l0ZXJhdG9yJywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgbWFwOiBmdW5jdGlvbiBtYXAobWFwcGVyKSB7XG4gICAgYW5PYmplY3QodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGFDYWxsYWJsZShtYXBwZXIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpdGVyYXRvckNsb3NlKHRoaXMsICd0aHJvdycsIGVycm9yKTtcbiAgICB9XG5cbiAgICBpZiAobWFwV2l0aG91dENsb3NpbmdPbkVhcmx5RXJyb3IpIHJldHVybiBjYWxsKG1hcFdpdGhvdXRDbG9zaW5nT25FYXJseUVycm9yLCB0aGlzLCBtYXBwZXIpO1xuXG4gICAgcmV0dXJuIG5ldyBJdGVyYXRvclByb3h5KGdldEl0ZXJhdG9yRGlyZWN0KHRoaXMpLCB7XG4gICAgICBtYXBwZXI6IG1hcHBlclxuICAgIH0pO1xuICB9XG59KTtcbiIsICJleHBvcnQgKiBmcm9tICdjaGluZXNlLWRheXMnO1xuIiwgInZhciBQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIFUgPSAociwgdCwgZSkgPT4gdCBpbiByID8gUChyLCB0LCB7IGVudW1lcmFibGU6ICEwLCBjb25maWd1cmFibGU6ICEwLCB3cml0YWJsZTogITAsIHZhbHVlOiBlIH0pIDogclt0XSA9IGU7XG52YXIgdyA9IChyLCB0LCBlKSA9PiBVKHIsIHR5cGVvZiB0ICE9IFwic3ltYm9sXCIgPyB0ICsgXCJcIiA6IHQsIGUpO1xuY29uc3QgbCA9IGNsYXNzIGwge1xuICBjb25zdHJ1Y3Rvcih0KSB7XG4gICAgdyh0aGlzLCBcIl9kYXRlXCIpO1xuICAgIHQgaW5zdGFuY2VvZiBsID8gdGhpcy5fZGF0ZSA9IG5ldyBEYXRlKHQudG9EYXRlKCkpIDogdCBpbnN0YW5jZW9mIERhdGUgPyB0aGlzLl9kYXRlID0gbmV3IERhdGUodCkgOiB0eXBlb2YgdCA9PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB0ID09IFwibnVtYmVyXCIgPyAodGhpcy5fZGF0ZSA9IG5ldyBEYXRlKHQpLCB0eXBlb2YgdCA9PSBcInN0cmluZ1wiICYmIGlzTmFOKHRoaXMuX2RhdGUuZ2V0VGltZSgpKSAmJiAodGhpcy5fZGF0ZSA9IG5ldyBEYXRlKHQucmVwbGFjZSgvLS9nLCBcIi9cIikpKSkgOiB0aGlzLl9kYXRlID0gLyogQF9fUFVSRV9fICovIG5ldyBEYXRlKCk7XG4gIH1cbiAgdG9EYXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRlO1xuICB9XG4gIGlzVmFsaWQoKSB7XG4gICAgcmV0dXJuICFpc05hTih0aGlzLl9kYXRlLmdldFRpbWUoKSk7XG4gIH1cbiAgZGlmZih0LCBlID0gXCJkYXlcIikge1xuICAgIGNvbnN0IGEgPSBuZXcgbCh0KS50b0RhdGUoKSwgbyA9IHRoaXMuX2RhdGUuZ2V0VGltZSgpIC0gYS5nZXRUaW1lKCk7XG4gICAgc3dpdGNoIChlKSB7XG4gICAgICBjYXNlIFwieWVhclwiOlxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZS5nZXRGdWxsWWVhcigpIC0gYS5nZXRGdWxsWWVhcigpO1xuICAgICAgY2FzZSBcIm1vbnRoXCI6XG4gICAgICAgIHJldHVybiAodGhpcy5fZGF0ZS5nZXRGdWxsWWVhcigpIC0gYS5nZXRGdWxsWWVhcigpKSAqIDEyICsgKHRoaXMuX2RhdGUuZ2V0TW9udGgoKSAtIGEuZ2V0TW9udGgoKSk7XG4gICAgICBjYXNlIFwiZGF5XCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihvIC8gKDFlMyAqIDYwICogNjAgKiAyNCkpO1xuICAgIH1cbiAgfVxuICBzdGFydE9mKHQpIHtcbiAgICBjb25zdCBlID0gbmV3IERhdGUodGhpcy5fZGF0ZSk7XG4gICAgc3dpdGNoICh0KSB7XG4gICAgICBjYXNlIFwieWVhclwiOlxuICAgICAgICBlLnNldE1vbnRoKDApLCBlLnNldERhdGUoMSksIGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm1vbnRoXCI6XG4gICAgICAgIGUuc2V0RGF0ZSgxKSwgZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZGF5XCI6XG4gICAgICAgIGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IGwoZSk7XG4gIH1cbiAgZW5kT2YodCkge1xuICAgIGNvbnN0IGUgPSBuZXcgRGF0ZSh0aGlzLl9kYXRlKTtcbiAgICBzd2l0Y2ggKHQpIHtcbiAgICAgIGNhc2UgXCJ5ZWFyXCI6XG4gICAgICAgIGUuc2V0TW9udGgoMTEpLCBlLnNldERhdGUoMzEpLCBlLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm1vbnRoXCI6XG4gICAgICAgIGUuc2V0RGF0ZShuZXcgRGF0ZShlLmdldEZ1bGxZZWFyKCksIGUuZ2V0TW9udGgoKSArIDEsIDApLmdldERhdGUoKSksIGUuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZGF5XCI6XG4gICAgICAgIGUuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBuZXcgbChlKTtcbiAgfVxuICBhZGQodCwgZSkge1xuICAgIGNvbnN0IGEgPSBuZXcgRGF0ZSh0aGlzLl9kYXRlKTtcbiAgICBzd2l0Y2ggKGUpIHtcbiAgICAgIGNhc2UgXCJ5ZWFyXCI6XG4gICAgICAgIGEuc2V0RnVsbFllYXIoYS5nZXRGdWxsWWVhcigpICsgdCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm1vbnRoXCI6XG4gICAgICAgIGEuc2V0TW9udGgoYS5nZXRNb250aCgpICsgdCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImRheVwiOlxuICAgICAgICBhLnNldERhdGUoYS5nZXREYXRlKCkgKyB0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBuZXcgbChhKTtcbiAgfVxuICBzdWJ0cmFjdCh0LCBlKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRkKC10LCBlKTtcbiAgfVxuICBmb3JtYXQodCkge1xuICAgIGNvbnN0IGUgPSB7XG4gICAgICBZWVlZOiB0aGlzLl9kYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICBNTTogKHRoaXMuX2RhdGUuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpLFxuICAgICAgREQ6IHRoaXMuX2RhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpLFxuICAgICAgSEg6IHRoaXMuX2RhdGUuZ2V0SG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKSxcbiAgICAgIG1tOiB0aGlzLl9kYXRlLmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKSxcbiAgICAgIHNzOiB0aGlzLl9kYXRlLmdldFNlY29uZHMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKSxcbiAgICAgIGRkZGQ6IGwuZGF5c09mV2Vla1t0aGlzLl9kYXRlLmdldERheSgpXVxuICAgIH07XG4gICAgcmV0dXJuIHQucmVwbGFjZSgvWVlZWXxNTXxERHxISHxtbXxzc3xkZGRkL2csIChhKSA9PiBlW2FdLnRvU3RyaW5nKCkpO1xuICB9XG4gIHllYXIodCkge1xuICAgIGlmICh0ID09PSB2b2lkIDApIHJldHVybiB0aGlzLl9kYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgZSA9IG5ldyBEYXRlKHRoaXMuX2RhdGUpO1xuICAgIHJldHVybiBlLnNldEZ1bGxZZWFyKHQpLCBuZXcgbChlKTtcbiAgfVxuICBtb250aCh0KSB7XG4gICAgaWYgKHQgPT09IHZvaWQgMCkgcmV0dXJuIHRoaXMuX2RhdGUuZ2V0TW9udGgoKTtcbiAgICBjb25zdCBlID0gbmV3IERhdGUodGhpcy5fZGF0ZSk7XG4gICAgcmV0dXJuIGUuc2V0TW9udGgodCksIG5ldyBsKGUpO1xuICB9XG4gIGRhdGUodCkge1xuICAgIGlmICh0ID09PSB2b2lkIDApIHJldHVybiB0aGlzLl9kYXRlLmdldERhdGUoKTtcbiAgICBjb25zdCBlID0gbmV3IERhdGUodGhpcy5fZGF0ZSk7XG4gICAgcmV0dXJuIGUuc2V0RGF0ZSh0KSwgbmV3IGwoZSk7XG4gIH1cbiAgZGF5KHQpIHtcbiAgICBpZiAodCA9PT0gdm9pZCAwKVxuICAgICAgcmV0dXJuIHRoaXMuX2RhdGUuZ2V0RGF5KCk7XG4gICAge1xuICAgICAgY29uc3QgZSA9IHRoaXMuX2RhdGUuZ2V0RGF5KCksIGEgPSB0IC0gZSwgbyA9IG5ldyBEYXRlKHRoaXMuX2RhdGUpO1xuICAgICAgcmV0dXJuIG8uc2V0RGF0ZSh0aGlzLl9kYXRlLmdldERhdGUoKSArIGEpLCBuZXcgbChvKTtcbiAgICB9XG4gIH1cbiAgaXNCZWZvcmUodCkge1xuICAgIGNvbnN0IGUgPSBuZXcgbCh0KS50b0RhdGUoKTtcbiAgICByZXR1cm4gdGhpcy5fZGF0ZS5nZXRUaW1lKCkgPCBlLmdldFRpbWUoKTtcbiAgfVxuICBpc0FmdGVyKHQpIHtcbiAgICBjb25zdCBlID0gbmV3IGwodCkudG9EYXRlKCk7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGUuZ2V0VGltZSgpID4gZS5nZXRUaW1lKCk7XG4gIH1cbiAgaXNTYW1lKHQsIGUgPSBcImRheVwiKSB7XG4gICAgY29uc3QgYSA9IG5ldyBsKHQpLnRvRGF0ZSgpO1xuICAgIHN3aXRjaCAoZSkge1xuICAgICAgY2FzZSBcInllYXJcIjpcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGUuZ2V0RnVsbFllYXIoKSA9PT0gYS5nZXRGdWxsWWVhcigpO1xuICAgICAgY2FzZSBcIm1vbnRoXCI6XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRlLmdldEZ1bGxZZWFyKCkgPT09IGEuZ2V0RnVsbFllYXIoKSAmJiB0aGlzLl9kYXRlLmdldE1vbnRoKCkgPT09IGEuZ2V0TW9udGgoKTtcbiAgICAgIGNhc2UgXCJkYXlcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRlLmdldEZ1bGxZZWFyKCkgPT09IGEuZ2V0RnVsbFllYXIoKSAmJiB0aGlzLl9kYXRlLmdldE1vbnRoKCkgPT09IGEuZ2V0TW9udGgoKSAmJiB0aGlzLl9kYXRlLmdldERhdGUoKSA9PT0gYS5nZXREYXRlKCk7XG4gICAgfVxuICB9XG4gIGlzQmV0d2Vlbih0LCBlLCBhKSB7XG4gICAgY29uc3QgbyA9IG5ldyBsKHQpLnN0YXJ0T2YoYSkudG9EYXRlKCksIHMgPSBuZXcgbChlKS5lbmRPZihhKS50b0RhdGUoKSwgbiA9IHRoaXMudG9EYXRlKCk7XG4gICAgcmV0dXJuIG4gPj0gbyAmJiBuIDw9IHM7XG4gIH1cbn07XG53KGwsIFwiZGF5c09mV2Vla1wiLCBbXG4gIFwiU3VuZGF5XCIsXG4gIFwiTW9uZGF5XCIsXG4gIFwiVHVlc2RheVwiLFxuICBcIldlZG5lc2RheVwiLFxuICBcIlRodXJzZGF5XCIsXG4gIFwiRnJpZGF5XCIsXG4gIFwiU2F0dXJkYXlcIlxuXSk7XG5sZXQgUyA9IGw7XG5jb25zdCBoID0gKHIpID0+IG5ldyBTKHIpLCB1ID0gKHIpID0+IGgocikuc3RhcnRPZihcImRheVwiKSwgWSA9IChyLCB0KSA9PiB7XG4gIHIgPSB1KHIpLCB0ID0gdSh0KTtcbiAgY29uc3QgZSA9IHQuZGlmZihyLCBcImRheVwiKTtcbiAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IGUgKyAxIH0sIChhLCBvKSA9PiByLmFkZChvLCBcImRheVwiKSk7XG59LCBXID0ge1xuICAvLyAxOTk5IOWFg+aXpiAxIOWkqeOAgeaYpeiKguOAgeWKs+WKqOiKguOAgeWbveW6huiKguaUvuWBhyAz5aSpXG4gIDE5OTk6IHtcbiAgICBcIk5ldyBZZWFyJ3MgRGF5LOWFg+aXplwiOiAxLFxuICAgIFwiU3ByaW5nIEZlc3RpdmFsLOaYpeiKglwiOiAzLFxuICAgIFwiTGFib3VyIERheSzlirPliqjoioJcIjogMyxcbiAgICBcIk5hdGlvbmFsIERheSzlm73luoboioJcIjogM1xuICB9LFxuICAvLyAyMDA4IOWKs+WKqOiKguaUueS4uiAxIOWkqe+8jOWinuWKoOa4heaYjuOAgeerr+WNiOOAgeS4reeni+WQhCAxIOWkqVxuICAyMDA4OiB7XG4gICAgXCJUb21iLXN3ZWVwaW5nIERheSzmuIXmmI5cIjogMSxcbiAgICBcIkxhYm91ciBEYXks5Yqz5Yqo6IqCXCI6IDEsXG4gICAgXCJEcmFnb24gQm9hdCBGZXN0aXZhbCznq6/ljYhcIjogMSxcbiAgICBcIk1pZC1hdXR1bW4gRmVzdGl2YWws5Lit56eLXCI6IDFcbiAgfSxcbiAgLy8gMjAxNCDmmKXoioLliZTpmaTpmaTlpJXvvIzmlLnkuLrliJ3kuIDjgIHkuozjgIHkuInvvIzkvp3ml6cgMyDlpKlcbiAgLy8gMjAxNSDlop7liqAg5Lit5Zu95Lq65rCR5oqX5pel5oiY5LqJ5pqo5LiW55WM5Y+N5rOV6KW/5pav5oiY5LqJ6IOc5YipNzDlkajlubTnuqrlv7Xml6UgMSDlpKlcbiAgMjAxNToge1xuICAgIFwiQW50aS1GYXNjaXN0IDcwdGggRGF5LOS4reWbveS6uuawkeaKl+aXpeaImOS6ieaaqOS4lueVjOWPjeazleilv+aWr+aImOS6ieiDnOWIqTcw5ZGo5bm057qq5b+15pelXCI6IDFcbiAgfSxcbiAgLy8gMjAyNSDmmKXoioLlkozlirPliqjoioIg5ZCE5aKe5YqgIDEg5aSpXG4gIDIwMjU6IHtcbiAgICBcIlNwcmluZyBGZXN0aXZhbCzmmKXoioJcIjogNCxcbiAgICBcIkxhYm91ciBEYXks5Yqz5Yqo6IqCXCI6IDJcbiAgfVxufTtcbmNsYXNzIHoge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB3KHRoaXMsIFwiZGF5RGV0YWlsc1wiLCB7fSk7XG4gICAgdyh0aGlzLCBcImhvbGlkYXlzXCIsIHt9KTtcbiAgICB3KHRoaXMsIFwid29ya2RheXNcIiwge30pO1xuICAgIHcodGhpcywgXCJpbkxpZXVEYXlzXCIsIHt9KTtcbiAgfVxuICAvKiogeWVhciBhdCAqL1xuICB5KHQpIHtcbiAgICByZXR1cm4gdGhpcy5kYXlEZXRhaWxzLnllYXIgPSB0LCB0aGlzO1xuICB9XG4gIC8qKiDmn6Xor6Lmn5DlubQg6IqC5YGH5pel5aSp5pWwICovXG4gIGdldEhvbGlkYXlEYXlzKHQsIGUpIHtcbiAgICBsZXQgYSA9IDA7XG4gICAgZm9yIChjb25zdCBbbywgc10gb2YgT2JqZWN0LmVudHJpZXMoVykpIHtcbiAgICAgIGlmIChwYXJzZUludChvKSA+IHQpIGJyZWFrO1xuICAgICAgc1tlXSAhPT0gdm9pZCAwICYmIChhID0gc1tlXSk7XG4gICAgfVxuICAgIHJldHVybiBhO1xuICB9XG4gIG1hcmsodCkge1xuICAgIHJldHVybiB0aGlzLmRheURldGFpbHMuaG9saWRheSA9IHQsIHRoaXM7XG4gIH1cbiAgc2F2ZSh0LCBlLCBhKSB7XG4gICAgaWYgKCF0aGlzLmRheURldGFpbHMueWVhcilcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInNob3VsZCBzZXQgeWVhciBiZWZvcmUgc2F2aW5nIGhvbGlkYXlcIik7XG4gICAgaWYgKCF0aGlzLmRheURldGFpbHMuaG9saWRheSlcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInNob3VsZCBzZXQgaG9saWRheSBiZWZvcmUgc2F2aW5nIGhvbGlkYXlcIik7XG4gICAgdGhpcy5kYXlEZXRhaWxzLm1vbnRoID0gdCwgdGhpcy5kYXlEZXRhaWxzLmRheSA9IGUsIHRoaXMuZGF5RGV0YWlscy5kYXlUeXBlID0gYTtcbiAgICBjb25zdCBvID0gaChgJHt0aGlzLmRheURldGFpbHMueWVhcn0tJHt0fS0ke2V9YCkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSwgcyA9IHRoaXMuZ2V0SG9saWRheURheXModGhpcy5kYXlEZXRhaWxzLnllYXIsIHRoaXMuZGF5RGV0YWlscy5ob2xpZGF5KSwgbiA9IGAke3RoaXMuZGF5RGV0YWlscy5ob2xpZGF5fSwke3N9YDtcbiAgICByZXR1cm4gYSA9PT0gMiA/IHRoaXMuaG9saWRheXNbb10gPSBuIDogYSA9PT0gMSA/IHRoaXMud29ya2RheXNbb10gPSBuIDogYSA9PT0gMyAmJiAodGhpcy5pbkxpZXVEYXlzW29dID0gbiksIHRoaXM7XG4gIH1cbiAgdG8odCwgZSkge1xuICAgIGlmICghdGhpcy5kYXlEZXRhaWxzLmhvbGlkYXkgfHwgIXRoaXMuZGF5RGV0YWlscy55ZWFyIHx8ICF0aGlzLmRheURldGFpbHMubW9udGggfHwgIXRoaXMuZGF5RGV0YWlscy5kYXkpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzaG91bGQgc2V0IHllYXIvbW9udGgvZGF5IGJlZm9yZSBzYXZpbmcgaG9saWRheSByYW5nZVwiKTtcbiAgICBjb25zdCBhID0gaChcbiAgICAgIGAke3RoaXMuZGF5RGV0YWlscy55ZWFyfS0ke3RoaXMuZGF5RGV0YWlscy5tb250aH0tJHt0aGlzLmRheURldGFpbHMuZGF5fWBcbiAgICApLCBvID0gaChgJHt0aGlzLmRheURldGFpbHMueWVhcn0tJHt0fS0ke2V9YCk7XG4gICAgaWYgKG8uaXNCZWZvcmUoYSkgfHwgby5pc1NhbWUoYSkpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJlbmQgZGF0ZSBzaG91bGQgYmUgYWZ0ZXIgc3RhcnQgZGF0ZVwiKTtcbiAgICBjb25zdCBzID0gdGhpcy5nZXRIb2xpZGF5RGF5cyh0aGlzLmRheURldGFpbHMueWVhciwgdGhpcy5kYXlEZXRhaWxzLmhvbGlkYXkpLCBuID0gYCR7dGhpcy5kYXlEZXRhaWxzLmhvbGlkYXl9LCR7c31gLCBkID0gby5kaWZmKGEsIFwiZGF5XCIpO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGQ7IGkrKykge1xuICAgICAgY29uc3QgXyA9IGEuYWRkKGksIFwiZGF5XCIpLmZvcm1hdChcIllZWVktTU0tRERcIik7XG4gICAgICB0aGlzLmRheURldGFpbHMuZGF5VHlwZSA9PT0gMiA/IHRoaXMuaG9saWRheXNbX10gPSBuIDogdGhpcy5kYXlEZXRhaWxzLmRheVR5cGUgPT09IDEgPyB0aGlzLndvcmtkYXlzW19dID0gbiA6IHRoaXMuZGF5RGV0YWlscy5kYXlUeXBlID09PSAzICYmICh0aGlzLmluTGlldURheXNbX10gPSBuKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqIHdvcmsgZGF5ICovXG4gIHcodCwgZSkge1xuICAgIHJldHVybiB0aGlzLnNhdmUoXG4gICAgICB0LFxuICAgICAgZSxcbiAgICAgIDFcbiAgICAgIC8qIFdvcmtkYXkgKi9cbiAgICApO1xuICB9XG4gIC8qKiByZXN0ICovXG4gIHIodCwgZSkge1xuICAgIHJldHVybiB0aGlzLnNhdmUoXG4gICAgICB0LFxuICAgICAgZSxcbiAgICAgIDJcbiAgICAgIC8qIEhvbGlkYXkgKi9cbiAgICApO1xuICB9XG4gIC8qKiBpbi1saWV1ICovXG4gIGkodCwgZSkge1xuICAgIHJldHVybiB0aGlzLnNhdmUoXG4gICAgICB0LFxuICAgICAgZSxcbiAgICAgIDNcbiAgICAgIC8qIEluTGlldSAqL1xuICAgICk7XG4gIH1cbiAgLyoqIE5ldyBZZWFyJ3MgRGF5IOWFg+aXpiAqL1xuICBueSgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXJrKFxuICAgICAgXCJOZXcgWWVhcidzIERheSzlhYPml6ZcIlxuICAgICAgLyogTlkgKi9cbiAgICApO1xuICB9XG4gIC8qKiBTcHJpbmcgRmVzdGl2YWwg5pil6IqCICovXG4gIHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFyayhcbiAgICAgIFwiU3ByaW5nIEZlc3RpdmFsLOaYpeiKglwiXG4gICAgICAvKiBTICovXG4gICAgKTtcbiAgfVxuICAvKiogVG9tYi1zd2VlcGluZyBEYXkg5riF5piOICovXG4gIHQoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFyayhcbiAgICAgIFwiVG9tYi1zd2VlcGluZyBEYXks5riF5piOXCJcbiAgICAgIC8qIFQgKi9cbiAgICApO1xuICB9XG4gIC8qKiBMYWJvdXIgRGF5IOS6lOS4gCAqL1xuICBsKCkge1xuICAgIHJldHVybiB0aGlzLm1hcmsoXG4gICAgICBcIkxhYm91ciBEYXks5Yqz5Yqo6IqCXCJcbiAgICAgIC8qIEwgKi9cbiAgICApO1xuICB9XG4gIC8qKiBEcmFnb24gQm9hdCBGZXN0aXZhbCDnq6/ljYggKi9cbiAgZCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXJrKFxuICAgICAgXCJEcmFnb24gQm9hdCBGZXN0aXZhbCznq6/ljYhcIlxuICAgICAgLyogRCAqL1xuICAgICk7XG4gIH1cbiAgLyoqIE5hdGlvbmFsIERheSDlm73luoboioIgKi9cbiAgbigpIHtcbiAgICByZXR1cm4gdGhpcy5tYXJrKFxuICAgICAgXCJOYXRpb25hbCBEYXks5Zu95bqG6IqCXCJcbiAgICAgIC8qIE4gKi9cbiAgICApO1xuICB9XG4gIC8qKiBNaWQtYXV0dW1uIEZlc3RpdmFsIOS4reeniyAqL1xuICBtKCkge1xuICAgIHJldHVybiB0aGlzLm1hcmsoXG4gICAgICBcIk1pZC1hdXR1bW4gRmVzdGl2YWws5Lit56eLXCJcbiAgICAgIC8qIE0gKi9cbiAgICApO1xuICB9XG4gIC8qKiBBbnRpLUZhc2Npc3QgNzB0aCBEYXkg5Lit5Zu95Lq65rCR5oqX5pel5oiY5LqJ5pqo5LiW55WM5Y+N5rOV6KW/5pav5oiY5LqJ6IOc5YipNzDlkajlubTnuqrlv7Xml6UgKi9cbiAgYSgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXJrKFxuICAgICAgXCJBbnRpLUZhc2Npc3QgNzB0aCBEYXks5Lit5Zu95Lq65rCR5oqX5pel5oiY5LqJ5pqo5LiW55WM5Y+N5rOV6KW/5pav5oiY5LqJ6IOc5YipNzDlkajlubTnuqrlv7Xml6VcIlxuICAgICAgLyogQSAqL1xuICAgICk7XG4gIH1cbn1cbmNvbnN0IFYgPSAoKSA9PiB7XG4gIGNvbnN0IHIgPSBuZXcgeigpO1xuICByZXR1cm4gci55KDIwMjUpLm55KCkucigxLCAxKS5zKCkucigxLCAyOCkudG8oMiwgNCkudygxLCAyNikudygyLCA4KS5pKDIsIDMpLmkoMiwgNCkudCgpLnIoNCwgNCkudG8oNCwgNikubCgpLnIoNSwgMSkudG8oNSwgNSkudyg0LCAyNykuaSg1LCA1KS5kKCkucig1LCAzMSkudG8oNiwgMikubigpLnIoMTAsIDEpLnRvKDEwLCA4KS53KDksIDI4KS53KDEwLCAxMSkuaSgxMCwgNykuaSgxMCwgOCkubSgpLnIoMTAsIDYpLCByLnkoMjAyNCkubnkoKS5yKDEsIDEpLnMoKS5yKDIsIDEwKS50bygyLCAxNykudygyLCA0KS53KDIsIDE4KS5pKDIsIDE1KS50bygyLCAxNikudCgpLnIoNCwgNCkudG8oNCwgNikudyg0LCA3KS5pKDQsIDUpLmwoKS5yKDUsIDEpLnRvKDUsIDUpLncoNCwgMjgpLncoNSwgMTEpLmkoNSwgMikudG8oNSwgMykuZCgpLnIoNiwgMTApLm0oKS5yKDksIDE1KS50byg5LCAxNykudyg5LCAxNCkuaSg5LCAxNikubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDksIDI5KS53KDEwLCAxMikuaSgxMCwgNCkuaSgxMCwgNyksIHIueSgyMDIzKS5ueSgpLnIoMSwgMSkudG8oMSwgMikucygpLnIoMSwgMjEpLnRvKDEsIDI3KS53KDEsIDI4KS50bygxLCAyOSkuaSgxLCAyNikudG8oMSwgMjcpLnQoKS5yKDQsIDUpLmwoKS5yKDQsIDI5KS50byg1LCAzKS53KDQsIDIzKS53KDUsIDYpLmkoNSwgMikudG8oNSwgMykuZCgpLnIoNiwgMjIpLnRvKDYsIDI0KS53KDYsIDI1KS5pKDYsIDIzKS5tKCkucig5LCAyOSkubigpLnIoOSwgMzApLnRvKDEwLCA2KS53KDEwLCA3KS50bygxMCwgOCkuaSgxMCwgNSkudG8oMTAsIDYpLCByLnkoMjAyMikubnkoKS5yKDEsIDEpLnRvKDEsIDMpLnMoKS5yKDEsIDMxKS50bygyLCA2KS53KDEsIDI5KS53KDEsIDMwKS5pKDIsIDMpLnRvKDIsIDQpLnQoKS5yKDQsIDMpLnRvKDQsIDUpLncoNCwgMikuaSg0LCA0KS5sKCkucig0LCAzMCkudG8oNSwgNCkudyg0LCAyNCkudyg1LCA3KS5pKDUsIDMpLnRvKDUsIDQpLmQoKS5yKDYsIDMpLnRvKDYsIDUpLm0oKS5yKDksIDEwKS50byg5LCAxMikubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDEwLCA4KS53KDEwLCA5KS5pKDEwLCA2KS50bygxMCwgNykubnkoKS5yKDEyLCAzMSksIHIueSgyMDIxKS5ueSgpLnIoMSwgMSkudG8oMSwgMykucygpLnIoMiwgMTEpLnRvKDIsIDE3KS53KDIsIDcpLncoMiwgMjApLmkoMiwgMTYpLnRvKDIsIDE3KS50KCkucig0LCAzKS50byg0LCA1KS5sKCkucig1LCAxKS50byg1LCA1KS53KDQsIDI1KS53KDUsIDgpLmkoNSwgNCkudG8oNSwgNSkuZCgpLnIoNiwgMTIpLnRvKDYsIDE0KS5tKCkucig5LCAxOSkudG8oOSwgMjEpLncoOSwgMTgpLmkoOSwgMjApLm4oKS5yKDEwLCAxKS50bygxMCwgNykudyg5LCAyNikudygxMCwgOSkuaSgxMCwgNikudG8oMTAsIDcpLCByLnkoMjAyMCkubnkoKS5yKDEsIDEpLnMoKS5yKDEsIDI0KS50bygyLCAyKS53KDEsIDE5KS5pKDEsIDI5KS50KCkucig0LCA0KS50byg0LCA2KS5sKCkucig1LCAxKS50byg1LCA1KS53KDQsIDI2KS53KDUsIDkpLmkoNSwgNCkudG8oNSwgNSkuZCgpLnIoNiwgMjUpLnRvKDYsIDI3KS53KDYsIDI4KS5pKDYsIDI2KS5uKCkucigxMCwgMSkudG8oMTAsIDgpLncoOSwgMjcpLncoMTAsIDEwKS5pKDEwLCA3KS50bygxMCwgOCksIHIueSgyMDE5KS5ueSgpLnIoMSwgMSkucygpLnIoMiwgNCkudG8oMiwgMTApLncoMiwgMikudG8oMiwgMykuaSgyLCA0KS5pKDIsIDgpLnQoKS5yKDQsIDUpLnRvKDQsIDcpLmwoKS5yKDUsIDEpLnRvKDUsIDQpLncoNCwgMjgpLncoNSwgNSkuaSg1LCAyKS5pKDUsIDMpLmQoKS5yKDYsIDcpLnRvKDYsIDkpLm0oKS5yKDksIDEzKS50byg5LCAxNSkubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDksIDI5KS53KDEwLCAxMikuaSgxMCwgNCkuaSgxMCwgNyksIHIueSgyMDE4KS5ueSgpLnIoMSwgMSkucygpLnIoMiwgMTUpLnRvKDIsIDIxKS53KDIsIDExKS53KDIsIDI0KS5pKDIsIDE5KS50bygyLCAyMSkudCgpLnIoNCwgNSkudG8oNCwgNykudyg0LCA4KS5pKDQsIDYpLmwoKS5yKDQsIDI5KS50byg1LCAxKS53KDQsIDI4KS5pKDQsIDMwKS5kKCkucig2LCAxOCkubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDksIDI5KS50byg5LCAzMCkuaSgxMCwgNCkudG8oMTAsIDUpLm0oKS5yKDksIDI0KS5ueSgpLnIoMTIsIDMwKS50bygxMiwgMzEpLncoMTIsIDI5KS5pKDEyLCAzMSksIHIueSgyMDE3KS5ueSgpLnIoMSwgMSkudG8oMSwgMikucygpLnIoMSwgMjcpLnRvKDIsIDIpLncoMSwgMjIpLncoMiwgNCkuaSgyLCAxKS50bygyLCAyKS50KCkucig0LCAyKS50byg0LCA0KS53KDQsIDEpLmkoNCwgMykubCgpLnIoNSwgMSkuZCgpLnIoNSwgMjgpLnRvKDUsIDMwKS53KDUsIDI3KS5pKDUsIDI5KS5uKCkucigxMCwgMSkudG8oMTAsIDgpLncoOSwgMzApLmkoMTAsIDYpLm0oKS5yKDEwLCA0KSwgci55KDIwMTYpLm55KCkucigxLCAxKS5zKCkucigyLCA3KS50bygyLCAxMykudygyLCA2KS53KDIsIDE0KS5pKDIsIDExKS50bygyLCAxMikudCgpLnIoNCwgNCkubCgpLnIoNSwgMSkudG8oNSwgMikuZCgpLnIoNiwgOSkudG8oNiwgMTEpLncoNiwgMTIpLmkoNiwgMTApLm0oKS5yKDksIDE1KS50byg5LCAxNykudyg5LCAxOCkuaSg5LCAxNikubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDEwLCA4KS50bygxMCwgOSkuaSgxMCwgNikudG8oMTAsIDcpLCByLnkoMjAxNSkubnkoKS5yKDEsIDEpLnRvKDEsIDMpLncoMSwgNCkuaSgxLCAyKS5zKCkucigyLCAxOCkudG8oMiwgMjQpLncoMiwgMTUpLncoMiwgMjgpLmkoMiwgMjMpLnRvKDIsIDI0KS50KCkucig0LCA1KS50byg0LCA2KS5sKCkucig1LCAxKS5kKCkucig2LCAyMCkucig2LCAyMikubSgpLnIoOSwgMjcpLm4oKS5yKDEwLCAxKS50bygxMCwgNykudygxMCwgMTApLmkoMTAsIDcpLmEoKS5yKDksIDMpLnRvKDksIDQpLncoOSwgNikuaSg5LCA0KSwgci55KDIwMTQpLm55KCkucigxLCAxKS5zKCkucigxLCAzMSkudG8oMiwgNikudygxLCAyNikudygyLCA4KS5pKDIsIDUpLnRvKDIsIDYpLnQoKS5yKDQsIDUpLnRvKDQsIDcpLmwoKS5yKDUsIDEpLnRvKDUsIDMpLncoNSwgNCkuaSg1LCAyKS5kKCkucig2LCAyKS5tKCkucig5LCA4KS5uKCkucigxMCwgMSkudG8oMTAsIDcpLncoOSwgMjgpLncoMTAsIDExKS5pKDEwLCA2KS50bygxMCwgNyksIHIueSgyMDEzKS5ueSgpLnIoMSwgMSkudG8oMSwgMykudygxLCA1KS50bygxLCA2KS5pKDEsIDIpLnRvKDEsIDMpLnMoKS5yKDIsIDkpLnRvKDIsIDE1KS53KDIsIDE2KS50bygyLCAxNykuaSgyLCAxNCkudG8oMiwgMTUpLnQoKS5yKDQsIDQpLnRvKDQsIDYpLncoNCwgNykuaSg0LCA1KS5sKCkucig0LCAyOSkudG8oNSwgMSkudyg0LCAyNykudG8oNCwgMjgpLmkoNCwgMjkpLnRvKDQsIDMwKS5kKCkucig2LCAxMCkudG8oNiwgMTIpLncoNiwgOCkudG8oNiwgOSkuaSg2LCAxMCkudG8oNiwgMTEpLm0oKS5yKDksIDE5KS50byg5LCAyMSkudyg5LCAyMikuaSg5LCAyMCkubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDksIDI5KS53KDEwLCAxMikuaSgxMCwgNCkuaSgxMCwgNyksIHIueSgyMDEyKS5ueSgpLnIoMSwgMSkudG8oMSwgMykuaSgxLCAzKS5zKCkucigxLCAyMikudG8oMSwgMjgpLncoMSwgMjEpLncoMSwgMjkpLmkoMSwgMjYpLnRvKDEsIDI3KS50KCkucig0LCAyKS50byg0LCA0KS53KDMsIDMxKS53KDQsIDEpLmkoNCwgMikudG8oNCwgMykubCgpLnIoNCwgMjkpLnRvKDUsIDEpLncoNCwgMjgpLmkoNCwgMzApLmQoKS5yKDYsIDIyKS5yKDYsIDI0KS5tKCkucig5LCAzMCkubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDksIDI5KS5pKDEwLCA1KSwgci55KDIwMTEpLm55KCkucigxLCAxKS50bygxLCAzKS5zKCkucigyLCAyKS50bygyLCA4KS53KDEsIDMwKS53KDIsIDEyKS5pKDIsIDcpLnRvKDIsIDgpLnQoKS5yKDQsIDMpLnRvKDQsIDUpLncoNCwgMikuaSg0LCA0KS5sKCkucig0LCAzMCkudG8oNSwgMikuZCgpLnIoNiwgNCkucig2LCA2KS5tKCkucig5LCAxMCkudG8oOSwgMTIpLm4oKS5yKDEwLCAxKS50bygxMCwgNykudygxMCwgOCkudG8oMTAsIDkpLmkoMTAsIDYpLnRvKDEwLCA3KS5ueSgpLncoMTIsIDMxKSwgci55KDIwMTApLm55KCkucigxLCAxKS50bygxLCAzKS5zKCkucigyLCAxMykudG8oMiwgMTkpLncoMiwgMjApLnRvKDIsIDIxKS5pKDIsIDE4KS50bygyLCAxOSkudCgpLnIoNCwgMykudG8oNCwgNSkubCgpLnIoNSwgMSkudG8oNSwgMykuZCgpLnIoNiwgMTQpLnRvKDYsIDE2KS53KDYsIDEyKS50byg2LCAxMykuaSg2LCAxNCkudG8oNiwgMTUpLm0oKS5yKDksIDIyKS50byg5LCAyNCkudyg5LCAxOSkudyg5LCAyNSkuaSg5LCAyMykudG8oOSwgMjQpLm4oKS5yKDEwLCAxKS50bygxMCwgNykudyg5LCAyNikudygxMCwgOSkuaSgxMCwgNikudG8oMTAsIDcpLCByLnkoMjAwOSkubnkoKS5yKDEsIDEpLnRvKDEsIDMpLncoMSwgNCkuaSgxLCAyKS5zKCkucigxLCAyNSkudG8oMSwgMzEpLncoMSwgMjQpLncoMiwgMSkuaSgxLCAyOSkudG8oMSwgMzApLnQoKS5yKDQsIDQpLnRvKDQsIDYpLmwoKS5yKDUsIDEpLnRvKDUsIDMpLmQoKS5yKDUsIDI4KS50byg1LCAzMCkudyg1LCAzMSkuaSg1LCAyOSkubigpLnIoMTAsIDEpLnRvKDEwLCA4KS53KDksIDI3KS53KDEwLCAxMCkuaSgxMCwgNykudG8oMTAsIDgpLm0oKS5yKDEwLCAzKSwgci55KDIwMDgpLm55KCkucigxLCAxKS5zKCkucigyLCA2KS50bygyLCAxMikudygyLCAyKS50bygyLCAzKS5pKDIsIDExKS50bygyLCAxMikudCgpLnIoNCwgNCkudG8oNCwgNikubCgpLnIoNSwgMSkudG8oNSwgMykudyg1LCA0KS5pKDUsIDIpLmQoKS5yKDYsIDcpLnRvKDYsIDkpLm0oKS5yKDksIDEzKS50byg5LCAxNSkubigpLnIoOSwgMjkpLnRvKDEwLCA1KS53KDksIDI3KS50byg5LCAyOCkuaSg5LCAyOSkudG8oOSwgMzApLCByLnkoMjAwNykubnkoKS5yKDEsIDEpLnRvKDEsIDMpLmkoMSwgMikudG8oMSwgMykucygpLnIoMiwgMTgpLnRvKDIsIDI0KS53KDIsIDE3KS53KDIsIDI1KS5pKDIsIDIyKS50bygyLCAyMykubCgpLnIoNSwgMSkudG8oNSwgNykudyg0LCAyOCkudG8oNCwgMjkpLmkoNSwgNCkuaSg1LCA3KS5uKCkucigxMCwgMSkudG8oMTAsIDcpLncoOSwgMjkpLnRvKDksIDMwKS5pKDEwLCA0KS50bygxMCwgNSkubnkoKS5yKDEyLCAzMCkudG8oMTIsIDMxKS53KDEyLCAyOSkuaSgxMiwgMzEpLCByLnkoMjAwNikubnkoKS5yKDEsIDEpLnRvKDEsIDMpLnMoKS5yKDEsIDI5KS50bygyLCA0KS53KDEsIDI4KS53KDIsIDUpLmkoMiwgMikudG8oMiwgMykubCgpLnIoNSwgMSkudG8oNSwgNykudyg0LCAyOSkudG8oNCwgMzApLmkoNSwgNCkudG8oNSwgNSkubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDksIDMwKS53KDEwLCA4KS5pKDEwLCA1KS50bygxMCwgNikubnkoKS53KDEyLCAzMCkudG8oMTIsIDMxKSwgci55KDIwMDUpLm55KCkucigxLCAxKS50bygxLCAzKS5zKCkucigyLCA5KS50bygyLCAxNSkudygyLCA1KS50bygyLCA2KS5pKDIsIDE0KS50bygyLCAxNSkubCgpLnIoNSwgMSkudG8oNSwgNykudyg0LCAzMCkudyg1LCA4KS5pKDUsIDUpLnRvKDUsIDYpLm4oKS5yKDEwLCAxKS50bygxMCwgNykudygxMCwgOCkudG8oMTAsIDkpLmkoMTAsIDYpLnRvKDEwLCA3KSwgci55KDIwMDQpLm55KCkucigxLCAxKS5zKCkucigxLCAyMikudG8oMSwgMjgpLncoMSwgMTcpLnRvKDEsIDE4KS5pKDEsIDI3KS50bygxLCAyOCkubCgpLnIoNSwgMSkudG8oNSwgNykudyg1LCA4KS50byg1LCA5KS5pKDUsIDYpLnRvKDUsIDcpLm4oKS5yKDEwLCAxKS50bygxMCwgNykudygxMCwgOSkudG8oMTAsIDEwKS5pKDEwLCA2KS50bygxMCwgNyksIHtcbiAgICBob2xpZGF5czogci5ob2xpZGF5cyxcbiAgICB3b3JrZGF5czogci53b3JrZGF5cyxcbiAgICBpbkxpZXVEYXlzOiByLmluTGlldURheXNcbiAgfTtcbn0sIHsgaG9saWRheXM6IE0sIHdvcmtkYXlzOiBrLCBpbkxpZXVEYXlzOiBaIH0gPSBWKCksIGMgPSAocikgPT4ge1xuICBjb25zdCB0ID0gdShyKTtcbiAgaWYgKCF0LmlzVmFsaWQoKSlcbiAgICB0aHJvdyBuZXcgRXJyb3IoYHVuc3VwcG9ydGVkIHR5cGUgJHt0eXBlb2Ygcn0sIGV4cGVjdGVkIHR5cGUgaXMgRGF0ZSBvciBEYXlqc2ApO1xuICByZXR1cm4gdDtcbn0sIE8gPSAocikgPT4gIWYociksIGYgPSAocikgPT4ge1xuICBjb25zdCB0ID0gYyhyKSwgZSA9IHQuZGF5KCksIGEgPSB0LmZvcm1hdChcIllZWVktTU0tRERcIik7XG4gIHJldHVybiAhIShrW2FdIHx8IGUgPj0gMSAmJiBlIDw9IDUgJiYgIU1bYV0pO1xufSwgRyA9IChyKSA9PiB7XG4gIGNvbnN0IHQgPSBjKHIpO1xuICByZXR1cm4gISFaW3QuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKV07XG59LCBKID0gKHIpID0+IHtcbiAgY29uc3QgdCA9IGMociksIGUgPSB0LmZvcm1hdChcIllZWVktTU0tRERcIik7XG4gIGlmIChrW2VdKVxuICAgIHJldHVybiB7XG4gICAgICBkYXRlOiBlLFxuICAgICAgd29yazogITAsXG4gICAgICBuYW1lOiBrW2VdXG4gICAgfTtcbiAgaWYgKE1bZV0pXG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGU6IGUsXG4gICAgICB3b3JrOiAhMSxcbiAgICAgIG5hbWU6IE1bZV1cbiAgICB9O1xuICB7XG4gICAgY29uc3QgYSA9IHQuZGF5KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGU6IGUsXG4gICAgICB3b3JrOiBhICE9PSAwICYmIGEgIT09IDYsXG4gICAgICBuYW1lOiB0LmZvcm1hdChcImRkZGRcIilcbiAgICB9O1xuICB9XG59LCBLID0gKHIsIHQsIGUgPSAhMCkgPT4ge1xuICBjb25zdCBhID0gYyhyKSwgbyA9IGModCk7XG4gIHJldHVybiBlID8gWShhLCBvKS5maWx0ZXIoTykubWFwKChzKSA9PiBzLmZvcm1hdChcIllZWVktTU0tRERcIikpIDogWShhLCBvKS5maWx0ZXIoKHMpID0+IE1bcy5mb3JtYXQoXCJZWVlZLU1NLUREXCIpXSkubWFwKChzKSA9PiBzLmZvcm1hdChcIllZWVktTU0tRERcIikpO1xufSwgUSA9IChyLCB0LCBlID0gITApID0+IHtcbiAgY29uc3QgYSA9IGMociksIG8gPSBjKHQpO1xuICByZXR1cm4gZSA/IFkoYSwgbykuZmlsdGVyKGYpLm1hcCgocykgPT4gcy5mb3JtYXQoXCJZWVlZLU1NLUREXCIpKSA6IFkoYSwgbykuZmlsdGVyKChzKSA9PiBmKHMpICYmIHMuZGF5KCkgPj0gMSAmJiBzLmRheSgpIDw9IDUpLm1hcCgocykgPT4gcy5mb3JtYXQoXCJZWVlZLU1NLUREXCIpKTtcbn0sIFggPSAociA9IDAsIHQgPSBoKCkpID0+IHtcbiAgaWYgKHQgPSB1KHQpLCByID09PSAwKSB7XG4gICAgaWYgKGYodCkpXG4gICAgICByZXR1cm4gdC5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xuICAgIHIgPSAxO1xuICB9XG4gIGNvbnN0IGUgPSByID4gMCA/IDEgOiAtMTtcbiAgbGV0IGEgPSBNYXRoLmFicyhyKTtcbiAgZm9yICg7IGEgPiAwOyApXG4gICAgdCA9IHQuYWRkKGUsIFwiZGF5XCIpLCBmKHQpICYmIGEtLTtcbiAgcmV0dXJuIHQuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbn0sIHR0ID0gLyogQF9fUFVSRV9fICovIE9iamVjdC5mcmVlemUoLyogQF9fUFVSRV9fICovIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgZmluZFdvcmtkYXk6IFgsXG4gIGdldERheURldGFpbDogSixcbiAgZ2V0SG9saWRheXNJblJhbmdlOiBLLFxuICBnZXRXb3JrZGF5c0luUmFuZ2U6IFEsXG4gIGlzSG9saWRheTogTyxcbiAgaXNJbkxpZXU6IEcsXG4gIGlzV29ya2RheTogZlxufSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiBcIk1vZHVsZVwiIH0pKSwgZXQgPSB7XG4gIHRoZV9iZWdpbm5pbmdfb2Zfc3ByaW5nOiBbNC42Mjk1LCAzLjg3XSxcbiAgcmFpbl93YXRlcjogWzE5LjQ1OTksIDE4LjczXSxcbiAgdGhlX3dha2luZ19vZl9pbnNlY3RzOiBbNi4zOTI2LCA1LjYzXSxcbiAgdGhlX3NwcmluZ19lcXVpbm94OiBbMjEuNDE1NSwgMjAuNjQ2XSxcbiAgcHVyZV9icmlnaHRuZXNzOiBbNS41OSwgNC44MV0sXG4gIGdyYWluX3JhaW46IFsyMC44ODgsIDIwLjFdLFxuICB0aGVfYmVnaW5uaW5nX29mX3N1bW1lcjogWzYuMzE4LCA1LjUyXSxcbiAgbGVzc2VyX2Z1bGxuZXNzX29mX2dyYWluOiBbMjEuODYsIDIxLjA0XSxcbiAgZ3JhaW5faW5fYmVhcmQ6IFs2LjUsIDUuNjc4XSxcbiAgdGhlX3N1bW1lcl9zb2xzdGljZTogWzIyLjIsIDIxLjM3XSxcbiAgbGVzc2VyX2hlYXQ6IFs3LjkyOCwgNy4xMDhdLFxuICBncmVhdGVyX2hlYXQ6IFsyMy42NSwgMjIuODNdLFxuICB0aGVfYmVnaW5uaW5nX29mX2F1dHVtbjogWzI4LjM1LCA3LjVdLFxuICB0aGVfZW5kX29mX2hlYXQ6IFsyMy45NSwgMjMuMTNdLFxuICB3aGl0ZV9kZXc6IFs4LjQ0LCA3LjY0Nl0sXG4gIHRoZV9hdXR1bW5fZXF1aW5veDogWzIzLjgyMiwgMjMuMDQyXSxcbiAgY29kZV9kZXc6IFs5LjA5OCwgOC4zMThdLFxuICBmcm9zdF9kZXNjZW50OiBbMjQuMjE4LCAyMy40MzhdLFxuICB0aGVfYmVnaW5uaW5nX29mX3dpbnRlcjogWzguMjE4LCA3LjQzOF0sXG4gIGxlc3Nlcl9zbm93OiBbMjMuMDgsIDIyLjM2XSxcbiAgZ3JlYXRlcl9zbm93OiBbNy45LCA3LjE4XSxcbiAgdGhlX3dpbnRlcl9zb2xzdGljZTogWzIyLjYsIDIxLjk0XSxcbiAgbGVzc2VyX2NvbGQ6IFs2LjExLCA1LjQwNTVdLFxuICBncmVhdGVyX2NvbGQ6IFsyMC44NCwgMjAuMTJdXG59LCBUID0ge1xuICAxOiBbXCJsZXNzZXJfY29sZFwiLCBcImdyZWF0ZXJfY29sZFwiXSxcbiAgMjogW1widGhlX2JlZ2lubmluZ19vZl9zcHJpbmdcIiwgXCJyYWluX3dhdGVyXCJdLFxuICAzOiBbXCJ0aGVfd2FraW5nX29mX2luc2VjdHNcIiwgXCJ0aGVfc3ByaW5nX2VxdWlub3hcIl0sXG4gIDQ6IFtcInB1cmVfYnJpZ2h0bmVzc1wiLCBcImdyYWluX3JhaW5cIl0sXG4gIDU6IFtcInRoZV9iZWdpbm5pbmdfb2Zfc3VtbWVyXCIsIFwibGVzc2VyX2Z1bGxuZXNzX29mX2dyYWluXCJdLFxuICA2OiBbXCJncmFpbl9pbl9iZWFyZFwiLCBcInRoZV9zdW1tZXJfc29sc3RpY2VcIl0sXG4gIDc6IFtcImxlc3Nlcl9oZWF0XCIsIFwiZ3JlYXRlcl9oZWF0XCJdLFxuICA4OiBbXCJ0aGVfYmVnaW5uaW5nX29mX2F1dHVtblwiLCBcInRoZV9lbmRfb2ZfaGVhdFwiXSxcbiAgOTogW1wid2hpdGVfZGV3XCIsIFwidGhlX2F1dHVtbl9lcXVpbm94XCJdLFxuICAxMDogW1wiY29kZV9kZXdcIiwgXCJmcm9zdF9kZXNjZW50XCJdLFxuICAxMTogW1widGhlX2JlZ2lubmluZ19vZl93aW50ZXJcIiwgXCJsZXNzZXJfc25vd1wiXSxcbiAgMTI6IFtcImdyZWF0ZXJfc25vd1wiLCBcInRoZV93aW50ZXJfc29sc3RpY2VcIl1cbn0sIHJ0ID0ge1xuICBcIjIwMjZfcmFpbl93YXRlclwiOiAtMSxcbiAgXCIyMDg0X3RoZV9zcHJpbmdfZXF1aW5veFwiOiAxLFxuICBcIjE5MTFfdGhlX2JlZ2lubmluZ19vZl9zdW1tZXJcIjogMSxcbiAgXCIyMDA4X2xlc3Nlcl9mdWxsbmVzc19vZl9ncmFpblwiOiAxLFxuICBcIjE5MDJfZ3JhaW5faW5fYmVhcmRcIjogMSxcbiAgXCIxOTI4X3RoZV9zdW1tZXJfc29sc3RpY2VcIjogMSxcbiAgXCIxOTI1X2xlc3Nlcl9oZWF0XCI6IDEsXG4gIFwiMjAxNl9sZXNzZXJfaGVhdFwiOiAxLFxuICBcIjE5MjJfZ3JlYXRlcl9oZWF0XCI6IDEsXG4gIFwiMjAwMl90aGVfYmVnaW5uaW5nX29mX2F1dHVtblwiOiAxLFxuICBcIjE5Mjdfd2hpdGVfZGV3XCI6IDEsXG4gIFwiMTk0Ml90aGVfYXV0dW1uX2VxdWlub3hcIjogMSxcbiAgXCIyMDg5X2Zyb3N0X2Rlc2NlbnRcIjogMSxcbiAgXCIyMDg5X3RoZV9iZWdpbm5pbmdfb2Zfd2ludGVyXCI6IDEsXG4gIFwiMTk3OF9sZXNzZXJfc25vd1wiOiAxLFxuICBcIjE5NTRfZ3JlYXRlcl9zbm93XCI6IDEsXG4gIFwiMTkxOF90aGVfd2ludGVyX3NvbHN0aWNlXCI6IC0xLFxuICBcIjIwMjFfdGhlX3dpbnRlcl9zb2xzdGljZVwiOiAtMSxcbiAgXCIxOTgyX2xlc3Nlcl9jb2xkXCI6IDEsXG4gIFwiMjAxOV9sZXNzZXJfY29sZFwiOiAtMSxcbiAgXCIyMDAwX2dyZWF0ZXJfY29sZFwiOiAxLFxuICBcIjIwODJfZ3JlYXRlcl9jb2xkXCI6IDFcbn0sIEUgPSB7XG4gIGxlc3Nlcl9jb2xkOiBcIuWwj+WvklwiLFxuICBncmVhdGVyX2NvbGQ6IFwi5aSn5a+SXCIsXG4gIHRoZV9iZWdpbm5pbmdfb2Zfc3ByaW5nOiBcIueri+aYpVwiLFxuICByYWluX3dhdGVyOiBcIumbqOawtFwiLFxuICB0aGVfd2FraW5nX29mX2luc2VjdHM6IFwi5oOK6JuwXCIsXG4gIHRoZV9zcHJpbmdfZXF1aW5veDogXCLmmKXliIZcIixcbiAgcHVyZV9icmlnaHRuZXNzOiBcIua4heaYjlwiLFxuICBncmFpbl9yYWluOiBcIuiwt+mbqFwiLFxuICB0aGVfYmVnaW5uaW5nX29mX3N1bW1lcjogXCLnq4vlpI9cIixcbiAgbGVzc2VyX2Z1bGxuZXNzX29mX2dyYWluOiBcIuWwj+a7oVwiLFxuICBncmFpbl9pbl9iZWFyZDogXCLoipLnp41cIixcbiAgdGhlX3N1bW1lcl9zb2xzdGljZTogXCLlpI/oh7NcIixcbiAgbGVzc2VyX2hlYXQ6IFwi5bCP5pqRXCIsXG4gIGdyZWF0ZXJfaGVhdDogXCLlpKfmmpFcIixcbiAgdGhlX2JlZ2lubmluZ19vZl9hdXR1bW46IFwi56uL56eLXCIsXG4gIHRoZV9lbmRfb2ZfaGVhdDogXCLlpITmmpFcIixcbiAgd2hpdGVfZGV3OiBcIueZvemcslwiLFxuICB0aGVfYXV0dW1uX2VxdWlub3g6IFwi56eL5YiGXCIsXG4gIGNvZGVfZGV3OiBcIuWvkumcslwiLFxuICBmcm9zdF9kZXNjZW50OiBcIumcnOmZjVwiLFxuICB0aGVfYmVnaW5uaW5nX29mX3dpbnRlcjogXCLnq4vlhqxcIixcbiAgbGVzc2VyX3Nub3c6IFwi5bCP6ZuqXCIsXG4gIGdyZWF0ZXJfc25vdzogXCLlpKfpm6pcIixcbiAgdGhlX3dpbnRlcl9zb2xzdGljZTogXCLlhqzoh7NcIlxufSwgTCA9IChyLCB0LCBlKSA9PiB7XG4gIGNvbnN0IGEgPSByID49IDJlMyA/IDIxIDogMjAsIG8gPSByICUgMTAwLCBzID0gMC4yNDIyLCBuID0gZXRbZV1bYSA9PT0gMjEgPyAxIDogMF07XG4gIGxldCBkID0gTWF0aC5mbG9vcihvIC8gNCk7XG4gIFtcbiAgICBcImxlc3Nlcl9jb2xkXCIsXG4gICAgXCJncmVhdGVyX2NvbGRcIixcbiAgICBcInRoZV9iZWdpbm5pbmdfb2Zfc3ByaW5nXCIsXG4gICAgXCJyYWluX3dhdGVyXCJcbiAgXS5pbmNsdWRlcyhlKSAmJiAoZCA9IE1hdGguZmxvb3IoKG8gLSAxKSAvIDQpKTtcbiAgbGV0IGkgPSBNYXRoLmZsb29yKG8gKiBzICsgbikgLSBkO1xuICBjb25zdCBfID0gcnRbYCR7cn1fJHtlfWBdO1xuICByZXR1cm4gXyAmJiAoaSArPSBfKSwgaChgJHtyfS0ke3R9LSR7aX1gKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xufSwgYXQgPSAociwgdCkgPT4ge1xuICBjb25zdCBlID0gW107XG4gIGxldCBhID0gdShyKTtcbiAgY29uc3QgbyA9IHUodCB8fCByKTtcbiAgZm9yICg7IGEuaXNCZWZvcmUobykgfHwgYS5pc1NhbWUobyk7ICkge1xuICAgIGNvbnN0IHMgPSBhLnllYXIoKSwgbiA9IGEubW9udGgoKSArIDE7XG4gICAgVFtuXS5mb3JFYWNoKChkKSA9PiB7XG4gICAgICBjb25zdCBpID0gaChMKHMsIG4sIGQpKTtcbiAgICAgIChpICE9IG51bGwgJiYgaS5pc0JlZm9yZShvKSB8fCBpICE9IG51bGwgJiYgaS5pc1NhbWUobykpICYmIChpICE9IG51bGwgJiYgaS5pc0FmdGVyKGEpIHx8IGkgIT0gbnVsbCAmJiBpLmlzU2FtZShhKSkgJiYgZS5wdXNoKHtcbiAgICAgICAgZGF0ZTogaS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpLFxuICAgICAgICB0ZXJtOiBkLFxuICAgICAgICBuYW1lOiBFW2RdLFxuICAgICAgICBpbmRleDogMVxuICAgICAgfSk7XG4gICAgfSksIG4gPT09IDEyID8gYSA9IGEuYWRkKDEsIFwieWVhclwiKS5zdGFydE9mKFwieWVhclwiKSA6IGEgPSBhLmFkZCgxLCBcIm1vbnRoXCIpLnN0YXJ0T2YoXCJtb250aFwiKTtcbiAgfVxuICByZXR1cm4gZTtcbn0sICQgPSAociwgdCkgPT4ge1xuICBsZXQgZSA9IHUocikuc3VidHJhY3QoMSwgXCJtb250aFwiKTtcbiAgY29uc3QgYSA9IHUodCB8fCByKS5hZGQoMSwgXCJtb250aFwiKSwgbyA9IFtdO1xuICBmb3IgKDsgZS5pc0JlZm9yZShhKSB8fCBlLmlzU2FtZShhKTsgKSB7XG4gICAgY29uc3QgbiA9IGUueWVhcigpLCBkID0gZS5tb250aCgpICsgMTtcbiAgICBUW2RdLmZvckVhY2goKGkpID0+IHtcbiAgICAgIGNvbnN0IF8gPSBoKEwobiwgZCwgaSkpO1xuICAgICAgby5wdXNoKHsgdGVybTogaSwgZGF0ZTogXyB9KTtcbiAgICB9KSwgZS5tb250aCgpID09PSAxMSA/IGUgPSBlLmFkZCgxLCBcInllYXJcIikuc3RhcnRPZihcInllYXJcIikgOiBlID0gZS5hZGQoMSwgXCJtb250aFwiKS5zdGFydE9mKFwibW9udGhcIik7XG4gIH1cbiAgY29uc3QgcyA9IFtdO1xuICByZXR1cm4gby5mb3JFYWNoKChuLCBkKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IG4uZGF0ZTsgb1tkICsgMV0gJiYgaS5pc0JlZm9yZShvW2QgKyAxXS5kYXRlKTsgaSA9IGkuYWRkKDEsIFwiZGF5XCIpKVxuICAgICAgcy5wdXNoKHsgZGF5OiBpLCB0ZXJtOiBuLnRlcm0sIG5hbWU6IEVbbi50ZXJtXSwgaW5kZXg6IGkuZGlmZihuLmRhdGUsIFwiZGF5XCIpICsgMSB9KTtcbiAgfSksIHQgfHwgKHQgPSByKSwgcy5maWx0ZXIoKG4pID0+IG4uZGF5LmlzQmV0d2VlbihyLCB0LCBcImRheVwiKSkubWFwKChuKSA9PiAoe1xuICAgIGRhdGU6IG4uZGF5LmZvcm1hdChcIllZWVktTU0tRERcIiksXG4gICAgdGVybTogbi50ZXJtLFxuICAgIG5hbWU6IG4ubmFtZSxcbiAgICBpbmRleDogbi5pbmRleFxuICB9KSk7XG59LCBvdCA9IC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuZnJlZXplKC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuZGVmaW5lUHJvcGVydHkoe1xuICBfX3Byb3RvX186IG51bGwsXG4gIGdldFNvbGFyVGVybURhdGU6IEwsXG4gIGdldFNvbGFyVGVybXM6IGF0LFxuICBnZXRTb2xhclRlcm1zSW5SYW5nZTogJFxufSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiBcIk1vZHVsZVwiIH0pKSwgZyA9IFtcbiAgMTk0MTYsXG4gIDE5MTY4LFxuICA0MjM1MixcbiAgMjE3MTcsXG4gIDUzODU2LFxuICA1NTYzMixcbiAgOTE0NzYsXG4gIDIyMTc2LFxuICAzOTYzMixcbiAgMjE5NzAsXG4gIC8vMTkwMC0xOTA5XG4gIDE5MTY4LFxuICA0MjQyMixcbiAgNDIxOTIsXG4gIDUzODQwLFxuICAxMTkzODEsXG4gIDQ2NDAwLFxuICA1NDk0NCxcbiAgNDQ0NTAsXG4gIDM4MzIwLFxuICA4NDM0MyxcbiAgLy8xOTEwLTE5MTlcbiAgMTg4MDAsXG4gIDQyMTYwLFxuICA0NjI2MSxcbiAgMjcyMTYsXG4gIDI3OTY4LFxuICAxMDkzOTYsXG4gIDExMTA0LFxuICAzODI1NixcbiAgMjEyMzQsXG4gIDE4ODAwLFxuICAvLzE5MjAtMTkyOVxuICAyNTk1OCxcbiAgNTQ0MzIsXG4gIDU5OTg0LFxuICAyODMwOSxcbiAgMjMyNDgsXG4gIDExMTA0LFxuICAxMDAwNjcsXG4gIDM3NjAwLFxuICAxMTY5NTEsXG4gIDUxNTM2LFxuICAvLzE5MzAtMTkzOVxuICA1NDQzMixcbiAgMTIwOTk4LFxuICA0NjQxNixcbiAgMjIxNzYsXG4gIDEwNzk1NixcbiAgOTY4MCxcbiAgMzc1ODQsXG4gIDUzOTM4LFxuICA0MzM0NCxcbiAgNDY0MjMsXG4gIC8vMTk0MC0xOTQ5XG4gIDI3ODA4LFxuICA0NjQxNixcbiAgODY4NjksXG4gIDE5ODcyLFxuICA0MjQxNixcbiAgODMzMTUsXG4gIDIxMTY4LFxuICA0MzQzMixcbiAgNTk3MjgsXG4gIDI3Mjk2LFxuICAvLzE5NTAtMTk1OVxuICA0NDcxMCxcbiAgNDM4NTYsXG4gIDE5Mjk2LFxuICA0Mzc0OCxcbiAgNDIzNTIsXG4gIDIxMDg4LFxuICA2MjA1MSxcbiAgNTU2MzIsXG4gIDIzMzgzLFxuICAyMjE3NixcbiAgLy8xOTYwLTE5NjlcbiAgMzg2MDgsXG4gIDE5OTI1LFxuICAxOTE1MixcbiAgNDIxOTIsXG4gIDU0NDg0LFxuICA1Mzg0MCxcbiAgNTQ2MTYsXG4gIDQ2NDAwLFxuICA0Njc1MixcbiAgMTAzODQ2LFxuICAvLzE5NzAtMTk3OVxuICAzODMyMCxcbiAgMTg4NjQsXG4gIDQzMzgwLFxuICA0MjE2MCxcbiAgNDU2OTAsXG4gIDI3MjE2LFxuICAyNzk2OCxcbiAgNDQ4NzAsXG4gIDQzODcyLFxuICAzODI1NixcbiAgLy8xOTgwLTE5ODlcbiAgMTkxODksXG4gIDE4ODAwLFxuICAyNTc3NixcbiAgMjk4NTksXG4gIDU5OTg0LFxuICAyNzQ4MCxcbiAgMjE5NTIsXG4gIDQzODcyLFxuICAzODYxMyxcbiAgMzc2MDAsXG4gIC8vMTk5MC0xOTk5XG4gIDUxNTUyLFxuICA1NTYzNixcbiAgNTQ0MzIsXG4gIDU1ODg4LFxuICAzMDAzNCxcbiAgMjIxNzYsXG4gIDQzOTU5LFxuICA5NjgwLFxuICAzNzU4NCxcbiAgNTE4OTMsXG4gIC8vMjAwMC0yMDA5XG4gIDQzMzQ0LFxuICA0NjI0MCxcbiAgNDc3ODAsXG4gIDQ0MzY4LFxuICAyMTk3NyxcbiAgMTkzNjAsXG4gIDQyNDE2LFxuICA4NjM5MCxcbiAgMjExNjgsXG4gIDQzMzEyLFxuICAvLzIwMTAtMjAxOVxuICAzMTA2MCxcbiAgMjcyOTYsXG4gIDQ0MzY4LFxuICAyMzM3OCxcbiAgMTkyOTYsXG4gIDQyNzI2LFxuICA0MjIwOCxcbiAgNTM4NTYsXG4gIDYwMDA1LFxuICA1NDU3NixcbiAgLy8yMDIwLTIwMjlcbiAgMjMyMDAsXG4gIDMwMzcxLFxuICAzODYwOCxcbiAgMTkxOTUsXG4gIDE5MTUyLFxuICA0MjE5MixcbiAgMTE4OTY2LFxuICA1Mzg0MCxcbiAgNTQ1NjAsXG4gIDU2NjQ1LFxuICAvLzIwMzAtMjAzOVxuICA0NjQ5NixcbiAgMjIyMjQsXG4gIDIxOTM4LFxuICAxODg2NCxcbiAgNDIzNTksXG4gIDQyMTYwLFxuICA0MzYwMCxcbiAgMTExMTg5LFxuICAyNzkzNixcbiAgNDQ0NDgsXG4gIC8vMjA0MC0yMDQ5XG4gIDg0ODM1LFxuICAzNzc0NCxcbiAgMTg5MzYsXG4gIDE4ODAwLFxuICAyNTc3NixcbiAgOTIzMjYsXG4gIDU5OTg0LFxuICAyNzQyNCxcbiAgMTA4MjI4LFxuICA0Mzc0NCxcbiAgLy8yMDUwLTIwNTlcbiAgNDE2OTYsXG4gIDUzOTg3LFxuICA1MTU1MixcbiAgNTQ2MTUsXG4gIDU0NDMyLFxuICA1NTg4OCxcbiAgMjM4OTMsXG4gIDIyMTc2LFxuICA0MjcwNCxcbiAgMjE5NzIsXG4gIC8vMjA2MC0yMDY5XG4gIDIxMjAwLFxuICA0MzQ0OCxcbiAgNDMzNDQsXG4gIDQ2MjQwLFxuICA0Njc1OCxcbiAgNDQzNjgsXG4gIDIxOTIwLFxuICA0Mzk0MCxcbiAgNDI0MTYsXG4gIDIxMTY4LFxuICAvLzIwNzAtMjA3OVxuICA0NTY4MyxcbiAgMjY5MjgsXG4gIDI5NDk1LFxuICAyNzI5NixcbiAgNDQzNjgsXG4gIDg0ODIxLFxuICAxOTI5NixcbiAgNDIzNTIsXG4gIDIxNzMyLFxuICA1MzYwMCxcbiAgLy8yMDgwLTIwODlcbiAgNTk3NTIsXG4gIDU0NTYwLFxuICA1NTk2OCxcbiAgOTI4MzgsXG4gIDIyMjI0LFxuICAxOTE2OCxcbiAgNDM0NzYsXG4gIDQxNjgwLFxuICA1MzU4NCxcbiAgNjIwMzQsXG4gIC8vMjA5MC0yMDk5XG4gIDU0NTYwXG4gIC8vMjEwMFxuXSwgRiA9IFtcIumbtlwiLCBcIuS4gFwiLCBcIuS6jFwiLCBcIuS4iVwiLCBcIuWbm1wiLCBcIuS6lFwiLCBcIuWFrVwiLCBcIuS4g1wiLCBcIuWFq1wiLCBcIuS5nVwiXSwgQSA9IFtcIuato1wiLCBcIuS6jFwiLCBcIuS4iVwiLCBcIuWbm1wiLCBcIuS6lFwiLCBcIuWFrVwiLCBcIuS4g1wiLCBcIuWFq1wiLCBcIuS5nVwiLCBcIuWNgVwiLCBcIuWGrFwiLCBcIuiFilwiXSwgSCA9IFtcIueUslwiLCBcIuS5mVwiLCBcIuS4mVwiLCBcIuS4gVwiLCBcIuaIilwiLCBcIuW3sVwiLCBcIuW6mlwiLCBcIui+m1wiLCBcIuWjrFwiLCBcIueZuFwiXSwgQiA9IFtcIuWtkFwiLCBcIuS4kVwiLCBcIuWvhVwiLCBcIuWNr1wiLCBcIui+sFwiLCBcIuW3s1wiLCBcIuWNiFwiLCBcIuacqlwiLCBcIueUs1wiLCBcIumFiVwiLCBcIuaIjFwiLCBcIuS6pVwiXSwgbnQgPSBbXCLpvKBcIiwgXCLniZtcIiwgXCLomY5cIiwgXCLlhZRcIiwgXCLpvplcIiwgXCLom4dcIiwgXCLpqaxcIiwgXCLnvopcIiwgXCLnjLRcIiwgXCLpuKFcIiwgXCLni5dcIiwgXCLnjKpcIl0sIHggPSAocikgPT4ge1xuICBsZXQgdCA9IDM0ODtcbiAgZm9yIChsZXQgZSA9IDMyNzY4OyBlID4gODsgZSA+Pj0gMSlcbiAgICB0ICs9IGdbciAtIDE5MDBdICYgZSA/IDEgOiAwO1xuICByZXR1cm4gdCArIHYocik7XG59LCBwID0gKHIpID0+IGdbciAtIDE5MDBdICYgMTUsIHYgPSAocikgPT4gcChyKSA/IGdbciAtIDE5MDBdICYgNjU1MzYgPyAzMCA6IDI5IDogMCwgYiA9IChyKSA9PiBIW3IgJSAxMF0gKyBCW3IgJSAxMl0sIEQgPSAociwgdCkgPT4gZ1tyIC0gMTkwMF0gJiA2NTUzNiA+PiB0ID8gMzAgOiAyOSwgc3QgPSAocikgPT4gbnRbKHIgLSA0KSAlIDEyXSwgaXQgPSAocikgPT4ge1xuICBjb25zdCB0ID0gW1wi5YidXCIsIFwi5Y2BXCIsIFwi5bu/XCIsIFwi5LiJ5Y2BXCJdO1xuICBpZiAociA9PT0gMTApIHJldHVybiBcIuWIneWNgVwiO1xuICBpZiAociA9PT0gMjApIHJldHVybiBcIuS6jOWNgVwiO1xuICBpZiAociA9PT0gMzApIHJldHVybiBcIuS4ieWNgVwiO1xuICBjb25zdCBlID0gTWF0aC5mbG9vcihyIC8gMTApLCBhID0gciAlIDEwO1xuICByZXR1cm4gdFtlXSArIEZbYV07XG59LCBkdCA9IChyKSA9PiBgJHtIWyhyIC0gNCkgJSAxMF19JHtCWyhyIC0gNCkgJSAxMl195bm0YCwgUiA9IChyLCB0KSA9PiB7XG4gIGNvbnN0IGUgPSBbXTtcbiAgZm9yIChsZXQgYSA9IHI7IGEgPD0gdDsgYSsrKVxuICAgIGUucHVzaCh7XG4gICAgICB5ZWFyOiBhLFxuICAgICAgbHVuYXJZZWFyOiBkdChhKSxcbiAgICAgIGx1bmFyWWVhckNOOiBhLnRvU3RyaW5nKCkuc3BsaXQoXCJcIikubWFwKChvKSA9PiBGW051bWJlcihvKV0pLmpvaW4oXCJcIilcbiAgICB9KTtcbiAgcmV0dXJuIGU7XG59LCBDID0gKHIpID0+IHtcbiAgY29uc3QgdCA9IHAocik7XG4gIHJldHVybiB7XG4gICAgeWVhcjogcixcbiAgICBsZWFwTW9udGg6IHQgfHwgdm9pZCAwLFxuICAgIGxlYXBNb250aENOOiB0ID8gYOmXsCR7QVt0IC0gMV195pyIYCA6IHZvaWQgMCxcbiAgICBkYXlzOiB0ID8gZ1tyIC0gMTkwMF0gJiA2NTUzNiA/IDMwIDogMjkgOiAwXG4gIH07XG59LCBtID0gKHIpID0+IHtcbiAgY29uc3QgdCA9IG5ldyBBcnJheSg3KS5maWxsKDApO1xuICBsZXQgZSA9IDAsIGEgPSAwO1xuICBjb25zdCBvID0gaChuZXcgRGF0ZSgxOTAwLCAwLCAzMSkpLCBzID0gaChyKTtcbiAgbGV0IG4gPSBzLmRpZmYobywgXCJkYXlcIik7XG4gIHRbNV0gPSBuICsgNDAsIHRbNF0gPSAxNDtcbiAgbGV0IGQgPSAxOTAwO1xuICBmb3IgKDsgZCA8IDIxMDAgJiYgbiA+IDA7IGQrKylcbiAgICBlID0geChkKSwgbiAtPSBlLCB0WzRdICs9IDEyO1xuICBuIDwgMCAmJiAobiArPSBlLCBkLS0sIHRbNF0gLT0gMTIpLCB0WzBdID0gZCwgdFszXSA9IGQgLSAxODY0LCBhID0gcChkKSwgdFs2XSA9IDA7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgMTMgJiYgbiA+PSAwOyBpKyspXG4gICAgYSA+IDAgJiYgaSA9PT0gYSArIDEgJiYgdFs2XSA9PT0gMCA/ICgtLWksIHRbNl0gPSAxLCBlID0gdihkKSkgOiBlID0gRChkLCBpKSwgdFs2XSA9PT0gMSAmJiBpID09PSBhICsgMSAmJiAodFs2XSA9IDApLCBuIC09IGUsIHRbNl0gPT09IDAgJiYgdFs0XSsrLCB0WzFdID0gaTtcbiAgcmV0dXJuIG4gPCAwICYmIChuICs9IGUsIHRbMV0tLSwgdFs0XS0tKSwgdFsyXSA9IG4gKyAxLCB7XG4gICAgZGF0ZTogcy5mb3JtYXQoXCJZWVlZLU1NLUREXCIpLFxuICAgIC8vIOWFrOWOhuaXpeacn1xuICAgIGx1bmFyWWVhcjogdFswXSxcbiAgICAvLyDlhpzljoblubTku71cbiAgICBsdW5hck1vbjogdFsxXSArIDEsXG4gICAgLy8g5Yac5Y6G5pyI5Lu9XG4gICAgbHVuYXJEYXk6IHRbMl0sXG4gICAgLy8g5Yac5Y6G5pel5pyfXG4gICAgaXNMZWFwOiAhIXRbNl0sXG4gICAgLy8g5piv5ZCm6Zew5pyIXG4gICAgem9kaWFjOiBzdCh0WzBdKSxcbiAgICAvLyDnlJ/ogpZcbiAgICB5ZWFyQ3lsOiBiKHRbM10pLFxuICAgIC8vIOW5tOafsVxuICAgIG1vbkN5bDogYih0WzRdKSxcbiAgICAvLyDmnIjmn7FcbiAgICBkYXlDeWw6IGIodFs1XSksXG4gICAgLy8g5pel5p+xXG4gICAgbHVuYXJZZWFyQ046IGAke3RbMF0udG9TdHJpbmcoKS5zcGxpdChcIlwiKS5tYXAoKGkpID0+IEZbTnVtYmVyKGkpXSkuam9pbihcIlwiKX1gLFxuICAgIC8vIOWGnOWOhuW5tOS7veS4reaWh+ihqOekulxuICAgIGx1bmFyTW9uQ046IGAke0FbdFsxXV195pyIYCxcbiAgICAvLyDlhpzljobmnIjku73kuK3mlofooajnpLpcbiAgICBsdW5hckRheUNOOiBpdCh0WzJdKVxuICAgIC8vIOWGnOWOhuaXpeacn+S4reaWh+ihqOekulxuICB9O1xufSwgaiA9IChyLCB0KSA9PiB7XG4gIGNvbnN0IGUgPSBoKHIpLCBhID0gaCh0KSwgbyA9IFtdO1xuICBmb3IgKGxldCBzID0gZTsgcy5pc0JlZm9yZShhKSB8fCBzLmlzU2FtZShhLCBcImRheVwiKTsgcyA9IHMuYWRkKDEsIFwiZGF5XCIpKVxuICAgIG8ucHVzaChtKHMpKTtcbiAgcmV0dXJuIG87XG59LCBJID0gKHIpID0+IHtcbiAgY29uc3QgdCA9IGgociksIGUgPSB0LnllYXIoKSwgYSA9IHQubW9udGgoKSArIDEsIG8gPSB0LmRhdGUoKTtcbiAgbGV0IHMgPSAwO1xuICBmb3IgKGxldCB5ID0gMTkwMDsgeSA8IGU7IHkrKylcbiAgICBzICs9IHgoeSk7XG4gIGxldCBuID0gcChlKTtcbiAgZm9yIChsZXQgeSA9IDE7IHkgPCBhOyB5KyspXG4gICAgcyArPSBEKGUsIHkpLCB5ID09PSBuICYmIChzICs9IHYoZSkpO1xuICBzICs9IG8gLSAxO1xuICBjb25zdCBkID0gaChuZXcgRGF0ZSgxOTAwLCAwLCAzMSkpLCBpID0gZC5hZGQocywgXCJkYXlcIikuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbiAgbGV0IF8gPSBzLCBOO1xuICByZXR1cm4gbiA9PT0gYSAmJiAoXyArPSBEKGUsIGEpLCBOID0gZC5hZGQoXywgXCJkYXlcIikuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSksIHtcbiAgICBkYXRlOiBpLFxuICAgIGxlYXBNb250aERhdGU6IE5cbiAgfTtcbn0sIGx0ID0ge1xuICBnZXRMdW5hclllYXJzOiBSLFxuICBnZXRZZWFyTGVhcE1vbnRoOiBDLFxuICBnZXRMdW5hckRhdGU6IG0sXG4gIGdldEx1bmFyRGF0ZXNJblJhbmdlOiBqLFxuICBnZXRTb2xhckRhdGVGcm9tTHVuYXI6IElcbn0sIGh0ID0gLyogQF9fUFVSRV9fICovIE9iamVjdC5mcmVlemUoLyogQF9fUFVSRV9fICovIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgZGVmYXVsdDogbHQsXG4gIGdldEx1bmFyRGF0ZTogbSxcbiAgZ2V0THVuYXJEYXRlc0luUmFuZ2U6IGosXG4gIGdldEx1bmFyWWVhcnM6IFIsXG4gIGdldFNvbGFyRGF0ZUZyb21MdW5hcjogSSxcbiAgZ2V0WWVhckxlYXBNb250aDogQyxcbiAgbW9udGhEYXlzOiBEXG59LCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpLCBfdCA9IHtcbiAgMToge1xuICAgIC8vIOato+aciFxuICAgIDE6IFtcIuaYpeiKglwiLCBcIum4oeaXpVwiLCBcIuWFg+Wni+WkqeWwiuivnui+sFwiXSxcbiAgICAyOiBbXCLniqzml6VcIl0sXG4gICAgMzogW1wi54yq5pelXCIsIFwi5bCP5bm05pydXCJdLFxuICAgIDQ6IFtcIue+iuaXpVwiLCBcIuWtmeWkqeWMu+ivnui+sFwiXSxcbiAgICA1OiBbXCLniZvml6VcIiwgXCLnoLTkupTml6VcIiwgXCLlvIDluIJcIiwgXCLot6/npZ7or57ovrBcIl0sXG4gICAgNjogW1wi6ams5pelXCJdLFxuICAgIDc6IFtcIuS6uuaXpVwiLCBcIumAgeeBq+elnlwiXSxcbiAgICA4OiBbXCLosLfml6VcIiwgXCLpmI7njovor57ovrBcIl0sXG4gICAgOTogW1wi5aSp5pelXCIsIFwi546J55qH6K+e6L6wXCJdLFxuICAgIDEwOiBbXCLlnLDml6VcIiwgXCLnn7PlpLTnlJ/ml6VcIl0sXG4gICAgMTM6IFtcIuS4iijor5Up54Gv5pelXCIsIFwi5YWz5YWs5Y2H5aSp5pelXCJdLFxuICAgIDE1OiBbXCLlhYPlrrXoioJcIiwgXCLkuIrlhYPoioJcIiwgXCLmraPnga/ml6VcIiwgXCLlpKnlrpjor57ovrBcIl0sXG4gICAgMTg6IFtcIuiQveeBr+aXpVwiXSxcbiAgICAyNTogW1wi5aSp5LuTKOWhq+S7kynoioJcIl1cbiAgfSxcbiAgMjoge1xuICAgIC8vIOS6jOaciFxuICAgIDE6IFtcIuWkqumYs+eUn+aXpVwiXSxcbiAgICAyOiBbXCLmmKXpvpnoioJcIiwgXCLlnJ/lnLDlhaznlJ/ml6VcIiwgXCLmtY7lhazmtLvkvZvnlJ/ml6VcIl0sXG4gICAgMzogW1wi5paH5piM5bid5ZCb6K+e6L6wXCJdLFxuICAgIDEyOiBbXCLnmb7oirHnlJ/ml6Uo6Iqx5pyd6IqCKVwiXSxcbiAgICAxNTogW1wi5Lmd5aSp546E5aWz6K+e6L6wXCIsIFwi5aSq5LiK6ICB5ZCb6K+e6L6wXCIsIFwi57K+5b+g5bKz546L6K+e6L6wXCJdLFxuICAgIDE5OiBbXCLop4Lpn7Poj6nokKjor57ovrBcIl0sXG4gICAgMjE6IFtcIuaZrui0pOiPqeiQqOivnui+sFwiXVxuICB9LFxuICAzOiB7XG4gICAgMzogW1wi5LiK5bez6IqCXCJdLFxuICAgIDE1OiBbXCLotbXlhazlhYPluIXor57ovrBcIiwgXCLms7DlsbHogIHmr43or57ovrBcIl1cbiAgfSxcbiAgNDoge1xuICAgIDE6IFtcIuelrembueelnlwiXSxcbiAgICA0OiBbXCLmlofmroroj6nokKjor57ovrBcIl0sXG4gICAgODogW1wi5rW05L2b6IqCKOm+meWNjuS8milcIl0sXG4gICAgMTI6IFtcIuibh+eOi+ivnui+sFwiXSxcbiAgICAxNDogW1wi5ZCV5rSe5a6+6K+e6L6wXCJdLFxuICAgIDE4OiBbXCLljY7kvZfor57ovrBcIl0sXG4gICAgMjg6IFtcIuiNr+eOiyjnpZ7lhpwp6K+e6L6wXCJdXG4gIH0sXG4gIDU6IHtcbiAgICA1OiBbXCLnq6/ljYjoioJcIl0sXG4gICAgMTM6IFtcIumbqOiKglwiLCBcIum7hOW4neivnui+sFwiXVxuICB9LFxuICA2OiB7XG4gICAgMTogW1wi5Y2K5bm06IqCXCJdLFxuICAgIDY6IFtcIuaZkuiho+iKglwiXSxcbiAgICAxOTogW1wi6KeC6Z+z6I+p6JCo5b6X6YGTXCJdLFxuICAgIDI0OiBbXCLpm7fnpZ7or57ovrBcIiwgXCLojbfoirHnlJ/ml6VcIiwgXCLlhbPlhazor57ovrBcIl1cbiAgfSxcbiAgNzoge1xuICAgIDE6IFtcIuelrea1t+elnlwiXSxcbiAgICA3OiBbXCLkuZ7lt6foioJcIl0sXG4gICAgMTU6IFtcIuS4reWFgyjprLwp6IqCXCIsIFwi5Zyw5a6Y6K+e6L6wKOWtn+WFsOebhuS8milcIl0sXG4gICAgMTg6IFtcIuilv+eOi+avjeivnui+sFwiXSxcbiAgICAyMDogW1wi5qOJ6Iqx55Sf5pelXCJdLFxuICAgIDIzOiBbXCLor7jokZvkuq7or57ovrBcIl0sXG4gICAgMzA6IFtcIuWcsOiXj+iPqeiQqOivnui+sFwiXVxuICB9LFxuICA4OiB7XG4gICAgMTogW1wi5aSp5Yy76IqCXCJdLFxuICAgIDM6IFtcIueBtuWQm+eUn+aXpVwiXSxcbiAgICA4OiBbXCLnkbbmsaDlpKfkvJpcIl0sXG4gICAgMTU6IFtcIuS4reeni+iKglwiXSxcbiAgICAyMDogW1wi5rC056i755Sf5pelXCJdLFxuICAgIDI4OiBbXCLlrZTlrZDor57ovrBcIl1cbiAgfSxcbiAgOToge1xuICAgIDk6IFtcIumHjemYs+iKglwiXSxcbiAgICAxOTogW1wi6KeC6Z+z6I+p6JCo5Ye65a62XCJdXG4gIH0sXG4gIDEwOiB7XG4gICAgMTogW1wi5Y2B5pyI5pydXCIsIFwi5a+S6KGj6IqCXCJdLFxuICAgIDE1OiBbXCLkuIvlhYPoioJcIiwgXCLmsLTlrpjor57ovrBcIl1cbiAgfSxcbiAgMTI6IHtcbiAgICA4OiBbXCLohYrlhavoioJcIl0sXG4gICAgMjM6IFtcIuWumOWutumAgeeBtlwiXSxcbiAgICAyNDogW1wi5rCR6Ze06YCB54G2XCJdLFxuICAgIDI1OiBbXCLmjqXnjonnmodcIl1cbiAgfVxufSwgeXQgPSBbXG4gIC8vIOWkhOeQhuWvkumjn+iKgu+8iOa4heaYjuWJjeS4gOaXpe+8iVxuICAociwgdCkgPT4ge1xuICAgIGNvbnN0IGUgPSByLmFkZCgxLCBcImRheVwiKTtcbiAgICAkKGUpLmZpbmQoKG8pID0+IG8udGVybSA9PT0gXCJwdXJlX2JyaWdodG5lc3NcIikgJiYgdC5wdXNoKHtcbiAgICAgIGRhdGU6IHIuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSxcbiAgICAgIG5hbWU6IFwi5a+S6aOf6IqCXCIsXG4gICAgICB0eXBlOiBcInNvbGFyX3Rlcm1cIlxuICAgIH0pO1xuICB9LFxuICAvLyDlpITnkIbpmaTlpJXvvIjlhpzljobohYrmnIjmnIDlkI7kuIDml6XvvIlcbiAgKHIsIHQpID0+IHtcbiAgICBjb25zdCBlID0gbShyKTtcbiAgICBpZiAoZS5sdW5hck1vbiA9PT0gMTIgJiYgZS5sdW5hckRheSA9PT0gRChlLmx1bmFyWWVhciwgMTIpKSB7XG4gICAgICBjb25zdCBhID0gci5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xuICAgICAgW1wi6Zmk5aSVXCIsIFwi5bCB5LqVXCIsIFwi56Wt5LqV56WeXCIsIFwi6LS05pil6IGUXCIsIFwi6L+O6LSi56WeXCJdLmZvckVhY2goKG8pID0+IHtcbiAgICAgICAgdC5wdXNoKHtcbiAgICAgICAgICBkYXRlOiBhLFxuICAgICAgICAgIG5hbWU6IG8sXG4gICAgICAgICAgdHlwZTogXCJsdW5hclwiXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5dLCBxID0gKHIsIHQpID0+IHtcbiAgdmFyIHM7XG4gIGNvbnN0IGUgPSBbXTtcbiAgbGV0IGEgPSBoKHIpO1xuICBjb25zdCBvID0gaCh0IHx8IHIpO1xuICBmb3IgKDsgYS5pc0JlZm9yZShvKSB8fCBhLmlzU2FtZShvKTsgKSB7XG4gICAgY29uc3QgbiA9IG0oYSk7XG4gICAgbi5pc0xlYXAgfHwgKCgocyA9IF90W24ubHVuYXJNb25dKSA9PSBudWxsID8gdm9pZCAwIDogc1tuLmx1bmFyRGF5XSkgfHwgW10pLmZvckVhY2goKGkpID0+IHtcbiAgICAgIGUucHVzaCh7XG4gICAgICAgIGRhdGU6IGEuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSxcbiAgICAgICAgbmFtZTogaSxcbiAgICAgICAgdHlwZTogXCJsdW5hclwiXG4gICAgICB9KTtcbiAgICB9KSwgeXQuZm9yRWFjaCgoZCkgPT4gZChhLCBlKSksIGEgPSBhLmFkZCgxLCBcImRheVwiKTtcbiAgfVxuICByZXR1cm4gZS5yZWR1Y2UoKG4sIGQpID0+IHtcbiAgICBjb25zdCBpID0gbi5maW5kKChfKSA9PiBfLmRhdGUgPT09IGQuZGF0ZSk7XG4gICAgcmV0dXJuIGkgPyBpLm5hbWUucHVzaChkLm5hbWUpIDogbi5wdXNoKHsgZGF0ZTogZC5kYXRlLCBuYW1lOiBbZC5uYW1lXSB9KSwgbjtcbiAgfSwgW10pO1xufSwgdXQgPSB7XG4gIGdldEx1bmFyRmVzdGl2YWxzOiBxXG59LCB3dCA9IC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuZnJlZXplKC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuZGVmaW5lUHJvcGVydHkoe1xuICBfX3Byb3RvX186IG51bGwsXG4gIGRlZmF1bHQ6IHV0LFxuICBnZXRMdW5hckZlc3RpdmFsczogcVxufSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiBcIk1vZHVsZVwiIH0pKSwgZnQgPSB7XG4gIC4uLnR0LFxuICAuLi5vdCxcbiAgLi4uaHQsXG4gIC4uLnd0XG59O1xuZXhwb3J0IHtcbiAgZnQgYXMgZGVmYXVsdCxcbiAgWCBhcyBmaW5kV29ya2RheSxcbiAgSiBhcyBnZXREYXlEZXRhaWwsXG4gIEsgYXMgZ2V0SG9saWRheXNJblJhbmdlLFxuICBtIGFzIGdldEx1bmFyRGF0ZSxcbiAgaiBhcyBnZXRMdW5hckRhdGVzSW5SYW5nZSxcbiAgcSBhcyBnZXRMdW5hckZlc3RpdmFscyxcbiAgUiBhcyBnZXRMdW5hclllYXJzLFxuICBJIGFzIGdldFNvbGFyRGF0ZUZyb21MdW5hcixcbiAgTCBhcyBnZXRTb2xhclRlcm1EYXRlLFxuICBhdCBhcyBnZXRTb2xhclRlcm1zLFxuICAkIGFzIGdldFNvbGFyVGVybXNJblJhbmdlLFxuICBRIGFzIGdldFdvcmtkYXlzSW5SYW5nZSxcbiAgQyBhcyBnZXRZZWFyTGVhcE1vbnRoLFxuICBPIGFzIGlzSG9saWRheSxcbiAgRyBhcyBpc0luTGlldSxcbiAgZiBhcyBpc1dvcmtkYXksXG4gIEQgYXMgbW9udGhEYXlzXG59O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQSxvRkFBQUEsVUFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxRQUFRLFNBQVVDLEtBQUk7QUFDeEIsYUFBT0EsT0FBTUEsSUFBRyxTQUFTLFFBQVFBO0FBQUEsSUFDbkM7QUFHQSxJQUFBRCxRQUFPO0FBQUEsSUFFTCxNQUFNLE9BQU8sY0FBYyxZQUFZLFVBQVUsS0FDakQsTUFBTSxPQUFPLFVBQVUsWUFBWSxNQUFNO0FBQUEsSUFFekMsTUFBTSxPQUFPLFFBQVEsWUFBWSxJQUFJLEtBQ3JDLE1BQU0sT0FBTyxVQUFVLFlBQVksTUFBTSxLQUN6QyxNQUFNLE9BQU9ELFlBQVEsWUFBWUEsUUFBSTtBQUFBLElBRXBDLDRCQUFZO0FBQUUsYUFBTztBQUFBLElBQU0sR0FBRyxLQUFLLFNBQVMsYUFBYSxFQUFFO0FBQUE7QUFBQTs7O0FDZjlEO0FBQUEsOEVBQUFHLFVBQUFDLFNBQUE7QUFBQTtBQUNBLElBQUFBLFFBQU8sVUFBVSxT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QUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNB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RUFDcEQ7QUFDQSxTQUFPN0IsRUFBRWdMLE9BQU8sQ0FBQ3hILEdBQUcyQixNQUFNO0FBQ3hCLFVBQU1DLElBQUk1QixFQUFFc0gsS0FBTXpGLE9BQU1BLEVBQUVwQyxTQUFTa0MsRUFBRWxDLElBQUk7QUFDekMsV0FBT21DLElBQUlBLEVBQUVTLEtBQUt1QyxLQUFLakQsRUFBRVUsSUFBSSxJQUFJckMsRUFBRTRFLEtBQUs7TUFBRW5GLE1BQU1rQyxFQUFFbEM7TUFBTTRDLE1BQU0sQ0FBQ1YsRUFBRVUsSUFBSTtJQUFFLENBQUMsR0FBR3JDO0VBQzdFLEdBQUcsQ0FBQSxDQUFFO0FBQ1A7QUFocEJBLElBZ3BCR3lILEtBQUs7RUFDTmxOLG1CQUFtQkM7QUFDckI7QUFscEJBLElBa3BCR2tOLEtBQXFCdkwsdUJBQU91RyxPQUF1QnZHLHVCQUFPQyxlQUFlO0VBQzFFdUcsV0FBVztFQUNYd0UsU0FBU007RUFDVGxOLG1CQUFtQkM7QUFDckIsR0FBR29JLE9BQU9DLGFBQWE7RUFBRWpHLE9BQU87QUFBUyxDQUFDLENBQUM7QUF0cEIzQyxJQXNwQjhDK0ssS0FBSztFQUNqRCxHQUFHbEY7RUFDSCxHQUFHc0M7RUFDSCxHQUFHbUM7RUFDSCxHQUFHUTtBQUNMOyIsCiAgIm5hbWVzIjogWyJleHBvcnRzIiwgIm1vZHVsZSIsICJpdCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIlYiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiaXQiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiaXQiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiaXQiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiaXQiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiaXQiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiaXQiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJpdCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJWIiwgIlAiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIml0IiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiU3ltYm9sIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiZG9jdW1lbnQiLCAiaXQiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJPIiwgIlAiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJPIiwgIlAiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiaXQiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIlR5cGVFcnJvciIsICJpdCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJPIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIngiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiTyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJPIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiTyIsICJleHBvcnRzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIml0IiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiTyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJpdCIsICIkIiwgIk8iLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiaXQiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiRiIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJPIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIk8iLCAiZXhwb3J0cyIsICJPIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImFjdGl2ZVhEb2N1bWVudCIsICJPIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIiQiLCAiZ2xvYmFsVGhpcyIsICJJdGVyYXRvciIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJJdGVyYXRvciIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIkl0ZXJhdG9yIiwgIiQiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiaXQiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiaXQiLCAiTyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJpdCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICIkIiwgIiQiLCAiJCIsICJDaGluZXNlRGF5c19leHBvcnRzIiwgIl9fZXhwb3J0IiwgImZpbmRXb3JrZGF5IiwgIlgiLCAiZ2V0RGF5RGV0YWlsIiwgIkoiLCAiZ2V0SG9saWRheXNJblJhbmdlIiwgIksiLCAiZ2V0THVuYXJEYXRlIiwgIm0iLCAiZ2V0THVuYXJEYXRlc0luUmFuZ2UiLCAiaiIsICJnZXRMdW5hckZlc3RpdmFscyIsICJxIiwgImdldEx1bmFyWWVhcnMiLCAiUiIsICJnZXRTb2xhckRhdGVGcm9tTHVuYXIiLCAiSSIsICJnZXRTb2xhclRlcm1EYXRlIiwgIkwiLCAiZ2V0U29sYXJUZXJtcyIsICJhdCIsICJnZXRTb2xhclRlcm1zSW5SYW5nZSIsICIkIiwgImdldFdvcmtkYXlzSW5SYW5nZSIsICJRIiwgImdldFllYXJMZWFwTW9udGgiLCAiQyIsICJpc0hvbGlkYXkiLCAiTyIsICJpc0luTGlldSIsICJHIiwgImlzV29ya2RheSIsICJmIiwgIm1vbnRoRGF5cyIsICJEIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIl9fdG9Db21tb25KUyIsICJQIiwgIk9iamVjdCIsICJkZWZpbmVQcm9wZXJ0eSIsICJVIiwgInIiLCAidCIsICJlIiwgImVudW1lcmFibGUiLCAiY29uZmlndXJhYmxlIiwgIndyaXRhYmxlIiwgInZhbHVlIiwgInciLCAibCIsICJsMiIsICJjb25zdHJ1Y3RvciIsICJfZGF0ZSIsICJEYXRlIiwgInRvRGF0ZSIsICJpc05hTiIsICJnZXRUaW1lIiwgInJlcGxhY2UiLCAiaXNWYWxpZCIsICJkaWZmIiwgImEiLCAibyIsICJnZXRGdWxsWWVhciIsICJnZXRNb250aCIsICJNYXRoIiwgImZsb29yIiwgInN0YXJ0T2YiLCAic2V0TW9udGgiLCAic2V0RGF0ZSIsICJzZXRIb3VycyIsICJlbmRPZiIsICJnZXREYXRlIiwgImFkZCIsICJzZXRGdWxsWWVhciIsICJzdWJ0cmFjdCIsICJmb3JtYXQiLCAiWVlZWSIsICJNTSIsICJ0b1N0cmluZyIsICJwYWRTdGFydCIsICJERCIsICJISCIsICJnZXRIb3VycyIsICJtbSIsICJnZXRNaW51dGVzIiwgInNzIiwgImdldFNlY29uZHMiLCAiZGRkZCIsICJkYXlzT2ZXZWVrIiwgImdldERheSIsICJ5ZWFyIiwgIm1vbnRoIiwgImRhdGUiLCAiZGF5IiwgImlzQmVmb3JlIiwgImlzQWZ0ZXIiLCAiaXNTYW1lIiwgImlzQmV0d2VlbiIsICJzIiwgIm4iLCAiUyIsICJoIiwgInUiLCAiWSIsICJBcnJheSIsICJmcm9tIiwgImxlbmd0aCIsICJXIiwgInoiLCAieSIsICJkYXlEZXRhaWxzIiwgImdldEhvbGlkYXlEYXlzIiwgIl9pIiwgIl9PYmplY3QkZW50cmllcyIsICJlbnRyaWVzIiwgInBhcnNlSW50IiwgIm1hcmsiLCAiaG9saWRheSIsICJzYXZlIiwgIkVycm9yIiwgImRheVR5cGUiLCAiY29uY2F0IiwgImhvbGlkYXlzIiwgIndvcmtkYXlzIiwgImluTGlldURheXMiLCAidG8iLCAiZCIsICJpIiwgIl8iLCAibnkiLCAiViIsICJNIiwgImsiLCAiWiIsICJjIiwgIndvcmsiLCAibmFtZSIsICJmaWx0ZXIiLCAibWFwIiwgImFicyIsICJ0dCIsICJmcmVlemUiLCAiX19wcm90b19fIiwgIlN5bWJvbCIsICJ0b1N0cmluZ1RhZyIsICJldCIsICJ0aGVfYmVnaW5uaW5nX29mX3NwcmluZyIsICJyYWluX3dhdGVyIiwgInRoZV93YWtpbmdfb2ZfaW5zZWN0cyIsICJ0aGVfc3ByaW5nX2VxdWlub3giLCAicHVyZV9icmlnaHRuZXNzIiwgImdyYWluX3JhaW4iLCAidGhlX2JlZ2lubmluZ19vZl9zdW1tZXIiLCAibGVzc2VyX2Z1bGxuZXNzX29mX2dyYWluIiwgImdyYWluX2luX2JlYXJkIiwgInRoZV9zdW1tZXJfc29sc3RpY2UiLCAibGVzc2VyX2hlYXQiLCAiZ3JlYXRlcl9oZWF0IiwgInRoZV9iZWdpbm5pbmdfb2ZfYXV0dW1uIiwgInRoZV9lbmRfb2ZfaGVhdCIsICJ3aGl0ZV9kZXciLCAidGhlX2F1dHVtbl9lcXVpbm94IiwgImNvZGVfZGV3IiwgImZyb3N0X2Rlc2NlbnQiLCAidGhlX2JlZ2lubmluZ19vZl93aW50ZXIiLCAibGVzc2VyX3Nub3ciLCAiZ3JlYXRlcl9zbm93IiwgInRoZV93aW50ZXJfc29sc3RpY2UiLCAibGVzc2VyX2NvbGQiLCAiZ3JlYXRlcl9jb2xkIiwgIlQiLCAicnQiLCAiRSIsICJpbmNsdWRlcyIsICJmb3JFYWNoIiwgInB1c2giLCAidGVybSIsICJpbmRleCIsICJvdCIsICJnIiwgIkYiLCAiQSIsICJIIiwgIkIiLCAibnQiLCAieCIsICJ2IiwgInAiLCAiYiIsICJzdCIsICJpdCIsICJkdCIsICJsdW5hclllYXIiLCAibHVuYXJZZWFyQ04iLCAic3BsaXQiLCAiTnVtYmVyIiwgImpvaW4iLCAibGVhcE1vbnRoIiwgImxlYXBNb250aENOIiwgImRheXMiLCAiZmlsbCIsICJsdW5hck1vbiIsICJsdW5hckRheSIsICJpc0xlYXAiLCAiem9kaWFjIiwgInllYXJDeWwiLCAibW9uQ3lsIiwgImRheUN5bCIsICJsdW5hck1vbkNOIiwgImx1bmFyRGF5Q04iLCAiTiIsICJsZWFwTW9udGhEYXRlIiwgImx0IiwgImh0IiwgImRlZmF1bHQiLCAiX3QiLCAieXQiLCAiZmluZCIsICJ0eXBlIiwgInJlZHVjZSIsICJ1dCIsICJ3dCIsICJmdCJdCn0K
