/**
 * SPDX-License-Identifier: GPL-2.0-only
 * _addText: '{{Gadget Header|license=GPL-2.0-only}}'
 *
 * @base {@link https://github.com/wikimedia-gadgets/VariantAlly}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/VariantAllyDialog}
 * @license GPL-2.0 {@link https://youshou.wiki/wiki/H:GPLV2}
 */

/**
 * VariantAlly
 * Copyright (C) 2023-2024 Diskdance
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation, version 2.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/global-this.js
var require_global_this = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/global-this.js"(exports, module2) {
    "use strict";
    var check = function(it) {
      return it && it.Math === Math && it;
    };
    module2.exports = // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == "object" && self) || check(typeof global == "object" && global) || check(typeof exports == "object" && exports) || // eslint-disable-next-line no-new-func -- fallback
    /* @__PURE__ */ function() {
      return this;
    }() || Function("return this")();
  }
});

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/fails.js
var require_fails = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/fails.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/descriptors.js
var require_descriptors = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/descriptors.js"(exports, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      return Object.defineProperty({}, 1, { get: function() {
        return 7;
      } })[1] !== 7;
    });
  }
});

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-bind-native.js
var require_function_bind_native = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-bind-native.js"(exports, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      var test = function() {
      }.bind();
      return typeof test != "function" || test.hasOwnProperty("prototype");
    });
  }
});

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-call.js
var require_function_call = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-call.js"(exports, module2) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var call = Function.prototype.call;
    module2.exports = NATIVE_BIND ? call.bind(call) : function() {
      return call.apply(call, arguments);
    };
  }
});

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-property-is-enumerable.js
var require_object_property_is_enumerable = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-property-is-enumerable.js"(exports) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/create-property-descriptor.js
var require_create_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/create-property-descriptor.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-uncurry-this.js
var require_function_uncurry_this = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-uncurry-this.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/classof-raw.js
var require_classof_raw = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/classof-raw.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toString = uncurryThis({}.toString);
    var stringSlice = uncurryThis("".slice);
    module2.exports = function(it) {
      return stringSlice(toString(it), 8, -1);
    };
  }
});

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/indexed-object.js
var require_indexed_object = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/indexed-object.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-null-or-undefined.js
var require_is_null_or_undefined = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-null-or-undefined.js"(exports, module2) {
    "use strict";
    module2.exports = function(it) {
      return it === null || it === void 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/require-object-coercible.js"(exports, module2) {
    "use strict";
    var isNullOrUndefined = require_is_null_or_undefined();
    var $TypeError = TypeError;
    module2.exports = function(it) {
      if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
      return it;
    };
  }
});

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-indexed-object.js
var require_to_indexed_object = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-indexed-object.js"(exports, module2) {
    "use strict";
    var IndexedObject = require_indexed_object();
    var requireObjectCoercible = require_require_object_coercible();
    module2.exports = function(it) {
      return IndexedObject(requireObjectCoercible(it));
    };
  }
});

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-callable.js
var require_is_callable = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-callable.js"(exports, module2) {
    "use strict";
    var documentAll = typeof document == "object" && document.all;
    module2.exports = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
      return typeof argument == "function" || argument === documentAll;
    } : function(argument) {
      return typeof argument == "function";
    };
  }
});

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-object.js
var require_is_object = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-object.js"(exports, module2) {
    "use strict";
    var isCallable = require_is_callable();
    module2.exports = function(it) {
      return typeof it == "object" ? it !== null : isCallable(it);
    };
  }
});

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/get-built-in.js
var require_get_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/get-built-in.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-is-prototype-of.js
var require_object_is_prototype_of = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-is-prototype-of.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    module2.exports = uncurryThis({}.isPrototypeOf);
  }
});

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/environment-user-agent.js
var require_environment_user_agent = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/environment-user-agent.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var navigator = globalThis2.navigator;
    var userAgent = navigator && navigator.userAgent;
    module2.exports = userAgent ? String(userAgent) : "";
  }
});

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/environment-v8-version.js
var require_environment_v8_version = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/environment-v8-version.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/symbol-constructor-detection.js
var require_symbol_constructor_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/symbol-constructor-detection.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/use-symbol-as-uid.js
var require_use_symbol_as_uid = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/use-symbol-as-uid.js"(exports, module2) {
    "use strict";
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }
});

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-symbol.js
var require_is_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-symbol.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/try-to-string.js
var require_try_to_string = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/try-to-string.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/a-callable.js
var require_a_callable = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/a-callable.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/get-method.js
var require_get_method = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/get-method.js"(exports, module2) {
    "use strict";
    var aCallable = require_a_callable();
    var isNullOrUndefined = require_is_null_or_undefined();
    module2.exports = function(V, P) {
      var func = V[P];
      return isNullOrUndefined(func) ? void 0 : aCallable(func);
    };
  }
});

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/ordinary-to-primitive.js
var require_ordinary_to_primitive = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/ordinary-to-primitive.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-pure.js
var require_is_pure = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-pure.js"(exports, module2) {
    "use strict";
    module2.exports = false;
  }
});

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/define-global-property.js
var require_define_global_property = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/define-global-property.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/shared-store.js
var require_shared_store = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/shared-store.js"(exports, module2) {
    "use strict";
    var IS_PURE = require_is_pure();
    var globalThis2 = require_global_this();
    var defineGlobalProperty = require_define_global_property();
    var SHARED = "__core-js_shared__";
    var store = module2.exports = globalThis2[SHARED] || defineGlobalProperty(SHARED, {});
    (store.versions || (store.versions = [])).push({
      version: "3.41.0",
      mode: IS_PURE ? "pure" : "global",
      copyright: "© 2014-2025 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  }
});

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/shared.js
var require_shared = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/shared.js"(exports, module2) {
    "use strict";
    var store = require_shared_store();
    module2.exports = function(key, value) {
      return store[key] || (store[key] = value || {});
    };
  }
});

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-object.js
var require_to_object = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-object.js"(exports, module2) {
    "use strict";
    var requireObjectCoercible = require_require_object_coercible();
    var $Object = Object;
    module2.exports = function(argument) {
      return $Object(requireObjectCoercible(argument));
    };
  }
});

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/has-own-property.js
var require_has_own_property = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/has-own-property.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toObject = require_to_object();
    var hasOwnProperty = uncurryThis({}.hasOwnProperty);
    module2.exports = Object.hasOwn || function hasOwn(it, key) {
      return hasOwnProperty(toObject(it), key);
    };
  }
});

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/uid.js
var require_uid = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/uid.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/well-known-symbol.js
var require_well_known_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/well-known-symbol.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-primitive.js
var require_to_primitive = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-primitive.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-property-key.js
var require_to_property_key = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-property-key.js"(exports, module2) {
    "use strict";
    var toPrimitive = require_to_primitive();
    var isSymbol = require_is_symbol();
    module2.exports = function(argument) {
      var key = toPrimitive(argument, "string");
      return isSymbol(key) ? key : key + "";
    };
  }
});

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/document-create-element.js
var require_document_create_element = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/document-create-element.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/ie8-dom-define.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-get-own-property-descriptor.js
var require_object_get_own_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/v8-prototype-define-bug.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/an-object.js
var require_an_object = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/an-object.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-define-property.js
var require_object_define_property = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-define-property.js"(exports) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/create-non-enumerable-property.js
var require_create_non_enumerable_property = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/create-non-enumerable-property.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-name.js
var require_function_name = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-name.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/inspect-source.js
var require_inspect_source = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/inspect-source.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/weak-map-basic-detection.js
var require_weak_map_basic_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/weak-map-basic-detection.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var isCallable = require_is_callable();
    var WeakMap = globalThis2.WeakMap;
    module2.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));
  }
});

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/shared-key.js
var require_shared_key = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/shared-key.js"(exports, module2) {
    "use strict";
    var shared = require_shared();
    var uid = require_uid();
    var keys = shared("keys");
    module2.exports = function(key) {
      return keys[key] || (keys[key] = uid(key));
    };
  }
});

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/hidden-keys.js
var require_hidden_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/hidden-keys.js"(exports, module2) {
    "use strict";
    module2.exports = {};
  }
});

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/internal-state.js
var require_internal_state = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/internal-state.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/make-built-in.js
var require_make_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/make-built-in.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/define-built-in.js
var require_define_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/define-built-in.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/math-trunc.js
var require_math_trunc = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/math-trunc.js"(exports, module2) {
    "use strict";
    var ceil = Math.ceil;
    var floor = Math.floor;
    module2.exports = Math.trunc || function trunc(x) {
      var n = +x;
      return (n > 0 ? floor : ceil)(n);
    };
  }
});

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-integer-or-infinity.js
var require_to_integer_or_infinity = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-integer-or-infinity.js"(exports, module2) {
    "use strict";
    var trunc = require_math_trunc();
    module2.exports = function(argument) {
      var number = +argument;
      return number !== number || number === 0 ? 0 : trunc(number);
    };
  }
});

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-absolute-index.js
var require_to_absolute_index = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-absolute-index.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-length.js
var require_to_length = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-length.js"(exports, module2) {
    "use strict";
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var min = Math.min;
    module2.exports = function(argument) {
      var len = toIntegerOrInfinity(argument);
      return len > 0 ? min(len, 9007199254740991) : 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/length-of-array-like.js
var require_length_of_array_like = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/length-of-array-like.js"(exports, module2) {
    "use strict";
    var toLength = require_to_length();
    module2.exports = function(obj) {
      return toLength(obj.length);
    };
  }
});

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/array-includes.js
var require_array_includes = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/array-includes.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-keys-internal.js
var require_object_keys_internal = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-keys-internal.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/enum-bug-keys.js
var require_enum_bug_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/enum-bug-keys.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-get-own-property-names.js
var require_object_get_own_property_names = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-get-own-property-names.js"(exports) {
    "use strict";
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = enumBugKeys.concat("length", "prototype");
    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return internalObjectKeys(O, hiddenKeys);
    };
  }
});

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-get-own-property-symbols.js
var require_object_get_own_property_symbols = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-get-own-property-symbols.js"(exports) {
    "use strict";
    exports.f = Object.getOwnPropertySymbols;
  }
});

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/own-keys.js
var require_own_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/own-keys.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/copy-constructor-properties.js
var require_copy_constructor_properties = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/copy-constructor-properties.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-forced.js
var require_is_forced = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-forced.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/export.js
var require_export = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/export.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/an-instance.js
var require_an_instance = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/an-instance.js"(exports, module2) {
    "use strict";
    var isPrototypeOf = require_object_is_prototype_of();
    var $TypeError = TypeError;
    module2.exports = function(it, Prototype) {
      if (isPrototypeOf(Prototype, it)) return it;
      throw new $TypeError("Incorrect invocation");
    };
  }
});

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/correct-prototype-getter.js
var require_correct_prototype_getter = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/correct-prototype-getter.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-get-prototype-of.js
var require_object_get_prototype_of = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-get-prototype-of.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/define-built-in-accessor.js
var require_define_built_in_accessor = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/define-built-in-accessor.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/create-property.js
var require_create_property = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/create-property.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-keys.js
var require_object_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-keys.js"(exports, module2) {
    "use strict";
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    module2.exports = Object.keys || function keys(O) {
      return internalObjectKeys(O, enumBugKeys);
    };
  }
});

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-define-properties.js
var require_object_define_properties = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-define-properties.js"(exports) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/html.js
var require_html = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/html.js"(exports, module2) {
    "use strict";
    var getBuiltIn = require_get_built_in();
    module2.exports = getBuiltIn("document", "documentElement");
  }
});

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-create.js
var require_object_create = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/object-create.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/iterators-core.js
var require_iterators_core = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/iterators-core.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/modules/es.iterator.constructor.js
var require_es_iterator_constructor = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/modules/es.iterator.constructor.js"() {
    "use strict";
    var $ = require_export();
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
    $({ global: true, constructor: true, forced: FORCED }, {
      Iterator: IteratorConstructor
    });
  }
});

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/get-iterator-direct.js
var require_get_iterator_direct = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/get-iterator-direct.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/define-built-ins.js
var require_define_built_ins = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/define-built-ins.js"(exports, module2) {
    "use strict";
    var defineBuiltIn = require_define_built_in();
    module2.exports = function(target, src, options) {
      for (var key in src) defineBuiltIn(target, key, src[key], options);
      return target;
    };
  }
});

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/create-iter-result-object.js
var require_create_iter_result_object = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/create-iter-result-object.js"(exports, module2) {
    "use strict";
    module2.exports = function(value, done) {
      return { value, done };
    };
  }
});

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/iterator-close.js
var require_iterator_close = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/iterator-close.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/iterator-create-proxy.js
var require_iterator_create_proxy = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/iterator-create-proxy.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/call-with-safe-iteration-closing.js
var require_call_with_safe_iteration_closing = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/call-with-safe-iteration-closing.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/modules/es.iterator.filter.js
var require_es_iterator_filter = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/modules/es.iterator.filter.js"() {
    "use strict";
    var $ = require_export();
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
    $({ target: "Iterator", proto: true, real: true, forced: IS_PURE }, {
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

// dist/VariantAllyDialog/VariantAllyDialog.js
require_es_iterator_constructor();
require_es_iterator_filter();
var _mw$config$get;
//! src/VariantAllyDialog/VariantAllyDialog.ts
var import_vue22 = require("vue");
var import_vue19 = require("vue");
var import_vue20 = require("vue");
var import_ext_gadget = require("ext.gadget.VariantAlly");
var import_vue11 = require("vue");
var import_vue12 = require("vue");
var import_vue3 = require("vue");
var import_vue = require("vue");
var VAIcon_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
  __name: "VAIcon",
  props: {
    icon: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      required: true
    }
  },
  setup(__props, {
    expose: __expose
  }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue2 = require("vue");
var _hoisted_1 = ["width", "height"];
var _hoisted_2 = {
  key: 0
};
var _hoisted_3 = {
  key: 1
};
var _hoisted_4 = {
  key: 2
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("svg", {
    class: "va-icon-button__icon",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    width: $props.size,
    height: $props.size,
    viewBox: "0 0 20 20",
    "aria-hidden": "true"
  }, [$props.icon === "lang" ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("g", _hoisted_2, [(0, import_vue2.createCommentVNode)(" eslint-disable "), _cache[0] || (_cache[0] = (0, import_vue2.createElementVNode)(
    "path",
    {
      d: "M20 18h-1.44a.61.61 0 01-.4-.12.81.81 0 01-.23-.31L17 15h-5l-1 2.54a.77.77 0 01-.22.3.59.59 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.19 17.19 0 01-5 2.1q.56.82.87 1.38a23.28 23.28 0 005.22-2.51 15.64 15.64 0 003.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 01-2.45 4.45 9.11 9.11 0 01-2.46-4.45z"
    },
    null,
    -1
    /* HOISTED */
  )), (0, import_vue2.createCommentVNode)(" eslint-enable ")])) : $props.icon === "close" ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("g", _hoisted_3, _cache[1] || (_cache[1] = [(0, import_vue2.createElementVNode)(
    "path",
    {
      d: "m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"
    },
    null,
    -1
    /* HOISTED */
  ), (0, import_vue2.createElementVNode)(
    "path",
    {
      d: "M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"
    },
    null,
    -1
    /* HOISTED */
  )]))) : ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("g", _hoisted_4, _cache[2] || (_cache[2] = [(0, import_vue2.createElementVNode)(
    "path",
    {
      d: "M8.59 3.42 14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z"
    },
    null,
    -1
    /* HOISTED */
  )])))], 8, _hoisted_1);
}
//! src/VariantAllyDialog/components/VAIcon.vue
VAIcon_default.render = render;
VAIcon_default.__file = "src\\VariantAllyDialog\\components\\VAIcon.vue";
var VAIcon_default2 = VAIcon_default;
var VAButton_default = /* @__PURE__ */ (0, import_vue3.defineComponent)({
  __name: "VAButton",
  props: {
    icon: {
      type: String,
      required: false
    },
    indicator: {
      type: String,
      required: false
    },
    action: {
      type: String,
      required: false
    },
    weight: {
      type: String,
      required: false
    }
  },
  emits: ["click"],
  setup(__props, {
    expose: __expose
  }) {
    __expose();
    const __returned__ = {
      VAIcon: VAIcon_default2
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue4 = require("vue");
var _hoisted_12 = {
  key: 1,
  class: "va-button__text"
};
function render2(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)(
    "button",
    {
      class: (0, import_vue4.normalizeClass)(["va-button", {
        "va-button--action-progressive": $props.action === "progressive",
        "va-button--weight-quiet": $props.weight === "quiet"
      }]),
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click"))
    },
    [$props.icon !== void 0 ? ((0, import_vue4.openBlock)(), (0, import_vue4.createBlock)($setup["VAIcon"], {
      key: 0,
      class: "va-button__icon",
      icon: $props.icon,
      size: 20
    }, null, 8, ["icon"])) : (0, import_vue4.createCommentVNode)("v-if", true), _ctx.$slots["default"] ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("span", _hoisted_12, [(0, import_vue4.renderSlot)(_ctx.$slots, "default", {}, void 0, true)])) : (0, import_vue4.createCommentVNode)("v-if", true), $props.indicator !== void 0 ? ((0, import_vue4.openBlock)(), (0, import_vue4.createBlock)($setup["VAIcon"], {
      key: 2,
      class: "va-button__indicator",
      icon: $props.indicator,
      size: 16
    }, null, 8, ["icon"])) : (0, import_vue4.createCommentVNode)("v-if", true)],
    2
    /* CLASS */
  );
}
//! src/VariantAllyDialog/components/VAButton.vue
VAButton_default.render = render2;
VAButton_default.__file = "src\\VariantAllyDialog\\components\\VAButton.vue";
VAButton_default.__scopeId = "data-v-bb7734b1";
var VAButton_default2 = VAButton_default;
var import_vue5 = require("vue");
function render3(_ctx, _cache) {
  return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(import_vue5.Transition, {
    name: "va-fade",
    mode: "out-in"
  }, {
    default: (0, import_vue5.withCtx)(() => [(0, import_vue5.renderSlot)(_ctx.$slots, "default", {}, void 0, true)]),
    _: 3
    /* FORWARDED */
  });
}
//! src/VariantAllyDialog/components/VAFadeTransition.vue
var script = {};
script.render = render3;
script.__file = "src\\VariantAllyDialog\\components\\VAFadeTransition.vue";
script.__scopeId = "data-v-bb9c5751";
var VAFadeTransition_default = script;
//! src/VariantAllyDialog/composables/useI18n.ts
var import_vue7 = require("vue");
//! src/VariantAllyDialog/messages.json
var messages_default = {
  variants: {
    "zh-cn": "中国大陆简体",
    "zh-sg": "新加坡简体",
    "zh-my": "马来西亚简体",
    "zh-hk": "中國香港繁體",
    "zh-mo": "中國澳門繁體",
    "zh-tw": "中國臺灣繁體"
  },
  hans: {
    space: "",
    close: "关闭",
    "vp.header": "我们支持",
    "vp.header.alt": "记住此变体？",
    "vp.main": "选取内容的语言变体",
    "vp.main.alt": "以后都使用此变体呈现内容",
    "vp.main.ext": "保存您偏好的中文语言变体，以避免显示简繁混杂的内容，提供最佳的阅读体验。",
    "vp.button.ok": "确定",
    "vp.button.other": "其他"
  },
  hant: {
    space: "",
    close: "關閉",
    "vp.header": "我們支援",
    "vp.header.alt": "記住此變體？",
    "vp.main": "選取內容的語言變體",
    "vp.main.alt": "以後都使用此變體呈現內容",
    "vp.main.ext": "儲存您偏好的中文語言變體，以避免顯示簡繁混雜的內容，提供最佳的閱讀體驗。",
    "vp.button.ok": "確定",
    "vp.button.other": "其他"
  }
};
//! src/VariantAllyDialog/modules/utils.ts
var import_vue6 = require("vue");
var VALID_VARIANTS = ["zh-cn", "zh-sg", "zh-my", "zh-tw", "zh-hk", "zh-mo"];
var wgUserVariant = (0, import_vue6.ref)((_mw$config$get = mw.config.get("wgUserVariant")) !== null && _mw$config$get !== void 0 ? _mw$config$get : "");
function isMobileDevice() {
  return matchMedia("(hover: none), (pointer: coarse)").matches;
}
function getMountPoint() {
  var _document$querySelect, _document$querySelect2;
  switch (mw.config.get("skin")) {
    case "vector-2022":
      return (_document$querySelect = document.querySelectorAll(".mw-page-container")[0]) !== null && _document$querySelect !== void 0 ? _document$querySelect : document.body;
    case "gongbi":
      return (_document$querySelect2 = document.querySelector("#mw-content-block")) !== null && _document$querySelect2 !== void 0 ? _document$querySelect2 : document.body;
    default:
      return document.body;
  }
}
var inferredVariant = (0, import_vue6.computed)(() => {
  if (VALID_VARIANTS.includes(wgUserVariant.value)) {
    return wgUserVariant.value;
  }
  return null;
});
function shuffleVariant(last) {
  const targetArray = [...VALID_VARIANTS].filter((i) => {
    return i !== last;
  });
  const randomIndex = Math.floor(Math.random() * targetArray.length);
  return targetArray[randomIndex];
}
//! src/VariantAllyDialog/composables/useI18n.ts
var i18nVariant = (0, import_vue7.computed)(() => {
  if (wgUserVariant.value === "zh") {
    return Math.random() > 0.5 ? "hans" : "hant";
  }
  if (["zh-hant", "zh-tw", "zh-hk", "zh-mo"].includes(wgUserVariant.value)) {
    return "hant";
  }
  return "hans";
});
function useI18n(key) {
  var _currentMsgsGroup$key;
  const currentMsgsGroup = messages_default[i18nVariant.value];
  return (_currentMsgsGroup$key = currentMsgsGroup[key]) !== null && _currentMsgsGroup$key !== void 0 ? _currentMsgsGroup$key : key;
}
//! src/VariantAllyDialog/composables/useUniqueId.ts
var counter = 0;
function useUniqueId() {
  return "va-".concat(counter++);
}
var useUniqueId_default = useUniqueId;
//! src/VariantAllyDialog/composables/useShuffledVariant.ts
var import_vue8 = require("vue");
var INTERVAL = 3 * 1e3;
function useShuffledVariant(isFreezed) {
  const result = (0, import_vue8.ref)(shuffleVariant());
  let id;
  (0, import_vue8.watch)(isFreezed, (newValue) => {
    if (newValue) {
      var _inferredVariant$valu;
      clearInterval(id);
      result.value = (_inferredVariant$valu = inferredVariant.value) !== null && _inferredVariant$valu !== void 0 ? _inferredVariant$valu : shuffleVariant();
    } else {
      id = window.setInterval(() => {
        result.value = shuffleVariant(result.value);
      }, INTERVAL);
    }
  }, {
    immediate: true
  });
  return result;
}
var useShuffledVariant_default = useShuffledVariant;
//! src/VariantAllyDialog/composables/useModelWrapper.ts
var import_vue9 = require("vue");
function useModelWrapper(props, emit, name = "modelValue") {
  return (0, import_vue9.computed)({
    get() {
      return props[name];
    },
    set(value) {
      emit("update:".concat(name), value);
    }
  });
}
var useModelWrapper_default = useModelWrapper;
//! src/VariantAllyDialog/composables/useDefault.ts
var import_vue10 = require("vue");
function useDefault(defaultValue) {
  const realRef = (0, import_vue10.shallowRef)(typeof defaultValue === "function" ? defaultValue() : defaultValue.value);
  (0, import_vue10.watch)(defaultValue, (newValue) => {
    realRef.value = newValue;
  }, {
    deep: true
  });
  return (0, import_vue10.computed)({
    get() {
      return realRef.value;
    },
    set(newValue) {
      realRef.value = newValue;
    }
  });
}
var useDefault_default = useDefault;
var VAVariantPrompt_default = /* @__PURE__ */ (0, import_vue11.defineComponent)({
  __name: "VAVariantPrompt",
  props: {
    open: {
      type: Boolean,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    autoClose: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:open", "update:disabled", "select", "optout"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const prompt = (0, import_vue12.ref)(null);
    const titleId = useUniqueId_default();
    const descId = useUniqueId_default();
    const isOpen = useModelWrapper_default(props, emit, "open");
    const isDisabled = useModelWrapper_default(props, emit, "disabled");
    const isVariantNarrowed = useDefault_default(() => inferredVariant.value !== null);
    const shuffledVariant = useShuffledVariant_default(isVariantNarrowed);
    function optOutAndClose() {
      emit("optout");
      isOpen.value = false;
    }
    function select(variant) {
      isDisabled.value = true;
      emit("select", variant);
    }
    (0, import_vue12.watch)(prompt, () => {
      const element = prompt.value;
      if (element !== null) {
        element.addEventListener("mouseleave", (ev) => {
          if (ev.buttons === 0 && props.autoClose && !props.disabled) {
            isOpen.value = false;
          }
        });
      }
    });
    const __returned__ = {
      props,
      emit,
      prompt,
      titleId,
      descId,
      isOpen,
      isDisabled,
      isVariantNarrowed,
      shuffledVariant,
      optOutAndClose,
      select,
      VAButton: VAButton_default2,
      VAFadeTransition: VAFadeTransition_default,
      get useI18n() {
        return useI18n;
      },
      get i18nVariant() {
        return i18nVariant;
      },
      get VALID_VARIANTS() {
        return VALID_VARIANTS;
      },
      get inferredVariant() {
        return inferredVariant;
      },
      get messages() {
        return messages_default;
      }
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue13 = require("vue");
var _hoisted_13 = ["lang", "aria-labelledby", "aria-describedby"];
var _hoisted_22 = ["id"];
var _hoisted_32 = ["lang"];
var _hoisted_42 = ["id"];
var _hoisted_5 = {
  class: "va-variant-prompt__options"
};
var _hoisted_6 = {
  class: "va-variant-prompt__footer"
};
var _hoisted_7 = {
  class: "va-para va-para--subtle"
};
function render4(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue13.openBlock)(), (0, import_vue13.createBlock)(import_vue13.Transition, {
    name: "va-variant-prompt",
    appear: ""
  }, {
    default: (0, import_vue13.withCtx)(() => [$props.open ? ((0, import_vue13.openBlock)(), (0, import_vue13.createElementBlock)("div", {
      key: 0,
      ref: "prompt",
      lang: "zh-".concat($setup.i18nVariant),
      class: "va-variant-prompt",
      role: "dialog",
      "aria-modal": "false",
      "aria-labelledby": $setup.titleId,
      "aria-describedby": $setup.descId
    }, [(0, import_vue13.createVNode)($setup["VAButton"], {
      class: "va-variant-prompt__close",
      weight: "quiet",
      icon: "close",
      title: $setup.useI18n("close"),
      "aria-label": $setup.useI18n("close"),
      disabled: $props.disabled,
      onClick: $setup.optOutAndClose
    }, null, 8, ["title", "aria-label", "disabled"]), (0, import_vue13.createElementVNode)("h2", {
      id: $setup.titleId,
      class: "va-variant-prompt__title va-title"
    }, [(0, import_vue13.createTextVNode)(
      (0, import_vue13.toDisplayString)($setup.useI18n($setup.isVariantNarrowed ? "vp.header.alt" : "vp.header")),
      1
      /* TEXT */
    ), _cache[1] || (_cache[1] = (0, import_vue13.createElementVNode)(
      "br",
      null,
      null,
      -1
      /* HOISTED */
    )), (0, import_vue13.createVNode)($setup["VAFadeTransition"], null, {
      default: (0, import_vue13.withCtx)(() => [!$setup.isVariantNarrowed ? ((0, import_vue13.openBlock)(), (0, import_vue13.createElementBlock)("span", {
        key: $setup.shuffledVariant,
        lang: "zh-".concat($setup.shuffledVariant),
        class: "va-variant-prompt__title__variant"
      }, (0, import_vue13.toDisplayString)($setup.messages.variants[$setup.shuffledVariant]), 9, _hoisted_32)) : (0, import_vue13.createCommentVNode)("v-if", true)]),
      _: 1
      /* STABLE */
    })], 8, _hoisted_22), (0, import_vue13.createElementVNode)("p", {
      id: $setup.descId,
      class: "va-variant-prompt__desc va-para"
    }, (0, import_vue13.toDisplayString)($setup.useI18n($setup.isVariantNarrowed ? "vp.main.alt" : "vp.main")), 9, _hoisted_42), (0, import_vue13.createElementVNode)("div", _hoisted_5, [(0, import_vue13.createCommentVNode)(" inferredVariant is non-null, guarded by isVariantNarrowed "), ((0, import_vue13.openBlock)(true), (0, import_vue13.createElementBlock)(
      import_vue13.Fragment,
      null,
      (0, import_vue13.renderList)($setup.isVariantNarrowed && $setup.inferredVariant !== null ? [$setup.inferredVariant] : $setup.VALID_VARIANTS, (variant) => {
        return (0, import_vue13.openBlock)(), (0, import_vue13.createBlock)($setup["VAButton"], {
          key: variant,
          class: (0, import_vue13.normalizeClass)(["va-variant-prompt__options__button", {
            "va-variant-prompt__options__button--primary": $setup.isVariantNarrowed
          }]),
          indicator: "arrowNext",
          weight: "quiet",
          action: "progressive",
          lang: variant,
          disabled: $props.disabled,
          onClick: ($event) => $setup.select(variant)
        }, {
          default: (0, import_vue13.withCtx)(() => [(0, import_vue13.createTextVNode)(
            (0, import_vue13.toDisplayString)($setup.messages.variants[variant]),
            1
            /* TEXT */
          )]),
          _: 2
          /* DYNAMIC */
        }, 1032, ["class", "lang", "disabled", "onClick"]);
      }),
      128
      /* KEYED_FRAGMENT */
    )), $setup.isVariantNarrowed ? ((0, import_vue13.openBlock)(), (0, import_vue13.createBlock)($setup["VAButton"], {
      key: 0,
      class: "va-variant-prompt__options__button",
      indicator: "arrowNext",
      weight: "quiet",
      action: "progressive",
      disabled: $props.disabled,
      onClick: _cache[0] || (_cache[0] = ($event) => $setup.isVariantNarrowed = false)
    }, {
      default: (0, import_vue13.withCtx)(() => [(0, import_vue13.createTextVNode)(
        (0, import_vue13.toDisplayString)($setup.useI18n("vp.button.other")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["disabled"])) : (0, import_vue13.createCommentVNode)("v-if", true)]), (0, import_vue13.createElementVNode)("footer", _hoisted_6, [(0, import_vue13.createElementVNode)(
      "p",
      _hoisted_7,
      (0, import_vue13.toDisplayString)($setup.useI18n("vp.main.ext")),
      1
      /* TEXT */
    )])], 8, _hoisted_13)) : (0, import_vue13.createCommentVNode)("v-if", true)]),
    _: 1
    /* STABLE */
  });
}
//! src/VariantAllyDialog/components/VAVariantPrompt.vue
VAVariantPrompt_default.render = render4;
VAVariantPrompt_default.__file = "src\\VariantAllyDialog\\components\\VAVariantPrompt.vue";
VAVariantPrompt_default.__scopeId = "data-v-5a44cc75";
var VAVariantPrompt_default2 = VAVariantPrompt_default;
var import_vue16 = require("vue");
var import_vue17 = require("vue");
var import_vue14 = require("vue");
var VASelect_default = /* @__PURE__ */ (0, import_vue14.defineComponent)({
  __name: "VASelect",
  props: {
    modelValue: {
      type: String,
      required: true
    }
  },
  emits: ["update:modelValue"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const modelValue = useModelWrapper_default(props, emit);
    const __returned__ = {
      props,
      emit,
      modelValue
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue15 = require("vue");
function render5(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue15.withDirectives)(((0, import_vue15.openBlock)(), (0, import_vue15.createElementBlock)(
    "select",
    {
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.modelValue = $event),
      class: "va-select"
    },
    [(0, import_vue15.renderSlot)(_ctx.$slots, "default", {}, void 0, true)],
    512
    /* NEED_PATCH */
  )), [[import_vue15.vModelSelect, $setup.modelValue]]);
}
//! src/VariantAllyDialog/components/VASelect.vue
VASelect_default.render = render5;
VASelect_default.__file = "src\\VariantAllyDialog\\components\\VASelect.vue";
VASelect_default.__scopeId = "data-v-c9b46460";
var VASelect_default2 = VASelect_default;
var VAVariantPromptMobile_default = /* @__PURE__ */ (0, import_vue16.defineComponent)({
  __name: "VAVariantPromptMobile",
  props: {
    open: {
      type: Boolean,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:open", "update:disabled", "select", "optout"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const prompt = (0, import_vue17.ref)(null);
    const titleId = useUniqueId_default();
    const selectedVariant = useDefault_default(() => {
      var _inferredVariant$valu2;
      return (_inferredVariant$valu2 = inferredVariant.value) !== null && _inferredVariant$valu2 !== void 0 ? _inferredVariant$valu2 : shuffleVariant();
    });
    const isOpen = useModelWrapper_default(props, emit, "open");
    const isDisabled = useModelWrapper_default(props, emit, "disabled");
    function optOutAndClose() {
      emit("optout");
      isOpen.value = false;
    }
    function select(variant) {
      isDisabled.value = true;
      emit("select", variant);
    }
    const __returned__ = {
      props,
      emit,
      prompt,
      titleId,
      selectedVariant,
      isOpen,
      isDisabled,
      optOutAndClose,
      select,
      VAButton: VAButton_default2,
      VASelect: VASelect_default2,
      get useI18n() {
        return useI18n;
      },
      get i18nVariant() {
        return i18nVariant;
      },
      get VALID_VARIANTS() {
        return VALID_VARIANTS;
      },
      get messages() {
        return messages_default;
      }
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue18 = require("vue");
var _hoisted_14 = ["lang", "aria-labelledby"];
var _hoisted_23 = {
  class: "va-variant-prompt-mobile__header"
};
var _hoisted_33 = ["id"];
var _hoisted_43 = {
  class: "va-variant-prompt-mobile__main"
};
var _hoisted_52 = ["value", "lang"];
var _hoisted_62 = {
  class: "va-variant-prompt-mobile__footer"
};
var _hoisted_72 = {
  class: "va-para va-para--subtle"
};
function render6(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue18.openBlock)(), (0, import_vue18.createBlock)(import_vue18.Transition, {
    name: "va-variant-prompt-mobile",
    appear: ""
  }, {
    default: (0, import_vue18.withCtx)(() => [$props.open ? ((0, import_vue18.openBlock)(), (0, import_vue18.createElementBlock)("div", {
      key: 0,
      ref: "prompt",
      lang: "zh-".concat($setup.i18nVariant),
      class: "va-variant-prompt-mobile",
      role: "dialog",
      "aria-modal": "false",
      "aria-labelledby": $setup.titleId
    }, [(0, import_vue18.createElementVNode)("div", _hoisted_23, [(0, import_vue18.createElementVNode)("h2", {
      id: $setup.titleId,
      class: "va-variant-prompt-mobile__header__title va-title"
    }, (0, import_vue18.toDisplayString)($setup.useI18n("vp.main")), 9, _hoisted_33), (0, import_vue18.createVNode)($setup["VAButton"], {
      class: "va-variant-prompt-mobile__header__close",
      weight: "quiet",
      icon: "close",
      title: $setup.useI18n("close"),
      "aria-label": $setup.useI18n("close"),
      disabled: $props.disabled,
      onClick: $setup.optOutAndClose
    }, null, 8, ["title", "aria-label", "disabled"])]), (0, import_vue18.createElementVNode)("div", _hoisted_43, [(0, import_vue18.createVNode)($setup["VASelect"], {
      modelValue: $setup.selectedVariant,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.selectedVariant = $event),
      class: "va-variant-prompt-mobile__main__select",
      lang: $setup.selectedVariant,
      disabled: $props.disabled,
      "aria-labelledby": $setup.titleId
    }, {
      default: (0, import_vue18.withCtx)(() => [((0, import_vue18.openBlock)(true), (0, import_vue18.createElementBlock)(
        import_vue18.Fragment,
        null,
        (0, import_vue18.renderList)($setup.VALID_VARIANTS, (variant) => {
          return (0, import_vue18.openBlock)(), (0, import_vue18.createElementBlock)("option", {
            key: variant,
            value: variant,
            lang: variant
          }, (0, import_vue18.toDisplayString)($setup.messages.variants[variant]), 9, _hoisted_52);
        }),
        128
        /* KEYED_FRAGMENT */
      ))]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue", "lang", "disabled", "aria-labelledby"]), (0, import_vue18.createVNode)($setup["VAButton"], {
      class: "va-variant-prompt-mobile__main__action",
      action: "progressive",
      icon: "arrowNext",
      disabled: $props.disabled,
      onClick: _cache[1] || (_cache[1] = ($event) => $setup.select($setup.selectedVariant))
    }, {
      default: (0, import_vue18.withCtx)(() => [(0, import_vue18.createTextVNode)(
        (0, import_vue18.toDisplayString)($setup.useI18n("vp.button.ok")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["disabled"])]), (0, import_vue18.createElementVNode)("footer", _hoisted_62, [(0, import_vue18.createElementVNode)(
      "p",
      _hoisted_72,
      (0, import_vue18.toDisplayString)($setup.useI18n("vp.main.ext")),
      1
      /* TEXT */
    )])], 8, _hoisted_14)) : (0, import_vue18.createCommentVNode)("v-if", true)]),
    _: 1
    /* STABLE */
  });
}
//! src/VariantAllyDialog/components/VAVariantPromptMobile.vue
VAVariantPromptMobile_default.render = render6;
VAVariantPromptMobile_default.__file = "src\\VariantAllyDialog\\components\\VAVariantPromptMobile.vue";
VAVariantPromptMobile_default.__scopeId = "data-v-5cc7865b";
var VAVariantPromptMobile_default2 = VAVariantPromptMobile_default;
var App_default = /* @__PURE__ */ (0, import_vue19.defineComponent)({
  __name: "App",
  setup(__props, {
    expose: __expose
  }) {
    __expose();
    const isOpen = (0, import_vue20.ref)(true);
    const isDisabled = (0, import_vue20.ref)(false);
    const isMobile = isMobileDevice();
    const desktopMountPoint = getMountPoint();
    function setVariant(variant) {
      (0, import_ext_gadget.setLocalVariant)(variant);
      (0, import_ext_gadget.redirect)(variant, {
        forced: true
      });
    }
    addEventListener(isMobile ? "touchmove" : "scroll", () => {
      if (!isDisabled.value) {
        isOpen.value = false;
      }
    });
    function onOptOut() {
      (0, import_ext_gadget.setOptOut)();
    }
    const __returned__ = {
      isOpen,
      isDisabled,
      isMobile,
      desktopMountPoint,
      setVariant,
      onOptOut,
      VAVariantPrompt: VAVariantPrompt_default2,
      VAVariantPromptMobile: VAVariantPromptMobile_default2
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue21 = require("vue");
function render7(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue21.openBlock)(), (0, import_vue21.createElementBlock)(
    import_vue21.Fragment,
    null,
    [((0, import_vue21.openBlock)(), (0, import_vue21.createBlock)(import_vue21.Teleport, {
      to: $setup.desktopMountPoint
    }, [!$setup.isMobile ? ((0, import_vue21.openBlock)(), (0, import_vue21.createBlock)($setup["VAVariantPrompt"], {
      key: 0,
      open: $setup.isOpen,
      "onUpdate:open": _cache[0] || (_cache[0] = ($event) => $setup.isOpen = $event),
      disabled: $setup.isDisabled,
      "onUpdate:disabled": _cache[1] || (_cache[1] = ($event) => $setup.isDisabled = $event),
      "auto-close": false,
      onOptout: $setup.onOptOut,
      onSelect: $setup.setVariant
    }, null, 8, ["open", "disabled"])) : (0, import_vue21.createCommentVNode)("v-if", true)], 8, ["to"])), (0, import_vue21.createCommentVNode)(" Teleport to body because they are always floated at bottom "), ((0, import_vue21.openBlock)(), (0, import_vue21.createBlock)(import_vue21.Teleport, {
      to: "body"
    }, [$setup.isMobile ? ((0, import_vue21.openBlock)(), (0, import_vue21.createBlock)($setup["VAVariantPromptMobile"], {
      key: 0,
      open: $setup.isOpen,
      "onUpdate:open": _cache[2] || (_cache[2] = ($event) => $setup.isOpen = $event),
      disabled: $setup.isDisabled,
      "onUpdate:disabled": _cache[3] || (_cache[3] = ($event) => $setup.isDisabled = $event),
      onOptout: $setup.onOptOut,
      onSelect: $setup.setVariant
    }, null, 8, ["open", "disabled"])) : (0, import_vue21.createCommentVNode)("v-if", true)]))],
    64
    /* STABLE_FRAGMENT */
  );
}
//! src/VariantAllyDialog/App.vue
App_default.render = render7;
App_default.__file = "src\\VariantAllyDialog\\App.vue";
var App_default2 = App_default;
//! src/VariantAllyDialog/VariantAllyDialog.ts
var root = document.createElement("div");
document.body.append(root);
(0, import_vue22.createApp)(App_default2).mount(root);

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwtdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi1yYXcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmRleGVkLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1jYWxsYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1idWlsdC1pbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnZpcm9ubWVudC11c2VyLWFnZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYW4taW5zdGFuY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3JyZWN0LXByb3RvdHlwZS1nZXR0ZXIuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbi1hY2Nlc3Nvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaHRtbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1jcmVhdGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMtY29yZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5pdGVyYXRvci5jb25zdHJ1Y3Rvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1pdGVyYXRvci1kaXJlY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW5zLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLWl0ZXItcmVzdWx0LW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0b3ItY3JlYXRlLXByb3h5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2FsbC13aXRoLXNhZmUtaXRlcmF0aW9uLWNsb3NpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuaXRlcmF0b3IuZmlsdGVyLmpzIiwgIi4uLy4uL3NyYy9WYXJpYW50QWxseURpYWxvZy9WYXJpYW50QWxseURpYWxvZy50cyIsICJzcmMvVmFyaWFudEFsbHlEaWFsb2cvQXBwLnZ1ZSIsICJzcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9uZW50cy9WQVZhcmlhbnRQcm9tcHQudnVlIiwgImU6XFxnaFJlcG9cXFlzQXJjaGl2ZXMtR2FkZ2V0c1xcc3JjXFxWYXJpYW50QWxseURpYWxvZ1xcY29tcG9uZW50c1xcVkFJY29uLnZ1ZT90eXBlPXRlbXBsYXRlIiwgIi4uLy4uL3NyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb25lbnRzL1ZBSWNvbi52dWUiLCAiZTpcXGdoUmVwb1xcWXNBcmNoaXZlcy1HYWRnZXRzXFxzcmNcXFZhcmlhbnRBbGx5RGlhbG9nXFxjb21wb25lbnRzXFxWQUJ1dHRvbi52dWU/dHlwZT10ZW1wbGF0ZSIsICIuLi8uLi9zcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9uZW50cy9WQUJ1dHRvbi52dWUiLCAiZTpcXGdoUmVwb1xcWXNBcmNoaXZlcy1HYWRnZXRzXFxzcmNcXFZhcmlhbnRBbGx5RGlhbG9nXFxjb21wb25lbnRzXFxWQUZhZGVUcmFuc2l0aW9uLnZ1ZT90eXBlPXRlbXBsYXRlIiwgIi4uLy4uL3NyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb25lbnRzL1ZBRmFkZVRyYW5zaXRpb24udnVlIiwgIi4uLy4uL3NyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb3NhYmxlcy91c2VJMThuLnRzIiwgIi4uLy4uL3NyYy9WYXJpYW50QWxseURpYWxvZy9tZXNzYWdlcy5qc29uIiwgIi4uLy4uL3NyYy9WYXJpYW50QWxseURpYWxvZy9tb2R1bGVzL3V0aWxzLnRzIiwgIi4uLy4uL3NyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb3NhYmxlcy91c2VVbmlxdWVJZC50cyIsICIuLi8uLi9zcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9zYWJsZXMvdXNlU2h1ZmZsZWRWYXJpYW50LnRzIiwgIi4uLy4uL3NyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb3NhYmxlcy91c2VNb2RlbFdyYXBwZXIudHMiLCAiLi4vLi4vc3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvc2FibGVzL3VzZURlZmF1bHQudHMiLCAiZTpcXGdoUmVwb1xcWXNBcmNoaXZlcy1HYWRnZXRzXFxzcmNcXFZhcmlhbnRBbGx5RGlhbG9nXFxjb21wb25lbnRzXFxWQVZhcmlhbnRQcm9tcHQudnVlP3R5cGU9dGVtcGxhdGUiLCAiLi4vLi4vc3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvbmVudHMvVkFWYXJpYW50UHJvbXB0LnZ1ZSIsICJzcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9uZW50cy9WQVZhcmlhbnRQcm9tcHRNb2JpbGUudnVlIiwgImU6XFxnaFJlcG9cXFlzQXJjaGl2ZXMtR2FkZ2V0c1xcc3JjXFxWYXJpYW50QWxseURpYWxvZ1xcY29tcG9uZW50c1xcVkFTZWxlY3QudnVlP3R5cGU9dGVtcGxhdGUiLCAiLi4vLi4vc3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvbmVudHMvVkFTZWxlY3QudnVlIiwgImU6XFxnaFJlcG9cXFlzQXJjaGl2ZXMtR2FkZ2V0c1xcc3JjXFxWYXJpYW50QWxseURpYWxvZ1xcY29tcG9uZW50c1xcVkFWYXJpYW50UHJvbXB0TW9iaWxlLnZ1ZT90eXBlPXRlbXBsYXRlIiwgIi4uLy4uL3NyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb25lbnRzL1ZBVmFyaWFudFByb21wdE1vYmlsZS52dWUiLCAiZTpcXGdoUmVwb1xcWXNBcmNoaXZlcy1HYWRnZXRzXFxzcmNcXFZhcmlhbnRBbGx5RGlhbG9nXFxBcHAudnVlP3R5cGU9dGVtcGxhdGUiLCAiLi4vLi4vc3JjL1ZhcmlhbnRBbGx5RGlhbG9nL0FwcC52dWUiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIid1c2Ugc3RyaWN0JztcbnZhciBjaGVjayA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgJiYgaXQuTWF0aCA9PT0gTWF0aCAmJiBpdDtcbn07XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG5tb2R1bGUuZXhwb3J0cyA9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1nbG9iYWwtdGhpcyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBnbG9iYWxUaGlzID09ICdvYmplY3QnICYmIGdsb2JhbFRoaXMpIHx8XG4gIGNoZWNrKHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93KSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzIC0tIHNhZmVcbiAgY2hlY2sodHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZikgfHxcbiAgY2hlY2sodHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwpIHx8XG4gIGNoZWNrKHR5cGVvZiB0aGlzID09ICdvYmplY3QnICYmIHRoaXMpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuYyAtLSBmYWxsYmFja1xuICAoZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSkoKSB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIERldGVjdCBJRTgncyBpbmNvbXBsZXRlIGRlZmluZVByb3BlcnR5IGltcGxlbWVudGF0aW9uXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgMSwgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSlbMV0gIT09IDc7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZnVuY3Rpb24tcHJvdG90eXBlLWJpbmQgLS0gc2FmZVxuICB2YXIgdGVzdCA9IChmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0pLmJpbmQoKTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGlucyAtLSBzYWZlXG4gIHJldHVybiB0eXBlb2YgdGVzdCAhPSAnZnVuY3Rpb24nIHx8IHRlc3QuaGFzT3duUHJvcGVydHkoJ3Byb3RvdHlwZScpO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBjYWxsID0gRnVuY3Rpb24ucHJvdG90eXBlLmNhbGw7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZnVuY3Rpb24tcHJvdG90eXBlLWJpbmQgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IGNhbGwuYmluZChjYWxsKSA6IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGNhbGwuYXBwbHkoY2FsbCwgYXJndW1lbnRzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIE5hc2hvcm4gfiBKREs4IGJ1Z1xudmFyIE5BU0hPUk5fQlVHID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmICEkcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh7IDE6IDIgfSwgMSk7XG5cbi8vIGBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eWlzZW51bWVyYWJsZVxuZXhwb3J0cy5mID0gTkFTSE9STl9CVUcgPyBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShWKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMsIFYpO1xuICByZXR1cm4gISFkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IuZW51bWVyYWJsZTtcbn0gOiAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIGNhbGwgPSBGdW5jdGlvblByb3RvdHlwZS5jYWxsO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbnZhciB1bmN1cnJ5VGhpc1dpdGhCaW5kID0gTkFUSVZFX0JJTkQgJiYgRnVuY3Rpb25Qcm90b3R5cGUuYmluZC5iaW5kKGNhbGwsIGNhbGwpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9CSU5EID8gdW5jdXJyeVRoaXNXaXRoQmluZCA6IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjYWxsLmFwcGx5KGZuLCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbnZhciB0b1N0cmluZyA9IHVuY3VycnlUaGlzKHt9LnRvU3RyaW5nKTtcbnZhciBzdHJpbmdTbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHN0cmluZ1NsaWNlKHRvU3RyaW5nKGl0KSwgOCwgLTEpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xudmFyIHNwbGl0ID0gdW5jdXJyeVRoaXMoJycuc3BsaXQpO1xuXG4vLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xubW9kdWxlLmV4cG9ydHMgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIHRocm93cyBhbiBlcnJvciBpbiByaGlubywgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3JoaW5vL2lzc3Vlcy8zNDZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGlucyAtLSBzYWZlXG4gIHJldHVybiAhJE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApO1xufSkgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNsYXNzb2YoaXQpID09PSAnU3RyaW5nJyA/IHNwbGl0KGl0LCAnJykgOiAkT2JqZWN0KGl0KTtcbn0gOiAkT2JqZWN0O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIHdlIGNhbid0IHVzZSBqdXN0IGBpdCA9PSBudWxsYCBzaW5jZSBvZiBgZG9jdW1lbnQuYWxsYCBzcGVjaWFsIGNhc2Vcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtSXNIVE1MRERBLWludGVybmFsLXNsb3QtYWVjXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPT09IG51bGwgfHwgaXQgPT09IHVuZGVmaW5lZDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgUmVxdWlyZU9iamVjdENvZXJjaWJsZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlcXVpcmVvYmplY3Rjb2VyY2libGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpc051bGxPclVuZGVmaW5lZChpdCkpIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEluZGV4ZWRPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShpdCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90XG52YXIgZG9jdW1lbnRBbGwgPSB0eXBlb2YgZG9jdW1lbnQgPT0gJ29iamVjdCcgJiYgZG9jdW1lbnQuYWxsO1xuXG4vLyBgSXNDYWxsYWJsZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWlzY2FsbGFibGVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL25vLXR5cGVvZi11bmRlZmluZWQgLS0gcmVxdWlyZWQgZm9yIHRlc3Rpbmdcbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIGRvY3VtZW50QWxsID09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50QWxsICE9PSB1bmRlZmluZWQgPyBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PSAnZnVuY3Rpb24nIHx8IGFyZ3VtZW50ID09PSBkb2N1bWVudEFsbDtcbn0gOiBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PSAnZnVuY3Rpb24nO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiBpc0NhbGxhYmxlKGl0KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciBhRnVuY3Rpb24gPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGlzQ2FsbGFibGUoYXJndW1lbnQpID8gYXJndW1lbnQgOiB1bmRlZmluZWQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lc3BhY2UsIG1ldGhvZCkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBhRnVuY3Rpb24oZ2xvYmFsVGhpc1tuYW1lc3BhY2VdKSA6IGdsb2JhbFRoaXNbbmFtZXNwYWNlXSAmJiBnbG9iYWxUaGlzW25hbWVzcGFjZV1bbWV0aG9kXTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVuY3VycnlUaGlzKHt9LmlzUHJvdG90eXBlT2YpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG5cbnZhciBuYXZpZ2F0b3IgPSBnbG9iYWxUaGlzLm5hdmlnYXRvcjtcbnZhciB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudDtcblxubW9kdWxlLmV4cG9ydHMgPSB1c2VyQWdlbnQgPyBTdHJpbmcodXNlckFnZW50KSA6ICcnO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Vudmlyb25tZW50LXVzZXItYWdlbnQnKTtcblxudmFyIHByb2Nlc3MgPSBnbG9iYWxUaGlzLnByb2Nlc3M7XG52YXIgRGVubyA9IGdsb2JhbFRoaXMuRGVubztcbnZhciB2ZXJzaW9ucyA9IHByb2Nlc3MgJiYgcHJvY2Vzcy52ZXJzaW9ucyB8fCBEZW5vICYmIERlbm8udmVyc2lvbjtcbnZhciB2OCA9IHZlcnNpb25zICYmIHZlcnNpb25zLnY4O1xudmFyIG1hdGNoLCB2ZXJzaW9uO1xuXG5pZiAodjgpIHtcbiAgbWF0Y2ggPSB2OC5zcGxpdCgnLicpO1xuICAvLyBpbiBvbGQgQ2hyb21lLCB2ZXJzaW9ucyBvZiBWOCBpc24ndCBWOCA9IENocm9tZSAvIDEwXG4gIC8vIGJ1dCB0aGVpciBjb3JyZWN0IHZlcnNpb25zIGFyZSBub3QgaW50ZXJlc3RpbmcgZm9yIHVzXG4gIHZlcnNpb24gPSBtYXRjaFswXSA+IDAgJiYgbWF0Y2hbMF0gPCA0ID8gMSA6ICsobWF0Y2hbMF0gKyBtYXRjaFsxXSk7XG59XG5cbi8vIEJyb3dzZXJGUyBOb2RlSlMgYHByb2Nlc3NgIHBvbHlmaWxsIGluY29ycmVjdGx5IHNldCBgLnY4YCB0byBgMC4wYFxuLy8gc28gY2hlY2sgYHVzZXJBZ2VudGAgZXZlbiBpZiBgLnY4YCBleGlzdHMsIGJ1dCAwXG5pZiAoIXZlcnNpb24gJiYgdXNlckFnZW50KSB7XG4gIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9FZGdlXFwvKFxcZCspLyk7XG4gIGlmICghbWF0Y2ggfHwgbWF0Y2hbMV0gPj0gNzQpIHtcbiAgICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvQ2hyb21lXFwvKFxcZCspLyk7XG4gICAgaWYgKG1hdGNoKSB2ZXJzaW9uID0gK21hdGNoWzFdO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmVyc2lvbjtcbiIsICIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1zeW1ib2wgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Vudmlyb25tZW50LXY4LXZlcnNpb24nKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcblxudmFyICRTdHJpbmcgPSBnbG9iYWxUaGlzLlN0cmluZztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gcmVxdWlyZWQgZm9yIHRlc3Rpbmdcbm1vZHVsZS5leHBvcnRzID0gISFPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBzeW1ib2wgPSBTeW1ib2woJ3N5bWJvbCBkZXRlY3Rpb24nKTtcbiAgLy8gQ2hyb21lIDM4IFN5bWJvbCBoYXMgaW5jb3JyZWN0IHRvU3RyaW5nIGNvbnZlcnNpb25cbiAgLy8gYGdldC1vd24tcHJvcGVydHktc3ltYm9sc2AgcG9seWZpbGwgc3ltYm9scyBjb252ZXJ0ZWQgdG8gb2JqZWN0IGFyZSBub3QgU3ltYm9sIGluc3RhbmNlc1xuICAvLyBuYjogRG8gbm90IGNhbGwgYFN0cmluZ2AgZGlyZWN0bHkgdG8gYXZvaWQgdGhpcyBiZWluZyBvcHRpbWl6ZWQgb3V0IHRvIGBzeW1ib2wrJydgIHdoaWNoIHdpbGwsXG4gIC8vIG9mIGNvdXJzZSwgZmFpbC5cbiAgcmV0dXJuICEkU3RyaW5nKHN5bWJvbCkgfHwgIShPYmplY3Qoc3ltYm9sKSBpbnN0YW5jZW9mIFN5bWJvbCkgfHxcbiAgICAvLyBDaHJvbWUgMzgtNDAgc3ltYm9scyBhcmUgbm90IGluaGVyaXRlZCBmcm9tIERPTSBjb2xsZWN0aW9ucyBwcm90b3R5cGVzIHRvIGluc3RhbmNlc1xuICAgICFTeW1ib2wuc2hhbSAmJiBWOF9WRVJTSU9OICYmIFY4X1ZFUlNJT04gPCA0MTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9TWU1CT0wgJiZcbiAgIVN5bWJvbC5zaGFtICYmXG4gIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCc7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZicpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVTRV9TWU1CT0xfQVNfVUlEID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHZhciAkU3ltYm9sID0gZ2V0QnVpbHRJbignU3ltYm9sJyk7XG4gIHJldHVybiBpc0NhbGxhYmxlKCRTeW1ib2wpICYmIGlzUHJvdG90eXBlT2YoJFN5bWJvbC5wcm90b3R5cGUsICRPYmplY3QoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICRTdHJpbmcgPSBTdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICRTdHJpbmcoYXJndW1lbnQpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiAnT2JqZWN0JztcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHRyeVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RyeS10by1zdHJpbmcnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBBc3NlcnQ6IElzQ2FsbGFibGUoYXJndW1lbnQpIGlzIHRydWVgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNDYWxsYWJsZShhcmd1bWVudCkpIHJldHVybiBhcmd1bWVudDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IodHJ5VG9TdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG4vLyBgR2V0TWV0aG9kYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZ2V0bWV0aG9kXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChWLCBQKSB7XG4gIHZhciBmdW5jID0gVltQXTtcbiAgcmV0dXJuIGlzTnVsbE9yVW5kZWZpbmVkKGZ1bmMpID8gdW5kZWZpbmVkIDogYUNhbGxhYmxlKGZ1bmMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYE9yZGluYXJ5VG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vcmRpbmFyeXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKHByZWYgPT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChpc0NhbGxhYmxlKGZuID0gaW5wdXQudmFsdWVPZikgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChwcmVmICE9PSAnc3RyaW5nJyAmJiBpc0NhbGxhYmxlKGZuID0gaW5wdXQudG9TdHJpbmcpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICB0cnkge1xuICAgIGRlZmluZVByb3BlcnR5KGdsb2JhbFRoaXMsIGtleSwgeyB2YWx1ZTogdmFsdWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZ2xvYmFsVGhpc1trZXldID0gdmFsdWU7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gbW9kdWxlLmV4cG9ydHMgPSBnbG9iYWxUaGlzW1NIQVJFRF0gfHwgZGVmaW5lR2xvYmFsUHJvcGVydHkoU0hBUkVELCB7fSk7XG5cbihzdG9yZS52ZXJzaW9ucyB8fCAoc3RvcmUudmVyc2lvbnMgPSBbXSkpLnB1c2goe1xuICB2ZXJzaW9uOiAnMy40MS4wJyxcbiAgbW9kZTogSVNfUFVSRSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE0LTIwMjUgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknLFxuICBsaWNlbnNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvYmxvYi92My40MS4wL0xJQ0VOU0UnLFxuICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcydcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlIHx8IHt9KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG4vLyBgVG9PYmplY3RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b29iamVjdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuICRPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IHVuY3VycnlUaGlzKHt9Lmhhc093blByb3BlcnR5KTtcblxuLy8gYEhhc093blByb3BlcnR5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaGFzb3ducHJvcGVydHlcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaGFzb3duIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0Lmhhc093biB8fCBmdW5jdGlvbiBoYXNPd24oaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkodG9PYmplY3QoaXQpLCBrZXkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbnZhciBpZCA9IDA7XG52YXIgcG9zdGZpeCA9IE1hdGgucmFuZG9tKCk7XG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcygxLjAudG9TdHJpbmcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJyArIChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5KSArICcpXycgKyB0b1N0cmluZygrK2lkICsgcG9zdGZpeCwgMzYpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24nKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xuXG52YXIgU3ltYm9sID0gZ2xvYmFsVGhpcy5TeW1ib2w7XG52YXIgV2VsbEtub3duU3ltYm9sc1N0b3JlID0gc2hhcmVkKCd3a3MnKTtcbnZhciBjcmVhdGVXZWxsS25vd25TeW1ib2wgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IFN5bWJvbFsnZm9yJ10gfHwgU3ltYm9sIDogU3ltYm9sICYmIFN5bWJvbC53aXRob3V0U2V0dGVyIHx8IHVpZDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICBpZiAoIWhhc093bihXZWxsS25vd25TeW1ib2xzU3RvcmUsIG5hbWUpKSB7XG4gICAgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID0gTkFUSVZFX1NZTUJPTCAmJiBoYXNPd24oU3ltYm9sLCBuYW1lKVxuICAgICAgPyBTeW1ib2xbbmFtZV1cbiAgICAgIDogY3JlYXRlV2VsbEtub3duU3ltYm9sKCdTeW1ib2wuJyArIG5hbWUpO1xuICB9IHJldHVybiBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1zeW1ib2wnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xudmFyIG9yZGluYXJ5VG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3JkaW5hcnktdG8tcHJpbWl0aXZlJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xudmFyIFRPX1BSSU1JVElWRSA9IHdlbGxLbm93blN5bWJvbCgndG9QcmltaXRpdmUnKTtcblxuLy8gYFRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIGlmICghaXNPYmplY3QoaW5wdXQpIHx8IGlzU3ltYm9sKGlucHV0KSkgcmV0dXJuIGlucHV0O1xuICB2YXIgZXhvdGljVG9QcmltID0gZ2V0TWV0aG9kKGlucHV0LCBUT19QUklNSVRJVkUpO1xuICB2YXIgcmVzdWx0O1xuICBpZiAoZXhvdGljVG9QcmltKSB7XG4gICAgaWYgKHByZWYgPT09IHVuZGVmaW5lZCkgcHJlZiA9ICdkZWZhdWx0JztcbiAgICByZXN1bHQgPSBjYWxsKGV4b3RpY1RvUHJpbSwgaW5wdXQsIHByZWYpO1xuICAgIGlmICghaXNPYmplY3QocmVzdWx0KSB8fCBpc1N5bWJvbChyZXN1bHQpKSByZXR1cm4gcmVzdWx0O1xuICAgIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xuICB9XG4gIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnbnVtYmVyJztcbiAgcmV0dXJuIG9yZGluYXJ5VG9QcmltaXRpdmUoaW5wdXQsIHByZWYpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG5cbi8vIGBUb1Byb3BlcnR5S2V5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcm9wZXJ0eWtleVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCAnc3RyaW5nJyk7XG4gIHJldHVybiBpc1N5bWJvbChrZXkpID8ga2V5IDoga2V5ICsgJyc7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciBkb2N1bWVudCA9IGdsb2JhbFRoaXMuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBFWElTVFMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBFWElTVFMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcblxuLy8gVGhhbmtzIHRvIElFOCBmb3IgaXRzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3JlYXRlRWxlbWVudCgnZGl2JyksICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfVxuICB9KS5hICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhc093bihPLCBQKSkgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcighY2FsbChwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mLCBPLCBQKSwgT1tQXSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIFY4IH4gQ2hyb21lIDM2LVxuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzMzNFxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdwcm90b3R5cGUnLCB7XG4gICAgdmFsdWU6IDQyLFxuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KS5wcm90b3R5cGUgIT09IDQyO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFN0cmluZyA9IFN0cmluZztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBUeXBlKGFyZ3VtZW50KSBpcyBPYmplY3RgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNPYmplY3QoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKCRTdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYW4gb2JqZWN0Jyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG52YXIgVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdjgtcHJvdG90eXBlLWRlZmluZS1idWcnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBFTlVNRVJBQkxFID0gJ2VudW1lcmFibGUnO1xudmFyIENPTkZJR1VSQUJMRSA9ICdjb25maWd1cmFibGUnO1xudmFyIFdSSVRBQkxFID0gJ3dyaXRhYmxlJztcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA/IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKHR5cGVvZiBPID09PSAnZnVuY3Rpb24nICYmIFAgPT09ICdwcm90b3R5cGUnICYmICd2YWx1ZScgaW4gQXR0cmlidXRlcyAmJiBXUklUQUJMRSBpbiBBdHRyaWJ1dGVzICYmICFBdHRyaWJ1dGVzW1dSSVRBQkxFXSkge1xuICAgIHZhciBjdXJyZW50ID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgICBpZiAoY3VycmVudCAmJiBjdXJyZW50W1dSSVRBQkxFXSkge1xuICAgICAgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gICAgICBBdHRyaWJ1dGVzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IENPTkZJR1VSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tDT05GSUdVUkFCTEVdIDogY3VycmVudFtDT05GSUdVUkFCTEVdLFxuICAgICAgICBlbnVtZXJhYmxlOiBFTlVNRVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0VOVU1FUkFCTEVdIDogY3VycmVudFtFTlVNRVJBQkxFXSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgICB9O1xuICAgIH1cbiAgfSByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xufSA6ICRkZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0RGVzY3JpcHRvciA9IERFU0NSSVBUT1JTICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbnZhciBFWElTVFMgPSBoYXNPd24oRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJyk7XG4vLyBhZGRpdGlvbmFsIHByb3RlY3Rpb24gZnJvbSBtaW5pZmllZCAvIG1hbmdsZWQgLyBkcm9wcGVkIGZ1bmN0aW9uIG5hbWVzXG52YXIgUFJPUEVSID0gRVhJU1RTICYmIChmdW5jdGlvbiBzb21ldGhpbmcoKSB7IC8qIGVtcHR5ICovIH0pLm5hbWUgPT09ICdzb21ldGhpbmcnO1xudmFyIENPTkZJR1VSQUJMRSA9IEVYSVNUUyAmJiAoIURFU0NSSVBUT1JTIHx8IChERVNDUklQVE9SUyAmJiBnZXREZXNjcmlwdG9yKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpLmNvbmZpZ3VyYWJsZSkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRVhJU1RTOiBFWElTVFMsXG4gIFBST1BFUjogUFJPUEVSLFxuICBDT05GSUdVUkFCTEU6IENPTkZJR1VSQUJMRVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG52YXIgZnVuY3Rpb25Ub1N0cmluZyA9IHVuY3VycnlUaGlzKEZ1bmN0aW9uLnRvU3RyaW5nKTtcblxuLy8gdGhpcyBoZWxwZXIgYnJva2VuIGluIGBjb3JlLWpzQDMuNC4xLTMuNC40YCwgc28gd2UgY2FuJ3QgdXNlIGBzaGFyZWRgIGhlbHBlclxuaWYgKCFpc0NhbGxhYmxlKHN0b3JlLmluc3BlY3RTb3VyY2UpKSB7XG4gIHN0b3JlLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb25Ub1N0cmluZyhpdCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmUuaW5zcGVjdFNvdXJjZTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWxUaGlzLldlYWtNYXA7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNDYWxsYWJsZShXZWFrTWFwKSAmJiAvbmF0aXZlIGNvZGUvLnRlc3QoU3RyaW5nKFdlYWtNYXApKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcblxudmFyIGtleXMgPSBzaGFyZWQoJ2tleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBrZXlzW2tleV0gfHwgKGtleXNba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX1dFQUtfTUFQID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlYWstbWFwLWJhc2ljLWRldGVjdGlvbicpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCA9ICdPYmplY3QgYWxyZWFkeSBpbml0aWFsaXplZCc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsVGhpcy5UeXBlRXJyb3I7XG52YXIgV2Vha01hcCA9IGdsb2JhbFRoaXMuV2Vha01hcDtcbnZhciBzZXQsIGdldCwgaGFzO1xuXG52YXIgZW5mb3JjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaGFzKGl0KSA/IGdldChpdCkgOiBzZXQoaXQsIHt9KTtcbn07XG5cbnZhciBnZXR0ZXJGb3IgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIHN0YXRlO1xuICAgIGlmICghaXNPYmplY3QoaXQpIHx8IChzdGF0ZSA9IGdldChpdCkpLnR5cGUgIT09IFRZUEUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkJyk7XG4gICAgfSByZXR1cm4gc3RhdGU7XG4gIH07XG59O1xuXG5pZiAoTkFUSVZFX1dFQUtfTUFQIHx8IHNoYXJlZC5zdGF0ZSkge1xuICB2YXIgc3RvcmUgPSBzaGFyZWQuc3RhdGUgfHwgKHNoYXJlZC5zdGF0ZSA9IG5ldyBXZWFrTWFwKCkpO1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG4gIHN0b3JlLmdldCA9IHN0b3JlLmdldDtcbiAgc3RvcmUuaGFzID0gc3RvcmUuaGFzO1xuICBzdG9yZS5zZXQgPSBzdG9yZS5zZXQ7XG4gIC8qIGVzbGludC1lbmFibGUgbm8tc2VsZi1hc3NpZ24gLS0gcHJvdG90eXBlIG1ldGhvZHMgcHJvdGVjdGlvbiAqL1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKHN0b3JlLmhhcyhpdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIHN0b3JlLnNldChpdCwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHN0b3JlLmdldChpdCkgfHwge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBzdG9yZS5oYXMoaXQpO1xuICB9O1xufSBlbHNlIHtcbiAgdmFyIFNUQVRFID0gc2hhcmVkS2V5KCdzdGF0ZScpO1xuICBoaWRkZW5LZXlzW1NUQVRFXSA9IHRydWU7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoaGFzT3duKGl0LCBTVEFURSkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShpdCwgU1RBVEUsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKSA/IGl0W1NUQVRFXSA6IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldCxcbiAgZ2V0OiBnZXQsXG4gIGhhczogaGFzLFxuICBlbmZvcmNlOiBlbmZvcmNlLFxuICBnZXR0ZXJGb3I6IGdldHRlckZvclxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLW5hbWUnKS5DT05GSUdVUkFCTEU7XG52YXIgaW5zcGVjdFNvdXJjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZScpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcblxudmFyIGVuZm9yY2VJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5lbmZvcmNlO1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldDtcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG52YXIgcmVwbGFjZSA9IHVuY3VycnlUaGlzKCcnLnJlcGxhY2UpO1xudmFyIGpvaW4gPSB1bmN1cnJ5VGhpcyhbXS5qb2luKTtcblxudmFyIENPTkZJR1VSQUJMRV9MRU5HVEggPSBERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAnbGVuZ3RoJywgeyB2YWx1ZTogOCB9KS5sZW5ndGggIT09IDg7XG59KTtcblxudmFyIFRFTVBMQVRFID0gU3RyaW5nKFN0cmluZykuc3BsaXQoJ1N0cmluZycpO1xuXG52YXIgbWFrZUJ1aWx0SW4gPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgbmFtZSwgb3B0aW9ucykge1xuICBpZiAoc3RyaW5nU2xpY2UoJFN0cmluZyhuYW1lKSwgMCwgNykgPT09ICdTeW1ib2woJykge1xuICAgIG5hbWUgPSAnWycgKyByZXBsYWNlKCRTdHJpbmcobmFtZSksIC9eU3ltYm9sXFwoKFteKV0qKVxcKS4qJC8sICckMScpICsgJ10nO1xuICB9XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZ2V0dGVyKSBuYW1lID0gJ2dldCAnICsgbmFtZTtcbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5zZXR0ZXIpIG5hbWUgPSAnc2V0ICcgKyBuYW1lO1xuICBpZiAoIWhhc093bih2YWx1ZSwgJ25hbWUnKSB8fCAoQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgJiYgdmFsdWUubmFtZSAhPT0gbmFtZSkpIHtcbiAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbmFtZScsIHsgdmFsdWU6IG5hbWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbiAgICBlbHNlIHZhbHVlLm5hbWUgPSBuYW1lO1xuICB9XG4gIGlmIChDT05GSUdVUkFCTEVfTEVOR1RIICYmIG9wdGlvbnMgJiYgaGFzT3duKG9wdGlvbnMsICdhcml0eScpICYmIHZhbHVlLmxlbmd0aCAhPT0gb3B0aW9ucy5hcml0eSkge1xuICAgIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbGVuZ3RoJywgeyB2YWx1ZTogb3B0aW9ucy5hcml0eSB9KTtcbiAgfVxuICB0cnkge1xuICAgIGlmIChvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnY29uc3RydWN0b3InKSAmJiBvcHRpb25zLmNvbnN0cnVjdG9yKSB7XG4gICAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAncHJvdG90eXBlJywgeyB3cml0YWJsZTogZmFsc2UgfSk7XG4gICAgLy8gaW4gVjggfiBDaHJvbWUgNTMsIHByb3RvdHlwZXMgb2Ygc29tZSBtZXRob2RzLCBsaWtlIGBBcnJheS5wcm90b3R5cGUudmFsdWVzYCwgYXJlIG5vbi13cml0YWJsZVxuICAgIH0gZWxzZSBpZiAodmFsdWUucHJvdG90eXBlKSB2YWx1ZS5wcm90b3R5cGUgPSB1bmRlZmluZWQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgdmFyIHN0YXRlID0gZW5mb3JjZUludGVybmFsU3RhdGUodmFsdWUpO1xuICBpZiAoIWhhc093bihzdGF0ZSwgJ3NvdXJjZScpKSB7XG4gICAgc3RhdGUuc291cmNlID0gam9pbihURU1QTEFURSwgdHlwZW9mIG5hbWUgPT0gJ3N0cmluZycgPyBuYW1lIDogJycpO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG5cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV4dGVuZC1uYXRpdmUgLS0gcmVxdWlyZWRcbkZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IG1ha2VCdWlsdEluKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gaXNDYWxsYWJsZSh0aGlzKSAmJiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnNvdXJjZSB8fCBpbnNwZWN0U291cmNlKHRoaXMpO1xufSwgJ3RvU3RyaW5nJyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgbWFrZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWFrZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgdmFyIHNpbXBsZSA9IG9wdGlvbnMuZW51bWVyYWJsZTtcbiAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWUgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubmFtZSA6IGtleTtcbiAgaWYgKGlzQ2FsbGFibGUodmFsdWUpKSBtYWtlQnVpbHRJbih2YWx1ZSwgbmFtZSwgb3B0aW9ucyk7XG4gIGlmIChvcHRpb25zLmdsb2JhbCkge1xuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lR2xvYmFsUHJvcGVydHkoa2V5LCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghb3B0aW9ucy51bnNhZmUpIGRlbGV0ZSBPW2tleV07XG4gICAgICBlbHNlIGlmIChPW2tleV0pIHNpbXBsZSA9IHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiAhb3B0aW9ucy5ub25Db25maWd1cmFibGUsXG4gICAgICB3cml0YWJsZTogIW9wdGlvbnMubm9uV3JpdGFibGVcbiAgICB9KTtcbiAgfSByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4vLyBgTWF0aC50cnVuY2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hdGgudHJ1bmNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1tYXRoLXRydW5jIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gTWF0aC50cnVuYyB8fCBmdW5jdGlvbiB0cnVuYyh4KSB7XG4gIHZhciBuID0gK3g7XG4gIHJldHVybiAobiA+IDAgPyBmbG9vciA6IGNlaWwpKG4pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdHJ1bmMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWF0aC10cnVuYycpO1xuXG4vLyBgVG9JbnRlZ2VyT3JJbmZpbml0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvaW50ZWdlcm9yaW5maW5pdHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBudW1iZXIgPSArYXJndW1lbnQ7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gIHJldHVybiBudW1iZXIgIT09IG51bWJlciB8fCBudW1iZXIgPT09IDAgPyAwIDogdHJ1bmMobnVtYmVyKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIEhlbHBlciBmb3IgYSBwb3B1bGFyIHJlcGVhdGluZyBjYXNlIG9mIHRoZSBzcGVjOlxuLy8gTGV0IGludGVnZXIgYmUgPyBUb0ludGVnZXIoaW5kZXgpLlxuLy8gSWYgaW50ZWdlciA8IDAsIGxldCByZXN1bHQgYmUgbWF4KChsZW5ndGggKyBpbnRlZ2VyKSwgMCk7IGVsc2UgbGV0IHJlc3VsdCBiZSBtaW4oaW50ZWdlciwgbGVuZ3RoKS5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgdmFyIGludGVnZXIgPSB0b0ludGVnZXJPckluZmluaXR5KGluZGV4KTtcbiAgcmV0dXJuIGludGVnZXIgPCAwID8gbWF4KGludGVnZXIgKyBsZW5ndGgsIDApIDogbWluKGludGVnZXIsIGxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBgVG9MZW5ndGhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2xlbmd0aFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGxlbiA9IHRvSW50ZWdlck9ySW5maW5pdHkoYXJndW1lbnQpO1xuICByZXR1cm4gbGVuID4gMCA/IG1pbihsZW4sIDB4MUZGRkZGRkZGRkZGRkYpIDogMDsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG5cbi8vIGBMZW5ndGhPZkFycmF5TGlrZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWxlbmd0aG9mYXJyYXlsaWtlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHRvTGVuZ3RoKG9iai5sZW5ndGgpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGluZGV4T2YsIGluY2x1ZGVzIH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gICAgaWYgKGxlbmd0aCA9PT0gMCkgcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT09IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgICBpZiAodmFsdWUgIT09IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICBpZiAoKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pICYmIE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuICBpbmNsdWRlczogY3JlYXRlTWV0aG9kKHRydWUpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4gIGluZGV4T2Y6IGNyZWF0ZU1ldGhvZChmYWxzZSlcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgaW5kZXhPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluZGV4T2Y7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSAhaGFzT3duKGhpZGRlbktleXMsIGtleSkgJiYgaGFzT3duKE8sIGtleSkgJiYgcHVzaChyZXN1bHQsIGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXNPd24oTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+aW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcHVzaChyZXN1bHQsIGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gSUU4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IFtcbiAgJ2NvbnN0cnVjdG9yJyxcbiAgJ2hhc093blByb3BlcnR5JyxcbiAgJ2lzUHJvdG90eXBlT2YnLFxuICAncHJvcGVydHlJc0VudW1lcmFibGUnLFxuICAndG9Mb2NhbGVTdHJpbmcnLFxuICAndG9TdHJpbmcnLFxuICAndmFsdWVPZidcbl07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxudmFyIGhpZGRlbktleXMgPSBlbnVtQnVnS2V5cy5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5bmFtZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHluYW1lcyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcblxudmFyIGNvbmNhdCA9IHVuY3VycnlUaGlzKFtdLmNvbmNhdCk7XG5cbi8vIGFsbCBvYmplY3Qga2V5cywgaW5jbHVkZXMgbm9uLWVudW1lcmFibGUgYW5kIHN5bWJvbHNcbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignUmVmbGVjdCcsICdvd25LZXlzJykgfHwgZnVuY3Rpb24gb3duS2V5cyhpdCkge1xuICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUuZihhbk9iamVjdChpdCkpO1xuICB2YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlLmY7XG4gIHJldHVybiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBjb25jYXQoa2V5cywgZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSkgOiBrZXlzO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBvd25LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL293bi1rZXlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlLCBleGNlcHRpb25zKSB7XG4gIHZhciBrZXlzID0gb3duS2V5cyhzb3VyY2UpO1xuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mO1xuICB2YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmY7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGlmICghaGFzT3duKHRhcmdldCwga2V5KSAmJiAhKGV4Y2VwdGlvbnMgJiYgaGFzT3duKGV4Y2VwdGlvbnMsIGtleSkpKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgfVxuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIHJlcGxhY2VtZW50ID0gLyN8XFwucHJvdG90eXBlXFwuLztcblxudmFyIGlzRm9yY2VkID0gZnVuY3Rpb24gKGZlYXR1cmUsIGRldGVjdGlvbikge1xuICB2YXIgdmFsdWUgPSBkYXRhW25vcm1hbGl6ZShmZWF0dXJlKV07XG4gIHJldHVybiB2YWx1ZSA9PT0gUE9MWUZJTEwgPyB0cnVlXG4gICAgOiB2YWx1ZSA9PT0gTkFUSVZFID8gZmFsc2VcbiAgICA6IGlzQ2FsbGFibGUoZGV0ZWN0aW9uKSA/IGZhaWxzKGRldGVjdGlvbilcbiAgICA6ICEhZGV0ZWN0aW9uO1xufTtcblxudmFyIG5vcm1hbGl6ZSA9IGlzRm9yY2VkLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UocmVwbGFjZW1lbnQsICcuJykudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBkYXRhID0gaXNGb3JjZWQuZGF0YSA9IHt9O1xudmFyIE5BVElWRSA9IGlzRm9yY2VkLk5BVElWRSA9ICdOJztcbnZhciBQT0xZRklMTCA9IGlzRm9yY2VkLlBPTFlGSUxMID0gJ1AnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRm9yY2VkO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcbnZhciBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcycpO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xuXG4vKlxuICBvcHRpb25zLnRhcmdldCAgICAgICAgIC0gbmFtZSBvZiB0aGUgdGFyZ2V0IG9iamVjdFxuICBvcHRpb25zLmdsb2JhbCAgICAgICAgIC0gdGFyZ2V0IGlzIHRoZSBnbG9iYWwgb2JqZWN0XG4gIG9wdGlvbnMuc3RhdCAgICAgICAgICAgLSBleHBvcnQgYXMgc3RhdGljIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucHJvdG8gICAgICAgICAgLSBleHBvcnQgYXMgcHJvdG90eXBlIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucmVhbCAgICAgICAgICAgLSByZWFsIHByb3RvdHlwZSBtZXRob2QgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLmZvcmNlZCAgICAgICAgIC0gZXhwb3J0IGV2ZW4gaWYgdGhlIG5hdGl2ZSBmZWF0dXJlIGlzIGF2YWlsYWJsZVxuICBvcHRpb25zLmJpbmQgICAgICAgICAgIC0gYmluZCBtZXRob2RzIHRvIHRoZSB0YXJnZXQsIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy53cmFwICAgICAgICAgICAtIHdyYXAgY29uc3RydWN0b3JzIHRvIHByZXZlbnRpbmcgZ2xvYmFsIHBvbGx1dGlvbiwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLnVuc2FmZSAgICAgICAgIC0gdXNlIHRoZSBzaW1wbGUgYXNzaWdubWVudCBvZiBwcm9wZXJ0eSBpbnN0ZWFkIG9mIGRlbGV0ZSArIGRlZmluZVByb3BlcnR5XG4gIG9wdGlvbnMuc2hhbSAgICAgICAgICAgLSBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gIG9wdGlvbnMuZW51bWVyYWJsZSAgICAgLSBleHBvcnQgYXMgZW51bWVyYWJsZSBwcm9wZXJ0eVxuICBvcHRpb25zLmRvbnRDYWxsR2V0U2V0IC0gcHJldmVudCBjYWxsaW5nIGEgZ2V0dGVyIG9uIHRhcmdldFxuICBvcHRpb25zLm5hbWUgICAgICAgICAgIC0gdGhlIC5uYW1lIG9mIHRoZSBmdW5jdGlvbiBpZiBpdCBkb2VzIG5vdCBtYXRjaCB0aGUga2V5XG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucywgc291cmNlKSB7XG4gIHZhciBUQVJHRVQgPSBvcHRpb25zLnRhcmdldDtcbiAgdmFyIEdMT0JBTCA9IG9wdGlvbnMuZ2xvYmFsO1xuICB2YXIgU1RBVElDID0gb3B0aW9ucy5zdGF0O1xuICB2YXIgRk9SQ0VELCB0YXJnZXQsIGtleSwgdGFyZ2V0UHJvcGVydHksIHNvdXJjZVByb3BlcnR5LCBkZXNjcmlwdG9yO1xuICBpZiAoR0xPQkFMKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsVGhpcztcbiAgfSBlbHNlIGlmIChTVEFUSUMpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxUaGlzW1RBUkdFVF0gfHwgZGVmaW5lR2xvYmFsUHJvcGVydHkoVEFSR0VULCB7fSk7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsVGhpc1tUQVJHRVRdICYmIGdsb2JhbFRoaXNbVEFSR0VUXS5wcm90b3R5cGU7XG4gIH1cbiAgaWYgKHRhcmdldCkgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgc291cmNlUHJvcGVydHkgPSBzb3VyY2Vba2V5XTtcbiAgICBpZiAob3B0aW9ucy5kb250Q2FsbEdldFNldCkge1xuICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gICAgICB0YXJnZXRQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci52YWx1ZTtcbiAgICB9IGVsc2UgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRba2V5XTtcbiAgICBGT1JDRUQgPSBpc0ZvcmNlZChHTE9CQUwgPyBrZXkgOiBUQVJHRVQgKyAoU1RBVElDID8gJy4nIDogJyMnKSArIGtleSwgb3B0aW9ucy5mb3JjZWQpO1xuICAgIC8vIGNvbnRhaW5lZCBpbiB0YXJnZXRcbiAgICBpZiAoIUZPUkNFRCAmJiB0YXJnZXRQcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZW9mIHNvdXJjZVByb3BlcnR5ID09IHR5cGVvZiB0YXJnZXRQcm9wZXJ0eSkgY29udGludWU7XG4gICAgICBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKHNvdXJjZVByb3BlcnR5LCB0YXJnZXRQcm9wZXJ0eSk7XG4gICAgfVxuICAgIC8vIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgICBpZiAob3B0aW9ucy5zaGFtIHx8ICh0YXJnZXRQcm9wZXJ0eSAmJiB0YXJnZXRQcm9wZXJ0eS5zaGFtKSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHNvdXJjZVByb3BlcnR5LCAnc2hhbScsIHRydWUpO1xuICAgIH1cbiAgICBkZWZpbmVCdWlsdEluKHRhcmdldCwga2V5LCBzb3VyY2VQcm9wZXJ0eSwgb3B0aW9ucyk7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZicpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFByb3RvdHlwZSkge1xuICBpZiAoaXNQcm90b3R5cGVPZihQcm90b3R5cGUsIGl0KSkgcmV0dXJuIGl0O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcignSW5jb3JyZWN0IGludm9jYXRpb24nKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRigpIHsgLyogZW1wdHkgKi8gfVxuICBGLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IG51bGw7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0cHJvdG90eXBlb2YgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZihuZXcgRigpKSAhPT0gRi5wcm90b3R5cGU7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBDT1JSRUNUX1BST1RPVFlQRV9HRVRURVIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29ycmVjdC1wcm90b3R5cGUtZ2V0dGVyJyk7XG5cbnZhciBJRV9QUk9UTyA9IHNoYXJlZEtleSgnSUVfUFJPVE8nKTtcbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xudmFyIE9iamVjdFByb3RvdHlwZSA9ICRPYmplY3QucHJvdG90eXBlO1xuXG4vLyBgT2JqZWN0LmdldFByb3RvdHlwZU9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldHByb3RvdHlwZW9mXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldHByb3RvdHlwZW9mIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gQ09SUkVDVF9QUk9UT1RZUEVfR0VUVEVSID8gJE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIChPKSB7XG4gIHZhciBvYmplY3QgPSB0b09iamVjdChPKTtcbiAgaWYgKGhhc093bihvYmplY3QsIElFX1BST1RPKSkgcmV0dXJuIG9iamVjdFtJRV9QUk9UT107XG4gIHZhciBjb25zdHJ1Y3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcjtcbiAgaWYgKGlzQ2FsbGFibGUoY29uc3RydWN0b3IpICYmIG9iamVjdCBpbnN0YW5jZW9mIGNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gb2JqZWN0IGluc3RhbmNlb2YgJE9iamVjdCA/IE9iamVjdFByb3RvdHlwZSA6IG51bGw7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBtYWtlQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9tYWtlLWJ1aWx0LWluJyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpIHtcbiAgaWYgKGRlc2NyaXB0b3IuZ2V0KSBtYWtlQnVpbHRJbihkZXNjcmlwdG9yLmdldCwgbmFtZSwgeyBnZXR0ZXI6IHRydWUgfSk7XG4gIGlmIChkZXNjcmlwdG9yLnNldCkgbWFrZUJ1aWx0SW4oZGVzY3JpcHRvci5zZXQsIG5hbWUsIHsgc2V0dGVyOiB0cnVlIH0pO1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkuZih0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBrZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtrZXldID0gdmFsdWU7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG5cbi8vIGBPYmplY3Qua2V5c2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5rZXlzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWtleXMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Y4LXByb3RvdHlwZS1kZWZpbmUtYnVnJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIG9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMnKTtcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnRpZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydGllcyAtLSBzYWZlXG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyAmJiAhVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIHByb3BzID0gdG9JbmRleGVkT2JqZWN0KFByb3BlcnRpZXMpO1xuICB2YXIga2V5cyA9IG9iamVjdEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKE8sIGtleSA9IGtleXNbaW5kZXgrK10sIHByb3BzW2tleV0pO1xuICByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignZG9jdW1lbnQnLCAnZG9jdW1lbnRFbGVtZW50Jyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZ2xvYmFsIEFjdGl2ZVhPYmplY3QgLS0gb2xkIElFLCBXU0ggKi9cbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBkZWZpbmVQcm9wZXJ0aWVzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydGllcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG52YXIgaHRtbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9odG1sJyk7XG52YXIgZG9jdW1lbnRDcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcblxudmFyIEdUID0gJz4nO1xudmFyIExUID0gJzwnO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIFNDUklQVCA9ICdzY3JpcHQnO1xudmFyIElFX1BST1RPID0gc2hhcmVkS2V5KCdJRV9QUk9UTycpO1xuXG52YXIgRW1wdHlDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcblxudmFyIHNjcmlwdFRhZyA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gIHJldHVybiBMVCArIFNDUklQVCArIEdUICsgY29udGVudCArIExUICsgJy8nICsgU0NSSVBUICsgR1Q7XG59O1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgQWN0aXZlWCBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVggPSBmdW5jdGlvbiAoYWN0aXZlWERvY3VtZW50KSB7XG4gIGFjdGl2ZVhEb2N1bWVudC53cml0ZShzY3JpcHRUYWcoJycpKTtcbiAgYWN0aXZlWERvY3VtZW50LmNsb3NlKCk7XG4gIHZhciB0ZW1wID0gYWN0aXZlWERvY3VtZW50LnBhcmVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWFzc2lnbm1lbnQgLS0gYXZvaWQgbWVtb3J5IGxlYWtcbiAgYWN0aXZlWERvY3VtZW50ID0gbnVsbDtcbiAgcmV0dXJuIHRlbXA7XG59O1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgTnVsbFByb3RvT2JqZWN0VmlhSUZyYW1lID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gZG9jdW1lbnRDcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgdmFyIEpTID0gJ2phdmEnICsgU0NSSVBUICsgJzonO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBodG1sLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy80NzVcbiAgaWZyYW1lLnNyYyA9IFN0cmluZyhKUyk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUoc2NyaXB0VGFnKCdkb2N1bWVudC5GPU9iamVjdCcpKTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgcmV0dXJuIGlmcmFtZURvY3VtZW50LkY7XG59O1xuXG4vLyBDaGVjayBmb3IgZG9jdW1lbnQuZG9tYWluIGFuZCBhY3RpdmUgeCBzdXBwb3J0XG4vLyBObyBuZWVkIHRvIHVzZSBhY3RpdmUgeCBhcHByb2FjaCB3aGVuIGRvY3VtZW50LmRvbWFpbiBpcyBub3Qgc2V0XG4vLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltL2lzc3Vlcy8xNTBcbi8vIHZhcmlhdGlvbiBvZiBodHRwczovL2dpdGh1Yi5jb20va2l0Y2FtYnJpZGdlL2VzNS1zaGltL2NvbW1pdC80ZjczOGFjMDY2MzQ2XG4vLyBhdm9pZCBJRSBHQyBidWdcbnZhciBhY3RpdmVYRG9jdW1lbnQ7XG52YXIgTnVsbFByb3RvT2JqZWN0ID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIGFjdGl2ZVhEb2N1bWVudCA9IG5ldyBBY3RpdmVYT2JqZWN0KCdodG1sZmlsZScpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBpZ25vcmUgKi8gfVxuICBOdWxsUHJvdG9PYmplY3QgPSB0eXBlb2YgZG9jdW1lbnQgIT0gJ3VuZGVmaW5lZCdcbiAgICA/IGRvY3VtZW50LmRvbWFpbiAmJiBhY3RpdmVYRG9jdW1lbnRcbiAgICAgID8gTnVsbFByb3RvT2JqZWN0VmlhQWN0aXZlWChhY3RpdmVYRG9jdW1lbnQpIC8vIG9sZCBJRVxuICAgICAgOiBOdWxsUHJvdG9PYmplY3RWaWFJRnJhbWUoKVxuICAgIDogTnVsbFByb3RvT2JqZWN0VmlhQWN0aXZlWChhY3RpdmVYRG9jdW1lbnQpOyAvLyBXU0hcbiAgdmFyIGxlbmd0aCA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSBkZWxldGUgTnVsbFByb3RvT2JqZWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbbGVuZ3RoXV07XG4gIHJldHVybiBOdWxsUHJvdG9PYmplY3QoKTtcbn07XG5cbmhpZGRlbktleXNbSUVfUFJPVE9dID0gdHJ1ZTtcblxuLy8gYE9iamVjdC5jcmVhdGVgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuY3JlYXRlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWNyZWF0ZSAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eUNvbnN0cnVjdG9yW1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHlDb25zdHJ1Y3RvcigpO1xuICAgIEVtcHR5Q29uc3RydWN0b3JbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gTnVsbFByb3RvT2JqZWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkZWZpbmVQcm9wZXJ0aWVzTW9kdWxlLmYocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YnKTtcbnZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbicpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1lfU0FGQVJJX0lURVJBVE9SUyA9IGZhbHNlO1xuXG4vLyBgJUl0ZXJhdG9yUHJvdG90eXBlJWAgb2JqZWN0XG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSVpdGVyYXRvcnByb3RvdHlwZSUtb2JqZWN0XG52YXIgSXRlcmF0b3JQcm90b3R5cGUsIFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSwgYXJyYXlJdGVyYXRvcjtcblxuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWtleXMgLS0gc2FmZSAqL1xuaWYgKFtdLmtleXMpIHtcbiAgYXJyYXlJdGVyYXRvciA9IFtdLmtleXMoKTtcbiAgLy8gU2FmYXJpIDggaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gIGlmICghKCduZXh0JyBpbiBhcnJheUl0ZXJhdG9yKSkgQlVHR1lfU0FGQVJJX0lURVJBVE9SUyA9IHRydWU7XG4gIGVsc2Uge1xuICAgIFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKGdldFByb3RvdHlwZU9mKGFycmF5SXRlcmF0b3IpKTtcbiAgICBpZiAoUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlKSBJdGVyYXRvclByb3RvdHlwZSA9IFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxufVxuXG52YXIgTkVXX0lURVJBVE9SX1BST1RPVFlQRSA9ICFpc09iamVjdChJdGVyYXRvclByb3RvdHlwZSkgfHwgZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgdGVzdCA9IHt9O1xuICAvLyBGRjQ0LSBsZWdhY3kgaXRlcmF0b3JzIGNhc2VcbiAgcmV0dXJuIEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXS5jYWxsKHRlc3QpICE9PSB0ZXN0O1xufSk7XG5cbmlmIChORVdfSVRFUkFUT1JfUFJPVE9UWVBFKSBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuZWxzZSBpZiAoSVNfUFVSRSkgSXRlcmF0b3JQcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuXG4vLyBgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtJWl0ZXJhdG9ycHJvdG90eXBlJS1AQGl0ZXJhdG9yXG5pZiAoIWlzQ2FsbGFibGUoSXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdKSkge1xuICBkZWZpbmVCdWlsdEluKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEl0ZXJhdG9yUHJvdG90eXBlOiBJdGVyYXRvclByb3RvdHlwZSxcbiAgQlVHR1lfU0FGQVJJX0lURVJBVE9SUzogQlVHR1lfU0FGQVJJX0lURVJBVE9SU1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1pbnN0YW5jZScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZicpO1xudmFyIGRlZmluZUJ1aWx0SW5BY2Nlc3NvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4tYWNjZXNzb3InKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzLWNvcmUnKS5JdGVyYXRvclByb3RvdHlwZTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xuXG52YXIgQ09OU1RSVUNUT1IgPSAnY29uc3RydWN0b3InO1xudmFyIElURVJBVE9SID0gJ0l0ZXJhdG9yJztcbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBOYXRpdmVJdGVyYXRvciA9IGdsb2JhbFRoaXNbSVRFUkFUT1JdO1xuXG4vLyBGRjU2LSBoYXZlIG5vbi1zdGFuZGFyZCBnbG9iYWwgaGVscGVyIGBJdGVyYXRvcmBcbnZhciBGT1JDRUQgPSBJU19QVVJFXG4gIHx8ICFpc0NhbGxhYmxlKE5hdGl2ZUl0ZXJhdG9yKVxuICB8fCBOYXRpdmVJdGVyYXRvci5wcm90b3R5cGUgIT09IEl0ZXJhdG9yUHJvdG90eXBlXG4gIC8vIEZGNDQtIG5vbi1zdGFuZGFyZCBgSXRlcmF0b3JgIHBhc3NlcyBwcmV2aW91cyB0ZXN0c1xuICB8fCAhZmFpbHMoZnVuY3Rpb24gKCkgeyBOYXRpdmVJdGVyYXRvcih7fSk7IH0pO1xuXG52YXIgSXRlcmF0b3JDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uIEl0ZXJhdG9yKCkge1xuICBhbkluc3RhbmNlKHRoaXMsIEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgaWYgKGdldFByb3RvdHlwZU9mKHRoaXMpID09PSBJdGVyYXRvclByb3RvdHlwZSkgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fic3RyYWN0IGNsYXNzIEl0ZXJhdG9yIG5vdCBkaXJlY3RseSBjb25zdHJ1Y3RhYmxlJyk7XG59O1xuXG52YXIgZGVmaW5lSXRlcmF0b3JQcm90b3R5cGVBY2Nlc3NvciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIGlmIChERVNDUklQVE9SUykge1xuICAgIGRlZmluZUJ1aWx0SW5BY2Nlc3NvcihJdGVyYXRvclByb3RvdHlwZSwga2V5LCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gKHJlcGxhY2VtZW50KSB7XG4gICAgICAgIGFuT2JqZWN0KHRoaXMpO1xuICAgICAgICBpZiAodGhpcyA9PT0gSXRlcmF0b3JQcm90b3R5cGUpIHRocm93IG5ldyAkVHlwZUVycm9yKFwiWW91IGNhbid0IHJlZGVmaW5lIHRoaXMgcHJvcGVydHlcIik7XG4gICAgICAgIGlmIChoYXNPd24odGhpcywga2V5KSkgdGhpc1trZXldID0gcmVwbGFjZW1lbnQ7XG4gICAgICAgIGVsc2UgY3JlYXRlUHJvcGVydHkodGhpcywga2V5LCByZXBsYWNlbWVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSBJdGVyYXRvclByb3RvdHlwZVtrZXldID0gdmFsdWU7XG59O1xuXG5pZiAoIWhhc093bihJdGVyYXRvclByb3RvdHlwZSwgVE9fU1RSSU5HX1RBRykpIGRlZmluZUl0ZXJhdG9yUHJvdG90eXBlQWNjZXNzb3IoVE9fU1RSSU5HX1RBRywgSVRFUkFUT1IpO1xuXG5pZiAoRk9SQ0VEIHx8ICFoYXNPd24oSXRlcmF0b3JQcm90b3R5cGUsIENPTlNUUlVDVE9SKSB8fCBJdGVyYXRvclByb3RvdHlwZVtDT05TVFJVQ1RPUl0gPT09IE9iamVjdCkge1xuICBkZWZpbmVJdGVyYXRvclByb3RvdHlwZUFjY2Vzc29yKENPTlNUUlVDVE9SLCBJdGVyYXRvckNvbnN0cnVjdG9yKTtcbn1cblxuSXRlcmF0b3JDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBJdGVyYXRvclByb3RvdHlwZTtcblxuLy8gYEl0ZXJhdG9yYCBjb25zdHJ1Y3RvclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pdGVyYXRvclxuJCh7IGdsb2JhbDogdHJ1ZSwgY29uc3RydWN0b3I6IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgSXRlcmF0b3I6IEl0ZXJhdG9yQ29uc3RydWN0b3Jcbn0pO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGBHZXRJdGVyYXRvckRpcmVjdChvYmopYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9wcm9wb3NhbC1pdGVyYXRvci1oZWxwZXJzLyNzZWMtZ2V0aXRlcmF0b3JkaXJlY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4ge1xuICAgIGl0ZXJhdG9yOiBvYmosXG4gICAgbmV4dDogb2JqLm5leHQsXG4gICAgZG9uZTogZmFsc2VcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc3JjLCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIGRlZmluZUJ1aWx0SW4odGFyZ2V0LCBrZXksIHNyY1trZXldLCBvcHRpb25zKTtcbiAgcmV0dXJuIHRhcmdldDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gYENyZWF0ZUl0ZXJSZXN1bHRPYmplY3RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1jcmVhdGVpdGVycmVzdWx0b2JqZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgZG9uZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6IGRvbmUgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBraW5kLCB2YWx1ZSkge1xuICB2YXIgaW5uZXJSZXN1bHQsIGlubmVyRXJyb3I7XG4gIGFuT2JqZWN0KGl0ZXJhdG9yKTtcbiAgdHJ5IHtcbiAgICBpbm5lclJlc3VsdCA9IGdldE1ldGhvZChpdGVyYXRvciwgJ3JldHVybicpO1xuICAgIGlmICghaW5uZXJSZXN1bHQpIHtcbiAgICAgIGlmIChraW5kID09PSAndGhyb3cnKSB0aHJvdyB2YWx1ZTtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgaW5uZXJSZXN1bHQgPSBjYWxsKGlubmVyUmVzdWx0LCBpdGVyYXRvcik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaW5uZXJFcnJvciA9IHRydWU7XG4gICAgaW5uZXJSZXN1bHQgPSBlcnJvcjtcbiAgfVxuICBpZiAoa2luZCA9PT0gJ3Rocm93JykgdGhyb3cgdmFsdWU7XG4gIGlmIChpbm5lckVycm9yKSB0aHJvdyBpbm5lclJlc3VsdDtcbiAgYW5PYmplY3QoaW5uZXJSZXN1bHQpO1xuICByZXR1cm4gdmFsdWU7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZScpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBkZWZpbmVCdWlsdElucyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW5zJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzLWNvcmUnKS5JdGVyYXRvclByb3RvdHlwZTtcbnZhciBjcmVhdGVJdGVyUmVzdWx0T2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1pdGVyLXJlc3VsdC1vYmplY3QnKTtcbnZhciBpdGVyYXRvckNsb3NlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlJyk7XG5cbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xudmFyIElURVJBVE9SX0hFTFBFUiA9ICdJdGVyYXRvckhlbHBlcic7XG52YXIgV1JBUF9GT1JfVkFMSURfSVRFUkFUT1IgPSAnV3JhcEZvclZhbGlkSXRlcmF0b3InO1xudmFyIHNldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLnNldDtcblxudmFyIGNyZWF0ZUl0ZXJhdG9yUHJveHlQcm90b3R5cGUgPSBmdW5jdGlvbiAoSVNfSVRFUkFUT1IpIHtcbiAgdmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldHRlckZvcihJU19JVEVSQVRPUiA/IFdSQVBfRk9SX1ZBTElEX0lURVJBVE9SIDogSVRFUkFUT1JfSEVMUEVSKTtcblxuICByZXR1cm4gZGVmaW5lQnVpbHRJbnMoY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKSwge1xuICAgIG5leHQ6IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpO1xuICAgICAgLy8gZm9yIHNpbXBsaWZpY2F0aW9uOlxuICAgICAgLy8gICBmb3IgYCVXcmFwRm9yVmFsaWRJdGVyYXRvclByb3RvdHlwZSUubmV4dGAgb3Igd2l0aCBgc3RhdGUucmV0dXJuSGFuZGxlclJlc3VsdGAgb3VyIGBuZXh0SGFuZGxlcmAgcmV0dXJucyBgSXRlclJlc3VsdE9iamVjdGBcbiAgICAgIC8vICAgZm9yIGAlSXRlcmF0b3JIZWxwZXJQcm90b3R5cGUlLm5leHRgIC0ganVzdCBhIHZhbHVlXG4gICAgICBpZiAoSVNfSVRFUkFUT1IpIHJldHVybiBzdGF0ZS5uZXh0SGFuZGxlcigpO1xuICAgICAgaWYgKHN0YXRlLmRvbmUpIHJldHVybiBjcmVhdGVJdGVyUmVzdWx0T2JqZWN0KHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gc3RhdGUubmV4dEhhbmRsZXIoKTtcbiAgICAgICAgcmV0dXJuIHN0YXRlLnJldHVybkhhbmRsZXJSZXN1bHQgPyByZXN1bHQgOiBjcmVhdGVJdGVyUmVzdWx0T2JqZWN0KHJlc3VsdCwgc3RhdGUuZG9uZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBzdGF0ZS5kb25lID0gdHJ1ZTtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgfSxcbiAgICAncmV0dXJuJzogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKTtcbiAgICAgIHZhciBpdGVyYXRvciA9IHN0YXRlLml0ZXJhdG9yO1xuICAgICAgc3RhdGUuZG9uZSA9IHRydWU7XG4gICAgICBpZiAoSVNfSVRFUkFUT1IpIHtcbiAgICAgICAgdmFyIHJldHVybk1ldGhvZCA9IGdldE1ldGhvZChpdGVyYXRvciwgJ3JldHVybicpO1xuICAgICAgICByZXR1cm4gcmV0dXJuTWV0aG9kID8gY2FsbChyZXR1cm5NZXRob2QsIGl0ZXJhdG9yKSA6IGNyZWF0ZUl0ZXJSZXN1bHRPYmplY3QodW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGlmIChzdGF0ZS5pbm5lcikgdHJ5IHtcbiAgICAgICAgaXRlcmF0b3JDbG9zZShzdGF0ZS5pbm5lci5pdGVyYXRvciwgJ25vcm1hbCcpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsICd0aHJvdycsIGVycm9yKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVyYXRvcikgaXRlcmF0b3JDbG9zZShpdGVyYXRvciwgJ25vcm1hbCcpO1xuICAgICAgcmV0dXJuIGNyZWF0ZUl0ZXJSZXN1bHRPYmplY3QodW5kZWZpbmVkLCB0cnVlKTtcbiAgICB9XG4gIH0pO1xufTtcblxudmFyIFdyYXBGb3JWYWxpZEl0ZXJhdG9yUHJvdG90eXBlID0gY3JlYXRlSXRlcmF0b3JQcm94eVByb3RvdHlwZSh0cnVlKTtcbnZhciBJdGVyYXRvckhlbHBlclByb3RvdHlwZSA9IGNyZWF0ZUl0ZXJhdG9yUHJveHlQcm90b3R5cGUoZmFsc2UpO1xuXG5jcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoSXRlcmF0b3JIZWxwZXJQcm90b3R5cGUsIFRPX1NUUklOR19UQUcsICdJdGVyYXRvciBIZWxwZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmV4dEhhbmRsZXIsIElTX0lURVJBVE9SLCBSRVRVUk5fSEFORExFUl9SRVNVTFQpIHtcbiAgdmFyIEl0ZXJhdG9yUHJveHkgPSBmdW5jdGlvbiBJdGVyYXRvcihyZWNvcmQsIHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlKSB7XG4gICAgICBzdGF0ZS5pdGVyYXRvciA9IHJlY29yZC5pdGVyYXRvcjtcbiAgICAgIHN0YXRlLm5leHQgPSByZWNvcmQubmV4dDtcbiAgICB9IGVsc2Ugc3RhdGUgPSByZWNvcmQ7XG4gICAgc3RhdGUudHlwZSA9IElTX0lURVJBVE9SID8gV1JBUF9GT1JfVkFMSURfSVRFUkFUT1IgOiBJVEVSQVRPUl9IRUxQRVI7XG4gICAgc3RhdGUucmV0dXJuSGFuZGxlclJlc3VsdCA9ICEhUkVUVVJOX0hBTkRMRVJfUkVTVUxUO1xuICAgIHN0YXRlLm5leHRIYW5kbGVyID0gbmV4dEhhbmRsZXI7XG4gICAgc3RhdGUuY291bnRlciA9IDA7XG4gICAgc3RhdGUuZG9uZSA9IGZhbHNlO1xuICAgIHNldEludGVybmFsU3RhdGUodGhpcywgc3RhdGUpO1xuICB9O1xuXG4gIEl0ZXJhdG9yUHJveHkucHJvdG90eXBlID0gSVNfSVRFUkFUT1IgPyBXcmFwRm9yVmFsaWRJdGVyYXRvclByb3RvdHlwZSA6IEl0ZXJhdG9ySGVscGVyUHJvdG90eXBlO1xuXG4gIHJldHVybiBJdGVyYXRvclByb3h5O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgaXRlcmF0b3JDbG9zZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1jbG9zZScpO1xuXG4vLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBFTlRSSUVTKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEVOVFJJRVMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCAndGhyb3cnLCBlcnJvcik7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBnZXRJdGVyYXRvckRpcmVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItZGlyZWN0Jyk7XG52YXIgY3JlYXRlSXRlcmF0b3JQcm94eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1jcmVhdGUtcHJveHknKTtcbnZhciBjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NhbGwtd2l0aC1zYWZlLWl0ZXJhdGlvbi1jbG9zaW5nJyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG5cbnZhciBJdGVyYXRvclByb3h5ID0gY3JlYXRlSXRlcmF0b3JQcm94eShmdW5jdGlvbiAoKSB7XG4gIHZhciBpdGVyYXRvciA9IHRoaXMuaXRlcmF0b3I7XG4gIHZhciBwcmVkaWNhdGUgPSB0aGlzLnByZWRpY2F0ZTtcbiAgdmFyIG5leHQgPSB0aGlzLm5leHQ7XG4gIHZhciByZXN1bHQsIGRvbmUsIHZhbHVlO1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIHJlc3VsdCA9IGFuT2JqZWN0KGNhbGwobmV4dCwgaXRlcmF0b3IpKTtcbiAgICBkb25lID0gdGhpcy5kb25lID0gISFyZXN1bHQuZG9uZTtcbiAgICBpZiAoZG9uZSkgcmV0dXJuO1xuICAgIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgIGlmIChjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nKGl0ZXJhdG9yLCBwcmVkaWNhdGUsIFt2YWx1ZSwgdGhpcy5jb3VudGVyKytdLCB0cnVlKSkgcmV0dXJuIHZhbHVlO1xuICB9XG59KTtcblxuLy8gYEl0ZXJhdG9yLnByb3RvdHlwZS5maWx0ZXJgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pdGVyYXRvci5wcm90b3R5cGUuZmlsdGVyXG4kKHsgdGFyZ2V0OiAnSXRlcmF0b3InLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiBJU19QVVJFIH0sIHtcbiAgZmlsdGVyOiBmdW5jdGlvbiBmaWx0ZXIocHJlZGljYXRlKSB7XG4gICAgYW5PYmplY3QodGhpcyk7XG4gICAgYUNhbGxhYmxlKHByZWRpY2F0ZSk7XG4gICAgcmV0dXJuIG5ldyBJdGVyYXRvclByb3h5KGdldEl0ZXJhdG9yRGlyZWN0KHRoaXMpLCB7XG4gICAgICBwcmVkaWNhdGU6IHByZWRpY2F0ZVxuICAgIH0pO1xuICB9XG59KTtcbiIsICJpbXBvcnQge2NyZWF0ZUFwcH0gZnJvbSAndnVlJztcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAudnVlJztcblxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmQocm9vdCk7XG5jcmVhdGVBcHAoQXBwKS5tb3VudChyb290KTtcbiIsICI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtyZWZ9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge3NldExvY2FsVmFyaWFudCwgcmVkaXJlY3QsIFZhbGlkVmFyaWFudCwgc2V0T3B0T3V0fSBmcm9tICdleHQuZ2FkZ2V0LlZhcmlhbnRBbGx5JztcbmltcG9ydCBWQVZhcmlhbnRQcm9tcHQgZnJvbSAnLi9jb21wb25lbnRzL1ZBVmFyaWFudFByb21wdC52dWUnO1xuaW1wb3J0IFZBVmFyaWFudFByb21wdE1vYmlsZSBmcm9tICcuL2NvbXBvbmVudHMvVkFWYXJpYW50UHJvbXB0TW9iaWxlLnZ1ZSc7XG5pbXBvcnQge2dldE1vdW50UG9pbnQsIGlzTW9iaWxlRGV2aWNlfSBmcm9tICcuL21vZHVsZXMvdXRpbHMnO1xuXG5jb25zdCBpc09wZW4gPSByZWYodHJ1ZSk7XG5jb25zdCBpc0Rpc2FibGVkID0gcmVmKGZhbHNlKTtcbmNvbnN0IGlzTW9iaWxlID0gaXNNb2JpbGVEZXZpY2UoKTtcbmNvbnN0IGRlc2t0b3BNb3VudFBvaW50ID0gZ2V0TW91bnRQb2ludCgpO1xuXG5mdW5jdGlvbiBzZXRWYXJpYW50KHZhcmlhbnQ6IFZhbGlkVmFyaWFudCkge1xuXHRzZXRMb2NhbFZhcmlhbnQodmFyaWFudCk7XG5cdHJlZGlyZWN0KHZhcmlhbnQsIHtmb3JjZWQ6IHRydWV9KTtcbn1cblxuLy8gQnJvd3NlciBzdXBwb3J0OiBpT1MgU2FmYXJpIDwgMTVcbi8vIFdvcmsgYXJvdW5kIFNhZmFyaSBmaXJpbmcgc2Nyb2xsIGV2ZW50IGF0IHVuZXhwZWN0ZWQgY29uZGl0aW9ucyAoZS5nLiBwb3BwaW5nIHVwIFNlbGVjdClcbmFkZEV2ZW50TGlzdGVuZXIoaXNNb2JpbGUgPyAndG91Y2htb3ZlJyA6ICdzY3JvbGwnLCAoKSA9PiB7XG5cdGlmICghaXNEaXNhYmxlZC52YWx1ZSkge1xuXHRcdGlzT3Blbi52YWx1ZSA9IGZhbHNlO1xuXHR9XG59KTtcblxuZnVuY3Rpb24gb25PcHRPdXQoKSB7XG5cdHNldE9wdE91dCgpO1xufVxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cblx0PFRlbGVwb3J0IDp0bz1cImRlc2t0b3BNb3VudFBvaW50XCI+XG5cdFx0PFZBVmFyaWFudFByb21wdFxuXHRcdFx0di1pZj1cIiFpc01vYmlsZVwiXG5cdFx0XHR2LW1vZGVsOm9wZW49XCJpc09wZW5cIlxuXHRcdFx0di1tb2RlbDpkaXNhYmxlZD1cImlzRGlzYWJsZWRcIlxuXHRcdFx0OmF1dG8tY2xvc2U9XCJmYWxzZVwiXG5cdFx0XHRAb3B0b3V0PVwib25PcHRPdXRcIlxuXHRcdFx0QHNlbGVjdD1cInNldFZhcmlhbnRcIlxuXHRcdC8+XG5cdDwvVGVsZXBvcnQ+XG5cblx0PCEtLSBUZWxlcG9ydCB0byBib2R5IGJlY2F1c2UgdGhleSBhcmUgYWx3YXlzIGZsb2F0ZWQgYXQgYm90dG9tIC0tPlxuXHQ8VGVsZXBvcnQgdG89XCJib2R5XCI+XG5cdFx0PFZBVmFyaWFudFByb21wdE1vYmlsZVxuXHRcdFx0di1pZj1cImlzTW9iaWxlXCJcblx0XHRcdHYtbW9kZWw6b3Blbj1cImlzT3BlblwiXG5cdFx0XHR2LW1vZGVsOmRpc2FibGVkPVwiaXNEaXNhYmxlZFwiXG5cdFx0XHRAb3B0b3V0PVwib25PcHRPdXRcIlxuXHRcdFx0QHNlbGVjdD1cInNldFZhcmlhbnRcIlxuXHRcdC8+XG5cdDwvVGVsZXBvcnQ+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgbGFuZz1cImxlc3NcIj5cbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4vc3R5bGVzL3Rva2Vucy5sZXNzJztcblxuLnZhLXZhcmlhbnQtcHJvbXB0IHtcblx0Ly8gVmVjdG9yIDIwMjIgc3BlY2lmaWMgYWRqdXN0bWVudHNcblx0LnNraW4tdmVjdG9yLTIwMjIgJiB7XG5cdFx0Ly8gQ2FsY3VsYXRlZCBmcm9tIFZlY3RvciAyMDIyIHNvdXJjZSBjb2RlXG5cdFx0QHZlY3Rvci0yMDIyLWhlYWRlci1oZWlnaHQ6IDUwcHggKyAyICogOHB4O1xuXHRcdG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIEBzcGFjaW5nLXZlcnRpY2FsLWRpYWxvZyAtIEB2ZWN0b3ItMjAyMi1oZWFkZXItaGVpZ2h0KTtcblxuXHRcdC52ZWN0b3ItdG9jLWF2YWlsYWJsZS52ZWN0b3ItZmVhdHVyZS10b2MtcGlubmVkLWNsaWVudHByZWYtMSAmLFxuXHRcdC52ZWN0b3ItZmVhdHVyZS1tYWluLW1lbnUtcGlubmVkLWVuYWJsZWQgJiB7XG5cdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcblx0XHRcdFx0bGVmdDogdW5zZXQ7XG5cblx0XHRcdFx0Ly8gQ2FsY3VsYXRlZCBmcm9tIFZlY3RvciAyMDIyIHNvdXJjZSBjb2RlXG5cdFx0XHRcdC8vIEluIHRoaXMgd2lkdGggdGhpcyBwcm9tcHQgd2lsbCBub3Qgb2JzY3VyZSBhcnRpY2xlIGNvbnRlbnRcblx0XHRcdFx0QHZlY3Rvci0yMDIyLWxlZnQtcGFkZGluZzogMi43NWVtO1xuXHRcdFx0XHRtYXJnaW4tbGVmdDogLShAdmVjdG9yLTIwMjItbGVmdC1wYWRkaW5nIC8gMyAqIDIpO1xuXHRcdFx0XHRtYXgtd2lkdGg6IGNhbGMoMTIuMjVlbSArIDM2cHgpO1xuXHRcdFx0XHRwYWRkaW5nOiBAc3BhY2luZy0xMDA7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG5cdFx0XHRAdmVjdG9yLTIwMjItbGVmdC1wYWRkaW5nOiAzLjI1ZW07XG5cdFx0XHRsZWZ0OiB1bnNldDtcblx0XHRcdG1hcmdpbi1sZWZ0OiAtKEB2ZWN0b3ItMjAyMi1sZWZ0LXBhZGRpbmcgLyAzICogMik7XG5cdFx0XHRtYXgtd2lkdGg6IGNhbGMoMTUuNzVlbSArIDM2cHgpO1xuXHRcdH1cblx0fVxufVxuPC9zdHlsZT5cbi4vbW9kdWxlcy91dGlsc1xuIiwgIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge3JlZiwgd2F0Y2h9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge3R5cGUgVmFsaWRWYXJpYW50fSBmcm9tICdleHQuZ2FkZ2V0LlZhcmlhbnRBbGx5JztcbmltcG9ydCBWQUJ1dHRvbiBmcm9tICcuL1ZBQnV0dG9uLnZ1ZSc7XG5pbXBvcnQgVkFGYWRlVHJhbnNpdGlvbiBmcm9tICcuL1ZBRmFkZVRyYW5zaXRpb24udnVlJztcbmltcG9ydCB1c2VJMThuLCB7aTE4blZhcmlhbnR9IGZyb20gJy4uL2NvbXBvc2FibGVzL3VzZUkxOG4nO1xuaW1wb3J0IHVzZVVuaXF1ZUlkIGZyb20gJy4uL2NvbXBvc2FibGVzL3VzZVVuaXF1ZUlkJztcbmltcG9ydCB1c2VTaHVmZmxlZFZhcmlhbnQgZnJvbSAnLi4vY29tcG9zYWJsZXMvdXNlU2h1ZmZsZWRWYXJpYW50JztcbmltcG9ydCB7VkFMSURfVkFSSUFOVFMsIGluZmVycmVkVmFyaWFudH0gZnJvbSAnLi4vbW9kdWxlcy91dGlscyc7XG5pbXBvcnQgbWVzc2FnZXMgZnJvbSAnLi4vbWVzc2FnZXMuanNvbic7XG5pbXBvcnQgdXNlTW9kZWxXcmFwcGVyIGZyb20gJy4uL2NvbXBvc2FibGVzL3VzZU1vZGVsV3JhcHBlcic7XG5pbXBvcnQgdXNlRGVmYXVsdCBmcm9tICcuLi9jb21wb3NhYmxlcy91c2VEZWZhdWx0JztcblxuY29uc3QgcHJvcHMgPSB3aXRoRGVmYXVsdHMoXG5cdGRlZmluZVByb3BzPHtcblx0XHRvcGVuOiBib29sZWFuO1xuXHRcdGRpc2FibGVkPzogYm9vbGVhbjtcblx0XHRhdXRvQ2xvc2U/OiBib29sZWFuO1xuXHR9PigpLFxuXHR7XG5cdFx0ZGlzYWJsZWQ6IGZhbHNlLFxuXHRcdGF1dG9DbG9zZTogZmFsc2UsXG5cdH1cbik7XG5jb25zdCBlbWl0ID0gZGVmaW5lRW1pdHM8e1xuXHQoZTogJ3VwZGF0ZTpvcGVuJywgdmFsdWU6IGJvb2xlYW4pOiB2b2lkO1xuXHQoZTogJ3VwZGF0ZTpkaXNhYmxlZCcsIHZhbHVlOiBib29sZWFuKTogdm9pZDtcblx0KGU6ICdzZWxlY3QnLCB2YXJpYW50OiBWYWxpZFZhcmlhbnQpOiB2b2lkO1xuXHQoZTogJ29wdG91dCcpOiB2b2lkO1xufT4oKTtcblxuY29uc3QgcHJvbXB0ID0gcmVmPEhUTUxFbGVtZW50IHwgbnVsbD4obnVsbCk7XG5jb25zdCB0aXRsZUlkID0gdXNlVW5pcXVlSWQoKTtcbmNvbnN0IGRlc2NJZCA9IHVzZVVuaXF1ZUlkKCk7XG5jb25zdCBpc09wZW4gPSB1c2VNb2RlbFdyYXBwZXIocHJvcHMsIGVtaXQsICdvcGVuJyk7XG5jb25zdCBpc0Rpc2FibGVkID0gdXNlTW9kZWxXcmFwcGVyKHByb3BzLCBlbWl0LCAnZGlzYWJsZWQnKTtcbmNvbnN0IGlzVmFyaWFudE5hcnJvd2VkID0gdXNlRGVmYXVsdCgoKSA9PiBpbmZlcnJlZFZhcmlhbnQudmFsdWUgIT09IG51bGwpO1xuY29uc3Qgc2h1ZmZsZWRWYXJpYW50ID0gdXNlU2h1ZmZsZWRWYXJpYW50KGlzVmFyaWFudE5hcnJvd2VkKTtcblxuZnVuY3Rpb24gb3B0T3V0QW5kQ2xvc2UoKSB7XG5cdGVtaXQoJ29wdG91dCcpO1xuXHRpc09wZW4udmFsdWUgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0KHZhcmlhbnQ6IFZhbGlkVmFyaWFudCkge1xuXHRpc0Rpc2FibGVkLnZhbHVlID0gdHJ1ZTtcblx0ZW1pdCgnc2VsZWN0JywgdmFyaWFudCk7XG59XG5cbndhdGNoKHByb21wdCwgKCkgPT4ge1xuXHRjb25zdCBlbGVtZW50ID0gcHJvbXB0LnZhbHVlO1xuXHRpZiAoZWxlbWVudCAhPT0gbnVsbCkge1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIChldikgPT4ge1xuXHRcdFx0Ly8gRG8gbm90IGRpc21pc3MgaWYgYW55IGJ1dHRvbiBpcyBwcmVzc2VkIG9yIHRoZSBwcm9tcHQgaXMgZGlzYWJsZWRcblx0XHRcdGlmIChldi5idXR0b25zID09PSAwICYmIHByb3BzLmF1dG9DbG9zZSAmJiAhcHJvcHMuZGlzYWJsZWQpIHtcblx0XHRcdFx0aXNPcGVuLnZhbHVlID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn0pO1xuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cblx0PFRyYW5zaXRpb24gbmFtZT1cInZhLXZhcmlhbnQtcHJvbXB0XCIgYXBwZWFyPlxuXHRcdDxkaXZcblx0XHRcdHYtaWY9XCJvcGVuXCJcblx0XHRcdHJlZj1cInByb21wdFwiXG5cdFx0XHQ6bGFuZz1cImB6aC0ke2kxOG5WYXJpYW50fWBcIlxuXHRcdFx0Y2xhc3M9XCJ2YS12YXJpYW50LXByb21wdFwiXG5cdFx0XHRyb2xlPVwiZGlhbG9nXCJcblx0XHRcdGFyaWEtbW9kYWw9XCJmYWxzZVwiXG5cdFx0XHQ6YXJpYS1sYWJlbGxlZGJ5PVwidGl0bGVJZFwiXG5cdFx0XHQ6YXJpYS1kZXNjcmliZWRieT1cImRlc2NJZFwiXG5cdFx0PlxuXHRcdFx0PFZBQnV0dG9uXG5cdFx0XHRcdGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHRfX2Nsb3NlXCJcblx0XHRcdFx0d2VpZ2h0PVwicXVpZXRcIlxuXHRcdFx0XHRpY29uPVwiY2xvc2VcIlxuXHRcdFx0XHQ6dGl0bGU9XCJ1c2VJMThuKCdjbG9zZScpXCJcblx0XHRcdFx0OmFyaWEtbGFiZWw9XCJ1c2VJMThuKCdjbG9zZScpXCJcblx0XHRcdFx0OmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHRAY2xpY2s9XCJvcHRPdXRBbmRDbG9zZVwiXG5cdFx0XHQvPlxuXHRcdFx0PGgyIDppZD1cInRpdGxlSWRcIiBjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0X190aXRsZSB2YS10aXRsZVwiPlxuXHRcdFx0XHR7eyB1c2VJMThuKGlzVmFyaWFudE5hcnJvd2VkID8gJ3ZwLmhlYWRlci5hbHQnIDogJ3ZwLmhlYWRlcicpIH19PGJyIC8+XG5cdFx0XHRcdDxWQUZhZGVUcmFuc2l0aW9uPlxuXHRcdFx0XHRcdDxzcGFuXG5cdFx0XHRcdFx0XHR2LWlmPVwiIWlzVmFyaWFudE5hcnJvd2VkXCJcblx0XHRcdFx0XHRcdDprZXk9XCJzaHVmZmxlZFZhcmlhbnRcIlxuXHRcdFx0XHRcdFx0Omxhbmc9XCJgemgtJHtzaHVmZmxlZFZhcmlhbnR9YFwiXG5cdFx0XHRcdFx0XHRjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0X190aXRsZV9fdmFyaWFudFwiXG5cdFx0XHRcdFx0XHQ+e3sgbWVzc2FnZXMudmFyaWFudHNbc2h1ZmZsZWRWYXJpYW50XSB9fTwvc3BhblxuXHRcdFx0XHRcdD5cblx0XHRcdFx0PC9WQUZhZGVUcmFuc2l0aW9uPlxuXHRcdFx0PC9oMj5cblx0XHRcdDxwIDppZD1cImRlc2NJZFwiIGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHRfX2Rlc2MgdmEtcGFyYVwiPlxuXHRcdFx0XHR7eyB1c2VJMThuKGlzVmFyaWFudE5hcnJvd2VkID8gJ3ZwLm1haW4uYWx0JyA6ICd2cC5tYWluJykgfX1cblx0XHRcdDwvcD5cblx0XHRcdDxkaXYgY2xhc3M9XCJ2YS12YXJpYW50LXByb21wdF9fb3B0aW9uc1wiPlxuXHRcdFx0XHQ8IS0tIGluZmVycmVkVmFyaWFudCBpcyBub24tbnVsbCwgZ3VhcmRlZCBieSBpc1ZhcmlhbnROYXJyb3dlZCAtLT5cblx0XHRcdFx0PFZBQnV0dG9uXG5cdFx0XHRcdFx0di1mb3I9XCJ2YXJpYW50IGluIGlzVmFyaWFudE5hcnJvd2VkICYmIGluZmVycmVkVmFyaWFudCAhPT0gbnVsbFxuXHRcdFx0XHRcdFx0PyBbaW5mZXJyZWRWYXJpYW50XVxuXHRcdFx0XHRcdFx0OiBWQUxJRF9WQVJJQU5UU1wiXG5cdFx0XHRcdFx0OmtleT1cInZhcmlhbnRcIlxuXHRcdFx0XHRcdGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHRfX29wdGlvbnNfX2J1dHRvblwiXG5cdFx0XHRcdFx0OmNsYXNzPVwieyd2YS12YXJpYW50LXByb21wdF9fb3B0aW9uc19fYnV0dG9uLS1wcmltYXJ5JzogaXNWYXJpYW50TmFycm93ZWR9XCJcblx0XHRcdFx0XHRpbmRpY2F0b3I9XCJhcnJvd05leHRcIlxuXHRcdFx0XHRcdHdlaWdodD1cInF1aWV0XCJcblx0XHRcdFx0XHRhY3Rpb249XCJwcm9ncmVzc2l2ZVwiXG5cdFx0XHRcdFx0Omxhbmc9XCJ2YXJpYW50XCJcblx0XHRcdFx0XHQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG5cdFx0XHRcdFx0QGNsaWNrPVwic2VsZWN0KHZhcmlhbnQpXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdHt7IG1lc3NhZ2VzLnZhcmlhbnRzW3ZhcmlhbnRdIH19XG5cdFx0XHRcdDwvVkFCdXR0b24+XG5cdFx0XHRcdDxWQUJ1dHRvblxuXHRcdFx0XHRcdHYtaWY9XCJpc1ZhcmlhbnROYXJyb3dlZFwiXG5cdFx0XHRcdFx0Y2xhc3M9XCJ2YS12YXJpYW50LXByb21wdF9fb3B0aW9uc19fYnV0dG9uXCJcblx0XHRcdFx0XHRpbmRpY2F0b3I9XCJhcnJvd05leHRcIlxuXHRcdFx0XHRcdHdlaWdodD1cInF1aWV0XCJcblx0XHRcdFx0XHRhY3Rpb249XCJwcm9ncmVzc2l2ZVwiXG5cdFx0XHRcdFx0OmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHRcdEBjbGljaz1cImlzVmFyaWFudE5hcnJvd2VkID0gZmFsc2VcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e3sgdXNlSTE4bigndnAuYnV0dG9uLm90aGVyJykgfX1cblx0XHRcdFx0PC9WQUJ1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGZvb3RlciBjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0X19mb290ZXJcIj5cblx0XHRcdFx0PHAgY2xhc3M9XCJ2YS1wYXJhIHZhLXBhcmEtLXN1YnRsZVwiPlxuXHRcdFx0XHRcdHt7IHVzZUkxOG4oJ3ZwLm1haW4uZXh0JykgfX1cblx0XHRcdFx0PC9wPlxuXHRcdFx0PC9mb290ZXI+XG5cdFx0PC9kaXY+XG5cdDwvVHJhbnNpdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cImxlc3NcIj5cbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uL3N0eWxlcy9taXhpbnMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi9zdHlsZXMvdG9rZW5zLmxlc3MnO1xuXG4udmEtdGl0bGUge1xuXHRib3JkZXI6IDA7IC8vIFJlc2V0XG5cdHBhZGRpbmc6IDA7IC8vIFJlc2V0XG5cdG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG5cblx0Zm9udC1zaXplOiBAZm9udC1zaXplLXh4LWxhcmdlO1xuXHRmb250LXdlaWdodDogQGZvbnQtd2VpZ2h0LWJvbGQ7XG5cdG1hcmdpbjogQHNwYWNpbmctNTAgQHNwYWNpbmctMDtcblx0Y29sb3I6IEBjb2xvci1iYXNlO1xufVxuXG4udmEtcGFyYSB7XG5cdG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG5cdG1hcmdpbi10b3A6IEBzcGFjaW5nLTUwO1xuXHRtYXJnaW4tYm90dG9tOiBAc3BhY2luZy01MDtcblx0Y29sb3I6IEBjb2xvci1iYXNlO1xuXG5cdCYtLXN1YnRsZSB7XG5cdFx0Y29sb3I6IEBjb2xvci1zdWJ0bGU7XG5cdFx0Zm9udC1zaXplOiBAZm9udC1zaXplLXgtc21hbGw7XG5cdFx0bWFyZ2luLWJvdHRvbTogQHNwYWNpbmctMzU7XG5cdH1cbn1cblxuLnZhLXZhcmlhbnQtcHJvbXB0IHtcblx0Ym94LXNpemluZzogQGJveC1zaXppbmctYmFzZTtcblx0ei1pbmRleDogQHotaW5kZXgtb3ZlcmxheTtcblx0cGFkZGluZzogQHNwYWNpbmctMTAwIEBzcGFjaW5nLTE1MDtcblx0cG9zaXRpb246IGZpeGVkO1xuXHRsZWZ0OiBAc3BhY2luZy1ob3Jpem9udGFsLWRpYWxvZztcblx0Ym90dG9tOiBAc3BhY2luZy12ZXJ0aWNhbC1kaWFsb2c7XG5cdHdpZHRoOiBjYWxjKDEwMCUgLSBAc3BhY2luZy1ob3Jpem9udGFsLWRpYWxvZyAqIDIpO1xuXHRtYXgtd2lkdGg6IDE4ZW07XG5cdG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyZW0pO1xuXG5cdG92ZXJmbG93OiBhdXRvO1xuXHRvdmVyc2Nyb2xsLWJlaGF2aW9yOiBub25lO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBAYmFja2dyb3VuZC1jb2xvci1iYXNlO1xuXHRib3JkZXI6IEBib3JkZXItYmFzZTtcblx0Ym9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXMtYmFzZTtcblx0Ym94LXNoYWRvdzogQGJveC1zaGFkb3ctZHJvcC1tZWRpdW07XG5cdGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHktc3lzdGVtLXNhbnM7XG5cdGZvbnQtc2l6ZTogMXJlbTsgLy8gUmVzZXRcblx0bGluZS1oZWlnaHQ6IG5vcm1hbDsgLy8gUmVzZXRcblxuXHQmX19jbG9zZSB7XG5cdFx0cGFkZGluZzogQHNwYWNpbmctc2hvcnRoYW5kLWJ1dHRvbi1pY29uLW9ubHk7XG5cdFx0ZmxvYXQ6IHJpZ2h0O1xuXHRcdG1hcmdpbi10b3A6IEBzcGFjaW5nLTUwO1xuXHRcdG1hcmdpbi1yaWdodDogLShAc3BhY2luZy1ob3Jpem9udGFsLWJ1dHRvbi1pY29uLW9ubHkgKyAxcHgpO1xuXHR9XG5cblx0Jl9fdGl0bGUge1xuXHRcdCZfX3ZhcmlhbnQge1xuXHRcdFx0Y29sb3I6IEBjb2xvci1wcm9ncmVzc2l2ZTtcblx0XHR9XG5cdH1cblxuXHQmX19vcHRpb25zIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRtYXJnaW46IEBzcGFjaW5nLTc1IEBzcGFjaW5nLTA7XG5cblx0XHRib3JkZXI6IDFweCBzb2xpZCBAYm9yZGVyLWNvbG9yLWJhc2U7XG5cdFx0Ym9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXMtYmFzZTtcblxuXHRcdCZfX2J1dHRvbiB7XG5cdFx0XHRmb250LXNpemU6IEBmb250LXNpemUtc21hbGw7XG5cdFx0XHRjb2xvcjogQGNvbG9yLWJhc2U7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBAYmFja2dyb3VuZC1jb2xvci1pbnRlcmFjdGl2ZS1zdWJ0bGU7XG5cdFx0XHRib3JkZXItcmFkaXVzOiAwO1xuXG5cdFx0XHQmLS1wcmltYXJ5IHtcblx0XHRcdFx0Y29sb3I6IEBjb2xvci1wcm9ncmVzc2l2ZTtcblx0XHRcdH1cblxuXHRcdFx0Jjpob3Zlcixcblx0XHRcdCY6YWN0aXZlIHtcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiBAYm9yZGVyLWNvbG9yLXRyYW5zcGFyZW50O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4vKiBQcm9tcHQgdHJhbnNpdGlvbiBlZmZlY3QgKi9cbi52YS12YXJpYW50LXByb21wdC1lbnRlci1hY3RpdmUsXG4udmEtdmFyaWFudC1wcm9tcHQtbGVhdmUtYWN0aXZlIHtcblx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogQHRyYW5zaXRpb24tcHJvcGVydHktZmFkZTtcblx0dHJhbnNpdGlvbi1kdXJhdGlvbjogQHRyYW5zaXRpb24tZHVyYXRpb24tbWVkaXVtO1xuXHR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogQHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uLXN5c3RlbTtcbn1cblxuLnZhLXZhcmlhbnQtcHJvbXB0LWVudGVyLWZyb20sXG4udmEtdmFyaWFudC1wcm9tcHQtbGVhdmUtdG8ge1xuXHRvcGFjaXR5OiAwO1xufVxuPC9zdHlsZT5cbiIsICJpbXBvcnQgeyBjcmVhdGVDb21tZW50Vk5vZGUgYXMgX2NyZWF0ZUNvbW1lbnRWTm9kZSwgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jayB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfaG9pc3RlZF8xID0gW1wid2lkdGhcIiwgXCJoZWlnaHRcIl1cbmNvbnN0IF9ob2lzdGVkXzIgPSB7IGtleTogMCB9XG5jb25zdCBfaG9pc3RlZF8zID0geyBrZXk6IDEgfVxuY29uc3QgX2hvaXN0ZWRfNCA9IHsga2V5OiAyIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJzdmdcIiwge1xuICAgIGNsYXNzOiBcInZhLWljb24tYnV0dG9uX19pY29uXCIsXG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICBcInhtbG5zOnhsaW5rXCI6IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLFxuICAgIHdpZHRoOiAkcHJvcHMuc2l6ZSxcbiAgICBoZWlnaHQ6ICRwcm9wcy5zaXplLFxuICAgIHZpZXdCb3g6IFwiMCAwIDIwIDIwXCIsXG4gICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICB9LCBbXG4gICAgKCRwcm9wcy5pY29uID09PSAnbGFuZycpXG4gICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJnXCIsIF9ob2lzdGVkXzIsIFtcbiAgICAgICAgICBfY3JlYXRlQ29tbWVudFZOb2RlKFwiIGVzbGludC1kaXNhYmxlIFwiKSxcbiAgICAgICAgICBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9IF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJwYXRoXCIsIHsgZDogXCJNMjAgMThoLTEuNDRhLjYxLjYxIDAgMDEtLjQtLjEyLjgxLjgxIDAgMDEtLjIzLS4zMUwxNyAxNWgtNWwtMSAyLjU0YS43Ny43NyAwIDAxLS4yMi4zLjU5LjU5IDAgMDEtLjQuMTRIOWw0LjU1LTExLjQ3aDEuODl6bS0zLjUzLTQuMzFMMTQuODkgOS41YTExLjYyIDExLjYyIDAgMDEtLjM5LTEuMjRxLS4wOS4zNy0uMTkuNjlsLS4xOS41Ni0xLjU4IDQuMTl6bS02LjMtMS41OGExMy40MyAxMy40MyAwIDAxLTIuOTEtMS40MSAxMS40NiAxMS40NiAwIDAwMi44MS01LjM3SDEyVjRINy4zMWE0IDQgMCAwMC0uMi0uNTZDNi44NyAyLjc5IDYuNiAyIDYuNiAybC0xLjQ3LjVzLjQuODkuNiAxLjVIMHYxLjMzaDIuMTVBMTEuMjMgMTEuMjMgMCAwMDUgMTAuN2ExNy4xOSAxNy4xOSAwIDAxLTUgMi4xcS41Ni44Mi44NyAxLjM4YTIzLjI4IDIzLjI4IDAgMDA1LjIyLTIuNTEgMTUuNjQgMTUuNjQgMCAwMDMuNTYgMS43N3pNMy42MyA1LjMzaDQuOTFhOC4xMSA4LjExIDAgMDEtMi40NSA0LjQ1IDkuMTEgOS4xMSAwIDAxLTIuNDYtNC40NXpcIiB9LCBudWxsLCAtMSAvKiBIT0lTVEVEICovKSksXG4gICAgICAgICAgX2NyZWF0ZUNvbW1lbnRWTm9kZShcIiBlc2xpbnQtZW5hYmxlIFwiKVxuICAgICAgICBdKSlcbiAgICAgIDogKCRwcm9wcy5pY29uID09PSAnY2xvc2UnKVxuICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJnXCIsIF9ob2lzdGVkXzMsIF9jYWNoZVsxXSB8fCAoX2NhY2hlWzFdID0gW1xuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBhdGhcIiwgeyBkOiBcIm00LjM0IDIuOTMgMTIuNzMgMTIuNzMtMS40MSAxLjQxTDIuOTMgNC4zNXpcIiB9LCBudWxsLCAtMSAvKiBIT0lTVEVEICovKSxcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJwYXRoXCIsIHsgZDogXCJNMTcuMDcgNC4zNCA0LjM0IDE3LjA3bC0xLjQxLTEuNDFMMTUuNjYgMi45M3pcIiB9LCBudWxsLCAtMSAvKiBIT0lTVEVEICovKVxuICAgICAgICAgIF0pKSlcbiAgICAgICAgOiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZ1wiLCBfaG9pc3RlZF80LCBfY2FjaGVbMl0gfHwgKF9jYWNoZVsyXSA9IFtcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJwYXRoXCIsIHsgZDogXCJNOC41OSAzLjQyIDE0LjE3IDlIMnYyaDEyLjE3bC01LjU4IDUuNTlMMTAgMThsOC04LTgtOHpcIiB9LCBudWxsLCAtMSAvKiBIT0lTVEVEICovKVxuICAgICAgICAgIF0pKSlcbiAgXSwgOCAvKiBQUk9QUyAqLywgX2hvaXN0ZWRfMSkpXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkU6XFxcXGdoUmVwb1xcXFxZc0FyY2hpdmVzLUdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFJY29uLnZ1ZT90eXBlPXNjcmlwdFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJFOlxcXFxnaFJlcG9cXFxcWXNBcmNoaXZlcy1HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBSWNvbi52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBSWNvbi52dWVcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgImltcG9ydCB7IG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVCbG9jayBhcyBfY3JlYXRlQmxvY2ssIGNyZWF0ZUNvbW1lbnRWTm9kZSBhcyBfY3JlYXRlQ29tbWVudFZOb2RlLCByZW5kZXJTbG90IGFzIF9yZW5kZXJTbG90LCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jaywgbm9ybWFsaXplQ2xhc3MgYXMgX25vcm1hbGl6ZUNsYXNzIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF9ob2lzdGVkXzEgPSB7XG4gIGtleTogMSxcbiAgY2xhc3M6IFwidmEtYnV0dG9uX190ZXh0XCJcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJidXR0b25cIiwge1xuICAgIGNsYXNzOiBfbm9ybWFsaXplQ2xhc3MoW1widmEtYnV0dG9uXCIsIHtcblx0XHRcdCd2YS1idXR0b24tLWFjdGlvbi1wcm9ncmVzc2l2ZSc6ICRwcm9wcy5hY3Rpb24gPT09ICdwcm9ncmVzc2l2ZScsXG5cdFx0XHQndmEtYnV0dG9uLS13ZWlnaHQtcXVpZXQnOiAkcHJvcHMud2VpZ2h0ID09PSAncXVpZXQnLFxuXHRcdH1dKSxcbiAgICBvbkNsaWNrOiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICRldmVudCA9PiAoX2N0eC4kZW1pdCgnY2xpY2snKSkpXG4gIH0sIFtcbiAgICAoJHByb3BzLmljb24gIT09IHVuZGVmaW5lZClcbiAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIlZBSWNvblwiXSwge1xuICAgICAgICAgIGtleTogMCxcbiAgICAgICAgICBjbGFzczogXCJ2YS1idXR0b25fX2ljb25cIixcbiAgICAgICAgICBpY29uOiAkcHJvcHMuaWNvbixcbiAgICAgICAgICBzaXplOiAyMFxuICAgICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJpY29uXCJdKSlcbiAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSksXG4gICAgKF9jdHguJHNsb3RzWydkZWZhdWx0J10pXG4gICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJzcGFuXCIsIF9ob2lzdGVkXzEsIFtcbiAgICAgICAgICBfcmVuZGVyU2xvdChfY3R4LiRzbG90cywgXCJkZWZhdWx0XCIsIHt9LCB1bmRlZmluZWQsIHRydWUpXG4gICAgICAgIF0pKVxuICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKSxcbiAgICAoJHByb3BzLmluZGljYXRvciAhPT0gdW5kZWZpbmVkKVxuICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiVkFJY29uXCJdLCB7XG4gICAgICAgICAga2V5OiAyLFxuICAgICAgICAgIGNsYXNzOiBcInZhLWJ1dHRvbl9faW5kaWNhdG9yXCIsXG4gICAgICAgICAgaWNvbjogJHByb3BzLmluZGljYXRvcixcbiAgICAgICAgICBzaXplOiAxNlxuICAgICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJpY29uXCJdKSlcbiAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSlcbiAgXSwgMiAvKiBDTEFTUyAqLykpXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkU6XFxcXGdoUmVwb1xcXFxZc0FyY2hpdmVzLUdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFCdXR0b24udnVlP3R5cGU9c2NyaXB0XCI7aW1wb3J0IFwiRTpcXFxcZ2hSZXBvXFxcXFlzQXJjaGl2ZXMtR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQUJ1dHRvbi52dWU/dHlwZT1zdHlsZSZpbmRleD0wXCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkU6XFxcXGdoUmVwb1xcXFxZc0FyY2hpdmVzLUdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFCdXR0b24udnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQUJ1dHRvbi52dWVcIjtzY3JpcHQuX19zY29wZUlkID0gXCJkYXRhLXYtYmI3NzM0YjFcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgImltcG9ydCB7IHJlbmRlclNsb3QgYXMgX3JlbmRlclNsb3QsIFRyYW5zaXRpb24gYXMgX1RyYW5zaXRpb24sIHdpdGhDdHggYXMgX3dpdGhDdHgsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVCbG9jayBhcyBfY3JlYXRlQmxvY2sgfSBmcm9tIFwidnVlXCJcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jayhfVHJhbnNpdGlvbiwge1xuICAgIG5hbWU6IFwidmEtZmFkZVwiLFxuICAgIG1vZGU6IFwib3V0LWluXCJcbiAgfSwge1xuICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgIF9yZW5kZXJTbG90KF9jdHguJHNsb3RzLCBcImRlZmF1bHRcIiwge30sIHVuZGVmaW5lZCwgdHJ1ZSlcbiAgICBdKSxcbiAgICBfOiAzIC8qIEZPUldBUkRFRCAqL1xuICB9KSlcbn0iLCAiY29uc3Qgc2NyaXB0ID0ge307aW1wb3J0IFwiRTpcXFxcZ2hSZXBvXFxcXFlzQXJjaGl2ZXMtR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQUZhZGVUcmFuc2l0aW9uLnZ1ZT90eXBlPXN0eWxlJmluZGV4PTBcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRTpcXFxcZ2hSZXBvXFxcXFlzQXJjaGl2ZXMtR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQUZhZGVUcmFuc2l0aW9uLnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFGYWRlVHJhbnNpdGlvbi52dWVcIjtzY3JpcHQuX19zY29wZUlkID0gXCJkYXRhLXYtYmI5YzU3NTFcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgImltcG9ydCB7Y29tcHV0ZWR9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgbWVzc2FnZXMgZnJvbSAnLi4vbWVzc2FnZXMuanNvbic7XG5pbXBvcnQge3dnVXNlclZhcmlhbnR9IGZyb20gJy4uL21vZHVsZXMvdXRpbHMnO1xuXG4vLyBJbnRlcmZhY2UgdmFyaWFudCBvZiB2YXJpYW50IHByb21wdFxuY29uc3QgaTE4blZhcmlhbnQgPSBjb21wdXRlZCgoKSA9PiB7XG5cdGlmICh3Z1VzZXJWYXJpYW50LnZhbHVlID09PSAnemgnKSB7XG5cdFx0Ly8gTm8gY29udmVyc2lvbjogdXNlIHJhbmRvbWx5IHNlbGVjdGVkIHZhcmlhbnRcblx0XHRyZXR1cm4gTWF0aC5yYW5kb20oKSA+IDAuNSA/ICdoYW5zJyA6ICdoYW50Jztcblx0fVxuXHRpZiAoWyd6aC1oYW50JywgJ3poLXR3JywgJ3poLWhrJywgJ3poLW1vJ10uaW5jbHVkZXMod2dVc2VyVmFyaWFudC52YWx1ZSkpIHtcblx0XHRyZXR1cm4gJ2hhbnQnO1xuXHR9XG5cblx0cmV0dXJuICdoYW5zJztcbn0pO1xuXG5mdW5jdGlvbiB1c2VJMThuKGtleTogc3RyaW5nKTogc3RyaW5nIHtcblx0Y29uc3QgY3VycmVudE1zZ3NHcm91cDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IG1lc3NhZ2VzW2kxOG5WYXJpYW50LnZhbHVlXTtcblx0cmV0dXJuIGN1cnJlbnRNc2dzR3JvdXBba2V5XSA/PyBrZXk7XG59XG5cbmV4cG9ydCB7dXNlSTE4biBhcyBkZWZhdWx0LCBpMThuVmFyaWFudH07XG4iLCAie1xuXHRcInZhcmlhbnRzXCI6IHtcblx0XHRcInpoLWNuXCI6IFwi5Lit5Zu95aSn6ZmG566A5L2TXCIsXG5cdFx0XCJ6aC1zZ1wiOiBcIuaWsOWKoOWdoeeugOS9k1wiLFxuXHRcdFwiemgtbXlcIjogXCLpqazmnaXopb/kuprnroDkvZNcIixcblx0XHRcInpoLWhrXCI6IFwi5Lit5ZyL6aaZ5riv57mB6auUXCIsXG5cdFx0XCJ6aC1tb1wiOiBcIuS4reWci+a+s+mWgOe5gemrlFwiLFxuXHRcdFwiemgtdHdcIjogXCLkuK3lnIvoh7rngaPnuYHpq5RcIlxuXHR9LFxuXHRcImhhbnNcIjoge1xuXHRcdFwic3BhY2VcIjogXCJcIixcblx0XHRcImNsb3NlXCI6IFwi5YWz6ZetXCIsXG5cdFx0XCJ2cC5oZWFkZXJcIjogXCLmiJHku6zmlK/mjIFcIixcblx0XHRcInZwLmhlYWRlci5hbHRcIjogXCLorrDkvY/mraTlj5jkvZPvvJ9cIixcblx0XHRcInZwLm1haW5cIjogXCLpgInlj5blhoXlrrnnmoTor63oqIDlj5jkvZNcIixcblx0XHRcInZwLm1haW4uYWx0XCI6IFwi5Lul5ZCO6YO95L2/55So5q2k5Y+Y5L2T5ZGI546w5YaF5a65XCIsXG5cdFx0XCJ2cC5tYWluLmV4dFwiOiBcIuS/neWtmOaCqOWBj+WlveeahOS4reaWh+ivreiogOWPmOS9k++8jOS7pemBv+WFjeaYvuekuueugOe5gea3t+adgueahOWGheWuue+8jOaPkOS+m+acgOS9s+eahOmYheivu+S9k+mqjOOAglwiLFxuXHRcdFwidnAuYnV0dG9uLm9rXCI6IFwi56Gu5a6aXCIsXG5cdFx0XCJ2cC5idXR0b24ub3RoZXJcIjogXCLlhbbku5ZcIlxuXHR9LFxuXHRcImhhbnRcIjoge1xuXHRcdFwic3BhY2VcIjogXCJcIixcblx0XHRcImNsb3NlXCI6IFwi6Zec6ZaJXCIsXG5cdFx0XCJ2cC5oZWFkZXJcIjogXCLmiJHlgJHmlK/mj7RcIixcblx0XHRcInZwLmhlYWRlci5hbHRcIjogXCLoqJjkvY/mraTororpq5TvvJ9cIixcblx0XHRcInZwLm1haW5cIjogXCLpgbjlj5blhaflrrnnmoToqp7oqIDororpq5RcIixcblx0XHRcInZwLm1haW4uYWx0XCI6IFwi5Lul5b6M6YO95L2/55So5q2k6K6K6auU5ZGI54++5YWn5a65XCIsXG5cdFx0XCJ2cC5tYWluLmV4dFwiOiBcIuWEsuWtmOaCqOWBj+WlveeahOS4reaWh+iqnuiogOiuiumrlO+8jOS7pemBv+WFjemhr+ekuuewoee5gea3t+mbnOeahOWFp+Wuue+8jOaPkOS+m+acgOS9s+eahOmWseiugOmrlOmpl+OAglwiLFxuXHRcdFwidnAuYnV0dG9uLm9rXCI6IFwi56K65a6aXCIsXG5cdFx0XCJ2cC5idXR0b24ub3RoZXJcIjogXCLlhbbku5ZcIlxuXHR9XG59XG4iLCAiaW1wb3J0IHt0eXBlIFZhbGlkVmFyaWFudH0gZnJvbSAnZXh0LmdhZGdldC5WYXJpYW50QWxseSc7XG5pbXBvcnQge2NvbXB1dGVkLCByZWZ9IGZyb20gJ3Z1ZSc7XG5cbmNvbnN0IFZBTElEX1ZBUklBTlRTID0gWyd6aC1jbicsICd6aC1zZycsICd6aC1teScsICd6aC10dycsICd6aC1oaycsICd6aC1tbyddIGFzIGNvbnN0O1xuXG4vLyBXcmFwIHdnVXNlclZhcmlhbnQgaW4gYSByZWYgZm9yIGRlYnVnZ2luZyBwdXJwb3Nlcy5cbi8vIEl0IGhhcyBubyByZWFjdGl2aXR5IGluIHByb2R1Y3Rpb24uIChjaGFuZ2VzIHRvIHdnVXNlclZhcmlhbnQgd2lsbCBub3QgYmUgcmVmbGVjdGVkKVxuLy8gd2dVc2VyVmFyaWFudCBjYW4gYmUgbnVsbCwgc28gZmFsbHMgYmFjayB0byBhbiBlbXB0eSBzdHJpbmcuXG5jb25zdCB3Z1VzZXJWYXJpYW50ID0gcmVmKG13LmNvbmZpZy5nZXQoJ3dnVXNlclZhcmlhbnQnKSA/PyAnJyk7XG5cbmZ1bmN0aW9uIGlzTW9iaWxlRGV2aWNlKCk6IGJvb2xlYW4ge1xuXHQvLyBCcm93c2VyIHN1cHBvcnQ6XG5cdC8vIENocm9taXVtIG9uIHNvbWUgQW5kcm9pZCBkZXZpY2UgKGUuZy4gU2Ftc3VuZykgaGFzIFwiKGhvdmVyOiBob3ZlcilcIiBzZXRcblx0Ly8gU28gY2hlY2sgcG9pbnRlciB0b2dldGhlclxuXHRyZXR1cm4gbWF0Y2hNZWRpYSgnKGhvdmVyOiBub25lKSwgKHBvaW50ZXI6IGNvYXJzZSknKS5tYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBnZXRNb3VudFBvaW50KCk6IEVsZW1lbnQge1xuXHRzd2l0Y2ggKG13LmNvbmZpZy5nZXQoJ3NraW4nKSkge1xuXHRcdGNhc2UgJ3ZlY3Rvci0yMDIyJzpcblx0XHRcdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubXctcGFnZS1jb250YWluZXInKVswXSA/PyBkb2N1bWVudC5ib2R5O1xuXHRcdGNhc2UgJ2dvbmdiaSc6XG5cdFx0XHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI213LWNvbnRlbnQtYmxvY2snKSA/PyBkb2N1bWVudC5ib2R5O1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gZG9jdW1lbnQuYm9keTtcblx0fVxufVxuXG5jb25zdCBpbmZlcnJlZFZhcmlhbnQgPSBjb21wdXRlZCgoKSA9PiB7XG5cdGlmICgoVkFMSURfVkFSSUFOVFMgYXMgUmVhZG9ubHlBcnJheTxzdHJpbmc+KS5pbmNsdWRlcyh3Z1VzZXJWYXJpYW50LnZhbHVlKSkge1xuXHRcdHJldHVybiB3Z1VzZXJWYXJpYW50LnZhbHVlIGFzIFZhbGlkVmFyaWFudDtcblx0fVxuXHRyZXR1cm4gbnVsbDtcbn0pO1xuXG4vKipcbiAqIFNodWZmbGUgYmV0d2VlbiBhbGwgdmFsaWQgdmFyaWFudHMuXG4gKlxuICogQHBhcmFtIGxhc3QgbGFzdCBzaHVmZmxlZCB2YXJpYW50LCB1c2VkIHRvIHByZXZlbnQgZHVwbGljYXRpb25zXG4gKiBAcmV0dXJucyBzaHVmZmxlZCB2YXJpYW50XG4gKi9cbmZ1bmN0aW9uIHNodWZmbGVWYXJpYW50KGxhc3Q/OiBWYWxpZFZhcmlhbnQpOiBWYWxpZFZhcmlhbnQge1xuXHRjb25zdCB0YXJnZXRBcnJheSA9IFsuLi5WQUxJRF9WQVJJQU5UU10uZmlsdGVyKChpKSA9PiB7XG5cdFx0cmV0dXJuIGkgIT09IGxhc3Q7XG5cdH0pO1xuXHRjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRhcmdldEFycmF5Lmxlbmd0aCk7XG5cdHJldHVybiB0YXJnZXRBcnJheVtyYW5kb21JbmRleF0hO1xufVxuXG5leHBvcnQge1ZBTElEX1ZBUklBTlRTLCB3Z1VzZXJWYXJpYW50LCBpc01vYmlsZURldmljZSwgZ2V0TW91bnRQb2ludCwgaW5mZXJyZWRWYXJpYW50LCBzaHVmZmxlVmFyaWFudH07XG4iLCAibGV0IGNvdW50ZXIgPSAwO1xuXG4vKipcbiAqIFJldHVybiBhIHVuaXF1ZSBlbGVtZW50IElEIG9uIGVhY2ggY2FsbC5cbiAqXG4gKiBAcmV0dXJucyBpZFxuICovXG5mdW5jdGlvbiB1c2VVbmlxdWVJZCgpOiBzdHJpbmcge1xuXHRyZXR1cm4gYHZhLSR7Y291bnRlcisrfWA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVVuaXF1ZUlkO1xuIiwgImltcG9ydCB7UmVmLCByZWYsIHdhdGNofSBmcm9tICd2dWUnO1xuaW1wb3J0IHt0eXBlIFZhbGlkVmFyaWFudH0gZnJvbSAnZXh0LmdhZGdldC5WYXJpYW50QWxseSc7XG5pbXBvcnQge2luZmVycmVkVmFyaWFudCwgc2h1ZmZsZVZhcmlhbnR9IGZyb20gJy4uL21vZHVsZXMvdXRpbHMnO1xuXG5jb25zdCBJTlRFUlZBTCA9IDMgKiAxMDAwO1xuXG4vKipcbiAqIFJldHVybiBhIHJlZiB3aGljaCBzaHVmZmxlIGJldHdlZW4gYWxsIHBvc3NpYmxlIHZhcmlhbnRzLlxuICpcbiAqIEBwYXJhbSBpc0ZyZWV6ZWQgc2hvdWxkIHNodWZmbGluZyBwYXVzZSBvciBub3RcbiAqL1xuZnVuY3Rpb24gdXNlU2h1ZmZsZWRWYXJpYW50KGlzRnJlZXplZDogUmVmPGJvb2xlYW4+KTogUmVmPFZhbGlkVmFyaWFudD4ge1xuXHRjb25zdCByZXN1bHQgPSByZWY8VmFsaWRWYXJpYW50PihzaHVmZmxlVmFyaWFudCgpKTtcblx0bGV0IGlkOiBudW1iZXI7XG5cblx0d2F0Y2goXG5cdFx0aXNGcmVlemVkLFxuXHRcdChuZXdWYWx1ZSkgPT4ge1xuXHRcdFx0aWYgKG5ld1ZhbHVlKSB7XG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwoaWQpO1xuXHRcdFx0XHQvLyBBdHRlbXB0IHRvIGZyZWV6ZSBhdCBpbmZlcnJlZCB2YXJpYW50IGF0IGEgYmVzdCBlZmZvcnRcblx0XHRcdFx0Ly8gVGhpcyBzaG91bGQgYmUgbW9zdCBjYXNlc1xuXHRcdFx0XHRyZXN1bHQudmFsdWUgPSBpbmZlcnJlZFZhcmlhbnQudmFsdWUgPz8gc2h1ZmZsZVZhcmlhbnQoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlkID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcblx0XHRcdFx0XHRyZXN1bHQudmFsdWUgPSBzaHVmZmxlVmFyaWFudChyZXN1bHQudmFsdWUpO1xuXHRcdFx0XHR9LCBJTlRFUlZBTCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHR7aW1tZWRpYXRlOiB0cnVlfVxuXHQpO1xuXG5cdHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVNodWZmbGVkVmFyaWFudDtcbiIsICJpbXBvcnQge1dyaXRhYmxlQ29tcHV0ZWRSZWYsIGNvbXB1dGVkfSBmcm9tICd2dWUnO1xuXG4vKipcbiAqIFJldHVybiBhIGNvbXB1dGVkIHByb3BlcnR5IHRoYXQgcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZyBwcm9wIHZhbHVlIHdoZW4gaXMgYWNjZXNzZWRcbiAqIGFuZCBmaXJlcyBhbiBldmVudCB3aGVuIGlzIHNldC4gVXNlZCB3aXRoIHYtbW9kZWwuXG4gKlxuICogQHBhcmFtIHByb3BzIHByb3BzIGZpZWxkIG9mIGEgY29tcG9uZW50XG4gKiBAcGFyYW0gZW1pdCBlbWl0IGZ1bmN0aW9uIG9mIGEgY29tcG9uZW50XG4gKiBAcGFyYW0gbmFtZSBuYW1lIG9mIHRoZSBwcm9wXG4gKiBAcmV0dXJuIHdyYXBwZWQgY29tcHV0ZXIgcHJvcGVydHlcbiAqL1xuZnVuY3Rpb24gdXNlTW9kZWxXcmFwcGVyPFQgZXh0ZW5kcyBzdHJpbmcsIFAgZXh0ZW5kcyBSZWNvcmQ8VCwgdW5rbm93bj4+KFxuXHRwcm9wczogUCxcblx0ZW1pdDogKGV2ZW50OiBgdXBkYXRlOiR7VH1gLCB2YWx1ZTogUFtUXSkgPT4gdm9pZCxcblx0bmFtZTogVCA9ICdtb2RlbFZhbHVlJyBhcyBUXG4pOiBXcml0YWJsZUNvbXB1dGVkUmVmPFBbVF0+IHtcblx0cmV0dXJuIGNvbXB1dGVkKHtcblx0XHRnZXQoKSB7XG5cdFx0XHRyZXR1cm4gcHJvcHNbbmFtZV07XG5cdFx0fSxcblx0XHRzZXQodmFsdWUpIHtcblx0XHRcdGVtaXQoYHVwZGF0ZToke25hbWV9YCwgdmFsdWUpO1xuXHRcdH0sXG5cdH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VNb2RlbFdyYXBwZXI7XG4iLCAiaW1wb3J0IHtSZWYsIFdhdGNoU291cmNlLCBjb21wdXRlZCwgc2hhbGxvd1JlZiwgd2F0Y2h9IGZyb20gJ3Z1ZSc7XG5cbi8qKlxuICogQ3JlYXRlIGEgcmVmIHRoYXQsIGNhbiBiZSBpbmRlcGVuZGVudGx5IHVwZGF0ZWQsIGJ1dCB3aGVuIGl0cyBkZWZhdWx0XG4gKiB2YWx1ZSBjaGFuZ2VzLCBpdCBpcyByZXN0b3JlZCB0byBpdHMgKG5ldykgZGVmYXVsdCB2YWx1ZS5cbiAqXG4gKiBVc2VkIGZvciBkZWJ1Z2dpbmcuXG4gKi9cbmZ1bmN0aW9uIHVzZURlZmF1bHQ8VD4oZGVmYXVsdFZhbHVlOiBXYXRjaFNvdXJjZTxUPik6IFJlZjxUPiB7XG5cdGNvbnN0IHJlYWxSZWYgPSBzaGFsbG93UmVmPFQ+KHR5cGVvZiBkZWZhdWx0VmFsdWUgPT09ICdmdW5jdGlvbicgPyBkZWZhdWx0VmFsdWUoKSA6IGRlZmF1bHRWYWx1ZS52YWx1ZSk7XG5cblx0d2F0Y2goXG5cdFx0ZGVmYXVsdFZhbHVlLFxuXHRcdChuZXdWYWx1ZSkgPT4ge1xuXHRcdFx0cmVhbFJlZi52YWx1ZSA9IG5ld1ZhbHVlO1xuXHRcdH0sXG5cdFx0e2RlZXA6IHRydWV9XG5cdCk7XG5cblx0cmV0dXJuIGNvbXB1dGVkKHtcblx0XHRnZXQoKSB7XG5cdFx0XHRyZXR1cm4gcmVhbFJlZi52YWx1ZTtcblx0XHR9LFxuXHRcdHNldChuZXdWYWx1ZSkge1xuXHRcdFx0cmVhbFJlZi52YWx1ZSA9IG5ld1ZhbHVlO1xuXHRcdH0sXG5cdH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VEZWZhdWx0O1xuIiwgImltcG9ydCB7IGNyZWF0ZVZOb2RlIGFzIF9jcmVhdGVWTm9kZSwgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2ssIGNyZWF0ZUNvbW1lbnRWTm9kZSBhcyBfY3JlYXRlQ29tbWVudFZOb2RlLCB3aXRoQ3R4IGFzIF93aXRoQ3R4LCBjcmVhdGVUZXh0Vk5vZGUgYXMgX2NyZWF0ZVRleHRWTm9kZSwgcmVuZGVyTGlzdCBhcyBfcmVuZGVyTGlzdCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBub3JtYWxpemVDbGFzcyBhcyBfbm9ybWFsaXplQ2xhc3MsIGNyZWF0ZUJsb2NrIGFzIF9jcmVhdGVCbG9jaywgVHJhbnNpdGlvbiBhcyBfVHJhbnNpdGlvbiB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfaG9pc3RlZF8xID0gW1wibGFuZ1wiLCBcImFyaWEtbGFiZWxsZWRieVwiLCBcImFyaWEtZGVzY3JpYmVkYnlcIl1cbmNvbnN0IF9ob2lzdGVkXzIgPSBbXCJpZFwiXVxuY29uc3QgX2hvaXN0ZWRfMyA9IFtcImxhbmdcIl1cbmNvbnN0IF9ob2lzdGVkXzQgPSBbXCJpZFwiXVxuY29uc3QgX2hvaXN0ZWRfNSA9IHsgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHRfX29wdGlvbnNcIiB9XG5jb25zdCBfaG9pc3RlZF82ID0geyBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdF9fZm9vdGVyXCIgfVxuY29uc3QgX2hvaXN0ZWRfNyA9IHsgY2xhc3M6IFwidmEtcGFyYSB2YS1wYXJhLS1zdWJ0bGVcIiB9XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soX1RyYW5zaXRpb24sIHtcbiAgICBuYW1lOiBcInZhLXZhcmlhbnQtcHJvbXB0XCIsXG4gICAgYXBwZWFyOiBcIlwiXG4gIH0sIHtcbiAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAoJHByb3BzLm9wZW4pXG4gICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCB7XG4gICAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgICByZWY6IFwicHJvbXB0XCIsXG4gICAgICAgICAgICBsYW5nOiBgemgtJHskc2V0dXAuaTE4blZhcmlhbnR9YCxcbiAgICAgICAgICAgIGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0XCIsXG4gICAgICAgICAgICByb2xlOiBcImRpYWxvZ1wiLFxuICAgICAgICAgICAgXCJhcmlhLW1vZGFsXCI6IFwiZmFsc2VcIixcbiAgICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6ICRzZXR1cC50aXRsZUlkLFxuICAgICAgICAgICAgXCJhcmlhLWRlc2NyaWJlZGJ5XCI6ICRzZXR1cC5kZXNjSWRcbiAgICAgICAgICB9LCBbXG4gICAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiVkFCdXR0b25cIl0sIHtcbiAgICAgICAgICAgICAgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHRfX2Nsb3NlXCIsXG4gICAgICAgICAgICAgIHdlaWdodDogXCJxdWlldFwiLFxuICAgICAgICAgICAgICBpY29uOiBcImNsb3NlXCIsXG4gICAgICAgICAgICAgIHRpdGxlOiAkc2V0dXAudXNlSTE4bignY2xvc2UnKSxcbiAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6ICRzZXR1cC51c2VJMThuKCdjbG9zZScpLFxuICAgICAgICAgICAgICBkaXNhYmxlZDogJHByb3BzLmRpc2FibGVkLFxuICAgICAgICAgICAgICBvbkNsaWNrOiAkc2V0dXAub3B0T3V0QW5kQ2xvc2VcbiAgICAgICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcInRpdGxlXCIsIFwiYXJpYS1sYWJlbFwiLCBcImRpc2FibGVkXCJdKSxcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJoMlwiLCB7XG4gICAgICAgICAgICAgIGlkOiAkc2V0dXAudGl0bGVJZCxcbiAgICAgICAgICAgICAgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHRfX3RpdGxlIHZhLXRpdGxlXCJcbiAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC51c2VJMThuKCRzZXR1cC5pc1ZhcmlhbnROYXJyb3dlZCA/ICd2cC5oZWFkZXIuYWx0JyA6ICd2cC5oZWFkZXInKSksIDEgLyogVEVYVCAqLyksXG4gICAgICAgICAgICAgIF9jYWNoZVsxXSB8fCAoX2NhY2hlWzFdID0gX2NyZWF0ZUVsZW1lbnRWTm9kZShcImJyXCIsIG51bGwsIG51bGwsIC0xIC8qIEhPSVNURUQgKi8pKSxcbiAgICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIlZBRmFkZVRyYW5zaXRpb25cIl0sIG51bGwsIHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICAgICAgICAoISRzZXR1cC5pc1ZhcmlhbnROYXJyb3dlZClcbiAgICAgICAgICAgICAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICRzZXR1cC5zaHVmZmxlZFZhcmlhbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYW5nOiBgemgtJHskc2V0dXAuc2h1ZmZsZWRWYXJpYW50fWAsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdF9fdGl0bGVfX3ZhcmlhbnRcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLm1lc3NhZ2VzLnZhcmlhbnRzWyRzZXR1cC5zaHVmZmxlZFZhcmlhbnRdKSwgOSAvKiBURVhULCBQUk9QUyAqLywgX2hvaXN0ZWRfMykpXG4gICAgICAgICAgICAgICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSwgOCAvKiBQUk9QUyAqLywgX2hvaXN0ZWRfMiksXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwicFwiLCB7XG4gICAgICAgICAgICAgIGlkOiAkc2V0dXAuZGVzY0lkLFxuICAgICAgICAgICAgICBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdF9fZGVzYyB2YS1wYXJhXCJcbiAgICAgICAgICAgIH0sIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLnVzZUkxOG4oJHNldHVwLmlzVmFyaWFudE5hcnJvd2VkID8gJ3ZwLm1haW4uYWx0JyA6ICd2cC5tYWluJykpLCA5IC8qIFRFWFQsIFBST1BTICovLCBfaG9pc3RlZF80KSxcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfNSwgW1xuICAgICAgICAgICAgICBfY3JlYXRlQ29tbWVudFZOb2RlKFwiIGluZmVycmVkVmFyaWFudCBpcyBub24tbnVsbCwgZ3VhcmRlZCBieSBpc1ZhcmlhbnROYXJyb3dlZCBcIiksXG4gICAgICAgICAgICAgIChfb3BlbkJsb2NrKHRydWUpLCBfY3JlYXRlRWxlbWVudEJsb2NrKF9GcmFnbWVudCwgbnVsbCwgX3JlbmRlckxpc3QoJHNldHVwLmlzVmFyaWFudE5hcnJvd2VkICYmICRzZXR1cC5pbmZlcnJlZFZhcmlhbnQgIT09IG51bGxcblx0XHRcdFx0XHRcdD8gWyRzZXR1cC5pbmZlcnJlZFZhcmlhbnRdXG5cdFx0XHRcdFx0XHQ6ICRzZXR1cC5WQUxJRF9WQVJJQU5UUywgKHZhcmlhbnQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIlZBQnV0dG9uXCJdLCB7XG4gICAgICAgICAgICAgICAgICBrZXk6IHZhcmlhbnQsXG4gICAgICAgICAgICAgICAgICBjbGFzczogX25vcm1hbGl6ZUNsYXNzKFtcInZhLXZhcmlhbnQtcHJvbXB0X19vcHRpb25zX19idXR0b25cIiwgeyd2YS12YXJpYW50LXByb21wdF9fb3B0aW9uc19fYnV0dG9uLS1wcmltYXJ5JzogJHNldHVwLmlzVmFyaWFudE5hcnJvd2VkfV0pLFxuICAgICAgICAgICAgICAgICAgaW5kaWNhdG9yOiBcImFycm93TmV4dFwiLFxuICAgICAgICAgICAgICAgICAgd2VpZ2h0OiBcInF1aWV0XCIsXG4gICAgICAgICAgICAgICAgICBhY3Rpb246IFwicHJvZ3Jlc3NpdmVcIixcbiAgICAgICAgICAgICAgICAgIGxhbmc6IHZhcmlhbnQsXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZDogJHByb3BzLmRpc2FibGVkLFxuICAgICAgICAgICAgICAgICAgb25DbGljazogJGV2ZW50ID0+ICgkc2V0dXAuc2VsZWN0KHZhcmlhbnQpKVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5tZXNzYWdlcy52YXJpYW50c1t2YXJpYW50XSksIDEgLyogVEVYVCAqLylcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXzogMiAvKiBEWU5BTUlDICovXG4gICAgICAgICAgICAgICAgfSwgMTAzMiAvKiBQUk9QUywgRFlOQU1JQ19TTE9UUyAqLywgW1wiY2xhc3NcIiwgXCJsYW5nXCIsIFwiZGlzYWJsZWRcIiwgXCJvbkNsaWNrXCJdKSlcbiAgICAgICAgICAgICAgfSksIDEyOCAvKiBLRVlFRF9GUkFHTUVOVCAqLykpLFxuICAgICAgICAgICAgICAoJHNldHVwLmlzVmFyaWFudE5hcnJvd2VkKVxuICAgICAgICAgICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIlZBQnV0dG9uXCJdLCB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogMCxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHRfX29wdGlvbnNfX2J1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICBpbmRpY2F0b3I6IFwiYXJyb3dOZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgIHdlaWdodDogXCJxdWlldFwiLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwicHJvZ3Jlc3NpdmVcIixcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICRwcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICAgICAgICAgICAgb25DbGljazogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAkZXZlbnQgPT4gKCRzZXR1cC5pc1ZhcmlhbnROYXJyb3dlZCA9IGZhbHNlKSlcbiAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkc2V0dXAudXNlSTE4bigndnAuYnV0dG9uLm90aGVyJykpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICAgICAgICAgICAgfSwgOCAvKiBQUk9QUyAqLywgW1wiZGlzYWJsZWRcIl0pKVxuICAgICAgICAgICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImZvb3RlclwiLCBfaG9pc3RlZF82LCBbXG4gICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJwXCIsIF9ob2lzdGVkXzcsIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLnVzZUkxOG4oJ3ZwLm1haW4uZXh0JykpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0sIDggLyogUFJPUFMgKi8sIF9ob2lzdGVkXzEpKVxuICAgICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpXG4gICAgXSksXG4gICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgfSkpXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkU6XFxcXGdoUmVwb1xcXFxZc0FyY2hpdmVzLUdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFWYXJpYW50UHJvbXB0LnZ1ZT90eXBlPXNjcmlwdFwiO2ltcG9ydCBcIkU6XFxcXGdoUmVwb1xcXFxZc0FyY2hpdmVzLUdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFWYXJpYW50UHJvbXB0LnZ1ZT90eXBlPXN0eWxlJmluZGV4PTBcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRTpcXFxcZ2hSZXBvXFxcXFlzQXJjaGl2ZXMtR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQVZhcmlhbnRQcm9tcHQudnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQVZhcmlhbnRQcm9tcHQudnVlXCI7c2NyaXB0Ll9fc2NvcGVJZCA9IFwiZGF0YS12LTVhNDRjYzc1XCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtyZWZ9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge3R5cGUgVmFsaWRWYXJpYW50fSBmcm9tICdleHQuZ2FkZ2V0LlZhcmlhbnRBbGx5JztcbmltcG9ydCBWQUJ1dHRvbiBmcm9tICcuL1ZBQnV0dG9uLnZ1ZSc7XG5pbXBvcnQgVkFTZWxlY3QgZnJvbSAnLi9WQVNlbGVjdC52dWUnO1xuaW1wb3J0IHVzZUkxOG4sIHtpMThuVmFyaWFudH0gZnJvbSAnLi4vY29tcG9zYWJsZXMvdXNlSTE4bic7XG5pbXBvcnQgdXNlVW5pcXVlSWQgZnJvbSAnLi4vY29tcG9zYWJsZXMvdXNlVW5pcXVlSWQnO1xuaW1wb3J0IHtWQUxJRF9WQVJJQU5UUywgaW5mZXJyZWRWYXJpYW50LCBzaHVmZmxlVmFyaWFudH0gZnJvbSAnLi4vbW9kdWxlcy91dGlscyc7XG5pbXBvcnQgbWVzc2FnZXMgZnJvbSAnLi4vbWVzc2FnZXMuanNvbic7XG5pbXBvcnQgdXNlTW9kZWxXcmFwcGVyIGZyb20gJy4uL2NvbXBvc2FibGVzL3VzZU1vZGVsV3JhcHBlcic7XG5pbXBvcnQgdXNlRGVmYXVsdCBmcm9tICcuLi9jb21wb3NhYmxlcy91c2VEZWZhdWx0JztcblxuY29uc3QgcHJvcHMgPSB3aXRoRGVmYXVsdHMoXG5cdGRlZmluZVByb3BzPHtcblx0XHRvcGVuOiBib29sZWFuO1xuXHRcdGRpc2FibGVkPzogYm9vbGVhbjtcblx0fT4oKSxcblx0e1xuXHRcdGRpc2FibGVkOiBmYWxzZSxcblx0fVxuKTtcbmNvbnN0IGVtaXQgPSBkZWZpbmVFbWl0czx7XG5cdChlOiAndXBkYXRlOm9wZW4nLCB2YWx1ZTogYm9vbGVhbik6IHZvaWQ7XG5cdChlOiAndXBkYXRlOmRpc2FibGVkJywgdmFsdWU6IGJvb2xlYW4pOiB2b2lkO1xuXHQoZTogJ3NlbGVjdCcsIHZhcmlhbnQ6IFZhbGlkVmFyaWFudCk6IHZvaWQ7XG5cdChlOiAnb3B0b3V0Jyk6IHZvaWQ7XG59PigpO1xuXG5jb25zdCBwcm9tcHQgPSByZWY8SFRNTEVsZW1lbnQgfCBudWxsPihudWxsKTtcbmNvbnN0IHRpdGxlSWQgPSB1c2VVbmlxdWVJZCgpO1xuY29uc3Qgc2VsZWN0ZWRWYXJpYW50ID0gdXNlRGVmYXVsdCgoKSA9PiBpbmZlcnJlZFZhcmlhbnQudmFsdWUgPz8gc2h1ZmZsZVZhcmlhbnQoKSk7XG5jb25zdCBpc09wZW4gPSB1c2VNb2RlbFdyYXBwZXIocHJvcHMsIGVtaXQsICdvcGVuJyk7XG5jb25zdCBpc0Rpc2FibGVkID0gdXNlTW9kZWxXcmFwcGVyKHByb3BzLCBlbWl0LCAnZGlzYWJsZWQnKTtcblxuZnVuY3Rpb24gb3B0T3V0QW5kQ2xvc2UoKSB7XG5cdGVtaXQoJ29wdG91dCcpO1xuXHRpc09wZW4udmFsdWUgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0KHZhcmlhbnQ6IFZhbGlkVmFyaWFudCkge1xuXHRpc0Rpc2FibGVkLnZhbHVlID0gdHJ1ZTtcblx0ZW1pdCgnc2VsZWN0JywgdmFyaWFudCk7XG59XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuXHQ8VHJhbnNpdGlvbiBuYW1lPVwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlXCIgYXBwZWFyPlxuXHRcdDxkaXZcblx0XHRcdHYtaWY9XCJvcGVuXCJcblx0XHRcdHJlZj1cInByb21wdFwiXG5cdFx0XHQ6bGFuZz1cImB6aC0ke2kxOG5WYXJpYW50fWBcIlxuXHRcdFx0Y2xhc3M9XCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVcIlxuXHRcdFx0cm9sZT1cImRpYWxvZ1wiXG5cdFx0XHRhcmlhLW1vZGFsPVwiZmFsc2VcIlxuXHRcdFx0OmFyaWEtbGFiZWxsZWRieT1cInRpdGxlSWRcIlxuXHRcdD5cblx0XHRcdDxkaXYgY2xhc3M9XCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX2hlYWRlclwiPlxuXHRcdFx0XHQ8aDIgOmlkPVwidGl0bGVJZFwiIGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlX19oZWFkZXJfX3RpdGxlIHZhLXRpdGxlXCI+XG5cdFx0XHRcdFx0e3sgdXNlSTE4bigndnAubWFpbicpIH19XG5cdFx0XHRcdDwvaDI+XG5cdFx0XHRcdDxWQUJ1dHRvblxuXHRcdFx0XHRcdGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlX19oZWFkZXJfX2Nsb3NlXCJcblx0XHRcdFx0XHR3ZWlnaHQ9XCJxdWlldFwiXG5cdFx0XHRcdFx0aWNvbj1cImNsb3NlXCJcblx0XHRcdFx0XHQ6dGl0bGU9XCJ1c2VJMThuKCdjbG9zZScpXCJcblx0XHRcdFx0XHQ6YXJpYS1sYWJlbD1cInVzZUkxOG4oJ2Nsb3NlJylcIlxuXHRcdFx0XHRcdDpkaXNhYmxlZD1cImRpc2FibGVkXCJcblx0XHRcdFx0XHRAY2xpY2s9XCJvcHRPdXRBbmRDbG9zZVwiXG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX21haW5cIj5cblx0XHRcdFx0PFZBU2VsZWN0XG5cdFx0XHRcdFx0di1tb2RlbD1cInNlbGVjdGVkVmFyaWFudFwiXG5cdFx0XHRcdFx0Y2xhc3M9XCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX21haW5fX3NlbGVjdFwiXG5cdFx0XHRcdFx0Omxhbmc9XCJzZWxlY3RlZFZhcmlhbnRcIlxuXHRcdFx0XHRcdDpkaXNhYmxlZD1cImRpc2FibGVkXCJcblx0XHRcdFx0XHQ6YXJpYS1sYWJlbGxlZGJ5PVwidGl0bGVJZFwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8b3B0aW9uIHYtZm9yPVwidmFyaWFudCBpbiBWQUxJRF9WQVJJQU5UU1wiIDprZXk9XCJ2YXJpYW50XCIgOnZhbHVlPVwidmFyaWFudFwiIDpsYW5nPVwidmFyaWFudFwiPlxuXHRcdFx0XHRcdFx0e3sgbWVzc2FnZXMudmFyaWFudHNbdmFyaWFudF0gfX1cblx0XHRcdFx0XHQ8L29wdGlvbj5cblx0XHRcdFx0PC9WQVNlbGVjdD5cblx0XHRcdFx0PFZBQnV0dG9uXG5cdFx0XHRcdFx0Y2xhc3M9XCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX21haW5fX2FjdGlvblwiXG5cdFx0XHRcdFx0YWN0aW9uPVwicHJvZ3Jlc3NpdmVcIlxuXHRcdFx0XHRcdGljb249XCJhcnJvd05leHRcIlxuXHRcdFx0XHRcdDpkaXNhYmxlZD1cImRpc2FibGVkXCJcblx0XHRcdFx0XHRAY2xpY2s9XCJzZWxlY3Qoc2VsZWN0ZWRWYXJpYW50KVwiXG5cdFx0XHRcdFx0Pnt7IHVzZUkxOG4oJ3ZwLmJ1dHRvbi5vaycpIH19PC9WQUJ1dHRvblxuXHRcdFx0XHQ+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxmb290ZXIgY2xhc3M9XCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX2Zvb3RlclwiPlxuXHRcdFx0XHQ8cCBjbGFzcz1cInZhLXBhcmEgdmEtcGFyYS0tc3VidGxlXCI+XG5cdFx0XHRcdFx0e3sgdXNlSTE4bigndnAubWFpbi5leHQnKSB9fVxuXHRcdFx0XHQ8L3A+XG5cdFx0XHQ8L2Zvb3Rlcj5cblx0XHQ8L2Rpdj5cblx0PC9UcmFuc2l0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwibGVzc1wiPlxuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vc3R5bGVzL21peGlucy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uL3N0eWxlcy90b2tlbnMubGVzcyc7XG5cbi52YS10aXRsZSB7XG5cdGJvcmRlcjogMDsgLy8gUmVzZXRcblx0cGFkZGluZzogMDsgLy8gUmVzZXRcblx0b3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcblxuXHRmb250LXNpemU6IEBmb250LXNpemUteHgtbGFyZ2U7XG5cdGZvbnQtd2VpZ2h0OiBAZm9udC13ZWlnaHQtYm9sZDtcblx0bWFyZ2luOiBAc3BhY2luZy01MCBAc3BhY2luZy0wO1xuXHRjb2xvcjogQGNvbG9yLWJhc2U7XG59XG5cbi52YS1wYXJhIHtcblx0b3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcblx0bWFyZ2luLXRvcDogQHNwYWNpbmctNTA7XG5cdGNvbG9yOiBAY29sb3ItYmFzZTtcblxuXHQmLS1zdWJ0bGUge1xuXHRcdGNvbG9yOiBAY29sb3Itc3VidGxlO1xuXHRcdGZvbnQtc2l6ZTogQGZvbnQtc2l6ZS14LXNtYWxsO1xuXHRcdG1hcmdpbi1ib3R0b206IEBzcGFjaW5nLTM1O1xuXHR9XG59XG5cbi52YS12YXJpYW50LXByb21wdC1tb2JpbGUge1xuXHRib3gtc2l6aW5nOiBAYm94LXNpemluZy1iYXNlO1xuXHR6LWluZGV4OiBAei1pbmRleC1vdmVybGF5O1xuXHRwYWRkaW5nOiBAc3BhY2luZy01MCBAc3BhY2luZy0xMDA7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0bGVmdDogQHNwYWNpbmctMDtcblx0cmlnaHQ6IEBzcGFjaW5nLTA7XG5cdGJvdHRvbTogQHNwYWNpbmctMDtcblx0bWFyZ2luOiBAc3BhY2luZy0wIGF1dG87XG5cdHdpZHRoOiAxMDAlO1xuXHRtYXgtd2lkdGg6IDYwMHB4O1xuXHRtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMmVtKTtcblxuXHRvdmVyZmxvdzogYXV0bztcblx0b3ZlcnNjcm9sbC1iZWhhdmlvcjogbm9uZTtcblx0YmFja2dyb3VuZC1jb2xvcjogQGJhY2tncm91bmQtY29sb3ItYmFzZTtcblx0Ym9yZGVyOiBAYm9yZGVyLWJhc2U7XG5cdGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzLWJhc2U7XG5cdGJveC1zaGFkb3c6IEBib3gtc2hhZG93LWRyb3AtbWVkaXVtO1xuXHRmb250LWZhbWlseTogQGZvbnQtZmFtaWx5LXN5c3RlbS1zYW5zO1xuXHRmb250LXNpemU6IDFyZW07IC8vIFJlc2V0XG5cdGxpbmUtaGVpZ2h0OiBub3JtYWw7IC8vIFJlc2V0XG5cblx0Jl9faGVhZGVyIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cblx0XHQmX190aXRsZSB7XG5cdFx0XHRmbGV4OiAxO1xuXHRcdFx0Zm9udC1zaXplOiBAZm9udC1zaXplLW1lZGl1bTtcblx0XHR9XG5cblx0XHQmX19jbG9zZSB7XG5cdFx0XHRwYWRkaW5nOiBAc3BhY2luZy1zaG9ydGhhbmQtYnV0dG9uLWljb24tb25seTtcblx0XHRcdG1hcmdpbi1yaWdodDogLShAc3BhY2luZy1ob3Jpem9udGFsLWJ1dHRvbi1pY29uLW9ubHkgKyAxcHgpO1xuXHRcdH1cblx0fVxuXG5cdCZfX21haW4ge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0bWFyZ2luLXRvcDogQHNwYWNpbmctMjU7XG5cblx0XHQmX19zZWxlY3Qge1xuXHRcdFx0bWFyZ2luLXJpZ2h0OiBAc3BhY2luZy03NTtcblx0XHRcdGZsZXg6IDE7XG5cdFx0fVxuXG5cdFx0Jl9fYWN0aW9uIHtcblx0XHRcdGZsZXgtc2hyaW5rOiAwO1xuXHRcdH1cblx0fVxuXG5cdCZfX2Nsb3NlIHtcblx0XHRwYWRkaW5nOiBAc3BhY2luZy1zaG9ydGhhbmQtYnV0dG9uLWljb24tb25seTtcblx0XHRmbG9hdDogcmlnaHQ7XG5cdFx0bWFyZ2luLXJpZ2h0OiAtKEBzcGFjaW5nLWhvcml6b250YWwtYnV0dG9uLWljb24tb25seSArIDFweCk7XG5cdH1cbn1cblxuLyogUHJvbXB0IHRyYW5zaXRpb24gZWZmZWN0ICovXG4udmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlLWVudGVyLWFjdGl2ZSxcbi52YS12YXJpYW50LXByb21wdC1tb2JpbGUtbGVhdmUtYWN0aXZlIHtcblx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogQHRyYW5zaXRpb24tcHJvcGVydHktbGF5b3V0O1xuXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiBAdHJhbnNpdGlvbi1kdXJhdGlvbi1tZWRpdW07XG5cdHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBAdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24tc3lzdGVtO1xufVxuXG4udmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlLWVudGVyLWZyb20sXG4udmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlLWxlYXZlLXRvIHtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xufVxuPC9zdHlsZT5cbi4uL21vZHVsZXMvdXRpbHNcbiIsICJpbXBvcnQgeyByZW5kZXJTbG90IGFzIF9yZW5kZXJTbG90LCB2TW9kZWxTZWxlY3QgYXMgX3ZNb2RlbFNlbGVjdCwgd2l0aERpcmVjdGl2ZXMgYXMgX3dpdGhEaXJlY3RpdmVzLCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2sgfSBmcm9tIFwidnVlXCJcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIF93aXRoRGlyZWN0aXZlcygoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwic2VsZWN0XCIsIHtcbiAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAkZXZlbnQgPT4gKCgkc2V0dXAubW9kZWxWYWx1ZSkgPSAkZXZlbnQpKSxcbiAgICBjbGFzczogXCJ2YS1zZWxlY3RcIlxuICB9LCBbXG4gICAgX3JlbmRlclNsb3QoX2N0eC4kc2xvdHMsIFwiZGVmYXVsdFwiLCB7fSwgdW5kZWZpbmVkLCB0cnVlKVxuICBdLCA1MTIgLyogTkVFRF9QQVRDSCAqLykpLCBbXG4gICAgW192TW9kZWxTZWxlY3QsICRzZXR1cC5tb2RlbFZhbHVlXVxuICBdKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJFOlxcXFxnaFJlcG9cXFxcWXNBcmNoaXZlcy1HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBU2VsZWN0LnZ1ZT90eXBlPXNjcmlwdFwiO2ltcG9ydCBcIkU6XFxcXGdoUmVwb1xcXFxZc0FyY2hpdmVzLUdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFTZWxlY3QudnVlP3R5cGU9c3R5bGUmaW5kZXg9MFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJFOlxcXFxnaFJlcG9cXFxcWXNBcmNoaXZlcy1HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBU2VsZWN0LnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFTZWxlY3QudnVlXCI7c2NyaXB0Ll9fc2NvcGVJZCA9IFwiZGF0YS12LWM5YjQ2NDYwXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJpbXBvcnQgeyB0b0Rpc3BsYXlTdHJpbmcgYXMgX3RvRGlzcGxheVN0cmluZywgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIGNyZWF0ZVZOb2RlIGFzIF9jcmVhdGVWTm9kZSwgcmVuZGVyTGlzdCBhcyBfcmVuZGVyTGlzdCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2ssIHdpdGhDdHggYXMgX3dpdGhDdHgsIGNyZWF0ZVRleHRWTm9kZSBhcyBfY3JlYXRlVGV4dFZOb2RlLCBjcmVhdGVDb21tZW50Vk5vZGUgYXMgX2NyZWF0ZUNvbW1lbnRWTm9kZSwgVHJhbnNpdGlvbiBhcyBfVHJhbnNpdGlvbiwgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF9ob2lzdGVkXzEgPSBbXCJsYW5nXCIsIFwiYXJpYS1sYWJlbGxlZGJ5XCJdXG5jb25zdCBfaG9pc3RlZF8yID0geyBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX2hlYWRlclwiIH1cbmNvbnN0IF9ob2lzdGVkXzMgPSBbXCJpZFwiXVxuY29uc3QgX2hvaXN0ZWRfNCA9IHsgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlX19tYWluXCIgfVxuY29uc3QgX2hvaXN0ZWRfNSA9IFtcInZhbHVlXCIsIFwibGFuZ1wiXVxuY29uc3QgX2hvaXN0ZWRfNiA9IHsgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlX19mb290ZXJcIiB9XG5jb25zdCBfaG9pc3RlZF83ID0geyBjbGFzczogXCJ2YS1wYXJhIHZhLXBhcmEtLXN1YnRsZVwiIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jayhfVHJhbnNpdGlvbiwge1xuICAgIG5hbWU6IFwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlXCIsXG4gICAgYXBwZWFyOiBcIlwiXG4gIH0sIHtcbiAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAoJHByb3BzLm9wZW4pXG4gICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCB7XG4gICAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgICByZWY6IFwicHJvbXB0XCIsXG4gICAgICAgICAgICBsYW5nOiBgemgtJHskc2V0dXAuaTE4blZhcmlhbnR9YCxcbiAgICAgICAgICAgIGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZVwiLFxuICAgICAgICAgICAgcm9sZTogXCJkaWFsb2dcIixcbiAgICAgICAgICAgIFwiYXJpYS1tb2RhbFwiOiBcImZhbHNlXCIsXG4gICAgICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiAkc2V0dXAudGl0bGVJZFxuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMiwgW1xuICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiaDJcIiwge1xuICAgICAgICAgICAgICAgIGlkOiAkc2V0dXAudGl0bGVJZCxcbiAgICAgICAgICAgICAgICBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX2hlYWRlcl9fdGl0bGUgdmEtdGl0bGVcIlxuICAgICAgICAgICAgICB9LCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC51c2VJMThuKCd2cC5tYWluJykpLCA5IC8qIFRFWFQsIFBST1BTICovLCBfaG9pc3RlZF8zKSxcbiAgICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIlZBQnV0dG9uXCJdLCB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlX19oZWFkZXJfX2Nsb3NlXCIsXG4gICAgICAgICAgICAgICAgd2VpZ2h0OiBcInF1aWV0XCIsXG4gICAgICAgICAgICAgICAgaWNvbjogXCJjbG9zZVwiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAkc2V0dXAudXNlSTE4bignY2xvc2UnKSxcbiAgICAgICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogJHNldHVwLnVzZUkxOG4oJ2Nsb3NlJyksXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICRwcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiAkc2V0dXAub3B0T3V0QW5kQ2xvc2VcbiAgICAgICAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1widGl0bGVcIiwgXCJhcmlhLWxhYmVsXCIsIFwiZGlzYWJsZWRcIl0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfNCwgW1xuICAgICAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiVkFTZWxlY3RcIl0sIHtcbiAgICAgICAgICAgICAgICBtb2RlbFZhbHVlOiAkc2V0dXAuc2VsZWN0ZWRWYXJpYW50LFxuICAgICAgICAgICAgICAgIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiOiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICRldmVudCA9PiAoKCRzZXR1cC5zZWxlY3RlZFZhcmlhbnQpID0gJGV2ZW50KSksXG4gICAgICAgICAgICAgICAgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlX19tYWluX19zZWxlY3RcIixcbiAgICAgICAgICAgICAgICBsYW5nOiAkc2V0dXAuc2VsZWN0ZWRWYXJpYW50LFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiAkcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogJHNldHVwLnRpdGxlSWRcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgICAgIChfb3BlbkJsb2NrKHRydWUpLCBfY3JlYXRlRWxlbWVudEJsb2NrKF9GcmFnbWVudCwgbnVsbCwgX3JlbmRlckxpc3QoJHNldHVwLlZBTElEX1ZBUklBTlRTLCAodmFyaWFudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcIm9wdGlvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiB2YXJpYW50LFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YXJpYW50LFxuICAgICAgICAgICAgICAgICAgICAgIGxhbmc6IHZhcmlhbnRcbiAgICAgICAgICAgICAgICAgICAgfSwgX3RvRGlzcGxheVN0cmluZygkc2V0dXAubWVzc2FnZXMudmFyaWFudHNbdmFyaWFudF0pLCA5IC8qIFRFWFQsIFBST1BTICovLCBfaG9pc3RlZF81KSlcbiAgICAgICAgICAgICAgICAgIH0pLCAxMjggLyogS0VZRURfRlJBR01FTlQgKi8pKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgICAgICAgIH0sIDggLyogUFJPUFMgKi8sIFtcIm1vZGVsVmFsdWVcIiwgXCJsYW5nXCIsIFwiZGlzYWJsZWRcIiwgXCJhcmlhLWxhYmVsbGVkYnlcIl0pLFxuICAgICAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiVkFCdXR0b25cIl0sIHtcbiAgICAgICAgICAgICAgICBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX21haW5fX2FjdGlvblwiLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogXCJwcm9ncmVzc2l2ZVwiLFxuICAgICAgICAgICAgICAgIGljb246IFwiYXJyb3dOZXh0XCIsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICRwcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiBfY2FjaGVbMV0gfHwgKF9jYWNoZVsxXSA9ICRldmVudCA9PiAoJHNldHVwLnNlbGVjdCgkc2V0dXAuc2VsZWN0ZWRWYXJpYW50KSkpXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLnVzZUkxOG4oJ3ZwLmJ1dHRvbi5vaycpKSwgMSAvKiBURVhUICovKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgICAgICAgIH0sIDggLyogUFJPUFMgKi8sIFtcImRpc2FibGVkXCJdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZm9vdGVyXCIsIF9ob2lzdGVkXzYsIFtcbiAgICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBcIiwgX2hvaXN0ZWRfNywgX3RvRGlzcGxheVN0cmluZygkc2V0dXAudXNlSTE4bigndnAubWFpbi5leHQnKSksIDEgLyogVEVYVCAqLylcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSwgOCAvKiBQUk9QUyAqLywgX2hvaXN0ZWRfMSkpXG4gICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSlcbiAgICBdKSxcbiAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICB9KSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRTpcXFxcZ2hSZXBvXFxcXFlzQXJjaGl2ZXMtR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQVZhcmlhbnRQcm9tcHRNb2JpbGUudnVlP3R5cGU9c2NyaXB0XCI7aW1wb3J0IFwiRTpcXFxcZ2hSZXBvXFxcXFlzQXJjaGl2ZXMtR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQVZhcmlhbnRQcm9tcHRNb2JpbGUudnVlP3R5cGU9c3R5bGUmaW5kZXg9MFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJFOlxcXFxnaFJlcG9cXFxcWXNBcmNoaXZlcy1HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBVmFyaWFudFByb21wdE1vYmlsZS52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBVmFyaWFudFByb21wdE1vYmlsZS52dWVcIjtzY3JpcHQuX19zY29wZUlkID0gXCJkYXRhLXYtNWNjNzg2NWJcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgImltcG9ydCB7IG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVCbG9jayBhcyBfY3JlYXRlQmxvY2ssIGNyZWF0ZUNvbW1lbnRWTm9kZSBhcyBfY3JlYXRlQ29tbWVudFZOb2RlLCBUZWxlcG9ydCBhcyBfVGVsZXBvcnQsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2sgfSBmcm9tIFwidnVlXCJcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soX0ZyYWdtZW50LCBudWxsLCBbXG4gICAgKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKF9UZWxlcG9ydCwgeyB0bzogJHNldHVwLmRlc2t0b3BNb3VudFBvaW50IH0sIFtcbiAgICAgICghJHNldHVwLmlzTW9iaWxlKVxuICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jaygkc2V0dXBbXCJWQVZhcmlhbnRQcm9tcHRcIl0sIHtcbiAgICAgICAgICAgIGtleTogMCxcbiAgICAgICAgICAgIG9wZW46ICRzZXR1cC5pc09wZW4sXG4gICAgICAgICAgICBcIm9uVXBkYXRlOm9wZW5cIjogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAkZXZlbnQgPT4gKCgkc2V0dXAuaXNPcGVuKSA9ICRldmVudCkpLFxuICAgICAgICAgICAgZGlzYWJsZWQ6ICRzZXR1cC5pc0Rpc2FibGVkLFxuICAgICAgICAgICAgXCJvblVwZGF0ZTpkaXNhYmxlZFwiOiBfY2FjaGVbMV0gfHwgKF9jYWNoZVsxXSA9ICRldmVudCA9PiAoKCRzZXR1cC5pc0Rpc2FibGVkKSA9ICRldmVudCkpLFxuICAgICAgICAgICAgXCJhdXRvLWNsb3NlXCI6IGZhbHNlLFxuICAgICAgICAgICAgb25PcHRvdXQ6ICRzZXR1cC5vbk9wdE91dCxcbiAgICAgICAgICAgIG9uU2VsZWN0OiAkc2V0dXAuc2V0VmFyaWFudFxuICAgICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcIm9wZW5cIiwgXCJkaXNhYmxlZFwiXSkpXG4gICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSlcbiAgICBdLCA4IC8qIFBST1BTICovLCBbXCJ0b1wiXSkpLFxuICAgIF9jcmVhdGVDb21tZW50Vk5vZGUoXCIgVGVsZXBvcnQgdG8gYm9keSBiZWNhdXNlIHRoZXkgYXJlIGFsd2F5cyBmbG9hdGVkIGF0IGJvdHRvbSBcIiksXG4gICAgKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKF9UZWxlcG9ydCwgeyB0bzogXCJib2R5XCIgfSwgW1xuICAgICAgKCRzZXR1cC5pc01vYmlsZSlcbiAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiVkFWYXJpYW50UHJvbXB0TW9iaWxlXCJdLCB7XG4gICAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgICBvcGVuOiAkc2V0dXAuaXNPcGVuLFxuICAgICAgICAgICAgXCJvblVwZGF0ZTpvcGVuXCI6IF9jYWNoZVsyXSB8fCAoX2NhY2hlWzJdID0gJGV2ZW50ID0+ICgoJHNldHVwLmlzT3BlbikgPSAkZXZlbnQpKSxcbiAgICAgICAgICAgIGRpc2FibGVkOiAkc2V0dXAuaXNEaXNhYmxlZCxcbiAgICAgICAgICAgIFwib25VcGRhdGU6ZGlzYWJsZWRcIjogX2NhY2hlWzNdIHx8IChfY2FjaGVbM10gPSAkZXZlbnQgPT4gKCgkc2V0dXAuaXNEaXNhYmxlZCkgPSAkZXZlbnQpKSxcbiAgICAgICAgICAgIG9uT3B0b3V0OiAkc2V0dXAub25PcHRPdXQsXG4gICAgICAgICAgICBvblNlbGVjdDogJHNldHVwLnNldFZhcmlhbnRcbiAgICAgICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJvcGVuXCIsIFwiZGlzYWJsZWRcIl0pKVxuICAgICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpXG4gICAgXSkpXG4gIF0sIDY0IC8qIFNUQUJMRV9GUkFHTUVOVCAqLykpXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkU6XFxcXGdoUmVwb1xcXFxZc0FyY2hpdmVzLUdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXEFwcC52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgXCJFOlxcXFxnaFJlcG9cXFxcWXNBcmNoaXZlcy1HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxBcHAudnVlP3R5cGU9c3R5bGUmaW5kZXg9MFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJFOlxcXFxnaFJlcG9cXFxcWXNBcmNoaXZlcy1HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxBcHAudnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcQXBwLnZ1ZVwiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBLDZGQUFBQSxTQUFBO0FBQUE7QUFDQSxRQUFJLFFBQVEsU0FBVSxJQUFJO0FBQ3hCLGFBQU8sTUFBTSxHQUFHLFNBQVMsUUFBUTtBQUFBLElBQ25DO0FBR0EsSUFBQUEsUUFBTztBQUFBLElBRUwsTUFBTSxPQUFPLGNBQWMsWUFBWSxVQUFVLEtBQ2pELE1BQU0sT0FBTyxVQUFVLFlBQVksTUFBTTtBQUFBLElBRXpDLE1BQU0sT0FBTyxRQUFRLFlBQVksSUFBSSxLQUNyQyxNQUFNLE9BQU8sVUFBVSxZQUFZLE1BQU0sS0FDekMsTUFBTSxPQUFPLFdBQVEsWUFBWSxPQUFJO0FBQUEsSUFFcEMsMkJBQVk7QUFBRSxhQUFPO0FBQUEsSUFB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QyxJQUFJMkIsWUFBWXpCLE9BQU80SCxhQUFjbkc7TUFDaEZzSyxVQUFVL0wsT0FBT3lMO01BQ2pCTyxVQUFVaE0sT0FBT3FMO0lBQ25CLEdBQUcsTUFBTSxHQUFlLENBQUMsUUFBUSxVQUFVLENBQUMsTUFBQSxHQUM1Q00sYUFBQS9LLG9CQUFvQixRQUFRLElBQUksQ0FBQSxDQUNyQyxFQUFBO0lBQ0E7O0VBQXdCO0FBQzdCOztBQ2pDcVNxTCxZQUFPck0sU0FBU2dNO0FBQU9LLFlBQU9qTCxTQUFTO0FBQWtDLElBQU9rTCxlQUFRRDs7QXhCRzdYLElBQU1FLE9BQU9sSSxTQUFTbUksY0FBYyxLQUFLO0FBQ3pDbkksU0FBU0UsS0FBS2tJLE9BQU9GLElBQUk7Q0FBQSxHQUN6QmxOLGFBQUFxTixXQUFVSixZQUFHLEVBQUVLLE1BQU1KLElBQUk7IiwKICAibmFtZXMiOiBbIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiU3ltYm9sIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiZG9jdW1lbnQiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJUeXBlRXJyb3IiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiYWN0aXZlWERvY3VtZW50IiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImltcG9ydF92dWUyMiIsICJyZXF1aXJlIiwgImltcG9ydF92dWUyMCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJpbXBvcnRfdnVlMTIiLCAiaW1wb3J0X3Z1ZTIiLCAiX2hvaXN0ZWRfMSIsICJfaG9pc3RlZF8yIiwgImtleSIsICJfaG9pc3RlZF8zIiwgIl9ob2lzdGVkXzQiLCAicmVuZGVyIiwgIl9jdHgiLCAiX2NhY2hlIiwgIiRwcm9wcyIsICIkc2V0dXAiLCAiJGRhdGEiLCAiJG9wdGlvbnMiLCAib3BlbkJsb2NrIiwgImNyZWF0ZUVsZW1lbnRCbG9jayIsICJjbGFzcyIsICJ4bWxucyIsICJ3aWR0aCIsICJzaXplIiwgImhlaWdodCIsICJ2aWV3Qm94IiwgImljb24iLCAiY3JlYXRlQ29tbWVudFZOb2RlIiwgImNyZWF0ZUVsZW1lbnRWTm9kZSIsICJkIiwgIlZBSWNvbl9kZWZhdWx0IiwgIl9fZmlsZSIsICJWQUljb25fZGVmYXVsdDIiLCAiaW1wb3J0X3Z1ZTQiLCAiX2hvaXN0ZWRfMTIiLCAicmVuZGVyMiIsICJub3JtYWxpemVDbGFzcyIsICJhY3Rpb24iLCAid2VpZ2h0IiwgIm9uQ2xpY2siLCAiJGV2ZW50IiwgIiRlbWl0IiwgImNyZWF0ZUJsb2NrIiwgIiRzbG90cyIsICJyZW5kZXJTbG90IiwgImluZGljYXRvciIsICJWQUJ1dHRvbl9kZWZhdWx0IiwgIl9fc2NvcGVJZCIsICJWQUJ1dHRvbl9kZWZhdWx0MiIsICJpbXBvcnRfdnVlNSIsICJyZW5kZXIzIiwgIlRyYW5zaXRpb24iLCAibmFtZSIsICJtb2RlIiwgImRlZmF1bHQiLCAid2l0aEN0eCIsICJfIiwgInNjcmlwdCIsICJWQUZhZGVUcmFuc2l0aW9uX2RlZmF1bHQiLCAiaW1wb3J0X3Z1ZTciLCAibWVzc2FnZXNfZGVmYXVsdCIsICJ2YXJpYW50cyIsICJoYW5zIiwgInNwYWNlIiwgImNsb3NlIiwgImhhbnQiLCAiaW1wb3J0X3Z1ZTYiLCAiVkFMSURfVkFSSUFOVFMiLCAid2dVc2VyVmFyaWFudCIsICJyZWYiLCAiX213JGNvbmZpZyRnZXQiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJpc01vYmlsZURldmljZSIsICJtYXRjaE1lZGlhIiwgIm1hdGNoZXMiLCAiZ2V0TW91bnRQb2ludCIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0MiIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgImJvZHkiLCAicXVlcnlTZWxlY3RvciIsICJpbmZlcnJlZFZhcmlhbnQiLCAiY29tcHV0ZWQiLCAiaW5jbHVkZXMiLCAidmFsdWUiLCAic2h1ZmZsZVZhcmlhbnQiLCAibGFzdCIsICJ0YXJnZXRBcnJheSIsICJmaWx0ZXIiLCAiaSIsICJyYW5kb21JbmRleCIsICJNYXRoIiwgImZsb29yIiwgInJhbmRvbSIsICJsZW5ndGgiLCAiaTE4blZhcmlhbnQiLCAidXNlSTE4biIsICJfY3VycmVudE1zZ3NHcm91cCRrZXkiLCAiY3VycmVudE1zZ3NHcm91cCIsICJjb3VudGVyIiwgInVzZVVuaXF1ZUlkIiwgImNvbmNhdCIsICJ1c2VVbmlxdWVJZF9kZWZhdWx0IiwgImltcG9ydF92dWU4IiwgIklOVEVSVkFMIiwgInVzZVNodWZmbGVkVmFyaWFudCIsICJpc0ZyZWV6ZWQiLCAicmVzdWx0IiwgImlkIiwgIndhdGNoIiwgIm5ld1ZhbHVlIiwgIl9pbmZlcnJlZFZhcmlhbnQkdmFsdSIsICJjbGVhckludGVydmFsIiwgIndpbmRvdyIsICJzZXRJbnRlcnZhbCIsICJpbW1lZGlhdGUiLCAidXNlU2h1ZmZsZWRWYXJpYW50X2RlZmF1bHQiLCAiaW1wb3J0X3Z1ZTkiLCAidXNlTW9kZWxXcmFwcGVyIiwgInByb3BzIiwgImVtaXQiLCAic2V0IiwgInVzZU1vZGVsV3JhcHBlcl9kZWZhdWx0IiwgImltcG9ydF92dWUxMCIsICJ1c2VEZWZhdWx0IiwgImRlZmF1bHRWYWx1ZSIsICJyZWFsUmVmIiwgInNoYWxsb3dSZWYiLCAiZGVlcCIsICJ1c2VEZWZhdWx0X2RlZmF1bHQiLCAiX19wcm9wcyIsICJfX2VtaXQiLCAicHJvbXB0IiwgInRpdGxlSWQiLCAiZGVzY0lkIiwgImlzT3BlbiIsICJpc0Rpc2FibGVkIiwgImlzVmFyaWFudE5hcnJvd2VkIiwgInNodWZmbGVkVmFyaWFudCIsICJvcHRPdXRBbmRDbG9zZSIsICJzZWxlY3QiLCAidmFyaWFudCIsICJlbGVtZW50IiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiZXYiLCAiYnV0dG9ucyIsICJhdXRvQ2xvc2UiLCAiZGlzYWJsZWQiLCAiaW1wb3J0X3Z1ZTEzIiwgIl9ob2lzdGVkXzEzIiwgIl9ob2lzdGVkXzIyIiwgIl9ob2lzdGVkXzMyIiwgIl9ob2lzdGVkXzQyIiwgIl9ob2lzdGVkXzUiLCAiX2hvaXN0ZWRfNiIsICJfaG9pc3RlZF83IiwgInJlbmRlcjQiLCAiYXBwZWFyIiwgIm9wZW4iLCAibGFuZyIsICJyb2xlIiwgImNyZWF0ZVZOb2RlIiwgInRpdGxlIiwgImNyZWF0ZVRleHRWTm9kZSIsICJ0b0Rpc3BsYXlTdHJpbmciLCAibWVzc2FnZXMiLCAiRnJhZ21lbnQiLCAicmVuZGVyTGlzdCIsICJWQVZhcmlhbnRQcm9tcHRfZGVmYXVsdCIsICJWQVZhcmlhbnRQcm9tcHRfZGVmYXVsdDIiLCAiaW1wb3J0X3Z1ZTE3IiwgIm1vZGVsVmFsdWUiLCAiaW1wb3J0X3Z1ZTE1IiwgInJlbmRlcjUiLCAid2l0aERpcmVjdGl2ZXMiLCAidk1vZGVsU2VsZWN0IiwgIlZBU2VsZWN0X2RlZmF1bHQiLCAiVkFTZWxlY3RfZGVmYXVsdDIiLCAic2VsZWN0ZWRWYXJpYW50IiwgIl9pbmZlcnJlZFZhcmlhbnQkdmFsdTIiLCAiaW1wb3J0X3Z1ZTE4IiwgIl9ob2lzdGVkXzE0IiwgIl9ob2lzdGVkXzIzIiwgIl9ob2lzdGVkXzMzIiwgIl9ob2lzdGVkXzQzIiwgIl9ob2lzdGVkXzUyIiwgIl9ob2lzdGVkXzYyIiwgIl9ob2lzdGVkXzcyIiwgInJlbmRlcjYiLCAiVkFWYXJpYW50UHJvbXB0TW9iaWxlX2RlZmF1bHQiLCAiVkFWYXJpYW50UHJvbXB0TW9iaWxlX2RlZmF1bHQyIiwgImlzTW9iaWxlIiwgImRlc2t0b3BNb3VudFBvaW50IiwgInNldFZhcmlhbnQiLCAic2V0TG9jYWxWYXJpYW50IiwgInJlZGlyZWN0IiwgImZvcmNlZCIsICJvbk9wdE91dCIsICJzZXRPcHRPdXQiLCAiaW1wb3J0X3Z1ZTIxIiwgInJlbmRlcjciLCAiVGVsZXBvcnQiLCAidG8iLCAib25PcHRvdXQiLCAib25TZWxlY3QiLCAiQXBwX2RlZmF1bHQiLCAiQXBwX2RlZmF1bHQyIiwgInJvb3QiLCAiY3JlYXRlRWxlbWVudCIsICJhcHBlbmQiLCAiY3JlYXRlQXBwIiwgIm1vdW50Il0KfQo=
