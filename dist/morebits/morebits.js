/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://github.com/wikimedia-gadgets/twinkle-core/tree/master/morebits}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/morebits}
 * @license CC-BY-SA-4.0 {@link https://youshou.wiki/wiki/H:CC-BY-SA-4.0}
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
    $({ global: true, constructor: true, forced: FORCED }, {
      Iterator: IteratorConstructor
    });
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

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/define-built-ins.js
var require_define_built_ins = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/define-built-ins.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/create-iter-result-object.js"(exports, module2) {
    "use strict";
    module2.exports = function(value, done) {
      return { value, done };
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

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/iterator-close-all.js
var require_iterator_close_all = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/iterator-close-all.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/iterator-create-proxy.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/call-with-safe-iteration-closing.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/iterator-helper-throws-on-invalid-iterator.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/iterator-helper-without-closing-on-early-error.js"(exports, module2) {
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
    var $ = require_export();
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
    $({ target: "Iterator", proto: true, real: true, forced: FORCED }, {
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

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/modules/es.iterator.find.js
var require_es_iterator_find = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/modules/es.iterator.find.js"() {
    "use strict";
    var $ = require_export();
    var call = require_function_call();
    var iterate = require_iterate();
    var aCallable = require_a_callable();
    var anObject = require_an_object();
    var getIteratorDirect = require_get_iterator_direct();
    var iteratorClose = require_iterator_close();
    var iteratorHelperWithoutClosingOnEarlyError = require_iterator_helper_without_closing_on_early_error();
    var findWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError("find", TypeError);
    $({ target: "Iterator", proto: true, real: true, forced: findWithoutClosingOnEarlyError }, {
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

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/modules/es.iterator.map.js
var require_es_iterator_map = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/modules/es.iterator.map.js"() {
    "use strict";
    var $ = require_export();
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
    $({ target: "Iterator", proto: true, real: true, forced: FORCED }, {
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

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/modules/es.iterator.some.js
var require_es_iterator_some = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/modules/es.iterator.some.js"() {
    "use strict";
    var $ = require_export();
    var call = require_function_call();
    var iterate = require_iterate();
    var aCallable = require_a_callable();
    var anObject = require_an_object();
    var getIteratorDirect = require_get_iterator_direct();
    var iteratorClose = require_iterator_close();
    var iteratorHelperWithoutClosingOnEarlyError = require_iterator_helper_without_closing_on_early_error();
    var someWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError("some", TypeError);
    $({ target: "Iterator", proto: true, real: true, forced: someWithoutClosingOnEarlyError }, {
      some: function some(predicate) {
        anObject(this);
        try {
          aCallable(predicate);
        } catch (error) {
          iteratorClose(this, "throw", error);
        }
        if (someWithoutClosingOnEarlyError) return call(someWithoutClosingOnEarlyError, this, predicate);
        var record = getIteratorDirect(this);
        var counter = 0;
        return iterate(record, function(value, stop) {
          if (predicate(value, counter++)) return stop();
        }, { IS_RECORD: true, INTERRUPTED: true }).stopped;
      }
    });
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/modules/es.iterator.to-array.js
var require_es_iterator_to_array = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/modules/es.iterator.to-array.js"() {
    "use strict";
    var $ = require_export();
    var anObject = require_an_object();
    var iterate = require_iterate();
    var getIteratorDirect = require_get_iterator_direct();
    var push = [].push;
    $({ target: "Iterator", proto: true, real: true }, {
      toArray: function toArray() {
        var result = [];
        iterate(getIteratorDirect(anObject(this)), push, { that: result, IS_RECORD: true });
        return result;
      }
    });
  }
});

// dist/morebits/morebits.js
require_es_iterator_constructor();
require_es_iterator_filter();
require_es_iterator_find();
require_es_iterator_map();
require_es_iterator_some();
require_es_iterator_to_array();
var _templateObject;
var _templateObject2;
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
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
//! src/morebits/morebits.js
var import_ext_gadget = require("ext.gadget.Util");
/*! Twinkle.js - morebits.js */
(function morebits($) {
  const Morebits = {};
  window.Morebits = Morebits;
  Morebits.l10n = {
    /**
     * Local aliases for "redirect" magic word.
     * Check using api.php?action=query&format=json&meta=siteinfo&formatversion=2&siprop=magicwords
     */
    redirectTagAliases: ["#REDIRECT", "#重定向"],
    /**
     * Takes a string as argument and checks if it is a timestamp or not
     * If not, it returns null. If yes, it returns an array of integers
     * in the format [year, month, date, hour, minute, second]
     * which can be passed to Date.UTC()
     *
     * @param {string} str
     * @returns {number[] | null}
     */
    signatureTimestampFormat: (str) => {
      const rgxUTC = /(\d{4})年(\d{1,2})月(\d{1,2})日 \(.\) (\d{2}):(\d{2}) \(UTC\)/;
      const rgxCST = /(\d{4})年(\d{1,2})月(\d{1,2})日 \(.\) (\d{2}):(\d{2}) \(CST\)/;
      const match = rgxUTC.exec(str) || rgxCST.exec(str);
      const matchCST = rgxCST.exec(str);
      if (!match) {
        return null;
      }
      const month = Morebits.date.localeData.months.indexOf(match[4]);
      if (month === -1) {
        return null;
      }
      return matchCST ? [match[1], match[2] - 1, match[3], match[4] - 8, match[5]] : [match[1], match[2] - 1, match[3], match[4], match[5]];
    }
  };
  Morebits.userIsInGroup = (group) => {
    return mw.config.get("wgUserGroups").includes(group);
  };
  Morebits.userIsSysop = Morebits.userIsInGroup("sysop") || Morebits.userIsInGroup("steward") || Morebits.userIsInGroup("qiuwen");
  Morebits.sanitizeIPv6 = (address) => {
    console.warn("[Morebits] NOTE: Morebits.sanitizeIPv6 was renamed to Morebits.ip.sanitizeIPv6 in February 2021, please use that instead");
    return Morebits.ip.sanitizeIPv6(address);
  };
  Morebits.isPageRedirect = () => {
    return !!(mw.config.get("wgIsRedirect") || document.querySelector("#softredirect") || document.querySelector(".box-RfD") || document.querySelector(".box-Redirect_category_shell"));
  };
  Morebits.pageNameNorm = mw.config.get("wgPageName").replace(/_/g, " ");
  Morebits.pageNameRegex = (pageName) => {
    if (pageName === "") {
      return "";
    }
    const [firstChar] = pageName;
    const remainder = Morebits.string.escapeRegExp(pageName.slice(1));
    if (mw.Title.phpCharToUpper(firstChar) !== firstChar.toLowerCase()) {
      return "[".concat(mw.Title.phpCharToUpper(firstChar)).concat(firstChar.toLowerCase(), "]").concat(remainder);
    }
    return Morebits.string.escapeRegExp(firstChar) + remainder;
  };
  Morebits.createHtml = (input) => {
    const fragment = document.createDocumentFragment();
    if (!input) {
      return fragment;
    }
    input = (0, import_ext_gadget.generateArray)(input);
    var _iterator = _createForOfIteratorHelper(input), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        const element = _step.value;
        if (element instanceof Node) {
          fragment.appendChild(element);
        } else {
          var _iterator2 = _createForOfIteratorHelper($.parseHTML(Morebits.createHtml.renderWikilinks(element))), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              const node = _step2.value;
              fragment.appendChild(node);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return fragment;
  };
  Morebits.createHtml.renderWikilinks = (text) => {
    const ub = new Morebits.unbinder(text);
    ub.unbind("<code>", "</code>");
    ub.content = ub.content.replace(/\[\[:?(?:([^|\]]+?)\|)?([^\]|]+?)\]\]/g, (_, target, text_) => {
      target || (target = text_);
      return '<a rel="noopener" target="_blank" href="'.concat(mw.util.getUrl(target), '" title="').concat(target.replace(/"/g, "&#34;"), '">').concat(text_, "</a>");
    });
    return ub.rebind();
  };
  Morebits.namespaceRegex = (namespaces) => {
    namespaces = (0, import_ext_gadget.generateArray)(namespaces);
    const aliases = [];
    let regex;
    for (var _i = 0, _Object$entries = Object.entries(mw.config.get("wgNamespaceIds")); _i < _Object$entries.length; _i++) {
      const [name, number] = _Object$entries[_i];
      if (namespaces.includes(number)) {
        aliases[aliases.length] = [...name].map((char) => {
          return Morebits.pageNameRegex(char);
        }).join("");
      }
    }
    switch (aliases.length) {
      case 0:
        regex = "";
        break;
      case 1:
        [regex] = aliases;
        break;
      default:
        regex = "(?:".concat(aliases.join("|"), ")");
        break;
    }
    return regex;
  };
  Morebits.quickForm = function(event, eventType) {
    this.root = new Morebits.quickForm.element({
      type: "form",
      event,
      eventType
    });
  };
  Morebits.quickForm.prototype.render = function() {
    const ret = this.root.render();
    ret.names = {};
    return ret;
  };
  Morebits.quickForm.prototype.append = function(data) {
    return this.root.append(data);
  };
  Morebits.quickForm.element = function(data) {
    this.data = data;
    this.childs = [];
  };
  Morebits.quickForm.element.id = 0;
  Morebits.quickForm.element.prototype.append = function(data) {
    let child;
    if (data instanceof Morebits.quickForm.element) {
      child = data;
    } else {
      child = new Morebits.quickForm.element(data);
    }
    this.childs[this.childs.length] = child;
    return child;
  };
  Morebits.quickForm.element.prototype.render = function(internalSubgroupId) {
    const currentNode = this.compute(this.data, internalSubgroupId);
    var _iterator3 = _createForOfIteratorHelper(this.childs), _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
        const child = _step3.value;
        currentNode[1].appendChild(child.render());
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return currentNode[0];
  };
  Morebits.quickForm.element.prototype.compute = function(data, inId) {
    let node;
    let childContainer = null;
    let label;
    const id = "".concat(inId ? "".concat(inId, "_") : "", "node_").concat(Morebits.quickForm.element.id++);
    if (data.adminonly && !Morebits.userIsSysop) {
      data.type = "hidden";
    }
    let i;
    let current;
    let subnode;
    switch (data.type) {
      case "form":
        node = document.createElement("form");
        node.className = "quickform";
        node.setAttribute("action", "javascript:void(0);");
        if (data.event) {
          node.addEventListener(data.eventType || "submit", data.event, false);
        }
        break;
      case "fragment":
        node = document.createDocumentFragment();
        return [node, node];
      case "select": {
        node = document.createElement("div");
        node.setAttribute("id", "div_".concat(id));
        if (data.label) {
          label = node.appendChild(document.createElement("label"));
          label.setAttribute("for", id);
          label.appendChild(Morebits.createHtml(data.label));
        }
        const select = node.appendChild(document.createElement("select"));
        if (data.event) {
          select.addEventListener("change", data.event, false);
        }
        if (data.multiple) {
          select.setAttribute("multiple", "multiple");
        }
        if (data.size) {
          select.setAttribute("size", data.size);
        }
        if (data.disabled) {
          select.disabled = true;
        }
        select.setAttribute("name", data.name);
        if (data.list) {
          for (i = 0; i < data.list.length; ++i) {
            current = data.list[i];
            if (current.list) {
              current.type = "optgroup";
            } else {
              current.type = "option";
            }
            subnode = this.compute(current);
            select.appendChild(subnode[0]);
          }
        }
        childContainer = select;
        break;
      }
      case "option":
        node = document.createElement("option");
        node.values = data.value;
        node.setAttribute("value", data.value);
        if (data.selected) {
          node.setAttribute("selected", "selected");
        }
        if (data.disabled) {
          node.disabled = true;
        }
        if (data.hidden) {
          node.setAttribute("hidden", "");
        }
        node.setAttribute("label", data.label);
        node.appendChild(document.createTextNode(data.label));
        break;
      case "optgroup":
        node = document.createElement("optgroup");
        node.setAttribute("label", data.label);
        if (data.list) {
          for (i = 0; i < data.list.length; ++i) {
            current = data.list[i];
            current.type = "option";
            subnode = this.compute(current);
            node.appendChild(subnode[0]);
          }
        }
        break;
      case "field":
        node = document.createElement("fieldset");
        label = node.appendChild(document.createElement("legend"));
        label.appendChild(Morebits.createHtml(data.label));
        if (data.name) {
          node.setAttribute("name", data.name);
        }
        if (data.disabled) {
          node.disabled = true;
        }
        break;
      case "checkbox":
      case "radio":
        node = document.createElement("div");
        if (data.list) {
          for (i = 0; i < data.list.length; ++i) {
            const curId = "".concat(id, "_").concat(i);
            current = data.list[i];
            let curDiv;
            if (current.type === "header") {
              curDiv = node.appendChild(document.createElement("h6"));
              curDiv.appendChild(document.createTextNode(current.label));
              if (current.tooltip) {
                Morebits.quickForm.element.generateTooltip(curDiv, current);
              }
              continue;
            }
            curDiv = node.appendChild(document.createElement("div"));
            if (current.hidden) {
              curDiv.setAttribute("hidden", "");
            }
            subnode = curDiv.appendChild(document.createElement("input"));
            subnode.values = current.value;
            subnode.setAttribute("value", current.value);
            subnode.setAttribute("type", data.type);
            subnode.setAttribute("id", curId);
            subnode.setAttribute("name", current.name || data.name);
            if (current.name) {
              subnode.setAttribute("data-single", "data-single");
            }
            if (current.checked) {
              subnode.checked = true;
            }
            if (current.disabled) {
              subnode.disabled = true;
            }
            label = curDiv.appendChild(document.createElement("label"));
            label.appendChild(Morebits.createHtml(current.label));
            label.setAttribute("for", curId);
            if (current.tooltip) {
              Morebits.quickForm.element.generateTooltip(label, current);
            }
            if (current.style) {
              label.setAttribute("style", current.style);
            }
            let event;
            if (current.subgroup) {
              let tmpgroup = current.subgroup;
              tmpgroup = (0, import_ext_gadget.generateArray)(tmpgroup);
              const subgroupRaw = new Morebits.quickForm.element({
                type: "div",
                id: "".concat(id, "_").concat(i, "_subgroup")
              });
              var _iterator4 = _createForOfIteratorHelper(tmpgroup), _step4;
              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                  const el = _step4.value;
                  const newEl = {
                    ...el
                  };
                  newEl.type || (newEl.type = data.type);
                  newEl.name = "".concat(current.name || data.name, ".").concat(newEl.name);
                  subgroupRaw.append(newEl);
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
              const subgroup = subgroupRaw.render(curId);
              subgroup.className = "quickformSubgroup";
              subnode.subgroup = subgroup;
              subnode.shown = false;
              event = (e) => {
                if (e.target.checked) {
                  e.target.parentNode.appendChild(e.target.subgroup);
                  if (e.target.type === "radio") {
                    const {
                      name
                    } = e.target;
                    if (e.target.form.names[name] !== void 0) {
                      e.target.form.names[name].parentNode.removeChild(e.target.form.names[name].subgroup);
                    }
                    e.target.form.names[name] = e.target;
                  }
                } else {
                  e.target.parentNode.removeChild(e.target.subgroup);
                }
              };
              subnode.addEventListener("change", event, true);
              if (current.checked) {
                subnode.parentNode.appendChild(subgroup);
              }
            } else if (data.type === "radio") {
              event = (e) => {
                if (e.target.checked) {
                  const {
                    name
                  } = e.target;
                  if (e.target.form.names[name] !== void 0) {
                    e.target.form.names[name].parentNode.removeChild(e.target.form.names[name].subgroup);
                  }
                  delete e.target.form.names[name];
                }
              };
              subnode.addEventListener("change", event, true);
            }
            if (data.event) {
              subnode.addEventListener("change", data.event, false);
            } else if (current.event) {
              subnode.addEventListener("change", current.event, true);
            }
          }
        }
        if (data.shiftClickSupport && data.type === "checkbox") {
          Morebits.checkboxShiftClickSupport(Morebits.quickForm.getElements(node, data.name));
        }
        break;
      // input is actually a text-type, so number here inherits the same stuff
      case "number":
      case "input":
        node = document.createElement("div");
        node.setAttribute("id", "div_".concat(id));
        if (data.hidden) {
          node.setAttribute("hidden", "");
        }
        if (data.label) {
          label = node.appendChild(document.createElement("label"));
          label.appendChild(Morebits.createHtml(data.label));
          label.setAttribute("for", data.id || id);
        }
        subnode = node.appendChild(document.createElement("input"));
        if (data.value) {
          subnode.setAttribute("value", data.value);
        }
        if (data.placeholder) {
          subnode.setAttribute("placeholder", data.placeholder);
        }
        subnode.setAttribute("name", data.name);
        if (data.type === "input") {
          subnode.setAttribute("type", "text");
        } else {
          subnode.setAttribute("type", "number");
          for (var _i2 = 0, _arr = ["min", "max", "step", "list"]; _i2 < _arr.length; _i2++) {
            const att = _arr[_i2];
            if (data[att]) {
              subnode.setAttribute(att, data[att]);
            }
          }
        }
        for (var _i3 = 0, _arr2 = ["value", "size", "placeholder", "maxlength"]; _i3 < _arr2.length; _i3++) {
          const att = _arr2[_i3];
          if (data[att]) {
            subnode.setAttribute(att, data[att]);
          }
        }
        for (var _i4 = 0, _arr3 = ["disabled", "required", "readonly"]; _i4 < _arr3.length; _i4++) {
          const att = _arr3[_i4];
          if (data[att]) {
            subnode.setAttribute(att, att);
          }
        }
        if (data.event) {
          subnode.addEventListener("keyup", data.event, false);
        }
        childContainer = subnode;
        break;
      case "dyninput": {
        const min = data.min || 1;
        const max = data.max || Number.POSITIVE_INFINITY;
        node = document.createElement("div");
        label = node.appendChild(document.createElement("h5"));
        label.appendChild(Morebits.createHtml(data.label));
        const listNode = node.appendChild(document.createElement("div"));
        const more = this.compute({
          type: "button",
          label: "更多",
          disabled: min >= max,
          event: (e) => {
            const newNode = new Morebits.quickForm.element(e.target.sublist);
            e.target.area.appendChild(newNode.render());
            if (++e.target.counter >= e.target.max) {
              e.target.disabled = true;
            }
            e.stopPropagation();
          }
        });
        node.appendChild(more[0]);
        const [, moreButton] = more;
        const sublist = {
          type: "_dyninput_element",
          label: data.sublabel || data.label,
          name: data.name,
          value: data.value,
          size: data.size,
          remove: false,
          maxlength: data.maxlength,
          event: data.event
        };
        for (i = 0; i < min; ++i) {
          const elem = new Morebits.quickForm.element(sublist);
          listNode.appendChild(elem.render());
        }
        sublist.remove = true;
        sublist.morebutton = moreButton;
        sublist.listnode = listNode;
        moreButton.sublist = sublist;
        moreButton.area = listNode;
        moreButton.max = max - min;
        moreButton.counter = 0;
        break;
      }
      case "_dyninput_element":
        node = document.createElement("div");
        if (data.label) {
          label = node.appendChild(document.createElement("label"));
          label.appendChild(document.createTextNode(data.label));
          label.setAttribute("for", id);
        }
        subnode = node.appendChild(document.createElement("input"));
        if (data.value) {
          subnode.setAttribute("value", data.value);
        }
        subnode.setAttribute("name", data.name);
        subnode.setAttribute("type", "text");
        if (data.size) {
          subnode.setAttribute("size", data.size);
        }
        if (data.maxlength) {
          subnode.setAttribute("maxlength", data.maxlength);
        }
        if (data.event) {
          subnode.addEventListener("keyup", data.event, false);
        }
        if (data.remove) {
          const remove = this.compute({
            type: "button",
            label: "移除",
            event: (e) => {
              const list = e.target.listnode;
              const node_ = e.target.inputnode;
              const more = e.target.morebutton;
              list.removeChild(node_);
              --more.counter;
              more.removeAttribute("disabled");
              e.stopPropagation();
            }
          });
          node.appendChild(remove[0]);
          const [, removeButton] = remove;
          removeButton.inputnode = node;
          removeButton.listnode = data.listnode;
          removeButton.morebutton = data.morebutton;
        }
        break;
      case "hidden":
        node = document.createElement("input");
        node.setAttribute("type", "hidden");
        node.values = data.value;
        node.setAttribute("value", data.value);
        node.setAttribute("name", data.name);
        break;
      case "header":
        node = document.createElement("h5");
        node.appendChild(Morebits.createHtml(data.label));
        break;
      case "div":
        node = document.createElement("div");
        if (data.name) {
          node.setAttribute("name", data.name);
        }
        if (data.label) {
          const result = document.createElement("span");
          result.className = "quickformDescription";
          result.appendChild(Morebits.createHtml(data.label));
          node.appendChild(result);
        }
        break;
      case "submit":
        node = document.createElement("span");
        childContainer = node.appendChild(document.createElement("input"));
        childContainer.setAttribute("type", "submit");
        if (data.label) {
          childContainer.setAttribute("value", data.label);
        }
        childContainer.setAttribute("name", data.name || "submit");
        if (data.disabled) {
          childContainer.disabled = true;
        }
        break;
      case "button":
        node = document.createElement("span");
        childContainer = node.appendChild(document.createElement("input"));
        childContainer.setAttribute("type", "button");
        if (data.label) {
          childContainer.setAttribute("value", data.label);
        }
        childContainer.setAttribute("name", data.name);
        if (data.disabled) {
          childContainer.disabled = true;
        }
        if (data.event) {
          childContainer.addEventListener("click", data.event, false);
        }
        break;
      case "textarea":
        node = document.createElement("div");
        node.setAttribute("id", "div_".concat(id));
        if (data.hidden) {
          node.setAttribute("hidden", "");
        }
        if (data.label) {
          label = node.appendChild(document.createElement("h5"));
          const labelElement = document.createElement("label");
          labelElement.appendChild(Morebits.createHtml(data.label));
          labelElement.setAttribute("for", data.id || id);
          label.appendChild(labelElement);
        }
        subnode = node.appendChild(document.createElement("textarea"));
        subnode.setAttribute("name", data.name);
        if (data.cols) {
          subnode.setAttribute("cols", data.cols);
        }
        if (data.rows) {
          subnode.setAttribute("rows", data.rows);
        }
        if (data.disabled) {
          subnode.disabled = true;
        }
        if (data.required) {
          subnode.setAttribute("required", "required");
        }
        if (data.readonly) {
          subnode.setAttribute("readonly", "readonly");
        }
        if (data.value) {
          subnode.value = data.value;
        }
        if (data.placeholder) {
          subnode.placeholder = data.placeholder;
        }
        childContainer = subnode;
        break;
      default:
        throw new Error("Morebits.quickForm: unknown element type ".concat(data.type.toString()));
    }
    childContainer || (childContainer = node);
    if (data.tooltip) {
      Morebits.quickForm.element.generateTooltip(label || node, data);
    }
    if (data.extra) {
      childContainer.extra = data.extra;
    }
    if (data.$data) {
      $(childContainer).data(data.$data);
    }
    if (data.style) {
      childContainer.setAttribute("style", data.style);
    }
    if (data.className) {
      childContainer.className = childContainer.className ? "".concat(childContainer.className, " ").concat(data.className) : data.className;
    }
    childContainer.setAttribute("id", data.id || id);
    return [node, childContainer];
  };
  Morebits.quickForm.element.generateTooltip = (node, data) => {
    const tooltipButton = node.appendChild(document.createElement("span"));
    tooltipButton.className = "morebits-tooltipButton";
    tooltipButton.title = data.tooltip;
    tooltipButton.appendChild(document.createTextNode("?"));
    $(tooltipButton).tooltip({
      position: {
        my: "left top",
        at: "center bottom",
        collision: "flipfit"
      },
      // Deprecated in UI 1.12, but MW stuck on 1.9.2 indefinitely; see #398 and T71386
      tooltipClass: "morebits-ui-tooltip"
    });
  };
  Morebits.quickForm.getInputData = (form) => {
    const result = {};
    var _iterator5 = _createForOfIteratorHelper(form.elements), _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
        const field = _step5.value;
        if (field.disabled || !field.name || !field.type || field.type === "submit" || field.type === "button") {
          continue;
        }
        const fieldNameNorm = field.name.slice(field.name.indexOf(".") + 1);
        switch (field.type) {
          case "radio":
            if (field.checked) {
              result[fieldNameNorm] = field.value;
            }
            break;
          case "checkbox":
            if (field.dataset.single) {
              result[fieldNameNorm] = field.checked;
            } else {
              result[fieldNameNorm] || (result[fieldNameNorm] = []);
              if (field.checked) {
                result[fieldNameNorm][result[fieldNameNorm].length] = field.value;
              }
            }
            break;
          case "select-multiple":
            result[fieldNameNorm] = $(field).val();
            break;
          case "text":
          // falls through
          case "textarea":
            result[fieldNameNorm] = field.value.trim();
            break;
          default:
            if (field.value) {
              result[fieldNameNorm] = field.value;
            }
            break;
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    return result;
  };
  Morebits.quickForm.getElements = (form, fieldName) => {
    const $form = $(form);
    fieldName = $.escapeSelector(fieldName);
    let $elements = $form.find('[name="'.concat(fieldName, '"]'));
    if ($elements.length > 0) {
      return $elements.toArray();
    }
    $elements = $form.find("#".concat(fieldName));
    return $elements.toArray();
  };
  Morebits.quickForm.getCheckboxOrRadio = (elementArray, value) => {
    const found = elementArray.filter((element) => {
      return element.value === value;
    });
    if (found.length > 0) {
      return found[0];
    }
    return null;
  };
  Morebits.quickForm.getElementContainer = (element) => {
    if (element instanceof HTMLFieldSetElement || element instanceof HTMLDivElement || element instanceof HTMLHeadingElement) {
      return element;
    }
    return element.parentNode;
  };
  Morebits.quickForm.getElementLabelObject = (element) => {
    if (element.type === "button" || element.type === "submit" || element instanceof HTMLDivElement || element instanceof HTMLHeadingElement) {
      return element;
    } else if (element instanceof HTMLFieldSetElement) {
      return element.querySelector("legend");
    } else if (element instanceof HTMLTextAreaElement) {
      return element.parentNode.querySelector("h5");
    }
    return element.parentNode.querySelector("label");
  };
  Morebits.quickForm.getElementLabel = (element) => {
    const labelElement = Morebits.quickForm.getElementLabelObject(element);
    if (!labelElement) {
      return null;
    }
    return labelElement.firstChild.textContent;
  };
  Morebits.quickForm.setElementLabel = (element, labelText) => {
    const labelElement = Morebits.quickForm.getElementLabelObject(element);
    if (!labelElement) {
      return false;
    }
    labelElement.firstChild.textContent = labelText;
    return true;
  };
  Morebits.quickForm.overrideElementLabel = (element, temporaryLabelText) => {
    if (!element.hasAttribute("data-oldlabel")) {
      element.setAttribute("data-oldlabel", Morebits.quickForm.getElementLabel(element));
    }
    return Morebits.quickForm.setElementLabel(element, temporaryLabelText);
  };
  Morebits.quickForm.resetElementLabel = (element) => {
    if (element.hasAttribute("data-oldlabel")) {
      return Morebits.quickForm.setElementLabel(element, element.getAttribute("data-oldlabel"));
    }
    return null;
  };
  Morebits.quickForm.setElementVisibility = (element, visibility) => {
    $(element).toggle(visibility);
  };
  Morebits.quickForm.setElementTooltipVisibility = (element, visibility) => {
    $(Morebits.quickForm.getElementContainer(element)).find(".morebits-tooltipButton").toggle(visibility);
  };
  HTMLFormElement.prototype.getChecked = function(name, type) {
    const elements = this.elements[name];
    if (!elements) {
      return [];
    }
    const returnArray = [];
    let i;
    if (elements instanceof HTMLSelectElement) {
      const {
        options
      } = elements;
      for (i = 0; i < options.length; ++i) {
        if (options[i].selected) {
          if (options[i].values) {
            returnArray[returnArray.length] = options[i].values;
          } else {
            returnArray[returnArray.length] = options[i].value;
          }
        }
      }
    } else if (elements instanceof HTMLInputElement) {
      if (type && elements.type !== type) {
        return [];
      } else if (elements.checked) {
        return [elements.value];
      }
    } else {
      for (i = 0; i < elements.length; ++i) {
        if (elements[i].checked) {
          if (type && elements[i].type !== type) {
            continue;
          }
          if (elements[i].values) {
            returnArray[returnArray.length] = elements[i].values;
          } else {
            returnArray[returnArray.length] = elements[i].value;
          }
        }
      }
    }
    return returnArray;
  };
  HTMLFormElement.prototype.getUnchecked = function(name, type) {
    const elements = this.elements[name];
    if (!elements) {
      return [];
    }
    const returnArray = [];
    let i;
    if (elements instanceof HTMLSelectElement) {
      const {
        options
      } = elements;
      for (i = 0; i < options.length; ++i) {
        if (!options[i].selected) {
          if (options[i].values) {
            returnArray[returnArray.length] = options[i].values;
          } else {
            returnArray[returnArray.length] = options[i].value;
          }
        }
      }
    } else if (elements instanceof HTMLInputElement) {
      if (type && elements.type !== type) {
        return [];
      } else if (!elements.checked) {
        return [elements.value];
      }
    } else {
      for (i = 0; i < elements.length; ++i) {
        if (!elements[i].checked) {
          if (type && elements[i].type !== type) {
            continue;
          }
          if (elements[i].values) {
            returnArray[returnArray.length] = elements[i].values;
          } else {
            returnArray[returnArray.length] = elements[i].value;
          }
        }
      }
    }
    return returnArray;
  };
  Morebits.ip = {
    /**
     * Converts an IPv6 address to the canonical form stored and used by MediaWiki.
     * JavaScript translation of the {@link https://gerrit.wikimedia.org/r/plugins/gitiles/mediawiki/core/+/8eb6ac3e84ea3312d391ca96c12c49e3ad0753bb/includes/utils/IP.php#131|`IP::sanitizeIP()`}
     * function from the IPUtils library.  Addresses are verbose, uppercase,
     * normalized, and expanded to 8 words.
     *
     * @param {string} address - The IPv6 address, with or without CIDR.
     * @returns {string}
     */
    sanitizeIPv6: (address) => {
      address = address.trim();
      if (address === "") {
        return null;
      }
      if (!mw.util.isIPv6Address(address, true)) {
        return address;
      }
      address = address.toUpperCase();
      const abbrevPos = address.indexOf("::");
      if (abbrevPos !== -1) {
        const CIDRStart = address.indexOf("/");
        const addressEnd = CIDRStart === -1 ? address.length - 1 : CIDRStart - 1;
        let repeat;
        let extra;
        let pad;
        if (abbrevPos === 0) {
          repeat = "0:";
          extra = address === "::" ? "0" : "";
          pad = 9;
        } else if (abbrevPos === addressEnd - 1) {
          repeat = ":0";
          extra = "";
          pad = 9;
        } else {
          repeat = ":0";
          extra = ":";
          pad = 8;
        }
        let replacement = repeat;
        pad -= address.split(":").length - 1;
        for (let i = 1; i < pad; i++) {
          replacement += repeat;
        }
        replacement += extra;
        address = address.replace("::", replacement);
      }
      return address.replace(/(^|:)0+([0-9A-Fa-f]{1,4})/g, "$1$2");
    },
    /**
     * Determine if the given IP address is a range.  Just conjoins
     * `mw.util.isIPAddress` with and without the `allowBlock` option.
     *
     * @param {string} ip
     * @returns {boolean} - True if given a valid IP address range, false otherwise.
     */
    isRange: (ip) => {
      return mw.util.isIPAddress(ip, true) && !mw.util.isIPAddress(ip);
    },
    /**
     * Check that an IP range is within the CIDR limits.  Most likely to be useful
     * in conjunction with `wgRelevantUserName`.  CIDR limits are hardcoded as /16
     * for IPv4 and /32 for IPv6.
     *
     * @param {string} ip
     * @returns {boolean} - True for valid ranges within the CIDR limits,
     * otherwise false (ranges outside the limit, single IPs, non-IPs).
     */
    validCIDR: (ip) => {
      if (Morebits.ip.isRange(ip)) {
        const subnet = Number.parseInt(ip.match(/\/(\d{1,3})$/)[1], 10);
        if (subnet) {
          if (mw.util.isIPv6Address(ip, true)) {
            if (subnet >= 32) {
              return true;
            }
          } else if (subnet >= 16) {
            return true;
          }
        }
      }
      return false;
    },
    /**
     * Get the /64 subnet for an IPv6 address.
     *
     * @param {string} ipv6 - The IPv6 address, with or without a subnet.
     * @returns {boolean|string} - False if not IPv6 or bigger than a 64,
     * otherwise the (sanitized) /64 address.
     */
    get64: (ipv6) => {
      if (!ipv6 || !mw.util.isIPv6Address(ipv6, true)) {
        return false;
      }
      const subnetMatch = ipv6.match(/\/(\d{1,3})$/);
      if (subnetMatch && Number.parseInt(subnetMatch[1], 10) < 64) {
        return false;
      }
      ipv6 = Morebits.ip.sanitizeIPv6(ipv6);
      const ipRegex = /^((?:[0-9A-F]{1,4}:){4})(?:[0-9A-F]{1,4}:){3}[0-9A-F]{1,4}(?:\/\d{1,3})?$/;
      return ipv6.replace(ipRegex, "$1".concat("0:0:0:0/64"));
    }
  };
  Morebits.string = {
    /**
     * @param {string} str
     * @returns {string}
     */
    toUpperCaseFirstChar: (str) => {
      str = str.toString();
      return str.slice(0, 1).toUpperCase() + str.slice(1);
    },
    /**
     * @param {string} str
     * @returns {string}
     */
    toLowerCaseFirstChar: (str) => {
      str = str.toString();
      return str.slice(0, 1).toLowerCase() + str.slice(1);
    },
    /**
     * Gives an array of substrings of `str` - starting with `start` and
     * ending with `end` - which is not in `skiplist`.  Intended for use
     * on wikitext with templates or links.
     *
     * @param {string} str
     * @param {string} start
     * @param {string} end
     * @param {(string[]|string)} [skiplist]
     * @returns {string[]}
     * @throws If the `start` and `end` strings aren't of the same length.
     * @throws If `skiplist` isn't an array or string
     */
    splitWeightedByKeys: (str, start, end, skiplist) => {
      if (start.length !== end.length) {
        throw new Error("start marker and end marker must be of the same length");
      }
      let level = 0;
      let initial = null;
      const result = [];
      if (!Array.isArray(skiplist)) {
        if (skiplist === void 0) {
          skiplist = [];
        } else if (typeof skiplist === "string") {
          skiplist = [skiplist];
        } else {
          throw new TypeError("non-applicable skiplist parameter");
        }
      }
      for (let i = 0; i < str.length; ++i) {
        var _iterator6 = _createForOfIteratorHelper(skiplist), _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
            const element = _step6.value;
            if (str.slice(i, i + element.length) === element) {
              i += element.length - 1;
              continue;
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
        if (str.slice(i, i + start.length) === start) {
          if (initial === null) {
            initial = i;
          }
          ++level;
          i += start.length - 1;
        } else if (str.slice(i, i + end.length) === end) {
          --level;
          i += end.length - 1;
        }
        if (!level && initial !== null) {
          result[result.length] = str.slice(initial, i + 1);
          initial = null;
        }
      }
      return result;
    },
    /**
     * Formats freeform "reason" (from a textarea) for deletion/other
     * templates that are going to be substituted, (e.g. PROD, XFD, RPP).
     * Handles `|` outside a nowiki tag.
     * Optionally, also adds a signature if not present already.
     *
     * @param {string} str
     * @param {boolean} [addSig]
     * @returns {string}
     */
    formatReasonText: (str, addSig) => {
      let reason = (str || "").toString().trim();
      const unbinder = new Morebits.unbinder(reason);
      unbinder.unbind("<no".concat("wiki", ">"), "</no".concat("wiki", ">"));
      unbinder.content = unbinder.content.replace(/\|/g, "{{".concat("subst:", "!}}"));
      reason = unbinder.rebind();
      if (addSig) {
        const sig = "~~".concat("~~");
        const sigIndex = reason.lastIndexOf(sig);
        if (sigIndex === -1 || sigIndex !== reason.length - sig.length) {
          reason += " ".concat(sig);
        }
      }
      return reason.trim();
    },
    /**
     * Formats a "reason" (from a textarea) for inclusion in a userspace
     * log.  Replaces newlines with {{Pb}}, and adds an extra `#` before
     * list items for proper formatting.
     *
     * @param {string} str
     * @returns {string}
     */
    formatReasonForLog: (str) => {
      return str.replace(/\n+/g, "{{pb}}").replace(/^(#+)/gm, "#$1").replace(/^(\*+)/gm, "#$1");
    },
    /**
     * Like `String.prototype.replace()`, but escapes any dollar signs in
     * the replacement string.  Useful when the the replacement string is
     * arbitrary, such as a username or freeform user input, and could
     * contain dollar signs.
     *
     * @param {string} string - Text in which to replace.
     * @param {(string|RegExp)} pattern
     * @param {string} replacement
     * @returns {string}
     */
    safeReplace: (string, pattern, replacement) => {
      return string.replace(pattern, replacement.replace(/\$/g, "$$$$"));
    },
    /**
     * Determine if the user-provided expiration will be considered an
     * infinite-length by MW.
     *
     * @see {@link https://phabricator.wikimedia.org/T68646}
     *
     * @param {string} expiry
     * @returns {boolean}
     */
    isInfinity: (expiry) => {
      return ["indefinite", "infinity", "infinite", "never"].includes(expiry);
    },
    /**
     * Escapes a string to be used in a RegExp, replacing spaces and
     * underscores with `[_ ]` as they are often equivalent.
     *
     * @param {string} text - String to be escaped.
     * @returns {string} - The escaped text.
     */
    escapeRegExp: (text) => {
      return mw.util.escapeRegExp(text).replace(/ |_/g, "[_ ]");
    },
    /**
     * formatTime
     *
     * @param {*} time The string to foramt
     * @returns {string}
     */
    formatTime: (time) => {
      let m;
      if ((m = time.match(/^\s*(\d+)\s*sec(ond)?s?\s*$/)) !== null) {
        return "".concat(m[1], "秒");
      }
      if ((m = time.match(/^\s*(\d+)\s*min(ute)?s?\s*$/)) !== null) {
        return "".concat(m[1], "分");
      }
      if ((m = time.match(/^\s*(\d+)\s*hours?\s*$/)) !== null) {
        return m[1] + window.wgULS("小时", "小時");
      }
      if ((m = time.match(/^\s*(\d+)\s*days?\s*$/)) !== null) {
        return "".concat(m[1], "天");
      }
      if ((m = time.match(/^\s*(\d+)\s*weeks?\s*$/)) !== null) {
        return m[1] + window.wgULS("周", "週");
      }
      if ((m = time.match(/^\s*(\d+)\s*months?\s*$/)) !== null) {
        return m[1] + window.wgULS("个月", "個月");
      }
      if ((m = time.match(/^\s*(\d+)\s*years?\s*$/)) !== null) {
        return "".concat(m[1], "年");
      }
      if (Morebits.string.isInfinity(time.trim())) {
        return window.wgULS("无限期", "無限期");
      }
      return time;
    },
    /**
     * Append punctuation to a string when it's missing
     *
     * @param {string} str
     * @param {string} punctuation
     * @returns {string}
     */
    appendPunctuation: (str, punctuation) => {
      if (punctuation === void 0) {
        punctuation = "。";
      }
      if (str.search(/[.?!;。？！；]$/) === -1) {
        str += punctuation;
      }
      return str;
    }
  };
  Morebits.array = {
    /**
     * Remove duplicated items from an array.
     *
     * @param {Array} arr
     * @returns {Array} A copy of the array with duplicates removed.
     * @throws When provided a non-array.
     */
    uniq: (arr) => {
      if (!Array.isArray(arr)) {
        throw new TypeError("A non-array object passed to Morebits.array.uniq");
      }
      return arr.filter((item, idx) => {
        return arr.indexOf(item) === idx;
      });
    },
    /**
     * Remove non-duplicated items from an array.
     *
     * @param {Array} arr
     * @returns {Array} A copy of the array with the first instance of each value
     * removed; subsequent instances of those values (duplicates) remain.
     * @throws When provided a non-array.
     */
    dups: (arr) => {
      if (!Array.isArray(arr)) {
        throw new TypeError("A non-array object passed to Morebits.array.dups");
      }
      return arr.filter((item, idx) => {
        return arr.indexOf(item) !== idx;
      });
    },
    /**
     * Break up an array into smaller arrays.
     *
     * @param {Array} arr
     * @param {number} size - Size of each chunk (except the last, which could be different).
     * @returns {Array[]} An array containing the smaller, chunked arrays.
     * @throws When provided a non-array.
     */
    chunk: (arr, size) => {
      if (!Array.isArray(arr)) {
        throw new TypeError("A non-array object passed to Morebits.array.chunk");
      }
      if (typeof size !== "number" || size <= 0) {
        return [arr];
      }
      const numChunks = Math.ceil(arr.length / size);
      const result = Array.from({
        length: numChunks
      });
      for (let i = 0; i < numChunks; i++) {
        result[i] = arr.slice(i * size, (i + 1) * size);
      }
      return result;
    }
  };
  Morebits.select2 = {
    matchers: {
      /**
       * Custom matcher in which if the optgroup name matches, all options in that
       * group are shown, like in jquery.chosen.
       *
       * @param {*} params
       * @param {*} data
       */
      optgroupFull: (params, data) => {
        const originalMatcher = $.fn.select2.defaults.defaults.matcher;
        const result = originalMatcher(params, data);
        if (result && params.term && data.text.toUpperCase().includes(params.term.toUpperCase())) {
          result.children = data.children;
        }
        return result;
      },
      /**
       * Custom matcher that matches from the beginning of words only.
       *
       * @param {*} params
       * @param {*} data
       */
      wordBeginning: (params, data) => {
        const originalMatcher = $.fn.select2.defaults.defaults.matcher;
        const result = originalMatcher(params, data);
        if (!params.term || result && new RegExp("\\b".concat(mw.util.escapeRegExp(params.term)), "i").test(result.text)) {
          return result;
        }
        return null;
      }
    },
    /**
     * Underline matched part of options.
     *
     * @param {*} data
     */
    highlightSearchMatches: (data) => {
      const searchTerm = Morebits.select2SearchQuery;
      if (!searchTerm || data.loading) {
        return data.text;
      }
      const idx = data.text.toUpperCase().indexOf(searchTerm.toUpperCase());
      if (idx === -1) {
        return data.text;
      }
      return $("<span>").append(data.text.slice(0, idx), $("<span>").css("text-decoration", "underline").text(data.text.slice(idx, idx + searchTerm.length)), data.text.slice(idx + searchTerm.length));
    },
    /**
     * Intercept query as it is happening, for use in highlightSearchMatches.
     *
     * @param {*} params
     */
    queryInterceptor: (params) => {
      Morebits.select2SearchQuery = params && params.term;
    },
    /**
     * Open dropdown and begin search when the `.select2-selection` has
     * focus and a key is pressed.
     *
     * @param {KeyboardEvent} ev
     * @see {@link https://github.com/select2/select2/issues/3279#issuecomment-442524147}
     */
    autoStart: (ev) => {
      if (ev.which < 48) {
        return;
      }
      let target = $(ev.target).closest(".select2-container");
      if (!target.length) {
        return;
      }
      target = target.prev();
      target.select2("open");
      const search = target.data("select2").dropdown.$search || target.data("select2").selection.$search;
      search[0].focus();
    }
  };
  Morebits.unbinder = function(string) {
    if (typeof string !== "string") {
      throw new TypeError("not a string");
    }
    this.content = string;
    this.counter = 0;
    this.history = {};
    this.prefix = "%UNIQ::".concat(Math.random(), "::");
    this.postfix = "::UNIQ%";
  };
  Morebits.unbinder.prototype = {
    /**
     * Hide the region encapsulated by the `prefix` and `postfix` from
     * string processing.  `prefix` and `postfix` will be used in a
     * RegExp, so items that need escaping should be use `\\`.
     *
     * @param {string} prefix
     * @param {string} postfix
     * @throws If either `prefix` or `postfix` is missing.
     */
    unbind(prefix, postfix) {
      if (!prefix || !postfix) {
        throw new Error("Both prefix and postfix must be provided");
      }
      const re = new RegExp("".concat(prefix, "([\\s\\S]*?)").concat(postfix), "g");
      this.content = this.content.replace(re, Morebits.unbinder.getCallback(this));
    },
    /**
     * Restore the hidden portion of the `content` string.
     *
     * @returns {string} The processed output.
     */
    rebind() {
      let {
        content
      } = this;
      for (const current in this.history) {
        if (!Object.hasOwn(this.history, current)) {
          continue;
        }
        content = content.replace(current, this.history[current]);
      }
      return content;
    },
    prefix: null,
    // %UNIQ::0.5955981644938324::
    postfix: null,
    // ::UNIQ%
    content: null,
    // string
    counter: null,
    // 0++
    history: null
    // {}
  };
  Morebits.unbinder.getCallback = (self2) => {
    return (match) => {
      const current = self2.prefix + self2.counter + self2.postfix;
      self2.history[current] = match;
      ++self2.counter;
      return current;
    };
  };
  Morebits.date = function(...args) {
    var _this$_d;
    if (args.length === 1) {
      const [param] = args;
      if (/^\d{14}$/.test(param)) {
        const digitMatch = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/.exec(param);
        if (digitMatch) {
          this._d = new Date(Reflect.apply(Date.UTC, null, [digitMatch[1], digitMatch[2] - 1, digitMatch[3], digitMatch[4], digitMatch[5], digitMatch[6]]));
        }
      } else if (typeof param === "string") {
        const dateParts = Morebits.l10n.signatureTimestampFormat(param);
        if (dateParts) {
          this._d = new Date(Date.UTC.apply(null, dateParts));
        }
      }
    }
    (_this$_d = this._d) !== null && _this$_d !== void 0 ? _this$_d : this._d = new (Function.prototype.bind.apply(Date, [Date, ...(0, import_ext_gadget.generateArray)(args)]))();
    if (!this.isValid()) {
      mw.log.warn("Invalid Morebits.date initialisation:", args);
    }
  };
  Morebits.date.localeData = {
    // message names here correspond to MediaWiki message names
    // No i18n at this time
    months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    monthsShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    daysShort: ["日", "一", "二", "三", "四", "五", "六"],
    relativeTimes: {
      thisDay: "[今天]A hh:mm",
      prevDay: "[昨天]A hh:mm",
      nextDay: "[明天]A hh:mm",
      thisWeek: "ddddA hh:mm",
      pastWeek: "[上]ddddA hh:mm",
      other: "YYYY-MM-DD"
    }
  };
  Morebits.date.unitMap = {
    seconds: "Seconds",
    minutes: "Minutes",
    hours: "Hours",
    days: "Date",
    weeks: "Week",
    // Not a function but handled in `add` through cunning use of multiplication
    months: "Month",
    years: "FullYear"
  };
  Morebits.date.prototype = {
    /** @returns {boolean} */
    isValid() {
      return !Number.isNaN(this.getTime());
    },
    /**
     * @param {(Date|Morebits.date)} date
     * @returns {boolean}
     */
    isBefore(date) {
      return this.getTime() < date.getTime();
    },
    /**
     * @param {(Date|Morebits.date)} date
     * @returns {boolean}
     */
    isAfter(date) {
      return this.getTime() > date.getTime();
    },
    /** @returns {string} */
    getUTCMonthName() {
      return Morebits.date.localeData.months[this.getUTCMonth()];
    },
    /** @returns {string} */
    getUTCMonthNameAbbrev() {
      return Morebits.date.localeData.monthsShort[this.getUTCMonth()];
    },
    /** @returns {string} */
    getMonthName() {
      return Morebits.date.localeData.months[this.getMonth()];
    },
    /** @returns {string} */
    getMonthNameAbbrev() {
      return Morebits.date.localeData.monthsShort[this.getMonth()];
    },
    /** @returns {string} */
    getUTCDayName() {
      return Morebits.date.localeData.days[this.getUTCDay()];
    },
    /** @returns {string} */
    getUTCDayNameAbbrev() {
      return Morebits.date.localeData.daysShort[this.getUTCDay()];
    },
    /** @returns {string} */
    getDayName() {
      return Morebits.date.localeData.days[this.getDay()];
    },
    /** @returns {string} */
    getDayNameAbbrev() {
      return Morebits.date.localeData.daysShort[this.getDay()];
    },
    /**
     * Add a given number of minutes, hours, days, weeks, months, or years to the date.
     * This is done in-place. The modified date object is also returned, allowing chaining.
     *
     * @param {number} number - Should be an integer.
     * @param {string} unit
     * @throws If invalid or unsupported unit is given.
     * @returns {Morebits.date}
     */
    add(number, unit) {
      let num = Number.parseInt(number, 10);
      if (Number.isNaN(num)) {
        throw new TypeError('Invalid number "'.concat(number, '" provided.'));
      }
      unit = unit.toLowerCase();
      const {
        unitMap
      } = Morebits.date;
      let unitNorm = unitMap[unit] || unitMap["".concat(unit, "s")];
      if (unitNorm) {
        if (unitNorm === "Week") {
          unitNorm = "Date";
          num *= 7;
        }
        this["set".concat(unitNorm)](this["get".concat(unitNorm)]() + num);
        return this;
      }
      throw new Error('Invalid unit "'.concat(unit, '": Only ').concat(Object.keys(unitMap).join(", "), " are allowed."));
    },
    /**
     * Subtracts a given number of minutes, hours, days, weeks, months, or years to the date.
     * This is done in-place. The modified date object is also returned, allowing chaining.
     *
     * @param {number} number - Should be an integer.
     * @param {string} unit
     * @throws If invalid or unsupported unit is given.
     * @returns {Morebits.date}
     */
    subtract(number, unit) {
      return this.add(-number, unit);
    },
    /**
     * Format the date into a string per the given format string.
     * Replacement syntax is a subset of that in moment.js:
     *
     * | Syntax | Output |
     * |--------|--------|
     * | H | Hours (24-hour) |
     * | HH | Hours (24-hour, padded to 2 digits) |
     * | h | Hours (12-hour) |
     * | hh | Hours (12-hour, padded to 2 digits) |
     * | A | AM or PM |
     * | m | Minutes |
     * | mm | Minutes (padded to 2 digits) |
     * | s | Seconds |
     * | ss | Seconds (padded to 2 digits) |
     * | SSS | Milliseconds fragment, 3 digits |
     * | d | Day number of the week (Sun=0) |
     * | ddd | Abbreviated day name |
     * | dddd | Full day name |
     * | D | Date |
     * | DD | Date (padded to 2 digits) |
     * | M | Month number (1-indexed) |
     * | MM | Month number (1-indexed, padded to 2 digits) |
     * | MMM | Abbreviated month name |
     * | MMMM | Full month name |
     * | Y | Year |
     * | YY | Final two digits of year (20 for 2020, 42 for 1942) |
     * | YYYY | Year (same as `Y`) |
     *
     * @param {string} formatstr - Format the date into a string, using
     * the replacement syntax.  Use `[` and `]` to escape items.  If not
     * provided, will return the ISO-8601-formatted string.
     * @param {(string|number)} [zone=system] - `system` (for browser-default time zone),
     * `utc`, or specify a time zone as number of minutes relative to UTC.
     * @returns {string}
     */
    format(formatstr, zone) {
      if (!this.isValid()) {
        return "Invalid date";
      }
      let udate = this;
      if (zone === "utc") {
        udate = new Morebits.date(this.getTime()).add(this.getTimezoneOffset(), "minutes");
      } else if (typeof zone === "number") {
        udate = new Morebits.date(this.getTime()).add(this.getTimezoneOffset() + zone, "minutes");
      }
      if (!formatstr) {
        return udate.toISOString();
      }
      const pad = (num, len) => {
        len || (len = 2);
        return "00".concat(num).toString().slice(0 - len);
      };
      const h24 = udate.getHours();
      const m = udate.getMinutes();
      const s = udate.getSeconds();
      const ms = udate.getMilliseconds();
      const D = udate.getDate();
      const M = udate.getMonth() + 1;
      const Y = udate.getFullYear();
      const h12 = h24 % 12 || 12;
      const amOrPm = h24 >= 12 ? "下午" : "上午";
      const replacementMap = {
        HH: pad(h24),
        H: h24,
        hh: pad(h12),
        h: h12,
        A: amOrPm,
        mm: pad(m),
        m,
        ss: pad(s),
        s,
        SSS: pad(ms, 3),
        dddd: udate.getDayName(),
        ddd: udate.getDayNameAbbrev(),
        d: udate.getDay(),
        DD: pad(D),
        D,
        MMMM: udate.getMonthName(),
        MMM: udate.getMonthNameAbbrev(),
        MM: pad(M),
        M,
        YYYY: Y,
        YY: pad(Y % 100),
        Y
      };
      const unbinder = new Morebits.unbinder(formatstr);
      unbinder.unbind(String.raw(_templateObject || (_templateObject = _taggedTemplateLiteral(["["], ["\\["]))), String.raw(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["]"], ["\\]"]))));
      unbinder.content = unbinder.content.replace(
        /* Regex notes:
         * d(d{2,3})? matches exactly 1, 3 or 4 occurrences of 'd' ('dd' is treated as a double match of 'd')
         * Y{1,2}(Y{2})? matches exactly 1, 2 or 4 occurrences of 'Y'
         */
        /H{1,2}|h{1,2}|m{1,2}|s{1,2}|SSS|d(d{2,3})?|D{1,2}|M{1,4}|Y{1,2}(Y{2})?|A/g,
        (match) => {
          return replacementMap[match];
        }
      );
      return unbinder.rebind().replace(/\[(.*?)\]/g, "$1");
    },
    /**
     * Gives a readable relative time string such as "Yesterday at 6:43 PM" or "Last Thursday at 11:45 AM".
     * Similar to `calendar` in moment.js, but with time zone support.
     *
     * @param {(string|number)} [zone=system] - 'system' (for browser-default time zone),
     * 'utc' (for UTC), or specify a time zone as number of minutes past UTC.
     * @returns {string}
     */
    calendar(zone) {
      const dateDiff = ((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0) - new Date(this).setHours(0, 0, 0, 0)) / 864e5;
      switch (true) {
        case dateDiff === 0:
          return this.format(Morebits.date.localeData.relativeTimes.thisDay, zone);
        case dateDiff === 1:
          return this.format(Morebits.date.localeData.relativeTimes.prevDay, zone);
        case (dateDiff > 0 && dateDiff < 7):
          return this.format(Morebits.date.localeData.relativeTimes.pastWeek, zone);
        case dateDiff === -1:
          return this.format(Morebits.date.localeData.relativeTimes.nextDay, zone);
        case (dateDiff < 0 && dateDiff > -7):
          return this.format(Morebits.date.localeData.relativeTimes.thisWeek, zone);
        default:
          return this.format(Morebits.date.localeData.relativeTimes.other, zone);
      }
    },
    /**
     * Get a regular expression that matches wikitext section titles, such
     * as `==December 2019==` or `=== Jan 2018 ===`.
     *
     * @returns {RegExp}
     */
    monthHeaderRegex() {
      return new RegExp("^(==+)\\s*".concat(this.getUTCFullYear(), "年(?:").concat(this.getUTCMonthName(), "|").concat(this.getUTCMonthNameAbbrev(), ")\\s*\\1"), "mg");
    },
    /**
     * Creates a wikitext section header with the month and year.
     *
     * @param {number} [level=2] - Header level.  Pass 0 for just the text
     * with no wikitext markers (==).
     * @returns {string}
     */
    monthHeader(level) {
      level = Number.parseInt(level, 10);
      level = Number.isNaN(level) ? 2 : level;
      const header = "=".repeat(level);
      const text = "".concat(this.getUTCFullYear(), "年").concat(this.getUTCMonthName());
      if (header.length) {
        return "".concat(header, " ").concat(text, " ").concat(header);
      }
      return text;
    }
  };
  var _iterator7 = _createForOfIteratorHelper(Object.getOwnPropertyNames(Date.prototype)), _step7;
  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
      const func = _step7.value;
      if (!["add", "getDayName", "getMonthName"].includes(func)) {
        Morebits.date.prototype[func] = function(...args) {
          return this._d[func](...args);
        };
      }
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
  Morebits.wiki = {};
  Morebits.wiki.isPageRedirect = () => {
    console.warn("[Morebits] NOTE: Morebits.wiki.isPageRedirect has been deprecated, use Morebits.isPageRedirect instead.");
    return Morebits.isPageRedirect();
  };
  Morebits.wiki.numberOfActionsLeft = 0;
  Morebits.wiki.nbrOfCheckpointsLeft = 0;
  Morebits.wiki.actionCompleted = (self2) => {
    if (--Morebits.wiki.numberOfActionsLeft <= 0 && Morebits.wiki.nbrOfCheckpointsLeft <= 0) {
      Morebits.wiki.actionCompleted.event(self2);
    }
  };
  Morebits.wiki.actionCompleted.event = () => {
    if (Morebits.wiki.actionCompleted.notice) {
      Morebits.status.actionCompleted(Morebits.wiki.actionCompleted.notice);
    }
    if (Morebits.wiki.actionCompleted.redirect) {
      if (!/^\w+:\/\//.test(Morebits.wiki.actionCompleted.redirect)) {
        Morebits.wiki.actionCompleted.redirect = mw.util.getUrl(Morebits.wiki.actionCompleted.redirect);
        if (Morebits.wiki.actionCompleted.followRedirect === false) {
          Morebits.wiki.actionCompleted.redirect += "?redirect=no";
        }
      }
      setTimeout(() => {
        location = Morebits.wiki.actionCompleted.redirect;
      }, Morebits.wiki.actionCompleted.timeOut);
    }
  };
  Morebits.wiki.actionCompleted.timeOut = window.wpActionCompletedTimeOut === void 0 ? 5e3 : window.wpActionCompletedTimeOut;
  Morebits.wiki.actionCompleted.redirect = null;
  Morebits.wiki.actionCompleted.notice = null;
  Morebits.wiki.addCheckpoint = () => {
    ++Morebits.wiki.nbrOfCheckpointsLeft;
  };
  Morebits.wiki.removeCheckpoint = () => {
    if (--Morebits.wiki.nbrOfCheckpointsLeft <= 0 && Morebits.wiki.numberOfActionsLeft <= 0) {
      Morebits.wiki.actionCompleted.event();
    }
  };
  Morebits.wiki.api = function(currentAction, query, onSuccess, statusElement, onError) {
    var _this$query;
    this.currentAction = currentAction;
    this.query = query;
    this.query.assert = "user";
    if (!query.errorformat || !["wikitext", "plaintext"].includes(query.errorformat)) {
      this.query.errorformat = "html";
    }
    (_this$query = this.query).uselang || (_this$query.uselang = "content");
    this.query.errorlang = "uselang";
    this.query.errorsuselocal = 1;
    this.onSuccess = onSuccess;
    this.onError = onError;
    if (statusElement) {
      this.setStatusElement(statusElement);
    } else {
      this.statelem = new Morebits.status(currentAction);
    }
    if (!query.format) {
      this.query.format = "xml";
    } else if (query.format === "json" && !query.formatversion) {
      this.query.formatversion = "2";
    } else if (!["xml", "json"].includes(query.format)) {
      this.statelem.error("Invalid API format: only xml and json are supported.");
    }
    if (query.action && ["query", "watch"].includes(query.action)) {
      delete query.tags;
    } else if (!query.tags && morebitsWikiChangeTag) {
      query.tags = morebitsWikiChangeTag;
    }
  };
  Morebits.wiki.api.prototype = {
    currentAction: "",
    onSuccess: null,
    onError: null,
    parent: window,
    // use global context if there is no parent object
    query: null,
    response: null,
    responseXML: null,
    // use `response` instead; retained for backwards compatibility
    statelem: null,
    // this non-standard name kept for backwards compatibility
    statusText: null,
    // result received from the API, normally "success" or "error"
    errorCode: null,
    // short text error code, if any, as documented in the MediaWiki API
    errorText: null,
    // full error description, if any
    badtokenRetry: false,
    // set to true if this on a retry attempted after a badtoken error
    /**
     * Keep track of parent object for callbacks.
     *
     * @param {*} parent
     */
    setParent(parent) {
      this.parent = parent;
    },
    /** @param {Morebits.status} statusElement */
    setStatusElement(statusElement) {
      this.statelem = statusElement;
      this.statelem.status(this.currentAction);
    },
    /**
     * Carry out the request.
     *
     * @param {Object} callerAjaxParameters - Do not specify a parameter unless you really
     * really want to give jQuery some extra parameters.
     * @returns {promise} - A jQuery promise object that is resolved or rejected with the api object.
     */
    post(callerAjaxParameters) {
      ++Morebits.wiki.numberOfActionsLeft;
      const queryStringArr = [];
      for (var _i5 = 0, _Object$entries2 = Object.entries(this.query); _i5 < _Object$entries2.length; _i5++) {
        const [i, val] = _Object$entries2[_i5];
        if (Array.isArray(val)) {
          queryStringArr[queryStringArr.length] = "".concat(encodeURIComponent(i), "=").concat(val.map(encodeURIComponent).join("|"));
        } else if (val !== void 0) {
          queryStringArr[queryStringArr.length] = "".concat(encodeURIComponent(i), "=").concat(encodeURIComponent(val));
        }
      }
      const queryString = queryStringArr.join("&").replace(/^(.*?)(\btoken=[^&]*)&(.*)/, "$1$3&$2");
      const ajaxparams = {
        context: this,
        type: this.query.action === "query" ? "GET" : "POST",
        url: mw.util.wikiScript("api"),
        data: queryString,
        dataType: this.query.format,
        headers: {
          "Api-User-Agent": morebitsWikiApiUserAgent
        },
        ...callerAjaxParameters
      };
      return $.ajax(ajaxparams).then(
        function onAPIsuccess(response, statusText) {
          this.statusText = statusText;
          this.response = response;
          this.responseXML = response;
          if (this.query.format === "json") {
            this.errorCode = response.errors && response.errors[0].code;
            if (this.query.errorformat === "html") {
              this.errorText = response.errors && response.errors[0].html;
            } else if (this.query.errorformat === "wikitext" || this.query.errorformat === "plaintext") {
              this.errorText = response.errors && response.errors[0].text;
            }
          } else {
            this.errorCode = $(response).find("errors error").eq(0).attr("code");
            this.errorText = $(response).find("errors error").eq(0).text();
          }
          if (typeof this.errorCode === "string") {
            return this.returnError(callerAjaxParameters);
          }
          if (this.onSuccess) {
            this.onSuccess.call(this.parent, this);
          } else {
            this.statelem.info("完成");
          }
          Morebits.wiki.actionCompleted();
          return $.Deferred().resolveWith(this.parent, [this]);
        },
        // only network and server errors reach here - complaints from the API itself are caught in success()
        function onAPIfailure(error, statusText, errorThrown) {
          this.statusText = statusText;
          this.errorThrown = errorThrown;
          this.errorText = statusText + window.wgULS("在调用API时发生了错误“", "在呼叫API時發生了錯誤「") + error.statusText + window.wgULS("”。", "」。");
          return this.returnError();
        }
      );
    },
    returnError(callerAjaxParameters) {
      if (this.errorCode === "badtoken" && !this.badtokenRetry) {
        this.statelem.warn(window.wgULS("无效令牌，获取新的令牌并重试……", "無效權杖，取得新的權杖並重試……"));
        this.badtokenRetry = true;
        return Morebits.wiki.api.getToken().then((token) => {
          this.query.token = token;
          return this.post(callerAjaxParameters);
        });
      }
      this.statelem.error("".concat(this.errorText, "（").concat(this.errorCode, "）"));
      if (this.onError) {
        this.onError.call(this.parent, this);
      }
      return $.Deferred().rejectWith(this.parent, [this]);
    },
    getStatusElement() {
      return this.statelem;
    },
    getErrorCode() {
      return this.errorCode;
    },
    getErrorText() {
      return this.errorText;
    },
    getXML() {
      return this.responseXML;
    },
    getResponse() {
      return this.response;
    }
  };
  Morebits.wiki.getCachedJson = (title) => {
    const query = {
      action: "query",
      prop: "revisions",
      titles: title,
      rvslots: "main",
      rvprop: "content",
      format: "json",
      smaxage: "3600",
      maxage: "3600"
    };
    return new Morebits.wiki.api("", query).post().then((apiobj) => {
      apiobj.getStatusElement().unlink();
      const response = apiobj.getResponse();
      const wikitext = response.query.pages[0].revisions[0].slots.main.content;
      return JSON.parse(wikitext);
    });
  };
  let morebitsWikiApiUserAgent = "Qiuwen/1.1 (morebits.js)";
  Morebits.wiki.api.setApiUserAgent = (ua) => {
    morebitsWikiApiUserAgent = "YsArchives/1.1 (morebits.js".concat(ua ? "; ".concat(ua) : "", ")");
  };
  const morebitsWikiChangeTag = "";
  Morebits.wiki.api.getToken = () => {
    const tokenApi = new Morebits.wiki.api(window.wgULS("获取令牌", "取得權杖"), {
      action: "query",
      meta: "tokens",
      type: "csrf",
      format: "json"
    });
    return tokenApi.post().then((apiobj) => {
      return apiobj.response.query.tokens.csrftoken;
    });
  };
  Morebits.wiki.page = function(pageName, status) {
    status || (status = window.wgULS("打开页面“", "打開頁面「") + pageName + window.wgULS("”", "」"));
    const ctx = {
      // backing fields for public properties
      pageName,
      pageExists: false,
      editSummary: null,
      changeTags: null,
      testActions: null,
      // array if any valid actions
      callbackParameters: null,
      statusElement: status instanceof Morebits.status ? status : new Morebits.status(status),
      // - edit
      pageText: null,
      editMode: "all",
      // save() replaces entire contents of the page by default
      appendText: null,
      // can't reuse pageText for this because pageText is needed to follow a redirect
      prependText: null,
      // can't reuse pageText for this because pageText is needed to follow a redirect
      newSectionText: null,
      newSectionTitle: null,
      createOption: null,
      minorEdit: false,
      botEdit: false,
      pageSection: null,
      maxConflictRetries: 2,
      maxRetries: 2,
      followRedirect: false,
      followCrossNsRedirect: true,
      watchlistOption: "nochange",
      watchlistExpiry: null,
      creator: null,
      timestamp: null,
      // - revert
      revertOldID: null,
      // - move
      moveDestination: null,
      moveTalkPage: false,
      moveSubpages: false,
      moveSuppressRedirect: false,
      // - protect
      protectEdit: null,
      protectMove: null,
      protectCreate: null,
      protectCascade: null,
      // - creation lookup
      lookupNonRedirectCreator: false,
      // internal status
      pageLoaded: false,
      csrfToken: null,
      loadTime: null,
      lastEditTime: null,
      pageID: null,
      contentModel: null,
      revertCurID: null,
      revertUser: null,
      watched: false,
      fullyProtected: false,
      suppressProtectWarning: false,
      conflictRetries: 0,
      retries: 0,
      // callbacks
      onLoadSuccess: null,
      onLoadFailure: null,
      onSaveSuccess: null,
      onSaveFailure: null,
      onLookupCreationSuccess: null,
      onLookupCreationFailure: null,
      onMoveSuccess: null,
      onMoveFailure: null,
      onDeleteSuccess: null,
      onDeleteFailure: null,
      onUndeleteSuccess: null,
      onUndeleteFailure: null,
      onProtectSuccess: null,
      onProtectFailure: null,
      // internal objects
      loadQuery: null,
      loadApi: null,
      saveApi: null,
      lookupCreationApi: null,
      moveApi: null,
      moveProcessApi: null,
      patrolApi: null,
      patrolProcessApi: null,
      deleteApi: null,
      deleteProcessApi: null,
      undeleteApi: null,
      undeleteProcessApi: null,
      protectApi: null,
      protectProcessApi: null
    };
    const emptyFunction = () => {
    };
    this.load = function(onSuccess, onFailure) {
      ctx.onLoadSuccess = onSuccess;
      ctx.onLoadFailure = onFailure || emptyFunction;
      if (!onSuccess) {
        ctx.statusElement.error("Internal error: no onSuccess callback provided to load()!");
        ctx.onLoadFailure(this);
        return;
      }
      ctx.loadQuery = {
        action: "query",
        prop: "info|revisions",
        inprop: "watched",
        intestactions: "edit",
        // can be expanded
        curtimestamp: "",
        meta: "tokens",
        type: "csrf",
        titles: ctx.pageName,
        format: "json"
        // don't need rvlimit=1 because we don't need rvstartid here and only one actual rev is returned by default
      };
      if (ctx.editMode === "all") {
        ctx.loadQuery.rvprop = "content|timestamp";
      } else if (ctx.editMode === "revert") {
        ctx.loadQuery.rvprop = "timestamp";
        ctx.loadQuery.rvlimit = 1;
        ctx.loadQuery.rvstartid = ctx.revertOldID;
      }
      if (ctx.followRedirect) {
        ctx.loadQuery.redirects = "";
      }
      if (typeof ctx.pageSection === "number") {
        ctx.loadQuery.rvsection = ctx.pageSection;
      }
      if (Morebits.userIsSysop) {
        ctx.loadQuery.inprop += "|protection";
      }
      ctx.loadApi = new Morebits.wiki.api(window.wgULS("抓取页面……", "抓取頁面……"), ctx.loadQuery, fnLoadSuccess, ctx.statusElement, ctx.onLoadFailure);
      ctx.loadApi.setParent(this);
      ctx.loadApi.post();
    };
    this.save = function(onSuccess, onFailure) {
      ctx.onSaveSuccess = onSuccess;
      ctx.onSaveFailure = onFailure || emptyFunction;
      const canUseMwUserToken = fnCanUseMwUserToken("edit");
      if (!ctx.pageLoaded && !canUseMwUserToken) {
        ctx.statusElement.error("Internal error: attempt to save a page that has not been loaded!");
        ctx.onSaveFailure(this);
        return;
      }
      if (!ctx.editSummary) {
        if (ctx.editMode === "new" && ctx.newSectionTitle) {
          ctx.editSummary = "";
        } else {
          ctx.statusElement.error("Internal error: edit summary not set before save!");
          ctx.onSaveFailure(this);
          return;
        }
      }
      if (ctx.fullyProtected && !ctx.suppressProtectWarning && !confirm(ctx.fullyProtected === "infinity" ? window.wgULS("您即将编辑全保护页面“", "您即將編輯全保護頁面「") + ctx.pageName + window.wgULS("”（无限期）。\n\n单击确定以确定，或单击取消以取消操作。", "」（無限期）。\n\n點擊確定以確定，或點擊取消以取消操作。") : "".concat(window.wgULS("您即将编辑全保护页面“", "您即將編輯全保護頁面「") + ctx.pageName + window.wgULS("”（到期：", "」（到期：") + new Morebits.date(ctx.fullyProtected).calendar("utc"), " (UTC)）。\n\n").concat(window.wgULS("单击确定以确定，或单击取消以取消操作。", "點擊確定以確定，或點擊取消以取消操作。")))) {
        ctx.statusElement.error(window.wgULS("已取消对全保护页面的编辑。", "已取消對全保護頁面的編輯。"));
        ctx.onSaveFailure(this);
        return;
      }
      ctx.retries = 0;
      const query = {
        action: "edit",
        title: ctx.pageName,
        summary: ctx.editSummary,
        token: canUseMwUserToken ? mw.user.tokens.get("csrfToken") : ctx.csrfToken,
        watchlist: ctx.watchlistOption,
        format: "json"
      };
      if (ctx.changeTags) {
        query.tags = ctx.changeTags;
      }
      if (fnApplyWatchlistExpiry()) {
        query.watchlistexpiry = ctx.watchlistExpiry;
      }
      if (typeof ctx.pageSection === "number") {
        query.section = ctx.pageSection;
      }
      if (ctx.minorEdit) {
        query.minor = true;
      } else {
        query.notminor = true;
      }
      if (ctx.botEdit) {
        query.bot = true;
      }
      switch (ctx.editMode) {
        case "append":
          if (ctx.appendText === null) {
            ctx.statusElement.error("Internal error: append text not set before save!");
            ctx.onSaveFailure(this);
            return;
          }
          query.appendtext = ctx.appendText;
          break;
        case "prepend":
          if (ctx.prependText === null) {
            ctx.statusElement.error("Internal error: prepend text not set before save!");
            ctx.onSaveFailure(this);
            return;
          }
          query.prependtext = ctx.prependText;
          break;
        case "new":
          if (!ctx.newSectionText) {
            ctx.statusElement.error("Internal error: new section text not set before save!");
            ctx.onSaveFailure(this);
            return;
          }
          query.section = "new";
          query.text = ctx.newSectionText;
          query.sectiontitle = ctx.newSectionTitle || ctx.editSummary;
          break;
        case "revert":
          query.undo = ctx.revertCurID;
          query.undoafter = ctx.revertOldID;
          if (ctx.lastEditTime) {
            query.basetimestamp = ctx.lastEditTime;
          }
          query.starttimestamp = ctx.loadTime;
          break;
        default:
          query.text = ctx.pageText;
          if (ctx.lastEditTime) {
            query.basetimestamp = ctx.lastEditTime;
          }
          query.starttimestamp = ctx.loadTime;
          break;
      }
      if (["recreate", "createonly", "nocreate"].includes(ctx.createOption)) {
        query[ctx.createOption] = "";
      }
      if (canUseMwUserToken && ctx.followRedirect) {
        query.redirect = true;
      }
      ctx.saveApi = new Morebits.wiki.api(window.wgULS("保存页面……", "儲存頁面……"), query, fnSaveSuccess, ctx.statusElement, fnSaveError);
      ctx.saveApi.setParent(this);
      ctx.saveApi.post();
    };
    this.append = function(onSuccess, onFailure) {
      ctx.editMode = "append";
      if (fnCanUseMwUserToken("edit")) {
        this.save(onSuccess, onFailure);
      } else {
        ctx.onSaveSuccess = onSuccess;
        ctx.onSaveFailure = onFailure || emptyFunction;
        this.load(fnAutoSave, ctx.onSaveFailure);
      }
    };
    this.prepend = function(onSuccess, onFailure) {
      ctx.editMode = "prepend";
      if (fnCanUseMwUserToken("edit")) {
        this.save(onSuccess, onFailure);
      } else {
        ctx.onSaveSuccess = onSuccess;
        ctx.onSaveFailure = onFailure || emptyFunction;
        this.load(fnAutoSave, ctx.onSaveFailure);
      }
    };
    this.newSection = function(onSuccess, onFailure) {
      ctx.editMode = "new";
      if (fnCanUseMwUserToken("edit")) {
        this.save(onSuccess, onFailure);
      } else {
        ctx.onSaveSuccess = onSuccess;
        ctx.onSaveFailure = onFailure || emptyFunction;
        this.load(fnAutoSave, ctx.onSaveFailure);
      }
    };
    this.getPageName = () => {
      return ctx.pageName;
    };
    this.getPageText = () => {
      return ctx.pageText;
    };
    this.setPageText = (pageText) => {
      ctx.editMode = "all";
      ctx.pageText = pageText;
    };
    this.setAppendText = (appendText) => {
      ctx.editMode = "append";
      ctx.appendText = appendText;
    };
    this.setPrependText = (prependText) => {
      ctx.editMode = "prepend";
      ctx.prependText = prependText;
    };
    this.setNewSectionText = (newSectionText) => {
      ctx.editMode = "new";
      ctx.newSectionText = newSectionText;
    };
    this.setNewSectionTitle = (newSectionTitle) => {
      ctx.editMode = "new";
      ctx.newSectionTitle = newSectionTitle;
    };
    this.setEditSummary = (summary) => {
      ctx.editSummary = summary;
    };
    this.setChangeTags = (tags) => {
      ctx.changeTags = tags;
    };
    this.setCreateOption = (createOption) => {
      ctx.createOption = createOption;
    };
    this.setMinorEdit = (minorEdit) => {
      ctx.minorEdit = minorEdit;
    };
    this.setBotEdit = (botEdit) => {
      ctx.botEdit = botEdit;
    };
    this.setPageSection = (pageSection) => {
      ctx.pageSection = pageSection;
    };
    this.setMaxConflictRetries = (maxConflictRetries) => {
      ctx.maxConflictRetries = maxConflictRetries;
    };
    this.setMaxRetries = (maxRetries) => {
      ctx.maxRetries = maxRetries;
    };
    this.setWatchlist = (watchlistOption, watchlistExpiry) => {
      if (watchlistOption instanceof Morebits.date || watchlistOption instanceof Date) {
        watchlistOption = watchlistOption.toISOString();
      }
      if (watchlistExpiry === void 0) {
        watchlistExpiry = "infinity";
      } else if (watchlistExpiry instanceof Morebits.date || watchlistExpiry instanceof Date) {
        watchlistExpiry = watchlistExpiry.toISOString();
      }
      switch (watchlistOption) {
        case "nochange":
        case "no":
        case false:
        case void 0:
          ctx.watchlistOption = "nochange";
          ctx.watchlistExpiry = null;
          break;
        case "unwatch":
          ctx.watchlistOption = "unwatch";
          break;
        case "preferences":
        case "default":
          ctx.watchlistOption = "preferences";
          ctx.watchlistExpiry = watchlistExpiry;
          break;
        case "watch":
        case "yes":
        case true:
          ctx.watchlistOption = "watch";
          ctx.watchlistExpiry = watchlistExpiry;
          break;
        default:
          ctx.watchlistOption = "watch";
          ctx.watchlistExpiry = watchlistOption;
          break;
      }
    };
    this.setWatchlistExpiry = (watchlistExpiry) => {
      if (watchlistExpiry === void 0) {
        watchlistExpiry = "infinity";
      } else if (watchlistExpiry instanceof Morebits.date || watchlistExpiry instanceof Date) {
        watchlistExpiry = watchlistExpiry.toISOString();
      }
      ctx.watchlistExpiry = watchlistExpiry;
    };
    this.setWatchlistFromPreferences = (watchlistOption) => {
      console.warn("[Morebits] NOTE: Morebits.wiki.page.setWatchlistFromPreferences was deprecated December 2020, please use setWatchlist");
      if (watchlistOption) {
        ctx.watchlistOption = "preferences";
      } else {
        ctx.watchlistOption = "nochange";
      }
    };
    this.setFollowRedirect = (followRedirect, followCrossNsRedirect) => {
      if (ctx.pageLoaded) {
        ctx.statusElement.error("Internal error: cannot change redirect setting after the page has been loaded!");
        return;
      }
      ctx.followRedirect = followRedirect;
      ctx.followCrossNsRedirect = followCrossNsRedirect === void 0 ? ctx.followCrossNsRedirect : followCrossNsRedirect;
    };
    this.setLookupNonRedirectCreator = (flag) => {
      ctx.lookupNonRedirectCreator = flag;
    };
    this.setMoveDestination = (destination) => {
      ctx.moveDestination = destination;
    };
    this.setMoveTalkPage = (flag) => {
      ctx.moveTalkPage = !!flag;
    };
    this.setMoveSubpages = (flag) => {
      ctx.moveSubpages = !!flag;
    };
    this.setMoveSuppressRedirect = (flag) => {
      ctx.moveSuppressRedirect = !!flag;
    };
    this.setEditProtection = (level, expiry) => {
      ctx.protectEdit = {
        level,
        expiry: expiry || "infinity"
      };
    };
    this.setMoveProtection = (level, expiry) => {
      ctx.protectMove = {
        level,
        expiry: expiry || "infinity"
      };
    };
    this.setCreateProtection = (level, expiry) => {
      ctx.protectCreate = {
        level,
        expiry: expiry || "infinity"
      };
    };
    this.setCascadingProtection = (flag) => {
      ctx.protectCascade = !!flag;
    };
    this.suppressProtectWarning = () => {
      ctx.suppressProtectWarning = true;
    };
    this.setOldID = (oldID) => {
      ctx.revertOldID = oldID;
    };
    this.getCurrentID = () => {
      return ctx.revertCurID;
    };
    this.getRevisionUser = () => {
      return ctx.revertUser;
    };
    this.getLastEditTime = () => {
      return ctx.lastEditTime;
    };
    this.setCallbackParameters = (callbackParameters) => {
      ctx.callbackParameters = callbackParameters;
    };
    this.getCallbackParameters = () => {
      return ctx.callbackParameters;
    };
    this.setStatusElement = (statusElement) => {
      ctx.statusElement = statusElement;
    };
    this.getStatusElement = () => {
      return ctx.statusElement;
    };
    this.exists = () => {
      return ctx.pageExists;
    };
    this.getPageID = () => {
      return ctx.pageID;
    };
    this.getContentModel = () => {
      return ctx.contentModel;
    };
    this.getWatched = () => {
      return ctx.watched;
    };
    this.getLoadTime = () => {
      return ctx.loadTime;
    };
    this.getCreator = () => {
      return ctx.creator;
    };
    this.getCreationTimestamp = () => {
      return ctx.timestamp;
    };
    this.canEdit = () => {
      return !!ctx.testActions && ctx.testActions.includes("edit");
    };
    this.lookupCreation = function(onSuccess, onFailure) {
      ctx.onLookupCreationSuccess = onSuccess;
      ctx.onLookupCreationFailure = onFailure || emptyFunction;
      if (!onSuccess) {
        ctx.statusElement.error("Internal error: no onSuccess callback provided to lookupCreation()!");
        ctx.onLookupCreationFailure(this);
        return;
      }
      const query = {
        action: "query",
        prop: "revisions",
        titles: ctx.pageName,
        rvlimit: 1,
        rvprop: "user|timestamp",
        rvdir: "newer",
        format: "json"
      };
      if (ctx.lookupNonRedirectCreator) {
        query.rvsection = 0;
        query.rvprop += "|content";
      }
      if (ctx.followRedirect) {
        query.redirects = "";
      }
      ctx.lookupCreationApi = new Morebits.wiki.api(window.wgULS("抓取页面创建者信息", "抓取頁面建立者資訊"), query, fnLookupCreationSuccess, ctx.statusElement, ctx.onLookupCreationFailure);
      ctx.lookupCreationApi.setParent(this);
      ctx.lookupCreationApi.post();
    };
    this.revert = function(onSuccess, onFailure) {
      ctx.onSaveSuccess = onSuccess;
      ctx.onSaveFailure = onFailure || emptyFunction;
      if (!ctx.revertOldID) {
        ctx.statusElement.error("Internal error: revision ID to revert to was not set before revert!");
        ctx.onSaveFailure(this);
        return;
      }
      ctx.editMode = "revert";
      this.load(fnAutoSave, ctx.onSaveFailure);
    };
    this.move = function(onSuccess, onFailure) {
      ctx.onMoveSuccess = onSuccess;
      ctx.onMoveFailure = onFailure || emptyFunction;
      if (!fnPreflightChecks.call(this, "move", ctx.onMoveFailure)) {
        return;
      }
      if (!ctx.moveDestination) {
        ctx.statusElement.error("Internal error: destination page name was not set before move!");
        ctx.onMoveFailure(this);
        return;
      }
      if (fnCanUseMwUserToken("move")) {
        fnProcessMove.call(this, this);
      } else {
        const query = fnNeedTokenInfoQuery("move");
        ctx.moveApi = new Morebits.wiki.api(window.wgULS("获取令牌……", "取得權杖……"), query, fnProcessMove, ctx.statusElement, ctx.onMoveFailure);
        ctx.moveApi.setParent(this);
        ctx.moveApi.post();
      }
    };
    this.patrol = function() {
      if (!Morebits.userIsSysop && !Morebits.userIsInGroup("patroller")) {
        return;
      }
      const $body = $("body");
      if ($body.find(".patrollink").length) {
        const patrolhref = $body.find(".patrollink a").attr("href");
        ctx.rcid = mw.util.getParamValue("rcid", patrolhref);
        fnProcessPatrol(this, this);
      } else {
        const patrolQuery = {
          action: "query",
          prop: "info",
          meta: "tokens",
          type: "patrol",
          // as long as we're querying, might as well get a token
          list: "recentchanges",
          // check if the page is unpatrolled
          titles: ctx.pageName,
          rcprop: "patrolled",
          rctitle: ctx.pageName,
          rclimit: 1,
          format: "json"
        };
        ctx.patrolApi = new Morebits.wiki.api(window.wgULS("获取令牌……", "取得權杖……"), patrolQuery, fnProcessPatrol);
        ctx.patrolApi.setParent(this);
        ctx.patrolApi.post();
      }
    };
    this.deletePage = function(onSuccess, onFailure) {
      ctx.onDeleteSuccess = onSuccess;
      ctx.onDeleteFailure = onFailure || emptyFunction;
      if (!fnPreflightChecks.call(this, "delete", ctx.onDeleteFailure)) {
        return;
      }
      if (fnCanUseMwUserToken("delete")) {
        fnProcessDelete.call(this, this);
      } else {
        const query = fnNeedTokenInfoQuery("delete");
        ctx.deleteApi = new Morebits.wiki.api(window.wgULS("获取令牌……", "取得權杖……"), query, fnProcessDelete, ctx.statusElement, ctx.onDeleteFailure);
        ctx.deleteApi.setParent(this);
        ctx.deleteApi.post();
      }
    };
    this.undeletePage = function(onSuccess, onFailure) {
      ctx.onUndeleteSuccess = onSuccess;
      ctx.onUndeleteFailure = onFailure || emptyFunction;
      if (!fnPreflightChecks.call(this, "undelete", ctx.onUndeleteFailure)) {
        return;
      }
      if (fnCanUseMwUserToken("undelete")) {
        fnProcessUndelete.call(this, this);
      } else {
        const query = fnNeedTokenInfoQuery("undelete");
        ctx.undeleteApi = new Morebits.wiki.api(window.wgULS("获取令牌……", "取得權杖……"), query, fnProcessUndelete, ctx.statusElement, ctx.onUndeleteFailure);
        ctx.undeleteApi.setParent(this);
        ctx.undeleteApi.post();
      }
    };
    this.protect = function(onSuccess, onFailure) {
      ctx.onProtectSuccess = onSuccess;
      ctx.onProtectFailure = onFailure || emptyFunction;
      if (!fnPreflightChecks.call(this, "protect", ctx.onProtectFailure)) {
        return;
      }
      if (!ctx.protectEdit && !ctx.protectMove && !ctx.protectCreate) {
        ctx.statusElement.error("Internal error: you must set edit and/or move and/or create protection before calling protect()!");
        ctx.onProtectFailure(this);
        return;
      }
      const query = fnNeedTokenInfoQuery("protect");
      ctx.protectApi = new Morebits.wiki.api(window.wgULS("获取令牌……", "取得權杖……"), query, fnProcessProtect, ctx.statusElement, ctx.onProtectFailure);
      ctx.protectApi.setParent(this);
      ctx.protectApi.post();
    };
    const fnCanUseMwUserToken = (action) => {
      action || (action = "edit");
      if (ctx.watchlistExpiry && !Morebits.string.isInfinity(ctx.watchlistExpiry)) {
        return false;
      }
      if (ctx.followRedirect) {
        if (!ctx.followCrossNsRedirect) {
          return false;
        }
        if (action !== "edit" || ctx.editMode === "all" || ctx.editMode === "revert") {
          return false;
        }
      }
      if (Morebits.userIsSysop && !ctx.suppressProtectWarning) {
        if (new mw.Title(Morebits.pageNameNorm).getPrefixedText() !== new mw.Title(ctx.pageName).getPrefixedText()) {
          return false;
        }
        const editRestriction = mw.config.get("wgRestrictionEdit");
        if (!editRestriction || editRestriction.includes("sysop")) {
          return false;
        }
      }
      return !!mw.user.tokens.get("csrfToken");
    };
    const fnNeedTokenInfoQuery = (action) => {
      const query = {
        action: "query",
        meta: "tokens",
        type: "csrf",
        titles: ctx.pageName,
        prop: "info",
        inprop: "watched",
        format: "json"
      };
      if (action !== "move" || Morebits.userIsSysop) {
        query.inprop += "|protection";
      }
      if (ctx.followRedirect && action !== "undelete") {
        query.redirects = "";
      }
      return query;
    };
    const fnAutoSave = (pageobj) => {
      pageobj.save(ctx.onSaveSuccess, ctx.onSaveFailure);
    };
    const fnLoadSuccess = function() {
      const response = ctx.loadApi.getResponse().query;
      if (!fnCheckPageName(response, ctx.onLoadFailure)) {
        return;
      }
      const [page] = response.pages;
      let rev;
      ctx.pageExists = !page.missing;
      if (ctx.pageExists) {
        [rev] = page.revisions;
        ctx.lastEditTime = rev.timestamp;
        ctx.pageText = rev.content;
        ctx.pageID = page.pageid;
      } else {
        ctx.pageText = "";
        ctx.pageID = 0;
      }
      ctx.csrfToken = response.tokens.csrftoken;
      if (!ctx.csrfToken) {
        ctx.statusElement.error(window.wgULS("未能获取编辑令牌。", "未能取得編輯權杖。"));
        ctx.onLoadFailure(this);
        return;
      }
      ctx.loadTime = ctx.loadApi.getResponse().curtimestamp;
      if (!ctx.loadTime) {
        ctx.statusElement.error(window.wgULS("未能获取当前时间戳。", "未能取得當前時間戳。"));
        ctx.onLoadFailure(this);
        return;
      }
      ctx.contentModel = page.contentmodel;
      ctx.watched = page.watchlistexpiry || page.watched;
      if (Morebits.userIsSysop) {
        const editProt = page.protection.findLast((pr) => {
          return pr.type === "edit" && pr.level === "sysop";
        });
        if (editProt) {
          ctx.fullyProtected = editProt.expiry;
        } else {
          ctx.fullyProtected = false;
        }
      }
      ctx.revertCurID = page.lastrevid;
      const testactions = page.actions;
      ctx.testActions = [];
      for (var _i6 = 0, _Object$keys = Object.keys(testactions); _i6 < _Object$keys.length; _i6++) {
        const action = _Object$keys[_i6];
        if (testactions[action]) {
          ctx.testActions[ctx.testActions.length] = action;
        }
      }
      if (ctx.editMode === "revert") {
        ctx.revertCurID = rev && rev.revid;
        if (!ctx.revertCurID) {
          ctx.statusElement.error(window.wgULS("未能获取当前修订版本ID。", "未能取得目前修訂版本ID。"));
          ctx.onLoadFailure(this);
          return;
        }
        ctx.revertUser = rev && rev.user;
        if (!ctx.revertUser) {
          if (rev && rev.userhidden) {
            ctx.revertUser = window.wgULS("<用户名已隐藏>", "<使用者名稱已隱藏>");
          } else {
            ctx.statusElement.error(window.wgULS("未能获取此修订版本的编辑者。", "未能取得此修訂版本的編輯者。"));
            ctx.onLoadFailure(this);
            return;
          }
        }
        ctx.editSummary = "[[QW:UNDO|撤销]]由 ".concat(ctx.revertUser, " 所做出的").concat(window.wgULS("修订 ", "修訂 ")).concat(ctx.revertOldID, "：").concat(ctx.editSummary);
      }
      ctx.pageLoaded = true;
      ctx.onLoadSuccess(this);
    };
    const fnCheckPageName = function(response, onFailure) {
      onFailure || (onFailure = emptyFunction);
      const page = response.pages && response.pages[0];
      if (page) {
        if (page.invalid) {
          ctx.statusElement.error(window.wgULS("标题不合法：", "標題不合法：".concat(ctx.pageName)));
          onFailure(this);
          return false;
        }
        const resolvedName = page.title;
        if (response.redirects) {
          const origNs = new mw.Title(ctx.pageName).namespace;
          const newNs = new mw.Title(resolvedName).namespace;
          if (origNs !== newNs && !ctx.followCrossNsRedirect) {
            ctx.statusElement.error(ctx.pageName + window.wgULS("是跨命名空间重定向到", "是跨命名空間重新導向到") + resolvedName + window.wgULS("，略过", "，略過"));
            onFailure(this);
            return false;
          }
          new Morebits.status(window.wgULS("信息", "資訊"), window.wgULS("从 ", "從 ") + ctx.pageName + window.wgULS(" 重定向到 ", " 重新導向到 ") + resolvedName);
        }
        ctx.pageName = resolvedName;
      } else {
        ctx.statusElement.error(window.wgULS("不能解析页面的重定向：", "不能解析頁面的重新導向：") + ctx.pageName);
        onFailure(this);
        ++Morebits.wiki.numberOfActionsLeft;
        return false;
      }
      return true;
    };
    const fnApplyWatchlistExpiry = () => {
      if (ctx.watchlistExpiry) {
        if (!ctx.watched || Morebits.string.isInfinity(ctx.watchlistExpiry)) {
          return true;
        } else if (typeof ctx.watched === "string") {
          let newExpiry;
          const rel = ctx.watchlistExpiry.split(" ");
          try {
            newExpiry = new Morebits.date().add(rel[0], rel[1]);
          } catch {
            newExpiry = new Morebits.date(ctx.watchlistExpiry);
          }
          if (newExpiry.isValid()) {
            if (newExpiry.isAfter(new Morebits.date(ctx.watched))) {
              return true;
            }
          } else {
            return true;
          }
        }
      }
      return false;
    };
    const fnSaveSuccess = function() {
      ctx.editMode = "all";
      const response = ctx.saveApi.getResponse();
      if (response.edit.result === "Success") {
        const link = document.createElement("a");
        link.setAttribute("href", mw.util.getUrl(ctx.pageName));
        link.appendChild(document.createTextNode(ctx.pageName));
        ctx.statusElement.info(["完成（", link, "）"]);
        if (ctx.onSaveSuccess) {
          ctx.onSaveSuccess(this);
        }
        return;
      }
      if (response.edit.captcha) {
        ctx.statusElement.error(window.wgULS("不能保存页面，因服务器要求您输入验证码。", "不能儲存頁面，因伺服器要求您輸入驗證碼。"));
      } else {
        ctx.statusElement.error(window.wgULS("保存页面时由API得到未知错误", "儲存頁面時由API得到未知錯誤"));
      }
      ++Morebits.wiki.numberOfActionsLeft;
      ctx.onSaveFailure(this);
    };
    const fnSaveError = function() {
      const errorCode = ctx.saveApi.getErrorCode();
      if (errorCode === "editconflict" && ctx.conflictRetries++ < ctx.maxConflictRetries) {
        const purgeQuery = {
          action: "purge",
          titles: ctx.pageName
          // redirects are already resolved
        };
        const purgeApi = new Morebits.wiki.api(window.wgULS("检测到编辑冲突，正在更新服务器缓存", "檢測到編輯衝突，正在更新伺服器快取"), purgeQuery, () => {
          --Morebits.wiki.numberOfActionsLeft;
          ctx.statusElement.info(window.wgULS("检测到编辑冲突，重试修改", "檢測到編輯衝突，重試修改"));
          if (fnCanUseMwUserToken("edit")) {
            ctx.saveApi.post();
          } else {
            ctx.loadApi.post();
          }
        }, ctx.statusElement);
        purgeApi.post();
      } else if ((errorCode === null || errorCode === void 0) && ctx.retries++ < ctx.maxRetries) {
        ctx.statusElement.info(window.wgULS("保存失败，在2秒后重试……", "儲存失敗，在2秒後重試……"));
        --Morebits.wiki.numberOfActionsLeft;
        sleep(2e3).then(() => {
          ctx.saveApi.post();
        });
      } else {
        const response = ctx.saveApi.getResponse();
        const errorData = response.error || // bc error format
        response.errors[0].data;
        switch (errorCode) {
          case "protectedpage":
            ctx.statusElement.error(window.wgULS("不能保存修改：页面被保护", "不能儲存修改：頁面被保護"));
            break;
          case "abusefilter-disallowed":
            ctx.statusElement.error(window.wgULS("编辑被防滥用过滤器规则“", "編輯被防濫用過濾器規則「") + errorData.abusefilter.description + window.wgULS("”阻止。若您认为您的该次编辑是有意义的，请至 LIB_talk:管理员告示板 提报。", "」阻止。若您認為您的該次編輯是有意義的，請至 LIB_talk:管理員告示板 提報。"));
            break;
          case "abusefilter-warning":
            ctx.statusElement.error([window.wgULS("编辑被防滥用过滤器规则“", "編輯被防濫用過濾器規則「"), errorData.abusefilter.description, window.wgULS("”警告，若您仍希望做出该编辑，请尝试重新提交，根据过滤器的设置您可能可以作出此编辑。", "」警告，若您仍希望做出該編輯，請嘗試重新提交，根據過濾器的設定您可能可以作出此編輯。")]);
            break;
          case "spamblacklist": {
            const [spam] = errorData.spamblacklist.matches;
            ctx.statusElement.error(window.wgULS("不能保存页面，因URL ", "不能儲存頁面，因URL ") + spam + window.wgULS(" 在垃圾链接黑名单中。", " 在垃圾連結黑名單中。"));
            break;
          }
          default:
            ctx.statusElement.error(window.wgULS("不能保存修改：", "不能儲存修改：") + ctx.saveApi.getErrorText());
        }
        ctx.editMode = "all";
        if (ctx.onSaveFailure) {
          ctx.onSaveFailure(this);
        }
      }
    };
    const isTextRedirect = (text) => {
      if (!text) {
        return false;
      }
      return Morebits.l10n.redirectTagAliases.some((tag) => {
        return new RegExp("^\\s*".concat(tag, "\\W"), "i").test(text);
      });
    };
    const fnLookupCreationSuccess = function() {
      const response = ctx.lookupCreationApi.getResponse().query;
      if (!fnCheckPageName(response, ctx.onLookupCreationFailure)) {
        return;
      }
      const rev = response.pages[0].revisions && response.pages[0].revisions[0];
      if (!rev) {
        ctx.statusElement.error(window.wgULS("无法找到", "無法找到") + ctx.pageName + window.wgULS("的任何修订版本", "的任何修訂版本"));
        ctx.onLookupCreationFailure(this);
        return;
      }
      if (!ctx.lookupNonRedirectCreator || !isTextRedirect(rev.content)) {
        ctx.creator = rev.user;
        if (!ctx.creator) {
          ctx.statusElement.error(window.wgULS("无法获取页面创建者的名字", "無法取得頁面建立者的名字"));
          ctx.onLookupCreationFailure(this);
          return;
        }
        ctx.timestamp = rev.timestamp;
        if (!ctx.timestamp) {
          ctx.statusElement.error(window.wgULS("无法获取页面创建时间", "無法取得頁面建立時間"));
          ctx.onLookupCreationFailure(this);
          return;
        }
        ctx.statusElement.info(window.wgULS("已获取页面创建信息", "已取得頁面建立資訊"));
        ctx.onLookupCreationSuccess(this);
      } else {
        ctx.lookupCreationApi.query.rvlimit = 50;
        ctx.lookupCreationApi.query.titles = ctx.pageName;
        ctx.lookupCreationApi = new Morebits.wiki.api(window.wgULS("获取页面创建信息", "取得頁面建立資訊"), ctx.lookupCreationApi.query, fnLookupNonRedirectCreator, ctx.statusElement, ctx.onLookupCreationFailure);
        ctx.lookupCreationApi.setParent(this);
        ctx.lookupCreationApi.post();
      }
    };
    const fnLookupNonRedirectCreator = function() {
      const response = ctx.lookupCreationApi.getResponse().query;
      const revs = response.pages[0].revisions;
      var _iterator8 = _createForOfIteratorHelper(revs), _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
          const rev = _step8.value;
          if (!isTextRedirect(rev.content)) {
            ctx.creator = rev.user;
            ctx.timestamp = rev.timestamp;
            break;
          }
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
      if (!ctx.creator) {
        ctx.creator = revs[0].user;
        ctx.timestamp = revs[0].timestamp;
        if (!ctx.creator) {
          ctx.statusElement.error(window.wgULS("无法获取页面创建者的名字", "無法取得頁面建立者的名字"));
          ctx.onLookupCreationFailure(this);
          return;
        }
      }
      if (!ctx.timestamp) {
        ctx.statusElement.error(window.wgULS("无法获取页面创建时间", "無法取得頁面建立時間"));
        ctx.onLookupCreationFailure(this);
        return;
      }
      ctx.statusElement.info(window.wgULS("已获取页面创建信息", "已取得頁面建立資訊"));
      ctx.onLookupCreationSuccess(this);
    };
    const fnPreflightChecks = function(action, onFailure) {
      if (!Morebits.userIsSysop && action !== "move") {
        ctx.statusElement.error(window.wgULS("无法对页面进行“", "無法對頁面進行「") + action + window.wgULS("”操作：只有管理员可以进行此操作", "」操作：只有管理員可以進行此操作"));
        onFailure(this);
        return false;
      }
      if (!ctx.editSummary) {
        ctx.statusElement.error("Internal error: ".concat(action, " reason not set (use setEditSummary function)!"));
        onFailure(this);
        return false;
      }
      return true;
    };
    const fnProcessChecks = function(action, onFailure, response) {
      const [{
        missing
      }] = response.pages;
      const actionMissing = missing && ["delete", "move"].includes(action);
      const protectMissing = action === "protect" && missing && (ctx.protectEdit || ctx.protectMove);
      const saltMissing = action === "protect" && !missing && ctx.protectCreate;
      if (actionMissing || protectMissing || saltMissing) {
        ctx.statusElement.error("".concat(window.wgULS("无法对页面进行“", "無法對頁面進行「") + action + window.wgULS("”操作，因为页面", "」操作，因為頁面") + (missing ? "已不" : window.wgULS("已经", "已經")), "存在"));
        onFailure(this);
        return false;
      }
      let editprot;
      if (action === "undelete") {
        editprot = response.pages[0].protection.findLast((pr) => {
          return pr.type === "create" && pr.level === "sysop";
        });
      } else if (action === "delete" || action === "move") {
        editprot = response.pages[0].protection.findLast((pr) => {
          return pr.type === "edit" && pr.level === "sysop";
        });
      }
      if (editprot && !ctx.suppressProtectWarning && !confirm(window.wgULS("您即将对全保护页面“", "您即將對全保護頁面「") + ctx.pageName + (editprot.expiry === "infinity" ? window.wgULS("”（永久）", "」（永久）") : "".concat(window.wgULS("”（到期：", "」（到期：") + new Morebits.date(editprot.expiry).calendar("utc"), " (UTC)）")) + window.wgULS("”进行“", "」進行「") + action + window.wgULS("”操作", "」操作") + window.wgULS("。\n\n单击确定以继续操作，或单击取消以取消操作。", "。\n\n點擊確定以繼續操作，或點擊取消以取消操作。"))) {
        ctx.statusElement.error(window.wgULS("已取消对全保护页面的操作。", "已取消對全保護頁面的操作。"));
        onFailure(this);
        return false;
      }
      if (!response.tokens.csrftoken) {
        ctx.statusElement.error(window.wgULS("无法获取令牌。", "無法取得權杖。"));
        onFailure(this);
        return false;
      }
      return true;
    };
    const fnProcessMove = function() {
      let pageTitle;
      let token;
      if (fnCanUseMwUserToken("move")) {
        token = mw.user.tokens.get("csrfToken");
        pageTitle = ctx.pageName;
      } else {
        const response = ctx.moveApi.getResponse().query;
        if (!fnProcessChecks("move", ctx.onMoveFailure, response)) {
          return;
        }
        token = response.tokens.csrftoken;
        const [page] = response.pages;
        pageTitle = page.title;
        ctx.watched = page.watchlistexpiry || page.watched;
      }
      const query = {
        action: "move",
        from: pageTitle,
        to: ctx.moveDestination,
        token,
        reason: ctx.editSummary,
        watchlist: ctx.watchlistOption,
        format: "json"
      };
      if (ctx.changeTags) {
        query.tags = ctx.changeTags;
      }
      if (fnApplyWatchlistExpiry()) {
        query.watchlistexpiry = ctx.watchlistExpiry;
      }
      if (ctx.moveTalkPage) {
        query.movetalk = "true";
      }
      if (ctx.moveSubpages) {
        query.movesubpages = "true";
      }
      if (ctx.moveSuppressRedirect) {
        query.noredirect = "true";
      }
      ctx.moveProcessApi = new Morebits.wiki.api(window.wgULS("移动页面……", "移動頁面……"), query, ctx.onMoveSuccess, ctx.statusElement, ctx.onMoveFailure);
      ctx.moveProcessApi.setParent(this);
      ctx.moveProcessApi.post();
    };
    const fnProcessPatrol = function() {
      const query = {
        action: "patrol",
        format: "json"
      };
      if (ctx.rcid) {
        query.rcid = ctx.rcid;
        query.token = mw.user.tokens.get("patrolToken");
      } else {
        const response = ctx.patrolApi.getResponse().query;
        if (!response.recentchanges[0].unpatrolled) {
          return;
        }
        const [{
          lastrevid
        }] = response.pages;
        if (!lastrevid) {
          return;
        }
        query.revid = lastrevid;
        const token = response.tokens.csrftoken;
        if (!token) {
          return;
        }
        query.token = token;
      }
      if (ctx.changeTags) {
        query.tags = ctx.changeTags;
      }
      const patrolStat = new Morebits.status(window.wgULS("标记页面为已巡查", "標記頁面為已巡查"));
      ctx.patrolProcessApi = new Morebits.wiki.api(window.wgULS("巡查页面……", "巡查頁面……"), query, null, patrolStat);
      ctx.patrolProcessApi.setParent(this);
      ctx.patrolProcessApi.post();
    };
    const fnProcessDelete = function() {
      let pageTitle;
      let token;
      if (fnCanUseMwUserToken("delete")) {
        token = mw.user.tokens.get("csrfToken");
        pageTitle = ctx.pageName;
      } else {
        const response = ctx.deleteApi.getResponse().query;
        if (!fnProcessChecks("delete", ctx.onDeleteFailure, response)) {
          return;
        }
        token = response.tokens.csrftoken;
        const [page] = response.pages;
        pageTitle = page.title;
        ctx.watched = page.watchlistexpiry || page.watched;
      }
      const query = {
        action: "delete",
        title: pageTitle,
        token,
        reason: ctx.editSummary,
        watchlist: ctx.watchlistOption,
        format: "json"
      };
      if (ctx.changeTags) {
        query.tags = ctx.changeTags;
      }
      if (fnApplyWatchlistExpiry()) {
        query.watchlistexpiry = ctx.watchlistExpiry;
      }
      ctx.deleteProcessApi = new Morebits.wiki.api(window.wgULS("删除页面……", "刪除頁面……"), query, ctx.onDeleteSuccess, ctx.statusElement, fnProcessDeleteError);
      ctx.deleteProcessApi.setParent(this);
      ctx.deleteProcessApi.post();
    };
    const fnProcessDeleteError = function() {
      const errorCode = ctx.deleteProcessApi.getErrorCode();
      if (errorCode === "internal_api_error_DBQueryError" && ctx.retries++ < ctx.maxRetries) {
        ctx.statusElement.info(window.wgULS("数据库查询错误，重试", "資料庫查詢錯誤，重試"));
        --Morebits.wiki.numberOfActionsLeft;
        ctx.deleteProcessApi.post();
      } else if (errorCode === "missingtitle") {
        ctx.statusElement.error(window.wgULS("不能删除页面，因其已不存在", "不能刪除頁面，因其已不存在"));
        if (ctx.onDeleteFailure) {
          ctx.onDeleteFailure.call(this, ctx.deleteProcessApi);
        }
      } else {
        ctx.statusElement.error(window.wgULS("无法删除页面：", "無法刪除頁面：") + ctx.deleteProcessApi.getErrorText());
        if (ctx.onDeleteFailure) {
          ctx.onDeleteFailure.call(this, ctx.deleteProcessApi);
        }
      }
    };
    const fnProcessUndelete = function() {
      let pageTitle;
      let token;
      if (fnCanUseMwUserToken("undelete")) {
        token = mw.user.tokens.get("csrfToken");
        pageTitle = ctx.pageName;
      } else {
        const response = ctx.undeleteApi.getResponse().query;
        if (!fnProcessChecks("undelete", ctx.onUndeleteFailure, response)) {
          return;
        }
        token = response.tokens.csrftoken;
        const [page] = response.pages;
        pageTitle = page.title;
        ctx.watched = page.watchlistexpiry || page.watched;
      }
      const query = {
        action: "undelete",
        title: pageTitle,
        token,
        reason: ctx.editSummary,
        watchlist: ctx.watchlistOption,
        format: "json"
      };
      if (ctx.changeTags) {
        query.tags = ctx.changeTags;
      }
      if (fnApplyWatchlistExpiry()) {
        query.watchlistexpiry = ctx.watchlistExpiry;
      }
      ctx.undeleteProcessApi = new Morebits.wiki.api(window.wgULS("还原页面……", "還原頁面……"), query, ctx.onUndeleteSuccess, ctx.statusElement, fnProcessUndeleteError);
      ctx.undeleteProcessApi.setParent(this);
      ctx.undeleteProcessApi.post();
    };
    const fnProcessUndeleteError = function() {
      const errorCode = ctx.undeleteProcessApi.getErrorCode();
      if (errorCode === "internal_api_error_DBQueryError") {
        if (ctx.retries++ < ctx.maxRetries) {
          ctx.statusElement.info(window.wgULS("数据库查询错误，重试", "資料庫查詢錯誤，重試"));
          --Morebits.wiki.numberOfActionsLeft;
          ctx.undeleteProcessApi.post();
        } else {
          ctx.statusElement.error(window.wgULS("持续的数据库查询错误，重新加载页面并重试", "持續的資料庫查詢錯誤，重新載入頁面並重試"));
          if (ctx.onUndeleteFailure) {
            ctx.onUndeleteFailure.call(this, ctx.undeleteProcessApi);
          }
        }
      } else if (errorCode === "cantundelete") {
        ctx.statusElement.error(window.wgULS("无法还原删除页面，因没有版本供还原或已被还原", "無法還原刪除頁面，因沒有版本供還原或已被還原"));
        if (ctx.onUndeleteFailure) {
          ctx.onUndeleteFailure.call(this, ctx.undeleteProcessApi);
        }
      } else {
        ctx.statusElement.error(window.wgULS("无法还原页面：", "無法還原頁面：") + ctx.undeleteProcessApi.getErrorText());
        if (ctx.onUndeleteFailure) {
          ctx.onUndeleteFailure.call(this, ctx.undeleteProcessApi);
        }
      }
    };
    const fnProcessProtect = function() {
      const response = ctx.protectApi.getResponse().query;
      if (!fnProcessChecks("protect", ctx.onProtectFailure, response)) {
        return;
      }
      const token = response.tokens.csrftoken;
      const [page] = response.pages;
      const pageTitle = page.title;
      ctx.watched = page.watchlistexpiry || page.watched;
      const prs = response.pages[0].protection;
      let editprot;
      let moveprot;
      let createprot;
      var _iterator9 = _createForOfIteratorHelper(prs), _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
          const pr = _step9.value;
          if (pr.type === "edit" && !pr.source) {
            editprot = pr;
          } else if (pr.type === "move") {
            moveprot = pr;
          } else if (pr.type === "create") {
            createprot = pr;
          }
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      if (!ctx.protectEdit && editprot) {
        ctx.protectEdit = {
          level: editprot.level,
          expiry: editprot.expiry
        };
      }
      if (!ctx.protectMove && moveprot) {
        ctx.protectMove = {
          level: moveprot.level,
          expiry: moveprot.expiry
        };
      }
      if (!ctx.protectCreate && createprot) {
        ctx.protectCreate = {
          level: createprot.level,
          expiry: createprot.expiry
        };
      }
      if (ctx.protectCascade === null) {
        ctx.protectCascade = !!prs.filter((pr) => {
          return pr.cascade;
        }).length;
      }
      if (ctx.protectCascade) {
        if ((!ctx.protectEdit || ctx.protectEdit.level !== "sysop" || !ctx.protectMove || ctx.protectMove.level !== "sysop") && !confirm(window.wgULS("您已对“", "您已對「") + ctx.pageName + window.wgULS("”启用了连锁保护", "」啟用了連鎖保護") + window.wgULS("，但没有设置仅管理员的保护级别。\n\n", "，但沒有設定僅管理員的保護級別。\n\n") + window.wgULS("单击确认以自动调整并继续连锁全保护，单击取消以跳过此操作", "點擊確認以自動調整並繼續連鎖全保護，點擊取消以跳過此操作"))) {
          ctx.statusElement.error(window.wgULS("连锁保护已取消。", "連鎖保護已取消。"));
          ctx.onProtectFailure(this);
          return;
        }
        ctx.protectEdit.level = "sysop";
        ctx.protectMove.level = "sysop";
      }
      const protections = [];
      const expirys = [];
      if (ctx.protectEdit) {
        protections[protections.length] = "edit=".concat(ctx.protectEdit.level);
        expirys[expirys.length] = ctx.protectEdit.expiry;
      }
      if (ctx.protectMove) {
        protections[protections.length] = "move=".concat(ctx.protectMove.level);
        expirys[expirys.length] = ctx.protectMove.expiry;
      }
      if (ctx.protectCreate) {
        protections[protections.length] = "create=".concat(ctx.protectCreate.level);
        expirys[expirys.length] = ctx.protectCreate.expiry;
      }
      const query = {
        action: "protect",
        title: pageTitle,
        token,
        protections: protections.join("|"),
        expiry: expirys.join("|"),
        reason: ctx.editSummary,
        watchlist: ctx.watchlistOption,
        format: "json"
      };
      if (ctx.changeTags) {
        query.tags = ctx.changeTags;
      }
      if (fnApplyWatchlistExpiry()) {
        query.watchlistexpiry = ctx.watchlistExpiry;
      }
      if (ctx.protectCascade) {
        query.cascade = "true";
      }
      ctx.protectProcessApi = new Morebits.wiki.api(window.wgULS("保护页面……", "保護頁面……"), query, ctx.onProtectSuccess, ctx.statusElement, ctx.onProtectFailure);
      ctx.protectProcessApi.setParent(this);
      ctx.protectProcessApi.post();
    };
    const sleep = (milliseconds) => {
      const deferred = $.Deferred();
      setTimeout(deferred.resolve, milliseconds);
      return deferred;
    };
  };
  Morebits.wiki.preview = function(previewbox) {
    this.previewbox = previewbox;
    $(previewbox).addClass("morebits-previewbox").hide();
    this.beginRender = (wikitext, pageTitle, sectionTitle) => {
      $(previewbox).show();
      const statusspan = document.createElement("span");
      previewbox.appendChild(statusspan);
      Morebits.status.init(statusspan);
      let pageName = mw.config.get("wgPageName");
      if (mw.config.get("wgPageContentModel") !== "wikitext") {
        pageName = "Draft:".concat(pageName);
      }
      const query = {
        action: "parse",
        prop: ["text", "modules"],
        pst: true,
        // PST = pre-save transform; this makes substitution work properly
        preview: true,
        text: wikitext,
        title: pageTitle || pageName,
        disablelimitreport: true,
        disableeditsection: true,
        uselang: mw.config.get("wgUserLanguage"),
        // Use wgUserLanguage for preview
        format: "json"
      };
      if (sectionTitle) {
        query.section = "new";
        query.sectiontitle = sectionTitle;
      }
      const renderApi = new Morebits.wiki.api(window.wgULS("加载中……", "載入中……"), query, fnRenderSuccess, new Morebits.status(window.wgULS("预览", "預覽")));
      renderApi.post();
    };
    const fnRenderSuccess = (apiobj) => {
      const response = apiobj.getResponse();
      const html = response.parse.text;
      if (!html) {
        apiobj.statelem.error(window.wgULS("加载预览失败，或模板为空", "載入預覽失敗，或模板為空"));
        return;
      }
      previewbox.innerHTML = html;
      mw.loader.load(response.parse.modulestyles);
      mw.loader.load(response.parse.modules);
      $(previewbox).find("a").attr("target", "_blank").attr("rel", "noopener noreferrer");
    };
    this.closePreview = () => {
      $(previewbox).empty().hide();
    };
  };
  Morebits.wikitext = {};
  Morebits.wikitext.parseTemplate = (text, start) => {
    start || (start = 0);
    const level = [];
    let count = -1;
    let unnamed = 0;
    let equals = -1;
    let current = "";
    const result = {
      name: "",
      parameters: {}
    };
    let key;
    let value;
    const findParam = (final) => {
      if (count === -1) {
        result.name = current.slice(2).trim();
        ++count;
      } else if (equals === -1) {
        const param = final ? current.slice(equals + 1, -2) : current;
        if (param) {
          result.parameters[++unnamed] = param;
          ++count;
        }
      } else {
        key = current.slice(0, Math.max(0, equals)).trim();
        value = final ? current.slice(equals + 1, -2).trim() : current.slice(Math.max(0, equals + 1)).trim();
        result.parameters[key] = value;
        equals = -1;
      }
    };
    for (let i = start; i < text.length; ++i) {
      const test3 = text.slice(i, i + 3);
      if (test3 === "{{{" || test3 === "}}}" && level.at(-1) === 3) {
        current += test3;
        i += 2;
        if (test3 === "{{{") {
          level[level.length] = 3;
        } else {
          level.pop();
        }
        continue;
      }
      const test2 = text.slice(i, i + 2);
      if (test2 === "{{" || test2 === "[[") {
        current += test2;
        ++i;
        if (test2 === "{{") {
          level[level.length] = 2;
        } else {
          level[level.length] = "wl";
        }
        continue;
      }
      if (test2 === "}}" && level.at(-1) === 2 || test2 === "]]" && level.at(-1) === "wl") {
        current += test2;
        ++i;
        level.pop();
        if (test2 === "}}" && level.length === 0) {
          findParam(true);
          break;
        }
        continue;
      }
      if (text.charAt(i) === "|" && level.length === 1) {
        findParam();
        current = "";
      } else if (equals === -1 && text.charAt(i) === "=" && level.length === 1) {
        equals = current.length;
        current += text.charAt(i);
      } else {
        current += text.charAt(i);
      }
    }
    return result;
  };
  Morebits.wikitext.page = function(text) {
    this.text = text;
  };
  Morebits.wikitext.page.prototype = {
    text: "",
    /**
     * Removes links to `link_target` from the page text.
     *
     * @param {string} linkTarget
     * @returns {Morebits.wikitext.page}
     */
    removeLink(linkTarget) {
      const mwTitle = mw.Title.newFromText(linkTarget);
      const namespaceID = mwTitle.getNamespaceId();
      const title = mwTitle.getMainText();
      let linkRegexString = "";
      if (namespaceID !== 0) {
        linkRegexString = "".concat(Morebits.namespaceRegex(namespaceID), ":");
      }
      linkRegexString += Morebits.pageNameRegex(title);
      const isFileOrCategory = [6, 14].includes(namespaceID);
      const colon = isFileOrCategory ? ":" : ":?";
      const simpleLinkRegex = new RegExp("\\[\\[".concat(colon, "(").concat(linkRegexString, ")\\]\\]"), "g");
      const pipedLinkRegex = new RegExp("\\[\\[".concat(colon).concat(linkRegexString, "\\|(.+?)\\]\\]"), "g");
      this.text = this.text.replace(simpleLinkRegex, "$1").replace(pipedLinkRegex, "$1");
      return this;
    },
    /**
     * Comments out images from page text; if used in a gallery, deletes the whole line.
     * If used as a template argument (not necessarily with `File:` prefix), the template parameter is commented out.
     *
     * @param {string} image - Image name without `File:` prefix.
     * @param {string} [reason] - Reason to be included in comment, alongside the commented-out image.
     * @returns {Morebits.wikitext.page}
     */
    commentOutImage(image, reason) {
      const unbinder = new Morebits.unbinder(this.text);
      unbinder.unbind("<!--", "-->");
      reason = reason ? "".concat(reason, ": ") : "";
      const imageRegexString = Morebits.pageNameRegex(image);
      const linksRegex = new RegExp("\\[\\[".concat(Morebits.namespaceRegex(6), ":\\s*").concat(imageRegexString, "\\s*[\\|(?:\\]\\])]"));
      const allLinks = Morebits.string.splitWeightedByKeys(unbinder.content, "[[", "]]");
      var _iterator0 = _createForOfIteratorHelper(allLinks), _step0;
      try {
        for (_iterator0.s(); !(_step0 = _iterator0.n()).done; ) {
          const allLink = _step0.value;
          if (linksRegex.test(allLink)) {
            const replacement = "<!-- ".concat(reason).concat(allLink, " -->");
            unbinder.content = unbinder.content.replace(allLink, replacement);
            unbinder.unbind("<!--", "-->");
          }
        }
      } catch (err) {
        _iterator0.e(err);
      } finally {
        _iterator0.f();
      }
      const galleryImageRegex = new RegExp("(^\\s*".concat(Morebits.namespaceRegex(6), ":\\s*").concat(imageRegexString, "\\s*(?:\\|.*?$|$))"), "mg");
      unbinder.content = unbinder.content.replace(galleryImageRegex, "<!-- ".concat(reason, "$1 -->"));
      unbinder.unbind("<!--", "-->");
      const freeImageRegex = new RegExp("(\\|\\s*(?:[\\w\\s]+\\=)?\\s*(?:".concat(Morebits.namespaceRegex(6), ":\\s*)?").concat(imageRegexString, ")"), "mg");
      unbinder.content = unbinder.content.replace(freeImageRegex, "<!-- ".concat(reason, "$1 -->"));
      this.text = unbinder.rebind();
      return this;
    },
    /**
     * Converts uses of [[File:`image`]] to [[File:`image`|`data`]].
     *
     * @param {string} image - Image name without File: prefix.
     * @param {string} data - The display options.
     * @returns {Morebits.wikitext.page}
     */
    addToImageComment(image, data) {
      const imageRegexString = Morebits.pageNameRegex(image);
      const linksRegex = new RegExp("\\[\\[".concat(Morebits.namespaceRegex(6), ":\\s*").concat(imageRegexString, "\\s*[\\|(?:\\]\\])]"));
      const allLinks = Morebits.string.splitWeightedByKeys(this.text, "[[", "]]");
      var _iterator1 = _createForOfIteratorHelper(allLinks), _step1;
      try {
        for (_iterator1.s(); !(_step1 = _iterator1.n()).done; ) {
          let replacement = _step1.value;
          if (linksRegex.test(replacement)) {
            replacement = replacement.replace(/\]\]$/, "|".concat(data, "]]"));
            this.text = this.text.replace(replacement, replacement);
          }
        }
      } catch (err) {
        _iterator1.e(err);
      } finally {
        _iterator1.f();
      }
      const galleryRegex = new RegExp("^(\\s*".concat(imageRegexString, ".*?)\\|?(.*?)$"), "mg");
      const newtext = "$1|$2 ".concat(data);
      this.text = this.text.replace(galleryRegex, newtext);
      return this;
    },
    /**
     * Remove all transclusions of a template from page text.
     *
     * @param {string} template - Page name whose transclusions are to be removed,
     * include namespace prefix only if not in template namespace.
     * @returns {Morebits.wikitext.page}
     */
    removeTemplate(template) {
      const templateRegexString = Morebits.pageNameRegex(template);
      const linksRegex = new RegExp("\\{\\{(?:".concat(Morebits.namespaceRegex(10), ":)?\\s*").concat(templateRegexString, "\\s*[\\|(?:\\}\\})]"));
      const allTemplates = Morebits.string.splitWeightedByKeys(this.text, "{{", "}}", ["{{{", "}}}"]);
      var _iterator10 = _createForOfIteratorHelper(allTemplates), _step10;
      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
          const allTemplate = _step10.value;
          if (linksRegex.test(allTemplate)) {
            this.text = this.text.replace(allTemplate, "");
          }
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
      return this;
    },
    /**
     * Smartly insert a tag atop page text but after specified templates,
     * such as hatnotes, short description, or deletion and protection templates.
     * Notably, does *not* insert a newline after the tag.
     *
     * @param {string} tag - The tag to be inserted.
     * @param {string|string[]} regex - Templates after which to insert tag,
     * given as either as a (regex-valid) string or an array to be joined by pipes.
     * @param {string} [flags=i] - Regex flags to apply.  `''` to provide no flags;
     * other falsey values will default to `i`.
     * @param {string|string[]} [preRegex] - Optional regex string or array to match
     * before any template matches (i.e. before `{{`), such as html comments.
     * @returns {Morebits.wikitext.page}
     */
    insertAfterTemplates(tag, regex, flags, preRegex) {
      if (tag === void 0) {
        throw new TypeError("No tag provided");
      }
      if (regex === void 0 || !regex.length) {
        throw new Error("No regex provided");
      } else if (Array.isArray(regex)) {
        regex = regex.join("|");
      }
      if (typeof flags !== "string") {
        flags = "i";
      }
      if (!preRegex || !preRegex.length) {
        preRegex = "";
      } else if (Array.isArray(preRegex)) {
        preRegex = preRegex.join("|");
      }
      this.text = this.text.replace(new RegExp(
        // leading whitespace
        // capture template(s)
        // Pre-template regex, such as leading html comments
        // begin template format
        // Template regex
        // end main template name, optionally with a number
        // Probably remove the (?:) though
        // template parameters
        // end template format
        // end capture
        // trailing whitespace
        "^\\s*(?:((?:\\s*".concat(
          // Pre-template regex, such as leading html comments
          preRegex,
          "|\\{\\{\\s*(?:"
        ).concat(
          // Template regex
          regex,
          ")\\d*\\s*(\\|(?:\\{\\{[^{}]*\\}\\}|[^{}])*)?\\}\\})+(?:\\s*\\n)?)\\s*)?"
        ),
        flags
      ), "$1".concat(tag));
      return this;
    },
    /**
     * Get the manipulated wikitext.
     *
     * @returns {string}
     */
    getText() {
      return this.text;
    }
  };
  Morebits.userspaceLogger = function(logPageName) {
    if (!logPageName) {
      throw new Error("no log page name specified");
    }
    this.initialText = "";
    this.headerLevel = 3;
    this.changeTags = "";
    this.log = function(logText, summaryText) {
      const def = $.Deferred();
      if (!logText) {
        return def.reject();
      }
      const page = new Morebits.wiki.page("User:".concat(mw.config.get("wgUserName"), "/").concat(logPageName), window.wgULS("将项目加入到用户空间日志", "將項目加入到使用者空間日誌"));
      page.load((pageobj) => {
        let text = pageobj.getPageText() || this.initialText;
        const date = new Morebits.date(pageobj.getLoadTime());
        if (!date.monthHeaderRegex().exec(text)) {
          text += "\n\n".concat(date.monthHeader(this.headerLevel));
        }
        pageobj.setPageText("".concat(text, "\n").concat(logText));
        pageobj.setEditSummary(summaryText);
        pageobj.setChangeTags(this.changeTags);
        pageobj.setCreateOption("recreate");
        pageobj.save(def.resolve, def.reject);
      });
      return def;
    };
  };
  Morebits.status = function(text, stat, type) {
    this.textRaw = text;
    this.text = Morebits.createHtml(text);
    this.type = type || "status";
    this.generate();
    if (stat) {
      this.update(stat, type);
    }
  };
  Morebits.status.init = (root) => {
    if (!(root instanceof Element)) {
      throw new TypeError("object not an instance of Element");
    }
    while (root.hasChildNodes()) {
      root.removeChild(root.firstChild);
    }
    Morebits.status.root = root;
    Morebits.status.errorEvent = null;
  };
  Morebits.status.root = null;
  Morebits.status.onError = (handler) => {
    if (typeof handler === "function") {
      Morebits.status.errorEvent = handler;
    } else {
      throw new TypeError("Morebits.status.onError: handler is not a function");
    }
  };
  Morebits.status.prototype = {
    stat: null,
    statRaw: null,
    text: null,
    textRaw: null,
    type: "status",
    target: null,
    node: null,
    linked: false,
    /** Add the status element node to the DOM. */
    link() {
      if (!this.linked && Morebits.status.root) {
        Morebits.status.root.appendChild(this.node);
        this.linked = true;
      }
    },
    /** Remove the status element node from the DOM. */
    unlink() {
      if (this.linked) {
        Morebits.status.root.removeChild(this.node);
        this.linked = false;
      }
    },
    /**
     * Update the status.
     *
     * @param {string} status - Part of status message after colon.
     * @param {string} type - 'status' (blue), 'info' (green), 'warn'
     * (red), or 'error' (bold red).
     */
    update(status, type) {
      this.statRaw = status;
      this.stat = Morebits.createHtml(status);
      if (type) {
        this.type = type;
        if (type === "error") {
          Morebits.wiki.numberOfActionsLeft = 1e3;
          if (Morebits.status.errorEvent) {
            Morebits.status.errorEvent();
          }
          console.error("[Morebits] ".concat(this.textRaw, ": ").concat(this.statRaw));
        }
      }
      this.render();
    },
    /** Produce the html for first part of the status message. */
    generate() {
      this.node = document.createElement("div");
      this.node.appendChild(document.createElement("span")).appendChild(this.text);
      this.node.appendChild(document.createElement("span")).appendChild(document.createTextNode(": "));
      this.target = this.node.appendChild(document.createElement("span"));
      this.target.appendChild(document.createTextNode(""));
    },
    /** Complete the html, for the second part of the status message. */
    render() {
      this.node.className = "morebits_status_".concat(this.type);
      while (this.target.hasChildNodes()) {
        this.target.removeChild(this.target.firstChild);
      }
      this.target.appendChild(this.stat);
      this.link();
    },
    status(status) {
      this.update(status, "status");
    },
    info(status) {
      this.update(status, "info");
    },
    warn(status) {
      this.update(status, "warn");
    },
    error(status) {
      this.update(status, "error");
    }
  };
  Morebits.status.status = (text, status) => {
    return new Morebits.status(text, status);
  };
  Morebits.status.info = (text, status) => {
    return new Morebits.status(text, status, "info");
  };
  Morebits.status.warn = (text, status) => {
    return new Morebits.status(text, status, "warn");
  };
  Morebits.status.error = (text, status) => {
    return new Morebits.status(text, status, "error");
  };
  Morebits.status.actionCompleted = (text) => {
    const node = document.createElement("div");
    node.appendChild(document.createElement("b")).appendChild(document.createTextNode(text));
    node.className = "morebits_status_info morebits_action_complete";
    if (Morebits.status.root) {
      Morebits.status.root.appendChild(node);
    }
  };
  Morebits.status.printUserText = (comments, message) => {
    const p = document.createElement("p");
    p.innerHTML = message;
    const div = document.createElement("div");
    div.className = "morebits-usertext";
    div.style.marginTop = "0";
    div.style.whiteSpace = "pre-wrap";
    div.textContent = comments;
    p.appendChild(div);
    Morebits.status.root.appendChild(p);
  };
  Morebits.htmlNode = (type, content, color) => {
    const node = document.createElement(type);
    if (color) {
      node.style.color = color;
    }
    node.appendChild(document.createTextNode(content));
    return node;
  };
  Morebits.checkboxShiftClickSupport = (jQuerySelector, jQueryContext) => {
    let lastCheckbox = null;
    const clickHandler = function clickHandler2(event) {
      const thisCb = this;
      if (event.shiftKey && lastCheckbox !== null) {
        const cbs = $(jQuerySelector, jQueryContext);
        let index = -1;
        let lastIndex = -1;
        let i;
        for (i = 0; i < cbs.length; i++) {
          if (cbs[i] === thisCb) {
            index = i;
            if (lastIndex > -1) {
              break;
            }
          }
          if (cbs[i] === lastCheckbox) {
            lastIndex = i;
            if (index > -1) {
              break;
            }
          }
        }
        if (index > -1 && lastIndex > -1) {
          const endState = thisCb.checked;
          let start;
          let finish;
          if (index < lastIndex) {
            start = index + 1;
            finish = lastIndex;
          } else {
            start = lastIndex;
            finish = index - 1;
          }
          for (i = start; i <= finish; i++) {
            if (cbs[i].checked !== endState) {
              cbs[i].click();
            }
          }
        }
      }
      lastCheckbox = thisCb;
      return true;
    };
    $(jQuerySelector, jQueryContext).on("click", clickHandler);
  };
  Morebits.batchOperation = function(currentAction) {
    const ctx = {
      // backing fields for public properties
      pageList: null,
      options: {
        chunkSize: 50,
        preserveIndividualStatusLines: false
      },
      // internal counters, etc.
      statusElement: new Morebits.status(currentAction || window.wgULS("执行批量操作", "執行批次操作")),
      worker: null,
      // function that executes for each item in pageList
      postFinish: null,
      // function that executes when the whole batch has been processed
      countStarted: 0,
      countFinished: 0,
      countFinishedSuccess: 0,
      currentChunkIndex: -1,
      pageChunks: [],
      running: false
    };
    this.getStatusElement = () => {
      return ctx.statusElement;
    };
    this.setPageList = (pageList) => {
      ctx.pageList = pageList;
    };
    this.setOption = (optionName, optionValue) => {
      ctx.options[optionName] = optionValue;
    };
    this.run = (worker, postFinish) => {
      if (ctx.running) {
        ctx.statusElement.error(window.wgULS("批量操作已在运行", "批次操作已在執行"));
        return;
      }
      ctx.running = true;
      ctx.worker = worker;
      ctx.postFinish = postFinish;
      ctx.countStarted = 0;
      ctx.countFinished = 0;
      ctx.countFinishedSuccess = 0;
      ctx.currentChunkIndex = -1;
      ctx.pageChunks = [];
      const total = ctx.pageList.length;
      if (!total) {
        ctx.statusElement.info(window.wgULS("没有指定页面", "沒有指定頁面"));
        ctx.running = false;
        if (ctx.postFinish) {
          ctx.postFinish();
        }
        return;
      }
      ctx.pageChunks = Morebits.array.chunk(ctx.pageList, ctx.options.chunkSize);
      Morebits.wiki.addCheckpoint();
      ctx.statusElement.status("0%");
      fnStartNewChunk();
    };
    this.workerSuccess = (arg) => {
      if (arg instanceof Morebits.wiki.api || arg instanceof Morebits.wiki.page) {
        const statelem = arg.getStatusElement();
        if (ctx.options.preserveIndividualStatusLines) {
          if (arg.getPageName || arg.pageName || arg.query && arg.query.title) {
            const pageName = arg.getPageName ? arg.getPageName() : arg.pageName || arg.query.title;
            statelem.info("完成（[[".concat(pageName, "]]）"));
          } else {
            statelem.info("完成");
          }
        } else {
          statelem.unlink();
        }
      } else if (typeof arg === "string" && ctx.options.preserveIndividualStatusLines) {
        new Morebits.status(arg, "完成（[[".concat(arg, "]]）"));
      }
      ctx.countFinishedSuccess++;
      fnDoneOne();
    };
    this.workerFailure = () => {
      fnDoneOne();
    };
    const thisProxy = this;
    const fnStartNewChunk = () => {
      const chunk = ctx.pageChunks[++ctx.currentChunkIndex];
      if (!chunk) {
        return;
      }
      ctx.countStarted += chunk.length;
      var _iterator11 = _createForOfIteratorHelper(chunk), _step11;
      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done; ) {
          const page = _step11.value;
          ctx.worker(page, thisProxy);
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }
    };
    const fnDoneOne = () => {
      ctx.countFinished++;
      const total = ctx.pageList.length;
      if (ctx.countFinished < total) {
        const progress = Math.round(100 * ctx.countFinished / total);
        ctx.statusElement.status("".concat(progress, "%"));
        if (ctx.countFinished >= ctx.countStarted - Math.max(ctx.options.chunkSize / 10, 2) && Math.floor(ctx.countFinished / ctx.options.chunkSize) > ctx.currentChunkIndex) {
          fnStartNewChunk();
        }
      } else if (ctx.countFinished === total) {
        const statusString = "完成（".concat(ctx.countFinishedSuccess, "/").concat(ctx.countFinished, "操作成功完成）");
        if (ctx.countFinishedSuccess < ctx.countFinished) {
          ctx.statusElement.warn(statusString);
        } else {
          ctx.statusElement.info(statusString);
        }
        if (ctx.postFinish) {
          ctx.postFinish();
        }
        Morebits.wiki.removeCheckpoint();
        ctx.running = false;
      } else {
        ctx.statusElement.warn("".concat(window.wgULS("完成（多执行了", "完成（多執行了") + (ctx.countFinished - total), "次）"));
        Morebits.wiki.removeCheckpoint();
        ctx.running = false;
      }
    };
  };
  Morebits.simpleWindow = function(width, height) {
    const content = document.createElement("div");
    this.content = content;
    content.className = "morebits-dialog-content";
    content.id = "morebits-dialog-content-".concat(Math.round(Math.random() * 1e15));
    this.height = height;
    $(this.content).dialog({
      autoOpen: false,
      buttons: {
        "Placeholder button": () => {
        }
      },
      dialogClass: "morebits-dialog",
      width: Math.min(Number.parseInt(window.innerWidth, 10), Number.parseInt(width || 800, 10)),
      // give jQuery the given height value (which represents the anticipated height of the dialog) here, so
      // it can position the dialog appropriately
      // the 20 pixels represents adjustment for the extra height of the jQuery dialog "chrome", compared
      // to that of the old SimpleWindow
      height: height + 20,
      close: (event) => {
        $(event.target).dialog("destroy").remove();
      },
      resizeStart() {
        [this.scrollbox] = $(this).find(".morebits-scrollbox");
        if (this.scrollbox) {
          this.scrollbox.style.maxHeight = "none";
        }
      },
      resizeStop() {
        this.scrollbox = null;
      },
      resize() {
        this.style.maxHeight = "";
        if (this.scrollbox) {
          this.scrollbox.style.width = "";
        }
      }
    });
    const $widget = $(this.content).dialog("widget");
    $widget.find("button").each((key, value) => {
      value.parentNode.removeChild(value);
    });
    const buttonspan = document.createElement("span");
    buttonspan.className = "morebits-dialog-buttons";
    const linksspan = document.createElement("span");
    linksspan.className = "morebits-dialog-footerlinks";
    $widget.find(".ui-dialog-buttonpane").append(buttonspan, linksspan);
    $widget.resizable("option", "alsoResize", "#".concat(this.content.id, " .morebits-scrollbox, #").concat(this.content.id));
  };
  Morebits.simpleWindow.prototype = {
    buttons: [],
    height: 600,
    hasFooterLinks: false,
    scriptName: null,
    /**
     * Focuses the dialog. This might work, or on the contrary, it might not.
     *
     * @returns {Morebits.simpleWindow}
     */
    focus() {
      $(this.content).dialog("moveToTop");
      return this;
    },
    /**
     * Closes the dialog. If this is set as an event handler, it will stop the event
     * from doing anything more.
     *
     * @param {event} [event]
     * @returns {Morebits.simpleWindow}
     */
    close(event) {
      if (event) {
        event.preventDefault();
      }
      $(this.content).dialog("close");
      return this;
    },
    /**
     * Shows the dialog. Calling display() on a dialog that has previously been closed
     * might work, but it is not guaranteed.
     *
     * @returns {Morebits.simpleWindow}
     */
    display() {
      if (this.scriptName) {
        const $widget = $(this.content).dialog("widget");
        $widget.find(".morebits-dialog-scriptname").remove();
        const scriptnamespan = document.createElement("span");
        scriptnamespan.className = "morebits-dialog-scriptname";
        scriptnamespan.textContent = "".concat(this.scriptName, " · ");
        $widget.find(".ui-dialog-title").prepend(scriptnamespan);
      }
      const dialog = $(this.content).dialog("open");
      if (window.setupTooltips && window.pg && window.pg.re && window.pg.re.diff) {
        dialog.parent()[0].ranSetupTooltipsAlready = false;
        window.setupTooltips(dialog.parent()[0]);
      }
      this.setHeight(this.height);
      return this;
    },
    /**
     * Sets the dialog title.
     *
     * @param {string} title
     * @returns {Morebits.simpleWindow}
     */
    setTitle(title) {
      $(this.content).dialog("option", "title", title);
      return this;
    },
    /**
     * Sets the script name, appearing as a prefix to the title to help users determine which
     * user script is producing which dialog. For instance, Twinkle modules set this to "Twinkle".
     *
     * @param {string} name
     * @returns {Morebits.simpleWindow}
     */
    setScriptName(name) {
      this.scriptName = name;
      return this;
    },
    /**
     * Sets the dialog width.
     *
     * @param {number} width
     * @returns {Morebits.simpleWindow}
     */
    setWidth(width) {
      $(this.content).dialog("option", "width", width);
      return this;
    },
    /**
     * Sets the dialog's maximum height. The dialog will auto-size to fit its contents,
     * but the content area will grow no larger than the height given here.
     *
     * @param {number} height
     * @returns {Morebits.simpleWindow}
     */
    setHeight(height) {
      this.height = height;
      if (Number.parseInt(getComputedStyle($(this.content).dialog("widget")[0], null).height, 10) > window.innerHeight) {
        $(this.content).dialog("option", "height", window.innerHeight - 2).dialog("option", "position", "top");
      } else {
        $(this.content).dialog("option", "height", "auto");
      }
      $(this.content).dialog("widget").find(".morebits-dialog-content")[0].style.maxHeight = "".concat(Number.parseInt(this.height - 30, 10), "px");
      return this;
    },
    /**
     * Sets the content of the dialog to the given element node, usually from rendering
     * a {@link Morebits.quickForm}.
     * Re-enumerates the footer buttons, but leaves the footer links as they are.
     * Be sure to call this at least once before the dialog is displayed...
     *
     * @param {HTMLElement} content
     * @returns {Morebits.simpleWindow}
     */
    setContent(content) {
      this.purgeContent();
      this.addContent(content);
      return this;
    },
    /**
     * Adds the given element node to the dialog content.
     *
     * @param {HTMLElement} content
     * @returns {Morebits.simpleWindow}
     */
    addContent(content) {
      this.content.appendChild(content);
      const self2 = this;
      $(this.content).find('input[type="submit"], button[type="submit"]').each((key, value) => {
        value.style.display = "none";
        const button = document.createElement("button");
        if (value.hasAttribute("value")) {
          button.textContent = value.getAttribute("value");
        } else if (value.textContent) {
          button.textContent = value.textContent;
        } else {
          button.textContent = "提交";
        }
        button.className = value.className || "submitButtonProxy";
        button.addEventListener("click", () => {
          value.click();
        }, false);
        self2.buttons[self2.buttons.length] = button;
      });
      if (this.buttons.length > 0) {
        $(this.content).dialog("widget").find(".morebits-dialog-buttons").empty().append(this.buttons)[0].removeAttribute("data-empty");
      } else {
        $(this.content).dialog("widget").find(".morebits-dialog-buttons")[0].setAttribute("data-empty", "data-empty");
      }
      return this;
    },
    /**
     * Removes all contents from the dialog, barring any footer links.
     *
     * @returns {Morebits.simpleWindow}
     */
    purgeContent() {
      this.buttons = [];
      $(this.content).dialog("widget").find(".morebits-dialog-buttons").empty();
      while (this.content.hasChildNodes()) {
        this.content.removeChild(this.content.firstChild);
      }
      return this;
    },
    /**
     * Adds a link in the bottom-right corner of the dialog.
     * This can be used to provide help or policy links.
     * For example, Twinkle's CSD module adds a link to the CSD policy page,
     * as well as a link to Twinkle's documentation.
     *
     * @param {string} text - Display text.
     * @param {string} wikiPage - Link target.
     * @param {boolean} [prep=false] - Set true to prepend rather than append.
     * @returns {Morebits.simpleWindow}
     */
    addFooterLink(text, wikiPage, prep) {
      const $footerlinks = $(this.content).dialog("widget").find(".morebits-dialog-footerlinks");
      if (this.hasFooterLinks) {
        const bullet = document.createElement("span");
        bullet.textContent = " • ";
        if (prep) {
          $footerlinks.prepend(bullet);
        } else {
          $footerlinks.append(bullet);
        }
      }
      const link = document.createElement("a");
      link.setAttribute("href", mw.util.getUrl(wikiPage));
      link.setAttribute("title", wikiPage);
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
      link.textContent = text;
      if (prep) {
        $footerlinks.prepend(link);
      } else {
        $footerlinks.append(link);
      }
      this.hasFooterLinks = true;
      return this;
    },
    /**
     * Sets whether the window should be modal or not. Modal dialogs create
     * an overlay below the dialog but above other page elements. This
     * must be used (if necessary) before calling display().
     *
     * @param {boolean} [modal=false] - If set to true, other items on the
     * page will be disabled, i.e., cannot be interacted with.
     * @returns {Morebits.simpleWindow}
     */
    setModality(modal) {
      $(this.content).dialog("option", "modal", modal);
      return this;
    }
  };
  Morebits.simpleWindow.setButtonsEnabled = (enabled) => {
    const $body = $("body");
    $body.find(".morebits-dialog-buttons button").prop("disabled", !enabled);
  };
})(jQuery);

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwtdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi1yYXcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmRleGVkLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1jYWxsYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1idWlsdC1pbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnZpcm9ubWVudC11c2VyLWFnZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYW4taW5zdGFuY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3JyZWN0LXByb3RvdHlwZS1nZXR0ZXIuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbi1hY2Nlc3Nvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaHRtbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1jcmVhdGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMtY29yZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5pdGVyYXRvci5jb25zdHJ1Y3Rvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1pdGVyYXRvci1kaXJlY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW5zLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLWl0ZXItcmVzdWx0LW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0b3ItY2xvc2UtYWxsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0b3ItY3JlYXRlLXByb3h5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2FsbC13aXRoLXNhZmUtaXRlcmF0aW9uLWNsb3NpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvci1oZWxwZXItdGhyb3dzLW9uLWludmFsaWQtaXRlcmF0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvci1oZWxwZXItd2l0aG91dC1jbG9zaW5nLW9uLWVhcmx5LWVycm9yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLml0ZXJhdG9yLmZpbHRlci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy1jbGF1c2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1hcnJheS1pdGVyYXRvci1tZXRob2QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jbGFzc29mLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1pdGVyYXRvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuaXRlcmF0b3IuZmluZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5pdGVyYXRvci5tYXAuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuaXRlcmF0b3Iuc29tZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5pdGVyYXRvci50by1hcnJheS5qcyIsICJzcmMvbW9yZWJpdHMvbW9yZWJpdHMuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIid1c2Ugc3RyaWN0JztcbnZhciBjaGVjayA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgJiYgaXQuTWF0aCA9PT0gTWF0aCAmJiBpdDtcbn07XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG5tb2R1bGUuZXhwb3J0cyA9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1nbG9iYWwtdGhpcyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBnbG9iYWxUaGlzID09ICdvYmplY3QnICYmIGdsb2JhbFRoaXMpIHx8XG4gIGNoZWNrKHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93KSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzIC0tIHNhZmVcbiAgY2hlY2sodHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZikgfHxcbiAgY2hlY2sodHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwpIHx8XG4gIGNoZWNrKHR5cGVvZiB0aGlzID09ICdvYmplY3QnICYmIHRoaXMpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuYyAtLSBmYWxsYmFja1xuICAoZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSkoKSB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIERldGVjdCBJRTgncyBpbmNvbXBsZXRlIGRlZmluZVByb3BlcnR5IGltcGxlbWVudGF0aW9uXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgMSwgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSlbMV0gIT09IDc7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZnVuY3Rpb24tcHJvdG90eXBlLWJpbmQgLS0gc2FmZVxuICB2YXIgdGVzdCA9IChmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0pLmJpbmQoKTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGlucyAtLSBzYWZlXG4gIHJldHVybiB0eXBlb2YgdGVzdCAhPSAnZnVuY3Rpb24nIHx8IHRlc3QuaGFzT3duUHJvcGVydHkoJ3Byb3RvdHlwZScpO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBjYWxsID0gRnVuY3Rpb24ucHJvdG90eXBlLmNhbGw7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZnVuY3Rpb24tcHJvdG90eXBlLWJpbmQgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IGNhbGwuYmluZChjYWxsKSA6IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGNhbGwuYXBwbHkoY2FsbCwgYXJndW1lbnRzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIE5hc2hvcm4gfiBKREs4IGJ1Z1xudmFyIE5BU0hPUk5fQlVHID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmICEkcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh7IDE6IDIgfSwgMSk7XG5cbi8vIGBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eWlzZW51bWVyYWJsZVxuZXhwb3J0cy5mID0gTkFTSE9STl9CVUcgPyBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShWKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMsIFYpO1xuICByZXR1cm4gISFkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IuZW51bWVyYWJsZTtcbn0gOiAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIGNhbGwgPSBGdW5jdGlvblByb3RvdHlwZS5jYWxsO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbnZhciB1bmN1cnJ5VGhpc1dpdGhCaW5kID0gTkFUSVZFX0JJTkQgJiYgRnVuY3Rpb25Qcm90b3R5cGUuYmluZC5iaW5kKGNhbGwsIGNhbGwpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9CSU5EID8gdW5jdXJyeVRoaXNXaXRoQmluZCA6IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjYWxsLmFwcGx5KGZuLCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbnZhciB0b1N0cmluZyA9IHVuY3VycnlUaGlzKHt9LnRvU3RyaW5nKTtcbnZhciBzdHJpbmdTbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHN0cmluZ1NsaWNlKHRvU3RyaW5nKGl0KSwgOCwgLTEpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xudmFyIHNwbGl0ID0gdW5jdXJyeVRoaXMoJycuc3BsaXQpO1xuXG4vLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xubW9kdWxlLmV4cG9ydHMgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIHRocm93cyBhbiBlcnJvciBpbiByaGlubywgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3JoaW5vL2lzc3Vlcy8zNDZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGlucyAtLSBzYWZlXG4gIHJldHVybiAhJE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApO1xufSkgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNsYXNzb2YoaXQpID09PSAnU3RyaW5nJyA/IHNwbGl0KGl0LCAnJykgOiAkT2JqZWN0KGl0KTtcbn0gOiAkT2JqZWN0O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIHdlIGNhbid0IHVzZSBqdXN0IGBpdCA9PSBudWxsYCBzaW5jZSBvZiBgZG9jdW1lbnQuYWxsYCBzcGVjaWFsIGNhc2Vcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtSXNIVE1MRERBLWludGVybmFsLXNsb3QtYWVjXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPT09IG51bGwgfHwgaXQgPT09IHVuZGVmaW5lZDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgUmVxdWlyZU9iamVjdENvZXJjaWJsZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlcXVpcmVvYmplY3Rjb2VyY2libGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpc051bGxPclVuZGVmaW5lZChpdCkpIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEluZGV4ZWRPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShpdCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90XG52YXIgZG9jdW1lbnRBbGwgPSB0eXBlb2YgZG9jdW1lbnQgPT0gJ29iamVjdCcgJiYgZG9jdW1lbnQuYWxsO1xuXG4vLyBgSXNDYWxsYWJsZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWlzY2FsbGFibGVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL25vLXR5cGVvZi11bmRlZmluZWQgLS0gcmVxdWlyZWQgZm9yIHRlc3Rpbmdcbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIGRvY3VtZW50QWxsID09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50QWxsICE9PSB1bmRlZmluZWQgPyBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PSAnZnVuY3Rpb24nIHx8IGFyZ3VtZW50ID09PSBkb2N1bWVudEFsbDtcbn0gOiBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PSAnZnVuY3Rpb24nO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiBpc0NhbGxhYmxlKGl0KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciBhRnVuY3Rpb24gPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGlzQ2FsbGFibGUoYXJndW1lbnQpID8gYXJndW1lbnQgOiB1bmRlZmluZWQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lc3BhY2UsIG1ldGhvZCkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBhRnVuY3Rpb24oZ2xvYmFsVGhpc1tuYW1lc3BhY2VdKSA6IGdsb2JhbFRoaXNbbmFtZXNwYWNlXSAmJiBnbG9iYWxUaGlzW25hbWVzcGFjZV1bbWV0aG9kXTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVuY3VycnlUaGlzKHt9LmlzUHJvdG90eXBlT2YpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG5cbnZhciBuYXZpZ2F0b3IgPSBnbG9iYWxUaGlzLm5hdmlnYXRvcjtcbnZhciB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudDtcblxubW9kdWxlLmV4cG9ydHMgPSB1c2VyQWdlbnQgPyBTdHJpbmcodXNlckFnZW50KSA6ICcnO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Vudmlyb25tZW50LXVzZXItYWdlbnQnKTtcblxudmFyIHByb2Nlc3MgPSBnbG9iYWxUaGlzLnByb2Nlc3M7XG52YXIgRGVubyA9IGdsb2JhbFRoaXMuRGVubztcbnZhciB2ZXJzaW9ucyA9IHByb2Nlc3MgJiYgcHJvY2Vzcy52ZXJzaW9ucyB8fCBEZW5vICYmIERlbm8udmVyc2lvbjtcbnZhciB2OCA9IHZlcnNpb25zICYmIHZlcnNpb25zLnY4O1xudmFyIG1hdGNoLCB2ZXJzaW9uO1xuXG5pZiAodjgpIHtcbiAgbWF0Y2ggPSB2OC5zcGxpdCgnLicpO1xuICAvLyBpbiBvbGQgQ2hyb21lLCB2ZXJzaW9ucyBvZiBWOCBpc24ndCBWOCA9IENocm9tZSAvIDEwXG4gIC8vIGJ1dCB0aGVpciBjb3JyZWN0IHZlcnNpb25zIGFyZSBub3QgaW50ZXJlc3RpbmcgZm9yIHVzXG4gIHZlcnNpb24gPSBtYXRjaFswXSA+IDAgJiYgbWF0Y2hbMF0gPCA0ID8gMSA6ICsobWF0Y2hbMF0gKyBtYXRjaFsxXSk7XG59XG5cbi8vIEJyb3dzZXJGUyBOb2RlSlMgYHByb2Nlc3NgIHBvbHlmaWxsIGluY29ycmVjdGx5IHNldCBgLnY4YCB0byBgMC4wYFxuLy8gc28gY2hlY2sgYHVzZXJBZ2VudGAgZXZlbiBpZiBgLnY4YCBleGlzdHMsIGJ1dCAwXG5pZiAoIXZlcnNpb24gJiYgdXNlckFnZW50KSB7XG4gIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9FZGdlXFwvKFxcZCspLyk7XG4gIGlmICghbWF0Y2ggfHwgbWF0Y2hbMV0gPj0gNzQpIHtcbiAgICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvQ2hyb21lXFwvKFxcZCspLyk7XG4gICAgaWYgKG1hdGNoKSB2ZXJzaW9uID0gK21hdGNoWzFdO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmVyc2lvbjtcbiIsICIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1zeW1ib2wgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Vudmlyb25tZW50LXY4LXZlcnNpb24nKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcblxudmFyICRTdHJpbmcgPSBnbG9iYWxUaGlzLlN0cmluZztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gcmVxdWlyZWQgZm9yIHRlc3Rpbmdcbm1vZHVsZS5leHBvcnRzID0gISFPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBzeW1ib2wgPSBTeW1ib2woJ3N5bWJvbCBkZXRlY3Rpb24nKTtcbiAgLy8gQ2hyb21lIDM4IFN5bWJvbCBoYXMgaW5jb3JyZWN0IHRvU3RyaW5nIGNvbnZlcnNpb25cbiAgLy8gYGdldC1vd24tcHJvcGVydHktc3ltYm9sc2AgcG9seWZpbGwgc3ltYm9scyBjb252ZXJ0ZWQgdG8gb2JqZWN0IGFyZSBub3QgU3ltYm9sIGluc3RhbmNlc1xuICAvLyBuYjogRG8gbm90IGNhbGwgYFN0cmluZ2AgZGlyZWN0bHkgdG8gYXZvaWQgdGhpcyBiZWluZyBvcHRpbWl6ZWQgb3V0IHRvIGBzeW1ib2wrJydgIHdoaWNoIHdpbGwsXG4gIC8vIG9mIGNvdXJzZSwgZmFpbC5cbiAgcmV0dXJuICEkU3RyaW5nKHN5bWJvbCkgfHwgIShPYmplY3Qoc3ltYm9sKSBpbnN0YW5jZW9mIFN5bWJvbCkgfHxcbiAgICAvLyBDaHJvbWUgMzgtNDAgc3ltYm9scyBhcmUgbm90IGluaGVyaXRlZCBmcm9tIERPTSBjb2xsZWN0aW9ucyBwcm90b3R5cGVzIHRvIGluc3RhbmNlc1xuICAgICFTeW1ib2wuc2hhbSAmJiBWOF9WRVJTSU9OICYmIFY4X1ZFUlNJT04gPCA0MTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9TWU1CT0wgJiZcbiAgIVN5bWJvbC5zaGFtICYmXG4gIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCc7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZicpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVTRV9TWU1CT0xfQVNfVUlEID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHZhciAkU3ltYm9sID0gZ2V0QnVpbHRJbignU3ltYm9sJyk7XG4gIHJldHVybiBpc0NhbGxhYmxlKCRTeW1ib2wpICYmIGlzUHJvdG90eXBlT2YoJFN5bWJvbC5wcm90b3R5cGUsICRPYmplY3QoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICRTdHJpbmcgPSBTdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICRTdHJpbmcoYXJndW1lbnQpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiAnT2JqZWN0JztcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHRyeVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RyeS10by1zdHJpbmcnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBBc3NlcnQ6IElzQ2FsbGFibGUoYXJndW1lbnQpIGlzIHRydWVgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNDYWxsYWJsZShhcmd1bWVudCkpIHJldHVybiBhcmd1bWVudDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IodHJ5VG9TdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG4vLyBgR2V0TWV0aG9kYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZ2V0bWV0aG9kXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChWLCBQKSB7XG4gIHZhciBmdW5jID0gVltQXTtcbiAgcmV0dXJuIGlzTnVsbE9yVW5kZWZpbmVkKGZ1bmMpID8gdW5kZWZpbmVkIDogYUNhbGxhYmxlKGZ1bmMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYE9yZGluYXJ5VG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vcmRpbmFyeXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKHByZWYgPT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChpc0NhbGxhYmxlKGZuID0gaW5wdXQudmFsdWVPZikgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChwcmVmICE9PSAnc3RyaW5nJyAmJiBpc0NhbGxhYmxlKGZuID0gaW5wdXQudG9TdHJpbmcpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICB0cnkge1xuICAgIGRlZmluZVByb3BlcnR5KGdsb2JhbFRoaXMsIGtleSwgeyB2YWx1ZTogdmFsdWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZ2xvYmFsVGhpc1trZXldID0gdmFsdWU7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gbW9kdWxlLmV4cG9ydHMgPSBnbG9iYWxUaGlzW1NIQVJFRF0gfHwgZGVmaW5lR2xvYmFsUHJvcGVydHkoU0hBUkVELCB7fSk7XG5cbihzdG9yZS52ZXJzaW9ucyB8fCAoc3RvcmUudmVyc2lvbnMgPSBbXSkpLnB1c2goe1xuICB2ZXJzaW9uOiAnMy40NS4xJyxcbiAgbW9kZTogSVNfUFVSRSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE0LTIwMjUgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknLFxuICBsaWNlbnNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvYmxvYi92My40NS4xL0xJQ0VOU0UnLFxuICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcydcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlIHx8IHt9KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG4vLyBgVG9PYmplY3RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b29iamVjdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuICRPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IHVuY3VycnlUaGlzKHt9Lmhhc093blByb3BlcnR5KTtcblxuLy8gYEhhc093blByb3BlcnR5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaGFzb3ducHJvcGVydHlcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaGFzb3duIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0Lmhhc093biB8fCBmdW5jdGlvbiBoYXNPd24oaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkodG9PYmplY3QoaXQpLCBrZXkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbnZhciBpZCA9IDA7XG52YXIgcG9zdGZpeCA9IE1hdGgucmFuZG9tKCk7XG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcygxLjEudG9TdHJpbmcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJyArIChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5KSArICcpXycgKyB0b1N0cmluZygrK2lkICsgcG9zdGZpeCwgMzYpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24nKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xuXG52YXIgU3ltYm9sID0gZ2xvYmFsVGhpcy5TeW1ib2w7XG52YXIgV2VsbEtub3duU3ltYm9sc1N0b3JlID0gc2hhcmVkKCd3a3MnKTtcbnZhciBjcmVhdGVXZWxsS25vd25TeW1ib2wgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IFN5bWJvbFsnZm9yJ10gfHwgU3ltYm9sIDogU3ltYm9sICYmIFN5bWJvbC53aXRob3V0U2V0dGVyIHx8IHVpZDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICBpZiAoIWhhc093bihXZWxsS25vd25TeW1ib2xzU3RvcmUsIG5hbWUpKSB7XG4gICAgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID0gTkFUSVZFX1NZTUJPTCAmJiBoYXNPd24oU3ltYm9sLCBuYW1lKVxuICAgICAgPyBTeW1ib2xbbmFtZV1cbiAgICAgIDogY3JlYXRlV2VsbEtub3duU3ltYm9sKCdTeW1ib2wuJyArIG5hbWUpO1xuICB9IHJldHVybiBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1zeW1ib2wnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xudmFyIG9yZGluYXJ5VG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3JkaW5hcnktdG8tcHJpbWl0aXZlJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xudmFyIFRPX1BSSU1JVElWRSA9IHdlbGxLbm93blN5bWJvbCgndG9QcmltaXRpdmUnKTtcblxuLy8gYFRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIGlmICghaXNPYmplY3QoaW5wdXQpIHx8IGlzU3ltYm9sKGlucHV0KSkgcmV0dXJuIGlucHV0O1xuICB2YXIgZXhvdGljVG9QcmltID0gZ2V0TWV0aG9kKGlucHV0LCBUT19QUklNSVRJVkUpO1xuICB2YXIgcmVzdWx0O1xuICBpZiAoZXhvdGljVG9QcmltKSB7XG4gICAgaWYgKHByZWYgPT09IHVuZGVmaW5lZCkgcHJlZiA9ICdkZWZhdWx0JztcbiAgICByZXN1bHQgPSBjYWxsKGV4b3RpY1RvUHJpbSwgaW5wdXQsIHByZWYpO1xuICAgIGlmICghaXNPYmplY3QocmVzdWx0KSB8fCBpc1N5bWJvbChyZXN1bHQpKSByZXR1cm4gcmVzdWx0O1xuICAgIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xuICB9XG4gIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnbnVtYmVyJztcbiAgcmV0dXJuIG9yZGluYXJ5VG9QcmltaXRpdmUoaW5wdXQsIHByZWYpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG5cbi8vIGBUb1Byb3BlcnR5S2V5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcm9wZXJ0eWtleVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCAnc3RyaW5nJyk7XG4gIHJldHVybiBpc1N5bWJvbChrZXkpID8ga2V5IDoga2V5ICsgJyc7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciBkb2N1bWVudCA9IGdsb2JhbFRoaXMuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBFWElTVFMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBFWElTVFMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcblxuLy8gVGhhbmtzIHRvIElFOCBmb3IgaXRzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3JlYXRlRWxlbWVudCgnZGl2JyksICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfVxuICB9KS5hICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhc093bihPLCBQKSkgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcighY2FsbChwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mLCBPLCBQKSwgT1tQXSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIFY4IH4gQ2hyb21lIDM2LVxuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzMzNFxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdwcm90b3R5cGUnLCB7XG4gICAgdmFsdWU6IDQyLFxuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KS5wcm90b3R5cGUgIT09IDQyO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFN0cmluZyA9IFN0cmluZztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBUeXBlKGFyZ3VtZW50KSBpcyBPYmplY3RgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNPYmplY3QoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKCRTdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYW4gb2JqZWN0Jyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG52YXIgVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdjgtcHJvdG90eXBlLWRlZmluZS1idWcnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBFTlVNRVJBQkxFID0gJ2VudW1lcmFibGUnO1xudmFyIENPTkZJR1VSQUJMRSA9ICdjb25maWd1cmFibGUnO1xudmFyIFdSSVRBQkxFID0gJ3dyaXRhYmxlJztcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA/IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKHR5cGVvZiBPID09PSAnZnVuY3Rpb24nICYmIFAgPT09ICdwcm90b3R5cGUnICYmICd2YWx1ZScgaW4gQXR0cmlidXRlcyAmJiBXUklUQUJMRSBpbiBBdHRyaWJ1dGVzICYmICFBdHRyaWJ1dGVzW1dSSVRBQkxFXSkge1xuICAgIHZhciBjdXJyZW50ID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgICBpZiAoY3VycmVudCAmJiBjdXJyZW50W1dSSVRBQkxFXSkge1xuICAgICAgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gICAgICBBdHRyaWJ1dGVzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IENPTkZJR1VSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tDT05GSUdVUkFCTEVdIDogY3VycmVudFtDT05GSUdVUkFCTEVdLFxuICAgICAgICBlbnVtZXJhYmxlOiBFTlVNRVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0VOVU1FUkFCTEVdIDogY3VycmVudFtFTlVNRVJBQkxFXSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgICB9O1xuICAgIH1cbiAgfSByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xufSA6ICRkZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0RGVzY3JpcHRvciA9IERFU0NSSVBUT1JTICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbnZhciBFWElTVFMgPSBoYXNPd24oRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJyk7XG4vLyBhZGRpdGlvbmFsIHByb3RlY3Rpb24gZnJvbSBtaW5pZmllZCAvIG1hbmdsZWQgLyBkcm9wcGVkIGZ1bmN0aW9uIG5hbWVzXG52YXIgUFJPUEVSID0gRVhJU1RTICYmIChmdW5jdGlvbiBzb21ldGhpbmcoKSB7IC8qIGVtcHR5ICovIH0pLm5hbWUgPT09ICdzb21ldGhpbmcnO1xudmFyIENPTkZJR1VSQUJMRSA9IEVYSVNUUyAmJiAoIURFU0NSSVBUT1JTIHx8IChERVNDUklQVE9SUyAmJiBnZXREZXNjcmlwdG9yKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpLmNvbmZpZ3VyYWJsZSkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRVhJU1RTOiBFWElTVFMsXG4gIFBST1BFUjogUFJPUEVSLFxuICBDT05GSUdVUkFCTEU6IENPTkZJR1VSQUJMRVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG52YXIgZnVuY3Rpb25Ub1N0cmluZyA9IHVuY3VycnlUaGlzKEZ1bmN0aW9uLnRvU3RyaW5nKTtcblxuLy8gdGhpcyBoZWxwZXIgYnJva2VuIGluIGBjb3JlLWpzQDMuNC4xLTMuNC40YCwgc28gd2UgY2FuJ3QgdXNlIGBzaGFyZWRgIGhlbHBlclxuaWYgKCFpc0NhbGxhYmxlKHN0b3JlLmluc3BlY3RTb3VyY2UpKSB7XG4gIHN0b3JlLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb25Ub1N0cmluZyhpdCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmUuaW5zcGVjdFNvdXJjZTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWxUaGlzLldlYWtNYXA7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNDYWxsYWJsZShXZWFrTWFwKSAmJiAvbmF0aXZlIGNvZGUvLnRlc3QoU3RyaW5nKFdlYWtNYXApKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcblxudmFyIGtleXMgPSBzaGFyZWQoJ2tleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBrZXlzW2tleV0gfHwgKGtleXNba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX1dFQUtfTUFQID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlYWstbWFwLWJhc2ljLWRldGVjdGlvbicpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCA9ICdPYmplY3QgYWxyZWFkeSBpbml0aWFsaXplZCc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsVGhpcy5UeXBlRXJyb3I7XG52YXIgV2Vha01hcCA9IGdsb2JhbFRoaXMuV2Vha01hcDtcbnZhciBzZXQsIGdldCwgaGFzO1xuXG52YXIgZW5mb3JjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaGFzKGl0KSA/IGdldChpdCkgOiBzZXQoaXQsIHt9KTtcbn07XG5cbnZhciBnZXR0ZXJGb3IgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIHN0YXRlO1xuICAgIGlmICghaXNPYmplY3QoaXQpIHx8IChzdGF0ZSA9IGdldChpdCkpLnR5cGUgIT09IFRZUEUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkJyk7XG4gICAgfSByZXR1cm4gc3RhdGU7XG4gIH07XG59O1xuXG5pZiAoTkFUSVZFX1dFQUtfTUFQIHx8IHNoYXJlZC5zdGF0ZSkge1xuICB2YXIgc3RvcmUgPSBzaGFyZWQuc3RhdGUgfHwgKHNoYXJlZC5zdGF0ZSA9IG5ldyBXZWFrTWFwKCkpO1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG4gIHN0b3JlLmdldCA9IHN0b3JlLmdldDtcbiAgc3RvcmUuaGFzID0gc3RvcmUuaGFzO1xuICBzdG9yZS5zZXQgPSBzdG9yZS5zZXQ7XG4gIC8qIGVzbGludC1lbmFibGUgbm8tc2VsZi1hc3NpZ24gLS0gcHJvdG90eXBlIG1ldGhvZHMgcHJvdGVjdGlvbiAqL1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKHN0b3JlLmhhcyhpdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIHN0b3JlLnNldChpdCwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHN0b3JlLmdldChpdCkgfHwge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBzdG9yZS5oYXMoaXQpO1xuICB9O1xufSBlbHNlIHtcbiAgdmFyIFNUQVRFID0gc2hhcmVkS2V5KCdzdGF0ZScpO1xuICBoaWRkZW5LZXlzW1NUQVRFXSA9IHRydWU7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoaGFzT3duKGl0LCBTVEFURSkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShpdCwgU1RBVEUsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKSA/IGl0W1NUQVRFXSA6IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldCxcbiAgZ2V0OiBnZXQsXG4gIGhhczogaGFzLFxuICBlbmZvcmNlOiBlbmZvcmNlLFxuICBnZXR0ZXJGb3I6IGdldHRlckZvclxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLW5hbWUnKS5DT05GSUdVUkFCTEU7XG52YXIgaW5zcGVjdFNvdXJjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZScpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcblxudmFyIGVuZm9yY2VJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5lbmZvcmNlO1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldDtcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG52YXIgcmVwbGFjZSA9IHVuY3VycnlUaGlzKCcnLnJlcGxhY2UpO1xudmFyIGpvaW4gPSB1bmN1cnJ5VGhpcyhbXS5qb2luKTtcblxudmFyIENPTkZJR1VSQUJMRV9MRU5HVEggPSBERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAnbGVuZ3RoJywgeyB2YWx1ZTogOCB9KS5sZW5ndGggIT09IDg7XG59KTtcblxudmFyIFRFTVBMQVRFID0gU3RyaW5nKFN0cmluZykuc3BsaXQoJ1N0cmluZycpO1xuXG52YXIgbWFrZUJ1aWx0SW4gPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgbmFtZSwgb3B0aW9ucykge1xuICBpZiAoc3RyaW5nU2xpY2UoJFN0cmluZyhuYW1lKSwgMCwgNykgPT09ICdTeW1ib2woJykge1xuICAgIG5hbWUgPSAnWycgKyByZXBsYWNlKCRTdHJpbmcobmFtZSksIC9eU3ltYm9sXFwoKFteKV0qKVxcKS4qJC8sICckMScpICsgJ10nO1xuICB9XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZ2V0dGVyKSBuYW1lID0gJ2dldCAnICsgbmFtZTtcbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5zZXR0ZXIpIG5hbWUgPSAnc2V0ICcgKyBuYW1lO1xuICBpZiAoIWhhc093bih2YWx1ZSwgJ25hbWUnKSB8fCAoQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgJiYgdmFsdWUubmFtZSAhPT0gbmFtZSkpIHtcbiAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbmFtZScsIHsgdmFsdWU6IG5hbWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbiAgICBlbHNlIHZhbHVlLm5hbWUgPSBuYW1lO1xuICB9XG4gIGlmIChDT05GSUdVUkFCTEVfTEVOR1RIICYmIG9wdGlvbnMgJiYgaGFzT3duKG9wdGlvbnMsICdhcml0eScpICYmIHZhbHVlLmxlbmd0aCAhPT0gb3B0aW9ucy5hcml0eSkge1xuICAgIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbGVuZ3RoJywgeyB2YWx1ZTogb3B0aW9ucy5hcml0eSB9KTtcbiAgfVxuICB0cnkge1xuICAgIGlmIChvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnY29uc3RydWN0b3InKSAmJiBvcHRpb25zLmNvbnN0cnVjdG9yKSB7XG4gICAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAncHJvdG90eXBlJywgeyB3cml0YWJsZTogZmFsc2UgfSk7XG4gICAgLy8gaW4gVjggfiBDaHJvbWUgNTMsIHByb3RvdHlwZXMgb2Ygc29tZSBtZXRob2RzLCBsaWtlIGBBcnJheS5wcm90b3R5cGUudmFsdWVzYCwgYXJlIG5vbi13cml0YWJsZVxuICAgIH0gZWxzZSBpZiAodmFsdWUucHJvdG90eXBlKSB2YWx1ZS5wcm90b3R5cGUgPSB1bmRlZmluZWQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgdmFyIHN0YXRlID0gZW5mb3JjZUludGVybmFsU3RhdGUodmFsdWUpO1xuICBpZiAoIWhhc093bihzdGF0ZSwgJ3NvdXJjZScpKSB7XG4gICAgc3RhdGUuc291cmNlID0gam9pbihURU1QTEFURSwgdHlwZW9mIG5hbWUgPT0gJ3N0cmluZycgPyBuYW1lIDogJycpO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG5cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV4dGVuZC1uYXRpdmUgLS0gcmVxdWlyZWRcbkZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IG1ha2VCdWlsdEluKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gaXNDYWxsYWJsZSh0aGlzKSAmJiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnNvdXJjZSB8fCBpbnNwZWN0U291cmNlKHRoaXMpO1xufSwgJ3RvU3RyaW5nJyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgbWFrZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWFrZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgdmFyIHNpbXBsZSA9IG9wdGlvbnMuZW51bWVyYWJsZTtcbiAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWUgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubmFtZSA6IGtleTtcbiAgaWYgKGlzQ2FsbGFibGUodmFsdWUpKSBtYWtlQnVpbHRJbih2YWx1ZSwgbmFtZSwgb3B0aW9ucyk7XG4gIGlmIChvcHRpb25zLmdsb2JhbCkge1xuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lR2xvYmFsUHJvcGVydHkoa2V5LCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghb3B0aW9ucy51bnNhZmUpIGRlbGV0ZSBPW2tleV07XG4gICAgICBlbHNlIGlmIChPW2tleV0pIHNpbXBsZSA9IHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiAhb3B0aW9ucy5ub25Db25maWd1cmFibGUsXG4gICAgICB3cml0YWJsZTogIW9wdGlvbnMubm9uV3JpdGFibGVcbiAgICB9KTtcbiAgfSByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4vLyBgTWF0aC50cnVuY2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hdGgudHJ1bmNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1tYXRoLXRydW5jIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gTWF0aC50cnVuYyB8fCBmdW5jdGlvbiB0cnVuYyh4KSB7XG4gIHZhciBuID0gK3g7XG4gIHJldHVybiAobiA+IDAgPyBmbG9vciA6IGNlaWwpKG4pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdHJ1bmMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWF0aC10cnVuYycpO1xuXG4vLyBgVG9JbnRlZ2VyT3JJbmZpbml0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvaW50ZWdlcm9yaW5maW5pdHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBudW1iZXIgPSArYXJndW1lbnQ7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gIHJldHVybiBudW1iZXIgIT09IG51bWJlciB8fCBudW1iZXIgPT09IDAgPyAwIDogdHJ1bmMobnVtYmVyKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIEhlbHBlciBmb3IgYSBwb3B1bGFyIHJlcGVhdGluZyBjYXNlIG9mIHRoZSBzcGVjOlxuLy8gTGV0IGludGVnZXIgYmUgPyBUb0ludGVnZXIoaW5kZXgpLlxuLy8gSWYgaW50ZWdlciA8IDAsIGxldCByZXN1bHQgYmUgbWF4KChsZW5ndGggKyBpbnRlZ2VyKSwgMCk7IGVsc2UgbGV0IHJlc3VsdCBiZSBtaW4oaW50ZWdlciwgbGVuZ3RoKS5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgdmFyIGludGVnZXIgPSB0b0ludGVnZXJPckluZmluaXR5KGluZGV4KTtcbiAgcmV0dXJuIGludGVnZXIgPCAwID8gbWF4KGludGVnZXIgKyBsZW5ndGgsIDApIDogbWluKGludGVnZXIsIGxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBgVG9MZW5ndGhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2xlbmd0aFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGxlbiA9IHRvSW50ZWdlck9ySW5maW5pdHkoYXJndW1lbnQpO1xuICByZXR1cm4gbGVuID4gMCA/IG1pbihsZW4sIDB4MUZGRkZGRkZGRkZGRkYpIDogMDsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG5cbi8vIGBMZW5ndGhPZkFycmF5TGlrZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWxlbmd0aG9mYXJyYXlsaWtlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHRvTGVuZ3RoKG9iai5sZW5ndGgpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGluZGV4T2YsIGluY2x1ZGVzIH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gICAgaWYgKGxlbmd0aCA9PT0gMCkgcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT09IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgICBpZiAodmFsdWUgIT09IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICBpZiAoKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pICYmIE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuICBpbmNsdWRlczogY3JlYXRlTWV0aG9kKHRydWUpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4gIGluZGV4T2Y6IGNyZWF0ZU1ldGhvZChmYWxzZSlcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgaW5kZXhPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluZGV4T2Y7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSAhaGFzT3duKGhpZGRlbktleXMsIGtleSkgJiYgaGFzT3duKE8sIGtleSkgJiYgcHVzaChyZXN1bHQsIGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXNPd24oTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+aW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcHVzaChyZXN1bHQsIGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gSUU4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IFtcbiAgJ2NvbnN0cnVjdG9yJyxcbiAgJ2hhc093blByb3BlcnR5JyxcbiAgJ2lzUHJvdG90eXBlT2YnLFxuICAncHJvcGVydHlJc0VudW1lcmFibGUnLFxuICAndG9Mb2NhbGVTdHJpbmcnLFxuICAndG9TdHJpbmcnLFxuICAndmFsdWVPZidcbl07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxudmFyIGhpZGRlbktleXMgPSBlbnVtQnVnS2V5cy5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5bmFtZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHluYW1lcyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcblxudmFyIGNvbmNhdCA9IHVuY3VycnlUaGlzKFtdLmNvbmNhdCk7XG5cbi8vIGFsbCBvYmplY3Qga2V5cywgaW5jbHVkZXMgbm9uLWVudW1lcmFibGUgYW5kIHN5bWJvbHNcbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignUmVmbGVjdCcsICdvd25LZXlzJykgfHwgZnVuY3Rpb24gb3duS2V5cyhpdCkge1xuICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUuZihhbk9iamVjdChpdCkpO1xuICB2YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlLmY7XG4gIHJldHVybiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBjb25jYXQoa2V5cywgZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSkgOiBrZXlzO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBvd25LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL293bi1rZXlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlLCBleGNlcHRpb25zKSB7XG4gIHZhciBrZXlzID0gb3duS2V5cyhzb3VyY2UpO1xuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mO1xuICB2YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmY7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGlmICghaGFzT3duKHRhcmdldCwga2V5KSAmJiAhKGV4Y2VwdGlvbnMgJiYgaGFzT3duKGV4Y2VwdGlvbnMsIGtleSkpKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgfVxuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIHJlcGxhY2VtZW50ID0gLyN8XFwucHJvdG90eXBlXFwuLztcblxudmFyIGlzRm9yY2VkID0gZnVuY3Rpb24gKGZlYXR1cmUsIGRldGVjdGlvbikge1xuICB2YXIgdmFsdWUgPSBkYXRhW25vcm1hbGl6ZShmZWF0dXJlKV07XG4gIHJldHVybiB2YWx1ZSA9PT0gUE9MWUZJTEwgPyB0cnVlXG4gICAgOiB2YWx1ZSA9PT0gTkFUSVZFID8gZmFsc2VcbiAgICA6IGlzQ2FsbGFibGUoZGV0ZWN0aW9uKSA/IGZhaWxzKGRldGVjdGlvbilcbiAgICA6ICEhZGV0ZWN0aW9uO1xufTtcblxudmFyIG5vcm1hbGl6ZSA9IGlzRm9yY2VkLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UocmVwbGFjZW1lbnQsICcuJykudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBkYXRhID0gaXNGb3JjZWQuZGF0YSA9IHt9O1xudmFyIE5BVElWRSA9IGlzRm9yY2VkLk5BVElWRSA9ICdOJztcbnZhciBQT0xZRklMTCA9IGlzRm9yY2VkLlBPTFlGSUxMID0gJ1AnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRm9yY2VkO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcbnZhciBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcycpO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xuXG4vKlxuICBvcHRpb25zLnRhcmdldCAgICAgICAgIC0gbmFtZSBvZiB0aGUgdGFyZ2V0IG9iamVjdFxuICBvcHRpb25zLmdsb2JhbCAgICAgICAgIC0gdGFyZ2V0IGlzIHRoZSBnbG9iYWwgb2JqZWN0XG4gIG9wdGlvbnMuc3RhdCAgICAgICAgICAgLSBleHBvcnQgYXMgc3RhdGljIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucHJvdG8gICAgICAgICAgLSBleHBvcnQgYXMgcHJvdG90eXBlIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucmVhbCAgICAgICAgICAgLSByZWFsIHByb3RvdHlwZSBtZXRob2QgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLmZvcmNlZCAgICAgICAgIC0gZXhwb3J0IGV2ZW4gaWYgdGhlIG5hdGl2ZSBmZWF0dXJlIGlzIGF2YWlsYWJsZVxuICBvcHRpb25zLmJpbmQgICAgICAgICAgIC0gYmluZCBtZXRob2RzIHRvIHRoZSB0YXJnZXQsIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy53cmFwICAgICAgICAgICAtIHdyYXAgY29uc3RydWN0b3JzIHRvIHByZXZlbnRpbmcgZ2xvYmFsIHBvbGx1dGlvbiwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLnVuc2FmZSAgICAgICAgIC0gdXNlIHRoZSBzaW1wbGUgYXNzaWdubWVudCBvZiBwcm9wZXJ0eSBpbnN0ZWFkIG9mIGRlbGV0ZSArIGRlZmluZVByb3BlcnR5XG4gIG9wdGlvbnMuc2hhbSAgICAgICAgICAgLSBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gIG9wdGlvbnMuZW51bWVyYWJsZSAgICAgLSBleHBvcnQgYXMgZW51bWVyYWJsZSBwcm9wZXJ0eVxuICBvcHRpb25zLmRvbnRDYWxsR2V0U2V0IC0gcHJldmVudCBjYWxsaW5nIGEgZ2V0dGVyIG9uIHRhcmdldFxuICBvcHRpb25zLm5hbWUgICAgICAgICAgIC0gdGhlIC5uYW1lIG9mIHRoZSBmdW5jdGlvbiBpZiBpdCBkb2VzIG5vdCBtYXRjaCB0aGUga2V5XG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucywgc291cmNlKSB7XG4gIHZhciBUQVJHRVQgPSBvcHRpb25zLnRhcmdldDtcbiAgdmFyIEdMT0JBTCA9IG9wdGlvbnMuZ2xvYmFsO1xuICB2YXIgU1RBVElDID0gb3B0aW9ucy5zdGF0O1xuICB2YXIgRk9SQ0VELCB0YXJnZXQsIGtleSwgdGFyZ2V0UHJvcGVydHksIHNvdXJjZVByb3BlcnR5LCBkZXNjcmlwdG9yO1xuICBpZiAoR0xPQkFMKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsVGhpcztcbiAgfSBlbHNlIGlmIChTVEFUSUMpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxUaGlzW1RBUkdFVF0gfHwgZGVmaW5lR2xvYmFsUHJvcGVydHkoVEFSR0VULCB7fSk7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsVGhpc1tUQVJHRVRdICYmIGdsb2JhbFRoaXNbVEFSR0VUXS5wcm90b3R5cGU7XG4gIH1cbiAgaWYgKHRhcmdldCkgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgc291cmNlUHJvcGVydHkgPSBzb3VyY2Vba2V5XTtcbiAgICBpZiAob3B0aW9ucy5kb250Q2FsbEdldFNldCkge1xuICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gICAgICB0YXJnZXRQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci52YWx1ZTtcbiAgICB9IGVsc2UgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRba2V5XTtcbiAgICBGT1JDRUQgPSBpc0ZvcmNlZChHTE9CQUwgPyBrZXkgOiBUQVJHRVQgKyAoU1RBVElDID8gJy4nIDogJyMnKSArIGtleSwgb3B0aW9ucy5mb3JjZWQpO1xuICAgIC8vIGNvbnRhaW5lZCBpbiB0YXJnZXRcbiAgICBpZiAoIUZPUkNFRCAmJiB0YXJnZXRQcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZW9mIHNvdXJjZVByb3BlcnR5ID09IHR5cGVvZiB0YXJnZXRQcm9wZXJ0eSkgY29udGludWU7XG4gICAgICBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKHNvdXJjZVByb3BlcnR5LCB0YXJnZXRQcm9wZXJ0eSk7XG4gICAgfVxuICAgIC8vIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgICBpZiAob3B0aW9ucy5zaGFtIHx8ICh0YXJnZXRQcm9wZXJ0eSAmJiB0YXJnZXRQcm9wZXJ0eS5zaGFtKSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHNvdXJjZVByb3BlcnR5LCAnc2hhbScsIHRydWUpO1xuICAgIH1cbiAgICBkZWZpbmVCdWlsdEluKHRhcmdldCwga2V5LCBzb3VyY2VQcm9wZXJ0eSwgb3B0aW9ucyk7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZicpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFByb3RvdHlwZSkge1xuICBpZiAoaXNQcm90b3R5cGVPZihQcm90b3R5cGUsIGl0KSkgcmV0dXJuIGl0O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcignSW5jb3JyZWN0IGludm9jYXRpb24nKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRigpIHsgLyogZW1wdHkgKi8gfVxuICBGLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IG51bGw7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0cHJvdG90eXBlb2YgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZihuZXcgRigpKSAhPT0gRi5wcm90b3R5cGU7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBDT1JSRUNUX1BST1RPVFlQRV9HRVRURVIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29ycmVjdC1wcm90b3R5cGUtZ2V0dGVyJyk7XG5cbnZhciBJRV9QUk9UTyA9IHNoYXJlZEtleSgnSUVfUFJPVE8nKTtcbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xudmFyIE9iamVjdFByb3RvdHlwZSA9ICRPYmplY3QucHJvdG90eXBlO1xuXG4vLyBgT2JqZWN0LmdldFByb3RvdHlwZU9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldHByb3RvdHlwZW9mXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldHByb3RvdHlwZW9mIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gQ09SUkVDVF9QUk9UT1RZUEVfR0VUVEVSID8gJE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIChPKSB7XG4gIHZhciBvYmplY3QgPSB0b09iamVjdChPKTtcbiAgaWYgKGhhc093bihvYmplY3QsIElFX1BST1RPKSkgcmV0dXJuIG9iamVjdFtJRV9QUk9UT107XG4gIHZhciBjb25zdHJ1Y3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcjtcbiAgaWYgKGlzQ2FsbGFibGUoY29uc3RydWN0b3IpICYmIG9iamVjdCBpbnN0YW5jZW9mIGNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gb2JqZWN0IGluc3RhbmNlb2YgJE9iamVjdCA/IE9iamVjdFByb3RvdHlwZSA6IG51bGw7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBtYWtlQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9tYWtlLWJ1aWx0LWluJyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpIHtcbiAgaWYgKGRlc2NyaXB0b3IuZ2V0KSBtYWtlQnVpbHRJbihkZXNjcmlwdG9yLmdldCwgbmFtZSwgeyBnZXR0ZXI6IHRydWUgfSk7XG4gIGlmIChkZXNjcmlwdG9yLnNldCkgbWFrZUJ1aWx0SW4oZGVzY3JpcHRvci5zZXQsIG5hbWUsIHsgc2V0dGVyOiB0cnVlIH0pO1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkuZih0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBrZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtrZXldID0gdmFsdWU7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG5cbi8vIGBPYmplY3Qua2V5c2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5rZXlzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWtleXMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Y4LXByb3RvdHlwZS1kZWZpbmUtYnVnJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIG9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMnKTtcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnRpZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydGllcyAtLSBzYWZlXG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyAmJiAhVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIHByb3BzID0gdG9JbmRleGVkT2JqZWN0KFByb3BlcnRpZXMpO1xuICB2YXIga2V5cyA9IG9iamVjdEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKE8sIGtleSA9IGtleXNbaW5kZXgrK10sIHByb3BzW2tleV0pO1xuICByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignZG9jdW1lbnQnLCAnZG9jdW1lbnRFbGVtZW50Jyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZ2xvYmFsIEFjdGl2ZVhPYmplY3QgLS0gb2xkIElFLCBXU0ggKi9cbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBkZWZpbmVQcm9wZXJ0aWVzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydGllcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG52YXIgaHRtbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9odG1sJyk7XG52YXIgZG9jdW1lbnRDcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcblxudmFyIEdUID0gJz4nO1xudmFyIExUID0gJzwnO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIFNDUklQVCA9ICdzY3JpcHQnO1xudmFyIElFX1BST1RPID0gc2hhcmVkS2V5KCdJRV9QUk9UTycpO1xuXG52YXIgRW1wdHlDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcblxudmFyIHNjcmlwdFRhZyA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gIHJldHVybiBMVCArIFNDUklQVCArIEdUICsgY29udGVudCArIExUICsgJy8nICsgU0NSSVBUICsgR1Q7XG59O1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgQWN0aXZlWCBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVggPSBmdW5jdGlvbiAoYWN0aXZlWERvY3VtZW50KSB7XG4gIGFjdGl2ZVhEb2N1bWVudC53cml0ZShzY3JpcHRUYWcoJycpKTtcbiAgYWN0aXZlWERvY3VtZW50LmNsb3NlKCk7XG4gIHZhciB0ZW1wID0gYWN0aXZlWERvY3VtZW50LnBhcmVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWFzc2lnbm1lbnQgLS0gYXZvaWQgbWVtb3J5IGxlYWtcbiAgYWN0aXZlWERvY3VtZW50ID0gbnVsbDtcbiAgcmV0dXJuIHRlbXA7XG59O1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgTnVsbFByb3RvT2JqZWN0VmlhSUZyYW1lID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gZG9jdW1lbnRDcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgdmFyIEpTID0gJ2phdmEnICsgU0NSSVBUICsgJzonO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBodG1sLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy80NzVcbiAgaWZyYW1lLnNyYyA9IFN0cmluZyhKUyk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUoc2NyaXB0VGFnKCdkb2N1bWVudC5GPU9iamVjdCcpKTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgcmV0dXJuIGlmcmFtZURvY3VtZW50LkY7XG59O1xuXG4vLyBDaGVjayBmb3IgZG9jdW1lbnQuZG9tYWluIGFuZCBhY3RpdmUgeCBzdXBwb3J0XG4vLyBObyBuZWVkIHRvIHVzZSBhY3RpdmUgeCBhcHByb2FjaCB3aGVuIGRvY3VtZW50LmRvbWFpbiBpcyBub3Qgc2V0XG4vLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltL2lzc3Vlcy8xNTBcbi8vIHZhcmlhdGlvbiBvZiBodHRwczovL2dpdGh1Yi5jb20va2l0Y2FtYnJpZGdlL2VzNS1zaGltL2NvbW1pdC80ZjczOGFjMDY2MzQ2XG4vLyBhdm9pZCBJRSBHQyBidWdcbnZhciBhY3RpdmVYRG9jdW1lbnQ7XG52YXIgTnVsbFByb3RvT2JqZWN0ID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIGFjdGl2ZVhEb2N1bWVudCA9IG5ldyBBY3RpdmVYT2JqZWN0KCdodG1sZmlsZScpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBpZ25vcmUgKi8gfVxuICBOdWxsUHJvdG9PYmplY3QgPSB0eXBlb2YgZG9jdW1lbnQgIT0gJ3VuZGVmaW5lZCdcbiAgICA/IGRvY3VtZW50LmRvbWFpbiAmJiBhY3RpdmVYRG9jdW1lbnRcbiAgICAgID8gTnVsbFByb3RvT2JqZWN0VmlhQWN0aXZlWChhY3RpdmVYRG9jdW1lbnQpIC8vIG9sZCBJRVxuICAgICAgOiBOdWxsUHJvdG9PYmplY3RWaWFJRnJhbWUoKVxuICAgIDogTnVsbFByb3RvT2JqZWN0VmlhQWN0aXZlWChhY3RpdmVYRG9jdW1lbnQpOyAvLyBXU0hcbiAgdmFyIGxlbmd0aCA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSBkZWxldGUgTnVsbFByb3RvT2JqZWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbbGVuZ3RoXV07XG4gIHJldHVybiBOdWxsUHJvdG9PYmplY3QoKTtcbn07XG5cbmhpZGRlbktleXNbSUVfUFJPVE9dID0gdHJ1ZTtcblxuLy8gYE9iamVjdC5jcmVhdGVgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuY3JlYXRlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWNyZWF0ZSAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eUNvbnN0cnVjdG9yW1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHlDb25zdHJ1Y3RvcigpO1xuICAgIEVtcHR5Q29uc3RydWN0b3JbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gTnVsbFByb3RvT2JqZWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkZWZpbmVQcm9wZXJ0aWVzTW9kdWxlLmYocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YnKTtcbnZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbicpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1lfU0FGQVJJX0lURVJBVE9SUyA9IGZhbHNlO1xuXG4vLyBgJUl0ZXJhdG9yUHJvdG90eXBlJWAgb2JqZWN0XG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSVpdGVyYXRvcnByb3RvdHlwZSUtb2JqZWN0XG52YXIgSXRlcmF0b3JQcm90b3R5cGUsIFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSwgYXJyYXlJdGVyYXRvcjtcblxuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWtleXMgLS0gc2FmZSAqL1xuaWYgKFtdLmtleXMpIHtcbiAgYXJyYXlJdGVyYXRvciA9IFtdLmtleXMoKTtcbiAgLy8gU2FmYXJpIDggaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gIGlmICghKCduZXh0JyBpbiBhcnJheUl0ZXJhdG9yKSkgQlVHR1lfU0FGQVJJX0lURVJBVE9SUyA9IHRydWU7XG4gIGVsc2Uge1xuICAgIFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKGdldFByb3RvdHlwZU9mKGFycmF5SXRlcmF0b3IpKTtcbiAgICBpZiAoUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlKSBJdGVyYXRvclByb3RvdHlwZSA9IFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxufVxuXG52YXIgTkVXX0lURVJBVE9SX1BST1RPVFlQRSA9ICFpc09iamVjdChJdGVyYXRvclByb3RvdHlwZSkgfHwgZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgdGVzdCA9IHt9O1xuICAvLyBGRjQ0LSBsZWdhY3kgaXRlcmF0b3JzIGNhc2VcbiAgcmV0dXJuIEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXS5jYWxsKHRlc3QpICE9PSB0ZXN0O1xufSk7XG5cbmlmIChORVdfSVRFUkFUT1JfUFJPVE9UWVBFKSBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuZWxzZSBpZiAoSVNfUFVSRSkgSXRlcmF0b3JQcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuXG4vLyBgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtJWl0ZXJhdG9ycHJvdG90eXBlJS1AQGl0ZXJhdG9yXG5pZiAoIWlzQ2FsbGFibGUoSXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdKSkge1xuICBkZWZpbmVCdWlsdEluKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEl0ZXJhdG9yUHJvdG90eXBlOiBJdGVyYXRvclByb3RvdHlwZSxcbiAgQlVHR1lfU0FGQVJJX0lURVJBVE9SUzogQlVHR1lfU0FGQVJJX0lURVJBVE9SU1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1pbnN0YW5jZScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZicpO1xudmFyIGRlZmluZUJ1aWx0SW5BY2Nlc3NvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4tYWNjZXNzb3InKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzLWNvcmUnKS5JdGVyYXRvclByb3RvdHlwZTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xuXG52YXIgQ09OU1RSVUNUT1IgPSAnY29uc3RydWN0b3InO1xudmFyIElURVJBVE9SID0gJ0l0ZXJhdG9yJztcbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBOYXRpdmVJdGVyYXRvciA9IGdsb2JhbFRoaXNbSVRFUkFUT1JdO1xuXG4vLyBGRjU2LSBoYXZlIG5vbi1zdGFuZGFyZCBnbG9iYWwgaGVscGVyIGBJdGVyYXRvcmBcbnZhciBGT1JDRUQgPSBJU19QVVJFXG4gIHx8ICFpc0NhbGxhYmxlKE5hdGl2ZUl0ZXJhdG9yKVxuICB8fCBOYXRpdmVJdGVyYXRvci5wcm90b3R5cGUgIT09IEl0ZXJhdG9yUHJvdG90eXBlXG4gIC8vIEZGNDQtIG5vbi1zdGFuZGFyZCBgSXRlcmF0b3JgIHBhc3NlcyBwcmV2aW91cyB0ZXN0c1xuICB8fCAhZmFpbHMoZnVuY3Rpb24gKCkgeyBOYXRpdmVJdGVyYXRvcih7fSk7IH0pO1xuXG52YXIgSXRlcmF0b3JDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uIEl0ZXJhdG9yKCkge1xuICBhbkluc3RhbmNlKHRoaXMsIEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgaWYgKGdldFByb3RvdHlwZU9mKHRoaXMpID09PSBJdGVyYXRvclByb3RvdHlwZSkgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fic3RyYWN0IGNsYXNzIEl0ZXJhdG9yIG5vdCBkaXJlY3RseSBjb25zdHJ1Y3RhYmxlJyk7XG59O1xuXG52YXIgZGVmaW5lSXRlcmF0b3JQcm90b3R5cGVBY2Nlc3NvciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIGlmIChERVNDUklQVE9SUykge1xuICAgIGRlZmluZUJ1aWx0SW5BY2Nlc3NvcihJdGVyYXRvclByb3RvdHlwZSwga2V5LCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gKHJlcGxhY2VtZW50KSB7XG4gICAgICAgIGFuT2JqZWN0KHRoaXMpO1xuICAgICAgICBpZiAodGhpcyA9PT0gSXRlcmF0b3JQcm90b3R5cGUpIHRocm93IG5ldyAkVHlwZUVycm9yKFwiWW91IGNhbid0IHJlZGVmaW5lIHRoaXMgcHJvcGVydHlcIik7XG4gICAgICAgIGlmIChoYXNPd24odGhpcywga2V5KSkgdGhpc1trZXldID0gcmVwbGFjZW1lbnQ7XG4gICAgICAgIGVsc2UgY3JlYXRlUHJvcGVydHkodGhpcywga2V5LCByZXBsYWNlbWVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSBJdGVyYXRvclByb3RvdHlwZVtrZXldID0gdmFsdWU7XG59O1xuXG5pZiAoIWhhc093bihJdGVyYXRvclByb3RvdHlwZSwgVE9fU1RSSU5HX1RBRykpIGRlZmluZUl0ZXJhdG9yUHJvdG90eXBlQWNjZXNzb3IoVE9fU1RSSU5HX1RBRywgSVRFUkFUT1IpO1xuXG5pZiAoRk9SQ0VEIHx8ICFoYXNPd24oSXRlcmF0b3JQcm90b3R5cGUsIENPTlNUUlVDVE9SKSB8fCBJdGVyYXRvclByb3RvdHlwZVtDT05TVFJVQ1RPUl0gPT09IE9iamVjdCkge1xuICBkZWZpbmVJdGVyYXRvclByb3RvdHlwZUFjY2Vzc29yKENPTlNUUlVDVE9SLCBJdGVyYXRvckNvbnN0cnVjdG9yKTtcbn1cblxuSXRlcmF0b3JDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBJdGVyYXRvclByb3RvdHlwZTtcblxuLy8gYEl0ZXJhdG9yYCBjb25zdHJ1Y3RvclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pdGVyYXRvclxuJCh7IGdsb2JhbDogdHJ1ZSwgY29uc3RydWN0b3I6IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgSXRlcmF0b3I6IEl0ZXJhdG9yQ29uc3RydWN0b3Jcbn0pO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGBHZXRJdGVyYXRvckRpcmVjdChvYmopYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZ2V0aXRlcmF0b3JkaXJlY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4ge1xuICAgIGl0ZXJhdG9yOiBvYmosXG4gICAgbmV4dDogb2JqLm5leHQsXG4gICAgZG9uZTogZmFsc2VcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc3JjLCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIGRlZmluZUJ1aWx0SW4odGFyZ2V0LCBrZXksIHNyY1trZXldLCBvcHRpb25zKTtcbiAgcmV0dXJuIHRhcmdldDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gYENyZWF0ZUl0ZXJSZXN1bHRPYmplY3RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1jcmVhdGVpdGVycmVzdWx0b2JqZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgZG9uZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6IGRvbmUgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBraW5kLCB2YWx1ZSkge1xuICB2YXIgaW5uZXJSZXN1bHQsIGlubmVyRXJyb3I7XG4gIGFuT2JqZWN0KGl0ZXJhdG9yKTtcbiAgdHJ5IHtcbiAgICBpbm5lclJlc3VsdCA9IGdldE1ldGhvZChpdGVyYXRvciwgJ3JldHVybicpO1xuICAgIGlmICghaW5uZXJSZXN1bHQpIHtcbiAgICAgIGlmIChraW5kID09PSAndGhyb3cnKSB0aHJvdyB2YWx1ZTtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgaW5uZXJSZXN1bHQgPSBjYWxsKGlubmVyUmVzdWx0LCBpdGVyYXRvcik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaW5uZXJFcnJvciA9IHRydWU7XG4gICAgaW5uZXJSZXN1bHQgPSBlcnJvcjtcbiAgfVxuICBpZiAoa2luZCA9PT0gJ3Rocm93JykgdGhyb3cgdmFsdWU7XG4gIGlmIChpbm5lckVycm9yKSB0aHJvdyBpbm5lclJlc3VsdDtcbiAgYW5PYmplY3QoaW5uZXJSZXN1bHQpO1xuICByZXR1cm4gdmFsdWU7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpdGVyYXRvckNsb3NlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJzLCBraW5kLCB2YWx1ZSkge1xuICBmb3IgKHZhciBpID0gaXRlcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBpZiAoaXRlcnNbaV0gPT09IHVuZGVmaW5lZCkgY29udGludWU7XG4gICAgdHJ5IHtcbiAgICAgIHZhbHVlID0gaXRlcmF0b3JDbG9zZShpdGVyc1tpXS5pdGVyYXRvciwga2luZCwgdmFsdWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBraW5kID0gJ3Rocm93JztcbiAgICAgIHZhbHVlID0gZXJyb3I7XG4gICAgfVxuICB9XG4gIGlmIChraW5kID09PSAndGhyb3cnKSB0aHJvdyB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1jcmVhdGUnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgZGVmaW5lQnVpbHRJbnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWlucycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycy1jb3JlJykuSXRlcmF0b3JQcm90b3R5cGU7XG52YXIgY3JlYXRlSXRlclJlc3VsdE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtaXRlci1yZXN1bHQtb2JqZWN0Jyk7XG52YXIgaXRlcmF0b3JDbG9zZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1jbG9zZScpO1xudmFyIGl0ZXJhdG9yQ2xvc2VBbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3ItY2xvc2UtYWxsJyk7XG5cbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xudmFyIElURVJBVE9SX0hFTFBFUiA9ICdJdGVyYXRvckhlbHBlcic7XG52YXIgV1JBUF9GT1JfVkFMSURfSVRFUkFUT1IgPSAnV3JhcEZvclZhbGlkSXRlcmF0b3InO1xudmFyIE5PUk1BTCA9ICdub3JtYWwnO1xudmFyIFRIUk9XID0gJ3Rocm93JztcbnZhciBzZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5zZXQ7XG5cbnZhciBjcmVhdGVJdGVyYXRvclByb3h5UHJvdG90eXBlID0gZnVuY3Rpb24gKElTX0lURVJBVE9SKSB7XG4gIHZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXR0ZXJGb3IoSVNfSVRFUkFUT1IgPyBXUkFQX0ZPUl9WQUxJRF9JVEVSQVRPUiA6IElURVJBVE9SX0hFTFBFUik7XG5cbiAgcmV0dXJuIGRlZmluZUJ1aWx0SW5zKGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSksIHtcbiAgICBuZXh0OiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKTtcbiAgICAgIC8vIGZvciBzaW1wbGlmaWNhdGlvbjpcbiAgICAgIC8vICAgZm9yIGAlV3JhcEZvclZhbGlkSXRlcmF0b3JQcm90b3R5cGUlLm5leHRgIG9yIHdpdGggYHN0YXRlLnJldHVybkhhbmRsZXJSZXN1bHRgIG91ciBgbmV4dEhhbmRsZXJgIHJldHVybnMgYEl0ZXJSZXN1bHRPYmplY3RgXG4gICAgICAvLyAgIGZvciBgJUl0ZXJhdG9ySGVscGVyUHJvdG90eXBlJS5uZXh0YCAtIGp1c3QgYSB2YWx1ZVxuICAgICAgaWYgKElTX0lURVJBVE9SKSByZXR1cm4gc3RhdGUubmV4dEhhbmRsZXIoKTtcbiAgICAgIGlmIChzdGF0ZS5kb25lKSByZXR1cm4gY3JlYXRlSXRlclJlc3VsdE9iamVjdCh1bmRlZmluZWQsIHRydWUpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHN0YXRlLm5leHRIYW5kbGVyKCk7XG4gICAgICAgIHJldHVybiBzdGF0ZS5yZXR1cm5IYW5kbGVyUmVzdWx0ID8gcmVzdWx0IDogY3JlYXRlSXRlclJlc3VsdE9iamVjdChyZXN1bHQsIHN0YXRlLmRvbmUpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgc3RhdGUuZG9uZSA9IHRydWU7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfVxuICAgIH0sXG4gICAgJ3JldHVybic6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhpcyk7XG4gICAgICB2YXIgaXRlcmF0b3IgPSBzdGF0ZS5pdGVyYXRvcjtcbiAgICAgIHN0YXRlLmRvbmUgPSB0cnVlO1xuICAgICAgaWYgKElTX0lURVJBVE9SKSB7XG4gICAgICAgIHZhciByZXR1cm5NZXRob2QgPSBnZXRNZXRob2QoaXRlcmF0b3IsICdyZXR1cm4nKTtcbiAgICAgICAgcmV0dXJuIHJldHVybk1ldGhvZCA/IGNhbGwocmV0dXJuTWV0aG9kLCBpdGVyYXRvcikgOiBjcmVhdGVJdGVyUmVzdWx0T2JqZWN0KHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBpZiAoc3RhdGUuaW5uZXIpIHRyeSB7XG4gICAgICAgIGl0ZXJhdG9yQ2xvc2Uoc3RhdGUuaW5uZXIuaXRlcmF0b3IsIE5PUk1BTCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JDbG9zZShpdGVyYXRvciwgVEhST1csIGVycm9yKTtcbiAgICAgIH1cbiAgICAgIGlmIChzdGF0ZS5vcGVuSXRlcnMpIHRyeSB7XG4gICAgICAgIGl0ZXJhdG9yQ2xvc2VBbGwoc3RhdGUub3Blbkl0ZXJzLCBOT1JNQUwpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIFRIUk9XLCBlcnJvcik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlcmF0b3IpIGl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIE5PUk1BTCk7XG4gICAgICByZXR1cm4gY3JlYXRlSXRlclJlc3VsdE9iamVjdCh1bmRlZmluZWQsIHRydWUpO1xuICAgIH1cbiAgfSk7XG59O1xuXG52YXIgV3JhcEZvclZhbGlkSXRlcmF0b3JQcm90b3R5cGUgPSBjcmVhdGVJdGVyYXRvclByb3h5UHJvdG90eXBlKHRydWUpO1xudmFyIEl0ZXJhdG9ySGVscGVyUHJvdG90eXBlID0gY3JlYXRlSXRlcmF0b3JQcm94eVByb3RvdHlwZShmYWxzZSk7XG5cbmNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShJdGVyYXRvckhlbHBlclByb3RvdHlwZSwgVE9fU1RSSU5HX1RBRywgJ0l0ZXJhdG9yIEhlbHBlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuZXh0SGFuZGxlciwgSVNfSVRFUkFUT1IsIFJFVFVSTl9IQU5ETEVSX1JFU1VMVCkge1xuICB2YXIgSXRlcmF0b3JQcm94eSA9IGZ1bmN0aW9uIEl0ZXJhdG9yKHJlY29yZCwgc3RhdGUpIHtcbiAgICBpZiAoc3RhdGUpIHtcbiAgICAgIHN0YXRlLml0ZXJhdG9yID0gcmVjb3JkLml0ZXJhdG9yO1xuICAgICAgc3RhdGUubmV4dCA9IHJlY29yZC5uZXh0O1xuICAgIH0gZWxzZSBzdGF0ZSA9IHJlY29yZDtcbiAgICBzdGF0ZS50eXBlID0gSVNfSVRFUkFUT1IgPyBXUkFQX0ZPUl9WQUxJRF9JVEVSQVRPUiA6IElURVJBVE9SX0hFTFBFUjtcbiAgICBzdGF0ZS5yZXR1cm5IYW5kbGVyUmVzdWx0ID0gISFSRVRVUk5fSEFORExFUl9SRVNVTFQ7XG4gICAgc3RhdGUubmV4dEhhbmRsZXIgPSBuZXh0SGFuZGxlcjtcbiAgICBzdGF0ZS5jb3VudGVyID0gMDtcbiAgICBzdGF0ZS5kb25lID0gZmFsc2U7XG4gICAgc2V0SW50ZXJuYWxTdGF0ZSh0aGlzLCBzdGF0ZSk7XG4gIH07XG5cbiAgSXRlcmF0b3JQcm94eS5wcm90b3R5cGUgPSBJU19JVEVSQVRPUiA/IFdyYXBGb3JWYWxpZEl0ZXJhdG9yUHJvdG90eXBlIDogSXRlcmF0b3JIZWxwZXJQcm90b3R5cGU7XG5cbiAgcmV0dXJuIEl0ZXJhdG9yUHJveHk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBpdGVyYXRvckNsb3NlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlJyk7XG5cbi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3Jcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIEVOVFJJRVMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gRU5UUklFUyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsICd0aHJvdycsIGVycm9yKTtcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBTaG91bGQgdGhyb3cgYW4gZXJyb3Igb24gaW52YWxpZCBpdGVyYXRvclxuLy8gaHR0cHM6Ly9pc3N1ZXMuY2hyb21pdW0ub3JnL2lzc3Vlcy8zMzY4MzkxMTVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG1ldGhvZE5hbWUsIGFyZ3VtZW50KSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1pdGVyYXRvciAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICB2YXIgbWV0aG9kID0gdHlwZW9mIEl0ZXJhdG9yID09ICdmdW5jdGlvbicgJiYgSXRlcmF0b3IucHJvdG90eXBlW21ldGhvZE5hbWVdO1xuICBpZiAobWV0aG9kKSB0cnkge1xuICAgIG1ldGhvZC5jYWxsKHsgbmV4dDogbnVsbCB9LCBhcmd1bWVudCkubmV4dCgpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L2VjbWEyNjIvcHVsbC8zNDY3XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSwgRXhwZWN0ZWRFcnJvcikge1xuICB2YXIgSXRlcmF0b3IgPSBnbG9iYWxUaGlzLkl0ZXJhdG9yO1xuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSBJdGVyYXRvciAmJiBJdGVyYXRvci5wcm90b3R5cGU7XG4gIHZhciBtZXRob2QgPSBJdGVyYXRvclByb3RvdHlwZSAmJiBJdGVyYXRvclByb3RvdHlwZVtNRVRIT0RfTkFNRV07XG5cbiAgdmFyIENMT1NFRCA9IGZhbHNlO1xuXG4gIGlmIChtZXRob2QpIHRyeSB7XG4gICAgbWV0aG9kLmNhbGwoe1xuICAgICAgbmV4dDogZnVuY3Rpb24gKCkgeyByZXR1cm4geyBkb25lOiB0cnVlIH07IH0sXG4gICAgICAncmV0dXJuJzogZnVuY3Rpb24gKCkgeyBDTE9TRUQgPSB0cnVlOyB9XG4gICAgfSwgLTEpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yOTExOTVcbiAgICBpZiAoIShlcnJvciBpbnN0YW5jZW9mIEV4cGVjdGVkRXJyb3IpKSBDTE9TRUQgPSBmYWxzZTtcbiAgfVxuXG4gIGlmICghQ0xPU0VEKSByZXR1cm4gbWV0aG9kO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGdldEl0ZXJhdG9yRGlyZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvci1kaXJlY3QnKTtcbnZhciBjcmVhdGVJdGVyYXRvclByb3h5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWNyZWF0ZS1wcm94eScpO1xudmFyIGNhbGxXaXRoU2FmZUl0ZXJhdGlvbkNsb3NpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2FsbC13aXRoLXNhZmUtaXRlcmF0aW9uLWNsb3NpbmcnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBpdGVyYXRvckNsb3NlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlJyk7XG52YXIgaXRlcmF0b3JIZWxwZXJUaHJvd3NPbkludmFsaWRJdGVyYXRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1oZWxwZXItdGhyb3dzLW9uLWludmFsaWQtaXRlcmF0b3InKTtcbnZhciBpdGVyYXRvckhlbHBlcldpdGhvdXRDbG9zaW5nT25FYXJseUVycm9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWhlbHBlci13aXRob3V0LWNsb3Npbmctb24tZWFybHktZXJyb3InKTtcblxudmFyIEZJTFRFUl9XSVRIT1VUX1RIUk9XSU5HX09OX0lOVkFMSURfSVRFUkFUT1IgPSAhSVNfUFVSRSAmJiAhaXRlcmF0b3JIZWxwZXJUaHJvd3NPbkludmFsaWRJdGVyYXRvcignZmlsdGVyJywgZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KTtcbnZhciBmaWx0ZXJXaXRob3V0Q2xvc2luZ09uRWFybHlFcnJvciA9ICFJU19QVVJFICYmICFGSUxURVJfV0lUSE9VVF9USFJPV0lOR19PTl9JTlZBTElEX0lURVJBVE9SXG4gICYmIGl0ZXJhdG9ySGVscGVyV2l0aG91dENsb3NpbmdPbkVhcmx5RXJyb3IoJ2ZpbHRlcicsIFR5cGVFcnJvcik7XG5cbnZhciBGT1JDRUQgPSBJU19QVVJFIHx8IEZJTFRFUl9XSVRIT1VUX1RIUk9XSU5HX09OX0lOVkFMSURfSVRFUkFUT1IgfHwgZmlsdGVyV2l0aG91dENsb3NpbmdPbkVhcmx5RXJyb3I7XG5cbnZhciBJdGVyYXRvclByb3h5ID0gY3JlYXRlSXRlcmF0b3JQcm94eShmdW5jdGlvbiAoKSB7XG4gIHZhciBpdGVyYXRvciA9IHRoaXMuaXRlcmF0b3I7XG4gIHZhciBwcmVkaWNhdGUgPSB0aGlzLnByZWRpY2F0ZTtcbiAgdmFyIG5leHQgPSB0aGlzLm5leHQ7XG4gIHZhciByZXN1bHQsIGRvbmUsIHZhbHVlO1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIHJlc3VsdCA9IGFuT2JqZWN0KGNhbGwobmV4dCwgaXRlcmF0b3IpKTtcbiAgICBkb25lID0gdGhpcy5kb25lID0gISFyZXN1bHQuZG9uZTtcbiAgICBpZiAoZG9uZSkgcmV0dXJuO1xuICAgIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgIGlmIChjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nKGl0ZXJhdG9yLCBwcmVkaWNhdGUsIFt2YWx1ZSwgdGhpcy5jb3VudGVyKytdLCB0cnVlKSkgcmV0dXJuIHZhbHVlO1xuICB9XG59KTtcblxuLy8gYEl0ZXJhdG9yLnByb3RvdHlwZS5maWx0ZXJgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pdGVyYXRvci5wcm90b3R5cGUuZmlsdGVyXG4kKHsgdGFyZ2V0OiAnSXRlcmF0b3InLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICBmaWx0ZXI6IGZ1bmN0aW9uIGZpbHRlcihwcmVkaWNhdGUpIHtcbiAgICBhbk9iamVjdCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgYUNhbGxhYmxlKHByZWRpY2F0ZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGl0ZXJhdG9yQ2xvc2UodGhpcywgJ3Rocm93JywgZXJyb3IpO1xuICAgIH1cblxuICAgIGlmIChmaWx0ZXJXaXRob3V0Q2xvc2luZ09uRWFybHlFcnJvcikgcmV0dXJuIGNhbGwoZmlsdGVyV2l0aG91dENsb3NpbmdPbkVhcmx5RXJyb3IsIHRoaXMsIHByZWRpY2F0ZSk7XG5cbiAgICByZXR1cm4gbmV3IEl0ZXJhdG9yUHJveHkoZ2V0SXRlcmF0b3JEaXJlY3QodGhpcyksIHtcbiAgICAgIHByZWRpY2F0ZTogcHJlZGljYXRlXG4gICAgfSk7XG4gIH1cbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjbGFzc29mUmF3ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuKSB7XG4gIC8vIE5hc2hvcm4gYnVnOlxuICAvLyAgIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xMTI4XG4gIC8vICAgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzExMzBcbiAgaWYgKGNsYXNzb2ZSYXcoZm4pID09PSAnRnVuY3Rpb24nKSByZXR1cm4gdW5jdXJyeVRoaXMoZm4pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLWNsYXVzZScpO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIGJpbmQgPSB1bmN1cnJ5VGhpcyh1bmN1cnJ5VGhpcy5iaW5kKTtcblxuLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCkge1xuICBhQ2FsbGFibGUoZm4pO1xuICByZXR1cm4gdGhhdCA9PT0gdW5kZWZpbmVkID8gZm4gOiBOQVRJVkVfQklORCA/IGJpbmQoZm4sIHRoYXQpIDogZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycycpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgQXJyYXlQcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG5cbi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3Jcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG90eXBlW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xudmFyIHRlc3QgPSB7fTtcblxudGVzdFtUT19TVFJJTkdfVEFHXSA9ICd6JztcblxubW9kdWxlLmV4cG9ydHMgPSBTdHJpbmcodGVzdCkgPT09ICdbb2JqZWN0IHpdJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgVE9fU1RSSU5HX1RBR19TVVBQT1JUID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZy10YWctc3VwcG9ydCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBjbGFzc29mUmF3ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQ09SUkVDVF9BUkdVTUVOVFMgPSBjbGFzc29mUmF3KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxufTtcblxuLy8gZ2V0dGluZyB0YWcgZnJvbSBFUzYrIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYFxubW9kdWxlLmV4cG9ydHMgPSBUT19TVFJJTkdfVEFHX1NVUFBPUlQgPyBjbGFzc29mUmF3IDogZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCB0YWcsIHJlc3VsdDtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKHRhZyA9IHRyeUdldChPID0gJE9iamVjdChpdCksIFRPX1NUUklOR19UQUcpKSA9PSAnc3RyaW5nJyA/IHRhZ1xuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQ09SUkVDVF9BUkdVTUVOVFMgPyBjbGFzc29mUmF3KE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKHJlc3VsdCA9IGNsYXNzb2ZSYXcoTykpID09PSAnT2JqZWN0JyAmJiBpc0NhbGxhYmxlKE8uY2FsbGVlKSA/ICdBcmd1bWVudHMnIDogcmVzdWx0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKGl0KSkgcmV0dXJuIGdldE1ldGhvZChpdCwgSVRFUkFUT1IpXG4gICAgfHwgZ2V0TWV0aG9kKGl0LCAnQEBpdGVyYXRvcicpXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xudmFyIGdldEl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvci1tZXRob2QnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50LCB1c2luZ0l0ZXJhdG9yKSB7XG4gIHZhciBpdGVyYXRvck1ldGhvZCA9IGFyZ3VtZW50cy5sZW5ndGggPCAyID8gZ2V0SXRlcmF0b3JNZXRob2QoYXJndW1lbnQpIDogdXNpbmdJdGVyYXRvcjtcbiAgaWYgKGFDYWxsYWJsZShpdGVyYXRvck1ldGhvZCkpIHJldHVybiBhbk9iamVjdChjYWxsKGl0ZXJhdG9yTWV0aG9kLCBhcmd1bWVudCkpO1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcih0cnlUb1N0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBpdGVyYWJsZScpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0cnlUb1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90cnktdG8tc3RyaW5nJyk7XG52YXIgaXNBcnJheUl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgaXNQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mJyk7XG52YXIgZ2V0SXRlcmF0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yJyk7XG52YXIgZ2V0SXRlcmF0b3JNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIGl0ZXJhdG9yQ2xvc2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3ItY2xvc2UnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbnZhciBSZXN1bHQgPSBmdW5jdGlvbiAoc3RvcHBlZCwgcmVzdWx0KSB7XG4gIHRoaXMuc3RvcHBlZCA9IHN0b3BwZWQ7XG4gIHRoaXMucmVzdWx0ID0gcmVzdWx0O1xufTtcblxudmFyIFJlc3VsdFByb3RvdHlwZSA9IFJlc3VsdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhYmxlLCB1bmJvdW5kRnVuY3Rpb24sIG9wdGlvbnMpIHtcbiAgdmFyIHRoYXQgPSBvcHRpb25zICYmIG9wdGlvbnMudGhhdDtcbiAgdmFyIEFTX0VOVFJJRVMgPSAhIShvcHRpb25zICYmIG9wdGlvbnMuQVNfRU5UUklFUyk7XG4gIHZhciBJU19SRUNPUkQgPSAhIShvcHRpb25zICYmIG9wdGlvbnMuSVNfUkVDT1JEKTtcbiAgdmFyIElTX0lURVJBVE9SID0gISEob3B0aW9ucyAmJiBvcHRpb25zLklTX0lURVJBVE9SKTtcbiAgdmFyIElOVEVSUlVQVEVEID0gISEob3B0aW9ucyAmJiBvcHRpb25zLklOVEVSUlVQVEVEKTtcbiAgdmFyIGZuID0gYmluZCh1bmJvdW5kRnVuY3Rpb24sIHRoYXQpO1xuICB2YXIgaXRlcmF0b3IsIGl0ZXJGbiwgaW5kZXgsIGxlbmd0aCwgcmVzdWx0LCBuZXh0LCBzdGVwO1xuXG4gIHZhciBzdG9wID0gZnVuY3Rpb24gKGNvbmRpdGlvbikge1xuICAgIGlmIChpdGVyYXRvcikgaXRlcmF0b3JDbG9zZShpdGVyYXRvciwgJ25vcm1hbCcpO1xuICAgIHJldHVybiBuZXcgUmVzdWx0KHRydWUsIGNvbmRpdGlvbik7XG4gIH07XG5cbiAgdmFyIGNhbGxGbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmIChBU19FTlRSSUVTKSB7XG4gICAgICBhbk9iamVjdCh2YWx1ZSk7XG4gICAgICByZXR1cm4gSU5URVJSVVBURUQgPyBmbih2YWx1ZVswXSwgdmFsdWVbMV0sIHN0b3ApIDogZm4odmFsdWVbMF0sIHZhbHVlWzFdKTtcbiAgICB9IHJldHVybiBJTlRFUlJVUFRFRCA/IGZuKHZhbHVlLCBzdG9wKSA6IGZuKHZhbHVlKTtcbiAgfTtcblxuICBpZiAoSVNfUkVDT1JEKSB7XG4gICAgaXRlcmF0b3IgPSBpdGVyYWJsZS5pdGVyYXRvcjtcbiAgfSBlbHNlIGlmIChJU19JVEVSQVRPUikge1xuICAgIGl0ZXJhdG9yID0gaXRlcmFibGU7XG4gIH0gZWxzZSB7XG4gICAgaXRlckZuID0gZ2V0SXRlcmF0b3JNZXRob2QoaXRlcmFibGUpO1xuICAgIGlmICghaXRlckZuKSB0aHJvdyBuZXcgJFR5cGVFcnJvcih0cnlUb1N0cmluZyhpdGVyYWJsZSkgKyAnIGlzIG5vdCBpdGVyYWJsZScpO1xuICAgIC8vIG9wdGltaXNhdGlvbiBmb3IgYXJyYXkgaXRlcmF0b3JzXG4gICAgaWYgKGlzQXJyYXlJdGVyYXRvck1ldGhvZChpdGVyRm4pKSB7XG4gICAgICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoaXRlcmFibGUpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgICByZXN1bHQgPSBjYWxsRm4oaXRlcmFibGVbaW5kZXhdKTtcbiAgICAgICAgaWYgKHJlc3VsdCAmJiBpc1Byb3RvdHlwZU9mKFJlc3VsdFByb3RvdHlwZSwgcmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0gcmV0dXJuIG5ldyBSZXN1bHQoZmFsc2UpO1xuICAgIH1cbiAgICBpdGVyYXRvciA9IGdldEl0ZXJhdG9yKGl0ZXJhYmxlLCBpdGVyRm4pO1xuICB9XG5cbiAgbmV4dCA9IElTX1JFQ09SRCA/IGl0ZXJhYmxlLm5leHQgOiBpdGVyYXRvci5uZXh0O1xuICB3aGlsZSAoIShzdGVwID0gY2FsbChuZXh0LCBpdGVyYXRvcikpLmRvbmUpIHtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gY2FsbEZuKHN0ZXAudmFsdWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCAndGhyb3cnLCBlcnJvcik7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgcmVzdWx0ID09ICdvYmplY3QnICYmIHJlc3VsdCAmJiBpc1Byb3RvdHlwZU9mKFJlc3VsdFByb3RvdHlwZSwgcmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgfSByZXR1cm4gbmV3IFJlc3VsdChmYWxzZSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGl0ZXJhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0ZScpO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZ2V0SXRlcmF0b3JEaXJlY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLWRpcmVjdCcpO1xudmFyIGl0ZXJhdG9yQ2xvc2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3ItY2xvc2UnKTtcbnZhciBpdGVyYXRvckhlbHBlcldpdGhvdXRDbG9zaW5nT25FYXJseUVycm9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWhlbHBlci13aXRob3V0LWNsb3Npbmctb24tZWFybHktZXJyb3InKTtcblxudmFyIGZpbmRXaXRob3V0Q2xvc2luZ09uRWFybHlFcnJvciA9IGl0ZXJhdG9ySGVscGVyV2l0aG91dENsb3NpbmdPbkVhcmx5RXJyb3IoJ2ZpbmQnLCBUeXBlRXJyb3IpO1xuXG4vLyBgSXRlcmF0b3IucHJvdG90eXBlLmZpbmRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pdGVyYXRvci5wcm90b3R5cGUuZmluZFxuJCh7IHRhcmdldDogJ0l0ZXJhdG9yJywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogZmluZFdpdGhvdXRDbG9zaW5nT25FYXJseUVycm9yIH0sIHtcbiAgZmluZDogZnVuY3Rpb24gZmluZChwcmVkaWNhdGUpIHtcbiAgICBhbk9iamVjdCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgYUNhbGxhYmxlKHByZWRpY2F0ZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGl0ZXJhdG9yQ2xvc2UodGhpcywgJ3Rocm93JywgZXJyb3IpO1xuICAgIH1cblxuICAgIGlmIChmaW5kV2l0aG91dENsb3NpbmdPbkVhcmx5RXJyb3IpIHJldHVybiBjYWxsKGZpbmRXaXRob3V0Q2xvc2luZ09uRWFybHlFcnJvciwgdGhpcywgcHJlZGljYXRlKTtcblxuICAgIHZhciByZWNvcmQgPSBnZXRJdGVyYXRvckRpcmVjdCh0aGlzKTtcbiAgICB2YXIgY291bnRlciA9IDA7XG4gICAgcmV0dXJuIGl0ZXJhdGUocmVjb3JkLCBmdW5jdGlvbiAodmFsdWUsIHN0b3ApIHtcbiAgICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGNvdW50ZXIrKykpIHJldHVybiBzdG9wKHZhbHVlKTtcbiAgICB9LCB7IElTX1JFQ09SRDogdHJ1ZSwgSU5URVJSVVBURUQ6IHRydWUgfSkucmVzdWx0O1xuICB9XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGdldEl0ZXJhdG9yRGlyZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvci1kaXJlY3QnKTtcbnZhciBjcmVhdGVJdGVyYXRvclByb3h5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWNyZWF0ZS1wcm94eScpO1xudmFyIGNhbGxXaXRoU2FmZUl0ZXJhdGlvbkNsb3NpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2FsbC13aXRoLXNhZmUtaXRlcmF0aW9uLWNsb3NpbmcnKTtcbnZhciBpdGVyYXRvckNsb3NlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlJyk7XG52YXIgaXRlcmF0b3JIZWxwZXJUaHJvd3NPbkludmFsaWRJdGVyYXRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1oZWxwZXItdGhyb3dzLW9uLWludmFsaWQtaXRlcmF0b3InKTtcbnZhciBpdGVyYXRvckhlbHBlcldpdGhvdXRDbG9zaW5nT25FYXJseUVycm9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWhlbHBlci13aXRob3V0LWNsb3Npbmctb24tZWFybHktZXJyb3InKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcblxudmFyIE1BUF9XSVRIT1VUX1RIUk9XSU5HX09OX0lOVkFMSURfSVRFUkFUT1IgPSAhSVNfUFVSRSAmJiAhaXRlcmF0b3JIZWxwZXJUaHJvd3NPbkludmFsaWRJdGVyYXRvcignbWFwJywgZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KTtcbnZhciBtYXBXaXRob3V0Q2xvc2luZ09uRWFybHlFcnJvciA9ICFJU19QVVJFICYmICFNQVBfV0lUSE9VVF9USFJPV0lOR19PTl9JTlZBTElEX0lURVJBVE9SXG4gICYmIGl0ZXJhdG9ySGVscGVyV2l0aG91dENsb3NpbmdPbkVhcmx5RXJyb3IoJ21hcCcsIFR5cGVFcnJvcik7XG5cbnZhciBGT1JDRUQgPSBJU19QVVJFIHx8IE1BUF9XSVRIT1VUX1RIUk9XSU5HX09OX0lOVkFMSURfSVRFUkFUT1IgfHwgbWFwV2l0aG91dENsb3NpbmdPbkVhcmx5RXJyb3I7XG5cbnZhciBJdGVyYXRvclByb3h5ID0gY3JlYXRlSXRlcmF0b3JQcm94eShmdW5jdGlvbiAoKSB7XG4gIHZhciBpdGVyYXRvciA9IHRoaXMuaXRlcmF0b3I7XG4gIHZhciByZXN1bHQgPSBhbk9iamVjdChjYWxsKHRoaXMubmV4dCwgaXRlcmF0b3IpKTtcbiAgdmFyIGRvbmUgPSB0aGlzLmRvbmUgPSAhIXJlc3VsdC5kb25lO1xuICBpZiAoIWRvbmUpIHJldHVybiBjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nKGl0ZXJhdG9yLCB0aGlzLm1hcHBlciwgW3Jlc3VsdC52YWx1ZSwgdGhpcy5jb3VudGVyKytdLCB0cnVlKTtcbn0pO1xuXG4vLyBgSXRlcmF0b3IucHJvdG90eXBlLm1hcGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWl0ZXJhdG9yLnByb3RvdHlwZS5tYXBcbiQoeyB0YXJnZXQ6ICdJdGVyYXRvcicsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIG1hcDogZnVuY3Rpb24gbWFwKG1hcHBlcikge1xuICAgIGFuT2JqZWN0KHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBhQ2FsbGFibGUobWFwcGVyKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaXRlcmF0b3JDbG9zZSh0aGlzLCAndGhyb3cnLCBlcnJvcik7XG4gICAgfVxuXG4gICAgaWYgKG1hcFdpdGhvdXRDbG9zaW5nT25FYXJseUVycm9yKSByZXR1cm4gY2FsbChtYXBXaXRob3V0Q2xvc2luZ09uRWFybHlFcnJvciwgdGhpcywgbWFwcGVyKTtcblxuICAgIHJldHVybiBuZXcgSXRlcmF0b3JQcm94eShnZXRJdGVyYXRvckRpcmVjdCh0aGlzKSwge1xuICAgICAgbWFwcGVyOiBtYXBwZXJcbiAgICB9KTtcbiAgfVxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXRlcmF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRlJyk7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBnZXRJdGVyYXRvckRpcmVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItZGlyZWN0Jyk7XG52YXIgaXRlcmF0b3JDbG9zZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1jbG9zZScpO1xudmFyIGl0ZXJhdG9ySGVscGVyV2l0aG91dENsb3NpbmdPbkVhcmx5RXJyb3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3ItaGVscGVyLXdpdGhvdXQtY2xvc2luZy1vbi1lYXJseS1lcnJvcicpO1xuXG52YXIgc29tZVdpdGhvdXRDbG9zaW5nT25FYXJseUVycm9yID0gaXRlcmF0b3JIZWxwZXJXaXRob3V0Q2xvc2luZ09uRWFybHlFcnJvcignc29tZScsIFR5cGVFcnJvcik7XG5cbi8vIGBJdGVyYXRvci5wcm90b3R5cGUuc29tZWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWl0ZXJhdG9yLnByb3RvdHlwZS5zb21lXG4kKHsgdGFyZ2V0OiAnSXRlcmF0b3InLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiBzb21lV2l0aG91dENsb3NpbmdPbkVhcmx5RXJyb3IgfSwge1xuICBzb21lOiBmdW5jdGlvbiBzb21lKHByZWRpY2F0ZSkge1xuICAgIGFuT2JqZWN0KHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBhQ2FsbGFibGUocHJlZGljYXRlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaXRlcmF0b3JDbG9zZSh0aGlzLCAndGhyb3cnLCBlcnJvcik7XG4gICAgfVxuXG4gICAgaWYgKHNvbWVXaXRob3V0Q2xvc2luZ09uRWFybHlFcnJvcikgcmV0dXJuIGNhbGwoc29tZVdpdGhvdXRDbG9zaW5nT25FYXJseUVycm9yLCB0aGlzLCBwcmVkaWNhdGUpO1xuXG4gICAgdmFyIHJlY29yZCA9IGdldEl0ZXJhdG9yRGlyZWN0KHRoaXMpO1xuICAgIHZhciBjb3VudGVyID0gMDtcbiAgICByZXR1cm4gaXRlcmF0ZShyZWNvcmQsIGZ1bmN0aW9uICh2YWx1ZSwgc3RvcCkge1xuICAgICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgY291bnRlcisrKSkgcmV0dXJuIHN0b3AoKTtcbiAgICB9LCB7IElTX1JFQ09SRDogdHJ1ZSwgSU5URVJSVVBURUQ6IHRydWUgfSkuc3RvcHBlZDtcbiAgfVxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgaXRlcmF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRlJyk7XG52YXIgZ2V0SXRlcmF0b3JEaXJlY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLWRpcmVjdCcpO1xuXG52YXIgcHVzaCA9IFtdLnB1c2g7XG5cbi8vIGBJdGVyYXRvci5wcm90b3R5cGUudG9BcnJheWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWl0ZXJhdG9yLnByb3RvdHlwZS50b2FycmF5XG4kKHsgdGFyZ2V0OiAnSXRlcmF0b3InLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSB9LCB7XG4gIHRvQXJyYXk6IGZ1bmN0aW9uIHRvQXJyYXkoKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIGl0ZXJhdGUoZ2V0SXRlcmF0b3JEaXJlY3QoYW5PYmplY3QodGhpcykpLCBwdXNoLCB7IHRoYXQ6IHJlc3VsdCwgSVNfUkVDT1JEOiB0cnVlIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG4vKiEgVHdpbmtsZS5qcyAtIG1vcmViaXRzLmpzICovXG5cbi8qKlxuICogQSBsaWJyYXJ5IGZ1bGwgb2YgbG90cyBvZiBnb29kbmVzcyBmb3IgdXNlciBzY3JpcHRzIG9uIE1lZGlhV2lraSB3aWtpcy5cbiAqXG4gKiBUaGUgaGlnaGxpZ2h0cyBpbmNsdWRlOlxuICogLSB7QGxpbmsgTW9yZWJpdHMud2lraS5hcGl9IC0gbWFrZSBjYWxscyB0byB0aGUgTWVkaWFXaWtpIEFQSVxuICogLSB7QGxpbmsgTW9yZWJpdHMud2lraS5wYWdlfSAtIG1vZGlmeSBwYWdlcyBvbiB0aGUgd2lraSAoZWRpdCwgcmV2ZXJ0LCBkZWxldGUsIGV0Yy4pXG4gKiAtIHtAbGluayBNb3JlYml0cy5kYXRlfSAtIGVuaGFuY2VkIGRhdGUgb2JqZWN0IHByb2Nlc3NpbmcsIHNvcnQgb2YgYSBsaWdodCBtb21lbnQuanNcbiAqIC0ge0BsaW5rIE1vcmViaXRzLnF1aWNrRm9ybX0gLSBnZW5lcmF0ZSBxdWljayBIVE1MIGZvcm1zIG9uIHRoZSBmbHlcbiAqIC0ge0BsaW5rIE1vcmViaXRzLnNpbXBsZVdpbmRvd30gLSBhIHdyYXBwZXIgZm9yIGpRdWVyeSBVSSBEaWFsb2cgd2l0aCBhIGN1c3RvbSBsb29rIGFuZCBleHRyYSBmZWF0dXJlc1xuICogLSB7QGxpbmsgTW9yZWJpdHMuc3RhdHVzfSAtIGEgcm91Z2gtYW5kLXJlYWR5IHN0YXR1cyBtZXNzYWdlIGRpc3BsYXllciwgdXNlZCBieSB0aGUgTW9yZWJpdHMud2lraSBjbGFzc2VzXG4gKiAtIHtAbGluayBNb3JlYml0cy53aWtpdGV4dH0gLSB1dGlsaXRpZXMgZm9yIGRlYWxpbmcgd2l0aCB3aWtpdGV4dFxuICogLSB7QGxpbmsgTW9yZWJpdHMuc3RyaW5nfSAtIHV0aWxpdGllcyBmb3IgbWFuaXB1bGF0aW5nIHN0cmluZ3NcbiAqIC0ge0BsaW5rIE1vcmViaXRzLmFycmF5fSAtIHV0aWxpdGllcyBmb3IgbWFuaXB1bGF0aW5nIGFycmF5c1xuICogLSB7QGxpbmsgTW9yZWJpdHMuaXB9IC0gdXRpbGl0aWVzIHRvIGhlbHAgcHJvY2VzcyBJUCBhZGRyZXNzZXNcbiAqXG4gKiBEZXBlbmRlbmNpZXM6XG4gKiAtIFRoZSB3aG9sZSB0aGluZyByZWxpZXMgb24galF1ZXJ5LiAgQnV0IG1vc3Qgd2lraXMgc2hvdWxkIHByb3ZpZGUgdGhpcyBieSBkZWZhdWx0LlxuICogLSB7QGxpbmsgTW9yZWJpdHMucXVpY2tGb3JtfSwge0BsaW5rIE1vcmViaXRzLnNpbXBsZVdpbmRvd30sIGFuZCB7QGxpbmsgTW9yZWJpdHMuc3RhdHVzfSByZWx5IG9uIHRoZSBcIm1vcmViaXRzLmNzc1wiIGZpbGUgZm9yIHRoZWlyIHN0eWxpbmcuXG4gKiAtIHtAbGluayBNb3JlYml0cy5zaW1wbGVXaW5kb3d9IGFuZCB7QGxpbmsgTW9yZWJpdHMucXVpY2tGb3JtfSB0b29sdGlwcyByZWx5IG9uIGpRdWVyeSBVSSBEaWFsb2cgKGZyb20gUmVzb3VyY2VMb2FkZXIgbW9kdWxlIG5hbWUgJ2pxdWVyeS51aScpLlxuICogLSBUbyBjcmVhdGUgYSBnYWRnZXQgYmFzZWQgb24gbW9yZWJpdHMuanMsIHVzZSB0aGlzIHN5bnRheCBpbiBNZWRpYVdpa2k6R2FkZ2V0cy1kZWZpbml0aW9uOlxuICogICAgIC0gYCpHYWRnZXROYW1lW1Jlc291cmNlTG9hZGVyfGRlcGVuZGVuY2llcz1tZWRpYXdpa2kudXNlcixtZWRpYXdpa2kudXRpbCxtZWRpYXdpa2kuVGl0bGUsanF1ZXJ5LnVpXXxtb3JlYml0cy5qc3xtb3JlYml0cy5jc3N8R2FkZ2V0TmFtZS5qc2BcbiAqIC0gQWx0ZXJuYXRpdmVseSwgeW91IGNhbiBjb25maWd1cmUgbW9yZWJpdHMuanMgYXMgYSBoaWRkZW4gZ2FkZ2V0IGluIE1lZGlhV2lraTpHYWRnZXRzLWRlZmluaXRpb246XG4gKiAgICAgLSBgKm1vcmViaXRzW1Jlc291cmNlTG9hZGVyfGRlcGVuZGVuY2llcz1tZWRpYXdpa2kudXNlcixtZWRpYXdpa2kudXRpbCxtZWRpYXdpa2kuVGl0bGUsanF1ZXJ5LnVpfGhpZGRlbl18bW9yZWJpdHMuanN8bW9yZWJpdHMuY3NzYFxuICogICAgIGFuZCB0aGVuIGxvYWQgZXh0LmdhZGdldC5tb3JlYml0cyBhcyBvbmUgb2YgdGhlIGRlcGVuZGVuY2llcyBmb3IgdGhlIG5ldyBnYWRnZXQuXG4gKlxuICogQWxsIHRoZSBzdHVmZiBoZXJlIHdvcmtzIG9uIGFsbCBicm93c2VycyBmb3Igd2hpY2ggTWVkaWFXaWtpIHByb3ZpZGVzIEphdmFTY3JpcHQgc3VwcG9ydC5cbiAqXG4gKiBUaGlzIGxpYnJhcnkgaXMgbWFpbnRhaW5lZCBieSB0aGUgbWFpbnRhaW5lcnMgb2YgVHdpbmtsZS5cbiAqIEZvciBxdWVyaWVzLCBzdWdnZXN0aW9ucywgaGVscCwgZXRjLiwgaGVhZCB0byBbSGVscDpUd2lua2xlXShodHRwczovL3d3dy5xaXV3ZW5iYWlrZS5jbi93aWtpL0g6VFcpLlxuICogVGhlIGxhdGVzdCBkZXZlbG9wbWVudCBzb3VyY2UgaXMgYXZhaWxhYmxlIGF0IHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vd2lraW1lZGlhLWdhZGdldHMvdHdpbmtsZS9ibG9iL21hc3Rlci9tb3JlYml0cy5qc3xHaXRIdWJ9LlxuICpcbiAqIEBwYXJhbSB7SlF1ZXJ5fSAkXG4gKiBAbmFtZXNwYWNlIE1vcmViaXRzXG4gKi9cbmltcG9ydCAnLi9tb3JlYml0cy5sZXNzJztcbmltcG9ydCB7Z2VuZXJhdGVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuKGZ1bmN0aW9uIG1vcmViaXRzKCQpIHtcblx0Ly8gV3JhcCBlbnRpcmUgZmlsZSB3aXRoIGFub255bW91cyBmdW5jdGlvblxuXHQvKiogQGxlbmRzIE1vcmViaXRzICovXG5cdGNvbnN0IE1vcmViaXRzID0ge307XG5cdHdpbmRvdy5Nb3JlYml0cyA9IE1vcmViaXRzOyAvLyBhbGxvdyBnbG9iYWwgYWNjZXNzXG5cdC8vIE5vIE1vcmViaXRzLmkxOG4gYXQgdGhpcyB0aW1lXG5cdC8qKlxuXHQgKiBXaWtpLXNwZWNpZmljIGNvbmZpZ3VyYXRpb25zIGZvciBNb3JlYml0c1xuXHQgKi9cblx0TW9yZWJpdHMubDEwbiA9IHtcblx0XHQvKipcblx0XHQgKiBMb2NhbCBhbGlhc2VzIGZvciBcInJlZGlyZWN0XCIgbWFnaWMgd29yZC5cblx0XHQgKiBDaGVjayB1c2luZyBhcGkucGhwP2FjdGlvbj1xdWVyeSZmb3JtYXQ9anNvbiZtZXRhPXNpdGVpbmZvJmZvcm1hdHZlcnNpb249MiZzaXByb3A9bWFnaWN3b3Jkc1xuXHRcdCAqL1xuXHRcdHJlZGlyZWN0VGFnQWxpYXNlczogWycjUkVESVJFQ1QnLCAnI+mHjeWumuWQkSddLFxuXHRcdC8qKlxuXHRcdCAqIFRha2VzIGEgc3RyaW5nIGFzIGFyZ3VtZW50IGFuZCBjaGVja3MgaWYgaXQgaXMgYSB0aW1lc3RhbXAgb3Igbm90XG5cdFx0ICogSWYgbm90LCBpdCByZXR1cm5zIG51bGwuIElmIHllcywgaXQgcmV0dXJucyBhbiBhcnJheSBvZiBpbnRlZ2Vyc1xuXHRcdCAqIGluIHRoZSBmb3JtYXQgW3llYXIsIG1vbnRoLCBkYXRlLCBob3VyLCBtaW51dGUsIHNlY29uZF1cblx0XHQgKiB3aGljaCBjYW4gYmUgcGFzc2VkIHRvIERhdGUuVVRDKClcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcblx0XHQgKiBAcmV0dXJucyB7bnVtYmVyW10gfCBudWxsfVxuXHRcdCAqL1xuXHRcdHNpZ25hdHVyZVRpbWVzdGFtcEZvcm1hdDogKHN0cikgPT4ge1xuXHRcdFx0Y29uc3Qgcmd4VVRDID0gLyhcXGR7NH0p5bm0KFxcZHsxLDJ9KeaciChcXGR7MSwyfSnml6UgXFwoLlxcKSAoXFxkezJ9KTooXFxkezJ9KSBcXChVVENcXCkvOyAvLyBZWVlZ5bm0TW9udGjmnIhEROaXpSAodykgSEg6bW0gKFVUQylcblx0XHRcdGNvbnN0IHJneENTVCA9IC8oXFxkezR9KeW5tChcXGR7MSwyfSnmnIgoXFxkezEsMn0p5pelIFxcKC5cXCkgKFxcZHsyfSk6KFxcZHsyfSkgXFwoQ1NUXFwpLzsgLy8gWVlZWeW5tE1vbnRo5pyIRETml6UgKHcpIEhIOm1tIChDU1QpXG5cdFx0XHRjb25zdCBtYXRjaCA9IHJneFVUQy5leGVjKHN0cikgfHwgcmd4Q1NULmV4ZWMoc3RyKTtcblx0XHRcdGNvbnN0IG1hdGNoQ1NUID0gcmd4Q1NULmV4ZWMoc3RyKTtcblx0XHRcdGlmICghbWF0Y2gpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBtb250aCA9IE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5tb250aHMuaW5kZXhPZihtYXRjaFs0XSk7XG5cdFx0XHRpZiAobW9udGggPT09IC0xKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0Ly8gLi4uLi4geWVhciAuLi4uIG1vbnRoIC4uLiBkYXRlIC4uLi4gaG91ciAuLi4gbWludXRlXG5cdFx0XHRyZXR1cm4gbWF0Y2hDU1Rcblx0XHRcdFx0PyBbbWF0Y2hbMV0sIG1hdGNoWzJdIC0gMSwgbWF0Y2hbM10sIG1hdGNoWzRdIC0gOCwgbWF0Y2hbNV1dXG5cdFx0XHRcdDogW21hdGNoWzFdLCBtYXRjaFsyXSAtIDEsIG1hdGNoWzNdLCBtYXRjaFs0XSwgbWF0Y2hbNV1dO1xuXHRcdH0sXG5cdH07XG5cdC8qKlxuXHQgKiBTaW1wbGUgaGVscGVyIGZ1bmN0aW9uIHRvIHNlZSB3aGF0IGdyb3VwcyBhIHVzZXIgbWlnaHQgYmVsb25nLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZ3JvdXAgLSBlLmcuIGBzeXNvcGAsIGBhdXRvY29uZmlybWVkYCwgZXRjLlxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdE1vcmViaXRzLnVzZXJJc0luR3JvdXAgPSAoZ3JvdXApID0+IHtcblx0XHRyZXR1cm4gbXcuY29uZmlnLmdldCgnd2dVc2VyR3JvdXBzJykuaW5jbHVkZXMoZ3JvdXApO1xuXHR9O1xuXHQvKipcblx0ICogSGFyZGNvZGVzIHdoZXRoZXIgdGhlIHVzZXIgaXMgYSBzeXNvcCwgdXNlZCBhIGxvdC5cblx0ICpcblx0ICogQHR5cGUge2Jvb2xlYW59XG5cdCAqL1xuXHRNb3JlYml0cy51c2VySXNTeXNvcCA9XG5cdFx0TW9yZWJpdHMudXNlcklzSW5Hcm91cCgnc3lzb3AnKSB8fCBNb3JlYml0cy51c2VySXNJbkdyb3VwKCdzdGV3YXJkJykgfHwgTW9yZWJpdHMudXNlcklzSW5Hcm91cCgncWl1d2VuJyk7XG5cdC8qKlxuXHQgKiBEZXByZWNhdGVkIGFzIG9mIEZlYnJ1YXJ5IDIwMjEsIHVzZSB7QGxpbmsgTW9yZWJpdHMuaXAuc2FuaXRpemVJUHY2fS5cblx0ICpcblx0ICogQGRlcHJlY2F0ZWQgVXNlIHtAbGluayBNb3JlYml0cy5pcC5zYW5pdGl6ZUlQdjZ9LlxuXHQgKiBDb252ZXJ0cyBhbiBJUHY2IGFkZHJlc3MgdG8gdGhlIGNhbm9uaWNhbCBmb3JtIHN0b3JlZCBhbmQgdXNlZCBieSBNZWRpYVdpa2kuXG5cdCAqIEphdmFTY3JpcHQgdHJhbnNsYXRpb24gb2YgdGhlIHtAbGluayBodHRwczovL2dlcnJpdC53aWtpbWVkaWEub3JnL3IvcGx1Z2lucy9naXRpbGVzL21lZGlhd2lraS9jb3JlLysvOGViNmFjM2U4NGVhMzMxMmQzOTFjYTk2YzEyYzQ5ZTNhZDA3NTNiYi9pbmNsdWRlcy91dGlscy9JUC5waHAjMTMxfGBJUDo6c2FuaXRpemVJUCgpYH1cblx0ICogZnVuY3Rpb24gZnJvbSB0aGUgSVBVdGlscyBsaWJyYXJ5LiAgQWRkcmVzc2VzIGFyZSB2ZXJib3NlLCB1cHBlcmNhc2UsXG5cdCAqIG5vcm1hbGl6ZWQsIGFuZCBleHBhbmRlZCB0byA4IHdvcmRzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gYWRkcmVzcyAtIFRoZSBJUHY2IGFkZHJlc3MsIHdpdGggb3Igd2l0aG91dCBDSURSLlxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHQgKi9cblx0TW9yZWJpdHMuc2FuaXRpemVJUHY2ID0gKGFkZHJlc3MpID0+IHtcblx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHQnW01vcmViaXRzXSBOT1RFOiBNb3JlYml0cy5zYW5pdGl6ZUlQdjYgd2FzIHJlbmFtZWQgdG8gTW9yZWJpdHMuaXAuc2FuaXRpemVJUHY2IGluIEZlYnJ1YXJ5IDIwMjEsIHBsZWFzZSB1c2UgdGhhdCBpbnN0ZWFkJ1xuXHRcdCk7XG5cdFx0cmV0dXJuIE1vcmViaXRzLmlwLnNhbml0aXplSVB2NihhZGRyZXNzKTtcblx0fTtcblx0LyoqXG5cdCAqIERldGVybWluZXMgd2hldGhlciB0aGUgY3VycmVudCBwYWdlIGlzIGEgcmVkaXJlY3Qgb3Igc29mdCByZWRpcmVjdC4gRmFpbHNcblx0ICogdG8gZGV0ZWN0IHNvZnQgcmVkaXJlY3RzIG9uIGVkaXQsIGhpc3RvcnksIGV0Yy4gcGFnZXMuICBXaWxsIGF0dGVtcHQgdG9cblx0ICogZGV0ZWN0IE1vZHVsZTpSZkQsIHdpdGggdGhlIHNhbWUgZmFpbHVyZSBwb2ludHMuXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0TW9yZWJpdHMuaXNQYWdlUmVkaXJlY3QgPSAoKSA9PiB7XG5cdFx0cmV0dXJuICEhKFxuXHRcdFx0bXcuY29uZmlnLmdldCgnd2dJc1JlZGlyZWN0JykgfHxcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb2Z0cmVkaXJlY3QnKSB8fFxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJveC1SZkQnKSB8fFxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJveC1SZWRpcmVjdF9jYXRlZ29yeV9zaGVsbCcpXG5cdFx0KTtcblx0fTtcblx0LyoqXG5cdCAqIFN0b3JlcyBhIG5vcm1hbGl6ZWQgKHVuZGVyc2NvcmVzIGNvbnZlcnRlZCB0byBzcGFjZXMpIHZlcnNpb24gb2YgdGhlXG5cdCAqIGB3Z1BhZ2VOYW1lYCB2YXJpYWJsZS5cblx0ICpcblx0ICogQHR5cGUge3N0cmluZ31cblx0ICovXG5cdE1vcmViaXRzLnBhZ2VOYW1lTm9ybSA9IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKS5yZXBsYWNlKC9fL2csICcgJyk7XG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBzdHJpbmcgZm9yIHVzZSBpbiByZWdleCBtYXRjaGluZyBhIHBhZ2UgbmFtZS4gIEFjY291bnRzIGZvclxuXHQgKiBsZWFkaW5nIGNoYXJhY3RlcidzIGNhcGl0YWxpemF0aW9uLCB1bmRlcnNjb3JlcyBhcyBzcGFjZXMsIGFuZCBzcGVjaWFsXG5cdCAqIGNoYXJhY3RlcnMgYmVpbmcgZXNjYXBlZC4gIFNlZSBhbHNvIHtAbGluayBNb3JlYml0cy5uYW1lc3BhY2VSZWdleH0uXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBwYWdlTmFtZSAtIFBhZ2UgbmFtZSB3aXRob3V0IG5hbWVzcGFjZS5cblx0ICogQHJldHVybnMge3N0cmluZ30gLSBGb3IgYSBwYWdlIG5hbWUgYEZvbyBiYXJgLCByZXR1cm5zIHRoZSBzdHJpbmcgYFtGZl1vb1tfIF1iYXJgLlxuXHQgKi9cblx0TW9yZWJpdHMucGFnZU5hbWVSZWdleCA9IChwYWdlTmFtZSkgPT4ge1xuXHRcdGlmIChwYWdlTmFtZSA9PT0gJycpIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cdFx0Y29uc3QgW2ZpcnN0Q2hhcl0gPSBwYWdlTmFtZTtcblx0XHRjb25zdCByZW1haW5kZXIgPSBNb3JlYml0cy5zdHJpbmcuZXNjYXBlUmVnRXhwKHBhZ2VOYW1lLnNsaWNlKDEpKTtcblx0XHRpZiAobXcuVGl0bGUucGhwQ2hhclRvVXBwZXIoZmlyc3RDaGFyKSAhPT0gZmlyc3RDaGFyLnRvTG93ZXJDYXNlKCkpIHtcblx0XHRcdHJldHVybiBgWyR7bXcuVGl0bGUucGhwQ2hhclRvVXBwZXIoZmlyc3RDaGFyKX0ke2ZpcnN0Q2hhci50b0xvd2VyQ2FzZSgpfV0ke3JlbWFpbmRlcn1gO1xuXHRcdH1cblx0XHRyZXR1cm4gTW9yZWJpdHMuc3RyaW5nLmVzY2FwZVJlZ0V4cChmaXJzdENoYXIpICsgcmVtYWluZGVyO1xuXHR9O1xuXHQvKipcblx0ICogQ29udmVydHMgc3RyaW5nIG9yIGFycmF5IG9mIERPTSBub2RlcyBpbnRvIGFuIEhUTUwgZnJhZ21lbnQuXG5cdCAqIFdpa2lsaW5rIHN5bnRheCAoYFtbLi4uXV1gKSBpcyB0cmFuc2Zvcm1lZCBpbnRvIEhUTUwgYW5jaG9yLlxuXHQgKiBVc2VkIGluIE1vcmViaXRzLnF1aWNrRm9ybSBhbmQgTW9yZWJpdHMuc3RhdHVzXG5cdCAqXG5cdCAqIEBpbnRlcm5hbFxuXHQgKiBAcGFyYW0ge3N0cmluZ3xOb2RlfChzdHJpbmd8Tm9kZSlbXX0gaW5wdXRcblx0ICogQHJldHVybnMge0RvY3VtZW50RnJhZ21lbnR9XG5cdCAqL1xuXHRNb3JlYml0cy5jcmVhdGVIdG1sID0gKGlucHV0KSA9PiB7XG5cdFx0Y29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cdFx0aWYgKCFpbnB1dCkge1xuXHRcdFx0cmV0dXJuIGZyYWdtZW50O1xuXHRcdH1cblx0XHRpbnB1dCA9IGdlbmVyYXRlQXJyYXkoaW5wdXQpO1xuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBpbnB1dCkge1xuXHRcdFx0aWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG5cdFx0XHRcdGZyYWdtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zm9yIChjb25zdCBub2RlIG9mICQucGFyc2VIVE1MKE1vcmViaXRzLmNyZWF0ZUh0bWwucmVuZGVyV2lraWxpbmtzKGVsZW1lbnQpKSkge1xuXHRcdFx0XHRcdGZyYWdtZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmcmFnbWVudDtcblx0fTtcblx0LyoqXG5cdCAqIENvbnZlcnRzIHdpa2lsaW5rcyB0byBIVE1MIGFuY2hvciB0YWdzLlxuXHQgKlxuXHQgKiBAcGFyYW0gdGV4dFxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdE1vcmViaXRzLmNyZWF0ZUh0bWwucmVuZGVyV2lraWxpbmtzID0gKHRleHQpID0+IHtcblx0XHRjb25zdCB1YiA9IG5ldyBNb3JlYml0cy51bmJpbmRlcih0ZXh0KTtcblx0XHQvLyBEb24ndCBjb252ZXJ0IHdpa2lsaW5rcyB3aXRoaW4gY29kZSB0YWdzIGFzIHRoZXkncmUgdXNlZCBmb3IgZGlzcGxheWluZyB3aWtpLWNvZGVcblx0XHR1Yi51bmJpbmQoJzxjb2RlPicsICc8L2NvZGU+Jyk7XG5cdFx0dWIuY29udGVudCA9IHViLmNvbnRlbnQucmVwbGFjZSgvXFxbXFxbOj8oPzooW158XFxdXSs/KVxcfCk/KFteXFxdfF0rPylcXF1cXF0vZywgKF8sIHRhcmdldCwgdGV4dF8pID0+IHtcblx0XHRcdHRhcmdldCB8fD0gdGV4dF87XG5cdFx0XHRyZXR1cm4gYDxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIiR7bXcudXRpbC5nZXRVcmwodGFyZ2V0KX1cIiB0aXRsZT1cIiR7dGFyZ2V0LnJlcGxhY2UoXG5cdFx0XHRcdC9cIi9nLFxuXHRcdFx0XHQnJiMzNDsnXG5cdFx0XHQpfVwiPiR7dGV4dF99PC9hPmA7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIHViLnJlYmluZCgpO1xuXHR9O1xuXHQvKipcblx0ICogQ3JlYXRlIGEgc3RyaW5nIGZvciB1c2UgaW4gcmVnZXggbWF0Y2hpbmcgYWxsIG5hbWVzcGFjZSBhbGlhc2VzLCByZWdhcmRsZXNzXG5cdCAqIG9mIHRoZSBjYXBpdGFsaXphdGlvbiBhbmQgdW5kZXJzY29yZXMvc3BhY2VzLiAgRG9lc24ndCBpbmNsdWRlIHRoZSBvcHRpb25hbFxuXHQgKiBsZWFkaW5nIGA6YCwgYnV0IGlmIHRoZXJlJ3MgbW9yZSB0aGFuIG9uZSBpdGVtLCB3cmFwcyB0aGUgbGlzdCBpbiBhXG5cdCAqIG5vbi1jYXB0dXJpbmcgZ3JvdXAuICBUaGlzIG1lYW5zIHlvdSBjYW4gZG8gYE1vcmViaXRzLm5hbWVzcGFjZVJlZ2V4KFs0XSkgK1xuXHQgKiAnOicgKyBNb3JlYml0cy5wYWdlTmFtZVJlZ2V4KCdUd2lua2xlJylgIHRvIG1hdGNoIGEgZnVsbCBwYWdlLiAgVXNlc1xuXHQgKiB7QGxpbmsgTW9yZWJpdHMucGFnZU5hbWVSZWdleH0uXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyW119IG5hbWVzcGFjZXMgLSBBcnJheSBvZiBuYW1lc3BhY2UgbnVtYmVycy4gIFVudXNlZC9pbnZhbGlkXG5cdCAqIG5hbWVzcGFjZSBudW1iZXJzIGFyZSBzaWxlbnRseSBkaXNjYXJkZWQuXG5cdCAqIEBleGFtcGxlXG5cdCAqIC8vIHJldHVybnMgJyg/OltGZl1bSWldW0xsXVtFZV18W0lpXVtNbV1bQWFdW0dnXVtFZV0pJ1xuXHQgKiBNb3JlYml0cy5uYW1lc3BhY2VSZWdleChbNl0pXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9IC0gUmVnZXgtc3VpdGFibGUgc3RyaW5nIG9mIGFsbCBuYW1lc3BhY2UgYWxpYXNlcy5cblx0ICovXG5cdE1vcmViaXRzLm5hbWVzcGFjZVJlZ2V4ID0gKG5hbWVzcGFjZXMpID0+IHtcblx0XHRuYW1lc3BhY2VzID0gZ2VuZXJhdGVBcnJheShuYW1lc3BhY2VzKTtcblx0XHRjb25zdCBhbGlhc2VzID0gW107XG5cdFx0bGV0IHJlZ2V4O1xuXHRcdGZvciAoY29uc3QgW25hbWUsIG51bWJlcl0gb2YgT2JqZWN0LmVudHJpZXMobXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VJZHMnKSkpIHtcblx0XHRcdGlmIChuYW1lc3BhY2VzLmluY2x1ZGVzKG51bWJlcikpIHtcblx0XHRcdFx0Ly8gTmFtZXNwYWNlcyBhcmUgY29tcGxldGVseSBhZ25vc3RpYyBhcyB0byBjYXNlLFxuXHRcdFx0XHQvLyBhbmQgYSByZWdleCBzdHJpbmcgaXMgbW9yZSB1c2VmdWwvY29tcGF0aWJsZSB0aGFuIGEgUmVnRXhwIG9iamVjdCxcblx0XHRcdFx0Ly8gc28gd2UgYWNjZXB0IGFueSBjYXNpbmcgZm9yIGFueSBsZXR0ZXIuXG5cdFx0XHRcdGFsaWFzZXNbYWxpYXNlcy5sZW5ndGhdID0gWy4uLm5hbWVdXG5cdFx0XHRcdFx0Lm1hcCgoY2hhcikgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIE1vcmViaXRzLnBhZ2VOYW1lUmVnZXgoY2hhcik7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuam9pbignJyk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHN3aXRjaCAoYWxpYXNlcy5sZW5ndGgpIHtcblx0XHRcdGNhc2UgMDpcblx0XHRcdFx0cmVnZXggPSAnJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFtyZWdleF0gPSBhbGlhc2VzO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJlZ2V4ID0gYCg/OiR7YWxpYXNlcy5qb2luKCd8Jyl9KWA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVnZXg7XG5cdH07XG5cdC8qICoqKioqKioqKioqKioqKiogTW9yZWJpdHMucXVpY2tGb3JtICoqKioqKioqKioqKioqKiogKi9cblx0LyoqXG5cdCAqIENyZWF0aW9uIG9mIHNpbXBsZSBhbmQgc3RhbmRhcmQgZm9ybXMgd2l0aG91dCBtdWNoIHNwZWNpZmljIGNvZGluZy5cblx0ICpcblx0ICogQG5hbWVzcGFjZSBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQG1lbWJlcm9mIE1vcmViaXRzXG5cdCAqIEBjbGFzc1xuXHQgKiBAcGFyYW0ge2V2ZW50fSBldmVudCAtIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgd2hlbiBmb3JtIGlzIHN1Ym1pdHRlZC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IFtldmVudFR5cGU9c3VibWl0XSAtIFR5cGUgb2YgdGhlIGV2ZW50LlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtID0gZnVuY3Rpb24gKGV2ZW50LCBldmVudFR5cGUpIHtcblx0XHR0aGlzLnJvb3QgPSBuZXcgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQoe1xuXHRcdFx0dHlwZTogJ2Zvcm0nLFxuXHRcdFx0ZXZlbnQsXG5cdFx0XHRldmVudFR5cGUsXG5cdFx0fSk7XG5cdH07XG5cdC8qKlxuXHQgKiBSZW5kZXJzIHRoZSBIVE1MIG91dHB1dCBvZiB0aGUgcXVpY2tGb3JtLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IHJldCA9IHRoaXMucm9vdC5yZW5kZXIoKTtcblx0XHRyZXQubmFtZXMgPSB7fTtcblx0XHRyZXR1cm4gcmV0O1xuXHR9O1xuXHQvKipcblx0ICogQXBwZW5kIGVsZW1lbnQgdG8gdGhlIGZvcm0uXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQHBhcmFtIHsob2JqZWN0fE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50KX0gZGF0YSAtIEEgcXVpY2tmb3JtIGVsZW1lbnQsIG9yIHRoZSBvYmplY3Qgd2l0aCB3aGljaFxuXHQgKiBhIHF1aWNrZm9ybSBlbGVtZW50IGlzIGNvbnN0cnVjdGVkLlxuXHQgKiBAcmV0dXJucyB7TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnR9IC0gU2FtZSBhcyB3aGF0IGlzIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24uXG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0ucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0cmV0dXJuIHRoaXMucm9vdC5hcHBlbmQoZGF0YSk7XG5cdH07XG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBuZXcgZWxlbWVudCBmb3IgdGhlIHRoZSBmb3JtLlxuXHQgKlxuXHQgKiBJbmRleCB0byBNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCB0eXBlczpcblx0ICogLSBHbG9iYWwgYXR0cmlidXRlczogaWQsIGNsYXNzTmFtZSwgc3R5bGUsIHRvb2x0aXAsIGV4dHJhLCAkZGF0YSwgYWRtaW5vbmx5XG5cdCAqIC0gYHNlbGVjdGA6IEEgY29tYm8gYm94IChha2EgZHJvcC1kb3duKS5cblx0ICogICAgIC0gQXR0cmlidXRlczogbmFtZSwgbGFiZWwsIG11bHRpcGxlLCBzaXplLCBsaXN0LCBldmVudCwgZGlzYWJsZWRcblx0ICogIC0gYG9wdGlvbmA6IEFuIGVsZW1lbnQgZm9yIGEgY29tYm8gYm94LlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogdmFsdWUsIGxhYmVsLCBzZWxlY3RlZCwgZGlzYWJsZWRcblx0ICogIC0gYG9wdGdyb3VwYDogQSBncm91cCBvZiBcIm9wdGlvblwicy5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IGxhYmVsLCBsaXN0XG5cdCAqICAtIGBmaWVsZGA6IEEgZmllbGRzZXQgKGFrYSBncm91cCBib3gpLlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogbmFtZSwgbGFiZWwsIGRpc2FibGVkXG5cdCAqICAtIGBjaGVja2JveGA6IEEgY2hlY2tib3guIE11c3QgdXNlIFwibGlzdFwiIHBhcmFtZXRlci5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxpc3QsIGV2ZW50XG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzICh3aXRoaW4gbGlzdCk6IG5hbWUsIGxhYmVsLCB2YWx1ZSwgY2hlY2tlZCwgZGlzYWJsZWQsIGV2ZW50LCBzdWJncm91cFxuXHQgKiAgLSBgcmFkaW9gOiBBIHJhZGlvIGJ1dHRvbi4gTXVzdCB1c2UgXCJsaXN0XCIgcGFyYW1ldGVyLlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogbmFtZSwgbGlzdCwgZXZlbnRcblx0ICogICAgICAtIEF0dHJpYnV0ZXMgKHdpdGhpbiBsaXN0KTogbmFtZSwgbGFiZWwsIHZhbHVlLCBjaGVja2VkLCBkaXNhYmxlZCwgZXZlbnQsIHN1Ymdyb3VwXG5cdCAqICAtIGBpbnB1dGA6IEEgdGV4dCBpbnB1dCBib3guXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCBsYWJlbCwgdmFsdWUsIHNpemUsIHBsYWNlaG9sZGVyLCBtYXhsZW5ndGgsIGRpc2FibGVkLCByZXF1aXJlZCwgcmVhZG9ubHksIGV2ZW50XG5cdCAqICAtIGBudW1iZXJgOiBBIG51bWJlciBpbnB1dCBib3guXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBFdmVyeXRoaW5nIHRoZSB0ZXh0IGBpbnB1dGAgaGFzLCBhcyB3ZWxsIGFzOiBtaW4sIG1heCwgc3RlcCwgbGlzdFxuXHQgKiAgLSBgZHluaW5wdXRgOiBBIHNldCBvZiB0ZXh0IGJveGVzIHdpdGggXCJSZW1vdmVcIiBidXR0b25zIGFuZCBhbiBcIkFkZFwiIGJ1dHRvbi5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxhYmVsLCBtaW4sIG1heCwgc3VibGFiZWwsIHZhbHVlLCBzaXplLCBtYXhsZW5ndGgsIGV2ZW50XG5cdCAqICAtIGBoaWRkZW5gOiBBbiBpbnZpc2libGUgZm9ybSBmaWVsZC5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIHZhbHVlXG5cdCAqICAtIGBoZWFkZXJgOiBBIGxldmVsIDUgaGVhZGVyLlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogbGFiZWxcblx0ICogIC0gYGRpdmA6IEEgZ2VuZXJpYyBwbGFjZWhvbGRlciBlbGVtZW50IG9yIGxhYmVsLlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogbmFtZSwgbGFiZWxcblx0ICogIC0gYHN1Ym1pdGA6IEEgc3VibWl0IGJ1dHRvbi4gTW9yZWJpdHMuc2ltcGxlV2luZG93IG1vdmVzIHRoZXNlIHRvIHRoZSBmb290ZXIgb2YgdGhlIGRpYWxvZy5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxhYmVsLCBkaXNhYmxlZFxuXHQgKiAgLSBgYnV0dG9uYDogQSBnZW5lcmljIGJ1dHRvbi5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxhYmVsLCBkaXNhYmxlZCwgZXZlbnRcblx0ICogIC0gYHRleHRhcmVhYDogQSBiaWcsIG11bHRpLWxpbmUgdGV4dCBib3guXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCBsYWJlbCwgdmFsdWUsIGNvbHMsIHJvd3MsIGRpc2FibGVkLCByZXF1aXJlZCwgcmVhZG9ubHlcblx0ICogIC0gYGZyYWdtZW50YDogQSBEb2N1bWVudEZyYWdtZW50IG9iamVjdC5cblx0ICogICAgICAtIE5vIGF0dHJpYnV0ZXMsIGFuZCBubyBnbG9iYWwgYXR0cmlidXRlcyBleGNlcHQgYWRtaW5vbmx5LlxuXHQgKiBUaGVyZSBpcyBzb21lIGRpZmZlcmVuY2Ugb24gaG93IHR5cGVzIGhhbmRsZSB0aGUgYGxhYmVsYCBhdHRyaWJ1dGU6XG5cdCAqIC0gYGRpdmAsIGBzZWxlY3RgLCBgZmllbGRgLCBgY2hlY2tib3hgL2ByYWRpb2AsIGBpbnB1dGAsIGB0ZXh0YXJlYWAsIGBoZWFkZXJgLCBhbmQgYGR5bmlucHV0YCBjYW4gYWNjZXB0IGFuIGFycmF5IG9mIGl0ZW1zLFxuXHQgKiBhbmQgdGhlIGxhYmVsIGl0ZW0ocykgY2FuIGJlIGBFbGVtZW50YHMuXG5cdCAqIC0gYG9wdGlvbmAsIGBvcHRncm91cGAsIGBfZHluaW5wdXRfZWxlbWVudGAsIGBzdWJtaXRgLCBhbmQgYGJ1dHRvbmAgYWNjZXB0IG9ubHkgYSBzaW5nbGUgc3RyaW5nLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBjbGFzc1xuXHQgKiBAcGFyYW0ge09iamVjdH0gZGF0YSAtIE9iamVjdCByZXByZXNlbnRpbmcgdGhlIHF1aWNrZm9ybSBlbGVtZW50LiBTaG91bGRcblx0ICogc3BlY2lmeSBvbmUgb2YgdGhlIGF2YWlsYWJsZSB0eXBlcyBmcm9tIHRoZSBpbmRleCBhYm92ZSwgYXMgd2VsbCBhcyBhbnlcblx0ICogcmVsZXZhbnQgYW5kIGF2YWlsYWJsZSBhdHRyaWJ1dGVzLlxuXHQgKiBAZXhhbXBsZSBuZXcgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQoe1xuXHQgKiAgICAgbmFtZTogJ3RhcmdldCcsXG5cdCAqICAgICB0eXBlOiAnaW5wdXQnLFxuXHQgKiAgICAgbGFiZWw6ICdZb3VyIHRhcmdldDonLFxuXHQgKiAgICAgdG9vbHRpcDogJ0VudGVyIHlvdXIgdGFyZ2V0LiBSZXF1aXJlZC4nLFxuXHQgKiAgICAgcmVxdWlyZWQ6IHRydWVcblx0ICogfSk7XG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCA9IGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0dGhpcy5kYXRhID0gZGF0YTtcblx0XHR0aGlzLmNoaWxkcyA9IFtdO1xuXHR9O1xuXHQvKipcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50XG5cdCAqIEB0eXBlIHtudW1iZXJ9XG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudC5pZCA9IDA7XG5cdC8qKlxuXHQgKiBBcHBlbmRzIGFuIGVsZW1lbnQgdG8gY3VycmVudCBlbGVtZW50LlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnRcblx0ICogQHBhcmFtIHtNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudH0gZGF0YSAtIEEgcXVpY2tGb3JtIGVsZW1lbnQgb3IgdGhlIG9iamVjdCByZXF1aXJlZCB0b1xuXHQgKiBjcmVhdGUgdGhlIHF1aWNrRm9ybSBlbGVtZW50LlxuXHQgKiBAcmV0dXJucyB7TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnR9IFRoZSBzYW1lIGVsZW1lbnQgcGFzc2VkIGluLlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0bGV0IGNoaWxkO1xuXHRcdGlmIChkYXRhIGluc3RhbmNlb2YgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQpIHtcblx0XHRcdGNoaWxkID0gZGF0YTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2hpbGQgPSBuZXcgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQoZGF0YSk7XG5cdFx0fVxuXHRcdHRoaXMuY2hpbGRzW3RoaXMuY2hpbGRzLmxlbmd0aF0gPSBjaGlsZDtcblx0XHRyZXR1cm4gY2hpbGQ7XG5cdH07XG5cdC8qKlxuXHQgKiBSZW5kZXJzIHRoZSBIVE1MIG91dHB1dCBmb3IgdGhlIHF1aWNrRm9ybSBlbGVtZW50LiAgVGhpcyBzaG91bGQgYmUgY2FsbGVkXG5cdCAqIHdpdGhvdXQgcGFyYW1ldGVyczogYGZvcm0ucmVuZGVyKClgLlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gaW50ZXJuYWxTdWJncm91cElkXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudFxuXHQgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGludGVybmFsU3ViZ3JvdXBJZCkge1xuXHRcdGNvbnN0IGN1cnJlbnROb2RlID0gdGhpcy5jb21wdXRlKHRoaXMuZGF0YSwgaW50ZXJuYWxTdWJncm91cElkKTtcblx0XHRmb3IgKGNvbnN0IGNoaWxkIG9mIHRoaXMuY2hpbGRzKSB7XG5cdFx0XHQvLyBkbyBub3QgcGFzcyBpbnRlcm5hbF9zdWJncm91cF9pZCB0byByZWN1cnNpdmUgY2FsbHNcblx0XHRcdGN1cnJlbnROb2RlWzFdLmFwcGVuZENoaWxkKGNoaWxkLnJlbmRlcigpKTtcblx0XHR9XG5cdFx0cmV0dXJuIGN1cnJlbnROb2RlWzBdO1xuXHR9O1xuXHQvKipcblx0ICogQHBhcmFtIHsqfSBkYXRhXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBpbklkXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudFxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQucHJvdG90eXBlLmNvbXB1dGUgPSBmdW5jdGlvbiAoZGF0YSwgaW5JZCkge1xuXHRcdGxldCBub2RlO1xuXHRcdGxldCBjaGlsZENvbnRhaW5lciA9IG51bGw7XG5cdFx0bGV0IGxhYmVsO1xuXHRcdGNvbnN0IGlkID0gYCR7aW5JZCA/IGAke2luSWR9X2AgOiAnJ31ub2RlXyR7TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQuaWQrK31gO1xuXHRcdGlmIChkYXRhLmFkbWlub25seSAmJiAhTW9yZWJpdHMudXNlcklzU3lzb3ApIHtcblx0XHRcdC8vIGhlbGwgaGFjayBhbHBoYVxuXHRcdFx0ZGF0YS50eXBlID0gJ2hpZGRlbic7XG5cdFx0fVxuXHRcdGxldCBpO1xuXHRcdGxldCBjdXJyZW50O1xuXHRcdGxldCBzdWJub2RlO1xuXHRcdHN3aXRjaCAoZGF0YS50eXBlKSB7XG5cdFx0XHRjYXNlICdmb3JtJzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblx0XHRcdFx0bm9kZS5jbGFzc05hbWUgPSAncXVpY2tmb3JtJztcblx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNjcmlwdC11cmxcblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICdqYXZhc2NyaXB0OnZvaWQoMCk7Jyk7XG5cdFx0XHRcdGlmIChkYXRhLmV2ZW50KSB7XG5cdFx0XHRcdFx0bm9kZS5hZGRFdmVudExpc3RlbmVyKGRhdGEuZXZlbnRUeXBlIHx8ICdzdWJtaXQnLCBkYXRhLmV2ZW50LCBmYWxzZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdmcmFnbWVudCc6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cdFx0XHRcdC8vIGZyYWdtZW50cyBjYW4ndCBoYXZlIGFueSBhdHRyaWJ1dGVzLCBzbyBqdXN0IHJldHVybiBpdCBzdHJhaWdodCBhd2F5XG5cdFx0XHRcdHJldHVybiBbbm9kZSwgbm9kZV07XG5cdFx0XHRjYXNlICdzZWxlY3QnOiB7XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ2lkJywgYGRpdl8ke2lkfWApO1xuXHRcdFx0XHRpZiAoZGF0YS5sYWJlbCkge1xuXHRcdFx0XHRcdGxhYmVsID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKTtcblx0XHRcdFx0XHRsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGlkKTtcblx0XHRcdFx0XHRsYWJlbC5hcHBlbmRDaGlsZChNb3JlYml0cy5jcmVhdGVIdG1sKGRhdGEubGFiZWwpKTtcblx0XHRcdFx0XHQvLyBObyBtYXJnaW5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IHNlbGVjdCA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JykpO1xuXHRcdFx0XHRpZiAoZGF0YS5ldmVudCkge1xuXHRcdFx0XHRcdHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBkYXRhLmV2ZW50LCBmYWxzZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEubXVsdGlwbGUpIHtcblx0XHRcdFx0XHRzZWxlY3Quc2V0QXR0cmlidXRlKCdtdWx0aXBsZScsICdtdWx0aXBsZScpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLnNpemUpIHtcblx0XHRcdFx0XHRzZWxlY3Quc2V0QXR0cmlidXRlKCdzaXplJywgZGF0YS5zaXplKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5kaXNhYmxlZCkge1xuXHRcdFx0XHRcdHNlbGVjdC5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0c2VsZWN0LnNldEF0dHJpYnV0ZSgnbmFtZScsIGRhdGEubmFtZSk7XG5cdFx0XHRcdGlmIChkYXRhLmxpc3QpIHtcblx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgZGF0YS5saXN0Lmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdFx0XHRjdXJyZW50ID0gZGF0YS5saXN0W2ldO1xuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQubGlzdCkge1xuXHRcdFx0XHRcdFx0XHRjdXJyZW50LnR5cGUgPSAnb3B0Z3JvdXAnO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y3VycmVudC50eXBlID0gJ29wdGlvbic7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRzdWJub2RlID0gdGhpcy5jb21wdXRlKGN1cnJlbnQpO1xuXHRcdFx0XHRcdFx0c2VsZWN0LmFwcGVuZENoaWxkKHN1Ym5vZGVbMF0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRjaGlsZENvbnRhaW5lciA9IHNlbGVjdDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRjYXNlICdvcHRpb24nOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cdFx0XHRcdG5vZGUudmFsdWVzID0gZGF0YS52YWx1ZTtcblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZGF0YS52YWx1ZSk7XG5cdFx0XHRcdGlmIChkYXRhLnNlbGVjdGVkKSB7XG5cdFx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEuZGlzYWJsZWQpIHtcblx0XHRcdFx0XHRub2RlLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBBZGQgaGlkZGVuIGF0dHJcblx0XHRcdFx0aWYgKGRhdGEuaGlkZGVuKSB7XG5cdFx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnbGFiZWwnLCBkYXRhLmxhYmVsKTtcblx0XHRcdFx0bm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkYXRhLmxhYmVsKSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnb3B0Z3JvdXAnOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0Z3JvdXAnKTtcblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ2xhYmVsJywgZGF0YS5sYWJlbCk7XG5cdFx0XHRcdGlmIChkYXRhLmxpc3QpIHtcblx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgZGF0YS5saXN0Lmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdFx0XHRjdXJyZW50ID0gZGF0YS5saXN0W2ldO1xuXHRcdFx0XHRcdFx0Y3VycmVudC50eXBlID0gJ29wdGlvbic7IC8vIG11c3QgYmUgb3B0aW9ucyBoZXJlXG5cdFx0XHRcdFx0XHRzdWJub2RlID0gdGhpcy5jb21wdXRlKGN1cnJlbnQpO1xuXHRcdFx0XHRcdFx0bm9kZS5hcHBlbmRDaGlsZChzdWJub2RlWzBdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdmaWVsZCc6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpO1xuXHRcdFx0XHRsYWJlbCA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJykpO1xuXHRcdFx0XHRsYWJlbC5hcHBlbmRDaGlsZChNb3JlYml0cy5jcmVhdGVIdG1sKGRhdGEubGFiZWwpKTtcblx0XHRcdFx0aWYgKGRhdGEubmFtZSkge1xuXHRcdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCduYW1lJywgZGF0YS5uYW1lKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5kaXNhYmxlZCkge1xuXHRcdFx0XHRcdG5vZGUuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnY2hlY2tib3gnOlxuXHRcdFx0Y2FzZSAncmFkaW8nOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdGlmIChkYXRhLmxpc3QpIHtcblx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgZGF0YS5saXN0Lmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBjdXJJZCA9IGAke2lkfV8ke2l9YDtcblx0XHRcdFx0XHRcdGN1cnJlbnQgPSBkYXRhLmxpc3RbaV07XG5cdFx0XHRcdFx0XHRsZXQgY3VyRGl2O1xuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQudHlwZSA9PT0gJ2hlYWRlcicpIHtcblx0XHRcdFx0XHRcdFx0Ly8gaW5saW5lIGhhY2tcblx0XHRcdFx0XHRcdFx0Y3VyRGl2ID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNicpKTtcblx0XHRcdFx0XHRcdFx0Y3VyRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGN1cnJlbnQubGFiZWwpKTtcblx0XHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQudG9vbHRpcCkge1xuXHRcdFx0XHRcdFx0XHRcdE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50LmdlbmVyYXRlVG9vbHRpcChjdXJEaXYsIGN1cnJlbnQpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Y3VyRGl2ID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG5cdFx0XHRcdFx0XHQvLyBBZGQgaGlkZGVuIGF0dHJcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50LmhpZGRlbikge1xuXHRcdFx0XHRcdFx0XHRjdXJEaXYuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRzdWJub2RlID0gY3VyRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpO1xuXHRcdFx0XHRcdFx0c3Vibm9kZS52YWx1ZXMgPSBjdXJyZW50LnZhbHVlO1xuXHRcdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgY3VycmVudC52YWx1ZSk7XG5cdFx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgndHlwZScsIGRhdGEudHlwZSk7XG5cdFx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgnaWQnLCBjdXJJZCk7XG5cdFx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgnbmFtZScsIGN1cnJlbnQubmFtZSB8fCBkYXRhLm5hbWUpO1xuXHRcdFx0XHRcdFx0Ly8gSWYgbmFtZSBpcyBwcm92aWRlZCBvbiB0aGUgaW5kaXZpZHVhbCBjaGVja2JveCwgYWRkIGEgZGF0YS1zaW5nbGVcblx0XHRcdFx0XHRcdC8vIGF0dHJpYnV0ZSB3aGljaCBpbmRpY2F0ZXMgaXQgaXNuJ3QgcGFydCBvZiBhIGxpc3Qgb2YgY2hlY2tib3hlcyB3aXRoXG5cdFx0XHRcdFx0XHQvLyBzYW1lIG5hbWUuIFVzZWQgaW4gZ2V0SW5wdXREYXRhKClcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50Lm5hbWUpIHtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2luZ2xlJywgJ2RhdGEtc2luZ2xlJyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudC5jaGVja2VkKSB7XG5cdFx0XHRcdFx0XHRcdHN1Ym5vZGUuY2hlY2tlZCA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudC5kaXNhYmxlZCkge1xuXHRcdFx0XHRcdFx0XHRzdWJub2RlLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGxhYmVsID0gY3VyRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJykpO1xuXHRcdFx0XHRcdFx0bGFiZWwuYXBwZW5kQ2hpbGQoTW9yZWJpdHMuY3JlYXRlSHRtbChjdXJyZW50LmxhYmVsKSk7XG5cdFx0XHRcdFx0XHRsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGN1cklkKTtcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50LnRvb2x0aXApIHtcblx0XHRcdFx0XHRcdFx0TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQuZ2VuZXJhdGVUb29sdGlwKGxhYmVsLCBjdXJyZW50KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC8vIHN0eWxlcyBnbyBvbiB0aGUgbGFiZWwsIGRvZXNuJ3QgbWFrZSBzZW5zZSB0byBzdHlsZSBhIGNoZWNrYm94L3JhZGlvXG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudC5zdHlsZSkge1xuXHRcdFx0XHRcdFx0XHRsYWJlbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgY3VycmVudC5zdHlsZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRsZXQgZXZlbnQ7XG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudC5zdWJncm91cCkge1xuXHRcdFx0XHRcdFx0XHRsZXQgdG1wZ3JvdXAgPSBjdXJyZW50LnN1Ymdyb3VwO1xuXHRcdFx0XHRcdFx0XHR0bXBncm91cCA9IGdlbmVyYXRlQXJyYXkodG1wZ3JvdXApO1xuXHRcdFx0XHRcdFx0XHRjb25zdCBzdWJncm91cFJhdyA9IG5ldyBNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCh7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2RpdicsXG5cdFx0XHRcdFx0XHRcdFx0aWQ6IGAke2lkfV8ke2l9X3N1Ymdyb3VwYCxcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdGZvciAoY29uc3QgZWwgb2YgdG1wZ3JvdXApIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBuZXdFbCA9IHtcblx0XHRcdFx0XHRcdFx0XHRcdC4uLmVsLFxuXHRcdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdFx0bmV3RWwudHlwZSB8fD0gZGF0YS50eXBlO1xuXHRcdFx0XHRcdFx0XHRcdG5ld0VsLm5hbWUgPSBgJHtjdXJyZW50Lm5hbWUgfHwgZGF0YS5uYW1lfS4ke25ld0VsLm5hbWV9YDtcblx0XHRcdFx0XHRcdFx0XHRzdWJncm91cFJhdy5hcHBlbmQobmV3RWwpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHN1Ymdyb3VwID0gc3ViZ3JvdXBSYXcucmVuZGVyKGN1cklkKTtcblx0XHRcdFx0XHRcdFx0c3ViZ3JvdXAuY2xhc3NOYW1lID0gJ3F1aWNrZm9ybVN1Ymdyb3VwJztcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5zdWJncm91cCA9IHN1Ymdyb3VwO1xuXHRcdFx0XHRcdFx0XHRzdWJub2RlLnNob3duID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdGV2ZW50ID0gKGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0ZS50YXJnZXQucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChlLnRhcmdldC5zdWJncm91cCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoZS50YXJnZXQudHlwZSA9PT0gJ3JhZGlvJykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCB7bmFtZX0gPSBlLnRhcmdldDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKGUudGFyZ2V0LmZvcm0ubmFtZXNbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGUudGFyZ2V0LmZvcm0ubmFtZXNbbmFtZV0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGUudGFyZ2V0LmZvcm0ubmFtZXNbbmFtZV0uc3ViZ3JvdXBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGUudGFyZ2V0LmZvcm0ubmFtZXNbbmFtZV0gPSBlLnRhcmdldDtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0ZS50YXJnZXQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlLnRhcmdldC5zdWJncm91cCk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRzdWJub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50LCB0cnVlKTtcblx0XHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQuY2hlY2tlZCkge1xuXHRcdFx0XHRcdFx0XHRcdHN1Ym5vZGUucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChzdWJncm91cCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoZGF0YS50eXBlID09PSAncmFkaW8nKSB7XG5cdFx0XHRcdFx0XHRcdGV2ZW50ID0gKGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qge25hbWV9ID0gZS50YXJnZXQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoZS50YXJnZXQuZm9ybS5uYW1lc1tuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGUudGFyZ2V0LmZvcm0ubmFtZXNbbmFtZV0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlLnRhcmdldC5mb3JtLm5hbWVzW25hbWVdLnN1Ymdyb3VwXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRkZWxldGUgZS50YXJnZXQuZm9ybS5uYW1lc1tuYW1lXTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdHN1Ym5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQsIHRydWUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ly8gYWRkIHVzZXJzJyBldmVudCBsYXN0LCBzbyBpdCBjYW4gaW50ZXJhY3Qgd2l0aCB0aGUgc3ViZ3JvdXBcblx0XHRcdFx0XHRcdGlmIChkYXRhLmV2ZW50KSB7XG5cdFx0XHRcdFx0XHRcdHN1Ym5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZGF0YS5ldmVudCwgZmFsc2UpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChjdXJyZW50LmV2ZW50KSB7XG5cdFx0XHRcdFx0XHRcdHN1Ym5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY3VycmVudC5ldmVudCwgdHJ1ZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLnNoaWZ0Q2xpY2tTdXBwb3J0ICYmIGRhdGEudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuXHRcdFx0XHRcdE1vcmViaXRzLmNoZWNrYm94U2hpZnRDbGlja1N1cHBvcnQoTW9yZWJpdHMucXVpY2tGb3JtLmdldEVsZW1lbnRzKG5vZGUsIGRhdGEubmFtZSkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Ly8gaW5wdXQgaXMgYWN0dWFsbHkgYSB0ZXh0LXR5cGUsIHNvIG51bWJlciBoZXJlIGluaGVyaXRzIHRoZSBzYW1lIHN0dWZmXG5cdFx0XHRjYXNlICdudW1iZXInOlxuXHRcdFx0Y2FzZSAnaW5wdXQnOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdpZCcsIGBkaXZfJHtpZH1gKTtcblx0XHRcdFx0Ly8gQWRkIGhpZGRlbiBhdHRyXG5cdFx0XHRcdGlmIChkYXRhLmhpZGRlbikge1xuXHRcdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEubGFiZWwpIHtcblx0XHRcdFx0XHRsYWJlbCA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKSk7XG5cdFx0XHRcdFx0bGFiZWwuYXBwZW5kQ2hpbGQoTW9yZWJpdHMuY3JlYXRlSHRtbChkYXRhLmxhYmVsKSk7XG5cdFx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBkYXRhLmlkIHx8IGlkKTtcblx0XHRcdFx0XHQvLyBObyBtYXJnaW5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHN1Ym5vZGUgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpO1xuXHRcdFx0XHQvLyBBZGQgdmFsdWUgYW5kIHBsYWNlaG9sZGVyIGF0dHJzXG5cdFx0XHRcdGlmIChkYXRhLnZhbHVlKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZGF0YS52YWx1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEucGxhY2Vob2xkZXIpIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBkYXRhLnBsYWNlaG9sZGVyKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgnbmFtZScsIGRhdGEubmFtZSk7XG5cdFx0XHRcdGlmIChkYXRhLnR5cGUgPT09ICdpbnB1dCcpIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnbnVtYmVyJyk7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBhdHQgb2YgWydtaW4nLCAnbWF4JywgJ3N0ZXAnLCAnbGlzdCddKSB7XG5cdFx0XHRcdFx0XHRpZiAoZGF0YVthdHRdKSB7XG5cdFx0XHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKGF0dCwgZGF0YVthdHRdKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9yIChjb25zdCBhdHQgb2YgWyd2YWx1ZScsICdzaXplJywgJ3BsYWNlaG9sZGVyJywgJ21heGxlbmd0aCddKSB7XG5cdFx0XHRcdFx0aWYgKGRhdGFbYXR0XSkge1xuXHRcdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoYXR0LCBkYXRhW2F0dF0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IgKGNvbnN0IGF0dCBvZiBbJ2Rpc2FibGVkJywgJ3JlcXVpcmVkJywgJ3JlYWRvbmx5J10pIHtcblx0XHRcdFx0XHRpZiAoZGF0YVthdHRdKSB7XG5cdFx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZShhdHQsIGF0dCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmV2ZW50KSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGRhdGEuZXZlbnQsIGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjaGlsZENvbnRhaW5lciA9IHN1Ym5vZGU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnZHluaW5wdXQnOiB7XG5cdFx0XHRcdGNvbnN0IG1pbiA9IGRhdGEubWluIHx8IDE7XG5cdFx0XHRcdGNvbnN0IG1heCA9IGRhdGEubWF4IHx8IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHRsYWJlbCA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKSk7XG5cdFx0XHRcdGxhYmVsLmFwcGVuZENoaWxkKE1vcmViaXRzLmNyZWF0ZUh0bWwoZGF0YS5sYWJlbCkpO1xuXHRcdFx0XHRjb25zdCBsaXN0Tm9kZSA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuXHRcdFx0XHRjb25zdCBtb3JlID0gdGhpcy5jb21wdXRlKHtcblx0XHRcdFx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHRcdFx0XHRsYWJlbDogJ+abtOWkmicsXG5cdFx0XHRcdFx0ZGlzYWJsZWQ6IG1pbiA+PSBtYXgsXG5cdFx0XHRcdFx0ZXZlbnQ6IChlKSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCBuZXdOb2RlID0gbmV3IE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50KGUudGFyZ2V0LnN1Ymxpc3QpO1xuXHRcdFx0XHRcdFx0ZS50YXJnZXQuYXJlYS5hcHBlbmRDaGlsZChuZXdOb2RlLnJlbmRlcigpKTtcblx0XHRcdFx0XHRcdGlmICgrK2UudGFyZ2V0LmNvdW50ZXIgPj0gZS50YXJnZXQubWF4KSB7XG5cdFx0XHRcdFx0XHRcdGUudGFyZ2V0LmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdG5vZGUuYXBwZW5kQ2hpbGQobW9yZVswXSk7XG5cdFx0XHRcdGNvbnN0IFssIG1vcmVCdXR0b25dID0gbW9yZTtcblx0XHRcdFx0Y29uc3Qgc3VibGlzdCA9IHtcblx0XHRcdFx0XHR0eXBlOiAnX2R5bmlucHV0X2VsZW1lbnQnLFxuXHRcdFx0XHRcdGxhYmVsOiBkYXRhLnN1YmxhYmVsIHx8IGRhdGEubGFiZWwsXG5cdFx0XHRcdFx0bmFtZTogZGF0YS5uYW1lLFxuXHRcdFx0XHRcdHZhbHVlOiBkYXRhLnZhbHVlLFxuXHRcdFx0XHRcdHNpemU6IGRhdGEuc2l6ZSxcblx0XHRcdFx0XHRyZW1vdmU6IGZhbHNlLFxuXHRcdFx0XHRcdG1heGxlbmd0aDogZGF0YS5tYXhsZW5ndGgsXG5cdFx0XHRcdFx0ZXZlbnQ6IGRhdGEuZXZlbnQsXG5cdFx0XHRcdH07XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBtaW47ICsraSkge1xuXHRcdFx0XHRcdGNvbnN0IGVsZW0gPSBuZXcgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQoc3VibGlzdCk7XG5cdFx0XHRcdFx0bGlzdE5vZGUuYXBwZW5kQ2hpbGQoZWxlbS5yZW5kZXIoKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3VibGlzdC5yZW1vdmUgPSB0cnVlO1xuXHRcdFx0XHRzdWJsaXN0Lm1vcmVidXR0b24gPSBtb3JlQnV0dG9uO1xuXHRcdFx0XHRzdWJsaXN0Lmxpc3Rub2RlID0gbGlzdE5vZGU7XG5cdFx0XHRcdG1vcmVCdXR0b24uc3VibGlzdCA9IHN1Ymxpc3Q7XG5cdFx0XHRcdG1vcmVCdXR0b24uYXJlYSA9IGxpc3ROb2RlO1xuXHRcdFx0XHRtb3JlQnV0dG9uLm1heCA9IG1heCAtIG1pbjtcblx0XHRcdFx0bW9yZUJ1dHRvbi5jb3VudGVyID0gMDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRjYXNlICdfZHluaW5wdXRfZWxlbWVudCc6XG5cdFx0XHRcdC8vIFByaXZhdGUsIHNpbWlsYXIgdG8gbm9ybWFsIGlucHV0XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0aWYgKGRhdGEubGFiZWwpIHtcblx0XHRcdFx0XHRsYWJlbCA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKSk7XG5cdFx0XHRcdFx0bGFiZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZGF0YS5sYWJlbCkpO1xuXHRcdFx0XHRcdGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgaWQpO1xuXHRcdFx0XHRcdC8vIE5vIG1hcmdpblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0c3Vibm9kZSA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSk7XG5cdFx0XHRcdGlmIChkYXRhLnZhbHVlKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZGF0YS52YWx1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBkYXRhLm5hbWUpO1xuXHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG5cdFx0XHRcdGlmIChkYXRhLnNpemUpIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgnc2l6ZScsIGRhdGEuc2l6ZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEubWF4bGVuZ3RoKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsIGRhdGEubWF4bGVuZ3RoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5ldmVudCkge1xuXHRcdFx0XHRcdHN1Ym5vZGUuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBkYXRhLmV2ZW50LCBmYWxzZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEucmVtb3ZlKSB7XG5cdFx0XHRcdFx0Y29uc3QgcmVtb3ZlID0gdGhpcy5jb21wdXRlKHtcblx0XHRcdFx0XHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdFx0XHRcdFx0bGFiZWw6ICfnp7vpmaQnLFxuXHRcdFx0XHRcdFx0ZXZlbnQ6IChlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGxpc3QgPSBlLnRhcmdldC5saXN0bm9kZTtcblx0XHRcdFx0XHRcdFx0Y29uc3Qgbm9kZV8gPSBlLnRhcmdldC5pbnB1dG5vZGU7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IG1vcmUgPSBlLnRhcmdldC5tb3JlYnV0dG9uO1xuXHRcdFx0XHRcdFx0XHRsaXN0LnJlbW92ZUNoaWxkKG5vZGVfKTtcblx0XHRcdFx0XHRcdFx0LS1tb3JlLmNvdW50ZXI7XG5cdFx0XHRcdFx0XHRcdG1vcmUucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuXHRcdFx0XHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRub2RlLmFwcGVuZENoaWxkKHJlbW92ZVswXSk7XG5cdFx0XHRcdFx0Y29uc3QgWywgcmVtb3ZlQnV0dG9uXSA9IHJlbW92ZTtcblx0XHRcdFx0XHRyZW1vdmVCdXR0b24uaW5wdXRub2RlID0gbm9kZTtcblx0XHRcdFx0XHRyZW1vdmVCdXR0b24ubGlzdG5vZGUgPSBkYXRhLmxpc3Rub2RlO1xuXHRcdFx0XHRcdHJlbW92ZUJ1dHRvbi5tb3JlYnV0dG9uID0gZGF0YS5tb3JlYnV0dG9uO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnaGlkZGVuJzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2hpZGRlbicpO1xuXHRcdFx0XHRub2RlLnZhbHVlcyA9IGRhdGEudmFsdWU7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGRhdGEudmFsdWUpO1xuXHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnbmFtZScsIGRhdGEubmFtZSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnaGVhZGVyJzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG5cdFx0XHRcdG5vZGUuYXBwZW5kQ2hpbGQoTW9yZWJpdHMuY3JlYXRlSHRtbChkYXRhLmxhYmVsKSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnZGl2Jzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHRpZiAoZGF0YS5uYW1lKSB7XG5cdFx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBkYXRhLm5hbWUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmxhYmVsKSB7XG5cdFx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdFx0XHRcdHJlc3VsdC5jbGFzc05hbWUgPSAncXVpY2tmb3JtRGVzY3JpcHRpb24nO1xuXHRcdFx0XHRcdHJlc3VsdC5hcHBlbmRDaGlsZChNb3JlYml0cy5jcmVhdGVIdG1sKGRhdGEubGFiZWwpKTtcblx0XHRcdFx0XHRub2RlLmFwcGVuZENoaWxkKHJlc3VsdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdzdWJtaXQnOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdFx0XHRjaGlsZENvbnRhaW5lciA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSk7XG5cdFx0XHRcdGNoaWxkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcblx0XHRcdFx0aWYgKGRhdGEubGFiZWwpIHtcblx0XHRcdFx0XHRjaGlsZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZGF0YS5sYWJlbCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2hpbGRDb250YWluZXIuc2V0QXR0cmlidXRlKCduYW1lJywgZGF0YS5uYW1lIHx8ICdzdWJtaXQnKTtcblx0XHRcdFx0aWYgKGRhdGEuZGlzYWJsZWQpIHtcblx0XHRcdFx0XHRjaGlsZENvbnRhaW5lci5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdidXR0b24nOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdFx0XHRjaGlsZENvbnRhaW5lciA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSk7XG5cdFx0XHRcdGNoaWxkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcblx0XHRcdFx0aWYgKGRhdGEubGFiZWwpIHtcblx0XHRcdFx0XHRjaGlsZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZGF0YS5sYWJlbCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2hpbGRDb250YWluZXIuc2V0QXR0cmlidXRlKCduYW1lJywgZGF0YS5uYW1lKTtcblx0XHRcdFx0aWYgKGRhdGEuZGlzYWJsZWQpIHtcblx0XHRcdFx0XHRjaGlsZENvbnRhaW5lci5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEuZXZlbnQpIHtcblx0XHRcdFx0XHRjaGlsZENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRhdGEuZXZlbnQsIGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3RleHRhcmVhJzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnaWQnLCBgZGl2XyR7aWR9YCk7XG5cdFx0XHRcdC8vIEFkZCBoaWRkZW4gYXR0clxuXHRcdFx0XHRpZiAoZGF0YS5oaWRkZW4pIHtcblx0XHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmxhYmVsKSB7XG5cdFx0XHRcdFx0bGFiZWwgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1JykpO1xuXHRcdFx0XHRcdGNvbnN0IGxhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cdFx0XHRcdFx0bGFiZWxFbGVtZW50LmFwcGVuZENoaWxkKE1vcmViaXRzLmNyZWF0ZUh0bWwoZGF0YS5sYWJlbCkpO1xuXHRcdFx0XHRcdGxhYmVsRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGRhdGEuaWQgfHwgaWQpO1xuXHRcdFx0XHRcdGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsRWxlbWVudCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3Vibm9kZSA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKSk7XG5cdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCduYW1lJywgZGF0YS5uYW1lKTtcblx0XHRcdFx0aWYgKGRhdGEuY29scykge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCdjb2xzJywgZGF0YS5jb2xzKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5yb3dzKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCBkYXRhLnJvd3MpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmRpc2FibGVkKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEucmVxdWlyZWQpIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAncmVxdWlyZWQnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5yZWFkb25seSkge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICdyZWFkb25seScpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLnZhbHVlKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS52YWx1ZSA9IGRhdGEudmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gQWRkIHBsYWNlaG9sZGVyIGF0dHJcblx0XHRcdFx0aWYgKGRhdGEucGxhY2Vob2xkZXIpIHtcblx0XHRcdFx0XHRzdWJub2RlLnBsYWNlaG9sZGVyID0gZGF0YS5wbGFjZWhvbGRlcjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjaGlsZENvbnRhaW5lciA9IHN1Ym5vZGU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBNb3JlYml0cy5xdWlja0Zvcm06IHVua25vd24gZWxlbWVudCB0eXBlICR7ZGF0YS50eXBlLnRvU3RyaW5nKCl9YCk7XG5cdFx0fVxuXHRcdGNoaWxkQ29udGFpbmVyIHx8PSBub2RlO1xuXHRcdGlmIChkYXRhLnRvb2x0aXApIHtcblx0XHRcdE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50LmdlbmVyYXRlVG9vbHRpcChsYWJlbCB8fCBub2RlLCBkYXRhKTtcblx0XHR9XG5cdFx0aWYgKGRhdGEuZXh0cmEpIHtcblx0XHRcdGNoaWxkQ29udGFpbmVyLmV4dHJhID0gZGF0YS5leHRyYTtcblx0XHR9XG5cdFx0aWYgKGRhdGEuJGRhdGEpIHtcblx0XHRcdCQoY2hpbGRDb250YWluZXIpLmRhdGEoZGF0YS4kZGF0YSk7XG5cdFx0fVxuXHRcdGlmIChkYXRhLnN0eWxlKSB7XG5cdFx0XHRjaGlsZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgZGF0YS5zdHlsZSk7XG5cdFx0fVxuXHRcdGlmIChkYXRhLmNsYXNzTmFtZSkge1xuXHRcdFx0Y2hpbGRDb250YWluZXIuY2xhc3NOYW1lID0gY2hpbGRDb250YWluZXIuY2xhc3NOYW1lXG5cdFx0XHRcdD8gYCR7Y2hpbGRDb250YWluZXIuY2xhc3NOYW1lfSAke2RhdGEuY2xhc3NOYW1lfWBcblx0XHRcdFx0OiBkYXRhLmNsYXNzTmFtZTtcblx0XHR9XG5cdFx0Y2hpbGRDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsIGRhdGEuaWQgfHwgaWQpO1xuXHRcdHJldHVybiBbbm9kZSwgY2hpbGRDb250YWluZXJdO1xuXHR9O1xuXHQvKipcblx0ICogQ3JlYXRlIGEgalF1ZXJ5IFVJLWJhc2VkIHRvb2x0aXAuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudFxuXHQgKiBAcmVxdWlyZXMganF1ZXJ5LnVpXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG5vZGUgLSBUaGUgSFRNTCBlbGVtZW50IGJlc2lkZSB3aGljaCBhIHRvb2x0aXAgaXMgdG8gYmUgZ2VuZXJhdGVkLlxuXHQgKiBAcGFyYW0ge09iamVjdH0gZGF0YSAtIFRvb2x0aXAtcmVsYXRlZCBjb25maWd1cmF0aW9uIGRhdGEuXG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudC5nZW5lcmF0ZVRvb2x0aXAgPSAobm9kZSwgZGF0YSkgPT4ge1xuXHRcdGNvbnN0IHRvb2x0aXBCdXR0b24gPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSk7XG5cdFx0dG9vbHRpcEJ1dHRvbi5jbGFzc05hbWUgPSAnbW9yZWJpdHMtdG9vbHRpcEJ1dHRvbic7XG5cdFx0dG9vbHRpcEJ1dHRvbi50aXRsZSA9IGRhdGEudG9vbHRpcDsgLy8gUHJvdmlkZXMgdGhlIGNvbnRlbnQgZm9yIGpRdWVyeSBVSVxuXHRcdHRvb2x0aXBCdXR0b24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJz8nKSk7XG5cdFx0JCh0b29sdGlwQnV0dG9uKS50b29sdGlwKHtcblx0XHRcdHBvc2l0aW9uOiB7XG5cdFx0XHRcdG15OiAnbGVmdCB0b3AnLFxuXHRcdFx0XHRhdDogJ2NlbnRlciBib3R0b20nLFxuXHRcdFx0XHRjb2xsaXNpb246ICdmbGlwZml0Jyxcblx0XHRcdH0sXG5cdFx0XHQvLyBEZXByZWNhdGVkIGluIFVJIDEuMTIsIGJ1dCBNVyBzdHVjayBvbiAxLjkuMiBpbmRlZmluaXRlbHk7IHNlZSAjMzk4IGFuZCBUNzEzODZcblx0XHRcdHRvb2x0aXBDbGFzczogJ21vcmViaXRzLXVpLXRvb2x0aXAnLFxuXHRcdH0pO1xuXHR9O1xuXHQvLyBTb21lIHV0aWxpdHkgbWV0aG9kcyBmb3IgbWFuaXB1bGF0aW5nIHF1aWNrRm9ybXMgYWZ0ZXIgdGhlaXIgY3JlYXRpb246XG5cdC8vIChOb25lIG9mIHRoZXNlIHdvcmsgZm9yIFwiZHluaW5wdXRcIiB0eXBlIGZpZWxkcyBhdCBwcmVzZW50KVxuXHQvKipcblx0ICogUmV0dXJucyBhbiBvYmplY3QgY29udGFpbmluZyBhbGwgZmlsbGVkIGZvcm0gZGF0YSBlbnRlcmVkIGJ5IHRoZSB1c2VyLCB3aXRoIHRoZSBvYmplY3Rcblx0ICoga2V5cyBiZWluZyB0aGUgZm9ybSBlbGVtZW50IG5hbWVzLiBEaXNhYmxlZCBmaWVsZHMgd2lsbCBiZSBpZ25vcmVkLCBidXQgbm90IGhpZGRlbiBmaWVsZHMuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQHBhcmFtIHtIVE1MRm9ybUVsZW1lbnR9IGZvcm1cblx0ICogQHJldHVybnMge09iamVjdH0gV2l0aCBmaWVsZCBuYW1lcyBhcyBrZXlzLCBpbnB1dCBkYXRhIGFzIHZhbHVlcy5cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5nZXRJbnB1dERhdGEgPSAoZm9ybSkgPT4ge1xuXHRcdGNvbnN0IHJlc3VsdCA9IHt9O1xuXHRcdGZvciAoY29uc3QgZmllbGQgb2YgZm9ybS5lbGVtZW50cykge1xuXHRcdFx0aWYgKGZpZWxkLmRpc2FibGVkIHx8ICFmaWVsZC5uYW1lIHx8ICFmaWVsZC50eXBlIHx8IGZpZWxkLnR5cGUgPT09ICdzdWJtaXQnIHx8IGZpZWxkLnR5cGUgPT09ICdidXR0b24nKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0Ly8gRm9yIGVsZW1lbnRzIGluIHN1Ymdyb3VwcywgcXVpY2tmb3JtIHByZXBlbmRzIGVsZW1lbnQgbmFtZXMgd2l0aFxuXHRcdFx0Ly8gbmFtZSBvZiB0aGUgcGFyZW50IGdyb3VwIGZvbGxvd2VkIGJ5IGEgcGVyaW9kLCBnZXQgcmlkIG9mIHRoYXQuXG5cdFx0XHRjb25zdCBmaWVsZE5hbWVOb3JtID0gZmllbGQubmFtZS5zbGljZShmaWVsZC5uYW1lLmluZGV4T2YoJy4nKSArIDEpO1xuXHRcdFx0c3dpdGNoIChmaWVsZC50eXBlKSB7XG5cdFx0XHRcdGNhc2UgJ3JhZGlvJzpcblx0XHRcdFx0XHRpZiAoZmllbGQuY2hlY2tlZCkge1xuXHRcdFx0XHRcdFx0cmVzdWx0W2ZpZWxkTmFtZU5vcm1dID0gZmllbGQudmFsdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdjaGVja2JveCc6XG5cdFx0XHRcdFx0aWYgKGZpZWxkLmRhdGFzZXQuc2luZ2xlKSB7XG5cdFx0XHRcdFx0XHRyZXN1bHRbZmllbGROYW1lTm9ybV0gPSBmaWVsZC5jaGVja2VkOyAvLyBib29sZWFuXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJlc3VsdFtmaWVsZE5hbWVOb3JtXSB8fD0gW107XG5cdFx0XHRcdFx0XHRpZiAoZmllbGQuY2hlY2tlZCkge1xuXHRcdFx0XHRcdFx0XHRyZXN1bHRbZmllbGROYW1lTm9ybV1bcmVzdWx0W2ZpZWxkTmFtZU5vcm1dLmxlbmd0aF0gPSBmaWVsZC52YWx1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3NlbGVjdC1tdWx0aXBsZSc6XG5cdFx0XHRcdFx0cmVzdWx0W2ZpZWxkTmFtZU5vcm1dID0gJChmaWVsZCkudmFsKCk7IC8vIGZpZWxkLnZhbHVlIGRvZXNuJ3Qgd29ya1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICd0ZXh0JzogLy8gZmFsbHMgdGhyb3VnaFxuXHRcdFx0XHRjYXNlICd0ZXh0YXJlYSc6XG5cdFx0XHRcdFx0cmVzdWx0W2ZpZWxkTmFtZU5vcm1dID0gZmllbGQudmFsdWUudHJpbSgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdC8vIGNvdWxkIGJlIHNlbGVjdC1vbmUsIGRhdGUsIG51bWJlciwgZW1haWwsIGV0Y1xuXHRcdFx0XHRcdGlmIChmaWVsZC52YWx1ZSkge1xuXHRcdFx0XHRcdFx0cmVzdWx0W2ZpZWxkTmFtZU5vcm1dID0gZmllbGQudmFsdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXHQvKipcblx0ICogUmV0dXJucyBhbGwgZm9ybSBlbGVtZW50cyB3aXRoIGEgZ2l2ZW4gZmllbGQgbmFtZSBvciBJRC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0ge0hUTUxGb3JtRWxlbWVudH0gZm9ybVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZmllbGROYW1lIC0gVGhlIG5hbWUgb3IgaWQgb2YgdGhlIGZpZWxkcy5cblx0ICogQHJldHVybnMge0hUTUxFbGVtZW50W119IC0gQXJyYXkgb2YgbWF0Y2hpbmcgZm9ybSBlbGVtZW50cy5cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5nZXRFbGVtZW50cyA9IChmb3JtLCBmaWVsZE5hbWUpID0+IHtcblx0XHRjb25zdCAkZm9ybSA9ICQoZm9ybSk7XG5cdFx0ZmllbGROYW1lID0gJC5lc2NhcGVTZWxlY3RvcihmaWVsZE5hbWUpOyAvLyBzYW5pdGl6ZSBpbnB1dFxuXHRcdGxldCAkZWxlbWVudHMgPSAkZm9ybS5maW5kKGBbbmFtZT1cIiR7ZmllbGROYW1lfVwiXWApO1xuXHRcdGlmICgkZWxlbWVudHMubGVuZ3RoID4gMCkge1xuXHRcdFx0cmV0dXJuICRlbGVtZW50cy50b0FycmF5KCk7XG5cdFx0fVxuXHRcdCRlbGVtZW50cyA9ICRmb3JtLmZpbmQoYCMke2ZpZWxkTmFtZX1gKTtcblx0XHRyZXR1cm4gJGVsZW1lbnRzLnRvQXJyYXkoKTtcblx0fTtcblx0LyoqXG5cdCAqIFNlYXJjaGVzIHRoZSBhcnJheSBvZiBlbGVtZW50cyBmb3IgYSBjaGVja2JveCBvciByYWRpbyBidXR0b24gd2l0aCBhIGNlcnRhaW5cblx0ICogYHZhbHVlYCBhdHRyaWJ1dGUsIGFuZCByZXR1cm5zIHRoZSBmaXJzdCBzdWNoIGVsZW1lbnQuIFJldHVybnMgbnVsbCBpZiBub3QgZm91bmQuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50W119IGVsZW1lbnRBcnJheSAtIEFycmF5IG9mIGNoZWNrYm94IG9yIHJhZGlvIGVsZW1lbnRzLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBWYWx1ZSB0byBzZWFyY2ggZm9yLlxuXHQgKiBAcmV0dXJucyB7SFRNTElucHV0RWxlbWVudH1cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5nZXRDaGVja2JveE9yUmFkaW8gPSAoZWxlbWVudEFycmF5LCB2YWx1ZSkgPT4ge1xuXHRcdGNvbnN0IGZvdW5kID0gZWxlbWVudEFycmF5LmZpbHRlcigoZWxlbWVudCkgPT4ge1xuXHRcdFx0cmV0dXJuIGVsZW1lbnQudmFsdWUgPT09IHZhbHVlO1xuXHRcdH0pO1xuXHRcdGlmIChmb3VuZC5sZW5ndGggPiAwKSB7XG5cdFx0XHRyZXR1cm4gZm91bmRbMF07XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9O1xuXHQvKipcblx0ICogUmV0dXJucyB0aGUgJmx0O2Rpdj4gY29udGFpbmluZyB0aGUgZm9ybSBlbGVtZW50LCBvciB0aGUgZm9ybSBlbGVtZW50IGl0c2VsZlxuXHQgKiBNYXkgbm90IHdvcmsgYXMgZXhwZWN0ZWQgb24gY2hlY2tib3hlcyBvciByYWRpb3MuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuXHQgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uZ2V0RWxlbWVudENvbnRhaW5lciA9IChlbGVtZW50KSA9PiB7XG5cdFx0Ly8gZm9yIGRpdnMsIGhlYWRpbmdzIGFuZCBmaWVsZHNldHMsIHRoZSBjb250YWluZXIgaXMgdGhlIGVsZW1lbnQgaXRzZWxmXG5cdFx0aWYgKFxuXHRcdFx0ZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxGaWVsZFNldEVsZW1lbnQgfHxcblx0XHRcdGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRGl2RWxlbWVudCB8fFxuXHRcdFx0ZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxIZWFkaW5nRWxlbWVudFxuXHRcdCkge1xuXHRcdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdFx0fVxuXHRcdC8vIGZvciBvdGhlcnMsIGp1c3QgcmV0dXJuIHRoZSBwYXJlbnQgbm9kZVxuXHRcdHJldHVybiBlbGVtZW50LnBhcmVudE5vZGU7XG5cdH07XG5cdC8qKlxuXHQgKiBHZXRzIHRoZSBIVE1MIGVsZW1lbnQgdGhhdCBjb250YWlucyB0aGUgbGFiZWwgb2YgdGhlIGdpdmVuIGZvcm0gZWxlbWVudFxuXHQgKiAobWFpbmx5IGZvciBpbnRlcm5hbCB1c2UpLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7KEhUTUxFbGVtZW50fE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50KX0gZWxlbWVudFxuXHQgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uZ2V0RWxlbWVudExhYmVsT2JqZWN0ID0gKGVsZW1lbnQpID0+IHtcblx0XHQvLyBmb3IgYnV0dG9ucywgZGl2cyBhbmQgaGVhZGVycywgdGhlIGxhYmVsIGlzIG9uIHRoZSBlbGVtZW50IGl0c2VsZlxuXHRcdGlmIChcblx0XHRcdGVsZW1lbnQudHlwZSA9PT0gJ2J1dHRvbicgfHxcblx0XHRcdGVsZW1lbnQudHlwZSA9PT0gJ3N1Ym1pdCcgfHxcblx0XHRcdGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRGl2RWxlbWVudCB8fFxuXHRcdFx0ZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxIZWFkaW5nRWxlbWVudFxuXHRcdCkge1xuXHRcdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdFx0XHQvLyBmb3IgZmllbGRzZXRzLCB0aGUgbGFiZWwgaXMgdGhlIGNoaWxkIDxsZWdlbmQ+IGVsZW1lbnRcblx0XHR9IGVsc2UgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRmllbGRTZXRFbGVtZW50KSB7XG5cdFx0XHRyZXR1cm4gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdsZWdlbmQnKTtcblx0XHRcdC8vIGZvciB0ZXh0YXJlYXMsIHRoZSBsYWJlbCBpcyB0aGUgc2libGluZyA8aDU+IGVsZW1lbnRcblx0XHR9IGVsc2UgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MVGV4dEFyZWFFbGVtZW50KSB7XG5cdFx0XHRyZXR1cm4gZWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2g1Jyk7XG5cdFx0fVxuXHRcdC8vIGZvciBvdGhlcnMsIHRoZSBsYWJlbCBpcyB0aGUgc2libGluZyA8bGFiZWw+IGVsZW1lbnRcblx0XHRyZXR1cm4gZWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsJyk7XG5cdH07XG5cdC8qKlxuXHQgKiBHZXRzIHRoZSBsYWJlbCB0ZXh0IG9mIHRoZSBlbGVtZW50LlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7KEhUTUxFbGVtZW50fE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50KX0gZWxlbWVudFxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmdldEVsZW1lbnRMYWJlbCA9IChlbGVtZW50KSA9PiB7XG5cdFx0Y29uc3QgbGFiZWxFbGVtZW50ID0gTW9yZWJpdHMucXVpY2tGb3JtLmdldEVsZW1lbnRMYWJlbE9iamVjdChlbGVtZW50KTtcblx0XHRpZiAoIWxhYmVsRWxlbWVudCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHJldHVybiBsYWJlbEVsZW1lbnQuZmlyc3RDaGlsZC50ZXh0Q29udGVudDtcblx0fTtcblx0LyoqXG5cdCAqIFNldHMgdGhlIGxhYmVsIG9mIHRoZSBlbGVtZW50IHRvIHRoZSBnaXZlbiB0ZXh0LlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7KEhUTUxFbGVtZW50fE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50KX0gZWxlbWVudFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbGFiZWxUZXh0XG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHN1Y2NlZWRlZCwgZmFsc2UgaWYgdGhlIGxhYmVsIGVsZW1lbnQgaXMgdW5hdmFpbGFibGUuXG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uc2V0RWxlbWVudExhYmVsID0gKGVsZW1lbnQsIGxhYmVsVGV4dCkgPT4ge1xuXHRcdGNvbnN0IGxhYmVsRWxlbWVudCA9IE1vcmViaXRzLnF1aWNrRm9ybS5nZXRFbGVtZW50TGFiZWxPYmplY3QoZWxlbWVudCk7XG5cdFx0aWYgKCFsYWJlbEVsZW1lbnQpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0bGFiZWxFbGVtZW50LmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPSBsYWJlbFRleHQ7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH07XG5cdC8qKlxuXHQgKiBTdG9yZXMgdGhlIGVsZW1lbnQncyBjdXJyZW50IGxhYmVsLCBhbmQgdGVtcG9yYXJpbHkgc2V0cyB0aGUgbGFiZWwgdG8gdGhlIGdpdmVuIHRleHQuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQHBhcmFtIHsoSFRNTEVsZW1lbnR8TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQpfSBlbGVtZW50XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wb3JhcnlMYWJlbFRleHRcblx0ICogQHJldHVybnMge2Jvb2xlYW59IGB0cnVlYCBpZiBzdWNjZWVkZWQsIGBmYWxzZWAgaWYgdGhlIGxhYmVsIGVsZW1lbnQgaXMgdW5hdmFpbGFibGUuXG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0ub3ZlcnJpZGVFbGVtZW50TGFiZWwgPSAoZWxlbWVudCwgdGVtcG9yYXJ5TGFiZWxUZXh0KSA9PiB7XG5cdFx0aWYgKCFlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1vbGRsYWJlbCcpKSB7XG5cdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1vbGRsYWJlbCcsIE1vcmViaXRzLnF1aWNrRm9ybS5nZXRFbGVtZW50TGFiZWwoZWxlbWVudCkpO1xuXHRcdH1cblx0XHRyZXR1cm4gTW9yZWJpdHMucXVpY2tGb3JtLnNldEVsZW1lbnRMYWJlbChlbGVtZW50LCB0ZW1wb3JhcnlMYWJlbFRleHQpO1xuXHR9O1xuXHQvKipcblx0ICogUmVzdG9yZXMgdGhlIGxhYmVsIHN0b3JlZCBieSBvdmVycmlkZUVsZW1lbnRMYWJlbC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0geyhIVE1MRWxlbWVudHxNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCl9IGVsZW1lbnRcblx0ICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgc3VjY2VlZGVkLCBmYWxzZSBpZiB0aGUgbGFiZWwgZWxlbWVudCBpcyB1bmF2YWlsYWJsZS5cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5yZXNldEVsZW1lbnRMYWJlbCA9IChlbGVtZW50KSA9PiB7XG5cdFx0aWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLW9sZGxhYmVsJykpIHtcblx0XHRcdHJldHVybiBNb3JlYml0cy5xdWlja0Zvcm0uc2V0RWxlbWVudExhYmVsKGVsZW1lbnQsIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW9sZGxhYmVsJykpO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fTtcblx0LyoqXG5cdCAqIFNob3dzIG9yIGhpZGVzIGEgZm9ybSBlbGVtZW50IHBsdXMgaXRzIGxhYmVsIGFuZCB0b29sdGlwLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7KEhUTUxFbGVtZW50fGpRdWVyeXxzdHJpbmcpfSBlbGVtZW50IC0gSFRNTC9qUXVlcnkgZWxlbWVudCwgb3IgalF1ZXJ5IHNlbGVjdG9yIHN0cmluZy5cblx0ICogQHBhcmFtIHtib29sZWFufSBbdmlzaWJpbGl0eV0gLSBTa2lwIHRoaXMgdG8gdG9nZ2xlIHZpc2liaWxpdHkuXG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uc2V0RWxlbWVudFZpc2liaWxpdHkgPSAoZWxlbWVudCwgdmlzaWJpbGl0eSkgPT4ge1xuXHRcdCQoZWxlbWVudCkudG9nZ2xlKHZpc2liaWxpdHkpO1xuXHR9O1xuXHQvKipcblx0ICogU2hvd3Mgb3IgaGlkZXMgdGhlIHF1ZXN0aW9uIG1hcmsgaWNvbiAod2hpY2ggZGlzcGxheXMgdGhlIHRvb2x0aXApIG5leHQgdG8gYSBmb3JtIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQHBhcmFtIHsoSFRNTEVsZW1lbnR8alF1ZXJ5KX0gZWxlbWVudFxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFt2aXNpYmlsaXR5XSAtIFNraXAgdGhpcyB0byB0b2dnbGUgdmlzaWJpbGl0eS5cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5zZXRFbGVtZW50VG9vbHRpcFZpc2liaWxpdHkgPSAoZWxlbWVudCwgdmlzaWJpbGl0eSkgPT4ge1xuXHRcdCQoTW9yZWJpdHMucXVpY2tGb3JtLmdldEVsZW1lbnRDb250YWluZXIoZWxlbWVudCkpLmZpbmQoJy5tb3JlYml0cy10b29sdGlwQnV0dG9uJykudG9nZ2xlKHZpc2liaWxpdHkpO1xuXHR9O1xuXHQvKipcblx0ICogQGV4dGVybmFsIEhUTUxGb3JtRWxlbWVudFxuXHQgKi9cblx0LyoqXG5cdCAqIEdldCBjaGVja2VkIGl0ZW1zIGluIHRoZSBmb3JtLlxuXHQgKlxuXHQgKiBAZnVuY3Rpb24gZXh0ZXJuYWw6SFRNTEZvcm1FbGVtZW50LmdldENoZWNrZWRcblx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBGaW5kIGNoZWNrZWQgcHJvcGVydHkgb2YgZWxlbWVudHMgKGkuZS4gYSBjaGVja2JveFxuXHQgKiBvciBhIHJhZGlvYnV0dG9uKSB3aXRoIHRoZSBnaXZlbiBuYW1lLCBvciBzZWxlY3Qgb3B0aW9ucyB0aGF0IGhhdmUgc2VsZWN0ZWRcblx0ICogc2V0IHRvIHRydWUgKGRvbid0IHRyeSB0byBtaXggc2VsZWN0cyB3aXRoIHJhZGlvL2NoZWNrYm94ZXMpLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW3R5cGVdIC0gT3B0aW9uYWxseSBzcGVjaWZ5IGVpdGhlciByYWRpbyBvciBjaGVja2JveCAoZm9yXG5cdCAqIHRoZSBldmVudCB0aGF0IGJvdGggY2hlY2tib3hlcyBhbmQgcmFkaW9idXR0b25zIGhhdmUgdGhlIHNhbWUgbmFtZSkuXG5cdCAqIEByZXR1cm5zIHtzdHJpbmdbXX0gLSBDb250YWlucyB0aGUgdmFsdWVzIG9mIGVsZW1lbnRzIHdpdGggdGhlIGdpdmVuIG5hbWVcblx0ICogY2hlY2tlZCBwcm9wZXJ0eSBzZXQgdG8gdHJ1ZS5cblx0ICovXG5cdEhUTUxGb3JtRWxlbWVudC5wcm90b3R5cGUuZ2V0Q2hlY2tlZCA9IGZ1bmN0aW9uIChuYW1lLCB0eXBlKSB7XG5cdFx0Y29uc3QgZWxlbWVudHMgPSB0aGlzLmVsZW1lbnRzW25hbWVdO1xuXHRcdGlmICghZWxlbWVudHMpIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cdFx0Y29uc3QgcmV0dXJuQXJyYXkgPSBbXTtcblx0XHRsZXQgaTtcblx0XHRpZiAoZWxlbWVudHMgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCkge1xuXHRcdFx0Y29uc3Qge29wdGlvbnN9ID0gZWxlbWVudHM7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRpZiAob3B0aW9uc1tpXS5zZWxlY3RlZCkge1xuXHRcdFx0XHRcdGlmIChvcHRpb25zW2ldLnZhbHVlcykge1xuXHRcdFx0XHRcdFx0cmV0dXJuQXJyYXlbcmV0dXJuQXJyYXkubGVuZ3RoXSA9IG9wdGlvbnNbaV0udmFsdWVzO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm5BcnJheVtyZXR1cm5BcnJheS5sZW5ndGhdID0gb3B0aW9uc1tpXS52YWx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGVsZW1lbnRzIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuXHRcdFx0aWYgKHR5cGUgJiYgZWxlbWVudHMudHlwZSAhPT0gdHlwZSkge1xuXHRcdFx0XHRyZXR1cm4gW107XG5cdFx0XHR9IGVsc2UgaWYgKGVsZW1lbnRzLmNoZWNrZWQpIHtcblx0XHRcdFx0cmV0dXJuIFtlbGVtZW50cy52YWx1ZV07XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRpZiAoZWxlbWVudHNbaV0uY2hlY2tlZCkge1xuXHRcdFx0XHRcdGlmICh0eXBlICYmIGVsZW1lbnRzW2ldLnR5cGUgIT09IHR5cGUpIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoZWxlbWVudHNbaV0udmFsdWVzKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm5BcnJheVtyZXR1cm5BcnJheS5sZW5ndGhdID0gZWxlbWVudHNbaV0udmFsdWVzO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm5BcnJheVtyZXR1cm5BcnJheS5sZW5ndGhdID0gZWxlbWVudHNbaV0udmFsdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXR1cm5BcnJheTtcblx0fTtcblx0LyoqXG5cdCAqIERvZXMgdGhlIHNhbWUgYXMge0BsaW5rIEhUTUxGb3JtRWxlbWVudC5nZXRDaGVja2VkfGdldENoZWNrZWR9LCBidXQgd2l0aCB1bmNoZWNrZWQgZWxlbWVudHMuXG5cdCAqXG5cdCAqIEBmdW5jdGlvbiBleHRlcm5hbDpIVE1MRm9ybUVsZW1lbnQuZ2V0VW5jaGVja2VkXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gRmluZCBjaGVja2VkIHByb3BlcnR5IG9mIGVsZW1lbnRzIChpLmUuIGEgY2hlY2tib3hcblx0ICogb3IgYSByYWRpb2J1dHRvbikgd2l0aCB0aGUgZ2l2ZW4gbmFtZSwgb3Igc2VsZWN0IG9wdGlvbnMgdGhhdCBoYXZlIHNlbGVjdGVkXG5cdCAqIHNldCB0byB0cnVlIChkb24ndCB0cnkgdG8gbWl4IHNlbGVjdHMgd2l0aCByYWRpby9jaGVja2JveGVzKS5cblx0ICogQHBhcmFtIHtzdHJpbmd9IFt0eXBlXSAtIE9wdGlvbmFsbHkgc3BlY2lmeSBlaXRoZXIgcmFkaW8gb3IgY2hlY2tib3ggKGZvclxuXHQgKiB0aGUgZXZlbnQgdGhhdCBib3RoIGNoZWNrYm94ZXMgYW5kIHJhZGlvYnV0dG9ucyBoYXZlIHRoZSBzYW1lIG5hbWUpLlxuXHQgKiBAcmV0dXJucyB7c3RyaW5nW119IC0gQ29udGFpbnMgdGhlIHZhbHVlcyBvZiBlbGVtZW50cyB3aXRoIHRoZSBnaXZlbiBuYW1lXG5cdCAqIGNoZWNrZWQgcHJvcGVydHkgc2V0IHRvIHRydWUuXG5cdCAqL1xuXHRIVE1MRm9ybUVsZW1lbnQucHJvdG90eXBlLmdldFVuY2hlY2tlZCA9IGZ1bmN0aW9uIChuYW1lLCB0eXBlKSB7XG5cdFx0Y29uc3QgZWxlbWVudHMgPSB0aGlzLmVsZW1lbnRzW25hbWVdO1xuXHRcdGlmICghZWxlbWVudHMpIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cdFx0Y29uc3QgcmV0dXJuQXJyYXkgPSBbXTtcblx0XHRsZXQgaTtcblx0XHRpZiAoZWxlbWVudHMgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCkge1xuXHRcdFx0Y29uc3Qge29wdGlvbnN9ID0gZWxlbWVudHM7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRpZiAoIW9wdGlvbnNbaV0uc2VsZWN0ZWQpIHtcblx0XHRcdFx0XHRpZiAob3B0aW9uc1tpXS52YWx1ZXMpIHtcblx0XHRcdFx0XHRcdHJldHVybkFycmF5W3JldHVybkFycmF5Lmxlbmd0aF0gPSBvcHRpb25zW2ldLnZhbHVlcztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuQXJyYXlbcmV0dXJuQXJyYXkubGVuZ3RoXSA9IG9wdGlvbnNbaV0udmFsdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChlbGVtZW50cyBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcblx0XHRcdGlmICh0eXBlICYmIGVsZW1lbnRzLnR5cGUgIT09IHR5cGUpIHtcblx0XHRcdFx0cmV0dXJuIFtdO1xuXHRcdFx0fSBlbHNlIGlmICghZWxlbWVudHMuY2hlY2tlZCkge1xuXHRcdFx0XHRyZXR1cm4gW2VsZW1lbnRzLnZhbHVlXTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdGlmICghZWxlbWVudHNbaV0uY2hlY2tlZCkge1xuXHRcdFx0XHRcdGlmICh0eXBlICYmIGVsZW1lbnRzW2ldLnR5cGUgIT09IHR5cGUpIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoZWxlbWVudHNbaV0udmFsdWVzKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm5BcnJheVtyZXR1cm5BcnJheS5sZW5ndGhdID0gZWxlbWVudHNbaV0udmFsdWVzO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm5BcnJheVtyZXR1cm5BcnJheS5sZW5ndGhdID0gZWxlbWVudHNbaV0udmFsdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXR1cm5BcnJheTtcblx0fTtcblx0LyoqXG5cdCAqIFV0aWxpdGllcyB0byBoZWxwIHByb2Nlc3MgSVAgYWRkcmVzc2VzLlxuXHQgKlxuXHQgKiBAbmFtZXNwYWNlIE1vcmViaXRzLmlwXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0c1xuXHQgKi9cblx0TW9yZWJpdHMuaXAgPSB7XG5cdFx0LyoqXG5cdFx0ICogQ29udmVydHMgYW4gSVB2NiBhZGRyZXNzIHRvIHRoZSBjYW5vbmljYWwgZm9ybSBzdG9yZWQgYW5kIHVzZWQgYnkgTWVkaWFXaWtpLlxuXHRcdCAqIEphdmFTY3JpcHQgdHJhbnNsYXRpb24gb2YgdGhlIHtAbGluayBodHRwczovL2dlcnJpdC53aWtpbWVkaWEub3JnL3IvcGx1Z2lucy9naXRpbGVzL21lZGlhd2lraS9jb3JlLysvOGViNmFjM2U4NGVhMzMxMmQzOTFjYTk2YzEyYzQ5ZTNhZDA3NTNiYi9pbmNsdWRlcy91dGlscy9JUC5waHAjMTMxfGBJUDo6c2FuaXRpemVJUCgpYH1cblx0XHQgKiBmdW5jdGlvbiBmcm9tIHRoZSBJUFV0aWxzIGxpYnJhcnkuICBBZGRyZXNzZXMgYXJlIHZlcmJvc2UsIHVwcGVyY2FzZSxcblx0XHQgKiBub3JtYWxpemVkLCBhbmQgZXhwYW5kZWQgdG8gOCB3b3Jkcy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBhZGRyZXNzIC0gVGhlIElQdjYgYWRkcmVzcywgd2l0aCBvciB3aXRob3V0IENJRFIuXG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHRzYW5pdGl6ZUlQdjY6IChhZGRyZXNzKSA9PiB7XG5cdFx0XHRhZGRyZXNzID0gYWRkcmVzcy50cmltKCk7XG5cdFx0XHRpZiAoYWRkcmVzcyA9PT0gJycpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIW13LnV0aWwuaXNJUHY2QWRkcmVzcyhhZGRyZXNzLCB0cnVlKSkge1xuXHRcdFx0XHRyZXR1cm4gYWRkcmVzczsgLy8gbm90aGluZyBlbHNlIHRvIGRvIGZvciBJUHY0IGFkZHJlc3NlcyBvciBpbnZhbGlkIG9uZXNcblx0XHRcdH1cblx0XHRcdC8vIFJlbW92ZSBhbnkgd2hpdGVzcGFjZXMsIGNvbnZlcnQgdG8gdXBwZXIgY2FzZVxuXHRcdFx0YWRkcmVzcyA9IGFkZHJlc3MudG9VcHBlckNhc2UoKTtcblx0XHRcdC8vIEV4cGFuZCB6ZXJvIGFiYnJldmlhdGlvbnNcblx0XHRcdGNvbnN0IGFiYnJldlBvcyA9IGFkZHJlc3MuaW5kZXhPZignOjonKTtcblx0XHRcdGlmIChhYmJyZXZQb3MgIT09IC0xKSB7XG5cdFx0XHRcdC8vIFdlIGtub3cgdGhpcyBpcyB2YWxpZCBJUHY2LiBGaW5kIHRoZSBsYXN0IGluZGV4IG9mIHRoZVxuXHRcdFx0XHQvLyBhZGRyZXNzIGJlZm9yZSBhbnkgQ0lEUiBudW1iZXIgKGUuZy4gXCJhOmI6Yzo6LzI0XCIpLlxuXHRcdFx0XHRjb25zdCBDSURSU3RhcnQgPSBhZGRyZXNzLmluZGV4T2YoJy8nKTtcblx0XHRcdFx0Y29uc3QgYWRkcmVzc0VuZCA9IENJRFJTdGFydCA9PT0gLTEgPyBhZGRyZXNzLmxlbmd0aCAtIDEgOiBDSURSU3RhcnQgLSAxO1xuXHRcdFx0XHQvLyBJZiB0aGUgJzo6JyBpcyBhdCB0aGUgYmVnaW5uaW5nLi4uXG5cdFx0XHRcdGxldCByZXBlYXQ7XG5cdFx0XHRcdGxldCBleHRyYTtcblx0XHRcdFx0bGV0IHBhZDtcblx0XHRcdFx0aWYgKGFiYnJldlBvcyA9PT0gMCkge1xuXHRcdFx0XHRcdHJlcGVhdCA9ICcwOic7XG5cdFx0XHRcdFx0ZXh0cmEgPSBhZGRyZXNzID09PSAnOjonID8gJzAnIDogJyc7IC8vIGZvciB0aGUgYWRkcmVzcyAnOjonXG5cdFx0XHRcdFx0cGFkID0gOTsgLy8gNysyIChkdWUgdG8gJzo6Jylcblx0XHRcdFx0XHQvLyBJZiB0aGUgJzo6JyBpcyBhdCB0aGUgZW5kLi4uXG5cdFx0XHRcdH0gZWxzZSBpZiAoYWJicmV2UG9zID09PSBhZGRyZXNzRW5kIC0gMSkge1xuXHRcdFx0XHRcdHJlcGVhdCA9ICc6MCc7XG5cdFx0XHRcdFx0ZXh0cmEgPSAnJztcblx0XHRcdFx0XHRwYWQgPSA5OyAvLyA3KzIgKGR1ZSB0byAnOjonKVxuXHRcdFx0XHRcdC8vIElmIHRoZSAnOjonIGlzIGluIHRoZSBtaWRkbGUuLi5cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXBlYXQgPSAnOjAnO1xuXHRcdFx0XHRcdGV4dHJhID0gJzonO1xuXHRcdFx0XHRcdHBhZCA9IDg7IC8vIDYrMiAoZHVlIHRvICc6OicpXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRsZXQgcmVwbGFjZW1lbnQgPSByZXBlYXQ7XG5cdFx0XHRcdHBhZCAtPSBhZGRyZXNzLnNwbGl0KCc6JykubGVuZ3RoIC0gMTtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBwYWQ7IGkrKykge1xuXHRcdFx0XHRcdHJlcGxhY2VtZW50ICs9IHJlcGVhdDtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXBsYWNlbWVudCArPSBleHRyYTtcblx0XHRcdFx0YWRkcmVzcyA9IGFkZHJlc3MucmVwbGFjZSgnOjonLCByZXBsYWNlbWVudCk7XG5cdFx0XHR9XG5cdFx0XHQvLyBSZW1vdmUgbGVhZGluZyB6ZXJvcyBmcm9tIGVhY2ggYmxvYyBhcyBuZWVkZWRcblx0XHRcdHJldHVybiBhZGRyZXNzLnJlcGxhY2UoLyhefDopMCsoWzAtOUEtRmEtZl17MSw0fSkvZywgJyQxJDInKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIERldGVybWluZSBpZiB0aGUgZ2l2ZW4gSVAgYWRkcmVzcyBpcyBhIHJhbmdlLiAgSnVzdCBjb25qb2luc1xuXHRcdCAqIGBtdy51dGlsLmlzSVBBZGRyZXNzYCB3aXRoIGFuZCB3aXRob3V0IHRoZSBgYWxsb3dCbG9ja2Agb3B0aW9uLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGlwXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59IC0gVHJ1ZSBpZiBnaXZlbiBhIHZhbGlkIElQIGFkZHJlc3MgcmFuZ2UsIGZhbHNlIG90aGVyd2lzZS5cblx0XHQgKi9cblx0XHRpc1JhbmdlOiAoaXApID0+IHtcblx0XHRcdHJldHVybiBtdy51dGlsLmlzSVBBZGRyZXNzKGlwLCB0cnVlKSAmJiAhbXcudXRpbC5pc0lQQWRkcmVzcyhpcCk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBDaGVjayB0aGF0IGFuIElQIHJhbmdlIGlzIHdpdGhpbiB0aGUgQ0lEUiBsaW1pdHMuICBNb3N0IGxpa2VseSB0byBiZSB1c2VmdWxcblx0XHQgKiBpbiBjb25qdW5jdGlvbiB3aXRoIGB3Z1JlbGV2YW50VXNlck5hbWVgLiAgQ0lEUiBsaW1pdHMgYXJlIGhhcmRjb2RlZCBhcyAvMTZcblx0XHQgKiBmb3IgSVB2NCBhbmQgLzMyIGZvciBJUHY2LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGlwXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59IC0gVHJ1ZSBmb3IgdmFsaWQgcmFuZ2VzIHdpdGhpbiB0aGUgQ0lEUiBsaW1pdHMsXG5cdFx0ICogb3RoZXJ3aXNlIGZhbHNlIChyYW5nZXMgb3V0c2lkZSB0aGUgbGltaXQsIHNpbmdsZSBJUHMsIG5vbi1JUHMpLlxuXHRcdCAqL1xuXHRcdHZhbGlkQ0lEUjogKGlwKSA9PiB7XG5cdFx0XHRpZiAoTW9yZWJpdHMuaXAuaXNSYW5nZShpcCkpIHtcblx0XHRcdFx0Y29uc3Qgc3VibmV0ID0gTnVtYmVyLnBhcnNlSW50KGlwLm1hdGNoKC9cXC8oXFxkezEsM30pJC8pWzFdLCAxMCk7XG5cdFx0XHRcdGlmIChzdWJuZXQpIHtcblx0XHRcdFx0XHQvLyBTaG91bGQgYmUgcmVkdW5kYW50XG5cdFx0XHRcdFx0aWYgKG13LnV0aWwuaXNJUHY2QWRkcmVzcyhpcCwgdHJ1ZSkpIHtcblx0XHRcdFx0XHRcdGlmIChzdWJuZXQgPj0gMzIpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChzdWJuZXQgPj0gMTYpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogR2V0IHRoZSAvNjQgc3VibmV0IGZvciBhbiBJUHY2IGFkZHJlc3MuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gaXB2NiAtIFRoZSBJUHY2IGFkZHJlc3MsIHdpdGggb3Igd2l0aG91dCBhIHN1Ym5ldC5cblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbnxzdHJpbmd9IC0gRmFsc2UgaWYgbm90IElQdjYgb3IgYmlnZ2VyIHRoYW4gYSA2NCxcblx0XHQgKiBvdGhlcndpc2UgdGhlIChzYW5pdGl6ZWQpIC82NCBhZGRyZXNzLlxuXHRcdCAqL1xuXHRcdGdldDY0OiAoaXB2NikgPT4ge1xuXHRcdFx0aWYgKCFpcHY2IHx8ICFtdy51dGlsLmlzSVB2NkFkZHJlc3MoaXB2NiwgdHJ1ZSkpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3Qgc3VibmV0TWF0Y2ggPSBpcHY2Lm1hdGNoKC9cXC8oXFxkezEsM30pJC8pO1xuXHRcdFx0aWYgKHN1Ym5ldE1hdGNoICYmIE51bWJlci5wYXJzZUludChzdWJuZXRNYXRjaFsxXSwgMTApIDwgNjQpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0aXB2NiA9IE1vcmViaXRzLmlwLnNhbml0aXplSVB2NihpcHY2KTtcblx0XHRcdGNvbnN0IGlwUmVnZXggPSAvXigoPzpbMC05QS1GXXsxLDR9Oil7NH0pKD86WzAtOUEtRl17MSw0fTopezN9WzAtOUEtRl17MSw0fSg/OlxcL1xcZHsxLDN9KT8kLztcblx0XHRcdHJldHVybiBpcHY2LnJlcGxhY2UoaXBSZWdleCwgJyQxJy5jb25jYXQoJzA6MDowOjAvNjQnKSk7XG5cdFx0fSxcblx0fTtcblx0LyoqXG5cdCAqIEhlbHBlciBmdW5jdGlvbnMgdG8gbWFuaXB1bGF0ZSBzdHJpbmdzLlxuXHQgKlxuXHQgKiBAbmFtZXNwYWNlIE1vcmViaXRzLnN0cmluZ1xuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICovXG5cdE1vcmViaXRzLnN0cmluZyA9IHtcblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHR0b1VwcGVyQ2FzZUZpcnN0Q2hhcjogKHN0cikgPT4ge1xuXHRcdFx0c3RyID0gc3RyLnRvU3RyaW5nKCk7XG5cdFx0XHRyZXR1cm4gc3RyLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHR0b0xvd2VyQ2FzZUZpcnN0Q2hhcjogKHN0cikgPT4ge1xuXHRcdFx0c3RyID0gc3RyLnRvU3RyaW5nKCk7XG5cdFx0XHRyZXR1cm4gc3RyLnNsaWNlKDAsIDEpLnRvTG93ZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBHaXZlcyBhbiBhcnJheSBvZiBzdWJzdHJpbmdzIG9mIGBzdHJgIC0gc3RhcnRpbmcgd2l0aCBgc3RhcnRgIGFuZFxuXHRcdCAqIGVuZGluZyB3aXRoIGBlbmRgIC0gd2hpY2ggaXMgbm90IGluIGBza2lwbGlzdGAuICBJbnRlbmRlZCBmb3IgdXNlXG5cdFx0ICogb24gd2lraXRleHQgd2l0aCB0ZW1wbGF0ZXMgb3IgbGlua3MuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHN0YXJ0XG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGVuZFxuXHRcdCAqIEBwYXJhbSB7KHN0cmluZ1tdfHN0cmluZyl9IFtza2lwbGlzdF1cblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nW119XG5cdFx0ICogQHRocm93cyBJZiB0aGUgYHN0YXJ0YCBhbmQgYGVuZGAgc3RyaW5ncyBhcmVuJ3Qgb2YgdGhlIHNhbWUgbGVuZ3RoLlxuXHRcdCAqIEB0aHJvd3MgSWYgYHNraXBsaXN0YCBpc24ndCBhbiBhcnJheSBvciBzdHJpbmdcblx0XHQgKi9cblx0XHRzcGxpdFdlaWdodGVkQnlLZXlzOiAoc3RyLCBzdGFydCwgZW5kLCBza2lwbGlzdCkgPT4ge1xuXHRcdFx0aWYgKHN0YXJ0Lmxlbmd0aCAhPT0gZW5kLmxlbmd0aCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ3N0YXJ0IG1hcmtlciBhbmQgZW5kIG1hcmtlciBtdXN0IGJlIG9mIHRoZSBzYW1lIGxlbmd0aCcpO1xuXHRcdFx0fVxuXHRcdFx0bGV0IGxldmVsID0gMDtcblx0XHRcdGxldCBpbml0aWFsID0gbnVsbDtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IFtdO1xuXHRcdFx0aWYgKCFBcnJheS5pc0FycmF5KHNraXBsaXN0KSkge1xuXHRcdFx0XHRpZiAoc2tpcGxpc3QgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdHNraXBsaXN0ID0gW107XG5cdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIHNraXBsaXN0ID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdHNraXBsaXN0ID0gW3NraXBsaXN0XTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdub24tYXBwbGljYWJsZSBza2lwbGlzdCBwYXJhbWV0ZXInKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIHNraXBsaXN0KSB7XG5cdFx0XHRcdFx0aWYgKHN0ci5zbGljZShpLCBpICsgZWxlbWVudC5sZW5ndGgpID09PSBlbGVtZW50KSB7XG5cdFx0XHRcdFx0XHRpICs9IGVsZW1lbnQubGVuZ3RoIC0gMTtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoc3RyLnNsaWNlKGksIGkgKyBzdGFydC5sZW5ndGgpID09PSBzdGFydCkge1xuXHRcdFx0XHRcdGlmIChpbml0aWFsID09PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRpbml0aWFsID0gaTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0KytsZXZlbDtcblx0XHRcdFx0XHRpICs9IHN0YXJ0Lmxlbmd0aCAtIDE7XG5cdFx0XHRcdH0gZWxzZSBpZiAoc3RyLnNsaWNlKGksIGkgKyBlbmQubGVuZ3RoKSA9PT0gZW5kKSB7XG5cdFx0XHRcdFx0LS1sZXZlbDtcblx0XHRcdFx0XHRpICs9IGVuZC5sZW5ndGggLSAxO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghbGV2ZWwgJiYgaW5pdGlhbCAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IHN0ci5zbGljZShpbml0aWFsLCBpICsgMSk7XG5cdFx0XHRcdFx0aW5pdGlhbCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBGb3JtYXRzIGZyZWVmb3JtIFwicmVhc29uXCIgKGZyb20gYSB0ZXh0YXJlYSkgZm9yIGRlbGV0aW9uL290aGVyXG5cdFx0ICogdGVtcGxhdGVzIHRoYXQgYXJlIGdvaW5nIHRvIGJlIHN1YnN0aXR1dGVkLCAoZS5nLiBQUk9ELCBYRkQsIFJQUCkuXG5cdFx0ICogSGFuZGxlcyBgfGAgb3V0c2lkZSBhIG5vd2lraSB0YWcuXG5cdFx0ICogT3B0aW9uYWxseSwgYWxzbyBhZGRzIGEgc2lnbmF0dXJlIGlmIG5vdCBwcmVzZW50IGFscmVhZHkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbYWRkU2lnXVxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0Zm9ybWF0UmVhc29uVGV4dDogKHN0ciwgYWRkU2lnKSA9PiB7XG5cdFx0XHRsZXQgcmVhc29uID0gKHN0ciB8fCAnJykudG9TdHJpbmcoKS50cmltKCk7XG5cdFx0XHRjb25zdCB1bmJpbmRlciA9IG5ldyBNb3JlYml0cy51bmJpbmRlcihyZWFzb24pO1xuXHRcdFx0dW5iaW5kZXIudW5iaW5kKCc8bm8nLmNvbmNhdCgnd2lraScsICc+JyksICc8L25vJy5jb25jYXQoJ3dpa2knLCAnPicpKTtcblx0XHRcdHVuYmluZGVyLmNvbnRlbnQgPSB1bmJpbmRlci5jb250ZW50LnJlcGxhY2UoL1xcfC9nLCAne3snLmNvbmNhdCgnc3Vic3Q6JywgJyF9fScpKTtcblx0XHRcdHJlYXNvbiA9IHVuYmluZGVyLnJlYmluZCgpO1xuXHRcdFx0aWYgKGFkZFNpZykge1xuXHRcdFx0XHRjb25zdCBzaWcgPSAnfn4nLmNvbmNhdCgnfn4nKTtcblx0XHRcdFx0Y29uc3Qgc2lnSW5kZXggPSByZWFzb24ubGFzdEluZGV4T2Yoc2lnKTtcblx0XHRcdFx0aWYgKHNpZ0luZGV4ID09PSAtMSB8fCBzaWdJbmRleCAhPT0gcmVhc29uLmxlbmd0aCAtIHNpZy5sZW5ndGgpIHtcblx0XHRcdFx0XHRyZWFzb24gKz0gYCAke3NpZ31gO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVhc29uLnRyaW0oKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEZvcm1hdHMgYSBcInJlYXNvblwiIChmcm9tIGEgdGV4dGFyZWEpIGZvciBpbmNsdXNpb24gaW4gYSB1c2Vyc3BhY2Vcblx0XHQgKiBsb2cuICBSZXBsYWNlcyBuZXdsaW5lcyB3aXRoIHt7UGJ9fSwgYW5kIGFkZHMgYW4gZXh0cmEgYCNgIGJlZm9yZVxuXHRcdCAqIGxpc3QgaXRlbXMgZm9yIHByb3BlciBmb3JtYXR0aW5nLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHN0clxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0Zm9ybWF0UmVhc29uRm9yTG9nOiAoc3RyKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRzdHJcblx0XHRcdFx0XHQvLyBoYW5kbGUgbGluZSBicmVha3MsIHdoaWNoIG90aGVyd2lzZSBicmVhayBudW1iZXJpbmdcblx0XHRcdFx0XHQucmVwbGFjZSgvXFxuKy9nLCAne3twYn19Jylcblx0XHRcdFx0XHQvLyBwdXQgYW4gZXh0cmEgIyBpbiBmcm9udCBiZWZvcmUgYnVsbGV0ZWQgb3IgbnVtYmVyZWQgbGlzdCBpdGVtc1xuXHRcdFx0XHRcdC5yZXBsYWNlKC9eKCMrKS9nbSwgJyMkMScpXG5cdFx0XHRcdFx0LnJlcGxhY2UoL14oXFwqKykvZ20sICcjJDEnKVxuXHRcdFx0KTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIExpa2UgYFN0cmluZy5wcm90b3R5cGUucmVwbGFjZSgpYCwgYnV0IGVzY2FwZXMgYW55IGRvbGxhciBzaWducyBpblxuXHRcdCAqIHRoZSByZXBsYWNlbWVudCBzdHJpbmcuICBVc2VmdWwgd2hlbiB0aGUgdGhlIHJlcGxhY2VtZW50IHN0cmluZyBpc1xuXHRcdCAqIGFyYml0cmFyeSwgc3VjaCBhcyBhIHVzZXJuYW1lIG9yIGZyZWVmb3JtIHVzZXIgaW5wdXQsIGFuZCBjb3VsZFxuXHRcdCAqIGNvbnRhaW4gZG9sbGFyIHNpZ25zLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyAtIFRleHQgaW4gd2hpY2ggdG8gcmVwbGFjZS5cblx0XHQgKiBAcGFyYW0geyhzdHJpbmd8UmVnRXhwKX0gcGF0dGVyblxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSByZXBsYWNlbWVudFxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0c2FmZVJlcGxhY2U6IChzdHJpbmcsIHBhdHRlcm4sIHJlcGxhY2VtZW50KSA9PiB7XG5cdFx0XHRyZXR1cm4gc3RyaW5nLnJlcGxhY2UocGF0dGVybiwgcmVwbGFjZW1lbnQucmVwbGFjZSgvXFwkL2csICckJCQkJykpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogRGV0ZXJtaW5lIGlmIHRoZSB1c2VyLXByb3ZpZGVkIGV4cGlyYXRpb24gd2lsbCBiZSBjb25zaWRlcmVkIGFuXG5cdFx0ICogaW5maW5pdGUtbGVuZ3RoIGJ5IE1XLlxuXHRcdCAqXG5cdFx0ICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9waGFicmljYXRvci53aWtpbWVkaWEub3JnL1Q2ODY0Nn1cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBleHBpcnlcblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHRpc0luZmluaXR5OiAoZXhwaXJ5KSA9PiB7XG5cdFx0XHRyZXR1cm4gWydpbmRlZmluaXRlJywgJ2luZmluaXR5JywgJ2luZmluaXRlJywgJ25ldmVyJ10uaW5jbHVkZXMoZXhwaXJ5KTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEVzY2FwZXMgYSBzdHJpbmcgdG8gYmUgdXNlZCBpbiBhIFJlZ0V4cCwgcmVwbGFjaW5nIHNwYWNlcyBhbmRcblx0XHQgKiB1bmRlcnNjb3JlcyB3aXRoIGBbXyBdYCBhcyB0aGV5IGFyZSBvZnRlbiBlcXVpdmFsZW50LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBTdHJpbmcgdG8gYmUgZXNjYXBlZC5cblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfSAtIFRoZSBlc2NhcGVkIHRleHQuXG5cdFx0ICovXG5cdFx0ZXNjYXBlUmVnRXhwOiAodGV4dCkgPT4ge1xuXHRcdFx0cmV0dXJuIG13LnV0aWwuZXNjYXBlUmVnRXhwKHRleHQpLnJlcGxhY2UoLyB8Xy9nLCAnW18gXScpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogZm9ybWF0VGltZVxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHsqfSB0aW1lIFRoZSBzdHJpbmcgdG8gZm9yYW10XG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHRmb3JtYXRUaW1lOiAodGltZSkgPT4ge1xuXHRcdFx0bGV0IG07XG5cdFx0XHRpZiAoKG0gPSB0aW1lLm1hdGNoKC9eXFxzKihcXGQrKVxccypzZWMob25kKT9zP1xccyokLykpICE9PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiBgJHttWzFdfeenkmA7XG5cdFx0XHR9XG5cdFx0XHRpZiAoKG0gPSB0aW1lLm1hdGNoKC9eXFxzKihcXGQrKVxccyptaW4odXRlKT9zP1xccyokLykpICE9PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiBgJHttWzFdfeWIhmA7XG5cdFx0XHR9XG5cdFx0XHRpZiAoKG0gPSB0aW1lLm1hdGNoKC9eXFxzKihcXGQrKVxccypob3Vycz9cXHMqJC8pKSAhPT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gbVsxXSArIHdpbmRvdy53Z1VMUygn5bCP5pe2JywgJ+Wwj+aZgicpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKChtID0gdGltZS5tYXRjaCgvXlxccyooXFxkKylcXHMqZGF5cz9cXHMqJC8pKSAhPT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gYCR7bVsxXX3lpKlgO1xuXHRcdFx0fVxuXHRcdFx0aWYgKChtID0gdGltZS5tYXRjaCgvXlxccyooXFxkKylcXHMqd2Vla3M/XFxzKiQvKSkgIT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIG1bMV0gKyB3aW5kb3cud2dVTFMoJ+WRqCcsICfpgLEnKTtcblx0XHRcdH1cblx0XHRcdGlmICgobSA9IHRpbWUubWF0Y2goL15cXHMqKFxcZCspXFxzKm1vbnRocz9cXHMqJC8pKSAhPT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gbVsxXSArIHdpbmRvdy53Z1VMUygn5Liq5pyIJywgJ+WAi+aciCcpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKChtID0gdGltZS5tYXRjaCgvXlxccyooXFxkKylcXHMqeWVhcnM/XFxzKiQvKSkgIT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIGAke21bMV195bm0YDtcblx0XHRcdH1cblx0XHRcdGlmIChNb3JlYml0cy5zdHJpbmcuaXNJbmZpbml0eSh0aW1lLnRyaW0oKSkpIHtcblx0XHRcdFx0cmV0dXJuIHdpbmRvdy53Z1VMUygn5peg6ZmQ5pyfJywgJ+eEoemZkOacnycpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRpbWU7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBBcHBlbmQgcHVuY3R1YXRpb24gdG8gYSBzdHJpbmcgd2hlbiBpdCdzIG1pc3Npbmdcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gcHVuY3R1YXRpb25cblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdGFwcGVuZFB1bmN0dWF0aW9uOiAoc3RyLCBwdW5jdHVhdGlvbikgPT4ge1xuXHRcdFx0aWYgKHB1bmN0dWF0aW9uID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0cHVuY3R1YXRpb24gPSAn44CCJztcblx0XHRcdH1cblx0XHRcdGlmIChzdHIuc2VhcmNoKC9bLj8hO+OAgu+8n++8ge+8m10kLykgPT09IC0xKSB7XG5cdFx0XHRcdHN0ciArPSBwdW5jdHVhdGlvbjtcblx0XHRcdH1cblx0XHRcdHJldHVybiBzdHI7XG5cdFx0fSxcblx0fTtcblx0LyoqXG5cdCAqIEhlbHBlciBmdW5jdGlvbnMgdG8gbWFuaXB1bGF0ZSBhcnJheXMuXG5cdCAqXG5cdCAqIEBuYW1lc3BhY2UgTW9yZWJpdHMuYXJyYXlcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzXG5cdCAqL1xuXHRNb3JlYml0cy5hcnJheSA9IHtcblx0XHQvKipcblx0XHQgKiBSZW1vdmUgZHVwbGljYXRlZCBpdGVtcyBmcm9tIGFuIGFycmF5LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtBcnJheX0gYXJyXG5cdFx0ICogQHJldHVybnMge0FycmF5fSBBIGNvcHkgb2YgdGhlIGFycmF5IHdpdGggZHVwbGljYXRlcyByZW1vdmVkLlxuXHRcdCAqIEB0aHJvd3MgV2hlbiBwcm92aWRlZCBhIG5vbi1hcnJheS5cblx0XHQgKi9cblx0XHR1bmlxOiAoYXJyKSA9PiB7XG5cdFx0XHRpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdBIG5vbi1hcnJheSBvYmplY3QgcGFzc2VkIHRvIE1vcmViaXRzLmFycmF5LnVuaXEnKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBhcnIuZmlsdGVyKChpdGVtLCBpZHgpID0+IHtcblx0XHRcdFx0cmV0dXJuIGFyci5pbmRleE9mKGl0ZW0pID09PSBpZHg7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFJlbW92ZSBub24tZHVwbGljYXRlZCBpdGVtcyBmcm9tIGFuIGFycmF5LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtBcnJheX0gYXJyXG5cdFx0ICogQHJldHVybnMge0FycmF5fSBBIGNvcHkgb2YgdGhlIGFycmF5IHdpdGggdGhlIGZpcnN0IGluc3RhbmNlIG9mIGVhY2ggdmFsdWVcblx0XHQgKiByZW1vdmVkOyBzdWJzZXF1ZW50IGluc3RhbmNlcyBvZiB0aG9zZSB2YWx1ZXMgKGR1cGxpY2F0ZXMpIHJlbWFpbi5cblx0XHQgKiBAdGhyb3dzIFdoZW4gcHJvdmlkZWQgYSBub24tYXJyYXkuXG5cdFx0ICovXG5cdFx0ZHVwczogKGFycikgPT4ge1xuXHRcdFx0aWYgKCFBcnJheS5pc0FycmF5KGFycikpIHtcblx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQSBub24tYXJyYXkgb2JqZWN0IHBhc3NlZCB0byBNb3JlYml0cy5hcnJheS5kdXBzJyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gYXJyLmZpbHRlcigoaXRlbSwgaWR4KSA9PiB7XG5cdFx0XHRcdHJldHVybiBhcnIuaW5kZXhPZihpdGVtKSAhPT0gaWR4O1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBCcmVhayB1cCBhbiBhcnJheSBpbnRvIHNtYWxsZXIgYXJyYXlzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtBcnJheX0gYXJyXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IHNpemUgLSBTaXplIG9mIGVhY2ggY2h1bmsgKGV4Y2VwdCB0aGUgbGFzdCwgd2hpY2ggY291bGQgYmUgZGlmZmVyZW50KS5cblx0XHQgKiBAcmV0dXJucyB7QXJyYXlbXX0gQW4gYXJyYXkgY29udGFpbmluZyB0aGUgc21hbGxlciwgY2h1bmtlZCBhcnJheXMuXG5cdFx0ICogQHRocm93cyBXaGVuIHByb3ZpZGVkIGEgbm9uLWFycmF5LlxuXHRcdCAqL1xuXHRcdGNodW5rOiAoYXJyLCBzaXplKSA9PiB7XG5cdFx0XHRpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdBIG5vbi1hcnJheSBvYmplY3QgcGFzc2VkIHRvIE1vcmViaXRzLmFycmF5LmNodW5rJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInIHx8IHNpemUgPD0gMCkge1xuXHRcdFx0XHQvLyBwcmV0dHkgaW1wb3NzaWJsZSB0byBkbyBhbnl0aGluZyA6KVxuXHRcdFx0XHRyZXR1cm4gW2Fycl07IC8vIHdlIHJldHVybiBhbiBhcnJheSBjb25zaXN0aW5nIG9mIHRoaXMgYXJyYXkuXG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IG51bUNodW5rcyA9IE1hdGguY2VpbChhcnIubGVuZ3RoIC8gc2l6ZSk7XG5cdFx0XHRjb25zdCByZXN1bHQgPSBBcnJheS5mcm9tKHtcblx0XHRcdFx0bGVuZ3RoOiBudW1DaHVua3MsXG5cdFx0XHR9KTtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ2h1bmtzOyBpKyspIHtcblx0XHRcdFx0cmVzdWx0W2ldID0gYXJyLnNsaWNlKGkgKiBzaXplLCAoaSArIDEpICogc2l6ZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH0sXG5cdH07XG5cdC8qKlxuXHQgKiBVdGlsaXRpZXMgdG8gZW5oYW5jZSBzZWxlY3QyIG1lbnVzLiBTZWUgdHdpbmtsZXdhcm4sIHR3aW5rbGVibG9ja1xuXHQgKiBmb3Igc2FtcGxlIHVzYWdlcy5cblx0ICpcblx0ICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9zZWxlY3QyLm9yZy99XG5cdCAqXG5cdCAqIEBuYW1lc3BhY2UgTW9yZWJpdHMuc2VsZWN0MlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICogQHJlcXVpcmVzIGpxdWVyeS5zZWxlY3QyXG5cdCAqL1xuXHRNb3JlYml0cy5zZWxlY3QyID0ge1xuXHRcdG1hdGNoZXJzOiB7XG5cdFx0XHQvKipcblx0XHRcdCAqIEN1c3RvbSBtYXRjaGVyIGluIHdoaWNoIGlmIHRoZSBvcHRncm91cCBuYW1lIG1hdGNoZXMsIGFsbCBvcHRpb25zIGluIHRoYXRcblx0XHRcdCAqIGdyb3VwIGFyZSBzaG93biwgbGlrZSBpbiBqcXVlcnkuY2hvc2VuLlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSB7Kn0gcGFyYW1zXG5cdFx0XHQgKiBAcGFyYW0geyp9IGRhdGFcblx0XHRcdCAqL1xuXHRcdFx0b3B0Z3JvdXBGdWxsOiAocGFyYW1zLCBkYXRhKSA9PiB7XG5cdFx0XHRcdGNvbnN0IG9yaWdpbmFsTWF0Y2hlciA9ICQuZm4uc2VsZWN0Mi5kZWZhdWx0cy5kZWZhdWx0cy5tYXRjaGVyO1xuXHRcdFx0XHRjb25zdCByZXN1bHQgPSBvcmlnaW5hbE1hdGNoZXIocGFyYW1zLCBkYXRhKTtcblx0XHRcdFx0aWYgKHJlc3VsdCAmJiBwYXJhbXMudGVybSAmJiBkYXRhLnRleHQudG9VcHBlckNhc2UoKS5pbmNsdWRlcyhwYXJhbXMudGVybS50b1VwcGVyQ2FzZSgpKSkge1xuXHRcdFx0XHRcdHJlc3VsdC5jaGlsZHJlbiA9IGRhdGEuY2hpbGRyZW47XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH0sXG5cdFx0XHQvKipcblx0XHRcdCAqIEN1c3RvbSBtYXRjaGVyIHRoYXQgbWF0Y2hlcyBmcm9tIHRoZSBiZWdpbm5pbmcgb2Ygd29yZHMgb25seS5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0geyp9IHBhcmFtc1xuXHRcdFx0ICogQHBhcmFtIHsqfSBkYXRhXG5cdFx0XHQgKi9cblx0XHRcdHdvcmRCZWdpbm5pbmc6IChwYXJhbXMsIGRhdGEpID0+IHtcblx0XHRcdFx0Y29uc3Qgb3JpZ2luYWxNYXRjaGVyID0gJC5mbi5zZWxlY3QyLmRlZmF1bHRzLmRlZmF1bHRzLm1hdGNoZXI7XG5cdFx0XHRcdGNvbnN0IHJlc3VsdCA9IG9yaWdpbmFsTWF0Y2hlcihwYXJhbXMsIGRhdGEpO1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0IXBhcmFtcy50ZXJtIHx8XG5cdFx0XHRcdFx0KHJlc3VsdCAmJiBuZXcgUmVnRXhwKGBcXFxcYiR7bXcudXRpbC5lc2NhcGVSZWdFeHAocGFyYW1zLnRlcm0pfWAsICdpJykudGVzdChyZXN1bHQudGV4dCkpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogVW5kZXJsaW5lIG1hdGNoZWQgcGFydCBvZiBvcHRpb25zLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHsqfSBkYXRhXG5cdFx0ICovXG5cdFx0aGlnaGxpZ2h0U2VhcmNoTWF0Y2hlczogKGRhdGEpID0+IHtcblx0XHRcdGNvbnN0IHNlYXJjaFRlcm0gPSBNb3JlYml0cy5zZWxlY3QyU2VhcmNoUXVlcnk7XG5cdFx0XHRpZiAoIXNlYXJjaFRlcm0gfHwgZGF0YS5sb2FkaW5nKSB7XG5cdFx0XHRcdHJldHVybiBkYXRhLnRleHQ7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBpZHggPSBkYXRhLnRleHQudG9VcHBlckNhc2UoKS5pbmRleE9mKHNlYXJjaFRlcm0udG9VcHBlckNhc2UoKSk7XG5cdFx0XHRpZiAoaWR4ID09PSAtMSkge1xuXHRcdFx0XHRyZXR1cm4gZGF0YS50ZXh0O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuICQoJzxzcGFuPicpLmFwcGVuZChcblx0XHRcdFx0ZGF0YS50ZXh0LnNsaWNlKDAsIGlkeCksXG5cdFx0XHRcdCQoJzxzcGFuPicpXG5cdFx0XHRcdFx0LmNzcygndGV4dC1kZWNvcmF0aW9uJywgJ3VuZGVybGluZScpXG5cdFx0XHRcdFx0LnRleHQoZGF0YS50ZXh0LnNsaWNlKGlkeCwgaWR4ICsgc2VhcmNoVGVybS5sZW5ndGgpKSxcblx0XHRcdFx0ZGF0YS50ZXh0LnNsaWNlKGlkeCArIHNlYXJjaFRlcm0ubGVuZ3RoKVxuXHRcdFx0KTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEludGVyY2VwdCBxdWVyeSBhcyBpdCBpcyBoYXBwZW5pbmcsIGZvciB1c2UgaW4gaGlnaGxpZ2h0U2VhcmNoTWF0Y2hlcy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7Kn0gcGFyYW1zXG5cdFx0ICovXG5cdFx0cXVlcnlJbnRlcmNlcHRvcjogKHBhcmFtcykgPT4ge1xuXHRcdFx0TW9yZWJpdHMuc2VsZWN0MlNlYXJjaFF1ZXJ5ID0gcGFyYW1zICYmIHBhcmFtcy50ZXJtO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogT3BlbiBkcm9wZG93biBhbmQgYmVnaW4gc2VhcmNoIHdoZW4gdGhlIGAuc2VsZWN0Mi1zZWxlY3Rpb25gIGhhc1xuXHRcdCAqIGZvY3VzIGFuZCBhIGtleSBpcyBwcmVzc2VkLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldlxuXHRcdCAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9zZWxlY3QyL3NlbGVjdDIvaXNzdWVzLzMyNzkjaXNzdWVjb21tZW50LTQ0MjUyNDE0N31cblx0XHQgKi9cblx0XHRhdXRvU3RhcnQ6IChldikgPT4ge1xuXHRcdFx0aWYgKGV2LndoaWNoIDwgNDgpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0bGV0IHRhcmdldCA9ICQoZXYudGFyZ2V0KS5jbG9zZXN0KCcuc2VsZWN0Mi1jb250YWluZXInKTtcblx0XHRcdGlmICghdGFyZ2V0Lmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0YXJnZXQgPSB0YXJnZXQucHJldigpO1xuXHRcdFx0dGFyZ2V0LnNlbGVjdDIoJ29wZW4nKTtcblx0XHRcdGNvbnN0IHNlYXJjaCA9IHRhcmdldC5kYXRhKCdzZWxlY3QyJykuZHJvcGRvd24uJHNlYXJjaCB8fCB0YXJnZXQuZGF0YSgnc2VsZWN0MicpLnNlbGVjdGlvbi4kc2VhcmNoO1xuXHRcdFx0Ly8gVXNlIERPTSAuZm9jdXMoKSB0byB3b3JrIGFyb3VuZCBhIGpRdWVyeSAzLjYuMCByZWdyZXNzaW9uIChodHRwczovL2dpdGh1Yi5jb20vc2VsZWN0Mi9zZWxlY3QyL2lzc3Vlcy81OTkzKVxuXHRcdFx0c2VhcmNoWzBdLmZvY3VzKCk7XG5cdFx0fSxcblx0fTtcblx0LyoqXG5cdCAqIFRlbXBvcmFyaWx5IGhpZGUgYSBwYXJ0IG9mIGEgc3RyaW5nIHdoaWxlIHByb2Nlc3NpbmcgdGhlIHJlc3Qgb2YgaXQuXG5cdCAqIFVzZWQgYnkge0BsaW5rIE1vcmViaXRzLndpa2l0ZXh0LnBhZ2UjY29tbWVudE91dEltYWdlfE1vcmViaXRzLndpa2l0ZXh0LnBhZ2UuY29tbWVudE91dEltYWdlfS5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzXG5cdCAqIEBjbGFzc1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIC0gVGhlIGluaXRpYWwgdGV4dCB0byBwcm9jZXNzLlxuXHQgKiBAZXhhbXBsZSBjb25zdCB1ID0gbmV3IE1vcmViaXRzLnVuYmluZGVyKCdIZWxsbyB3b3JsZCA8IS0tIHdvcmxkIC0tPiB3b3JsZCcpO1xuXHQgKiB1LnVuYmluZCgnPCEtLScsICctLT4nKTsgLy8gdGV4dCBpbnNpZGUgY29tbWVudCByZW1haW5zIGludGFjdFxuXHQgKiB1LmNvbnRlbnQgPSB1LmNvbnRlbnQucmVwbGFjZSgvd29ybGQvZywgJ2VhcnRoJyk7XG5cdCAqIHUucmViaW5kKCk7IC8vIGdpdmVzICdIZWxsbyBlYXJ0aCA8IS0tIHdvcmxkIC0tPiBlYXJ0aCdcblx0ICovXG5cdE1vcmViaXRzLnVuYmluZGVyID0gZnVuY3Rpb24gKHN0cmluZykge1xuXHRcdGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignbm90IGEgc3RyaW5nJyk7XG5cdFx0fVxuXHRcdC8qKiBUaGUgdGV4dCBiZWluZyBwcm9jZXNzZWQuICovXG5cdFx0dGhpcy5jb250ZW50ID0gc3RyaW5nO1xuXHRcdHRoaXMuY291bnRlciA9IDA7XG5cdFx0dGhpcy5oaXN0b3J5ID0ge307XG5cdFx0dGhpcy5wcmVmaXggPSBgJVVOSVE6OiR7TWF0aC5yYW5kb20oKX06OmA7XG5cdFx0dGhpcy5wb3N0Zml4ID0gJzo6VU5JUSUnO1xuXHR9O1xuXHRNb3JlYml0cy51bmJpbmRlci5wcm90b3R5cGUgPSB7XG5cdFx0LyoqXG5cdFx0ICogSGlkZSB0aGUgcmVnaW9uIGVuY2Fwc3VsYXRlZCBieSB0aGUgYHByZWZpeGAgYW5kIGBwb3N0Zml4YCBmcm9tXG5cdFx0ICogc3RyaW5nIHByb2Nlc3NpbmcuICBgcHJlZml4YCBhbmQgYHBvc3RmaXhgIHdpbGwgYmUgdXNlZCBpbiBhXG5cdFx0ICogUmVnRXhwLCBzbyBpdGVtcyB0aGF0IG5lZWQgZXNjYXBpbmcgc2hvdWxkIGJlIHVzZSBgXFxcXGAuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4XG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHBvc3RmaXhcblx0XHQgKiBAdGhyb3dzIElmIGVpdGhlciBgcHJlZml4YCBvciBgcG9zdGZpeGAgaXMgbWlzc2luZy5cblx0XHQgKi9cblx0XHR1bmJpbmQocHJlZml4LCBwb3N0Zml4KSB7XG5cdFx0XHRpZiAoIXByZWZpeCB8fCAhcG9zdGZpeCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0JvdGggcHJlZml4IGFuZCBwb3N0Zml4IG11c3QgYmUgcHJvdmlkZWQnKTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHJlID0gbmV3IFJlZ0V4cChgJHtwcmVmaXh9KFtcXFxcc1xcXFxTXSo/KSR7cG9zdGZpeH1gLCAnZycpO1xuXHRcdFx0dGhpcy5jb250ZW50ID0gdGhpcy5jb250ZW50LnJlcGxhY2UocmUsIE1vcmViaXRzLnVuYmluZGVyLmdldENhbGxiYWNrKHRoaXMpKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFJlc3RvcmUgdGhlIGhpZGRlbiBwb3J0aW9uIG9mIHRoZSBgY29udGVudGAgc3RyaW5nLlxuXHRcdCAqXG5cdFx0ICogQHJldHVybnMge3N0cmluZ30gVGhlIHByb2Nlc3NlZCBvdXRwdXQuXG5cdFx0ICovXG5cdFx0cmViaW5kKCkge1xuXHRcdFx0bGV0IHtjb250ZW50fSA9IHRoaXM7XG5cdFx0XHRmb3IgKGNvbnN0IGN1cnJlbnQgaW4gdGhpcy5oaXN0b3J5KSB7XG5cdFx0XHRcdGlmICghT2JqZWN0Lmhhc093bih0aGlzLmhpc3RvcnksIGN1cnJlbnQpKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29udGVudCA9IGNvbnRlbnQucmVwbGFjZShjdXJyZW50LCB0aGlzLmhpc3RvcnlbY3VycmVudF0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0fSxcblx0XHRwcmVmaXg6IG51bGwsXG5cdFx0Ly8gJVVOSVE6OjAuNTk1NTk4MTY0NDkzODMyNDo6XG5cdFx0cG9zdGZpeDogbnVsbCxcblx0XHQvLyA6OlVOSVElXG5cdFx0Y29udGVudDogbnVsbCxcblx0XHQvLyBzdHJpbmdcblx0XHRjb3VudGVyOiBudWxsLFxuXHRcdC8vIDArK1xuXHRcdGhpc3Rvcnk6IG51bGwsIC8vIHt9XG5cdH07XG5cdC8qKlxuXHQgKiBAcGFyYW0ge3R5cGVvZiBNb3JlYml0c30gc2VsZlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMudW5iaW5kZXJcblx0ICovXG5cdE1vcmViaXRzLnVuYmluZGVyLmdldENhbGxiYWNrID0gKHNlbGYpID0+IHtcblx0XHRyZXR1cm4gKG1hdGNoKSA9PiB7XG5cdFx0XHRjb25zdCBjdXJyZW50ID0gc2VsZi5wcmVmaXggKyBzZWxmLmNvdW50ZXIgKyBzZWxmLnBvc3RmaXg7XG5cdFx0XHRzZWxmLmhpc3RvcnlbY3VycmVudF0gPSBtYXRjaDtcblx0XHRcdCsrc2VsZi5jb3VudGVyO1xuXHRcdFx0cmV0dXJuIGN1cnJlbnQ7XG5cdFx0fTtcblx0fTtcblx0LyogKioqKioqKioqKioqKioqKiBNb3JlYml0cy5kYXRlICoqKioqKioqKioqKioqKiogKi9cblx0LyoqXG5cdCAqIENyZWF0ZSBhIGRhdGUgb2JqZWN0IHdpdGggZW5oYW5jZWQgcHJvY2Vzc2luZyBjYXBhYmlsaXRpZXMsIGEgbGFcblx0ICoge0BsaW5rIGh0dHBzOi8vbW9tZW50anMuY29tL3xtb21lbnQuanN9LiBNZWRpYVdpa2kgdGltZXN0YW1wIGZvcm1hdCBpcyBhbHNvXG5cdCAqIGFjY2VwdGFibGUsIGluIGFkZGl0aW9uIHRvIGV2ZXJ5dGhpbmcgdGhhdCBKUyBEYXRlKCkgYWNjZXB0cy5cblx0ICpcblx0ICogQHBhcmFtIHsuLi5hbnl9IGFyZ3Ncblx0ICogQG1lbWJlcm9mIE1vcmViaXRzXG5cdCAqIEBjbGFzc1xuXHQgKi9cblx0TW9yZWJpdHMuZGF0ZSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG5cdFx0Ly8gQ2hlY2sgTWVkaWFXaWtpIGZvcm1hdHNcblx0XHQvLyBNdXN0IGJlIGZpcnN0IHNpbmNlIGZpcmVmb3ggZXJyb25lb3VzbHkgYWNjZXB0cyB0aGUgdGltZXN0YW1wXG5cdFx0Ly8gZm9ybWF0LCBzYW5zIHRpbWV6b25lIChTZWUgYWxzbzogIzkyMSwgIzkzNiwgIzExNzQsICMxMTg3KSwgYW5kIHRoZVxuXHRcdC8vIDE0LWRpZ2l0IHN0cmluZyB3aWxsIGJlIGludGVycHJldGVkIGRpZmZlcmVudGx5LlxuXHRcdGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0Y29uc3QgW3BhcmFtXSA9IGFyZ3M7XG5cdFx0XHRpZiAoL15cXGR7MTR9JC8udGVzdChwYXJhbSkpIHtcblx0XHRcdFx0Ly8gWVlZWU1NRERISG1tc3Ncblx0XHRcdFx0Y29uc3QgZGlnaXRNYXRjaCA9IC8oXFxkezR9KShcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkvLmV4ZWMocGFyYW0pO1xuXHRcdFx0XHRpZiAoZGlnaXRNYXRjaCkge1xuXHRcdFx0XHRcdC8vIC4uLi4uIHllYXIgLi4uIG1vbnRoIC4uIGRhdGUgLi4uIGhvdXIgLi4uLiBtaW51dGUgLi4uLi4gc2Vjb25kXG5cdFx0XHRcdFx0dGhpcy5fZCA9IG5ldyBEYXRlKFxuXHRcdFx0XHRcdFx0UmVmbGVjdC5hcHBseShEYXRlLlVUQywgbnVsbCwgW1xuXHRcdFx0XHRcdFx0XHRkaWdpdE1hdGNoWzFdLFxuXHRcdFx0XHRcdFx0XHRkaWdpdE1hdGNoWzJdIC0gMSxcblx0XHRcdFx0XHRcdFx0ZGlnaXRNYXRjaFszXSxcblx0XHRcdFx0XHRcdFx0ZGlnaXRNYXRjaFs0XSxcblx0XHRcdFx0XHRcdFx0ZGlnaXRNYXRjaFs1XSxcblx0XHRcdFx0XHRcdFx0ZGlnaXRNYXRjaFs2XSxcblx0XHRcdFx0XHRcdF0pXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdC8vIFdpa2l0ZXh0IHNpZ25hdHVyZSB0aW1lc3RhbXBcblx0XHRcdFx0Y29uc3QgZGF0ZVBhcnRzID0gTW9yZWJpdHMubDEwbi5zaWduYXR1cmVUaW1lc3RhbXBGb3JtYXQocGFyYW0pO1xuXHRcdFx0XHRpZiAoZGF0ZVBhcnRzKSB7XG5cdFx0XHRcdFx0dGhpcy5fZCA9IG5ldyBEYXRlKERhdGUuVVRDLmFwcGx5KG51bGwsIGRhdGVQYXJ0cykpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIFRyeSBzdGFuZGFyZCBkYXRlXG5cdFx0dGhpcy5fZCA/Pz0gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShEYXRlLCBbRGF0ZSwgLi4uZ2VuZXJhdGVBcnJheShhcmdzKV0pKSgpO1xuXHRcdC8vIFN0aWxsIG5vP1xuXHRcdGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcblx0XHRcdG13LmxvZy53YXJuKCdJbnZhbGlkIE1vcmViaXRzLmRhdGUgaW5pdGlhbGlzYXRpb246JywgYXJncyk7XG5cdFx0fVxuXHR9O1xuXHQvKipcblx0ICogTG9jYWxpemVkIHN0cmluZ3MgZm9yIGRhdGUgcHJvY2Vzc2luZy5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLmRhdGVcblx0ICogQHR5cGUge29iamVjdC48c3RyaW5nLCBzdHJpbmc+fVxuXHQgKiBAcHJvcGVydHkge3N0cmluZ1tdfSBtb250aHNcblx0ICogQHByb3BlcnR5IHtzdHJpbmdbXX0gbW9udGhzU2hvcnRcblx0ICogQHByb3BlcnR5IHtzdHJpbmdbXX0gZGF5c1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ1tdfSBkYXlzU2hvcnRcblx0ICogQHByb3BlcnR5IHtvYmplY3QuPHN0cmluZywgc3RyaW5nPn0gcmVsYXRpdmVUaW1lc1xuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0TW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhID0ge1xuXHRcdC8vIG1lc3NhZ2UgbmFtZXMgaGVyZSBjb3JyZXNwb25kIHRvIE1lZGlhV2lraSBtZXNzYWdlIG5hbWVzXG5cdFx0Ly8gTm8gaTE4biBhdCB0aGlzIHRpbWVcblx0XHRtb250aHM6IFsnMeaciCcsICcy5pyIJywgJzPmnIgnLCAnNOaciCcsICc15pyIJywgJzbmnIgnLCAnN+aciCcsICc45pyIJywgJznmnIgnLCAnMTDmnIgnLCAnMTHmnIgnLCAnMTLmnIgnXSxcblx0XHRtb250aHNTaG9ydDogWycx5pyIJywgJzLmnIgnLCAnM+aciCcsICc05pyIJywgJzXmnIgnLCAnNuaciCcsICc35pyIJywgJzjmnIgnLCAnOeaciCcsICcxMOaciCcsICcxMeaciCcsICcxMuaciCddLFxuXHRcdGRheXM6IFsn5pif5pyf5pelJywgJ+aYn+acn+S4gCcsICfmmJ/mnJ/kuownLCAn5pif5pyf5LiJJywgJ+aYn+acn+WbmycsICfmmJ/mnJ/kupQnLCAn5pif5pyf5YWtJ10sXG5cdFx0ZGF5c1Nob3J0OiBbJ+aXpScsICfkuIAnLCAn5LqMJywgJ+S4iScsICflm5snLCAn5LqUJywgJ+WFrSddLFxuXHRcdHJlbGF0aXZlVGltZXM6IHtcblx0XHRcdHRoaXNEYXk6ICdb5LuK5aSpXUEgaGg6bW0nLFxuXHRcdFx0cHJldkRheTogJ1vmmKjlpKldQSBoaDptbScsXG5cdFx0XHRuZXh0RGF5OiAnW+aYjuWkqV1BIGhoOm1tJyxcblx0XHRcdHRoaXNXZWVrOiAnZGRkZEEgaGg6bW0nLFxuXHRcdFx0cGFzdFdlZWs6ICdb5LiKXWRkZGRBIGhoOm1tJyxcblx0XHRcdG90aGVyOiAnWVlZWS1NTS1ERCcsXG5cdFx0fSxcblx0fTtcblx0LyoqXG5cdCAqIE1hcCB1bml0cyB3aXRoIGdldHRlci9zZXR0ZXIgZnVuY3Rpb24gbmFtZXMsIGZvciBgYWRkYCBhbmQgYHN1YnRyYWN0YFxuXHQgKiBtZXRob2RzLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuZGF0ZVxuXHQgKiBAdHlwZSB7b2JqZWN0LjxzdHJpbmcsIHN0cmluZz59XG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBzZWNvbmRzXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtaW51dGVzXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBob3Vyc1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gZGF5c1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gd2Vla3Ncblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IG1vbnRoc1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30geWVhcnNcblx0ICovXG5cdE1vcmViaXRzLmRhdGUudW5pdE1hcCA9IHtcblx0XHRzZWNvbmRzOiAnU2Vjb25kcycsXG5cdFx0bWludXRlczogJ01pbnV0ZXMnLFxuXHRcdGhvdXJzOiAnSG91cnMnLFxuXHRcdGRheXM6ICdEYXRlJyxcblx0XHR3ZWVrczogJ1dlZWsnLFxuXHRcdC8vIE5vdCBhIGZ1bmN0aW9uIGJ1dCBoYW5kbGVkIGluIGBhZGRgIHRocm91Z2ggY3VubmluZyB1c2Ugb2YgbXVsdGlwbGljYXRpb25cblx0XHRtb250aHM6ICdNb250aCcsXG5cdFx0eWVhcnM6ICdGdWxsWWVhcicsXG5cdH07XG5cdE1vcmViaXRzLmRhdGUucHJvdG90eXBlID0ge1xuXHRcdC8qKiBAcmV0dXJucyB7Ym9vbGVhbn0gKi9cblx0XHRpc1ZhbGlkKCkge1xuXHRcdFx0cmV0dXJuICFOdW1iZXIuaXNOYU4odGhpcy5nZXRUaW1lKCkpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHsoRGF0ZXxNb3JlYml0cy5kYXRlKX0gZGF0ZVxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdGlzQmVmb3JlKGRhdGUpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRpbWUoKSA8IGRhdGUuZ2V0VGltZSgpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHsoRGF0ZXxNb3JlYml0cy5kYXRlKX0gZGF0ZVxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdGlzQWZ0ZXIoZGF0ZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VGltZSgpID4gZGF0ZS5nZXRUaW1lKCk7XG5cdFx0fSxcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gKi9cblx0XHRnZXRVVENNb250aE5hbWUoKSB7XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLm1vbnRoc1t0aGlzLmdldFVUQ01vbnRoKCldO1xuXHRcdH0sXG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9ICovXG5cdFx0Z2V0VVRDTW9udGhOYW1lQWJicmV2KCkge1xuXHRcdFx0cmV0dXJuIE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5tb250aHNTaG9ydFt0aGlzLmdldFVUQ01vbnRoKCldO1xuXHRcdH0sXG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9ICovXG5cdFx0Z2V0TW9udGhOYW1lKCkge1xuXHRcdFx0cmV0dXJuIE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5tb250aHNbdGhpcy5nZXRNb250aCgpXTtcblx0XHR9LFxuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSAqL1xuXHRcdGdldE1vbnRoTmFtZUFiYnJldigpIHtcblx0XHRcdHJldHVybiBNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEubW9udGhzU2hvcnRbdGhpcy5nZXRNb250aCgpXTtcblx0XHR9LFxuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSAqL1xuXHRcdGdldFVUQ0RheU5hbWUoKSB7XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLmRheXNbdGhpcy5nZXRVVENEYXkoKV07XG5cdFx0fSxcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gKi9cblx0XHRnZXRVVENEYXlOYW1lQWJicmV2KCkge1xuXHRcdFx0cmV0dXJuIE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5kYXlzU2hvcnRbdGhpcy5nZXRVVENEYXkoKV07XG5cdFx0fSxcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gKi9cblx0XHRnZXREYXlOYW1lKCkge1xuXHRcdFx0cmV0dXJuIE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5kYXlzW3RoaXMuZ2V0RGF5KCldO1xuXHRcdH0sXG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9ICovXG5cdFx0Z2V0RGF5TmFtZUFiYnJldigpIHtcblx0XHRcdHJldHVybiBNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEuZGF5c1Nob3J0W3RoaXMuZ2V0RGF5KCldO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQWRkIGEgZ2l2ZW4gbnVtYmVyIG9mIG1pbnV0ZXMsIGhvdXJzLCBkYXlzLCB3ZWVrcywgbW9udGhzLCBvciB5ZWFycyB0byB0aGUgZGF0ZS5cblx0XHQgKiBUaGlzIGlzIGRvbmUgaW4tcGxhY2UuIFRoZSBtb2RpZmllZCBkYXRlIG9iamVjdCBpcyBhbHNvIHJldHVybmVkLCBhbGxvd2luZyBjaGFpbmluZy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXIgLSBTaG91bGQgYmUgYW4gaW50ZWdlci5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdW5pdFxuXHRcdCAqIEB0aHJvd3MgSWYgaW52YWxpZCBvciB1bnN1cHBvcnRlZCB1bml0IGlzIGdpdmVuLlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5kYXRlfVxuXHRcdCAqL1xuXHRcdGFkZChudW1iZXIsIHVuaXQpIHtcblx0XHRcdGxldCBudW0gPSBOdW1iZXIucGFyc2VJbnQobnVtYmVyLCAxMCk7IC8vIG5vcm1hbGl6ZVxuXHRcdFx0aWYgKE51bWJlci5pc05hTihudW0pKSB7XG5cdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYEludmFsaWQgbnVtYmVyIFwiJHtudW1iZXJ9XCIgcHJvdmlkZWQuYCk7XG5cdFx0XHR9XG5cdFx0XHR1bml0ID0gdW5pdC50b0xvd2VyQ2FzZSgpOyAvLyBub3JtYWxpemVcblx0XHRcdGNvbnN0IHt1bml0TWFwfSA9IE1vcmViaXRzLmRhdGU7XG5cdFx0XHRsZXQgdW5pdE5vcm0gPSB1bml0TWFwW3VuaXRdIHx8IHVuaXRNYXBbYCR7dW5pdH1zYF07IC8vIHNvIHRoYXQgYm90aCBzaW5ndWxhciBhbmQgIHBsdXJhbCBmb3JtcyB3b3JrXG5cdFx0XHRpZiAodW5pdE5vcm0pIHtcblx0XHRcdFx0Ly8gTm8gYnVpbHQtaW4gd2VlayBmdW5jdGlvbnMsIHNvIHJhdGhlciB0aGFuIGJ1aWxkIG91dCBJU08ncyBnZXRXZWVrL3NldFdlZWssIGp1c3QgbXVsdGlwbHlcblx0XHRcdFx0Ly8gUHJvYmFibHkgY2FuJ3QgYmUgdXNlZCBmb3IgSnVsaWFuLT5HcmVnb3JpYW4gY2hhbmdlb3ZlcnMsIGV0Yy5cblx0XHRcdFx0aWYgKHVuaXROb3JtID09PSAnV2VlaycpIHtcblx0XHRcdFx0XHR1bml0Tm9ybSA9ICdEYXRlJztcblx0XHRcdFx0XHRudW0gKj0gNztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzW2BzZXQke3VuaXROb3JtfWBdKHRoaXNbYGdldCR7dW5pdE5vcm19YF0oKSArIG51bSk7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHVuaXQgXCIke3VuaXR9XCI6IE9ubHkgJHtPYmplY3Qua2V5cyh1bml0TWFwKS5qb2luKCcsICcpfSBhcmUgYWxsb3dlZC5gKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFN1YnRyYWN0cyBhIGdpdmVuIG51bWJlciBvZiBtaW51dGVzLCBob3VycywgZGF5cywgd2Vla3MsIG1vbnRocywgb3IgeWVhcnMgdG8gdGhlIGRhdGUuXG5cdFx0ICogVGhpcyBpcyBkb25lIGluLXBsYWNlLiBUaGUgbW9kaWZpZWQgZGF0ZSBvYmplY3QgaXMgYWxzbyByZXR1cm5lZCwgYWxsb3dpbmcgY2hhaW5pbmcuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyIC0gU2hvdWxkIGJlIGFuIGludGVnZXIuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHVuaXRcblx0XHQgKiBAdGhyb3dzIElmIGludmFsaWQgb3IgdW5zdXBwb3J0ZWQgdW5pdCBpcyBnaXZlbi5cblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuZGF0ZX1cblx0XHQgKi9cblx0XHRzdWJ0cmFjdChudW1iZXIsIHVuaXQpIHtcblx0XHRcdHJldHVybiB0aGlzLmFkZCgtbnVtYmVyLCB1bml0KTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEZvcm1hdCB0aGUgZGF0ZSBpbnRvIGEgc3RyaW5nIHBlciB0aGUgZ2l2ZW4gZm9ybWF0IHN0cmluZy5cblx0XHQgKiBSZXBsYWNlbWVudCBzeW50YXggaXMgYSBzdWJzZXQgb2YgdGhhdCBpbiBtb21lbnQuanM6XG5cdFx0ICpcblx0XHQgKiB8IFN5bnRheCB8IE91dHB1dCB8XG5cdFx0ICogfC0tLS0tLS0tfC0tLS0tLS0tfFxuXHRcdCAqIHwgSCB8IEhvdXJzICgyNC1ob3VyKSB8XG5cdFx0ICogfCBISCB8IEhvdXJzICgyNC1ob3VyLCBwYWRkZWQgdG8gMiBkaWdpdHMpIHxcblx0XHQgKiB8IGggfCBIb3VycyAoMTItaG91cikgfFxuXHRcdCAqIHwgaGggfCBIb3VycyAoMTItaG91ciwgcGFkZGVkIHRvIDIgZGlnaXRzKSB8XG5cdFx0ICogfCBBIHwgQU0gb3IgUE0gfFxuXHRcdCAqIHwgbSB8IE1pbnV0ZXMgfFxuXHRcdCAqIHwgbW0gfCBNaW51dGVzIChwYWRkZWQgdG8gMiBkaWdpdHMpIHxcblx0XHQgKiB8IHMgfCBTZWNvbmRzIHxcblx0XHQgKiB8IHNzIHwgU2Vjb25kcyAocGFkZGVkIHRvIDIgZGlnaXRzKSB8XG5cdFx0ICogfCBTU1MgfCBNaWxsaXNlY29uZHMgZnJhZ21lbnQsIDMgZGlnaXRzIHxcblx0XHQgKiB8IGQgfCBEYXkgbnVtYmVyIG9mIHRoZSB3ZWVrIChTdW49MCkgfFxuXHRcdCAqIHwgZGRkIHwgQWJicmV2aWF0ZWQgZGF5IG5hbWUgfFxuXHRcdCAqIHwgZGRkZCB8IEZ1bGwgZGF5IG5hbWUgfFxuXHRcdCAqIHwgRCB8IERhdGUgfFxuXHRcdCAqIHwgREQgfCBEYXRlIChwYWRkZWQgdG8gMiBkaWdpdHMpIHxcblx0XHQgKiB8IE0gfCBNb250aCBudW1iZXIgKDEtaW5kZXhlZCkgfFxuXHRcdCAqIHwgTU0gfCBNb250aCBudW1iZXIgKDEtaW5kZXhlZCwgcGFkZGVkIHRvIDIgZGlnaXRzKSB8XG5cdFx0ICogfCBNTU0gfCBBYmJyZXZpYXRlZCBtb250aCBuYW1lIHxcblx0XHQgKiB8IE1NTU0gfCBGdWxsIG1vbnRoIG5hbWUgfFxuXHRcdCAqIHwgWSB8IFllYXIgfFxuXHRcdCAqIHwgWVkgfCBGaW5hbCB0d28gZGlnaXRzIG9mIHllYXIgKDIwIGZvciAyMDIwLCA0MiBmb3IgMTk0MikgfFxuXHRcdCAqIHwgWVlZWSB8IFllYXIgKHNhbWUgYXMgYFlgKSB8XG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gZm9ybWF0c3RyIC0gRm9ybWF0IHRoZSBkYXRlIGludG8gYSBzdHJpbmcsIHVzaW5nXG5cdFx0ICogdGhlIHJlcGxhY2VtZW50IHN5bnRheC4gIFVzZSBgW2AgYW5kIGBdYCB0byBlc2NhcGUgaXRlbXMuICBJZiBub3Rcblx0XHQgKiBwcm92aWRlZCwgd2lsbCByZXR1cm4gdGhlIElTTy04NjAxLWZvcm1hdHRlZCBzdHJpbmcuXG5cdFx0ICogQHBhcmFtIHsoc3RyaW5nfG51bWJlcil9IFt6b25lPXN5c3RlbV0gLSBgc3lzdGVtYCAoZm9yIGJyb3dzZXItZGVmYXVsdCB0aW1lIHpvbmUpLFxuXHRcdCAqIGB1dGNgLCBvciBzcGVjaWZ5IGEgdGltZSB6b25lIGFzIG51bWJlciBvZiBtaW51dGVzIHJlbGF0aXZlIHRvIFVUQy5cblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdGZvcm1hdChmb3JtYXRzdHIsIHpvbmUpIHtcblx0XHRcdGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcblx0XHRcdFx0cmV0dXJuICdJbnZhbGlkIGRhdGUnOyAvLyBQdXQgdGhlIHRydXRoIG91dCwgcHJlZmVyYWJsZSB0byBcIk5hTk5hTk5hbiBOYU46TmFOXCIgb3Igd2hhdGV2ZXJcblx0XHRcdH1cblxuXHRcdFx0bGV0IHVkYXRlID0gdGhpcztcblx0XHRcdC8vIGNyZWF0ZSBhIG5ldyBkYXRlIG9iamVjdCB0aGF0IHdpbGwgY29udGFpbiB0aGUgZGF0ZSB0byBkaXNwbGF5IGFzIHN5c3RlbSB0aW1lXG5cdFx0XHRpZiAoem9uZSA9PT0gJ3V0YycpIHtcblx0XHRcdFx0dWRhdGUgPSBuZXcgTW9yZWJpdHMuZGF0ZSh0aGlzLmdldFRpbWUoKSkuYWRkKHRoaXMuZ2V0VGltZXpvbmVPZmZzZXQoKSwgJ21pbnV0ZXMnKTtcblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIHpvbmUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdC8vIGNvbnZlcnQgdG8gdXRjLCB0aGVuIGFkZCB0aGUgdXRjIG9mZnNldCBnaXZlblxuXHRcdFx0XHR1ZGF0ZSA9IG5ldyBNb3JlYml0cy5kYXRlKHRoaXMuZ2V0VGltZSgpKS5hZGQodGhpcy5nZXRUaW1lem9uZU9mZnNldCgpICsgem9uZSwgJ21pbnV0ZXMnKTtcblx0XHRcdH1cblx0XHRcdC8vIGRlZmF1bHQgdG8gSVNPU3RyaW5nXG5cdFx0XHRpZiAoIWZvcm1hdHN0cikge1xuXHRcdFx0XHRyZXR1cm4gdWRhdGUudG9JU09TdHJpbmcoKTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHBhZCA9IChudW0sIGxlbikgPT4ge1xuXHRcdFx0XHRsZW4gfHw9IDI7IC8vIFVwIHRvIGxlbmd0aCBvZiAwMCArIDFcblx0XHRcdFx0cmV0dXJuIGAwMCR7bnVtfWAudG9TdHJpbmcoKS5zbGljZSgwIC0gbGVuKTtcblx0XHRcdH07XG5cdFx0XHRjb25zdCBoMjQgPSB1ZGF0ZS5nZXRIb3VycygpO1xuXHRcdFx0Y29uc3QgbSA9IHVkYXRlLmdldE1pbnV0ZXMoKTtcblx0XHRcdGNvbnN0IHMgPSB1ZGF0ZS5nZXRTZWNvbmRzKCk7XG5cdFx0XHRjb25zdCBtcyA9IHVkYXRlLmdldE1pbGxpc2Vjb25kcygpO1xuXHRcdFx0Y29uc3QgRCA9IHVkYXRlLmdldERhdGUoKTtcblx0XHRcdGNvbnN0IE0gPSB1ZGF0ZS5nZXRNb250aCgpICsgMTtcblx0XHRcdGNvbnN0IFkgPSB1ZGF0ZS5nZXRGdWxsWWVhcigpO1xuXHRcdFx0Y29uc3QgaDEyID0gaDI0ICUgMTIgfHwgMTI7XG5cdFx0XHRjb25zdCBhbU9yUG0gPSBoMjQgPj0gMTIgPyAn5LiL5Y2IJyA6ICfkuIrljYgnO1xuXHRcdFx0Y29uc3QgcmVwbGFjZW1lbnRNYXAgPSB7XG5cdFx0XHRcdEhIOiBwYWQoaDI0KSxcblx0XHRcdFx0SDogaDI0LFxuXHRcdFx0XHRoaDogcGFkKGgxMiksXG5cdFx0XHRcdGg6IGgxMixcblx0XHRcdFx0QTogYW1PclBtLFxuXHRcdFx0XHRtbTogcGFkKG0pLFxuXHRcdFx0XHRtLFxuXHRcdFx0XHRzczogcGFkKHMpLFxuXHRcdFx0XHRzLFxuXHRcdFx0XHRTU1M6IHBhZChtcywgMyksXG5cdFx0XHRcdGRkZGQ6IHVkYXRlLmdldERheU5hbWUoKSxcblx0XHRcdFx0ZGRkOiB1ZGF0ZS5nZXREYXlOYW1lQWJicmV2KCksXG5cdFx0XHRcdGQ6IHVkYXRlLmdldERheSgpLFxuXHRcdFx0XHRERDogcGFkKEQpLFxuXHRcdFx0XHRELFxuXHRcdFx0XHRNTU1NOiB1ZGF0ZS5nZXRNb250aE5hbWUoKSxcblx0XHRcdFx0TU1NOiB1ZGF0ZS5nZXRNb250aE5hbWVBYmJyZXYoKSxcblx0XHRcdFx0TU06IHBhZChNKSxcblx0XHRcdFx0TSxcblx0XHRcdFx0WVlZWTogWSxcblx0XHRcdFx0WVk6IHBhZChZICUgMTAwKSxcblx0XHRcdFx0WSxcblx0XHRcdH07XG5cdFx0XHRjb25zdCB1bmJpbmRlciA9IG5ldyBNb3JlYml0cy51bmJpbmRlcihmb3JtYXRzdHIpOyAvLyBlc2NhcGUgc3R1ZmYgYmV0d2VlbiBbLi4uXVxuXHRcdFx0dW5iaW5kZXIudW5iaW5kKFN0cmluZy5yYXdgXFxbYCwgU3RyaW5nLnJhd2BcXF1gKTtcblx0XHRcdHVuYmluZGVyLmNvbnRlbnQgPSB1bmJpbmRlci5jb250ZW50LnJlcGxhY2UoXG5cdFx0XHRcdC8qIFJlZ2V4IG5vdGVzOlxuXHRcdFx0XHQgKiBkKGR7MiwzfSk/IG1hdGNoZXMgZXhhY3RseSAxLCAzIG9yIDQgb2NjdXJyZW5jZXMgb2YgJ2QnICgnZGQnIGlzIHRyZWF0ZWQgYXMgYSBkb3VibGUgbWF0Y2ggb2YgJ2QnKVxuXHRcdFx0XHQgKiBZezEsMn0oWXsyfSk/IG1hdGNoZXMgZXhhY3RseSAxLCAyIG9yIDQgb2NjdXJyZW5jZXMgb2YgJ1knXG5cdFx0XHRcdCAqL1xuXHRcdFx0XHQvSHsxLDJ9fGh7MSwyfXxtezEsMn18c3sxLDJ9fFNTU3xkKGR7MiwzfSk/fER7MSwyfXxNezEsNH18WXsxLDJ9KFl7Mn0pP3xBL2csXG5cdFx0XHRcdChtYXRjaCkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiByZXBsYWNlbWVudE1hcFttYXRjaF07XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0XHRyZXR1cm4gdW5iaW5kZXIucmViaW5kKCkucmVwbGFjZSgvXFxbKC4qPylcXF0vZywgJyQxJyk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBHaXZlcyBhIHJlYWRhYmxlIHJlbGF0aXZlIHRpbWUgc3RyaW5nIHN1Y2ggYXMgXCJZZXN0ZXJkYXkgYXQgNjo0MyBQTVwiIG9yIFwiTGFzdCBUaHVyc2RheSBhdCAxMTo0NSBBTVwiLlxuXHRcdCAqIFNpbWlsYXIgdG8gYGNhbGVuZGFyYCBpbiBtb21lbnQuanMsIGJ1dCB3aXRoIHRpbWUgem9uZSBzdXBwb3J0LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHsoc3RyaW5nfG51bWJlcil9IFt6b25lPXN5c3RlbV0gLSAnc3lzdGVtJyAoZm9yIGJyb3dzZXItZGVmYXVsdCB0aW1lIHpvbmUpLFxuXHRcdCAqICd1dGMnIChmb3IgVVRDKSwgb3Igc3BlY2lmeSBhIHRpbWUgem9uZSBhcyBudW1iZXIgb2YgbWludXRlcyBwYXN0IFVUQy5cblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdGNhbGVuZGFyKHpvbmUpIHtcblx0XHRcdC8vIFplcm8gb3V0IHRoZSBob3VycywgbWludXRlcywgc2Vjb25kcyBhbmQgbWlsbGlzZWNvbmRzIC0ga2VlcGluZyBvbmx5IHRoZSBkYXRlO1xuXHRcdFx0Ly8gZmluZCB0aGUgZGlmZmVyZW5jZS4gTm90ZSB0aGF0IHNldEhvdXJzKCkgcmV0dXJucyB0aGUgc2FtZSB0aGluZyBhcyBnZXRUaW1lKCkuXG5cdFx0XHRjb25zdCBkYXRlRGlmZiA9IChuZXcgRGF0ZSgpLnNldEhvdXJzKDAsIDAsIDAsIDApIC0gbmV3IERhdGUodGhpcykuc2V0SG91cnMoMCwgMCwgMCwgMCkpIC8gOC42NGU3O1xuXHRcdFx0c3dpdGNoICh0cnVlKSB7XG5cdFx0XHRcdGNhc2UgZGF0ZURpZmYgPT09IDA6XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuZm9ybWF0KE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5yZWxhdGl2ZVRpbWVzLnRoaXNEYXksIHpvbmUpO1xuXHRcdFx0XHRjYXNlIGRhdGVEaWZmID09PSAxOlxuXHRcdFx0XHRcdHJldHVybiB0aGlzLmZvcm1hdChNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEucmVsYXRpdmVUaW1lcy5wcmV2RGF5LCB6b25lKTtcblx0XHRcdFx0Y2FzZSBkYXRlRGlmZiA+IDAgJiYgZGF0ZURpZmYgPCA3OlxuXHRcdFx0XHRcdHJldHVybiB0aGlzLmZvcm1hdChNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEucmVsYXRpdmVUaW1lcy5wYXN0V2Vlaywgem9uZSk7XG5cdFx0XHRcdGNhc2UgZGF0ZURpZmYgPT09IC0xOlxuXHRcdFx0XHRcdHJldHVybiB0aGlzLmZvcm1hdChNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEucmVsYXRpdmVUaW1lcy5uZXh0RGF5LCB6b25lKTtcblx0XHRcdFx0Y2FzZSBkYXRlRGlmZiA8IDAgJiYgZGF0ZURpZmYgPiAtNzpcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5mb3JtYXQoTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLnJlbGF0aXZlVGltZXMudGhpc1dlZWssIHpvbmUpO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHJldHVybiB0aGlzLmZvcm1hdChNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEucmVsYXRpdmVUaW1lcy5vdGhlciwgem9uZSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBHZXQgYSByZWd1bGFyIGV4cHJlc3Npb24gdGhhdCBtYXRjaGVzIHdpa2l0ZXh0IHNlY3Rpb24gdGl0bGVzLCBzdWNoXG5cdFx0ICogYXMgYD09RGVjZW1iZXIgMjAxOT09YCBvciBgPT09IEphbiAyMDE4ID09PWAuXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJucyB7UmVnRXhwfVxuXHRcdCAqL1xuXHRcdG1vbnRoSGVhZGVyUmVnZXgoKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFJlZ0V4cChcblx0XHRcdFx0YF4oPT0rKVxcXFxzKiR7dGhpcy5nZXRVVENGdWxsWWVhcigpfeW5tCg/OiR7dGhpcy5nZXRVVENNb250aE5hbWUoKX18JHt0aGlzLmdldFVUQ01vbnRoTmFtZUFiYnJldigpfSlcXFxccypcXFxcMWAsXG5cdFx0XHRcdCdtZydcblx0XHRcdCk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBDcmVhdGVzIGEgd2lraXRleHQgc2VjdGlvbiBoZWFkZXIgd2l0aCB0aGUgbW9udGggYW5kIHllYXIuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gW2xldmVsPTJdIC0gSGVhZGVyIGxldmVsLiAgUGFzcyAwIGZvciBqdXN0IHRoZSB0ZXh0XG5cdFx0ICogd2l0aCBubyB3aWtpdGV4dCBtYXJrZXJzICg9PSkuXG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHRtb250aEhlYWRlcihsZXZlbCkge1xuXHRcdFx0Ly8gRGVmYXVsdCB0byAyLCBidXQgYWxsb3cgZm9yIDAgb3Igc3RyaW5neSBudW1iZXJzXG5cdFx0XHRsZXZlbCA9IE51bWJlci5wYXJzZUludChsZXZlbCwgMTApO1xuXHRcdFx0bGV2ZWwgPSBOdW1iZXIuaXNOYU4obGV2ZWwpID8gMiA6IGxldmVsO1xuXHRcdFx0Y29uc3QgaGVhZGVyID0gJz0nLnJlcGVhdChsZXZlbCk7XG5cdFx0XHRjb25zdCB0ZXh0ID0gYCR7dGhpcy5nZXRVVENGdWxsWWVhcigpfeW5tCR7dGhpcy5nZXRVVENNb250aE5hbWUoKX1gO1xuXHRcdFx0aWYgKGhlYWRlci5sZW5ndGgpIHtcblx0XHRcdFx0Ly8gd2lraXRleHQtZm9ybWF0dGVkIGhlYWRlclxuXHRcdFx0XHRyZXR1cm4gYCR7aGVhZGVyfSAke3RleHR9ICR7aGVhZGVyfWA7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGV4dDsgLy8gSnVzdCB0aGUgc3RyaW5nXG5cdFx0fSxcblx0fTtcblx0Ly8gQWxsb3cgbmF0aXZlIERhdGUucHJvdG90eXBlIG1ldGhvZHMgdG8gYmUgdXNlZCBvbiBNb3JlYml0cy5kYXRlIG9iamVjdHNcblx0Zm9yIChjb25zdCBmdW5jIG9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKERhdGUucHJvdG90eXBlKSkge1xuXHRcdC8vIEV4Y2x1ZGUgbWV0aG9kcyB0aGF0IGNvbGxpZGUgd2l0aCBQYWdlVHJpYWdlJ3MgRGF0ZS5qcyBleHRlcm5hbCwgd2hpY2ggY2xvYmJlcnMgbmF0aXZlIERhdGVcblx0XHRpZiAoIVsnYWRkJywgJ2dldERheU5hbWUnLCAnZ2V0TW9udGhOYW1lJ10uaW5jbHVkZXMoZnVuYykpIHtcblx0XHRcdE1vcmViaXRzLmRhdGUucHJvdG90eXBlW2Z1bmNdID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX2RbZnVuY10oLi4uYXJncyk7XG5cdFx0XHR9O1xuXHRcdH1cblx0fVxuXHQvKiAqKioqKioqKioqKioqKioqIE1vcmViaXRzLndpa2kgKioqKioqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogVmFyaW91cyBvYmplY3RzIGZvciB3aWtpIGVkaXRpbmcgYW5kIEFQSSBhY2Nlc3MsIGluY2x1ZGluZ1xuXHQgKiB7QGxpbmsgTW9yZWJpdHMud2lraS5hcGl9IGFuZCB7QGxpbmsgTW9yZWJpdHMud2lraS5wYWdlfS5cblx0ICpcblx0ICogQG5hbWVzcGFjZSBNb3JlYml0cy53aWtpXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0c1xuXHQgKi9cblx0TW9yZWJpdHMud2lraSA9IHt9O1xuXHQvKipcblx0ICogQGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2YgTW9yZWJpdHMuaXNQYWdlUmVkaXJlY3QgYXMgb2YgTm92ZW1iZXIgMjAyMFxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraVxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdE1vcmViaXRzLndpa2kuaXNQYWdlUmVkaXJlY3QgPSAoKSA9PiB7XG5cdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0J1tNb3JlYml0c10gTk9URTogTW9yZWJpdHMud2lraS5pc1BhZ2VSZWRpcmVjdCBoYXMgYmVlbiBkZXByZWNhdGVkLCB1c2UgTW9yZWJpdHMuaXNQYWdlUmVkaXJlY3QgaW5zdGVhZC4nXG5cdFx0KTtcblx0XHRyZXR1cm4gTW9yZWJpdHMuaXNQYWdlUmVkaXJlY3QoKTtcblx0fTtcblx0LyogKioqKioqKioqKioqKioqKiBNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZCAqKioqKioqKioqKioqKioqICovXG5cdC8qKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraVxuXHQgKiBAdHlwZSB7bnVtYmVyfVxuXHQgKi9cblx0TW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0ID0gMDtcblx0LyoqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpXG5cdCAqIEB0eXBlIHtudW1iZXJ9XG5cdCAqL1xuXHRNb3JlYml0cy53aWtpLm5ick9mQ2hlY2twb2ludHNMZWZ0ID0gMDtcblx0LyoqXG5cdCAqIERpc3BsYXkgbWVzc2FnZSBhbmQvb3IgcmVkaXJlY3QgdG8gcGFnZSB1cG9uIGNvbXBsZXRpb24gb2YgdGFza3MuXG5cdCAqXG5cdCAqIEV2ZXJ5IGNhbGwgdG8gTW9yZWJpdHMud2lraS5hcGkucG9zdCgpIHJlc3VsdHMgaW4gdGhlIGRpc3BhdGNoIG9mIGFuXG5cdCAqIGFzeW5jaHJvbm91cyBjYWxsYmFjay4gRWFjaCBjYWxsYmFjayBjYW4gaW4gdHVybiBtYWtlIGFuIGFkZGl0aW9uYWwgY2FsbCB0b1xuXHQgKiBNb3JlYml0cy53aWtpLmFwaS5wb3N0KCkgdG8gY29udGludWUgYSBwcm9jZXNzaW5nIHNlcXVlbmNlLiBBdCB0aGVcblx0ICogY29uY2x1c2lvbiBvZiB0aGUgZmluYWwgY2FsbGJhY2sgb2YgYSBwcm9jZXNzaW5nIHNlcXVlbmNlLCBpdCBpcyBub3Rcblx0ICogcG9zc2libGUgdG8gc2ltcGx5IHJldHVybiB0byB0aGUgb3JpZ2luYWwgY2FsbGVyIGJlY2F1c2UgdGhlcmUgaXMgbm8gY2FsbFxuXHQgKiBzdGFjayBsZWFkaW5nIGJhY2sgdG8gdGhlIG9yaWdpbmFsIGNvbnRleHQuIEluc3RlYWQsXG5cdCAqIE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLmV2ZW50KCkgaXMgY2FsbGVkIHRvIGRpc3BsYXkgdGhlIHJlc3VsdCB0b1xuXHQgKiB0aGUgdXNlciBhbmQgdG8gcGVyZm9ybSBhbiBvcHRpb25hbCBwYWdlIHJlZGlyZWN0LlxuXHQgKlxuXHQgKiBUaGUgZGV0ZXJtaW5hdGlvbiBvZiB3aGVuIHRvIGNhbGwgTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQuZXZlbnQoKSBpc1xuXHQgKiBtYW5hZ2VkIHRocm91Z2ggdGhlIGdsb2JhbHMgTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0IGFuZFxuXHQgKiBNb3JlYml0cy53aWtpLm5ick9mQ2hlY2twb2ludHNMZWZ0LiBNb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQgaXNcblx0ICogaW5jcmVtZW50ZWQgYXQgdGhlIHN0YXJ0IG9mIGV2ZXJ5IE1vcmViaXRzLndpa2kuYXBpIGNhbGwgYW5kIGRlY3JlbWVudGVkXG5cdCAqIGFmdGVyIHRoZSBjb21wbGV0aW9uIG9mIGEgY2FsbGJhY2sgZnVuY3Rpb24uIElmIGEgY2FsbGJhY2sgZnVuY3Rpb24gZG9lc1xuXHQgKiBub3QgY3JlYXRlIGEgbmV3IE1vcmViaXRzLndpa2kuYXBpIG9iamVjdCBiZWZvcmUgZXhpdGluZywgaXQgaXMgdGhlIGZpbmFsXG5cdCAqIHN0ZXAgaW4gdGhlIHByb2Nlc3NpbmcgY2hhaW4gYW5kIE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLmV2ZW50KCkgd2lsbFxuXHQgKiB0aGVuIGJlIGNhbGxlZC5cblx0ICpcblx0ICogT3B0aW9uYWxseSwgY2FsbGVycyBtYXkgdXNlIE1vcmViaXRzLndpa2kuYWRkQ2hlY2twb2ludCgpIHRvIGluZGljYXRlIHRoYXRcblx0ICogcHJvY2Vzc2luZyBpcyBub3QgY29tcGxldGUgdXBvbiB0aGUgY29uY2x1c2lvbiBvZiB0aGUgZmluYWwgY2FsbGJhY2tcblx0ICogZnVuY3Rpb24uICBUaGlzIGlzIHVzZWQgZm9yIGJhdGNoIG9wZXJhdGlvbnMuIFRoZSBlbmQgb2YgYSBiYXRjaCBpc1xuXHQgKiBzaWduYWxlZCBieSBjYWxsaW5nIE1vcmViaXRzLndpa2kucmVtb3ZlQ2hlY2twb2ludCgpLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3R5cGVvZiBNb3JlYml0c30gc2VsZlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraVxuXHQgKi9cblx0TW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQgPSAoc2VsZikgPT4ge1xuXHRcdGlmICgtLU1vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdCA8PSAwICYmIE1vcmViaXRzLndpa2kubmJyT2ZDaGVja3BvaW50c0xlZnQgPD0gMCkge1xuXHRcdFx0TW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQuZXZlbnQoc2VsZik7XG5cdFx0fVxuXHR9O1xuXHQvLyBDaGFuZ2UgcGVyIGFjdGlvbiB3YW50ZWRcblx0LyoqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpICovXG5cdE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLmV2ZW50ID0gKCkgPT4ge1xuXHRcdGlmIChNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5ub3RpY2UpIHtcblx0XHRcdE1vcmViaXRzLnN0YXR1cy5hY3Rpb25Db21wbGV0ZWQoTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQubm90aWNlKTtcblx0XHR9XG5cdFx0aWYgKE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLnJlZGlyZWN0KSB7XG5cdFx0XHQvLyBpZiBpdCBpc24ndCBhIFVSTCwgbWFrZSBpdCBvbmUuIFRPRE86IFRoaXMgYnJlYWtzIG9uIHRoZSBhcnRpY2xlcyAnaHR0cDovLycsICdmdHA6Ly8nLCBhbmQgc2ltaWxhciBvbmVzLlxuXHRcdFx0aWYgKCEvXlxcdys6XFwvXFwvLy50ZXN0KE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLnJlZGlyZWN0KSkge1xuXHRcdFx0XHRNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5yZWRpcmVjdCA9IG13LnV0aWwuZ2V0VXJsKE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLnJlZGlyZWN0KTtcblx0XHRcdFx0aWYgKE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLmZvbGxvd1JlZGlyZWN0ID09PSBmYWxzZSkge1xuXHRcdFx0XHRcdE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLnJlZGlyZWN0ICs9ICc/cmVkaXJlY3Q9bm8nO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0bG9jYXRpb24gPSBNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5yZWRpcmVjdDtcblx0XHRcdH0sIE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLnRpbWVPdXQpO1xuXHRcdH1cblx0fTtcblx0LyoqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpICovXG5cdE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLnRpbWVPdXQgPVxuXHRcdHdpbmRvdy53cEFjdGlvbkNvbXBsZXRlZFRpbWVPdXQgPT09IHVuZGVmaW5lZCA/IDUwMDAgOiB3aW5kb3cud3BBY3Rpb25Db21wbGV0ZWRUaW1lT3V0O1xuXHQvKiogQG1lbWJlcm9mIE1vcmViaXRzLndpa2kgKi9cblx0TW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQucmVkaXJlY3QgPSBudWxsO1xuXHQvKiogQG1lbWJlcm9mIE1vcmViaXRzLndpa2kgKi9cblx0TW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQubm90aWNlID0gbnVsbDtcblx0LyoqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpICovXG5cdE1vcmViaXRzLndpa2kuYWRkQ2hlY2twb2ludCA9ICgpID0+IHtcblx0XHQrK01vcmViaXRzLndpa2kubmJyT2ZDaGVja3BvaW50c0xlZnQ7XG5cdH07XG5cdC8qKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraSAqL1xuXHRNb3JlYml0cy53aWtpLnJlbW92ZUNoZWNrcG9pbnQgPSAoKSA9PiB7XG5cdFx0aWYgKC0tTW9yZWJpdHMud2lraS5uYnJPZkNoZWNrcG9pbnRzTGVmdCA8PSAwICYmIE1vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdCA8PSAwKSB7XG5cdFx0XHRNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5ldmVudCgpO1xuXHRcdH1cblx0fTtcblx0LyogKioqKioqKioqKioqKioqKiBNb3JlYml0cy53aWtpLmFwaSAqKioqKioqKioqKioqKioqICovXG5cdC8qKlxuXHQgKiBBbiBlYXN5IHdheSB0byB0YWxrIHRvIHRoZSBNZWRpYVdpa2kgQVBJLiAgQWNjZXB0cyBlaXRoZXIganNvbiBvciB4bWxcblx0ICogKGRlZmF1bHQpIGZvcm1hdHM7IGlmIGpzb24gaXMgc2VsZWN0ZWQsIHdpbGwgZGVmYXVsdCB0byBgZm9ybWF0dmVyc2lvbj0yYFxuXHQgKiB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC4gIFNpbWlsYXJseSwgZW5mb3JjZXMgbmV3ZXIgYGVycm9yZm9ybWF0YHMsXG5cdCAqIGRlZmF1bHRpbmcgdG8gYGh0bWxgIGlmIHVuc3BlY2lmaWVkLiAgYHVzZWxhbmdgIGVuZm9yY2VkIHRvIHRoZSB3aWtpJ3Ncblx0ICogY29udGVudCBsYW5ndWFnZS5cblx0ICpcblx0ICogSW4gbmV3IGNvZGUsIHRoZSB1c2Ugb2YgdGhlIGxhc3QgMyBwYXJhbWV0ZXJzIHNob3VsZCBiZSBhdm9pZGVkLCBpbnN0ZWFkXG5cdCAqIHVzZSB7QGxpbmsgTW9yZWJpdHMud2lraS5hcGkjc2V0U3RhdHVzRWxlbWVudHxzZXRTdGF0dXNFbGVtZW50KCl9IHRvIGJpbmRcblx0ICogdGhlIHN0YXR1cyBlbGVtZW50IChpZiBuZWVkZWQpIGFuZCB1c2UgYC50aGVuKClgIG9yIGAuY2F0Y2goKWAgb24gdGhlXG5cdCAqIHByb21pc2UgcmV0dXJuZWQgYnkgYHBvc3QoKWAsIHJhdGhlciB0aGFuIHNwZWNpZnkgdGhlIGBvblN1Y2Nlc3NgIG9yXG5cdCAqIGBvbkZhaWx1cmVgIGNhbGxiYWNrcy5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2lcblx0ICogQGNsYXNzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjdXJyZW50QWN0aW9uIC0gVGhlIGN1cnJlbnQgYWN0aW9uIChyZXF1aXJlZCkuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBxdWVyeSAtIFRoZSBxdWVyeSAocmVxdWlyZWQpLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25TdWNjZXNzXSAtIFRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gcmVxdWVzdCBpcyBzdWNjZXNzZnVsLlxuXHQgKiBAcGFyYW0ge01vcmViaXRzLnN0YXR1c30gW3N0YXR1c0VsZW1lbnRdIC0gQSBNb3JlYml0cy5zdGF0dXMgb2JqZWN0IHRvIHVzZSBmb3Igc3RhdHVzIG1lc3NhZ2VzLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25FcnJvcl0gLSBUaGUgZnVuY3Rpb24gdG8gY2FsbCBpZiBhbiBlcnJvciBvY2N1cnMuXG5cdCAqL1xuXHRNb3JlYml0cy53aWtpLmFwaSA9IGZ1bmN0aW9uIChjdXJyZW50QWN0aW9uLCBxdWVyeSwgb25TdWNjZXNzLCBzdGF0dXNFbGVtZW50LCBvbkVycm9yKSB7XG5cdFx0dGhpcy5jdXJyZW50QWN0aW9uID0gY3VycmVudEFjdGlvbjtcblx0XHR0aGlzLnF1ZXJ5ID0gcXVlcnk7XG5cdFx0dGhpcy5xdWVyeS5hc3NlcnQgPSAndXNlcic7XG5cdFx0Ly8gRW5mb3JjZSBuZXdlciBlcnJvciBmb3JtYXRzLCBwcmVmZXJyaW5nIGh0bWxcblx0XHRpZiAoIXF1ZXJ5LmVycm9yZm9ybWF0IHx8ICFbJ3dpa2l0ZXh0JywgJ3BsYWludGV4dCddLmluY2x1ZGVzKHF1ZXJ5LmVycm9yZm9ybWF0KSkge1xuXHRcdFx0dGhpcy5xdWVyeS5lcnJvcmZvcm1hdCA9ICdodG1sJztcblx0XHR9XG5cdFx0Ly8gRXhwbGljaXRseSB1c2UgdGhlIHdpa2kncyBjb250ZW50IGxhbmd1YWdlIHRvIG1pbmltaXplIGNvbmZ1c2lvbixcblx0XHQvLyBzZWUgIzExNzkgZm9yIGRpc2N1c3Npb25cblx0XHR0aGlzLnF1ZXJ5LnVzZWxhbmcgfHw9ICdjb250ZW50JzsgLy8gVXNlIHdnVXNlckxhbmd1YWdlIGZvciBwcmV2aWV3XG5cdFx0dGhpcy5xdWVyeS5lcnJvcmxhbmcgPSAndXNlbGFuZyc7XG5cdFx0dGhpcy5xdWVyeS5lcnJvcnN1c2Vsb2NhbCA9IDE7XG5cdFx0dGhpcy5vblN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0dGhpcy5vbkVycm9yID0gb25FcnJvcjtcblx0XHRpZiAoc3RhdHVzRWxlbWVudCkge1xuXHRcdFx0dGhpcy5zZXRTdGF0dXNFbGVtZW50KHN0YXR1c0VsZW1lbnQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnN0YXRlbGVtID0gbmV3IE1vcmViaXRzLnN0YXR1cyhjdXJyZW50QWN0aW9uKTtcblx0XHR9XG5cdFx0Ly8gSlNPTiBpcyB1c2VkIHRocm91Z2hvdXQgTW9yZWJpdHMvVHdpbmtsZSwgYnV0IHhtbCByZW1haW5zIHRoZSBkZWZhdWx0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuXHRcdGlmICghcXVlcnkuZm9ybWF0KSB7XG5cdFx0XHR0aGlzLnF1ZXJ5LmZvcm1hdCA9ICd4bWwnO1xuXHRcdH0gZWxzZSBpZiAocXVlcnkuZm9ybWF0ID09PSAnanNvbicgJiYgIXF1ZXJ5LmZvcm1hdHZlcnNpb24pIHtcblx0XHRcdHRoaXMucXVlcnkuZm9ybWF0dmVyc2lvbiA9ICcyJztcblx0XHR9IGVsc2UgaWYgKCFbJ3htbCcsICdqc29uJ10uaW5jbHVkZXMocXVlcnkuZm9ybWF0KSkge1xuXHRcdFx0dGhpcy5zdGF0ZWxlbS5lcnJvcignSW52YWxpZCBBUEkgZm9ybWF0OiBvbmx5IHhtbCBhbmQganNvbiBhcmUgc3VwcG9ydGVkLicpO1xuXHRcdH1cblx0XHQvLyBJZ25vcmUgdGFncyBmb3IgcXVlcmllcyBhbmQgbW9zdCBjb21tb24gdW5zdXBwb3J0ZWQgYWN0aW9ucywgcHJvZHVjZXMgd2FybmluZ3Ncblx0XHRpZiAocXVlcnkuYWN0aW9uICYmIFsncXVlcnknLCAnd2F0Y2gnXS5pbmNsdWRlcyhxdWVyeS5hY3Rpb24pKSB7XG5cdFx0XHRkZWxldGUgcXVlcnkudGFncztcblx0XHR9IGVsc2UgaWYgKCFxdWVyeS50YWdzICYmIG1vcmViaXRzV2lraUNoYW5nZVRhZykge1xuXHRcdFx0cXVlcnkudGFncyA9IG1vcmViaXRzV2lraUNoYW5nZVRhZztcblx0XHR9XG5cdH07XG5cdE1vcmViaXRzLndpa2kuYXBpLnByb3RvdHlwZSA9IHtcblx0XHRjdXJyZW50QWN0aW9uOiAnJyxcblx0XHRvblN1Y2Nlc3M6IG51bGwsXG5cdFx0b25FcnJvcjogbnVsbCxcblx0XHRwYXJlbnQ6IHdpbmRvdyxcblx0XHQvLyB1c2UgZ2xvYmFsIGNvbnRleHQgaWYgdGhlcmUgaXMgbm8gcGFyZW50IG9iamVjdFxuXHRcdHF1ZXJ5OiBudWxsLFxuXHRcdHJlc3BvbnNlOiBudWxsLFxuXHRcdHJlc3BvbnNlWE1MOiBudWxsLFxuXHRcdC8vIHVzZSBgcmVzcG9uc2VgIGluc3RlYWQ7IHJldGFpbmVkIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuXHRcdHN0YXRlbGVtOiBudWxsLFxuXHRcdC8vIHRoaXMgbm9uLXN0YW5kYXJkIG5hbWUga2VwdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcblx0XHRzdGF0dXNUZXh0OiBudWxsLFxuXHRcdC8vIHJlc3VsdCByZWNlaXZlZCBmcm9tIHRoZSBBUEksIG5vcm1hbGx5IFwic3VjY2Vzc1wiIG9yIFwiZXJyb3JcIlxuXHRcdGVycm9yQ29kZTogbnVsbCxcblx0XHQvLyBzaG9ydCB0ZXh0IGVycm9yIGNvZGUsIGlmIGFueSwgYXMgZG9jdW1lbnRlZCBpbiB0aGUgTWVkaWFXaWtpIEFQSVxuXHRcdGVycm9yVGV4dDogbnVsbCxcblx0XHQvLyBmdWxsIGVycm9yIGRlc2NyaXB0aW9uLCBpZiBhbnlcblx0XHRiYWR0b2tlblJldHJ5OiBmYWxzZSxcblx0XHQvLyBzZXQgdG8gdHJ1ZSBpZiB0aGlzIG9uIGEgcmV0cnkgYXR0ZW1wdGVkIGFmdGVyIGEgYmFkdG9rZW4gZXJyb3Jcblx0XHQvKipcblx0XHQgKiBLZWVwIHRyYWNrIG9mIHBhcmVudCBvYmplY3QgZm9yIGNhbGxiYWNrcy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7Kn0gcGFyZW50XG5cdFx0ICovXG5cdFx0c2V0UGFyZW50KHBhcmVudCkge1xuXHRcdFx0dGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cdFx0fSxcblx0XHQvKiogQHBhcmFtIHtNb3JlYml0cy5zdGF0dXN9IHN0YXR1c0VsZW1lbnQgKi9cblx0XHRzZXRTdGF0dXNFbGVtZW50KHN0YXR1c0VsZW1lbnQpIHtcblx0XHRcdHRoaXMuc3RhdGVsZW0gPSBzdGF0dXNFbGVtZW50O1xuXHRcdFx0dGhpcy5zdGF0ZWxlbS5zdGF0dXModGhpcy5jdXJyZW50QWN0aW9uKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIENhcnJ5IG91dCB0aGUgcmVxdWVzdC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsZXJBamF4UGFyYW1ldGVycyAtIERvIG5vdCBzcGVjaWZ5IGEgcGFyYW1ldGVyIHVubGVzcyB5b3UgcmVhbGx5XG5cdFx0ICogcmVhbGx5IHdhbnQgdG8gZ2l2ZSBqUXVlcnkgc29tZSBleHRyYSBwYXJhbWV0ZXJzLlxuXHRcdCAqIEByZXR1cm5zIHtwcm9taXNlfSAtIEEgalF1ZXJ5IHByb21pc2Ugb2JqZWN0IHRoYXQgaXMgcmVzb2x2ZWQgb3IgcmVqZWN0ZWQgd2l0aCB0aGUgYXBpIG9iamVjdC5cblx0XHQgKi9cblx0XHRwb3N0KGNhbGxlckFqYXhQYXJhbWV0ZXJzKSB7XG5cdFx0XHQrK01vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdDtcblx0XHRcdGNvbnN0IHF1ZXJ5U3RyaW5nQXJyID0gW107XG5cdFx0XHRmb3IgKGNvbnN0IFtpLCB2YWxdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMucXVlcnkpKSB7XG5cdFx0XHRcdGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcblx0XHRcdFx0XHRxdWVyeVN0cmluZ0FycltxdWVyeVN0cmluZ0Fyci5sZW5ndGhdID1cblx0XHRcdFx0XHRcdGAke2VuY29kZVVSSUNvbXBvbmVudChpKX09JHt2YWwubWFwKGVuY29kZVVSSUNvbXBvbmVudCkuam9pbignfCcpfWA7XG5cdFx0XHRcdH0gZWxzZSBpZiAodmFsICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRxdWVyeVN0cmluZ0FycltxdWVyeVN0cmluZ0Fyci5sZW5ndGhdID0gYCR7ZW5jb2RlVVJJQ29tcG9uZW50KGkpfT0ke2VuY29kZVVSSUNvbXBvbmVudCh2YWwpfWA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGNvbnN0IHF1ZXJ5U3RyaW5nID0gcXVlcnlTdHJpbmdBcnIuam9pbignJicpLnJlcGxhY2UoL14oLio/KShcXGJ0b2tlbj1bXiZdKikmKC4qKS8sICckMSQzJiQyJyk7XG5cdFx0XHQvLyB0b2tlbiBzaG91bGQgYWx3YXlzIGJlIHRoZSBsYXN0IGl0ZW0gaW4gdGhlIHF1ZXJ5IHN0cmluZyAoYnVnIFRXLUItMDAxMylcblx0XHRcdGNvbnN0IGFqYXhwYXJhbXMgPSB7XG5cdFx0XHRcdGNvbnRleHQ6IHRoaXMsXG5cdFx0XHRcdHR5cGU6IHRoaXMucXVlcnkuYWN0aW9uID09PSAncXVlcnknID8gJ0dFVCcgOiAnUE9TVCcsXG5cdFx0XHRcdHVybDogbXcudXRpbC53aWtpU2NyaXB0KCdhcGknKSxcblx0XHRcdFx0ZGF0YTogcXVlcnlTdHJpbmcsXG5cdFx0XHRcdGRhdGFUeXBlOiB0aGlzLnF1ZXJ5LmZvcm1hdCxcblx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdCdBcGktVXNlci1BZ2VudCc6IG1vcmViaXRzV2lraUFwaVVzZXJBZ2VudCxcblx0XHRcdFx0fSxcblx0XHRcdFx0Li4uY2FsbGVyQWpheFBhcmFtZXRlcnMsXG5cdFx0XHR9O1xuXHRcdFx0cmV0dXJuICQuYWpheChhamF4cGFyYW1zKS50aGVuKFxuXHRcdFx0XHRmdW5jdGlvbiBvbkFQSXN1Y2Nlc3MocmVzcG9uc2UsIHN0YXR1c1RleHQpIHtcblx0XHRcdFx0XHR0aGlzLnN0YXR1c1RleHQgPSBzdGF0dXNUZXh0O1xuXHRcdFx0XHRcdHRoaXMucmVzcG9uc2UgPSByZXNwb25zZTtcblx0XHRcdFx0XHR0aGlzLnJlc3BvbnNlWE1MID0gcmVzcG9uc2U7XG5cdFx0XHRcdFx0Ly8gTGltaXQgdG8gZmlyc3QgZXJyb3Jcblx0XHRcdFx0XHRpZiAodGhpcy5xdWVyeS5mb3JtYXQgPT09ICdqc29uJykge1xuXHRcdFx0XHRcdFx0dGhpcy5lcnJvckNvZGUgPSByZXNwb25zZS5lcnJvcnMgJiYgcmVzcG9uc2UuZXJyb3JzWzBdLmNvZGU7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5xdWVyeS5lcnJvcmZvcm1hdCA9PT0gJ2h0bWwnKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuZXJyb3JUZXh0ID0gcmVzcG9uc2UuZXJyb3JzICYmIHJlc3BvbnNlLmVycm9yc1swXS5odG1sO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLnF1ZXJ5LmVycm9yZm9ybWF0ID09PSAnd2lraXRleHQnIHx8IHRoaXMucXVlcnkuZXJyb3Jmb3JtYXQgPT09ICdwbGFpbnRleHQnKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuZXJyb3JUZXh0ID0gcmVzcG9uc2UuZXJyb3JzICYmIHJlc3BvbnNlLmVycm9yc1swXS50ZXh0O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLmVycm9yQ29kZSA9ICQocmVzcG9uc2UpLmZpbmQoJ2Vycm9ycyBlcnJvcicpLmVxKDApLmF0dHIoJ2NvZGUnKTtcblx0XHRcdFx0XHRcdC8vIFN1ZmZpY2llbnQgZm9yIGh0bWwsIHdpa2l0ZXh0LCBvciBwbGFpbnRleHQgZXJyb3Jmb3JtYXRzXG5cdFx0XHRcdFx0XHR0aGlzLmVycm9yVGV4dCA9ICQocmVzcG9uc2UpLmZpbmQoJ2Vycm9ycyBlcnJvcicpLmVxKDApLnRleHQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiB0aGlzLmVycm9yQ29kZSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRcdC8vIHRoZSBBUEkgZGlkbid0IGxpa2Ugd2hhdCB3ZSB0b2xkIGl0LCBlLmcuLCBiYWQgZWRpdCB0b2tlbiBvciBhbiBlcnJvciBjcmVhdGluZyBhIHBhZ2Vcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLnJldHVybkVycm9yKGNhbGxlckFqYXhQYXJhbWV0ZXJzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gaW52b2tlIHN1Y2Nlc3MgY2FsbGJhY2sgaWYgb25lIHdhcyBzdXBwbGllZFxuXHRcdFx0XHRcdGlmICh0aGlzLm9uU3VjY2Vzcykge1xuXHRcdFx0XHRcdFx0Ly8gc2V0IHRoZSBjYWxsYmFjayBjb250ZXh0IHRvIHRoaXMucGFyZW50IGZvciBuZXcgY29kZSBhbmQgc3VwcGx5IHRoZSBBUEkgb2JqZWN0XG5cdFx0XHRcdFx0XHQvLyBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlIGNhbGxiYWNrIChmb3IgbGVnYWN5IGNvZGUpXG5cdFx0XHRcdFx0XHR0aGlzLm9uU3VjY2Vzcy5jYWxsKHRoaXMucGFyZW50LCB0aGlzKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZWxlbS5pbmZvKCflrozmiJAnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0TW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQoKTtcblx0XHRcdFx0XHRyZXR1cm4gJC5EZWZlcnJlZCgpLnJlc29sdmVXaXRoKHRoaXMucGFyZW50LCBbdGhpc10pO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQvLyBvbmx5IG5ldHdvcmsgYW5kIHNlcnZlciBlcnJvcnMgcmVhY2ggaGVyZSAtIGNvbXBsYWludHMgZnJvbSB0aGUgQVBJIGl0c2VsZiBhcmUgY2F1Z2h0IGluIHN1Y2Nlc3MoKVxuXHRcdFx0XHRmdW5jdGlvbiBvbkFQSWZhaWx1cmUoZXJyb3IsIHN0YXR1c1RleHQsIGVycm9yVGhyb3duKSB7XG5cdFx0XHRcdFx0dGhpcy5zdGF0dXNUZXh0ID0gc3RhdHVzVGV4dDtcblx0XHRcdFx0XHR0aGlzLmVycm9yVGhyb3duID0gZXJyb3JUaHJvd247IC8vIGZyZXF1ZW50bHkgdW5kZWZpbmVkXG5cdFx0XHRcdFx0dGhpcy5lcnJvclRleHQgPVxuXHRcdFx0XHRcdFx0c3RhdHVzVGV4dCArXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+WcqOiwg+eUqEFQSeaXtuWPkeeUn+S6humUmeivr+KAnCcsICflnKjlkbzlj6tBUEnmmYLnmbznlJ/kuobpjK/oqqTjgIwnKSArXG5cdFx0XHRcdFx0XHRlcnJvci5zdGF0dXNUZXh0ICtcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn4oCd44CCJywgJ+OAjeOAgicpO1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLnJldHVybkVycm9yKCk7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fSxcblx0XHRyZXR1cm5FcnJvcihjYWxsZXJBamF4UGFyYW1ldGVycykge1xuXHRcdFx0aWYgKHRoaXMuZXJyb3JDb2RlID09PSAnYmFkdG9rZW4nICYmICF0aGlzLmJhZHRva2VuUmV0cnkpIHtcblx0XHRcdFx0dGhpcy5zdGF0ZWxlbS53YXJuKHdpbmRvdy53Z1VMUygn5peg5pWI5Luk54mM77yM6I635Y+W5paw55qE5Luk54mM5bm26YeN6K+V4oCm4oCmJywgJ+eEoeaViOasiuadlu+8jOWPluW+l+aWsOeahOasiuadluS4pumHjeippuKApuKApicpKTtcblx0XHRcdFx0dGhpcy5iYWR0b2tlblJldHJ5ID0gdHJ1ZTtcblx0XHRcdFx0Ly8gR2V0IGEgbmV3IENTUkYgdG9rZW4gYW5kIHJldHJ5LiBJZiB0aGUgb3JpZ2luYWwgYWN0aW9uIG5lZWRzIGEgZGlmZmVyZW50XG5cdFx0XHRcdC8vIHR5cGUgb2YgYWN0aW9uIHRoYW4gQ1NSRiwgd2UgZG8gb25lIHBvaW50bGVzcyByZXRyeSBiZWZvcmUgYmFpbGluZyBvdXRcblx0XHRcdFx0cmV0dXJuIE1vcmViaXRzLndpa2kuYXBpLmdldFRva2VuKCkudGhlbigodG9rZW4pID0+IHtcblx0XHRcdFx0XHR0aGlzLnF1ZXJ5LnRva2VuID0gdG9rZW47XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMucG9zdChjYWxsZXJBamF4UGFyYW1ldGVycyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZWxlbS5lcnJvcihgJHt0aGlzLmVycm9yVGV4dH3vvIgke3RoaXMuZXJyb3JDb2Rlfe+8iWApO1xuXHRcdFx0Ly8gaW52b2tlIGZhaWx1cmUgY2FsbGJhY2sgaWYgb25lIHdhcyBzdXBwbGllZFxuXHRcdFx0aWYgKHRoaXMub25FcnJvcikge1xuXHRcdFx0XHQvLyBzZXQgdGhlIGNhbGxiYWNrIGNvbnRleHQgdG8gdGhpcy5wYXJlbnQgZm9yIG5ldyBjb2RlIGFuZCBzdXBwbHkgdGhlIEFQSSBvYmplY3Rcblx0XHRcdFx0Ly8gYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBjYWxsYmFjayBmb3IgbGVnYWN5IGNvZGVcblx0XHRcdFx0dGhpcy5vbkVycm9yLmNhbGwodGhpcy5wYXJlbnQsIHRoaXMpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gZG9uJ3QgY29tcGxldGUgdGhlIGFjdGlvbiBzbyB0aGF0IHRoZSBlcnJvciByZW1haW5zIGRpc3BsYXllZFxuXHRcdFx0cmV0dXJuICQuRGVmZXJyZWQoKS5yZWplY3RXaXRoKHRoaXMucGFyZW50LCBbdGhpc10pO1xuXHRcdH0sXG5cdFx0Z2V0U3RhdHVzRWxlbWVudCgpIHtcblx0XHRcdHJldHVybiB0aGlzLnN0YXRlbGVtO1xuXHRcdH0sXG5cdFx0Z2V0RXJyb3JDb2RlKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZXJyb3JDb2RlO1xuXHRcdH0sXG5cdFx0Z2V0RXJyb3JUZXh0KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZXJyb3JUZXh0O1xuXHRcdH0sXG5cdFx0Z2V0WE1MKCkge1xuXHRcdFx0Ly8gcmV0YWluZWQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LCB1c2UgZ2V0UmVzcG9uc2UoKSBpbnN0ZWFkXG5cdFx0XHRyZXR1cm4gdGhpcy5yZXNwb25zZVhNTDtcblx0XHR9LFxuXHRcdGdldFJlc3BvbnNlKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmVzcG9uc2U7XG5cdFx0fSxcblx0fTtcblx0LyoqXG5cdCAqIFJldHJpZXZlcyB3aWtpdGV4dCBmcm9tIGEgcGFnZS4gQ2FjaGluZyBlbmFibGVkLCBkdXJhdGlvbiAxIGRheS5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlXG5cdCAqL1xuXHRNb3JlYml0cy53aWtpLmdldENhY2hlZEpzb24gPSAodGl0bGUpID0+IHtcblx0XHRjb25zdCBxdWVyeSA9IHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdFx0dGl0bGVzOiB0aXRsZSxcblx0XHRcdHJ2c2xvdHM6ICdtYWluJyxcblx0XHRcdHJ2cHJvcDogJ2NvbnRlbnQnLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRzbWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRtYXhhZ2U6ICczNjAwJyxcblx0XHR9O1xuXG5cdFx0cmV0dXJuIG5ldyBNb3JlYml0cy53aWtpLmFwaSgnJywgcXVlcnkpLnBvc3QoKS50aGVuKChhcGlvYmopID0+IHtcblx0XHRcdGFwaW9iai5nZXRTdGF0dXNFbGVtZW50KCkudW5saW5rKCk7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGFwaW9iai5nZXRSZXNwb25zZSgpO1xuXHRcdFx0Y29uc3Qgd2lraXRleHQgPSByZXNwb25zZS5xdWVyeS5wYWdlc1swXS5yZXZpc2lvbnNbMF0uc2xvdHMubWFpbi5jb250ZW50O1xuXHRcdFx0cmV0dXJuIEpTT04ucGFyc2Uod2lraXRleHQpO1xuXHRcdH0pO1xuXHR9O1xuXHRsZXQgbW9yZWJpdHNXaWtpQXBpVXNlckFnZW50ID0gJ1FpdXdlbi8xLjEgKG1vcmViaXRzLmpzKSc7XG5cdC8qKlxuXHQgKiBTZXQgdGhlIGN1c3RvbSB1c2VyIGFnZW50IGhlYWRlciwgd2hpY2ggaXMgdXNlZCBmb3Igc2VydmVyLXNpZGUgbG9nZ2luZy5cblx0ICogTm90ZSB0aGF0IGRvaW5nIHNvIHdpbGwgc2V0IHRoZSB1c2VyYWdlbnQgZm9yIGV2ZXJ5IGBNb3JlYml0cy53aWtpLmFwaWBcblx0ICogcHJvY2VzcyBwZXJmb3JtZWQgdGhlcmVhZnRlci5cblx0ICpcblx0ICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9saXN0cy53aWtpbWVkaWEub3JnL3BpcGVybWFpbC9tZWRpYXdpa2ktYXBpLWFubm91bmNlLzIwMTQtTm92ZW1iZXIvMDAwMDc1Lmh0bWx9XG5cdCAqIGZvciBvcmlnaW5hbCBhbm5vdW5jZW1lbnQuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpLmFwaVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW3VhPVlzQXJjaGl2ZXMvMS4xIChtb3JlYml0cy5qcyldIC0gVXNlciBhZ2VudC4gIFRoZSBkZWZhdWx0XG5cdCAqIHZhbHVlIG9mIGBtb3JlYml0cy5qc2Agd2lsbCBiZSBhcHBlbmRlZCB0byBhbnkgcHJvdmlkZWRcblx0ICogdmFsdWUuXG5cdCAqL1xuXHRNb3JlYml0cy53aWtpLmFwaS5zZXRBcGlVc2VyQWdlbnQgPSAodWEpID0+IHtcblx0XHRtb3JlYml0c1dpa2lBcGlVc2VyQWdlbnQgPSBgWXNBcmNoaXZlcy8xLjEgKG1vcmViaXRzLmpzJHt1YSA/IGA7ICR7dWF9YCA6ICcnfSlgO1xuXHR9O1xuXHQvKipcblx0ICogQ2hhbmdlL3JldmlzaW9uIHRhZyBhcHBsaWVkIHRvIE1vcmViaXRzIGFjdGlvbnMgd2hlbiBubyBvdGhlciB0YWdzIGFyZSBzcGVjaWZpZWQuXG5cdCAqIFVudXNlZCBieSBkZWZhdWx0LlxuXHQgKlxuXHQgKiBAY29uc3RhbnRcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2kuYXBpXG5cdCAqIEB0eXBlIHtzdHJpbmd9XG5cdCAqL1xuXHRjb25zdCBtb3JlYml0c1dpa2lDaGFuZ2VUYWcgPSAnJztcblx0LyoqXG5cdCAqIEdldCBhIG5ldyBDU1JGIHRva2VuIG9uIGVuY291bnRlcmluZyB0b2tlbiBlcnJvcnMuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpLmFwaVxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfSBNZWRpYVdpa2kgQ1NSRiB0b2tlbi5cblx0ICovXG5cdE1vcmViaXRzLndpa2kuYXBpLmdldFRva2VuID0gKCkgPT4ge1xuXHRcdGNvbnN0IHRva2VuQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKHdpbmRvdy53Z1VMUygn6I635Y+W5Luk54mMJywgJ+WPluW+l+asiuadlicpLCB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRtZXRhOiAndG9rZW5zJyxcblx0XHRcdHR5cGU6ICdjc3JmJyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdH0pO1xuXHRcdHJldHVybiB0b2tlbkFwaS5wb3N0KCkudGhlbigoYXBpb2JqKSA9PiB7XG5cdFx0XHRyZXR1cm4gYXBpb2JqLnJlc3BvbnNlLnF1ZXJ5LnRva2Vucy5jc3JmdG9rZW47XG5cdFx0fSk7XG5cdH07XG5cdC8qICoqKioqKioqKioqKioqKiogTW9yZWJpdHMud2lraS5wYWdlICoqKioqKioqKioqKioqKiogKi9cblx0LyoqXG5cdCAqIFVzZSB0aGUgTWVkaWFXaWtpIEFQSSB0byBsb2FkIGEgcGFnZSBhbmQgb3B0aW9uYWxseSBlZGl0IGl0LCBtb3ZlIGl0LCBldGMuXG5cdCAqXG5cdCAqIENhbGxlcnMgYXJlIG5vdCBwZXJtaXR0ZWQgdG8gZGlyZWN0bHkgYWNjZXNzIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgY2xhc3MhXG5cdCAqIEFsbCBwcm9wZXJ0eSBhY2Nlc3MgaXMgdGhyb3VnaCB0aGUgYXBwcm9wcmlhdGUgZ2V0X19fKCkgb3Igc2V0X19fKCkgbWV0aG9kLlxuXHQgKlxuXHQgKiBDYWxsZXJzIHNob3VsZCBzZXQge0BsaW5rIE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLm5vdGljZX0gYW5kIHtAbGluayBNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5yZWRpcmVjdH1cblx0ICogYmVmb3JlIHRoZSBmaXJzdCBjYWxsIHRvIHtAbGluayBNb3JlYml0cy53aWtpLnBhZ2UubG9hZCgpfS5cblx0ICpcblx0ICogRWFjaCBvZiB0aGUgY2FsbGJhY2sgZnVuY3Rpb25zIHRha2VzIG9uZSBwYXJhbWV0ZXIsIHdoaWNoIGlzIGFcblx0ICogcmVmZXJlbmNlIHRvIHRoZSBNb3JlYml0cy53aWtpLnBhZ2Ugb2JqZWN0IHRoYXQgcmVnaXN0ZXJlZCB0aGUgY2FsbGJhY2suXG5cdCAqIENhbGxiYWNrIGZ1bmN0aW9ucyBtYXkgaW52b2tlIGFueSBNb3JlYml0cy53aWtpLnBhZ2UgcHJvdG90eXBlIG1ldGhvZCB1c2luZyB0aGlzIHJlZmVyZW5jZS5cblx0ICpcblx0ICpcblx0ICogQ2FsbCBzZXF1ZW5jZSBmb3IgY29tbW9uIG9wZXJhdGlvbnMgKG9wdGlvbmFsIGZpbmFsIHVzZXIgY2FsbGJhY2tzIG5vdCBzaG93bik6XG5cdCAqXG5cdCAqIC0gRWRpdCBjdXJyZW50IGNvbnRlbnRzIG9mIGEgcGFnZSAobm8gZWRpdCBjb25mbGljdCk6XG5cdCAqIGAubG9hZCh1c2VyVGV4dEVkaXRDYWxsYmFjaykgLT4gY3R4LmxvYWRBcGkucG9zdCgpIC0+XG5cdCAqIGN0eC5sb2FkQXBpLnBvc3Quc3VjY2VzcygpIC0+IGN0eC5mbkxvYWRTdWNjZXNzKCkgLT4gdXNlclRleHRFZGl0Q2FsbGJhY2soKSAtPlxuXHQgKiAuc2F2ZSgpIC0+IGN0eC5zYXZlQXBpLnBvc3QoKSAtPiBjdHgubG9hZEFwaS5wb3N0LnN1Y2Nlc3MoKSAtPiBjdHguZm5TYXZlU3VjY2VzcygpYFxuXHQgKlxuXHQgKiAtIEVkaXQgY3VycmVudCBjb250ZW50cyBvZiBhIHBhZ2UgKHdpdGggZWRpdCBjb25mbGljdCk6XG5cdCAqIGAubG9hZCh1c2VyVGV4dEVkaXRDYWxsYmFjaykgLT4gY3R4LmxvYWRBcGkucG9zdCgpIC0+XG5cdCAqIGN0eC5sb2FkQXBpLnBvc3Quc3VjY2VzcygpIC0+IGN0eC5mbkxvYWRTdWNjZXNzKCkgLT4gdXNlclRleHRFZGl0Q2FsbGJhY2soKSAtPlxuXHQgKiAuc2F2ZSgpIC0+IGN0eC5zYXZlQXBpLnBvc3QoKSAtPiBjdHgubG9hZEFwaS5wb3N0LnN1Y2Nlc3MoKSAtPlxuXHQgKiBjdHguZm5TYXZlRXJyb3IoKSAtPiBjdHgubG9hZEFwaS5wb3N0KCkgLT4gY3R4LmxvYWRBcGkucG9zdC5zdWNjZXNzKCkgLT5cblx0ICogY3R4LmZuTG9hZFN1Y2Nlc3MoKSAtPiB1c2VyVGV4dEVkaXRDYWxsYmFjaygpIC0+IC5zYXZlKCkgLT5cblx0ICogY3R4LnNhdmVBcGkucG9zdCgpIC0+IGN0eC5sb2FkQXBpLnBvc3Quc3VjY2VzcygpIC0+IGN0eC5mblNhdmVTdWNjZXNzKClgXG5cdCAqXG5cdCAqIC0gQXBwZW5kIHRvIGEgcGFnZSAoc2ltaWxhciBmb3IgcHJlcGVuZCBhbmQgbmV3U2VjdGlvbik6XG5cdCAqIGAuYXBwZW5kKCkgLT4gY3R4LmxvYWRBcGkucG9zdCgpIC0+IGN0eC5sb2FkQXBpLnBvc3Quc3VjY2VzcygpIC0+XG5cdCAqIGN0eC5mbkxvYWRTdWNjZXNzKCkgLT4gY3R4LmZuQXV0b1NhdmUoKSAtPiAuc2F2ZSgpIC0+IGN0eC5zYXZlQXBpLnBvc3QoKSAtPlxuXHQgKiBjdHgubG9hZEFwaS5wb3N0LnN1Y2Nlc3MoKSAtPiBjdHguZm5TYXZlU3VjY2VzcygpYFxuXHQgKlxuXHQgKiBOb3Rlczpcblx0ICogMS4gQWxsIGZ1bmN0aW9ucyBmb2xsb3dpbmcgTW9yZWJpdHMud2lraS5hcGkucG9zdCgpIGFyZSBpbnZva2VkIGFzeW5jaHJvbm91c2x5IGZyb20gdGhlIGpRdWVyeSBBSkFYIGxpYnJhcnkuXG5cdCAqIDIuIFRoZSBzZXF1ZW5jZSBmb3IgYXBwZW5kL3ByZXBlbmQvbmV3U2VjdGlvbiBjb3VsZCBiZSBzbGlnaHRseSBzaG9ydGVuZWQsXG5cdCAqIGJ1dCBpdCB3b3VsZCByZXF1aXJlIHNpZ25pZmljYW50IGR1cGxpY2F0aW9uIG9mIGNvZGUgZm9yIGxpdHRsZSBiZW5lZml0LlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraVxuXHQgKiBAY2xhc3Ncblx0ICogQHBhcmFtIHtzdHJpbmd9IHBhZ2VOYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHBhZ2UsIHByZWZpeGVkIGJ5IHRoZSBuYW1lc3BhY2UgKGlmIGFueSkuXG5cdCAqIEZvciB0aGUgY3VycmVudCBwYWdlLCB1c2UgYG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKWAuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfE1vcmViaXRzLnN0YXR1c30gW3N0YXR1c10gLSBBIHN0cmluZyBkZXNjcmliaW5nIHRoZSBhY3Rpb24gYWJvdXQgdG8gYmUgdW5kZXJ0YWtlbixcblx0ICogb3IgYSBNb3JlYml0cy5zdGF0dXMgb2JqZWN0XG5cdCAqL1xuXHRNb3JlYml0cy53aWtpLnBhZ2UgPSBmdW5jdGlvbiAocGFnZU5hbWUsIHN0YXR1cykge1xuXHRcdHN0YXR1cyB8fD0gd2luZG93LndnVUxTKCfmiZPlvIDpobXpnaLigJwnLCAn5omT6ZaL6aCB6Z2i44CMJykgKyBwYWdlTmFtZSArIHdpbmRvdy53Z1VMUygn4oCdJywgJ+OAjScpO1xuXHRcdC8qKlxuXHRcdCAqIFByaXZhdGUgY29udGV4dCB2YXJpYWJsZXMuXG5cdFx0ICpcblx0XHQgKiBUaGlzIGNvbnRleHQgaXMgbm90IHZpc2libGUgdG8gdGhlIG91dHNpZGUsIHRodXMgYWxsIHRoZSBkYXRhIGhlcmVcblx0XHQgKiBtdXN0IGJlIGFjY2Vzc2VkIHZpYSBnZXR0ZXIgYW5kIHNldHRlciBmdW5jdGlvbnMuXG5cdFx0ICpcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdGNvbnN0IGN0eCA9IHtcblx0XHRcdC8vIGJhY2tpbmcgZmllbGRzIGZvciBwdWJsaWMgcHJvcGVydGllc1xuXHRcdFx0cGFnZU5hbWUsXG5cdFx0XHRwYWdlRXhpc3RzOiBmYWxzZSxcblx0XHRcdGVkaXRTdW1tYXJ5OiBudWxsLFxuXHRcdFx0Y2hhbmdlVGFnczogbnVsbCxcblx0XHRcdHRlc3RBY3Rpb25zOiBudWxsLFxuXHRcdFx0Ly8gYXJyYXkgaWYgYW55IHZhbGlkIGFjdGlvbnNcblx0XHRcdGNhbGxiYWNrUGFyYW1ldGVyczogbnVsbCxcblx0XHRcdHN0YXR1c0VsZW1lbnQ6IHN0YXR1cyBpbnN0YW5jZW9mIE1vcmViaXRzLnN0YXR1cyA/IHN0YXR1cyA6IG5ldyBNb3JlYml0cy5zdGF0dXMoc3RhdHVzKSxcblx0XHRcdC8vIC0gZWRpdFxuXHRcdFx0cGFnZVRleHQ6IG51bGwsXG5cdFx0XHRlZGl0TW9kZTogJ2FsbCcsXG5cdFx0XHQvLyBzYXZlKCkgcmVwbGFjZXMgZW50aXJlIGNvbnRlbnRzIG9mIHRoZSBwYWdlIGJ5IGRlZmF1bHRcblx0XHRcdGFwcGVuZFRleHQ6IG51bGwsXG5cdFx0XHQvLyBjYW4ndCByZXVzZSBwYWdlVGV4dCBmb3IgdGhpcyBiZWNhdXNlIHBhZ2VUZXh0IGlzIG5lZWRlZCB0byBmb2xsb3cgYSByZWRpcmVjdFxuXHRcdFx0cHJlcGVuZFRleHQ6IG51bGwsXG5cdFx0XHQvLyBjYW4ndCByZXVzZSBwYWdlVGV4dCBmb3IgdGhpcyBiZWNhdXNlIHBhZ2VUZXh0IGlzIG5lZWRlZCB0byBmb2xsb3cgYSByZWRpcmVjdFxuXHRcdFx0bmV3U2VjdGlvblRleHQ6IG51bGwsXG5cdFx0XHRuZXdTZWN0aW9uVGl0bGU6IG51bGwsXG5cdFx0XHRjcmVhdGVPcHRpb246IG51bGwsXG5cdFx0XHRtaW5vckVkaXQ6IGZhbHNlLFxuXHRcdFx0Ym90RWRpdDogZmFsc2UsXG5cdFx0XHRwYWdlU2VjdGlvbjogbnVsbCxcblx0XHRcdG1heENvbmZsaWN0UmV0cmllczogMixcblx0XHRcdG1heFJldHJpZXM6IDIsXG5cdFx0XHRmb2xsb3dSZWRpcmVjdDogZmFsc2UsXG5cdFx0XHRmb2xsb3dDcm9zc05zUmVkaXJlY3Q6IHRydWUsXG5cdFx0XHR3YXRjaGxpc3RPcHRpb246ICdub2NoYW5nZScsXG5cdFx0XHR3YXRjaGxpc3RFeHBpcnk6IG51bGwsXG5cdFx0XHRjcmVhdG9yOiBudWxsLFxuXHRcdFx0dGltZXN0YW1wOiBudWxsLFxuXHRcdFx0Ly8gLSByZXZlcnRcblx0XHRcdHJldmVydE9sZElEOiBudWxsLFxuXHRcdFx0Ly8gLSBtb3ZlXG5cdFx0XHRtb3ZlRGVzdGluYXRpb246IG51bGwsXG5cdFx0XHRtb3ZlVGFsa1BhZ2U6IGZhbHNlLFxuXHRcdFx0bW92ZVN1YnBhZ2VzOiBmYWxzZSxcblx0XHRcdG1vdmVTdXBwcmVzc1JlZGlyZWN0OiBmYWxzZSxcblx0XHRcdC8vIC0gcHJvdGVjdFxuXHRcdFx0cHJvdGVjdEVkaXQ6IG51bGwsXG5cdFx0XHRwcm90ZWN0TW92ZTogbnVsbCxcblx0XHRcdHByb3RlY3RDcmVhdGU6IG51bGwsXG5cdFx0XHRwcm90ZWN0Q2FzY2FkZTogbnVsbCxcblx0XHRcdC8vIC0gY3JlYXRpb24gbG9va3VwXG5cdFx0XHRsb29rdXBOb25SZWRpcmVjdENyZWF0b3I6IGZhbHNlLFxuXHRcdFx0Ly8gaW50ZXJuYWwgc3RhdHVzXG5cdFx0XHRwYWdlTG9hZGVkOiBmYWxzZSxcblx0XHRcdGNzcmZUb2tlbjogbnVsbCxcblx0XHRcdGxvYWRUaW1lOiBudWxsLFxuXHRcdFx0bGFzdEVkaXRUaW1lOiBudWxsLFxuXHRcdFx0cGFnZUlEOiBudWxsLFxuXHRcdFx0Y29udGVudE1vZGVsOiBudWxsLFxuXHRcdFx0cmV2ZXJ0Q3VySUQ6IG51bGwsXG5cdFx0XHRyZXZlcnRVc2VyOiBudWxsLFxuXHRcdFx0d2F0Y2hlZDogZmFsc2UsXG5cdFx0XHRmdWxseVByb3RlY3RlZDogZmFsc2UsXG5cdFx0XHRzdXBwcmVzc1Byb3RlY3RXYXJuaW5nOiBmYWxzZSxcblx0XHRcdGNvbmZsaWN0UmV0cmllczogMCxcblx0XHRcdHJldHJpZXM6IDAsXG5cdFx0XHQvLyBjYWxsYmFja3Ncblx0XHRcdG9uTG9hZFN1Y2Nlc3M6IG51bGwsXG5cdFx0XHRvbkxvYWRGYWlsdXJlOiBudWxsLFxuXHRcdFx0b25TYXZlU3VjY2VzczogbnVsbCxcblx0XHRcdG9uU2F2ZUZhaWx1cmU6IG51bGwsXG5cdFx0XHRvbkxvb2t1cENyZWF0aW9uU3VjY2VzczogbnVsbCxcblx0XHRcdG9uTG9va3VwQ3JlYXRpb25GYWlsdXJlOiBudWxsLFxuXHRcdFx0b25Nb3ZlU3VjY2VzczogbnVsbCxcblx0XHRcdG9uTW92ZUZhaWx1cmU6IG51bGwsXG5cdFx0XHRvbkRlbGV0ZVN1Y2Nlc3M6IG51bGwsXG5cdFx0XHRvbkRlbGV0ZUZhaWx1cmU6IG51bGwsXG5cdFx0XHRvblVuZGVsZXRlU3VjY2VzczogbnVsbCxcblx0XHRcdG9uVW5kZWxldGVGYWlsdXJlOiBudWxsLFxuXHRcdFx0b25Qcm90ZWN0U3VjY2VzczogbnVsbCxcblx0XHRcdG9uUHJvdGVjdEZhaWx1cmU6IG51bGwsXG5cdFx0XHQvLyBpbnRlcm5hbCBvYmplY3RzXG5cdFx0XHRsb2FkUXVlcnk6IG51bGwsXG5cdFx0XHRsb2FkQXBpOiBudWxsLFxuXHRcdFx0c2F2ZUFwaTogbnVsbCxcblx0XHRcdGxvb2t1cENyZWF0aW9uQXBpOiBudWxsLFxuXHRcdFx0bW92ZUFwaTogbnVsbCxcblx0XHRcdG1vdmVQcm9jZXNzQXBpOiBudWxsLFxuXHRcdFx0cGF0cm9sQXBpOiBudWxsLFxuXHRcdFx0cGF0cm9sUHJvY2Vzc0FwaTogbnVsbCxcblx0XHRcdGRlbGV0ZUFwaTogbnVsbCxcblx0XHRcdGRlbGV0ZVByb2Nlc3NBcGk6IG51bGwsXG5cdFx0XHR1bmRlbGV0ZUFwaTogbnVsbCxcblx0XHRcdHVuZGVsZXRlUHJvY2Vzc0FwaTogbnVsbCxcblx0XHRcdHByb3RlY3RBcGk6IG51bGwsXG5cdFx0XHRwcm90ZWN0UHJvY2Vzc0FwaTogbnVsbCxcblx0XHR9O1xuXHRcdGNvbnN0IGVtcHR5RnVuY3Rpb24gPSAoKSA9PiB7fTtcblx0XHQvKipcblx0XHQgKiBMb2FkcyB0aGUgdGV4dCBmb3IgdGhlIHBhZ2UuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvblN1Y2Nlc3MgLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgbG9hZCBoYXMgc3VjY2VlZGVkLlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhlIGxvYWQgZmFpbHMuXG5cdFx0ICovXG5cdFx0dGhpcy5sb2FkID0gZnVuY3Rpb24gKG9uU3VjY2Vzcywgb25GYWlsdXJlKSB7XG5cdFx0XHRjdHgub25Mb2FkU3VjY2VzcyA9IG9uU3VjY2Vzcztcblx0XHRcdGN0eC5vbkxvYWRGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHQvLyBOZWVkIHRvIGJlIGFibGUgdG8gZG8gc29tZXRoaW5nIGFmdGVyIHRoZSBwYWdlIGxvYWRzXG5cdFx0XHRpZiAoIW9uU3VjY2Vzcykge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcignSW50ZXJuYWwgZXJyb3I6IG5vIG9uU3VjY2VzcyBjYWxsYmFjayBwcm92aWRlZCB0byBsb2FkKCkhJyk7XG5cdFx0XHRcdGN0eC5vbkxvYWRGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjdHgubG9hZFF1ZXJ5ID0ge1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdHByb3A6ICdpbmZvfHJldmlzaW9ucycsXG5cdFx0XHRcdGlucHJvcDogJ3dhdGNoZWQnLFxuXHRcdFx0XHRpbnRlc3RhY3Rpb25zOiAnZWRpdCcsXG5cdFx0XHRcdC8vIGNhbiBiZSBleHBhbmRlZFxuXHRcdFx0XHRjdXJ0aW1lc3RhbXA6ICcnLFxuXHRcdFx0XHRtZXRhOiAndG9rZW5zJyxcblx0XHRcdFx0dHlwZTogJ2NzcmYnLFxuXHRcdFx0XHR0aXRsZXM6IGN0eC5wYWdlTmFtZSxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdC8vIGRvbid0IG5lZWQgcnZsaW1pdD0xIGJlY2F1c2Ugd2UgZG9uJ3QgbmVlZCBydnN0YXJ0aWQgaGVyZSBhbmQgb25seSBvbmUgYWN0dWFsIHJldiBpcyByZXR1cm5lZCBieSBkZWZhdWx0XG5cdFx0XHR9O1xuXG5cdFx0XHRpZiAoY3R4LmVkaXRNb2RlID09PSAnYWxsJykge1xuXHRcdFx0XHRjdHgubG9hZFF1ZXJ5LnJ2cHJvcCA9ICdjb250ZW50fHRpbWVzdGFtcCc7IC8vIGdldCB0aGUgcGFnZSBjb250ZW50IGF0IHRoZSBzYW1lIHRpbWUsIGlmIG5lZWRlZFxuXHRcdFx0fSBlbHNlIGlmIChjdHguZWRpdE1vZGUgPT09ICdyZXZlcnQnKSB7XG5cdFx0XHRcdGN0eC5sb2FkUXVlcnkucnZwcm9wID0gJ3RpbWVzdGFtcCc7XG5cdFx0XHRcdGN0eC5sb2FkUXVlcnkucnZsaW1pdCA9IDE7XG5cdFx0XHRcdGN0eC5sb2FkUXVlcnkucnZzdGFydGlkID0gY3R4LnJldmVydE9sZElEO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN0eC5mb2xsb3dSZWRpcmVjdCkge1xuXHRcdFx0XHRjdHgubG9hZFF1ZXJ5LnJlZGlyZWN0cyA9ICcnOyAvLyBmb2xsb3cgYWxsIHJlZGlyZWN0c1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHlwZW9mIGN0eC5wYWdlU2VjdGlvbiA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y3R4LmxvYWRRdWVyeS5ydnNlY3Rpb24gPSBjdHgucGFnZVNlY3Rpb247XG5cdFx0XHR9XG5cdFx0XHRpZiAoTW9yZWJpdHMudXNlcklzU3lzb3ApIHtcblx0XHRcdFx0Y3R4LmxvYWRRdWVyeS5pbnByb3AgKz0gJ3xwcm90ZWN0aW9uJztcblx0XHRcdH1cblx0XHRcdGN0eC5sb2FkQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoJ+aKk+WPlumhtemdouKApuKApicsICfmipPlj5bpoIHpnaLigKbigKYnKSxcblx0XHRcdFx0Y3R4LmxvYWRRdWVyeSxcblx0XHRcdFx0Zm5Mb2FkU3VjY2Vzcyxcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdGN0eC5vbkxvYWRGYWlsdXJlXG5cdFx0XHQpO1xuXHRcdFx0Y3R4LmxvYWRBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0Y3R4LmxvYWRBcGkucG9zdCgpO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogU2F2ZXMgdGhlIHRleHQgZm9yIHRoZSBwYWdlIHRvIFdpa2lwZWRpYS5cblx0XHQgKiBNdXN0IGJlIHByZWNlZGVkIGJ5IHN1Y2Nlc3NmdWxseSBjYWxsaW5nIGBsb2FkKClgLlxuXHRcdCAqXG5cdFx0ICogV2FybmluZzogQ2FsbGluZyBgc2F2ZSgpYCBjYW4gcmVzdWx0IGluIGFkZGl0aW9uYWwgY2FsbHMgdG8gdGhlXG5cdFx0ICogcHJldmlvdXMgYGxvYWQoKWAgY2FsbGJhY2tzIHRvIHJlY292ZXIgZnJvbSBlZGl0IGNvbmZsaWN0cyEgSW4gdGhpc1xuXHRcdCAqIGNhc2UsIGNhbGxlcnMgbXVzdCBtYWtlIHRoZSBzYW1lIGVkaXQgdG8gdGhlIG5ldyBwYWdlVGV4dCBhbmRcblx0XHQgKiByZS1pbnZva2UgYHNhdmUoKWAuICBUaGlzIGJlaGF2aW9yIGNhbiBiZSBkaXNhYmxlZCB3aXRoXG5cdFx0ICogYHNldE1heENvbmZsaWN0UmV0cmllcygwKWAuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25TdWNjZXNzXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCB3aGVuIHRoZSBzYXZlIGhhcyBzdWNjZWVkZWQuXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgc2F2ZSBmYWlscy5cblx0XHQgKi9cblx0XHR0aGlzLnNhdmUgPSBmdW5jdGlvbiAob25TdWNjZXNzLCBvbkZhaWx1cmUpIHtcblx0XHRcdGN0eC5vblNhdmVTdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdC8vIGFyZSB3ZSBnZXR0aW5nIG91ciBlZGl0aW5nIHRva2VuIGZyb20gbXcudXNlci50b2tlbnM/XG5cdFx0XHRjb25zdCBjYW5Vc2VNd1VzZXJUb2tlbiA9IGZuQ2FuVXNlTXdVc2VyVG9rZW4oJ2VkaXQnKTtcblx0XHRcdGlmICghY3R4LnBhZ2VMb2FkZWQgJiYgIWNhblVzZU13VXNlclRva2VuKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKCdJbnRlcm5hbCBlcnJvcjogYXR0ZW1wdCB0byBzYXZlIGEgcGFnZSB0aGF0IGhhcyBub3QgYmVlbiBsb2FkZWQhJyk7XG5cdFx0XHRcdGN0eC5vblNhdmVGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWN0eC5lZGl0U3VtbWFyeSkge1xuXHRcdFx0XHQvLyBuZXcgc2VjdGlvbiBtb2RlIGFsbG93cyAobmF5LCBlbmNvdXJhZ2VzKSB1c2luZyB0aGVcblx0XHRcdFx0Ly8gdGl0bGUgYXMgdGhlIGVkaXQgc3VtbWFyeSwgYnV0IHRoZSBxdWVyeSBuZWVkc1xuXHRcdFx0XHQvLyBlZGl0U3VtbWFyeSB0byBiZSB1bmRlZmluZWQgb3IgJycsIG5vdCBudWxsXG5cdFx0XHRcdGlmIChjdHguZWRpdE1vZGUgPT09ICduZXcnICYmIGN0eC5uZXdTZWN0aW9uVGl0bGUpIHtcblx0XHRcdFx0XHRjdHguZWRpdFN1bW1hcnkgPSAnJztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcignSW50ZXJuYWwgZXJyb3I6IGVkaXQgc3VtbWFyeSBub3Qgc2V0IGJlZm9yZSBzYXZlIScpO1xuXHRcdFx0XHRcdGN0eC5vblNhdmVGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gc2hvdWxkbid0IGhhcHBlbiBpZiBjYW5Vc2VNd1VzZXJUb2tlbiA9PT0gdHJ1ZVxuXHRcdFx0aWYgKFxuXHRcdFx0XHRjdHguZnVsbHlQcm90ZWN0ZWQgJiZcblx0XHRcdFx0IWN0eC5zdXBwcmVzc1Byb3RlY3RXYXJuaW5nICYmXG5cdFx0XHRcdCFjb25maXJtKFxuXHRcdFx0XHRcdGN0eC5mdWxseVByb3RlY3RlZCA9PT0gJ2luZmluaXR5J1xuXHRcdFx0XHRcdFx0PyB3aW5kb3cud2dVTFMoJ+aCqOWNs+Wwhue8lui+keWFqOS/neaKpOmhtemdouKAnCcsICfmgqjljbPlsIfnt6jovK/lhajkv53orbfpoIHpnaLjgIwnKSArXG5cdFx0XHRcdFx0XHRcdFx0Y3R4LnBhZ2VOYW1lICtcblx0XHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0XHRcdFx0XHQn4oCd77yI5peg6ZmQ5pyf77yJ44CCXFxuXFxu5Y2V5Ye756Gu5a6a5Lul56Gu5a6a77yM5oiW5Y2V5Ye75Y+W5raI5Lul5Y+W5raI5pON5L2c44CCJyxcblx0XHRcdFx0XHRcdFx0XHRcdCfjgI3vvIjnhKHpmZDmnJ/vvInjgIJcXG5cXG7pu57mk4rnorrlrprku6XnorrlrprvvIzmiJbpu57mk4rlj5bmtojku6Xlj5bmtojmk43kvZzjgIInXG5cdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0OiBgJHtcblx0XHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+aCqOWNs+Wwhue8lui+keWFqOS/neaKpOmhtemdouKAnCcsICfmgqjljbPlsIfnt6jovK/lhajkv53orbfpoIHpnaLjgIwnKSArXG5cdFx0XHRcdFx0XHRcdFx0Y3R4LnBhZ2VOYW1lICtcblx0XHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+KAne+8iOWIsOacn++8micsICfjgI3vvIjliLDmnJ/vvJonKSArXG5cdFx0XHRcdFx0XHRcdFx0bmV3IE1vcmViaXRzLmRhdGUoY3R4LmZ1bGx5UHJvdGVjdGVkKS5jYWxlbmRhcigndXRjJylcblx0XHRcdFx0XHRcdFx0fSAoVVRDKe+8ieOAglxcblxcbiR7d2luZG93LndnVUxTKFxuXHRcdFx0XHRcdFx0XHRcdCfljZXlh7vnoa7lrprku6Xnoa7lrprvvIzmiJbljZXlh7vlj5bmtojku6Xlj5bmtojmk43kvZzjgIInLFxuXHRcdFx0XHRcdFx0XHRcdCfpu57mk4rnorrlrprku6XnorrlrprvvIzmiJbpu57mk4rlj5bmtojku6Xlj5bmtojmk43kvZzjgIInXG5cdFx0XHRcdFx0XHRcdCl9YFxuXHRcdFx0XHQpXG5cdFx0XHQpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCflt7Llj5bmtojlr7nlhajkv53miqTpobXpnaLnmoTnvJbovpHjgIInLCAn5bey5Y+W5raI5bCN5YWo5L+d6K236aCB6Z2i55qE57eo6Lyv44CCJykpO1xuXHRcdFx0XHRjdHgub25TYXZlRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LnJldHJpZXMgPSAwO1xuXHRcdFx0Y29uc3QgcXVlcnkgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdFx0XHR0aXRsZTogY3R4LnBhZ2VOYW1lLFxuXHRcdFx0XHRzdW1tYXJ5OiBjdHguZWRpdFN1bW1hcnksXG5cdFx0XHRcdHRva2VuOiBjYW5Vc2VNd1VzZXJUb2tlbiA/IG13LnVzZXIudG9rZW5zLmdldCgnY3NyZlRva2VuJykgOiBjdHguY3NyZlRva2VuLFxuXHRcdFx0XHR3YXRjaGxpc3Q6IGN0eC53YXRjaGxpc3RPcHRpb24sXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0fTtcblx0XHRcdGlmIChjdHguY2hhbmdlVGFncykge1xuXHRcdFx0XHRxdWVyeS50YWdzID0gY3R4LmNoYW5nZVRhZ3M7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZm5BcHBseVdhdGNobGlzdEV4cGlyeSgpKSB7XG5cdFx0XHRcdHF1ZXJ5LndhdGNobGlzdGV4cGlyeSA9IGN0eC53YXRjaGxpc3RFeHBpcnk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mIGN0eC5wYWdlU2VjdGlvbiA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0cXVlcnkuc2VjdGlvbiA9IGN0eC5wYWdlU2VjdGlvbjtcblx0XHRcdH1cblx0XHRcdC8vIFNldCBtaW5vciBlZGl0IGF0dHJpYnV0ZS4gSWYgdGhlc2UgcGFyYW1ldGVycyBhcmUgcHJlc2VudCB3aXRoIGFueSB2YWx1ZSwgaXQgaXMgaW50ZXJwcmV0ZWQgYXMgdHJ1ZVxuXHRcdFx0aWYgKGN0eC5taW5vckVkaXQpIHtcblx0XHRcdFx0cXVlcnkubWlub3IgPSB0cnVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cXVlcnkubm90bWlub3IgPSB0cnVlOyAvLyBmb3JjZSBUd2lua2xlIGNvbmZpZyB0byBvdmVycmlkZSB1c2VyIHByZWZlcmVuY2Ugc2V0dGluZyBmb3IgXCJhbGwgZWRpdHMgYXJlIG1pbm9yXCJcblx0XHRcdH1cblx0XHRcdC8vIFNldCBib3QgZWRpdCBhdHRyaWJ1dGUuIElmIHRoaXMgcGFyYW1ldGVyIGlzIHByZXNlbnQgd2l0aCBhbnkgdmFsdWUsIGl0IGlzIGludGVycHJldGVkIGFzIHRydWVcblx0XHRcdGlmIChjdHguYm90RWRpdCkge1xuXHRcdFx0XHRxdWVyeS5ib3QgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0c3dpdGNoIChjdHguZWRpdE1vZGUpIHtcblx0XHRcdFx0Y2FzZSAnYXBwZW5kJzpcblx0XHRcdFx0XHRpZiAoY3R4LmFwcGVuZFRleHQgPT09IG51bGwpIHtcblx0XHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKCdJbnRlcm5hbCBlcnJvcjogYXBwZW5kIHRleHQgbm90IHNldCBiZWZvcmUgc2F2ZSEnKTtcblx0XHRcdFx0XHRcdGN0eC5vblNhdmVGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRxdWVyeS5hcHBlbmR0ZXh0ID0gY3R4LmFwcGVuZFRleHQ7IC8vIHVzZSBtb2RlIHRvIGFwcGVuZCB0byBjdXJyZW50IHBhZ2UgY29udGVudHNcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAncHJlcGVuZCc6XG5cdFx0XHRcdFx0aWYgKGN0eC5wcmVwZW5kVGV4dCA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoJ0ludGVybmFsIGVycm9yOiBwcmVwZW5kIHRleHQgbm90IHNldCBiZWZvcmUgc2F2ZSEnKTtcblx0XHRcdFx0XHRcdGN0eC5vblNhdmVGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRxdWVyeS5wcmVwZW5kdGV4dCA9IGN0eC5wcmVwZW5kVGV4dDsgLy8gdXNlIG1vZGUgdG8gcHJlcGVuZCB0byBjdXJyZW50IHBhZ2UgY29udGVudHNcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnbmV3Jzpcblx0XHRcdFx0XHRpZiAoIWN0eC5uZXdTZWN0aW9uVGV4dCkge1xuXHRcdFx0XHRcdFx0Ly8gQVBJIGRvZXNuJ3QgYWxsb3cgZW1wdHkgbmV3IHNlY3Rpb24gdGV4dFxuXHRcdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoJ0ludGVybmFsIGVycm9yOiBuZXcgc2VjdGlvbiB0ZXh0IG5vdCBzZXQgYmVmb3JlIHNhdmUhJyk7XG5cdFx0XHRcdFx0XHRjdHgub25TYXZlRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cXVlcnkuc2VjdGlvbiA9ICduZXcnO1xuXHRcdFx0XHRcdHF1ZXJ5LnRleHQgPSBjdHgubmV3U2VjdGlvblRleHQ7IC8vIGFkZCBhIG5ldyBzZWN0aW9uIHRvIGN1cnJlbnQgcGFnZVxuXHRcdFx0XHRcdHF1ZXJ5LnNlY3Rpb250aXRsZSA9IGN0eC5uZXdTZWN0aW9uVGl0bGUgfHwgY3R4LmVkaXRTdW1tYXJ5OyAvLyBkb25lIGJ5IHRoZSBBUEksIGJ1dCBub24tJycgdmFsdWVzIHdvdWxkIGdldCB0cmVhdGVkIGFzIHRleHRcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAncmV2ZXJ0Jzpcblx0XHRcdFx0XHRxdWVyeS51bmRvID0gY3R4LnJldmVydEN1cklEO1xuXHRcdFx0XHRcdHF1ZXJ5LnVuZG9hZnRlciA9IGN0eC5yZXZlcnRPbGRJRDtcblx0XHRcdFx0XHRpZiAoY3R4Lmxhc3RFZGl0VGltZSkge1xuXHRcdFx0XHRcdFx0cXVlcnkuYmFzZXRpbWVzdGFtcCA9IGN0eC5sYXN0RWRpdFRpbWU7IC8vIGNoZWNrIHRoYXQgcGFnZSBoYXNuJ3QgYmVlbiBlZGl0ZWQgc2luY2UgaXQgd2FzIGxvYWRlZFxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHF1ZXJ5LnN0YXJ0dGltZXN0YW1wID0gY3R4LmxvYWRUaW1lOyAvLyBjaGVjayB0aGF0IHBhZ2UgaGFzbid0IGJlZW4gZGVsZXRlZCBzaW5jZSBpdCB3YXMgbG9hZGVkIChkb24ndCByZWNyZWF0ZSBiYWQgc3R1ZmYpXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0Ly8gJ2FsbCdcblx0XHRcdFx0XHRxdWVyeS50ZXh0ID0gY3R4LnBhZ2VUZXh0OyAvLyByZXBsYWNlIGVudGlyZSBjb250ZW50cyBvZiB0aGUgcGFnZVxuXHRcdFx0XHRcdGlmIChjdHgubGFzdEVkaXRUaW1lKSB7XG5cdFx0XHRcdFx0XHRxdWVyeS5iYXNldGltZXN0YW1wID0gY3R4Lmxhc3RFZGl0VGltZTsgLy8gY2hlY2sgdGhhdCBwYWdlIGhhc24ndCBiZWVuIGVkaXRlZCBzaW5jZSBpdCB3YXMgbG9hZGVkXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cXVlcnkuc3RhcnR0aW1lc3RhbXAgPSBjdHgubG9hZFRpbWU7IC8vIGNoZWNrIHRoYXQgcGFnZSBoYXNuJ3QgYmVlbiBkZWxldGVkIHNpbmNlIGl0IHdhcyBsb2FkZWQgKGRvbid0IHJlY3JlYXRlIGJhZCBzdHVmZilcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGlmIChbJ3JlY3JlYXRlJywgJ2NyZWF0ZW9ubHknLCAnbm9jcmVhdGUnXS5pbmNsdWRlcyhjdHguY3JlYXRlT3B0aW9uKSkge1xuXHRcdFx0XHRxdWVyeVtjdHguY3JlYXRlT3B0aW9uXSA9ICcnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGNhblVzZU13VXNlclRva2VuICYmIGN0eC5mb2xsb3dSZWRpcmVjdCkge1xuXHRcdFx0XHRxdWVyeS5yZWRpcmVjdCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRjdHguc2F2ZUFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0d2luZG93LndnVUxTKCfkv53lrZjpobXpnaLigKbigKYnLCAn5YSy5a2Y6aCB6Z2i4oCm4oCmJyksXG5cdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHRmblNhdmVTdWNjZXNzLFxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0Zm5TYXZlRXJyb3Jcblx0XHRcdCk7XG5cdFx0XHRjdHguc2F2ZUFwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRjdHguc2F2ZUFwaS5wb3N0KCk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBBZGRzIHRoZSB0ZXh0IHByb3ZpZGVkIHZpYSBgc2V0QXBwZW5kVGV4dCgpYCB0byB0aGUgZW5kIG9mIHRoZVxuXHRcdCAqIHBhZ2UuICBEb2VzIG5vdCByZXF1aXJlIGNhbGxpbmcgYGxvYWQoKWAgZmlyc3QsIHVubGVzcyBhIHdhdGNobGlzdFxuXHRcdCAqIGV4cGlyeSBpcyB1c2VkLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uU3VjY2Vzc10gLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgbWV0aG9kIGhhcyBzdWNjZWVkZWQuXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgbWV0aG9kIGZhaWxzLlxuXHRcdCAqL1xuXHRcdHRoaXMuYXBwZW5kID0gZnVuY3Rpb24gKG9uU3VjY2Vzcywgb25GYWlsdXJlKSB7XG5cdFx0XHRjdHguZWRpdE1vZGUgPSAnYXBwZW5kJztcblx0XHRcdGlmIChmbkNhblVzZU13VXNlclRva2VuKCdlZGl0JykpIHtcblx0XHRcdFx0dGhpcy5zYXZlKG9uU3VjY2Vzcywgb25GYWlsdXJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN0eC5vblNhdmVTdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdFx0XHRjdHgub25TYXZlRmFpbHVyZSA9IG9uRmFpbHVyZSB8fCBlbXB0eUZ1bmN0aW9uO1xuXHRcdFx0XHR0aGlzLmxvYWQoZm5BdXRvU2F2ZSwgY3R4Lm9uU2F2ZUZhaWx1cmUpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQWRkcyB0aGUgdGV4dCBwcm92aWRlZCB2aWEgYHNldFByZXBlbmRUZXh0KClgIHRvIHRoZSBzdGFydCBvZiB0aGVcblx0XHQgKiBwYWdlLiAgRG9lcyBub3QgcmVxdWlyZSBjYWxsaW5nIGBsb2FkKClgIGZpcnN0LCB1bmxlc3MgYSB3YXRjaGxpc3Rcblx0XHQgKiBleHBpcnkgaXMgdXNlZC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259ICBbb25TdWNjZXNzXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCB3aGVuIHRoZSBtZXRob2QgaGFzIHN1Y2NlZWRlZC5cblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSAgW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgbWV0aG9kIGZhaWxzLlxuXHRcdCAqL1xuXHRcdHRoaXMucHJlcGVuZCA9IGZ1bmN0aW9uIChvblN1Y2Nlc3MsIG9uRmFpbHVyZSkge1xuXHRcdFx0Y3R4LmVkaXRNb2RlID0gJ3ByZXBlbmQnO1xuXHRcdFx0aWYgKGZuQ2FuVXNlTXdVc2VyVG9rZW4oJ2VkaXQnKSkge1xuXHRcdFx0XHR0aGlzLnNhdmUob25TdWNjZXNzLCBvbkZhaWx1cmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3R4Lm9uU2F2ZVN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0XHRcdGN0eC5vblNhdmVGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHRcdHRoaXMubG9hZChmbkF1dG9TYXZlLCBjdHgub25TYXZlRmFpbHVyZSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBDcmVhdGVzIGEgbmV3IHNlY3Rpb24gd2l0aCB0aGUgdGV4dCBwcm92aWRlZCBieSBgc2V0TmV3U2VjdGlvblRleHQoKWBcblx0XHQgKiBhbmQgc2VjdGlvbiB0aXRsZSBmcm9tIGBzZXROZXdTZWN0aW9uVGl0bGUoKWAuXG5cdFx0ICogSWYgYGVkaXRTdW1tYXJ5YCBpcyBwcm92aWRlZCwgdGhhdCB3aWxsIGJlIHVzZWQgaW5zdGVhZCBvZiB0aGVcblx0XHQgKiBhdXRvZ2VuZXJhdGVkIFwiLT5UaXRsZSAobmV3IHNlY3Rpb25cIiBlZGl0IHN1bW1hcnkuXG5cdFx0ICogRG9lcyBub3QgcmVxdWlyZSBjYWxsaW5nIGBsb2FkKClgIGZpcnN0LCB1bmxlc3MgYSB3YXRjaGxpc3QgZXhwaXJ5XG5cdFx0ICogaXMgdXNlZC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259ICBbb25TdWNjZXNzXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCB3aGVuIHRoZSBtZXRob2QgaGFzIHN1Y2NlZWRlZC5cblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSAgW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgbWV0aG9kIGZhaWxzLlxuXHRcdCAqL1xuXHRcdHRoaXMubmV3U2VjdGlvbiA9IGZ1bmN0aW9uIChvblN1Y2Nlc3MsIG9uRmFpbHVyZSkge1xuXHRcdFx0Y3R4LmVkaXRNb2RlID0gJ25ldyc7XG5cdFx0XHRpZiAoZm5DYW5Vc2VNd1VzZXJUb2tlbignZWRpdCcpKSB7XG5cdFx0XHRcdHRoaXMuc2F2ZShvblN1Y2Nlc3MsIG9uRmFpbHVyZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdHgub25TYXZlU3VjY2VzcyA9IG9uU3VjY2Vzcztcblx0XHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdFx0dGhpcy5sb2FkKGZuQXV0b1NhdmUsIGN0eC5vblNhdmVGYWlsdXJlKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgbmFtZSBvZiB0aGUgbG9hZGVkIHBhZ2UsIGluY2x1ZGluZyB0aGUgbmFtZXNwYWNlICovXG5cdFx0dGhpcy5nZXRQYWdlTmFtZSA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHgucGFnZU5hbWU7XG5cdFx0fTtcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gVGhlIHRleHQgb2YgdGhlIHBhZ2UgYWZ0ZXIgYSBzdWNjZXNzZnVsIGxvYWQoKSAqL1xuXHRcdHRoaXMuZ2V0UGFnZVRleHQgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LnBhZ2VUZXh0O1xuXHRcdH07XG5cdFx0LyoqIEBwYXJhbSB7c3RyaW5nfSBwYWdlVGV4dCAtIFVwZGF0ZWQgcGFnZSB0ZXh0IHRoYXQgd2lsbCBiZSBzYXZlZCB3aGVuIGBzYXZlKClgIGlzIGNhbGxlZCAqL1xuXHRcdHRoaXMuc2V0UGFnZVRleHQgPSAocGFnZVRleHQpID0+IHtcblx0XHRcdGN0eC5lZGl0TW9kZSA9ICdhbGwnO1xuXHRcdFx0Y3R4LnBhZ2VUZXh0ID0gcGFnZVRleHQ7XG5cdFx0fTtcblx0XHQvKiogQHBhcmFtIHtzdHJpbmd9IGFwcGVuZFRleHQgLSBUZXh0IHRoYXQgd2lsbCBiZSBhcHBlbmRlZCB0byB0aGUgcGFnZSB3aGVuIGBhcHBlbmQoKWAgaXMgY2FsbGVkICovXG5cdFx0dGhpcy5zZXRBcHBlbmRUZXh0ID0gKGFwcGVuZFRleHQpID0+IHtcblx0XHRcdGN0eC5lZGl0TW9kZSA9ICdhcHBlbmQnO1xuXHRcdFx0Y3R4LmFwcGVuZFRleHQgPSBhcHBlbmRUZXh0O1xuXHRcdH07XG5cdFx0LyoqIEBwYXJhbSB7c3RyaW5nfSBwcmVwZW5kVGV4dCAtIFRleHQgdGhhdCB3aWxsIGJlIHByZXBlbmRlZCB0byB0aGUgcGFnZSB3aGVuIGBwcmVwZW5kKClgIGlzIGNhbGxlZCAqL1xuXHRcdHRoaXMuc2V0UHJlcGVuZFRleHQgPSAocHJlcGVuZFRleHQpID0+IHtcblx0XHRcdGN0eC5lZGl0TW9kZSA9ICdwcmVwZW5kJztcblx0XHRcdGN0eC5wcmVwZW5kVGV4dCA9IHByZXBlbmRUZXh0O1xuXHRcdH07XG5cdFx0LyoqIEBwYXJhbSB7c3RyaW5nfSBuZXdTZWN0aW9uVGV4dCAtIFRleHQgdGhhdCB3aWxsIGJlIGFkZGVkIGluIGEgbmV3IHNlY3Rpb24gb24gdGhlIHBhZ2Ugd2hlbiBgbmV3U2VjdGlvbigpYCBpcyBjYWxsZWQgKi9cblx0XHR0aGlzLnNldE5ld1NlY3Rpb25UZXh0ID0gKG5ld1NlY3Rpb25UZXh0KSA9PiB7XG5cdFx0XHRjdHguZWRpdE1vZGUgPSAnbmV3Jztcblx0XHRcdGN0eC5uZXdTZWN0aW9uVGV4dCA9IG5ld1NlY3Rpb25UZXh0O1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IG5ld1NlY3Rpb25UaXRsZSAtIFRpdGxlIGZvciB0aGUgbmV3IHNlY3Rpb24gY3JlYXRlZCB3aGVuIGBuZXdTZWN0aW9uKClgIGlzIGNhbGxlZFxuXHRcdCAqIElmIG1pc3NpbmcsIGBjdHguZWRpdFN1bW1hcnlgIHdpbGwgYmUgdXNlZC4gSXNzdWVzIG1heSBvY2N1ciBpZiBhIHN1YnN0aXR1dGVkIHRlbXBsYXRlIGlzIHVzZWQuXG5cdFx0ICovXG5cdFx0dGhpcy5zZXROZXdTZWN0aW9uVGl0bGUgPSAobmV3U2VjdGlvblRpdGxlKSA9PiB7XG5cdFx0XHRjdHguZWRpdE1vZGUgPSAnbmV3Jztcblx0XHRcdGN0eC5uZXdTZWN0aW9uVGl0bGUgPSBuZXdTZWN0aW9uVGl0bGU7XG5cdFx0fTtcblx0XHQvLyBFZGl0LXJlbGF0ZWQgc2V0dGVyIG1ldGhvZHM6XG5cdFx0LyoqXG5cdFx0ICogU2V0IHRoZSBlZGl0IHN1bW1hcnkgdGhhdCB3aWxsIGJlIHVzZWQgd2hlbiBgc2F2ZSgpYCBpcyBjYWxsZWQuXG5cdFx0ICogVW5uZWNlc3NhcnkgaWYgZWRpdE1vZGUgaXMgJ25ldycgYW5kIG5ld1NlY3Rpb25UaXRsZSBpcyBwcm92aWRlZC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdW1tYXJ5XG5cdFx0ICovXG5cdFx0dGhpcy5zZXRFZGl0U3VtbWFyeSA9IChzdW1tYXJ5KSA9PiB7XG5cdFx0XHRjdHguZWRpdFN1bW1hcnkgPSBzdW1tYXJ5O1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogU2V0IGFueSBjdXN0b20gdGFnKHMpIHRvIGJlIGFwcGxpZWQgdG8gdGhlIEFQSSBhY3Rpb24uXG5cdFx0ICogQSBudW1iZXIgb2YgYWN0aW9ucyBkb24ndCBzdXBwb3J0IGl0LCBtb3N0IG5vdGFibHkgd2F0Y2guXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gdGFncyAtIFN0cmluZyBvciBhcnJheSBvZiB0YWcocykuXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRDaGFuZ2VUYWdzID0gKHRhZ3MpID0+IHtcblx0XHRcdGN0eC5jaGFuZ2VUYWdzID0gdGFncztcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBbY3JlYXRlT3B0aW9uPW51bGxdIC0gQ2FuIHRha2UgdGhlIGZvbGxvd2luZyBmb3VyIHZhbHVlczpcblx0XHQgKiAtIHJlY3JlYXRlOiBjcmVhdGUgdGhlIHBhZ2UgaWYgaXQgZG9lcyBub3QgZXhpc3QsIG9yIGVkaXQgaXQgaWYgaXQgZXhpc3RzLlxuXHRcdCAqIC0gY3JlYXRlb25seTogY3JlYXRlIHRoZSBwYWdlIGlmIGl0IGRvZXMgbm90IGV4aXN0LCBidXQgcmV0dXJuIGFuXG5cdFx0ICogZXJyb3IgaWYgaXQgYWxyZWFkeSBleGlzdHMuXG5cdFx0ICogLSBub2NyZWF0ZTogZG9uJ3QgY3JlYXRlIHRoZSBwYWdlLCBvbmx5IGVkaXQgaXQgaWYgaXQgYWxyZWFkeSBleGlzdHMuXG5cdFx0ICogLSBgbnVsbGA6IGNyZWF0ZSB0aGUgcGFnZSBpZiBpdCBkb2VzIG5vdCBleGlzdCwgdW5sZXNzIGl0IHdhcyBkZWxldGVkXG5cdFx0ICogaW4gdGhlIG1vbWVudCBiZXR3ZWVuIGxvYWRpbmcgdGhlIHBhZ2UgYW5kIHNhdmluZyB0aGUgZWRpdCAoZGVmYXVsdCkuXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRDcmVhdGVPcHRpb24gPSAoY3JlYXRlT3B0aW9uKSA9PiB7XG5cdFx0XHRjdHguY3JlYXRlT3B0aW9uID0gY3JlYXRlT3B0aW9uO1xuXHRcdH07XG5cdFx0LyoqIEBwYXJhbSB7Ym9vbGVhbn0gbWlub3JFZGl0IC0gU2V0IHRydWUgdG8gbWFyayB0aGUgZWRpdCBhcyBhIG1pbm9yIGVkaXQuICovXG5cdFx0dGhpcy5zZXRNaW5vckVkaXQgPSAobWlub3JFZGl0KSA9PiB7XG5cdFx0XHRjdHgubWlub3JFZGl0ID0gbWlub3JFZGl0O1xuXHRcdH07XG5cdFx0LyoqIEBwYXJhbSB7Ym9vbGVhbn0gYm90RWRpdCAtIFNldCB0cnVlIHRvIG1hcmsgdGhlIGVkaXQgYXMgYSBib3QgZWRpdCAqL1xuXHRcdHRoaXMuc2V0Qm90RWRpdCA9IChib3RFZGl0KSA9PiB7XG5cdFx0XHRjdHguYm90RWRpdCA9IGJvdEVkaXQ7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gcGFnZVNlY3Rpb24gLSBJbnRlZ2VyIHNwZWNpZnlpbmcgdGhlIHNlY3Rpb24gbnVtYmVyIHRvIGxvYWQgb3Igc2F2ZS5cblx0XHQgKiBJZiBzcGVjaWZpZWQgYXMgYG51bGxgLCB0aGUgZW50aXJlIHBhZ2Ugd2lsbCBiZSByZXRyaWV2ZWQuXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRQYWdlU2VjdGlvbiA9IChwYWdlU2VjdGlvbikgPT4ge1xuXHRcdFx0Y3R4LnBhZ2VTZWN0aW9uID0gcGFnZVNlY3Rpb247XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gbWF4Q29uZmxpY3RSZXRyaWVzIC0gTnVtYmVyIG9mIHJldHJpZXMgZm9yIHNhdmUgZXJyb3JzIGludm9sdmluZyBhbiBlZGl0IGNvbmZsaWN0IG9yXG5cdFx0ICogbG9zcyBvZiB0b2tlbi4gRGVmYXVsdDogMi5cblx0XHQgKi9cblx0XHR0aGlzLnNldE1heENvbmZsaWN0UmV0cmllcyA9IChtYXhDb25mbGljdFJldHJpZXMpID0+IHtcblx0XHRcdGN0eC5tYXhDb25mbGljdFJldHJpZXMgPSBtYXhDb25mbGljdFJldHJpZXM7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gbWF4UmV0cmllcyAtIE51bWJlciBvZiByZXRyaWVzIGZvciBzYXZlIGVycm9ycyBub3QgaW52b2x2aW5nIGFuIGVkaXQgY29uZmxpY3Qgb3Jcblx0XHQgKiBsb3NzIG9mIHRva2VuLiBEZWZhdWx0OiAyLlxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0TWF4UmV0cmllcyA9IChtYXhSZXRyaWVzKSA9PiB7XG5cdFx0XHRjdHgubWF4UmV0cmllcyA9IG1heFJldHJpZXM7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBTZXQgd2hldGhlciBhbmQgaG93IHRvIHdhdGNoIHRoZSBwYWdlLCBpbmNsdWRpbmcgc2V0dGluZyBhbiBleHBpcnkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW58c3RyaW5nfE1vcmViaXRzLmRhdGV8RGF0ZX0gW3dhdGNobGlzdE9wdGlvbj1mYWxzZV0gLVxuXHRcdCAqIEJhc2ljYWxseSBhIG1peCBvZiBNVyBBUEkgYW5kIFR3aW5rbGV5IG9wdGlvbnMgYXZhaWxhYmxlIHByZS1leHBpcnk6XG5cdFx0ICogLSBgdHJ1ZWB8YCd5ZXMnYHxgJ3dhdGNoJ2A6IHBhZ2Ugd2lsbCBiZSBhZGRlZCB0byB0aGUgdXNlcidzXG5cdFx0ICogd2F0Y2hsaXN0IHdoZW4gdGhlIGFjdGlvbiBpcyBjYWxsZWQuIERlZmF1bHRzIHRvIGFuIGluZGVmaW5pdGVcblx0XHQgKiB3YXRjaCB1bmxlc3MgYHdhdGNobGlzdEV4cGlyeWAgaXMgcHJvdmlkZWQuXG5cdFx0ICogLSBgZmFsc2VgfGAnbm8nYHxgJ25vY2hhbmdlJ2A6IHdhdGNobGlzdCBzdGF0dXMgb2YgdGhlIHBhZ2UgKGluY2x1ZGluZyBleHBpcnkpIHdpbGwgbm90IGJlIGNoYW5nZWQuXG5cdFx0ICogLSBgJ2RlZmF1bHQnYHxgJ3ByZWZlcmVuY2VzJ2A6IHdhdGNobGlzdCBzdGF0dXMgb2YgdGhlIHBhZ2Ugd2lsbCBiZVxuXHRcdCAqIHNldCBiYXNlZCBvbiB0aGUgdXNlcidzIHByZWZlcmVuY2Ugc2V0dGluZ3Mgd2hlbiB0aGUgYWN0aW9uIGlzXG5cdFx0ICogY2FsbGVkLiBEZWZhdWx0cyB0byBhbiBpbmRlZmluaXRlIHdhdGNoIHVubGVzcyBgd2F0Y2hsaXN0RXhwaXJ5YCBpc1xuXHRcdCAqIHByb3ZpZGVkLlxuXHRcdCAqIC0gYCd1bndhdGNoJ2A6IGV4cGxpY2l0bHkgdW53YXRjaCB0aGUgcGFnZS5cblx0XHQgKiAtIEFueSBvdGhlciBgc3RyaW5nYCBvciBgbnVtYmVyYCwgb3IgYSBgTW9yZWJpdHMuZGF0ZWAgb3IgYERhdGVgXG5cdFx0ICogb2JqZWN0OiB3YXRjaCBwYWdlIHVudGlsIHRoZSBzcGVjaWZpZWQgdGltZSwgZGVmZXJyaW5nIHRvXG5cdFx0ICogYHdhdGNobGlzdEV4cGlyeWAgaWYgcHJvdmlkZWQuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfE1vcmViaXRzLmRhdGV8RGF0ZX0gW3dhdGNobGlzdEV4cGlyeT1pbmZpbml0eV0gLVxuXHRcdCAqIEEgZGF0ZS1saWtlIHN0cmluZyBvciBudW1iZXIsIG9yIGEgZGF0ZSBvYmplY3QuICBJZiBhIHN0cmluZyBvciBudW1iZXIsXG5cdFx0ICogY2FuIGJlIHJlbGF0aXZlICgyIHdlZWtzKSBvciBvdGhlciBzaW1pbGFybHkgZGF0ZS1saWtlIChpLmUuIE5PVCBcInBvdGF0b1wiKTpcblx0XHQgKiBJU08gODYwMTogMjAzOC0wMS0wOVQwMzoxNDowN1pcblx0XHQgKiBNZWRpYVdpa2k6IDIwMzgwMTA5MDMxNDA3XG5cdFx0ICogVU5JWDogMjE0NzQ4MzY0N1xuXHRcdCAqIFNRTDogMjAzOC0wMS0wOSAwMzoxNDowN1xuXHRcdCAqIENhbiBhbHNvIGJlIGBpbmZpbml0eWAgb3IgaW5maW5pdHktbGlrZSAoYGluZmluaXRlYCwgYGluZGVmaW5pdGVgLCBhbmQgYG5ldmVyYCkuXG5cdFx0ICogU2VlIHtAbGluayBodHRwczovL3BoYWJyaWNhdG9yLndpa2ltZWRpYS5vcmcvc291cmNlL21lZGlhd2lraS1saWJzLVRpbWVzdGFtcC9icm93c2UvbWFzdGVyL3NyYy9Db252ZXJ0aWJsZVRpbWVzdGFtcC5waHA7NGU1M2I4NTlhOTU4MGM1NTk1ODA3OGY0NmRkNGYzYTQ0ZDBmY2FhMCQ1Ny0xMDk/YXM9c291cmNlJmJsYW1lPW9mZn1cblx0XHQgKi9cblx0XHR0aGlzLnNldFdhdGNobGlzdCA9ICh3YXRjaGxpc3RPcHRpb24sIHdhdGNobGlzdEV4cGlyeSkgPT4ge1xuXHRcdFx0aWYgKHdhdGNobGlzdE9wdGlvbiBpbnN0YW5jZW9mIE1vcmViaXRzLmRhdGUgfHwgd2F0Y2hsaXN0T3B0aW9uIGluc3RhbmNlb2YgRGF0ZSkge1xuXHRcdFx0XHR3YXRjaGxpc3RPcHRpb24gPSB3YXRjaGxpc3RPcHRpb24udG9JU09TdHJpbmcoKTtcblx0XHRcdH1cblx0XHRcdGlmICh3YXRjaGxpc3RFeHBpcnkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR3YXRjaGxpc3RFeHBpcnkgPSAnaW5maW5pdHknO1xuXHRcdFx0fSBlbHNlIGlmICh3YXRjaGxpc3RFeHBpcnkgaW5zdGFuY2VvZiBNb3JlYml0cy5kYXRlIHx8IHdhdGNobGlzdEV4cGlyeSBpbnN0YW5jZW9mIERhdGUpIHtcblx0XHRcdFx0d2F0Y2hsaXN0RXhwaXJ5ID0gd2F0Y2hsaXN0RXhwaXJ5LnRvSVNPU3RyaW5nKCk7XG5cdFx0XHR9XG5cdFx0XHRzd2l0Y2ggKHdhdGNobGlzdE9wdGlvbikge1xuXHRcdFx0XHRjYXNlICdub2NoYW5nZSc6XG5cdFx0XHRcdGNhc2UgJ25vJzpcblx0XHRcdFx0Y2FzZSBmYWxzZTpcblx0XHRcdFx0Y2FzZSB1bmRlZmluZWQ6XG5cdFx0XHRcdFx0Y3R4LndhdGNobGlzdE9wdGlvbiA9ICdub2NoYW5nZSc7XG5cdFx0XHRcdFx0Ly8gVGhlIE1XIEFQSSBhbGxvd3MgZm9yIGNoYW5naW5nIGV4cGlyeSB3aXRoIG5vY2hhbmdlIChhcyBcIm5vY2hhbmdlXCIgcmVmZXJzIHRvIHRoZSBiaW5hcnkgc3RhdHVzKSxcblx0XHRcdFx0XHQvLyBidXQgYnkga2VlcGluZyB0aGlzIG51bGwgaXQgd2lsbCBkZWZhdWx0IHRvIGFueSBleGlzdGluZyBleHBpcnksIGVuc3VyZSB0aGVyZSBpcyBhY3R1YWxseSBcIm5vIGNoYW5nZS5cIlxuXHRcdFx0XHRcdGN0eC53YXRjaGxpc3RFeHBpcnkgPSBudWxsO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICd1bndhdGNoJzpcblx0XHRcdFx0XHQvLyBleHBpcnkgdW5pbXBvcnRhbnRcblx0XHRcdFx0XHRjdHgud2F0Y2hsaXN0T3B0aW9uID0gJ3Vud2F0Y2gnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdwcmVmZXJlbmNlcyc6XG5cdFx0XHRcdGNhc2UgJ2RlZmF1bHQnOlxuXHRcdFx0XHRcdGN0eC53YXRjaGxpc3RPcHRpb24gPSAncHJlZmVyZW5jZXMnO1xuXHRcdFx0XHRcdC8vIFRoZSBBUEkgYWxsb3dzIGFuIGV4cGlyeSBoZXJlLCBidXQgdGhlcmUgaXMgYXMgb2YgeWV0IChUMjY1NzE2KVxuXHRcdFx0XHRcdC8vIG5vIGV4cGlyeSBwcmVmZXJlbmNlIG9wdGlvbiwgc28gaXQncyBhIGJpdCBkZXZvaWQgb2YgY29udGV4dC5cblx0XHRcdFx0XHRjdHgud2F0Y2hsaXN0RXhwaXJ5ID0gd2F0Y2hsaXN0RXhwaXJ5O1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICd3YXRjaCc6XG5cdFx0XHRcdGNhc2UgJ3llcyc6XG5cdFx0XHRcdGNhc2UgdHJ1ZTpcblx0XHRcdFx0XHRjdHgud2F0Y2hsaXN0T3B0aW9uID0gJ3dhdGNoJztcblx0XHRcdFx0XHRjdHgud2F0Y2hsaXN0RXhwaXJ5ID0gd2F0Y2hsaXN0RXhwaXJ5O1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdC8vIE5vdCByZWFsbHkgYSBcImRlZmF1bHRcIiBwZXIgc2UgYnV0IGNhdGNoZXMgXCJhbnkgb3RoZXIgc3RyaW5nXCJcblx0XHRcdFx0XHRjdHgud2F0Y2hsaXN0T3B0aW9uID0gJ3dhdGNoJztcblx0XHRcdFx0XHRjdHgud2F0Y2hsaXN0RXhwaXJ5ID0gd2F0Y2hsaXN0T3B0aW9uO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogU2V0IGEgd2F0Y2hsaXN0IGV4cGlyeS4gc2V0V2F0Y2hsaXN0IGNhbiBtb3N0bHkgaGFuZGxlIHRoaXMgYnlcblx0XHQgKiBpdHNlbGYsIHNvIHRoaXMgaXMgaGVyZSBsYXJnZWx5IGZvciBjb21wbGV0ZW5lc3MgYW5kIGNvbXBhdGliaWxpdHlcblx0XHQgKiB3aXRoIHRoZSBmdWxsIHN1aXRlIG9mIG9wdGlvbnMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ8TW9yZWJpdHMuZGF0ZXxEYXRlfSBbd2F0Y2hsaXN0RXhwaXJ5PWluZmluaXR5XSAtXG5cdFx0ICogQSBkYXRlLWxpa2Ugc3RyaW5nIG9yIG51bWJlciwgb3IgYSBkYXRlIG9iamVjdC4gIElmIGEgc3RyaW5nIG9yIG51bWJlcixcblx0XHQgKiBjYW4gYmUgcmVsYXRpdmUgKDIgd2Vla3MpIG9yIG90aGVyIHNpbWlsYXJseSBkYXRlLWxpa2UgKGkuZS4gTk9UIFwicG90YXRvXCIpOlxuXHRcdCAqIElTTyA4NjAxOiAyMDM4LTAxLTA5VDAzOjE0OjA3WlxuXHRcdCAqIE1lZGlhV2lraTogMjAzODAxMDkwMzE0MDdcblx0XHQgKiBVTklYOiAyMTQ3NDgzNjQ3XG5cdFx0ICogU1FMOiAyMDM4LTAxLTA5IDAzOjE0OjA3XG5cdFx0ICogQ2FuIGFsc28gYmUgYGluZmluaXR5YCBvciBpbmZpbml0eS1saWtlIChgaW5maW5pdGVgLCBgaW5kZWZpbml0ZWAsIGFuZCBgbmV2ZXJgKS5cblx0XHQgKiBTZWUge0BsaW5rIGh0dHBzOi8vcGhhYnJpY2F0b3Iud2lraW1lZGlhLm9yZy9zb3VyY2UvbWVkaWF3aWtpLWxpYnMtVGltZXN0YW1wL2Jyb3dzZS9tYXN0ZXIvc3JjL0NvbnZlcnRpYmxlVGltZXN0YW1wLnBocDs0ZTUzYjg1OWE5NTgwYzU1OTU4MDc4ZjQ2ZGQ0ZjNhNDRkMGZjYWEwJDU3LTEwOT9hcz1zb3VyY2UmYmxhbWU9b2ZmfVxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0V2F0Y2hsaXN0RXhwaXJ5ID0gKHdhdGNobGlzdEV4cGlyeSkgPT4ge1xuXHRcdFx0aWYgKHdhdGNobGlzdEV4cGlyeSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHdhdGNobGlzdEV4cGlyeSA9ICdpbmZpbml0eSc7XG5cdFx0XHR9IGVsc2UgaWYgKHdhdGNobGlzdEV4cGlyeSBpbnN0YW5jZW9mIE1vcmViaXRzLmRhdGUgfHwgd2F0Y2hsaXN0RXhwaXJ5IGluc3RhbmNlb2YgRGF0ZSkge1xuXHRcdFx0XHR3YXRjaGxpc3RFeHBpcnkgPSB3YXRjaGxpc3RFeHBpcnkudG9JU09TdHJpbmcoKTtcblx0XHRcdH1cblx0XHRcdGN0eC53YXRjaGxpc3RFeHBpcnkgPSB3YXRjaGxpc3RFeHBpcnk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAZGVwcmVjYXRlZCBBcyBvZiBEZWNlbWJlciAyMDIwLCB1c2Ugc2V0V2F0Y2hsaXN0LlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3dhdGNobGlzdE9wdGlvbj1mYWxzZV0gLVxuXHRcdCAqIC0gYFRydWVgOiBwYWdlIHdhdGNobGlzdCBzdGF0dXMgd2lsbCBiZSBzZXQgYmFzZWQgb24gdGhlIHVzZXInc1xuXHRcdCAqIHByZWZlcmVuY2Ugc2V0dGluZ3Mgd2hlbiBgc2F2ZSgpYCBpcyBjYWxsZWQuXG5cdFx0ICogLSBgRmFsc2VgOiB3YXRjaGxpc3Qgc3RhdHVzIG9mIHRoZSBwYWdlIHdpbGwgbm90IGJlIGNoYW5nZWQuXG5cdFx0ICpcblx0XHQgKiBXYXRjaGxpc3Qgbm90ZXM6XG5cdFx0ICogMS4gVGhlIE1lZGlhV2lraSBBUEkgdmFsdWUgb2YgJ3Vud2F0Y2gnLCB3aGljaCBleHBsaWNpdGx5IHJlbW92ZXNcblx0XHQgKiB0aGUgcGFnZSBmcm9tIHRoZSB1c2VyJ3Mgd2F0Y2hsaXN0LCBpcyBub3QgdXNlZC5cblx0XHQgKiAyLiBJZiBib3RoIGBzZXRXYXRjaGxpc3QoKWAgYW5kIGBzZXRXYXRjaGxpc3RGcm9tUHJlZmVyZW5jZXMoKWAgYXJlXG5cdFx0ICogY2FsbGVkLCB0aGUgbGFzdCBjYWxsIHRha2VzIHByaW9yaXR5LlxuXHRcdCAqIDMuIFR3aW5rbGUgbW9kdWxlcyBzaG91bGQgdXNlIHRoZSBhcHByb3ByaWF0ZSBwcmVmZXJlbmNlIHRvIHNldCB0aGUgd2F0Y2hsaXN0IG9wdGlvbnMuXG5cdFx0ICogNC4gTW9zdCBUd2lua2xlIG1vZHVsZXMgdXNlIGBzZXRXYXRjaGxpc3QoKWAuIGBzZXRXYXRjaGxpc3RGcm9tUHJlZmVyZW5jZXMoKWBcblx0XHQgKiBpcyBvbmx5IG5lZWRlZCBmb3IgdGhlIGZldyBUd2lua2xlIHdhdGNobGlzdCBwcmVmZXJlbmNlcyB0aGF0XG5cdFx0ICogYWNjZXB0IGEgc3RyaW5nIHZhbHVlIG9mIGBkZWZhdWx0YC5cblx0XHQgKi9cblx0XHR0aGlzLnNldFdhdGNobGlzdEZyb21QcmVmZXJlbmNlcyA9ICh3YXRjaGxpc3RPcHRpb24pID0+IHtcblx0XHRcdGNvbnNvbGUud2Fybihcblx0XHRcdFx0J1tNb3JlYml0c10gTk9URTogTW9yZWJpdHMud2lraS5wYWdlLnNldFdhdGNobGlzdEZyb21QcmVmZXJlbmNlcyB3YXMgZGVwcmVjYXRlZCBEZWNlbWJlciAyMDIwLCBwbGVhc2UgdXNlIHNldFdhdGNobGlzdCdcblx0XHRcdCk7XG5cdFx0XHRpZiAod2F0Y2hsaXN0T3B0aW9uKSB7XG5cdFx0XHRcdGN0eC53YXRjaGxpc3RPcHRpb24gPSAncHJlZmVyZW5jZXMnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3R4LndhdGNobGlzdE9wdGlvbiA9ICdub2NoYW5nZSc7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtmb2xsb3dSZWRpcmVjdD1mYWxzZV0gLVxuXHRcdCAqIC0gYHRydWVgOiBhIG1heGltdW0gb2Ygb25lIHJlZGlyZWN0IHdpbGwgYmUgZm9sbG93ZWQuIEluIHRoZSBldmVudFxuXHRcdCAqIG9mIGEgcmVkaXJlY3QsIGEgbWVzc2FnZSBpcyBkaXNwbGF5ZWQgdG8gdGhlIHVzZXIgYW5kIHRoZSByZWRpcmVjdFxuXHRcdCAqIHRhcmdldCBjYW4gYmUgcmV0cmlldmVkIHdpdGggZ2V0UGFnZU5hbWUoKS5cblx0XHQgKiAtIGBmYWxzZWA6IChkZWZhdWx0KSB0aGUgcmVxdWVzdGVkIHBhZ2VOYW1lIHdpbGwgYmUgdXNlZCB3aXRob3V0IHJlZ2FyZCB0byBhbnkgcmVkaXJlY3QuXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbZm9sbG93Q3Jvc3NOc1JlZGlyZWN0PXRydWVdIC0gTm90IGFwcGxpY2FibGUgaWYgYGZvbGxvd1JlZGlyZWN0YCBpcyBub3Qgc2V0IHRydWUuXG5cdFx0ICogLSBgdHJ1ZWA6IChkZWZhdWx0KSBmb2xsb3cgcmVkaXJlY3QgZXZlbiBpZiBpdCBpcyBhIGNyb3NzLW5hbWVzcGFjZSByZWRpcmVjdFxuXHRcdCAqIC0gYGZhbHNlYDogZG9uJ3QgZm9sbG93IHJlZGlyZWN0IGlmIGl0IGlzIGNyb3NzLW5hbWVzcGFjZSwgZWRpdCB0aGUgcmVkaXJlY3QgaXRzZWxmLlxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0Rm9sbG93UmVkaXJlY3QgPSAoZm9sbG93UmVkaXJlY3QsIGZvbGxvd0Nyb3NzTnNSZWRpcmVjdCkgPT4ge1xuXHRcdFx0aWYgKGN0eC5wYWdlTG9hZGVkKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdCdJbnRlcm5hbCBlcnJvcjogY2Fubm90IGNoYW5nZSByZWRpcmVjdCBzZXR0aW5nIGFmdGVyIHRoZSBwYWdlIGhhcyBiZWVuIGxvYWRlZCEnXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGN0eC5mb2xsb3dSZWRpcmVjdCA9IGZvbGxvd1JlZGlyZWN0O1xuXHRcdFx0Y3R4LmZvbGxvd0Nyb3NzTnNSZWRpcmVjdCA9XG5cdFx0XHRcdGZvbGxvd0Nyb3NzTnNSZWRpcmVjdCA9PT0gdW5kZWZpbmVkID8gY3R4LmZvbGxvd0Nyb3NzTnNSZWRpcmVjdCA6IGZvbGxvd0Nyb3NzTnNSZWRpcmVjdDtcblx0XHR9O1xuXHRcdC8vIGxvb2t1cC1jcmVhdGlvbiBzZXR0ZXIgZnVuY3Rpb25cblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IGZsYWcgLSBJZiBzZXQgdHJ1ZSwgdGhlIGF1dGhvciBhbmQgdGltZXN0YW1wIG9mXG5cdFx0ICogdGhlIGZpcnN0IG5vbi1yZWRpcmVjdCB2ZXJzaW9uIG9mIHRoZSBwYWdlIGlzIHJldHJpZXZlZC5cblx0XHQgKlxuXHRcdCAqIFdhcm5pbmc6XG5cdFx0ICogMS4gSWYgdGhlcmUgYXJlIG5vIHJldmlzaW9ucyBhbW9uZyB0aGUgZmlyc3QgNTAgdGhhdCBhcmVcblx0XHQgKiBub24tcmVkaXJlY3RzLCBvciBpZiB0aGVyZSBhcmUgbGVzcyA1MCByZXZpc2lvbnMgYW5kIGFsbCBhcmVcblx0XHQgKiByZWRpcmVjdHMsIHRoZSBvcmlnaW5hbCBjcmVhdGlvbiBpcyByZXRyaWV2ZWQuXG5cdFx0ICogMi4gUmV2aXNpb25zIHRoYXQgdGhlIHVzZXIgaXMgbm90IHByaXZpbGVnZWQgdG8gYWNjZXNzXG5cdFx0ICogKHJldmRlbGVkL3N1cHByZXNzZWQpIHdpbGwgYmUgdHJlYXRlZCBhcyBub24tcmVkaXJlY3RzLlxuXHRcdCAqIDMuIE11c3Qgbm90IGJlIHVzZWQgd2hlbiB0aGUgcGFnZSBoYXMgYSBub24td2lraXRleHQgY29udGVudG1vZGVsXG5cdFx0ICogc3VjaCBhcyBNb2R1bGVzcGFjZSBMdWEgb3IgdXNlciBKYXZhU2NyaXB0L0NTUy5cblx0XHQgKi9cblx0XHR0aGlzLnNldExvb2t1cE5vblJlZGlyZWN0Q3JlYXRvciA9IChmbGFnKSA9PiB7XG5cdFx0XHRjdHgubG9va3VwTm9uUmVkaXJlY3RDcmVhdG9yID0gZmxhZztcblx0XHR9O1xuXHRcdC8vIE1vdmUtcmVsYXRlZCBzZXR0ZXIgZnVuY3Rpb25zXG5cdFx0LyoqIEBwYXJhbSB7c3RyaW5nfSBkZXN0aW5hdGlvbiAqL1xuXHRcdHRoaXMuc2V0TW92ZURlc3RpbmF0aW9uID0gKGRlc3RpbmF0aW9uKSA9PiB7XG5cdFx0XHRjdHgubW92ZURlc3RpbmF0aW9uID0gZGVzdGluYXRpb247XG5cdFx0fTtcblx0XHQvKiogQHBhcmFtIHtib29sZWFufSBmbGFnICovXG5cdFx0dGhpcy5zZXRNb3ZlVGFsa1BhZ2UgPSAoZmxhZykgPT4ge1xuXHRcdFx0Y3R4Lm1vdmVUYWxrUGFnZSA9ICEhZmxhZztcblx0XHR9O1xuXHRcdC8qKiBAcGFyYW0ge2Jvb2xlYW59IGZsYWcgKi9cblx0XHR0aGlzLnNldE1vdmVTdWJwYWdlcyA9IChmbGFnKSA9PiB7XG5cdFx0XHRjdHgubW92ZVN1YnBhZ2VzID0gISFmbGFnO1xuXHRcdH07XG5cdFx0LyoqIEBwYXJhbSB7Ym9vbGVhbn0gZmxhZyAqL1xuXHRcdHRoaXMuc2V0TW92ZVN1cHByZXNzUmVkaXJlY3QgPSAoZmxhZykgPT4ge1xuXHRcdFx0Y3R4Lm1vdmVTdXBwcmVzc1JlZGlyZWN0ID0gISFmbGFnO1xuXHRcdH07XG5cdFx0Ly8gUHJvdGVjdC1yZWxhdGVkIHNldHRlciBmdW5jdGlvbnNcblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbGV2ZWwgLSBUaGUgcmlnaHQgcmVxdWlyZWQgZm9yIHRoZSBzcGVjaWZpYyBhY3Rpb25cblx0XHQgKiBlLmcuIHN5c29wLCB0ZW1wbGF0ZWVkaXRvciwgYXV0b2NvbmZpcm1lZFxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBbZXhwaXJ5PWluZmluaXR5XVxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0RWRpdFByb3RlY3Rpb24gPSAobGV2ZWwsIGV4cGlyeSkgPT4ge1xuXHRcdFx0Y3R4LnByb3RlY3RFZGl0ID0ge1xuXHRcdFx0XHRsZXZlbCxcblx0XHRcdFx0ZXhwaXJ5OiBleHBpcnkgfHwgJ2luZmluaXR5Jyxcblx0XHRcdH07XG5cdFx0fTtcblx0XHR0aGlzLnNldE1vdmVQcm90ZWN0aW9uID0gKGxldmVsLCBleHBpcnkpID0+IHtcblx0XHRcdGN0eC5wcm90ZWN0TW92ZSA9IHtcblx0XHRcdFx0bGV2ZWwsXG5cdFx0XHRcdGV4cGlyeTogZXhwaXJ5IHx8ICdpbmZpbml0eScsXG5cdFx0XHR9O1xuXHRcdH07XG5cdFx0dGhpcy5zZXRDcmVhdGVQcm90ZWN0aW9uID0gKGxldmVsLCBleHBpcnkpID0+IHtcblx0XHRcdGN0eC5wcm90ZWN0Q3JlYXRlID0ge1xuXHRcdFx0XHRsZXZlbCxcblx0XHRcdFx0ZXhwaXJ5OiBleHBpcnkgfHwgJ2luZmluaXR5Jyxcblx0XHRcdH07XG5cdFx0fTtcblx0XHR0aGlzLnNldENhc2NhZGluZ1Byb3RlY3Rpb24gPSAoZmxhZykgPT4ge1xuXHRcdFx0Y3R4LnByb3RlY3RDYXNjYWRlID0gISFmbGFnO1xuXHRcdH07XG5cdFx0dGhpcy5zdXBwcmVzc1Byb3RlY3RXYXJuaW5nID0gKCkgPT4ge1xuXHRcdFx0Y3R4LnN1cHByZXNzUHJvdGVjdFdhcm5pbmcgPSB0cnVlO1xuXHRcdH07XG5cdFx0Ly8gUmV2ZXJ0LXJlbGF0ZWQgZ2V0dGVycy9zZXR0ZXJzOlxuXHRcdHRoaXMuc2V0T2xkSUQgPSAob2xkSUQpID0+IHtcblx0XHRcdGN0eC5yZXZlcnRPbGRJRCA9IG9sZElEO1xuXHRcdH07XG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjdXJyZW50IHJldmlzaW9uIElEIG9mIHRoZSBwYWdlICovXG5cdFx0dGhpcy5nZXRDdXJyZW50SUQgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LnJldmVydEN1cklEO1xuXHRcdH07XG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9IExhc3QgZWRpdG9yIG9mIHRoZSBwYWdlICovXG5cdFx0dGhpcy5nZXRSZXZpc2lvblVzZXIgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LnJldmVydFVzZXI7XG5cdFx0fTtcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gSVNPIDg2MDEgdGltZXN0YW1wIGF0IHdoaWNoIHRoZSBwYWdlIHdhcyBsYXN0IGVkaXRlZC4gKi9cblx0XHR0aGlzLmdldExhc3RFZGl0VGltZSA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHgubGFzdEVkaXRUaW1lO1xuXHRcdH07XG5cdFx0Ly8gTWlzY2VsbGFuZW91cyBnZXR0ZXJzL3NldHRlcnM6XG5cdFx0LyoqXG5cdFx0ICogRGVmaW5lIGFuIG9iamVjdCBmb3IgdXNlIGluIGEgY2FsbGJhY2sgZnVuY3Rpb24uXG5cdFx0ICpcblx0XHQgKiBgY2FsbGJhY2tQYXJhbWV0ZXJzYCBpcyBmb3IgdXNlIGJ5IHRoZSBjYWxsZXIgb25seS4gVGhlIHBhcmFtZXRlcnNcblx0XHQgKiBhbGxvdyBhIGNhbGxlciB0byBwYXNzIHRoZSBwcm9wZXIgY29udGV4dCBpbnRvIGl0cyBjYWxsYmFja1xuXHRcdCAqIGZ1bmN0aW9uLiAgQ2FsbGVycyBtdXN0IGVuc3VyZSB0aGF0IGFueSBjaGFuZ2VzIHRvIHRoZVxuXHRcdCAqIGNhbGxiYWNrUGFyYW1ldGVycyBvYmplY3Qgd2l0aGluIGEgYGxvYWQoKWAgY2FsbGJhY2sgc3RpbGwgcGVybWl0IGFcblx0XHQgKiBwcm9wZXIgcmUtZW50cnkgaW50byB0aGUgYGxvYWQoKWAgY2FsbGJhY2sgaWYgYW4gZWRpdCBjb25mbGljdCBpc1xuXHRcdCAqIGRldGVjdGVkIHVwb24gY2FsbGluZyBgc2F2ZSgpYC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFja1BhcmFtZXRlcnNcblx0XHQgKi9cblx0XHR0aGlzLnNldENhbGxiYWNrUGFyYW1ldGVycyA9IChjYWxsYmFja1BhcmFtZXRlcnMpID0+IHtcblx0XHRcdGN0eC5jYWxsYmFja1BhcmFtZXRlcnMgPSBjYWxsYmFja1BhcmFtZXRlcnM7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcmV0dXJucyB7T2JqZWN0fSAtIFRoZSBvYmplY3QgcHJldmlvdXNseSBzZXQgYnkgYHNldENhbGxiYWNrUGFyYW1ldGVycygpYC5cblx0XHQgKi9cblx0XHR0aGlzLmdldENhbGxiYWNrUGFyYW1ldGVycyA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHguY2FsbGJhY2tQYXJhbWV0ZXJzO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtNb3JlYml0cy5zdGF0dXN9IHN0YXR1c0VsZW1lbnRcblx0XHQgKi9cblx0XHR0aGlzLnNldFN0YXR1c0VsZW1lbnQgPSAoc3RhdHVzRWxlbWVudCkgPT4ge1xuXHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQgPSBzdGF0dXNFbGVtZW50O1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnN0YXR1c30gU3RhdHVzIGVsZW1lbnQgY3JlYXRlZCBieSB0aGUgY29uc3RydWN0b3IuXG5cdFx0ICovXG5cdFx0dGhpcy5nZXRTdGF0dXNFbGVtZW50ID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC5zdGF0dXNFbGVtZW50O1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHBhZ2UgZXhpc3RlZCBvbiB0aGUgd2lraSB3aGVuIGl0IHdhcyBsYXN0IGxvYWRlZC5cblx0XHQgKi9cblx0XHR0aGlzLmV4aXN0cyA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHgucGFnZUV4aXN0cztcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9IFBhZ2UgSUQgb2YgdGhlIHBhZ2UgbG9hZGVkLiAwIGlmIHRoZSBwYWdlIGRvZXNuJ3Rcblx0XHQgKiBleGlzdC5cblx0XHQgKi9cblx0XHR0aGlzLmdldFBhZ2VJRCA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHgucGFnZUlEO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHJldHVybnMge3N0cmluZ30gLSBDb250ZW50IG1vZGVsIG9mIHRoZSBwYWdlLiAgUG9zc2libGUgdmFsdWVzXG5cdFx0ICogaW5jbHVkZSAoYnV0IG1heSBub3QgYmUgbGltaXRlZCB0byk6IGB3aWtpdGV4dGAsIGBqYXZhc2NyaXB0YCxcblx0XHQgKiBgY3NzYCwgYGpzb25gLCBgU2NyaWJ1bnRvYCwgYHNhbml0aXplZC1jc3NgLCBgTWFzc01lc3NhZ2VMaXN0Q29udGVudGAuXG5cdFx0ICogQWxzbyBnZXR0YWJsZSB2aWEgYG13LmNvbmZpZy5nZXQoJ3dnUGFnZUNvbnRlbnRNb2RlbCcpYC5cblx0XHQgKi9cblx0XHR0aGlzLmdldENvbnRlbnRNb2RlbCA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHguY29udGVudE1vZGVsO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW58c3RyaW5nfSAtIFdhdGNoZWQgc3RhdHVzIG9mIHRoZSBwYWdlLiBCb29sZWFuXG5cdFx0ICogdW5sZXNzIGl0J3MgYmVpbmcgd2F0Y2hlZCB0ZW1wb3JhcmlseSwgaW4gd2hpY2ggY2FzZSByZXR1cm5zIHRoZVxuXHRcdCAqIGV4cGlyeSBzdHJpbmcuXG5cdFx0ICovXG5cdFx0dGhpcy5nZXRXYXRjaGVkID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC53YXRjaGVkO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHJldHVybnMge3N0cmluZ30gSVNPIDg2MDEgdGltZXN0YW1wIGF0IHdoaWNoIHRoZSBwYWdlIHdhcyBsYXN0IGxvYWRlZC5cblx0XHQgKi9cblx0XHR0aGlzLmdldExvYWRUaW1lID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC5sb2FkVGltZTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSB1c2VyIHdobyBjcmVhdGVkIHRoZSBwYWdlIGZvbGxvd2luZyBgbG9va3VwQ3JlYXRpb24oKWAuXG5cdFx0ICovXG5cdFx0dGhpcy5nZXRDcmVhdG9yID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC5jcmVhdG9yO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHJldHVybnMge3N0cmluZ30gVGhlIElTT1N0cmluZyB0aW1lc3RhbXAgb2YgcGFnZSBjcmVhdGlvbiBmb2xsb3dpbmcgYGxvb2t1cENyZWF0aW9uKClgLlxuXHRcdCAqL1xuXHRcdHRoaXMuZ2V0Q3JlYXRpb25UaW1lc3RhbXAgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LnRpbWVzdGFtcDtcblx0XHR9O1xuXHRcdC8qKiBAcmV0dXJucyB7Ym9vbGVhbn0gd2hldGhlciBvciBub3QgeW91IGNhbiBlZGl0IHRoZSBwYWdlICovXG5cdFx0dGhpcy5jYW5FZGl0ID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuICEhY3R4LnRlc3RBY3Rpb25zICYmIGN0eC50ZXN0QWN0aW9ucy5pbmNsdWRlcygnZWRpdCcpO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogUmV0cmlldmVzIHRoZSB1c2VybmFtZSBvZiB0aGUgdXNlciB3aG8gY3JlYXRlZCB0aGUgcGFnZSBhcyB3ZWxsIGFzXG5cdFx0ICogdGhlIHRpbWVzdGFtcCBvZiBjcmVhdGlvbi4gIFRoZSB1c2VybmFtZSBjYW4gYmUgcmV0cmlldmVkIHVzaW5nIHRoZVxuXHRcdCAqIGBnZXRDcmVhdG9yKClgIGZ1bmN0aW9uOyB0aGUgdGltZXN0YW1wIGNhbiBiZSByZXRyaWV2ZWQgdXNpbmcgdGhlXG5cdFx0ICogYGdldENyZWF0aW9uVGltZXN0YW1wKClgIGZ1bmN0aW9uLlxuXHRcdCAqIFByaW9yIHRvIEp1bmUgMjAxOSBrbm93biBhcyBgbG9va3VwQ3JlYXRvcigpYC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IG9uU3VjY2VzcyAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuXG5cdFx0ICogdGhlIHVzZXJuYW1lIGFuZCB0aW1lc3RhbXAgYXJlIGZvdW5kIHdpdGhpbiB0aGUgY2FsbGJhY2suXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlblxuXHRcdCAqIHRoZSBsb29rdXAgZmFpbHNcblx0XHQgKi9cblx0XHR0aGlzLmxvb2t1cENyZWF0aW9uID0gZnVuY3Rpb24gKG9uU3VjY2Vzcywgb25GYWlsdXJlKSB7XG5cdFx0XHRjdHgub25Mb29rdXBDcmVhdGlvblN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0XHRjdHgub25Mb29rdXBDcmVhdGlvbkZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdGlmICghb25TdWNjZXNzKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKCdJbnRlcm5hbCBlcnJvcjogbm8gb25TdWNjZXNzIGNhbGxiYWNrIHByb3ZpZGVkIHRvIGxvb2t1cENyZWF0aW9uKCkhJyk7XG5cdFx0XHRcdGN0eC5vbkxvb2t1cENyZWF0aW9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcXVlcnkgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0XHRcdHRpdGxlczogY3R4LnBhZ2VOYW1lLFxuXHRcdFx0XHRydmxpbWl0OiAxLFxuXHRcdFx0XHRydnByb3A6ICd1c2VyfHRpbWVzdGFtcCcsXG5cdFx0XHRcdHJ2ZGlyOiAnbmV3ZXInLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdH07XG5cdFx0XHQvLyBPbmx5IHRoZSB3aWtpdGV4dCBjb250ZW50IG1vZGVsIGNhbiByZWxpYWJseSBoYW5kbGVcblx0XHRcdC8vIHJ2c2VjdGlvbiwgb3RoZXJzIHJldHVybiBhbiBlcnJvciB3aGVuIHBhaXJlZCB3aXRoIHRoZVxuXHRcdFx0Ly8gY29udGVudCBydnByb3AuIFJlbGF0ZWRseSwgbm9uLXdpa2l0ZXh0IG1vZGVscyBkb24ndFxuXHRcdFx0Ly8gdW5kZXJzdGFuZCB0aGUgI1JFRElSRUNUIGNvbmNlcHQsIHNvIHdlIHNob3VsZG4ndCBhdHRlbXB0XG5cdFx0XHQvLyB0aGUgcmVkaXJlY3QgcmVzb2x1dGlvbiBpbiBmbkxvb2t1cENyZWF0aW9uU3VjY2Vzc1xuXHRcdFx0aWYgKGN0eC5sb29rdXBOb25SZWRpcmVjdENyZWF0b3IpIHtcblx0XHRcdFx0cXVlcnkucnZzZWN0aW9uID0gMDtcblx0XHRcdFx0cXVlcnkucnZwcm9wICs9ICd8Y29udGVudCc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3R4LmZvbGxvd1JlZGlyZWN0KSB7XG5cdFx0XHRcdHF1ZXJ5LnJlZGlyZWN0cyA9ICcnOyAvLyBmb2xsb3cgYWxsIHJlZGlyZWN0c1xuXHRcdFx0fVxuXG5cdFx0XHRjdHgubG9va3VwQ3JlYXRpb25BcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUygn5oqT5Y+W6aG16Z2i5Yib5bu66ICF5L+h5oGvJywgJ+aKk+WPlumggemdouW7uueri+iAheizh+ioiicpLFxuXHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0Zm5Mb29rdXBDcmVhdGlvblN1Y2Nlc3MsXG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHRjdHgub25Mb29rdXBDcmVhdGlvbkZhaWx1cmVcblx0XHRcdCk7XG5cdFx0XHRjdHgubG9va3VwQ3JlYXRpb25BcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0Y3R4Lmxvb2t1cENyZWF0aW9uQXBpLnBvc3QoKTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFJldmVydHMgYSBwYWdlIHRvIGByZXZlcnRPbGRJRGAgc2V0IGJ5IGBzZXRPbGRJRGAuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25TdWNjZXNzXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIHJ1biBvbiBzdWNjZXNzLlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIGZhaWx1cmUuXG5cdFx0ICovXG5cdFx0dGhpcy5yZXZlcnQgPSBmdW5jdGlvbiAob25TdWNjZXNzLCBvbkZhaWx1cmUpIHtcblx0XHRcdGN0eC5vblNhdmVTdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdGlmICghY3R4LnJldmVydE9sZElEKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKCdJbnRlcm5hbCBlcnJvcjogcmV2aXNpb24gSUQgdG8gcmV2ZXJ0IHRvIHdhcyBub3Qgc2V0IGJlZm9yZSByZXZlcnQhJyk7XG5cdFx0XHRcdGN0eC5vblNhdmVGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjdHguZWRpdE1vZGUgPSAncmV2ZXJ0Jztcblx0XHRcdHRoaXMubG9hZChmbkF1dG9TYXZlLCBjdHgub25TYXZlRmFpbHVyZSk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBNb3ZlcyBhIHBhZ2UgdG8gYW5vdGhlciB0aXRsZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvblN1Y2Nlc3NdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIHN1Y2Nlc3MuXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gZmFpbHVyZS5cblx0XHQgKi9cblx0XHR0aGlzLm1vdmUgPSBmdW5jdGlvbiAob25TdWNjZXNzLCBvbkZhaWx1cmUpIHtcblx0XHRcdGN0eC5vbk1vdmVTdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdFx0Y3R4Lm9uTW92ZUZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdGlmICghZm5QcmVmbGlnaHRDaGVja3MuY2FsbCh0aGlzLCAnbW92ZScsIGN0eC5vbk1vdmVGYWlsdXJlKSkge1xuXHRcdFx0XHRyZXR1cm47IC8vIGFib3J0XG5cdFx0XHR9XG5cblx0XHRcdGlmICghY3R4Lm1vdmVEZXN0aW5hdGlvbikge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcignSW50ZXJuYWwgZXJyb3I6IGRlc3RpbmF0aW9uIHBhZ2UgbmFtZSB3YXMgbm90IHNldCBiZWZvcmUgbW92ZSEnKTtcblx0XHRcdFx0Y3R4Lm9uTW92ZUZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmIChmbkNhblVzZU13VXNlclRva2VuKCdtb3ZlJykpIHtcblx0XHRcdFx0Zm5Qcm9jZXNzTW92ZS5jYWxsKHRoaXMsIHRoaXMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgcXVlcnkgPSBmbk5lZWRUb2tlbkluZm9RdWVyeSgnbW92ZScpO1xuXHRcdFx0XHRjdHgubW92ZUFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+iOt+WPluS7pOeJjOKApuKApicsICflj5blvpfmrIrmnZbigKbigKYnKSxcblx0XHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0XHRmblByb2Nlc3NNb3ZlLFxuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHRcdGN0eC5vbk1vdmVGYWlsdXJlXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGN0eC5tb3ZlQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdFx0Y3R4Lm1vdmVBcGkucG9zdCgpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogTWFya3MgdGhlIHBhZ2UgYXMgcGF0cm9sbGVkLCB1c2luZyBgcmNpZGAgKGlmIGF2YWlsYWJsZSkgb3IgYHJldmlkYC5cblx0XHQgKlxuXHRcdCAqIFBhdHJvbGxpbmcgYXMgc3VjaCBkb2Vzbid0IG5lZWQgdG8gcmVseSBvbiBsb2FkaW5nIHRoZSBwYWdlIGluXG5cdFx0ICogcXVlc3Rpb247IHNpbXBseSBwYXNzaW5nIGEgcmV2aWQgdG8gdGhlIEFQSSBpcyBzdWZmaWNpZW50LCBzbyBpblxuXHRcdCAqIHRob3NlIGNhc2VzIGp1c3QgdXNpbmcge0BsaW5rIE1vcmViaXRzLndpa2kuYXBpfSBpcyBwcm9iYWJseSBwcmVmZXJhYmxlLlxuXHRcdCAqXG5cdFx0ICogTm8gZXJyb3IgaGFuZGxpbmcgc2luY2Ugd2UgZG9uJ3QgYWN0dWFsbHkgY2FyZSBhYm91dCB0aGUgZXJyb3JzLlxuXHRcdCAqL1xuXHRcdHRoaXMucGF0cm9sID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKCFNb3JlYml0cy51c2VySXNTeXNvcCAmJiAhTW9yZWJpdHMudXNlcklzSW5Hcm91cCgncGF0cm9sbGVyJykpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0XHQvLyBJZiBhIGxpbmsgaXMgcHJlc2VudCwgZG9uJ3QgbmVlZCB0byBjaGVjayBpZiBpdCdzIHBhdHJvbGxlZFxuXHRcdFx0aWYgKCRib2R5LmZpbmQoJy5wYXRyb2xsaW5rJykubGVuZ3RoKSB7XG5cdFx0XHRcdGNvbnN0IHBhdHJvbGhyZWYgPSAkYm9keS5maW5kKCcucGF0cm9sbGluayBhJykuYXR0cignaHJlZicpO1xuXHRcdFx0XHRjdHgucmNpZCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgncmNpZCcsIHBhdHJvbGhyZWYpO1xuXHRcdFx0XHRmblByb2Nlc3NQYXRyb2wodGhpcywgdGhpcyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCBwYXRyb2xRdWVyeSA9IHtcblx0XHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdFx0cHJvcDogJ2luZm8nLFxuXHRcdFx0XHRcdG1ldGE6ICd0b2tlbnMnLFxuXHRcdFx0XHRcdHR5cGU6ICdwYXRyb2wnLFxuXHRcdFx0XHRcdC8vIGFzIGxvbmcgYXMgd2UncmUgcXVlcnlpbmcsIG1pZ2h0IGFzIHdlbGwgZ2V0IGEgdG9rZW5cblx0XHRcdFx0XHRsaXN0OiAncmVjZW50Y2hhbmdlcycsXG5cdFx0XHRcdFx0Ly8gY2hlY2sgaWYgdGhlIHBhZ2UgaXMgdW5wYXRyb2xsZWRcblx0XHRcdFx0XHR0aXRsZXM6IGN0eC5wYWdlTmFtZSxcblx0XHRcdFx0XHRyY3Byb3A6ICdwYXRyb2xsZWQnLFxuXHRcdFx0XHRcdHJjdGl0bGU6IGN0eC5wYWdlTmFtZSxcblx0XHRcdFx0XHRyY2xpbWl0OiAxLFxuXHRcdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHR9O1xuXHRcdFx0XHRjdHgucGF0cm9sQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn6I635Y+W5Luk54mM4oCm4oCmJywgJ+WPluW+l+asiuadluKApuKApicpLFxuXHRcdFx0XHRcdHBhdHJvbFF1ZXJ5LFxuXHRcdFx0XHRcdGZuUHJvY2Vzc1BhdHJvbFxuXHRcdFx0XHQpO1xuXHRcdFx0XHRjdHgucGF0cm9sQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdFx0Y3R4LnBhdHJvbEFwaS5wb3N0KCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHQvLyB8ZGVsZXRlfCBpcyBhIHJlc2VydmVkIHdvcmQgaW4gc29tZSBmbGF2b3VycyBvZiBKU1xuXHRcdC8qKlxuXHRcdCAqIERlbGV0ZXMgYSBwYWdlIChmb3IgYWRtaW5zIG9ubHkpLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uU3VjY2Vzc10gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gc3VjY2Vzcy5cblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25GYWlsdXJlXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIHJ1biBvbiBmYWlsdXJlLlxuXHRcdCAqL1xuXHRcdHRoaXMuZGVsZXRlUGFnZSA9IGZ1bmN0aW9uIChvblN1Y2Nlc3MsIG9uRmFpbHVyZSkge1xuXHRcdFx0Y3R4Lm9uRGVsZXRlU3VjY2VzcyA9IG9uU3VjY2Vzcztcblx0XHRcdGN0eC5vbkRlbGV0ZUZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdGlmICghZm5QcmVmbGlnaHRDaGVja3MuY2FsbCh0aGlzLCAnZGVsZXRlJywgY3R4Lm9uRGVsZXRlRmFpbHVyZSkpIHtcblx0XHRcdFx0cmV0dXJuOyAvLyBhYm9ydFxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZm5DYW5Vc2VNd1VzZXJUb2tlbignZGVsZXRlJykpIHtcblx0XHRcdFx0Zm5Qcm9jZXNzRGVsZXRlLmNhbGwodGhpcywgdGhpcyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCBxdWVyeSA9IGZuTmVlZFRva2VuSW5mb1F1ZXJ5KCdkZWxldGUnKTtcblx0XHRcdFx0Y3R4LmRlbGV0ZUFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+iOt+WPluS7pOeJjOKApuKApicsICflj5blvpfmrIrmnZbigKbigKYnKSxcblx0XHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0XHRmblByb2Nlc3NEZWxldGUsXG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdFx0Y3R4Lm9uRGVsZXRlRmFpbHVyZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRjdHguZGVsZXRlQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdFx0Y3R4LmRlbGV0ZUFwaS5wb3N0KCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBVbmRlbGV0ZXMgYSBwYWdlIChmb3IgYWRtaW5zIG9ubHkpLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uU3VjY2Vzc10gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gc3VjY2Vzcy5cblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25GYWlsdXJlXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIHJ1biBvbiBmYWlsdXJlLlxuXHRcdCAqL1xuXHRcdHRoaXMudW5kZWxldGVQYWdlID0gZnVuY3Rpb24gKG9uU3VjY2Vzcywgb25GYWlsdXJlKSB7XG5cdFx0XHRjdHgub25VbmRlbGV0ZVN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0XHRjdHgub25VbmRlbGV0ZUZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdGlmICghZm5QcmVmbGlnaHRDaGVja3MuY2FsbCh0aGlzLCAndW5kZWxldGUnLCBjdHgub25VbmRlbGV0ZUZhaWx1cmUpKSB7XG5cdFx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHRcdH1cblxuXHRcdFx0aWYgKGZuQ2FuVXNlTXdVc2VyVG9rZW4oJ3VuZGVsZXRlJykpIHtcblx0XHRcdFx0Zm5Qcm9jZXNzVW5kZWxldGUuY2FsbCh0aGlzLCB0aGlzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHF1ZXJ5ID0gZm5OZWVkVG9rZW5JbmZvUXVlcnkoJ3VuZGVsZXRlJyk7XG5cdFx0XHRcdGN0eC51bmRlbGV0ZUFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+iOt+WPluS7pOeJjOKApuKApicsICflj5blvpfmrIrmnZbigKbigKYnKSxcblx0XHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0XHRmblByb2Nlc3NVbmRlbGV0ZSxcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0XHRjdHgub25VbmRlbGV0ZUZhaWx1cmVcblx0XHRcdFx0KTtcblx0XHRcdFx0Y3R4LnVuZGVsZXRlQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdFx0Y3R4LnVuZGVsZXRlQXBpLnBvc3QoKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFByb3RlY3RzIGEgcGFnZSAoZm9yIGFkbWlucyBvbmx5KS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvblN1Y2Nlc3NdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIHN1Y2Nlc3MuXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gZmFpbHVyZS5cblx0XHQgKi9cblx0XHR0aGlzLnByb3RlY3QgPSBmdW5jdGlvbiAob25TdWNjZXNzLCBvbkZhaWx1cmUpIHtcblx0XHRcdGN0eC5vblByb3RlY3RTdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdFx0Y3R4Lm9uUHJvdGVjdEZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdGlmICghZm5QcmVmbGlnaHRDaGVja3MuY2FsbCh0aGlzLCAncHJvdGVjdCcsIGN0eC5vblByb3RlY3RGYWlsdXJlKSkge1xuXHRcdFx0XHRyZXR1cm47IC8vIGFib3J0XG5cdFx0XHR9XG5cblx0XHRcdGlmICghY3R4LnByb3RlY3RFZGl0ICYmICFjdHgucHJvdGVjdE1vdmUgJiYgIWN0eC5wcm90ZWN0Q3JlYXRlKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdCdJbnRlcm5hbCBlcnJvcjogeW91IG11c3Qgc2V0IGVkaXQgYW5kL29yIG1vdmUgYW5kL29yIGNyZWF0ZSBwcm90ZWN0aW9uIGJlZm9yZSBjYWxsaW5nIHByb3RlY3QoKSEnXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGN0eC5vblByb3RlY3RGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHQvLyBiZWNhdXNlIG9mIHRoZSB3YXkgTVcgQVBJIGludGVycHJldHMgcHJvdGVjdGlvbiBsZXZlbHNcblx0XHRcdC8vIChhYnNvbHV0ZSwgbm90IGRpZmZlcmVudGlhbCksIHdlIGFsd2F5cyBuZWVkIHRvIHJlcXVlc3Rcblx0XHRcdC8vIHByb3RlY3Rpb24gbGV2ZWxzIGZyb20gdGhlIHNlcnZlclxuXHRcdFx0Y29uc3QgcXVlcnkgPSBmbk5lZWRUb2tlbkluZm9RdWVyeSgncHJvdGVjdCcpO1xuXHRcdFx0Y3R4LnByb3RlY3RBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUygn6I635Y+W5Luk54mM4oCm4oCmJywgJ+WPluW+l+asiuadluKApuKApicpLFxuXHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0Zm5Qcm9jZXNzUHJvdGVjdCxcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdGN0eC5vblByb3RlY3RGYWlsdXJlXG5cdFx0XHQpO1xuXHRcdFx0Y3R4LnByb3RlY3RBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0Y3R4LnByb3RlY3RBcGkucG9zdCgpO1xuXHRcdH07XG5cdFx0Lypcblx0XHQgKiBQcml2YXRlIG1lbWJlciBmdW5jdGlvbnNcblx0XHQgKiBUaGVzZSBhcmUgbm90IGV4cG9zZWQgb3V0c2lkZVxuXHRcdCAqL1xuXHRcdC8qKlxuXHRcdCAqIERldGVybWluZXMgd2hldGhlciB3ZSBjYW4gc2F2ZSBhbiBBUEkgY2FsbCBieSB1c2luZyB0aGUgY3NyZiB0b2tlblxuXHRcdCAqIHNlbnQgd2l0aCB0aGUgcGFnZSBIVE1MLCBvciB3aGV0aGVyIHdlIG5lZWQgdG8gYXNrIHRoZSBzZXJ2ZXIgZm9yXG5cdFx0ICogbW9yZSBpbmZvIChlLmcuIHByb3RlY3Rpb24gb3Igd2F0Y2hsaXN0IGV4cGlyeSkuXG5cdFx0ICpcblx0XHQgKiBDdXJyZW50bHkgdXNlZCBmb3IgYGFwcGVuZGAsIGBwcmVwZW5kYCwgYG5ld1NlY3Rpb25gLCBgbW92ZWAsXG5cdFx0ICogYGRlbGV0ZVBhZ2VgLCBhbmQgYHVuZGVsZXRlUGFnZWAuIE5vdCB1c2VkIGZvciBgcHJvdGVjdGBcblx0XHQgKiBzaW5jZSBpdCBhbHdheXMgbmVlZHMgdG8gcmVxdWVzdCBwcm90ZWN0aW9uIHN0YXR1cy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBbYWN0aW9uPWVkaXRdIC0gVGhlIGFjdGlvbiBiZWluZyB1bmRlcnRha2VuLCBlLmcuXG5cdFx0ICogXCJlZGl0XCIgb3IgXCJkZWxldGVcIi4gSW4gcHJhY3RpY2UsIG9ubHkgXCJlZGl0XCIgb3IgXCJub3RlZGl0XCIgbWF0dGVycy5cblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHRjb25zdCBmbkNhblVzZU13VXNlclRva2VuID0gKGFjdGlvbikgPT4ge1xuXHRcdFx0YWN0aW9uIHx8PSAnZWRpdCc7XG5cdFx0XHQvLyBJZiBhIHdhdGNobGlzdCBleHBpcnkgaXMgc2V0LCB3ZSBtdXN0IGFsd2F5cyBsb2FkIHRoZSBwYWdlXG5cdFx0XHQvLyB0byBhdm9pZCBvdmVyd3JpdGluZyBpbmRlZmluaXRlIHByb3RlY3Rpb24uICBPZiBjb3Vyc2UsIG5vdFxuXHRcdFx0Ly8gbmVlZGVkIGlmIHNldHRpbmcgaW5kZWZpbml0ZSB3YXRjaGluZyFcblx0XHRcdGlmIChjdHgud2F0Y2hsaXN0RXhwaXJ5ICYmICFNb3JlYml0cy5zdHJpbmcuaXNJbmZpbml0eShjdHgud2F0Y2hsaXN0RXhwaXJ5KSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHQvLyBBUEktYmFzZWQgcmVkaXJlY3QgcmVzb2x1dGlvbiBvbmx5IHdvcmtzIGZvciBhY3Rpb249cXVlcnkgYW5kXG5cdFx0XHQvLyBhY3Rpb249ZWRpdCBpbiBhcHBlbmQvcHJlcGVuZC9uZXcgbW9kZXNcblx0XHRcdGlmIChjdHguZm9sbG93UmVkaXJlY3QpIHtcblx0XHRcdFx0aWYgKCFjdHguZm9sbG93Q3Jvc3NOc1JlZGlyZWN0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlOyAvLyBtdXN0IGxvYWQgdGhlIHBhZ2UgdG8gY2hlY2sgZm9yIGNyb3NzIG5hbWVzcGFjZSByZWRpcmVjdHNcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChhY3Rpb24gIT09ICdlZGl0JyB8fCBjdHguZWRpdE1vZGUgPT09ICdhbGwnIHx8IGN0eC5lZGl0TW9kZSA9PT0gJ3JldmVydCcpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIGRvIHdlIG5lZWQgdG8gZmV0Y2ggdGhlIGVkaXQgcHJvdGVjdGlvbiBleHBpcnk/XG5cdFx0XHRpZiAoTW9yZWJpdHMudXNlcklzU3lzb3AgJiYgIWN0eC5zdXBwcmVzc1Byb3RlY3RXYXJuaW5nKSB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRuZXcgbXcuVGl0bGUoTW9yZWJpdHMucGFnZU5hbWVOb3JtKS5nZXRQcmVmaXhlZFRleHQoKSAhPT1cblx0XHRcdFx0XHRuZXcgbXcuVGl0bGUoY3R4LnBhZ2VOYW1lKS5nZXRQcmVmaXhlZFRleHQoKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gd2dSZXN0cmljdGlvbkVkaXQgaXMgbnVsbCBvbiBub24tZXhpc3RlbnQgcGFnZXMsXG5cdFx0XHRcdC8vIHNvIHRoaXMgbmVhdGx5IGhhbmRsZXMgbm9uZXhpc3RlbnQgcGFnZXNcblx0XHRcdFx0Y29uc3QgZWRpdFJlc3RyaWN0aW9uID0gbXcuY29uZmlnLmdldCgnd2dSZXN0cmljdGlvbkVkaXQnKTtcblx0XHRcdFx0aWYgKCFlZGl0UmVzdHJpY3Rpb24gfHwgZWRpdFJlc3RyaWN0aW9uLmluY2x1ZGVzKCdzeXNvcCcpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gISFtdy51c2VyLnRva2Vucy5nZXQoJ2NzcmZUb2tlbicpO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogV2hlbiBmdW5jdGlvbnMgY2FuJ3QgdXNlXG5cdFx0ICoge0BsaW5rIE1vcmViaXRzLndpa2kucGFnZX5mbkNhblVzZU13VXNlclRva2VufGZuQ2FuVXNlTXdVc2VyVG9rZW59XG5cdFx0ICogb3IgcmVxdWlyZSBjaGVja2luZyBwcm90ZWN0aW9uIG9yIHdhdGNoZWQgc3RhdHVzLCBtYWludGFpbiB0aGUgcXVlcnlcblx0XHQgKiBpbiBvbmUgcGxhY2UuIFVzZWQgZm9yIHtAbGluayBNb3JlYml0cy53aWtpLnBhZ2UjZGVsZXRlUGFnZXxkZWxldGV9LFxuXHRcdCAqIHtAbGluayBNb3JlYml0cy53aWtpLnBhZ2UjdW5kZWxldGVQYWdlfHVuZGVsZXRlfSxcblx0XHQgKiB7QGxpbmsqIE1vcmViaXRzLndpa2kucGFnZSNwcm90ZWN0fHByb3RlY3R9LFxuXHRcdCAqIGFuZCB7QGxpbmsgTW9yZWJpdHMud2lraS5wYWdlI21vdmV8bW92ZX1cblx0XHQgKiAoYmFzaWNhbGx5LCBqdXN0IG5vdCB7QGxpbmsgTW9yZWJpdHMud2lraS5wYWdlI2xvYWR8bG9hZH0pLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbiAtIFRoZSBhY3Rpb24gYmVpbmcgdW5kZXJ0YWtlbiwgZS5nLiBcImVkaXRcIiBvclxuXHRcdCAqIFwiZGVsZXRlXCIuXG5cdFx0ICogQHJldHVybnMge09iamVjdH0gQXBwcm9wcmlhdGUgcXVlcnkuXG5cdFx0ICovXG5cdFx0Y29uc3QgZm5OZWVkVG9rZW5JbmZvUXVlcnkgPSAoYWN0aW9uKSA9PiB7XG5cdFx0XHRjb25zdCBxdWVyeSA9IHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRtZXRhOiAndG9rZW5zJyxcblx0XHRcdFx0dHlwZTogJ2NzcmYnLFxuXHRcdFx0XHR0aXRsZXM6IGN0eC5wYWdlTmFtZSxcblx0XHRcdFx0cHJvcDogJ2luZm8nLFxuXHRcdFx0XHRpbnByb3A6ICd3YXRjaGVkJyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHR9O1xuXHRcdFx0Ly8gUHJvdGVjdGlvbiBub3QgY2hlY2tlZCBmb3Igbm9uLXN5c29wIG1vdmVzXG5cdFx0XHRpZiAoYWN0aW9uICE9PSAnbW92ZScgfHwgTW9yZWJpdHMudXNlcklzU3lzb3ApIHtcblx0XHRcdFx0cXVlcnkuaW5wcm9wICs9ICd8cHJvdGVjdGlvbic7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3R4LmZvbGxvd1JlZGlyZWN0ICYmIGFjdGlvbiAhPT0gJ3VuZGVsZXRlJykge1xuXHRcdFx0XHRxdWVyeS5yZWRpcmVjdHMgPSAnJzsgLy8gZm9sbG93IGFsbCByZWRpcmVjdHNcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHF1ZXJ5O1xuXHRcdH07XG5cdFx0Ly8gY2FsbGJhY2sgZnJvbSBsb2FkU3VjY2VzcygpIGZvciBhcHBlbmQoKSwgcHJlcGVuZCgpLCBhbmQgbmV3U2VjdGlvbigpIHRocmVhZHNcblx0XHRjb25zdCBmbkF1dG9TYXZlID0gKHBhZ2VvYmopID0+IHtcblx0XHRcdHBhZ2VvYmouc2F2ZShjdHgub25TYXZlU3VjY2VzcywgY3R4Lm9uU2F2ZUZhaWx1cmUpO1xuXHRcdH07XG5cdFx0Ly8gY2FsbGJhY2sgZnJvbSBsb2FkQXBpLnBvc3QoKVxuXHRcdGNvbnN0IGZuTG9hZFN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGN0eC5sb2FkQXBpLmdldFJlc3BvbnNlKCkucXVlcnk7XG5cdFx0XHRpZiAoIWZuQ2hlY2tQYWdlTmFtZShyZXNwb25zZSwgY3R4Lm9uTG9hZEZhaWx1cmUpKSB7XG5cdFx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgW3BhZ2VdID0gcmVzcG9uc2UucGFnZXM7XG5cdFx0XHRsZXQgcmV2O1xuXHRcdFx0Y3R4LnBhZ2VFeGlzdHMgPSAhcGFnZS5taXNzaW5nO1xuXHRcdFx0aWYgKGN0eC5wYWdlRXhpc3RzKSB7XG5cdFx0XHRcdFtyZXZdID0gcGFnZS5yZXZpc2lvbnM7XG5cdFx0XHRcdGN0eC5sYXN0RWRpdFRpbWUgPSByZXYudGltZXN0YW1wO1xuXHRcdFx0XHRjdHgucGFnZVRleHQgPSByZXYuY29udGVudDtcblx0XHRcdFx0Y3R4LnBhZ2VJRCA9IHBhZ2UucGFnZWlkO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3R4LnBhZ2VUZXh0ID0gJyc7IC8vIGFsbG93IGZvciBjb25jYXRlbmF0aW9uLCBldGMuXG5cdFx0XHRcdGN0eC5wYWdlSUQgPSAwOyAvLyBub25leGlzdGVudCBpbiByZXNwb25zZSwgbWF0Y2hlcyB3Z0FydGljbGVJZFxuXHRcdFx0fVxuXG5cdFx0XHRjdHguY3NyZlRva2VuID0gcmVzcG9uc2UudG9rZW5zLmNzcmZ0b2tlbjtcblx0XHRcdGlmICghY3R4LmNzcmZUb2tlbikge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+acquiDveiOt+WPlue8lui+keS7pOeJjOOAgicsICfmnKrog73lj5blvpfnt6jovK/mrIrmnZbjgIInKSk7XG5cdFx0XHRcdGN0eC5vbkxvYWRGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjdHgubG9hZFRpbWUgPSBjdHgubG9hZEFwaS5nZXRSZXNwb25zZSgpLmN1cnRpbWVzdGFtcDtcblx0XHRcdGlmICghY3R4LmxvYWRUaW1lKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5pyq6IO96I635Y+W5b2T5YmN5pe26Ze05oiz44CCJywgJ+acquiDveWPluW+l+eVtuWJjeaZgumWk+aIs+OAgicpKTtcblx0XHRcdFx0Y3R4Lm9uTG9hZEZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGN0eC5jb250ZW50TW9kZWwgPSBwYWdlLmNvbnRlbnRtb2RlbDtcblx0XHRcdGN0eC53YXRjaGVkID0gcGFnZS53YXRjaGxpc3RleHBpcnkgfHwgcGFnZS53YXRjaGVkO1xuXHRcdFx0Ly8gZXh0cmFjdCBwcm90ZWN0aW9uIGluZm8sIHRvIGFsZXJ0IGFkbWlucyB3aGVuIHRoZXkgYXJlIGFib3V0IHRvIGVkaXQgYSBwcm90ZWN0ZWQgcGFnZVxuXHRcdFx0Ly8gSW5jbHVkZXMgY2FzY2FkaW5nIHByb3RlY3Rpb25cblx0XHRcdGlmIChNb3JlYml0cy51c2VySXNTeXNvcCkge1xuXHRcdFx0XHRjb25zdCBlZGl0UHJvdCA9IHBhZ2UucHJvdGVjdGlvbi5maW5kTGFzdCgocHIpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gcHIudHlwZSA9PT0gJ2VkaXQnICYmIHByLmxldmVsID09PSAnc3lzb3AnO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0aWYgKGVkaXRQcm90KSB7XG5cdFx0XHRcdFx0Y3R4LmZ1bGx5UHJvdGVjdGVkID0gZWRpdFByb3QuZXhwaXJ5O1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGN0eC5mdWxseVByb3RlY3RlZCA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRjdHgucmV2ZXJ0Q3VySUQgPSBwYWdlLmxhc3RyZXZpZDtcblx0XHRcdGNvbnN0IHRlc3RhY3Rpb25zID0gcGFnZS5hY3Rpb25zO1xuXHRcdFx0Y3R4LnRlc3RBY3Rpb25zID0gW107IC8vIHdhcyBudWxsXG5cdFx0XHRmb3IgKGNvbnN0IGFjdGlvbiBvZiBPYmplY3Qua2V5cyh0ZXN0YWN0aW9ucykpIHtcblx0XHRcdFx0aWYgKHRlc3RhY3Rpb25zW2FjdGlvbl0pIHtcblx0XHRcdFx0XHRjdHgudGVzdEFjdGlvbnNbY3R4LnRlc3RBY3Rpb25zLmxlbmd0aF0gPSBhY3Rpb247XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChjdHguZWRpdE1vZGUgPT09ICdyZXZlcnQnKSB7XG5cdFx0XHRcdGN0eC5yZXZlcnRDdXJJRCA9IHJldiAmJiByZXYucmV2aWQ7XG5cdFx0XHRcdGlmICghY3R4LnJldmVydEN1cklEKSB7XG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfmnKrog73ojrflj5blvZPliY3kv67orqLniYjmnKxJROOAgicsICfmnKrog73lj5blvpfnm67liY3kv67oqILniYjmnKxJROOAgicpKTtcblx0XHRcdFx0XHRjdHgub25Mb2FkRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y3R4LnJldmVydFVzZXIgPSByZXYgJiYgcmV2LnVzZXI7XG5cdFx0XHRcdGlmICghY3R4LnJldmVydFVzZXIpIHtcblx0XHRcdFx0XHRpZiAocmV2ICYmIHJldi51c2VyaGlkZGVuKSB7XG5cdFx0XHRcdFx0XHQvLyB1c2VybmFtZSB3YXMgUmV2RGVsJ2Qgb3Igb3ZlcnNpZ2h0ZWRcblx0XHRcdFx0XHRcdGN0eC5yZXZlcnRVc2VyID0gd2luZG93LndnVUxTKCc855So5oi35ZCN5bey6ZqQ6JePPicsICc85L2/55So6ICF5ZCN56ix5bey6Zqx6JePPicpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfmnKrog73ojrflj5bmraTkv67orqLniYjmnKznmoTnvJbovpHogIXjgIInLCAn5pyq6IO95Y+W5b6X5q2k5L+u6KiC54mI5pys55qE57eo6Lyv6ICF44CCJylcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRjdHgub25Mb2FkRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gc2V0IHJldmVydCBlZGl0IHN1bW1hcnlcblx0XHRcdFx0Y3R4LmVkaXRTdW1tYXJ5ID0gYFtbUVc6VU5ET3zmkqTplIBdXeeUsSAke2N0eC5yZXZlcnRVc2VyfSDmiYDlgZrlh7rnmoQke3dpbmRvdy53Z1VMUygn5L+u6K6iICcsICfkv67oqIIgJyl9JHtcblx0XHRcdFx0XHRjdHgucmV2ZXJ0T2xkSURcblx0XHRcdFx0fe+8miR7Y3R4LmVkaXRTdW1tYXJ5fWA7XG5cdFx0XHR9XG5cdFx0XHRjdHgucGFnZUxvYWRlZCA9IHRydWU7XG5cdFx0XHQvLyBtdy5ub3RpZnkoXCJHZW5lcmF0ZSBlZGl0IGNvbmZsaWN0IG5vd1wiLCB7dHlwZTogJ3dhcm4nLCB0YWc6ICdtb3JlYml0cyd9KTsgIC8vIGZvciB0ZXN0aW5nIGVkaXQgY29uZmxpY3QgcmVjb3ZlcnkgbG9naWNcblx0XHRcdGN0eC5vbkxvYWRTdWNjZXNzKHRoaXMpOyAvLyBpbnZva2UgY2FsbGJhY2tcblx0XHR9O1xuXHRcdC8vIGhlbHBlciBmdW5jdGlvbiB0byBwYXJzZSB0aGUgcGFnZSBuYW1lIHJldHVybmVkIGZyb20gdGhlIEFQSVxuXHRcdGNvbnN0IGZuQ2hlY2tQYWdlTmFtZSA9IGZ1bmN0aW9uIChyZXNwb25zZSwgb25GYWlsdXJlKSB7XG5cdFx0XHRvbkZhaWx1cmUgfHw9IGVtcHR5RnVuY3Rpb247XG5cdFx0XHRjb25zdCBwYWdlID0gcmVzcG9uc2UucGFnZXMgJiYgcmVzcG9uc2UucGFnZXNbMF07XG5cdFx0XHRpZiAocGFnZSkge1xuXHRcdFx0XHQvLyBjaGVjayBmb3IgaW52YWxpZCB0aXRsZXNcblx0XHRcdFx0aWYgKHBhZ2UuaW52YWxpZCkge1xuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5qCH6aKY5LiN5ZCI5rOV77yaJywgYOaomemhjOS4jeWQiOazle+8miR7Y3R4LnBhZ2VOYW1lfWApKTtcblx0XHRcdFx0XHRvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlOyAvLyBhYm9ydFxuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIHJldHJpZXZlIGFjdHVhbCB0aXRsZSBvZiB0aGUgcGFnZSBhZnRlciBub3JtYWxpemF0aW9uIGFuZCByZWRpcmVjdHNcblx0XHRcdFx0Y29uc3QgcmVzb2x2ZWROYW1lID0gcGFnZS50aXRsZTtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLnJlZGlyZWN0cykge1xuXHRcdFx0XHRcdC8vIGNoZWNrIGZvciBjcm9zcy1uYW1lc3BhY2UgcmVkaXJlY3Q6XG5cdFx0XHRcdFx0Y29uc3Qgb3JpZ05zID0gbmV3IG13LlRpdGxlKGN0eC5wYWdlTmFtZSkubmFtZXNwYWNlO1xuXHRcdFx0XHRcdGNvbnN0IG5ld05zID0gbmV3IG13LlRpdGxlKHJlc29sdmVkTmFtZSkubmFtZXNwYWNlO1xuXHRcdFx0XHRcdGlmIChvcmlnTnMgIT09IG5ld05zICYmICFjdHguZm9sbG93Q3Jvc3NOc1JlZGlyZWN0KSB7XG5cdFx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHRcdFx0Y3R4LnBhZ2VOYW1lICtcblx0XHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+aYr+i3qOWRveWQjeepuumXtOmHjeWumuWQkeWIsCcsICfmmK/ot6jlkb3lkI3nqbrplpPph43mlrDlsI7lkJHliLAnKSArXG5cdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZWROYW1lICtcblx0XHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ++8jOeVpei/hycsICfvvIznlaXpgY4nKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdG9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gb25seSBub3RpZnkgdXNlciBmb3IgcmVkaXJlY3RzLCBub3Qgbm9ybWFsaXphdGlvblxuXHRcdFx0XHRcdG5ldyBNb3JlYml0cy5zdGF0dXMoXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+S/oeaBrycsICfos4foqIonKSxcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5LuOICcsICflvp4gJykgK1xuXHRcdFx0XHRcdFx0XHRjdHgucGFnZU5hbWUgK1xuXHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJyDph43lrprlkJHliLAgJywgJyDph43mlrDlsI7lkJHliLAgJykgK1xuXHRcdFx0XHRcdFx0XHRyZXNvbHZlZE5hbWVcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGN0eC5wYWdlTmFtZSA9IHJlc29sdmVkTmFtZTsgLy8gdXBkYXRlIHRvIHJlZGlyZWN0IHRhcmdldCBvciBub3JtYWxpemVkIG5hbWVcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIGNvdWxkIGJlIGEgY2lyY3VsYXIgcmVkaXJlY3Qgb3Igb3RoZXIgcHJvYmxlbVxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+S4jeiDveino+aekOmhtemdoueahOmHjeWumuWQke+8micsICfkuI3og73op6PmnpDpoIHpnaLnmoTph43mlrDlsI7lkJHvvJonKSArIGN0eC5wYWdlTmFtZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdC8vIGZvcmNlIGVycm9yIHRvIHN0YXkgb24gdGhlIHNjcmVlblxuXHRcdFx0XHQrK01vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdDtcblx0XHRcdFx0cmV0dXJuIGZhbHNlOyAvLyBhYm9ydFxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdHJ1ZTsgLy8gYWxsIE9LXG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBEZXRlcm1pbmUgd2hldGhlciB3ZSBzaG91bGQgcHJvdmlkZSBhIHdhdGNobGlzdCBleHBpcnkuICBXaWxsIG5vdFxuXHRcdCAqIGRvIHNvIGlmIHRoZSBwYWdlIGlzIGN1cnJlbnRseSBwZXJtYW5lbnRseSB3YXRjaGVkLCBvciB0aGUgY3VycmVudFxuXHRcdCAqIGV4cGlyeSBpcyAqYWZ0ZXIqIHRoZSBuZXcsIHByb3ZpZGVkIGV4cGlyeS4gIE9ubHkgaGFuZGxlcyBzdHJpbmdzXG5cdFx0ICogcmVjb2duaXplZCBieSB7QGxpbmsgTW9yZWJpdHMuZGF0ZX0gb3IgcmVsYXRpdmUgdGltZWZyYW1lcyB3aXRoXG5cdFx0ICogdW5pdCBpdCBjYW4gcHJvY2Vzcy4gIFJlbGllcyBvbiB0aGUgZmFjdCB0aGF0IGZuQ2FuVXNlTXdVc2VyVG9rZW5cblx0XHQgKiByZXF1aXJlcyBwYWdlIGxvYWRpbmcgaWYgYSB3YXRjaGxpc3RleHBpcnkgaXMgcHJvdmlkZWQsIHNvIHdlIGFyZVxuXHRcdCAqIGVuc3VyZWQgb2Yga25vd2luZyB0aGUgd2F0Y2ggc3RhdHVzIGJ5IHRoZSB1c2Ugb2YgdGhpcy5cblx0XHQgKlxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdGNvbnN0IGZuQXBwbHlXYXRjaGxpc3RFeHBpcnkgPSAoKSA9PiB7XG5cdFx0XHRpZiAoY3R4LndhdGNobGlzdEV4cGlyeSkge1xuXHRcdFx0XHRpZiAoIWN0eC53YXRjaGVkIHx8IE1vcmViaXRzLnN0cmluZy5pc0luZmluaXR5KGN0eC53YXRjaGxpc3RFeHBpcnkpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIGN0eC53YXRjaGVkID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdGxldCBuZXdFeHBpcnk7XG5cdFx0XHRcdFx0Ly8gQXR0ZW1wdCB0byBkZXRlcm1pbmUgaWYgdGhlIG5ldyBleHBpcnkgaXMgYVxuXHRcdFx0XHRcdC8vIHJlbGF0aXZlIChlLmcuIGAxIG1vbnRoYCkgb3IgYWJzb2x1dGUgZGF0ZXRpbWVcblx0XHRcdFx0XHRjb25zdCByZWwgPSBjdHgud2F0Y2hsaXN0RXhwaXJ5LnNwbGl0KCcgJyk7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdG5ld0V4cGlyeSA9IG5ldyBNb3JlYml0cy5kYXRlKCkuYWRkKHJlbFswXSwgcmVsWzFdKTtcblx0XHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHRcdG5ld0V4cGlyeSA9IG5ldyBNb3JlYml0cy5kYXRlKGN0eC53YXRjaGxpc3RFeHBpcnkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBJZiB0aGUgZGF0ZSBpcyB2YWxpZCwgb25seSB1c2UgaXQgaWYgaXQgZXh0ZW5kcyB0aGUgY3VycmVudCBleHBpcnlcblx0XHRcdFx0XHRpZiAobmV3RXhwaXJ5LmlzVmFsaWQoKSkge1xuXHRcdFx0XHRcdFx0aWYgKG5ld0V4cGlyeS5pc0FmdGVyKG5ldyBNb3JlYml0cy5kYXRlKGN0eC53YXRjaGVkKSkpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIElmIGl0J3Mgc3RpbGwgbm90IHZhbGlkLCBob3BlIGl0J3MgYSB2YWxpZCBNVyBleHBpcnkgZm9ybWF0IHRoYXRcblx0XHRcdFx0XHRcdC8vIE1vcmViaXRzLmRhdGUgZG9lc24ndCByZWNvZ25pemUsIHNvIGp1c3QgZGVmYXVsdCB0byB1c2luZyBpdC5cblx0XHRcdFx0XHRcdC8vIFRoaXMgd2lsbCBhbHNvIGluY2x1ZGUgbWlub3IgdHlwb3MuXG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9O1xuXHRcdC8vIGNhbGxiYWNrIGZyb20gc2F2ZUFwaS5wb3N0KClcblx0XHRjb25zdCBmblNhdmVTdWNjZXNzID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y3R4LmVkaXRNb2RlID0gJ2FsbCc7IC8vIGNhbmNlbCBhcHBlbmQvcHJlcGVuZC9uZXdTZWN0aW9uL3JldmVydCBtb2Rlc1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBjdHguc2F2ZUFwaS5nZXRSZXNwb25zZSgpO1xuXHRcdFx0Ly8gc2VlIGlmIHRoZSBBUEkgdGhpbmtzIHdlIHdlcmUgc3VjY2Vzc2Z1bFxuXHRcdFx0aWYgKHJlc3BvbnNlLmVkaXQucmVzdWx0ID09PSAnU3VjY2VzcycpIHtcblx0XHRcdFx0Ly8gcmVhbCBzdWNjZXNzXG5cdFx0XHRcdC8vIGRlZmF1bHQgb24gc3VjY2VzcyBhY3Rpb24gLSBkaXNwbGF5IGxpbmsgZm9yIGVkaXRlZCBwYWdlXG5cdFx0XHRcdGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdFx0XHRcdGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgbXcudXRpbC5nZXRVcmwoY3R4LnBhZ2VOYW1lKSk7XG5cdFx0XHRcdGxpbmsuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3R4LnBhZ2VOYW1lKSk7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmluZm8oWyflrozmiJDvvIgnLCBsaW5rLCAn77yJJ10pO1xuXHRcdFx0XHRpZiAoY3R4Lm9uU2F2ZVN1Y2Nlc3MpIHtcblx0XHRcdFx0XHRjdHgub25TYXZlU3VjY2Vzcyh0aGlzKTsgLy8gaW52b2tlIGNhbGxiYWNrXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHQvLyBlcnJvcnMgaGVyZSBhcmUgb25seSBnZW5lcmF0ZWQgYnkgZXh0ZW5zaW9ucyB3aGljaCBob29rIEFQSUVkaXRCZWZvcmVTYXZlIHdpdGhpbiBNZWRpYVdpa2ksXG5cdFx0XHQvLyB3aGljaCBhcyBvZiAxLjM0LjAtd21mLjIzIChTZXB0IDIwMTkpIHNob3VsZCBvbmx5IGVuY29tcGFzcyBjYXB0Y2hhIG1lc3NhZ2VzXG5cdFx0XHRpZiAocmVzcG9uc2UuZWRpdC5jYXB0Y2hhKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5LiN6IO95L+d5a2Y6aG16Z2i77yM5Zug5pyN5Yqh5Zmo6KaB5rGC5oKo6L6T5YWl6aqM6K+B56CB44CCJywgJ+S4jeiDveWEsuWtmOmggemdou+8jOWboOS8uuacjeWZqOimgeaxguaCqOi8uOWFpempl+itieeivOOAgicpXG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+S/neWtmOmhtemdouaXtueUsUFQSeW+l+WIsOacquefpemUmeivrycsICflhLLlrZjpoIHpnaLmmYLnlLFBUEnlvpfliLDmnKrnn6XpjK/oqqQnKSk7XG5cdFx0XHR9XG5cdFx0XHQvLyBmb3JjZSBlcnJvciB0byBzdGF5IG9uIHRoZSBzY3JlZW5cblx0XHRcdCsrTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0O1xuXHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUodGhpcyk7XG5cdFx0fTtcblx0XHQvLyBjYWxsYmFjayBmcm9tIHNhdmVBcGkucG9zdCgpXG5cdFx0Y29uc3QgZm5TYXZlRXJyb3IgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCBlcnJvckNvZGUgPSBjdHguc2F2ZUFwaS5nZXRFcnJvckNvZGUoKTtcblx0XHRcdC8vIGNoZWNrIGZvciBlZGl0IGNvbmZsaWN0XG5cdFx0XHRpZiAoZXJyb3JDb2RlID09PSAnZWRpdGNvbmZsaWN0JyAmJiBjdHguY29uZmxpY3RSZXRyaWVzKysgPCBjdHgubWF4Q29uZmxpY3RSZXRyaWVzKSB7XG5cdFx0XHRcdC8vIGVkaXQgY29uZmxpY3RzIGNhbiBvY2N1ciB3aGVuIHRoZSBwYWdlIG5lZWRzIHRvIGJlIHB1cmdlZCBmcm9tIHRoZSBzZXJ2ZXIgY2FjaGVcblx0XHRcdFx0Y29uc3QgcHVyZ2VRdWVyeSA9IHtcblx0XHRcdFx0XHRhY3Rpb246ICdwdXJnZScsXG5cdFx0XHRcdFx0dGl0bGVzOiBjdHgucGFnZU5hbWUsIC8vIHJlZGlyZWN0cyBhcmUgYWxyZWFkeSByZXNvbHZlZFxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdGNvbnN0IHB1cmdlQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5qOA5rWL5Yiw57yW6L6R5Yay56qB77yM5q2j5Zyo5pu05paw5pyN5Yqh5Zmo57yT5a2YJywgJ+aqoua4rOWIsOe3qOi8r+ihneeqge+8jOato+WcqOabtOaWsOS8uuacjeWZqOW/q+WPlicpLFxuXHRcdFx0XHRcdHB1cmdlUXVlcnksXG5cdFx0XHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRcdFx0LS1Nb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQ7IC8vIGFsbG93IGZvciBub3JtYWwgY29tcGxldGlvbiBpZiByZXRyeSBzdWNjZWVkc1xuXHRcdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuaW5mbyh3aW5kb3cud2dVTFMoJ+ajgOa1i+WIsOe8lui+keWGsueqge+8jOmHjeivleS/ruaUuScsICfmqqLmuKzliLDnt6jovK/ooZ3nqoHvvIzph43oqabkv67mlLknKSk7XG5cdFx0XHRcdFx0XHRpZiAoZm5DYW5Vc2VNd1VzZXJUb2tlbignZWRpdCcpKSB7XG5cdFx0XHRcdFx0XHRcdGN0eC5zYXZlQXBpLnBvc3QoKTsgLy8gbmVjZXNzYXJpbHkgYXBwZW5kLCBwcmVwZW5kLCBvciBuZXdTZWN0aW9uLCBzbyB0aGlzIHNob3VsZCB3b3JrIGFzIGRlc2lyZWRcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGN0eC5sb2FkQXBpLnBvc3QoKTsgLy8gcmVsb2FkIHRoZSBwYWdlIGFuZCByZWFwcGx5IHRoZSBlZGl0XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudFxuXHRcdFx0XHQpO1xuXHRcdFx0XHRwdXJnZUFwaS5wb3N0KCk7XG5cdFx0XHRcdC8vIGNoZWNrIGZvciBuZXR3b3JrIG9yIHNlcnZlciBlcnJvclxuXHRcdFx0fSBlbHNlIGlmICgoZXJyb3JDb2RlID09PSBudWxsIHx8IGVycm9yQ29kZSA9PT0gdW5kZWZpbmVkKSAmJiBjdHgucmV0cmllcysrIDwgY3R4Lm1heFJldHJpZXMpIHtcblx0XHRcdFx0Ly8gdGhlIGVycm9yIG1pZ2h0IGJlIHRyYW5zaWVudCwgc28gdHJ5IGFnYWluXG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmluZm8od2luZG93LndnVUxTKCfkv53lrZjlpLHotKXvvIzlnKgy56eS5ZCO6YeN6K+V4oCm4oCmJywgJ+WEsuWtmOWkseaVl++8jOWcqDLnp5Llvozph43oqabigKbigKYnKSk7XG5cdFx0XHRcdC0tTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0OyAvLyBhbGxvdyBmb3Igbm9ybWFsIGNvbXBsZXRpb24gaWYgcmV0cnkgc3VjY2VlZHNcblx0XHRcdFx0Ly8gd2FpdCBmb3Igc29tZXRpbWUgZm9yIGNsaWVudCB0byByZWdhaW4gY29ubmVjdGl2aXR5XG5cdFx0XHRcdHNsZWVwKDIwMDApLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdGN0eC5zYXZlQXBpLnBvc3QoKTsgLy8gZ2l2ZSBpdCBhbm90aGVyIGdvIVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0Ly8gaGFyZCBlcnJvciwgZ2l2ZSB1cFxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBjdHguc2F2ZUFwaS5nZXRSZXNwb25zZSgpO1xuXHRcdFx0XHRjb25zdCBlcnJvckRhdGEgPVxuXHRcdFx0XHRcdHJlc3BvbnNlLmVycm9yIHx8XG5cdFx0XHRcdFx0Ly8gYmMgZXJyb3IgZm9ybWF0XG5cdFx0XHRcdFx0cmVzcG9uc2UuZXJyb3JzWzBdLmRhdGE7IC8vIGh0bWwvd2lraXRleHQvcGxhaW50ZXh0IGVycm9yIGZvcm1hdFxuXHRcdFx0XHRzd2l0Y2ggKGVycm9yQ29kZSkge1xuXHRcdFx0XHRcdGNhc2UgJ3Byb3RlY3RlZHBhZ2UnOlxuXHRcdFx0XHRcdFx0Ly8gbm9uLWFkbWluIGF0dGVtcHRpbmcgdG8gZWRpdCBhIHByb3RlY3RlZCBwYWdlIC0gdGhpcyBnaXZlcyBhIGZyaWVuZGxpZXIgbWVzc2FnZSB0aGFuIHRoZSBkZWZhdWx0XG5cdFx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+S4jeiDveS/neWtmOS/ruaUue+8mumhtemdouiiq+S/neaKpCcsICfkuI3og73lhLLlrZjkv67mlLnvvJrpoIHpnaLooqvkv53orbcnKSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdhYnVzZWZpbHRlci1kaXNhbGxvd2VkJzpcblx0XHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+e8lui+keiiq+mYsua7peeUqOi/h+a7pOWZqOinhOWImeKAnCcsICfnt6jovK/ooqvpmLLmv6vnlKjpgY7mv77lmajopo/liYfjgIwnKSArXG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3JEYXRhLmFidXNlZmlsdGVyLmRlc2NyaXB0aW9uICtcblx0XHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0XHRcdFx0XHQn4oCd6Zi75q2i44CC6Iul5oKo6K6k5Li65oKo55qE6K+l5qyh57yW6L6R5piv5pyJ5oSP5LmJ55qE77yM6K+36IezIExJQl90YWxrOueuoeeQhuWRmOWRiuekuuadvyDmj5DmiqXjgIInLFxuXHRcdFx0XHRcdFx0XHRcdFx0J+OAjemYu+atouOAguiLpeaCqOiqjeeCuuaCqOeahOipsuasoee3qOi8r+aYr+acieaEj+e+qeeahO+8jOiri+iHsyBMSUJfdGFsazrnrqHnkIblk6HlkYrnpLrmnb8g5o+Q5aCx44CCJ1xuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdhYnVzZWZpbHRlci13YXJuaW5nJzpcblx0XHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFtcblx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfnvJbovpHooqvpmLLmu6XnlKjov4fmu6Tlmajop4TliJnigJwnLCAn57eo6Lyv6KKr6Ziy5r+r55So6YGO5r++5Zmo6KaP5YmH44CMJyksXG5cdFx0XHRcdFx0XHRcdGVycm9yRGF0YS5hYnVzZWZpbHRlci5kZXNjcmlwdGlvbixcblx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKFxuXHRcdFx0XHRcdFx0XHRcdCfigJ3orablkYrvvIzoi6Xmgqjku43luIzmnJvlgZrlh7ror6XnvJbovpHvvIzor7flsJ3or5Xph43mlrDmj5DkuqTvvIzmoLnmja7ov4fmu6TlmajnmoTorr7nva7mgqjlj6/og73lj6/ku6XkvZzlh7rmraTnvJbovpHjgIInLFxuXHRcdFx0XHRcdFx0XHRcdCfjgI3orablkYrvvIzoi6Xmgqjku43luIzmnJvlgZrlh7roqbLnt6jovK/vvIzoq4vlmJfoqabph43mlrDmj5DkuqTvvIzmoLnmk5rpgY7mv77lmajnmoToqK3lrprmgqjlj6/og73lj6/ku6XkvZzlh7rmraTnt6jovK/jgIInXG5cdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRdKTtcblx0XHRcdFx0XHRcdC8vIFdlIHNob3VsZCBwcm92aWRlIHRoZSB1c2VyIHdpdGggYSB3YXkgdG8gYXV0b21hdGljYWxseSByZXRyeSB0aGUgYWN0aW9uIGlmIHRoZXkgc28gY2hvb3NlIC1cblx0XHRcdFx0XHRcdC8vIEkgY2FuJ3Qgc2VlIGhvdyB0byBkbyB0aGlzIHdpdGhvdXQgY3JlYXRpbmcgYSBVSSBkZXBlbmRlbmN5IG9uIE1vcmViaXRzLndpa2kucGFnZSB0aG91Z2ggLS0gVFRPXG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdzcGFtYmxhY2tsaXN0Jzoge1xuXHRcdFx0XHRcdFx0Ly8gSWYgbXVsdGlwbGUgaXRlbXMgYXJlIGJsYWNrbGlzdGVkLCB3ZSBvbmx5IHJldHVybiB0aGUgZmlyc3Rcblx0XHRcdFx0XHRcdGNvbnN0IFtzcGFtXSA9IGVycm9yRGF0YS5zcGFtYmxhY2tsaXN0Lm1hdGNoZXM7XG5cdFx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfkuI3og73kv53lrZjpobXpnaLvvIzlm6BVUkwgJywgJ+S4jeiDveWEsuWtmOmggemdou+8jOWboFVSTCAnKSArXG5cdFx0XHRcdFx0XHRcdFx0c3BhbSArXG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCcg5Zyo5Z6D5Zy+6ZO+5o6l6buR5ZCN5Y2V5Lit44CCJywgJyDlnKjlnoPlnL7pgKPntZDpu5HlkI3llq7kuK3jgIInKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5LiN6IO95L+d5a2Y5L+u5pS577yaJywgJ+S4jeiDveWEsuWtmOS/ruaUue+8micpICsgY3R4LnNhdmVBcGkuZ2V0RXJyb3JUZXh0KClcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y3R4LmVkaXRNb2RlID0gJ2FsbCc7IC8vIGNhbmNlbCBhcHBlbmQvcHJlcGVuZC9uZXdTZWN0aW9uL3JldmVydCBtb2Rlc1xuXHRcdFx0XHRpZiAoY3R4Lm9uU2F2ZUZhaWx1cmUpIHtcblx0XHRcdFx0XHRjdHgub25TYXZlRmFpbHVyZSh0aGlzKTsgLy8gaW52b2tlIGNhbGxiYWNrXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Y29uc3QgaXNUZXh0UmVkaXJlY3QgPSAodGV4dCkgPT4ge1xuXHRcdFx0aWYgKCF0ZXh0KSB7XG5cdFx0XHRcdC8vIG5vIHRleHQgLSBjb250ZW50IGVtcHR5IG9yIGluYWNjZXNzaWJsZSAocmV2ZGVsbGVkIG9yIHN1cHByZXNzZWQpXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBNb3JlYml0cy5sMTBuLnJlZGlyZWN0VGFnQWxpYXNlcy5zb21lKCh0YWcpID0+IHtcblx0XHRcdFx0cmV0dXJuIG5ldyBSZWdFeHAoYF5cXFxccyoke3RhZ31cXFxcV2AsICdpJykudGVzdCh0ZXh0KTtcblx0XHRcdH0pO1xuXHRcdH07XG5cdFx0Y29uc3QgZm5Mb29rdXBDcmVhdGlvblN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGN0eC5sb29rdXBDcmVhdGlvbkFwaS5nZXRSZXNwb25zZSgpLnF1ZXJ5O1xuXHRcdFx0aWYgKCFmbkNoZWNrUGFnZU5hbWUocmVzcG9uc2UsIGN0eC5vbkxvb2t1cENyZWF0aW9uRmFpbHVyZSkpIHtcblx0XHRcdFx0cmV0dXJuOyAvLyBhYm9ydFxuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCByZXYgPSByZXNwb25zZS5wYWdlc1swXS5yZXZpc2lvbnMgJiYgcmVzcG9uc2UucGFnZXNbMF0ucmV2aXNpb25zWzBdO1xuXHRcdFx0aWYgKCFyZXYpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfml6Dms5Xmib7liLAnLCAn54Sh5rOV5om+5YiwJykgK1xuXHRcdFx0XHRcdFx0Y3R4LnBhZ2VOYW1lICtcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn55qE5Lu75L2V5L+u6K6i54mI5pysJywgJ+eahOS7u+S9leS/ruiogueJiOacrCcpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGN0eC5vbkxvb2t1cENyZWF0aW9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFjdHgubG9va3VwTm9uUmVkaXJlY3RDcmVhdG9yIHx8ICFpc1RleHRSZWRpcmVjdChyZXYuY29udGVudCkpIHtcblx0XHRcdFx0Y3R4LmNyZWF0b3IgPSByZXYudXNlcjtcblx0XHRcdFx0aWYgKCFjdHguY3JlYXRvcikge1xuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5peg5rOV6I635Y+W6aG16Z2i5Yib5bu66ICF55qE5ZCN5a2XJywgJ+eEoeazleWPluW+l+mggemdouW7uueri+iAheeahOWQjeWtlycpKTtcblx0XHRcdFx0XHRjdHgub25Mb29rdXBDcmVhdGlvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGN0eC50aW1lc3RhbXAgPSByZXYudGltZXN0YW1wO1xuXHRcdFx0XHRpZiAoIWN0eC50aW1lc3RhbXApIHtcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+aXoOazleiOt+WPlumhtemdouWIm+W7uuaXtumXtCcsICfnhKHms5Xlj5blvpfpoIHpnaLlu7rnq4vmmYLplpMnKSk7XG5cdFx0XHRcdFx0Y3R4Lm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5pbmZvKHdpbmRvdy53Z1VMUygn5bey6I635Y+W6aG16Z2i5Yib5bu65L+h5oGvJywgJ+W3suWPluW+l+mggemdouW7uueri+izh+ioiicpKTtcblx0XHRcdFx0Y3R4Lm9uTG9va3VwQ3JlYXRpb25TdWNjZXNzKHRoaXMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3R4Lmxvb2t1cENyZWF0aW9uQXBpLnF1ZXJ5LnJ2bGltaXQgPSA1MDsgLy8gbW9kaWZ5IHByZXZpb3VzIHF1ZXJ5IHRvIGZldGNoIG1vcmUgcmV2aXNpb25zXG5cdFx0XHRcdGN0eC5sb29rdXBDcmVhdGlvbkFwaS5xdWVyeS50aXRsZXMgPSBjdHgucGFnZU5hbWU7IC8vIHVwZGF0ZSBwYWdlTmFtZSBpZiByZWRpcmVjdCByZXNvbHV0aW9uIHRvb2sgcGxhY2UgaW4gZWFybGllciBxdWVyeVxuXHRcdFx0XHRjdHgubG9va3VwQ3JlYXRpb25BcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfojrflj5bpobXpnaLliJvlu7rkv6Hmga8nLCAn5Y+W5b6X6aCB6Z2i5bu656uL6LOH6KiKJyksXG5cdFx0XHRcdFx0Y3R4Lmxvb2t1cENyZWF0aW9uQXBpLnF1ZXJ5LFxuXHRcdFx0XHRcdGZuTG9va3VwTm9uUmVkaXJlY3RDcmVhdG9yLFxuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHRcdGN0eC5vbkxvb2t1cENyZWF0aW9uRmFpbHVyZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRjdHgubG9va3VwQ3JlYXRpb25BcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0XHRjdHgubG9va3VwQ3JlYXRpb25BcGkucG9zdCgpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0Y29uc3QgZm5Mb29rdXBOb25SZWRpcmVjdENyZWF0b3IgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGN0eC5sb29rdXBDcmVhdGlvbkFwaS5nZXRSZXNwb25zZSgpLnF1ZXJ5O1xuXHRcdFx0Y29uc3QgcmV2cyA9IHJlc3BvbnNlLnBhZ2VzWzBdLnJldmlzaW9ucztcblx0XHRcdGZvciAoY29uc3QgcmV2IG9mIHJldnMpIHtcblx0XHRcdFx0aWYgKCFpc1RleHRSZWRpcmVjdChyZXYuY29udGVudCkpIHtcblx0XHRcdFx0XHRjdHguY3JlYXRvciA9IHJldi51c2VyO1xuXHRcdFx0XHRcdGN0eC50aW1lc3RhbXAgPSByZXYudGltZXN0YW1wO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWN0eC5jcmVhdG9yKSB7XG5cdFx0XHRcdC8vIGZhbGxiYWNrIHRvIGdpdmUgZmlyc3QgcmV2aXNpb24gYXV0aG9yIGlmIG5vIG5vbi1yZWRpcmVjdCB2ZXJzaW9uIGluIHRoZSBmaXJzdCA1MFxuXHRcdFx0XHRjdHguY3JlYXRvciA9IHJldnNbMF0udXNlcjtcblx0XHRcdFx0Y3R4LnRpbWVzdGFtcCA9IHJldnNbMF0udGltZXN0YW1wO1xuXHRcdFx0XHRpZiAoIWN0eC5jcmVhdG9yKSB7XG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfml6Dms5Xojrflj5bpobXpnaLliJvlu7rogIXnmoTlkI3lrZcnLCAn54Sh5rOV5Y+W5b6X6aCB6Z2i5bu656uL6ICF55qE5ZCN5a2XJykpO1xuXHRcdFx0XHRcdGN0eC5vbkxvb2t1cENyZWF0aW9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICghY3R4LnRpbWVzdGFtcCkge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+aXoOazleiOt+WPlumhtemdouWIm+W7uuaXtumXtCcsICfnhKHms5Xlj5blvpfpoIHpnaLlu7rnq4vmmYLplpMnKSk7XG5cdFx0XHRcdGN0eC5vbkxvb2t1cENyZWF0aW9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuaW5mbyh3aW5kb3cud2dVTFMoJ+W3suiOt+WPlumhtemdouWIm+W7uuS/oeaBrycsICflt7Llj5blvpfpoIHpnaLlu7rnq4vos4foqIonKSk7XG5cdFx0XHRjdHgub25Mb29rdXBDcmVhdGlvblN1Y2Nlc3ModGhpcyk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBDb21tb24gY2hlY2tzIGZvciBhY3Rpb24gbWV0aG9kcy4gVXNlZCBmb3IgbW92ZSwgdW5kZWxldGUsIGRlbGV0ZSxcblx0XHQgKiBwcm90ZWN0LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbiAtIFRoZSBhY3Rpb24gYmVpbmcgY2hlY2tlZC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gb25GYWlsdXJlIC0gRmFpbHVyZSBjYWxsYmFjay5cblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHRjb25zdCBmblByZWZsaWdodENoZWNrcyA9IGZ1bmN0aW9uIChhY3Rpb24sIG9uRmFpbHVyZSkge1xuXHRcdFx0Ly8gaWYgYSBub24tYWRtaW4gdHJpZXMgdG8gZG8gdGhpcywgZG9uJ3QgYm90aGVyXG5cdFx0XHRpZiAoIU1vcmViaXRzLnVzZXJJc1N5c29wICYmIGFjdGlvbiAhPT0gJ21vdmUnKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5peg5rOV5a+56aG16Z2i6L+b6KGM4oCcJywgJ+eEoeazleWwjemggemdoumAsuihjOOAjCcpICtcblx0XHRcdFx0XHRcdGFjdGlvbiArXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+KAneaTjeS9nO+8muWPquacieeuoeeQhuWRmOWPr+S7pei/m+ihjOatpOaTjeS9nCcsICfjgI3mk43kvZzvvJrlj6rmnInnrqHnkIblk6Hlj6/ku6XpgLLooYzmraTmk43kvZwnKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlmICghY3R4LmVkaXRTdW1tYXJ5KSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKGBJbnRlcm5hbCBlcnJvcjogJHthY3Rpb259IHJlYXNvbiBub3Qgc2V0ICh1c2Ugc2V0RWRpdFN1bW1hcnkgZnVuY3Rpb24pIWApO1xuXHRcdFx0XHRvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnVlOyAvLyBhbGwgT0tcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIENvbW1vbiBjaGVja3MgZm9yIGZuUHJvY2VzcyBmdW5jdGlvbnMgKGBmblByb2Nlc3NEZWxldGVgLCBgZm5Qcm9jZXNzTW92ZWAsIGV0Yy5cblx0XHQgKiBVc2VkIGZvciBtb3ZlLCB1bmRlbGV0ZSwgZGVsZXRlLCBwcm90ZWN0LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbiAtIFRoZSBhY3Rpb24gYmVpbmcgY2hlY2tlZC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gb25GYWlsdXJlIC0gRmFpbHVyZSBjYWxsYmFjay5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gcmVzcG9uc2UgLSBUaGUgcmVzcG9uc2UgZG9jdW1lbnQgZnJvbSB0aGUgQVBJIGNhbGwuXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0Y29uc3QgZm5Qcm9jZXNzQ2hlY2tzID0gZnVuY3Rpb24gKGFjdGlvbiwgb25GYWlsdXJlLCByZXNwb25zZSkge1xuXHRcdFx0Y29uc3QgW3ttaXNzaW5nfV0gPSByZXNwb25zZS5wYWdlcztcblx0XHRcdC8vIE5vIHVuZGVsZXRlIGFzIGFuIGV4aXN0aW5nIHBhZ2UgY291bGQgaGF2ZSBkZWxldGVkIHJldmlzaW9uc1xuXHRcdFx0Y29uc3QgYWN0aW9uTWlzc2luZyA9IG1pc3NpbmcgJiYgWydkZWxldGUnLCAnbW92ZSddLmluY2x1ZGVzKGFjdGlvbik7XG5cdFx0XHRjb25zdCBwcm90ZWN0TWlzc2luZyA9IGFjdGlvbiA9PT0gJ3Byb3RlY3QnICYmIG1pc3NpbmcgJiYgKGN0eC5wcm90ZWN0RWRpdCB8fCBjdHgucHJvdGVjdE1vdmUpO1xuXHRcdFx0Y29uc3Qgc2FsdE1pc3NpbmcgPSBhY3Rpb24gPT09ICdwcm90ZWN0JyAmJiAhbWlzc2luZyAmJiBjdHgucHJvdGVjdENyZWF0ZTtcblx0XHRcdGlmIChhY3Rpb25NaXNzaW5nIHx8IHByb3RlY3RNaXNzaW5nIHx8IHNhbHRNaXNzaW5nKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdGAke1xuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfml6Dms5Xlr7npobXpnaLov5vooYzigJwnLCAn54Sh5rOV5bCN6aCB6Z2i6YCy6KGM44CMJykgK1xuXHRcdFx0XHRcdFx0YWN0aW9uICtcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn4oCd5pON5L2c77yM5Zug5Li66aG16Z2iJywgJ+OAjeaTjeS9nO+8jOWboOeCuumggemdoicpICtcblx0XHRcdFx0XHRcdChtaXNzaW5nID8gJ+W3suS4jScgOiB3aW5kb3cud2dVTFMoJ+W3sue7jycsICflt7LntpMnKSlcblx0XHRcdFx0XHR95a2Y5ZyoYFxuXHRcdFx0XHQpO1xuXHRcdFx0XHRvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdC8vIERlbGV0ZSwgdW5kZWxldGUsIG1vdmVcblx0XHRcdC8vIGV4dHJhY3QgcHJvdGVjdGlvbiBpbmZvXG5cdFx0XHRsZXQgZWRpdHByb3Q7XG5cdFx0XHRpZiAoYWN0aW9uID09PSAndW5kZWxldGUnKSB7XG5cdFx0XHRcdGVkaXRwcm90ID0gcmVzcG9uc2UucGFnZXNbMF0ucHJvdGVjdGlvbi5maW5kTGFzdCgocHIpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gcHIudHlwZSA9PT0gJ2NyZWF0ZScgJiYgcHIubGV2ZWwgPT09ICdzeXNvcCc7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIGlmIChhY3Rpb24gPT09ICdkZWxldGUnIHx8IGFjdGlvbiA9PT0gJ21vdmUnKSB7XG5cdFx0XHRcdGVkaXRwcm90ID0gcmVzcG9uc2UucGFnZXNbMF0ucHJvdGVjdGlvbi5maW5kTGFzdCgocHIpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gcHIudHlwZSA9PT0gJ2VkaXQnICYmIHByLmxldmVsID09PSAnc3lzb3AnO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdGlmIChcblx0XHRcdFx0ZWRpdHByb3QgJiZcblx0XHRcdFx0IWN0eC5zdXBwcmVzc1Byb3RlY3RXYXJuaW5nICYmXG5cdFx0XHRcdCFjb25maXJtKFxuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5oKo5Y2z5bCG5a+55YWo5L+d5oqk6aG16Z2i4oCcJywgJ+aCqOWNs+Wwh+WwjeWFqOS/neitt+mggemdouOAjCcpICtcblx0XHRcdFx0XHRcdGN0eC5wYWdlTmFtZSArXG5cdFx0XHRcdFx0XHQoZWRpdHByb3QuZXhwaXJ5ID09PSAnaW5maW5pdHknXG5cdFx0XHRcdFx0XHRcdD8gd2luZG93LndnVUxTKCfigJ3vvIjmsLjkuYXvvIknLCAn44CN77yI5rC45LmF77yJJylcblx0XHRcdFx0XHRcdFx0OiBgJHtcblx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn4oCd77yI5Yiw5pyf77yaJywgJ+OAje+8iOWIsOacn++8micpICtcblx0XHRcdFx0XHRcdFx0XHRcdG5ldyBNb3JlYml0cy5kYXRlKGVkaXRwcm90LmV4cGlyeSkuY2FsZW5kYXIoJ3V0YycpXG5cdFx0XHRcdFx0XHRcdFx0fSAoVVRDKe+8iWApICtcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn4oCd6L+b6KGM4oCcJywgJ+OAjemAsuihjOOAjCcpICtcblx0XHRcdFx0XHRcdGFjdGlvbiArXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+KAneaTjeS9nCcsICfjgI3mk43kvZwnKSArXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0XHRcdCfjgIJcXG5cXG7ljZXlh7vnoa7lrprku6Xnu6fnu63mk43kvZzvvIzmiJbljZXlh7vlj5bmtojku6Xlj5bmtojmk43kvZzjgIInLFxuXHRcdFx0XHRcdFx0XHQn44CCXFxuXFxu6bue5pOK56K65a6a5Lul57m857qM5pON5L2c77yM5oiW6bue5pOK5Y+W5raI5Lul5Y+W5raI5pON5L2c44CCJ1xuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHQpXG5cdFx0XHQpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCflt7Llj5bmtojlr7nlhajkv53miqTpobXpnaLnmoTmk43kvZzjgIInLCAn5bey5Y+W5raI5bCN5YWo5L+d6K236aCB6Z2i55qE5pON5L2c44CCJykpO1xuXHRcdFx0XHRvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlmICghcmVzcG9uc2UudG9rZW5zLmNzcmZ0b2tlbikge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+aXoOazleiOt+WPluS7pOeJjOOAgicsICfnhKHms5Xlj5blvpfmrIrmnZbjgIInKSk7XG5cdFx0XHRcdG9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7IC8vIGFsbCBPS1xuXHRcdH07XG5cblx0XHRjb25zdCBmblByb2Nlc3NNb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0bGV0IHBhZ2VUaXRsZTtcblx0XHRcdGxldCB0b2tlbjtcblx0XHRcdGlmIChmbkNhblVzZU13VXNlclRva2VuKCdtb3ZlJykpIHtcblx0XHRcdFx0dG9rZW4gPSBtdy51c2VyLnRva2Vucy5nZXQoJ2NzcmZUb2tlbicpO1xuXHRcdFx0XHRwYWdlVGl0bGUgPSBjdHgucGFnZU5hbWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGN0eC5tb3ZlQXBpLmdldFJlc3BvbnNlKCkucXVlcnk7XG5cdFx0XHRcdGlmICghZm5Qcm9jZXNzQ2hlY2tzKCdtb3ZlJywgY3R4Lm9uTW92ZUZhaWx1cmUsIHJlc3BvbnNlKSkge1xuXHRcdFx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRva2VuID0gcmVzcG9uc2UudG9rZW5zLmNzcmZ0b2tlbjtcblx0XHRcdFx0Y29uc3QgW3BhZ2VdID0gcmVzcG9uc2UucGFnZXM7XG5cdFx0XHRcdHBhZ2VUaXRsZSA9IHBhZ2UudGl0bGU7XG5cdFx0XHRcdGN0eC53YXRjaGVkID0gcGFnZS53YXRjaGxpc3RleHBpcnkgfHwgcGFnZS53YXRjaGVkO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcXVlcnkgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ21vdmUnLFxuXHRcdFx0XHRmcm9tOiBwYWdlVGl0bGUsXG5cdFx0XHRcdHRvOiBjdHgubW92ZURlc3RpbmF0aW9uLFxuXHRcdFx0XHR0b2tlbixcblx0XHRcdFx0cmVhc29uOiBjdHguZWRpdFN1bW1hcnksXG5cdFx0XHRcdHdhdGNobGlzdDogY3R4LndhdGNobGlzdE9wdGlvbixcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKGN0eC5jaGFuZ2VUYWdzKSB7XG5cdFx0XHRcdHF1ZXJ5LnRhZ3MgPSBjdHguY2hhbmdlVGFncztcblx0XHRcdH1cblx0XHRcdGlmIChmbkFwcGx5V2F0Y2hsaXN0RXhwaXJ5KCkpIHtcblx0XHRcdFx0cXVlcnkud2F0Y2hsaXN0ZXhwaXJ5ID0gY3R4LndhdGNobGlzdEV4cGlyeTtcblx0XHRcdH1cblx0XHRcdGlmIChjdHgubW92ZVRhbGtQYWdlKSB7XG5cdFx0XHRcdHF1ZXJ5Lm1vdmV0YWxrID0gJ3RydWUnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN0eC5tb3ZlU3VicGFnZXMpIHtcblx0XHRcdFx0cXVlcnkubW92ZXN1YnBhZ2VzID0gJ3RydWUnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN0eC5tb3ZlU3VwcHJlc3NSZWRpcmVjdCkge1xuXHRcdFx0XHRxdWVyeS5ub3JlZGlyZWN0ID0gJ3RydWUnO1xuXHRcdFx0fVxuXHRcdFx0Y3R4Lm1vdmVQcm9jZXNzQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoJ+enu+WKqOmhtemdouKApuKApicsICfnp7vli5XpoIHpnaLigKbigKYnKSxcblx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdGN0eC5vbk1vdmVTdWNjZXNzLFxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0Y3R4Lm9uTW92ZUZhaWx1cmVcblx0XHRcdCk7XG5cdFx0XHRjdHgubW92ZVByb2Nlc3NBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0Y3R4Lm1vdmVQcm9jZXNzQXBpLnBvc3QoKTtcblx0XHR9O1xuXHRcdGNvbnN0IGZuUHJvY2Vzc1BhdHJvbCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IHF1ZXJ5ID0ge1xuXHRcdFx0XHRhY3Rpb246ICdwYXRyb2wnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdH07XG5cdFx0XHQvLyBEaWRuJ3QgbmVlZCB0byBsb2FkIHRoZSBwYWdlXG5cdFx0XHRpZiAoY3R4LnJjaWQpIHtcblx0XHRcdFx0cXVlcnkucmNpZCA9IGN0eC5yY2lkO1xuXHRcdFx0XHRxdWVyeS50b2tlbiA9IG13LnVzZXIudG9rZW5zLmdldCgncGF0cm9sVG9rZW4nKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gY3R4LnBhdHJvbEFwaS5nZXRSZXNwb25zZSgpLnF1ZXJ5O1xuXHRcdFx0XHQvLyBEb24ndCBwYXRyb2wgaWYgbm90IHVucGF0cm9sbGVkXG5cdFx0XHRcdGlmICghcmVzcG9uc2UucmVjZW50Y2hhbmdlc1swXS51bnBhdHJvbGxlZCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBbe2xhc3RyZXZpZH1dID0gcmVzcG9uc2UucGFnZXM7XG5cdFx0XHRcdGlmICghbGFzdHJldmlkKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHF1ZXJ5LnJldmlkID0gbGFzdHJldmlkO1xuXHRcdFx0XHRjb25zdCB0b2tlbiA9IHJlc3BvbnNlLnRva2Vucy5jc3JmdG9rZW47XG5cdFx0XHRcdGlmICghdG9rZW4pIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0cXVlcnkudG9rZW4gPSB0b2tlbjtcblx0XHRcdH1cblx0XHRcdGlmIChjdHguY2hhbmdlVGFncykge1xuXHRcdFx0XHRxdWVyeS50YWdzID0gY3R4LmNoYW5nZVRhZ3M7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBwYXRyb2xTdGF0ID0gbmV3IE1vcmViaXRzLnN0YXR1cyh3aW5kb3cud2dVTFMoJ+agh+iusOmhtemdouS4uuW3suW3oeafpScsICfmqJnoqJjpoIHpnaLngrrlt7Llt6Hmn6UnKSk7XG5cdFx0XHRjdHgucGF0cm9sUHJvY2Vzc0FwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0d2luZG93LndnVUxTKCflt6Hmn6XpobXpnaLigKbigKYnLCAn5beh5p+l6aCB6Z2i4oCm4oCmJyksXG5cdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHRwYXRyb2xTdGF0XG5cdFx0XHQpO1xuXHRcdFx0Y3R4LnBhdHJvbFByb2Nlc3NBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0Y3R4LnBhdHJvbFByb2Nlc3NBcGkucG9zdCgpO1xuXHRcdH07XG5cdFx0Y29uc3QgZm5Qcm9jZXNzRGVsZXRlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0bGV0IHBhZ2VUaXRsZTtcblx0XHRcdGxldCB0b2tlbjtcblx0XHRcdGlmIChmbkNhblVzZU13VXNlclRva2VuKCdkZWxldGUnKSkge1xuXHRcdFx0XHR0b2tlbiA9IG13LnVzZXIudG9rZW5zLmdldCgnY3NyZlRva2VuJyk7XG5cdFx0XHRcdHBhZ2VUaXRsZSA9IGN0eC5wYWdlTmFtZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gY3R4LmRlbGV0ZUFwaS5nZXRSZXNwb25zZSgpLnF1ZXJ5O1xuXHRcdFx0XHRpZiAoIWZuUHJvY2Vzc0NoZWNrcygnZGVsZXRlJywgY3R4Lm9uRGVsZXRlRmFpbHVyZSwgcmVzcG9uc2UpKSB7XG5cdFx0XHRcdFx0cmV0dXJuOyAvLyBhYm9ydFxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dG9rZW4gPSByZXNwb25zZS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdFx0XHRjb25zdCBbcGFnZV0gPSByZXNwb25zZS5wYWdlcztcblx0XHRcdFx0cGFnZVRpdGxlID0gcGFnZS50aXRsZTtcblx0XHRcdFx0Y3R4LndhdGNoZWQgPSBwYWdlLndhdGNobGlzdGV4cGlyeSB8fCBwYWdlLndhdGNoZWQ7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBxdWVyeSA9IHtcblx0XHRcdFx0YWN0aW9uOiAnZGVsZXRlJyxcblx0XHRcdFx0dGl0bGU6IHBhZ2VUaXRsZSxcblx0XHRcdFx0dG9rZW4sXG5cdFx0XHRcdHJlYXNvbjogY3R4LmVkaXRTdW1tYXJ5LFxuXHRcdFx0XHR3YXRjaGxpc3Q6IGN0eC53YXRjaGxpc3RPcHRpb24sXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0fTtcblx0XHRcdGlmIChjdHguY2hhbmdlVGFncykge1xuXHRcdFx0XHRxdWVyeS50YWdzID0gY3R4LmNoYW5nZVRhZ3M7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZm5BcHBseVdhdGNobGlzdEV4cGlyeSgpKSB7XG5cdFx0XHRcdHF1ZXJ5LndhdGNobGlzdGV4cGlyeSA9IGN0eC53YXRjaGxpc3RFeHBpcnk7XG5cdFx0XHR9XG5cdFx0XHRjdHguZGVsZXRlUHJvY2Vzc0FwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0d2luZG93LndnVUxTKCfliKDpmaTpobXpnaLigKbigKYnLCAn5Yiq6Zmk6aCB6Z2i4oCm4oCmJyksXG5cdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHRjdHgub25EZWxldGVTdWNjZXNzLFxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0Zm5Qcm9jZXNzRGVsZXRlRXJyb3Jcblx0XHRcdCk7XG5cdFx0XHRjdHguZGVsZXRlUHJvY2Vzc0FwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRjdHguZGVsZXRlUHJvY2Vzc0FwaS5wb3N0KCk7XG5cdFx0fTtcblx0XHQvLyBjYWxsYmFjayBmcm9tIGRlbGV0ZVByb2Nlc3NBcGkucG9zdCgpXG5cdFx0Y29uc3QgZm5Qcm9jZXNzRGVsZXRlRXJyb3IgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCBlcnJvckNvZGUgPSBjdHguZGVsZXRlUHJvY2Vzc0FwaS5nZXRFcnJvckNvZGUoKTtcblx0XHRcdC8vIGNoZWNrIGZvciBcIkRhdGFiYXNlIHF1ZXJ5IGVycm9yXCJcblx0XHRcdGlmIChlcnJvckNvZGUgPT09ICdpbnRlcm5hbF9hcGlfZXJyb3JfREJRdWVyeUVycm9yJyAmJiBjdHgucmV0cmllcysrIDwgY3R4Lm1heFJldHJpZXMpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuaW5mbyh3aW5kb3cud2dVTFMoJ+aVsOaNruW6k+afpeivoumUmeivr++8jOmHjeivlScsICfos4fmlpnluqvmn6XoqaLpjK/oqqTvvIzph43oqaYnKSk7XG5cdFx0XHRcdC0tTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0OyAvLyBhbGxvdyBmb3Igbm9ybWFsIGNvbXBsZXRpb24gaWYgcmV0cnkgc3VjY2VlZHNcblx0XHRcdFx0Y3R4LmRlbGV0ZVByb2Nlc3NBcGkucG9zdCgpOyAvLyBnaXZlIGl0IGFub3RoZXIgZ28hXG5cdFx0XHR9IGVsc2UgaWYgKGVycm9yQ29kZSA9PT0gJ21pc3Npbmd0aXRsZScpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfkuI3og73liKDpmaTpobXpnaLvvIzlm6Dlhbblt7LkuI3lrZjlnKgnLCAn5LiN6IO95Yiq6Zmk6aCB6Z2i77yM5Zug5YW25bey5LiN5a2Y5ZyoJykpO1xuXHRcdFx0XHRpZiAoY3R4Lm9uRGVsZXRlRmFpbHVyZSkge1xuXHRcdFx0XHRcdGN0eC5vbkRlbGV0ZUZhaWx1cmUuY2FsbCh0aGlzLCBjdHguZGVsZXRlUHJvY2Vzc0FwaSk7IC8vIGludm9rZSBjYWxsYmFja1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIGhhcmQgZXJyb3IsIGdpdmUgdXBcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5peg5rOV5Yig6Zmk6aG16Z2i77yaJywgJ+eEoeazleWIqumZpOmggemdou+8micpICsgY3R4LmRlbGV0ZVByb2Nlc3NBcGkuZ2V0RXJyb3JUZXh0KClcblx0XHRcdFx0KTtcblx0XHRcdFx0aWYgKGN0eC5vbkRlbGV0ZUZhaWx1cmUpIHtcblx0XHRcdFx0XHRjdHgub25EZWxldGVGYWlsdXJlLmNhbGwodGhpcywgY3R4LmRlbGV0ZVByb2Nlc3NBcGkpOyAvLyBpbnZva2UgY2FsbGJhY2tcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRjb25zdCBmblByb2Nlc3NVbmRlbGV0ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGxldCBwYWdlVGl0bGU7XG5cdFx0XHRsZXQgdG9rZW47XG5cdFx0XHRpZiAoZm5DYW5Vc2VNd1VzZXJUb2tlbigndW5kZWxldGUnKSkge1xuXHRcdFx0XHR0b2tlbiA9IG13LnVzZXIudG9rZW5zLmdldCgnY3NyZlRva2VuJyk7XG5cdFx0XHRcdHBhZ2VUaXRsZSA9IGN0eC5wYWdlTmFtZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gY3R4LnVuZGVsZXRlQXBpLmdldFJlc3BvbnNlKCkucXVlcnk7XG5cdFx0XHRcdGlmICghZm5Qcm9jZXNzQ2hlY2tzKCd1bmRlbGV0ZScsIGN0eC5vblVuZGVsZXRlRmFpbHVyZSwgcmVzcG9uc2UpKSB7XG5cdFx0XHRcdFx0cmV0dXJuOyAvLyBhYm9ydFxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dG9rZW4gPSByZXNwb25zZS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdFx0XHRjb25zdCBbcGFnZV0gPSByZXNwb25zZS5wYWdlcztcblx0XHRcdFx0cGFnZVRpdGxlID0gcGFnZS50aXRsZTtcblx0XHRcdFx0Y3R4LndhdGNoZWQgPSBwYWdlLndhdGNobGlzdGV4cGlyeSB8fCBwYWdlLndhdGNoZWQ7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBxdWVyeSA9IHtcblx0XHRcdFx0YWN0aW9uOiAndW5kZWxldGUnLFxuXHRcdFx0XHR0aXRsZTogcGFnZVRpdGxlLFxuXHRcdFx0XHR0b2tlbixcblx0XHRcdFx0cmVhc29uOiBjdHguZWRpdFN1bW1hcnksXG5cdFx0XHRcdHdhdGNobGlzdDogY3R4LndhdGNobGlzdE9wdGlvbixcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKGN0eC5jaGFuZ2VUYWdzKSB7XG5cdFx0XHRcdHF1ZXJ5LnRhZ3MgPSBjdHguY2hhbmdlVGFncztcblx0XHRcdH1cblx0XHRcdGlmIChmbkFwcGx5V2F0Y2hsaXN0RXhwaXJ5KCkpIHtcblx0XHRcdFx0cXVlcnkud2F0Y2hsaXN0ZXhwaXJ5ID0gY3R4LndhdGNobGlzdEV4cGlyeTtcblx0XHRcdH1cblx0XHRcdGN0eC51bmRlbGV0ZVByb2Nlc3NBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUygn6L+Y5Y6f6aG16Z2i4oCm4oCmJywgJ+mChOWOn+mggemdouKApuKApicpLFxuXHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0Y3R4Lm9uVW5kZWxldGVTdWNjZXNzLFxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0Zm5Qcm9jZXNzVW5kZWxldGVFcnJvclxuXHRcdFx0KTtcblx0XHRcdGN0eC51bmRlbGV0ZVByb2Nlc3NBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0Y3R4LnVuZGVsZXRlUHJvY2Vzc0FwaS5wb3N0KCk7XG5cdFx0fTtcblx0XHQvLyBjYWxsYmFjayBmcm9tIHVuZGVsZXRlUHJvY2Vzc0FwaS5wb3N0KClcblx0XHRjb25zdCBmblByb2Nlc3NVbmRlbGV0ZUVycm9yID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgZXJyb3JDb2RlID0gY3R4LnVuZGVsZXRlUHJvY2Vzc0FwaS5nZXRFcnJvckNvZGUoKTtcblx0XHRcdC8vIGNoZWNrIGZvciBcIkRhdGFiYXNlIHF1ZXJ5IGVycm9yXCJcblx0XHRcdGlmIChlcnJvckNvZGUgPT09ICdpbnRlcm5hbF9hcGlfZXJyb3JfREJRdWVyeUVycm9yJykge1xuXHRcdFx0XHRpZiAoY3R4LnJldHJpZXMrKyA8IGN0eC5tYXhSZXRyaWVzKSB7XG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuaW5mbyh3aW5kb3cud2dVTFMoJ+aVsOaNruW6k+afpeivoumUmeivr++8jOmHjeivlScsICfos4fmlpnluqvmn6XoqaLpjK/oqqTvvIzph43oqaYnKSk7XG5cdFx0XHRcdFx0LS1Nb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQ7IC8vIGFsbG93IGZvciBub3JtYWwgY29tcGxldGlvbiBpZiByZXRyeSBzdWNjZWVkc1xuXHRcdFx0XHRcdGN0eC51bmRlbGV0ZVByb2Nlc3NBcGkucG9zdCgpOyAvLyBnaXZlIGl0IGFub3RoZXIgZ28hXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0XHRcdCfmjIHnu63nmoTmlbDmja7lupPmn6Xor6LplJnor6/vvIzph43mlrDliqDovb3pobXpnaLlubbph43or5UnLFxuXHRcdFx0XHRcdFx0XHQn5oyB57qM55qE6LOH5paZ5bqr5p+l6Kmi6Yyv6Kqk77yM6YeN5paw6LyJ5YWl6aCB6Z2i5Lim6YeN6KmmJ1xuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0aWYgKGN0eC5vblVuZGVsZXRlRmFpbHVyZSkge1xuXHRcdFx0XHRcdFx0Y3R4Lm9uVW5kZWxldGVGYWlsdXJlLmNhbGwodGhpcywgY3R4LnVuZGVsZXRlUHJvY2Vzc0FwaSk7IC8vIGludm9rZSBjYWxsYmFja1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChlcnJvckNvZGUgPT09ICdjYW50dW5kZWxldGUnKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHRcdCfml6Dms5Xov5jljp/liKDpmaTpobXpnaLvvIzlm6DmsqHmnInniYjmnKzkvpvov5jljp/miJblt7Looqvov5jljp8nLFxuXHRcdFx0XHRcdFx0J+eEoeazlemChOWOn+WIqumZpOmggemdou+8jOWboOaykuacieeJiOacrOS+m+mChOWOn+aIluW3suiiq+mChOWOnydcblx0XHRcdFx0XHQpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGlmIChjdHgub25VbmRlbGV0ZUZhaWx1cmUpIHtcblx0XHRcdFx0XHRjdHgub25VbmRlbGV0ZUZhaWx1cmUuY2FsbCh0aGlzLCBjdHgudW5kZWxldGVQcm9jZXNzQXBpKTsgLy8gaW52b2tlIGNhbGxiYWNrXG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gaGFyZCBlcnJvciwgZ2l2ZSB1cFxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfml6Dms5Xov5jljp/pobXpnaLvvJonLCAn54Sh5rOV6YKE5Y6f6aCB6Z2i77yaJykgKyBjdHgudW5kZWxldGVQcm9jZXNzQXBpLmdldEVycm9yVGV4dCgpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGlmIChjdHgub25VbmRlbGV0ZUZhaWx1cmUpIHtcblx0XHRcdFx0XHRjdHgub25VbmRlbGV0ZUZhaWx1cmUuY2FsbCh0aGlzLCBjdHgudW5kZWxldGVQcm9jZXNzQXBpKTsgLy8gaW52b2tlIGNhbGxiYWNrXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Y29uc3QgZm5Qcm9jZXNzUHJvdGVjdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gY3R4LnByb3RlY3RBcGkuZ2V0UmVzcG9uc2UoKS5xdWVyeTtcblx0XHRcdGlmICghZm5Qcm9jZXNzQ2hlY2tzKCdwcm90ZWN0JywgY3R4Lm9uUHJvdGVjdEZhaWx1cmUsIHJlc3BvbnNlKSkge1xuXHRcdFx0XHRyZXR1cm47IC8vIGFib3J0XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHRva2VuID0gcmVzcG9uc2UudG9rZW5zLmNzcmZ0b2tlbjtcblx0XHRcdGNvbnN0IFtwYWdlXSA9IHJlc3BvbnNlLnBhZ2VzO1xuXHRcdFx0Y29uc3QgcGFnZVRpdGxlID0gcGFnZS50aXRsZTtcblx0XHRcdGN0eC53YXRjaGVkID0gcGFnZS53YXRjaGxpc3RleHBpcnkgfHwgcGFnZS53YXRjaGVkO1xuXHRcdFx0Ly8gRmV0Y2ggZXhpc3RpbmcgcHJvdGVjdGlvbiBsZXZlbHNcblx0XHRcdGNvbnN0IHBycyA9IHJlc3BvbnNlLnBhZ2VzWzBdLnByb3RlY3Rpb247XG5cdFx0XHRsZXQgZWRpdHByb3Q7XG5cdFx0XHRsZXQgbW92ZXByb3Q7XG5cdFx0XHRsZXQgY3JlYXRlcHJvdDtcblx0XHRcdGZvciAoY29uc3QgcHIgb2YgcHJzKSB7XG5cdFx0XHRcdC8vIEZpbHRlciBvdXQgcHJvdGVjdGlvbiBmcm9tIGNhc2NhZGluZ1xuXHRcdFx0XHRpZiAocHIudHlwZSA9PT0gJ2VkaXQnICYmICFwci5zb3VyY2UpIHtcblx0XHRcdFx0XHRlZGl0cHJvdCA9IHByO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHByLnR5cGUgPT09ICdtb3ZlJykge1xuXHRcdFx0XHRcdG1vdmVwcm90ID0gcHI7XG5cdFx0XHRcdH0gZWxzZSBpZiAocHIudHlwZSA9PT0gJ2NyZWF0ZScpIHtcblx0XHRcdFx0XHRjcmVhdGVwcm90ID0gcHI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIEZhbGwgYmFjayB0byBjdXJyZW50IGxldmVscyBpZiBub3QgZXhwbGljaXRseSBzZXRcblx0XHRcdGlmICghY3R4LnByb3RlY3RFZGl0ICYmIGVkaXRwcm90KSB7XG5cdFx0XHRcdGN0eC5wcm90ZWN0RWRpdCA9IHtcblx0XHRcdFx0XHRsZXZlbDogZWRpdHByb3QubGV2ZWwsXG5cdFx0XHRcdFx0ZXhwaXJ5OiBlZGl0cHJvdC5leHBpcnksXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWN0eC5wcm90ZWN0TW92ZSAmJiBtb3ZlcHJvdCkge1xuXHRcdFx0XHRjdHgucHJvdGVjdE1vdmUgPSB7XG5cdFx0XHRcdFx0bGV2ZWw6IG1vdmVwcm90LmxldmVsLFxuXHRcdFx0XHRcdGV4cGlyeTogbW92ZXByb3QuZXhwaXJ5LFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFjdHgucHJvdGVjdENyZWF0ZSAmJiBjcmVhdGVwcm90KSB7XG5cdFx0XHRcdGN0eC5wcm90ZWN0Q3JlYXRlID0ge1xuXHRcdFx0XHRcdGxldmVsOiBjcmVhdGVwcm90LmxldmVsLFxuXHRcdFx0XHRcdGV4cGlyeTogY3JlYXRlcHJvdC5leHBpcnksXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHQvLyBEZWZhdWx0IHRvIHByZS1leGlzdGluZyBjYXNjYWRpbmcgcHJvdGVjdGlvbiBpZiB1bmNoYW5nZWQgKHNpbWlsYXIgdG8gYWJvdmUpXG5cdFx0XHRpZiAoY3R4LnByb3RlY3RDYXNjYWRlID09PSBudWxsKSB7XG5cdFx0XHRcdGN0eC5wcm90ZWN0Q2FzY2FkZSA9ICEhcHJzLmZpbHRlcigocHIpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gcHIuY2FzY2FkZTtcblx0XHRcdFx0fSkubGVuZ3RoO1xuXHRcdFx0fVxuXHRcdFx0Ly8gV2FybiBpZiBjYXNjYWRpbmcgcHJvdGVjdGlvbiBiZWluZyBhcHBsaWVkIHdpdGggYW4gaW52YWxpZCBwcm90ZWN0aW9uIGxldmVsLFxuXHRcdFx0Ly8gd2hpY2ggZm9yIGVkaXQgcHJvdGVjdGlvbiB3aWxsIGNhdXNlIGNhc2NhZGluZyB0byBiZSBzaWxlbnRseSBzdHJpcHBlZFxuXHRcdFx0aWYgKGN0eC5wcm90ZWN0Q2FzY2FkZSkge1xuXHRcdFx0XHQvLyBPbiBtb3ZlIHByb3RlY3Rpb24sIHRoaXMgaXMgdGVjaG5pY2FsbHkgc3RyaWN0ZXIgdGhhbiB0aGUgTVcgQVBJLFxuXHRcdFx0XHQvLyBidXQgc2VlbXMgcmVhc29uYWJsZSB0byBhdm9pZCBkdW1iIHZhbHVlcyBhbmQgbWlzbGVhZGluZyBsb2cgZW50cmllcyAoVDI2NTYyNilcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdCghY3R4LnByb3RlY3RFZGl0IHx8XG5cdFx0XHRcdFx0XHRjdHgucHJvdGVjdEVkaXQubGV2ZWwgIT09ICdzeXNvcCcgfHxcblx0XHRcdFx0XHRcdCFjdHgucHJvdGVjdE1vdmUgfHxcblx0XHRcdFx0XHRcdGN0eC5wcm90ZWN0TW92ZS5sZXZlbCAhPT0gJ3N5c29wJykgJiZcblx0XHRcdFx0XHQhY29uZmlybShcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5oKo5bey5a+54oCcJywgJ+aCqOW3suWwjeOAjCcpICtcblx0XHRcdFx0XHRcdFx0Y3R4LnBhZ2VOYW1lICtcblx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfigJ3lkK/nlKjkuobov57plIHkv53miqQnLCAn44CN5ZWf55So5LqG6YCj6Y6W5L+d6K23JykgK1xuXHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0XHRcdFx0J++8jOS9huayoeacieiuvue9ruS7heeuoeeQhuWRmOeahOS/neaKpOe6p+WIq+OAglxcblxcbicsXG5cdFx0XHRcdFx0XHRcdFx0J++8jOS9huaykuacieioreWumuWDheeuoeeQhuWToeeahOS/neitt+e0muWIpeOAglxcblxcbidcblx0XHRcdFx0XHRcdFx0KSArXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHRcdFx0XHQn5Y2V5Ye756Gu6K6k5Lul6Ieq5Yqo6LCD5pW05bm257un57ut6L+e6ZSB5YWo5L+d5oqk77yM5Y2V5Ye75Y+W5raI5Lul6Lez6L+H5q2k5pON5L2cJyxcblx0XHRcdFx0XHRcdFx0XHQn6bue5pOK56K66KqN5Lul6Ieq5YuV6Kq/5pW05Lim57m857qM6YCj6Y6W5YWo5L+d6K2377yM6bue5pOK5Y+W5raI5Lul6Lez6YGO5q2k5pON5L2cJ1xuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+i/numUgeS/neaKpOW3suWPlua2iOOAgicsICfpgKPpjpbkv53orbflt7Llj5bmtojjgIInKSk7XG5cdFx0XHRcdFx0Y3R4Lm9uUHJvdGVjdEZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGN0eC5wcm90ZWN0RWRpdC5sZXZlbCA9ICdzeXNvcCc7XG5cdFx0XHRcdGN0eC5wcm90ZWN0TW92ZS5sZXZlbCA9ICdzeXNvcCc7XG5cdFx0XHR9XG5cdFx0XHQvLyBCdWlsZCBwcm90ZWN0aW9uIGxldmVscyBhbmQgZXhwaXJ5cyAoZXhwaXJpZXM/KSBmb3IgcXVlcnlcblx0XHRcdGNvbnN0IHByb3RlY3Rpb25zID0gW107XG5cdFx0XHRjb25zdCBleHBpcnlzID0gW107XG5cdFx0XHRpZiAoY3R4LnByb3RlY3RFZGl0KSB7XG5cdFx0XHRcdHByb3RlY3Rpb25zW3Byb3RlY3Rpb25zLmxlbmd0aF0gPSBgZWRpdD0ke2N0eC5wcm90ZWN0RWRpdC5sZXZlbH1gO1xuXHRcdFx0XHRleHBpcnlzW2V4cGlyeXMubGVuZ3RoXSA9IGN0eC5wcm90ZWN0RWRpdC5leHBpcnk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3R4LnByb3RlY3RNb3ZlKSB7XG5cdFx0XHRcdHByb3RlY3Rpb25zW3Byb3RlY3Rpb25zLmxlbmd0aF0gPSBgbW92ZT0ke2N0eC5wcm90ZWN0TW92ZS5sZXZlbH1gO1xuXHRcdFx0XHRleHBpcnlzW2V4cGlyeXMubGVuZ3RoXSA9IGN0eC5wcm90ZWN0TW92ZS5leHBpcnk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3R4LnByb3RlY3RDcmVhdGUpIHtcblx0XHRcdFx0cHJvdGVjdGlvbnNbcHJvdGVjdGlvbnMubGVuZ3RoXSA9IGBjcmVhdGU9JHtjdHgucHJvdGVjdENyZWF0ZS5sZXZlbH1gO1xuXHRcdFx0XHRleHBpcnlzW2V4cGlyeXMubGVuZ3RoXSA9IGN0eC5wcm90ZWN0Q3JlYXRlLmV4cGlyeTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHF1ZXJ5ID0ge1xuXHRcdFx0XHRhY3Rpb246ICdwcm90ZWN0Jyxcblx0XHRcdFx0dGl0bGU6IHBhZ2VUaXRsZSxcblx0XHRcdFx0dG9rZW4sXG5cdFx0XHRcdHByb3RlY3Rpb25zOiBwcm90ZWN0aW9ucy5qb2luKCd8JyksXG5cdFx0XHRcdGV4cGlyeTogZXhwaXJ5cy5qb2luKCd8JyksXG5cdFx0XHRcdHJlYXNvbjogY3R4LmVkaXRTdW1tYXJ5LFxuXHRcdFx0XHR3YXRjaGxpc3Q6IGN0eC53YXRjaGxpc3RPcHRpb24sXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0fTtcblx0XHRcdC8vIE9ubHkgc2hvd3MgdXAgaW4gbG9ncywgbm90IHBhZ2UgaGlzdG9yeVxuXHRcdFx0aWYgKGN0eC5jaGFuZ2VUYWdzKSB7XG5cdFx0XHRcdHF1ZXJ5LnRhZ3MgPSBjdHguY2hhbmdlVGFncztcblx0XHRcdH1cblx0XHRcdGlmIChmbkFwcGx5V2F0Y2hsaXN0RXhwaXJ5KCkpIHtcblx0XHRcdFx0cXVlcnkud2F0Y2hsaXN0ZXhwaXJ5ID0gY3R4LndhdGNobGlzdEV4cGlyeTtcblx0XHRcdH1cblx0XHRcdGlmIChjdHgucHJvdGVjdENhc2NhZGUpIHtcblx0XHRcdFx0cXVlcnkuY2FzY2FkZSA9ICd0cnVlJztcblx0XHRcdH1cblx0XHRcdGN0eC5wcm90ZWN0UHJvY2Vzc0FwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0d2luZG93LndnVUxTKCfkv53miqTpobXpnaLigKbigKYnLCAn5L+d6K236aCB6Z2i4oCm4oCmJyksXG5cdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHRjdHgub25Qcm90ZWN0U3VjY2Vzcyxcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdGN0eC5vblByb3RlY3RGYWlsdXJlXG5cdFx0XHQpO1xuXHRcdFx0Y3R4LnByb3RlY3RQcm9jZXNzQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdGN0eC5wcm90ZWN0UHJvY2Vzc0FwaS5wb3N0KCk7XG5cdFx0fTtcblx0XHRjb25zdCBzbGVlcCA9IChtaWxsaXNlY29uZHMpID0+IHtcblx0XHRcdGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZCgpO1xuXHRcdFx0c2V0VGltZW91dChkZWZlcnJlZC5yZXNvbHZlLCBtaWxsaXNlY29uZHMpO1xuXHRcdFx0cmV0dXJuIGRlZmVycmVkO1xuXHRcdH07XG5cdH07IC8vIGVuZCBNb3JlYml0cy53aWtpLnBhZ2Vcblx0LyogKioqKioqKioqKioqKioqKiBNb3JlYml0cy53aWtpLnByZXZpZXcgKioqKioqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogVXNlIHRoZSBBUEkgdG8gcGFyc2UgYSBmcmFnbWVudCBvZiB3aWtpdGV4dCBhbmQgcmVuZGVyIGl0IGFzIEhUTUwuXG5cdCAqXG5cdCAqIFRoZSBzdWdnZXN0ZWQgaW1wbGVtZW50YXRpb24gcGF0dGVybiAoaW4ge0BsaW5rIE1vcmViaXRzLnNpbXBsZVdpbmRvd30gYW5kXG5cdCAqIHtAbGluayBNb3JlYml0cy5xdWlja0Zvcm19IHNpdHVhdGlvbnMpIGlzIHRvIGNvbnN0cnVjdCBhXG5cdCAqIGBNb3JlYml0cy53aWtpLnByZXZpZXdgIG9iamVjdCBhZnRlciByZW5kZXJpbmcgYSBgTW9yZWJpdHMucXVpY2tGb3JtYCwgYW5kXG5cdCAqIGJpbmQgdGhlIG9iamVjdCB0byBhbiBhcmJpdHJhcnkgcHJvcGVydHkgb2YgdGhlIGZvcm0gKGUuZy4gfHByZXZpZXdlcnwpLlxuXHQgKiBGb3IgYW4gZXhhbXBsZSwgc2VlIHR3aW5rbGV3YXJuLmpzLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraVxuXHQgKiBAY2xhc3Ncblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcHJldmlld2JveCAtIFRoZSBlbGVtZW50IHRoYXQgd2lsbCBjb250YWluIHRoZSByZW5kZXJlZCBIVE1MLFxuXHQgKiB1c3VhbGx5IGEgPGRpdj4gZWxlbWVudC5cblx0ICovXG5cdE1vcmViaXRzLndpa2kucHJldmlldyA9IGZ1bmN0aW9uIChwcmV2aWV3Ym94KSB7XG5cdFx0dGhpcy5wcmV2aWV3Ym94ID0gcHJldmlld2JveDtcblx0XHQkKHByZXZpZXdib3gpLmFkZENsYXNzKCdtb3JlYml0cy1wcmV2aWV3Ym94JykuaGlkZSgpO1xuXHRcdC8qKlxuXHRcdCAqIERpc3BsYXlzIHRoZSBwcmV2aWV3IGJveCwgYW5kIGJlZ2lucyBhbiBhc3luY2hyb25vdXMgYXR0ZW1wdFxuXHRcdCAqIHRvIHJlbmRlciB0aGUgc3BlY2lmaWVkIHdpa2l0ZXh0LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHdpa2l0ZXh0IC0gV2lraXRleHQgdG8gcmVuZGVyOyBtb3N0IHRoaW5ncyBzaG91bGQgd29yaywgaW5jbHVkaW5nIGBzdWJzdDpgIGFuZCBgfn5+fmAuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IFtwYWdlVGl0bGVdIC0gT3B0aW9uYWwgcGFyYW1ldGVyIGZvciB0aGUgcGFnZSB0aGlzIHNob3VsZCBiZSByZW5kZXJlZCBhcyBiZWluZyBvbiwgaWYgb21pdHRlZCBpdCBpcyB0YWtlbiBhcyB0aGUgY3VycmVudCBwYWdlLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBbc2VjdGlvblRpdGxlXSAtIElmIHByb3ZpZGVkLCByZW5kZXIgdGhlIHRleHQgYXMgYSBuZXcgc2VjdGlvbiB1c2luZyB0aGlzIGFzIHRoZSB0aXRsZS5cblx0XHQgKiBAcmV0dXJucyB7alF1ZXJ5LnByb21pc2V9XG5cdFx0ICovXG5cdFx0dGhpcy5iZWdpblJlbmRlciA9ICh3aWtpdGV4dCwgcGFnZVRpdGxlLCBzZWN0aW9uVGl0bGUpID0+IHtcblx0XHRcdCQocHJldmlld2JveCkuc2hvdygpO1xuXHRcdFx0Y29uc3Qgc3RhdHVzc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdHByZXZpZXdib3guYXBwZW5kQ2hpbGQoc3RhdHVzc3Bhbik7XG5cdFx0XHRNb3JlYml0cy5zdGF0dXMuaW5pdChzdGF0dXNzcGFuKTtcblx0XHRcdC8vIOiLpemhtemdouS4jeaYr3dpa2l0ZXh077yI5L6L5aaCSlPjgIFDU1PnrYnvvInvvIzpgqPkuYjmib7kuIDkuKp3aWtpdGV4dOmhtemdouadpemihOiniOOAglxuXHRcdFx0bGV0IHBhZ2VOYW1lID0gbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpO1xuXHRcdFx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnUGFnZUNvbnRlbnRNb2RlbCcpICE9PSAnd2lraXRleHQnKSB7XG5cdFx0XHRcdHBhZ2VOYW1lID0gYERyYWZ0OiR7cGFnZU5hbWV9YDtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHF1ZXJ5ID0ge1xuXHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdHByb3A6IFsndGV4dCcsICdtb2R1bGVzJ10sXG5cdFx0XHRcdHBzdDogdHJ1ZSxcblx0XHRcdFx0Ly8gUFNUID0gcHJlLXNhdmUgdHJhbnNmb3JtOyB0aGlzIG1ha2VzIHN1YnN0aXR1dGlvbiB3b3JrIHByb3Blcmx5XG5cdFx0XHRcdHByZXZpZXc6IHRydWUsXG5cdFx0XHRcdHRleHQ6IHdpa2l0ZXh0LFxuXHRcdFx0XHR0aXRsZTogcGFnZVRpdGxlIHx8IHBhZ2VOYW1lLFxuXHRcdFx0XHRkaXNhYmxlbGltaXRyZXBvcnQ6IHRydWUsXG5cdFx0XHRcdGRpc2FibGVlZGl0c2VjdGlvbjogdHJ1ZSxcblx0XHRcdFx0dXNlbGFuZzogbXcuY29uZmlnLmdldCgnd2dVc2VyTGFuZ3VhZ2UnKSxcblx0XHRcdFx0Ly8gVXNlIHdnVXNlckxhbmd1YWdlIGZvciBwcmV2aWV3XG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0fTtcblx0XHRcdGlmIChzZWN0aW9uVGl0bGUpIHtcblx0XHRcdFx0cXVlcnkuc2VjdGlvbiA9ICduZXcnO1xuXHRcdFx0XHRxdWVyeS5zZWN0aW9udGl0bGUgPSBzZWN0aW9uVGl0bGU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCByZW5kZXJBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUygn5Yqg6L295Lit4oCm4oCmJywgJ+i8ieWFpeS4reKApuKApicpLFxuXHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0Zm5SZW5kZXJTdWNjZXNzLFxuXHRcdFx0XHRuZXcgTW9yZWJpdHMuc3RhdHVzKHdpbmRvdy53Z1VMUygn6aKE6KeIJywgJ+mgkOimvScpKVxuXHRcdFx0KTtcblx0XHRcdHJlbmRlckFwaS5wb3N0KCk7XG5cdFx0fTtcblx0XHRjb25zdCBmblJlbmRlclN1Y2Nlc3MgPSAoYXBpb2JqKSA9PiB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGFwaW9iai5nZXRSZXNwb25zZSgpO1xuXHRcdFx0Y29uc3QgaHRtbCA9IHJlc3BvbnNlLnBhcnNlLnRleHQ7XG5cdFx0XHRpZiAoIWh0bWwpIHtcblx0XHRcdFx0YXBpb2JqLnN0YXRlbGVtLmVycm9yKHdpbmRvdy53Z1VMUygn5Yqg6L296aKE6KeI5aSx6LSl77yM5oiW5qih5p2/5Li656m6JywgJ+i8ieWFpemgkOimveWkseaVl++8jOaIluaooeadv+eCuuepuicpKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0cHJldmlld2JveC5pbm5lckhUTUwgPSBodG1sO1xuXHRcdFx0bXcubG9hZGVyLmxvYWQocmVzcG9uc2UucGFyc2UubW9kdWxlc3R5bGVzKTtcblx0XHRcdG13LmxvYWRlci5sb2FkKHJlc3BvbnNlLnBhcnNlLm1vZHVsZXMpO1xuXHRcdFx0Ly8gdGhpcyBtYWtlcyBsaW5rcyBvcGVuIGluIG5ldyB0YWJcblx0XHRcdCQocHJldmlld2JveCkuZmluZCgnYScpLmF0dHIoJ3RhcmdldCcsICdfYmxhbmsnKS5hdHRyKCdyZWwnLCAnbm9vcGVuZXIgbm9yZWZlcnJlcicpO1xuXHRcdH07XG5cdFx0LyoqIEhpZGVzIHRoZSBwcmV2aWV3IGJveCBhbmQgY2xlYXJzIGl0LiAqL1xuXHRcdHRoaXMuY2xvc2VQcmV2aWV3ID0gKCkgPT4ge1xuXHRcdFx0JChwcmV2aWV3Ym94KS5lbXB0eSgpLmhpZGUoKTtcblx0XHR9O1xuXHR9O1xuXHQvKiAqKioqKioqKioqKioqKioqIE1vcmViaXRzLndpa2l0ZXh0ICoqKioqKioqKioqKioqKiogKi9cblx0LyoqXG5cdCAqIFdpa2l0ZXh0IG1hbmlwdWxhdGlvbi5cblx0ICpcblx0ICogQG5hbWVzcGFjZSBNb3JlYml0cy53aWtpdGV4dFxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICovXG5cdE1vcmViaXRzLndpa2l0ZXh0ID0ge307XG5cdC8qKlxuXHQgKiBHZXQgdGhlIHZhbHVlIG9mIGV2ZXJ5IHBhcmFtZXRlciBmb3VuZCBpbiB0aGUgd2lraXRleHQgb2YgYSBnaXZlbiB0ZW1wbGF0ZS5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2l0ZXh0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gV2lraXRleHQgY29udGFpbmluZyBhIHRlbXBsYXRlLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PTBdIC0gSW5kZXggbm90aW5nIHdoZXJlIGluIHRoZSB0ZXh0IHRoZSB0ZW1wbGF0ZSBiZWdpbnMuXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9IGB7bmFtZTogdGVtcGxhdGVOYW1lLCBwYXJhbWV0ZXJzOiB7a2V5OiB2YWx1ZX19YC5cblx0ICovXG5cdE1vcmViaXRzLndpa2l0ZXh0LnBhcnNlVGVtcGxhdGUgPSAodGV4dCwgc3RhcnQpID0+IHtcblx0XHRzdGFydCB8fD0gMDtcblx0XHRjb25zdCBsZXZlbCA9IFtdOyAvLyBUcmFjayBvZiBob3cgZGVlcCB3ZSBhcmUgKHt7LCB7e3ssIG9yIFtbKVxuXHRcdGxldCBjb3VudCA9IC0xOyAvLyBOdW1iZXIgb2YgcGFyYW1ldGVycyBmb3VuZFxuXHRcdGxldCB1bm5hbWVkID0gMDsgLy8gS2VlcCB0cmFjayBvZiB3aGF0IG51bWJlciBhbiB1bm5hbWVkIHBhcmFtZXRlciBzaG91bGQgcmVjZWl2ZVxuXHRcdGxldCBlcXVhbHMgPSAtMTsgLy8gQWZ0ZXIgZmluZGluZyBcIj1cIiBiZWZvcmUgYSBwYXJhbWV0ZXIsIHRoZSBpbmRleDsgb3RoZXJ3aXNlLCAtMVxuXHRcdGxldCBjdXJyZW50ID0gJyc7XG5cdFx0Y29uc3QgcmVzdWx0ID0ge1xuXHRcdFx0bmFtZTogJycsXG5cdFx0XHRwYXJhbWV0ZXJzOiB7fSxcblx0XHR9O1xuXHRcdGxldCBrZXk7XG5cdFx0bGV0IHZhbHVlO1xuXHRcdC8qKlxuXHRcdCAqIEZ1bmN0aW9uIHRvIGhhbmRsZSBmaW5kaW5nIHBhcmFtZXRlciB2YWx1ZXMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtmaW5hbD1mYWxzZV0gLSBXaGV0aGVyIHRoaXMgaXMgdGhlIGZpbmFsXG5cdFx0ICogcGFyYW1ldGVyIGFuZCB3ZSBuZWVkIHRvIHJlbW92ZSB0aGUgdHJhaWxpbmcgYH19YC5cblx0XHQgKi9cblx0XHRjb25zdCBmaW5kUGFyYW0gPSAoZmluYWwpID0+IHtcblx0XHRcdC8vIE5vdGhpbmcgZm91bmQgeWV0LCB0aGlzIG11c3QgYmUgdGhlIHRlbXBsYXRlIG5hbWVcblx0XHRcdGlmIChjb3VudCA9PT0gLTEpIHtcblx0XHRcdFx0cmVzdWx0Lm5hbWUgPSBjdXJyZW50LnNsaWNlKDIpLnRyaW0oKTtcblx0XHRcdFx0Kytjb3VudDtcblx0XHRcdH0gZWxzZSBpZiAoZXF1YWxzID09PSAtMSkge1xuXHRcdFx0XHQvLyBJbiBhIHBhcmFtZXRlclxuXHRcdFx0XHQvLyBObyBlcXVhbHMsIHNvIGl0IG11c3QgYmUgdW5uYW1lZDsgbm8gdHJpbSBzaW5jZSB3aGl0ZXNwYWNlIGFsbG93ZWRcblx0XHRcdFx0Y29uc3QgcGFyYW0gPSBmaW5hbCA/IGN1cnJlbnQuc2xpY2UoZXF1YWxzICsgMSwgLTIpIDogY3VycmVudDtcblx0XHRcdFx0aWYgKHBhcmFtKSB7XG5cdFx0XHRcdFx0cmVzdWx0LnBhcmFtZXRlcnNbKyt1bm5hbWVkXSA9IHBhcmFtO1xuXHRcdFx0XHRcdCsrY291bnQ7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIFdlIGZvdW5kIGFuIGVxdWFscywgc28gc2F2ZSB0aGUgcGFyYW1ldGVyIGFzIGtleTogdmFsdWVcblx0XHRcdFx0a2V5ID0gY3VycmVudC5zbGljZSgwLCBNYXRoLm1heCgwLCBlcXVhbHMpKS50cmltKCk7XG5cdFx0XHRcdHZhbHVlID0gZmluYWwgPyBjdXJyZW50LnNsaWNlKGVxdWFscyArIDEsIC0yKS50cmltKCkgOiBjdXJyZW50LnNsaWNlKE1hdGgubWF4KDAsIGVxdWFscyArIDEpKS50cmltKCk7XG5cdFx0XHRcdHJlc3VsdC5wYXJhbWV0ZXJzW2tleV0gPSB2YWx1ZTtcblx0XHRcdFx0ZXF1YWxzID0gLTE7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCB0ZXh0Lmxlbmd0aDsgKytpKSB7XG5cdFx0XHRjb25zdCB0ZXN0MyA9IHRleHQuc2xpY2UoaSwgaSArIDMpO1xuXHRcdFx0aWYgKHRlc3QzID09PSAne3t7JyB8fCAodGVzdDMgPT09ICd9fX0nICYmIGxldmVsLmF0KC0xKSA9PT0gMykpIHtcblx0XHRcdFx0Y3VycmVudCArPSB0ZXN0Mztcblx0XHRcdFx0aSArPSAyO1xuXHRcdFx0XHRpZiAodGVzdDMgPT09ICd7e3snKSB7XG5cdFx0XHRcdFx0bGV2ZWxbbGV2ZWwubGVuZ3RoXSA9IDM7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bGV2ZWwucG9wKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCB0ZXN0MiA9IHRleHQuc2xpY2UoaSwgaSArIDIpO1xuXHRcdFx0Ly8gRW50ZXJpbmcgYSB0ZW1wbGF0ZSAob3IgbGluaylcblx0XHRcdGlmICh0ZXN0MiA9PT0gJ3t7JyB8fCB0ZXN0MiA9PT0gJ1tbJykge1xuXHRcdFx0XHRjdXJyZW50ICs9IHRlc3QyO1xuXHRcdFx0XHQrK2k7XG5cdFx0XHRcdGlmICh0ZXN0MiA9PT0gJ3t7Jykge1xuXHRcdFx0XHRcdGxldmVsW2xldmVsLmxlbmd0aF0gPSAyO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxldmVsW2xldmVsLmxlbmd0aF0gPSAnd2wnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0Ly8gRWl0aGVyIGxlYXZpbmcgYSBsaW5rIG9yIHRlbXBsYXRlL3BhcnNlciBmdW5jdGlvblxuXHRcdFx0aWYgKCh0ZXN0MiA9PT0gJ319JyAmJiBsZXZlbC5hdCgtMSkgPT09IDIpIHx8ICh0ZXN0MiA9PT0gJ11dJyAmJiBsZXZlbC5hdCgtMSkgPT09ICd3bCcpKSB7XG5cdFx0XHRcdGN1cnJlbnQgKz0gdGVzdDI7XG5cdFx0XHRcdCsraTtcblx0XHRcdFx0bGV2ZWwucG9wKCk7XG5cdFx0XHRcdC8vIEZpbmQgdGhlIGZpbmFsIHBhcmFtZXRlciBpZiB0aGlzIHJlYWxseSBpcyB0aGUgZW5kXG5cdFx0XHRcdGlmICh0ZXN0MiA9PT0gJ319JyAmJiBsZXZlbC5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRmaW5kUGFyYW0odHJ1ZSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGV4dC5jaGFyQXQoaSkgPT09ICd8JyAmJiBsZXZlbC5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0Ly8gQW5vdGhlciBwaXBlIGZvdW5kLCB0b3BsZXZlbCwgc28gcGFyYW1ldGVyIGNvbWluZyB1cCFcblx0XHRcdFx0ZmluZFBhcmFtKCk7XG5cdFx0XHRcdGN1cnJlbnQgPSAnJztcblx0XHRcdH0gZWxzZSBpZiAoZXF1YWxzID09PSAtMSAmJiB0ZXh0LmNoYXJBdChpKSA9PT0gJz0nICYmIGxldmVsLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHQvLyBFcXVhbHMgZm91bmQsIHRvcGxldmVsXG5cdFx0XHRcdGVxdWFscyA9IGN1cnJlbnQubGVuZ3RoO1xuXHRcdFx0XHRjdXJyZW50ICs9IHRleHQuY2hhckF0KGkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gSnVzdCBhZHZhbmNlIHRoZSBwb3NpdGlvblxuXHRcdFx0XHRjdXJyZW50ICs9IHRleHQuY2hhckF0KGkpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXHQvKipcblx0ICogQWRqdXN0IGFuZCBtYW5pcHVsYXRlIHRoZSB3aWtpdGV4dCBvZiBhIHBhZ2UuXG5cdCAqXG5cdCAqIEBjbGFzc1xuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraXRleHRcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBXaWtpdGV4dCB0byBiZSBtYW5pcHVsYXRlZC5cblx0ICovXG5cdE1vcmViaXRzLndpa2l0ZXh0LnBhZ2UgPSBmdW5jdGlvbiAodGV4dCkge1xuXHRcdHRoaXMudGV4dCA9IHRleHQ7XG5cdH07XG5cdE1vcmViaXRzLndpa2l0ZXh0LnBhZ2UucHJvdG90eXBlID0ge1xuXHRcdHRleHQ6ICcnLFxuXHRcdC8qKlxuXHRcdCAqIFJlbW92ZXMgbGlua3MgdG8gYGxpbmtfdGFyZ2V0YCBmcm9tIHRoZSBwYWdlIHRleHQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbGlua1RhcmdldFxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy53aWtpdGV4dC5wYWdlfVxuXHRcdCAqL1xuXHRcdHJlbW92ZUxpbmsobGlua1RhcmdldCkge1xuXHRcdFx0Y29uc3QgbXdUaXRsZSA9IG13LlRpdGxlLm5ld0Zyb21UZXh0KGxpbmtUYXJnZXQpO1xuXHRcdFx0Y29uc3QgbmFtZXNwYWNlSUQgPSBtd1RpdGxlLmdldE5hbWVzcGFjZUlkKCk7XG5cdFx0XHRjb25zdCB0aXRsZSA9IG13VGl0bGUuZ2V0TWFpblRleHQoKTtcblx0XHRcdGxldCBsaW5rUmVnZXhTdHJpbmcgPSAnJztcblx0XHRcdGlmIChuYW1lc3BhY2VJRCAhPT0gMCkge1xuXHRcdFx0XHRsaW5rUmVnZXhTdHJpbmcgPSBgJHtNb3JlYml0cy5uYW1lc3BhY2VSZWdleChuYW1lc3BhY2VJRCl9OmA7XG5cdFx0XHR9XG5cdFx0XHRsaW5rUmVnZXhTdHJpbmcgKz0gTW9yZWJpdHMucGFnZU5hbWVSZWdleCh0aXRsZSk7XG5cdFx0XHQvLyBGb3IgbW9zdCBuYW1lc3BhY2VzLCB1bmxpbmsgYm90aCBbW1VzZXI6VGVzdF1dIGFuZCBbWzpVc2VyOlRlc3RdXVxuXHRcdFx0Ly8gRm9yIGZpbGVzIGFuZCBjYXRlZ29yaWVzLCBvbmx5IHVubGluayBbWzpDYXRlZ29yeTpUZXN0XV0uIERvIG5vdCB1bmxpbmsgW1tDYXRlZ29yeTpUZXN0XV1cblx0XHRcdGNvbnN0IGlzRmlsZU9yQ2F0ZWdvcnkgPSBbNiwgMTRdLmluY2x1ZGVzKG5hbWVzcGFjZUlEKTtcblx0XHRcdGNvbnN0IGNvbG9uID0gaXNGaWxlT3JDYXRlZ29yeSA/ICc6JyA6ICc6Pyc7XG5cdFx0XHRjb25zdCBzaW1wbGVMaW5rUmVnZXggPSBuZXcgUmVnRXhwKGBcXFxcW1xcXFxbJHtjb2xvbn0oJHtsaW5rUmVnZXhTdHJpbmd9KVxcXFxdXFxcXF1gLCAnZycpO1xuXHRcdFx0Y29uc3QgcGlwZWRMaW5rUmVnZXggPSBuZXcgUmVnRXhwKGBcXFxcW1xcXFxbJHtjb2xvbn0ke2xpbmtSZWdleFN0cmluZ31cXFxcfCguKz8pXFxcXF1cXFxcXWAsICdnJyk7XG5cdFx0XHR0aGlzLnRleHQgPSB0aGlzLnRleHQucmVwbGFjZShzaW1wbGVMaW5rUmVnZXgsICckMScpLnJlcGxhY2UocGlwZWRMaW5rUmVnZXgsICckMScpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBDb21tZW50cyBvdXQgaW1hZ2VzIGZyb20gcGFnZSB0ZXh0OyBpZiB1c2VkIGluIGEgZ2FsbGVyeSwgZGVsZXRlcyB0aGUgd2hvbGUgbGluZS5cblx0XHQgKiBJZiB1c2VkIGFzIGEgdGVtcGxhdGUgYXJndW1lbnQgKG5vdCBuZWNlc3NhcmlseSB3aXRoIGBGaWxlOmAgcHJlZml4KSwgdGhlIHRlbXBsYXRlIHBhcmFtZXRlciBpcyBjb21tZW50ZWQgb3V0LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGltYWdlIC0gSW1hZ2UgbmFtZSB3aXRob3V0IGBGaWxlOmAgcHJlZml4LlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBbcmVhc29uXSAtIFJlYXNvbiB0byBiZSBpbmNsdWRlZCBpbiBjb21tZW50LCBhbG9uZ3NpZGUgdGhlIGNvbW1lbnRlZC1vdXQgaW1hZ2UuXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLndpa2l0ZXh0LnBhZ2V9XG5cdFx0ICovXG5cdFx0Y29tbWVudE91dEltYWdlKGltYWdlLCByZWFzb24pIHtcblx0XHRcdGNvbnN0IHVuYmluZGVyID0gbmV3IE1vcmViaXRzLnVuYmluZGVyKHRoaXMudGV4dCk7XG5cdFx0XHR1bmJpbmRlci51bmJpbmQoJzwhLS0nLCAnLS0+Jyk7XG5cdFx0XHRyZWFzb24gPSByZWFzb24gPyBgJHtyZWFzb259OiBgIDogJyc7XG5cdFx0XHRjb25zdCBpbWFnZVJlZ2V4U3RyaW5nID0gTW9yZWJpdHMucGFnZU5hbWVSZWdleChpbWFnZSk7XG5cdFx0XHQvLyBDaGVjayBmb3Igbm9ybWFsIGltYWdlIGxpbmtzLCBpLmUuIFtbRmlsZTpGb29iYXIucG5nfC4uLl1dXG5cdFx0XHQvLyBXaWxsIGVhdCB0aGUgd2hvbGUgbGlua1xuXHRcdFx0Y29uc3QgbGlua3NSZWdleCA9IG5ldyBSZWdFeHAoXG5cdFx0XHRcdGBcXFxcW1xcXFxbJHtNb3JlYml0cy5uYW1lc3BhY2VSZWdleCg2KX06XFxcXHMqJHtpbWFnZVJlZ2V4U3RyaW5nfVxcXFxzKltcXFxcfCg/OlxcXFxdXFxcXF0pXWBcblx0XHRcdCk7XG5cdFx0XHRjb25zdCBhbGxMaW5rcyA9IE1vcmViaXRzLnN0cmluZy5zcGxpdFdlaWdodGVkQnlLZXlzKHVuYmluZGVyLmNvbnRlbnQsICdbWycsICddXScpO1xuXHRcdFx0Zm9yIChjb25zdCBhbGxMaW5rIG9mIGFsbExpbmtzKSB7XG5cdFx0XHRcdGlmIChsaW5rc1JlZ2V4LnRlc3QoYWxsTGluaykpIHtcblx0XHRcdFx0XHRjb25zdCByZXBsYWNlbWVudCA9IGA8IS0tICR7cmVhc29ufSR7YWxsTGlua30gLS0+YDtcblx0XHRcdFx0XHR1bmJpbmRlci5jb250ZW50ID0gdW5iaW5kZXIuY29udGVudC5yZXBsYWNlKGFsbExpbmssIHJlcGxhY2VtZW50KTtcblx0XHRcdFx0XHQvLyB1bmJpbmQgdGhlIG5ld2x5IGNyZWF0ZWQgY29tbWVudHNcblx0XHRcdFx0XHR1bmJpbmRlci51bmJpbmQoJzwhLS0nLCAnLS0+Jyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIENoZWNrIGZvciBnYWxsZXJ5IGltYWdlcywgaS5lLiBpbnN0YW5jZXMgdGhhdCBtdXN0IHN0YXJ0IG9uIGEgbmV3IGxpbmUsXG5cdFx0XHQvLyBldmVudHVhbGx5IHByZWNlZGVkIHdpdGggc29tZSBzcGFjZSwgYW5kIG11c3QgaW5jbHVkZSBGaWxlOiBwcmVmaXhcblx0XHRcdC8vIFdpbGwgZWF0IHRoZSB3aG9sZSBsaW5lLlxuXHRcdFx0Y29uc3QgZ2FsbGVyeUltYWdlUmVnZXggPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRgKF5cXFxccyoke01vcmViaXRzLm5hbWVzcGFjZVJlZ2V4KDYpfTpcXFxccyoke2ltYWdlUmVnZXhTdHJpbmd9XFxcXHMqKD86XFxcXHwuKj8kfCQpKWAsXG5cdFx0XHRcdCdtZydcblx0XHRcdCk7XG5cdFx0XHR1bmJpbmRlci5jb250ZW50ID0gdW5iaW5kZXIuY29udGVudC5yZXBsYWNlKGdhbGxlcnlJbWFnZVJlZ2V4LCBgPCEtLSAke3JlYXNvbn0kMSAtLT5gKTtcblx0XHRcdC8vIHVuYmluZCB0aGUgbmV3bHkgY3JlYXRlZCBjb21tZW50c1xuXHRcdFx0dW5iaW5kZXIudW5iaW5kKCc8IS0tJywgJy0tPicpO1xuXHRcdFx0Ly8gQ2hlY2sgZnJlZSBpbWFnZSB1c2FnZXMsIGZvciBleGFtcGxlIGFzIHRlbXBsYXRlIGFyZ3VtZW50cywgbWlnaHQgaGF2ZSB0aGUgRmlsZTogcHJlZml4IGV4Y2x1ZGVkLCBidXQgbXVzdCBiZSBwcmVjZWRlZCBieSBhbiB8XG5cdFx0XHQvLyBXaWxsIG9ubHkgZWF0IHRoZSBpbWFnZSBuYW1lIGFuZCB0aGUgcHJlY2VkaW5nIGJhciBhbmQgYW4gZXZlbnR1YWwgbmFtZWQgcGFyYW1ldGVyXG5cdFx0XHRjb25zdCBmcmVlSW1hZ2VSZWdleCA9IG5ldyBSZWdFeHAoXG5cdFx0XHRcdGAoXFxcXHxcXFxccyooPzpbXFxcXHdcXFxcc10rXFxcXD0pP1xcXFxzKig/OiR7TW9yZWJpdHMubmFtZXNwYWNlUmVnZXgoNil9OlxcXFxzKik/JHtpbWFnZVJlZ2V4U3RyaW5nfSlgLFxuXHRcdFx0XHQnbWcnXG5cdFx0XHQpO1xuXHRcdFx0dW5iaW5kZXIuY29udGVudCA9IHVuYmluZGVyLmNvbnRlbnQucmVwbGFjZShmcmVlSW1hZ2VSZWdleCwgYDwhLS0gJHtyZWFzb259JDEgLS0+YCk7XG5cdFx0XHQvLyBSZWJpbmQgdGhlIGNvbnRlbnQgbm93LCB3ZSBhcmUgZG9uZSFcblx0XHRcdHRoaXMudGV4dCA9IHVuYmluZGVyLnJlYmluZCgpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBDb252ZXJ0cyB1c2VzIG9mIFtbRmlsZTpgaW1hZ2VgXV0gdG8gW1tGaWxlOmBpbWFnZWB8YGRhdGFgXV0uXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gaW1hZ2UgLSBJbWFnZSBuYW1lIHdpdGhvdXQgRmlsZTogcHJlZml4LlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhIC0gVGhlIGRpc3BsYXkgb3B0aW9ucy5cblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMud2lraXRleHQucGFnZX1cblx0XHQgKi9cblx0XHRhZGRUb0ltYWdlQ29tbWVudChpbWFnZSwgZGF0YSkge1xuXHRcdFx0Y29uc3QgaW1hZ2VSZWdleFN0cmluZyA9IE1vcmViaXRzLnBhZ2VOYW1lUmVnZXgoaW1hZ2UpO1xuXHRcdFx0Y29uc3QgbGlua3NSZWdleCA9IG5ldyBSZWdFeHAoXG5cdFx0XHRcdGBcXFxcW1xcXFxbJHtNb3JlYml0cy5uYW1lc3BhY2VSZWdleCg2KX06XFxcXHMqJHtpbWFnZVJlZ2V4U3RyaW5nfVxcXFxzKltcXFxcfCg/OlxcXFxdXFxcXF0pXWBcblx0XHRcdCk7XG5cdFx0XHRjb25zdCBhbGxMaW5rcyA9IE1vcmViaXRzLnN0cmluZy5zcGxpdFdlaWdodGVkQnlLZXlzKHRoaXMudGV4dCwgJ1tbJywgJ11dJyk7XG5cdFx0XHRmb3IgKGxldCByZXBsYWNlbWVudCBvZiBhbGxMaW5rcykge1xuXHRcdFx0XHRpZiAobGlua3NSZWdleC50ZXN0KHJlcGxhY2VtZW50KSkge1xuXHRcdFx0XHRcdC8vIGp1c3QgcHV0IGl0IGF0IHRoZSBlbmQ/XG5cdFx0XHRcdFx0cmVwbGFjZW1lbnQgPSByZXBsYWNlbWVudC5yZXBsYWNlKC9cXF1cXF0kLywgYHwke2RhdGF9XV1gKTtcblx0XHRcdFx0XHR0aGlzLnRleHQgPSB0aGlzLnRleHQucmVwbGFjZShyZXBsYWNlbWVudCwgcmVwbGFjZW1lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBnYWxsZXJ5UmVnZXggPSBuZXcgUmVnRXhwKGBeKFxcXFxzKiR7aW1hZ2VSZWdleFN0cmluZ30uKj8pXFxcXHw/KC4qPykkYCwgJ21nJyk7XG5cdFx0XHRjb25zdCBuZXd0ZXh0ID0gYCQxfCQyICR7ZGF0YX1gO1xuXHRcdFx0dGhpcy50ZXh0ID0gdGhpcy50ZXh0LnJlcGxhY2UoZ2FsbGVyeVJlZ2V4LCBuZXd0ZXh0KTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogUmVtb3ZlIGFsbCB0cmFuc2NsdXNpb25zIG9mIGEgdGVtcGxhdGUgZnJvbSBwYWdlIHRleHQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGUgLSBQYWdlIG5hbWUgd2hvc2UgdHJhbnNjbHVzaW9ucyBhcmUgdG8gYmUgcmVtb3ZlZCxcblx0XHQgKiBpbmNsdWRlIG5hbWVzcGFjZSBwcmVmaXggb25seSBpZiBub3QgaW4gdGVtcGxhdGUgbmFtZXNwYWNlLlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy53aWtpdGV4dC5wYWdlfVxuXHRcdCAqL1xuXHRcdHJlbW92ZVRlbXBsYXRlKHRlbXBsYXRlKSB7XG5cdFx0XHRjb25zdCB0ZW1wbGF0ZVJlZ2V4U3RyaW5nID0gTW9yZWJpdHMucGFnZU5hbWVSZWdleCh0ZW1wbGF0ZSk7XG5cdFx0XHRjb25zdCBsaW5rc1JlZ2V4ID0gbmV3IFJlZ0V4cChcblx0XHRcdFx0YFxcXFx7XFxcXHsoPzoke01vcmViaXRzLm5hbWVzcGFjZVJlZ2V4KDEwKX06KT9cXFxccyoke3RlbXBsYXRlUmVnZXhTdHJpbmd9XFxcXHMqW1xcXFx8KD86XFxcXH1cXFxcfSldYFxuXHRcdFx0KTtcblx0XHRcdGNvbnN0IGFsbFRlbXBsYXRlcyA9IE1vcmViaXRzLnN0cmluZy5zcGxpdFdlaWdodGVkQnlLZXlzKHRoaXMudGV4dCwgJ3t7JywgJ319JywgWyd7e3snLCAnfX19J10pO1xuXHRcdFx0Zm9yIChjb25zdCBhbGxUZW1wbGF0ZSBvZiBhbGxUZW1wbGF0ZXMpIHtcblx0XHRcdFx0aWYgKGxpbmtzUmVnZXgudGVzdChhbGxUZW1wbGF0ZSkpIHtcblx0XHRcdFx0XHR0aGlzLnRleHQgPSB0aGlzLnRleHQucmVwbGFjZShhbGxUZW1wbGF0ZSwgJycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFNtYXJ0bHkgaW5zZXJ0IGEgdGFnIGF0b3AgcGFnZSB0ZXh0IGJ1dCBhZnRlciBzcGVjaWZpZWQgdGVtcGxhdGVzLFxuXHRcdCAqIHN1Y2ggYXMgaGF0bm90ZXMsIHNob3J0IGRlc2NyaXB0aW9uLCBvciBkZWxldGlvbiBhbmQgcHJvdGVjdGlvbiB0ZW1wbGF0ZXMuXG5cdFx0ICogTm90YWJseSwgZG9lcyAqbm90KiBpbnNlcnQgYSBuZXdsaW5lIGFmdGVyIHRoZSB0YWcuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdGFnIC0gVGhlIHRhZyB0byBiZSBpbnNlcnRlZC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gcmVnZXggLSBUZW1wbGF0ZXMgYWZ0ZXIgd2hpY2ggdG8gaW5zZXJ0IHRhZyxcblx0XHQgKiBnaXZlbiBhcyBlaXRoZXIgYXMgYSAocmVnZXgtdmFsaWQpIHN0cmluZyBvciBhbiBhcnJheSB0byBiZSBqb2luZWQgYnkgcGlwZXMuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IFtmbGFncz1pXSAtIFJlZ2V4IGZsYWdzIHRvIGFwcGx5LiAgYCcnYCB0byBwcm92aWRlIG5vIGZsYWdzO1xuXHRcdCAqIG90aGVyIGZhbHNleSB2YWx1ZXMgd2lsbCBkZWZhdWx0IHRvIGBpYC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gW3ByZVJlZ2V4XSAtIE9wdGlvbmFsIHJlZ2V4IHN0cmluZyBvciBhcnJheSB0byBtYXRjaFxuXHRcdCAqIGJlZm9yZSBhbnkgdGVtcGxhdGUgbWF0Y2hlcyAoaS5lLiBiZWZvcmUgYHt7YCksIHN1Y2ggYXMgaHRtbCBjb21tZW50cy5cblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMud2lraXRleHQucGFnZX1cblx0XHQgKi9cblx0XHRpbnNlcnRBZnRlclRlbXBsYXRlcyh0YWcsIHJlZ2V4LCBmbGFncywgcHJlUmVnZXgpIHtcblx0XHRcdGlmICh0YWcgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdObyB0YWcgcHJvdmlkZWQnKTtcblx0XHRcdH1cblx0XHRcdC8vIC5sZW5ndGggaXMgb25seSBhIHByb3BlcnR5IG9mIHN0cmluZ3MgYW5kIGFycmF5cyBzbyB3ZVxuXHRcdFx0Ly8gc2hvdWxkbid0IG5lZWQgdG8gY2hlY2sgdHlwZVxuXHRcdFx0aWYgKHJlZ2V4ID09PSB1bmRlZmluZWQgfHwgIXJlZ2V4Lmxlbmd0aCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ05vIHJlZ2V4IHByb3ZpZGVkJyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocmVnZXgpKSB7XG5cdFx0XHRcdHJlZ2V4ID0gcmVnZXguam9pbignfCcpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHR5cGVvZiBmbGFncyAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0ZmxhZ3MgPSAnaSc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIXByZVJlZ2V4IHx8ICFwcmVSZWdleC5sZW5ndGgpIHtcblx0XHRcdFx0cHJlUmVnZXggPSAnJztcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShwcmVSZWdleCkpIHtcblx0XHRcdFx0cHJlUmVnZXggPSBwcmVSZWdleC5qb2luKCd8Jyk7XG5cdFx0XHR9XG5cdFx0XHQvLyBSZWdleCBpcyBleHRyYSBjb21wbGljYXRlZCB0byBhbGxvdyBmb3IgdGVtcGxhdGVzIHdpdGhcblx0XHRcdC8vIHBhcmFtZXRlcnMgYW5kIHRvIGhhbmRsZSB3aGl0ZXNwYWNlIHByb3Blcmx5XG5cdFx0XHR0aGlzLnRleHQgPSB0aGlzLnRleHQucmVwbGFjZShcblx0XHRcdFx0bmV3IFJlZ0V4cChcblx0XHRcdFx0XHQvLyBsZWFkaW5nIHdoaXRlc3BhY2Vcblx0XHRcdFx0XHQvLyBjYXB0dXJlIHRlbXBsYXRlKHMpXG5cdFx0XHRcdFx0Ly8gUHJlLXRlbXBsYXRlIHJlZ2V4LCBzdWNoIGFzIGxlYWRpbmcgaHRtbCBjb21tZW50c1xuXHRcdFx0XHRcdC8vIGJlZ2luIHRlbXBsYXRlIGZvcm1hdFxuXHRcdFx0XHRcdC8vIFRlbXBsYXRlIHJlZ2V4XG5cdFx0XHRcdFx0Ly8gZW5kIG1haW4gdGVtcGxhdGUgbmFtZSwgb3B0aW9uYWxseSB3aXRoIGEgbnVtYmVyXG5cdFx0XHRcdFx0Ly8gUHJvYmFibHkgcmVtb3ZlIHRoZSAoPzopIHRob3VnaFxuXHRcdFx0XHRcdC8vIHRlbXBsYXRlIHBhcmFtZXRlcnNcblx0XHRcdFx0XHQvLyBlbmQgdGVtcGxhdGUgZm9ybWF0XG5cdFx0XHRcdFx0Ly8gZW5kIGNhcHR1cmVcblx0XHRcdFx0XHQvLyB0cmFpbGluZyB3aGl0ZXNwYWNlXG5cdFx0XHRcdFx0YF5cXFxccyooPzooKD86XFxcXHMqJHtcblx0XHRcdFx0XHRcdC8vIFByZS10ZW1wbGF0ZSByZWdleCwgc3VjaCBhcyBsZWFkaW5nIGh0bWwgY29tbWVudHNcblx0XHRcdFx0XHRcdHByZVJlZ2V4XG5cdFx0XHRcdFx0fXxcXFxce1xcXFx7XFxcXHMqKD86JHtcblx0XHRcdFx0XHRcdC8vIFRlbXBsYXRlIHJlZ2V4XG5cdFx0XHRcdFx0XHRyZWdleFxuXHRcdFx0XHRcdH0pXFxcXGQqXFxcXHMqKFxcXFx8KD86XFxcXHtcXFxce1tee31dKlxcXFx9XFxcXH18W157fV0pKik/XFxcXH1cXFxcfSkrKD86XFxcXHMqXFxcXG4pPylcXFxccyopP2AsXG5cdFx0XHRcdFx0ZmxhZ3Ncblx0XHRcdFx0KSxcblx0XHRcdFx0YCQxJHt0YWd9YFxuXHRcdFx0KTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogR2V0IHRoZSBtYW5pcHVsYXRlZCB3aWtpdGV4dC5cblx0XHQgKlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0Z2V0VGV4dCgpIHtcblx0XHRcdHJldHVybiB0aGlzLnRleHQ7XG5cdFx0fSxcblx0fTtcblx0LyogKioqKioqKioqKiogTW9yZWJpdHMudXNlcnNwYWNlTG9nZ2VyICoqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogSGFuZGxlcyBsb2dnaW5nIGFjdGlvbnMgdG8gYSB1c2Vyc3BhY2UgbG9nLlxuXHQgKiBVc2VkIGluIENTRCwgUFJPRCwgYW5kIFhGRC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzXG5cdCAqIEBjbGFzc1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gbG9nUGFnZU5hbWUgLSBUaXRsZSBvZiB0aGUgc3VicGFnZSBvZiB0aGUgY3VycmVudCB1c2VyJ3MgbG9nLlxuXHQgKi9cblx0TW9yZWJpdHMudXNlcnNwYWNlTG9nZ2VyID0gZnVuY3Rpb24gKGxvZ1BhZ2VOYW1lKSB7XG5cdFx0aWYgKCFsb2dQYWdlTmFtZSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdubyBsb2cgcGFnZSBuYW1lIHNwZWNpZmllZCcpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBUaGUgdGV4dCB0byBwcmVmaXggdGhlIGxvZyB3aXRoIHVwb24gY3JlYXRpb24sIGRlZmF1bHRzIHRvIGVtcHR5LlxuXHRcdCAqXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLmluaXRpYWxUZXh0ID0gJyc7XG5cdFx0LyoqXG5cdFx0ICogVGhlIGhlYWRlciBsZXZlbCB0byB1c2UgZm9yIG1vbnRocywgZGVmYXVsdHMgdG8gMyAoYD09PWApLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUge251bWJlcn1cblx0XHQgKi9cblx0XHR0aGlzLmhlYWRlckxldmVsID0gMztcblx0XHR0aGlzLmNoYW5nZVRhZ3MgPSAnJztcblx0XHQvKipcblx0XHQgKiBMb2cgdGhlIGVudHJ5LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGxvZ1RleHQgLSBEb2Vzbid0IGluY2x1ZGUgbGVhZGluZyBgI2Agb3IgYCpgLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdW1tYXJ5VGV4dCAtIEVkaXQgc3VtbWFyeS5cblx0XHQgKiBAcmV0dXJucyB7SlF1ZXJ5LlByb21pc2V9XG5cdFx0ICovXG5cdFx0dGhpcy5sb2cgPSBmdW5jdGlvbiAobG9nVGV4dCwgc3VtbWFyeVRleHQpIHtcblx0XHRcdGNvbnN0IGRlZiA9ICQuRGVmZXJyZWQoKTtcblx0XHRcdGlmICghbG9nVGV4dCkge1xuXHRcdFx0XHRyZXR1cm4gZGVmLnJlamVjdCgpO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcGFnZSA9IG5ldyBNb3JlYml0cy53aWtpLnBhZ2UoXG5cdFx0XHRcdGBVc2VyOiR7bXcuY29uZmlnLmdldCgnd2dVc2VyTmFtZScpfS8ke2xvZ1BhZ2VOYW1lfWAsXG5cdFx0XHRcdHdpbmRvdy53Z1VMUygn5bCG6aG555uu5Yqg5YWl5Yiw55So5oi356m66Ze05pel5b+XJywgJ+Wwh+mgheebruWKoOWFpeWIsOS9v+eUqOiAheepuumWk+aXpeiqjCcpXG5cdFx0XHQpOyAvLyBtYWtlIHRoaXMgJy4uLiB0byAnICsgbG9nUGFnZU5hbWUgP1xuXHRcdFx0cGFnZS5sb2FkKChwYWdlb2JqKSA9PiB7XG5cdFx0XHRcdC8vIGFkZCBibHVyYiBpZiBsb2cgcGFnZSBkb2Vzbid0IGV4aXN0IG9yIGlzIGJsYW5rXG5cdFx0XHRcdGxldCB0ZXh0ID0gcGFnZW9iai5nZXRQYWdlVGV4dCgpIHx8IHRoaXMuaW5pdGlhbFRleHQ7XG5cdFx0XHRcdC8vIGNyZWF0ZSBtb250aGx5IGhlYWRlciBpZiBpdCBkb2Vzbid0IGV4aXN0IGFscmVhZHlcblx0XHRcdFx0Y29uc3QgZGF0ZSA9IG5ldyBNb3JlYml0cy5kYXRlKHBhZ2VvYmouZ2V0TG9hZFRpbWUoKSk7XG5cdFx0XHRcdGlmICghZGF0ZS5tb250aEhlYWRlclJlZ2V4KCkuZXhlYyh0ZXh0KSkge1xuXHRcdFx0XHRcdHRleHQgKz0gYFxcblxcbiR7ZGF0ZS5tb250aEhlYWRlcih0aGlzLmhlYWRlckxldmVsKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHBhZ2VvYmouc2V0UGFnZVRleHQoYCR7dGV4dH1cXG4ke2xvZ1RleHR9YCk7XG5cdFx0XHRcdHBhZ2VvYmouc2V0RWRpdFN1bW1hcnkoc3VtbWFyeVRleHQpO1xuXHRcdFx0XHRwYWdlb2JqLnNldENoYW5nZVRhZ3ModGhpcy5jaGFuZ2VUYWdzKTtcblx0XHRcdFx0cGFnZW9iai5zZXRDcmVhdGVPcHRpb24oJ3JlY3JlYXRlJyk7XG5cdFx0XHRcdHBhZ2VvYmouc2F2ZShkZWYucmVzb2x2ZSwgZGVmLnJlamVjdCk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBkZWY7XG5cdFx0fTtcblx0fTtcblx0LyogKioqKioqKioqKioqKioqKiBNb3JlYml0cy5zdGF0dXMgKioqKioqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogQ3JlYXRlIGFuZCBzaG93IHN0YXR1cyBtZXNzYWdlcyBvZiB2YXJ5aW5nIHVyZ2VuY3kuXG5cdCAqIHtAbGluayBNb3JlYml0cy5zdGF0dXMuaW5pdHxNb3JlYml0cy5zdGF0dXMuaW5pdCgpfSBtdXN0IGJlIGNhbGxlZCBiZWZvcmVcblx0ICogYW55IHN0YXR1cyBvYmplY3QgaXMgY3JlYXRlZCwgb3RoZXJ3aXNlIHRob3NlIHN0YXR1c2VzIHdvbid0IGJlIHZpc2libGUuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0c1xuXHQgKiBAY2xhc3Ncblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBUZXh0IGJlZm9yZSB0aGUgdGhlIGNvbG9uIGA6YC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHN0YXQgLSBUZXh0IGFmdGVyIHRoZSBjb2xvbiBgOmAuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbdHlwZT1zdGF0dXNdIC0gRGV0ZXJtaW5lIHRoZSBmb250IGNvbG9yIG9mIHRoZSBzdGF0dXNcblx0ICogbGluZSwgYWxsb3dhYmxlIHZhbHVlcyBhcmU6IGBzdGF0dXNgIChibHVlKSwgYGluZm9gIChncmVlbiksIGB3YXJuYCAocmVkKSxcblx0ICogb3IgYGVycm9yYCAoYm9sZCByZWQpLlxuXHQgKi9cblx0TW9yZWJpdHMuc3RhdHVzID0gZnVuY3Rpb24gKHRleHQsIHN0YXQsIHR5cGUpIHtcblx0XHR0aGlzLnRleHRSYXcgPSB0ZXh0O1xuXHRcdHRoaXMudGV4dCA9IE1vcmViaXRzLmNyZWF0ZUh0bWwodGV4dCk7XG5cdFx0dGhpcy50eXBlID0gdHlwZSB8fCAnc3RhdHVzJztcblx0XHR0aGlzLmdlbmVyYXRlKCk7XG5cdFx0aWYgKHN0YXQpIHtcblx0XHRcdHRoaXMudXBkYXRlKHN0YXQsIHR5cGUpO1xuXHRcdH1cblx0fTtcblx0LyoqXG5cdCAqIFNwZWNpZnkgYW4gYXJlYSBmb3Igc3RhdHVzIG1lc3NhZ2UgZWxlbWVudHMgdG8gYmUgYWRkZWQgdG8uXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5zdGF0dXNcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcm9vdCAtIFVzdWFsbHkgYSBkaXYgZWxlbWVudC5cblx0ICogQHRocm93cyBJZiBgcm9vdGAgaXMgbm90IGFuIGBIVE1MRWxlbWVudGAuXG5cdCAqL1xuXHRNb3JlYml0cy5zdGF0dXMuaW5pdCA9IChyb290KSA9PiB7XG5cdFx0aWYgKCEocm9vdCBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdvYmplY3Qgbm90IGFuIGluc3RhbmNlIG9mIEVsZW1lbnQnKTtcblx0XHR9XG5cdFx0d2hpbGUgKHJvb3QuaGFzQ2hpbGROb2RlcygpKSB7XG5cdFx0XHRyb290LnJlbW92ZUNoaWxkKHJvb3QuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXHRcdE1vcmViaXRzLnN0YXR1cy5yb290ID0gcm9vdDtcblx0XHRNb3JlYml0cy5zdGF0dXMuZXJyb3JFdmVudCA9IG51bGw7XG5cdH07XG5cdE1vcmViaXRzLnN0YXR1cy5yb290ID0gbnVsbDtcblx0LyoqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5zdGF0dXNcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlciAtIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgb24gZXJyb3IuXG5cdCAqIEB0aHJvd3MgV2hlbiBgaGFuZGxlcmAgaXMgbm90IGEgZnVuY3Rpb24uXG5cdCAqL1xuXHRNb3JlYml0cy5zdGF0dXMub25FcnJvciA9IChoYW5kbGVyKSA9PiB7XG5cdFx0aWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRNb3JlYml0cy5zdGF0dXMuZXJyb3JFdmVudCA9IGhhbmRsZXI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ01vcmViaXRzLnN0YXR1cy5vbkVycm9yOiBoYW5kbGVyIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG5cdFx0fVxuXHR9O1xuXHRNb3JlYml0cy5zdGF0dXMucHJvdG90eXBlID0ge1xuXHRcdHN0YXQ6IG51bGwsXG5cdFx0c3RhdFJhdzogbnVsbCxcblx0XHR0ZXh0OiBudWxsLFxuXHRcdHRleHRSYXc6IG51bGwsXG5cdFx0dHlwZTogJ3N0YXR1cycsXG5cdFx0dGFyZ2V0OiBudWxsLFxuXHRcdG5vZGU6IG51bGwsXG5cdFx0bGlua2VkOiBmYWxzZSxcblx0XHQvKiogQWRkIHRoZSBzdGF0dXMgZWxlbWVudCBub2RlIHRvIHRoZSBET00uICovXG5cdFx0bGluaygpIHtcblx0XHRcdGlmICghdGhpcy5saW5rZWQgJiYgTW9yZWJpdHMuc3RhdHVzLnJvb3QpIHtcblx0XHRcdFx0TW9yZWJpdHMuc3RhdHVzLnJvb3QuYXBwZW5kQ2hpbGQodGhpcy5ub2RlKTtcblx0XHRcdFx0dGhpcy5saW5rZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0LyoqIFJlbW92ZSB0aGUgc3RhdHVzIGVsZW1lbnQgbm9kZSBmcm9tIHRoZSBET00uICovXG5cdFx0dW5saW5rKCkge1xuXHRcdFx0aWYgKHRoaXMubGlua2VkKSB7XG5cdFx0XHRcdE1vcmViaXRzLnN0YXR1cy5yb290LnJlbW92ZUNoaWxkKHRoaXMubm9kZSk7XG5cdFx0XHRcdHRoaXMubGlua2VkID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBVcGRhdGUgdGhlIHN0YXR1cy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0dXMgLSBQYXJ0IG9mIHN0YXR1cyBtZXNzYWdlIGFmdGVyIGNvbG9uLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gJ3N0YXR1cycgKGJsdWUpLCAnaW5mbycgKGdyZWVuKSwgJ3dhcm4nXG5cdFx0ICogKHJlZCksIG9yICdlcnJvcicgKGJvbGQgcmVkKS5cblx0XHQgKi9cblx0XHR1cGRhdGUoc3RhdHVzLCB0eXBlKSB7XG5cdFx0XHR0aGlzLnN0YXRSYXcgPSBzdGF0dXM7XG5cdFx0XHR0aGlzLnN0YXQgPSBNb3JlYml0cy5jcmVhdGVIdG1sKHN0YXR1cyk7XG5cdFx0XHRpZiAodHlwZSkge1xuXHRcdFx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHRcdFx0XHRpZiAodHlwZSA9PT0gJ2Vycm9yJykge1xuXHRcdFx0XHRcdC8vIGhhY2sgdG8gZm9yY2UgdGhlIHBhZ2Ugbm90IHRvIHJlbG9hZCB3aGVuIGFuIGVycm9yIGlzIG91dHB1dCAtIHNlZSBhbHNvIE1vcmViaXRzLnN0YXR1cygpIGFib3ZlXG5cdFx0XHRcdFx0TW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0ID0gMTAwMDtcblx0XHRcdFx0XHQvLyBjYWxsIGVycm9yIGNhbGxiYWNrXG5cdFx0XHRcdFx0aWYgKE1vcmViaXRzLnN0YXR1cy5lcnJvckV2ZW50KSB7XG5cdFx0XHRcdFx0XHRNb3JlYml0cy5zdGF0dXMuZXJyb3JFdmVudCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBhbHNvIGxvZyBlcnJvciBtZXNzYWdlcyBpbiB0aGUgYnJvd3NlciBjb25zb2xlXG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgW01vcmViaXRzXSAke3RoaXMudGV4dFJhd306ICR7dGhpcy5zdGF0UmF3fWApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnJlbmRlcigpO1xuXHRcdH0sXG5cdFx0LyoqIFByb2R1Y2UgdGhlIGh0bWwgZm9yIGZpcnN0IHBhcnQgb2YgdGhlIHN0YXR1cyBtZXNzYWdlLiAqL1xuXHRcdGdlbmVyYXRlKCkge1xuXHRcdFx0dGhpcy5ub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHR0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKS5hcHBlbmRDaGlsZCh0aGlzLnRleHQpO1xuXHRcdFx0dGhpcy5ub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJzogJykpO1xuXHRcdFx0dGhpcy50YXJnZXQgPSB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKTtcblx0XHRcdHRoaXMudGFyZ2V0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKSk7IC8vIGR1bW15IG5vZGVcblx0XHR9LFxuXG5cdFx0LyoqIENvbXBsZXRlIHRoZSBodG1sLCBmb3IgdGhlIHNlY29uZCBwYXJ0IG9mIHRoZSBzdGF0dXMgbWVzc2FnZS4gKi9cblx0XHRyZW5kZXIoKSB7XG5cdFx0XHR0aGlzLm5vZGUuY2xhc3NOYW1lID0gYG1vcmViaXRzX3N0YXR1c18ke3RoaXMudHlwZX1gO1xuXHRcdFx0d2hpbGUgKHRoaXMudGFyZ2V0Lmhhc0NoaWxkTm9kZXMoKSkge1xuXHRcdFx0XHR0aGlzLnRhcmdldC5yZW1vdmVDaGlsZCh0aGlzLnRhcmdldC5maXJzdENoaWxkKTtcblx0XHRcdH1cblx0XHRcdHRoaXMudGFyZ2V0LmFwcGVuZENoaWxkKHRoaXMuc3RhdCk7XG5cdFx0XHR0aGlzLmxpbmsoKTtcblx0XHR9LFxuXHRcdHN0YXR1cyhzdGF0dXMpIHtcblx0XHRcdHRoaXMudXBkYXRlKHN0YXR1cywgJ3N0YXR1cycpO1xuXHRcdH0sXG5cdFx0aW5mbyhzdGF0dXMpIHtcblx0XHRcdHRoaXMudXBkYXRlKHN0YXR1cywgJ2luZm8nKTtcblx0XHR9LFxuXHRcdHdhcm4oc3RhdHVzKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZShzdGF0dXMsICd3YXJuJyk7XG5cdFx0fSxcblx0XHRlcnJvcihzdGF0dXMpIHtcblx0XHRcdHRoaXMudXBkYXRlKHN0YXR1cywgJ2Vycm9yJyk7XG5cdFx0fSxcblx0fTtcblx0LyoqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5zdGF0dXNcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBCZWZvcmUgY29sb25cblx0ICogQHBhcmFtIHtzdHJpbmd9IHN0YXR1cyAtIEFmdGVyIGNvbG9uXG5cdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zdGF0dXN9IC0gYHN0YXR1c2AtdHlwZSAoYmx1ZSlcblx0ICovXG5cdE1vcmViaXRzLnN0YXR1cy5zdGF0dXMgPSAodGV4dCwgc3RhdHVzKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBNb3JlYml0cy5zdGF0dXModGV4dCwgc3RhdHVzKTtcblx0fTtcblx0LyoqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5zdGF0dXNcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBCZWZvcmUgY29sb25cblx0ICogQHBhcmFtIHtzdHJpbmd9IHN0YXR1cyAtIEFmdGVyIGNvbG9uXG5cdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zdGF0dXN9IC0gYGluZm9gLXR5cGUgKGdyZWVuKVxuXHQgKi9cblx0TW9yZWJpdHMuc3RhdHVzLmluZm8gPSAodGV4dCwgc3RhdHVzKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBNb3JlYml0cy5zdGF0dXModGV4dCwgc3RhdHVzLCAnaW5mbycpO1xuXHR9O1xuXHQvKipcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnN0YXR1c1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIEJlZm9yZSBjb2xvblxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RhdHVzIC0gQWZ0ZXIgY29sb25cblx0ICogQHJldHVybnMge01vcmViaXRzLnN0YXR1c30gLSBgd2FybmAtdHlwZSAocmVkKVxuXHQgKi9cblx0TW9yZWJpdHMuc3RhdHVzLndhcm4gPSAodGV4dCwgc3RhdHVzKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBNb3JlYml0cy5zdGF0dXModGV4dCwgc3RhdHVzLCAnd2FybicpO1xuXHR9O1xuXHQvKipcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnN0YXR1c1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIEJlZm9yZSBjb2xvblxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RhdHVzIC0gQWZ0ZXIgY29sb25cblx0ICogQHJldHVybnMge01vcmViaXRzLnN0YXR1c30gLSBgZXJyb3JgLXR5cGUgKGJvbGQgcmVkKVxuXHQgKi9cblx0TW9yZWJpdHMuc3RhdHVzLmVycm9yID0gKHRleHQsIHN0YXR1cykgPT4ge1xuXHRcdHJldHVybiBuZXcgTW9yZWJpdHMuc3RhdHVzKHRleHQsIHN0YXR1cywgJ2Vycm9yJyk7XG5cdH07XG5cdC8qKlxuXHQgKiBGb3IgdGhlIGFjdGlvbiBjb21wbGV0ZSBtZXNzYWdlIGF0IHRoZSBlbmQsIGNyZWF0ZSBhIHN0YXR1cyBsaW5lIHdpdGhvdXRcblx0ICogYSBjb2xvbiBzZXBhcmF0b3IuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5zdGF0dXNcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHRcblx0ICovXG5cdE1vcmViaXRzLnN0YXR1cy5hY3Rpb25Db21wbGV0ZWQgPSAodGV4dCkgPT4ge1xuXHRcdGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2InKSkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCkpO1xuXHRcdG5vZGUuY2xhc3NOYW1lID0gJ21vcmViaXRzX3N0YXR1c19pbmZvIG1vcmViaXRzX2FjdGlvbl9jb21wbGV0ZSc7XG5cdFx0aWYgKE1vcmViaXRzLnN0YXR1cy5yb290KSB7XG5cdFx0XHRNb3JlYml0cy5zdGF0dXMucm9vdC5hcHBlbmRDaGlsZChub2RlKTtcblx0XHR9XG5cdH07XG5cdC8qKlxuXHQgKiBEaXNwbGF5IHRoZSB1c2VyJ3MgcmF0aW9uYWxlLCBjb21tZW50cywgZXRjLiBCYWNrIHRvIHRoZW0gYWZ0ZXIgYSBmYWlsdXJlLFxuXHQgKiBzbyB0aGF0IHRoZXkgbWF5IHJlLXVzZSBpdC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnN0YXR1c1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29tbWVudHNcblx0ICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2Vcblx0ICovXG5cdE1vcmViaXRzLnN0YXR1cy5wcmludFVzZXJUZXh0ID0gKGNvbW1lbnRzLCBtZXNzYWdlKSA9PiB7XG5cdFx0Y29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0XHRwLmlubmVySFRNTCA9IG1lc3NhZ2U7XG5cdFx0Y29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0ZGl2LmNsYXNzTmFtZSA9ICdtb3JlYml0cy11c2VydGV4dCc7XG5cdFx0ZGl2LnN0eWxlLm1hcmdpblRvcCA9ICcwJztcblx0XHRkaXYuc3R5bGUud2hpdGVTcGFjZSA9ICdwcmUtd3JhcCc7XG5cdFx0ZGl2LnRleHRDb250ZW50ID0gY29tbWVudHM7XG5cdFx0cC5hcHBlbmRDaGlsZChkaXYpO1xuXHRcdE1vcmViaXRzLnN0YXR1cy5yb290LmFwcGVuZENoaWxkKHApO1xuXHR9O1xuXHQvKipcblx0ICogU2ltcGxlIGhlbHBlciBmdW5jdGlvbiB0byBjcmVhdGUgYSBzaW1wbGUgbm9kZS5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSBUeXBlIG9mIEhUTUwgZWxlbWVudC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnQgLSBUZXh0IGNvbnRlbnQuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbY29sb3JdIC0gRm9udCBjb2xvci5cblx0ICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuXHQgKi9cblx0TW9yZWJpdHMuaHRtbE5vZGUgPSAodHlwZSwgY29udGVudCwgY29sb3IpID0+IHtcblx0XHRjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcblx0XHRpZiAoY29sb3IpIHtcblx0XHRcdG5vZGUuc3R5bGUuY29sb3IgPSBjb2xvcjtcblx0XHR9XG5cdFx0bm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KSk7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH07XG5cdC8qKlxuXHQgKiBBZGQgc2hpZnQtY2xpY2sgc3VwcG9ydCBmb3IgY2hlY2tib3hlcy4gVGhlIHdpa2liaXRzIHZlcnNpb25cblx0ICogKGB3aW5kb3cuYWRkQ2hlY2tib3hDbGlja0hhbmRsZXJzYCkgaGFzIHNvbWUgcmVzdHJpY3Rpb25zLCBhbmQgZG9lc24ndCB3b3JrXG5cdCAqIHdpdGggY2hlY2tib3hlcyBpbnNpZGUgYSBzb3J0YWJsZSB0YWJsZSwgc28gbGV0J3MgYnVpbGQgb3VyIG93bi5cblx0ICpcblx0ICogQHBhcmFtIGpRdWVyeVNlbGVjdG9yXG5cdCAqIEBwYXJhbSBqUXVlcnlDb250ZXh0XG5cdCAqL1xuXHRNb3JlYml0cy5jaGVja2JveFNoaWZ0Q2xpY2tTdXBwb3J0ID0gKGpRdWVyeVNlbGVjdG9yLCBqUXVlcnlDb250ZXh0KSA9PiB7XG5cdFx0bGV0IGxhc3RDaGVja2JveCA9IG51bGw7XG5cdFx0Y29uc3QgY2xpY2tIYW5kbGVyID0gZnVuY3Rpb24gY2xpY2tIYW5kbGVyKGV2ZW50KSB7XG5cdFx0XHRjb25zdCB0aGlzQ2IgPSB0aGlzO1xuXHRcdFx0aWYgKGV2ZW50LnNoaWZ0S2V5ICYmIGxhc3RDaGVja2JveCAhPT0gbnVsbCkge1xuXHRcdFx0XHRjb25zdCBjYnMgPSAkKGpRdWVyeVNlbGVjdG9yLCBqUXVlcnlDb250ZXh0KTsgLy8gY2FuJ3QgY2FjaGUgdGhlbSwgb2J2aW91c2x5LCBpZiB3ZSB3YW50IHRvIHN1cHBvcnQgcmVzb3J0aW5nXG5cdFx0XHRcdGxldCBpbmRleCA9IC0xO1xuXHRcdFx0XHRsZXQgbGFzdEluZGV4ID0gLTE7XG5cdFx0XHRcdGxldCBpO1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2JzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGNic1tpXSA9PT0gdGhpc0NiKSB7XG5cdFx0XHRcdFx0XHRpbmRleCA9IGk7XG5cdFx0XHRcdFx0XHRpZiAobGFzdEluZGV4ID4gLTEpIHtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChjYnNbaV0gPT09IGxhc3RDaGVja2JveCkge1xuXHRcdFx0XHRcdFx0bGFzdEluZGV4ID0gaTtcblx0XHRcdFx0XHRcdGlmIChpbmRleCA+IC0xKSB7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoaW5kZXggPiAtMSAmJiBsYXN0SW5kZXggPiAtMSkge1xuXHRcdFx0XHRcdC8vIGluc3BpcmVkIGJ5IHdpa2liaXRzXG5cdFx0XHRcdFx0Y29uc3QgZW5kU3RhdGUgPSB0aGlzQ2IuY2hlY2tlZDtcblx0XHRcdFx0XHRsZXQgc3RhcnQ7XG5cdFx0XHRcdFx0bGV0IGZpbmlzaDtcblx0XHRcdFx0XHRpZiAoaW5kZXggPCBsYXN0SW5kZXgpIHtcblx0XHRcdFx0XHRcdHN0YXJ0ID0gaW5kZXggKyAxO1xuXHRcdFx0XHRcdFx0ZmluaXNoID0gbGFzdEluZGV4O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzdGFydCA9IGxhc3RJbmRleDtcblx0XHRcdFx0XHRcdGZpbmlzaCA9IGluZGV4IC0gMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Zm9yIChpID0gc3RhcnQ7IGkgPD0gZmluaXNoOyBpKyspIHtcblx0XHRcdFx0XHRcdGlmIChjYnNbaV0uY2hlY2tlZCAhPT0gZW5kU3RhdGUpIHtcblx0XHRcdFx0XHRcdFx0Y2JzW2ldLmNsaWNrKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRsYXN0Q2hlY2tib3ggPSB0aGlzQ2I7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9O1xuXHRcdCQoalF1ZXJ5U2VsZWN0b3IsIGpRdWVyeUNvbnRleHQpLm9uKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XG5cdH07XG5cdC8qICoqKioqKioqKioqKioqKiogTW9yZWJpdHMuYmF0Y2hPcGVyYXRpb24gKioqKioqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogSXRlcmF0ZXMgb3ZlciBhIGdyb3VwIG9mIHBhZ2VzIChvciBhcmJpdHJhcnkgb2JqZWN0cykgYW5kIGV4ZWN1dGVzIGEgd29ya2VyIGZ1bmN0aW9uXG5cdCAqIGZvciBlYWNoLlxuXHQgKlxuXHQgKiBgc2V0UGFnZUxpc3QocGFnZUxpc3QpYDogU2V0cyB0aGUgbGlzdCBvZiBwYWdlcyB0byB3b3JrIG9uLiBJdCBzaG91bGQgYmUgYW5cblx0ICogYXJyYXkgb2YgcGFnZSBuYW1lcyBzdHJpbmdzLlxuXHQgKlxuXHQgKiBgc2V0T3B0aW9uKG9wdGlvbk5hbWUsIG9wdGlvblZhbHVlKWA6IFNldHMgYSBrbm93biBvcHRpb246XG5cdCAqIC0gYGNodW5rU2l6ZWAgKGludGVnZXIpOiBUaGUgc2l6ZSBvZiBjaHVua3MgdG8gYnJlYWsgdGhlIGFycmF5IGludG8gKGRlZmF1bHRcblx0ICogNTApLiBTZXR0aW5nIHRoaXMgdG8gYSBzbWFsbCB2YWx1ZSAoPDUpIGNhbiBjYXVzZSBwcm9ibGVtcy5cblx0ICogLSBgcHJlc2VydmVJbmRpdmlkdWFsU3RhdHVzTGluZXNgIChib29sZWFuKTogS2VlcCBlYWNoIHBhZ2UncyBzdGF0dXMgZWxlbWVudFxuXHQgKiB2aXNpYmxlIHdoZW4gd29ya2VyIGlzIGNvbXBsZXRlPyBTZWUgbm90ZSBiZWxvdy5cblx0ICpcblx0ICogYHJ1bih3b3JrZXIsIHBvc3RGaW5pc2gpYDogUnVucyB0aGUgY2FsbGJhY2sgYHdvcmtlcmAgZm9yIGVhY2ggcGFnZSBpbiB0aGVcblx0ICogbGlzdC4gIFRoZSBjYWxsYmFjayBtdXN0IGNhbGwgYHdvcmtlclN1Y2Nlc3NgIHdoZW4gc3VjY2VlZGluZywgb3Jcblx0ICogYHdvcmtlckZhaWx1cmVgIHdoZW4gZmFpbGluZy4gIElmIHVzaW5nIHtAbGluayBNb3JlYml0cy53aWtpLmFwaX0gb3Jcblx0ICoge0BsaW5rIE1vcmViaXRzLndpa2kucGFnZX0sIHRoaXMgaXMgZWFzaWx5IGRvbmUgYnkgcGFzc2luZyB0aGVzZSB0d29cblx0ICogZnVuY3Rpb25zIGFzIHBhcmFtZXRlcnMgdG8gdGhlIG1ldGhvZHMgb24gdGhvc2Ugb2JqZWN0czogZm9yIGluc3RhbmNlLFxuXHQgKiBgcGFnZS5zYXZlKGJhdGNoT3Aud29ya2VyU3VjY2VzcywgYmF0Y2hPcC53b3JrZXJGYWlsdXJlKWAuICBNYWtlIHN1cmUgdGhlXG5cdCAqIG1ldGhvZHMgYXJlIGNhbGxlZCBkaXJlY3RseSBpZiBzcGVjaWFsIHN1Y2Nlc3MvZmFpbHVyZSBjYXNlcyBhcmlzZS4gIElmIHlvdVxuXHQgKiBvbWl0IHRvIGNhbGwgdGhlc2UgbWV0aG9kcywgdGhlIGJhdGNoIG9wZXJhdGlvbiB3aWxsIHN0YWxsIGFmdGVyIHRoZSBmaXJzdFxuXHQgKiBjaHVuayEgIEFsc28gZW5zdXJlIHRoYXQgZWl0aGVyIHdvcmtlclN1Y2Nlc3Mgb3Igd29ya2VyRmFpbHVyZSBpcyBjYWxsZWQgbm9cblx0ICogbW9yZSB0aGFuIG9uY2UuICBUaGUgc2Vjb25kIGNhbGxiYWNrIGBwb3N0RmluaXNoYCBpcyBleGVjdXRlZCB3aGVuIHRoZVxuXHQgKiBlbnRpcmUgYmF0Y2ggaGFzIGJlZW4gcHJvY2Vzc2VkLlxuXHQgKlxuXHQgKiBJZiB1c2luZyBgcHJlc2VydmVJbmRpdmlkdWFsU3RhdHVzTGluZXNgLCB5b3Ugc2hvdWxkIHRyeSB0byBlbnN1cmUgdGhhdCB0aGVcblx0ICogYHdvcmtlclN1Y2Nlc3NgIGNhbGxiYWNrIGhhcyBhY2Nlc3MgdG8gdGhlIHBhZ2UgdGl0bGUuICBUaGlzIGlzIG5vIHByb2JsZW0gZm9yXG5cdCAqIHtAbGluayBNb3JlYml0cy53aWtpLnBhZ2V9IG9iamVjdHMuICBCdXQgd2hlbiB1c2luZyB0aGUgQVBJLCBwbGVhc2Ugc2V0IHRoZVxuXHQgKiB8cGFnZU5hbWV8IHByb3BlcnR5IG9uIHRoZSB7QGxpbmsgTW9yZWJpdHMud2lraS5hcGl9IG9iamVjdC5cblx0ICpcblx0ICogVGhlcmUgYXJlIHNhbXBsZSBiYXRjaE9wZXJhdGlvbiBpbXBsZW1lbnRhdGlvbnMgdXNpbmcgTW9yZWJpdHMud2lraS5wYWdlIGluXG5cdCAqIHR3aW5rbGViYXRjaGRlbGV0ZS5qcywgdHdpbmtsZWJhdGNodW5kZWxldGUuanMsIGFuZCB0d2lua2xlYmF0Y2hwcm90ZWN0LmpzLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICogQGNsYXNzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbY3VycmVudEFjdGlvbl1cblx0ICovXG5cdE1vcmViaXRzLmJhdGNoT3BlcmF0aW9uID0gZnVuY3Rpb24gKGN1cnJlbnRBY3Rpb24pIHtcblx0XHRjb25zdCBjdHggPSB7XG5cdFx0XHQvLyBiYWNraW5nIGZpZWxkcyBmb3IgcHVibGljIHByb3BlcnRpZXNcblx0XHRcdHBhZ2VMaXN0OiBudWxsLFxuXHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRjaHVua1NpemU6IDUwLFxuXHRcdFx0XHRwcmVzZXJ2ZUluZGl2aWR1YWxTdGF0dXNMaW5lczogZmFsc2UsXG5cdFx0XHR9LFxuXHRcdFx0Ly8gaW50ZXJuYWwgY291bnRlcnMsIGV0Yy5cblx0XHRcdHN0YXR1c0VsZW1lbnQ6IG5ldyBNb3JlYml0cy5zdGF0dXMoY3VycmVudEFjdGlvbiB8fCB3aW5kb3cud2dVTFMoJ+aJp+ihjOaJuemHj+aTjeS9nCcsICfln7fooYzmibnmrKHmk43kvZwnKSksXG5cdFx0XHR3b3JrZXI6IG51bGwsXG5cdFx0XHQvLyBmdW5jdGlvbiB0aGF0IGV4ZWN1dGVzIGZvciBlYWNoIGl0ZW0gaW4gcGFnZUxpc3Rcblx0XHRcdHBvc3RGaW5pc2g6IG51bGwsXG5cdFx0XHQvLyBmdW5jdGlvbiB0aGF0IGV4ZWN1dGVzIHdoZW4gdGhlIHdob2xlIGJhdGNoIGhhcyBiZWVuIHByb2Nlc3NlZFxuXHRcdFx0Y291bnRTdGFydGVkOiAwLFxuXHRcdFx0Y291bnRGaW5pc2hlZDogMCxcblx0XHRcdGNvdW50RmluaXNoZWRTdWNjZXNzOiAwLFxuXHRcdFx0Y3VycmVudENodW5rSW5kZXg6IC0xLFxuXHRcdFx0cGFnZUNodW5rczogW10sXG5cdFx0XHRydW5uaW5nOiBmYWxzZSxcblx0XHR9O1xuXHRcdC8vIHNob3VsZG4ndCBiZSBuZWVkZWQgYnkgZXh0ZXJuYWwgdXNlcnMsIGJ1dCBwcm92aWRlZCBhbnl3YXkgZm9yIG1heGltdW0gZmxleGliaWxpdHlcblx0XHR0aGlzLmdldFN0YXR1c0VsZW1lbnQgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LnN0YXR1c0VsZW1lbnQ7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBTZXRzIHRoZSBsaXN0IG9mIHBhZ2VzIHRvIHdvcmsgb24uXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0FycmF5fSBwYWdlTGlzdCAtIEFycmF5IG9mIG9iamVjdHMgb3ZlciB3aGljaCB5b3Ugd2lzaCB0byBleGVjdXRlIHRoZSB3b3JrZXIgZnVuY3Rpb25cblx0XHQgKiBUaGlzIGlzIHVzdWFsbHkgdGhlIGxpc3Qgb2YgcGFnZSBuYW1lcyAoc3RyaW5ncykuXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRQYWdlTGlzdCA9IChwYWdlTGlzdCkgPT4ge1xuXHRcdFx0Y3R4LnBhZ2VMaXN0ID0gcGFnZUxpc3Q7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBTZXRzIGEga25vd24gb3B0aW9uLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbk5hbWUgLSBOYW1lIG9mIHRoZSBvcHRpb246XG5cdFx0ICogLSBjaHVua1NpemUgKGludGVnZXIpOiBUaGUgc2l6ZSBvZiBjaHVua3MgdG8gYnJlYWsgdGhlIGFycmF5IGludG9cblx0XHQgKiAoZGVmYXVsdCA1MCkuIFNldHRpbmcgdGhpcyB0byBhIHNtYWxsIHZhbHVlICg8NSkgY2FuIGNhdXNlIHByb2JsZW1zLlxuXHRcdCAqIC0gcHJlc2VydmVJbmRpdmlkdWFsU3RhdHVzTGluZXMgKGJvb2xlYW4pOiBLZWVwIGVhY2ggcGFnZSdzIHN0YXR1c1xuXHRcdCAqIGVsZW1lbnQgdmlzaWJsZSB3aGVuIHdvcmtlciBpcyBjb21wbGV0ZT9cblx0XHQgKiBAcGFyYW0ge251bWJlcnxib29sZWFufSBvcHRpb25WYWx1ZSAtIFZhbHVlIHRvIHdoaWNoIHRoZSBvcHRpb24gaXNcblx0XHQgKiB0byBiZSBzZXQuIFNob3VsZCBiZSBhbiBpbnRlZ2VyIGZvciBjaHVua1NpemUgYW5kIGEgYm9vbGVhbiBmb3Jcblx0XHQgKiBwcmVzZXJ2ZUluZGl2aWR1YWxTdGF0dXNMaW5lcy5cblx0XHQgKi9cblx0XHR0aGlzLnNldE9wdGlvbiA9IChvcHRpb25OYW1lLCBvcHRpb25WYWx1ZSkgPT4ge1xuXHRcdFx0Y3R4Lm9wdGlvbnNbb3B0aW9uTmFtZV0gPSBvcHRpb25WYWx1ZTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFJ1bnMgdGhlIGZpcnN0IGNhbGxiYWNrIGZvciBlYWNoIHBhZ2UgaW4gdGhlIGxpc3QuXG5cdFx0ICogVGhlIGNhbGxiYWNrIG11c3QgY2FsbCB3b3JrZXJTdWNjZXNzIHdoZW4gc3VjY2VlZGluZywgb3Igd29ya2VyRmFpbHVyZSB3aGVuIGZhaWxpbmcuXG5cdFx0ICogUnVucyB0aGUgb3B0aW9uYWwgc2Vjb25kIGNhbGxiYWNrIHdoZW4gdGhlIHdob2xlIGJhdGNoIGhhcyBiZWVuIHByb2Nlc3NlZC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IHdvcmtlclxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtwb3N0RmluaXNoXVxuXHRcdCAqL1xuXHRcdHRoaXMucnVuID0gKHdvcmtlciwgcG9zdEZpbmlzaCkgPT4ge1xuXHRcdFx0aWYgKGN0eC5ydW5uaW5nKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5om56YeP5pON5L2c5bey5Zyo6L+Q6KGMJywgJ+aJueasoeaTjeS9nOW3suWcqOWft+ihjCcpKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LnJ1bm5pbmcgPSB0cnVlO1xuXHRcdFx0Y3R4LndvcmtlciA9IHdvcmtlcjtcblx0XHRcdGN0eC5wb3N0RmluaXNoID0gcG9zdEZpbmlzaDtcblx0XHRcdGN0eC5jb3VudFN0YXJ0ZWQgPSAwO1xuXHRcdFx0Y3R4LmNvdW50RmluaXNoZWQgPSAwO1xuXHRcdFx0Y3R4LmNvdW50RmluaXNoZWRTdWNjZXNzID0gMDtcblx0XHRcdGN0eC5jdXJyZW50Q2h1bmtJbmRleCA9IC0xO1xuXHRcdFx0Y3R4LnBhZ2VDaHVua3MgPSBbXTtcblx0XHRcdGNvbnN0IHRvdGFsID0gY3R4LnBhZ2VMaXN0Lmxlbmd0aDtcblx0XHRcdGlmICghdG90YWwpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuaW5mbyh3aW5kb3cud2dVTFMoJ+ayoeacieaMh+WumumhtemdoicsICfmspLmnInmjIflrprpoIHpnaInKSk7XG5cdFx0XHRcdGN0eC5ydW5uaW5nID0gZmFsc2U7XG5cdFx0XHRcdGlmIChjdHgucG9zdEZpbmlzaCkge1xuXHRcdFx0XHRcdGN0eC5wb3N0RmluaXNoKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Ly8gY2h1bmsgcGFnZSBsaXN0IGludG8gbW9yZSBtYW5hZ2VhYmxlIHVuaXRzXG5cdFx0XHRjdHgucGFnZUNodW5rcyA9IE1vcmViaXRzLmFycmF5LmNodW5rKGN0eC5wYWdlTGlzdCwgY3R4Lm9wdGlvbnMuY2h1bmtTaXplKTtcblx0XHRcdC8vIHN0YXJ0IHRoZSBwcm9jZXNzXG5cdFx0XHRNb3JlYml0cy53aWtpLmFkZENoZWNrcG9pbnQoKTtcblx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LnN0YXR1cygnMCUnKTtcblx0XHRcdGZuU3RhcnROZXdDaHVuaygpO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogVG8gYmUgY2FsbGVkIGJ5IHdvcmtlciBiZWZvcmUgaXQgdGVybWluYXRlcyBzdWNjZXNzZnVsbHkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0geyhNb3JlYml0cy53aWtpLnBhZ2V8TW9yZWJpdHMud2lraS5hcGl8c3RyaW5nKX0gYXJnIC1cblx0XHQgKiBUaGlzIHNob3VsZCBiZSB0aGUgYE1vcmViaXRzLndpa2kucGFnZWAgb3IgYE1vcmViaXRzLndpa2kuYXBpYCBvYmplY3QgdXNlZCBieSB3b3JrZXJcblx0XHQgKiAoZm9yIHRoZSBhZGp1c3RtZW50IG9mIHN0YXR1cyBsaW5lcyBlbWl0dGVkIGJ5IHRoZW0pLlxuXHRcdCAqIElmIG5vIE1vcmViaXRzLndpa2kuKiBvYmplY3QgaXMgdXNlZCAoZS5nLiB5b3UncmUgdXNpbmcgYG13LkFwaSgpYCBvciBzb21ldGhpbmcgZWxzZSksIGFuZFxuXHRcdCAqIGBwcmVzZXJ2ZUluZGl2aWR1YWxTdGF0dXNMaW5lc2Agb3B0aW9uIGlzIG9uLCBnaXZlIHRoZSBwYWdlIG5hbWUgKHN0cmluZykgYXMgYXJndW1lbnQuXG5cdFx0ICovXG5cdFx0dGhpcy53b3JrZXJTdWNjZXNzID0gKGFyZykgPT4ge1xuXHRcdFx0aWYgKGFyZyBpbnN0YW5jZW9mIE1vcmViaXRzLndpa2kuYXBpIHx8IGFyZyBpbnN0YW5jZW9mIE1vcmViaXRzLndpa2kucGFnZSkge1xuXHRcdFx0XHQvLyB1cGRhdGUgb3IgcmVtb3ZlIHN0YXR1cyBsaW5lXG5cdFx0XHRcdGNvbnN0IHN0YXRlbGVtID0gYXJnLmdldFN0YXR1c0VsZW1lbnQoKTtcblx0XHRcdFx0aWYgKGN0eC5vcHRpb25zLnByZXNlcnZlSW5kaXZpZHVhbFN0YXR1c0xpbmVzKSB7XG5cdFx0XHRcdFx0aWYgKGFyZy5nZXRQYWdlTmFtZSB8fCBhcmcucGFnZU5hbWUgfHwgKGFyZy5xdWVyeSAmJiBhcmcucXVlcnkudGl0bGUpKSB7XG5cdFx0XHRcdFx0XHQvLyB3ZSBrbm93IHRoZSBwYWdlIHRpdGxlIC0gZGlzcGxheSBhIHJlbGV2YW50IG1lc3NhZ2Vcblx0XHRcdFx0XHRcdGNvbnN0IHBhZ2VOYW1lID0gYXJnLmdldFBhZ2VOYW1lID8gYXJnLmdldFBhZ2VOYW1lKCkgOiBhcmcucGFnZU5hbWUgfHwgYXJnLnF1ZXJ5LnRpdGxlO1xuXHRcdFx0XHRcdFx0c3RhdGVsZW0uaW5mbyhg5a6M5oiQ77yIW1ske3BhZ2VOYW1lfV1d77yJYCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIHdlIGRvbid0IGtub3cgdGhlIHBhZ2UgdGl0bGUgLSBqdXN0IGRpc3BsYXkgYSBnZW5lcmljIG1lc3NhZ2Vcblx0XHRcdFx0XHRcdHN0YXRlbGVtLmluZm8oJ+WujOaIkCcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyByZW1vdmUgdGhlIHN0YXR1cyBsaW5lIGF1dG9tYXRpY2FsbHkgcHJvZHVjZWQgYnkgTW9yZWJpdHMud2lraS4qXG5cdFx0XHRcdFx0c3RhdGVsZW0udW5saW5rKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgJiYgY3R4Lm9wdGlvbnMucHJlc2VydmVJbmRpdmlkdWFsU3RhdHVzTGluZXMpIHtcblx0XHRcdFx0bmV3IE1vcmViaXRzLnN0YXR1cyhhcmcsIGDlrozmiJDvvIhbWyR7YXJnfV1d77yJYCk7XG5cdFx0XHR9XG5cdFx0XHRjdHguY291bnRGaW5pc2hlZFN1Y2Nlc3MrKztcblx0XHRcdGZuRG9uZU9uZSgpO1xuXHRcdH07XG5cdFx0dGhpcy53b3JrZXJGYWlsdXJlID0gKCkgPT4ge1xuXHRcdFx0Zm5Eb25lT25lKCk7XG5cdFx0fTtcblx0XHQvLyBwcml2YXRlIGZ1bmN0aW9uc1xuXHRcdGNvbnN0IHRoaXNQcm94eSA9IHRoaXM7XG5cdFx0Y29uc3QgZm5TdGFydE5ld0NodW5rID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgY2h1bmsgPSBjdHgucGFnZUNodW5rc1srK2N0eC5jdXJyZW50Q2h1bmtJbmRleF07XG5cdFx0XHRpZiAoIWNodW5rKSB7XG5cdFx0XHRcdHJldHVybjsgLy8gZG9uZSEgeWF5XG5cdFx0XHR9XG5cdFx0XHQvLyBzdGFydCB3b3JrZXJzIGZvciB0aGUgY3VycmVudCBjaHVua1xuXHRcdFx0Y3R4LmNvdW50U3RhcnRlZCArPSBjaHVuay5sZW5ndGg7XG5cdFx0XHRmb3IgKGNvbnN0IHBhZ2Ugb2YgY2h1bmspIHtcblx0XHRcdFx0Y3R4LndvcmtlcihwYWdlLCB0aGlzUHJveHkpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0Y29uc3QgZm5Eb25lT25lID0gKCkgPT4ge1xuXHRcdFx0Y3R4LmNvdW50RmluaXNoZWQrKztcblx0XHRcdC8vIHVwZGF0ZSBvdmVyYWxsIHN0YXR1cyBsaW5lXG5cdFx0XHRjb25zdCB0b3RhbCA9IGN0eC5wYWdlTGlzdC5sZW5ndGg7XG5cdFx0XHRpZiAoY3R4LmNvdW50RmluaXNoZWQgPCB0b3RhbCkge1xuXHRcdFx0XHRjb25zdCBwcm9ncmVzcyA9IE1hdGgucm91bmQoKDEwMCAqIGN0eC5jb3VudEZpbmlzaGVkKSAvIHRvdGFsKTtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuc3RhdHVzKGAke3Byb2dyZXNzfSVgKTtcblx0XHRcdFx0Ly8gc3RhcnQgYSBuZXcgY2h1bmsgaWYgd2UncmUgY2xvc2UgZW5vdWdoIHRvIHRoZSBlbmQgb2YgdGhlIHByZXZpb3VzIGNodW5rLCBhbmRcblx0XHRcdFx0Ly8gd2UgaGF2ZW4ndCBhbHJlYWR5IHN0YXJ0ZWQgdGhlIG5leHQgb25lXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRjdHguY291bnRGaW5pc2hlZCA+PSBjdHguY291bnRTdGFydGVkIC0gTWF0aC5tYXgoY3R4Lm9wdGlvbnMuY2h1bmtTaXplIC8gMTAsIDIpICYmXG5cdFx0XHRcdFx0TWF0aC5mbG9vcihjdHguY291bnRGaW5pc2hlZCAvIGN0eC5vcHRpb25zLmNodW5rU2l6ZSkgPiBjdHguY3VycmVudENodW5rSW5kZXhcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Zm5TdGFydE5ld0NodW5rKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoY3R4LmNvdW50RmluaXNoZWQgPT09IHRvdGFsKSB7XG5cdFx0XHRcdGNvbnN0IHN0YXR1c1N0cmluZyA9IGDlrozmiJDvvIgke2N0eC5jb3VudEZpbmlzaGVkU3VjY2Vzc30vJHtjdHguY291bnRGaW5pc2hlZH3mk43kvZzmiJDlip/lrozmiJDvvIlgO1xuXHRcdFx0XHRpZiAoY3R4LmNvdW50RmluaXNoZWRTdWNjZXNzIDwgY3R4LmNvdW50RmluaXNoZWQpIHtcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC53YXJuKHN0YXR1c1N0cmluZyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuaW5mbyhzdGF0dXNTdHJpbmcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChjdHgucG9zdEZpbmlzaCkge1xuXHRcdFx0XHRcdGN0eC5wb3N0RmluaXNoKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0TW9yZWJpdHMud2lraS5yZW1vdmVDaGVja3BvaW50KCk7XG5cdFx0XHRcdGN0eC5ydW5uaW5nID0gZmFsc2U7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBjdHguY291bnRGaW5pc2hlZCA+IHRvdGFsXG5cdFx0XHRcdC8vIGp1c3QgZm9yIGdpZ2dsZXMhICh3ZWxsLCBzZXJpb3VzIGRlYnVnZ2luZywgYWN0dWFsbHkpXG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50Lndhcm4oXG5cdFx0XHRcdFx0YCR7d2luZG93LndnVUxTKCflrozmiJDvvIjlpJrmiafooYzkuoYnLCAn5a6M5oiQ77yI5aSa5Z+36KGM5LqGJykgKyAoY3R4LmNvdW50RmluaXNoZWQgLSB0b3RhbCl95qyh77yJYFxuXHRcdFx0XHQpO1xuXHRcdFx0XHRNb3JlYml0cy53aWtpLnJlbW92ZUNoZWNrcG9pbnQoKTtcblx0XHRcdFx0Y3R4LnJ1bm5pbmcgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9O1xuXHR9O1xuXHQvKipcblx0ICogQSBzaW1wbGUgZHJhZ2dhYmxlIHdpbmRvdywgbm93IGEgd3JhcHBlciBmb3IgalF1ZXJ5IFVJJ3MgZGlhbG9nIGZlYXR1cmUuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0c1xuXHQgKiBAY2xhc3Ncblx0ICogQHJlcXVpcmVzIGpxdWVyeS51aS5kaWFsb2dcblx0ICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgLSBUaGUgbWF4aW11bSBhbGxvd2FibGUgaGVpZ2h0IGZvciB0aGUgY29udGVudCBhcmVhLlxuXHQgKi9cblx0TW9yZWJpdHMuc2ltcGxlV2luZG93ID0gZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQpIHtcblx0XHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0dGhpcy5jb250ZW50ID0gY29udGVudDtcblx0XHRjb250ZW50LmNsYXNzTmFtZSA9ICdtb3JlYml0cy1kaWFsb2ctY29udGVudCc7XG5cdFx0Y29udGVudC5pZCA9IGBtb3JlYml0cy1kaWFsb2ctY29udGVudC0ke01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDFlMTUpfWA7XG5cdFx0dGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG5cdFx0JCh0aGlzLmNvbnRlbnQpLmRpYWxvZyh7XG5cdFx0XHRhdXRvT3BlbjogZmFsc2UsXG5cdFx0XHRidXR0b25zOiB7XG5cdFx0XHRcdCdQbGFjZWhvbGRlciBidXR0b24nOiAoKSA9PiB7fSxcblx0XHRcdH0sXG5cdFx0XHRkaWFsb2dDbGFzczogJ21vcmViaXRzLWRpYWxvZycsXG5cdFx0XHR3aWR0aDogTWF0aC5taW4oTnVtYmVyLnBhcnNlSW50KHdpbmRvdy5pbm5lcldpZHRoLCAxMCksIE51bWJlci5wYXJzZUludCh3aWR0aCB8fCA4MDAsIDEwKSksXG5cdFx0XHQvLyBnaXZlIGpRdWVyeSB0aGUgZ2l2ZW4gaGVpZ2h0IHZhbHVlICh3aGljaCByZXByZXNlbnRzIHRoZSBhbnRpY2lwYXRlZCBoZWlnaHQgb2YgdGhlIGRpYWxvZykgaGVyZSwgc29cblx0XHRcdC8vIGl0IGNhbiBwb3NpdGlvbiB0aGUgZGlhbG9nIGFwcHJvcHJpYXRlbHlcblx0XHRcdC8vIHRoZSAyMCBwaXhlbHMgcmVwcmVzZW50cyBhZGp1c3RtZW50IGZvciB0aGUgZXh0cmEgaGVpZ2h0IG9mIHRoZSBqUXVlcnkgZGlhbG9nIFwiY2hyb21lXCIsIGNvbXBhcmVkXG5cdFx0XHQvLyB0byB0aGF0IG9mIHRoZSBvbGQgU2ltcGxlV2luZG93XG5cdFx0XHRoZWlnaHQ6IGhlaWdodCArIDIwLFxuXHRcdFx0Y2xvc2U6IChldmVudCkgPT4ge1xuXHRcdFx0XHQvLyBkaWFsb2dzIGFuZCB0aGVpciBjb250ZW50IGNhbiBiZSBkZXN0cm95ZWQgb25jZSBjbG9zZWRcblx0XHRcdFx0JChldmVudC50YXJnZXQpLmRpYWxvZygnZGVzdHJveScpLnJlbW92ZSgpO1xuXHRcdFx0fSxcblx0XHRcdHJlc2l6ZVN0YXJ0KCkge1xuXHRcdFx0XHRbdGhpcy5zY3JvbGxib3hdID0gJCh0aGlzKS5maW5kKCcubW9yZWJpdHMtc2Nyb2xsYm94Jyk7XG5cdFx0XHRcdGlmICh0aGlzLnNjcm9sbGJveCkge1xuXHRcdFx0XHRcdHRoaXMuc2Nyb2xsYm94LnN0eWxlLm1heEhlaWdodCA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHJlc2l6ZVN0b3AoKSB7XG5cdFx0XHRcdHRoaXMuc2Nyb2xsYm94ID0gbnVsbDtcblx0XHRcdH0sXG5cdFx0XHRyZXNpemUoKSB7XG5cdFx0XHRcdHRoaXMuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XG5cdFx0XHRcdGlmICh0aGlzLnNjcm9sbGJveCkge1xuXHRcdFx0XHRcdHRoaXMuc2Nyb2xsYm94LnN0eWxlLndpZHRoID0gJyc7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0Y29uc3QgJHdpZGdldCA9ICQodGhpcy5jb250ZW50KS5kaWFsb2coJ3dpZGdldCcpO1xuXHRcdC8vIGRlbGV0ZSB0aGUgcGxhY2Vob2xkZXIgYnV0dG9uIChpdCdzIG9ubHkgdGhlcmUgc28gdGhlIGJ1dHRvbnBhbmUgZ2V0cyBjcmVhdGVkKVxuXHRcdCR3aWRnZXQuZmluZCgnYnV0dG9uJykuZWFjaCgoa2V5LCB2YWx1ZSkgPT4ge1xuXHRcdFx0dmFsdWUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh2YWx1ZSk7XG5cdFx0fSk7XG5cdFx0Ly8gYWRkIGNvbnRhaW5lciBmb3IgdGhlIGJ1dHRvbnMgd2UgYWRkLCBhbmQgdGhlIGZvb3RlciBsaW5rcyAoaWYgYW55KVxuXHRcdGNvbnN0IGJ1dHRvbnNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0YnV0dG9uc3Bhbi5jbGFzc05hbWUgPSAnbW9yZWJpdHMtZGlhbG9nLWJ1dHRvbnMnO1xuXHRcdGNvbnN0IGxpbmtzc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRsaW5rc3NwYW4uY2xhc3NOYW1lID0gJ21vcmViaXRzLWRpYWxvZy1mb290ZXJsaW5rcyc7XG5cdFx0JHdpZGdldC5maW5kKCcudWktZGlhbG9nLWJ1dHRvbnBhbmUnKS5hcHBlbmQoYnV0dG9uc3BhbiwgbGlua3NzcGFuKTtcblx0XHQvLyByZXNpemUgdGhlIHNjcm9sbGJveCB3aXRoIHRoZSBkaWFsb2csIGlmIG9uZSBpcyBwcmVzZW50XG5cdFx0JHdpZGdldC5yZXNpemFibGUoJ29wdGlvbicsICdhbHNvUmVzaXplJywgYCMke3RoaXMuY29udGVudC5pZH0gLm1vcmViaXRzLXNjcm9sbGJveCwgIyR7dGhpcy5jb250ZW50LmlkfWApO1xuXHR9O1xuXHRNb3JlYml0cy5zaW1wbGVXaW5kb3cucHJvdG90eXBlID0ge1xuXHRcdGJ1dHRvbnM6IFtdLFxuXHRcdGhlaWdodDogNjAwLFxuXHRcdGhhc0Zvb3RlckxpbmtzOiBmYWxzZSxcblx0XHRzY3JpcHROYW1lOiBudWxsLFxuXHRcdC8qKlxuXHRcdCAqIEZvY3VzZXMgdGhlIGRpYWxvZy4gVGhpcyBtaWdodCB3b3JrLCBvciBvbiB0aGUgY29udHJhcnksIGl0IG1pZ2h0IG5vdC5cblx0XHQgKlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdFx0ICovXG5cdFx0Zm9jdXMoKSB7XG5cdFx0XHQkKHRoaXMuY29udGVudCkuZGlhbG9nKCdtb3ZlVG9Ub3AnKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQ2xvc2VzIHRoZSBkaWFsb2cuIElmIHRoaXMgaXMgc2V0IGFzIGFuIGV2ZW50IGhhbmRsZXIsIGl0IHdpbGwgc3RvcCB0aGUgZXZlbnRcblx0XHQgKiBmcm9tIGRvaW5nIGFueXRoaW5nIG1vcmUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2V2ZW50fSBbZXZlbnRdXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRjbG9zZShldmVudCkge1xuXHRcdFx0aWYgKGV2ZW50KSB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR9XG5cdFx0XHQkKHRoaXMuY29udGVudCkuZGlhbG9nKCdjbG9zZScpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBTaG93cyB0aGUgZGlhbG9nLiBDYWxsaW5nIGRpc3BsYXkoKSBvbiBhIGRpYWxvZyB0aGF0IGhhcyBwcmV2aW91c2x5IGJlZW4gY2xvc2VkXG5cdFx0ICogbWlnaHQgd29yaywgYnV0IGl0IGlzIG5vdCBndWFyYW50ZWVkLlxuXHRcdCAqXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRkaXNwbGF5KCkge1xuXHRcdFx0aWYgKHRoaXMuc2NyaXB0TmFtZSkge1xuXHRcdFx0XHRjb25zdCAkd2lkZ2V0ID0gJCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnd2lkZ2V0Jyk7XG5cdFx0XHRcdCR3aWRnZXQuZmluZCgnLm1vcmViaXRzLWRpYWxvZy1zY3JpcHRuYW1lJykucmVtb3ZlKCk7XG5cdFx0XHRcdGNvbnN0IHNjcmlwdG5hbWVzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdFx0XHRzY3JpcHRuYW1lc3Bhbi5jbGFzc05hbWUgPSAnbW9yZWJpdHMtZGlhbG9nLXNjcmlwdG5hbWUnO1xuXHRcdFx0XHRzY3JpcHRuYW1lc3Bhbi50ZXh0Q29udGVudCA9IGAke3RoaXMuc2NyaXB0TmFtZX0gXFx1MDBCNyBgOyAvLyBVKzAwQjcgTUlERExFIERPVCA9ICZtaWRkb3Q7XG5cdFx0XHRcdCR3aWRnZXQuZmluZCgnLnVpLWRpYWxvZy10aXRsZScpLnByZXBlbmQoc2NyaXB0bmFtZXNwYW4pO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgZGlhbG9nID0gJCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnb3BlbicpO1xuXHRcdFx0aWYgKHdpbmRvdy5zZXR1cFRvb2x0aXBzICYmIHdpbmRvdy5wZyAmJiB3aW5kb3cucGcucmUgJiYgd2luZG93LnBnLnJlLmRpZmYpIHtcblx0XHRcdFx0Ly8gdGllIGluIHdpdGggTkFWUE9QXG5cdFx0XHRcdGRpYWxvZy5wYXJlbnQoKVswXS5yYW5TZXR1cFRvb2x0aXBzQWxyZWFkeSA9IGZhbHNlO1xuXHRcdFx0XHR3aW5kb3cuc2V0dXBUb29sdGlwcyhkaWFsb2cucGFyZW50KClbMF0pO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zZXRIZWlnaHQodGhpcy5oZWlnaHQpOyAvLyBpbml0IGhlaWdodCBhbGdvcml0aG1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogU2V0cyB0aGUgZGlhbG9nIHRpdGxlLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRzZXRUaXRsZSh0aXRsZSkge1xuXHRcdFx0JCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnb3B0aW9uJywgJ3RpdGxlJywgdGl0bGUpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBTZXRzIHRoZSBzY3JpcHQgbmFtZSwgYXBwZWFyaW5nIGFzIGEgcHJlZml4IHRvIHRoZSB0aXRsZSB0byBoZWxwIHVzZXJzIGRldGVybWluZSB3aGljaFxuXHRcdCAqIHVzZXIgc2NyaXB0IGlzIHByb2R1Y2luZyB3aGljaCBkaWFsb2cuIEZvciBpbnN0YW5jZSwgVHdpbmtsZSBtb2R1bGVzIHNldCB0aGlzIHRvIFwiVHdpbmtsZVwiLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHRcdCAqL1xuXHRcdHNldFNjcmlwdE5hbWUobmFtZSkge1xuXHRcdFx0dGhpcy5zY3JpcHROYW1lID0gbmFtZTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogU2V0cyB0aGUgZGlhbG9nIHdpZHRoLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRzZXRXaWR0aCh3aWR0aCkge1xuXHRcdFx0JCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnb3B0aW9uJywgJ3dpZHRoJywgd2lkdGgpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBTZXRzIHRoZSBkaWFsb2cncyBtYXhpbXVtIGhlaWdodC4gVGhlIGRpYWxvZyB3aWxsIGF1dG8tc2l6ZSB0byBmaXQgaXRzIGNvbnRlbnRzLFxuXHRcdCAqIGJ1dCB0aGUgY29udGVudCBhcmVhIHdpbGwgZ3JvdyBubyBsYXJnZXIgdGhhbiB0aGUgaGVpZ2h0IGdpdmVuIGhlcmUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRzZXRIZWlnaHQoaGVpZ2h0KSB7XG5cdFx0XHR0aGlzLmhlaWdodCA9IGhlaWdodDtcblx0XHRcdC8vIGZyb20gZGlzcGxheSB0aW1lIG9ud2FyZHMsIGxldCB0aGUgYnJvd3NlciBkZXRlcm1pbmUgdGhlIG9wdGltdW0gaGVpZ2h0LFxuXHRcdFx0Ly8gYW5kIGluc3RlYWQgbGltaXQgdGhlIGhlaWdodCBhdCB0aGUgZ2l2ZW4gdmFsdWVcblx0XHRcdC8vIG5vdGUgdGhhdCB0aGUgZ2l2ZW4gaGVpZ2h0IHdpbGwgZXhjbHVkZSB0aGUgYXBwcm94LiAyMHB4IHRoYXQgdGhlIGpRdWVyeSBVSVxuXHRcdFx0Ly8gY2hyb21lIGhhcyBpbiBoZWlnaHQgaW4gYWRkaXRpb24gdG8gdGhlIGhlaWdodCBvZiBhbiBlcXVpdmFsZW50IFwiY2xhc3NpY1wiXG5cdFx0XHQvLyBNb3JlYml0cy5zaW1wbGVXaW5kb3dcblx0XHRcdGlmIChcblx0XHRcdFx0TnVtYmVyLnBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoJCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnd2lkZ2V0JylbMF0sIG51bGwpLmhlaWdodCwgMTApID5cblx0XHRcdFx0d2luZG93LmlubmVySGVpZ2h0XG5cdFx0XHQpIHtcblx0XHRcdFx0JCh0aGlzLmNvbnRlbnQpXG5cdFx0XHRcdFx0LmRpYWxvZygnb3B0aW9uJywgJ2hlaWdodCcsIHdpbmRvdy5pbm5lckhlaWdodCAtIDIpXG5cdFx0XHRcdFx0LmRpYWxvZygnb3B0aW9uJywgJ3Bvc2l0aW9uJywgJ3RvcCcpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnb3B0aW9uJywgJ2hlaWdodCcsICdhdXRvJyk7XG5cdFx0XHR9XG5cdFx0XHQkKHRoaXMuY29udGVudCkuZGlhbG9nKCd3aWRnZXQnKS5maW5kKCcubW9yZWJpdHMtZGlhbG9nLWNvbnRlbnQnKVswXS5zdHlsZS5tYXhIZWlnaHQgPSBgJHtOdW1iZXIucGFyc2VJbnQoXG5cdFx0XHRcdHRoaXMuaGVpZ2h0IC0gMzAsXG5cdFx0XHRcdDEwXG5cdFx0XHQpfXB4YDtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogU2V0cyB0aGUgY29udGVudCBvZiB0aGUgZGlhbG9nIHRvIHRoZSBnaXZlbiBlbGVtZW50IG5vZGUsIHVzdWFsbHkgZnJvbSByZW5kZXJpbmdcblx0XHQgKiBhIHtAbGluayBNb3JlYml0cy5xdWlja0Zvcm19LlxuXHRcdCAqIFJlLWVudW1lcmF0ZXMgdGhlIGZvb3RlciBidXR0b25zLCBidXQgbGVhdmVzIHRoZSBmb290ZXIgbGlua3MgYXMgdGhleSBhcmUuXG5cdFx0ICogQmUgc3VyZSB0byBjYWxsIHRoaXMgYXQgbGVhc3Qgb25jZSBiZWZvcmUgdGhlIGRpYWxvZyBpcyBkaXNwbGF5ZWQuLi5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRlbnRcblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHRcdCAqL1xuXHRcdHNldENvbnRlbnQoY29udGVudCkge1xuXHRcdFx0dGhpcy5wdXJnZUNvbnRlbnQoKTtcblx0XHRcdHRoaXMuYWRkQ29udGVudChjb250ZW50KTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQWRkcyB0aGUgZ2l2ZW4gZWxlbWVudCBub2RlIHRvIHRoZSBkaWFsb2cgY29udGVudC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRlbnRcblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHRcdCAqL1xuXHRcdGFkZENvbnRlbnQoY29udGVudCkge1xuXHRcdFx0dGhpcy5jb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXHRcdFx0Ly8gbG9vayBmb3Igc3VibWl0IGJ1dHRvbnMgaW4gdGhlIGNvbnRlbnQsIGhpZGUgdGhlbSwgYW5kIGFkZCBhIHByb3h5IGJ1dHRvbiB0byB0aGUgYnV0dG9uIHBhbmVcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0JCh0aGlzLmNvbnRlbnQpXG5cdFx0XHRcdC5maW5kKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdLCBidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpXG5cdFx0XHRcdC5lYWNoKChrZXksIHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0dmFsdWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0XHRjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0XHRcdFx0XHRpZiAodmFsdWUuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG5cdFx0XHRcdFx0XHRidXR0b24udGV4dENvbnRlbnQgPSB2YWx1ZS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh2YWx1ZS50ZXh0Q29udGVudCkge1xuXHRcdFx0XHRcdFx0YnV0dG9uLnRleHRDb250ZW50ID0gdmFsdWUudGV4dENvbnRlbnQ7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGJ1dHRvbi50ZXh0Q29udGVudCA9ICfmj5DkuqQnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRidXR0b24uY2xhc3NOYW1lID0gdmFsdWUuY2xhc3NOYW1lIHx8ICdzdWJtaXRCdXR0b25Qcm94eSc7XG5cdFx0XHRcdFx0Ly8gaGVyZSBpcyBhbiBpbnN0YW5jZSBvZiBjaGVhcCBjb2RpbmcsIHByb2JhYmx5IGEgbWVtb3J5LXVzYWdlIGhpdCBpbiB1c2luZyBhIGNsb3N1cmUgaGVyZVxuXHRcdFx0XHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcdFx0J2NsaWNrJyxcblx0XHRcdFx0XHRcdCgpID0+IHtcblx0XHRcdFx0XHRcdFx0dmFsdWUuY2xpY2soKTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRmYWxzZVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0c2VsZi5idXR0b25zW3NlbGYuYnV0dG9ucy5sZW5ndGhdID0gYnV0dG9uO1xuXHRcdFx0XHR9KTtcblx0XHRcdC8vIHJlbW92ZSBhbGwgYnV0dG9ucyBmcm9tIHRoZSBidXR0b24gcGFuZSBhbmQgcmUtYWRkIHRoZW1cblx0XHRcdGlmICh0aGlzLmJ1dHRvbnMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHQkKHRoaXMuY29udGVudClcblx0XHRcdFx0XHQuZGlhbG9nKCd3aWRnZXQnKVxuXHRcdFx0XHRcdC5maW5kKCcubW9yZWJpdHMtZGlhbG9nLWJ1dHRvbnMnKVxuXHRcdFx0XHRcdC5lbXB0eSgpXG5cdFx0XHRcdFx0LmFwcGVuZCh0aGlzLmJ1dHRvbnMpWzBdXG5cdFx0XHRcdFx0LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1lbXB0eScpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCh0aGlzLmNvbnRlbnQpXG5cdFx0XHRcdFx0LmRpYWxvZygnd2lkZ2V0Jylcblx0XHRcdFx0XHQuZmluZCgnLm1vcmViaXRzLWRpYWxvZy1idXR0b25zJylbMF1cblx0XHRcdFx0XHQuc2V0QXR0cmlidXRlKCdkYXRhLWVtcHR5JywgJ2RhdGEtZW1wdHknKTsgLy8gdXNlZCBieSBDU1Ncblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBSZW1vdmVzIGFsbCBjb250ZW50cyBmcm9tIHRoZSBkaWFsb2csIGJhcnJpbmcgYW55IGZvb3RlciBsaW5rcy5cblx0XHQgKlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdFx0ICovXG5cdFx0cHVyZ2VDb250ZW50KCkge1xuXHRcdFx0dGhpcy5idXR0b25zID0gW107XG5cdFx0XHQvLyBkZWxldGUgYWxsIGJ1dHRvbnMgaW4gdGhlIGJ1dHRvbnBhbmVcblx0XHRcdCQodGhpcy5jb250ZW50KS5kaWFsb2coJ3dpZGdldCcpLmZpbmQoJy5tb3JlYml0cy1kaWFsb2ctYnV0dG9ucycpLmVtcHR5KCk7XG5cdFx0XHR3aGlsZSAodGhpcy5jb250ZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xuXHRcdFx0XHR0aGlzLmNvbnRlbnQucmVtb3ZlQ2hpbGQodGhpcy5jb250ZW50LmZpcnN0Q2hpbGQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBBZGRzIGEgbGluayBpbiB0aGUgYm90dG9tLXJpZ2h0IGNvcm5lciBvZiB0aGUgZGlhbG9nLlxuXHRcdCAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gcHJvdmlkZSBoZWxwIG9yIHBvbGljeSBsaW5rcy5cblx0XHQgKiBGb3IgZXhhbXBsZSwgVHdpbmtsZSdzIENTRCBtb2R1bGUgYWRkcyBhIGxpbmsgdG8gdGhlIENTRCBwb2xpY3kgcGFnZSxcblx0XHQgKiBhcyB3ZWxsIGFzIGEgbGluayB0byBUd2lua2xlJ3MgZG9jdW1lbnRhdGlvbi5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gRGlzcGxheSB0ZXh0LlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB3aWtpUGFnZSAtIExpbmsgdGFyZ2V0LlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3ByZXA9ZmFsc2VdIC0gU2V0IHRydWUgdG8gcHJlcGVuZCByYXRoZXIgdGhhbiBhcHBlbmQuXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRhZGRGb290ZXJMaW5rKHRleHQsIHdpa2lQYWdlLCBwcmVwKSB7XG5cdFx0XHRjb25zdCAkZm9vdGVybGlua3MgPSAkKHRoaXMuY29udGVudCkuZGlhbG9nKCd3aWRnZXQnKS5maW5kKCcubW9yZWJpdHMtZGlhbG9nLWZvb3RlcmxpbmtzJyk7XG5cdFx0XHRpZiAodGhpcy5oYXNGb290ZXJMaW5rcykge1xuXHRcdFx0XHRjb25zdCBidWxsZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRcdGJ1bGxldC50ZXh0Q29udGVudCA9ICcgXFx1MjAyMiAnOyAvLyBVKzIwMjIgQlVMTEVUXG5cdFx0XHRcdGlmIChwcmVwKSB7XG5cdFx0XHRcdFx0JGZvb3RlcmxpbmtzLnByZXBlbmQoYnVsbGV0KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkZm9vdGVybGlua3MuYXBwZW5kKGJ1bGxldCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdFx0XHRsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIG13LnV0aWwuZ2V0VXJsKHdpa2lQYWdlKSk7XG5cdFx0XHRsaW5rLnNldEF0dHJpYnV0ZSgndGl0bGUnLCB3aWtpUGFnZSk7XG5cdFx0XHRsaW5rLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuXHRcdFx0bGluay5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdub29wZW5lciBub3JlZmVycmVyJyk7XG5cdFx0XHRsaW5rLnRleHRDb250ZW50ID0gdGV4dDtcblx0XHRcdGlmIChwcmVwKSB7XG5cdFx0XHRcdCRmb290ZXJsaW5rcy5wcmVwZW5kKGxpbmspO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JGZvb3RlcmxpbmtzLmFwcGVuZChsaW5rKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuaGFzRm9vdGVyTGlua3MgPSB0cnVlO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBTZXRzIHdoZXRoZXIgdGhlIHdpbmRvdyBzaG91bGQgYmUgbW9kYWwgb3Igbm90LiBNb2RhbCBkaWFsb2dzIGNyZWF0ZVxuXHRcdCAqIGFuIG92ZXJsYXkgYmVsb3cgdGhlIGRpYWxvZyBidXQgYWJvdmUgb3RoZXIgcGFnZSBlbGVtZW50cy4gVGhpc1xuXHRcdCAqIG11c3QgYmUgdXNlZCAoaWYgbmVjZXNzYXJ5KSBiZWZvcmUgY2FsbGluZyBkaXNwbGF5KCkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFttb2RhbD1mYWxzZV0gLSBJZiBzZXQgdG8gdHJ1ZSwgb3RoZXIgaXRlbXMgb24gdGhlXG5cdFx0ICogcGFnZSB3aWxsIGJlIGRpc2FibGVkLCBpLmUuLCBjYW5ub3QgYmUgaW50ZXJhY3RlZCB3aXRoLlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdFx0ICovXG5cdFx0c2V0TW9kYWxpdHkobW9kYWwpIHtcblx0XHRcdCQodGhpcy5jb250ZW50KS5kaWFsb2coJ29wdGlvbicsICdtb2RhbCcsIG1vZGFsKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdH07XG5cdC8qKlxuXHQgKiBFbmFibGVzIG9yIGRpc2FibGVzIGFsbCBmb290ZXIgYnV0dG9ucyBvbiBhbGwge0BsaW5rIE1vcmViaXRzLnNpbXBsZVdpbmRvd31zIGluIHRoZSBjdXJyZW50IHBhZ2UuXG5cdCAqIFRoaXMgc2hvdWxkIGJlIGNhbGxlZCB3aXRoIGBmYWxzZWAgd2hlbiB0aGUgYnV0dG9uKHMpIGJlY29tZSBpcnJlbGV2YW50IChlLmcuIGp1c3QgYmVmb3JlXG5cdCAqIHtAbGluayBNb3JlYml0cy5zdGF0dXMuaW5pdH0gaXMgY2FsbGVkKS5cblx0ICogVGhpcyBpcyBub3QgYW4gaW5zdGFuY2UgbWV0aG9kIHNvIHRoYXQgY29uc3VtZXJzIGRvbid0IGhhdmUgdG8ga2VlcCBhIHJlZmVyZW5jZSB0byB0aGVcblx0ICogb3JpZ2luYWwgYE1vcmViaXRzLnNpbXBsZVdpbmRvd2Agb2JqZWN0IHNpdHRpbmcgYXJvdW5kIHNvbWV3aGVyZS4gQW55d2F5LCBtb3N0IG9mIHRoZSB0aW1lXG5cdCAqIHRoZXJlIHdpbGwgb25seSBiZSBvbmUgYE1vcmViaXRzLnNpbXBsZVdpbmRvd2Agb3Blbiwgc28gdGhpcyBzaG91bGRuJ3QgbWF0dGVyLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuc2ltcGxlV2luZG93XG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gZW5hYmxlZFxuXHQgKi9cblx0TW9yZWJpdHMuc2ltcGxlV2luZG93LnNldEJ1dHRvbnNFbmFibGVkID0gKGVuYWJsZWQpID0+IHtcblx0XHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0XHQkYm9keS5maW5kKCcubW9yZWJpdHMtZGlhbG9nLWJ1dHRvbnMgYnV0dG9uJykucHJvcCgnZGlzYWJsZWQnLCAhZW5hYmxlZCk7XG5cdH07XG59KShqUXVlcnkpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQSw2RkFBQUEsU0FBQTtBQUFBO0FBQ0EsUUFBSSxRQUFRLFNBQVUsSUFBSTtBQUN4QixhQUFPLE1BQU0sR0FBRyxTQUFTLFFBQVE7QUFBQSxJQUNuQztBQUdBLElBQUFBLFFBQU87QUFBQSxJQUVMLE1BQU0sT0FBTyxjQUFjLFlBQVksVUFBVSxLQUNqRCxNQUFNLE9BQU8sVUFBVSxZQUFZLE1BQU07QUFBQSxJQUV6QyxNQUFNLE9BQU8sUUFBUSxZQUFZLElBQUksS0FDckMsTUFBTSxPQUFPLFVBQVUsWUFBWSxNQUFNLEtBQ3pDLE1BQU0sT0FBTyxXQUFRLFlBQVksT0FBSTtBQUFBLElBRXBDLDRCQUFZO0FBQUUs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M0IsTUFBTTtRQUMzQjtNQUNEO0FBQ0EsWUFBTXJPLE9BQU9ydEIsU0FBU3lGLGNBQWMsR0FBRztBQUN2QzRuQixXQUFLMW5CLGFBQWEsUUFBUXRHLEdBQUd5RCxLQUFLQyxPQUFPdzRCLFFBQVEsQ0FBQztBQUNsRGxPLFdBQUsxbkIsYUFBYSxTQUFTNDFCLFFBQVE7QUFDbkNsTyxXQUFLMW5CLGFBQWEsVUFBVSxRQUFRO0FBQ3BDMG5CLFdBQUsxbkIsYUFBYSxPQUFPLHFCQUFxQjtBQUM5QzBuQixXQUFLaGhCLGNBQWMvSjtBQUNuQixVQUFJazVCLE1BQU07QUFDVEMscUJBQWF0VSxRQUFRa0csSUFBSTtNQUMxQixPQUFPO0FBQ05vTyxxQkFBYWozQixPQUFPNm9CLElBQUk7TUFDekI7QUFDQSxXQUFLOE0saUJBQWlCO0FBQ3RCLGFBQU87SUFDUjs7Ozs7Ozs7OztJQVVBd0IsWUFBWUMsT0FBTztBQUNsQjE5QixRQUFFLEtBQUt3RSxPQUFPLEVBQUV3MkIsT0FBTyxVQUFVLFNBQVMwQyxLQUFLO0FBQy9DLGFBQU87SUFDUjtFQUNEO0FBWUF6OUIsV0FBUzQ2QixhQUFhOEMsb0JBQXFCQyxhQUFZO0FBQ3RELFVBQU1uUixRQUFRenNCLEVBQUUsTUFBTTtBQUN0QnlzQixVQUFNcGYsS0FBSyxpQ0FBaUMsRUFBRTBULEtBQUssWUFBWSxDQUFDNmMsT0FBTztFQUN4RTtBQUNELEdBQUdDLE1BQU07IiwKICAibmFtZXMiOiBbIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiU3ltYm9sIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiZG9jdW1lbnQiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJUeXBlRXJyb3IiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiYWN0aXZlWERvY3VtZW50IiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIkl0ZXJhdG9yIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIkl0ZXJhdG9yIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiSXRlcmF0b3IiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJtb3JlYml0cyIsICIkIiwgIk1vcmViaXRzIiwgIndpbmRvdyIsICJsMTBuIiwgInJlZGlyZWN0VGFnQWxpYXNlcyIsICJzaWduYXR1cmVUaW1lc3RhbXBGb3JtYXQiLCAic3RyIiwgInJneFVUQyIsICJyZ3hDU1QiLCAibWF0Y2giLCAiZXhlYyIsICJtYXRjaENTVCIsICJtb250aCIsICJkYXRlIiwgImxvY2FsZURhdGEiLCAibW9udGhzIiwgImluZGV4T2YiLCAidXNlcklzSW5Hcm91cCIsICJncm91cCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImluY2x1ZGVzIiwgInVzZXJJc1N5c29wIiwgInNhbml0aXplSVB2NiIsICJhZGRyZXNzIiwgImNvbnNvbGUiLCAid2FybiIsICJpcCIsICJpc1BhZ2VSZWRpcmVjdCIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgInBhZ2VOYW1lTm9ybSIsICJyZXBsYWNlIiwgInBhZ2VOYW1lUmVnZXgiLCAicGFnZU5hbWUiLCAiZmlyc3RDaGFyIiwgInJlbWFpbmRlciIsICJzdHJpbmciLCAiZXNjYXBlUmVnRXhwIiwgInNsaWNlIiwgIlRpdGxlIiwgInBocENoYXJUb1VwcGVyIiwgInRvTG93ZXJDYXNlIiwgImNvbmNhdCIsICJjcmVhdGVIdG1sIiwgImlucHV0IiwgImZyYWdtZW50IiwgImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCAiZ2VuZXJhdGVBcnJheSIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiZWxlbWVudCIsICJ2YWx1ZSIsICJOb2RlIiwgImFwcGVuZENoaWxkIiwgIl9pdGVyYXRvcjIiLCAicGFyc2VIVE1MIiwgInJlbmRlcldpa2lsaW5rcyIsICJfc3RlcDIiLCAibm9kZSIsICJlcnIiLCAiZSIsICJmIiwgInRleHQiLCAidWIiLCAidW5iaW5kZXIiLCAidW5iaW5kIiwgImNvbnRlbnQiLCAiXyIsICJ0YXJnZXQiLCAidGV4dF8iLCAidXRpbCIsICJnZXRVcmwiLCAicmViaW5kIiwgIm5hbWVzcGFjZVJlZ2V4IiwgIm5hbWVzcGFjZXMiLCAiYWxpYXNlcyIsICJyZWdleCIsICJfaSIsICJfT2JqZWN0JGVudHJpZXMiLCAiT2JqZWN0IiwgImVudHJpZXMiLCAibGVuZ3RoIiwgIm5hbWUiLCAibnVtYmVyIiwgIm1hcCIsICJjaGFyIiwgImpvaW4iLCAicXVpY2tGb3JtIiwgImV2ZW50IiwgImV2ZW50VHlwZSIsICJyb290IiwgInR5cGUiLCAicHJvdG90eXBlIiwgInJlbmRlciIsICJyZXQiLCAibmFtZXMiLCAiYXBwZW5kIiwgImRhdGEiLCAiY2hpbGRzIiwgImlkIiwgImNoaWxkIiwgImludGVybmFsU3ViZ3JvdXBJZCIsICJjdXJyZW50Tm9kZSIsICJjb21wdXRlIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgImluSWQiLCAiY2hpbGRDb250YWluZXIiLCAibGFiZWwiLCAiYWRtaW5vbmx5IiwgImkiLCAiY3VycmVudCIsICJzdWJub2RlIiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgInNldEF0dHJpYnV0ZSIsICJhZGRFdmVudExpc3RlbmVyIiwgInNlbGVjdCIsICJtdWx0aXBsZSIsICJzaXplIiwgImRpc2FibGVkIiwgImxpc3QiLCAidmFsdWVzIiwgInNlbGVjdGVkIiwgImhpZGRlbiIsICJjcmVhdGVUZXh0Tm9kZSIsICJjdXJJZCIsICJjdXJEaXYiLCAidG9vbHRpcCIsICJnZW5lcmF0ZVRvb2x0aXAiLCAiY2hlY2tlZCIsICJzdHlsZSIsICJzdWJncm91cCIsICJ0bXBncm91cCIsICJzdWJncm91cFJhdyIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJlbCIsICJuZXdFbCIsICJzaG93biIsICJwYXJlbnROb2RlIiwgImZvcm0iLCAicmVtb3ZlQ2hpbGQiLCAic2hpZnRDbGlja1N1cHBvcnQiLCAiY2hlY2tib3hTaGlmdENsaWNrU3VwcG9ydCIsICJnZXRFbGVtZW50cyIsICJwbGFjZWhvbGRlciIsICJfaTIiLCAiX2FyciIsICJhdHQiLCAiX2kzIiwgIl9hcnIyIiwgIl9pNCIsICJfYXJyMyIsICJtaW4iLCAibWF4IiwgIk51bWJlciIsICJQT1NJVElWRV9JTkZJTklUWSIsICJsaXN0Tm9kZSIsICJtb3JlIiwgIm5ld05vZGUiLCAic3VibGlzdCIsICJhcmVhIiwgImNvdW50ZXIiLCAic3RvcFByb3BhZ2F0aW9uIiwgIm1vcmVCdXR0b24iLCAic3VibGFiZWwiLCAicmVtb3ZlIiwgIm1heGxlbmd0aCIsICJlbGVtIiwgIm1vcmVidXR0b24iLCAibGlzdG5vZGUiLCAibm9kZV8iLCAiaW5wdXRub2RlIiwgInJlbW92ZUF0dHJpYnV0ZSIsICJyZW1vdmVCdXR0b24iLCAicmVzdWx0IiwgImxhYmVsRWxlbWVudCIsICJjb2xzIiwgInJvd3MiLCAicmVxdWlyZWQiLCAicmVhZG9ubHkiLCAiRXJyb3IiLCAidG9TdHJpbmciLCAiZXh0cmEiLCAiJGRhdGEiLCAidG9vbHRpcEJ1dHRvbiIsICJ0aXRsZSIsICJwb3NpdGlvbiIsICJteSIsICJhdCIsICJjb2xsaXNpb24iLCAidG9vbHRpcENsYXNzIiwgImdldElucHV0RGF0YSIsICJfaXRlcmF0b3I1IiwgImVsZW1lbnRzIiwgIl9zdGVwNSIsICJmaWVsZCIsICJmaWVsZE5hbWVOb3JtIiwgImRhdGFzZXQiLCAic2luZ2xlIiwgInZhbCIsICJ0cmltIiwgImZpZWxkTmFtZSIsICIkZm9ybSIsICJlc2NhcGVTZWxlY3RvciIsICIkZWxlbWVudHMiLCAiZmluZCIsICJ0b0FycmF5IiwgImdldENoZWNrYm94T3JSYWRpbyIsICJlbGVtZW50QXJyYXkiLCAiZm91bmQiLCAiZmlsdGVyIiwgImdldEVsZW1lbnRDb250YWluZXIiLCAiSFRNTEZpZWxkU2V0RWxlbWVudCIsICJIVE1MRGl2RWxlbWVudCIsICJIVE1MSGVhZGluZ0VsZW1lbnQiLCAiZ2V0RWxlbWVudExhYmVsT2JqZWN0IiwgIkhUTUxUZXh0QXJlYUVsZW1lbnQiLCAiZ2V0RWxlbWVudExhYmVsIiwgImZpcnN0Q2hpbGQiLCAidGV4dENvbnRlbnQiLCAic2V0RWxlbWVudExhYmVsIiwgImxhYmVsVGV4dCIsICJvdmVycmlkZUVsZW1lbnRMYWJlbCIsICJ0ZW1wb3JhcnlMYWJlbFRleHQiLCAiaGFzQXR0cmlidXRlIiwgInJlc2V0RWxlbWVudExhYmVsIiwgImdldEF0dHJpYnV0ZSIsICJzZXRFbGVtZW50VmlzaWJpbGl0eSIsICJ2aXNpYmlsaXR5IiwgInRvZ2dsZSIsICJzZXRFbGVtZW50VG9vbHRpcFZpc2liaWxpdHkiLCAiSFRNTEZvcm1FbGVtZW50IiwgImdldENoZWNrZWQiLCAicmV0dXJuQXJyYXkiLCAiSFRNTFNlbGVjdEVsZW1lbnQiLCAib3B0aW9ucyIsICJIVE1MSW5wdXRFbGVtZW50IiwgImdldFVuY2hlY2tlZCIsICJpc0lQdjZBZGRyZXNzIiwgInRvVXBwZXJDYXNlIiwgImFiYnJldlBvcyIsICJDSURSU3RhcnQiLCAiYWRkcmVzc0VuZCIsICJyZXBlYXQiLCAicGFkIiwgInJlcGxhY2VtZW50IiwgInNwbGl0IiwgImlzUmFuZ2UiLCAiaXNJUEFkZHJlc3MiLCAidmFsaWRDSURSIiwgInN1Ym5ldCIsICJwYXJzZUludCIsICJnZXQ2NCIsICJpcHY2IiwgInN1Ym5ldE1hdGNoIiwgImlwUmVnZXgiLCAidG9VcHBlckNhc2VGaXJzdENoYXIiLCAidG9Mb3dlckNhc2VGaXJzdENoYXIiLCAic3BsaXRXZWlnaHRlZEJ5S2V5cyIsICJzdGFydCIsICJlbmQiLCAic2tpcGxpc3QiLCAibGV2ZWwiLCAiaW5pdGlhbCIsICJBcnJheSIsICJpc0FycmF5IiwgIlR5cGVFcnJvciIsICJfaXRlcmF0b3I2IiwgIl9zdGVwNiIsICJmb3JtYXRSZWFzb25UZXh0IiwgImFkZFNpZyIsICJyZWFzb24iLCAic2lnIiwgInNpZ0luZGV4IiwgImxhc3RJbmRleE9mIiwgImZvcm1hdFJlYXNvbkZvckxvZyIsICJzYWZlUmVwbGFjZSIsICJwYXR0ZXJuIiwgImlzSW5maW5pdHkiLCAiZXhwaXJ5IiwgImZvcm1hdFRpbWUiLCAidGltZSIsICJtIiwgIndnVUxTIiwgImFwcGVuZFB1bmN0dWF0aW9uIiwgInB1bmN0dWF0aW9uIiwgInNlYXJjaCIsICJhcnJheSIsICJ1bmlxIiwgImFyciIsICJpdGVtIiwgImlkeCIsICJkdXBzIiwgImNodW5rIiwgIm51bUNodW5rcyIsICJNYXRoIiwgImNlaWwiLCAiZnJvbSIsICJzZWxlY3QyIiwgIm1hdGNoZXJzIiwgIm9wdGdyb3VwRnVsbCIsICJwYXJhbXMiLCAib3JpZ2luYWxNYXRjaGVyIiwgImZuIiwgImRlZmF1bHRzIiwgIm1hdGNoZXIiLCAidGVybSIsICJjaGlsZHJlbiIsICJ3b3JkQmVnaW5uaW5nIiwgIlJlZ0V4cCIsICJ0ZXN0IiwgImhpZ2hsaWdodFNlYXJjaE1hdGNoZXMiLCAic2VhcmNoVGVybSIsICJzZWxlY3QyU2VhcmNoUXVlcnkiLCAibG9hZGluZyIsICJjc3MiLCAicXVlcnlJbnRlcmNlcHRvciIsICJhdXRvU3RhcnQiLCAiZXYiLCAid2hpY2giLCAiY2xvc2VzdCIsICJwcmV2IiwgImRyb3Bkb3duIiwgIiRzZWFyY2giLCAic2VsZWN0aW9uIiwgImZvY3VzIiwgImhpc3RvcnkiLCAicHJlZml4IiwgInJhbmRvbSIsICJwb3N0Zml4IiwgInJlIiwgImdldENhbGxiYWNrIiwgImhhc093biIsICJzZWxmIiwgImFyZ3MiLCAiX3RoaXMkX2QiLCAicGFyYW0iLCAiZGlnaXRNYXRjaCIsICJfZCIsICJEYXRlIiwgIlJlZmxlY3QiLCAiYXBwbHkiLCAiVVRDIiwgImRhdGVQYXJ0cyIsICJGdW5jdGlvbiIsICJiaW5kIiwgImlzVmFsaWQiLCAibG9nIiwgIm1vbnRoc1Nob3J0IiwgImRheXMiLCAiZGF5c1Nob3J0IiwgInJlbGF0aXZlVGltZXMiLCAidGhpc0RheSIsICJwcmV2RGF5IiwgIm5leHREYXkiLCAidGhpc1dlZWsiLCAicGFzdFdlZWsiLCAib3RoZXIiLCAidW5pdE1hcCIsICJzZWNvbmRzIiwgIm1pbnV0ZXMiLCAiaG91cnMiLCAid2Vla3MiLCAieWVhcnMiLCAiaXNOYU4iLCAiZ2V0VGltZSIsICJpc0JlZm9yZSIsICJpc0FmdGVyIiwgImdldFVUQ01vbnRoTmFtZSIsICJnZXRVVENNb250aCIsICJnZXRVVENNb250aE5hbWVBYmJyZXYiLCAiZ2V0TW9udGhOYW1lIiwgImdldE1vbnRoIiwgImdldE1vbnRoTmFtZUFiYnJldiIsICJnZXRVVENEYXlOYW1lIiwgImdldFVUQ0RheSIsICJnZXRVVENEYXlOYW1lQWJicmV2IiwgImdldERheU5hbWUiLCAiZ2V0RGF5IiwgImdldERheU5hbWVBYmJyZXYiLCAiYWRkIiwgInVuaXQiLCAibnVtIiwgInVuaXROb3JtIiwgImtleXMiLCAic3VidHJhY3QiLCAiZm9ybWF0IiwgImZvcm1hdHN0ciIsICJ6b25lIiwgInVkYXRlIiwgImdldFRpbWV6b25lT2Zmc2V0IiwgInRvSVNPU3RyaW5nIiwgImxlbiIsICJoMjQiLCAiZ2V0SG91cnMiLCAiZ2V0TWludXRlcyIsICJnZXRTZWNvbmRzIiwgIm1zIiwgImdldE1pbGxpc2Vjb25kcyIsICJEIiwgImdldERhdGUiLCAiTSIsICJZIiwgImdldEZ1bGxZZWFyIiwgImgxMiIsICJhbU9yUG0iLCAicmVwbGFjZW1lbnRNYXAiLCAiSEgiLCAiSCIsICJoaCIsICJoIiwgIkEiLCAibW0iLCAic3MiLCAiU1NTIiwgImRkZGQiLCAiZGRkIiwgImQiLCAiREQiLCAiTU1NTSIsICJNTU0iLCAiTU0iLCAiWVlZWSIsICJZWSIsICJTdHJpbmciLCAicmF3IiwgIl90ZW1wbGF0ZU9iamVjdCIsICJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsIiwgIl90ZW1wbGF0ZU9iamVjdDIiLCAiY2FsZW5kYXIiLCAiZGF0ZURpZmYiLCAic2V0SG91cnMiLCAibW9udGhIZWFkZXJSZWdleCIsICJnZXRVVENGdWxsWWVhciIsICJtb250aEhlYWRlciIsICJoZWFkZXIiLCAiX2l0ZXJhdG9yNyIsICJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwgIl9zdGVwNyIsICJmdW5jIiwgIndpa2kiLCAibnVtYmVyT2ZBY3Rpb25zTGVmdCIsICJuYnJPZkNoZWNrcG9pbnRzTGVmdCIsICJhY3Rpb25Db21wbGV0ZWQiLCAibm90aWNlIiwgInN0YXR1cyIsICJyZWRpcmVjdCIsICJmb2xsb3dSZWRpcmVjdCIsICJzZXRUaW1lb3V0IiwgImxvY2F0aW9uIiwgInRpbWVPdXQiLCAid3BBY3Rpb25Db21wbGV0ZWRUaW1lT3V0IiwgImFkZENoZWNrcG9pbnQiLCAicmVtb3ZlQ2hlY2twb2ludCIsICJhcGkiLCAiY3VycmVudEFjdGlvbiIsICJxdWVyeSIsICJvblN1Y2Nlc3MiLCAic3RhdHVzRWxlbWVudCIsICJvbkVycm9yIiwgIl90aGlzJHF1ZXJ5IiwgImFzc2VydCIsICJlcnJvcmZvcm1hdCIsICJ1c2VsYW5nIiwgImVycm9ybGFuZyIsICJlcnJvcnN1c2Vsb2NhbCIsICJzZXRTdGF0dXNFbGVtZW50IiwgInN0YXRlbGVtIiwgImZvcm1hdHZlcnNpb24iLCAiZXJyb3IiLCAiYWN0aW9uIiwgInRhZ3MiLCAibW9yZWJpdHNXaWtpQ2hhbmdlVGFnIiwgInBhcmVudCIsICJyZXNwb25zZSIsICJyZXNwb25zZVhNTCIsICJzdGF0dXNUZXh0IiwgImVycm9yQ29kZSIsICJlcnJvclRleHQiLCAiYmFkdG9rZW5SZXRyeSIsICJzZXRQYXJlbnQiLCAicG9zdCIsICJjYWxsZXJBamF4UGFyYW1ldGVycyIsICJxdWVyeVN0cmluZ0FyciIsICJfaTUiLCAiX09iamVjdCRlbnRyaWVzMiIsICJlbmNvZGVVUklDb21wb25lbnQiLCAicXVlcnlTdHJpbmciLCAiYWpheHBhcmFtcyIsICJjb250ZXh0IiwgInVybCIsICJ3aWtpU2NyaXB0IiwgImRhdGFUeXBlIiwgImhlYWRlcnMiLCAibW9yZWJpdHNXaWtpQXBpVXNlckFnZW50IiwgImFqYXgiLCAidGhlbiIsICJvbkFQSXN1Y2Nlc3MiLCAiZXJyb3JzIiwgImNvZGUiLCAiaHRtbCIsICJlcSIsICJhdHRyIiwgInJldHVybkVycm9yIiwgImNhbGwiLCAiaW5mbyIsICJEZWZlcnJlZCIsICJyZXNvbHZlV2l0aCIsICJvbkFQSWZhaWx1cmUiLCAiZXJyb3JUaHJvd24iLCAiZ2V0VG9rZW4iLCAidG9rZW4iLCAicmVqZWN0V2l0aCIsICJnZXRTdGF0dXNFbGVtZW50IiwgImdldEVycm9yQ29kZSIsICJnZXRFcnJvclRleHQiLCAiZ2V0WE1MIiwgImdldFJlc3BvbnNlIiwgImdldENhY2hlZEpzb24iLCAicHJvcCIsICJ0aXRsZXMiLCAicnZzbG90cyIsICJydnByb3AiLCAic21heGFnZSIsICJtYXhhZ2UiLCAiYXBpb2JqIiwgInVubGluayIsICJ3aWtpdGV4dCIsICJwYWdlcyIsICJyZXZpc2lvbnMiLCAic2xvdHMiLCAibWFpbiIsICJKU09OIiwgInBhcnNlIiwgInNldEFwaVVzZXJBZ2VudCIsICJ1YSIsICJ0b2tlbkFwaSIsICJtZXRhIiwgInRva2VucyIsICJjc3JmdG9rZW4iLCAicGFnZSIsICJjdHgiLCAicGFnZUV4aXN0cyIsICJlZGl0U3VtbWFyeSIsICJjaGFuZ2VUYWdzIiwgInRlc3RBY3Rpb25zIiwgImNhbGxiYWNrUGFyYW1ldGVycyIsICJwYWdlVGV4dCIsICJlZGl0TW9kZSIsICJhcHBlbmRUZXh0IiwgInByZXBlbmRUZXh0IiwgIm5ld1NlY3Rpb25UZXh0IiwgIm5ld1NlY3Rpb25UaXRsZSIsICJjcmVhdGVPcHRpb24iLCAibWlub3JFZGl0IiwgImJvdEVkaXQiLCAicGFnZVNlY3Rpb24iLCAibWF4Q29uZmxpY3RSZXRyaWVzIiwgIm1heFJldHJpZXMiLCAiZm9sbG93Q3Jvc3NOc1JlZGlyZWN0IiwgIndhdGNobGlzdE9wdGlvbiIsICJ3YXRjaGxpc3RFeHBpcnkiLCAiY3JlYXRvciIsICJ0aW1lc3RhbXAiLCAicmV2ZXJ0T2xkSUQiLCAibW92ZURlc3RpbmF0aW9uIiwgIm1vdmVUYWxrUGFnZSIsICJtb3ZlU3VicGFnZXMiLCAibW92ZVN1cHByZXNzUmVkaXJlY3QiLCAicHJvdGVjdEVkaXQiLCAicHJvdGVjdE1vdmUiLCAicHJvdGVjdENyZWF0ZSIsICJwcm90ZWN0Q2FzY2FkZSIsICJsb29rdXBOb25SZWRpcmVjdENyZWF0b3IiLCAicGFnZUxvYWRlZCIsICJjc3JmVG9rZW4iLCAibG9hZFRpbWUiLCAibGFzdEVkaXRUaW1lIiwgInBhZ2VJRCIsICJjb250ZW50TW9kZWwiLCAicmV2ZXJ0Q3VySUQiLCAicmV2ZXJ0VXNlciIsICJ3YXRjaGVkIiwgImZ1bGx5UHJvdGVjdGVkIiwgInN1cHByZXNzUHJvdGVjdFdhcm5pbmciLCAiY29uZmxpY3RSZXRyaWVzIiwgInJldHJpZXMiLCAib25Mb2FkU3VjY2VzcyIsICJvbkxvYWRGYWlsdXJlIiwgIm9uU2F2ZVN1Y2Nlc3MiLCAib25TYXZlRmFpbHVyZSIsICJvbkxvb2t1cENyZWF0aW9uU3VjY2VzcyIsICJvbkxvb2t1cENyZWF0aW9uRmFpbHVyZSIsICJvbk1vdmVTdWNjZXNzIiwgIm9uTW92ZUZhaWx1cmUiLCAib25EZWxldGVTdWNjZXNzIiwgIm9uRGVsZXRlRmFpbHVyZSIsICJvblVuZGVsZXRlU3VjY2VzcyIsICJvblVuZGVsZXRlRmFpbHVyZSIsICJvblByb3RlY3RTdWNjZXNzIiwgIm9uUHJvdGVjdEZhaWx1cmUiLCAibG9hZFF1ZXJ5IiwgImxvYWRBcGkiLCAic2F2ZUFwaSIsICJsb29rdXBDcmVhdGlvbkFwaSIsICJtb3ZlQXBpIiwgIm1vdmVQcm9jZXNzQXBpIiwgInBhdHJvbEFwaSIsICJwYXRyb2xQcm9jZXNzQXBpIiwgImRlbGV0ZUFwaSIsICJkZWxldGVQcm9jZXNzQXBpIiwgInVuZGVsZXRlQXBpIiwgInVuZGVsZXRlUHJvY2Vzc0FwaSIsICJwcm90ZWN0QXBpIiwgInByb3RlY3RQcm9jZXNzQXBpIiwgImVtcHR5RnVuY3Rpb24iLCAibG9hZCIsICJvbkZhaWx1cmUiLCAiaW5wcm9wIiwgImludGVzdGFjdGlvbnMiLCAiY3VydGltZXN0YW1wIiwgInJ2bGltaXQiLCAicnZzdGFydGlkIiwgInJlZGlyZWN0cyIsICJydnNlY3Rpb24iLCAiZm5Mb2FkU3VjY2VzcyIsICJzYXZlIiwgImNhblVzZU13VXNlclRva2VuIiwgImZuQ2FuVXNlTXdVc2VyVG9rZW4iLCAiY29uZmlybSIsICJzdW1tYXJ5IiwgInVzZXIiLCAid2F0Y2hsaXN0IiwgImZuQXBwbHlXYXRjaGxpc3RFeHBpcnkiLCAid2F0Y2hsaXN0ZXhwaXJ5IiwgInNlY3Rpb24iLCAibWlub3IiLCAibm90bWlub3IiLCAiYm90IiwgImFwcGVuZHRleHQiLCAicHJlcGVuZHRleHQiLCAic2VjdGlvbnRpdGxlIiwgInVuZG8iLCAidW5kb2FmdGVyIiwgImJhc2V0aW1lc3RhbXAiLCAic3RhcnR0aW1lc3RhbXAiLCAiZm5TYXZlU3VjY2VzcyIsICJmblNhdmVFcnJvciIsICJmbkF1dG9TYXZlIiwgInByZXBlbmQiLCAibmV3U2VjdGlvbiIsICJnZXRQYWdlTmFtZSIsICJnZXRQYWdlVGV4dCIsICJzZXRQYWdlVGV4dCIsICJzZXRBcHBlbmRUZXh0IiwgInNldFByZXBlbmRUZXh0IiwgInNldE5ld1NlY3Rpb25UZXh0IiwgInNldE5ld1NlY3Rpb25UaXRsZSIsICJzZXRFZGl0U3VtbWFyeSIsICJzZXRDaGFuZ2VUYWdzIiwgInNldENyZWF0ZU9wdGlvbiIsICJzZXRNaW5vckVkaXQiLCAic2V0Qm90RWRpdCIsICJzZXRQYWdlU2VjdGlvbiIsICJzZXRNYXhDb25mbGljdFJldHJpZXMiLCAic2V0TWF4UmV0cmllcyIsICJzZXRXYXRjaGxpc3QiLCAic2V0V2F0Y2hsaXN0RXhwaXJ5IiwgInNldFdhdGNobGlzdEZyb21QcmVmZXJlbmNlcyIsICJzZXRGb2xsb3dSZWRpcmVjdCIsICJzZXRMb29rdXBOb25SZWRpcmVjdENyZWF0b3IiLCAiZmxhZyIsICJzZXRNb3ZlRGVzdGluYXRpb24iLCAiZGVzdGluYXRpb24iLCAic2V0TW92ZVRhbGtQYWdlIiwgInNldE1vdmVTdWJwYWdlcyIsICJzZXRNb3ZlU3VwcHJlc3NSZWRpcmVjdCIsICJzZXRFZGl0UHJvdGVjdGlvbiIsICJzZXRNb3ZlUHJvdGVjdGlvbiIsICJzZXRDcmVhdGVQcm90ZWN0aW9uIiwgInNldENhc2NhZGluZ1Byb3RlY3Rpb24iLCAic2V0T2xkSUQiLCAib2xkSUQiLCAiZ2V0Q3VycmVudElEIiwgImdldFJldmlzaW9uVXNlciIsICJnZXRMYXN0RWRpdFRpbWUiLCAic2V0Q2FsbGJhY2tQYXJhbWV0ZXJzIiwgImdldENhbGxiYWNrUGFyYW1ldGVycyIsICJleGlzdHMiLCAiZ2V0UGFnZUlEIiwgImdldENvbnRlbnRNb2RlbCIsICJnZXRXYXRjaGVkIiwgImdldExvYWRUaW1lIiwgImdldENyZWF0b3IiLCAiZ2V0Q3JlYXRpb25UaW1lc3RhbXAiLCAiY2FuRWRpdCIsICJsb29rdXBDcmVhdGlvbiIsICJydmRpciIsICJmbkxvb2t1cENyZWF0aW9uU3VjY2VzcyIsICJyZXZlcnQiLCAibW92ZSIsICJmblByZWZsaWdodENoZWNrcyIsICJmblByb2Nlc3NNb3ZlIiwgImZuTmVlZFRva2VuSW5mb1F1ZXJ5IiwgInBhdHJvbCIsICIkYm9keSIsICJwYXRyb2xocmVmIiwgInJjaWQiLCAiZ2V0UGFyYW1WYWx1ZSIsICJmblByb2Nlc3NQYXRyb2wiLCAicGF0cm9sUXVlcnkiLCAicmNwcm9wIiwgInJjdGl0bGUiLCAicmNsaW1pdCIsICJkZWxldGVQYWdlIiwgImZuUHJvY2Vzc0RlbGV0ZSIsICJ1bmRlbGV0ZVBhZ2UiLCAiZm5Qcm9jZXNzVW5kZWxldGUiLCAicHJvdGVjdCIsICJmblByb2Nlc3NQcm90ZWN0IiwgImdldFByZWZpeGVkVGV4dCIsICJlZGl0UmVzdHJpY3Rpb24iLCAicGFnZW9iaiIsICJmbkNoZWNrUGFnZU5hbWUiLCAicmV2IiwgIm1pc3NpbmciLCAicGFnZWlkIiwgImNvbnRlbnRtb2RlbCIsICJlZGl0UHJvdCIsICJwcm90ZWN0aW9uIiwgImZpbmRMYXN0IiwgInByIiwgImxhc3RyZXZpZCIsICJ0ZXN0YWN0aW9ucyIsICJhY3Rpb25zIiwgIl9pNiIsICJfT2JqZWN0JGtleXMiLCAicmV2aWQiLCAidXNlcmhpZGRlbiIsICJpbnZhbGlkIiwgInJlc29sdmVkTmFtZSIsICJvcmlnTnMiLCAibmFtZXNwYWNlIiwgIm5ld05zIiwgIm5ld0V4cGlyeSIsICJyZWwiLCAiZWRpdCIsICJsaW5rIiwgImNhcHRjaGEiLCAicHVyZ2VRdWVyeSIsICJwdXJnZUFwaSIsICJzbGVlcCIsICJlcnJvckRhdGEiLCAiYWJ1c2VmaWx0ZXIiLCAiZGVzY3JpcHRpb24iLCAic3BhbSIsICJzcGFtYmxhY2tsaXN0IiwgIm1hdGNoZXMiLCAiaXNUZXh0UmVkaXJlY3QiLCAic29tZSIsICJ0YWciLCAiZm5Mb29rdXBOb25SZWRpcmVjdENyZWF0b3IiLCAicmV2cyIsICJfaXRlcmF0b3I4IiwgIl9zdGVwOCIsICJmblByb2Nlc3NDaGVja3MiLCAiYWN0aW9uTWlzc2luZyIsICJwcm90ZWN0TWlzc2luZyIsICJzYWx0TWlzc2luZyIsICJlZGl0cHJvdCIsICJwYWdlVGl0bGUiLCAidG8iLCAibW92ZXRhbGsiLCAibW92ZXN1YnBhZ2VzIiwgIm5vcmVkaXJlY3QiLCAicmVjZW50Y2hhbmdlcyIsICJ1bnBhdHJvbGxlZCIsICJwYXRyb2xTdGF0IiwgImZuUHJvY2Vzc0RlbGV0ZUVycm9yIiwgImZuUHJvY2Vzc1VuZGVsZXRlRXJyb3IiLCAicHJzIiwgIm1vdmVwcm90IiwgImNyZWF0ZXByb3QiLCAiX2l0ZXJhdG9yOSIsICJfc3RlcDkiLCAic291cmNlIiwgImNhc2NhZGUiLCAicHJvdGVjdGlvbnMiLCAiZXhwaXJ5cyIsICJtaWxsaXNlY29uZHMiLCAiZGVmZXJyZWQiLCAicmVzb2x2ZSIsICJwcmV2aWV3IiwgInByZXZpZXdib3giLCAiYWRkQ2xhc3MiLCAiaGlkZSIsICJiZWdpblJlbmRlciIsICJzZWN0aW9uVGl0bGUiLCAic2hvdyIsICJzdGF0dXNzcGFuIiwgImluaXQiLCAicHN0IiwgImRpc2FibGVsaW1pdHJlcG9ydCIsICJkaXNhYmxlZWRpdHNlY3Rpb24iLCAicmVuZGVyQXBpIiwgImZuUmVuZGVyU3VjY2VzcyIsICJpbm5lckhUTUwiLCAibG9hZGVyIiwgIm1vZHVsZXN0eWxlcyIsICJtb2R1bGVzIiwgImNsb3NlUHJldmlldyIsICJlbXB0eSIsICJwYXJzZVRlbXBsYXRlIiwgImNvdW50IiwgInVubmFtZWQiLCAiZXF1YWxzIiwgInBhcmFtZXRlcnMiLCAia2V5IiwgImZpbmRQYXJhbSIsICJmaW5hbCIsICJ0ZXN0MyIsICJwb3AiLCAidGVzdDIiLCAiY2hhckF0IiwgInJlbW92ZUxpbmsiLCAibGlua1RhcmdldCIsICJtd1RpdGxlIiwgIm5ld0Zyb21UZXh0IiwgIm5hbWVzcGFjZUlEIiwgImdldE5hbWVzcGFjZUlkIiwgImdldE1haW5UZXh0IiwgImxpbmtSZWdleFN0cmluZyIsICJpc0ZpbGVPckNhdGVnb3J5IiwgImNvbG9uIiwgInNpbXBsZUxpbmtSZWdleCIsICJwaXBlZExpbmtSZWdleCIsICJjb21tZW50T3V0SW1hZ2UiLCAiaW1hZ2UiLCAiaW1hZ2VSZWdleFN0cmluZyIsICJsaW5rc1JlZ2V4IiwgImFsbExpbmtzIiwgIl9pdGVyYXRvcjAiLCAiX3N0ZXAwIiwgImFsbExpbmsiLCAiZ2FsbGVyeUltYWdlUmVnZXgiLCAiZnJlZUltYWdlUmVnZXgiLCAiYWRkVG9JbWFnZUNvbW1lbnQiLCAiX2l0ZXJhdG9yMSIsICJfc3RlcDEiLCAiZ2FsbGVyeVJlZ2V4IiwgIm5ld3RleHQiLCAicmVtb3ZlVGVtcGxhdGUiLCAidGVtcGxhdGUiLCAidGVtcGxhdGVSZWdleFN0cmluZyIsICJhbGxUZW1wbGF0ZXMiLCAiX2l0ZXJhdG9yMTAiLCAiX3N0ZXAxMCIsICJhbGxUZW1wbGF0ZSIsICJpbnNlcnRBZnRlclRlbXBsYXRlcyIsICJmbGFncyIsICJwcmVSZWdleCIsICJnZXRUZXh0IiwgInVzZXJzcGFjZUxvZ2dlciIsICJsb2dQYWdlTmFtZSIsICJpbml0aWFsVGV4dCIsICJoZWFkZXJMZXZlbCIsICJsb2dUZXh0IiwgInN1bW1hcnlUZXh0IiwgImRlZiIsICJyZWplY3QiLCAic3RhdCIsICJ0ZXh0UmF3IiwgImdlbmVyYXRlIiwgInVwZGF0ZSIsICJFbGVtZW50IiwgImhhc0NoaWxkTm9kZXMiLCAiZXJyb3JFdmVudCIsICJoYW5kbGVyIiwgInN0YXRSYXciLCAibGlua2VkIiwgInByaW50VXNlclRleHQiLCAiY29tbWVudHMiLCAibWVzc2FnZSIsICJwIiwgImRpdiIsICJtYXJnaW5Ub3AiLCAid2hpdGVTcGFjZSIsICJodG1sTm9kZSIsICJjb2xvciIsICJqUXVlcnlTZWxlY3RvciIsICJqUXVlcnlDb250ZXh0IiwgImxhc3RDaGVja2JveCIsICJjbGlja0hhbmRsZXIiLCAiY2xpY2tIYW5kbGVyMiIsICJ0aGlzQ2IiLCAic2hpZnRLZXkiLCAiY2JzIiwgImluZGV4IiwgImxhc3RJbmRleCIsICJlbmRTdGF0ZSIsICJmaW5pc2giLCAiY2xpY2siLCAib24iLCAiYmF0Y2hPcGVyYXRpb24iLCAicGFnZUxpc3QiLCAiY2h1bmtTaXplIiwgInByZXNlcnZlSW5kaXZpZHVhbFN0YXR1c0xpbmVzIiwgIndvcmtlciIsICJwb3N0RmluaXNoIiwgImNvdW50U3RhcnRlZCIsICJjb3VudEZpbmlzaGVkIiwgImNvdW50RmluaXNoZWRTdWNjZXNzIiwgImN1cnJlbnRDaHVua0luZGV4IiwgInBhZ2VDaHVua3MiLCAicnVubmluZyIsICJzZXRQYWdlTGlzdCIsICJzZXRPcHRpb24iLCAib3B0aW9uTmFtZSIsICJvcHRpb25WYWx1ZSIsICJydW4iLCAidG90YWwiLCAiZm5TdGFydE5ld0NodW5rIiwgIndvcmtlclN1Y2Nlc3MiLCAiYXJnIiwgImZuRG9uZU9uZSIsICJ3b3JrZXJGYWlsdXJlIiwgInRoaXNQcm94eSIsICJfaXRlcmF0b3IxMSIsICJfc3RlcDExIiwgInByb2dyZXNzIiwgInJvdW5kIiwgImZsb29yIiwgInN0YXR1c1N0cmluZyIsICJzaW1wbGVXaW5kb3ciLCAid2lkdGgiLCAiaGVpZ2h0IiwgImRpYWxvZyIsICJhdXRvT3BlbiIsICJidXR0b25zIiwgIlBsYWNlaG9sZGVyIGJ1dHRvbiIsICJkaWFsb2dDbGFzcyIsICJpbm5lcldpZHRoIiwgImNsb3NlIiwgInJlc2l6ZVN0YXJ0IiwgInNjcm9sbGJveCIsICJtYXhIZWlnaHQiLCAicmVzaXplU3RvcCIsICJyZXNpemUiLCAiJHdpZGdldCIsICJlYWNoIiwgImJ1dHRvbnNwYW4iLCAibGlua3NzcGFuIiwgInJlc2l6YWJsZSIsICJoYXNGb290ZXJMaW5rcyIsICJzY3JpcHROYW1lIiwgInByZXZlbnREZWZhdWx0IiwgImRpc3BsYXkiLCAic2NyaXB0bmFtZXNwYW4iLCAic2V0dXBUb29sdGlwcyIsICJwZyIsICJkaWZmIiwgInJhblNldHVwVG9vbHRpcHNBbHJlYWR5IiwgInNldEhlaWdodCIsICJzZXRUaXRsZSIsICJzZXRTY3JpcHROYW1lIiwgInNldFdpZHRoIiwgImdldENvbXB1dGVkU3R5bGUiLCAiaW5uZXJIZWlnaHQiLCAic2V0Q29udGVudCIsICJwdXJnZUNvbnRlbnQiLCAiYWRkQ29udGVudCIsICJidXR0b24iLCAiYWRkRm9vdGVyTGluayIsICJ3aWtpUGFnZSIsICJwcmVwIiwgIiRmb290ZXJsaW5rcyIsICJidWxsZXQiLCAic2V0TW9kYWxpdHkiLCAibW9kYWwiLCAic2V0QnV0dG9uc0VuYWJsZWQiLCAiZW5hYmxlZCIsICJqUXVlcnkiXQp9Cg==
