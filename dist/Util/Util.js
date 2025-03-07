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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/global-this.js
var require_global_this = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/global-this.js"(exports2, module2) {
    "use strict";
    var check = function(it) {
      return it && it.Math === Math && it;
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
    exports2.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
      var descriptor = getOwnPropertyDescriptor(this, V);
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
    module2.exports = function(it) {
      return stringSlice(toString(it), 8, -1);
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
    }) ? function(it) {
      return classof(it) === "String" ? split(it, "") : $Object(it);
    } : $Object;
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-null-or-undefined.js
var require_is_null_or_undefined = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/is-null-or-undefined.js"(exports2, module2) {
    "use strict";
    module2.exports = function(it) {
      return it === null || it === void 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/require-object-coercible.js"(exports2, module2) {
    "use strict";
    var isNullOrUndefined = require_is_null_or_undefined();
    var $TypeError = TypeError;
    module2.exports = function(it) {
      if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
      return it;
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-indexed-object.js
var require_to_indexed_object = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-indexed-object.js"(exports2, module2) {
    "use strict";
    var IndexedObject = require_indexed_object();
    var requireObjectCoercible = require_require_object_coercible();
    module2.exports = function(it) {
      return IndexedObject(requireObjectCoercible(it));
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
    module2.exports = function(it) {
      return typeof it == "object" ? it !== null : isCallable(it);
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
    module2.exports = USE_SYMBOL_AS_UID ? function(it) {
      return typeof it == "symbol";
    } : function(it) {
      var $Symbol = getBuiltIn("Symbol");
      return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
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
    module2.exports = function(V, P) {
      var func = V[P];
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
    module2.exports = Object.hasOwn || function hasOwn(it, key) {
      return hasOwnProperty(toObject(it), key);
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
    module2.exports = function(it) {
      return EXISTS ? document2.createElement(it) : {};
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
      store.inspectSource = function(it) {
        return functionToString(it);
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/math-trunc.js
var require_math_trunc = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/math-trunc.js"(exports2, module2) {
    "use strict";
    var ceil = Math.ceil;
    var floor = Math.floor;
    module2.exports = Math.trunc || function trunc(x) {
      var n = +x;
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
    exports2.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return internalObjectKeys(O, hiddenKeys);
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
    module2.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
      var keys = getOwnPropertyNamesModule.f(anObject(it));
      var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
      return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/an-instance.js
var require_an_instance = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/an-instance.js"(exports2, module2) {
    "use strict";
    var isPrototypeOf = require_object_is_prototype_of();
    var $TypeError = TypeError;
    module2.exports = function(it, Prototype) {
      if (isPrototypeOf(Prototype, it)) return it;
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
      function F() {
      }
      F.prototype.constructor = null;
      return Object.getPrototypeOf(new F()) !== F.prototype;
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
    module2.exports = Object.keys || function keys(O) {
      return internalObjectKeys(O, enumBugKeys);
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
    module2.exports = function(it) {
      return it !== void 0 && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
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
    module2.exports = function(it) {
      if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR) || getMethod(it, "@@iterator") || Iterators[classof(it)];
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/get-iterator-flattenable.js
var require_get_iterator_flattenable = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/get-iterator-flattenable.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.flat-map.js
var require_es_iterator_flat_map = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.flat-map.js"() {
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
    $2({ target: "Iterator", proto: true, real: true, forced: IS_PURE }, {
      flatMap: function flatMap(mapper) {
        anObject(this);
        aCallable(mapper);
        return new IteratorProxy(getIteratorDirect(this), {
          mapper,
          inner: null
        });
      }
    });
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/esnext.iterator.flat-map.js
var require_esnext_iterator_flat_map = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/esnext.iterator.flat-map.js"() {
    "use strict";
    require_es_iterator_flat_map();
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.some.js
var require_es_iterator_some = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.iterator.some.js"() {
    "use strict";
    var $2 = require_export();
    var iterate = require_iterate();
    var aCallable = require_a_callable();
    var anObject = require_an_object();
    var getIteratorDirect = require_get_iterator_direct();
    $2({ target: "Iterator", proto: true, real: true }, {
      some: function some(predicate) {
        anObject(this);
        aCallable(predicate);
        var record = getIteratorDirect(this);
        var counter = 0;
        return iterate(record, function(value, stop) {
          if (predicate(value, counter++)) return stop();
        }, { IS_RECORD: true, INTERRUPTED: true }).stopped;
      }
    });
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/esnext.iterator.some.js
var require_esnext_iterator_some = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/esnext.iterator.some.js"() {
    "use strict";
    require_es_iterator_some();
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-string.js
var require_to_string = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/to-string.js"(exports2, module2) {
    "use strict";
    var classof = require_classof();
    var $String = String;
    module2.exports = function(argument) {
      if (classof(argument) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
      return $String(argument);
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/validate-arguments-length.js
var require_validate_arguments_length = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/internals/validate-arguments-length.js"(exports2, module2) {
    "use strict";
    var $TypeError = TypeError;
    module2.exports = function(passed, required) {
      if (passed < required) throw new $TypeError("Not enough arguments");
      return passed;
    };
  }
});

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/web.url-search-params.delete.js
var require_web_url_search_params_delete = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/web.url-search-params.delete.js"() {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/web.url-search-params.has.js
var require_web_url_search_params_has = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/web.url-search-params.has.js"() {
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

// node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/web.url-search-params.size.js
var require_web_url_search_params_size = __commonJS({
  "node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/web.url-search-params.size.js"() {
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
require_esnext_iterator_constructor();
require_esnext_iterator_filter();
require_esnext_iterator_find();
require_esnext_iterator_flat_map();
require_esnext_iterator_some();
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwtdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi1yYXcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmRleGVkLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1jYWxsYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1idWlsdC1pbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnZpcm9ubWVudC11c2VyLWFnZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYW4taW5zdGFuY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3JyZWN0LXByb3RvdHlwZS1nZXR0ZXIuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbi1hY2Nlc3Nvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaHRtbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1jcmVhdGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMtY29yZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5pdGVyYXRvci5jb25zdHJ1Y3Rvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lc25leHQuaXRlcmF0b3IuY29uc3RydWN0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtaXRlcmF0b3ItZGlyZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWlucy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1pdGVyLXJlc3VsdC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvci1jbG9zZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9yLWNyZWF0ZS1wcm94eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NhbGwtd2l0aC1zYWZlLWl0ZXJhdGlvbi1jbG9zaW5nLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLml0ZXJhdG9yLmZpbHRlci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lc25leHQuaXRlcmF0b3IuZmlsdGVyLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLWNsYXVzZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9ycy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWFycmF5LWl0ZXJhdG9yLW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXN0cmluZy10YWctc3VwcG9ydC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5pdGVyYXRvci5maW5kLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzbmV4dC5pdGVyYXRvci5maW5kLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLWZsYXR0ZW5hYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLml0ZXJhdG9yLmZsYXQtbWFwLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzbmV4dC5pdGVyYXRvci5mbGF0LW1hcC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5pdGVyYXRvci5zb21lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzbmV4dC5pdGVyYXRvci5zb21lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tc3RyaW5nLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdmFsaWRhdGUtYXJndW1lbnRzLWxlbmd0aC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIudXJsLXNlYXJjaC1wYXJhbXMuZGVsZXRlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi51cmwtc2VhcmNoLXBhcmFtcy5oYXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnVybC1zZWFyY2gtcGFyYW1zLnNpemUuanMiLCAic3JjL1V0aWwvVXRpbC50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlci50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2NoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9jaGVja0ExMXlDb25maXJtS2V5LnRzIiwgInNyYy9VdGlsL21vZHVsZXMvZ2VuZXJhdGVBcnJheS50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2luaXRNd0FwaS50cyIsICJzcmMvVXRpbC9tb2R1bGVzL3VuaXF1ZUFycmF5LnRzIiwgInNyYy9VdGlsL21vZHVsZXMvY2hlY2tEZXBlbmRlbmNpZXMudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9kZWxheS50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2ZpbmRWYXJpYW50cy50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2dlbmVyYXRlU3ZnRGF0YVVybC50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2dldEJvZHkudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9pc1ZhbGlkS2V5LnRzIiwgInNyYy9VdGlsL21vZHVsZXMvbXdVcmkudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9vb3VpQ29uZmlybVdpdGhTdHlsZS50c3giLCAic3JjL1V0aWwvbW9kdWxlcy9xdWVyeUdsb2JhbFVzZXJHcm91cHMudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9xdWVyeVVzZXJHcm91cHMudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9zY3JvbGxUb3AudHMiLCAic3JjL1V0aWwvbW9kdWxlcy91c2VySXNJbkdyb3VwLnRzIiwgInNyYy9VdGlsL21vZHVsZXMvd3BTdW1tYXJ5Q29udGVudC50cyIsICJzcmMvVXRpbC9tb2R1bGVzL3dwVGV4dGJveDFDb250ZW50LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIndXNlIHN0cmljdCc7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT09IE1hdGggJiYgaXQ7XG59O1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxubW9kdWxlLmV4cG9ydHMgPVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZ2xvYmFsLXRoaXMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2YgZ2xvYmFsVGhpcyA9PSAnb2JqZWN0JyAmJiBnbG9iYWxUaGlzKSB8fFxuICBjaGVjayh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYpIHx8XG4gIGNoZWNrKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsKSB8fFxuICBjaGVjayh0eXBlb2YgdGhpcyA9PSAnb2JqZWN0JyAmJiB0aGlzKSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmMgLS0gZmFsbGJhY2tcbiAgKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pKCkgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBEZXRlY3QgSUU4J3MgaW5jb21wbGV0ZSBkZWZpbmVQcm9wZXJ0eSBpbXBsZW1lbnRhdGlvblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIDEsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pWzFdICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbiAgdmFyIHRlc3QgPSAoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KS5iaW5kKCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gdHlwZW9mIHRlc3QgIT0gJ2Z1bmN0aW9uJyB8fCB0ZXN0Lmhhc093blByb3BlcnR5KCdwcm90b3R5cGUnKTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgY2FsbCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX0JJTkQgPyBjYWxsLmJpbmQoY2FsbCkgOiBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBjYWxsLmFwcGx5KGNhbGwsIGFyZ3VtZW50cyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBOYXNob3JuIH4gSkRLOCBidWdcbnZhciBOQVNIT1JOX0JVRyA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvciAmJiAhJHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoeyAxOiAyIH0sIDEpO1xuXG4vLyBgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZWAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5wcm90b3R5cGUucHJvcGVydHlpc2VudW1lcmFibGVcbmV4cG9ydHMuZiA9IE5BU0hPUk5fQlVHID8gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoVikge1xuICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLCBWKTtcbiAgcmV0dXJuICEhZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLmVudW1lcmFibGU7XG59IDogJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBjYWxsID0gRnVuY3Rpb25Qcm90b3R5cGUuY2FsbDtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1mdW5jdGlvbi1wcm90b3R5cGUtYmluZCAtLSBzYWZlXG52YXIgdW5jdXJyeVRoaXNXaXRoQmluZCA9IE5BVElWRV9CSU5EICYmIEZ1bmN0aW9uUHJvdG90eXBlLmJpbmQuYmluZChjYWxsLCBjYWxsKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IHVuY3VycnlUaGlzV2l0aEJpbmQgOiBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2FsbC5hcHBseShmbiwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyh7fS50b1N0cmluZyk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBzdHJpbmdTbGljZSh0b1N0cmluZyhpdCksIDgsIC0xKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcbnZhciBzcGxpdCA9IHVuY3VycnlUaGlzKCcnLnNwbGl0KTtcblxuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3Ncbm1vZHVsZS5leHBvcnRzID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyB0aHJvd3MgYW4gZXJyb3IgaW4gcmhpbm8sIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9yaGluby9pc3N1ZXMvMzQ2XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gISRPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcbn0pID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjbGFzc29mKGl0KSA9PT0gJ1N0cmluZycgPyBzcGxpdChpdCwgJycpIDogJE9iamVjdChpdCk7XG59IDogJE9iamVjdDtcbiIsICIndXNlIHN0cmljdCc7XG4vLyB3ZSBjYW4ndCB1c2UganVzdCBgaXQgPT0gbnVsbGAgc2luY2Ugb2YgYGRvY3VtZW50LmFsbGAgc3BlY2lhbCBjYXNlXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90LWFlY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSBudWxsIHx8IGl0ID09PSB1bmRlZmluZWQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoaXQpKSB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdFxudmFyIGRvY3VtZW50QWxsID0gdHlwZW9mIGRvY3VtZW50ID09ICdvYmplY3QnICYmIGRvY3VtZW50LmFsbDtcblxuLy8gYElzQ2FsbGFibGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2NhbGxhYmxlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby10eXBlb2YtdW5kZWZpbmVkIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBkb2N1bWVudEFsbCA9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudEFsbCAhPT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJyB8fCBhcmd1bWVudCA9PT0gZG9jdW1lbnRBbGw7XG59IDogZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogaXNDYWxsYWJsZShpdCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgYUZ1bmN0aW9uID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKGFyZ3VtZW50KSA/IGFyZ3VtZW50IDogdW5kZWZpbmVkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZXNwYWNlLCBtZXRob2QpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gYUZ1bmN0aW9uKGdsb2JhbFRoaXNbbmFtZXNwYWNlXSkgOiBnbG9iYWxUaGlzW25hbWVzcGFjZV0gJiYgZ2xvYmFsVGhpc1tuYW1lc3BhY2VdW21ldGhvZF07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1bmN1cnJ5VGhpcyh7fS5pc1Byb3RvdHlwZU9mKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xuXG52YXIgbmF2aWdhdG9yID0gZ2xvYmFsVGhpcy5uYXZpZ2F0b3I7XG52YXIgdXNlckFnZW50ID0gbmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cbm1vZHVsZS5leHBvcnRzID0gdXNlckFnZW50ID8gU3RyaW5nKHVzZXJBZ2VudCkgOiAnJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnZpcm9ubWVudC11c2VyLWFnZW50Jyk7XG5cbnZhciBwcm9jZXNzID0gZ2xvYmFsVGhpcy5wcm9jZXNzO1xudmFyIERlbm8gPSBnbG9iYWxUaGlzLkRlbm87XG52YXIgdmVyc2lvbnMgPSBwcm9jZXNzICYmIHByb2Nlc3MudmVyc2lvbnMgfHwgRGVubyAmJiBEZW5vLnZlcnNpb247XG52YXIgdjggPSB2ZXJzaW9ucyAmJiB2ZXJzaW9ucy52ODtcbnZhciBtYXRjaCwgdmVyc2lvbjtcblxuaWYgKHY4KSB7XG4gIG1hdGNoID0gdjguc3BsaXQoJy4nKTtcbiAgLy8gaW4gb2xkIENocm9tZSwgdmVyc2lvbnMgb2YgVjggaXNuJ3QgVjggPSBDaHJvbWUgLyAxMFxuICAvLyBidXQgdGhlaXIgY29ycmVjdCB2ZXJzaW9ucyBhcmUgbm90IGludGVyZXN0aW5nIGZvciB1c1xuICB2ZXJzaW9uID0gbWF0Y2hbMF0gPiAwICYmIG1hdGNoWzBdIDwgNCA/IDEgOiArKG1hdGNoWzBdICsgbWF0Y2hbMV0pO1xufVxuXG4vLyBCcm93c2VyRlMgTm9kZUpTIGBwcm9jZXNzYCBwb2x5ZmlsbCBpbmNvcnJlY3RseSBzZXQgYC52OGAgdG8gYDAuMGBcbi8vIHNvIGNoZWNrIGB1c2VyQWdlbnRgIGV2ZW4gaWYgYC52OGAgZXhpc3RzLCBidXQgMFxuaWYgKCF2ZXJzaW9uICYmIHVzZXJBZ2VudCkge1xuICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvRWRnZVxcLyhcXGQrKS8pO1xuICBpZiAoIW1hdGNoIHx8IG1hdGNoWzFdID49IDc0KSB7XG4gICAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0Nocm9tZVxcLyhcXGQrKS8pO1xuICAgIGlmIChtYXRjaCkgdmVyc2lvbiA9ICttYXRjaFsxXTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZlcnNpb247XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnZpcm9ubWVudC12OC12ZXJzaW9uJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG5cbnZhciAkU3RyaW5nID0gZ2xvYmFsVGhpcy5TdHJpbmc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlzeW1ib2xzIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9ICEhT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgc3ltYm9sID0gU3ltYm9sKCdzeW1ib2wgZGV0ZWN0aW9uJyk7XG4gIC8vIENocm9tZSAzOCBTeW1ib2wgaGFzIGluY29ycmVjdCB0b1N0cmluZyBjb252ZXJzaW9uXG4gIC8vIGBnZXQtb3duLXByb3BlcnR5LXN5bWJvbHNgIHBvbHlmaWxsIHN5bWJvbHMgY29udmVydGVkIHRvIG9iamVjdCBhcmUgbm90IFN5bWJvbCBpbnN0YW5jZXNcbiAgLy8gbmI6IERvIG5vdCBjYWxsIGBTdHJpbmdgIGRpcmVjdGx5IHRvIGF2b2lkIHRoaXMgYmVpbmcgb3B0aW1pemVkIG91dCB0byBgc3ltYm9sKycnYCB3aGljaCB3aWxsLFxuICAvLyBvZiBjb3Vyc2UsIGZhaWwuXG4gIHJldHVybiAhJFN0cmluZyhzeW1ib2wpIHx8ICEoT2JqZWN0KHN5bWJvbCkgaW5zdGFuY2VvZiBTeW1ib2wpIHx8XG4gICAgLy8gQ2hyb21lIDM4LTQwIHN5bWJvbHMgYXJlIG5vdCBpbmhlcml0ZWQgZnJvbSBET00gY29sbGVjdGlvbnMgcHJvdG90eXBlcyB0byBpbnN0YW5jZXNcbiAgICAhU3ltYm9sLnNoYW0gJiYgVjhfVkVSU0lPTiAmJiBWOF9WRVJTSU9OIDwgNDE7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1zeW1ib2wgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfU1lNQk9MICYmXG4gICFTeW1ib2wuc2hhbSAmJlxuICB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc1Byb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YnKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxubW9kdWxlLmV4cG9ydHMgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgJFN5bWJvbCA9IGdldEJ1aWx0SW4oJ1N5bWJvbCcpO1xuICByZXR1cm4gaXNDYWxsYWJsZSgkU3ltYm9sKSAmJiBpc1Byb3RvdHlwZU9mKCRTeW1ib2wucHJvdG90eXBlLCAkT2JqZWN0KGl0KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB0cnkge1xuICAgIHJldHVybiAkU3RyaW5nKGFyZ3VtZW50KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gJ09iamVjdCc7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciB0cnlUb1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90cnktdG8tc3RyaW5nJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBJc0NhbGxhYmxlKGFyZ3VtZW50KSBpcyB0cnVlYFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGlzQ2FsbGFibGUoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKHRyeVRvU3RyaW5nKGFyZ3VtZW50KSArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcblxuLy8gYEdldE1ldGhvZGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWdldG1ldGhvZFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoViwgUCkge1xuICB2YXIgZnVuYyA9IFZbUF07XG4gIHJldHVybiBpc051bGxPclVuZGVmaW5lZChmdW5jKSA/IHVuZGVmaW5lZCA6IGFDYWxsYWJsZShmdW5jKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBPcmRpbmFyeVRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb3JkaW5hcnl0b3ByaW1pdGl2ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5wdXQsIHByZWYpIHtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChwcmVmID09PSAnc3RyaW5nJyAmJiBpc0NhbGxhYmxlKGZuID0gaW5wdXQudG9TdHJpbmcpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAoaXNDYWxsYWJsZShmbiA9IGlucHV0LnZhbHVlT2YpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAocHJlZiAhPT0gJ3N0cmluZycgJiYgaXNDYWxsYWJsZShmbiA9IGlucHV0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgdHJ5IHtcbiAgICBkZWZpbmVQcm9wZXJ0eShnbG9iYWxUaGlzLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdsb2JhbFRoaXNba2V5XSA9IHZhbHVlO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG5cbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IG1vZHVsZS5leHBvcnRzID0gZ2xvYmFsVGhpc1tTSEFSRURdIHx8IGRlZmluZUdsb2JhbFByb3BlcnR5KFNIQVJFRCwge30pO1xuXG4oc3RvcmUudmVyc2lvbnMgfHwgKHN0b3JlLnZlcnNpb25zID0gW10pKS5wdXNoKHtcbiAgdmVyc2lvbjogJzMuNDAuMCcsXG4gIG1vZGU6IElTX1BVUkUgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxNC0yMDI1IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJyxcbiAgbGljZW5zZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2Jsb2IvdjMuNDAuMC9MSUNFTlNFJyxcbiAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMnXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSB8fCB7fSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxuLy8gYFRvT2JqZWN0YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9vYmplY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiAkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSB1bmN1cnJ5VGhpcyh7fS5oYXNPd25Qcm9wZXJ0eSk7XG5cbi8vIGBIYXNPd25Qcm9wZXJ0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWhhc293bnByb3BlcnR5XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWhhc293biAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5oYXNPd24gfHwgZnVuY3Rpb24gaGFzT3duKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5KHRvT2JqZWN0KGl0KSwga2V5KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgaWQgPSAwO1xudmFyIHBvc3RmaXggPSBNYXRoLnJhbmRvbSgpO1xudmFyIHRvU3RyaW5nID0gdW5jdXJyeVRoaXMoMS4wLnRvU3RyaW5nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcgKyAoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSkgKyAnKV8nICsgdG9TdHJpbmcoKytpZCArIHBvc3RmaXgsIDM2KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyIFN5bWJvbCA9IGdsb2JhbFRoaXMuU3ltYm9sO1xudmFyIFdlbGxLbm93blN5bWJvbHNTdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG52YXIgY3JlYXRlV2VsbEtub3duU3ltYm9sID0gVVNFX1NZTUJPTF9BU19VSUQgPyBTeW1ib2xbJ2ZvciddIHx8IFN5bWJvbCA6IFN5bWJvbCAmJiBTeW1ib2wud2l0aG91dFNldHRlciB8fCB1aWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgaWYgKCFoYXNPd24oV2VsbEtub3duU3ltYm9sc1N0b3JlLCBuYW1lKSkge1xuICAgIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IE5BVElWRV9TWU1CT0wgJiYgaGFzT3duKFN5bWJvbCwgbmFtZSlcbiAgICAgID8gU3ltYm9sW25hbWVdXG4gICAgICA6IGNyZWF0ZVdlbGxLbm93blN5bWJvbCgnU3ltYm9sLicgKyBuYW1lKTtcbiAgfSByZXR1cm4gV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciBvcmRpbmFyeVRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBUT19QUklNSVRJVkUgPSB3ZWxsS25vd25TeW1ib2woJ3RvUHJpbWl0aXZlJyk7XG5cbi8vIGBUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICBpZiAoIWlzT2JqZWN0KGlucHV0KSB8fCBpc1N5bWJvbChpbnB1dCkpIHJldHVybiBpbnB1dDtcbiAgdmFyIGV4b3RpY1RvUHJpbSA9IGdldE1ldGhvZChpbnB1dCwgVE9fUFJJTUlUSVZFKTtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKGV4b3RpY1RvUHJpbSkge1xuICAgIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnZGVmYXVsdCc7XG4gICAgcmVzdWx0ID0gY2FsbChleG90aWNUb1ByaW0sIGlucHV0LCBwcmVmKTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlc3VsdCkgfHwgaXNTeW1ib2wocmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbiAgfVxuICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ251bWJlcic7XG4gIHJldHVybiBvcmRpbmFyeVRvUHJpbWl0aXZlKGlucHV0LCBwcmVmKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xuXG4vLyBgVG9Qcm9wZXJ0eUtleWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJvcGVydHlrZXlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmd1bWVudCwgJ3N0cmluZycpO1xuICByZXR1cm4gaXNTeW1ib2woa2V5KSA/IGtleSA6IGtleSArICcnO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgZG9jdW1lbnQgPSBnbG9iYWxUaGlzLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgRVhJU1RTID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gRVhJU1RTID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG5cbi8vIFRoYW5rcyB0byBJRTggZm9yIGl0cyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGNyZWF0ZUVsZW1lbnQoJ2RpdicpLCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH1cbiAgfSkuYSAhPT0gNztcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlJyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXknKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yXG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JbmRleGVkT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXNPd24oTywgUCkpIHJldHVybiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoIWNhbGwocHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZiwgTywgUCksIE9bUF0pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBWOCB+IENocm9tZSAzNi1cbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMzMzRcbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAncHJvdG90eXBlJywge1xuICAgIHZhbHVlOiA0MixcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSkucHJvdG90eXBlICE9PSA0Mjtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyICRTdHJpbmcgPSBTdHJpbmc7XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogVHlwZShhcmd1bWVudCkgaXMgT2JqZWN0YFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGlzT2JqZWN0KGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcigkU3RyaW5nKGFyZ3VtZW50KSArICcgaXMgbm90IGFuIG9iamVjdCcpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xudmFyIFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Y4LXByb3RvdHlwZS1kZWZpbmUtYnVnJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXknKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciAkZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgRU5VTUVSQUJMRSA9ICdlbnVtZXJhYmxlJztcbnZhciBDT05GSUdVUkFCTEUgPSAnY29uZmlndXJhYmxlJztcbnZhciBXUklUQUJMRSA9ICd3cml0YWJsZSc7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydHlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydHlcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmICh0eXBlb2YgTyA9PT0gJ2Z1bmN0aW9uJyAmJiBQID09PSAncHJvdG90eXBlJyAmJiAndmFsdWUnIGluIEF0dHJpYnV0ZXMgJiYgV1JJVEFCTEUgaW4gQXR0cmlidXRlcyAmJiAhQXR0cmlidXRlc1tXUklUQUJMRV0pIHtcbiAgICB2YXIgY3VycmVudCA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gICAgaWYgKGN1cnJlbnQgJiYgY3VycmVudFtXUklUQUJMRV0pIHtcbiAgICAgIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICAgICAgQXR0cmlidXRlcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiBDT05GSUdVUkFCTEUgaW4gQXR0cmlidXRlcyA/IEF0dHJpYnV0ZXNbQ09ORklHVVJBQkxFXSA6IGN1cnJlbnRbQ09ORklHVVJBQkxFXSxcbiAgICAgICAgZW51bWVyYWJsZTogRU5VTUVSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tFTlVNRVJBQkxFXSA6IGN1cnJlbnRbRU5VTUVSQUJMRV0sXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgICAgfTtcbiAgICB9XG4gIH0gcmV0dXJuICRkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbn0gOiAkZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IG5ldyAkVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCcpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBrZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldERlc2NyaXB0b3IgPSBERVNDUklQVE9SUyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG52YXIgRVhJU1RTID0gaGFzT3duKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpO1xuLy8gYWRkaXRpb25hbCBwcm90ZWN0aW9uIGZyb20gbWluaWZpZWQgLyBtYW5nbGVkIC8gZHJvcHBlZCBmdW5jdGlvbiBuYW1lc1xudmFyIFBST1BFUiA9IEVYSVNUUyAmJiAoZnVuY3Rpb24gc29tZXRoaW5nKCkgeyAvKiBlbXB0eSAqLyB9KS5uYW1lID09PSAnc29tZXRoaW5nJztcbnZhciBDT05GSUdVUkFCTEUgPSBFWElTVFMgJiYgKCFERVNDUklQVE9SUyB8fCAoREVTQ1JJUFRPUlMgJiYgZ2V0RGVzY3JpcHRvcihGdW5jdGlvblByb3RvdHlwZSwgJ25hbWUnKS5jb25maWd1cmFibGUpKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEVYSVNUUzogRVhJU1RTLFxuICBQUk9QRVI6IFBST1BFUixcbiAgQ09ORklHVVJBQkxFOiBDT05GSUdVUkFCTEVcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxudmFyIGZ1bmN0aW9uVG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyhGdW5jdGlvbi50b1N0cmluZyk7XG5cbi8vIHRoaXMgaGVscGVyIGJyb2tlbiBpbiBgY29yZS1qc0AzLjQuMS0zLjQuNGAsIHNvIHdlIGNhbid0IHVzZSBgc2hhcmVkYCBoZWxwZXJcbmlmICghaXNDYWxsYWJsZShzdG9yZS5pbnNwZWN0U291cmNlKSkge1xuICBzdG9yZS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uVG9TdHJpbmcoaXQpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0b3JlLmluc3BlY3RTb3VyY2U7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciBXZWFrTWFwID0gZ2xvYmFsVGhpcy5XZWFrTWFwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQ2FsbGFibGUoV2Vha01hcCkgJiYgL25hdGl2ZSBjb2RlLy50ZXN0KFN0cmluZyhXZWFrTWFwKSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG5cbnZhciBrZXlzID0gc2hhcmVkKCdrZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4ga2V5c1trZXldIHx8IChrZXlzW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9XRUFLX01BUCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24nKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQgPSAnT2JqZWN0IGFscmVhZHkgaW5pdGlhbGl6ZWQnO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbFRoaXMuVHlwZUVycm9yO1xudmFyIFdlYWtNYXAgPSBnbG9iYWxUaGlzLldlYWtNYXA7XG52YXIgc2V0LCBnZXQsIGhhcztcblxudmFyIGVuZm9yY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGhhcyhpdCkgPyBnZXQoaXQpIDogc2V0KGl0LCB7fSk7XG59O1xuXG52YXIgZ2V0dGVyRm9yID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBzdGF0ZTtcbiAgICBpZiAoIWlzT2JqZWN0KGl0KSB8fCAoc3RhdGUgPSBnZXQoaXQpKS50eXBlICE9PSBUWVBFKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbmNvbXBhdGlibGUgcmVjZWl2ZXIsICcgKyBUWVBFICsgJyByZXF1aXJlZCcpO1xuICAgIH0gcmV0dXJuIHN0YXRlO1xuICB9O1xufTtcblxuaWYgKE5BVElWRV9XRUFLX01BUCB8fCBzaGFyZWQuc3RhdGUpIHtcbiAgdmFyIHN0b3JlID0gc2hhcmVkLnN0YXRlIHx8IChzaGFyZWQuc3RhdGUgPSBuZXcgV2Vha01hcCgpKTtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tc2VsZi1hc3NpZ24gLS0gcHJvdG90eXBlIG1ldGhvZHMgcHJvdGVjdGlvbiAqL1xuICBzdG9yZS5nZXQgPSBzdG9yZS5nZXQ7XG4gIHN0b3JlLmhhcyA9IHN0b3JlLmhhcztcbiAgc3RvcmUuc2V0ID0gc3RvcmUuc2V0O1xuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXNlbGYtYXNzaWduIC0tIHByb3RvdHlwZSBtZXRob2RzIHByb3RlY3Rpb24gKi9cbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIGlmIChzdG9yZS5oYXMoaXQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEKTtcbiAgICBtZXRhZGF0YS5mYWNhZGUgPSBpdDtcbiAgICBzdG9yZS5zZXQoaXQsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBzdG9yZS5nZXQoaXQpIHx8IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gc3RvcmUuaGFzKGl0KTtcbiAgfTtcbn0gZWxzZSB7XG4gIHZhciBTVEFURSA9IHNoYXJlZEtleSgnc3RhdGUnKTtcbiAgaGlkZGVuS2V5c1tTVEFURV0gPSB0cnVlO1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKGhhc093bihpdCwgU1RBVEUpKSB0aHJvdyBuZXcgVHlwZUVycm9yKE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEKTtcbiAgICBtZXRhZGF0YS5mYWNhZGUgPSBpdDtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoaXQsIFNUQVRFLCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSkgPyBpdFtTVEFURV0gOiB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGhhc093bihpdCwgU1RBVEUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXQsXG4gIGdldDogZ2V0LFxuICBoYXM6IGhhcyxcbiAgZW5mb3JjZTogZW5mb3JjZSxcbiAgZ2V0dGVyRm9yOiBnZXR0ZXJGb3Jcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1uYW1lJykuQ09ORklHVVJBQkxFO1xudmFyIGluc3BlY3RTb3VyY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG5cbnZhciBlbmZvcmNlSW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZW5mb3JjZTtcbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXQ7XG52YXIgJFN0cmluZyA9IFN0cmluZztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xudmFyIHJlcGxhY2UgPSB1bmN1cnJ5VGhpcygnJy5yZXBsYWNlKTtcbnZhciBqb2luID0gdW5jdXJyeVRoaXMoW10uam9pbik7XG5cbnZhciBDT05GSUdVUkFCTEVfTEVOR1RIID0gREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5KGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSwgJ2xlbmd0aCcsIHsgdmFsdWU6IDggfSkubGVuZ3RoICE9PSA4O1xufSk7XG5cbnZhciBURU1QTEFURSA9IFN0cmluZyhTdHJpbmcpLnNwbGl0KCdTdHJpbmcnKTtcblxudmFyIG1ha2VCdWlsdEluID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUsIG5hbWUsIG9wdGlvbnMpIHtcbiAgaWYgKHN0cmluZ1NsaWNlKCRTdHJpbmcobmFtZSksIDAsIDcpID09PSAnU3ltYm9sKCcpIHtcbiAgICBuYW1lID0gJ1snICsgcmVwbGFjZSgkU3RyaW5nKG5hbWUpLCAvXlN5bWJvbFxcKChbXildKilcXCkuKiQvLCAnJDEnKSArICddJztcbiAgfVxuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmdldHRlcikgbmFtZSA9ICdnZXQgJyArIG5hbWU7XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuc2V0dGVyKSBuYW1lID0gJ3NldCAnICsgbmFtZTtcbiAgaWYgKCFoYXNPd24odmFsdWUsICduYW1lJykgfHwgKENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FICYmIHZhbHVlLm5hbWUgIT09IG5hbWUpKSB7XG4gICAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ25hbWUnLCB7IHZhbHVlOiBuYW1lLCBjb25maWd1cmFibGU6IHRydWUgfSk7XG4gICAgZWxzZSB2YWx1ZS5uYW1lID0gbmFtZTtcbiAgfVxuICBpZiAoQ09ORklHVVJBQkxFX0xFTkdUSCAmJiBvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnYXJpdHknKSAmJiB2YWx1ZS5sZW5ndGggIT09IG9wdGlvbnMuYXJpdHkpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ2xlbmd0aCcsIHsgdmFsdWU6IG9wdGlvbnMuYXJpdHkgfSk7XG4gIH1cbiAgdHJ5IHtcbiAgICBpZiAob3B0aW9ucyAmJiBoYXNPd24ob3B0aW9ucywgJ2NvbnN0cnVjdG9yJykgJiYgb3B0aW9ucy5jb25zdHJ1Y3Rvcikge1xuICAgICAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ3Byb3RvdHlwZScsIHsgd3JpdGFibGU6IGZhbHNlIH0pO1xuICAgIC8vIGluIFY4IH4gQ2hyb21lIDUzLCBwcm90b3R5cGVzIG9mIHNvbWUgbWV0aG9kcywgbGlrZSBgQXJyYXkucHJvdG90eXBlLnZhbHVlc2AsIGFyZSBub24td3JpdGFibGVcbiAgICB9IGVsc2UgaWYgKHZhbHVlLnByb3RvdHlwZSkgdmFsdWUucHJvdG90eXBlID0gdW5kZWZpbmVkO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIHZhciBzdGF0ZSA9IGVuZm9yY2VJbnRlcm5hbFN0YXRlKHZhbHVlKTtcbiAgaWYgKCFoYXNPd24oc3RhdGUsICdzb3VyY2UnKSkge1xuICAgIHN0YXRlLnNvdXJjZSA9IGpvaW4oVEVNUExBVEUsIHR5cGVvZiBuYW1lID09ICdzdHJpbmcnID8gbmFtZSA6ICcnKTtcbiAgfSByZXR1cm4gdmFsdWU7XG59O1xuXG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1leHRlbmQtbmF0aXZlIC0tIHJlcXVpcmVkXG5GdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgPSBtYWtlQnVpbHRJbihmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIGlzQ2FsbGFibGUodGhpcykgJiYgZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKS5zb3VyY2UgfHwgaW5zcGVjdFNvdXJjZSh0aGlzKTtcbn0sICd0b1N0cmluZycpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIG1ha2VCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge307XG4gIHZhciBzaW1wbGUgPSBvcHRpb25zLmVudW1lcmFibGU7XG4gIHZhciBuYW1lID0gb3B0aW9ucy5uYW1lICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5hbWUgOiBrZXk7XG4gIGlmIChpc0NhbGxhYmxlKHZhbHVlKSkgbWFrZUJ1aWx0SW4odmFsdWUsIG5hbWUsIG9wdGlvbnMpO1xuICBpZiAob3B0aW9ucy5nbG9iYWwpIHtcbiAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgICBlbHNlIGRlZmluZUdsb2JhbFByb3BlcnR5KGtleSwgdmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIW9wdGlvbnMudW5zYWZlKSBkZWxldGUgT1trZXldO1xuICAgICAgZWxzZSBpZiAoT1trZXldKSBzaW1wbGUgPSB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgICBlbHNlIGRlZmluZVByb3BlcnR5TW9kdWxlLmYoTywga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogIW9wdGlvbnMubm9uQ29uZmlndXJhYmxlLFxuICAgICAgd3JpdGFibGU6ICFvcHRpb25zLm5vbldyaXRhYmxlXG4gICAgfSk7XG4gIH0gcmV0dXJuIE87XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcblxuLy8gYE1hdGgudHJ1bmNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1tYXRoLnRydW5jXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tbWF0aC10cnVuYyAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE1hdGgudHJ1bmMgfHwgZnVuY3Rpb24gdHJ1bmMoeCkge1xuICB2YXIgbiA9ICt4O1xuICByZXR1cm4gKG4gPiAwID8gZmxvb3IgOiBjZWlsKShuKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRydW5jID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL21hdGgtdHJ1bmMnKTtcblxuLy8gYFRvSW50ZWdlck9ySW5maW5pdHlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2ludGVnZXJvcmluZmluaXR5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIgbnVtYmVyID0gK2FyZ3VtZW50O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICByZXR1cm4gbnVtYmVyICE9PSBudW1iZXIgfHwgbnVtYmVyID09PSAwID8gMCA6IHRydW5jKG51bWJlcik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBIZWxwZXIgZm9yIGEgcG9wdWxhciByZXBlYXRpbmcgY2FzZSBvZiB0aGUgc3BlYzpcbi8vIExldCBpbnRlZ2VyIGJlID8gVG9JbnRlZ2VyKGluZGV4KS5cbi8vIElmIGludGVnZXIgPCAwLCBsZXQgcmVzdWx0IGJlIG1heCgobGVuZ3RoICsgaW50ZWdlciksIDApOyBlbHNlIGxldCByZXN1bHQgYmUgbWluKGludGVnZXIsIGxlbmd0aCkuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIHZhciBpbnRlZ2VyID0gdG9JbnRlZ2VyT3JJbmZpbml0eShpbmRleCk7XG4gIHJldHVybiBpbnRlZ2VyIDwgMCA/IG1heChpbnRlZ2VyICsgbGVuZ3RoLCAwKSA6IG1pbihpbnRlZ2VyLCBsZW5ndGgpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG5cbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gYFRvTGVuZ3RoYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9sZW5ndGhcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBsZW4gPSB0b0ludGVnZXJPckluZmluaXR5KGFyZ3VtZW50KTtcbiAgcmV0dXJuIGxlbiA+IDAgPyBtaW4obGVuLCAweDFGRkZGRkZGRkZGRkZGKSA6IDA7IC8vIDIgKiogNTMgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xuXG4vLyBgTGVuZ3RoT2ZBcnJheUxpa2VgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1sZW5ndGhvZmFycmF5bGlrZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0b0xlbmd0aChvYmoubGVuZ3RoKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUueyBpbmRleE9mLCBpbmNsdWRlcyB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IGxlbmd0aE9mQXJyYXlMaWtlKE8pO1xuICAgIGlmIChsZW5ndGggPT09IDApIHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9PSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgICAgaWYgKHZhbHVlICE9PSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgaWYgKChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSAmJiBPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbiAgaW5jbHVkZXM6IGNyZWF0ZU1ldGhvZCh0cnVlKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmRleE9mYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxuICBpbmRleE9mOiBjcmVhdGVNZXRob2QoZmFsc2UpXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGluZGV4T2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmRleE9mO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIHB1c2ggPSB1bmN1cnJ5VGhpcyhbXS5wdXNoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgIWhhc093bihoaWRkZW5LZXlzLCBrZXkpICYmIGhhc093bihPLCBrZXkpICYmIHB1c2gocmVzdWx0LCBrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzT3duKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHB1c2gocmVzdWx0LCBrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIElFOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSBbXG4gICdjb25zdHJ1Y3RvcicsXG4gICdoYXNPd25Qcm9wZXJ0eScsXG4gICdpc1Byb3RvdHlwZU9mJyxcbiAgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcbiAgJ3RvTG9jYWxlU3RyaW5nJyxcbiAgJ3RvU3RyaW5nJyxcbiAgJ3ZhbHVlT2YnXG5dO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG5cbnZhciBoaWRkZW5LZXlzID0gZW51bUJ1Z0tleXMuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eW5hbWVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5bmFtZXMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlzeW1ib2xzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbnZhciBjb25jYXQgPSB1bmN1cnJ5VGhpcyhbXS5jb25jYXQpO1xuXG4vLyBhbGwgb2JqZWN0IGtleXMsIGluY2x1ZGVzIG5vbi1lbnVtZXJhYmxlIGFuZCBzeW1ib2xzXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ1JlZmxlY3QnLCAnb3duS2V5cycpIHx8IGZ1bmN0aW9uIG93bktleXMoaXQpIHtcbiAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlLmYoYW5PYmplY3QoaXQpKTtcbiAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mO1xuICByZXR1cm4gZ2V0T3duUHJvcGVydHlTeW1ib2xzID8gY29uY2F0KGtleXMsIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkpIDoga2V5cztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgb3duS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vd24ta2V5cycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSwgZXhjZXB0aW9ucykge1xuICB2YXIga2V5cyA9IG93bktleXMoc291cmNlKTtcbiAgdmFyIGRlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHlNb2R1bGUuZjtcbiAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoIWhhc093bih0YXJnZXQsIGtleSkgJiYgIShleGNlcHRpb25zICYmIGhhc093bihleGNlcHRpb25zLCBrZXkpKSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgIH1cbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciByZXBsYWNlbWVudCA9IC8jfFxcLnByb3RvdHlwZVxcLi87XG5cbnZhciBpc0ZvcmNlZCA9IGZ1bmN0aW9uIChmZWF0dXJlLCBkZXRlY3Rpb24pIHtcbiAgdmFyIHZhbHVlID0gZGF0YVtub3JtYWxpemUoZmVhdHVyZSldO1xuICByZXR1cm4gdmFsdWUgPT09IFBPTFlGSUxMID8gdHJ1ZVxuICAgIDogdmFsdWUgPT09IE5BVElWRSA/IGZhbHNlXG4gICAgOiBpc0NhbGxhYmxlKGRldGVjdGlvbikgPyBmYWlscyhkZXRlY3Rpb24pXG4gICAgOiAhIWRldGVjdGlvbjtcbn07XG5cbnZhciBub3JtYWxpemUgPSBpc0ZvcmNlZC5ub3JtYWxpemUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gIHJldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKHJlcGxhY2VtZW50LCAnLicpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG52YXIgZGF0YSA9IGlzRm9yY2VkLmRhdGEgPSB7fTtcbnZhciBOQVRJVkUgPSBpc0ZvcmNlZC5OQVRJVkUgPSAnTic7XG52YXIgUE9MWUZJTEwgPSBpc0ZvcmNlZC5QT0xZRklMTCA9ICdQJztcblxubW9kdWxlLmV4cG9ydHMgPSBpc0ZvcmNlZDtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJykuZjtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG52YXIgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMnKTtcbnZhciBpc0ZvcmNlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1mb3JjZWQnKTtcblxuLypcbiAgb3B0aW9ucy50YXJnZXQgICAgICAgICAtIG5hbWUgb2YgdGhlIHRhcmdldCBvYmplY3RcbiAgb3B0aW9ucy5nbG9iYWwgICAgICAgICAtIHRhcmdldCBpcyB0aGUgZ2xvYmFsIG9iamVjdFxuICBvcHRpb25zLnN0YXQgICAgICAgICAgIC0gZXhwb3J0IGFzIHN0YXRpYyBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnByb3RvICAgICAgICAgIC0gZXhwb3J0IGFzIHByb3RvdHlwZSBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnJlYWwgICAgICAgICAgIC0gcmVhbCBwcm90b3R5cGUgbWV0aG9kIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy5mb3JjZWQgICAgICAgICAtIGV4cG9ydCBldmVuIGlmIHRoZSBuYXRpdmUgZmVhdHVyZSBpcyBhdmFpbGFibGVcbiAgb3B0aW9ucy5iaW5kICAgICAgICAgICAtIGJpbmQgbWV0aG9kcyB0byB0aGUgdGFyZ2V0LCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMud3JhcCAgICAgICAgICAgLSB3cmFwIGNvbnN0cnVjdG9ycyB0byBwcmV2ZW50aW5nIGdsb2JhbCBwb2xsdXRpb24sIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy51bnNhZmUgICAgICAgICAtIHVzZSB0aGUgc2ltcGxlIGFzc2lnbm1lbnQgb2YgcHJvcGVydHkgaW5zdGVhZCBvZiBkZWxldGUgKyBkZWZpbmVQcm9wZXJ0eVxuICBvcHRpb25zLnNoYW0gICAgICAgICAgIC0gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICBvcHRpb25zLmVudW1lcmFibGUgICAgIC0gZXhwb3J0IGFzIGVudW1lcmFibGUgcHJvcGVydHlcbiAgb3B0aW9ucy5kb250Q2FsbEdldFNldCAtIHByZXZlbnQgY2FsbGluZyBhIGdldHRlciBvbiB0YXJnZXRcbiAgb3B0aW9ucy5uYW1lICAgICAgICAgICAtIHRoZSAubmFtZSBvZiB0aGUgZnVuY3Rpb24gaWYgaXQgZG9lcyBub3QgbWF0Y2ggdGhlIGtleVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdGlvbnMsIHNvdXJjZSkge1xuICB2YXIgVEFSR0VUID0gb3B0aW9ucy50YXJnZXQ7XG4gIHZhciBHTE9CQUwgPSBvcHRpb25zLmdsb2JhbDtcbiAgdmFyIFNUQVRJQyA9IG9wdGlvbnMuc3RhdDtcbiAgdmFyIEZPUkNFRCwgdGFyZ2V0LCBrZXksIHRhcmdldFByb3BlcnR5LCBzb3VyY2VQcm9wZXJ0eSwgZGVzY3JpcHRvcjtcbiAgaWYgKEdMT0JBTCkge1xuICAgIHRhcmdldCA9IGdsb2JhbFRoaXM7XG4gIH0gZWxzZSBpZiAoU1RBVElDKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsVGhpc1tUQVJHRVRdIHx8IGRlZmluZUdsb2JhbFByb3BlcnR5KFRBUkdFVCwge30pO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldCA9IGdsb2JhbFRoaXNbVEFSR0VUXSAmJiBnbG9iYWxUaGlzW1RBUkdFVF0ucHJvdG90eXBlO1xuICB9XG4gIGlmICh0YXJnZXQpIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIHNvdXJjZVByb3BlcnR5ID0gc291cmNlW2tleV07XG4gICAgaWYgKG9wdGlvbnMuZG9udENhbGxHZXRTZXQpIHtcbiAgICAgIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICAgICAgdGFyZ2V0UHJvcGVydHkgPSBkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IudmFsdWU7XG4gICAgfSBlbHNlIHRhcmdldFByb3BlcnR5ID0gdGFyZ2V0W2tleV07XG4gICAgRk9SQ0VEID0gaXNGb3JjZWQoR0xPQkFMID8ga2V5IDogVEFSR0VUICsgKFNUQVRJQyA/ICcuJyA6ICcjJykgKyBrZXksIG9wdGlvbnMuZm9yY2VkKTtcbiAgICAvLyBjb250YWluZWQgaW4gdGFyZ2V0XG4gICAgaWYgKCFGT1JDRUQgJiYgdGFyZ2V0UHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGVvZiBzb3VyY2VQcm9wZXJ0eSA9PSB0eXBlb2YgdGFyZ2V0UHJvcGVydHkpIGNvbnRpbnVlO1xuICAgICAgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyhzb3VyY2VQcm9wZXJ0eSwgdGFyZ2V0UHJvcGVydHkpO1xuICAgIH1cbiAgICAvLyBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gICAgaWYgKG9wdGlvbnMuc2hhbSB8fCAodGFyZ2V0UHJvcGVydHkgJiYgdGFyZ2V0UHJvcGVydHkuc2hhbSkpIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShzb3VyY2VQcm9wZXJ0eSwgJ3NoYW0nLCB0cnVlKTtcbiAgICB9XG4gICAgZGVmaW5lQnVpbHRJbih0YXJnZXQsIGtleSwgc291cmNlUHJvcGVydHksIG9wdGlvbnMpO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc1Byb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBQcm90b3R5cGUpIHtcbiAgaWYgKGlzUHJvdG90eXBlT2YoUHJvdG90eXBlLCBpdCkpIHJldHVybiBpdDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0luY29ycmVjdCBpbnZvY2F0aW9uJyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEYoKSB7IC8qIGVtcHR5ICovIH1cbiAgRi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBudWxsO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldHByb3RvdHlwZW9mIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2YobmV3IEYoKSkgIT09IEYucHJvdG90eXBlO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgQ09SUkVDVF9QUk9UT1RZUEVfR0VUVEVSID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcnJlY3QtcHJvdG90eXBlLWdldHRlcicpO1xuXG52YXIgSUVfUFJPVE8gPSBzaGFyZWRLZXkoJ0lFX1BST1RPJyk7XG52YXIgJE9iamVjdCA9IE9iamVjdDtcbnZhciBPYmplY3RQcm90b3R5cGUgPSAkT2JqZWN0LnByb3RvdHlwZTtcblxuLy8gYE9iamVjdC5nZXRQcm90b3R5cGVPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRwcm90b3R5cGVvZlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRwcm90b3R5cGVvZiAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IENPUlJFQ1RfUFJPVE9UWVBFX0dFVFRFUiA/ICRPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiAoTykge1xuICB2YXIgb2JqZWN0ID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXNPd24ob2JqZWN0LCBJRV9QUk9UTykpIHJldHVybiBvYmplY3RbSUVfUFJPVE9dO1xuICB2YXIgY29uc3RydWN0b3IgPSBvYmplY3QuY29uc3RydWN0b3I7XG4gIGlmIChpc0NhbGxhYmxlKGNvbnN0cnVjdG9yKSAmJiBvYmplY3QgaW5zdGFuY2VvZiBjb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBjb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIG9iamVjdCBpbnN0YW5jZW9mICRPYmplY3QgPyBPYmplY3RQcm90b3R5cGUgOiBudWxsO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgbWFrZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWFrZS1idWlsdC1pbicpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKSB7XG4gIGlmIChkZXNjcmlwdG9yLmdldCkgbWFrZUJ1aWx0SW4oZGVzY3JpcHRvci5nZXQsIG5hbWUsIHsgZ2V0dGVyOiB0cnVlIH0pO1xuICBpZiAoZGVzY3JpcHRvci5zZXQpIG1ha2VCdWlsdEluKGRlc2NyaXB0b3Iuc2V0LCBuYW1lLCB7IHNldHRlcjogdHJ1ZSB9KTtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5LmYodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwga2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3Rba2V5XSA9IHZhbHVlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG4vLyBgT2JqZWN0LmtleXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3Qua2V5c1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1rZXlzIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1ZycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBvYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzJyk7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydGllc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0aWVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnRpZXMgLS0gc2FmZVxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgJiYgIVY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBwcm9wcyA9IHRvSW5kZXhlZE9iamVjdChQcm9wZXJ0aWVzKTtcbiAgdmFyIGtleXMgPSBvYmplY3RLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsZW5ndGggPiBpbmRleCkgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXkgPSBrZXlzW2luZGV4KytdLCBwcm9wc1trZXldKTtcbiAgcmV0dXJuIE87XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ2RvY3VtZW50JywgJ2RvY3VtZW50RWxlbWVudCcpO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGdsb2JhbCBBY3RpdmVYT2JqZWN0IC0tIG9sZCBJRSwgV1NIICovXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZGVmaW5lUHJvcGVydGllc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnRpZXMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xudmFyIGh0bWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaHRtbCcpO1xudmFyIGRvY3VtZW50Q3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG5cbnZhciBHVCA9ICc+JztcbnZhciBMVCA9ICc8JztcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBTQ1JJUFQgPSAnc2NyaXB0JztcbnZhciBJRV9QUk9UTyA9IHNoYXJlZEtleSgnSUVfUFJPVE8nKTtcblxudmFyIEVtcHR5Q29uc3RydWN0b3IgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cbnZhciBzY3JpcHRUYWcgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICByZXR1cm4gTFQgKyBTQ1JJUFQgKyBHVCArIGNvbnRlbnQgKyBMVCArICcvJyArIFNDUklQVCArIEdUO1xufTtcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIEFjdGl2ZVggT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYID0gZnVuY3Rpb24gKGFjdGl2ZVhEb2N1bWVudCkge1xuICBhY3RpdmVYRG9jdW1lbnQud3JpdGUoc2NyaXB0VGFnKCcnKSk7XG4gIGFjdGl2ZVhEb2N1bWVudC5jbG9zZSgpO1xuICB2YXIgdGVtcCA9IGFjdGl2ZVhEb2N1bWVudC5wYXJlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1hc3NpZ25tZW50IC0tIGF2b2lkIG1lbW9yeSBsZWFrXG4gIGFjdGl2ZVhEb2N1bWVudCA9IG51bGw7XG4gIHJldHVybiB0ZW1wO1xufTtcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIE51bGxQcm90b09iamVjdFZpYUlGcmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IGRvY3VtZW50Q3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gIHZhciBKUyA9ICdqYXZhJyArIFNDUklQVCArICc6JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgaHRtbC5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNDc1XG4gIGlmcmFtZS5zcmMgPSBTdHJpbmcoSlMpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKHNjcmlwdFRhZygnZG9jdW1lbnQuRj1PYmplY3QnKSk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIHJldHVybiBpZnJhbWVEb2N1bWVudC5GO1xufTtcblxuLy8gQ2hlY2sgZm9yIGRvY3VtZW50LmRvbWFpbiBhbmQgYWN0aXZlIHggc3VwcG9ydFxuLy8gTm8gbmVlZCB0byB1c2UgYWN0aXZlIHggYXBwcm9hY2ggd2hlbiBkb2N1bWVudC5kb21haW4gaXMgbm90IHNldFxuLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lcy1zaGltcy9lczUtc2hpbS9pc3N1ZXMvMTUwXG4vLyB2YXJpYXRpb24gb2YgaHR0cHM6Ly9naXRodWIuY29tL2tpdGNhbWJyaWRnZS9lczUtc2hpbS9jb21taXQvNGY3MzhhYzA2NjM0NlxuLy8gYXZvaWQgSUUgR0MgYnVnXG52YXIgYWN0aXZlWERvY3VtZW50O1xudmFyIE51bGxQcm90b09iamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICBhY3RpdmVYRG9jdW1lbnQgPSBuZXcgQWN0aXZlWE9iamVjdCgnaHRtbGZpbGUnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogaWdub3JlICovIH1cbiAgTnVsbFByb3RvT2JqZWN0ID0gdHlwZW9mIGRvY3VtZW50ICE9ICd1bmRlZmluZWQnXG4gICAgPyBkb2N1bWVudC5kb21haW4gJiYgYWN0aXZlWERvY3VtZW50XG4gICAgICA/IE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVgoYWN0aXZlWERvY3VtZW50KSAvLyBvbGQgSUVcbiAgICAgIDogTnVsbFByb3RvT2JqZWN0VmlhSUZyYW1lKClcbiAgICA6IE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVgoYWN0aXZlWERvY3VtZW50KTsgLy8gV1NIXG4gIHZhciBsZW5ndGggPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkgZGVsZXRlIE51bGxQcm90b09iamVjdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2xlbmd0aF1dO1xuICByZXR1cm4gTnVsbFByb3RvT2JqZWN0KCk7XG59O1xuXG5oaWRkZW5LZXlzW0lFX1BST1RPXSA9IHRydWU7XG5cbi8vIGBPYmplY3QuY3JlYXRlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmNyZWF0ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1jcmVhdGUgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlDb25zdHJ1Y3RvcltQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5Q29uc3RydWN0b3IoKTtcbiAgICBFbXB0eUNvbnN0cnVjdG9yW1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IE51bGxQcm90b09iamVjdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZGVmaW5lUHJvcGVydGllc01vZHVsZS5mKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZScpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4nKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgPSBmYWxzZTtcblxuLy8gYCVJdGVyYXRvclByb3RvdHlwZSVgIG9iamVjdFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy0laXRlcmF0b3Jwcm90b3R5cGUlLW9iamVjdFxudmFyIEl0ZXJhdG9yUHJvdG90eXBlLCBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUsIGFycmF5SXRlcmF0b3I7XG5cbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLWFycmF5LXByb3RvdHlwZS1rZXlzIC0tIHNhZmUgKi9cbmlmIChbXS5rZXlzKSB7XG4gIGFycmF5SXRlcmF0b3IgPSBbXS5rZXlzKCk7XG4gIC8vIFNhZmFyaSA4IGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICBpZiAoISgnbmV4dCcgaW4gYXJyYXlJdGVyYXRvcikpIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgPSB0cnVlO1xuICBlbHNlIHtcbiAgICBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZihnZXRQcm90b3R5cGVPZihhcnJheUl0ZXJhdG9yKSk7XG4gICAgaWYgKFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSkgSXRlcmF0b3JQcm90b3R5cGUgPSBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cbn1cblxudmFyIE5FV19JVEVSQVRPUl9QUk9UT1RZUEUgPSAhaXNPYmplY3QoSXRlcmF0b3JQcm90b3R5cGUpIHx8IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRlc3QgPSB7fTtcbiAgLy8gRkY0NC0gbGVnYWN5IGl0ZXJhdG9ycyBjYXNlXG4gIHJldHVybiBJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0uY2FsbCh0ZXN0KSAhPT0gdGVzdDtcbn0pO1xuXG5pZiAoTkVXX0lURVJBVE9SX1BST1RPVFlQRSkgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbmVsc2UgaWYgKElTX1BVUkUpIEl0ZXJhdG9yUHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcblxuLy8gYCVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSVpdGVyYXRvcnByb3RvdHlwZSUtQEBpdGVyYXRvclxuaWYgKCFpc0NhbGxhYmxlKEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXSkpIHtcbiAgZGVmaW5lQnVpbHRJbihJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBJdGVyYXRvclByb3RvdHlwZTogSXRlcmF0b3JQcm90b3R5cGUsXG4gIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlM6IEJVR0dZX1NBRkFSSV9JVEVSQVRPUlNcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4taW5zdGFuY2UnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YnKTtcbnZhciBkZWZpbmVCdWlsdEluQWNjZXNzb3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluLWFjY2Vzc29yJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycy1jb3JlJykuSXRlcmF0b3JQcm90b3R5cGU7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcblxudmFyIENPTlNUUlVDVE9SID0gJ2NvbnN0cnVjdG9yJztcbnZhciBJVEVSQVRPUiA9ICdJdGVyYXRvcic7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG52YXIgTmF0aXZlSXRlcmF0b3IgPSBnbG9iYWxUaGlzW0lURVJBVE9SXTtcblxuLy8gRkY1Ni0gaGF2ZSBub24tc3RhbmRhcmQgZ2xvYmFsIGhlbHBlciBgSXRlcmF0b3JgXG52YXIgRk9SQ0VEID0gSVNfUFVSRVxuICB8fCAhaXNDYWxsYWJsZShOYXRpdmVJdGVyYXRvcilcbiAgfHwgTmF0aXZlSXRlcmF0b3IucHJvdG90eXBlICE9PSBJdGVyYXRvclByb3RvdHlwZVxuICAvLyBGRjQ0LSBub24tc3RhbmRhcmQgYEl0ZXJhdG9yYCBwYXNzZXMgcHJldmlvdXMgdGVzdHNcbiAgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHsgTmF0aXZlSXRlcmF0b3Ioe30pOyB9KTtcblxudmFyIEl0ZXJhdG9yQ29uc3RydWN0b3IgPSBmdW5jdGlvbiBJdGVyYXRvcigpIHtcbiAgYW5JbnN0YW5jZSh0aGlzLCBJdGVyYXRvclByb3RvdHlwZSk7XG4gIGlmIChnZXRQcm90b3R5cGVPZih0aGlzKSA9PT0gSXRlcmF0b3JQcm90b3R5cGUpIHRocm93IG5ldyAkVHlwZUVycm9yKCdBYnN0cmFjdCBjbGFzcyBJdGVyYXRvciBub3QgZGlyZWN0bHkgY29uc3RydWN0YWJsZScpO1xufTtcblxudmFyIGRlZmluZUl0ZXJhdG9yUHJvdG90eXBlQWNjZXNzb3IgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICBpZiAoREVTQ1JJUFRPUlMpIHtcbiAgICBkZWZpbmVCdWlsdEluQWNjZXNzb3IoSXRlcmF0b3JQcm90b3R5cGUsIGtleSwge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChyZXBsYWNlbWVudCkge1xuICAgICAgICBhbk9iamVjdCh0aGlzKTtcbiAgICAgICAgaWYgKHRoaXMgPT09IEl0ZXJhdG9yUHJvdG90eXBlKSB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIllvdSBjYW4ndCByZWRlZmluZSB0aGlzIHByb3BlcnR5XCIpO1xuICAgICAgICBpZiAoaGFzT3duKHRoaXMsIGtleSkpIHRoaXNba2V5XSA9IHJlcGxhY2VtZW50O1xuICAgICAgICBlbHNlIGNyZWF0ZVByb3BlcnR5KHRoaXMsIGtleSwgcmVwbGFjZW1lbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2UgSXRlcmF0b3JQcm90b3R5cGVba2V5XSA9IHZhbHVlO1xufTtcblxuaWYgKCFoYXNPd24oSXRlcmF0b3JQcm90b3R5cGUsIFRPX1NUUklOR19UQUcpKSBkZWZpbmVJdGVyYXRvclByb3RvdHlwZUFjY2Vzc29yKFRPX1NUUklOR19UQUcsIElURVJBVE9SKTtcblxuaWYgKEZPUkNFRCB8fCAhaGFzT3duKEl0ZXJhdG9yUHJvdG90eXBlLCBDT05TVFJVQ1RPUikgfHwgSXRlcmF0b3JQcm90b3R5cGVbQ09OU1RSVUNUT1JdID09PSBPYmplY3QpIHtcbiAgZGVmaW5lSXRlcmF0b3JQcm90b3R5cGVBY2Nlc3NvcihDT05TVFJVQ1RPUiwgSXRlcmF0b3JDb25zdHJ1Y3Rvcik7XG59XG5cbkl0ZXJhdG9yQ29uc3RydWN0b3IucHJvdG90eXBlID0gSXRlcmF0b3JQcm90b3R5cGU7XG5cbi8vIGBJdGVyYXRvcmAgY29uc3RydWN0b3Jcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXRlcmF0b3JcbiQoeyBnbG9iYWw6IHRydWUsIGNvbnN0cnVjdG9yOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIEl0ZXJhdG9yOiBJdGVyYXRvckNvbnN0cnVjdG9yXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxucmVxdWlyZSgnLi4vbW9kdWxlcy9lcy5pdGVyYXRvci5jb25zdHJ1Y3RvcicpO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGBHZXRJdGVyYXRvckRpcmVjdChvYmopYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9wcm9wb3NhbC1pdGVyYXRvci1oZWxwZXJzLyNzZWMtZ2V0aXRlcmF0b3JkaXJlY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4ge1xuICAgIGl0ZXJhdG9yOiBvYmosXG4gICAgbmV4dDogb2JqLm5leHQsXG4gICAgZG9uZTogZmFsc2VcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc3JjLCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIGRlZmluZUJ1aWx0SW4odGFyZ2V0LCBrZXksIHNyY1trZXldLCBvcHRpb25zKTtcbiAgcmV0dXJuIHRhcmdldDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gYENyZWF0ZUl0ZXJSZXN1bHRPYmplY3RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1jcmVhdGVpdGVycmVzdWx0b2JqZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgZG9uZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6IGRvbmUgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBraW5kLCB2YWx1ZSkge1xuICB2YXIgaW5uZXJSZXN1bHQsIGlubmVyRXJyb3I7XG4gIGFuT2JqZWN0KGl0ZXJhdG9yKTtcbiAgdHJ5IHtcbiAgICBpbm5lclJlc3VsdCA9IGdldE1ldGhvZChpdGVyYXRvciwgJ3JldHVybicpO1xuICAgIGlmICghaW5uZXJSZXN1bHQpIHtcbiAgICAgIGlmIChraW5kID09PSAndGhyb3cnKSB0aHJvdyB2YWx1ZTtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgaW5uZXJSZXN1bHQgPSBjYWxsKGlubmVyUmVzdWx0LCBpdGVyYXRvcik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaW5uZXJFcnJvciA9IHRydWU7XG4gICAgaW5uZXJSZXN1bHQgPSBlcnJvcjtcbiAgfVxuICBpZiAoa2luZCA9PT0gJ3Rocm93JykgdGhyb3cgdmFsdWU7XG4gIGlmIChpbm5lckVycm9yKSB0aHJvdyBpbm5lclJlc3VsdDtcbiAgYW5PYmplY3QoaW5uZXJSZXN1bHQpO1xuICByZXR1cm4gdmFsdWU7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZScpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBkZWZpbmVCdWlsdElucyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW5zJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzLWNvcmUnKS5JdGVyYXRvclByb3RvdHlwZTtcbnZhciBjcmVhdGVJdGVyUmVzdWx0T2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1pdGVyLXJlc3VsdC1vYmplY3QnKTtcbnZhciBpdGVyYXRvckNsb3NlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlJyk7XG5cbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xudmFyIElURVJBVE9SX0hFTFBFUiA9ICdJdGVyYXRvckhlbHBlcic7XG52YXIgV1JBUF9GT1JfVkFMSURfSVRFUkFUT1IgPSAnV3JhcEZvclZhbGlkSXRlcmF0b3InO1xudmFyIHNldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLnNldDtcblxudmFyIGNyZWF0ZUl0ZXJhdG9yUHJveHlQcm90b3R5cGUgPSBmdW5jdGlvbiAoSVNfSVRFUkFUT1IpIHtcbiAgdmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldHRlckZvcihJU19JVEVSQVRPUiA/IFdSQVBfRk9SX1ZBTElEX0lURVJBVE9SIDogSVRFUkFUT1JfSEVMUEVSKTtcblxuICByZXR1cm4gZGVmaW5lQnVpbHRJbnMoY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKSwge1xuICAgIG5leHQ6IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpO1xuICAgICAgLy8gZm9yIHNpbXBsaWZpY2F0aW9uOlxuICAgICAgLy8gICBmb3IgYCVXcmFwRm9yVmFsaWRJdGVyYXRvclByb3RvdHlwZSUubmV4dGAgb3Igd2l0aCBgc3RhdGUucmV0dXJuSGFuZGxlclJlc3VsdGAgb3VyIGBuZXh0SGFuZGxlcmAgcmV0dXJucyBgSXRlclJlc3VsdE9iamVjdGBcbiAgICAgIC8vICAgZm9yIGAlSXRlcmF0b3JIZWxwZXJQcm90b3R5cGUlLm5leHRgIC0ganVzdCBhIHZhbHVlXG4gICAgICBpZiAoSVNfSVRFUkFUT1IpIHJldHVybiBzdGF0ZS5uZXh0SGFuZGxlcigpO1xuICAgICAgaWYgKHN0YXRlLmRvbmUpIHJldHVybiBjcmVhdGVJdGVyUmVzdWx0T2JqZWN0KHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gc3RhdGUubmV4dEhhbmRsZXIoKTtcbiAgICAgICAgcmV0dXJuIHN0YXRlLnJldHVybkhhbmRsZXJSZXN1bHQgPyByZXN1bHQgOiBjcmVhdGVJdGVyUmVzdWx0T2JqZWN0KHJlc3VsdCwgc3RhdGUuZG9uZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBzdGF0ZS5kb25lID0gdHJ1ZTtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgfSxcbiAgICAncmV0dXJuJzogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKTtcbiAgICAgIHZhciBpdGVyYXRvciA9IHN0YXRlLml0ZXJhdG9yO1xuICAgICAgc3RhdGUuZG9uZSA9IHRydWU7XG4gICAgICBpZiAoSVNfSVRFUkFUT1IpIHtcbiAgICAgICAgdmFyIHJldHVybk1ldGhvZCA9IGdldE1ldGhvZChpdGVyYXRvciwgJ3JldHVybicpO1xuICAgICAgICByZXR1cm4gcmV0dXJuTWV0aG9kID8gY2FsbChyZXR1cm5NZXRob2QsIGl0ZXJhdG9yKSA6IGNyZWF0ZUl0ZXJSZXN1bHRPYmplY3QodW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGlmIChzdGF0ZS5pbm5lcikgdHJ5IHtcbiAgICAgICAgaXRlcmF0b3JDbG9zZShzdGF0ZS5pbm5lci5pdGVyYXRvciwgJ25vcm1hbCcpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsICd0aHJvdycsIGVycm9yKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVyYXRvcikgaXRlcmF0b3JDbG9zZShpdGVyYXRvciwgJ25vcm1hbCcpO1xuICAgICAgcmV0dXJuIGNyZWF0ZUl0ZXJSZXN1bHRPYmplY3QodW5kZWZpbmVkLCB0cnVlKTtcbiAgICB9XG4gIH0pO1xufTtcblxudmFyIFdyYXBGb3JWYWxpZEl0ZXJhdG9yUHJvdG90eXBlID0gY3JlYXRlSXRlcmF0b3JQcm94eVByb3RvdHlwZSh0cnVlKTtcbnZhciBJdGVyYXRvckhlbHBlclByb3RvdHlwZSA9IGNyZWF0ZUl0ZXJhdG9yUHJveHlQcm90b3R5cGUoZmFsc2UpO1xuXG5jcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoSXRlcmF0b3JIZWxwZXJQcm90b3R5cGUsIFRPX1NUUklOR19UQUcsICdJdGVyYXRvciBIZWxwZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmV4dEhhbmRsZXIsIElTX0lURVJBVE9SLCBSRVRVUk5fSEFORExFUl9SRVNVTFQpIHtcbiAgdmFyIEl0ZXJhdG9yUHJveHkgPSBmdW5jdGlvbiBJdGVyYXRvcihyZWNvcmQsIHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlKSB7XG4gICAgICBzdGF0ZS5pdGVyYXRvciA9IHJlY29yZC5pdGVyYXRvcjtcbiAgICAgIHN0YXRlLm5leHQgPSByZWNvcmQubmV4dDtcbiAgICB9IGVsc2Ugc3RhdGUgPSByZWNvcmQ7XG4gICAgc3RhdGUudHlwZSA9IElTX0lURVJBVE9SID8gV1JBUF9GT1JfVkFMSURfSVRFUkFUT1IgOiBJVEVSQVRPUl9IRUxQRVI7XG4gICAgc3RhdGUucmV0dXJuSGFuZGxlclJlc3VsdCA9ICEhUkVUVVJOX0hBTkRMRVJfUkVTVUxUO1xuICAgIHN0YXRlLm5leHRIYW5kbGVyID0gbmV4dEhhbmRsZXI7XG4gICAgc3RhdGUuY291bnRlciA9IDA7XG4gICAgc3RhdGUuZG9uZSA9IGZhbHNlO1xuICAgIHNldEludGVybmFsU3RhdGUodGhpcywgc3RhdGUpO1xuICB9O1xuXG4gIEl0ZXJhdG9yUHJveHkucHJvdG90eXBlID0gSVNfSVRFUkFUT1IgPyBXcmFwRm9yVmFsaWRJdGVyYXRvclByb3RvdHlwZSA6IEl0ZXJhdG9ySGVscGVyUHJvdG90eXBlO1xuXG4gIHJldHVybiBJdGVyYXRvclByb3h5O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgaXRlcmF0b3JDbG9zZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1jbG9zZScpO1xuXG4vLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBFTlRSSUVTKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEVOVFJJRVMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCAndGhyb3cnLCBlcnJvcik7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBnZXRJdGVyYXRvckRpcmVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItZGlyZWN0Jyk7XG52YXIgY3JlYXRlSXRlcmF0b3JQcm94eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1jcmVhdGUtcHJveHknKTtcbnZhciBjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NhbGwtd2l0aC1zYWZlLWl0ZXJhdGlvbi1jbG9zaW5nJyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG5cbnZhciBJdGVyYXRvclByb3h5ID0gY3JlYXRlSXRlcmF0b3JQcm94eShmdW5jdGlvbiAoKSB7XG4gIHZhciBpdGVyYXRvciA9IHRoaXMuaXRlcmF0b3I7XG4gIHZhciBwcmVkaWNhdGUgPSB0aGlzLnByZWRpY2F0ZTtcbiAgdmFyIG5leHQgPSB0aGlzLm5leHQ7XG4gIHZhciByZXN1bHQsIGRvbmUsIHZhbHVlO1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIHJlc3VsdCA9IGFuT2JqZWN0KGNhbGwobmV4dCwgaXRlcmF0b3IpKTtcbiAgICBkb25lID0gdGhpcy5kb25lID0gISFyZXN1bHQuZG9uZTtcbiAgICBpZiAoZG9uZSkgcmV0dXJuO1xuICAgIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgIGlmIChjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nKGl0ZXJhdG9yLCBwcmVkaWNhdGUsIFt2YWx1ZSwgdGhpcy5jb3VudGVyKytdLCB0cnVlKSkgcmV0dXJuIHZhbHVlO1xuICB9XG59KTtcblxuLy8gYEl0ZXJhdG9yLnByb3RvdHlwZS5maWx0ZXJgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pdGVyYXRvci5wcm90b3R5cGUuZmlsdGVyXG4kKHsgdGFyZ2V0OiAnSXRlcmF0b3InLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiBJU19QVVJFIH0sIHtcbiAgZmlsdGVyOiBmdW5jdGlvbiBmaWx0ZXIocHJlZGljYXRlKSB7XG4gICAgYW5PYmplY3QodGhpcyk7XG4gICAgYUNhbGxhYmxlKHByZWRpY2F0ZSk7XG4gICAgcmV0dXJuIG5ldyBJdGVyYXRvclByb3h5KGdldEl0ZXJhdG9yRGlyZWN0KHRoaXMpLCB7XG4gICAgICBwcmVkaWNhdGU6IHByZWRpY2F0ZVxuICAgIH0pO1xuICB9XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxucmVxdWlyZSgnLi4vbW9kdWxlcy9lcy5pdGVyYXRvci5maWx0ZXInKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2xhc3NvZlJhdyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbikge1xuICAvLyBOYXNob3JuIGJ1ZzpcbiAgLy8gICBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTEyOFxuICAvLyAgIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xMTMwXG4gIGlmIChjbGFzc29mUmF3KGZuKSA9PT0gJ0Z1bmN0aW9uJykgcmV0dXJuIHVuY3VycnlUaGlzKGZuKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy1jbGF1c2UnKTtcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBiaW5kID0gdW5jdXJyeVRoaXModW5jdXJyeVRoaXMuYmluZCk7XG5cbi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQpIHtcbiAgYUNhbGxhYmxlKGZuKTtcbiAgcmV0dXJuIHRoYXQgPT09IHVuZGVmaW5lZCA/IGZuIDogTkFUSVZFX0JJTkQgPyBiaW5kKGZuLCB0aGF0KSA6IGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG90eXBlID0gQXJyYXkucHJvdG90eXBlO1xuXG4vLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvdHlwZVtJVEVSQVRPUl0gPT09IGl0KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciB0ZXN0ID0ge307XG5cbnRlc3RbVE9fU1RSSU5HX1RBR10gPSAneic7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RyaW5nKHRlc3QpID09PSAnW29iamVjdCB6XSc7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIFRPX1NUUklOR19UQUdfU1VQUE9SVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgY2xhc3NvZlJhdyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIENPUlJFQ1RfQVJHVU1FTlRTID0gY2xhc3NvZlJhdyhmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbi8vIGdldHRpbmcgdGFnIGZyb20gRVM2KyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2Bcbm1vZHVsZS5leHBvcnRzID0gVE9fU1RSSU5HX1RBR19TVVBQT1JUID8gY2xhc3NvZlJhdyA6IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgdGFnLCByZXN1bHQ7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mICh0YWcgPSB0cnlHZXQoTyA9ICRPYmplY3QoaXQpLCBUT19TVFJJTkdfVEFHKSkgPT0gJ3N0cmluZycgPyB0YWdcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IENPUlJFQ1RfQVJHVU1FTlRTID8gY2xhc3NvZlJhdyhPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChyZXN1bHQgPSBjbGFzc29mUmF3KE8pKSA9PT0gJ09iamVjdCcgJiYgaXNDYWxsYWJsZShPLmNhbGxlZSkgPyAnQXJndW1lbnRzJyA6IHJlc3VsdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZicpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc051bGxPclVuZGVmaW5lZChpdCkpIHJldHVybiBnZXRNZXRob2QoaXQsIElURVJBVE9SKVxuICAgIHx8IGdldE1ldGhvZChpdCwgJ0BAaXRlcmF0b3InKVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRyeVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RyeS10by1zdHJpbmcnKTtcbnZhciBnZXRJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCwgdXNpbmdJdGVyYXRvcikge1xuICB2YXIgaXRlcmF0b3JNZXRob2QgPSBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGdldEl0ZXJhdG9yTWV0aG9kKGFyZ3VtZW50KSA6IHVzaW5nSXRlcmF0b3I7XG4gIGlmIChhQ2FsbGFibGUoaXRlcmF0b3JNZXRob2QpKSByZXR1cm4gYW5PYmplY3QoY2FsbChpdGVyYXRvck1ldGhvZCwgYXJndW1lbnQpKTtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IodHJ5VG9TdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgaXRlcmFibGUnKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xudmFyIGlzQXJyYXlJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheS1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xudmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZicpO1xudmFyIGdldEl0ZXJhdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvcicpO1xudmFyIGdldEl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBpdGVyYXRvckNsb3NlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG52YXIgUmVzdWx0ID0gZnVuY3Rpb24gKHN0b3BwZWQsIHJlc3VsdCkge1xuICB0aGlzLnN0b3BwZWQgPSBzdG9wcGVkO1xuICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcbn07XG5cbnZhciBSZXN1bHRQcm90b3R5cGUgPSBSZXN1bHQucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgdW5ib3VuZEZ1bmN0aW9uLCBvcHRpb25zKSB7XG4gIHZhciB0aGF0ID0gb3B0aW9ucyAmJiBvcHRpb25zLnRoYXQ7XG4gIHZhciBBU19FTlRSSUVTID0gISEob3B0aW9ucyAmJiBvcHRpb25zLkFTX0VOVFJJRVMpO1xuICB2YXIgSVNfUkVDT1JEID0gISEob3B0aW9ucyAmJiBvcHRpb25zLklTX1JFQ09SRCk7XG4gIHZhciBJU19JVEVSQVRPUiA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5JU19JVEVSQVRPUik7XG4gIHZhciBJTlRFUlJVUFRFRCA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5JTlRFUlJVUFRFRCk7XG4gIHZhciBmbiA9IGJpbmQodW5ib3VuZEZ1bmN0aW9uLCB0aGF0KTtcbiAgdmFyIGl0ZXJhdG9yLCBpdGVyRm4sIGluZGV4LCBsZW5ndGgsIHJlc3VsdCwgbmV4dCwgc3RlcDtcblxuICB2YXIgc3RvcCA9IGZ1bmN0aW9uIChjb25kaXRpb24pIHtcbiAgICBpZiAoaXRlcmF0b3IpIGl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsICdub3JtYWwnLCBjb25kaXRpb24pO1xuICAgIHJldHVybiBuZXcgUmVzdWx0KHRydWUsIGNvbmRpdGlvbik7XG4gIH07XG5cbiAgdmFyIGNhbGxGbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmIChBU19FTlRSSUVTKSB7XG4gICAgICBhbk9iamVjdCh2YWx1ZSk7XG4gICAgICByZXR1cm4gSU5URVJSVVBURUQgPyBmbih2YWx1ZVswXSwgdmFsdWVbMV0sIHN0b3ApIDogZm4odmFsdWVbMF0sIHZhbHVlWzFdKTtcbiAgICB9IHJldHVybiBJTlRFUlJVUFRFRCA/IGZuKHZhbHVlLCBzdG9wKSA6IGZuKHZhbHVlKTtcbiAgfTtcblxuICBpZiAoSVNfUkVDT1JEKSB7XG4gICAgaXRlcmF0b3IgPSBpdGVyYWJsZS5pdGVyYXRvcjtcbiAgfSBlbHNlIGlmIChJU19JVEVSQVRPUikge1xuICAgIGl0ZXJhdG9yID0gaXRlcmFibGU7XG4gIH0gZWxzZSB7XG4gICAgaXRlckZuID0gZ2V0SXRlcmF0b3JNZXRob2QoaXRlcmFibGUpO1xuICAgIGlmICghaXRlckZuKSB0aHJvdyBuZXcgJFR5cGVFcnJvcih0cnlUb1N0cmluZyhpdGVyYWJsZSkgKyAnIGlzIG5vdCBpdGVyYWJsZScpO1xuICAgIC8vIG9wdGltaXNhdGlvbiBmb3IgYXJyYXkgaXRlcmF0b3JzXG4gICAgaWYgKGlzQXJyYXlJdGVyYXRvck1ldGhvZChpdGVyRm4pKSB7XG4gICAgICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoaXRlcmFibGUpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgICByZXN1bHQgPSBjYWxsRm4oaXRlcmFibGVbaW5kZXhdKTtcbiAgICAgICAgaWYgKHJlc3VsdCAmJiBpc1Byb3RvdHlwZU9mKFJlc3VsdFByb3RvdHlwZSwgcmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0gcmV0dXJuIG5ldyBSZXN1bHQoZmFsc2UpO1xuICAgIH1cbiAgICBpdGVyYXRvciA9IGdldEl0ZXJhdG9yKGl0ZXJhYmxlLCBpdGVyRm4pO1xuICB9XG5cbiAgbmV4dCA9IElTX1JFQ09SRCA/IGl0ZXJhYmxlLm5leHQgOiBpdGVyYXRvci5uZXh0O1xuICB3aGlsZSAoIShzdGVwID0gY2FsbChuZXh0LCBpdGVyYXRvcikpLmRvbmUpIHtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gY2FsbEZuKHN0ZXAudmFsdWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCAndGhyb3cnLCBlcnJvcik7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgcmVzdWx0ID09ICdvYmplY3QnICYmIHJlc3VsdCAmJiBpc1Byb3RvdHlwZU9mKFJlc3VsdFByb3RvdHlwZSwgcmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgfSByZXR1cm4gbmV3IFJlc3VsdChmYWxzZSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGl0ZXJhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0ZScpO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZ2V0SXRlcmF0b3JEaXJlY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLWRpcmVjdCcpO1xuXG4vLyBgSXRlcmF0b3IucHJvdG90eXBlLmZpbmRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pdGVyYXRvci5wcm90b3R5cGUuZmluZFxuJCh7IHRhcmdldDogJ0l0ZXJhdG9yJywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUgfSwge1xuICBmaW5kOiBmdW5jdGlvbiBmaW5kKHByZWRpY2F0ZSkge1xuICAgIGFuT2JqZWN0KHRoaXMpO1xuICAgIGFDYWxsYWJsZShwcmVkaWNhdGUpO1xuICAgIHZhciByZWNvcmQgPSBnZXRJdGVyYXRvckRpcmVjdCh0aGlzKTtcbiAgICB2YXIgY291bnRlciA9IDA7XG4gICAgcmV0dXJuIGl0ZXJhdGUocmVjb3JkLCBmdW5jdGlvbiAodmFsdWUsIHN0b3ApIHtcbiAgICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGNvdW50ZXIrKykpIHJldHVybiBzdG9wKHZhbHVlKTtcbiAgICB9LCB7IElTX1JFQ09SRDogdHJ1ZSwgSU5URVJSVVBURUQ6IHRydWUgfSkucmVzdWx0O1xuICB9XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxucmVxdWlyZSgnLi4vbW9kdWxlcy9lcy5pdGVyYXRvci5maW5kJyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGdldEl0ZXJhdG9yRGlyZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvci1kaXJlY3QnKTtcbnZhciBnZXRJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaiwgc3RyaW5nSGFuZGxpbmcpIHtcbiAgaWYgKCFzdHJpbmdIYW5kbGluZyB8fCB0eXBlb2Ygb2JqICE9PSAnc3RyaW5nJykgYW5PYmplY3Qob2JqKTtcbiAgdmFyIG1ldGhvZCA9IGdldEl0ZXJhdG9yTWV0aG9kKG9iaik7XG4gIHJldHVybiBnZXRJdGVyYXRvckRpcmVjdChhbk9iamVjdChtZXRob2QgIT09IHVuZGVmaW5lZCA/IGNhbGwobWV0aG9kLCBvYmopIDogb2JqKSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZ2V0SXRlcmF0b3JEaXJlY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLWRpcmVjdCcpO1xudmFyIGdldEl0ZXJhdG9yRmxhdHRlbmFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLWZsYXR0ZW5hYmxlJyk7XG52YXIgY3JlYXRlSXRlcmF0b3JQcm94eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1jcmVhdGUtcHJveHknKTtcbnZhciBpdGVyYXRvckNsb3NlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlJyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG5cbnZhciBJdGVyYXRvclByb3h5ID0gY3JlYXRlSXRlcmF0b3JQcm94eShmdW5jdGlvbiAoKSB7XG4gIHZhciBpdGVyYXRvciA9IHRoaXMuaXRlcmF0b3I7XG4gIHZhciBtYXBwZXIgPSB0aGlzLm1hcHBlcjtcbiAgdmFyIHJlc3VsdCwgaW5uZXI7XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBpZiAoaW5uZXIgPSB0aGlzLmlubmVyKSB0cnkge1xuICAgICAgcmVzdWx0ID0gYW5PYmplY3QoY2FsbChpbm5lci5uZXh0LCBpbm5lci5pdGVyYXRvcikpO1xuICAgICAgaWYgKCFyZXN1bHQuZG9uZSkgcmV0dXJuIHJlc3VsdC52YWx1ZTtcbiAgICAgIHRoaXMuaW5uZXIgPSBudWxsO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7IGl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsICd0aHJvdycsIGVycm9yKTsgfVxuXG4gICAgcmVzdWx0ID0gYW5PYmplY3QoY2FsbCh0aGlzLm5leHQsIGl0ZXJhdG9yKSk7XG5cbiAgICBpZiAodGhpcy5kb25lID0gISFyZXN1bHQuZG9uZSkgcmV0dXJuO1xuXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuaW5uZXIgPSBnZXRJdGVyYXRvckZsYXR0ZW5hYmxlKG1hcHBlcihyZXN1bHQudmFsdWUsIHRoaXMuY291bnRlcisrKSwgZmFsc2UpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7IGl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsICd0aHJvdycsIGVycm9yKTsgfVxuICB9XG59KTtcblxuLy8gYEl0ZXJhdG9yLnByb3RvdHlwZS5mbGF0TWFwYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXRlcmF0b3IucHJvdG90eXBlLmZsYXRtYXBcbiQoeyB0YXJnZXQ6ICdJdGVyYXRvcicsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6IElTX1BVUkUgfSwge1xuICBmbGF0TWFwOiBmdW5jdGlvbiBmbGF0TWFwKG1hcHBlcikge1xuICAgIGFuT2JqZWN0KHRoaXMpO1xuICAgIGFDYWxsYWJsZShtYXBwZXIpO1xuICAgIHJldHVybiBuZXcgSXRlcmF0b3JQcm94eShnZXRJdGVyYXRvckRpcmVjdCh0aGlzKSwge1xuICAgICAgbWFwcGVyOiBtYXBwZXIsXG4gICAgICBpbm5lcjogbnVsbFxuICAgIH0pO1xuICB9XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxucmVxdWlyZSgnLi4vbW9kdWxlcy9lcy5pdGVyYXRvci5mbGF0LW1hcCcpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGl0ZXJhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0ZScpO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZ2V0SXRlcmF0b3JEaXJlY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLWRpcmVjdCcpO1xuXG4vLyBgSXRlcmF0b3IucHJvdG90eXBlLnNvbWVgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pdGVyYXRvci5wcm90b3R5cGUuc29tZVxuJCh7IHRhcmdldDogJ0l0ZXJhdG9yJywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUgfSwge1xuICBzb21lOiBmdW5jdGlvbiBzb21lKHByZWRpY2F0ZSkge1xuICAgIGFuT2JqZWN0KHRoaXMpO1xuICAgIGFDYWxsYWJsZShwcmVkaWNhdGUpO1xuICAgIHZhciByZWNvcmQgPSBnZXRJdGVyYXRvckRpcmVjdCh0aGlzKTtcbiAgICB2YXIgY291bnRlciA9IDA7XG4gICAgcmV0dXJuIGl0ZXJhdGUocmVjb3JkLCBmdW5jdGlvbiAodmFsdWUsIHN0b3ApIHtcbiAgICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGNvdW50ZXIrKykpIHJldHVybiBzdG9wKCk7XG4gICAgfSwgeyBJU19SRUNPUkQ6IHRydWUsIElOVEVSUlVQVEVEOiB0cnVlIH0pLnN0b3BwZWQ7XG4gIH1cbn0pO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzLml0ZXJhdG9yLnNvbWUnKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mJyk7XG5cbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoY2xhc3NvZihhcmd1bWVudCkgPT09ICdTeW1ib2wnKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBhIFN5bWJvbCB2YWx1ZSB0byBhIHN0cmluZycpO1xuICByZXR1cm4gJFN0cmluZyhhcmd1bWVudCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChwYXNzZWQsIHJlcXVpcmVkKSB7XG4gIGlmIChwYXNzZWQgPCByZXF1aXJlZCkgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ05vdCBlbm91Z2ggYXJndW1lbnRzJyk7XG4gIHJldHVybiBwYXNzZWQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbicpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIHZhbGlkYXRlQXJndW1lbnRzTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3ZhbGlkYXRlLWFyZ3VtZW50cy1sZW5ndGgnKTtcblxudmFyICRVUkxTZWFyY2hQYXJhbXMgPSBVUkxTZWFyY2hQYXJhbXM7XG52YXIgVVJMU2VhcmNoUGFyYW1zUHJvdG90eXBlID0gJFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGU7XG52YXIgYXBwZW5kID0gdW5jdXJyeVRoaXMoVVJMU2VhcmNoUGFyYW1zUHJvdG90eXBlLmFwcGVuZCk7XG52YXIgJGRlbGV0ZSA9IHVuY3VycnlUaGlzKFVSTFNlYXJjaFBhcmFtc1Byb3RvdHlwZVsnZGVsZXRlJ10pO1xudmFyIGZvckVhY2ggPSB1bmN1cnJ5VGhpcyhVUkxTZWFyY2hQYXJhbXNQcm90b3R5cGUuZm9yRWFjaCk7XG52YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xudmFyIHBhcmFtcyA9IG5ldyAkVVJMU2VhcmNoUGFyYW1zKCdhPTEmYT0yJmI9MycpO1xuXG5wYXJhbXNbJ2RlbGV0ZSddKCdhJywgMSk7XG4vLyBgdW5kZWZpbmVkYCBjYXNlIGlzIGEgQ2hyb21pdW0gMTE3IGJ1Z1xuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MTQyMjJcbnBhcmFtc1snZGVsZXRlJ10oJ2InLCB1bmRlZmluZWQpO1xuXG5pZiAocGFyYW1zICsgJycgIT09ICdhPTInKSB7XG4gIGRlZmluZUJ1aWx0SW4oVVJMU2VhcmNoUGFyYW1zUHJvdG90eXBlLCAnZGVsZXRlJywgZnVuY3Rpb24gKG5hbWUgLyogLCB2YWx1ZSAqLykge1xuICAgIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciAkdmFsdWUgPSBsZW5ndGggPCAyID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzFdO1xuICAgIGlmIChsZW5ndGggJiYgJHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiAkZGVsZXRlKHRoaXMsIG5hbWUpO1xuICAgIHZhciBlbnRyaWVzID0gW107XG4gICAgZm9yRWFjaCh0aGlzLCBmdW5jdGlvbiAodiwgaykgeyAvLyBhbHNvIHZhbGlkYXRlcyBgdGhpc2BcbiAgICAgIHB1c2goZW50cmllcywgeyBrZXk6IGssIHZhbHVlOiB2IH0pO1xuICAgIH0pO1xuICAgIHZhbGlkYXRlQXJndW1lbnRzTGVuZ3RoKGxlbmd0aCwgMSk7XG4gICAgdmFyIGtleSA9IHRvU3RyaW5nKG5hbWUpO1xuICAgIHZhciB2YWx1ZSA9IHRvU3RyaW5nKCR2YWx1ZSk7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgZGluZGV4ID0gMDtcbiAgICB2YXIgZm91bmQgPSBmYWxzZTtcbiAgICB2YXIgZW50cmllc0xlbmd0aCA9IGVudHJpZXMubGVuZ3RoO1xuICAgIHZhciBlbnRyeTtcbiAgICB3aGlsZSAoaW5kZXggPCBlbnRyaWVzTGVuZ3RoKSB7XG4gICAgICBlbnRyeSA9IGVudHJpZXNbaW5kZXgrK107XG4gICAgICBpZiAoZm91bmQgfHwgZW50cnkua2V5ID09PSBrZXkpIHtcbiAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAkZGVsZXRlKHRoaXMsIGVudHJ5LmtleSk7XG4gICAgICB9IGVsc2UgZGluZGV4Kys7XG4gICAgfVxuICAgIHdoaWxlIChkaW5kZXggPCBlbnRyaWVzTGVuZ3RoKSB7XG4gICAgICBlbnRyeSA9IGVudHJpZXNbZGluZGV4KytdO1xuICAgICAgaWYgKCEoZW50cnkua2V5ID09PSBrZXkgJiYgZW50cnkudmFsdWUgPT09IHZhbHVlKSkgYXBwZW5kKHRoaXMsIGVudHJ5LmtleSwgZW50cnkudmFsdWUpO1xuICAgIH1cbiAgfSwgeyBlbnVtZXJhYmxlOiB0cnVlLCB1bnNhZmU6IHRydWUgfSk7XG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgdmFsaWRhdGVBcmd1bWVudHNMZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdmFsaWRhdGUtYXJndW1lbnRzLWxlbmd0aCcpO1xuXG52YXIgJFVSTFNlYXJjaFBhcmFtcyA9IFVSTFNlYXJjaFBhcmFtcztcbnZhciBVUkxTZWFyY2hQYXJhbXNQcm90b3R5cGUgPSAkVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZTtcbnZhciBnZXRBbGwgPSB1bmN1cnJ5VGhpcyhVUkxTZWFyY2hQYXJhbXNQcm90b3R5cGUuZ2V0QWxsKTtcbnZhciAkaGFzID0gdW5jdXJyeVRoaXMoVVJMU2VhcmNoUGFyYW1zUHJvdG90eXBlLmhhcyk7XG52YXIgcGFyYW1zID0gbmV3ICRVUkxTZWFyY2hQYXJhbXMoJ2E9MScpO1xuXG4vLyBgdW5kZWZpbmVkYCBjYXNlIGlzIGEgQ2hyb21pdW0gMTE3IGJ1Z1xuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MTQyMjJcbmlmIChwYXJhbXMuaGFzKCdhJywgMikgfHwgIXBhcmFtcy5oYXMoJ2EnLCB1bmRlZmluZWQpKSB7XG4gIGRlZmluZUJ1aWx0SW4oVVJMU2VhcmNoUGFyYW1zUHJvdG90eXBlLCAnaGFzJywgZnVuY3Rpb24gaGFzKG5hbWUgLyogLCB2YWx1ZSAqLykge1xuICAgIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciAkdmFsdWUgPSBsZW5ndGggPCAyID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzFdO1xuICAgIGlmIChsZW5ndGggJiYgJHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiAkaGFzKHRoaXMsIG5hbWUpO1xuICAgIHZhciB2YWx1ZXMgPSBnZXRBbGwodGhpcywgbmFtZSk7IC8vIGFsc28gdmFsaWRhdGVzIGB0aGlzYFxuICAgIHZhbGlkYXRlQXJndW1lbnRzTGVuZ3RoKGxlbmd0aCwgMSk7XG4gICAgdmFyIHZhbHVlID0gdG9TdHJpbmcoJHZhbHVlKTtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHdoaWxlIChpbmRleCA8IHZhbHVlcy5sZW5ndGgpIHtcbiAgICAgIGlmICh2YWx1ZXNbaW5kZXgrK10gPT09IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICB9IHJldHVybiBmYWxzZTtcbiAgfSwgeyBlbnVtZXJhYmxlOiB0cnVlLCB1bnNhZmU6IHRydWUgfSk7XG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZGVmaW5lQnVpbHRJbkFjY2Vzc29yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbi1hY2Nlc3NvcicpO1xuXG52YXIgVVJMU2VhcmNoUGFyYW1zUHJvdG90eXBlID0gVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZTtcbnZhciBmb3JFYWNoID0gdW5jdXJyeVRoaXMoVVJMU2VhcmNoUGFyYW1zUHJvdG90eXBlLmZvckVhY2gpO1xuXG4vLyBgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5zaXplYCBnZXR0ZXJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS93aGF0d2cvdXJsL3B1bGwvNzM0XG5pZiAoREVTQ1JJUFRPUlMgJiYgISgnc2l6ZScgaW4gVVJMU2VhcmNoUGFyYW1zUHJvdG90eXBlKSkge1xuICBkZWZpbmVCdWlsdEluQWNjZXNzb3IoVVJMU2VhcmNoUGFyYW1zUHJvdG90eXBlLCAnc2l6ZScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIHNpemUoKSB7XG4gICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgZm9yRWFjaCh0aGlzLCBmdW5jdGlvbiAoKSB7IGNvdW50Kys7IH0pO1xuICAgICAgcmV0dXJuIGNvdW50O1xuICAgIH0sXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGVudW1lcmFibGU6IHRydWVcbiAgfSk7XG59XG4iLCAiZXhwb3J0IHthZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXJ9IGZyb20gJy4vbW9kdWxlcy9hZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXInO1xuZXhwb3J0IHtjaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlfSBmcm9tICcuL21vZHVsZXMvY2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZSc7XG5leHBvcnQge2NoZWNrQTExeUNvbmZpcm1LZXl9IGZyb20gJy4vbW9kdWxlcy9jaGVja0ExMXlDb25maXJtS2V5JztcbmV4cG9ydCB7Y2hlY2tEZXBlbmRlbmNpZXN9IGZyb20gJy4vbW9kdWxlcy9jaGVja0RlcGVuZGVuY2llcy50cyc7XG5leHBvcnQge2RlbGF5fSBmcm9tICcuL21vZHVsZXMvZGVsYXknO1xuZXhwb3J0IHtmaW5kVmFyaWFudHN9IGZyb20gJy4vbW9kdWxlcy9maW5kVmFyaWFudHMnO1xuZXhwb3J0IHtnZW5lcmF0ZUFycmF5fSBmcm9tICcuL21vZHVsZXMvZ2VuZXJhdGVBcnJheSc7XG5leHBvcnQge2dlbmVyYXRlU3ZnRGF0YVVybH0gZnJvbSAnLi9tb2R1bGVzL2dlbmVyYXRlU3ZnRGF0YVVybCc7XG5leHBvcnQge2dldEJvZHl9IGZyb20gJy4vbW9kdWxlcy9nZXRCb2R5JztcbmV4cG9ydCB7aW5pdE13QXBpfSBmcm9tICcuL21vZHVsZXMvaW5pdE13QXBpJztcbmV4cG9ydCB7aXNWYWxpZEtleX0gZnJvbSAnLi9tb2R1bGVzL2lzVmFsaWRLZXknO1xuZXhwb3J0IHtNd1VyaX0gZnJvbSAnLi9tb2R1bGVzL213VXJpJztcbmV4cG9ydCB7b291aUNvbmZpcm1XaXRoU3R5bGV9IGZyb20gJy4vbW9kdWxlcy9vb3VpQ29uZmlybVdpdGhTdHlsZSc7XG5leHBvcnQge3F1ZXJ5R2xvYmFsVXNlckdyb3Vwc30gZnJvbSAnLi9tb2R1bGVzL3F1ZXJ5R2xvYmFsVXNlckdyb3Vwcyc7XG5leHBvcnQge3F1ZXJ5VXNlckdyb3Vwc30gZnJvbSAnLi9tb2R1bGVzL3F1ZXJ5VXNlckdyb3Vwcyc7XG5leHBvcnQge3Njcm9sbFRvcH0gZnJvbSAnLi9tb2R1bGVzL3Njcm9sbFRvcCc7XG5leHBvcnQge3VzZXJJc0luR3JvdXB9IGZyb20gJy4vbW9kdWxlcy91c2VySXNJbkdyb3VwJztcbmV4cG9ydCB7dW5pcXVlQXJyYXl9IGZyb20gJy4vbW9kdWxlcy91bmlxdWVBcnJheSc7XG5leHBvcnQge2dldFdwU3VtbWFyeUNvbnRlbnQsIHNldFdwU3VtbWFyeUNvbnRlbnR9IGZyb20gJy4vbW9kdWxlcy93cFN1bW1hcnlDb250ZW50JztcbmV4cG9ydCB7Z2V0V3BUZXh0Ym94MUNvbnRlbnQsIHNldFdwVGV4dGJveDFDb250ZW50fSBmcm9tICcuL21vZHVsZXMvd3BUZXh0Ym94MUNvbnRlbnQnO1xuIiwgInR5cGUgQWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyID0gPFxuXHRUYXJnZXQgZXh0ZW5kcyBEb2N1bWVudCB8IEhUTUxFbGVtZW50IHwgRWxlbWVudCB8IE1lZGlhUXVlcnlMaXN0IHwgV2luZG93LFxuXHRUeXBlIGV4dGVuZHMgVGFyZ2V0IGV4dGVuZHMgRG9jdW1lbnRcblx0XHQ/IGtleW9mIERvY3VtZW50RXZlbnRNYXBcblx0XHQ6IFRhcmdldCBleHRlbmRzIEhUTUxFbGVtZW50XG5cdFx0XHQ/IGtleW9mIEhUTUxFbGVtZW50RXZlbnRNYXBcblx0XHRcdDogVGFyZ2V0IGV4dGVuZHMgTWVkaWFRdWVyeUxpc3Rcblx0XHRcdFx0PyBrZXlvZiBNZWRpYVF1ZXJ5TGlzdEV2ZW50TWFwXG5cdFx0XHRcdDogVGFyZ2V0IGV4dGVuZHMgV2luZG93XG5cdFx0XHRcdFx0PyBrZXlvZiBXaW5kb3dFdmVudE1hcFxuXHRcdFx0XHRcdDoga2V5b2YgR2xvYmFsRXZlbnRIYW5kbGVyc0V2ZW50TWFwLFxuXHRMaXN0ZW5lciBleHRlbmRzIFRhcmdldCBleHRlbmRzIERvY3VtZW50XG5cdFx0PyBUeXBlIGV4dGVuZHMga2V5b2YgRG9jdW1lbnRFdmVudE1hcFxuXHRcdFx0PyAodGhpczogVGFyZ2V0LCBldmVudDogRG9jdW1lbnRFdmVudE1hcFtUeXBlXSkgPT4gdW5rbm93blxuXHRcdFx0OiAodGhpczogVGFyZ2V0LCBldmVudDogRXZlbnQpID0+IHVua25vd25cblx0XHQ6IFRhcmdldCBleHRlbmRzIEhUTUxFbGVtZW50XG5cdFx0XHQ/IFR5cGUgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudEV2ZW50TWFwXG5cdFx0XHRcdD8gKHRoaXM6IFRhcmdldCwgZXZlbnQ6IEhUTUxFbGVtZW50RXZlbnRNYXBbVHlwZV0pID0+IHVua25vd25cblx0XHRcdFx0OiAodGhpczogVGFyZ2V0LCBldmVudDogRXZlbnQpID0+IHVua25vd25cblx0XHRcdDogVGFyZ2V0IGV4dGVuZHMgRWxlbWVudFxuXHRcdFx0XHQ/IFR5cGUgZXh0ZW5kcyBrZXlvZiBFbGVtZW50RXZlbnRNYXBcblx0XHRcdFx0XHQ/ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFbGVtZW50RXZlbnRNYXBbVHlwZV0pID0+IHVua25vd25cblx0XHRcdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93blxuXHRcdFx0XHQ6IFRhcmdldCBleHRlbmRzIE1lZGlhUXVlcnlMaXN0XG5cdFx0XHRcdFx0PyBUeXBlIGV4dGVuZHMga2V5b2YgTWVkaWFRdWVyeUxpc3RFdmVudE1hcFxuXHRcdFx0XHRcdFx0PyAodGhpczogVGFyZ2V0LCBldmVudDogTWVkaWFRdWVyeUxpc3RFdmVudE1hcFtUeXBlXSkgPT4gdW5rbm93blxuXHRcdFx0XHRcdFx0OiAodGhpczogVGFyZ2V0LCBldmVudDogRXZlbnQpID0+IHVua25vd25cblx0XHRcdFx0XHQ6IFRhcmdldCBleHRlbmRzIFdpbmRvd1xuXHRcdFx0XHRcdFx0PyBUeXBlIGV4dGVuZHMga2V5b2YgV2luZG93RXZlbnRNYXBcblx0XHRcdFx0XHRcdFx0PyAodGhpczogVGFyZ2V0LCBldmVudDogV2luZG93RXZlbnRNYXBbVHlwZV0pID0+IHVua25vd25cblx0XHRcdFx0XHRcdFx0OiAodGhpczogVGFyZ2V0LCBldmVudDogRXZlbnQpID0+IHVua25vd25cblx0XHRcdFx0XHRcdDogKHRoaXM6IFRhcmdldCwgZXZlbnQ6IEV2ZW50KSA9PiB1bmtub3duLFxuPih7XG5cdHRhcmdldCxcblx0dHlwZSxcblx0bGlzdGVuZXIsXG5cdG9wdGlvbnMsXG59OiB7XG5cdHRhcmdldDogVGFyZ2V0O1xuXHR0eXBlOiBUeXBlO1xuXHRsaXN0ZW5lcjogTGlzdGVuZXI7XG5cdG9wdGlvbnM/OiBBZGRFdmVudExpc3RlbmVyT3B0aW9ucztcbn0pID0+IHtcblx0cmVtb3ZlOiAoKSA9PiB2b2lkO1xufTtcblxuY29uc3QgYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyOiBBZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIgPSAoe3RhcmdldCwgdHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMgPSB7fX0pID0+IHtcblx0dGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIgYXMgRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdCwgb3B0aW9ucyk7XG5cdHJldHVybiB7XG5cdFx0cmVtb3ZlOiAoKTogdm9pZCA9PiB7XG5cdFx0XHR0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciBhcyBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0LCBvcHRpb25zKTtcblx0XHR9LFxuXHR9O1xufTtcblxuZXhwb3J0IHt0eXBlIEFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3ZlciwgYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyfTtcbiIsICJ0eXBlIENoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUgPSAoZXZlbnQ6IE1vdXNlRXZlbnQgfCBKUXVlcnkuVHJpZ2dlcmVkRXZlbnQsIG9wYWNpdHk/OiBudW1iZXIpID0+IHZvaWQ7XG5cbmNvbnN0IGNoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmU6IENoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUgPSAoZXZlbnQsIG9wYWNpdHkgPSAwLjcpID0+IHtcblx0KGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLm9wYWNpdHkgPSBldmVudC50eXBlID09PSAnbW91c2VlbnRlcicgPyAnMScgOiBvcGFjaXR5LnRvU3RyaW5nKCk7XG59O1xuXG5leHBvcnQge3R5cGUgQ2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZSwgY2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZX07XG4iLCAidHlwZSBDaGVja0ExMXlDb25maXJtS2V5ID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50IHwgTW91c2VFdmVudCB8IEpRdWVyeS5DbGlja0V2ZW50IHwgSlF1ZXJ5LktleURvd25FdmVudCkgPT4gYm9vbGVhbjtcblxuY29uc3QgY2hlY2tBMTF5Q29uZmlybUtleTogQ2hlY2tBMTF5Q29uZmlybUtleSA9IChldmVudCk6IGJvb2xlYW4gPT4ge1xuXHRpZiAoWydjbGljaycsICdrZXlkb3duJ10uaW5jbHVkZXMoZXZlbnQudHlwZSkpIHtcblx0XHRpZiAoZXZlbnQudHlwZSA9PT0gJ2tleWRvd24nKSB7XG5cdFx0XHRyZXR1cm4gWydFbnRlcicsICcgJ10uaW5jbHVkZXMoKGV2ZW50IGFzIEtleWJvYXJkRXZlbnQpLmtleSk7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCB7dHlwZSBDaGVja0ExMXlDb25maXJtS2V5LCBjaGVja0ExMXlDb25maXJtS2V5fTtcbiIsICJ0eXBlIEdlbmVyYXRlQXJyYXkgPSB0eXBlb2YgZ2VuZXJhdGVBcnJheTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVBcnJheTxUIGV4dGVuZHMgW10+KC4uLmFyZ3M6IChUIHwgVFtdKVtdKTogVFtdO1xuZnVuY3Rpb24gZ2VuZXJhdGVBcnJheTxUIGV4dGVuZHMgTm9kZUxpc3Q+KC4uLmFyZ3M6IChUIHwgVFtdKVtdKTogTm9kZVtdO1xuZnVuY3Rpb24gZ2VuZXJhdGVBcnJheTxUID0gdW5rbm93bj4oLi4uYXJnczogKFQgfCBUW10pW10pOiBUW107XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1zdHlsZVxuZnVuY3Rpb24gZ2VuZXJhdGVBcnJheTxUPiguLi5hcmdzOiAoVCB8IFRbXSlbXSk6IFRbXSB7XG5cdHJldHVybiBhcmdzLmZsYXRNYXAoKGFyZykgPT4ge1xuXHRcdGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdHJldHVybiBhcmc7XG5cdFx0fVxuXG5cdFx0aWYgKGFyZyBpbnN0YW5jZW9mIE5vZGVMaXN0KSB7XG5cdFx0XHRyZXR1cm4gWy4uLmFyZ10gYXMgVDtcblx0XHR9XG5cblx0XHRyZXR1cm4gW2FyZ107XG5cdH0pO1xufVxuXG5leHBvcnQge3R5cGUgR2VuZXJhdGVBcnJheSwgZ2VuZXJhdGVBcnJheX07XG4iLCAidHlwZSBJbml0TXdBcGkgPSB0eXBlb2YgaW5pdE13QXBpO1xuXG4vKipcbiAqIEByZXF1aXJlcyBtZWRpYXdpa2kuYXBpXG4gKiBAcGFyYW0ge3N0cmluZ30gW3VzZXJBZ2VudF1cbiAqIEBwYXJhbSB7c3RyaW5nfSBbYXBpVXJpXVxuICogQHJldHVybiB7bXcuQXBpfG13LkZvcmVpZ25BcGl9XG4gKi9cbmZ1bmN0aW9uIGluaXRNd0FwaSh1c2VyQWdlbnQ/OiBzdHJpbmcpOiBtdy5BcGk7XG5mdW5jdGlvbiBpbml0TXdBcGkodXNlckFnZW50OiBzdHJpbmcsIGFwaVVyaTogc3RyaW5nKTogbXcuRm9yZWlnbkFwaTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLXN0eWxlXG5mdW5jdGlvbiBpbml0TXdBcGkodXNlckFnZW50Pzogc3RyaW5nLCBhcGlVcmk/OiBzdHJpbmcpOiBtdy5BcGkgfCBtdy5Gb3JlaWduQXBpIHtcblx0Y29uc3QgYXBpT3B0aW9ucyA9IHtcblx0XHRhamF4OiB7XG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdCdBcGktVXNlci1BZ2VudCc6IHVzZXJBZ2VudCA/IGBZc0FyY2hpdmVzLzEuMSAoJHt1c2VyQWdlbnR9KWAgOiAnWXNBcmNoaXZlcy8xLjEnLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9O1xuXG5cdGlmIChhcGlVcmkpIHtcblx0XHRyZXR1cm4gbmV3IG13LkZvcmVpZ25BcGkoYXBpVXJpLCBhcGlPcHRpb25zKTtcblx0fVxuXG5cdHJldHVybiBuZXcgbXcuQXBpKGFwaU9wdGlvbnMpO1xufVxuXG5leHBvcnQge3R5cGUgSW5pdE13QXBpLCBpbml0TXdBcGl9O1xuIiwgInR5cGUgVW5pcXVlQXJyYXkgPSB0eXBlb2YgdW5pcXVlQXJyYXk7XG5cbmNvbnN0IHVuaXF1ZUFycmF5ID0gZnVuY3Rpb24gdW5pcXVlQXJyYXk8VD4oYXJnczogVFtdKTogVFtdIHtcblx0LyoqIVxuXHQgKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQ0MtQlktU0EtNC4wXG5cdCAqXG5cdCAqIEBzb3VyY2Uge0BsaW5rIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzkyMjk2NDUvcmVtb3ZlLWR1cGxpY2F0ZS12YWx1ZXMtZnJvbS1qcy1hcnJheS85MjI5ODJ9XG5cdCAqIEBsaWNlbnNlIENDLUJZLVNBLTQuMFxuXHQgKi9cblx0Y29uc3QgcmVzdWx0OiB0eXBlb2YgYXJncyA9IFtdO1xuXHRmb3IgKGNvbnN0IGl0ZW0gb2YgYXJncykge1xuXHRcdGlmICghcmVzdWx0LmluY2x1ZGVzKGl0ZW0pKSB7XG5cdFx0XHRyZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBpdGVtOyAvLyBSZXBsYWNlIEFycmF5I3B1c2ggdG8gYXZvaWQgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IHt0eXBlIFVuaXF1ZUFycmF5LCB1bmlxdWVBcnJheX07XG4iLCAiaW1wb3J0IHtnZW5lcmF0ZUFycmF5fSBmcm9tICcuL2dlbmVyYXRlQXJyYXknO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJy4vaW5pdE13QXBpJztcbmltcG9ydCB7dW5pcXVlQXJyYXl9IGZyb20gJy4vdW5pcXVlQXJyYXknO1xuXG50eXBlIEJvb2xlYW4gPSAnMCcgfCAnMScgfCAwIHwgMTtcbnR5cGUgQ2hlY2tEZXBlbmRlbmNpZXMgPSB0eXBlb2YgY2hlY2tEZXBlbmRlbmNpZXM7XG5cbmZ1bmN0aW9uIGNoZWNrRGVwZW5kZW5jaWVzKGdhZGdldE5hbWVzOiBzdHJpbmcgfCBzdHJpbmdbXSk6IFByb21pc2U8dm9pZD47XG5mdW5jdGlvbiBjaGVja0RlcGVuZGVuY2llcyhnYWRnZXROYW1lczogc3RyaW5nLCBvcHRpb246IEJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtc3R5bGVcbmFzeW5jIGZ1bmN0aW9uIGNoZWNrRGVwZW5kZW5jaWVzKGdhZGdldE5hbWVzOiBzdHJpbmcgfCBzdHJpbmdbXSwgb3B0aW9uPzogQm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaSgnVXRpbC1DaGVja0RlcGVuZGVuY2llcycpO1xuXHRjb25zdCBnYWRnZXRzID0gdW5pcXVlQXJyYXkoZ2VuZXJhdGVBcnJheShnYWRnZXROYW1lcykpO1xuXHRvcHRpb24gfHw9IDE7XG5cblx0Zm9yIChjb25zdCBnYWRnZXQgb2YgZ2FkZ2V0cykge1xuXHRcdGlmIChcblx0XHRcdChvcHRpb24gPT09ICcwJyAmJiBtdy51c2VyLm9wdGlvbnMuZ2V0KGBnYWRnZXQtJHtnYWRnZXR9YCkpIHx8XG5cdFx0XHQob3B0aW9uID09PSAnMScgJiYgIW13LnVzZXIub3B0aW9ucy5nZXQoYGdhZGdldC0ke2dhZGdldH1gKSlcblx0XHQpIHtcblx0XHRcdGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbih7XG5cdFx0XHRcdGFjdGlvbjogJ29wdGlvbnMnLFxuXHRcdFx0XHRjaGFuZ2U6IGBnYWRnZXQtJHtnYWRnZXR9PSR7b3B0aW9ufWAsXG5cdFx0XHR9IGFzIEFwaU9wdGlvbnNQYXJhbXMpO1xuXHRcdFx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKGBleHQuZ2FkZ2V0LiR7Z2FkZ2V0fWApO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQge3R5cGUgQ2hlY2tEZXBlbmRlbmNpZXMsIGNoZWNrRGVwZW5kZW5jaWVzfTtcbiIsICJ0eXBlIERlbGF5ID0gKG1zOiBudW1iZXIpID0+IFByb21pc2U8dm9pZD47XG5cbmNvbnN0IGRlbGF5OiBEZWxheSA9IChtcykgPT4ge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6ICgpID0+IHZvaWQpOiB2b2lkID0+IHtcblx0XHRzZXRUaW1lb3V0KHJlc29sdmUsIG1zKTtcblx0fSk7XG59O1xuXG5leHBvcnQge3R5cGUgRGVsYXksIGRlbGF5fTtcbiIsICJpbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnLi9pbml0TXdBcGknO1xuaW1wb3J0IHt1bmlxdWVBcnJheX0gZnJvbSAnLi91bmlxdWVBcnJheSc7XG5cbnR5cGUgRmluZFZhcmlhbnRzID0gdHlwZW9mIGZpbmRWYXJpYW50cztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtc3R5bGVcbmFzeW5jIGZ1bmN0aW9uIGZpbmRWYXJpYW50cyh0ZXh0OiBzdHJpbmcpIHtcblx0Y29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoJ1V0aWwtRmluZFZhcmlhbnRzJyk7XG5cblx0Y29uc3QgVkFSSUFOVFMgPSBbJ3poLWhhbnMnLCAnemgtaGFudCcsICd6aC1jbicsICd6aC1oaycsICd6aC1tbycsICd6aC1zZycsICd6aC1teScsICd6aC10dyddO1xuXG5cdGNvbnN0IGFsbFZhcmlhbnRzOiBzdHJpbmdbXSA9IFtdO1xuXG5cdGNvbnN0IHBhcmFtczogQXBpUGFyc2VQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdGNvbnRlbnRtb2RlbDogJ3dpa2l0ZXh0Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogWydkaXNwbGF5dGl0bGUnXSxcblx0XHR0aXRsZTogJ3RlbXAnLFxuXHRcdHRleHQsXG5cdH07XG5cblx0Zm9yIChjb25zdCB2YXJpYW50IG9mIFZBUklBTlRTKSB7XG5cdFx0cGFyYW1zLnVzZWxhbmcgPSB2YXJpYW50O1xuXHRcdHBhcmFtcy52YXJpYW50ID0gdmFyaWFudDtcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KHBhcmFtcyk7XG5cblx0XHRjb25zdCBkaXNwbGF5dGl0bGUgPSByZXNwb25zZT8uWydxdWVyeSddPy5kaXNwbGF5dGl0bGUgYXMgc3RyaW5nO1xuXHRcdGNvbnN0IHZhcmlhbnRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmFyaWFudCcpO1xuXHRcdHZhcmlhbnRFbGVtZW50LmlubmVySFRNTCA9IGRpc3BsYXl0aXRsZTtcblxuXHRcdGlmICh2YXJpYW50RWxlbWVudC50ZXh0Q29udGVudCkge1xuXHRcdFx0YWxsVmFyaWFudHNbYWxsVmFyaWFudHMubGVuZ3RoXSA9IHZhcmlhbnRFbGVtZW50LnRleHRDb250ZW50O1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB1bmlxdWVBcnJheShhbGxWYXJpYW50cyk7XG59XG5cbmV4cG9ydCB7dHlwZSBGaW5kVmFyaWFudHMsIGZpbmRWYXJpYW50c307XG4iLCAidHlwZSBHZW5lcmF0ZVN2Z0RhdGFVcmwgPSAoc3ZnOiBzdHJpbmcpID0+IHN0cmluZztcblxuY29uc3QgZ2VuZXJhdGVTdmdEYXRhVXJsOiBHZW5lcmF0ZVN2Z0RhdGFVcmwgPSAoc3ZnKSA9PiB7XG5cdC8qKiFcblx0ICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVFxuXHQgKlxuXHQgKiBAc291cmNlIHN2Zy10by1kYXRhLXVyaS5qcyB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2hleWFsbGFuL3N2Zy10by1kYXRhLXVyaS99XG5cdCAqIEBhdXRob3IgQWxsYW4gTW9yZW5vXG5cdCAqIEBsaWNlbnNlIE1JVCB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2hleWFsbGFuL3N2Zy10by1kYXRhLXVyaS9ibG9iL21hc3Rlci9MSUNFTlNFfVxuXHQgKlxuXHQgKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdCAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0ICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHQgKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdCAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHQgKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXHQgKlxuXHQgKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0ICogY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblx0ICpcblx0ICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHQgKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0ICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdCAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0ICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0ICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0ICogU09GVFdBUkUuXG5cdCAqL1xuXHRzdmcgPSBzdmcudHJpbSgpO1xuXHQvLyByZW1vdmUgeG1sLCBkb2N0eXBlLCBnZW5lcmF0b3IuLi5cblx0c3ZnID0gc3ZnLnNsaWNlKHN2Zy5pbmRleE9mKCc8c3ZnJykpO1xuXHQvLyBzb2Z0IHZhbGlkYXRlXG5cdGlmICghc3ZnLnN0YXJ0c1dpdGgoJzxzdmcnKSB8fCAhc3ZnLmVuZHNXaXRoKCdzdmc+JykpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblx0Ly8gYWRkIG5hbWVzcGFjZSBpZiBuZWNlc3Nhcnlcblx0aWYgKCFzdmcuaW5jbHVkZXMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJykpIHtcblx0XHRzdmcgPSBzdmcucmVwbGFjZSgvPHN2Zy9nLCBcIjxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1wiKTtcblx0fVxuXHQvLyByZW1vdmUgY29tbWVudHNcblx0c3ZnID0gc3ZnLnJlcGxhY2UoLzwhLS0uezEsfS0tPi9nLCAnJyk7XG5cdC8vIHJlbW92ZSB1bm5lY2Vzc2FyeSBhdHRyaWJ1dGVzXG5cdHN2ZyA9IHN2Zy5yZXBsYWNlKC92ZXJzaW9uPVtcIiddKC57MCx9PylbXCInXSg/PVtcXHM+XSkvZywgJycpO1xuXHQvLyByZXBsYWNlIG5lc3RlZCBxdW90ZXNcblx0c3ZnID0gc3ZnLnJlcGxhY2UoL1wiJyguezEsfSknXCIvZywgXCInJDEnXCIpO1xuXHQvLyByZXBsYWNlIGRvdWJsZSBxdW90ZXNcblx0c3ZnID0gc3ZnLnJlcGxhY2UoL1wiL2csIFwiJ1wiKTtcblx0Ly8gcmVtb3ZlIGVtcHR5IHNwYWNlcyBiZXR3ZWVuIHRhZ3Ncblx0c3ZnID0gc3ZnLnJlcGxhY2UoLz5cXHN7MSx9PC9nLCAnPjwnKTtcblx0Ly8gcmVtb3ZlIGR1cGxpY2F0ZSBzcGFjZXNcblx0c3ZnID0gc3ZnLnJlcGxhY2UoL1xcc3syLH0vZywgJyAnKTtcblx0Ly8gdHJpbSBhZ2FpblxuXHRzdmcgPSBzdmcudHJpbSgpO1xuXHQvLyBzb2Z0IHZhbGlkYXRlIGFnYWluXG5cdGlmICghc3ZnLnN0YXJ0c1dpdGgoJzxzdmcnKSB8fCAhc3ZnLmVuZHNXaXRoKCdzdmc+JykpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblx0Ly8gcmVwbGFjZSBhbXBlcnNhbmRcblx0c3ZnID0gc3ZnLnJlcGxhY2UoLyYvZywgJyZhbXA7Jyk7XG5cdC8vIGVuY29kZSBvbmx5IHVuc2FmZSBzeW1ib2xzXG5cdHN2ZyA9IHN2Zy5yZXBsYWNlKC9bJSM8Pj9bXFxcXFxcXV5ge3x9XS9nLCBlbmNvZGVVUklDb21wb25lbnQpO1xuXHQvLyBidWlsZCBkYXRhIHVyaVxuXHRzdmcgPSBgZGF0YTppbWFnZS9zdmcreG1sLCR7c3ZnfWA7XG5cdC8vIG9rLCBzaGlwIGl0IVxuXHRyZXR1cm4gc3ZnO1xufTtcblxuZXhwb3J0IHt0eXBlIEdlbmVyYXRlU3ZnRGF0YVVybCwgZ2VuZXJhdGVTdmdEYXRhVXJsfTtcbiIsICJ0eXBlIEdldEJvZHkgPSAoKSA9PiBKUXVlcnkuVGhlbmFibGU8SlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4+O1xuXG5jb25zdCBnZXRCb2R5ID0gKCkgPT4ge1xuXHRyZXR1cm4gJC5yZWFkeS50aGVuKCgpOiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9PiB7XG5cdFx0Y29uc3QgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0gJCgnYm9keScpO1xuXG5cdFx0cmV0dXJuICRib2R5O1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7dHlwZSBHZXRCb2R5LCBnZXRCb2R5fTtcbiIsICJ0eXBlIElzVmFsaWRLZXkgPSB0eXBlb2YgaXNWYWxpZEtleTtcblxuY29uc3QgaXNWYWxpZEtleSA9IChvYmplY3Q6IG9iamVjdCwga2V5OiBzdHJpbmcgfCBudW1iZXIgfCBzeW1ib2wpOiBrZXkgaXMga2V5b2YgdHlwZW9mIG9iamVjdCA9PiB7XG5cdHJldHVybiBrZXkgaW4gb2JqZWN0O1xufTtcblxuZXhwb3J0IHt0eXBlIElzVmFsaWRLZXksIGlzVmFsaWRLZXl9O1xuIiwgInR5cGUgQ2xhc3NNd1VyaSA9IHR5cGVvZiBNd1VyaTtcblxuY2xhc3MgTXdVcmkgZXh0ZW5kcyBVUkwge1xuXHRleHRlbmQob2JqZWN0OiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSkge1xuXHRcdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9iamVjdCkpIHtcblx0XHRcdHRoaXMuc2VhcmNoUGFyYW1zLnNldChrZXksIHZhbHVlKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0Z2V0UmVsYXRpdmVQYXRoKCkge1xuXHRcdHJldHVybiB0aGlzLnBhdGhuYW1lICsgdGhpcy5zZWFyY2ggKyB0aGlzLmhhc2g7XG5cdH1cbn1cblxuZXhwb3J0IHt0eXBlIENsYXNzTXdVcmksIE13VXJpfTtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuXG50eXBlIE9vdWlDb25maXJtV2l0aFN0eWxlID0gKG1lc3NhZ2U6IHN0cmluZykgPT4gSlF1ZXJ5LlByb21pc2U8Ym9vbGVhbj47XG5cbi8qKlxuICogQHJlcXVpcmVzIG9vanMtdWktd2luZG93c1xuICogQHBhcmFtIHtzdHJpbmd9IFttZXNzYWdlXVxuICogQHJldHVybiB7SlF1ZXJ5LlByb21pc2U8Ym9vbGVhbj59XG4gKi9cbmNvbnN0IG9vdWlDb25maXJtV2l0aFN0eWxlOiBPb3VpQ29uZmlybVdpdGhTdHlsZSA9IChtZXNzYWdlKSA9PlxuXHRPTy51aVxuXHRcdC5jb25maXJtKFxuXHRcdFx0JChcblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cIm9vLXVpLXdpbmRvdy1mb290XCJcblx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiAnLjFyZW0gc29saWQgIzA2NDVhZCcsXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWV2ZW5seScsXG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxzcGFuXG5cdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRmb250U2l6ZTogJzEuMnJlbScsXG5cdFx0XHRcdFx0XHRcdGZvbnRXZWlnaHQ6ICc1MDAnLFxuXHRcdFx0XHRcdFx0XHRsaW5lSGVpZ2h0OiAnMS44Jyxcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogJy40ZW0gMCcsXG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHttZXNzYWdlfVxuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpIGFzIEpRdWVyeVxuXHRcdClcblx0XHQudGhlbigoaXNDb25maXJtOiBib29sZWFuKTogYm9vbGVhbiA9PiBpc0NvbmZpcm0pO1xuXG5leHBvcnQge3R5cGUgT291aUNvbmZpcm1XaXRoU3R5bGUsIG9vdWlDb25maXJtV2l0aFN0eWxlfTtcbiIsICJpbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnLi9pbml0TXdBcGknO1xuXG50eXBlIFF1ZXJ5R2xvYmFsVXNlckdyb3VwcyA9IHR5cGVvZiBxdWVyeUdsb2JhbFVzZXJHcm91cHM7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLXN0eWxlXG5hc3luYyBmdW5jdGlvbiBxdWVyeUdsb2JhbFVzZXJHcm91cHMoZ3VpdXNlcjogc3RyaW5nKSB7XG5cdGNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKCdVdGlsLVF1ZXJ5R2xvYmFsVXNlckdyb3VwcycpO1xuXG5cdGNvbnN0IENBQ0hFX0tFWV9QUkVGSVggPSAnZXh0LmdhZGdldC5VdGlsX3F1ZXJ5R2xvYmFsVXNlckdyb3Vwcy0nO1xuXG5cdGxldCBncm91cHM6IHN0cmluZ1tdID0gW107XG5cblx0Ly8gUXVlcnkgZnJvbSBjYWNoZVxuXHQvLyBDaGVjayBpZiB1c2VyIGdyb3VwIGluZm8gaXMgY2FjaGVkIGluIExvY2FsU3RvcmFnZVxuXHQvLyBJZiBjYWNoZWQsIGdldCB0aGVtIGZyb20gTG9jYWxTdG9yYWdlXG5cdGlmIChtdy5zdG9yYWdlLmdldE9iamVjdChDQUNIRV9LRVlfUFJFRklYICsgZ3VpdXNlcikpIHtcblx0XHRncm91cHMgPSBtdy5zdG9yYWdlLmdldE9iamVjdChDQUNIRV9LRVlfUFJFRklYICsgZ3VpdXNlcikgYXMgc3RyaW5nW107XG5cdFx0Ly8gUmVtb3ZlICcqJyBmcm9tIGdyb3Vwc1xuXHRcdGdyb3VwcyA9IGdyb3Vwcy5maWx0ZXIoKGVsZW1lbnQpID0+IHtcblx0XHRcdHJldHVybiBlbGVtZW50ICE9PSAnKic7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gUXVlcnkgZnJvbSB3ZWJcblx0XHQvLyBRdWVyeSBwYXJhbXNcblx0XHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdG1ldGE6ICdnbG9iYWx1c2VyaW5mbycsXG5cdFx0XHRndWl1c2VyLFxuXHRcdFx0Z3VpcHJvcDogJ2dyb3VwcycsXG5cdFx0XHRzbWF4YWdlOiA2MDAsXG5cdFx0XHRtYXhhZ2U6IDYwMCxcblx0XHR9O1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdFx0Ly8gRGUtY29uc3RydWN0IHRoZSByZXNwb25zZSBvYmplY3Rcblx0XHRjb25zdCBxdWVyeSA9IHJlc3BvbnNlWydxdWVyeSddIGFzIHtcblx0XHRcdGdsb2JhbHVzZXJpbmZvOiB7Z3JvdXBzOiBzdHJpbmdbXTsgbmFtZTogc3RyaW5nfTtcblx0XHR9O1xuXG5cdFx0aWYgKHF1ZXJ5Py5nbG9iYWx1c2VyaW5mbykge1xuXHRcdFx0Z3JvdXBzID0gcXVlcnkuZ2xvYmFsdXNlcmluZm8/Lmdyb3VwcyA/PyBbXTtcblx0XHRcdC8vIFJlbW92ZSAnKicgZnJvbSBncm91cHNcblx0XHRcdGdyb3VwcyA9IGdyb3Vwcy5maWx0ZXIoKGVsZW1lbnQpID0+IHtcblx0XHRcdFx0cmV0dXJuIGVsZW1lbnQgIT09ICcqJztcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBDYWNoZSBmb3IgMSBob3VyXG5cdFx0XHRtdy5zdG9yYWdlLnNldE9iamVjdChDQUNIRV9LRVlfUFJFRklYICsgZ3VpdXNlciwgZ3JvdXBzLCA2MCAqIDYwKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4ge3F1ZXJ5OiB7Z2xvYmFsdXNlcmluZm86IHtuYW1lOiBndWl1c2VyLCBncm91cHN9fX07XG59XG5cbmV4cG9ydCB7dHlwZSBRdWVyeUdsb2JhbFVzZXJHcm91cHMsIHF1ZXJ5R2xvYmFsVXNlckdyb3Vwc307XG4iLCAiaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJy4vaW5pdE13QXBpJztcblxudHlwZSBRdWVyeVVzZXJHcm91cHMgPSB0eXBlb2YgcXVlcnlVc2VyR3JvdXBzO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1zdHlsZVxuYXN5bmMgZnVuY3Rpb24gcXVlcnlVc2VyR3JvdXBzKHVzZXJzOiBzdHJpbmdbXSkge1xuXHRjb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaSgnVXRpbC1RdWVyeVVzZXJHcm91cHMnKTtcblxuXHRjb25zdCBDQUNIRV9LRVlfUFJFRklYID0gJ2V4dC5nYWRnZXQuVXRpbF9xdWVyeVVzZXJHcm91cHMtJztcblxuXHRjb25zdCBjYWNoZWRRdWVyeVVzZXJzOiB7Z3JvdXBzOiBzdHJpbmdbXTsgbmFtZTogc3RyaW5nfVtdID0gW107XG5cblx0Ly8gUXVlcnkgZnJvbSBjYWNoZVxuXHRmb3IgKGNvbnN0IHVzZXIgb2YgdXNlcnMpIHtcblx0XHQvLyBDaGVjayBpZiB1c2VyIGdyb3VwIGluZm8gaXMgY2FjaGVkIGluIExvY2FsU3RvcmFnZVxuXHRcdC8vIElmIGNhY2hlZCwgZ2V0IHRoZW0gZnJvbSBMb2NhbFN0b3JhZ2Vcblx0XHRpZiAobXcuc3RvcmFnZS5nZXRPYmplY3QoQ0FDSEVfS0VZX1BSRUZJWCArIHVzZXIpKSB7XG5cdFx0XHRsZXQgZ3JvdXBzID0gbXcuc3RvcmFnZS5nZXRPYmplY3QoQ0FDSEVfS0VZX1BSRUZJWCArIHVzZXIpIGFzIHN0cmluZ1tdO1xuXHRcdFx0Ly8gUmVtb3ZlICcqJyBmcm9tIGdyb3Vwc1xuXHRcdFx0Z3JvdXBzID0gZ3JvdXBzLmZpbHRlcigoZWxlbWVudCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gZWxlbWVudCAhPT0gJyonO1xuXHRcdFx0fSk7XG5cdFx0XHQvLyBTdG9yZSBpbnRvIGFycmF5XG5cdFx0XHRjYWNoZWRRdWVyeVVzZXJzW2NhY2hlZFF1ZXJ5VXNlcnMubGVuZ3RoXSA9IHtuYW1lOiB1c2VyLCBncm91cHN9O1xuXHRcdH1cblx0fVxuXG5cdC8vIFF1ZXJ5IGZyb20gd2ViXG5cdGNvbnN0IHVzdXNlcnMgPSB1c2Vycy5maWx0ZXIoKHYpID0+IHtcblx0XHQvLyBSZW1vdmUgdXNlciB0aGF0IGhhdmUgY2FjaGVkIHVzZXIgZ3JvdXBzIGxvY2FsbHlcblx0XHRyZXR1cm4gIW13LnN0b3JhZ2UuZ2V0T2JqZWN0KENBQ0hFX0tFWV9QUkVGSVggKyB2KTtcblx0fSk7XG5cblx0Ly8gUXVlcnkgcGFyYW1zXG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlVc2Vyc1BhcmFtcyA9IHtcblx0XHR1c3VzZXJzLFxuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0bGlzdDogJ3VzZXJzJyxcblx0XHR1c3Byb3A6ICdncm91cHMnLFxuXHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRtYXhhZ2U6IDYwMCxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0Ly8gRGUtY29uc3RydWN0IHRoZSByZXNwb25zZSBvYmplY3Rcblx0Y29uc3QgcXVlcnkgPSByZXNwb25zZVsncXVlcnknXSBhcyB7XG5cdFx0dXNlcnM6IHtncm91cHM6IHN0cmluZ1tdOyBuYW1lOiBzdHJpbmd9W107XG5cdH07XG5cdGNvbnN0IHF1ZXJ5VXNlcnMgPSBbLi4uKHF1ZXJ5Py51c2VycyA/PyBbXSksIC4uLmNhY2hlZFF1ZXJ5VXNlcnNdO1xuXG5cdGZvciAoY29uc3QgdXNlciBvZiBxdWVyeVVzZXJzKSB7XG5cdFx0aWYgKHVzZXI/Lmdyb3VwcyAmJiB1c2VyPy5uYW1lKSB7XG5cdFx0XHRsZXQge2dyb3Vwc30gPSB1c2VyO1xuXHRcdFx0Ly8gUmVtb3ZlICcqJyBmcm9tIGdyb3Vwc1xuXHRcdFx0Z3JvdXBzID0gZ3JvdXBzLmZpbHRlcigoZWxlbWVudCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gZWxlbWVudCAhPT0gJyonO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIENhY2hlIGZvciAxIGhvdXJcblx0XHRcdG13LnN0b3JhZ2Uuc2V0T2JqZWN0KENBQ0hFX0tFWV9QUkVGSVggKyB1c2VyLm5hbWUsIGdyb3VwcywgNjAgKiA2MCk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHtxdWVyeToge3VzZXJzOiBxdWVyeVVzZXJzfX07XG59XG5cbmV4cG9ydCB7dHlwZSBRdWVyeVVzZXJHcm91cHMsIHF1ZXJ5VXNlckdyb3Vwc307XG4iLCAidHlwZSBTY3JvbGxUb3AgPSAoXG5cdHRhcmdldEhlaWdodDogbnVtYmVyIHwgc3RyaW5nLFxuXHRlZmZlY3RzT3B0aW9uc09yRHVyYXRpb24/OiBKUXVlcnkuRWZmZWN0c09wdGlvbnM8SFRNTEVsZW1lbnQ+IHwgbnVtYmVyIHwgJ2Zhc3QnIHwgJ3Nsb3cnXG4pID0+IHZvaWQ7XG5cbmNvbnN0IHNjcm9sbFRvcDogU2Nyb2xsVG9wID0gKHRhcmdldEhlaWdodCwgZWZmZWN0c09wdGlvbnNPckR1cmF0aW9uID0ge30pID0+IHtcblx0Y29uc3Qgb3B0aW9uczogSlF1ZXJ5LkVmZmVjdHNPcHRpb25zPEhUTUxFbGVtZW50PiA9XG5cdFx0dHlwZW9mIGVmZmVjdHNPcHRpb25zT3JEdXJhdGlvbiA9PT0gJ251bWJlcicgfHwgdHlwZW9mIGVmZmVjdHNPcHRpb25zT3JEdXJhdGlvbiA9PT0gJ3N0cmluZydcblx0XHRcdD8ge1xuXHRcdFx0XHRcdGR1cmF0aW9uOiBlZmZlY3RzT3B0aW9uc09yRHVyYXRpb24sXG5cdFx0XHRcdFx0ZWFzaW5nOiAnbGluZWFyJyxcblx0XHRcdFx0fVxuXHRcdFx0OiB7XG5cdFx0XHRcdFx0ZHVyYXRpb246ICdzbG93Jyxcblx0XHRcdFx0XHRlYXNpbmc6ICdsaW5lYXInLFxuXHRcdFx0XHRcdC4uLmVmZmVjdHNPcHRpb25zT3JEdXJhdGlvbixcblx0XHRcdFx0fTtcblx0JChkb2N1bWVudCkuZmluZCgnaHRtbCwgYm9keScpLmFuaW1hdGUoXG5cdFx0e1xuXHRcdFx0c2Nyb2xsVG9wOiB0YXJnZXRIZWlnaHQsXG5cdFx0fSxcblx0XHRvcHRpb25zXG5cdCk7XG59O1xuXG5leHBvcnQge3R5cGUgU2Nyb2xsVG9wLCBzY3JvbGxUb3B9O1xuIiwgImltcG9ydCB7Z2VuZXJhdGVBcnJheX0gZnJvbSAnLi9nZW5lcmF0ZUFycmF5JztcblxudHlwZSBVc2VySXNJbkdyb3VwID0gdHlwZW9mIHVzZXJJc0luR3JvdXA7XG5cbmNvbnN0IHVzZXJJc0luR3JvdXAgPSAoZ3JvdXBzOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4ge1xuXHRjb25zdCB7d2dVc2VyR3JvdXBzLCB3Z0dsb2JhbEdyb3Vwc30gPSBtdy5jb25maWcuZ2V0KCk7XG5cdHJldHVybiBbLi4uKHdnVXNlckdyb3VwcyB8fCBbXSksIC4uLigod2dHbG9iYWxHcm91cHMgYXMgc3RyaW5nW10pIHx8IFtdKV0uc29tZSgoZWxlbWVudDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG5cdFx0cmV0dXJuIGdlbmVyYXRlQXJyYXkoZ3JvdXBzKS5pbmNsdWRlcyhlbGVtZW50KTtcblx0fSk7XG59O1xuXG5leHBvcnQge3R5cGUgVXNlcklzSW5Hcm91cCwgdXNlcklzSW5Hcm91cH07XG4iLCAidHlwZSBHZXRXcFN1bW1hcnlDb250ZW50ID0gdHlwZW9mIGdldFdwU3VtbWFyeUNvbnRlbnQ7XG50eXBlIFNldFdwU3VtbWFyeUNvbnRlbnQgPSB0eXBlb2Ygc2V0V3BTdW1tYXJ5Q29udGVudDtcblxuY29uc3QgZ2V0V3BTdW1tYXJ5Q29udGVudCA9ICh7JGVkaXRGb3JtfTogeyRlZGl0Rm9ybTogSlF1ZXJ5PEhUTUxFbGVtZW50Pn0pOiBzdHJpbmcgPT4ge1xuXHRyZXR1cm4gJGVkaXRGb3JtLmZpbmQ8SFRNTElucHV0RWxlbWVudD4oJyN3cFN1bW1hcnknKT8udmFsKCkgPz8gJyc7XG59O1xuXG5jb25zdCBzZXRXcFN1bW1hcnlDb250ZW50ID0gKHskZWRpdEZvcm0sIGNvbnRlbnR9OiB7JGVkaXRGb3JtOiBKUXVlcnk8SFRNTEVsZW1lbnQ+OyBjb250ZW50OiBzdHJpbmd9KTogdm9pZCA9PiB7XG5cdCRlZGl0Rm9ybS5maW5kPEhUTUxJbnB1dEVsZW1lbnQ+KCcjd3BTdW1tYXJ5JykudmFsKGNvbnRlbnQpO1xufTtcblxuZXhwb3J0IHtnZXRXcFN1bW1hcnlDb250ZW50LCB0eXBlIEdldFdwU3VtbWFyeUNvbnRlbnQsIHNldFdwU3VtbWFyeUNvbnRlbnQsIHR5cGUgU2V0V3BTdW1tYXJ5Q29udGVudH07XG4iLCAidHlwZSBHZXRXcFRleHRib3gxQ29udGVudCA9IHR5cGVvZiBnZXRXcFRleHRib3gxQ29udGVudDtcbnR5cGUgU2V0V3BUZXh0Ym94MUNvbnRlbnQgPSB0eXBlb2Ygc2V0V3BUZXh0Ym94MUNvbnRlbnQ7XG5cbmNvbnN0IGdldFdwVGV4dGJveDFDb250ZW50ID0gKHskZWRpdEZvcm19OiB7JGVkaXRGb3JtOiBKUXVlcnk8SFRNTEVsZW1lbnQ+fSk6IHN0cmluZyA9PiB7XG5cdHJldHVybiAkZWRpdEZvcm0uZmluZDxIVE1MVGV4dEFyZWFFbGVtZW50PignI3dwVGV4dGJveDEnKS50ZXh0U2VsZWN0aW9uKCdnZXRDb250ZW50cycpID8/ICcnO1xufTtcblxuY29uc3Qgc2V0V3BUZXh0Ym94MUNvbnRlbnQgPSAoeyRlZGl0Rm9ybSwgY29udGVudH06IHskZWRpdEZvcm06IEpRdWVyeTxIVE1MRWxlbWVudD47IGNvbnRlbnQ6IHN0cmluZ30pOiB2b2lkID0+IHtcblx0JGVkaXRGb3JtLmZpbmQ8SFRNTFRleHRBcmVhRWxlbWVudD4oJyN3cFRleHRib3gxJykudGV4dFNlbGVjdGlvbignc2V0Q29udGVudHMnLCBjb250ZW50KTtcbn07XG5cbmV4cG9ydCB7Z2V0V3BUZXh0Ym94MUNvbnRlbnQsIHR5cGUgR2V0V3BUZXh0Ym94MUNvbnRlbnQsIHNldFdwVGV4dGJveDFDb250ZW50LCB0eXBlIFNldFdwVGV4dGJveDFDb250ZW50fTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQSxvRkFBQUEsVUFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxRQUFRLFNBQVUsSUFBSTtBQUN4QixhQUFPLE1BQU0sR0FBRyxTQUFTLFFBQVE7QUFBQSxJQUNuQztBQUdBLElBQUFBLFFBQU87QUFBQSxJQUVMLE1BQU0sT0FBTyxjQUFjLFlBQVksVUFBVSxLQUNqRCxNQUFNLE9BQU8sVUFBVSxZQUFZLE1BQU07QUFBQSxJQUV6QyxNQUFNLE9BQU8sUUFBUSxZQUFZLElBQUksS0FDckMsTUFBTSxPQUFPLFVBQVUsWUFBWSxNQUFNLEtBQ3pDLE1BQU0sT0FBT0QsWUFBUSxZQUFZQSxRQUFJO0FBQUEsSUFFcEMsMkJBQVk7QUFBRSxhQUFPO0FBQUEs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QUFPLE1BQStEO0FBQzlHSixZQUFVTixLQUF1QixZQUFZLEVBQUVTLElBQUlDLE9BQU87QUFDM0Q7O0FDTkEsSUFBTWpNLHVCQUF1QkEsQ0FBQztFQUFDNkw7QUFBUyxNQUFnRDtBQUFBLE1BQUFLO0FBQ3ZGLFVBQUFBLHdCQUFPTCxVQUFVTixLQUEwQixhQUFhLEVBQUVZLGNBQWMsYUFBYSxPQUFBLFFBQUFELDBCQUFBLFNBQUFBLHdCQUFLO0FBQzNGO0FBRUEsSUFBTTFMLHVCQUF1QkEsQ0FBQztFQUFDcUw7RUFBV0k7QUFBTyxNQUErRDtBQUMvR0osWUFBVU4sS0FBMEIsYUFBYSxFQUFFWSxjQUFjLGVBQWVGLE9BQU87QUFDeEY7IiwKICAibmFtZXMiOiBbImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJTeW1ib2wiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJkb2N1bWVudCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIlR5cGVFcnJvciIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgImV4cG9ydHMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImFjdGl2ZVhEb2N1bWVudCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICIkIiwgImdsb2JhbFRoaXMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiJCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICIkIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIiQiLCAiJCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJVdGlsX2V4cG9ydHMiLCAiX19leHBvcnQiLCAiTXdVcmkiLCAiYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyIiwgImNoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUiLCAiY2hlY2tBMTF5Q29uZmlybUtleSIsICJjaGVja0RlcGVuZGVuY2llcyIsICJkZWxheSIsICJmaW5kVmFyaWFudHMiLCAiZ2VuZXJhdGVBcnJheSIsICJnZW5lcmF0ZVN2Z0RhdGFVcmwiLCAiZ2V0Qm9keSIsICJnZXRXcFN1bW1hcnlDb250ZW50IiwgImdldFdwVGV4dGJveDFDb250ZW50IiwgImluaXRNd0FwaSIsICJpc1ZhbGlkS2V5IiwgIm9vdWlDb25maXJtV2l0aFN0eWxlIiwgInF1ZXJ5R2xvYmFsVXNlckdyb3VwcyIsICJxdWVyeVVzZXJHcm91cHMiLCAic2Nyb2xsVG9wIiwgInNldFdwU3VtbWFyeUNvbnRlbnQiLCAic2V0V3BUZXh0Ym94MUNvbnRlbnQiLCAidW5pcXVlQXJyYXkiLCAidXNlcklzSW5Hcm91cCIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJfX3RvQ29tbW9uSlMiLCAidGFyZ2V0IiwgInR5cGUiLCAibGlzdGVuZXIiLCAib3B0aW9ucyIsICJhZGRFdmVudExpc3RlbmVyIiwgInJlbW92ZSIsICJyZW1vdmVFdmVudExpc3RlbmVyIiwgImV2ZW50IiwgIm9wYWNpdHkiLCAiY3VycmVudFRhcmdldCIsICJzdHlsZSIsICJ0b1N0cmluZyIsICJpbmNsdWRlcyIsICJrZXkiLCAiYXJncyIsICJmbGF0TWFwIiwgImFyZyIsICJBcnJheSIsICJpc0FycmF5IiwgIk5vZGVMaXN0IiwgInVzZXJBZ2VudCIsICJhcGlVcmkiLCAiYXBpT3B0aW9ucyIsICJhamF4IiwgImhlYWRlcnMiLCAiY29uY2F0IiwgIm13IiwgIkZvcmVpZ25BcGkiLCAiQXBpIiwgInVuaXF1ZUFycmF5MiIsICJyZXN1bHQiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiaXRlbSIsICJ2YWx1ZSIsICJsZW5ndGgiLCAiZXJyIiwgImUiLCAiZiIsICJfeCIsICJfeDIiLCAiX2NoZWNrRGVwZW5kZW5jaWVzIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJnYWRnZXROYW1lcyIsICJvcHRpb24iLCAiYXBpIiwgImdhZGdldHMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiZ2FkZ2V0IiwgInVzZXIiLCAiZ2V0IiwgInBvc3RXaXRoRWRpdFRva2VuIiwgImFjdGlvbiIsICJjaGFuZ2UiLCAibG9hZGVyIiwgInVzaW5nIiwgIm1zIiwgIlByb21pc2UiLCAicmVzb2x2ZSIsICJzZXRUaW1lb3V0IiwgIl94MyIsICJfZmluZFZhcmlhbnRzIiwgInRleHQiLCAiVkFSSUFOVFMiLCAiYWxsVmFyaWFudHMiLCAicGFyYW1zIiwgImNvbnRlbnRtb2RlbCIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInRpdGxlIiwgIl9pMiIsICJfVkFSSUFOVFMiLCAiX3Jlc3BvbnNlJHF1ZXJ5IiwgInZhcmlhbnQiLCAidXNlbGFuZyIsICJyZXNwb25zZSIsICJwb3N0IiwgImRpc3BsYXl0aXRsZSIsICJ2YXJpYW50RWxlbWVudCIsICJkb2N1bWVudCIsICJjcmVhdGVFbGVtZW50IiwgImlubmVySFRNTCIsICJ0ZXh0Q29udGVudCIsICJzdmciLCAidHJpbSIsICJzbGljZSIsICJpbmRleE9mIiwgInN0YXJ0c1dpdGgiLCAiZW5kc1dpdGgiLCAicmVwbGFjZSIsICJlbmNvZGVVUklDb21wb25lbnQiLCAiJCIsICJyZWFkeSIsICJ0aGVuIiwgIiRib2R5IiwgIm9iamVjdCIsICJVUkwiLCAiZXh0ZW5kIiwgIl9pIiwgIl9PYmplY3QkZW50cmllcyIsICJPYmplY3QiLCAiZW50cmllcyIsICJzZWFyY2hQYXJhbXMiLCAic2V0IiwgImdldFJlbGF0aXZlUGF0aCIsICJwYXRobmFtZSIsICJzZWFyY2giLCAiaGFzaCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAibWVzc2FnZSIsICJPTyIsICJ1aSIsICJjb25maXJtIiwgImRlZmF1bHQiLCAiY2xhc3NOYW1lIiwgImJvcmRlciIsICJkaXNwbGF5IiwgImp1c3RpZnlDb250ZW50IiwgImZvbnRTaXplIiwgImZvbnRXZWlnaHQiLCAibGluZUhlaWdodCIsICJwYWRkaW5nIiwgImlzQ29uZmlybSIsICJfeDQiLCAiX3F1ZXJ5R2xvYmFsVXNlckdyb3VwcyIsICJndWl1c2VyIiwgIkNBQ0hFX0tFWV9QUkVGSVgiLCAiZ3JvdXBzIiwgInN0b3JhZ2UiLCAiZ2V0T2JqZWN0IiwgImZpbHRlciIsICJlbGVtZW50IiwgIm1ldGEiLCAiZ3VpcHJvcCIsICJzbWF4YWdlIiwgIm1heGFnZSIsICJxdWVyeSIsICJnbG9iYWx1c2VyaW5mbyIsICJfcXVlcnkkZ2xvYmFsdXNlcmluZm8iLCAiX3F1ZXJ5JGdsb2JhbHVzZXJpbmZvMiIsICJzZXRPYmplY3QiLCAibmFtZSIsICJfeDUiLCAiX3F1ZXJ5VXNlckdyb3VwcyIsICJ1c2VycyIsICJfcXVlcnkkdXNlcnMiLCAiY2FjaGVkUXVlcnlVc2VycyIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJ1c3VzZXJzIiwgInYiLCAibGlzdCIsICJ1c3Byb3AiLCAicXVlcnlVc2VycyIsICJfaTMiLCAiX3F1ZXJ5VXNlcnMiLCAidGFyZ2V0SGVpZ2h0IiwgImVmZmVjdHNPcHRpb25zT3JEdXJhdGlvbiIsICJkdXJhdGlvbiIsICJlYXNpbmciLCAiZmluZCIsICJhbmltYXRlIiwgIndnVXNlckdyb3VwcyIsICJ3Z0dsb2JhbEdyb3VwcyIsICJjb25maWciLCAic29tZSIsICIkZWRpdEZvcm0iLCAiXyRlZGl0Rm9ybSRmaW5kJHZhbCIsICJfJGVkaXRGb3JtJGZpbmQiLCAidmFsIiwgImNvbnRlbnQiLCAiXyRlZGl0Rm9ybSRmaW5kJHRleHRTIiwgInRleHRTZWxlY3Rpb24iXQp9Cg==
