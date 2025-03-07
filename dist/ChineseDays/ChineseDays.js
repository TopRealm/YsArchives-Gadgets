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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/global-this.js
var require_global_this = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/global-this.js"(exports2, module2) {
    "use strict";
    var check = function(it2) {
      return it2 && it2.Math === Math && it2;
    };
    module2.exports = // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == "object" && self) || check(typeof global == "object" && global) || check(typeof exports2 == "object" && exports2) || // eslint-disable-next-line no-new-func -- fallback
    /* @__PURE__ */ function() {
      return this;
    }() || Function("return this")();
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/fails.js
var require_fails = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/fails.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/descriptors.js
var require_descriptors = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/descriptors.js"(exports2, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      return Object.defineProperty({}, 1, { get: function() {
        return 7;
      } })[1] !== 7;
    });
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-bind-native.js
var require_function_bind_native = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-bind-native.js"(exports2, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      var test = function() {
      }.bind();
      return typeof test != "function" || test.hasOwnProperty("prototype");
    });
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-call.js
var require_function_call = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-call.js"(exports2, module2) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var call = Function.prototype.call;
    module2.exports = NATIVE_BIND ? call.bind(call) : function() {
      return call.apply(call, arguments);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-property-is-enumerable.js
var require_object_property_is_enumerable = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-property-is-enumerable.js"(exports2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/create-property-descriptor.js
var require_create_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/create-property-descriptor.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-uncurry-this.js
var require_function_uncurry_this = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-uncurry-this.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/classof-raw.js
var require_classof_raw = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/classof-raw.js"(exports2, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toString = uncurryThis({}.toString);
    var stringSlice = uncurryThis("".slice);
    module2.exports = function(it2) {
      return stringSlice(toString(it2), 8, -1);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/indexed-object.js
var require_indexed_object = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/indexed-object.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-null-or-undefined.js
var require_is_null_or_undefined = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-null-or-undefined.js"(exports2, module2) {
    "use strict";
    module2.exports = function(it2) {
      return it2 === null || it2 === void 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/require-object-coercible.js"(exports2, module2) {
    "use strict";
    var isNullOrUndefined = require_is_null_or_undefined();
    var $TypeError = TypeError;
    module2.exports = function(it2) {
      if (isNullOrUndefined(it2)) throw new $TypeError("Can't call method on " + it2);
      return it2;
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-indexed-object.js
var require_to_indexed_object = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-indexed-object.js"(exports2, module2) {
    "use strict";
    var IndexedObject = require_indexed_object();
    var requireObjectCoercible = require_require_object_coercible();
    module2.exports = function(it2) {
      return IndexedObject(requireObjectCoercible(it2));
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-callable.js
var require_is_callable = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-callable.js"(exports2, module2) {
    "use strict";
    var documentAll = typeof document == "object" && document.all;
    module2.exports = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
      return typeof argument == "function" || argument === documentAll;
    } : function(argument) {
      return typeof argument == "function";
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-object.js
var require_is_object = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-object.js"(exports2, module2) {
    "use strict";
    var isCallable = require_is_callable();
    module2.exports = function(it2) {
      return typeof it2 == "object" ? it2 !== null : isCallable(it2);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/get-built-in.js
var require_get_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/get-built-in.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-is-prototype-of.js
var require_object_is_prototype_of = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-is-prototype-of.js"(exports2, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    module2.exports = uncurryThis({}.isPrototypeOf);
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/environment-user-agent.js
var require_environment_user_agent = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/environment-user-agent.js"(exports2, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var navigator = globalThis2.navigator;
    var userAgent = navigator && navigator.userAgent;
    module2.exports = userAgent ? String(userAgent) : "";
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/environment-v8-version.js
var require_environment_v8_version = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/environment-v8-version.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/symbol-constructor-detection.js
var require_symbol_constructor_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/symbol-constructor-detection.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/use-symbol-as-uid.js
var require_use_symbol_as_uid = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/use-symbol-as-uid.js"(exports2, module2) {
    "use strict";
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-symbol.js
var require_is_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-symbol.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/try-to-string.js
var require_try_to_string = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/try-to-string.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/a-callable.js
var require_a_callable = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/a-callable.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/get-method.js
var require_get_method = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/get-method.js"(exports2, module2) {
    "use strict";
    var aCallable = require_a_callable();
    var isNullOrUndefined = require_is_null_or_undefined();
    module2.exports = function(V2, P2) {
      var func = V2[P2];
      return isNullOrUndefined(func) ? void 0 : aCallable(func);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/ordinary-to-primitive.js
var require_ordinary_to_primitive = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/ordinary-to-primitive.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-pure.js
var require_is_pure = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-pure.js"(exports2, module2) {
    "use strict";
    module2.exports = false;
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/define-global-property.js
var require_define_global_property = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/define-global-property.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/shared-store.js
var require_shared_store = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/shared-store.js"(exports2, module2) {
    "use strict";
    var IS_PURE = require_is_pure();
    var globalThis2 = require_global_this();
    var defineGlobalProperty = require_define_global_property();
    var SHARED = "__core-js_shared__";
    var store = module2.exports = globalThis2[SHARED] || defineGlobalProperty(SHARED, {});
    (store.versions || (store.versions = [])).push({
      version: "3.40.0",
      mode: IS_PURE ? "pure" : "global",
      copyright: "© 2014-2025 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.40.0/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/shared.js
var require_shared = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/shared.js"(exports2, module2) {
    "use strict";
    var store = require_shared_store();
    module2.exports = function(key, value) {
      return store[key] || (store[key] = value || {});
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-object.js
var require_to_object = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-object.js"(exports2, module2) {
    "use strict";
    var requireObjectCoercible = require_require_object_coercible();
    var $Object = Object;
    module2.exports = function(argument) {
      return $Object(requireObjectCoercible(argument));
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/has-own-property.js
var require_has_own_property = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/has-own-property.js"(exports2, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toObject = require_to_object();
    var hasOwnProperty = uncurryThis({}.hasOwnProperty);
    module2.exports = Object.hasOwn || function hasOwn(it2, key) {
      return hasOwnProperty(toObject(it2), key);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/uid.js
var require_uid = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/uid.js"(exports2, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var id = 0;
    var postfix = Math.random();
    var toString = uncurryThis(1 .toString);
    module2.exports = function(key) {
      return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString(++id + postfix, 36);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/well-known-symbol.js
var require_well_known_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/well-known-symbol.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-primitive.js
var require_to_primitive = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-primitive.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-property-key.js
var require_to_property_key = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-property-key.js"(exports2, module2) {
    "use strict";
    var toPrimitive = require_to_primitive();
    var isSymbol = require_is_symbol();
    module2.exports = function(argument) {
      var key = toPrimitive(argument, "string");
      return isSymbol(key) ? key : key + "";
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/document-create-element.js
var require_document_create_element = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/document-create-element.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/ie8-dom-define.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-get-own-property-descriptor.js
var require_object_get_own_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/v8-prototype-define-bug.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/an-object.js
var require_an_object = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/an-object.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-define-property.js
var require_object_define_property = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-define-property.js"(exports2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/create-non-enumerable-property.js
var require_create_non_enumerable_property = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/create-non-enumerable-property.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-name.js
var require_function_name = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-name.js"(exports2, module2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var hasOwn = require_has_own_property();
    var FunctionPrototype = Function.prototype;
    var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
    var EXISTS = hasOwn(FunctionPrototype, "name");
    var PROPER = EXISTS && function something() {
    }.name === "something";
    var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
    module2.exports = {
      EXISTS,
      PROPER,
      CONFIGURABLE
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/inspect-source.js
var require_inspect_source = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/inspect-source.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/weak-map-basic-detection.js
var require_weak_map_basic_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/weak-map-basic-detection.js"(exports2, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var isCallable = require_is_callable();
    var WeakMap = globalThis2.WeakMap;
    module2.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/shared-key.js
var require_shared_key = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/shared-key.js"(exports2, module2) {
    "use strict";
    var shared = require_shared();
    var uid = require_uid();
    var keys = shared("keys");
    module2.exports = function(key) {
      return keys[key] || (keys[key] = uid(key));
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/hidden-keys.js
var require_hidden_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/hidden-keys.js"(exports2, module2) {
    "use strict";
    module2.exports = {};
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/internal-state.js
var require_internal_state = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/internal-state.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/make-built-in.js
var require_make_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/make-built-in.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/define-built-in.js
var require_define_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/define-built-in.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/math-trunc.js
var require_math_trunc = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/math-trunc.js"(exports2, module2) {
    "use strict";
    var ceil = Math.ceil;
    var floor = Math.floor;
    module2.exports = Math.trunc || function trunc(x2) {
      var n = +x2;
      return (n > 0 ? floor : ceil)(n);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-integer-or-infinity.js
var require_to_integer_or_infinity = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-integer-or-infinity.js"(exports2, module2) {
    "use strict";
    var trunc = require_math_trunc();
    module2.exports = function(argument) {
      var number = +argument;
      return number !== number || number === 0 ? 0 : trunc(number);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-absolute-index.js
var require_to_absolute_index = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-absolute-index.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-length.js
var require_to_length = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-length.js"(exports2, module2) {
    "use strict";
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var min = Math.min;
    module2.exports = function(argument) {
      var len = toIntegerOrInfinity(argument);
      return len > 0 ? min(len, 9007199254740991) : 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/length-of-array-like.js
var require_length_of_array_like = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/length-of-array-like.js"(exports2, module2) {
    "use strict";
    var toLength = require_to_length();
    module2.exports = function(obj) {
      return toLength(obj.length);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/array-includes.js
var require_array_includes = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/array-includes.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-keys-internal.js
var require_object_keys_internal = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-keys-internal.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/enum-bug-keys.js
var require_enum_bug_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/enum-bug-keys.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-get-own-property-names.js
var require_object_get_own_property_names = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-get-own-property-names.js"(exports2) {
    "use strict";
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = enumBugKeys.concat("length", "prototype");
    exports2.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O2) {
      return internalObjectKeys(O2, hiddenKeys);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-get-own-property-symbols.js
var require_object_get_own_property_symbols = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-get-own-property-symbols.js"(exports2) {
    "use strict";
    exports2.f = Object.getOwnPropertySymbols;
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/own-keys.js
var require_own_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/own-keys.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/copy-constructor-properties.js
var require_copy_constructor_properties = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/copy-constructor-properties.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-forced.js
var require_is_forced = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-forced.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/export.js
var require_export = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/export.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-array.js
var require_is_array = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-array.js"(exports2, module2) {
    "use strict";
    var classof = require_classof_raw();
    module2.exports = Array.isArray || function isArray(argument) {
      return classof(argument) === "Array";
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/array-set-length.js
var require_array_set_length = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/array-set-length.js"(exports2, module2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var isArray = require_is_array();
    var $TypeError = TypeError;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function() {
      if (this !== void 0) return true;
      try {
        Object.defineProperty([], "length", { writable: false }).length = 1;
      } catch (error) {
        return error instanceof TypeError;
      }
    }();
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/does-not-exceed-safe-integer.js
var require_does_not_exceed_safe_integer = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/does-not-exceed-safe-integer.js"(exports2, module2) {
    "use strict";
    var $TypeError = TypeError;
    var MAX_SAFE_INTEGER = 9007199254740991;
    module2.exports = function(it2) {
      if (it2 > MAX_SAFE_INTEGER) throw $TypeError("Maximum allowed index exceeded");
      return it2;
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.array.push.js
var require_es_array_push = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.array.push.js"() {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/an-instance.js
var require_an_instance = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/an-instance.js"(exports2, module2) {
    "use strict";
    var isPrototypeOf = require_object_is_prototype_of();
    var $TypeError = TypeError;
    module2.exports = function(it2, Prototype) {
      if (isPrototypeOf(Prototype, it2)) return it2;
      throw new $TypeError("Incorrect invocation");
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/correct-prototype-getter.js
var require_correct_prototype_getter = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/correct-prototype-getter.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-get-prototype-of.js
var require_object_get_prototype_of = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-get-prototype-of.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/define-built-in-accessor.js
var require_define_built_in_accessor = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/define-built-in-accessor.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/create-property.js
var require_create_property = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/create-property.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-keys.js
var require_object_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-keys.js"(exports2, module2) {
    "use strict";
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    module2.exports = Object.keys || function keys(O2) {
      return internalObjectKeys(O2, enumBugKeys);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-define-properties.js
var require_object_define_properties = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-define-properties.js"(exports2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/html.js
var require_html = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/html.js"(exports2, module2) {
    "use strict";
    var getBuiltIn = require_get_built_in();
    module2.exports = getBuiltIn("document", "documentElement");
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-create.js
var require_object_create = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/object-create.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/iterators-core.js
var require_iterators_core = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/iterators-core.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.constructor.js
var require_es_iterator_constructor = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.constructor.js"() {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/esnext.iterator.constructor.js
var require_esnext_iterator_constructor = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/esnext.iterator.constructor.js"() {
    "use strict";
    require_es_iterator_constructor();
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/get-iterator-direct.js
var require_get_iterator_direct = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/get-iterator-direct.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/define-built-ins.js
var require_define_built_ins = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/define-built-ins.js"(exports2, module2) {
    "use strict";
    var defineBuiltIn = require_define_built_in();
    module2.exports = function(target, src, options) {
      for (var key in src) defineBuiltIn(target, key, src[key], options);
      return target;
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/create-iter-result-object.js
var require_create_iter_result_object = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/create-iter-result-object.js"(exports2, module2) {
    "use strict";
    module2.exports = function(value, done) {
      return { value, done };
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/iterator-close.js
var require_iterator_close = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/iterator-close.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/iterator-create-proxy.js
var require_iterator_create_proxy = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/iterator-create-proxy.js"(exports2, module2) {
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
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    var ITERATOR_HELPER = "IteratorHelper";
    var WRAP_FOR_VALID_ITERATOR = "WrapForValidIterator";
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
            iteratorClose(state.inner.iterator, "normal");
          } catch (error) {
            return iteratorClose(iterator, "throw", error);
          }
          if (iterator) iteratorClose(iterator, "normal");
          return createIterResultObject(void 0, true);
        }
      });
    };
    var WrapForValidIteratorPrototype = createIteratorProxyPrototype(true);
    var IteratorHelperPrototype = createIteratorProxyPrototype(false);
    createNonEnumerableProperty(IteratorHelperPrototype, TO_STRING_TAG, "Iterator Helper");
    module2.exports = function(nextHandler, IS_ITERATOR, RETURN_HANDLER_RESULT) {
      var IteratorProxy = function Iterator(record, state) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/call-with-safe-iteration-closing.js
var require_call_with_safe_iteration_closing = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/call-with-safe-iteration-closing.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.filter.js
var require_es_iterator_filter = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.filter.js"() {
    "use strict";
    var $2 = require_export();
    var call = require_function_call();
    var aCallable = require_a_callable();
    var anObject = require_an_object();
    var getIteratorDirect = require_get_iterator_direct();
    var createIteratorProxy = require_iterator_create_proxy();
    var callWithSafeIterationClosing = require_call_with_safe_iteration_closing();
    var IS_PURE = require_is_pure();
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
    $2({ target: "Iterator", proto: true, real: true, forced: IS_PURE }, {
      filter: function filter(predicate) {
        anObject(this);
        aCallable(predicate);
        return new IteratorProxy(getIteratorDirect(this), {
          predicate
        });
      }
    });
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/esnext.iterator.filter.js
var require_esnext_iterator_filter = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/esnext.iterator.filter.js"() {
    "use strict";
    require_es_iterator_filter();
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-uncurry-this-clause.js
var require_function_uncurry_this_clause = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-uncurry-this-clause.js"(exports2, module2) {
    "use strict";
    var classofRaw = require_classof_raw();
    var uncurryThis = require_function_uncurry_this();
    module2.exports = function(fn) {
      if (classofRaw(fn) === "Function") return uncurryThis(fn);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-bind-context.js
var require_function_bind_context = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/function-bind-context.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/iterators.js
var require_iterators = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/iterators.js"(exports2, module2) {
    "use strict";
    module2.exports = {};
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-array-iterator-method.js
var require_is_array_iterator_method = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-array-iterator-method.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-string-tag-support.js
var require_to_string_tag_support = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-string-tag-support.js"(exports2, module2) {
    "use strict";
    var wellKnownSymbol = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    var test = {};
    test[TO_STRING_TAG] = "z";
    module2.exports = String(test) === "[object z]";
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/classof.js
var require_classof = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/classof.js"(exports2, module2) {
    "use strict";
    var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
    var isCallable = require_is_callable();
    var classofRaw = require_classof_raw();
    var wellKnownSymbol = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    var $Object = Object;
    var CORRECT_ARGUMENTS = classofRaw(/* @__PURE__ */ function() {
      return arguments;
    }()) === "Arguments";
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/get-iterator-method.js
var require_get_iterator_method = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/get-iterator-method.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/get-iterator.js
var require_get_iterator = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/get-iterator.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/iterate.js
var require_iterate = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/iterate.js"(exports2, module2) {
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
        if (iterator) iteratorClose(iterator, "normal", condition);
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.find.js
var require_es_iterator_find = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.find.js"() {
    "use strict";
    var $2 = require_export();
    var iterate = require_iterate();
    var aCallable = require_a_callable();
    var anObject = require_an_object();
    var getIteratorDirect = require_get_iterator_direct();
    $2({ target: "Iterator", proto: true, real: true }, {
      find: function find(predicate) {
        anObject(this);
        aCallable(predicate);
        var record = getIteratorDirect(this);
        var counter = 0;
        return iterate(record, function(value, stop) {
          if (predicate(value, counter++)) return stop(value);
        }, { IS_RECORD: true, INTERRUPTED: true }).result;
      }
    });
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/esnext.iterator.find.js
var require_esnext_iterator_find = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/esnext.iterator.find.js"() {
    "use strict";
    require_es_iterator_find();
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.for-each.js
var require_es_iterator_for_each = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.for-each.js"() {
    "use strict";
    var $2 = require_export();
    var iterate = require_iterate();
    var aCallable = require_a_callable();
    var anObject = require_an_object();
    var getIteratorDirect = require_get_iterator_direct();
    $2({ target: "Iterator", proto: true, real: true }, {
      forEach: function forEach(fn) {
        anObject(this);
        aCallable(fn);
        var record = getIteratorDirect(this);
        var counter = 0;
        iterate(record, function(value) {
          fn(value, counter++);
        }, { IS_RECORD: true });
      }
    });
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/esnext.iterator.for-each.js
var require_esnext_iterator_for_each = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/esnext.iterator.for-each.js"() {
    "use strict";
    require_es_iterator_for_each();
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/iterator-map.js
var require_iterator_map = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/iterator-map.js"(exports2, module2) {
    "use strict";
    var call = require_function_call();
    var aCallable = require_a_callable();
    var anObject = require_an_object();
    var getIteratorDirect = require_get_iterator_direct();
    var createIteratorProxy = require_iterator_create_proxy();
    var callWithSafeIterationClosing = require_call_with_safe_iteration_closing();
    var IteratorProxy = createIteratorProxy(function() {
      var iterator = this.iterator;
      var result = anObject(call(this.next, iterator));
      var done = this.done = !!result.done;
      if (!done) return callWithSafeIterationClosing(iterator, this.mapper, [result.value, this.counter++], true);
    });
    module2.exports = function map(mapper) {
      anObject(this);
      aCallable(mapper);
      return new IteratorProxy(getIteratorDirect(this), {
        mapper
      });
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.map.js
var require_es_iterator_map = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.map.js"() {
    "use strict";
    var $2 = require_export();
    var map = require_iterator_map();
    var IS_PURE = require_is_pure();
    $2({ target: "Iterator", proto: true, real: true, forced: IS_PURE }, {
      map
    });
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/esnext.iterator.map.js
var require_esnext_iterator_map = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/esnext.iterator.map.js"() {
    "use strict";
    require_es_iterator_map();
  }
});

// dist/ChineseDays/ChineseDays.js
require_es_array_push();
require_esnext_iterator_constructor();
require_esnext_iterator_filter();
require_esnext_iterator_find();
require_esnext_iterator_for_each();
require_esnext_iterator_map();
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
var U = (e, t, r) => t in e ? P(e, t, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: r
}) : e[t] = r;
var c = (e, t, r) => U(e, typeof t != "symbol" ? t + "" : t, r);
var d = class d2 {
  constructor(t) {
    c(this, "_date");
    t instanceof d2 ? this._date = new Date(t.toDate()) : t instanceof Date ? this._date = new Date(t) : typeof t == "string" || typeof t == "number" ? (this._date = new Date(t), typeof t == "string" && isNaN(this._date.getTime()) && (this._date = new Date(t.replace(/-/g, "/")))) : this._date = /* @__PURE__ */ new Date();
  }
  toDate() {
    return this._date;
  }
  isValid() {
    return !isNaN(this._date.getTime());
  }
  diff(t, r = "day") {
    const a = new d2(t).toDate(), n = this._date.getTime() - a.getTime();
    switch (r) {
      case "year":
        return this._date.getFullYear() - a.getFullYear();
      case "month":
        return (this._date.getFullYear() - a.getFullYear()) * 12 + (this._date.getMonth() - a.getMonth());
      case "day":
      default:
        return Math.floor(n / (1e3 * 60 * 60 * 24));
    }
  }
  startOf(t) {
    const r = new Date(this._date);
    switch (t) {
      case "year":
        r.setMonth(0), r.setDate(1), r.setHours(0, 0, 0, 0);
        break;
      case "month":
        r.setDate(1), r.setHours(0, 0, 0, 0);
        break;
      case "day":
        r.setHours(0, 0, 0, 0);
        break;
    }
    return new d2(r);
  }
  endOf(t) {
    const r = new Date(this._date);
    switch (t) {
      case "year":
        r.setMonth(11), r.setDate(31), r.setHours(23, 59, 59, 999);
        break;
      case "month":
        r.setDate(new Date(r.getFullYear(), r.getMonth() + 1, 0).getDate()), r.setHours(23, 59, 59, 999);
        break;
      case "day":
        r.setHours(23, 59, 59, 999);
        break;
    }
    return new d2(r);
  }
  add(t, r) {
    const a = new Date(this._date);
    switch (r) {
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
    return new d2(a);
  }
  subtract(t, r) {
    return this.add(-t, r);
  }
  format(t) {
    const r = {
      YYYY: this._date.getFullYear(),
      MM: (this._date.getMonth() + 1).toString().padStart(2, "0"),
      DD: this._date.getDate().toString().padStart(2, "0"),
      HH: this._date.getHours().toString().padStart(2, "0"),
      mm: this._date.getMinutes().toString().padStart(2, "0"),
      ss: this._date.getSeconds().toString().padStart(2, "0"),
      dddd: d2.daysOfWeek[this._date.getDay()]
    };
    return t.replace(/YYYY|MM|DD|HH|mm|ss|dddd/g, (a) => r[a].toString());
  }
  year(t) {
    if (t === void 0) return this._date.getFullYear();
    const r = new Date(this._date);
    return r.setFullYear(t), new d2(r);
  }
  month(t) {
    if (t === void 0) return this._date.getMonth();
    const r = new Date(this._date);
    return r.setMonth(t), new d2(r);
  }
  date(t) {
    if (t === void 0) return this._date.getDate();
    const r = new Date(this._date);
    return r.setDate(t), new d2(r);
  }
  day(t) {
    if (t === void 0) return this._date.getDay();
    {
      const r = this._date.getDay(), a = t - r, n = new Date(this._date);
      return n.setDate(this._date.getDate() + a), new d2(n);
    }
  }
  isBefore(t) {
    const r = new d2(t).toDate();
    return this._date.getTime() < r.getTime();
  }
  isAfter(t) {
    const r = new d2(t).toDate();
    return this._date.getTime() > r.getTime();
  }
  isSame(t, r = "day") {
    const a = new d2(t).toDate();
    switch (r) {
      case "year":
        return this._date.getFullYear() === a.getFullYear();
      case "month":
        return this._date.getFullYear() === a.getFullYear() && this._date.getMonth() === a.getMonth();
      case "day":
      default:
        return this._date.getFullYear() === a.getFullYear() && this._date.getMonth() === a.getMonth() && this._date.getDate() === a.getDate();
    }
  }
  isBetween(t, r, a) {
    const n = new d2(t).startOf(a).toDate(), l = new d2(r).endOf(a).toDate(), o = this.toDate();
    return o >= n && o <= l;
  }
};
c(d, "daysOfWeek", ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]);
var S = d;
var h = (e) => new S(e);
var u = (e) => h(e).startOf("day");
var Y = (e, t) => {
  e = u(e), t = u(t);
  const r = t.diff(e, "day");
  return Array.from({
    length: r + 1
  }, (a, n) => e.add(n, "day"));
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
    c(this, "dayDetails", {});
    c(this, "holidays", {});
    c(this, "workdays", {});
    c(this, "inLieuDays", {});
  }
  /** year at */
  y(t) {
    return this.dayDetails.year = t, this;
  }
  /** 查询某年 节假日天数 */
  getHolidayDays(t, r) {
    let a = 0;
    for (var _i = 0, _Object$entries = Object.entries(W); _i < _Object$entries.length; _i++) {
      const [n, l] = _Object$entries[_i];
      if (parseInt(n) > t) break;
      l[r] !== void 0 && (a = l[r]);
    }
    return a;
  }
  mark(t) {
    return this.dayDetails.holiday = t, this;
  }
  save(t, r, a) {
    if (!this.dayDetails.year) throw new Error("should set year before saving holiday");
    if (!this.dayDetails.holiday) throw new Error("should set holiday before saving holiday");
    this.dayDetails.month = t, this.dayDetails.day = r, this.dayDetails.dayType = a;
    const n = h("".concat(this.dayDetails.year, "-").concat(t, "-").concat(r)).format("YYYY-MM-DD"), l = this.getHolidayDays(this.dayDetails.year, this.dayDetails.holiday), o = "".concat(this.dayDetails.holiday, ",").concat(l);
    return a === 2 ? this.holidays[n] = o : a === 1 ? this.workdays[n] = o : a === 3 && (this.inLieuDays[n] = o), this;
  }
  to(t, r) {
    if (!this.dayDetails.holiday || !this.dayDetails.year || !this.dayDetails.month || !this.dayDetails.day) throw new Error("should set year/month/day before saving holiday range");
    const a = h("".concat(this.dayDetails.year, "-").concat(this.dayDetails.month, "-").concat(this.dayDetails.day)), n = h("".concat(this.dayDetails.year, "-").concat(t, "-").concat(r));
    if (n.isBefore(a) || n.isSame(a)) throw new Error("end date should be after start date");
    const l = this.getHolidayDays(this.dayDetails.year, this.dayDetails.holiday), o = "".concat(this.dayDetails.holiday, ",").concat(l), i = n.diff(a, "day");
    for (let s = 1; s <= i; s++) {
      const _ = a.add(s, "day").format("YYYY-MM-DD");
      this.dayDetails.dayType === 2 ? this.holidays[_] = o : this.dayDetails.dayType === 1 ? this.workdays[_] = o : this.dayDetails.dayType === 3 && (this.inLieuDays[_] = o);
    }
    return this;
  }
  /** work day */
  w(t, r) {
    return this.save(
      t,
      r,
      1
      /* Workday */
    );
  }
  /** rest */
  r(t, r) {
    return this.save(
      t,
      r,
      2
      /* Holiday */
    );
  }
  /** in-lieu */
  i(t, r) {
    return this.save(
      t,
      r,
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
  const e = new z();
  return e.y(2025).ny().r(1, 1).s().r(1, 28).to(2, 4).w(1, 26).w(2, 8).i(2, 3).i(2, 4).t().r(4, 4).to(4, 6).l().r(5, 1).to(5, 5).w(4, 27).i(5, 5).d().r(5, 31).to(6, 2).n().r(10, 1).to(10, 8).w(9, 28).w(10, 11).i(10, 7).i(10, 8).m().r(10, 6), e.y(2024).ny().r(1, 1).s().r(2, 10).to(2, 17).w(2, 4).w(2, 18).i(2, 15).to(2, 16).t().r(4, 4).to(4, 6).w(4, 7).i(4, 5).l().r(5, 1).to(5, 5).w(4, 28).w(5, 11).i(5, 2).to(5, 3).d().r(6, 10).m().r(9, 15).to(9, 17).w(9, 14).i(9, 16).n().r(10, 1).to(10, 7).w(9, 29).w(10, 12).i(10, 4).i(10, 7), e.y(2023).ny().r(1, 1).to(1, 2).s().r(1, 21).to(1, 27).w(1, 28).to(1, 29).i(1, 26).to(1, 27).t().r(4, 5).l().r(4, 29).to(5, 3).w(4, 23).w(5, 6).i(5, 2).to(5, 3).d().r(6, 22).to(6, 24).w(6, 25).i(6, 23).m().r(9, 29).n().r(9, 30).to(10, 6).w(10, 7).to(10, 8).i(10, 5).to(10, 6), e.y(2022).ny().r(1, 1).to(1, 3).s().r(1, 31).to(2, 6).w(1, 29).w(1, 30).i(2, 3).to(2, 4).t().r(4, 3).to(4, 5).w(4, 2).i(4, 4).l().r(4, 30).to(5, 4).w(4, 24).w(5, 7).i(5, 3).to(5, 4).d().r(6, 3).to(6, 5).m().r(9, 10).to(9, 12).n().r(10, 1).to(10, 7).w(10, 8).w(10, 9).i(10, 6).to(10, 7).ny().r(12, 31), e.y(2021).ny().r(1, 1).to(1, 3).s().r(2, 11).to(2, 17).w(2, 7).w(2, 20).i(2, 16).to(2, 17).t().r(4, 3).to(4, 5).l().r(5, 1).to(5, 5).w(4, 25).w(5, 8).i(5, 4).to(5, 5).d().r(6, 12).to(6, 14).m().r(9, 19).to(9, 21).w(9, 18).i(9, 20).n().r(10, 1).to(10, 7).w(9, 26).w(10, 9).i(10, 6).to(10, 7), e.y(2020).ny().r(1, 1).s().r(1, 24).to(2, 2).w(1, 19).i(1, 29).t().r(4, 4).to(4, 6).l().r(5, 1).to(5, 5).w(4, 26).w(5, 9).i(5, 4).to(5, 5).d().r(6, 25).to(6, 27).w(6, 28).i(6, 26).n().r(10, 1).to(10, 8).w(9, 27).w(10, 10).i(10, 7).to(10, 8), e.y(2019).ny().r(1, 1).s().r(2, 4).to(2, 10).w(2, 2).to(2, 3).i(2, 4).i(2, 8).t().r(4, 5).to(4, 7).l().r(5, 1).to(5, 4).w(4, 28).w(5, 5).i(5, 2).i(5, 3).d().r(6, 7).to(6, 9).m().r(9, 13).to(9, 15).n().r(10, 1).to(10, 7).w(9, 29).w(10, 12).i(10, 4).i(10, 7), e.y(2018).ny().r(1, 1).s().r(2, 15).to(2, 21).w(2, 11).w(2, 24).i(2, 19).to(2, 21).t().r(4, 5).to(4, 7).w(4, 8).i(4, 6).l().r(4, 29).to(5, 1).w(4, 28).i(4, 30).d().r(6, 18).n().r(10, 1).to(10, 7).w(9, 29).to(9, 30).i(10, 4).to(10, 5).m().r(9, 24).ny().r(12, 30).to(12, 31).w(12, 29).i(12, 31), e.y(2017).ny().r(1, 1).to(1, 2).s().r(1, 27).to(2, 2).w(1, 22).w(2, 4).i(2, 1).to(2, 2).t().r(4, 2).to(4, 4).w(4, 1).i(4, 3).l().r(5, 1).d().r(5, 28).to(5, 30).w(5, 27).i(5, 29).n().r(10, 1).to(10, 8).w(9, 30).i(10, 6).m().r(10, 4), e.y(2016).ny().r(1, 1).s().r(2, 7).to(2, 13).w(2, 6).w(2, 14).i(2, 11).to(2, 12).t().r(4, 4).l().r(5, 1).to(5, 2).d().r(6, 9).to(6, 11).w(6, 12).i(6, 10).m().r(9, 15).to(9, 17).w(9, 18).i(9, 16).n().r(10, 1).to(10, 7).w(10, 8).to(10, 9).i(10, 6).to(10, 7), e.y(2015).ny().r(1, 1).to(1, 3).w(1, 4).i(1, 2).s().r(2, 18).to(2, 24).w(2, 15).w(2, 28).i(2, 23).to(2, 24).t().r(4, 5).to(4, 6).l().r(5, 1).d().r(6, 20).r(6, 22).m().r(9, 27).n().r(10, 1).to(10, 7).w(10, 10).i(10, 7).a().r(9, 3).to(9, 4).w(9, 6).i(9, 4), e.y(2014).ny().r(1, 1).s().r(1, 31).to(2, 6).w(1, 26).w(2, 8).i(2, 5).to(2, 6).t().r(4, 5).to(4, 7).l().r(5, 1).to(5, 3).w(5, 4).i(5, 2).d().r(6, 2).m().r(9, 8).n().r(10, 1).to(10, 7).w(9, 28).w(10, 11).i(10, 6).to(10, 7), e.y(2013).ny().r(1, 1).to(1, 3).w(1, 5).to(1, 6).i(1, 2).to(1, 3).s().r(2, 9).to(2, 15).w(2, 16).to(2, 17).i(2, 14).to(2, 15).t().r(4, 4).to(4, 6).w(4, 7).i(4, 5).l().r(4, 29).to(5, 1).w(4, 27).to(4, 28).i(4, 29).to(4, 30).d().r(6, 10).to(6, 12).w(6, 8).to(6, 9).i(6, 10).to(6, 11).m().r(9, 19).to(9, 21).w(9, 22).i(9, 20).n().r(10, 1).to(10, 7).w(9, 29).w(10, 12).i(10, 4).i(10, 7), e.y(2012).ny().r(1, 1).to(1, 3).i(1, 3).s().r(1, 22).to(1, 28).w(1, 21).w(1, 29).i(1, 26).to(1, 27).t().r(4, 2).to(4, 4).w(3, 31).w(4, 1).i(4, 2).to(4, 3).l().r(4, 29).to(5, 1).w(4, 28).i(4, 30).d().r(6, 22).r(6, 24).m().r(9, 30).n().r(10, 1).to(10, 7).w(9, 29).i(10, 5), e.y(2011).ny().r(1, 1).to(1, 3).s().r(2, 2).to(2, 8).w(1, 30).w(2, 12).i(2, 7).to(2, 8).t().r(4, 3).to(4, 5).w(4, 2).i(4, 4).l().r(4, 30).to(5, 2).d().r(6, 4).r(6, 6).m().r(9, 10).to(9, 12).n().r(10, 1).to(10, 7).w(10, 8).to(10, 9).i(10, 6).to(10, 7).ny().w(12, 31), e.y(2010).ny().r(1, 1).to(1, 3).s().r(2, 13).to(2, 19).w(2, 20).to(2, 21).i(2, 18).to(2, 19).t().r(4, 3).to(4, 5).l().r(5, 1).to(5, 3).d().r(6, 14).to(6, 16).w(6, 12).to(6, 13).i(6, 14).to(6, 15).m().r(9, 22).to(9, 24).w(9, 19).w(9, 25).i(9, 23).to(9, 24).n().r(10, 1).to(10, 7).w(9, 26).w(10, 9).i(10, 6).to(10, 7), e.y(2009).ny().r(1, 1).to(1, 3).w(1, 4).i(1, 2).s().r(1, 25).to(1, 31).w(1, 24).w(2, 1).i(1, 29).to(1, 30).t().r(4, 4).to(4, 6).l().r(5, 1).to(5, 3).d().r(5, 28).to(5, 30).w(5, 31).i(5, 29).n().r(10, 1).to(10, 8).w(9, 27).w(10, 10).i(10, 7).to(10, 8).m().r(10, 3), e.y(2008).ny().r(1, 1).s().r(2, 6).to(2, 12).w(2, 2).to(2, 3).i(2, 11).to(2, 12).t().r(4, 4).to(4, 6).l().r(5, 1).to(5, 3).w(5, 4).i(5, 2).d().r(6, 7).to(6, 9).m().r(9, 13).to(9, 15).n().r(9, 29).to(10, 5).w(9, 27).to(9, 28).i(9, 29).to(9, 30), e.y(2007).ny().r(1, 1).to(1, 3).i(1, 2).to(1, 3).s().r(2, 18).to(2, 24).w(2, 17).w(2, 25).i(2, 22).to(2, 23).l().r(5, 1).to(5, 7).w(4, 28).to(4, 29).i(5, 4).i(5, 7).n().r(10, 1).to(10, 7).w(9, 29).to(9, 30).i(10, 4).to(10, 5).ny().r(12, 30).to(12, 31).w(12, 29).i(12, 31), e.y(2006).ny().r(1, 1).to(1, 3).s().r(1, 29).to(2, 4).w(1, 28).w(2, 5).i(2, 2).to(2, 3).l().r(5, 1).to(5, 7).w(4, 29).to(4, 30).i(5, 4).to(5, 5).n().r(10, 1).to(10, 7).w(9, 30).w(10, 8).i(10, 5).to(10, 6).ny().w(12, 30).to(12, 31), e.y(2005).ny().r(1, 1).to(1, 3).s().r(2, 9).to(2, 15).w(2, 5).to(2, 6).i(2, 14).to(2, 15).l().r(5, 1).to(5, 7).w(4, 30).w(5, 8).i(5, 5).to(5, 6).n().r(10, 1).to(10, 7).w(10, 8).to(10, 9).i(10, 6).to(10, 7), e.y(2004).ny().r(1, 1).s().r(1, 22).to(1, 28).w(1, 17).to(1, 18).i(1, 27).to(1, 28).l().r(5, 1).to(5, 7).w(5, 8).to(5, 9).i(5, 6).to(5, 7).n().r(10, 1).to(10, 7).w(10, 9).to(10, 10).i(10, 6).to(10, 7), {
    holidays: e.holidays,
    workdays: e.workdays,
    inLieuDays: e.inLieuDays
  };
};
var {
  holidays: M,
  workdays: k,
  inLieuDays: Z
} = V();
var w = (...e) => {
  if (e.length !== 1) return e.map((r) => w(r));
  const t = u(e[0]);
  if (!t.isValid()) throw new Error("unsupported type ".concat(typeof t, ", expected type is Date or Dayjs"));
  return t;
};
var O = (e) => !f(e);
var f = (e) => {
  const t = w(e), r = t.day(), a = t.format("YYYY-MM-DD");
  return !!(k[a] || r >= 1 && r <= 5 && !M[a]);
};
var G = (e) => (e = w(e), !!Z[e.format("YYYY-MM-DD")]);
var J = (e) => {
  e = w(e);
  const t = e.format("YYYY-MM-DD");
  if (k[t]) return {
    date: t,
    work: true,
    name: k[t]
  };
  if (M[t]) return {
    date: t,
    work: false,
    name: M[t]
  };
  {
    const r = e.day();
    return {
      date: t,
      work: r !== 0 && r !== 6,
      name: e.format("dddd")
    };
  }
};
var K = (e, t, r = true) => (e = w(e), t = w(t), r ? Y(e, t).filter(O).map((a) => a.format("YYYY-MM-DD")) : Y(e, t).filter((a) => M[a.format("YYYY-MM-DD")]).map((a) => a.format("YYYY-MM-DD")));
var Q = (e, t, r = true) => (e = w(e), t = w(t), r ? Y(e, t).filter(f).map((a) => a.format("YYYY-MM-DD")) : Y(e, t).filter((a) => f(a) && a.day() >= 1 && a.day() <= 5).map((a) => a.format("YYYY-MM-DD")));
var X = (e = 0, t = h()) => {
  if (t = u(t), e === 0) {
    if (f(t)) return t.format("YYYY-MM-DD");
    e = 1;
  }
  const r = e > 0 ? 1 : -1;
  let a = Math.abs(e);
  for (; a > 0; ) t = t.add(r, "day"), f(t) && a--;
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
var L = (e, t, r) => {
  const a = e >= 2e3 ? 21 : 20, n = e % 100, l = 0.2422, o = et[r][a === 21 ? 1 : 0];
  let i = Math.floor(n / 4);
  ["lesser_cold", "greater_cold", "the_beginning_of_spring", "rain_water"].includes(r) && (i = Math.floor((n - 1) / 4));
  let s = Math.floor(n * l + o) - i;
  const _ = rt["".concat(e, "_").concat(r)];
  return _ && (s += _), h("".concat(e, "-").concat(t, "-").concat(s)).format("YYYY-MM-DD");
};
var at = (e, t) => {
  const r = [];
  let a = u(e);
  const n = u(t || e);
  for (; a.isBefore(n) || a.isSame(n); ) {
    const l = a.year(), o = a.month() + 1;
    T[o].forEach((i) => {
      const s = h(L(l, o, i));
      (s != null && s.isBefore(n) || s != null && s.isSame(n)) && (s != null && s.isAfter(a) || s != null && s.isSame(a)) && r.push({
        date: s.format("YYYY-MM-DD"),
        term: i,
        name: E[i],
        index: 1
      });
    }), o === 12 ? a = a.add(1, "year").startOf("year") : a = a.add(1, "month").startOf("month");
  }
  return r;
};
var $ = (e, t) => {
  let r = u(e).subtract(1, "month");
  const a = u(t || e).add(1, "month"), n = [];
  for (; r.isBefore(a) || r.isSame(a); ) {
    const o = r.year(), i = r.month() + 1;
    T[i].forEach((s) => {
      const _ = h(L(o, i, s));
      n.push({
        term: s,
        date: _
      });
    }), r.month() === 11 ? r = r.add(1, "year").startOf("year") : r = r.add(1, "month").startOf("month");
  }
  const l = [];
  return n.forEach((o, i) => {
    for (let s = o.date; n[i + 1] && s.isBefore(n[i + 1].date); s = s.add(1, "day")) l.push({
      day: s,
      term: o.term,
      name: E[o.term],
      index: s.diff(o.date, "day") + 1
    });
  }), t || (t = e), l.filter((o) => o.day.isBetween(e, t, "day")).map((o) => ({
    date: o.day.format("YYYY-MM-DD"),
    term: o.term,
    name: o.name,
    index: o.index
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
var x = (e) => {
  let t = 348;
  for (let r = 32768; r > 8; r >>= 1) t += g[e - 1900] & r ? 1 : 0;
  return t + N(e);
};
var p = (e) => g[e - 1900] & 15;
var N = (e) => p(e) ? g[e - 1900] & 65536 ? 30 : 29 : 0;
var b = (e) => H[e % 10] + B[e % 12];
var D = (e, t) => g[e - 1900] & 65536 >> t ? 30 : 29;
var st = (e) => nt[(e - 4) % 12];
var it = (e) => {
  const t = ["初", "十", "廿", "三十"];
  if (e === 10) return "初十";
  if (e === 20) return "二十";
  if (e === 30) return "三十";
  const r = Math.floor(e / 10), a = e % 10;
  return t[r] + (a ? F[a] : "");
};
var lt = (e) => "".concat(H[(e - 4) % 10]).concat(B[(e - 4) % 12], "年");
var R = (e, t) => {
  const r = [];
  for (let a = e; a <= t; a++) r.push({
    year: a,
    lunarYear: lt(a),
    lunarYearCN: a.toString().split("").map((n) => F[Number(n)]).join("")
  });
  return r;
};
var C = (e) => {
  const t = p(e);
  return {
    year: e,
    leapMonth: t || void 0,
    leapMonthCN: t ? "闰".concat(A[t - 1], "月") : void 0,
    days: t ? g[e - 1900] & 65536 ? 30 : 29 : 0
  };
};
var m = (e) => {
  const t = new Array(7).fill(0);
  let r = 0, a = 0;
  const n = h(new Date(1900, 0, 31)), l = h(e);
  let o = l.diff(n, "day");
  t[5] = o + 40, t[4] = 14;
  let i = 1900;
  for (; i < 2100 && o > 0; i++) r = x(i), o -= r, t[4] += 12;
  o < 0 && (o += r, i--, t[4] -= 12), t[0] = i, t[3] = i - 1864, a = p(i), t[6] = 0;
  for (let s = 1; s < 13 && o >= 0; s++) a > 0 && s === a + 1 && t[6] === 0 ? (--s, t[6] = 1, r = N(i)) : r = D(i, s), t[6] === 1 && s === a + 1 && (t[6] = 0), o -= r, t[6] === 0 && t[4]++, t[1] = s;
  return o === 0 && a > 0 && t[6] === 1 ? t[6] = 0 : o < 0 && (o += r, t[1]--, t[4]--), t[2] = o + 1, {
    date: l.format("YYYY-MM-DD"),
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
    lunarYearCN: "".concat(t[0].toString().split("").map((s) => F[Number(s)]).join("")),
    // 农历年份中文表示
    lunarMonCN: "".concat(A[t[1]], "月"),
    // 农历月份中文表示
    lunarDayCN: it(t[2])
    // 农历日期中文表示
  };
};
var j = (e, t) => {
  const r = h(e), a = h(t), n = [];
  for (let l = r; l.isBefore(a) || l.isSame(a, "day"); l = l.add(1, "day")) n.push(m(l));
  return n;
};
var I = (e) => {
  const t = h(e), r = t.year(), a = t.month() + 1, n = t.date();
  let l = 0;
  for (let y = 1900; y < r; y++) l += x(y);
  let o = p(r);
  for (let y = 1; y < a; y++) l += D(r, y), y === o && (l += N(r));
  l += n - 1;
  const i = h(new Date(1900, 0, 31)), s = i.add(l, "day").format("YYYY-MM-DD");
  let _ = l, v;
  return o === a && (_ += D(r, a), v = i.add(_, "day").format("YYYY-MM-DD")), {
    date: s,
    leapMonthDate: v
  };
};
var dt = {
  getLunarYears: R,
  getYearLeapMonth: C,
  getLunarDate: m,
  getLunarDatesInRange: j,
  getSolarDateFromLunar: I
};
var ht = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dt,
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
  (e, t) => {
    const r = e.add(1, "day");
    $(r).find((n) => n.term === "pure_brightness") && t.push({
      date: e.format("YYYY-MM-DD"),
      name: "寒食节",
      type: "solar_term"
    });
  },
  // 处理除夕（农历腊月最后一日）
  (e, t) => {
    const r = m(e);
    if (r.lunarMon === 12 && r.lunarDay === D(r.lunarYear, 12)) {
      const a = e.format("YYYY-MM-DD");
      ["除夕", "封井", "祭井神", "贴春联", "迎财神"].forEach((n) => {
        t.push({
          date: a,
          name: n,
          type: "lunar"
        });
      });
    }
  }
];
var q = (e, t) => {
  var l;
  const r = [];
  let a = h(e);
  const n = h(t || e);
  for (; a.isBefore(n) || a.isSame(n); ) {
    const o = m(a);
    o.isLeap || (((l = _t[o.lunarMon]) == null ? void 0 : l[o.lunarDay]) || []).forEach((s) => {
      r.push({
        date: a.format("YYYY-MM-DD"),
        name: s,
        type: "lunar"
      });
    }), yt.forEach((i) => i(a, r)), a = a.add(1, "day");
  }
  return r.reduce((o, i) => {
    const s = o.find((_) => _.date === i.date);
    return s ? s.name.push(i.name) : o.push({
      date: i.date,
      name: [i.name]
    }), o;
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwtdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi1yYXcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmRleGVkLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1jYWxsYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1idWlsdC1pbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnZpcm9ubWVudC11c2VyLWFnZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zZXQtbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5wdXNoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYW4taW5zdGFuY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3JyZWN0LXByb3RvdHlwZS1nZXR0ZXIuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbi1hY2Nlc3Nvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaHRtbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1jcmVhdGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMtY29yZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5pdGVyYXRvci5jb25zdHJ1Y3Rvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lc25leHQuaXRlcmF0b3IuY29uc3RydWN0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtaXRlcmF0b3ItZGlyZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWlucy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1pdGVyLXJlc3VsdC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvci1jbG9zZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9yLWNyZWF0ZS1wcm94eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NhbGwtd2l0aC1zYWZlLWl0ZXJhdGlvbi1jbG9zaW5nLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLml0ZXJhdG9yLmZpbHRlci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lc25leHQuaXRlcmF0b3IuZmlsdGVyLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLWNsYXVzZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9ycy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWFycmF5LWl0ZXJhdG9yLW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXN0cmluZy10YWctc3VwcG9ydC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5pdGVyYXRvci5maW5kLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzbmV4dC5pdGVyYXRvci5maW5kLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLml0ZXJhdG9yLmZvci1lYWNoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzbmV4dC5pdGVyYXRvci5mb3ItZWFjaC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9yLW1hcC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5pdGVyYXRvci5tYXAuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXNuZXh0Lml0ZXJhdG9yLm1hcC5qcyIsICJzcmMvQ2hpbmVzZURheXMvQ2hpbmVzZURheXMudHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NoaW5lc2UtZGF5c0AxLjUuMC9ub2RlX21vZHVsZXMvY2hpbmVzZS1kYXlzL2Rpc3QvaW5kZXguZXMuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIid1c2Ugc3RyaWN0JztcbnZhciBjaGVjayA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgJiYgaXQuTWF0aCA9PT0gTWF0aCAmJiBpdDtcbn07XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG5tb2R1bGUuZXhwb3J0cyA9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1nbG9iYWwtdGhpcyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBnbG9iYWxUaGlzID09ICdvYmplY3QnICYmIGdsb2JhbFRoaXMpIHx8XG4gIGNoZWNrKHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93KSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzIC0tIHNhZmVcbiAgY2hlY2sodHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZikgfHxcbiAgY2hlY2sodHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwpIHx8XG4gIGNoZWNrKHR5cGVvZiB0aGlzID09ICdvYmplY3QnICYmIHRoaXMpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuYyAtLSBmYWxsYmFja1xuICAoZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSkoKSB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIERldGVjdCBJRTgncyBpbmNvbXBsZXRlIGRlZmluZVByb3BlcnR5IGltcGxlbWVudGF0aW9uXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgMSwgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSlbMV0gIT09IDc7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZnVuY3Rpb24tcHJvdG90eXBlLWJpbmQgLS0gc2FmZVxuICB2YXIgdGVzdCA9IChmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0pLmJpbmQoKTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGlucyAtLSBzYWZlXG4gIHJldHVybiB0eXBlb2YgdGVzdCAhPSAnZnVuY3Rpb24nIHx8IHRlc3QuaGFzT3duUHJvcGVydHkoJ3Byb3RvdHlwZScpO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBjYWxsID0gRnVuY3Rpb24ucHJvdG90eXBlLmNhbGw7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZnVuY3Rpb24tcHJvdG90eXBlLWJpbmQgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IGNhbGwuYmluZChjYWxsKSA6IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGNhbGwuYXBwbHkoY2FsbCwgYXJndW1lbnRzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIE5hc2hvcm4gfiBKREs4IGJ1Z1xudmFyIE5BU0hPUk5fQlVHID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmICEkcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh7IDE6IDIgfSwgMSk7XG5cbi8vIGBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eWlzZW51bWVyYWJsZVxuZXhwb3J0cy5mID0gTkFTSE9STl9CVUcgPyBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShWKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMsIFYpO1xuICByZXR1cm4gISFkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IuZW51bWVyYWJsZTtcbn0gOiAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIGNhbGwgPSBGdW5jdGlvblByb3RvdHlwZS5jYWxsO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbnZhciB1bmN1cnJ5VGhpc1dpdGhCaW5kID0gTkFUSVZFX0JJTkQgJiYgRnVuY3Rpb25Qcm90b3R5cGUuYmluZC5iaW5kKGNhbGwsIGNhbGwpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9CSU5EID8gdW5jdXJyeVRoaXNXaXRoQmluZCA6IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjYWxsLmFwcGx5KGZuLCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbnZhciB0b1N0cmluZyA9IHVuY3VycnlUaGlzKHt9LnRvU3RyaW5nKTtcbnZhciBzdHJpbmdTbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHN0cmluZ1NsaWNlKHRvU3RyaW5nKGl0KSwgOCwgLTEpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xudmFyIHNwbGl0ID0gdW5jdXJyeVRoaXMoJycuc3BsaXQpO1xuXG4vLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xubW9kdWxlLmV4cG9ydHMgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIHRocm93cyBhbiBlcnJvciBpbiByaGlubywgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3JoaW5vL2lzc3Vlcy8zNDZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGlucyAtLSBzYWZlXG4gIHJldHVybiAhJE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApO1xufSkgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNsYXNzb2YoaXQpID09PSAnU3RyaW5nJyA/IHNwbGl0KGl0LCAnJykgOiAkT2JqZWN0KGl0KTtcbn0gOiAkT2JqZWN0O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIHdlIGNhbid0IHVzZSBqdXN0IGBpdCA9PSBudWxsYCBzaW5jZSBvZiBgZG9jdW1lbnQuYWxsYCBzcGVjaWFsIGNhc2Vcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtSXNIVE1MRERBLWludGVybmFsLXNsb3QtYWVjXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPT09IG51bGwgfHwgaXQgPT09IHVuZGVmaW5lZDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgUmVxdWlyZU9iamVjdENvZXJjaWJsZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlcXVpcmVvYmplY3Rjb2VyY2libGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpc051bGxPclVuZGVmaW5lZChpdCkpIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEluZGV4ZWRPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShpdCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90XG52YXIgZG9jdW1lbnRBbGwgPSB0eXBlb2YgZG9jdW1lbnQgPT0gJ29iamVjdCcgJiYgZG9jdW1lbnQuYWxsO1xuXG4vLyBgSXNDYWxsYWJsZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWlzY2FsbGFibGVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL25vLXR5cGVvZi11bmRlZmluZWQgLS0gcmVxdWlyZWQgZm9yIHRlc3Rpbmdcbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIGRvY3VtZW50QWxsID09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50QWxsICE9PSB1bmRlZmluZWQgPyBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PSAnZnVuY3Rpb24nIHx8IGFyZ3VtZW50ID09PSBkb2N1bWVudEFsbDtcbn0gOiBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PSAnZnVuY3Rpb24nO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiBpc0NhbGxhYmxlKGl0KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciBhRnVuY3Rpb24gPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGlzQ2FsbGFibGUoYXJndW1lbnQpID8gYXJndW1lbnQgOiB1bmRlZmluZWQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lc3BhY2UsIG1ldGhvZCkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBhRnVuY3Rpb24oZ2xvYmFsVGhpc1tuYW1lc3BhY2VdKSA6IGdsb2JhbFRoaXNbbmFtZXNwYWNlXSAmJiBnbG9iYWxUaGlzW25hbWVzcGFjZV1bbWV0aG9kXTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVuY3VycnlUaGlzKHt9LmlzUHJvdG90eXBlT2YpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG5cbnZhciBuYXZpZ2F0b3IgPSBnbG9iYWxUaGlzLm5hdmlnYXRvcjtcbnZhciB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudDtcblxubW9kdWxlLmV4cG9ydHMgPSB1c2VyQWdlbnQgPyBTdHJpbmcodXNlckFnZW50KSA6ICcnO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Vudmlyb25tZW50LXVzZXItYWdlbnQnKTtcblxudmFyIHByb2Nlc3MgPSBnbG9iYWxUaGlzLnByb2Nlc3M7XG52YXIgRGVubyA9IGdsb2JhbFRoaXMuRGVubztcbnZhciB2ZXJzaW9ucyA9IHByb2Nlc3MgJiYgcHJvY2Vzcy52ZXJzaW9ucyB8fCBEZW5vICYmIERlbm8udmVyc2lvbjtcbnZhciB2OCA9IHZlcnNpb25zICYmIHZlcnNpb25zLnY4O1xudmFyIG1hdGNoLCB2ZXJzaW9uO1xuXG5pZiAodjgpIHtcbiAgbWF0Y2ggPSB2OC5zcGxpdCgnLicpO1xuICAvLyBpbiBvbGQgQ2hyb21lLCB2ZXJzaW9ucyBvZiBWOCBpc24ndCBWOCA9IENocm9tZSAvIDEwXG4gIC8vIGJ1dCB0aGVpciBjb3JyZWN0IHZlcnNpb25zIGFyZSBub3QgaW50ZXJlc3RpbmcgZm9yIHVzXG4gIHZlcnNpb24gPSBtYXRjaFswXSA+IDAgJiYgbWF0Y2hbMF0gPCA0ID8gMSA6ICsobWF0Y2hbMF0gKyBtYXRjaFsxXSk7XG59XG5cbi8vIEJyb3dzZXJGUyBOb2RlSlMgYHByb2Nlc3NgIHBvbHlmaWxsIGluY29ycmVjdGx5IHNldCBgLnY4YCB0byBgMC4wYFxuLy8gc28gY2hlY2sgYHVzZXJBZ2VudGAgZXZlbiBpZiBgLnY4YCBleGlzdHMsIGJ1dCAwXG5pZiAoIXZlcnNpb24gJiYgdXNlckFnZW50KSB7XG4gIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9FZGdlXFwvKFxcZCspLyk7XG4gIGlmICghbWF0Y2ggfHwgbWF0Y2hbMV0gPj0gNzQpIHtcbiAgICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvQ2hyb21lXFwvKFxcZCspLyk7XG4gICAgaWYgKG1hdGNoKSB2ZXJzaW9uID0gK21hdGNoWzFdO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmVyc2lvbjtcbiIsICIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1zeW1ib2wgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Vudmlyb25tZW50LXY4LXZlcnNpb24nKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcblxudmFyICRTdHJpbmcgPSBnbG9iYWxUaGlzLlN0cmluZztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gcmVxdWlyZWQgZm9yIHRlc3Rpbmdcbm1vZHVsZS5leHBvcnRzID0gISFPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBzeW1ib2wgPSBTeW1ib2woJ3N5bWJvbCBkZXRlY3Rpb24nKTtcbiAgLy8gQ2hyb21lIDM4IFN5bWJvbCBoYXMgaW5jb3JyZWN0IHRvU3RyaW5nIGNvbnZlcnNpb25cbiAgLy8gYGdldC1vd24tcHJvcGVydHktc3ltYm9sc2AgcG9seWZpbGwgc3ltYm9scyBjb252ZXJ0ZWQgdG8gb2JqZWN0IGFyZSBub3QgU3ltYm9sIGluc3RhbmNlc1xuICAvLyBuYjogRG8gbm90IGNhbGwgYFN0cmluZ2AgZGlyZWN0bHkgdG8gYXZvaWQgdGhpcyBiZWluZyBvcHRpbWl6ZWQgb3V0IHRvIGBzeW1ib2wrJydgIHdoaWNoIHdpbGwsXG4gIC8vIG9mIGNvdXJzZSwgZmFpbC5cbiAgcmV0dXJuICEkU3RyaW5nKHN5bWJvbCkgfHwgIShPYmplY3Qoc3ltYm9sKSBpbnN0YW5jZW9mIFN5bWJvbCkgfHxcbiAgICAvLyBDaHJvbWUgMzgtNDAgc3ltYm9scyBhcmUgbm90IGluaGVyaXRlZCBmcm9tIERPTSBjb2xsZWN0aW9ucyBwcm90b3R5cGVzIHRvIGluc3RhbmNlc1xuICAgICFTeW1ib2wuc2hhbSAmJiBWOF9WRVJTSU9OICYmIFY4X1ZFUlNJT04gPCA0MTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9TWU1CT0wgJiZcbiAgIVN5bWJvbC5zaGFtICYmXG4gIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCc7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZicpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVTRV9TWU1CT0xfQVNfVUlEID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHZhciAkU3ltYm9sID0gZ2V0QnVpbHRJbignU3ltYm9sJyk7XG4gIHJldHVybiBpc0NhbGxhYmxlKCRTeW1ib2wpICYmIGlzUHJvdG90eXBlT2YoJFN5bWJvbC5wcm90b3R5cGUsICRPYmplY3QoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICRTdHJpbmcgPSBTdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICRTdHJpbmcoYXJndW1lbnQpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiAnT2JqZWN0JztcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHRyeVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RyeS10by1zdHJpbmcnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBBc3NlcnQ6IElzQ2FsbGFibGUoYXJndW1lbnQpIGlzIHRydWVgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNDYWxsYWJsZShhcmd1bWVudCkpIHJldHVybiBhcmd1bWVudDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IodHJ5VG9TdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG4vLyBgR2V0TWV0aG9kYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZ2V0bWV0aG9kXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChWLCBQKSB7XG4gIHZhciBmdW5jID0gVltQXTtcbiAgcmV0dXJuIGlzTnVsbE9yVW5kZWZpbmVkKGZ1bmMpID8gdW5kZWZpbmVkIDogYUNhbGxhYmxlKGZ1bmMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYE9yZGluYXJ5VG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vcmRpbmFyeXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKHByZWYgPT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChpc0NhbGxhYmxlKGZuID0gaW5wdXQudmFsdWVPZikgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChwcmVmICE9PSAnc3RyaW5nJyAmJiBpc0NhbGxhYmxlKGZuID0gaW5wdXQudG9TdHJpbmcpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICB0cnkge1xuICAgIGRlZmluZVByb3BlcnR5KGdsb2JhbFRoaXMsIGtleSwgeyB2YWx1ZTogdmFsdWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZ2xvYmFsVGhpc1trZXldID0gdmFsdWU7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gbW9kdWxlLmV4cG9ydHMgPSBnbG9iYWxUaGlzW1NIQVJFRF0gfHwgZGVmaW5lR2xvYmFsUHJvcGVydHkoU0hBUkVELCB7fSk7XG5cbihzdG9yZS52ZXJzaW9ucyB8fCAoc3RvcmUudmVyc2lvbnMgPSBbXSkpLnB1c2goe1xuICB2ZXJzaW9uOiAnMy40MC4wJyxcbiAgbW9kZTogSVNfUFVSRSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE0LTIwMjUgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknLFxuICBsaWNlbnNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvYmxvYi92My40MC4wL0xJQ0VOU0UnLFxuICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcydcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlIHx8IHt9KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG4vLyBgVG9PYmplY3RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b29iamVjdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuICRPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IHVuY3VycnlUaGlzKHt9Lmhhc093blByb3BlcnR5KTtcblxuLy8gYEhhc093blByb3BlcnR5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaGFzb3ducHJvcGVydHlcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaGFzb3duIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0Lmhhc093biB8fCBmdW5jdGlvbiBoYXNPd24oaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkodG9PYmplY3QoaXQpLCBrZXkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbnZhciBpZCA9IDA7XG52YXIgcG9zdGZpeCA9IE1hdGgucmFuZG9tKCk7XG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcygxLjAudG9TdHJpbmcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJyArIChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5KSArICcpXycgKyB0b1N0cmluZygrK2lkICsgcG9zdGZpeCwgMzYpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24nKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xuXG52YXIgU3ltYm9sID0gZ2xvYmFsVGhpcy5TeW1ib2w7XG52YXIgV2VsbEtub3duU3ltYm9sc1N0b3JlID0gc2hhcmVkKCd3a3MnKTtcbnZhciBjcmVhdGVXZWxsS25vd25TeW1ib2wgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IFN5bWJvbFsnZm9yJ10gfHwgU3ltYm9sIDogU3ltYm9sICYmIFN5bWJvbC53aXRob3V0U2V0dGVyIHx8IHVpZDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICBpZiAoIWhhc093bihXZWxsS25vd25TeW1ib2xzU3RvcmUsIG5hbWUpKSB7XG4gICAgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID0gTkFUSVZFX1NZTUJPTCAmJiBoYXNPd24oU3ltYm9sLCBuYW1lKVxuICAgICAgPyBTeW1ib2xbbmFtZV1cbiAgICAgIDogY3JlYXRlV2VsbEtub3duU3ltYm9sKCdTeW1ib2wuJyArIG5hbWUpO1xuICB9IHJldHVybiBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1zeW1ib2wnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xudmFyIG9yZGluYXJ5VG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3JkaW5hcnktdG8tcHJpbWl0aXZlJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xudmFyIFRPX1BSSU1JVElWRSA9IHdlbGxLbm93blN5bWJvbCgndG9QcmltaXRpdmUnKTtcblxuLy8gYFRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIGlmICghaXNPYmplY3QoaW5wdXQpIHx8IGlzU3ltYm9sKGlucHV0KSkgcmV0dXJuIGlucHV0O1xuICB2YXIgZXhvdGljVG9QcmltID0gZ2V0TWV0aG9kKGlucHV0LCBUT19QUklNSVRJVkUpO1xuICB2YXIgcmVzdWx0O1xuICBpZiAoZXhvdGljVG9QcmltKSB7XG4gICAgaWYgKHByZWYgPT09IHVuZGVmaW5lZCkgcHJlZiA9ICdkZWZhdWx0JztcbiAgICByZXN1bHQgPSBjYWxsKGV4b3RpY1RvUHJpbSwgaW5wdXQsIHByZWYpO1xuICAgIGlmICghaXNPYmplY3QocmVzdWx0KSB8fCBpc1N5bWJvbChyZXN1bHQpKSByZXR1cm4gcmVzdWx0O1xuICAgIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xuICB9XG4gIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnbnVtYmVyJztcbiAgcmV0dXJuIG9yZGluYXJ5VG9QcmltaXRpdmUoaW5wdXQsIHByZWYpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG5cbi8vIGBUb1Byb3BlcnR5S2V5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcm9wZXJ0eWtleVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCAnc3RyaW5nJyk7XG4gIHJldHVybiBpc1N5bWJvbChrZXkpID8ga2V5IDoga2V5ICsgJyc7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciBkb2N1bWVudCA9IGdsb2JhbFRoaXMuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBFWElTVFMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBFWElTVFMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcblxuLy8gVGhhbmtzIHRvIElFOCBmb3IgaXRzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3JlYXRlRWxlbWVudCgnZGl2JyksICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfVxuICB9KS5hICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhc093bihPLCBQKSkgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcighY2FsbChwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mLCBPLCBQKSwgT1tQXSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIFY4IH4gQ2hyb21lIDM2LVxuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzMzNFxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdwcm90b3R5cGUnLCB7XG4gICAgdmFsdWU6IDQyLFxuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KS5wcm90b3R5cGUgIT09IDQyO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFN0cmluZyA9IFN0cmluZztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBUeXBlKGFyZ3VtZW50KSBpcyBPYmplY3RgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNPYmplY3QoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKCRTdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYW4gb2JqZWN0Jyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG52YXIgVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdjgtcHJvdG90eXBlLWRlZmluZS1idWcnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBFTlVNRVJBQkxFID0gJ2VudW1lcmFibGUnO1xudmFyIENPTkZJR1VSQUJMRSA9ICdjb25maWd1cmFibGUnO1xudmFyIFdSSVRBQkxFID0gJ3dyaXRhYmxlJztcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA/IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKHR5cGVvZiBPID09PSAnZnVuY3Rpb24nICYmIFAgPT09ICdwcm90b3R5cGUnICYmICd2YWx1ZScgaW4gQXR0cmlidXRlcyAmJiBXUklUQUJMRSBpbiBBdHRyaWJ1dGVzICYmICFBdHRyaWJ1dGVzW1dSSVRBQkxFXSkge1xuICAgIHZhciBjdXJyZW50ID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgICBpZiAoY3VycmVudCAmJiBjdXJyZW50W1dSSVRBQkxFXSkge1xuICAgICAgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gICAgICBBdHRyaWJ1dGVzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IENPTkZJR1VSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tDT05GSUdVUkFCTEVdIDogY3VycmVudFtDT05GSUdVUkFCTEVdLFxuICAgICAgICBlbnVtZXJhYmxlOiBFTlVNRVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0VOVU1FUkFCTEVdIDogY3VycmVudFtFTlVNRVJBQkxFXSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgICB9O1xuICAgIH1cbiAgfSByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xufSA6ICRkZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0RGVzY3JpcHRvciA9IERFU0NSSVBUT1JTICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbnZhciBFWElTVFMgPSBoYXNPd24oRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJyk7XG4vLyBhZGRpdGlvbmFsIHByb3RlY3Rpb24gZnJvbSBtaW5pZmllZCAvIG1hbmdsZWQgLyBkcm9wcGVkIGZ1bmN0aW9uIG5hbWVzXG52YXIgUFJPUEVSID0gRVhJU1RTICYmIChmdW5jdGlvbiBzb21ldGhpbmcoKSB7IC8qIGVtcHR5ICovIH0pLm5hbWUgPT09ICdzb21ldGhpbmcnO1xudmFyIENPTkZJR1VSQUJMRSA9IEVYSVNUUyAmJiAoIURFU0NSSVBUT1JTIHx8IChERVNDUklQVE9SUyAmJiBnZXREZXNjcmlwdG9yKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpLmNvbmZpZ3VyYWJsZSkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRVhJU1RTOiBFWElTVFMsXG4gIFBST1BFUjogUFJPUEVSLFxuICBDT05GSUdVUkFCTEU6IENPTkZJR1VSQUJMRVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG52YXIgZnVuY3Rpb25Ub1N0cmluZyA9IHVuY3VycnlUaGlzKEZ1bmN0aW9uLnRvU3RyaW5nKTtcblxuLy8gdGhpcyBoZWxwZXIgYnJva2VuIGluIGBjb3JlLWpzQDMuNC4xLTMuNC40YCwgc28gd2UgY2FuJ3QgdXNlIGBzaGFyZWRgIGhlbHBlclxuaWYgKCFpc0NhbGxhYmxlKHN0b3JlLmluc3BlY3RTb3VyY2UpKSB7XG4gIHN0b3JlLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb25Ub1N0cmluZyhpdCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmUuaW5zcGVjdFNvdXJjZTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWxUaGlzLldlYWtNYXA7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNDYWxsYWJsZShXZWFrTWFwKSAmJiAvbmF0aXZlIGNvZGUvLnRlc3QoU3RyaW5nKFdlYWtNYXApKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcblxudmFyIGtleXMgPSBzaGFyZWQoJ2tleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBrZXlzW2tleV0gfHwgKGtleXNba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX1dFQUtfTUFQID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlYWstbWFwLWJhc2ljLWRldGVjdGlvbicpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCA9ICdPYmplY3QgYWxyZWFkeSBpbml0aWFsaXplZCc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsVGhpcy5UeXBlRXJyb3I7XG52YXIgV2Vha01hcCA9IGdsb2JhbFRoaXMuV2Vha01hcDtcbnZhciBzZXQsIGdldCwgaGFzO1xuXG52YXIgZW5mb3JjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaGFzKGl0KSA/IGdldChpdCkgOiBzZXQoaXQsIHt9KTtcbn07XG5cbnZhciBnZXR0ZXJGb3IgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIHN0YXRlO1xuICAgIGlmICghaXNPYmplY3QoaXQpIHx8IChzdGF0ZSA9IGdldChpdCkpLnR5cGUgIT09IFRZUEUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkJyk7XG4gICAgfSByZXR1cm4gc3RhdGU7XG4gIH07XG59O1xuXG5pZiAoTkFUSVZFX1dFQUtfTUFQIHx8IHNoYXJlZC5zdGF0ZSkge1xuICB2YXIgc3RvcmUgPSBzaGFyZWQuc3RhdGUgfHwgKHNoYXJlZC5zdGF0ZSA9IG5ldyBXZWFrTWFwKCkpO1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG4gIHN0b3JlLmdldCA9IHN0b3JlLmdldDtcbiAgc3RvcmUuaGFzID0gc3RvcmUuaGFzO1xuICBzdG9yZS5zZXQgPSBzdG9yZS5zZXQ7XG4gIC8qIGVzbGludC1lbmFibGUgbm8tc2VsZi1hc3NpZ24gLS0gcHJvdG90eXBlIG1ldGhvZHMgcHJvdGVjdGlvbiAqL1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKHN0b3JlLmhhcyhpdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIHN0b3JlLnNldChpdCwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHN0b3JlLmdldChpdCkgfHwge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBzdG9yZS5oYXMoaXQpO1xuICB9O1xufSBlbHNlIHtcbiAgdmFyIFNUQVRFID0gc2hhcmVkS2V5KCdzdGF0ZScpO1xuICBoaWRkZW5LZXlzW1NUQVRFXSA9IHRydWU7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoaGFzT3duKGl0LCBTVEFURSkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShpdCwgU1RBVEUsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKSA/IGl0W1NUQVRFXSA6IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldCxcbiAgZ2V0OiBnZXQsXG4gIGhhczogaGFzLFxuICBlbmZvcmNlOiBlbmZvcmNlLFxuICBnZXR0ZXJGb3I6IGdldHRlckZvclxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLW5hbWUnKS5DT05GSUdVUkFCTEU7XG52YXIgaW5zcGVjdFNvdXJjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZScpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcblxudmFyIGVuZm9yY2VJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5lbmZvcmNlO1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldDtcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG52YXIgcmVwbGFjZSA9IHVuY3VycnlUaGlzKCcnLnJlcGxhY2UpO1xudmFyIGpvaW4gPSB1bmN1cnJ5VGhpcyhbXS5qb2luKTtcblxudmFyIENPTkZJR1VSQUJMRV9MRU5HVEggPSBERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAnbGVuZ3RoJywgeyB2YWx1ZTogOCB9KS5sZW5ndGggIT09IDg7XG59KTtcblxudmFyIFRFTVBMQVRFID0gU3RyaW5nKFN0cmluZykuc3BsaXQoJ1N0cmluZycpO1xuXG52YXIgbWFrZUJ1aWx0SW4gPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgbmFtZSwgb3B0aW9ucykge1xuICBpZiAoc3RyaW5nU2xpY2UoJFN0cmluZyhuYW1lKSwgMCwgNykgPT09ICdTeW1ib2woJykge1xuICAgIG5hbWUgPSAnWycgKyByZXBsYWNlKCRTdHJpbmcobmFtZSksIC9eU3ltYm9sXFwoKFteKV0qKVxcKS4qJC8sICckMScpICsgJ10nO1xuICB9XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZ2V0dGVyKSBuYW1lID0gJ2dldCAnICsgbmFtZTtcbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5zZXR0ZXIpIG5hbWUgPSAnc2V0ICcgKyBuYW1lO1xuICBpZiAoIWhhc093bih2YWx1ZSwgJ25hbWUnKSB8fCAoQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgJiYgdmFsdWUubmFtZSAhPT0gbmFtZSkpIHtcbiAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbmFtZScsIHsgdmFsdWU6IG5hbWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbiAgICBlbHNlIHZhbHVlLm5hbWUgPSBuYW1lO1xuICB9XG4gIGlmIChDT05GSUdVUkFCTEVfTEVOR1RIICYmIG9wdGlvbnMgJiYgaGFzT3duKG9wdGlvbnMsICdhcml0eScpICYmIHZhbHVlLmxlbmd0aCAhPT0gb3B0aW9ucy5hcml0eSkge1xuICAgIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbGVuZ3RoJywgeyB2YWx1ZTogb3B0aW9ucy5hcml0eSB9KTtcbiAgfVxuICB0cnkge1xuICAgIGlmIChvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnY29uc3RydWN0b3InKSAmJiBvcHRpb25zLmNvbnN0cnVjdG9yKSB7XG4gICAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAncHJvdG90eXBlJywgeyB3cml0YWJsZTogZmFsc2UgfSk7XG4gICAgLy8gaW4gVjggfiBDaHJvbWUgNTMsIHByb3RvdHlwZXMgb2Ygc29tZSBtZXRob2RzLCBsaWtlIGBBcnJheS5wcm90b3R5cGUudmFsdWVzYCwgYXJlIG5vbi13cml0YWJsZVxuICAgIH0gZWxzZSBpZiAodmFsdWUucHJvdG90eXBlKSB2YWx1ZS5wcm90b3R5cGUgPSB1bmRlZmluZWQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgdmFyIHN0YXRlID0gZW5mb3JjZUludGVybmFsU3RhdGUodmFsdWUpO1xuICBpZiAoIWhhc093bihzdGF0ZSwgJ3NvdXJjZScpKSB7XG4gICAgc3RhdGUuc291cmNlID0gam9pbihURU1QTEFURSwgdHlwZW9mIG5hbWUgPT0gJ3N0cmluZycgPyBuYW1lIDogJycpO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG5cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV4dGVuZC1uYXRpdmUgLS0gcmVxdWlyZWRcbkZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IG1ha2VCdWlsdEluKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gaXNDYWxsYWJsZSh0aGlzKSAmJiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnNvdXJjZSB8fCBpbnNwZWN0U291cmNlKHRoaXMpO1xufSwgJ3RvU3RyaW5nJyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgbWFrZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWFrZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgdmFyIHNpbXBsZSA9IG9wdGlvbnMuZW51bWVyYWJsZTtcbiAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWUgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubmFtZSA6IGtleTtcbiAgaWYgKGlzQ2FsbGFibGUodmFsdWUpKSBtYWtlQnVpbHRJbih2YWx1ZSwgbmFtZSwgb3B0aW9ucyk7XG4gIGlmIChvcHRpb25zLmdsb2JhbCkge1xuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lR2xvYmFsUHJvcGVydHkoa2V5LCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghb3B0aW9ucy51bnNhZmUpIGRlbGV0ZSBPW2tleV07XG4gICAgICBlbHNlIGlmIChPW2tleV0pIHNpbXBsZSA9IHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiAhb3B0aW9ucy5ub25Db25maWd1cmFibGUsXG4gICAgICB3cml0YWJsZTogIW9wdGlvbnMubm9uV3JpdGFibGVcbiAgICB9KTtcbiAgfSByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4vLyBgTWF0aC50cnVuY2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hdGgudHJ1bmNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1tYXRoLXRydW5jIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gTWF0aC50cnVuYyB8fCBmdW5jdGlvbiB0cnVuYyh4KSB7XG4gIHZhciBuID0gK3g7XG4gIHJldHVybiAobiA+IDAgPyBmbG9vciA6IGNlaWwpKG4pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdHJ1bmMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWF0aC10cnVuYycpO1xuXG4vLyBgVG9JbnRlZ2VyT3JJbmZpbml0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvaW50ZWdlcm9yaW5maW5pdHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBudW1iZXIgPSArYXJndW1lbnQ7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gIHJldHVybiBudW1iZXIgIT09IG51bWJlciB8fCBudW1iZXIgPT09IDAgPyAwIDogdHJ1bmMobnVtYmVyKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIEhlbHBlciBmb3IgYSBwb3B1bGFyIHJlcGVhdGluZyBjYXNlIG9mIHRoZSBzcGVjOlxuLy8gTGV0IGludGVnZXIgYmUgPyBUb0ludGVnZXIoaW5kZXgpLlxuLy8gSWYgaW50ZWdlciA8IDAsIGxldCByZXN1bHQgYmUgbWF4KChsZW5ndGggKyBpbnRlZ2VyKSwgMCk7IGVsc2UgbGV0IHJlc3VsdCBiZSBtaW4oaW50ZWdlciwgbGVuZ3RoKS5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgdmFyIGludGVnZXIgPSB0b0ludGVnZXJPckluZmluaXR5KGluZGV4KTtcbiAgcmV0dXJuIGludGVnZXIgPCAwID8gbWF4KGludGVnZXIgKyBsZW5ndGgsIDApIDogbWluKGludGVnZXIsIGxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBgVG9MZW5ndGhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2xlbmd0aFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGxlbiA9IHRvSW50ZWdlck9ySW5maW5pdHkoYXJndW1lbnQpO1xuICByZXR1cm4gbGVuID4gMCA/IG1pbihsZW4sIDB4MUZGRkZGRkZGRkZGRkYpIDogMDsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG5cbi8vIGBMZW5ndGhPZkFycmF5TGlrZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWxlbmd0aG9mYXJyYXlsaWtlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHRvTGVuZ3RoKG9iai5sZW5ndGgpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGluZGV4T2YsIGluY2x1ZGVzIH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gICAgaWYgKGxlbmd0aCA9PT0gMCkgcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT09IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgICBpZiAodmFsdWUgIT09IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICBpZiAoKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pICYmIE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuICBpbmNsdWRlczogY3JlYXRlTWV0aG9kKHRydWUpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4gIGluZGV4T2Y6IGNyZWF0ZU1ldGhvZChmYWxzZSlcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgaW5kZXhPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluZGV4T2Y7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSAhaGFzT3duKGhpZGRlbktleXMsIGtleSkgJiYgaGFzT3duKE8sIGtleSkgJiYgcHVzaChyZXN1bHQsIGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXNPd24oTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+aW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcHVzaChyZXN1bHQsIGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gSUU4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IFtcbiAgJ2NvbnN0cnVjdG9yJyxcbiAgJ2hhc093blByb3BlcnR5JyxcbiAgJ2lzUHJvdG90eXBlT2YnLFxuICAncHJvcGVydHlJc0VudW1lcmFibGUnLFxuICAndG9Mb2NhbGVTdHJpbmcnLFxuICAndG9TdHJpbmcnLFxuICAndmFsdWVPZidcbl07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxudmFyIGhpZGRlbktleXMgPSBlbnVtQnVnS2V5cy5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5bmFtZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHluYW1lcyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcblxudmFyIGNvbmNhdCA9IHVuY3VycnlUaGlzKFtdLmNvbmNhdCk7XG5cbi8vIGFsbCBvYmplY3Qga2V5cywgaW5jbHVkZXMgbm9uLWVudW1lcmFibGUgYW5kIHN5bWJvbHNcbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignUmVmbGVjdCcsICdvd25LZXlzJykgfHwgZnVuY3Rpb24gb3duS2V5cyhpdCkge1xuICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUuZihhbk9iamVjdChpdCkpO1xuICB2YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlLmY7XG4gIHJldHVybiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBjb25jYXQoa2V5cywgZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSkgOiBrZXlzO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBvd25LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL293bi1rZXlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlLCBleGNlcHRpb25zKSB7XG4gIHZhciBrZXlzID0gb3duS2V5cyhzb3VyY2UpO1xuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mO1xuICB2YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmY7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGlmICghaGFzT3duKHRhcmdldCwga2V5KSAmJiAhKGV4Y2VwdGlvbnMgJiYgaGFzT3duKGV4Y2VwdGlvbnMsIGtleSkpKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgfVxuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIHJlcGxhY2VtZW50ID0gLyN8XFwucHJvdG90eXBlXFwuLztcblxudmFyIGlzRm9yY2VkID0gZnVuY3Rpb24gKGZlYXR1cmUsIGRldGVjdGlvbikge1xuICB2YXIgdmFsdWUgPSBkYXRhW25vcm1hbGl6ZShmZWF0dXJlKV07XG4gIHJldHVybiB2YWx1ZSA9PT0gUE9MWUZJTEwgPyB0cnVlXG4gICAgOiB2YWx1ZSA9PT0gTkFUSVZFID8gZmFsc2VcbiAgICA6IGlzQ2FsbGFibGUoZGV0ZWN0aW9uKSA/IGZhaWxzKGRldGVjdGlvbilcbiAgICA6ICEhZGV0ZWN0aW9uO1xufTtcblxudmFyIG5vcm1hbGl6ZSA9IGlzRm9yY2VkLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UocmVwbGFjZW1lbnQsICcuJykudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBkYXRhID0gaXNGb3JjZWQuZGF0YSA9IHt9O1xudmFyIE5BVElWRSA9IGlzRm9yY2VkLk5BVElWRSA9ICdOJztcbnZhciBQT0xZRklMTCA9IGlzRm9yY2VkLlBPTFlGSUxMID0gJ1AnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRm9yY2VkO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcbnZhciBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcycpO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xuXG4vKlxuICBvcHRpb25zLnRhcmdldCAgICAgICAgIC0gbmFtZSBvZiB0aGUgdGFyZ2V0IG9iamVjdFxuICBvcHRpb25zLmdsb2JhbCAgICAgICAgIC0gdGFyZ2V0IGlzIHRoZSBnbG9iYWwgb2JqZWN0XG4gIG9wdGlvbnMuc3RhdCAgICAgICAgICAgLSBleHBvcnQgYXMgc3RhdGljIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucHJvdG8gICAgICAgICAgLSBleHBvcnQgYXMgcHJvdG90eXBlIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucmVhbCAgICAgICAgICAgLSByZWFsIHByb3RvdHlwZSBtZXRob2QgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLmZvcmNlZCAgICAgICAgIC0gZXhwb3J0IGV2ZW4gaWYgdGhlIG5hdGl2ZSBmZWF0dXJlIGlzIGF2YWlsYWJsZVxuICBvcHRpb25zLmJpbmQgICAgICAgICAgIC0gYmluZCBtZXRob2RzIHRvIHRoZSB0YXJnZXQsIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy53cmFwICAgICAgICAgICAtIHdyYXAgY29uc3RydWN0b3JzIHRvIHByZXZlbnRpbmcgZ2xvYmFsIHBvbGx1dGlvbiwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLnVuc2FmZSAgICAgICAgIC0gdXNlIHRoZSBzaW1wbGUgYXNzaWdubWVudCBvZiBwcm9wZXJ0eSBpbnN0ZWFkIG9mIGRlbGV0ZSArIGRlZmluZVByb3BlcnR5XG4gIG9wdGlvbnMuc2hhbSAgICAgICAgICAgLSBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gIG9wdGlvbnMuZW51bWVyYWJsZSAgICAgLSBleHBvcnQgYXMgZW51bWVyYWJsZSBwcm9wZXJ0eVxuICBvcHRpb25zLmRvbnRDYWxsR2V0U2V0IC0gcHJldmVudCBjYWxsaW5nIGEgZ2V0dGVyIG9uIHRhcmdldFxuICBvcHRpb25zLm5hbWUgICAgICAgICAgIC0gdGhlIC5uYW1lIG9mIHRoZSBmdW5jdGlvbiBpZiBpdCBkb2VzIG5vdCBtYXRjaCB0aGUga2V5XG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucywgc291cmNlKSB7XG4gIHZhciBUQVJHRVQgPSBvcHRpb25zLnRhcmdldDtcbiAgdmFyIEdMT0JBTCA9IG9wdGlvbnMuZ2xvYmFsO1xuICB2YXIgU1RBVElDID0gb3B0aW9ucy5zdGF0O1xuICB2YXIgRk9SQ0VELCB0YXJnZXQsIGtleSwgdGFyZ2V0UHJvcGVydHksIHNvdXJjZVByb3BlcnR5LCBkZXNjcmlwdG9yO1xuICBpZiAoR0xPQkFMKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsVGhpcztcbiAgfSBlbHNlIGlmIChTVEFUSUMpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxUaGlzW1RBUkdFVF0gfHwgZGVmaW5lR2xvYmFsUHJvcGVydHkoVEFSR0VULCB7fSk7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsVGhpc1tUQVJHRVRdICYmIGdsb2JhbFRoaXNbVEFSR0VUXS5wcm90b3R5cGU7XG4gIH1cbiAgaWYgKHRhcmdldCkgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgc291cmNlUHJvcGVydHkgPSBzb3VyY2Vba2V5XTtcbiAgICBpZiAob3B0aW9ucy5kb250Q2FsbEdldFNldCkge1xuICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gICAgICB0YXJnZXRQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci52YWx1ZTtcbiAgICB9IGVsc2UgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRba2V5XTtcbiAgICBGT1JDRUQgPSBpc0ZvcmNlZChHTE9CQUwgPyBrZXkgOiBUQVJHRVQgKyAoU1RBVElDID8gJy4nIDogJyMnKSArIGtleSwgb3B0aW9ucy5mb3JjZWQpO1xuICAgIC8vIGNvbnRhaW5lZCBpbiB0YXJnZXRcbiAgICBpZiAoIUZPUkNFRCAmJiB0YXJnZXRQcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZW9mIHNvdXJjZVByb3BlcnR5ID09IHR5cGVvZiB0YXJnZXRQcm9wZXJ0eSkgY29udGludWU7XG4gICAgICBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKHNvdXJjZVByb3BlcnR5LCB0YXJnZXRQcm9wZXJ0eSk7XG4gICAgfVxuICAgIC8vIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgICBpZiAob3B0aW9ucy5zaGFtIHx8ICh0YXJnZXRQcm9wZXJ0eSAmJiB0YXJnZXRQcm9wZXJ0eS5zaGFtKSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHNvdXJjZVByb3BlcnR5LCAnc2hhbScsIHRydWUpO1xuICAgIH1cbiAgICBkZWZpbmVCdWlsdEluKHRhcmdldCwga2V5LCBzb3VyY2VQcm9wZXJ0eSwgb3B0aW9ucyk7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxuLy8gYElzQXJyYXlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2FycmF5XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktaXNhcnJheSAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmd1bWVudCkge1xuICByZXR1cm4gY2xhc3NvZihhcmd1bWVudCkgPT09ICdBcnJheSc7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gU2FmYXJpIDwgMTMgZG9lcyBub3QgdGhyb3cgYW4gZXJyb3IgaW4gdGhpcyBjYXNlXG52YXIgU0lMRU5UX09OX05PTl9XUklUQUJMRV9MRU5HVEhfU0VUID0gREVTQ1JJUFRPUlMgJiYgIWZ1bmN0aW9uICgpIHtcbiAgLy8gbWFrZXMgbm8gc2Vuc2Ugd2l0aG91dCBwcm9wZXIgc3RyaWN0IG1vZGUgc3VwcG9ydFxuICBpZiAodGhpcyAhPT0gdW5kZWZpbmVkKSByZXR1cm4gdHJ1ZTtcbiAgdHJ5IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoW10sICdsZW5ndGgnLCB7IHdyaXRhYmxlOiBmYWxzZSB9KS5sZW5ndGggPSAxO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvciBpbnN0YW5jZW9mIFR5cGVFcnJvcjtcbiAgfVxufSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNJTEVOVF9PTl9OT05fV1JJVEFCTEVfTEVOR1RIX1NFVCA/IGZ1bmN0aW9uIChPLCBsZW5ndGgpIHtcbiAgaWYgKGlzQXJyYXkoTykgJiYgIWdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCAnbGVuZ3RoJykud3JpdGFibGUpIHtcbiAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcignQ2Fubm90IHNldCByZWFkIG9ubHkgLmxlbmd0aCcpO1xuICB9IHJldHVybiBPLmxlbmd0aCA9IGxlbmd0aDtcbn0gOiBmdW5jdGlvbiAoTywgbGVuZ3RoKSB7XG4gIHJldHVybiBPLmxlbmd0aCA9IGxlbmd0aDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDB4MUZGRkZGRkZGRkZGRkY7IC8vIDIgKiogNTMgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID4gTUFYX1NBRkVfSU5URUdFUikgdGhyb3cgJFR5cGVFcnJvcignTWF4aW11bSBhbGxvd2VkIGluZGV4IGV4Y2VlZGVkJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciBzZXRBcnJheUxlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zZXQtbGVuZ3RoJyk7XG52YXIgZG9lc05vdEV4Y2VlZFNhZmVJbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvZXMtbm90LWV4Y2VlZC1zYWZlLWludGVnZXInKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG52YXIgSU5DT1JSRUNUX1RPX0xFTkdUSCA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFtdLnB1c2guY2FsbCh7IGxlbmd0aDogMHgxMDAwMDAwMDAgfSwgMSkgIT09IDQyOTQ5NjcyOTc7XG59KTtcblxuLy8gVjggPD0gMTIxIGFuZCBTYWZhcmkgPD0gMTUuNDsgRkYgPCAyMyB0aHJvd3MgSW50ZXJuYWxFcnJvclxuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MTI2ODFcbnZhciBwcm9wZXJFcnJvck9uTm9uV3JpdGFibGVMZW5ndGggPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFtdLCAnbGVuZ3RoJywgeyB3cml0YWJsZTogZmFsc2UgfSkucHVzaCgpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvciBpbnN0YW5jZW9mIFR5cGVFcnJvcjtcbiAgfVxufTtcblxudmFyIEZPUkNFRCA9IElOQ09SUkVDVF9UT19MRU5HVEggfHwgIXByb3BlckVycm9yT25Ob25Xcml0YWJsZUxlbmd0aCgpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnB1c2hgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUucHVzaFxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGFyaXR5OiAxLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFycyAtLSByZXF1aXJlZCBmb3IgYC5sZW5ndGhgXG4gIHB1c2g6IGZ1bmN0aW9uIHB1c2goaXRlbSkge1xuICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gICAgdmFyIGxlbiA9IGxlbmd0aE9mQXJyYXlMaWtlKE8pO1xuICAgIHZhciBhcmdDb3VudCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgZG9lc05vdEV4Y2VlZFNhZmVJbnRlZ2VyKGxlbiArIGFyZ0NvdW50KTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ0NvdW50OyBpKyspIHtcbiAgICAgIE9bbGVuXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIGxlbisrO1xuICAgIH1cbiAgICBzZXRBcnJheUxlbmd0aChPLCBsZW4pO1xuICAgIHJldHVybiBsZW47XG4gIH1cbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc1Byb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBQcm90b3R5cGUpIHtcbiAgaWYgKGlzUHJvdG90eXBlT2YoUHJvdG90eXBlLCBpdCkpIHJldHVybiBpdDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0luY29ycmVjdCBpbnZvY2F0aW9uJyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEYoKSB7IC8qIGVtcHR5ICovIH1cbiAgRi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBudWxsO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldHByb3RvdHlwZW9mIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2YobmV3IEYoKSkgIT09IEYucHJvdG90eXBlO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgQ09SUkVDVF9QUk9UT1RZUEVfR0VUVEVSID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcnJlY3QtcHJvdG90eXBlLWdldHRlcicpO1xuXG52YXIgSUVfUFJPVE8gPSBzaGFyZWRLZXkoJ0lFX1BST1RPJyk7XG52YXIgJE9iamVjdCA9IE9iamVjdDtcbnZhciBPYmplY3RQcm90b3R5cGUgPSAkT2JqZWN0LnByb3RvdHlwZTtcblxuLy8gYE9iamVjdC5nZXRQcm90b3R5cGVPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRwcm90b3R5cGVvZlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRwcm90b3R5cGVvZiAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IENPUlJFQ1RfUFJPVE9UWVBFX0dFVFRFUiA/ICRPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiAoTykge1xuICB2YXIgb2JqZWN0ID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXNPd24ob2JqZWN0LCBJRV9QUk9UTykpIHJldHVybiBvYmplY3RbSUVfUFJPVE9dO1xuICB2YXIgY29uc3RydWN0b3IgPSBvYmplY3QuY29uc3RydWN0b3I7XG4gIGlmIChpc0NhbGxhYmxlKGNvbnN0cnVjdG9yKSAmJiBvYmplY3QgaW5zdGFuY2VvZiBjb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBjb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIG9iamVjdCBpbnN0YW5jZW9mICRPYmplY3QgPyBPYmplY3RQcm90b3R5cGUgOiBudWxsO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgbWFrZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWFrZS1idWlsdC1pbicpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKSB7XG4gIGlmIChkZXNjcmlwdG9yLmdldCkgbWFrZUJ1aWx0SW4oZGVzY3JpcHRvci5nZXQsIG5hbWUsIHsgZ2V0dGVyOiB0cnVlIH0pO1xuICBpZiAoZGVzY3JpcHRvci5zZXQpIG1ha2VCdWlsdEluKGRlc2NyaXB0b3Iuc2V0LCBuYW1lLCB7IHNldHRlcjogdHJ1ZSB9KTtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5LmYodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwga2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3Rba2V5XSA9IHZhbHVlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG4vLyBgT2JqZWN0LmtleXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3Qua2V5c1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1rZXlzIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1ZycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBvYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzJyk7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydGllc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0aWVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnRpZXMgLS0gc2FmZVxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgJiYgIVY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBwcm9wcyA9IHRvSW5kZXhlZE9iamVjdChQcm9wZXJ0aWVzKTtcbiAgdmFyIGtleXMgPSBvYmplY3RLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsZW5ndGggPiBpbmRleCkgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXkgPSBrZXlzW2luZGV4KytdLCBwcm9wc1trZXldKTtcbiAgcmV0dXJuIE87XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ2RvY3VtZW50JywgJ2RvY3VtZW50RWxlbWVudCcpO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGdsb2JhbCBBY3RpdmVYT2JqZWN0IC0tIG9sZCBJRSwgV1NIICovXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZGVmaW5lUHJvcGVydGllc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnRpZXMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xudmFyIGh0bWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaHRtbCcpO1xudmFyIGRvY3VtZW50Q3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG5cbnZhciBHVCA9ICc+JztcbnZhciBMVCA9ICc8JztcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBTQ1JJUFQgPSAnc2NyaXB0JztcbnZhciBJRV9QUk9UTyA9IHNoYXJlZEtleSgnSUVfUFJPVE8nKTtcblxudmFyIEVtcHR5Q29uc3RydWN0b3IgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cbnZhciBzY3JpcHRUYWcgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICByZXR1cm4gTFQgKyBTQ1JJUFQgKyBHVCArIGNvbnRlbnQgKyBMVCArICcvJyArIFNDUklQVCArIEdUO1xufTtcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIEFjdGl2ZVggT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYID0gZnVuY3Rpb24gKGFjdGl2ZVhEb2N1bWVudCkge1xuICBhY3RpdmVYRG9jdW1lbnQud3JpdGUoc2NyaXB0VGFnKCcnKSk7XG4gIGFjdGl2ZVhEb2N1bWVudC5jbG9zZSgpO1xuICB2YXIgdGVtcCA9IGFjdGl2ZVhEb2N1bWVudC5wYXJlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1hc3NpZ25tZW50IC0tIGF2b2lkIG1lbW9yeSBsZWFrXG4gIGFjdGl2ZVhEb2N1bWVudCA9IG51bGw7XG4gIHJldHVybiB0ZW1wO1xufTtcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIE51bGxQcm90b09iamVjdFZpYUlGcmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IGRvY3VtZW50Q3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gIHZhciBKUyA9ICdqYXZhJyArIFNDUklQVCArICc6JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgaHRtbC5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNDc1XG4gIGlmcmFtZS5zcmMgPSBTdHJpbmcoSlMpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKHNjcmlwdFRhZygnZG9jdW1lbnQuRj1PYmplY3QnKSk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIHJldHVybiBpZnJhbWVEb2N1bWVudC5GO1xufTtcblxuLy8gQ2hlY2sgZm9yIGRvY3VtZW50LmRvbWFpbiBhbmQgYWN0aXZlIHggc3VwcG9ydFxuLy8gTm8gbmVlZCB0byB1c2UgYWN0aXZlIHggYXBwcm9hY2ggd2hlbiBkb2N1bWVudC5kb21haW4gaXMgbm90IHNldFxuLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lcy1zaGltcy9lczUtc2hpbS9pc3N1ZXMvMTUwXG4vLyB2YXJpYXRpb24gb2YgaHR0cHM6Ly9naXRodWIuY29tL2tpdGNhbWJyaWRnZS9lczUtc2hpbS9jb21taXQvNGY3MzhhYzA2NjM0NlxuLy8gYXZvaWQgSUUgR0MgYnVnXG52YXIgYWN0aXZlWERvY3VtZW50O1xudmFyIE51bGxQcm90b09iamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICBhY3RpdmVYRG9jdW1lbnQgPSBuZXcgQWN0aXZlWE9iamVjdCgnaHRtbGZpbGUnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogaWdub3JlICovIH1cbiAgTnVsbFByb3RvT2JqZWN0ID0gdHlwZW9mIGRvY3VtZW50ICE9ICd1bmRlZmluZWQnXG4gICAgPyBkb2N1bWVudC5kb21haW4gJiYgYWN0aXZlWERvY3VtZW50XG4gICAgICA/IE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVgoYWN0aXZlWERvY3VtZW50KSAvLyBvbGQgSUVcbiAgICAgIDogTnVsbFByb3RvT2JqZWN0VmlhSUZyYW1lKClcbiAgICA6IE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVgoYWN0aXZlWERvY3VtZW50KTsgLy8gV1NIXG4gIHZhciBsZW5ndGggPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkgZGVsZXRlIE51bGxQcm90b09iamVjdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2xlbmd0aF1dO1xuICByZXR1cm4gTnVsbFByb3RvT2JqZWN0KCk7XG59O1xuXG5oaWRkZW5LZXlzW0lFX1BST1RPXSA9IHRydWU7XG5cbi8vIGBPYmplY3QuY3JlYXRlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmNyZWF0ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1jcmVhdGUgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlDb25zdHJ1Y3RvcltQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5Q29uc3RydWN0b3IoKTtcbiAgICBFbXB0eUNvbnN0cnVjdG9yW1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IE51bGxQcm90b09iamVjdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZGVmaW5lUHJvcGVydGllc01vZHVsZS5mKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZScpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4nKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgPSBmYWxzZTtcblxuLy8gYCVJdGVyYXRvclByb3RvdHlwZSVgIG9iamVjdFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy0laXRlcmF0b3Jwcm90b3R5cGUlLW9iamVjdFxudmFyIEl0ZXJhdG9yUHJvdG90eXBlLCBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUsIGFycmF5SXRlcmF0b3I7XG5cbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLWFycmF5LXByb3RvdHlwZS1rZXlzIC0tIHNhZmUgKi9cbmlmIChbXS5rZXlzKSB7XG4gIGFycmF5SXRlcmF0b3IgPSBbXS5rZXlzKCk7XG4gIC8vIFNhZmFyaSA4IGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICBpZiAoISgnbmV4dCcgaW4gYXJyYXlJdGVyYXRvcikpIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgPSB0cnVlO1xuICBlbHNlIHtcbiAgICBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZihnZXRQcm90b3R5cGVPZihhcnJheUl0ZXJhdG9yKSk7XG4gICAgaWYgKFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSkgSXRlcmF0b3JQcm90b3R5cGUgPSBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cbn1cblxudmFyIE5FV19JVEVSQVRPUl9QUk9UT1RZUEUgPSAhaXNPYmplY3QoSXRlcmF0b3JQcm90b3R5cGUpIHx8IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRlc3QgPSB7fTtcbiAgLy8gRkY0NC0gbGVnYWN5IGl0ZXJhdG9ycyBjYXNlXG4gIHJldHVybiBJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0uY2FsbCh0ZXN0KSAhPT0gdGVzdDtcbn0pO1xuXG5pZiAoTkVXX0lURVJBVE9SX1BST1RPVFlQRSkgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbmVsc2UgaWYgKElTX1BVUkUpIEl0ZXJhdG9yUHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcblxuLy8gYCVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSVpdGVyYXRvcnByb3RvdHlwZSUtQEBpdGVyYXRvclxuaWYgKCFpc0NhbGxhYmxlKEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXSkpIHtcbiAgZGVmaW5lQnVpbHRJbihJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBJdGVyYXRvclByb3RvdHlwZTogSXRlcmF0b3JQcm90b3R5cGUsXG4gIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlM6IEJVR0dZX1NBRkFSSV9JVEVSQVRPUlNcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4taW5zdGFuY2UnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YnKTtcbnZhciBkZWZpbmVCdWlsdEluQWNjZXNzb3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluLWFjY2Vzc29yJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycy1jb3JlJykuSXRlcmF0b3JQcm90b3R5cGU7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcblxudmFyIENPTlNUUlVDVE9SID0gJ2NvbnN0cnVjdG9yJztcbnZhciBJVEVSQVRPUiA9ICdJdGVyYXRvcic7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG52YXIgTmF0aXZlSXRlcmF0b3IgPSBnbG9iYWxUaGlzW0lURVJBVE9SXTtcblxuLy8gRkY1Ni0gaGF2ZSBub24tc3RhbmRhcmQgZ2xvYmFsIGhlbHBlciBgSXRlcmF0b3JgXG52YXIgRk9SQ0VEID0gSVNfUFVSRVxuICB8fCAhaXNDYWxsYWJsZShOYXRpdmVJdGVyYXRvcilcbiAgfHwgTmF0aXZlSXRlcmF0b3IucHJvdG90eXBlICE9PSBJdGVyYXRvclByb3RvdHlwZVxuICAvLyBGRjQ0LSBub24tc3RhbmRhcmQgYEl0ZXJhdG9yYCBwYXNzZXMgcHJldmlvdXMgdGVzdHNcbiAgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHsgTmF0aXZlSXRlcmF0b3Ioe30pOyB9KTtcblxudmFyIEl0ZXJhdG9yQ29uc3RydWN0b3IgPSBmdW5jdGlvbiBJdGVyYXRvcigpIHtcbiAgYW5JbnN0YW5jZSh0aGlzLCBJdGVyYXRvclByb3RvdHlwZSk7XG4gIGlmIChnZXRQcm90b3R5cGVPZih0aGlzKSA9PT0gSXRlcmF0b3JQcm90b3R5cGUpIHRocm93IG5ldyAkVHlwZUVycm9yKCdBYnN0cmFjdCBjbGFzcyBJdGVyYXRvciBub3QgZGlyZWN0bHkgY29uc3RydWN0YWJsZScpO1xufTtcblxudmFyIGRlZmluZUl0ZXJhdG9yUHJvdG90eXBlQWNjZXNzb3IgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICBpZiAoREVTQ1JJUFRPUlMpIHtcbiAgICBkZWZpbmVCdWlsdEluQWNjZXNzb3IoSXRlcmF0b3JQcm90b3R5cGUsIGtleSwge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChyZXBsYWNlbWVudCkge1xuICAgICAgICBhbk9iamVjdCh0aGlzKTtcbiAgICAgICAgaWYgKHRoaXMgPT09IEl0ZXJhdG9yUHJvdG90eXBlKSB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIllvdSBjYW4ndCByZWRlZmluZSB0aGlzIHByb3BlcnR5XCIpO1xuICAgICAgICBpZiAoaGFzT3duKHRoaXMsIGtleSkpIHRoaXNba2V5XSA9IHJlcGxhY2VtZW50O1xuICAgICAgICBlbHNlIGNyZWF0ZVByb3BlcnR5KHRoaXMsIGtleSwgcmVwbGFjZW1lbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2UgSXRlcmF0b3JQcm90b3R5cGVba2V5XSA9IHZhbHVlO1xufTtcblxuaWYgKCFoYXNPd24oSXRlcmF0b3JQcm90b3R5cGUsIFRPX1NUUklOR19UQUcpKSBkZWZpbmVJdGVyYXRvclByb3RvdHlwZUFjY2Vzc29yKFRPX1NUUklOR19UQUcsIElURVJBVE9SKTtcblxuaWYgKEZPUkNFRCB8fCAhaGFzT3duKEl0ZXJhdG9yUHJvdG90eXBlLCBDT05TVFJVQ1RPUikgfHwgSXRlcmF0b3JQcm90b3R5cGVbQ09OU1RSVUNUT1JdID09PSBPYmplY3QpIHtcbiAgZGVmaW5lSXRlcmF0b3JQcm90b3R5cGVBY2Nlc3NvcihDT05TVFJVQ1RPUiwgSXRlcmF0b3JDb25zdHJ1Y3Rvcik7XG59XG5cbkl0ZXJhdG9yQ29uc3RydWN0b3IucHJvdG90eXBlID0gSXRlcmF0b3JQcm90b3R5cGU7XG5cbi8vIGBJdGVyYXRvcmAgY29uc3RydWN0b3Jcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXRlcmF0b3JcbiQoeyBnbG9iYWw6IHRydWUsIGNvbnN0cnVjdG9yOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIEl0ZXJhdG9yOiBJdGVyYXRvckNvbnN0cnVjdG9yXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxucmVxdWlyZSgnLi4vbW9kdWxlcy9lcy5pdGVyYXRvci5jb25zdHJ1Y3RvcicpO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGBHZXRJdGVyYXRvckRpcmVjdChvYmopYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9wcm9wb3NhbC1pdGVyYXRvci1oZWxwZXJzLyNzZWMtZ2V0aXRlcmF0b3JkaXJlY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4ge1xuICAgIGl0ZXJhdG9yOiBvYmosXG4gICAgbmV4dDogb2JqLm5leHQsXG4gICAgZG9uZTogZmFsc2VcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc3JjLCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIGRlZmluZUJ1aWx0SW4odGFyZ2V0LCBrZXksIHNyY1trZXldLCBvcHRpb25zKTtcbiAgcmV0dXJuIHRhcmdldDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gYENyZWF0ZUl0ZXJSZXN1bHRPYmplY3RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1jcmVhdGVpdGVycmVzdWx0b2JqZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgZG9uZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6IGRvbmUgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBraW5kLCB2YWx1ZSkge1xuICB2YXIgaW5uZXJSZXN1bHQsIGlubmVyRXJyb3I7XG4gIGFuT2JqZWN0KGl0ZXJhdG9yKTtcbiAgdHJ5IHtcbiAgICBpbm5lclJlc3VsdCA9IGdldE1ldGhvZChpdGVyYXRvciwgJ3JldHVybicpO1xuICAgIGlmICghaW5uZXJSZXN1bHQpIHtcbiAgICAgIGlmIChraW5kID09PSAndGhyb3cnKSB0aHJvdyB2YWx1ZTtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgaW5uZXJSZXN1bHQgPSBjYWxsKGlubmVyUmVzdWx0LCBpdGVyYXRvcik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaW5uZXJFcnJvciA9IHRydWU7XG4gICAgaW5uZXJSZXN1bHQgPSBlcnJvcjtcbiAgfVxuICBpZiAoa2luZCA9PT0gJ3Rocm93JykgdGhyb3cgdmFsdWU7XG4gIGlmIChpbm5lckVycm9yKSB0aHJvdyBpbm5lclJlc3VsdDtcbiAgYW5PYmplY3QoaW5uZXJSZXN1bHQpO1xuICByZXR1cm4gdmFsdWU7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZScpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBkZWZpbmVCdWlsdElucyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW5zJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzLWNvcmUnKS5JdGVyYXRvclByb3RvdHlwZTtcbnZhciBjcmVhdGVJdGVyUmVzdWx0T2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1pdGVyLXJlc3VsdC1vYmplY3QnKTtcbnZhciBpdGVyYXRvckNsb3NlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlJyk7XG5cbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xudmFyIElURVJBVE9SX0hFTFBFUiA9ICdJdGVyYXRvckhlbHBlcic7XG52YXIgV1JBUF9GT1JfVkFMSURfSVRFUkFUT1IgPSAnV3JhcEZvclZhbGlkSXRlcmF0b3InO1xudmFyIHNldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLnNldDtcblxudmFyIGNyZWF0ZUl0ZXJhdG9yUHJveHlQcm90b3R5cGUgPSBmdW5jdGlvbiAoSVNfSVRFUkFUT1IpIHtcbiAgdmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldHRlckZvcihJU19JVEVSQVRPUiA/IFdSQVBfRk9SX1ZBTElEX0lURVJBVE9SIDogSVRFUkFUT1JfSEVMUEVSKTtcblxuICByZXR1cm4gZGVmaW5lQnVpbHRJbnMoY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKSwge1xuICAgIG5leHQ6IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpO1xuICAgICAgLy8gZm9yIHNpbXBsaWZpY2F0aW9uOlxuICAgICAgLy8gICBmb3IgYCVXcmFwRm9yVmFsaWRJdGVyYXRvclByb3RvdHlwZSUubmV4dGAgb3Igd2l0aCBgc3RhdGUucmV0dXJuSGFuZGxlclJlc3VsdGAgb3VyIGBuZXh0SGFuZGxlcmAgcmV0dXJucyBgSXRlclJlc3VsdE9iamVjdGBcbiAgICAgIC8vICAgZm9yIGAlSXRlcmF0b3JIZWxwZXJQcm90b3R5cGUlLm5leHRgIC0ganVzdCBhIHZhbHVlXG4gICAgICBpZiAoSVNfSVRFUkFUT1IpIHJldHVybiBzdGF0ZS5uZXh0SGFuZGxlcigpO1xuICAgICAgaWYgKHN0YXRlLmRvbmUpIHJldHVybiBjcmVhdGVJdGVyUmVzdWx0T2JqZWN0KHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gc3RhdGUubmV4dEhhbmRsZXIoKTtcbiAgICAgICAgcmV0dXJuIHN0YXRlLnJldHVybkhhbmRsZXJSZXN1bHQgPyByZXN1bHQgOiBjcmVhdGVJdGVyUmVzdWx0T2JqZWN0KHJlc3VsdCwgc3RhdGUuZG9uZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBzdGF0ZS5kb25lID0gdHJ1ZTtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgfSxcbiAgICAncmV0dXJuJzogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKTtcbiAgICAgIHZhciBpdGVyYXRvciA9IHN0YXRlLml0ZXJhdG9yO1xuICAgICAgc3RhdGUuZG9uZSA9IHRydWU7XG4gICAgICBpZiAoSVNfSVRFUkFUT1IpIHtcbiAgICAgICAgdmFyIHJldHVybk1ldGhvZCA9IGdldE1ldGhvZChpdGVyYXRvciwgJ3JldHVybicpO1xuICAgICAgICByZXR1cm4gcmV0dXJuTWV0aG9kID8gY2FsbChyZXR1cm5NZXRob2QsIGl0ZXJhdG9yKSA6IGNyZWF0ZUl0ZXJSZXN1bHRPYmplY3QodW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGlmIChzdGF0ZS5pbm5lcikgdHJ5IHtcbiAgICAgICAgaXRlcmF0b3JDbG9zZShzdGF0ZS5pbm5lci5pdGVyYXRvciwgJ25vcm1hbCcpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsICd0aHJvdycsIGVycm9yKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVyYXRvcikgaXRlcmF0b3JDbG9zZShpdGVyYXRvciwgJ25vcm1hbCcpO1xuICAgICAgcmV0dXJuIGNyZWF0ZUl0ZXJSZXN1bHRPYmplY3QodW5kZWZpbmVkLCB0cnVlKTtcbiAgICB9XG4gIH0pO1xufTtcblxudmFyIFdyYXBGb3JWYWxpZEl0ZXJhdG9yUHJvdG90eXBlID0gY3JlYXRlSXRlcmF0b3JQcm94eVByb3RvdHlwZSh0cnVlKTtcbnZhciBJdGVyYXRvckhlbHBlclByb3RvdHlwZSA9IGNyZWF0ZUl0ZXJhdG9yUHJveHlQcm90b3R5cGUoZmFsc2UpO1xuXG5jcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoSXRlcmF0b3JIZWxwZXJQcm90b3R5cGUsIFRPX1NUUklOR19UQUcsICdJdGVyYXRvciBIZWxwZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmV4dEhhbmRsZXIsIElTX0lURVJBVE9SLCBSRVRVUk5fSEFORExFUl9SRVNVTFQpIHtcbiAgdmFyIEl0ZXJhdG9yUHJveHkgPSBmdW5jdGlvbiBJdGVyYXRvcihyZWNvcmQsIHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlKSB7XG4gICAgICBzdGF0ZS5pdGVyYXRvciA9IHJlY29yZC5pdGVyYXRvcjtcbiAgICAgIHN0YXRlLm5leHQgPSByZWNvcmQubmV4dDtcbiAgICB9IGVsc2Ugc3RhdGUgPSByZWNvcmQ7XG4gICAgc3RhdGUudHlwZSA9IElTX0lURVJBVE9SID8gV1JBUF9GT1JfVkFMSURfSVRFUkFUT1IgOiBJVEVSQVRPUl9IRUxQRVI7XG4gICAgc3RhdGUucmV0dXJuSGFuZGxlclJlc3VsdCA9ICEhUkVUVVJOX0hBTkRMRVJfUkVTVUxUO1xuICAgIHN0YXRlLm5leHRIYW5kbGVyID0gbmV4dEhhbmRsZXI7XG4gICAgc3RhdGUuY291bnRlciA9IDA7XG4gICAgc3RhdGUuZG9uZSA9IGZhbHNlO1xuICAgIHNldEludGVybmFsU3RhdGUodGhpcywgc3RhdGUpO1xuICB9O1xuXG4gIEl0ZXJhdG9yUHJveHkucHJvdG90eXBlID0gSVNfSVRFUkFUT1IgPyBXcmFwRm9yVmFsaWRJdGVyYXRvclByb3RvdHlwZSA6IEl0ZXJhdG9ySGVscGVyUHJvdG90eXBlO1xuXG4gIHJldHVybiBJdGVyYXRvclByb3h5O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgaXRlcmF0b3JDbG9zZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1jbG9zZScpO1xuXG4vLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBFTlRSSUVTKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEVOVFJJRVMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCAndGhyb3cnLCBlcnJvcik7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBnZXRJdGVyYXRvckRpcmVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItZGlyZWN0Jyk7XG52YXIgY3JlYXRlSXRlcmF0b3JQcm94eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1jcmVhdGUtcHJveHknKTtcbnZhciBjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NhbGwtd2l0aC1zYWZlLWl0ZXJhdGlvbi1jbG9zaW5nJyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG5cbnZhciBJdGVyYXRvclByb3h5ID0gY3JlYXRlSXRlcmF0b3JQcm94eShmdW5jdGlvbiAoKSB7XG4gIHZhciBpdGVyYXRvciA9IHRoaXMuaXRlcmF0b3I7XG4gIHZhciBwcmVkaWNhdGUgPSB0aGlzLnByZWRpY2F0ZTtcbiAgdmFyIG5leHQgPSB0aGlzLm5leHQ7XG4gIHZhciByZXN1bHQsIGRvbmUsIHZhbHVlO1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIHJlc3VsdCA9IGFuT2JqZWN0KGNhbGwobmV4dCwgaXRlcmF0b3IpKTtcbiAgICBkb25lID0gdGhpcy5kb25lID0gISFyZXN1bHQuZG9uZTtcbiAgICBpZiAoZG9uZSkgcmV0dXJuO1xuICAgIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgIGlmIChjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nKGl0ZXJhdG9yLCBwcmVkaWNhdGUsIFt2YWx1ZSwgdGhpcy5jb3VudGVyKytdLCB0cnVlKSkgcmV0dXJuIHZhbHVlO1xuICB9XG59KTtcblxuLy8gYEl0ZXJhdG9yLnByb3RvdHlwZS5maWx0ZXJgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pdGVyYXRvci5wcm90b3R5cGUuZmlsdGVyXG4kKHsgdGFyZ2V0OiAnSXRlcmF0b3InLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiBJU19QVVJFIH0sIHtcbiAgZmlsdGVyOiBmdW5jdGlvbiBmaWx0ZXIocHJlZGljYXRlKSB7XG4gICAgYW5PYmplY3QodGhpcyk7XG4gICAgYUNhbGxhYmxlKHByZWRpY2F0ZSk7XG4gICAgcmV0dXJuIG5ldyBJdGVyYXRvclByb3h5KGdldEl0ZXJhdG9yRGlyZWN0KHRoaXMpLCB7XG4gICAgICBwcmVkaWNhdGU6IHByZWRpY2F0ZVxuICAgIH0pO1xuICB9XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxucmVxdWlyZSgnLi4vbW9kdWxlcy9lcy5pdGVyYXRvci5maWx0ZXInKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2xhc3NvZlJhdyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbikge1xuICAvLyBOYXNob3JuIGJ1ZzpcbiAgLy8gICBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTEyOFxuICAvLyAgIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xMTMwXG4gIGlmIChjbGFzc29mUmF3KGZuKSA9PT0gJ0Z1bmN0aW9uJykgcmV0dXJuIHVuY3VycnlUaGlzKGZuKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy1jbGF1c2UnKTtcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBiaW5kID0gdW5jdXJyeVRoaXModW5jdXJyeVRoaXMuYmluZCk7XG5cbi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQpIHtcbiAgYUNhbGxhYmxlKGZuKTtcbiAgcmV0dXJuIHRoYXQgPT09IHVuZGVmaW5lZCA/IGZuIDogTkFUSVZFX0JJTkQgPyBiaW5kKGZuLCB0aGF0KSA6IGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG90eXBlID0gQXJyYXkucHJvdG90eXBlO1xuXG4vLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvdHlwZVtJVEVSQVRPUl0gPT09IGl0KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciB0ZXN0ID0ge307XG5cbnRlc3RbVE9fU1RSSU5HX1RBR10gPSAneic7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RyaW5nKHRlc3QpID09PSAnW29iamVjdCB6XSc7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIFRPX1NUUklOR19UQUdfU1VQUE9SVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgY2xhc3NvZlJhdyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIENPUlJFQ1RfQVJHVU1FTlRTID0gY2xhc3NvZlJhdyhmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbi8vIGdldHRpbmcgdGFnIGZyb20gRVM2KyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2Bcbm1vZHVsZS5leHBvcnRzID0gVE9fU1RSSU5HX1RBR19TVVBQT1JUID8gY2xhc3NvZlJhdyA6IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgdGFnLCByZXN1bHQ7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mICh0YWcgPSB0cnlHZXQoTyA9ICRPYmplY3QoaXQpLCBUT19TVFJJTkdfVEFHKSkgPT0gJ3N0cmluZycgPyB0YWdcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IENPUlJFQ1RfQVJHVU1FTlRTID8gY2xhc3NvZlJhdyhPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChyZXN1bHQgPSBjbGFzc29mUmF3KE8pKSA9PT0gJ09iamVjdCcgJiYgaXNDYWxsYWJsZShPLmNhbGxlZSkgPyAnQXJndW1lbnRzJyA6IHJlc3VsdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZicpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc051bGxPclVuZGVmaW5lZChpdCkpIHJldHVybiBnZXRNZXRob2QoaXQsIElURVJBVE9SKVxuICAgIHx8IGdldE1ldGhvZChpdCwgJ0BAaXRlcmF0b3InKVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRyeVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RyeS10by1zdHJpbmcnKTtcbnZhciBnZXRJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCwgdXNpbmdJdGVyYXRvcikge1xuICB2YXIgaXRlcmF0b3JNZXRob2QgPSBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGdldEl0ZXJhdG9yTWV0aG9kKGFyZ3VtZW50KSA6IHVzaW5nSXRlcmF0b3I7XG4gIGlmIChhQ2FsbGFibGUoaXRlcmF0b3JNZXRob2QpKSByZXR1cm4gYW5PYmplY3QoY2FsbChpdGVyYXRvck1ldGhvZCwgYXJndW1lbnQpKTtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IodHJ5VG9TdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgaXRlcmFibGUnKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xudmFyIGlzQXJyYXlJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheS1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xudmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZicpO1xudmFyIGdldEl0ZXJhdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvcicpO1xudmFyIGdldEl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBpdGVyYXRvckNsb3NlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG52YXIgUmVzdWx0ID0gZnVuY3Rpb24gKHN0b3BwZWQsIHJlc3VsdCkge1xuICB0aGlzLnN0b3BwZWQgPSBzdG9wcGVkO1xuICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcbn07XG5cbnZhciBSZXN1bHRQcm90b3R5cGUgPSBSZXN1bHQucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgdW5ib3VuZEZ1bmN0aW9uLCBvcHRpb25zKSB7XG4gIHZhciB0aGF0ID0gb3B0aW9ucyAmJiBvcHRpb25zLnRoYXQ7XG4gIHZhciBBU19FTlRSSUVTID0gISEob3B0aW9ucyAmJiBvcHRpb25zLkFTX0VOVFJJRVMpO1xuICB2YXIgSVNfUkVDT1JEID0gISEob3B0aW9ucyAmJiBvcHRpb25zLklTX1JFQ09SRCk7XG4gIHZhciBJU19JVEVSQVRPUiA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5JU19JVEVSQVRPUik7XG4gIHZhciBJTlRFUlJVUFRFRCA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5JTlRFUlJVUFRFRCk7XG4gIHZhciBmbiA9IGJpbmQodW5ib3VuZEZ1bmN0aW9uLCB0aGF0KTtcbiAgdmFyIGl0ZXJhdG9yLCBpdGVyRm4sIGluZGV4LCBsZW5ndGgsIHJlc3VsdCwgbmV4dCwgc3RlcDtcblxuICB2YXIgc3RvcCA9IGZ1bmN0aW9uIChjb25kaXRpb24pIHtcbiAgICBpZiAoaXRlcmF0b3IpIGl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsICdub3JtYWwnLCBjb25kaXRpb24pO1xuICAgIHJldHVybiBuZXcgUmVzdWx0KHRydWUsIGNvbmRpdGlvbik7XG4gIH07XG5cbiAgdmFyIGNhbGxGbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmIChBU19FTlRSSUVTKSB7XG4gICAgICBhbk9iamVjdCh2YWx1ZSk7XG4gICAgICByZXR1cm4gSU5URVJSVVBURUQgPyBmbih2YWx1ZVswXSwgdmFsdWVbMV0sIHN0b3ApIDogZm4odmFsdWVbMF0sIHZhbHVlWzFdKTtcbiAgICB9IHJldHVybiBJTlRFUlJVUFRFRCA/IGZuKHZhbHVlLCBzdG9wKSA6IGZuKHZhbHVlKTtcbiAgfTtcblxuICBpZiAoSVNfUkVDT1JEKSB7XG4gICAgaXRlcmF0b3IgPSBpdGVyYWJsZS5pdGVyYXRvcjtcbiAgfSBlbHNlIGlmIChJU19JVEVSQVRPUikge1xuICAgIGl0ZXJhdG9yID0gaXRlcmFibGU7XG4gIH0gZWxzZSB7XG4gICAgaXRlckZuID0gZ2V0SXRlcmF0b3JNZXRob2QoaXRlcmFibGUpO1xuICAgIGlmICghaXRlckZuKSB0aHJvdyBuZXcgJFR5cGVFcnJvcih0cnlUb1N0cmluZyhpdGVyYWJsZSkgKyAnIGlzIG5vdCBpdGVyYWJsZScpO1xuICAgIC8vIG9wdGltaXNhdGlvbiBmb3IgYXJyYXkgaXRlcmF0b3JzXG4gICAgaWYgKGlzQXJyYXlJdGVyYXRvck1ldGhvZChpdGVyRm4pKSB7XG4gICAgICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoaXRlcmFibGUpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgICByZXN1bHQgPSBjYWxsRm4oaXRlcmFibGVbaW5kZXhdKTtcbiAgICAgICAgaWYgKHJlc3VsdCAmJiBpc1Byb3RvdHlwZU9mKFJlc3VsdFByb3RvdHlwZSwgcmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0gcmV0dXJuIG5ldyBSZXN1bHQoZmFsc2UpO1xuICAgIH1cbiAgICBpdGVyYXRvciA9IGdldEl0ZXJhdG9yKGl0ZXJhYmxlLCBpdGVyRm4pO1xuICB9XG5cbiAgbmV4dCA9IElTX1JFQ09SRCA/IGl0ZXJhYmxlLm5leHQgOiBpdGVyYXRvci5uZXh0O1xuICB3aGlsZSAoIShzdGVwID0gY2FsbChuZXh0LCBpdGVyYXRvcikpLmRvbmUpIHtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gY2FsbEZuKHN0ZXAudmFsdWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCAndGhyb3cnLCBlcnJvcik7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgcmVzdWx0ID09ICdvYmplY3QnICYmIHJlc3VsdCAmJiBpc1Byb3RvdHlwZU9mKFJlc3VsdFByb3RvdHlwZSwgcmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgfSByZXR1cm4gbmV3IFJlc3VsdChmYWxzZSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGl0ZXJhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0ZScpO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZ2V0SXRlcmF0b3JEaXJlY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLWRpcmVjdCcpO1xuXG4vLyBgSXRlcmF0b3IucHJvdG90eXBlLmZpbmRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pdGVyYXRvci5wcm90b3R5cGUuZmluZFxuJCh7IHRhcmdldDogJ0l0ZXJhdG9yJywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUgfSwge1xuICBmaW5kOiBmdW5jdGlvbiBmaW5kKHByZWRpY2F0ZSkge1xuICAgIGFuT2JqZWN0KHRoaXMpO1xuICAgIGFDYWxsYWJsZShwcmVkaWNhdGUpO1xuICAgIHZhciByZWNvcmQgPSBnZXRJdGVyYXRvckRpcmVjdCh0aGlzKTtcbiAgICB2YXIgY291bnRlciA9IDA7XG4gICAgcmV0dXJuIGl0ZXJhdGUocmVjb3JkLCBmdW5jdGlvbiAodmFsdWUsIHN0b3ApIHtcbiAgICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGNvdW50ZXIrKykpIHJldHVybiBzdG9wKHZhbHVlKTtcbiAgICB9LCB7IElTX1JFQ09SRDogdHJ1ZSwgSU5URVJSVVBURUQ6IHRydWUgfSkucmVzdWx0O1xuICB9XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxucmVxdWlyZSgnLi4vbW9kdWxlcy9lcy5pdGVyYXRvci5maW5kJyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgaXRlcmF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRlJyk7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBnZXRJdGVyYXRvckRpcmVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItZGlyZWN0Jyk7XG5cbi8vIGBJdGVyYXRvci5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWl0ZXJhdG9yLnByb3RvdHlwZS5mb3JlYWNoXG4kKHsgdGFyZ2V0OiAnSXRlcmF0b3InLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSB9LCB7XG4gIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgICBhbk9iamVjdCh0aGlzKTtcbiAgICBhQ2FsbGFibGUoZm4pO1xuICAgIHZhciByZWNvcmQgPSBnZXRJdGVyYXRvckRpcmVjdCh0aGlzKTtcbiAgICB2YXIgY291bnRlciA9IDA7XG4gICAgaXRlcmF0ZShyZWNvcmQsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgZm4odmFsdWUsIGNvdW50ZXIrKyk7XG4gICAgfSwgeyBJU19SRUNPUkQ6IHRydWUgfSk7XG4gIH1cbn0pO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzLml0ZXJhdG9yLmZvci1lYWNoJyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZ2V0SXRlcmF0b3JEaXJlY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLWRpcmVjdCcpO1xudmFyIGNyZWF0ZUl0ZXJhdG9yUHJveHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3ItY3JlYXRlLXByb3h5Jyk7XG52YXIgY2FsbFdpdGhTYWZlSXRlcmF0aW9uQ2xvc2luZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jYWxsLXdpdGgtc2FmZS1pdGVyYXRpb24tY2xvc2luZycpO1xuXG52YXIgSXRlcmF0b3JQcm94eSA9IGNyZWF0ZUl0ZXJhdG9yUHJveHkoZnVuY3Rpb24gKCkge1xuICB2YXIgaXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yO1xuICB2YXIgcmVzdWx0ID0gYW5PYmplY3QoY2FsbCh0aGlzLm5leHQsIGl0ZXJhdG9yKSk7XG4gIHZhciBkb25lID0gdGhpcy5kb25lID0gISFyZXN1bHQuZG9uZTtcbiAgaWYgKCFkb25lKSByZXR1cm4gY2FsbFdpdGhTYWZlSXRlcmF0aW9uQ2xvc2luZyhpdGVyYXRvciwgdGhpcy5tYXBwZXIsIFtyZXN1bHQudmFsdWUsIHRoaXMuY291bnRlcisrXSwgdHJ1ZSk7XG59KTtcblxuLy8gYEl0ZXJhdG9yLnByb3RvdHlwZS5tYXBgIG1ldGhvZFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtaXRlcmF0b3ItaGVscGVyc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtYXAobWFwcGVyKSB7XG4gIGFuT2JqZWN0KHRoaXMpO1xuICBhQ2FsbGFibGUobWFwcGVyKTtcbiAgcmV0dXJuIG5ldyBJdGVyYXRvclByb3h5KGdldEl0ZXJhdG9yRGlyZWN0KHRoaXMpLCB7XG4gICAgbWFwcGVyOiBtYXBwZXJcbiAgfSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIG1hcCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1tYXAnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcblxuLy8gYEl0ZXJhdG9yLnByb3RvdHlwZS5tYXBgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pdGVyYXRvci5wcm90b3R5cGUubWFwXG4kKHsgdGFyZ2V0OiAnSXRlcmF0b3InLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiBJU19QVVJFIH0sIHtcbiAgbWFwOiBtYXBcbn0pO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzLml0ZXJhdG9yLm1hcCcpO1xuIiwgImV4cG9ydCAqIGZyb20gJ2NoaW5lc2UtZGF5cyc7XG4iLCAidmFyIFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgVSA9IChlLCB0LCByKSA9PiB0IGluIGUgPyBQKGUsIHQsIHsgZW51bWVyYWJsZTogITAsIGNvbmZpZ3VyYWJsZTogITAsIHdyaXRhYmxlOiAhMCwgdmFsdWU6IHIgfSkgOiBlW3RdID0gcjtcbnZhciBjID0gKGUsIHQsIHIpID0+IFUoZSwgdHlwZW9mIHQgIT0gXCJzeW1ib2xcIiA/IHQgKyBcIlwiIDogdCwgcik7XG5jb25zdCBkID0gY2xhc3MgZCB7XG4gIGNvbnN0cnVjdG9yKHQpIHtcbiAgICBjKHRoaXMsIFwiX2RhdGVcIik7XG4gICAgdCBpbnN0YW5jZW9mIGQgPyB0aGlzLl9kYXRlID0gbmV3IERhdGUodC50b0RhdGUoKSkgOiB0IGluc3RhbmNlb2YgRGF0ZSA/IHRoaXMuX2RhdGUgPSBuZXcgRGF0ZSh0KSA6IHR5cGVvZiB0ID09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHQgPT0gXCJudW1iZXJcIiA/ICh0aGlzLl9kYXRlID0gbmV3IERhdGUodCksIHR5cGVvZiB0ID09IFwic3RyaW5nXCIgJiYgaXNOYU4odGhpcy5fZGF0ZS5nZXRUaW1lKCkpICYmICh0aGlzLl9kYXRlID0gbmV3IERhdGUodC5yZXBsYWNlKC8tL2csIFwiL1wiKSkpKSA6IHRoaXMuX2RhdGUgPSAvKiBAX19QVVJFX18gKi8gbmV3IERhdGUoKTtcbiAgfVxuICB0b0RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGU7XG4gIH1cbiAgaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gIWlzTmFOKHRoaXMuX2RhdGUuZ2V0VGltZSgpKTtcbiAgfVxuICBkaWZmKHQsIHIgPSBcImRheVwiKSB7XG4gICAgY29uc3QgYSA9IG5ldyBkKHQpLnRvRGF0ZSgpLCBuID0gdGhpcy5fZGF0ZS5nZXRUaW1lKCkgLSBhLmdldFRpbWUoKTtcbiAgICBzd2l0Y2ggKHIpIHtcbiAgICAgIGNhc2UgXCJ5ZWFyXCI6XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRlLmdldEZ1bGxZZWFyKCkgLSBhLmdldEZ1bGxZZWFyKCk7XG4gICAgICBjYXNlIFwibW9udGhcIjpcbiAgICAgICAgcmV0dXJuICh0aGlzLl9kYXRlLmdldEZ1bGxZZWFyKCkgLSBhLmdldEZ1bGxZZWFyKCkpICogMTIgKyAodGhpcy5fZGF0ZS5nZXRNb250aCgpIC0gYS5nZXRNb250aCgpKTtcbiAgICAgIGNhc2UgXCJkYXlcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKG4gLyAoMWUzICogNjAgKiA2MCAqIDI0KSk7XG4gICAgfVxuICB9XG4gIHN0YXJ0T2YodCkge1xuICAgIGNvbnN0IHIgPSBuZXcgRGF0ZSh0aGlzLl9kYXRlKTtcbiAgICBzd2l0Y2ggKHQpIHtcbiAgICAgIGNhc2UgXCJ5ZWFyXCI6XG4gICAgICAgIHIuc2V0TW9udGgoMCksIHIuc2V0RGF0ZSgxKSwgci5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibW9udGhcIjpcbiAgICAgICAgci5zZXREYXRlKDEpLCByLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJkYXlcIjpcbiAgICAgICAgci5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBuZXcgZChyKTtcbiAgfVxuICBlbmRPZih0KSB7XG4gICAgY29uc3QgciA9IG5ldyBEYXRlKHRoaXMuX2RhdGUpO1xuICAgIHN3aXRjaCAodCkge1xuICAgICAgY2FzZSBcInllYXJcIjpcbiAgICAgICAgci5zZXRNb250aCgxMSksIHIuc2V0RGF0ZSgzMSksIHIuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibW9udGhcIjpcbiAgICAgICAgci5zZXREYXRlKG5ldyBEYXRlKHIuZ2V0RnVsbFllYXIoKSwgci5nZXRNb250aCgpICsgMSwgMCkuZ2V0RGF0ZSgpKSwgci5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJkYXlcIjpcbiAgICAgICAgci5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBkKHIpO1xuICB9XG4gIGFkZCh0LCByKSB7XG4gICAgY29uc3QgYSA9IG5ldyBEYXRlKHRoaXMuX2RhdGUpO1xuICAgIHN3aXRjaCAocikge1xuICAgICAgY2FzZSBcInllYXJcIjpcbiAgICAgICAgYS5zZXRGdWxsWWVhcihhLmdldEZ1bGxZZWFyKCkgKyB0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibW9udGhcIjpcbiAgICAgICAgYS5zZXRNb250aChhLmdldE1vbnRoKCkgKyB0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZGF5XCI6XG4gICAgICAgIGEuc2V0RGF0ZShhLmdldERhdGUoKSArIHQpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBkKGEpO1xuICB9XG4gIHN1YnRyYWN0KHQsIHIpIHtcbiAgICByZXR1cm4gdGhpcy5hZGQoLXQsIHIpO1xuICB9XG4gIGZvcm1hdCh0KSB7XG4gICAgY29uc3QgciA9IHtcbiAgICAgIFlZWVk6IHRoaXMuX2RhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgIE1NOiAodGhpcy5fZGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIiksXG4gICAgICBERDogdGhpcy5fZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIiksXG4gICAgICBISDogdGhpcy5fZGF0ZS5nZXRIb3VycygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpLFxuICAgICAgbW06IHRoaXMuX2RhdGUuZ2V0TWludXRlcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpLFxuICAgICAgc3M6IHRoaXMuX2RhdGUuZ2V0U2Vjb25kcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpLFxuICAgICAgZGRkZDogZC5kYXlzT2ZXZWVrW3RoaXMuX2RhdGUuZ2V0RGF5KCldXG4gICAgfTtcbiAgICByZXR1cm4gdC5yZXBsYWNlKC9ZWVlZfE1NfEREfEhIfG1tfHNzfGRkZGQvZywgKGEpID0+IHJbYV0udG9TdHJpbmcoKSk7XG4gIH1cbiAgeWVhcih0KSB7XG4gICAgaWYgKHQgPT09IHZvaWQgMCkgcmV0dXJuIHRoaXMuX2RhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCByID0gbmV3IERhdGUodGhpcy5fZGF0ZSk7XG4gICAgcmV0dXJuIHIuc2V0RnVsbFllYXIodCksIG5ldyBkKHIpO1xuICB9XG4gIG1vbnRoKHQpIHtcbiAgICBpZiAodCA9PT0gdm9pZCAwKSByZXR1cm4gdGhpcy5fZGF0ZS5nZXRNb250aCgpO1xuICAgIGNvbnN0IHIgPSBuZXcgRGF0ZSh0aGlzLl9kYXRlKTtcbiAgICByZXR1cm4gci5zZXRNb250aCh0KSwgbmV3IGQocik7XG4gIH1cbiAgZGF0ZSh0KSB7XG4gICAgaWYgKHQgPT09IHZvaWQgMCkgcmV0dXJuIHRoaXMuX2RhdGUuZ2V0RGF0ZSgpO1xuICAgIGNvbnN0IHIgPSBuZXcgRGF0ZSh0aGlzLl9kYXRlKTtcbiAgICByZXR1cm4gci5zZXREYXRlKHQpLCBuZXcgZChyKTtcbiAgfVxuICBkYXkodCkge1xuICAgIGlmICh0ID09PSB2b2lkIDApXG4gICAgICByZXR1cm4gdGhpcy5fZGF0ZS5nZXREYXkoKTtcbiAgICB7XG4gICAgICBjb25zdCByID0gdGhpcy5fZGF0ZS5nZXREYXkoKSwgYSA9IHQgLSByLCBuID0gbmV3IERhdGUodGhpcy5fZGF0ZSk7XG4gICAgICByZXR1cm4gbi5zZXREYXRlKHRoaXMuX2RhdGUuZ2V0RGF0ZSgpICsgYSksIG5ldyBkKG4pO1xuICAgIH1cbiAgfVxuICBpc0JlZm9yZSh0KSB7XG4gICAgY29uc3QgciA9IG5ldyBkKHQpLnRvRGF0ZSgpO1xuICAgIHJldHVybiB0aGlzLl9kYXRlLmdldFRpbWUoKSA8IHIuZ2V0VGltZSgpO1xuICB9XG4gIGlzQWZ0ZXIodCkge1xuICAgIGNvbnN0IHIgPSBuZXcgZCh0KS50b0RhdGUoKTtcbiAgICByZXR1cm4gdGhpcy5fZGF0ZS5nZXRUaW1lKCkgPiByLmdldFRpbWUoKTtcbiAgfVxuICBpc1NhbWUodCwgciA9IFwiZGF5XCIpIHtcbiAgICBjb25zdCBhID0gbmV3IGQodCkudG9EYXRlKCk7XG4gICAgc3dpdGNoIChyKSB7XG4gICAgICBjYXNlIFwieWVhclwiOlxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZS5nZXRGdWxsWWVhcigpID09PSBhLmdldEZ1bGxZZWFyKCk7XG4gICAgICBjYXNlIFwibW9udGhcIjpcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGUuZ2V0RnVsbFllYXIoKSA9PT0gYS5nZXRGdWxsWWVhcigpICYmIHRoaXMuX2RhdGUuZ2V0TW9udGgoKSA9PT0gYS5nZXRNb250aCgpO1xuICAgICAgY2FzZSBcImRheVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGUuZ2V0RnVsbFllYXIoKSA9PT0gYS5nZXRGdWxsWWVhcigpICYmIHRoaXMuX2RhdGUuZ2V0TW9udGgoKSA9PT0gYS5nZXRNb250aCgpICYmIHRoaXMuX2RhdGUuZ2V0RGF0ZSgpID09PSBhLmdldERhdGUoKTtcbiAgICB9XG4gIH1cbiAgaXNCZXR3ZWVuKHQsIHIsIGEpIHtcbiAgICBjb25zdCBuID0gbmV3IGQodCkuc3RhcnRPZihhKS50b0RhdGUoKSwgbCA9IG5ldyBkKHIpLmVuZE9mKGEpLnRvRGF0ZSgpLCBvID0gdGhpcy50b0RhdGUoKTtcbiAgICByZXR1cm4gbyA+PSBuICYmIG8gPD0gbDtcbiAgfVxufTtcbmMoZCwgXCJkYXlzT2ZXZWVrXCIsIFtcbiAgXCJTdW5kYXlcIixcbiAgXCJNb25kYXlcIixcbiAgXCJUdWVzZGF5XCIsXG4gIFwiV2VkbmVzZGF5XCIsXG4gIFwiVGh1cnNkYXlcIixcbiAgXCJGcmlkYXlcIixcbiAgXCJTYXR1cmRheVwiXG5dKTtcbmxldCBTID0gZDtcbmNvbnN0IGggPSAoZSkgPT4gbmV3IFMoZSksIHUgPSAoZSkgPT4gaChlKS5zdGFydE9mKFwiZGF5XCIpLCBZID0gKGUsIHQpID0+IHtcbiAgZSA9IHUoZSksIHQgPSB1KHQpO1xuICBjb25zdCByID0gdC5kaWZmKGUsIFwiZGF5XCIpO1xuICByZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogciArIDEgfSwgKGEsIG4pID0+IGUuYWRkKG4sIFwiZGF5XCIpKTtcbn0sIFcgPSB7XG4gIC8vIDE5OTkg5YWD5pemIDEg5aSp44CB5pil6IqC44CB5Yqz5Yqo6IqC44CB5Zu95bqG6IqC5pS+5YGHIDPlpKlcbiAgMTk5OToge1xuICAgIFwiTmV3IFllYXIncyBEYXks5YWD5pemXCI6IDEsXG4gICAgXCJTcHJpbmcgRmVzdGl2YWws5pil6IqCXCI6IDMsXG4gICAgXCJMYWJvdXIgRGF5LOWKs+WKqOiKglwiOiAzLFxuICAgIFwiTmF0aW9uYWwgRGF5LOWbveW6huiKglwiOiAzXG4gIH0sXG4gIC8vIDIwMDgg5Yqz5Yqo6IqC5pS55Li6IDEg5aSp77yM5aKe5Yqg5riF5piO44CB56uv5Y2I44CB5Lit56eL5ZCEIDEg5aSpXG4gIDIwMDg6IHtcbiAgICBcIlRvbWItc3dlZXBpbmcgRGF5LOa4heaYjlwiOiAxLFxuICAgIFwiTGFib3VyIERheSzlirPliqjoioJcIjogMSxcbiAgICBcIkRyYWdvbiBCb2F0IEZlc3RpdmFsLOerr+WNiFwiOiAxLFxuICAgIFwiTWlkLWF1dHVtbiBGZXN0aXZhbCzkuK3np4tcIjogMVxuICB9LFxuICAvLyAyMDE0IOaYpeiKguWJlOmZpOmZpOWkle+8jOaUueS4uuWIneS4gOOAgeS6jOOAgeS4ie+8jOS+neaXpyAzIOWkqVxuICAvLyAyMDE1IOWinuWKoCDkuK3lm73kurrmsJHmipfml6XmiJjkuonmmqjkuJbnlYzlj43ms5Xopb/mlq/miJjkuonog5zliKk3MOWRqOW5tOe6quW/teaXpSAxIOWkqVxuICAyMDE1OiB7XG4gICAgXCJBbnRpLUZhc2Npc3QgNzB0aCBEYXks5Lit5Zu95Lq65rCR5oqX5pel5oiY5LqJ5pqo5LiW55WM5Y+N5rOV6KW/5pav5oiY5LqJ6IOc5YipNzDlkajlubTnuqrlv7Xml6VcIjogMVxuICB9LFxuICAvLyAyMDI1IOaYpeiKguWSjOWKs+WKqOiKgiDlkITlop7liqAgMSDlpKlcbiAgMjAyNToge1xuICAgIFwiU3ByaW5nIEZlc3RpdmFsLOaYpeiKglwiOiA0LFxuICAgIFwiTGFib3VyIERheSzlirPliqjoioJcIjogMlxuICB9XG59O1xuY2xhc3MgeiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGModGhpcywgXCJkYXlEZXRhaWxzXCIsIHt9KTtcbiAgICBjKHRoaXMsIFwiaG9saWRheXNcIiwge30pO1xuICAgIGModGhpcywgXCJ3b3JrZGF5c1wiLCB7fSk7XG4gICAgYyh0aGlzLCBcImluTGlldURheXNcIiwge30pO1xuICB9XG4gIC8qKiB5ZWFyIGF0ICovXG4gIHkodCkge1xuICAgIHJldHVybiB0aGlzLmRheURldGFpbHMueWVhciA9IHQsIHRoaXM7XG4gIH1cbiAgLyoqIOafpeivouafkOW5tCDoioLlgYfml6XlpKnmlbAgKi9cbiAgZ2V0SG9saWRheURheXModCwgcikge1xuICAgIGxldCBhID0gMDtcbiAgICBmb3IgKGNvbnN0IFtuLCBsXSBvZiBPYmplY3QuZW50cmllcyhXKSkge1xuICAgICAgaWYgKHBhcnNlSW50KG4pID4gdCkgYnJlYWs7XG4gICAgICBsW3JdICE9PSB2b2lkIDAgJiYgKGEgPSBsW3JdKTtcbiAgICB9XG4gICAgcmV0dXJuIGE7XG4gIH1cbiAgbWFyayh0KSB7XG4gICAgcmV0dXJuIHRoaXMuZGF5RGV0YWlscy5ob2xpZGF5ID0gdCwgdGhpcztcbiAgfVxuICBzYXZlKHQsIHIsIGEpIHtcbiAgICBpZiAoIXRoaXMuZGF5RGV0YWlscy55ZWFyKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwic2hvdWxkIHNldCB5ZWFyIGJlZm9yZSBzYXZpbmcgaG9saWRheVwiKTtcbiAgICBpZiAoIXRoaXMuZGF5RGV0YWlscy5ob2xpZGF5KVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwic2hvdWxkIHNldCBob2xpZGF5IGJlZm9yZSBzYXZpbmcgaG9saWRheVwiKTtcbiAgICB0aGlzLmRheURldGFpbHMubW9udGggPSB0LCB0aGlzLmRheURldGFpbHMuZGF5ID0gciwgdGhpcy5kYXlEZXRhaWxzLmRheVR5cGUgPSBhO1xuICAgIGNvbnN0IG4gPSBoKGAke3RoaXMuZGF5RGV0YWlscy55ZWFyfS0ke3R9LSR7cn1gKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpLCBsID0gdGhpcy5nZXRIb2xpZGF5RGF5cyh0aGlzLmRheURldGFpbHMueWVhciwgdGhpcy5kYXlEZXRhaWxzLmhvbGlkYXkpLCBvID0gYCR7dGhpcy5kYXlEZXRhaWxzLmhvbGlkYXl9LCR7bH1gO1xuICAgIHJldHVybiBhID09PSAyID8gdGhpcy5ob2xpZGF5c1tuXSA9IG8gOiBhID09PSAxID8gdGhpcy53b3JrZGF5c1tuXSA9IG8gOiBhID09PSAzICYmICh0aGlzLmluTGlldURheXNbbl0gPSBvKSwgdGhpcztcbiAgfVxuICB0byh0LCByKSB7XG4gICAgaWYgKCF0aGlzLmRheURldGFpbHMuaG9saWRheSB8fCAhdGhpcy5kYXlEZXRhaWxzLnllYXIgfHwgIXRoaXMuZGF5RGV0YWlscy5tb250aCB8fCAhdGhpcy5kYXlEZXRhaWxzLmRheSlcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInNob3VsZCBzZXQgeWVhci9tb250aC9kYXkgYmVmb3JlIHNhdmluZyBob2xpZGF5IHJhbmdlXCIpO1xuICAgIGNvbnN0IGEgPSBoKFxuICAgICAgYCR7dGhpcy5kYXlEZXRhaWxzLnllYXJ9LSR7dGhpcy5kYXlEZXRhaWxzLm1vbnRofS0ke3RoaXMuZGF5RGV0YWlscy5kYXl9YFxuICAgICksIG4gPSBoKGAke3RoaXMuZGF5RGV0YWlscy55ZWFyfS0ke3R9LSR7cn1gKTtcbiAgICBpZiAobi5pc0JlZm9yZShhKSB8fCBuLmlzU2FtZShhKSlcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImVuZCBkYXRlIHNob3VsZCBiZSBhZnRlciBzdGFydCBkYXRlXCIpO1xuICAgIGNvbnN0IGwgPSB0aGlzLmdldEhvbGlkYXlEYXlzKHRoaXMuZGF5RGV0YWlscy55ZWFyLCB0aGlzLmRheURldGFpbHMuaG9saWRheSksIG8gPSBgJHt0aGlzLmRheURldGFpbHMuaG9saWRheX0sJHtsfWAsIGkgPSBuLmRpZmYoYSwgXCJkYXlcIik7XG4gICAgZm9yIChsZXQgcyA9IDE7IHMgPD0gaTsgcysrKSB7XG4gICAgICBjb25zdCBfID0gYS5hZGQocywgXCJkYXlcIikuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbiAgICAgIHRoaXMuZGF5RGV0YWlscy5kYXlUeXBlID09PSAyID8gdGhpcy5ob2xpZGF5c1tfXSA9IG8gOiB0aGlzLmRheURldGFpbHMuZGF5VHlwZSA9PT0gMSA/IHRoaXMud29ya2RheXNbX10gPSBvIDogdGhpcy5kYXlEZXRhaWxzLmRheVR5cGUgPT09IDMgJiYgKHRoaXMuaW5MaWV1RGF5c1tfXSA9IG8pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKiogd29yayBkYXkgKi9cbiAgdyh0LCByKSB7XG4gICAgcmV0dXJuIHRoaXMuc2F2ZShcbiAgICAgIHQsXG4gICAgICByLFxuICAgICAgMVxuICAgICAgLyogV29ya2RheSAqL1xuICAgICk7XG4gIH1cbiAgLyoqIHJlc3QgKi9cbiAgcih0LCByKSB7XG4gICAgcmV0dXJuIHRoaXMuc2F2ZShcbiAgICAgIHQsXG4gICAgICByLFxuICAgICAgMlxuICAgICAgLyogSG9saWRheSAqL1xuICAgICk7XG4gIH1cbiAgLyoqIGluLWxpZXUgKi9cbiAgaSh0LCByKSB7XG4gICAgcmV0dXJuIHRoaXMuc2F2ZShcbiAgICAgIHQsXG4gICAgICByLFxuICAgICAgM1xuICAgICAgLyogSW5MaWV1ICovXG4gICAgKTtcbiAgfVxuICAvKiogTmV3IFllYXIncyBEYXkg5YWD5pemICovXG4gIG55KCkge1xuICAgIHJldHVybiB0aGlzLm1hcmsoXG4gICAgICBcIk5ldyBZZWFyJ3MgRGF5LOWFg+aXplwiXG4gICAgICAvKiBOWSAqL1xuICAgICk7XG4gIH1cbiAgLyoqIFNwcmluZyBGZXN0aXZhbCDmmKXoioIgKi9cbiAgcygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXJrKFxuICAgICAgXCJTcHJpbmcgRmVzdGl2YWws5pil6IqCXCJcbiAgICAgIC8qIFMgKi9cbiAgICApO1xuICB9XG4gIC8qKiBUb21iLXN3ZWVwaW5nIERheSDmuIXmmI4gKi9cbiAgdCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXJrKFxuICAgICAgXCJUb21iLXN3ZWVwaW5nIERheSzmuIXmmI5cIlxuICAgICAgLyogVCAqL1xuICAgICk7XG4gIH1cbiAgLyoqIExhYm91ciBEYXkg5LqU5LiAICovXG4gIGwoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFyayhcbiAgICAgIFwiTGFib3VyIERheSzlirPliqjoioJcIlxuICAgICAgLyogTCAqL1xuICAgICk7XG4gIH1cbiAgLyoqIERyYWdvbiBCb2F0IEZlc3RpdmFsIOerr+WNiCAqL1xuICBkKCkge1xuICAgIHJldHVybiB0aGlzLm1hcmsoXG4gICAgICBcIkRyYWdvbiBCb2F0IEZlc3RpdmFsLOerr+WNiFwiXG4gICAgICAvKiBEICovXG4gICAgKTtcbiAgfVxuICAvKiogTmF0aW9uYWwgRGF5IOWbveW6huiKgiAqL1xuICBuKCkge1xuICAgIHJldHVybiB0aGlzLm1hcmsoXG4gICAgICBcIk5hdGlvbmFsIERheSzlm73luoboioJcIlxuICAgICAgLyogTiAqL1xuICAgICk7XG4gIH1cbiAgLyoqIE1pZC1hdXR1bW4gRmVzdGl2YWwg5Lit56eLICovXG4gIG0oKSB7XG4gICAgcmV0dXJuIHRoaXMubWFyayhcbiAgICAgIFwiTWlkLWF1dHVtbiBGZXN0aXZhbCzkuK3np4tcIlxuICAgICAgLyogTSAqL1xuICAgICk7XG4gIH1cbiAgLyoqIEFudGktRmFzY2lzdCA3MHRoIERheSDkuK3lm73kurrmsJHmipfml6XmiJjkuonmmqjkuJbnlYzlj43ms5Xopb/mlq/miJjkuonog5zliKk3MOWRqOW5tOe6quW/teaXpSAqL1xuICBhKCkge1xuICAgIHJldHVybiB0aGlzLm1hcmsoXG4gICAgICBcIkFudGktRmFzY2lzdCA3MHRoIERheSzkuK3lm73kurrmsJHmipfml6XmiJjkuonmmqjkuJbnlYzlj43ms5Xopb/mlq/miJjkuonog5zliKk3MOWRqOW5tOe6quW/teaXpVwiXG4gICAgICAvKiBBICovXG4gICAgKTtcbiAgfVxufVxuY29uc3QgViA9ICgpID0+IHtcbiAgY29uc3QgZSA9IG5ldyB6KCk7XG4gIHJldHVybiBlLnkoMjAyNSkubnkoKS5yKDEsIDEpLnMoKS5yKDEsIDI4KS50bygyLCA0KS53KDEsIDI2KS53KDIsIDgpLmkoMiwgMykuaSgyLCA0KS50KCkucig0LCA0KS50byg0LCA2KS5sKCkucig1LCAxKS50byg1LCA1KS53KDQsIDI3KS5pKDUsIDUpLmQoKS5yKDUsIDMxKS50byg2LCAyKS5uKCkucigxMCwgMSkudG8oMTAsIDgpLncoOSwgMjgpLncoMTAsIDExKS5pKDEwLCA3KS5pKDEwLCA4KS5tKCkucigxMCwgNiksIGUueSgyMDI0KS5ueSgpLnIoMSwgMSkucygpLnIoMiwgMTApLnRvKDIsIDE3KS53KDIsIDQpLncoMiwgMTgpLmkoMiwgMTUpLnRvKDIsIDE2KS50KCkucig0LCA0KS50byg0LCA2KS53KDQsIDcpLmkoNCwgNSkubCgpLnIoNSwgMSkudG8oNSwgNSkudyg0LCAyOCkudyg1LCAxMSkuaSg1LCAyKS50byg1LCAzKS5kKCkucig2LCAxMCkubSgpLnIoOSwgMTUpLnRvKDksIDE3KS53KDksIDE0KS5pKDksIDE2KS5uKCkucigxMCwgMSkudG8oMTAsIDcpLncoOSwgMjkpLncoMTAsIDEyKS5pKDEwLCA0KS5pKDEwLCA3KSwgZS55KDIwMjMpLm55KCkucigxLCAxKS50bygxLCAyKS5zKCkucigxLCAyMSkudG8oMSwgMjcpLncoMSwgMjgpLnRvKDEsIDI5KS5pKDEsIDI2KS50bygxLCAyNykudCgpLnIoNCwgNSkubCgpLnIoNCwgMjkpLnRvKDUsIDMpLncoNCwgMjMpLncoNSwgNikuaSg1LCAyKS50byg1LCAzKS5kKCkucig2LCAyMikudG8oNiwgMjQpLncoNiwgMjUpLmkoNiwgMjMpLm0oKS5yKDksIDI5KS5uKCkucig5LCAzMCkudG8oMTAsIDYpLncoMTAsIDcpLnRvKDEwLCA4KS5pKDEwLCA1KS50bygxMCwgNiksIGUueSgyMDIyKS5ueSgpLnIoMSwgMSkudG8oMSwgMykucygpLnIoMSwgMzEpLnRvKDIsIDYpLncoMSwgMjkpLncoMSwgMzApLmkoMiwgMykudG8oMiwgNCkudCgpLnIoNCwgMykudG8oNCwgNSkudyg0LCAyKS5pKDQsIDQpLmwoKS5yKDQsIDMwKS50byg1LCA0KS53KDQsIDI0KS53KDUsIDcpLmkoNSwgMykudG8oNSwgNCkuZCgpLnIoNiwgMykudG8oNiwgNSkubSgpLnIoOSwgMTApLnRvKDksIDEyKS5uKCkucigxMCwgMSkudG8oMTAsIDcpLncoMTAsIDgpLncoMTAsIDkpLmkoMTAsIDYpLnRvKDEwLCA3KS5ueSgpLnIoMTIsIDMxKSwgZS55KDIwMjEpLm55KCkucigxLCAxKS50bygxLCAzKS5zKCkucigyLCAxMSkudG8oMiwgMTcpLncoMiwgNykudygyLCAyMCkuaSgyLCAxNikudG8oMiwgMTcpLnQoKS5yKDQsIDMpLnRvKDQsIDUpLmwoKS5yKDUsIDEpLnRvKDUsIDUpLncoNCwgMjUpLncoNSwgOCkuaSg1LCA0KS50byg1LCA1KS5kKCkucig2LCAxMikudG8oNiwgMTQpLm0oKS5yKDksIDE5KS50byg5LCAyMSkudyg5LCAxOCkuaSg5LCAyMCkubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDksIDI2KS53KDEwLCA5KS5pKDEwLCA2KS50bygxMCwgNyksIGUueSgyMDIwKS5ueSgpLnIoMSwgMSkucygpLnIoMSwgMjQpLnRvKDIsIDIpLncoMSwgMTkpLmkoMSwgMjkpLnQoKS5yKDQsIDQpLnRvKDQsIDYpLmwoKS5yKDUsIDEpLnRvKDUsIDUpLncoNCwgMjYpLncoNSwgOSkuaSg1LCA0KS50byg1LCA1KS5kKCkucig2LCAyNSkudG8oNiwgMjcpLncoNiwgMjgpLmkoNiwgMjYpLm4oKS5yKDEwLCAxKS50bygxMCwgOCkudyg5LCAyNykudygxMCwgMTApLmkoMTAsIDcpLnRvKDEwLCA4KSwgZS55KDIwMTkpLm55KCkucigxLCAxKS5zKCkucigyLCA0KS50bygyLCAxMCkudygyLCAyKS50bygyLCAzKS5pKDIsIDQpLmkoMiwgOCkudCgpLnIoNCwgNSkudG8oNCwgNykubCgpLnIoNSwgMSkudG8oNSwgNCkudyg0LCAyOCkudyg1LCA1KS5pKDUsIDIpLmkoNSwgMykuZCgpLnIoNiwgNykudG8oNiwgOSkubSgpLnIoOSwgMTMpLnRvKDksIDE1KS5uKCkucigxMCwgMSkudG8oMTAsIDcpLncoOSwgMjkpLncoMTAsIDEyKS5pKDEwLCA0KS5pKDEwLCA3KSwgZS55KDIwMTgpLm55KCkucigxLCAxKS5zKCkucigyLCAxNSkudG8oMiwgMjEpLncoMiwgMTEpLncoMiwgMjQpLmkoMiwgMTkpLnRvKDIsIDIxKS50KCkucig0LCA1KS50byg0LCA3KS53KDQsIDgpLmkoNCwgNikubCgpLnIoNCwgMjkpLnRvKDUsIDEpLncoNCwgMjgpLmkoNCwgMzApLmQoKS5yKDYsIDE4KS5uKCkucigxMCwgMSkudG8oMTAsIDcpLncoOSwgMjkpLnRvKDksIDMwKS5pKDEwLCA0KS50bygxMCwgNSkubSgpLnIoOSwgMjQpLm55KCkucigxMiwgMzApLnRvKDEyLCAzMSkudygxMiwgMjkpLmkoMTIsIDMxKSwgZS55KDIwMTcpLm55KCkucigxLCAxKS50bygxLCAyKS5zKCkucigxLCAyNykudG8oMiwgMikudygxLCAyMikudygyLCA0KS5pKDIsIDEpLnRvKDIsIDIpLnQoKS5yKDQsIDIpLnRvKDQsIDQpLncoNCwgMSkuaSg0LCAzKS5sKCkucig1LCAxKS5kKCkucig1LCAyOCkudG8oNSwgMzApLncoNSwgMjcpLmkoNSwgMjkpLm4oKS5yKDEwLCAxKS50bygxMCwgOCkudyg5LCAzMCkuaSgxMCwgNikubSgpLnIoMTAsIDQpLCBlLnkoMjAxNikubnkoKS5yKDEsIDEpLnMoKS5yKDIsIDcpLnRvKDIsIDEzKS53KDIsIDYpLncoMiwgMTQpLmkoMiwgMTEpLnRvKDIsIDEyKS50KCkucig0LCA0KS5sKCkucig1LCAxKS50byg1LCAyKS5kKCkucig2LCA5KS50byg2LCAxMSkudyg2LCAxMikuaSg2LCAxMCkubSgpLnIoOSwgMTUpLnRvKDksIDE3KS53KDksIDE4KS5pKDksIDE2KS5uKCkucigxMCwgMSkudG8oMTAsIDcpLncoMTAsIDgpLnRvKDEwLCA5KS5pKDEwLCA2KS50bygxMCwgNyksIGUueSgyMDE1KS5ueSgpLnIoMSwgMSkudG8oMSwgMykudygxLCA0KS5pKDEsIDIpLnMoKS5yKDIsIDE4KS50bygyLCAyNCkudygyLCAxNSkudygyLCAyOCkuaSgyLCAyMykudG8oMiwgMjQpLnQoKS5yKDQsIDUpLnRvKDQsIDYpLmwoKS5yKDUsIDEpLmQoKS5yKDYsIDIwKS5yKDYsIDIyKS5tKCkucig5LCAyNykubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDEwLCAxMCkuaSgxMCwgNykuYSgpLnIoOSwgMykudG8oOSwgNCkudyg5LCA2KS5pKDksIDQpLCBlLnkoMjAxNCkubnkoKS5yKDEsIDEpLnMoKS5yKDEsIDMxKS50bygyLCA2KS53KDEsIDI2KS53KDIsIDgpLmkoMiwgNSkudG8oMiwgNikudCgpLnIoNCwgNSkudG8oNCwgNykubCgpLnIoNSwgMSkudG8oNSwgMykudyg1LCA0KS5pKDUsIDIpLmQoKS5yKDYsIDIpLm0oKS5yKDksIDgpLm4oKS5yKDEwLCAxKS50bygxMCwgNykudyg5LCAyOCkudygxMCwgMTEpLmkoMTAsIDYpLnRvKDEwLCA3KSwgZS55KDIwMTMpLm55KCkucigxLCAxKS50bygxLCAzKS53KDEsIDUpLnRvKDEsIDYpLmkoMSwgMikudG8oMSwgMykucygpLnIoMiwgOSkudG8oMiwgMTUpLncoMiwgMTYpLnRvKDIsIDE3KS5pKDIsIDE0KS50bygyLCAxNSkudCgpLnIoNCwgNCkudG8oNCwgNikudyg0LCA3KS5pKDQsIDUpLmwoKS5yKDQsIDI5KS50byg1LCAxKS53KDQsIDI3KS50byg0LCAyOCkuaSg0LCAyOSkudG8oNCwgMzApLmQoKS5yKDYsIDEwKS50byg2LCAxMikudyg2LCA4KS50byg2LCA5KS5pKDYsIDEwKS50byg2LCAxMSkubSgpLnIoOSwgMTkpLnRvKDksIDIxKS53KDksIDIyKS5pKDksIDIwKS5uKCkucigxMCwgMSkudG8oMTAsIDcpLncoOSwgMjkpLncoMTAsIDEyKS5pKDEwLCA0KS5pKDEwLCA3KSwgZS55KDIwMTIpLm55KCkucigxLCAxKS50bygxLCAzKS5pKDEsIDMpLnMoKS5yKDEsIDIyKS50bygxLCAyOCkudygxLCAyMSkudygxLCAyOSkuaSgxLCAyNikudG8oMSwgMjcpLnQoKS5yKDQsIDIpLnRvKDQsIDQpLncoMywgMzEpLncoNCwgMSkuaSg0LCAyKS50byg0LCAzKS5sKCkucig0LCAyOSkudG8oNSwgMSkudyg0LCAyOCkuaSg0LCAzMCkuZCgpLnIoNiwgMjIpLnIoNiwgMjQpLm0oKS5yKDksIDMwKS5uKCkucigxMCwgMSkudG8oMTAsIDcpLncoOSwgMjkpLmkoMTAsIDUpLCBlLnkoMjAxMSkubnkoKS5yKDEsIDEpLnRvKDEsIDMpLnMoKS5yKDIsIDIpLnRvKDIsIDgpLncoMSwgMzApLncoMiwgMTIpLmkoMiwgNykudG8oMiwgOCkudCgpLnIoNCwgMykudG8oNCwgNSkudyg0LCAyKS5pKDQsIDQpLmwoKS5yKDQsIDMwKS50byg1LCAyKS5kKCkucig2LCA0KS5yKDYsIDYpLm0oKS5yKDksIDEwKS50byg5LCAxMikubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDEwLCA4KS50bygxMCwgOSkuaSgxMCwgNikudG8oMTAsIDcpLm55KCkudygxMiwgMzEpLCBlLnkoMjAxMCkubnkoKS5yKDEsIDEpLnRvKDEsIDMpLnMoKS5yKDIsIDEzKS50bygyLCAxOSkudygyLCAyMCkudG8oMiwgMjEpLmkoMiwgMTgpLnRvKDIsIDE5KS50KCkucig0LCAzKS50byg0LCA1KS5sKCkucig1LCAxKS50byg1LCAzKS5kKCkucig2LCAxNCkudG8oNiwgMTYpLncoNiwgMTIpLnRvKDYsIDEzKS5pKDYsIDE0KS50byg2LCAxNSkubSgpLnIoOSwgMjIpLnRvKDksIDI0KS53KDksIDE5KS53KDksIDI1KS5pKDksIDIzKS50byg5LCAyNCkubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDksIDI2KS53KDEwLCA5KS5pKDEwLCA2KS50bygxMCwgNyksIGUueSgyMDA5KS5ueSgpLnIoMSwgMSkudG8oMSwgMykudygxLCA0KS5pKDEsIDIpLnMoKS5yKDEsIDI1KS50bygxLCAzMSkudygxLCAyNCkudygyLCAxKS5pKDEsIDI5KS50bygxLCAzMCkudCgpLnIoNCwgNCkudG8oNCwgNikubCgpLnIoNSwgMSkudG8oNSwgMykuZCgpLnIoNSwgMjgpLnRvKDUsIDMwKS53KDUsIDMxKS5pKDUsIDI5KS5uKCkucigxMCwgMSkudG8oMTAsIDgpLncoOSwgMjcpLncoMTAsIDEwKS5pKDEwLCA3KS50bygxMCwgOCkubSgpLnIoMTAsIDMpLCBlLnkoMjAwOCkubnkoKS5yKDEsIDEpLnMoKS5yKDIsIDYpLnRvKDIsIDEyKS53KDIsIDIpLnRvKDIsIDMpLmkoMiwgMTEpLnRvKDIsIDEyKS50KCkucig0LCA0KS50byg0LCA2KS5sKCkucig1LCAxKS50byg1LCAzKS53KDUsIDQpLmkoNSwgMikuZCgpLnIoNiwgNykudG8oNiwgOSkubSgpLnIoOSwgMTMpLnRvKDksIDE1KS5uKCkucig5LCAyOSkudG8oMTAsIDUpLncoOSwgMjcpLnRvKDksIDI4KS5pKDksIDI5KS50byg5LCAzMCksIGUueSgyMDA3KS5ueSgpLnIoMSwgMSkudG8oMSwgMykuaSgxLCAyKS50bygxLCAzKS5zKCkucigyLCAxOCkudG8oMiwgMjQpLncoMiwgMTcpLncoMiwgMjUpLmkoMiwgMjIpLnRvKDIsIDIzKS5sKCkucig1LCAxKS50byg1LCA3KS53KDQsIDI4KS50byg0LCAyOSkuaSg1LCA0KS5pKDUsIDcpLm4oKS5yKDEwLCAxKS50bygxMCwgNykudyg5LCAyOSkudG8oOSwgMzApLmkoMTAsIDQpLnRvKDEwLCA1KS5ueSgpLnIoMTIsIDMwKS50bygxMiwgMzEpLncoMTIsIDI5KS5pKDEyLCAzMSksIGUueSgyMDA2KS5ueSgpLnIoMSwgMSkudG8oMSwgMykucygpLnIoMSwgMjkpLnRvKDIsIDQpLncoMSwgMjgpLncoMiwgNSkuaSgyLCAyKS50bygyLCAzKS5sKCkucig1LCAxKS50byg1LCA3KS53KDQsIDI5KS50byg0LCAzMCkuaSg1LCA0KS50byg1LCA1KS5uKCkucigxMCwgMSkudG8oMTAsIDcpLncoOSwgMzApLncoMTAsIDgpLmkoMTAsIDUpLnRvKDEwLCA2KS5ueSgpLncoMTIsIDMwKS50bygxMiwgMzEpLCBlLnkoMjAwNSkubnkoKS5yKDEsIDEpLnRvKDEsIDMpLnMoKS5yKDIsIDkpLnRvKDIsIDE1KS53KDIsIDUpLnRvKDIsIDYpLmkoMiwgMTQpLnRvKDIsIDE1KS5sKCkucig1LCAxKS50byg1LCA3KS53KDQsIDMwKS53KDUsIDgpLmkoNSwgNSkudG8oNSwgNikubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDEwLCA4KS50bygxMCwgOSkuaSgxMCwgNikudG8oMTAsIDcpLCBlLnkoMjAwNCkubnkoKS5yKDEsIDEpLnMoKS5yKDEsIDIyKS50bygxLCAyOCkudygxLCAxNykudG8oMSwgMTgpLmkoMSwgMjcpLnRvKDEsIDI4KS5sKCkucig1LCAxKS50byg1LCA3KS53KDUsIDgpLnRvKDUsIDkpLmkoNSwgNikudG8oNSwgNykubigpLnIoMTAsIDEpLnRvKDEwLCA3KS53KDEwLCA5KS50bygxMCwgMTApLmkoMTAsIDYpLnRvKDEwLCA3KSwge1xuICAgIGhvbGlkYXlzOiBlLmhvbGlkYXlzLFxuICAgIHdvcmtkYXlzOiBlLndvcmtkYXlzLFxuICAgIGluTGlldURheXM6IGUuaW5MaWV1RGF5c1xuICB9O1xufSwgeyBob2xpZGF5czogTSwgd29ya2RheXM6IGssIGluTGlldURheXM6IFogfSA9IFYoKSwgdyA9ICguLi5lKSA9PiB7XG4gIGlmIChlLmxlbmd0aCAhPT0gMSlcbiAgICByZXR1cm4gZS5tYXAoKHIpID0+IHcocikpO1xuICBjb25zdCB0ID0gdShlWzBdKTtcbiAgaWYgKCF0LmlzVmFsaWQoKSlcbiAgICB0aHJvdyBuZXcgRXJyb3IoYHVuc3VwcG9ydGVkIHR5cGUgJHt0eXBlb2YgdH0sIGV4cGVjdGVkIHR5cGUgaXMgRGF0ZSBvciBEYXlqc2ApO1xuICByZXR1cm4gdDtcbn0sIE8gPSAoZSkgPT4gIWYoZSksIGYgPSAoZSkgPT4ge1xuICBjb25zdCB0ID0gdyhlKSwgciA9IHQuZGF5KCksIGEgPSB0LmZvcm1hdChcIllZWVktTU0tRERcIik7XG4gIHJldHVybiAhIShrW2FdIHx8IHIgPj0gMSAmJiByIDw9IDUgJiYgIU1bYV0pO1xufSwgRyA9IChlKSA9PiAoZSA9IHcoZSksICEhWltlLmZvcm1hdChcIllZWVktTU0tRERcIildKSwgSiA9IChlKSA9PiB7XG4gIGUgPSB3KGUpO1xuICBjb25zdCB0ID0gZS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xuICBpZiAoa1t0XSlcbiAgICByZXR1cm4ge1xuICAgICAgZGF0ZTogdCxcbiAgICAgIHdvcms6ICEwLFxuICAgICAgbmFtZToga1t0XVxuICAgIH07XG4gIGlmIChNW3RdKVxuICAgIHJldHVybiB7XG4gICAgICBkYXRlOiB0LFxuICAgICAgd29yazogITEsXG4gICAgICBuYW1lOiBNW3RdXG4gICAgfTtcbiAge1xuICAgIGNvbnN0IHIgPSBlLmRheSgpO1xuICAgIHJldHVybiB7XG4gICAgICBkYXRlOiB0LFxuICAgICAgd29yazogciAhPT0gMCAmJiByICE9PSA2LFxuICAgICAgbmFtZTogZS5mb3JtYXQoXCJkZGRkXCIpXG4gICAgfTtcbiAgfVxufSwgSyA9IChlLCB0LCByID0gITApID0+IChlID0gdyhlKSwgdCA9IHcodCksIHIgPyBZKGUsIHQpLmZpbHRlcihPKS5tYXAoKGEpID0+IGEuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSkgOiBZKGUsIHQpLmZpbHRlcigoYSkgPT4gTVthLmZvcm1hdChcIllZWVktTU0tRERcIildKS5tYXAoKGEpID0+IGEuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSkpLCBRID0gKGUsIHQsIHIgPSAhMCkgPT4gKGUgPSB3KGUpLCB0ID0gdyh0KSwgciA/IFkoZSwgdCkuZmlsdGVyKGYpLm1hcCgoYSkgPT4gYS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpKSA6IFkoZSwgdCkuZmlsdGVyKChhKSA9PiBmKGEpICYmIGEuZGF5KCkgPj0gMSAmJiBhLmRheSgpIDw9IDUpLm1hcCgoYSkgPT4gYS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpKSksIFggPSAoZSA9IDAsIHQgPSBoKCkpID0+IHtcbiAgaWYgKHQgPSB1KHQpLCBlID09PSAwKSB7XG4gICAgaWYgKGYodCkpXG4gICAgICByZXR1cm4gdC5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xuICAgIGUgPSAxO1xuICB9XG4gIGNvbnN0IHIgPSBlID4gMCA/IDEgOiAtMTtcbiAgbGV0IGEgPSBNYXRoLmFicyhlKTtcbiAgZm9yICg7IGEgPiAwOyApXG4gICAgdCA9IHQuYWRkKHIsIFwiZGF5XCIpLCBmKHQpICYmIGEtLTtcbiAgcmV0dXJuIHQuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbn0sIHR0ID0gLyogQF9fUFVSRV9fICovIE9iamVjdC5mcmVlemUoLyogQF9fUFVSRV9fICovIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgZmluZFdvcmtkYXk6IFgsXG4gIGdldERheURldGFpbDogSixcbiAgZ2V0SG9saWRheXNJblJhbmdlOiBLLFxuICBnZXRXb3JrZGF5c0luUmFuZ2U6IFEsXG4gIGlzSG9saWRheTogTyxcbiAgaXNJbkxpZXU6IEcsXG4gIGlzV29ya2RheTogZlxufSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiBcIk1vZHVsZVwiIH0pKSwgZXQgPSB7XG4gIHRoZV9iZWdpbm5pbmdfb2Zfc3ByaW5nOiBbNC42Mjk1LCAzLjg3XSxcbiAgcmFpbl93YXRlcjogWzE5LjQ1OTksIDE4LjczXSxcbiAgdGhlX3dha2luZ19vZl9pbnNlY3RzOiBbNi4zOTI2LCA1LjYzXSxcbiAgdGhlX3NwcmluZ19lcXVpbm94OiBbMjEuNDE1NSwgMjAuNjQ2XSxcbiAgcHVyZV9icmlnaHRuZXNzOiBbNS41OSwgNC44MV0sXG4gIGdyYWluX3JhaW46IFsyMC44ODgsIDIwLjFdLFxuICB0aGVfYmVnaW5uaW5nX29mX3N1bW1lcjogWzYuMzE4LCA1LjUyXSxcbiAgbGVzc2VyX2Z1bGxuZXNzX29mX2dyYWluOiBbMjEuODYsIDIxLjA0XSxcbiAgZ3JhaW5faW5fYmVhcmQ6IFs2LjUsIDUuNjc4XSxcbiAgdGhlX3N1bW1lcl9zb2xzdGljZTogWzIyLjIsIDIxLjM3XSxcbiAgbGVzc2VyX2hlYXQ6IFs3LjkyOCwgNy4xMDhdLFxuICBncmVhdGVyX2hlYXQ6IFsyMy42NSwgMjIuODNdLFxuICB0aGVfYmVnaW5uaW5nX29mX2F1dHVtbjogWzI4LjM1LCA3LjVdLFxuICB0aGVfZW5kX29mX2hlYXQ6IFsyMy45NSwgMjMuMTNdLFxuICB3aGl0ZV9kZXc6IFs4LjQ0LCA3LjY0Nl0sXG4gIHRoZV9hdXR1bW5fZXF1aW5veDogWzIzLjgyMiwgMjMuMDQyXSxcbiAgY29kZV9kZXc6IFs5LjA5OCwgOC4zMThdLFxuICBmcm9zdF9kZXNjZW50OiBbMjQuMjE4LCAyMy40MzhdLFxuICB0aGVfYmVnaW5uaW5nX29mX3dpbnRlcjogWzguMjE4LCA3LjQzOF0sXG4gIGxlc3Nlcl9zbm93OiBbMjMuMDgsIDIyLjM2XSxcbiAgZ3JlYXRlcl9zbm93OiBbNy45LCA3LjE4XSxcbiAgdGhlX3dpbnRlcl9zb2xzdGljZTogWzIyLjYsIDIxLjk0XSxcbiAgbGVzc2VyX2NvbGQ6IFs2LjExLCA1LjQwNTVdLFxuICBncmVhdGVyX2NvbGQ6IFsyMC44NCwgMjAuMTJdXG59LCBUID0ge1xuICAxOiBbXCJsZXNzZXJfY29sZFwiLCBcImdyZWF0ZXJfY29sZFwiXSxcbiAgMjogW1widGhlX2JlZ2lubmluZ19vZl9zcHJpbmdcIiwgXCJyYWluX3dhdGVyXCJdLFxuICAzOiBbXCJ0aGVfd2FraW5nX29mX2luc2VjdHNcIiwgXCJ0aGVfc3ByaW5nX2VxdWlub3hcIl0sXG4gIDQ6IFtcInB1cmVfYnJpZ2h0bmVzc1wiLCBcImdyYWluX3JhaW5cIl0sXG4gIDU6IFtcInRoZV9iZWdpbm5pbmdfb2Zfc3VtbWVyXCIsIFwibGVzc2VyX2Z1bGxuZXNzX29mX2dyYWluXCJdLFxuICA2OiBbXCJncmFpbl9pbl9iZWFyZFwiLCBcInRoZV9zdW1tZXJfc29sc3RpY2VcIl0sXG4gIDc6IFtcImxlc3Nlcl9oZWF0XCIsIFwiZ3JlYXRlcl9oZWF0XCJdLFxuICA4OiBbXCJ0aGVfYmVnaW5uaW5nX29mX2F1dHVtblwiLCBcInRoZV9lbmRfb2ZfaGVhdFwiXSxcbiAgOTogW1wid2hpdGVfZGV3XCIsIFwidGhlX2F1dHVtbl9lcXVpbm94XCJdLFxuICAxMDogW1wiY29kZV9kZXdcIiwgXCJmcm9zdF9kZXNjZW50XCJdLFxuICAxMTogW1widGhlX2JlZ2lubmluZ19vZl93aW50ZXJcIiwgXCJsZXNzZXJfc25vd1wiXSxcbiAgMTI6IFtcImdyZWF0ZXJfc25vd1wiLCBcInRoZV93aW50ZXJfc29sc3RpY2VcIl1cbn0sIHJ0ID0ge1xuICBcIjIwMjZfcmFpbl93YXRlclwiOiAtMSxcbiAgXCIyMDg0X3RoZV9zcHJpbmdfZXF1aW5veFwiOiAxLFxuICBcIjE5MTFfdGhlX2JlZ2lubmluZ19vZl9zdW1tZXJcIjogMSxcbiAgXCIyMDA4X2xlc3Nlcl9mdWxsbmVzc19vZl9ncmFpblwiOiAxLFxuICBcIjE5MDJfZ3JhaW5faW5fYmVhcmRcIjogMSxcbiAgXCIxOTI4X3RoZV9zdW1tZXJfc29sc3RpY2VcIjogMSxcbiAgXCIxOTI1X2xlc3Nlcl9oZWF0XCI6IDEsXG4gIFwiMjAxNl9sZXNzZXJfaGVhdFwiOiAxLFxuICBcIjE5MjJfZ3JlYXRlcl9oZWF0XCI6IDEsXG4gIFwiMjAwMl90aGVfYmVnaW5uaW5nX29mX2F1dHVtblwiOiAxLFxuICBcIjE5Mjdfd2hpdGVfZGV3XCI6IDEsXG4gIFwiMTk0Ml90aGVfYXV0dW1uX2VxdWlub3hcIjogMSxcbiAgXCIyMDg5X2Zyb3N0X2Rlc2NlbnRcIjogMSxcbiAgXCIyMDg5X3RoZV9iZWdpbm5pbmdfb2Zfd2ludGVyXCI6IDEsXG4gIFwiMTk3OF9sZXNzZXJfc25vd1wiOiAxLFxuICBcIjE5NTRfZ3JlYXRlcl9zbm93XCI6IDEsXG4gIFwiMTkxOF90aGVfd2ludGVyX3NvbHN0aWNlXCI6IC0xLFxuICBcIjIwMjFfdGhlX3dpbnRlcl9zb2xzdGljZVwiOiAtMSxcbiAgXCIxOTgyX2xlc3Nlcl9jb2xkXCI6IDEsXG4gIFwiMjAxOV9sZXNzZXJfY29sZFwiOiAtMSxcbiAgXCIyMDAwX2dyZWF0ZXJfY29sZFwiOiAxLFxuICBcIjIwODJfZ3JlYXRlcl9jb2xkXCI6IDFcbn0sIEUgPSB7XG4gIGxlc3Nlcl9jb2xkOiBcIuWwj+WvklwiLFxuICBncmVhdGVyX2NvbGQ6IFwi5aSn5a+SXCIsXG4gIHRoZV9iZWdpbm5pbmdfb2Zfc3ByaW5nOiBcIueri+aYpVwiLFxuICByYWluX3dhdGVyOiBcIumbqOawtFwiLFxuICB0aGVfd2FraW5nX29mX2luc2VjdHM6IFwi5oOK6JuwXCIsXG4gIHRoZV9zcHJpbmdfZXF1aW5veDogXCLmmKXliIZcIixcbiAgcHVyZV9icmlnaHRuZXNzOiBcIua4heaYjlwiLFxuICBncmFpbl9yYWluOiBcIuiwt+mbqFwiLFxuICB0aGVfYmVnaW5uaW5nX29mX3N1bW1lcjogXCLnq4vlpI9cIixcbiAgbGVzc2VyX2Z1bGxuZXNzX29mX2dyYWluOiBcIuWwj+a7oVwiLFxuICBncmFpbl9pbl9iZWFyZDogXCLoipLnp41cIixcbiAgdGhlX3N1bW1lcl9zb2xzdGljZTogXCLlpI/oh7NcIixcbiAgbGVzc2VyX2hlYXQ6IFwi5bCP5pqRXCIsXG4gIGdyZWF0ZXJfaGVhdDogXCLlpKfmmpFcIixcbiAgdGhlX2JlZ2lubmluZ19vZl9hdXR1bW46IFwi56uL56eLXCIsXG4gIHRoZV9lbmRfb2ZfaGVhdDogXCLlpITmmpFcIixcbiAgd2hpdGVfZGV3OiBcIueZvemcslwiLFxuICB0aGVfYXV0dW1uX2VxdWlub3g6IFwi56eL5YiGXCIsXG4gIGNvZGVfZGV3OiBcIuWvkumcslwiLFxuICBmcm9zdF9kZXNjZW50OiBcIumcnOmZjVwiLFxuICB0aGVfYmVnaW5uaW5nX29mX3dpbnRlcjogXCLnq4vlhqxcIixcbiAgbGVzc2VyX3Nub3c6IFwi5bCP6ZuqXCIsXG4gIGdyZWF0ZXJfc25vdzogXCLlpKfpm6pcIixcbiAgdGhlX3dpbnRlcl9zb2xzdGljZTogXCLlhqzoh7NcIlxufSwgTCA9IChlLCB0LCByKSA9PiB7XG4gIGNvbnN0IGEgPSBlID49IDJlMyA/IDIxIDogMjAsIG4gPSBlICUgMTAwLCBsID0gMC4yNDIyLCBvID0gZXRbcl1bYSA9PT0gMjEgPyAxIDogMF07XG4gIGxldCBpID0gTWF0aC5mbG9vcihuIC8gNCk7XG4gIFtcbiAgICBcImxlc3Nlcl9jb2xkXCIsXG4gICAgXCJncmVhdGVyX2NvbGRcIixcbiAgICBcInRoZV9iZWdpbm5pbmdfb2Zfc3ByaW5nXCIsXG4gICAgXCJyYWluX3dhdGVyXCJcbiAgXS5pbmNsdWRlcyhyKSAmJiAoaSA9IE1hdGguZmxvb3IoKG4gLSAxKSAvIDQpKTtcbiAgbGV0IHMgPSBNYXRoLmZsb29yKG4gKiBsICsgbykgLSBpO1xuICBjb25zdCBfID0gcnRbYCR7ZX1fJHtyfWBdO1xuICByZXR1cm4gXyAmJiAocyArPSBfKSwgaChgJHtlfS0ke3R9LSR7c31gKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xufSwgYXQgPSAoZSwgdCkgPT4ge1xuICBjb25zdCByID0gW107XG4gIGxldCBhID0gdShlKTtcbiAgY29uc3QgbiA9IHUodCB8fCBlKTtcbiAgZm9yICg7IGEuaXNCZWZvcmUobikgfHwgYS5pc1NhbWUobik7ICkge1xuICAgIGNvbnN0IGwgPSBhLnllYXIoKSwgbyA9IGEubW9udGgoKSArIDE7XG4gICAgVFtvXS5mb3JFYWNoKChpKSA9PiB7XG4gICAgICBjb25zdCBzID0gaChMKGwsIG8sIGkpKTtcbiAgICAgIChzICE9IG51bGwgJiYgcy5pc0JlZm9yZShuKSB8fCBzICE9IG51bGwgJiYgcy5pc1NhbWUobikpICYmIChzICE9IG51bGwgJiYgcy5pc0FmdGVyKGEpIHx8IHMgIT0gbnVsbCAmJiBzLmlzU2FtZShhKSkgJiYgci5wdXNoKHtcbiAgICAgICAgZGF0ZTogcy5mb3JtYXQoXCJZWVlZLU1NLUREXCIpLFxuICAgICAgICB0ZXJtOiBpLFxuICAgICAgICBuYW1lOiBFW2ldLFxuICAgICAgICBpbmRleDogMVxuICAgICAgfSk7XG4gICAgfSksIG8gPT09IDEyID8gYSA9IGEuYWRkKDEsIFwieWVhclwiKS5zdGFydE9mKFwieWVhclwiKSA6IGEgPSBhLmFkZCgxLCBcIm1vbnRoXCIpLnN0YXJ0T2YoXCJtb250aFwiKTtcbiAgfVxuICByZXR1cm4gcjtcbn0sICQgPSAoZSwgdCkgPT4ge1xuICBsZXQgciA9IHUoZSkuc3VidHJhY3QoMSwgXCJtb250aFwiKTtcbiAgY29uc3QgYSA9IHUodCB8fCBlKS5hZGQoMSwgXCJtb250aFwiKSwgbiA9IFtdO1xuICBmb3IgKDsgci5pc0JlZm9yZShhKSB8fCByLmlzU2FtZShhKTsgKSB7XG4gICAgY29uc3QgbyA9IHIueWVhcigpLCBpID0gci5tb250aCgpICsgMTtcbiAgICBUW2ldLmZvckVhY2goKHMpID0+IHtcbiAgICAgIGNvbnN0IF8gPSBoKEwobywgaSwgcykpO1xuICAgICAgbi5wdXNoKHsgdGVybTogcywgZGF0ZTogXyB9KTtcbiAgICB9KSwgci5tb250aCgpID09PSAxMSA/IHIgPSByLmFkZCgxLCBcInllYXJcIikuc3RhcnRPZihcInllYXJcIikgOiByID0gci5hZGQoMSwgXCJtb250aFwiKS5zdGFydE9mKFwibW9udGhcIik7XG4gIH1cbiAgY29uc3QgbCA9IFtdO1xuICByZXR1cm4gbi5mb3JFYWNoKChvLCBpKSA9PiB7XG4gICAgZm9yIChsZXQgcyA9IG8uZGF0ZTsgbltpICsgMV0gJiYgcy5pc0JlZm9yZShuW2kgKyAxXS5kYXRlKTsgcyA9IHMuYWRkKDEsIFwiZGF5XCIpKVxuICAgICAgbC5wdXNoKHsgZGF5OiBzLCB0ZXJtOiBvLnRlcm0sIG5hbWU6IEVbby50ZXJtXSwgaW5kZXg6IHMuZGlmZihvLmRhdGUsIFwiZGF5XCIpICsgMSB9KTtcbiAgfSksIHQgfHwgKHQgPSBlKSwgbC5maWx0ZXIoKG8pID0+IG8uZGF5LmlzQmV0d2VlbihlLCB0LCBcImRheVwiKSkubWFwKChvKSA9PiAoe1xuICAgIGRhdGU6IG8uZGF5LmZvcm1hdChcIllZWVktTU0tRERcIiksXG4gICAgdGVybTogby50ZXJtLFxuICAgIG5hbWU6IG8ubmFtZSxcbiAgICBpbmRleDogby5pbmRleFxuICB9KSk7XG59LCBvdCA9IC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuZnJlZXplKC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuZGVmaW5lUHJvcGVydHkoe1xuICBfX3Byb3RvX186IG51bGwsXG4gIGdldFNvbGFyVGVybURhdGU6IEwsXG4gIGdldFNvbGFyVGVybXM6IGF0LFxuICBnZXRTb2xhclRlcm1zSW5SYW5nZTogJFxufSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiBcIk1vZHVsZVwiIH0pKSwgZyA9IFtcbiAgMTk0MTYsXG4gIDE5MTY4LFxuICA0MjM1MixcbiAgMjE3MTcsXG4gIDUzODU2LFxuICA1NTYzMixcbiAgOTE0NzYsXG4gIDIyMTc2LFxuICAzOTYzMixcbiAgMjE5NzAsXG4gIC8vMTkwMC0xOTA5XG4gIDE5MTY4LFxuICA0MjQyMixcbiAgNDIxOTIsXG4gIDUzODQwLFxuICAxMTkzODEsXG4gIDQ2NDAwLFxuICA1NDk0NCxcbiAgNDQ0NTAsXG4gIDM4MzIwLFxuICA4NDM0MyxcbiAgLy8xOTEwLTE5MTlcbiAgMTg4MDAsXG4gIDQyMTYwLFxuICA0NjI2MSxcbiAgMjcyMTYsXG4gIDI3OTY4LFxuICAxMDkzOTYsXG4gIDExMTA0LFxuICAzODI1NixcbiAgMjEyMzQsXG4gIDE4ODAwLFxuICAvLzE5MjAtMTkyOVxuICAyNTk1OCxcbiAgNTQ0MzIsXG4gIDU5OTg0LFxuICAyODMwOSxcbiAgMjMyNDgsXG4gIDExMTA0LFxuICAxMDAwNjcsXG4gIDM3NjAwLFxuICAxMTY5NTEsXG4gIDUxNTM2LFxuICAvLzE5MzAtMTkzOVxuICA1NDQzMixcbiAgMTIwOTk4LFxuICA0NjQxNixcbiAgMjIxNzYsXG4gIDEwNzk1NixcbiAgOTY4MCxcbiAgMzc1ODQsXG4gIDUzOTM4LFxuICA0MzM0NCxcbiAgNDY0MjMsXG4gIC8vMTk0MC0xOTQ5XG4gIDI3ODA4LFxuICA0NjQxNixcbiAgODY4NjksXG4gIDE5ODcyLFxuICA0MjQxNixcbiAgODMzMTUsXG4gIDIxMTY4LFxuICA0MzQzMixcbiAgNTk3MjgsXG4gIDI3Mjk2LFxuICAvLzE5NTAtMTk1OVxuICA0NDcxMCxcbiAgNDM4NTYsXG4gIDE5Mjk2LFxuICA0Mzc0OCxcbiAgNDIzNTIsXG4gIDIxMDg4LFxuICA2MjA1MSxcbiAgNTU2MzIsXG4gIDIzMzgzLFxuICAyMjE3NixcbiAgLy8xOTYwLTE5NjlcbiAgMzg2MDgsXG4gIDE5OTI1LFxuICAxOTE1MixcbiAgNDIxOTIsXG4gIDU0NDg0LFxuICA1Mzg0MCxcbiAgNTQ2MTYsXG4gIDQ2NDAwLFxuICA0Njc1MixcbiAgMTAzODQ2LFxuICAvLzE5NzAtMTk3OVxuICAzODMyMCxcbiAgMTg4NjQsXG4gIDQzMzgwLFxuICA0MjE2MCxcbiAgNDU2OTAsXG4gIDI3MjE2LFxuICAyNzk2OCxcbiAgNDQ4NzAsXG4gIDQzODcyLFxuICAzODI1NixcbiAgLy8xOTgwLTE5ODlcbiAgMTkxODksXG4gIDE4ODAwLFxuICAyNTc3NixcbiAgMjk4NTksXG4gIDU5OTg0LFxuICAyNzQ4MCxcbiAgMjE5NTIsXG4gIDQzODcyLFxuICAzODYxMyxcbiAgMzc2MDAsXG4gIC8vMTk5MC0xOTk5XG4gIDUxNTUyLFxuICA1NTYzNixcbiAgNTQ0MzIsXG4gIDU1ODg4LFxuICAzMDAzNCxcbiAgMjIxNzYsXG4gIDQzOTU5LFxuICA5NjgwLFxuICAzNzU4NCxcbiAgNTE4OTMsXG4gIC8vMjAwMC0yMDA5XG4gIDQzMzQ0LFxuICA0NjI0MCxcbiAgNDc3ODAsXG4gIDQ0MzY4LFxuICAyMTk3NyxcbiAgMTkzNjAsXG4gIDQyNDE2LFxuICA4NjM5MCxcbiAgMjExNjgsXG4gIDQzMzEyLFxuICAvLzIwMTAtMjAxOVxuICAzMTA2MCxcbiAgMjcyOTYsXG4gIDQ0MzY4LFxuICAyMzM3OCxcbiAgMTkyOTYsXG4gIDQyNzI2LFxuICA0MjIwOCxcbiAgNTM4NTYsXG4gIDYwMDA1LFxuICA1NDU3NixcbiAgLy8yMDIwLTIwMjlcbiAgMjMyMDAsXG4gIDMwMzcxLFxuICAzODYwOCxcbiAgMTkxOTUsXG4gIDE5MTUyLFxuICA0MjE5MixcbiAgMTE4OTY2LFxuICA1Mzg0MCxcbiAgNTQ1NjAsXG4gIDU2NjQ1LFxuICAvLzIwMzAtMjAzOVxuICA0NjQ5NixcbiAgMjIyMjQsXG4gIDIxOTM4LFxuICAxODg2NCxcbiAgNDIzNTksXG4gIDQyMTYwLFxuICA0MzYwMCxcbiAgMTExMTg5LFxuICAyNzkzNixcbiAgNDQ0NDgsXG4gIC8vMjA0MC0yMDQ5XG4gIDg0ODM1LFxuICAzNzc0NCxcbiAgMTg5MzYsXG4gIDE4ODAwLFxuICAyNTc3NixcbiAgOTIzMjYsXG4gIDU5OTg0LFxuICAyNzQyNCxcbiAgMTA4MjI4LFxuICA0Mzc0NCxcbiAgLy8yMDUwLTIwNTlcbiAgNDE2OTYsXG4gIDUzOTg3LFxuICA1MTU1MixcbiAgNTQ2MTUsXG4gIDU0NDMyLFxuICA1NTg4OCxcbiAgMjM4OTMsXG4gIDIyMTc2LFxuICA0MjcwNCxcbiAgMjE5NzIsXG4gIC8vMjA2MC0yMDY5XG4gIDIxMjAwLFxuICA0MzQ0OCxcbiAgNDMzNDQsXG4gIDQ2MjQwLFxuICA0Njc1OCxcbiAgNDQzNjgsXG4gIDIxOTIwLFxuICA0Mzk0MCxcbiAgNDI0MTYsXG4gIDIxMTY4LFxuICAvLzIwNzAtMjA3OVxuICA0NTY4MyxcbiAgMjY5MjgsXG4gIDI5NDk1LFxuICAyNzI5NixcbiAgNDQzNjgsXG4gIDg0ODIxLFxuICAxOTI5NixcbiAgNDIzNTIsXG4gIDIxNzMyLFxuICA1MzYwMCxcbiAgLy8yMDgwLTIwODlcbiAgNTk3NTIsXG4gIDU0NTYwLFxuICA1NTk2OCxcbiAgOTI4MzgsXG4gIDIyMjI0LFxuICAxOTE2OCxcbiAgNDM0NzYsXG4gIDQxNjgwLFxuICA1MzU4NCxcbiAgNjIwMzQsXG4gIC8vMjA5MC0yMDk5XG4gIDU0NTYwXG4gIC8vMjEwMFxuXSwgRiA9IFtcIumbtlwiLCBcIuS4gFwiLCBcIuS6jFwiLCBcIuS4iVwiLCBcIuWbm1wiLCBcIuS6lFwiLCBcIuWFrVwiLCBcIuS4g1wiLCBcIuWFq1wiLCBcIuS5nVwiXSwgQSA9IFtcIuato1wiLCBcIuS6jFwiLCBcIuS4iVwiLCBcIuWbm1wiLCBcIuS6lFwiLCBcIuWFrVwiLCBcIuS4g1wiLCBcIuWFq1wiLCBcIuS5nVwiLCBcIuWNgVwiLCBcIuWGrFwiLCBcIuiFilwiXSwgSCA9IFtcIueUslwiLCBcIuS5mVwiLCBcIuS4mVwiLCBcIuS4gVwiLCBcIuaIilwiLCBcIuW3sVwiLCBcIuW6mlwiLCBcIui+m1wiLCBcIuWjrFwiLCBcIueZuFwiXSwgQiA9IFtcIuWtkFwiLCBcIuS4kVwiLCBcIuWvhVwiLCBcIuWNr1wiLCBcIui+sFwiLCBcIuW3s1wiLCBcIuWNiFwiLCBcIuacqlwiLCBcIueUs1wiLCBcIumFiVwiLCBcIuaIjFwiLCBcIuS6pVwiXSwgbnQgPSBbXCLpvKBcIiwgXCLniZtcIiwgXCLomY5cIiwgXCLlhZRcIiwgXCLpvplcIiwgXCLom4dcIiwgXCLpqaxcIiwgXCLnvopcIiwgXCLnjLRcIiwgXCLpuKFcIiwgXCLni5dcIiwgXCLnjKpcIl0sIHggPSAoZSkgPT4ge1xuICBsZXQgdCA9IDM0ODtcbiAgZm9yIChsZXQgciA9IDMyNzY4OyByID4gODsgciA+Pj0gMSlcbiAgICB0ICs9IGdbZSAtIDE5MDBdICYgciA/IDEgOiAwO1xuICByZXR1cm4gdCArIE4oZSk7XG59LCBwID0gKGUpID0+IGdbZSAtIDE5MDBdICYgMTUsIE4gPSAoZSkgPT4gcChlKSA/IGdbZSAtIDE5MDBdICYgNjU1MzYgPyAzMCA6IDI5IDogMCwgYiA9IChlKSA9PiBIW2UgJSAxMF0gKyBCW2UgJSAxMl0sIEQgPSAoZSwgdCkgPT4gZ1tlIC0gMTkwMF0gJiA2NTUzNiA+PiB0ID8gMzAgOiAyOSwgc3QgPSAoZSkgPT4gbnRbKGUgLSA0KSAlIDEyXSwgaXQgPSAoZSkgPT4ge1xuICBjb25zdCB0ID0gW1wi5YidXCIsIFwi5Y2BXCIsIFwi5bu/XCIsIFwi5LiJ5Y2BXCJdO1xuICBpZiAoZSA9PT0gMTApIHJldHVybiBcIuWIneWNgVwiO1xuICBpZiAoZSA9PT0gMjApIHJldHVybiBcIuS6jOWNgVwiO1xuICBpZiAoZSA9PT0gMzApIHJldHVybiBcIuS4ieWNgVwiO1xuICBjb25zdCByID0gTWF0aC5mbG9vcihlIC8gMTApLCBhID0gZSAlIDEwO1xuICByZXR1cm4gdFtyXSArIChhID8gRlthXSA6IFwiXCIpO1xufSwgbHQgPSAoZSkgPT4gYCR7SFsoZSAtIDQpICUgMTBdfSR7QlsoZSAtIDQpICUgMTJdfeW5tGAsIFIgPSAoZSwgdCkgPT4ge1xuICBjb25zdCByID0gW107XG4gIGZvciAobGV0IGEgPSBlOyBhIDw9IHQ7IGErKylcbiAgICByLnB1c2goe1xuICAgICAgeWVhcjogYSxcbiAgICAgIGx1bmFyWWVhcjogbHQoYSksXG4gICAgICBsdW5hclllYXJDTjogYS50b1N0cmluZygpLnNwbGl0KFwiXCIpLm1hcCgobikgPT4gRltOdW1iZXIobildKS5qb2luKFwiXCIpXG4gICAgfSk7XG4gIHJldHVybiByO1xufSwgQyA9IChlKSA9PiB7XG4gIGNvbnN0IHQgPSBwKGUpO1xuICByZXR1cm4ge1xuICAgIHllYXI6IGUsXG4gICAgbGVhcE1vbnRoOiB0IHx8IHZvaWQgMCxcbiAgICBsZWFwTW9udGhDTjogdCA/IGDpl7Ake0FbdCAtIDFdfeaciGAgOiB2b2lkIDAsXG4gICAgZGF5czogdCA/IGdbZSAtIDE5MDBdICYgNjU1MzYgPyAzMCA6IDI5IDogMFxuICB9O1xufSwgbSA9IChlKSA9PiB7XG4gIGNvbnN0IHQgPSBuZXcgQXJyYXkoNykuZmlsbCgwKTtcbiAgbGV0IHIgPSAwLCBhID0gMDtcbiAgY29uc3QgbiA9IGgobmV3IERhdGUoMTkwMCwgMCwgMzEpKSwgbCA9IGgoZSk7XG4gIGxldCBvID0gbC5kaWZmKG4sIFwiZGF5XCIpO1xuICB0WzVdID0gbyArIDQwLCB0WzRdID0gMTQ7XG4gIGxldCBpID0gMTkwMDtcbiAgZm9yICg7IGkgPCAyMTAwICYmIG8gPiAwOyBpKyspXG4gICAgciA9IHgoaSksIG8gLT0gciwgdFs0XSArPSAxMjtcbiAgbyA8IDAgJiYgKG8gKz0gciwgaS0tLCB0WzRdIC09IDEyKSwgdFswXSA9IGksIHRbM10gPSBpIC0gMTg2NCwgYSA9IHAoaSksIHRbNl0gPSAwO1xuICBmb3IgKGxldCBzID0gMTsgcyA8IDEzICYmIG8gPj0gMDsgcysrKVxuICAgIGEgPiAwICYmIHMgPT09IGEgKyAxICYmIHRbNl0gPT09IDAgPyAoLS1zLCB0WzZdID0gMSwgciA9IE4oaSkpIDogciA9IEQoaSwgcyksIHRbNl0gPT09IDEgJiYgcyA9PT0gYSArIDEgJiYgKHRbNl0gPSAwKSwgbyAtPSByLCB0WzZdID09PSAwICYmIHRbNF0rKywgdFsxXSA9IHM7XG4gIHJldHVybiBvID09PSAwICYmIGEgPiAwICYmIHRbNl0gPT09IDEgPyB0WzZdID0gMCA6IG8gPCAwICYmIChvICs9IHIsIHRbMV0tLSwgdFs0XS0tKSwgdFsyXSA9IG8gKyAxLCB7XG4gICAgZGF0ZTogbC5mb3JtYXQoXCJZWVlZLU1NLUREXCIpLFxuICAgIC8vIOWFrOWOhuaXpeacn1xuICAgIGx1bmFyWWVhcjogdFswXSxcbiAgICAvLyDlhpzljoblubTku71cbiAgICBsdW5hck1vbjogdFsxXSArIDEsXG4gICAgLy8g5Yac5Y6G5pyI5Lu9XG4gICAgbHVuYXJEYXk6IHRbMl0sXG4gICAgLy8g5Yac5Y6G5pel5pyfXG4gICAgaXNMZWFwOiAhIXRbNl0sXG4gICAgLy8g5piv5ZCm6Zew5pyIXG4gICAgem9kaWFjOiBzdCh0WzBdKSxcbiAgICAvLyDnlJ/ogpZcbiAgICB5ZWFyQ3lsOiBiKHRbM10pLFxuICAgIC8vIOW5tOafsVxuICAgIG1vbkN5bDogYih0WzRdKSxcbiAgICAvLyDmnIjmn7FcbiAgICBkYXlDeWw6IGIodFs1XSksXG4gICAgLy8g5pel5p+xXG4gICAgbHVuYXJZZWFyQ046IGAke3RbMF0udG9TdHJpbmcoKS5zcGxpdChcIlwiKS5tYXAoKHMpID0+IEZbTnVtYmVyKHMpXSkuam9pbihcIlwiKX1gLFxuICAgIC8vIOWGnOWOhuW5tOS7veS4reaWh+ihqOekulxuICAgIGx1bmFyTW9uQ046IGAke0FbdFsxXV195pyIYCxcbiAgICAvLyDlhpzljobmnIjku73kuK3mlofooajnpLpcbiAgICBsdW5hckRheUNOOiBpdCh0WzJdKVxuICAgIC8vIOWGnOWOhuaXpeacn+S4reaWh+ihqOekulxuICB9O1xufSwgaiA9IChlLCB0KSA9PiB7XG4gIGNvbnN0IHIgPSBoKGUpLCBhID0gaCh0KSwgbiA9IFtdO1xuICBmb3IgKGxldCBsID0gcjsgbC5pc0JlZm9yZShhKSB8fCBsLmlzU2FtZShhLCBcImRheVwiKTsgbCA9IGwuYWRkKDEsIFwiZGF5XCIpKVxuICAgIG4ucHVzaChtKGwpKTtcbiAgcmV0dXJuIG47XG59LCBJID0gKGUpID0+IHtcbiAgY29uc3QgdCA9IGgoZSksIHIgPSB0LnllYXIoKSwgYSA9IHQubW9udGgoKSArIDEsIG4gPSB0LmRhdGUoKTtcbiAgbGV0IGwgPSAwO1xuICBmb3IgKGxldCB5ID0gMTkwMDsgeSA8IHI7IHkrKylcbiAgICBsICs9IHgoeSk7XG4gIGxldCBvID0gcChyKTtcbiAgZm9yIChsZXQgeSA9IDE7IHkgPCBhOyB5KyspXG4gICAgbCArPSBEKHIsIHkpLCB5ID09PSBvICYmIChsICs9IE4ocikpO1xuICBsICs9IG4gLSAxO1xuICBjb25zdCBpID0gaChuZXcgRGF0ZSgxOTAwLCAwLCAzMSkpLCBzID0gaS5hZGQobCwgXCJkYXlcIikuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbiAgbGV0IF8gPSBsLCB2O1xuICByZXR1cm4gbyA9PT0gYSAmJiAoXyArPSBEKHIsIGEpLCB2ID0gaS5hZGQoXywgXCJkYXlcIikuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSksIHtcbiAgICBkYXRlOiBzLFxuICAgIGxlYXBNb250aERhdGU6IHZcbiAgfTtcbn0sIGR0ID0ge1xuICBnZXRMdW5hclllYXJzOiBSLFxuICBnZXRZZWFyTGVhcE1vbnRoOiBDLFxuICBnZXRMdW5hckRhdGU6IG0sXG4gIGdldEx1bmFyRGF0ZXNJblJhbmdlOiBqLFxuICBnZXRTb2xhckRhdGVGcm9tTHVuYXI6IElcbn0sIGh0ID0gLyogQF9fUFVSRV9fICovIE9iamVjdC5mcmVlemUoLyogQF9fUFVSRV9fICovIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgZGVmYXVsdDogZHQsXG4gIGdldEx1bmFyRGF0ZTogbSxcbiAgZ2V0THVuYXJEYXRlc0luUmFuZ2U6IGosXG4gIGdldEx1bmFyWWVhcnM6IFIsXG4gIGdldFNvbGFyRGF0ZUZyb21MdW5hcjogSSxcbiAgZ2V0WWVhckxlYXBNb250aDogQyxcbiAgbW9udGhEYXlzOiBEXG59LCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6IFwiTW9kdWxlXCIgfSkpLCBfdCA9IHtcbiAgMToge1xuICAgIC8vIOato+aciFxuICAgIDE6IFtcIuaYpeiKglwiLCBcIum4oeaXpVwiLCBcIuWFg+Wni+WkqeWwiuivnui+sFwiXSxcbiAgICAyOiBbXCLniqzml6VcIl0sXG4gICAgMzogW1wi54yq5pelXCIsIFwi5bCP5bm05pydXCJdLFxuICAgIDQ6IFtcIue+iuaXpVwiLCBcIuWtmeWkqeWMu+ivnui+sFwiXSxcbiAgICA1OiBbXCLniZvml6VcIiwgXCLnoLTkupTml6VcIiwgXCLlvIDluIJcIiwgXCLot6/npZ7or57ovrBcIl0sXG4gICAgNjogW1wi6ams5pelXCJdLFxuICAgIDc6IFtcIuS6uuaXpVwiLCBcIumAgeeBq+elnlwiXSxcbiAgICA4OiBbXCLosLfml6VcIiwgXCLpmI7njovor57ovrBcIl0sXG4gICAgOTogW1wi5aSp5pelXCIsIFwi546J55qH6K+e6L6wXCJdLFxuICAgIDEwOiBbXCLlnLDml6VcIiwgXCLnn7PlpLTnlJ/ml6VcIl0sXG4gICAgMTM6IFtcIuS4iijor5Up54Gv5pelXCIsIFwi5YWz5YWs5Y2H5aSp5pelXCJdLFxuICAgIDE1OiBbXCLlhYPlrrXoioJcIiwgXCLkuIrlhYPoioJcIiwgXCLmraPnga/ml6VcIiwgXCLlpKnlrpjor57ovrBcIl0sXG4gICAgMTg6IFtcIuiQveeBr+aXpVwiXSxcbiAgICAyNTogW1wi5aSp5LuTKOWhq+S7kynoioJcIl1cbiAgfSxcbiAgMjoge1xuICAgIC8vIOS6jOaciFxuICAgIDE6IFtcIuWkqumYs+eUn+aXpVwiXSxcbiAgICAyOiBbXCLmmKXpvpnoioJcIiwgXCLlnJ/lnLDlhaznlJ/ml6VcIiwgXCLmtY7lhazmtLvkvZvnlJ/ml6VcIl0sXG4gICAgMzogW1wi5paH5piM5bid5ZCb6K+e6L6wXCJdLFxuICAgIDEyOiBbXCLnmb7oirHnlJ/ml6Uo6Iqx5pyd6IqCKVwiXSxcbiAgICAxNTogW1wi5Lmd5aSp546E5aWz6K+e6L6wXCIsIFwi5aSq5LiK6ICB5ZCb6K+e6L6wXCIsIFwi57K+5b+g5bKz546L6K+e6L6wXCJdLFxuICAgIDE5OiBbXCLop4Lpn7Poj6nokKjor57ovrBcIl0sXG4gICAgMjE6IFtcIuaZrui0pOiPqeiQqOivnui+sFwiXVxuICB9LFxuICAzOiB7XG4gICAgMzogW1wi5LiK5bez6IqCXCJdLFxuICAgIDE1OiBbXCLotbXlhazlhYPluIXor57ovrBcIiwgXCLms7DlsbHogIHmr43or57ovrBcIl1cbiAgfSxcbiAgNDoge1xuICAgIDE6IFtcIuelrembueelnlwiXSxcbiAgICA0OiBbXCLmlofmroroj6nokKjor57ovrBcIl0sXG4gICAgODogW1wi5rW05L2b6IqCKOm+meWNjuS8milcIl0sXG4gICAgMTI6IFtcIuibh+eOi+ivnui+sFwiXSxcbiAgICAxNDogW1wi5ZCV5rSe5a6+6K+e6L6wXCJdLFxuICAgIDE4OiBbXCLljY7kvZfor57ovrBcIl0sXG4gICAgMjg6IFtcIuiNr+eOiyjnpZ7lhpwp6K+e6L6wXCJdXG4gIH0sXG4gIDU6IHtcbiAgICA1OiBbXCLnq6/ljYjoioJcIl0sXG4gICAgMTM6IFtcIumbqOiKglwiLCBcIum7hOW4neivnui+sFwiXVxuICB9LFxuICA2OiB7XG4gICAgMTogW1wi5Y2K5bm06IqCXCJdLFxuICAgIDY6IFtcIuaZkuiho+iKglwiXSxcbiAgICAxOTogW1wi6KeC6Z+z6I+p6JCo5b6X6YGTXCJdLFxuICAgIDI0OiBbXCLpm7fnpZ7or57ovrBcIiwgXCLojbfoirHnlJ/ml6VcIiwgXCLlhbPlhazor57ovrBcIl1cbiAgfSxcbiAgNzoge1xuICAgIDE6IFtcIuelrea1t+elnlwiXSxcbiAgICA3OiBbXCLkuZ7lt6foioJcIl0sXG4gICAgMTU6IFtcIuS4reWFgyjprLwp6IqCXCIsIFwi5Zyw5a6Y6K+e6L6wKOWtn+WFsOebhuS8milcIl0sXG4gICAgMTg6IFtcIuilv+eOi+avjeivnui+sFwiXSxcbiAgICAyMDogW1wi5qOJ6Iqx55Sf5pelXCJdLFxuICAgIDIzOiBbXCLor7jokZvkuq7or57ovrBcIl0sXG4gICAgMzA6IFtcIuWcsOiXj+iPqeiQqOivnui+sFwiXVxuICB9LFxuICA4OiB7XG4gICAgMTogW1wi5aSp5Yy76IqCXCJdLFxuICAgIDM6IFtcIueBtuWQm+eUn+aXpVwiXSxcbiAgICA4OiBbXCLnkbbmsaDlpKfkvJpcIl0sXG4gICAgMTU6IFtcIuS4reeni+iKglwiXSxcbiAgICAyMDogW1wi5rC056i755Sf5pelXCJdLFxuICAgIDI4OiBbXCLlrZTlrZDor57ovrBcIl1cbiAgfSxcbiAgOToge1xuICAgIDk6IFtcIumHjemYs+iKglwiXSxcbiAgICAxOTogW1wi6KeC6Z+z6I+p6JCo5Ye65a62XCJdXG4gIH0sXG4gIDEwOiB7XG4gICAgMTogW1wi5Y2B5pyI5pydXCIsIFwi5a+S6KGj6IqCXCJdLFxuICAgIDE1OiBbXCLkuIvlhYPoioJcIiwgXCLmsLTlrpjor57ovrBcIl1cbiAgfSxcbiAgMTI6IHtcbiAgICA4OiBbXCLohYrlhavoioJcIl0sXG4gICAgMjM6IFtcIuWumOWutumAgeeBtlwiXSxcbiAgICAyNDogW1wi5rCR6Ze06YCB54G2XCJdLFxuICAgIDI1OiBbXCLmjqXnjonnmodcIl1cbiAgfVxufSwgeXQgPSBbXG4gIC8vIOWkhOeQhuWvkumjn+iKgu+8iOa4heaYjuWJjeS4gOaXpe+8iVxuICAoZSwgdCkgPT4ge1xuICAgIGNvbnN0IHIgPSBlLmFkZCgxLCBcImRheVwiKTtcbiAgICAkKHIpLmZpbmQoKG4pID0+IG4udGVybSA9PT0gXCJwdXJlX2JyaWdodG5lc3NcIikgJiYgdC5wdXNoKHtcbiAgICAgIGRhdGU6IGUuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSxcbiAgICAgIG5hbWU6IFwi5a+S6aOf6IqCXCIsXG4gICAgICB0eXBlOiBcInNvbGFyX3Rlcm1cIlxuICAgIH0pO1xuICB9LFxuICAvLyDlpITnkIbpmaTlpJXvvIjlhpzljobohYrmnIjmnIDlkI7kuIDml6XvvIlcbiAgKGUsIHQpID0+IHtcbiAgICBjb25zdCByID0gbShlKTtcbiAgICBpZiAoci5sdW5hck1vbiA9PT0gMTIgJiYgci5sdW5hckRheSA9PT0gRChyLmx1bmFyWWVhciwgMTIpKSB7XG4gICAgICBjb25zdCBhID0gZS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xuICAgICAgW1wi6Zmk5aSVXCIsIFwi5bCB5LqVXCIsIFwi56Wt5LqV56WeXCIsIFwi6LS05pil6IGUXCIsIFwi6L+O6LSi56WeXCJdLmZvckVhY2goKG4pID0+IHtcbiAgICAgICAgdC5wdXNoKHtcbiAgICAgICAgICBkYXRlOiBhLFxuICAgICAgICAgIG5hbWU6IG4sXG4gICAgICAgICAgdHlwZTogXCJsdW5hclwiXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5dLCBxID0gKGUsIHQpID0+IHtcbiAgdmFyIGw7XG4gIGNvbnN0IHIgPSBbXTtcbiAgbGV0IGEgPSBoKGUpO1xuICBjb25zdCBuID0gaCh0IHx8IGUpO1xuICBmb3IgKDsgYS5pc0JlZm9yZShuKSB8fCBhLmlzU2FtZShuKTsgKSB7XG4gICAgY29uc3QgbyA9IG0oYSk7XG4gICAgby5pc0xlYXAgfHwgKCgobCA9IF90W28ubHVuYXJNb25dKSA9PSBudWxsID8gdm9pZCAwIDogbFtvLmx1bmFyRGF5XSkgfHwgW10pLmZvckVhY2goKHMpID0+IHtcbiAgICAgIHIucHVzaCh7XG4gICAgICAgIGRhdGU6IGEuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSxcbiAgICAgICAgbmFtZTogcyxcbiAgICAgICAgdHlwZTogXCJsdW5hclwiXG4gICAgICB9KTtcbiAgICB9KSwgeXQuZm9yRWFjaCgoaSkgPT4gaShhLCByKSksIGEgPSBhLmFkZCgxLCBcImRheVwiKTtcbiAgfVxuICByZXR1cm4gci5yZWR1Y2UoKG8sIGkpID0+IHtcbiAgICBjb25zdCBzID0gby5maW5kKChfKSA9PiBfLmRhdGUgPT09IGkuZGF0ZSk7XG4gICAgcmV0dXJuIHMgPyBzLm5hbWUucHVzaChpLm5hbWUpIDogby5wdXNoKHsgZGF0ZTogaS5kYXRlLCBuYW1lOiBbaS5uYW1lXSB9KSwgbztcbiAgfSwgW10pO1xufSwgdXQgPSB7XG4gIGdldEx1bmFyRmVzdGl2YWxzOiBxXG59LCB3dCA9IC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuZnJlZXplKC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuZGVmaW5lUHJvcGVydHkoe1xuICBfX3Byb3RvX186IG51bGwsXG4gIGRlZmF1bHQ6IHV0LFxuICBnZXRMdW5hckZlc3RpdmFsczogcVxufSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiBcIk1vZHVsZVwiIH0pKSwgZnQgPSB7XG4gIC4uLnR0LFxuICAuLi5vdCxcbiAgLi4uaHQsXG4gIC4uLnd0XG59O1xuZXhwb3J0IHtcbiAgZnQgYXMgZGVmYXVsdCxcbiAgWCBhcyBmaW5kV29ya2RheSxcbiAgSiBhcyBnZXREYXlEZXRhaWwsXG4gIEsgYXMgZ2V0SG9saWRheXNJblJhbmdlLFxuICBtIGFzIGdldEx1bmFyRGF0ZSxcbiAgaiBhcyBnZXRMdW5hckRhdGVzSW5SYW5nZSxcbiAgcSBhcyBnZXRMdW5hckZlc3RpdmFscyxcbiAgUiBhcyBnZXRMdW5hclllYXJzLFxuICBJIGFzIGdldFNvbGFyRGF0ZUZyb21MdW5hcixcbiAgTCBhcyBnZXRTb2xhclRlcm1EYXRlLFxuICBhdCBhcyBnZXRTb2xhclRlcm1zLFxuICAkIGFzIGdldFNvbGFyVGVybXNJblJhbmdlLFxuICBRIGFzIGdldFdvcmtkYXlzSW5SYW5nZSxcbiAgQyBhcyBnZXRZZWFyTGVhcE1vbnRoLFxuICBPIGFzIGlzSG9saWRheSxcbiAgRyBhcyBpc0luTGlldSxcbiAgZiBhcyBpc1dvcmtkYXksXG4gIEQgYXMgbW9udGhEYXlzXG59O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQSxvRkFBQUEsVUFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxRQUFRLFNBQVVDLEtBQUk7QUFDeEIsYUFBT0EsT0FBTUEsSUFBRyxTQUFTLFFBQVFBO0FBQUEsSUFDbkM7QUFHQSxJQUFBRCxRQUFPO0FBQUEsSUFFTCxNQUFNLE9BQU8sY0FBYyxZQUFZLFVBQVUsS0FDakQsTUFBTSxPQUFPLFVBQVUsWUFBWSxNQUFNO0FBQUEsSUFFekMsTUFBTSxPQUFPLFFBQVEsWUFBWSxJQUFJLEtBQ3JDLE1BQU0sT0FBTyxVQUFVLFlBQVksTUFBTSxLQUN6QyxNQUFNLE9BQU9ELFlBQVEsWUFBWUEsUUFBSTtBQUFBLElBRXBDLDJCQUFZO0FBQUUsYUFBTztBQUFBLElBQU0sRUFBRyxLQUFLLFNBQVMsYUFBYSxFQUFFO0FBQUE7QUFBQTs7O0FDZjlEO0FBQUEsOEVBQUFHLFVBQUFDLFNBQUE7QUFBQTtBQUNBLElBQUFBLFFBQU8sVUFBVSxTQUFVLE1BQU07QUFDL0IsVUFBSTtBQUNGLGVBQU8sQ0FBQyxDQUFDLEtBQUs7QUFBQSxNQUNoQixTQUFTLE9BQU87QUFDZCxlQUFPO0FBQUEsTUFDVDtBQUFBLElBQ0Y7QUFBQTtBQUFBOzs7QUNQQTtBQUFBLG9GQUFBQyxVQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLFFBQVE7QUFHWixJQUFBQSxRQUFPLFVBQVUsQ0FBQyxNQUFNLFdBQVk7QUFFbEMsYUFBTyxPQUFPLGVBQWUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxL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QUFFa0YsR0FBRyxJQUFJLENBQUMsRUFBRUksRUFBRSxJQUFJLENBQUMsRUFBRUEsRUFBRSxJQUFJLENBQUMsRUFBRUgsRUFBRSxJQUFJLENBQUMsRUFBRUQsR0FBRyxJQUFJLENBQUMsRUFBRUssR0FBRyxFQUFFdkYsRUFBRSxJQUFJLEVBQUUsR0FBR0YsRUFBRW9FLEVBQUUsSUFBSSxFQUFFcUIsR0FBRyxFQUFFdkYsRUFBRSxHQUFHLENBQUMsRUFBRWtGLEdBQUcsR0FBRyxDQUFDLEVBQUVFLEVBQUUsRUFBRXBGLEVBQUUsR0FBRyxFQUFFLEVBQUVrRixHQUFHLEdBQUcsRUFBRSxFQUFFSSxFQUFFLEdBQUcsQ0FBQyxFQUFFQSxFQUFFLEdBQUcsRUFBRSxFQUFFSCxFQUFFLEdBQUcsRUFBRSxFQUFFRCxHQUFHLEdBQUcsRUFBRSxFQUFFbkYsRUFBRSxFQUFFQyxFQUFFLEdBQUcsQ0FBQyxFQUFFa0YsR0FBRyxHQUFHLENBQUMsRUFBRTNCLEVBQUUsRUFBRXZELEVBQUUsR0FBRyxDQUFDLEVBQUVrRixHQUFHLEdBQUcsQ0FBQyxFQUFFSSxFQUFFLEdBQUcsRUFBRSxFQUFFQSxFQUFFLEdBQUcsQ0FBQyxFQUFFSCxFQUFFLEdBQUcsQ0FBQyxFQUFFRCxHQUFHLEdBQUcsQ0FBQyxFQUFFNUUsRUFBRSxFQUFFTixFQUFFLEdBQUcsRUFBRSxFQUFFa0YsR0FBRyxHQUFHLEVBQUUsRUFBRXRILEVBQUUsRUFBRW9DLEVBQUUsR0FBRyxFQUFFLEVBQUVrRixHQUFHLEdBQUcsRUFBRSxFQUFFSSxFQUFFLEdBQUcsRUFBRSxFQUFFSCxFQUFFLEdBQUcsRUFBRSxFQUFFakUsRUFBRSxFQUFFbEIsRUFBRSxJQUFJLENBQUMsRUFBRWtGLEdBQUcsSUFBSSxDQUFDLEVBQUVJLEVBQUUsR0FBRyxFQUFFLEVBQUVBLEVBQUUsSUFBSSxDQUFDLEVBQUVILEVBQUUsSUFBSSxDQUFDLEVBQUVELEdBQUcsSUFBSSxDQUFDLEdBQUdwRixFQUFFb0UsRUFBRSxJQUFJLEVBQUVxQixHQUFHLEVBQUV2RixFQUFFLEdBQUcsQ0FBQyxFQUFFb0YsRUFBRSxFQUFFcEYsRUFBRSxHQUFHLEVBQUUsRUFBRWtGLEdBQUcsR0FBRyxDQUFDLEVBQUVJLEVBQUUsR0FBRyxFQUFFLEVBQUVILEVBQUUsR0FBRyxFQUFFLEVBQUVwRixFQUFFLEVBQUVDLEVBQUUsR0FBRyxDQUFDLEVBQUVrRixHQUFHLEdBQUcsQ0FBQyxFQUFFM0IsRUFBRSxFQUFFdkQsRUFBRSxHQUFHLENBQUMsRUFBRWtGLEdBQUcsR0FBRyxDQUFDLEVBQUVJLEVBQUUsR0FBRyxFQUFFLEVBQUVBLEVBQUUsR0FBRyxDQUFDLEVBQUVILEVBQUUsR0FBRyxDQUFDLEVBQUVELEdBQUcsR0FBRyxDQUFDLEVBQUU1RSxFQUFFLEVBQUVOLEVBQUUsR0FBRyxFQUFFLEVBQUVrRixHQUFHLEdBQUcsRUFBRSxFQUFFSSxFQUFFLEdBQUcsRUFBRSxFQUFFSCxFQUFFLEdBQUcsRUFBRSxFQUFFakUsRUFBRSxFQUFFbEIsRUFBRSxJQUFJLENBQUMsRUFBRWtGLEdBQUcsSUFBSSxDQUFDLEVBQUVJLEVBQUUsR0FBRyxFQUFFLEVBQUVBLEVBQUUsSUFBSSxFQUFFLEVBQUVILEVBQUUsSUFBSSxDQUFDLEVBQUVELEdBQUcsSUFBSSxDQUFDLEdBQUdwRixFQUFFb0UsRUFBRSxJQUFJLEVBQUVxQixHQUFHLEVBQUV2RixFQUFFLEdBQUcsQ0FBQyxFQUFFb0YsRUFBRSxFQUFFcEYsRUFBRSxHQUFHLENBQUMsRUFBRWtGLEdBQUcsR0FBRyxFQUFFLEVBQUVJLEVBQUUsR0FBRyxDQUFDLEVBQUVKLEdBQUcsR0FBRyxDQUFDLEVBQUVDLEVBQUUsR0FBRyxDQUFDLEVBQUVBLEVBQUUsR0FBRyxDQUFDLEVBQUVwRixFQUFFLEVBQUVDLEVBQUUsR0FBRyxDQUFDLEVBQUVrRixHQUFHLEdBQUcsQ0FBQyxFQUFFM0IsRUFBRSxFQUFFdkQsRUFBRSxHQUFHLENBQUMsRUFBRWtGLEdBQUcsR0FBRyxDQUFDLEVBQUVJLEVBQUUsR0FBRyxFQUFFLEVBQUVBLEVBQUUsR0FBRyxDQUFDLEVBQUVILEVBQUUsR0FBRyxD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QUksQ0FBQyxFQUFFbEUsRUFBRSxFQUFFakIsRUFBRSxHQUFHLENBQUMsRUFBRWtGLEdBQUcsR0FBRyxDQUFDLEVBQUVJLEVBQUUsR0FBRyxDQUFDLEVBQUVILEVBQUUsR0FBRyxDQUFDLEdBQUdyRixFQUFFb0UsRUFBRSxJQUFJLEVBQUVxQixHQUFHLEVBQUV2RixFQUFFLEdBQUcsQ0FBQyxFQUFFb0YsRUFBRSxFQUFFcEYsRUFBRSxHQUFHLEVBQUUsRUFBRWtGLEdBQUcsR0FBRyxDQUFDLEVBQUVJLEVBQUUsR0FBRyxFQUFFLEVBQUVBLEVBQUUsR0FBRyxDQUFDLEVBQUVILEVBQUUsR0FBRyxDQUFDLEVBQUVELEdBQUcsR0FBRyxDQUFDLEVBQUVuRixFQUFFLEVBQUVDLEVBQUUsR0FBRyxDQUFDLEVBQUVrRixHQUFHLEdBQUcsQ0FBQyxFQUFFM0IsRUFBRSxFQUFFdkQsRUFBRSxHQUFHLENBQUMsRUFBRWtGLEdBQUcsR0FBRyxDQUFDLEVBQUVJLEVBQUUsR0FBRyxDQUFDLEVBQUVILEVBQUUsR0FBRyxDQUFDLEVBQUU3RSxFQUFFLEVBQUVOLEVBQUUsR0FBRyxDQUFDLEVBQUVwQyxFQUFFLEVBQUVvQyxFQUFFLEdBQUcsQ0FBQyxFQUFFa0IsRUFBRSxFQUFFbEIsRUFBRSxJQUFJLENBQUMsRUFBRWtGLEdBQUcsSUFBSSxDQUFDLEVBQUVJLEVBQUUsR0FBRyxFQUFFLEVBQUVBLEVBQUUsSUFBSSxFQUFFLEVBQUVILEVBQUUsSUFBSSxDQUFDLEVBQUVELEdBQUcsSUFBSSxDQUFDLEdBQUdwRixFQUFFb0UsRUFBRSxJQUFJLEVBQUVxQixHQUFHLEVBQUV2RixFQUFFLEdBQUcsQ0FBQyxFQUFFa0YsR0FBRyxHQUFHLENBQUMsRUFBRUksRUFBRSxHQUFHLENBQUMsRUFBRUosR0FBRyxHQUFHLENBQUMsRUFBRUMsRUFBRSxHQUFHLENBQUMsRUFBRUQsR0FBRyxHQUFHLENBQUMsRUFBRUUsRUFBRSxFQUFFcEYsRUFBRSxHQUFHLENBQUMsRUFBRWtGLEdBQUcsR0FBRyxFQUFFLEVBQUVJLEVBQUUsR0FBRyxF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Q0FBQyxFQUFFSCxFQUFFLElBQUksQ0FBQyxFQUFFRCxHQUFHLElBQUksQ0FBQyxHQUFHcEYsRUFBRW9FLEVBQUUsSUFBSSxFQUFFcUIsR0FBRyxFQUFFdkYsRUFBRSxHQUFHLENBQUMsRUFBRWtGLEdBQUcsR0FBRyxDQUFDLEVBQUVJLEVBQUUsR0FBRyxDQUFDLEVBQUVILEVBQUUsR0FBRyxDQUFDLEVBQUVDLEVBQUUsRUFBRXBGLEVBQUUsR0FBRyxFQUFFLEVBQUVrRixHQUFHLEdBQUcsRUFBRSxFQUFFSSxFQUFFLEdBQUcsRUFBRSxFQUFFQSxFQUFFLEdBQUcsQ0FBQyxFQUFFSCxFQUFFLEdBQUcsRUFBRSxFQUFFRCxHQUFHLEdBQUcsRUFBRSxFQUFFbkYsRUFBRSxFQUFFQyxFQUFFLEdBQUcsQ0FBQyxFQUFFa0YsR0FBRyxHQUFHLENBQUMsRUFBRTNCLEVBQUUsRUFBRXZELEVBQUUsR0FBRyxDQUFDLEVBQUVrRixHQUFHLEdBQUcsQ0FBQyxFQUFFNUUsRUFBRSxFQUFFTixFQUFFLEdBQUcsRUFBRSxFQUFFa0YsR0FBRyxHQUFHLEVBQUUsRUFBRUksRUFBRSxHQUFHLEVBQUUsRUFBRUgsRUFBRSxHQUFHLEVBQUUsRUFBRWpFLEVBQUUsRUFBRWxCLEVBQUUsSUFBSSxDQUFDLEVBQUVrRixHQUFHLElBQUksQ0FBQyxFQUFFSSxFQUFFLEdBQUcsRUFBRSxFQUFFQSxFQUFFLElBQUksRUFBRSxFQUFFSCxFQUFFLElBQUksQ0FBQyxFQUFFRCxHQUFHLElBQUksQ0FBQyxFQUFFdEgsRUFBRSxFQUFFb0MsRUFBRSxJQUFJLENBQUMsR0FBR0YsRUFBRW9FLEVBQUUsSUFBSSxFQUFFcUIsR0FBRyxFQUFFdkYsRUFBRSxHQUFHLENBQUMsRUFBRW9GLEVBQUUsRUFBRXBGLEVBQUUsR0FBRyxDQUFDLEVBQUVrRixHQUFHLEdBQUcsRUFBRSxFQUFFSSxFQUFFLEdBQUcsQ0FBQyxFQUFFSixHQUFHLEdBQUcsQ0FBQyxFQUFFQyxFQUFFLEdBQUcsRUFBRSxFQUFFRCxHQUFHLEdBQUcsRUFBRSxFQUFFbkYsRUFBRSxF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R0FBR1E7QUFDTDsiLAogICJuYW1lcyI6IFsiZXhwb3J0cyIsICJtb2R1bGUiLCAiaXQiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJWIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIml0IiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIml0IiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIml0IiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIml0IiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIml0IiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIml0IiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiaXQiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiViIsICJQIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJpdCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIlN5bWJvbCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgImRvY3VtZW50IiwgIml0IiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiTyIsICJQIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiTyIsICJQIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIml0IiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJUeXBlRXJyb3IiLCAiaXQiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiTyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJ4IiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIk8iLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiTyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIk8iLCAiZXhwb3J0cyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJpdCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIk8iLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiaXQiLCAiJCIsICJPIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIml0IiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIkYiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiTyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJPIiwgImV4cG9ydHMiLCAiTyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJhY3RpdmVYRG9jdW1lbnQiLCAiTyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICIkIiwgImdsb2JhbFRoaXMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiJCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJpdCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJpdCIsICJPIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIml0IiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIiQiLCAiJCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICIkIiwgIkNoaW5lc2VEYXlzX2V4cG9ydHMiLCAiX19leHBvcnQiLCAiZmluZFdvcmtkYXkiLCAiWCIsICJnZXREYXlEZXRhaWwiLCAiSiIsICJnZXRIb2xpZGF5c0luUmFuZ2UiLCAiSyIsICJnZXRMdW5hckRhdGUiLCAibSIsICJnZXRMdW5hckRhdGVzSW5SYW5nZSIsICJqIiwgImdldEx1bmFyRmVzdGl2YWxzIiwgInEiLCAiZ2V0THVuYXJZZWFycyIsICJSIiwgImdldFNvbGFyRGF0ZUZyb21MdW5hciIsICJJIiwgImdldFNvbGFyVGVybURhdGUiLCAiTCIsICJnZXRTb2xhclRlcm1zIiwgImF0IiwgImdldFNvbGFyVGVybXNJblJhbmdlIiwgIiQiLCAiZ2V0V29ya2RheXNJblJhbmdlIiwgIlEiLCAiZ2V0WWVhckxlYXBNb250aCIsICJDIiwgImlzSG9saWRheSIsICJPIiwgImlzSW5MaWV1IiwgIkciLCAiaXNXb3JrZGF5IiwgImYiLCAibW9udGhEYXlzIiwgIkQiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiX190b0NvbW1vbkpTIiwgIlAiLCAiT2JqZWN0IiwgImRlZmluZVByb3BlcnR5IiwgIlUiLCAiZSIsICJ0IiwgInIiLCAiZW51bWVyYWJsZSIsICJjb25maWd1cmFibGUiLCAid3JpdGFibGUiLCAidmFsdWUiLCAiYyIsICJkIiwgImQyIiwgImNvbnN0cnVjdG9yIiwgIl9kYXRlIiwgIkRhdGUiLCAidG9EYXRlIiwgImlzTmFOIiwgImdldFRpbWUiLCAicmVwbGFjZSIsICJpc1ZhbGlkIiwgImRpZmYiLCAiYSIsICJuIiwgImdldEZ1bGxZZWFyIiwgImdldE1vbnRoIiwgIk1hdGgiLCAiZmxvb3IiLCAic3RhcnRPZiIsICJzZXRNb250aCIsICJzZXREYXRlIiwgInNldEhvdXJzIiwgImVuZE9mIiwgImdldERhdGUiLCAiYWRkIiwgInNldEZ1bGxZZWFyIiwgInN1YnRyYWN0IiwgImZvcm1hdCIsICJZWVlZIiwgIk1NIiwgInRvU3RyaW5nIiwgInBhZFN0YXJ0IiwgIkREIiwgIkhIIiwgImdldEhvdXJzIiwgIm1tIiwgImdldE1pbnV0ZXMiLCAic3MiLCAiZ2V0U2Vjb25kcyIsICJkZGRkIiwgImRheXNPZldlZWsiLCAiZ2V0RGF5IiwgInllYXIiLCAibW9udGgiLCAiZGF0ZSIsICJkYXkiLCAiaXNCZWZvcmUiLCAiaXNBZnRlciIsICJpc1NhbWUiLCAiaXNCZXR3ZWVuIiwgImwiLCAibyIsICJTIiwgImgiLCAidSIsICJZIiwgIkFycmF5IiwgImZyb20iLCAibGVuZ3RoIiwgIlciLCAieiIsICJ5IiwgImRheURldGFpbHMiLCAiZ2V0SG9saWRheURheXMiLCAiX2kiLCAiX09iamVjdCRlbnRyaWVzIiwgImVudHJpZXMiLCAicGFyc2VJbnQiLCAibWFyayIsICJob2xpZGF5IiwgInNhdmUiLCAiRXJyb3IiLCAiZGF5VHlwZSIsICJjb25jYXQiLCAiaG9saWRheXMiLCAid29ya2RheXMiLCAiaW5MaWV1RGF5cyIsICJ0byIsICJpIiwgInMiLCAiXyIsICJ3IiwgIm55IiwgIlYiLCAiTSIsICJrIiwgIloiLCAibWFwIiwgIndvcmsiLCAibmFtZSIsICJmaWx0ZXIiLCAiYWJzIiwgInR0IiwgImZyZWV6ZSIsICJfX3Byb3RvX18iLCAiU3ltYm9sIiwgInRvU3RyaW5nVGFnIiwgImV0IiwgInRoZV9iZWdpbm5pbmdfb2Zfc3ByaW5nIiwgInJhaW5fd2F0ZXIiLCAidGhlX3dha2luZ19vZl9pbnNlY3RzIiwgInRoZV9zcHJpbmdfZXF1aW5veCIsICJwdXJlX2JyaWdodG5lc3MiLCAiZ3JhaW5fcmFpbiIsICJ0aGVfYmVnaW5uaW5nX29mX3N1bW1lciIsICJsZXNzZXJfZnVsbG5lc3Nfb2ZfZ3JhaW4iLCAiZ3JhaW5faW5fYmVhcmQiLCAidGhlX3N1bW1lcl9zb2xzdGljZSIsICJsZXNzZXJfaGVhdCIsICJncmVhdGVyX2hlYXQiLCAidGhlX2JlZ2lubmluZ19vZl9hdXR1bW4iLCAidGhlX2VuZF9vZl9oZWF0IiwgIndoaXRlX2RldyIsICJ0aGVfYXV0dW1uX2VxdWlub3giLCAiY29kZV9kZXciLCAiZnJvc3RfZGVzY2VudCIsICJ0aGVfYmVnaW5uaW5nX29mX3dpbnRlciIsICJsZXNzZXJfc25vdyIsICJncmVhdGVyX3Nub3ciLCAidGhlX3dpbnRlcl9zb2xzdGljZSIsICJsZXNzZXJfY29sZCIsICJncmVhdGVyX2NvbGQiLCAiVCIsICJydCIsICJFIiwgImluY2x1ZGVzIiwgImZvckVhY2giLCAicHVzaCIsICJ0ZXJtIiwgImluZGV4IiwgIm90IiwgImciLCAiRiIsICJBIiwgIkgiLCAiQiIsICJudCIsICJ4IiwgIk4iLCAicCIsICJiIiwgInN0IiwgIml0IiwgImx0IiwgImx1bmFyWWVhciIsICJsdW5hclllYXJDTiIsICJzcGxpdCIsICJOdW1iZXIiLCAiam9pbiIsICJsZWFwTW9udGgiLCAibGVhcE1vbnRoQ04iLCAiZGF5cyIsICJmaWxsIiwgImx1bmFyTW9uIiwgImx1bmFyRGF5IiwgImlzTGVhcCIsICJ6b2RpYWMiLCAieWVhckN5bCIsICJtb25DeWwiLCAiZGF5Q3lsIiwgImx1bmFyTW9uQ04iLCAibHVuYXJEYXlDTiIsICJ2IiwgImxlYXBNb250aERhdGUiLCAiZHQiLCAiaHQiLCAiZGVmYXVsdCIsICJfdCIsICJ5dCIsICJmaW5kIiwgInR5cGUiLCAicmVkdWNlIiwgInV0IiwgInd0IiwgImZ0Il0KfQo=
