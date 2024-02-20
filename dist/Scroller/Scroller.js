/**
 *  * SPDX-License-Identifier: MIT
 * _addText: '{{Gadget Header|license=MIT}}'
 *
 * @source <https://github.com/the1812/Bilibili-Evolved/blob/master/src/core/horizontal-scroll.ts>
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/global.js
var require_global = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/global.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/fails.js
var require_fails = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/fails.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/descriptors.js
var require_descriptors = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/descriptors.js"(exports, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      return Object.defineProperty({}, 1, { get: function() {
        return 7;
      } })[1] !== 7;
    });
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/function-bind-native.js
var require_function_bind_native = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/function-bind-native.js"(exports, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      var test = function() {
      }.bind();
      return typeof test != "function" || test.hasOwnProperty("prototype");
    });
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/function-call.js
var require_function_call = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/function-call.js"(exports, module2) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var call = Function.prototype.call;
    module2.exports = NATIVE_BIND ? call.bind(call) : function() {
      return call.apply(call, arguments);
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-property-is-enumerable.js
var require_object_property_is_enumerable = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-property-is-enumerable.js"(exports) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/create-property-descriptor.js
var require_create_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/create-property-descriptor.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/function-uncurry-this.js
var require_function_uncurry_this = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/function-uncurry-this.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/classof-raw.js
var require_classof_raw = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/classof-raw.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toString = uncurryThis({}.toString);
    var stringSlice = uncurryThis("".slice);
    module2.exports = function(it) {
      return stringSlice(toString(it), 8, -1);
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/indexed-object.js
var require_indexed_object = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/indexed-object.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-null-or-undefined.js
var require_is_null_or_undefined = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-null-or-undefined.js"(exports, module2) {
    "use strict";
    module2.exports = function(it) {
      return it === null || it === void 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/require-object-coercible.js"(exports, module2) {
    "use strict";
    var isNullOrUndefined = require_is_null_or_undefined();
    var $TypeError = TypeError;
    module2.exports = function(it) {
      if (isNullOrUndefined(it))
        throw new $TypeError("Can't call method on " + it);
      return it;
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-indexed-object.js
var require_to_indexed_object = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-indexed-object.js"(exports, module2) {
    "use strict";
    var IndexedObject = require_indexed_object();
    var requireObjectCoercible = require_require_object_coercible();
    module2.exports = function(it) {
      return IndexedObject(requireObjectCoercible(it));
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-callable.js
var require_is_callable = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-callable.js"(exports, module2) {
    "use strict";
    var documentAll = typeof document == "object" && document.all;
    module2.exports = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
      return typeof argument == "function" || argument === documentAll;
    } : function(argument) {
      return typeof argument == "function";
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-object.js
var require_is_object = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-object.js"(exports, module2) {
    "use strict";
    var isCallable = require_is_callable();
    module2.exports = function(it) {
      return typeof it == "object" ? it !== null : isCallable(it);
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/get-built-in.js
var require_get_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/get-built-in.js"(exports, module2) {
    "use strict";
    var global2 = require_global();
    var isCallable = require_is_callable();
    var aFunction = function(argument) {
      return isCallable(argument) ? argument : void 0;
    };
    module2.exports = function(namespace, method) {
      return arguments.length < 2 ? aFunction(global2[namespace]) : global2[namespace] && global2[namespace][method];
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-is-prototype-of.js
var require_object_is_prototype_of = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-is-prototype-of.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    module2.exports = uncurryThis({}.isPrototypeOf);
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/engine-user-agent.js
var require_engine_user_agent = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/engine-user-agent.js"(exports, module2) {
    "use strict";
    module2.exports = typeof navigator != "undefined" && String(navigator.userAgent) || "";
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/engine-v8-version.js
var require_engine_v8_version = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/engine-v8-version.js"(exports, module2) {
    "use strict";
    var global2 = require_global();
    var userAgent = require_engine_user_agent();
    var process = global2.process;
    var Deno = global2.Deno;
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
        if (match)
          version = +match[1];
      }
    }
    module2.exports = version;
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/symbol-constructor-detection.js
var require_symbol_constructor_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/symbol-constructor-detection.js"(exports, module2) {
    "use strict";
    var V8_VERSION = require_engine_v8_version();
    var fails = require_fails();
    var global2 = require_global();
    var $String = global2.String;
    module2.exports = !!Object.getOwnPropertySymbols && !fails(function() {
      var symbol = Symbol("symbol detection");
      return !$String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && V8_VERSION && V8_VERSION < 41;
    });
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/use-symbol-as-uid.js
var require_use_symbol_as_uid = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/use-symbol-as-uid.js"(exports, module2) {
    "use strict";
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-symbol.js
var require_is_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-symbol.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/try-to-string.js
var require_try_to_string = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/try-to-string.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/a-callable.js
var require_a_callable = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/a-callable.js"(exports, module2) {
    "use strict";
    var isCallable = require_is_callable();
    var tryToString = require_try_to_string();
    var $TypeError = TypeError;
    module2.exports = function(argument) {
      if (isCallable(argument))
        return argument;
      throw new $TypeError(tryToString(argument) + " is not a function");
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/get-method.js
var require_get_method = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/get-method.js"(exports, module2) {
    "use strict";
    var aCallable = require_a_callable();
    var isNullOrUndefined = require_is_null_or_undefined();
    module2.exports = function(V, P) {
      var func = V[P];
      return isNullOrUndefined(func) ? void 0 : aCallable(func);
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/ordinary-to-primitive.js
var require_ordinary_to_primitive = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/ordinary-to-primitive.js"(exports, module2) {
    "use strict";
    var call = require_function_call();
    var isCallable = require_is_callable();
    var isObject = require_is_object();
    var $TypeError = TypeError;
    module2.exports = function(input, pref) {
      var fn, val;
      if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input)))
        return val;
      if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input)))
        return val;
      if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input)))
        return val;
      throw new $TypeError("Can't convert object to primitive value");
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-pure.js
var require_is_pure = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-pure.js"(exports, module2) {
    "use strict";
    module2.exports = false;
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/define-global-property.js
var require_define_global_property = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/define-global-property.js"(exports, module2) {
    "use strict";
    var global2 = require_global();
    var defineProperty = Object.defineProperty;
    module2.exports = function(key, value) {
      try {
        defineProperty(global2, key, { value, configurable: true, writable: true });
      } catch (error) {
        global2[key] = value;
      }
      return value;
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/shared-store.js
var require_shared_store = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/shared-store.js"(exports, module2) {
    "use strict";
    var IS_PURE = require_is_pure();
    var globalThis2 = require_global();
    var defineGlobalProperty = require_define_global_property();
    var SHARED = "__core-js_shared__";
    var store = module2.exports = globalThis2[SHARED] || defineGlobalProperty(SHARED, {});
    (store.versions || (store.versions = [])).push({
      version: "3.36.0",
      mode: IS_PURE ? "pure" : "global",
      copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.36.0/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/shared.js
var require_shared = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/shared.js"(exports, module2) {
    "use strict";
    var store = require_shared_store();
    module2.exports = function(key, value) {
      return store[key] || (store[key] = value || {});
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-object.js
var require_to_object = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-object.js"(exports, module2) {
    "use strict";
    var requireObjectCoercible = require_require_object_coercible();
    var $Object = Object;
    module2.exports = function(argument) {
      return $Object(requireObjectCoercible(argument));
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/has-own-property.js
var require_has_own_property = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/has-own-property.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toObject = require_to_object();
    var hasOwnProperty = uncurryThis({}.hasOwnProperty);
    module2.exports = Object.hasOwn || function hasOwn(it, key) {
      return hasOwnProperty(toObject(it), key);
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/uid.js
var require_uid = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/uid.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/well-known-symbol.js
var require_well_known_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/well-known-symbol.js"(exports, module2) {
    "use strict";
    var global2 = require_global();
    var shared = require_shared();
    var hasOwn = require_has_own_property();
    var uid = require_uid();
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
    var Symbol2 = global2.Symbol;
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-primitive.js
var require_to_primitive = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-primitive.js"(exports, module2) {
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
      if (!isObject(input) || isSymbol(input))
        return input;
      var exoticToPrim = getMethod(input, TO_PRIMITIVE);
      var result;
      if (exoticToPrim) {
        if (pref === void 0)
          pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result))
          return result;
        throw new $TypeError("Can't convert object to primitive value");
      }
      if (pref === void 0)
        pref = "number";
      return ordinaryToPrimitive(input, pref);
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-property-key.js
var require_to_property_key = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-property-key.js"(exports, module2) {
    "use strict";
    var toPrimitive = require_to_primitive();
    var isSymbol = require_is_symbol();
    module2.exports = function(argument) {
      var key = toPrimitive(argument, "string");
      return isSymbol(key) ? key : key + "";
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/document-create-element.js
var require_document_create_element = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/document-create-element.js"(exports, module2) {
    "use strict";
    var global2 = require_global();
    var isObject = require_is_object();
    var document2 = global2.document;
    var EXISTS = isObject(document2) && isObject(document2.createElement);
    module2.exports = function(it) {
      return EXISTS ? document2.createElement(it) : {};
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/ie8-dom-define.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-get-own-property-descriptor.js
var require_object_get_own_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports) {
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
      if (IE8_DOM_DEFINE)
        try {
          return $getOwnPropertyDescriptor(O, P);
        } catch (error) {
        }
      if (hasOwn(O, P))
        return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/v8-prototype-define-bug.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/an-object.js
var require_an_object = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/an-object.js"(exports, module2) {
    "use strict";
    var isObject = require_is_object();
    var $String = String;
    var $TypeError = TypeError;
    module2.exports = function(argument) {
      if (isObject(argument))
        return argument;
      throw new $TypeError($String(argument) + " is not an object");
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-define-property.js
var require_object_define_property = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-define-property.js"(exports) {
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
      if (IE8_DOM_DEFINE)
        try {
          return $defineProperty(O, P, Attributes);
        } catch (error) {
        }
      if ("get" in Attributes || "set" in Attributes)
        throw new $TypeError("Accessors not supported");
      if ("value" in Attributes)
        O[P] = Attributes.value;
      return O;
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/create-non-enumerable-property.js
var require_create_non_enumerable_property = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/create-non-enumerable-property.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/function-name.js
var require_function_name = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/function-name.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/inspect-source.js
var require_inspect_source = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/inspect-source.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/weak-map-basic-detection.js
var require_weak_map_basic_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/weak-map-basic-detection.js"(exports, module2) {
    "use strict";
    var global2 = require_global();
    var isCallable = require_is_callable();
    var WeakMap = global2.WeakMap;
    module2.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/shared-key.js
var require_shared_key = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/shared-key.js"(exports, module2) {
    "use strict";
    var shared = require_shared();
    var uid = require_uid();
    var keys = shared("keys");
    module2.exports = function(key) {
      return keys[key] || (keys[key] = uid(key));
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/hidden-keys.js
var require_hidden_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/hidden-keys.js"(exports, module2) {
    "use strict";
    module2.exports = {};
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/internal-state.js
var require_internal_state = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/internal-state.js"(exports, module2) {
    "use strict";
    var NATIVE_WEAK_MAP = require_weak_map_basic_detection();
    var global2 = require_global();
    var isObject = require_is_object();
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var hasOwn = require_has_own_property();
    var shared = require_shared_store();
    var sharedKey = require_shared_key();
    var hiddenKeys = require_hidden_keys();
    var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
    var TypeError2 = global2.TypeError;
    var WeakMap = global2.WeakMap;
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
        if (store.has(it))
          throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
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
        if (hasOwn(it, STATE))
          throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/make-built-in.js
var require_make_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/make-built-in.js"(exports, module2) {
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
      if (options && options.getter)
        name = "get " + name;
      if (options && options.setter)
        name = "set " + name;
      if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS)
          defineProperty(value, "name", { value: name, configurable: true });
        else
          value.name = name;
      }
      if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) {
        defineProperty(value, "length", { value: options.arity });
      }
      try {
        if (options && hasOwn(options, "constructor") && options.constructor) {
          if (DESCRIPTORS)
            defineProperty(value, "prototype", { writable: false });
        } else if (value.prototype)
          value.prototype = void 0;
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/define-built-in.js
var require_define_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/define-built-in.js"(exports, module2) {
    "use strict";
    var isCallable = require_is_callable();
    var definePropertyModule = require_object_define_property();
    var makeBuiltIn = require_make_built_in();
    var defineGlobalProperty = require_define_global_property();
    module2.exports = function(O, key, value, options) {
      if (!options)
        options = {};
      var simple = options.enumerable;
      var name = options.name !== void 0 ? options.name : key;
      if (isCallable(value))
        makeBuiltIn(value, name, options);
      if (options.global) {
        if (simple)
          O[key] = value;
        else
          defineGlobalProperty(key, value);
      } else {
        try {
          if (!options.unsafe)
            delete O[key];
          else if (O[key])
            simple = true;
        } catch (error) {
        }
        if (simple)
          O[key] = value;
        else
          definePropertyModule.f(O, key, {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/math-trunc.js
var require_math_trunc = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/math-trunc.js"(exports, module2) {
    "use strict";
    var ceil = Math.ceil;
    var floor = Math.floor;
    module2.exports = Math.trunc || function trunc(x) {
      var n = +x;
      return (n > 0 ? floor : ceil)(n);
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-integer-or-infinity.js
var require_to_integer_or_infinity = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-integer-or-infinity.js"(exports, module2) {
    "use strict";
    var trunc = require_math_trunc();
    module2.exports = function(argument) {
      var number = +argument;
      return number !== number || number === 0 ? 0 : trunc(number);
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-absolute-index.js
var require_to_absolute_index = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-absolute-index.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-length.js
var require_to_length = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-length.js"(exports, module2) {
    "use strict";
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var min = Math.min;
    module2.exports = function(argument) {
      var len = toIntegerOrInfinity(argument);
      return len > 0 ? min(len, 9007199254740991) : 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/length-of-array-like.js
var require_length_of_array_like = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/length-of-array-like.js"(exports, module2) {
    "use strict";
    var toLength = require_to_length();
    module2.exports = function(obj) {
      return toLength(obj.length);
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/array-includes.js
var require_array_includes = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/array-includes.js"(exports, module2) {
    "use strict";
    var toIndexedObject = require_to_indexed_object();
    var toAbsoluteIndex = require_to_absolute_index();
    var lengthOfArrayLike = require_length_of_array_like();
    var createMethod = function(IS_INCLUDES) {
      return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        if (length === 0)
          return !IS_INCLUDES && -1;
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        if (IS_INCLUDES && el !== el)
          while (length > index) {
            value = O[index++];
            if (value !== value)
              return true;
          }
        else
          for (; length > index; index++) {
            if ((IS_INCLUDES || index in O) && O[index] === el)
              return IS_INCLUDES || index || 0;
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-keys-internal.js
var require_object_keys_internal = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-keys-internal.js"(exports, module2) {
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
      for (key in O)
        !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
      while (names.length > i)
        if (hasOwn(O, key = names[i++])) {
          ~indexOf(result, key) || push(result, key);
        }
      return result;
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/enum-bug-keys.js
var require_enum_bug_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/enum-bug-keys.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-get-own-property-names.js
var require_object_get_own_property_names = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-get-own-property-names.js"(exports) {
    "use strict";
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = enumBugKeys.concat("length", "prototype");
    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return internalObjectKeys(O, hiddenKeys);
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-get-own-property-symbols.js
var require_object_get_own_property_symbols = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-get-own-property-symbols.js"(exports) {
    "use strict";
    exports.f = Object.getOwnPropertySymbols;
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/own-keys.js
var require_own_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/own-keys.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/copy-constructor-properties.js
var require_copy_constructor_properties = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/copy-constructor-properties.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-forced.js
var require_is_forced = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-forced.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/export.js
var require_export = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/export.js"(exports, module2) {
    "use strict";
    var global2 = require_global();
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
        target = global2;
      } else if (STATIC) {
        target = global2[TARGET] || defineGlobalProperty(TARGET, {});
      } else {
        target = global2[TARGET] && global2[TARGET].prototype;
      }
      if (target)
        for (key in source) {
          sourceProperty = source[key];
          if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
          } else
            targetProperty = target[key];
          FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
          if (!FORCED && targetProperty !== void 0) {
            if (typeof sourceProperty == typeof targetProperty)
              continue;
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-string-tag-support.js
var require_to_string_tag_support = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-string-tag-support.js"(exports, module2) {
    "use strict";
    var wellKnownSymbol = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    var test = {};
    test[TO_STRING_TAG] = "z";
    module2.exports = String(test) === "[object z]";
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/classof.js
var require_classof = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/classof.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-string.js
var require_to_string = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-string.js"(exports, module2) {
    "use strict";
    var classof = require_classof();
    var $String = String;
    module2.exports = function(argument) {
      if (classof(argument) === "Symbol")
        throw new TypeError("Cannot convert a Symbol value to a string");
      return $String(argument);
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-keys.js
var require_object_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-keys.js"(exports, module2) {
    "use strict";
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    module2.exports = Object.keys || function keys(O) {
      return internalObjectKeys(O, enumBugKeys);
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-define-properties.js
var require_object_define_properties = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-define-properties.js"(exports) {
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
      while (length > index)
        definePropertyModule.f(O, key = keys[index++], props[key]);
      return O;
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/html.js
var require_html = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/html.js"(exports, module2) {
    "use strict";
    var getBuiltIn = require_get_built_in();
    module2.exports = getBuiltIn("document", "documentElement");
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-create.js
var require_object_create = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-create.js"(exports, module2) {
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
      while (length--)
        delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
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
      } else
        result = NullProtoObject();
      return Properties === void 0 ? result : definePropertiesModule.f(result, Properties);
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/array-slice.js
var require_array_slice = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/array-slice.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    module2.exports = uncurryThis([].slice);
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-get-own-property-names-external.js
var require_object_get_own_property_names_external = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-get-own-property-names-external.js"(exports, module2) {
    "use strict";
    var classof = require_classof_raw();
    var toIndexedObject = require_to_indexed_object();
    var $getOwnPropertyNames = require_object_get_own_property_names().f;
    var arraySlice = require_array_slice();
    var windowNames = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    var getWindowNames = function(it) {
      try {
        return $getOwnPropertyNames(it);
      } catch (error) {
        return arraySlice(windowNames);
      }
    };
    module2.exports.f = function getOwnPropertyNames(it) {
      return windowNames && classof(it) === "Window" ? getWindowNames(it) : $getOwnPropertyNames(toIndexedObject(it));
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/define-built-in-accessor.js
var require_define_built_in_accessor = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/define-built-in-accessor.js"(exports, module2) {
    "use strict";
    var makeBuiltIn = require_make_built_in();
    var defineProperty = require_object_define_property();
    module2.exports = function(target, name, descriptor) {
      if (descriptor.get)
        makeBuiltIn(descriptor.get, name, { getter: true });
      if (descriptor.set)
        makeBuiltIn(descriptor.set, name, { setter: true });
      return defineProperty.f(target, name, descriptor);
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/well-known-symbol-wrapped.js
var require_well_known_symbol_wrapped = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/well-known-symbol-wrapped.js"(exports) {
    "use strict";
    var wellKnownSymbol = require_well_known_symbol();
    exports.f = wellKnownSymbol;
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/path.js
var require_path = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/path.js"(exports, module2) {
    "use strict";
    var global2 = require_global();
    module2.exports = global2;
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/well-known-symbol-define.js
var require_well_known_symbol_define = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/well-known-symbol-define.js"(exports, module2) {
    "use strict";
    var path = require_path();
    var hasOwn = require_has_own_property();
    var wrappedWellKnownSymbolModule = require_well_known_symbol_wrapped();
    var defineProperty = require_object_define_property().f;
    module2.exports = function(NAME) {
      var Symbol2 = path.Symbol || (path.Symbol = {});
      if (!hasOwn(Symbol2, NAME))
        defineProperty(Symbol2, NAME, {
          value: wrappedWellKnownSymbolModule.f(NAME)
        });
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/symbol-define-to-primitive.js
var require_symbol_define_to_primitive = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/symbol-define-to-primitive.js"(exports, module2) {
    "use strict";
    var call = require_function_call();
    var getBuiltIn = require_get_built_in();
    var wellKnownSymbol = require_well_known_symbol();
    var defineBuiltIn = require_define_built_in();
    module2.exports = function() {
      var Symbol2 = getBuiltIn("Symbol");
      var SymbolPrototype = Symbol2 && Symbol2.prototype;
      var valueOf = SymbolPrototype && SymbolPrototype.valueOf;
      var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
      if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {
        defineBuiltIn(SymbolPrototype, TO_PRIMITIVE, function(hint) {
          return call(valueOf, this);
        }, { arity: 1 });
      }
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/set-to-string-tag.js
var require_set_to_string_tag = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/set-to-string-tag.js"(exports, module2) {
    "use strict";
    var defineProperty = require_object_define_property().f;
    var hasOwn = require_has_own_property();
    var wellKnownSymbol = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    module2.exports = function(target, TAG, STATIC) {
      if (target && !STATIC)
        target = target.prototype;
      if (target && !hasOwn(target, TO_STRING_TAG)) {
        defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
      }
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/function-uncurry-this-clause.js
var require_function_uncurry_this_clause = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/function-uncurry-this-clause.js"(exports, module2) {
    "use strict";
    var classofRaw = require_classof_raw();
    var uncurryThis = require_function_uncurry_this();
    module2.exports = function(fn) {
      if (classofRaw(fn) === "Function")
        return uncurryThis(fn);
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/function-bind-context.js
var require_function_bind_context = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/function-bind-context.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-array.js
var require_is_array = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-array.js"(exports, module2) {
    "use strict";
    var classof = require_classof_raw();
    module2.exports = Array.isArray || function isArray(argument) {
      return classof(argument) === "Array";
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-constructor.js
var require_is_constructor = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-constructor.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var fails = require_fails();
    var isCallable = require_is_callable();
    var classof = require_classof();
    var getBuiltIn = require_get_built_in();
    var inspectSource = require_inspect_source();
    var noop = function() {
    };
    var construct = getBuiltIn("Reflect", "construct");
    var constructorRegExp = /^\s*(?:class|function)\b/;
    var exec = uncurryThis(constructorRegExp.exec);
    var INCORRECT_TO_STRING = !constructorRegExp.test(noop);
    var isConstructorModern = function isConstructor(argument) {
      if (!isCallable(argument))
        return false;
      try {
        construct(noop, [], argument);
        return true;
      } catch (error) {
        return false;
      }
    };
    var isConstructorLegacy = function isConstructor(argument) {
      if (!isCallable(argument))
        return false;
      switch (classof(argument)) {
        case "AsyncFunction":
        case "GeneratorFunction":
        case "AsyncGeneratorFunction":
          return false;
      }
      try {
        return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
      } catch (error) {
        return true;
      }
    };
    isConstructorLegacy.sham = true;
    module2.exports = !construct || fails(function() {
      var called;
      return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function() {
        called = true;
      }) || called;
    }) ? isConstructorLegacy : isConstructorModern;
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/array-species-constructor.js
var require_array_species_constructor = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/array-species-constructor.js"(exports, module2) {
    "use strict";
    var isArray = require_is_array();
    var isConstructor = require_is_constructor();
    var isObject = require_is_object();
    var wellKnownSymbol = require_well_known_symbol();
    var SPECIES = wellKnownSymbol("species");
    var $Array = Array;
    module2.exports = function(originalArray) {
      var C;
      if (isArray(originalArray)) {
        C = originalArray.constructor;
        if (isConstructor(C) && (C === $Array || isArray(C.prototype)))
          C = void 0;
        else if (isObject(C)) {
          C = C[SPECIES];
          if (C === null)
            C = void 0;
        }
      }
      return C === void 0 ? $Array : C;
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/array-species-create.js
var require_array_species_create = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/array-species-create.js"(exports, module2) {
    "use strict";
    var arraySpeciesConstructor = require_array_species_constructor();
    module2.exports = function(originalArray, length) {
      return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/array-iteration.js
var require_array_iteration = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/array-iteration.js"(exports, module2) {
    "use strict";
    var bind = require_function_bind_context();
    var uncurryThis = require_function_uncurry_this();
    var IndexedObject = require_indexed_object();
    var toObject = require_to_object();
    var lengthOfArrayLike = require_length_of_array_like();
    var arraySpeciesCreate = require_array_species_create();
    var push = uncurryThis([].push);
    var createMethod = function(TYPE) {
      var IS_MAP = TYPE === 1;
      var IS_FILTER = TYPE === 2;
      var IS_SOME = TYPE === 3;
      var IS_EVERY = TYPE === 4;
      var IS_FIND_INDEX = TYPE === 6;
      var IS_FILTER_REJECT = TYPE === 7;
      var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
      return function($this, callbackfn, that, specificCreate) {
        var O = toObject($this);
        var self2 = IndexedObject(O);
        var length = lengthOfArrayLike(self2);
        var boundFunction = bind(callbackfn, that);
        var index = 0;
        var create = specificCreate || arraySpeciesCreate;
        var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : void 0;
        var value, result;
        for (; length > index; index++)
          if (NO_HOLES || index in self2) {
            value = self2[index];
            result = boundFunction(value, index, O);
            if (TYPE) {
              if (IS_MAP)
                target[index] = result;
              else if (result)
                switch (TYPE) {
                  case 3:
                    return true;
                  case 5:
                    return value;
                  case 6:
                    return index;
                  case 2:
                    push(target, value);
                }
              else
                switch (TYPE) {
                  case 4:
                    return false;
                  case 7:
                    push(target, value);
                }
            }
          }
        return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
      };
    };
    module2.exports = {
      // `Array.prototype.forEach` method
      // https://tc39.es/ecma262/#sec-array.prototype.foreach
      forEach: createMethod(0),
      // `Array.prototype.map` method
      // https://tc39.es/ecma262/#sec-array.prototype.map
      map: createMethod(1),
      // `Array.prototype.filter` method
      // https://tc39.es/ecma262/#sec-array.prototype.filter
      filter: createMethod(2),
      // `Array.prototype.some` method
      // https://tc39.es/ecma262/#sec-array.prototype.some
      some: createMethod(3),
      // `Array.prototype.every` method
      // https://tc39.es/ecma262/#sec-array.prototype.every
      every: createMethod(4),
      // `Array.prototype.find` method
      // https://tc39.es/ecma262/#sec-array.prototype.find
      find: createMethod(5),
      // `Array.prototype.findIndex` method
      // https://tc39.es/ecma262/#sec-array.prototype.findIndex
      findIndex: createMethod(6),
      // `Array.prototype.filterReject` method
      // https://github.com/tc39/proposal-array-filtering
      filterReject: createMethod(7)
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.symbol.constructor.js
var require_es_symbol_constructor = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.symbol.constructor.js"() {
    "use strict";
    var $ = require_export();
    var global2 = require_global();
    var call = require_function_call();
    var uncurryThis = require_function_uncurry_this();
    var IS_PURE = require_is_pure();
    var DESCRIPTORS = require_descriptors();
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    var fails = require_fails();
    var hasOwn = require_has_own_property();
    var isPrototypeOf = require_object_is_prototype_of();
    var anObject = require_an_object();
    var toIndexedObject = require_to_indexed_object();
    var toPropertyKey = require_to_property_key();
    var $toString = require_to_string();
    var createPropertyDescriptor = require_create_property_descriptor();
    var nativeObjectCreate = require_object_create();
    var objectKeys = require_object_keys();
    var getOwnPropertyNamesModule = require_object_get_own_property_names();
    var getOwnPropertyNamesExternal = require_object_get_own_property_names_external();
    var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
    var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
    var definePropertyModule = require_object_define_property();
    var definePropertiesModule = require_object_define_properties();
    var propertyIsEnumerableModule = require_object_property_is_enumerable();
    var defineBuiltIn = require_define_built_in();
    var defineBuiltInAccessor = require_define_built_in_accessor();
    var shared = require_shared();
    var sharedKey = require_shared_key();
    var hiddenKeys = require_hidden_keys();
    var uid = require_uid();
    var wellKnownSymbol = require_well_known_symbol();
    var wrappedWellKnownSymbolModule = require_well_known_symbol_wrapped();
    var defineWellKnownSymbol = require_well_known_symbol_define();
    var defineSymbolToPrimitive = require_symbol_define_to_primitive();
    var setToStringTag = require_set_to_string_tag();
    var InternalStateModule = require_internal_state();
    var $forEach = require_array_iteration().forEach;
    var HIDDEN = sharedKey("hidden");
    var SYMBOL = "Symbol";
    var PROTOTYPE = "prototype";
    var setInternalState = InternalStateModule.set;
    var getInternalState = InternalStateModule.getterFor(SYMBOL);
    var ObjectPrototype = Object[PROTOTYPE];
    var $Symbol = global2.Symbol;
    var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
    var RangeError = global2.RangeError;
    var TypeError2 = global2.TypeError;
    var QObject = global2.QObject;
    var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var nativeDefineProperty = definePropertyModule.f;
    var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
    var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
    var push = uncurryThis([].push);
    var AllSymbols = shared("symbols");
    var ObjectPrototypeSymbols = shared("op-symbols");
    var WellKnownSymbolsStore = shared("wks");
    var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
    var fallbackDefineProperty = function(O, P, Attributes) {
      var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
      if (ObjectPrototypeDescriptor)
        delete ObjectPrototype[P];
      nativeDefineProperty(O, P, Attributes);
      if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
        nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
      }
    };
    var setSymbolDescriptor = DESCRIPTORS && fails(function() {
      return nativeObjectCreate(nativeDefineProperty({}, "a", {
        get: function() {
          return nativeDefineProperty(this, "a", { value: 7 }).a;
        }
      })).a !== 7;
    }) ? fallbackDefineProperty : nativeDefineProperty;
    var wrap = function(tag, description) {
      var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
      setInternalState(symbol, {
        type: SYMBOL,
        tag,
        description
      });
      if (!DESCRIPTORS)
        symbol.description = description;
      return symbol;
    };
    var $defineProperty = function defineProperty(O, P, Attributes) {
      if (O === ObjectPrototype)
        $defineProperty(ObjectPrototypeSymbols, P, Attributes);
      anObject(O);
      var key = toPropertyKey(P);
      anObject(Attributes);
      if (hasOwn(AllSymbols, key)) {
        if (!Attributes.enumerable) {
          if (!hasOwn(O, HIDDEN))
            nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, nativeObjectCreate(null)));
          O[HIDDEN][key] = true;
        } else {
          if (hasOwn(O, HIDDEN) && O[HIDDEN][key])
            O[HIDDEN][key] = false;
          Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
        }
        return setSymbolDescriptor(O, key, Attributes);
      }
      return nativeDefineProperty(O, key, Attributes);
    };
    var $defineProperties = function defineProperties(O, Properties) {
      anObject(O);
      var properties = toIndexedObject(Properties);
      var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
      $forEach(keys, function(key) {
        if (!DESCRIPTORS || call($propertyIsEnumerable, properties, key))
          $defineProperty(O, key, properties[key]);
      });
      return O;
    };
    var $create = function create(O, Properties) {
      return Properties === void 0 ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
    };
    var $propertyIsEnumerable = function propertyIsEnumerable(V) {
      var P = toPropertyKey(V);
      var enumerable = call(nativePropertyIsEnumerable, this, P);
      if (this === ObjectPrototype && hasOwn(AllSymbols, P) && !hasOwn(ObjectPrototypeSymbols, P))
        return false;
      return enumerable || !hasOwn(this, P) || !hasOwn(AllSymbols, P) || hasOwn(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
    };
    var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
      var it = toIndexedObject(O);
      var key = toPropertyKey(P);
      if (it === ObjectPrototype && hasOwn(AllSymbols, key) && !hasOwn(ObjectPrototypeSymbols, key))
        return;
      var descriptor = nativeGetOwnPropertyDescriptor(it, key);
      if (descriptor && hasOwn(AllSymbols, key) && !(hasOwn(it, HIDDEN) && it[HIDDEN][key])) {
        descriptor.enumerable = true;
      }
      return descriptor;
    };
    var $getOwnPropertyNames = function getOwnPropertyNames(O) {
      var names = nativeGetOwnPropertyNames(toIndexedObject(O));
      var result = [];
      $forEach(names, function(key) {
        if (!hasOwn(AllSymbols, key) && !hasOwn(hiddenKeys, key))
          push(result, key);
      });
      return result;
    };
    var $getOwnPropertySymbols = function(O) {
      var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
      var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
      var result = [];
      $forEach(names, function(key) {
        if (hasOwn(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn(ObjectPrototype, key))) {
          push(result, AllSymbols[key]);
        }
      });
      return result;
    };
    if (!NATIVE_SYMBOL) {
      $Symbol = function Symbol2() {
        if (isPrototypeOf(SymbolPrototype, this))
          throw new TypeError2("Symbol is not a constructor");
        var description = !arguments.length || arguments[0] === void 0 ? void 0 : $toString(arguments[0]);
        var tag = uid(description);
        var setter = function(value) {
          var $this = this === void 0 ? global2 : this;
          if ($this === ObjectPrototype)
            call(setter, ObjectPrototypeSymbols, value);
          if (hasOwn($this, HIDDEN) && hasOwn($this[HIDDEN], tag))
            $this[HIDDEN][tag] = false;
          var descriptor = createPropertyDescriptor(1, value);
          try {
            setSymbolDescriptor($this, tag, descriptor);
          } catch (error) {
            if (!(error instanceof RangeError))
              throw error;
            fallbackDefineProperty($this, tag, descriptor);
          }
        };
        if (DESCRIPTORS && USE_SETTER)
          setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
        return wrap(tag, description);
      };
      SymbolPrototype = $Symbol[PROTOTYPE];
      defineBuiltIn(SymbolPrototype, "toString", function toString() {
        return getInternalState(this).tag;
      });
      defineBuiltIn($Symbol, "withoutSetter", function(description) {
        return wrap(uid(description), description);
      });
      propertyIsEnumerableModule.f = $propertyIsEnumerable;
      definePropertyModule.f = $defineProperty;
      definePropertiesModule.f = $defineProperties;
      getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
      getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
      getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;
      wrappedWellKnownSymbolModule.f = function(name) {
        return wrap(wellKnownSymbol(name), name);
      };
      if (DESCRIPTORS) {
        defineBuiltInAccessor(SymbolPrototype, "description", {
          configurable: true,
          get: function description() {
            return getInternalState(this).description;
          }
        });
        if (!IS_PURE) {
          defineBuiltIn(ObjectPrototype, "propertyIsEnumerable", $propertyIsEnumerable, { unsafe: true });
        }
      }
    }
    $({ global: true, constructor: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
      Symbol: $Symbol
    });
    $forEach(objectKeys(WellKnownSymbolsStore), function(name) {
      defineWellKnownSymbol(name);
    });
    $({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
      useSetter: function() {
        USE_SETTER = true;
      },
      useSimple: function() {
        USE_SETTER = false;
      }
    });
    $({ target: "Object", stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
      // `Object.create` method
      // https://tc39.es/ecma262/#sec-object.create
      create: $create,
      // `Object.defineProperty` method
      // https://tc39.es/ecma262/#sec-object.defineproperty
      defineProperty: $defineProperty,
      // `Object.defineProperties` method
      // https://tc39.es/ecma262/#sec-object.defineproperties
      defineProperties: $defineProperties,
      // `Object.getOwnPropertyDescriptor` method
      // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
      getOwnPropertyDescriptor: $getOwnPropertyDescriptor
    });
    $({ target: "Object", stat: true, forced: !NATIVE_SYMBOL }, {
      // `Object.getOwnPropertyNames` method
      // https://tc39.es/ecma262/#sec-object.getownpropertynames
      getOwnPropertyNames: $getOwnPropertyNames
    });
    defineSymbolToPrimitive();
    setToStringTag($Symbol, SYMBOL);
    hiddenKeys[HIDDEN] = true;
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/symbol-registry-detection.js
var require_symbol_registry_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/symbol-registry-detection.js"(exports, module2) {
    "use strict";
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    module2.exports = NATIVE_SYMBOL && !!Symbol["for"] && !!Symbol.keyFor;
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.symbol.for.js
var require_es_symbol_for = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.symbol.for.js"() {
    "use strict";
    var $ = require_export();
    var getBuiltIn = require_get_built_in();
    var hasOwn = require_has_own_property();
    var toString = require_to_string();
    var shared = require_shared();
    var NATIVE_SYMBOL_REGISTRY = require_symbol_registry_detection();
    var StringToSymbolRegistry = shared("string-to-symbol-registry");
    var SymbolToStringRegistry = shared("symbol-to-string-registry");
    $({ target: "Symbol", stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
      "for": function(key) {
        var string = toString(key);
        if (hasOwn(StringToSymbolRegistry, string))
          return StringToSymbolRegistry[string];
        var symbol = getBuiltIn("Symbol")(string);
        StringToSymbolRegistry[string] = symbol;
        SymbolToStringRegistry[symbol] = string;
        return symbol;
      }
    });
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.symbol.key-for.js
var require_es_symbol_key_for = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.symbol.key-for.js"() {
    "use strict";
    var $ = require_export();
    var hasOwn = require_has_own_property();
    var isSymbol = require_is_symbol();
    var tryToString = require_try_to_string();
    var shared = require_shared();
    var NATIVE_SYMBOL_REGISTRY = require_symbol_registry_detection();
    var SymbolToStringRegistry = shared("symbol-to-string-registry");
    $({ target: "Symbol", stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
      keyFor: function keyFor(sym) {
        if (!isSymbol(sym))
          throw new TypeError(tryToString(sym) + " is not a symbol");
        if (hasOwn(SymbolToStringRegistry, sym))
          return SymbolToStringRegistry[sym];
      }
    });
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/function-apply.js
var require_function_apply = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/function-apply.js"(exports, module2) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var FunctionPrototype = Function.prototype;
    var apply = FunctionPrototype.apply;
    var call = FunctionPrototype.call;
    module2.exports = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
      return call.apply(apply, arguments);
    });
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/get-json-replacer-function.js
var require_get_json_replacer_function = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/get-json-replacer-function.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var isArray = require_is_array();
    var isCallable = require_is_callable();
    var classof = require_classof_raw();
    var toString = require_to_string();
    var push = uncurryThis([].push);
    module2.exports = function(replacer) {
      if (isCallable(replacer))
        return replacer;
      if (!isArray(replacer))
        return;
      var rawLength = replacer.length;
      var keys = [];
      for (var i = 0; i < rawLength; i++) {
        var element = replacer[i];
        if (typeof element == "string")
          push(keys, element);
        else if (typeof element == "number" || classof(element) === "Number" || classof(element) === "String")
          push(keys, toString(element));
      }
      var keysLength = keys.length;
      var root = true;
      return function(key, value) {
        if (root) {
          root = false;
          return value;
        }
        if (isArray(this))
          return value;
        for (var j = 0; j < keysLength; j++)
          if (keys[j] === key)
            return value;
      };
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.json.stringify.js
var require_es_json_stringify = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.json.stringify.js"() {
    "use strict";
    var $ = require_export();
    var getBuiltIn = require_get_built_in();
    var apply = require_function_apply();
    var call = require_function_call();
    var uncurryThis = require_function_uncurry_this();
    var fails = require_fails();
    var isCallable = require_is_callable();
    var isSymbol = require_is_symbol();
    var arraySlice = require_array_slice();
    var getReplacerFunction = require_get_json_replacer_function();
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    var $String = String;
    var $stringify = getBuiltIn("JSON", "stringify");
    var exec = uncurryThis(/./.exec);
    var charAt = uncurryThis("".charAt);
    var charCodeAt = uncurryThis("".charCodeAt);
    var replace = uncurryThis("".replace);
    var numberToString = uncurryThis(1 .toString);
    var tester = /[\uD800-\uDFFF]/g;
    var low = /^[\uD800-\uDBFF]$/;
    var hi = /^[\uDC00-\uDFFF]$/;
    var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL || fails(function() {
      var symbol = getBuiltIn("Symbol")("stringify detection");
      return $stringify([symbol]) !== "[null]" || $stringify({ a: symbol }) !== "{}" || $stringify(Object(symbol)) !== "{}";
    });
    var ILL_FORMED_UNICODE = fails(function() {
      return $stringify("\uDF06\uD834") !== '"\\udf06\\ud834"' || $stringify("\uDEAD") !== '"\\udead"';
    });
    var stringifyWithSymbolsFix = function(it, replacer) {
      var args = arraySlice(arguments);
      var $replacer = getReplacerFunction(replacer);
      if (!isCallable($replacer) && (it === void 0 || isSymbol(it)))
        return;
      args[1] = function(key, value) {
        if (isCallable($replacer))
          value = call($replacer, this, $String(key), value);
        if (!isSymbol(value))
          return value;
      };
      return apply($stringify, null, args);
    };
    var fixIllFormed = function(match, offset, string) {
      var prev = charAt(string, offset - 1);
      var next = charAt(string, offset + 1);
      if (exec(low, match) && !exec(hi, next) || exec(hi, match) && !exec(low, prev)) {
        return "\\u" + numberToString(charCodeAt(match, 0), 16);
      }
      return match;
    };
    if ($stringify) {
      $({ target: "JSON", stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
        // eslint-disable-next-line no-unused-vars -- required for `.length`
        stringify: function stringify(it, replacer, space) {
          var args = arraySlice(arguments);
          var result = apply(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
          return ILL_FORMED_UNICODE && typeof result == "string" ? replace(result, tester, fixIllFormed) : result;
        }
      });
    }
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.object.get-own-property-symbols.js
var require_es_object_get_own_property_symbols = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.object.get-own-property-symbols.js"() {
    "use strict";
    var $ = require_export();
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    var fails = require_fails();
    var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
    var toObject = require_to_object();
    var FORCED = !NATIVE_SYMBOL || fails(function() {
      getOwnPropertySymbolsModule.f(1);
    });
    $({ target: "Object", stat: true, forced: FORCED }, {
      getOwnPropertySymbols: function getOwnPropertySymbols(it) {
        var $getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
        return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject(it)) : [];
      }
    });
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.symbol.js
var require_es_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.symbol.js"() {
    "use strict";
    require_es_symbol_constructor();
    require_es_symbol_for();
    require_es_symbol_key_for();
    require_es_json_stringify();
    require_es_object_get_own_property_symbols();
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.symbol.description.js
var require_es_symbol_description = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.symbol.description.js"() {
    "use strict";
    var $ = require_export();
    var DESCRIPTORS = require_descriptors();
    var global2 = require_global();
    var uncurryThis = require_function_uncurry_this();
    var hasOwn = require_has_own_property();
    var isCallable = require_is_callable();
    var isPrototypeOf = require_object_is_prototype_of();
    var toString = require_to_string();
    var defineBuiltInAccessor = require_define_built_in_accessor();
    var copyConstructorProperties = require_copy_constructor_properties();
    var NativeSymbol = global2.Symbol;
    var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;
    if (DESCRIPTORS && isCallable(NativeSymbol) && (!("description" in SymbolPrototype) || // Safari 12 bug
    NativeSymbol().description !== void 0)) {
      EmptyStringDescriptionStore = {};
      SymbolWrapper = function Symbol2() {
        var description = arguments.length < 1 || arguments[0] === void 0 ? void 0 : toString(arguments[0]);
        var result = isPrototypeOf(SymbolPrototype, this) ? new NativeSymbol(description) : description === void 0 ? NativeSymbol() : NativeSymbol(description);
        if (description === "")
          EmptyStringDescriptionStore[result] = true;
        return result;
      };
      copyConstructorProperties(SymbolWrapper, NativeSymbol);
      SymbolWrapper.prototype = SymbolPrototype;
      SymbolPrototype.constructor = SymbolWrapper;
      NATIVE_SYMBOL = String(NativeSymbol("description detection")) === "Symbol(description detection)";
      thisSymbolValue = uncurryThis(SymbolPrototype.valueOf);
      symbolDescriptiveString = uncurryThis(SymbolPrototype.toString);
      regexp = /^Symbol\((.*)\)[^)]+$/;
      replace = uncurryThis("".replace);
      stringSlice = uncurryThis("".slice);
      defineBuiltInAccessor(SymbolPrototype, "description", {
        configurable: true,
        get: function description() {
          var symbol = thisSymbolValue(this);
          if (hasOwn(EmptyStringDescriptionStore, symbol))
            return "";
          var string = symbolDescriptiveString(symbol);
          var desc = NATIVE_SYMBOL ? stringSlice(string, 7, -1) : replace(string, regexp, "$1");
          return desc === "" ? void 0 : desc;
        }
      });
      $({ global: true, constructor: true, forced: true }, {
        Symbol: SymbolWrapper
      });
    }
    var EmptyStringDescriptionStore;
    var SymbolWrapper;
    var NATIVE_SYMBOL;
    var thisSymbolValue;
    var symbolDescriptiveString;
    var regexp;
    var replace;
    var stringSlice;
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.symbol.iterator.js
var require_es_symbol_iterator = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.symbol.iterator.js"() {
    "use strict";
    var defineWellKnownSymbol = require_well_known_symbol_define();
    defineWellKnownSymbol("iterator");
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/function-uncurry-this-accessor.js
var require_function_uncurry_this_accessor = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/function-uncurry-this-accessor.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var aCallable = require_a_callable();
    module2.exports = function(object, key, method) {
      try {
        return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
      } catch (error) {
      }
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-possible-prototype.js
var require_is_possible_prototype = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-possible-prototype.js"(exports, module2) {
    "use strict";
    var isObject = require_is_object();
    module2.exports = function(argument) {
      return isObject(argument) || argument === null;
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/a-possible-prototype.js
var require_a_possible_prototype = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/a-possible-prototype.js"(exports, module2) {
    "use strict";
    var isPossiblePrototype = require_is_possible_prototype();
    var $String = String;
    var $TypeError = TypeError;
    module2.exports = function(argument) {
      if (isPossiblePrototype(argument))
        return argument;
      throw new $TypeError("Can't set " + $String(argument) + " as a prototype");
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-set-prototype-of.js
var require_object_set_prototype_of = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-set-prototype-of.js"(exports, module2) {
    "use strict";
    var uncurryThisAccessor = require_function_uncurry_this_accessor();
    var anObject = require_an_object();
    var aPossiblePrototype = require_a_possible_prototype();
    module2.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
      var CORRECT_SETTER = false;
      var test = {};
      var setter;
      try {
        setter = uncurryThisAccessor(Object.prototype, "__proto__", "set");
        setter(test, []);
        CORRECT_SETTER = test instanceof Array;
      } catch (error) {
      }
      return function setPrototypeOf(O, proto) {
        anObject(O);
        aPossiblePrototype(proto);
        if (CORRECT_SETTER)
          setter(O, proto);
        else
          O.__proto__ = proto;
        return O;
      };
    }() : void 0);
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/proxy-accessor.js
var require_proxy_accessor = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/proxy-accessor.js"(exports, module2) {
    "use strict";
    var defineProperty = require_object_define_property().f;
    module2.exports = function(Target, Source, key) {
      key in Target || defineProperty(Target, key, {
        configurable: true,
        get: function() {
          return Source[key];
        },
        set: function(it) {
          Source[key] = it;
        }
      });
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/inherit-if-required.js
var require_inherit_if_required = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/inherit-if-required.js"(exports, module2) {
    "use strict";
    var isCallable = require_is_callable();
    var isObject = require_is_object();
    var setPrototypeOf = require_object_set_prototype_of();
    module2.exports = function($this, dummy, Wrapper) {
      var NewTarget, NewTargetPrototype;
      if (
        // it can work only with native `setPrototypeOf`
        setPrototypeOf && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
        isCallable(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype
      )
        setPrototypeOf($this, NewTargetPrototype);
      return $this;
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/normalize-string-argument.js
var require_normalize_string_argument = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/normalize-string-argument.js"(exports, module2) {
    "use strict";
    var toString = require_to_string();
    module2.exports = function(argument, $default) {
      return argument === void 0 ? arguments.length < 2 ? "" : $default : toString(argument);
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/install-error-cause.js
var require_install_error_cause = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/install-error-cause.js"(exports, module2) {
    "use strict";
    var isObject = require_is_object();
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    module2.exports = function(O, options) {
      if (isObject(options) && "cause" in options) {
        createNonEnumerableProperty(O, "cause", options.cause);
      }
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/error-stack-clear.js
var require_error_stack_clear = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/error-stack-clear.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var $Error = Error;
    var replace = uncurryThis("".replace);
    var TEST = function(arg) {
      return String(new $Error(arg).stack);
    }("zxcasd");
    var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
    var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);
    module2.exports = function(stack, dropEntries) {
      if (IS_V8_OR_CHAKRA_STACK && typeof stack == "string" && !$Error.prepareStackTrace) {
        while (dropEntries--)
          stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, "");
      }
      return stack;
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/error-stack-installable.js
var require_error_stack_installable = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/error-stack-installable.js"(exports, module2) {
    "use strict";
    var fails = require_fails();
    var createPropertyDescriptor = require_create_property_descriptor();
    module2.exports = !fails(function() {
      var error = new Error("a");
      if (!("stack" in error))
        return true;
      Object.defineProperty(error, "stack", createPropertyDescriptor(1, 7));
      return error.stack !== 7;
    });
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/error-stack-install.js
var require_error_stack_install = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/error-stack-install.js"(exports, module2) {
    "use strict";
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var clearErrorStack = require_error_stack_clear();
    var ERROR_STACK_INSTALLABLE = require_error_stack_installable();
    var captureStackTrace = Error.captureStackTrace;
    module2.exports = function(error, C, stack, dropEntries) {
      if (ERROR_STACK_INSTALLABLE) {
        if (captureStackTrace)
          captureStackTrace(error, C);
        else
          createNonEnumerableProperty(error, "stack", clearErrorStack(stack, dropEntries));
      }
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/wrap-error-constructor-with-cause.js
var require_wrap_error_constructor_with_cause = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/wrap-error-constructor-with-cause.js"(exports, module2) {
    "use strict";
    var getBuiltIn = require_get_built_in();
    var hasOwn = require_has_own_property();
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var isPrototypeOf = require_object_is_prototype_of();
    var setPrototypeOf = require_object_set_prototype_of();
    var copyConstructorProperties = require_copy_constructor_properties();
    var proxyAccessor = require_proxy_accessor();
    var inheritIfRequired = require_inherit_if_required();
    var normalizeStringArgument = require_normalize_string_argument();
    var installErrorCause = require_install_error_cause();
    var installErrorStack = require_error_stack_install();
    var DESCRIPTORS = require_descriptors();
    var IS_PURE = require_is_pure();
    module2.exports = function(FULL_NAME, wrapper, FORCED, IS_AGGREGATE_ERROR) {
      var STACK_TRACE_LIMIT = "stackTraceLimit";
      var OPTIONS_POSITION = IS_AGGREGATE_ERROR ? 2 : 1;
      var path = FULL_NAME.split(".");
      var ERROR_NAME = path[path.length - 1];
      var OriginalError = getBuiltIn.apply(null, path);
      if (!OriginalError)
        return;
      var OriginalErrorPrototype = OriginalError.prototype;
      if (!IS_PURE && hasOwn(OriginalErrorPrototype, "cause"))
        delete OriginalErrorPrototype.cause;
      if (!FORCED)
        return OriginalError;
      var BaseError = getBuiltIn("Error");
      var WrappedError = wrapper(function(a, b) {
        var message = normalizeStringArgument(IS_AGGREGATE_ERROR ? b : a, void 0);
        var result = IS_AGGREGATE_ERROR ? new OriginalError(a) : new OriginalError();
        if (message !== void 0)
          createNonEnumerableProperty(result, "message", message);
        installErrorStack(result, WrappedError, result.stack, 2);
        if (this && isPrototypeOf(OriginalErrorPrototype, this))
          inheritIfRequired(result, this, WrappedError);
        if (arguments.length > OPTIONS_POSITION)
          installErrorCause(result, arguments[OPTIONS_POSITION]);
        return result;
      });
      WrappedError.prototype = OriginalErrorPrototype;
      if (ERROR_NAME !== "Error") {
        if (setPrototypeOf)
          setPrototypeOf(WrappedError, BaseError);
        else
          copyConstructorProperties(WrappedError, BaseError, { name: true });
      } else if (DESCRIPTORS && STACK_TRACE_LIMIT in OriginalError) {
        proxyAccessor(WrappedError, OriginalError, STACK_TRACE_LIMIT);
        proxyAccessor(WrappedError, OriginalError, "prepareStackTrace");
      }
      copyConstructorProperties(WrappedError, OriginalError);
      if (!IS_PURE)
        try {
          if (OriginalErrorPrototype.name !== ERROR_NAME) {
            createNonEnumerableProperty(OriginalErrorPrototype, "name", ERROR_NAME);
          }
          OriginalErrorPrototype.constructor = WrappedError;
        } catch (error) {
        }
      return WrappedError;
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.error.cause.js
var require_es_error_cause = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.error.cause.js"() {
    "use strict";
    var $ = require_export();
    var global2 = require_global();
    var apply = require_function_apply();
    var wrapErrorConstructorWithCause = require_wrap_error_constructor_with_cause();
    var WEB_ASSEMBLY = "WebAssembly";
    var WebAssembly = global2[WEB_ASSEMBLY];
    var FORCED = new Error("e", { cause: 7 }).cause !== 7;
    var exportGlobalErrorCauseWrapper = function(ERROR_NAME, wrapper) {
      var O = {};
      O[ERROR_NAME] = wrapErrorConstructorWithCause(ERROR_NAME, wrapper, FORCED);
      $({ global: true, constructor: true, arity: 1, forced: FORCED }, O);
    };
    var exportWebAssemblyErrorCauseWrapper = function(ERROR_NAME, wrapper) {
      if (WebAssembly && WebAssembly[ERROR_NAME]) {
        var O = {};
        O[ERROR_NAME] = wrapErrorConstructorWithCause(WEB_ASSEMBLY + "." + ERROR_NAME, wrapper, FORCED);
        $({ target: WEB_ASSEMBLY, stat: true, constructor: true, arity: 1, forced: FORCED }, O);
      }
    };
    exportGlobalErrorCauseWrapper("Error", function(init) {
      return function Error2(message) {
        return apply(init, this, arguments);
      };
    });
    exportGlobalErrorCauseWrapper("EvalError", function(init) {
      return function EvalError(message) {
        return apply(init, this, arguments);
      };
    });
    exportGlobalErrorCauseWrapper("RangeError", function(init) {
      return function RangeError(message) {
        return apply(init, this, arguments);
      };
    });
    exportGlobalErrorCauseWrapper("ReferenceError", function(init) {
      return function ReferenceError2(message) {
        return apply(init, this, arguments);
      };
    });
    exportGlobalErrorCauseWrapper("SyntaxError", function(init) {
      return function SyntaxError(message) {
        return apply(init, this, arguments);
      };
    });
    exportGlobalErrorCauseWrapper("TypeError", function(init) {
      return function TypeError2(message) {
        return apply(init, this, arguments);
      };
    });
    exportGlobalErrorCauseWrapper("URIError", function(init) {
      return function URIError(message) {
        return apply(init, this, arguments);
      };
    });
    exportWebAssemblyErrorCauseWrapper("CompileError", function(init) {
      return function CompileError(message) {
        return apply(init, this, arguments);
      };
    });
    exportWebAssemblyErrorCauseWrapper("LinkError", function(init) {
      return function LinkError(message) {
        return apply(init, this, arguments);
      };
    });
    exportWebAssemblyErrorCauseWrapper("RuntimeError", function(init) {
      return function RuntimeError(message) {
        return apply(init, this, arguments);
      };
    });
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/error-to-string.js
var require_error_to_string = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/error-to-string.js"(exports, module2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var fails = require_fails();
    var anObject = require_an_object();
    var normalizeStringArgument = require_normalize_string_argument();
    var nativeErrorToString = Error.prototype.toString;
    var INCORRECT_TO_STRING = fails(function() {
      if (DESCRIPTORS) {
        var object = Object.create(Object.defineProperty({}, "name", { get: function() {
          return this === object;
        } }));
        if (nativeErrorToString.call(object) !== "true")
          return true;
      }
      return nativeErrorToString.call({ message: 1, name: 2 }) !== "2: 1" || nativeErrorToString.call({}) !== "Error";
    });
    module2.exports = INCORRECT_TO_STRING ? function toString() {
      var O = anObject(this);
      var name = normalizeStringArgument(O.name, "Error");
      var message = normalizeStringArgument(O.message);
      return !name ? message : !message ? name : name + ": " + message;
    } : nativeErrorToString;
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.error.to-string.js
var require_es_error_to_string = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.error.to-string.js"() {
    "use strict";
    var defineBuiltIn = require_define_built_in();
    var errorToString = require_error_to_string();
    var ErrorPrototype = Error.prototype;
    if (ErrorPrototype.toString !== errorToString) {
      defineBuiltIn(ErrorPrototype, "toString", errorToString);
    }
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/iterator-close.js
var require_iterator_close = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/iterator-close.js"(exports, module2) {
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
          if (kind === "throw")
            throw value;
          return value;
        }
        innerResult = call(innerResult, iterator);
      } catch (error) {
        innerError = true;
        innerResult = error;
      }
      if (kind === "throw")
        throw value;
      if (innerError)
        throw innerResult;
      anObject(innerResult);
      return value;
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/call-with-safe-iteration-closing.js
var require_call_with_safe_iteration_closing = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/call-with-safe-iteration-closing.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/iterators.js
var require_iterators = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/iterators.js"(exports, module2) {
    "use strict";
    module2.exports = {};
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-array-iterator-method.js
var require_is_array_iterator_method = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-array-iterator-method.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/create-property.js
var require_create_property = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/create-property.js"(exports, module2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var definePropertyModule = require_object_define_property();
    var createPropertyDescriptor = require_create_property_descriptor();
    module2.exports = function(object, key, value) {
      if (DESCRIPTORS)
        definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
      else
        object[key] = value;
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/get-iterator-method.js
var require_get_iterator_method = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/get-iterator-method.js"(exports, module2) {
    "use strict";
    var classof = require_classof();
    var getMethod = require_get_method();
    var isNullOrUndefined = require_is_null_or_undefined();
    var Iterators = require_iterators();
    var wellKnownSymbol = require_well_known_symbol();
    var ITERATOR = wellKnownSymbol("iterator");
    module2.exports = function(it) {
      if (!isNullOrUndefined(it))
        return getMethod(it, ITERATOR) || getMethod(it, "@@iterator") || Iterators[classof(it)];
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/get-iterator.js
var require_get_iterator = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/get-iterator.js"(exports, module2) {
    "use strict";
    var call = require_function_call();
    var aCallable = require_a_callable();
    var anObject = require_an_object();
    var tryToString = require_try_to_string();
    var getIteratorMethod = require_get_iterator_method();
    var $TypeError = TypeError;
    module2.exports = function(argument, usingIterator) {
      var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
      if (aCallable(iteratorMethod))
        return anObject(call(iteratorMethod, argument));
      throw new $TypeError(tryToString(argument) + " is not iterable");
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/array-from.js
var require_array_from = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/array-from.js"(exports, module2) {
    "use strict";
    var bind = require_function_bind_context();
    var call = require_function_call();
    var toObject = require_to_object();
    var callWithSafeIterationClosing = require_call_with_safe_iteration_closing();
    var isArrayIteratorMethod = require_is_array_iterator_method();
    var isConstructor = require_is_constructor();
    var lengthOfArrayLike = require_length_of_array_like();
    var createProperty = require_create_property();
    var getIterator = require_get_iterator();
    var getIteratorMethod = require_get_iterator_method();
    var $Array = Array;
    module2.exports = function from(arrayLike) {
      var O = toObject(arrayLike);
      var IS_CONSTRUCTOR = isConstructor(this);
      var argumentsLength = arguments.length;
      var mapfn = argumentsLength > 1 ? arguments[1] : void 0;
      var mapping = mapfn !== void 0;
      if (mapping)
        mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : void 0);
      var iteratorMethod = getIteratorMethod(O);
      var index = 0;
      var length, result, step, iterator, next, value;
      if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {
        iterator = getIterator(O, iteratorMethod);
        next = iterator.next;
        result = IS_CONSTRUCTOR ? new this() : [];
        for (; !(step = call(next, iterator)).done; index++) {
          value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
          createProperty(result, index, value);
        }
      } else {
        length = lengthOfArrayLike(O);
        result = IS_CONSTRUCTOR ? new this(length) : $Array(length);
        for (; length > index; index++) {
          value = mapping ? mapfn(O[index], index) : O[index];
          createProperty(result, index, value);
        }
      }
      result.length = index;
      return result;
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/check-correctness-of-iteration.js
var require_check_correctness_of_iteration = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/check-correctness-of-iteration.js"(exports, module2) {
    "use strict";
    var wellKnownSymbol = require_well_known_symbol();
    var ITERATOR = wellKnownSymbol("iterator");
    var SAFE_CLOSING = false;
    try {
      called = 0;
      iteratorWithReturn = {
        next: function() {
          return { done: !!called++ };
        },
        "return": function() {
          SAFE_CLOSING = true;
        }
      };
      iteratorWithReturn[ITERATOR] = function() {
        return this;
      };
      Array.from(iteratorWithReturn, function() {
        throw 2;
      });
    } catch (error) {
    }
    var called;
    var iteratorWithReturn;
    module2.exports = function(exec, SKIP_CLOSING) {
      try {
        if (!SKIP_CLOSING && !SAFE_CLOSING)
          return false;
      } catch (error) {
        return false;
      }
      var ITERATION_SUPPORT = false;
      try {
        var object = {};
        object[ITERATOR] = function() {
          return {
            next: function() {
              return { done: ITERATION_SUPPORT = true };
            }
          };
        };
        exec(object);
      } catch (error) {
      }
      return ITERATION_SUPPORT;
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.array.from.js
var require_es_array_from = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.array.from.js"() {
    "use strict";
    var $ = require_export();
    var from = require_array_from();
    var checkCorrectnessOfIteration = require_check_correctness_of_iteration();
    var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function(iterable) {
      Array.from(iterable);
    });
    $({ target: "Array", stat: true, forced: INCORRECT_ITERATION }, {
      from
    });
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/add-to-unscopables.js
var require_add_to_unscopables = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/add-to-unscopables.js"(exports, module2) {
    "use strict";
    var wellKnownSymbol = require_well_known_symbol();
    var create = require_object_create();
    var defineProperty = require_object_define_property().f;
    var UNSCOPABLES = wellKnownSymbol("unscopables");
    var ArrayPrototype = Array.prototype;
    if (ArrayPrototype[UNSCOPABLES] === void 0) {
      defineProperty(ArrayPrototype, UNSCOPABLES, {
        configurable: true,
        value: create(null)
      });
    }
    module2.exports = function(key) {
      ArrayPrototype[UNSCOPABLES][key] = true;
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/correct-prototype-getter.js
var require_correct_prototype_getter = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/correct-prototype-getter.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-get-prototype-of.js
var require_object_get_prototype_of = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-get-prototype-of.js"(exports, module2) {
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
      if (hasOwn(object, IE_PROTO))
        return object[IE_PROTO];
      var constructor = object.constructor;
      if (isCallable(constructor) && object instanceof constructor) {
        return constructor.prototype;
      }
      return object instanceof $Object ? ObjectPrototype : null;
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/iterators-core.js
var require_iterators_core = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/iterators-core.js"(exports, module2) {
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
      if (!("next" in arrayIterator))
        BUGGY_SAFARI_ITERATORS = true;
      else {
        PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
        if (PrototypeOfArrayIteratorPrototype !== Object.prototype)
          IteratorPrototype = PrototypeOfArrayIteratorPrototype;
      }
    }
    var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function() {
      var test = {};
      return IteratorPrototype[ITERATOR].call(test) !== test;
    });
    if (NEW_ITERATOR_PROTOTYPE)
      IteratorPrototype = {};
    else if (IS_PURE)
      IteratorPrototype = create(IteratorPrototype);
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/iterator-create-constructor.js
var require_iterator_create_constructor = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/iterator-create-constructor.js"(exports, module2) {
    "use strict";
    var IteratorPrototype = require_iterators_core().IteratorPrototype;
    var create = require_object_create();
    var createPropertyDescriptor = require_create_property_descriptor();
    var setToStringTag = require_set_to_string_tag();
    var Iterators = require_iterators();
    var returnThis = function() {
      return this;
    };
    module2.exports = function(IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
      var TO_STRING_TAG = NAME + " Iterator";
      IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
      setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
      Iterators[TO_STRING_TAG] = returnThis;
      return IteratorConstructor;
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/iterator-define.js
var require_iterator_define = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/iterator-define.js"(exports, module2) {
    "use strict";
    var $ = require_export();
    var call = require_function_call();
    var IS_PURE = require_is_pure();
    var FunctionName = require_function_name();
    var isCallable = require_is_callable();
    var createIteratorConstructor = require_iterator_create_constructor();
    var getPrototypeOf = require_object_get_prototype_of();
    var setPrototypeOf = require_object_set_prototype_of();
    var setToStringTag = require_set_to_string_tag();
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var defineBuiltIn = require_define_built_in();
    var wellKnownSymbol = require_well_known_symbol();
    var Iterators = require_iterators();
    var IteratorsCore = require_iterators_core();
    var PROPER_FUNCTION_NAME = FunctionName.PROPER;
    var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
    var IteratorPrototype = IteratorsCore.IteratorPrototype;
    var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
    var ITERATOR = wellKnownSymbol("iterator");
    var KEYS = "keys";
    var VALUES = "values";
    var ENTRIES = "entries";
    var returnThis = function() {
      return this;
    };
    module2.exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
      createIteratorConstructor(IteratorConstructor, NAME, next);
      var getIterationMethod = function(KIND) {
        if (KIND === DEFAULT && defaultIterator)
          return defaultIterator;
        if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype)
          return IterablePrototype[KIND];
        switch (KIND) {
          case KEYS:
            return function keys() {
              return new IteratorConstructor(this, KIND);
            };
          case VALUES:
            return function values() {
              return new IteratorConstructor(this, KIND);
            };
          case ENTRIES:
            return function entries() {
              return new IteratorConstructor(this, KIND);
            };
        }
        return function() {
          return new IteratorConstructor(this);
        };
      };
      var TO_STRING_TAG = NAME + " Iterator";
      var INCORRECT_VALUES_NAME = false;
      var IterablePrototype = Iterable.prototype;
      var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
      var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
      var anyNativeIterator = NAME === "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
      var CurrentIteratorPrototype, methods, KEY;
      if (anyNativeIterator) {
        CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
        if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
          if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
            if (setPrototypeOf) {
              setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
            } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
              defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
            }
          }
          setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
          if (IS_PURE)
            Iterators[TO_STRING_TAG] = returnThis;
        }
      }
      if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
        if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
          createNonEnumerableProperty(IterablePrototype, "name", VALUES);
        } else {
          INCORRECT_VALUES_NAME = true;
          defaultIterator = function values() {
            return call(nativeIterator, this);
          };
        }
      }
      if (DEFAULT) {
        methods = {
          values: getIterationMethod(VALUES),
          keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
          entries: getIterationMethod(ENTRIES)
        };
        if (FORCED)
          for (KEY in methods) {
            if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
              defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
            }
          }
        else
          $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
      }
      if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
        defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
      }
      Iterators[NAME] = defaultIterator;
      return methods;
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/create-iter-result-object.js
var require_create_iter_result_object = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/create-iter-result-object.js"(exports, module2) {
    "use strict";
    module2.exports = function(value, done) {
      return { value, done };
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.array.iterator.js
var require_es_array_iterator = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.array.iterator.js"(exports, module2) {
    "use strict";
    var toIndexedObject = require_to_indexed_object();
    var addToUnscopables = require_add_to_unscopables();
    var Iterators = require_iterators();
    var InternalStateModule = require_internal_state();
    var defineProperty = require_object_define_property().f;
    var defineIterator = require_iterator_define();
    var createIterResultObject = require_create_iter_result_object();
    var IS_PURE = require_is_pure();
    var DESCRIPTORS = require_descriptors();
    var ARRAY_ITERATOR = "Array Iterator";
    var setInternalState = InternalStateModule.set;
    var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);
    module2.exports = defineIterator(Array, "Array", function(iterated, kind) {
      setInternalState(this, {
        type: ARRAY_ITERATOR,
        target: toIndexedObject(iterated),
        // target
        index: 0,
        // next index
        kind
        // kind
      });
    }, function() {
      var state = getInternalState(this);
      var target = state.target;
      var index = state.index++;
      if (!target || index >= target.length) {
        state.target = void 0;
        return createIterResultObject(void 0, true);
      }
      switch (state.kind) {
        case "keys":
          return createIterResultObject(index, false);
        case "values":
          return createIterResultObject(target[index], false);
      }
      return createIterResultObject([index, target[index]], false);
    }, "values");
    var values = Iterators.Arguments = Iterators.Array;
    addToUnscopables("keys");
    addToUnscopables("values");
    addToUnscopables("entries");
    if (!IS_PURE && DESCRIPTORS && values.name !== "values")
      try {
        defineProperty(values, "name", { value: "values" });
      } catch (error) {
      }
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/array-method-has-species-support.js
var require_array_method_has_species_support = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/array-method-has-species-support.js"(exports, module2) {
    "use strict";
    var fails = require_fails();
    var wellKnownSymbol = require_well_known_symbol();
    var V8_VERSION = require_engine_v8_version();
    var SPECIES = wellKnownSymbol("species");
    module2.exports = function(METHOD_NAME) {
      return V8_VERSION >= 51 || !fails(function() {
        var array = [];
        var constructor = array.constructor = {};
        constructor[SPECIES] = function() {
          return { foo: 1 };
        };
        return array[METHOD_NAME](Boolean).foo !== 1;
      });
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.array.slice.js
var require_es_array_slice = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.array.slice.js"() {
    "use strict";
    var $ = require_export();
    var isArray = require_is_array();
    var isConstructor = require_is_constructor();
    var isObject = require_is_object();
    var toAbsoluteIndex = require_to_absolute_index();
    var lengthOfArrayLike = require_length_of_array_like();
    var toIndexedObject = require_to_indexed_object();
    var createProperty = require_create_property();
    var wellKnownSymbol = require_well_known_symbol();
    var arrayMethodHasSpeciesSupport = require_array_method_has_species_support();
    var nativeSlice = require_array_slice();
    var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("slice");
    var SPECIES = wellKnownSymbol("species");
    var $Array = Array;
    var max = Math.max;
    $({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT }, {
      slice: function slice(start, end) {
        var O = toIndexedObject(this);
        var length = lengthOfArrayLike(O);
        var k = toAbsoluteIndex(start, length);
        var fin = toAbsoluteIndex(end === void 0 ? length : end, length);
        var Constructor, result, n;
        if (isArray(O)) {
          Constructor = O.constructor;
          if (isConstructor(Constructor) && (Constructor === $Array || isArray(Constructor.prototype))) {
            Constructor = void 0;
          } else if (isObject(Constructor)) {
            Constructor = Constructor[SPECIES];
            if (Constructor === null)
              Constructor = void 0;
          }
          if (Constructor === $Array || Constructor === void 0) {
            return nativeSlice(O, k, fin);
          }
        }
        result = new (Constructor === void 0 ? $Array : Constructor)(max(fin - k, 0));
        for (n = 0; k < fin; k++, n++)
          if (k in O)
            createProperty(result, n, O[k]);
        result.length = n;
        return result;
      }
    });
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-to-string.js
var require_object_to_string = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-to-string.js"(exports, module2) {
    "use strict";
    var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
    var classof = require_classof();
    module2.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
      return "[object " + classof(this) + "]";
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.object.to-string.js
var require_es_object_to_string = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.object.to-string.js"() {
    "use strict";
    var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
    var defineBuiltIn = require_define_built_in();
    var toString = require_object_to_string();
    if (!TO_STRING_TAG_SUPPORT) {
      defineBuiltIn(Object.prototype, "toString", toString, { unsafe: true });
    }
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/regexp-flags.js
var require_regexp_flags = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/regexp-flags.js"(exports, module2) {
    "use strict";
    var anObject = require_an_object();
    module2.exports = function() {
      var that = anObject(this);
      var result = "";
      if (that.hasIndices)
        result += "d";
      if (that.global)
        result += "g";
      if (that.ignoreCase)
        result += "i";
      if (that.multiline)
        result += "m";
      if (that.dotAll)
        result += "s";
      if (that.unicode)
        result += "u";
      if (that.unicodeSets)
        result += "v";
      if (that.sticky)
        result += "y";
      return result;
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/regexp-sticky-helpers.js
var require_regexp_sticky_helpers = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/regexp-sticky-helpers.js"(exports, module2) {
    "use strict";
    var fails = require_fails();
    var global2 = require_global();
    var $RegExp = global2.RegExp;
    var UNSUPPORTED_Y = fails(function() {
      var re = $RegExp("a", "y");
      re.lastIndex = 2;
      return re.exec("abcd") !== null;
    });
    var MISSED_STICKY = UNSUPPORTED_Y || fails(function() {
      return !$RegExp("a", "y").sticky;
    });
    var BROKEN_CARET = UNSUPPORTED_Y || fails(function() {
      var re = $RegExp("^r", "gy");
      re.lastIndex = 2;
      return re.exec("str") !== null;
    });
    module2.exports = {
      BROKEN_CARET,
      MISSED_STICKY,
      UNSUPPORTED_Y
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/regexp-unsupported-dot-all.js
var require_regexp_unsupported_dot_all = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/regexp-unsupported-dot-all.js"(exports, module2) {
    "use strict";
    var fails = require_fails();
    var global2 = require_global();
    var $RegExp = global2.RegExp;
    module2.exports = fails(function() {
      var re = $RegExp(".", "s");
      return !(re.dotAll && re.test("\n") && re.flags === "s");
    });
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/regexp-unsupported-ncg.js
var require_regexp_unsupported_ncg = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/regexp-unsupported-ncg.js"(exports, module2) {
    "use strict";
    var fails = require_fails();
    var global2 = require_global();
    var $RegExp = global2.RegExp;
    module2.exports = fails(function() {
      var re = $RegExp("(?<a>b)", "g");
      return re.exec("b").groups.a !== "b" || "b".replace(re, "$<a>c") !== "bc";
    });
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/regexp-exec.js
var require_regexp_exec = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/regexp-exec.js"(exports, module2) {
    "use strict";
    var call = require_function_call();
    var uncurryThis = require_function_uncurry_this();
    var toString = require_to_string();
    var regexpFlags = require_regexp_flags();
    var stickyHelpers = require_regexp_sticky_helpers();
    var shared = require_shared();
    var create = require_object_create();
    var getInternalState = require_internal_state().get;
    var UNSUPPORTED_DOT_ALL = require_regexp_unsupported_dot_all();
    var UNSUPPORTED_NCG = require_regexp_unsupported_ncg();
    var nativeReplace = shared("native-string-replace", String.prototype.replace);
    var nativeExec = RegExp.prototype.exec;
    var patchedExec = nativeExec;
    var charAt = uncurryThis("".charAt);
    var indexOf = uncurryThis("".indexOf);
    var replace = uncurryThis("".replace);
    var stringSlice = uncurryThis("".slice);
    var UPDATES_LAST_INDEX_WRONG = function() {
      var re1 = /a/;
      var re2 = /b*/g;
      call(nativeExec, re1, "a");
      call(nativeExec, re2, "a");
      return re1.lastIndex !== 0 || re2.lastIndex !== 0;
    }();
    var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;
    var NPCG_INCLUDED = /()??/.exec("")[1] !== void 0;
    var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;
    if (PATCH) {
      patchedExec = function exec(string) {
        var re = this;
        var state = getInternalState(re);
        var str = toString(string);
        var raw = state.raw;
        var result, reCopy, lastIndex, match, i, object, group;
        if (raw) {
          raw.lastIndex = re.lastIndex;
          result = call(patchedExec, raw, str);
          re.lastIndex = raw.lastIndex;
          return result;
        }
        var groups = state.groups;
        var sticky = UNSUPPORTED_Y && re.sticky;
        var flags = call(regexpFlags, re);
        var source = re.source;
        var charsAdded = 0;
        var strCopy = str;
        if (sticky) {
          flags = replace(flags, "y", "");
          if (indexOf(flags, "g") === -1) {
            flags += "g";
          }
          strCopy = stringSlice(str, re.lastIndex);
          if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt(str, re.lastIndex - 1) !== "\n")) {
            source = "(?: " + source + ")";
            strCopy = " " + strCopy;
            charsAdded++;
          }
          reCopy = new RegExp("^(?:" + source + ")", flags);
        }
        if (NPCG_INCLUDED) {
          reCopy = new RegExp("^" + source + "$(?!\\s)", flags);
        }
        if (UPDATES_LAST_INDEX_WRONG)
          lastIndex = re.lastIndex;
        match = call(nativeExec, sticky ? reCopy : re, strCopy);
        if (sticky) {
          if (match) {
            match.input = stringSlice(match.input, charsAdded);
            match[0] = stringSlice(match[0], charsAdded);
            match.index = re.lastIndex;
            re.lastIndex += match[0].length;
          } else
            re.lastIndex = 0;
        } else if (UPDATES_LAST_INDEX_WRONG && match) {
          re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
        }
        if (NPCG_INCLUDED && match && match.length > 1) {
          call(nativeReplace, match[0], reCopy, function() {
            for (i = 1; i < arguments.length - 2; i++) {
              if (arguments[i] === void 0)
                match[i] = void 0;
            }
          });
        }
        if (match && groups) {
          match.groups = object = create(null);
          for (i = 0; i < groups.length; i++) {
            group = groups[i];
            object[group[0]] = match[group[1]];
          }
        }
        return match;
      };
    }
    module2.exports = patchedExec;
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.regexp.exec.js
var require_es_regexp_exec = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.regexp.exec.js"() {
    "use strict";
    var $ = require_export();
    var exec = require_regexp_exec();
    $({ target: "RegExp", proto: true, forced: /./.exec !== exec }, {
      exec
    });
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.regexp.test.js
var require_es_regexp_test = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.regexp.test.js"() {
    "use strict";
    require_es_regexp_exec();
    var $ = require_export();
    var call = require_function_call();
    var isCallable = require_is_callable();
    var anObject = require_an_object();
    var toString = require_to_string();
    var DELEGATES_TO_EXEC = function() {
      var execCalled = false;
      var re = /[ac]/;
      re.exec = function() {
        execCalled = true;
        return /./.exec.apply(this, arguments);
      };
      return re.test("abc") === true && execCalled;
    }();
    var nativeTest = /./.test;
    $({ target: "RegExp", proto: true, forced: !DELEGATES_TO_EXEC }, {
      test: function(S) {
        var R = anObject(this);
        var string = toString(S);
        var exec = R.exec;
        if (!isCallable(exec))
          return call(nativeTest, R, string);
        var result = call(exec, R, string);
        if (result === null)
          return false;
        anObject(result);
        return true;
      }
    });
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/regexp-get-flags.js
var require_regexp_get_flags = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/regexp-get-flags.js"(exports, module2) {
    "use strict";
    var call = require_function_call();
    var hasOwn = require_has_own_property();
    var isPrototypeOf = require_object_is_prototype_of();
    var regExpFlags = require_regexp_flags();
    var RegExpPrototype = RegExp.prototype;
    module2.exports = function(R) {
      var flags = R.flags;
      return flags === void 0 && !("flags" in RegExpPrototype) && !hasOwn(R, "flags") && isPrototypeOf(RegExpPrototype, R) ? call(regExpFlags, R) : flags;
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.regexp.to-string.js
var require_es_regexp_to_string = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.regexp.to-string.js"() {
    "use strict";
    var PROPER_FUNCTION_NAME = require_function_name().PROPER;
    var defineBuiltIn = require_define_built_in();
    var anObject = require_an_object();
    var $toString = require_to_string();
    var fails = require_fails();
    var getRegExpFlags = require_regexp_get_flags();
    var TO_STRING = "toString";
    var RegExpPrototype = RegExp.prototype;
    var nativeToString = RegExpPrototype[TO_STRING];
    var NOT_GENERIC = fails(function() {
      return nativeToString.call({ source: "a", flags: "b" }) !== "/a/b";
    });
    var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name !== TO_STRING;
    if (NOT_GENERIC || INCORRECT_NAME) {
      defineBuiltIn(RegExpPrototype, TO_STRING, function toString() {
        var R = anObject(this);
        var pattern = $toString(R.source);
        var flags = $toString(getRegExpFlags(R));
        return "/" + pattern + "/" + flags;
      }, { unsafe: true });
    }
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/string-multibyte.js
var require_string_multibyte = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/string-multibyte.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var toString = require_to_string();
    var requireObjectCoercible = require_require_object_coercible();
    var charAt = uncurryThis("".charAt);
    var charCodeAt = uncurryThis("".charCodeAt);
    var stringSlice = uncurryThis("".slice);
    var createMethod = function(CONVERT_TO_STRING) {
      return function($this, pos) {
        var S = toString(requireObjectCoercible($this));
        var position = toIntegerOrInfinity(pos);
        var size = S.length;
        var first, second;
        if (position < 0 || position >= size)
          return CONVERT_TO_STRING ? "" : void 0;
        first = charCodeAt(S, position);
        return first < 55296 || first > 56319 || position + 1 === size || (second = charCodeAt(S, position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? charAt(S, position) : first : CONVERT_TO_STRING ? stringSlice(S, position, position + 2) : (first - 55296 << 10) + (second - 56320) + 65536;
      };
    };
    module2.exports = {
      // `String.prototype.codePointAt` method
      // https://tc39.es/ecma262/#sec-string.prototype.codepointat
      codeAt: createMethod(false),
      // `String.prototype.at` method
      // https://github.com/mathiasbynens/String.prototype.at
      charAt: createMethod(true)
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.string.iterator.js
var require_es_string_iterator = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.string.iterator.js"() {
    "use strict";
    var charAt = require_string_multibyte().charAt;
    var toString = require_to_string();
    var InternalStateModule = require_internal_state();
    var defineIterator = require_iterator_define();
    var createIterResultObject = require_create_iter_result_object();
    var STRING_ITERATOR = "String Iterator";
    var setInternalState = InternalStateModule.set;
    var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);
    defineIterator(String, "String", function(iterated) {
      setInternalState(this, {
        type: STRING_ITERATOR,
        string: toString(iterated),
        index: 0
      });
    }, function next() {
      var state = getInternalState(this);
      var string = state.string;
      var index = state.index;
      var point;
      if (index >= string.length)
        return createIterResultObject(void 0, true);
      point = charAt(string, index);
      state.index += point.length;
      return createIterResultObject(point, false);
    });
  }
});

// node_modules/.pnpm/@mrhenry+core-web@1.2.1/node_modules/@mrhenry/core-web/modules/requestAnimationFrame.js
var require_requestAnimationFrame = __commonJS({
  "node_modules/.pnpm/@mrhenry+core-web@1.2.1/node_modules/@mrhenry/core-web/modules/requestAnimationFrame.js"() {
    (function(undefined2) {
      if (!("requestAnimationFrame" in self)) {
        (function(global2) {
          var rafPrefix;
          var nowOffset = Date.now();
          var pnow = function() {
            if (global2.performance && typeof global2.performance.now === "function") {
              return global2.performance.now();
            }
            return Date.now() - nowOffset;
          };
          if ("mozRequestAnimationFrame" in global2) {
            rafPrefix = "moz";
          } else if ("webkitRequestAnimationFrame" in global2) {
            rafPrefix = "webkit";
          }
          if (rafPrefix) {
            global2.requestAnimationFrame = function(callback) {
              return global2[rafPrefix + "RequestAnimationFrame"](function() {
                callback(pnow());
              });
            };
            global2.cancelAnimationFrame = global2[rafPrefix + "CancelAnimationFrame"];
          } else {
            var lastTime = Date.now();
            global2.requestAnimationFrame = function(callback) {
              if (typeof callback !== "function") {
                throw new TypeError(callback + " is not a function");
              }
              var currentTime = Date.now(), delay = 16 + lastTime - currentTime;
              if (delay < 0) {
                delay = 0;
              }
              lastTime = currentTime;
              return setTimeout(function() {
                lastTime = Date.now();
                callback(pnow());
              }, delay);
            };
            global2.cancelAnimationFrame = function(id) {
              clearTimeout(id);
            };
          }
        })(self);
      }
    }).call("object" === typeof window && window || "object" === typeof self && self || "object" === typeof global && global || {});
  }
});

// node_modules/.pnpm/@mrhenry+core-web@1.2.1/node_modules/@mrhenry/core-web/modules/smoothscroll.js
var require_smoothscroll = __commonJS({
  "node_modules/.pnpm/@mrhenry+core-web@1.2.1/node_modules/@mrhenry/core-web/modules/smoothscroll.js"() {
    (function(undefined2) {
      if (!function() {
        if ("document" in self && "documentElement" in self.document && "style" in self.document.documentElement && "scrollBehavior" in document.documentElement.style)
          return true;
        if (Element.prototype.scrollTo && Element.prototype.scrollTo.toString().indexOf("[native code]") > -1)
          return false;
        try {
          var e = false, t = { top: 1, left: 0 };
          Object.defineProperty(t, "behavior", { get: function() {
            return e = true, "smooth";
          }, enumerable: true });
          var o = document.createElement("DIV"), n = document.createElement("DIV");
          return o.setAttribute("style", "height: 1px; overflow: scroll;"), n.setAttribute("style", "height: 2px; overflow: scroll;"), o.appendChild(n), o.scrollTo(t), e;
        } catch (e2) {
          return false;
        }
      }()) {
        (function(global2, factory) {
          var exports2 = {};
          factory(exports2);
          exports2.polyfill();
        })(this, function(exports2) {
          "use strict";
          var ease = function(k) {
            return 0.5 * (1 - Math.cos(Math.PI * k));
          };
          var DURATION = 500;
          var isScrollBehaviorSupported = function() {
            return "scrollBehavior" in document.documentElement.style;
          };
          var original = {
            _elementScroll: undefined2,
            get elementScroll() {
              return this._elementScroll || (this._elementScroll = HTMLElement.prototype.scroll || HTMLElement.prototype.scrollTo || function(x, y) {
                this.scrollLeft = x;
                this.scrollTop = y;
              });
            },
            _elementScrollIntoView: undefined2,
            get elementScrollIntoView() {
              return this._elementScrollIntoView || (this._elementScrollIntoView = HTMLElement.prototype.scrollIntoView);
            },
            _windowScroll: undefined2,
            get windowScroll() {
              return this._windowScroll || (this._windowScroll = window.scroll || window.scrollTo);
            }
          };
          var modifyPrototypes = function(modification) {
            var prototypes = [HTMLElement.prototype, SVGElement.prototype, Element.prototype];
            prototypes.forEach(function(prototype) {
              return modification(prototype);
            });
          };
          var now = function() {
            var _a, _b, _c;
            return (_c = (_b = (_a = window.performance) === null || _a === void 0 ? void 0 : _a.now) === null || _b === void 0 ? void 0 : _b.call(_a)) !== null && _c !== void 0 ? _c : Date.now();
          };
          var step = function(context) {
            var currentTime = now();
            var elapsed = (currentTime - context.timeStamp) / (context.duration || DURATION);
            if (elapsed > 1) {
              context.method(context.targetX, context.targetY);
              context.callback();
              return;
            }
            var value = (context.timingFunc || ease)(elapsed);
            var currentX = context.startX + (context.targetX - context.startX) * value;
            var currentY = context.startY + (context.targetY - context.startY) * value;
            context.method(currentX, currentY);
            context.rafId = requestAnimationFrame(function() {
              step(context);
            });
          };
          var nonFinite = function(value) {
            if (!isFinite(value)) {
              return 0;
            }
            return Number(value);
          };
          var isObject = function(value) {
            var type = typeof value;
            return value !== null && (type === "object" || type === "function");
          };
          /*! *****************************************************************************
              Copyright (c) Microsoft Corporation.
          
              Permission to use, copy, modify, and/or distribute this software for any
              purpose with or without fee is hereby granted.
          
              THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
              REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
              AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
              INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
              LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
              OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
              PERFORMANCE OF THIS SOFTWARE.
              ***************************************************************************** */
          var __assign = function() {
            __assign = Object.assign || function __assign2(t) {
              for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                  if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
              }
              return t;
            };
            return __assign.apply(this, arguments);
          };
          function __read(o, n) {
            var m = typeof Symbol === "function" && o[Symbol.iterator];
            if (!m)
              return o;
            var i = m.call(o), r, ar = [], e;
            try {
              while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
            } catch (error) {
              e = { error };
            } finally {
              try {
                if (r && !r.done && (m = i["return"]))
                  m.call(i);
              } finally {
                if (e)
                  throw e.error;
              }
            }
            return ar;
          }
          var elementScroll = function(element, options) {
            var _a, _b;
            var originalBoundFunc = original.elementScroll.bind(element);
            if (options.left === undefined2 && options.top === undefined2) {
              return;
            }
            var startX = element.scrollLeft;
            var startY = element.scrollTop;
            var targetX = nonFinite((_a = options.left) !== null && _a !== void 0 ? _a : startX);
            var targetY = nonFinite((_b = options.top) !== null && _b !== void 0 ? _b : startY);
            if (options.behavior !== "smooth") {
              return originalBoundFunc(targetX, targetY);
            }
            var removeEventListener = function() {
              window.removeEventListener("wheel", cancelScroll);
              window.removeEventListener("touchmove", cancelScroll);
            };
            var context = {
              timeStamp: now(),
              duration: options.duration,
              startX,
              startY,
              targetX,
              targetY,
              rafId: 0,
              method: originalBoundFunc,
              timingFunc: options.timingFunc,
              callback: removeEventListener
            };
            var cancelScroll = function() {
              cancelAnimationFrame(context.rafId);
              removeEventListener();
            };
            window.addEventListener("wheel", cancelScroll, {
              passive: true,
              once: true
            });
            window.addEventListener("touchmove", cancelScroll, {
              passive: true,
              once: true
            });
            step(context);
          };
          var elementScrollPolyfill = function(animationOptions) {
            if (isScrollBehaviorSupported()) {
              return;
            }
            var originalFunc = original.elementScroll;
            modifyPrototypes(function(prototype) {
              return prototype.scroll = function scroll() {
                if (arguments.length === 1) {
                  var scrollOptions = arguments[0];
                  if (!isObject(scrollOptions)) {
                    throw new TypeError("Failed to execute 'scroll' on 'Element': parameter 1 ('options') is not an object.");
                  }
                  return elementScroll(this, __assign(__assign({}, scrollOptions), animationOptions));
                }
                return originalFunc.apply(this, arguments);
              };
            });
          };
          var elementScrollBy = function(element, options) {
            var left = nonFinite(options.left || 0) + element.scrollLeft;
            var top = nonFinite(options.top || 0) + element.scrollTop;
            return elementScroll(element, __assign(__assign({}, options), { left, top }));
          };
          var elementScrollByPolyfill = function(animationOptions) {
            if (isScrollBehaviorSupported()) {
              return;
            }
            modifyPrototypes(function(prototype) {
              return prototype.scrollBy = function scrollBy() {
                if (arguments.length === 1) {
                  var scrollByOptions = arguments[0];
                  if (!isObject(scrollByOptions)) {
                    throw new TypeError("Failed to execute 'scrollBy' on 'Element': parameter 1 ('options') is not an object.");
                  }
                  return elementScrollBy(this, __assign(__assign({}, scrollByOptions), animationOptions));
                }
                var left = Number(arguments[0]);
                var top = Number(arguments[1]);
                return elementScrollBy(this, { left, top });
              };
            });
          };
          var normalizeWritingMode = function(writingMode) {
            switch (writingMode) {
              case "horizontal-tb":
              case "lr":
              case "lr-tb":
              case "rl":
              case "rl-tb":
                return 0;
              case "vertical-rl":
              case "tb":
              case "tb-rl":
                return 1;
              case "vertical-lr":
              case "tb-lr":
                return 2;
              case "sideways-rl":
                return 3;
              case "sideways-lr":
                return 4;
            }
            return 0;
          };
          var toPhysicalAlignment = function(options, writingMode, isLTR) {
            var _a;
            var _b = __read([options.block || "start", options.inline || "nearest"], 2), xPos = _b[0], yPos = _b[1];
            var layout = 0;
            if (!isLTR) {
              layout ^= 2;
            }
            switch (writingMode) {
              case 0:
                layout = layout >> 1 | (layout & 1) << 1;
                _a = __read([yPos, xPos], 2), xPos = _a[0], yPos = _a[1];
                break;
              case 1:
              case 3:
                layout ^= 1;
                break;
              case 4:
                layout ^= 2;
                break;
            }
            return [xPos, yPos].map(function(value, index) {
              switch (value) {
                case "center":
                  return 1;
                case "nearest":
                  return 0;
                default: {
                  var reverse = layout >> index & 1;
                  return value === "start" === !reverse ? 2 : 3;
                }
              }
            });
          };
          var alignNearest = function(scrollingEdgeStart, scrollingEdgeEnd, scrollingSize, scrollingBorderStart, scrollingBorderEnd, elementEdgeStart, elementEdgeEnd, elementSize) {
            if (elementEdgeStart < scrollingEdgeStart && elementEdgeEnd > scrollingEdgeEnd || elementEdgeStart > scrollingEdgeStart && elementEdgeEnd < scrollingEdgeEnd) {
              return 0;
            }
            if (elementEdgeStart <= scrollingEdgeStart && elementSize <= scrollingSize || elementEdgeEnd >= scrollingEdgeEnd && elementSize >= scrollingSize) {
              return elementEdgeStart - scrollingEdgeStart - scrollingBorderStart;
            }
            if (elementEdgeEnd > scrollingEdgeEnd && elementSize < scrollingSize || elementEdgeStart < scrollingEdgeStart && elementSize > scrollingSize) {
              return elementEdgeEnd - scrollingEdgeEnd + scrollingBorderEnd;
            }
            return 0;
          };
          var canOverflow = function(overflow) {
            return overflow !== "visible" && overflow !== "clip";
          };
          var getFrameElement = function(element) {
            if (!element.ownerDocument || !element.ownerDocument.defaultView) {
              return null;
            }
            try {
              return element.ownerDocument.defaultView.frameElement;
            } catch (e) {
              return null;
            }
          };
          var isHiddenByFrame = function(element) {
            var frame = getFrameElement(element);
            if (!frame) {
              return false;
            }
            return frame.clientHeight < element.scrollHeight || frame.clientWidth < element.scrollWidth;
          };
          var isScrollable = function(element, computedStyle) {
            if (element.clientHeight < element.scrollHeight || element.clientWidth < element.scrollWidth) {
              return canOverflow(computedStyle.overflowY) || canOverflow(computedStyle.overflowX) || isHiddenByFrame(element);
            }
            return false;
          };
          var parentElement = function(element) {
            var parentNode = element.parentNode;
            if (parentNode !== null && parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
              return parentNode.host;
            }
            return parentNode;
          };
          var clamp = function(value, width) {
            if (value < -width) {
              return -width;
            }
            if (value > width) {
              return width;
            }
            return value;
          };
          var isCSSPropertySupported = function(property) {
            return property in document.documentElement.style;
          };
          var getSupportedScrollMarginProperty = function() {
            return ["scroll-margin", "scroll-snap-margin"].filter(isCSSPropertySupported)[0];
          };
          var getElementScrollSnapArea = function(element, computedStyle) {
            var _a = element.getBoundingClientRect(), top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left;
            var _b = __read([
              "top",
              "right",
              "bottom",
              "left"
            ].map(function(edge) {
              var scrollProperty = getSupportedScrollMarginProperty();
              var value = computedStyle.getPropertyValue(scrollProperty + "-" + edge);
              return parseInt(value, 10) || 0;
            }), 4), scrollMarginTop = _b[0], scrollMarginRight = _b[1], scrollMarginBottom = _b[2], scrollMarginLeft = _b[3];
            return [top - scrollMarginTop, right + scrollMarginRight, bottom + scrollMarginBottom, left - scrollMarginLeft];
          };
          var elementScrollIntoView = function(element, options) {
            if (element.isConnected === false) {
              return;
            }
            var scrollingElement = document.scrollingElement || document.documentElement;
            var frames = [];
            var documentElementStyle = getComputedStyle(document.documentElement);
            for (var cursor = parentElement(element); cursor !== null; cursor = parentElement(cursor)) {
              if (cursor === scrollingElement) {
                frames.push(cursor);
                break;
              }
              var cursorStyle = getComputedStyle(cursor);
              if (cursor === document.body && isScrollable(cursor, cursorStyle) && !isScrollable(document.documentElement, documentElementStyle)) {
                continue;
              }
              if (isScrollable(cursor, cursorStyle)) {
                frames.push(cursor);
              }
              if (cursorStyle.position === "fixed") {
                break;
              }
            }
            var viewportWidth = window.visualViewport ? window.visualViewport.width : innerWidth;
            var viewportHeight = window.visualViewport ? window.visualViewport.height : innerHeight;
            var viewportX = window.scrollX || window.pageXOffset;
            var viewportY = window.scrollY || window.pageYOffset;
            var computedStyle = getComputedStyle(element);
            var _a = __read(getElementScrollSnapArea(element, computedStyle), 4), targetTop = _a[0], targetRight = _a[1], targetBottom = _a[2], targetLeft = _a[3];
            var targetHeight = targetBottom - targetTop;
            var targetWidth = targetRight - targetLeft;
            var writingMode = normalizeWritingMode(computedStyle.writingMode || computedStyle.getPropertyValue("-webkit-writing-mode") || computedStyle.getPropertyValue("-ms-writing-mode"));
            var isLTR = computedStyle.direction !== "rtl";
            var _b = __read(toPhysicalAlignment(options, writingMode, isLTR), 2), alignX = _b[0], alignY = _b[1];
            var targetBlock = function() {
              switch (alignY) {
                case 1:
                  return targetTop + targetHeight / 2;
                case 2:
                case 0:
                  return targetTop;
                case 3:
                  return targetBottom;
              }
            }();
            var targetInline = function() {
              switch (alignX) {
                case 1:
                  return targetLeft + targetWidth / 2;
                case 3:
                  return targetRight;
                case 2:
                case 0:
                  return targetLeft;
              }
            }();
            var actions = [];
            frames.forEach(function(frame) {
              var _a2 = frame.getBoundingClientRect(), height = _a2.height, width = _a2.width, top = _a2.top, right = _a2.right, bottom = _a2.bottom, left = _a2.left;
              var frameStyle = getComputedStyle(frame);
              var borderLeft = parseInt(frameStyle.borderLeftWidth, 10);
              var borderTop = parseInt(frameStyle.borderTopWidth, 10);
              var borderRight = parseInt(frameStyle.borderRightWidth, 10);
              var borderBottom = parseInt(frameStyle.borderBottomWidth, 10);
              var blockScroll = 0;
              var inlineScroll = 0;
              var scrollbarWidth = "offsetWidth" in frame ? frame.offsetWidth - frame.clientWidth - borderLeft - borderRight : 0;
              var scrollbarHeight = "offsetHeight" in frame ? frame.offsetHeight - frame.clientHeight - borderTop - borderBottom : 0;
              if (scrollingElement === frame) {
                switch (alignY) {
                  case 2: {
                    blockScroll = targetBlock;
                    break;
                  }
                  case 3: {
                    blockScroll = targetBlock - viewportHeight;
                    break;
                  }
                  case 1: {
                    blockScroll = targetBlock - viewportHeight / 2;
                    break;
                  }
                  case 0: {
                    blockScroll = alignNearest(viewportY, viewportY + viewportHeight, viewportHeight, borderTop, borderBottom, viewportY + targetBlock, viewportY + targetBlock + targetHeight, targetHeight);
                    break;
                  }
                }
                switch (alignX) {
                  case 2: {
                    inlineScroll = targetInline;
                    break;
                  }
                  case 3: {
                    inlineScroll = targetInline - viewportWidth;
                    break;
                  }
                  case 1: {
                    inlineScroll = targetInline - viewportWidth / 2;
                    break;
                  }
                  case 0: {
                    inlineScroll = alignNearest(viewportX, viewportX + viewportWidth, viewportWidth, borderLeft, borderRight, viewportX + targetInline, viewportX + targetInline + targetWidth, targetWidth);
                    break;
                  }
                }
                blockScroll += viewportY;
                inlineScroll += viewportX;
              } else {
                switch (alignY) {
                  case 2: {
                    blockScroll = targetBlock - top - borderTop;
                    break;
                  }
                  case 3: {
                    blockScroll = targetBlock - bottom + borderBottom + scrollbarHeight;
                    break;
                  }
                  case 1: {
                    blockScroll = targetBlock - (top + height / 2) + scrollbarHeight / 2;
                    break;
                  }
                  case 0: {
                    blockScroll = alignNearest(top, bottom, height, borderTop, borderBottom + scrollbarHeight, targetBlock, targetBlock + targetHeight, targetHeight);
                    break;
                  }
                }
                switch (alignX) {
                  case 2: {
                    inlineScroll = targetInline - left - borderLeft;
                    break;
                  }
                  case 3: {
                    inlineScroll = targetInline - right + borderRight + scrollbarWidth;
                    break;
                  }
                  case 1: {
                    inlineScroll = targetInline - (left + width / 2) + scrollbarWidth / 2;
                    break;
                  }
                  case 0: {
                    inlineScroll = alignNearest(left, right, width, borderLeft, borderRight + scrollbarWidth, targetInline, targetInline + targetWidth, targetWidth);
                    break;
                  }
                }
                var scrollLeft = frame.scrollLeft, scrollTop = frame.scrollTop;
                blockScroll = clamp(scrollTop + blockScroll, frame.scrollHeight - height + scrollbarHeight);
                inlineScroll = clamp(scrollLeft + inlineScroll, frame.scrollWidth - width + scrollbarWidth);
                targetBlock += scrollTop - blockScroll;
                targetInline += scrollLeft - inlineScroll;
              }
              actions.push(function() {
                return elementScroll(frame, __assign(__assign({}, options), { top: blockScroll, left: inlineScroll }));
              });
            });
            actions.forEach(function(run) {
              return run();
            });
          };
          var elementScrollIntoViewPolyfill = function(animationOptions) {
            if (isScrollBehaviorSupported()) {
              return;
            }
            var originalFunc = original.elementScrollIntoView;
            modifyPrototypes(function(prototype) {
              return prototype.scrollIntoView = function scrollIntoView() {
                var scrollIntoViewOptions = arguments[0];
                if (arguments.length === 1 && isObject(scrollIntoViewOptions)) {
                  return elementScrollIntoView(this, __assign(__assign({}, scrollIntoViewOptions), animationOptions));
                }
                return originalFunc.apply(this, arguments);
              };
            });
          };
          var elementScrollToPolyfill = function(animationOptions) {
            if (isScrollBehaviorSupported()) {
              return;
            }
            var originalFunc = original.elementScroll;
            modifyPrototypes(function(prototype) {
              return prototype.scrollTo = function scrollTo() {
                if (arguments.length === 1) {
                  var scrollToOptions = arguments[0];
                  if (!isObject(scrollToOptions)) {
                    throw new TypeError("Failed to execute 'scrollTo' on 'Element': parameter 1 ('options') is not an object.");
                  }
                  var left = Number(scrollToOptions.left);
                  var top_1 = Number(scrollToOptions.top);
                  return elementScroll(this, __assign(__assign(__assign({}, scrollToOptions), { left, top: top_1 }), animationOptions));
                }
                return originalFunc.apply(this, arguments);
              };
            });
          };
          var windowScroll = function(options) {
            var _a, _b;
            var originalBoundFunc = original.windowScroll.bind(window);
            if (options.left === undefined2 && options.top === undefined2) {
              return;
            }
            var startX = window.scrollX || window.pageXOffset;
            var startY = window.scrollY || window.pageYOffset;
            var targetX = nonFinite((_a = options.left) !== null && _a !== void 0 ? _a : startX);
            var targetY = nonFinite((_b = options.top) !== null && _b !== void 0 ? _b : startY);
            if (options.behavior !== "smooth") {
              return originalBoundFunc(targetX, targetY);
            }
            var removeEventListener = function() {
              window.removeEventListener("wheel", cancelScroll);
              window.removeEventListener("touchmove", cancelScroll);
            };
            var context = {
              timeStamp: now(),
              duration: options.duration,
              startX,
              startY,
              targetX,
              targetY,
              rafId: 0,
              method: originalBoundFunc,
              timingFunc: options.timingFunc,
              callback: removeEventListener
            };
            var cancelScroll = function() {
              cancelAnimationFrame(context.rafId);
              removeEventListener();
            };
            window.addEventListener("wheel", cancelScroll, {
              passive: true,
              once: true
            });
            window.addEventListener("touchmove", cancelScroll, {
              passive: true,
              once: true
            });
            step(context);
          };
          var windowScrollPolyfill = function(animationOptions) {
            if (isScrollBehaviorSupported()) {
              return;
            }
            var originalFunc = original.windowScroll;
            window.scroll = function scroll() {
              if (arguments.length === 1) {
                var scrollOptions = arguments[0];
                if (!isObject(scrollOptions)) {
                  throw new TypeError("Failed to execute 'scroll' on 'Window': parameter 1 ('options') is not an object.");
                }
                return windowScroll(__assign(__assign({}, scrollOptions), animationOptions));
              }
              return originalFunc.apply(this, arguments);
            };
          };
          var windowScrollBy = function(options) {
            var left = nonFinite(options.left || 0) + (window.scrollX || window.pageXOffset);
            var top = nonFinite(options.top || 0) + (window.scrollY || window.pageYOffset);
            if (options.behavior !== "smooth") {
              return original.windowScroll.call(window, left, top);
            }
            return windowScroll(__assign(__assign({}, options), { left, top }));
          };
          var windowScrollByPolyfill = function(animationOptions) {
            if (isScrollBehaviorSupported()) {
              return;
            }
            window.scrollBy = function scrollBy() {
              if (arguments.length === 1) {
                var scrollByOptions = arguments[0];
                if (!isObject(scrollByOptions)) {
                  throw new TypeError("Failed to execute 'scrollBy' on 'Window': parameter 1 ('options') is not an object.");
                }
                return windowScrollBy(__assign(__assign({}, scrollByOptions), animationOptions));
              }
              var left = Number(arguments[0]);
              var top = Number(arguments[1]);
              return windowScrollBy({ left, top });
            };
          };
          var windowScrollToPolyfill = function(animationOptions) {
            if (isScrollBehaviorSupported()) {
              return;
            }
            var originalFunc = original.windowScroll;
            window.scrollTo = function scrollTo() {
              if (arguments.length === 1) {
                var scrollToOptions = arguments[0];
                if (!isObject(scrollToOptions)) {
                  throw new TypeError("Failed to execute 'scrollTo' on 'Window': parameter 1 ('options') is not an object.");
                }
                var left = Number(scrollToOptions.left);
                var top_1 = Number(scrollToOptions.top);
                return windowScroll(__assign(__assign(__assign({}, scrollToOptions), { left, top: top_1 }), animationOptions));
              }
              return originalFunc.apply(this, arguments);
            };
          };
          var polyfill = function(options) {
            if (isScrollBehaviorSupported()) {
              return;
            }
            windowScrollPolyfill(options);
            windowScrollToPolyfill(options);
            windowScrollByPolyfill(options);
            elementScrollPolyfill(options);
            elementScrollToPolyfill(options);
            elementScrollByPolyfill(options);
            elementScrollIntoViewPolyfill(options);
          };
          exports2.elementScroll = elementScroll;
          exports2.elementScrollBy = elementScrollBy;
          exports2.elementScrollByPolyfill = elementScrollByPolyfill;
          exports2.elementScrollIntoView = elementScrollIntoView;
          exports2.elementScrollIntoViewPolyfill = elementScrollIntoViewPolyfill;
          exports2.elementScrollPolyfill = elementScrollPolyfill;
          exports2.elementScrollTo = elementScroll;
          exports2.elementScrollToPolyfill = elementScrollToPolyfill;
          exports2.polyfill = polyfill;
          exports2.seamless = polyfill;
          exports2.windowScroll = windowScroll;
          exports2.windowScrollBy = windowScrollBy;
          exports2.windowScrollByPolyfill = windowScrollByPolyfill;
          exports2.windowScrollPolyfill = windowScrollPolyfill;
          exports2.windowScrollTo = windowScroll;
          exports2.windowScrollToPolyfill = windowScrollToPolyfill;
          Object.defineProperty(exports2, "__esModule", { value: true });
        });
      }
    }).call("object" === typeof window && window || "object" === typeof self && self || "object" === typeof global && global || {});
  }
});

// node_modules/.pnpm/@mrhenry+core-web@1.2.1/node_modules/@mrhenry/core-web/modules/Event.js
var require_Event = __commonJS({
  "node_modules/.pnpm/@mrhenry+core-web@1.2.1/node_modules/@mrhenry/core-web/modules/Event.js"() {
    (function(undefined2) {
      if (!function(n) {
        if (!("Event" in n))
          return false;
        try {
          return new Event("click"), true;
        } catch (n2) {
          return false;
        }
      }(self)) {
        (function() {
          if (typeof document === "undefined" || typeof window === "undefined")
            return;
          var existingProto = window.Event && window.Event.prototype || null;
          function Event2(type, eventInitDict) {
            if (!type) {
              throw new Error("Not enough arguments");
            }
            var event;
            if ("createEvent" in document) {
              event = document.createEvent("Event");
              var bubbles = eventInitDict && eventInitDict.bubbles !== undefined2 ? eventInitDict.bubbles : false;
              var cancelable = eventInitDict && eventInitDict.cancelable !== undefined2 ? eventInitDict.cancelable : false;
              event.initEvent(type, bubbles, cancelable);
              return event;
            }
            event = document.createEventObject();
            event.type = type;
            event.bubbles = eventInitDict && eventInitDict.bubbles !== undefined2 ? eventInitDict.bubbles : false;
            event.cancelable = eventInitDict && eventInitDict.cancelable !== undefined2 ? eventInitDict.cancelable : false;
            return event;
          }
          Event2.NONE = 0;
          Event2.CAPTURING_PHASE = 1;
          Event2.AT_TARGET = 2;
          Event2.BUBBLING_PHASE = 3;
          window.Event = Window.prototype.Event = Event2;
          if (existingProto) {
            Object.defineProperty(window.Event, "prototype", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: existingProto
            });
          }
          if (!("createEvent" in document)) {
            window.addEventListener = Window.prototype.addEventListener = Document.prototype.addEventListener = Element.prototype.addEventListener = function addEventListener() {
              var element = this, type = arguments[0], listener = arguments[1];
              if (!element._events) {
                element._events = {};
              }
              if (!element._events[type]) {
                element._events[type] = function(event) {
                  var list = element._events[event.type].list, events = list.slice(), index = -1, length = events.length, eventElement;
                  event.preventDefault = function preventDefault() {
                    if (event.cancelable !== false) {
                      event.returnValue = false;
                    }
                  };
                  event.stopPropagation = function stopPropagation() {
                    event.cancelBubble = true;
                  };
                  event.stopImmediatePropagation = function stopImmediatePropagation() {
                    event.cancelBubble = true;
                    event.cancelImmediate = true;
                  };
                  event.currentTarget = element;
                  event.relatedTarget = event.fromElement || null;
                  event.target = event.target || event.srcElement || element;
                  event.timeStamp = (/* @__PURE__ */ new Date()).getTime();
                  if (event.clientX) {
                    event.pageX = event.clientX + document.documentElement.scrollLeft;
                    event.pageY = event.clientY + document.documentElement.scrollTop;
                  }
                  while (++index < length && !event.cancelImmediate) {
                    if (index in events) {
                      eventElement = events[index];
                      if (list.includes(eventElement) && typeof eventElement === "function") {
                        eventElement.call(element, event);
                      }
                    }
                  }
                };
                element._events[type].list = [];
                if (element.attachEvent) {
                  element.attachEvent("on" + type, element._events[type]);
                }
              }
              element._events[type].list.push(listener);
            };
            window.removeEventListener = Window.prototype.removeEventListener = Document.prototype.removeEventListener = Element.prototype.removeEventListener = function removeEventListener() {
              var element = this, type = arguments[0], listener = arguments[1], index;
              if (element._events && element._events[type] && element._events[type].list) {
                index = element._events[type].list.indexOf(listener);
                if (index !== -1) {
                  element._events[type].list.splice(index, 1);
                  if (!element._events[type].list.length) {
                    if (element.detachEvent) {
                      element.detachEvent("on" + type, element._events[type]);
                    }
                    delete element._events[type];
                  }
                }
              }
            };
            window.dispatchEvent = Window.prototype.dispatchEvent = Document.prototype.dispatchEvent = Element.prototype.dispatchEvent = function dispatchEvent(event) {
              if (!arguments.length) {
                throw new Error("Not enough arguments");
              }
              if (!event || typeof event.type !== "string") {
                throw new Error("DOM Events Exception 0");
              }
              var element = this, type = event.type;
              try {
                if (!event.bubbles) {
                  event.cancelBubble = true;
                  var cancelBubbleEvent = function(event2) {
                    event2.cancelBubble = true;
                    (element || window).detachEvent("on" + type, cancelBubbleEvent);
                  };
                  this.attachEvent("on" + type, cancelBubbleEvent);
                }
                this.fireEvent("on" + type, event);
              } catch (error) {
                event.target = element;
                do {
                  event.currentTarget = element;
                  if ("_events" in element && typeof element._events[type] === "function") {
                    element._events[type].call(element, event);
                  }
                  if (typeof element["on" + type] === "function") {
                    element["on" + type].call(element, event);
                  }
                  element = element.nodeType === 9 ? element.parentWindow : element.parentNode;
                } while (element && !event.cancelBubble);
              }
              return true;
            };
            document.attachEvent("onreadystatechange", function() {
              if (document.readyState === "complete") {
                document.dispatchEvent(new Event2("DOMContentLoaded", {
                  bubbles: true
                }));
              }
            });
          }
        })();
      }
    }).call("object" === typeof window && window || "object" === typeof self && self || "object" === typeof global && global || {});
  }
});

// node_modules/.pnpm/@mrhenry+core-web@1.2.1/node_modules/@mrhenry/core-web/modules/matchMedia.js
var require_matchMedia = __commonJS({
  "node_modules/.pnpm/@mrhenry+core-web@1.2.1/node_modules/@mrhenry/core-web/modules/matchMedia.js"() {
    (function(undefined2) {
      if (!("matchMedia" in self && "MediaQueryList" in self)) {
        (function() {
          "use strict";
          var styleMedia = self.styleMedia || self.media;
          if (!styleMedia) {
            var style = document.createElement("style"), script = document.getElementsByTagName("script")[0], info = null;
            style.type = "text/css";
            style.id = "matchmediajs-test";
            if (!script) {
              document.head.appendChild(style);
            } else {
              script.parentNode.insertBefore(style, script);
            }
            info = "getComputedStyle" in self && self.getComputedStyle(style, null);
            styleMedia = {
              matchMedium: function(media) {
                media = media.replace(/^only\s+/, "");
                var text = "@media " + media + "{ #matchmediajs-test { width: 1px; } }";
                style.textContent = text;
                return info.width === "1px";
              }
            };
          }
          function MediaQueryList() {
            this.matches = false;
            this.media = "invalid";
            this.listeners = [];
          }
          MediaQueryList.prototype.addListener = function addListener(listener) {
            var listenerIndex = this.listeners.indexOf(listener);
            if (listenerIndex === -1) {
              this.listeners.push(listener);
            }
          };
          MediaQueryList.prototype.removeListener = function removeListener(listener) {
            var listenerIndex = this.listeners.indexOf(listener);
            if (listenerIndex >= 0) {
              this.listeners.splice(listenerIndex, 1);
            }
          };
          self.MediaQueryList = MediaQueryList;
          self.matchMedia = function matchMedia(media) {
            var list = new MediaQueryList();
            if (0 === arguments.length) {
              throw new TypeError("Not enough arguments to matchMedia");
            }
            list.media = String(media);
            list.matches = styleMedia.matchMedium(media || "all");
            self.addEventListener("resize", function() {
              var listeners = [].concat(list.addListener.listeners), matches = styleMedia.matchMedium(media || "all");
              if (matches != list.matches) {
                list.matches = matches;
                for (var index = 0, length = listeners.length; index < length; ++index) {
                  listeners[index].call(self, list);
                }
              }
            });
            return list;
          };
        })();
      }
    }).call("object" === typeof window && window || "object" === typeof self && self || "object" === typeof global && global || {});
  }
});

// node_modules/.pnpm/@mrhenry+core-web@1.2.1/node_modules/@mrhenry/core-web/modules/MediaQueryList.prototype.addEventListener.js
var require_MediaQueryList_prototype_addEventListener = __commonJS({
  "node_modules/.pnpm/@mrhenry+core-web@1.2.1/node_modules/@mrhenry/core-web/modules/MediaQueryList.prototype.addEventListener.js"() {
    (function(undefined2) {
      if (!("matchMedia" in self && "addEventListener" in self.matchMedia("all"))) {
        (function(global2) {
          "use strict";
          function addEventListener(type, listener) {
            if (type === "change") {
              this.removeListener(listener);
              this.addListener(listener);
            }
            if (arguments[2] && arguments[2].once) {
              var _this = this;
              var remover = function() {
                _this.removeListener(remover);
                _this.removeListener(listener);
              };
              this.addListener(remover);
            }
          }
          function removeEventListener(type, listener) {
            if (type === "change") {
              this.removeListener(listener);
            }
          }
          var onchangeDescriptor = {
            enumerable: true,
            configurable: true,
            get: function() {
              return this._onchangeHandler || null;
            },
            set: function(listener) {
              var _this = this;
              if (!_this._onchangeListener) {
                _this._onchangeListener = function() {
                  if (typeof _this._onchangeHandler !== "function") {
                    return;
                  }
                  _this._onchangeHandler.call(_this, arguments[0]);
                };
                _this.addEventListener("change", _this._onchangeListener);
              }
              _this._onchangeHandler = listener;
            }
          };
          if ("MediaQueryList" in global2) {
            var _addListener = global2.MediaQueryList.prototype.addListener;
            var _removeListener = global2.MediaQueryList.prototype.removeListener;
            global2.MediaQueryList.prototype.addListener = function addListener(listener) {
              var handler = listener;
              if (handler.handleEvent) {
                handler = handler.handleEvent;
              }
              _addListener.call(this, handler);
            };
            global2.MediaQueryList.prototype.removeListener = function removeListener(listener) {
              var handler = listener;
              if (handler.handleEvent) {
                handler = handler.handleEvent;
              }
              _removeListener.call(this, handler);
            };
            global2.MediaQueryList.prototype.addEventListener = addEventListener;
            global2.MediaQueryList.prototype.removeEventListener = removeEventListener;
            global2.Object.defineProperty(global2.MediaQueryList.prototype, "onchange", onchangeDescriptor);
          } else {
            var _matchMedia = self.matchMedia;
            self.matchMedia = function matchMedia(media) {
              var _mql = _matchMedia(media);
              var _addListener2 = _mql.addListener;
              var _removeListener2 = _mql.removeListener;
              _mql.addListener = function addListener(listener) {
                var handler = listener;
                if (handler.handleEvent) {
                  handler = handler.handleEvent;
                }
                _addListener2.call(this, handler);
              };
              _mql.removeListener = function removeListener(listener) {
                var handler = listener;
                if (handler.handleEvent) {
                  handler = handler.handleEvent;
                }
                _removeListener2.call(this, handler);
              };
              _mql.addEventListener = addEventListener;
              _mql.removeEventListener = removeEventListener;
              global2.Object.defineProperty(_mql, "onchange", onchangeDescriptor);
              return _mql;
            };
          }
        })(self);
      }
    }).call("object" === typeof window && window || "object" === typeof self && self || "object" === typeof global && global || {});
  }
});

// dist/Scroller/Scroller.js
//! src/Scroller/Scroller.ts
require_es_symbol();
require_es_symbol_description();
require_es_symbol_iterator();
require_es_error_cause();
require_es_error_to_string();
require_es_array_from();
require_es_array_iterator();
require_es_array_slice();
require_es_object_to_string();
require_es_regexp_exec();
require_es_regexp_test();
require_es_regexp_to_string();
require_es_string_iterator();
require_requestAnimationFrame();
require_smoothscroll();
require_Event();
require_matchMedia();
require_MediaQueryList_prototype_addEventListener();
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function F2() {
      };
      return { s: F, n: function n() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function e(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function s() {
    it = it.call(o);
  }, n: function n() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e2) {
    didErr = true;
    err = _e2;
  }, f: function f() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var Scroller = function Scroller2(element) {
  var wheelHandler = function wheelHandler2(e) {
    if (e.deltaY && !e.deltaX) {
      e.preventDefault();
      requestAnimationFrame(function() {
        element.scrollBy(e.deltaY, 0);
      });
    }
  };
  element.addEventListener("wheel", wheelHandler);
  element.style.scrollSnapType = "none";
  return function() {
    element.removeEventListener("wheel", wheelHandler);
    element.style.scrollSnapType = "";
  };
};
var scrollerContainers = document.getElementsByClassName("scroller-container");
var _iterator = _createForOfIteratorHelper(scrollerContainers);
var _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done; ) {
    element = _step.value;
    Scroller(element);
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
var element;

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mYWlscy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1jYWxsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtY2FsbGFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tc3RyaW5nLXRhZy1zdXBwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXN0cmluZy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaHRtbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1jcmVhdGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zbGljZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLWV4dGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluLWFjY2Vzc29yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wtd3JhcHBlZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3BhdGguanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbC1kZWZpbmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zeW1ib2wtZGVmaW5lLXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLWNsYXVzZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWFycmF5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtY29uc3RydWN0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLmNvbnN0cnVjdG9yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3ltYm9sLXJlZ2lzdHJ5LWRldGVjdGlvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zeW1ib2wuZm9yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN5bWJvbC5rZXktZm9yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYXBwbHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtanNvbi1yZXBsYWNlci1mdW5jdGlvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5qc29uLnN0cmluZ2lmeS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zeW1ib2wuZGVzY3JpcHRpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLml0ZXJhdG9yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLWFjY2Vzc29yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtcG9zc2libGUtcHJvdG90eXBlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYS1wb3NzaWJsZS1wcm90b3R5cGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3Qtc2V0LXByb3RvdHlwZS1vZi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3Byb3h5LWFjY2Vzc29yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5oZXJpdC1pZi1yZXF1aXJlZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25vcm1hbGl6ZS1zdHJpbmctYXJndW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnN0YWxsLWVycm9yLWNhdXNlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXJyb3Itc3RhY2stY2xlYXIuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lcnJvci1zdGFjay1pbnN0YWxsYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Vycm9yLXN0YWNrLWluc3RhbGwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93cmFwLWVycm9yLWNvbnN0cnVjdG9yLXdpdGgtY2F1c2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuZXJyb3IuY2F1c2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lcnJvci10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuZXJyb3IudG8tc3RyaW5nLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0b3ItY2xvc2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jYWxsLXdpdGgtc2FmZS1pdGVyYXRpb24tY2xvc2luZy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9ycy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWFycmF5LWl0ZXJhdG9yLW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1pdGVyYXRvci1tZXRob2QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtaXRlcmF0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1mcm9tLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2hlY2stY29ycmVjdG5lc3Mtb2YtaXRlcmF0aW9uLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZyb20uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3JyZWN0LXByb3RvdHlwZS1nZXR0ZXIuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9ycy1jb3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0b3ItY3JlYXRlLWNvbnN0cnVjdG9yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0b3ItZGVmaW5lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLWl0ZXItcmVzdWx0LW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pdGVyYXRvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LnNsaWNlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXRvLXN0cmluZy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QudG8tc3RyaW5nLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVnZXhwLWZsYWdzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVnZXhwLXN0aWNreS1oZWxwZXJzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVnZXhwLXVuc3VwcG9ydGVkLWRvdC1hbGwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWdleHAtdW5zdXBwb3J0ZWQtbmNnLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucmVnZXhwLmV4ZWMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucmVnZXhwLnRlc3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWdleHAtZ2V0LWZsYWdzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnJlZ2V4cC50by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctbXVsdGlieXRlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5pdGVyYXRvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQG1yaGVucnkrY29yZS13ZWJAMS4yLjEvbm9kZV9tb2R1bGVzL0BtcmhlbnJ5L2NvcmUtd2ViL21vZHVsZXMvcmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AbXJoZW5yeStjb3JlLXdlYkAxLjIuMS9ub2RlX21vZHVsZXMvQG1yaGVucnkvY29yZS13ZWIvbW9kdWxlcy9zbW9vdGhzY3JvbGwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0BtcmhlbnJ5K2NvcmUtd2ViQDEuMi4xL25vZGVfbW9kdWxlcy9AbXJoZW5yeS9jb3JlLXdlYi9tb2R1bGVzL0V2ZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AbXJoZW5yeStjb3JlLXdlYkAxLjIuMS9ub2RlX21vZHVsZXMvQG1yaGVucnkvY29yZS13ZWIvbW9kdWxlcy9tYXRjaE1lZGlhLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AbXJoZW5yeStjb3JlLXdlYkAxLjIuMS9ub2RlX21vZHVsZXMvQG1yaGVucnkvY29yZS13ZWIvbW9kdWxlcy9NZWRpYVF1ZXJ5TGlzdC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lci5qcyIsICJzcmMvU2Nyb2xsZXIvU2Nyb2xsZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIid1c2Ugc3RyaWN0JztcbnZhciBjaGVjayA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgJiYgaXQuTWF0aCA9PT0gTWF0aCAmJiBpdDtcbn07XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG5tb2R1bGUuZXhwb3J0cyA9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1nbG9iYWwtdGhpcyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBnbG9iYWxUaGlzID09ICdvYmplY3QnICYmIGdsb2JhbFRoaXMpIHx8XG4gIGNoZWNrKHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93KSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzIC0tIHNhZmVcbiAgY2hlY2sodHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZikgfHxcbiAgY2hlY2sodHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwpIHx8XG4gIGNoZWNrKHR5cGVvZiB0aGlzID09ICdvYmplY3QnICYmIHRoaXMpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuYyAtLSBmYWxsYmFja1xuICAoZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSkoKSB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIERldGVjdCBJRTgncyBpbmNvbXBsZXRlIGRlZmluZVByb3BlcnR5IGltcGxlbWVudGF0aW9uXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgMSwgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSlbMV0gIT09IDc7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZnVuY3Rpb24tcHJvdG90eXBlLWJpbmQgLS0gc2FmZVxuICB2YXIgdGVzdCA9IChmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0pLmJpbmQoKTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGlucyAtLSBzYWZlXG4gIHJldHVybiB0eXBlb2YgdGVzdCAhPSAnZnVuY3Rpb24nIHx8IHRlc3QuaGFzT3duUHJvcGVydHkoJ3Byb3RvdHlwZScpO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBjYWxsID0gRnVuY3Rpb24ucHJvdG90eXBlLmNhbGw7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX0JJTkQgPyBjYWxsLmJpbmQoY2FsbCkgOiBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBjYWxsLmFwcGx5KGNhbGwsIGFyZ3VtZW50cyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBOYXNob3JuIH4gSkRLOCBidWdcbnZhciBOQVNIT1JOX0JVRyA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvciAmJiAhJHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoeyAxOiAyIH0sIDEpO1xuXG4vLyBgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZWAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5wcm90b3R5cGUucHJvcGVydHlpc2VudW1lcmFibGVcbmV4cG9ydHMuZiA9IE5BU0hPUk5fQlVHID8gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoVikge1xuICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLCBWKTtcbiAgcmV0dXJuICEhZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLmVudW1lcmFibGU7XG59IDogJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBjYWxsID0gRnVuY3Rpb25Qcm90b3R5cGUuY2FsbDtcbnZhciB1bmN1cnJ5VGhpc1dpdGhCaW5kID0gTkFUSVZFX0JJTkQgJiYgRnVuY3Rpb25Qcm90b3R5cGUuYmluZC5iaW5kKGNhbGwsIGNhbGwpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9CSU5EID8gdW5jdXJyeVRoaXNXaXRoQmluZCA6IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjYWxsLmFwcGx5KGZuLCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbnZhciB0b1N0cmluZyA9IHVuY3VycnlUaGlzKHt9LnRvU3RyaW5nKTtcbnZhciBzdHJpbmdTbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHN0cmluZ1NsaWNlKHRvU3RyaW5nKGl0KSwgOCwgLTEpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xudmFyIHNwbGl0ID0gdW5jdXJyeVRoaXMoJycuc3BsaXQpO1xuXG4vLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xubW9kdWxlLmV4cG9ydHMgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIHRocm93cyBhbiBlcnJvciBpbiByaGlubywgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3JoaW5vL2lzc3Vlcy8zNDZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGlucyAtLSBzYWZlXG4gIHJldHVybiAhJE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApO1xufSkgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNsYXNzb2YoaXQpID09PSAnU3RyaW5nJyA/IHNwbGl0KGl0LCAnJykgOiAkT2JqZWN0KGl0KTtcbn0gOiAkT2JqZWN0O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIHdlIGNhbid0IHVzZSBqdXN0IGBpdCA9PSBudWxsYCBzaW5jZSBvZiBgZG9jdW1lbnQuYWxsYCBzcGVjaWFsIGNhc2Vcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtSXNIVE1MRERBLWludGVybmFsLXNsb3QtYWVjXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPT09IG51bGwgfHwgaXQgPT09IHVuZGVmaW5lZDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgUmVxdWlyZU9iamVjdENvZXJjaWJsZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlcXVpcmVvYmplY3Rjb2VyY2libGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpc051bGxPclVuZGVmaW5lZChpdCkpIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEluZGV4ZWRPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShpdCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90XG52YXIgZG9jdW1lbnRBbGwgPSB0eXBlb2YgZG9jdW1lbnQgPT0gJ29iamVjdCcgJiYgZG9jdW1lbnQuYWxsO1xuXG4vLyBgSXNDYWxsYWJsZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWlzY2FsbGFibGVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL25vLXR5cGVvZi11bmRlZmluZWQgLS0gcmVxdWlyZWQgZm9yIHRlc3Rpbmdcbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIGRvY3VtZW50QWxsID09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50QWxsICE9PSB1bmRlZmluZWQgPyBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PSAnZnVuY3Rpb24nIHx8IGFyZ3VtZW50ID09PSBkb2N1bWVudEFsbDtcbn0gOiBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PSAnZnVuY3Rpb24nO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiBpc0NhbGxhYmxlKGl0KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciBhRnVuY3Rpb24gPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGlzQ2FsbGFibGUoYXJndW1lbnQpID8gYXJndW1lbnQgOiB1bmRlZmluZWQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lc3BhY2UsIG1ldGhvZCkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBhRnVuY3Rpb24oZ2xvYmFsW25hbWVzcGFjZV0pIDogZ2xvYmFsW25hbWVzcGFjZV0gJiYgZ2xvYmFsW25hbWVzcGFjZV1bbWV0aG9kXTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVuY3VycnlUaGlzKHt9LmlzUHJvdG90eXBlT2YpO1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIG5hdmlnYXRvciAhPSAndW5kZWZpbmVkJyAmJiBTdHJpbmcobmF2aWdhdG9yLnVzZXJBZ2VudCkgfHwgJyc7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcblxudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBEZW5vID0gZ2xvYmFsLkRlbm87XG52YXIgdmVyc2lvbnMgPSBwcm9jZXNzICYmIHByb2Nlc3MudmVyc2lvbnMgfHwgRGVubyAmJiBEZW5vLnZlcnNpb247XG52YXIgdjggPSB2ZXJzaW9ucyAmJiB2ZXJzaW9ucy52ODtcbnZhciBtYXRjaCwgdmVyc2lvbjtcblxuaWYgKHY4KSB7XG4gIG1hdGNoID0gdjguc3BsaXQoJy4nKTtcbiAgLy8gaW4gb2xkIENocm9tZSwgdmVyc2lvbnMgb2YgVjggaXNuJ3QgVjggPSBDaHJvbWUgLyAxMFxuICAvLyBidXQgdGhlaXIgY29ycmVjdCB2ZXJzaW9ucyBhcmUgbm90IGludGVyZXN0aW5nIGZvciB1c1xuICB2ZXJzaW9uID0gbWF0Y2hbMF0gPiAwICYmIG1hdGNoWzBdIDwgNCA/IDEgOiArKG1hdGNoWzBdICsgbWF0Y2hbMV0pO1xufVxuXG4vLyBCcm93c2VyRlMgTm9kZUpTIGBwcm9jZXNzYCBwb2x5ZmlsbCBpbmNvcnJlY3RseSBzZXQgYC52OGAgdG8gYDAuMGBcbi8vIHNvIGNoZWNrIGB1c2VyQWdlbnRgIGV2ZW4gaWYgYC52OGAgZXhpc3RzLCBidXQgMFxuaWYgKCF2ZXJzaW9uICYmIHVzZXJBZ2VudCkge1xuICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvRWRnZVxcLyhcXGQrKS8pO1xuICBpZiAoIW1hdGNoIHx8IG1hdGNoWzFdID49IDc0KSB7XG4gICAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0Nocm9tZVxcLyhcXGQrKS8pO1xuICAgIGlmIChtYXRjaCkgdmVyc2lvbiA9ICttYXRjaFsxXTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZlcnNpb247XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG52YXIgJFN0cmluZyA9IGdsb2JhbC5TdHJpbmc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlzeW1ib2xzIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9ICEhT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgc3ltYm9sID0gU3ltYm9sKCdzeW1ib2wgZGV0ZWN0aW9uJyk7XG4gIC8vIENocm9tZSAzOCBTeW1ib2wgaGFzIGluY29ycmVjdCB0b1N0cmluZyBjb252ZXJzaW9uXG4gIC8vIGBnZXQtb3duLXByb3BlcnR5LXN5bWJvbHNgIHBvbHlmaWxsIHN5bWJvbHMgY29udmVydGVkIHRvIG9iamVjdCBhcmUgbm90IFN5bWJvbCBpbnN0YW5jZXNcbiAgLy8gbmI6IERvIG5vdCBjYWxsIGBTdHJpbmdgIGRpcmVjdGx5IHRvIGF2b2lkIHRoaXMgYmVpbmcgb3B0aW1pemVkIG91dCB0byBgc3ltYm9sKycnYCB3aGljaCB3aWxsLFxuICAvLyBvZiBjb3Vyc2UsIGZhaWwuXG4gIHJldHVybiAhJFN0cmluZyhzeW1ib2wpIHx8ICEoT2JqZWN0KHN5bWJvbCkgaW5zdGFuY2VvZiBTeW1ib2wpIHx8XG4gICAgLy8gQ2hyb21lIDM4LTQwIHN5bWJvbHMgYXJlIG5vdCBpbmhlcml0ZWQgZnJvbSBET00gY29sbGVjdGlvbnMgcHJvdG90eXBlcyB0byBpbnN0YW5jZXNcbiAgICAhU3ltYm9sLnNoYW0gJiYgVjhfVkVSU0lPTiAmJiBWOF9WRVJTSU9OIDwgNDE7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1zeW1ib2wgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfU1lNQk9MXG4gICYmICFTeW1ib2wuc2hhbVxuICAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc1Byb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YnKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxubW9kdWxlLmV4cG9ydHMgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgJFN5bWJvbCA9IGdldEJ1aWx0SW4oJ1N5bWJvbCcpO1xuICByZXR1cm4gaXNDYWxsYWJsZSgkU3ltYm9sKSAmJiBpc1Byb3RvdHlwZU9mKCRTeW1ib2wucHJvdG90eXBlLCAkT2JqZWN0KGl0KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB0cnkge1xuICAgIHJldHVybiAkU3RyaW5nKGFyZ3VtZW50KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gJ09iamVjdCc7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciB0cnlUb1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90cnktdG8tc3RyaW5nJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBJc0NhbGxhYmxlKGFyZ3VtZW50KSBpcyB0cnVlYFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGlzQ2FsbGFibGUoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKHRyeVRvU3RyaW5nKGFyZ3VtZW50KSArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcblxuLy8gYEdldE1ldGhvZGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWdldG1ldGhvZFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoViwgUCkge1xuICB2YXIgZnVuYyA9IFZbUF07XG4gIHJldHVybiBpc051bGxPclVuZGVmaW5lZChmdW5jKSA/IHVuZGVmaW5lZCA6IGFDYWxsYWJsZShmdW5jKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBPcmRpbmFyeVRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb3JkaW5hcnl0b3ByaW1pdGl2ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5wdXQsIHByZWYpIHtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChwcmVmID09PSAnc3RyaW5nJyAmJiBpc0NhbGxhYmxlKGZuID0gaW5wdXQudG9TdHJpbmcpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAoaXNDYWxsYWJsZShmbiA9IGlucHV0LnZhbHVlT2YpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAocHJlZiAhPT0gJ3N0cmluZycgJiYgaXNDYWxsYWJsZShmbiA9IGlucHV0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgdHJ5IHtcbiAgICBkZWZpbmVQcm9wZXJ0eShnbG9iYWwsIGtleSwgeyB2YWx1ZTogdmFsdWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZ2xvYmFsW2tleV0gPSB2YWx1ZTtcbiAgfSByZXR1cm4gdmFsdWU7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gbW9kdWxlLmV4cG9ydHMgPSBnbG9iYWxUaGlzW1NIQVJFRF0gfHwgZGVmaW5lR2xvYmFsUHJvcGVydHkoU0hBUkVELCB7fSk7XG5cbihzdG9yZS52ZXJzaW9ucyB8fCAoc3RvcmUudmVyc2lvbnMgPSBbXSkpLnB1c2goe1xuICB2ZXJzaW9uOiAnMy4zNi4wJyxcbiAgbW9kZTogSVNfUFVSRSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE0LTIwMjQgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknLFxuICBsaWNlbnNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvYmxvYi92My4zNi4wL0xJQ0VOU0UnLFxuICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcydcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlIHx8IHt9KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG4vLyBgVG9PYmplY3RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b29iamVjdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuICRPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IHVuY3VycnlUaGlzKHt9Lmhhc093blByb3BlcnR5KTtcblxuLy8gYEhhc093blByb3BlcnR5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaGFzb3ducHJvcGVydHlcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaGFzb3duIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0Lmhhc093biB8fCBmdW5jdGlvbiBoYXNPd24oaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkodG9PYmplY3QoaXQpLCBrZXkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbnZhciBpZCA9IDA7XG52YXIgcG9zdGZpeCA9IE1hdGgucmFuZG9tKCk7XG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcygxLjAudG9TdHJpbmcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJyArIChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5KSArICcpXycgKyB0b1N0cmluZygrK2lkICsgcG9zdGZpeCwgMzYpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24nKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xuXG52YXIgU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciBXZWxsS25vd25TeW1ib2xzU3RvcmUgPSBzaGFyZWQoJ3drcycpO1xudmFyIGNyZWF0ZVdlbGxLbm93blN5bWJvbCA9IFVTRV9TWU1CT0xfQVNfVUlEID8gU3ltYm9sWydmb3InXSB8fCBTeW1ib2wgOiBTeW1ib2wgJiYgU3ltYm9sLndpdGhvdXRTZXR0ZXIgfHwgdWlkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGlmICghaGFzT3duKFdlbGxLbm93blN5bWJvbHNTdG9yZSwgbmFtZSkpIHtcbiAgICBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV0gPSBOQVRJVkVfU1lNQk9MICYmIGhhc093bihTeW1ib2wsIG5hbWUpXG4gICAgICA/IFN5bWJvbFtuYW1lXVxuICAgICAgOiBjcmVhdGVXZWxsS25vd25TeW1ib2woJ1N5bWJvbC4nICsgbmFtZSk7XG4gIH0gcmV0dXJuIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgb3JkaW5hcnlUb1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vcmRpbmFyeS10by1wcmltaXRpdmUnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG52YXIgVE9fUFJJTUlUSVZFID0gd2VsbEtub3duU3ltYm9sKCd0b1ByaW1pdGl2ZScpO1xuXG4vLyBgVG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b3ByaW1pdGl2ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5wdXQsIHByZWYpIHtcbiAgaWYgKCFpc09iamVjdChpbnB1dCkgfHwgaXNTeW1ib2woaW5wdXQpKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBleG90aWNUb1ByaW0gPSBnZXRNZXRob2QoaW5wdXQsIFRPX1BSSU1JVElWRSk7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChleG90aWNUb1ByaW0pIHtcbiAgICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ2RlZmF1bHQnO1xuICAgIHJlc3VsdCA9IGNhbGwoZXhvdGljVG9QcmltLCBpbnB1dCwgcHJlZik7XG4gICAgaWYgKCFpc09iamVjdChyZXN1bHQpIHx8IGlzU3ltYm9sKHJlc3VsdCkpIHJldHVybiByZXN1bHQ7XG4gICAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG4gIH1cbiAgaWYgKHByZWYgPT09IHVuZGVmaW5lZCkgcHJlZiA9ICdudW1iZXInO1xuICByZXR1cm4gb3JkaW5hcnlUb1ByaW1pdGl2ZShpbnB1dCwgcHJlZik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1zeW1ib2wnKTtcblxuLy8gYFRvUHJvcGVydHlLZXlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b3Byb3BlcnR5a2V5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIga2V5ID0gdG9QcmltaXRpdmUoYXJndW1lbnQsICdzdHJpbmcnKTtcbiAgcmV0dXJuIGlzU3ltYm9sKGtleSkgPyBrZXkgOiBrZXkgKyAnJztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyIGRvY3VtZW50ID0gZ2xvYmFsLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgRVhJU1RTID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gRVhJU1RTID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG5cbi8vIFRoYW5rcyB0byBJRTggZm9yIGl0cyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGNyZWF0ZUVsZW1lbnQoJ2RpdicpLCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH1cbiAgfSkuYSAhPT0gNztcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlJyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXknKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yXG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JbmRleGVkT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXNPd24oTywgUCkpIHJldHVybiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoIWNhbGwocHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZiwgTywgUCksIE9bUF0pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBWOCB+IENocm9tZSAzNi1cbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMzMzRcbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAncHJvdG90eXBlJywge1xuICAgIHZhbHVlOiA0MixcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSkucHJvdG90eXBlICE9PSA0Mjtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyICRTdHJpbmcgPSBTdHJpbmc7XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogVHlwZShhcmd1bWVudCkgaXMgT2JqZWN0YFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGlzT2JqZWN0KGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcigkU3RyaW5nKGFyZ3VtZW50KSArICcgaXMgbm90IGFuIG9iamVjdCcpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xudmFyIFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Y4LXByb3RvdHlwZS1kZWZpbmUtYnVnJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXknKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciAkZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgRU5VTUVSQUJMRSA9ICdlbnVtZXJhYmxlJztcbnZhciBDT05GSUdVUkFCTEUgPSAnY29uZmlndXJhYmxlJztcbnZhciBXUklUQUJMRSA9ICd3cml0YWJsZSc7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydHlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydHlcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmICh0eXBlb2YgTyA9PT0gJ2Z1bmN0aW9uJyAmJiBQID09PSAncHJvdG90eXBlJyAmJiAndmFsdWUnIGluIEF0dHJpYnV0ZXMgJiYgV1JJVEFCTEUgaW4gQXR0cmlidXRlcyAmJiAhQXR0cmlidXRlc1tXUklUQUJMRV0pIHtcbiAgICB2YXIgY3VycmVudCA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gICAgaWYgKGN1cnJlbnQgJiYgY3VycmVudFtXUklUQUJMRV0pIHtcbiAgICAgIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICAgICAgQXR0cmlidXRlcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiBDT05GSUdVUkFCTEUgaW4gQXR0cmlidXRlcyA/IEF0dHJpYnV0ZXNbQ09ORklHVVJBQkxFXSA6IGN1cnJlbnRbQ09ORklHVVJBQkxFXSxcbiAgICAgICAgZW51bWVyYWJsZTogRU5VTUVSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tFTlVNRVJBQkxFXSA6IGN1cnJlbnRbRU5VTUVSQUJMRV0sXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgICAgfTtcbiAgICB9XG4gIH0gcmV0dXJuICRkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbn0gOiAkZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IG5ldyAkVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCcpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBrZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldERlc2NyaXB0b3IgPSBERVNDUklQVE9SUyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG52YXIgRVhJU1RTID0gaGFzT3duKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpO1xuLy8gYWRkaXRpb25hbCBwcm90ZWN0aW9uIGZyb20gbWluaWZpZWQgLyBtYW5nbGVkIC8gZHJvcHBlZCBmdW5jdGlvbiBuYW1lc1xudmFyIFBST1BFUiA9IEVYSVNUUyAmJiAoZnVuY3Rpb24gc29tZXRoaW5nKCkgeyAvKiBlbXB0eSAqLyB9KS5uYW1lID09PSAnc29tZXRoaW5nJztcbnZhciBDT05GSUdVUkFCTEUgPSBFWElTVFMgJiYgKCFERVNDUklQVE9SUyB8fCAoREVTQ1JJUFRPUlMgJiYgZ2V0RGVzY3JpcHRvcihGdW5jdGlvblByb3RvdHlwZSwgJ25hbWUnKS5jb25maWd1cmFibGUpKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEVYSVNUUzogRVhJU1RTLFxuICBQUk9QRVI6IFBST1BFUixcbiAgQ09ORklHVVJBQkxFOiBDT05GSUdVUkFCTEVcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxudmFyIGZ1bmN0aW9uVG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyhGdW5jdGlvbi50b1N0cmluZyk7XG5cbi8vIHRoaXMgaGVscGVyIGJyb2tlbiBpbiBgY29yZS1qc0AzLjQuMS0zLjQuNGAsIHNvIHdlIGNhbid0IHVzZSBgc2hhcmVkYCBoZWxwZXJcbmlmICghaXNDYWxsYWJsZShzdG9yZS5pbnNwZWN0U291cmNlKSkge1xuICBzdG9yZS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uVG9TdHJpbmcoaXQpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0b3JlLmluc3BlY3RTb3VyY2U7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciBXZWFrTWFwID0gZ2xvYmFsLldlYWtNYXA7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNDYWxsYWJsZShXZWFrTWFwKSAmJiAvbmF0aXZlIGNvZGUvLnRlc3QoU3RyaW5nKFdlYWtNYXApKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcblxudmFyIGtleXMgPSBzaGFyZWQoJ2tleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBrZXlzW2tleV0gfHwgKGtleXNba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX1dFQUtfTUFQID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlYWstbWFwLWJhc2ljLWRldGVjdGlvbicpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCA9ICdPYmplY3QgYWxyZWFkeSBpbml0aWFsaXplZCc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcbnZhciBXZWFrTWFwID0gZ2xvYmFsLldlYWtNYXA7XG52YXIgc2V0LCBnZXQsIGhhcztcblxudmFyIGVuZm9yY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGhhcyhpdCkgPyBnZXQoaXQpIDogc2V0KGl0LCB7fSk7XG59O1xuXG52YXIgZ2V0dGVyRm9yID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBzdGF0ZTtcbiAgICBpZiAoIWlzT2JqZWN0KGl0KSB8fCAoc3RhdGUgPSBnZXQoaXQpKS50eXBlICE9PSBUWVBFKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbmNvbXBhdGlibGUgcmVjZWl2ZXIsICcgKyBUWVBFICsgJyByZXF1aXJlZCcpO1xuICAgIH0gcmV0dXJuIHN0YXRlO1xuICB9O1xufTtcblxuaWYgKE5BVElWRV9XRUFLX01BUCB8fCBzaGFyZWQuc3RhdGUpIHtcbiAgdmFyIHN0b3JlID0gc2hhcmVkLnN0YXRlIHx8IChzaGFyZWQuc3RhdGUgPSBuZXcgV2Vha01hcCgpKTtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tc2VsZi1hc3NpZ24gLS0gcHJvdG90eXBlIG1ldGhvZHMgcHJvdGVjdGlvbiAqL1xuICBzdG9yZS5nZXQgPSBzdG9yZS5nZXQ7XG4gIHN0b3JlLmhhcyA9IHN0b3JlLmhhcztcbiAgc3RvcmUuc2V0ID0gc3RvcmUuc2V0O1xuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXNlbGYtYXNzaWduIC0tIHByb3RvdHlwZSBtZXRob2RzIHByb3RlY3Rpb24gKi9cbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIGlmIChzdG9yZS5oYXMoaXQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEKTtcbiAgICBtZXRhZGF0YS5mYWNhZGUgPSBpdDtcbiAgICBzdG9yZS5zZXQoaXQsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBzdG9yZS5nZXQoaXQpIHx8IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gc3RvcmUuaGFzKGl0KTtcbiAgfTtcbn0gZWxzZSB7XG4gIHZhciBTVEFURSA9IHNoYXJlZEtleSgnc3RhdGUnKTtcbiAgaGlkZGVuS2V5c1tTVEFURV0gPSB0cnVlO1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKGhhc093bihpdCwgU1RBVEUpKSB0aHJvdyBuZXcgVHlwZUVycm9yKE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEKTtcbiAgICBtZXRhZGF0YS5mYWNhZGUgPSBpdDtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoaXQsIFNUQVRFLCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSkgPyBpdFtTVEFURV0gOiB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGhhc093bihpdCwgU1RBVEUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXQsXG4gIGdldDogZ2V0LFxuICBoYXM6IGhhcyxcbiAgZW5mb3JjZTogZW5mb3JjZSxcbiAgZ2V0dGVyRm9yOiBnZXR0ZXJGb3Jcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1uYW1lJykuQ09ORklHVVJBQkxFO1xudmFyIGluc3BlY3RTb3VyY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG5cbnZhciBlbmZvcmNlSW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZW5mb3JjZTtcbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXQ7XG52YXIgJFN0cmluZyA9IFN0cmluZztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xudmFyIHJlcGxhY2UgPSB1bmN1cnJ5VGhpcygnJy5yZXBsYWNlKTtcbnZhciBqb2luID0gdW5jdXJyeVRoaXMoW10uam9pbik7XG5cbnZhciBDT05GSUdVUkFCTEVfTEVOR1RIID0gREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5KGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSwgJ2xlbmd0aCcsIHsgdmFsdWU6IDggfSkubGVuZ3RoICE9PSA4O1xufSk7XG5cbnZhciBURU1QTEFURSA9IFN0cmluZyhTdHJpbmcpLnNwbGl0KCdTdHJpbmcnKTtcblxudmFyIG1ha2VCdWlsdEluID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUsIG5hbWUsIG9wdGlvbnMpIHtcbiAgaWYgKHN0cmluZ1NsaWNlKCRTdHJpbmcobmFtZSksIDAsIDcpID09PSAnU3ltYm9sKCcpIHtcbiAgICBuYW1lID0gJ1snICsgcmVwbGFjZSgkU3RyaW5nKG5hbWUpLCAvXlN5bWJvbFxcKChbXildKilcXCkuKiQvLCAnJDEnKSArICddJztcbiAgfVxuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmdldHRlcikgbmFtZSA9ICdnZXQgJyArIG5hbWU7XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuc2V0dGVyKSBuYW1lID0gJ3NldCAnICsgbmFtZTtcbiAgaWYgKCFoYXNPd24odmFsdWUsICduYW1lJykgfHwgKENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FICYmIHZhbHVlLm5hbWUgIT09IG5hbWUpKSB7XG4gICAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ25hbWUnLCB7IHZhbHVlOiBuYW1lLCBjb25maWd1cmFibGU6IHRydWUgfSk7XG4gICAgZWxzZSB2YWx1ZS5uYW1lID0gbmFtZTtcbiAgfVxuICBpZiAoQ09ORklHVVJBQkxFX0xFTkdUSCAmJiBvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnYXJpdHknKSAmJiB2YWx1ZS5sZW5ndGggIT09IG9wdGlvbnMuYXJpdHkpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ2xlbmd0aCcsIHsgdmFsdWU6IG9wdGlvbnMuYXJpdHkgfSk7XG4gIH1cbiAgdHJ5IHtcbiAgICBpZiAob3B0aW9ucyAmJiBoYXNPd24ob3B0aW9ucywgJ2NvbnN0cnVjdG9yJykgJiYgb3B0aW9ucy5jb25zdHJ1Y3Rvcikge1xuICAgICAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ3Byb3RvdHlwZScsIHsgd3JpdGFibGU6IGZhbHNlIH0pO1xuICAgIC8vIGluIFY4IH4gQ2hyb21lIDUzLCBwcm90b3R5cGVzIG9mIHNvbWUgbWV0aG9kcywgbGlrZSBgQXJyYXkucHJvdG90eXBlLnZhbHVlc2AsIGFyZSBub24td3JpdGFibGVcbiAgICB9IGVsc2UgaWYgKHZhbHVlLnByb3RvdHlwZSkgdmFsdWUucHJvdG90eXBlID0gdW5kZWZpbmVkO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIHZhciBzdGF0ZSA9IGVuZm9yY2VJbnRlcm5hbFN0YXRlKHZhbHVlKTtcbiAgaWYgKCFoYXNPd24oc3RhdGUsICdzb3VyY2UnKSkge1xuICAgIHN0YXRlLnNvdXJjZSA9IGpvaW4oVEVNUExBVEUsIHR5cGVvZiBuYW1lID09ICdzdHJpbmcnID8gbmFtZSA6ICcnKTtcbiAgfSByZXR1cm4gdmFsdWU7XG59O1xuXG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1leHRlbmQtbmF0aXZlIC0tIHJlcXVpcmVkXG5GdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgPSBtYWtlQnVpbHRJbihmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIGlzQ2FsbGFibGUodGhpcykgJiYgZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKS5zb3VyY2UgfHwgaW5zcGVjdFNvdXJjZSh0aGlzKTtcbn0sICd0b1N0cmluZycpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIG1ha2VCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge307XG4gIHZhciBzaW1wbGUgPSBvcHRpb25zLmVudW1lcmFibGU7XG4gIHZhciBuYW1lID0gb3B0aW9ucy5uYW1lICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5hbWUgOiBrZXk7XG4gIGlmIChpc0NhbGxhYmxlKHZhbHVlKSkgbWFrZUJ1aWx0SW4odmFsdWUsIG5hbWUsIG9wdGlvbnMpO1xuICBpZiAob3B0aW9ucy5nbG9iYWwpIHtcbiAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgICBlbHNlIGRlZmluZUdsb2JhbFByb3BlcnR5KGtleSwgdmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIW9wdGlvbnMudW5zYWZlKSBkZWxldGUgT1trZXldO1xuICAgICAgZWxzZSBpZiAoT1trZXldKSBzaW1wbGUgPSB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgICBlbHNlIGRlZmluZVByb3BlcnR5TW9kdWxlLmYoTywga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogIW9wdGlvbnMubm9uQ29uZmlndXJhYmxlLFxuICAgICAgd3JpdGFibGU6ICFvcHRpb25zLm5vbldyaXRhYmxlXG4gICAgfSk7XG4gIH0gcmV0dXJuIE87XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcblxuLy8gYE1hdGgudHJ1bmNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1tYXRoLnRydW5jXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tbWF0aC10cnVuYyAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE1hdGgudHJ1bmMgfHwgZnVuY3Rpb24gdHJ1bmMoeCkge1xuICB2YXIgbiA9ICt4O1xuICByZXR1cm4gKG4gPiAwID8gZmxvb3IgOiBjZWlsKShuKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRydW5jID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL21hdGgtdHJ1bmMnKTtcblxuLy8gYFRvSW50ZWdlck9ySW5maW5pdHlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2ludGVnZXJvcmluZmluaXR5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIgbnVtYmVyID0gK2FyZ3VtZW50O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICByZXR1cm4gbnVtYmVyICE9PSBudW1iZXIgfHwgbnVtYmVyID09PSAwID8gMCA6IHRydW5jKG51bWJlcik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBIZWxwZXIgZm9yIGEgcG9wdWxhciByZXBlYXRpbmcgY2FzZSBvZiB0aGUgc3BlYzpcbi8vIExldCBpbnRlZ2VyIGJlID8gVG9JbnRlZ2VyKGluZGV4KS5cbi8vIElmIGludGVnZXIgPCAwLCBsZXQgcmVzdWx0IGJlIG1heCgobGVuZ3RoICsgaW50ZWdlciksIDApOyBlbHNlIGxldCByZXN1bHQgYmUgbWluKGludGVnZXIsIGxlbmd0aCkuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIHZhciBpbnRlZ2VyID0gdG9JbnRlZ2VyT3JJbmZpbml0eShpbmRleCk7XG4gIHJldHVybiBpbnRlZ2VyIDwgMCA/IG1heChpbnRlZ2VyICsgbGVuZ3RoLCAwKSA6IG1pbihpbnRlZ2VyLCBsZW5ndGgpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG5cbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gYFRvTGVuZ3RoYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9sZW5ndGhcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBsZW4gPSB0b0ludGVnZXJPckluZmluaXR5KGFyZ3VtZW50KTtcbiAgcmV0dXJuIGxlbiA+IDAgPyBtaW4obGVuLCAweDFGRkZGRkZGRkZGRkZGKSA6IDA7IC8vIDIgKiogNTMgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xuXG4vLyBgTGVuZ3RoT2ZBcnJheUxpa2VgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1sZW5ndGhvZmFycmF5bGlrZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0b0xlbmd0aChvYmoubGVuZ3RoKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUueyBpbmRleE9mLCBpbmNsdWRlcyB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IGxlbmd0aE9mQXJyYXlMaWtlKE8pO1xuICAgIGlmIChsZW5ndGggPT09IDApIHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9PSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgICAgaWYgKHZhbHVlICE9PSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgaWYgKChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSAmJiBPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbiAgaW5jbHVkZXM6IGNyZWF0ZU1ldGhvZCh0cnVlKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmRleE9mYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxuICBpbmRleE9mOiBjcmVhdGVNZXRob2QoZmFsc2UpXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGluZGV4T2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmRleE9mO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIHB1c2ggPSB1bmN1cnJ5VGhpcyhbXS5wdXNoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgIWhhc093bihoaWRkZW5LZXlzLCBrZXkpICYmIGhhc093bihPLCBrZXkpICYmIHB1c2gocmVzdWx0LCBrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzT3duKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHB1c2gocmVzdWx0LCBrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIElFOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSBbXG4gICdjb25zdHJ1Y3RvcicsXG4gICdoYXNPd25Qcm9wZXJ0eScsXG4gICdpc1Byb3RvdHlwZU9mJyxcbiAgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcbiAgJ3RvTG9jYWxlU3RyaW5nJyxcbiAgJ3RvU3RyaW5nJyxcbiAgJ3ZhbHVlT2YnXG5dO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG5cbnZhciBoaWRkZW5LZXlzID0gZW51bUJ1Z0tleXMuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eW5hbWVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5bmFtZXMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlzeW1ib2xzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbnZhciBjb25jYXQgPSB1bmN1cnJ5VGhpcyhbXS5jb25jYXQpO1xuXG4vLyBhbGwgb2JqZWN0IGtleXMsIGluY2x1ZGVzIG5vbi1lbnVtZXJhYmxlIGFuZCBzeW1ib2xzXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ1JlZmxlY3QnLCAnb3duS2V5cycpIHx8IGZ1bmN0aW9uIG93bktleXMoaXQpIHtcbiAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlLmYoYW5PYmplY3QoaXQpKTtcbiAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mO1xuICByZXR1cm4gZ2V0T3duUHJvcGVydHlTeW1ib2xzID8gY29uY2F0KGtleXMsIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkpIDoga2V5cztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgb3duS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vd24ta2V5cycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSwgZXhjZXB0aW9ucykge1xuICB2YXIga2V5cyA9IG93bktleXMoc291cmNlKTtcbiAgdmFyIGRlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHlNb2R1bGUuZjtcbiAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoIWhhc093bih0YXJnZXQsIGtleSkgJiYgIShleGNlcHRpb25zICYmIGhhc093bihleGNlcHRpb25zLCBrZXkpKSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgIH1cbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciByZXBsYWNlbWVudCA9IC8jfFxcLnByb3RvdHlwZVxcLi87XG5cbnZhciBpc0ZvcmNlZCA9IGZ1bmN0aW9uIChmZWF0dXJlLCBkZXRlY3Rpb24pIHtcbiAgdmFyIHZhbHVlID0gZGF0YVtub3JtYWxpemUoZmVhdHVyZSldO1xuICByZXR1cm4gdmFsdWUgPT09IFBPTFlGSUxMID8gdHJ1ZVxuICAgIDogdmFsdWUgPT09IE5BVElWRSA/IGZhbHNlXG4gICAgOiBpc0NhbGxhYmxlKGRldGVjdGlvbikgPyBmYWlscyhkZXRlY3Rpb24pXG4gICAgOiAhIWRldGVjdGlvbjtcbn07XG5cbnZhciBub3JtYWxpemUgPSBpc0ZvcmNlZC5ub3JtYWxpemUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gIHJldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKHJlcGxhY2VtZW50LCAnLicpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG52YXIgZGF0YSA9IGlzRm9yY2VkLmRhdGEgPSB7fTtcbnZhciBOQVRJVkUgPSBpc0ZvcmNlZC5OQVRJVkUgPSAnTic7XG52YXIgUE9MWUZJTEwgPSBpc0ZvcmNlZC5QT0xZRklMTCA9ICdQJztcblxubW9kdWxlLmV4cG9ydHMgPSBpc0ZvcmNlZDtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJykuZjtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG52YXIgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMnKTtcbnZhciBpc0ZvcmNlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1mb3JjZWQnKTtcblxuLypcbiAgb3B0aW9ucy50YXJnZXQgICAgICAgICAtIG5hbWUgb2YgdGhlIHRhcmdldCBvYmplY3RcbiAgb3B0aW9ucy5nbG9iYWwgICAgICAgICAtIHRhcmdldCBpcyB0aGUgZ2xvYmFsIG9iamVjdFxuICBvcHRpb25zLnN0YXQgICAgICAgICAgIC0gZXhwb3J0IGFzIHN0YXRpYyBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnByb3RvICAgICAgICAgIC0gZXhwb3J0IGFzIHByb3RvdHlwZSBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnJlYWwgICAgICAgICAgIC0gcmVhbCBwcm90b3R5cGUgbWV0aG9kIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy5mb3JjZWQgICAgICAgICAtIGV4cG9ydCBldmVuIGlmIHRoZSBuYXRpdmUgZmVhdHVyZSBpcyBhdmFpbGFibGVcbiAgb3B0aW9ucy5iaW5kICAgICAgICAgICAtIGJpbmQgbWV0aG9kcyB0byB0aGUgdGFyZ2V0LCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMud3JhcCAgICAgICAgICAgLSB3cmFwIGNvbnN0cnVjdG9ycyB0byBwcmV2ZW50aW5nIGdsb2JhbCBwb2xsdXRpb24sIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy51bnNhZmUgICAgICAgICAtIHVzZSB0aGUgc2ltcGxlIGFzc2lnbm1lbnQgb2YgcHJvcGVydHkgaW5zdGVhZCBvZiBkZWxldGUgKyBkZWZpbmVQcm9wZXJ0eVxuICBvcHRpb25zLnNoYW0gICAgICAgICAgIC0gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICBvcHRpb25zLmVudW1lcmFibGUgICAgIC0gZXhwb3J0IGFzIGVudW1lcmFibGUgcHJvcGVydHlcbiAgb3B0aW9ucy5kb250Q2FsbEdldFNldCAtIHByZXZlbnQgY2FsbGluZyBhIGdldHRlciBvbiB0YXJnZXRcbiAgb3B0aW9ucy5uYW1lICAgICAgICAgICAtIHRoZSAubmFtZSBvZiB0aGUgZnVuY3Rpb24gaWYgaXQgZG9lcyBub3QgbWF0Y2ggdGhlIGtleVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdGlvbnMsIHNvdXJjZSkge1xuICB2YXIgVEFSR0VUID0gb3B0aW9ucy50YXJnZXQ7XG4gIHZhciBHTE9CQUwgPSBvcHRpb25zLmdsb2JhbDtcbiAgdmFyIFNUQVRJQyA9IG9wdGlvbnMuc3RhdDtcbiAgdmFyIEZPUkNFRCwgdGFyZ2V0LCBrZXksIHRhcmdldFByb3BlcnR5LCBzb3VyY2VQcm9wZXJ0eSwgZGVzY3JpcHRvcjtcbiAgaWYgKEdMT0JBTCkge1xuICAgIHRhcmdldCA9IGdsb2JhbDtcbiAgfSBlbHNlIGlmIChTVEFUSUMpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxbVEFSR0VUXSB8fCBkZWZpbmVHbG9iYWxQcm9wZXJ0eShUQVJHRVQsIHt9KTtcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxbVEFSR0VUXSAmJiBnbG9iYWxbVEFSR0VUXS5wcm90b3R5cGU7XG4gIH1cbiAgaWYgKHRhcmdldCkgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgc291cmNlUHJvcGVydHkgPSBzb3VyY2Vba2V5XTtcbiAgICBpZiAob3B0aW9ucy5kb250Q2FsbEdldFNldCkge1xuICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gICAgICB0YXJnZXRQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci52YWx1ZTtcbiAgICB9IGVsc2UgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRba2V5XTtcbiAgICBGT1JDRUQgPSBpc0ZvcmNlZChHTE9CQUwgPyBrZXkgOiBUQVJHRVQgKyAoU1RBVElDID8gJy4nIDogJyMnKSArIGtleSwgb3B0aW9ucy5mb3JjZWQpO1xuICAgIC8vIGNvbnRhaW5lZCBpbiB0YXJnZXRcbiAgICBpZiAoIUZPUkNFRCAmJiB0YXJnZXRQcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZW9mIHNvdXJjZVByb3BlcnR5ID09IHR5cGVvZiB0YXJnZXRQcm9wZXJ0eSkgY29udGludWU7XG4gICAgICBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKHNvdXJjZVByb3BlcnR5LCB0YXJnZXRQcm9wZXJ0eSk7XG4gICAgfVxuICAgIC8vIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgICBpZiAob3B0aW9ucy5zaGFtIHx8ICh0YXJnZXRQcm9wZXJ0eSAmJiB0YXJnZXRQcm9wZXJ0eS5zaGFtKSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHNvdXJjZVByb3BlcnR5LCAnc2hhbScsIHRydWUpO1xuICAgIH1cbiAgICBkZWZpbmVCdWlsdEluKHRhcmdldCwga2V5LCBzb3VyY2VQcm9wZXJ0eSwgb3B0aW9ucyk7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciB0ZXN0ID0ge307XG5cbnRlc3RbVE9fU1RSSU5HX1RBR10gPSAneic7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RyaW5nKHRlc3QpID09PSAnW29iamVjdCB6XSc7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIFRPX1NUUklOR19UQUdfU1VQUE9SVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgY2xhc3NvZlJhdyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIENPUlJFQ1RfQVJHVU1FTlRTID0gY2xhc3NvZlJhdyhmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbi8vIGdldHRpbmcgdGFnIGZyb20gRVM2KyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2Bcbm1vZHVsZS5leHBvcnRzID0gVE9fU1RSSU5HX1RBR19TVVBQT1JUID8gY2xhc3NvZlJhdyA6IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgdGFnLCByZXN1bHQ7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mICh0YWcgPSB0cnlHZXQoTyA9ICRPYmplY3QoaXQpLCBUT19TVFJJTkdfVEFHKSkgPT0gJ3N0cmluZycgPyB0YWdcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IENPUlJFQ1RfQVJHVU1FTlRTID8gY2xhc3NvZlJhdyhPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChyZXN1bHQgPSBjbGFzc29mUmF3KE8pKSA9PT0gJ09iamVjdCcgJiYgaXNDYWxsYWJsZShPLmNhbGxlZSkgPyAnQXJndW1lbnRzJyA6IHJlc3VsdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZicpO1xuXG52YXIgJFN0cmluZyA9IFN0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGNsYXNzb2YoYXJndW1lbnQpID09PSAnU3ltYm9sJykgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgYSBTeW1ib2wgdmFsdWUgdG8gYSBzdHJpbmcnKTtcbiAgcmV0dXJuICRTdHJpbmcoYXJndW1lbnQpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG4vLyBgT2JqZWN0LmtleXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3Qua2V5c1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1rZXlzIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1ZycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBvYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzJyk7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydGllc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0aWVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnRpZXMgLS0gc2FmZVxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgJiYgIVY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBwcm9wcyA9IHRvSW5kZXhlZE9iamVjdChQcm9wZXJ0aWVzKTtcbiAgdmFyIGtleXMgPSBvYmplY3RLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsZW5ndGggPiBpbmRleCkgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXkgPSBrZXlzW2luZGV4KytdLCBwcm9wc1trZXldKTtcbiAgcmV0dXJuIE87XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ2RvY3VtZW50JywgJ2RvY3VtZW50RWxlbWVudCcpO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGdsb2JhbCBBY3RpdmVYT2JqZWN0IC0tIG9sZCBJRSwgV1NIICovXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZGVmaW5lUHJvcGVydGllc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnRpZXMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xudmFyIGh0bWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaHRtbCcpO1xudmFyIGRvY3VtZW50Q3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG5cbnZhciBHVCA9ICc+JztcbnZhciBMVCA9ICc8JztcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBTQ1JJUFQgPSAnc2NyaXB0JztcbnZhciBJRV9QUk9UTyA9IHNoYXJlZEtleSgnSUVfUFJPVE8nKTtcblxudmFyIEVtcHR5Q29uc3RydWN0b3IgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cbnZhciBzY3JpcHRUYWcgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICByZXR1cm4gTFQgKyBTQ1JJUFQgKyBHVCArIGNvbnRlbnQgKyBMVCArICcvJyArIFNDUklQVCArIEdUO1xufTtcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIEFjdGl2ZVggT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYID0gZnVuY3Rpb24gKGFjdGl2ZVhEb2N1bWVudCkge1xuICBhY3RpdmVYRG9jdW1lbnQud3JpdGUoc2NyaXB0VGFnKCcnKSk7XG4gIGFjdGl2ZVhEb2N1bWVudC5jbG9zZSgpO1xuICB2YXIgdGVtcCA9IGFjdGl2ZVhEb2N1bWVudC5wYXJlbnRXaW5kb3cuT2JqZWN0O1xuICBhY3RpdmVYRG9jdW1lbnQgPSBudWxsOyAvLyBhdm9pZCBtZW1vcnkgbGVha1xuICByZXR1cm4gdGVtcDtcbn07XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBOdWxsUHJvdG9PYmplY3RWaWFJRnJhbWUgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSBkb2N1bWVudENyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICB2YXIgSlMgPSAnamF2YScgKyBTQ1JJUFQgKyAnOic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGh0bWwuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzQ3NVxuICBpZnJhbWUuc3JjID0gU3RyaW5nKEpTKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShzY3JpcHRUYWcoJ2RvY3VtZW50LkY9T2JqZWN0JykpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICByZXR1cm4gaWZyYW1lRG9jdW1lbnQuRjtcbn07XG5cbi8vIENoZWNrIGZvciBkb2N1bWVudC5kb21haW4gYW5kIGFjdGl2ZSB4IHN1cHBvcnRcbi8vIE5vIG5lZWQgdG8gdXNlIGFjdGl2ZSB4IGFwcHJvYWNoIHdoZW4gZG9jdW1lbnQuZG9tYWluIGlzIG5vdCBzZXRcbi8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW0vaXNzdWVzLzE1MFxuLy8gdmFyaWF0aW9uIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9raXRjYW1icmlkZ2UvZXM1LXNoaW0vY29tbWl0LzRmNzM4YWMwNjYzNDZcbi8vIGF2b2lkIElFIEdDIGJ1Z1xudmFyIGFjdGl2ZVhEb2N1bWVudDtcbnZhciBOdWxsUHJvdG9PYmplY3QgPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgYWN0aXZlWERvY3VtZW50ID0gbmV3IEFjdGl2ZVhPYmplY3QoJ2h0bWxmaWxlJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGlnbm9yZSAqLyB9XG4gIE51bGxQcm90b09iamVjdCA9IHR5cGVvZiBkb2N1bWVudCAhPSAndW5kZWZpbmVkJ1xuICAgID8gZG9jdW1lbnQuZG9tYWluICYmIGFjdGl2ZVhEb2N1bWVudFxuICAgICAgPyBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYKGFjdGl2ZVhEb2N1bWVudCkgLy8gb2xkIElFXG4gICAgICA6IE51bGxQcm90b09iamVjdFZpYUlGcmFtZSgpXG4gICAgOiBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYKGFjdGl2ZVhEb2N1bWVudCk7IC8vIFdTSFxuICB2YXIgbGVuZ3RoID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIGRlbGV0ZSBOdWxsUHJvdG9PYmplY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tsZW5ndGhdXTtcbiAgcmV0dXJuIE51bGxQcm90b09iamVjdCgpO1xufTtcblxuaGlkZGVuS2V5c1tJRV9QUk9UT10gPSB0cnVlO1xuXG4vLyBgT2JqZWN0LmNyZWF0ZWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5jcmVhdGVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtY3JlYXRlIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5Q29uc3RydWN0b3JbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eUNvbnN0cnVjdG9yKCk7XG4gICAgRW1wdHlDb25zdHJ1Y3RvcltQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBOdWxsUHJvdG9PYmplY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRlZmluZVByb3BlcnRpZXNNb2R1bGUuZihyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gdW5jdXJyeVRoaXMoW10uc2xpY2UpO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eW5hbWVzIC0tIHNhZmUgKi9cbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMnKS5mO1xudmFyIGFycmF5U2xpY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2xpY2UnKTtcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uIChpdCkge1xuICB0cnkge1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlOYW1lcyhpdCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGFycmF5U2xpY2Uod2luZG93TmFtZXMpO1xuICB9XG59O1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgY2xhc3NvZihpdCkgPT09ICdXaW5kb3cnXG4gICAgPyBnZXRXaW5kb3dOYW1lcyhpdClcbiAgICA6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzKHRvSW5kZXhlZE9iamVjdChpdCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgbWFrZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWFrZS1idWlsdC1pbicpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKSB7XG4gIGlmIChkZXNjcmlwdG9yLmdldCkgbWFrZUJ1aWx0SW4oZGVzY3JpcHRvci5nZXQsIG5hbWUsIHsgZ2V0dGVyOiB0cnVlIH0pO1xuICBpZiAoZGVzY3JpcHRvci5zZXQpIG1ha2VCdWlsdEluKGRlc2NyaXB0b3Iuc2V0LCBuYW1lLCB7IHNldHRlcjogdHJ1ZSB9KTtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5LmYodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG5leHBvcnRzLmYgPSB3ZWxsS25vd25TeW1ib2w7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnbG9iYWw7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHBhdGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcGF0aCcpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgd3JhcHBlZFdlbGxLbm93blN5bWJvbE1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbC13cmFwcGVkJyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE5BTUUpIHtcbiAgdmFyIFN5bWJvbCA9IHBhdGguU3ltYm9sIHx8IChwYXRoLlN5bWJvbCA9IHt9KTtcbiAgaWYgKCFoYXNPd24oU3ltYm9sLCBOQU1FKSkgZGVmaW5lUHJvcGVydHkoU3ltYm9sLCBOQU1FLCB7XG4gICAgdmFsdWU6IHdyYXBwZWRXZWxsS25vd25TeW1ib2xNb2R1bGUuZihOQU1FKVxuICB9KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBTeW1ib2wgPSBnZXRCdWlsdEluKCdTeW1ib2wnKTtcbiAgdmFyIFN5bWJvbFByb3RvdHlwZSA9IFN5bWJvbCAmJiBTeW1ib2wucHJvdG90eXBlO1xuICB2YXIgdmFsdWVPZiA9IFN5bWJvbFByb3RvdHlwZSAmJiBTeW1ib2xQcm90b3R5cGUudmFsdWVPZjtcbiAgdmFyIFRPX1BSSU1JVElWRSA9IHdlbGxLbm93blN5bWJvbCgndG9QcmltaXRpdmUnKTtcblxuICBpZiAoU3ltYm9sUHJvdG90eXBlICYmICFTeW1ib2xQcm90b3R5cGVbVE9fUFJJTUlUSVZFXSkge1xuICAgIC8vIGBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN5bWJvbC5wcm90b3R5cGUtQEB0b3ByaW1pdGl2ZVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFycyAtLSByZXF1aXJlZCBmb3IgLmxlbmd0aFxuICAgIGRlZmluZUJ1aWx0SW4oU3ltYm9sUHJvdG90eXBlLCBUT19QUklNSVRJVkUsIGZ1bmN0aW9uIChoaW50KSB7XG4gICAgICByZXR1cm4gY2FsbCh2YWx1ZU9mLCB0aGlzKTtcbiAgICB9LCB7IGFyaXR5OiAxIH0pO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBUQUcsIFNUQVRJQykge1xuICBpZiAodGFyZ2V0ICYmICFTVEFUSUMpIHRhcmdldCA9IHRhcmdldC5wcm90b3R5cGU7XG4gIGlmICh0YXJnZXQgJiYgIWhhc093bih0YXJnZXQsIFRPX1NUUklOR19UQUcpKSB7XG4gICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBUT19TVFJJTkdfVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IFRBRyB9KTtcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2xhc3NvZlJhdyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbikge1xuICAvLyBOYXNob3JuIGJ1ZzpcbiAgLy8gICBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTEyOFxuICAvLyAgIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xMTMwXG4gIGlmIChjbGFzc29mUmF3KGZuKSA9PT0gJ0Z1bmN0aW9uJykgcmV0dXJuIHVuY3VycnlUaGlzKGZuKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy1jbGF1c2UnKTtcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBiaW5kID0gdW5jdXJyeVRoaXModW5jdXJyeVRoaXMuYmluZCk7XG5cbi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQpIHtcbiAgYUNhbGxhYmxlKGZuKTtcbiAgcmV0dXJuIHRoYXQgPT09IHVuZGVmaW5lZCA/IGZuIDogTkFUSVZFX0JJTkQgPyBiaW5kKGZuLCB0aGF0KSA6IGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbi8vIGBJc0FycmF5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNhcnJheVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LWlzYXJyYXkgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGNsYXNzb2YoYXJndW1lbnQpID09PSAnQXJyYXknO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mJyk7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBpbnNwZWN0U291cmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlJyk7XG5cbnZhciBub29wID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIGNvbnN0cnVjdCA9IGdldEJ1aWx0SW4oJ1JlZmxlY3QnLCAnY29uc3RydWN0Jyk7XG52YXIgY29uc3RydWN0b3JSZWdFeHAgPSAvXlxccyooPzpjbGFzc3xmdW5jdGlvbilcXGIvO1xudmFyIGV4ZWMgPSB1bmN1cnJ5VGhpcyhjb25zdHJ1Y3RvclJlZ0V4cC5leGVjKTtcbnZhciBJTkNPUlJFQ1RfVE9fU1RSSU5HID0gIWNvbnN0cnVjdG9yUmVnRXhwLnRlc3Qobm9vcCk7XG5cbnZhciBpc0NvbnN0cnVjdG9yTW9kZXJuID0gZnVuY3Rpb24gaXNDb25zdHJ1Y3Rvcihhcmd1bWVudCkge1xuICBpZiAoIWlzQ2FsbGFibGUoYXJndW1lbnQpKSByZXR1cm4gZmFsc2U7XG4gIHRyeSB7XG4gICAgY29uc3RydWN0KG5vb3AsIFtdLCBhcmd1bWVudCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG52YXIgaXNDb25zdHJ1Y3RvckxlZ2FjeSA9IGZ1bmN0aW9uIGlzQ29uc3RydWN0b3IoYXJndW1lbnQpIHtcbiAgaWYgKCFpc0NhbGxhYmxlKGFyZ3VtZW50KSkgcmV0dXJuIGZhbHNlO1xuICBzd2l0Y2ggKGNsYXNzb2YoYXJndW1lbnQpKSB7XG4gICAgY2FzZSAnQXN5bmNGdW5jdGlvbic6XG4gICAgY2FzZSAnR2VuZXJhdG9yRnVuY3Rpb24nOlxuICAgIGNhc2UgJ0FzeW5jR2VuZXJhdG9yRnVuY3Rpb24nOiByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyB3ZSBjYW4ndCBjaGVjayAucHJvdG90eXBlIHNpbmNlIGNvbnN0cnVjdG9ycyBwcm9kdWNlZCBieSAuYmluZCBoYXZlbid0IGl0XG4gICAgLy8gYEZ1bmN0aW9uI3RvU3RyaW5nYCB0aHJvd3Mgb24gc29tZSBidWlsdC1pdCBmdW5jdGlvbiBpbiBzb21lIGxlZ2FjeSBlbmdpbmVzXG4gICAgLy8gKGZvciBleGFtcGxlLCBgRE9NUXVhZGAgYW5kIHNpbWlsYXIgaW4gRkY0MS0pXG4gICAgcmV0dXJuIElOQ09SUkVDVF9UT19TVFJJTkcgfHwgISFleGVjKGNvbnN0cnVjdG9yUmVnRXhwLCBpbnNwZWN0U291cmNlKGFyZ3VtZW50KSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cbmlzQ29uc3RydWN0b3JMZWdhY3kuc2hhbSA9IHRydWU7XG5cbi8vIGBJc0NvbnN0cnVjdG9yYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNjb25zdHJ1Y3RvclxubW9kdWxlLmV4cG9ydHMgPSAhY29uc3RydWN0IHx8IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNhbGxlZDtcbiAgcmV0dXJuIGlzQ29uc3RydWN0b3JNb2Rlcm4oaXNDb25zdHJ1Y3Rvck1vZGVybi5jYWxsKVxuICAgIHx8ICFpc0NvbnN0cnVjdG9yTW9kZXJuKE9iamVjdClcbiAgICB8fCAhaXNDb25zdHJ1Y3Rvck1vZGVybihmdW5jdGlvbiAoKSB7IGNhbGxlZCA9IHRydWU7IH0pXG4gICAgfHwgY2FsbGVkO1xufSkgPyBpc0NvbnN0cnVjdG9yTGVnYWN5IDogaXNDb25zdHJ1Y3Rvck1vZGVybjtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIGlzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY29uc3RydWN0b3InKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcbnZhciAkQXJyYXkgPSBBcnJheTtcblxuLy8gYSBwYXJ0IG9mIGBBcnJheVNwZWNpZXNDcmVhdGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheXNwZWNpZXNjcmVhdGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsQXJyYXkpIHtcbiAgdmFyIEM7XG4gIGlmIChpc0FycmF5KG9yaWdpbmFsQXJyYXkpKSB7XG4gICAgQyA9IG9yaWdpbmFsQXJyYXkuY29uc3RydWN0b3I7XG4gICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICBpZiAoaXNDb25zdHJ1Y3RvcihDKSAmJiAoQyA9PT0gJEFycmF5IHx8IGlzQXJyYXkoQy5wcm90b3R5cGUpKSkgQyA9IHVuZGVmaW5lZDtcbiAgICBlbHNlIGlmIChpc09iamVjdChDKSkge1xuICAgICAgQyA9IENbU1BFQ0lFU107XG4gICAgICBpZiAoQyA9PT0gbnVsbCkgQyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gcmV0dXJuIEMgPT09IHVuZGVmaW5lZCA/ICRBcnJheSA6IEM7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBhcnJheVNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG5cbi8vIGBBcnJheVNwZWNpZXNDcmVhdGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheXNwZWNpZXNjcmVhdGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsQXJyYXksIGxlbmd0aCkge1xuICByZXR1cm4gbmV3IChhcnJheVNwZWNpZXNDb25zdHJ1Y3RvcihvcmlnaW5hbEFycmF5KSkobGVuZ3RoID09PSAwID8gMCA6IGxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dCcpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xudmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xuXG52YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnsgZm9yRWFjaCwgbWFwLCBmaWx0ZXIsIHNvbWUsIGV2ZXJ5LCBmaW5kLCBmaW5kSW5kZXgsIGZpbHRlclJlamVjdCB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgdmFyIElTX01BUCA9IFRZUEUgPT09IDE7XG4gIHZhciBJU19GSUxURVIgPSBUWVBFID09PSAyO1xuICB2YXIgSVNfU09NRSA9IFRZUEUgPT09IDM7XG4gIHZhciBJU19FVkVSWSA9IFRZUEUgPT09IDQ7XG4gIHZhciBJU19GSU5EX0lOREVYID0gVFlQRSA9PT0gNjtcbiAgdmFyIElTX0ZJTFRFUl9SRUpFQ1QgPSBUWVBFID09PSA3O1xuICB2YXIgTk9fSE9MRVMgPSBUWVBFID09PSA1IHx8IElTX0ZJTkRfSU5ERVg7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGNhbGxiYWNrZm4sIHRoYXQsIHNwZWNpZmljQ3JlYXRlKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCgkdGhpcyk7XG4gICAgdmFyIHNlbGYgPSBJbmRleGVkT2JqZWN0KE8pO1xuICAgIHZhciBsZW5ndGggPSBsZW5ndGhPZkFycmF5TGlrZShzZWxmKTtcbiAgICB2YXIgYm91bmRGdW5jdGlvbiA9IGJpbmQoY2FsbGJhY2tmbiwgdGhhdCk7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgY3JlYXRlID0gc3BlY2lmaWNDcmVhdGUgfHwgYXJyYXlTcGVjaWVzQ3JlYXRlO1xuICAgIHZhciB0YXJnZXQgPSBJU19NQVAgPyBjcmVhdGUoJHRoaXMsIGxlbmd0aCkgOiBJU19GSUxURVIgfHwgSVNfRklMVEVSX1JFSkVDVCA/IGNyZWF0ZSgkdGhpcywgMCkgOiB1bmRlZmluZWQ7XG4gICAgdmFyIHZhbHVlLCByZXN1bHQ7XG4gICAgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChOT19IT0xFUyB8fCBpbmRleCBpbiBzZWxmKSB7XG4gICAgICB2YWx1ZSA9IHNlbGZbaW5kZXhdO1xuICAgICAgcmVzdWx0ID0gYm91bmRGdW5jdGlvbih2YWx1ZSwgaW5kZXgsIE8pO1xuICAgICAgaWYgKFRZUEUpIHtcbiAgICAgICAgaWYgKElTX01BUCkgdGFyZ2V0W2luZGV4XSA9IHJlc3VsdDsgLy8gbWFwXG4gICAgICAgIGVsc2UgaWYgKHJlc3VsdCkgc3dpdGNoIChUWVBFKSB7XG4gICAgICAgICAgY2FzZSAzOiByZXR1cm4gdHJ1ZTsgICAgICAgICAgICAgIC8vIHNvbWVcbiAgICAgICAgICBjYXNlIDU6IHJldHVybiB2YWx1ZTsgICAgICAgICAgICAgLy8gZmluZFxuICAgICAgICAgIGNhc2UgNjogcmV0dXJuIGluZGV4OyAgICAgICAgICAgICAvLyBmaW5kSW5kZXhcbiAgICAgICAgICBjYXNlIDI6IHB1c2godGFyZ2V0LCB2YWx1ZSk7ICAgICAgLy8gZmlsdGVyXG4gICAgICAgIH0gZWxzZSBzd2l0Y2ggKFRZUEUpIHtcbiAgICAgICAgICBjYXNlIDQ6IHJldHVybiBmYWxzZTsgICAgICAgICAgICAgLy8gZXZlcnlcbiAgICAgICAgICBjYXNlIDc6IHB1c2godGFyZ2V0LCB2YWx1ZSk7ICAgICAgLy8gZmlsdGVyUmVqZWN0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHRhcmdldDtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG4gIGZvckVhY2g6IGNyZWF0ZU1ldGhvZCgwKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5tYXBgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5tYXBcbiAgbWFwOiBjcmVhdGVNZXRob2QoMSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZmlsdGVyYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gIGZpbHRlcjogY3JlYXRlTWV0aG9kKDIpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLnNvbWVgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5zb21lXG4gIHNvbWU6IGNyZWF0ZU1ldGhvZCgzKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5ldmVyeWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmV2ZXJ5XG4gIGV2ZXJ5OiBjcmVhdGVNZXRob2QoNCksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZmluZGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRcbiAgZmluZDogY3JlYXRlTWV0aG9kKDUpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRJbmRleFxuICBmaW5kSW5kZXg6IGNyZWF0ZU1ldGhvZCg2KSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maWx0ZXJSZWplY3RgIG1ldGhvZFxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1hcnJheS1maWx0ZXJpbmdcbiAgZmlsdGVyUmVqZWN0OiBjcmVhdGVNZXRob2QoNylcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZicpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG52YXIgJHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIG5hdGl2ZU9iamVjdENyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgb2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cycpO1xudmFyIGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzRXh0ZXJuYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMtZXh0ZXJuYWwnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGRlZmluZVByb3BlcnRpZXNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUJ1aWx0SW5BY2Nlc3NvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4tYWNjZXNzb3InKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIHdyYXBwZWRXZWxsS25vd25TeW1ib2xNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wtd3JhcHBlZCcpO1xudmFyIGRlZmluZVdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbC1kZWZpbmUnKTtcbnZhciBkZWZpbmVTeW1ib2xUb1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtZGVmaW5lLXRvLXByaW1pdGl2ZScpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xudmFyICRmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZvckVhY2g7XG5cbnZhciBISURERU4gPSBzaGFyZWRLZXkoJ2hpZGRlbicpO1xudmFyIFNZTUJPTCA9ICdTeW1ib2wnO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuc2V0O1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldHRlckZvcihTWU1CT0wpO1xuXG52YXIgT2JqZWN0UHJvdG90eXBlID0gT2JqZWN0W1BST1RPVFlQRV07XG52YXIgJFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgU3ltYm9sUHJvdG90eXBlID0gJFN5bWJvbCAmJiAkU3ltYm9sW1BST1RPVFlQRV07XG52YXIgUmFuZ2VFcnJvciA9IGdsb2JhbC5SYW5nZUVycm9yO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG52YXIgUU9iamVjdCA9IGdsb2JhbC5RT2JqZWN0O1xudmFyIG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xudmFyIG5hdGl2ZURlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHlNb2R1bGUuZjtcbnZhciBuYXRpdmVHZXRPd25Qcm9wZXJ0eU5hbWVzID0gZ2V0T3duUHJvcGVydHlOYW1lc0V4dGVybmFsLmY7XG52YXIgbmF0aXZlUHJvcGVydHlJc0VudW1lcmFibGUgPSBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mO1xudmFyIHB1c2ggPSB1bmN1cnJ5VGhpcyhbXS5wdXNoKTtcblxudmFyIEFsbFN5bWJvbHMgPSBzaGFyZWQoJ3N5bWJvbHMnKTtcbnZhciBPYmplY3RQcm90b3R5cGVTeW1ib2xzID0gc2hhcmVkKCdvcC1zeW1ib2xzJyk7XG52YXIgV2VsbEtub3duU3ltYm9sc1N0b3JlID0gc2hhcmVkKCd3a3MnKTtcblxuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgVVNFX1NFVFRFUiA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIGZhbGxiYWNrRGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiAoTywgUCwgQXR0cmlidXRlcykge1xuICB2YXIgT2JqZWN0UHJvdG90eXBlRGVzY3JpcHRvciA9IG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvcihPYmplY3RQcm90b3R5cGUsIFApO1xuICBpZiAoT2JqZWN0UHJvdG90eXBlRGVzY3JpcHRvcikgZGVsZXRlIE9iamVjdFByb3RvdHlwZVtQXTtcbiAgbmF0aXZlRGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gIGlmIChPYmplY3RQcm90b3R5cGVEZXNjcmlwdG9yICYmIE8gIT09IE9iamVjdFByb3RvdHlwZSkge1xuICAgIG5hdGl2ZURlZmluZVByb3BlcnR5KE9iamVjdFByb3RvdHlwZSwgUCwgT2JqZWN0UHJvdG90eXBlRGVzY3JpcHRvcik7XG4gIH1cbn07XG5cbnZhciBzZXRTeW1ib2xEZXNjcmlwdG9yID0gREVTQ1JJUFRPUlMgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0Q3JlYXRlKG5hdGl2ZURlZmluZVByb3BlcnR5KHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5hdGl2ZURlZmluZVByb3BlcnR5KHRoaXMsICdhJywgeyB2YWx1ZTogNyB9KS5hOyB9XG4gIH0pKS5hICE9PSA3O1xufSkgPyBmYWxsYmFja0RlZmluZVByb3BlcnR5IDogbmF0aXZlRGVmaW5lUHJvcGVydHk7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHRhZywgZGVzY3JpcHRpb24pIHtcbiAgdmFyIHN5bWJvbCA9IEFsbFN5bWJvbHNbdGFnXSA9IG5hdGl2ZU9iamVjdENyZWF0ZShTeW1ib2xQcm90b3R5cGUpO1xuICBzZXRJbnRlcm5hbFN0YXRlKHN5bWJvbCwge1xuICAgIHR5cGU6IFNZTUJPTCxcbiAgICB0YWc6IHRhZyxcbiAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb25cbiAgfSk7XG4gIGlmICghREVTQ1JJUFRPUlMpIHN5bWJvbC5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICByZXR1cm4gc3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgaWYgKE8gPT09IE9iamVjdFByb3RvdHlwZSkgJGRlZmluZVByb3BlcnR5KE9iamVjdFByb3RvdHlwZVN5bWJvbHMsIFAsIEF0dHJpYnV0ZXMpO1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleSA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoaGFzT3duKEFsbFN5bWJvbHMsIGtleSkpIHtcbiAgICBpZiAoIUF0dHJpYnV0ZXMuZW51bWVyYWJsZSkge1xuICAgICAgaWYgKCFoYXNPd24oTywgSElEREVOKSkgbmF0aXZlRGVmaW5lUHJvcGVydHkoTywgSElEREVOLCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgbmF0aXZlT2JqZWN0Q3JlYXRlKG51bGwpKSk7XG4gICAgICBPW0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoYXNPd24oTywgSElEREVOKSAmJiBPW0hJRERFTl1ba2V5XSkgT1tISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEF0dHJpYnV0ZXMgPSBuYXRpdmVPYmplY3RDcmVhdGUoQXR0cmlidXRlcywgeyBlbnVtZXJhYmxlOiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMCwgZmFsc2UpIH0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2NyaXB0b3IoTywga2V5LCBBdHRyaWJ1dGVzKTtcbiAgfSByZXR1cm4gbmF0aXZlRGVmaW5lUHJvcGVydHkoTywga2V5LCBBdHRyaWJ1dGVzKTtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIHByb3BlcnRpZXMgPSB0b0luZGV4ZWRPYmplY3QoUHJvcGVydGllcyk7XG4gIHZhciBrZXlzID0gb2JqZWN0S2V5cyhwcm9wZXJ0aWVzKS5jb25jYXQoJGdldE93blByb3BlcnR5U3ltYm9scyhwcm9wZXJ0aWVzKSk7XG4gICRmb3JFYWNoKGtleXMsIGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoIURFU0NSSVBUT1JTIHx8IGNhbGwoJHByb3BlcnR5SXNFbnVtZXJhYmxlLCBwcm9wZXJ0aWVzLCBrZXkpKSAkZGVmaW5lUHJvcGVydHkoTywga2V5LCBwcm9wZXJ0aWVzW2tleV0pO1xuICB9KTtcbiAgcmV0dXJuIE87XG59O1xuXG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyBuYXRpdmVPYmplY3RDcmVhdGUoTykgOiAkZGVmaW5lUHJvcGVydGllcyhuYXRpdmVPYmplY3RDcmVhdGUoTyksIFByb3BlcnRpZXMpO1xufTtcblxudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgdmFyIFAgPSB0b1Byb3BlcnR5S2V5KFYpO1xuICB2YXIgZW51bWVyYWJsZSA9IGNhbGwobmF0aXZlUHJvcGVydHlJc0VudW1lcmFibGUsIHRoaXMsIFApO1xuICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG90eXBlICYmIGhhc093bihBbGxTeW1ib2xzLCBQKSAmJiAhaGFzT3duKE9iamVjdFByb3RvdHlwZVN5bWJvbHMsIFApKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBlbnVtZXJhYmxlIHx8ICFoYXNPd24odGhpcywgUCkgfHwgIWhhc093bihBbGxTeW1ib2xzLCBQKSB8fCBoYXNPd24odGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1bUF1cbiAgICA/IGVudW1lcmFibGUgOiB0cnVlO1xufTtcblxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICB2YXIgaXQgPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIHZhciBrZXkgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvdHlwZSAmJiBoYXNPd24oQWxsU3ltYm9scywga2V5KSAmJiAhaGFzT3duKE9iamVjdFByb3RvdHlwZVN5bWJvbHMsIGtleSkpIHJldHVybjtcbiAgdmFyIGRlc2NyaXB0b3IgPSBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSk7XG4gIGlmIChkZXNjcmlwdG9yICYmIGhhc093bihBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzT3duKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpIHtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSB0cnVlO1xuICB9XG4gIHJldHVybiBkZXNjcmlwdG9yO1xufTtcblxudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHZhciBuYW1lcyA9IG5hdGl2ZUdldE93blByb3BlcnR5TmFtZXModG9JbmRleGVkT2JqZWN0KE8pKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICAkZm9yRWFjaChuYW1lcywgZnVuY3Rpb24gKGtleSkge1xuICAgIGlmICghaGFzT3duKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhc093bihoaWRkZW5LZXlzLCBrZXkpKSBwdXNoKHJlc3VsdCwga2V5KTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIChPKSB7XG4gIHZhciBJU19PQkpFQ1RfUFJPVE9UWVBFID0gTyA9PT0gT2JqZWN0UHJvdG90eXBlO1xuICB2YXIgbmFtZXMgPSBuYXRpdmVHZXRPd25Qcm9wZXJ0eU5hbWVzKElTX09CSkVDVF9QUk9UT1RZUEUgPyBPYmplY3RQcm90b3R5cGVTeW1ib2xzIDogdG9JbmRleGVkT2JqZWN0KE8pKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICAkZm9yRWFjaChuYW1lcywgZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChoYXNPd24oQWxsU3ltYm9scywga2V5KSAmJiAoIUlTX09CSkVDVF9QUk9UT1RZUEUgfHwgaGFzT3duKE9iamVjdFByb3RvdHlwZSwga2V5KSkpIHtcbiAgICAgIHB1c2gocmVzdWx0LCBBbGxTeW1ib2xzW2tleV0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyBgU3ltYm9sYCBjb25zdHJ1Y3RvclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zeW1ib2wtY29uc3RydWN0b3JcbmlmICghTkFUSVZFX1NZTUJPTCkge1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCkge1xuICAgIGlmIChpc1Byb3RvdHlwZU9mKFN5bWJvbFByb3RvdHlwZSwgdGhpcykpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvcicpO1xuICAgIHZhciBkZXNjcmlwdGlvbiA9ICFhcmd1bWVudHMubGVuZ3RoIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogJHRvU3RyaW5nKGFyZ3VtZW50c1swXSk7XG4gICAgdmFyIHRhZyA9IHVpZChkZXNjcmlwdGlvbik7XG4gICAgdmFyIHNldHRlciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgdmFyICR0aGlzID0gdGhpcyA9PT0gdW5kZWZpbmVkID8gZ2xvYmFsIDogdGhpcztcbiAgICAgIGlmICgkdGhpcyA9PT0gT2JqZWN0UHJvdG90eXBlKSBjYWxsKHNldHRlciwgT2JqZWN0UHJvdG90eXBlU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYgKGhhc093bigkdGhpcywgSElEREVOKSAmJiBoYXNPd24oJHRoaXNbSElEREVOXSwgdGFnKSkgJHRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCB2YWx1ZSk7XG4gICAgICB0cnkge1xuICAgICAgICBzZXRTeW1ib2xEZXNjcmlwdG9yKCR0aGlzLCB0YWcsIGRlc2NyaXB0b3IpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKCEoZXJyb3IgaW5zdGFuY2VvZiBSYW5nZUVycm9yKSkgdGhyb3cgZXJyb3I7XG4gICAgICAgIGZhbGxiYWNrRGVmaW5lUHJvcGVydHkoJHRoaXMsIHRhZywgZGVzY3JpcHRvcik7XG4gICAgICB9XG4gICAgfTtcbiAgICBpZiAoREVTQ1JJUFRPUlMgJiYgVVNFX1NFVFRFUikgc2V0U3ltYm9sRGVzY3JpcHRvcihPYmplY3RQcm90b3R5cGUsIHRhZywgeyBjb25maWd1cmFibGU6IHRydWUsIHNldDogc2V0dGVyIH0pO1xuICAgIHJldHVybiB3cmFwKHRhZywgZGVzY3JpcHRpb24pO1xuICB9O1xuXG4gIFN5bWJvbFByb3RvdHlwZSA9ICRTeW1ib2xbUFJPVE9UWVBFXTtcblxuICBkZWZpbmVCdWlsdEluKFN5bWJvbFByb3RvdHlwZSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIGdldEludGVybmFsU3RhdGUodGhpcykudGFnO1xuICB9KTtcblxuICBkZWZpbmVCdWlsdEluKCRTeW1ib2wsICd3aXRob3V0U2V0dGVyJywgZnVuY3Rpb24gKGRlc2NyaXB0aW9uKSB7XG4gICAgcmV0dXJuIHdyYXAodWlkKGRlc2NyaXB0aW9uKSwgZGVzY3JpcHRpb24pO1xuICB9KTtcblxuICBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mID0gJGRlZmluZVByb3BlcnR5O1xuICBkZWZpbmVQcm9wZXJ0aWVzTW9kdWxlLmYgPSAkZGVmaW5lUHJvcGVydGllcztcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlLmYgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzRXh0ZXJuYWwuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgd3JhcHBlZFdlbGxLbm93blN5bWJvbE1vZHVsZS5mID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gd3JhcCh3ZWxsS25vd25TeW1ib2wobmFtZSksIG5hbWUpO1xuICB9O1xuXG4gIGlmIChERVNDUklQVE9SUykge1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLVN5bWJvbC1kZXNjcmlwdGlvblxuICAgIGRlZmluZUJ1aWx0SW5BY2Nlc3NvcihTeW1ib2xQcm90b3R5cGUsICdkZXNjcmlwdGlvbicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gZGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLmRlc2NyaXB0aW9uO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICghSVNfUFVSRSkge1xuICAgICAgZGVmaW5lQnVpbHRJbihPYmplY3RQcm90b3R5cGUsICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgeyB1bnNhZmU6IHRydWUgfSk7XG4gICAgfVxuICB9XG59XG5cbiQoeyBnbG9iYWw6IHRydWUsIGNvbnN0cnVjdG9yOiB0cnVlLCB3cmFwOiB0cnVlLCBmb3JjZWQ6ICFOQVRJVkVfU1lNQk9MLCBzaGFtOiAhTkFUSVZFX1NZTUJPTCB9LCB7XG4gIFN5bWJvbDogJFN5bWJvbFxufSk7XG5cbiRmb3JFYWNoKG9iamVjdEtleXMoV2VsbEtub3duU3ltYm9sc1N0b3JlKSwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgZGVmaW5lV2VsbEtub3duU3ltYm9sKG5hbWUpO1xufSk7XG5cbiQoeyB0YXJnZXQ6IFNZTUJPTCwgc3RhdDogdHJ1ZSwgZm9yY2VkOiAhTkFUSVZFX1NZTUJPTCB9LCB7XG4gIHVzZVNldHRlcjogZnVuY3Rpb24gKCkgeyBVU0VfU0VUVEVSID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbiAoKSB7IFVTRV9TRVRURVIgPSBmYWxzZTsgfVxufSk7XG5cbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6ICFOQVRJVkVfU1lNQk9MLCBzaGFtOiAhREVTQ1JJUFRPUlMgfSwge1xuICAvLyBgT2JqZWN0LmNyZWF0ZWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmNyZWF0ZVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIGBPYmplY3QuZGVmaW5lUHJvcGVydHlgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyBgT2JqZWN0LmRlZmluZVByb3BlcnRpZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0aWVzXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5ZGVzY3JpcHRvcnNcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yXG59KTtcblxuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogIU5BVElWRV9TWU1CT0wgfSwge1xuICAvLyBgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eW5hbWVzXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzXG59KTtcblxuLy8gYFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV1gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zeW1ib2wucHJvdG90eXBlLUBAdG9wcmltaXRpdmVcbmRlZmluZVN5bWJvbFRvUHJpbWl0aXZlKCk7XG5cbi8vIGBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddYCBwcm9wZXJ0eVxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zeW1ib2wucHJvdG90eXBlLUBAdG9zdHJpbmd0YWdcbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsIFNZTUJPTCk7XG5cbmhpZGRlbktleXNbSElEREVOXSA9IHRydWU7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1zeW1ib2wgLS0gc2FmZSAqL1xubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfU1lNQk9MICYmICEhU3ltYm9sWydmb3InXSAmJiAhIVN5bWJvbC5rZXlGb3I7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciBOQVRJVkVfU1lNQk9MX1JFR0lTVFJZID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N5bWJvbC1yZWdpc3RyeS1kZXRlY3Rpb24nKTtcblxudmFyIFN0cmluZ1RvU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N0cmluZy10by1zeW1ib2wtcmVnaXN0cnknKTtcbnZhciBTeW1ib2xUb1N0cmluZ1JlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtdG8tc3RyaW5nLXJlZ2lzdHJ5Jyk7XG5cbi8vIGBTeW1ib2wuZm9yYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3ltYm9sLmZvclxuJCh7IHRhcmdldDogJ1N5bWJvbCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogIU5BVElWRV9TWU1CT0xfUkVHSVNUUlkgfSwge1xuICAnZm9yJzogZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBzdHJpbmcgPSB0b1N0cmluZyhrZXkpO1xuICAgIGlmIChoYXNPd24oU3RyaW5nVG9TeW1ib2xSZWdpc3RyeSwgc3RyaW5nKSkgcmV0dXJuIFN0cmluZ1RvU3ltYm9sUmVnaXN0cnlbc3RyaW5nXTtcbiAgICB2YXIgc3ltYm9sID0gZ2V0QnVpbHRJbignU3ltYm9sJykoc3RyaW5nKTtcbiAgICBTdHJpbmdUb1N5bWJvbFJlZ2lzdHJ5W3N0cmluZ10gPSBzeW1ib2w7XG4gICAgU3ltYm9sVG9TdHJpbmdSZWdpc3RyeVtzeW1ib2xdID0gc3RyaW5nO1xuICAgIHJldHVybiBzeW1ib2w7XG4gIH1cbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciBOQVRJVkVfU1lNQk9MX1JFR0lTVFJZID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N5bWJvbC1yZWdpc3RyeS1kZXRlY3Rpb24nKTtcblxudmFyIFN5bWJvbFRvU3RyaW5nUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC10by1zdHJpbmctcmVnaXN0cnknKTtcblxuLy8gYFN5bWJvbC5rZXlGb3JgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zeW1ib2wua2V5Zm9yXG4kKHsgdGFyZ2V0OiAnU3ltYm9sJywgc3RhdDogdHJ1ZSwgZm9yY2VkOiAhTkFUSVZFX1NZTUJPTF9SRUdJU1RSWSB9LCB7XG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKHN5bSkge1xuICAgIGlmICghaXNTeW1ib2woc3ltKSkgdGhyb3cgbmV3IFR5cGVFcnJvcih0cnlUb1N0cmluZyhzeW0pICsgJyBpcyBub3QgYSBzeW1ib2wnKTtcbiAgICBpZiAoaGFzT3duKFN5bWJvbFRvU3RyaW5nUmVnaXN0cnksIHN5bSkpIHJldHVybiBTeW1ib2xUb1N0cmluZ1JlZ2lzdHJ5W3N5bV07XG4gIH1cbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgYXBwbHkgPSBGdW5jdGlvblByb3RvdHlwZS5hcHBseTtcbnZhciBjYWxsID0gRnVuY3Rpb25Qcm90b3R5cGUuY2FsbDtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLXJlZmxlY3QgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgUmVmbGVjdCA9PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmFwcGx5IHx8IChOQVRJVkVfQklORCA/IGNhbGwuYmluZChhcHBseSkgOiBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBjYWxsLmFwcGx5KGFwcGx5LCBhcmd1bWVudHMpO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xuXG52YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChyZXBsYWNlcikge1xuICBpZiAoaXNDYWxsYWJsZShyZXBsYWNlcikpIHJldHVybiByZXBsYWNlcjtcbiAgaWYgKCFpc0FycmF5KHJlcGxhY2VyKSkgcmV0dXJuO1xuICB2YXIgcmF3TGVuZ3RoID0gcmVwbGFjZXIubGVuZ3RoO1xuICB2YXIga2V5cyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJhd0xlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGVsZW1lbnQgPSByZXBsYWNlcltpXTtcbiAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT0gJ3N0cmluZycpIHB1c2goa2V5cywgZWxlbWVudCk7XG4gICAgZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQgPT0gJ251bWJlcicgfHwgY2xhc3NvZihlbGVtZW50KSA9PT0gJ051bWJlcicgfHwgY2xhc3NvZihlbGVtZW50KSA9PT0gJ1N0cmluZycpIHB1c2goa2V5cywgdG9TdHJpbmcoZWxlbWVudCkpO1xuICB9XG4gIHZhciBrZXlzTGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciByb290ID0gdHJ1ZTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgaWYgKHJvb3QpIHtcbiAgICAgIHJvb3QgPSBmYWxzZTtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKGlzQXJyYXkodGhpcykpIHJldHVybiB2YWx1ZTtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IGtleXNMZW5ndGg7IGorKykgaWYgKGtleXNbal0gPT09IGtleSkgcmV0dXJuIHZhbHVlO1xuICB9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIGFwcGx5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWFwcGx5Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG52YXIgYXJyYXlTbGljZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zbGljZScpO1xudmFyIGdldFJlcGxhY2VyRnVuY3Rpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWpzb24tcmVwbGFjZXItZnVuY3Rpb24nKTtcbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24nKTtcblxudmFyICRTdHJpbmcgPSBTdHJpbmc7XG52YXIgJHN0cmluZ2lmeSA9IGdldEJ1aWx0SW4oJ0pTT04nLCAnc3RyaW5naWZ5Jyk7XG52YXIgZXhlYyA9IHVuY3VycnlUaGlzKC8uLy5leGVjKTtcbnZhciBjaGFyQXQgPSB1bmN1cnJ5VGhpcygnJy5jaGFyQXQpO1xudmFyIGNoYXJDb2RlQXQgPSB1bmN1cnJ5VGhpcygnJy5jaGFyQ29kZUF0KTtcbnZhciByZXBsYWNlID0gdW5jdXJyeVRoaXMoJycucmVwbGFjZSk7XG52YXIgbnVtYmVyVG9TdHJpbmcgPSB1bmN1cnJ5VGhpcygxLjAudG9TdHJpbmcpO1xuXG52YXIgdGVzdGVyID0gL1tcXHVEODAwLVxcdURGRkZdL2c7XG52YXIgbG93ID0gL15bXFx1RDgwMC1cXHVEQkZGXSQvO1xudmFyIGhpID0gL15bXFx1REMwMC1cXHVERkZGXSQvO1xuXG52YXIgV1JPTkdfU1lNQk9MU19DT05WRVJTSU9OID0gIU5BVElWRV9TWU1CT0wgfHwgZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgc3ltYm9sID0gZ2V0QnVpbHRJbignU3ltYm9sJykoJ3N0cmluZ2lmeSBkZXRlY3Rpb24nKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgcmV0dXJuICRzdHJpbmdpZnkoW3N5bWJvbF0pICE9PSAnW251bGxdJ1xuICAgIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAgIHx8ICRzdHJpbmdpZnkoeyBhOiBzeW1ib2wgfSkgIT09ICd7fSdcbiAgICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICAgIHx8ICRzdHJpbmdpZnkoT2JqZWN0KHN5bWJvbCkpICE9PSAne30nO1xufSk7XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXdlbGwtZm9ybWVkLXN0cmluZ2lmeVxudmFyIElMTF9GT1JNRURfVU5JQ09ERSA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICRzdHJpbmdpZnkoJ1xcdURGMDZcXHVEODM0JykgIT09ICdcIlxcXFx1ZGYwNlxcXFx1ZDgzNFwiJ1xuICAgIHx8ICRzdHJpbmdpZnkoJ1xcdURFQUQnKSAhPT0gJ1wiXFxcXHVkZWFkXCInO1xufSk7XG5cbnZhciBzdHJpbmdpZnlXaXRoU3ltYm9sc0ZpeCA9IGZ1bmN0aW9uIChpdCwgcmVwbGFjZXIpIHtcbiAgdmFyIGFyZ3MgPSBhcnJheVNsaWNlKGFyZ3VtZW50cyk7XG4gIHZhciAkcmVwbGFjZXIgPSBnZXRSZXBsYWNlckZ1bmN0aW9uKHJlcGxhY2VyKTtcbiAgaWYgKCFpc0NhbGxhYmxlKCRyZXBsYWNlcikgJiYgKGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSkgcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gIGFyZ3NbMV0gPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgIC8vIHNvbWUgb2xkIGltcGxlbWVudGF0aW9ucyAobGlrZSBXZWJLaXQpIGNvdWxkIHBhc3MgbnVtYmVycyBhcyBrZXlzXG4gICAgaWYgKGlzQ2FsbGFibGUoJHJlcGxhY2VyKSkgdmFsdWUgPSBjYWxsKCRyZXBsYWNlciwgdGhpcywgJFN0cmluZyhrZXkpLCB2YWx1ZSk7XG4gICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgfTtcbiAgcmV0dXJuIGFwcGx5KCRzdHJpbmdpZnksIG51bGwsIGFyZ3MpO1xufTtcblxudmFyIGZpeElsbEZvcm1lZCA9IGZ1bmN0aW9uIChtYXRjaCwgb2Zmc2V0LCBzdHJpbmcpIHtcbiAgdmFyIHByZXYgPSBjaGFyQXQoc3RyaW5nLCBvZmZzZXQgLSAxKTtcbiAgdmFyIG5leHQgPSBjaGFyQXQoc3RyaW5nLCBvZmZzZXQgKyAxKTtcbiAgaWYgKChleGVjKGxvdywgbWF0Y2gpICYmICFleGVjKGhpLCBuZXh0KSkgfHwgKGV4ZWMoaGksIG1hdGNoKSAmJiAhZXhlYyhsb3csIHByZXYpKSkge1xuICAgIHJldHVybiAnXFxcXHUnICsgbnVtYmVyVG9TdHJpbmcoY2hhckNvZGVBdChtYXRjaCwgMCksIDE2KTtcbiAgfSByZXR1cm4gbWF0Y2g7XG59O1xuXG5pZiAoJHN0cmluZ2lmeSkge1xuICAvLyBgSlNPTi5zdHJpbmdpZnlgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWpzb24uc3RyaW5naWZ5XG4gICQoeyB0YXJnZXQ6ICdKU09OJywgc3RhdDogdHJ1ZSwgYXJpdHk6IDMsIGZvcmNlZDogV1JPTkdfU1lNQk9MU19DT05WRVJTSU9OIHx8IElMTF9GT1JNRURfVU5JQ09ERSB9LCB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzIC0tIHJlcXVpcmVkIGZvciBgLmxlbmd0aGBcbiAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCwgcmVwbGFjZXIsIHNwYWNlKSB7XG4gICAgICB2YXIgYXJncyA9IGFycmF5U2xpY2UoYXJndW1lbnRzKTtcbiAgICAgIHZhciByZXN1bHQgPSBhcHBseShXUk9OR19TWU1CT0xTX0NPTlZFUlNJT04gPyBzdHJpbmdpZnlXaXRoU3ltYm9sc0ZpeCA6ICRzdHJpbmdpZnksIG51bGwsIGFyZ3MpO1xuICAgICAgcmV0dXJuIElMTF9GT1JNRURfVU5JQ09ERSAmJiB0eXBlb2YgcmVzdWx0ID09ICdzdHJpbmcnID8gcmVwbGFjZShyZXN1bHQsIHRlc3RlciwgZml4SWxsRm9ybWVkKSA6IHJlc3VsdDtcbiAgICB9XG4gIH0pO1xufVxuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcblxuLy8gVjggfiBDaHJvbWUgMzggYW5kIDM5IGBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzYCBmYWlscyBvbiBwcmltaXRpdmVzXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zNDQzXG52YXIgRk9SQ0VEID0gIU5BVElWRV9TWU1CT0wgfHwgZmFpbHMoZnVuY3Rpb24gKCkgeyBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZigxKTsgfSk7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5c3ltYm9sc1xuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpIHtcbiAgICB2YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mO1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID8gJGdldE93blByb3BlcnR5U3ltYm9scyh0b09iamVjdChpdCkpIDogW107XG4gIH1cbn0pO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIFRPRE86IFJlbW92ZSB0aGlzIG1vZHVsZSBmcm9tIGBjb3JlLWpzQDRgIHNpbmNlIGl0J3Mgc3BsaXQgdG8gbW9kdWxlcyBsaXN0ZWQgYmVsb3dcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXMuc3ltYm9sLmNvbnN0cnVjdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzLnN5bWJvbC5mb3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXMuc3ltYm9sLmtleS1mb3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXMuanNvbi5zdHJpbmdpZnknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXMub2JqZWN0LmdldC1vd24tcHJvcGVydHktc3ltYm9scycpO1xuIiwgIi8vIGBTeW1ib2wucHJvdG90eXBlLmRlc2NyaXB0aW9uYCBnZXR0ZXJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3ltYm9sLnByb3RvdHlwZS5kZXNjcmlwdGlvblxuJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgZGVmaW5lQnVpbHRJbkFjY2Vzc29yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbi1hY2Nlc3NvcicpO1xudmFyIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzJyk7XG5cbnZhciBOYXRpdmVTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyIFN5bWJvbFByb3RvdHlwZSA9IE5hdGl2ZVN5bWJvbCAmJiBOYXRpdmVTeW1ib2wucHJvdG90eXBlO1xuXG5pZiAoREVTQ1JJUFRPUlMgJiYgaXNDYWxsYWJsZShOYXRpdmVTeW1ib2wpICYmICghKCdkZXNjcmlwdGlvbicgaW4gU3ltYm9sUHJvdG90eXBlKSB8fFxuICAvLyBTYWZhcmkgMTIgYnVnXG4gIE5hdGl2ZVN5bWJvbCgpLmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWRcbikpIHtcbiAgdmFyIEVtcHR5U3RyaW5nRGVzY3JpcHRpb25TdG9yZSA9IHt9O1xuICAvLyB3cmFwIFN5bWJvbCBjb25zdHJ1Y3RvciBmb3IgY29ycmVjdCB3b3JrIHdpdGggdW5kZWZpbmVkIGRlc2NyaXB0aW9uXG4gIHZhciBTeW1ib2xXcmFwcGVyID0gZnVuY3Rpb24gU3ltYm9sKCkge1xuICAgIHZhciBkZXNjcmlwdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPCAxIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogdG9TdHJpbmcoYXJndW1lbnRzWzBdKTtcbiAgICB2YXIgcmVzdWx0ID0gaXNQcm90b3R5cGVPZihTeW1ib2xQcm90b3R5cGUsIHRoaXMpXG4gICAgICA/IG5ldyBOYXRpdmVTeW1ib2woZGVzY3JpcHRpb24pXG4gICAgICAvLyBpbiBFZGdlIDEzLCBTdHJpbmcoU3ltYm9sKHVuZGVmaW5lZCkpID09PSAnU3ltYm9sKHVuZGVmaW5lZCknXG4gICAgICA6IGRlc2NyaXB0aW9uID09PSB1bmRlZmluZWQgPyBOYXRpdmVTeW1ib2woKSA6IE5hdGl2ZVN5bWJvbChkZXNjcmlwdGlvbik7XG4gICAgaWYgKGRlc2NyaXB0aW9uID09PSAnJykgRW1wdHlTdHJpbmdEZXNjcmlwdGlvblN0b3JlW3Jlc3VsdF0gPSB0cnVlO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyhTeW1ib2xXcmFwcGVyLCBOYXRpdmVTeW1ib2wpO1xuICBTeW1ib2xXcmFwcGVyLnByb3RvdHlwZSA9IFN5bWJvbFByb3RvdHlwZTtcbiAgU3ltYm9sUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3ltYm9sV3JhcHBlcjtcblxuICB2YXIgTkFUSVZFX1NZTUJPTCA9IFN0cmluZyhOYXRpdmVTeW1ib2woJ2Rlc2NyaXB0aW9uIGRldGVjdGlvbicpKSA9PT0gJ1N5bWJvbChkZXNjcmlwdGlvbiBkZXRlY3Rpb24pJztcbiAgdmFyIHRoaXNTeW1ib2xWYWx1ZSA9IHVuY3VycnlUaGlzKFN5bWJvbFByb3RvdHlwZS52YWx1ZU9mKTtcbiAgdmFyIHN5bWJvbERlc2NyaXB0aXZlU3RyaW5nID0gdW5jdXJyeVRoaXMoU3ltYm9sUHJvdG90eXBlLnRvU3RyaW5nKTtcbiAgdmFyIHJlZ2V4cCA9IC9eU3ltYm9sXFwoKC4qKVxcKVteKV0rJC87XG4gIHZhciByZXBsYWNlID0gdW5jdXJyeVRoaXMoJycucmVwbGFjZSk7XG4gIHZhciBzdHJpbmdTbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcblxuICBkZWZpbmVCdWlsdEluQWNjZXNzb3IoU3ltYm9sUHJvdG90eXBlLCAnZGVzY3JpcHRpb24nLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZGVzY3JpcHRpb24oKSB7XG4gICAgICB2YXIgc3ltYm9sID0gdGhpc1N5bWJvbFZhbHVlKHRoaXMpO1xuICAgICAgaWYgKGhhc093bihFbXB0eVN0cmluZ0Rlc2NyaXB0aW9uU3RvcmUsIHN5bWJvbCkpIHJldHVybiAnJztcbiAgICAgIHZhciBzdHJpbmcgPSBzeW1ib2xEZXNjcmlwdGl2ZVN0cmluZyhzeW1ib2wpO1xuICAgICAgdmFyIGRlc2MgPSBOQVRJVkVfU1lNQk9MID8gc3RyaW5nU2xpY2Uoc3RyaW5nLCA3LCAtMSkgOiByZXBsYWNlKHN0cmluZywgcmVnZXhwLCAnJDEnKTtcbiAgICAgIHJldHVybiBkZXNjID09PSAnJyA/IHVuZGVmaW5lZCA6IGRlc2M7XG4gICAgfVxuICB9KTtcblxuICAkKHsgZ2xvYmFsOiB0cnVlLCBjb25zdHJ1Y3RvcjogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcbiAgICBTeW1ib2w6IFN5bWJvbFdyYXBwZXJcbiAgfSk7XG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGRlZmluZVdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbC1kZWZpbmUnKTtcblxuLy8gYFN5bWJvbC5pdGVyYXRvcmAgd2VsbC1rbm93biBzeW1ib2xcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3ltYm9sLml0ZXJhdG9yXG5kZWZpbmVXZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwga2V5LCBtZXRob2QpIHtcbiAgdHJ5IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG4gICAgcmV0dXJuIHVuY3VycnlUaGlzKGFDYWxsYWJsZShPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwga2V5KVttZXRob2RdKSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gaXNPYmplY3QoYXJndW1lbnQpIHx8IGFyZ3VtZW50ID09PSBudWxsO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNQb3NzaWJsZVByb3RvdHlwZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wb3NzaWJsZS1wcm90b3R5cGUnKTtcblxudmFyICRTdHJpbmcgPSBTdHJpbmc7XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGlzUG9zc2libGVQcm90b3R5cGUoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3Qgc2V0IFwiICsgJFN0cmluZyhhcmd1bWVudCkgKyAnIGFzIGEgcHJvdG90eXBlJyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvIC0tIHNhZmUgKi9cbnZhciB1bmN1cnJ5VGhpc0FjY2Vzc29yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy1hY2Nlc3NvcicpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGFQb3NzaWJsZVByb3RvdHlwZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLXBvc3NpYmxlLXByb3RvdHlwZScpO1xuXG4vLyBgT2JqZWN0LnNldFByb3RvdHlwZU9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LnNldHByb3RvdHlwZW9mXG4vLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3Qtc2V0cHJvdG90eXBlb2YgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gZnVuY3Rpb24gKCkge1xuICB2YXIgQ09SUkVDVF9TRVRURVIgPSBmYWxzZTtcbiAgdmFyIHRlc3QgPSB7fTtcbiAgdmFyIHNldHRlcjtcbiAgdHJ5IHtcbiAgICBzZXR0ZXIgPSB1bmN1cnJ5VGhpc0FjY2Vzc29yKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nLCAnc2V0Jyk7XG4gICAgc2V0dGVyKHRlc3QsIFtdKTtcbiAgICBDT1JSRUNUX1NFVFRFUiA9IHRlc3QgaW5zdGFuY2VvZiBBcnJheTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICBhbk9iamVjdChPKTtcbiAgICBhUG9zc2libGVQcm90b3R5cGUocHJvdG8pO1xuICAgIGlmIChDT1JSRUNUX1NFVFRFUikgc2V0dGVyKE8sIHByb3RvKTtcbiAgICBlbHNlIE8uX19wcm90b19fID0gcHJvdG87XG4gICAgcmV0dXJuIE87XG4gIH07XG59KCkgOiB1bmRlZmluZWQpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVGFyZ2V0LCBTb3VyY2UsIGtleSkge1xuICBrZXkgaW4gVGFyZ2V0IHx8IGRlZmluZVByb3BlcnR5KFRhcmdldCwga2V5LCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gU291cmNlW2tleV07IH0sXG4gICAgc2V0OiBmdW5jdGlvbiAoaXQpIHsgU291cmNlW2tleV0gPSBpdDsgfVxuICB9KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qtc2V0LXByb3RvdHlwZS1vZicpO1xuXG4vLyBtYWtlcyBzdWJjbGFzc2luZyB3b3JrIGNvcnJlY3QgZm9yIHdyYXBwZWQgYnVpbHQtaW5zXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkdGhpcywgZHVtbXksIFdyYXBwZXIpIHtcbiAgdmFyIE5ld1RhcmdldCwgTmV3VGFyZ2V0UHJvdG90eXBlO1xuICBpZiAoXG4gICAgLy8gaXQgY2FuIHdvcmsgb25seSB3aXRoIG5hdGl2ZSBgc2V0UHJvdG90eXBlT2ZgXG4gICAgc2V0UHJvdG90eXBlT2YgJiZcbiAgICAvLyB3ZSBoYXZlbid0IGNvbXBsZXRlbHkgY29ycmVjdCBwcmUtRVM2IHdheSBmb3IgZ2V0dGluZyBgbmV3LnRhcmdldGAsIHNvIHVzZSB0aGlzXG4gICAgaXNDYWxsYWJsZShOZXdUYXJnZXQgPSBkdW1teS5jb25zdHJ1Y3RvcikgJiZcbiAgICBOZXdUYXJnZXQgIT09IFdyYXBwZXIgJiZcbiAgICBpc09iamVjdChOZXdUYXJnZXRQcm90b3R5cGUgPSBOZXdUYXJnZXQucHJvdG90eXBlKSAmJlxuICAgIE5ld1RhcmdldFByb3RvdHlwZSAhPT0gV3JhcHBlci5wcm90b3R5cGVcbiAgKSBzZXRQcm90b3R5cGVPZigkdGhpcywgTmV3VGFyZ2V0UHJvdG90eXBlKTtcbiAgcmV0dXJuICR0aGlzO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50LCAkZGVmYXVsdCkge1xuICByZXR1cm4gYXJndW1lbnQgPT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50cy5sZW5ndGggPCAyID8gJycgOiAkZGVmYXVsdCA6IHRvU3RyaW5nKGFyZ3VtZW50KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcblxuLy8gYEluc3RhbGxFcnJvckNhdXNlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9wcm9wb3NhbC1lcnJvci1jYXVzZS8jc2VjLWVycm9yb2JqZWN0cy1pbnN0YWxsLWVycm9yLWNhdXNlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBvcHRpb25zKSB7XG4gIGlmIChpc09iamVjdChvcHRpb25zKSAmJiAnY2F1c2UnIGluIG9wdGlvbnMpIHtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoTywgJ2NhdXNlJywgb3B0aW9ucy5jYXVzZSk7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgJEVycm9yID0gRXJyb3I7XG52YXIgcmVwbGFjZSA9IHVuY3VycnlUaGlzKCcnLnJlcGxhY2UpO1xuXG52YXIgVEVTVCA9IChmdW5jdGlvbiAoYXJnKSB7IHJldHVybiBTdHJpbmcobmV3ICRFcnJvcihhcmcpLnN0YWNrKTsgfSkoJ3p4Y2FzZCcpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlZG9zL25vLXZ1bG5lcmFibGUgLS0gc2FmZVxudmFyIFY4X09SX0NIQUtSQV9TVEFDS19FTlRSWSA9IC9cXG5cXHMqYXQgW146XSo6W15cXG5dKi87XG52YXIgSVNfVjhfT1JfQ0hBS1JBX1NUQUNLID0gVjhfT1JfQ0hBS1JBX1NUQUNLX0VOVFJZLnRlc3QoVEVTVCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHN0YWNrLCBkcm9wRW50cmllcykge1xuICBpZiAoSVNfVjhfT1JfQ0hBS1JBX1NUQUNLICYmIHR5cGVvZiBzdGFjayA9PSAnc3RyaW5nJyAmJiAhJEVycm9yLnByZXBhcmVTdGFja1RyYWNlKSB7XG4gICAgd2hpbGUgKGRyb3BFbnRyaWVzLS0pIHN0YWNrID0gcmVwbGFjZShzdGFjaywgVjhfT1JfQ0hBS1JBX1NUQUNLX0VOVFJZLCAnJyk7XG4gIH0gcmV0dXJuIHN0YWNrO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoJ2EnKTtcbiAgaWYgKCEoJ3N0YWNrJyBpbiBlcnJvcikpIHJldHVybiB0cnVlO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVycm9yLCAnc3RhY2snLCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgNykpO1xuICByZXR1cm4gZXJyb3Iuc3RhY2sgIT09IDc7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGNsZWFyRXJyb3JTdGFjayA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lcnJvci1zdGFjay1jbGVhcicpO1xudmFyIEVSUk9SX1NUQUNLX0lOU1RBTExBQkxFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Vycm9yLXN0YWNrLWluc3RhbGxhYmxlJyk7XG5cbi8vIG5vbi1zdGFuZGFyZCBWOFxudmFyIGNhcHR1cmVTdGFja1RyYWNlID0gRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2U7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGVycm9yLCBDLCBzdGFjaywgZHJvcEVudHJpZXMpIHtcbiAgaWYgKEVSUk9SX1NUQUNLX0lOU1RBTExBQkxFKSB7XG4gICAgaWYgKGNhcHR1cmVTdGFja1RyYWNlKSBjYXB0dXJlU3RhY2tUcmFjZShlcnJvciwgQyk7XG4gICAgZWxzZSBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoZXJyb3IsICdzdGFjaycsIGNsZWFyRXJyb3JTdGFjayhzdGFjaywgZHJvcEVudHJpZXMpKTtcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBpc1Byb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YnKTtcbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qtc2V0LXByb3RvdHlwZS1vZicpO1xudmFyIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzJyk7XG52YXIgcHJveHlBY2Nlc3NvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wcm94eS1hY2Nlc3NvcicpO1xudmFyIGluaGVyaXRJZlJlcXVpcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luaGVyaXQtaWYtcmVxdWlyZWQnKTtcbnZhciBub3JtYWxpemVTdHJpbmdBcmd1bWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9ub3JtYWxpemUtc3RyaW5nLWFyZ3VtZW50Jyk7XG52YXIgaW5zdGFsbEVycm9yQ2F1c2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5zdGFsbC1lcnJvci1jYXVzZScpO1xudmFyIGluc3RhbGxFcnJvclN0YWNrID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Vycm9yLXN0YWNrLWluc3RhbGwnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChGVUxMX05BTUUsIHdyYXBwZXIsIEZPUkNFRCwgSVNfQUdHUkVHQVRFX0VSUk9SKSB7XG4gIHZhciBTVEFDS19UUkFDRV9MSU1JVCA9ICdzdGFja1RyYWNlTGltaXQnO1xuICB2YXIgT1BUSU9OU19QT1NJVElPTiA9IElTX0FHR1JFR0FURV9FUlJPUiA/IDIgOiAxO1xuICB2YXIgcGF0aCA9IEZVTExfTkFNRS5zcGxpdCgnLicpO1xuICB2YXIgRVJST1JfTkFNRSA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXTtcbiAgdmFyIE9yaWdpbmFsRXJyb3IgPSBnZXRCdWlsdEluLmFwcGx5KG51bGwsIHBhdGgpO1xuXG4gIGlmICghT3JpZ2luYWxFcnJvcikgcmV0dXJuO1xuXG4gIHZhciBPcmlnaW5hbEVycm9yUHJvdG90eXBlID0gT3JpZ2luYWxFcnJvci5wcm90b3R5cGU7XG5cbiAgLy8gVjggOS4zLSBidWcgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MTIwMDZcbiAgaWYgKCFJU19QVVJFICYmIGhhc093bihPcmlnaW5hbEVycm9yUHJvdG90eXBlLCAnY2F1c2UnKSkgZGVsZXRlIE9yaWdpbmFsRXJyb3JQcm90b3R5cGUuY2F1c2U7XG5cbiAgaWYgKCFGT1JDRUQpIHJldHVybiBPcmlnaW5hbEVycm9yO1xuXG4gIHZhciBCYXNlRXJyb3IgPSBnZXRCdWlsdEluKCdFcnJvcicpO1xuXG4gIHZhciBXcmFwcGVkRXJyb3IgPSB3cmFwcGVyKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgdmFyIG1lc3NhZ2UgPSBub3JtYWxpemVTdHJpbmdBcmd1bWVudChJU19BR0dSRUdBVEVfRVJST1IgPyBiIDogYSwgdW5kZWZpbmVkKTtcbiAgICB2YXIgcmVzdWx0ID0gSVNfQUdHUkVHQVRFX0VSUk9SID8gbmV3IE9yaWdpbmFsRXJyb3IoYSkgOiBuZXcgT3JpZ2luYWxFcnJvcigpO1xuICAgIGlmIChtZXNzYWdlICE9PSB1bmRlZmluZWQpIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShyZXN1bHQsICdtZXNzYWdlJywgbWVzc2FnZSk7XG4gICAgaW5zdGFsbEVycm9yU3RhY2socmVzdWx0LCBXcmFwcGVkRXJyb3IsIHJlc3VsdC5zdGFjaywgMik7XG4gICAgaWYgKHRoaXMgJiYgaXNQcm90b3R5cGVPZihPcmlnaW5hbEVycm9yUHJvdG90eXBlLCB0aGlzKSkgaW5oZXJpdElmUmVxdWlyZWQocmVzdWx0LCB0aGlzLCBXcmFwcGVkRXJyb3IpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gT1BUSU9OU19QT1NJVElPTikgaW5zdGFsbEVycm9yQ2F1c2UocmVzdWx0LCBhcmd1bWVudHNbT1BUSU9OU19QT1NJVElPTl0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH0pO1xuXG4gIFdyYXBwZWRFcnJvci5wcm90b3R5cGUgPSBPcmlnaW5hbEVycm9yUHJvdG90eXBlO1xuXG4gIGlmIChFUlJPUl9OQU1FICE9PSAnRXJyb3InKSB7XG4gICAgaWYgKHNldFByb3RvdHlwZU9mKSBzZXRQcm90b3R5cGVPZihXcmFwcGVkRXJyb3IsIEJhc2VFcnJvcik7XG4gICAgZWxzZSBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKFdyYXBwZWRFcnJvciwgQmFzZUVycm9yLCB7IG5hbWU6IHRydWUgfSk7XG4gIH0gZWxzZSBpZiAoREVTQ1JJUFRPUlMgJiYgU1RBQ0tfVFJBQ0VfTElNSVQgaW4gT3JpZ2luYWxFcnJvcikge1xuICAgIHByb3h5QWNjZXNzb3IoV3JhcHBlZEVycm9yLCBPcmlnaW5hbEVycm9yLCBTVEFDS19UUkFDRV9MSU1JVCk7XG4gICAgcHJveHlBY2Nlc3NvcihXcmFwcGVkRXJyb3IsIE9yaWdpbmFsRXJyb3IsICdwcmVwYXJlU3RhY2tUcmFjZScpO1xuICB9XG5cbiAgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyhXcmFwcGVkRXJyb3IsIE9yaWdpbmFsRXJyb3IpO1xuXG4gIGlmICghSVNfUFVSRSkgdHJ5IHtcbiAgICAvLyBTYWZhcmkgMTMtIGJ1ZzogV2ViQXNzZW1ibHkgZXJyb3JzIGRvZXMgbm90IGhhdmUgYSBwcm9wZXIgYC5uYW1lYFxuICAgIGlmIChPcmlnaW5hbEVycm9yUHJvdG90eXBlLm5hbWUgIT09IEVSUk9SX05BTUUpIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShPcmlnaW5hbEVycm9yUHJvdG90eXBlLCAnbmFtZScsIEVSUk9SX05BTUUpO1xuICAgIH1cbiAgICBPcmlnaW5hbEVycm9yUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gV3JhcHBlZEVycm9yO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG5cbiAgcmV0dXJuIFdyYXBwZWRFcnJvcjtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgLS0gcmVxdWlyZWQgZm9yIGZ1bmN0aW9ucyBgLmxlbmd0aGAgKi9cbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBhcHBseSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1hcHBseScpO1xudmFyIHdyYXBFcnJvckNvbnN0cnVjdG9yV2l0aENhdXNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dyYXAtZXJyb3ItY29uc3RydWN0b3Itd2l0aC1jYXVzZScpO1xuXG52YXIgV0VCX0FTU0VNQkxZID0gJ1dlYkFzc2VtYmx5JztcbnZhciBXZWJBc3NlbWJseSA9IGdsb2JhbFtXRUJfQVNTRU1CTFldO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZXJyb3ItY2F1c2UgLS0gZmVhdHVyZSBkZXRlY3Rpb25cbnZhciBGT1JDRUQgPSBuZXcgRXJyb3IoJ2UnLCB7IGNhdXNlOiA3IH0pLmNhdXNlICE9PSA3O1xuXG52YXIgZXhwb3J0R2xvYmFsRXJyb3JDYXVzZVdyYXBwZXIgPSBmdW5jdGlvbiAoRVJST1JfTkFNRSwgd3JhcHBlcikge1xuICB2YXIgTyA9IHt9O1xuICBPW0VSUk9SX05BTUVdID0gd3JhcEVycm9yQ29uc3RydWN0b3JXaXRoQ2F1c2UoRVJST1JfTkFNRSwgd3JhcHBlciwgRk9SQ0VEKTtcbiAgJCh7IGdsb2JhbDogdHJ1ZSwgY29uc3RydWN0b3I6IHRydWUsIGFyaXR5OiAxLCBmb3JjZWQ6IEZPUkNFRCB9LCBPKTtcbn07XG5cbnZhciBleHBvcnRXZWJBc3NlbWJseUVycm9yQ2F1c2VXcmFwcGVyID0gZnVuY3Rpb24gKEVSUk9SX05BTUUsIHdyYXBwZXIpIHtcbiAgaWYgKFdlYkFzc2VtYmx5ICYmIFdlYkFzc2VtYmx5W0VSUk9SX05BTUVdKSB7XG4gICAgdmFyIE8gPSB7fTtcbiAgICBPW0VSUk9SX05BTUVdID0gd3JhcEVycm9yQ29uc3RydWN0b3JXaXRoQ2F1c2UoV0VCX0FTU0VNQkxZICsgJy4nICsgRVJST1JfTkFNRSwgd3JhcHBlciwgRk9SQ0VEKTtcbiAgICAkKHsgdGFyZ2V0OiBXRUJfQVNTRU1CTFksIHN0YXQ6IHRydWUsIGNvbnN0cnVjdG9yOiB0cnVlLCBhcml0eTogMSwgZm9yY2VkOiBGT1JDRUQgfSwgTyk7XG4gIH1cbn07XG5cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbmF0aXZlZXJyb3JcbmV4cG9ydEdsb2JhbEVycm9yQ2F1c2VXcmFwcGVyKCdFcnJvcicsIGZ1bmN0aW9uIChpbml0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBFcnJvcihtZXNzYWdlKSB7IHJldHVybiBhcHBseShpbml0LCB0aGlzLCBhcmd1bWVudHMpOyB9O1xufSk7XG5leHBvcnRHbG9iYWxFcnJvckNhdXNlV3JhcHBlcignRXZhbEVycm9yJywgZnVuY3Rpb24gKGluaXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIEV2YWxFcnJvcihtZXNzYWdlKSB7IHJldHVybiBhcHBseShpbml0LCB0aGlzLCBhcmd1bWVudHMpOyB9O1xufSk7XG5leHBvcnRHbG9iYWxFcnJvckNhdXNlV3JhcHBlcignUmFuZ2VFcnJvcicsIGZ1bmN0aW9uIChpbml0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBSYW5nZUVycm9yKG1lc3NhZ2UpIHsgcmV0dXJuIGFwcGx5KGluaXQsIHRoaXMsIGFyZ3VtZW50cyk7IH07XG59KTtcbmV4cG9ydEdsb2JhbEVycm9yQ2F1c2VXcmFwcGVyKCdSZWZlcmVuY2VFcnJvcicsIGZ1bmN0aW9uIChpbml0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBSZWZlcmVuY2VFcnJvcihtZXNzYWdlKSB7IHJldHVybiBhcHBseShpbml0LCB0aGlzLCBhcmd1bWVudHMpOyB9O1xufSk7XG5leHBvcnRHbG9iYWxFcnJvckNhdXNlV3JhcHBlcignU3ludGF4RXJyb3InLCBmdW5jdGlvbiAoaW5pdCkge1xuICByZXR1cm4gZnVuY3Rpb24gU3ludGF4RXJyb3IobWVzc2FnZSkgeyByZXR1cm4gYXBwbHkoaW5pdCwgdGhpcywgYXJndW1lbnRzKTsgfTtcbn0pO1xuZXhwb3J0R2xvYmFsRXJyb3JDYXVzZVdyYXBwZXIoJ1R5cGVFcnJvcicsIGZ1bmN0aW9uIChpbml0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBUeXBlRXJyb3IobWVzc2FnZSkgeyByZXR1cm4gYXBwbHkoaW5pdCwgdGhpcywgYXJndW1lbnRzKTsgfTtcbn0pO1xuZXhwb3J0R2xvYmFsRXJyb3JDYXVzZVdyYXBwZXIoJ1VSSUVycm9yJywgZnVuY3Rpb24gKGluaXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIFVSSUVycm9yKG1lc3NhZ2UpIHsgcmV0dXJuIGFwcGx5KGluaXQsIHRoaXMsIGFyZ3VtZW50cyk7IH07XG59KTtcbmV4cG9ydFdlYkFzc2VtYmx5RXJyb3JDYXVzZVdyYXBwZXIoJ0NvbXBpbGVFcnJvcicsIGZ1bmN0aW9uIChpbml0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBDb21waWxlRXJyb3IobWVzc2FnZSkgeyByZXR1cm4gYXBwbHkoaW5pdCwgdGhpcywgYXJndW1lbnRzKTsgfTtcbn0pO1xuZXhwb3J0V2ViQXNzZW1ibHlFcnJvckNhdXNlV3JhcHBlcignTGlua0Vycm9yJywgZnVuY3Rpb24gKGluaXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIExpbmtFcnJvcihtZXNzYWdlKSB7IHJldHVybiBhcHBseShpbml0LCB0aGlzLCBhcmd1bWVudHMpOyB9O1xufSk7XG5leHBvcnRXZWJBc3NlbWJseUVycm9yQ2F1c2VXcmFwcGVyKCdSdW50aW1lRXJyb3InLCBmdW5jdGlvbiAoaW5pdCkge1xuICByZXR1cm4gZnVuY3Rpb24gUnVudGltZUVycm9yKG1lc3NhZ2UpIHsgcmV0dXJuIGFwcGx5KGluaXQsIHRoaXMsIGFyZ3VtZW50cyk7IH07XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIG5vcm1hbGl6ZVN0cmluZ0FyZ3VtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25vcm1hbGl6ZS1zdHJpbmctYXJndW1lbnQnKTtcblxudmFyIG5hdGl2ZUVycm9yVG9TdHJpbmcgPSBFcnJvci5wcm90b3R5cGUudG9TdHJpbmc7XG5cbnZhciBJTkNPUlJFQ1RfVE9fU1RSSU5HID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICBpZiAoREVTQ1JJUFRPUlMpIHtcbiAgICAvLyBDaHJvbWUgMzItIGluY29ycmVjdGx5IGNhbGwgYWNjZXNzb3JcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWNyZWF0ZSwgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbiAgICB2YXIgb2JqZWN0ID0gT2JqZWN0LmNyZWF0ZShPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICduYW1lJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzID09PSBvYmplY3Q7XG4gICAgfSB9KSk7XG4gICAgaWYgKG5hdGl2ZUVycm9yVG9TdHJpbmcuY2FsbChvYmplY3QpICE9PSAndHJ1ZScpIHJldHVybiB0cnVlO1xuICB9XG4gIC8vIEZGMTAtIGRvZXMgbm90IHByb3Blcmx5IGhhbmRsZSBub24tc3RyaW5nc1xuICByZXR1cm4gbmF0aXZlRXJyb3JUb1N0cmluZy5jYWxsKHsgbWVzc2FnZTogMSwgbmFtZTogMiB9KSAhPT0gJzI6IDEnXG4gICAgLy8gSUU4IGRvZXMgbm90IHByb3Blcmx5IGhhbmRsZSBkZWZhdWx0c1xuICAgIHx8IG5hdGl2ZUVycm9yVG9TdHJpbmcuY2FsbCh7fSkgIT09ICdFcnJvcic7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBJTkNPUlJFQ1RfVE9fU1RSSU5HID8gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHZhciBPID0gYW5PYmplY3QodGhpcyk7XG4gIHZhciBuYW1lID0gbm9ybWFsaXplU3RyaW5nQXJndW1lbnQoTy5uYW1lLCAnRXJyb3InKTtcbiAgdmFyIG1lc3NhZ2UgPSBub3JtYWxpemVTdHJpbmdBcmd1bWVudChPLm1lc3NhZ2UpO1xuICByZXR1cm4gIW5hbWUgPyBtZXNzYWdlIDogIW1lc3NhZ2UgPyBuYW1lIDogbmFtZSArICc6ICcgKyBtZXNzYWdlO1xufSA6IG5hdGl2ZUVycm9yVG9TdHJpbmc7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluJyk7XG52YXIgZXJyb3JUb1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lcnJvci10by1zdHJpbmcnKTtcblxudmFyIEVycm9yUHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4vLyBgRXJyb3IucHJvdG90eXBlLnRvU3RyaW5nYCBtZXRob2QgZml4XG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWVycm9yLnByb3RvdHlwZS50b3N0cmluZ1xuaWYgKEVycm9yUHJvdG90eXBlLnRvU3RyaW5nICE9PSBlcnJvclRvU3RyaW5nKSB7XG4gIGRlZmluZUJ1aWx0SW4oRXJyb3JQcm90b3R5cGUsICd0b1N0cmluZycsIGVycm9yVG9TdHJpbmcpO1xufVxuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwga2luZCwgdmFsdWUpIHtcbiAgdmFyIGlubmVyUmVzdWx0LCBpbm5lckVycm9yO1xuICBhbk9iamVjdChpdGVyYXRvcik7XG4gIHRyeSB7XG4gICAgaW5uZXJSZXN1bHQgPSBnZXRNZXRob2QoaXRlcmF0b3IsICdyZXR1cm4nKTtcbiAgICBpZiAoIWlubmVyUmVzdWx0KSB7XG4gICAgICBpZiAoa2luZCA9PT0gJ3Rocm93JykgdGhyb3cgdmFsdWU7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGlubmVyUmVzdWx0ID0gY2FsbChpbm5lclJlc3VsdCwgaXRlcmF0b3IpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlubmVyRXJyb3IgPSB0cnVlO1xuICAgIGlubmVyUmVzdWx0ID0gZXJyb3I7XG4gIH1cbiAgaWYgKGtpbmQgPT09ICd0aHJvdycpIHRocm93IHZhbHVlO1xuICBpZiAoaW5uZXJFcnJvcikgdGhyb3cgaW5uZXJSZXN1bHQ7XG4gIGFuT2JqZWN0KGlubmVyUmVzdWx0KTtcbiAgcmV0dXJuIHZhbHVlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgaXRlcmF0b3JDbG9zZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1jbG9zZScpO1xuXG4vLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBFTlRSSUVTKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEVOVFJJRVMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCAndGhyb3cnLCBlcnJvcik7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycycpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgQXJyYXlQcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG5cbi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3Jcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG90eXBlW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBrZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtrZXldID0gdmFsdWU7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNOdWxsT3JVbmRlZmluZWQoaXQpKSByZXR1cm4gZ2V0TWV0aG9kKGl0LCBJVEVSQVRPUilcbiAgICB8fCBnZXRNZXRob2QoaXQsICdAQGl0ZXJhdG9yJylcbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0cnlUb1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90cnktdG8tc3RyaW5nJyk7XG52YXIgZ2V0SXRlcmF0b3JNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQsIHVzaW5nSXRlcmF0b3IpIHtcbiAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBnZXRJdGVyYXRvck1ldGhvZChhcmd1bWVudCkgOiB1c2luZ0l0ZXJhdG9yO1xuICBpZiAoYUNhbGxhYmxlKGl0ZXJhdG9yTWV0aG9kKSkgcmV0dXJuIGFuT2JqZWN0KGNhbGwoaXRlcmF0b3JNZXRob2QsIGFyZ3VtZW50KSk7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKHRyeVRvU3RyaW5nKGFyZ3VtZW50KSArICcgaXMgbm90IGl0ZXJhYmxlJyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIGNhbGxXaXRoU2FmZUl0ZXJhdGlvbkNsb3NpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2FsbC13aXRoLXNhZmUtaXRlcmF0aW9uLWNsb3NpbmcnKTtcbnZhciBpc0FycmF5SXRlcmF0b3JNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXktaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgaXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jb25zdHJ1Y3RvcicpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgZ2V0SXRlcmF0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yJyk7XG52YXIgZ2V0SXRlcmF0b3JNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuXG52YXIgJEFycmF5ID0gQXJyYXk7XG5cbi8vIGBBcnJheS5mcm9tYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkuZnJvbVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZSAvKiAsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkICovKSB7XG4gIHZhciBPID0gdG9PYmplY3QoYXJyYXlMaWtlKTtcbiAgdmFyIElTX0NPTlNUUlVDVE9SID0gaXNDb25zdHJ1Y3Rvcih0aGlzKTtcbiAgdmFyIGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBtYXBmbiA9IGFyZ3VtZW50c0xlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gIHZhciBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZDtcbiAgaWYgKG1hcHBpbmcpIG1hcGZuID0gYmluZChtYXBmbiwgYXJndW1lbnRzTGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZCk7XG4gIHZhciBpdGVyYXRvck1ldGhvZCA9IGdldEl0ZXJhdG9yTWV0aG9kKE8pO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yLCBuZXh0LCB2YWx1ZTtcbiAgLy8gaWYgdGhlIHRhcmdldCBpcyBub3QgaXRlcmFibGUgb3IgaXQncyBhbiBhcnJheSB3aXRoIHRoZSBkZWZhdWx0IGl0ZXJhdG9yIC0gdXNlIGEgc2ltcGxlIGNhc2VcbiAgaWYgKGl0ZXJhdG9yTWV0aG9kICYmICEodGhpcyA9PT0gJEFycmF5ICYmIGlzQXJyYXlJdGVyYXRvck1ldGhvZChpdGVyYXRvck1ldGhvZCkpKSB7XG4gICAgaXRlcmF0b3IgPSBnZXRJdGVyYXRvcihPLCBpdGVyYXRvck1ldGhvZCk7XG4gICAgbmV4dCA9IGl0ZXJhdG9yLm5leHQ7XG4gICAgcmVzdWx0ID0gSVNfQ09OU1RSVUNUT1IgPyBuZXcgdGhpcygpIDogW107XG4gICAgZm9yICg7IShzdGVwID0gY2FsbChuZXh0LCBpdGVyYXRvcikpLmRvbmU7IGluZGV4KyspIHtcbiAgICAgIHZhbHVlID0gbWFwcGluZyA/IGNhbGxXaXRoU2FmZUl0ZXJhdGlvbkNsb3NpbmcoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKSA6IHN0ZXAudmFsdWU7XG4gICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCB2YWx1ZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IGxlbmd0aE9mQXJyYXlMaWtlKE8pO1xuICAgIHJlc3VsdCA9IElTX0NPTlNUUlVDVE9SID8gbmV3IHRoaXMobGVuZ3RoKSA6ICRBcnJheShsZW5ndGgpO1xuICAgIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICB2YWx1ZSA9IG1hcHBpbmcgPyBtYXBmbihPW2luZGV4XSwgaW5kZXgpIDogT1tpbmRleF07XG4gICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCB2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciBjYWxsZWQgPSAwO1xuICB2YXIgaXRlcmF0b3JXaXRoUmV0dXJuID0ge1xuICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7IGRvbmU6ICEhY2FsbGVkKysgfTtcbiAgICB9LFxuICAgICdyZXR1cm4nOiBmdW5jdGlvbiAoKSB7XG4gICAgICBTQUZFX0NMT1NJTkcgPSB0cnVlO1xuICAgIH1cbiAgfTtcbiAgaXRlcmF0b3JXaXRoUmV0dXJuW0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LWZyb20sIG5vLXRocm93LWxpdGVyYWwgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgQXJyYXkuZnJvbShpdGVyYXRvcldpdGhSZXR1cm4sIGZ1bmN0aW9uICgpIHsgdGhyb3cgMjsgfSk7XG59IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMsIFNLSVBfQ0xPU0lORykge1xuICB0cnkge1xuICAgIGlmICghU0tJUF9DTE9TSU5HICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgcmV0dXJuIGZhbHNlOyB9IC8vIHdvcmthcm91bmQgb2Ygb2xkIFdlYktpdCArIGBldmFsYCBidWdcbiAgdmFyIElURVJBVElPTl9TVVBQT1JUID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIG9iamVjdCA9IHt9O1xuICAgIG9iamVjdFtJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHsgZG9uZTogSVRFUkFUSU9OX1NVUFBPUlQgPSB0cnVlIH07XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcbiAgICBleGVjKG9iamVjdCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIElURVJBVElPTl9TVVBQT1JUO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmcm9tID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZyb20nKTtcbnZhciBjaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2hlY2stY29ycmVjdG5lc3Mtb2YtaXRlcmF0aW9uJyk7XG5cbnZhciBJTkNPUlJFQ1RfSVRFUkFUSU9OID0gIWNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbihmdW5jdGlvbiAoaXRlcmFibGUpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LWZyb20gLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgQXJyYXkuZnJvbShpdGVyYWJsZSk7XG59KTtcblxuLy8gYEFycmF5LmZyb21gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5mcm9tXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IElOQ09SUkVDVF9JVEVSQVRJT04gfSwge1xuICBmcm9tOiBmcm9tXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1jcmVhdGUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcblxudmFyIFVOU0NPUEFCTEVTID0gd2VsbEtub3duU3ltYm9sKCd1bnNjb3BhYmxlcycpO1xudmFyIEFycmF5UHJvdG90eXBlID0gQXJyYXkucHJvdG90eXBlO1xuXG4vLyBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcbmlmIChBcnJheVByb3RvdHlwZVtVTlNDT1BBQkxFU10gPT09IHVuZGVmaW5lZCkge1xuICBkZWZpbmVQcm9wZXJ0eShBcnJheVByb3RvdHlwZSwgVU5TQ09QQUJMRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgdmFsdWU6IGNyZWF0ZShudWxsKVxuICB9KTtcbn1cblxuLy8gYWRkIGEga2V5IHRvIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIEFycmF5UHJvdG90eXBlW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRigpIHsgLyogZW1wdHkgKi8gfVxuICBGLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IG51bGw7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0cHJvdG90eXBlb2YgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZihuZXcgRigpKSAhPT0gRi5wcm90b3R5cGU7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBDT1JSRUNUX1BST1RPVFlQRV9HRVRURVIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29ycmVjdC1wcm90b3R5cGUtZ2V0dGVyJyk7XG5cbnZhciBJRV9QUk9UTyA9IHNoYXJlZEtleSgnSUVfUFJPVE8nKTtcbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xudmFyIE9iamVjdFByb3RvdHlwZSA9ICRPYmplY3QucHJvdG90eXBlO1xuXG4vLyBgT2JqZWN0LmdldFByb3RvdHlwZU9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldHByb3RvdHlwZW9mXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldHByb3RvdHlwZW9mIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gQ09SUkVDVF9QUk9UT1RZUEVfR0VUVEVSID8gJE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIChPKSB7XG4gIHZhciBvYmplY3QgPSB0b09iamVjdChPKTtcbiAgaWYgKGhhc093bihvYmplY3QsIElFX1BST1RPKSkgcmV0dXJuIG9iamVjdFtJRV9QUk9UT107XG4gIHZhciBjb25zdHJ1Y3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcjtcbiAgaWYgKGlzQ2FsbGFibGUoY29uc3RydWN0b3IpICYmIG9iamVjdCBpbnN0YW5jZW9mIGNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gb2JqZWN0IGluc3RhbmNlb2YgJE9iamVjdCA/IE9iamVjdFByb3RvdHlwZSA6IG51bGw7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZScpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4nKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgPSBmYWxzZTtcblxuLy8gYCVJdGVyYXRvclByb3RvdHlwZSVgIG9iamVjdFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy0laXRlcmF0b3Jwcm90b3R5cGUlLW9iamVjdFxudmFyIEl0ZXJhdG9yUHJvdG90eXBlLCBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUsIGFycmF5SXRlcmF0b3I7XG5cbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLWFycmF5LXByb3RvdHlwZS1rZXlzIC0tIHNhZmUgKi9cbmlmIChbXS5rZXlzKSB7XG4gIGFycmF5SXRlcmF0b3IgPSBbXS5rZXlzKCk7XG4gIC8vIFNhZmFyaSA4IGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICBpZiAoISgnbmV4dCcgaW4gYXJyYXlJdGVyYXRvcikpIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgPSB0cnVlO1xuICBlbHNlIHtcbiAgICBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZihnZXRQcm90b3R5cGVPZihhcnJheUl0ZXJhdG9yKSk7XG4gICAgaWYgKFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSkgSXRlcmF0b3JQcm90b3R5cGUgPSBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cbn1cblxudmFyIE5FV19JVEVSQVRPUl9QUk9UT1RZUEUgPSAhaXNPYmplY3QoSXRlcmF0b3JQcm90b3R5cGUpIHx8IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRlc3QgPSB7fTtcbiAgLy8gRkY0NC0gbGVnYWN5IGl0ZXJhdG9ycyBjYXNlXG4gIHJldHVybiBJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0uY2FsbCh0ZXN0KSAhPT0gdGVzdDtcbn0pO1xuXG5pZiAoTkVXX0lURVJBVE9SX1BST1RPVFlQRSkgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbmVsc2UgaWYgKElTX1BVUkUpIEl0ZXJhdG9yUHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcblxuLy8gYCVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSVpdGVyYXRvcnByb3RvdHlwZSUtQEBpdGVyYXRvclxuaWYgKCFpc0NhbGxhYmxlKEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXSkpIHtcbiAgZGVmaW5lQnVpbHRJbihJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBJdGVyYXRvclByb3RvdHlwZTogSXRlcmF0b3JQcm90b3R5cGUsXG4gIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlM6IEJVR0dZX1NBRkFSSV9JVEVSQVRPUlNcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycy1jb3JlJykuSXRlcmF0b3JQcm90b3R5cGU7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1jcmVhdGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJdGVyYXRvckNvbnN0cnVjdG9yLCBOQU1FLCBuZXh0LCBFTlVNRVJBQkxFX05FWFQpIHtcbiAgdmFyIFRPX1NUUklOR19UQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIEl0ZXJhdG9yQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigrIUVOVU1FUkFCTEVfTkVYVCwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yQ29uc3RydWN0b3IsIFRPX1NUUklOR19UQUcsIGZhbHNlLCB0cnVlKTtcbiAgSXRlcmF0b3JzW1RPX1NUUklOR19UQUddID0gcmV0dXJuVGhpcztcbiAgcmV0dXJuIEl0ZXJhdG9yQ29uc3RydWN0b3I7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIEZ1bmN0aW9uTmFtZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1uYW1lJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGNyZWF0ZUl0ZXJhdG9yQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3ItY3JlYXRlLWNvbnN0cnVjdG9yJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YnKTtcbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qtc2V0LXByb3RvdHlwZS1vZicpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycycpO1xudmFyIEl0ZXJhdG9yc0NvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzLWNvcmUnKTtcblxudmFyIFBST1BFUl9GVU5DVElPTl9OQU1FID0gRnVuY3Rpb25OYW1lLlBST1BFUjtcbnZhciBDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSA9IEZ1bmN0aW9uTmFtZS5DT05GSUdVUkFCTEU7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSBJdGVyYXRvcnNDb3JlLkl0ZXJhdG9yUHJvdG90eXBlO1xudmFyIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgPSBJdGVyYXRvcnNDb3JlLkJVR0dZX1NBRkFSSV9JVEVSQVRPUlM7XG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcbnZhciBFTlRSSUVTID0gJ2VudHJpZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEl0ZXJhYmxlLCBOQU1FLCBJdGVyYXRvckNvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICBjcmVhdGVJdGVyYXRvckNvbnN0cnVjdG9yKEl0ZXJhdG9yQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuXG4gIHZhciBnZXRJdGVyYXRpb25NZXRob2QgPSBmdW5jdGlvbiAoS0lORCkge1xuICAgIGlmIChLSU5EID09PSBERUZBVUxUICYmIGRlZmF1bHRJdGVyYXRvcikgcmV0dXJuIGRlZmF1bHRJdGVyYXRvcjtcbiAgICBpZiAoIUJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgJiYgS0lORCAmJiBLSU5EIGluIEl0ZXJhYmxlUHJvdG90eXBlKSByZXR1cm4gSXRlcmFibGVQcm90b3R5cGVbS0lORF07XG5cbiAgICBzd2l0Y2ggKEtJTkQpIHtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgSXRlcmF0b3JDb25zdHJ1Y3Rvcih0aGlzLCBLSU5EKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IEl0ZXJhdG9yQ29uc3RydWN0b3IodGhpcywgS0lORCk7IH07XG4gICAgICBjYXNlIEVOVFJJRVM6IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IEl0ZXJhdG9yQ29uc3RydWN0b3IodGhpcywgS0lORCk7IH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBJdGVyYXRvckNvbnN0cnVjdG9yKHRoaXMpOyB9O1xuICB9O1xuXG4gIHZhciBUT19TVFJJTkdfVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgSU5DT1JSRUNUX1ZBTFVFU19OQU1FID0gZmFsc2U7XG4gIHZhciBJdGVyYWJsZVByb3RvdHlwZSA9IEl0ZXJhYmxlLnByb3RvdHlwZTtcbiAgdmFyIG5hdGl2ZUl0ZXJhdG9yID0gSXRlcmFibGVQcm90b3R5cGVbSVRFUkFUT1JdXG4gICAgfHwgSXRlcmFibGVQcm90b3R5cGVbJ0BAaXRlcmF0b3InXVxuICAgIHx8IERFRkFVTFQgJiYgSXRlcmFibGVQcm90b3R5cGVbREVGQVVMVF07XG4gIHZhciBkZWZhdWx0SXRlcmF0b3IgPSAhQlVHR1lfU0FGQVJJX0lURVJBVE9SUyAmJiBuYXRpdmVJdGVyYXRvciB8fCBnZXRJdGVyYXRpb25NZXRob2QoREVGQVVMVCk7XG4gIHZhciBhbnlOYXRpdmVJdGVyYXRvciA9IE5BTUUgPT09ICdBcnJheScgPyBJdGVyYWJsZVByb3RvdHlwZS5lbnRyaWVzIHx8IG5hdGl2ZUl0ZXJhdG9yIDogbmF0aXZlSXRlcmF0b3I7XG4gIHZhciBDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUsIG1ldGhvZHMsIEtFWTtcblxuICAvLyBmaXggbmF0aXZlXG4gIGlmIChhbnlOYXRpdmVJdGVyYXRvcikge1xuICAgIEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKGFueU5hdGl2ZUl0ZXJhdG9yLmNhbGwobmV3IEl0ZXJhYmxlKCkpKTtcbiAgICBpZiAoQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG4gICAgICBpZiAoIUlTX1BVUkUgJiYgZ2V0UHJvdG90eXBlT2YoQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlKSAhPT0gSXRlcmF0b3JQcm90b3R5cGUpIHtcbiAgICAgICAgaWYgKHNldFByb3RvdHlwZU9mKSB7XG4gICAgICAgICAgc2V0UHJvdG90eXBlT2YoQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlLCBJdGVyYXRvclByb3RvdHlwZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIWlzQ2FsbGFibGUoQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXSkpIHtcbiAgICAgICAgICBkZWZpbmVCdWlsdEluKEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUsIFRPX1NUUklOR19UQUcsIHRydWUsIHRydWUpO1xuICAgICAgaWYgKElTX1BVUkUpIEl0ZXJhdG9yc1tUT19TVFJJTkdfVEFHXSA9IHJldHVyblRoaXM7XG4gICAgfVxuICB9XG5cbiAgLy8gZml4IEFycmF5LnByb3RvdHlwZS57IHZhbHVlcywgQEBpdGVyYXRvciB9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoUFJPUEVSX0ZVTkNUSU9OX05BTUUgJiYgREVGQVVMVCA9PT0gVkFMVUVTICYmIG5hdGl2ZUl0ZXJhdG9yICYmIG5hdGl2ZUl0ZXJhdG9yLm5hbWUgIT09IFZBTFVFUykge1xuICAgIGlmICghSVNfUFVSRSAmJiBDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KEl0ZXJhYmxlUHJvdG90eXBlLCAnbmFtZScsIFZBTFVFUyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIElOQ09SUkVDVF9WQUxVRVNfTkFNRSA9IHRydWU7XG4gICAgICBkZWZhdWx0SXRlcmF0b3IgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBjYWxsKG5hdGl2ZUl0ZXJhdG9yLCB0aGlzKTsgfTtcbiAgICB9XG4gIH1cblxuICAvLyBleHBvcnQgYWRkaXRpb25hbCBtZXRob2RzXG4gIGlmIChERUZBVUxUKSB7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogZ2V0SXRlcmF0aW9uTWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiBJU19TRVQgPyBkZWZhdWx0SXRlcmF0b3IgOiBnZXRJdGVyYXRpb25NZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiBnZXRJdGVyYXRpb25NZXRob2QoRU5UUklFUylcbiAgICB9O1xuICAgIGlmIChGT1JDRUQpIGZvciAoS0VZIGluIG1ldGhvZHMpIHtcbiAgICAgIGlmIChCVUdHWV9TQUZBUklfSVRFUkFUT1JTIHx8IElOQ09SUkVDVF9WQUxVRVNfTkFNRSB8fCAhKEtFWSBpbiBJdGVyYWJsZVByb3RvdHlwZSkpIHtcbiAgICAgICAgZGVmaW5lQnVpbHRJbihJdGVyYWJsZVByb3RvdHlwZSwgS0VZLCBtZXRob2RzW0tFWV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSAkKHsgdGFyZ2V0OiBOQU1FLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBCVUdHWV9TQUZBUklfSVRFUkFUT1JTIHx8IElOQ09SUkVDVF9WQUxVRVNfTkFNRSB9LCBtZXRob2RzKTtcbiAgfVxuXG4gIC8vIGRlZmluZSBpdGVyYXRvclxuICBpZiAoKCFJU19QVVJFIHx8IEZPUkNFRCkgJiYgSXRlcmFibGVQcm90b3R5cGVbSVRFUkFUT1JdICE9PSBkZWZhdWx0SXRlcmF0b3IpIHtcbiAgICBkZWZpbmVCdWlsdEluKEl0ZXJhYmxlUHJvdG90eXBlLCBJVEVSQVRPUiwgZGVmYXVsdEl0ZXJhdG9yLCB7IG5hbWU6IERFRkFVTFQgfSk7XG4gIH1cbiAgSXRlcmF0b3JzW05BTUVdID0gZGVmYXVsdEl0ZXJhdG9yO1xuXG4gIHJldHVybiBtZXRob2RzO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBgQ3JlYXRlSXRlclJlc3VsdE9iamVjdGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWNyZWF0ZWl0ZXJyZXN1bHRvYmplY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlLCBkb25lKSB7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogZG9uZSB9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xudmFyIGRlZmluZUl0ZXJhdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWRlZmluZScpO1xudmFyIGNyZWF0ZUl0ZXJSZXN1bHRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLWl0ZXItcmVzdWx0LW9iamVjdCcpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG5cbnZhciBBUlJBWV9JVEVSQVRPUiA9ICdBcnJheSBJdGVyYXRvcic7XG52YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuc2V0O1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldHRlckZvcihBUlJBWV9JVEVSQVRPUik7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZW50cmllc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5lbnRyaWVzXG4vLyBgQXJyYXkucHJvdG90eXBlLmtleXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUua2V5c1xuLy8gYEFycmF5LnByb3RvdHlwZS52YWx1ZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUudmFsdWVzXG4vLyBgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAaXRlcmF0b3Jcbi8vIGBDcmVhdGVBcnJheUl0ZXJhdG9yYCBpbnRlcm5hbCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtY3JlYXRlYXJyYXlpdGVyYXRvclxubW9kdWxlLmV4cG9ydHMgPSBkZWZpbmVJdGVyYXRvcihBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gIHNldEludGVybmFsU3RhdGUodGhpcywge1xuICAgIHR5cGU6IEFSUkFZX0lURVJBVE9SLFxuICAgIHRhcmdldDogdG9JbmRleGVkT2JqZWN0KGl0ZXJhdGVkKSwgLy8gdGFyZ2V0XG4gICAgaW5kZXg6IDAsICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gICAga2luZDoga2luZCAgICAgICAgICAgICAgICAgICAgICAgICAvLyBraW5kXG4gIH0pO1xuLy8gYCVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtJWFycmF5aXRlcmF0b3Jwcm90b3R5cGUlLm5leHRcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKTtcbiAgdmFyIHRhcmdldCA9IHN0YXRlLnRhcmdldDtcbiAgdmFyIGluZGV4ID0gc3RhdGUuaW5kZXgrKztcbiAgaWYgKCF0YXJnZXQgfHwgaW5kZXggPj0gdGFyZ2V0Lmxlbmd0aCkge1xuICAgIHN0YXRlLnRhcmdldCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gY3JlYXRlSXRlclJlc3VsdE9iamVjdCh1bmRlZmluZWQsIHRydWUpO1xuICB9XG4gIHN3aXRjaCAoc3RhdGUua2luZCkge1xuICAgIGNhc2UgJ2tleXMnOiByZXR1cm4gY3JlYXRlSXRlclJlc3VsdE9iamVjdChpbmRleCwgZmFsc2UpO1xuICAgIGNhc2UgJ3ZhbHVlcyc6IHJldHVybiBjcmVhdGVJdGVyUmVzdWx0T2JqZWN0KHRhcmdldFtpbmRleF0sIGZhbHNlKTtcbiAgfSByZXR1cm4gY3JlYXRlSXRlclJlc3VsdE9iamVjdChbaW5kZXgsIHRhcmdldFtpbmRleF1dLCBmYWxzZSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJVxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1jcmVhdGV1bm1hcHBlZGFyZ3VtZW50c29iamVjdFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1jcmVhdGVtYXBwZWRhcmd1bWVudHNvYmplY3RcbnZhciB2YWx1ZXMgPSBJdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcblxuLy8gVjggfiBDaHJvbWUgNDUtIGJ1Z1xuaWYgKCFJU19QVVJFICYmIERFU0NSSVBUT1JTICYmIHZhbHVlcy5uYW1lICE9PSAndmFsdWVzJykgdHJ5IHtcbiAgZGVmaW5lUHJvcGVydHkodmFsdWVzLCAnbmFtZScsIHsgdmFsdWU6ICd2YWx1ZXMnIH0pO1xufSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUpIHtcbiAgLy8gV2UgY2FuJ3QgdXNlIHRoaXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXG4gIC8vIGRlb3B0aW1pemF0aW9uIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NzdcbiAgcmV0dXJuIFY4X1ZFUlNJT04gPj0gNTEgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICB2YXIgY29uc3RydWN0b3IgPSBhcnJheS5jb25zdHJ1Y3RvciA9IHt9O1xuICAgIGNvbnN0cnVjdG9yW1NQRUNJRVNdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHsgZm9vOiAxIH07XG4gICAgfTtcbiAgICByZXR1cm4gYXJyYXlbTUVUSE9EX05BTUVdKEJvb2xlYW4pLmZvbyAhPT0gMTtcbiAgfSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciBpc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNvbnN0cnVjdG9yJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG52YXIgbmF0aXZlU2xpY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2xpY2UnKTtcblxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdzbGljZScpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xudmFyICRBcnJheSA9IEFycmF5O1xudmFyIG1heCA9IE1hdGgubWF4O1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnNsaWNlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnNsaWNlXG4vLyBmYWxsYmFjayBmb3Igbm90IGFycmF5LWxpa2UgRVMzIHN0cmluZ3MgYW5kIERPTSBvYmplY3RzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XG4gIHNsaWNlOiBmdW5jdGlvbiBzbGljZShzdGFydCwgZW5kKSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QodGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IGxlbmd0aE9mQXJyYXlMaWtlKE8pO1xuICAgIHZhciBrID0gdG9BYnNvbHV0ZUluZGV4KHN0YXJ0LCBsZW5ndGgpO1xuICAgIHZhciBmaW4gPSB0b0Fic29sdXRlSW5kZXgoZW5kID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiBlbmQsIGxlbmd0aCk7XG4gICAgLy8gaW5saW5lIGBBcnJheVNwZWNpZXNDcmVhdGVgIGZvciB1c2FnZSBuYXRpdmUgYEFycmF5I3NsaWNlYCB3aGVyZSBpdCdzIHBvc3NpYmxlXG4gICAgdmFyIENvbnN0cnVjdG9yLCByZXN1bHQsIG47XG4gICAgaWYgKGlzQXJyYXkoTykpIHtcbiAgICAgIENvbnN0cnVjdG9yID0gTy5jb25zdHJ1Y3RvcjtcbiAgICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG4gICAgICBpZiAoaXNDb25zdHJ1Y3RvcihDb25zdHJ1Y3RvcikgJiYgKENvbnN0cnVjdG9yID09PSAkQXJyYXkgfHwgaXNBcnJheShDb25zdHJ1Y3Rvci5wcm90b3R5cGUpKSkge1xuICAgICAgICBDb25zdHJ1Y3RvciA9IHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3QoQ29uc3RydWN0b3IpKSB7XG4gICAgICAgIENvbnN0cnVjdG9yID0gQ29uc3RydWN0b3JbU1BFQ0lFU107XG4gICAgICAgIGlmIChDb25zdHJ1Y3RvciA9PT0gbnVsbCkgQ29uc3RydWN0b3IgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBpZiAoQ29uc3RydWN0b3IgPT09ICRBcnJheSB8fCBDb25zdHJ1Y3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBuYXRpdmVTbGljZShPLCBrLCBmaW4pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQgPSBuZXcgKENvbnN0cnVjdG9yID09PSB1bmRlZmluZWQgPyAkQXJyYXkgOiBDb25zdHJ1Y3RvcikobWF4KGZpbiAtIGssIDApKTtcbiAgICBmb3IgKG4gPSAwOyBrIDwgZmluOyBrKyssIG4rKykgaWYgKGsgaW4gTykgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBuLCBPW2tdKTtcbiAgICByZXN1bHQubGVuZ3RoID0gbjtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgVE9fU1RSSU5HX1RBR19TVVBQT1JUID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZy10YWctc3VwcG9ydCcpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZicpO1xuXG4vLyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gVE9fU1RSSU5HX1RBR19TVVBQT1JUID8ge30udG9TdHJpbmcgOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdbb2JqZWN0ICcgKyBjbGFzc29mKHRoaXMpICsgJ10nO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgVE9fU1RSSU5HX1RBR19TVVBQT1JUID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZy10YWctc3VwcG9ydCcpO1xudmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXRvLXN0cmluZycpO1xuXG4vLyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmdcbmlmICghVE9fU1RSSU5HX1RBR19TVVBQT1JUKSB7XG4gIGRlZmluZUJ1aWx0SW4oT2JqZWN0LnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgdG9TdHJpbmcsIHsgdW5zYWZlOiB0cnVlIH0pO1xufVxuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcblxuLy8gYFJlZ0V4cC5wcm90b3R5cGUuZmxhZ3NgIGdldHRlciBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1nZXQtcmVnZXhwLnByb3RvdHlwZS5mbGFnc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB0aGF0ID0gYW5PYmplY3QodGhpcyk7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgaWYgKHRoYXQuaGFzSW5kaWNlcykgcmVzdWx0ICs9ICdkJztcbiAgaWYgKHRoYXQuZ2xvYmFsKSByZXN1bHQgKz0gJ2cnO1xuICBpZiAodGhhdC5pZ25vcmVDYXNlKSByZXN1bHQgKz0gJ2knO1xuICBpZiAodGhhdC5tdWx0aWxpbmUpIHJlc3VsdCArPSAnbSc7XG4gIGlmICh0aGF0LmRvdEFsbCkgcmVzdWx0ICs9ICdzJztcbiAgaWYgKHRoYXQudW5pY29kZSkgcmVzdWx0ICs9ICd1JztcbiAgaWYgKHRoYXQudW5pY29kZVNldHMpIHJlc3VsdCArPSAndic7XG4gIGlmICh0aGF0LnN0aWNreSkgcmVzdWx0ICs9ICd5JztcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG4vLyBiYWJlbC1taW5pZnkgYW5kIENsb3N1cmUgQ29tcGlsZXIgdHJhbnNwaWxlcyBSZWdFeHAoJ2EnLCAneScpIC0+IC9hL3kgYW5kIGl0IGNhdXNlcyBTeW50YXhFcnJvclxudmFyICRSZWdFeHAgPSBnbG9iYWwuUmVnRXhwO1xuXG52YXIgVU5TVVBQT1JURURfWSA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHJlID0gJFJlZ0V4cCgnYScsICd5Jyk7XG4gIHJlLmxhc3RJbmRleCA9IDI7XG4gIHJldHVybiByZS5leGVjKCdhYmNkJykgIT09IG51bGw7XG59KTtcblxuLy8gVUMgQnJvd3NlciBidWdcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xMDA4XG52YXIgTUlTU0VEX1NUSUNLWSA9IFVOU1VQUE9SVEVEX1kgfHwgZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gISRSZWdFeHAoJ2EnLCAneScpLnN0aWNreTtcbn0pO1xuXG52YXIgQlJPS0VOX0NBUkVUID0gVU5TVVBQT1JURURfWSB8fCBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTc3MzY4N1xuICB2YXIgcmUgPSAkUmVnRXhwKCdecicsICdneScpO1xuICByZS5sYXN0SW5kZXggPSAyO1xuICByZXR1cm4gcmUuZXhlYygnc3RyJykgIT09IG51bGw7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEJST0tFTl9DQVJFVDogQlJPS0VOX0NBUkVULFxuICBNSVNTRURfU1RJQ0tZOiBNSVNTRURfU1RJQ0tZLFxuICBVTlNVUFBPUlRFRF9ZOiBVTlNVUFBPUlRFRF9ZXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxuLy8gYmFiZWwtbWluaWZ5IGFuZCBDbG9zdXJlIENvbXBpbGVyIHRyYW5zcGlsZXMgUmVnRXhwKCcuJywgJ3MnKSAtPiAvLi9zIGFuZCBpdCBjYXVzZXMgU3ludGF4RXJyb3JcbnZhciAkUmVnRXhwID0gZ2xvYmFsLlJlZ0V4cDtcblxubW9kdWxlLmV4cG9ydHMgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciByZSA9ICRSZWdFeHAoJy4nLCAncycpO1xuICByZXR1cm4gIShyZS5kb3RBbGwgJiYgcmUudGVzdCgnXFxuJykgJiYgcmUuZmxhZ3MgPT09ICdzJyk7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbi8vIGJhYmVsLW1pbmlmeSBhbmQgQ2xvc3VyZSBDb21waWxlciB0cmFuc3BpbGVzIFJlZ0V4cCgnKD88YT5iKScsICdnJykgLT4gLyg/PGE+YikvZyBhbmQgaXQgY2F1c2VzIFN5bnRheEVycm9yXG52YXIgJFJlZ0V4cCA9IGdsb2JhbC5SZWdFeHA7XG5cbm1vZHVsZS5leHBvcnRzID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgcmUgPSAkUmVnRXhwKCcoPzxhPmIpJywgJ2cnKTtcbiAgcmV0dXJuIHJlLmV4ZWMoJ2InKS5ncm91cHMuYSAhPT0gJ2InIHx8XG4gICAgJ2InLnJlcGxhY2UocmUsICckPGE+YycpICE9PSAnYmMnO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgcmVnZXhwL25vLWVtcHR5LWNhcHR1cmluZy1ncm91cCwgcmVnZXhwL25vLWVtcHR5LWdyb3VwLCByZWdleHAvbm8tbGF6eS1lbmRzIC0tIHRlc3RpbmcgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlZ2V4cC9uby11c2VsZXNzLXF1YW50aWZpZXIgLS0gdGVzdGluZyAqL1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIHJlZ2V4cEZsYWdzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1mbGFncycpO1xudmFyIHN0aWNreUhlbHBlcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLXN0aWNreS1oZWxwZXJzJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpLmdldDtcbnZhciBVTlNVUFBPUlRFRF9ET1RfQUxMID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC11bnN1cHBvcnRlZC1kb3QtYWxsJyk7XG52YXIgVU5TVVBQT1JURURfTkNHID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC11bnN1cHBvcnRlZC1uY2cnKTtcblxudmFyIG5hdGl2ZVJlcGxhY2UgPSBzaGFyZWQoJ25hdGl2ZS1zdHJpbmctcmVwbGFjZScsIFN0cmluZy5wcm90b3R5cGUucmVwbGFjZSk7XG52YXIgbmF0aXZlRXhlYyA9IFJlZ0V4cC5wcm90b3R5cGUuZXhlYztcbnZhciBwYXRjaGVkRXhlYyA9IG5hdGl2ZUV4ZWM7XG52YXIgY2hhckF0ID0gdW5jdXJyeVRoaXMoJycuY2hhckF0KTtcbnZhciBpbmRleE9mID0gdW5jdXJyeVRoaXMoJycuaW5kZXhPZik7XG52YXIgcmVwbGFjZSA9IHVuY3VycnlUaGlzKCcnLnJlcGxhY2UpO1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xuXG52YXIgVVBEQVRFU19MQVNUX0lOREVYX1dST05HID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHJlMSA9IC9hLztcbiAgdmFyIHJlMiA9IC9iKi9nO1xuICBjYWxsKG5hdGl2ZUV4ZWMsIHJlMSwgJ2EnKTtcbiAgY2FsbChuYXRpdmVFeGVjLCByZTIsICdhJyk7XG4gIHJldHVybiByZTEubGFzdEluZGV4ICE9PSAwIHx8IHJlMi5sYXN0SW5kZXggIT09IDA7XG59KSgpO1xuXG52YXIgVU5TVVBQT1JURURfWSA9IHN0aWNreUhlbHBlcnMuQlJPS0VOX0NBUkVUO1xuXG4vLyBub25wYXJ0aWNpcGF0aW5nIGNhcHR1cmluZyBncm91cCwgY29waWVkIGZyb20gZXM1LXNoaW0ncyBTdHJpbmcjc3BsaXQgcGF0Y2guXG52YXIgTlBDR19JTkNMVURFRCA9IC8oKT8/Ly5leGVjKCcnKVsxXSAhPT0gdW5kZWZpbmVkO1xuXG52YXIgUEFUQ0ggPSBVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgfHwgTlBDR19JTkNMVURFRCB8fCBVTlNVUFBPUlRFRF9ZIHx8IFVOU1VQUE9SVEVEX0RPVF9BTEwgfHwgVU5TVVBQT1JURURfTkNHO1xuXG5pZiAoUEFUQ0gpIHtcbiAgcGF0Y2hlZEV4ZWMgPSBmdW5jdGlvbiBleGVjKHN0cmluZykge1xuICAgIHZhciByZSA9IHRoaXM7XG4gICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZShyZSk7XG4gICAgdmFyIHN0ciA9IHRvU3RyaW5nKHN0cmluZyk7XG4gICAgdmFyIHJhdyA9IHN0YXRlLnJhdztcbiAgICB2YXIgcmVzdWx0LCByZUNvcHksIGxhc3RJbmRleCwgbWF0Y2gsIGksIG9iamVjdCwgZ3JvdXA7XG5cbiAgICBpZiAocmF3KSB7XG4gICAgICByYXcubGFzdEluZGV4ID0gcmUubGFzdEluZGV4O1xuICAgICAgcmVzdWx0ID0gY2FsbChwYXRjaGVkRXhlYywgcmF3LCBzdHIpO1xuICAgICAgcmUubGFzdEluZGV4ID0gcmF3Lmxhc3RJbmRleDtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgdmFyIGdyb3VwcyA9IHN0YXRlLmdyb3VwcztcbiAgICB2YXIgc3RpY2t5ID0gVU5TVVBQT1JURURfWSAmJiByZS5zdGlja3k7XG4gICAgdmFyIGZsYWdzID0gY2FsbChyZWdleHBGbGFncywgcmUpO1xuICAgIHZhciBzb3VyY2UgPSByZS5zb3VyY2U7XG4gICAgdmFyIGNoYXJzQWRkZWQgPSAwO1xuICAgIHZhciBzdHJDb3B5ID0gc3RyO1xuXG4gICAgaWYgKHN0aWNreSkge1xuICAgICAgZmxhZ3MgPSByZXBsYWNlKGZsYWdzLCAneScsICcnKTtcbiAgICAgIGlmIChpbmRleE9mKGZsYWdzLCAnZycpID09PSAtMSkge1xuICAgICAgICBmbGFncyArPSAnZyc7XG4gICAgICB9XG5cbiAgICAgIHN0ckNvcHkgPSBzdHJpbmdTbGljZShzdHIsIHJlLmxhc3RJbmRleCk7XG4gICAgICAvLyBTdXBwb3J0IGFuY2hvcmVkIHN0aWNreSBiZWhhdmlvci5cbiAgICAgIGlmIChyZS5sYXN0SW5kZXggPiAwICYmICghcmUubXVsdGlsaW5lIHx8IHJlLm11bHRpbGluZSAmJiBjaGFyQXQoc3RyLCByZS5sYXN0SW5kZXggLSAxKSAhPT0gJ1xcbicpKSB7XG4gICAgICAgIHNvdXJjZSA9ICcoPzogJyArIHNvdXJjZSArICcpJztcbiAgICAgICAgc3RyQ29weSA9ICcgJyArIHN0ckNvcHk7XG4gICAgICAgIGNoYXJzQWRkZWQrKztcbiAgICAgIH1cbiAgICAgIC8vIF4oPyArIHJ4ICsgKSBpcyBuZWVkZWQsIGluIGNvbWJpbmF0aW9uIHdpdGggc29tZSBzdHIgc2xpY2luZywgdG9cbiAgICAgIC8vIHNpbXVsYXRlIHRoZSAneScgZmxhZy5cbiAgICAgIHJlQ29weSA9IG5ldyBSZWdFeHAoJ14oPzonICsgc291cmNlICsgJyknLCBmbGFncyk7XG4gICAgfVxuXG4gICAgaWYgKE5QQ0dfSU5DTFVERUQpIHtcbiAgICAgIHJlQ29weSA9IG5ldyBSZWdFeHAoJ14nICsgc291cmNlICsgJyQoPyFcXFxccyknLCBmbGFncyk7XG4gICAgfVxuICAgIGlmIChVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcpIGxhc3RJbmRleCA9IHJlLmxhc3RJbmRleDtcblxuICAgIG1hdGNoID0gY2FsbChuYXRpdmVFeGVjLCBzdGlja3kgPyByZUNvcHkgOiByZSwgc3RyQ29weSk7XG5cbiAgICBpZiAoc3RpY2t5KSB7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgbWF0Y2guaW5wdXQgPSBzdHJpbmdTbGljZShtYXRjaC5pbnB1dCwgY2hhcnNBZGRlZCk7XG4gICAgICAgIG1hdGNoWzBdID0gc3RyaW5nU2xpY2UobWF0Y2hbMF0sIGNoYXJzQWRkZWQpO1xuICAgICAgICBtYXRjaC5pbmRleCA9IHJlLmxhc3RJbmRleDtcbiAgICAgICAgcmUubGFzdEluZGV4ICs9IG1hdGNoWzBdLmxlbmd0aDtcbiAgICAgIH0gZWxzZSByZS5sYXN0SW5kZXggPSAwO1xuICAgIH0gZWxzZSBpZiAoVVBEQVRFU19MQVNUX0lOREVYX1dST05HICYmIG1hdGNoKSB7XG4gICAgICByZS5sYXN0SW5kZXggPSByZS5nbG9iYWwgPyBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCA6IGxhc3RJbmRleDtcbiAgICB9XG4gICAgaWYgKE5QQ0dfSU5DTFVERUQgJiYgbWF0Y2ggJiYgbWF0Y2gubGVuZ3RoID4gMSkge1xuICAgICAgLy8gRml4IGJyb3dzZXJzIHdob3NlIGBleGVjYCBtZXRob2RzIGRvbid0IGNvbnNpc3RlbnRseSByZXR1cm4gYHVuZGVmaW5lZGBcbiAgICAgIC8vIGZvciBOUENHLCBsaWtlIElFOC4gTk9URTogVGhpcyBkb2Vzbid0IHdvcmsgZm9yIC8oLj8pPy9cbiAgICAgIGNhbGwobmF0aXZlUmVwbGFjZSwgbWF0Y2hbMF0sIHJlQ29weSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aCAtIDI7IGkrKykge1xuICAgICAgICAgIGlmIChhcmd1bWVudHNbaV0gPT09IHVuZGVmaW5lZCkgbWF0Y2hbaV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChtYXRjaCAmJiBncm91cHMpIHtcbiAgICAgIG1hdGNoLmdyb3VwcyA9IG9iamVjdCA9IGNyZWF0ZShudWxsKTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZ3JvdXAgPSBncm91cHNbaV07XG4gICAgICAgIG9iamVjdFtncm91cFswXV0gPSBtYXRjaFtncm91cFsxXV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhdGNoZWRFeGVjO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMnKTtcblxuLy8gYFJlZ0V4cC5wcm90b3R5cGUuZXhlY2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUuZXhlY1xuJCh7IHRhcmdldDogJ1JlZ0V4cCcsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IC8uLy5leGVjICE9PSBleGVjIH0sIHtcbiAgZXhlYzogZXhlY1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gVE9ETzogUmVtb3ZlIGZyb20gYGNvcmUtanNANGAgc2luY2UgaXQncyBtb3ZlZCB0byBlbnRyeSBwb2ludHNcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXMucmVnZXhwLmV4ZWMnKTtcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcblxudmFyIERFTEVHQVRFU19UT19FWEVDID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZXhlY0NhbGxlZCA9IGZhbHNlO1xuICB2YXIgcmUgPSAvW2FjXS87XG4gIHJlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7XG4gICAgZXhlY0NhbGxlZCA9IHRydWU7XG4gICAgcmV0dXJuIC8uLy5leGVjLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG4gIHJldHVybiByZS50ZXN0KCdhYmMnKSA9PT0gdHJ1ZSAmJiBleGVjQ2FsbGVkO1xufSgpO1xuXG52YXIgbmF0aXZlVGVzdCA9IC8uLy50ZXN0O1xuXG4vLyBgUmVnRXhwLnByb3RvdHlwZS50ZXN0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS50ZXN0XG4kKHsgdGFyZ2V0OiAnUmVnRXhwJywgcHJvdG86IHRydWUsIGZvcmNlZDogIURFTEVHQVRFU19UT19FWEVDIH0sIHtcbiAgdGVzdDogZnVuY3Rpb24gKFMpIHtcbiAgICB2YXIgUiA9IGFuT2JqZWN0KHRoaXMpO1xuICAgIHZhciBzdHJpbmcgPSB0b1N0cmluZyhTKTtcbiAgICB2YXIgZXhlYyA9IFIuZXhlYztcbiAgICBpZiAoIWlzQ2FsbGFibGUoZXhlYykpIHJldHVybiBjYWxsKG5hdGl2ZVRlc3QsIFIsIHN0cmluZyk7XG4gICAgdmFyIHJlc3VsdCA9IGNhbGwoZXhlYywgUiwgc3RyaW5nKTtcbiAgICBpZiAocmVzdWx0ID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgYW5PYmplY3QocmVzdWx0KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgaXNQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mJyk7XG52YXIgcmVnRXhwRmxhZ3MgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWZsYWdzJyk7XG5cbnZhciBSZWdFeHBQcm90b3R5cGUgPSBSZWdFeHAucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChSKSB7XG4gIHZhciBmbGFncyA9IFIuZmxhZ3M7XG4gIHJldHVybiBmbGFncyA9PT0gdW5kZWZpbmVkICYmICEoJ2ZsYWdzJyBpbiBSZWdFeHBQcm90b3R5cGUpICYmICFoYXNPd24oUiwgJ2ZsYWdzJykgJiYgaXNQcm90b3R5cGVPZihSZWdFeHBQcm90b3R5cGUsIFIpXG4gICAgPyBjYWxsKHJlZ0V4cEZsYWdzLCBSKSA6IGZsYWdzO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgUFJPUEVSX0ZVTkNUSU9OX05BTUUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tbmFtZScpLlBST1BFUjtcbnZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbicpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyICR0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGdldFJlZ0V4cEZsYWdzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1nZXQtZmxhZ3MnKTtcblxudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgUmVnRXhwUHJvdG90eXBlID0gUmVnRXhwLnByb3RvdHlwZTtcbnZhciBuYXRpdmVUb1N0cmluZyA9IFJlZ0V4cFByb3RvdHlwZVtUT19TVFJJTkddO1xuXG52YXIgTk9UX0dFTkVSSUMgPSBmYWlscyhmdW5jdGlvbiAoKSB7IHJldHVybiBuYXRpdmVUb1N0cmluZy5jYWxsKHsgc291cmNlOiAnYScsIGZsYWdzOiAnYicgfSkgIT09ICcvYS9iJzsgfSk7XG4vLyBGRjQ0LSBSZWdFeHAjdG9TdHJpbmcgaGFzIGEgd3JvbmcgbmFtZVxudmFyIElOQ09SUkVDVF9OQU1FID0gUFJPUEVSX0ZVTkNUSU9OX05BTUUgJiYgbmF0aXZlVG9TdHJpbmcubmFtZSAhPT0gVE9fU1RSSU5HO1xuXG4vLyBgUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZ2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUudG9zdHJpbmdcbmlmIChOT1RfR0VORVJJQyB8fCBJTkNPUlJFQ1RfTkFNRSkge1xuICBkZWZpbmVCdWlsdEluKFJlZ0V4cFByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICB2YXIgUiA9IGFuT2JqZWN0KHRoaXMpO1xuICAgIHZhciBwYXR0ZXJuID0gJHRvU3RyaW5nKFIuc291cmNlKTtcbiAgICB2YXIgZmxhZ3MgPSAkdG9TdHJpbmcoZ2V0UmVnRXhwRmxhZ3MoUikpO1xuICAgIHJldHVybiAnLycgKyBwYXR0ZXJuICsgJy8nICsgZmxhZ3M7XG4gIH0sIHsgdW5zYWZlOiB0cnVlIH0pO1xufVxuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG52YXIgY2hhckF0ID0gdW5jdXJyeVRoaXMoJycuY2hhckF0KTtcbnZhciBjaGFyQ29kZUF0ID0gdW5jdXJyeVRoaXMoJycuY2hhckNvZGVBdCk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoQ09OVkVSVF9UT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgcG9zKSB7XG4gICAgdmFyIFMgPSB0b1N0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKCR0aGlzKSk7XG4gICAgdmFyIHBvc2l0aW9uID0gdG9JbnRlZ2VyT3JJbmZpbml0eShwb3MpO1xuICAgIHZhciBzaXplID0gUy5sZW5ndGg7XG4gICAgdmFyIGZpcnN0LCBzZWNvbmQ7XG4gICAgaWYgKHBvc2l0aW9uIDwgMCB8fCBwb3NpdGlvbiA+PSBzaXplKSByZXR1cm4gQ09OVkVSVF9UT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBmaXJzdCA9IGNoYXJDb2RlQXQoUywgcG9zaXRpb24pO1xuICAgIHJldHVybiBmaXJzdCA8IDB4RDgwMCB8fCBmaXJzdCA+IDB4REJGRiB8fCBwb3NpdGlvbiArIDEgPT09IHNpemVcbiAgICAgIHx8IChzZWNvbmQgPSBjaGFyQ29kZUF0KFMsIHBvc2l0aW9uICsgMSkpIDwgMHhEQzAwIHx8IHNlY29uZCA+IDB4REZGRlxuICAgICAgICA/IENPTlZFUlRfVE9fU1RSSU5HXG4gICAgICAgICAgPyBjaGFyQXQoUywgcG9zaXRpb24pXG4gICAgICAgICAgOiBmaXJzdFxuICAgICAgICA6IENPTlZFUlRfVE9fU1RSSU5HXG4gICAgICAgICAgPyBzdHJpbmdTbGljZShTLCBwb3NpdGlvbiwgcG9zaXRpb24gKyAyKVxuICAgICAgICAgIDogKGZpcnN0IC0gMHhEODAwIDw8IDEwKSArIChzZWNvbmQgLSAweERDMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgU3RyaW5nLnByb3RvdHlwZS5jb2RlUG9pbnRBdGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5jb2RlcG9pbnRhdFxuICBjb2RlQXQ6IGNyZWF0ZU1ldGhvZChmYWxzZSksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLmF0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21hdGhpYXNieW5lbnMvU3RyaW5nLnByb3RvdHlwZS5hdFxuICBjaGFyQXQ6IGNyZWF0ZU1ldGhvZCh0cnVlKVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2hhckF0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy1tdWx0aWJ5dGUnKS5jaGFyQXQ7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xudmFyIGRlZmluZUl0ZXJhdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWRlZmluZScpO1xudmFyIGNyZWF0ZUl0ZXJSZXN1bHRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLWl0ZXItcmVzdWx0LW9iamVjdCcpO1xuXG52YXIgU1RSSU5HX0lURVJBVE9SID0gJ1N0cmluZyBJdGVyYXRvcic7XG52YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuc2V0O1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldHRlckZvcihTVFJJTkdfSVRFUkFUT1IpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUtQEBpdGVyYXRvclxuZGVmaW5lSXRlcmF0b3IoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24gKGl0ZXJhdGVkKSB7XG4gIHNldEludGVybmFsU3RhdGUodGhpcywge1xuICAgIHR5cGU6IFNUUklOR19JVEVSQVRPUixcbiAgICBzdHJpbmc6IHRvU3RyaW5nKGl0ZXJhdGVkKSxcbiAgICBpbmRleDogMFxuICB9KTtcbi8vIGAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy0lc3RyaW5naXRlcmF0b3Jwcm90b3R5cGUlLm5leHRcbn0sIGZ1bmN0aW9uIG5leHQoKSB7XG4gIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhpcyk7XG4gIHZhciBzdHJpbmcgPSBzdGF0ZS5zdHJpbmc7XG4gIHZhciBpbmRleCA9IHN0YXRlLmluZGV4O1xuICB2YXIgcG9pbnQ7XG4gIGlmIChpbmRleCA+PSBzdHJpbmcubGVuZ3RoKSByZXR1cm4gY3JlYXRlSXRlclJlc3VsdE9iamVjdCh1bmRlZmluZWQsIHRydWUpO1xuICBwb2ludCA9IGNoYXJBdChzdHJpbmcsIGluZGV4KTtcbiAgc3RhdGUuaW5kZXggKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4gY3JlYXRlSXRlclJlc3VsdE9iamVjdChwb2ludCwgZmFsc2UpO1xufSk7XG4iLCAiKGZ1bmN0aW9uKHVuZGVmaW5lZCkge1xuaWYgKCEoXCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWVcImluIHNlbGZcbikpIHtcbi8vIHJlcXVlc3RBbmltYXRpb25GcmFtZVxuKGZ1bmN0aW9uIChnbG9iYWwpIHtcblx0dmFyIHJhZlByZWZpeDtcblxuXHQvLyBkbyBub3QgaW5qZWN0IFJBRiBpbiBvcmRlciB0byBhdm9pZCBicm9rZW4gcGVyZm9ybWFuY2Vcblx0dmFyIG5vd09mZnNldCA9IERhdGUubm93KCk7XG5cblx0Ly8gdXNlIHBlcmZvcm1hbmNlIGFwaSBpZiBleGlzdCwgb3RoZXJ3aXNlIHVzZSBEYXRlLm5vdy5cblx0Ly8gRGF0ZS5ub3cgcG9seWZpbGwgcmVxdWlyZWQuXG5cdHZhciBwbm93ID0gZnVuY3Rpb24gKCkge1xuXHRcdGlmIChnbG9iYWwucGVyZm9ybWFuY2UgJiYgdHlwZW9mIGdsb2JhbC5wZXJmb3JtYW5jZS5ub3cgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHJldHVybiBnbG9iYWwucGVyZm9ybWFuY2Uubm93KCk7XG5cdFx0fVxuXHRcdC8vIGZhbGxiYWNrXG5cdFx0cmV0dXJuIERhdGUubm93KCkgLSBub3dPZmZzZXQ7XG5cdH07XG5cblx0aWYgKCdtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnIGluIGdsb2JhbCkge1xuXHRcdHJhZlByZWZpeCA9ICdtb3onO1xuXG5cdH0gZWxzZSBpZiAoJ3dlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZScgaW4gZ2xvYmFsKSB7XG5cdFx0cmFmUHJlZml4ID0gJ3dlYmtpdCc7XG5cblx0fVxuXG5cdGlmIChyYWZQcmVmaXgpIHtcblx0XHRnbG9iYWwucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHRyZXR1cm4gZ2xvYmFsW3JhZlByZWZpeCArICdSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXShmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGNhbGxiYWNrKHBub3coKSk7XG5cdFx0XHR9KTtcblx0XHR9O1xuXHRcdGdsb2JhbC5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGdsb2JhbFtyYWZQcmVmaXggKyAnQ2FuY2VsQW5pbWF0aW9uRnJhbWUnXTtcblx0fSBlbHNlIHtcblxuXHRcdHZhciBsYXN0VGltZSA9IERhdGUubm93KCk7XG5cblx0XHRnbG9iYWwucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHRpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoY2FsbGJhY2sgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG5cdFx0XHR9XG5cblx0XHRcdHZhclxuXHRcdFx0Y3VycmVudFRpbWUgPSBEYXRlLm5vdygpLFxuXHRcdFx0ZGVsYXkgPSAxNiArIGxhc3RUaW1lIC0gY3VycmVudFRpbWU7XG5cblx0XHRcdGlmIChkZWxheSA8IDApIHtcblx0XHRcdFx0ZGVsYXkgPSAwO1xuXHRcdFx0fVxuXG5cdFx0XHRsYXN0VGltZSA9IGN1cnJlbnRUaW1lO1xuXG5cdFx0XHRyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGxhc3RUaW1lID0gRGF0ZS5ub3coKTtcblxuXHRcdFx0XHRjYWxsYmFjayhwbm93KCkpO1xuXHRcdFx0fSwgZGVsYXkpO1xuXHRcdH07XG5cblx0XHRnbG9iYWwuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoaWQpIHtcblx0XHRcdGNsZWFyVGltZW91dChpZCk7XG5cdFx0fTtcblx0fVxufShzZWxmKSk7XG59fSkuY2FsbCgnb2JqZWN0JyA9PT0gdHlwZW9mIHdpbmRvdyAmJiB3aW5kb3cgfHwgJ29iamVjdCcgPT09IHR5cGVvZiBzZWxmICYmIHNlbGYgfHwgJ29iamVjdCcgPT09IHR5cGVvZiBnbG9iYWwgJiYgZ2xvYmFsIHx8IHt9KTtcbiIsICIoZnVuY3Rpb24odW5kZWZpbmVkKSB7XG5pZiAoISgoZnVuY3Rpb24oKXtpZihcImRvY3VtZW50XCJpbiBzZWxmJiZcImRvY3VtZW50RWxlbWVudFwiaW4gc2VsZi5kb2N1bWVudCYmXCJzdHlsZVwiaW4gc2VsZi5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQmJlwic2Nyb2xsQmVoYXZpb3JcImluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSlyZXR1cm4hMFxuaWYoRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsVG8mJkVsZW1lbnQucHJvdG90eXBlLnNjcm9sbFRvLnRvU3RyaW5nKCkuaW5kZXhPZihcIltuYXRpdmUgY29kZV1cIik+LTEpcmV0dXJuITFcbnRyeXt2YXIgZT0hMSx0PXt0b3A6MSxsZWZ0OjB9XG5PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcImJlaGF2aW9yXCIse2dldDpmdW5jdGlvbigpe3JldHVybiBlPSEwLFwic21vb3RoXCJ9LGVudW1lcmFibGU6ITB9KVxudmFyIG89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKSxuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIilcbnJldHVybiBvLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsXCJoZWlnaHQ6IDFweDsgb3ZlcmZsb3c6IHNjcm9sbDtcIiksbi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLFwiaGVpZ2h0OiAycHg7IG92ZXJmbG93OiBzY3JvbGw7XCIpLG8uYXBwZW5kQ2hpbGQobiksby5zY3JvbGxUbyh0KSxlfWNhdGNoKGUpe3JldHVybiExfX0pKClcbikpIHtcbi8vIHNtb290aHNjcm9sbFxuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgICB2YXIgZXhwb3J0cyA9IHt9O1xyXG4gICAgZmFjdG9yeShleHBvcnRzKTtcclxuICAgIGV4cG9ydHMucG9seWZpbGwoKTtcclxufSh0aGlzLCAoZnVuY3Rpb24gKGV4cG9ydHMpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIGVhc2UgPSBmdW5jdGlvbiAoaykge1xyXG4gICAgICAgIHJldHVybiAwLjUgKiAoMSAtIE1hdGguY29zKE1hdGguUEkgKiBrKSk7XHJcbiAgICB9O1xyXG4gICAgdmFyIERVUkFUSU9OID0gNTAwO1xyXG4gICAgdmFyIGlzU2Nyb2xsQmVoYXZpb3JTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBcInNjcm9sbEJlaGF2aW9yXCIgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlOyB9O1xyXG4gICAgdmFyIG9yaWdpbmFsID0ge1xyXG4gICAgICAgIF9lbGVtZW50U2Nyb2xsOiB1bmRlZmluZWQsXHJcbiAgICAgICAgZ2V0IGVsZW1lbnRTY3JvbGwoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5fZWxlbWVudFNjcm9sbCB8fCAodGhpcy5fZWxlbWVudFNjcm9sbCA9IEhUTUxFbGVtZW50LnByb3RvdHlwZS5zY3JvbGwgfHxcclxuICAgICAgICAgICAgICAgIEhUTUxFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxUbyB8fFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKHgsIHkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbExlZnQgPSB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9wID0geTtcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIF9lbGVtZW50U2Nyb2xsSW50b1ZpZXc6IHVuZGVmaW5lZCxcclxuICAgICAgICBnZXQgZWxlbWVudFNjcm9sbEludG9WaWV3KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuX2VsZW1lbnRTY3JvbGxJbnRvVmlldyB8fCAodGhpcy5fZWxlbWVudFNjcm9sbEludG9WaWV3ID0gSFRNTEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbEludG9WaWV3KSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBfd2luZG93U2Nyb2xsOiB1bmRlZmluZWQsXHJcbiAgICAgICAgZ2V0IHdpbmRvd1Njcm9sbCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuICh0aGlzLl93aW5kb3dTY3JvbGwgfHwgKHRoaXMuX3dpbmRvd1Njcm9sbCA9IHdpbmRvdy5zY3JvbGwgfHwgd2luZG93LnNjcm9sbFRvKSk7XHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbiAgICB2YXIgbW9kaWZ5UHJvdG90eXBlcyA9IGZ1bmN0aW9uIChtb2RpZmljYXRpb24pIHtcclxuICAgICAgICB2YXIgcHJvdG90eXBlcyA9IFtIVE1MRWxlbWVudC5wcm90b3R5cGUsIFNWR0VsZW1lbnQucHJvdG90eXBlLCBFbGVtZW50LnByb3RvdHlwZV07XHJcbiAgICAgICAgcHJvdG90eXBlcy5mb3JFYWNoKGZ1bmN0aW9uIChwcm90b3R5cGUpIHsgcmV0dXJuIG1vZGlmaWNhdGlvbihwcm90b3R5cGUpOyB9KTtcclxuICAgIH07XHJcbiAgICB2YXIgbm93ID0gZnVuY3Rpb24gKCkgeyB2YXIgX2EsIF9iLCBfYzsgcmV0dXJuIChfYyA9IChfYiA9IChfYSA9IHdpbmRvdy5wZXJmb3JtYW5jZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm5vdykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EpKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiBEYXRlLm5vdygpOyB9O1xyXG4gICAgdmFyIHN0ZXAgPSBmdW5jdGlvbiAoY29udGV4dCkge1xyXG4gICAgICAgIHZhciBjdXJyZW50VGltZSA9IG5vdygpO1xyXG4gICAgICAgIHZhciBlbGFwc2VkID0gKGN1cnJlbnRUaW1lIC0gY29udGV4dC50aW1lU3RhbXApIC8gKGNvbnRleHQuZHVyYXRpb24gfHwgRFVSQVRJT04pO1xyXG4gICAgICAgIGlmIChlbGFwc2VkID4gMSkge1xyXG4gICAgICAgICAgICBjb250ZXh0Lm1ldGhvZChjb250ZXh0LnRhcmdldFgsIGNvbnRleHQudGFyZ2V0WSk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdmFsdWUgPSAoY29udGV4dC50aW1pbmdGdW5jIHx8IGVhc2UpKGVsYXBzZWQpO1xyXG4gICAgICAgIHZhciBjdXJyZW50WCA9IGNvbnRleHQuc3RhcnRYICsgKGNvbnRleHQudGFyZ2V0WCAtIGNvbnRleHQuc3RhcnRYKSAqIHZhbHVlO1xyXG4gICAgICAgIHZhciBjdXJyZW50WSA9IGNvbnRleHQuc3RhcnRZICsgKGNvbnRleHQudGFyZ2V0WSAtIGNvbnRleHQuc3RhcnRZKSAqIHZhbHVlO1xyXG4gICAgICAgIGNvbnRleHQubWV0aG9kKGN1cnJlbnRYLCBjdXJyZW50WSk7XHJcbiAgICAgICAgY29udGV4dC5yYWZJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHN0ZXAoY29udGV4dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLy8gaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzc29tLXZpZXcvI25vcm1hbGl6ZS1ub24tZmluaXRlLXZhbHVlc1xyXG4gICAgdmFyIG5vbkZpbml0ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIGlmICghaXNGaW5pdGUodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTnVtYmVyKHZhbHVlKTtcclxuICAgIH07XHJcbiAgICB2YXIgaXNPYmplY3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgKHR5cGUgPT09IFwib2JqZWN0XCIgfHwgdHlwZSA9PT0gXCJmdW5jdGlvblwiKTtcclxuICAgIH07XG5cbiAgICAvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuICAgIFBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG4gICAgcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuICAgIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuICAgIFJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG4gICAgQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG4gICAgSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbiAgICBMT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG4gICAgT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG4gICAgUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG4gICAgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgICAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXI7XHJcbiAgICB9XG5cbiAgICB2YXIgZWxlbWVudFNjcm9sbCA9IGZ1bmN0aW9uIChlbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIF9hLCBfYjtcclxuICAgICAgICB2YXIgb3JpZ2luYWxCb3VuZEZ1bmMgPSBvcmlnaW5hbC5lbGVtZW50U2Nyb2xsLmJpbmQoZWxlbWVudCk7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMubGVmdCA9PT0gdW5kZWZpbmVkICYmIG9wdGlvbnMudG9wID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc3RhcnRYID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xyXG4gICAgICAgIHZhciBzdGFydFkgPSBlbGVtZW50LnNjcm9sbFRvcDtcclxuICAgICAgICB2YXIgdGFyZ2V0WCA9IG5vbkZpbml0ZSgoX2EgPSBvcHRpb25zLmxlZnQpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHN0YXJ0WCk7XHJcbiAgICAgICAgdmFyIHRhcmdldFkgPSBub25GaW5pdGUoKF9iID0gb3B0aW9ucy50b3ApICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IHN0YXJ0WSk7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMuYmVoYXZpb3IgIT09IFwic21vb3RoXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsQm91bmRGdW5jKHRhcmdldFgsIHRhcmdldFkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBjYW5jZWxTY3JvbGwpO1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBjYW5jZWxTY3JvbGwpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGNvbnRleHQgPSB7XHJcbiAgICAgICAgICAgIHRpbWVTdGFtcDogbm93KCksXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiBvcHRpb25zLmR1cmF0aW9uLFxyXG4gICAgICAgICAgICBzdGFydFg6IHN0YXJ0WCxcclxuICAgICAgICAgICAgc3RhcnRZOiBzdGFydFksXHJcbiAgICAgICAgICAgIHRhcmdldFg6IHRhcmdldFgsXHJcbiAgICAgICAgICAgIHRhcmdldFk6IHRhcmdldFksXHJcbiAgICAgICAgICAgIHJhZklkOiAwLFxyXG4gICAgICAgICAgICBtZXRob2Q6IG9yaWdpbmFsQm91bmRGdW5jLFxyXG4gICAgICAgICAgICB0aW1pbmdGdW5jOiBvcHRpb25zLnRpbWluZ0Z1bmMsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiByZW1vdmVFdmVudExpc3RlbmVyLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGNhbmNlbFNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoY29udGV4dC5yYWZJZCk7XHJcbiAgICAgICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgY2FuY2VsU2Nyb2xsLCB7XHJcbiAgICAgICAgICAgIHBhc3NpdmU6IHRydWUsXHJcbiAgICAgICAgICAgIG9uY2U6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgY2FuY2VsU2Nyb2xsLCB7XHJcbiAgICAgICAgICAgIHBhc3NpdmU6IHRydWUsXHJcbiAgICAgICAgICAgIG9uY2U6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc3RlcChjb250ZXh0KTtcclxuICAgIH07XHJcbiAgICB2YXIgZWxlbWVudFNjcm9sbFBvbHlmaWxsID0gZnVuY3Rpb24gKGFuaW1hdGlvbk9wdGlvbnMpIHtcclxuICAgICAgICBpZiAoaXNTY3JvbGxCZWhhdmlvclN1cHBvcnRlZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG9yaWdpbmFsRnVuYyA9IG9yaWdpbmFsLmVsZW1lbnRTY3JvbGw7XHJcbiAgICAgICAgbW9kaWZ5UHJvdG90eXBlcyhmdW5jdGlvbiAocHJvdG90eXBlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAocHJvdG90eXBlLnNjcm9sbCA9IGZ1bmN0aW9uIHNjcm9sbCgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNjcm9sbE9wdGlvbnMgPSBhcmd1bWVudHNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc09iamVjdChzY3JvbGxPcHRpb25zKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGV4ZWN1dGUgJ3Njcm9sbCcgb24gJ0VsZW1lbnQnOiBwYXJhbWV0ZXIgMSAoJ29wdGlvbnMnKSBpcyBub3QgYW4gb2JqZWN0LlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRTY3JvbGwodGhpcywgX19hc3NpZ24oX19hc3NpZ24oe30sIHNjcm9sbE9wdGlvbnMpLCBhbmltYXRpb25PcHRpb25zKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxGdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcblxuICAgIHZhciBlbGVtZW50U2Nyb2xsQnkgPSBmdW5jdGlvbiAoZWxlbWVudCwgb3B0aW9ucykge1xyXG4gICAgICAgIHZhciBsZWZ0ID0gbm9uRmluaXRlKG9wdGlvbnMubGVmdCB8fCAwKSArIGVsZW1lbnQuc2Nyb2xsTGVmdDtcclxuICAgICAgICB2YXIgdG9wID0gbm9uRmluaXRlKG9wdGlvbnMudG9wIHx8IDApICsgZWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRTY3JvbGwoZWxlbWVudCwgX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IGxlZnQ6IGxlZnQsIHRvcDogdG9wIH0pKTtcclxuICAgIH07XHJcbiAgICB2YXIgZWxlbWVudFNjcm9sbEJ5UG9seWZpbGwgPSBmdW5jdGlvbiAoYW5pbWF0aW9uT3B0aW9ucykge1xyXG4gICAgICAgIGlmIChpc1Njcm9sbEJlaGF2aW9yU3VwcG9ydGVkKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtb2RpZnlQcm90b3R5cGVzKGZ1bmN0aW9uIChwcm90b3R5cGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChwcm90b3R5cGUuc2Nyb2xsQnkgPSBmdW5jdGlvbiBzY3JvbGxCeSgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNjcm9sbEJ5T3B0aW9ucyA9IGFyZ3VtZW50c1swXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzT2JqZWN0KHNjcm9sbEJ5T3B0aW9ucykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBleGVjdXRlICdzY3JvbGxCeScgb24gJ0VsZW1lbnQnOiBwYXJhbWV0ZXIgMSAoJ29wdGlvbnMnKSBpcyBub3QgYW4gb2JqZWN0LlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRTY3JvbGxCeSh0aGlzLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgc2Nyb2xsQnlPcHRpb25zKSwgYW5pbWF0aW9uT3B0aW9ucykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIGxlZnQgPSBOdW1iZXIoYXJndW1lbnRzWzBdKTtcclxuICAgICAgICAgICAgICAgIHZhciB0b3AgPSBOdW1iZXIoYXJndW1lbnRzWzFdKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50U2Nyb2xsQnkodGhpcywgeyBsZWZ0OiBsZWZ0LCB0b3A6IHRvcCB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xuXG4gICAgLy8gaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy13cml0aW5nLW1vZGVzLTQvI2Jsb2NrLWZsb3dcclxuICAgIHZhciBub3JtYWxpemVXcml0aW5nTW9kZSA9IGZ1bmN0aW9uICh3cml0aW5nTW9kZSkge1xyXG4gICAgICAgIHN3aXRjaCAod3JpdGluZ01vZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImhvcml6b250YWwtdGJcIjpcclxuICAgICAgICAgICAgY2FzZSBcImxyXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJsci10YlwiOlxyXG4gICAgICAgICAgICBjYXNlIFwicmxcIjpcclxuICAgICAgICAgICAgY2FzZSBcInJsLXRiXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMCAvKiBIb3Jpem9udGFsVGIgKi87XHJcbiAgICAgICAgICAgIGNhc2UgXCJ2ZXJ0aWNhbC1ybFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwidGJcIjpcclxuICAgICAgICAgICAgY2FzZSBcInRiLXJsXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMSAvKiBWZXJ0aWNhbFJsICovO1xyXG4gICAgICAgICAgICBjYXNlIFwidmVydGljYWwtbHJcIjpcclxuICAgICAgICAgICAgY2FzZSBcInRiLWxyXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMiAvKiBWZXJ0aWNhbExyICovO1xyXG4gICAgICAgICAgICBjYXNlIFwic2lkZXdheXMtcmxcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiAzIC8qIFNpZGV3YXlzUmwgKi87XHJcbiAgICAgICAgICAgIGNhc2UgXCJzaWRld2F5cy1sclwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDQgLyogU2lkZXdheXNMciAqLztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDAgLyogSG9yaXpvbnRhbFRiICovO1xyXG4gICAgfTtcclxuICAgIC8vIGh0dHBzOi8vc291cmNlLmNocm9taXVtLm9yZy9jaHJvbWl1bS9jaHJvbWl1bS9zcmMvKy9tYWluOnRoaXJkX3BhcnR5L2JsaW5rL3JlbmRlcmVyL2NvcmUvZG9tL2VsZW1lbnQuY2M7bD0xMDk3LTExODk7ZHJjPTZhNzUzM2Q0YTFlOWYyMzcyMjIzYTlkOTEyYTllNTNhNmZhMzVhZTBcclxuICAgIHZhciB0b1BoeXNpY2FsQWxpZ25tZW50ID0gZnVuY3Rpb24gKG9wdGlvbnMsIHdyaXRpbmdNb2RlLCBpc0xUUikge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICB2YXIgX2IgPSBfX3JlYWQoW29wdGlvbnMuYmxvY2sgfHwgXCJzdGFydFwiLCBvcHRpb25zLmlubGluZSB8fCBcIm5lYXJlc3RcIl0sIDIpLCB4UG9zID0gX2JbMF0sIHlQb3MgPSBfYlsxXTtcclxuICAgICAgICAvKiogIDBie3ZlcnRpY2FsfXtob3Jpem9udGFsfSAgMDogbm9ybWFsLCAxOiByZXZlcnNlICovXHJcbiAgICAgICAgdmFyIGxheW91dCA9IDA7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogV3JpdGluZ01vZGUuVmVydGljYWxMcjog4oaT4oaSXHJcbiAgICAgICAgICogfCAxIHwgNCB8ICAgfFxyXG4gICAgICAgICAqIHwgMiB8IDUgfCAgIHxcclxuICAgICAgICAgKiB8IDMgfCAgIHwgICB8XHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBSVEw6IOKGkeKGklxyXG4gICAgICAgICAqIHwgMyB8ICAgfCAgIHxcclxuICAgICAgICAgKiB8IDIgfCA1IHwgICB8XHJcbiAgICAgICAgICogfCAxIHwgNCB8ICAgfFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGlmICghaXNMVFIpIHtcclxuICAgICAgICAgICAgbGF5b3V0IF49IDIgLyogUmV2ZXJzZVZlcnRpY2FsICovO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2ggKHdyaXRpbmdNb2RlKSB7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDihpPihpJcclxuICAgICAgICAgICAgICogfCAxIHwgMiB8IDMgfFxyXG4gICAgICAgICAgICAgKiB8IDQgfCA1IHwgICB8XHJcbiAgICAgICAgICAgICAqIHwgICB8ICAgfCAgIHxcclxuICAgICAgICAgICAgICpcclxuICAgICAgICAgICAgICogUlRMOiDihpPihpBcclxuICAgICAgICAgICAgICogfCAzIHwgMiB8IDEgfFxyXG4gICAgICAgICAgICAgKiB8ICAgfCA1IHwgNCB8XHJcbiAgICAgICAgICAgICAqIHwgICB8ICAgfCAgIHxcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGNhc2UgMCAvKiBIb3Jpem9udGFsVGIgKi86XHJcbiAgICAgICAgICAgICAgICAvLyBzd2FwIGhvcml6b250YWwgYW5kIHZlcnRpY2FsXHJcbiAgICAgICAgICAgICAgICBsYXlvdXQgPSAobGF5b3V0ID4+IDEpIHwgKChsYXlvdXQgJiAxKSA8PCAxKTtcclxuICAgICAgICAgICAgICAgIF9hID0gX19yZWFkKFt5UG9zLCB4UG9zXSwgMiksIHhQb3MgPSBfYVswXSwgeVBvcyA9IF9hWzFdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDihpPihpBcclxuICAgICAgICAgICAgICogfCAgIHwgNCB8IDEgfFxyXG4gICAgICAgICAgICAgKiB8ICAgfCA1IHwgMiB8XHJcbiAgICAgICAgICAgICAqIHwgICB8ICAgfCAzIHxcclxuICAgICAgICAgICAgICpcclxuICAgICAgICAgICAgICogUlRMOiDihpHihpBcclxuICAgICAgICAgICAgICogfCAgIHwgICB8IDMgfFxyXG4gICAgICAgICAgICAgKiB8ICAgfCA1IHwgMiB8XHJcbiAgICAgICAgICAgICAqIHwgICB8IDQgfCAxIHxcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGNhc2UgMSAvKiBWZXJ0aWNhbFJsICovOlxyXG4gICAgICAgICAgICBjYXNlIDMgLyogU2lkZXdheXNSbCAqLzpcclxuICAgICAgICAgICAgICAgIC8vICByZXZlcnNlIGhvcml6b250YWxcclxuICAgICAgICAgICAgICAgIGxheW91dCBePSAxIC8qIFJldmVyc2VIb3Jpem9udGFsICovO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDihpHihpJcclxuICAgICAgICAgICAgICogfCAzIHwgICB8ICAgfFxyXG4gICAgICAgICAgICAgKiB8IDIgfCA1IHwgICB8XHJcbiAgICAgICAgICAgICAqIHwgMSB8IDQgfCAgIHxcclxuICAgICAgICAgICAgICpcclxuICAgICAgICAgICAgICogUlRMOiDihpPihpJcclxuICAgICAgICAgICAgICogfCAxIHwgNCB8ICAgfFxyXG4gICAgICAgICAgICAgKiB8IDIgfCA1IHwgICB8XHJcbiAgICAgICAgICAgICAqIHwgMyB8ICAgfCAgIHxcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGNhc2UgNCAvKiBTaWRld2F5c0xyICovOlxyXG4gICAgICAgICAgICAgICAgLy8gcmV2ZXJzZSB2ZXJ0aWNhbFxyXG4gICAgICAgICAgICAgICAgbGF5b3V0IF49IDIgLyogUmV2ZXJzZVZlcnRpY2FsICovO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbeFBvcywgeVBvc10ubWFwKGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcclxuICAgICAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImNlbnRlclwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxIC8qIENlbnRlckFsd2F5cyAqLztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJuZWFyZXN0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDAgLyogVG9FZGdlSWZOZWVkZWQgKi87XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJldmVyc2UgPSAobGF5b3V0ID4+IGluZGV4KSAmIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICh2YWx1ZSA9PT0gXCJzdGFydFwiKSA9PT0gIXJldmVyc2UgPyAyIC8qIExlZnRPclRvcCAqLyA6IDMgLyogUmlnaHRPckJvdHRvbSAqLztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8vIGNvZGUgZnJvbSBzdGlwc2FuL2NvbXB1dGUtc2Nyb2xsLWludG8tdmlld1xyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3N0aXBzYW4vY29tcHV0ZS1zY3JvbGwtaW50by12aWV3L2Jsb2IvNTM5NmM2Yjc4YWY1ZDBiYmNlMTFhN2M0ZTkzY2MzMTQ2NTQ2ZmNkMy9zcmMvaW5kZXgudHNcclxuICAgIC8qKlxyXG4gICAgICogRmluZCBvdXQgd2hpY2ggZWRnZSB0byBhbGlnbiBhZ2FpbnN0IHdoZW4gbG9naWNhbCBzY3JvbGwgcG9zaXRpb24gaXMgXCJuZWFyZXN0XCJcclxuICAgICAqIEludGVyZXN0aW5nIGZhY3Q6IFwibmVhcmVzdFwiIHdvcmtzIHNpbWlsYXJpbHkgdG8gXCJpZi1uZWVkZWRcIiwgaWYgdGhlIGVsZW1lbnQgaXMgZnVsbHkgdmlzaWJsZSBpdCB3aWxsIG5vdCBzY3JvbGwgaXRcclxuICAgICAqXHJcbiAgICAgKiBMZWdlbmRzOlxyXG4gICAgICog4pSM4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSQIOKUjyDilIEg4pSBIOKUgSDilJNcclxuICAgICAqIOKUgiB0YXJnZXQg4pSCICAgZnJhbWVcclxuICAgICAqIOKUlOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUmCDilJcg4pSBIOKUgSDilIEg4pSbXHJcbiAgICAgKi9cclxuICAgIHZhciBhbGlnbk5lYXJlc3QgPSBmdW5jdGlvbiAoc2Nyb2xsaW5nRWRnZVN0YXJ0LCBzY3JvbGxpbmdFZGdlRW5kLCBzY3JvbGxpbmdTaXplLCBzY3JvbGxpbmdCb3JkZXJTdGFydCwgc2Nyb2xsaW5nQm9yZGVyRW5kLCBlbGVtZW50RWRnZVN0YXJ0LCBlbGVtZW50RWRnZUVuZCwgZWxlbWVudFNpemUpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJZiBlbGVtZW50IGVkZ2UgQSBhbmQgZWxlbWVudCBlZGdlIEIgYXJlIGJvdGggb3V0c2lkZSBzY3JvbGxpbmcgYm94IGVkZ2UgQSBhbmQgc2Nyb2xsaW5nIGJveCBlZGdlIEJcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqICAgICAgICAgIOKUjOKUgOKUgOKUkFxyXG4gICAgICAgICAqICAgICAgICDilI/ilIHilILilIHilIHilILilIHilJNcclxuICAgICAgICAgKiAgICAgICAgICDilIIgIOKUglxyXG4gICAgICAgICAqICAgICAgICDilIMg4pSCICDilIIg4pSDICAgICAgICBkbyBub3RoaW5nXHJcbiAgICAgICAgICogICAgICAgICAg4pSCICDilIJcclxuICAgICAgICAgKiAgICAgICAg4pSX4pSB4pSC4pSB4pSB4pSC4pSB4pSbXHJcbiAgICAgICAgICogICAgICAgICAg4pSU4pSA4pSA4pSYXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiAgSWYgZWxlbWVudCBlZGdlIEMgYW5kIGVsZW1lbnQgZWRnZSBEIGFyZSBib3RoIG91dHNpZGUgc2Nyb2xsaW5nIGJveCBlZGdlIEMgYW5kIHNjcm9sbGluZyBib3ggZWRnZSBEXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiAgICDilI8g4pSBIOKUgSDilIEg4pSBIOKUk1xyXG4gICAgICAgICAqICAg4pSM4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSQXHJcbiAgICAgICAgICogICDilILilIMgICAgICAgICDilIPilIIgICAgICAgIGRvIG5vdGhpbmdcclxuICAgICAgICAgKiAgIOKUlOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUmFxyXG4gICAgICAgICAqICAgIOKUlyDilIEg4pSBIOKUgSDilIEg4pSbXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaWYgKChlbGVtZW50RWRnZVN0YXJ0IDwgc2Nyb2xsaW5nRWRnZVN0YXJ0ICYmIGVsZW1lbnRFZGdlRW5kID4gc2Nyb2xsaW5nRWRnZUVuZCkgfHxcclxuICAgICAgICAgICAgKGVsZW1lbnRFZGdlU3RhcnQgPiBzY3JvbGxpbmdFZGdlU3RhcnQgJiYgZWxlbWVudEVkZ2VFbmQgPCBzY3JvbGxpbmdFZGdlRW5kKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSWYgZWxlbWVudCBlZGdlIEEgaXMgb3V0c2lkZSBzY3JvbGxpbmcgYm94IGVkZ2UgQSBhbmQgZWxlbWVudCBoZWlnaHQgaXMgbGVzcyB0aGFuIHNjcm9sbGluZyBib3ggaGVpZ2h0XHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiAgICAgICAgICDilIzilIDilIDilJBcclxuICAgICAgICAgKiAgICAgICAg4pSP4pSB4pSC4pSB4pSB4pSC4pSB4pSTICAgICAgICAg4pSP4pSB4pSM4pSB4pSB4pSQ4pSB4pSTXHJcbiAgICAgICAgICogICAgICAgICAg4pSU4pSA4pSA4pSYICAgICAgICAgICAgIOKUgiAg4pSCXHJcbiAgICAgICAgICogIGZyb20gIOKUgyAgICAgIOKUgyAgICAgdG8gIOKUgyDilJTilIDilIDilJgg4pSDXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiAgICAgICAg4pSX4pSBIOKUgeKUgSDilIHilJsgICAgICAgICDilJfilIEg4pSB4pSBIOKUgeKUm1xyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogSWYgZWxlbWVudCBlZGdlIEIgaXMgb3V0c2lkZSBzY3JvbGxpbmcgYm94IGVkZ2UgQiBhbmQgZWxlbWVudCBoZWlnaHQgaXMgZ3JlYXRlciB0aGFuIHNjcm9sbGluZyBib3ggaGVpZ2h0XHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiAgICAgICAg4pSP4pSBIOKUgeKUgSDilIHilJMgICAgICAgICDilI/ilIHilIzilIHilIHilJDilIHilJNcclxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgiAg4pSCXHJcbiAgICAgICAgICogIGZyb20gIOKUgyDilIzilIDilIDilJAg4pSDICAgICB0byAg4pSDIOKUgiAg4pSCIOKUg1xyXG4gICAgICAgICAqICAgICAgICAgIOKUgiAg4pSCICAgICAgICAgICAgIOKUgiAg4pSCXHJcbiAgICAgICAgICogICAgICAgIOKUl+KUgeKUguKUgeKUgeKUguKUgeKUmyAgICAgICAgIOKUl+KUgeKUguKUgeKUgeKUguKUgeKUm1xyXG4gICAgICAgICAqICAgICAgICAgIOKUgiAg4pSCICAgICAgICAgICAgIOKUlOKUgOKUgOKUmFxyXG4gICAgICAgICAqICAgICAgICAgIOKUgiAg4pSCXHJcbiAgICAgICAgICogICAgICAgICAg4pSU4pSA4pSA4pSYXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBJZiBlbGVtZW50IGVkZ2UgQyBpcyBvdXRzaWRlIHNjcm9sbGluZyBib3ggZWRnZSBDIGFuZCBlbGVtZW50IHdpZHRoIGlzIGxlc3MgdGhhbiBzY3JvbGxpbmcgYm94IHdpZHRoXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiAgICAgICBmcm9tICAgICAgICAgICAgICAgICB0b1xyXG4gICAgICAgICAqICAgIOKUjyDilIEg4pSBIOKUgSDilIEg4pSTICAgICAgICAg4pSPIOKUgSDilIEg4pSBIOKUgSDilJNcclxuICAgICAgICAgKiAg4pSM4pSA4pSA4pSA4pSQICAgICAgICAgICAgICAgICDilIzilIDilIDilIDilJBcclxuICAgICAgICAgKiAg4pSCIOKUgyDilIIgICAgICAg4pSDICAgICAgICAg4pSDICAg4pSCICAgICDilINcclxuICAgICAgICAgKiAg4pSU4pSA4pSA4pSA4pSYICAgICAgICAgICAgICAgICDilJTilIDilIDilIDilJhcclxuICAgICAgICAgKiAgICDilJcg4pSBIOKUgSDilIEg4pSBIOKUmyAgICAgICAgIOKUlyDilIEg4pSBIOKUgSDilIEg4pSbXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBJZiBlbGVtZW50IGVkZ2UgRCBpcyBvdXRzaWRlIHNjcm9sbGluZyBib3ggZWRnZSBEIGFuZCBlbGVtZW50IHdpZHRoIGlzIGdyZWF0ZXIgdGhhbiBzY3JvbGxpbmcgYm94IHdpZHRoXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiAgICAgICBmcm9tICAgICAgICAgICAgICAgICB0b1xyXG4gICAgICAgICAqICAgIOKUjyDilIEg4pSBIOKUgSDilIEg4pSTICAgICAgICAg4pSPIOKUgSDilIEg4pSBIOKUgSDilJNcclxuICAgICAgICAgKiAgICAgICAg4pSM4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSQICAg4pSM4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSQXHJcbiAgICAgICAgICogICAg4pSDICAg4pSCICAgICDilIMgICAgIOKUgiAgIOKUgyAgICAgICAgIOKUgyDilIJcclxuICAgICAgICAgKiAgICAgICAg4pSU4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSYICAg4pSU4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSYXHJcbiAgICAgICAgICogICAg4pSXIOKUgSDilIEg4pSBIOKUgSDilJsgICAgICAgICDilJcg4pSBIOKUgSDilIEg4pSBIOKUm1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGlmICgoZWxlbWVudEVkZ2VTdGFydCA8PSBzY3JvbGxpbmdFZGdlU3RhcnQgJiYgZWxlbWVudFNpemUgPD0gc2Nyb2xsaW5nU2l6ZSkgfHxcclxuICAgICAgICAgICAgKGVsZW1lbnRFZGdlRW5kID49IHNjcm9sbGluZ0VkZ2VFbmQgJiYgZWxlbWVudFNpemUgPj0gc2Nyb2xsaW5nU2l6ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRFZGdlU3RhcnQgLSBzY3JvbGxpbmdFZGdlU3RhcnQgLSBzY3JvbGxpbmdCb3JkZXJTdGFydDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSWYgZWxlbWVudCBlZGdlIEIgaXMgb3V0c2lkZSBzY3JvbGxpbmcgYm94IGVkZ2UgQiBhbmQgZWxlbWVudCBoZWlnaHQgaXMgbGVzcyB0aGFuIHNjcm9sbGluZyBib3ggaGVpZ2h0XHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiAgICAgICAg4pSP4pSBIOKUgeKUgSDilIHilJMgICAgICAgICDilI/ilIEg4pSB4pSBIOKUgeKUk1xyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogIGZyb20gIOKUgyAgICAgIOKUgyAgICAgdG8gIOKUgyDilIzilIDilIDilJAg4pSDXHJcbiAgICAgICAgICogICAgICAgICAg4pSM4pSA4pSA4pSQICAgICAgICAgICAgIOKUgiAg4pSCXHJcbiAgICAgICAgICogICAgICAgIOKUl+KUgeKUguKUgeKUgeKUguKUgeKUmyAgICAgICAgIOKUl+KUgeKUlOKUgeKUgeKUmOKUgeKUm1xyXG4gICAgICAgICAqICAgICAgICAgIOKUlOKUgOKUgOKUmFxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogSWYgZWxlbWVudCBlZGdlIEEgaXMgb3V0c2lkZSBzY3JvbGxpbmcgYm94IGVkZ2UgQSBhbmQgZWxlbWVudCBoZWlnaHQgaXMgZ3JlYXRlciB0aGFuIHNjcm9sbGluZyBib3ggaGVpZ2h0XHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiAgICAgICAgICDilIzilIDilIDilJBcclxuICAgICAgICAgKiAgICAgICAgICDilIIgIOKUglxyXG4gICAgICAgICAqICAgICAgICAgIOKUgiAg4pSCICAgICAgICAgICAgIOKUjOKUgOKUgOKUkFxyXG4gICAgICAgICAqICAgICAgICDilI/ilIHilILilIHilIHilILilIHilJMgICAgICAgICDilI/ilIHilILilIHilIHilILilIHilJNcclxuICAgICAgICAgKiAgICAgICAgICDilIIgIOKUgiAgICAgICAgICAgICDilIIgIOKUglxyXG4gICAgICAgICAqICBmcm9tICDilIMg4pSU4pSA4pSA4pSYIOKUgyAgICAgdG8gIOKUgyDilIIgIOKUgiDilINcclxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgiAg4pSCXHJcbiAgICAgICAgICogICAgICAgIOKUl+KUgSDilIHilIEg4pSB4pSbICAgICAgICAg4pSX4pSB4pSU4pSB4pSB4pSY4pSB4pSbXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBJZiBlbGVtZW50IGVkZ2UgQyBpcyBvdXRzaWRlIHNjcm9sbGluZyBib3ggZWRnZSBDIGFuZCBlbGVtZW50IHdpZHRoIGlzIGdyZWF0ZXIgdGhhbiBzY3JvbGxpbmcgYm94IHdpZHRoXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiAgICAgICAgICAgZnJvbSAgICAgICAgICAgICAgICAgdG9cclxuICAgICAgICAgKiAgICAgICAg4pSPIOKUgSDilIEg4pSBIOKUgSDilJMgICAgICAgICDilI8g4pSBIOKUgSDilIEg4pSBIOKUk1xyXG4gICAgICAgICAqICDilIzilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilJAgICAgICAgICAgIOKUjOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUkFxyXG4gICAgICAgICAqICDilIIgICAgIOKUgyAgICAg4pSCICAg4pSDICAgICAgIOKUgiDilIMgICAgICAgICDilINcclxuICAgICAgICAgKiAg4pSU4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSYICAgICAgICAgICDilJTilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilJhcclxuICAgICAgICAgKiAgICAgICAg4pSXIOKUgSDilIEg4pSBIOKUgSDilJsgICAgICAgICDilJcg4pSBIOKUgSDilIEg4pSBIOKUm1xyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogSWYgZWxlbWVudCBlZGdlIEQgaXMgb3V0c2lkZSBzY3JvbGxpbmcgYm94IGVkZ2UgRCBhbmQgZWxlbWVudCB3aWR0aCBpcyBsZXNzIHRoYW4gc2Nyb2xsaW5nIGJveCB3aWR0aFxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogICAgICAgICAgIGZyb20gICAgICAgICAgICAgICAgIHRvXHJcbiAgICAgICAgICogICAgICAgIOKUjyDilIEg4pSBIOKUgSDilIEg4pSTICAgICAgICAg4pSPIOKUgSDilIEg4pSBIOKUgSDilJNcclxuICAgICAgICAgKiAgICAgICAgICAgICAgICDilIzilIDilIDilIDilJAgICAgICAgICAgICAg4pSM4pSA4pSA4pSA4pSQXHJcbiAgICAgICAgICogICAgICAgIOKUgyAgICAgICDilIIg4pSDIOKUgiAgICAgICDilIMgICAgIOKUgiAgIOKUg1xyXG4gICAgICAgICAqICAgICAgICAgICAgICAgIOKUlOKUgOKUgOKUgOKUmCAgICAgICAgICAgICDilJTilIDilIDilIDilJhcclxuICAgICAgICAgKiAgICAgICAg4pSXIOKUgSDilIEg4pSBIOKUgSDilJsgICAgICAgICDilJcg4pSBIOKUgSDilIEg4pSBIOKUm1xyXG4gICAgICAgICAqXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaWYgKChlbGVtZW50RWRnZUVuZCA+IHNjcm9sbGluZ0VkZ2VFbmQgJiYgZWxlbWVudFNpemUgPCBzY3JvbGxpbmdTaXplKSB8fFxyXG4gICAgICAgICAgICAoZWxlbWVudEVkZ2VTdGFydCA8IHNjcm9sbGluZ0VkZ2VTdGFydCAmJiBlbGVtZW50U2l6ZSA+IHNjcm9sbGluZ1NpemUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50RWRnZUVuZCAtIHNjcm9sbGluZ0VkZ2VFbmQgKyBzY3JvbGxpbmdCb3JkZXJFbmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfTtcclxuICAgIHZhciBjYW5PdmVyZmxvdyA9IGZ1bmN0aW9uIChvdmVyZmxvdykge1xyXG4gICAgICAgIHJldHVybiBvdmVyZmxvdyAhPT0gXCJ2aXNpYmxlXCIgJiYgb3ZlcmZsb3cgIT09IFwiY2xpcFwiO1xyXG4gICAgfTtcclxuICAgIHZhciBnZXRGcmFtZUVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgIGlmICghZWxlbWVudC5vd25lckRvY3VtZW50IHx8ICFlbGVtZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuZnJhbWVFbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdmFyIGlzSGlkZGVuQnlGcmFtZSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgdmFyIGZyYW1lID0gZ2V0RnJhbWVFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgICAgIGlmICghZnJhbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZnJhbWUuY2xpZW50SGVpZ2h0IDwgZWxlbWVudC5zY3JvbGxIZWlnaHQgfHwgZnJhbWUuY2xpZW50V2lkdGggPCBlbGVtZW50LnNjcm9sbFdpZHRoO1xyXG4gICAgfTtcclxuICAgIHZhciBpc1Njcm9sbGFibGUgPSBmdW5jdGlvbiAoZWxlbWVudCwgY29tcHV0ZWRTdHlsZSkge1xyXG4gICAgICAgIGlmIChlbGVtZW50LmNsaWVudEhlaWdodCA8IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0IHx8IGVsZW1lbnQuY2xpZW50V2lkdGggPCBlbGVtZW50LnNjcm9sbFdpZHRoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYW5PdmVyZmxvdyhjb21wdXRlZFN0eWxlLm92ZXJmbG93WSkgfHwgY2FuT3ZlcmZsb3coY29tcHV0ZWRTdHlsZS5vdmVyZmxvd1gpIHx8IGlzSGlkZGVuQnlGcmFtZShlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuICAgIHZhciBwYXJlbnRFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICB2YXIgcGFyZW50Tm9kZSA9IGVsZW1lbnQucGFyZW50Tm9kZTtcclxuICAgICAgICBpZiAocGFyZW50Tm9kZSAhPT0gbnVsbCAmJiBwYXJlbnROb2RlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcmVudE5vZGUuaG9zdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhcmVudE5vZGU7XHJcbiAgICB9O1xyXG4gICAgdmFyIGNsYW1wID0gZnVuY3Rpb24gKHZhbHVlLCB3aWR0aCkge1xyXG4gICAgICAgIGlmICh2YWx1ZSA8IC13aWR0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gLXdpZHRoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodmFsdWUgPiB3aWR0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gd2lkdGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH07XHJcbiAgICB2YXIgaXNDU1NQcm9wZXJ0eVN1cHBvcnRlZCA9IGZ1bmN0aW9uIChwcm9wZXJ0eSkgeyByZXR1cm4gcHJvcGVydHkgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlOyB9O1xyXG4gICAgdmFyIGdldFN1cHBvcnRlZFNjcm9sbE1hcmdpblByb3BlcnR5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIFdlYmtpdCB1c2VzIFwic2Nyb2xsLXNuYXAtbWFyZ2luXCIgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE4OTI2NS5cclxuICAgICAgICByZXR1cm4gW1wic2Nyb2xsLW1hcmdpblwiLCBcInNjcm9sbC1zbmFwLW1hcmdpblwiXS5maWx0ZXIoaXNDU1NQcm9wZXJ0eVN1cHBvcnRlZClbMF07XHJcbiAgICB9O1xyXG4gICAgdmFyIGdldEVsZW1lbnRTY3JvbGxTbmFwQXJlYSA9IGZ1bmN0aW9uIChlbGVtZW50LCBjb21wdXRlZFN0eWxlKSB7XHJcbiAgICAgICAgdmFyIF9hID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgdG9wID0gX2EudG9wLCByaWdodCA9IF9hLnJpZ2h0LCBib3R0b20gPSBfYS5ib3R0b20sIGxlZnQgPSBfYS5sZWZ0O1xyXG4gICAgICAgIHZhciBfYiA9IF9fcmVhZChbXHJcbiAgICAgICAgICAgIFwidG9wXCIsXHJcbiAgICAgICAgICAgIFwicmlnaHRcIixcclxuICAgICAgICAgICAgXCJib3R0b21cIixcclxuICAgICAgICAgICAgXCJsZWZ0XCIsXHJcbiAgICAgICAgXS5tYXAoZnVuY3Rpb24gKGVkZ2UpIHtcclxuICAgICAgICAgICAgdmFyIHNjcm9sbFByb3BlcnR5ID0gZ2V0U3VwcG9ydGVkU2Nyb2xsTWFyZ2luUHJvcGVydHkoKTtcclxuICAgICAgICAgICAgdmFyIHZhbHVlID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKHNjcm9sbFByb3BlcnR5ICsgXCItXCIgKyBlZGdlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCkgfHwgMDtcclxuICAgICAgICB9KSwgNCksIHNjcm9sbE1hcmdpblRvcCA9IF9iWzBdLCBzY3JvbGxNYXJnaW5SaWdodCA9IF9iWzFdLCBzY3JvbGxNYXJnaW5Cb3R0b20gPSBfYlsyXSwgc2Nyb2xsTWFyZ2luTGVmdCA9IF9iWzNdO1xyXG4gICAgICAgIHJldHVybiBbdG9wIC0gc2Nyb2xsTWFyZ2luVG9wLCByaWdodCArIHNjcm9sbE1hcmdpblJpZ2h0LCBib3R0b20gKyBzY3JvbGxNYXJnaW5Cb3R0b20sIGxlZnQgLSBzY3JvbGxNYXJnaW5MZWZ0XTtcclxuICAgIH07XHJcbiAgICB2YXIgZWxlbWVudFNjcm9sbEludG9WaWV3ID0gZnVuY3Rpb24gKGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAoZWxlbWVudC5pc0Nvbm5lY3RlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBPbiBDaHJvbWUgYW5kIEZpcmVmb3gsIGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgd2lsbCByZXR1cm4gdGhlIDxodG1sPiBlbGVtZW50LlxyXG4gICAgICAgIC8vIFNhZmFyaSwgZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCB3aWxsIHJldHVybiB0aGUgPGJvZHk+IGVsZW1lbnQuXHJcbiAgICAgICAgLy8gT24gRWRnZSwgZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCB3aWxsIHJldHVybiB0aGUgPGJvZHk+IGVsZW1lbnQuXHJcbiAgICAgICAgLy8gSUUxMSBkb2VzIG5vdCBzdXBwb3J0IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQsIGJ1dCB5b3UgY2FuIGFzc3VtZSBpdHMgPGh0bWw+LlxyXG4gICAgICAgIC8vIFVzZWQgdG8gaGFuZGxlIHRoZSB0b3AgbW9zdCBlbGVtZW50IHRoYXQgY2FuIGJlIHNjcm9sbGVkXHJcbiAgICAgICAgdmFyIHNjcm9sbGluZ0VsZW1lbnQgPSBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICAgICAgICAvLyBDb2xsZWN0IGFsbCB0aGUgc2Nyb2xsaW5nIGJveGVzLCBhcyBkZWZpbmVkIGluIHRoZSBzcGVjOiBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3Nzb20tdmlldy8jc2Nyb2xsaW5nLWJveFxyXG4gICAgICAgIHZhciBmcmFtZXMgPSBbXTtcclxuICAgICAgICB2YXIgZG9jdW1lbnRFbGVtZW50U3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XHJcbiAgICAgICAgZm9yICh2YXIgY3Vyc29yID0gcGFyZW50RWxlbWVudChlbGVtZW50KTsgY3Vyc29yICE9PSBudWxsOyBjdXJzb3IgPSBwYXJlbnRFbGVtZW50KGN1cnNvcikpIHtcclxuICAgICAgICAgICAgLy8gU3RvcCB3aGVuIHdlIHJlYWNoIHRoZSB2aWV3cG9ydFxyXG4gICAgICAgICAgICBpZiAoY3Vyc29yID09PSBzY3JvbGxpbmdFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBmcmFtZXMucHVzaChjdXJzb3IpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGN1cnNvclN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShjdXJzb3IpO1xyXG4gICAgICAgICAgICAvLyBTa2lwIGRvY3VtZW50LmJvZHkgaWYgaXQncyBub3QgdGhlIHNjcm9sbGluZ0VsZW1lbnQgYW5kIGRvY3VtZW50RWxlbWVudCBpc24ndCBpbmRlcGVuZGVudGx5IHNjcm9sbGFibGVcclxuICAgICAgICAgICAgaWYgKGN1cnNvciA9PT0gZG9jdW1lbnQuYm9keSAmJlxyXG4gICAgICAgICAgICAgICAgaXNTY3JvbGxhYmxlKGN1cnNvciwgY3Vyc29yU3R5bGUpICYmXHJcbiAgICAgICAgICAgICAgICAhaXNTY3JvbGxhYmxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnRFbGVtZW50U3R5bGUpKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBOb3cgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgaXMgc2Nyb2xsYWJsZSxcclxuICAgICAgICAgICAgLy8gdGhpcyBjb2RlIG9ubHkgcnVucyBpZiB0aGUgbG9vcCBoYXZlbid0IGFscmVhZHkgaGl0IHRoZSB2aWV3cG9ydCBvciBhIGN1c3RvbSBib3VuZGFyeVxyXG4gICAgICAgICAgICBpZiAoaXNTY3JvbGxhYmxlKGN1cnNvciwgY3Vyc29yU3R5bGUpKSB7XHJcbiAgICAgICAgICAgICAgICBmcmFtZXMucHVzaChjdXJzb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjdXJzb3JTdHlsZS5wb3NpdGlvbiA9PT0gXCJmaXhlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTdXBwb3J0IHBpbmNoLXpvb21pbmcgcHJvcGVybHksIG1ha2luZyBzdXJlIGVsZW1lbnRzIHNjcm9sbCBpbnRvIHRoZSB2aXN1YWwgdmlld3BvcnRcclxuICAgICAgICAvLyBCcm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgdmlzdWFsVmlld3BvcnRcclxuICAgICAgICAvLyB3aWxsIHJlcG9ydCB0aGUgbGF5b3V0IHZpZXdwb3J0IGRpbWVuc2lvbnMgb24gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoL0hlaWdodFxyXG4gICAgICAgIC8vIGFuZCB2aWV3cG9ydCBkaW1lbnNpb25zIG9uIHdpbmRvdy5pbm5lcldpZHRoL0hlaWdodFxyXG4gICAgICAgIC8vIGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL21vYmlsZS92aWV3cG9ydHMyLmh0bWxcclxuICAgICAgICAvLyBodHRwczovL2Jva2FuZC5naXRodWIuaW8vdmlld3BvcnQvaW5kZXguaHRtbFxyXG4gICAgICAgIHZhciB2aWV3cG9ydFdpZHRoID0gd2luZG93LnZpc3VhbFZpZXdwb3J0ID8gd2luZG93LnZpc3VhbFZpZXdwb3J0LndpZHRoIDogaW5uZXJXaWR0aDtcclxuICAgICAgICB2YXIgdmlld3BvcnRIZWlnaHQgPSB3aW5kb3cudmlzdWFsVmlld3BvcnQgPyB3aW5kb3cudmlzdWFsVmlld3BvcnQuaGVpZ2h0IDogaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgLy8gTmV3ZXIgYnJvd3NlcnMgc3VwcG9ydHMgc2Nyb2xsW1h8WV0sIHBhZ2VbWHxZXU9mZnNldCBpc1xyXG4gICAgICAgIHZhciB2aWV3cG9ydFggPSB3aW5kb3cuc2Nyb2xsWCB8fCB3aW5kb3cucGFnZVhPZmZzZXQ7XHJcbiAgICAgICAgdmFyIHZpZXdwb3J0WSA9IHdpbmRvdy5zY3JvbGxZIHx8IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgICB2YXIgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XHJcbiAgICAgICAgdmFyIF9hID0gX19yZWFkKGdldEVsZW1lbnRTY3JvbGxTbmFwQXJlYShlbGVtZW50LCBjb21wdXRlZFN0eWxlKSwgNCksIHRhcmdldFRvcCA9IF9hWzBdLCB0YXJnZXRSaWdodCA9IF9hWzFdLCB0YXJnZXRCb3R0b20gPSBfYVsyXSwgdGFyZ2V0TGVmdCA9IF9hWzNdO1xyXG4gICAgICAgIHZhciB0YXJnZXRIZWlnaHQgPSB0YXJnZXRCb3R0b20gLSB0YXJnZXRUb3A7XHJcbiAgICAgICAgdmFyIHRhcmdldFdpZHRoID0gdGFyZ2V0UmlnaHQgLSB0YXJnZXRMZWZ0O1xyXG4gICAgICAgIHZhciB3cml0aW5nTW9kZSA9IG5vcm1hbGl6ZVdyaXRpbmdNb2RlKGNvbXB1dGVkU3R5bGUud3JpdGluZ01vZGUgfHxcclxuICAgICAgICAgICAgY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiLXdlYmtpdC13cml0aW5nLW1vZGVcIikgfHxcclxuICAgICAgICAgICAgY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiLW1zLXdyaXRpbmctbW9kZVwiKSk7XHJcbiAgICAgICAgdmFyIGlzTFRSID0gY29tcHV0ZWRTdHlsZS5kaXJlY3Rpb24gIT09IFwicnRsXCI7XHJcbiAgICAgICAgdmFyIF9iID0gX19yZWFkKHRvUGh5c2ljYWxBbGlnbm1lbnQob3B0aW9ucywgd3JpdGluZ01vZGUsIGlzTFRSKSwgMiksIGFsaWduWCA9IF9iWzBdLCBhbGlnblkgPSBfYlsxXTtcclxuICAgICAgICB2YXIgdGFyZ2V0QmxvY2sgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGFsaWduWSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxIC8qIENlbnRlckFsd2F5cyAqLzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0VG9wICsgdGFyZ2V0SGVpZ2h0IC8gMjtcclxuICAgICAgICAgICAgICAgIGNhc2UgMiAvKiBMZWZ0T3JUb3AgKi86XHJcbiAgICAgICAgICAgICAgICBjYXNlIDAgLyogVG9FZGdlSWZOZWVkZWQgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldFRvcDtcclxuICAgICAgICAgICAgICAgIGNhc2UgMyAvKiBSaWdodE9yQm90dG9tICovOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRCb3R0b207XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSgpO1xyXG4gICAgICAgIHZhciB0YXJnZXRJbmxpbmUgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGFsaWduWCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxIC8qIENlbnRlckFsd2F5cyAqLzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0TGVmdCArIHRhcmdldFdpZHRoIC8gMjtcclxuICAgICAgICAgICAgICAgIGNhc2UgMyAvKiBSaWdodE9yQm90dG9tICovOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRSaWdodDtcclxuICAgICAgICAgICAgICAgIGNhc2UgMiAvKiBMZWZ0T3JUb3AgKi86XHJcbiAgICAgICAgICAgICAgICBjYXNlIDAgLyogVG9FZGdlSWZOZWVkZWQgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldExlZnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSgpO1xyXG4gICAgICAgIHZhciBhY3Rpb25zID0gW107XHJcbiAgICAgICAgZnJhbWVzLmZvckVhY2goZnVuY3Rpb24gKGZyYW1lKSB7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IGZyYW1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCBoZWlnaHQgPSBfYS5oZWlnaHQsIHdpZHRoID0gX2Eud2lkdGgsIHRvcCA9IF9hLnRvcCwgcmlnaHQgPSBfYS5yaWdodCwgYm90dG9tID0gX2EuYm90dG9tLCBsZWZ0ID0gX2EubGVmdDtcclxuICAgICAgICAgICAgdmFyIGZyYW1lU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGZyYW1lKTtcclxuICAgICAgICAgICAgdmFyIGJvcmRlckxlZnQgPSBwYXJzZUludChmcmFtZVN0eWxlLmJvcmRlckxlZnRXaWR0aCwgMTApO1xyXG4gICAgICAgICAgICB2YXIgYm9yZGVyVG9wID0gcGFyc2VJbnQoZnJhbWVTdHlsZS5ib3JkZXJUb3BXaWR0aCwgMTApO1xyXG4gICAgICAgICAgICB2YXIgYm9yZGVyUmlnaHQgPSBwYXJzZUludChmcmFtZVN0eWxlLmJvcmRlclJpZ2h0V2lkdGgsIDEwKTtcclxuICAgICAgICAgICAgdmFyIGJvcmRlckJvdHRvbSA9IHBhcnNlSW50KGZyYW1lU3R5bGUuYm9yZGVyQm90dG9tV2lkdGgsIDEwKTtcclxuICAgICAgICAgICAgdmFyIGJsb2NrU2Nyb2xsID0gMDtcclxuICAgICAgICAgICAgdmFyIGlubGluZVNjcm9sbCA9IDA7XHJcbiAgICAgICAgICAgIC8vIFRoZSBwcm9wZXJ0eSBleGlzdGFuY2UgY2hlY2tzIGZvciBvZmZmc2V0W1dpZHRofEhlaWdodF0gaXMgYmVjYXVzZSBvbmx5IEhUTUxFbGVtZW50IG9iamVjdHMgaGF2ZSB0aGVtLFxyXG4gICAgICAgICAgICAvLyBidXQgYW55IEVsZW1lbnQgbWlnaHQgcGFzcyBieSBoZXJlXHJcbiAgICAgICAgICAgIC8vIEBUT0RPIGZpbmQgb3V0IGlmIHRoZSBcImFzIEhUTUxFbGVtZW50XCIgb3ZlcnJpZGVzIGNhbiBiZSBkcm9wcGVkXHJcbiAgICAgICAgICAgIHZhciBzY3JvbGxiYXJXaWR0aCA9IFwib2Zmc2V0V2lkdGhcIiBpbiBmcmFtZVxyXG4gICAgICAgICAgICAgICAgPyBmcmFtZS5vZmZzZXRXaWR0aCAtIGZyYW1lLmNsaWVudFdpZHRoIC0gYm9yZGVyTGVmdCAtIGJvcmRlclJpZ2h0XHJcbiAgICAgICAgICAgICAgICA6IDA7XHJcbiAgICAgICAgICAgIHZhciBzY3JvbGxiYXJIZWlnaHQgPSBcIm9mZnNldEhlaWdodFwiIGluIGZyYW1lXHJcbiAgICAgICAgICAgICAgICA/IGZyYW1lLm9mZnNldEhlaWdodCAtIGZyYW1lLmNsaWVudEhlaWdodCAtIGJvcmRlclRvcCAtIGJvcmRlckJvdHRvbVxyXG4gICAgICAgICAgICAgICAgOiAwO1xyXG4gICAgICAgICAgICBpZiAoc2Nyb2xsaW5nRWxlbWVudCA9PT0gZnJhbWUpIHtcclxuICAgICAgICAgICAgICAgIC8vIEhhbmRsZSB2aWV3cG9ydCBsb2dpYyAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IG9yIGRvY3VtZW50LmJvZHkpXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGFsaWduWSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMiAvKiBMZWZ0T3JUb3AgKi86IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tTY3JvbGwgPSB0YXJnZXRCbG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMyAvKiBSaWdodE9yQm90dG9tICovOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrU2Nyb2xsID0gdGFyZ2V0QmxvY2sgLSB2aWV3cG9ydEhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMSAvKiBDZW50ZXJBbHdheXMgKi86IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tTY3JvbGwgPSB0YXJnZXRCbG9jayAtIHZpZXdwb3J0SGVpZ2h0IC8gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMCAvKiBUb0VkZ2VJZk5lZWRlZCAqLzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja1Njcm9sbCA9IGFsaWduTmVhcmVzdCh2aWV3cG9ydFksIHZpZXdwb3J0WSArIHZpZXdwb3J0SGVpZ2h0LCB2aWV3cG9ydEhlaWdodCwgYm9yZGVyVG9wLCBib3JkZXJCb3R0b20sIHZpZXdwb3J0WSArIHRhcmdldEJsb2NrLCB2aWV3cG9ydFkgKyB0YXJnZXRCbG9jayArIHRhcmdldEhlaWdodCwgdGFyZ2V0SGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChhbGlnblgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDIgLyogTGVmdE9yVG9wICovOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubGluZVNjcm9sbCA9IHRhcmdldElubGluZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMyAvKiBSaWdodE9yQm90dG9tICovOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubGluZVNjcm9sbCA9IHRhcmdldElubGluZSAtIHZpZXdwb3J0V2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDEgLyogQ2VudGVyQWx3YXlzICovOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubGluZVNjcm9sbCA9IHRhcmdldElubGluZSAtIHZpZXdwb3J0V2lkdGggLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwIC8qIFRvRWRnZUlmTmVlZGVkICovOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubGluZVNjcm9sbCA9IGFsaWduTmVhcmVzdCh2aWV3cG9ydFgsIHZpZXdwb3J0WCArIHZpZXdwb3J0V2lkdGgsIHZpZXdwb3J0V2lkdGgsIGJvcmRlckxlZnQsIGJvcmRlclJpZ2h0LCB2aWV3cG9ydFggKyB0YXJnZXRJbmxpbmUsIHZpZXdwb3J0WCArIHRhcmdldElubGluZSArIHRhcmdldFdpZHRoLCB0YXJnZXRXaWR0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJsb2NrU2Nyb2xsICs9IHZpZXdwb3J0WTtcclxuICAgICAgICAgICAgICAgIGlubGluZVNjcm9sbCArPSB2aWV3cG9ydFg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBIYW5kbGUgZWFjaCBzY3JvbGxpbmcgZnJhbWUgdGhhdCBtaWdodCBleGlzdCBiZXR3ZWVuIHRoZSB0YXJnZXQgYW5kIHRoZSB2aWV3cG9ydFxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChhbGlnblkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDIgLyogTGVmdE9yVG9wICovOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrU2Nyb2xsID0gdGFyZ2V0QmxvY2sgLSB0b3AgLSBib3JkZXJUb3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDMgLyogUmlnaHRPckJvdHRvbSAqLzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja1Njcm9sbCA9IHRhcmdldEJsb2NrIC0gYm90dG9tICsgYm9yZGVyQm90dG9tICsgc2Nyb2xsYmFySGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxIC8qIENlbnRlckFsd2F5cyAqLzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja1Njcm9sbCA9IHRhcmdldEJsb2NrIC0gKHRvcCArIGhlaWdodCAvIDIpICsgc2Nyb2xsYmFySGVpZ2h0IC8gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMCAvKiBUb0VkZ2VJZk5lZWRlZCAqLzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja1Njcm9sbCA9IGFsaWduTmVhcmVzdCh0b3AsIGJvdHRvbSwgaGVpZ2h0LCBib3JkZXJUb3AsIGJvcmRlckJvdHRvbSArIHNjcm9sbGJhckhlaWdodCwgdGFyZ2V0QmxvY2ssIHRhcmdldEJsb2NrICsgdGFyZ2V0SGVpZ2h0LCB0YXJnZXRIZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGFsaWduWCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMiAvKiBMZWZ0T3JUb3AgKi86IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5saW5lU2Nyb2xsID0gdGFyZ2V0SW5saW5lIC0gbGVmdCAtIGJvcmRlckxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDMgLyogUmlnaHRPckJvdHRvbSAqLzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmxpbmVTY3JvbGwgPSB0YXJnZXRJbmxpbmUgLSByaWdodCArIGJvcmRlclJpZ2h0ICsgc2Nyb2xsYmFyV2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDEgLyogQ2VudGVyQWx3YXlzICovOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubGluZVNjcm9sbCA9IHRhcmdldElubGluZSAtIChsZWZ0ICsgd2lkdGggLyAyKSArIHNjcm9sbGJhcldpZHRoIC8gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMCAvKiBUb0VkZ2VJZk5lZWRlZCAqLzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmxpbmVTY3JvbGwgPSBhbGlnbk5lYXJlc3QobGVmdCwgcmlnaHQsIHdpZHRoLCBib3JkZXJMZWZ0LCBib3JkZXJSaWdodCArIHNjcm9sbGJhcldpZHRoLCB0YXJnZXRJbmxpbmUsIHRhcmdldElubGluZSArIHRhcmdldFdpZHRoLCB0YXJnZXRXaWR0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBzY3JvbGxMZWZ0ID0gZnJhbWUuc2Nyb2xsTGVmdCwgc2Nyb2xsVG9wID0gZnJhbWUuc2Nyb2xsVG9wO1xyXG4gICAgICAgICAgICAgICAgLy8gRW5zdXJlIHNjcm9sbCBjb29yZGluYXRlcyBhcmUgbm90IG91dCBvZiBib3VuZHMgd2hpbGUgYXBwbHlpbmcgc2Nyb2xsIG9mZnNldHNcclxuICAgICAgICAgICAgICAgIGJsb2NrU2Nyb2xsID0gY2xhbXAoc2Nyb2xsVG9wICsgYmxvY2tTY3JvbGwsIGZyYW1lLnNjcm9sbEhlaWdodCAtIGhlaWdodCArIHNjcm9sbGJhckhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICBpbmxpbmVTY3JvbGwgPSBjbGFtcChzY3JvbGxMZWZ0ICsgaW5saW5lU2Nyb2xsLCBmcmFtZS5zY3JvbGxXaWR0aCAtIHdpZHRoICsgc2Nyb2xsYmFyV2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgLy8gQ2FjaGUgdGhlIG9mZnNldCBzbyB0aGF0IHBhcmVudCBmcmFtZXMgY2FuIHNjcm9sbCB0aGlzIGludG8gdmlldyBjb3JyZWN0bHlcclxuICAgICAgICAgICAgICAgIHRhcmdldEJsb2NrICs9IHNjcm9sbFRvcCAtIGJsb2NrU2Nyb2xsO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0SW5saW5lICs9IHNjcm9sbExlZnQgLSBpbmxpbmVTY3JvbGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYWN0aW9ucy5wdXNoKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGVsZW1lbnRTY3JvbGwoZnJhbWUsIF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb25zKSwgeyB0b3A6IGJsb2NrU2Nyb2xsLCBsZWZ0OiBpbmxpbmVTY3JvbGwgfSkpOyB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBhY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKHJ1bikgeyByZXR1cm4gcnVuKCk7IH0pO1xyXG4gICAgfTtcclxuICAgIHZhciBlbGVtZW50U2Nyb2xsSW50b1ZpZXdQb2x5ZmlsbCA9IGZ1bmN0aW9uIChhbmltYXRpb25PcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKGlzU2Nyb2xsQmVoYXZpb3JTdXBwb3J0ZWQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBvcmlnaW5hbEZ1bmMgPSBvcmlnaW5hbC5lbGVtZW50U2Nyb2xsSW50b1ZpZXc7XHJcbiAgICAgICAgbW9kaWZ5UHJvdG90eXBlcyhmdW5jdGlvbiAocHJvdG90eXBlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAocHJvdG90eXBlLnNjcm9sbEludG9WaWV3ID0gZnVuY3Rpb24gc2Nyb2xsSW50b1ZpZXcoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsSW50b1ZpZXdPcHRpb25zID0gYXJndW1lbnRzWzBdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgaXNPYmplY3Qoc2Nyb2xsSW50b1ZpZXdPcHRpb25zKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50U2Nyb2xsSW50b1ZpZXcodGhpcywgX19hc3NpZ24oX19hc3NpZ24oe30sIHNjcm9sbEludG9WaWV3T3B0aW9ucyksIGFuaW1hdGlvbk9wdGlvbnMpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbEZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xuXG4gICAgdmFyIGVsZW1lbnRTY3JvbGxUb1BvbHlmaWxsID0gZnVuY3Rpb24gKGFuaW1hdGlvbk9wdGlvbnMpIHtcclxuICAgICAgICBpZiAoaXNTY3JvbGxCZWhhdmlvclN1cHBvcnRlZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG9yaWdpbmFsRnVuYyA9IG9yaWdpbmFsLmVsZW1lbnRTY3JvbGw7XHJcbiAgICAgICAgbW9kaWZ5UHJvdG90eXBlcyhmdW5jdGlvbiAocHJvdG90eXBlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAocHJvdG90eXBlLnNjcm9sbFRvID0gZnVuY3Rpb24gc2Nyb2xsVG8oKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzY3JvbGxUb09wdGlvbnMgPSBhcmd1bWVudHNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc09iamVjdChzY3JvbGxUb09wdGlvbnMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGYWlsZWQgdG8gZXhlY3V0ZSAnc2Nyb2xsVG8nIG9uICdFbGVtZW50JzogcGFyYW1ldGVyIDEgKCdvcHRpb25zJykgaXMgbm90IGFuIG9iamVjdC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsZWZ0ID0gTnVtYmVyKHNjcm9sbFRvT3B0aW9ucy5sZWZ0KTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdG9wXzEgPSBOdW1iZXIoc2Nyb2xsVG9PcHRpb25zLnRvcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRTY3JvbGwodGhpcywgX19hc3NpZ24oX19hc3NpZ24oX19hc3NpZ24oe30sIHNjcm9sbFRvT3B0aW9ucyksIHsgbGVmdDogbGVmdCwgdG9wOiB0b3BfMSB9KSwgYW5pbWF0aW9uT3B0aW9ucykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsRnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XG5cbiAgICB2YXIgd2luZG93U2Nyb2xsID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgX2EsIF9iO1xyXG4gICAgICAgIHZhciBvcmlnaW5hbEJvdW5kRnVuYyA9IG9yaWdpbmFsLndpbmRvd1Njcm9sbC5iaW5kKHdpbmRvdyk7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMubGVmdCA9PT0gdW5kZWZpbmVkICYmIG9wdGlvbnMudG9wID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc3RhcnRYID0gd2luZG93LnNjcm9sbFggfHwgd2luZG93LnBhZ2VYT2Zmc2V0O1xyXG4gICAgICAgIHZhciBzdGFydFkgPSB3aW5kb3cuc2Nyb2xsWSB8fCB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICAgICAgdmFyIHRhcmdldFggPSBub25GaW5pdGUoKF9hID0gb3B0aW9ucy5sZWZ0KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBzdGFydFgpO1xyXG4gICAgICAgIHZhciB0YXJnZXRZID0gbm9uRmluaXRlKChfYiA9IG9wdGlvbnMudG9wKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBzdGFydFkpO1xyXG4gICAgICAgIGlmIChvcHRpb25zLmJlaGF2aW9yICE9PSBcInNtb290aFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbEJvdW5kRnVuYyh0YXJnZXRYLCB0YXJnZXRZKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgY2FuY2VsU2Nyb2xsKTtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgY2FuY2VsU2Nyb2xsKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBjb250ZXh0ID0ge1xyXG4gICAgICAgICAgICB0aW1lU3RhbXA6IG5vdygpLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogb3B0aW9ucy5kdXJhdGlvbixcclxuICAgICAgICAgICAgc3RhcnRYOiBzdGFydFgsXHJcbiAgICAgICAgICAgIHN0YXJ0WTogc3RhcnRZLFxyXG4gICAgICAgICAgICB0YXJnZXRYOiB0YXJnZXRYLFxyXG4gICAgICAgICAgICB0YXJnZXRZOiB0YXJnZXRZLFxyXG4gICAgICAgICAgICByYWZJZDogMCxcclxuICAgICAgICAgICAgbWV0aG9kOiBvcmlnaW5hbEJvdW5kRnVuYyxcclxuICAgICAgICAgICAgdGltaW5nRnVuYzogb3B0aW9ucy50aW1pbmdGdW5jLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogcmVtb3ZlRXZlbnRMaXN0ZW5lcixcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBjYW5jZWxTY3JvbGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGNvbnRleHQucmFmSWQpO1xyXG4gICAgICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIGNhbmNlbFNjcm9sbCwge1xyXG4gICAgICAgICAgICBwYXNzaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICBvbmNlOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGNhbmNlbFNjcm9sbCwge1xyXG4gICAgICAgICAgICBwYXNzaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICBvbmNlOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHN0ZXAoY29udGV4dCk7XHJcbiAgICB9O1xyXG4gICAgdmFyIHdpbmRvd1Njcm9sbFBvbHlmaWxsID0gZnVuY3Rpb24gKGFuaW1hdGlvbk9wdGlvbnMpIHtcclxuICAgICAgICBpZiAoaXNTY3JvbGxCZWhhdmlvclN1cHBvcnRlZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG9yaWdpbmFsRnVuYyA9IG9yaWdpbmFsLndpbmRvd1Njcm9sbDtcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsID0gZnVuY3Rpb24gc2Nyb2xsKCkge1xyXG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNjcm9sbE9wdGlvbnMgPSBhcmd1bWVudHNbMF07XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzT2JqZWN0KHNjcm9sbE9wdGlvbnMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBleGVjdXRlICdzY3JvbGwnIG9uICdXaW5kb3cnOiBwYXJhbWV0ZXIgMSAoJ29wdGlvbnMnKSBpcyBub3QgYW4gb2JqZWN0LlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3dTY3JvbGwoX19hc3NpZ24oX19hc3NpZ24oe30sIHNjcm9sbE9wdGlvbnMpLCBhbmltYXRpb25PcHRpb25zKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsRnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xuXG4gICAgdmFyIHdpbmRvd1Njcm9sbEJ5ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgbGVmdCA9IG5vbkZpbml0ZShvcHRpb25zLmxlZnQgfHwgMCkgKyAod2luZG93LnNjcm9sbFggfHwgd2luZG93LnBhZ2VYT2Zmc2V0KTtcclxuICAgICAgICB2YXIgdG9wID0gbm9uRmluaXRlKG9wdGlvbnMudG9wIHx8IDApICsgKHdpbmRvdy5zY3JvbGxZIHx8IHdpbmRvdy5wYWdlWU9mZnNldCk7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMuYmVoYXZpb3IgIT09IFwic21vb3RoXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsLndpbmRvd1Njcm9sbC5jYWxsKHdpbmRvdywgbGVmdCwgdG9wKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvd1Njcm9sbChfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsgbGVmdDogbGVmdCwgdG9wOiB0b3AgfSkpO1xyXG4gICAgfTtcclxuICAgIHZhciB3aW5kb3dTY3JvbGxCeVBvbHlmaWxsID0gZnVuY3Rpb24gKGFuaW1hdGlvbk9wdGlvbnMpIHtcclxuICAgICAgICBpZiAoaXNTY3JvbGxCZWhhdmlvclN1cHBvcnRlZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93LnNjcm9sbEJ5ID0gZnVuY3Rpb24gc2Nyb2xsQnkoKSB7XHJcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsQnlPcHRpb25zID0gYXJndW1lbnRzWzBdO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpc09iamVjdChzY3JvbGxCeU9wdGlvbnMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBleGVjdXRlICdzY3JvbGxCeScgb24gJ1dpbmRvdyc6IHBhcmFtZXRlciAxICgnb3B0aW9ucycpIGlzIG5vdCBhbiBvYmplY3QuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvd1Njcm9sbEJ5KF9fYXNzaWduKF9fYXNzaWduKHt9LCBzY3JvbGxCeU9wdGlvbnMpLCBhbmltYXRpb25PcHRpb25zKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGxlZnQgPSBOdW1iZXIoYXJndW1lbnRzWzBdKTtcclxuICAgICAgICAgICAgdmFyIHRvcCA9IE51bWJlcihhcmd1bWVudHNbMV0pO1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93U2Nyb2xsQnkoeyBsZWZ0OiBsZWZ0LCB0b3A6IHRvcCB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcblxuICAgIHZhciB3aW5kb3dTY3JvbGxUb1BvbHlmaWxsID0gZnVuY3Rpb24gKGFuaW1hdGlvbk9wdGlvbnMpIHtcclxuICAgICAgICBpZiAoaXNTY3JvbGxCZWhhdmlvclN1cHBvcnRlZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG9yaWdpbmFsRnVuYyA9IG9yaWdpbmFsLndpbmRvd1Njcm9sbDtcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8gPSBmdW5jdGlvbiBzY3JvbGxUbygpIHtcclxuICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzY3JvbGxUb09wdGlvbnMgPSBhcmd1bWVudHNbMF07XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzT2JqZWN0KHNjcm9sbFRvT3B0aW9ucykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGV4ZWN1dGUgJ3Njcm9sbFRvJyBvbiAnV2luZG93JzogcGFyYW1ldGVyIDEgKCdvcHRpb25zJykgaXMgbm90IGFuIG9iamVjdC5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgbGVmdCA9IE51bWJlcihzY3JvbGxUb09wdGlvbnMubGVmdCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG9wXzEgPSBOdW1iZXIoc2Nyb2xsVG9PcHRpb25zLnRvcCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93U2Nyb2xsKF9fYXNzaWduKF9fYXNzaWduKF9fYXNzaWduKHt9LCBzY3JvbGxUb09wdGlvbnMpLCB7IGxlZnQ6IGxlZnQsIHRvcDogdG9wXzEgfSksIGFuaW1hdGlvbk9wdGlvbnMpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxGdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgfTtcclxuICAgIH07XG5cbiAgICB2YXIgcG9seWZpbGwgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgICAgIGlmIChpc1Njcm9sbEJlaGF2aW9yU3VwcG9ydGVkKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3dTY3JvbGxQb2x5ZmlsbChvcHRpb25zKTtcclxuICAgICAgICB3aW5kb3dTY3JvbGxUb1BvbHlmaWxsKG9wdGlvbnMpO1xyXG4gICAgICAgIHdpbmRvd1Njcm9sbEJ5UG9seWZpbGwob3B0aW9ucyk7XHJcbiAgICAgICAgZWxlbWVudFNjcm9sbFBvbHlmaWxsKG9wdGlvbnMpO1xyXG4gICAgICAgIGVsZW1lbnRTY3JvbGxUb1BvbHlmaWxsKG9wdGlvbnMpO1xyXG4gICAgICAgIGVsZW1lbnRTY3JvbGxCeVBvbHlmaWxsKG9wdGlvbnMpO1xyXG4gICAgICAgIGVsZW1lbnRTY3JvbGxJbnRvVmlld1BvbHlmaWxsKG9wdGlvbnMpO1xyXG4gICAgfTtcblxuICAgIGV4cG9ydHMuZWxlbWVudFNjcm9sbCA9IGVsZW1lbnRTY3JvbGw7XG4gICAgZXhwb3J0cy5lbGVtZW50U2Nyb2xsQnkgPSBlbGVtZW50U2Nyb2xsQnk7XG4gICAgZXhwb3J0cy5lbGVtZW50U2Nyb2xsQnlQb2x5ZmlsbCA9IGVsZW1lbnRTY3JvbGxCeVBvbHlmaWxsO1xuICAgIGV4cG9ydHMuZWxlbWVudFNjcm9sbEludG9WaWV3ID0gZWxlbWVudFNjcm9sbEludG9WaWV3O1xuICAgIGV4cG9ydHMuZWxlbWVudFNjcm9sbEludG9WaWV3UG9seWZpbGwgPSBlbGVtZW50U2Nyb2xsSW50b1ZpZXdQb2x5ZmlsbDtcbiAgICBleHBvcnRzLmVsZW1lbnRTY3JvbGxQb2x5ZmlsbCA9IGVsZW1lbnRTY3JvbGxQb2x5ZmlsbDtcbiAgICBleHBvcnRzLmVsZW1lbnRTY3JvbGxUbyA9IGVsZW1lbnRTY3JvbGw7XG4gICAgZXhwb3J0cy5lbGVtZW50U2Nyb2xsVG9Qb2x5ZmlsbCA9IGVsZW1lbnRTY3JvbGxUb1BvbHlmaWxsO1xuICAgIGV4cG9ydHMucG9seWZpbGwgPSBwb2x5ZmlsbDtcbiAgICBleHBvcnRzLnNlYW1sZXNzID0gcG9seWZpbGw7XG4gICAgZXhwb3J0cy53aW5kb3dTY3JvbGwgPSB3aW5kb3dTY3JvbGw7XG4gICAgZXhwb3J0cy53aW5kb3dTY3JvbGxCeSA9IHdpbmRvd1Njcm9sbEJ5O1xuICAgIGV4cG9ydHMud2luZG93U2Nyb2xsQnlQb2x5ZmlsbCA9IHdpbmRvd1Njcm9sbEJ5UG9seWZpbGw7XG4gICAgZXhwb3J0cy53aW5kb3dTY3JvbGxQb2x5ZmlsbCA9IHdpbmRvd1Njcm9sbFBvbHlmaWxsO1xuICAgIGV4cG9ydHMud2luZG93U2Nyb2xsVG8gPSB3aW5kb3dTY3JvbGw7XG4gICAgZXhwb3J0cy53aW5kb3dTY3JvbGxUb1BvbHlmaWxsID0gd2luZG93U2Nyb2xsVG9Qb2x5ZmlsbDtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbn0pKSk7XG5cbn19KS5jYWxsKCdvYmplY3QnID09PSB0eXBlb2Ygd2luZG93ICYmIHdpbmRvdyB8fCAnb2JqZWN0JyA9PT0gdHlwZW9mIHNlbGYgJiYgc2VsZiB8fCAnb2JqZWN0JyA9PT0gdHlwZW9mIGdsb2JhbCAmJiBnbG9iYWwgfHwge30pO1xuIiwgIihmdW5jdGlvbih1bmRlZmluZWQpIHtcbmlmICghKChmdW5jdGlvbihuKXtpZighKFwiRXZlbnRcImluIG4pKXJldHVybiExXG50cnl7cmV0dXJuIG5ldyBFdmVudChcImNsaWNrXCIpLCEwfWNhdGNoKG4pe3JldHVybiExfX0pKHNlbGYpXG4pKSB7XG4vLyBFdmVudFxuKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGhpcyBwb2x5ZmlsbCBkZXBlbmRzIG9uIGF2YWlsYWJpbGl0eSBvZiBgZG9jdW1lbnRgIHNvIHdpbGwgbm90IHJ1biBpbiBhIHdvcmtlclxuXHQvLyBIb3dldmVyLCB3ZSBhc3NzdW1lIHRoZXJlIGFyZSBubyBicm93c2VycyB3aXRoIHdvcmtlciBzdXBwb3J0IHRoYXQgbGFjayBwcm9wZXJcblx0Ly8gc3VwcG9ydCBmb3IgYEV2ZW50YCB3aXRoaW4gdGhlIHdvcmtlclxuXHRpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuXG5cdHZhciBleGlzdGluZ1Byb3RvID0gKHdpbmRvdy5FdmVudCAmJiB3aW5kb3cuRXZlbnQucHJvdG90eXBlKSB8fCBudWxsO1xuXHRmdW5jdGlvbiBFdmVudCh0eXBlLCBldmVudEluaXREaWN0KSB7XG5cdFx0aWYgKCF0eXBlKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ05vdCBlbm91Z2ggYXJndW1lbnRzJyk7XG5cdFx0fVxuXG5cdFx0dmFyIGV2ZW50O1xuXHRcdC8vIFNob3J0Y3V0IGlmIGJyb3dzZXIgc3VwcG9ydHMgY3JlYXRlRXZlbnRcblx0XHRpZiAoJ2NyZWF0ZUV2ZW50JyBpbiBkb2N1bWVudCkge1xuXHRcdFx0ZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcblx0XHRcdHZhciBidWJibGVzID0gZXZlbnRJbml0RGljdCAmJiBldmVudEluaXREaWN0LmJ1YmJsZXMgIT09IHVuZGVmaW5lZCA/IGV2ZW50SW5pdERpY3QuYnViYmxlcyA6IGZhbHNlO1xuXHRcdFx0dmFyIGNhbmNlbGFibGUgPSBldmVudEluaXREaWN0ICYmIGV2ZW50SW5pdERpY3QuY2FuY2VsYWJsZSAhPT0gdW5kZWZpbmVkID8gZXZlbnRJbml0RGljdC5jYW5jZWxhYmxlIDogZmFsc2U7XG5cblx0XHRcdGV2ZW50LmluaXRFdmVudCh0eXBlLCBidWJibGVzLCBjYW5jZWxhYmxlKTtcblxuXHRcdFx0cmV0dXJuIGV2ZW50O1xuXHRcdH1cblxuXHRcdGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnRPYmplY3QoKTtcblxuXHRcdGV2ZW50LnR5cGUgPSB0eXBlO1xuXHRcdGV2ZW50LmJ1YmJsZXMgPSBldmVudEluaXREaWN0ICYmIGV2ZW50SW5pdERpY3QuYnViYmxlcyAhPT0gdW5kZWZpbmVkID8gZXZlbnRJbml0RGljdC5idWJibGVzIDogZmFsc2U7XG5cdFx0ZXZlbnQuY2FuY2VsYWJsZSA9IGV2ZW50SW5pdERpY3QgJiYgZXZlbnRJbml0RGljdC5jYW5jZWxhYmxlICE9PSB1bmRlZmluZWQgPyBldmVudEluaXREaWN0LmNhbmNlbGFibGUgOiBmYWxzZTtcblxuXHRcdHJldHVybiBldmVudDtcblx0fVxuXHRFdmVudC5OT05FID0gMDtcblx0RXZlbnQuQ0FQVFVSSU5HX1BIQVNFID0gMTtcblx0RXZlbnQuQVRfVEFSR0VUID0gMjtcblx0RXZlbnQuQlVCQkxJTkdfUEhBU0UgPSAzO1xuXHR3aW5kb3cuRXZlbnQgPSBXaW5kb3cucHJvdG90eXBlLkV2ZW50ID0gRXZlbnQ7XG5cdGlmIChleGlzdGluZ1Byb3RvKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdy5FdmVudCwgJ3Byb3RvdHlwZScsIHtcblx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG5cdFx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0XHRcdHdyaXRhYmxlOiB0cnVlLFxuXHRcdFx0dmFsdWU6IGV4aXN0aW5nUHJvdG9cblx0XHR9KTtcblx0fVxuXG5cdGlmICghKCdjcmVhdGVFdmVudCcgaW4gZG9jdW1lbnQpKSB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIgPSBXaW5kb3cucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBEb2N1bWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IEVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKCkge1xuXHRcdFx0dmFyXG5cdFx0XHRlbGVtZW50ID0gdGhpcyxcblx0XHRcdHR5cGUgPSBhcmd1bWVudHNbMF0sXG5cdFx0XHRsaXN0ZW5lciA9IGFyZ3VtZW50c1sxXTtcblxuXHRcdFx0aWYgKCFlbGVtZW50Ll9ldmVudHMpIHtcblx0XHRcdFx0ZWxlbWVudC5fZXZlbnRzID0ge307XG5cdFx0XHR9XG5cblx0XHRcdGlmICghZWxlbWVudC5fZXZlbnRzW3R5cGVdKSB7XG5cdFx0XHRcdGVsZW1lbnQuX2V2ZW50c1t0eXBlXSA9IGZ1bmN0aW9uIChldmVudCkge1xuXHRcdFx0XHRcdHZhclxuXHRcdFx0XHRcdGxpc3QgPSBlbGVtZW50Ll9ldmVudHNbZXZlbnQudHlwZV0ubGlzdCxcblx0XHRcdFx0XHRldmVudHMgPSBsaXN0LnNsaWNlKCksXG5cdFx0XHRcdFx0aW5kZXggPSAtMSxcblx0XHRcdFx0XHRsZW5ndGggPSBldmVudHMubGVuZ3RoLFxuXHRcdFx0XHRcdGV2ZW50RWxlbWVudDtcblxuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24gcHJldmVudERlZmF1bHQoKSB7XG5cdFx0XHRcdFx0XHRpZiAoZXZlbnQuY2FuY2VsYWJsZSAhPT0gZmFsc2UpIHtcblx0XHRcdFx0XHRcdFx0ZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uID0gZnVuY3Rpb24gc3RvcFByb3BhZ2F0aW9uKCkge1xuXHRcdFx0XHRcdFx0ZXZlbnQuY2FuY2VsQnViYmxlID0gdHJ1ZTtcblx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0ZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uID0gZnVuY3Rpb24gc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCkge1xuXHRcdFx0XHRcdFx0ZXZlbnQuY2FuY2VsQnViYmxlID0gdHJ1ZTtcblx0XHRcdFx0XHRcdGV2ZW50LmNhbmNlbEltbWVkaWF0ZSA9IHRydWU7XG5cdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdGV2ZW50LmN1cnJlbnRUYXJnZXQgPSBlbGVtZW50O1xuXHRcdFx0XHRcdGV2ZW50LnJlbGF0ZWRUYXJnZXQgPSBldmVudC5mcm9tRWxlbWVudCB8fCBudWxsO1xuXHRcdFx0XHRcdGV2ZW50LnRhcmdldCA9IGV2ZW50LnRhcmdldCB8fCBldmVudC5zcmNFbGVtZW50IHx8IGVsZW1lbnQ7XG5cdFx0XHRcdFx0ZXZlbnQudGltZVN0YW1wID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cblx0XHRcdFx0XHRpZiAoZXZlbnQuY2xpZW50WCkge1xuXHRcdFx0XHRcdFx0ZXZlbnQucGFnZVggPSBldmVudC5jbGllbnRYICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQ7XG5cdFx0XHRcdFx0XHRldmVudC5wYWdlWSA9IGV2ZW50LmNsaWVudFkgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoICYmICFldmVudC5jYW5jZWxJbW1lZGlhdGUpIHtcblx0XHRcdFx0XHRcdGlmIChpbmRleCBpbiBldmVudHMpIHtcblx0XHRcdFx0XHRcdFx0ZXZlbnRFbGVtZW50ID0gZXZlbnRzW2luZGV4XTtcblxuXHRcdFx0XHRcdFx0XHRpZiAobGlzdC5pbmNsdWRlcyhldmVudEVsZW1lbnQpICYmIHR5cGVvZiBldmVudEVsZW1lbnQgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRcdFx0XHRldmVudEVsZW1lbnQuY2FsbChlbGVtZW50LCBldmVudCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0ZWxlbWVudC5fZXZlbnRzW3R5cGVdLmxpc3QgPSBbXTtcblxuXHRcdFx0XHRpZiAoZWxlbWVudC5hdHRhY2hFdmVudCkge1xuXHRcdFx0XHRcdGVsZW1lbnQuYXR0YWNoRXZlbnQoJ29uJyArIHR5cGUsIGVsZW1lbnQuX2V2ZW50c1t0eXBlXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0ZWxlbWVudC5fZXZlbnRzW3R5cGVdLmxpc3QucHVzaChsaXN0ZW5lcik7XG5cdFx0fTtcblxuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyID0gV2luZG93LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gRG9jdW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcigpIHtcblx0XHRcdHZhclxuXHRcdFx0ZWxlbWVudCA9IHRoaXMsXG5cdFx0XHR0eXBlID0gYXJndW1lbnRzWzBdLFxuXHRcdFx0bGlzdGVuZXIgPSBhcmd1bWVudHNbMV0sXG5cdFx0XHRpbmRleDtcblxuXHRcdFx0aWYgKGVsZW1lbnQuX2V2ZW50cyAmJiBlbGVtZW50Ll9ldmVudHNbdHlwZV0gJiYgZWxlbWVudC5fZXZlbnRzW3R5cGVdLmxpc3QpIHtcblx0XHRcdFx0aW5kZXggPSBlbGVtZW50Ll9ldmVudHNbdHlwZV0ubGlzdC5pbmRleE9mKGxpc3RlbmVyKTtcblxuXHRcdFx0XHRpZiAoaW5kZXggIT09IC0xKSB7XG5cdFx0XHRcdFx0ZWxlbWVudC5fZXZlbnRzW3R5cGVdLmxpc3Quc3BsaWNlKGluZGV4LCAxKTtcblxuXHRcdFx0XHRcdGlmICghZWxlbWVudC5fZXZlbnRzW3R5cGVdLmxpc3QubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRpZiAoZWxlbWVudC5kZXRhY2hFdmVudCkge1xuXHRcdFx0XHRcdFx0XHRlbGVtZW50LmRldGFjaEV2ZW50KCdvbicgKyB0eXBlLCBlbGVtZW50Ll9ldmVudHNbdHlwZV0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZGVsZXRlIGVsZW1lbnQuX2V2ZW50c1t0eXBlXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0d2luZG93LmRpc3BhdGNoRXZlbnQgPSBXaW5kb3cucHJvdG90eXBlLmRpc3BhdGNoRXZlbnQgPSBEb2N1bWVudC5wcm90b3R5cGUuZGlzcGF0Y2hFdmVudCA9IEVsZW1lbnQucHJvdG90eXBlLmRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KGV2ZW50KSB7XG5cdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdOb3QgZW5vdWdoIGFyZ3VtZW50cycpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWV2ZW50IHx8IHR5cGVvZiBldmVudC50eXBlICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0RPTSBFdmVudHMgRXhjZXB0aW9uIDAnKTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGVsZW1lbnQgPSB0aGlzLCB0eXBlID0gZXZlbnQudHlwZTtcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aWYgKCFldmVudC5idWJibGVzKSB7XG5cdFx0XHRcdFx0ZXZlbnQuY2FuY2VsQnViYmxlID0gdHJ1ZTtcblxuXHRcdFx0XHRcdHZhciBjYW5jZWxCdWJibGVFdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xuXHRcdFx0XHRcdFx0ZXZlbnQuY2FuY2VsQnViYmxlID0gdHJ1ZTtcblxuXHRcdFx0XHRcdFx0KGVsZW1lbnQgfHwgd2luZG93KS5kZXRhY2hFdmVudCgnb24nICsgdHlwZSwgY2FuY2VsQnViYmxlRXZlbnQpO1xuXHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHR0aGlzLmF0dGFjaEV2ZW50KCdvbicgKyB0eXBlLCBjYW5jZWxCdWJibGVFdmVudCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLmZpcmVFdmVudCgnb24nICsgdHlwZSwgZXZlbnQpO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0ZXZlbnQudGFyZ2V0ID0gZWxlbWVudDtcblxuXHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0ZXZlbnQuY3VycmVudFRhcmdldCA9IGVsZW1lbnQ7XG5cblx0XHRcdFx0XHRpZiAoJ19ldmVudHMnIGluIGVsZW1lbnQgJiYgdHlwZW9mIGVsZW1lbnQuX2V2ZW50c1t0eXBlXSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdFx0ZWxlbWVudC5fZXZlbnRzW3R5cGVdLmNhbGwoZWxlbWVudCwgZXZlbnQpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICh0eXBlb2YgZWxlbWVudFsnb24nICsgdHlwZV0gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRcdGVsZW1lbnRbJ29uJyArIHR5cGVdLmNhbGwoZWxlbWVudCwgZXZlbnQpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGVsZW1lbnQgPSBlbGVtZW50Lm5vZGVUeXBlID09PSA5ID8gZWxlbWVudC5wYXJlbnRXaW5kb3cgOiBlbGVtZW50LnBhcmVudE5vZGU7XG5cdFx0XHRcdH0gd2hpbGUgKGVsZW1lbnQgJiYgIWV2ZW50LmNhbmNlbEJ1YmJsZSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH07XG5cblx0XHQvLyBBZGQgdGhlIERPTUNvbnRlbnRMb2FkZWQgRXZlbnRcblx0XHRkb2N1bWVudC5hdHRhY2hFdmVudCgnb25yZWFkeXN0YXRlY2hhbmdlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuXHRcdFx0XHRkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnRE9NQ29udGVudExvYWRlZCcsIHtcblx0XHRcdFx0XHRidWJibGVzOiB0cnVlXG5cdFx0XHRcdH0pKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufSgpKTtcbn19KS5jYWxsKCdvYmplY3QnID09PSB0eXBlb2Ygd2luZG93ICYmIHdpbmRvdyB8fCAnb2JqZWN0JyA9PT0gdHlwZW9mIHNlbGYgJiYgc2VsZiB8fCAnb2JqZWN0JyA9PT0gdHlwZW9mIGdsb2JhbCAmJiBnbG9iYWwgfHwge30pO1xuIiwgIihmdW5jdGlvbih1bmRlZmluZWQpIHtcbmlmICghKFwibWF0Y2hNZWRpYVwiaW4gc2VsZiYmXCJNZWRpYVF1ZXJ5TGlzdFwiaW4gc2VsZlxuKSkge1xuLy8gbWF0Y2hNZWRpYVxuKGZ1bmN0aW9uKCkge1xuXHRcInVzZSBzdHJpY3RcIjtcblxuXHQvLyBGb3IgYnJvd3NlcnMgdGhhdCBzdXBwb3J0IG1hdGNoTWVkaXVtIGFwaSBzdWNoIGFzIElFIDkgYW5kIHdlYmtpdFxuXHR2YXIgc3R5bGVNZWRpYSA9IChzZWxmLnN0eWxlTWVkaWEgfHwgc2VsZi5tZWRpYSk7XG5cblx0Ly8gRm9yIHRob3NlIHRoYXQgZG9uJ3Qgc3VwcG9ydCBtYXRjaE1lZGl1bVxuXHRpZiAoIXN0eWxlTWVkaWEpIHtcblx0XHR2YXIgc3R5bGUgICAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpLFxuXHRcdFx0c2NyaXB0ICAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF0sXG5cdFx0XHRpbmZvICAgICAgICA9IG51bGw7XG5cblx0XHRzdHlsZS50eXBlICA9ICd0ZXh0L2Nzcyc7XG5cdFx0c3R5bGUuaWQgICAgPSAnbWF0Y2htZWRpYWpzLXRlc3QnO1xuXG5cdFx0aWYgKCFzY3JpcHQpIHtcblx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9IGVsc2Uge1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzdHlsZSwgc2NyaXB0KTtcblx0XHR9XG5cblx0XHRpbmZvID0gKCdnZXRDb21wdXRlZFN0eWxlJyBpbiBzZWxmKSAmJiBzZWxmLmdldENvbXB1dGVkU3R5bGUoc3R5bGUsIG51bGwpO1xuXG5cdFx0c3R5bGVNZWRpYSA9IHtcblx0XHRcdG1hdGNoTWVkaXVtOiBmdW5jdGlvbihtZWRpYSkge1xuXHRcdFx0XHRtZWRpYSA9IG1lZGlhLnJlcGxhY2UoL15vbmx5XFxzKy8sICcnKTtcblx0XHRcdFx0dmFyIHRleHQgPSAnQG1lZGlhICcgKyBtZWRpYSArICd7ICNtYXRjaG1lZGlhanMtdGVzdCB7IHdpZHRoOiAxcHg7IH0gfSc7XG5cblx0XHRcdFx0c3R5bGUudGV4dENvbnRlbnQgPSB0ZXh0O1xuXG5cdFx0XHRcdC8vIFRlc3QgaWYgbWVkaWEgcXVlcnkgaXMgdHJ1ZSBvciBmYWxzZVxuXHRcdFx0XHRyZXR1cm4gaW5mby53aWR0aCA9PT0gJzFweCc7XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxuXHRmdW5jdGlvbiBNZWRpYVF1ZXJ5TGlzdCgpIHtcblx0XHR0aGlzLm1hdGNoZXMgPSBmYWxzZTtcblx0XHR0aGlzLm1lZGlhID0gJ2ludmFsaWQnO1xuXHRcdHRoaXMubGlzdGVuZXJzID0gW107XG5cdH1cblxuXHRNZWRpYVF1ZXJ5TGlzdC5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcihsaXN0ZW5lcikge1xuXHRcdHZhciBsaXN0ZW5lckluZGV4ID0gdGhpcy5saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG5cblx0XHRpZiAobGlzdGVuZXJJbmRleCA9PT0gLTEpIHtcblx0XHRcdHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXHRcdH1cblx0fTtcblxuXHRNZWRpYVF1ZXJ5TGlzdC5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcikge1xuXHRcdHZhciBsaXN0ZW5lckluZGV4ID0gdGhpcy5saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG5cblx0XHRpZiAobGlzdGVuZXJJbmRleCA+PSAwKSB7XG5cdFx0XHR0aGlzLmxpc3RlbmVycy5zcGxpY2UobGlzdGVuZXJJbmRleCwgMSk7XG5cdFx0fVxuXHR9O1xuXG5cdHNlbGYuTWVkaWFRdWVyeUxpc3QgPSBNZWRpYVF1ZXJ5TGlzdDtcblxuXHRzZWxmLm1hdGNoTWVkaWEgPSBmdW5jdGlvbiBtYXRjaE1lZGlhKG1lZGlhKSB7XG5cdFx0dmFyIGxpc3QgPSBuZXcgTWVkaWFRdWVyeUxpc3QoKTtcblxuXHRcdGlmICgwID09PSBhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdOb3QgZW5vdWdoIGFyZ3VtZW50cyB0byBtYXRjaE1lZGlhJyk7XG5cdFx0fVxuXG5cdFx0bGlzdC5tZWRpYSA9IFN0cmluZyhtZWRpYSk7XG5cdFx0bGlzdC5tYXRjaGVzID0gc3R5bGVNZWRpYS5tYXRjaE1lZGl1bShtZWRpYSB8fCAnYWxsJyk7XG5cblx0XHRzZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBsaXN0ZW5lcnMgPSBbXS5jb25jYXQobGlzdC5hZGRMaXN0ZW5lci5saXN0ZW5lcnMpLCBtYXRjaGVzID0gc3R5bGVNZWRpYS5tYXRjaE1lZGl1bShtZWRpYSB8fCAnYWxsJyk7XG5cblx0XHRcdGlmIChtYXRjaGVzICE9IGxpc3QubWF0Y2hlcykge1xuXHRcdFx0XHRsaXN0Lm1hdGNoZXMgPSBtYXRjaGVzO1xuXHRcdFx0XHRmb3IgKHZhciBpbmRleCA9IDAsIGxlbmd0aCA9IGxpc3RlbmVycy5sZW5ndGg7IGluZGV4IDwgbGVuZ3RoOyArK2luZGV4KSB7XG5cdFx0XHRcdFx0bGlzdGVuZXJzW2luZGV4XS5jYWxsKHNlbGYsIGxpc3QpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gbGlzdDtcblx0fTtcbn0oKSk7XG59fSkuY2FsbCgnb2JqZWN0JyA9PT0gdHlwZW9mIHdpbmRvdyAmJiB3aW5kb3cgfHwgJ29iamVjdCcgPT09IHR5cGVvZiBzZWxmICYmIHNlbGYgfHwgJ29iamVjdCcgPT09IHR5cGVvZiBnbG9iYWwgJiYgZ2xvYmFsIHx8IHt9KTtcbiIsICIoZnVuY3Rpb24odW5kZWZpbmVkKSB7XG5pZiAoIShcIm1hdGNoTWVkaWFcImluIHNlbGYmJlwiYWRkRXZlbnRMaXN0ZW5lclwiaW4gc2VsZi5tYXRjaE1lZGlhKFwiYWxsXCIpXG4pKSB7XG4vLyBNZWRpYVF1ZXJ5TGlzdC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lclxuKGZ1bmN0aW9uKGdsb2JhbCkge1xuXHRcInVzZSBzdHJpY3RcIjtcblxuXHRmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG5cdFx0aWYgKHR5cGUgPT09ICdjaGFuZ2UnKSB7XG5cdFx0XHR0aGlzLnJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKTtcblx0XHRcdHRoaXMuYWRkTGlzdGVuZXIobGlzdGVuZXIpO1xuXHRcdH1cblxuXHRcdGlmIChhcmd1bWVudHNbMl0gJiYgYXJndW1lbnRzWzJdLm9uY2UpIHtcblx0XHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFx0XHR2YXIgcmVtb3ZlciA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0X3RoaXMucmVtb3ZlTGlzdGVuZXIocmVtb3Zlcik7XG5cdFx0XHRcdF90aGlzLnJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuYWRkTGlzdGVuZXIocmVtb3Zlcik7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuXHRcdGlmICh0eXBlID09PSAnY2hhbmdlJykge1xuXHRcdFx0dGhpcy5yZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcik7XG5cdFx0fVxuXHR9XG5cblx0dmFyIG9uY2hhbmdlRGVzY3JpcHRvciA9IHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiB0aGlzLl9vbmNoYW5nZUhhbmRsZXIgfHwgbnVsbDtcblx0XHR9LFxuXHRcdHNldDogZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG5cdFx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXHRcdFx0aWYgKCFfdGhpcy5fb25jaGFuZ2VMaXN0ZW5lcikge1xuXHRcdFx0XHRfdGhpcy5fb25jaGFuZ2VMaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRpZiAodHlwZW9mIF90aGlzLl9vbmNoYW5nZUhhbmRsZXIgIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRfdGhpcy5fb25jaGFuZ2VIYW5kbGVyLmNhbGwoX3RoaXMsIGFyZ3VtZW50c1swXSk7XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0X3RoaXMuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgX3RoaXMuX29uY2hhbmdlTGlzdGVuZXIpO1xuXHRcdFx0fVxuXG5cdFx0XHRfdGhpcy5fb25jaGFuZ2VIYW5kbGVyID0gbGlzdGVuZXI7XG5cdFx0fVxuXHR9O1xuXG5cdGlmICgnTWVkaWFRdWVyeUxpc3QnIGluIGdsb2JhbCkgeyAvKiBNb3N0IGJyb3dzZXJzIGV4cG9zZSBcIk1lZGlhUXVlcnlMaXN0XCIgZ2xvYmFsbHkgKi9cblx0XHR2YXIgX2FkZExpc3RlbmVyID0gZ2xvYmFsLk1lZGlhUXVlcnlMaXN0LnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblx0XHR2YXIgX3JlbW92ZUxpc3RlbmVyID0gZ2xvYmFsLk1lZGlhUXVlcnlMaXN0LnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcjtcblxuXHRcdGdsb2JhbC5NZWRpYVF1ZXJ5TGlzdC5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcihsaXN0ZW5lcikge1xuXHRcdFx0dmFyIGhhbmRsZXIgPSBsaXN0ZW5lcjtcblx0XHRcdGlmIChoYW5kbGVyLmhhbmRsZUV2ZW50KSB7XG5cdFx0XHRcdGhhbmRsZXIgPSBoYW5kbGVyLmhhbmRsZUV2ZW50O1xuXHRcdFx0fVxuXG5cdFx0XHRfYWRkTGlzdGVuZXIuY2FsbCh0aGlzLCBoYW5kbGVyKTtcblx0XHR9O1xuXG5cdFx0Z2xvYmFsLk1lZGlhUXVlcnlMaXN0LnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKSB7XG5cdFx0XHR2YXIgaGFuZGxlciA9IGxpc3RlbmVyO1xuXHRcdFx0aWYgKGhhbmRsZXIuaGFuZGxlRXZlbnQpIHtcblx0XHRcdFx0aGFuZGxlciA9IGhhbmRsZXIuaGFuZGxlRXZlbnQ7XG5cdFx0XHR9XG5cblx0XHRcdF9yZW1vdmVMaXN0ZW5lci5jYWxsKHRoaXMsIGhhbmRsZXIpO1xuXHRcdH07XG5cblx0XHRnbG9iYWwuTWVkaWFRdWVyeUxpc3QucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBhZGRFdmVudExpc3RlbmVyO1xuXG5cdFx0Z2xvYmFsLk1lZGlhUXVlcnlMaXN0LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gcmVtb3ZlRXZlbnRMaXN0ZW5lcjtcblxuXHRcdGdsb2JhbC5PYmplY3QuZGVmaW5lUHJvcGVydHkoZ2xvYmFsLk1lZGlhUXVlcnlMaXN0LnByb3RvdHlwZSwgXCJvbmNoYW5nZVwiLCBvbmNoYW5nZURlc2NyaXB0b3IpO1xuXHR9IGVsc2UgeyAvKiBTYWZhcmkgZG9lcyBub3QgZXhwb3NlIFwiTWVkaWFRdWVyeUxpc3RcIiBnbG9iYWxseSAqL1xuXHRcdHZhciBfbWF0Y2hNZWRpYSA9IHNlbGYubWF0Y2hNZWRpYTtcblxuXHRcdHNlbGYubWF0Y2hNZWRpYSA9IGZ1bmN0aW9uIG1hdGNoTWVkaWEobWVkaWEpIHtcblx0XHRcdHZhciBfbXFsID0gX21hdGNoTWVkaWEobWVkaWEpO1xuXG5cdFx0XHR2YXIgX2FkZExpc3RlbmVyID0gX21xbC5hZGRMaXN0ZW5lcjtcblx0XHRcdHZhciBfcmVtb3ZlTGlzdGVuZXIgPSBfbXFsLnJlbW92ZUxpc3RlbmVyO1xuXG5cdFx0XHRfbXFsLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gYWRkTGlzdGVuZXIobGlzdGVuZXIpIHtcblx0XHRcdFx0dmFyIGhhbmRsZXIgPSBsaXN0ZW5lcjtcblx0XHRcdFx0aWYgKGhhbmRsZXIuaGFuZGxlRXZlbnQpIHtcblx0XHRcdFx0XHRoYW5kbGVyID0gaGFuZGxlci5oYW5kbGVFdmVudDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdF9hZGRMaXN0ZW5lci5jYWxsKHRoaXMsIGhhbmRsZXIpO1xuXHRcdFx0fTtcblxuXHRcdFx0X21xbC5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKSB7XG5cdFx0XHRcdHZhciBoYW5kbGVyID0gbGlzdGVuZXI7XG5cdFx0XHRcdGlmIChoYW5kbGVyLmhhbmRsZUV2ZW50KSB7XG5cdFx0XHRcdFx0aGFuZGxlciA9IGhhbmRsZXIuaGFuZGxlRXZlbnQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRfcmVtb3ZlTGlzdGVuZXIuY2FsbCh0aGlzLCBoYW5kbGVyKTtcblx0XHRcdH07XG5cblx0XHRcdF9tcWwuYWRkRXZlbnRMaXN0ZW5lciA9IGFkZEV2ZW50TGlzdGVuZXI7XG5cblx0XHRcdF9tcWwucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IHJlbW92ZUV2ZW50TGlzdGVuZXI7XG5cblx0XHRcdGdsb2JhbC5PYmplY3QuZGVmaW5lUHJvcGVydHkoX21xbCwgXCJvbmNoYW5nZVwiLCBvbmNoYW5nZURlc2NyaXB0b3IpO1xuXG5cdFx0XHRyZXR1cm4gX21xbDtcblx0XHR9XG5cdH1cbn0oc2VsZikpO1xufX0pLmNhbGwoJ29iamVjdCcgPT09IHR5cGVvZiB3aW5kb3cgJiYgd2luZG93IHx8ICdvYmplY3QnID09PSB0eXBlb2Ygc2VsZiAmJiBzZWxmIHx8ICdvYmplY3QnID09PSB0eXBlb2YgZ2xvYmFsICYmIGdsb2JhbCB8fCB7fSk7XG4iLCAiY29uc3QgU2Nyb2xsZXIgPSBmdW5jdGlvbiAoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcblx0Y29uc3Qgd2hlZWxIYW5kbGVyID0gZnVuY3Rpb24gKGU6IFdoZWVsRXZlbnQpIHtcblx0XHRpZiAoZS5kZWx0YVkgJiYgIWUuZGVsdGFYKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuXHRcdFx0XHRlbGVtZW50LnNjcm9sbEJ5KGUuZGVsdGFZLCAwKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIHdoZWVsSGFuZGxlcik7XG5cdGVsZW1lbnQuc3R5bGUuc2Nyb2xsU25hcFR5cGUgPSAnbm9uZSc7XG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIHdoZWVsSGFuZGxlcik7XG5cdFx0ZWxlbWVudC5zdHlsZS5zY3JvbGxTbmFwVHlwZSA9ICcnO1xuXHR9O1xufTtcbmNvbnN0IHNjcm9sbGVyQ29udGFpbmVycyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Njcm9sbGVyLWNvbnRhaW5lcicpIGFzIEhUTUxDb2xsZWN0aW9uT2Y8SFRNTEVsZW1lbnQ+O1xuZm9yIChjb25zdCBlbGVtZW50IG9mIHNjcm9sbGVyQ29udGFpbmVycykge1xuXHRTY3JvbGxlcihlbGVtZW50KTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBLHdGQUFBQSxTQUFBO0FBQUE7QUFDQSxRQUFJLFFBQVEsU0FBVSxJQUFJO0FBQ3hCLGFBQU8sTUFBTSxHQUFHLFNBQVMsUUFBUTtBQUFBLElBQ25DO0FBR0EsSUFBQUEsUUFBTztBQUFBLElBRUwsTUFBTSxPQUFPLGNBQWMsWUFBWSxVQUFVLEtB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QkMsR0FBZTtBQUM3QyxRQUFJQSxFQUFFQyxVQUFVLENBQUNELEVBQUVFLFFBQVE7QUFDMUJGLFFBQUVHLGVBQWU7QUFDakJDLDRCQUFzQixXQUFNO0FBQzNCTixnQkFBUU8sU0FBU0wsRUFBRUMsUUFBUSxDQUFDO01BQzdCLENBQUM7SUFDRjtFQUNEO0FBQ0FILFVBQVFRLGlCQUFpQixTQUFTUCxZQUFZO0FBQzlDRCxVQUFRUyxNQUFNQyxpQkFBaUI7QUFDL0IsU0FBTyxXQUFZO0FBQ2xCVixZQUFRVyxvQkFBb0IsU0FBU1YsWUFBWTtBQUNqREQsWUFBUVMsTUFBTUMsaUJBQWlCO0VBQ2hDO0FBQ0Q7QUFDQSxJQUFNRSxxQkFBcUJDLFNBQVNDLHVCQUF1QixvQkFBb0I7QUFBQSxJQUFBQyxZQUFBQywyQkFDekRKLGtCQUFBO0FBRHlELElBQ3pESztBQUFBLElBQUE7QUFBdEIsT0FBQUYsVUFBQUcsRUFBQSxHQUFBLEVBQUFELFFBQUFGLFVBQUFJLEVBQUEsR0FBQUMsUUFBMEM7QUFBL0JwQixjQUFBaUIsTUFBQUk7QUFDVnRCLGFBQVNDLE9BQU87RUFDakI7QUFBQSxTQUFBc0IsS0FBQTtBQUFBUCxZQUFBYixFQUFBb0IsR0FBQTtBQUFBLFVBQUE7QUFBQVAsWUFBQVEsRUFBQTtBQUFBO0FBRld2QjsiLAogICJuYW1lcyI6IFsibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIlN5bWJvbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiZG9jdW1lbnQiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiVHlwZUVycm9yIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImFjdGl2ZVhEb2N1bWVudCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJTeW1ib2wiLCAibW9kdWxlIiwgIlN5bWJvbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgInNlbGYiLCAiZ2xvYmFsIiwgIlR5cGVFcnJvciIsICJTeW1ib2wiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIlN5bWJvbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiRXJyb3IiLCAiUmVmZXJlbmNlRXJyb3IiLCAiVHlwZUVycm9yIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgInVuZGVmaW5lZCIsICJnbG9iYWwiLCAidW5kZWZpbmVkIiwgImUiLCAiZ2xvYmFsIiwgImV4cG9ydHMiLCAiX19hc3NpZ24iLCAiX2EiLCAidW5kZWZpbmVkIiwgIm4iLCAiRXZlbnQiLCAiZXZlbnQiLCAidW5kZWZpbmVkIiwgInVuZGVmaW5lZCIsICJnbG9iYWwiLCAiX2FkZExpc3RlbmVyIiwgIl9yZW1vdmVMaXN0ZW5lciIsICJTY3JvbGxlciIsICJlbGVtZW50IiwgIndoZWVsSGFuZGxlciIsICJlIiwgImRlbHRhWSIsICJkZWx0YVgiLCAicHJldmVudERlZmF1bHQiLCAicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwgInNjcm9sbEJ5IiwgImFkZEV2ZW50TGlzdGVuZXIiLCAic3R5bGUiLCAic2Nyb2xsU25hcFR5cGUiLCAicmVtb3ZlRXZlbnRMaXN0ZW5lciIsICJzY3JvbGxlckNvbnRhaW5lcnMiLCAiZG9jdW1lbnQiLCAiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAidmFsdWUiLCAiZXJyIiwgImYiXQp9Cg==