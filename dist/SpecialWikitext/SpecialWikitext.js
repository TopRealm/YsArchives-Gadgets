/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-SpecialWikitext.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/SpecialWikitext}
 * @license CC-BY-SA-4.0 {@link https://youshou.wiki/wiki/H:CC-BY-SA-4.0}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 *
 * Alert Mark (Orange)
 *
 * @base {@link https://www.qiuwenbaike.cn/wiki/File:Alert_Mark_%28Orange%29.svg}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/SpecialWikitext/images}
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

// dist/SpecialWikitext/SpecialWikitext.js
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
//! src/SpecialWikitext/SpecialWikitext.ts
var import_ext_gadget6 = require("ext.gadget.Util");
//! src/SpecialWikitext/components/SpecialWikitext.module.less
var previewLoadingContent = "SpecialWikitext-module__preview-loading__content_0PrDlG__4100";
var previewLoadingInner = "SpecialWikitext-module__preview-loading__inner_0PrDlG__4100";
//! src/SpecialWikitext/components/generateElements.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.JSX"), 1);
//! src/SpecialWikitext/images/Loading_icon.gif
var Loading_icon_default = "data:image/gif;base64,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";
//! src/SpecialWikitext/images/Alert.png
var Alert_default = "data:image/png;base64,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";
//! src/SpecialWikitext/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Failed: (0, import_ext_gadget.localize)({
      en: "Failed to load preview.",
      "zh-hans": "预览加载失败",
      "zh-hant": "預覽載入失败"
    }),
    Loading: (0, import_ext_gadget.localize)({
      en: "Loading preview...",
      "zh-hans": "预览加载中……",
      "zh-hant": "預覽載入中……"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/SpecialWikitext/components/generateElements.tsx
var Failed = () => /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, /* @__PURE__ */ import_ext_gadget2.default.createElement("img", {
  src: Alert_default,
  decoding: "async",
  width: "32",
  height: "32"
}), /* @__PURE__ */ import_ext_gadget2.default.createElement("span", null, " ", getMessage("Failed")));
var Loading = () => /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
  id: "specialwikitext-preview-loading"
}, /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
  className: ["quotebox", previewLoadingInner],
  id: "specialwikitext-preview-loading__inner"
}, /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
  className: previewLoadingContent,
  id: "specialwikitext-preview-loading__content"
}, /* @__PURE__ */ import_ext_gadget2.default.createElement("img", {
  src: Loading_icon_default,
  decoding: "async",
  width: "32",
  height: "32"
}), /* @__PURE__ */ import_ext_gadget2.default.createElement("span", null, " ", getMessage("Loading")))));
//! src/SpecialWikitext/modules/util/checkElementExist.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var checkElementExist = (selectors) => {
  const selectorArray = (0, import_ext_gadget3.generateArray)(selectors);
  var _iterator2 = _createForOfIteratorHelper(selectorArray), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      const selector = _step2.value;
      if (document.querySelector(selector)) {
        return true;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return false;
};
//! src/SpecialWikitext/modules/util/addParsedWikitext.ts
var addParsedWikitext = (parsedWikitext) => {
  const $body = $("body");
  const $parsedWikitext = $().html(parsedWikitext);
  if (checkElementExist("#specialwikitext-preview-loading")) {
    const $element = $body.find("#specialwikitext-preview-loading");
    $element.html(parsedWikitext);
    mw.hook("wikipage.content").fire($element);
  } else if (checkElementExist(".diff-currentversion-title")) {
    $body.find(".diff-currentversion-title").append($parsedWikitext);
  } else if (checkElementExist(".previewnote")) {
    $body.find(".previewnote").append($parsedWikitext);
  } else if (checkElementExist(".mw-undelete-revision")) {
    $body.find(".mw-undelete-revision").append($parsedWikitext);
  } else if (checkElementExist("#mw-content-text")) {
    $body.find("#mw-content-text").append($parsedWikitext);
  }
  mw.hook("wikipage.content").fire($parsedWikitext);
};
//! src/SpecialWikitext/modules/notice.ts
var noticeFailElement = Failed();
var noticeLoadingElement = Loading();
var replaceDOM = (selector, element) => {
  $(selector).html(element !== null && element !== void 0 ? element : "");
};
var addLoadingNotice = () => {
  addParsedWikitext(noticeLoadingElement);
};
var loadingFailNotice = () => {
  replaceDOM("#specialwikitext-preview-loading__content", noticeFailElement);
};
var removeLoadingNotice = () => {
  replaceDOM("#specialwikitext-preview-loading");
};
//! src/SpecialWikitext/options.json
var version = "2.0";
var wikiTextKey = "_addText";
//! src/SpecialWikitext/modules/lua/luaAddText.ts
var luaAddText = (inputString, newString, isEscape = false) => {
  if (newString) {
    if (inputString) {
      inputString += "\n";
    }
    if (isEscape) {
      const [escapeString] = JSON.parse("[".concat(JSON.stringify(
        // Lua不支持\u、\x转义字符
        newString.replace(/\\([ux])/gi, "$1")
      ).replace(/\\\\/g, "\\"), "]"));
      newString = escapeString;
    }
    inputString += newString;
  }
  return inputString;
};
//! src/SpecialWikitext/modules/lua/luaGetText.ts
var luaGetString = (inputString) => {
  const testStringExecArray = /[^\n]*\*\//.exec(inputString);
  let testString = inputString;
  if (testStringExecArray) {
    [testString] = testStringExecArray;
    testString = testString.slice(0, Math.max(0, testString.length - 2));
  }
  const trimCheck = testString.trim();
  const firstChar = trimCheck.charAt(0);
  if (firstChar === trimCheck.at(-1) && (firstChar === "'" || firstChar === '"')) {
    return trimCheck.slice(1, 1 + trimCheck.length - 2);
  }
  return testString.trim();
};
var luaGetContentText = (inputString) => {
  let wikitext = "";
  try {
    inputString.replace(new RegExp("".concat(wikiTextKey, "\\s*\\{[^c\\}]*content\\s*:\\s*[^\n]*"), "g"), (substring) => {
      const tempText = (/content\s*:\s*[^\n]*/.exec(substring) || ["content:"])[0].replace(/^[\s;}]+|[\s;}]+$/g, "").replace(/\s*content\s*:\s*/, "");
      if (wikitext) {
        wikitext += "\n";
      }
      wikitext += luaGetString(tempText);
      return substring;
    });
  } catch {
    return "";
  }
  return wikitext.trim();
};
var luaGetObjText = (inputString) => {
  let wikitext = "";
  try {
    inputString.replace(new RegExp("".concat(wikiTextKey, "\\s*[\\=:]\\s*[^\n]*"), "g"), (substring) => {
      const tempText = substring.replace(/^[\s;}]+|[\s;}]+$/g, "").replace(new RegExp("".concat(wikiTextKey, "\\s*[\\=:]\\s*")), "");
      if (wikitext) {
        wikitext += "\n";
      }
      wikitext += luaGetString(tempText);
      return substring;
    });
  } catch {
    return "";
  }
  return wikitext.trim();
};
var luaGetCSSwikitext = (inputString) => {
  var _ref, _document$querySelect;
  let wikitext = "";
  const cssText = (_ref = inputString || ((_document$querySelect = document.querySelector("textarea[name=wpTextbox1]")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.value)) !== null && _ref !== void 0 ? _ref : "";
  if (!cssText.trim()) {
    return "";
  }
  wikitext = luaAddText(wikitext, luaGetContentText(cssText), true);
  wikitext = luaAddText(wikitext, luaGetObjText(cssText), true);
  return wikitext.trim();
};
var luaGetJSONwikitext = (inputString) => {
  var _ref2, _document$querySelect2;
  let wikitext = "";
  const JSONText = (_ref2 = inputString || ((_document$querySelect2 = document.querySelector("textarea[name=wpTextbox1]")) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.value)) !== null && _ref2 !== void 0 ? _ref2 : "";
  if (!JSONText.trim()) {
    return "";
  }
  try {
    const jsonData = JSON.parse(JSONText);
    for (var _i = 0, _Object$entries = Object.entries(jsonData); _i < _Object$entries.length; _i++) {
      const [key, value] = _Object$entries[_i];
      if (new RegExp(wikiTextKey).test(key) && typeof value === "string") {
        wikitext = luaAddText(wikitext, value);
      }
      if (typeof value !== "string") {
        for (var _i2 = 0, _Object$entries2 = Object.entries(value); _i2 < _Object$entries2.length; _i2++) {
          const [k, v] = _Object$entries2[_i2];
          if (new RegExp(wikiTextKey).test(k) && typeof v === "string") {
            wikitext = luaAddText(wikitext, v);
          }
        }
      }
    }
  } catch {
    return "";
  }
  return wikitext.trim();
};
var luaGetJSwikitext = (inputString) => {
  var _ref3, _document$querySelect3;
  let wikitext = "";
  const jsText = (_ref3 = inputString || ((_document$querySelect3 = document.querySelector("textarea[name=wpTextbox1]")) === null || _document$querySelect3 === void 0 ? void 0 : _document$querySelect3.value)) !== null && _ref3 !== void 0 ? _ref3 : "";
  if (!jsText.trim()) {
    return "";
  }
  wikitext = luaAddText(wikitext, luaGetObjText(jsText), true);
  return wikitext.trim();
};
//! src/SpecialWikitext/modules/api.ts
var import_ext_gadget4 = require("ext.gadget.Util");
var api = (0, import_ext_gadget4.initMwApi)("SpecialWikitext/".concat(version));
//! src/SpecialWikitext/modules/util/getLanguage.ts
var {
  wgUserLanguage,
  wgUserVariant
} = mw.config.get();
var getLanguage = () => {
  const lang = wgUserLanguage;
  if (lang.includes("zh")) {
    return wgUserVariant;
  }
  return lang;
};
//! src/SpecialWikitext/modules/mw/mwAddText.ts
var {
  skin
} = mw.config.get();
var mwAddWikiText = /* @__PURE__ */ function() {
  var _ref4 = _asyncToGenerator(function* (wikitext, pageName, isPreview) {
    if (wikitext.trim()) {
      const params = {
        action: "parse",
        format: "json",
        formatversion: "2",
        // 避免内容重复
        title: pageName,
        contentmodel: "wikitext",
        text: wikitext,
        prop: "text",
        uselang: getLanguage(),
        useskin: skin
      };
      if (isPreview) {
        params.disableeditsection = true;
        params.preview = true;
      }
      try {
        var _data$parse;
        const data = yield api.get(params);
        if (!(data !== null && data !== void 0 && (_data$parse = data["parse"]) !== null && _data$parse !== void 0 && _data$parse.text)) {
          return;
        }
        const parsedWikitext = data["parse"].text.trim();
        if (parsedWikitext) {
          addParsedWikitext(parsedWikitext);
        } else {
          removeLoadingNotice();
        }
      } catch {
        loadingFailNotice();
      }
    } else {
      removeLoadingNotice();
    }
  });
  return function mwAddWikiText2(_x, _x2, _x3) {
    return _ref4.apply(this, arguments);
  };
}();
var mwAddLuaText = /* @__PURE__ */ function() {
  var _ref5 = _asyncToGenerator(function* (wikitext, pageName, isPreview, callBack) {
    const tempModuleName = "AddText/Temp/Module/Data.lua";
    const moduleCall = {
      wikitext: "#invoke:",
      // 分开来，避免被分到[[:Category:有脚本错误的页面]]
      pageName: "Module:"
    };
    if (wikitext.trim()) {
      try {
        var _data$parse2;
        const params = {
          action: "parse",
          format: "json",
          formatversion: "2",
          title: pageName,
          contentmodel: "wikitext",
          templatesandboxtitle: moduleCall.pageName + tempModuleName,
          // 创建临时Lua Module
          templatesandboxtext: "return {\n	main = function()\n		xpcall(\n			function()\n				".concat(wikitext, '\n			end,\n			function()\n			end\n		)\n		local moduleWikitext = package.loaded["Module:Module wikitext"]\n		if moduleWikitext then\n			local wikitext = moduleWikitext.main()\n			if mw.text.trim(wikitext) ~= "" then\n				return mw.getCurrentFrame():preprocess(moduleWikitext.main())\n			end\n		end\n		return ""\n	end\n}'),
          templatesandboxcontentmodel: "Scribunto",
          templatesandboxcontentformat: "text/plain",
          text: "{{".concat(moduleCall.wikitext).concat(tempModuleName, "|main}}"),
          prop: "text",
          uselang: getLanguage(),
          useskin: skin
        };
        if (isPreview) {
          params.preview = true;
          params.disableeditsection = true;
        }
        const data = yield api.get(params);
        if (!(data !== null && data !== void 0 && (_data$parse2 = data["parse"]) !== null && _data$parse2 !== void 0 && _data$parse2.text)) {
          return;
        }
        const parsedWikitext = data["parse"].text.trim();
        if (!parsedWikitext) {
          removeLoadingNotice();
        } else if ($(parsedWikitext).find(".scribunto-error").text().search(tempModuleName)) {
          removeLoadingNotice();
        } else if (typeof callBack === "function") {
          callBack(parsedWikitext);
        } else {
          addParsedWikitext(parsedWikitext);
        }
      } catch {
        loadingFailNotice();
      }
    } else {
      removeLoadingNotice();
    }
  });
  return function mwAddLuaText2(_x4, _x5, _x6, _x7) {
    return _ref5.apply(this, arguments);
  };
}();
//! src/SpecialWikitext/modules/lua/luaCheck.ts
var {
  wgPageContentModel
} = mw.config.get();
var luaCheck = (inputString = "", contentModel = wgPageContentModel) => {
  switch (contentModel.toLowerCase()) {
    case "json":
      return luaGetJSONwikitext(inputString);
    case "js":
    case "javascript":
    case "text":
      return luaGetJSwikitext(inputString);
    case "css":
    case "sanitized-css":
      return luaGetCSSwikitext(inputString);
    default:
      return "";
  }
};
//! src/SpecialWikitext/modules/mw/mwApply.ts
var {
  skin: skin2,
  wgRevisionId
} = mw.config.get();
var mwApplyNotice = /* @__PURE__ */ function() {
  var _ref6 = _asyncToGenerator(function* (currentPageName, pageSubName) {
    try {
      var _data$parse3;
      const params = {
        action: "parse",
        format: "json",
        formatversion: "2",
        // get the original wikitext content of a page
        title: currentPageName + pageSubName,
        text: "{{#invoke:Special wikitext/Template|getNotices|".concat(currentPageName, "|").concat(pageSubName, "}}"),
        prop: "text",
        uselang: getLanguage(),
        useskin: skin2,
        smaxage: 600,
        maxage: 600
      };
      const data = yield api.get(params);
      if (!(data !== null && data !== void 0 && (_data$parse3 = data["parse"]) !== null && _data$parse3 !== void 0 && _data$parse3.text)) {
        return;
      }
      const html = data["parse"].text;
      if ($(html).text().trim()) {
        addParsedWikitext(html);
      }
    } catch {
    }
  });
  return function mwApplyNotice2(_x8, _x9) {
    return _ref6.apply(this, arguments);
  };
}();
var mwApplyRevision = /* @__PURE__ */ function() {
  var _ref7 = _asyncToGenerator(function* (currentPageName) {
    try {
      var _data$parse4;
      const params = {
        action: "parse",
        format: "json",
        formatversion: "2",
        // get the original wikitext content of a page
        oldid: wgRevisionId,
        prop: "wikitext",
        smaxage: 600,
        maxage: 600
      };
      const data = yield api.get(params);
      if (!(data !== null && data !== void 0 && (_data$parse4 = data["parse"]) !== null && _data$parse4 !== void 0 && _data$parse4.wikitext)) {
        return;
      }
      let pageContent = luaCheck(data["parse"].wikitext.trim());
      pageContent = (checkElementExist("#mw-clearyourcache") ? "{{#invoke:Special wikitext/Template|int|clearyourcache}}" : "") + pageContent;
      if (pageContent.trim()) {
        void mwAddWikiText(pageContent, currentPageName, true);
      } else {
        removeLoadingNotice();
      }
    } catch {
      removeLoadingNotice();
    }
  });
  return function mwApplyRevision2(_x10) {
    return _ref7.apply(this, arguments);
  };
}();
//! src/SpecialWikitext/modules/util/checkMwConfig.ts
var import_ext_gadget5 = require("ext.gadget.Util");
var allMwConfig = mw.config.get();
var checkMwConfig = (configKey, expectConfig) => {
  let mwConfig = allMwConfig[configKey];
  if (!mwConfig) {
    return false;
  }
  mwConfig = String(mwConfig).toLowerCase().trim();
  if (!mwConfig) {
    return false;
  }
  return (0, import_ext_gadget5.generateArray)(expectConfig).includes(mwConfig);
};
//! src/SpecialWikitext/modules/util/checkNeedPreview.ts
var checkNeedPreview = () => {
  return document.body.innerHTML.search(wikiTextKey) > -1;
};
//! src/SpecialWikitext/modules/mw/mwAddPreview.ts
var {
  wgCanonicalNamespace,
  wgCanonicalSpecialPageName,
  wgPageName
} = mw.config.get();
var mwAddPreview = ($body) => {
  if (checkMwConfig("wgPageContentModel", ["javascript", "js", "json", "text", "css", "sanitized-css"])) {
    if (checkElementExist(".previewnote")) {
      var _mw$util$getUrl$match, _mw$util$getUrl$match2;
      const pathPath = decodeURI(mw.util.getUrl(wgPageName)).replace(new RegExp("^\\/?".concat((_mw$util$getUrl$match = (_mw$util$getUrl$match2 = mw.util.getUrl("").match(/[a-z]+/)) === null || _mw$util$getUrl$match2 === void 0 ? void 0 : _mw$util$getUrl$match2[0]) !== null && _mw$util$getUrl$match !== void 0 ? _mw$util$getUrl$match : "", "\\/")), "");
      if (pathPath !== wgPageName) {
        return;
      }
      const wikitext = luaCheck();
      if (wikitext) {
        addLoadingNotice();
        void mwAddWikiText(wikitext, wgPageName, true);
      }
    } else if (!checkElementExist(".mw-_addText-content") && checkMwConfig("wgAction", "view")) {
      if (!checkNeedPreview()) {
        return;
      }
      $body.find("#mw-clearyourcache").html("");
      if (!checkElementExist("textarea[name=wpTextbox1]")) {
        addLoadingNotice();
        void mwApplyRevision(wgPageName);
      }
    } else if (checkElementExist("#mw-revision-info") && checkMwConfig("wgAction", "view")) {
      if (!checkElementExist("textarea[name=wpTextbox1]")) {
        $body.find("#mw-clearyourcache").html(noticeLoadingElement);
        void mwApplyRevision(wgPageName);
      }
    } else {
      removeLoadingNotice();
    }
  } else if (checkMwConfig("wgPageContentModel", ["scribunto", "lua"])) {
    if (!checkNeedPreview()) {
      return;
    }
    if (checkElementExist("textarea[name=wpTextbox1]") && checkElementExist("table.diff") && !checkElementExist(".previewnote") && !checkMwConfig("wgAction", "view")) {
      var _$body$find$val;
      $(noticeLoadingElement).insertAfter("#wikiDiff");
      void mwAddLuaText((_$body$find$val = $body.find("textarea[name=wpTextbox1]").val()) !== null && _$body$find$val !== void 0 ? _$body$find$val : "", wgPageName, true);
    }
  } else if (checkElementExist(".mw-undelete-revision")) {
    if (!checkNeedPreview()) {
      return;
    }
    if (checkElementExist([".mw-highlight", "pre", ".mw-json"])) {
      var _$body$find$val2;
      const textareaContent = (_$body$find$val2 = $body.find("textarea").val()) !== null && _$body$find$val2 !== void 0 ? _$body$find$val2 : "";
      let wikitext = luaGetJSONwikitext(textareaContent);
      wikitext || (wikitext = luaGetCSSwikitext(textareaContent));
      if (wikitext) {
        addLoadingNotice();
        void mwAddWikiText(wikitext, mw.config.get("wgRelevantPageName"), true);
      } else if (/module[ _]wikitext.*_addtext/i.test($body.find(".mw-parser-output").text())) {
      }
    }
  } else if (!checkElementExist(".mw-editnotice") && checkMwConfig("wgCanonicalNamespace", "special")) {
    const pageSubName = wgPageName.replace(/special:[^/]+/i, "");
    if (wgCanonicalSpecialPageName) {
      const fullPageName = "".concat(wgCanonicalNamespace, ":").concat(wgCanonicalSpecialPageName);
      void mwApplyNotice(fullPageName, pageSubName);
    }
  } else {
    removeLoadingNotice();
  }
};
//! src/SpecialWikitext/modules/wikitextPreviewTestcase.ts
var {
  wgPageName: wgPageName2
} = mw.config.get();
var wikitextPreviewTestcase = /* @__PURE__ */ function() {
  var _ref8 = _asyncToGenerator(function* (isPreview) {
    if (!checkNeedPreview()) {
      return;
    }
    const testcaseList = document.querySelectorAll(".special-wikitext-preview-testcase");
    if (!testcaseList.length) {
      return;
    }
    const testcaseDataList = [];
    let i = 0;
    for (i = 0; i < testcaseList.length; ++i) {
      var _exec, _codeId$toLowerCase, _codeElement$textCont, _codeElement$textCont2;
      const element = testcaseList[i];
      if (!element) {
        continue;
      }
      const codeElement = element.querySelector(".mw-highlight");
      if (!codeElement) {
        continue;
      }
      const {
        className
      } = codeElement;
      if (!className) {
        continue;
      }
      const [, codeId] = (_exec = /mw-highlight-lang-(\S+)/.exec(className)) !== null && _exec !== void 0 ? _exec : [];
      const {
        length
      } = testcaseDataList;
      element.setAttribute("preview-id", length.toString());
      testcaseDataList[length] = {
        element,
        lang: (_codeId$toLowerCase = codeId === null || codeId === void 0 ? void 0 : codeId.toLowerCase()) !== null && _codeId$toLowerCase !== void 0 ? _codeId$toLowerCase : "",
        code: (_codeElement$textCont = (_codeElement$textCont2 = codeElement.textContent) === null || _codeElement$textCont2 === void 0 ? void 0 : _codeElement$textCont2.trim()) !== null && _codeElement$textCont !== void 0 ? _codeElement$textCont : ""
      };
    }
    let packageWikitext = "";
    for (var _i3 = 0, _Object$values = Object.values(testcaseDataList); _i3 < _Object$values.length; _i3++) {
      const testcaseItem = _Object$values[_i3];
      const {
        code,
        element,
        lang
      } = testcaseItem;
      if (!code) {
        continue;
      }
      const $element = $(element);
      if (["javascript", "js", "css", "json", "text"].includes(testcaseItem.lang)) {
        const wikitext = luaCheck(code, lang);
        if (wikitext) {
          $element.prepend(noticeLoadingElement);
          packageWikitext += '<div class="special-wikitext-preview-testcase-'.concat(i, '">\n').concat(wikitext, "\n</div>");
        }
      } else if (["lua", "scribunto"].includes(lang)) {
        void mwAddLuaText(code, wgPageName2, isPreview, /* @__PURE__ */ (() => {
          return (wikitext) => {
            $element.prepend(wikitext);
          };
        })());
      }
    }
    if (packageWikitext) {
      packageWikitext = '<div class="special-wikitext-preview-testcase-undefined">'.concat(packageWikitext, "</div>");
      try {
        var _data$parse5;
        const params = {
          action: "parse",
          format: "json",
          formatversion: "2",
          text: packageWikitext,
          contentmodel: "wikitext",
          prop: "text"
        };
        if (isPreview) {
          params.disableeditsection = true;
          params.preview = true;
        }
        const data = yield api.get(params);
        if (!(data !== null && data !== void 0 && (_data$parse5 = data["parse"]) !== null && _data$parse5 !== void 0 && _data$parse5.text)) {
          return;
        }
        const parsedWikitext = data["parse"].text.trim();
        if (parsedWikitext) {
          const $parsedElement = $(parsedWikitext);
          for (var _i4 = 0, _Object$entries3 = Object.entries(testcaseDataList); _i4 < _Object$entries3.length; _i4++) {
            const [key, testcaseItem] = _Object$entries3[_i4];
            const {
              element,
              lang
            } = testcaseItem;
            if (!["javascript", "js", "text", "css", "json"].includes(lang)) {
              continue;
            }
            const $element = $parsedElement.find(".special-wikitext-preview-testcase-undefined > .special-wikitext-preview-testcase-".concat(key));
            if (!$element.length) {
              continue;
            }
            const $addTarget = $(element).find("#specialwikitext-preview-loading");
            $addTarget.html($element.html());
            mw.hook("wikipage.content").fire($addTarget);
          }
        }
      } catch {
      }
    }
  });
  return function wikitextPreviewTestcase2(_x11) {
    return _ref8.apply(this, arguments);
  };
}();
//! src/SpecialWikitext/SpecialWikitext.ts
void (0, import_ext_gadget6.getBody)().then(function specialWikitext($body) {
  mwAddPreview($body);
  void wikitextPreviewTestcase(true);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwtdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi1yYXcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmRleGVkLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1jYWxsYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1idWlsdC1pbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnZpcm9ubWVudC11c2VyLWFnZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYW4taW5zdGFuY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3JyZWN0LXByb3RvdHlwZS1nZXR0ZXIuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbi1hY2Nlc3Nvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaHRtbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1jcmVhdGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMtY29yZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5pdGVyYXRvci5jb25zdHJ1Y3Rvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy1jbGF1c2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1hcnJheS1pdGVyYXRvci1tZXRob2QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jbGFzc29mLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1pdGVyYXRvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1pdGVyYXRvci1kaXJlY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuaXRlcmF0b3IuZmluZC5qcyIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L1NwZWNpYWxXaWtpdGV4dC50cyIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L2NvbXBvbmVudHMvU3BlY2lhbFdpa2l0ZXh0Lm1vZHVsZS5sZXNzIiwgInNyYy9TcGVjaWFsV2lraXRleHQvY29tcG9uZW50cy9nZW5lcmF0ZUVsZW1lbnRzLnRzeCIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L21vZHVsZXMvaTE4bi50cyIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L21vZHVsZXMvdXRpbC9jaGVja0VsZW1lbnRFeGlzdC50cyIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L21vZHVsZXMvdXRpbC9hZGRQYXJzZWRXaWtpdGV4dC50cyIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L21vZHVsZXMvbm90aWNlLnRzIiwgInNyYy9TcGVjaWFsV2lraXRleHQvb3B0aW9ucy5qc29uIiwgInNyYy9TcGVjaWFsV2lraXRleHQvbW9kdWxlcy9sdWEvbHVhQWRkVGV4dC50cyIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L21vZHVsZXMvbHVhL2x1YUdldFRleHQudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL2FwaS50cyIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L21vZHVsZXMvdXRpbC9nZXRMYW5ndWFnZS50cyIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L21vZHVsZXMvbXcvbXdBZGRUZXh0LnRzIiwgInNyYy9TcGVjaWFsV2lraXRleHQvbW9kdWxlcy9sdWEvbHVhQ2hlY2sudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL213L213QXBwbHkudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL3V0aWwvY2hlY2tNd0NvbmZpZy50cyIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L21vZHVsZXMvdXRpbC9jaGVja05lZWRQcmV2aWV3LnRzIiwgInNyYy9TcGVjaWFsV2lraXRleHQvbW9kdWxlcy9tdy9td0FkZFByZXZpZXcudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL3dpa2l0ZXh0UHJldmlld1Rlc3RjYXNlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIndXNlIHN0cmljdCc7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT09IE1hdGggJiYgaXQ7XG59O1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxubW9kdWxlLmV4cG9ydHMgPVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZ2xvYmFsLXRoaXMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2YgZ2xvYmFsVGhpcyA9PSAnb2JqZWN0JyAmJiBnbG9iYWxUaGlzKSB8fFxuICBjaGVjayh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYpIHx8XG4gIGNoZWNrKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsKSB8fFxuICBjaGVjayh0eXBlb2YgdGhpcyA9PSAnb2JqZWN0JyAmJiB0aGlzKSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmMgLS0gZmFsbGJhY2tcbiAgKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pKCkgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBEZXRlY3QgSUU4J3MgaW5jb21wbGV0ZSBkZWZpbmVQcm9wZXJ0eSBpbXBsZW1lbnRhdGlvblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIDEsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pWzFdICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbiAgdmFyIHRlc3QgPSAoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KS5iaW5kKCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gdHlwZW9mIHRlc3QgIT0gJ2Z1bmN0aW9uJyB8fCB0ZXN0Lmhhc093blByb3BlcnR5KCdwcm90b3R5cGUnKTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgY2FsbCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX0JJTkQgPyBjYWxsLmJpbmQoY2FsbCkgOiBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBjYWxsLmFwcGx5KGNhbGwsIGFyZ3VtZW50cyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBOYXNob3JuIH4gSkRLOCBidWdcbnZhciBOQVNIT1JOX0JVRyA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvciAmJiAhJHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoeyAxOiAyIH0sIDEpO1xuXG4vLyBgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZWAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5wcm90b3R5cGUucHJvcGVydHlpc2VudW1lcmFibGVcbmV4cG9ydHMuZiA9IE5BU0hPUk5fQlVHID8gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoVikge1xuICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLCBWKTtcbiAgcmV0dXJuICEhZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLmVudW1lcmFibGU7XG59IDogJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBjYWxsID0gRnVuY3Rpb25Qcm90b3R5cGUuY2FsbDtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1mdW5jdGlvbi1wcm90b3R5cGUtYmluZCAtLSBzYWZlXG52YXIgdW5jdXJyeVRoaXNXaXRoQmluZCA9IE5BVElWRV9CSU5EICYmIEZ1bmN0aW9uUHJvdG90eXBlLmJpbmQuYmluZChjYWxsLCBjYWxsKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IHVuY3VycnlUaGlzV2l0aEJpbmQgOiBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2FsbC5hcHBseShmbiwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyh7fS50b1N0cmluZyk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBzdHJpbmdTbGljZSh0b1N0cmluZyhpdCksIDgsIC0xKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcbnZhciBzcGxpdCA9IHVuY3VycnlUaGlzKCcnLnNwbGl0KTtcblxuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3Ncbm1vZHVsZS5leHBvcnRzID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyB0aHJvd3MgYW4gZXJyb3IgaW4gcmhpbm8sIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9yaGluby9pc3N1ZXMvMzQ2XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gISRPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcbn0pID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjbGFzc29mKGl0KSA9PT0gJ1N0cmluZycgPyBzcGxpdChpdCwgJycpIDogJE9iamVjdChpdCk7XG59IDogJE9iamVjdDtcbiIsICIndXNlIHN0cmljdCc7XG4vLyB3ZSBjYW4ndCB1c2UganVzdCBgaXQgPT0gbnVsbGAgc2luY2Ugb2YgYGRvY3VtZW50LmFsbGAgc3BlY2lhbCBjYXNlXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90LWFlY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSBudWxsIHx8IGl0ID09PSB1bmRlZmluZWQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoaXQpKSB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdFxudmFyIGRvY3VtZW50QWxsID0gdHlwZW9mIGRvY3VtZW50ID09ICdvYmplY3QnICYmIGRvY3VtZW50LmFsbDtcblxuLy8gYElzQ2FsbGFibGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2NhbGxhYmxlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby10eXBlb2YtdW5kZWZpbmVkIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBkb2N1bWVudEFsbCA9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudEFsbCAhPT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJyB8fCBhcmd1bWVudCA9PT0gZG9jdW1lbnRBbGw7XG59IDogZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogaXNDYWxsYWJsZShpdCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgYUZ1bmN0aW9uID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKGFyZ3VtZW50KSA/IGFyZ3VtZW50IDogdW5kZWZpbmVkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZXNwYWNlLCBtZXRob2QpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gYUZ1bmN0aW9uKGdsb2JhbFRoaXNbbmFtZXNwYWNlXSkgOiBnbG9iYWxUaGlzW25hbWVzcGFjZV0gJiYgZ2xvYmFsVGhpc1tuYW1lc3BhY2VdW21ldGhvZF07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1bmN1cnJ5VGhpcyh7fS5pc1Byb3RvdHlwZU9mKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xuXG52YXIgbmF2aWdhdG9yID0gZ2xvYmFsVGhpcy5uYXZpZ2F0b3I7XG52YXIgdXNlckFnZW50ID0gbmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cbm1vZHVsZS5leHBvcnRzID0gdXNlckFnZW50ID8gU3RyaW5nKHVzZXJBZ2VudCkgOiAnJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnZpcm9ubWVudC11c2VyLWFnZW50Jyk7XG5cbnZhciBwcm9jZXNzID0gZ2xvYmFsVGhpcy5wcm9jZXNzO1xudmFyIERlbm8gPSBnbG9iYWxUaGlzLkRlbm87XG52YXIgdmVyc2lvbnMgPSBwcm9jZXNzICYmIHByb2Nlc3MudmVyc2lvbnMgfHwgRGVubyAmJiBEZW5vLnZlcnNpb247XG52YXIgdjggPSB2ZXJzaW9ucyAmJiB2ZXJzaW9ucy52ODtcbnZhciBtYXRjaCwgdmVyc2lvbjtcblxuaWYgKHY4KSB7XG4gIG1hdGNoID0gdjguc3BsaXQoJy4nKTtcbiAgLy8gaW4gb2xkIENocm9tZSwgdmVyc2lvbnMgb2YgVjggaXNuJ3QgVjggPSBDaHJvbWUgLyAxMFxuICAvLyBidXQgdGhlaXIgY29ycmVjdCB2ZXJzaW9ucyBhcmUgbm90IGludGVyZXN0aW5nIGZvciB1c1xuICB2ZXJzaW9uID0gbWF0Y2hbMF0gPiAwICYmIG1hdGNoWzBdIDwgNCA/IDEgOiArKG1hdGNoWzBdICsgbWF0Y2hbMV0pO1xufVxuXG4vLyBCcm93c2VyRlMgTm9kZUpTIGBwcm9jZXNzYCBwb2x5ZmlsbCBpbmNvcnJlY3RseSBzZXQgYC52OGAgdG8gYDAuMGBcbi8vIHNvIGNoZWNrIGB1c2VyQWdlbnRgIGV2ZW4gaWYgYC52OGAgZXhpc3RzLCBidXQgMFxuaWYgKCF2ZXJzaW9uICYmIHVzZXJBZ2VudCkge1xuICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvRWRnZVxcLyhcXGQrKS8pO1xuICBpZiAoIW1hdGNoIHx8IG1hdGNoWzFdID49IDc0KSB7XG4gICAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0Nocm9tZVxcLyhcXGQrKS8pO1xuICAgIGlmIChtYXRjaCkgdmVyc2lvbiA9ICttYXRjaFsxXTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZlcnNpb247XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnZpcm9ubWVudC12OC12ZXJzaW9uJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG5cbnZhciAkU3RyaW5nID0gZ2xvYmFsVGhpcy5TdHJpbmc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlzeW1ib2xzIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9ICEhT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgc3ltYm9sID0gU3ltYm9sKCdzeW1ib2wgZGV0ZWN0aW9uJyk7XG4gIC8vIENocm9tZSAzOCBTeW1ib2wgaGFzIGluY29ycmVjdCB0b1N0cmluZyBjb252ZXJzaW9uXG4gIC8vIGBnZXQtb3duLXByb3BlcnR5LXN5bWJvbHNgIHBvbHlmaWxsIHN5bWJvbHMgY29udmVydGVkIHRvIG9iamVjdCBhcmUgbm90IFN5bWJvbCBpbnN0YW5jZXNcbiAgLy8gbmI6IERvIG5vdCBjYWxsIGBTdHJpbmdgIGRpcmVjdGx5IHRvIGF2b2lkIHRoaXMgYmVpbmcgb3B0aW1pemVkIG91dCB0byBgc3ltYm9sKycnYCB3aGljaCB3aWxsLFxuICAvLyBvZiBjb3Vyc2UsIGZhaWwuXG4gIHJldHVybiAhJFN0cmluZyhzeW1ib2wpIHx8ICEoT2JqZWN0KHN5bWJvbCkgaW5zdGFuY2VvZiBTeW1ib2wpIHx8XG4gICAgLy8gQ2hyb21lIDM4LTQwIHN5bWJvbHMgYXJlIG5vdCBpbmhlcml0ZWQgZnJvbSBET00gY29sbGVjdGlvbnMgcHJvdG90eXBlcyB0byBpbnN0YW5jZXNcbiAgICAhU3ltYm9sLnNoYW0gJiYgVjhfVkVSU0lPTiAmJiBWOF9WRVJTSU9OIDwgNDE7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1zeW1ib2wgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfU1lNQk9MICYmXG4gICFTeW1ib2wuc2hhbSAmJlxuICB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc1Byb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YnKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxubW9kdWxlLmV4cG9ydHMgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgJFN5bWJvbCA9IGdldEJ1aWx0SW4oJ1N5bWJvbCcpO1xuICByZXR1cm4gaXNDYWxsYWJsZSgkU3ltYm9sKSAmJiBpc1Byb3RvdHlwZU9mKCRTeW1ib2wucHJvdG90eXBlLCAkT2JqZWN0KGl0KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB0cnkge1xuICAgIHJldHVybiAkU3RyaW5nKGFyZ3VtZW50KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gJ09iamVjdCc7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciB0cnlUb1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90cnktdG8tc3RyaW5nJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBJc0NhbGxhYmxlKGFyZ3VtZW50KSBpcyB0cnVlYFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGlzQ2FsbGFibGUoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKHRyeVRvU3RyaW5nKGFyZ3VtZW50KSArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcblxuLy8gYEdldE1ldGhvZGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWdldG1ldGhvZFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoViwgUCkge1xuICB2YXIgZnVuYyA9IFZbUF07XG4gIHJldHVybiBpc051bGxPclVuZGVmaW5lZChmdW5jKSA/IHVuZGVmaW5lZCA6IGFDYWxsYWJsZShmdW5jKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBPcmRpbmFyeVRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb3JkaW5hcnl0b3ByaW1pdGl2ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5wdXQsIHByZWYpIHtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChwcmVmID09PSAnc3RyaW5nJyAmJiBpc0NhbGxhYmxlKGZuID0gaW5wdXQudG9TdHJpbmcpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAoaXNDYWxsYWJsZShmbiA9IGlucHV0LnZhbHVlT2YpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAocHJlZiAhPT0gJ3N0cmluZycgJiYgaXNDYWxsYWJsZShmbiA9IGlucHV0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgdHJ5IHtcbiAgICBkZWZpbmVQcm9wZXJ0eShnbG9iYWxUaGlzLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdsb2JhbFRoaXNba2V5XSA9IHZhbHVlO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG5cbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IG1vZHVsZS5leHBvcnRzID0gZ2xvYmFsVGhpc1tTSEFSRURdIHx8IGRlZmluZUdsb2JhbFByb3BlcnR5KFNIQVJFRCwge30pO1xuXG4oc3RvcmUudmVyc2lvbnMgfHwgKHN0b3JlLnZlcnNpb25zID0gW10pKS5wdXNoKHtcbiAgdmVyc2lvbjogJzMuNDEuMCcsXG4gIG1vZGU6IElTX1BVUkUgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxNC0yMDI1IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJyxcbiAgbGljZW5zZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2Jsb2IvdjMuNDEuMC9MSUNFTlNFJyxcbiAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMnXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSB8fCB7fSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxuLy8gYFRvT2JqZWN0YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9vYmplY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiAkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSB1bmN1cnJ5VGhpcyh7fS5oYXNPd25Qcm9wZXJ0eSk7XG5cbi8vIGBIYXNPd25Qcm9wZXJ0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWhhc293bnByb3BlcnR5XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWhhc293biAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5oYXNPd24gfHwgZnVuY3Rpb24gaGFzT3duKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5KHRvT2JqZWN0KGl0KSwga2V5KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgaWQgPSAwO1xudmFyIHBvc3RmaXggPSBNYXRoLnJhbmRvbSgpO1xudmFyIHRvU3RyaW5nID0gdW5jdXJyeVRoaXMoMS4wLnRvU3RyaW5nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcgKyAoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSkgKyAnKV8nICsgdG9TdHJpbmcoKytpZCArIHBvc3RmaXgsIDM2KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyIFN5bWJvbCA9IGdsb2JhbFRoaXMuU3ltYm9sO1xudmFyIFdlbGxLbm93blN5bWJvbHNTdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG52YXIgY3JlYXRlV2VsbEtub3duU3ltYm9sID0gVVNFX1NZTUJPTF9BU19VSUQgPyBTeW1ib2xbJ2ZvciddIHx8IFN5bWJvbCA6IFN5bWJvbCAmJiBTeW1ib2wud2l0aG91dFNldHRlciB8fCB1aWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgaWYgKCFoYXNPd24oV2VsbEtub3duU3ltYm9sc1N0b3JlLCBuYW1lKSkge1xuICAgIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IE5BVElWRV9TWU1CT0wgJiYgaGFzT3duKFN5bWJvbCwgbmFtZSlcbiAgICAgID8gU3ltYm9sW25hbWVdXG4gICAgICA6IGNyZWF0ZVdlbGxLbm93blN5bWJvbCgnU3ltYm9sLicgKyBuYW1lKTtcbiAgfSByZXR1cm4gV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciBvcmRpbmFyeVRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBUT19QUklNSVRJVkUgPSB3ZWxsS25vd25TeW1ib2woJ3RvUHJpbWl0aXZlJyk7XG5cbi8vIGBUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICBpZiAoIWlzT2JqZWN0KGlucHV0KSB8fCBpc1N5bWJvbChpbnB1dCkpIHJldHVybiBpbnB1dDtcbiAgdmFyIGV4b3RpY1RvUHJpbSA9IGdldE1ldGhvZChpbnB1dCwgVE9fUFJJTUlUSVZFKTtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKGV4b3RpY1RvUHJpbSkge1xuICAgIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnZGVmYXVsdCc7XG4gICAgcmVzdWx0ID0gY2FsbChleG90aWNUb1ByaW0sIGlucHV0LCBwcmVmKTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlc3VsdCkgfHwgaXNTeW1ib2wocmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbiAgfVxuICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ251bWJlcic7XG4gIHJldHVybiBvcmRpbmFyeVRvUHJpbWl0aXZlKGlucHV0LCBwcmVmKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xuXG4vLyBgVG9Qcm9wZXJ0eUtleWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJvcGVydHlrZXlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmd1bWVudCwgJ3N0cmluZycpO1xuICByZXR1cm4gaXNTeW1ib2woa2V5KSA/IGtleSA6IGtleSArICcnO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgZG9jdW1lbnQgPSBnbG9iYWxUaGlzLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgRVhJU1RTID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gRVhJU1RTID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG5cbi8vIFRoYW5rcyB0byBJRTggZm9yIGl0cyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGNyZWF0ZUVsZW1lbnQoJ2RpdicpLCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH1cbiAgfSkuYSAhPT0gNztcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlJyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXknKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yXG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JbmRleGVkT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXNPd24oTywgUCkpIHJldHVybiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoIWNhbGwocHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZiwgTywgUCksIE9bUF0pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBWOCB+IENocm9tZSAzNi1cbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMzMzRcbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAncHJvdG90eXBlJywge1xuICAgIHZhbHVlOiA0MixcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSkucHJvdG90eXBlICE9PSA0Mjtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyICRTdHJpbmcgPSBTdHJpbmc7XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogVHlwZShhcmd1bWVudCkgaXMgT2JqZWN0YFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGlzT2JqZWN0KGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcigkU3RyaW5nKGFyZ3VtZW50KSArICcgaXMgbm90IGFuIG9iamVjdCcpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xudmFyIFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Y4LXByb3RvdHlwZS1kZWZpbmUtYnVnJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXknKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciAkZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgRU5VTUVSQUJMRSA9ICdlbnVtZXJhYmxlJztcbnZhciBDT05GSUdVUkFCTEUgPSAnY29uZmlndXJhYmxlJztcbnZhciBXUklUQUJMRSA9ICd3cml0YWJsZSc7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydHlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydHlcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmICh0eXBlb2YgTyA9PT0gJ2Z1bmN0aW9uJyAmJiBQID09PSAncHJvdG90eXBlJyAmJiAndmFsdWUnIGluIEF0dHJpYnV0ZXMgJiYgV1JJVEFCTEUgaW4gQXR0cmlidXRlcyAmJiAhQXR0cmlidXRlc1tXUklUQUJMRV0pIHtcbiAgICB2YXIgY3VycmVudCA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gICAgaWYgKGN1cnJlbnQgJiYgY3VycmVudFtXUklUQUJMRV0pIHtcbiAgICAgIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICAgICAgQXR0cmlidXRlcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiBDT05GSUdVUkFCTEUgaW4gQXR0cmlidXRlcyA/IEF0dHJpYnV0ZXNbQ09ORklHVVJBQkxFXSA6IGN1cnJlbnRbQ09ORklHVVJBQkxFXSxcbiAgICAgICAgZW51bWVyYWJsZTogRU5VTUVSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tFTlVNRVJBQkxFXSA6IGN1cnJlbnRbRU5VTUVSQUJMRV0sXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgICAgfTtcbiAgICB9XG4gIH0gcmV0dXJuICRkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbn0gOiAkZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IG5ldyAkVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCcpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBrZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldERlc2NyaXB0b3IgPSBERVNDUklQVE9SUyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG52YXIgRVhJU1RTID0gaGFzT3duKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpO1xuLy8gYWRkaXRpb25hbCBwcm90ZWN0aW9uIGZyb20gbWluaWZpZWQgLyBtYW5nbGVkIC8gZHJvcHBlZCBmdW5jdGlvbiBuYW1lc1xudmFyIFBST1BFUiA9IEVYSVNUUyAmJiAoZnVuY3Rpb24gc29tZXRoaW5nKCkgeyAvKiBlbXB0eSAqLyB9KS5uYW1lID09PSAnc29tZXRoaW5nJztcbnZhciBDT05GSUdVUkFCTEUgPSBFWElTVFMgJiYgKCFERVNDUklQVE9SUyB8fCAoREVTQ1JJUFRPUlMgJiYgZ2V0RGVzY3JpcHRvcihGdW5jdGlvblByb3RvdHlwZSwgJ25hbWUnKS5jb25maWd1cmFibGUpKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEVYSVNUUzogRVhJU1RTLFxuICBQUk9QRVI6IFBST1BFUixcbiAgQ09ORklHVVJBQkxFOiBDT05GSUdVUkFCTEVcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxudmFyIGZ1bmN0aW9uVG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyhGdW5jdGlvbi50b1N0cmluZyk7XG5cbi8vIHRoaXMgaGVscGVyIGJyb2tlbiBpbiBgY29yZS1qc0AzLjQuMS0zLjQuNGAsIHNvIHdlIGNhbid0IHVzZSBgc2hhcmVkYCBoZWxwZXJcbmlmICghaXNDYWxsYWJsZShzdG9yZS5pbnNwZWN0U291cmNlKSkge1xuICBzdG9yZS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uVG9TdHJpbmcoaXQpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0b3JlLmluc3BlY3RTb3VyY2U7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciBXZWFrTWFwID0gZ2xvYmFsVGhpcy5XZWFrTWFwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQ2FsbGFibGUoV2Vha01hcCkgJiYgL25hdGl2ZSBjb2RlLy50ZXN0KFN0cmluZyhXZWFrTWFwKSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG5cbnZhciBrZXlzID0gc2hhcmVkKCdrZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4ga2V5c1trZXldIHx8IChrZXlzW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9XRUFLX01BUCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24nKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQgPSAnT2JqZWN0IGFscmVhZHkgaW5pdGlhbGl6ZWQnO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbFRoaXMuVHlwZUVycm9yO1xudmFyIFdlYWtNYXAgPSBnbG9iYWxUaGlzLldlYWtNYXA7XG52YXIgc2V0LCBnZXQsIGhhcztcblxudmFyIGVuZm9yY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGhhcyhpdCkgPyBnZXQoaXQpIDogc2V0KGl0LCB7fSk7XG59O1xuXG52YXIgZ2V0dGVyRm9yID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBzdGF0ZTtcbiAgICBpZiAoIWlzT2JqZWN0KGl0KSB8fCAoc3RhdGUgPSBnZXQoaXQpKS50eXBlICE9PSBUWVBFKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbmNvbXBhdGlibGUgcmVjZWl2ZXIsICcgKyBUWVBFICsgJyByZXF1aXJlZCcpO1xuICAgIH0gcmV0dXJuIHN0YXRlO1xuICB9O1xufTtcblxuaWYgKE5BVElWRV9XRUFLX01BUCB8fCBzaGFyZWQuc3RhdGUpIHtcbiAgdmFyIHN0b3JlID0gc2hhcmVkLnN0YXRlIHx8IChzaGFyZWQuc3RhdGUgPSBuZXcgV2Vha01hcCgpKTtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tc2VsZi1hc3NpZ24gLS0gcHJvdG90eXBlIG1ldGhvZHMgcHJvdGVjdGlvbiAqL1xuICBzdG9yZS5nZXQgPSBzdG9yZS5nZXQ7XG4gIHN0b3JlLmhhcyA9IHN0b3JlLmhhcztcbiAgc3RvcmUuc2V0ID0gc3RvcmUuc2V0O1xuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXNlbGYtYXNzaWduIC0tIHByb3RvdHlwZSBtZXRob2RzIHByb3RlY3Rpb24gKi9cbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIGlmIChzdG9yZS5oYXMoaXQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEKTtcbiAgICBtZXRhZGF0YS5mYWNhZGUgPSBpdDtcbiAgICBzdG9yZS5zZXQoaXQsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBzdG9yZS5nZXQoaXQpIHx8IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gc3RvcmUuaGFzKGl0KTtcbiAgfTtcbn0gZWxzZSB7XG4gIHZhciBTVEFURSA9IHNoYXJlZEtleSgnc3RhdGUnKTtcbiAgaGlkZGVuS2V5c1tTVEFURV0gPSB0cnVlO1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKGhhc093bihpdCwgU1RBVEUpKSB0aHJvdyBuZXcgVHlwZUVycm9yKE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEKTtcbiAgICBtZXRhZGF0YS5mYWNhZGUgPSBpdDtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoaXQsIFNUQVRFLCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSkgPyBpdFtTVEFURV0gOiB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGhhc093bihpdCwgU1RBVEUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXQsXG4gIGdldDogZ2V0LFxuICBoYXM6IGhhcyxcbiAgZW5mb3JjZTogZW5mb3JjZSxcbiAgZ2V0dGVyRm9yOiBnZXR0ZXJGb3Jcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1uYW1lJykuQ09ORklHVVJBQkxFO1xudmFyIGluc3BlY3RTb3VyY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG5cbnZhciBlbmZvcmNlSW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZW5mb3JjZTtcbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXQ7XG52YXIgJFN0cmluZyA9IFN0cmluZztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xudmFyIHJlcGxhY2UgPSB1bmN1cnJ5VGhpcygnJy5yZXBsYWNlKTtcbnZhciBqb2luID0gdW5jdXJyeVRoaXMoW10uam9pbik7XG5cbnZhciBDT05GSUdVUkFCTEVfTEVOR1RIID0gREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5KGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSwgJ2xlbmd0aCcsIHsgdmFsdWU6IDggfSkubGVuZ3RoICE9PSA4O1xufSk7XG5cbnZhciBURU1QTEFURSA9IFN0cmluZyhTdHJpbmcpLnNwbGl0KCdTdHJpbmcnKTtcblxudmFyIG1ha2VCdWlsdEluID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUsIG5hbWUsIG9wdGlvbnMpIHtcbiAgaWYgKHN0cmluZ1NsaWNlKCRTdHJpbmcobmFtZSksIDAsIDcpID09PSAnU3ltYm9sKCcpIHtcbiAgICBuYW1lID0gJ1snICsgcmVwbGFjZSgkU3RyaW5nKG5hbWUpLCAvXlN5bWJvbFxcKChbXildKilcXCkuKiQvLCAnJDEnKSArICddJztcbiAgfVxuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmdldHRlcikgbmFtZSA9ICdnZXQgJyArIG5hbWU7XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuc2V0dGVyKSBuYW1lID0gJ3NldCAnICsgbmFtZTtcbiAgaWYgKCFoYXNPd24odmFsdWUsICduYW1lJykgfHwgKENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FICYmIHZhbHVlLm5hbWUgIT09IG5hbWUpKSB7XG4gICAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ25hbWUnLCB7IHZhbHVlOiBuYW1lLCBjb25maWd1cmFibGU6IHRydWUgfSk7XG4gICAgZWxzZSB2YWx1ZS5uYW1lID0gbmFtZTtcbiAgfVxuICBpZiAoQ09ORklHVVJBQkxFX0xFTkdUSCAmJiBvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnYXJpdHknKSAmJiB2YWx1ZS5sZW5ndGggIT09IG9wdGlvbnMuYXJpdHkpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ2xlbmd0aCcsIHsgdmFsdWU6IG9wdGlvbnMuYXJpdHkgfSk7XG4gIH1cbiAgdHJ5IHtcbiAgICBpZiAob3B0aW9ucyAmJiBoYXNPd24ob3B0aW9ucywgJ2NvbnN0cnVjdG9yJykgJiYgb3B0aW9ucy5jb25zdHJ1Y3Rvcikge1xuICAgICAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ3Byb3RvdHlwZScsIHsgd3JpdGFibGU6IGZhbHNlIH0pO1xuICAgIC8vIGluIFY4IH4gQ2hyb21lIDUzLCBwcm90b3R5cGVzIG9mIHNvbWUgbWV0aG9kcywgbGlrZSBgQXJyYXkucHJvdG90eXBlLnZhbHVlc2AsIGFyZSBub24td3JpdGFibGVcbiAgICB9IGVsc2UgaWYgKHZhbHVlLnByb3RvdHlwZSkgdmFsdWUucHJvdG90eXBlID0gdW5kZWZpbmVkO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIHZhciBzdGF0ZSA9IGVuZm9yY2VJbnRlcm5hbFN0YXRlKHZhbHVlKTtcbiAgaWYgKCFoYXNPd24oc3RhdGUsICdzb3VyY2UnKSkge1xuICAgIHN0YXRlLnNvdXJjZSA9IGpvaW4oVEVNUExBVEUsIHR5cGVvZiBuYW1lID09ICdzdHJpbmcnID8gbmFtZSA6ICcnKTtcbiAgfSByZXR1cm4gdmFsdWU7XG59O1xuXG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1leHRlbmQtbmF0aXZlIC0tIHJlcXVpcmVkXG5GdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgPSBtYWtlQnVpbHRJbihmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIGlzQ2FsbGFibGUodGhpcykgJiYgZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKS5zb3VyY2UgfHwgaW5zcGVjdFNvdXJjZSh0aGlzKTtcbn0sICd0b1N0cmluZycpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIG1ha2VCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge307XG4gIHZhciBzaW1wbGUgPSBvcHRpb25zLmVudW1lcmFibGU7XG4gIHZhciBuYW1lID0gb3B0aW9ucy5uYW1lICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5hbWUgOiBrZXk7XG4gIGlmIChpc0NhbGxhYmxlKHZhbHVlKSkgbWFrZUJ1aWx0SW4odmFsdWUsIG5hbWUsIG9wdGlvbnMpO1xuICBpZiAob3B0aW9ucy5nbG9iYWwpIHtcbiAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgICBlbHNlIGRlZmluZUdsb2JhbFByb3BlcnR5KGtleSwgdmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIW9wdGlvbnMudW5zYWZlKSBkZWxldGUgT1trZXldO1xuICAgICAgZWxzZSBpZiAoT1trZXldKSBzaW1wbGUgPSB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgICBlbHNlIGRlZmluZVByb3BlcnR5TW9kdWxlLmYoTywga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogIW9wdGlvbnMubm9uQ29uZmlndXJhYmxlLFxuICAgICAgd3JpdGFibGU6ICFvcHRpb25zLm5vbldyaXRhYmxlXG4gICAgfSk7XG4gIH0gcmV0dXJuIE87XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcblxuLy8gYE1hdGgudHJ1bmNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1tYXRoLnRydW5jXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tbWF0aC10cnVuYyAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE1hdGgudHJ1bmMgfHwgZnVuY3Rpb24gdHJ1bmMoeCkge1xuICB2YXIgbiA9ICt4O1xuICByZXR1cm4gKG4gPiAwID8gZmxvb3IgOiBjZWlsKShuKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRydW5jID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL21hdGgtdHJ1bmMnKTtcblxuLy8gYFRvSW50ZWdlck9ySW5maW5pdHlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2ludGVnZXJvcmluZmluaXR5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIgbnVtYmVyID0gK2FyZ3VtZW50O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICByZXR1cm4gbnVtYmVyICE9PSBudW1iZXIgfHwgbnVtYmVyID09PSAwID8gMCA6IHRydW5jKG51bWJlcik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBIZWxwZXIgZm9yIGEgcG9wdWxhciByZXBlYXRpbmcgY2FzZSBvZiB0aGUgc3BlYzpcbi8vIExldCBpbnRlZ2VyIGJlID8gVG9JbnRlZ2VyKGluZGV4KS5cbi8vIElmIGludGVnZXIgPCAwLCBsZXQgcmVzdWx0IGJlIG1heCgobGVuZ3RoICsgaW50ZWdlciksIDApOyBlbHNlIGxldCByZXN1bHQgYmUgbWluKGludGVnZXIsIGxlbmd0aCkuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIHZhciBpbnRlZ2VyID0gdG9JbnRlZ2VyT3JJbmZpbml0eShpbmRleCk7XG4gIHJldHVybiBpbnRlZ2VyIDwgMCA/IG1heChpbnRlZ2VyICsgbGVuZ3RoLCAwKSA6IG1pbihpbnRlZ2VyLCBsZW5ndGgpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG5cbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gYFRvTGVuZ3RoYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9sZW5ndGhcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBsZW4gPSB0b0ludGVnZXJPckluZmluaXR5KGFyZ3VtZW50KTtcbiAgcmV0dXJuIGxlbiA+IDAgPyBtaW4obGVuLCAweDFGRkZGRkZGRkZGRkZGKSA6IDA7IC8vIDIgKiogNTMgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xuXG4vLyBgTGVuZ3RoT2ZBcnJheUxpa2VgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1sZW5ndGhvZmFycmF5bGlrZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0b0xlbmd0aChvYmoubGVuZ3RoKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUueyBpbmRleE9mLCBpbmNsdWRlcyB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IGxlbmd0aE9mQXJyYXlMaWtlKE8pO1xuICAgIGlmIChsZW5ndGggPT09IDApIHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9PSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgICAgaWYgKHZhbHVlICE9PSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgaWYgKChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSAmJiBPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbiAgaW5jbHVkZXM6IGNyZWF0ZU1ldGhvZCh0cnVlKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmRleE9mYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxuICBpbmRleE9mOiBjcmVhdGVNZXRob2QoZmFsc2UpXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGluZGV4T2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmRleE9mO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIHB1c2ggPSB1bmN1cnJ5VGhpcyhbXS5wdXNoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgIWhhc093bihoaWRkZW5LZXlzLCBrZXkpICYmIGhhc093bihPLCBrZXkpICYmIHB1c2gocmVzdWx0LCBrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzT3duKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHB1c2gocmVzdWx0LCBrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIElFOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSBbXG4gICdjb25zdHJ1Y3RvcicsXG4gICdoYXNPd25Qcm9wZXJ0eScsXG4gICdpc1Byb3RvdHlwZU9mJyxcbiAgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcbiAgJ3RvTG9jYWxlU3RyaW5nJyxcbiAgJ3RvU3RyaW5nJyxcbiAgJ3ZhbHVlT2YnXG5dO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG5cbnZhciBoaWRkZW5LZXlzID0gZW51bUJ1Z0tleXMuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eW5hbWVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5bmFtZXMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlzeW1ib2xzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbnZhciBjb25jYXQgPSB1bmN1cnJ5VGhpcyhbXS5jb25jYXQpO1xuXG4vLyBhbGwgb2JqZWN0IGtleXMsIGluY2x1ZGVzIG5vbi1lbnVtZXJhYmxlIGFuZCBzeW1ib2xzXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ1JlZmxlY3QnLCAnb3duS2V5cycpIHx8IGZ1bmN0aW9uIG93bktleXMoaXQpIHtcbiAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlLmYoYW5PYmplY3QoaXQpKTtcbiAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mO1xuICByZXR1cm4gZ2V0T3duUHJvcGVydHlTeW1ib2xzID8gY29uY2F0KGtleXMsIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkpIDoga2V5cztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgb3duS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vd24ta2V5cycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSwgZXhjZXB0aW9ucykge1xuICB2YXIga2V5cyA9IG93bktleXMoc291cmNlKTtcbiAgdmFyIGRlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHlNb2R1bGUuZjtcbiAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoIWhhc093bih0YXJnZXQsIGtleSkgJiYgIShleGNlcHRpb25zICYmIGhhc093bihleGNlcHRpb25zLCBrZXkpKSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgIH1cbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciByZXBsYWNlbWVudCA9IC8jfFxcLnByb3RvdHlwZVxcLi87XG5cbnZhciBpc0ZvcmNlZCA9IGZ1bmN0aW9uIChmZWF0dXJlLCBkZXRlY3Rpb24pIHtcbiAgdmFyIHZhbHVlID0gZGF0YVtub3JtYWxpemUoZmVhdHVyZSldO1xuICByZXR1cm4gdmFsdWUgPT09IFBPTFlGSUxMID8gdHJ1ZVxuICAgIDogdmFsdWUgPT09IE5BVElWRSA/IGZhbHNlXG4gICAgOiBpc0NhbGxhYmxlKGRldGVjdGlvbikgPyBmYWlscyhkZXRlY3Rpb24pXG4gICAgOiAhIWRldGVjdGlvbjtcbn07XG5cbnZhciBub3JtYWxpemUgPSBpc0ZvcmNlZC5ub3JtYWxpemUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gIHJldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKHJlcGxhY2VtZW50LCAnLicpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG52YXIgZGF0YSA9IGlzRm9yY2VkLmRhdGEgPSB7fTtcbnZhciBOQVRJVkUgPSBpc0ZvcmNlZC5OQVRJVkUgPSAnTic7XG52YXIgUE9MWUZJTEwgPSBpc0ZvcmNlZC5QT0xZRklMTCA9ICdQJztcblxubW9kdWxlLmV4cG9ydHMgPSBpc0ZvcmNlZDtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJykuZjtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG52YXIgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMnKTtcbnZhciBpc0ZvcmNlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1mb3JjZWQnKTtcblxuLypcbiAgb3B0aW9ucy50YXJnZXQgICAgICAgICAtIG5hbWUgb2YgdGhlIHRhcmdldCBvYmplY3RcbiAgb3B0aW9ucy5nbG9iYWwgICAgICAgICAtIHRhcmdldCBpcyB0aGUgZ2xvYmFsIG9iamVjdFxuICBvcHRpb25zLnN0YXQgICAgICAgICAgIC0gZXhwb3J0IGFzIHN0YXRpYyBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnByb3RvICAgICAgICAgIC0gZXhwb3J0IGFzIHByb3RvdHlwZSBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnJlYWwgICAgICAgICAgIC0gcmVhbCBwcm90b3R5cGUgbWV0aG9kIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy5mb3JjZWQgICAgICAgICAtIGV4cG9ydCBldmVuIGlmIHRoZSBuYXRpdmUgZmVhdHVyZSBpcyBhdmFpbGFibGVcbiAgb3B0aW9ucy5iaW5kICAgICAgICAgICAtIGJpbmQgbWV0aG9kcyB0byB0aGUgdGFyZ2V0LCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMud3JhcCAgICAgICAgICAgLSB3cmFwIGNvbnN0cnVjdG9ycyB0byBwcmV2ZW50aW5nIGdsb2JhbCBwb2xsdXRpb24sIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy51bnNhZmUgICAgICAgICAtIHVzZSB0aGUgc2ltcGxlIGFzc2lnbm1lbnQgb2YgcHJvcGVydHkgaW5zdGVhZCBvZiBkZWxldGUgKyBkZWZpbmVQcm9wZXJ0eVxuICBvcHRpb25zLnNoYW0gICAgICAgICAgIC0gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICBvcHRpb25zLmVudW1lcmFibGUgICAgIC0gZXhwb3J0IGFzIGVudW1lcmFibGUgcHJvcGVydHlcbiAgb3B0aW9ucy5kb250Q2FsbEdldFNldCAtIHByZXZlbnQgY2FsbGluZyBhIGdldHRlciBvbiB0YXJnZXRcbiAgb3B0aW9ucy5uYW1lICAgICAgICAgICAtIHRoZSAubmFtZSBvZiB0aGUgZnVuY3Rpb24gaWYgaXQgZG9lcyBub3QgbWF0Y2ggdGhlIGtleVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdGlvbnMsIHNvdXJjZSkge1xuICB2YXIgVEFSR0VUID0gb3B0aW9ucy50YXJnZXQ7XG4gIHZhciBHTE9CQUwgPSBvcHRpb25zLmdsb2JhbDtcbiAgdmFyIFNUQVRJQyA9IG9wdGlvbnMuc3RhdDtcbiAgdmFyIEZPUkNFRCwgdGFyZ2V0LCBrZXksIHRhcmdldFByb3BlcnR5LCBzb3VyY2VQcm9wZXJ0eSwgZGVzY3JpcHRvcjtcbiAgaWYgKEdMT0JBTCkge1xuICAgIHRhcmdldCA9IGdsb2JhbFRoaXM7XG4gIH0gZWxzZSBpZiAoU1RBVElDKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsVGhpc1tUQVJHRVRdIHx8IGRlZmluZUdsb2JhbFByb3BlcnR5KFRBUkdFVCwge30pO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldCA9IGdsb2JhbFRoaXNbVEFSR0VUXSAmJiBnbG9iYWxUaGlzW1RBUkdFVF0ucHJvdG90eXBlO1xuICB9XG4gIGlmICh0YXJnZXQpIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIHNvdXJjZVByb3BlcnR5ID0gc291cmNlW2tleV07XG4gICAgaWYgKG9wdGlvbnMuZG9udENhbGxHZXRTZXQpIHtcbiAgICAgIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICAgICAgdGFyZ2V0UHJvcGVydHkgPSBkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IudmFsdWU7XG4gICAgfSBlbHNlIHRhcmdldFByb3BlcnR5ID0gdGFyZ2V0W2tleV07XG4gICAgRk9SQ0VEID0gaXNGb3JjZWQoR0xPQkFMID8ga2V5IDogVEFSR0VUICsgKFNUQVRJQyA/ICcuJyA6ICcjJykgKyBrZXksIG9wdGlvbnMuZm9yY2VkKTtcbiAgICAvLyBjb250YWluZWQgaW4gdGFyZ2V0XG4gICAgaWYgKCFGT1JDRUQgJiYgdGFyZ2V0UHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGVvZiBzb3VyY2VQcm9wZXJ0eSA9PSB0eXBlb2YgdGFyZ2V0UHJvcGVydHkpIGNvbnRpbnVlO1xuICAgICAgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyhzb3VyY2VQcm9wZXJ0eSwgdGFyZ2V0UHJvcGVydHkpO1xuICAgIH1cbiAgICAvLyBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gICAgaWYgKG9wdGlvbnMuc2hhbSB8fCAodGFyZ2V0UHJvcGVydHkgJiYgdGFyZ2V0UHJvcGVydHkuc2hhbSkpIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShzb3VyY2VQcm9wZXJ0eSwgJ3NoYW0nLCB0cnVlKTtcbiAgICB9XG4gICAgZGVmaW5lQnVpbHRJbih0YXJnZXQsIGtleSwgc291cmNlUHJvcGVydHksIG9wdGlvbnMpO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc1Byb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBQcm90b3R5cGUpIHtcbiAgaWYgKGlzUHJvdG90eXBlT2YoUHJvdG90eXBlLCBpdCkpIHJldHVybiBpdDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0luY29ycmVjdCBpbnZvY2F0aW9uJyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEYoKSB7IC8qIGVtcHR5ICovIH1cbiAgRi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBudWxsO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldHByb3RvdHlwZW9mIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2YobmV3IEYoKSkgIT09IEYucHJvdG90eXBlO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgQ09SUkVDVF9QUk9UT1RZUEVfR0VUVEVSID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcnJlY3QtcHJvdG90eXBlLWdldHRlcicpO1xuXG52YXIgSUVfUFJPVE8gPSBzaGFyZWRLZXkoJ0lFX1BST1RPJyk7XG52YXIgJE9iamVjdCA9IE9iamVjdDtcbnZhciBPYmplY3RQcm90b3R5cGUgPSAkT2JqZWN0LnByb3RvdHlwZTtcblxuLy8gYE9iamVjdC5nZXRQcm90b3R5cGVPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRwcm90b3R5cGVvZlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRwcm90b3R5cGVvZiAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IENPUlJFQ1RfUFJPVE9UWVBFX0dFVFRFUiA/ICRPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiAoTykge1xuICB2YXIgb2JqZWN0ID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXNPd24ob2JqZWN0LCBJRV9QUk9UTykpIHJldHVybiBvYmplY3RbSUVfUFJPVE9dO1xuICB2YXIgY29uc3RydWN0b3IgPSBvYmplY3QuY29uc3RydWN0b3I7XG4gIGlmIChpc0NhbGxhYmxlKGNvbnN0cnVjdG9yKSAmJiBvYmplY3QgaW5zdGFuY2VvZiBjb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBjb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIG9iamVjdCBpbnN0YW5jZW9mICRPYmplY3QgPyBPYmplY3RQcm90b3R5cGUgOiBudWxsO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgbWFrZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWFrZS1idWlsdC1pbicpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKSB7XG4gIGlmIChkZXNjcmlwdG9yLmdldCkgbWFrZUJ1aWx0SW4oZGVzY3JpcHRvci5nZXQsIG5hbWUsIHsgZ2V0dGVyOiB0cnVlIH0pO1xuICBpZiAoZGVzY3JpcHRvci5zZXQpIG1ha2VCdWlsdEluKGRlc2NyaXB0b3Iuc2V0LCBuYW1lLCB7IHNldHRlcjogdHJ1ZSB9KTtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5LmYodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwga2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3Rba2V5XSA9IHZhbHVlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG4vLyBgT2JqZWN0LmtleXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3Qua2V5c1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1rZXlzIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1ZycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBvYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzJyk7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydGllc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0aWVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnRpZXMgLS0gc2FmZVxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgJiYgIVY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBwcm9wcyA9IHRvSW5kZXhlZE9iamVjdChQcm9wZXJ0aWVzKTtcbiAgdmFyIGtleXMgPSBvYmplY3RLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsZW5ndGggPiBpbmRleCkgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXkgPSBrZXlzW2luZGV4KytdLCBwcm9wc1trZXldKTtcbiAgcmV0dXJuIE87XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ2RvY3VtZW50JywgJ2RvY3VtZW50RWxlbWVudCcpO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGdsb2JhbCBBY3RpdmVYT2JqZWN0IC0tIG9sZCBJRSwgV1NIICovXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZGVmaW5lUHJvcGVydGllc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnRpZXMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xudmFyIGh0bWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaHRtbCcpO1xudmFyIGRvY3VtZW50Q3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG5cbnZhciBHVCA9ICc+JztcbnZhciBMVCA9ICc8JztcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBTQ1JJUFQgPSAnc2NyaXB0JztcbnZhciBJRV9QUk9UTyA9IHNoYXJlZEtleSgnSUVfUFJPVE8nKTtcblxudmFyIEVtcHR5Q29uc3RydWN0b3IgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cbnZhciBzY3JpcHRUYWcgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICByZXR1cm4gTFQgKyBTQ1JJUFQgKyBHVCArIGNvbnRlbnQgKyBMVCArICcvJyArIFNDUklQVCArIEdUO1xufTtcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIEFjdGl2ZVggT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYID0gZnVuY3Rpb24gKGFjdGl2ZVhEb2N1bWVudCkge1xuICBhY3RpdmVYRG9jdW1lbnQud3JpdGUoc2NyaXB0VGFnKCcnKSk7XG4gIGFjdGl2ZVhEb2N1bWVudC5jbG9zZSgpO1xuICB2YXIgdGVtcCA9IGFjdGl2ZVhEb2N1bWVudC5wYXJlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1hc3NpZ25tZW50IC0tIGF2b2lkIG1lbW9yeSBsZWFrXG4gIGFjdGl2ZVhEb2N1bWVudCA9IG51bGw7XG4gIHJldHVybiB0ZW1wO1xufTtcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIE51bGxQcm90b09iamVjdFZpYUlGcmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IGRvY3VtZW50Q3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gIHZhciBKUyA9ICdqYXZhJyArIFNDUklQVCArICc6JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgaHRtbC5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNDc1XG4gIGlmcmFtZS5zcmMgPSBTdHJpbmcoSlMpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKHNjcmlwdFRhZygnZG9jdW1lbnQuRj1PYmplY3QnKSk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIHJldHVybiBpZnJhbWVEb2N1bWVudC5GO1xufTtcblxuLy8gQ2hlY2sgZm9yIGRvY3VtZW50LmRvbWFpbiBhbmQgYWN0aXZlIHggc3VwcG9ydFxuLy8gTm8gbmVlZCB0byB1c2UgYWN0aXZlIHggYXBwcm9hY2ggd2hlbiBkb2N1bWVudC5kb21haW4gaXMgbm90IHNldFxuLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lcy1zaGltcy9lczUtc2hpbS9pc3N1ZXMvMTUwXG4vLyB2YXJpYXRpb24gb2YgaHR0cHM6Ly9naXRodWIuY29tL2tpdGNhbWJyaWRnZS9lczUtc2hpbS9jb21taXQvNGY3MzhhYzA2NjM0NlxuLy8gYXZvaWQgSUUgR0MgYnVnXG52YXIgYWN0aXZlWERvY3VtZW50O1xudmFyIE51bGxQcm90b09iamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICBhY3RpdmVYRG9jdW1lbnQgPSBuZXcgQWN0aXZlWE9iamVjdCgnaHRtbGZpbGUnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogaWdub3JlICovIH1cbiAgTnVsbFByb3RvT2JqZWN0ID0gdHlwZW9mIGRvY3VtZW50ICE9ICd1bmRlZmluZWQnXG4gICAgPyBkb2N1bWVudC5kb21haW4gJiYgYWN0aXZlWERvY3VtZW50XG4gICAgICA/IE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVgoYWN0aXZlWERvY3VtZW50KSAvLyBvbGQgSUVcbiAgICAgIDogTnVsbFByb3RvT2JqZWN0VmlhSUZyYW1lKClcbiAgICA6IE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVgoYWN0aXZlWERvY3VtZW50KTsgLy8gV1NIXG4gIHZhciBsZW5ndGggPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkgZGVsZXRlIE51bGxQcm90b09iamVjdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2xlbmd0aF1dO1xuICByZXR1cm4gTnVsbFByb3RvT2JqZWN0KCk7XG59O1xuXG5oaWRkZW5LZXlzW0lFX1BST1RPXSA9IHRydWU7XG5cbi8vIGBPYmplY3QuY3JlYXRlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmNyZWF0ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1jcmVhdGUgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlDb25zdHJ1Y3RvcltQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5Q29uc3RydWN0b3IoKTtcbiAgICBFbXB0eUNvbnN0cnVjdG9yW1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IE51bGxQcm90b09iamVjdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZGVmaW5lUHJvcGVydGllc01vZHVsZS5mKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZScpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4nKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgPSBmYWxzZTtcblxuLy8gYCVJdGVyYXRvclByb3RvdHlwZSVgIG9iamVjdFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy0laXRlcmF0b3Jwcm90b3R5cGUlLW9iamVjdFxudmFyIEl0ZXJhdG9yUHJvdG90eXBlLCBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUsIGFycmF5SXRlcmF0b3I7XG5cbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLWFycmF5LXByb3RvdHlwZS1rZXlzIC0tIHNhZmUgKi9cbmlmIChbXS5rZXlzKSB7XG4gIGFycmF5SXRlcmF0b3IgPSBbXS5rZXlzKCk7XG4gIC8vIFNhZmFyaSA4IGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICBpZiAoISgnbmV4dCcgaW4gYXJyYXlJdGVyYXRvcikpIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgPSB0cnVlO1xuICBlbHNlIHtcbiAgICBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZihnZXRQcm90b3R5cGVPZihhcnJheUl0ZXJhdG9yKSk7XG4gICAgaWYgKFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSkgSXRlcmF0b3JQcm90b3R5cGUgPSBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cbn1cblxudmFyIE5FV19JVEVSQVRPUl9QUk9UT1RZUEUgPSAhaXNPYmplY3QoSXRlcmF0b3JQcm90b3R5cGUpIHx8IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRlc3QgPSB7fTtcbiAgLy8gRkY0NC0gbGVnYWN5IGl0ZXJhdG9ycyBjYXNlXG4gIHJldHVybiBJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0uY2FsbCh0ZXN0KSAhPT0gdGVzdDtcbn0pO1xuXG5pZiAoTkVXX0lURVJBVE9SX1BST1RPVFlQRSkgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbmVsc2UgaWYgKElTX1BVUkUpIEl0ZXJhdG9yUHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcblxuLy8gYCVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSVpdGVyYXRvcnByb3RvdHlwZSUtQEBpdGVyYXRvclxuaWYgKCFpc0NhbGxhYmxlKEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXSkpIHtcbiAgZGVmaW5lQnVpbHRJbihJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBJdGVyYXRvclByb3RvdHlwZTogSXRlcmF0b3JQcm90b3R5cGUsXG4gIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlM6IEJVR0dZX1NBRkFSSV9JVEVSQVRPUlNcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4taW5zdGFuY2UnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YnKTtcbnZhciBkZWZpbmVCdWlsdEluQWNjZXNzb3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluLWFjY2Vzc29yJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycy1jb3JlJykuSXRlcmF0b3JQcm90b3R5cGU7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcblxudmFyIENPTlNUUlVDVE9SID0gJ2NvbnN0cnVjdG9yJztcbnZhciBJVEVSQVRPUiA9ICdJdGVyYXRvcic7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG52YXIgTmF0aXZlSXRlcmF0b3IgPSBnbG9iYWxUaGlzW0lURVJBVE9SXTtcblxuLy8gRkY1Ni0gaGF2ZSBub24tc3RhbmRhcmQgZ2xvYmFsIGhlbHBlciBgSXRlcmF0b3JgXG52YXIgRk9SQ0VEID0gSVNfUFVSRVxuICB8fCAhaXNDYWxsYWJsZShOYXRpdmVJdGVyYXRvcilcbiAgfHwgTmF0aXZlSXRlcmF0b3IucHJvdG90eXBlICE9PSBJdGVyYXRvclByb3RvdHlwZVxuICAvLyBGRjQ0LSBub24tc3RhbmRhcmQgYEl0ZXJhdG9yYCBwYXNzZXMgcHJldmlvdXMgdGVzdHNcbiAgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHsgTmF0aXZlSXRlcmF0b3Ioe30pOyB9KTtcblxudmFyIEl0ZXJhdG9yQ29uc3RydWN0b3IgPSBmdW5jdGlvbiBJdGVyYXRvcigpIHtcbiAgYW5JbnN0YW5jZSh0aGlzLCBJdGVyYXRvclByb3RvdHlwZSk7XG4gIGlmIChnZXRQcm90b3R5cGVPZih0aGlzKSA9PT0gSXRlcmF0b3JQcm90b3R5cGUpIHRocm93IG5ldyAkVHlwZUVycm9yKCdBYnN0cmFjdCBjbGFzcyBJdGVyYXRvciBub3QgZGlyZWN0bHkgY29uc3RydWN0YWJsZScpO1xufTtcblxudmFyIGRlZmluZUl0ZXJhdG9yUHJvdG90eXBlQWNjZXNzb3IgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICBpZiAoREVTQ1JJUFRPUlMpIHtcbiAgICBkZWZpbmVCdWlsdEluQWNjZXNzb3IoSXRlcmF0b3JQcm90b3R5cGUsIGtleSwge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChyZXBsYWNlbWVudCkge1xuICAgICAgICBhbk9iamVjdCh0aGlzKTtcbiAgICAgICAgaWYgKHRoaXMgPT09IEl0ZXJhdG9yUHJvdG90eXBlKSB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIllvdSBjYW4ndCByZWRlZmluZSB0aGlzIHByb3BlcnR5XCIpO1xuICAgICAgICBpZiAoaGFzT3duKHRoaXMsIGtleSkpIHRoaXNba2V5XSA9IHJlcGxhY2VtZW50O1xuICAgICAgICBlbHNlIGNyZWF0ZVByb3BlcnR5KHRoaXMsIGtleSwgcmVwbGFjZW1lbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2UgSXRlcmF0b3JQcm90b3R5cGVba2V5XSA9IHZhbHVlO1xufTtcblxuaWYgKCFoYXNPd24oSXRlcmF0b3JQcm90b3R5cGUsIFRPX1NUUklOR19UQUcpKSBkZWZpbmVJdGVyYXRvclByb3RvdHlwZUFjY2Vzc29yKFRPX1NUUklOR19UQUcsIElURVJBVE9SKTtcblxuaWYgKEZPUkNFRCB8fCAhaGFzT3duKEl0ZXJhdG9yUHJvdG90eXBlLCBDT05TVFJVQ1RPUikgfHwgSXRlcmF0b3JQcm90b3R5cGVbQ09OU1RSVUNUT1JdID09PSBPYmplY3QpIHtcbiAgZGVmaW5lSXRlcmF0b3JQcm90b3R5cGVBY2Nlc3NvcihDT05TVFJVQ1RPUiwgSXRlcmF0b3JDb25zdHJ1Y3Rvcik7XG59XG5cbkl0ZXJhdG9yQ29uc3RydWN0b3IucHJvdG90eXBlID0gSXRlcmF0b3JQcm90b3R5cGU7XG5cbi8vIGBJdGVyYXRvcmAgY29uc3RydWN0b3Jcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXRlcmF0b3JcbiQoeyBnbG9iYWw6IHRydWUsIGNvbnN0cnVjdG9yOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIEl0ZXJhdG9yOiBJdGVyYXRvckNvbnN0cnVjdG9yXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2xhc3NvZlJhdyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbikge1xuICAvLyBOYXNob3JuIGJ1ZzpcbiAgLy8gICBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTEyOFxuICAvLyAgIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xMTMwXG4gIGlmIChjbGFzc29mUmF3KGZuKSA9PT0gJ0Z1bmN0aW9uJykgcmV0dXJuIHVuY3VycnlUaGlzKGZuKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy1jbGF1c2UnKTtcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBiaW5kID0gdW5jdXJyeVRoaXModW5jdXJyeVRoaXMuYmluZCk7XG5cbi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQpIHtcbiAgYUNhbGxhYmxlKGZuKTtcbiAgcmV0dXJuIHRoYXQgPT09IHVuZGVmaW5lZCA/IGZuIDogTkFUSVZFX0JJTkQgPyBiaW5kKGZuLCB0aGF0KSA6IGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG90eXBlID0gQXJyYXkucHJvdG90eXBlO1xuXG4vLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvdHlwZVtJVEVSQVRPUl0gPT09IGl0KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciB0ZXN0ID0ge307XG5cbnRlc3RbVE9fU1RSSU5HX1RBR10gPSAneic7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RyaW5nKHRlc3QpID09PSAnW29iamVjdCB6XSc7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIFRPX1NUUklOR19UQUdfU1VQUE9SVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgY2xhc3NvZlJhdyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIENPUlJFQ1RfQVJHVU1FTlRTID0gY2xhc3NvZlJhdyhmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbi8vIGdldHRpbmcgdGFnIGZyb20gRVM2KyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2Bcbm1vZHVsZS5leHBvcnRzID0gVE9fU1RSSU5HX1RBR19TVVBQT1JUID8gY2xhc3NvZlJhdyA6IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgdGFnLCByZXN1bHQ7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mICh0YWcgPSB0cnlHZXQoTyA9ICRPYmplY3QoaXQpLCBUT19TVFJJTkdfVEFHKSkgPT0gJ3N0cmluZycgPyB0YWdcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IENPUlJFQ1RfQVJHVU1FTlRTID8gY2xhc3NvZlJhdyhPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChyZXN1bHQgPSBjbGFzc29mUmF3KE8pKSA9PT0gJ09iamVjdCcgJiYgaXNDYWxsYWJsZShPLmNhbGxlZSkgPyAnQXJndW1lbnRzJyA6IHJlc3VsdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZicpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc051bGxPclVuZGVmaW5lZChpdCkpIHJldHVybiBnZXRNZXRob2QoaXQsIElURVJBVE9SKVxuICAgIHx8IGdldE1ldGhvZChpdCwgJ0BAaXRlcmF0b3InKVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRyeVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RyeS10by1zdHJpbmcnKTtcbnZhciBnZXRJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCwgdXNpbmdJdGVyYXRvcikge1xuICB2YXIgaXRlcmF0b3JNZXRob2QgPSBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGdldEl0ZXJhdG9yTWV0aG9kKGFyZ3VtZW50KSA6IHVzaW5nSXRlcmF0b3I7XG4gIGlmIChhQ2FsbGFibGUoaXRlcmF0b3JNZXRob2QpKSByZXR1cm4gYW5PYmplY3QoY2FsbChpdGVyYXRvck1ldGhvZCwgYXJndW1lbnQpKTtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IodHJ5VG9TdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgaXRlcmFibGUnKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBraW5kLCB2YWx1ZSkge1xuICB2YXIgaW5uZXJSZXN1bHQsIGlubmVyRXJyb3I7XG4gIGFuT2JqZWN0KGl0ZXJhdG9yKTtcbiAgdHJ5IHtcbiAgICBpbm5lclJlc3VsdCA9IGdldE1ldGhvZChpdGVyYXRvciwgJ3JldHVybicpO1xuICAgIGlmICghaW5uZXJSZXN1bHQpIHtcbiAgICAgIGlmIChraW5kID09PSAndGhyb3cnKSB0aHJvdyB2YWx1ZTtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgaW5uZXJSZXN1bHQgPSBjYWxsKGlubmVyUmVzdWx0LCBpdGVyYXRvcik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaW5uZXJFcnJvciA9IHRydWU7XG4gICAgaW5uZXJSZXN1bHQgPSBlcnJvcjtcbiAgfVxuICBpZiAoa2luZCA9PT0gJ3Rocm93JykgdGhyb3cgdmFsdWU7XG4gIGlmIChpbm5lckVycm9yKSB0aHJvdyBpbm5lclJlc3VsdDtcbiAgYW5PYmplY3QoaW5uZXJSZXN1bHQpO1xuICByZXR1cm4gdmFsdWU7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRyeVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RyeS10by1zdHJpbmcnKTtcbnZhciBpc0FycmF5SXRlcmF0b3JNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXktaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciBpc1Byb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YnKTtcbnZhciBnZXRJdGVyYXRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3InKTtcbnZhciBnZXRJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgaXRlcmF0b3JDbG9zZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1jbG9zZScpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxudmFyIFJlc3VsdCA9IGZ1bmN0aW9uIChzdG9wcGVkLCByZXN1bHQpIHtcbiAgdGhpcy5zdG9wcGVkID0gc3RvcHBlZDtcbiAgdGhpcy5yZXN1bHQgPSByZXN1bHQ7XG59O1xuXG52YXIgUmVzdWx0UHJvdG90eXBlID0gUmVzdWx0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmFibGUsIHVuYm91bmRGdW5jdGlvbiwgb3B0aW9ucykge1xuICB2YXIgdGhhdCA9IG9wdGlvbnMgJiYgb3B0aW9ucy50aGF0O1xuICB2YXIgQVNfRU5UUklFUyA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5BU19FTlRSSUVTKTtcbiAgdmFyIElTX1JFQ09SRCA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5JU19SRUNPUkQpO1xuICB2YXIgSVNfSVRFUkFUT1IgPSAhIShvcHRpb25zICYmIG9wdGlvbnMuSVNfSVRFUkFUT1IpO1xuICB2YXIgSU5URVJSVVBURUQgPSAhIShvcHRpb25zICYmIG9wdGlvbnMuSU5URVJSVVBURUQpO1xuICB2YXIgZm4gPSBiaW5kKHVuYm91bmRGdW5jdGlvbiwgdGhhdCk7XG4gIHZhciBpdGVyYXRvciwgaXRlckZuLCBpbmRleCwgbGVuZ3RoLCByZXN1bHQsIG5leHQsIHN0ZXA7XG5cbiAgdmFyIHN0b3AgPSBmdW5jdGlvbiAoY29uZGl0aW9uKSB7XG4gICAgaWYgKGl0ZXJhdG9yKSBpdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCAnbm9ybWFsJywgY29uZGl0aW9uKTtcbiAgICByZXR1cm4gbmV3IFJlc3VsdCh0cnVlLCBjb25kaXRpb24pO1xuICB9O1xuXG4gIHZhciBjYWxsRm4gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoQVNfRU5UUklFUykge1xuICAgICAgYW5PYmplY3QodmFsdWUpO1xuICAgICAgcmV0dXJuIElOVEVSUlVQVEVEID8gZm4odmFsdWVbMF0sIHZhbHVlWzFdLCBzdG9wKSA6IGZuKHZhbHVlWzBdLCB2YWx1ZVsxXSk7XG4gICAgfSByZXR1cm4gSU5URVJSVVBURUQgPyBmbih2YWx1ZSwgc3RvcCkgOiBmbih2YWx1ZSk7XG4gIH07XG5cbiAgaWYgKElTX1JFQ09SRCkge1xuICAgIGl0ZXJhdG9yID0gaXRlcmFibGUuaXRlcmF0b3I7XG4gIH0gZWxzZSBpZiAoSVNfSVRFUkFUT1IpIHtcbiAgICBpdGVyYXRvciA9IGl0ZXJhYmxlO1xuICB9IGVsc2Uge1xuICAgIGl0ZXJGbiA9IGdldEl0ZXJhdG9yTWV0aG9kKGl0ZXJhYmxlKTtcbiAgICBpZiAoIWl0ZXJGbikgdGhyb3cgbmV3ICRUeXBlRXJyb3IodHJ5VG9TdHJpbmcoaXRlcmFibGUpICsgJyBpcyBub3QgaXRlcmFibGUnKTtcbiAgICAvLyBvcHRpbWlzYXRpb24gZm9yIGFycmF5IGl0ZXJhdG9yc1xuICAgIGlmIChpc0FycmF5SXRlcmF0b3JNZXRob2QoaXRlckZuKSkge1xuICAgICAgZm9yIChpbmRleCA9IDAsIGxlbmd0aCA9IGxlbmd0aE9mQXJyYXlMaWtlKGl0ZXJhYmxlKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgICAgcmVzdWx0ID0gY2FsbEZuKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgICAgIGlmIChyZXN1bHQgJiYgaXNQcm90b3R5cGVPZihSZXN1bHRQcm90b3R5cGUsIHJlc3VsdCkpIHJldHVybiByZXN1bHQ7XG4gICAgICB9IHJldHVybiBuZXcgUmVzdWx0KGZhbHNlKTtcbiAgICB9XG4gICAgaXRlcmF0b3IgPSBnZXRJdGVyYXRvcihpdGVyYWJsZSwgaXRlckZuKTtcbiAgfVxuXG4gIG5leHQgPSBJU19SRUNPUkQgPyBpdGVyYWJsZS5uZXh0IDogaXRlcmF0b3IubmV4dDtcbiAgd2hpbGUgKCEoc3RlcCA9IGNhbGwobmV4dCwgaXRlcmF0b3IpKS5kb25lKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9IGNhbGxGbihzdGVwLnZhbHVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaXRlcmF0b3JDbG9zZShpdGVyYXRvciwgJ3Rocm93JywgZXJyb3IpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHJlc3VsdCA9PSAnb2JqZWN0JyAmJiByZXN1bHQgJiYgaXNQcm90b3R5cGVPZihSZXN1bHRQcm90b3R5cGUsIHJlc3VsdCkpIHJldHVybiByZXN1bHQ7XG4gIH0gcmV0dXJuIG5ldyBSZXN1bHQoZmFsc2UpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBgR2V0SXRlcmF0b3JEaXJlY3Qob2JqKWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvcHJvcG9zYWwtaXRlcmF0b3ItaGVscGVycy8jc2VjLWdldGl0ZXJhdG9yZGlyZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHtcbiAgICBpdGVyYXRvcjogb2JqLFxuICAgIG5leHQ6IG9iai5uZXh0LFxuICAgIGRvbmU6IGZhbHNlXG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGl0ZXJhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0ZScpO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZ2V0SXRlcmF0b3JEaXJlY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLWRpcmVjdCcpO1xuXG4vLyBgSXRlcmF0b3IucHJvdG90eXBlLmZpbmRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pdGVyYXRvci5wcm90b3R5cGUuZmluZFxuJCh7IHRhcmdldDogJ0l0ZXJhdG9yJywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUgfSwge1xuICBmaW5kOiBmdW5jdGlvbiBmaW5kKHByZWRpY2F0ZSkge1xuICAgIGFuT2JqZWN0KHRoaXMpO1xuICAgIGFDYWxsYWJsZShwcmVkaWNhdGUpO1xuICAgIHZhciByZWNvcmQgPSBnZXRJdGVyYXRvckRpcmVjdCh0aGlzKTtcbiAgICB2YXIgY291bnRlciA9IDA7XG4gICAgcmV0dXJuIGl0ZXJhdGUocmVjb3JkLCBmdW5jdGlvbiAodmFsdWUsIHN0b3ApIHtcbiAgICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGNvdW50ZXIrKykpIHJldHVybiBzdG9wKHZhbHVlKTtcbiAgICB9LCB7IElTX1JFQ09SRDogdHJ1ZSwgSU5URVJSVVBURUQ6IHRydWUgfSkucmVzdWx0O1xuICB9XG59KTtcbiIsICJpbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge213QWRkUHJldmlld30gZnJvbSAnLi9tb2R1bGVzL213L213QWRkUHJldmlldyc7XG5pbXBvcnQge3dpa2l0ZXh0UHJldmlld1Rlc3RjYXNlfSBmcm9tICcuL21vZHVsZXMvd2lraXRleHRQcmV2aWV3VGVzdGNhc2UnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIHNwZWNpYWxXaWtpdGV4dCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0Ly8g5omn6KGM6aKE6KeIXG5cdG13QWRkUHJldmlldygkYm9keSk7XG5cdC8vIOajgOafpea1i+ivleagt+S+i1xuXHR2b2lkIHdpa2l0ZXh0UHJldmlld1Rlc3RjYXNlKHRydWUpO1xufSk7XG4iLCAiaW1wb3J0IFwiZXNidWlsZC1jc3MtbW9kdWxlcy1wbHVnaW4tbnMtY3NzOnNyYy9TcGVjaWFsV2lraXRleHQvY29tcG9uZW50cy9TcGVjaWFsV2lraXRleHQubW9kdWxlLmxlc3NcIjtcbmV4cG9ydCBjb25zdCBwcmV2aWV3TG9hZGluZ0NvbnRlbnQgPSBcIlNwZWNpYWxXaWtpdGV4dC1tb2R1bGVfX3ByZXZpZXctbG9hZGluZ19fY29udGVudF8wUHJEbEdfXzQxMDBcIjtcbmV4cG9ydCBjb25zdCBwcmV2aWV3TG9hZGluZ0lubmVyID0gXCJTcGVjaWFsV2lraXRleHQtbW9kdWxlX19wcmV2aWV3LWxvYWRpbmdfX2lubmVyXzBQckRsR19fNDEwMFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwicHJldmlld0xvYWRpbmdDb250ZW50XCI6IHByZXZpZXdMb2FkaW5nQ29udGVudCxcbiAgXCJwcmV2aWV3TG9hZGluZ0lubmVyXCI6IHByZXZpZXdMb2FkaW5nSW5uZXJcbn07XG4gICAgICAiLCAiaW1wb3J0IHtwcmV2aWV3TG9hZGluZ0NvbnRlbnQsIHByZXZpZXdMb2FkaW5nSW5uZXJ9IGZyb20gJy4vU3BlY2lhbFdpa2l0ZXh0Lm1vZHVsZS5sZXNzJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5pbXBvcnQgYWpheExvYWRlciBmcm9tICcuLi9pbWFnZXMvTG9hZGluZ19pY29uLmdpZic7XG5pbXBvcnQgYWxlcnQgZnJvbSAnLi4vaW1hZ2VzL0FsZXJ0LnBuZyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL21vZHVsZXMvaTE4bic7XG5cbmNvbnN0IEZhaWxlZCA9ICgpID0+IChcblx0PD5cblx0XHQ8aW1nIHNyYz17YWxlcnR9IGRlY29kaW5nPVwiYXN5bmNcIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIiAvPlxuXHRcdDxzcGFuPiZuYnNwO3tnZXRNZXNzYWdlKCdGYWlsZWQnKX08L3NwYW4+XG5cdDwvPlxuKTtcblxuY29uc3QgTG9hZGluZyA9ICgpID0+IChcblx0PGRpdiBpZD1cInNwZWNpYWx3aWtpdGV4dC1wcmV2aWV3LWxvYWRpbmdcIj5cblx0XHQ8ZGl2IGNsYXNzTmFtZT17WydxdW90ZWJveCcsIHByZXZpZXdMb2FkaW5nSW5uZXJdfSBpZD1cInNwZWNpYWx3aWtpdGV4dC1wcmV2aWV3LWxvYWRpbmdfX2lubmVyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17cHJldmlld0xvYWRpbmdDb250ZW50fSBpZD1cInNwZWNpYWx3aWtpdGV4dC1wcmV2aWV3LWxvYWRpbmdfX2NvbnRlbnRcIj5cblx0XHRcdFx0PGltZyBzcmM9e2FqYXhMb2FkZXJ9IGRlY29kaW5nPVwiYXN5bmNcIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIiAvPlxuXHRcdFx0XHQ8c3Bhbj4mbmJzcDt7Z2V0TWVzc2FnZSgnTG9hZGluZycpfTwvc3Bhbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbik7XG5cbmV4cG9ydCB7RmFpbGVkLCBMb2FkaW5nfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0RmFpbGVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ZhaWxlZCB0byBsb2FkIHByZXZpZXcuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+mihOiniOWKoOi9veWksei0pScsXG5cdFx0XHQnemgtaGFudCc6ICfpoJDopr3ovInlhaXlpLHotKUnLFxuXHRcdH0pLFxuXHRcdExvYWRpbmc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9hZGluZyBwcmV2aWV3Li4uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+mihOiniOWKoOi9veS4reKApuKApicsXG5cdFx0XHQnemgtaGFudCc6ICfpoJDopr3ovInlhaXkuK3igKbigKYnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2dlbmVyYXRlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbi8vIOajgOafpXNlbGVjdG9y5a+55bqU55qERE9N5a+56LGh5piv5ZCm5a2Y5ZyoXG5jb25zdCBjaGVja0VsZW1lbnRFeGlzdCA9IChzZWxlY3RvcnM6IHN0cmluZyB8IHN0cmluZ1tdKTogYm9vbGVhbiA9PiB7XG5cdGNvbnN0IHNlbGVjdG9yQXJyYXk6IHN0cmluZ1tdID0gZ2VuZXJhdGVBcnJheShzZWxlY3RvcnMpO1xuXG5cdGZvciAoY29uc3Qgc2VsZWN0b3Igb2Ygc2VsZWN0b3JBcnJheSkge1xuXHRcdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IHtjaGVja0VsZW1lbnRFeGlzdH07XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuSlNYJztcbmltcG9ydCB7Y2hlY2tFbGVtZW50RXhpc3R9IGZyb20gJy4vY2hlY2tFbGVtZW50RXhpc3QnO1xuXG4vLyDlsIbop6PmnpDlkI7nmoR3aWtpdGV4dOWKoOWFpemhtemdouS4rVxuY29uc3QgYWRkUGFyc2VkV2lraXRleHQgPSAocGFyc2VkV2lraXRleHQ6IHN0cmluZyB8IFJlYWN0LlJlYWN0RWxlbWVudCk6IHZvaWQgPT4ge1xuXHRjb25zdCAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPSAkKCdib2R5Jyk7XG5cdGNvbnN0ICRwYXJzZWRXaWtpdGV4dDogSlF1ZXJ5ID0gJCgpLmh0bWwocGFyc2VkV2lraXRleHQpO1xuXG5cdGlmIChjaGVja0VsZW1lbnRFeGlzdCgnI3NwZWNpYWx3aWtpdGV4dC1wcmV2aWV3LWxvYWRpbmcnKSkge1xuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkYm9keS5maW5kKCcjc3BlY2lhbHdpa2l0ZXh0LXByZXZpZXctbG9hZGluZycpO1xuXHRcdCRlbGVtZW50Lmh0bWwocGFyc2VkV2lraXRleHQpO1xuXHRcdG13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5maXJlKCRlbGVtZW50KTtcblx0fSBlbHNlIGlmIChjaGVja0VsZW1lbnRFeGlzdCgnLmRpZmYtY3VycmVudHZlcnNpb24tdGl0bGUnKSkge1xuXHRcdCRib2R5LmZpbmQoJy5kaWZmLWN1cnJlbnR2ZXJzaW9uLXRpdGxlJykuYXBwZW5kKCRwYXJzZWRXaWtpdGV4dCk7XG5cdH0gZWxzZSBpZiAoY2hlY2tFbGVtZW50RXhpc3QoJy5wcmV2aWV3bm90ZScpKSB7XG5cdFx0JGJvZHkuZmluZCgnLnByZXZpZXdub3RlJykuYXBwZW5kKCRwYXJzZWRXaWtpdGV4dCk7XG5cdH0gZWxzZSBpZiAoY2hlY2tFbGVtZW50RXhpc3QoJy5tdy11bmRlbGV0ZS1yZXZpc2lvbicpKSB7XG5cdFx0JGJvZHkuZmluZCgnLm13LXVuZGVsZXRlLXJldmlzaW9uJykuYXBwZW5kKCRwYXJzZWRXaWtpdGV4dCk7XG5cdH0gZWxzZSBpZiAoY2hlY2tFbGVtZW50RXhpc3QoJyNtdy1jb250ZW50LXRleHQnKSkge1xuXHRcdCRib2R5LmZpbmQoJyNtdy1jb250ZW50LXRleHQnKS5hcHBlbmQoJHBhcnNlZFdpa2l0ZXh0KTtcblx0fVxuXG5cdG13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5maXJlKCRwYXJzZWRXaWtpdGV4dCk7XG59O1xuXG5leHBvcnQge2FkZFBhcnNlZFdpa2l0ZXh0fTtcbiIsICJpbXBvcnQge0ZhaWxlZCwgTG9hZGluZ30gZnJvbSAnLi4vY29tcG9uZW50cy9nZW5lcmF0ZUVsZW1lbnRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5pbXBvcnQge2FkZFBhcnNlZFdpa2l0ZXh0fSBmcm9tICcuL3V0aWwvYWRkUGFyc2VkV2lraXRleHQnO1xuXG4vLyBbW0ZpbGU6R25vbWUtZGlhbG9nLXdhcm5pbmcyLnN2Z3wzMnB4XV1cbi8vIC17emgtaGFuczrpooTop4jliqDovb3lpLHotKU7emgtaGFudDrpoJDopr3ovInlhaXlpLHotKU7fS1cbmNvbnN0IG5vdGljZUZhaWxFbGVtZW50OiBSZWFjdC5SZWFjdEVsZW1lbnQgPSBGYWlsZWQoKTtcblxuLy8ge3tRdW90ZSBib3ggfHF1b3RlICA9IC17emgtaGFuczrpooTop4jliqDovb3kuK07emgtaGFudDrpoJDopr3ovInlhaXkuK07fS3igKbigKYgfHdpZHRoICA9IDUwJSB8YWxpZ24gID0gY2VudGVyfX1cbmNvbnN0IG5vdGljZUxvYWRpbmdFbGVtZW50OiBSZWFjdC5SZWFjdEVsZW1lbnQgPSBMb2FkaW5nKCk7XG5cbi8vIOaUueWKqERPTeWGheWuuVxuY29uc3QgcmVwbGFjZURPTSA9IChzZWxlY3Rvcjogc3RyaW5nLCBlbGVtZW50PzogUmVhY3QuUmVhY3RFbGVtZW50KTogdm9pZCA9PiB7XG5cdCQoc2VsZWN0b3IpLmh0bWwoZWxlbWVudCA/PyAnJyk7XG59O1xuXG4vLyDliqDlhaXigJxb6L295YWl5LitXeKAneeahOaPkOekulxuY29uc3QgYWRkTG9hZGluZ05vdGljZSA9ICgpOiB2b2lkID0+IHtcblx0YWRkUGFyc2VkV2lraXRleHQobm90aWNlTG9hZGluZ0VsZW1lbnQpO1xufTtcblxuLy8g6L295YWl6ZSZ6K+v55qE5o+Q56S6XG5jb25zdCBsb2FkaW5nRmFpbE5vdGljZSA9ICgpOiB2b2lkID0+IHtcblx0cmVwbGFjZURPTSgnI3NwZWNpYWx3aWtpdGV4dC1wcmV2aWV3LWxvYWRpbmdfX2NvbnRlbnQnLCBub3RpY2VGYWlsRWxlbWVudCk7XG59O1xuXG4vLyDnp7vpmaTigJxb6L295YWl5LitXeKAneeahOaPkOekulxuY29uc3QgcmVtb3ZlTG9hZGluZ05vdGljZSA9ICgpOiB2b2lkID0+IHtcblx0cmVwbGFjZURPTSgnI3NwZWNpYWx3aWtpdGV4dC1wcmV2aWV3LWxvYWRpbmcnKTtcbn07XG5cbmV4cG9ydCB7bm90aWNlTG9hZGluZ0VsZW1lbnQsIGFkZExvYWRpbmdOb3RpY2UsIGxvYWRpbmdGYWlsTm90aWNlLCByZW1vdmVMb2FkaW5nTm90aWNlfTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiLFxuXHRcIndpa2lUZXh0S2V5XCI6IFwiX2FkZFRleHRcIlxufVxuIiwgIi8vIOWQiOW5tuWkmuS4qndpa2l0ZXh05a2X56ym5LiyXG5jb25zdCBsdWFBZGRUZXh0ID0gKGlucHV0U3RyaW5nOiBzdHJpbmcsIG5ld1N0cmluZzogc3RyaW5nLCBpc0VzY2FwZTogYm9vbGVhbiA9IGZhbHNlKTogc3RyaW5nID0+IHtcblx0aWYgKG5ld1N0cmluZykge1xuXHRcdGlmIChpbnB1dFN0cmluZykge1xuXHRcdFx0aW5wdXRTdHJpbmcgKz0gJ1xcbic7XG5cdFx0fVxuXG5cdFx0aWYgKGlzRXNjYXBlKSB7XG5cdFx0XHRjb25zdCBbZXNjYXBlU3RyaW5nXSA9IEpTT04ucGFyc2UoXG5cdFx0XHRcdGBbJHtKU09OLnN0cmluZ2lmeShcblx0XHRcdFx0XHQvLyBMdWHkuI3mlK/mjIFcXHXjgIFcXHjovazkuYnlrZfnrKZcblx0XHRcdFx0XHRuZXdTdHJpbmcucmVwbGFjZSgvXFxcXChbdXhdKS9naSwgJyQxJylcblx0XHRcdFx0KS5yZXBsYWNlKC9cXFxcXFxcXC9nLCAnXFxcXCcpfV1gXG5cdFx0XHQpIGFzIFtzdHJpbmddO1xuXHRcdFx0bmV3U3RyaW5nID0gZXNjYXBlU3RyaW5nO1xuXHRcdH1cblxuXHRcdGlucHV0U3RyaW5nICs9IG5ld1N0cmluZztcblx0fVxuXG5cdHJldHVybiBpbnB1dFN0cmluZztcbn07XG5cbmV4cG9ydCB7bHVhQWRkVGV4dH07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtsdWFBZGRUZXh0fSBmcm9tICcuL2x1YUFkZFRleHQnO1xuXG4vLyDor7vlj5Z3aWtpdGV4dOWtl+espuS4su+8jOW5tuW/veeVpeazqOmHiuWwvumDqFxuY29uc3QgbHVhR2V0U3RyaW5nID0gKGlucHV0U3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRjb25zdCB0ZXN0U3RyaW5nRXhlY0FycmF5OiBSZWdFeHBFeGVjQXJyYXkgfCBudWxsID0gL1teXFxuXSpcXCpcXC8vLmV4ZWMoaW5wdXRTdHJpbmcpO1xuXG5cdGxldCB0ZXN0U3RyaW5nOiBzdHJpbmcgPSBpbnB1dFN0cmluZztcblx0aWYgKHRlc3RTdHJpbmdFeGVjQXJyYXkpIHtcblx0XHRbdGVzdFN0cmluZ10gPSB0ZXN0U3RyaW5nRXhlY0FycmF5O1xuXHRcdHRlc3RTdHJpbmcgPSB0ZXN0U3RyaW5nLnNsaWNlKDAsIE1hdGgubWF4KDAsIHRlc3RTdHJpbmcubGVuZ3RoIC0gMikpO1xuXHR9XG5cblx0Y29uc3QgdHJpbUNoZWNrOiBzdHJpbmcgPSB0ZXN0U3RyaW5nLnRyaW0oKTtcblx0Y29uc3QgZmlyc3RDaGFyOiBzdHJpbmcgPSB0cmltQ2hlY2suY2hhckF0KDApO1xuXHRpZiAoZmlyc3RDaGFyID09PSB0cmltQ2hlY2suYXQoLTEpICYmIChmaXJzdENoYXIgPT09IFwiJ1wiIHx8IGZpcnN0Q2hhciA9PT0gJ1wiJykpIHtcblx0XHRyZXR1cm4gdHJpbUNoZWNrLnNsaWNlKDEsIDEgKyB0cmltQ2hlY2subGVuZ3RoIC0gMik7XG5cdH1cblxuXHRyZXR1cm4gdGVzdFN0cmluZy50cmltKCk7XG59O1xuXG4vLyDmjZXojrdDU1PmlofmnKzkuK3nrKblkIhgPHtPUFRJT05TLndpa2lUZXh0S2V5fT4gIHsgY29udGVudO+8mlwiWFhYXCIgfWDmqKHlvI/nmoTlrZfnrKbkuLJcbmNvbnN0IGx1YUdldENvbnRlbnRUZXh0ID0gKGlucHV0U3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRsZXQgd2lraXRleHQ6IHN0cmluZyA9ICcnO1xuXG5cdHRyeSB7XG5cdFx0aW5wdXRTdHJpbmcucmVwbGFjZShcblx0XHRcdG5ldyBSZWdFeHAoYCR7T1BUSU9OUy53aWtpVGV4dEtleX1cXFxccypcXFxce1teY1xcXFx9XSpjb250ZW50XFxcXHMqOlxcXFxzKlteXFxuXSpgLCAnZycpLFxuXHRcdFx0KHN1YnN0cmluZzogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRcdFx0Y29uc3QgdGVtcFRleHQ6IHN0cmluZyA9ICgvY29udGVudFxccyo6XFxzKlteXFxuXSovLmV4ZWMoc3Vic3RyaW5nKSB8fCBbJ2NvbnRlbnQ6J10pWzBdXG5cdFx0XHRcdFx0LnJlcGxhY2UoL15bXFxzO31dK3xbXFxzO31dKyQvZywgJycpXG5cdFx0XHRcdFx0LnJlcGxhY2UoL1xccypjb250ZW50XFxzKjpcXHMqLywgJycpO1xuXG5cdFx0XHRcdGlmICh3aWtpdGV4dCkge1xuXHRcdFx0XHRcdHdpa2l0ZXh0ICs9ICdcXG4nO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0d2lraXRleHQgKz0gbHVhR2V0U3RyaW5nKHRlbXBUZXh0KTtcblxuXHRcdFx0XHRyZXR1cm4gc3Vic3RyaW5nO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdHJldHVybiB3aWtpdGV4dC50cmltKCk7XG59O1xuXG4vLyDmjZXojrflrZfnrKbkuLLljJbnmoTlr7nosaHkuK3nrKblkIhgPHtPUFRJT05TLndpa2lUZXh0S2V5fT7vvJ1YWFhg5oiWYDx7T1BUSU9OUy53aWtpVGV4dEtleX0+77yaWFhYYOaooeW8j+eahOWtl+espuS4siAo5rOo6YeK5Lul5YWo6KeS5a2X56ym5Luj5pu/77yM6YG/5YWN6KKr5o2V6I63KVxuY29uc3QgbHVhR2V0T2JqVGV4dCA9IChpbnB1dFN0cmluZzogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0bGV0IHdpa2l0ZXh0OiBzdHJpbmcgPSAnJztcblxuXHR0cnkge1xuXHRcdGlucHV0U3RyaW5nLnJlcGxhY2UoXG5cdFx0XHRuZXcgUmVnRXhwKGAke09QVElPTlMud2lraVRleHRLZXl9XFxcXHMqW1xcXFw9Ol1cXFxccypbXlxcbl0qYCwgJ2cnKSxcblx0XHRcdChzdWJzdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0XHRcdGNvbnN0IHRlbXBUZXh0OiBzdHJpbmcgPSBzdWJzdHJpbmdcblx0XHRcdFx0XHQucmVwbGFjZSgvXltcXHM7fV0rfFtcXHM7fV0rJC9nLCAnJylcblx0XHRcdFx0XHQucmVwbGFjZShuZXcgUmVnRXhwKGAke09QVElPTlMud2lraVRleHRLZXl9XFxcXHMqW1xcXFw9Ol1cXFxccypgKSwgJycpO1xuXG5cdFx0XHRcdGlmICh3aWtpdGV4dCkge1xuXHRcdFx0XHRcdHdpa2l0ZXh0ICs9ICdcXG4nO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0d2lraXRleHQgKz0gbHVhR2V0U3RyaW5nKHRlbXBUZXh0KTtcblxuXHRcdFx0XHRyZXR1cm4gc3Vic3RyaW5nO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdHJldHVybiB3aWtpdGV4dC50cmltKCk7XG59O1xuXG4vLyDliIbmnpBDU1PkuK3nrKblkIjmnaHku7bnmoR3aWtpdGV4dFxuY29uc3QgbHVhR2V0Q1NTd2lraXRleHQgPSAoaW5wdXRTdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdGxldCB3aWtpdGV4dDogc3RyaW5nID0gJyc7XG5cblx0Y29uc3QgY3NzVGV4dDogc3RyaW5nID1cblx0XHQoaW5wdXRTdHJpbmcgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MVGV4dEFyZWFFbGVtZW50PigndGV4dGFyZWFbbmFtZT13cFRleHRib3gxXScpPy52YWx1ZSkgPz8gJyc7XG5cdGlmICghY3NzVGV4dC50cmltKCkpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHQvLyDljLnphY0gPHtPUFRJT05TLndpa2lUZXh0S2V5fT4geyBjb250ZW5077yaXCJYWFhcIiB9IOaooeW8j1xuXHR3aWtpdGV4dCA9IGx1YUFkZFRleHQod2lraXRleHQsIGx1YUdldENvbnRlbnRUZXh0KGNzc1RleHQpLCB0cnVlKTtcblx0Ly8g5Yy56YWNIC8qIDx7T1BUSU9OUy53aWtpVGV4dEtleX0+77yaWFhYICovIOaooeW8j1xuXHR3aWtpdGV4dCA9IGx1YUFkZFRleHQod2lraXRleHQsIGx1YUdldE9ialRleHQoY3NzVGV4dCksIHRydWUpO1xuXG5cdHJldHVybiB3aWtpdGV4dC50cmltKCk7XG59O1xuXG4vLyDliIbmnpBKU09O5Lit56ym5ZCI5p2h5Lu255qEd2lraXRleHRcbmNvbnN0IGx1YUdldEpTT053aWtpdGV4dCA9IChpbnB1dFN0cmluZzogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0bGV0IHdpa2l0ZXh0OiBzdHJpbmcgPSAnJztcblxuXHRjb25zdCBKU09OVGV4dDogc3RyaW5nID1cblx0XHQoaW5wdXRTdHJpbmcgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MVGV4dEFyZWFFbGVtZW50PigndGV4dGFyZWFbbmFtZT13cFRleHRib3gxXScpPy52YWx1ZSkgPz8gJyc7XG5cdGlmICghSlNPTlRleHQudHJpbSgpKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0dHJ5IHtcblx0XHRjb25zdCBqc29uRGF0YSA9IEpTT04ucGFyc2UoSlNPTlRleHQpIGFzIG9iamVjdDtcblx0XHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhqc29uRGF0YSkpIHtcblx0XHRcdGlmIChuZXcgUmVnRXhwKE9QVElPTlMud2lraVRleHRLZXkpLnRlc3Qoa2V5KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdHdpa2l0ZXh0ID0gbHVhQWRkVGV4dCh3aWtpdGV4dCwgdmFsdWUpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyDoi6XplK7lgLzmmK/lr7nosaFcblx0XHRcdGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKHZhbHVlIGFzIG9iamVjdCkpIHtcblx0XHRcdFx0XHRpZiAobmV3IFJlZ0V4cChPUFRJT05TLndpa2lUZXh0S2V5KS50ZXN0KGspICYmIHR5cGVvZiB2ID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdFx0d2lraXRleHQgPSBsdWFBZGRUZXh0KHdpa2l0ZXh0LCB2KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdHJldHVybiB3aWtpdGV4dC50cmltKCk7XG59O1xuXG4vLyDliIbmnpBKYXZhU2NyaXB05Lit56ym5ZCI5p2h5Lu255qEd2lraXRleHRcbmNvbnN0IGx1YUdldEpTd2lraXRleHQgPSAoaW5wdXRTdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdGxldCB3aWtpdGV4dDogc3RyaW5nID0gJyc7XG5cblx0Y29uc3QganNUZXh0OiBzdHJpbmcgPVxuXHRcdChpbnB1dFN0cmluZyB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KCd0ZXh0YXJlYVtuYW1lPXdwVGV4dGJveDFdJyk/LnZhbHVlKSA/PyAnJztcblx0aWYgKCFqc1RleHQudHJpbSgpKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0d2lraXRleHQgPSBsdWFBZGRUZXh0KHdpa2l0ZXh0LCBsdWFHZXRPYmpUZXh0KGpzVGV4dCksIHRydWUpO1xuXG5cdHJldHVybiB3aWtpdGV4dC50cmltKCk7XG59O1xuXG5leHBvcnQge2x1YUdldENTU3dpa2l0ZXh0LCBsdWFHZXRKU09Od2lraXRleHQsIGx1YUdldEpTd2lraXRleHR9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgU3BlY2lhbFdpa2l0ZXh0LyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiY29uc3Qge3dnVXNlckxhbmd1YWdlLCB3Z1VzZXJWYXJpYW50fSA9IG13LmNvbmZpZy5nZXQoKTtcblxuY29uc3QgZ2V0TGFuZ3VhZ2UgPSAoKTogc3RyaW5nID0+IHtcblx0Y29uc3QgbGFuZzogc3RyaW5nID0gd2dVc2VyTGFuZ3VhZ2U7XG5cblx0aWYgKGxhbmcuaW5jbHVkZXMoJ3poJykpIHtcblx0XHRyZXR1cm4gd2dVc2VyVmFyaWFudCBhcyBzdHJpbmc7XG5cdH1cblxuXHRyZXR1cm4gbGFuZztcbn07XG5cbmV4cG9ydCB7Z2V0TGFuZ3VhZ2V9O1xuIiwgImltcG9ydCB7bG9hZGluZ0ZhaWxOb3RpY2UsIHJlbW92ZUxvYWRpbmdOb3RpY2V9IGZyb20gJy4uL25vdGljZSc7XG5pbXBvcnQge2FkZFBhcnNlZFdpa2l0ZXh0fSBmcm9tICcuLi91dGlsL2FkZFBhcnNlZFdpa2l0ZXh0JztcbmltcG9ydCB7YXBpfSBmcm9tICcuLi9hcGknO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSAnLi4vdXRpbC9nZXRMYW5ndWFnZSc7XG5cbmNvbnN0IHtza2lufSA9IG13LmNvbmZpZy5nZXQoKTtcblxuLy8g5Yqg5YWl6aKE6KeI5YaF5a65XG5jb25zdCBtd0FkZFdpa2lUZXh0ID0gYXN5bmMgKHdpa2l0ZXh0OiBzdHJpbmcsIHBhZ2VOYW1lOiBzdHJpbmcsIGlzUHJldmlldzogYm9vbGVhbik6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRpZiAod2lraXRleHQudHJpbSgpKSB7XG5cdFx0Y29uc3QgcGFyYW1zOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0Ly8g6YG/5YWN5YaF5a656YeN5aSNXG5cdFx0XHR0aXRsZTogcGFnZU5hbWUsXG5cdFx0XHRjb250ZW50bW9kZWw6ICd3aWtpdGV4dCcsXG5cdFx0XHR0ZXh0OiB3aWtpdGV4dCxcblx0XHRcdHByb3A6ICd0ZXh0Jyxcblx0XHRcdHVzZWxhbmc6IGdldExhbmd1YWdlKCksXG5cdFx0XHR1c2Vza2luOiBza2luLFxuXHRcdH07XG5cdFx0aWYgKGlzUHJldmlldykge1xuXHRcdFx0cGFyYW1zLmRpc2FibGVlZGl0c2VjdGlvbiA9IHRydWU7XG5cdFx0XHRwYXJhbXMucHJldmlldyA9IHRydWU7XG5cdFx0fVxuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cdFx0XHRpZiAoIWRhdGE/LlsncGFyc2UnXT8udGV4dCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHBhcnNlZFdpa2l0ZXh0OiBzdHJpbmcgPSAoZGF0YVsncGFyc2UnXS50ZXh0IGFzIHN0cmluZykudHJpbSgpO1xuXG5cdFx0XHRpZiAocGFyc2VkV2lraXRleHQpIHtcblx0XHRcdFx0YWRkUGFyc2VkV2lraXRleHQocGFyc2VkV2lraXRleHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVtb3ZlTG9hZGluZ05vdGljZSgpO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0bG9hZGluZ0ZhaWxOb3RpY2UoKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmVtb3ZlTG9hZGluZ05vdGljZSgpO1xuXHR9XG59O1xuXG4vLyDliqDlhaXpooTop4jnmoRMdWHlhoXlrrlcbmNvbnN0IG13QWRkTHVhVGV4dCA9IGFzeW5jIChcblx0d2lraXRleHQ6IHN0cmluZyxcblx0cGFnZU5hbWU6IHN0cmluZyxcblx0aXNQcmV2aWV3OiBib29sZWFuLFxuXHRjYWxsQmFjaz86IChhcmc6IHN0cmluZykgPT4gSlF1ZXJ5IHwgSFRNTEVsZW1lbnQgfCB2b2lkXG4pID0+IHtcblx0Y29uc3QgdGVtcE1vZHVsZU5hbWU6IHN0cmluZyA9ICdBZGRUZXh0L1RlbXAvTW9kdWxlL0RhdGEubHVhJztcblx0Y29uc3QgbW9kdWxlQ2FsbDoge1xuXHRcdHdpa2l0ZXh0OiBzdHJpbmc7XG5cdFx0cGFnZU5hbWU6IHN0cmluZztcblx0fSA9IHtcblx0XHR3aWtpdGV4dDogJyNpbnZva2U6Jyxcblx0XHQvLyDliIblvIDmnaXvvIzpgb/lhY3ooqvliIbliLBbWzpDYXRlZ29yeTrmnInohJrmnKzplJnor6/nmoTpobXpnaJdXVxuXHRcdHBhZ2VOYW1lOiAnTW9kdWxlOicsXG5cdH07XG5cblx0aWYgKHdpa2l0ZXh0LnRyaW0oKSkge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBwYXJhbXM6IEFwaVBhcnNlUGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHRpdGxlOiBwYWdlTmFtZSxcblx0XHRcdFx0Y29udGVudG1vZGVsOiAnd2lraXRleHQnLFxuXHRcdFx0XHR0ZW1wbGF0ZXNhbmRib3h0aXRsZTogbW9kdWxlQ2FsbC5wYWdlTmFtZSArIHRlbXBNb2R1bGVOYW1lLFxuXHRcdFx0XHQvLyDliJvlu7rkuLTml7ZMdWEgTW9kdWxlXG5cdFx0XHRcdHRlbXBsYXRlc2FuZGJveHRleHQ6IGByZXR1cm4ge1xuXHRtYWluID0gZnVuY3Rpb24oKVxuXHRcdHhwY2FsbChcblx0XHRcdGZ1bmN0aW9uKClcblx0XHRcdFx0JHt3aWtpdGV4dH1cblx0XHRcdGVuZCxcblx0XHRcdGZ1bmN0aW9uKClcblx0XHRcdGVuZFxuXHRcdClcblx0XHRsb2NhbCBtb2R1bGVXaWtpdGV4dCA9IHBhY2thZ2UubG9hZGVkW1wiTW9kdWxlOk1vZHVsZSB3aWtpdGV4dFwiXVxuXHRcdGlmIG1vZHVsZVdpa2l0ZXh0IHRoZW5cblx0XHRcdGxvY2FsIHdpa2l0ZXh0ID0gbW9kdWxlV2lraXRleHQubWFpbigpXG5cdFx0XHRpZiBtdy50ZXh0LnRyaW0od2lraXRleHQpIH49IFwiXCIgdGhlblxuXHRcdFx0XHRyZXR1cm4gbXcuZ2V0Q3VycmVudEZyYW1lKCk6cHJlcHJvY2Vzcyhtb2R1bGVXaWtpdGV4dC5tYWluKCkpXG5cdFx0XHRlbmRcblx0XHRlbmRcblx0XHRyZXR1cm4gXCJcIlxuXHRlbmRcbn1gLFxuXHRcdFx0XHR0ZW1wbGF0ZXNhbmRib3hjb250ZW50bW9kZWw6ICdTY3JpYnVudG8nLFxuXHRcdFx0XHR0ZW1wbGF0ZXNhbmRib3hjb250ZW50Zm9ybWF0OiAndGV4dC9wbGFpbicsXG5cdFx0XHRcdHRleHQ6IGB7eyR7bW9kdWxlQ2FsbC53aWtpdGV4dH0ke3RlbXBNb2R1bGVOYW1lfXxtYWlufX1gLFxuXHRcdFx0XHRwcm9wOiAndGV4dCcsXG5cdFx0XHRcdHVzZWxhbmc6IGdldExhbmd1YWdlKCksXG5cdFx0XHRcdHVzZXNraW46IHNraW4sXG5cdFx0XHR9O1xuXHRcdFx0aWYgKGlzUHJldmlldykge1xuXHRcdFx0XHRwYXJhbXMucHJldmlldyA9IHRydWU7XG5cdFx0XHRcdHBhcmFtcy5kaXNhYmxlZWRpdHNlY3Rpb24gPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXHRcdFx0aWYgKCFkYXRhPy5bJ3BhcnNlJ10/LnRleHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBwYXJzZWRXaWtpdGV4dDogc3RyaW5nID0gKGRhdGFbJ3BhcnNlJ10udGV4dCBhcyBzdHJpbmcpLnRyaW0oKTtcblxuXHRcdFx0aWYgKCFwYXJzZWRXaWtpdGV4dCkge1xuXHRcdFx0XHRyZW1vdmVMb2FkaW5nTm90aWNlKCk7XG5cdFx0XHRcdC8vIOiLpeWcqOi/meS4quS4tOaXtuaooeWdl+S4reWHuumUmeWImeWPlua2iFxuXHRcdFx0fSBlbHNlIGlmICgkKHBhcnNlZFdpa2l0ZXh0KS5maW5kKCcuc2NyaWJ1bnRvLWVycm9yJykudGV4dCgpLnNlYXJjaCh0ZW1wTW9kdWxlTmFtZSkpIHtcblx0XHRcdFx0cmVtb3ZlTG9hZGluZ05vdGljZSgpO1xuXHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgY2FsbEJhY2sgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Y2FsbEJhY2socGFyc2VkV2lraXRleHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YWRkUGFyc2VkV2lraXRleHQocGFyc2VkV2lraXRleHQpO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0bG9hZGluZ0ZhaWxOb3RpY2UoKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmVtb3ZlTG9hZGluZ05vdGljZSgpO1xuXHR9XG59O1xuXG5leHBvcnQge213QWRkTHVhVGV4dCwgbXdBZGRXaWtpVGV4dH07XG4iLCAiaW1wb3J0IHtsdWFHZXRDU1N3aWtpdGV4dCwgbHVhR2V0SlNPTndpa2l0ZXh0LCBsdWFHZXRKU3dpa2l0ZXh0fSBmcm9tICcuL2x1YUdldFRleHQnO1xuXG5jb25zdCB7d2dQYWdlQ29udGVudE1vZGVsfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuLy8g5Yik5pat5piv5ZCm5Li6THVhXG5jb25zdCBsdWFDaGVjayA9IChpbnB1dFN0cmluZzogc3RyaW5nID0gJycsIGNvbnRlbnRNb2RlbDogc3RyaW5nID0gd2dQYWdlQ29udGVudE1vZGVsKTogc3RyaW5nID0+IHtcblx0Ly8g5qC55o2u6aG16Z2i5YaF5a655qih5Z6L6YCJ55So6YCC5b2T55qE6Kej5p6Q5qih5byPXG5cdHN3aXRjaCAoY29udGVudE1vZGVsLnRvTG93ZXJDYXNlKCkpIHtcblx0XHRjYXNlICdqc29uJzpcblx0XHRcdHJldHVybiBsdWFHZXRKU09Od2lraXRleHQoaW5wdXRTdHJpbmcpO1xuXHRcdGNhc2UgJ2pzJzpcblx0XHRjYXNlICdqYXZhc2NyaXB0Jzpcblx0XHRjYXNlICd0ZXh0Jzpcblx0XHRcdHJldHVybiBsdWFHZXRKU3dpa2l0ZXh0KGlucHV0U3RyaW5nKTtcblx0XHRjYXNlICdjc3MnOlxuXHRcdGNhc2UgJ3Nhbml0aXplZC1jc3MnOlxuXHRcdFx0cmV0dXJuIGx1YUdldENTU3dpa2l0ZXh0KGlucHV0U3RyaW5nKTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuICcnO1xuXHR9XG59O1xuXG5leHBvcnQge2x1YUNoZWNrfTtcbiIsICJpbXBvcnQge2FkZFBhcnNlZFdpa2l0ZXh0fSBmcm9tICcuLi91dGlsL2FkZFBhcnNlZFdpa2l0ZXh0JztcbmltcG9ydCB7YXBpfSBmcm9tICcuLi9hcGknO1xuaW1wb3J0IHtjaGVja0VsZW1lbnRFeGlzdH0gZnJvbSAnLi4vdXRpbC9jaGVja0VsZW1lbnRFeGlzdCc7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tICcuLi91dGlsL2dldExhbmd1YWdlJztcbmltcG9ydCB7bHVhQ2hlY2t9IGZyb20gJy4uL2x1YS9sdWFDaGVjayc7XG5pbXBvcnQge213QWRkV2lraVRleHR9IGZyb20gJy4vbXdBZGRUZXh0JztcbmltcG9ydCB7cmVtb3ZlTG9hZGluZ05vdGljZX0gZnJvbSAnLi4vbm90aWNlJztcblxuY29uc3Qge3NraW4sIHdnUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbi8vIOWKoOWFpee8lui+keaPkOekuu+8iOiLpeWtmOWcqO+8iVxuY29uc3QgbXdBcHBseU5vdGljZSA9IGFzeW5jIChjdXJyZW50UGFnZU5hbWU6IHN0cmluZywgcGFnZVN1Yk5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHBhcmFtczogQXBpUGFyc2VQYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdC8vIGdldCB0aGUgb3JpZ2luYWwgd2lraXRleHQgY29udGVudCBvZiBhIHBhZ2Vcblx0XHRcdHRpdGxlOiBjdXJyZW50UGFnZU5hbWUgKyBwYWdlU3ViTmFtZSxcblx0XHRcdHRleHQ6IGB7eyNpbnZva2U6U3BlY2lhbCB3aWtpdGV4dC9UZW1wbGF0ZXxnZXROb3RpY2VzfCR7Y3VycmVudFBhZ2VOYW1lfXwke3BhZ2VTdWJOYW1lfX19YCxcblx0XHRcdHByb3A6ICd0ZXh0Jyxcblx0XHRcdHVzZWxhbmc6IGdldExhbmd1YWdlKCksXG5cdFx0XHR1c2Vza2luOiBza2luLFxuXHRcdFx0c21heGFnZTogNjAwLFxuXHRcdFx0bWF4YWdlOiA2MDAsXG5cdFx0fTtcblxuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cdFx0aWYgKCFkYXRhPy5bJ3BhcnNlJ10/LnRleHQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBodG1sID0gZGF0YVsncGFyc2UnXS50ZXh0IGFzIHN0cmluZztcblx0XHRpZiAoJChodG1sKS50ZXh0KCkudHJpbSgpKSB7XG5cdFx0XHRhZGRQYXJzZWRXaWtpdGV4dChodG1sKTtcblx0XHR9XG5cdH0gY2F0Y2gge31cbn07XG5cbi8vIOS7jumhtemdouW9k+WJjeWOhuWPsueJiOacrOWPluWHuiA8e09QVElPTlMud2lraVRleHRLZXl9PlxuY29uc3QgbXdBcHBseVJldmlzaW9uID0gYXN5bmMgKGN1cnJlbnRQYWdlTmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcGFyYW1zOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0Ly8gZ2V0IHRoZSBvcmlnaW5hbCB3aWtpdGV4dCBjb250ZW50IG9mIGEgcGFnZVxuXHRcdFx0b2xkaWQ6IHdnUmV2aXNpb25JZCxcblx0XHRcdHByb3A6ICd3aWtpdGV4dCcsXG5cdFx0XHRzbWF4YWdlOiA2MDAsXG5cdFx0XHRtYXhhZ2U6IDYwMCxcblx0XHR9O1xuXG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblx0XHRpZiAoIWRhdGE/LlsncGFyc2UnXT8ud2lraXRleHQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRsZXQgcGFnZUNvbnRlbnQ6IHN0cmluZyA9IGx1YUNoZWNrKChkYXRhWydwYXJzZSddLndpa2l0ZXh0IGFzIHN0cmluZykudHJpbSgpKTtcblx0XHRwYWdlQ29udGVudCA9XG5cdFx0XHQoY2hlY2tFbGVtZW50RXhpc3QoJyNtdy1jbGVhcnlvdXJjYWNoZScpXG5cdFx0XHRcdD8gJ3t7I2ludm9rZTpTcGVjaWFsIHdpa2l0ZXh0L1RlbXBsYXRlfGludHxjbGVhcnlvdXJjYWNoZX19J1xuXHRcdFx0XHQ6ICcnKSArIHBhZ2VDb250ZW50O1xuXG5cdFx0aWYgKHBhZ2VDb250ZW50LnRyaW0oKSkge1xuXHRcdFx0dm9pZCBtd0FkZFdpa2lUZXh0KHBhZ2VDb250ZW50LCBjdXJyZW50UGFnZU5hbWUsIHRydWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmVMb2FkaW5nTm90aWNlKCk7XG5cdFx0fVxuXHR9IGNhdGNoIHtcblx0XHRyZW1vdmVMb2FkaW5nTm90aWNlKCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7bXdBcHBseU5vdGljZSwgbXdBcHBseVJldmlzaW9ufTtcbiIsICJpbXBvcnQge2dlbmVyYXRlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFsbE13Q29uZmlnOiBSZXR1cm5UeXBlPHR5cGVvZiBtdy5jb25maWcuZ2V0PiA9IG13LmNvbmZpZy5nZXQoKTtcblxuLy8g5qOA5p+lTWVkaWFXaWtp55qE6K6+572uXG5jb25zdCBjaGVja013Q29uZmlnID0gKGNvbmZpZ0tleTogc3RyaW5nLCBleHBlY3RDb25maWc6IHN0cmluZyB8IHN0cmluZ1tdKTogYm9vbGVhbiA9PiB7XG5cdGxldCBtd0NvbmZpZzogdW5rbm93biA9IGFsbE13Q29uZmlnW2NvbmZpZ0tleV07XG5cdGlmICghbXdDb25maWcpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWJhc2UtdG8tc3RyaW5nXG5cdG13Q29uZmlnID0gU3RyaW5nKG13Q29uZmlnKS50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcblx0aWYgKCFtd0NvbmZpZykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJldHVybiBnZW5lcmF0ZUFycmF5KGV4cGVjdENvbmZpZykuaW5jbHVkZXMobXdDb25maWcgYXMgc3RyaW5nKTtcbn07XG5cbmV4cG9ydCB7Y2hlY2tNd0NvbmZpZ307XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuXG4vLyDmo4Dmn6XmmK/lkKbmnInpooTop4jnmoTlv4XopoHmgKdcbmNvbnN0IGNoZWNrTmVlZFByZXZpZXcgPSAoKTogYm9vbGVhbiA9PiB7XG5cdHJldHVybiBkb2N1bWVudC5ib2R5LmlubmVySFRNTC5zZWFyY2goT1BUSU9OUy53aWtpVGV4dEtleSkgPiAtMTtcbn07XG5cbmV4cG9ydCB7Y2hlY2tOZWVkUHJldmlld307XG4iLCAiaW1wb3J0IHthZGRMb2FkaW5nTm90aWNlLCBub3RpY2VMb2FkaW5nRWxlbWVudCwgcmVtb3ZlTG9hZGluZ05vdGljZX0gZnJvbSAnLi4vbm90aWNlJztcbmltcG9ydCB7bHVhR2V0Q1NTd2lraXRleHQsIGx1YUdldEpTT053aWtpdGV4dH0gZnJvbSAnLi4vbHVhL2x1YUdldFRleHQnO1xuaW1wb3J0IHttd0FkZEx1YVRleHQsIG13QWRkV2lraVRleHR9IGZyb20gJy4vbXdBZGRUZXh0JztcbmltcG9ydCB7bXdBcHBseU5vdGljZSwgbXdBcHBseVJldmlzaW9ufSBmcm9tICcuL213QXBwbHknO1xuaW1wb3J0IHtjaGVja0VsZW1lbnRFeGlzdH0gZnJvbSAnLi4vdXRpbC9jaGVja0VsZW1lbnRFeGlzdCc7XG5pbXBvcnQge2NoZWNrTXdDb25maWd9IGZyb20gJy4uL3V0aWwvY2hlY2tNd0NvbmZpZyc7XG5pbXBvcnQge2NoZWNrTmVlZFByZXZpZXd9IGZyb20gJy4uL3V0aWwvY2hlY2tOZWVkUHJldmlldyc7XG5pbXBvcnQge2x1YUNoZWNrfSBmcm9tICcuLi9sdWEvbHVhQ2hlY2snO1xuXG5jb25zdCB7d2dDYW5vbmljYWxOYW1lc3BhY2UsIHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lLCB3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuLy8g57uZ6aG16Z2i5re75Yqg6aKE6KeIXG5jb25zdCBtd0FkZFByZXZpZXcgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdC8vIOmihOiniOaooeW8j+WPqumAgueUqOS6juS7peS4i+mhtemdouWGheWuueaooeWei1xuXHRpZiAoY2hlY2tNd0NvbmZpZygnd2dQYWdlQ29udGVudE1vZGVsJywgWydqYXZhc2NyaXB0JywgJ2pzJywgJ2pzb24nLCAndGV4dCcsICdjc3MnLCAnc2FuaXRpemVkLWNzcyddKSkge1xuXHRcdC8vIOaooeW8jzHvvJrpobXpnaLpooTop4hcblx0XHRpZiAoY2hlY2tFbGVtZW50RXhpc3QoJy5wcmV2aWV3bm90ZScpKSB7XG5cdFx0XHQvLyDmo4Dmn6XmmK/lkKbkuLrpooTop4jmqKHlvI9cblx0XHRcdC8vIOmihOiniOacieWPr+iDveaYr+WcqOmihOiniOWFtuS7luadoeebrlxuXHRcdFx0Y29uc3QgcGF0aFBhdGg6IHN0cmluZyA9IGRlY29kZVVSSShtdy51dGlsLmdldFVybCh3Z1BhZ2VOYW1lKSkucmVwbGFjZShcblx0XHRcdFx0bmV3IFJlZ0V4cChgXlxcXFwvPyR7bXcudXRpbC5nZXRVcmwoJycpLm1hdGNoKC9bYS16XSsvKT8uWzBdID8/ICcnfVxcXFwvYCksXG5cdFx0XHRcdCcnXG5cdFx0XHQpO1xuXG5cdFx0XHQvLyDoi6XpooTop4jnmoTpobXpnaLlubbpnZ7mnKzouqvvvIzliJnkuI3mmL7npLrpooTop4hcblx0XHRcdGlmIChwYXRoUGF0aCAhPT0gd2dQYWdlTmFtZSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHdpa2l0ZXh0OiBzdHJpbmcgPSBsdWFDaGVjaygpO1xuXHRcdFx0aWYgKHdpa2l0ZXh0KSB7XG5cdFx0XHRcdC8vIOiLpeino+aekOe7k+aenOmdnuepuuaJjeaUvue9rumihOiniFxuXHRcdFx0XHRhZGRMb2FkaW5nTm90aWNlKCk7IC8vIOaUvue9ruaPkOekuu+8jOaPkOekuuS9v+eUqOiAheetieW+hUFKQVhcblx0XHRcdFx0dm9pZCBtd0FkZFdpa2lUZXh0KHdpa2l0ZXh0LCB3Z1BhZ2VOYW1lLCB0cnVlKTsgLy8g6Iul5Y+W5b6XIF9hZGRUZXh0IOWImeaYvuekuumihOiniFxuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoIWNoZWNrRWxlbWVudEV4aXN0KCcubXctX2FkZFRleHQtY29udGVudCcpICYmIGNoZWNrTXdDb25maWcoJ3dnQWN0aW9uJywgJ3ZpZXcnKSkge1xuXHRcdFx0Ly8g5qih5byPMu+8muS4jeaUr+aMgeaYvuekuueahOeJueauiumhtemdolxuXHRcdFx0Ly8g57uP5p+l77yM5LiN5q2i5piv5qih5p2/5qC35byP77yM5omA5pyJ5pyq5bWM5YWlJyNtdy1jbGVhcnlvdXJjYWNoZSfnmoTpobXpnaLnmobml6Dms5XmraPluLjmmL7npLpcblx0XHRcdGlmICghY2hlY2tOZWVkUHJldmlldygpKSB7XG5cdFx0XHRcdHJldHVybjsgLy8g5rKh5pyJ6aKE6KeI5b+F6KaB5pe277yM55u05o6l5YGc5q2i56iL5bqP77yM5LiN57un57ut5Yik5pat77yM5Lul5o+Q6auY5pWI546HXG5cdFx0XHR9XG5cblx0XHRcdC8vIOiLpeW3suaciSNtdy1jbGVhcnlvdXJjYWNoZeWImeWFiOa4heaOie+8jOWQpuWImeS8muWHuueOsOS4pOS4qk1lZGlhV2lraTpDbGVhcnlvdXJjYWNoZVxuXHRcdFx0JGJvZHkuZmluZCgnI213LWNsZWFyeW91cmNhY2hlJykuaHRtbCgnJyk7XG5cblx0XHRcdGlmICghY2hlY2tFbGVtZW50RXhpc3QoJ3RleHRhcmVhW25hbWU9d3BUZXh0Ym94MV0nKSkge1xuXHRcdFx0XHQvLyDpnZ7nvJbovpHmqKHlvI/miY3miafooYwgKOmihOiniOS9v+eUqOS4iuaWueeahGlm5Yy65Z2XKVxuXHRcdFx0XHRhZGRMb2FkaW5nTm90aWNlKCk7IC8vIOaUvue9ruaPkOekuu+8jOaPkOekuuS9v+eUqOiAheetieW+hUFKQVhcblx0XHRcdFx0dm9pZCBtd0FwcGx5UmV2aXNpb24od2dQYWdlTmFtZSk7IC8vIOS4uuS6huiuqeWOhuWPsueJiOacrOato+W4uOaYvuekuu+8jOS9v+eUqHdnUmV2aXNpb25JZOWPluW+l+WGheWuuVxuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoY2hlY2tFbGVtZW50RXhpc3QoJyNtdy1yZXZpc2lvbi1pbmZvJykgJiYgY2hlY2tNd0NvbmZpZygnd2dBY3Rpb24nLCAndmlldycpKSB7XG5cdFx0XHQvLyDmqKHlvI8z77ya6aG16Z2i5Y6G5Y+y54mI5pys5qOA6KeG77ya5aaC6ZyA5aSN5p+l55qE6aG555uu5Li66aG16Z2i5Y6G5Y+y54mI5pys77yM5pys5bel5YW35o+Q5L6b6aG16Z2i5Y6G5Y+y54mI5pys5YaF5a655pi+56S65pSv5oyBXG5cdFx0XHQvLyDmnInltYzlhaUnI213LWNsZWFyeW91cmNhY2hlJ+eahOmhtemdoueahOWOhuWPsueJiOacrOS8muWPquiDveaYvuekuuacgOaWsOeJiOeahCBfYWRkVGV4dCDlm6DmraTmiafooYzkv67mraNcblx0XHRcdGlmICghY2hlY2tFbGVtZW50RXhpc3QoJ3RleHRhcmVhW25hbWU9d3BUZXh0Ym94MV0nKSkge1xuXHRcdFx0XHQvLyDpnZ7nvJbovpHmqKHlvI/miY3miafooYwgKOmihOiniOS9v+eUqOS4iuaWueeahGlm5Yy65Z2XKVxuXHRcdFx0XHQkYm9keS5maW5kKCcjbXctY2xlYXJ5b3VyY2FjaGUnKS5odG1sKG5vdGljZUxvYWRpbmdFbGVtZW50KTsgLy8g5beu5byC5qih5byP77yI5ZCr5qOA6ZiF5L+u6K6i54mI5pys5Yig6Zmk77yJ55qE5o+S5YWl54K55LiN5ZCMXG5cdFx0XHRcdHZvaWQgbXdBcHBseVJldmlzaW9uKHdnUGFnZU5hbWUpOyAvLyDkuLrkuoborqnnibnlrprniYjmnKzmraPluLjmmL7npLrvvIzkvb/nlKh3Z1JldmlzaW9uSWTlj5blvpflhoXlrrlcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlTG9hZGluZ05vdGljZSgpO1xuXHRcdH1cblx0fSBlbHNlIGlmIChjaGVja013Q29uZmlnKCd3Z1BhZ2VDb250ZW50TW9kZWwnLCBbJ3NjcmlidW50bycsICdsdWEnXSkpIHtcblx0XHQvLyDmqKHlnZfpooTop4jlip/og71cblx0XHRpZiAoIWNoZWNrTmVlZFByZXZpZXcoKSkge1xuXHRcdFx0cmV0dXJuOyAvLyDmsqHmnInpooTop4jlv4XopoHml7bvvIznm7TmjqXlgZzmraLnqIvluo/vvIzkuI3nu6fnu63liKTmlq3vvIzku6Xmj5Dpq5jmlYjnjodcblx0XHR9XG5cblx0XHRpZiAoXG5cdFx0XHRjaGVja0VsZW1lbnRFeGlzdCgndGV4dGFyZWFbbmFtZT13cFRleHRib3gxXScpICYmXG5cdFx0XHRjaGVja0VsZW1lbnRFeGlzdCgndGFibGUuZGlmZicpICYmXG5cdFx0XHQhY2hlY2tFbGVtZW50RXhpc3QoJy5wcmV2aWV3bm90ZScpICYmXG5cdFx0XHQhY2hlY2tNd0NvbmZpZygnd2dBY3Rpb24nLCAndmlldycpXG5cdFx0KSB7XG5cdFx0XHQkKG5vdGljZUxvYWRpbmdFbGVtZW50KS5pbnNlcnRBZnRlcignI3dpa2lEaWZmJyk7XG5cdFx0XHR2b2lkIG13QWRkTHVhVGV4dChcblx0XHRcdFx0KCRib2R5LmZpbmQoJ3RleHRhcmVhW25hbWU9d3BUZXh0Ym94MV0nKS52YWwoKSBhcyBzdHJpbmcgfCB1bmRlZmluZWQpID8/ICcnLFxuXHRcdFx0XHR3Z1BhZ2VOYW1lLFxuXHRcdFx0XHR0cnVlXG5cdFx0XHQpO1xuXHRcdH1cblx0fSBlbHNlIGlmIChjaGVja0VsZW1lbnRFeGlzdCgnLm13LXVuZGVsZXRlLXJldmlzaW9uJykpIHtcblx0XHQvLyDmqKHlvI8077ya5bey5Yig6aG16Z2i6aKE6KeIXG5cdFx0Ly8g5bey5Yig5YaF5a656aG16Z2i5piv54m55q6K6aG16Z2i77yM5peg5rOV55So5bi46KeE5pa55byP5Yik5pat6aG16Z2i5YaF5a655qih5Z6LXG5cdFx0aWYgKCFjaGVja05lZWRQcmV2aWV3KCkpIHtcblx0XHRcdHJldHVybjsgLy8g5rKh5pyJ6aKE6KeI5b+F6KaB5pe277yM55u05o6l5YGc5q2i56iL5bqP77yM5LiN57un57ut5Yik5pat77yM5Lul5o+Q6auY5pWI546HXG5cdFx0fVxuXG5cdFx0aWYgKGNoZWNrRWxlbWVudEV4aXN0KFsnLm13LWhpZ2hsaWdodCcsICdwcmUnLCAnLm13LWpzb24nXSkpIHtcblx0XHRcdC8vIOehruiupOato+WcqOmihOiniOW3suWIoOWGheWuuVxuXHRcdFx0Y29uc3QgdGV4dGFyZWFDb250ZW50OiBzdHJpbmcgPSAkYm9keS5maW5kKCd0ZXh0YXJlYScpLnZhbCgpID8/ICcnOyAvLyDlsJ3or5Xlj5blvpflt7LliKDlhoXlrrnmupDku6PnoIFcblxuXHRcdFx0bGV0IHdpa2l0ZXh0OiBzdHJpbmcgPSBsdWFHZXRKU09Od2lraXRleHQodGV4dGFyZWFDb250ZW50KTtcblx0XHRcdHdpa2l0ZXh0IHx8PSBsdWFHZXRDU1N3aWtpdGV4dCh0ZXh0YXJlYUNvbnRlbnQpO1xuXG5cdFx0XHRpZiAod2lraXRleHQpIHtcblx0XHRcdFx0Ly8g6Iul5Y+W5b6XIF9hZGRUZXh0IOWImeaYvuekuumihOiniFxuXHRcdFx0XHRhZGRMb2FkaW5nTm90aWNlKCk7XG5cdFx0XHRcdHZvaWQgbXdBZGRXaWtpVGV4dCh3aWtpdGV4dCwgbXcuY29uZmlnLmdldCgnd2dSZWxldmFudFBhZ2VOYW1lJyksIHRydWUpO1xuXHRcdFx0fSBlbHNlIGlmICgvbW9kdWxlWyBfXXdpa2l0ZXh0LipfYWRkdGV4dC9pLnRlc3QoJGJvZHkuZmluZCgnLm13LXBhcnNlci1vdXRwdXQnKS50ZXh0KCkpKSB7XG5cdFx0XHRcdC8vIOWwneivlUx1Yeino+aekFxuXHRcdFx0XHQvLyDmnKzlip/og73nm67liY3mtYvor5XmraPluLjov5DkvZxcblx0XHRcdFx0Ly8g6Iul5ZOq5aSp6aKE6KeI5Y+I5aSx5pWI77yM6K+35Y+W5raI5rOo6YeK5LiL5pa56YKj6KGMXG5cdFx0XHRcdC8vIG13QWRkTHVhVGV4dCh0ZXh0YXJlYUNvbnRlbnQsIG13LmNvbmZpZy5nZXQoXCJ3Z1JlbGV2YW50UGFnZU5hbWVcIiksIHRydWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBlbHNlIGlmICghY2hlY2tFbGVtZW50RXhpc3QoJy5tdy1lZGl0bm90aWNlJykgJiYgY2hlY2tNd0NvbmZpZygnd2dDYW5vbmljYWxOYW1lc3BhY2UnLCAnc3BlY2lhbCcpKSB7XG5cdFx0Ly8g6Iul54m55q6K6aG16Z2i57y65LmP57yW6L6R5o+Q56S677yM5YiZ6KGl5LiK57yW6L6R5o+Q56S6ICjoi6XlrZjlnKgpXG5cdFx0Y29uc3QgcGFnZVN1Yk5hbWU6IHN0cmluZyA9IHdnUGFnZU5hbWUucmVwbGFjZSgvc3BlY2lhbDpbXi9dKy9pLCAnJyk7XG5cdFx0aWYgKHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lKSB7XG5cdFx0XHRjb25zdCBmdWxsUGFnZU5hbWU6IHN0cmluZyA9IGAke3dnQ2Fub25pY2FsTmFtZXNwYWNlfToke3dnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lfWA7XG5cdFx0XHR2b2lkIG13QXBwbHlOb3RpY2UoZnVsbFBhZ2VOYW1lLCBwYWdlU3ViTmFtZSk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJlbW92ZUxvYWRpbmdOb3RpY2UoKTsgLy8g6YO95LiN5piv55qE5oOF5Ya15YiZ5LiN5pi+56S66aKE6KeIXG5cdH1cbn07XG5cbmV4cG9ydCB7bXdBZGRQcmV2aWV3fTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHtjaGVja05lZWRQcmV2aWV3fSBmcm9tICcuL3V0aWwvY2hlY2tOZWVkUHJldmlldyc7XG5pbXBvcnQge2x1YUNoZWNrfSBmcm9tICcuL2x1YS9sdWFDaGVjayc7XG5pbXBvcnQge213QWRkTHVhVGV4dH0gZnJvbSAnLi9tdy9td0FkZFRleHQnO1xuaW1wb3J0IHtub3RpY2VMb2FkaW5nRWxlbWVudH0gZnJvbSAnLi9ub3RpY2UnO1xuXG5jb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbi8vIOacrOiEmuacrOeahFRlc3RjYXNlXG5jb25zdCB3aWtpdGV4dFByZXZpZXdUZXN0Y2FzZSA9IGFzeW5jIChpc1ByZXZpZXc6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Ly8g5rKh5pyJ5Y+v6aKE6KeI5YWD57Sg77yM6YCA5Ye644CCXG5cdGlmICghY2hlY2tOZWVkUHJldmlldygpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgdGVzdGNhc2VMaXN0OiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KFxuXHRcdCcuc3BlY2lhbC13aWtpdGV4dC1wcmV2aWV3LXRlc3RjYXNlJ1xuXHQpO1xuXHQvLyDoi6XpobXpnaLkuK3msqHmnIlUZXN0Y2FzZe+8jOmAgOWHuuOAglxuXHRpZiAoIXRlc3RjYXNlTGlzdC5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyDmlLbpm4bkvY3kuo7pobXpnaLkuK3nmoRUZXN0Y2FzZemihOiniOWFg+e0oFxuXHRjb25zdCB0ZXN0Y2FzZURhdGFMaXN0OiB7XG5cdFx0ZWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cdFx0bGFuZzogc3RyaW5nO1xuXHRcdGNvZGU6IHN0cmluZztcblx0fVtdID0gW107XG5cblx0bGV0IGk6IG51bWJlciA9IDA7XG5cdGZvciAoaSA9IDA7IGkgPCB0ZXN0Y2FzZUxpc3QubGVuZ3RoOyArK2kpIHtcblx0XHRjb25zdCBlbGVtZW50OiBIVE1MRWxlbWVudCB8IHVuZGVmaW5lZCA9IHRlc3RjYXNlTGlzdFtpXTtcblx0XHRpZiAoIWVsZW1lbnQpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNvZGVFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcubXctaGlnaGxpZ2h0Jyk7XG5cdFx0aWYgKCFjb2RlRWxlbWVudCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3Qge2NsYXNzTmFtZX0gPSBjb2RlRWxlbWVudDtcblx0XHRpZiAoIWNsYXNzTmFtZSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgWywgY29kZUlkXSA9IC9tdy1oaWdobGlnaHQtbGFuZy0oXFxTKykvLmV4ZWMoY2xhc3NOYW1lKSA/PyBbXTtcblx0XHRjb25zdCB7bGVuZ3RofSA9IHRlc3RjYXNlRGF0YUxpc3Q7XG5cblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZSgncHJldmlldy1pZCcsIGxlbmd0aC50b1N0cmluZygpKTtcblx0XHR0ZXN0Y2FzZURhdGFMaXN0W2xlbmd0aF0gPSB7XG5cdFx0XHRlbGVtZW50LFxuXHRcdFx0bGFuZzogY29kZUlkPy50b0xvd2VyQ2FzZSgpID8/ICcnLFxuXHRcdFx0Y29kZTogY29kZUVsZW1lbnQudGV4dENvbnRlbnQ/LnRyaW0oKSA/PyAnJyxcblx0XHR9OyAvLyBSZXBsYWNlIEFycmF5I3B1c2ggdG8gYXZvaWQgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXHR9XG5cblx0Ly8g5pW055CG6aG16Z2i5Lit55qEVGVzdGNhc2XpooTop4jlhYPntKDvvIzlubbmlL7nva7igJxb6L295YWl5LitXeKAnea2iOaBr1xuXHRsZXQgcGFja2FnZVdpa2l0ZXh0OiBzdHJpbmcgPSAnJztcblx0Zm9yIChjb25zdCB0ZXN0Y2FzZUl0ZW0gb2YgT2JqZWN0LnZhbHVlcyh0ZXN0Y2FzZURhdGFMaXN0KSkge1xuXHRcdGNvbnN0IHtjb2RlLCBlbGVtZW50LCBsYW5nfSA9IHRlc3RjYXNlSXRlbTtcblxuXHRcdGlmICghY29kZSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cblx0XHRpZiAoWydqYXZhc2NyaXB0JywgJ2pzJywgJ2NzcycsICdqc29uJywgJ3RleHQnXS5pbmNsdWRlcyh0ZXN0Y2FzZUl0ZW0ubGFuZykpIHtcblx0XHRcdGNvbnN0IHdpa2l0ZXh0OiBzdHJpbmcgPSBsdWFDaGVjayhjb2RlLCBsYW5nKTtcblx0XHRcdGlmICh3aWtpdGV4dCkge1xuXHRcdFx0XHQvLyDoi6Xop6PmnpDnu5PmnpzpnZ7nqbrmiY3mlL7nva7pooTop4hcblx0XHRcdFx0JGVsZW1lbnQucHJlcGVuZChub3RpY2VMb2FkaW5nRWxlbWVudCk7XG5cdFx0XHRcdHBhY2thZ2VXaWtpdGV4dCArPSBgPGRpdiBjbGFzcz1cInNwZWNpYWwtd2lraXRleHQtcHJldmlldy10ZXN0Y2FzZS0ke2l9XCI+XFxuJHt3aWtpdGV4dH1cXG48L2Rpdj5gO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoWydsdWEnLCAnc2NyaWJ1bnRvJ10uaW5jbHVkZXMobGFuZykpIHtcblx0XHRcdHZvaWQgbXdBZGRMdWFUZXh0KFxuXHRcdFx0XHRjb2RlLFxuXHRcdFx0XHR3Z1BhZ2VOYW1lLFxuXHRcdFx0XHRpc1ByZXZpZXcsXG5cdFx0XHRcdCgoKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuICh3aWtpdGV4dDogc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHQkZWxlbWVudC5wcmVwZW5kKHdpa2l0ZXh0KTtcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9KSgpXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXG5cdC8vIOWwhuaVtOeQhuWujOeahFRlc3RjYXNl6aKE6KeI5YWD57Sg57uf5LiA5Y+R6YCBQVBJ6K+35rGC77yM5bm25bCG6L+U5Zue57uT5p6c5YiG5Y+R5Yiw5ZCEVGVzdGNhc2Vcblx0aWYgKHBhY2thZ2VXaWtpdGV4dCkge1xuXHRcdHBhY2thZ2VXaWtpdGV4dCA9IGA8ZGl2IGNsYXNzPVwic3BlY2lhbC13aWtpdGV4dC1wcmV2aWV3LXRlc3RjYXNlLXVuZGVmaW5lZFwiPiR7cGFja2FnZVdpa2l0ZXh0fTwvZGl2PmA7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHBhcmFtczogQXBpUGFyc2VQYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0dGV4dDogcGFja2FnZVdpa2l0ZXh0LFxuXHRcdFx0XHRjb250ZW50bW9kZWw6ICd3aWtpdGV4dCcsXG5cdFx0XHRcdHByb3A6ICd0ZXh0Jyxcblx0XHRcdH07XG5cdFx0XHRpZiAoaXNQcmV2aWV3KSB7XG5cdFx0XHRcdHBhcmFtcy5kaXNhYmxlZWRpdHNlY3Rpb24gPSB0cnVlO1xuXHRcdFx0XHRwYXJhbXMucHJldmlldyA9IHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cdFx0XHRpZiAoIWRhdGE/LlsncGFyc2UnXT8udGV4dCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHBhcnNlZFdpa2l0ZXh0OiBzdHJpbmcgPSAoZGF0YVsncGFyc2UnXS50ZXh0IGFzIHN0cmluZykudHJpbSgpO1xuXHRcdFx0aWYgKHBhcnNlZFdpa2l0ZXh0KSB7XG5cdFx0XHRcdGNvbnN0ICRwYXJzZWRFbGVtZW50OiBKUXVlcnkgPSAkKHBhcnNlZFdpa2l0ZXh0KTtcblx0XHRcdFx0Zm9yIChjb25zdCBba2V5LCB0ZXN0Y2FzZUl0ZW1dIG9mIE9iamVjdC5lbnRyaWVzKHRlc3RjYXNlRGF0YUxpc3QpKSB7XG5cdFx0XHRcdFx0Y29uc3Qge2VsZW1lbnQsIGxhbmd9ID0gdGVzdGNhc2VJdGVtO1xuXG5cdFx0XHRcdFx0aWYgKCFbJ2phdmFzY3JpcHQnLCAnanMnLCAndGV4dCcsICdjc3MnLCAnanNvbiddLmluY2x1ZGVzKGxhbmcpKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5PEhUTUxFbGVtZW50PiA9ICRwYXJzZWRFbGVtZW50LmZpbmQoXG5cdFx0XHRcdFx0XHRgLnNwZWNpYWwtd2lraXRleHQtcHJldmlldy10ZXN0Y2FzZS11bmRlZmluZWQgPiAuc3BlY2lhbC13aWtpdGV4dC1wcmV2aWV3LXRlc3RjYXNlLSR7a2V5fWBcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGlmICghJGVsZW1lbnQubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjb25zdCAkYWRkVGFyZ2V0OiBKUXVlcnkgPSAkKGVsZW1lbnQpLmZpbmQoJyNzcGVjaWFsd2lraXRleHQtcHJldmlldy1sb2FkaW5nJyk7XG5cdFx0XHRcdFx0JGFkZFRhcmdldC5odG1sKCRlbGVtZW50Lmh0bWwoKSk7XG5cdFx0XHRcdFx0bXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmZpcmUoJGFkZFRhcmdldCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGNhdGNoIHt9XG5cdH1cbn07XG5cbmV4cG9ydCB7d2lraXRleHRQcmV2aWV3VGVzdGNhc2V9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUEsNkZBQUFBLFNBQUE7QUFBQTtBQUNBLFFBQUksUUFBUSxTQUFVLElBQUk7QUFDeEIsYUFBTyxNQUFNLEdBQUcsU0FBUyxRQUFRO0FBQUEsSUFDbkM7QUFHQSxJQUFBQSxRQUFPO0FBQUEsSUFFTCxNQUFNLE9BQU8sY0FBYyxZQUFZLFVBQVUsS0FDakQsTUFBTSxPQUFPLFVBQVUsWUFBWSxNQUFNO0FB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QUkrRztBQUV4QixnQkFBSSxDQUFDLENBQUMsY0FBYyxNQUFNLFFBQVEsT0FBTyxNQUFNLEVBQUU5RyxTQUFTRCxJQUFJLEdBQUc7QUFDaEU7WUFDRDtBQUVBLGtCQUFNMUUsV0FBZ0M0TCxlQUFlM0wsS0FBQSxxRkFBQXFCLE9BQ2lDMUQsR0FBRyxDQUN6RjtBQUNBLGdCQUFJLENBQUNvQyxTQUFTZ0MsUUFBUTtBQUNyQjtZQUNEO0FBRUEsa0JBQU0rSixhQUFxQmxNLEVBQUVZLE9BQU8sRUFBRVIsS0FBSyxrQ0FBa0M7QUFDN0U4TCx1QkFBV2hNLEtBQUtDLFNBQVNELEtBQUssQ0FBQztBQUMvQkcsZUFBR0MsS0FBSyxrQkFBa0IsRUFBRUMsS0FBSzJMLFVBQVU7VUFDNUM7UUFDRDtNQUNELFFBQVE7TUFBQztJQUNWO0VBQ0QsQ0FBQTtBQUFBLFNBQUEsU0EvSE0xQix5QkFBQTJCLE1BQUE7QUFBQSxXQUFBMUIsTUFBQW5FLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTs7QWxCTE4sTUFBQSxHQUFLdEosbUJBQUFtUCxTQUFRLEVBQUVDLEtBQUssU0FBU0MsZ0JBQWdCdk0sT0FBc0M7QUFFbEYwSixlQUFhMUosS0FBSztBQUVsQixPQUFLeUssd0JBQXdCLElBQUk7QUFDbEMsQ0FBQzsiLAogICJuYW1lcyI6IFsibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAidmVyc2lvbiIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIlN5bWJvbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgImRvY3VtZW50IiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiVHlwZUVycm9yIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImFjdGl2ZVhEb2N1bWVudCIsICJtb2R1bGUiLCAiJCIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiJCIsICJpbXBvcnRfZXh0X2dhZGdldDYiLCAicmVxdWlyZSIsICJwcmV2aWV3TG9hZGluZ0NvbnRlbnQiLCAicHJldmlld0xvYWRpbmdJbm5lciIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiX190b0VTTSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiRmFpbGVkIiwgImxvY2FsaXplIiwgImVuIiwgIkxvYWRpbmciLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJGcmFnbWVudCIsICJzcmMiLCAiQWxlcnRfZGVmYXVsdCIsICJkZWNvZGluZyIsICJ3aWR0aCIsICJoZWlnaHQiLCAiaWQiLCAiY2xhc3NOYW1lIiwgIkxvYWRpbmdfaWNvbl9kZWZhdWx0IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJjaGVja0VsZW1lbnRFeGlzdCIsICJzZWxlY3RvcnMiLCAic2VsZWN0b3JBcnJheSIsICJnZW5lcmF0ZUFycmF5IiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgInNlbGVjdG9yIiwgInZhbHVlIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiZXJyIiwgImUiLCAiZiIsICJhZGRQYXJzZWRXaWtpdGV4dCIsICJwYXJzZWRXaWtpdGV4dCIsICIkYm9keSIsICIkIiwgIiRwYXJzZWRXaWtpdGV4dCIsICJodG1sIiwgIiRlbGVtZW50IiwgImZpbmQiLCAibXciLCAiaG9vayIsICJmaXJlIiwgImFwcGVuZCIsICJub3RpY2VGYWlsRWxlbWVudCIsICJub3RpY2VMb2FkaW5nRWxlbWVudCIsICJyZXBsYWNlRE9NIiwgImVsZW1lbnQiLCAiYWRkTG9hZGluZ05vdGljZSIsICJsb2FkaW5nRmFpbE5vdGljZSIsICJyZW1vdmVMb2FkaW5nTm90aWNlIiwgInZlcnNpb24iLCAid2lraVRleHRLZXkiLCAibHVhQWRkVGV4dCIsICJpbnB1dFN0cmluZyIsICJuZXdTdHJpbmciLCAiaXNFc2NhcGUiLCAiZXNjYXBlU3RyaW5nIiwgIkpTT04iLCAicGFyc2UiLCAiY29uY2F0IiwgInN0cmluZ2lmeSIsICJyZXBsYWNlIiwgImx1YUdldFN0cmluZyIsICJ0ZXN0U3RyaW5nRXhlY0FycmF5IiwgImV4ZWMiLCAidGVzdFN0cmluZyIsICJzbGljZSIsICJNYXRoIiwgIm1heCIsICJsZW5ndGgiLCAidHJpbUNoZWNrIiwgInRyaW0iLCAiZmlyc3RDaGFyIiwgImNoYXJBdCIsICJhdCIsICJsdWFHZXRDb250ZW50VGV4dCIsICJ3aWtpdGV4dCIsICJSZWdFeHAiLCAic3Vic3RyaW5nIiwgInRlbXBUZXh0IiwgImx1YUdldE9ialRleHQiLCAibHVhR2V0Q1NTd2lraXRleHQiLCAiX3JlZiIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCAiY3NzVGV4dCIsICJsdWFHZXRKU09Od2lraXRleHQiLCAiX3JlZjIiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0MiIsICJKU09OVGV4dCIsICJqc29uRGF0YSIsICJfaSIsICJfT2JqZWN0JGVudHJpZXMiLCAiT2JqZWN0IiwgImVudHJpZXMiLCAidGVzdCIsICJfaTIiLCAiX09iamVjdCRlbnRyaWVzMiIsICJrIiwgInYiLCAibHVhR2V0SlN3aWtpdGV4dCIsICJfcmVmMyIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QzIiwgImpzVGV4dCIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJ3Z1VzZXJMYW5ndWFnZSIsICJ3Z1VzZXJWYXJpYW50IiwgImNvbmZpZyIsICJnZXQiLCAiZ2V0TGFuZ3VhZ2UiLCAibGFuZyIsICJpbmNsdWRlcyIsICJza2luIiwgIm13QWRkV2lraVRleHQiLCAiX3JlZjQiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAicGFnZU5hbWUiLCAiaXNQcmV2aWV3IiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAidGl0bGUiLCAiY29udGVudG1vZGVsIiwgInRleHQiLCAicHJvcCIsICJ1c2VsYW5nIiwgInVzZXNraW4iLCAiZGlzYWJsZWVkaXRzZWN0aW9uIiwgInByZXZpZXciLCAiX2RhdGEkcGFyc2UiLCAiZGF0YSIsICJfeCIsICJfeDIiLCAiX3gzIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJtd0FkZEx1YVRleHQiLCAiX3JlZjUiLCAiY2FsbEJhY2siLCAidGVtcE1vZHVsZU5hbWUiLCAibW9kdWxlQ2FsbCIsICJfZGF0YSRwYXJzZTIiLCAidGVtcGxhdGVzYW5kYm94dGl0bGUiLCAidGVtcGxhdGVzYW5kYm94dGV4dCIsICJ0ZW1wbGF0ZXNhbmRib3hjb250ZW50bW9kZWwiLCAidGVtcGxhdGVzYW5kYm94Y29udGVudGZvcm1hdCIsICJzZWFyY2giLCAiX3g0IiwgIl94NSIsICJfeDYiLCAiX3g3IiwgIndnUGFnZUNvbnRlbnRNb2RlbCIsICJsdWFDaGVjayIsICJjb250ZW50TW9kZWwiLCAidG9Mb3dlckNhc2UiLCAic2tpbjIiLCAid2dSZXZpc2lvbklkIiwgIm13QXBwbHlOb3RpY2UiLCAiX3JlZjYiLCAiY3VycmVudFBhZ2VOYW1lIiwgInBhZ2VTdWJOYW1lIiwgIl9kYXRhJHBhcnNlMyIsICJzbWF4YWdlIiwgIm1heGFnZSIsICJfeDgiLCAiX3g5IiwgIm13QXBwbHlSZXZpc2lvbiIsICJfcmVmNyIsICJfZGF0YSRwYXJzZTQiLCAib2xkaWQiLCAicGFnZUNvbnRlbnQiLCAiX3gxMCIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAiYWxsTXdDb25maWciLCAiY2hlY2tNd0NvbmZpZyIsICJjb25maWdLZXkiLCAiZXhwZWN0Q29uZmlnIiwgIm13Q29uZmlnIiwgIlN0cmluZyIsICJjaGVja05lZWRQcmV2aWV3IiwgImJvZHkiLCAiaW5uZXJIVE1MIiwgIndnQ2Fub25pY2FsTmFtZXNwYWNlIiwgIndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIiwgIndnUGFnZU5hbWUiLCAibXdBZGRQcmV2aWV3IiwgIl9tdyR1dGlsJGdldFVybCRtYXRjaCIsICJfbXckdXRpbCRnZXRVcmwkbWF0Y2gyIiwgInBhdGhQYXRoIiwgImRlY29kZVVSSSIsICJ1dGlsIiwgImdldFVybCIsICJtYXRjaCIsICJfJGJvZHkkZmluZCR2YWwiLCAiaW5zZXJ0QWZ0ZXIiLCAidmFsIiwgIl8kYm9keSRmaW5kJHZhbDIiLCAidGV4dGFyZWFDb250ZW50IiwgImZ1bGxQYWdlTmFtZSIsICJ3Z1BhZ2VOYW1lMiIsICJ3aWtpdGV4dFByZXZpZXdUZXN0Y2FzZSIsICJfcmVmOCIsICJ0ZXN0Y2FzZUxpc3QiLCAicXVlcnlTZWxlY3RvckFsbCIsICJ0ZXN0Y2FzZURhdGFMaXN0IiwgImkiLCAiX2V4ZWMiLCAiX2NvZGVJZCR0b0xvd2VyQ2FzZSIsICJfY29kZUVsZW1lbnQkdGV4dENvbnQiLCAiX2NvZGVFbGVtZW50JHRleHRDb250MiIsICJjb2RlRWxlbWVudCIsICJjb2RlSWQiLCAic2V0QXR0cmlidXRlIiwgInRvU3RyaW5nIiwgImNvZGUiLCAidGV4dENvbnRlbnQiLCAicGFja2FnZVdpa2l0ZXh0IiwgIl9pMyIsICJfT2JqZWN0JHZhbHVlcyIsICJ2YWx1ZXMiLCAidGVzdGNhc2VJdGVtIiwgInByZXBlbmQiLCAiX2RhdGEkcGFyc2U1IiwgIiRwYXJzZWRFbGVtZW50IiwgIl9pNCIsICJfT2JqZWN0JGVudHJpZXMzIiwgIiRhZGRUYXJnZXQiLCAiX3gxMSIsICJnZXRCb2R5IiwgInRoZW4iLCAic3BlY2lhbFdpa2l0ZXh0Il0KfQo=
