/**
 * SPDX-License-Identifier: CC-BY-SA-4.0 OR Apache-2.0
 * _addText: '{{Gadget Header|title=Wikiplus|license=CC-BY-SA-4.0|license2=Apache-2.0}}'
 *
 * Wikiplus
 *
 * @base {@link https://github.com/Wikiplus/Wikiplus}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/Wikiplus}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/Wikiplus/}
 * @author Eridanus Sora (妹空酱)
 * @license CC-BY-SA-4.0 {@link https://youshou.wiki/wiki/H:CC-BY-SA-4.0} OR Apache-2.0 {@link http://www.apache.org/licenses/LICENSE-2.0}
 */

/**
 * Copyright 2014-2024 Eridanus Sora (妹空酱)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
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
    var navigator2 = globalThis2.navigator;
    var userAgent = navigator2 && navigator2.userAgent;
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-array.js
var require_is_array = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-array.js"(exports, module2) {
    "use strict";
    var classof = require_classof_raw();
    module2.exports = Array.isArray || function isArray(argument) {
      return classof(argument) === "Array";
    };
  }
});

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/array-set-length.js
var require_array_set_length = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/array-set-length.js"(exports, module2) {
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
    module2.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function(O, length) {
      if (isArray(O) && !getOwnPropertyDescriptor(O, "length").writable) {
        throw new $TypeError("Cannot set read only .length");
      }
      return O.length = length;
    } : function(O, length) {
      return O.length = length;
    };
  }
});

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/does-not-exceed-safe-integer.js
var require_does_not_exceed_safe_integer = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/does-not-exceed-safe-integer.js"(exports, module2) {
    "use strict";
    var $TypeError = TypeError;
    var MAX_SAFE_INTEGER = 9007199254740991;
    module2.exports = function(it) {
      if (it > MAX_SAFE_INTEGER) throw $TypeError("Maximum allowed index exceeded");
      return it;
    };
  }
});

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/modules/es.array.push.js
var require_es_array_push = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/modules/es.array.push.js"() {
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
        var O = toObject(this);
        var len = lengthOfArrayLike(O);
        var argCount = arguments.length;
        doesNotExceedSafeInteger(len + argCount);
        for (var i = 0; i < argCount; i++) {
          O[len] = arguments[i];
          len++;
        }
        setArrayLength(O, len);
        return len;
      }
    });
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-uncurry-this-clause.js
var require_function_uncurry_this_clause = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-uncurry-this-clause.js"(exports, module2) {
    "use strict";
    var classofRaw = require_classof_raw();
    var uncurryThis = require_function_uncurry_this();
    module2.exports = function(fn) {
      if (classofRaw(fn) === "Function") return uncurryThis(fn);
    };
  }
});

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-bind-context.js
var require_function_bind_context = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/function-bind-context.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/iterators.js
var require_iterators = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/iterators.js"(exports, module2) {
    "use strict";
    module2.exports = {};
  }
});

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-array-iterator-method.js
var require_is_array_iterator_method = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/is-array-iterator-method.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-string-tag-support.js
var require_to_string_tag_support = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-string-tag-support.js"(exports, module2) {
    "use strict";
    var wellKnownSymbol = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    var test = {};
    test[TO_STRING_TAG] = "z";
    module2.exports = String(test) === "[object z]";
  }
});

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/classof.js
var require_classof = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/classof.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/get-iterator-method.js
var require_get_iterator_method = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/get-iterator-method.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/get-iterator.js
var require_get_iterator = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/get-iterator.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/iterate.js
var require_iterate = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/iterate.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/modules/es.iterator.find.js
var require_es_iterator_find = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/modules/es.iterator.find.js"() {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-string.js
var require_to_string = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/to-string.js"(exports, module2) {
    "use strict";
    var classof = require_classof();
    var $String = String;
    module2.exports = function(argument) {
      if (classof(argument) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
      return $String(argument);
    };
  }
});

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/validate-arguments-length.js
var require_validate_arguments_length = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/internals/validate-arguments-length.js"(exports, module2) {
    "use strict";
    var $TypeError = TypeError;
    module2.exports = function(passed, required) {
      if (passed < required) throw new $TypeError("Not enough arguments");
      return passed;
    };
  }
});

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/modules/web.url-search-params.delete.js
var require_web_url_search_params_delete = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/modules/web.url-search-params.delete.js"() {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/modules/web.url-search-params.has.js
var require_web_url_search_params_has = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/modules/web.url-search-params.has.js"() {
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

// node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/modules/web.url-search-params.size.js
var require_web_url_search_params_size = __commonJS({
  "node_modules/.pnpm/core-js@3.41.0/node_modules/core-js/modules/web.url-search-params.size.js"() {
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

// dist/Wikiplus/Wikiplus.js
require_es_array_push();
require_es_iterator_constructor();
require_es_iterator_find();
require_web_url_search_params_delete();
require_web_url_search_params_has();
require_web_url_search_params_size();
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
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames2(fn)[0]])(fn = 0)), res;
};
//! src/Wikiplus/modules/utils/constants.js
var Constants;
var constants_default;
var init_constants = __esm({
  "src/Wikiplus/modules/utils/constants.js"() {
    "use strict";
    Constants = class {
      version = "4.1.0";
      get isArticle() {
        return window.mw.config.get("wgIsArticle");
      }
      get currentPageName() {
        return window.mw.config.get("wgPageName").replace(/ /g, "_");
      }
      get articleId() {
        return window.mw.config.get("wgArticleId");
      }
      get revisionId() {
        return window.mw.config.get("wgRevisionId");
      }
      get latestRevisionId() {
        return window.mw.config.get("wgCurRevisionId");
      }
      get articlePath() {
        return window.mw.config.get("wgArticlePath");
      }
      get scriptPath() {
        return window.mw.config.get("wgScriptPath");
      }
      get action() {
        return window.mw.config.get("wgAction");
      }
      get skin() {
        return window.mw.config.get("skin");
      }
      get userGroups() {
        return window.mw.config.get("wgUserGroups");
      }
      get wikiId() {
        return window.mw.config.get("wgWikiID");
      }
      userAgent = "YsArchives/1.1 Wikiplus/".concat(this.version, " (").concat(this.wikiId, ")");
    };
    constants_default = new Constants();
  }
});
//! src/Wikiplus/modules/utils/requests.js
var Requests;
var requests_default;
var init_requests = __esm({
  "src/Wikiplus/modules/utils/requests.js"() {
    "use strict";
    init_constants();
    Requests = {
      base: "".concat(location.protocol, "//").concat(location.host).concat(constants_default.scriptPath, "/api.php"),
      get(query) {
        return _asyncToGenerator(function* () {
          const url = new URL(Requests.base);
          for (var _i = 0, _Object$keys = Object.keys(query); _i < _Object$keys.length; _i++) {
            const key = _Object$keys[_i];
            url.searchParams.append(key, query[key]);
          }
          const response = yield fetch(url, {
            credentials: "same-origin",
            headers: {
              "Api-User-Agent": constants_default.userAgent
            }
          });
          return yield response.json();
        })();
      },
      post(payload) {
        return _asyncToGenerator(function* () {
          const url = new URL(Requests.base);
          const form = new FormData();
          for (var _i2 = 0, _Object$entries = Object.entries(payload); _i2 < _Object$entries.length; _i2++) {
            const [key, value] = _Object$entries[_i2];
            form.append(key, value);
          }
          const response = yield fetch(url, {
            method: "POST",
            body: form,
            credentials: "same-origin",
            headers: {
              "Api-User-Agent": constants_default.userAgent
            }
          });
          return yield response.json();
        })();
      }
    };
    requests_default = Requests;
  }
});
//! src/Wikiplus/modules/utils/i18n.js
var I18n;
var i18n_default;
var init_i18n = __esm({
  "src/Wikiplus/modules/utils/i18n.js"() {
    "use strict";
    I18n = class {
      language;
      i18nData = {};
      sessionUpdateLog = [];
      constructor() {
        let language;
        try {
          language = JSON.parse(localStorage["Wikiplus_Settings"])["language"] || navigator.language.toLowerCase();
        } catch {
          language = (navigator.language || navigator.browserLanguage).replace(/han[st]-?/i, "").toLowerCase();
        }
        this.language = language;
        try {
          const i18nCache = JSON.parse(localStorage.getItem("Wikiplus_i18nCache"));
          for (var _i3 = 0, _Object$keys2 = Object.keys(i18nCache); _i3 < _Object$keys2.length; _i3++) {
            const key = _Object$keys2[_i3];
            this.i18nData[key] = i18nCache[key];
          }
        } catch {
          localStorage.setItem("Wikiplus_i18nCache", "{}");
        }
      }
      translate(key, placeholders = []) {
        let result = "";
        if (this.language in this.i18nData) {
          if (key in this.i18nData[this.language]) {
            result = this.i18nData[this.language][key];
          } else {
            this.loadLanguage(this.language);
            if (key in this.i18nData["en-us"]) {
              result = this.i18nData["en-us"][key];
            } else {
              result = key;
            }
          }
        } else {
          this.loadLanguage(this.language);
        }
        if (placeholders.length > 0) {
          var _iterator = _createForOfIteratorHelper(placeholders.entries()), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              const [index, placeholder] = _step.value;
              result = result.replace("$".concat(index + 1), placeholder);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        return result;
      }
      loadLanguage(language) {
        var _this = this;
        return _asyncToGenerator(function* () {
          if (_this.sessionUpdateLog.includes(language)) {
            return;
          }
          try {
            const response = yield (yield fetch("https://gitcdn.qiuwen.net.cn/InterfaceAdmin/Wikiplus/raw/branch/dev/languages/".concat(language, ".json"))).json();
            const nowVersion = localStorage.getItem("Wikiplus_LanguageVersion") || "000";
            _this.sessionUpdateLog.push(language);
            if (response.__version !== nowVersion || !(language in _this.i18nData)) {
              console.info("Update ".concat(language, " support to version ").concat(response.__version));
              _this.i18nData[language] = response;
              localStorage.setItem("Wikiplus_i18nCache", JSON.stringify(_this.i18nData));
            }
          } catch {
          }
        })();
      }
    };
    i18n_default = new I18n();
  }
});
//! src/Wikiplus/modules/utils/log.js
var WikiplusError;
var Log;
var log_default;
var init_log = __esm({
  "src/Wikiplus/modules/utils/log.js"() {
    "use strict";
    init_i18n();
    WikiplusError = class extends Error {
      constructor(message, code) {
        super(message);
        this.code = code;
      }
    };
    Log = {
      debug(message = "") {
        console.debug("[Wikiplus-DEBUG] ".concat(message));
      },
      info(message = "") {
        console.info("[Wikiplus-INFO] ".concat(message));
      },
      error(errorCode, payloads = []) {
        let template = i18n_default.translate(errorCode);
        if (payloads.length > 0) {
          var _iterator2 = _createForOfIteratorHelper(payloads.entries()), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              const [i, v] = _step2.value;
              template = template.replace(new RegExp("\\".concat(i + 1), "ig"), v);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
        console.error("[Wikiplus-ERROR] ".concat(template));
        throw new WikiplusError("".concat(template), errorCode);
      }
    };
    log_default = Log;
  }
});
//! src/Wikiplus/modules/services/wiki.js
var Wiki;
var wiki_default;
var init_wiki = __esm({
  "src/Wikiplus/modules/services/wiki.js"() {
    "use strict";
    init_requests();
    init_log();
    init_i18n();
    Wiki = class {
      pageInfoCache = {};
      /**
       * 获得 Edit Token
       * Get Edit Token
       *
       * @returns {Promise<string>}
       */
      getEditToken() {
        return _asyncToGenerator(function* () {
          const response = yield requests_default.get({
            action: "query",
            meta: "tokens",
            format: "json"
          });
          if (response.query && response.query.tokens && response.query.tokens.csrftoken && response.query.tokens.csrftoken !== "+\\") {
            return response.query.tokens.csrftoken;
          }
          return log_default.error("fail_to_get_edittoken");
        })();
      }
      /**
       * 获得页面上一版本时间戳
       * Get the timestamp of the last revision of page specified.
       *
       * @param {params.string} title 页面名 / Pagename
       * @param {params.revisionId} revisionId 修订版本号 / Revision ID
       * @returns {Promise<string>}
       */
      getPageInfo({
        title,
        revisionId
      }) {
        var _this2 = this;
        return _asyncToGenerator(function* () {
          try {
            const params = {
              action: "query",
              prop: "revisions|info",
              rvprop: "timestamp|ids",
              format: "json"
            };
            if (revisionId) {
              params.revids = revisionId;
            } else if (title) {
              if (_this2.pageInfoCache[title]) {
                return {
                  timestamp: _this2.pageInfoCache[title].timestamp,
                  revisionId: _this2.pageInfoCache[title].revid
                };
              }
              params.titles = title;
            }
            const response = yield requests_default.get(params);
            if (response.query && response.query.pages) {
              if (Object.keys(response.query.pages)[0] === "-1") {
                return {};
              }
              const pageInfo = response.query.pages[Object.keys(response.query.pages)[0]].revisions[0];
              if (title) {
                _this2.pageInfoCache[title] = pageInfo;
              }
              return {
                timestamp: pageInfo.timestamp,
                revisionId: pageInfo.revid
              };
            }
          } catch {
            log_default.error("fail_to_get_edittoken");
          }
        })();
      }
      /**
       * 获得页面的 Wikitext
       * Get wikitext of the page.
       *
       * @param {string} title title
       * @param {Object} config
       * @param {string} config.revisionId 版本号
       * @param {string} config.section 段落号
       * @return {Promise<string>} wikitext内容
       */
      getWikiText({
        section,
        revisionId
      }) {
        return _asyncToGenerator(function* () {
          try {
            const params = {
              action: "query",
              prop: "revisions",
              rvprop: "content",
              format: "json",
              revids: revisionId
            };
            if (revisionId) {
              params.revids = revisionId;
            }
            if (section) {
              params.rvsection = section;
            }
            const response = yield requests_default.get(params);
            if (response.query && response.query.pages) {
              if (Object.keys(response.query.pages)[0] === "-1") {
                return "";
              }
              const pageInfo = response.query.pages[Object.keys(response.query.pages)[0]].revisions[0];
              return pageInfo["*"];
            }
          } catch {
            log_default.error("fail_to_get_wikitext");
          }
        })();
      }
      /**
       * 解析 Wikitext
       *
       * @param {string} wikitext wikitext
       * @param {string} title 页面标题
       * @param {Object} config 设置
       * @return {Promise<string>} 解析结果 HTML
       */
      parseWikiText(wikitext, title = "", config = {}) {
        return _asyncToGenerator(function* () {
          try {
            const response = yield requests_default.post({
              format: "json",
              action: "parse",
              text: wikitext,
              title,
              pst: "true"
            });
            if (response.parse && response.parse.text) {
              return response.parse.text["*"];
            }
          } catch {
            log_default.error("cant_parse_wikitext");
          }
        })();
      }
      /**
       * 编辑页面
       *
       * @param root0
       * @param root0.title
       * @param root0.content
       * @param root0.editToken
       * @param root0.timestamp
       * @param root0.config
       * @param root0.additionalConfig
       */
      edit({
        title,
        content,
        editToken,
        timestamp,
        config = {},
        additionalConfig = {}
      } = {}) {
        return _asyncToGenerator(function* () {
          let response;
          try {
            response = yield requests_default.post({
              action: "edit",
              format: "json",
              text: content,
              title,
              token: editToken,
              ...timestamp ? {
                basetimestamp: timestamp
              } : {},
              ...config,
              ...additionalConfig
            });
          } catch {
            log_default.error("network_edit_error");
          }
          if (response.edit) {
            if (response.edit.result === "Success") {
              return true;
            }
            if (response.edit.code) {
              throw new Error("\n                        ".concat(i18n_default.translate("hit_abusefilter"), ":").concat(response.edit.info.replace("/Hit AbuseFilter: /ig", ""), '\n                        <br>\n                        <div style="font-size: smaller;">').concat(response.edit.warning, "</div>\n                    "));
            } else {
              log_default.error("unknown_edit_error");
            }
          } else if (response.error && response.error.code) {
            log_default.error(response.error.code);
          } else if (response.code) {
            log_default.error(response.code);
          } else {
            log_default.error("unknown_edit_error");
          }
        })();
      }
      /**
       * 获得指定页面最新修订编号
       * Get latest revisionId of a page.
       *
       * @param {*} title
       */
      getLatestRevisionIdForPage(title) {
        var _this3 = this;
        return _asyncToGenerator(function* () {
          const {
            revisionId
          } = yield _this3.getPageInfo({
            title
          });
          return revisionId;
        })();
      }
    };
    wiki_default = new Wiki();
  }
});
//! src/Wikiplus/modules/core/page.js
var Page;
var page_default;
var init_page = __esm({
  "src/Wikiplus/modules/core/page.js"() {
    "use strict";
    init_wiki();
    init_log();
    Page = class {
      timestamp;
      editToken;
      title;
      revisionId;
      inited = false;
      isNewPage = false;
      sectionCache = {};
      /**
       * @param {params.title} 页面标题 Page Name (optional)
       * @param {params.revisionId} 页面修订编号 Revision Id
       */
      constructor({
        title,
        revisionId
      }) {
        this.title = title;
        this.revisionId = revisionId;
        this.isNewPage = !revisionId;
      }
      /**
       * 初始化 获得页面EditToken和初始TimeStamp
       * Initialization.
       *
       * @param {string} editToken (optional) 如果提供了editToken，将不会再获取
       */
      init({
        editToken = ""
      } = {}) {
        var _this4 = this;
        return _asyncToGenerator(function* () {
          const promiseArr = [_this4.getTimestamp()];
          if (!editToken) {
            promiseArr.push(_this4.getEditToken());
          }
          yield Promise.all(promiseArr);
          _this4.inited = true;
          log_default.info("Page initialization for ".concat(_this4.title, "#").concat(_this4.revisionId, " finished."));
        })();
      }
      /**
       * 获得 EditToken
       * Get EditToken
       */
      getEditToken() {
        var _this5 = this;
        return _asyncToGenerator(function* () {
          yield mw.loader.using("mediawiki.user");
          if (mw.user.tokens.get("csrfToken") && mw.user.tokens.get("csrfToken") !== "+\\") {
            _this5.editToken = mw.user.tokens.get("csrfToken");
            return;
          }
          _this5.editToken = yield wiki_default.getEditToken();
        })();
      }
      /**
       * 获得编辑基准时间戳
       * Get Base Timestamp
       */
      getTimestamp() {
        var _this6 = this;
        return _asyncToGenerator(function* () {
          const {
            timestamp,
            revisionId
          } = yield wiki_default.getPageInfo({
            revisionId: _this6.revisionId,
            title: _this6.title
          });
          _this6.timestamp = timestamp;
          if (revisionId) {
            _this6.revisionId = revisionId;
            _this6.isNewPage = false;
          }
        })();
      }
      /**
       * 获得 WikiText
       *
       * @param {Object} config
       * @param {string} config.section
       * @param {string} config.revisionId
       */
      getWikiText({
        section = ""
      } = {}) {
        var _this7 = this;
        return _asyncToGenerator(function* () {
          const sec = section === -1 ? "" : section;
          if (_this7.sectionCache[sec]) {
            return _this7.sectionCache[sec];
          }
          const wikiText = yield wiki_default.getWikiText({
            section: sec,
            revisionId: _this7.revisionId
          });
          log_default.info("Wikitext of ".concat(_this7.title, "#").concat(section, " fetched."));
          _this7.sectionCache[sec] = wikiText;
          return wikiText;
        })();
      }
      /**
       * 解析 WikiText
       *
       * @param {string} wikitext
       */
      parseWikiText(wikitext) {
        var _this8 = this;
        return _asyncToGenerator(function* () {
          return wiki_default.parseWikiText(wikitext, _this8.title);
        })();
      }
      /**
       * 编辑页面
       *
       * @param {*} config
       * @param payload
       */
      edit(payload) {
        var _this9 = this;
        return _asyncToGenerator(function* () {
          if (!_this9.editToken) {
            log_default.error("fail_to_get_edittoken");
            return;
          }
          if (!_this9.timestamp && !_this9.isNewPage) {
            log_default.error("fail_to_get_timestamp");
            return;
          }
          return wiki_default.edit({
            title: _this9.title,
            editToken: _this9.editToken,
            ..._this9.timestamp ? {
              timestamp: _this9.timestamp
            } : {},
            ...payload,
            additionalConfig: {
              ..._this9.isNewPage ? {
                createonly: _this9.isNewPage
              } : {}
            }
          });
        })();
      }
    };
    page_default = Page;
  }
});
//! src/Wikiplus/modules/core/notification.js
var Notification;
var notification_default;
var init_notification = __esm({
  "src/Wikiplus/modules/core/notification.js"() {
    "use strict";
    Notification = class {
      constructor() {
        this.init();
      }
      init() {
        $("body").append('<div id="MoeNotification"></div>');
      }
      display(text = "喵~", type = "success", callback = () => {
      }) {
        $("#MoeNotification").append($("<div>").addClass("MoeNotification-notice").addClass("MoeNotification-notice-".concat(type)).append("<span>".concat(text, "</span>")));
        $("#MoeNotification").find(".MoeNotification-notice").last().fadeIn(300);
        this.bind();
        this.clear();
        callback($("#MoeNotification").find(".MoeNotification-notice").last());
      }
      bind() {
        const self2 = this;
        $(".MoeNotification-notice").on("mouseover", function() {
          self2.slideLeft($(this));
        });
      }
      success(text, callback) {
        this.display(text, "success", callback);
      }
      warning(text, callback) {
        this.display(text, "warning", callback);
      }
      error(text, callback) {
        this.display(text, "error", callback);
      }
      clear() {
        if ($(".MoeNotification-notice").length >= 10) {
          $("#MoeNotification").children().first().fadeOut(150, function() {
            $(this).remove();
          });
          setTimeout(this.clear, 300);
        }
      }
      empty(f) {
        $(".MoeNotification-notice").each(function(i) {
          if (typeof f === "function") {
            const ele = $(this);
            setTimeout(() => {
              f(ele);
            }, 200 * i);
          } else {
            $(this).delay(i * 200).fadeOut("fast", function() {
              $(this).remove();
            });
          }
        });
      }
      slideLeft(ele, speed) {
        ele.css("position", "relative");
        ele.animate({
          left: "-200%"
        }, speed || 150, function() {
          $(this).fadeOut("fast", function() {
            $(this).remove();
          });
        });
      }
    };
    notification_default = new Notification();
  }
});
//! src/Wikiplus/modules/utils/sleep.js
var sleep;
var sleep_default;
var init_sleep = __esm({
  "src/Wikiplus/modules/utils/sleep.js"() {
    "use strict";
    sleep = (time) => {
      return new Promise((resolve) => {
        return setTimeout(resolve, time);
      });
    };
    sleep_default = sleep;
  }
});
//! src/Wikiplus/modules/utils/helpers.js
function parseQuery(url) {
  const reg = /(([^?&=]+)(?:=([^?&=]*))*)/g;
  const params = {};
  let match;
  while (match = reg.exec(url)) {
    try {
      params[match[2]] = decodeURIComponent(match[3]);
    } catch {
      params[match[2]] = match[3];
    }
  }
  return params;
}
var init_helpers = __esm({
  "src/Wikiplus/modules/utils/helpers.js"() {
    "use strict";
  }
});
//! src/Wikiplus/modules/core/ui.js
var UI;
var ui_default;
var init_ui = __esm({
  "src/Wikiplus/modules/core/ui.js"() {
    "use strict";
    init_constants();
    init_notification();
    init_i18n();
    init_log();
    init_sleep();
    init_helpers();
    UI = class {
      quickEditPanelVisible = false;
      scrollTop = 0;
      /**
       * 创建居中对话框
       *
       * @param {string} title 窗口标题
       * @param {string | JQuery<HTMLElement>} content 内容
       * @param {*} width 宽度
       * @param {*} callback 回调函数
       */
      createDialogBox(title = "Wikiplus", content = "", width = 600, callback = () => {
      }) {
        if ($(".Wikiplus-InterBox").length > 0) {
          $(".Wikiplus-InterBox").each(function() {
            $(this).remove();
          });
        }
        const clientWidth = window.innerWidth;
        const clientHeight = window.innerHeight;
        const dialogWidth = Math.min(clientWidth, width);
        const dialogBox = $("<div>").addClass("Wikiplus-InterBox").css({
          "margin-left": clientWidth / 2 - dialogWidth / 2,
          top: $(document).scrollTop() + clientHeight * 0.2,
          display: "none"
        }).append($("<div>").addClass("Wikiplus-InterBox-Header").html(title)).append($("<div>").addClass("Wikiplus-InterBox-Content").append(content)).append($("<span>").text("×").addClass("Wikiplus-InterBox-Close"));
        $("body").append(dialogBox);
        $(".Wikiplus-InterBox").width(dialogWidth);
        $(".Wikiplus-InterBox-Close").on("click", function() {
          $(this).parent().fadeOut("fast", function() {
            window.addEventListener("close", window.onbeforeunload = void 0);
            $(this).remove();
          });
        });
        const bindDragging = function(element) {
          element.mousedown((e) => {
            const baseX = e.clientX;
            const baseY = e.clientY;
            const baseOffsetX = element.parent().offset().left;
            const baseOffsetY = element.parent().offset().top;
            $(document).on("mousemove", (e2) => {
              element.parent().css({
                "margin-left": baseOffsetX + e2.clientX - baseX,
                top: baseOffsetY + e2.clientY - baseY
              });
            });
            $(document).on("mouseup", () => {
              element.unbind("mousedown");
              $(document).off("mousemove");
              $(document).off("mouseup");
              bindDragging(element);
            });
          });
        };
        bindDragging($(".Wikiplus-InterBox-Header"));
        $(".Wikiplus-InterBox").fadeIn(500);
        callback();
        return dialogBox;
      }
      /**
       * 在搜索框左侧「更多」菜单内添加按钮
       * Add a button in "More" menu (left of the search bar)
       *
       * @param {string} text 按钮名 Button text
       * @param {string} id 按钮id Button id
       * @return {JQuery<HTMLElement>} button
       */
      addFunctionButton(text, id) {
        let button;
        switch (constants_default.skin) {
          case "minerva":
            button = $("<li>").attr("id", id).addClass("toggle-list-item").append($("<a>").addClass("mw-ui-icon mw-ui-icon-before toggle-list-item__anchor").append($("<span>").attr("href", "javascript:void(0);").addClass("toggle-list-item__label").text(text)));
            break;
          case "moeskin":
            button = $("<li>").addClass("Wikiplus-More-Function-Button").attr("id", id).append($("<a>").attr("href", "javascript:void(0);").text(text));
            break;
          default:
            button = $("<li>").addClass("mw-list-item").addClass("vector-tab-noicon").attr("id", id).append($("<a>").attr("href", "javascript:void(0);").text(text));
        }
        if (constants_default.skin === "minerva" && $("#p-tb").length > 0) {
          $("#p-tb").append(button);
          return $("#".concat(id));
        } else if (constants_default.skin === "moeskin") {
          $(".more-actions-list").first().append(button);
          return $("#".concat(id));
        } else if ($("#p-cactions").length > 0) {
          $("#p-cactions ul").append(button);
          return $("#".concat(id));
        }
        log_default.info(i18n_default.translate("cant_add_funcbtn"));
      }
      /**
       * 插入快速重定向按钮
       *
       * @param {*} onClick
       */
      insertSimpleRedirectButton(onClick = () => {
      }) {
        const button = this.addFunctionButton(i18n_default.translate("redirect_from"), "Wikiplus-SR-Intro");
        if (button) {
          button.on("click", onClick);
        }
      }
      /**
       * 插入设置面板按钮
       *
       * @param {*} onClick
       */
      insertSettingsPanelButton(onClick = () => {
      }) {
        const button = this.addFunctionButton(i18n_default.translate("wikiplus_settings"), "Wikiplus-Settings-Intro");
        if (button) {
          button.on("click", onClick);
        }
      }
      /**
       * 插入顶部快速编辑按钮
       * Insert QuickEdit button besides page edit button.
       *
       * @param onClick
       */
      insertTopQuickEditEntry(onClick) {
        const topBtn = $("<li>").attr("id", "Wikiplus-Edit-TopBtn").attr("class", "mw-list-item");
        const topBtnLink = $("<a>").attr("href", "javascript:void(0)").text("".concat(i18n_default.translate("quickedit_topbtn")));
        topBtn.append(topBtnLink);
        switch (constants_default.skin) {
          case "minerva":
            topBtn.css({
              "align-items": "center",
              display: "flex"
            });
            topBtn.find("span").addClass("page-actions-menu__list-item");
            topBtn.find("a").addClass("mw-ui-icon mw-ui-icon-element mw-ui-icon-wikimedia-edit-base20 mw-ui-icon-with-label-desktop").css("vertical-align", "middle");
            break;
          case "vector-2022":
            topBtn.addClass("vector-tab-noicon");
            break;
          case "vector":
            topBtn.append($("<span>").append(topBtnLink));
            break;
          default:
        }
        $(topBtn).on("click", () => {
          onClick({
            sectionNumber: -1,
            targetPageName: constants_default.currentPageName
          });
        });
        if ($("#ca-edit").length > 0 && $("#Wikiplus-Edit-TopBtn").length === 0) {
          constants_default.skin === "minerva" ? $("#ca-edit").parent().after(topBtn) : $("#ca-edit").after(topBtn);
        }
      }
      /**
       * 插入段落快速编辑按钮
       * Insert QuickEdit buttons for each section.
       *
       * @param onClick
       */
      insertSectionQuickEditEntries(onClick = () => {
      }) {
        const sectionBtn = constants_default.skin === "minerva" ? $("<span>").append($("<a>").addClass("Wikiplus-Edit-SectionBtn mw-ui-icon mw-ui-icon-element mw-ui-icon-wikimedia-edit-base20 edit-page mw-ui-icon-flush-right").css("margin-left", "0.75em").attr("href", "javascript:void(0)").attr("title", i18n_default.translate("quickedit_sectionbtn"))) : $("<span>").append($("<span>").addClass("mw-editsection-divider").text(" | ")).append($("<a>").addClass("Wikiplus-Edit-SectionBtn").attr("href", "javascript:void(0)").text(i18n_default.translate("quickedit_sectionbtn")));
        $(".mw-editsection").each(function(i) {
          try {
            const editURL = $(this).find("a[href*='action=edit']").first().attr("href");
            const sectionNumber = editURL.match(/&[ve]*section\=([^&]+)/)[1].replace(/T-/gi, "");
            const sectionTargetName = decodeURIComponent(editURL.match(/title=(.+?)&/)[1]);
            const cloneNode = $(this).prev().clone();
            cloneNode.find(".mw-headline-number").remove();
            const sectionName = cloneNode.text().trim();
            const _sectionBtn = sectionBtn.clone();
            _sectionBtn.find(".Wikiplus-Edit-SectionBtn").on("click", () => {
              onClick({
                sectionNumber,
                sectionName,
                targetPageName: sectionTargetName
              });
            });
            constants_default.skin === "minerva" ? $(this).append(_sectionBtn) : $(this).find(".mw-editsection-bracket").last().before(_sectionBtn);
          } catch {
            log_default.error("fail_to_init_quickedit");
          }
        });
      }
      /**
       * 插入任意链接编辑入口
       *
       * @param {*} onClick
       */
      insertLinkEditEntries(onClick = () => {
      }) {
        $("#mw-content-text a.external").each(function(i) {
          const url = $(this).attr("href");
          const params = parseQuery(url);
          if (params.action === "edit" && params.title !== void 0 && params.section !== "new") {
            $(this).after($("<a>").attr({
              href: "javascript:void(0)",
              class: "Wikiplus-Edit-EveryWhereBtn"
            }).text("(".concat(i18n_default.translate("quickedit_sectionbtn"), ")")).on("click", () => {
              var _params$section;
              onClick({
                targetPageName: params.title,
                sectionNumber: (_params$section = params.section) !== null && _params$section !== void 0 ? _params$section : -1
              });
            }));
          }
        });
      }
      showQuickEditPanel({
        title = "",
        content = "",
        summary = "",
        onBack = () => {
        },
        onParse = () => {
        },
        onEdit = () => {
        },
        escExit = false
      }) {
        const self2 = this;
        this.scrollTop = $(document).scrollTop();
        if (this.quickEditPanelVisible) {
          this.hideQuickEditPanel();
        }
        this.quickEditPanelVisible = true;
        window.addEventListener("close", window.onbeforeunload = function() {
          return "".concat(i18n_default.translate("onclose_confirm"));
        });
        const isNewPage = $(".noarticletext").length > 0;
        const backBtn = $("<span>").attr("id", "Wikiplus-Quickedit-Back").addClass("Wikiplus-Btn").text("".concat(i18n_default.translate("back")));
        const jumpBtn = $("<span>").attr("id", "Wikiplus-Quickedit-Jump").addClass("Wikiplus-Btn").append($("<a>").attr("href", "#Wikiplus-Quickedit").text("".concat(i18n_default.translate("goto_editbox"))));
        const inputBox = $("<textarea>").attr("id", "Wikiplus-Quickedit");
        const previewBox = $("<div>").attr("id", "Wikiplus-Quickedit-Preview-Output");
        const summaryBox = $("<input>").attr("id", "Wikiplus-Quickedit-Summary-Input").attr("placeholder", "".concat(i18n_default.translate("summary_placehold")));
        const editSubmitBtn = $("<button>").attr("id", "Wikiplus-Quickedit-Submit").text("".concat(i18n_default.translate(isNewPage ? "publish_page" : "publish_change"), "(Ctrl+S)"));
        const previewSubmitBtn = $("<button>").attr("id", "Wikiplus-Quickedit-Preview-Submit").text("".concat(i18n_default.translate("preview")));
        const isMinorEdit = $("<div>").append($("<input>").attr({
          type: "checkbox",
          id: "Wikiplus-Quickedit-MinorEdit"
        })).append($("<label>").attr("for", "Wikiplus-Quickedit-MinorEdit").text("".concat(i18n_default.translate("mark_minoredit"), "(Ctrl+Shift+S)"))).css({
          margin: "5px 5px 5px -3px",
          display: "inline"
        });
        const editBody = $("<div>").append(backBtn, jumpBtn, previewBox, inputBox, summaryBox, $("<br>"), isMinorEdit, editSubmitBtn, previewSubmitBtn);
        this.createDialogBox(title, editBody, 1e3, () => {
          $("#Wikiplus-Quickedit").val(content);
          $("#Wikiplus-Quickedit-Summary-Input").val(summary);
        });
        $("#Wikiplus-Quickedit-Back").on("click", onBack);
        $("#Wikiplus-Quickedit-Preview-Submit").on("click", /* @__PURE__ */ _asyncToGenerator(function* () {
          const preloadBanner = $("<div>").addClass("Wikiplus-Banner").text("".concat(i18n_default.translate("loading_preview")));
          const wikiText = $("#Wikiplus-Quickedit").val();
          $(this).attr("disabled", "disabled");
          $("#Wikiplus-Quickedit-Preview-Output").fadeOut(100, () => {
            $("#Wikiplus-Quickedit-Preview-Output").html("").append(preloadBanner);
            $("#Wikiplus-Quickedit-Preview-Output").fadeIn(100);
          });
          $("html, body").animate({
            scrollTop: self2.scrollTop
          }, 200);
          const result = yield onParse(wikiText);
          $("#Wikiplus-Quickedit-Preview-Output").fadeOut("100", () => {
            $("#Wikiplus-Quickedit-Preview-Output").html('<hr><div class="mw-body-content">'.concat(result, "</div><hr>"));
            $("#Wikiplus-Quickedit-Preview-Output").fadeIn("100");
            $("#Wikiplus-Quickedit-Preview-Submit").prop("disabled", false);
          });
        }));
        $("#Wikiplus-Quickedit-Submit").on("click", /* @__PURE__ */ _asyncToGenerator(function* () {
          const timer = Date.now();
          const editBanner = $("<div>").addClass("Wikiplus-Banner").text("".concat(i18n_default.translate("submitting_edit")));
          const payload = {
            summary: $("#Wikiplus-Quickedit-Summary-Input").val(),
            content: $("#Wikiplus-Quickedit").val(),
            isMinorEdit: $("#Wikiplus-Quickedit-MinorEdit").is(":checked")
          };
          $("#Wikiplus-Quickedit-Submit,#Wikiplus-Quickedit,#Wikiplus-Quickedit-Preview-Submit").attr("disabled", "disabled");
          $("html, body").animate({
            scrollTop: self2.scrollTop
          }, 200);
          $("#Wikiplus-Quickedit-Preview-Output").fadeOut(100, () => {
            $("#Wikiplus-Quickedit-Preview-Output").html("").append(editBanner);
            $("#Wikiplus-Quickedit-Preview-Output").fadeIn(100);
          });
          try {
            yield onEdit(payload);
            const useTime = Date.now() - timer;
            $("#Wikiplus-Quickedit-Preview-Output").find(".Wikiplus-Banner").css("background", "rgba(6, 239, 92, 0.44)");
            $("#Wikiplus-Quickedit-Preview-Output").find(".Wikiplus-Banner").text("".concat(i18n_default.translate("edit_success", [useTime.toString()])));
            window.addEventListener("close", window.onbeforeunload = void 0);
            setTimeout(() => {
              location.reload();
            }, 500);
          } catch (error) {
            console.log(error);
            $(".Wikiplus-Banner").css("background", "rgba(218, 142, 167, 0.65)");
            $(".Wikiplus-Banner").html(error.message);
          } finally {
            $("#Wikiplus-Quickedit-Submit,#Wikiplus-Quickedit,#Wikiplus-Quickedit-Preview-Submit").prop("disabled", false);
          }
        }));
        $("#Wikiplus-Quickedit,#Wikiplus-Quickedit-Summary-Input,#Wikiplus-Quickedit-MinorEdit").on("keydown", (e) => {
          if (e.ctrlKey && e.which === 83) {
            if (e.shiftKey) {
              $("#Wikiplus-Quickedit-MinorEdit").trigger("click");
            }
            $("#Wikiplus-Quickedit-Submit").trigger("click");
            e.preventDefault();
            e.stopPropagation();
          }
        });
        if (escExit) {
          $(document).on("keydown", (e) => {
            if (e.which === 27) {
              $("#Wikiplus-Quickedit-Back").trigger("click");
            }
          });
        }
      }
      hideQuickEditPanel() {
        this.quickEditPanelVisible = false;
        $(".Wikiplus-InterBox").fadeOut("fast", function() {
          window.addEventListener("close", window.onbeforeunload = void 0);
          $(this).remove();
        });
      }
      /**
       * 显示快速重定向弹窗
       *
       * @param root0
       * @param root0.onEdit
       * @param root0.onSuccess
       */
      showSimpleRedirectPanel({
        onEdit = () => {
        },
        onSuccess = () => {
        }
      } = {}) {
        var _this10 = this;
        const input = $("<input>").addClass("Wikiplus-InterBox-Input").attr("id", "Wikiplus-SR-Title");
        const summaryInputTitle = $("<p>").text(i18n_default.translate("redirect_summary_desc"));
        const summaryInput = $("<input>").addClass("Wikiplus-InterBox-Input").attr("id", "Wikiplus-SR-Summary");
        const applyBtn = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-SR-Apply").text(i18n_default.translate("submit"));
        const cancelBtn = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-SR-Cancel").text(i18n_default.translate("cancel"));
        const continueBtn = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-SR-Continue").text(i18n_default.translate("continue"));
        const content = $("<div>").append(input).append(summaryInputTitle).append(summaryInput).append($("<hr>")).append(applyBtn).append(cancelBtn);
        const dialog = this.createDialogBox(i18n_default.translate("redirect_desc"), content, 600);
        applyBtn.on("click", /* @__PURE__ */ _asyncToGenerator(function* () {
          const title = $("#Wikiplus-SR-Title").val();
          const summary = $("#Wikiplus-SR-Summary").val();
          $(".Wikiplus-InterBox-Content").html('<div class="Wikiplus-Banner">'.concat(i18n_default.translate("submitting_edit"), "</div>"));
          try {
            yield onEdit({
              title,
              summary,
              forceOverwrite: false
            });
            $(".Wikiplus-Banner").text(i18n_default.translate("redirect_saved"));
            _this10.hideSimpleRedirectPanel(dialog);
            onSuccess({
              title
            });
          } catch (error) {
            $(".Wikiplus-Banner").css("background", "rgba(218, 142, 167, 0.65)");
            $(".Wikiplus-Banner").text(error.message);
            if (error.code === "articleexists") {
              $(".Wikiplus-InterBox-Content").append($("<hr>")).append(continueBtn).append(cancelBtn);
              cancelBtn.on("click", () => {
                _this10.hideSimpleRedirectPanel(dialog);
              });
              continueBtn.on("click", /* @__PURE__ */ _asyncToGenerator(function* () {
                $(".Wikiplus-InterBox-Content").html('<div class="Wikiplus-Banner">'.concat(i18n_default.translate("submitting_edit"), "</div>"));
                try {
                  yield onEdit({
                    title,
                    summary,
                    forceOverwrite: true
                  });
                  $(".Wikiplus-Banner").text(i18n_default.translate("redirect_saved"));
                  _this10.hideSimpleRedirectPanel(dialog);
                  onSuccess({
                    title
                  });
                } catch (error2) {
                  $(".Wikiplus-Banner").css("background", "rgba(218, 142, 167, 0.65)");
                  $(".Wikiplus-Banner").text(error2.message);
                }
              }));
            }
          }
        }));
        cancelBtn.on("click", () => {
          this.hideSimpleRedirectPanel(dialog);
        });
      }
      /**
       * 隐藏快速重定向弹窗
       *
       * @param {*} dialog
       */
      hideSimpleRedirectPanel(dialog = $("body")) {
        dialog.find(".Wikiplus-InterBox-Close").trigger("click");
      }
      showSettingsPanel({
        onSubmit = () => {
        }
      } = {}) {
        var _this11 = this;
        const input = $("<textarea>").attr("id", "Wikiplus-Setting-Input").attr("rows", "10");
        const applyBtn = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-Setting-Apply").text(i18n_default.translate("submit"));
        const cancelBtn = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-Setting-Cancel").text(i18n_default.translate("cancel"));
        const content = $("<div>").append(input).append($("<hr>")).append(applyBtn).append(cancelBtn);
        const dialog = this.createDialogBox(i18n_default.translate("wikiplus_settings_desc"), content, 600, () => {
          if (localStorage.Wikiplus_Settings) {
            $("#Wikiplus-Setting-Input").val(localStorage.Wikiplus_Settings);
            try {
              const settings = JSON.parse(localStorage.Wikiplus_Settings);
              $("#Wikiplus-Setting-Input").val(JSON.stringify(settings, null, 2));
            } catch {
            }
          } else {
            $("#Wikiplus-Setting-Input").attr("placeholder", i18n_default.translate("wikiplus_settings_placeholder"));
          }
        });
        applyBtn.on("click", /* @__PURE__ */ _asyncToGenerator(function* () {
          const savedBanner = $("<div>").addClass("Wikiplus-Banner").text(i18n_default.translate("wikiplus_settings_saved"));
          const settings = $("#Wikiplus-Setting-Input").val();
          try {
            onSubmit({
              settings
            });
            $(".Wikiplus-InterBox-Content").html("").append(savedBanner);
            yield sleep_default(1500);
            _this11.hideSettingsPanel(dialog);
          } catch {
            notification_default.error(i18n_default.translate("wikiplus_settings_grammar_error"));
          }
        }));
        cancelBtn.on("click", () => {
          this.hideSettingsPanel(dialog);
        });
      }
      hideSettingsPanel(dialog = $("body")) {
        dialog.find(".Wikiplus-InterBox-Close").trigger("click");
      }
      bindPreloadEvents(onPreload) {
        $("#toc").children("ul").find("a").each(function(i) {
          $(this).on("mouseover", function() {
            $(this).off("mouseover");
            onPreload({
              sectionNumber: i + 1
            });
          });
        });
      }
    };
    ui_default = new UI();
  }
});
//! src/Wikiplus/modules/utils/settings.js
var Settings;
var settings_default;
var init_settings = __esm({
  "src/Wikiplus/modules/utils/settings.js"() {
    "use strict";
    Settings = class {
      getSetting(key, object = {}) {
        const w = object;
        let settings;
        try {
          settings = JSON.parse(localStorage["Wikiplus_Settings"]);
        } catch {
          return;
        }
        try {
          const customSettingFunction = new Function("return ".concat(settings[key]));
          if (typeof customSettingFunction === "function") {
            try {
              if (customSettingFunction()(w) === true) {
              } else {
                return customSettingFunction()(w) || settings[key];
              }
            } catch {
              return settings[key];
            }
          } else {
            return settings[key];
          }
        } catch {
          try {
            let result = settings[key];
            for (var _i4 = 0, _Object$keys3 = Object.keys(object); _i4 < _Object$keys3.length; _i4++) {
              const key2 = _Object$keys3[_i4];
              result = result.replace("${".concat(key2, "}"), object[key2]);
            }
            return result;
          } catch {
          }
        }
      }
    };
    settings_default = new Settings();
  }
});
//! src/Wikiplus/modules/wikiplus.less
var init_wikiplus = __esm({
  "src/Wikiplus/modules/wikiplus.less"() {
  }
});
//! src/Wikiplus/modules/index.js
var modules_exports = {};
var init_modules = __esm({
  "src/Wikiplus/modules/index.js"() {
    "use strict";
    init_page();
    init_ui();
    init_notification();
    init_wiki();
    init_settings();
    init_log();
    init_constants();
    init_i18n();
    init_wikiplus();
    $(/* @__PURE__ */ _asyncToGenerator(function* () {
      const Pages = {};
      const isCurrentPageEmpty = $(".noarticletext").length > 0 && constants_default.articleId === 0;
      const getPage = /* @__PURE__ */ function() {
        var _ref7 = _asyncToGenerator(function* ({
          revisionId: revisionId2,
          title
        }) {
          if (Pages[revisionId2]) {
            return Pages[revisionId2];
          }
          const newPage = new page_default({
            revisionId: revisionId2,
            title
          });
          yield newPage.init();
          Pages[revisionId2] = newPage;
          return Pages[revisionId2];
        });
        return function getPage2(_x) {
          return _ref7.apply(this, arguments);
        };
      }();
      log_default.info("Wikiplus now loading. Version: ".concat(constants_default.version));
      if (!window.mw) {
        console.log("Mediawiki JavaScript not loaded or not a Mediawiki website.");
        return;
      }
      if (!constants_default.userGroups.includes("autoconfirmed") && !constants_default.userGroups.includes("confirmed")) {
        notification_default.error(i18n_default.translate("not_autoconfirmed_user"));
        log_default.info(i18n_default.translate("not_autoconfirmed_user"));
        return;
      }
      if (!constants_default.isArticle || constants_default.action !== "view") {
        log_default.info("Not an editable page. Stop initialization.");
        return;
      }
      window._WikiplusPages = Pages;
      const currentPageName = constants_default.currentPageName;
      const revisionId = constants_default.revisionId;
      const currentPage = yield getPage({
        revisionId,
        title: currentPageName
      });
      const handleQuickEditButtonClicked = /* @__PURE__ */ function() {
        var _ref8 = _asyncToGenerator(function* ({
          sectionNumber,
          sectionName,
          targetPageName
        } = {}) {
          const isOtherPage = targetPageName !== currentPageName;
          if (isOtherPage && constants_default.latestRevisionId !== constants_default.revisionId) {
            log_default.error("cross_page_history_revision_edit_warning");
            return;
          }
          const revisionId2 = isOtherPage ? yield wiki_default.getLatestRevisionIdForPage(targetPageName) : constants_default.revisionId;
          const page = yield getPage({
            revisionId: revisionId2,
            title: targetPageName
          });
          const customSummary = settings_default.getSetting("defaultSummary", {
            sectionName,
            sectionNumber,
            sectionTargetName: targetPageName
          });
          const summary = customSummary || (sectionName ? "/* ".concat(sectionName, " */ ").concat(i18n_default.translate("default_summary_suffix")) : i18n_default.translate("default_summary_suffix"));
          const timer = setTimeout(() => {
            notification_default.success(i18n_default.translate("loading"));
          }, 200);
          const sectionContent = yield page.getWikiText({
            section: sectionNumber
          });
          const isEditHistoryRevision = !isOtherPage && constants_default.latestRevisionId !== constants_default.revisionId;
          const escToExit = settings_default.getSetting("esc_to_exit_quickedit") === true || // 兼容老设置key
          settings_default.getSetting("esc_to_exit_quickedit") === "true" || settings_default.getSetting("escToExitQuickEdit") === true || settings_default.getSetting("escToExitQuickEdit") === "true";
          const customEditTags = settings_default.getSetting("custom_edit_tags");
          const defaultEditTags = [];
          const editTags = customEditTags !== null && customEditTags !== void 0 && customEditTags.length ? customEditTags : defaultEditTags;
          clearTimeout(timer);
          notification_default.empty();
          if (isEditHistoryRevision) {
            notification_default.warning(i18n_default.translate("history_edit_warning"));
          }
          const shouldShowCreatePageTip = isOtherPage ? !revisionId2 : isCurrentPageEmpty;
          ui_default.showQuickEditPanel({
            title: "".concat(i18n_default.translate("quickedit_topbtn")).concat(isEditHistoryRevision ? i18n_default.translate("history_edit_warning") : ""),
            content: shouldShowCreatePageTip ? i18n_default.translate("create_page_tip") : sectionContent,
            summary,
            onBack: ui_default.hideQuickEditPanel,
            onParse: (wikiText) => {
              return page.parseWikiText(wikiText);
            },
            onEdit: function() {
              var _ref9 = _asyncToGenerator(function* ({
                content,
                summary: summary2,
                isMinorEdit
              }) {
                const editPayload = {
                  content,
                  config: {
                    summary: summary2,
                    ...sectionNumber === -1 ? {} : {
                      section: sectionNumber
                    },
                    ...editTags.length ? {
                      tags: editTags.join("|")
                    } : {}
                  }
                };
                if (isMinorEdit) {
                  editPayload.config.minor = "true";
                } else {
                  editPayload.config.notminor = "true";
                }
                yield page.edit(editPayload);
              });
              return function onEdit(_x2) {
                return _ref9.apply(this, arguments);
              };
            }(),
            escExit: escToExit
          });
        });
        return function handleQuickEditButtonClicked2() {
          return _ref8.apply(this, arguments);
        };
      }();
      const handleSimpleRedirectButtonClicked = /* @__PURE__ */ function() {
        var _ref10 = _asyncToGenerator(function* () {
          ui_default.showSimpleRedirectPanel({
            onEdit: function() {
              var _ref11 = _asyncToGenerator(function* ({
                title,
                summary,
                forceOverwrite = false
              }) {
                const page = yield getPage({
                  title
                });
                const currentPageName2 = constants_default.currentPageName;
                if (summary == "") {
                  summary = i18n_default.translate("redirect_from_summary", [title, currentPageName2]);
                }
                const payload = {
                  content: "#REDIRECT [[".concat(currentPageName2, "]]"),
                  config: {
                    summary
                  }
                };
                if (!forceOverwrite) {
                  payload.config.createonly = "true";
                }
                yield page.edit(payload);
              });
              return function onEdit(_x3) {
                return _ref11.apply(this, arguments);
              };
            }(),
            onSuccess: ({
              title
            }) => {
              location.href = constants_default.articlePath.replace(/\$1/gi, title);
            }
          });
        });
        return function handleSimpleRedirectButtonClicked2() {
          return _ref10.apply(this, arguments);
        };
      }();
      const handleSettingsButtonClicked = /* @__PURE__ */ function() {
        var _ref12 = _asyncToGenerator(function* () {
          ui_default.showSettingsPanel({
            onSubmit: ({
              settings
            }) => {
              JSON.parse(settings);
              localStorage.setItem("Wikiplus_Settings", settings);
            }
          });
        });
        return function handleSettingsButtonClicked2() {
          return _ref12.apply(this, arguments);
        };
      }();
      const handlePreload = /* @__PURE__ */ function() {
        var _ref13 = _asyncToGenerator(function* ({
          sectionNumber
        }) {
          yield currentPage.getWikiText({
            section: sectionNumber
          });
        });
        return function handlePreload2(_x4) {
          return _ref13.apply(this, arguments);
        };
      }();
      ui_default.insertTopQuickEditEntry(handleQuickEditButtonClicked);
      ui_default.insertSectionQuickEditEntries(handleQuickEditButtonClicked);
      ui_default.insertLinkEditEntries(handleQuickEditButtonClicked);
      ui_default.insertSimpleRedirectButton(handleSimpleRedirectButtonClicked);
      ui_default.insertSettingsPanelButton(handleSettingsButtonClicked);
      ui_default.bindPreloadEvents(handlePreload);
    }));
  }
});
//! src/Wikiplus/resize.ts
var resize_exports = {};
var import_ext_gadget;
var init_resize = __esm({
  "src/Wikiplus/resize.ts"() {
    "use strict";
    import_ext_gadget = require("ext.gadget.Util");
    void (0, import_ext_gadget.getBody)().then(($body) => {
      $(window).on("resize", () => {
        const windowWidth = $(window).width();
        const $wikiplusInterbox = $body.find(".Wikiplus-InterBox");
        if ($wikiplusInterbox) {
          $wikiplusInterbox.css("max-width", "calc(".concat(windowWidth, "px - 2em)"));
        }
      });
    });
  }
});
//! src/Wikiplus/Wikiplus.ts
(function Wikiplus() {
  const {
    wgAction,
    wgIsArticle
  } = mw.config.get();
  if (wgAction !== "view" || !wgIsArticle) {
    return;
  }
  const loader = /* @__PURE__ */ function() {
    var _ref14 = _asyncToGenerator(function* () {
      const {
        "visualeditor-enable": isVeEnable
      } = mw.user.options.get();
      if (isVeEnable) {
        yield mw.loader.using("ext.visualEditor.core");
      }
      yield Promise.resolve().then(() => (init_modules(), modules_exports));
      yield Promise.resolve().then(() => (init_resize(), resize_exports));
    });
    return function loader2() {
      return _ref14.apply(this, arguments);
    };
  }();
  void loader();
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwtdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi1yYXcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmRleGVkLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1jYWxsYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1idWlsdC1pbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnZpcm9ubWVudC11c2VyLWFnZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zZXQtbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5wdXNoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYW4taW5zdGFuY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3JyZWN0LXByb3RvdHlwZS1nZXR0ZXIuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbi1hY2Nlc3Nvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaHRtbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1jcmVhdGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMtY29yZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5pdGVyYXRvci5jb25zdHJ1Y3Rvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy1jbGF1c2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1hcnJheS1pdGVyYXRvci1tZXRob2QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jbGFzc29mLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1pdGVyYXRvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1pdGVyYXRvci1kaXJlY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuaXRlcmF0b3IuZmluZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXN0cmluZy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3ZhbGlkYXRlLWFyZ3VtZW50cy1sZW5ndGguanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnVybC1zZWFyY2gtcGFyYW1zLmRlbGV0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIudXJsLXNlYXJjaC1wYXJhbXMuaGFzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi51cmwtc2VhcmNoLXBhcmFtcy5zaXplLmpzIiwgIi4uLy4uL3NyYy9XaWtpcGx1cy9tb2R1bGVzL3V0aWxzL2NvbnN0YW50cy5qcyIsICIuLi8uLi9zcmMvV2lraXBsdXMvbW9kdWxlcy91dGlscy9yZXF1ZXN0cy5qcyIsICIuLi8uLi9zcmMvV2lraXBsdXMvbW9kdWxlcy91dGlscy9pMThuLmpzIiwgIi4uLy4uL3NyYy9XaWtpcGx1cy9tb2R1bGVzL3V0aWxzL2xvZy5qcyIsICIuLi8uLi9zcmMvV2lraXBsdXMvbW9kdWxlcy9zZXJ2aWNlcy93aWtpLmpzIiwgIi4uLy4uL3NyYy9XaWtpcGx1cy9tb2R1bGVzL2NvcmUvcGFnZS5qcyIsICIuLi8uLi9zcmMvV2lraXBsdXMvbW9kdWxlcy9jb3JlL25vdGlmaWNhdGlvbi5qcyIsICIuLi8uLi9zcmMvV2lraXBsdXMvbW9kdWxlcy91dGlscy9zbGVlcC5qcyIsICIuLi8uLi9zcmMvV2lraXBsdXMvbW9kdWxlcy91dGlscy9oZWxwZXJzLmpzIiwgIi4uLy4uL3NyYy9XaWtpcGx1cy9tb2R1bGVzL2NvcmUvdWkuanMiLCAiLi4vLi4vc3JjL1dpa2lwbHVzL21vZHVsZXMvdXRpbHMvc2V0dGluZ3MuanMiLCAiLi4vLi4vc3JjL1dpa2lwbHVzL21vZHVsZXMvd2lraXBsdXMubGVzcyIsICIuLi8uLi9zcmMvV2lraXBsdXMvbW9kdWxlcy9pbmRleC5qcyIsICIuLi8uLi9zcmMvV2lraXBsdXMvcmVzaXplLnRzIiwgIi4uLy4uL3NyYy9XaWtpcGx1cy9XaWtpcGx1cy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiJ3VzZSBzdHJpY3QnO1xudmFyIGNoZWNrID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAmJiBpdC5NYXRoID09PSBNYXRoICYmIGl0O1xufTtcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbm1vZHVsZS5leHBvcnRzID1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWdsb2JhbC10aGlzIC0tIHNhZmVcbiAgY2hlY2sodHlwZW9mIGdsb2JhbFRoaXMgPT0gJ29iamVjdCcgJiYgZ2xvYmFsVGhpcykgfHxcbiAgY2hlY2sodHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmKSB8fFxuICBjaGVjayh0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCkgfHxcbiAgY2hlY2sodHlwZW9mIHRoaXMgPT0gJ29iamVjdCcgJiYgdGhpcykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jIC0tIGZhbGxiYWNrXG4gIChmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KSgpIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gRGV0ZWN0IElFOCdzIGluY29tcGxldGUgZGVmaW5lUHJvcGVydHkgaW1wbGVtZW50YXRpb25cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAxLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KVsxXSAhPT0gNztcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1mdW5jdGlvbi1wcm90b3R5cGUtYmluZCAtLSBzYWZlXG4gIHZhciB0ZXN0ID0gKGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSkuYmluZCgpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zIC0tIHNhZmVcbiAgcmV0dXJuIHR5cGVvZiB0ZXN0ICE9ICdmdW5jdGlvbicgfHwgdGVzdC5oYXNPd25Qcm9wZXJ0eSgncHJvdG90eXBlJyk7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIGNhbGwgPSBGdW5jdGlvbi5wcm90b3R5cGUuY2FsbDtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1mdW5jdGlvbi1wcm90b3R5cGUtYmluZCAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9CSU5EID8gY2FsbC5iaW5kKGNhbGwpIDogZnVuY3Rpb24gKCkge1xuICByZXR1cm4gY2FsbC5hcHBseShjYWxsLCBhcmd1bWVudHMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gTmFzaG9ybiB+IEpESzggYnVnXG52YXIgTkFTSE9STl9CVUcgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgISRwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsgMTogMiB9LCAxKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGVgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnByb3BlcnR5aXNlbnVtZXJhYmxlXG5leHBvcnRzLmYgPSBOQVNIT1JOX0JVRyA/IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgVik7XG4gIHJldHVybiAhIWRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci5lbnVtZXJhYmxlO1xufSA6ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgY2FsbCA9IEZ1bmN0aW9uUHJvdG90eXBlLmNhbGw7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZnVuY3Rpb24tcHJvdG90eXBlLWJpbmQgLS0gc2FmZVxudmFyIHVuY3VycnlUaGlzV2l0aEJpbmQgPSBOQVRJVkVfQklORCAmJiBGdW5jdGlvblByb3RvdHlwZS5iaW5kLmJpbmQoY2FsbCwgY2FsbCk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX0JJTkQgPyB1bmN1cnJ5VGhpc1dpdGhCaW5kIDogZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNhbGwuYXBwbHkoZm4sIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyIHRvU3RyaW5nID0gdW5jdXJyeVRoaXMoe30udG9TdHJpbmcpO1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gc3RyaW5nU2xpY2UodG9TdHJpbmcoaXQpLCA4LCAtMSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG52YXIgc3BsaXQgPSB1bmN1cnJ5VGhpcygnJy5zcGxpdCk7XG5cbi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG5tb2R1bGUuZXhwb3J0cyA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gdGhyb3dzIGFuIGVycm9yIGluIHJoaW5vLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvcmhpbm8vaXNzdWVzLzM0NlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zIC0tIHNhZmVcbiAgcmV0dXJuICEkT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCk7XG59KSA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY2xhc3NvZihpdCkgPT09ICdTdHJpbmcnID8gc3BsaXQoaXQsICcnKSA6ICRPYmplY3QoaXQpO1xufSA6ICRPYmplY3Q7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gd2UgY2FuJ3QgdXNlIGp1c3QgYGl0ID09IG51bGxgIHNpbmNlIG9mIGBkb2N1bWVudC5hbGxgIHNwZWNpYWwgY2FzZVxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdC1hZWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA9PT0gbnVsbCB8fCBpdCA9PT0gdW5kZWZpbmVkO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVxdWlyZW9iamVjdGNvZXJjaWJsZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGlzTnVsbE9yVW5kZWZpbmVkKGl0KSkgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSW5kZXhlZE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGl0KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtSXNIVE1MRERBLWludGVybmFsLXNsb3RcbnZhciBkb2N1bWVudEFsbCA9IHR5cGVvZiBkb2N1bWVudCA9PSAnb2JqZWN0JyAmJiBkb2N1bWVudC5hbGw7XG5cbi8vIGBJc0NhbGxhYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNjYWxsYWJsZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vbm8tdHlwZW9mLXVuZGVmaW5lZCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgZG9jdW1lbnRBbGwgPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnRBbGwgIT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09ICdmdW5jdGlvbicgfHwgYXJndW1lbnQgPT09IGRvY3VtZW50QWxsO1xufSA6IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09ICdmdW5jdGlvbic7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IGlzQ2FsbGFibGUoaXQpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIGFGdW5jdGlvbiA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gaXNDYWxsYWJsZShhcmd1bWVudCkgPyBhcmd1bWVudCA6IHVuZGVmaW5lZDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWVzcGFjZSwgbWV0aG9kKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGFGdW5jdGlvbihnbG9iYWxUaGlzW25hbWVzcGFjZV0pIDogZ2xvYmFsVGhpc1tuYW1lc3BhY2VdICYmIGdsb2JhbFRoaXNbbmFtZXNwYWNlXVttZXRob2RdO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gdW5jdXJyeVRoaXMoe30uaXNQcm90b3R5cGVPZik7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcblxudmFyIG5hdmlnYXRvciA9IGdsb2JhbFRoaXMubmF2aWdhdG9yO1xudmFyIHVzZXJBZ2VudCA9IG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudXNlckFnZW50O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVzZXJBZ2VudCA/IFN0cmluZyh1c2VyQWdlbnQpIDogJyc7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdXNlci1hZ2VudCcpO1xuXG52YXIgcHJvY2VzcyA9IGdsb2JhbFRoaXMucHJvY2VzcztcbnZhciBEZW5vID0gZ2xvYmFsVGhpcy5EZW5vO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zIHx8IERlbm8gJiYgRGVuby52ZXJzaW9uO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjg7XG52YXIgbWF0Y2gsIHZlcnNpb247XG5cbmlmICh2OCkge1xuICBtYXRjaCA9IHY4LnNwbGl0KCcuJyk7XG4gIC8vIGluIG9sZCBDaHJvbWUsIHZlcnNpb25zIG9mIFY4IGlzbid0IFY4ID0gQ2hyb21lIC8gMTBcbiAgLy8gYnV0IHRoZWlyIGNvcnJlY3QgdmVyc2lvbnMgYXJlIG5vdCBpbnRlcmVzdGluZyBmb3IgdXNcbiAgdmVyc2lvbiA9IG1hdGNoWzBdID4gMCAmJiBtYXRjaFswXSA8IDQgPyAxIDogKyhtYXRjaFswXSArIG1hdGNoWzFdKTtcbn1cblxuLy8gQnJvd3NlckZTIE5vZGVKUyBgcHJvY2Vzc2AgcG9seWZpbGwgaW5jb3JyZWN0bHkgc2V0IGAudjhgIHRvIGAwLjBgXG4vLyBzbyBjaGVjayBgdXNlckFnZW50YCBldmVuIGlmIGAudjhgIGV4aXN0cywgYnV0IDBcbmlmICghdmVyc2lvbiAmJiB1c2VyQWdlbnQpIHtcbiAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8oXFxkKykvKTtcbiAgaWYgKCFtYXRjaCB8fCBtYXRjaFsxXSA+PSA3NCkge1xuICAgIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9DaHJvbWVcXC8oXFxkKykvKTtcbiAgICBpZiAobWF0Y2gpIHZlcnNpb24gPSArbWF0Y2hbMV07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJzaW9uO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdjgtdmVyc2lvbicpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xuXG52YXIgJFN0cmluZyA9IGdsb2JhbFRoaXMuU3RyaW5nO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSAhIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN5bWJvbCA9IFN5bWJvbCgnc3ltYm9sIGRldGVjdGlvbicpO1xuICAvLyBDaHJvbWUgMzggU3ltYm9sIGhhcyBpbmNvcnJlY3QgdG9TdHJpbmcgY29udmVyc2lvblxuICAvLyBgZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzYCBwb2x5ZmlsbCBzeW1ib2xzIGNvbnZlcnRlZCB0byBvYmplY3QgYXJlIG5vdCBTeW1ib2wgaW5zdGFuY2VzXG4gIC8vIG5iOiBEbyBub3QgY2FsbCBgU3RyaW5nYCBkaXJlY3RseSB0byBhdm9pZCB0aGlzIGJlaW5nIG9wdGltaXplZCBvdXQgdG8gYHN5bWJvbCsnJ2Agd2hpY2ggd2lsbCxcbiAgLy8gb2YgY291cnNlLCBmYWlsLlxuICByZXR1cm4gISRTdHJpbmcoc3ltYm9sKSB8fCAhKE9iamVjdChzeW1ib2wpIGluc3RhbmNlb2YgU3ltYm9sKSB8fFxuICAgIC8vIENocm9tZSAzOC00MCBzeW1ib2xzIGFyZSBub3QgaW5oZXJpdGVkIGZyb20gRE9NIGNvbGxlY3Rpb25zIHByb3RvdHlwZXMgdG8gaW5zdGFuY2VzXG4gICAgIVN5bWJvbC5zaGFtICYmIFY4X1ZFUlNJT04gJiYgVjhfVkVSU0lPTiA8IDQxO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX1NZTUJPTCAmJlxuICAhU3ltYm9sLnNoYW0gJiZcbiAgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbm1vZHVsZS5leHBvcnRzID0gVVNFX1NZTUJPTF9BU19VSUQgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyICRTeW1ib2wgPSBnZXRCdWlsdEluKCdTeW1ib2wnKTtcbiAgcmV0dXJuIGlzQ2FsbGFibGUoJFN5bWJvbCkgJiYgaXNQcm90b3R5cGVPZigkU3ltYm9sLnByb3RvdHlwZSwgJE9iamVjdChpdCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJFN0cmluZyA9IFN0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gJFN0cmluZyhhcmd1bWVudCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuICdPYmplY3QnO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogSXNDYWxsYWJsZShhcmd1bWVudCkgaXMgdHJ1ZWBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc0NhbGxhYmxlKGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcih0cnlUb1N0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG5cbi8vIGBHZXRNZXRob2RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1nZXRtZXRob2Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFYsIFApIHtcbiAgdmFyIGZ1bmMgPSBWW1BdO1xuICByZXR1cm4gaXNOdWxsT3JVbmRlZmluZWQoZnVuYykgPyB1bmRlZmluZWQgOiBhQ2FsbGFibGUoZnVuYyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgT3JkaW5hcnlUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9yZGluYXJ5dG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAocHJlZiA9PT0gJ3N0cmluZycgJiYgaXNDYWxsYWJsZShmbiA9IGlucHV0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKGlzQ2FsbGFibGUoZm4gPSBpbnB1dC52YWx1ZU9mKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHByZWYgIT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgZGVmaW5lUHJvcGVydHkoZ2xvYmFsVGhpcywga2V5LCB7IHZhbHVlOiB2YWx1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBnbG9iYWxUaGlzW2tleV0gPSB2YWx1ZTtcbiAgfSByZXR1cm4gdmFsdWU7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xuXG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbFRoaXNbU0hBUkVEXSB8fCBkZWZpbmVHbG9iYWxQcm9wZXJ0eShTSEFSRUQsIHt9KTtcblxuKHN0b3JlLnZlcnNpb25zIHx8IChzdG9yZS52ZXJzaW9ucyA9IFtdKSkucHVzaCh7XG4gIHZlcnNpb246ICczLjQxLjAnLFxuICBtb2RlOiBJU19QVVJFID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTQtMjAyNSBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KScsXG4gIGxpY2Vuc2U6ICdodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9ibG9iL3YzLjQxLjAvTElDRU5TRScsXG4gIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzJ1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgfHwge30pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbi8vIGBUb09iamVjdGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvb2JqZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gJE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcblxudmFyIGhhc093blByb3BlcnR5ID0gdW5jdXJyeVRoaXMoe30uaGFzT3duUHJvcGVydHkpO1xuXG4vLyBgSGFzT3duUHJvcGVydHlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1oYXNvd25wcm9wZXJ0eVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1oYXNvd24gLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaGFzT3duIHx8IGZ1bmN0aW9uIGhhc093bihpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eSh0b09iamVjdChpdCksIGtleSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyIGlkID0gMDtcbnZhciBwb3N0Zml4ID0gTWF0aC5yYW5kb20oKTtcbnZhciB0b1N0cmluZyA9IHVuY3VycnlUaGlzKDEuMC50b1N0cmluZyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnICsgKGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXkpICsgJylfJyArIHRvU3RyaW5nKCsraWQgKyBwb3N0Zml4LCAzNik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciBTeW1ib2wgPSBnbG9iYWxUaGlzLlN5bWJvbDtcbnZhciBXZWxsS25vd25TeW1ib2xzU3RvcmUgPSBzaGFyZWQoJ3drcycpO1xudmFyIGNyZWF0ZVdlbGxLbm93blN5bWJvbCA9IFVTRV9TWU1CT0xfQVNfVUlEID8gU3ltYm9sWydmb3InXSB8fCBTeW1ib2wgOiBTeW1ib2wgJiYgU3ltYm9sLndpdGhvdXRTZXR0ZXIgfHwgdWlkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGlmICghaGFzT3duKFdlbGxLbm93blN5bWJvbHNTdG9yZSwgbmFtZSkpIHtcbiAgICBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV0gPSBOQVRJVkVfU1lNQk9MICYmIGhhc093bihTeW1ib2wsIG5hbWUpXG4gICAgICA/IFN5bWJvbFtuYW1lXVxuICAgICAgOiBjcmVhdGVXZWxsS25vd25TeW1ib2woJ1N5bWJvbC4nICsgbmFtZSk7XG4gIH0gcmV0dXJuIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgb3JkaW5hcnlUb1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vcmRpbmFyeS10by1wcmltaXRpdmUnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG52YXIgVE9fUFJJTUlUSVZFID0gd2VsbEtub3duU3ltYm9sKCd0b1ByaW1pdGl2ZScpO1xuXG4vLyBgVG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b3ByaW1pdGl2ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5wdXQsIHByZWYpIHtcbiAgaWYgKCFpc09iamVjdChpbnB1dCkgfHwgaXNTeW1ib2woaW5wdXQpKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBleG90aWNUb1ByaW0gPSBnZXRNZXRob2QoaW5wdXQsIFRPX1BSSU1JVElWRSk7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChleG90aWNUb1ByaW0pIHtcbiAgICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ2RlZmF1bHQnO1xuICAgIHJlc3VsdCA9IGNhbGwoZXhvdGljVG9QcmltLCBpbnB1dCwgcHJlZik7XG4gICAgaWYgKCFpc09iamVjdChyZXN1bHQpIHx8IGlzU3ltYm9sKHJlc3VsdCkpIHJldHVybiByZXN1bHQ7XG4gICAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG4gIH1cbiAgaWYgKHByZWYgPT09IHVuZGVmaW5lZCkgcHJlZiA9ICdudW1iZXInO1xuICByZXR1cm4gb3JkaW5hcnlUb1ByaW1pdGl2ZShpbnB1dCwgcHJlZik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1zeW1ib2wnKTtcblxuLy8gYFRvUHJvcGVydHlLZXlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b3Byb3BlcnR5a2V5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIga2V5ID0gdG9QcmltaXRpdmUoYXJndW1lbnQsICdzdHJpbmcnKTtcbiAgcmV0dXJuIGlzU3ltYm9sKGtleSkgPyBrZXkgOiBrZXkgKyAnJztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyIGRvY3VtZW50ID0gZ2xvYmFsVGhpcy5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIEVYSVNUUyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEVYSVNUUyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xuXG4vLyBUaGFua3MgdG8gSUU4IGZvciBpdHMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIURFU0NSSVBUT1JTICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjcmVhdGVFbGVtZW50KCdkaXYnKSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9XG4gIH0pLmEgIT09IDc7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5ZGVzY3JpcHRvclxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSW5kZXhlZE9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzT3duKE8sIFApKSByZXR1cm4gY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKCFjYWxsKHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlLmYsIE8sIFApLCBPW1BdKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gVjggfiBDaHJvbWUgMzYtXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMzM0XG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSwgJ3Byb3RvdHlwZScsIHtcbiAgICB2YWx1ZTogNDIsXG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pLnByb3RvdHlwZSAhPT0gNDI7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciAkU3RyaW5nID0gU3RyaW5nO1xudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBBc3NlcnQ6IFR5cGUoYXJndW1lbnQpIGlzIE9iamVjdGBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc09iamVjdChhcmd1bWVudCkpIHJldHVybiBhcmd1bWVudDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJFN0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhbiBvYmplY3QnKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcbnZhciBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1ZycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgJGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIEVOVU1FUkFCTEUgPSAnZW51bWVyYWJsZSc7XG52YXIgQ09ORklHVVJBQkxFID0gJ2NvbmZpZ3VyYWJsZSc7XG52YXIgV1JJVEFCTEUgPSAnd3JpdGFibGUnO1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnR5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnR5XG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/IFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID8gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAodHlwZW9mIE8gPT09ICdmdW5jdGlvbicgJiYgUCA9PT0gJ3Byb3RvdHlwZScgJiYgJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzICYmIFdSSVRBQkxFIGluIEF0dHJpYnV0ZXMgJiYgIUF0dHJpYnV0ZXNbV1JJVEFCTEVdKSB7XG4gICAgdmFyIGN1cnJlbnQgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuICAgIGlmIChjdXJyZW50ICYmIGN1cnJlbnRbV1JJVEFCTEVdKSB7XG4gICAgICBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgICAgIEF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogQ09ORklHVVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0NPTkZJR1VSQUJMRV0gOiBjdXJyZW50W0NPTkZJR1VSQUJMRV0sXG4gICAgICAgIGVudW1lcmFibGU6IEVOVU1FUkFCTEUgaW4gQXR0cmlidXRlcyA/IEF0dHJpYnV0ZXNbRU5VTUVSQUJMRV0gOiBjdXJyZW50W0VOVU1FUkFCTEVdLFxuICAgICAgICB3cml0YWJsZTogZmFsc2VcbiAgICAgIH07XG4gICAgfVxuICB9IHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG59IDogJGRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBuZXcgJFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwga2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBnZXREZXNjcmlwdG9yID0gREVTQ1JJUFRPUlMgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxudmFyIEVYSVNUUyA9IGhhc093bihGdW5jdGlvblByb3RvdHlwZSwgJ25hbWUnKTtcbi8vIGFkZGl0aW9uYWwgcHJvdGVjdGlvbiBmcm9tIG1pbmlmaWVkIC8gbWFuZ2xlZCAvIGRyb3BwZWQgZnVuY3Rpb24gbmFtZXNcbnZhciBQUk9QRVIgPSBFWElTVFMgJiYgKGZ1bmN0aW9uIHNvbWV0aGluZygpIHsgLyogZW1wdHkgKi8gfSkubmFtZSA9PT0gJ3NvbWV0aGluZyc7XG52YXIgQ09ORklHVVJBQkxFID0gRVhJU1RTICYmICghREVTQ1JJUFRPUlMgfHwgKERFU0NSSVBUT1JTICYmIGdldERlc2NyaXB0b3IoRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJykuY29uZmlndXJhYmxlKSk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBFWElTVFM6IEVYSVNUUyxcbiAgUFJPUEVSOiBQUk9QRVIsXG4gIENPTkZJR1VSQUJMRTogQ09ORklHVVJBQkxFXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbnZhciBmdW5jdGlvblRvU3RyaW5nID0gdW5jdXJyeVRoaXMoRnVuY3Rpb24udG9TdHJpbmcpO1xuXG4vLyB0aGlzIGhlbHBlciBicm9rZW4gaW4gYGNvcmUtanNAMy40LjEtMy40LjRgLCBzbyB3ZSBjYW4ndCB1c2UgYHNoYXJlZGAgaGVscGVyXG5pZiAoIWlzQ2FsbGFibGUoc3RvcmUuaW5zcGVjdFNvdXJjZSkpIHtcbiAgc3RvcmUuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBmdW5jdGlvblRvU3RyaW5nKGl0KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdG9yZS5pbnNwZWN0U291cmNlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgV2Vha01hcCA9IGdsb2JhbFRoaXMuV2Vha01hcDtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0NhbGxhYmxlKFdlYWtNYXApICYmIC9uYXRpdmUgY29kZS8udGVzdChTdHJpbmcoV2Vha01hcCkpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xuXG52YXIga2V5cyA9IHNoYXJlZCgna2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIGtleXNba2V5XSB8fCAoa2V5c1trZXldID0gdWlkKGtleSkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfV0VBS19NQVAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2Vhay1tYXAtYmFzaWMtZGV0ZWN0aW9uJyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEID0gJ09iamVjdCBhbHJlYWR5IGluaXRpYWxpemVkJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWxUaGlzLlR5cGVFcnJvcjtcbnZhciBXZWFrTWFwID0gZ2xvYmFsVGhpcy5XZWFrTWFwO1xudmFyIHNldCwgZ2V0LCBoYXM7XG5cbnZhciBlbmZvcmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBoYXMoaXQpID8gZ2V0KGl0KSA6IHNldChpdCwge30pO1xufTtcblxudmFyIGdldHRlckZvciA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgc3RhdGU7XG4gICAgaWYgKCFpc09iamVjdChpdCkgfHwgKHN0YXRlID0gZ2V0KGl0KSkudHlwZSAhPT0gVFlQRSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW5jb21wYXRpYmxlIHJlY2VpdmVyLCAnICsgVFlQRSArICcgcmVxdWlyZWQnKTtcbiAgICB9IHJldHVybiBzdGF0ZTtcbiAgfTtcbn07XG5cbmlmIChOQVRJVkVfV0VBS19NQVAgfHwgc2hhcmVkLnN0YXRlKSB7XG4gIHZhciBzdG9yZSA9IHNoYXJlZC5zdGF0ZSB8fCAoc2hhcmVkLnN0YXRlID0gbmV3IFdlYWtNYXAoKSk7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXNlbGYtYXNzaWduIC0tIHByb3RvdHlwZSBtZXRob2RzIHByb3RlY3Rpb24gKi9cbiAgc3RvcmUuZ2V0ID0gc3RvcmUuZ2V0O1xuICBzdG9yZS5oYXMgPSBzdG9yZS5oYXM7XG4gIHN0b3JlLnNldCA9IHN0b3JlLnNldDtcbiAgLyogZXNsaW50LWVuYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoc3RvcmUuaGFzKGl0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCk7XG4gICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG4gICAgc3RvcmUuc2V0KGl0LCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gc3RvcmUuZ2V0KGl0KSB8fCB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHN0b3JlLmhhcyhpdCk7XG4gIH07XG59IGVsc2Uge1xuICB2YXIgU1RBVEUgPSBzaGFyZWRLZXkoJ3N0YXRlJyk7XG4gIGhpZGRlbktleXNbU1RBVEVdID0gdHJ1ZTtcbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIGlmIChoYXNPd24oaXQsIFNUQVRFKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCk7XG4gICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KGl0LCBTVEFURSwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGhhc093bihpdCwgU1RBVEUpID8gaXRbU1RBVEVdIDoge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0LFxuICBnZXQ6IGdldCxcbiAgaGFzOiBoYXMsXG4gIGVuZm9yY2U6IGVuZm9yY2UsXG4gIGdldHRlckZvcjogZ2V0dGVyRm9yXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tbmFtZScpLkNPTkZJR1VSQUJMRTtcbnZhciBpbnNwZWN0U291cmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xuXG52YXIgZW5mb3JjZUludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmVuZm9yY2U7XG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0O1xudmFyICRTdHJpbmcgPSBTdHJpbmc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBzdHJpbmdTbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcbnZhciByZXBsYWNlID0gdW5jdXJyeVRoaXMoJycucmVwbGFjZSk7XG52YXIgam9pbiA9IHVuY3VycnlUaGlzKFtdLmpvaW4pO1xuXG52YXIgQ09ORklHVVJBQkxFX0xFTkdUSCA9IERFU0NSSVBUT1JTICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdsZW5ndGgnLCB7IHZhbHVlOiA4IH0pLmxlbmd0aCAhPT0gODtcbn0pO1xuXG52YXIgVEVNUExBVEUgPSBTdHJpbmcoU3RyaW5nKS5zcGxpdCgnU3RyaW5nJyk7XG5cbnZhciBtYWtlQnVpbHRJbiA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlLCBuYW1lLCBvcHRpb25zKSB7XG4gIGlmIChzdHJpbmdTbGljZSgkU3RyaW5nKG5hbWUpLCAwLCA3KSA9PT0gJ1N5bWJvbCgnKSB7XG4gICAgbmFtZSA9ICdbJyArIHJlcGxhY2UoJFN0cmluZyhuYW1lKSwgL15TeW1ib2xcXCgoW14pXSopXFwpLiokLywgJyQxJykgKyAnXSc7XG4gIH1cbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5nZXR0ZXIpIG5hbWUgPSAnZ2V0ICcgKyBuYW1lO1xuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnNldHRlcikgbmFtZSA9ICdzZXQgJyArIG5hbWU7XG4gIGlmICghaGFzT3duKHZhbHVlLCAnbmFtZScpIHx8IChDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSAmJiB2YWx1ZS5uYW1lICE9PSBuYW1lKSkge1xuICAgIGlmIChERVNDUklQVE9SUykgZGVmaW5lUHJvcGVydHkodmFsdWUsICduYW1lJywgeyB2YWx1ZTogbmFtZSwgY29uZmlndXJhYmxlOiB0cnVlIH0pO1xuICAgIGVsc2UgdmFsdWUubmFtZSA9IG5hbWU7XG4gIH1cbiAgaWYgKENPTkZJR1VSQUJMRV9MRU5HVEggJiYgb3B0aW9ucyAmJiBoYXNPd24ob3B0aW9ucywgJ2FyaXR5JykgJiYgdmFsdWUubGVuZ3RoICE9PSBvcHRpb25zLmFyaXR5KSB7XG4gICAgZGVmaW5lUHJvcGVydHkodmFsdWUsICdsZW5ndGgnLCB7IHZhbHVlOiBvcHRpb25zLmFyaXR5IH0pO1xuICB9XG4gIHRyeSB7XG4gICAgaWYgKG9wdGlvbnMgJiYgaGFzT3duKG9wdGlvbnMsICdjb25zdHJ1Y3RvcicpICYmIG9wdGlvbnMuY29uc3RydWN0b3IpIHtcbiAgICAgIGlmIChERVNDUklQVE9SUykgZGVmaW5lUHJvcGVydHkodmFsdWUsICdwcm90b3R5cGUnLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTtcbiAgICAvLyBpbiBWOCB+IENocm9tZSA1MywgcHJvdG90eXBlcyBvZiBzb21lIG1ldGhvZHMsIGxpa2UgYEFycmF5LnByb3RvdHlwZS52YWx1ZXNgLCBhcmUgbm9uLXdyaXRhYmxlXG4gICAgfSBlbHNlIGlmICh2YWx1ZS5wcm90b3R5cGUpIHZhbHVlLnByb3RvdHlwZSA9IHVuZGVmaW5lZDtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICB2YXIgc3RhdGUgPSBlbmZvcmNlSW50ZXJuYWxTdGF0ZSh2YWx1ZSk7XG4gIGlmICghaGFzT3duKHN0YXRlLCAnc291cmNlJykpIHtcbiAgICBzdGF0ZS5zb3VyY2UgPSBqb2luKFRFTVBMQVRFLCB0eXBlb2YgbmFtZSA9PSAnc3RyaW5nJyA/IG5hbWUgOiAnJyk7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcblxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXh0ZW5kLW5hdGl2ZSAtLSByZXF1aXJlZFxuRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nID0gbWFrZUJ1aWx0SW4oZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKHRoaXMpICYmIGdldEludGVybmFsU3RhdGUodGhpcykuc291cmNlIHx8IGluc3BlY3RTb3VyY2UodGhpcyk7XG59LCAndG9TdHJpbmcnKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBtYWtlQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9tYWtlLWJ1aWx0LWluJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbHVlLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9O1xuICB2YXIgc2ltcGxlID0gb3B0aW9ucy5lbnVtZXJhYmxlO1xuICB2YXIgbmFtZSA9IG9wdGlvbnMubmFtZSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uYW1lIDoga2V5O1xuICBpZiAoaXNDYWxsYWJsZSh2YWx1ZSkpIG1ha2VCdWlsdEluKHZhbHVlLCBuYW1lLCBvcHRpb25zKTtcbiAgaWYgKG9wdGlvbnMuZ2xvYmFsKSB7XG4gICAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gICAgZWxzZSBkZWZpbmVHbG9iYWxQcm9wZXJ0eShrZXksIHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFvcHRpb25zLnVuc2FmZSkgZGVsZXRlIE9ba2V5XTtcbiAgICAgIGVsc2UgaWYgKE9ba2V5XSkgc2ltcGxlID0gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gICAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gICAgZWxzZSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKE8sIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6ICFvcHRpb25zLm5vbkNvbmZpZ3VyYWJsZSxcbiAgICAgIHdyaXRhYmxlOiAhb3B0aW9ucy5ub25Xcml0YWJsZVxuICAgIH0pO1xuICB9IHJldHVybiBPO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5cbi8vIGBNYXRoLnRydW5jYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbWF0aC50cnVuY1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW1hdGgtdHJ1bmMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBNYXRoLnRydW5jIHx8IGZ1bmN0aW9uIHRydW5jKHgpIHtcbiAgdmFyIG4gPSAreDtcbiAgcmV0dXJuIChuID4gMCA/IGZsb29yIDogY2VpbCkobik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0cnVuYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9tYXRoLXRydW5jJyk7XG5cbi8vIGBUb0ludGVnZXJPckluZmluaXR5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9pbnRlZ2Vyb3JpbmZpbml0eVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIG51bWJlciA9ICthcmd1bWVudDtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgcmV0dXJuIG51bWJlciAhPT0gbnVtYmVyIHx8IG51bWJlciA9PT0gMCA/IDAgOiB0cnVuYyhudW1iZXIpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG5cbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gSGVscGVyIGZvciBhIHBvcHVsYXIgcmVwZWF0aW5nIGNhc2Ugb2YgdGhlIHNwZWM6XG4vLyBMZXQgaW50ZWdlciBiZSA/IFRvSW50ZWdlcihpbmRleCkuXG4vLyBJZiBpbnRlZ2VyIDwgMCwgbGV0IHJlc3VsdCBiZSBtYXgoKGxlbmd0aCArIGludGVnZXIpLCAwKTsgZWxzZSBsZXQgcmVzdWx0IGJlIG1pbihpbnRlZ2VyLCBsZW5ndGgpLlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICB2YXIgaW50ZWdlciA9IHRvSW50ZWdlck9ySW5maW5pdHkoaW5kZXgpO1xuICByZXR1cm4gaW50ZWdlciA8IDAgPyBtYXgoaW50ZWdlciArIGxlbmd0aCwgMCkgOiBtaW4oaW50ZWdlciwgbGVuZ3RoKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIGBUb0xlbmd0aGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvbGVuZ3RoXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIgbGVuID0gdG9JbnRlZ2VyT3JJbmZpbml0eShhcmd1bWVudCk7XG4gIHJldHVybiBsZW4gPiAwID8gbWluKGxlbiwgMHgxRkZGRkZGRkZGRkZGRikgOiAwOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcblxuLy8gYExlbmd0aE9mQXJyYXlMaWtlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbGVuZ3Rob2ZhcnJheWxpa2Vcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdG9MZW5ndGgob2JqLmxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXgnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnsgaW5kZXhPZiwgaW5jbHVkZXMgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgICBpZiAobGVuZ3RoID09PSAwKSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICAgIGlmICh2YWx1ZSAhPT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgIGlmICgoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykgJiYgT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmNsdWRlc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXG4gIGluY2x1ZGVzOiBjcmVhdGVNZXRob2QodHJ1ZSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5kZXhPZmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2ZcbiAgaW5kZXhPZjogY3JlYXRlTWV0aG9kKGZhbHNlKVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBpbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5kZXhPZjtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBwdXNoID0gdW5jdXJyeVRoaXMoW10ucHVzaCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pICFoYXNPd24oaGlkZGVuS2V5cywga2V5KSAmJiBoYXNPd24oTywga2V5KSAmJiBwdXNoKHJlc3VsdCwga2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhc093bihPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5pbmRleE9mKHJlc3VsdCwga2V5KSB8fCBwdXNoKHJlc3VsdCwga2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBJRTgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gW1xuICAnY29uc3RydWN0b3InLFxuICAnaGFzT3duUHJvcGVydHknLFxuICAnaXNQcm90b3R5cGVPZicsXG4gICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG4gICd0b0xvY2FsZVN0cmluZycsXG4gICd0b1N0cmluZycsXG4gICd2YWx1ZU9mJ1xuXTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG52YXIgaGlkZGVuS2V5cyA9IGVudW1CdWdLZXlzLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHluYW1lc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eW5hbWVzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xuXG52YXIgY29uY2F0ID0gdW5jdXJyeVRoaXMoW10uY29uY2F0KTtcblxuLy8gYWxsIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBub24tZW51bWVyYWJsZSBhbmQgc3ltYm9sc1xubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCdSZWZsZWN0JywgJ293bktleXMnKSB8fCBmdW5jdGlvbiBvd25LZXlzKGl0KSB7XG4gIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZS5mKGFuT2JqZWN0KGl0KSk7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZjtcbiAgcmV0dXJuIGdldE93blByb3BlcnR5U3ltYm9scyA/IGNvbmNhdChrZXlzLCBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpKSA6IGtleXM7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIG93bktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3duLWtleXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UsIGV4Y2VwdGlvbnMpIHtcbiAgdmFyIGtleXMgPSBvd25LZXlzKHNvdXJjZSk7XG4gIHZhciBkZWZpbmVQcm9wZXJ0eSA9IGRlZmluZVByb3BlcnR5TW9kdWxlLmY7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUuZjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgaWYgKCFoYXNPd24odGFyZ2V0LCBrZXkpICYmICEoZXhjZXB0aW9ucyAmJiBoYXNPd24oZXhjZXB0aW9ucywga2V5KSkpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICB9XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgcmVwbGFjZW1lbnQgPSAvI3xcXC5wcm90b3R5cGVcXC4vO1xuXG52YXIgaXNGb3JjZWQgPSBmdW5jdGlvbiAoZmVhdHVyZSwgZGV0ZWN0aW9uKSB7XG4gIHZhciB2YWx1ZSA9IGRhdGFbbm9ybWFsaXplKGZlYXR1cmUpXTtcbiAgcmV0dXJuIHZhbHVlID09PSBQT0xZRklMTCA/IHRydWVcbiAgICA6IHZhbHVlID09PSBOQVRJVkUgPyBmYWxzZVxuICAgIDogaXNDYWxsYWJsZShkZXRlY3Rpb24pID8gZmFpbHMoZGV0ZWN0aW9uKVxuICAgIDogISFkZXRlY3Rpb247XG59O1xuXG52YXIgbm9ybWFsaXplID0gaXNGb3JjZWQubm9ybWFsaXplID0gZnVuY3Rpb24gKHN0cmluZykge1xuICByZXR1cm4gU3RyaW5nKHN0cmluZykucmVwbGFjZShyZXBsYWNlbWVudCwgJy4nKS50b0xvd2VyQ2FzZSgpO1xufTtcblxudmFyIGRhdGEgPSBpc0ZvcmNlZC5kYXRhID0ge307XG52YXIgTkFUSVZFID0gaXNGb3JjZWQuTkFUSVZFID0gJ04nO1xudmFyIFBPTFlGSUxMID0gaXNGb3JjZWQuUE9MWUZJTEwgPSAnUCc7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGb3JjZWQ7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpLmY7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xudmFyIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzJyk7XG52YXIgaXNGb3JjZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtZm9yY2VkJyk7XG5cbi8qXG4gIG9wdGlvbnMudGFyZ2V0ICAgICAgICAgLSBuYW1lIG9mIHRoZSB0YXJnZXQgb2JqZWN0XG4gIG9wdGlvbnMuZ2xvYmFsICAgICAgICAgLSB0YXJnZXQgaXMgdGhlIGdsb2JhbCBvYmplY3RcbiAgb3B0aW9ucy5zdGF0ICAgICAgICAgICAtIGV4cG9ydCBhcyBzdGF0aWMgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5wcm90byAgICAgICAgICAtIGV4cG9ydCBhcyBwcm90b3R5cGUgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5yZWFsICAgICAgICAgICAtIHJlYWwgcHJvdG90eXBlIG1ldGhvZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMuZm9yY2VkICAgICAgICAgLSBleHBvcnQgZXZlbiBpZiB0aGUgbmF0aXZlIGZlYXR1cmUgaXMgYXZhaWxhYmxlXG4gIG9wdGlvbnMuYmluZCAgICAgICAgICAgLSBiaW5kIG1ldGhvZHMgdG8gdGhlIHRhcmdldCwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLndyYXAgICAgICAgICAgIC0gd3JhcCBjb25zdHJ1Y3RvcnMgdG8gcHJldmVudGluZyBnbG9iYWwgcG9sbHV0aW9uLCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMudW5zYWZlICAgICAgICAgLSB1c2UgdGhlIHNpbXBsZSBhc3NpZ25tZW50IG9mIHByb3BlcnR5IGluc3RlYWQgb2YgZGVsZXRlICsgZGVmaW5lUHJvcGVydHlcbiAgb3B0aW9ucy5zaGFtICAgICAgICAgICAtIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgb3B0aW9ucy5lbnVtZXJhYmxlICAgICAtIGV4cG9ydCBhcyBlbnVtZXJhYmxlIHByb3BlcnR5XG4gIG9wdGlvbnMuZG9udENhbGxHZXRTZXQgLSBwcmV2ZW50IGNhbGxpbmcgYSBnZXR0ZXIgb24gdGFyZ2V0XG4gIG9wdGlvbnMubmFtZSAgICAgICAgICAgLSB0aGUgLm5hbWUgb2YgdGhlIGZ1bmN0aW9uIGlmIGl0IGRvZXMgbm90IG1hdGNoIHRoZSBrZXlcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRpb25zLCBzb3VyY2UpIHtcbiAgdmFyIFRBUkdFVCA9IG9wdGlvbnMudGFyZ2V0O1xuICB2YXIgR0xPQkFMID0gb3B0aW9ucy5nbG9iYWw7XG4gIHZhciBTVEFUSUMgPSBvcHRpb25zLnN0YXQ7XG4gIHZhciBGT1JDRUQsIHRhcmdldCwga2V5LCB0YXJnZXRQcm9wZXJ0eSwgc291cmNlUHJvcGVydHksIGRlc2NyaXB0b3I7XG4gIGlmIChHTE9CQUwpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxUaGlzO1xuICB9IGVsc2UgaWYgKFNUQVRJQykge1xuICAgIHRhcmdldCA9IGdsb2JhbFRoaXNbVEFSR0VUXSB8fCBkZWZpbmVHbG9iYWxQcm9wZXJ0eShUQVJHRVQsIHt9KTtcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxUaGlzW1RBUkdFVF0gJiYgZ2xvYmFsVGhpc1tUQVJHRVRdLnByb3RvdHlwZTtcbiAgfVxuICBpZiAodGFyZ2V0KSBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICBzb3VyY2VQcm9wZXJ0eSA9IHNvdXJjZVtrZXldO1xuICAgIGlmIChvcHRpb25zLmRvbnRDYWxsR2V0U2V0KSB7XG4gICAgICBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcbiAgICAgIHRhcmdldFByb3BlcnR5ID0gZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIH0gZWxzZSB0YXJnZXRQcm9wZXJ0eSA9IHRhcmdldFtrZXldO1xuICAgIEZPUkNFRCA9IGlzRm9yY2VkKEdMT0JBTCA/IGtleSA6IFRBUkdFVCArIChTVEFUSUMgPyAnLicgOiAnIycpICsga2V5LCBvcHRpb25zLmZvcmNlZCk7XG4gICAgLy8gY29udGFpbmVkIGluIHRhcmdldFxuICAgIGlmICghRk9SQ0VEICYmIHRhcmdldFByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0eXBlb2Ygc291cmNlUHJvcGVydHkgPT0gdHlwZW9mIHRhcmdldFByb3BlcnR5KSBjb250aW51ZTtcbiAgICAgIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMoc291cmNlUHJvcGVydHksIHRhcmdldFByb3BlcnR5KTtcbiAgICB9XG4gICAgLy8gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICAgIGlmIChvcHRpb25zLnNoYW0gfHwgKHRhcmdldFByb3BlcnR5ICYmIHRhcmdldFByb3BlcnR5LnNoYW0pKSB7XG4gICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoc291cmNlUHJvcGVydHksICdzaGFtJywgdHJ1ZSk7XG4gICAgfVxuICAgIGRlZmluZUJ1aWx0SW4odGFyZ2V0LCBrZXksIHNvdXJjZVByb3BlcnR5LCBvcHRpb25zKTtcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG4vLyBgSXNBcnJheWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWlzYXJyYXlcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1pc2FycmF5IC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZ3VtZW50KSB7XG4gIHJldHVybiBjbGFzc29mKGFyZ3VtZW50KSA9PT0gJ0FycmF5Jztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBTYWZhcmkgPCAxMyBkb2VzIG5vdCB0aHJvdyBhbiBlcnJvciBpbiB0aGlzIGNhc2VcbnZhciBTSUxFTlRfT05fTk9OX1dSSVRBQkxFX0xFTkdUSF9TRVQgPSBERVNDUklQVE9SUyAmJiAhZnVuY3Rpb24gKCkge1xuICAvLyBtYWtlcyBubyBzZW5zZSB3aXRob3V0IHByb3BlciBzdHJpY3QgbW9kZSBzdXBwb3J0XG4gIGlmICh0aGlzICE9PSB1bmRlZmluZWQpIHJldHVybiB0cnVlO1xuICB0cnkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShbXSwgJ2xlbmd0aCcsIHsgd3JpdGFibGU6IGZhbHNlIH0pLmxlbmd0aCA9IDE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yIGluc3RhbmNlb2YgVHlwZUVycm9yO1xuICB9XG59KCk7XG5cbm1vZHVsZS5leHBvcnRzID0gU0lMRU5UX09OX05PTl9XUklUQUJMRV9MRU5HVEhfU0VUID8gZnVuY3Rpb24gKE8sIGxlbmd0aCkge1xuICBpZiAoaXNBcnJheShPKSAmJiAhZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sICdsZW5ndGgnKS53cml0YWJsZSkge1xuICAgIHRocm93IG5ldyAkVHlwZUVycm9yKCdDYW5ub3Qgc2V0IHJlYWQgb25seSAubGVuZ3RoJyk7XG4gIH0gcmV0dXJuIE8ubGVuZ3RoID0gbGVuZ3RoO1xufSA6IGZ1bmN0aW9uIChPLCBsZW5ndGgpIHtcbiAgcmV0dXJuIE8ubGVuZ3RoID0gbGVuZ3RoO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gMHgxRkZGRkZGRkZGRkZGRjsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPiBNQVhfU0FGRV9JTlRFR0VSKSB0aHJvdyAkVHlwZUVycm9yKCdNYXhpbXVtIGFsbG93ZWQgaW5kZXggZXhjZWVkZWQnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xudmFyIHNldEFycmF5TGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNldC1sZW5ndGgnKTtcbnZhciBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlcicpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbnZhciBJTkNPUlJFQ1RfVE9fTEVOR1RIID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gW10ucHVzaC5jYWxsKHsgbGVuZ3RoOiAweDEwMDAwMDAwMCB9LCAxKSAhPT0gNDI5NDk2NzI5Nztcbn0pO1xuXG4vLyBWOCA8PSAxMjEgYW5kIFNhZmFyaSA8PSAxNS40OyBGRiA8IDIzIHRocm93cyBJbnRlcm5hbEVycm9yXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0xMjY4MVxudmFyIHByb3BlckVycm9yT25Ob25Xcml0YWJsZUxlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoW10sICdsZW5ndGgnLCB7IHdyaXRhYmxlOiBmYWxzZSB9KS5wdXNoKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yIGluc3RhbmNlb2YgVHlwZUVycm9yO1xuICB9XG59O1xuXG52YXIgRk9SQ0VEID0gSU5DT1JSRUNUX1RPX0xFTkdUSCB8fCAhcHJvcGVyRXJyb3JPbk5vbldyaXRhYmxlTGVuZ3RoKCk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUucHVzaGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5wdXNoXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgYXJpdHk6IDEsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzIC0tIHJlcXVpcmVkIGZvciBgLmxlbmd0aGBcbiAgcHVzaDogZnVuY3Rpb24gcHVzaChpdGVtKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICB2YXIgbGVuID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gICAgdmFyIGFyZ0NvdW50ID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIobGVuICsgYXJnQ291bnQpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJnQ291bnQ7IGkrKykge1xuICAgICAgT1tsZW5dID0gYXJndW1lbnRzW2ldO1xuICAgICAgbGVuKys7XG4gICAgfVxuICAgIHNldEFycmF5TGVuZ3RoKE8sIGxlbik7XG4gICAgcmV0dXJuIGxlbjtcbiAgfVxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZicpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFByb3RvdHlwZSkge1xuICBpZiAoaXNQcm90b3R5cGVPZihQcm90b3R5cGUsIGl0KSkgcmV0dXJuIGl0O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcignSW5jb3JyZWN0IGludm9jYXRpb24nKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRigpIHsgLyogZW1wdHkgKi8gfVxuICBGLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IG51bGw7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0cHJvdG90eXBlb2YgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZihuZXcgRigpKSAhPT0gRi5wcm90b3R5cGU7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBDT1JSRUNUX1BST1RPVFlQRV9HRVRURVIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29ycmVjdC1wcm90b3R5cGUtZ2V0dGVyJyk7XG5cbnZhciBJRV9QUk9UTyA9IHNoYXJlZEtleSgnSUVfUFJPVE8nKTtcbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xudmFyIE9iamVjdFByb3RvdHlwZSA9ICRPYmplY3QucHJvdG90eXBlO1xuXG4vLyBgT2JqZWN0LmdldFByb3RvdHlwZU9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldHByb3RvdHlwZW9mXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldHByb3RvdHlwZW9mIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gQ09SUkVDVF9QUk9UT1RZUEVfR0VUVEVSID8gJE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIChPKSB7XG4gIHZhciBvYmplY3QgPSB0b09iamVjdChPKTtcbiAgaWYgKGhhc093bihvYmplY3QsIElFX1BST1RPKSkgcmV0dXJuIG9iamVjdFtJRV9QUk9UT107XG4gIHZhciBjb25zdHJ1Y3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcjtcbiAgaWYgKGlzQ2FsbGFibGUoY29uc3RydWN0b3IpICYmIG9iamVjdCBpbnN0YW5jZW9mIGNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gb2JqZWN0IGluc3RhbmNlb2YgJE9iamVjdCA/IE9iamVjdFByb3RvdHlwZSA6IG51bGw7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBtYWtlQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9tYWtlLWJ1aWx0LWluJyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpIHtcbiAgaWYgKGRlc2NyaXB0b3IuZ2V0KSBtYWtlQnVpbHRJbihkZXNjcmlwdG9yLmdldCwgbmFtZSwgeyBnZXR0ZXI6IHRydWUgfSk7XG4gIGlmIChkZXNjcmlwdG9yLnNldCkgbWFrZUJ1aWx0SW4oZGVzY3JpcHRvci5zZXQsIG5hbWUsIHsgc2V0dGVyOiB0cnVlIH0pO1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkuZih0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBrZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtrZXldID0gdmFsdWU7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG5cbi8vIGBPYmplY3Qua2V5c2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5rZXlzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWtleXMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Y4LXByb3RvdHlwZS1kZWZpbmUtYnVnJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIG9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMnKTtcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnRpZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydGllcyAtLSBzYWZlXG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyAmJiAhVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIHByb3BzID0gdG9JbmRleGVkT2JqZWN0KFByb3BlcnRpZXMpO1xuICB2YXIga2V5cyA9IG9iamVjdEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKE8sIGtleSA9IGtleXNbaW5kZXgrK10sIHByb3BzW2tleV0pO1xuICByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignZG9jdW1lbnQnLCAnZG9jdW1lbnRFbGVtZW50Jyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZ2xvYmFsIEFjdGl2ZVhPYmplY3QgLS0gb2xkIElFLCBXU0ggKi9cbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBkZWZpbmVQcm9wZXJ0aWVzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydGllcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG52YXIgaHRtbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9odG1sJyk7XG52YXIgZG9jdW1lbnRDcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcblxudmFyIEdUID0gJz4nO1xudmFyIExUID0gJzwnO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIFNDUklQVCA9ICdzY3JpcHQnO1xudmFyIElFX1BST1RPID0gc2hhcmVkS2V5KCdJRV9QUk9UTycpO1xuXG52YXIgRW1wdHlDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcblxudmFyIHNjcmlwdFRhZyA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gIHJldHVybiBMVCArIFNDUklQVCArIEdUICsgY29udGVudCArIExUICsgJy8nICsgU0NSSVBUICsgR1Q7XG59O1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgQWN0aXZlWCBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVggPSBmdW5jdGlvbiAoYWN0aXZlWERvY3VtZW50KSB7XG4gIGFjdGl2ZVhEb2N1bWVudC53cml0ZShzY3JpcHRUYWcoJycpKTtcbiAgYWN0aXZlWERvY3VtZW50LmNsb3NlKCk7XG4gIHZhciB0ZW1wID0gYWN0aXZlWERvY3VtZW50LnBhcmVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWFzc2lnbm1lbnQgLS0gYXZvaWQgbWVtb3J5IGxlYWtcbiAgYWN0aXZlWERvY3VtZW50ID0gbnVsbDtcbiAgcmV0dXJuIHRlbXA7XG59O1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgTnVsbFByb3RvT2JqZWN0VmlhSUZyYW1lID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gZG9jdW1lbnRDcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgdmFyIEpTID0gJ2phdmEnICsgU0NSSVBUICsgJzonO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBodG1sLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy80NzVcbiAgaWZyYW1lLnNyYyA9IFN0cmluZyhKUyk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUoc2NyaXB0VGFnKCdkb2N1bWVudC5GPU9iamVjdCcpKTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgcmV0dXJuIGlmcmFtZURvY3VtZW50LkY7XG59O1xuXG4vLyBDaGVjayBmb3IgZG9jdW1lbnQuZG9tYWluIGFuZCBhY3RpdmUgeCBzdXBwb3J0XG4vLyBObyBuZWVkIHRvIHVzZSBhY3RpdmUgeCBhcHByb2FjaCB3aGVuIGRvY3VtZW50LmRvbWFpbiBpcyBub3Qgc2V0XG4vLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltL2lzc3Vlcy8xNTBcbi8vIHZhcmlhdGlvbiBvZiBodHRwczovL2dpdGh1Yi5jb20va2l0Y2FtYnJpZGdlL2VzNS1zaGltL2NvbW1pdC80ZjczOGFjMDY2MzQ2XG4vLyBhdm9pZCBJRSBHQyBidWdcbnZhciBhY3RpdmVYRG9jdW1lbnQ7XG52YXIgTnVsbFByb3RvT2JqZWN0ID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIGFjdGl2ZVhEb2N1bWVudCA9IG5ldyBBY3RpdmVYT2JqZWN0KCdodG1sZmlsZScpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBpZ25vcmUgKi8gfVxuICBOdWxsUHJvdG9PYmplY3QgPSB0eXBlb2YgZG9jdW1lbnQgIT0gJ3VuZGVmaW5lZCdcbiAgICA/IGRvY3VtZW50LmRvbWFpbiAmJiBhY3RpdmVYRG9jdW1lbnRcbiAgICAgID8gTnVsbFByb3RvT2JqZWN0VmlhQWN0aXZlWChhY3RpdmVYRG9jdW1lbnQpIC8vIG9sZCBJRVxuICAgICAgOiBOdWxsUHJvdG9PYmplY3RWaWFJRnJhbWUoKVxuICAgIDogTnVsbFByb3RvT2JqZWN0VmlhQWN0aXZlWChhY3RpdmVYRG9jdW1lbnQpOyAvLyBXU0hcbiAgdmFyIGxlbmd0aCA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSBkZWxldGUgTnVsbFByb3RvT2JqZWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbbGVuZ3RoXV07XG4gIHJldHVybiBOdWxsUHJvdG9PYmplY3QoKTtcbn07XG5cbmhpZGRlbktleXNbSUVfUFJPVE9dID0gdHJ1ZTtcblxuLy8gYE9iamVjdC5jcmVhdGVgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuY3JlYXRlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWNyZWF0ZSAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eUNvbnN0cnVjdG9yW1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHlDb25zdHJ1Y3RvcigpO1xuICAgIEVtcHR5Q29uc3RydWN0b3JbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gTnVsbFByb3RvT2JqZWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkZWZpbmVQcm9wZXJ0aWVzTW9kdWxlLmYocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YnKTtcbnZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbicpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1lfU0FGQVJJX0lURVJBVE9SUyA9IGZhbHNlO1xuXG4vLyBgJUl0ZXJhdG9yUHJvdG90eXBlJWAgb2JqZWN0XG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSVpdGVyYXRvcnByb3RvdHlwZSUtb2JqZWN0XG52YXIgSXRlcmF0b3JQcm90b3R5cGUsIFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSwgYXJyYXlJdGVyYXRvcjtcblxuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWtleXMgLS0gc2FmZSAqL1xuaWYgKFtdLmtleXMpIHtcbiAgYXJyYXlJdGVyYXRvciA9IFtdLmtleXMoKTtcbiAgLy8gU2FmYXJpIDggaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gIGlmICghKCduZXh0JyBpbiBhcnJheUl0ZXJhdG9yKSkgQlVHR1lfU0FGQVJJX0lURVJBVE9SUyA9IHRydWU7XG4gIGVsc2Uge1xuICAgIFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKGdldFByb3RvdHlwZU9mKGFycmF5SXRlcmF0b3IpKTtcbiAgICBpZiAoUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlKSBJdGVyYXRvclByb3RvdHlwZSA9IFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxufVxuXG52YXIgTkVXX0lURVJBVE9SX1BST1RPVFlQRSA9ICFpc09iamVjdChJdGVyYXRvclByb3RvdHlwZSkgfHwgZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgdGVzdCA9IHt9O1xuICAvLyBGRjQ0LSBsZWdhY3kgaXRlcmF0b3JzIGNhc2VcbiAgcmV0dXJuIEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXS5jYWxsKHRlc3QpICE9PSB0ZXN0O1xufSk7XG5cbmlmIChORVdfSVRFUkFUT1JfUFJPVE9UWVBFKSBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuZWxzZSBpZiAoSVNfUFVSRSkgSXRlcmF0b3JQcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuXG4vLyBgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtJWl0ZXJhdG9ycHJvdG90eXBlJS1AQGl0ZXJhdG9yXG5pZiAoIWlzQ2FsbGFibGUoSXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdKSkge1xuICBkZWZpbmVCdWlsdEluKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEl0ZXJhdG9yUHJvdG90eXBlOiBJdGVyYXRvclByb3RvdHlwZSxcbiAgQlVHR1lfU0FGQVJJX0lURVJBVE9SUzogQlVHR1lfU0FGQVJJX0lURVJBVE9SU1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1pbnN0YW5jZScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZicpO1xudmFyIGRlZmluZUJ1aWx0SW5BY2Nlc3NvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4tYWNjZXNzb3InKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzLWNvcmUnKS5JdGVyYXRvclByb3RvdHlwZTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xuXG52YXIgQ09OU1RSVUNUT1IgPSAnY29uc3RydWN0b3InO1xudmFyIElURVJBVE9SID0gJ0l0ZXJhdG9yJztcbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBOYXRpdmVJdGVyYXRvciA9IGdsb2JhbFRoaXNbSVRFUkFUT1JdO1xuXG4vLyBGRjU2LSBoYXZlIG5vbi1zdGFuZGFyZCBnbG9iYWwgaGVscGVyIGBJdGVyYXRvcmBcbnZhciBGT1JDRUQgPSBJU19QVVJFXG4gIHx8ICFpc0NhbGxhYmxlKE5hdGl2ZUl0ZXJhdG9yKVxuICB8fCBOYXRpdmVJdGVyYXRvci5wcm90b3R5cGUgIT09IEl0ZXJhdG9yUHJvdG90eXBlXG4gIC8vIEZGNDQtIG5vbi1zdGFuZGFyZCBgSXRlcmF0b3JgIHBhc3NlcyBwcmV2aW91cyB0ZXN0c1xuICB8fCAhZmFpbHMoZnVuY3Rpb24gKCkgeyBOYXRpdmVJdGVyYXRvcih7fSk7IH0pO1xuXG52YXIgSXRlcmF0b3JDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uIEl0ZXJhdG9yKCkge1xuICBhbkluc3RhbmNlKHRoaXMsIEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgaWYgKGdldFByb3RvdHlwZU9mKHRoaXMpID09PSBJdGVyYXRvclByb3RvdHlwZSkgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fic3RyYWN0IGNsYXNzIEl0ZXJhdG9yIG5vdCBkaXJlY3RseSBjb25zdHJ1Y3RhYmxlJyk7XG59O1xuXG52YXIgZGVmaW5lSXRlcmF0b3JQcm90b3R5cGVBY2Nlc3NvciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIGlmIChERVNDUklQVE9SUykge1xuICAgIGRlZmluZUJ1aWx0SW5BY2Nlc3NvcihJdGVyYXRvclByb3RvdHlwZSwga2V5LCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gKHJlcGxhY2VtZW50KSB7XG4gICAgICAgIGFuT2JqZWN0KHRoaXMpO1xuICAgICAgICBpZiAodGhpcyA9PT0gSXRlcmF0b3JQcm90b3R5cGUpIHRocm93IG5ldyAkVHlwZUVycm9yKFwiWW91IGNhbid0IHJlZGVmaW5lIHRoaXMgcHJvcGVydHlcIik7XG4gICAgICAgIGlmIChoYXNPd24odGhpcywga2V5KSkgdGhpc1trZXldID0gcmVwbGFjZW1lbnQ7XG4gICAgICAgIGVsc2UgY3JlYXRlUHJvcGVydHkodGhpcywga2V5LCByZXBsYWNlbWVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSBJdGVyYXRvclByb3RvdHlwZVtrZXldID0gdmFsdWU7XG59O1xuXG5pZiAoIWhhc093bihJdGVyYXRvclByb3RvdHlwZSwgVE9fU1RSSU5HX1RBRykpIGRlZmluZUl0ZXJhdG9yUHJvdG90eXBlQWNjZXNzb3IoVE9fU1RSSU5HX1RBRywgSVRFUkFUT1IpO1xuXG5pZiAoRk9SQ0VEIHx8ICFoYXNPd24oSXRlcmF0b3JQcm90b3R5cGUsIENPTlNUUlVDVE9SKSB8fCBJdGVyYXRvclByb3RvdHlwZVtDT05TVFJVQ1RPUl0gPT09IE9iamVjdCkge1xuICBkZWZpbmVJdGVyYXRvclByb3RvdHlwZUFjY2Vzc29yKENPTlNUUlVDVE9SLCBJdGVyYXRvckNvbnN0cnVjdG9yKTtcbn1cblxuSXRlcmF0b3JDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBJdGVyYXRvclByb3RvdHlwZTtcblxuLy8gYEl0ZXJhdG9yYCBjb25zdHJ1Y3RvclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pdGVyYXRvclxuJCh7IGdsb2JhbDogdHJ1ZSwgY29uc3RydWN0b3I6IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgSXRlcmF0b3I6IEl0ZXJhdG9yQ29uc3RydWN0b3Jcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjbGFzc29mUmF3ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuKSB7XG4gIC8vIE5hc2hvcm4gYnVnOlxuICAvLyAgIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xMTI4XG4gIC8vICAgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzExMzBcbiAgaWYgKGNsYXNzb2ZSYXcoZm4pID09PSAnRnVuY3Rpb24nKSByZXR1cm4gdW5jdXJyeVRoaXMoZm4pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLWNsYXVzZScpO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIGJpbmQgPSB1bmN1cnJ5VGhpcyh1bmN1cnJ5VGhpcy5iaW5kKTtcblxuLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCkge1xuICBhQ2FsbGFibGUoZm4pO1xuICByZXR1cm4gdGhhdCA9PT0gdW5kZWZpbmVkID8gZm4gOiBOQVRJVkVfQklORCA/IGJpbmQoZm4sIHRoYXQpIDogZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycycpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgQXJyYXlQcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG5cbi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3Jcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG90eXBlW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xudmFyIHRlc3QgPSB7fTtcblxudGVzdFtUT19TVFJJTkdfVEFHXSA9ICd6JztcblxubW9kdWxlLmV4cG9ydHMgPSBTdHJpbmcodGVzdCkgPT09ICdbb2JqZWN0IHpdJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgVE9fU1RSSU5HX1RBR19TVVBQT1JUID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZy10YWctc3VwcG9ydCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBjbGFzc29mUmF3ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQ09SUkVDVF9BUkdVTUVOVFMgPSBjbGFzc29mUmF3KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxufTtcblxuLy8gZ2V0dGluZyB0YWcgZnJvbSBFUzYrIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYFxubW9kdWxlLmV4cG9ydHMgPSBUT19TVFJJTkdfVEFHX1NVUFBPUlQgPyBjbGFzc29mUmF3IDogZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCB0YWcsIHJlc3VsdDtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKHRhZyA9IHRyeUdldChPID0gJE9iamVjdChpdCksIFRPX1NUUklOR19UQUcpKSA9PSAnc3RyaW5nJyA/IHRhZ1xuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQ09SUkVDVF9BUkdVTUVOVFMgPyBjbGFzc29mUmF3KE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKHJlc3VsdCA9IGNsYXNzb2ZSYXcoTykpID09PSAnT2JqZWN0JyAmJiBpc0NhbGxhYmxlKE8uY2FsbGVlKSA/ICdBcmd1bWVudHMnIDogcmVzdWx0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKGl0KSkgcmV0dXJuIGdldE1ldGhvZChpdCwgSVRFUkFUT1IpXG4gICAgfHwgZ2V0TWV0aG9kKGl0LCAnQEBpdGVyYXRvcicpXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xudmFyIGdldEl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvci1tZXRob2QnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50LCB1c2luZ0l0ZXJhdG9yKSB7XG4gIHZhciBpdGVyYXRvck1ldGhvZCA9IGFyZ3VtZW50cy5sZW5ndGggPCAyID8gZ2V0SXRlcmF0b3JNZXRob2QoYXJndW1lbnQpIDogdXNpbmdJdGVyYXRvcjtcbiAgaWYgKGFDYWxsYWJsZShpdGVyYXRvck1ldGhvZCkpIHJldHVybiBhbk9iamVjdChjYWxsKGl0ZXJhdG9yTWV0aG9kLCBhcmd1bWVudCkpO1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcih0cnlUb1N0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBpdGVyYWJsZScpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGtpbmQsIHZhbHVlKSB7XG4gIHZhciBpbm5lclJlc3VsdCwgaW5uZXJFcnJvcjtcbiAgYW5PYmplY3QoaXRlcmF0b3IpO1xuICB0cnkge1xuICAgIGlubmVyUmVzdWx0ID0gZ2V0TWV0aG9kKGl0ZXJhdG9yLCAncmV0dXJuJyk7XG4gICAgaWYgKCFpbm5lclJlc3VsdCkge1xuICAgICAgaWYgKGtpbmQgPT09ICd0aHJvdycpIHRocm93IHZhbHVlO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBpbm5lclJlc3VsdCA9IGNhbGwoaW5uZXJSZXN1bHQsIGl0ZXJhdG9yKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpbm5lckVycm9yID0gdHJ1ZTtcbiAgICBpbm5lclJlc3VsdCA9IGVycm9yO1xuICB9XG4gIGlmIChraW5kID09PSAndGhyb3cnKSB0aHJvdyB2YWx1ZTtcbiAgaWYgKGlubmVyRXJyb3IpIHRocm93IGlubmVyUmVzdWx0O1xuICBhbk9iamVjdChpbm5lclJlc3VsdCk7XG4gIHJldHVybiB2YWx1ZTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xudmFyIGlzQXJyYXlJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheS1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xudmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZicpO1xudmFyIGdldEl0ZXJhdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvcicpO1xudmFyIGdldEl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBpdGVyYXRvckNsb3NlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG52YXIgUmVzdWx0ID0gZnVuY3Rpb24gKHN0b3BwZWQsIHJlc3VsdCkge1xuICB0aGlzLnN0b3BwZWQgPSBzdG9wcGVkO1xuICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcbn07XG5cbnZhciBSZXN1bHRQcm90b3R5cGUgPSBSZXN1bHQucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgdW5ib3VuZEZ1bmN0aW9uLCBvcHRpb25zKSB7XG4gIHZhciB0aGF0ID0gb3B0aW9ucyAmJiBvcHRpb25zLnRoYXQ7XG4gIHZhciBBU19FTlRSSUVTID0gISEob3B0aW9ucyAmJiBvcHRpb25zLkFTX0VOVFJJRVMpO1xuICB2YXIgSVNfUkVDT1JEID0gISEob3B0aW9ucyAmJiBvcHRpb25zLklTX1JFQ09SRCk7XG4gIHZhciBJU19JVEVSQVRPUiA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5JU19JVEVSQVRPUik7XG4gIHZhciBJTlRFUlJVUFRFRCA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5JTlRFUlJVUFRFRCk7XG4gIHZhciBmbiA9IGJpbmQodW5ib3VuZEZ1bmN0aW9uLCB0aGF0KTtcbiAgdmFyIGl0ZXJhdG9yLCBpdGVyRm4sIGluZGV4LCBsZW5ndGgsIHJlc3VsdCwgbmV4dCwgc3RlcDtcblxuICB2YXIgc3RvcCA9IGZ1bmN0aW9uIChjb25kaXRpb24pIHtcbiAgICBpZiAoaXRlcmF0b3IpIGl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsICdub3JtYWwnLCBjb25kaXRpb24pO1xuICAgIHJldHVybiBuZXcgUmVzdWx0KHRydWUsIGNvbmRpdGlvbik7XG4gIH07XG5cbiAgdmFyIGNhbGxGbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmIChBU19FTlRSSUVTKSB7XG4gICAgICBhbk9iamVjdCh2YWx1ZSk7XG4gICAgICByZXR1cm4gSU5URVJSVVBURUQgPyBmbih2YWx1ZVswXSwgdmFsdWVbMV0sIHN0b3ApIDogZm4odmFsdWVbMF0sIHZhbHVlWzFdKTtcbiAgICB9IHJldHVybiBJTlRFUlJVUFRFRCA/IGZuKHZhbHVlLCBzdG9wKSA6IGZuKHZhbHVlKTtcbiAgfTtcblxuICBpZiAoSVNfUkVDT1JEKSB7XG4gICAgaXRlcmF0b3IgPSBpdGVyYWJsZS5pdGVyYXRvcjtcbiAgfSBlbHNlIGlmIChJU19JVEVSQVRPUikge1xuICAgIGl0ZXJhdG9yID0gaXRlcmFibGU7XG4gIH0gZWxzZSB7XG4gICAgaXRlckZuID0gZ2V0SXRlcmF0b3JNZXRob2QoaXRlcmFibGUpO1xuICAgIGlmICghaXRlckZuKSB0aHJvdyBuZXcgJFR5cGVFcnJvcih0cnlUb1N0cmluZyhpdGVyYWJsZSkgKyAnIGlzIG5vdCBpdGVyYWJsZScpO1xuICAgIC8vIG9wdGltaXNhdGlvbiBmb3IgYXJyYXkgaXRlcmF0b3JzXG4gICAgaWYgKGlzQXJyYXlJdGVyYXRvck1ldGhvZChpdGVyRm4pKSB7XG4gICAgICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoaXRlcmFibGUpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgICByZXN1bHQgPSBjYWxsRm4oaXRlcmFibGVbaW5kZXhdKTtcbiAgICAgICAgaWYgKHJlc3VsdCAmJiBpc1Byb3RvdHlwZU9mKFJlc3VsdFByb3RvdHlwZSwgcmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0gcmV0dXJuIG5ldyBSZXN1bHQoZmFsc2UpO1xuICAgIH1cbiAgICBpdGVyYXRvciA9IGdldEl0ZXJhdG9yKGl0ZXJhYmxlLCBpdGVyRm4pO1xuICB9XG5cbiAgbmV4dCA9IElTX1JFQ09SRCA/IGl0ZXJhYmxlLm5leHQgOiBpdGVyYXRvci5uZXh0O1xuICB3aGlsZSAoIShzdGVwID0gY2FsbChuZXh0LCBpdGVyYXRvcikpLmRvbmUpIHtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gY2FsbEZuKHN0ZXAudmFsdWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCAndGhyb3cnLCBlcnJvcik7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgcmVzdWx0ID09ICdvYmplY3QnICYmIHJlc3VsdCAmJiBpc1Byb3RvdHlwZU9mKFJlc3VsdFByb3RvdHlwZSwgcmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgfSByZXR1cm4gbmV3IFJlc3VsdChmYWxzZSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGBHZXRJdGVyYXRvckRpcmVjdChvYmopYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9wcm9wb3NhbC1pdGVyYXRvci1oZWxwZXJzLyNzZWMtZ2V0aXRlcmF0b3JkaXJlY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4ge1xuICAgIGl0ZXJhdG9yOiBvYmosXG4gICAgbmV4dDogb2JqLm5leHQsXG4gICAgZG9uZTogZmFsc2VcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgaXRlcmF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRlJyk7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBnZXRJdGVyYXRvckRpcmVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItZGlyZWN0Jyk7XG5cbi8vIGBJdGVyYXRvci5wcm90b3R5cGUuZmluZGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWl0ZXJhdG9yLnByb3RvdHlwZS5maW5kXG4kKHsgdGFyZ2V0OiAnSXRlcmF0b3InLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSB9LCB7XG4gIGZpbmQ6IGZ1bmN0aW9uIGZpbmQocHJlZGljYXRlKSB7XG4gICAgYW5PYmplY3QodGhpcyk7XG4gICAgYUNhbGxhYmxlKHByZWRpY2F0ZSk7XG4gICAgdmFyIHJlY29yZCA9IGdldEl0ZXJhdG9yRGlyZWN0KHRoaXMpO1xuICAgIHZhciBjb3VudGVyID0gMDtcbiAgICByZXR1cm4gaXRlcmF0ZShyZWNvcmQsIGZ1bmN0aW9uICh2YWx1ZSwgc3RvcCkge1xuICAgICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgY291bnRlcisrKSkgcmV0dXJuIHN0b3AodmFsdWUpO1xuICAgIH0sIHsgSVNfUkVDT1JEOiB0cnVlLCBJTlRFUlJVUFRFRDogdHJ1ZSB9KS5yZXN1bHQ7XG4gIH1cbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YnKTtcblxudmFyICRTdHJpbmcgPSBTdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChjbGFzc29mKGFyZ3VtZW50KSA9PT0gJ1N5bWJvbCcpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IGEgU3ltYm9sIHZhbHVlIHRvIGEgc3RyaW5nJyk7XG4gIHJldHVybiAkU3RyaW5nKGFyZ3VtZW50KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHBhc3NlZCwgcmVxdWlyZWQpIHtcbiAgaWYgKHBhc3NlZCA8IHJlcXVpcmVkKSB0aHJvdyBuZXcgJFR5cGVFcnJvcignTm90IGVub3VnaCBhcmd1bWVudHMnKTtcbiAgcmV0dXJuIHBhc3NlZDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgdmFsaWRhdGVBcmd1bWVudHNMZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdmFsaWRhdGUtYXJndW1lbnRzLWxlbmd0aCcpO1xuXG52YXIgJFVSTFNlYXJjaFBhcmFtcyA9IFVSTFNlYXJjaFBhcmFtcztcbnZhciBVUkxTZWFyY2hQYXJhbXNQcm90b3R5cGUgPSAkVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZTtcbnZhciBhcHBlbmQgPSB1bmN1cnJ5VGhpcyhVUkxTZWFyY2hQYXJhbXNQcm90b3R5cGUuYXBwZW5kKTtcbnZhciAkZGVsZXRlID0gdW5jdXJyeVRoaXMoVVJMU2VhcmNoUGFyYW1zUHJvdG90eXBlWydkZWxldGUnXSk7XG52YXIgZm9yRWFjaCA9IHVuY3VycnlUaGlzKFVSTFNlYXJjaFBhcmFtc1Byb3RvdHlwZS5mb3JFYWNoKTtcbnZhciBwdXNoID0gdW5jdXJyeVRoaXMoW10ucHVzaCk7XG52YXIgcGFyYW1zID0gbmV3ICRVUkxTZWFyY2hQYXJhbXMoJ2E9MSZhPTImYj0zJyk7XG5cbnBhcmFtc1snZGVsZXRlJ10oJ2EnLCAxKTtcbi8vIGB1bmRlZmluZWRgIGNhc2UgaXMgYSBDaHJvbWl1bSAxMTcgYnVnXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0xNDIyMlxucGFyYW1zWydkZWxldGUnXSgnYicsIHVuZGVmaW5lZCk7XG5cbmlmIChwYXJhbXMgKyAnJyAhPT0gJ2E9MicpIHtcbiAgZGVmaW5lQnVpbHRJbihVUkxTZWFyY2hQYXJhbXNQcm90b3R5cGUsICdkZWxldGUnLCBmdW5jdGlvbiAobmFtZSAvKiAsIHZhbHVlICovKSB7XG4gICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgdmFyICR2YWx1ZSA9IGxlbmd0aCA8IDIgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMV07XG4gICAgaWYgKGxlbmd0aCAmJiAkdmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuICRkZWxldGUodGhpcywgbmFtZSk7XG4gICAgdmFyIGVudHJpZXMgPSBbXTtcbiAgICBmb3JFYWNoKHRoaXMsIGZ1bmN0aW9uICh2LCBrKSB7IC8vIGFsc28gdmFsaWRhdGVzIGB0aGlzYFxuICAgICAgcHVzaChlbnRyaWVzLCB7IGtleTogaywgdmFsdWU6IHYgfSk7XG4gICAgfSk7XG4gICAgdmFsaWRhdGVBcmd1bWVudHNMZW5ndGgobGVuZ3RoLCAxKTtcbiAgICB2YXIga2V5ID0gdG9TdHJpbmcobmFtZSk7XG4gICAgdmFyIHZhbHVlID0gdG9TdHJpbmcoJHZhbHVlKTtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBkaW5kZXggPSAwO1xuICAgIHZhciBmb3VuZCA9IGZhbHNlO1xuICAgIHZhciBlbnRyaWVzTGVuZ3RoID0gZW50cmllcy5sZW5ndGg7XG4gICAgdmFyIGVudHJ5O1xuICAgIHdoaWxlIChpbmRleCA8IGVudHJpZXNMZW5ndGgpIHtcbiAgICAgIGVudHJ5ID0gZW50cmllc1tpbmRleCsrXTtcbiAgICAgIGlmIChmb3VuZCB8fCBlbnRyeS5rZXkgPT09IGtleSkge1xuICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICRkZWxldGUodGhpcywgZW50cnkua2V5KTtcbiAgICAgIH0gZWxzZSBkaW5kZXgrKztcbiAgICB9XG4gICAgd2hpbGUgKGRpbmRleCA8IGVudHJpZXNMZW5ndGgpIHtcbiAgICAgIGVudHJ5ID0gZW50cmllc1tkaW5kZXgrK107XG4gICAgICBpZiAoIShlbnRyeS5rZXkgPT09IGtleSAmJiBlbnRyeS52YWx1ZSA9PT0gdmFsdWUpKSBhcHBlbmQodGhpcywgZW50cnkua2V5LCBlbnRyeS52YWx1ZSk7XG4gICAgfVxuICB9LCB7IGVudW1lcmFibGU6IHRydWUsIHVuc2FmZTogdHJ1ZSB9KTtcbn1cbiIsICIndXNlIHN0cmljdCc7XG52YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4nKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcbnZhciB2YWxpZGF0ZUFyZ3VtZW50c0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92YWxpZGF0ZS1hcmd1bWVudHMtbGVuZ3RoJyk7XG5cbnZhciAkVVJMU2VhcmNoUGFyYW1zID0gVVJMU2VhcmNoUGFyYW1zO1xudmFyIFVSTFNlYXJjaFBhcmFtc1Byb3RvdHlwZSA9ICRVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlO1xudmFyIGdldEFsbCA9IHVuY3VycnlUaGlzKFVSTFNlYXJjaFBhcmFtc1Byb3RvdHlwZS5nZXRBbGwpO1xudmFyICRoYXMgPSB1bmN1cnJ5VGhpcyhVUkxTZWFyY2hQYXJhbXNQcm90b3R5cGUuaGFzKTtcbnZhciBwYXJhbXMgPSBuZXcgJFVSTFNlYXJjaFBhcmFtcygnYT0xJyk7XG5cbi8vIGB1bmRlZmluZWRgIGNhc2UgaXMgYSBDaHJvbWl1bSAxMTcgYnVnXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0xNDIyMlxuaWYgKHBhcmFtcy5oYXMoJ2EnLCAyKSB8fCAhcGFyYW1zLmhhcygnYScsIHVuZGVmaW5lZCkpIHtcbiAgZGVmaW5lQnVpbHRJbihVUkxTZWFyY2hQYXJhbXNQcm90b3R5cGUsICdoYXMnLCBmdW5jdGlvbiBoYXMobmFtZSAvKiAsIHZhbHVlICovKSB7XG4gICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgdmFyICR2YWx1ZSA9IGxlbmd0aCA8IDIgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMV07XG4gICAgaWYgKGxlbmd0aCAmJiAkdmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuICRoYXModGhpcywgbmFtZSk7XG4gICAgdmFyIHZhbHVlcyA9IGdldEFsbCh0aGlzLCBuYW1lKTsgLy8gYWxzbyB2YWxpZGF0ZXMgYHRoaXNgXG4gICAgdmFsaWRhdGVBcmd1bWVudHNMZW5ndGgobGVuZ3RoLCAxKTtcbiAgICB2YXIgdmFsdWUgPSB0b1N0cmluZygkdmFsdWUpO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgd2hpbGUgKGluZGV4IDwgdmFsdWVzLmxlbmd0aCkge1xuICAgICAgaWYgKHZhbHVlc1tpbmRleCsrXSA9PT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIH0gcmV0dXJuIGZhbHNlO1xuICB9LCB7IGVudW1lcmFibGU6IHRydWUsIHVuc2FmZTogdHJ1ZSB9KTtcbn1cbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBkZWZpbmVCdWlsdEluQWNjZXNzb3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluLWFjY2Vzc29yJyk7XG5cbnZhciBVUkxTZWFyY2hQYXJhbXNQcm90b3R5cGUgPSBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlO1xudmFyIGZvckVhY2ggPSB1bmN1cnJ5VGhpcyhVUkxTZWFyY2hQYXJhbXNQcm90b3R5cGUuZm9yRWFjaCk7XG5cbi8vIGBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLnNpemVgIGdldHRlclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy91cmwvcHVsbC83MzRcbmlmIChERVNDUklQVE9SUyAmJiAhKCdzaXplJyBpbiBVUkxTZWFyY2hQYXJhbXNQcm90b3R5cGUpKSB7XG4gIGRlZmluZUJ1aWx0SW5BY2Nlc3NvcihVUkxTZWFyY2hQYXJhbXNQcm90b3R5cGUsICdzaXplJywge1xuICAgIGdldDogZnVuY3Rpb24gc2l6ZSgpIHtcbiAgICAgIHZhciBjb3VudCA9IDA7XG4gICAgICBmb3JFYWNoKHRoaXMsIGZ1bmN0aW9uICgpIHsgY291bnQrKzsgfSk7XG4gICAgICByZXR1cm4gY291bnQ7XG4gICAgfSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZW51bWVyYWJsZTogdHJ1ZVxuICB9KTtcbn1cbiIsICJjbGFzcyBDb25zdGFudHMge1xuXHR2ZXJzaW9uID0gJzQuMS4wJztcblx0Z2V0IGlzQXJ0aWNsZSgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnSXNBcnRpY2xlJyk7XG5cdH1cblx0Z2V0IGN1cnJlbnRQYWdlTmFtZSgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKS5yZXBsYWNlKC8gL2csICdfJyk7XG5cdH1cblx0Z2V0IGFydGljbGVJZCgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnQXJ0aWNsZUlkJyk7XG5cdH1cblx0Z2V0IHJldmlzaW9uSWQoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z1JldmlzaW9uSWQnKTtcblx0fVxuXHRnZXQgbGF0ZXN0UmV2aXNpb25JZCgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnQ3VyUmV2aXNpb25JZCcpO1xuXHR9XG5cdGdldCBhcnRpY2xlUGF0aCgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnQXJ0aWNsZVBhdGgnKTtcblx0fVxuXHRnZXQgc2NyaXB0UGF0aCgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnU2NyaXB0UGF0aCcpO1xuXHR9XG5cdGdldCBhY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z0FjdGlvbicpO1xuXHR9XG5cdGdldCBza2luKCkge1xuXHRcdHJldHVybiB3aW5kb3cubXcuY29uZmlnLmdldCgnc2tpbicpO1xuXHR9XG5cdGdldCB1c2VyR3JvdXBzKCkge1xuXHRcdHJldHVybiB3aW5kb3cubXcuY29uZmlnLmdldCgnd2dVc2VyR3JvdXBzJyk7XG5cdH1cblx0Z2V0IHdpa2lJZCgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnV2lraUlEJyk7XG5cdH1cblx0dXNlckFnZW50ID0gYFlzQXJjaGl2ZXMvMS4xIFdpa2lwbHVzLyR7dGhpcy52ZXJzaW9ufSAoJHt0aGlzLndpa2lJZH0pYDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IENvbnN0YW50cygpO1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XG5cbmNvbnN0IFJlcXVlc3RzID0ge1xuXHRiYXNlOiBgJHtsb2NhdGlvbi5wcm90b2NvbH0vLyR7bG9jYXRpb24uaG9zdH0ke0NvbnN0YW50cy5zY3JpcHRQYXRofS9hcGkucGhwYCxcblx0YXN5bmMgZ2V0KHF1ZXJ5KSB7XG5cdFx0Y29uc3QgdXJsID0gbmV3IFVSTChSZXF1ZXN0cy5iYXNlKTtcblx0XHRmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhxdWVyeSkpIHtcblx0XHRcdHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKGtleSwgcXVlcnlba2V5XSk7XG5cdFx0fVxuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG5cdFx0XHRjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0J0FwaS1Vc2VyLUFnZW50JzogQ29uc3RhbnRzLnVzZXJBZ2VudCxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0cmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblx0fSxcblx0YXN5bmMgcG9zdChwYXlsb2FkKSB7XG5cdFx0Y29uc3QgdXJsID0gbmV3IFVSTChSZXF1ZXN0cy5iYXNlKTtcblx0XHRjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XG5cdFx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocGF5bG9hZCkpIHtcblx0XHRcdGZvcm0uYXBwZW5kKGtleSwgdmFsdWUpO1xuXHRcdH1cblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRib2R5OiBmb3JtLFxuXHRcdFx0Y3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdCdBcGktVXNlci1BZ2VudCc6IENvbnN0YW50cy51c2VyQWdlbnQsXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHRcdHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0cztcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuY2xhc3MgSTE4biB7XG5cdGxhbmd1YWdlO1xuXHRpMThuRGF0YSA9IHt9O1xuXHRzZXNzaW9uVXBkYXRlTG9nID0gW107XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdGxldCBsYW5ndWFnZTtcblx0XHR0cnkge1xuXHRcdFx0bGFuZ3VhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVsnV2lraXBsdXNfU2V0dGluZ3MnXSlbJ2xhbmd1YWdlJ10gfHwgbmF2aWdhdG9yLmxhbmd1YWdlLnRvTG93ZXJDYXNlKCk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRsYW5ndWFnZSA9IChuYXZpZ2F0b3IubGFuZ3VhZ2UgfHwgbmF2aWdhdG9yLmJyb3dzZXJMYW5ndWFnZSlcblx0XHRcdFx0LnJlcGxhY2UoL2hhbltzdF0tPy9pLCAnJykgLy8gZm9yIGxhbmd1YWdlcyBsaWtlIHpoLUhhbnMtQ05cblx0XHRcdFx0LnRvTG93ZXJDYXNlKCk7XG5cdFx0fVxuXHRcdHRoaXMubGFuZ3VhZ2UgPSBsYW5ndWFnZTtcblx0XHQvLyBNZXJnZSB3aXRoIGxvY2FsU3RvcmFnZSBpMThuIGNhY2hlXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGkxOG5DYWNoZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1dpa2lwbHVzX2kxOG5DYWNoZScpKTtcblx0XHRcdGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGkxOG5DYWNoZSkpIHtcblx0XHRcdFx0dGhpcy5pMThuRGF0YVtrZXldID0gaTE4bkNhY2hlW2tleV07XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHQvLyBGYWlsIHRvIHBhcnNlIGkxOG4gY2FjaGUsIHJlc2V0XG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnV2lraXBsdXNfaTE4bkNhY2hlJywgJ3t9Jyk7XG5cdFx0fVxuXHR9XG5cdHRyYW5zbGF0ZShrZXksIHBsYWNlaG9sZGVycyA9IFtdKSB7XG5cdFx0bGV0IHJlc3VsdCA9ICcnO1xuXHRcdGlmICh0aGlzLmxhbmd1YWdlIGluIHRoaXMuaTE4bkRhdGEpIHtcblx0XHRcdGlmIChrZXkgaW4gdGhpcy5pMThuRGF0YVt0aGlzLmxhbmd1YWdlXSkge1xuXHRcdFx0XHRyZXN1bHQgPSB0aGlzLmkxOG5EYXRhW3RoaXMubGFuZ3VhZ2VdW2tleV07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyB0cnkgdXBkYXRlIGxhbmd1YWdlIHZlcmlzb25cblx0XHRcdFx0dGhpcy5sb2FkTGFuZ3VhZ2UodGhpcy5sYW5ndWFnZSk7XG5cdFx0XHRcdGlmIChrZXkgaW4gdGhpcy5pMThuRGF0YVsnZW4tdXMnXSkge1xuXHRcdFx0XHRcdC8vIEZhbGxiYWNrIHRvIEVuZ2xpc2hcblx0XHRcdFx0XHRyZXN1bHQgPSB0aGlzLmkxOG5EYXRhWydlbi11cyddW2tleV07XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVzdWx0ID0ga2V5O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMubG9hZExhbmd1YWdlKHRoaXMubGFuZ3VhZ2UpO1xuXHRcdH1cblxuXHRcdGlmIChwbGFjZWhvbGRlcnMubGVuZ3RoID4gMCkge1xuXHRcdFx0Zm9yIChjb25zdCBbaW5kZXgsIHBsYWNlaG9sZGVyXSBvZiBwbGFjZWhvbGRlcnMuZW50cmllcygpKSB7XG5cdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKGAkJHtpbmRleCArIDF9YCwgcGxhY2Vob2xkZXIpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cdGFzeW5jIGxvYWRMYW5ndWFnZShsYW5ndWFnZSkge1xuXHRcdGlmICh0aGlzLnNlc3Npb25VcGRhdGVMb2cuaW5jbHVkZXMobGFuZ3VhZ2UpKSB7XG5cdFx0XHQvLyBIYXMgYmVlbiB1cGRhdGVkIHRoaXMgc2Vzc2lvbi5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgKFxuXHRcdFx0XHRhd2FpdCBmZXRjaChcblx0XHRcdFx0XHRgaHR0cHM6Ly9naXRjZG4ucWl1d2VuLm5ldC5jbi9JbnRlcmZhY2VBZG1pbi9XaWtpcGx1cy9yYXcvYnJhbmNoL2Rldi9sYW5ndWFnZXMvJHtsYW5ndWFnZX0uanNvbmBcblx0XHRcdFx0KVxuXHRcdFx0KS5qc29uKCk7XG5cdFx0XHRjb25zdCBub3dWZXJzaW9uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1dpa2lwbHVzX0xhbmd1YWdlVmVyc2lvbicpIHx8ICcwMDAnO1xuXHRcdFx0dGhpcy5zZXNzaW9uVXBkYXRlTG9nLnB1c2gobGFuZ3VhZ2UpO1xuXHRcdFx0aWYgKHJlc3BvbnNlLl9fdmVyc2lvbiAhPT0gbm93VmVyc2lvbiB8fCAhKGxhbmd1YWdlIGluIHRoaXMuaTE4bkRhdGEpKSB7XG5cdFx0XHRcdC8vIExhbmd1YWdlIGdldCB1cGRhdGVkXG5cdFx0XHRcdGNvbnNvbGUuaW5mbyhgVXBkYXRlICR7bGFuZ3VhZ2V9IHN1cHBvcnQgdG8gdmVyc2lvbiAke3Jlc3BvbnNlLl9fdmVyc2lvbn1gKTtcblx0XHRcdFx0dGhpcy5pMThuRGF0YVtsYW5ndWFnZV0gPSByZXNwb25zZTtcblx0XHRcdFx0Ly8gVXBkYXRlIGxvY2FsU3RvcmFnZSBjYWNoZVxuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnV2lraXBsdXNfaTE4bkNhY2hlJywgSlNPTi5zdHJpbmdpZnkodGhpcy5pMThuRGF0YSkpO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0Ly8gVW5zdXBwb3J0ZWQgbGFuZ3VhZ2Vcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEkxOG4oKTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0IGkxOG4gZnJvbSAnLi9pMThuJztcblxuY2xhc3MgV2lraXBsdXNFcnJvciBleHRlbmRzIEVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZSwgY29kZSkge1xuXHRcdHN1cGVyKG1lc3NhZ2UpO1xuXHRcdHRoaXMuY29kZSA9IGNvZGU7XG5cdH1cbn1cblxuY29uc3QgTG9nID0ge1xuXHRkZWJ1ZyhtZXNzYWdlID0gJycpIHtcblx0XHRjb25zb2xlLmRlYnVnKGBbV2lraXBsdXMtREVCVUddICR7bWVzc2FnZX1gKTtcblx0fSxcblx0aW5mbyhtZXNzYWdlID0gJycpIHtcblx0XHRjb25zb2xlLmluZm8oYFtXaWtpcGx1cy1JTkZPXSAke21lc3NhZ2V9YCk7XG5cdH0sXG5cdGVycm9yKGVycm9yQ29kZSwgcGF5bG9hZHMgPSBbXSkge1xuXHRcdGxldCB0ZW1wbGF0ZSA9IGkxOG4udHJhbnNsYXRlKGVycm9yQ29kZSk7XG5cdFx0aWYgKHBheWxvYWRzLmxlbmd0aCA+IDApIHtcblx0XHRcdC8vIEZpbGxcblx0XHRcdGZvciAoY29uc3QgW2ksIHZdIG9mIHBheWxvYWRzLmVudHJpZXMoKSkge1xuXHRcdFx0XHR0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UobmV3IFJlZ0V4cChgXFxcXCR7aSArIDF9YCwgJ2lnJyksIHYpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjb25zb2xlLmVycm9yKGBbV2lraXBsdXMtRVJST1JdICR7dGVtcGxhdGV9YCk7XG5cdFx0dGhyb3cgbmV3IFdpa2lwbHVzRXJyb3IoYCR7dGVtcGxhdGV9YCwgZXJyb3JDb2RlKTtcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZztcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0IHJlcXVlc3RzIGZyb20gJy4uL3V0aWxzL3JlcXVlc3RzJztcbmltcG9ydCBMb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztcbmltcG9ydCBpMThuIGZyb20gJy4uL3V0aWxzL2kxOG4nO1xuXG5jbGFzcyBXaWtpIHtcblx0cGFnZUluZm9DYWNoZSA9IHt9O1xuXHQvKipcblx0ICog6I635b6XIEVkaXQgVG9rZW5cblx0ICogR2V0IEVkaXQgVG9rZW5cblx0ICpcblx0ICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cblx0ICovXG5cdGFzeW5jIGdldEVkaXRUb2tlbigpIHtcblx0XHQvLyDlsJ3or5Xku44gQVBJIOiOt+W+lyBFZGl0VG9rZW5cblx0XHQvLyBUcnkgdG8gZ2V0IEVkaXRUb2tlbiBmcm9tIEFQSVxuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdHMuZ2V0KHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdG1ldGE6ICd0b2tlbnMnLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0fSk7XG5cdFx0aWYgKFxuXHRcdFx0cmVzcG9uc2UucXVlcnkgJiZcblx0XHRcdHJlc3BvbnNlLnF1ZXJ5LnRva2VucyAmJlxuXHRcdFx0cmVzcG9uc2UucXVlcnkudG9rZW5zLmNzcmZ0b2tlbiAmJlxuXHRcdFx0cmVzcG9uc2UucXVlcnkudG9rZW5zLmNzcmZ0b2tlbiAhPT0gJytcXFxcJ1xuXHRcdCkge1xuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLnF1ZXJ5LnRva2Vucy5jc3JmdG9rZW47XG5cdFx0fVxuXHRcdHJldHVybiBMb2cuZXJyb3IoJ2ZhaWxfdG9fZ2V0X2VkaXR0b2tlbicpO1xuXHR9XG5cdC8qKlxuXHQgKiDojrflvpfpobXpnaLkuIrkuIDniYjmnKzml7bpl7TmiLNcblx0ICogR2V0IHRoZSB0aW1lc3RhbXAgb2YgdGhlIGxhc3QgcmV2aXNpb24gb2YgcGFnZSBzcGVjaWZpZWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7cGFyYW1zLnN0cmluZ30gdGl0bGUg6aG16Z2i5ZCNIC8gUGFnZW5hbWVcblx0ICogQHBhcmFtIHtwYXJhbXMucmV2aXNpb25JZH0gcmV2aXNpb25JZCDkv67orqLniYjmnKzlj7cgLyBSZXZpc2lvbiBJRFxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxuXHQgKi9cblx0YXN5bmMgZ2V0UGFnZUluZm8oe3RpdGxlLCByZXZpc2lvbklkfSkge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0cHJvcDogJ3JldmlzaW9uc3xpbmZvJyxcblx0XHRcdFx0cnZwcm9wOiAndGltZXN0YW1wfGlkcycsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0fTtcblx0XHRcdGlmIChyZXZpc2lvbklkKSB7XG5cdFx0XHRcdHBhcmFtcy5yZXZpZHMgPSByZXZpc2lvbklkO1xuXHRcdFx0fSBlbHNlIGlmICh0aXRsZSkge1xuXHRcdFx0XHRpZiAodGhpcy5wYWdlSW5mb0NhY2hlW3RpdGxlXSkge1xuXHRcdFx0XHRcdC8vIEhpdCBjYWNoZVxuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHR0aW1lc3RhbXA6IHRoaXMucGFnZUluZm9DYWNoZVt0aXRsZV0udGltZXN0YW1wLFxuXHRcdFx0XHRcdFx0cmV2aXNpb25JZDogdGhpcy5wYWdlSW5mb0NhY2hlW3RpdGxlXS5yZXZpZCxcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHBhcmFtcy50aXRsZXMgPSB0aXRsZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdHMuZ2V0KHBhcmFtcyk7XG5cdFx0XHRpZiAocmVzcG9uc2UucXVlcnkgJiYgcmVzcG9uc2UucXVlcnkucGFnZXMpIHtcblx0XHRcdFx0aWYgKE9iamVjdC5rZXlzKHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzKVswXSA9PT0gJy0xJykge1xuXHRcdFx0XHRcdC8vIOS4jeWtmOWcqOi/meS4gOmhtemdolxuXHRcdFx0XHRcdC8vIFBhZ2Ugbm90IGZvdW5kLlxuXHRcdFx0XHRcdHJldHVybiB7fTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBwYWdlSW5mbyA9IHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzW09iamVjdC5rZXlzKHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzKVswXV0ucmV2aXNpb25zWzBdO1xuXHRcdFx0XHRpZiAodGl0bGUpIHtcblx0XHRcdFx0XHR0aGlzLnBhZ2VJbmZvQ2FjaGVbdGl0bGVdID0gcGFnZUluZm87XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0aW1lc3RhbXA6IHBhZ2VJbmZvLnRpbWVzdGFtcCxcblx0XHRcdFx0XHRyZXZpc2lvbklkOiBwYWdlSW5mby5yZXZpZCxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdExvZy5lcnJvcignZmFpbF90b19nZXRfZWRpdHRva2VuJyk7XG5cdFx0fVxuXHR9XG5cdC8qKlxuXHQgKiDojrflvpfpobXpnaLnmoQgV2lraXRleHRcblx0ICogR2V0IHdpa2l0ZXh0IG9mIHRoZSBwYWdlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUgdGl0bGVcblx0ICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLnJldmlzaW9uSWQg54mI5pys5Y+3XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuc2VjdGlvbiDmrrXokL3lj7dcblx0ICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fSB3aWtpdGV4dOWGheWuuVxuXHQgKi9cblx0YXN5bmMgZ2V0V2lraVRleHQoe3NlY3Rpb24sIHJldmlzaW9uSWR9KSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRcdFx0cnZwcm9wOiAnY29udGVudCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRyZXZpZHM6IHJldmlzaW9uSWQsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKHJldmlzaW9uSWQpIHtcblx0XHRcdFx0cGFyYW1zLnJldmlkcyA9IHJldmlzaW9uSWQ7XG5cdFx0XHR9XG5cdFx0XHRpZiAoc2VjdGlvbikge1xuXHRcdFx0XHRwYXJhbXMucnZzZWN0aW9uID0gc2VjdGlvbjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdHMuZ2V0KHBhcmFtcyk7XG5cdFx0XHRpZiAocmVzcG9uc2UucXVlcnkgJiYgcmVzcG9uc2UucXVlcnkucGFnZXMpIHtcblx0XHRcdFx0aWYgKE9iamVjdC5rZXlzKHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzKVswXSA9PT0gJy0xJykge1xuXHRcdFx0XHRcdC8vIOS4jeWtmOWcqOi/meS4gOmhtemdolxuXHRcdFx0XHRcdC8vIFBhZ2Ugbm90IGZvdW5kLlxuXHRcdFx0XHRcdHJldHVybiAnJztcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBwYWdlSW5mbyA9IHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzW09iamVjdC5rZXlzKHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzKVswXV0ucmV2aXNpb25zWzBdO1xuXHRcdFx0XHRyZXR1cm4gcGFnZUluZm9bJyonXTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdExvZy5lcnJvcignZmFpbF90b19nZXRfd2lraXRleHQnKTtcblx0XHR9XG5cdH1cblx0LyoqXG5cdCAqIOino+aekCBXaWtpdGV4dFxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gd2lraXRleHQgd2lraXRleHRcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIOmhtemdouagh+mimFxuXHQgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIOiuvue9rlxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZz59IOino+aekOe7k+aenCBIVE1MXG5cdCAqL1xuXHRhc3luYyBwYXJzZVdpa2lUZXh0KHdpa2l0ZXh0LCB0aXRsZSA9ICcnLCBjb25maWcgPSB7fSkge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3RzLnBvc3Qoe1xuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdFx0XHR0ZXh0OiB3aWtpdGV4dCxcblx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdHBzdDogJ3RydWUnLFxuXHRcdFx0fSk7XG5cdFx0XHRpZiAocmVzcG9uc2UucGFyc2UgJiYgcmVzcG9uc2UucGFyc2UudGV4dCkge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UucGFyc2UudGV4dFsnKiddO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0TG9nLmVycm9yKCdjYW50X3BhcnNlX3dpa2l0ZXh0Jyk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIOe8lui+kemhtemdolxuXHQgKlxuXHQgKiBAcGFyYW0gcm9vdDBcblx0ICogQHBhcmFtIHJvb3QwLnRpdGxlXG5cdCAqIEBwYXJhbSByb290MC5jb250ZW50XG5cdCAqIEBwYXJhbSByb290MC5lZGl0VG9rZW5cblx0ICogQHBhcmFtIHJvb3QwLnRpbWVzdGFtcFxuXHQgKiBAcGFyYW0gcm9vdDAuY29uZmlnXG5cdCAqIEBwYXJhbSByb290MC5hZGRpdGlvbmFsQ29uZmlnXG5cdCAqL1xuXHRhc3luYyBlZGl0KHt0aXRsZSwgY29udGVudCwgZWRpdFRva2VuLCB0aW1lc3RhbXAsIGNvbmZpZyA9IHt9LCBhZGRpdGlvbmFsQ29uZmlnID0ge319ID0ge30pIHtcblx0XHRsZXQgcmVzcG9uc2U7XG5cdFx0dHJ5IHtcblx0XHRcdHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdHMucG9zdCh7XG5cdFx0XHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0dGV4dDogY29udGVudCxcblx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdHRva2VuOiBlZGl0VG9rZW4sXG5cdFx0XHRcdC4uLih0aW1lc3RhbXAgPyB7YmFzZXRpbWVzdGFtcDogdGltZXN0YW1wfSA6IHt9KSxcblx0XHRcdFx0Li4uY29uZmlnLFxuXHRcdFx0XHQuLi5hZGRpdGlvbmFsQ29uZmlnLFxuXHRcdFx0fSk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRMb2cuZXJyb3IoJ25ldHdvcmtfZWRpdF9lcnJvcicpO1xuXHRcdH1cblx0XHRpZiAocmVzcG9uc2UuZWRpdCkge1xuXHRcdFx0aWYgKHJlc3BvbnNlLmVkaXQucmVzdWx0ID09PSAnU3VjY2VzcycpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAocmVzcG9uc2UuZWRpdC5jb2RlKSB7XG5cdFx0XHRcdC8vIEFidXNlIEZpbHRlclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFxuICAgICAgICAgICAgICAgICAgICAgICAgJHtpMThuLnRyYW5zbGF0ZSgnaGl0X2FidXNlZmlsdGVyJyl9OiR7cmVzcG9uc2UuZWRpdC5pbmZvLnJlcGxhY2UoJy9IaXQgQWJ1c2VGaWx0ZXI6IC9pZycsICcnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJmb250LXNpemU6IHNtYWxsZXI7XCI+JHtyZXNwb25zZS5lZGl0Lndhcm5pbmd9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIGApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0TG9nLmVycm9yKCd1bmtub3duX2VkaXRfZXJyb3InKTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHJlc3BvbnNlLmVycm9yICYmIHJlc3BvbnNlLmVycm9yLmNvZGUpIHtcblx0XHRcdExvZy5lcnJvcihyZXNwb25zZS5lcnJvci5jb2RlKTtcblx0XHR9IGVsc2UgaWYgKHJlc3BvbnNlLmNvZGUpIHtcblx0XHRcdExvZy5lcnJvcihyZXNwb25zZS5jb2RlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0TG9nLmVycm9yKCd1bmtub3duX2VkaXRfZXJyb3InKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICog6I635b6X5oyH5a6a6aG16Z2i5pyA5paw5L+u6K6i57yW5Y+3XG5cdCAqIEdldCBsYXRlc3QgcmV2aXNpb25JZCBvZiBhIHBhZ2UuXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gdGl0bGVcblx0ICovXG5cdGFzeW5jIGdldExhdGVzdFJldmlzaW9uSWRGb3JQYWdlKHRpdGxlKSB7XG5cdFx0Y29uc3Qge3JldmlzaW9uSWR9ID0gYXdhaXQgdGhpcy5nZXRQYWdlSW5mbyh7dGl0bGV9KTtcblx0XHRyZXR1cm4gcmV2aXNpb25JZDtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgV2lraSgpO1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgV2lraSBmcm9tICcuLi9zZXJ2aWNlcy93aWtpJztcbmltcG9ydCBMb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztcblxuY2xhc3MgUGFnZSB7XG5cdHRpbWVzdGFtcDtcblx0ZWRpdFRva2VuO1xuXHR0aXRsZTtcblx0cmV2aXNpb25JZDtcblxuXHRpbml0ZWQgPSBmYWxzZTtcblx0aXNOZXdQYWdlID0gZmFsc2U7XG5cblx0c2VjdGlvbkNhY2hlID0ge307XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7cGFyYW1zLnRpdGxlfSDpobXpnaLmoIfpopggUGFnZSBOYW1lIChvcHRpb25hbClcblx0ICogQHBhcmFtIHtwYXJhbXMucmV2aXNpb25JZH0g6aG16Z2i5L+u6K6i57yW5Y+3IFJldmlzaW9uIElkXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcih7dGl0bGUsIHJldmlzaW9uSWR9KSB7XG5cdFx0dGhpcy50aXRsZSA9IHRpdGxlO1xuXHRcdHRoaXMucmV2aXNpb25JZCA9IHJldmlzaW9uSWQ7XG5cdFx0dGhpcy5pc05ld1BhZ2UgPSAhcmV2aXNpb25JZDtcblx0fVxuXG5cdC8qKlxuXHQgKiDliJ3lp4vljJYg6I635b6X6aG16Z2iRWRpdFRva2Vu5ZKM5Yid5aeLVGltZVN0YW1wXG5cdCAqIEluaXRpYWxpemF0aW9uLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZWRpdFRva2VuIChvcHRpb25hbCkg5aaC5p6c5o+Q5L6b5LqGZWRpdFRva2Vu77yM5bCG5LiN5Lya5YaN6I635Y+WXG5cdCAqL1xuXHRhc3luYyBpbml0KHtlZGl0VG9rZW4gPSAnJ30gPSB7fSkge1xuXHRcdGNvbnN0IHByb21pc2VBcnIgPSBbdGhpcy5nZXRUaW1lc3RhbXAoKV07XG5cdFx0aWYgKCFlZGl0VG9rZW4pIHtcblx0XHRcdHByb21pc2VBcnIucHVzaCh0aGlzLmdldEVkaXRUb2tlbigpKTtcblx0XHR9XG5cdFx0YXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZUFycik7XG5cdFx0dGhpcy5pbml0ZWQgPSB0cnVlO1xuXHRcdExvZy5pbmZvKGBQYWdlIGluaXRpYWxpemF0aW9uIGZvciAke3RoaXMudGl0bGV9IyR7dGhpcy5yZXZpc2lvbklkfSBmaW5pc2hlZC5gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiDojrflvpcgRWRpdFRva2VuXG5cdCAqIEdldCBFZGl0VG9rZW5cblx0ICovXG5cdGFzeW5jIGdldEVkaXRUb2tlbigpIHtcblx0XHRhd2FpdCBtdy5sb2FkZXIudXNpbmcoJ21lZGlhd2lraS51c2VyJyk7XG5cdFx0aWYgKG13LnVzZXIudG9rZW5zLmdldCgnY3NyZlRva2VuJykgJiYgbXcudXNlci50b2tlbnMuZ2V0KCdjc3JmVG9rZW4nKSAhPT0gJytcXFxcJykge1xuXHRcdFx0Ly8g5aaC5p6cIE1lZGlhV2lraSBKYXZhU2NyaXB0IEFQSSDlj6/ku6Xnm7TmjqXojrflvpcgRWRpdFRva2VuIOWImeebtOaOpei/lOWbnlxuXHRcdFx0Ly8gUmV0dXJuIEVkaXRUb2tlbiByZXRyaWV2ZWQgZnJvbSBNZWRpYVdpa2kgSmF2YVNjcmlwdCBBUEkgaWYgYWNjZXNzaWJsZVxuXHRcdFx0dGhpcy5lZGl0VG9rZW4gPSBtdy51c2VyLnRva2Vucy5nZXQoJ2NzcmZUb2tlbicpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHQvLyDku45BUEnojrflvpdFZGl0VG9rZW5cblx0XHQvLyBHZXQgRWRpdFRva2VuIGZyb20gTWVkaWFXaWtpIEFQSVxuXHRcdHRoaXMuZWRpdFRva2VuID0gYXdhaXQgV2lraS5nZXRFZGl0VG9rZW4oKTtcblx0fVxuXG5cdC8qKlxuXHQgKiDojrflvpfnvJbovpHln7rlh4bml7bpl7TmiLNcblx0ICogR2V0IEJhc2UgVGltZXN0YW1wXG5cdCAqL1xuXHRhc3luYyBnZXRUaW1lc3RhbXAoKSB7XG5cdFx0Y29uc3Qge3RpbWVzdGFtcCwgcmV2aXNpb25JZH0gPSBhd2FpdCBXaWtpLmdldFBhZ2VJbmZvKHtcblx0XHRcdHJldmlzaW9uSWQ6IHRoaXMucmV2aXNpb25JZCxcblx0XHRcdHRpdGxlOiB0aGlzLnRpdGxlLFxuXHRcdH0pO1xuXHRcdHRoaXMudGltZXN0YW1wID0gdGltZXN0YW1wO1xuXHRcdGlmIChyZXZpc2lvbklkKSB7XG5cdFx0XHR0aGlzLnJldmlzaW9uSWQgPSByZXZpc2lvbklkO1xuXHRcdFx0dGhpcy5pc05ld1BhZ2UgPSBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICog6I635b6XIFdpa2lUZXh0XG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5zZWN0aW9uXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcucmV2aXNpb25JZFxuXHQgKi9cblx0YXN5bmMgZ2V0V2lraVRleHQoe3NlY3Rpb24gPSAnJ30gPSB7fSkge1xuXHRcdGNvbnN0IHNlYyA9IHNlY3Rpb24gPT09IC0xID8gJycgOiBzZWN0aW9uO1xuXHRcdGlmICh0aGlzLnNlY3Rpb25DYWNoZVtzZWNdKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zZWN0aW9uQ2FjaGVbc2VjXTtcblx0XHR9XG5cdFx0Y29uc3Qgd2lraVRleHQgPSBhd2FpdCBXaWtpLmdldFdpa2lUZXh0KHtcblx0XHRcdHNlY3Rpb246IHNlYyxcblx0XHRcdHJldmlzaW9uSWQ6IHRoaXMucmV2aXNpb25JZCxcblx0XHR9KTtcblx0XHRMb2cuaW5mbyhgV2lraXRleHQgb2YgJHt0aGlzLnRpdGxlfSMke3NlY3Rpb259IGZldGNoZWQuYCk7XG5cdFx0dGhpcy5zZWN0aW9uQ2FjaGVbc2VjXSA9IHdpa2lUZXh0O1xuXHRcdHJldHVybiB3aWtpVGV4dDtcblx0fVxuXG5cdC8qKlxuXHQgKiDop6PmnpAgV2lraVRleHRcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHdpa2l0ZXh0XG5cdCAqL1xuXHRhc3luYyBwYXJzZVdpa2lUZXh0KHdpa2l0ZXh0KSB7XG5cdFx0cmV0dXJuIFdpa2kucGFyc2VXaWtpVGV4dCh3aWtpdGV4dCwgdGhpcy50aXRsZSk7XG5cdH1cblxuXHQvKipcblx0ICog57yW6L6R6aG16Z2iXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gY29uZmlnXG5cdCAqIEBwYXJhbSBwYXlsb2FkXG5cdCAqL1xuXHRhc3luYyBlZGl0KHBheWxvYWQpIHtcblx0XHRpZiAoIXRoaXMuZWRpdFRva2VuKSB7XG5cdFx0XHRMb2cuZXJyb3IoJ2ZhaWxfdG9fZ2V0X2VkaXR0b2tlbicpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoIXRoaXMudGltZXN0YW1wICYmICF0aGlzLmlzTmV3UGFnZSkge1xuXHRcdFx0Ly8g5aaC5p6c5LiN5piv5Yib5bu65paw6aG16Z2iIOWPiOayoeacieWfuuWHhuaXtumXtOaIsyDliJnmnInlj6/og73pgKDmiJDnvJbovpHopobnm5Yg5L+d6Zmp6LW36KeB55u05o6l5ouS57udXG5cdFx0XHRMb2cuZXJyb3IoJ2ZhaWxfdG9fZ2V0X3RpbWVzdGFtcCcpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRyZXR1cm4gV2lraS5lZGl0KHtcblx0XHRcdHRpdGxlOiB0aGlzLnRpdGxlLFxuXHRcdFx0ZWRpdFRva2VuOiB0aGlzLmVkaXRUb2tlbixcblx0XHRcdC4uLih0aGlzLnRpbWVzdGFtcCA/IHt0aW1lc3RhbXA6IHRoaXMudGltZXN0YW1wfSA6IHt9KSxcblx0XHRcdC4uLnBheWxvYWQsXG5cdFx0XHRhZGRpdGlvbmFsQ29uZmlnOiB7XG5cdFx0XHRcdC4uLih0aGlzLmlzTmV3UGFnZSA/IHtjcmVhdGVvbmx5OiB0aGlzLmlzTmV3UGFnZX0gOiB7fSksXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmNsYXNzIE5vdGlmaWNhdGlvbiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuaW5pdCgpO1xuXHR9XG5cdGluaXQoKSB7XG5cdFx0JCgnYm9keScpLmFwcGVuZCgnPGRpdiBpZD1cIk1vZU5vdGlmaWNhdGlvblwiPjwvZGl2PicpO1xuXHR9XG5cdGRpc3BsYXkodGV4dCA9ICfllrV+JywgdHlwZSA9ICdzdWNjZXNzJywgY2FsbGJhY2sgPSAoKSA9PiB7fSkge1xuXHRcdCQoJyNNb2VOb3RpZmljYXRpb24nKS5hcHBlbmQoXG5cdFx0XHQkKCc8ZGl2PicpXG5cdFx0XHRcdC5hZGRDbGFzcygnTW9lTm90aWZpY2F0aW9uLW5vdGljZScpXG5cdFx0XHRcdC5hZGRDbGFzcyhgTW9lTm90aWZpY2F0aW9uLW5vdGljZS0ke3R5cGV9YClcblx0XHRcdFx0LmFwcGVuZChgPHNwYW4+JHt0ZXh0fTwvc3Bhbj5gKVxuXHRcdCk7XG5cdFx0JCgnI01vZU5vdGlmaWNhdGlvbicpLmZpbmQoJy5Nb2VOb3RpZmljYXRpb24tbm90aWNlJykubGFzdCgpLmZhZGVJbigzMDApO1xuXHRcdHRoaXMuYmluZCgpO1xuXHRcdHRoaXMuY2xlYXIoKTtcblx0XHRjYWxsYmFjaygkKCcjTW9lTm90aWZpY2F0aW9uJykuZmluZCgnLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2UnKS5sYXN0KCkpO1xuXHR9XG5cdGJpbmQoKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0JCgnLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2UnKS5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0c2VsZi5zbGlkZUxlZnQoJCh0aGlzKSk7XG5cdFx0fSk7XG5cdH1cblx0c3VjY2Vzcyh0ZXh0LCBjYWxsYmFjaykge1xuXHRcdHRoaXMuZGlzcGxheSh0ZXh0LCAnc3VjY2VzcycsIGNhbGxiYWNrKTtcblx0fVxuXHR3YXJuaW5nKHRleHQsIGNhbGxiYWNrKSB7XG5cdFx0dGhpcy5kaXNwbGF5KHRleHQsICd3YXJuaW5nJywgY2FsbGJhY2spO1xuXHR9XG5cdGVycm9yKHRleHQsIGNhbGxiYWNrKSB7XG5cdFx0dGhpcy5kaXNwbGF5KHRleHQsICdlcnJvcicsIGNhbGxiYWNrKTtcblx0fVxuXHRjbGVhcigpIHtcblx0XHRpZiAoJCgnLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2UnKS5sZW5ndGggPj0gMTApIHtcblx0XHRcdCQoJyNNb2VOb3RpZmljYXRpb24nKVxuXHRcdFx0XHQuY2hpbGRyZW4oKVxuXHRcdFx0XHQuZmlyc3QoKVxuXHRcdFx0XHQuZmFkZU91dCgxNTAsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdHNldFRpbWVvdXQodGhpcy5jbGVhciwgMzAwKTtcblx0XHR9XG5cdH1cblx0ZW1wdHkoZikge1xuXHRcdCQoJy5Nb2VOb3RpZmljYXRpb24tbm90aWNlJykuZWFjaChmdW5jdGlvbiAoaSkge1xuXHRcdFx0aWYgKHR5cGVvZiBmID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGNvbnN0IGVsZSA9ICQodGhpcyk7XG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdGYoZWxlKTtcblx0XHRcdFx0fSwgMjAwICogaSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0LmRlbGF5KGkgKiAyMDApXG5cdFx0XHRcdFx0LmZhZGVPdXQoJ2Zhc3QnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cdHNsaWRlTGVmdChlbGUsIHNwZWVkKSB7XG5cdFx0ZWxlLmNzcygncG9zaXRpb24nLCAncmVsYXRpdmUnKTtcblx0XHRlbGUuYW5pbWF0ZShcblx0XHRcdHtcblx0XHRcdFx0bGVmdDogJy0yMDAlJyxcblx0XHRcdH0sXG5cdFx0XHRzcGVlZCB8fCAxNTAsXG5cdFx0XHRmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdCQodGhpcykuZmFkZU91dCgnZmFzdCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBOb3RpZmljYXRpb24oKTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuY29uc3Qgc2xlZXAgPSAodGltZSkgPT4ge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRyZXR1cm4gc2V0VGltZW91dChyZXNvbHZlLCB0aW1lKTtcblx0fSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgc2xlZXA7XG4iLCAiLyoqXG4gKiDop6PmnpBVUkzlj4LmlbDliJfooahcbiAqIFBhcnNlIFVSTCBxdWVyeS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ319IHVybFxuICogQHBhcmFtIHVybFxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUXVlcnkodXJsKSB7XG5cdGNvbnN0IHJlZyA9IC8oKFtePyY9XSspKD86PShbXj8mPV0qKSkqKS9nO1xuXHRjb25zdCBwYXJhbXMgPSB7fTtcblx0bGV0IG1hdGNoO1xuXHR3aGlsZSAoKG1hdGNoID0gcmVnLmV4ZWModXJsKSkpIHtcblx0XHR0cnkge1xuXHRcdFx0cGFyYW1zW21hdGNoWzJdXSA9IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRwYXJhbXNbbWF0Y2hbMl1dID0gbWF0Y2hbM107XG5cdFx0fVxuXHR9XG5cdHJldHVybiBwYXJhbXM7XG59XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCBOb3RpZmljYXRpb24gZnJvbSAnLi9ub3RpZmljYXRpb24nO1xuaW1wb3J0IGkxOG4gZnJvbSAnLi4vdXRpbHMvaTE4bic7XG5pbXBvcnQgTG9nIGZyb20gJy4uL3V0aWxzL2xvZyc7XG5pbXBvcnQgc2xlZXAgZnJvbSAnLi4vdXRpbHMvc2xlZXAnO1xuaW1wb3J0IHtwYXJzZVF1ZXJ5fSBmcm9tICcuLi91dGlscy9oZWxwZXJzJztcblxuY2xhc3MgVUkge1xuXHRxdWlja0VkaXRQYW5lbFZpc2libGUgPSBmYWxzZTtcblx0c2Nyb2xsVG9wID0gMDtcblxuXHQvKipcblx0ICog5Yib5bu65bGF5Lit5a+56K+d5qGGXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSDnqpflj6PmoIfpophcblx0ICogQHBhcmFtIHtzdHJpbmcgfCBKUXVlcnk8SFRNTEVsZW1lbnQ+fSBjb250ZW50IOWGheWuuVxuXHQgKiBAcGFyYW0geyp9IHdpZHRoIOWuveW6plxuXHQgKiBAcGFyYW0geyp9IGNhbGxiYWNrIOWbnuiwg+WHveaVsFxuXHQgKi9cblx0Y3JlYXRlRGlhbG9nQm94KHRpdGxlID0gJ1dpa2lwbHVzJywgY29udGVudCA9ICcnLCB3aWR0aCA9IDYwMCwgY2FsbGJhY2sgPSAoKSA9PiB7fSkge1xuXHRcdGlmICgkKCcuV2lraXBsdXMtSW50ZXJCb3gnKS5sZW5ndGggPiAwKSB7XG5cdFx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gnKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0JCh0aGlzKS5yZW1vdmUoKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRjb25zdCBjbGllbnRXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXHRcdGNvbnN0IGNsaWVudEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblx0XHRjb25zdCBkaWFsb2dXaWR0aCA9IE1hdGgubWluKGNsaWVudFdpZHRoLCB3aWR0aCk7XG5cdFx0Y29uc3QgZGlhbG9nQm94ID0gJCgnPGRpdj4nKVxuXHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveCcpXG5cdFx0XHQuY3NzKHtcblx0XHRcdFx0J21hcmdpbi1sZWZ0JzogY2xpZW50V2lkdGggLyAyIC0gZGlhbG9nV2lkdGggLyAyLFxuXHRcdFx0XHR0b3A6ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpICsgY2xpZW50SGVpZ2h0ICogMC4yLFxuXHRcdFx0XHRkaXNwbGF5OiAnbm9uZScsXG5cdFx0XHR9KVxuXHRcdFx0LmFwcGVuZCgkKCc8ZGl2PicpLmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveC1IZWFkZXInKS5odG1sKHRpdGxlKSlcblx0XHRcdC5hcHBlbmQoJCgnPGRpdj4nKS5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtQ29udGVudCcpLmFwcGVuZChjb250ZW50KSlcblx0XHRcdC5hcHBlbmQoJCgnPHNwYW4+JykudGV4dCgnw5cnKS5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtQ2xvc2UnKSk7XG5cdFx0JCgnYm9keScpLmFwcGVuZChkaWFsb2dCb3gpO1xuXHRcdCQoJy5XaWtpcGx1cy1JbnRlckJveCcpLndpZHRoKGRpYWxvZ1dpZHRoKTtcblx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gtQ2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHQkKHRoaXMpXG5cdFx0XHRcdC5wYXJlbnQoKVxuXHRcdFx0XHQuZmFkZU91dCgnZmFzdCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCAod2luZG93Lm9uYmVmb3JldW5sb2FkID0gdW5kZWZpbmVkKSk7IC8vIOWPlua2iOmhtemdouWFs+mXreehruiupFxuXHRcdFx0XHRcdCQodGhpcykucmVtb3ZlKCk7XG5cdFx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdC8v5ouW5puzXG5cdFx0Y29uc3QgYmluZERyYWdnaW5nID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcblx0XHRcdGVsZW1lbnQubW91c2Vkb3duKChlKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGJhc2VYID0gZS5jbGllbnRYO1xuXHRcdFx0XHRjb25zdCBiYXNlWSA9IGUuY2xpZW50WTtcblx0XHRcdFx0Y29uc3QgYmFzZU9mZnNldFggPSBlbGVtZW50LnBhcmVudCgpLm9mZnNldCgpLmxlZnQ7XG5cdFx0XHRcdGNvbnN0IGJhc2VPZmZzZXRZID0gZWxlbWVudC5wYXJlbnQoKS5vZmZzZXQoKS50b3A7XG5cdFx0XHRcdCQoZG9jdW1lbnQpLm9uKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xuXHRcdFx0XHRcdGVsZW1lbnQucGFyZW50KCkuY3NzKHtcblx0XHRcdFx0XHRcdCdtYXJnaW4tbGVmdCc6IGJhc2VPZmZzZXRYICsgZS5jbGllbnRYIC0gYmFzZVgsXG5cdFx0XHRcdFx0XHR0b3A6IGJhc2VPZmZzZXRZICsgZS5jbGllbnRZIC0gYmFzZVksXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQkKGRvY3VtZW50KS5vbignbW91c2V1cCcsICgpID0+IHtcblx0XHRcdFx0XHRlbGVtZW50LnVuYmluZCgnbW91c2Vkb3duJyk7XG5cdFx0XHRcdFx0JChkb2N1bWVudCkub2ZmKCdtb3VzZW1vdmUnKTtcblx0XHRcdFx0XHQkKGRvY3VtZW50KS5vZmYoJ21vdXNldXAnKTtcblx0XHRcdFx0XHRiaW5kRHJhZ2dpbmcoZWxlbWVudCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fTtcblx0XHRiaW5kRHJhZ2dpbmcoJCgnLldpa2lwbHVzLUludGVyQm94LUhlYWRlcicpKTtcblx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gnKS5mYWRlSW4oNTAwKTtcblx0XHRjYWxsYmFjaygpO1xuXHRcdHJldHVybiBkaWFsb2dCb3g7XG5cdH1cblxuXHQvKipcblx0ICog5Zyo5pCc57Si5qGG5bem5L6n44CM5pu05aSa44CN6I+c5Y2V5YaF5re75Yqg5oyJ6ZKuXG5cdCAqIEFkZCBhIGJ1dHRvbiBpbiBcIk1vcmVcIiBtZW51IChsZWZ0IG9mIHRoZSBzZWFyY2ggYmFyKVxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCDmjInpkq7lkI0gQnV0dG9uIHRleHRcblx0ICogQHBhcmFtIHtzdHJpbmd9IGlkIOaMiemSrmlkIEJ1dHRvbiBpZFxuXHQgKiBAcmV0dXJuIHtKUXVlcnk8SFRNTEVsZW1lbnQ+fSBidXR0b25cblx0ICovXG5cdGFkZEZ1bmN0aW9uQnV0dG9uKHRleHQsIGlkKSB7XG5cdFx0bGV0IGJ1dHRvbjtcblx0XHRzd2l0Y2ggKENvbnN0YW50cy5za2luKSB7XG5cdFx0XHRjYXNlICdtaW5lcnZhJzpcblx0XHRcdFx0YnV0dG9uID0gJCgnPGxpPicpXG5cdFx0XHRcdFx0LmF0dHIoJ2lkJywgaWQpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCd0b2dnbGUtbGlzdC1pdGVtJylcblx0XHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdFx0JCgnPGE+Jylcblx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdtdy11aS1pY29uIG13LXVpLWljb24tYmVmb3JlIHRvZ2dsZS1saXN0LWl0ZW1fX2FuY2hvcicpXG5cdFx0XHRcdFx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdFx0XHRcdFx0JCgnPHNwYW4+Jylcblx0XHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdocmVmJywgJ2phdmFzY3JpcHQ6dm9pZCgwKTsnKVxuXHRcdFx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCd0b2dnbGUtbGlzdC1pdGVtX19sYWJlbCcpXG5cdFx0XHRcdFx0XHRcdFx0XHQudGV4dCh0ZXh0KVxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ21vZXNraW4nOlxuXHRcdFx0XHRidXR0b24gPSAkKCc8bGk+Jylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLU1vcmUtRnVuY3Rpb24tQnV0dG9uJylcblx0XHRcdFx0XHQuYXR0cignaWQnLCBpZClcblx0XHRcdFx0XHQuYXBwZW5kKCQoJzxhPicpLmF0dHIoJ2hyZWYnLCAnamF2YXNjcmlwdDp2b2lkKDApOycpLnRleHQodGV4dCkpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0YnV0dG9uID0gJCgnPGxpPicpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdtdy1saXN0LWl0ZW0nKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygndmVjdG9yLXRhYi1ub2ljb24nKVxuXHRcdFx0XHRcdC5hdHRyKCdpZCcsIGlkKVxuXHRcdFx0XHRcdC5hcHBlbmQoJCgnPGE+JykuYXR0cignaHJlZicsICdqYXZhc2NyaXB0OnZvaWQoMCk7JykudGV4dCh0ZXh0KSk7XG5cdFx0fVxuXHRcdGlmIChDb25zdGFudHMuc2tpbiA9PT0gJ21pbmVydmEnICYmICQoJyNwLXRiJykubGVuZ3RoID4gMCkge1xuXHRcdFx0JCgnI3AtdGInKS5hcHBlbmQoYnV0dG9uKTtcblx0XHRcdHJldHVybiAkKGAjJHtpZH1gKTtcblx0XHR9IGVsc2UgaWYgKENvbnN0YW50cy5za2luID09PSAnbW9lc2tpbicpIHtcblx0XHRcdCQoJy5tb3JlLWFjdGlvbnMtbGlzdCcpLmZpcnN0KCkuYXBwZW5kKGJ1dHRvbik7XG5cdFx0XHRyZXR1cm4gJChgIyR7aWR9YCk7XG5cdFx0fSBlbHNlIGlmICgkKCcjcC1jYWN0aW9ucycpLmxlbmd0aCA+IDApIHtcblx0XHRcdCQoJyNwLWNhY3Rpb25zIHVsJykuYXBwZW5kKGJ1dHRvbik7XG5cdFx0XHRyZXR1cm4gJChgIyR7aWR9YCk7XG5cdFx0fVxuXHRcdExvZy5pbmZvKGkxOG4udHJhbnNsYXRlKCdjYW50X2FkZF9mdW5jYnRuJykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIOaPkuWFpeW/q+mAn+mHjeWumuWQkeaMiemSrlxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IG9uQ2xpY2tcblx0ICovXG5cdGluc2VydFNpbXBsZVJlZGlyZWN0QnV0dG9uKG9uQ2xpY2sgPSAoKSA9PiB7fSkge1xuXHRcdGNvbnN0IGJ1dHRvbiA9IHRoaXMuYWRkRnVuY3Rpb25CdXR0b24oaTE4bi50cmFuc2xhdGUoJ3JlZGlyZWN0X2Zyb20nKSwgJ1dpa2lwbHVzLVNSLUludHJvJyk7XG5cdFx0aWYgKGJ1dHRvbikge1xuXHRcdFx0YnV0dG9uLm9uKCdjbGljaycsIG9uQ2xpY2spO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiDmj5LlhaXorr7nva7pnaLmnb/mjInpkq5cblx0ICpcblx0ICogQHBhcmFtIHsqfSBvbkNsaWNrXG5cdCAqL1xuXHRpbnNlcnRTZXR0aW5nc1BhbmVsQnV0dG9uKG9uQ2xpY2sgPSAoKSA9PiB7fSkge1xuXHRcdGNvbnN0IGJ1dHRvbiA9IHRoaXMuYWRkRnVuY3Rpb25CdXR0b24oaTE4bi50cmFuc2xhdGUoJ3dpa2lwbHVzX3NldHRpbmdzJyksICdXaWtpcGx1cy1TZXR0aW5ncy1JbnRybycpO1xuXHRcdGlmIChidXR0b24pIHtcblx0XHRcdGJ1dHRvbi5vbignY2xpY2snLCBvbkNsaWNrKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICog5o+S5YWl6aG26YOo5b+r6YCf57yW6L6R5oyJ6ZKuXG5cdCAqIEluc2VydCBRdWlja0VkaXQgYnV0dG9uIGJlc2lkZXMgcGFnZSBlZGl0IGJ1dHRvbi5cblx0ICpcblx0ICogQHBhcmFtIG9uQ2xpY2tcblx0ICovXG5cdGluc2VydFRvcFF1aWNrRWRpdEVudHJ5KG9uQ2xpY2spIHtcblx0XHRjb25zdCB0b3BCdG4gPSAkKCc8bGk+JykuYXR0cignaWQnLCAnV2lraXBsdXMtRWRpdC1Ub3BCdG4nKS5hdHRyKCdjbGFzcycsICdtdy1saXN0LWl0ZW0nKTtcblx0XHRjb25zdCB0b3BCdG5MaW5rID0gJCgnPGE+Jylcblx0XHRcdC5hdHRyKCdocmVmJywgJ2phdmFzY3JpcHQ6dm9pZCgwKScpXG5cdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZSgncXVpY2tlZGl0X3RvcGJ0bicpfWApO1xuXHRcdHRvcEJ0bi5hcHBlbmQodG9wQnRuTGluayk7XG5cdFx0c3dpdGNoIChDb25zdGFudHMuc2tpbikge1xuXHRcdFx0Y2FzZSAnbWluZXJ2YSc6XG5cdFx0XHRcdHRvcEJ0bi5jc3MoeydhbGlnbi1pdGVtcyc6ICdjZW50ZXInLCBkaXNwbGF5OiAnZmxleCd9KTtcblx0XHRcdFx0dG9wQnRuLmZpbmQoJ3NwYW4nKS5hZGRDbGFzcygncGFnZS1hY3Rpb25zLW1lbnVfX2xpc3QtaXRlbScpO1xuXHRcdFx0XHR0b3BCdG5cblx0XHRcdFx0XHQuZmluZCgnYScpXG5cdFx0XHRcdFx0LmFkZENsYXNzKFxuXHRcdFx0XHRcdFx0J213LXVpLWljb24gbXctdWktaWNvbi1lbGVtZW50IG13LXVpLWljb24td2lraW1lZGlhLWVkaXQtYmFzZTIwIG13LXVpLWljb24td2l0aC1sYWJlbC1kZXNrdG9wJ1xuXHRcdFx0XHRcdClcblx0XHRcdFx0XHQuY3NzKCd2ZXJ0aWNhbC1hbGlnbicsICdtaWRkbGUnKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ3ZlY3Rvci0yMDIyJzpcblx0XHRcdFx0dG9wQnRuLmFkZENsYXNzKCd2ZWN0b3ItdGFiLW5vaWNvbicpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAndmVjdG9yJzpcblx0XHRcdFx0dG9wQnRuLmFwcGVuZCgkKCc8c3Bhbj4nKS5hcHBlbmQodG9wQnRuTGluaykpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHR9XG5cdFx0JCh0b3BCdG4pLm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdG9uQ2xpY2soe1xuXHRcdFx0XHRzZWN0aW9uTnVtYmVyOiAtMSxcblx0XHRcdFx0dGFyZ2V0UGFnZU5hbWU6IENvbnN0YW50cy5jdXJyZW50UGFnZU5hbWUsXG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRpZiAoJCgnI2NhLWVkaXQnKS5sZW5ndGggPiAwICYmICQoJyNXaWtpcGx1cy1FZGl0LVRvcEJ0bicpLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0Q29uc3RhbnRzLnNraW4gPT09ICdtaW5lcnZhJyA/ICQoJyNjYS1lZGl0JykucGFyZW50KCkuYWZ0ZXIodG9wQnRuKSA6ICQoJyNjYS1lZGl0JykuYWZ0ZXIodG9wQnRuKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICog5o+S5YWl5q616JC95b+r6YCf57yW6L6R5oyJ6ZKuXG5cdCAqIEluc2VydCBRdWlja0VkaXQgYnV0dG9ucyBmb3IgZWFjaCBzZWN0aW9uLlxuXHQgKlxuXHQgKiBAcGFyYW0gb25DbGlja1xuXHQgKi9cblx0aW5zZXJ0U2VjdGlvblF1aWNrRWRpdEVudHJpZXMob25DbGljayA9ICgpID0+IHt9KSB7XG5cdFx0Y29uc3Qgc2VjdGlvbkJ0biA9XG5cdFx0XHRDb25zdGFudHMuc2tpbiA9PT0gJ21pbmVydmEnXG5cdFx0XHRcdD8gJCgnPHNwYW4+JykuYXBwZW5kKFxuXHRcdFx0XHRcdFx0JCgnPGE+Jylcblx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKFxuXHRcdFx0XHRcdFx0XHRcdCdXaWtpcGx1cy1FZGl0LVNlY3Rpb25CdG4gbXctdWktaWNvbiBtdy11aS1pY29uLWVsZW1lbnQgbXctdWktaWNvbi13aWtpbWVkaWEtZWRpdC1iYXNlMjAgZWRpdC1wYWdlIG13LXVpLWljb24tZmx1c2gtcmlnaHQnXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0LmNzcygnbWFyZ2luLWxlZnQnLCAnMC43NWVtJylcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2hyZWYnLCAnamF2YXNjcmlwdDp2b2lkKDApJylcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ3RpdGxlJywgaTE4bi50cmFuc2xhdGUoJ3F1aWNrZWRpdF9zZWN0aW9uYnRuJykpXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQ6ICQoJzxzcGFuPicpXG5cdFx0XHRcdFx0XHQuYXBwZW5kKCQoJzxzcGFuPicpLmFkZENsYXNzKCdtdy1lZGl0c2VjdGlvbi1kaXZpZGVyJykudGV4dCgnIHwgJykpXG5cdFx0XHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdFx0XHQkKCc8YT4nKVxuXHRcdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtRWRpdC1TZWN0aW9uQnRuJylcblx0XHRcdFx0XHRcdFx0XHQuYXR0cignaHJlZicsICdqYXZhc2NyaXB0OnZvaWQoMCknKVxuXHRcdFx0XHRcdFx0XHRcdC50ZXh0KGkxOG4udHJhbnNsYXRlKCdxdWlja2VkaXRfc2VjdGlvbmJ0bicpKVxuXHRcdFx0XHRcdFx0KTtcblx0XHQkKCcubXctZWRpdHNlY3Rpb24nKS5lYWNoKGZ1bmN0aW9uIChpKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCBlZGl0VVJMID0gJCh0aGlzKS5maW5kKFwiYVtocmVmKj0nYWN0aW9uPWVkaXQnXVwiKS5maXJzdCgpLmF0dHIoJ2hyZWYnKTtcblx0XHRcdFx0Y29uc3Qgc2VjdGlvbk51bWJlciA9IGVkaXRVUkxcblx0XHRcdFx0XHQubWF0Y2goLyZbdmVdKnNlY3Rpb25cXD0oW14mXSspLylbMV0gLy8gYHZlYCBmb3IgdmlzdWFsIGVkaXRvclxuXHRcdFx0XHRcdC5yZXBsYWNlKC9ULS9naSwgJycpOyAvLyBlbWJlZGRlZCBwYWdlcyB1c2UgVC1zZXJpZXMgc2VjdGlvbiBudW1iZXJcblx0XHRcdFx0Y29uc3Qgc2VjdGlvblRhcmdldE5hbWUgPSBkZWNvZGVVUklDb21wb25lbnQoZWRpdFVSTC5tYXRjaCgvdGl0bGU9KC4rPykmLylbMV0pO1xuXHRcdFx0XHRjb25zdCBjbG9uZU5vZGUgPSAkKHRoaXMpLnByZXYoKS5jbG9uZSgpO1xuXHRcdFx0XHRjbG9uZU5vZGUuZmluZCgnLm13LWhlYWRsaW5lLW51bWJlcicpLnJlbW92ZSgpO1xuXHRcdFx0XHRjb25zdCBzZWN0aW9uTmFtZSA9IGNsb25lTm9kZS50ZXh0KCkudHJpbSgpO1xuXHRcdFx0XHRjb25zdCBfc2VjdGlvbkJ0biA9IHNlY3Rpb25CdG4uY2xvbmUoKTtcblx0XHRcdFx0X3NlY3Rpb25CdG4uZmluZCgnLldpa2lwbHVzLUVkaXQtU2VjdGlvbkJ0bicpLm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0XHRvbkNsaWNrKHtcblx0XHRcdFx0XHRcdHNlY3Rpb25OdW1iZXIsXG5cdFx0XHRcdFx0XHRzZWN0aW9uTmFtZSxcblx0XHRcdFx0XHRcdHRhcmdldFBhZ2VOYW1lOiBzZWN0aW9uVGFyZ2V0TmFtZSxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdENvbnN0YW50cy5za2luID09PSAnbWluZXJ2YSdcblx0XHRcdFx0XHQ/ICQodGhpcykuYXBwZW5kKF9zZWN0aW9uQnRuKVxuXHRcdFx0XHRcdDogJCh0aGlzKS5maW5kKCcubXctZWRpdHNlY3Rpb24tYnJhY2tldCcpLmxhc3QoKS5iZWZvcmUoX3NlY3Rpb25CdG4pO1xuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdExvZy5lcnJvcignZmFpbF90b19pbml0X3F1aWNrZWRpdCcpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIOaPkuWFpeS7u+aEj+mTvuaOpee8lui+keWFpeWPo1xuXHQgKlxuXHQgKiBAcGFyYW0geyp9IG9uQ2xpY2tcblx0ICovXG5cdGluc2VydExpbmtFZGl0RW50cmllcyhvbkNsaWNrID0gKCkgPT4ge30pIHtcblx0XHQkKCcjbXctY29udGVudC10ZXh0IGEuZXh0ZXJuYWwnKS5lYWNoKGZ1bmN0aW9uIChpKSB7XG5cdFx0XHRjb25zdCB1cmwgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcblx0XHRcdGNvbnN0IHBhcmFtcyA9IHBhcnNlUXVlcnkodXJsKTtcblx0XHRcdGlmIChwYXJhbXMuYWN0aW9uID09PSAnZWRpdCcgJiYgcGFyYW1zLnRpdGxlICE9PSB1bmRlZmluZWQgJiYgcGFyYW1zLnNlY3Rpb24gIT09ICduZXcnKSB7XG5cdFx0XHRcdCQodGhpcykuYWZ0ZXIoXG5cdFx0XHRcdFx0JCgnPGE+Jylcblx0XHRcdFx0XHRcdC5hdHRyKHtcblx0XHRcdFx0XHRcdFx0aHJlZjogJ2phdmFzY3JpcHQ6dm9pZCgwKScsXG5cdFx0XHRcdFx0XHRcdGNsYXNzOiAnV2lraXBsdXMtRWRpdC1FdmVyeVdoZXJlQnRuJyxcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQudGV4dChgKCR7aTE4bi50cmFuc2xhdGUoJ3F1aWNrZWRpdF9zZWN0aW9uYnRuJyl9KWApXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRvbkNsaWNrKHtcblx0XHRcdFx0XHRcdFx0XHR0YXJnZXRQYWdlTmFtZTogcGFyYW1zLnRpdGxlLFxuXHRcdFx0XHRcdFx0XHRcdHNlY3Rpb25OdW1iZXI6IHBhcmFtcy5zZWN0aW9uID8/IC0xLFxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRzaG93UXVpY2tFZGl0UGFuZWwoe1xuXHRcdHRpdGxlID0gJycsXG5cdFx0Y29udGVudCA9ICcnLFxuXHRcdHN1bW1hcnkgPSAnJyxcblx0XHRvbkJhY2sgPSAoKSA9PiB7fSxcblx0XHRvblBhcnNlID0gKCkgPT4ge30sXG5cdFx0b25FZGl0ID0gKCkgPT4ge30sXG5cdFx0ZXNjRXhpdCA9IGZhbHNlLFxuXHR9KSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0dGhpcy5zY3JvbGxUb3AgPSAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKTtcblx0XHRpZiAodGhpcy5xdWlja0VkaXRQYW5lbFZpc2libGUpIHtcblx0XHRcdHRoaXMuaGlkZVF1aWNrRWRpdFBhbmVsKCk7XG5cdFx0fVxuXHRcdHRoaXMucXVpY2tFZGl0UGFuZWxWaXNpYmxlID0gdHJ1ZTtcblx0XHQvLyDpmLLmraLmiYvmu5HlhbPpl63pobXpnaJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdCdjbG9zZScsXG5cdFx0XHQod2luZG93Lm9uYmVmb3JldW5sb2FkID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gYCR7aTE4bi50cmFuc2xhdGUoJ29uY2xvc2VfY29uZmlybScpfWA7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdFx0Y29uc3QgaXNOZXdQYWdlID0gJCgnLm5vYXJ0aWNsZXRleHQnKS5sZW5ndGggPiAwO1xuXHRcdC8vIERPTSDlrprkuYnlvIDlp4tcblx0XHRjb25zdCBiYWNrQnRuID0gJCgnPHNwYW4+Jylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1RdWlja2VkaXQtQmFjaycpXG5cdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUJ0bicpXG5cdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZSgnYmFjaycpfWApOyAvLyDov5Tlm57mjInpkq5cblx0XHRjb25zdCBqdW1wQnRuID0gJCgnPHNwYW4+Jylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1RdWlja2VkaXQtSnVtcCcpXG5cdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUJ0bicpXG5cdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHQkKCc8YT4nKVxuXHRcdFx0XHRcdC5hdHRyKCdocmVmJywgJyNXaWtpcGx1cy1RdWlja2VkaXQnKVxuXHRcdFx0XHRcdC50ZXh0KGAke2kxOG4udHJhbnNsYXRlKCdnb3RvX2VkaXRib3gnKX1gKVxuXHRcdFx0KTsgLy8g5Yiw57yW6L6R5qGGXG5cdFx0Y29uc3QgaW5wdXRCb3ggPSAkKCc8dGV4dGFyZWE+JykuYXR0cignaWQnLCAnV2lraXBsdXMtUXVpY2tlZGl0Jyk7IC8vIOS4u+e8lui+keahhlxuXHRcdGNvbnN0IHByZXZpZXdCb3ggPSAkKCc8ZGl2PicpLmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpOyAvLyDpooTop4jovpPlh7pcblx0XHRjb25zdCBzdW1tYXJ5Qm94ID0gJCgnPGlucHV0PicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtUXVpY2tlZGl0LVN1bW1hcnktSW5wdXQnKVxuXHRcdFx0LmF0dHIoJ3BsYWNlaG9sZGVyJywgYCR7aTE4bi50cmFuc2xhdGUoJ3N1bW1hcnlfcGxhY2Vob2xkJyl9YCk7IC8vIOe8lui+keaRmOimgei+k+WFpVxuXHRcdGNvbnN0IGVkaXRTdWJtaXRCdG4gPSAkKCc8YnV0dG9uPicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtUXVpY2tlZGl0LVN1Ym1pdCcpXG5cdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZShpc05ld1BhZ2UgPyAncHVibGlzaF9wYWdlJyA6ICdwdWJsaXNoX2NoYW5nZScpfShDdHJsK1MpYCk7IC8vIOaPkOS6pOaMiemSrlxuXHRcdGNvbnN0IHByZXZpZXdTdWJtaXRCdG4gPSAkKCc8YnV0dG9uPicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctU3VibWl0Jylcblx0XHRcdC50ZXh0KGAke2kxOG4udHJhbnNsYXRlKCdwcmV2aWV3Jyl9YCk7IC8vIOmihOiniOaMiemSrlxuXHRcdGNvbnN0IGlzTWlub3JFZGl0ID0gJCgnPGRpdj4nKVxuXHRcdFx0LmFwcGVuZCgkKCc8aW5wdXQ+JykuYXR0cih7dHlwZTogJ2NoZWNrYm94JywgaWQ6ICdXaWtpcGx1cy1RdWlja2VkaXQtTWlub3JFZGl0J30pKVxuXHRcdFx0LmFwcGVuZChcblx0XHRcdFx0JCgnPGxhYmVsPicpXG5cdFx0XHRcdFx0LmF0dHIoJ2ZvcicsICdXaWtpcGx1cy1RdWlja2VkaXQtTWlub3JFZGl0Jylcblx0XHRcdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZSgnbWFya19taW5vcmVkaXQnKX0oQ3RybCtTaGlmdCtTKWApXG5cdFx0XHQpXG5cdFx0XHQuY3NzKHttYXJnaW46ICc1cHggNXB4IDVweCAtM3B4JywgZGlzcGxheTogJ2lubGluZSd9KTtcblx0XHQvLyBET03lrprkuYnnu5PmnZ9cblx0XHRjb25zdCBlZGl0Qm9keSA9ICQoJzxkaXY+JykuYXBwZW5kKFxuXHRcdFx0YmFja0J0bixcblx0XHRcdGp1bXBCdG4sXG5cdFx0XHRwcmV2aWV3Qm94LFxuXHRcdFx0aW5wdXRCb3gsXG5cdFx0XHRzdW1tYXJ5Qm94LFxuXHRcdFx0JCgnPGJyPicpLFxuXHRcdFx0aXNNaW5vckVkaXQsXG5cdFx0XHRlZGl0U3VibWl0QnRuLFxuXHRcdFx0cHJldmlld1N1Ym1pdEJ0blxuXHRcdCk7XG5cdFx0dGhpcy5jcmVhdGVEaWFsb2dCb3godGl0bGUsIGVkaXRCb2R5LCAxMDAwLCAoKSA9PiB7XG5cdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0JykudmFsKGNvbnRlbnQpO1xuXHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1TdW1tYXJ5LUlucHV0JykudmFsKHN1bW1hcnkpO1xuXHRcdH0pO1xuXHRcdC8vIEJhY2tcblx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LUJhY2snKS5vbignY2xpY2snLCBvbkJhY2spO1xuXHRcdC8vIFByZXZpZXdcblx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctU3VibWl0Jykub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgcHJlbG9hZEJhbm5lciA9ICQoJzxkaXY+Jylcblx0XHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1CYW5uZXInKVxuXHRcdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZSgnbG9hZGluZ19wcmV2aWV3Jyl9YCk7XG5cdFx0XHRjb25zdCB3aWtpVGV4dCA9ICQoJyNXaWtpcGx1cy1RdWlja2VkaXQnKS52YWwoKTtcblx0XHRcdCQodGhpcykuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcblx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5mYWRlT3V0KDEwMCwgKCkgPT4ge1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0JykuaHRtbCgnJykuYXBwZW5kKHByZWxvYWRCYW5uZXIpO1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0JykuZmFkZUluKDEwMCk7XG5cdFx0XHR9KTtcblx0XHRcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6IHNlbGYuc2Nyb2xsVG9wfSwgMjAwKTsgLy/ov5Tlm57pobbpg6hcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IG9uUGFyc2Uod2lraVRleHQpO1xuXHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmZhZGVPdXQoJzEwMCcsICgpID0+IHtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmh0bWwoYDxocj48ZGl2IGNsYXNzPVwibXctYm9keS1jb250ZW50XCI+JHtyZXN1bHR9PC9kaXY+PGhyPmApO1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0JykuZmFkZUluKCcxMDAnKTtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LVN1Ym1pdCcpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0Ly8gRWRpdFxuXHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtU3VibWl0Jykub24oJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3QgdGltZXIgPSBEYXRlLm5vdygpO1xuXHRcdFx0Y29uc3QgZWRpdEJhbm5lciA9ICQoJzxkaXY+Jylcblx0XHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1CYW5uZXInKVxuXHRcdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZSgnc3VibWl0dGluZ19lZGl0Jyl9YCk7XG5cdFx0XHRjb25zdCBwYXlsb2FkID0ge1xuXHRcdFx0XHRzdW1tYXJ5OiAkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVN1bW1hcnktSW5wdXQnKS52YWwoKSxcblx0XHRcdFx0Y29udGVudDogJCgnI1dpa2lwbHVzLVF1aWNrZWRpdCcpLnZhbCgpLFxuXHRcdFx0XHRpc01pbm9yRWRpdDogJCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1NaW5vckVkaXQnKS5pcygnOmNoZWNrZWQnKSxcblx0XHRcdH07XG5cdFx0XHQvLyDlh4blpIfnvJbovpEg56aB55So5oyJ6ZKuIOaJp+ihjOWKqOeUu1xuXHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1TdWJtaXQsI1dpa2lwbHVzLVF1aWNrZWRpdCwjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctU3VibWl0JykuYXR0cihcblx0XHRcdFx0J2Rpc2FibGVkJyxcblx0XHRcdFx0J2Rpc2FibGVkJ1xuXHRcdFx0KTtcblx0XHRcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6IHNlbGYuc2Nyb2xsVG9wfSwgMjAwKTtcblx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5mYWRlT3V0KDEwMCwgKCkgPT4ge1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0JykuaHRtbCgnJykuYXBwZW5kKGVkaXRCYW5uZXIpO1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0JykuZmFkZUluKDEwMCk7XG5cdFx0XHR9KTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGF3YWl0IG9uRWRpdChwYXlsb2FkKTtcblx0XHRcdFx0Y29uc3QgdXNlVGltZSA9IERhdGUubm93KCkgLSB0aW1lcjtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpXG5cdFx0XHRcdFx0LmZpbmQoJy5XaWtpcGx1cy1CYW5uZXInKVxuXHRcdFx0XHRcdC5jc3MoJ2JhY2tncm91bmQnLCAncmdiYSg2LCAyMzksIDkyLCAwLjQ0KScpO1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0Jylcblx0XHRcdFx0XHQuZmluZCgnLldpa2lwbHVzLUJhbm5lcicpXG5cdFx0XHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoJ2VkaXRfc3VjY2VzcycsIFt1c2VUaW1lLnRvU3RyaW5nKCldKX1gKTtcblx0XHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgKHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IHVuZGVmaW5lZCkpOyAvL+WPlua2iOmhtemdouWFs+mXreehruiupFxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRsb2NhdGlvbi5yZWxvYWQoKTtcblx0XHRcdFx0fSwgNTAwKTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdFx0JCgnLldpa2lwbHVzLUJhbm5lcicpLmNzcygnYmFja2dyb3VuZCcsICdyZ2JhKDIxOCwgMTQyLCAxNjcsIDAuNjUpJyk7XG5cdFx0XHRcdCQoJy5XaWtpcGx1cy1CYW5uZXInKS5odG1sKGVycm9yLm1lc3NhZ2UpO1xuXHRcdFx0fSBmaW5hbGx5IHtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1TdWJtaXQsI1dpa2lwbHVzLVF1aWNrZWRpdCwjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctU3VibWl0JykucHJvcChcblx0XHRcdFx0XHQnZGlzYWJsZWQnLFxuXHRcdFx0XHRcdGZhbHNlXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Ly9DdHJsK1Pmj5DkuqQgQ3RybCtTaGlmdCtT5bCP57yW6L6RXG5cdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdCwjV2lraXBsdXMtUXVpY2tlZGl0LVN1bW1hcnktSW5wdXQsI1dpa2lwbHVzLVF1aWNrZWRpdC1NaW5vckVkaXQnKS5vbigna2V5ZG93bicsIChlKSA9PiB7XG5cdFx0XHRpZiAoZS5jdHJsS2V5ICYmIGUud2hpY2ggPT09IDgzKSB7XG5cdFx0XHRcdGlmIChlLnNoaWZ0S2V5KSB7XG5cdFx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1NaW5vckVkaXQnKS50cmlnZ2VyKCdjbGljaycpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtU3VibWl0JykudHJpZ2dlcignY2xpY2snKTtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdC8vRXNj6YCA5Ye6XG5cdFx0aWYgKGVzY0V4aXQpIHtcblx0XHRcdCQoZG9jdW1lbnQpLm9uKCdrZXlkb3duJywgKGUpID0+IHtcblx0XHRcdFx0aWYgKGUud2hpY2ggPT09IDI3KSB7XG5cdFx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1CYWNrJykudHJpZ2dlcignY2xpY2snKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0aGlkZVF1aWNrRWRpdFBhbmVsKCkge1xuXHRcdHRoaXMucXVpY2tFZGl0UGFuZWxWaXNpYmxlID0gZmFsc2U7XG5cdFx0JCgnLldpa2lwbHVzLUludGVyQm94JykuZmFkZU91dCgnZmFzdCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsICh3aW5kb3cub25iZWZvcmV1bmxvYWQgPSB1bmRlZmluZWQpKTsgLy/lj5bmtojpobXpnaLlhbPpl63noa7orqRcblx0XHRcdCQodGhpcykucmVtb3ZlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICog5pi+56S65b+r6YCf6YeN5a6a5ZCR5by556qXXG5cdCAqXG5cdCAqIEBwYXJhbSByb290MFxuXHQgKiBAcGFyYW0gcm9vdDAub25FZGl0XG5cdCAqIEBwYXJhbSByb290MC5vblN1Y2Nlc3Ncblx0ICovXG5cdHNob3dTaW1wbGVSZWRpcmVjdFBhbmVsKHtvbkVkaXQgPSAoKSA9PiB7fSwgb25TdWNjZXNzID0gKCkgPT4ge319ID0ge30pIHtcblx0XHRjb25zdCBpbnB1dCA9ICQoJzxpbnB1dD4nKS5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtSW5wdXQnKS5hdHRyKCdpZCcsICdXaWtpcGx1cy1TUi1UaXRsZScpO1xuXHRcdGNvbnN0IHN1bW1hcnlJbnB1dFRpdGxlID0gJCgnPHA+JykudGV4dChpMThuLnRyYW5zbGF0ZSgncmVkaXJlY3Rfc3VtbWFyeV9kZXNjJykpO1xuXHRcdGNvbnN0IHN1bW1hcnlJbnB1dCA9ICQoJzxpbnB1dD4nKS5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtSW5wdXQnKS5hdHRyKCdpZCcsICdXaWtpcGx1cy1TUi1TdW1tYXJ5Jyk7XG5cdFx0Y29uc3QgYXBwbHlCdG4gPSAkKCc8ZGl2PicpXG5cdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUJ0bicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtU1ItQXBwbHknKVxuXHRcdFx0LnRleHQoaTE4bi50cmFuc2xhdGUoJ3N1Ym1pdCcpKTtcblx0XHRjb25zdCBjYW5jZWxCdG4gPSAkKCc8ZGl2PicpXG5cdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUJ0bicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtU1ItQ2FuY2VsJylcblx0XHRcdC50ZXh0KGkxOG4udHJhbnNsYXRlKCdjYW5jZWwnKSk7XG5cdFx0Y29uc3QgY29udGludWVCdG4gPSAkKCc8ZGl2PicpXG5cdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUJ0bicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtU1ItQ29udGludWUnKVxuXHRcdFx0LnRleHQoaTE4bi50cmFuc2xhdGUoJ2NvbnRpbnVlJykpO1xuXHRcdGNvbnN0IGNvbnRlbnQgPSAkKCc8ZGl2PicpXG5cdFx0XHQuYXBwZW5kKGlucHV0KVxuXHRcdFx0LmFwcGVuZChzdW1tYXJ5SW5wdXRUaXRsZSlcblx0XHRcdC5hcHBlbmQoc3VtbWFyeUlucHV0KVxuXHRcdFx0LmFwcGVuZCgkKCc8aHI+JykpXG5cdFx0XHQuYXBwZW5kKGFwcGx5QnRuKVxuXHRcdFx0LmFwcGVuZChjYW5jZWxCdG4pOyAvL+aLvOaOpVxuXHRcdGNvbnN0IGRpYWxvZyA9IHRoaXMuY3JlYXRlRGlhbG9nQm94KGkxOG4udHJhbnNsYXRlKCdyZWRpcmVjdF9kZXNjJyksIGNvbnRlbnQsIDYwMCk7XG5cdFx0YXBwbHlCdG4ub24oJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3QgdGl0bGUgPSAkKCcjV2lraXBsdXMtU1ItVGl0bGUnKS52YWwoKTtcblx0XHRcdGNvbnN0IHN1bW1hcnkgPSAkKCcjV2lraXBsdXMtU1ItU3VtbWFyeScpLnZhbCgpO1xuXHRcdFx0JCgnLldpa2lwbHVzLUludGVyQm94LUNvbnRlbnQnKS5odG1sKFxuXHRcdFx0XHRgPGRpdiBjbGFzcz1cIldpa2lwbHVzLUJhbm5lclwiPiR7aTE4bi50cmFuc2xhdGUoJ3N1Ym1pdHRpbmdfZWRpdCcpfTwvZGl2PmBcblx0XHRcdCk7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRhd2FpdCBvbkVkaXQoe1xuXHRcdFx0XHRcdHRpdGxlLFxuXHRcdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdFx0Zm9yY2VPdmVyd3JpdGU6IGZhbHNlLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0JCgnLldpa2lwbHVzLUJhbm5lcicpLnRleHQoaTE4bi50cmFuc2xhdGUoJ3JlZGlyZWN0X3NhdmVkJykpO1xuXHRcdFx0XHR0aGlzLmhpZGVTaW1wbGVSZWRpcmVjdFBhbmVsKGRpYWxvZyk7XG5cdFx0XHRcdG9uU3VjY2Vzcyh7dGl0bGV9KTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdCQoJy5XaWtpcGx1cy1CYW5uZXInKS5jc3MoJ2JhY2tncm91bmQnLCAncmdiYSgyMTgsIDE0MiwgMTY3LCAwLjY1KScpO1xuXHRcdFx0XHQkKCcuV2lraXBsdXMtQmFubmVyJykudGV4dChlcnJvci5tZXNzYWdlKTtcblx0XHRcdFx0aWYgKGVycm9yLmNvZGUgPT09ICdhcnRpY2xlZXhpc3RzJykge1xuXHRcdFx0XHRcdCQoJy5XaWtpcGx1cy1JbnRlckJveC1Db250ZW50JykuYXBwZW5kKCQoJzxocj4nKSkuYXBwZW5kKGNvbnRpbnVlQnRuKS5hcHBlbmQoY2FuY2VsQnRuKTtcblx0XHRcdFx0XHRjYW5jZWxCdG4ub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5oaWRlU2ltcGxlUmVkaXJlY3RQYW5lbChkaWFsb2cpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGNvbnRpbnVlQnRuLm9uKCdjbGljaycsIGFzeW5jICgpID0+IHtcblx0XHRcdFx0XHRcdCQoJy5XaWtpcGx1cy1JbnRlckJveC1Db250ZW50JykuaHRtbChcblx0XHRcdFx0XHRcdFx0YDxkaXYgY2xhc3M9XCJXaWtpcGx1cy1CYW5uZXJcIj4ke2kxOG4udHJhbnNsYXRlKCdzdWJtaXR0aW5nX2VkaXQnKX08L2Rpdj5gXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0YXdhaXQgb25FZGl0KHtcblx0XHRcdFx0XHRcdFx0XHR0aXRsZSxcblx0XHRcdFx0XHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHRcdFx0XHRcdGZvcmNlT3ZlcndyaXRlOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0JCgnLldpa2lwbHVzLUJhbm5lcicpLnRleHQoaTE4bi50cmFuc2xhdGUoJ3JlZGlyZWN0X3NhdmVkJykpO1xuXHRcdFx0XHRcdFx0XHR0aGlzLmhpZGVTaW1wbGVSZWRpcmVjdFBhbmVsKGRpYWxvZyk7XG5cdFx0XHRcdFx0XHRcdG9uU3VjY2Vzcyh7dGl0bGV9KTtcblx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdCQoJy5XaWtpcGx1cy1CYW5uZXInKS5jc3MoJ2JhY2tncm91bmQnLCAncmdiYSgyMTgsIDE0MiwgMTY3LCAwLjY1KScpO1xuXHRcdFx0XHRcdFx0XHQkKCcuV2lraXBsdXMtQmFubmVyJykudGV4dChlcnJvci5tZXNzYWdlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGNhbmNlbEJ0bi5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHR0aGlzLmhpZGVTaW1wbGVSZWRpcmVjdFBhbmVsKGRpYWxvZyk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICog6ZqQ6JeP5b+r6YCf6YeN5a6a5ZCR5by556qXXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gZGlhbG9nXG5cdCAqL1xuXHRoaWRlU2ltcGxlUmVkaXJlY3RQYW5lbChkaWFsb2cgPSAkKCdib2R5JykpIHtcblx0XHRkaWFsb2cuZmluZCgnLldpa2lwbHVzLUludGVyQm94LUNsb3NlJykudHJpZ2dlcignY2xpY2snKTtcblx0fVxuXG5cdHNob3dTZXR0aW5nc1BhbmVsKHtvblN1Ym1pdCA9ICgpID0+IHt9fSA9IHt9KSB7XG5cdFx0Y29uc3QgaW5wdXQgPSAkKCc8dGV4dGFyZWE+JykuYXR0cignaWQnLCAnV2lraXBsdXMtU2V0dGluZy1JbnB1dCcpLmF0dHIoJ3Jvd3MnLCAnMTAnKTtcblx0XHRjb25zdCBhcHBseUJ0biA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtQnRuJylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1TZXR0aW5nLUFwcGx5Jylcblx0XHRcdC50ZXh0KGkxOG4udHJhbnNsYXRlKCdzdWJtaXQnKSk7XG5cdFx0Y29uc3QgY2FuY2VsQnRuID0gJCgnPGRpdj4nKVxuXHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveC1CdG4nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVNldHRpbmctQ2FuY2VsJylcblx0XHRcdC50ZXh0KGkxOG4udHJhbnNsYXRlKCdjYW5jZWwnKSk7XG5cdFx0Y29uc3QgY29udGVudCA9ICQoJzxkaXY+JykuYXBwZW5kKGlucHV0KS5hcHBlbmQoJCgnPGhyPicpKS5hcHBlbmQoYXBwbHlCdG4pLmFwcGVuZChjYW5jZWxCdG4pOyAvL+aLvOaOpVxuXG5cdFx0Y29uc3QgZGlhbG9nID0gdGhpcy5jcmVhdGVEaWFsb2dCb3goaTE4bi50cmFuc2xhdGUoJ3dpa2lwbHVzX3NldHRpbmdzX2Rlc2MnKSwgY29udGVudCwgNjAwLCAoKSA9PiB7XG5cdFx0XHRpZiAobG9jYWxTdG9yYWdlLldpa2lwbHVzX1NldHRpbmdzKSB7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1TZXR0aW5nLUlucHV0JykudmFsKGxvY2FsU3RvcmFnZS5XaWtpcGx1c19TZXR0aW5ncyk7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Y29uc3Qgc2V0dGluZ3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5XaWtpcGx1c19TZXR0aW5ncyk7XG5cdFx0XHRcdFx0JCgnI1dpa2lwbHVzLVNldHRpbmctSW5wdXQnKS52YWwoSlNPTi5zdHJpbmdpZnkoc2V0dGluZ3MsIG51bGwsIDIpKTtcblx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0Ly8gaWdub3JlXG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1TZXR0aW5nLUlucHV0JykuYXR0cigncGxhY2Vob2xkZXInLCBpMThuLnRyYW5zbGF0ZSgnd2lraXBsdXNfc2V0dGluZ3NfcGxhY2Vob2xkZXInKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0YXBwbHlCdG4ub24oJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3Qgc2F2ZWRCYW5uZXIgPSAkKCc8ZGl2PicpLmFkZENsYXNzKCdXaWtpcGx1cy1CYW5uZXInKS50ZXh0KGkxOG4udHJhbnNsYXRlKCd3aWtpcGx1c19zZXR0aW5nc19zYXZlZCcpKTtcblx0XHRcdGNvbnN0IHNldHRpbmdzID0gJCgnI1dpa2lwbHVzLVNldHRpbmctSW5wdXQnKS52YWwoKTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdG9uU3VibWl0KHtzZXR0aW5nc30pO1xuXHRcdFx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gtQ29udGVudCcpLmh0bWwoJycpLmFwcGVuZChzYXZlZEJhbm5lcik7XG5cdFx0XHRcdGF3YWl0IHNsZWVwKDE1MDApO1xuXHRcdFx0XHR0aGlzLmhpZGVTZXR0aW5nc1BhbmVsKGRpYWxvZyk7XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0Tm90aWZpY2F0aW9uLmVycm9yKGkxOG4udHJhbnNsYXRlKCd3aWtpcGx1c19zZXR0aW5nc19ncmFtbWFyX2Vycm9yJykpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGNhbmNlbEJ0bi5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHR0aGlzLmhpZGVTZXR0aW5nc1BhbmVsKGRpYWxvZyk7XG5cdFx0fSk7XG5cdH1cblxuXHRoaWRlU2V0dGluZ3NQYW5lbChkaWFsb2cgPSAkKCdib2R5JykpIHtcblx0XHRkaWFsb2cuZmluZCgnLldpa2lwbHVzLUludGVyQm94LUNsb3NlJykudHJpZ2dlcignY2xpY2snKTtcblx0fVxuXG5cdGJpbmRQcmVsb2FkRXZlbnRzKG9uUHJlbG9hZCkge1xuXHRcdCQoJyN0b2MnKVxuXHRcdFx0LmNoaWxkcmVuKCd1bCcpXG5cdFx0XHQuZmluZCgnYScpXG5cdFx0XHQuZWFjaChmdW5jdGlvbiAoaSkge1xuXHRcdFx0XHQkKHRoaXMpLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0JCh0aGlzKS5vZmYoJ21vdXNlb3ZlcicpO1xuXHRcdFx0XHRcdG9uUHJlbG9hZCh7XG5cdFx0XHRcdFx0XHRzZWN0aW9uTnVtYmVyOiBpICsgMSxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVUkoKTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuY2xhc3MgU2V0dGluZ3Mge1xuXHRnZXRTZXR0aW5nKGtleSwgb2JqZWN0ID0ge30pIHtcblx0XHRjb25zdCB3ID0gb2JqZWN0O1xuXHRcdGxldCBzZXR0aW5ncztcblx0XHR0cnkge1xuXHRcdFx0c2V0dGluZ3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVsnV2lraXBsdXNfU2V0dGluZ3MnXSk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBjdXN0b21TZXR0aW5nRnVuY3Rpb24gPSBuZXcgRnVuY3Rpb24oYHJldHVybiAke3NldHRpbmdzW2tleV19YCk7XG5cdFx0XHRpZiAodHlwZW9mIGN1c3RvbVNldHRpbmdGdW5jdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGlmIChjdXN0b21TZXR0aW5nRnVuY3Rpb24oKSh3KSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gY3VzdG9tU2V0dGluZ0Z1bmN0aW9uKCkodykgfHwgc2V0dGluZ3Nba2V5XTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdHJldHVybiBzZXR0aW5nc1trZXldO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gc2V0dGluZ3Nba2V5XTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGxldCByZXN1bHQgPSBzZXR0aW5nc1trZXldO1xuXHRcdFx0XHRmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhvYmplY3QpKSB7XG5cdFx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoYFxcJHske2tleX19YCwgb2JqZWN0W2tleV0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBTZXR0aW5ncygpO1xuIiwgIi8qISBXaWtpcGx1cyAtIDQuMC4xMSB8IEVyaWRhbnVzIFNvcmEgKOWmueepuumFsSkgfCBDQy1CWS1TQS00LjAgPGh0dHBzOi8vcXdiay5jYy9IOkNDLUJZLVNBLTQuMD4gKi9cbiNXaWtpcGx1cy1RdWlja2VkaXQge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNTAwcHg7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cbiNXaWtpcGx1cy1RdWlja2VkaXQtU3VtbWFyeS1JbnB1dCB7XG4gIHdpZHRoOiA1MCU7XG59XG4uc2tpbi12ZWN0b3IgI1dpa2lwbHVzLVF1aWNrZWRpdC1TdW1tYXJ5LUlucHV0IHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LVN1Ym1pdCxcbiNXaWtpcGx1cy1RdWlja2VkaXQtU3VibWl0IHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBwYWRkaW5nOiByZXZlcnQ7XG59XG4jV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0IHtcbiAgY2xlYXI6IGJvdGg7XG4gIG1hcmdpbjogNXB4IDA7XG59XG4uV2lraXBsdXMtQnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAzcHggNXB4O1xuICBwYWRkaW5nOiAzcHggMWVtO1xuICB3aWR0aDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4ICNhYWE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLldpa2lwbHVzLUJ0biBhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzAwMDtcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5XaWtpcGx1cy1JbnRlckJveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMCU7XG4gIHotaW5kZXg6IDIwMDtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuICB3aWR0aDogNjAwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE2MSwgMTU0LCAyMjAsIDAuNDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRmOWY3O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuLldpa2lwbHVzLUludGVyQm94LUhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICB0b3A6IC04cHg7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNmNmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG4gIGN1cnNvcjogbW92ZTtcbn1cbi5XaWtpcGx1cy1JbnRlckJveC1JbnB1dCB7XG4gIG1hcmdpbjogMjBweDtcbiAgd2lkdGg6IDYwJTtcbn1cbi5XaWtpcGx1cy1JbnRlckJveC1CdG4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiBhdXRvIDNweDtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLldpa2lwbHVzLUludGVyQm94LUJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XG59XG4uV2lraXBsdXMtSW50ZXJCb3gtQ2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogM3B4IDdweDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5XaWtpcGx1cy1JbnRlckJveCBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbn1cbi5XaWtpcGx1cy1JbnRlckJveCB0YWJsZS5kaWZmIHtcbiAgdGFibGUtbGF5b3V0OiBhdXRvO1xufVxuLldpa2lwbHVzLUludGVyQm94IHRhYmxlLmRpZmYgLmRpZmYtYWRkZWRsaW5lLFxuLldpa2lwbHVzLUludGVyQm94IHRhYmxlLmRpZmYgLmRpZmYtZGVsZXRlZGxpbmUsXG4uV2lraXBsdXMtSW50ZXJCb3ggdGFibGUuZGlmZiAuZGlmZi1saW5lbm8ge1xuICB3aWR0aDogNTAlO1xufVxuLldpa2lwbHVzLUludGVyQm94IHRhYmxlLmRpZmYgLmRpZmYtbWFya2VyIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5XaWtpcGx1cy1CYW5uZXIge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xuICBtaW4taGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE5MywgMjIyLCAyMTQsIDAuNTEpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250cy1zYW5zLCBzYW5zLXNlcmlmKTtcbn1cbi5Nb2VOb3RpZmljYXRpb24tbm90aWNlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBub25lO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDNweCA1cHg7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICB3aWR0aDogYXV0bztcbiAgYm94LXNoYWRvdzogMCAzcHggM3B4ICNhYWE7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5Nb2VOb3RpZmljYXRpb24tbm90aWNlIHNwYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogM3B4IGF1dG8gM3B4IDNweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250cy1zYW5zLCBzYW5zLXNlcmlmKTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cbi5Nb2VOb3RpZmljYXRpb24tbm90aWNlLXN1Y2Nlc3Mge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM4ZGRhOTM7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4YTAwO1xufVxuLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2Utd2FybmluZyB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2ZmZGYwMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGJkMDA7XG59XG4uTW9lTm90aWZpY2F0aW9uLW5vdGljZS13YXJuaW5nIHNwYW4ge1xuICBjb2xvcjogIzAwMDtcbn1cbi5Nb2VOb3RpZmljYXRpb24tbm90aWNlLWVycm9yIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZTcxNzE3O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IwMGUwNjtcbn1cbiNNb2VOb3RpZmljYXRpb24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMzBweDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogNzEzO1xuICBtaW4td2lkdGg6IDIwJTtcbn1cbiIsICIvKipcbiAqIFdpa2lwbHVzXG4gKiBFcmlkYW51cyBTb3JhIDxzb3JhQHNvdW5kLm1vZT5cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCBQYWdlIGZyb20gJy4vY29yZS9wYWdlJztcbmltcG9ydCBVSSBmcm9tICcuL2NvcmUvdWknO1xuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tICcuL2NvcmUvbm90aWZpY2F0aW9uJztcbmltcG9ydCBXaWtpIGZyb20gJy4vc2VydmljZXMvd2lraSc7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi91dGlscy9zZXR0aW5ncyc7XG5pbXBvcnQgTG9nIGZyb20gJy4vdXRpbHMvbG9nJztcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IGkxOG4gZnJvbSAnLi91dGlscy9pMThuJztcbmltcG9ydCAnLi93aWtpcGx1cy5sZXNzJztcblxuJChhc3luYyAoKSA9PiB7XG5cdGNvbnN0IFBhZ2VzID0ge307XG5cdGNvbnN0IGlzQ3VycmVudFBhZ2VFbXB0eSA9ICQoJy5ub2FydGljbGV0ZXh0JykubGVuZ3RoID4gMCAmJiBDb25zdGFudHMuYXJ0aWNsZUlkID09PSAwO1xuXG5cdC8qKlxuXHQgKiBHZXQgcGFnZSBpbnN0YW5jZS5cblx0ICpcblx0ICogQHBhcmFtIHsqfSBwYXJhbXNcblx0ICogQHBhcmFtIHtudW1iZXJ9IHBhcmFtcy5yZXZpc2lvbklkIOmhtemdouS/ruiuoueJiOacrOWPt1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLnRpdGxlIOmhtemdouagh+mimFxuXHQgKi9cblx0Y29uc3QgZ2V0UGFnZSA9IGFzeW5jICh7cmV2aXNpb25JZCwgdGl0bGV9KSA9PiB7XG5cdFx0aWYgKFBhZ2VzW3JldmlzaW9uSWRdKSB7XG5cdFx0XHRyZXR1cm4gUGFnZXNbcmV2aXNpb25JZF07XG5cdFx0fVxuXHRcdGNvbnN0IG5ld1BhZ2UgPSBuZXcgUGFnZSh7XG5cdFx0XHRyZXZpc2lvbklkLFxuXHRcdFx0dGl0bGUsXG5cdFx0fSk7XG5cdFx0YXdhaXQgbmV3UGFnZS5pbml0KCk7XG5cdFx0UGFnZXNbcmV2aXNpb25JZF0gPSBuZXdQYWdlO1xuXHRcdHJldHVybiBQYWdlc1tyZXZpc2lvbklkXTtcblx0fTtcblxuXHRMb2cuaW5mbyhgV2lraXBsdXMgbm93IGxvYWRpbmcuIFZlcnNpb246ICR7Q29uc3RhbnRzLnZlcnNpb259YCk7XG5cblx0aWYgKCF3aW5kb3cubXcpIHtcblx0XHRjb25zb2xlLmxvZygnTWVkaWF3aWtpIEphdmFTY3JpcHQgbm90IGxvYWRlZCBvciBub3QgYSBNZWRpYXdpa2kgd2Vic2l0ZS4nKTtcblx0XHRyZXR1cm47XG5cdH1cblx0aWYgKCFDb25zdGFudHMudXNlckdyb3Vwcy5pbmNsdWRlcygnYXV0b2NvbmZpcm1lZCcpICYmICFDb25zdGFudHMudXNlckdyb3Vwcy5pbmNsdWRlcygnY29uZmlybWVkJykpIHtcblx0XHROb3RpZmljYXRpb24uZXJyb3IoaTE4bi50cmFuc2xhdGUoJ25vdF9hdXRvY29uZmlybWVkX3VzZXInKSk7XG5cdFx0TG9nLmluZm8oaTE4bi50cmFuc2xhdGUoJ25vdF9hdXRvY29uZmlybWVkX3VzZXInKSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKCFDb25zdGFudHMuaXNBcnRpY2xlIHx8IENvbnN0YW50cy5hY3Rpb24gIT09ICd2aWV3Jykge1xuXHRcdExvZy5pbmZvKCdOb3QgYW4gZWRpdGFibGUgcGFnZS4gU3RvcCBpbml0aWFsaXphdGlvbi4nKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBJbml0aWFsaXplIGN1cnJlbnQgcGFnZSDpu5jorqTliJ3lp4vljJblvZPliY3pobXpnaJcblx0d2luZG93Ll9XaWtpcGx1c1BhZ2VzID0gUGFnZXM7XG5cdGNvbnN0IGN1cnJlbnRQYWdlTmFtZSA9IENvbnN0YW50cy5jdXJyZW50UGFnZU5hbWU7XG5cdGNvbnN0IHJldmlzaW9uSWQgPSBDb25zdGFudHMucmV2aXNpb25JZDtcblx0Y29uc3QgY3VycmVudFBhZ2UgPSBhd2FpdCBnZXRQYWdlKHtcblx0XHRyZXZpc2lvbklkLFxuXHRcdHRpdGxlOiBjdXJyZW50UGFnZU5hbWUsXG5cdH0pO1xuXG5cdGNvbnN0IGhhbmRsZVF1aWNrRWRpdEJ1dHRvbkNsaWNrZWQgPSBhc3luYyAoe3NlY3Rpb25OdW1iZXIsIHNlY3Rpb25OYW1lLCB0YXJnZXRQYWdlTmFtZX0gPSB7fSkgPT4ge1xuXHRcdGNvbnN0IGlzT3RoZXJQYWdlID0gdGFyZ2V0UGFnZU5hbWUgIT09IGN1cnJlbnRQYWdlTmFtZTtcblx0XHRpZiAoaXNPdGhlclBhZ2UgJiYgQ29uc3RhbnRzLmxhdGVzdFJldmlzaW9uSWQgIT09IENvbnN0YW50cy5yZXZpc2lvbklkKSB7XG5cdFx0XHQvLyDlnKjljoblj7LniYjmnKznvJbovpHlhbbku5bpobXpnaLmnInpl67popgg5pqC5pe25LiN5pSv5oyBXG5cdFx0XHRMb2cuZXJyb3IoJ2Nyb3NzX3BhZ2VfaGlzdG9yeV9yZXZpc2lvbl9lZGl0X3dhcm5pbmcnKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgcmV2aXNpb25JZCA9IGlzT3RoZXJQYWdlID8gYXdhaXQgV2lraS5nZXRMYXRlc3RSZXZpc2lvbklkRm9yUGFnZSh0YXJnZXRQYWdlTmFtZSkgOiBDb25zdGFudHMucmV2aXNpb25JZDtcblxuXHRcdGNvbnN0IHBhZ2UgPSBhd2FpdCBnZXRQYWdlKHtyZXZpc2lvbklkLCB0aXRsZTogdGFyZ2V0UGFnZU5hbWV9KTtcblx0XHRjb25zdCBjdXN0b21TdW1tYXJ5ID0gU2V0dGluZ3MuZ2V0U2V0dGluZygnZGVmYXVsdFN1bW1hcnknLCB7XG5cdFx0XHRzZWN0aW9uTmFtZSxcblx0XHRcdHNlY3Rpb25OdW1iZXIsXG5cdFx0XHRzZWN0aW9uVGFyZ2V0TmFtZTogdGFyZ2V0UGFnZU5hbWUsXG5cdFx0fSk7XG5cdFx0Y29uc3Qgc3VtbWFyeSA9XG5cdFx0XHRjdXN0b21TdW1tYXJ5IHx8XG5cdFx0XHQoc2VjdGlvbk5hbWVcblx0XHRcdFx0PyBgLyogJHtzZWN0aW9uTmFtZX0gKi8gJHtpMThuLnRyYW5zbGF0ZSgnZGVmYXVsdF9zdW1tYXJ5X3N1ZmZpeCcpfWBcblx0XHRcdFx0OiBpMThuLnRyYW5zbGF0ZSgnZGVmYXVsdF9zdW1tYXJ5X3N1ZmZpeCcpKTtcblx0XHRjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0Tm90aWZpY2F0aW9uLnN1Y2Nlc3MoaTE4bi50cmFuc2xhdGUoJ2xvYWRpbmcnKSk7XG5cdFx0fSwgMjAwKTtcblx0XHRjb25zdCBzZWN0aW9uQ29udGVudCA9IGF3YWl0IHBhZ2UuZ2V0V2lraVRleHQoe1xuXHRcdFx0c2VjdGlvbjogc2VjdGlvbk51bWJlcixcblx0XHR9KTtcblx0XHRjb25zdCBpc0VkaXRIaXN0b3J5UmV2aXNpb24gPSAhaXNPdGhlclBhZ2UgJiYgQ29uc3RhbnRzLmxhdGVzdFJldmlzaW9uSWQgIT09IENvbnN0YW50cy5yZXZpc2lvbklkO1xuXHRcdGNvbnN0IGVzY1RvRXhpdCA9XG5cdFx0XHRTZXR0aW5ncy5nZXRTZXR0aW5nKCdlc2NfdG9fZXhpdF9xdWlja2VkaXQnKSA9PT0gdHJ1ZSB8fCAvLyDlhbzlrrnogIHorr7nva5rZXlcblx0XHRcdFNldHRpbmdzLmdldFNldHRpbmcoJ2VzY190b19leGl0X3F1aWNrZWRpdCcpID09PSAndHJ1ZScgfHxcblx0XHRcdFNldHRpbmdzLmdldFNldHRpbmcoJ2VzY1RvRXhpdFF1aWNrRWRpdCcpID09PSB0cnVlIHx8XG5cdFx0XHRTZXR0aW5ncy5nZXRTZXR0aW5nKCdlc2NUb0V4aXRRdWlja0VkaXQnKSA9PT0gJ3RydWUnO1xuXHRcdGNvbnN0IGN1c3RvbUVkaXRUYWdzID0gU2V0dGluZ3MuZ2V0U2V0dGluZygnY3VzdG9tX2VkaXRfdGFncycpO1xuXHRcdGNvbnN0IGRlZmF1bHRFZGl0VGFncyA9IFtdO1xuXHRcdGNvbnN0IGVkaXRUYWdzID0gY3VzdG9tRWRpdFRhZ3M/Lmxlbmd0aCA/IGN1c3RvbUVkaXRUYWdzIDogZGVmYXVsdEVkaXRUYWdzO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lcik7XG5cdFx0Tm90aWZpY2F0aW9uLmVtcHR5KCk7XG5cblx0XHRpZiAoaXNFZGl0SGlzdG9yeVJldmlzaW9uKSB7XG5cdFx0XHROb3RpZmljYXRpb24ud2FybmluZyhpMThuLnRyYW5zbGF0ZSgnaGlzdG9yeV9lZGl0X3dhcm5pbmcnKSk7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc2hvdWxkU2hvd0NyZWF0ZVBhZ2VUaXAgPSBpc090aGVyUGFnZSA/ICFyZXZpc2lvbklkIDogaXNDdXJyZW50UGFnZUVtcHR5O1xuXG5cdFx0VUkuc2hvd1F1aWNrRWRpdFBhbmVsKHtcblx0XHRcdHRpdGxlOiBgJHtpMThuLnRyYW5zbGF0ZSgncXVpY2tlZGl0X3RvcGJ0bicpfSR7XG5cdFx0XHRcdGlzRWRpdEhpc3RvcnlSZXZpc2lvbiA/IGkxOG4udHJhbnNsYXRlKCdoaXN0b3J5X2VkaXRfd2FybmluZycpIDogJydcblx0XHRcdH1gLFxuXHRcdFx0Y29udGVudDogc2hvdWxkU2hvd0NyZWF0ZVBhZ2VUaXAgPyBpMThuLnRyYW5zbGF0ZSgnY3JlYXRlX3BhZ2VfdGlwJykgOiBzZWN0aW9uQ29udGVudCxcblx0XHRcdHN1bW1hcnksXG5cdFx0XHRvbkJhY2s6IFVJLmhpZGVRdWlja0VkaXRQYW5lbCxcblx0XHRcdG9uUGFyc2U6ICh3aWtpVGV4dCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gcGFnZS5wYXJzZVdpa2lUZXh0KHdpa2lUZXh0KTtcblx0XHRcdH0sXG5cdFx0XHRvbkVkaXQ6IGFzeW5jICh7Y29udGVudCwgc3VtbWFyeSwgaXNNaW5vckVkaXR9KSA9PiB7XG5cdFx0XHRcdGNvbnN0IGVkaXRQYXlsb2FkID0ge1xuXHRcdFx0XHRcdGNvbnRlbnQsXG5cdFx0XHRcdFx0Y29uZmlnOiB7XG5cdFx0XHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHRcdFx0Li4uKHNlY3Rpb25OdW1iZXIgPT09IC0xID8ge30gOiB7c2VjdGlvbjogc2VjdGlvbk51bWJlcn0pLFxuXHRcdFx0XHRcdFx0Li4uKGVkaXRUYWdzLmxlbmd0aCA/IHt0YWdzOiBlZGl0VGFncy5qb2luKCd8Jyl9IDoge30pLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH07XG5cdFx0XHRcdGlmIChpc01pbm9yRWRpdCkge1xuXHRcdFx0XHRcdGVkaXRQYXlsb2FkLmNvbmZpZy5taW5vciA9ICd0cnVlJztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRlZGl0UGF5bG9hZC5jb25maWcubm90bWlub3IgPSAndHJ1ZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0YXdhaXQgcGFnZS5lZGl0KGVkaXRQYXlsb2FkKTtcblx0XHRcdH0sXG5cdFx0XHRlc2NFeGl0OiBlc2NUb0V4aXQsXG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlU2ltcGxlUmVkaXJlY3RCdXR0b25DbGlja2VkID0gYXN5bmMgKCkgPT4ge1xuXHRcdFVJLnNob3dTaW1wbGVSZWRpcmVjdFBhbmVsKHtcblx0XHRcdG9uRWRpdDogYXN5bmMgKHt0aXRsZSwgc3VtbWFyeSwgZm9yY2VPdmVyd3JpdGUgPSBmYWxzZX0pID0+IHtcblx0XHRcdFx0Y29uc3QgcGFnZSA9IGF3YWl0IGdldFBhZ2Uoe3RpdGxlfSk7XG5cdFx0XHRcdGNvbnN0IGN1cnJlbnRQYWdlTmFtZSA9IENvbnN0YW50cy5jdXJyZW50UGFnZU5hbWU7XG5cdFx0XHRcdGlmIChzdW1tYXJ5ID09ICcnKSB7XG5cdFx0XHRcdFx0c3VtbWFyeSA9IGkxOG4udHJhbnNsYXRlKCdyZWRpcmVjdF9mcm9tX3N1bW1hcnknLCBbdGl0bGUsIGN1cnJlbnRQYWdlTmFtZV0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IHBheWxvYWQgPSB7XG5cdFx0XHRcdFx0Y29udGVudDogYCNSRURJUkVDVCBbWyR7Y3VycmVudFBhZ2VOYW1lfV1dYCxcblx0XHRcdFx0XHRjb25maWc6IHtcblx0XHRcdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fTtcblx0XHRcdFx0aWYgKCFmb3JjZU92ZXJ3cml0ZSkge1xuXHRcdFx0XHRcdHBheWxvYWQuY29uZmlnLmNyZWF0ZW9ubHkgPSAndHJ1ZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0YXdhaXQgcGFnZS5lZGl0KHBheWxvYWQpO1xuXHRcdFx0fSxcblx0XHRcdG9uU3VjY2VzczogKHt0aXRsZX0pID0+IHtcblx0XHRcdFx0bG9jYXRpb24uaHJlZiA9IENvbnN0YW50cy5hcnRpY2xlUGF0aC5yZXBsYWNlKC9cXCQxL2dpLCB0aXRsZSk7XG5cdFx0XHR9LFxuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZVNldHRpbmdzQnV0dG9uQ2xpY2tlZCA9IGFzeW5jICgpID0+IHtcblx0XHRVSS5zaG93U2V0dGluZ3NQYW5lbCh7XG5cdFx0XHRvblN1Ym1pdDogKHtzZXR0aW5nc30pID0+IHtcblx0XHRcdFx0SlNPTi5wYXJzZShzZXR0aW5ncyk7XG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdXaWtpcGx1c19TZXR0aW5ncycsIHNldHRpbmdzKTtcblx0XHRcdH0sXG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlUHJlbG9hZCA9IGFzeW5jICh7c2VjdGlvbk51bWJlcn0pID0+IHtcblx0XHRhd2FpdCBjdXJyZW50UGFnZS5nZXRXaWtpVGV4dCh7XG5cdFx0XHRzZWN0aW9uOiBzZWN0aW9uTnVtYmVyLFxuXHRcdH0pO1xuXHR9O1xuXG5cdFVJLmluc2VydFRvcFF1aWNrRWRpdEVudHJ5KGhhbmRsZVF1aWNrRWRpdEJ1dHRvbkNsaWNrZWQpO1xuXHRVSS5pbnNlcnRTZWN0aW9uUXVpY2tFZGl0RW50cmllcyhoYW5kbGVRdWlja0VkaXRCdXR0b25DbGlja2VkKTtcblx0VUkuaW5zZXJ0TGlua0VkaXRFbnRyaWVzKGhhbmRsZVF1aWNrRWRpdEJ1dHRvbkNsaWNrZWQpO1xuXHRVSS5pbnNlcnRTaW1wbGVSZWRpcmVjdEJ1dHRvbihoYW5kbGVTaW1wbGVSZWRpcmVjdEJ1dHRvbkNsaWNrZWQpO1xuXHRVSS5pbnNlcnRTZXR0aW5nc1BhbmVsQnV0dG9uKGhhbmRsZVNldHRpbmdzQnV0dG9uQ2xpY2tlZCk7XG5cdFVJLmJpbmRQcmVsb2FkRXZlbnRzKGhhbmRsZVByZWxvYWQpO1xufSk7XG5cbmV4cG9ydCB7fTtcbiIsICJpbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQkKHdpbmRvdykub24oJ3Jlc2l6ZScsICgpOiB2b2lkID0+IHtcblx0XHRjb25zdCB3aW5kb3dXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuXHRcdGNvbnN0ICR3aWtpcGx1c0ludGVyYm94ID0gJGJvZHkuZmluZCgnLldpa2lwbHVzLUludGVyQm94Jyk7XG5cdFx0aWYgKCR3aWtpcGx1c0ludGVyYm94KSB7XG5cdFx0XHQkd2lraXBsdXNJbnRlcmJveC5jc3MoJ21heC13aWR0aCcsIGBjYWxjKCR7d2luZG93V2lkdGh9cHggLSAyZW0pYCk7XG5cdFx0fVxuXHR9KTtcbn0pO1xuIiwgImltcG9ydCAnLi9XaWtpcGx1cy5sZXNzJztcblxuKGZ1bmN0aW9uIFdpa2lwbHVzKCk6IHZvaWQge1xuXHRjb25zdCB7d2dBY3Rpb24sIHdnSXNBcnRpY2xlfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKHdnQWN0aW9uICE9PSAndmlldycgfHwgIXdnSXNBcnRpY2xlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgbG9hZGVyID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdGNvbnN0IHsndmlzdWFsZWRpdG9yLWVuYWJsZSc6IGlzVmVFbmFibGV9ID0gbXcudXNlci5vcHRpb25zLmdldCgpIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuXG5cdFx0Lyogc2VlIDxodHRwczovL2dpdGh1Yi5jb20vV2lraXBsdXMvV2lraXBsdXMvaXNzdWVzLzY1PiAqL1xuXHRcdGlmIChpc1ZlRW5hYmxlKSB7XG5cdFx0XHRhd2FpdCBtdy5sb2FkZXIudXNpbmcoJ2V4dC52aXN1YWxFZGl0b3IuY29yZScpO1xuXHRcdH1cblxuXHRcdGF3YWl0IGltcG9ydCgnLi9tb2R1bGVzL2luZGV4Jyk7XG5cdFx0YXdhaXQgaW1wb3J0KCcuL3Jlc2l6ZScpO1xuXHR9O1xuXG5cdHZvaWQgbG9hZGVyKCk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBLDZGQUFBQSxTQUFBO0FBQUE7QUFDQSxRQUFJLFFBQVEsU0FBVSxJQUFJO0FBQ3hCLGFBQU8sTUFBTSxHQUFHLFNBQVMsUUFBUTtBQUFBLElBQ25DO0FBR0EsSUFBQUEsUUFBTztBQUFBLElBRUwsTUFBTSxPQUFPLGNBQWMsWUFBWSxVQUFVLEtBQ2pELE1BQU0sT0FBTyxVQUFVLFlBQVksTUFBTTtBQUFBLElBRXpDLE1BQU0sT0FBTyxRQUFRLFlBQVksSUFBSSxLQUNyQyxNQUFNLE9BQU8sVUFBVSxZQUFZLE1BQU0sS0FDekMsTUFBTSxPQUFPLFdBQVEsWUFBWSxPQUFJO0FBQUEsSUFFcEMsMkJBQVk7QUFBRSxhQUFPO0FBQUEsSUFBTSxFQUFHLEtBQUssU0FBUyxhQUFhLEVBQUU7QUFBQTtBQUFBOzs7QUNmOUQ7QUFBQSx1RkFBQUMsU0FBQTtBQUFBO0FBQ0EsSUFBQUEsUUFBTyxVQUFVLFNBQVUsTUFBTTtBQUMvQixVQUFJO0FBQ0YsZUFBTyxDQUFDLENBQUMsS0FBSztBQUFBLE1BQ2hCLFNBQVMsT0FBTztBQUNkLGVBQU87QUFBQSxNQUNUO0FBQUEsSUFDRjtBQUFBO0FBQUE7OztBQ1BBO0FBQUEsNkZBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksUUFB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QUFBK0MsUUFBQSxFQUFBMEwsS0FBQSxPQUFBSCxZQUFBLEdBQUFGLGVBQUE7SUFDUCxDQUFBO0FBQUEsV0FBQSxTQVZNak8sVUFBQTtBQUFBLGFBQUE2TyxPQUFBL0MsTUFBQSxNQUFBQyxTQUFBO0lBQUE7RUFBQSxFQUFBO0FBWU4sT0FBSy9MLE9BQU87QUFDYixHQUFHOyIsCiAgIm5hbWVzIjogWyJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJuYXZpZ2F0b3IiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJTeW1ib2wiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJkb2N1bWVudCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIlR5cGVFcnJvciIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiJCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImFjdGl2ZVhEb2N1bWVudCIsICJtb2R1bGUiLCAiJCIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiJCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIkNvbnN0YW50cyIsICJjb25zdGFudHNfZGVmYXVsdCIsICJpbml0X2NvbnN0YW50cyIsICJfX2VzbSIsICJ2ZXJzaW9uIiwgImlzQXJ0aWNsZSIsICJ3aW5kb3ciLCAibXciLCAiY29uZmlnIiwgImdldCIsICJjdXJyZW50UGFnZU5hbWUiLCAicmVwbGFjZSIsICJhcnRpY2xlSWQiLCAicmV2aXNpb25JZCIsICJsYXRlc3RSZXZpc2lvbklkIiwgImFydGljbGVQYXRoIiwgInNjcmlwdFBhdGgiLCAiYWN0aW9uIiwgInNraW4iLCAidXNlckdyb3VwcyIsICJ3aWtpSWQiLCAidXNlckFnZW50IiwgImNvbmNhdCIsICJSZXF1ZXN0cyIsICJyZXF1ZXN0c19kZWZhdWx0IiwgImluaXRfcmVxdWVzdHMiLCAiYmFzZSIsICJsb2NhdGlvbiIsICJwcm90b2NvbCIsICJob3N0IiwgInF1ZXJ5IiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInVybCIsICJVUkwiLCAiX2kiLCAiX09iamVjdCRrZXlzIiwgIk9iamVjdCIsICJrZXlzIiwgImxlbmd0aCIsICJrZXkiLCAic2VhcmNoUGFyYW1zIiwgImFwcGVuZCIsICJyZXNwb25zZSIsICJmZXRjaCIsICJjcmVkZW50aWFscyIsICJoZWFkZXJzIiwgImpzb24iLCAicG9zdCIsICJwYXlsb2FkIiwgImZvcm0iLCAiRm9ybURhdGEiLCAiX2kyIiwgIl9PYmplY3QkZW50cmllcyIsICJlbnRyaWVzIiwgInZhbHVlIiwgIm1ldGhvZCIsICJib2R5IiwgIkkxOG4iLCAiaTE4bl9kZWZhdWx0IiwgImluaXRfaTE4biIsICJsYW5ndWFnZSIsICJpMThuRGF0YSIsICJzZXNzaW9uVXBkYXRlTG9nIiwgImNvbnN0cnVjdG9yIiwgIkpTT04iLCAicGFyc2UiLCAibG9jYWxTdG9yYWdlIiwgIm5hdmlnYXRvciIsICJ0b0xvd2VyQ2FzZSIsICJicm93c2VyTGFuZ3VhZ2UiLCAiaTE4bkNhY2hlIiwgImdldEl0ZW0iLCAiX2kzIiwgIl9PYmplY3Qka2V5czIiLCAic2V0SXRlbSIsICJ0cmFuc2xhdGUiLCAicGxhY2Vob2xkZXJzIiwgInJlc3VsdCIsICJsb2FkTGFuZ3VhZ2UiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImluZGV4IiwgInBsYWNlaG9sZGVyIiwgImVyciIsICJlIiwgImYiLCAiX3RoaXMiLCAiaW5jbHVkZXMiLCAibm93VmVyc2lvbiIsICJwdXNoIiwgIl9fdmVyc2lvbiIsICJjb25zb2xlIiwgImluZm8iLCAic3RyaW5naWZ5IiwgIldpa2lwbHVzRXJyb3IiLCAiTG9nIiwgImxvZ19kZWZhdWx0IiwgImluaXRfbG9nIiwgIkVycm9yIiwgIm1lc3NhZ2UiLCAiY29kZSIsICJkZWJ1ZyIsICJlcnJvciIsICJlcnJvckNvZGUiLCAicGF5bG9hZHMiLCAidGVtcGxhdGUiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAiaSIsICJ2IiwgIlJlZ0V4cCIsICJXaWtpIiwgIndpa2lfZGVmYXVsdCIsICJpbml0X3dpa2kiLCAicGFnZUluZm9DYWNoZSIsICJnZXRFZGl0VG9rZW4iLCAibWV0YSIsICJmb3JtYXQiLCAidG9rZW5zIiwgImNzcmZ0b2tlbiIsICJnZXRQYWdlSW5mbyIsICJ0aXRsZSIsICJfdGhpczIiLCAicGFyYW1zIiwgInByb3AiLCAicnZwcm9wIiwgInJldmlkcyIsICJ0aW1lc3RhbXAiLCAicmV2aWQiLCAidGl0bGVzIiwgInBhZ2VzIiwgInBhZ2VJbmZvIiwgInJldmlzaW9ucyIsICJnZXRXaWtpVGV4dCIsICJzZWN0aW9uIiwgInJ2c2VjdGlvbiIsICJwYXJzZVdpa2lUZXh0IiwgIndpa2l0ZXh0IiwgInRleHQiLCAicHN0IiwgImVkaXQiLCAiY29udGVudCIsICJlZGl0VG9rZW4iLCAiYWRkaXRpb25hbENvbmZpZyIsICJ0b2tlbiIsICJiYXNldGltZXN0YW1wIiwgIndhcm5pbmciLCAiZ2V0TGF0ZXN0UmV2aXNpb25JZEZvclBhZ2UiLCAiX3RoaXMzIiwgIlBhZ2UiLCAicGFnZV9kZWZhdWx0IiwgImluaXRfcGFnZSIsICJpbml0ZWQiLCAiaXNOZXdQYWdlIiwgInNlY3Rpb25DYWNoZSIsICJpbml0IiwgIl90aGlzNCIsICJwcm9taXNlQXJyIiwgImdldFRpbWVzdGFtcCIsICJQcm9taXNlIiwgImFsbCIsICJfdGhpczUiLCAibG9hZGVyIiwgInVzaW5nIiwgInVzZXIiLCAiX3RoaXM2IiwgIl90aGlzNyIsICJzZWMiLCAid2lraVRleHQiLCAiX3RoaXM4IiwgIl90aGlzOSIsICJjcmVhdGVvbmx5IiwgIk5vdGlmaWNhdGlvbiIsICJub3RpZmljYXRpb25fZGVmYXVsdCIsICJpbml0X25vdGlmaWNhdGlvbiIsICIkIiwgImRpc3BsYXkiLCAidHlwZSIsICJjYWxsYmFjayIsICJhZGRDbGFzcyIsICJmaW5kIiwgImxhc3QiLCAiZmFkZUluIiwgImJpbmQiLCAiY2xlYXIiLCAic2VsZiIsICJvbiIsICJzbGlkZUxlZnQiLCAic3VjY2VzcyIsICJjaGlsZHJlbiIsICJmaXJzdCIsICJmYWRlT3V0IiwgInJlbW92ZSIsICJzZXRUaW1lb3V0IiwgImVtcHR5IiwgImVhY2giLCAiZWxlIiwgImRlbGF5IiwgInNwZWVkIiwgImNzcyIsICJhbmltYXRlIiwgImxlZnQiLCAic2xlZXAiLCAic2xlZXBfZGVmYXVsdCIsICJpbml0X3NsZWVwIiwgInRpbWUiLCAicmVzb2x2ZSIsICJwYXJzZVF1ZXJ5IiwgInJlZyIsICJtYXRjaCIsICJleGVjIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJpbml0X2hlbHBlcnMiLCAiVUkiLCAidWlfZGVmYXVsdCIsICJpbml0X3VpIiwgInF1aWNrRWRpdFBhbmVsVmlzaWJsZSIsICJzY3JvbGxUb3AiLCAiY3JlYXRlRGlhbG9nQm94IiwgIndpZHRoIiwgImNsaWVudFdpZHRoIiwgImlubmVyV2lkdGgiLCAiY2xpZW50SGVpZ2h0IiwgImlubmVySGVpZ2h0IiwgImRpYWxvZ1dpZHRoIiwgIk1hdGgiLCAibWluIiwgImRpYWxvZ0JveCIsICJ0b3AiLCAiZG9jdW1lbnQiLCAiaHRtbCIsICJwYXJlbnQiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJvbmJlZm9yZXVubG9hZCIsICJiaW5kRHJhZ2dpbmciLCAiZWxlbWVudCIsICJtb3VzZWRvd24iLCAiYmFzZVgiLCAiY2xpZW50WCIsICJiYXNlWSIsICJjbGllbnRZIiwgImJhc2VPZmZzZXRYIiwgIm9mZnNldCIsICJiYXNlT2Zmc2V0WSIsICJlMiIsICJ1bmJpbmQiLCAib2ZmIiwgImFkZEZ1bmN0aW9uQnV0dG9uIiwgImlkIiwgImJ1dHRvbiIsICJhdHRyIiwgImluc2VydFNpbXBsZVJlZGlyZWN0QnV0dG9uIiwgIm9uQ2xpY2siLCAiaW5zZXJ0U2V0dGluZ3NQYW5lbEJ1dHRvbiIsICJpbnNlcnRUb3BRdWlja0VkaXRFbnRyeSIsICJ0b3BCdG4iLCAidG9wQnRuTGluayIsICJzZWN0aW9uTnVtYmVyIiwgInRhcmdldFBhZ2VOYW1lIiwgImFmdGVyIiwgImluc2VydFNlY3Rpb25RdWlja0VkaXRFbnRyaWVzIiwgInNlY3Rpb25CdG4iLCAiZWRpdFVSTCIsICJzZWN0aW9uVGFyZ2V0TmFtZSIsICJjbG9uZU5vZGUiLCAicHJldiIsICJjbG9uZSIsICJzZWN0aW9uTmFtZSIsICJ0cmltIiwgIl9zZWN0aW9uQnRuIiwgImJlZm9yZSIsICJpbnNlcnRMaW5rRWRpdEVudHJpZXMiLCAiaHJlZiIsICJjbGFzcyIsICJfcGFyYW1zJHNlY3Rpb24iLCAic2hvd1F1aWNrRWRpdFBhbmVsIiwgInN1bW1hcnkiLCAib25CYWNrIiwgIm9uUGFyc2UiLCAib25FZGl0IiwgImVzY0V4aXQiLCAiaGlkZVF1aWNrRWRpdFBhbmVsIiwgImJhY2tCdG4iLCAianVtcEJ0biIsICJpbnB1dEJveCIsICJwcmV2aWV3Qm94IiwgInN1bW1hcnlCb3giLCAiZWRpdFN1Ym1pdEJ0biIsICJwcmV2aWV3U3VibWl0QnRuIiwgImlzTWlub3JFZGl0IiwgIm1hcmdpbiIsICJlZGl0Qm9keSIsICJ2YWwiLCAicHJlbG9hZEJhbm5lciIsICJ0aW1lciIsICJEYXRlIiwgIm5vdyIsICJlZGl0QmFubmVyIiwgImlzIiwgInVzZVRpbWUiLCAidG9TdHJpbmciLCAicmVsb2FkIiwgImxvZyIsICJjdHJsS2V5IiwgIndoaWNoIiwgInNoaWZ0S2V5IiwgInRyaWdnZXIiLCAicHJldmVudERlZmF1bHQiLCAic3RvcFByb3BhZ2F0aW9uIiwgInNob3dTaW1wbGVSZWRpcmVjdFBhbmVsIiwgIm9uU3VjY2VzcyIsICJfdGhpczEwIiwgImlucHV0IiwgInN1bW1hcnlJbnB1dFRpdGxlIiwgInN1bW1hcnlJbnB1dCIsICJhcHBseUJ0biIsICJjYW5jZWxCdG4iLCAiY29udGludWVCdG4iLCAiZGlhbG9nIiwgImZvcmNlT3ZlcndyaXRlIiwgImhpZGVTaW1wbGVSZWRpcmVjdFBhbmVsIiwgImVycm9yMiIsICJzaG93U2V0dGluZ3NQYW5lbCIsICJvblN1Ym1pdCIsICJfdGhpczExIiwgIldpa2lwbHVzX1NldHRpbmdzIiwgInNldHRpbmdzIiwgInNhdmVkQmFubmVyIiwgImhpZGVTZXR0aW5nc1BhbmVsIiwgImJpbmRQcmVsb2FkRXZlbnRzIiwgIm9uUHJlbG9hZCIsICJTZXR0aW5ncyIsICJzZXR0aW5nc19kZWZhdWx0IiwgImluaXRfc2V0dGluZ3MiLCAiZ2V0U2V0dGluZyIsICJvYmplY3QiLCAidyIsICJjdXN0b21TZXR0aW5nRnVuY3Rpb24iLCAiRnVuY3Rpb24iLCAiX2k0IiwgIl9PYmplY3Qka2V5czMiLCAia2V5MiIsICJpbml0X3dpa2lwbHVzIiwgIm1vZHVsZXNfZXhwb3J0cyIsICJpbml0X21vZHVsZXMiLCAiUGFnZXMiLCAiaXNDdXJyZW50UGFnZUVtcHR5IiwgImdldFBhZ2UiLCAiX3JlZjciLCAicmV2aXNpb25JZDIiLCAibmV3UGFnZSIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiX1dpa2lwbHVzUGFnZXMiLCAiY3VycmVudFBhZ2UiLCAiaGFuZGxlUXVpY2tFZGl0QnV0dG9uQ2xpY2tlZCIsICJfcmVmOCIsICJpc090aGVyUGFnZSIsICJwYWdlIiwgImN1c3RvbVN1bW1hcnkiLCAic2VjdGlvbkNvbnRlbnQiLCAiaXNFZGl0SGlzdG9yeVJldmlzaW9uIiwgImVzY1RvRXhpdCIsICJjdXN0b21FZGl0VGFncyIsICJkZWZhdWx0RWRpdFRhZ3MiLCAiZWRpdFRhZ3MiLCAiY2xlYXJUaW1lb3V0IiwgInNob3VsZFNob3dDcmVhdGVQYWdlVGlwIiwgIl9yZWY5IiwgInN1bW1hcnkyIiwgImVkaXRQYXlsb2FkIiwgInRhZ3MiLCAiam9pbiIsICJtaW5vciIsICJub3RtaW5vciIsICJfeDIiLCAiaGFuZGxlU2ltcGxlUmVkaXJlY3RCdXR0b25DbGlja2VkIiwgIl9yZWYxMCIsICJfcmVmMTEiLCAiY3VycmVudFBhZ2VOYW1lMiIsICJfeDMiLCAiaGFuZGxlU2V0dGluZ3NCdXR0b25DbGlja2VkIiwgIl9yZWYxMiIsICJoYW5kbGVQcmVsb2FkIiwgIl9yZWYxMyIsICJfeDQiLCAicmVzaXplX2V4cG9ydHMiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiaW5pdF9yZXNpemUiLCAicmVxdWlyZSIsICJnZXRCb2R5IiwgInRoZW4iLCAiJGJvZHkiLCAid2luZG93V2lkdGgiLCAiJHdpa2lwbHVzSW50ZXJib3giLCAiV2lraXBsdXMiLCAid2dBY3Rpb24iLCAid2dJc0FydGljbGUiLCAiX3JlZjE0IiwgImlzVmVFbmFibGUiLCAib3B0aW9ucyJdCn0K
