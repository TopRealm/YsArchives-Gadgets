/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/Util}
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/global-this.js"(exports2, module2) {
    "use strict";
    var check = function(it) {
      return it && it.Math === Math && it;
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
    exports2.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
      var descriptor = getOwnPropertyDescriptor(this, V);
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
    module2.exports = function(it) {
      return stringSlice(toString(it), 8, -1);
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
    }) ? function(it) {
      return classof(it) === "String" ? split(it, "") : $Object(it);
    } : $Object;
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/is-null-or-undefined.js
var require_is_null_or_undefined = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/is-null-or-undefined.js"(exports2, module2) {
    "use strict";
    module2.exports = function(it) {
      return it === null || it === void 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/require-object-coercible.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/to-indexed-object.js"(exports2, module2) {
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
    module2.exports = function(it) {
      return typeof it == "object" ? it !== null : isCallable(it);
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
    module2.exports = function(V, P) {
      var func = V[P];
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
    module2.exports = Object.hasOwn || function hasOwn(it, key) {
      return hasOwnProperty(toObject(it), key);
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
    module2.exports = function(it) {
      return EXISTS ? document2.createElement(it) : {};
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
    exports2.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
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
    exports2.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
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
      store.inspectSource = function(it) {
        return functionToString(it);
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/math-trunc.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-keys-internal.js"(exports2, module2) {
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
    exports2.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return internalObjectKeys(O, hiddenKeys);
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
    module2.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
      var keys = getOwnPropertyNamesModule.f(anObject(it));
      var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
      return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
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

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/an-instance.js
var require_an_instance = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/an-instance.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/correct-prototype-getter.js"(exports2, module2) {
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
    module2.exports = Object.keys || function keys(O) {
      return internalObjectKeys(O, enumBugKeys);
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
    exports2.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
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
    module2.exports = function(it) {
      return it !== void 0 && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/get-iterator-method.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/get-iterator-flattenable.js
var require_get_iterator_flattenable = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/get-iterator-flattenable.js"(exports2, module2) {
    "use strict";
    var call = require_function_call();
    var anObject = require_an_object();
    var getIteratorDirect = require_get_iterator_direct();
    var getIteratorMethod = require_get_iterator_method();
    module2.exports = function(obj, stringHandling) {
      if (!stringHandling || typeof obj !== "string") anObject(obj);
      var method = getIteratorMethod(obj);
      return getIteratorDirect(anObject(method !== void 0 ? call(method, obj) : obj));
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/modules/es.iterator.flat-map.js
var require_es_iterator_flat_map = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/modules/es.iterator.flat-map.js"() {
    "use strict";
    var $2 = require_export();
    var call = require_function_call();
    var aCallable = require_a_callable();
    var anObject = require_an_object();
    var getIteratorDirect = require_get_iterator_direct();
    var getIteratorFlattenable = require_get_iterator_flattenable();
    var createIteratorProxy = require_iterator_create_proxy();
    var iteratorClose = require_iterator_close();
    var IS_PURE = require_is_pure();
    var iteratorHelperThrowsOnInvalidIterator = require_iterator_helper_throws_on_invalid_iterator();
    var iteratorHelperWithoutClosingOnEarlyError = require_iterator_helper_without_closing_on_early_error();
    var FLAT_MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR = !IS_PURE && !iteratorHelperThrowsOnInvalidIterator("flatMap", function() {
    });
    var flatMapWithoutClosingOnEarlyError = !IS_PURE && !FLAT_MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR && iteratorHelperWithoutClosingOnEarlyError("flatMap", TypeError);
    var FORCED = IS_PURE || FLAT_MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR || flatMapWithoutClosingOnEarlyError;
    var IteratorProxy = createIteratorProxy(function() {
      var iterator = this.iterator;
      var mapper = this.mapper;
      var result, inner;
      while (true) {
        if (inner = this.inner) try {
          result = anObject(call(inner.next, inner.iterator));
          if (!result.done) return result.value;
          this.inner = null;
        } catch (error) {
          iteratorClose(iterator, "throw", error);
        }
        result = anObject(call(this.next, iterator));
        if (this.done = !!result.done) return;
        try {
          this.inner = getIteratorFlattenable(mapper(result.value, this.counter++), false);
        } catch (error) {
          iteratorClose(iterator, "throw", error);
        }
      }
    });
    $2({ target: "Iterator", proto: true, real: true, forced: FORCED }, {
      flatMap: function flatMap(mapper) {
        anObject(this);
        try {
          aCallable(mapper);
        } catch (error) {
          iteratorClose(this, "throw", error);
        }
        if (flatMapWithoutClosingOnEarlyError) return call(flatMapWithoutClosingOnEarlyError, this, mapper);
        return new IteratorProxy(getIteratorDirect(this), {
          mapper,
          inner: null
        });
      }
    });
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/to-string.js
var require_to_string = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/to-string.js"(exports2, module2) {
    "use strict";
    var classof = require_classof();
    var $String = String;
    module2.exports = function(argument) {
      if (classof(argument) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
      return $String(argument);
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/validate-arguments-length.js
var require_validate_arguments_length = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/validate-arguments-length.js"(exports2, module2) {
    "use strict";
    var $TypeError = TypeError;
    module2.exports = function(passed, required) {
      if (passed < required) throw new $TypeError("Not enough arguments");
      return passed;
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/modules/web.url-search-params.delete.js
var require_web_url_search_params_delete = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/modules/web.url-search-params.delete.js"() {
    "use strict";
    var defineBuiltIn = require_define_built_in();
    var uncurryThis = require_function_uncurry_this();
    var toString = require_to_string();
    var validateArgumentsLength = require_validate_arguments_length();
    var $URLSearchParams = URLSearchParams;
    var URLSearchParamsPrototype = $URLSearchParams.prototype;
    var append = uncurryThis(URLSearchParamsPrototype.append);
    var $delete = uncurryThis(URLSearchParamsPrototype["delete"]);
    var forEach = uncurryThis(URLSearchParamsPrototype.forEach);
    var push = uncurryThis([].push);
    var params = new $URLSearchParams("a=1&a=2&b=3");
    params["delete"]("a", 1);
    params["delete"]("b", void 0);
    if (params + "" !== "a=2") {
      defineBuiltIn(URLSearchParamsPrototype, "delete", function(name) {
        var length = arguments.length;
        var $value = length < 2 ? void 0 : arguments[1];
        if (length && $value === void 0) return $delete(this, name);
        var entries = [];
        forEach(this, function(v, k) {
          push(entries, { key: k, value: v });
        });
        validateArgumentsLength(length, 1);
        var key = toString(name);
        var value = toString($value);
        var index = 0;
        var dindex = 0;
        var found = false;
        var entriesLength = entries.length;
        var entry;
        while (index < entriesLength) {
          entry = entries[index++];
          if (found || entry.key === key) {
            found = true;
            $delete(this, entry.key);
          } else dindex++;
        }
        while (dindex < entriesLength) {
          entry = entries[dindex++];
          if (!(entry.key === key && entry.value === value)) append(this, entry.key, entry.value);
        }
      }, { enumerable: true, unsafe: true });
    }
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/modules/web.url-search-params.has.js
var require_web_url_search_params_has = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/modules/web.url-search-params.has.js"() {
    "use strict";
    var defineBuiltIn = require_define_built_in();
    var uncurryThis = require_function_uncurry_this();
    var toString = require_to_string();
    var validateArgumentsLength = require_validate_arguments_length();
    var $URLSearchParams = URLSearchParams;
    var URLSearchParamsPrototype = $URLSearchParams.prototype;
    var getAll = uncurryThis(URLSearchParamsPrototype.getAll);
    var $has = uncurryThis(URLSearchParamsPrototype.has);
    var params = new $URLSearchParams("a=1");
    if (params.has("a", 2) || !params.has("a", void 0)) {
      defineBuiltIn(URLSearchParamsPrototype, "has", function has(name) {
        var length = arguments.length;
        var $value = length < 2 ? void 0 : arguments[1];
        if (length && $value === void 0) return $has(this, name);
        var values = getAll(this, name);
        validateArgumentsLength(length, 1);
        var value = toString($value);
        var index = 0;
        while (index < values.length) {
          if (values[index++] === value) return true;
        }
        return false;
      }, { enumerable: true, unsafe: true });
    }
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/modules/web.url-search-params.size.js
var require_web_url_search_params_size = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/modules/web.url-search-params.size.js"() {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var uncurryThis = require_function_uncurry_this();
    var defineBuiltInAccessor = require_define_built_in_accessor();
    var URLSearchParamsPrototype = URLSearchParams.prototype;
    var forEach = uncurryThis(URLSearchParamsPrototype.forEach);
    if (DESCRIPTORS && !("size" in URLSearchParamsPrototype)) {
      defineBuiltInAccessor(URLSearchParamsPrototype, "size", {
        get: function size() {
          var count = 0;
          forEach(this, function() {
            count++;
          });
          return count;
        },
        configurable: true,
        enumerable: true
      });
    }
  }
});

// dist/Util/Util.js
require_es_iterator_constructor();
require_es_iterator_filter();
require_es_iterator_find();
require_es_iterator_flat_map();
require_web_url_search_params_delete();
require_web_url_search_params_has();
require_web_url_search_params_size();
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);
//! src/Util/Util.ts
var Util_exports = {};
__export(Util_exports, {
  MwUri: () => MwUri,
  addEventListenerWithRemover: () => addEventListenerWithRemover,
  changeOpacityWhenMouseEnterOrLeave: () => changeOpacityWhenMouseEnterOrLeave,
  checkA11yConfirmKey: () => checkA11yConfirmKey,
  checkDependencies: () => checkDependencies,
  delay: () => delay,
  findVariants: () => findVariants,
  generateArray: () => generateArray,
  generateSvgDataUrl: () => generateSvgDataUrl,
  getBody: () => getBody,
  getWpSummaryContent: () => getWpSummaryContent,
  getWpTextbox1Content: () => getWpTextbox1Content,
  initMwApi: () => initMwApi,
  isValidKey: () => isValidKey,
  oouiConfirmWithStyle: () => oouiConfirmWithStyle,
  queryGlobalUserGroups: () => queryGlobalUserGroups,
  queryUserGroups: () => queryUserGroups,
  scrollTop: () => scrollTop,
  setWpSummaryContent: () => setWpSummaryContent,
  setWpTextbox1Content: () => setWpTextbox1Content,
  uniqueArray: () => uniqueArray,
  userIsInGroup: () => userIsInGroup
});
module.exports = __toCommonJS(Util_exports);
//! src/Util/modules/addEventListenerWithRemover.ts
var addEventListenerWithRemover = ({
  target,
  type,
  listener,
  options = {}
}) => {
  target.addEventListener(type, listener, options);
  return {
    remove: () => {
      target.removeEventListener(type, listener, options);
    }
  };
};
//! src/Util/modules/changeOpacityWhenMouseEnterOrLeave.ts
var changeOpacityWhenMouseEnterOrLeave = (event, opacity = 0.7) => {
  event.currentTarget.style.opacity = event.type === "mouseenter" ? "1" : opacity.toString();
};
//! src/Util/modules/checkA11yConfirmKey.ts
var checkA11yConfirmKey = (event) => {
  if (["click", "keydown"].includes(event.type)) {
    if (event.type === "keydown") {
      return ["Enter", " "].includes(event.key);
    }
    return true;
  }
  return false;
};
//! src/Util/modules/generateArray.ts
function generateArray(...args) {
  return args.flatMap((arg) => {
    if (Array.isArray(arg)) {
      return arg;
    }
    if (arg instanceof NodeList) {
      return [...arg];
    }
    return [arg];
  });
}
//! src/Util/modules/initMwApi.ts
function initMwApi(userAgent, apiUri) {
  const apiOptions = {
    ajax: {
      headers: {
        "Api-User-Agent": userAgent ? "YsArchives/1.1 (".concat(userAgent, ")") : "YsArchives/1.1"
      }
    }
  };
  if (apiUri) {
    return new mw.ForeignApi(apiUri, apiOptions);
  }
  return new mw.Api(apiOptions);
}
//! src/Util/modules/uniqueArray.ts
var uniqueArray = function uniqueArray2(args) {
  /**!
   * SPDX-License-Identifier: CC-BY-SA-4.0
   *
   * @source {@link https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array/922982}
   * @license CC-BY-SA-4.0
   */
  const result = [];
  var _iterator2 = _createForOfIteratorHelper(args), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      const item = _step2.value;
      if (!result.includes(item)) {
        result[result.length] = item;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return result;
};
//! src/Util/modules/checkDependencies.ts
function checkDependencies(_x, _x2) {
  return _checkDependencies.apply(this, arguments);
}
//! src/Util/modules/delay.ts
function _checkDependencies() {
  _checkDependencies = _asyncToGenerator(function* (gadgetNames, option) {
    const api = initMwApi("Util-CheckDependencies");
    const gadgets = uniqueArray(generateArray(gadgetNames));
    option || (option = 1);
    var _iterator3 = _createForOfIteratorHelper(gadgets), _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
        const gadget = _step3.value;
        if (option === "0" && mw.user.options.get("gadget-".concat(gadget)) || option === "1" && !mw.user.options.get("gadget-".concat(gadget))) {
          yield api.postWithEditToken({
            action: "options",
            change: "gadget-".concat(gadget, "=").concat(option)
          });
          yield mw.loader.using("ext.gadget.".concat(gadget));
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  });
  return _checkDependencies.apply(this, arguments);
}
var delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};
//! src/Util/modules/findVariants.ts
function findVariants(_x3) {
  return _findVariants.apply(this, arguments);
}
//! src/Util/modules/generateSvgDataUrl.ts
function _findVariants() {
  _findVariants = _asyncToGenerator(function* (text) {
    const api = initMwApi("Util-FindVariants");
    const VARIANTS = ["zh-hans", "zh-hant", "zh-cn", "zh-hk", "zh-mo", "zh-sg", "zh-my", "zh-tw"];
    const allVariants = [];
    const params = {
      action: "parse",
      contentmodel: "wikitext",
      format: "json",
      formatversion: "2",
      prop: ["displaytitle"],
      title: "temp",
      text
    };
    for (var _i2 = 0, _VARIANTS = VARIANTS; _i2 < _VARIANTS.length; _i2++) {
      var _response$query;
      const variant = _VARIANTS[_i2];
      params.uselang = variant;
      params.variant = variant;
      const response = yield api.post(params);
      const displaytitle = response === null || response === void 0 || (_response$query = response["query"]) === null || _response$query === void 0 ? void 0 : _response$query.displaytitle;
      const variantElement = document.createElement("variant");
      variantElement.innerHTML = displaytitle;
      if (variantElement.textContent) {
        allVariants[allVariants.length] = variantElement.textContent;
      }
    }
    return uniqueArray(allVariants);
  });
  return _findVariants.apply(this, arguments);
}
var generateSvgDataUrl = (svg) => {
  /**!
   * SPDX-License-Identifier: MIT
   *
   * @source svg-to-data-uri.js {@link https://github.com/heyallan/svg-to-data-uri/}
   * @author Allan Moreno
   * @license MIT {@link https://github.com/heyallan/svg-to-data-uri/blob/master/LICENSE}
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
  svg = svg.trim();
  svg = svg.slice(svg.indexOf("<svg"));
  if (!svg.startsWith("<svg") || !svg.endsWith("svg>")) {
    return "";
  }
  if (!svg.includes("http://www.w3.org/2000/svg")) {
    svg = svg.replace(/<svg/g, "<svg xmlns='http://www.w3.org/2000/svg'");
  }
  svg = svg.replace(/<!--.{1,}-->/g, "");
  svg = svg.replace(/version=["'](.{0,}?)["'](?=[\s>])/g, "");
  svg = svg.replace(/"'(.{1,})'"/g, "'$1'");
  svg = svg.replace(/"/g, "'");
  svg = svg.replace(/>\s{1,}</g, "><");
  svg = svg.replace(/\s{2,}/g, " ");
  svg = svg.trim();
  if (!svg.startsWith("<svg") || !svg.endsWith("svg>")) {
    return "";
  }
  svg = svg.replace(/&/g, "&amp;");
  svg = svg.replace(/[%#<>?[\\\]^`{|}]/g, encodeURIComponent);
  svg = "data:image/svg+xml,".concat(svg);
  return svg;
};
//! src/Util/modules/getBody.ts
var getBody = () => {
  return $.ready.then(() => {
    const $body = $("body");
    return $body;
  });
};
//! src/Util/modules/isValidKey.ts
var isValidKey = (object, key) => {
  return key in object;
};
//! src/Util/modules/mwUri.ts
var MwUri = class extends URL {
  extend(object) {
    for (var _i = 0, _Object$entries = Object.entries(object); _i < _Object$entries.length; _i++) {
      const [key, value] = _Object$entries[_i];
      this.searchParams.set(key, value);
    }
    return this;
  }
  getRelativePath() {
    return this.pathname + this.search + this.hash;
  }
};
//! src/Util/modules/oouiConfirmWithStyle.tsx
var import_ext_gadget = __toESM(require("ext.gadget.JSX"), 1);
var oouiConfirmWithStyle = (message) => OO.ui.confirm($(/* @__PURE__ */ import_ext_gadget.default.createElement("div", {
  className: "oo-ui-window-foot",
  style: {
    border: ".1rem solid #0645ad",
    display: "flex",
    justifyContent: "space-evenly"
  }
}, /* @__PURE__ */ import_ext_gadget.default.createElement("span", {
  style: {
    fontSize: "1.2rem",
    fontWeight: "500",
    lineHeight: "1.8",
    padding: ".4em 0"
  }
}, message)))).then((isConfirm) => isConfirm);
//! src/Util/modules/queryGlobalUserGroups.ts
function queryGlobalUserGroups(_x4) {
  return _queryGlobalUserGroups.apply(this, arguments);
}
//! src/Util/modules/queryUserGroups.ts
function _queryGlobalUserGroups() {
  _queryGlobalUserGroups = _asyncToGenerator(function* (guiuser) {
    const api = initMwApi("Util-QueryGlobalUserGroups");
    const CACHE_KEY_PREFIX = "ext.gadget.Util_queryGlobalUserGroups-";
    let groups = [];
    if (mw.storage.getObject(CACHE_KEY_PREFIX + guiuser)) {
      groups = mw.storage.getObject(CACHE_KEY_PREFIX + guiuser);
      groups = groups.filter((element) => {
        return element !== "*";
      });
    } else {
      const params = {
        action: "query",
        format: "json",
        formatversion: "2",
        meta: "globaluserinfo",
        guiuser,
        guiprop: "groups",
        smaxage: 600,
        maxage: 600
      };
      const response = yield api.get(params);
      const query = response["query"];
      if (query !== null && query !== void 0 && query.globaluserinfo) {
        var _query$globaluserinfo, _query$globaluserinfo2;
        groups = (_query$globaluserinfo = (_query$globaluserinfo2 = query.globaluserinfo) === null || _query$globaluserinfo2 === void 0 ? void 0 : _query$globaluserinfo2.groups) !== null && _query$globaluserinfo !== void 0 ? _query$globaluserinfo : [];
        groups = groups.filter((element) => {
          return element !== "*";
        });
        mw.storage.setObject(CACHE_KEY_PREFIX + guiuser, groups, 60 * 60);
      }
    }
    return {
      query: {
        globaluserinfo: {
          name: guiuser,
          groups
        }
      }
    };
  });
  return _queryGlobalUserGroups.apply(this, arguments);
}
function queryUserGroups(_x5) {
  return _queryUserGroups.apply(this, arguments);
}
//! src/Util/modules/scrollTop.ts
function _queryUserGroups() {
  _queryUserGroups = _asyncToGenerator(function* (users) {
    var _query$users;
    const api = initMwApi("Util-QueryUserGroups");
    const CACHE_KEY_PREFIX = "ext.gadget.Util_queryUserGroups-";
    const cachedQueryUsers = [];
    var _iterator4 = _createForOfIteratorHelper(users), _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
        const user = _step4.value;
        if (mw.storage.getObject(CACHE_KEY_PREFIX + user)) {
          let groups = mw.storage.getObject(CACHE_KEY_PREFIX + user);
          groups = groups.filter((element) => {
            return element !== "*";
          });
          cachedQueryUsers[cachedQueryUsers.length] = {
            name: user,
            groups
          };
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    const ususers = users.filter((v) => {
      return !mw.storage.getObject(CACHE_KEY_PREFIX + v);
    });
    const params = {
      ususers,
      action: "query",
      format: "json",
      formatversion: "2",
      list: "users",
      usprop: "groups",
      smaxage: 600,
      maxage: 600
    };
    const response = yield api.get(params);
    const query = response["query"];
    const queryUsers = [...(_query$users = query === null || query === void 0 ? void 0 : query.users) !== null && _query$users !== void 0 ? _query$users : [], ...cachedQueryUsers];
    for (var _i3 = 0, _queryUsers = queryUsers; _i3 < _queryUsers.length; _i3++) {
      const user = _queryUsers[_i3];
      if (user !== null && user !== void 0 && user.groups && user !== null && user !== void 0 && user.name) {
        let {
          groups
        } = user;
        groups = groups.filter((element) => {
          return element !== "*";
        });
        mw.storage.setObject(CACHE_KEY_PREFIX + user.name, groups, 60 * 60);
      }
    }
    return {
      query: {
        users: queryUsers
      }
    };
  });
  return _queryUserGroups.apply(this, arguments);
}
var scrollTop = (targetHeight, effectsOptionsOrDuration = {}) => {
  const options = typeof effectsOptionsOrDuration === "number" || typeof effectsOptionsOrDuration === "string" ? {
    duration: effectsOptionsOrDuration,
    easing: "linear"
  } : {
    duration: "slow",
    easing: "linear",
    ...effectsOptionsOrDuration
  };
  $(document).find("html, body").animate({
    scrollTop: targetHeight
  }, options);
};
//! src/Util/modules/userIsInGroup.ts
var userIsInGroup = (groups) => {
  const {
    wgUserGroups,
    wgGlobalGroups
  } = mw.config.get();
  return [...wgUserGroups || [], ...wgGlobalGroups || []].some((element) => {
    return generateArray(groups).includes(element);
  });
};
//! src/Util/modules/wpSummaryContent.ts
var getWpSummaryContent = ({
  $editForm
}) => {
  var _$editForm$find$val, _$editForm$find;
  return (_$editForm$find$val = (_$editForm$find = $editForm.find("#wpSummary")) === null || _$editForm$find === void 0 ? void 0 : _$editForm$find.val()) !== null && _$editForm$find$val !== void 0 ? _$editForm$find$val : "";
};
var setWpSummaryContent = ({
  $editForm,
  content
}) => {
  $editForm.find("#wpSummary").val(content);
};
//! src/Util/modules/wpTextbox1Content.ts
var getWpTextbox1Content = ({
  $editForm
}) => {
  var _$editForm$find$textS;
  return (_$editForm$find$textS = $editForm.find("#wpTextbox1").textSelection("getContents")) !== null && _$editForm$find$textS !== void 0 ? _$editForm$find$textS : "";
};
var setWpTextbox1Content = ({
  $editForm,
  content
}) => {
  $editForm.find("#wpTextbox1").textSelection("setContents", content);
};

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwtdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi1yYXcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmRleGVkLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1jYWxsYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1idWlsdC1pbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnZpcm9ubWVudC11c2VyLWFnZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYW4taW5zdGFuY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3JyZWN0LXByb3RvdHlwZS1nZXR0ZXIuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbi1hY2Nlc3Nvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaHRtbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1jcmVhdGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMtY29yZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5pdGVyYXRvci5jb25zdHJ1Y3Rvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1pdGVyYXRvci1kaXJlY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW5zLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLWl0ZXItcmVzdWx0LW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0b3ItY2xvc2UtYWxsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0b3ItY3JlYXRlLXByb3h5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2FsbC13aXRoLXNhZmUtaXRlcmF0aW9uLWNsb3NpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvci1oZWxwZXItdGhyb3dzLW9uLWludmFsaWQtaXRlcmF0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvci1oZWxwZXItd2l0aG91dC1jbG9zaW5nLW9uLWVhcmx5LWVycm9yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLml0ZXJhdG9yLmZpbHRlci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy1jbGF1c2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1hcnJheS1pdGVyYXRvci1tZXRob2QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jbGFzc29mLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1pdGVyYXRvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuaXRlcmF0b3IuZmluZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1pdGVyYXRvci1mbGF0dGVuYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5pdGVyYXRvci5mbGF0LW1hcC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXN0cmluZy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3ZhbGlkYXRlLWFyZ3VtZW50cy1sZW5ndGguanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnVybC1zZWFyY2gtcGFyYW1zLmRlbGV0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIudXJsLXNlYXJjaC1wYXJhbXMuaGFzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi51cmwtc2VhcmNoLXBhcmFtcy5zaXplLmpzIiwgInNyYy9VdGlsL1V0aWwudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9hZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9jaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlLnRzIiwgInNyYy9VdGlsL21vZHVsZXMvY2hlY2tBMTF5Q29uZmlybUtleS50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2dlbmVyYXRlQXJyYXkudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9pbml0TXdBcGkudHMiLCAic3JjL1V0aWwvbW9kdWxlcy91bmlxdWVBcnJheS50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2NoZWNrRGVwZW5kZW5jaWVzLnRzIiwgInNyYy9VdGlsL21vZHVsZXMvZGVsYXkudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9maW5kVmFyaWFudHMudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9nZW5lcmF0ZVN2Z0RhdGFVcmwudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9nZXRCb2R5LnRzIiwgInNyYy9VdGlsL21vZHVsZXMvaXNWYWxpZEtleS50cyIsICJzcmMvVXRpbC9tb2R1bGVzL213VXJpLnRzIiwgInNyYy9VdGlsL21vZHVsZXMvb291aUNvbmZpcm1XaXRoU3R5bGUudHN4IiwgInNyYy9VdGlsL21vZHVsZXMvcXVlcnlHbG9iYWxVc2VyR3JvdXBzLnRzIiwgInNyYy9VdGlsL21vZHVsZXMvcXVlcnlVc2VyR3JvdXBzLnRzIiwgInNyYy9VdGlsL21vZHVsZXMvc2Nyb2xsVG9wLnRzIiwgInNyYy9VdGlsL21vZHVsZXMvdXNlcklzSW5Hcm91cC50cyIsICJzcmMvVXRpbC9tb2R1bGVzL3dwU3VtbWFyeUNvbnRlbnQudHMiLCAic3JjL1V0aWwvbW9kdWxlcy93cFRleHRib3gxQ29udGVudC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiJ3VzZSBzdHJpY3QnO1xudmFyIGNoZWNrID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAmJiBpdC5NYXRoID09PSBNYXRoICYmIGl0O1xufTtcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbm1vZHVsZS5leHBvcnRzID1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWdsb2JhbC10aGlzIC0tIHNhZmVcbiAgY2hlY2sodHlwZW9mIGdsb2JhbFRoaXMgPT0gJ29iamVjdCcgJiYgZ2xvYmFsVGhpcykgfHxcbiAgY2hlY2sodHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmKSB8fFxuICBjaGVjayh0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCkgfHxcbiAgY2hlY2sodHlwZW9mIHRoaXMgPT0gJ29iamVjdCcgJiYgdGhpcykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jIC0tIGZhbGxiYWNrXG4gIChmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KSgpIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gRGV0ZWN0IElFOCdzIGluY29tcGxldGUgZGVmaW5lUHJvcGVydHkgaW1wbGVtZW50YXRpb25cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAxLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KVsxXSAhPT0gNztcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1mdW5jdGlvbi1wcm90b3R5cGUtYmluZCAtLSBzYWZlXG4gIHZhciB0ZXN0ID0gKGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSkuYmluZCgpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zIC0tIHNhZmVcbiAgcmV0dXJuIHR5cGVvZiB0ZXN0ICE9ICdmdW5jdGlvbicgfHwgdGVzdC5oYXNPd25Qcm9wZXJ0eSgncHJvdG90eXBlJyk7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIGNhbGwgPSBGdW5jdGlvbi5wcm90b3R5cGUuY2FsbDtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1mdW5jdGlvbi1wcm90b3R5cGUtYmluZCAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9CSU5EID8gY2FsbC5iaW5kKGNhbGwpIDogZnVuY3Rpb24gKCkge1xuICByZXR1cm4gY2FsbC5hcHBseShjYWxsLCBhcmd1bWVudHMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gTmFzaG9ybiB+IEpESzggYnVnXG52YXIgTkFTSE9STl9CVUcgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgISRwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsgMTogMiB9LCAxKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGVgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnByb3BlcnR5aXNlbnVtZXJhYmxlXG5leHBvcnRzLmYgPSBOQVNIT1JOX0JVRyA/IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgVik7XG4gIHJldHVybiAhIWRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci5lbnVtZXJhYmxlO1xufSA6ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgY2FsbCA9IEZ1bmN0aW9uUHJvdG90eXBlLmNhbGw7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZnVuY3Rpb24tcHJvdG90eXBlLWJpbmQgLS0gc2FmZVxudmFyIHVuY3VycnlUaGlzV2l0aEJpbmQgPSBOQVRJVkVfQklORCAmJiBGdW5jdGlvblByb3RvdHlwZS5iaW5kLmJpbmQoY2FsbCwgY2FsbCk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX0JJTkQgPyB1bmN1cnJ5VGhpc1dpdGhCaW5kIDogZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNhbGwuYXBwbHkoZm4sIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyIHRvU3RyaW5nID0gdW5jdXJyeVRoaXMoe30udG9TdHJpbmcpO1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gc3RyaW5nU2xpY2UodG9TdHJpbmcoaXQpLCA4LCAtMSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG52YXIgc3BsaXQgPSB1bmN1cnJ5VGhpcygnJy5zcGxpdCk7XG5cbi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG5tb2R1bGUuZXhwb3J0cyA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gdGhyb3dzIGFuIGVycm9yIGluIHJoaW5vLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvcmhpbm8vaXNzdWVzLzM0NlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zIC0tIHNhZmVcbiAgcmV0dXJuICEkT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCk7XG59KSA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY2xhc3NvZihpdCkgPT09ICdTdHJpbmcnID8gc3BsaXQoaXQsICcnKSA6ICRPYmplY3QoaXQpO1xufSA6ICRPYmplY3Q7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gd2UgY2FuJ3QgdXNlIGp1c3QgYGl0ID09IG51bGxgIHNpbmNlIG9mIGBkb2N1bWVudC5hbGxgIHNwZWNpYWwgY2FzZVxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdC1hZWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA9PT0gbnVsbCB8fCBpdCA9PT0gdW5kZWZpbmVkO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVxdWlyZW9iamVjdGNvZXJjaWJsZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGlzTnVsbE9yVW5kZWZpbmVkKGl0KSkgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSW5kZXhlZE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGl0KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtSXNIVE1MRERBLWludGVybmFsLXNsb3RcbnZhciBkb2N1bWVudEFsbCA9IHR5cGVvZiBkb2N1bWVudCA9PSAnb2JqZWN0JyAmJiBkb2N1bWVudC5hbGw7XG5cbi8vIGBJc0NhbGxhYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNjYWxsYWJsZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vbm8tdHlwZW9mLXVuZGVmaW5lZCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgZG9jdW1lbnRBbGwgPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnRBbGwgIT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09ICdmdW5jdGlvbicgfHwgYXJndW1lbnQgPT09IGRvY3VtZW50QWxsO1xufSA6IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09ICdmdW5jdGlvbic7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IGlzQ2FsbGFibGUoaXQpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIGFGdW5jdGlvbiA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gaXNDYWxsYWJsZShhcmd1bWVudCkgPyBhcmd1bWVudCA6IHVuZGVmaW5lZDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWVzcGFjZSwgbWV0aG9kKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGFGdW5jdGlvbihnbG9iYWxUaGlzW25hbWVzcGFjZV0pIDogZ2xvYmFsVGhpc1tuYW1lc3BhY2VdICYmIGdsb2JhbFRoaXNbbmFtZXNwYWNlXVttZXRob2RdO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gdW5jdXJyeVRoaXMoe30uaXNQcm90b3R5cGVPZik7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcblxudmFyIG5hdmlnYXRvciA9IGdsb2JhbFRoaXMubmF2aWdhdG9yO1xudmFyIHVzZXJBZ2VudCA9IG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudXNlckFnZW50O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVzZXJBZ2VudCA/IFN0cmluZyh1c2VyQWdlbnQpIDogJyc7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdXNlci1hZ2VudCcpO1xuXG52YXIgcHJvY2VzcyA9IGdsb2JhbFRoaXMucHJvY2VzcztcbnZhciBEZW5vID0gZ2xvYmFsVGhpcy5EZW5vO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zIHx8IERlbm8gJiYgRGVuby52ZXJzaW9uO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjg7XG52YXIgbWF0Y2gsIHZlcnNpb247XG5cbmlmICh2OCkge1xuICBtYXRjaCA9IHY4LnNwbGl0KCcuJyk7XG4gIC8vIGluIG9sZCBDaHJvbWUsIHZlcnNpb25zIG9mIFY4IGlzbid0IFY4ID0gQ2hyb21lIC8gMTBcbiAgLy8gYnV0IHRoZWlyIGNvcnJlY3QgdmVyc2lvbnMgYXJlIG5vdCBpbnRlcmVzdGluZyBmb3IgdXNcbiAgdmVyc2lvbiA9IG1hdGNoWzBdID4gMCAmJiBtYXRjaFswXSA8IDQgPyAxIDogKyhtYXRjaFswXSArIG1hdGNoWzFdKTtcbn1cblxuLy8gQnJvd3NlckZTIE5vZGVKUyBgcHJvY2Vzc2AgcG9seWZpbGwgaW5jb3JyZWN0bHkgc2V0IGAudjhgIHRvIGAwLjBgXG4vLyBzbyBjaGVjayBgdXNlckFnZW50YCBldmVuIGlmIGAudjhgIGV4aXN0cywgYnV0IDBcbmlmICghdmVyc2lvbiAmJiB1c2VyQWdlbnQpIHtcbiAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8oXFxkKykvKTtcbiAgaWYgKCFtYXRjaCB8fCBtYXRjaFsxXSA+PSA3NCkge1xuICAgIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9DaHJvbWVcXC8oXFxkKykvKTtcbiAgICBpZiAobWF0Y2gpIHZlcnNpb24gPSArbWF0Y2hbMV07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJzaW9uO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdjgtdmVyc2lvbicpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xuXG52YXIgJFN0cmluZyA9IGdsb2JhbFRoaXMuU3RyaW5nO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSAhIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN5bWJvbCA9IFN5bWJvbCgnc3ltYm9sIGRldGVjdGlvbicpO1xuICAvLyBDaHJvbWUgMzggU3ltYm9sIGhhcyBpbmNvcnJlY3QgdG9TdHJpbmcgY29udmVyc2lvblxuICAvLyBgZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzYCBwb2x5ZmlsbCBzeW1ib2xzIGNvbnZlcnRlZCB0byBvYmplY3QgYXJlIG5vdCBTeW1ib2wgaW5zdGFuY2VzXG4gIC8vIG5iOiBEbyBub3QgY2FsbCBgU3RyaW5nYCBkaXJlY3RseSB0byBhdm9pZCB0aGlzIGJlaW5nIG9wdGltaXplZCBvdXQgdG8gYHN5bWJvbCsnJ2Agd2hpY2ggd2lsbCxcbiAgLy8gb2YgY291cnNlLCBmYWlsLlxuICByZXR1cm4gISRTdHJpbmcoc3ltYm9sKSB8fCAhKE9iamVjdChzeW1ib2wpIGluc3RhbmNlb2YgU3ltYm9sKSB8fFxuICAgIC8vIENocm9tZSAzOC00MCBzeW1ib2xzIGFyZSBub3QgaW5oZXJpdGVkIGZyb20gRE9NIGNvbGxlY3Rpb25zIHByb3RvdHlwZXMgdG8gaW5zdGFuY2VzXG4gICAgIVN5bWJvbC5zaGFtICYmIFY4X1ZFUlNJT04gJiYgVjhfVkVSU0lPTiA8IDQxO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX1NZTUJPTCAmJlxuICAhU3ltYm9sLnNoYW0gJiZcbiAgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbm1vZHVsZS5leHBvcnRzID0gVVNFX1NZTUJPTF9BU19VSUQgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyICRTeW1ib2wgPSBnZXRCdWlsdEluKCdTeW1ib2wnKTtcbiAgcmV0dXJuIGlzQ2FsbGFibGUoJFN5bWJvbCkgJiYgaXNQcm90b3R5cGVPZigkU3ltYm9sLnByb3RvdHlwZSwgJE9iamVjdChpdCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJFN0cmluZyA9IFN0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gJFN0cmluZyhhcmd1bWVudCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuICdPYmplY3QnO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogSXNDYWxsYWJsZShhcmd1bWVudCkgaXMgdHJ1ZWBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc0NhbGxhYmxlKGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcih0cnlUb1N0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG5cbi8vIGBHZXRNZXRob2RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1nZXRtZXRob2Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFYsIFApIHtcbiAgdmFyIGZ1bmMgPSBWW1BdO1xuICByZXR1cm4gaXNOdWxsT3JVbmRlZmluZWQoZnVuYykgPyB1bmRlZmluZWQgOiBhQ2FsbGFibGUoZnVuYyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgT3JkaW5hcnlUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9yZGluYXJ5dG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAocHJlZiA9PT0gJ3N0cmluZycgJiYgaXNDYWxsYWJsZShmbiA9IGlucHV0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKGlzQ2FsbGFibGUoZm4gPSBpbnB1dC52YWx1ZU9mKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHByZWYgIT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgZGVmaW5lUHJvcGVydHkoZ2xvYmFsVGhpcywga2V5LCB7IHZhbHVlOiB2YWx1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBnbG9iYWxUaGlzW2tleV0gPSB2YWx1ZTtcbiAgfSByZXR1cm4gdmFsdWU7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xuXG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbFRoaXNbU0hBUkVEXSB8fCBkZWZpbmVHbG9iYWxQcm9wZXJ0eShTSEFSRUQsIHt9KTtcblxuKHN0b3JlLnZlcnNpb25zIHx8IChzdG9yZS52ZXJzaW9ucyA9IFtdKSkucHVzaCh7XG4gIHZlcnNpb246ICczLjQ1LjEnLFxuICBtb2RlOiBJU19QVVJFID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTQtMjAyNSBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KScsXG4gIGxpY2Vuc2U6ICdodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9ibG9iL3YzLjQ1LjEvTElDRU5TRScsXG4gIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzJ1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgfHwge30pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbi8vIGBUb09iamVjdGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvb2JqZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gJE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcblxudmFyIGhhc093blByb3BlcnR5ID0gdW5jdXJyeVRoaXMoe30uaGFzT3duUHJvcGVydHkpO1xuXG4vLyBgSGFzT3duUHJvcGVydHlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1oYXNvd25wcm9wZXJ0eVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1oYXNvd24gLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaGFzT3duIHx8IGZ1bmN0aW9uIGhhc093bihpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eSh0b09iamVjdChpdCksIGtleSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyIGlkID0gMDtcbnZhciBwb3N0Zml4ID0gTWF0aC5yYW5kb20oKTtcbnZhciB0b1N0cmluZyA9IHVuY3VycnlUaGlzKDEuMS50b1N0cmluZyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnICsgKGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXkpICsgJylfJyArIHRvU3RyaW5nKCsraWQgKyBwb3N0Zml4LCAzNik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciBTeW1ib2wgPSBnbG9iYWxUaGlzLlN5bWJvbDtcbnZhciBXZWxsS25vd25TeW1ib2xzU3RvcmUgPSBzaGFyZWQoJ3drcycpO1xudmFyIGNyZWF0ZVdlbGxLbm93blN5bWJvbCA9IFVTRV9TWU1CT0xfQVNfVUlEID8gU3ltYm9sWydmb3InXSB8fCBTeW1ib2wgOiBTeW1ib2wgJiYgU3ltYm9sLndpdGhvdXRTZXR0ZXIgfHwgdWlkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGlmICghaGFzT3duKFdlbGxLbm93blN5bWJvbHNTdG9yZSwgbmFtZSkpIHtcbiAgICBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV0gPSBOQVRJVkVfU1lNQk9MICYmIGhhc093bihTeW1ib2wsIG5hbWUpXG4gICAgICA/IFN5bWJvbFtuYW1lXVxuICAgICAgOiBjcmVhdGVXZWxsS25vd25TeW1ib2woJ1N5bWJvbC4nICsgbmFtZSk7XG4gIH0gcmV0dXJuIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgb3JkaW5hcnlUb1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vcmRpbmFyeS10by1wcmltaXRpdmUnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG52YXIgVE9fUFJJTUlUSVZFID0gd2VsbEtub3duU3ltYm9sKCd0b1ByaW1pdGl2ZScpO1xuXG4vLyBgVG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b3ByaW1pdGl2ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5wdXQsIHByZWYpIHtcbiAgaWYgKCFpc09iamVjdChpbnB1dCkgfHwgaXNTeW1ib2woaW5wdXQpKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBleG90aWNUb1ByaW0gPSBnZXRNZXRob2QoaW5wdXQsIFRPX1BSSU1JVElWRSk7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChleG90aWNUb1ByaW0pIHtcbiAgICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ2RlZmF1bHQnO1xuICAgIHJlc3VsdCA9IGNhbGwoZXhvdGljVG9QcmltLCBpbnB1dCwgcHJlZik7XG4gICAgaWYgKCFpc09iamVjdChyZXN1bHQpIHx8IGlzU3ltYm9sKHJlc3VsdCkpIHJldHVybiByZXN1bHQ7XG4gICAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG4gIH1cbiAgaWYgKHByZWYgPT09IHVuZGVmaW5lZCkgcHJlZiA9ICdudW1iZXInO1xuICByZXR1cm4gb3JkaW5hcnlUb1ByaW1pdGl2ZShpbnB1dCwgcHJlZik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1zeW1ib2wnKTtcblxuLy8gYFRvUHJvcGVydHlLZXlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b3Byb3BlcnR5a2V5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIga2V5ID0gdG9QcmltaXRpdmUoYXJndW1lbnQsICdzdHJpbmcnKTtcbiAgcmV0dXJuIGlzU3ltYm9sKGtleSkgPyBrZXkgOiBrZXkgKyAnJztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyIGRvY3VtZW50ID0gZ2xvYmFsVGhpcy5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIEVYSVNUUyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEVYSVNUUyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xuXG4vLyBUaGFua3MgdG8gSUU4IGZvciBpdHMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIURFU0NSSVBUT1JTICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjcmVhdGVFbGVtZW50KCdkaXYnKSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9XG4gIH0pLmEgIT09IDc7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5ZGVzY3JpcHRvclxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSW5kZXhlZE9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzT3duKE8sIFApKSByZXR1cm4gY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKCFjYWxsKHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlLmYsIE8sIFApLCBPW1BdKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gVjggfiBDaHJvbWUgMzYtXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMzM0XG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSwgJ3Byb3RvdHlwZScsIHtcbiAgICB2YWx1ZTogNDIsXG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pLnByb3RvdHlwZSAhPT0gNDI7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciAkU3RyaW5nID0gU3RyaW5nO1xudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBBc3NlcnQ6IFR5cGUoYXJndW1lbnQpIGlzIE9iamVjdGBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc09iamVjdChhcmd1bWVudCkpIHJldHVybiBhcmd1bWVudDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJFN0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhbiBvYmplY3QnKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcbnZhciBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1ZycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgJGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIEVOVU1FUkFCTEUgPSAnZW51bWVyYWJsZSc7XG52YXIgQ09ORklHVVJBQkxFID0gJ2NvbmZpZ3VyYWJsZSc7XG52YXIgV1JJVEFCTEUgPSAnd3JpdGFibGUnO1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnR5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnR5XG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/IFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID8gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAodHlwZW9mIE8gPT09ICdmdW5jdGlvbicgJiYgUCA9PT0gJ3Byb3RvdHlwZScgJiYgJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzICYmIFdSSVRBQkxFIGluIEF0dHJpYnV0ZXMgJiYgIUF0dHJpYnV0ZXNbV1JJVEFCTEVdKSB7XG4gICAgdmFyIGN1cnJlbnQgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuICAgIGlmIChjdXJyZW50ICYmIGN1cnJlbnRbV1JJVEFCTEVdKSB7XG4gICAgICBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgICAgIEF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogQ09ORklHVVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0NPTkZJR1VSQUJMRV0gOiBjdXJyZW50W0NPTkZJR1VSQUJMRV0sXG4gICAgICAgIGVudW1lcmFibGU6IEVOVU1FUkFCTEUgaW4gQXR0cmlidXRlcyA/IEF0dHJpYnV0ZXNbRU5VTUVSQUJMRV0gOiBjdXJyZW50W0VOVU1FUkFCTEVdLFxuICAgICAgICB3cml0YWJsZTogZmFsc2VcbiAgICAgIH07XG4gICAgfVxuICB9IHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG59IDogJGRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBuZXcgJFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwga2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBnZXREZXNjcmlwdG9yID0gREVTQ1JJUFRPUlMgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxudmFyIEVYSVNUUyA9IGhhc093bihGdW5jdGlvblByb3RvdHlwZSwgJ25hbWUnKTtcbi8vIGFkZGl0aW9uYWwgcHJvdGVjdGlvbiBmcm9tIG1pbmlmaWVkIC8gbWFuZ2xlZCAvIGRyb3BwZWQgZnVuY3Rpb24gbmFtZXNcbnZhciBQUk9QRVIgPSBFWElTVFMgJiYgKGZ1bmN0aW9uIHNvbWV0aGluZygpIHsgLyogZW1wdHkgKi8gfSkubmFtZSA9PT0gJ3NvbWV0aGluZyc7XG52YXIgQ09ORklHVVJBQkxFID0gRVhJU1RTICYmICghREVTQ1JJUFRPUlMgfHwgKERFU0NSSVBUT1JTICYmIGdldERlc2NyaXB0b3IoRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJykuY29uZmlndXJhYmxlKSk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBFWElTVFM6IEVYSVNUUyxcbiAgUFJPUEVSOiBQUk9QRVIsXG4gIENPTkZJR1VSQUJMRTogQ09ORklHVVJBQkxFXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbnZhciBmdW5jdGlvblRvU3RyaW5nID0gdW5jdXJyeVRoaXMoRnVuY3Rpb24udG9TdHJpbmcpO1xuXG4vLyB0aGlzIGhlbHBlciBicm9rZW4gaW4gYGNvcmUtanNAMy40LjEtMy40LjRgLCBzbyB3ZSBjYW4ndCB1c2UgYHNoYXJlZGAgaGVscGVyXG5pZiAoIWlzQ2FsbGFibGUoc3RvcmUuaW5zcGVjdFNvdXJjZSkpIHtcbiAgc3RvcmUuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBmdW5jdGlvblRvU3RyaW5nKGl0KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdG9yZS5pbnNwZWN0U291cmNlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgV2Vha01hcCA9IGdsb2JhbFRoaXMuV2Vha01hcDtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0NhbGxhYmxlKFdlYWtNYXApICYmIC9uYXRpdmUgY29kZS8udGVzdChTdHJpbmcoV2Vha01hcCkpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xuXG52YXIga2V5cyA9IHNoYXJlZCgna2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIGtleXNba2V5XSB8fCAoa2V5c1trZXldID0gdWlkKGtleSkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfV0VBS19NQVAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2Vhay1tYXAtYmFzaWMtZGV0ZWN0aW9uJyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEID0gJ09iamVjdCBhbHJlYWR5IGluaXRpYWxpemVkJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWxUaGlzLlR5cGVFcnJvcjtcbnZhciBXZWFrTWFwID0gZ2xvYmFsVGhpcy5XZWFrTWFwO1xudmFyIHNldCwgZ2V0LCBoYXM7XG5cbnZhciBlbmZvcmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBoYXMoaXQpID8gZ2V0KGl0KSA6IHNldChpdCwge30pO1xufTtcblxudmFyIGdldHRlckZvciA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgc3RhdGU7XG4gICAgaWYgKCFpc09iamVjdChpdCkgfHwgKHN0YXRlID0gZ2V0KGl0KSkudHlwZSAhPT0gVFlQRSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW5jb21wYXRpYmxlIHJlY2VpdmVyLCAnICsgVFlQRSArICcgcmVxdWlyZWQnKTtcbiAgICB9IHJldHVybiBzdGF0ZTtcbiAgfTtcbn07XG5cbmlmIChOQVRJVkVfV0VBS19NQVAgfHwgc2hhcmVkLnN0YXRlKSB7XG4gIHZhciBzdG9yZSA9IHNoYXJlZC5zdGF0ZSB8fCAoc2hhcmVkLnN0YXRlID0gbmV3IFdlYWtNYXAoKSk7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXNlbGYtYXNzaWduIC0tIHByb3RvdHlwZSBtZXRob2RzIHByb3RlY3Rpb24gKi9cbiAgc3RvcmUuZ2V0ID0gc3RvcmUuZ2V0O1xuICBzdG9yZS5oYXMgPSBzdG9yZS5oYXM7XG4gIHN0b3JlLnNldCA9IHN0b3JlLnNldDtcbiAgLyogZXNsaW50LWVuYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoc3RvcmUuaGFzKGl0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCk7XG4gICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG4gICAgc3RvcmUuc2V0KGl0LCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gc3RvcmUuZ2V0KGl0KSB8fCB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHN0b3JlLmhhcyhpdCk7XG4gIH07XG59IGVsc2Uge1xuICB2YXIgU1RBVEUgPSBzaGFyZWRLZXkoJ3N0YXRlJyk7XG4gIGhpZGRlbktleXNbU1RBVEVdID0gdHJ1ZTtcbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIGlmIChoYXNPd24oaXQsIFNUQVRFKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCk7XG4gICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KGl0LCBTVEFURSwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGhhc093bihpdCwgU1RBVEUpID8gaXRbU1RBVEVdIDoge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0LFxuICBnZXQ6IGdldCxcbiAgaGFzOiBoYXMsXG4gIGVuZm9yY2U6IGVuZm9yY2UsXG4gIGdldHRlckZvcjogZ2V0dGVyRm9yXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tbmFtZScpLkNPTkZJR1VSQUJMRTtcbnZhciBpbnNwZWN0U291cmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xuXG52YXIgZW5mb3JjZUludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmVuZm9yY2U7XG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0O1xudmFyICRTdHJpbmcgPSBTdHJpbmc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBzdHJpbmdTbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcbnZhciByZXBsYWNlID0gdW5jdXJyeVRoaXMoJycucmVwbGFjZSk7XG52YXIgam9pbiA9IHVuY3VycnlUaGlzKFtdLmpvaW4pO1xuXG52YXIgQ09ORklHVVJBQkxFX0xFTkdUSCA9IERFU0NSSVBUT1JTICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdsZW5ndGgnLCB7IHZhbHVlOiA4IH0pLmxlbmd0aCAhPT0gODtcbn0pO1xuXG52YXIgVEVNUExBVEUgPSBTdHJpbmcoU3RyaW5nKS5zcGxpdCgnU3RyaW5nJyk7XG5cbnZhciBtYWtlQnVpbHRJbiA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlLCBuYW1lLCBvcHRpb25zKSB7XG4gIGlmIChzdHJpbmdTbGljZSgkU3RyaW5nKG5hbWUpLCAwLCA3KSA9PT0gJ1N5bWJvbCgnKSB7XG4gICAgbmFtZSA9ICdbJyArIHJlcGxhY2UoJFN0cmluZyhuYW1lKSwgL15TeW1ib2xcXCgoW14pXSopXFwpLiokLywgJyQxJykgKyAnXSc7XG4gIH1cbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5nZXR0ZXIpIG5hbWUgPSAnZ2V0ICcgKyBuYW1lO1xuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnNldHRlcikgbmFtZSA9ICdzZXQgJyArIG5hbWU7XG4gIGlmICghaGFzT3duKHZhbHVlLCAnbmFtZScpIHx8IChDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSAmJiB2YWx1ZS5uYW1lICE9PSBuYW1lKSkge1xuICAgIGlmIChERVNDUklQVE9SUykgZGVmaW5lUHJvcGVydHkodmFsdWUsICduYW1lJywgeyB2YWx1ZTogbmFtZSwgY29uZmlndXJhYmxlOiB0cnVlIH0pO1xuICAgIGVsc2UgdmFsdWUubmFtZSA9IG5hbWU7XG4gIH1cbiAgaWYgKENPTkZJR1VSQUJMRV9MRU5HVEggJiYgb3B0aW9ucyAmJiBoYXNPd24ob3B0aW9ucywgJ2FyaXR5JykgJiYgdmFsdWUubGVuZ3RoICE9PSBvcHRpb25zLmFyaXR5KSB7XG4gICAgZGVmaW5lUHJvcGVydHkodmFsdWUsICdsZW5ndGgnLCB7IHZhbHVlOiBvcHRpb25zLmFyaXR5IH0pO1xuICB9XG4gIHRyeSB7XG4gICAgaWYgKG9wdGlvbnMgJiYgaGFzT3duKG9wdGlvbnMsICdjb25zdHJ1Y3RvcicpICYmIG9wdGlvbnMuY29uc3RydWN0b3IpIHtcbiAgICAgIGlmIChERVNDUklQVE9SUykgZGVmaW5lUHJvcGVydHkodmFsdWUsICdwcm90b3R5cGUnLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTtcbiAgICAvLyBpbiBWOCB+IENocm9tZSA1MywgcHJvdG90eXBlcyBvZiBzb21lIG1ldGhvZHMsIGxpa2UgYEFycmF5LnByb3RvdHlwZS52YWx1ZXNgLCBhcmUgbm9uLXdyaXRhYmxlXG4gICAgfSBlbHNlIGlmICh2YWx1ZS5wcm90b3R5cGUpIHZhbHVlLnByb3RvdHlwZSA9IHVuZGVmaW5lZDtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICB2YXIgc3RhdGUgPSBlbmZvcmNlSW50ZXJuYWxTdGF0ZSh2YWx1ZSk7XG4gIGlmICghaGFzT3duKHN0YXRlLCAnc291cmNlJykpIHtcbiAgICBzdGF0ZS5zb3VyY2UgPSBqb2luKFRFTVBMQVRFLCB0eXBlb2YgbmFtZSA9PSAnc3RyaW5nJyA/IG5hbWUgOiAnJyk7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcblxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXh0ZW5kLW5hdGl2ZSAtLSByZXF1aXJlZFxuRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nID0gbWFrZUJ1aWx0SW4oZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKHRoaXMpICYmIGdldEludGVybmFsU3RhdGUodGhpcykuc291cmNlIHx8IGluc3BlY3RTb3VyY2UodGhpcyk7XG59LCAndG9TdHJpbmcnKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBtYWtlQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9tYWtlLWJ1aWx0LWluJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbHVlLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9O1xuICB2YXIgc2ltcGxlID0gb3B0aW9ucy5lbnVtZXJhYmxlO1xuICB2YXIgbmFtZSA9IG9wdGlvbnMubmFtZSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uYW1lIDoga2V5O1xuICBpZiAoaXNDYWxsYWJsZSh2YWx1ZSkpIG1ha2VCdWlsdEluKHZhbHVlLCBuYW1lLCBvcHRpb25zKTtcbiAgaWYgKG9wdGlvbnMuZ2xvYmFsKSB7XG4gICAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gICAgZWxzZSBkZWZpbmVHbG9iYWxQcm9wZXJ0eShrZXksIHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFvcHRpb25zLnVuc2FmZSkgZGVsZXRlIE9ba2V5XTtcbiAgICAgIGVsc2UgaWYgKE9ba2V5XSkgc2ltcGxlID0gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gICAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gICAgZWxzZSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKE8sIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6ICFvcHRpb25zLm5vbkNvbmZpZ3VyYWJsZSxcbiAgICAgIHdyaXRhYmxlOiAhb3B0aW9ucy5ub25Xcml0YWJsZVxuICAgIH0pO1xuICB9IHJldHVybiBPO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5cbi8vIGBNYXRoLnRydW5jYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbWF0aC50cnVuY1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW1hdGgtdHJ1bmMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBNYXRoLnRydW5jIHx8IGZ1bmN0aW9uIHRydW5jKHgpIHtcbiAgdmFyIG4gPSAreDtcbiAgcmV0dXJuIChuID4gMCA/IGZsb29yIDogY2VpbCkobik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0cnVuYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9tYXRoLXRydW5jJyk7XG5cbi8vIGBUb0ludGVnZXJPckluZmluaXR5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9pbnRlZ2Vyb3JpbmZpbml0eVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIG51bWJlciA9ICthcmd1bWVudDtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgcmV0dXJuIG51bWJlciAhPT0gbnVtYmVyIHx8IG51bWJlciA9PT0gMCA/IDAgOiB0cnVuYyhudW1iZXIpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG5cbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gSGVscGVyIGZvciBhIHBvcHVsYXIgcmVwZWF0aW5nIGNhc2Ugb2YgdGhlIHNwZWM6XG4vLyBMZXQgaW50ZWdlciBiZSA/IFRvSW50ZWdlcihpbmRleCkuXG4vLyBJZiBpbnRlZ2VyIDwgMCwgbGV0IHJlc3VsdCBiZSBtYXgoKGxlbmd0aCArIGludGVnZXIpLCAwKTsgZWxzZSBsZXQgcmVzdWx0IGJlIG1pbihpbnRlZ2VyLCBsZW5ndGgpLlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICB2YXIgaW50ZWdlciA9IHRvSW50ZWdlck9ySW5maW5pdHkoaW5kZXgpO1xuICByZXR1cm4gaW50ZWdlciA8IDAgPyBtYXgoaW50ZWdlciArIGxlbmd0aCwgMCkgOiBtaW4oaW50ZWdlciwgbGVuZ3RoKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIGBUb0xlbmd0aGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvbGVuZ3RoXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIgbGVuID0gdG9JbnRlZ2VyT3JJbmZpbml0eShhcmd1bWVudCk7XG4gIHJldHVybiBsZW4gPiAwID8gbWluKGxlbiwgMHgxRkZGRkZGRkZGRkZGRikgOiAwOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcblxuLy8gYExlbmd0aE9mQXJyYXlMaWtlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbGVuZ3Rob2ZhcnJheWxpa2Vcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdG9MZW5ndGgob2JqLmxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXgnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnsgaW5kZXhPZiwgaW5jbHVkZXMgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgICBpZiAobGVuZ3RoID09PSAwKSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICAgIGlmICh2YWx1ZSAhPT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgIGlmICgoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykgJiYgT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmNsdWRlc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXG4gIGluY2x1ZGVzOiBjcmVhdGVNZXRob2QodHJ1ZSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5kZXhPZmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2ZcbiAgaW5kZXhPZjogY3JlYXRlTWV0aG9kKGZhbHNlKVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBpbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5kZXhPZjtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBwdXNoID0gdW5jdXJyeVRoaXMoW10ucHVzaCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pICFoYXNPd24oaGlkZGVuS2V5cywga2V5KSAmJiBoYXNPd24oTywga2V5KSAmJiBwdXNoKHJlc3VsdCwga2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhc093bihPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5pbmRleE9mKHJlc3VsdCwga2V5KSB8fCBwdXNoKHJlc3VsdCwga2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBJRTgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gW1xuICAnY29uc3RydWN0b3InLFxuICAnaGFzT3duUHJvcGVydHknLFxuICAnaXNQcm90b3R5cGVPZicsXG4gICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG4gICd0b0xvY2FsZVN0cmluZycsXG4gICd0b1N0cmluZycsXG4gICd2YWx1ZU9mJ1xuXTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG52YXIgaGlkZGVuS2V5cyA9IGVudW1CdWdLZXlzLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHluYW1lc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eW5hbWVzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xuXG52YXIgY29uY2F0ID0gdW5jdXJyeVRoaXMoW10uY29uY2F0KTtcblxuLy8gYWxsIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBub24tZW51bWVyYWJsZSBhbmQgc3ltYm9sc1xubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCdSZWZsZWN0JywgJ293bktleXMnKSB8fCBmdW5jdGlvbiBvd25LZXlzKGl0KSB7XG4gIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZS5mKGFuT2JqZWN0KGl0KSk7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZjtcbiAgcmV0dXJuIGdldE93blByb3BlcnR5U3ltYm9scyA/IGNvbmNhdChrZXlzLCBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpKSA6IGtleXM7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIG93bktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3duLWtleXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UsIGV4Y2VwdGlvbnMpIHtcbiAgdmFyIGtleXMgPSBvd25LZXlzKHNvdXJjZSk7XG4gIHZhciBkZWZpbmVQcm9wZXJ0eSA9IGRlZmluZVByb3BlcnR5TW9kdWxlLmY7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUuZjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgaWYgKCFoYXNPd24odGFyZ2V0LCBrZXkpICYmICEoZXhjZXB0aW9ucyAmJiBoYXNPd24oZXhjZXB0aW9ucywga2V5KSkpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICB9XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgcmVwbGFjZW1lbnQgPSAvI3xcXC5wcm90b3R5cGVcXC4vO1xuXG52YXIgaXNGb3JjZWQgPSBmdW5jdGlvbiAoZmVhdHVyZSwgZGV0ZWN0aW9uKSB7XG4gIHZhciB2YWx1ZSA9IGRhdGFbbm9ybWFsaXplKGZlYXR1cmUpXTtcbiAgcmV0dXJuIHZhbHVlID09PSBQT0xZRklMTCA/IHRydWVcbiAgICA6IHZhbHVlID09PSBOQVRJVkUgPyBmYWxzZVxuICAgIDogaXNDYWxsYWJsZShkZXRlY3Rpb24pID8gZmFpbHMoZGV0ZWN0aW9uKVxuICAgIDogISFkZXRlY3Rpb247XG59O1xuXG52YXIgbm9ybWFsaXplID0gaXNGb3JjZWQubm9ybWFsaXplID0gZnVuY3Rpb24gKHN0cmluZykge1xuICByZXR1cm4gU3RyaW5nKHN0cmluZykucmVwbGFjZShyZXBsYWNlbWVudCwgJy4nKS50b0xvd2VyQ2FzZSgpO1xufTtcblxudmFyIGRhdGEgPSBpc0ZvcmNlZC5kYXRhID0ge307XG52YXIgTkFUSVZFID0gaXNGb3JjZWQuTkFUSVZFID0gJ04nO1xudmFyIFBPTFlGSUxMID0gaXNGb3JjZWQuUE9MWUZJTEwgPSAnUCc7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGb3JjZWQ7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpLmY7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xudmFyIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzJyk7XG52YXIgaXNGb3JjZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtZm9yY2VkJyk7XG5cbi8qXG4gIG9wdGlvbnMudGFyZ2V0ICAgICAgICAgLSBuYW1lIG9mIHRoZSB0YXJnZXQgb2JqZWN0XG4gIG9wdGlvbnMuZ2xvYmFsICAgICAgICAgLSB0YXJnZXQgaXMgdGhlIGdsb2JhbCBvYmplY3RcbiAgb3B0aW9ucy5zdGF0ICAgICAgICAgICAtIGV4cG9ydCBhcyBzdGF0aWMgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5wcm90byAgICAgICAgICAtIGV4cG9ydCBhcyBwcm90b3R5cGUgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5yZWFsICAgICAgICAgICAtIHJlYWwgcHJvdG90eXBlIG1ldGhvZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMuZm9yY2VkICAgICAgICAgLSBleHBvcnQgZXZlbiBpZiB0aGUgbmF0aXZlIGZlYXR1cmUgaXMgYXZhaWxhYmxlXG4gIG9wdGlvbnMuYmluZCAgICAgICAgICAgLSBiaW5kIG1ldGhvZHMgdG8gdGhlIHRhcmdldCwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLndyYXAgICAgICAgICAgIC0gd3JhcCBjb25zdHJ1Y3RvcnMgdG8gcHJldmVudGluZyBnbG9iYWwgcG9sbHV0aW9uLCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMudW5zYWZlICAgICAgICAgLSB1c2UgdGhlIHNpbXBsZSBhc3NpZ25tZW50IG9mIHByb3BlcnR5IGluc3RlYWQgb2YgZGVsZXRlICsgZGVmaW5lUHJvcGVydHlcbiAgb3B0aW9ucy5zaGFtICAgICAgICAgICAtIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgb3B0aW9ucy5lbnVtZXJhYmxlICAgICAtIGV4cG9ydCBhcyBlbnVtZXJhYmxlIHByb3BlcnR5XG4gIG9wdGlvbnMuZG9udENhbGxHZXRTZXQgLSBwcmV2ZW50IGNhbGxpbmcgYSBnZXR0ZXIgb24gdGFyZ2V0XG4gIG9wdGlvbnMubmFtZSAgICAgICAgICAgLSB0aGUgLm5hbWUgb2YgdGhlIGZ1bmN0aW9uIGlmIGl0IGRvZXMgbm90IG1hdGNoIHRoZSBrZXlcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRpb25zLCBzb3VyY2UpIHtcbiAgdmFyIFRBUkdFVCA9IG9wdGlvbnMudGFyZ2V0O1xuICB2YXIgR0xPQkFMID0gb3B0aW9ucy5nbG9iYWw7XG4gIHZhciBTVEFUSUMgPSBvcHRpb25zLnN0YXQ7XG4gIHZhciBGT1JDRUQsIHRhcmdldCwga2V5LCB0YXJnZXRQcm9wZXJ0eSwgc291cmNlUHJvcGVydHksIGRlc2NyaXB0b3I7XG4gIGlmIChHTE9CQUwpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxUaGlzO1xuICB9IGVsc2UgaWYgKFNUQVRJQykge1xuICAgIHRhcmdldCA9IGdsb2JhbFRoaXNbVEFSR0VUXSB8fCBkZWZpbmVHbG9iYWxQcm9wZXJ0eShUQVJHRVQsIHt9KTtcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxUaGlzW1RBUkdFVF0gJiYgZ2xvYmFsVGhpc1tUQVJHRVRdLnByb3RvdHlwZTtcbiAgfVxuICBpZiAodGFyZ2V0KSBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICBzb3VyY2VQcm9wZXJ0eSA9IHNvdXJjZVtrZXldO1xuICAgIGlmIChvcHRpb25zLmRvbnRDYWxsR2V0U2V0KSB7XG4gICAgICBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcbiAgICAgIHRhcmdldFByb3BlcnR5ID0gZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIH0gZWxzZSB0YXJnZXRQcm9wZXJ0eSA9IHRhcmdldFtrZXldO1xuICAgIEZPUkNFRCA9IGlzRm9yY2VkKEdMT0JBTCA/IGtleSA6IFRBUkdFVCArIChTVEFUSUMgPyAnLicgOiAnIycpICsga2V5LCBvcHRpb25zLmZvcmNlZCk7XG4gICAgLy8gY29udGFpbmVkIGluIHRhcmdldFxuICAgIGlmICghRk9SQ0VEICYmIHRhcmdldFByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0eXBlb2Ygc291cmNlUHJvcGVydHkgPT0gdHlwZW9mIHRhcmdldFByb3BlcnR5KSBjb250aW51ZTtcbiAgICAgIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMoc291cmNlUHJvcGVydHksIHRhcmdldFByb3BlcnR5KTtcbiAgICB9XG4gICAgLy8gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICAgIGlmIChvcHRpb25zLnNoYW0gfHwgKHRhcmdldFByb3BlcnR5ICYmIHRhcmdldFByb3BlcnR5LnNoYW0pKSB7XG4gICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoc291cmNlUHJvcGVydHksICdzaGFtJywgdHJ1ZSk7XG4gICAgfVxuICAgIGRlZmluZUJ1aWx0SW4odGFyZ2V0LCBrZXksIHNvdXJjZVByb3BlcnR5LCBvcHRpb25zKTtcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUHJvdG90eXBlKSB7XG4gIGlmIChpc1Byb3RvdHlwZU9mKFByb3RvdHlwZSwgaXQpKSByZXR1cm4gaXQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKCdJbmNvcnJlY3QgaW52b2NhdGlvbicpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBGKCkgeyAvKiBlbXB0eSAqLyB9XG4gIEYucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gbnVsbDtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRwcm90b3R5cGVvZiAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKG5ldyBGKCkpICE9PSBGLnByb3RvdHlwZTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIENPUlJFQ1RfUFJPVE9UWVBFX0dFVFRFUiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3JyZWN0LXByb3RvdHlwZS1nZXR0ZXInKTtcblxudmFyIElFX1BST1RPID0gc2hhcmVkS2V5KCdJRV9QUk9UTycpO1xudmFyICRPYmplY3QgPSBPYmplY3Q7XG52YXIgT2JqZWN0UHJvdG90eXBlID0gJE9iamVjdC5wcm90b3R5cGU7XG5cbi8vIGBPYmplY3QuZ2V0UHJvdG90eXBlT2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0cHJvdG90eXBlb2Zcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0cHJvdG90eXBlb2YgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBDT1JSRUNUX1BST1RPVFlQRV9HRVRURVIgPyAkT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gKE8pIHtcbiAgdmFyIG9iamVjdCA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzT3duKG9iamVjdCwgSUVfUFJPVE8pKSByZXR1cm4gb2JqZWN0W0lFX1BST1RPXTtcbiAgdmFyIGNvbnN0cnVjdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yO1xuICBpZiAoaXNDYWxsYWJsZShjb25zdHJ1Y3RvcikgJiYgb2JqZWN0IGluc3RhbmNlb2YgY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBvYmplY3QgaW5zdGFuY2VvZiAkT2JqZWN0ID8gT2JqZWN0UHJvdG90eXBlIDogbnVsbDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIG1ha2VCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcikge1xuICBpZiAoZGVzY3JpcHRvci5nZXQpIG1ha2VCdWlsdEluKGRlc2NyaXB0b3IuZ2V0LCBuYW1lLCB7IGdldHRlcjogdHJ1ZSB9KTtcbiAgaWYgKGRlc2NyaXB0b3Iuc2V0KSBtYWtlQnVpbHRJbihkZXNjcmlwdG9yLnNldCwgbmFtZSwgeyBzZXR0ZXI6IHRydWUgfSk7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eS5mKHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIGlmIChERVNDUklQVE9SUykgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W2tleV0gPSB2YWx1ZTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxuLy8gYE9iamVjdC5rZXlzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmtleXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3Qta2V5cyAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdjgtcHJvdG90eXBlLWRlZmluZS1idWcnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgb2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cycpO1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnRpZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydGllc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0aWVzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTICYmICFWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIgcHJvcHMgPSB0b0luZGV4ZWRPYmplY3QoUHJvcGVydGllcyk7XG4gIHZhciBrZXlzID0gb2JqZWN0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYoTywga2V5ID0ga2V5c1tpbmRleCsrXSwgcHJvcHNba2V5XSk7XG4gIHJldHVybiBPO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCdkb2N1bWVudCcsICdkb2N1bWVudEVsZW1lbnQnKTtcbiIsICIndXNlIHN0cmljdCc7XG4vKiBnbG9iYWwgQWN0aXZlWE9iamVjdCAtLSBvbGQgSUUsIFdTSCAqL1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGRlZmluZVByb3BlcnRpZXNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2h0bWwnKTtcbnZhciBkb2N1bWVudENyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xuXG52YXIgR1QgPSAnPic7XG52YXIgTFQgPSAnPCc7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgU0NSSVBUID0gJ3NjcmlwdCc7XG52YXIgSUVfUFJPVE8gPSBzaGFyZWRLZXkoJ0lFX1BST1RPJyk7XG5cbnZhciBFbXB0eUNvbnN0cnVjdG9yID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuXG52YXIgc2NyaXB0VGFnID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgcmV0dXJuIExUICsgU0NSSVBUICsgR1QgKyBjb250ZW50ICsgTFQgKyAnLycgKyBTQ1JJUFQgKyBHVDtcbn07XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBBY3RpdmVYIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgTnVsbFByb3RvT2JqZWN0VmlhQWN0aXZlWCA9IGZ1bmN0aW9uIChhY3RpdmVYRG9jdW1lbnQpIHtcbiAgYWN0aXZlWERvY3VtZW50LndyaXRlKHNjcmlwdFRhZygnJykpO1xuICBhY3RpdmVYRG9jdW1lbnQuY2xvc2UoKTtcbiAgdmFyIHRlbXAgPSBhY3RpdmVYRG9jdW1lbnQucGFyZW50V2luZG93Lk9iamVjdDtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtYXNzaWdubWVudCAtLSBhdm9pZCBtZW1vcnkgbGVha1xuICBhY3RpdmVYRG9jdW1lbnQgPSBudWxsO1xuICByZXR1cm4gdGVtcDtcbn07XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBOdWxsUHJvdG9PYmplY3RWaWFJRnJhbWUgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSBkb2N1bWVudENyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICB2YXIgSlMgPSAnamF2YScgKyBTQ1JJUFQgKyAnOic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGh0bWwuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzQ3NVxuICBpZnJhbWUuc3JjID0gU3RyaW5nKEpTKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShzY3JpcHRUYWcoJ2RvY3VtZW50LkY9T2JqZWN0JykpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICByZXR1cm4gaWZyYW1lRG9jdW1lbnQuRjtcbn07XG5cbi8vIENoZWNrIGZvciBkb2N1bWVudC5kb21haW4gYW5kIGFjdGl2ZSB4IHN1cHBvcnRcbi8vIE5vIG5lZWQgdG8gdXNlIGFjdGl2ZSB4IGFwcHJvYWNoIHdoZW4gZG9jdW1lbnQuZG9tYWluIGlzIG5vdCBzZXRcbi8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW0vaXNzdWVzLzE1MFxuLy8gdmFyaWF0aW9uIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9raXRjYW1icmlkZ2UvZXM1LXNoaW0vY29tbWl0LzRmNzM4YWMwNjYzNDZcbi8vIGF2b2lkIElFIEdDIGJ1Z1xudmFyIGFjdGl2ZVhEb2N1bWVudDtcbnZhciBOdWxsUHJvdG9PYmplY3QgPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgYWN0aXZlWERvY3VtZW50ID0gbmV3IEFjdGl2ZVhPYmplY3QoJ2h0bWxmaWxlJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGlnbm9yZSAqLyB9XG4gIE51bGxQcm90b09iamVjdCA9IHR5cGVvZiBkb2N1bWVudCAhPSAndW5kZWZpbmVkJ1xuICAgID8gZG9jdW1lbnQuZG9tYWluICYmIGFjdGl2ZVhEb2N1bWVudFxuICAgICAgPyBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYKGFjdGl2ZVhEb2N1bWVudCkgLy8gb2xkIElFXG4gICAgICA6IE51bGxQcm90b09iamVjdFZpYUlGcmFtZSgpXG4gICAgOiBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYKGFjdGl2ZVhEb2N1bWVudCk7IC8vIFdTSFxuICB2YXIgbGVuZ3RoID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIGRlbGV0ZSBOdWxsUHJvdG9PYmplY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tsZW5ndGhdXTtcbiAgcmV0dXJuIE51bGxQcm90b09iamVjdCgpO1xufTtcblxuaGlkZGVuS2V5c1tJRV9QUk9UT10gPSB0cnVlO1xuXG4vLyBgT2JqZWN0LmNyZWF0ZWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5jcmVhdGVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtY3JlYXRlIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5Q29uc3RydWN0b3JbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eUNvbnN0cnVjdG9yKCk7XG4gICAgRW1wdHlDb25zdHJ1Y3RvcltQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBOdWxsUHJvdG9PYmplY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRlZmluZVByb3BlcnRpZXNNb2R1bGUuZihyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1jcmVhdGUnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZicpO1xudmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBCVUdHWV9TQUZBUklfSVRFUkFUT1JTID0gZmFsc2U7XG5cbi8vIGAlSXRlcmF0b3JQcm90b3R5cGUlYCBvYmplY3Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtJWl0ZXJhdG9ycHJvdG90eXBlJS1vYmplY3RcbnZhciBJdGVyYXRvclByb3RvdHlwZSwgUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlLCBhcnJheUl0ZXJhdG9yO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1hcnJheS1wcm90b3R5cGUta2V5cyAtLSBzYWZlICovXG5pZiAoW10ua2V5cykge1xuICBhcnJheUl0ZXJhdG9yID0gW10ua2V5cygpO1xuICAvLyBTYWZhcmkgOCBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgaWYgKCEoJ25leHQnIGluIGFycmF5SXRlcmF0b3IpKSBCVUdHWV9TQUZBUklfSVRFUkFUT1JTID0gdHJ1ZTtcbiAgZWxzZSB7XG4gICAgUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoZ2V0UHJvdG90eXBlT2YoYXJyYXlJdGVyYXRvcikpO1xuICAgIGlmIChQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpIEl0ZXJhdG9yUHJvdG90eXBlID0gUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG59XG5cbnZhciBORVdfSVRFUkFUT1JfUFJPVE9UWVBFID0gIWlzT2JqZWN0KEl0ZXJhdG9yUHJvdG90eXBlKSB8fCBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciB0ZXN0ID0ge307XG4gIC8vIEZGNDQtIGxlZ2FjeSBpdGVyYXRvcnMgY2FzZVxuICByZXR1cm4gSXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdLmNhbGwodGVzdCkgIT09IHRlc3Q7XG59KTtcblxuaWYgKE5FV19JVEVSQVRPUl9QUk9UT1RZUEUpIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5lbHNlIGlmIChJU19QVVJFKSBJdGVyYXRvclByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG5cbi8vIGAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy0laXRlcmF0b3Jwcm90b3R5cGUlLUBAaXRlcmF0b3JcbmlmICghaXNDYWxsYWJsZShJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0pKSB7XG4gIGRlZmluZUJ1aWx0SW4oSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgSXRlcmF0b3JQcm90b3R5cGU6IEl0ZXJhdG9yUHJvdG90eXBlLFxuICBCVUdHWV9TQUZBUklfSVRFUkFUT1JTOiBCVUdHWV9TQUZBUklfSVRFUkFUT1JTXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLWluc3RhbmNlJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgZGVmaW5lQnVpbHRJbkFjY2Vzc29yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbi1hY2Nlc3NvcicpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMtY29yZScpLkl0ZXJhdG9yUHJvdG90eXBlO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG5cbnZhciBDT05TVFJVQ1RPUiA9ICdjb25zdHJ1Y3Rvcic7XG52YXIgSVRFUkFUT1IgPSAnSXRlcmF0b3InO1xudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xudmFyIE5hdGl2ZUl0ZXJhdG9yID0gZ2xvYmFsVGhpc1tJVEVSQVRPUl07XG5cbi8vIEZGNTYtIGhhdmUgbm9uLXN0YW5kYXJkIGdsb2JhbCBoZWxwZXIgYEl0ZXJhdG9yYFxudmFyIEZPUkNFRCA9IElTX1BVUkVcbiAgfHwgIWlzQ2FsbGFibGUoTmF0aXZlSXRlcmF0b3IpXG4gIHx8IE5hdGl2ZUl0ZXJhdG9yLnByb3RvdHlwZSAhPT0gSXRlcmF0b3JQcm90b3R5cGVcbiAgLy8gRkY0NC0gbm9uLXN0YW5kYXJkIGBJdGVyYXRvcmAgcGFzc2VzIHByZXZpb3VzIHRlc3RzXG4gIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7IE5hdGl2ZUl0ZXJhdG9yKHt9KTsgfSk7XG5cbnZhciBJdGVyYXRvckNvbnN0cnVjdG9yID0gZnVuY3Rpb24gSXRlcmF0b3IoKSB7XG4gIGFuSW5zdGFuY2UodGhpcywgSXRlcmF0b3JQcm90b3R5cGUpO1xuICBpZiAoZ2V0UHJvdG90eXBlT2YodGhpcykgPT09IEl0ZXJhdG9yUHJvdG90eXBlKSB0aHJvdyBuZXcgJFR5cGVFcnJvcignQWJzdHJhY3QgY2xhc3MgSXRlcmF0b3Igbm90IGRpcmVjdGx5IGNvbnN0cnVjdGFibGUnKTtcbn07XG5cbnZhciBkZWZpbmVJdGVyYXRvclByb3RvdHlwZUFjY2Vzc29yID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgaWYgKERFU0NSSVBUT1JTKSB7XG4gICAgZGVmaW5lQnVpbHRJbkFjY2Vzc29yKEl0ZXJhdG9yUHJvdG90eXBlLCBrZXksIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAocmVwbGFjZW1lbnQpIHtcbiAgICAgICAgYW5PYmplY3QodGhpcyk7XG4gICAgICAgIGlmICh0aGlzID09PSBJdGVyYXRvclByb3RvdHlwZSkgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJZb3UgY2FuJ3QgcmVkZWZpbmUgdGhpcyBwcm9wZXJ0eVwiKTtcbiAgICAgICAgaWYgKGhhc093bih0aGlzLCBrZXkpKSB0aGlzW2tleV0gPSByZXBsYWNlbWVudDtcbiAgICAgICAgZWxzZSBjcmVhdGVQcm9wZXJ0eSh0aGlzLCBrZXksIHJlcGxhY2VtZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIEl0ZXJhdG9yUHJvdG90eXBlW2tleV0gPSB2YWx1ZTtcbn07XG5cbmlmICghaGFzT3duKEl0ZXJhdG9yUHJvdG90eXBlLCBUT19TVFJJTkdfVEFHKSkgZGVmaW5lSXRlcmF0b3JQcm90b3R5cGVBY2Nlc3NvcihUT19TVFJJTkdfVEFHLCBJVEVSQVRPUik7XG5cbmlmIChGT1JDRUQgfHwgIWhhc093bihJdGVyYXRvclByb3RvdHlwZSwgQ09OU1RSVUNUT1IpIHx8IEl0ZXJhdG9yUHJvdG90eXBlW0NPTlNUUlVDVE9SXSA9PT0gT2JqZWN0KSB7XG4gIGRlZmluZUl0ZXJhdG9yUHJvdG90eXBlQWNjZXNzb3IoQ09OU1RSVUNUT1IsIEl0ZXJhdG9yQ29uc3RydWN0b3IpO1xufVxuXG5JdGVyYXRvckNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IEl0ZXJhdG9yUHJvdG90eXBlO1xuXG4vLyBgSXRlcmF0b3JgIGNvbnN0cnVjdG9yXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWl0ZXJhdG9yXG4kKHsgZ2xvYmFsOiB0cnVlLCBjb25zdHJ1Y3RvcjogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICBJdGVyYXRvcjogSXRlcmF0b3JDb25zdHJ1Y3RvclxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gYEdldEl0ZXJhdG9yRGlyZWN0KG9iailgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1nZXRpdGVyYXRvcmRpcmVjdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB7XG4gICAgaXRlcmF0b3I6IG9iaixcbiAgICBuZXh0OiBvYmoubmV4dCxcbiAgICBkb25lOiBmYWxzZVxuICB9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzcmMsIG9wdGlvbnMpIHtcbiAgZm9yICh2YXIga2V5IGluIHNyYykgZGVmaW5lQnVpbHRJbih0YXJnZXQsIGtleSwgc3JjW2tleV0sIG9wdGlvbnMpO1xuICByZXR1cm4gdGFyZ2V0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBgQ3JlYXRlSXRlclJlc3VsdE9iamVjdGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWNyZWF0ZWl0ZXJyZXN1bHRvYmplY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlLCBkb25lKSB7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogZG9uZSB9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGtpbmQsIHZhbHVlKSB7XG4gIHZhciBpbm5lclJlc3VsdCwgaW5uZXJFcnJvcjtcbiAgYW5PYmplY3QoaXRlcmF0b3IpO1xuICB0cnkge1xuICAgIGlubmVyUmVzdWx0ID0gZ2V0TWV0aG9kKGl0ZXJhdG9yLCAncmV0dXJuJyk7XG4gICAgaWYgKCFpbm5lclJlc3VsdCkge1xuICAgICAgaWYgKGtpbmQgPT09ICd0aHJvdycpIHRocm93IHZhbHVlO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBpbm5lclJlc3VsdCA9IGNhbGwoaW5uZXJSZXN1bHQsIGl0ZXJhdG9yKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpbm5lckVycm9yID0gdHJ1ZTtcbiAgICBpbm5lclJlc3VsdCA9IGVycm9yO1xuICB9XG4gIGlmIChraW5kID09PSAndGhyb3cnKSB0aHJvdyB2YWx1ZTtcbiAgaWYgKGlubmVyRXJyb3IpIHRocm93IGlubmVyUmVzdWx0O1xuICBhbk9iamVjdChpbm5lclJlc3VsdCk7XG4gIHJldHVybiB2YWx1ZTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGl0ZXJhdG9yQ2xvc2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3ItY2xvc2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcnMsIGtpbmQsIHZhbHVlKSB7XG4gIGZvciAodmFyIGkgPSBpdGVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGlmIChpdGVyc1tpXSA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcbiAgICB0cnkge1xuICAgICAgdmFsdWUgPSBpdGVyYXRvckNsb3NlKGl0ZXJzW2ldLml0ZXJhdG9yLCBraW5kLCB2YWx1ZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGtpbmQgPSAndGhyb3cnO1xuICAgICAgdmFsdWUgPSBlcnJvcjtcbiAgICB9XG4gIH1cbiAgaWYgKGtpbmQgPT09ICd0aHJvdycpIHRocm93IHZhbHVlO1xuICByZXR1cm4gdmFsdWU7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZScpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBkZWZpbmVCdWlsdElucyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW5zJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzLWNvcmUnKS5JdGVyYXRvclByb3RvdHlwZTtcbnZhciBjcmVhdGVJdGVyUmVzdWx0T2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1pdGVyLXJlc3VsdC1vYmplY3QnKTtcbnZhciBpdGVyYXRvckNsb3NlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlJyk7XG52YXIgaXRlcmF0b3JDbG9zZUFsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1jbG9zZS1hbGwnKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG52YXIgSVRFUkFUT1JfSEVMUEVSID0gJ0l0ZXJhdG9ySGVscGVyJztcbnZhciBXUkFQX0ZPUl9WQUxJRF9JVEVSQVRPUiA9ICdXcmFwRm9yVmFsaWRJdGVyYXRvcic7XG52YXIgTk9STUFMID0gJ25vcm1hbCc7XG52YXIgVEhST1cgPSAndGhyb3cnO1xudmFyIHNldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLnNldDtcblxudmFyIGNyZWF0ZUl0ZXJhdG9yUHJveHlQcm90b3R5cGUgPSBmdW5jdGlvbiAoSVNfSVRFUkFUT1IpIHtcbiAgdmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldHRlckZvcihJU19JVEVSQVRPUiA/IFdSQVBfRk9SX1ZBTElEX0lURVJBVE9SIDogSVRFUkFUT1JfSEVMUEVSKTtcblxuICByZXR1cm4gZGVmaW5lQnVpbHRJbnMoY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKSwge1xuICAgIG5leHQ6IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpO1xuICAgICAgLy8gZm9yIHNpbXBsaWZpY2F0aW9uOlxuICAgICAgLy8gICBmb3IgYCVXcmFwRm9yVmFsaWRJdGVyYXRvclByb3RvdHlwZSUubmV4dGAgb3Igd2l0aCBgc3RhdGUucmV0dXJuSGFuZGxlclJlc3VsdGAgb3VyIGBuZXh0SGFuZGxlcmAgcmV0dXJucyBgSXRlclJlc3VsdE9iamVjdGBcbiAgICAgIC8vICAgZm9yIGAlSXRlcmF0b3JIZWxwZXJQcm90b3R5cGUlLm5leHRgIC0ganVzdCBhIHZhbHVlXG4gICAgICBpZiAoSVNfSVRFUkFUT1IpIHJldHVybiBzdGF0ZS5uZXh0SGFuZGxlcigpO1xuICAgICAgaWYgKHN0YXRlLmRvbmUpIHJldHVybiBjcmVhdGVJdGVyUmVzdWx0T2JqZWN0KHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gc3RhdGUubmV4dEhhbmRsZXIoKTtcbiAgICAgICAgcmV0dXJuIHN0YXRlLnJldHVybkhhbmRsZXJSZXN1bHQgPyByZXN1bHQgOiBjcmVhdGVJdGVyUmVzdWx0T2JqZWN0KHJlc3VsdCwgc3RhdGUuZG9uZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBzdGF0ZS5kb25lID0gdHJ1ZTtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgfSxcbiAgICAncmV0dXJuJzogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKTtcbiAgICAgIHZhciBpdGVyYXRvciA9IHN0YXRlLml0ZXJhdG9yO1xuICAgICAgc3RhdGUuZG9uZSA9IHRydWU7XG4gICAgICBpZiAoSVNfSVRFUkFUT1IpIHtcbiAgICAgICAgdmFyIHJldHVybk1ldGhvZCA9IGdldE1ldGhvZChpdGVyYXRvciwgJ3JldHVybicpO1xuICAgICAgICByZXR1cm4gcmV0dXJuTWV0aG9kID8gY2FsbChyZXR1cm5NZXRob2QsIGl0ZXJhdG9yKSA6IGNyZWF0ZUl0ZXJSZXN1bHRPYmplY3QodW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGlmIChzdGF0ZS5pbm5lcikgdHJ5IHtcbiAgICAgICAgaXRlcmF0b3JDbG9zZShzdGF0ZS5pbm5lci5pdGVyYXRvciwgTk9STUFMKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBUSFJPVywgZXJyb3IpO1xuICAgICAgfVxuICAgICAgaWYgKHN0YXRlLm9wZW5JdGVycykgdHJ5IHtcbiAgICAgICAgaXRlcmF0b3JDbG9zZUFsbChzdGF0ZS5vcGVuSXRlcnMsIE5PUk1BTCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JDbG9zZShpdGVyYXRvciwgVEhST1csIGVycm9yKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVyYXRvcikgaXRlcmF0b3JDbG9zZShpdGVyYXRvciwgTk9STUFMKTtcbiAgICAgIHJldHVybiBjcmVhdGVJdGVyUmVzdWx0T2JqZWN0KHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgfVxuICB9KTtcbn07XG5cbnZhciBXcmFwRm9yVmFsaWRJdGVyYXRvclByb3RvdHlwZSA9IGNyZWF0ZUl0ZXJhdG9yUHJveHlQcm90b3R5cGUodHJ1ZSk7XG52YXIgSXRlcmF0b3JIZWxwZXJQcm90b3R5cGUgPSBjcmVhdGVJdGVyYXRvclByb3h5UHJvdG90eXBlKGZhbHNlKTtcblxuY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KEl0ZXJhdG9ySGVscGVyUHJvdG90eXBlLCBUT19TVFJJTkdfVEFHLCAnSXRlcmF0b3IgSGVscGVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5leHRIYW5kbGVyLCBJU19JVEVSQVRPUiwgUkVUVVJOX0hBTkRMRVJfUkVTVUxUKSB7XG4gIHZhciBJdGVyYXRvclByb3h5ID0gZnVuY3Rpb24gSXRlcmF0b3IocmVjb3JkLCBzdGF0ZSkge1xuICAgIGlmIChzdGF0ZSkge1xuICAgICAgc3RhdGUuaXRlcmF0b3IgPSByZWNvcmQuaXRlcmF0b3I7XG4gICAgICBzdGF0ZS5uZXh0ID0gcmVjb3JkLm5leHQ7XG4gICAgfSBlbHNlIHN0YXRlID0gcmVjb3JkO1xuICAgIHN0YXRlLnR5cGUgPSBJU19JVEVSQVRPUiA/IFdSQVBfRk9SX1ZBTElEX0lURVJBVE9SIDogSVRFUkFUT1JfSEVMUEVSO1xuICAgIHN0YXRlLnJldHVybkhhbmRsZXJSZXN1bHQgPSAhIVJFVFVSTl9IQU5ETEVSX1JFU1VMVDtcbiAgICBzdGF0ZS5uZXh0SGFuZGxlciA9IG5leHRIYW5kbGVyO1xuICAgIHN0YXRlLmNvdW50ZXIgPSAwO1xuICAgIHN0YXRlLmRvbmUgPSBmYWxzZTtcbiAgICBzZXRJbnRlcm5hbFN0YXRlKHRoaXMsIHN0YXRlKTtcbiAgfTtcblxuICBJdGVyYXRvclByb3h5LnByb3RvdHlwZSA9IElTX0lURVJBVE9SID8gV3JhcEZvclZhbGlkSXRlcmF0b3JQcm90b3R5cGUgOiBJdGVyYXRvckhlbHBlclByb3RvdHlwZTtcblxuICByZXR1cm4gSXRlcmF0b3JQcm94eTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGl0ZXJhdG9yQ2xvc2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3ItY2xvc2UnKTtcblxuLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGZuLCB2YWx1ZSwgRU5UUklFUykge1xuICB0cnkge1xuICAgIHJldHVybiBFTlRSSUVTID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaXRlcmF0b3JDbG9zZShpdGVyYXRvciwgJ3Rocm93JywgZXJyb3IpO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIFNob3VsZCB0aHJvdyBhbiBlcnJvciBvbiBpbnZhbGlkIGl0ZXJhdG9yXG4vLyBodHRwczovL2lzc3Vlcy5jaHJvbWl1bS5vcmcvaXNzdWVzLzMzNjgzOTExNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobWV0aG9kTmFtZSwgYXJndW1lbnQpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWl0ZXJhdG9yIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHZhciBtZXRob2QgPSB0eXBlb2YgSXRlcmF0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBJdGVyYXRvci5wcm90b3R5cGVbbWV0aG9kTmFtZV07XG4gIGlmIChtZXRob2QpIHRyeSB7XG4gICAgbWV0aG9kLmNhbGwoeyBuZXh0OiBudWxsIH0sIGFyZ3VtZW50KS5uZXh0KCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvZWNtYTI2Mi9wdWxsLzM0Njdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FLCBFeHBlY3RlZEVycm9yKSB7XG4gIHZhciBJdGVyYXRvciA9IGdsb2JhbFRoaXMuSXRlcmF0b3I7XG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IEl0ZXJhdG9yICYmIEl0ZXJhdG9yLnByb3RvdHlwZTtcbiAgdmFyIG1ldGhvZCA9IEl0ZXJhdG9yUHJvdG90eXBlICYmIEl0ZXJhdG9yUHJvdG90eXBlW01FVEhPRF9OQU1FXTtcblxuICB2YXIgQ0xPU0VEID0gZmFsc2U7XG5cbiAgaWYgKG1ldGhvZCkgdHJ5IHtcbiAgICBtZXRob2QuY2FsbCh7XG4gICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB7IGRvbmU6IHRydWUgfTsgfSxcbiAgICAgICdyZXR1cm4nOiBmdW5jdGlvbiAoKSB7IENMT1NFRCA9IHRydWU7IH1cbiAgICB9LCAtMSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTI5MTE5NVxuICAgIGlmICghKGVycm9yIGluc3RhbmNlb2YgRXhwZWN0ZWRFcnJvcikpIENMT1NFRCA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKCFDTE9TRUQpIHJldHVybiBtZXRob2Q7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZ2V0SXRlcmF0b3JEaXJlY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLWRpcmVjdCcpO1xudmFyIGNyZWF0ZUl0ZXJhdG9yUHJveHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3ItY3JlYXRlLXByb3h5Jyk7XG52YXIgY2FsbFdpdGhTYWZlSXRlcmF0aW9uQ2xvc2luZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jYWxsLXdpdGgtc2FmZS1pdGVyYXRpb24tY2xvc2luZycpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIGl0ZXJhdG9yQ2xvc2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3ItY2xvc2UnKTtcbnZhciBpdGVyYXRvckhlbHBlclRocm93c09uSW52YWxpZEl0ZXJhdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWhlbHBlci10aHJvd3Mtb24taW52YWxpZC1pdGVyYXRvcicpO1xudmFyIGl0ZXJhdG9ySGVscGVyV2l0aG91dENsb3NpbmdPbkVhcmx5RXJyb3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3ItaGVscGVyLXdpdGhvdXQtY2xvc2luZy1vbi1lYXJseS1lcnJvcicpO1xuXG52YXIgRklMVEVSX1dJVEhPVVRfVEhST1dJTkdfT05fSU5WQUxJRF9JVEVSQVRPUiA9ICFJU19QVVJFICYmICFpdGVyYXRvckhlbHBlclRocm93c09uSW52YWxpZEl0ZXJhdG9yKCdmaWx0ZXInLCBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0pO1xudmFyIGZpbHRlcldpdGhvdXRDbG9zaW5nT25FYXJseUVycm9yID0gIUlTX1BVUkUgJiYgIUZJTFRFUl9XSVRIT1VUX1RIUk9XSU5HX09OX0lOVkFMSURfSVRFUkFUT1JcbiAgJiYgaXRlcmF0b3JIZWxwZXJXaXRob3V0Q2xvc2luZ09uRWFybHlFcnJvcignZmlsdGVyJywgVHlwZUVycm9yKTtcblxudmFyIEZPUkNFRCA9IElTX1BVUkUgfHwgRklMVEVSX1dJVEhPVVRfVEhST1dJTkdfT05fSU5WQUxJRF9JVEVSQVRPUiB8fCBmaWx0ZXJXaXRob3V0Q2xvc2luZ09uRWFybHlFcnJvcjtcblxudmFyIEl0ZXJhdG9yUHJveHkgPSBjcmVhdGVJdGVyYXRvclByb3h5KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGl0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcjtcbiAgdmFyIHByZWRpY2F0ZSA9IHRoaXMucHJlZGljYXRlO1xuICB2YXIgbmV4dCA9IHRoaXMubmV4dDtcbiAgdmFyIHJlc3VsdCwgZG9uZSwgdmFsdWU7XG4gIHdoaWxlICh0cnVlKSB7XG4gICAgcmVzdWx0ID0gYW5PYmplY3QoY2FsbChuZXh0LCBpdGVyYXRvcikpO1xuICAgIGRvbmUgPSB0aGlzLmRvbmUgPSAhIXJlc3VsdC5kb25lO1xuICAgIGlmIChkb25lKSByZXR1cm47XG4gICAgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgaWYgKGNhbGxXaXRoU2FmZUl0ZXJhdGlvbkNsb3NpbmcoaXRlcmF0b3IsIHByZWRpY2F0ZSwgW3ZhbHVlLCB0aGlzLmNvdW50ZXIrK10sIHRydWUpKSByZXR1cm4gdmFsdWU7XG4gIH1cbn0pO1xuXG4vLyBgSXRlcmF0b3IucHJvdG90eXBlLmZpbHRlcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWl0ZXJhdG9yLnByb3RvdHlwZS5maWx0ZXJcbiQoeyB0YXJnZXQ6ICdJdGVyYXRvcicsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKHByZWRpY2F0ZSkge1xuICAgIGFuT2JqZWN0KHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBhQ2FsbGFibGUocHJlZGljYXRlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaXRlcmF0b3JDbG9zZSh0aGlzLCAndGhyb3cnLCBlcnJvcik7XG4gICAgfVxuXG4gICAgaWYgKGZpbHRlcldpdGhvdXRDbG9zaW5nT25FYXJseUVycm9yKSByZXR1cm4gY2FsbChmaWx0ZXJXaXRob3V0Q2xvc2luZ09uRWFybHlFcnJvciwgdGhpcywgcHJlZGljYXRlKTtcblxuICAgIHJldHVybiBuZXcgSXRlcmF0b3JQcm94eShnZXRJdGVyYXRvckRpcmVjdCh0aGlzKSwge1xuICAgICAgcHJlZGljYXRlOiBwcmVkaWNhdGVcbiAgICB9KTtcbiAgfVxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNsYXNzb2ZSYXcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4pIHtcbiAgLy8gTmFzaG9ybiBidWc6XG4gIC8vICAgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzExMjhcbiAgLy8gICBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTEzMFxuICBpZiAoY2xhc3NvZlJhdyhmbikgPT09ICdGdW5jdGlvbicpIHJldHVybiB1bmN1cnJ5VGhpcyhmbik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMtY2xhdXNlJyk7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgYmluZCA9IHVuY3VycnlUaGlzKHVuY3VycnlUaGlzLmJpbmQpO1xuXG4vLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0KSB7XG4gIGFDYWxsYWJsZShmbik7XG4gIHJldHVybiB0aGF0ID09PSB1bmRlZmluZWQgPyBmbiA6IE5BVElWRV9CSU5EID8gYmluZChmbiwgdGhhdCkgOiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvdHlwZSA9IEFycmF5LnByb3RvdHlwZTtcblxuLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b3R5cGVbSVRFUkFUT1JdID09PSBpdCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG52YXIgdGVzdCA9IHt9O1xuXG50ZXN0W1RPX1NUUklOR19UQUddID0gJ3onO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0cmluZyh0ZXN0KSA9PT0gJ1tvYmplY3Qgel0nO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBUT19TVFJJTkdfVEFHX1NVUFBPUlQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nLXRhZy1zdXBwb3J0Jyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGNsYXNzb2ZSYXcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBDT1JSRUNUX0FSR1VNRU5UUyA9IGNsYXNzb2ZSYXcoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG4vLyBnZXR0aW5nIHRhZyBmcm9tIEVTNisgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgXG5tb2R1bGUuZXhwb3J0cyA9IFRPX1NUUklOR19UQUdfU1VQUE9SVCA/IGNsYXNzb2ZSYXcgOiBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIHRhZywgcmVzdWx0O1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAodGFnID0gdHJ5R2V0KE8gPSAkT2JqZWN0KGl0KSwgVE9fU1RSSU5HX1RBRykpID09ICdzdHJpbmcnID8gdGFnXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBDT1JSRUNUX0FSR1VNRU5UUyA/IGNsYXNzb2ZSYXcoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAocmVzdWx0ID0gY2xhc3NvZlJhdyhPKSkgPT09ICdPYmplY3QnICYmIGlzQ2FsbGFibGUoTy5jYWxsZWUpID8gJ0FyZ3VtZW50cycgOiByZXN1bHQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNOdWxsT3JVbmRlZmluZWQoaXQpKSByZXR1cm4gZ2V0TWV0aG9kKGl0LCBJVEVSQVRPUilcbiAgICB8fCBnZXRNZXRob2QoaXQsICdAQGl0ZXJhdG9yJylcbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0cnlUb1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90cnktdG8tc3RyaW5nJyk7XG52YXIgZ2V0SXRlcmF0b3JNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQsIHVzaW5nSXRlcmF0b3IpIHtcbiAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBnZXRJdGVyYXRvck1ldGhvZChhcmd1bWVudCkgOiB1c2luZ0l0ZXJhdG9yO1xuICBpZiAoYUNhbGxhYmxlKGl0ZXJhdG9yTWV0aG9kKSkgcmV0dXJuIGFuT2JqZWN0KGNhbGwoaXRlcmF0b3JNZXRob2QsIGFyZ3VtZW50KSk7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKHRyeVRvU3RyaW5nKGFyZ3VtZW50KSArICcgaXMgbm90IGl0ZXJhYmxlJyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRyeVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RyeS10by1zdHJpbmcnKTtcbnZhciBpc0FycmF5SXRlcmF0b3JNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXktaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciBpc1Byb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YnKTtcbnZhciBnZXRJdGVyYXRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3InKTtcbnZhciBnZXRJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgaXRlcmF0b3JDbG9zZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1jbG9zZScpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxudmFyIFJlc3VsdCA9IGZ1bmN0aW9uIChzdG9wcGVkLCByZXN1bHQpIHtcbiAgdGhpcy5zdG9wcGVkID0gc3RvcHBlZDtcbiAgdGhpcy5yZXN1bHQgPSByZXN1bHQ7XG59O1xuXG52YXIgUmVzdWx0UHJvdG90eXBlID0gUmVzdWx0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmFibGUsIHVuYm91bmRGdW5jdGlvbiwgb3B0aW9ucykge1xuICB2YXIgdGhhdCA9IG9wdGlvbnMgJiYgb3B0aW9ucy50aGF0O1xuICB2YXIgQVNfRU5UUklFUyA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5BU19FTlRSSUVTKTtcbiAgdmFyIElTX1JFQ09SRCA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5JU19SRUNPUkQpO1xuICB2YXIgSVNfSVRFUkFUT1IgPSAhIShvcHRpb25zICYmIG9wdGlvbnMuSVNfSVRFUkFUT1IpO1xuICB2YXIgSU5URVJSVVBURUQgPSAhIShvcHRpb25zICYmIG9wdGlvbnMuSU5URVJSVVBURUQpO1xuICB2YXIgZm4gPSBiaW5kKHVuYm91bmRGdW5jdGlvbiwgdGhhdCk7XG4gIHZhciBpdGVyYXRvciwgaXRlckZuLCBpbmRleCwgbGVuZ3RoLCByZXN1bHQsIG5leHQsIHN0ZXA7XG5cbiAgdmFyIHN0b3AgPSBmdW5jdGlvbiAoY29uZGl0aW9uKSB7XG4gICAgaWYgKGl0ZXJhdG9yKSBpdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCAnbm9ybWFsJyk7XG4gICAgcmV0dXJuIG5ldyBSZXN1bHQodHJ1ZSwgY29uZGl0aW9uKTtcbiAgfTtcblxuICB2YXIgY2FsbEZuID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKEFTX0VOVFJJRVMpIHtcbiAgICAgIGFuT2JqZWN0KHZhbHVlKTtcbiAgICAgIHJldHVybiBJTlRFUlJVUFRFRCA/IGZuKHZhbHVlWzBdLCB2YWx1ZVsxXSwgc3RvcCkgOiBmbih2YWx1ZVswXSwgdmFsdWVbMV0pO1xuICAgIH0gcmV0dXJuIElOVEVSUlVQVEVEID8gZm4odmFsdWUsIHN0b3ApIDogZm4odmFsdWUpO1xuICB9O1xuXG4gIGlmIChJU19SRUNPUkQpIHtcbiAgICBpdGVyYXRvciA9IGl0ZXJhYmxlLml0ZXJhdG9yO1xuICB9IGVsc2UgaWYgKElTX0lURVJBVE9SKSB7XG4gICAgaXRlcmF0b3IgPSBpdGVyYWJsZTtcbiAgfSBlbHNlIHtcbiAgICBpdGVyRm4gPSBnZXRJdGVyYXRvck1ldGhvZChpdGVyYWJsZSk7XG4gICAgaWYgKCFpdGVyRm4pIHRocm93IG5ldyAkVHlwZUVycm9yKHRyeVRvU3RyaW5nKGl0ZXJhYmxlKSArICcgaXMgbm90IGl0ZXJhYmxlJyk7XG4gICAgLy8gb3B0aW1pc2F0aW9uIGZvciBhcnJheSBpdGVyYXRvcnNcbiAgICBpZiAoaXNBcnJheUl0ZXJhdG9yTWV0aG9kKGl0ZXJGbikpIHtcbiAgICAgIGZvciAoaW5kZXggPSAwLCBsZW5ndGggPSBsZW5ndGhPZkFycmF5TGlrZShpdGVyYWJsZSk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICAgIHJlc3VsdCA9IGNhbGxGbihpdGVyYWJsZVtpbmRleF0pO1xuICAgICAgICBpZiAocmVzdWx0ICYmIGlzUHJvdG90eXBlT2YoUmVzdWx0UHJvdG90eXBlLCByZXN1bHQpKSByZXR1cm4gcmVzdWx0O1xuICAgICAgfSByZXR1cm4gbmV3IFJlc3VsdChmYWxzZSk7XG4gICAgfVxuICAgIGl0ZXJhdG9yID0gZ2V0SXRlcmF0b3IoaXRlcmFibGUsIGl0ZXJGbik7XG4gIH1cblxuICBuZXh0ID0gSVNfUkVDT1JEID8gaXRlcmFibGUubmV4dCA6IGl0ZXJhdG9yLm5leHQ7XG4gIHdoaWxlICghKHN0ZXAgPSBjYWxsKG5leHQsIGl0ZXJhdG9yKSkuZG9uZSkge1xuICAgIHRyeSB7XG4gICAgICByZXN1bHQgPSBjYWxsRm4oc3RlcC52YWx1ZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsICd0aHJvdycsIGVycm9yKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiByZXN1bHQgPT0gJ29iamVjdCcgJiYgcmVzdWx0ICYmIGlzUHJvdG90eXBlT2YoUmVzdWx0UHJvdG90eXBlLCByZXN1bHQpKSByZXR1cm4gcmVzdWx0O1xuICB9IHJldHVybiBuZXcgUmVzdWx0KGZhbHNlKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXRlcmF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRlJyk7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBnZXRJdGVyYXRvckRpcmVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItZGlyZWN0Jyk7XG52YXIgaXRlcmF0b3JDbG9zZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1jbG9zZScpO1xudmFyIGl0ZXJhdG9ySGVscGVyV2l0aG91dENsb3NpbmdPbkVhcmx5RXJyb3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3ItaGVscGVyLXdpdGhvdXQtY2xvc2luZy1vbi1lYXJseS1lcnJvcicpO1xuXG52YXIgZmluZFdpdGhvdXRDbG9zaW5nT25FYXJseUVycm9yID0gaXRlcmF0b3JIZWxwZXJXaXRob3V0Q2xvc2luZ09uRWFybHlFcnJvcignZmluZCcsIFR5cGVFcnJvcik7XG5cbi8vIGBJdGVyYXRvci5wcm90b3R5cGUuZmluZGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWl0ZXJhdG9yLnByb3RvdHlwZS5maW5kXG4kKHsgdGFyZ2V0OiAnSXRlcmF0b3InLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiBmaW5kV2l0aG91dENsb3NpbmdPbkVhcmx5RXJyb3IgfSwge1xuICBmaW5kOiBmdW5jdGlvbiBmaW5kKHByZWRpY2F0ZSkge1xuICAgIGFuT2JqZWN0KHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBhQ2FsbGFibGUocHJlZGljYXRlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaXRlcmF0b3JDbG9zZSh0aGlzLCAndGhyb3cnLCBlcnJvcik7XG4gICAgfVxuXG4gICAgaWYgKGZpbmRXaXRob3V0Q2xvc2luZ09uRWFybHlFcnJvcikgcmV0dXJuIGNhbGwoZmluZFdpdGhvdXRDbG9zaW5nT25FYXJseUVycm9yLCB0aGlzLCBwcmVkaWNhdGUpO1xuXG4gICAgdmFyIHJlY29yZCA9IGdldEl0ZXJhdG9yRGlyZWN0KHRoaXMpO1xuICAgIHZhciBjb3VudGVyID0gMDtcbiAgICByZXR1cm4gaXRlcmF0ZShyZWNvcmQsIGZ1bmN0aW9uICh2YWx1ZSwgc3RvcCkge1xuICAgICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgY291bnRlcisrKSkgcmV0dXJuIHN0b3AodmFsdWUpO1xuICAgIH0sIHsgSVNfUkVDT1JEOiB0cnVlLCBJTlRFUlJVUFRFRDogdHJ1ZSB9KS5yZXN1bHQ7XG4gIH1cbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBnZXRJdGVyYXRvckRpcmVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItZGlyZWN0Jyk7XG52YXIgZ2V0SXRlcmF0b3JNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmosIHN0cmluZ0hhbmRsaW5nKSB7XG4gIGlmICghc3RyaW5nSGFuZGxpbmcgfHwgdHlwZW9mIG9iaiAhPT0gJ3N0cmluZycpIGFuT2JqZWN0KG9iaik7XG4gIHZhciBtZXRob2QgPSBnZXRJdGVyYXRvck1ldGhvZChvYmopO1xuICByZXR1cm4gZ2V0SXRlcmF0b3JEaXJlY3QoYW5PYmplY3QobWV0aG9kICE9PSB1bmRlZmluZWQgPyBjYWxsKG1ldGhvZCwgb2JqKSA6IG9iaikpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGdldEl0ZXJhdG9yRGlyZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvci1kaXJlY3QnKTtcbnZhciBnZXRJdGVyYXRvckZsYXR0ZW5hYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvci1mbGF0dGVuYWJsZScpO1xudmFyIGNyZWF0ZUl0ZXJhdG9yUHJveHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3ItY3JlYXRlLXByb3h5Jyk7XG52YXIgaXRlcmF0b3JDbG9zZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1jbG9zZScpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIGl0ZXJhdG9ySGVscGVyVGhyb3dzT25JbnZhbGlkSXRlcmF0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3ItaGVscGVyLXRocm93cy1vbi1pbnZhbGlkLWl0ZXJhdG9yJyk7XG52YXIgaXRlcmF0b3JIZWxwZXJXaXRob3V0Q2xvc2luZ09uRWFybHlFcnJvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1oZWxwZXItd2l0aG91dC1jbG9zaW5nLW9uLWVhcmx5LWVycm9yJyk7XG5cbnZhciBGTEFUX01BUF9XSVRIT1VUX1RIUk9XSU5HX09OX0lOVkFMSURfSVRFUkFUT1IgPSAhSVNfUFVSRVxuICAmJiAhaXRlcmF0b3JIZWxwZXJUaHJvd3NPbkludmFsaWRJdGVyYXRvcignZmxhdE1hcCcsIGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSk7XG52YXIgZmxhdE1hcFdpdGhvdXRDbG9zaW5nT25FYXJseUVycm9yID0gIUlTX1BVUkUgJiYgIUZMQVRfTUFQX1dJVEhPVVRfVEhST1dJTkdfT05fSU5WQUxJRF9JVEVSQVRPUlxuICAmJiBpdGVyYXRvckhlbHBlcldpdGhvdXRDbG9zaW5nT25FYXJseUVycm9yKCdmbGF0TWFwJywgVHlwZUVycm9yKTtcblxudmFyIEZPUkNFRCA9IElTX1BVUkUgfHwgRkxBVF9NQVBfV0lUSE9VVF9USFJPV0lOR19PTl9JTlZBTElEX0lURVJBVE9SIHx8IGZsYXRNYXBXaXRob3V0Q2xvc2luZ09uRWFybHlFcnJvcjtcblxudmFyIEl0ZXJhdG9yUHJveHkgPSBjcmVhdGVJdGVyYXRvclByb3h5KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGl0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcjtcbiAgdmFyIG1hcHBlciA9IHRoaXMubWFwcGVyO1xuICB2YXIgcmVzdWx0LCBpbm5lcjtcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGlmIChpbm5lciA9IHRoaXMuaW5uZXIpIHRyeSB7XG4gICAgICByZXN1bHQgPSBhbk9iamVjdChjYWxsKGlubmVyLm5leHQsIGlubmVyLml0ZXJhdG9yKSk7XG4gICAgICBpZiAoIXJlc3VsdC5kb25lKSByZXR1cm4gcmVzdWx0LnZhbHVlO1xuICAgICAgdGhpcy5pbm5lciA9IG51bGw7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgaXRlcmF0b3JDbG9zZShpdGVyYXRvciwgJ3Rocm93JywgZXJyb3IpOyB9XG5cbiAgICByZXN1bHQgPSBhbk9iamVjdChjYWxsKHRoaXMubmV4dCwgaXRlcmF0b3IpKTtcblxuICAgIGlmICh0aGlzLmRvbmUgPSAhIXJlc3VsdC5kb25lKSByZXR1cm47XG5cbiAgICB0cnkge1xuICAgICAgdGhpcy5pbm5lciA9IGdldEl0ZXJhdG9yRmxhdHRlbmFibGUobWFwcGVyKHJlc3VsdC52YWx1ZSwgdGhpcy5jb3VudGVyKyspLCBmYWxzZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgaXRlcmF0b3JDbG9zZShpdGVyYXRvciwgJ3Rocm93JywgZXJyb3IpOyB9XG4gIH1cbn0pO1xuXG4vLyBgSXRlcmF0b3IucHJvdG90eXBlLmZsYXRNYXBgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pdGVyYXRvci5wcm90b3R5cGUuZmxhdG1hcFxuJCh7IHRhcmdldDogJ0l0ZXJhdG9yJywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgZmxhdE1hcDogZnVuY3Rpb24gZmxhdE1hcChtYXBwZXIpIHtcbiAgICBhbk9iamVjdCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgYUNhbGxhYmxlKG1hcHBlcik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGl0ZXJhdG9yQ2xvc2UodGhpcywgJ3Rocm93JywgZXJyb3IpO1xuICAgIH1cblxuICAgIGlmIChmbGF0TWFwV2l0aG91dENsb3NpbmdPbkVhcmx5RXJyb3IpIHJldHVybiBjYWxsKGZsYXRNYXBXaXRob3V0Q2xvc2luZ09uRWFybHlFcnJvciwgdGhpcywgbWFwcGVyKTtcblxuICAgIHJldHVybiBuZXcgSXRlcmF0b3JQcm94eShnZXRJdGVyYXRvckRpcmVjdCh0aGlzKSwge1xuICAgICAgbWFwcGVyOiBtYXBwZXIsXG4gICAgICBpbm5lcjogbnVsbFxuICAgIH0pO1xuICB9XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mJyk7XG5cbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoY2xhc3NvZihhcmd1bWVudCkgPT09ICdTeW1ib2wnKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBhIFN5bWJvbCB2YWx1ZSB0byBhIHN0cmluZycpO1xuICByZXR1cm4gJFN0cmluZyhhcmd1bWVudCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChwYXNzZWQsIHJlcXVpcmVkKSB7XG4gIGlmIChwYXNzZWQgPCByZXF1aXJlZCkgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ05vdCBlbm91Z2ggYXJndW1lbnRzJyk7XG4gIHJldHVybiBwYXNzZWQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbicpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIHZhbGlkYXRlQXJndW1lbnRzTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3ZhbGlkYXRlLWFyZ3VtZW50cy1sZW5ndGgnKTtcblxudmFyICRVUkxTZWFyY2hQYXJhbXMgPSBVUkxTZWFyY2hQYXJhbXM7XG52YXIgVVJMU2VhcmNoUGFyYW1zUHJvdG90eXBlID0gJFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGU7XG52YXIgYXBwZW5kID0gdW5jdXJyeVRoaXMoVVJMU2VhcmNoUGFyYW1zUHJvdG90eXBlLmFwcGVuZCk7XG52YXIgJGRlbGV0ZSA9IHVuY3VycnlUaGlzKFVSTFNlYXJjaFBhcmFtc1Byb3RvdHlwZVsnZGVsZXRlJ10pO1xudmFyIGZvckVhY2ggPSB1bmN1cnJ5VGhpcyhVUkxTZWFyY2hQYXJhbXNQcm90b3R5cGUuZm9yRWFjaCk7XG52YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xudmFyIHBhcmFtcyA9IG5ldyAkVVJMU2VhcmNoUGFyYW1zKCdhPTEmYT0yJmI9MycpO1xuXG5wYXJhbXNbJ2RlbGV0ZSddKCdhJywgMSk7XG4vLyBgdW5kZWZpbmVkYCBjYXNlIGlzIGEgQ2hyb21pdW0gMTE3IGJ1Z1xuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MTQyMjJcbnBhcmFtc1snZGVsZXRlJ10oJ2InLCB1bmRlZmluZWQpO1xuXG5pZiAocGFyYW1zICsgJycgIT09ICdhPTInKSB7XG4gIGRlZmluZUJ1aWx0SW4oVVJMU2VhcmNoUGFyYW1zUHJvdG90eXBlLCAnZGVsZXRlJywgZnVuY3Rpb24gKG5hbWUgLyogLCB2YWx1ZSAqLykge1xuICAgIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciAkdmFsdWUgPSBsZW5ndGggPCAyID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzFdO1xuICAgIGlmIChsZW5ndGggJiYgJHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiAkZGVsZXRlKHRoaXMsIG5hbWUpO1xuICAgIHZhciBlbnRyaWVzID0gW107XG4gICAgZm9yRWFjaCh0aGlzLCBmdW5jdGlvbiAodiwgaykgeyAvLyBhbHNvIHZhbGlkYXRlcyBgdGhpc2BcbiAgICAgIHB1c2goZW50cmllcywgeyBrZXk6IGssIHZhbHVlOiB2IH0pO1xuICAgIH0pO1xuICAgIHZhbGlkYXRlQXJndW1lbnRzTGVuZ3RoKGxlbmd0aCwgMSk7XG4gICAgdmFyIGtleSA9IHRvU3RyaW5nKG5hbWUpO1xuICAgIHZhciB2YWx1ZSA9IHRvU3RyaW5nKCR2YWx1ZSk7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgZGluZGV4ID0gMDtcbiAgICB2YXIgZm91bmQgPSBmYWxzZTtcbiAgICB2YXIgZW50cmllc0xlbmd0aCA9IGVudHJpZXMubGVuZ3RoO1xuICAgIHZhciBlbnRyeTtcbiAgICB3aGlsZSAoaW5kZXggPCBlbnRyaWVzTGVuZ3RoKSB7XG4gICAgICBlbnRyeSA9IGVudHJpZXNbaW5kZXgrK107XG4gICAgICBpZiAoZm91bmQgfHwgZW50cnkua2V5ID09PSBrZXkpIHtcbiAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAkZGVsZXRlKHRoaXMsIGVudHJ5LmtleSk7XG4gICAgICB9IGVsc2UgZGluZGV4Kys7XG4gICAgfVxuICAgIHdoaWxlIChkaW5kZXggPCBlbnRyaWVzTGVuZ3RoKSB7XG4gICAgICBlbnRyeSA9IGVudHJpZXNbZGluZGV4KytdO1xuICAgICAgaWYgKCEoZW50cnkua2V5ID09PSBrZXkgJiYgZW50cnkudmFsdWUgPT09IHZhbHVlKSkgYXBwZW5kKHRoaXMsIGVudHJ5LmtleSwgZW50cnkudmFsdWUpO1xuICAgIH1cbiAgfSwgeyBlbnVtZXJhYmxlOiB0cnVlLCB1bnNhZmU6IHRydWUgfSk7XG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgdmFsaWRhdGVBcmd1bWVudHNMZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdmFsaWRhdGUtYXJndW1lbnRzLWxlbmd0aCcpO1xuXG52YXIgJFVSTFNlYXJjaFBhcmFtcyA9IFVSTFNlYXJjaFBhcmFtcztcbnZhciBVUkxTZWFyY2hQYXJhbXNQcm90b3R5cGUgPSAkVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZTtcbnZhciBnZXRBbGwgPSB1bmN1cnJ5VGhpcyhVUkxTZWFyY2hQYXJhbXNQcm90b3R5cGUuZ2V0QWxsKTtcbnZhciAkaGFzID0gdW5jdXJyeVRoaXMoVVJMU2VhcmNoUGFyYW1zUHJvdG90eXBlLmhhcyk7XG52YXIgcGFyYW1zID0gbmV3ICRVUkxTZWFyY2hQYXJhbXMoJ2E9MScpO1xuXG4vLyBgdW5kZWZpbmVkYCBjYXNlIGlzIGEgQ2hyb21pdW0gMTE3IGJ1Z1xuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MTQyMjJcbmlmIChwYXJhbXMuaGFzKCdhJywgMikgfHwgIXBhcmFtcy5oYXMoJ2EnLCB1bmRlZmluZWQpKSB7XG4gIGRlZmluZUJ1aWx0SW4oVVJMU2VhcmNoUGFyYW1zUHJvdG90eXBlLCAnaGFzJywgZnVuY3Rpb24gaGFzKG5hbWUgLyogLCB2YWx1ZSAqLykge1xuICAgIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciAkdmFsdWUgPSBsZW5ndGggPCAyID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzFdO1xuICAgIGlmIChsZW5ndGggJiYgJHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiAkaGFzKHRoaXMsIG5hbWUpO1xuICAgIHZhciB2YWx1ZXMgPSBnZXRBbGwodGhpcywgbmFtZSk7IC8vIGFsc28gdmFsaWRhdGVzIGB0aGlzYFxuICAgIHZhbGlkYXRlQXJndW1lbnRzTGVuZ3RoKGxlbmd0aCwgMSk7XG4gICAgdmFyIHZhbHVlID0gdG9TdHJpbmcoJHZhbHVlKTtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHdoaWxlIChpbmRleCA8IHZhbHVlcy5sZW5ndGgpIHtcbiAgICAgIGlmICh2YWx1ZXNbaW5kZXgrK10gPT09IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICB9IHJldHVybiBmYWxzZTtcbiAgfSwgeyBlbnVtZXJhYmxlOiB0cnVlLCB1bnNhZmU6IHRydWUgfSk7XG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZGVmaW5lQnVpbHRJbkFjY2Vzc29yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbi1hY2Nlc3NvcicpO1xuXG52YXIgVVJMU2VhcmNoUGFyYW1zUHJvdG90eXBlID0gVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZTtcbnZhciBmb3JFYWNoID0gdW5jdXJyeVRoaXMoVVJMU2VhcmNoUGFyYW1zUHJvdG90eXBlLmZvckVhY2gpO1xuXG4vLyBgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5zaXplYCBnZXR0ZXJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS93aGF0d2cvdXJsL3B1bGwvNzM0XG5pZiAoREVTQ1JJUFRPUlMgJiYgISgnc2l6ZScgaW4gVVJMU2VhcmNoUGFyYW1zUHJvdG90eXBlKSkge1xuICBkZWZpbmVCdWlsdEluQWNjZXNzb3IoVVJMU2VhcmNoUGFyYW1zUHJvdG90eXBlLCAnc2l6ZScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIHNpemUoKSB7XG4gICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgZm9yRWFjaCh0aGlzLCBmdW5jdGlvbiAoKSB7IGNvdW50Kys7IH0pO1xuICAgICAgcmV0dXJuIGNvdW50O1xuICAgIH0sXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGVudW1lcmFibGU6IHRydWVcbiAgfSk7XG59XG4iLCAiZXhwb3J0IHthZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXJ9IGZyb20gJy4vbW9kdWxlcy9hZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXInO1xuZXhwb3J0IHtjaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlfSBmcm9tICcuL21vZHVsZXMvY2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZSc7XG5leHBvcnQge2NoZWNrQTExeUNvbmZpcm1LZXl9IGZyb20gJy4vbW9kdWxlcy9jaGVja0ExMXlDb25maXJtS2V5JztcbmV4cG9ydCB7Y2hlY2tEZXBlbmRlbmNpZXN9IGZyb20gJy4vbW9kdWxlcy9jaGVja0RlcGVuZGVuY2llcy50cyc7XG5leHBvcnQge2RlbGF5fSBmcm9tICcuL21vZHVsZXMvZGVsYXknO1xuZXhwb3J0IHtmaW5kVmFyaWFudHN9IGZyb20gJy4vbW9kdWxlcy9maW5kVmFyaWFudHMnO1xuZXhwb3J0IHtnZW5lcmF0ZUFycmF5fSBmcm9tICcuL21vZHVsZXMvZ2VuZXJhdGVBcnJheSc7XG5leHBvcnQge2dlbmVyYXRlU3ZnRGF0YVVybH0gZnJvbSAnLi9tb2R1bGVzL2dlbmVyYXRlU3ZnRGF0YVVybCc7XG5leHBvcnQge2dldEJvZHl9IGZyb20gJy4vbW9kdWxlcy9nZXRCb2R5JztcbmV4cG9ydCB7aW5pdE13QXBpfSBmcm9tICcuL21vZHVsZXMvaW5pdE13QXBpJztcbmV4cG9ydCB7aXNWYWxpZEtleX0gZnJvbSAnLi9tb2R1bGVzL2lzVmFsaWRLZXknO1xuZXhwb3J0IHtNd1VyaX0gZnJvbSAnLi9tb2R1bGVzL213VXJpJztcbmV4cG9ydCB7b291aUNvbmZpcm1XaXRoU3R5bGV9IGZyb20gJy4vbW9kdWxlcy9vb3VpQ29uZmlybVdpdGhTdHlsZSc7XG5leHBvcnQge3F1ZXJ5R2xvYmFsVXNlckdyb3Vwc30gZnJvbSAnLi9tb2R1bGVzL3F1ZXJ5R2xvYmFsVXNlckdyb3Vwcyc7XG5leHBvcnQge3F1ZXJ5VXNlckdyb3Vwc30gZnJvbSAnLi9tb2R1bGVzL3F1ZXJ5VXNlckdyb3Vwcyc7XG5leHBvcnQge3Njcm9sbFRvcH0gZnJvbSAnLi9tb2R1bGVzL3Njcm9sbFRvcCc7XG5leHBvcnQge3VzZXJJc0luR3JvdXB9IGZyb20gJy4vbW9kdWxlcy91c2VySXNJbkdyb3VwJztcbmV4cG9ydCB7dW5pcXVlQXJyYXl9IGZyb20gJy4vbW9kdWxlcy91bmlxdWVBcnJheSc7XG5leHBvcnQge2dldFdwU3VtbWFyeUNvbnRlbnQsIHNldFdwU3VtbWFyeUNvbnRlbnR9IGZyb20gJy4vbW9kdWxlcy93cFN1bW1hcnlDb250ZW50JztcbmV4cG9ydCB7Z2V0V3BUZXh0Ym94MUNvbnRlbnQsIHNldFdwVGV4dGJveDFDb250ZW50fSBmcm9tICcuL21vZHVsZXMvd3BUZXh0Ym94MUNvbnRlbnQnO1xuIiwgInR5cGUgQWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyID0gPFxuXHRUYXJnZXQgZXh0ZW5kcyBEb2N1bWVudCB8IEhUTUxFbGVtZW50IHwgRWxlbWVudCB8IE1lZGlhUXVlcnlMaXN0IHwgV2luZG93LFxuXHRUeXBlIGV4dGVuZHMgVGFyZ2V0IGV4dGVuZHMgRG9jdW1lbnRcblx0XHQ/IGtleW9mIERvY3VtZW50RXZlbnRNYXBcblx0XHQ6IFRhcmdldCBleHRlbmRzIEhUTUxFbGVtZW50XG5cdFx0XHQ/IGtleW9mIEhUTUxFbGVtZW50RXZlbnRNYXBcblx0XHRcdDogVGFyZ2V0IGV4dGVuZHMgTWVkaWFRdWVyeUxpc3Rcblx0XHRcdFx0PyBrZXlvZiBNZWRpYVF1ZXJ5TGlzdEV2ZW50TWFwXG5cdFx0XHRcdDogVGFyZ2V0IGV4dGVuZHMgV2luZG93XG5cdFx0XHRcdFx0PyBrZXlvZiBXaW5kb3dFdmVudE1hcFxuXHRcdFx0XHRcdDoga2V5b2YgR2xvYmFsRXZlbnRIYW5kbGVyc0V2ZW50TWFwLFxuXHRMaXN0ZW5lciBleHRlbmRzIFRhcmdldCBleHRlbmRzIERvY3VtZW50XG5cdFx0PyBUeXBlIGV4dGVuZHMga2V5b2YgRG9jdW1lbnRFdmVudE1hcFxuXHRcdFx0PyAodGhpczogVGFyZ2V0LCBldmVudDogRG9jdW1lbnRFdmVudE1hcFtUeXBlXSkgPT4gdW5rbm93blxuXHRcdFx0OiAodGhpczogVGFyZ2V0LCBldmVudDogRXZlbnQpID0+IHVua25vd25cblx0XHQ6IFRhcmdldCBleHRlbmRzIEhUTUxFbGVtZW50XG5cdFx0XHQ/IFR5cGUgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudEV2ZW50TWFwXG5cdFx0XHRcdD8gKHRoaXM6IFRhcmdldCwgZXZlbnQ6IEhUTUxFbGVtZW50RXZlbnRNYXBbVHlwZV0pID0+IHVua25vd25cblx0XHRcdFx0OiAodGhpczogVGFyZ2V0LCBldmVudDogRXZlbnQpID0+IHVua25vd25cblx0XHRcdDogVGFyZ2V0IGV4dGVuZHMgRWxlbWVudFxuXHRcdFx0XHQ/IFR5cGUgZXh0ZW5kcyBrZXlvZiBFbGVtZW50RXZlbnRNYXBcblx0XHRcdFx0XHQ/ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFbGVtZW50RXZlbnRNYXBbVHlwZV0pID0+IHVua25vd25cblx0XHRcdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93blxuXHRcdFx0XHQ6IFRhcmdldCBleHRlbmRzIE1lZGlhUXVlcnlMaXN0XG5cdFx0XHRcdFx0PyBUeXBlIGV4dGVuZHMga2V5b2YgTWVkaWFRdWVyeUxpc3RFdmVudE1hcFxuXHRcdFx0XHRcdFx0PyAodGhpczogVGFyZ2V0LCBldmVudDogTWVkaWFRdWVyeUxpc3RFdmVudE1hcFtUeXBlXSkgPT4gdW5rbm93blxuXHRcdFx0XHRcdFx0OiAodGhpczogVGFyZ2V0LCBldmVudDogRXZlbnQpID0+IHVua25vd25cblx0XHRcdFx0XHQ6IFRhcmdldCBleHRlbmRzIFdpbmRvd1xuXHRcdFx0XHRcdFx0PyBUeXBlIGV4dGVuZHMga2V5b2YgV2luZG93RXZlbnRNYXBcblx0XHRcdFx0XHRcdFx0PyAodGhpczogVGFyZ2V0LCBldmVudDogV2luZG93RXZlbnRNYXBbVHlwZV0pID0+IHVua25vd25cblx0XHRcdFx0XHRcdFx0OiAodGhpczogVGFyZ2V0LCBldmVudDogRXZlbnQpID0+IHVua25vd25cblx0XHRcdFx0XHRcdDogKHRoaXM6IFRhcmdldCwgZXZlbnQ6IEV2ZW50KSA9PiB1bmtub3duLFxuPih7XG5cdHRhcmdldCxcblx0dHlwZSxcblx0bGlzdGVuZXIsXG5cdG9wdGlvbnMsXG59OiB7XG5cdHRhcmdldDogVGFyZ2V0O1xuXHR0eXBlOiBUeXBlO1xuXHRsaXN0ZW5lcjogTGlzdGVuZXI7XG5cdG9wdGlvbnM/OiBBZGRFdmVudExpc3RlbmVyT3B0aW9ucztcbn0pID0+IHtcblx0cmVtb3ZlOiAoKSA9PiB2b2lkO1xufTtcblxuY29uc3QgYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyOiBBZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIgPSAoe3RhcmdldCwgdHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMgPSB7fX0pID0+IHtcblx0dGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIgYXMgRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdCwgb3B0aW9ucyk7XG5cdHJldHVybiB7XG5cdFx0cmVtb3ZlOiAoKTogdm9pZCA9PiB7XG5cdFx0XHR0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciBhcyBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0LCBvcHRpb25zKTtcblx0XHR9LFxuXHR9O1xufTtcblxuZXhwb3J0IHt0eXBlIEFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3ZlciwgYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyfTtcbiIsICJ0eXBlIENoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUgPSAoZXZlbnQ6IE1vdXNlRXZlbnQgfCBKUXVlcnkuVHJpZ2dlcmVkRXZlbnQsIG9wYWNpdHk/OiBudW1iZXIpID0+IHZvaWQ7XG5cbmNvbnN0IGNoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmU6IENoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUgPSAoZXZlbnQsIG9wYWNpdHkgPSAwLjcpID0+IHtcblx0KGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLm9wYWNpdHkgPSBldmVudC50eXBlID09PSAnbW91c2VlbnRlcicgPyAnMScgOiBvcGFjaXR5LnRvU3RyaW5nKCk7XG59O1xuXG5leHBvcnQge3R5cGUgQ2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZSwgY2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZX07XG4iLCAidHlwZSBDaGVja0ExMXlDb25maXJtS2V5ID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50IHwgTW91c2VFdmVudCB8IEpRdWVyeS5DbGlja0V2ZW50IHwgSlF1ZXJ5LktleURvd25FdmVudCkgPT4gYm9vbGVhbjtcblxuY29uc3QgY2hlY2tBMTF5Q29uZmlybUtleTogQ2hlY2tBMTF5Q29uZmlybUtleSA9IChldmVudCk6IGJvb2xlYW4gPT4ge1xuXHRpZiAoWydjbGljaycsICdrZXlkb3duJ10uaW5jbHVkZXMoZXZlbnQudHlwZSkpIHtcblx0XHRpZiAoZXZlbnQudHlwZSA9PT0gJ2tleWRvd24nKSB7XG5cdFx0XHRyZXR1cm4gWydFbnRlcicsICcgJ10uaW5jbHVkZXMoKGV2ZW50IGFzIEtleWJvYXJkRXZlbnQpLmtleSk7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCB7dHlwZSBDaGVja0ExMXlDb25maXJtS2V5LCBjaGVja0ExMXlDb25maXJtS2V5fTtcbiIsICJ0eXBlIEdlbmVyYXRlQXJyYXkgPSB0eXBlb2YgZ2VuZXJhdGVBcnJheTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVBcnJheTxUIGV4dGVuZHMgW10+KC4uLmFyZ3M6IChUIHwgVFtdKVtdKTogVFtdO1xuZnVuY3Rpb24gZ2VuZXJhdGVBcnJheTxUIGV4dGVuZHMgTm9kZUxpc3Q+KC4uLmFyZ3M6IChUIHwgVFtdKVtdKTogTm9kZVtdO1xuZnVuY3Rpb24gZ2VuZXJhdGVBcnJheTxUID0gdW5rbm93bj4oLi4uYXJnczogKFQgfCBUW10pW10pOiBUW107XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1zdHlsZVxuZnVuY3Rpb24gZ2VuZXJhdGVBcnJheTxUPiguLi5hcmdzOiAoVCB8IFRbXSlbXSk6IFRbXSB7XG5cdHJldHVybiBhcmdzLmZsYXRNYXAoKGFyZykgPT4ge1xuXHRcdGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdHJldHVybiBhcmc7XG5cdFx0fVxuXG5cdFx0aWYgKGFyZyBpbnN0YW5jZW9mIE5vZGVMaXN0KSB7XG5cdFx0XHRyZXR1cm4gWy4uLmFyZ10gYXMgVDtcblx0XHR9XG5cblx0XHRyZXR1cm4gW2FyZ107XG5cdH0pO1xufVxuXG5leHBvcnQge3R5cGUgR2VuZXJhdGVBcnJheSwgZ2VuZXJhdGVBcnJheX07XG4iLCAidHlwZSBJbml0TXdBcGkgPSB0eXBlb2YgaW5pdE13QXBpO1xuXG4vKipcbiAqIEByZXF1aXJlcyBtZWRpYXdpa2kuYXBpXG4gKiBAcGFyYW0ge3N0cmluZ30gW3VzZXJBZ2VudF1cbiAqIEBwYXJhbSB7c3RyaW5nfSBbYXBpVXJpXVxuICogQHJldHVybiB7bXcuQXBpfG13LkZvcmVpZ25BcGl9XG4gKi9cbmZ1bmN0aW9uIGluaXRNd0FwaSh1c2VyQWdlbnQ/OiBzdHJpbmcpOiBtdy5BcGk7XG5mdW5jdGlvbiBpbml0TXdBcGkodXNlckFnZW50OiBzdHJpbmcsIGFwaVVyaTogc3RyaW5nKTogbXcuRm9yZWlnbkFwaTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLXN0eWxlXG5mdW5jdGlvbiBpbml0TXdBcGkodXNlckFnZW50Pzogc3RyaW5nLCBhcGlVcmk/OiBzdHJpbmcpOiBtdy5BcGkgfCBtdy5Gb3JlaWduQXBpIHtcblx0Y29uc3QgYXBpT3B0aW9ucyA9IHtcblx0XHRhamF4OiB7XG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdCdBcGktVXNlci1BZ2VudCc6IHVzZXJBZ2VudCA/IGBZc0FyY2hpdmVzLzEuMSAoJHt1c2VyQWdlbnR9KWAgOiAnWXNBcmNoaXZlcy8xLjEnLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9O1xuXG5cdGlmIChhcGlVcmkpIHtcblx0XHRyZXR1cm4gbmV3IG13LkZvcmVpZ25BcGkoYXBpVXJpLCBhcGlPcHRpb25zKTtcblx0fVxuXG5cdHJldHVybiBuZXcgbXcuQXBpKGFwaU9wdGlvbnMpO1xufVxuXG5leHBvcnQge3R5cGUgSW5pdE13QXBpLCBpbml0TXdBcGl9O1xuIiwgInR5cGUgVW5pcXVlQXJyYXkgPSB0eXBlb2YgdW5pcXVlQXJyYXk7XG5cbmNvbnN0IHVuaXF1ZUFycmF5ID0gZnVuY3Rpb24gdW5pcXVlQXJyYXk8VD4oYXJnczogVFtdKTogVFtdIHtcblx0LyoqIVxuXHQgKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQ0MtQlktU0EtNC4wXG5cdCAqXG5cdCAqIEBzb3VyY2Uge0BsaW5rIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzkyMjk2NDUvcmVtb3ZlLWR1cGxpY2F0ZS12YWx1ZXMtZnJvbS1qcy1hcnJheS85MjI5ODJ9XG5cdCAqIEBsaWNlbnNlIENDLUJZLVNBLTQuMFxuXHQgKi9cblx0Y29uc3QgcmVzdWx0OiB0eXBlb2YgYXJncyA9IFtdO1xuXHRmb3IgKGNvbnN0IGl0ZW0gb2YgYXJncykge1xuXHRcdGlmICghcmVzdWx0LmluY2x1ZGVzKGl0ZW0pKSB7XG5cdFx0XHRyZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBpdGVtOyAvLyBSZXBsYWNlIEFycmF5I3B1c2ggdG8gYXZvaWQgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IHt0eXBlIFVuaXF1ZUFycmF5LCB1bmlxdWVBcnJheX07XG4iLCAiaW1wb3J0IHtnZW5lcmF0ZUFycmF5fSBmcm9tICcuL2dlbmVyYXRlQXJyYXknO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJy4vaW5pdE13QXBpJztcbmltcG9ydCB7dW5pcXVlQXJyYXl9IGZyb20gJy4vdW5pcXVlQXJyYXknO1xuXG50eXBlIEJvb2xlYW4gPSAnMCcgfCAnMScgfCAwIHwgMTtcbnR5cGUgQ2hlY2tEZXBlbmRlbmNpZXMgPSB0eXBlb2YgY2hlY2tEZXBlbmRlbmNpZXM7XG5cbmZ1bmN0aW9uIGNoZWNrRGVwZW5kZW5jaWVzKGdhZGdldE5hbWVzOiBzdHJpbmcgfCBzdHJpbmdbXSk6IFByb21pc2U8dm9pZD47XG5mdW5jdGlvbiBjaGVja0RlcGVuZGVuY2llcyhnYWRnZXROYW1lczogc3RyaW5nLCBvcHRpb246IEJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtc3R5bGVcbmFzeW5jIGZ1bmN0aW9uIGNoZWNrRGVwZW5kZW5jaWVzKGdhZGdldE5hbWVzOiBzdHJpbmcgfCBzdHJpbmdbXSwgb3B0aW9uPzogQm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaSgnVXRpbC1DaGVja0RlcGVuZGVuY2llcycpO1xuXHRjb25zdCBnYWRnZXRzID0gdW5pcXVlQXJyYXkoZ2VuZXJhdGVBcnJheShnYWRnZXROYW1lcykpO1xuXHRvcHRpb24gfHw9IDE7XG5cblx0Zm9yIChjb25zdCBnYWRnZXQgb2YgZ2FkZ2V0cykge1xuXHRcdGlmIChcblx0XHRcdChvcHRpb24gPT09ICcwJyAmJiBtdy51c2VyLm9wdGlvbnMuZ2V0KGBnYWRnZXQtJHtnYWRnZXR9YCkpIHx8XG5cdFx0XHQob3B0aW9uID09PSAnMScgJiYgIW13LnVzZXIub3B0aW9ucy5nZXQoYGdhZGdldC0ke2dhZGdldH1gKSlcblx0XHQpIHtcblx0XHRcdGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbih7XG5cdFx0XHRcdGFjdGlvbjogJ29wdGlvbnMnLFxuXHRcdFx0XHRjaGFuZ2U6IGBnYWRnZXQtJHtnYWRnZXR9PSR7b3B0aW9ufWAsXG5cdFx0XHR9IGFzIEFwaU9wdGlvbnNQYXJhbXMpO1xuXHRcdFx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKGBleHQuZ2FkZ2V0LiR7Z2FkZ2V0fWApO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQge3R5cGUgQ2hlY2tEZXBlbmRlbmNpZXMsIGNoZWNrRGVwZW5kZW5jaWVzfTtcbiIsICJ0eXBlIERlbGF5ID0gKG1zOiBudW1iZXIpID0+IFByb21pc2U8dm9pZD47XG5cbmNvbnN0IGRlbGF5OiBEZWxheSA9IChtcykgPT4ge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6ICgpID0+IHZvaWQpOiB2b2lkID0+IHtcblx0XHRzZXRUaW1lb3V0KHJlc29sdmUsIG1zKTtcblx0fSk7XG59O1xuXG5leHBvcnQge3R5cGUgRGVsYXksIGRlbGF5fTtcbiIsICJpbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnLi9pbml0TXdBcGknO1xuaW1wb3J0IHt1bmlxdWVBcnJheX0gZnJvbSAnLi91bmlxdWVBcnJheSc7XG5cbnR5cGUgRmluZFZhcmlhbnRzID0gdHlwZW9mIGZpbmRWYXJpYW50cztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtc3R5bGVcbmFzeW5jIGZ1bmN0aW9uIGZpbmRWYXJpYW50cyh0ZXh0OiBzdHJpbmcpIHtcblx0Y29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoJ1V0aWwtRmluZFZhcmlhbnRzJyk7XG5cblx0Y29uc3QgVkFSSUFOVFMgPSBbJ3poLWhhbnMnLCAnemgtaGFudCcsICd6aC1jbicsICd6aC1oaycsICd6aC1tbycsICd6aC1zZycsICd6aC1teScsICd6aC10dyddO1xuXG5cdGNvbnN0IGFsbFZhcmlhbnRzOiBzdHJpbmdbXSA9IFtdO1xuXG5cdGNvbnN0IHBhcmFtczogQXBpUGFyc2VQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdGNvbnRlbnRtb2RlbDogJ3dpa2l0ZXh0Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogWydkaXNwbGF5dGl0bGUnXSxcblx0XHR0aXRsZTogJ3RlbXAnLFxuXHRcdHRleHQsXG5cdH07XG5cblx0Zm9yIChjb25zdCB2YXJpYW50IG9mIFZBUklBTlRTKSB7XG5cdFx0cGFyYW1zLnVzZWxhbmcgPSB2YXJpYW50O1xuXHRcdHBhcmFtcy52YXJpYW50ID0gdmFyaWFudDtcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KHBhcmFtcyk7XG5cblx0XHRjb25zdCBkaXNwbGF5dGl0bGUgPSByZXNwb25zZT8uWydxdWVyeSddPy5kaXNwbGF5dGl0bGUgYXMgc3RyaW5nO1xuXHRcdGNvbnN0IHZhcmlhbnRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmFyaWFudCcpO1xuXHRcdHZhcmlhbnRFbGVtZW50LmlubmVySFRNTCA9IGRpc3BsYXl0aXRsZTtcblxuXHRcdGlmICh2YXJpYW50RWxlbWVudC50ZXh0Q29udGVudCkge1xuXHRcdFx0YWxsVmFyaWFudHNbYWxsVmFyaWFudHMubGVuZ3RoXSA9IHZhcmlhbnRFbGVtZW50LnRleHRDb250ZW50O1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB1bmlxdWVBcnJheShhbGxWYXJpYW50cyk7XG59XG5cbmV4cG9ydCB7dHlwZSBGaW5kVmFyaWFudHMsIGZpbmRWYXJpYW50c307XG4iLCAidHlwZSBHZW5lcmF0ZVN2Z0RhdGFVcmwgPSAoc3ZnOiBzdHJpbmcpID0+IHN0cmluZztcblxuY29uc3QgZ2VuZXJhdGVTdmdEYXRhVXJsOiBHZW5lcmF0ZVN2Z0RhdGFVcmwgPSAoc3ZnKSA9PiB7XG5cdC8qKiFcblx0ICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVFxuXHQgKlxuXHQgKiBAc291cmNlIHN2Zy10by1kYXRhLXVyaS5qcyB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2hleWFsbGFuL3N2Zy10by1kYXRhLXVyaS99XG5cdCAqIEBhdXRob3IgQWxsYW4gTW9yZW5vXG5cdCAqIEBsaWNlbnNlIE1JVCB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2hleWFsbGFuL3N2Zy10by1kYXRhLXVyaS9ibG9iL21hc3Rlci9MSUNFTlNFfVxuXHQgKlxuXHQgKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdCAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0ICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHQgKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdCAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHQgKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXHQgKlxuXHQgKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0ICogY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblx0ICpcblx0ICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHQgKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0ICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdCAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0ICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0ICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0ICogU09GVFdBUkUuXG5cdCAqL1xuXHRzdmcgPSBzdmcudHJpbSgpO1xuXHQvLyByZW1vdmUgeG1sLCBkb2N0eXBlLCBnZW5lcmF0b3IuLi5cblx0c3ZnID0gc3ZnLnNsaWNlKHN2Zy5pbmRleE9mKCc8c3ZnJykpO1xuXHQvLyBzb2Z0IHZhbGlkYXRlXG5cdGlmICghc3ZnLnN0YXJ0c1dpdGgoJzxzdmcnKSB8fCAhc3ZnLmVuZHNXaXRoKCdzdmc+JykpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblx0Ly8gYWRkIG5hbWVzcGFjZSBpZiBuZWNlc3Nhcnlcblx0aWYgKCFzdmcuaW5jbHVkZXMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJykpIHtcblx0XHRzdmcgPSBzdmcucmVwbGFjZSgvPHN2Zy9nLCBcIjxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1wiKTtcblx0fVxuXHQvLyByZW1vdmUgY29tbWVudHNcblx0c3ZnID0gc3ZnLnJlcGxhY2UoLzwhLS0uezEsfS0tPi9nLCAnJyk7XG5cdC8vIHJlbW92ZSB1bm5lY2Vzc2FyeSBhdHRyaWJ1dGVzXG5cdHN2ZyA9IHN2Zy5yZXBsYWNlKC92ZXJzaW9uPVtcIiddKC57MCx9PylbXCInXSg/PVtcXHM+XSkvZywgJycpO1xuXHQvLyByZXBsYWNlIG5lc3RlZCBxdW90ZXNcblx0c3ZnID0gc3ZnLnJlcGxhY2UoL1wiJyguezEsfSknXCIvZywgXCInJDEnXCIpO1xuXHQvLyByZXBsYWNlIGRvdWJsZSBxdW90ZXNcblx0c3ZnID0gc3ZnLnJlcGxhY2UoL1wiL2csIFwiJ1wiKTtcblx0Ly8gcmVtb3ZlIGVtcHR5IHNwYWNlcyBiZXR3ZWVuIHRhZ3Ncblx0c3ZnID0gc3ZnLnJlcGxhY2UoLz5cXHN7MSx9PC9nLCAnPjwnKTtcblx0Ly8gcmVtb3ZlIGR1cGxpY2F0ZSBzcGFjZXNcblx0c3ZnID0gc3ZnLnJlcGxhY2UoL1xcc3syLH0vZywgJyAnKTtcblx0Ly8gdHJpbSBhZ2FpblxuXHRzdmcgPSBzdmcudHJpbSgpO1xuXHQvLyBzb2Z0IHZhbGlkYXRlIGFnYWluXG5cdGlmICghc3ZnLnN0YXJ0c1dpdGgoJzxzdmcnKSB8fCAhc3ZnLmVuZHNXaXRoKCdzdmc+JykpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblx0Ly8gcmVwbGFjZSBhbXBlcnNhbmRcblx0c3ZnID0gc3ZnLnJlcGxhY2UoLyYvZywgJyZhbXA7Jyk7XG5cdC8vIGVuY29kZSBvbmx5IHVuc2FmZSBzeW1ib2xzXG5cdHN2ZyA9IHN2Zy5yZXBsYWNlKC9bJSM8Pj9bXFxcXFxcXV5ge3x9XS9nLCBlbmNvZGVVUklDb21wb25lbnQpO1xuXHQvLyBidWlsZCBkYXRhIHVyaVxuXHRzdmcgPSBgZGF0YTppbWFnZS9zdmcreG1sLCR7c3ZnfWA7XG5cdC8vIG9rLCBzaGlwIGl0IVxuXHRyZXR1cm4gc3ZnO1xufTtcblxuZXhwb3J0IHt0eXBlIEdlbmVyYXRlU3ZnRGF0YVVybCwgZ2VuZXJhdGVTdmdEYXRhVXJsfTtcbiIsICJ0eXBlIEdldEJvZHkgPSAoKSA9PiBKUXVlcnkuVGhlbmFibGU8SlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4+O1xuXG5jb25zdCBnZXRCb2R5ID0gKCkgPT4ge1xuXHRyZXR1cm4gJC5yZWFkeS50aGVuKCgpOiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9PiB7XG5cdFx0Y29uc3QgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0gJCgnYm9keScpO1xuXG5cdFx0cmV0dXJuICRib2R5O1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7dHlwZSBHZXRCb2R5LCBnZXRCb2R5fTtcbiIsICJ0eXBlIElzVmFsaWRLZXkgPSB0eXBlb2YgaXNWYWxpZEtleTtcblxuY29uc3QgaXNWYWxpZEtleSA9IChvYmplY3Q6IG9iamVjdCwga2V5OiBzdHJpbmcgfCBudW1iZXIgfCBzeW1ib2wpOiBrZXkgaXMga2V5b2YgdHlwZW9mIG9iamVjdCA9PiB7XG5cdHJldHVybiBrZXkgaW4gb2JqZWN0O1xufTtcblxuZXhwb3J0IHt0eXBlIElzVmFsaWRLZXksIGlzVmFsaWRLZXl9O1xuIiwgInR5cGUgQ2xhc3NNd1VyaSA9IHR5cGVvZiBNd1VyaTtcblxuY2xhc3MgTXdVcmkgZXh0ZW5kcyBVUkwge1xuXHRleHRlbmQob2JqZWN0OiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSkge1xuXHRcdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9iamVjdCkpIHtcblx0XHRcdHRoaXMuc2VhcmNoUGFyYW1zLnNldChrZXksIHZhbHVlKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0Z2V0UmVsYXRpdmVQYXRoKCkge1xuXHRcdHJldHVybiB0aGlzLnBhdGhuYW1lICsgdGhpcy5zZWFyY2ggKyB0aGlzLmhhc2g7XG5cdH1cbn1cblxuZXhwb3J0IHt0eXBlIENsYXNzTXdVcmksIE13VXJpfTtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuXG50eXBlIE9vdWlDb25maXJtV2l0aFN0eWxlID0gKG1lc3NhZ2U6IHN0cmluZykgPT4gSlF1ZXJ5LlByb21pc2U8Ym9vbGVhbj47XG5cbi8qKlxuICogQHJlcXVpcmVzIG9vanMtdWktd2luZG93c1xuICogQHBhcmFtIHtzdHJpbmd9IFttZXNzYWdlXVxuICogQHJldHVybiB7SlF1ZXJ5LlByb21pc2U8Ym9vbGVhbj59XG4gKi9cbmNvbnN0IG9vdWlDb25maXJtV2l0aFN0eWxlOiBPb3VpQ29uZmlybVdpdGhTdHlsZSA9IChtZXNzYWdlKSA9PlxuXHRPTy51aVxuXHRcdC5jb25maXJtKFxuXHRcdFx0JChcblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cIm9vLXVpLXdpbmRvdy1mb290XCJcblx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiAnLjFyZW0gc29saWQgIzA2NDVhZCcsXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWV2ZW5seScsXG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxzcGFuXG5cdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRmb250U2l6ZTogJzEuMnJlbScsXG5cdFx0XHRcdFx0XHRcdGZvbnRXZWlnaHQ6ICc1MDAnLFxuXHRcdFx0XHRcdFx0XHRsaW5lSGVpZ2h0OiAnMS44Jyxcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogJy40ZW0gMCcsXG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHttZXNzYWdlfVxuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpIGFzIEpRdWVyeVxuXHRcdClcblx0XHQudGhlbigoaXNDb25maXJtOiBib29sZWFuKTogYm9vbGVhbiA9PiBpc0NvbmZpcm0pO1xuXG5leHBvcnQge3R5cGUgT291aUNvbmZpcm1XaXRoU3R5bGUsIG9vdWlDb25maXJtV2l0aFN0eWxlfTtcbiIsICJpbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnLi9pbml0TXdBcGknO1xuXG50eXBlIFF1ZXJ5R2xvYmFsVXNlckdyb3VwcyA9IHR5cGVvZiBxdWVyeUdsb2JhbFVzZXJHcm91cHM7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLXN0eWxlXG5hc3luYyBmdW5jdGlvbiBxdWVyeUdsb2JhbFVzZXJHcm91cHMoZ3VpdXNlcjogc3RyaW5nKSB7XG5cdGNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKCdVdGlsLVF1ZXJ5R2xvYmFsVXNlckdyb3VwcycpO1xuXG5cdGNvbnN0IENBQ0hFX0tFWV9QUkVGSVggPSAnZXh0LmdhZGdldC5VdGlsX3F1ZXJ5R2xvYmFsVXNlckdyb3Vwcy0nO1xuXG5cdGxldCBncm91cHM6IHN0cmluZ1tdID0gW107XG5cblx0Ly8gUXVlcnkgZnJvbSBjYWNoZVxuXHQvLyBDaGVjayBpZiB1c2VyIGdyb3VwIGluZm8gaXMgY2FjaGVkIGluIExvY2FsU3RvcmFnZVxuXHQvLyBJZiBjYWNoZWQsIGdldCB0aGVtIGZyb20gTG9jYWxTdG9yYWdlXG5cdGlmIChtdy5zdG9yYWdlLmdldE9iamVjdChDQUNIRV9LRVlfUFJFRklYICsgZ3VpdXNlcikpIHtcblx0XHRncm91cHMgPSBtdy5zdG9yYWdlLmdldE9iamVjdChDQUNIRV9LRVlfUFJFRklYICsgZ3VpdXNlcikgYXMgc3RyaW5nW107XG5cdFx0Ly8gUmVtb3ZlICcqJyBmcm9tIGdyb3Vwc1xuXHRcdGdyb3VwcyA9IGdyb3Vwcy5maWx0ZXIoKGVsZW1lbnQpID0+IHtcblx0XHRcdHJldHVybiBlbGVtZW50ICE9PSAnKic7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gUXVlcnkgZnJvbSB3ZWJcblx0XHQvLyBRdWVyeSBwYXJhbXNcblx0XHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdG1ldGE6ICdnbG9iYWx1c2VyaW5mbycsXG5cdFx0XHRndWl1c2VyLFxuXHRcdFx0Z3VpcHJvcDogJ2dyb3VwcycsXG5cdFx0XHRzbWF4YWdlOiA2MDAsXG5cdFx0XHRtYXhhZ2U6IDYwMCxcblx0XHR9O1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdFx0Ly8gRGUtY29uc3RydWN0IHRoZSByZXNwb25zZSBvYmplY3Rcblx0XHRjb25zdCBxdWVyeSA9IHJlc3BvbnNlWydxdWVyeSddIGFzIHtcblx0XHRcdGdsb2JhbHVzZXJpbmZvOiB7Z3JvdXBzOiBzdHJpbmdbXTsgbmFtZTogc3RyaW5nfTtcblx0XHR9O1xuXG5cdFx0aWYgKHF1ZXJ5Py5nbG9iYWx1c2VyaW5mbykge1xuXHRcdFx0Z3JvdXBzID0gcXVlcnkuZ2xvYmFsdXNlcmluZm8/Lmdyb3VwcyA/PyBbXTtcblx0XHRcdC8vIFJlbW92ZSAnKicgZnJvbSBncm91cHNcblx0XHRcdGdyb3VwcyA9IGdyb3Vwcy5maWx0ZXIoKGVsZW1lbnQpID0+IHtcblx0XHRcdFx0cmV0dXJuIGVsZW1lbnQgIT09ICcqJztcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBDYWNoZSBmb3IgMSBob3VyXG5cdFx0XHRtdy5zdG9yYWdlLnNldE9iamVjdChDQUNIRV9LRVlfUFJFRklYICsgZ3VpdXNlciwgZ3JvdXBzLCA2MCAqIDYwKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4ge3F1ZXJ5OiB7Z2xvYmFsdXNlcmluZm86IHtuYW1lOiBndWl1c2VyLCBncm91cHN9fX07XG59XG5cbmV4cG9ydCB7dHlwZSBRdWVyeUdsb2JhbFVzZXJHcm91cHMsIHF1ZXJ5R2xvYmFsVXNlckdyb3Vwc307XG4iLCAiaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJy4vaW5pdE13QXBpJztcblxudHlwZSBRdWVyeVVzZXJHcm91cHMgPSB0eXBlb2YgcXVlcnlVc2VyR3JvdXBzO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1zdHlsZVxuYXN5bmMgZnVuY3Rpb24gcXVlcnlVc2VyR3JvdXBzKHVzZXJzOiBzdHJpbmdbXSkge1xuXHRjb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaSgnVXRpbC1RdWVyeVVzZXJHcm91cHMnKTtcblxuXHRjb25zdCBDQUNIRV9LRVlfUFJFRklYID0gJ2V4dC5nYWRnZXQuVXRpbF9xdWVyeVVzZXJHcm91cHMtJztcblxuXHRjb25zdCBjYWNoZWRRdWVyeVVzZXJzOiB7Z3JvdXBzOiBzdHJpbmdbXTsgbmFtZTogc3RyaW5nfVtdID0gW107XG5cblx0Ly8gUXVlcnkgZnJvbSBjYWNoZVxuXHRmb3IgKGNvbnN0IHVzZXIgb2YgdXNlcnMpIHtcblx0XHQvLyBDaGVjayBpZiB1c2VyIGdyb3VwIGluZm8gaXMgY2FjaGVkIGluIExvY2FsU3RvcmFnZVxuXHRcdC8vIElmIGNhY2hlZCwgZ2V0IHRoZW0gZnJvbSBMb2NhbFN0b3JhZ2Vcblx0XHRpZiAobXcuc3RvcmFnZS5nZXRPYmplY3QoQ0FDSEVfS0VZX1BSRUZJWCArIHVzZXIpKSB7XG5cdFx0XHRsZXQgZ3JvdXBzID0gbXcuc3RvcmFnZS5nZXRPYmplY3QoQ0FDSEVfS0VZX1BSRUZJWCArIHVzZXIpIGFzIHN0cmluZ1tdO1xuXHRcdFx0Ly8gUmVtb3ZlICcqJyBmcm9tIGdyb3Vwc1xuXHRcdFx0Z3JvdXBzID0gZ3JvdXBzLmZpbHRlcigoZWxlbWVudCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gZWxlbWVudCAhPT0gJyonO1xuXHRcdFx0fSk7XG5cdFx0XHQvLyBTdG9yZSBpbnRvIGFycmF5XG5cdFx0XHRjYWNoZWRRdWVyeVVzZXJzW2NhY2hlZFF1ZXJ5VXNlcnMubGVuZ3RoXSA9IHtuYW1lOiB1c2VyLCBncm91cHN9O1xuXHRcdH1cblx0fVxuXG5cdC8vIFF1ZXJ5IGZyb20gd2ViXG5cdGNvbnN0IHVzdXNlcnMgPSB1c2Vycy5maWx0ZXIoKHYpID0+IHtcblx0XHQvLyBSZW1vdmUgdXNlciB0aGF0IGhhdmUgY2FjaGVkIHVzZXIgZ3JvdXBzIGxvY2FsbHlcblx0XHRyZXR1cm4gIW13LnN0b3JhZ2UuZ2V0T2JqZWN0KENBQ0hFX0tFWV9QUkVGSVggKyB2KTtcblx0fSk7XG5cblx0Ly8gUXVlcnkgcGFyYW1zXG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlVc2Vyc1BhcmFtcyA9IHtcblx0XHR1c3VzZXJzLFxuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0bGlzdDogJ3VzZXJzJyxcblx0XHR1c3Byb3A6ICdncm91cHMnLFxuXHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRtYXhhZ2U6IDYwMCxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0Ly8gRGUtY29uc3RydWN0IHRoZSByZXNwb25zZSBvYmplY3Rcblx0Y29uc3QgcXVlcnkgPSByZXNwb25zZVsncXVlcnknXSBhcyB7XG5cdFx0dXNlcnM6IHtncm91cHM6IHN0cmluZ1tdOyBuYW1lOiBzdHJpbmd9W107XG5cdH07XG5cdGNvbnN0IHF1ZXJ5VXNlcnMgPSBbLi4uKHF1ZXJ5Py51c2VycyA/PyBbXSksIC4uLmNhY2hlZFF1ZXJ5VXNlcnNdO1xuXG5cdGZvciAoY29uc3QgdXNlciBvZiBxdWVyeVVzZXJzKSB7XG5cdFx0aWYgKHVzZXI/Lmdyb3VwcyAmJiB1c2VyPy5uYW1lKSB7XG5cdFx0XHRsZXQge2dyb3Vwc30gPSB1c2VyO1xuXHRcdFx0Ly8gUmVtb3ZlICcqJyBmcm9tIGdyb3Vwc1xuXHRcdFx0Z3JvdXBzID0gZ3JvdXBzLmZpbHRlcigoZWxlbWVudCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gZWxlbWVudCAhPT0gJyonO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIENhY2hlIGZvciAxIGhvdXJcblx0XHRcdG13LnN0b3JhZ2Uuc2V0T2JqZWN0KENBQ0hFX0tFWV9QUkVGSVggKyB1c2VyLm5hbWUsIGdyb3VwcywgNjAgKiA2MCk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHtxdWVyeToge3VzZXJzOiBxdWVyeVVzZXJzfX07XG59XG5cbmV4cG9ydCB7dHlwZSBRdWVyeVVzZXJHcm91cHMsIHF1ZXJ5VXNlckdyb3Vwc307XG4iLCAidHlwZSBTY3JvbGxUb3AgPSAoXG5cdHRhcmdldEhlaWdodDogbnVtYmVyIHwgc3RyaW5nLFxuXHRlZmZlY3RzT3B0aW9uc09yRHVyYXRpb24/OiBKUXVlcnkuRWZmZWN0c09wdGlvbnM8SFRNTEVsZW1lbnQ+IHwgbnVtYmVyIHwgJ2Zhc3QnIHwgJ3Nsb3cnXG4pID0+IHZvaWQ7XG5cbmNvbnN0IHNjcm9sbFRvcDogU2Nyb2xsVG9wID0gKHRhcmdldEhlaWdodCwgZWZmZWN0c09wdGlvbnNPckR1cmF0aW9uID0ge30pID0+IHtcblx0Y29uc3Qgb3B0aW9uczogSlF1ZXJ5LkVmZmVjdHNPcHRpb25zPEhUTUxFbGVtZW50PiA9XG5cdFx0dHlwZW9mIGVmZmVjdHNPcHRpb25zT3JEdXJhdGlvbiA9PT0gJ251bWJlcicgfHwgdHlwZW9mIGVmZmVjdHNPcHRpb25zT3JEdXJhdGlvbiA9PT0gJ3N0cmluZydcblx0XHRcdD8ge1xuXHRcdFx0XHRcdGR1cmF0aW9uOiBlZmZlY3RzT3B0aW9uc09yRHVyYXRpb24sXG5cdFx0XHRcdFx0ZWFzaW5nOiAnbGluZWFyJyxcblx0XHRcdFx0fVxuXHRcdFx0OiB7XG5cdFx0XHRcdFx0ZHVyYXRpb246ICdzbG93Jyxcblx0XHRcdFx0XHRlYXNpbmc6ICdsaW5lYXInLFxuXHRcdFx0XHRcdC4uLmVmZmVjdHNPcHRpb25zT3JEdXJhdGlvbixcblx0XHRcdFx0fTtcblx0JChkb2N1bWVudCkuZmluZCgnaHRtbCwgYm9keScpLmFuaW1hdGUoXG5cdFx0e1xuXHRcdFx0c2Nyb2xsVG9wOiB0YXJnZXRIZWlnaHQsXG5cdFx0fSxcblx0XHRvcHRpb25zXG5cdCk7XG59O1xuXG5leHBvcnQge3R5cGUgU2Nyb2xsVG9wLCBzY3JvbGxUb3B9O1xuIiwgImltcG9ydCB7Z2VuZXJhdGVBcnJheX0gZnJvbSAnLi9nZW5lcmF0ZUFycmF5JztcblxudHlwZSBVc2VySXNJbkdyb3VwID0gdHlwZW9mIHVzZXJJc0luR3JvdXA7XG5cbmNvbnN0IHVzZXJJc0luR3JvdXAgPSAoZ3JvdXBzOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4ge1xuXHRjb25zdCB7d2dVc2VyR3JvdXBzLCB3Z0dsb2JhbEdyb3Vwc30gPSBtdy5jb25maWcuZ2V0KCk7XG5cdHJldHVybiBbLi4uKHdnVXNlckdyb3VwcyB8fCBbXSksIC4uLigod2dHbG9iYWxHcm91cHMgYXMgc3RyaW5nW10pIHx8IFtdKV0uc29tZSgoZWxlbWVudDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG5cdFx0cmV0dXJuIGdlbmVyYXRlQXJyYXkoZ3JvdXBzKS5pbmNsdWRlcyhlbGVtZW50KTtcblx0fSk7XG59O1xuXG5leHBvcnQge3R5cGUgVXNlcklzSW5Hcm91cCwgdXNlcklzSW5Hcm91cH07XG4iLCAidHlwZSBHZXRXcFN1bW1hcnlDb250ZW50ID0gdHlwZW9mIGdldFdwU3VtbWFyeUNvbnRlbnQ7XG50eXBlIFNldFdwU3VtbWFyeUNvbnRlbnQgPSB0eXBlb2Ygc2V0V3BTdW1tYXJ5Q29udGVudDtcblxuY29uc3QgZ2V0V3BTdW1tYXJ5Q29udGVudCA9ICh7JGVkaXRGb3JtfTogeyRlZGl0Rm9ybTogSlF1ZXJ5PEhUTUxFbGVtZW50Pn0pOiBzdHJpbmcgPT4ge1xuXHRyZXR1cm4gJGVkaXRGb3JtLmZpbmQ8SFRNTElucHV0RWxlbWVudD4oJyN3cFN1bW1hcnknKT8udmFsKCkgPz8gJyc7XG59O1xuXG5jb25zdCBzZXRXcFN1bW1hcnlDb250ZW50ID0gKHskZWRpdEZvcm0sIGNvbnRlbnR9OiB7JGVkaXRGb3JtOiBKUXVlcnk8SFRNTEVsZW1lbnQ+OyBjb250ZW50OiBzdHJpbmd9KTogdm9pZCA9PiB7XG5cdCRlZGl0Rm9ybS5maW5kPEhUTUxJbnB1dEVsZW1lbnQ+KCcjd3BTdW1tYXJ5JykudmFsKGNvbnRlbnQpO1xufTtcblxuZXhwb3J0IHtnZXRXcFN1bW1hcnlDb250ZW50LCB0eXBlIEdldFdwU3VtbWFyeUNvbnRlbnQsIHNldFdwU3VtbWFyeUNvbnRlbnQsIHR5cGUgU2V0V3BTdW1tYXJ5Q29udGVudH07XG4iLCAidHlwZSBHZXRXcFRleHRib3gxQ29udGVudCA9IHR5cGVvZiBnZXRXcFRleHRib3gxQ29udGVudDtcbnR5cGUgU2V0V3BUZXh0Ym94MUNvbnRlbnQgPSB0eXBlb2Ygc2V0V3BUZXh0Ym94MUNvbnRlbnQ7XG5cbmNvbnN0IGdldFdwVGV4dGJveDFDb250ZW50ID0gKHskZWRpdEZvcm19OiB7JGVkaXRGb3JtOiBKUXVlcnk8SFRNTEVsZW1lbnQ+fSk6IHN0cmluZyA9PiB7XG5cdHJldHVybiAkZWRpdEZvcm0uZmluZDxIVE1MVGV4dEFyZWFFbGVtZW50PignI3dwVGV4dGJveDEnKS50ZXh0U2VsZWN0aW9uKCdnZXRDb250ZW50cycpID8/ICcnO1xufTtcblxuY29uc3Qgc2V0V3BUZXh0Ym94MUNvbnRlbnQgPSAoeyRlZGl0Rm9ybSwgY29udGVudH06IHskZWRpdEZvcm06IEpRdWVyeTxIVE1MRWxlbWVudD47IGNvbnRlbnQ6IHN0cmluZ30pOiB2b2lkID0+IHtcblx0JGVkaXRGb3JtLmZpbmQ8SFRNTFRleHRBcmVhRWxlbWVudD4oJyN3cFRleHRib3gxJykudGV4dFNlbGVjdGlvbignc2V0Q29udGVudHMnLCBjb250ZW50KTtcbn07XG5cbmV4cG9ydCB7Z2V0V3BUZXh0Ym94MUNvbnRlbnQsIHR5cGUgR2V0V3BUZXh0Ym94MUNvbnRlbnQsIHNldFdwVGV4dGJveDFDb250ZW50LCB0eXBlIFNldFdwVGV4dGJveDFDb250ZW50fTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQSxvRkFBQUEsVUFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxRQUFRLFNBQVUsSUFBSTtBQUN4QixhQUFPLE1BQU0sR0FBRyxTQUFTLFFBQVE7QUFBQSxJQUNuQztBQUdBLElBQUFBLFFBQU87QUFBQSxJQUVMLE1BQU0sT0FBTyxjQUFjLFlBQVksVUFBVSxLQUNqRCxNQUFNLE9BQU8sVUFBVSxZQUFZLE1BQU07QUFBQSxJQUV6QyxNQUFNLE9BQU8sUUFBUSxZQUFZLElBQUksS0FDckMsTUFBTSxPQUFPLFVBQVUsWUFBWSxNQUFNLEtBQ3pDLE1BQU0sT0FBT0QsWUFBUSxZQUFZQSxRQUFJO0FBQUEsSUFFcEMsNEJBQVk7QUFBRSxhQUFPO0FB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IiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiU3ltYm9sIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiZG9jdW1lbnQiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJUeXBlRXJyb3IiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJleHBvcnRzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJhY3RpdmVYRG9jdW1lbnQiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiJCIsICJnbG9iYWxUaGlzIiwgIkl0ZXJhdG9yIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIkl0ZXJhdG9yIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiSXRlcmF0b3IiLCAiJCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICIkIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIiQiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiVXRpbF9leHBvcnRzIiwgIl9fZXhwb3J0IiwgIk13VXJpIiwgImFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3ZlciIsICJjaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlIiwgImNoZWNrQTExeUNvbmZpcm1LZXkiLCAiY2hlY2tEZXBlbmRlbmNpZXMiLCAiZGVsYXkiLCAiZmluZFZhcmlhbnRzIiwgImdlbmVyYXRlQXJyYXkiLCAiZ2VuZXJhdGVTdmdEYXRhVXJsIiwgImdldEJvZHkiLCAiZ2V0V3BTdW1tYXJ5Q29udGVudCIsICJnZXRXcFRleHRib3gxQ29udGVudCIsICJpbml0TXdBcGkiLCAiaXNWYWxpZEtleSIsICJvb3VpQ29uZmlybVdpdGhTdHlsZSIsICJxdWVyeUdsb2JhbFVzZXJHcm91cHMiLCAicXVlcnlVc2VyR3JvdXBzIiwgInNjcm9sbFRvcCIsICJzZXRXcFN1bW1hcnlDb250ZW50IiwgInNldFdwVGV4dGJveDFDb250ZW50IiwgInVuaXF1ZUFycmF5IiwgInVzZXJJc0luR3JvdXAiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiX190b0NvbW1vbkpTIiwgInRhcmdldCIsICJ0eXBlIiwgImxpc3RlbmVyIiwgIm9wdGlvbnMiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJyZW1vdmUiLCAicmVtb3ZlRXZlbnRMaXN0ZW5lciIsICJldmVudCIsICJvcGFjaXR5IiwgImN1cnJlbnRUYXJnZXQiLCAic3R5bGUiLCAidG9TdHJpbmciLCAiaW5jbHVkZXMiLCAia2V5IiwgImFyZ3MiLCAiZmxhdE1hcCIsICJhcmciLCAiQXJyYXkiLCAiaXNBcnJheSIsICJOb2RlTGlzdCIsICJ1c2VyQWdlbnQiLCAiYXBpVXJpIiwgImFwaU9wdGlvbnMiLCAiYWpheCIsICJoZWFkZXJzIiwgImNvbmNhdCIsICJtdyIsICJGb3JlaWduQXBpIiwgIkFwaSIsICJ1bmlxdWVBcnJheTIiLCAicmVzdWx0IiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgIml0ZW0iLCAidmFsdWUiLCAibGVuZ3RoIiwgImVyciIsICJlIiwgImYiLCAiX3giLCAiX3gyIiwgIl9jaGVja0RlcGVuZGVuY2llcyIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZ2FkZ2V0TmFtZXMiLCAib3B0aW9uIiwgImFwaSIsICJnYWRnZXRzIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgImdhZGdldCIsICJ1c2VyIiwgImdldCIsICJwb3N0V2l0aEVkaXRUb2tlbiIsICJhY3Rpb24iLCAiY2hhbmdlIiwgImxvYWRlciIsICJ1c2luZyIsICJtcyIsICJQcm9taXNlIiwgInJlc29sdmUiLCAic2V0VGltZW91dCIsICJfeDMiLCAiX2ZpbmRWYXJpYW50cyIsICJ0ZXh0IiwgIlZBUklBTlRTIiwgImFsbFZhcmlhbnRzIiwgInBhcmFtcyIsICJjb250ZW50bW9kZWwiLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJ0aXRsZSIsICJfaTIiLCAiX1ZBUklBTlRTIiwgIl9yZXNwb25zZSRxdWVyeSIsICJ2YXJpYW50IiwgInVzZWxhbmciLCAicmVzcG9uc2UiLCAicG9zdCIsICJkaXNwbGF5dGl0bGUiLCAidmFyaWFudEVsZW1lbnQiLCAiZG9jdW1lbnQiLCAiY3JlYXRlRWxlbWVudCIsICJpbm5lckhUTUwiLCAidGV4dENvbnRlbnQiLCAic3ZnIiwgInRyaW0iLCAic2xpY2UiLCAiaW5kZXhPZiIsICJzdGFydHNXaXRoIiwgImVuZHNXaXRoIiwgInJlcGxhY2UiLCAiZW5jb2RlVVJJQ29tcG9uZW50IiwgIiQiLCAicmVhZHkiLCAidGhlbiIsICIkYm9keSIsICJvYmplY3QiLCAiVVJMIiwgImV4dGVuZCIsICJfaSIsICJfT2JqZWN0JGVudHJpZXMiLCAiT2JqZWN0IiwgImVudHJpZXMiLCAic2VhcmNoUGFyYW1zIiwgInNldCIsICJnZXRSZWxhdGl2ZVBhdGgiLCAicGF0aG5hbWUiLCAic2VhcmNoIiwgImhhc2giLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgIm1lc3NhZ2UiLCAiT08iLCAidWkiLCAiY29uZmlybSIsICJkZWZhdWx0IiwgImNsYXNzTmFtZSIsICJib3JkZXIiLCAiZGlzcGxheSIsICJqdXN0aWZ5Q29udGVudCIsICJmb250U2l6ZSIsICJmb250V2VpZ2h0IiwgImxpbmVIZWlnaHQiLCAicGFkZGluZyIsICJpc0NvbmZpcm0iLCAiX3g0IiwgIl9xdWVyeUdsb2JhbFVzZXJHcm91cHMiLCAiZ3VpdXNlciIsICJDQUNIRV9LRVlfUFJFRklYIiwgImdyb3VwcyIsICJzdG9yYWdlIiwgImdldE9iamVjdCIsICJmaWx0ZXIiLCAiZWxlbWVudCIsICJtZXRhIiwgImd1aXByb3AiLCAic21heGFnZSIsICJtYXhhZ2UiLCAicXVlcnkiLCAiZ2xvYmFsdXNlcmluZm8iLCAiX3F1ZXJ5JGdsb2JhbHVzZXJpbmZvIiwgIl9xdWVyeSRnbG9iYWx1c2VyaW5mbzIiLCAic2V0T2JqZWN0IiwgIm5hbWUiLCAiX3g1IiwgIl9xdWVyeVVzZXJHcm91cHMiLCAidXNlcnMiLCAiX3F1ZXJ5JHVzZXJzIiwgImNhY2hlZFF1ZXJ5VXNlcnMiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAidXN1c2VycyIsICJ2IiwgImxpc3QiLCAidXNwcm9wIiwgInF1ZXJ5VXNlcnMiLCAiX2kzIiwgIl9xdWVyeVVzZXJzIiwgInRhcmdldEhlaWdodCIsICJlZmZlY3RzT3B0aW9uc09yRHVyYXRpb24iLCAiZHVyYXRpb24iLCAiZWFzaW5nIiwgImZpbmQiLCAiYW5pbWF0ZSIsICJ3Z1VzZXJHcm91cHMiLCAid2dHbG9iYWxHcm91cHMiLCAiY29uZmlnIiwgInNvbWUiLCAiJGVkaXRGb3JtIiwgIl8kZWRpdEZvcm0kZmluZCR2YWwiLCAiXyRlZGl0Rm9ybSRmaW5kIiwgInZhbCIsICJjb250ZW50IiwgIl8kZWRpdEZvcm0kZmluZCR0ZXh0UyIsICJ0ZXh0U2VsZWN0aW9uIl0KfQo=
