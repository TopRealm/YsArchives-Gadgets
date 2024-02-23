/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title=Wikiplus|license=CC-BY-SA-4.0}}'
 *
 * Wikiplus
 *
 * @source {@link https://github.com/TopRealm/YsArxiv-Gadgets/tree/master/src/Wikiplus/module/core.js}
 * @author Eridanus Sora (妹空酱)
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
 */

/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|title=Wikiplus-highlight|license=GPL-3.0-or-later}}'
 *
 * Wikiplus-highlight
 *
 * @base {@link https://github.com/bhsd-harry/Wikiplus-highlight/blob/main/main.js}
 * @source {@link https://github.com/TopRealm/YsArxiv-Gadgets/tree/master/src/Wikiplus/module/highlight.js}
 * @author Bhsd <https://github.com/bhsd-harry>, 机智的小鱼君 <https://github.com/Dragon-Fish>
 * @license GPL-3.0-or-later {@link https://www.qiuwenbaike.cn/wiki/H:GPL-3.0}
 */

/**
 * SPDX-License-Identifier: MIT
 *
 * settings Icon (ltr) from OOjs UI
 *
 * @base {@link https://github.com/wikimedia/oojs-ui/blob/e17952e413cfc00c15cfd861d47463c29062afe7/src/themes/wikimediaui/images/icons/settings.svg}
 * @source {@link https://github.com/TopRealm/YsArxiv-Gadgets/tree/master/src/GeoLocationReader/images}
 * @license MIT {@link https://github.com/wikimedia/oojs-ui/blob/master/LICENSE-MIT}
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
    var Deno2 = global2.Deno;
    var versions = process && process.versions || Deno2 && Deno2.version;
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/array-set-length.js
var require_array_set_length = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/array-set-length.js"(exports, module2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var isArray = require_is_array();
    var $TypeError = TypeError;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function() {
      if (this !== void 0)
        return true;
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/does-not-exceed-safe-integer.js
var require_does_not_exceed_safe_integer = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/does-not-exceed-safe-integer.js"(exports, module2) {
    "use strict";
    var $TypeError = TypeError;
    var MAX_SAFE_INTEGER = 9007199254740991;
    module2.exports = function(it) {
      if (it > MAX_SAFE_INTEGER)
        throw $TypeError("Maximum allowed index exceeded");
      return it;
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.array.push.js
var require_es_array_push = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.array.push.js"() {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/delete-property-or-throw.js
var require_delete_property_or_throw = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/delete-property-or-throw.js"(exports, module2) {
    "use strict";
    var tryToString = require_try_to_string();
    var $TypeError = TypeError;
    module2.exports = function(O, P) {
      if (!delete O[P])
        throw new $TypeError("Cannot delete property " + tryToString(P) + " of " + tryToString(O));
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.array.unshift.js
var require_es_array_unshift = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.array.unshift.js"() {
    "use strict";
    var $2 = require_export();
    var toObject = require_to_object();
    var lengthOfArrayLike = require_length_of_array_like();
    var setArrayLength = require_array_set_length();
    var deletePropertyOrThrow = require_delete_property_or_throw();
    var doesNotExceedSafeInteger = require_does_not_exceed_safe_integer();
    var INCORRECT_RESULT = [].unshift(0) !== 1;
    var properErrorOnNonWritableLength = function() {
      try {
        Object.defineProperty([], "length", { writable: false }).unshift();
      } catch (error) {
        return error instanceof TypeError;
      }
    };
    var FORCED = INCORRECT_RESULT || !properErrorOnNonWritableLength();
    $2({ target: "Array", proto: true, arity: 1, forced: FORCED }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      unshift: function unshift(item) {
        var O = toObject(this);
        var len = lengthOfArrayLike(O);
        var argCount = arguments.length;
        if (argCount) {
          doesNotExceedSafeInteger(len + argCount);
          var k = len;
          while (k--) {
            var to = k + argCount;
            if (k in O)
              O[to] = O[k];
            else
              deletePropertyOrThrow(O, to);
          }
          for (var j = 0; j < argCount; j++) {
            O[j] = arguments[j];
          }
        }
        return setArrayLength(O, len + argCount);
      }
    });
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.regexp.flags.js
var require_es_regexp_flags = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.regexp.flags.js"() {
    "use strict";
    var global2 = require_global();
    var DESCRIPTORS = require_descriptors();
    var defineBuiltInAccessor = require_define_built_in_accessor();
    var regExpFlags = require_regexp_flags();
    var fails = require_fails();
    var RegExp2 = global2.RegExp;
    var RegExpPrototype = RegExp2.prototype;
    var FORCED = DESCRIPTORS && fails(function() {
      var INDICES_SUPPORT = true;
      try {
        RegExp2(".", "d");
      } catch (error) {
        INDICES_SUPPORT = false;
      }
      var O = {};
      var calls = "";
      var expected = INDICES_SUPPORT ? "dgimsy" : "gimsy";
      var addGetter = function(key2, chr) {
        Object.defineProperty(O, key2, { get: function() {
          calls += chr;
          return true;
        } });
      };
      var pairs = {
        dotAll: "s",
        global: "g",
        ignoreCase: "i",
        multiline: "m",
        sticky: "y"
      };
      if (INDICES_SUPPORT)
        pairs.hasIndices = "d";
      for (var key in pairs)
        addGetter(key, pairs[key]);
      var result = Object.getOwnPropertyDescriptor(RegExpPrototype, "flags").get.call(O);
      return result !== expected || calls !== expected;
    });
    if (FORCED)
      defineBuiltInAccessor(RegExpPrototype, "flags", {
        configurable: true,
        get: regExpFlags
      });
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/validate-arguments-length.js
var require_validate_arguments_length = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/validate-arguments-length.js"(exports, module2) {
    "use strict";
    var $TypeError = TypeError;
    module2.exports = function(passed, required) {
      if (passed < required)
        throw new $TypeError("Not enough arguments");
      return passed;
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/web.url-search-params.delete.js
var require_web_url_search_params_delete = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/web.url-search-params.delete.js"() {
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
        if (length && $value === void 0)
          return $delete(this, name);
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
          } else
            dindex++;
        }
        while (dindex < entriesLength) {
          entry = entries[dindex++];
          if (!(entry.key === key && entry.value === value))
            append(this, entry.key, entry.value);
        }
      }, { enumerable: true, unsafe: true });
    }
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/web.url-search-params.has.js
var require_web_url_search_params_has = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/web.url-search-params.has.js"() {
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
        if (length && $value === void 0)
          return $has(this, name);
        var values = getAll(this, name);
        validateArgumentsLength(length, 1);
        var value = toString($value);
        var index = 0;
        while (index < values.length) {
          if (values[index++] === value)
            return true;
        }
        return false;
      }, { enumerable: true, unsafe: true });
    }
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/web.url-search-params.size.js
var require_web_url_search_params_size = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/web.url-search-params.size.js"() {
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
require_es_array_unshift();
require_es_regexp_flags();
require_web_url_search_params_delete();
require_web_url_search_params_has();
require_web_url_search_params_size();
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function() {
      };
      return { s: F, n: function() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function(e) {
        throw e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function(e) {
    didErr = true;
    err = e;
  }, f: function() {
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
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function() {
    var self2 = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self2, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames2(fn)[0]])(fn = 0)), res;
};
//! src/Wikiplus/modules/core.js
var core_exports = {};
var init_core = __esm({
  "src/Wikiplus/modules/core.js"() {
    "use strict";
    (function Wikiplus() {
      /*! Wikiplus - 4.0.11 | Eridanus Sora (妹空酱) | CC-BY-SA-4.0 <https://qwbk.cc/H:CC-BY-SA-4.0> */
      var t = {
        509: function(t2, e2, r2) {
          var n = r2(9985), o = r2(3691), i = TypeError;
          t2.exports = function(t3) {
            if (n(t3))
              return t3;
            throw new i(o(t3) + " is not a function");
          };
        },
        2655: function(t2, e2, r2) {
          var n = r2(9429), o = r2(3691), i = TypeError;
          t2.exports = function(t3) {
            if (n(t3))
              return t3;
            throw new i(o(t3) + " is not a constructor");
          };
        },
        9945: function(t2, e2, r2) {
          var n = r2(3914).has;
          t2.exports = function(t3) {
            return n(t3), t3;
          };
        },
        3550: function(t2, e2, r2) {
          var n = r2(9985), o = String, i = TypeError;
          t2.exports = function(t3) {
            if ("object" == typeof t3 || n(t3))
              return t3;
            throw new i("Can't set " + o(t3) + " as a prototype");
          };
        },
        7370: function(t2, e2, r2) {
          var n = r2(4201), o = r2(5391), i = r2(2560).f, a = n("unscopables"), u = Array.prototype;
          void 0 === u[a] && i(u, a, {
            configurable: true,
            value: o(null)
          }), t2.exports = function(t3) {
            u[a][t3] = true;
          };
        },
        1514: function(t2, e2, r2) {
          var n = r2(730).charAt;
          t2.exports = function(t3, e3, r3) {
            return e3 + (r3 ? n(t3, e3).length : 1);
          };
        },
        767: function(t2, e2, r2) {
          var n = r2(3622), o = TypeError;
          t2.exports = function(t3, e3) {
            if (n(e3, t3))
              return t3;
            throw new o("Incorrect invocation");
          };
        },
        5027: function(t2, e2, r2) {
          var n = r2(8999), o = String, i = TypeError;
          t2.exports = function(t3) {
            if (n(t3))
              return t3;
            throw new i(o(t3) + " is not an object");
          };
        },
        1655: function(t2, e2, r2) {
          var n = r2(3689);
          t2.exports = n(function() {
            if ("function" == typeof ArrayBuffer) {
              var t3 = new ArrayBuffer(8);
              Object.isExtensible(t3) && Object.defineProperty(t3, "a", {
                value: 8
              });
            }
          });
        },
        7612: function(t2, e2, r2) {
          var n = r2(2960).forEach, o = r2(6834)("forEach");
          t2.exports = o ? [].forEach : function(t3) {
            return n(this, t3, arguments.length > 1 ? arguments[1] : void 0);
          };
        },
        1055: function(t2, e2, r2) {
          var n = r2(4071), o = r2(2615), i = r2(690), a = r2(1228), u = r2(3292), c = r2(9429), s = r2(6310), f = r2(6522), l = r2(5185), p = r2(1664), h = Array;
          t2.exports = function(t3) {
            var e3 = i(t3), r3 = c(this), v = arguments.length, d = v > 1 ? arguments[1] : void 0, y = void 0 !== d;
            y && (d = n(d, v > 2 ? arguments[2] : void 0));
            var g, m, b, w, x, k, S = p(e3), E = 0;
            if (!S || this === h && u(S))
              for (g = s(e3), m = r3 ? new this(g) : h(g); g > E; E++)
                k = y ? d(e3[E], E) : e3[E], f(m, E, k);
            else
              for (x = (w = l(e3, S)).next, m = r3 ? new this() : []; !(b = o(x, w)).done; E++)
                k = y ? a(w, d, [b.value, E], true) : b.value, f(m, E, k);
            return m.length = E, m;
          };
        },
        4328: function(t2, e2, r2) {
          var n = r2(5290), o = r2(7578), i = r2(6310), a = function(t3) {
            return function(e3, r3, a2) {
              var u, c = n(e3), s = i(c), f = o(a2, s);
              if (t3 && r3 != r3) {
                for (; s > f; )
                  if ((u = c[f++]) != u)
                    return true;
              } else
                for (; s > f; f++)
                  if ((t3 || f in c) && c[f] === r3)
                    return t3 || f || 0;
              return !t3 && -1;
            };
          };
          t2.exports = {
            includes: a(true),
            indexOf: a(false)
          };
        },
        2960: function(t2, e2, r2) {
          var n = r2(4071), o = r2(8844), i = r2(4413), a = r2(690), u = r2(6310), c = r2(7120), s = o([].push), f = function(t3) {
            var e3 = 1 === t3, r3 = 2 === t3, o2 = 3 === t3, f2 = 4 === t3, l = 6 === t3, p = 7 === t3, h = 5 === t3 || l;
            return function(v, d, y, g) {
              for (var m, b, w = a(v), x = i(w), k = n(d, y), S = u(x), E = 0, O = g || c, P = e3 ? O(v, S) : r3 || p ? O(v, 0) : void 0; S > E; E++)
                if ((h || E in x) && (b = k(m = x[E], E, w), t3))
                  if (e3)
                    P[E] = b;
                  else if (b)
                    switch (t3) {
                      case 3:
                        return true;
                      case 5:
                        return m;
                      case 6:
                        return E;
                      case 2:
                        s(P, m);
                    }
                  else
                    switch (t3) {
                      case 4:
                        return false;
                      case 7:
                        s(P, m);
                    }
              return l ? -1 : o2 || f2 ? f2 : P;
            };
          };
          t2.exports = {
            forEach: f(0),
            map: f(1),
            filter: f(2),
            some: f(3),
            every: f(4),
            find: f(5),
            findIndex: f(6),
            filterReject: f(7)
          };
        },
        9042: function(t2, e2, r2) {
          var n = r2(3689), o = r2(4201), i = r2(3615), a = o("species");
          t2.exports = function(t3) {
            return i >= 51 || !n(function() {
              var e3 = [];
              return (e3.constructor = {})[a] = function() {
                return {
                  foo: 1
                };
              }, 1 !== e3[t3](Boolean).foo;
            });
          };
        },
        6834: function(t2, e2, r2) {
          var n = r2(3689);
          t2.exports = function(t3, e3) {
            var r3 = [][t3];
            return !!r3 && n(function() {
              r3.call(null, e3 || function() {
                return 1;
              }, 1);
            });
          };
        },
        5649: function(t2, e2, r2) {
          var n = r2(7697), o = r2(2297), i = TypeError, a = Object.getOwnPropertyDescriptor, u = n && !function() {
            if (void 0 !== this)
              return true;
            try {
              Object.defineProperty([], "length", {
                writable: false
              }).length = 1;
            } catch (t3) {
              return t3 instanceof TypeError;
            }
          }();
          t2.exports = u ? function(t3, e3) {
            if (o(t3) && !a(t3, "length").writable)
              throw new i("Cannot set read only .length");
            return t3.length = e3;
          } : function(t3, e3) {
            return t3.length = e3;
          };
        },
        9015: function(t2, e2, r2) {
          var n = r2(7578), o = r2(6310), i = r2(6522), a = Array, u = Math.max;
          t2.exports = function(t3, e3, r3) {
            for (var c = o(t3), s = n(e3, c), f = n(void 0 === r3 ? c : r3, c), l = a(u(f - s, 0)), p = 0; s < f; s++, p++)
              i(l, p, t3[s]);
            return l.length = p, l;
          };
        },
        6004: function(t2, e2, r2) {
          var n = r2(8844);
          t2.exports = n([].slice);
        },
        382: function(t2, e2, r2) {
          var n = r2(9015), o = Math.floor, i = function(t3, e3) {
            var r3 = t3.length, c = o(r3 / 2);
            return r3 < 8 ? a(t3, e3) : u(t3, i(n(t3, 0, c), e3), i(n(t3, c), e3), e3);
          }, a = function(t3, e3) {
            for (var r3, n2, o2 = t3.length, i2 = 1; i2 < o2; ) {
              for (n2 = i2, r3 = t3[i2]; n2 && e3(t3[n2 - 1], r3) > 0; )
                t3[n2] = t3[--n2];
              n2 !== i2++ && (t3[n2] = r3);
            }
            return t3;
          }, u = function(t3, e3, r3, n2) {
            for (var o2 = e3.length, i2 = r3.length, a2 = 0, u2 = 0; a2 < o2 || u2 < i2; )
              t3[a2 + u2] = a2 < o2 && u2 < i2 ? n2(e3[a2], r3[u2]) <= 0 ? e3[a2++] : r3[u2++] : a2 < o2 ? e3[a2++] : r3[u2++];
            return t3;
          };
          t2.exports = i;
        },
        5271: function(t2, e2, r2) {
          var n = r2(2297), o = r2(9429), i = r2(8999), a = r2(4201)("species"), u = Array;
          t2.exports = function(t3) {
            var e3;
            return n(t3) && (e3 = t3.constructor, (o(e3) && (e3 === u || n(e3.prototype)) || i(e3) && null === (e3 = e3[a])) && (e3 = void 0)), void 0 === e3 ? u : e3;
          };
        },
        7120: function(t2, e2, r2) {
          var n = r2(5271);
          t2.exports = function(t3, e3) {
            return new (n(t3))(0 === e3 ? 0 : e3);
          };
        },
        2399: function(t2, e2, r2) {
          var n = r2(2615), o = r2(6058), i = r2(4849);
          t2.exports = function(t3, e3, r3, a) {
            try {
              var u = i(t3, "return");
              if (u)
                return o("Promise").resolve(n(u, t3)).then(function() {
                  e3(r3);
                }, function(t4) {
                  a(t4);
                });
            } catch (t4) {
              return a(t4);
            }
            e3(r3);
          };
        },
        7394: function(t2, e2, r2) {
          var n = r2(2615), o = r2(9302), i = r2(5027), a = r2(5391), u = r2(5773), c = r2(6045), s = r2(4201), f = r2(618), l = r2(6058), p = r2(4849), h = r2(3070), v = r2(7807), d = r2(2125), y = l("Promise"), g = s("toStringTag"), m = "AsyncIteratorHelper", b = "WrapForValidAsyncIterator", w = f.set, x = function(t3) {
            var e3 = !t3, r3 = f.getterFor(t3 ? b : m), u2 = function(t4) {
              var n2 = o(function() {
                return r3(t4);
              }), i2 = n2.error, a2 = n2.value;
              return i2 || e3 && a2.done ? {
                exit: true,
                value: i2 ? y.reject(a2) : y.resolve(v(void 0, true))
              } : {
                exit: false,
                value: a2
              };
            };
            return c(a(h), {
              next: function() {
                var t4 = u2(this), e4 = t4.value;
                if (t4.exit)
                  return e4;
                var r4 = o(function() {
                  return i(e4.nextHandler(y));
                }), n2 = r4.error, a2 = r4.value;
                return n2 && (e4.done = true), n2 ? y.reject(a2) : y.resolve(a2);
              },
              return: function() {
                var e4 = u2(this), r4 = e4.value;
                if (e4.exit)
                  return r4;
                r4.done = true;
                var a2, c2, s2 = r4.iterator, f2 = o(function() {
                  if (r4.inner)
                    try {
                      d(r4.inner.iterator, "normal");
                    } catch (t4) {
                      return d(s2, "throw", t4);
                    }
                  return p(s2, "return");
                });
                return a2 = c2 = f2.value, f2.error ? y.reject(c2) : void 0 === a2 ? y.resolve(v(void 0, true)) : (c2 = (f2 = o(function() {
                  return n(a2, s2);
                })).value, f2.error ? y.reject(c2) : t3 ? y.resolve(c2) : y.resolve(c2).then(function(t4) {
                  return i(t4), v(void 0, true);
                }));
              }
            });
          }, k = x(true), S = x(false);
          u(S, g, "Async Iterator Helper"), t2.exports = function(t3, e3) {
            var r3 = function(r4, n2) {
              n2 ? (n2.iterator = r4.iterator, n2.next = r4.next) : n2 = r4, n2.type = e3 ? b : m, n2.nextHandler = t3, n2.counter = 0, n2.done = false, w(this, n2);
            };
            return r3.prototype = e3 ? k : S, r3;
          };
        },
        2489: function(t2, e2, r2) {
          var n = r2(2615), o = r2(509), i = r2(5027), a = r2(8999), u = r2(5565), c = r2(6058), s = r2(2302), f = r2(2399), l = function(t3) {
            var e3 = 0 === t3, r3 = 1 === t3, l2 = 2 === t3, p = 3 === t3;
            return function(t4, h, v) {
              i(t4);
              var d = void 0 !== h;
              !d && e3 || o(h);
              var y = s(t4), g = c("Promise"), m = y.iterator, b = y.next, w = 0;
              return new g(function(t5, o2) {
                var c2 = function(t6) {
                  f(m, o2, t6, o2);
                }, s2 = function() {
                  try {
                    if (d)
                      try {
                        u(w);
                      } catch (t6) {
                        c2(t6);
                      }
                    g.resolve(i(n(b, m))).then(function(n2) {
                      try {
                        if (i(n2).done)
                          e3 ? (v.length = w, t5(v)) : t5(!p && (l2 || void 0));
                        else {
                          var u2 = n2.value;
                          try {
                            if (d) {
                              var y2 = h(u2, w), b2 = function(n3) {
                                if (r3)
                                  s2();
                                else if (l2)
                                  n3 ? s2() : f(m, t5, false, o2);
                                else if (e3)
                                  try {
                                    v[w++] = n3, s2();
                                  } catch (t6) {
                                    c2(t6);
                                  }
                                else
                                  n3 ? f(m, t5, p || u2, o2) : s2();
                              };
                              a(y2) ? g.resolve(y2).then(b2, c2) : b2(y2);
                            } else
                              v[w++] = u2, s2();
                          } catch (t6) {
                            c2(t6);
                          }
                        }
                      } catch (t6) {
                        o2(t6);
                      }
                    }, o2);
                  } catch (t6) {
                    o2(t6);
                  }
                };
                s2();
              });
            };
          };
          t2.exports = {
            toArray: l(0),
            forEach: l(1),
            every: l(2),
            some: l(3),
            find: l(4)
          };
        },
        3070: function(t2, e2, r2) {
          var n, o, i = r2(9037), a = r2(4091), u = r2(9985), c = r2(5391), s = r2(1868), f = r2(1880), l = r2(4201), p = r2(3931), h = "USE_FUNCTION_CONSTRUCTOR", v = l("asyncIterator"), d = i.AsyncIterator, y = a.AsyncIteratorPrototype;
          if (y)
            n = y;
          else if (u(d))
            n = d.prototype;
          else if (a[h] || i[h])
            try {
              o = s(s(s(Function("return async function*(){}()")()))), s(o) === Object.prototype && (n = o);
            } catch (t3) {
            }
          n ? p && (n = c(n)) : n = {}, u(n[v]) || f(n, v, function() {
            return this;
          }), t2.exports = n;
        },
        1228: function(t2, e2, r2) {
          var n = r2(5027), o = r2(2125);
          t2.exports = function(t3, e3, r3, i) {
            try {
              return i ? e3(n(r3)[0], r3[1]) : e3(r3);
            } catch (e4) {
              o(t3, "throw", e4);
            }
          };
        },
        6431: function(t2, e2, r2) {
          var n = r2(4201)("iterator"), o = false;
          try {
            var i = 0, a = {
              next: function() {
                return {
                  done: !!i++
                };
              },
              return: function() {
                o = true;
              }
            };
            a[n] = function() {
              return this;
            }, Array.from(a, function() {
              throw 2;
            });
          } catch (t3) {
          }
          t2.exports = function(t3, e3) {
            try {
              if (!e3 && !o)
                return false;
            } catch (t4) {
              return false;
            }
            var r3 = false;
            try {
              var i2 = {};
              i2[n] = function() {
                return {
                  next: function() {
                    return {
                      done: r3 = true
                    };
                  }
                };
              }, t3(i2);
            } catch (t4) {
            }
            return r3;
          };
        },
        6648: function(t2, e2, r2) {
          var n = r2(8844), o = n({}.toString), i = n("".slice);
          t2.exports = function(t3) {
            return i(o(t3), 8, -1);
          };
        },
        926: function(t2, e2, r2) {
          var n = r2(3043), o = r2(9985), i = r2(6648), a = r2(4201)("toStringTag"), u = Object, c = "Arguments" === i(/* @__PURE__ */ function() {
            return arguments;
          }());
          t2.exports = n ? i : function(t3) {
            var e3, r3, n2;
            return void 0 === t3 ? "Undefined" : null === t3 ? "Null" : "string" == typeof (r3 = function(t4, e4) {
              try {
                return t4[e4];
              } catch (t5) {
              }
            }(e3 = u(t3), a)) ? r3 : c ? i(e3) : "Object" === (n2 = i(e3)) && o(e3.callee) ? "Arguments" : n2;
          };
        },
        800: function(t2, e2, r2) {
          var n = r2(5391), o = r2(2148), i = r2(6045), a = r2(4071), u = r2(767), c = r2(981), s = r2(8734), f = r2(1934), l = r2(7807), p = r2(4241), h = r2(7697), v = r2(5375).fastKey, d = r2(618), y = d.set, g = d.getterFor;
          t2.exports = {
            getConstructor: function(t3, e3, r3, f2) {
              var l2 = t3(function(t4, o2) {
                u(t4, p2), y(t4, {
                  type: e3,
                  index: n(null),
                  first: void 0,
                  last: void 0,
                  size: 0
                }), h || (t4.size = 0), c(o2) || s(o2, t4[f2], {
                  that: t4,
                  AS_ENTRIES: r3
                });
              }), p2 = l2.prototype, d2 = g(e3), m = function(t4, e4, r4) {
                var n2, o2, i2 = d2(t4), a2 = b(t4, e4);
                return a2 ? a2.value = r4 : (i2.last = a2 = {
                  index: o2 = v(e4, true),
                  key: e4,
                  value: r4,
                  previous: n2 = i2.last,
                  next: void 0,
                  removed: false
                }, i2.first || (i2.first = a2), n2 && (n2.next = a2), h ? i2.size++ : t4.size++, "F" !== o2 && (i2.index[o2] = a2)), t4;
              }, b = function(t4, e4) {
                var r4, n2 = d2(t4), o2 = v(e4);
                if ("F" !== o2)
                  return n2.index[o2];
                for (r4 = n2.first; r4; r4 = r4.next)
                  if (r4.key === e4)
                    return r4;
              };
              return i(p2, {
                clear: function() {
                  for (var t4 = d2(this), e4 = t4.index, r4 = t4.first; r4; )
                    r4.removed = true, r4.previous && (r4.previous = r4.previous.next = void 0), delete e4[r4.index], r4 = r4.next;
                  t4.first = t4.last = void 0, h ? t4.size = 0 : this.size = 0;
                },
                delete: function(t4) {
                  var e4 = this, r4 = d2(e4), n2 = b(e4, t4);
                  if (n2) {
                    var o2 = n2.next, i2 = n2.previous;
                    delete r4.index[n2.index], n2.removed = true, i2 && (i2.next = o2), o2 && (o2.previous = i2), r4.first === n2 && (r4.first = o2), r4.last === n2 && (r4.last = i2), h ? r4.size-- : e4.size--;
                  }
                  return !!n2;
                },
                forEach: function(t4) {
                  for (var e4, r4 = d2(this), n2 = a(t4, arguments.length > 1 ? arguments[1] : void 0); e4 = e4 ? e4.next : r4.first; )
                    for (n2(e4.value, e4.key, this); e4 && e4.removed; )
                      e4 = e4.previous;
                },
                has: function(t4) {
                  return !!b(this, t4);
                }
              }), i(p2, r3 ? {
                get: function(t4) {
                  var e4 = b(this, t4);
                  return e4 && e4.value;
                },
                set: function(t4, e4) {
                  return m(this, 0 === t4 ? 0 : t4, e4);
                }
              } : {
                add: function(t4) {
                  return m(this, t4 = 0 === t4 ? 0 : t4, t4);
                }
              }), h && o(p2, "size", {
                configurable: true,
                get: function() {
                  return d2(this).size;
                }
              }), l2;
            },
            setStrong: function(t3, e3, r3) {
              var n2 = e3 + " Iterator", o2 = g(e3), i2 = g(n2);
              f(t3, e3, function(t4, e4) {
                y(this, {
                  type: n2,
                  target: t4,
                  state: o2(t4),
                  kind: e4,
                  last: void 0
                });
              }, function() {
                for (var t4 = i2(this), e4 = t4.kind, r4 = t4.last; r4 && r4.removed; )
                  r4 = r4.previous;
                return t4.target && (t4.last = r4 = r4 ? r4.next : t4.state.first) ? l("keys" === e4 ? r4.key : "values" === e4 ? r4.value : [r4.key, r4.value], false) : (t4.target = void 0, l(void 0, true));
              }, r3 ? "entries" : "values", !r3, true), p(e3);
            }
          };
        },
        319: function(t2, e2, r2) {
          var n = r2(9989), o = r2(9037), i = r2(8844), a = r2(5266), u = r2(1880), c = r2(5375), s = r2(8734), f = r2(767), l = r2(9985), p = r2(981), h = r2(8999), v = r2(3689), d = r2(6431), y = r2(5997), g = r2(3457);
          t2.exports = function(t3, e3, r3) {
            var m = -1 !== t3.indexOf("Map"), b = -1 !== t3.indexOf("Weak"), w = m ? "set" : "add", x = o[t3], k = x && x.prototype, S = x, E = {}, O = function(t4) {
              var e4 = i(k[t4]);
              u(k, t4, "add" === t4 ? function(t5) {
                return e4(this, 0 === t5 ? 0 : t5), this;
              } : "delete" === t4 ? function(t5) {
                return !(b && !h(t5)) && e4(this, 0 === t5 ? 0 : t5);
              } : "get" === t4 ? function(t5) {
                return b && !h(t5) ? void 0 : e4(this, 0 === t5 ? 0 : t5);
              } : "has" === t4 ? function(t5) {
                return !(b && !h(t5)) && e4(this, 0 === t5 ? 0 : t5);
              } : function(t5, r4) {
                return e4(this, 0 === t5 ? 0 : t5, r4), this;
              });
            };
            if (a(t3, !l(x) || !(b || k.forEach && !v(function() {
              new x().entries().next();
            }))))
              S = r3.getConstructor(e3, t3, m, w), c.enable();
            else if (a(t3, true)) {
              var P = new S(), j = P[w](b ? {} : -0, 1) !== P, L = v(function() {
                P.has(1);
              }), _ = d(function(t4) {
                new x(t4);
              }), I = !b && v(function() {
                for (var t4 = new x(), e4 = 5; e4--; )
                  t4[w](e4, e4);
                return !t4.has(-0);
              });
              _ || ((S = e3(function(t4, e4) {
                f(t4, k);
                var r4 = g(new x(), t4, S);
                return p(e4) || s(e4, r4[w], {
                  that: r4,
                  AS_ENTRIES: m
                }), r4;
              })).prototype = k, k.constructor = S), (L || I) && (O("delete"), O("has"), m && O("get")), (I || j) && O(w), b && k.clear && delete k.clear;
            }
            return E[t3] = S, n({
              global: true,
              constructor: true,
              forced: S !== x
            }, E), y(S, t3), b || r3.setStrong(S, t3, m), S;
          };
        },
        8758: function(t2, e2, r2) {
          var n = r2(6812), o = r2(9152), i = r2(2474), a = r2(2560);
          t2.exports = function(t3, e3, r3) {
            for (var u = o(e3), c = a.f, s = i.f, f = 0; f < u.length; f++) {
              var l = u[f];
              n(t3, l) || r3 && n(r3, l) || c(t3, l, s(e3, l));
            }
          };
        },
        7413: function(t2, e2, r2) {
          var n = r2(4201)("match");
          t2.exports = function(t3) {
            var e3 = /./;
            try {
              "/./"[t3](e3);
            } catch (r3) {
              try {
                return e3[n] = false, "/./"[t3](e3);
              } catch (t4) {
              }
            }
            return false;
          };
        },
        1748: function(t2, e2, r2) {
          var n = r2(3689);
          t2.exports = !n(function() {
            function t3() {
            }
            return t3.prototype.constructor = null, Object.getPrototypeOf(new t3()) !== t3.prototype;
          });
        },
        7807: function(t2) {
          t2.exports = function(t3, e2) {
            return {
              value: t3,
              done: e2
            };
          };
        },
        5773: function(t2, e2, r2) {
          var n = r2(7697), o = r2(2560), i = r2(5684);
          t2.exports = n ? function(t3, e3, r3) {
            return o.f(t3, e3, i(1, r3));
          } : function(t3, e3, r3) {
            return t3[e3] = r3, t3;
          };
        },
        5684: function(t2) {
          t2.exports = function(t3, e2) {
            return {
              enumerable: !(1 & t3),
              configurable: !(2 & t3),
              writable: !(4 & t3),
              value: e2
            };
          };
        },
        6522: function(t2, e2, r2) {
          var n = r2(8360), o = r2(2560), i = r2(5684);
          t2.exports = function(t3, e3, r3) {
            var a = n(e3);
            a in t3 ? o.f(t3, a, i(0, r3)) : t3[a] = r3;
          };
        },
        1797: function(t2, e2, r2) {
          var n = r2(5027), o = r2(5899), i = TypeError;
          t2.exports = function(t3) {
            if (n(this), "string" === t3 || "default" === t3)
              t3 = "string";
            else if ("number" !== t3)
              throw new i("Incorrect hint");
            return o(this, t3);
          };
        },
        2148: function(t2, e2, r2) {
          var n = r2(8702), o = r2(2560);
          t2.exports = function(t3, e3, r3) {
            return r3.get && n(r3.get, e3, {
              getter: true
            }), r3.set && n(r3.set, e3, {
              setter: true
            }), o.f(t3, e3, r3);
          };
        },
        1880: function(t2, e2, r2) {
          var n = r2(9985), o = r2(2560), i = r2(8702), a = r2(5014);
          t2.exports = function(t3, e3, r3, u) {
            u || (u = {});
            var c = u.enumerable, s = void 0 !== u.name ? u.name : e3;
            if (n(r3) && i(r3, s, u), u.global)
              c ? t3[e3] = r3 : a(e3, r3);
            else {
              try {
                u.unsafe ? t3[e3] && (c = true) : delete t3[e3];
              } catch (t4) {
              }
              c ? t3[e3] = r3 : o.f(t3, e3, {
                value: r3,
                enumerable: false,
                configurable: !u.nonConfigurable,
                writable: !u.nonWritable
              });
            }
            return t3;
          };
        },
        6045: function(t2, e2, r2) {
          var n = r2(1880);
          t2.exports = function(t3, e3, r3) {
            for (var o in e3)
              n(t3, o, e3[o], r3);
            return t3;
          };
        },
        5014: function(t2, e2, r2) {
          var n = r2(9037), o = Object.defineProperty;
          t2.exports = function(t3, e3) {
            try {
              o(n, t3, {
                value: e3,
                configurable: true,
                writable: true
              });
            } catch (r3) {
              n[t3] = e3;
            }
            return e3;
          };
        },
        7697: function(t2, e2, r2) {
          var n = r2(3689);
          t2.exports = !n(function() {
            return 7 !== Object.defineProperty({}, 1, {
              get: function() {
                return 7;
              }
            })[1];
          });
        },
        2659: function(t2) {
          var e2 = "object" == typeof document && document.all, r2 = void 0 === e2 && void 0 !== e2;
          t2.exports = {
            all: e2,
            IS_HTMLDDA: r2
          };
        },
        6420: function(t2, e2, r2) {
          var n = r2(9037), o = r2(8999), i = n.document, a = o(i) && o(i.createElement);
          t2.exports = function(t3) {
            return a ? i.createElement(t3) : {};
          };
        },
        5565: function(t2) {
          var e2 = TypeError;
          t2.exports = function(t3) {
            if (t3 > 9007199254740991)
              throw e2("Maximum allowed index exceeded");
            return t3;
          };
        },
        6338: function(t2) {
          t2.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
          };
        },
        3265: function(t2, e2, r2) {
          var n = r2(6420)("span").classList, o = n && n.constructor && n.constructor.prototype;
          t2.exports = o === Object.prototype ? void 0 : o;
        },
        2532: function(t2, e2, r2) {
          var n = r2(8563), o = r2(806);
          t2.exports = !n && !o && "object" == typeof window && "object" == typeof document;
        },
        8563: function(t2) {
          t2.exports = "object" == typeof Deno && Deno && "object" == typeof Deno.version;
        },
        3221: function(t2, e2, r2) {
          var n = r2(71);
          t2.exports = /ipad|iphone|ipod/i.test(n) && "undefined" != typeof Pebble;
        },
        4764: function(t2, e2, r2) {
          var n = r2(71);
          t2.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(n);
        },
        806: function(t2, e2, r2) {
          var n = r2(9037), o = r2(6648);
          t2.exports = "process" === o(n.process);
        },
        7486: function(t2, e2, r2) {
          var n = r2(71);
          t2.exports = /web0s(?!.*chrome)/i.test(n);
        },
        71: function(t2) {
          t2.exports = "undefined" != typeof navigator && String(navigator.userAgent) || "";
        },
        3615: function(t2, e2, r2) {
          var n, o, i = r2(9037), a = r2(71), u = i.process, c = i.Deno, s = u && u.versions || c && c.version, f = s && s.v8;
          f && (o = (n = f.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])), !o && a && (!(n = a.match(/Edge\/(\d+)/)) || n[1] >= 74) && (n = a.match(/Chrome\/(\d+)/)) && (o = +n[1]), t2.exports = o;
        },
        2739: function(t2) {
          t2.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
        },
        6610: function(t2, e2, r2) {
          var n = r2(8844), o = Error, i = n("".replace), a = String(new o("zxcasd").stack), u = /\n\s*at [^:]*:[^\n]*/, c = u.test(a);
          t2.exports = function(t3, e3) {
            if (c && "string" == typeof t3 && !o.prepareStackTrace)
              for (; e3--; )
                t3 = i(t3, u, "");
            return t3;
          };
        },
        5411: function(t2, e2, r2) {
          var n = r2(5773), o = r2(6610), i = r2(9599), a = Error.captureStackTrace;
          t2.exports = function(t3, e3, r3, u) {
            i && (a ? a(t3, e3) : n(t3, "stack", o(r3, u)));
          };
        },
        9599: function(t2, e2, r2) {
          var n = r2(3689), o = r2(5684);
          t2.exports = !n(function() {
            var t3 = new Error("a");
            return !("stack" in t3) || (Object.defineProperty(t3, "stack", o(1, 7)), 7 !== t3.stack);
          });
        },
        9989: function(t2, e2, r2) {
          var n = r2(9037), o = r2(2474).f, i = r2(5773), a = r2(1880), u = r2(5014), c = r2(8758), s = r2(5266);
          t2.exports = function(t3, e3) {
            var r3, f, l, p, h, v = t3.target, d = t3.global, y = t3.stat;
            if (r3 = d ? n : y ? n[v] || u(v, {}) : (n[v] || {}).prototype)
              for (f in e3) {
                if (p = e3[f], l = t3.dontCallGetSet ? (h = o(r3, f)) && h.value : r3[f], !s(d ? f : v + (y ? "." : "#") + f, t3.forced) && void 0 !== l) {
                  if (typeof p == typeof l)
                    continue;
                  c(p, l);
                }
                (t3.sham || l && l.sham) && i(p, "sham", true), a(r3, f, p, t3);
              }
          };
        },
        3689: function(t2) {
          t2.exports = function(t3) {
            try {
              return !!t3();
            } catch (t4) {
              return true;
            }
          };
        },
        8678: function(t2, e2, r2) {
          r2(4043);
          var n = r2(6576), o = r2(1880), i = r2(6308), a = r2(3689), u = r2(4201), c = r2(5773), s = u("species"), f = RegExp.prototype;
          t2.exports = function(t3, e3, r3, l) {
            var p = u(t3), h = !a(function() {
              var e4 = {};
              return e4[p] = function() {
                return 7;
              }, 7 !== ""[t3](e4);
            }), v = h && !a(function() {
              var e4 = false, r4 = /a/;
              return "split" === t3 && ((r4 = {}).constructor = {}, r4.constructor[s] = function() {
                return r4;
              }, r4.flags = "", r4[p] = /./[p]), r4.exec = function() {
                return e4 = true, null;
              }, r4[p](""), !e4;
            });
            if (!h || !v || r3) {
              var d = n(/./[p]), y = e3(p, ""[t3], function(t4, e4, r4, o2, a2) {
                var u2 = n(t4), c2 = e4.exec;
                return c2 === i || c2 === f.exec ? h && !a2 ? {
                  done: true,
                  value: d(e4, r4, o2)
                } : {
                  done: true,
                  value: u2(r4, e4, o2)
                } : {
                  done: false
                };
              });
              o(String.prototype, t3, y[0]), o(f, p, y[1]);
            }
            l && c(f[p], "sham", true);
          };
        },
        1594: function(t2, e2, r2) {
          var n = r2(3689);
          t2.exports = !n(function() {
            return Object.isExtensible(Object.preventExtensions({}));
          });
        },
        1735: function(t2, e2, r2) {
          var n = r2(7215), o = Function.prototype, i = o.apply, a = o.call;
          t2.exports = "object" == typeof Reflect && Reflect.apply || (n ? a.bind(i) : function() {
            return a.apply(i, arguments);
          });
        },
        4071: function(t2, e2, r2) {
          var n = r2(6576), o = r2(509), i = r2(7215), a = n(n.bind);
          t2.exports = function(t3, e3) {
            return o(t3), void 0 === e3 ? t3 : i ? a(t3, e3) : function() {
              return t3.apply(e3, arguments);
            };
          };
        },
        7215: function(t2, e2, r2) {
          var n = r2(3689);
          t2.exports = !n(function() {
            var t3 = function() {
            }.bind();
            return "function" != typeof t3 || t3.hasOwnProperty("prototype");
          });
        },
        6761: function(t2, e2, r2) {
          var n = r2(8844), o = r2(509), i = r2(8999), a = r2(6812), u = r2(6004), c = r2(7215), s = Function, f = n([].concat), l = n([].join), p = {};
          t2.exports = c ? s.bind : function(t3) {
            var e3 = o(this), r3 = e3.prototype, n2 = u(arguments, 1), c2 = function() {
              var r4 = f(n2, u(arguments));
              return this instanceof c2 ? function(t4, e4, r5) {
                if (!a(p, e4)) {
                  for (var n3 = [], o2 = 0; o2 < e4; o2++)
                    n3[o2] = "a[" + o2 + "]";
                  p[e4] = s("C,a", "return new C(" + l(n3, ",") + ")");
                }
                return p[e4](t4, r5);
              }(e3, r4.length, r4) : e3.apply(t3, r4);
            };
            return i(r3) && (c2.prototype = r3), c2;
          };
        },
        2615: function(t2, e2, r2) {
          var n = r2(7215), o = Function.prototype.call;
          t2.exports = n ? o.bind(o) : function() {
            return o.apply(o, arguments);
          };
        },
        1236: function(t2, e2, r2) {
          var n = r2(7697), o = r2(6812), i = Function.prototype, a = n && Object.getOwnPropertyDescriptor, u = o(i, "name"), c = u && "something" === function() {
          }.name, s = u && (!n || n && a(i, "name").configurable);
          t2.exports = {
            EXISTS: u,
            PROPER: c,
            CONFIGURABLE: s
          };
        },
        2743: function(t2, e2, r2) {
          var n = r2(8844), o = r2(509);
          t2.exports = function(t3, e3, r3) {
            try {
              return n(o(Object.getOwnPropertyDescriptor(t3, e3)[r3]));
            } catch (t4) {
            }
          };
        },
        6576: function(t2, e2, r2) {
          var n = r2(6648), o = r2(8844);
          t2.exports = function(t3) {
            if ("Function" === n(t3))
              return o(t3);
          };
        },
        8844: function(t2, e2, r2) {
          var n = r2(7215), o = Function.prototype, i = o.call, a = n && o.bind.bind(i, i);
          t2.exports = n ? a : function(t3) {
            return function() {
              return i.apply(t3, arguments);
            };
          };
        },
        6058: function(t2, e2, r2) {
          var n = r2(9037), o = r2(9985);
          t2.exports = function(t3, e3) {
            return arguments.length < 2 ? (r3 = n[t3], o(r3) ? r3 : void 0) : n[t3] && n[t3][e3];
            var r3;
          };
        },
        2302: function(t2) {
          t2.exports = function(t3) {
            return {
              iterator: t3,
              next: t3.next,
              done: false
            };
          };
        },
        1664: function(t2, e2, r2) {
          var n = r2(926), o = r2(4849), i = r2(981), a = r2(9478), u = r2(4201)("iterator");
          t2.exports = function(t3) {
            if (!i(t3))
              return o(t3, u) || o(t3, "@@iterator") || a[n(t3)];
          };
        },
        5185: function(t2, e2, r2) {
          var n = r2(2615), o = r2(509), i = r2(5027), a = r2(3691), u = r2(1664), c = TypeError;
          t2.exports = function(t3, e3) {
            var r3 = arguments.length < 2 ? u(t3) : e3;
            if (o(r3))
              return i(n(r3, t3));
            throw new c(a(t3) + " is not iterable");
          };
        },
        2643: function(t2, e2, r2) {
          var n = r2(8844), o = r2(2297), i = r2(9985), a = r2(6648), u = r2(4327), c = n([].push);
          t2.exports = function(t3) {
            if (i(t3))
              return t3;
            if (o(t3)) {
              for (var e3 = t3.length, r3 = [], n2 = 0; n2 < e3; n2++) {
                var s = t3[n2];
                "string" == typeof s ? c(r3, s) : "number" != typeof s && "Number" !== a(s) && "String" !== a(s) || c(r3, u(s));
              }
              var f = r3.length, l = true;
              return function(t4, e4) {
                if (l)
                  return l = false, e4;
                if (o(this))
                  return e4;
                for (var n3 = 0; n3 < f; n3++)
                  if (r3[n3] === t4)
                    return e4;
              };
            }
          };
        },
        4849: function(t2, e2, r2) {
          var n = r2(509), o = r2(981);
          t2.exports = function(t3, e3) {
            var r3 = t3[e3];
            return o(r3) ? void 0 : n(r3);
          };
        },
        7017: function(t2, e2, r2) {
          var n = r2(8844), o = r2(690), i = Math.floor, a = n("".charAt), u = n("".replace), c = n("".slice), s = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, f = /\$([$&'`]|\d{1,2})/g;
          t2.exports = function(t3, e3, r3, n2, l, p) {
            var h = r3 + t3.length, v = n2.length, d = f;
            return void 0 !== l && (l = o(l), d = s), u(p, d, function(o2, u2) {
              var s2;
              switch (a(u2, 0)) {
                case "$":
                  return "$";
                case "&":
                  return t3;
                case "`":
                  return c(e3, 0, r3);
                case "'":
                  return c(e3, h);
                case "<":
                  s2 = l[c(u2, 1, -1)];
                  break;
                default:
                  var f2 = +u2;
                  if (0 === f2)
                    return o2;
                  if (f2 > v) {
                    var p2 = i(f2 / 10);
                    return 0 === p2 ? o2 : p2 <= v ? void 0 === n2[p2 - 1] ? a(u2, 1) : n2[p2 - 1] + a(u2, 1) : o2;
                  }
                  s2 = n2[f2 - 1];
              }
              return void 0 === s2 ? "" : s2;
            });
          };
        },
        9037: function(t2, e2, r2) {
          var n = function(t3) {
            return t3 && t3.Math === Math && t3;
          };
          t2.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof r2.g && r2.g) || n("object" == typeof this && this) || /* @__PURE__ */ function() {
            return this;
          }() || Function("return this")();
        },
        6812: function(t2, e2, r2) {
          var n = r2(8844), o = r2(690), i = n({}.hasOwnProperty);
          t2.exports = Object.hasOwn || function(t3, e3) {
            return i(o(t3), e3);
          };
        },
        7248: function(t2) {
          t2.exports = {};
        },
        920: function(t2) {
          t2.exports = function(t3, e2) {
            try {
              1 === arguments.length ? console.error(t3) : console.error(t3, e2);
            } catch (t4) {
            }
          };
        },
        2688: function(t2, e2, r2) {
          var n = r2(6058);
          t2.exports = n("document", "documentElement");
        },
        8506: function(t2, e2, r2) {
          var n = r2(7697), o = r2(3689), i = r2(6420);
          t2.exports = !n && !o(function() {
            return 7 !== Object.defineProperty(i("div"), "a", {
              get: function() {
                return 7;
              }
            }).a;
          });
        },
        4413: function(t2, e2, r2) {
          var n = r2(8844), o = r2(3689), i = r2(6648), a = Object, u = n("".split);
          t2.exports = o(function() {
            return !a("z").propertyIsEnumerable(0);
          }) ? function(t3) {
            return "String" === i(t3) ? u(t3, "") : a(t3);
          } : a;
        },
        3457: function(t2, e2, r2) {
          var n = r2(9985), o = r2(8999), i = r2(9385);
          t2.exports = function(t3, e3, r3) {
            var a, u;
            return i && n(a = e3.constructor) && a !== r3 && o(u = a.prototype) && u !== r3.prototype && i(t3, u), t3;
          };
        },
        6738: function(t2, e2, r2) {
          var n = r2(8844), o = r2(9985), i = r2(4091), a = n(Function.toString);
          o(i.inspectSource) || (i.inspectSource = function(t3) {
            return a(t3);
          }), t2.exports = i.inspectSource;
        },
        2570: function(t2, e2, r2) {
          var n = r2(8999), o = r2(5773);
          t2.exports = function(t3, e3) {
            n(e3) && "cause" in e3 && o(t3, "cause", e3.cause);
          };
        },
        5375: function(t2, e2, r2) {
          var n = r2(9989), o = r2(8844), i = r2(7248), a = r2(8999), u = r2(6812), c = r2(2560).f, s = r2(2741), f = r2(6062), l = r2(1129), p = r2(4630), h = r2(1594), v = false, d = p("meta"), y = 0, g = function(t3) {
            c(t3, d, {
              value: {
                objectID: "O" + y++,
                weakData: {}
              }
            });
          }, m = t2.exports = {
            enable: function() {
              m.enable = function() {
              }, v = true;
              var t3 = s.f, e3 = o([].splice), r3 = {};
              r3[d] = 1, t3(r3).length && (s.f = function(r4) {
                for (var n2 = t3(r4), o2 = 0, i2 = n2.length; o2 < i2; o2++)
                  if (n2[o2] === d) {
                    e3(n2, o2, 1);
                    break;
                  }
                return n2;
              }, n({
                target: "Object",
                stat: true,
                forced: true
              }, {
                getOwnPropertyNames: f.f
              }));
            },
            fastKey: function(t3, e3) {
              if (!a(t3))
                return "symbol" == typeof t3 ? t3 : ("string" == typeof t3 ? "S" : "P") + t3;
              if (!u(t3, d)) {
                if (!l(t3))
                  return "F";
                if (!e3)
                  return "E";
                g(t3);
              }
              return t3[d].objectID;
            },
            getWeakData: function(t3, e3) {
              if (!u(t3, d)) {
                if (!l(t3))
                  return true;
                if (!e3)
                  return false;
                g(t3);
              }
              return t3[d].weakData;
            },
            onFreeze: function(t3) {
              return h && v && l(t3) && !u(t3, d) && g(t3), t3;
            }
          };
          i[d] = true;
        },
        618: function(t2, e2, r2) {
          var n, o, i, a = r2(9834), u = r2(9037), c = r2(8999), s = r2(5773), f = r2(6812), l = r2(4091), p = r2(2713), h = r2(7248), v = "Object already initialized", d = u.TypeError, y = u.WeakMap;
          if (a || l.state) {
            var g = l.state || (l.state = new y());
            g.get = g.get, g.has = g.has, g.set = g.set, n = function(t3, e3) {
              if (g.has(t3))
                throw new d(v);
              return e3.facade = t3, g.set(t3, e3), e3;
            }, o = function(t3) {
              return g.get(t3) || {};
            }, i = function(t3) {
              return g.has(t3);
            };
          } else {
            var m = p("state");
            h[m] = true, n = function(t3, e3) {
              if (f(t3, m))
                throw new d(v);
              return e3.facade = t3, s(t3, m, e3), e3;
            }, o = function(t3) {
              return f(t3, m) ? t3[m] : {};
            }, i = function(t3) {
              return f(t3, m);
            };
          }
          t2.exports = {
            set: n,
            get: o,
            has: i,
            enforce: function(t3) {
              return i(t3) ? o(t3) : n(t3, {});
            },
            getterFor: function(t3) {
              return function(e3) {
                var r3;
                if (!c(e3) || (r3 = o(e3)).type !== t3)
                  throw new d("Incompatible receiver, " + t3 + " required");
                return r3;
              };
            }
          };
        },
        3292: function(t2, e2, r2) {
          var n = r2(4201), o = r2(9478), i = n("iterator"), a = Array.prototype;
          t2.exports = function(t3) {
            return void 0 !== t3 && (o.Array === t3 || a[i] === t3);
          };
        },
        2297: function(t2, e2, r2) {
          var n = r2(6648);
          t2.exports = Array.isArray || function(t3) {
            return "Array" === n(t3);
          };
        },
        9985: function(t2, e2, r2) {
          var n = r2(2659), o = n.all;
          t2.exports = n.IS_HTMLDDA ? function(t3) {
            return "function" == typeof t3 || t3 === o;
          } : function(t3) {
            return "function" == typeof t3;
          };
        },
        9429: function(t2, e2, r2) {
          var n = r2(8844), o = r2(3689), i = r2(9985), a = r2(926), u = r2(6058), c = r2(6738), s = function() {
          }, f = [], l = u("Reflect", "construct"), p = /^\s*(?:class|function)\b/, h = n(p.exec), v = !p.test(s), d = function(t3) {
            if (!i(t3))
              return false;
            try {
              return l(s, f, t3), true;
            } catch (t4) {
              return false;
            }
          }, y = function(t3) {
            if (!i(t3))
              return false;
            switch (a(t3)) {
              case "AsyncFunction":
              case "GeneratorFunction":
              case "AsyncGeneratorFunction":
                return false;
            }
            try {
              return v || !!h(p, c(t3));
            } catch (t4) {
              return true;
            }
          };
          y.sham = true, t2.exports = !l || o(function() {
            var t3;
            return d(d.call) || !d(Object) || !d(function() {
              t3 = true;
            }) || t3;
          }) ? y : d;
        },
        5266: function(t2, e2, r2) {
          var n = r2(3689), o = r2(9985), i = /#|\.prototype\./, a = function(t3, e3) {
            var r3 = c[u(t3)];
            return r3 === f || r3 !== s && (o(e3) ? n(e3) : !!e3);
          }, u = a.normalize = function(t3) {
            return String(t3).replace(i, ".").toLowerCase();
          }, c = a.data = {}, s = a.NATIVE = "N", f = a.POLYFILL = "P";
          t2.exports = a;
        },
        981: function(t2) {
          t2.exports = function(t3) {
            return null == t3;
          };
        },
        8999: function(t2, e2, r2) {
          var n = r2(9985), o = r2(2659), i = o.all;
          t2.exports = o.IS_HTMLDDA ? function(t3) {
            return "object" == typeof t3 ? null !== t3 : n(t3) || t3 === i;
          } : function(t3) {
            return "object" == typeof t3 ? null !== t3 : n(t3);
          };
        },
        3931: function(t2) {
          t2.exports = false;
        },
        1245: function(t2, e2, r2) {
          var n = r2(8999), o = r2(6648), i = r2(4201)("match");
          t2.exports = function(t3) {
            var e3;
            return n(t3) && (void 0 !== (e3 = t3[i]) ? !!e3 : "RegExp" === o(t3));
          };
        },
        734: function(t2, e2, r2) {
          var n = r2(6058), o = r2(9985), i = r2(3622), a = r2(9525), u = Object;
          t2.exports = a ? function(t3) {
            return "symbol" == typeof t3;
          } : function(t3) {
            var e3 = n("Symbol");
            return o(e3) && i(e3.prototype, u(t3));
          };
        },
        6704: function(t2, e2, r2) {
          var n = r2(2615);
          t2.exports = function(t3, e3, r3) {
            for (var o, i, a = r3 ? t3 : t3.iterator, u = t3.next; !(o = n(u, a)).done; )
              if (void 0 !== (i = e3(o.value)))
                return i;
          };
        },
        8734: function(t2, e2, r2) {
          var n = r2(4071), o = r2(2615), i = r2(5027), a = r2(3691), u = r2(3292), c = r2(6310), s = r2(3622), f = r2(5185), l = r2(1664), p = r2(2125), h = TypeError, v = function(t3, e3) {
            this.stopped = t3, this.result = e3;
          }, d = v.prototype;
          t2.exports = function(t3, e3, r3) {
            var y, g, m, b, w, x, k, S = r3 && r3.that, E = !(!r3 || !r3.AS_ENTRIES), O = !(!r3 || !r3.IS_RECORD), P = !(!r3 || !r3.IS_ITERATOR), j = !(!r3 || !r3.INTERRUPTED), L = n(e3, S), _ = function(t4) {
              return y && p(y, "normal", t4), new v(true, t4);
            }, I = function(t4) {
              return E ? (i(t4), j ? L(t4[0], t4[1], _) : L(t4[0], t4[1])) : j ? L(t4, _) : L(t4);
            };
            if (O)
              y = t3.iterator;
            else if (P)
              y = t3;
            else {
              if (!(g = l(t3)))
                throw new h(a(t3) + " is not iterable");
              if (u(g)) {
                for (m = 0, b = c(t3); b > m; m++)
                  if ((w = I(t3[m])) && s(d, w))
                    return w;
                return new v(false);
              }
              y = f(t3, g);
            }
            for (x = O ? t3.next : y.next; !(k = o(x, y)).done; ) {
              try {
                w = I(k.value);
              } catch (t4) {
                p(y, "throw", t4);
              }
              if ("object" == typeof w && w && s(d, w))
                return w;
            }
            return new v(false);
          };
        },
        2125: function(t2, e2, r2) {
          var n = r2(2615), o = r2(5027), i = r2(4849);
          t2.exports = function(t3, e3, r3) {
            var a, u;
            o(t3);
            try {
              if (!(a = i(t3, "return"))) {
                if ("throw" === e3)
                  throw r3;
                return r3;
              }
              a = n(a, t3);
            } catch (t4) {
              u = true, a = t4;
            }
            if ("throw" === e3)
              throw r3;
            if (u)
              throw a;
            return o(a), r3;
          };
        },
        974: function(t2, e2, r2) {
          var n = r2(2013).IteratorPrototype, o = r2(5391), i = r2(5684), a = r2(5997), u = r2(9478), c = function() {
            return this;
          };
          t2.exports = function(t3, e3, r3, s) {
            var f = e3 + " Iterator";
            return t3.prototype = o(n, {
              next: i(+!s, r3)
            }), a(t3, f, false, true), u[f] = c, t3;
          };
        },
        5419: function(t2, e2, r2) {
          var n = r2(2615), o = r2(5391), i = r2(5773), a = r2(6045), u = r2(4201), c = r2(618), s = r2(4849), f = r2(2013).IteratorPrototype, l = r2(7807), p = r2(2125), h = u("toStringTag"), v = "IteratorHelper", d = "WrapForValidIterator", y = c.set, g = function(t3) {
            var e3 = c.getterFor(t3 ? d : v);
            return a(o(f), {
              next: function() {
                var r3 = e3(this);
                if (t3)
                  return r3.nextHandler();
                try {
                  var n2 = r3.done ? void 0 : r3.nextHandler();
                  return l(n2, r3.done);
                } catch (t4) {
                  throw r3.done = true, t4;
                }
              },
              return: function() {
                var r3 = e3(this), o2 = r3.iterator;
                if (r3.done = true, t3) {
                  var i2 = s(o2, "return");
                  return i2 ? n(i2, o2) : l(void 0, true);
                }
                if (r3.inner)
                  try {
                    p(r3.inner.iterator, "normal");
                  } catch (t4) {
                    return p(o2, "throw", t4);
                  }
                return p(o2, "normal"), l(void 0, true);
              }
            });
          }, m = g(true), b = g(false);
          i(b, h, "Iterator Helper"), t2.exports = function(t3, e3) {
            var r3 = function(r4, n2) {
              n2 ? (n2.iterator = r4.iterator, n2.next = r4.next) : n2 = r4, n2.type = e3 ? d : v, n2.nextHandler = t3, n2.counter = 0, n2.done = false, y(this, n2);
            };
            return r3.prototype = e3 ? m : b, r3;
          };
        },
        1934: function(t2, e2, r2) {
          var n = r2(9989), o = r2(2615), i = r2(3931), a = r2(1236), u = r2(9985), c = r2(974), s = r2(1868), f = r2(9385), l = r2(5997), p = r2(5773), h = r2(1880), v = r2(4201), d = r2(9478), y = r2(2013), g = a.PROPER, m = a.CONFIGURABLE, b = y.IteratorPrototype, w = y.BUGGY_SAFARI_ITERATORS, x = v("iterator"), k = "keys", S = "values", E = "entries", O = function() {
            return this;
          };
          t2.exports = function(t3, e3, r3, a2, v2, y2, P) {
            c(r3, e3, a2);
            var j, L, _, I = function(t4) {
              if (t4 === v2 && C)
                return C;
              if (!w && t4 && t4 in $2)
                return $2[t4];
              switch (t4) {
                case k:
                case S:
                case E:
                  return function() {
                    return new r3(this, t4);
                  };
              }
              return function() {
                return new r3(this);
              };
            }, T = e3 + " Iterator", R = false, $2 = t3.prototype, N = $2[x] || $2["@@iterator"] || v2 && $2[v2], C = !w && N || I(v2), A = "Array" === e3 && $2.entries || N;
            if (A && (j = s(A.call(new t3()))) !== Object.prototype && j.next && (i || s(j) === b || (f ? f(j, b) : u(j[x]) || h(j, x, O)), l(j, T, true, true), i && (d[T] = O)), g && v2 === S && N && N.name !== S && (!i && m ? p($2, "name", S) : (R = true, C = function() {
              return o(N, this);
            })), v2)
              if (L = {
                values: I(S),
                keys: y2 ? C : I(k),
                entries: I(E)
              }, P)
                for (_ in L)
                  (w || R || !(_ in $2)) && h($2, _, L[_]);
              else
                n({
                  target: e3,
                  proto: true,
                  forced: w || R
                }, L);
            return i && !P || $2[x] === C || h($2, x, C, {
              name: v2
            }), d[e3] = C, L;
          };
        },
        2013: function(t2, e2, r2) {
          var n, o, i, a = r2(3689), u = r2(9985), c = r2(8999), s = r2(5391), f = r2(1868), l = r2(1880), p = r2(4201), h = r2(3931), v = p("iterator"), d = false;
          [].keys && ("next" in (i = [].keys()) ? (o = f(f(i))) !== Object.prototype && (n = o) : d = true), !c(n) || a(function() {
            var t3 = {};
            return n[v].call(t3) !== t3;
          }) ? n = {} : h && (n = s(n)), u(n[v]) || l(n, v, function() {
            return this;
          }), t2.exports = {
            IteratorPrototype: n,
            BUGGY_SAFARI_ITERATORS: d
          };
        },
        9478: function(t2) {
          t2.exports = {};
        },
        6310: function(t2, e2, r2) {
          var n = r2(3126);
          t2.exports = function(t3) {
            return n(t3.length);
          };
        },
        8702: function(t2, e2, r2) {
          var n = r2(8844), o = r2(3689), i = r2(9985), a = r2(6812), u = r2(7697), c = r2(1236).CONFIGURABLE, s = r2(6738), f = r2(618), l = f.enforce, p = f.get, h = String, v = Object.defineProperty, d = n("".slice), y = n("".replace), g = n([].join), m = u && !o(function() {
            return 8 !== v(function() {
            }, "length", {
              value: 8
            }).length;
          }), b = String(String).split("String"), w = t2.exports = function(t3, e3, r3) {
            "Symbol(" === d(h(e3), 0, 7) && (e3 = "[" + y(h(e3), /^Symbol\(([^)]*)\)/, "$1") + "]"), r3 && r3.getter && (e3 = "get " + e3), r3 && r3.setter && (e3 = "set " + e3), (!a(t3, "name") || c && t3.name !== e3) && (u ? v(t3, "name", {
              value: e3,
              configurable: true
            }) : t3.name = e3), m && r3 && a(r3, "arity") && t3.length !== r3.arity && v(t3, "length", {
              value: r3.arity
            });
            try {
              r3 && a(r3, "constructor") && r3.constructor ? u && v(t3, "prototype", {
                writable: false
              }) : t3.prototype && (t3.prototype = void 0);
            } catch (t4) {
            }
            var n2 = l(t3);
            return a(n2, "source") || (n2.source = g(b, "string" == typeof e3 ? e3 : "")), t3;
          };
          Function.prototype.toString = w(function() {
            return i(this) && p(this).source || s(this);
          }, "toString");
        },
        3914: function(t2, e2, r2) {
          var n = r2(8844), o = Map.prototype;
          t2.exports = {
            Map,
            set: n(o.set),
            get: n(o.get),
            has: n(o.has),
            remove: n(o.delete),
            proto: o
          };
        },
        613: function(t2, e2, r2) {
          var n = r2(8844), o = r2(6704), i = r2(3914), a = i.Map, u = i.proto, c = n(u.forEach), s = n(u.entries), f = s(new a()).next;
          t2.exports = function(t3, e3, r3) {
            return r3 ? o({
              iterator: s(t3),
              next: f
            }, function(t4) {
              return e3(t4[1], t4[0]);
            }) : c(t3, e3);
          };
        },
        8828: function(t2) {
          var e2 = Math.ceil, r2 = Math.floor;
          t2.exports = Math.trunc || function(t3) {
            var n = +t3;
            return (n > 0 ? r2 : e2)(n);
          };
        },
        231: function(t2, e2, r2) {
          var n, o, i, a, u, c = r2(9037), s = r2(4071), f = r2(2474).f, l = r2(9886).set, p = r2(4410), h = r2(4764), v = r2(3221), d = r2(7486), y = r2(806), g = c.MutationObserver || c.WebKitMutationObserver, m = c.document, b = c.process, w = c.Promise, x = f(c, "queueMicrotask"), k = x && x.value;
          if (!k) {
            var S = new p(), E = function() {
              var t3, e3;
              for (y && (t3 = b.domain) && t3.exit(); e3 = S.get(); )
                try {
                  e3();
                } catch (t4) {
                  throw S.head && n(), t4;
                }
              t3 && t3.enter();
            };
            h || y || d || !g || !m ? !v && w && w.resolve ? ((a = w.resolve(void 0)).constructor = w, u = s(a.then, a), n = function() {
              u(E);
            }) : y ? n = function() {
              b.nextTick(E);
            } : (l = s(l, c), n = function() {
              l(E);
            }) : (o = true, i = m.createTextNode(""), new g(E).observe(i, {
              characterData: true
            }), n = function() {
              i.data = o = !o;
            }), k = function(t3) {
              S.head || n(), S.add(t3);
            };
          }
          t2.exports = k;
        },
        8742: function(t2, e2, r2) {
          var n = r2(509), o = TypeError, i = function(t3) {
            var e3, r3;
            this.promise = new t3(function(t4, n2) {
              if (void 0 !== e3 || void 0 !== r3)
                throw new o("Bad Promise constructor");
              e3 = t4, r3 = n2;
            }), this.resolve = n(e3), this.reject = n(r3);
          };
          t2.exports.f = function(t3) {
            return new i(t3);
          };
        },
        3841: function(t2, e2, r2) {
          var n = r2(4327);
          t2.exports = function(t3, e3) {
            return void 0 === t3 ? arguments.length < 2 ? "" : e3 : n(t3);
          };
        },
        2124: function(t2, e2, r2) {
          var n = r2(1245), o = TypeError;
          t2.exports = function(t3) {
            if (n(t3))
              throw new o("The method doesn't accept regular expressions");
            return t3;
          };
        },
        5394: function(t2, e2, r2) {
          var n = r2(7697), o = r2(8844), i = r2(2615), a = r2(3689), u = r2(300), c = r2(7518), s = r2(9556), f = r2(690), l = r2(4413), p = Object.assign, h = Object.defineProperty, v = o([].concat);
          t2.exports = !p || a(function() {
            if (n && 1 !== p({
              b: 1
            }, p(h({}, "a", {
              enumerable: true,
              get: function() {
                h(this, "b", {
                  value: 3,
                  enumerable: false
                });
              }
            }), {
              b: 2
            })).b)
              return true;
            var t3 = {}, e3 = {}, r3 = Symbol("assign detection"), o2 = "abcdefghijklmnopqrst";
            return t3[r3] = 7, o2.split("").forEach(function(t4) {
              e3[t4] = t4;
            }), 7 !== p({}, t3)[r3] || u(p({}, e3)).join("") !== o2;
          }) ? function(t3, e3) {
            for (var r3 = f(t3), o2 = arguments.length, a2 = 1, p2 = c.f, h2 = s.f; o2 > a2; )
              for (var d, y = l(arguments[a2++]), g = p2 ? v(u(y), p2(y)) : u(y), m = g.length, b = 0; m > b; )
                d = g[b++], n && !i(h2, y, d) || (r3[d] = y[d]);
            return r3;
          } : p;
        },
        5391: function(t2, e2, r2) {
          var n, o = r2(5027), i = r2(8920), a = r2(2739), u = r2(7248), c = r2(2688), s = r2(6420), f = r2(2713), l = "prototype", p = "script", h = f("IE_PROTO"), v = function() {
          }, d = function(t3) {
            return "<" + p + ">" + t3 + "</" + p + ">";
          }, y = function(t3) {
            t3.write(d("")), t3.close();
            var e3 = t3.parentWindow.Object;
            return t3 = null, e3;
          }, g = function() {
            try {
              n = new ActiveXObject("htmlfile");
            } catch (t4) {
            }
            var t3, e3, r3;
            g = "undefined" != typeof document ? document.domain && n ? y(n) : (e3 = s("iframe"), r3 = "java" + p + ":", e3.style.display = "none", c.appendChild(e3), e3.src = String(r3), (t3 = e3.contentWindow.document).open(), t3.write(d("document.F=Object")), t3.close(), t3.F) : y(n);
            for (var o2 = a.length; o2--; )
              delete g[l][a[o2]];
            return g();
          };
          u[h] = true, t2.exports = Object.create || function(t3, e3) {
            var r3;
            return null !== t3 ? (v[l] = o(t3), r3 = new v(), v[l] = null, r3[h] = t3) : r3 = g(), void 0 === e3 ? r3 : i.f(r3, e3);
          };
        },
        8920: function(t2, e2, r2) {
          var n = r2(7697), o = r2(5648), i = r2(2560), a = r2(5027), u = r2(5290), c = r2(300);
          e2.f = n && !o ? Object.defineProperties : function(t3, e3) {
            a(t3);
            for (var r3, n2 = u(e3), o2 = c(e3), s = o2.length, f = 0; s > f; )
              i.f(t3, r3 = o2[f++], n2[r3]);
            return t3;
          };
        },
        2560: function(t2, e2, r2) {
          var n = r2(7697), o = r2(8506), i = r2(5648), a = r2(5027), u = r2(8360), c = TypeError, s = Object.defineProperty, f = Object.getOwnPropertyDescriptor, l = "enumerable", p = "configurable", h = "writable";
          e2.f = n ? i ? function(t3, e3, r3) {
            if (a(t3), e3 = u(e3), a(r3), "function" == typeof t3 && "prototype" === e3 && "value" in r3 && h in r3 && !r3[h]) {
              var n2 = f(t3, e3);
              n2 && n2[h] && (t3[e3] = r3.value, r3 = {
                configurable: p in r3 ? r3[p] : n2[p],
                enumerable: l in r3 ? r3[l] : n2[l],
                writable: false
              });
            }
            return s(t3, e3, r3);
          } : s : function(t3, e3, r3) {
            if (a(t3), e3 = u(e3), a(r3), o)
              try {
                return s(t3, e3, r3);
              } catch (t4) {
              }
            if ("get" in r3 || "set" in r3)
              throw new c("Accessors not supported");
            return "value" in r3 && (t3[e3] = r3.value), t3;
          };
        },
        2474: function(t2, e2, r2) {
          var n = r2(7697), o = r2(2615), i = r2(9556), a = r2(5684), u = r2(5290), c = r2(8360), s = r2(6812), f = r2(8506), l = Object.getOwnPropertyDescriptor;
          e2.f = n ? l : function(t3, e3) {
            if (t3 = u(t3), e3 = c(e3), f)
              try {
                return l(t3, e3);
              } catch (t4) {
              }
            if (s(t3, e3))
              return a(!o(i.f, t3, e3), t3[e3]);
          };
        },
        6062: function(t2, e2, r2) {
          var n = r2(6648), o = r2(5290), i = r2(2741).f, a = r2(9015), u = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
          t2.exports.f = function(t3) {
            return u && "Window" === n(t3) ? function(t4) {
              try {
                return i(t4);
              } catch (t5) {
                return a(u);
              }
            }(t3) : i(o(t3));
          };
        },
        2741: function(t2, e2, r2) {
          var n = r2(4948), o = r2(2739).concat("length", "prototype");
          e2.f = Object.getOwnPropertyNames || function(t3) {
            return n(t3, o);
          };
        },
        7518: function(t2, e2) {
          e2.f = Object.getOwnPropertySymbols;
        },
        1868: function(t2, e2, r2) {
          var n = r2(6812), o = r2(9985), i = r2(690), a = r2(2713), u = r2(1748), c = a("IE_PROTO"), s = Object, f = s.prototype;
          t2.exports = u ? s.getPrototypeOf : function(t3) {
            var e3 = i(t3);
            if (n(e3, c))
              return e3[c];
            var r3 = e3.constructor;
            return o(r3) && e3 instanceof r3 ? r3.prototype : e3 instanceof s ? f : null;
          };
        },
        1129: function(t2, e2, r2) {
          var n = r2(3689), o = r2(8999), i = r2(6648), a = r2(1655), u = Object.isExtensible, c = n(function() {
            u(1);
          });
          t2.exports = c || a ? function(t3) {
            return !!o(t3) && (!a || "ArrayBuffer" !== i(t3)) && (!u || u(t3));
          } : u;
        },
        3622: function(t2, e2, r2) {
          var n = r2(8844);
          t2.exports = n({}.isPrototypeOf);
        },
        4948: function(t2, e2, r2) {
          var n = r2(8844), o = r2(6812), i = r2(5290), a = r2(4328).indexOf, u = r2(7248), c = n([].push);
          t2.exports = function(t3, e3) {
            var r3, n2 = i(t3), s = 0, f = [];
            for (r3 in n2)
              !o(u, r3) && o(n2, r3) && c(f, r3);
            for (; e3.length > s; )
              o(n2, r3 = e3[s++]) && (~a(f, r3) || c(f, r3));
            return f;
          };
        },
        300: function(t2, e2, r2) {
          var n = r2(4948), o = r2(2739);
          t2.exports = Object.keys || function(t3) {
            return n(t3, o);
          };
        },
        9556: function(t2, e2) {
          var r2 = {}.propertyIsEnumerable, n = Object.getOwnPropertyDescriptor, o = n && !r2.call({
            1: 2
          }, 1);
          e2.f = o ? function(t3) {
            var e3 = n(this, t3);
            return !!e3 && e3.enumerable;
          } : r2;
        },
        9385: function(t2, e2, r2) {
          var n = r2(2743), o = r2(5027), i = r2(3550);
          t2.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
            var t3, e3 = false, r3 = {};
            try {
              (t3 = n(Object.prototype, "__proto__", "set"))(r3, []), e3 = r3 instanceof Array;
            } catch (t4) {
            }
            return function(r4, n2) {
              return o(r4), i(n2), e3 ? t3(r4, n2) : r4.__proto__ = n2, r4;
            };
          }() : void 0);
        },
        9419: function(t2, e2, r2) {
          var n = r2(7697), o = r2(3689), i = r2(8844), a = r2(1868), u = r2(300), c = r2(5290), s = i(r2(9556).f), f = i([].push), l = n && o(function() {
            var t3 = /* @__PURE__ */ Object.create(null);
            return t3[2] = 2, !s(t3, 2);
          }), p = function(t3) {
            return function(e3) {
              for (var r3, o2 = c(e3), i2 = u(o2), p2 = l && null === a(o2), h = i2.length, v = 0, d = []; h > v; )
                r3 = i2[v++], n && !(p2 ? r3 in o2 : s(o2, r3)) || f(d, t3 ? [r3, o2[r3]] : o2[r3]);
              return d;
            };
          };
          t2.exports = {
            entries: p(true),
            values: p(false)
          };
        },
        5073: function(t2, e2, r2) {
          var n = r2(3043), o = r2(926);
          t2.exports = n ? {}.toString : function() {
            return "[object " + o(this) + "]";
          };
        },
        5899: function(t2, e2, r2) {
          var n = r2(2615), o = r2(9985), i = r2(8999), a = TypeError;
          t2.exports = function(t3, e3) {
            var r3, u;
            if ("string" === e3 && o(r3 = t3.toString) && !i(u = n(r3, t3)))
              return u;
            if (o(r3 = t3.valueOf) && !i(u = n(r3, t3)))
              return u;
            if ("string" !== e3 && o(r3 = t3.toString) && !i(u = n(r3, t3)))
              return u;
            throw new a("Can't convert object to primitive value");
          };
        },
        9152: function(t2, e2, r2) {
          var n = r2(6058), o = r2(8844), i = r2(2741), a = r2(7518), u = r2(5027), c = o([].concat);
          t2.exports = n("Reflect", "ownKeys") || function(t3) {
            var e3 = i.f(u(t3)), r3 = a.f;
            return r3 ? c(e3, r3(t3)) : e3;
          };
        },
        6675: function(t2, e2, r2) {
          var n = r2(8844), o = r2(6812), i = SyntaxError, a = parseInt, u = String.fromCharCode, c = n("".charAt), s = n("".slice), f = n(/./.exec), l = {
            '\\"': '"',
            "\\\\": "\\",
            "\\/": "/",
            "\\b": "\b",
            "\\f": "\f",
            "\\n": "\n",
            "\\r": "\r",
            "\\t": "	"
          }, p = /^[\da-f]{4}$/i, h = /^[\u0000-\u001F]$/;
          t2.exports = function(t3, e3) {
            for (var r3 = true, n2 = ""; e3 < t3.length; ) {
              var v = c(t3, e3);
              if ("\\" === v) {
                var d = s(t3, e3, e3 + 2);
                if (o(l, d))
                  n2 += l[d], e3 += 2;
                else {
                  if ("\\u" !== d)
                    throw new i('Unknown escape sequence: "' + d + '"');
                  var y = s(t3, e3 += 2, e3 + 4);
                  if (!f(p, y))
                    throw new i("Bad Unicode escape at: " + e3);
                  n2 += u(a(y, 16)), e3 += 4;
                }
              } else {
                if ('"' === v) {
                  r3 = false, e3++;
                  break;
                }
                if (f(h, v))
                  throw new i("Bad control character in string literal at: " + e3);
                n2 += v, e3++;
              }
            }
            if (r3)
              throw new i("Unterminated string at: " + e3);
            return {
              value: n2,
              end: e3
            };
          };
        },
        496: function(t2, e2, r2) {
          var n = r2(9037);
          t2.exports = n;
        },
        9302: function(t2) {
          t2.exports = function(t3) {
            try {
              return {
                error: false,
                value: t3()
              };
            } catch (t4) {
              return {
                error: true,
                value: t4
              };
            }
          };
        },
        7073: function(t2, e2, r2) {
          var n = r2(9037), o = r2(7919), i = r2(9985), a = r2(5266), u = r2(6738), c = r2(4201), s = r2(2532), f = r2(8563), l = r2(3931), p = r2(3615), h = o && o.prototype, v = c("species"), d = false, y = i(n.PromiseRejectionEvent), g = a("Promise", function() {
            var t3 = u(o), e3 = t3 !== String(o);
            if (!e3 && 66 === p)
              return true;
            if (l && (!h.catch || !h.finally))
              return true;
            if (!p || p < 51 || !/native code/.test(t3)) {
              var r3 = new o(function(t4) {
                t4(1);
              }), n2 = function(t4) {
                t4(function() {
                }, function() {
                });
              };
              if ((r3.constructor = {})[v] = n2, !(d = r3.then(function() {
              }) instanceof n2))
                return true;
            }
            return !e3 && (s || f) && !y;
          });
          t2.exports = {
            CONSTRUCTOR: g,
            REJECTION_EVENT: y,
            SUBCLASSING: d
          };
        },
        7919: function(t2, e2, r2) {
          var n = r2(9037);
          t2.exports = n.Promise;
        },
        2945: function(t2, e2, r2) {
          var n = r2(5027), o = r2(8999), i = r2(8742);
          t2.exports = function(t3, e3) {
            if (n(t3), o(e3) && e3.constructor === t3)
              return e3;
            var r3 = i.f(t3);
            return (0, r3.resolve)(e3), r3.promise;
          };
        },
        562: function(t2, e2, r2) {
          var n = r2(7919), o = r2(6431), i = r2(7073).CONSTRUCTOR;
          t2.exports = i || !o(function(t3) {
            n.all(t3).then(void 0, function() {
            });
          });
        },
        8055: function(t2, e2, r2) {
          var n = r2(2560).f;
          t2.exports = function(t3, e3, r3) {
            r3 in t3 || n(t3, r3, {
              configurable: true,
              get: function() {
                return e3[r3];
              },
              set: function(t4) {
                e3[r3] = t4;
              }
            });
          };
        },
        4410: function(t2) {
          var e2 = function() {
            this.head = null, this.tail = null;
          };
          e2.prototype = {
            add: function(t3) {
              var e3 = {
                item: t3,
                next: null
              }, r2 = this.tail;
              r2 ? r2.next = e3 : this.head = e3, this.tail = e3;
            },
            get: function() {
              var t3 = this.head;
              if (t3)
                return null === (this.head = t3.next) && (this.tail = null), t3.item;
            }
          }, t2.exports = e2;
        },
        6100: function(t2, e2, r2) {
          var n = r2(2615), o = r2(5027), i = r2(9985), a = r2(6648), u = r2(6308), c = TypeError;
          t2.exports = function(t3, e3) {
            var r3 = t3.exec;
            if (i(r3)) {
              var s = n(r3, t3, e3);
              return null !== s && o(s), s;
            }
            if ("RegExp" === a(t3))
              return n(u, t3, e3);
            throw new c("RegExp#exec called on incompatible receiver");
          };
        },
        6308: function(t2, e2, r2) {
          var n, o, i = r2(2615), a = r2(8844), u = r2(4327), c = r2(9633), s = r2(7901), f = r2(3430), l = r2(5391), p = r2(618).get, h = r2(2100), v = r2(6422), d = f("native-string-replace", String.prototype.replace), y = RegExp.prototype.exec, g = y, m = a("".charAt), b = a("".indexOf), w = a("".replace), x = a("".slice), k = (o = /b*/g, i(y, n = /a/, "a"), i(y, o, "a"), 0 !== n.lastIndex || 0 !== o.lastIndex), S = s.BROKEN_CARET, E = void 0 !== /()??/.exec("")[1];
          (k || E || S || h || v) && (g = function(t3) {
            var e3, r3, n2, o2, a2, s2, f2, h2 = this, v2 = p(h2), O = u(t3), P = v2.raw;
            if (P)
              return P.lastIndex = h2.lastIndex, e3 = i(g, P, O), h2.lastIndex = P.lastIndex, e3;
            var j = v2.groups, L = S && h2.sticky, _ = i(c, h2), I = h2.source, T = 0, R = O;
            if (L && (_ = w(_, "y", ""), -1 === b(_, "g") && (_ += "g"), R = x(O, h2.lastIndex), h2.lastIndex > 0 && (!h2.multiline || h2.multiline && "\n" !== m(O, h2.lastIndex - 1)) && (I = "(?: " + I + ")", R = " " + R, T++), r3 = new RegExp("^(?:" + I + ")", _)), E && (r3 = new RegExp("^" + I + "$(?!\\s)", _)), k && (n2 = h2.lastIndex), o2 = i(y, L ? r3 : h2, R), L ? o2 ? (o2.input = x(o2.input, T), o2[0] = x(o2[0], T), o2.index = h2.lastIndex, h2.lastIndex += o2[0].length) : h2.lastIndex = 0 : k && o2 && (h2.lastIndex = h2.global ? o2.index + o2[0].length : n2), E && o2 && o2.length > 1 && i(d, o2[0], r3, function() {
              for (a2 = 1; a2 < arguments.length - 2; a2++)
                void 0 === arguments[a2] && (o2[a2] = void 0);
            }), o2 && j)
              for (o2.groups = s2 = l(null), a2 = 0; a2 < j.length; a2++)
                s2[(f2 = j[a2])[0]] = o2[f2[1]];
            return o2;
          }), t2.exports = g;
        },
        9633: function(t2, e2, r2) {
          var n = r2(5027);
          t2.exports = function() {
            var t3 = n(this), e3 = "";
            return t3.hasIndices && (e3 += "d"), t3.global && (e3 += "g"), t3.ignoreCase && (e3 += "i"), t3.multiline && (e3 += "m"), t3.dotAll && (e3 += "s"), t3.unicode && (e3 += "u"), t3.unicodeSets && (e3 += "v"), t3.sticky && (e3 += "y"), e3;
          };
        },
        3477: function(t2, e2, r2) {
          var n = r2(2615), o = r2(6812), i = r2(3622), a = r2(9633), u = RegExp.prototype;
          t2.exports = function(t3) {
            var e3 = t3.flags;
            return void 0 !== e3 || "flags" in u || o(t3, "flags") || !i(u, t3) ? e3 : n(a, t3);
          };
        },
        7901: function(t2, e2, r2) {
          var n = r2(3689), o = r2(9037).RegExp, i = n(function() {
            var t3 = o("a", "y");
            return t3.lastIndex = 2, null !== t3.exec("abcd");
          }), a = i || n(function() {
            return !o("a", "y").sticky;
          }), u = i || n(function() {
            var t3 = o("^r", "gy");
            return t3.lastIndex = 2, null !== t3.exec("str");
          });
          t2.exports = {
            BROKEN_CARET: u,
            MISSED_STICKY: a,
            UNSUPPORTED_Y: i
          };
        },
        2100: function(t2, e2, r2) {
          var n = r2(3689), o = r2(9037).RegExp;
          t2.exports = n(function() {
            var t3 = o(".", "s");
            return !(t3.dotAll && t3.test("\n") && "s" === t3.flags);
          });
        },
        6422: function(t2, e2, r2) {
          var n = r2(3689), o = r2(9037).RegExp;
          t2.exports = n(function() {
            var t3 = o("(?<a>b)", "g");
            return "b" !== t3.exec("b").groups.a || "bc" !== "b".replace(t3, "$<a>c");
          });
        },
        4684: function(t2, e2, r2) {
          var n = r2(981), o = TypeError;
          t2.exports = function(t3) {
            if (n(t3))
              throw new o("Can't call method on " + t3);
            return t3;
          };
        },
        8600: function(t2) {
          t2.exports = function(t3, e2) {
            return t3 === e2 || t3 != t3 && e2 != e2;
          };
        },
        4241: function(t2, e2, r2) {
          var n = r2(6058), o = r2(2148), i = r2(4201), a = r2(7697), u = i("species");
          t2.exports = function(t3) {
            var e3 = n(t3);
            a && e3 && !e3[u] && o(e3, u, {
              configurable: true,
              get: function() {
                return this;
              }
            });
          };
        },
        5997: function(t2, e2, r2) {
          var n = r2(2560).f, o = r2(6812), i = r2(4201)("toStringTag");
          t2.exports = function(t3, e3, r3) {
            t3 && !r3 && (t3 = t3.prototype), t3 && !o(t3, i) && n(t3, i, {
              configurable: true,
              value: e3
            });
          };
        },
        2713: function(t2, e2, r2) {
          var n = r2(3430), o = r2(4630), i = n("keys");
          t2.exports = function(t3) {
            return i[t3] || (i[t3] = o(t3));
          };
        },
        4091: function(t2, e2, r2) {
          var n = r2(9037), o = r2(5014), i = "__core-js_shared__", a = n[i] || o(i, {});
          t2.exports = a;
        },
        3430: function(t2, e2, r2) {
          var n = r2(3931), o = r2(4091);
          (t2.exports = function(t3, e3) {
            return o[t3] || (o[t3] = void 0 !== e3 ? e3 : {});
          })("versions", []).push({
            version: "3.33.3",
            mode: n ? "pure" : "global",
            copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
            license: "https://github.com/zloirock/core-js/blob/v3.33.3/LICENSE",
            source: "https://github.com/zloirock/core-js"
          });
        },
        6373: function(t2, e2, r2) {
          var n = r2(5027), o = r2(2655), i = r2(981), a = r2(4201)("species");
          t2.exports = function(t3, e3) {
            var r3, u = n(t3).constructor;
            return void 0 === u || i(r3 = n(u)[a]) ? e3 : o(r3);
          };
        },
        730: function(t2, e2, r2) {
          var n = r2(8844), o = r2(8700), i = r2(4327), a = r2(4684), u = n("".charAt), c = n("".charCodeAt), s = n("".slice), f = function(t3) {
            return function(e3, r3) {
              var n2, f2, l = i(a(e3)), p = o(r3), h = l.length;
              return p < 0 || p >= h ? t3 ? "" : void 0 : (n2 = c(l, p)) < 55296 || n2 > 56319 || p + 1 === h || (f2 = c(l, p + 1)) < 56320 || f2 > 57343 ? t3 ? u(l, p) : n2 : t3 ? s(l, p, p + 2) : f2 - 56320 + (n2 - 55296 << 10) + 65536;
            };
          };
          t2.exports = {
            codeAt: f(false),
            charAt: f(true)
          };
        },
        6430: function(t2, e2, r2) {
          var n = r2(8844), o = 2147483647, i = /[^\0-\u007E]/, a = /[.\u3002\uFF0E\uFF61]/g, u = "Overflow: input needs wider integers to process", c = RangeError, s = n(a.exec), f = Math.floor, l = String.fromCharCode, p = n("".charCodeAt), h = n([].join), v = n([].push), d = n("".replace), y = n("".split), g = n("".toLowerCase), m = function(t3) {
            return t3 + 22 + 75 * (t3 < 26);
          }, b = function(t3, e3, r3) {
            var n2 = 0;
            for (t3 = r3 ? f(t3 / 700) : t3 >> 1, t3 += f(t3 / e3); t3 > 455; )
              t3 = f(t3 / 35), n2 += 36;
            return f(n2 + 36 * t3 / (t3 + 38));
          }, w = function(t3) {
            var e3 = [];
            t3 = function(t4) {
              for (var e4 = [], r4 = 0, n3 = t4.length; r4 < n3; ) {
                var o2 = p(t4, r4++);
                if (o2 >= 55296 && o2 <= 56319 && r4 < n3) {
                  var i3 = p(t4, r4++);
                  56320 == (64512 & i3) ? v(e4, ((1023 & o2) << 10) + (1023 & i3) + 65536) : (v(e4, o2), r4--);
                } else
                  v(e4, o2);
              }
              return e4;
            }(t3);
            var r3, n2, i2 = t3.length, a2 = 128, s2 = 0, d2 = 72;
            for (r3 = 0; r3 < t3.length; r3++)
              (n2 = t3[r3]) < 128 && v(e3, l(n2));
            var y2 = e3.length, g2 = y2;
            for (y2 && v(e3, "-"); g2 < i2; ) {
              var w2 = o;
              for (r3 = 0; r3 < t3.length; r3++)
                (n2 = t3[r3]) >= a2 && n2 < w2 && (w2 = n2);
              var x = g2 + 1;
              if (w2 - a2 > f((o - s2) / x))
                throw new c(u);
              for (s2 += (w2 - a2) * x, a2 = w2, r3 = 0; r3 < t3.length; r3++) {
                if ((n2 = t3[r3]) < a2 && ++s2 > o)
                  throw new c(u);
                if (n2 === a2) {
                  for (var k = s2, S = 36; ; ) {
                    var E = S <= d2 ? 1 : S >= d2 + 26 ? 26 : S - d2;
                    if (k < E)
                      break;
                    var O = k - E, P = 36 - E;
                    v(e3, l(m(E + O % P))), k = f(O / P), S += 36;
                  }
                  v(e3, l(m(k))), d2 = b(s2, x, g2 === y2), s2 = 0, g2++;
                }
              }
              s2++, a2++;
            }
            return h(e3, "");
          };
          t2.exports = function(t3) {
            var e3, r3, n2 = [], o2 = y(d(g(t3), a, "."), ".");
            for (e3 = 0; e3 < o2.length; e3++)
              r3 = o2[e3], v(n2, s(i, r3) ? "xn--" + w(r3) : r3);
            return h(n2, ".");
          };
        },
        5984: function(t2, e2, r2) {
          var n = r2(1236).PROPER, o = r2(3689), i = r2(6350);
          t2.exports = function(t3) {
            return o(function() {
              return !!i[t3]() || "​᠎" !== "​᠎"[t3]() || n && i[t3].name !== t3;
            });
          };
        },
        1435: function(t2, e2, r2) {
          var n = r2(8844), o = r2(4684), i = r2(4327), a = r2(6350), u = n("".replace), c = RegExp("^[" + a + "]+"), s = RegExp("(^|[^" + a + "])[" + a + "]+$"), f = function(t3) {
            return function(e3) {
              var r3 = i(o(e3));
              return 1 & t3 && (r3 = u(r3, c, "")), 2 & t3 && (r3 = u(r3, s, "$1")), r3;
            };
          };
          t2.exports = {
            start: f(1),
            end: f(2),
            trim: f(3)
          };
        },
        146: function(t2, e2, r2) {
          var n = r2(3615), o = r2(3689), i = r2(9037).String;
          t2.exports = !!Object.getOwnPropertySymbols && !o(function() {
            var t3 = Symbol("symbol detection");
            return !i(t3) || !(Object(t3) instanceof Symbol) || !Symbol.sham && n && n < 41;
          });
        },
        3032: function(t2, e2, r2) {
          var n = r2(2615), o = r2(6058), i = r2(4201), a = r2(1880);
          t2.exports = function() {
            var t3 = o("Symbol"), e3 = t3 && t3.prototype, r3 = e3 && e3.valueOf, u = i("toPrimitive");
            e3 && !e3[u] && a(e3, u, function(t4) {
              return n(r3, this);
            }, {
              arity: 1
            });
          };
        },
        6549: function(t2, e2, r2) {
          var n = r2(146);
          t2.exports = n && !!Symbol.for && !!Symbol.keyFor;
        },
        9886: function(t2, e2, r2) {
          var n, o, i, a, u = r2(9037), c = r2(1735), s = r2(4071), f = r2(9985), l = r2(6812), p = r2(3689), h = r2(2688), v = r2(6004), d = r2(6420), y = r2(1500), g = r2(4764), m = r2(806), b = u.setImmediate, w = u.clearImmediate, x = u.process, k = u.Dispatch, S = u.Function, E = u.MessageChannel, O = u.String, P = 0, j = {}, L = "onreadystatechange";
          p(function() {
            n = u.location;
          });
          var _ = function(t3) {
            if (l(j, t3)) {
              var e3 = j[t3];
              delete j[t3], e3();
            }
          }, I = function(t3) {
            return function() {
              _(t3);
            };
          }, T = function(t3) {
            _(t3.data);
          }, R = function(t3) {
            u.postMessage(O(t3), n.protocol + "//" + n.host);
          };
          b && w || (b = function(t3) {
            y(arguments.length, 1);
            var e3 = f(t3) ? t3 : S(t3), r3 = v(arguments, 1);
            return j[++P] = function() {
              c(e3, void 0, r3);
            }, o(P), P;
          }, w = function(t3) {
            delete j[t3];
          }, m ? o = function(t3) {
            x.nextTick(I(t3));
          } : k && k.now ? o = function(t3) {
            k.now(I(t3));
          } : E && !g ? (a = (i = new E()).port2, i.port1.onmessage = T, o = s(a.postMessage, a)) : u.addEventListener && f(u.postMessage) && !u.importScripts && n && "file:" !== n.protocol && !p(R) ? (o = R, u.addEventListener("message", T, false)) : o = L in d("script") ? function(t3) {
            h.appendChild(d("script"))[L] = function() {
              h.removeChild(this), _(t3);
            };
          } : function(t3) {
            setTimeout(I(t3), 0);
          }), t2.exports = {
            set: b,
            clear: w
          };
        },
        3648: function(t2, e2, r2) {
          var n = r2(8844);
          t2.exports = n(1 .valueOf);
        },
        7578: function(t2, e2, r2) {
          var n = r2(8700), o = Math.max, i = Math.min;
          t2.exports = function(t3, e3) {
            var r3 = n(t3);
            return r3 < 0 ? o(r3 + e3, 0) : i(r3, e3);
          };
        },
        5290: function(t2, e2, r2) {
          var n = r2(4413), o = r2(4684);
          t2.exports = function(t3) {
            return n(o(t3));
          };
        },
        8700: function(t2, e2, r2) {
          var n = r2(8828);
          t2.exports = function(t3) {
            var e3 = +t3;
            return e3 != e3 || 0 === e3 ? 0 : n(e3);
          };
        },
        3126: function(t2, e2, r2) {
          var n = r2(8700), o = Math.min;
          t2.exports = function(t3) {
            return t3 > 0 ? o(n(t3), 9007199254740991) : 0;
          };
        },
        690: function(t2, e2, r2) {
          var n = r2(4684), o = Object;
          t2.exports = function(t3) {
            return o(n(t3));
          };
        },
        8732: function(t2, e2, r2) {
          var n = r2(2615), o = r2(8999), i = r2(734), a = r2(4849), u = r2(5899), c = r2(4201), s = TypeError, f = c("toPrimitive");
          t2.exports = function(t3, e3) {
            if (!o(t3) || i(t3))
              return t3;
            var r3, c2 = a(t3, f);
            if (c2) {
              if (void 0 === e3 && (e3 = "default"), r3 = n(c2, t3, e3), !o(r3) || i(r3))
                return r3;
              throw new s("Can't convert object to primitive value");
            }
            return void 0 === e3 && (e3 = "number"), u(t3, e3);
          };
        },
        8360: function(t2, e2, r2) {
          var n = r2(8732), o = r2(734);
          t2.exports = function(t3) {
            var e3 = n(t3, "string");
            return o(e3) ? e3 : e3 + "";
          };
        },
        3043: function(t2, e2, r2) {
          var n = {};
          n[r2(4201)("toStringTag")] = "z", t2.exports = "[object z]" === String(n);
        },
        4327: function(t2, e2, r2) {
          var n = r2(926), o = String;
          t2.exports = function(t3) {
            if ("Symbol" === n(t3))
              throw new TypeError("Cannot convert a Symbol value to a string");
            return o(t3);
          };
        },
        3691: function(t2) {
          var e2 = String;
          t2.exports = function(t3) {
            try {
              return e2(t3);
            } catch (t4) {
              return "Object";
            }
          };
        },
        4630: function(t2, e2, r2) {
          var n = r2(8844), o = 0, i = Math.random(), a = n(1 .toString);
          t2.exports = function(t3) {
            return "Symbol(" + (void 0 === t3 ? "" : t3) + ")_" + a(++o + i, 36);
          };
        },
        6837: function(t2, e2, r2) {
          var n = r2(3689), o = r2(4201), i = r2(7697), a = r2(3931), u = o("iterator");
          t2.exports = !n(function() {
            var t3 = new URL("b?a=1&b=2&c=3", "http://a"), e3 = t3.searchParams, r3 = new URLSearchParams("a=1&a=2&b=3"), n2 = "";
            return t3.pathname = "c%20d", e3.forEach(function(t4, r4) {
              e3.delete("b"), n2 += r4 + t4;
            }), r3.delete("a", 2), r3.delete("b", void 0), a && (!t3.toJSON || !r3.has("a", 1) || r3.has("a", 2) || !r3.has("a", void 0) || r3.has("b")) || !e3.size && (a || !i) || !e3.sort || "http://a/c%20d?a=1&c=3" !== t3.href || "3" !== e3.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !e3[u] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== n2 || "x" !== new URL("http://x", void 0).host;
          });
        },
        9525: function(t2, e2, r2) {
          var n = r2(146);
          t2.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator;
        },
        5648: function(t2, e2, r2) {
          var n = r2(7697), o = r2(3689);
          t2.exports = n && o(function() {
            return 42 !== Object.defineProperty(function() {
            }, "prototype", {
              value: 42,
              writable: false
            }).prototype;
          });
        },
        1500: function(t2) {
          var e2 = TypeError;
          t2.exports = function(t3, r2) {
            if (t3 < r2)
              throw new e2("Not enough arguments");
            return t3;
          };
        },
        9834: function(t2, e2, r2) {
          var n = r2(9037), o = r2(9985), i = n.WeakMap;
          t2.exports = o(i) && /native code/.test(String(i));
        },
        5405: function(t2, e2, r2) {
          var n = r2(496), o = r2(6812), i = r2(6145), a = r2(2560).f;
          t2.exports = function(t3) {
            var e3 = n.Symbol || (n.Symbol = {});
            o(e3, t3) || a(e3, t3, {
              value: i.f(t3)
            });
          };
        },
        6145: function(t2, e2, r2) {
          var n = r2(4201);
          e2.f = n;
        },
        4201: function(t2, e2, r2) {
          var n = r2(9037), o = r2(3430), i = r2(6812), a = r2(4630), u = r2(146), c = r2(9525), s = n.Symbol, f = o("wks"), l = c ? s.for || s : s && s.withoutSetter || a;
          t2.exports = function(t3) {
            return i(f, t3) || (f[t3] = u && i(s, t3) ? s[t3] : l("Symbol." + t3)), f[t3];
          };
        },
        6350: function(t2) {
          t2.exports = "	\n\v\f\r                　\u2028\u2029\uFEFF";
        },
        1064: function(t2, e2, r2) {
          var n = r2(6058), o = r2(6812), i = r2(5773), a = r2(3622), u = r2(9385), c = r2(8758), s = r2(8055), f = r2(3457), l = r2(3841), p = r2(2570), h = r2(5411), v = r2(7697), d = r2(3931);
          t2.exports = function(t3, e3, r3, y) {
            var g = "stackTraceLimit", m = y ? 2 : 1, b = t3.split("."), w = b[b.length - 1], x = n.apply(null, b);
            if (x) {
              var k = x.prototype;
              if (!d && o(k, "cause") && delete k.cause, !r3)
                return x;
              var S = n("Error"), E = e3(function(t4, e4) {
                var r4 = l(y ? e4 : t4, void 0), n2 = y ? new x(t4) : new x();
                return void 0 !== r4 && i(n2, "message", r4), h(n2, E, n2.stack, 2), this && a(k, this) && f(n2, this, E), arguments.length > m && p(n2, arguments[m]), n2;
              });
              if (E.prototype = k, "Error" !== w ? u ? u(E, S) : c(E, S, {
                name: true
              }) : v && g in x && (s(E, x, g), s(E, x, "prepareStackTrace")), c(E, x), !d)
                try {
                  k.name !== w && i(k, "name", w), k.constructor = E;
                } catch (t4) {
                }
              return E;
            }
          };
        },
        4338: function(t2, e2, r2) {
          var n = r2(9989), o = r2(3689), i = r2(2297), a = r2(8999), u = r2(690), c = r2(6310), s = r2(5565), f = r2(6522), l = r2(7120), p = r2(9042), h = r2(4201), v = r2(3615), d = h("isConcatSpreadable"), y = v >= 51 || !o(function() {
            var t3 = [];
            return t3[d] = false, t3.concat()[0] !== t3;
          }), g = function(t3) {
            if (!a(t3))
              return false;
            var e3 = t3[d];
            return void 0 !== e3 ? !!e3 : i(t3);
          };
          n({
            target: "Array",
            proto: true,
            arity: 1,
            forced: !y || !p("concat")
          }, {
            concat: function(t3) {
              var e3, r3, n2, o2, i2, a2 = u(this), p2 = l(a2, 0), h2 = 0;
              for (e3 = -1, n2 = arguments.length; e3 < n2; e3++)
                if (g(i2 = -1 === e3 ? a2 : arguments[e3]))
                  for (o2 = c(i2), s(h2 + o2), r3 = 0; r3 < o2; r3++, h2++)
                    r3 in i2 && f(p2, h2, i2[r3]);
                else
                  s(h2 + 1), f(p2, h2++, i2);
              return p2.length = h2, p2;
            }
          });
        },
        8077: function(t2, e2, r2) {
          var n = r2(9989), o = r2(2960).filter;
          n({
            target: "Array",
            proto: true,
            forced: !r2(9042)("filter")
          }, {
            filter: function(t3) {
              return o(this, t3, arguments.length > 1 ? arguments[1] : void 0);
            }
          });
        },
        5728: function(t2, e2, r2) {
          var n = r2(9989), o = r2(2960).find, i = r2(7370), a = "find", u = true;
          a in [] && Array(1)[a](function() {
            u = false;
          }), n({
            target: "Array",
            proto: true,
            forced: u
          }, {
            find: function(t3) {
              return o(this, t3, arguments.length > 1 ? arguments[1] : void 0);
            }
          }), i(a);
        },
        7049: function(t2, e2, r2) {
          var n = r2(9989), o = r2(1055);
          n({
            target: "Array",
            stat: true,
            forced: !r2(6431)(function(t3) {
              Array.from(t3);
            })
          }, {
            from: o
          });
        },
        6801: function(t2, e2, r2) {
          var n = r2(9989), o = r2(4328).includes, i = r2(3689), a = r2(7370);
          n({
            target: "Array",
            proto: true,
            forced: i(function() {
              return !Array(1).includes();
            })
          }, {
            includes: function(t3) {
              return o(this, t3, arguments.length > 1 ? arguments[1] : void 0);
            }
          }), a("includes");
        },
        752: function(t2, e2, r2) {
          var n = r2(5290), o = r2(7370), i = r2(9478), a = r2(618), u = r2(2560).f, c = r2(1934), s = r2(7807), f = r2(3931), l = r2(7697), p = "Array Iterator", h = a.set, v = a.getterFor(p);
          t2.exports = c(Array, "Array", function(t3, e3) {
            h(this, {
              type: p,
              target: n(t3),
              index: 0,
              kind: e3
            });
          }, function() {
            var t3 = v(this), e3 = t3.target, r3 = t3.index++;
            if (!e3 || r3 >= e3.length)
              return t3.target = void 0, s(void 0, true);
            switch (t3.kind) {
              case "keys":
                return s(r3, false);
              case "values":
                return s(e3[r3], false);
            }
            return s([r3, e3[r3]], false);
          }, "values");
          var d = i.Arguments = i.Array;
          if (o("keys"), o("values"), o("entries"), !f && l && "values" !== d.name)
            try {
              u(d, "name", {
                value: "values"
              });
            } catch (t3) {
            }
        },
        6203: function(t2, e2, r2) {
          var n = r2(9989), o = r2(8844), i = r2(4413), a = r2(5290), u = r2(6834), c = o([].join);
          n({
            target: "Array",
            proto: true,
            forced: i !== Object || !u("join", ",")
          }, {
            join: function(t3) {
              return c(a(this), void 0 === t3 ? "," : t3);
            }
          });
        },
        560: function(t2, e2, r2) {
          var n = r2(9989), o = r2(690), i = r2(6310), a = r2(5649), u = r2(5565);
          n({
            target: "Array",
            proto: true,
            arity: 1,
            forced: r2(3689)(function() {
              return 4294967297 !== [].push.call({
                length: 4294967296
              }, 1);
            }) || !function() {
              try {
                Object.defineProperty([], "length", {
                  writable: false
                }).push();
              } catch (t3) {
                return t3 instanceof TypeError;
              }
            }()
          }, {
            push: function(t3) {
              var e3 = o(this), r3 = i(e3), n2 = arguments.length;
              u(r3 + n2);
              for (var c = 0; c < n2; c++)
                e3[r3] = arguments[c], r3++;
              return a(e3, r3), r3;
            }
          });
        },
        9730: function(t2, e2, r2) {
          var n = r2(9989), o = r2(2297), i = r2(9429), a = r2(8999), u = r2(7578), c = r2(6310), s = r2(5290), f = r2(6522), l = r2(4201), p = r2(9042), h = r2(6004), v = p("slice"), d = l("species"), y = Array, g = Math.max;
          n({
            target: "Array",
            proto: true,
            forced: !v
          }, {
            slice: function(t3, e3) {
              var r3, n2, l2, p2 = s(this), v2 = c(p2), m = u(t3, v2), b = u(void 0 === e3 ? v2 : e3, v2);
              if (o(p2) && (r3 = p2.constructor, (i(r3) && (r3 === y || o(r3.prototype)) || a(r3) && null === (r3 = r3[d])) && (r3 = void 0), r3 === y || void 0 === r3))
                return h(p2, m, b);
              for (n2 = new (void 0 === r3 ? y : r3)(g(b - m, 0)), l2 = 0; m < b; m++, l2++)
                m in p2 && f(n2, l2, p2[m]);
              return n2.length = l2, n2;
            }
          });
        },
        9903: function(t2, e2, r2) {
          var n = r2(6812), o = r2(1880), i = r2(1797), a = r2(4201)("toPrimitive"), u = Date.prototype;
          n(u, a) || o(u, a, i);
        },
        1057: function(t2, e2, r2) {
          var n = r2(9989), o = r2(9037), i = r2(1735), a = r2(1064), u = "WebAssembly", c = o[u], s = 7 !== new Error("e", {
            cause: 7
          }).cause, f = function(t3, e3) {
            var r3 = {};
            r3[t3] = a(t3, e3, s), n({
              global: true,
              constructor: true,
              arity: 1,
              forced: s
            }, r3);
          }, l = function(t3, e3) {
            if (c && c[t3]) {
              var r3 = {};
              r3[t3] = a(u + "." + t3, e3, s), n({
                target: u,
                stat: true,
                constructor: true,
                arity: 1,
                forced: s
              }, r3);
            }
          };
          f("Error", function(t3) {
            return function(e3) {
              return i(t3, this, arguments);
            };
          }), f("EvalError", function(t3) {
            return function(e3) {
              return i(t3, this, arguments);
            };
          }), f("RangeError", function(t3) {
            return function(e3) {
              return i(t3, this, arguments);
            };
          }), f("ReferenceError", function(t3) {
            return function(e3) {
              return i(t3, this, arguments);
            };
          }), f("SyntaxError", function(t3) {
            return function(e3) {
              return i(t3, this, arguments);
            };
          }), f("TypeError", function(t3) {
            return function(e3) {
              return i(t3, this, arguments);
            };
          }), f("URIError", function(t3) {
            return function(e3) {
              return i(t3, this, arguments);
            };
          }), l("CompileError", function(t3) {
            return function(e3) {
              return i(t3, this, arguments);
            };
          }), l("LinkError", function(t3) {
            return function(e3) {
              return i(t3, this, arguments);
            };
          }), l("RuntimeError", function(t3) {
            return function(e3) {
              return i(t3, this, arguments);
            };
          });
        },
        4284: function(t2, e2, r2) {
          var n = r2(7697), o = r2(1236).EXISTS, i = r2(8844), a = r2(2148), u = Function.prototype, c = i(u.toString), s = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/, f = i(s.exec);
          n && !o && a(u, "name", {
            configurable: true,
            get: function() {
              try {
                return f(s, c(this))[1];
              } catch (t3) {
                return "";
              }
            }
          });
        },
        8324: function(t2, e2, r2) {
          var n = r2(9989), o = r2(6058), i = r2(1735), a = r2(2615), u = r2(8844), c = r2(3689), s = r2(9985), f = r2(734), l = r2(6004), p = r2(2643), h = r2(146), v = String, d = o("JSON", "stringify"), y = u(/./.exec), g = u("".charAt), m = u("".charCodeAt), b = u("".replace), w = u(1 .toString), x = /[\uD800-\uDFFF]/g, k = /^[\uD800-\uDBFF]$/, S = /^[\uDC00-\uDFFF]$/, E = !h || c(function() {
            var t3 = o("Symbol")("stringify detection");
            return "[null]" !== d([t3]) || "{}" !== d({
              a: t3
            }) || "{}" !== d(Object(t3));
          }), O = c(function() {
            return '"\\udf06\\ud834"' !== d("\uDF06\uD834") || '"\\udead"' !== d("\uDEAD");
          }), P = function(t3, e3) {
            var r3 = l(arguments), n2 = p(e3);
            if (s(n2) || void 0 !== t3 && !f(t3))
              return r3[1] = function(t4, e4) {
                if (s(n2) && (e4 = a(n2, this, v(t4), e4)), !f(e4))
                  return e4;
              }, i(d, null, r3);
          }, j = function(t3, e3, r3) {
            var n2 = g(r3, e3 - 1), o2 = g(r3, e3 + 1);
            return y(k, t3) && !y(S, o2) || y(S, t3) && !y(k, n2) ? "\\u" + w(m(t3, 0), 16) : t3;
          };
          d && n({
            target: "JSON",
            stat: true,
            arity: 3,
            forced: E || O
          }, {
            stringify: function(t3, e3, r3) {
              var n2 = l(arguments), o2 = i(E ? P : d, null, n2);
              return O && "string" == typeof o2 ? b(o2, x, j) : o2;
            }
          });
        },
        7629: function(t2, e2, r2) {
          var n = r2(9037);
          r2(5997)(n.JSON, "JSON", true);
        },
        9322: function(t2, e2, r2) {
          r2(319)("Map", function(t3) {
            return function() {
              return t3(this, arguments.length ? arguments[0] : void 0);
            };
          }, r2(800));
        },
        6646: function(t2, e2, r2) {
          r2(9322);
        },
        7509: function(t2, e2, r2) {
          r2(5997)(Math, "Math", true);
        },
        9288: function(t2, e2, r2) {
          var n = r2(9989), o = r2(3931), i = r2(7697), a = r2(9037), u = r2(496), c = r2(8844), s = r2(5266), f = r2(6812), l = r2(3457), p = r2(3622), h = r2(734), v = r2(8732), d = r2(3689), y = r2(2741).f, g = r2(2474).f, m = r2(2560).f, b = r2(3648), w = r2(1435).trim, x = "Number", k = a[x], S = u[x], E = k.prototype, O = a.TypeError, P = c("".slice), j = c("".charCodeAt), L = function(t3) {
            var e3, r3, n2, o2, i2, a2, u2, c2, s2 = v(t3, "number");
            if (h(s2))
              throw new O("Cannot convert a Symbol value to a number");
            if ("string" == typeof s2 && s2.length > 2) {
              if (s2 = w(s2), 43 === (e3 = j(s2, 0)) || 45 === e3) {
                if (88 === (r3 = j(s2, 2)) || 120 === r3)
                  return NaN;
              } else if (48 === e3) {
                switch (j(s2, 1)) {
                  case 66:
                  case 98:
                    n2 = 2, o2 = 49;
                    break;
                  case 79:
                  case 111:
                    n2 = 8, o2 = 55;
                    break;
                  default:
                    return +s2;
                }
                for (a2 = (i2 = P(s2, 2)).length, u2 = 0; u2 < a2; u2++)
                  if ((c2 = j(i2, u2)) < 48 || c2 > o2)
                    return NaN;
                return parseInt(i2, n2);
              }
            }
            return +s2;
          }, _ = s(x, !k(" 0o1") || !k("0b1") || k("+0x1")), I = function(t3) {
            var e3, r3 = arguments.length < 1 ? 0 : k(function(t4) {
              var e4 = v(t4, "number");
              return "bigint" == typeof e4 ? e4 : L(e4);
            }(t3));
            return p(E, e3 = this) && d(function() {
              b(e3);
            }) ? l(Object(r3), this, I) : r3;
          };
          I.prototype = E, _ && !o && (E.constructor = I), n({
            global: true,
            constructor: true,
            wrap: true,
            forced: _
          }, {
            Number: I
          });
          var T = function(t3, e3) {
            for (var r3, n2 = i ? y(e3) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), o2 = 0; n2.length > o2; o2++)
              f(e3, r3 = n2[o2]) && !f(t3, r3) && m(t3, r3, g(e3, r3));
          };
          o && S && T(u[x], S), (_ || o) && T(u[x], k);
        },
        6585: function(t2, e2, r2) {
          var n = r2(9989), o = r2(9419).entries;
          n({
            target: "Object",
            stat: true
          }, {
            entries: function(t3) {
              return o(t3);
            }
          });
        },
        1919: function(t2, e2, r2) {
          var n = r2(9989), o = r2(3689), i = r2(5290), a = r2(2474).f, u = r2(7697);
          n({
            target: "Object",
            stat: true,
            forced: !u || o(function() {
              a(1);
            }),
            sham: !u
          }, {
            getOwnPropertyDescriptor: function(t3, e3) {
              return a(i(t3), e3);
            }
          });
        },
        9474: function(t2, e2, r2) {
          var n = r2(9989), o = r2(7697), i = r2(9152), a = r2(5290), u = r2(2474), c = r2(6522);
          n({
            target: "Object",
            stat: true,
            sham: !o
          }, {
            getOwnPropertyDescriptors: function(t3) {
              for (var e3, r3, n2 = a(t3), o2 = u.f, s = i(n2), f = {}, l = 0; s.length > l; )
                void 0 !== (r3 = o2(n2, e3 = s[l++])) && c(f, e3, r3);
              return f;
            }
          });
        },
        9434: function(t2, e2, r2) {
          var n = r2(9989), o = r2(146), i = r2(3689), a = r2(7518), u = r2(690);
          n({
            target: "Object",
            stat: true,
            forced: !o || i(function() {
              a.f(1);
            })
          }, {
            getOwnPropertySymbols: function(t3) {
              var e3 = a.f;
              return e3 ? e3(u(t3)) : [];
            }
          });
        },
        8052: function(t2, e2, r2) {
          var n = r2(9989), o = r2(3689), i = r2(690), a = r2(1868), u = r2(1748);
          n({
            target: "Object",
            stat: true,
            forced: o(function() {
              a(1);
            }),
            sham: !u
          }, {
            getPrototypeOf: function(t3) {
              return a(i(t3));
            }
          });
        },
        9358: function(t2, e2, r2) {
          var n = r2(9989), o = r2(690), i = r2(300);
          n({
            target: "Object",
            stat: true,
            forced: r2(3689)(function() {
              i(1);
            })
          }, {
            keys: function(t3) {
              return i(o(t3));
            }
          });
        },
        228: function(t2, e2, r2) {
          var n = r2(3043), o = r2(1880), i = r2(5073);
          n || o(Object.prototype, "toString", i, {
            unsafe: true
          });
        },
        1692: function(t2, e2, r2) {
          var n = r2(9989), o = r2(2615), i = r2(509), a = r2(8742), u = r2(9302), c = r2(8734);
          n({
            target: "Promise",
            stat: true,
            forced: r2(562)
          }, {
            all: function(t3) {
              var e3 = this, r3 = a.f(e3), n2 = r3.resolve, s = r3.reject, f = u(function() {
                var r4 = i(e3.resolve), a2 = [], u2 = 0, f2 = 1;
                c(t3, function(t4) {
                  var i2 = u2++, c2 = false;
                  f2++, o(r4, e3, t4).then(function(t5) {
                    c2 || (c2 = true, a2[i2] = t5, --f2 || n2(a2));
                  }, s);
                }), --f2 || n2(a2);
              });
              return f.error && s(f.value), r3.promise;
            }
          });
        },
        5089: function(t2, e2, r2) {
          var n = r2(9989), o = r2(3931), i = r2(7073).CONSTRUCTOR, a = r2(7919), u = r2(6058), c = r2(9985), s = r2(1880), f = a && a.prototype;
          if (n({
            target: "Promise",
            proto: true,
            forced: i,
            real: true
          }, {
            catch: function(t3) {
              return this.then(void 0, t3);
            }
          }), !o && c(a)) {
            var l = u("Promise").prototype.catch;
            f.catch !== l && s(f, "catch", l, {
              unsafe: true
            });
          }
        },
        6697: function(t2, e2, r2) {
          var n, o, i, a = r2(9989), u = r2(3931), c = r2(806), s = r2(9037), f = r2(2615), l = r2(1880), p = r2(9385), h = r2(5997), v = r2(4241), d = r2(509), y = r2(9985), g = r2(8999), m = r2(767), b = r2(6373), w = r2(9886).set, x = r2(231), k = r2(920), S = r2(9302), E = r2(4410), O = r2(618), P = r2(7919), j = r2(7073), L = r2(8742), _ = "Promise", I = j.CONSTRUCTOR, T = j.REJECTION_EVENT, R = j.SUBCLASSING, $2 = O.getterFor(_), N = O.set, C = P && P.prototype, A = P, W = C, B = s.TypeError, F = s.document, U = s.process, M = L.f, D = M, G = !!(F && F.createEvent && s.dispatchEvent), q = "unhandledrejection", Q = function(t3) {
            var e3;
            return !(!g(t3) || !y(e3 = t3.then)) && e3;
          }, H = function(t3, e3) {
            var r3, n2, o2, i2 = e3.value, a2 = 1 === e3.state, u2 = a2 ? t3.ok : t3.fail, c2 = t3.resolve, s2 = t3.reject, l2 = t3.domain;
            try {
              u2 ? (a2 || (2 === e3.rejection && K(e3), e3.rejection = 1), true === u2 ? r3 = i2 : (l2 && l2.enter(), r3 = u2(i2), l2 && (l2.exit(), o2 = true)), r3 === t3.promise ? s2(new B("Promise-chain cycle")) : (n2 = Q(r3)) ? f(n2, r3, c2, s2) : c2(r3)) : s2(i2);
            } catch (t4) {
              l2 && !o2 && l2.exit(), s2(t4);
            }
          }, z = function(t3, e3) {
            t3.notified || (t3.notified = true, x(function() {
              for (var r3, n2 = t3.reactions; r3 = n2.get(); )
                H(r3, t3);
              t3.notified = false, e3 && !t3.rejection && V(t3);
            }));
          }, Y = function(t3, e3, r3) {
            var n2, o2;
            G ? ((n2 = F.createEvent("Event")).promise = e3, n2.reason = r3, n2.initEvent(t3, false, true), s.dispatchEvent(n2)) : n2 = {
              promise: e3,
              reason: r3
            }, !T && (o2 = s["on" + t3]) ? o2(n2) : t3 === q && k("Unhandled promise rejection", r3);
          }, V = function(t3) {
            f(w, s, function() {
              var e3, r3 = t3.facade, n2 = t3.value;
              if (J(t3) && (e3 = S(function() {
                c ? U.emit("unhandledRejection", n2, r3) : Y(q, r3, n2);
              }), t3.rejection = c || J(t3) ? 2 : 1, e3.error))
                throw e3.value;
            });
          }, J = function(t3) {
            return 1 !== t3.rejection && !t3.parent;
          }, K = function(t3) {
            f(w, s, function() {
              var e3 = t3.facade;
              c ? U.emit("rejectionHandled", e3) : Y("rejectionhandled", e3, t3.value);
            });
          }, X = function(t3, e3, r3) {
            return function(n2) {
              t3(e3, n2, r3);
            };
          }, Z = function(t3, e3, r3) {
            t3.done || (t3.done = true, r3 && (t3 = r3), t3.value = e3, t3.state = 2, z(t3, true));
          }, tt = function(t3, e3, r3) {
            if (!t3.done) {
              t3.done = true, r3 && (t3 = r3);
              try {
                if (t3.facade === e3)
                  throw new B("Promise can't be resolved itself");
                var n2 = Q(e3);
                n2 ? x(function() {
                  var r4 = {
                    done: false
                  };
                  try {
                    f(n2, e3, X(tt, r4, t3), X(Z, r4, t3));
                  } catch (e4) {
                    Z(r4, e4, t3);
                  }
                }) : (t3.value = e3, t3.state = 1, z(t3, false));
              } catch (e4) {
                Z({
                  done: false
                }, e4, t3);
              }
            }
          };
          if (I && (W = (A = function(t3) {
            m(this, W), d(t3), f(n, this);
            var e3 = $2(this);
            try {
              t3(X(tt, e3), X(Z, e3));
            } catch (t4) {
              Z(e3, t4);
            }
          }).prototype, (n = function(t3) {
            N(this, {
              type: _,
              done: false,
              notified: false,
              parent: false,
              reactions: new E(),
              rejection: false,
              state: 0,
              value: void 0
            });
          }).prototype = l(W, "then", function(t3, e3) {
            var r3 = $2(this), n2 = M(b(this, A));
            return r3.parent = true, n2.ok = !y(t3) || t3, n2.fail = y(e3) && e3, n2.domain = c ? U.domain : void 0, 0 === r3.state ? r3.reactions.add(n2) : x(function() {
              H(n2, r3);
            }), n2.promise;
          }), o = function() {
            var t3 = new n(), e3 = $2(t3);
            this.promise = t3, this.resolve = X(tt, e3), this.reject = X(Z, e3);
          }, L.f = M = function(t3) {
            return t3 === A || void 0 === t3 ? new o(t3) : D(t3);
          }, !u && y(P) && C !== Object.prototype)) {
            i = C.then, R || l(C, "then", function(t3, e3) {
              var r3 = this;
              return new A(function(t4, e4) {
                f(i, r3, t4, e4);
              }).then(t3, e3);
            }, {
              unsafe: true
            });
            try {
              delete C.constructor;
            } catch (t3) {
            }
            p && p(C, W);
          }
          a({
            global: true,
            constructor: true,
            wrap: true,
            forced: I
          }, {
            Promise: A
          }), h(A, _, false, true), v(_);
        },
        3964: function(t2, e2, r2) {
          r2(6697), r2(1692), r2(5089), r2(8829), r2(2092), r2(7905);
        },
        8829: function(t2, e2, r2) {
          var n = r2(9989), o = r2(2615), i = r2(509), a = r2(8742), u = r2(9302), c = r2(8734);
          n({
            target: "Promise",
            stat: true,
            forced: r2(562)
          }, {
            race: function(t3) {
              var e3 = this, r3 = a.f(e3), n2 = r3.reject, s = u(function() {
                var a2 = i(e3.resolve);
                c(t3, function(t4) {
                  o(a2, e3, t4).then(r3.resolve, n2);
                });
              });
              return s.error && n2(s.value), r3.promise;
            }
          });
        },
        2092: function(t2, e2, r2) {
          var n = r2(9989), o = r2(2615), i = r2(8742);
          n({
            target: "Promise",
            stat: true,
            forced: r2(7073).CONSTRUCTOR
          }, {
            reject: function(t3) {
              var e3 = i.f(this);
              return o(e3.reject, void 0, t3), e3.promise;
            }
          });
        },
        7905: function(t2, e2, r2) {
          var n = r2(9989), o = r2(6058), i = r2(3931), a = r2(7919), u = r2(7073).CONSTRUCTOR, c = r2(2945), s = o("Promise"), f = i && !u;
          n({
            target: "Promise",
            stat: true,
            forced: i || u
          }, {
            resolve: function(t3) {
              return c(f && this === s ? a : this, t3);
            }
          });
        },
        50: function(t2, e2, r2) {
          var n = r2(9989), o = r2(6058), i = r2(1735), a = r2(6761), u = r2(2655), c = r2(5027), s = r2(8999), f = r2(5391), l = r2(3689), p = o("Reflect", "construct"), h = Object.prototype, v = [].push, d = l(function() {
            function t3() {
            }
            return !(p(function() {
            }, [], t3) instanceof t3);
          }), y = !l(function() {
            p(function() {
            });
          }), g = d || y;
          n({
            target: "Reflect",
            stat: true,
            forced: g,
            sham: g
          }, {
            construct: function(t3, e3) {
              u(t3), c(e3);
              var r3 = arguments.length < 3 ? t3 : u(arguments[2]);
              if (y && !d)
                return p(t3, e3, r3);
              if (t3 === r3) {
                switch (e3.length) {
                  case 0:
                    return new t3();
                  case 1:
                    return new t3(e3[0]);
                  case 2:
                    return new t3(e3[0], e3[1]);
                  case 3:
                    return new t3(e3[0], e3[1], e3[2]);
                  case 4:
                    return new t3(e3[0], e3[1], e3[2], e3[3]);
                }
                var n2 = [null];
                return i(v, n2, e3), new (i(a, t3, n2))();
              }
              var o2 = r3.prototype, l2 = f(s(o2) ? o2 : h), g2 = i(t3, l2, e3);
              return s(g2) ? g2 : l2;
            }
          });
        },
        6034: function(t2, e2, r2) {
          var n = r2(9989), o = r2(9037), i = r2(5997);
          n({
            global: true
          }, {
            Reflect: {}
          }), i(o.Reflect, "Reflect", true);
        },
        2003: function(t2, e2, r2) {
          var n = r2(7697), o = r2(9037), i = r2(8844), a = r2(5266), u = r2(3457), c = r2(5773), s = r2(2741).f, f = r2(3622), l = r2(1245), p = r2(4327), h = r2(3477), v = r2(7901), d = r2(8055), y = r2(1880), g = r2(3689), m = r2(6812), b = r2(618).enforce, w = r2(4241), x = r2(4201), k = r2(2100), S = r2(6422), E = x("match"), O = o.RegExp, P = O.prototype, j = o.SyntaxError, L = i(P.exec), _ = i("".charAt), I = i("".replace), T = i("".indexOf), R = i("".slice), $2 = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/, N = /a/g, C = /a/g, A = new O(N) !== N, W = v.MISSED_STICKY, B = v.UNSUPPORTED_Y, F = n && (!A || W || k || S || g(function() {
            return C[E] = false, O(N) !== N || O(C) === C || "/a/i" !== String(O(N, "i"));
          }));
          if (a("RegExp", F)) {
            for (var U = function(t3, e3) {
              var r3, n2, o2, i2, a2, s2, v2 = f(P, this), d2 = l(t3), y2 = void 0 === e3, g2 = [], w2 = t3;
              if (!v2 && d2 && y2 && t3.constructor === U)
                return t3;
              if ((d2 || f(P, t3)) && (t3 = t3.source, y2 && (e3 = h(w2))), t3 = void 0 === t3 ? "" : p(t3), e3 = void 0 === e3 ? "" : p(e3), w2 = t3, k && "dotAll" in N && (n2 = !!e3 && T(e3, "s") > -1) && (e3 = I(e3, /s/g, "")), r3 = e3, W && "sticky" in N && (o2 = !!e3 && T(e3, "y") > -1) && B && (e3 = I(e3, /y/g, "")), S && (i2 = function(t4) {
                for (var e4, r4 = t4.length, n3 = 0, o3 = "", i3 = [], a3 = {}, u2 = false, c2 = false, s3 = 0, f2 = ""; n3 <= r4; n3++) {
                  if ("\\" === (e4 = _(t4, n3)))
                    e4 += _(t4, ++n3);
                  else if ("]" === e4)
                    u2 = false;
                  else if (!u2)
                    switch (true) {
                      case "[" === e4:
                        u2 = true;
                        break;
                      case "(" === e4:
                        L($2, R(t4, n3 + 1)) && (n3 += 2, c2 = true), o3 += e4, s3++;
                        continue;
                      case (">" === e4 && c2):
                        if ("" === f2 || m(a3, f2))
                          throw new j("Invalid capture group name");
                        a3[f2] = true, i3[i3.length] = [f2, s3], c2 = false, f2 = "";
                        continue;
                    }
                  c2 ? f2 += e4 : o3 += e4;
                }
                return [o3, i3];
              }(t3), t3 = i2[0], g2 = i2[1]), a2 = u(O(t3, e3), v2 ? this : P, U), (n2 || o2 || g2.length) && (s2 = b(a2), n2 && (s2.dotAll = true, s2.raw = U(function(t4) {
                for (var e4, r4 = t4.length, n3 = 0, o3 = "", i3 = false; n3 <= r4; n3++)
                  "\\" !== (e4 = _(t4, n3)) ? i3 || "." !== e4 ? ("[" === e4 ? i3 = true : "]" === e4 && (i3 = false), o3 += e4) : o3 += "[\\s\\S]" : o3 += e4 + _(t4, ++n3);
                return o3;
              }(t3), r3)), o2 && (s2.sticky = true), g2.length && (s2.groups = g2)), t3 !== w2)
                try {
                  c(a2, "source", "" === w2 ? "(?:)" : w2);
                } catch (t4) {
                }
              return a2;
            }, M = s(O), D = 0; M.length > D; )
              d(U, O, M[D++]);
            P.constructor = U, U.prototype = P, y(o, "RegExp", U, {
              constructor: true
            });
          }
          w("RegExp");
        },
        8518: function(t2, e2, r2) {
          var n = r2(7697), o = r2(2100), i = r2(6648), a = r2(2148), u = r2(618).get, c = RegExp.prototype, s = TypeError;
          n && o && a(c, "dotAll", {
            configurable: true,
            get: function() {
              if (this !== c) {
                if ("RegExp" === i(this))
                  return !!u(this).dotAll;
                throw new s("Incompatible receiver, RegExp required");
              }
            }
          });
        },
        4043: function(t2, e2, r2) {
          var n = r2(9989), o = r2(6308);
          n({
            target: "RegExp",
            proto: true,
            forced: /./.exec !== o
          }, {
            exec: o
          });
        },
        3440: function(t2, e2, r2) {
          var n = r2(7697), o = r2(7901).MISSED_STICKY, i = r2(6648), a = r2(2148), u = r2(618).get, c = RegExp.prototype, s = TypeError;
          n && o && a(c, "sticky", {
            configurable: true,
            get: function() {
              if (this !== c) {
                if ("RegExp" === i(this))
                  return !!u(this).sticky;
                throw new s("Incompatible receiver, RegExp required");
              }
            }
          });
        },
        7409: function(t2, e2, r2) {
          r2(4043);
          var n, o, i = r2(9989), a = r2(2615), u = r2(9985), c = r2(5027), s = r2(4327), f = (n = false, (o = /[ac]/).exec = function() {
            return n = true, /./.exec.apply(this, arguments);
          }, true === o.test("abc") && n), l = /./.test;
          i({
            target: "RegExp",
            proto: true,
            forced: !f
          }, {
            test: function(t3) {
              var e3 = c(this), r3 = s(t3), n2 = e3.exec;
              if (!u(n2))
                return a(l, e3, r3);
              var o2 = a(n2, e3, r3);
              return null !== o2 && (c(o2), true);
            }
          });
        },
        2826: function(t2, e2, r2) {
          var n = r2(1236).PROPER, o = r2(1880), i = r2(5027), a = r2(4327), u = r2(3689), c = r2(3477), s = "toString", f = RegExp.prototype[s], l = u(function() {
            return "/a/b" !== f.call({
              source: "a",
              flags: "b"
            });
          }), p = n && f.name !== s;
          (l || p) && o(RegExp.prototype, s, function() {
            var t3 = i(this);
            return "/" + a(t3.source) + "/" + a(c(t3));
          }, {
            unsafe: true
          });
        },
        3843: function(t2, e2, r2) {
          var n = r2(9989), o = r2(8844), i = r2(2124), a = r2(4684), u = r2(4327), c = r2(7413), s = o("".indexOf);
          n({
            target: "String",
            proto: true,
            forced: !c("includes")
          }, {
            includes: function(t3) {
              return !!~s(u(a(this)), u(i(t3)), arguments.length > 1 ? arguments[1] : void 0);
            }
          });
        },
        1694: function(t2, e2, r2) {
          var n = r2(730).charAt, o = r2(4327), i = r2(618), a = r2(1934), u = r2(7807), c = "String Iterator", s = i.set, f = i.getterFor(c);
          a(String, "String", function(t3) {
            s(this, {
              type: c,
              string: o(t3),
              index: 0
            });
          }, function() {
            var t3, e3 = f(this), r3 = e3.string, o2 = e3.index;
            return o2 >= r3.length ? u(void 0, true) : (t3 = n(r3, o2), e3.index += t3.length, u(t3, false));
          });
        },
        2462: function(t2, e2, r2) {
          var n = r2(2615), o = r2(8678), i = r2(5027), a = r2(981), u = r2(3126), c = r2(4327), s = r2(4684), f = r2(4849), l = r2(1514), p = r2(6100);
          o("match", function(t3, e3, r3) {
            return [function(e4) {
              var r4 = s(this), o2 = a(e4) ? void 0 : f(e4, t3);
              return o2 ? n(o2, e4, r4) : new RegExp(e4)[t3](c(r4));
            }, function(t4) {
              var n2 = i(this), o2 = c(t4), a2 = r3(e3, n2, o2);
              if (a2.done)
                return a2.value;
              if (!n2.global)
                return p(n2, o2);
              var s2 = n2.unicode;
              n2.lastIndex = 0;
              for (var f2, h = [], v = 0; null !== (f2 = p(n2, o2)); ) {
                var d = c(f2[0]);
                h[v] = d, "" === d && (n2.lastIndex = l(o2, u(n2.lastIndex), s2)), v++;
              }
              return 0 === v ? null : h;
            }];
          });
        },
        7267: function(t2, e2, r2) {
          var n = r2(1735), o = r2(2615), i = r2(8844), a = r2(8678), u = r2(3689), c = r2(5027), s = r2(9985), f = r2(981), l = r2(8700), p = r2(3126), h = r2(4327), v = r2(4684), d = r2(1514), y = r2(4849), g = r2(7017), m = r2(6100), b = r2(4201)("replace"), w = Math.max, x = Math.min, k = i([].concat), S = i([].push), E = i("".indexOf), O = i("".slice), P = "$0" === "a".replace(/./, "$0"), j = !!/./[b] && "" === /./[b]("a", "$0");
          a("replace", function(t3, e3, r3) {
            var i2 = j ? "$" : "$0";
            return [function(t4, r4) {
              var n2 = v(this), i3 = f(t4) ? void 0 : y(t4, b);
              return i3 ? o(i3, t4, n2, r4) : o(e3, h(n2), t4, r4);
            }, function(t4, o2) {
              var a2 = c(this), u2 = h(t4);
              if ("string" == typeof o2 && -1 === E(o2, i2) && -1 === E(o2, "$<")) {
                var f2 = r3(e3, a2, u2, o2);
                if (f2.done)
                  return f2.value;
              }
              var v2 = s(o2);
              v2 || (o2 = h(o2));
              var y2, b2 = a2.global;
              b2 && (y2 = a2.unicode, a2.lastIndex = 0);
              for (var P2, j2 = []; null !== (P2 = m(a2, u2)) && (S(j2, P2), b2); ) {
                "" === h(P2[0]) && (a2.lastIndex = d(u2, p(a2.lastIndex), y2));
              }
              for (var L, _ = "", I = 0, T = 0; T < j2.length; T++) {
                for (var R, $2 = h((P2 = j2[T])[0]), N = w(x(l(P2.index), u2.length), 0), C = [], A = 1; A < P2.length; A++)
                  S(C, void 0 === (L = P2[A]) ? L : String(L));
                var W = P2.groups;
                if (v2) {
                  var B = k([$2], C, N, u2);
                  void 0 !== W && S(B, W), R = h(n(o2, void 0, B));
                } else
                  R = g($2, u2, N, C, W, o2);
                N >= I && (_ += O(u2, I, N) + R, I = N + $2.length);
              }
              return _ + O(u2, I);
            }];
          }, !!u(function() {
            var t3 = /./;
            return t3.exec = function() {
              var t4 = [];
              return t4.groups = {
                a: "7"
              }, t4;
            }, "7" !== "".replace(t3, "$<a>");
          }) || !P || j);
        },
        8436: function(t2, e2, r2) {
          var n = r2(9989), o = r2(1435).trim;
          n({
            target: "String",
            proto: true,
            forced: r2(5984)("trim")
          }, {
            trim: function() {
              return o(this);
            }
          });
        },
        8373: function(t2, e2, r2) {
          r2(5405)("asyncIterator");
        },
        7855: function(t2, e2, r2) {
          var n = r2(9989), o = r2(9037), i = r2(2615), a = r2(8844), u = r2(3931), c = r2(7697), s = r2(146), f = r2(3689), l = r2(6812), p = r2(3622), h = r2(5027), v = r2(5290), d = r2(8360), y = r2(4327), g = r2(5684), m = r2(5391), b = r2(300), w = r2(2741), x = r2(6062), k = r2(7518), S = r2(2474), E = r2(2560), O = r2(8920), P = r2(9556), j = r2(1880), L = r2(2148), _ = r2(3430), I = r2(2713), T = r2(7248), R = r2(4630), $2 = r2(4201), N = r2(6145), C = r2(5405), A = r2(3032), W = r2(5997), B = r2(618), F = r2(2960).forEach, U = I("hidden"), M = "Symbol", D = "prototype", G = B.set, q = B.getterFor(M), Q = Object[D], H = o.Symbol, z = H && H[D], Y = o.RangeError, V = o.TypeError, J = o.QObject, K = S.f, X = E.f, Z = x.f, tt = P.f, et = a([].push), rt = _("symbols"), nt = _("op-symbols"), ot = _("wks"), it = !J || !J[D] || !J[D].findChild, at = function(t3, e3, r3) {
            var n2 = K(Q, e3);
            n2 && delete Q[e3], X(t3, e3, r3), n2 && t3 !== Q && X(Q, e3, n2);
          }, ut = c && f(function() {
            return 7 !== m(X({}, "a", {
              get: function() {
                return X(this, "a", {
                  value: 7
                }).a;
              }
            })).a;
          }) ? at : X, ct = function(t3, e3) {
            var r3 = rt[t3] = m(z);
            return G(r3, {
              type: M,
              tag: t3,
              description: e3
            }), c || (r3.description = e3), r3;
          }, st = function(t3, e3, r3) {
            t3 === Q && st(nt, e3, r3), h(t3);
            var n2 = d(e3);
            return h(r3), l(rt, n2) ? (r3.enumerable ? (l(t3, U) && t3[U][n2] && (t3[U][n2] = false), r3 = m(r3, {
              enumerable: g(0, false)
            })) : (l(t3, U) || X(t3, U, g(1, {})), t3[U][n2] = true), ut(t3, n2, r3)) : X(t3, n2, r3);
          }, ft = function(t3, e3) {
            h(t3);
            var r3 = v(e3), n2 = b(r3).concat(vt(r3));
            return F(n2, function(e4) {
              c && !i(lt, r3, e4) || st(t3, e4, r3[e4]);
            }), t3;
          }, lt = function(t3) {
            var e3 = d(t3), r3 = i(tt, this, e3);
            return !(this === Q && l(rt, e3) && !l(nt, e3)) && (!(r3 || !l(this, e3) || !l(rt, e3) || l(this, U) && this[U][e3]) || r3);
          }, pt = function(t3, e3) {
            var r3 = v(t3), n2 = d(e3);
            if (r3 !== Q || !l(rt, n2) || l(nt, n2)) {
              var o2 = K(r3, n2);
              return !o2 || !l(rt, n2) || l(r3, U) && r3[U][n2] || (o2.enumerable = true), o2;
            }
          }, ht = function(t3) {
            var e3 = Z(v(t3)), r3 = [];
            return F(e3, function(t4) {
              l(rt, t4) || l(T, t4) || et(r3, t4);
            }), r3;
          }, vt = function(t3) {
            var e3 = t3 === Q, r3 = Z(e3 ? nt : v(t3)), n2 = [];
            return F(r3, function(t4) {
              !l(rt, t4) || e3 && !l(Q, t4) || et(n2, rt[t4]);
            }), n2;
          };
          s || (H = function() {
            if (p(z, this))
              throw new V("Symbol is not a constructor");
            var t3 = arguments.length && void 0 !== arguments[0] ? y(arguments[0]) : void 0, e3 = R(t3), r3 = function(t4) {
              var n2 = void 0 === this ? o : this;
              n2 === Q && i(r3, nt, t4), l(n2, U) && l(n2[U], e3) && (n2[U][e3] = false);
              var a2 = g(1, t4);
              try {
                ut(n2, e3, a2);
              } catch (t5) {
                if (!(t5 instanceof Y))
                  throw t5;
                at(n2, e3, a2);
              }
            };
            return c && it && ut(Q, e3, {
              configurable: true,
              set: r3
            }), ct(e3, t3);
          }, j(z = H[D], "toString", function() {
            return q(this).tag;
          }), j(H, "withoutSetter", function(t3) {
            return ct(R(t3), t3);
          }), P.f = lt, E.f = st, O.f = ft, S.f = pt, w.f = x.f = ht, k.f = vt, N.f = function(t3) {
            return ct($2(t3), t3);
          }, c && (L(z, "description", {
            configurable: true,
            get: function() {
              return q(this).description;
            }
          }), u || j(Q, "propertyIsEnumerable", lt, {
            unsafe: true
          }))), n({
            global: true,
            constructor: true,
            wrap: true,
            forced: !s,
            sham: !s
          }, {
            Symbol: H
          }), F(b(ot), function(t3) {
            C(t3);
          }), n({
            target: M,
            stat: true,
            forced: !s
          }, {
            useSetter: function() {
              it = true;
            },
            useSimple: function() {
              it = false;
            }
          }), n({
            target: "Object",
            stat: true,
            forced: !s,
            sham: !c
          }, {
            create: function(t3, e3) {
              return void 0 === e3 ? m(t3) : ft(m(t3), e3);
            },
            defineProperty: st,
            defineProperties: ft,
            getOwnPropertyDescriptor: pt
          }), n({
            target: "Object",
            stat: true,
            forced: !s
          }, {
            getOwnPropertyNames: ht
          }), A(), W(H, M), T[U] = true;
        },
        6544: function(t2, e2, r2) {
          var n = r2(9989), o = r2(7697), i = r2(9037), a = r2(8844), u = r2(6812), c = r2(9985), s = r2(3622), f = r2(4327), l = r2(2148), p = r2(8758), h = i.Symbol, v = h && h.prototype;
          if (o && c(h) && (!("description" in v) || void 0 !== h().description)) {
            var d = {}, y = function() {
              var t3 = arguments.length < 1 || void 0 === arguments[0] ? void 0 : f(arguments[0]), e3 = s(v, this) ? new h(t3) : void 0 === t3 ? h() : h(t3);
              return "" === t3 && (d[e3] = true), e3;
            };
            p(y, h), y.prototype = v, v.constructor = y;
            var g = "Symbol(description detection)" === String(h("description detection")), m = a(v.valueOf), b = a(v.toString), w = /^Symbol\((.*)\)[^)]+$/, x = a("".replace), k = a("".slice);
            l(v, "description", {
              configurable: true,
              get: function() {
                var t3 = m(this);
                if (u(d, t3))
                  return "";
                var e3 = b(t3), r3 = g ? k(e3, 7, -1) : x(e3, w, "$1");
                return "" === r3 ? void 0 : r3;
              }
            }), n({
              global: true,
              constructor: true,
              forced: true
            }, {
              Symbol: y
            });
          }
        },
        3975: function(t2, e2, r2) {
          var n = r2(9989), o = r2(6058), i = r2(6812), a = r2(4327), u = r2(3430), c = r2(6549), s = u("string-to-symbol-registry"), f = u("symbol-to-string-registry");
          n({
            target: "Symbol",
            stat: true,
            forced: !c
          }, {
            for: function(t3) {
              var e3 = a(t3);
              if (i(s, e3))
                return s[e3];
              var r3 = o("Symbol")(e3);
              return s[e3] = r3, f[r3] = e3, r3;
            }
          });
        },
        4254: function(t2, e2, r2) {
          r2(5405)("iterator");
        },
        9749: function(t2, e2, r2) {
          r2(7855), r2(3975), r2(1445), r2(8324), r2(9434);
        },
        1445: function(t2, e2, r2) {
          var n = r2(9989), o = r2(6812), i = r2(734), a = r2(3691), u = r2(3430), c = r2(6549), s = u("symbol-to-string-registry");
          n({
            target: "Symbol",
            stat: true,
            forced: !c
          }, {
            keyFor: function(t3) {
              if (!i(t3))
                throw new TypeError(a(t3) + " is not a symbol");
              if (o(s, t3))
                return s[t3];
            }
          });
        },
        9373: function(t2, e2, r2) {
          var n = r2(5405), o = r2(3032);
          n("toPrimitive"), o();
        },
        6793: function(t2, e2, r2) {
          var n = r2(6058), o = r2(5405), i = r2(5997);
          o("toStringTag"), i(n("Symbol"), "Symbol");
        },
        6237: function(t2, e2, r2) {
          var n = r2(9989), o = r2(2615), i = r2(509), a = r2(5027), u = r2(8999), c = r2(2302), s = r2(7394), f = r2(7807), l = r2(2399), p = r2(3931), h = s(function(t3) {
            var e3 = this, r3 = e3.iterator, n2 = e3.predicate;
            return new t3(function(i2, c2) {
              var s2 = function(t4) {
                e3.done = true, c2(t4);
              }, p2 = function(t4) {
                l(r3, s2, t4, s2);
              }, h2 = function() {
                try {
                  t3.resolve(a(o(e3.next, r3))).then(function(r4) {
                    try {
                      if (a(r4).done)
                        e3.done = true, i2(f(void 0, true));
                      else {
                        var o2 = r4.value;
                        try {
                          var c3 = n2(o2, e3.counter++), l2 = function(t4) {
                            t4 ? i2(f(o2, false)) : h2();
                          };
                          u(c3) ? t3.resolve(c3).then(l2, p2) : l2(c3);
                        } catch (t4) {
                          p2(t4);
                        }
                      }
                    } catch (t4) {
                      s2(t4);
                    }
                  }, s2);
                } catch (t4) {
                  s2(t4);
                }
              };
              h2();
            });
          });
          n({
            target: "AsyncIterator",
            proto: true,
            real: true,
            forced: p
          }, {
            filter: function(t3) {
              return a(this), i(t3), new h(c(this), {
                predicate: t3
              });
            }
          });
        },
        1954: function(t2, e2, r2) {
          var n = r2(9989), o = r2(2489).find;
          n({
            target: "AsyncIterator",
            proto: true,
            real: true
          }, {
            find: function(t3) {
              return o(this, t3);
            }
          });
        },
        9667: function(t2, e2, r2) {
          var n = r2(9989), o = r2(2489).forEach;
          n({
            target: "AsyncIterator",
            proto: true,
            real: true
          }, {
            forEach: function(t3) {
              return o(this, t3);
            }
          });
        },
        7602: function(t2, e2, r2) {
          var n = r2(9989), o = r2(9037), i = r2(767), a = r2(9985), u = r2(1868), c = r2(5773), s = r2(3689), f = r2(6812), l = r2(4201), p = r2(2013).IteratorPrototype, h = r2(3931), v = l("toStringTag"), d = TypeError, y = o.Iterator, g = h || !a(y) || y.prototype !== p || !s(function() {
            y({});
          }), m = function() {
            if (i(this, p), u(this) === p)
              throw new d("Abstract class Iterator not directly constructable");
          };
          f(p, v) || c(p, v, "Iterator"), !g && f(p, "constructor") && p.constructor !== Object || c(p, "constructor", m), m.prototype = p, n({
            global: true,
            constructor: true,
            forced: g
          }, {
            Iterator: m
          });
        },
        3476: function(t2, e2, r2) {
          var n = r2(9989), o = r2(2615), i = r2(509), a = r2(5027), u = r2(2302), c = r2(5419), s = r2(1228), f = r2(3931), l = c(function() {
            for (var t3, e3, r3 = this.iterator, n2 = this.predicate, i2 = this.next; ; ) {
              if (t3 = a(o(i2, r3)), this.done = !!t3.done)
                return;
              if (e3 = t3.value, s(r3, n2, [e3, this.counter++], true))
                return e3;
            }
          });
          n({
            target: "Iterator",
            proto: true,
            real: true,
            forced: f
          }, {
            filter: function(t3) {
              return a(this), i(t3), new l(u(this), {
                predicate: t3
              });
            }
          });
        },
        928: function(t2, e2, r2) {
          var n = r2(9989), o = r2(8734), i = r2(509), a = r2(5027), u = r2(2302);
          n({
            target: "Iterator",
            proto: true,
            real: true
          }, {
            find: function(t3) {
              a(this), i(t3);
              var e3 = u(this), r3 = 0;
              return o(e3, function(e4, n2) {
                if (t3(e4, r3++))
                  return n2(e4);
              }, {
                IS_RECORD: true,
                INTERRUPTED: true
              }).result;
            }
          });
        },
        5: function(t2, e2, r2) {
          var n = r2(9989), o = r2(8734), i = r2(509), a = r2(5027), u = r2(2302);
          n({
            target: "Iterator",
            proto: true,
            real: true
          }, {
            forEach: function(t3) {
              a(this), i(t3);
              var e3 = u(this), r3 = 0;
              o(e3, function(e4) {
                t3(e4, r3++);
              }, {
                IS_RECORD: true
              });
            }
          });
        },
        691: function(t2, e2, r2) {
          var n = r2(9989), o = r2(7697), i = r2(9037), a = r2(6058), u = r2(8844), c = r2(2615), s = r2(9985), f = r2(8999), l = r2(2297), p = r2(6812), h = r2(4327), v = r2(6310), d = r2(6522), y = r2(3689), g = r2(6675), m = r2(146), b = i.JSON, w = i.Number, x = i.SyntaxError, k = b && b.parse, S = a("Object", "keys"), E = Object.getOwnPropertyDescriptor, O = u("".charAt), P = u("".slice), j = u(/./.exec), L = u([].push), _ = /^\d$/, I = /^[1-9]$/, T = /^(?:-|\d)$/, R = /^[\t\n\r ]$/, $2 = function(t3, e3, r3, n2) {
            var o2, i2, a2, u2, s2, h2 = t3[e3], d2 = n2 && h2 === n2.value, y2 = d2 && "string" == typeof n2.source ? {
              source: n2.source
            } : {};
            if (f(h2)) {
              var g2 = l(h2), m2 = d2 ? n2.nodes : g2 ? [] : {};
              if (g2)
                for (o2 = m2.length, a2 = v(h2), u2 = 0; u2 < a2; u2++)
                  N(h2, u2, $2(h2, "" + u2, r3, u2 < o2 ? m2[u2] : void 0));
              else
                for (i2 = S(h2), a2 = v(i2), u2 = 0; u2 < a2; u2++)
                  s2 = i2[u2], N(h2, s2, $2(h2, s2, r3, p(m2, s2) ? m2[s2] : void 0));
            }
            return c(r3, t3, e3, h2, y2);
          }, N = function(t3, e3, r3) {
            if (o) {
              var n2 = E(t3, e3);
              if (n2 && !n2.configurable)
                return;
            }
            void 0 === r3 ? delete t3[e3] : d(t3, e3, r3);
          }, C = function(t3, e3, r3, n2) {
            this.value = t3, this.end = e3, this.source = r3, this.nodes = n2;
          }, A = function(t3, e3) {
            this.source = t3, this.index = e3;
          };
          A.prototype = {
            fork: function(t3) {
              return new A(this.source, t3);
            },
            parse: function() {
              var t3 = this.source, e3 = this.skip(R, this.index), r3 = this.fork(e3), n2 = O(t3, e3);
              if (j(T, n2))
                return r3.number();
              switch (n2) {
                case "{":
                  return r3.object();
                case "[":
                  return r3.array();
                case '"':
                  return r3.string();
                case "t":
                  return r3.keyword(true);
                case "f":
                  return r3.keyword(false);
                case "n":
                  return r3.keyword(null);
              }
              throw new x('Unexpected character: "' + n2 + '" at: ' + e3);
            },
            node: function(t3, e3, r3, n2, o2) {
              return new C(e3, n2, t3 ? null : P(this.source, r3, n2), o2);
            },
            object: function() {
              for (var t3 = this.source, e3 = this.index + 1, r3 = false, n2 = {}, o2 = {}; e3 < t3.length; ) {
                if (e3 = this.until(['"', "}"], e3), "}" === O(t3, e3) && !r3) {
                  e3++;
                  break;
                }
                var i2 = this.fork(e3).string(), a2 = i2.value;
                e3 = i2.end, e3 = this.until([":"], e3) + 1, e3 = this.skip(R, e3), i2 = this.fork(e3).parse(), d(o2, a2, i2), d(n2, a2, i2.value), e3 = this.until([",", "}"], i2.end);
                var u2 = O(t3, e3);
                if ("," === u2)
                  r3 = true, e3++;
                else if ("}" === u2) {
                  e3++;
                  break;
                }
              }
              return this.node(1, n2, this.index, e3, o2);
            },
            array: function() {
              for (var t3 = this.source, e3 = this.index + 1, r3 = false, n2 = [], o2 = []; e3 < t3.length; ) {
                if (e3 = this.skip(R, e3), "]" === O(t3, e3) && !r3) {
                  e3++;
                  break;
                }
                var i2 = this.fork(e3).parse();
                if (L(o2, i2), L(n2, i2.value), e3 = this.until([",", "]"], i2.end), "," === O(t3, e3))
                  r3 = true, e3++;
                else if ("]" === O(t3, e3)) {
                  e3++;
                  break;
                }
              }
              return this.node(1, n2, this.index, e3, o2);
            },
            string: function() {
              var t3 = this.index, e3 = g(this.source, this.index + 1);
              return this.node(0, e3.value, t3, e3.end);
            },
            number: function() {
              var t3 = this.source, e3 = this.index, r3 = e3;
              if ("-" === O(t3, r3) && r3++, "0" === O(t3, r3))
                r3++;
              else {
                if (!j(I, O(t3, r3)))
                  throw new x("Failed to parse number at: " + r3);
                r3 = this.skip(_, ++r3);
              }
              if (("." === O(t3, r3) && (r3 = this.skip(_, ++r3)), "e" === O(t3, r3) || "E" === O(t3, r3)) && (r3++, "+" !== O(t3, r3) && "-" !== O(t3, r3) || r3++, r3 === (r3 = this.skip(_, r3))))
                throw new x("Failed to parse number's exponent value at: " + r3);
              return this.node(0, w(P(t3, e3, r3)), e3, r3);
            },
            keyword: function(t3) {
              var e3 = "" + t3, r3 = this.index, n2 = r3 + e3.length;
              if (P(this.source, r3, n2) !== e3)
                throw new x("Failed to parse value at: " + r3);
              return this.node(0, t3, r3, n2);
            },
            skip: function(t3, e3) {
              for (var r3 = this.source; e3 < r3.length && j(t3, O(r3, e3)); e3++)
                ;
              return e3;
            },
            until: function(t3, e3) {
              e3 = this.skip(R, e3);
              for (var r3 = O(this.source, e3), n2 = 0; n2 < t3.length; n2++)
                if (t3[n2] === r3)
                  return e3;
              throw new x('Unexpected character: "' + r3 + '" at: ' + e3);
            }
          };
          var W = y(function() {
            var t3, e3 = "9007199254740993";
            return k(e3, function(e4, r3, n2) {
              t3 = n2.source;
            }), t3 !== e3;
          }), B = m && !y(function() {
            return 1 / k("-0 	") != -1 / 0;
          });
          n({
            target: "JSON",
            stat: true,
            forced: W
          }, {
            parse: function(t3, e3) {
              return B && !s(e3) ? k(t3) : function(t4, e4) {
                t4 = h(t4);
                var r3 = new A(t4, 0, ""), n2 = r3.parse(), o2 = n2.value, i2 = r3.skip(R, n2.end);
                if (i2 < t4.length)
                  throw new x('Unexpected extra character: "' + O(t4, i2) + '" after the parsed data at: ' + i2);
                return s(e4) ? $2({
                  "": o2
                }, "", e4, n2) : o2;
              }(t3, e3);
            }
          });
        },
        7444: function(t2, e2, r2) {
          var n = r2(9989), o = r2(9945), i = r2(3914).remove;
          n({
            target: "Map",
            proto: true,
            real: true,
            forced: true
          }, {
            deleteAll: function() {
              for (var t3, e3 = o(this), r3 = true, n2 = 0, a = arguments.length; n2 < a; n2++)
                t3 = i(e3, arguments[n2]), r3 = r3 && t3;
              return !!r3;
            }
          });
        },
        7968: function(t2, e2, r2) {
          var n = r2(9989), o = r2(9945), i = r2(3914), a = i.get, u = i.has, c = i.set;
          n({
            target: "Map",
            proto: true,
            real: true,
            forced: true
          }, {
            emplace: function(t3, e3) {
              var r3, n2, i2 = o(this);
              return u(i2, t3) ? (r3 = a(i2, t3), "update" in e3 && (r3 = e3.update(r3, t3, i2), c(i2, t3, r3)), r3) : (n2 = e3.insert(t3, i2), c(i2, t3, n2), n2);
            }
          });
        },
        747: function(t2, e2, r2) {
          var n = r2(9989), o = r2(4071), i = r2(9945), a = r2(613);
          n({
            target: "Map",
            proto: true,
            real: true,
            forced: true
          }, {
            every: function(t3) {
              var e3 = i(this), r3 = o(t3, arguments.length > 1 ? arguments[1] : void 0);
              return false !== a(e3, function(t4, n2) {
                if (!r3(t4, n2, e3))
                  return false;
              }, true);
            }
          });
        },
        1099: function(t2, e2, r2) {
          var n = r2(9989), o = r2(4071), i = r2(9945), a = r2(3914), u = r2(613), c = a.Map, s = a.set;
          n({
            target: "Map",
            proto: true,
            real: true,
            forced: true
          }, {
            filter: function(t3) {
              var e3 = i(this), r3 = o(t3, arguments.length > 1 ? arguments[1] : void 0), n2 = new c();
              return u(e3, function(t4, o2) {
                r3(t4, o2, e3) && s(n2, o2, t4);
              }), n2;
            }
          });
        },
        876: function(t2, e2, r2) {
          var n = r2(9989), o = r2(4071), i = r2(9945), a = r2(613);
          n({
            target: "Map",
            proto: true,
            real: true,
            forced: true
          }, {
            findKey: function(t3) {
              var e3 = i(this), r3 = o(t3, arguments.length > 1 ? arguments[1] : void 0), n2 = a(e3, function(t4, n3) {
                if (r3(t4, n3, e3))
                  return {
                    key: n3
                  };
              }, true);
              return n2 && n2.key;
            }
          });
        },
        6320: function(t2, e2, r2) {
          var n = r2(9989), o = r2(4071), i = r2(9945), a = r2(613);
          n({
            target: "Map",
            proto: true,
            real: true,
            forced: true
          }, {
            find: function(t3) {
              var e3 = i(this), r3 = o(t3, arguments.length > 1 ? arguments[1] : void 0), n2 = a(e3, function(t4, n3) {
                if (r3(t4, n3, e3))
                  return {
                    value: t4
                  };
              }, true);
              return n2 && n2.value;
            }
          });
        },
        6791: function(t2, e2, r2) {
          var n = r2(9989), o = r2(8600), i = r2(9945), a = r2(613);
          n({
            target: "Map",
            proto: true,
            real: true,
            forced: true
          }, {
            includes: function(t3) {
              return true === a(i(this), function(e3) {
                if (o(e3, t3))
                  return true;
              }, true);
            }
          });
        },
        19: function(t2, e2, r2) {
          var n = r2(9989), o = r2(9945), i = r2(613);
          n({
            target: "Map",
            proto: true,
            real: true,
            forced: true
          }, {
            keyOf: function(t3) {
              var e3 = i(o(this), function(e4, r3) {
                if (e4 === t3)
                  return {
                    key: r3
                  };
              }, true);
              return e3 && e3.key;
            }
          });
        },
        2343: function(t2, e2, r2) {
          var n = r2(9989), o = r2(4071), i = r2(9945), a = r2(3914), u = r2(613), c = a.Map, s = a.set;
          n({
            target: "Map",
            proto: true,
            real: true,
            forced: true
          }, {
            mapKeys: function(t3) {
              var e3 = i(this), r3 = o(t3, arguments.length > 1 ? arguments[1] : void 0), n2 = new c();
              return u(e3, function(t4, o2) {
                s(n2, r3(t4, o2, e3), t4);
              }), n2;
            }
          });
        },
        1096: function(t2, e2, r2) {
          var n = r2(9989), o = r2(4071), i = r2(9945), a = r2(3914), u = r2(613), c = a.Map, s = a.set;
          n({
            target: "Map",
            proto: true,
            real: true,
            forced: true
          }, {
            mapValues: function(t3) {
              var e3 = i(this), r3 = o(t3, arguments.length > 1 ? arguments[1] : void 0), n2 = new c();
              return u(e3, function(t4, o2) {
                s(n2, o2, r3(t4, o2, e3));
              }), n2;
            }
          });
        },
        4314: function(t2, e2, r2) {
          var n = r2(9989), o = r2(9945), i = r2(8734), a = r2(3914).set;
          n({
            target: "Map",
            proto: true,
            real: true,
            arity: 1,
            forced: true
          }, {
            merge: function(t3) {
              for (var e3 = o(this), r3 = arguments.length, n2 = 0; n2 < r3; )
                i(arguments[n2++], function(t4, r4) {
                  a(e3, t4, r4);
                }, {
                  AS_ENTRIES: true
                });
              return e3;
            }
          });
        },
        3346: function(t2, e2, r2) {
          var n = r2(9989), o = r2(509), i = r2(9945), a = r2(613), u = TypeError;
          n({
            target: "Map",
            proto: true,
            real: true,
            forced: true
          }, {
            reduce: function(t3) {
              var e3 = i(this), r3 = arguments.length < 2, n2 = r3 ? void 0 : arguments[1];
              if (o(t3), a(e3, function(o2, i2) {
                r3 ? (r3 = false, n2 = o2) : n2 = t3(n2, o2, i2, e3);
              }), r3)
                throw new u("Reduce of empty map with no initial value");
              return n2;
            }
          });
        },
        4984: function(t2, e2, r2) {
          var n = r2(9989), o = r2(4071), i = r2(9945), a = r2(613);
          n({
            target: "Map",
            proto: true,
            real: true,
            forced: true
          }, {
            some: function(t3) {
              var e3 = i(this), r3 = o(t3, arguments.length > 1 ? arguments[1] : void 0);
              return true === a(e3, function(t4, n2) {
                if (r3(t4, n2, e3))
                  return true;
              }, true);
            }
          });
        },
        4078: function(t2, e2, r2) {
          var n = r2(9989), o = r2(509), i = r2(9945), a = r2(3914), u = TypeError, c = a.get, s = a.has, f = a.set;
          n({
            target: "Map",
            proto: true,
            real: true,
            forced: true
          }, {
            update: function(t3, e3) {
              var r3 = i(this), n2 = arguments.length;
              o(e3);
              var a2 = s(r3, t3);
              if (!a2 && n2 < 3)
                throw new u("Updating absent value");
              var l = a2 ? c(r3, t3) : o(n2 > 2 ? arguments[2] : void 0)(t3, r3);
              return f(r3, t3, e3(l, t3, r3)), r3;
            }
          });
        },
        7522: function(t2, e2, r2) {
          var n = r2(9037), o = r2(6338), i = r2(3265), a = r2(7612), u = r2(5773), c = function(t3) {
            if (t3 && t3.forEach !== a)
              try {
                u(t3, "forEach", a);
              } catch (e3) {
                t3.forEach = a;
              }
          };
          for (var s in o)
            o[s] && c(n[s] && n[s].prototype);
          c(i);
        },
        6265: function(t2, e2, r2) {
          var n = r2(9037), o = r2(6338), i = r2(3265), a = r2(752), u = r2(5773), c = r2(4201), s = c("iterator"), f = c("toStringTag"), l = a.values, p = function(t3, e3) {
            if (t3) {
              if (t3[s] !== l)
                try {
                  u(t3, s, l);
                } catch (e4) {
                  t3[s] = l;
                }
              if (t3[f] || u(t3, f, e3), o[e3]) {
                for (var r3 in a)
                  if (t3[r3] !== a[r3])
                    try {
                      u(t3, r3, a[r3]);
                    } catch (e4) {
                      t3[r3] = a[r3];
                    }
              }
            }
          };
          for (var h in o)
            p(n[h] && n[h].prototype, h);
          p(i, "DOMTokenList");
        },
        2625: function(t2, e2, r2) {
          r2(752);
          var n = r2(9989), o = r2(9037), i = r2(2615), a = r2(8844), u = r2(7697), c = r2(6837), s = r2(1880), f = r2(2148), l = r2(6045), p = r2(5997), h = r2(974), v = r2(618), d = r2(767), y = r2(9985), g = r2(6812), m = r2(4071), b = r2(926), w = r2(5027), x = r2(8999), k = r2(4327), S = r2(5391), E = r2(5684), O = r2(5185), P = r2(1664), j = r2(7807), L = r2(1500), _ = r2(4201), I = r2(382), T = _("iterator"), R = "URLSearchParams", $2 = R + "Iterator", N = v.set, C = v.getterFor(R), A = v.getterFor($2), W = Object.getOwnPropertyDescriptor, B = function(t3) {
            if (!u)
              return o[t3];
            var e3 = W(o, t3);
            return e3 && e3.value;
          }, F = B("fetch"), U = B("Request"), M = B("Headers"), D = U && U.prototype, G = M && M.prototype, q = o.RegExp, Q = o.TypeError, H = o.decodeURIComponent, z = o.encodeURIComponent, Y = a("".charAt), V = a([].join), J = a([].push), K = a("".replace), X = a([].shift), Z = a([].splice), tt = a("".split), et = a("".slice), rt = /\+/g, nt = Array(4), ot = function(t3) {
            return nt[t3 - 1] || (nt[t3 - 1] = q("((?:%[\\da-f]{2}){" + t3 + "})", "gi"));
          }, it = function(t3) {
            try {
              return H(t3);
            } catch (e3) {
              return t3;
            }
          }, at = function(t3) {
            var e3 = K(t3, rt, " "), r3 = 4;
            try {
              return H(e3);
            } catch (t4) {
              for (; r3; )
                e3 = K(e3, ot(r3--), it);
              return e3;
            }
          }, ut = /[!'()~]|%20/g, ct = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+"
          }, st = function(t3) {
            return ct[t3];
          }, ft = function(t3) {
            return K(z(t3), ut, st);
          }, lt = h(function(t3, e3) {
            N(this, {
              type: $2,
              target: C(t3).entries,
              index: 0,
              kind: e3
            });
          }, R, function() {
            var t3 = A(this), e3 = t3.target, r3 = t3.index++;
            if (!e3 || r3 >= e3.length)
              return t3.target = void 0, j(void 0, true);
            var n2 = e3[r3];
            switch (t3.kind) {
              case "keys":
                return j(n2.key, false);
              case "values":
                return j(n2.value, false);
            }
            return j([n2.key, n2.value], false);
          }, true), pt = function(t3) {
            this.entries = [], this.url = null, void 0 !== t3 && (x(t3) ? this.parseObject(t3) : this.parseQuery("string" == typeof t3 ? "?" === Y(t3, 0) ? et(t3, 1) : t3 : k(t3)));
          };
          pt.prototype = {
            type: R,
            bindURL: function(t3) {
              this.url = t3, this.update();
            },
            parseObject: function(t3) {
              var e3, r3, n2, o2, a2, u2, c2, s2 = this.entries, f2 = P(t3);
              if (f2)
                for (r3 = (e3 = O(t3, f2)).next; !(n2 = i(r3, e3)).done; ) {
                  if (a2 = (o2 = O(w(n2.value))).next, (u2 = i(a2, o2)).done || (c2 = i(a2, o2)).done || !i(a2, o2).done)
                    throw new Q("Expected sequence with length 2");
                  J(s2, {
                    key: k(u2.value),
                    value: k(c2.value)
                  });
                }
              else
                for (var l2 in t3)
                  g(t3, l2) && J(s2, {
                    key: l2,
                    value: k(t3[l2])
                  });
            },
            parseQuery: function(t3) {
              if (t3)
                for (var e3, r3, n2 = this.entries, o2 = tt(t3, "&"), i2 = 0; i2 < o2.length; )
                  (e3 = o2[i2++]).length && (r3 = tt(e3, "="), J(n2, {
                    key: at(X(r3)),
                    value: at(V(r3, "="))
                  }));
            },
            serialize: function() {
              for (var t3, e3 = this.entries, r3 = [], n2 = 0; n2 < e3.length; )
                t3 = e3[n2++], J(r3, ft(t3.key) + "=" + ft(t3.value));
              return V(r3, "&");
            },
            update: function() {
              this.entries.length = 0, this.parseQuery(this.url.query);
            },
            updateURL: function() {
              this.url && this.url.update();
            }
          };
          var ht = function() {
            d(this, vt);
            var t3 = N(this, new pt(arguments.length > 0 ? arguments[0] : void 0));
            u || (this.size = t3.entries.length);
          }, vt = ht.prototype;
          if (l(vt, {
            append: function(t3, e3) {
              var r3 = C(this);
              L(arguments.length, 2), J(r3.entries, {
                key: k(t3),
                value: k(e3)
              }), u || this.length++, r3.updateURL();
            },
            delete: function(t3) {
              for (var e3 = C(this), r3 = L(arguments.length, 1), n2 = e3.entries, o2 = k(t3), i2 = r3 < 2 ? void 0 : arguments[1], a2 = void 0 === i2 ? i2 : k(i2), c2 = 0; c2 < n2.length; ) {
                var s2 = n2[c2];
                if (s2.key !== o2 || void 0 !== a2 && s2.value !== a2)
                  c2++;
                else if (Z(n2, c2, 1), void 0 !== a2)
                  break;
              }
              u || (this.size = n2.length), e3.updateURL();
            },
            get: function(t3) {
              var e3 = C(this).entries;
              L(arguments.length, 1);
              for (var r3 = k(t3), n2 = 0; n2 < e3.length; n2++)
                if (e3[n2].key === r3)
                  return e3[n2].value;
              return null;
            },
            getAll: function(t3) {
              var e3 = C(this).entries;
              L(arguments.length, 1);
              for (var r3 = k(t3), n2 = [], o2 = 0; o2 < e3.length; o2++)
                e3[o2].key === r3 && J(n2, e3[o2].value);
              return n2;
            },
            has: function(t3) {
              for (var e3 = C(this).entries, r3 = L(arguments.length, 1), n2 = k(t3), o2 = r3 < 2 ? void 0 : arguments[1], i2 = void 0 === o2 ? o2 : k(o2), a2 = 0; a2 < e3.length; ) {
                var u2 = e3[a2++];
                if (u2.key === n2 && (void 0 === i2 || u2.value === i2))
                  return true;
              }
              return false;
            },
            set: function(t3, e3) {
              var r3 = C(this);
              L(arguments.length, 1);
              for (var n2, o2 = r3.entries, i2 = false, a2 = k(t3), c2 = k(e3), s2 = 0; s2 < o2.length; s2++)
                (n2 = o2[s2]).key === a2 && (i2 ? Z(o2, s2--, 1) : (i2 = true, n2.value = c2));
              i2 || J(o2, {
                key: a2,
                value: c2
              }), u || (this.size = o2.length), r3.updateURL();
            },
            sort: function() {
              var t3 = C(this);
              I(t3.entries, function(t4, e3) {
                return t4.key > e3.key ? 1 : -1;
              }), t3.updateURL();
            },
            forEach: function(t3) {
              for (var e3, r3 = C(this).entries, n2 = m(t3, arguments.length > 1 ? arguments[1] : void 0), o2 = 0; o2 < r3.length; )
                n2((e3 = r3[o2++]).value, e3.key, this);
            },
            keys: function() {
              return new lt(this, "keys");
            },
            values: function() {
              return new lt(this, "values");
            },
            entries: function() {
              return new lt(this, "entries");
            }
          }, {
            enumerable: true
          }), s(vt, T, vt.entries, {
            name: "entries"
          }), s(vt, "toString", function() {
            return C(this).serialize();
          }, {
            enumerable: true
          }), u && f(vt, "size", {
            get: function() {
              return C(this).entries.length;
            },
            configurable: true,
            enumerable: true
          }), p(ht, R), n({
            global: true,
            constructor: true,
            forced: !c
          }, {
            URLSearchParams: ht
          }), !c && y(M)) {
            var dt = a(G.has), yt = a(G.set), gt = function(t3) {
              if (x(t3)) {
                var e3, r3 = t3.body;
                if (b(r3) === R)
                  return e3 = t3.headers ? new M(t3.headers) : new M(), dt(e3, "content-type") || yt(e3, "content-type", "application/x-www-form-urlencoded;charset=UTF-8"), S(t3, {
                    body: E(0, k(r3)),
                    headers: E(0, e3)
                  });
              }
              return t3;
            };
            if (y(F) && n({
              global: true,
              enumerable: true,
              dontCallGetSet: true,
              forced: true
            }, {
              fetch: function(t3) {
                return F(t3, arguments.length > 1 ? gt(arguments[1]) : {});
              }
            }), y(U)) {
              var mt = function(t3) {
                return d(this, D), new U(t3, arguments.length > 1 ? gt(arguments[1]) : {});
              };
              D.constructor = mt, mt.prototype = D, n({
                global: true,
                constructor: true,
                dontCallGetSet: true,
                forced: true
              }, {
                Request: mt
              });
            }
          }
          t2.exports = {
            URLSearchParams: ht,
            getState: C
          };
        },
        8858: function(t2, e2, r2) {
          var n = r2(1880), o = r2(8844), i = r2(4327), a = r2(1500), u = URLSearchParams, c = u.prototype, s = o(c.append), f = o(c.delete), l = o(c.forEach), p = o([].push), h = new u("a=1&a=2&b=3");
          h.delete("a", 1), h.delete("b", void 0), h + "" != "a=2" && n(c, "delete", function(t3) {
            var e3 = arguments.length, r3 = e3 < 2 ? void 0 : arguments[1];
            if (e3 && void 0 === r3)
              return f(this, t3);
            var n2 = [];
            l(this, function(t4, e4) {
              p(n2, {
                key: e4,
                value: t4
              });
            }), a(e3, 1);
            for (var o2, u2 = i(t3), c2 = i(r3), h2 = 0, v = 0, d = false, y = n2.length; h2 < y; )
              o2 = n2[h2++], d || o2.key === u2 ? (d = true, f(this, o2.key)) : v++;
            for (; v < y; )
              (o2 = n2[v++]).key === u2 && o2.value === c2 || s(this, o2.key, o2.value);
          }, {
            enumerable: true,
            unsafe: true
          });
        },
        1318: function(t2, e2, r2) {
          var n = r2(1880), o = r2(8844), i = r2(4327), a = r2(1500), u = URLSearchParams, c = u.prototype, s = o(c.getAll), f = o(c.has), l = new u("a=1");
          !l.has("a", 2) && l.has("a", void 0) || n(c, "has", function(t3) {
            var e3 = arguments.length, r3 = e3 < 2 ? void 0 : arguments[1];
            if (e3 && void 0 === r3)
              return f(this, t3);
            var n2 = s(this, t3);
            a(e3, 1);
            for (var o2 = i(r3), u2 = 0; u2 < n2.length; )
              if (n2[u2++] === o2)
                return true;
            return false;
          }, {
            enumerable: true,
            unsafe: true
          });
        },
        9307: function(t2, e2, r2) {
          r2(2625);
        },
        3228: function(t2, e2, r2) {
          var n = r2(7697), o = r2(8844), i = r2(2148), a = URLSearchParams.prototype, u = o(a.forEach);
          n && !("size" in a) && i(a, "size", {
            get: function() {
              var t3 = 0;
              return u(this, function() {
                t3++;
              }), t3;
            },
            configurable: true,
            enumerable: true
          });
        },
        9391: function(t2, e2, r2) {
          r2(1694);
          var n, o = r2(9989), i = r2(7697), a = r2(6837), u = r2(9037), c = r2(4071), s = r2(8844), f = r2(1880), l = r2(2148), p = r2(767), h = r2(6812), v = r2(5394), d = r2(1055), y = r2(9015), g = r2(730).codeAt, m = r2(6430), b = r2(4327), w = r2(5997), x = r2(1500), k = r2(2625), S = r2(618), E = S.set, O = S.getterFor("URL"), P = k.URLSearchParams, j = k.getState, L = u.URL, _ = u.TypeError, I = u.parseInt, T = Math.floor, R = Math.pow, $2 = s("".charAt), N = s(/./.exec), C = s([].join), A = s(1 .toString), W = s([].pop), B = s([].push), F = s("".replace), U = s([].shift), M = s("".split), D = s("".slice), G = s("".toLowerCase), q = s([].unshift), Q = "Invalid scheme", H = "Invalid host", z = "Invalid port", Y = /[a-z]/i, V = /[\d+-.a-z]/i, J = /\d/, K = /^0x/i, X = /^[0-7]+$/, Z = /^\d+$/, tt = /^[\da-f]+$/i, et = /[\0\t\n\r #%/:<>?@[\\\]^|]/, rt = /[\0\t\n\r #/:<>?@[\\\]^|]/, nt = /^[\u0000-\u0020]+/, ot = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/, it = /[\t\n\r]/g, at = function(t3) {
            var e3, r3, n2, o2;
            if ("number" == typeof t3) {
              for (e3 = [], r3 = 0; r3 < 4; r3++)
                q(e3, t3 % 256), t3 = T(t3 / 256);
              return C(e3, ".");
            }
            if ("object" == typeof t3) {
              for (e3 = "", n2 = function(t4) {
                for (var e4 = null, r4 = 1, n3 = null, o3 = 0, i2 = 0; i2 < 8; i2++)
                  0 !== t4[i2] ? (o3 > r4 && (e4 = n3, r4 = o3), n3 = null, o3 = 0) : (null === n3 && (n3 = i2), ++o3);
                return o3 > r4 && (e4 = n3, r4 = o3), e4;
              }(t3), r3 = 0; r3 < 8; r3++)
                o2 && 0 === t3[r3] || (o2 && (o2 = false), n2 === r3 ? (e3 += r3 ? ":" : "::", o2 = true) : (e3 += A(t3[r3], 16), r3 < 7 && (e3 += ":")));
              return "[" + e3 + "]";
            }
            return t3;
          }, ut = {}, ct = v({}, ut, {
            " ": 1,
            '"': 1,
            "<": 1,
            ">": 1,
            "`": 1
          }), st = v({}, ct, {
            "#": 1,
            "?": 1,
            "{": 1,
            "}": 1
          }), ft = v({}, st, {
            "/": 1,
            ":": 1,
            ";": 1,
            "=": 1,
            "@": 1,
            "[": 1,
            "\\": 1,
            "]": 1,
            "^": 1,
            "|": 1
          }), lt = function(t3, e3) {
            var r3 = g(t3, 0);
            return r3 > 32 && r3 < 127 && !h(e3, t3) ? t3 : encodeURIComponent(t3);
          }, pt = {
            ftp: 21,
            file: null,
            http: 80,
            https: 443,
            ws: 80,
            wss: 443
          }, ht = function(t3, e3) {
            var r3;
            return 2 === t3.length && N(Y, $2(t3, 0)) && (":" === (r3 = $2(t3, 1)) || !e3 && "|" === r3);
          }, vt = function(t3) {
            var e3;
            return t3.length > 1 && ht(D(t3, 0, 2)) && (2 === t3.length || "/" === (e3 = $2(t3, 2)) || "\\" === e3 || "?" === e3 || "#" === e3);
          }, dt = function(t3) {
            return "." === t3 || "%2e" === G(t3);
          }, yt = {}, gt = {}, mt = {}, bt = {}, wt = {}, xt = {}, kt = {}, St = {}, Et = {}, Ot = {}, Pt = {}, jt = {}, Lt = {}, _t = {}, It = {}, Tt = {}, Rt = {}, $t = {}, Nt = {}, Ct = {}, At = {}, Wt = function(t3, e3, r3) {
            var n2, o2, i2, a2 = b(t3);
            if (e3) {
              if (o2 = this.parse(a2))
                throw new _(o2);
              this.searchParams = null;
            } else {
              if (void 0 !== r3 && (n2 = new Wt(r3, true)), o2 = this.parse(a2, null, n2))
                throw new _(o2);
              (i2 = j(new P())).bindURL(this), this.searchParams = i2;
            }
          };
          Wt.prototype = {
            type: "URL",
            parse: function(t3, e3, r3) {
              var o2, i2, a2, u2, c2, s2 = this, f2 = e3 || yt, l2 = 0, p2 = "", v2 = false, g2 = false, m2 = false;
              for (t3 = b(t3), e3 || (s2.scheme = "", s2.username = "", s2.password = "", s2.host = null, s2.port = null, s2.path = [], s2.query = null, s2.fragment = null, s2.cannotBeABaseURL = false, t3 = F(t3, nt, ""), t3 = F(t3, ot, "$1")), t3 = F(t3, it, ""), o2 = d(t3); l2 <= o2.length; ) {
                switch (i2 = o2[l2], f2) {
                  case yt:
                    if (!i2 || !N(Y, i2)) {
                      if (e3)
                        return Q;
                      f2 = mt;
                      continue;
                    }
                    p2 += G(i2), f2 = gt;
                    break;
                  case gt:
                    if (i2 && (N(V, i2) || "+" === i2 || "-" === i2 || "." === i2))
                      p2 += G(i2);
                    else {
                      if (":" !== i2) {
                        if (e3)
                          return Q;
                        p2 = "", f2 = mt, l2 = 0;
                        continue;
                      }
                      if (e3 && (s2.isSpecial() !== h(pt, p2) || "file" === p2 && (s2.includesCredentials() || null !== s2.port) || "file" === s2.scheme && !s2.host))
                        return;
                      if (s2.scheme = p2, e3)
                        return void (s2.isSpecial() && pt[s2.scheme] === s2.port && (s2.port = null));
                      p2 = "", "file" === s2.scheme ? f2 = _t : s2.isSpecial() && r3 && r3.scheme === s2.scheme ? f2 = bt : s2.isSpecial() ? f2 = St : "/" === o2[l2 + 1] ? (f2 = wt, l2++) : (s2.cannotBeABaseURL = true, B(s2.path, ""), f2 = Nt);
                    }
                    break;
                  case mt:
                    if (!r3 || r3.cannotBeABaseURL && "#" !== i2)
                      return Q;
                    if (r3.cannotBeABaseURL && "#" === i2) {
                      s2.scheme = r3.scheme, s2.path = y(r3.path), s2.query = r3.query, s2.fragment = "", s2.cannotBeABaseURL = true, f2 = At;
                      break;
                    }
                    f2 = "file" === r3.scheme ? _t : xt;
                    continue;
                  case bt:
                    if ("/" !== i2 || "/" !== o2[l2 + 1]) {
                      f2 = xt;
                      continue;
                    }
                    f2 = Et, l2++;
                    break;
                  case wt:
                    if ("/" === i2) {
                      f2 = Ot;
                      break;
                    }
                    f2 = $t;
                    continue;
                  case xt:
                    if (s2.scheme = r3.scheme, i2 === n)
                      s2.username = r3.username, s2.password = r3.password, s2.host = r3.host, s2.port = r3.port, s2.path = y(r3.path), s2.query = r3.query;
                    else if ("/" === i2 || "\\" === i2 && s2.isSpecial())
                      f2 = kt;
                    else if ("?" === i2)
                      s2.username = r3.username, s2.password = r3.password, s2.host = r3.host, s2.port = r3.port, s2.path = y(r3.path), s2.query = "", f2 = Ct;
                    else {
                      if ("#" !== i2) {
                        s2.username = r3.username, s2.password = r3.password, s2.host = r3.host, s2.port = r3.port, s2.path = y(r3.path), s2.path.length--, f2 = $t;
                        continue;
                      }
                      s2.username = r3.username, s2.password = r3.password, s2.host = r3.host, s2.port = r3.port, s2.path = y(r3.path), s2.query = r3.query, s2.fragment = "", f2 = At;
                    }
                    break;
                  case kt:
                    if (!s2.isSpecial() || "/" !== i2 && "\\" !== i2) {
                      if ("/" !== i2) {
                        s2.username = r3.username, s2.password = r3.password, s2.host = r3.host, s2.port = r3.port, f2 = $t;
                        continue;
                      }
                      f2 = Ot;
                    } else
                      f2 = Et;
                    break;
                  case St:
                    if (f2 = Et, "/" !== i2 || "/" !== $2(p2, l2 + 1))
                      continue;
                    l2++;
                    break;
                  case Et:
                    if ("/" !== i2 && "\\" !== i2) {
                      f2 = Ot;
                      continue;
                    }
                    break;
                  case Ot:
                    if ("@" === i2) {
                      v2 && (p2 = "%40" + p2), v2 = true, a2 = d(p2);
                      for (var w2 = 0; w2 < a2.length; w2++) {
                        var x2 = a2[w2];
                        if (":" !== x2 || m2) {
                          var k2 = lt(x2, ft);
                          m2 ? s2.password += k2 : s2.username += k2;
                        } else
                          m2 = true;
                      }
                      p2 = "";
                    } else if (i2 === n || "/" === i2 || "?" === i2 || "#" === i2 || "\\" === i2 && s2.isSpecial()) {
                      if (v2 && "" === p2)
                        return "Invalid authority";
                      l2 -= d(p2).length + 1, p2 = "", f2 = Pt;
                    } else
                      p2 += i2;
                    break;
                  case Pt:
                  case jt:
                    if (e3 && "file" === s2.scheme) {
                      f2 = Tt;
                      continue;
                    }
                    if (":" !== i2 || g2) {
                      if (i2 === n || "/" === i2 || "?" === i2 || "#" === i2 || "\\" === i2 && s2.isSpecial()) {
                        if (s2.isSpecial() && "" === p2)
                          return H;
                        if (e3 && "" === p2 && (s2.includesCredentials() || null !== s2.port))
                          return;
                        if (u2 = s2.parseHost(p2))
                          return u2;
                        if (p2 = "", f2 = Rt, e3)
                          return;
                        continue;
                      }
                      "[" === i2 ? g2 = true : "]" === i2 && (g2 = false), p2 += i2;
                    } else {
                      if ("" === p2)
                        return H;
                      if (u2 = s2.parseHost(p2))
                        return u2;
                      if (p2 = "", f2 = Lt, e3 === jt)
                        return;
                    }
                    break;
                  case Lt:
                    if (!N(J, i2)) {
                      if (i2 === n || "/" === i2 || "?" === i2 || "#" === i2 || "\\" === i2 && s2.isSpecial() || e3) {
                        if ("" !== p2) {
                          var S2 = I(p2, 10);
                          if (S2 > 65535)
                            return z;
                          s2.port = s2.isSpecial() && S2 === pt[s2.scheme] ? null : S2, p2 = "";
                        }
                        if (e3)
                          return;
                        f2 = Rt;
                        continue;
                      }
                      return z;
                    }
                    p2 += i2;
                    break;
                  case _t:
                    if (s2.scheme = "file", "/" === i2 || "\\" === i2)
                      f2 = It;
                    else {
                      if (!r3 || "file" !== r3.scheme) {
                        f2 = $t;
                        continue;
                      }
                      switch (i2) {
                        case n:
                          s2.host = r3.host, s2.path = y(r3.path), s2.query = r3.query;
                          break;
                        case "?":
                          s2.host = r3.host, s2.path = y(r3.path), s2.query = "", f2 = Ct;
                          break;
                        case "#":
                          s2.host = r3.host, s2.path = y(r3.path), s2.query = r3.query, s2.fragment = "", f2 = At;
                          break;
                        default:
                          vt(C(y(o2, l2), "")) || (s2.host = r3.host, s2.path = y(r3.path), s2.shortenPath()), f2 = $t;
                          continue;
                      }
                    }
                    break;
                  case It:
                    if ("/" === i2 || "\\" === i2) {
                      f2 = Tt;
                      break;
                    }
                    r3 && "file" === r3.scheme && !vt(C(y(o2, l2), "")) && (ht(r3.path[0], true) ? B(s2.path, r3.path[0]) : s2.host = r3.host), f2 = $t;
                    continue;
                  case Tt:
                    if (i2 === n || "/" === i2 || "\\" === i2 || "?" === i2 || "#" === i2) {
                      if (!e3 && ht(p2))
                        f2 = $t;
                      else if ("" === p2) {
                        if (s2.host = "", e3)
                          return;
                        f2 = Rt;
                      } else {
                        if (u2 = s2.parseHost(p2))
                          return u2;
                        if ("localhost" === s2.host && (s2.host = ""), e3)
                          return;
                        p2 = "", f2 = Rt;
                      }
                      continue;
                    }
                    p2 += i2;
                    break;
                  case Rt:
                    if (s2.isSpecial()) {
                      if (f2 = $t, "/" !== i2 && "\\" !== i2)
                        continue;
                    } else if (e3 || "?" !== i2) {
                      if (e3 || "#" !== i2) {
                        if (i2 !== n && (f2 = $t, "/" !== i2))
                          continue;
                      } else
                        s2.fragment = "", f2 = At;
                    } else
                      s2.query = "", f2 = Ct;
                    break;
                  case $t:
                    if (i2 === n || "/" === i2 || "\\" === i2 && s2.isSpecial() || !e3 && ("?" === i2 || "#" === i2)) {
                      if (".." === (c2 = G(c2 = p2)) || "%2e." === c2 || ".%2e" === c2 || "%2e%2e" === c2 ? (s2.shortenPath(), "/" === i2 || "\\" === i2 && s2.isSpecial() || B(s2.path, "")) : dt(p2) ? "/" === i2 || "\\" === i2 && s2.isSpecial() || B(s2.path, "") : ("file" === s2.scheme && !s2.path.length && ht(p2) && (s2.host && (s2.host = ""), p2 = $2(p2, 0) + ":"), B(s2.path, p2)), p2 = "", "file" === s2.scheme && (i2 === n || "?" === i2 || "#" === i2))
                        for (; s2.path.length > 1 && "" === s2.path[0]; )
                          U(s2.path);
                      "?" === i2 ? (s2.query = "", f2 = Ct) : "#" === i2 && (s2.fragment = "", f2 = At);
                    } else
                      p2 += lt(i2, st);
                    break;
                  case Nt:
                    "?" === i2 ? (s2.query = "", f2 = Ct) : "#" === i2 ? (s2.fragment = "", f2 = At) : i2 !== n && (s2.path[0] += lt(i2, ut));
                    break;
                  case Ct:
                    e3 || "#" !== i2 ? i2 !== n && ("'" === i2 && s2.isSpecial() ? s2.query += "%27" : s2.query += "#" === i2 ? "%23" : lt(i2, ut)) : (s2.fragment = "", f2 = At);
                    break;
                  case At:
                    i2 !== n && (s2.fragment += lt(i2, ct));
                }
                l2++;
              }
            },
            parseHost: function(t3) {
              var e3, r3, n2;
              if ("[" === $2(t3, 0)) {
                if ("]" !== $2(t3, t3.length - 1))
                  return H;
                if (e3 = function(t4) {
                  var e4, r4, n3, o2, i2, a2, u2, c2 = [0, 0, 0, 0, 0, 0, 0, 0], s2 = 0, f2 = null, l2 = 0, p2 = function() {
                    return $2(t4, l2);
                  };
                  if (":" === p2()) {
                    if (":" !== $2(t4, 1))
                      return;
                    l2 += 2, f2 = ++s2;
                  }
                  for (; p2(); ) {
                    if (8 === s2)
                      return;
                    if (":" !== p2()) {
                      for (e4 = r4 = 0; r4 < 4 && N(tt, p2()); )
                        e4 = 16 * e4 + I(p2(), 16), l2++, r4++;
                      if ("." === p2()) {
                        if (0 === r4)
                          return;
                        if (l2 -= r4, s2 > 6)
                          return;
                        for (n3 = 0; p2(); ) {
                          if (o2 = null, n3 > 0) {
                            if (!("." === p2() && n3 < 4))
                              return;
                            l2++;
                          }
                          if (!N(J, p2()))
                            return;
                          for (; N(J, p2()); ) {
                            if (i2 = I(p2(), 10), null === o2)
                              o2 = i2;
                            else {
                              if (0 === o2)
                                return;
                              o2 = 10 * o2 + i2;
                            }
                            if (o2 > 255)
                              return;
                            l2++;
                          }
                          c2[s2] = 256 * c2[s2] + o2, 2 != ++n3 && 4 !== n3 || s2++;
                        }
                        if (4 !== n3)
                          return;
                        break;
                      }
                      if (":" === p2()) {
                        if (l2++, !p2())
                          return;
                      } else if (p2())
                        return;
                      c2[s2++] = e4;
                    } else {
                      if (null !== f2)
                        return;
                      l2++, f2 = ++s2;
                    }
                  }
                  if (null !== f2)
                    for (a2 = s2 - f2, s2 = 7; 0 !== s2 && a2 > 0; )
                      u2 = c2[s2], c2[s2--] = c2[f2 + a2 - 1], c2[f2 + --a2] = u2;
                  else if (8 !== s2)
                    return;
                  return c2;
                }(D(t3, 1, -1)), !e3)
                  return H;
                this.host = e3;
              } else if (this.isSpecial()) {
                if (t3 = m(t3), N(et, t3))
                  return H;
                if (e3 = function(t4) {
                  var e4, r4, n3, o2, i2, a2, u2, c2 = M(t4, ".");
                  if (c2.length && "" === c2[c2.length - 1] && c2.length--, (e4 = c2.length) > 4)
                    return t4;
                  for (r4 = [], n3 = 0; n3 < e4; n3++) {
                    if ("" === (o2 = c2[n3]))
                      return t4;
                    if (i2 = 10, o2.length > 1 && "0" === $2(o2, 0) && (i2 = N(K, o2) ? 16 : 8, o2 = D(o2, 8 === i2 ? 1 : 2)), "" === o2)
                      a2 = 0;
                    else {
                      if (!N(10 === i2 ? Z : 8 === i2 ? X : tt, o2))
                        return t4;
                      a2 = I(o2, i2);
                    }
                    B(r4, a2);
                  }
                  for (n3 = 0; n3 < e4; n3++)
                    if (a2 = r4[n3], n3 === e4 - 1) {
                      if (a2 >= R(256, 5 - e4))
                        return null;
                    } else if (a2 > 255)
                      return null;
                  for (u2 = W(r4), n3 = 0; n3 < r4.length; n3++)
                    u2 += r4[n3] * R(256, 3 - n3);
                  return u2;
                }(t3), null === e3)
                  return H;
                this.host = e3;
              } else {
                if (N(rt, t3))
                  return H;
                for (e3 = "", r3 = d(t3), n2 = 0; n2 < r3.length; n2++)
                  e3 += lt(r3[n2], ut);
                this.host = e3;
              }
            },
            cannotHaveUsernamePasswordPort: function() {
              return !this.host || this.cannotBeABaseURL || "file" === this.scheme;
            },
            includesCredentials: function() {
              return "" !== this.username || "" !== this.password;
            },
            isSpecial: function() {
              return h(pt, this.scheme);
            },
            shortenPath: function() {
              var t3 = this.path, e3 = t3.length;
              !e3 || "file" === this.scheme && 1 === e3 && ht(t3[0], true) || t3.length--;
            },
            serialize: function() {
              var t3 = this, e3 = t3.scheme, r3 = t3.username, n2 = t3.password, o2 = t3.host, i2 = t3.port, a2 = t3.path, u2 = t3.query, c2 = t3.fragment, s2 = e3 + ":";
              return null !== o2 ? (s2 += "//", t3.includesCredentials() && (s2 += r3 + (n2 ? ":" + n2 : "") + "@"), s2 += at(o2), null !== i2 && (s2 += ":" + i2)) : "file" === e3 && (s2 += "//"), s2 += t3.cannotBeABaseURL ? a2[0] : a2.length ? "/" + C(a2, "/") : "", null !== u2 && (s2 += "?" + u2), null !== c2 && (s2 += "#" + c2), s2;
            },
            setHref: function(t3) {
              var e3 = this.parse(t3);
              if (e3)
                throw new _(e3);
              this.searchParams.update();
            },
            getOrigin: function() {
              var t3 = this.scheme, e3 = this.port;
              if ("blob" === t3)
                try {
                  return new Bt(t3.path[0]).origin;
                } catch (t4) {
                  return "null";
                }
              return "file" !== t3 && this.isSpecial() ? t3 + "://" + at(this.host) + (null !== e3 ? ":" + e3 : "") : "null";
            },
            getProtocol: function() {
              return this.scheme + ":";
            },
            setProtocol: function(t3) {
              this.parse(b(t3) + ":", yt);
            },
            getUsername: function() {
              return this.username;
            },
            setUsername: function(t3) {
              var e3 = d(b(t3));
              if (!this.cannotHaveUsernamePasswordPort()) {
                this.username = "";
                for (var r3 = 0; r3 < e3.length; r3++)
                  this.username += lt(e3[r3], ft);
              }
            },
            getPassword: function() {
              return this.password;
            },
            setPassword: function(t3) {
              var e3 = d(b(t3));
              if (!this.cannotHaveUsernamePasswordPort()) {
                this.password = "";
                for (var r3 = 0; r3 < e3.length; r3++)
                  this.password += lt(e3[r3], ft);
              }
            },
            getHost: function() {
              var t3 = this.host, e3 = this.port;
              return null === t3 ? "" : null === e3 ? at(t3) : at(t3) + ":" + e3;
            },
            setHost: function(t3) {
              this.cannotBeABaseURL || this.parse(t3, Pt);
            },
            getHostname: function() {
              var t3 = this.host;
              return null === t3 ? "" : at(t3);
            },
            setHostname: function(t3) {
              this.cannotBeABaseURL || this.parse(t3, jt);
            },
            getPort: function() {
              var t3 = this.port;
              return null === t3 ? "" : b(t3);
            },
            setPort: function(t3) {
              this.cannotHaveUsernamePasswordPort() || ("" === (t3 = b(t3)) ? this.port = null : this.parse(t3, Lt));
            },
            getPathname: function() {
              var t3 = this.path;
              return this.cannotBeABaseURL ? t3[0] : t3.length ? "/" + C(t3, "/") : "";
            },
            setPathname: function(t3) {
              this.cannotBeABaseURL || (this.path = [], this.parse(t3, Rt));
            },
            getSearch: function() {
              var t3 = this.query;
              return t3 ? "?" + t3 : "";
            },
            setSearch: function(t3) {
              "" === (t3 = b(t3)) ? this.query = null : ("?" === $2(t3, 0) && (t3 = D(t3, 1)), this.query = "", this.parse(t3, Ct)), this.searchParams.update();
            },
            getSearchParams: function() {
              return this.searchParams.facade;
            },
            getHash: function() {
              var t3 = this.fragment;
              return t3 ? "#" + t3 : "";
            },
            setHash: function(t3) {
              "" !== (t3 = b(t3)) ? ("#" === $2(t3, 0) && (t3 = D(t3, 1)), this.fragment = "", this.parse(t3, At)) : this.fragment = null;
            },
            update: function() {
              this.query = this.searchParams.serialize() || null;
            }
          };
          var Bt = function(t3) {
            var e3 = p(this, Ft), r3 = x(arguments.length, 1) > 1 ? arguments[1] : void 0, n2 = E(e3, new Wt(t3, false, r3));
            i || (e3.href = n2.serialize(), e3.origin = n2.getOrigin(), e3.protocol = n2.getProtocol(), e3.username = n2.getUsername(), e3.password = n2.getPassword(), e3.host = n2.getHost(), e3.hostname = n2.getHostname(), e3.port = n2.getPort(), e3.pathname = n2.getPathname(), e3.search = n2.getSearch(), e3.searchParams = n2.getSearchParams(), e3.hash = n2.getHash());
          }, Ft = Bt.prototype, Ut = function(t3, e3) {
            return {
              get: function() {
                return O(this)[t3]();
              },
              set: e3 && function(t4) {
                return O(this)[e3](t4);
              },
              configurable: true,
              enumerable: true
            };
          };
          if (i && (l(Ft, "href", Ut("serialize", "setHref")), l(Ft, "origin", Ut("getOrigin")), l(Ft, "protocol", Ut("getProtocol", "setProtocol")), l(Ft, "username", Ut("getUsername", "setUsername")), l(Ft, "password", Ut("getPassword", "setPassword")), l(Ft, "host", Ut("getHost", "setHost")), l(Ft, "hostname", Ut("getHostname", "setHostname")), l(Ft, "port", Ut("getPort", "setPort")), l(Ft, "pathname", Ut("getPathname", "setPathname")), l(Ft, "search", Ut("getSearch", "setSearch")), l(Ft, "searchParams", Ut("getSearchParams")), l(Ft, "hash", Ut("getHash", "setHash"))), f(Ft, "toJSON", function() {
            return O(this).serialize();
          }, {
            enumerable: true
          }), f(Ft, "toString", function() {
            return O(this).serialize();
          }, {
            enumerable: true
          }), L) {
            var Mt = L.createObjectURL, Dt = L.revokeObjectURL;
            Mt && f(Bt, "createObjectURL", c(Mt, L)), Dt && f(Bt, "revokeObjectURL", c(Dt, L));
          }
          w(Bt, "URL"), o({
            global: true,
            constructor: true,
            forced: !a,
            sham: !i
          }, {
            URL: Bt
          });
        },
        8730: function(t2, e2, r2) {
          r2(9391);
        }
      }, e = {};
      function r(n) {
        var o = e[n];
        if (void 0 !== o)
          return o.exports;
        var i = e[n] = {
          exports: {}
        };
        return t[n].call(i.exports, i, i.exports, r), i.exports;
      }
      r.g = function() {
        if ("object" == typeof globalThis)
          return globalThis;
        try {
          return this || new Function("return this")();
        } catch (t2) {
          if ("object" == typeof window)
            return window;
        }
      }(), function() {
        r(6801), r(3843), r(4338), r(6203), r(4043), r(7267), r(9358), r(691), r(228), r(3964), r(9749), r(6544), r(4254), r(752), r(1694), r(6265), r(8373), r(6793), r(7629), r(7509), r(8052), r(1057), r(560), r(9667), r(7602), r(5), r(7522), r(4284), r(9730), r(9373), r(9903), r(9288), r(8077), r(6237), r(3476), r(1919), r(9474), r(8730), r(9307), r(8858), r(1318), r(3228), r(6585), r(2826), r(7049), r(7409);
        function t2(e3) {
          return t2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
            return typeof t3;
          } : function(t3) {
            return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
          }, t2(e3);
        }
        function e2(t3, e3) {
          for (var r2 = 0; r2 < e3.length; r2++) {
            var o2 = e3[r2];
            o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(t3, n(o2.key), o2);
          }
        }
        function n(e3) {
          var r2 = function(e4, r3) {
            if ("object" !== t2(e4) || null === e4)
              return e4;
            var n2 = e4[Symbol.toPrimitive];
            if (void 0 !== n2) {
              var o2 = n2.call(e4, r3 || "default");
              if ("object" !== t2(o2))
                return o2;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === r3 ? String : Number)(e4);
          }(e3, "string");
          return "symbol" === t2(r2) ? r2 : String(r2);
        }
        var o = function() {
          function t3() {
            var e3, r3, o3;
            !function(t4, e4) {
              if (!(t4 instanceof e4))
                throw new TypeError("Cannot call a class as a function");
            }(this, t3), e3 = this, o3 = "4.0.12", (r3 = n(r3 = "version")) in e3 ? Object.defineProperty(e3, r3, {
              value: o3,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e3[r3] = o3;
          }
          var r2, o2, i2;
          return r2 = t3, (o2 = [{
            key: "isArticle",
            get: function() {
              return window.mw.config.get("wgIsArticle");
            }
          }, {
            key: "currentPageName",
            get: function() {
              return window.mw.config.get("wgPageName").replace(/ /g, "_");
            }
          }, {
            key: "articleId",
            get: function() {
              return window.mw.config.get("wgArticleId");
            }
          }, {
            key: "revisionId",
            get: function() {
              return window.mw.config.get("wgRevisionId");
            }
          }, {
            key: "latestRevisionId",
            get: function() {
              return window.mw.config.get("wgCurRevisionId");
            }
          }, {
            key: "articlePath",
            get: function() {
              return window.mw.config.get("wgArticlePath");
            }
          }, {
            key: "scriptPath",
            get: function() {
              return window.mw.config.get("wgScriptPath");
            }
          }, {
            key: "action",
            get: function() {
              return window.mw.config.get("wgAction");
            }
          }, {
            key: "skin",
            get: function() {
              return window.mw.config.get("skin");
            }
          }, {
            key: "userGroups",
            get: function() {
              return window.mw.config.get("wgUserGroups");
            }
          }, {
            key: "wikiId",
            get: function() {
              return window.mw.config.get("wgWikiID");
            }
          }]) && e2(r2.prototype, o2), i2 && e2(r2, i2), Object.defineProperty(r2, "prototype", {
            writable: false
          }), t3;
        }(), i = new o();
        function a(t3) {
          return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, a(t3);
        }
        function u(t3, e3) {
          return function(t4) {
            if (Array.isArray(t4))
              return t4;
          }(t3) || function(t4, e4) {
            var r2 = null == t4 ? null : "undefined" != typeof Symbol && t4[Symbol.iterator] || t4["@@iterator"];
            if (null != r2) {
              var n2, o2, i2, a2, u2 = [], c2 = true, s2 = false;
              try {
                if (i2 = (r2 = r2.call(t4)).next, 0 === e4) {
                  if (Object(r2) !== r2)
                    return;
                  c2 = false;
                } else
                  for (; !(c2 = (n2 = i2.call(r2)).done) && (u2.push(n2.value), u2.length !== e4); c2 = true)
                    ;
              } catch (t5) {
                s2 = true, o2 = t5;
              } finally {
                try {
                  if (!c2 && null != r2.return && (a2 = r2.return(), Object(a2) !== a2))
                    return;
                } finally {
                  if (s2)
                    throw o2;
                }
              }
              return u2;
            }
          }(t3, e3) || function(t4, e4) {
            if (!t4)
              return;
            if ("string" == typeof t4)
              return c(t4, e4);
            var r2 = Object.prototype.toString.call(t4).slice(8, -1);
            "Object" === r2 && t4.constructor && (r2 = t4.constructor.name);
            if ("Map" === r2 || "Set" === r2)
              return Array.from(t4);
            if ("Arguments" === r2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r2))
              return c(t4, e4);
          }(t3, e3) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function c(t3, e3) {
          (null == e3 || e3 > t3.length) && (e3 = t3.length);
          for (var r2 = 0, n2 = new Array(e3); r2 < e3; r2++)
            n2[r2] = t3[r2];
          return n2;
        }
        function s() {
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
          s = function() {
            return e3;
          };
          var t3, e3 = {}, r2 = Object.prototype, n2 = r2.hasOwnProperty, o2 = Object.defineProperty || function(t4, e4, r3) {
            t4[e4] = r3.value;
          }, i2 = "function" == typeof Symbol ? Symbol : {}, u2 = i2.iterator || "@@iterator", c2 = i2.asyncIterator || "@@asyncIterator", f2 = i2.toStringTag || "@@toStringTag";
          function l2(t4, e4, r3) {
            return Object.defineProperty(t4, e4, {
              value: r3,
              enumerable: true,
              configurable: true,
              writable: true
            }), t4[e4];
          }
          try {
            l2({}, "");
          } catch (t4) {
            l2 = function(t5, e4, r3) {
              return t5[e4] = r3;
            };
          }
          function p2(t4, e4, r3, n3) {
            var i3 = e4 && e4.prototype instanceof b2 ? e4 : b2, a2 = Object.create(i3.prototype), u3 = new R2(n3 || []);
            return o2(a2, "_invoke", {
              value: L2(t4, r3, u3)
            }), a2;
          }
          function h2(t4, e4, r3) {
            try {
              return {
                type: "normal",
                arg: t4.call(e4, r3)
              };
            } catch (t5) {
              return {
                type: "throw",
                arg: t5
              };
            }
          }
          e3.wrap = p2;
          var v2 = "suspendedStart", d2 = "suspendedYield", y2 = "executing", g2 = "completed", m2 = {};
          function b2() {
          }
          function w2() {
          }
          function x2() {
          }
          var k2 = {};
          l2(k2, u2, function() {
            return this;
          });
          var S2 = Object.getPrototypeOf, E2 = S2 && S2(S2($2([])));
          E2 && E2 !== r2 && n2.call(E2, u2) && (k2 = E2);
          var O2 = x2.prototype = b2.prototype = Object.create(k2);
          function P2(t4) {
            ["next", "throw", "return"].forEach(function(e4) {
              l2(t4, e4, function(t5) {
                return this._invoke(e4, t5);
              });
            });
          }
          function j2(t4, e4) {
            function r3(o3, i4, u3, c3) {
              var s2 = h2(t4[o3], t4, i4);
              if ("throw" !== s2.type) {
                var f3 = s2.arg, l3 = f3.value;
                return l3 && "object" == a(l3) && n2.call(l3, "__await") ? e4.resolve(l3.__await).then(function(t5) {
                  r3("next", t5, u3, c3);
                }, function(t5) {
                  r3("throw", t5, u3, c3);
                }) : e4.resolve(l3).then(function(t5) {
                  f3.value = t5, u3(f3);
                }, function(t5) {
                  return r3("throw", t5, u3, c3);
                });
              }
              c3(s2.arg);
            }
            var i3;
            o2(this, "_invoke", {
              value: function(t5, n3) {
                function o3() {
                  return new e4(function(e5, o4) {
                    r3(t5, n3, e5, o4);
                  });
                }
                return i3 = i3 ? i3.then(o3, o3) : o3();
              }
            });
          }
          function L2(e4, r3, n3) {
            var o3 = v2;
            return function(i3, a2) {
              if (o3 === y2)
                throw new Error("Generator is already running");
              if (o3 === g2) {
                if ("throw" === i3)
                  throw a2;
                return {
                  value: t3,
                  done: true
                };
              }
              for (n3.method = i3, n3.arg = a2; ; ) {
                var u3 = n3.delegate;
                if (u3) {
                  var c3 = _2(u3, n3);
                  if (c3) {
                    if (c3 === m2)
                      continue;
                    return c3;
                  }
                }
                if ("next" === n3.method)
                  n3.sent = n3._sent = n3.arg;
                else if ("throw" === n3.method) {
                  if (o3 === v2)
                    throw o3 = g2, n3.arg;
                  n3.dispatchException(n3.arg);
                } else
                  "return" === n3.method && n3.abrupt("return", n3.arg);
                o3 = y2;
                var s2 = h2(e4, r3, n3);
                if ("normal" === s2.type) {
                  if (o3 = n3.done ? g2 : d2, s2.arg === m2)
                    continue;
                  return {
                    value: s2.arg,
                    done: n3.done
                  };
                }
                "throw" === s2.type && (o3 = g2, n3.method = "throw", n3.arg = s2.arg);
              }
            };
          }
          function _2(e4, r3) {
            var n3 = r3.method, o3 = e4.iterator[n3];
            if (o3 === t3)
              return r3.delegate = null, "throw" === n3 && e4.iterator.return && (r3.method = "return", r3.arg = t3, _2(e4, r3), "throw" === r3.method) || "return" !== n3 && (r3.method = "throw", r3.arg = new TypeError("The iterator does not provide a '" + n3 + "' method")), m2;
            var i3 = h2(o3, e4.iterator, r3.arg);
            if ("throw" === i3.type)
              return r3.method = "throw", r3.arg = i3.arg, r3.delegate = null, m2;
            var a2 = i3.arg;
            return a2 ? a2.done ? (r3[e4.resultName] = a2.value, r3.next = e4.nextLoc, "return" !== r3.method && (r3.method = "next", r3.arg = t3), r3.delegate = null, m2) : a2 : (r3.method = "throw", r3.arg = new TypeError("iterator result is not an object"), r3.delegate = null, m2);
          }
          function I2(t4) {
            var e4 = {
              tryLoc: t4[0]
            };
            1 in t4 && (e4.catchLoc = t4[1]), 2 in t4 && (e4.finallyLoc = t4[2], e4.afterLoc = t4[3]), this.tryEntries.push(e4);
          }
          function T2(t4) {
            var e4 = t4.completion || {};
            e4.type = "normal", delete e4.arg, t4.completion = e4;
          }
          function R2(t4) {
            this.tryEntries = [{
              tryLoc: "root"
            }], t4.forEach(I2, this), this.reset(true);
          }
          function $2(e4) {
            if (e4 || "" === e4) {
              var r3 = e4[u2];
              if (r3)
                return r3.call(e4);
              if ("function" == typeof e4.next)
                return e4;
              if (!isNaN(e4.length)) {
                var o3 = -1, i3 = function r4() {
                  for (; ++o3 < e4.length; )
                    if (n2.call(e4, o3))
                      return r4.value = e4[o3], r4.done = false, r4;
                  return r4.value = t3, r4.done = true, r4;
                };
                return i3.next = i3;
              }
            }
            throw new TypeError(a(e4) + " is not iterable");
          }
          return w2.prototype = x2, o2(O2, "constructor", {
            value: x2,
            configurable: true
          }), o2(x2, "constructor", {
            value: w2,
            configurable: true
          }), w2.displayName = l2(x2, f2, "GeneratorFunction"), e3.isGeneratorFunction = function(t4) {
            var e4 = "function" == typeof t4 && t4.constructor;
            return !!e4 && (e4 === w2 || "GeneratorFunction" === (e4.displayName || e4.name));
          }, e3.mark = function(t4) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t4, x2) : (t4.__proto__ = x2, l2(t4, f2, "GeneratorFunction")), t4.prototype = Object.create(O2), t4;
          }, e3.awrap = function(t4) {
            return {
              __await: t4
            };
          }, P2(j2.prototype), l2(j2.prototype, c2, function() {
            return this;
          }), e3.AsyncIterator = j2, e3.async = function(t4, r3, n3, o3, i3) {
            void 0 === i3 && (i3 = Promise);
            var a2 = new j2(p2(t4, r3, n3, o3), i3);
            return e3.isGeneratorFunction(r3) ? a2 : a2.next().then(function(t5) {
              return t5.done ? t5.value : a2.next();
            });
          }, P2(O2), l2(O2, f2, "Generator"), l2(O2, u2, function() {
            return this;
          }), l2(O2, "toString", function() {
            return "[object Generator]";
          }), e3.keys = function(t4) {
            var e4 = Object(t4), r3 = [];
            for (var n3 in e4)
              r3.push(n3);
            return r3.reverse(), function t5() {
              for (; r3.length; ) {
                var n4 = r3.pop();
                if (n4 in e4)
                  return t5.value = n4, t5.done = false, t5;
              }
              return t5.done = true, t5;
            };
          }, e3.values = $2, R2.prototype = {
            constructor: R2,
            reset: function(e4) {
              if (this.prev = 0, this.next = 0, this.sent = this._sent = t3, this.done = false, this.delegate = null, this.method = "next", this.arg = t3, this.tryEntries.forEach(T2), !e4)
                for (var r3 in this)
                  "t" === r3.charAt(0) && n2.call(this, r3) && !isNaN(+r3.slice(1)) && (this[r3] = t3);
            },
            stop: function() {
              this.done = true;
              var t4 = this.tryEntries[0].completion;
              if ("throw" === t4.type)
                throw t4.arg;
              return this.rval;
            },
            dispatchException: function(e4) {
              if (this.done)
                throw e4;
              var r3 = this;
              function o3(n3, o4) {
                return u3.type = "throw", u3.arg = e4, r3.next = n3, o4 && (r3.method = "next", r3.arg = t3), !!o4;
              }
              for (var i3 = this.tryEntries.length - 1; i3 >= 0; --i3) {
                var a2 = this.tryEntries[i3], u3 = a2.completion;
                if ("root" === a2.tryLoc)
                  return o3("end");
                if (a2.tryLoc <= this.prev) {
                  var c3 = n2.call(a2, "catchLoc"), s2 = n2.call(a2, "finallyLoc");
                  if (c3 && s2) {
                    if (this.prev < a2.catchLoc)
                      return o3(a2.catchLoc, true);
                    if (this.prev < a2.finallyLoc)
                      return o3(a2.finallyLoc);
                  } else if (c3) {
                    if (this.prev < a2.catchLoc)
                      return o3(a2.catchLoc, true);
                  } else {
                    if (!s2)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a2.finallyLoc)
                      return o3(a2.finallyLoc);
                  }
                }
              }
            },
            abrupt: function(t4, e4) {
              for (var r3 = this.tryEntries.length - 1; r3 >= 0; --r3) {
                var o3 = this.tryEntries[r3];
                if (o3.tryLoc <= this.prev && n2.call(o3, "finallyLoc") && this.prev < o3.finallyLoc) {
                  var i3 = o3;
                  break;
                }
              }
              i3 && ("break" === t4 || "continue" === t4) && i3.tryLoc <= e4 && e4 <= i3.finallyLoc && (i3 = null);
              var a2 = i3 ? i3.completion : {};
              return a2.type = t4, a2.arg = e4, i3 ? (this.method = "next", this.next = i3.finallyLoc, m2) : this.complete(a2);
            },
            complete: function(t4, e4) {
              if ("throw" === t4.type)
                throw t4.arg;
              return "break" === t4.type || "continue" === t4.type ? this.next = t4.arg : "return" === t4.type ? (this.rval = this.arg = t4.arg, this.method = "return", this.next = "end") : "normal" === t4.type && e4 && (this.next = e4), m2;
            },
            finish: function(t4) {
              for (var e4 = this.tryEntries.length - 1; e4 >= 0; --e4) {
                var r3 = this.tryEntries[e4];
                if (r3.finallyLoc === t4)
                  return this.complete(r3.completion, r3.afterLoc), T2(r3), m2;
              }
            },
            catch: function(t4) {
              for (var e4 = this.tryEntries.length - 1; e4 >= 0; --e4) {
                var r3 = this.tryEntries[e4];
                if (r3.tryLoc === t4) {
                  var n3 = r3.completion;
                  if ("throw" === n3.type) {
                    var o3 = n3.arg;
                    T2(r3);
                  }
                  return o3;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function(e4, r3, n3) {
              return this.delegate = {
                iterator: $2(e4),
                resultName: r3,
                nextLoc: n3
              }, "next" === this.method && (this.arg = t3), m2;
            }
          }, e3;
        }
        function f(t3, e3, r2, n2, o2, i2, a2) {
          try {
            var u2 = t3[i2](a2), c2 = u2.value;
          } catch (t4) {
            return void r2(t4);
          }
          u2.done ? e3(c2) : Promise.resolve(c2).then(n2, o2);
        }
        function l(t3) {
          return function() {
            var e3 = this, r2 = arguments;
            return new Promise(function(n2, o2) {
              var i2 = t3.apply(e3, r2);
              function a2(t4) {
                f(i2, n2, o2, a2, u2, "next", t4);
              }
              function u2(t4) {
                f(i2, n2, o2, a2, u2, "throw", t4);
              }
              a2(void 0);
            });
          };
        }
        function p(t3, e3) {
          for (var r2 = 0; r2 < e3.length; r2++) {
            var n2 = e3[r2];
            n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, h(n2.key), n2);
          }
        }
        function h(t3) {
          var e3 = function(t4, e4) {
            if ("object" !== a(t4) || null === t4)
              return t4;
            var r2 = t4[Symbol.toPrimitive];
            if (void 0 !== r2) {
              var n2 = r2.call(t4, e4 || "default");
              if ("object" !== a(n2))
                return n2;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === e4 ? String : Number)(t4);
          }(t3, "string");
          return "symbol" === a(e3) ? e3 : String(e3);
        }
        var v, d, y, g = function() {
          function t3() {
            !function(t4, e4) {
              if (!(t4 instanceof e4))
                throw new TypeError("Cannot call a class as a function");
            }(this, t3);
          }
          var e3, r2, n2, o2, a2;
          return e3 = t3, r2 = null, n2 = [{
            key: "get",
            value: (a2 = l(s().mark(function e4(r3) {
              var n3, o3;
              return s().wrap(function(e5) {
                for (; ; )
                  switch (e5.prev = e5.next) {
                    case 0:
                      return n3 = new URL(t3.base), Object.keys(r3).forEach(function(t4) {
                        n3.searchParams.append(t4, r3[t4]);
                      }), e5.next = 4, fetch(n3, {
                        credentials: "same-origin",
                        headers: {
                          "Api-User-Agent": "Wikiplus/".concat(i.version, " (").concat(i.wikiId, ")")
                        }
                      });
                    case 4:
                      return o3 = e5.sent, e5.next = 7, o3.json();
                    case 7:
                      return e5.abrupt("return", e5.sent);
                    case 8:
                    case "end":
                      return e5.stop();
                  }
              }, e4);
            })), function(t4) {
              return a2.apply(this, arguments);
            })
          }, {
            key: "post",
            value: (o2 = l(s().mark(function e4(r3) {
              var n3, o3, a3;
              return s().wrap(function(e5) {
                for (; ; )
                  switch (e5.prev = e5.next) {
                    case 0:
                      return n3 = new URL(t3.base), o3 = new FormData(), Object.entries(r3).forEach(function(t4) {
                        var e6 = u(t4, 2), r4 = e6[0], n4 = e6[1];
                        o3.append(r4, n4);
                      }), e5.next = 5, fetch(n3, {
                        method: "POST",
                        body: o3,
                        credentials: "same-origin",
                        headers: {
                          "Api-User-Agent": "Wikiplus/".concat(i.version, " (").concat(i.wikiId, ")")
                        }
                      });
                    case 5:
                      return a3 = e5.sent, e5.next = 8, a3.json();
                    case 8:
                      return e5.abrupt("return", e5.sent);
                    case 9:
                    case "end":
                      return e5.stop();
                  }
              }, e4);
            })), function(t4) {
              return o2.apply(this, arguments);
            })
          }], r2 && p(e3.prototype, r2), n2 && p(e3, n2), Object.defineProperty(e3, "prototype", {
            writable: false
          }), t3;
        }();
        v = g, d = "base", y = "".concat(location.protocol, "//").concat(location.host).concat(i.scriptPath, "/api.php"), (d = h(d)) in v ? Object.defineProperty(v, d, {
          value: y,
          enumerable: true,
          configurable: true,
          writable: true
        }) : v[d] = y;
        var m = g;
        r(2003), r(8518), r(3440), r(6034), r(50), r(6646), r(7444), r(7968), r(747), r(1099), r(6320), r(876), r(6791), r(19), r(2343), r(1096), r(4314), r(3346), r(4984), r(4078), r(8324);
        function b(t3) {
          return b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, b(t3);
        }
        function w() {
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
          w = function() {
            return e3;
          };
          var t3, e3 = {}, r2 = Object.prototype, n2 = r2.hasOwnProperty, o2 = Object.defineProperty || function(t4, e4, r3) {
            t4[e4] = r3.value;
          }, i2 = "function" == typeof Symbol ? Symbol : {}, a2 = i2.iterator || "@@iterator", u2 = i2.asyncIterator || "@@asyncIterator", c2 = i2.toStringTag || "@@toStringTag";
          function s2(t4, e4, r3) {
            return Object.defineProperty(t4, e4, {
              value: r3,
              enumerable: true,
              configurable: true,
              writable: true
            }), t4[e4];
          }
          try {
            s2({}, "");
          } catch (t4) {
            s2 = function(t5, e4, r3) {
              return t5[e4] = r3;
            };
          }
          function f2(t4, e4, r3, n3) {
            var i3 = e4 && e4.prototype instanceof g2 ? e4 : g2, a3 = Object.create(i3.prototype), u3 = new R2(n3 || []);
            return o2(a3, "_invoke", {
              value: L2(t4, r3, u3)
            }), a3;
          }
          function l2(t4, e4, r3) {
            try {
              return {
                type: "normal",
                arg: t4.call(e4, r3)
              };
            } catch (t5) {
              return {
                type: "throw",
                arg: t5
              };
            }
          }
          e3.wrap = f2;
          var p2 = "suspendedStart", h2 = "suspendedYield", v2 = "executing", d2 = "completed", y2 = {};
          function g2() {
          }
          function m2() {
          }
          function x2() {
          }
          var k2 = {};
          s2(k2, a2, function() {
            return this;
          });
          var S2 = Object.getPrototypeOf, E2 = S2 && S2(S2($2([])));
          E2 && E2 !== r2 && n2.call(E2, a2) && (k2 = E2);
          var O2 = x2.prototype = g2.prototype = Object.create(k2);
          function P2(t4) {
            ["next", "throw", "return"].forEach(function(e4) {
              s2(t4, e4, function(t5) {
                return this._invoke(e4, t5);
              });
            });
          }
          function j2(t4, e4) {
            function r3(o3, i4, a3, u3) {
              var c3 = l2(t4[o3], t4, i4);
              if ("throw" !== c3.type) {
                var s3 = c3.arg, f3 = s3.value;
                return f3 && "object" == b(f3) && n2.call(f3, "__await") ? e4.resolve(f3.__await).then(function(t5) {
                  r3("next", t5, a3, u3);
                }, function(t5) {
                  r3("throw", t5, a3, u3);
                }) : e4.resolve(f3).then(function(t5) {
                  s3.value = t5, a3(s3);
                }, function(t5) {
                  return r3("throw", t5, a3, u3);
                });
              }
              u3(c3.arg);
            }
            var i3;
            o2(this, "_invoke", {
              value: function(t5, n3) {
                function o3() {
                  return new e4(function(e5, o4) {
                    r3(t5, n3, e5, o4);
                  });
                }
                return i3 = i3 ? i3.then(o3, o3) : o3();
              }
            });
          }
          function L2(e4, r3, n3) {
            var o3 = p2;
            return function(i3, a3) {
              if (o3 === v2)
                throw new Error("Generator is already running");
              if (o3 === d2) {
                if ("throw" === i3)
                  throw a3;
                return {
                  value: t3,
                  done: true
                };
              }
              for (n3.method = i3, n3.arg = a3; ; ) {
                var u3 = n3.delegate;
                if (u3) {
                  var c3 = _2(u3, n3);
                  if (c3) {
                    if (c3 === y2)
                      continue;
                    return c3;
                  }
                }
                if ("next" === n3.method)
                  n3.sent = n3._sent = n3.arg;
                else if ("throw" === n3.method) {
                  if (o3 === p2)
                    throw o3 = d2, n3.arg;
                  n3.dispatchException(n3.arg);
                } else
                  "return" === n3.method && n3.abrupt("return", n3.arg);
                o3 = v2;
                var s3 = l2(e4, r3, n3);
                if ("normal" === s3.type) {
                  if (o3 = n3.done ? d2 : h2, s3.arg === y2)
                    continue;
                  return {
                    value: s3.arg,
                    done: n3.done
                  };
                }
                "throw" === s3.type && (o3 = d2, n3.method = "throw", n3.arg = s3.arg);
              }
            };
          }
          function _2(e4, r3) {
            var n3 = r3.method, o3 = e4.iterator[n3];
            if (o3 === t3)
              return r3.delegate = null, "throw" === n3 && e4.iterator.return && (r3.method = "return", r3.arg = t3, _2(e4, r3), "throw" === r3.method) || "return" !== n3 && (r3.method = "throw", r3.arg = new TypeError("The iterator does not provide a '" + n3 + "' method")), y2;
            var i3 = l2(o3, e4.iterator, r3.arg);
            if ("throw" === i3.type)
              return r3.method = "throw", r3.arg = i3.arg, r3.delegate = null, y2;
            var a3 = i3.arg;
            return a3 ? a3.done ? (r3[e4.resultName] = a3.value, r3.next = e4.nextLoc, "return" !== r3.method && (r3.method = "next", r3.arg = t3), r3.delegate = null, y2) : a3 : (r3.method = "throw", r3.arg = new TypeError("iterator result is not an object"), r3.delegate = null, y2);
          }
          function I2(t4) {
            var e4 = {
              tryLoc: t4[0]
            };
            1 in t4 && (e4.catchLoc = t4[1]), 2 in t4 && (e4.finallyLoc = t4[2], e4.afterLoc = t4[3]), this.tryEntries.push(e4);
          }
          function T2(t4) {
            var e4 = t4.completion || {};
            e4.type = "normal", delete e4.arg, t4.completion = e4;
          }
          function R2(t4) {
            this.tryEntries = [{
              tryLoc: "root"
            }], t4.forEach(I2, this), this.reset(true);
          }
          function $2(e4) {
            if (e4 || "" === e4) {
              var r3 = e4[a2];
              if (r3)
                return r3.call(e4);
              if ("function" == typeof e4.next)
                return e4;
              if (!isNaN(e4.length)) {
                var o3 = -1, i3 = function r4() {
                  for (; ++o3 < e4.length; )
                    if (n2.call(e4, o3))
                      return r4.value = e4[o3], r4.done = false, r4;
                  return r4.value = t3, r4.done = true, r4;
                };
                return i3.next = i3;
              }
            }
            throw new TypeError(b(e4) + " is not iterable");
          }
          return m2.prototype = x2, o2(O2, "constructor", {
            value: x2,
            configurable: true
          }), o2(x2, "constructor", {
            value: m2,
            configurable: true
          }), m2.displayName = s2(x2, c2, "GeneratorFunction"), e3.isGeneratorFunction = function(t4) {
            var e4 = "function" == typeof t4 && t4.constructor;
            return !!e4 && (e4 === m2 || "GeneratorFunction" === (e4.displayName || e4.name));
          }, e3.mark = function(t4) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t4, x2) : (t4.__proto__ = x2, s2(t4, c2, "GeneratorFunction")), t4.prototype = Object.create(O2), t4;
          }, e3.awrap = function(t4) {
            return {
              __await: t4
            };
          }, P2(j2.prototype), s2(j2.prototype, u2, function() {
            return this;
          }), e3.AsyncIterator = j2, e3.async = function(t4, r3, n3, o3, i3) {
            void 0 === i3 && (i3 = Promise);
            var a3 = new j2(f2(t4, r3, n3, o3), i3);
            return e3.isGeneratorFunction(r3) ? a3 : a3.next().then(function(t5) {
              return t5.done ? t5.value : a3.next();
            });
          }, P2(O2), s2(O2, c2, "Generator"), s2(O2, a2, function() {
            return this;
          }), s2(O2, "toString", function() {
            return "[object Generator]";
          }), e3.keys = function(t4) {
            var e4 = Object(t4), r3 = [];
            for (var n3 in e4)
              r3.push(n3);
            return r3.reverse(), function t5() {
              for (; r3.length; ) {
                var n4 = r3.pop();
                if (n4 in e4)
                  return t5.value = n4, t5.done = false, t5;
              }
              return t5.done = true, t5;
            };
          }, e3.values = $2, R2.prototype = {
            constructor: R2,
            reset: function(e4) {
              if (this.prev = 0, this.next = 0, this.sent = this._sent = t3, this.done = false, this.delegate = null, this.method = "next", this.arg = t3, this.tryEntries.forEach(T2), !e4)
                for (var r3 in this)
                  "t" === r3.charAt(0) && n2.call(this, r3) && !isNaN(+r3.slice(1)) && (this[r3] = t3);
            },
            stop: function() {
              this.done = true;
              var t4 = this.tryEntries[0].completion;
              if ("throw" === t4.type)
                throw t4.arg;
              return this.rval;
            },
            dispatchException: function(e4) {
              if (this.done)
                throw e4;
              var r3 = this;
              function o3(n3, o4) {
                return u3.type = "throw", u3.arg = e4, r3.next = n3, o4 && (r3.method = "next", r3.arg = t3), !!o4;
              }
              for (var i3 = this.tryEntries.length - 1; i3 >= 0; --i3) {
                var a3 = this.tryEntries[i3], u3 = a3.completion;
                if ("root" === a3.tryLoc)
                  return o3("end");
                if (a3.tryLoc <= this.prev) {
                  var c3 = n2.call(a3, "catchLoc"), s3 = n2.call(a3, "finallyLoc");
                  if (c3 && s3) {
                    if (this.prev < a3.catchLoc)
                      return o3(a3.catchLoc, true);
                    if (this.prev < a3.finallyLoc)
                      return o3(a3.finallyLoc);
                  } else if (c3) {
                    if (this.prev < a3.catchLoc)
                      return o3(a3.catchLoc, true);
                  } else {
                    if (!s3)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a3.finallyLoc)
                      return o3(a3.finallyLoc);
                  }
                }
              }
            },
            abrupt: function(t4, e4) {
              for (var r3 = this.tryEntries.length - 1; r3 >= 0; --r3) {
                var o3 = this.tryEntries[r3];
                if (o3.tryLoc <= this.prev && n2.call(o3, "finallyLoc") && this.prev < o3.finallyLoc) {
                  var i3 = o3;
                  break;
                }
              }
              i3 && ("break" === t4 || "continue" === t4) && i3.tryLoc <= e4 && e4 <= i3.finallyLoc && (i3 = null);
              var a3 = i3 ? i3.completion : {};
              return a3.type = t4, a3.arg = e4, i3 ? (this.method = "next", this.next = i3.finallyLoc, y2) : this.complete(a3);
            },
            complete: function(t4, e4) {
              if ("throw" === t4.type)
                throw t4.arg;
              return "break" === t4.type || "continue" === t4.type ? this.next = t4.arg : "return" === t4.type ? (this.rval = this.arg = t4.arg, this.method = "return", this.next = "end") : "normal" === t4.type && e4 && (this.next = e4), y2;
            },
            finish: function(t4) {
              for (var e4 = this.tryEntries.length - 1; e4 >= 0; --e4) {
                var r3 = this.tryEntries[e4];
                if (r3.finallyLoc === t4)
                  return this.complete(r3.completion, r3.afterLoc), T2(r3), y2;
              }
            },
            catch: function(t4) {
              for (var e4 = this.tryEntries.length - 1; e4 >= 0; --e4) {
                var r3 = this.tryEntries[e4];
                if (r3.tryLoc === t4) {
                  var n3 = r3.completion;
                  if ("throw" === n3.type) {
                    var o3 = n3.arg;
                    T2(r3);
                  }
                  return o3;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function(e4, r3, n3) {
              return this.delegate = {
                iterator: $2(e4),
                resultName: r3,
                nextLoc: n3
              }, "next" === this.method && (this.arg = t3), y2;
            }
          }, e3;
        }
        function x(t3, e3, r2, n2, o2, i2, a2) {
          try {
            var u2 = t3[i2](a2), c2 = u2.value;
          } catch (t4) {
            return void r2(t4);
          }
          u2.done ? e3(c2) : Promise.resolve(c2).then(n2, o2);
        }
        function k(t3, e3) {
          for (var r2 = 0; r2 < e3.length; r2++) {
            var n2 = e3[r2];
            n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, E(n2.key), n2);
          }
        }
        function S(t3, e3, r2) {
          return (e3 = E(e3)) in t3 ? Object.defineProperty(t3, e3, {
            value: r2,
            enumerable: true,
            configurable: true,
            writable: true
          }) : t3[e3] = r2, t3;
        }
        function E(t3) {
          var e3 = function(t4, e4) {
            if ("object" !== b(t4) || null === t4)
              return t4;
            var r2 = t4[Symbol.toPrimitive];
            if (void 0 !== r2) {
              var n2 = r2.call(t4, e4 || "default");
              if ("object" !== b(n2))
                return n2;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === e4 ? String : Number)(t4);
          }(t3, "string");
          return "symbol" === b(e3) ? e3 : String(e3);
        }
        var O = function() {
          function t3() {
            var e4;
            !function(t4, e5) {
              if (!(t4 instanceof e5))
                throw new TypeError("Cannot call a class as a function");
            }(this, t3), S(this, "language", void 0), S(this, "i18nData", {}), S(this, "sessionUpdateLog", []);
            try {
              e4 = JSON.parse(localStorage.Wikiplus_Settings).language || navigator.language.toLowerCase();
            } catch (t4) {
              e4 = (navigator.language || navigator.browserLanguage).replace(/han[st]-?/i, "").toLowerCase();
            }
            this.language = e4;
            try {
              for (var r3 = JSON.parse(localStorage.getItem("Wikiplus_i18nCache")), n3 = 0, o3 = Object.keys(r3); n3 < o3.length; n3++) {
                var i3 = o3[n3];
                this.i18nData[i3] = r3[i3];
              }
            } catch (t4) {
              localStorage.setItem("Wikiplus_i18nCache", "{}");
            }
          }
          var e3, r2, n2, o2, i2;
          return e3 = t3, r2 = [{
            key: "translate",
            value: function(t4) {
              var e4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], r3 = "";
              return this.language in this.i18nData ? t4 in this.i18nData[this.language] ? r3 = this.i18nData[this.language][t4] : (this.loadLanguage(this.language), r3 = t4 in this.i18nData["en-us"] ? this.i18nData["en-us"][t4] : t4) : this.loadLanguage(this.language), e4.length > 0 && e4.forEach(function(t5, e5) {
                r3 = r3.replace("$".concat(e5 + 1), t5);
              }), r3;
            }
          }, {
            key: "loadLanguage",
            value: (o2 = w().mark(function t4(e4) {
              var r3, n3;
              return w().wrap(function(t5) {
                for (; ; )
                  switch (t5.prev = t5.next) {
                    case 0:
                      if (!this.sessionUpdateLog.includes(e4)) {
                        t5.next = 2;
                        break;
                      }
                      return t5.abrupt("return");
                    case 2:
                      return t5.prev = 2, t5.next = 5, fetch("https://gitcdn.qiuwen.net.cn/InterfaceAdmin/Wikiplus/raw/branch/dev/languages/".concat(e4, ".json"));
                    case 5:
                      return t5.next = 7, t5.sent.json();
                    case 7:
                      r3 = t5.sent, n3 = localStorage.getItem("Wikiplus_LanguageVersion") || "000", this.sessionUpdateLog.push(e4), r3.__version === n3 && e4 in this.i18nData || (console.info("Update ".concat(e4, " support to version ").concat(r3.__version)), this.i18nData[e4] = r3, localStorage.setItem("Wikiplus_i18nCache", JSON.stringify(this.i18nData))), t5.next = 15;
                      break;
                    case 13:
                      t5.prev = 13, t5.t0 = t5.catch(2);
                    case 15:
                    case "end":
                      return t5.stop();
                  }
              }, t4, this, [[2, 13]]);
            }), i2 = function() {
              var t4 = this, e4 = arguments;
              return new Promise(function(r3, n3) {
                var i3 = o2.apply(t4, e4);
                function a2(t5) {
                  x(i3, r3, n3, a2, u2, "next", t5);
                }
                function u2(t5) {
                  x(i3, r3, n3, a2, u2, "throw", t5);
                }
                a2(void 0);
              });
            }, function(t4) {
              return i2.apply(this, arguments);
            })
          }], r2 && k(e3.prototype, r2), n2 && k(e3, n2), Object.defineProperty(e3, "prototype", {
            writable: false
          }), t3;
        }(), P = new O();
        function j(t3) {
          return j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, j(t3);
        }
        function L(t3, e3) {
          for (var r2 = 0; r2 < e3.length; r2++) {
            var n2 = e3[r2];
            n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, I(n2.key), n2);
          }
        }
        function _(t3, e3, r2) {
          return e3 && L(t3.prototype, e3), r2 && L(t3, r2), Object.defineProperty(t3, "prototype", {
            writable: false
          }), t3;
        }
        function I(t3) {
          var e3 = function(t4, e4) {
            if ("object" !== j(t4) || null === t4)
              return t4;
            var r2 = t4[Symbol.toPrimitive];
            if (void 0 !== r2) {
              var n2 = r2.call(t4, e4 || "default");
              if ("object" !== j(n2))
                return n2;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === e4 ? String : Number)(t4);
          }(t3, "string");
          return "symbol" === j(e3) ? e3 : String(e3);
        }
        function T(t3, e3) {
          if (!(t3 instanceof e3))
            throw new TypeError("Cannot call a class as a function");
        }
        function R(t3) {
          var e3 = A();
          return function() {
            var r2, n2 = B(t3);
            if (e3) {
              var o2 = B(this).constructor;
              r2 = Reflect.construct(n2, arguments, o2);
            } else
              r2 = n2.apply(this, arguments);
            return function(t4, e4) {
              if (e4 && ("object" === j(e4) || "function" == typeof e4))
                return e4;
              if (void 0 !== e4)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(t5) {
                if (void 0 === t5)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t5;
              }(t4);
            }(this, r2);
          };
        }
        function N(t3) {
          var e3 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
          return N = function(t4) {
            if (null === t4 || !function(t5) {
              try {
                return -1 !== Function.toString.call(t5).indexOf("[native code]");
              } catch (e4) {
                return "function" == typeof t5;
              }
            }(t4))
              return t4;
            if ("function" != typeof t4)
              throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== e3) {
              if (e3.has(t4))
                return e3.get(t4);
              e3.set(t4, r2);
            }
            function r2() {
              return C(t4, arguments, B(this).constructor);
            }
            return r2.prototype = Object.create(t4.prototype, {
              constructor: {
                value: r2,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }), W(r2, t4);
          }, N(t3);
        }
        function C(t3, e3, r2) {
          return C = A() ? Reflect.construct.bind() : function(t4, e4, r3) {
            var n2 = [null];
            n2.push.apply(n2, e4);
            var o2 = new (Function.bind.apply(t4, n2))();
            return r3 && W(o2, r3.prototype), o2;
          }, C.apply(null, arguments);
        }
        function A() {
          if ("undefined" == typeof Reflect || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if ("function" == typeof Proxy)
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t3) {
            return false;
          }
        }
        function W(t3, e3) {
          return W = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
            return t4.__proto__ = e4, t4;
          }, W(t3, e3);
        }
        function B(t3) {
          return B = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
            return t4.__proto__ || Object.getPrototypeOf(t4);
          }, B(t3);
        }
        var F = function(t3) {
          !function(t4, e4) {
            if ("function" != typeof e4 && null !== e4)
              throw new TypeError("Super expression must either be null or a function");
            t4.prototype = Object.create(e4 && e4.prototype, {
              constructor: {
                value: t4,
                writable: true,
                configurable: true
              }
            }), Object.defineProperty(t4, "prototype", {
              writable: false
            }), e4 && W(t4, e4);
          }(r2, t3);
          var e3 = R(r2);
          function r2(t4, n2) {
            var o2;
            return T(this, r2), (o2 = e3.call(this, t4)).code = n2, o2;
          }
          return _(r2);
        }(N(Error)), U = function() {
          function t3() {
            T(this, t3);
          }
          return _(t3, null, [{
            key: "debug",
            value: function() {
              var t4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
              console.debug("[Wikiplus-DEBUG] ".concat(t4));
            }
          }, {
            key: "info",
            value: function() {
              var t4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
              console.info("[Wikiplus-INFO] ".concat(t4));
            }
          }, {
            key: "error",
            value: function(t4) {
              var e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], r2 = P.translate(t4);
              throw e3.length > 0 && e3.forEach(function(t5, e4) {
                r2 = r2.replace(new RegExp("\\".concat(e4 + 1), "ig"), t5);
              }), console.error("[Wikiplus-ERROR] ".concat(r2)), new F("".concat(r2), t4);
            }
          }]), t3;
        }(), M = U;
        function D(t3) {
          return D = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, D(t3);
        }
        function G(t3, e3) {
          var r2 = Object.keys(t3);
          if (Object.getOwnPropertySymbols) {
            var n2 = Object.getOwnPropertySymbols(t3);
            e3 && (n2 = n2.filter(function(e4) {
              return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
            })), r2.push.apply(r2, n2);
          }
          return r2;
        }
        function q(t3) {
          for (var e3 = 1; e3 < arguments.length; e3++) {
            var r2 = null != arguments[e3] ? arguments[e3] : {};
            e3 % 2 ? G(Object(r2), true).forEach(function(e4) {
              V(t3, e4, r2[e4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(r2)) : G(Object(r2)).forEach(function(e4) {
              Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(r2, e4));
            });
          }
          return t3;
        }
        function Q() {
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
          Q = function() {
            return e3;
          };
          var t3, e3 = {}, r2 = Object.prototype, n2 = r2.hasOwnProperty, o2 = Object.defineProperty || function(t4, e4, r3) {
            t4[e4] = r3.value;
          }, i2 = "function" == typeof Symbol ? Symbol : {}, a2 = i2.iterator || "@@iterator", u2 = i2.asyncIterator || "@@asyncIterator", c2 = i2.toStringTag || "@@toStringTag";
          function s2(t4, e4, r3) {
            return Object.defineProperty(t4, e4, {
              value: r3,
              enumerable: true,
              configurable: true,
              writable: true
            }), t4[e4];
          }
          try {
            s2({}, "");
          } catch (t4) {
            s2 = function(t5, e4, r3) {
              return t5[e4] = r3;
            };
          }
          function f2(t4, e4, r3, n3) {
            var i3 = e4 && e4.prototype instanceof g2 ? e4 : g2, a3 = Object.create(i3.prototype), u3 = new I2(n3 || []);
            return o2(a3, "_invoke", {
              value: P2(t4, r3, u3)
            }), a3;
          }
          function l2(t4, e4, r3) {
            try {
              return {
                type: "normal",
                arg: t4.call(e4, r3)
              };
            } catch (t5) {
              return {
                type: "throw",
                arg: t5
              };
            }
          }
          e3.wrap = f2;
          var p2 = "suspendedStart", h2 = "suspendedYield", v2 = "executing", d2 = "completed", y2 = {};
          function g2() {
          }
          function m2() {
          }
          function b2() {
          }
          var w2 = {};
          s2(w2, a2, function() {
            return this;
          });
          var x2 = Object.getPrototypeOf, k2 = x2 && x2(x2(T2([])));
          k2 && k2 !== r2 && n2.call(k2, a2) && (w2 = k2);
          var S2 = b2.prototype = g2.prototype = Object.create(w2);
          function E2(t4) {
            ["next", "throw", "return"].forEach(function(e4) {
              s2(t4, e4, function(t5) {
                return this._invoke(e4, t5);
              });
            });
          }
          function O2(t4, e4) {
            function r3(o3, i4, a3, u3) {
              var c3 = l2(t4[o3], t4, i4);
              if ("throw" !== c3.type) {
                var s3 = c3.arg, f3 = s3.value;
                return f3 && "object" == D(f3) && n2.call(f3, "__await") ? e4.resolve(f3.__await).then(function(t5) {
                  r3("next", t5, a3, u3);
                }, function(t5) {
                  r3("throw", t5, a3, u3);
                }) : e4.resolve(f3).then(function(t5) {
                  s3.value = t5, a3(s3);
                }, function(t5) {
                  return r3("throw", t5, a3, u3);
                });
              }
              u3(c3.arg);
            }
            var i3;
            o2(this, "_invoke", {
              value: function(t5, n3) {
                function o3() {
                  return new e4(function(e5, o4) {
                    r3(t5, n3, e5, o4);
                  });
                }
                return i3 = i3 ? i3.then(o3, o3) : o3();
              }
            });
          }
          function P2(e4, r3, n3) {
            var o3 = p2;
            return function(i3, a3) {
              if (o3 === v2)
                throw new Error("Generator is already running");
              if (o3 === d2) {
                if ("throw" === i3)
                  throw a3;
                return {
                  value: t3,
                  done: true
                };
              }
              for (n3.method = i3, n3.arg = a3; ; ) {
                var u3 = n3.delegate;
                if (u3) {
                  var c3 = j2(u3, n3);
                  if (c3) {
                    if (c3 === y2)
                      continue;
                    return c3;
                  }
                }
                if ("next" === n3.method)
                  n3.sent = n3._sent = n3.arg;
                else if ("throw" === n3.method) {
                  if (o3 === p2)
                    throw o3 = d2, n3.arg;
                  n3.dispatchException(n3.arg);
                } else
                  "return" === n3.method && n3.abrupt("return", n3.arg);
                o3 = v2;
                var s3 = l2(e4, r3, n3);
                if ("normal" === s3.type) {
                  if (o3 = n3.done ? d2 : h2, s3.arg === y2)
                    continue;
                  return {
                    value: s3.arg,
                    done: n3.done
                  };
                }
                "throw" === s3.type && (o3 = d2, n3.method = "throw", n3.arg = s3.arg);
              }
            };
          }
          function j2(e4, r3) {
            var n3 = r3.method, o3 = e4.iterator[n3];
            if (o3 === t3)
              return r3.delegate = null, "throw" === n3 && e4.iterator.return && (r3.method = "return", r3.arg = t3, j2(e4, r3), "throw" === r3.method) || "return" !== n3 && (r3.method = "throw", r3.arg = new TypeError("The iterator does not provide a '" + n3 + "' method")), y2;
            var i3 = l2(o3, e4.iterator, r3.arg);
            if ("throw" === i3.type)
              return r3.method = "throw", r3.arg = i3.arg, r3.delegate = null, y2;
            var a3 = i3.arg;
            return a3 ? a3.done ? (r3[e4.resultName] = a3.value, r3.next = e4.nextLoc, "return" !== r3.method && (r3.method = "next", r3.arg = t3), r3.delegate = null, y2) : a3 : (r3.method = "throw", r3.arg = new TypeError("iterator result is not an object"), r3.delegate = null, y2);
          }
          function L2(t4) {
            var e4 = {
              tryLoc: t4[0]
            };
            1 in t4 && (e4.catchLoc = t4[1]), 2 in t4 && (e4.finallyLoc = t4[2], e4.afterLoc = t4[3]), this.tryEntries.push(e4);
          }
          function _2(t4) {
            var e4 = t4.completion || {};
            e4.type = "normal", delete e4.arg, t4.completion = e4;
          }
          function I2(t4) {
            this.tryEntries = [{
              tryLoc: "root"
            }], t4.forEach(L2, this), this.reset(true);
          }
          function T2(e4) {
            if (e4 || "" === e4) {
              var r3 = e4[a2];
              if (r3)
                return r3.call(e4);
              if ("function" == typeof e4.next)
                return e4;
              if (!isNaN(e4.length)) {
                var o3 = -1, i3 = function r4() {
                  for (; ++o3 < e4.length; )
                    if (n2.call(e4, o3))
                      return r4.value = e4[o3], r4.done = false, r4;
                  return r4.value = t3, r4.done = true, r4;
                };
                return i3.next = i3;
              }
            }
            throw new TypeError(D(e4) + " is not iterable");
          }
          return m2.prototype = b2, o2(S2, "constructor", {
            value: b2,
            configurable: true
          }), o2(b2, "constructor", {
            value: m2,
            configurable: true
          }), m2.displayName = s2(b2, c2, "GeneratorFunction"), e3.isGeneratorFunction = function(t4) {
            var e4 = "function" == typeof t4 && t4.constructor;
            return !!e4 && (e4 === m2 || "GeneratorFunction" === (e4.displayName || e4.name));
          }, e3.mark = function(t4) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t4, b2) : (t4.__proto__ = b2, s2(t4, c2, "GeneratorFunction")), t4.prototype = Object.create(S2), t4;
          }, e3.awrap = function(t4) {
            return {
              __await: t4
            };
          }, E2(O2.prototype), s2(O2.prototype, u2, function() {
            return this;
          }), e3.AsyncIterator = O2, e3.async = function(t4, r3, n3, o3, i3) {
            void 0 === i3 && (i3 = Promise);
            var a3 = new O2(f2(t4, r3, n3, o3), i3);
            return e3.isGeneratorFunction(r3) ? a3 : a3.next().then(function(t5) {
              return t5.done ? t5.value : a3.next();
            });
          }, E2(S2), s2(S2, c2, "Generator"), s2(S2, a2, function() {
            return this;
          }), s2(S2, "toString", function() {
            return "[object Generator]";
          }), e3.keys = function(t4) {
            var e4 = Object(t4), r3 = [];
            for (var n3 in e4)
              r3.push(n3);
            return r3.reverse(), function t5() {
              for (; r3.length; ) {
                var n4 = r3.pop();
                if (n4 in e4)
                  return t5.value = n4, t5.done = false, t5;
              }
              return t5.done = true, t5;
            };
          }, e3.values = T2, I2.prototype = {
            constructor: I2,
            reset: function(e4) {
              if (this.prev = 0, this.next = 0, this.sent = this._sent = t3, this.done = false, this.delegate = null, this.method = "next", this.arg = t3, this.tryEntries.forEach(_2), !e4)
                for (var r3 in this)
                  "t" === r3.charAt(0) && n2.call(this, r3) && !isNaN(+r3.slice(1)) && (this[r3] = t3);
            },
            stop: function() {
              this.done = true;
              var t4 = this.tryEntries[0].completion;
              if ("throw" === t4.type)
                throw t4.arg;
              return this.rval;
            },
            dispatchException: function(e4) {
              if (this.done)
                throw e4;
              var r3 = this;
              function o3(n3, o4) {
                return u3.type = "throw", u3.arg = e4, r3.next = n3, o4 && (r3.method = "next", r3.arg = t3), !!o4;
              }
              for (var i3 = this.tryEntries.length - 1; i3 >= 0; --i3) {
                var a3 = this.tryEntries[i3], u3 = a3.completion;
                if ("root" === a3.tryLoc)
                  return o3("end");
                if (a3.tryLoc <= this.prev) {
                  var c3 = n2.call(a3, "catchLoc"), s3 = n2.call(a3, "finallyLoc");
                  if (c3 && s3) {
                    if (this.prev < a3.catchLoc)
                      return o3(a3.catchLoc, true);
                    if (this.prev < a3.finallyLoc)
                      return o3(a3.finallyLoc);
                  } else if (c3) {
                    if (this.prev < a3.catchLoc)
                      return o3(a3.catchLoc, true);
                  } else {
                    if (!s3)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a3.finallyLoc)
                      return o3(a3.finallyLoc);
                  }
                }
              }
            },
            abrupt: function(t4, e4) {
              for (var r3 = this.tryEntries.length - 1; r3 >= 0; --r3) {
                var o3 = this.tryEntries[r3];
                if (o3.tryLoc <= this.prev && n2.call(o3, "finallyLoc") && this.prev < o3.finallyLoc) {
                  var i3 = o3;
                  break;
                }
              }
              i3 && ("break" === t4 || "continue" === t4) && i3.tryLoc <= e4 && e4 <= i3.finallyLoc && (i3 = null);
              var a3 = i3 ? i3.completion : {};
              return a3.type = t4, a3.arg = e4, i3 ? (this.method = "next", this.next = i3.finallyLoc, y2) : this.complete(a3);
            },
            complete: function(t4, e4) {
              if ("throw" === t4.type)
                throw t4.arg;
              return "break" === t4.type || "continue" === t4.type ? this.next = t4.arg : "return" === t4.type ? (this.rval = this.arg = t4.arg, this.method = "return", this.next = "end") : "normal" === t4.type && e4 && (this.next = e4), y2;
            },
            finish: function(t4) {
              for (var e4 = this.tryEntries.length - 1; e4 >= 0; --e4) {
                var r3 = this.tryEntries[e4];
                if (r3.finallyLoc === t4)
                  return this.complete(r3.completion, r3.afterLoc), _2(r3), y2;
              }
            },
            catch: function(t4) {
              for (var e4 = this.tryEntries.length - 1; e4 >= 0; --e4) {
                var r3 = this.tryEntries[e4];
                if (r3.tryLoc === t4) {
                  var n3 = r3.completion;
                  if ("throw" === n3.type) {
                    var o3 = n3.arg;
                    _2(r3);
                  }
                  return o3;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function(e4, r3, n3) {
              return this.delegate = {
                iterator: T2(e4),
                resultName: r3,
                nextLoc: n3
              }, "next" === this.method && (this.arg = t3), y2;
            }
          }, e3;
        }
        function H(t3, e3, r2, n2, o2, i2, a2) {
          try {
            var u2 = t3[i2](a2), c2 = u2.value;
          } catch (t4) {
            return void r2(t4);
          }
          u2.done ? e3(c2) : Promise.resolve(c2).then(n2, o2);
        }
        function z(t3) {
          return function() {
            var e3 = this, r2 = arguments;
            return new Promise(function(n2, o2) {
              var i2 = t3.apply(e3, r2);
              function a2(t4) {
                H(i2, n2, o2, a2, u2, "next", t4);
              }
              function u2(t4) {
                H(i2, n2, o2, a2, u2, "throw", t4);
              }
              a2(void 0);
            });
          };
        }
        function Y(t3, e3) {
          for (var r2 = 0; r2 < e3.length; r2++) {
            var n2 = e3[r2];
            n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, J(n2.key), n2);
          }
        }
        function V(t3, e3, r2) {
          return (e3 = J(e3)) in t3 ? Object.defineProperty(t3, e3, {
            value: r2,
            enumerable: true,
            configurable: true,
            writable: true
          }) : t3[e3] = r2, t3;
        }
        function J(t3) {
          var e3 = function(t4, e4) {
            if ("object" !== D(t4) || null === t4)
              return t4;
            var r2 = t4[Symbol.toPrimitive];
            if (void 0 !== r2) {
              var n2 = r2.call(t4, e4 || "default");
              if ("object" !== D(n2))
                return n2;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === e4 ? String : Number)(t4);
          }(t3, "string");
          return "symbol" === D(e3) ? e3 : String(e3);
        }
        var K = function() {
          function t3() {
            !function(t4, e4) {
              if (!(t4 instanceof e4))
                throw new TypeError("Cannot call a class as a function");
            }(this, t3), V(this, "pageInfoCache", {});
          }
          var e3, r2, n2, o2, a2, u2, c2, s2, f2;
          return e3 = t3, r2 = [{
            key: "getEditToken",
            value: (f2 = z(Q().mark(function t4() {
              var e4;
              return Q().wrap(function(t5) {
                for (; ; )
                  switch (t5.prev = t5.next) {
                    case 0:
                      return t5.next = 2, m.get({
                        action: "query",
                        meta: "tokens",
                        format: "json"
                      });
                    case 2:
                      if (!((e4 = t5.sent).query && e4.query.tokens && e4.query.tokens.csrftoken && "+\\" !== e4.query.tokens.csrftoken)) {
                        t5.next = 7;
                        break;
                      }
                      return t5.abrupt("return", e4.query.tokens.csrftoken);
                    case 7:
                      return t5.abrupt("return", M.error("fail_to_get_edittoken"));
                    case 8:
                    case "end":
                      return t5.stop();
                  }
              }, t4);
            })), function() {
              return f2.apply(this, arguments);
            })
          }, {
            key: "getPageInfo",
            value: (s2 = z(Q().mark(function t4(e4) {
              var r3, n3, o3, i2, a3;
              return Q().wrap(function(t5) {
                for (; ; )
                  switch (t5.prev = t5.next) {
                    case 0:
                      if (r3 = e4.title, n3 = e4.revisionId, t5.prev = 1, o3 = {
                        action: "query",
                        prop: "revisions|info",
                        rvprop: "timestamp|ids",
                        format: "json"
                      }, !n3) {
                        t5.next = 7;
                        break;
                      }
                      o3.revids = n3, t5.next = 11;
                      break;
                    case 7:
                      if (!r3) {
                        t5.next = 11;
                        break;
                      }
                      if (!this.pageInfoCache[r3]) {
                        t5.next = 10;
                        break;
                      }
                      return t5.abrupt("return", {
                        timestamp: this.pageInfoCache[r3].timestamp,
                        revisionId: this.pageInfoCache[r3].revid
                      });
                    case 10:
                      o3.titles = r3;
                    case 11:
                      return t5.next = 13, m.get(o3);
                    case 13:
                      if (!(i2 = t5.sent).query || !i2.query.pages) {
                        t5.next = 20;
                        break;
                      }
                      if ("-1" !== Object.keys(i2.query.pages)[0]) {
                        t5.next = 17;
                        break;
                      }
                      return t5.abrupt("return", {});
                    case 17:
                      return a3 = i2.query.pages[Object.keys(i2.query.pages)[0]].revisions[0], r3 && (this.pageInfoCache[r3] = a3), t5.abrupt("return", {
                        timestamp: a3.timestamp,
                        revisionId: a3.revid
                      });
                    case 20:
                      t5.next = 25;
                      break;
                    case 22:
                      t5.prev = 22, t5.t0 = t5.catch(1), M.error("fail_to_get_edittoken");
                    case 25:
                    case "end":
                      return t5.stop();
                  }
              }, t4, this, [[1, 22]]);
            })), function(t4) {
              return s2.apply(this, arguments);
            })
          }, {
            key: "getWikiText",
            value: (c2 = z(Q().mark(function t4(e4) {
              var r3, n3, o3;
              return Q().wrap(function(t5) {
                for (; ; )
                  switch (t5.prev = t5.next) {
                    case 0:
                      return r3 = e4.section, n3 = e4.revisionId, t5.prev = 1, t5.next = 4, fetch("".concat(location.protocol, "//").concat(location.host).concat(i.scriptPath, "/index.php?oldid=").concat(n3, "&section=").concat(r3, "&action=raw"));
                    case 4:
                      return t5.next = 6, t5.sent.text();
                    case 6:
                      return o3 = t5.sent, t5.abrupt("return", o3);
                    case 10:
                      t5.prev = 10, t5.t0 = t5.catch(1), M.error("fail_to_get_wikitext");
                    case 13:
                    case "end":
                      return t5.stop();
                  }
              }, t4, null, [[1, 10]]);
            })), function(t4) {
              return c2.apply(this, arguments);
            })
          }, {
            key: "parseWikiText",
            value: (u2 = z(Q().mark(function t4(e4) {
              var r3, n3, o3 = arguments;
              return Q().wrap(function(t5) {
                for (; ; )
                  switch (t5.prev = t5.next) {
                    case 0:
                      return r3 = o3.length > 1 && void 0 !== o3[1] ? o3[1] : "", t5.prev = 2, t5.next = 5, m.post({
                        format: "json",
                        action: "parse",
                        text: e4,
                        title: r3,
                        pst: "true"
                      });
                    case 5:
                      if (!(n3 = t5.sent).parse || !n3.parse.text) {
                        t5.next = 8;
                        break;
                      }
                      return t5.abrupt("return", n3.parse.text["*"]);
                    case 8:
                      t5.next = 13;
                      break;
                    case 10:
                      t5.prev = 10, t5.t0 = t5.catch(2), M.error("cant_parse_wikitext");
                    case 13:
                    case "end":
                      return t5.stop();
                  }
              }, t4, null, [[2, 10]]);
            })), function(t4) {
              return u2.apply(this, arguments);
            })
          }, {
            key: "edit",
            value: (a2 = z(Q().mark(function t4() {
              var e4, r3, n3, o3, i2, a3, u3, c3, s3, f3, l2 = arguments;
              return Q().wrap(function(t5) {
                for (; ; )
                  switch (t5.prev = t5.next) {
                    case 0:
                      return r3 = (e4 = l2.length > 0 && void 0 !== l2[0] ? l2[0] : {}).title, n3 = e4.content, o3 = e4.editToken, i2 = e4.timestamp, a3 = e4.config, u3 = void 0 === a3 ? {} : a3, c3 = e4.additionalConfig, s3 = void 0 === c3 ? {} : c3, t5.prev = 1, t5.next = 4, m.post(q(q(q({
                        action: "edit",
                        format: "json",
                        text: n3,
                        title: r3,
                        token: o3
                      }, i2 ? {
                        basetimestamp: i2
                      } : {}), u3), s3));
                    case 4:
                      f3 = t5.sent, t5.next = 10;
                      break;
                    case 7:
                      t5.prev = 7, t5.t0 = t5.catch(1), M.error("network_edit_error");
                    case 10:
                      if (!f3.edit) {
                        t5.next = 22;
                        break;
                      }
                      if ("Success" !== f3.edit.result) {
                        t5.next = 15;
                        break;
                      }
                      return t5.abrupt("return", true);
                    case 15:
                      if (!f3.edit.code) {
                        t5.next = 19;
                        break;
                      }
                      throw new Error("\n                        ".concat(P.translate("hit_abusefilter"), ":").concat(f3.edit.info.replace("/Hit AbuseFilter: /ig", ""), '\n                        <br>\n                        <div style="font-size: smaller;">').concat(f3.edit.warning, "</div>\n                    "));
                    case 19:
                      M.error("unknown_edit_error");
                    case 20:
                      t5.next = 23;
                      break;
                    case 22:
                      f3.error && f3.error.code ? M.error(f3.error.code) : f3.code ? M.error(f3.code) : M.error("unknown_edit_error");
                    case 23:
                    case "end":
                      return t5.stop();
                  }
              }, t4, null, [[1, 7]]);
            })), function() {
              return a2.apply(this, arguments);
            })
          }, {
            key: "getLatestRevisionIdForPage",
            value: (o2 = z(Q().mark(function t4(e4) {
              var r3, n3;
              return Q().wrap(function(t5) {
                for (; ; )
                  switch (t5.prev = t5.next) {
                    case 0:
                      return t5.next = 2, this.getPageInfo({
                        title: e4
                      });
                    case 2:
                      return r3 = t5.sent, n3 = r3.revisionId, t5.abrupt("return", n3);
                    case 5:
                    case "end":
                      return t5.stop();
                  }
              }, t4, this);
            })), function(t4) {
              return o2.apply(this, arguments);
            })
          }], r2 && Y(e3.prototype, r2), n2 && Y(e3, n2), Object.defineProperty(e3, "prototype", {
            writable: false
          }), t3;
        }(), X = new K();
        function Z(t3) {
          return Z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, Z(t3);
        }
        function tt(t3, e3) {
          var r2 = Object.keys(t3);
          if (Object.getOwnPropertySymbols) {
            var n2 = Object.getOwnPropertySymbols(t3);
            e3 && (n2 = n2.filter(function(e4) {
              return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
            })), r2.push.apply(r2, n2);
          }
          return r2;
        }
        function et(t3) {
          for (var e3 = 1; e3 < arguments.length; e3++) {
            var r2 = null != arguments[e3] ? arguments[e3] : {};
            e3 % 2 ? tt(Object(r2), true).forEach(function(e4) {
              at(t3, e4, r2[e4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(r2)) : tt(Object(r2)).forEach(function(e4) {
              Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(r2, e4));
            });
          }
          return t3;
        }
        function rt() {
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
          rt = function() {
            return e3;
          };
          var t3, e3 = {}, r2 = Object.prototype, n2 = r2.hasOwnProperty, o2 = Object.defineProperty || function(t4, e4, r3) {
            t4[e4] = r3.value;
          }, i2 = "function" == typeof Symbol ? Symbol : {}, a2 = i2.iterator || "@@iterator", u2 = i2.asyncIterator || "@@asyncIterator", c2 = i2.toStringTag || "@@toStringTag";
          function s2(t4, e4, r3) {
            return Object.defineProperty(t4, e4, {
              value: r3,
              enumerable: true,
              configurable: true,
              writable: true
            }), t4[e4];
          }
          try {
            s2({}, "");
          } catch (t4) {
            s2 = function(t5, e4, r3) {
              return t5[e4] = r3;
            };
          }
          function f2(t4, e4, r3, n3) {
            var i3 = e4 && e4.prototype instanceof g2 ? e4 : g2, a3 = Object.create(i3.prototype), u3 = new I2(n3 || []);
            return o2(a3, "_invoke", {
              value: P2(t4, r3, u3)
            }), a3;
          }
          function l2(t4, e4, r3) {
            try {
              return {
                type: "normal",
                arg: t4.call(e4, r3)
              };
            } catch (t5) {
              return {
                type: "throw",
                arg: t5
              };
            }
          }
          e3.wrap = f2;
          var p2 = "suspendedStart", h2 = "suspendedYield", v2 = "executing", d2 = "completed", y2 = {};
          function g2() {
          }
          function m2() {
          }
          function b2() {
          }
          var w2 = {};
          s2(w2, a2, function() {
            return this;
          });
          var x2 = Object.getPrototypeOf, k2 = x2 && x2(x2(T2([])));
          k2 && k2 !== r2 && n2.call(k2, a2) && (w2 = k2);
          var S2 = b2.prototype = g2.prototype = Object.create(w2);
          function E2(t4) {
            ["next", "throw", "return"].forEach(function(e4) {
              s2(t4, e4, function(t5) {
                return this._invoke(e4, t5);
              });
            });
          }
          function O2(t4, e4) {
            function r3(o3, i4, a3, u3) {
              var c3 = l2(t4[o3], t4, i4);
              if ("throw" !== c3.type) {
                var s3 = c3.arg, f3 = s3.value;
                return f3 && "object" == Z(f3) && n2.call(f3, "__await") ? e4.resolve(f3.__await).then(function(t5) {
                  r3("next", t5, a3, u3);
                }, function(t5) {
                  r3("throw", t5, a3, u3);
                }) : e4.resolve(f3).then(function(t5) {
                  s3.value = t5, a3(s3);
                }, function(t5) {
                  return r3("throw", t5, a3, u3);
                });
              }
              u3(c3.arg);
            }
            var i3;
            o2(this, "_invoke", {
              value: function(t5, n3) {
                function o3() {
                  return new e4(function(e5, o4) {
                    r3(t5, n3, e5, o4);
                  });
                }
                return i3 = i3 ? i3.then(o3, o3) : o3();
              }
            });
          }
          function P2(e4, r3, n3) {
            var o3 = p2;
            return function(i3, a3) {
              if (o3 === v2)
                throw new Error("Generator is already running");
              if (o3 === d2) {
                if ("throw" === i3)
                  throw a3;
                return {
                  value: t3,
                  done: true
                };
              }
              for (n3.method = i3, n3.arg = a3; ; ) {
                var u3 = n3.delegate;
                if (u3) {
                  var c3 = j2(u3, n3);
                  if (c3) {
                    if (c3 === y2)
                      continue;
                    return c3;
                  }
                }
                if ("next" === n3.method)
                  n3.sent = n3._sent = n3.arg;
                else if ("throw" === n3.method) {
                  if (o3 === p2)
                    throw o3 = d2, n3.arg;
                  n3.dispatchException(n3.arg);
                } else
                  "return" === n3.method && n3.abrupt("return", n3.arg);
                o3 = v2;
                var s3 = l2(e4, r3, n3);
                if ("normal" === s3.type) {
                  if (o3 = n3.done ? d2 : h2, s3.arg === y2)
                    continue;
                  return {
                    value: s3.arg,
                    done: n3.done
                  };
                }
                "throw" === s3.type && (o3 = d2, n3.method = "throw", n3.arg = s3.arg);
              }
            };
          }
          function j2(e4, r3) {
            var n3 = r3.method, o3 = e4.iterator[n3];
            if (o3 === t3)
              return r3.delegate = null, "throw" === n3 && e4.iterator.return && (r3.method = "return", r3.arg = t3, j2(e4, r3), "throw" === r3.method) || "return" !== n3 && (r3.method = "throw", r3.arg = new TypeError("The iterator does not provide a '" + n3 + "' method")), y2;
            var i3 = l2(o3, e4.iterator, r3.arg);
            if ("throw" === i3.type)
              return r3.method = "throw", r3.arg = i3.arg, r3.delegate = null, y2;
            var a3 = i3.arg;
            return a3 ? a3.done ? (r3[e4.resultName] = a3.value, r3.next = e4.nextLoc, "return" !== r3.method && (r3.method = "next", r3.arg = t3), r3.delegate = null, y2) : a3 : (r3.method = "throw", r3.arg = new TypeError("iterator result is not an object"), r3.delegate = null, y2);
          }
          function L2(t4) {
            var e4 = {
              tryLoc: t4[0]
            };
            1 in t4 && (e4.catchLoc = t4[1]), 2 in t4 && (e4.finallyLoc = t4[2], e4.afterLoc = t4[3]), this.tryEntries.push(e4);
          }
          function _2(t4) {
            var e4 = t4.completion || {};
            e4.type = "normal", delete e4.arg, t4.completion = e4;
          }
          function I2(t4) {
            this.tryEntries = [{
              tryLoc: "root"
            }], t4.forEach(L2, this), this.reset(true);
          }
          function T2(e4) {
            if (e4 || "" === e4) {
              var r3 = e4[a2];
              if (r3)
                return r3.call(e4);
              if ("function" == typeof e4.next)
                return e4;
              if (!isNaN(e4.length)) {
                var o3 = -1, i3 = function r4() {
                  for (; ++o3 < e4.length; )
                    if (n2.call(e4, o3))
                      return r4.value = e4[o3], r4.done = false, r4;
                  return r4.value = t3, r4.done = true, r4;
                };
                return i3.next = i3;
              }
            }
            throw new TypeError(Z(e4) + " is not iterable");
          }
          return m2.prototype = b2, o2(S2, "constructor", {
            value: b2,
            configurable: true
          }), o2(b2, "constructor", {
            value: m2,
            configurable: true
          }), m2.displayName = s2(b2, c2, "GeneratorFunction"), e3.isGeneratorFunction = function(t4) {
            var e4 = "function" == typeof t4 && t4.constructor;
            return !!e4 && (e4 === m2 || "GeneratorFunction" === (e4.displayName || e4.name));
          }, e3.mark = function(t4) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t4, b2) : (t4.__proto__ = b2, s2(t4, c2, "GeneratorFunction")), t4.prototype = Object.create(S2), t4;
          }, e3.awrap = function(t4) {
            return {
              __await: t4
            };
          }, E2(O2.prototype), s2(O2.prototype, u2, function() {
            return this;
          }), e3.AsyncIterator = O2, e3.async = function(t4, r3, n3, o3, i3) {
            void 0 === i3 && (i3 = Promise);
            var a3 = new O2(f2(t4, r3, n3, o3), i3);
            return e3.isGeneratorFunction(r3) ? a3 : a3.next().then(function(t5) {
              return t5.done ? t5.value : a3.next();
            });
          }, E2(S2), s2(S2, c2, "Generator"), s2(S2, a2, function() {
            return this;
          }), s2(S2, "toString", function() {
            return "[object Generator]";
          }), e3.keys = function(t4) {
            var e4 = Object(t4), r3 = [];
            for (var n3 in e4)
              r3.push(n3);
            return r3.reverse(), function t5() {
              for (; r3.length; ) {
                var n4 = r3.pop();
                if (n4 in e4)
                  return t5.value = n4, t5.done = false, t5;
              }
              return t5.done = true, t5;
            };
          }, e3.values = T2, I2.prototype = {
            constructor: I2,
            reset: function(e4) {
              if (this.prev = 0, this.next = 0, this.sent = this._sent = t3, this.done = false, this.delegate = null, this.method = "next", this.arg = t3, this.tryEntries.forEach(_2), !e4)
                for (var r3 in this)
                  "t" === r3.charAt(0) && n2.call(this, r3) && !isNaN(+r3.slice(1)) && (this[r3] = t3);
            },
            stop: function() {
              this.done = true;
              var t4 = this.tryEntries[0].completion;
              if ("throw" === t4.type)
                throw t4.arg;
              return this.rval;
            },
            dispatchException: function(e4) {
              if (this.done)
                throw e4;
              var r3 = this;
              function o3(n3, o4) {
                return u3.type = "throw", u3.arg = e4, r3.next = n3, o4 && (r3.method = "next", r3.arg = t3), !!o4;
              }
              for (var i3 = this.tryEntries.length - 1; i3 >= 0; --i3) {
                var a3 = this.tryEntries[i3], u3 = a3.completion;
                if ("root" === a3.tryLoc)
                  return o3("end");
                if (a3.tryLoc <= this.prev) {
                  var c3 = n2.call(a3, "catchLoc"), s3 = n2.call(a3, "finallyLoc");
                  if (c3 && s3) {
                    if (this.prev < a3.catchLoc)
                      return o3(a3.catchLoc, true);
                    if (this.prev < a3.finallyLoc)
                      return o3(a3.finallyLoc);
                  } else if (c3) {
                    if (this.prev < a3.catchLoc)
                      return o3(a3.catchLoc, true);
                  } else {
                    if (!s3)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a3.finallyLoc)
                      return o3(a3.finallyLoc);
                  }
                }
              }
            },
            abrupt: function(t4, e4) {
              for (var r3 = this.tryEntries.length - 1; r3 >= 0; --r3) {
                var o3 = this.tryEntries[r3];
                if (o3.tryLoc <= this.prev && n2.call(o3, "finallyLoc") && this.prev < o3.finallyLoc) {
                  var i3 = o3;
                  break;
                }
              }
              i3 && ("break" === t4 || "continue" === t4) && i3.tryLoc <= e4 && e4 <= i3.finallyLoc && (i3 = null);
              var a3 = i3 ? i3.completion : {};
              return a3.type = t4, a3.arg = e4, i3 ? (this.method = "next", this.next = i3.finallyLoc, y2) : this.complete(a3);
            },
            complete: function(t4, e4) {
              if ("throw" === t4.type)
                throw t4.arg;
              return "break" === t4.type || "continue" === t4.type ? this.next = t4.arg : "return" === t4.type ? (this.rval = this.arg = t4.arg, this.method = "return", this.next = "end") : "normal" === t4.type && e4 && (this.next = e4), y2;
            },
            finish: function(t4) {
              for (var e4 = this.tryEntries.length - 1; e4 >= 0; --e4) {
                var r3 = this.tryEntries[e4];
                if (r3.finallyLoc === t4)
                  return this.complete(r3.completion, r3.afterLoc), _2(r3), y2;
              }
            },
            catch: function(t4) {
              for (var e4 = this.tryEntries.length - 1; e4 >= 0; --e4) {
                var r3 = this.tryEntries[e4];
                if (r3.tryLoc === t4) {
                  var n3 = r3.completion;
                  if ("throw" === n3.type) {
                    var o3 = n3.arg;
                    _2(r3);
                  }
                  return o3;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function(e4, r3, n3) {
              return this.delegate = {
                iterator: T2(e4),
                resultName: r3,
                nextLoc: n3
              }, "next" === this.method && (this.arg = t3), y2;
            }
          }, e3;
        }
        function nt(t3, e3, r2, n2, o2, i2, a2) {
          try {
            var u2 = t3[i2](a2), c2 = u2.value;
          } catch (t4) {
            return void r2(t4);
          }
          u2.done ? e3(c2) : Promise.resolve(c2).then(n2, o2);
        }
        function ot(t3) {
          return function() {
            var e3 = this, r2 = arguments;
            return new Promise(function(n2, o2) {
              var i2 = t3.apply(e3, r2);
              function a2(t4) {
                nt(i2, n2, o2, a2, u2, "next", t4);
              }
              function u2(t4) {
                nt(i2, n2, o2, a2, u2, "throw", t4);
              }
              a2(void 0);
            });
          };
        }
        function it(t3, e3) {
          for (var r2 = 0; r2 < e3.length; r2++) {
            var n2 = e3[r2];
            n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, ut(n2.key), n2);
          }
        }
        function at(t3, e3, r2) {
          return (e3 = ut(e3)) in t3 ? Object.defineProperty(t3, e3, {
            value: r2,
            enumerable: true,
            configurable: true,
            writable: true
          }) : t3[e3] = r2, t3;
        }
        function ut(t3) {
          var e3 = function(t4, e4) {
            if ("object" !== Z(t4) || null === t4)
              return t4;
            var r2 = t4[Symbol.toPrimitive];
            if (void 0 !== r2) {
              var n2 = r2.call(t4, e4 || "default");
              if ("object" !== Z(n2))
                return n2;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === e4 ? String : Number)(t4);
          }(t3, "string");
          return "symbol" === Z(e3) ? e3 : String(e3);
        }
        var ct = function() {
          function t3(e4) {
            var r3 = e4.title, n3 = e4.revisionId;
            !function(t4, e5) {
              if (!(t4 instanceof e5))
                throw new TypeError("Cannot call a class as a function");
            }(this, t3), at(this, "timestamp", void 0), at(this, "editToken", void 0), at(this, "title", void 0), at(this, "revisionId", void 0), at(this, "inited", false), at(this, "isNewPage", false), at(this, "sectionCache", {}), this.title = r3, this.revisionId = n3, this.isNewPage = !n3;
          }
          var e3, r2, n2, o2, i2, a2, u2, c2, s2;
          return e3 = t3, r2 = [{
            key: "init",
            value: (s2 = ot(rt().mark(function t4() {
              var e4, r3, n3, o3 = arguments;
              return rt().wrap(function(t5) {
                for (; ; )
                  switch (t5.prev = t5.next) {
                    case 0:
                      return e4 = (o3.length > 0 && void 0 !== o3[0] ? o3[0] : {}).editToken, r3 = void 0 === e4 ? "" : e4, n3 = [this.getTimestamp()], r3 || n3.push(this.getEditToken()), t5.next = 5, Promise.all(n3);
                    case 5:
                      this.inited = true, M.info("Page initialization for ".concat(this.title, "#").concat(this.revisionId, " finished."));
                    case 7:
                    case "end":
                      return t5.stop();
                  }
              }, t4, this);
            })), function() {
              return s2.apply(this, arguments);
            })
          }, {
            key: "getEditToken",
            value: (c2 = ot(rt().mark(function t4() {
              return rt().wrap(function(t5) {
                for (; ; )
                  switch (t5.prev = t5.next) {
                    case 0:
                      return t5.next = 2, mw.loader.using("mediawiki.user");
                    case 2:
                      if (!mw.user.tokens.get("csrfToken") || "+\\" === mw.user.tokens.get("csrfToken")) {
                        t5.next = 5;
                        break;
                      }
                      return this.editToken = mw.user.tokens.get("csrfToken"), t5.abrupt("return");
                    case 5:
                      return t5.next = 7, X.getEditToken();
                    case 7:
                      this.editToken = t5.sent;
                    case 8:
                    case "end":
                      return t5.stop();
                  }
              }, t4, this);
            })), function() {
              return c2.apply(this, arguments);
            })
          }, {
            key: "getTimestamp",
            value: (u2 = ot(rt().mark(function t4() {
              var e4, r3, n3;
              return rt().wrap(function(t5) {
                for (; ; )
                  switch (t5.prev = t5.next) {
                    case 0:
                      return t5.next = 2, X.getPageInfo({
                        revisionId: this.revisionId,
                        title: this.title
                      });
                    case 2:
                      e4 = t5.sent, r3 = e4.timestamp, n3 = e4.revisionId, this.timestamp = r3, n3 && (this.revisionId = n3, this.isNewPage = false);
                    case 7:
                    case "end":
                      return t5.stop();
                  }
              }, t4, this);
            })), function() {
              return u2.apply(this, arguments);
            })
          }, {
            key: "getWikiText",
            value: (a2 = ot(rt().mark(function t4() {
              var e4, r3, n3, o3, i3 = arguments;
              return rt().wrap(function(t5) {
                for (; ; )
                  switch (t5.prev = t5.next) {
                    case 0:
                      if (e4 = (i3.length > 0 && void 0 !== i3[0] ? i3[0] : {}).section, n3 = -1 === (r3 = void 0 === e4 ? "" : e4) ? "" : r3, !this.sectionCache[n3]) {
                        t5.next = 4;
                        break;
                      }
                      return t5.abrupt("return", this.sectionCache[n3]);
                    case 4:
                      return t5.next = 6, X.getWikiText({
                        section: n3,
                        revisionId: this.revisionId
                      });
                    case 6:
                      return o3 = t5.sent, M.info("Wikitext of ".concat(this.title, "#").concat(r3, " fetched.")), this.sectionCache[n3] = o3, t5.abrupt("return", o3);
                    case 10:
                    case "end":
                      return t5.stop();
                  }
              }, t4, this);
            })), function() {
              return a2.apply(this, arguments);
            })
          }, {
            key: "parseWikiText",
            value: (i2 = ot(rt().mark(function t4(e4) {
              return rt().wrap(function(t5) {
                for (; ; )
                  switch (t5.prev = t5.next) {
                    case 0:
                      return t5.abrupt("return", X.parseWikiText(e4, this.title));
                    case 1:
                    case "end":
                      return t5.stop();
                  }
              }, t4, this);
            })), function(t4) {
              return i2.apply(this, arguments);
            })
          }, {
            key: "edit",
            value: (o2 = ot(rt().mark(function t4(e4) {
              return rt().wrap(function(t5) {
                for (; ; )
                  switch (t5.prev = t5.next) {
                    case 0:
                      if (this.editToken) {
                        t5.next = 3;
                        break;
                      }
                      return M.error("fail_to_get_edittoken"), t5.abrupt("return");
                    case 3:
                      if (this.timestamp || this.isNewPage) {
                        t5.next = 6;
                        break;
                      }
                      return M.error("fail_to_get_timestamp"), t5.abrupt("return");
                    case 6:
                      return t5.abrupt("return", X.edit(et(et(et({
                        title: this.title,
                        editToken: this.editToken
                      }, this.timestamp ? {
                        timestamp: this.timestamp
                      } : {}), e4), {}, {
                        additionalConfig: et({}, this.isNewPage ? {
                          createonly: this.isNewPage
                        } : {})
                      })));
                    case 7:
                    case "end":
                      return t5.stop();
                  }
              }, t4, this);
            })), function(t4) {
              return o2.apply(this, arguments);
            })
          }], r2 && it(e3.prototype, r2), n2 && it(e3, n2), Object.defineProperty(e3, "prototype", {
            writable: false
          }), t3;
        }(), st = ct;
        r(5728), r(1954), r(928), r(2462), r(8436);
        function ft(t3) {
          return ft = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, ft(t3);
        }
        function lt(t3, e3) {
          for (var r2 = 0; r2 < e3.length; r2++) {
            var n2 = e3[r2];
            n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, pt(n2.key), n2);
          }
        }
        function pt(t3) {
          var e3 = function(t4, e4) {
            if ("object" !== ft(t4) || null === t4)
              return t4;
            var r2 = t4[Symbol.toPrimitive];
            if (void 0 !== r2) {
              var n2 = r2.call(t4, e4 || "default");
              if ("object" !== ft(n2))
                return n2;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === e4 ? String : Number)(t4);
          }(t3, "string");
          return "symbol" === ft(e3) ? e3 : String(e3);
        }
        var ht = function() {
          function t3() {
            !function(t4, e4) {
              if (!(t4 instanceof e4))
                throw new TypeError("Cannot call a class as a function");
            }(this, t3), this.init();
          }
          var e3, r2, n2;
          return e3 = t3, r2 = [{
            key: "init",
            value: function() {
              $("body").append('<div id="MoeNotification"></div>');
            }
          }, {
            key: "display",
            value: function() {
              var t4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "喵~", e4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "success", r3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {
              };
              $("#MoeNotification").append($("<div>").addClass("MoeNotification-notice").addClass("MoeNotification-notice-" + e4).append("<span>" + t4 + "</span>")), $("#MoeNotification").find(".MoeNotification-notice").last().fadeIn(300), this.bind(), this.clear(), r3($("#MoeNotification").find(".MoeNotification-notice").last());
            }
          }, {
            key: "bind",
            value: function() {
              var t4 = this;
              $(".MoeNotification-notice").on("mouseover", function() {
                t4.slideLeft($(this));
              });
            }
          }, {
            key: "success",
            value: function(t4, e4) {
              this.display(t4, "success", e4);
            }
          }, {
            key: "warning",
            value: function(t4, e4) {
              this.display(t4, "warning", e4);
            }
          }, {
            key: "error",
            value: function(t4, e4) {
              this.display(t4, "error", e4);
            }
          }, {
            key: "clear",
            value: function() {
              $(".MoeNotification-notice").length >= 10 && ($("#MoeNotification").children().first().fadeOut(150, function() {
                $(this).remove();
              }), setTimeout(this.clear, 300));
            }
          }, {
            key: "empty",
            value: function(t4) {
              $(".MoeNotification-notice").each(function(e4) {
                if ("function" == typeof t4) {
                  var r3 = $(this);
                  setTimeout(function() {
                    t4(r3);
                  }, 200 * e4);
                } else
                  $(this).delay(200 * e4).fadeOut("fast", function() {
                    $(this).remove();
                  });
              });
            }
          }, {
            key: "slideLeft",
            value: function(t4, e4) {
              t4.css("position", "relative"), t4.animate({
                left: "-200%"
              }, e4 || 150, function() {
                $(this).fadeOut("fast", function() {
                  $(this).remove();
                });
              });
            }
          }], r2 && lt(e3.prototype, r2), n2 && lt(e3, n2), Object.defineProperty(e3, "prototype", {
            writable: false
          }), t3;
        }(), vt = new ht(), dt = function(t3) {
          return new Promise(function(e3) {
            return setTimeout(e3, t3);
          });
        };
        function yt(t3) {
          return yt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, yt(t3);
        }
        function gt() {
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
          gt = function() {
            return e3;
          };
          var t3, e3 = {}, r2 = Object.prototype, n2 = r2.hasOwnProperty, o2 = Object.defineProperty || function(t4, e4, r3) {
            t4[e4] = r3.value;
          }, i2 = "function" == typeof Symbol ? Symbol : {}, a2 = i2.iterator || "@@iterator", u2 = i2.asyncIterator || "@@asyncIterator", c2 = i2.toStringTag || "@@toStringTag";
          function s2(t4, e4, r3) {
            return Object.defineProperty(t4, e4, {
              value: r3,
              enumerable: true,
              configurable: true,
              writable: true
            }), t4[e4];
          }
          try {
            s2({}, "");
          } catch (t4) {
            s2 = function(t5, e4, r3) {
              return t5[e4] = r3;
            };
          }
          function f2(t4, e4, r3, n3) {
            var i3 = e4 && e4.prototype instanceof g2 ? e4 : g2, a3 = Object.create(i3.prototype), u3 = new I2(n3 || []);
            return o2(a3, "_invoke", {
              value: P2(t4, r3, u3)
            }), a3;
          }
          function l2(t4, e4, r3) {
            try {
              return {
                type: "normal",
                arg: t4.call(e4, r3)
              };
            } catch (t5) {
              return {
                type: "throw",
                arg: t5
              };
            }
          }
          e3.wrap = f2;
          var p2 = "suspendedStart", h2 = "suspendedYield", v2 = "executing", d2 = "completed", y2 = {};
          function g2() {
          }
          function m2() {
          }
          function b2() {
          }
          var w2 = {};
          s2(w2, a2, function() {
            return this;
          });
          var x2 = Object.getPrototypeOf, k2 = x2 && x2(x2(T2([])));
          k2 && k2 !== r2 && n2.call(k2, a2) && (w2 = k2);
          var S2 = b2.prototype = g2.prototype = Object.create(w2);
          function E2(t4) {
            ["next", "throw", "return"].forEach(function(e4) {
              s2(t4, e4, function(t5) {
                return this._invoke(e4, t5);
              });
            });
          }
          function O2(t4, e4) {
            function r3(o3, i4, a3, u3) {
              var c3 = l2(t4[o3], t4, i4);
              if ("throw" !== c3.type) {
                var s3 = c3.arg, f3 = s3.value;
                return f3 && "object" == yt(f3) && n2.call(f3, "__await") ? e4.resolve(f3.__await).then(function(t5) {
                  r3("next", t5, a3, u3);
                }, function(t5) {
                  r3("throw", t5, a3, u3);
                }) : e4.resolve(f3).then(function(t5) {
                  s3.value = t5, a3(s3);
                }, function(t5) {
                  return r3("throw", t5, a3, u3);
                });
              }
              u3(c3.arg);
            }
            var i3;
            o2(this, "_invoke", {
              value: function(t5, n3) {
                function o3() {
                  return new e4(function(e5, o4) {
                    r3(t5, n3, e5, o4);
                  });
                }
                return i3 = i3 ? i3.then(o3, o3) : o3();
              }
            });
          }
          function P2(e4, r3, n3) {
            var o3 = p2;
            return function(i3, a3) {
              if (o3 === v2)
                throw new Error("Generator is already running");
              if (o3 === d2) {
                if ("throw" === i3)
                  throw a3;
                return {
                  value: t3,
                  done: true
                };
              }
              for (n3.method = i3, n3.arg = a3; ; ) {
                var u3 = n3.delegate;
                if (u3) {
                  var c3 = j2(u3, n3);
                  if (c3) {
                    if (c3 === y2)
                      continue;
                    return c3;
                  }
                }
                if ("next" === n3.method)
                  n3.sent = n3._sent = n3.arg;
                else if ("throw" === n3.method) {
                  if (o3 === p2)
                    throw o3 = d2, n3.arg;
                  n3.dispatchException(n3.arg);
                } else
                  "return" === n3.method && n3.abrupt("return", n3.arg);
                o3 = v2;
                var s3 = l2(e4, r3, n3);
                if ("normal" === s3.type) {
                  if (o3 = n3.done ? d2 : h2, s3.arg === y2)
                    continue;
                  return {
                    value: s3.arg,
                    done: n3.done
                  };
                }
                "throw" === s3.type && (o3 = d2, n3.method = "throw", n3.arg = s3.arg);
              }
            };
          }
          function j2(e4, r3) {
            var n3 = r3.method, o3 = e4.iterator[n3];
            if (o3 === t3)
              return r3.delegate = null, "throw" === n3 && e4.iterator.return && (r3.method = "return", r3.arg = t3, j2(e4, r3), "throw" === r3.method) || "return" !== n3 && (r3.method = "throw", r3.arg = new TypeError("The iterator does not provide a '" + n3 + "' method")), y2;
            var i3 = l2(o3, e4.iterator, r3.arg);
            if ("throw" === i3.type)
              return r3.method = "throw", r3.arg = i3.arg, r3.delegate = null, y2;
            var a3 = i3.arg;
            return a3 ? a3.done ? (r3[e4.resultName] = a3.value, r3.next = e4.nextLoc, "return" !== r3.method && (r3.method = "next", r3.arg = t3), r3.delegate = null, y2) : a3 : (r3.method = "throw", r3.arg = new TypeError("iterator result is not an object"), r3.delegate = null, y2);
          }
          function L2(t4) {
            var e4 = {
              tryLoc: t4[0]
            };
            1 in t4 && (e4.catchLoc = t4[1]), 2 in t4 && (e4.finallyLoc = t4[2], e4.afterLoc = t4[3]), this.tryEntries.push(e4);
          }
          function _2(t4) {
            var e4 = t4.completion || {};
            e4.type = "normal", delete e4.arg, t4.completion = e4;
          }
          function I2(t4) {
            this.tryEntries = [{
              tryLoc: "root"
            }], t4.forEach(L2, this), this.reset(true);
          }
          function T2(e4) {
            if (e4 || "" === e4) {
              var r3 = e4[a2];
              if (r3)
                return r3.call(e4);
              if ("function" == typeof e4.next)
                return e4;
              if (!isNaN(e4.length)) {
                var o3 = -1, i3 = function r4() {
                  for (; ++o3 < e4.length; )
                    if (n2.call(e4, o3))
                      return r4.value = e4[o3], r4.done = false, r4;
                  return r4.value = t3, r4.done = true, r4;
                };
                return i3.next = i3;
              }
            }
            throw new TypeError(yt(e4) + " is not iterable");
          }
          return m2.prototype = b2, o2(S2, "constructor", {
            value: b2,
            configurable: true
          }), o2(b2, "constructor", {
            value: m2,
            configurable: true
          }), m2.displayName = s2(b2, c2, "GeneratorFunction"), e3.isGeneratorFunction = function(t4) {
            var e4 = "function" == typeof t4 && t4.constructor;
            return !!e4 && (e4 === m2 || "GeneratorFunction" === (e4.displayName || e4.name));
          }, e3.mark = function(t4) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t4, b2) : (t4.__proto__ = b2, s2(t4, c2, "GeneratorFunction")), t4.prototype = Object.create(S2), t4;
          }, e3.awrap = function(t4) {
            return {
              __await: t4
            };
          }, E2(O2.prototype), s2(O2.prototype, u2, function() {
            return this;
          }), e3.AsyncIterator = O2, e3.async = function(t4, r3, n3, o3, i3) {
            void 0 === i3 && (i3 = Promise);
            var a3 = new O2(f2(t4, r3, n3, o3), i3);
            return e3.isGeneratorFunction(r3) ? a3 : a3.next().then(function(t5) {
              return t5.done ? t5.value : a3.next();
            });
          }, E2(S2), s2(S2, c2, "Generator"), s2(S2, a2, function() {
            return this;
          }), s2(S2, "toString", function() {
            return "[object Generator]";
          }), e3.keys = function(t4) {
            var e4 = Object(t4), r3 = [];
            for (var n3 in e4)
              r3.push(n3);
            return r3.reverse(), function t5() {
              for (; r3.length; ) {
                var n4 = r3.pop();
                if (n4 in e4)
                  return t5.value = n4, t5.done = false, t5;
              }
              return t5.done = true, t5;
            };
          }, e3.values = T2, I2.prototype = {
            constructor: I2,
            reset: function(e4) {
              if (this.prev = 0, this.next = 0, this.sent = this._sent = t3, this.done = false, this.delegate = null, this.method = "next", this.arg = t3, this.tryEntries.forEach(_2), !e4)
                for (var r3 in this)
                  "t" === r3.charAt(0) && n2.call(this, r3) && !isNaN(+r3.slice(1)) && (this[r3] = t3);
            },
            stop: function() {
              this.done = true;
              var t4 = this.tryEntries[0].completion;
              if ("throw" === t4.type)
                throw t4.arg;
              return this.rval;
            },
            dispatchException: function(e4) {
              if (this.done)
                throw e4;
              var r3 = this;
              function o3(n3, o4) {
                return u3.type = "throw", u3.arg = e4, r3.next = n3, o4 && (r3.method = "next", r3.arg = t3), !!o4;
              }
              for (var i3 = this.tryEntries.length - 1; i3 >= 0; --i3) {
                var a3 = this.tryEntries[i3], u3 = a3.completion;
                if ("root" === a3.tryLoc)
                  return o3("end");
                if (a3.tryLoc <= this.prev) {
                  var c3 = n2.call(a3, "catchLoc"), s3 = n2.call(a3, "finallyLoc");
                  if (c3 && s3) {
                    if (this.prev < a3.catchLoc)
                      return o3(a3.catchLoc, true);
                    if (this.prev < a3.finallyLoc)
                      return o3(a3.finallyLoc);
                  } else if (c3) {
                    if (this.prev < a3.catchLoc)
                      return o3(a3.catchLoc, true);
                  } else {
                    if (!s3)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a3.finallyLoc)
                      return o3(a3.finallyLoc);
                  }
                }
              }
            },
            abrupt: function(t4, e4) {
              for (var r3 = this.tryEntries.length - 1; r3 >= 0; --r3) {
                var o3 = this.tryEntries[r3];
                if (o3.tryLoc <= this.prev && n2.call(o3, "finallyLoc") && this.prev < o3.finallyLoc) {
                  var i3 = o3;
                  break;
                }
              }
              i3 && ("break" === t4 || "continue" === t4) && i3.tryLoc <= e4 && e4 <= i3.finallyLoc && (i3 = null);
              var a3 = i3 ? i3.completion : {};
              return a3.type = t4, a3.arg = e4, i3 ? (this.method = "next", this.next = i3.finallyLoc, y2) : this.complete(a3);
            },
            complete: function(t4, e4) {
              if ("throw" === t4.type)
                throw t4.arg;
              return "break" === t4.type || "continue" === t4.type ? this.next = t4.arg : "return" === t4.type ? (this.rval = this.arg = t4.arg, this.method = "return", this.next = "end") : "normal" === t4.type && e4 && (this.next = e4), y2;
            },
            finish: function(t4) {
              for (var e4 = this.tryEntries.length - 1; e4 >= 0; --e4) {
                var r3 = this.tryEntries[e4];
                if (r3.finallyLoc === t4)
                  return this.complete(r3.completion, r3.afterLoc), _2(r3), y2;
              }
            },
            catch: function(t4) {
              for (var e4 = this.tryEntries.length - 1; e4 >= 0; --e4) {
                var r3 = this.tryEntries[e4];
                if (r3.tryLoc === t4) {
                  var n3 = r3.completion;
                  if ("throw" === n3.type) {
                    var o3 = n3.arg;
                    _2(r3);
                  }
                  return o3;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function(e4, r3, n3) {
              return this.delegate = {
                iterator: T2(e4),
                resultName: r3,
                nextLoc: n3
              }, "next" === this.method && (this.arg = t3), y2;
            }
          }, e3;
        }
        function mt(t3, e3, r2, n2, o2, i2, a2) {
          try {
            var u2 = t3[i2](a2), c2 = u2.value;
          } catch (t4) {
            return void r2(t4);
          }
          u2.done ? e3(c2) : Promise.resolve(c2).then(n2, o2);
        }
        function bt(t3) {
          return function() {
            var e3 = this, r2 = arguments;
            return new Promise(function(n2, o2) {
              var i2 = t3.apply(e3, r2);
              function a2(t4) {
                mt(i2, n2, o2, a2, u2, "next", t4);
              }
              function u2(t4) {
                mt(i2, n2, o2, a2, u2, "throw", t4);
              }
              a2(void 0);
            });
          };
        }
        function wt(t3, e3) {
          for (var r2 = 0; r2 < e3.length; r2++) {
            var n2 = e3[r2];
            n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, kt(n2.key), n2);
          }
        }
        function xt(t3, e3, r2) {
          return (e3 = kt(e3)) in t3 ? Object.defineProperty(t3, e3, {
            value: r2,
            enumerable: true,
            configurable: true,
            writable: true
          }) : t3[e3] = r2, t3;
        }
        function kt(t3) {
          var e3 = function(t4, e4) {
            if ("object" !== yt(t4) || null === t4)
              return t4;
            var r2 = t4[Symbol.toPrimitive];
            if (void 0 !== r2) {
              var n2 = r2.call(t4, e4 || "default");
              if ("object" !== yt(n2))
                return n2;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === e4 ? String : Number)(t4);
          }(t3, "string");
          return "symbol" === yt(e3) ? e3 : String(e3);
        }
        var St = function() {
          function t3() {
            !function(t4, e4) {
              if (!(t4 instanceof e4))
                throw new TypeError("Cannot call a class as a function");
            }(this, t3), xt(this, "quickEditPanelVisible", false), xt(this, "scrollTop", 0);
          }
          var e3, r2, n2;
          return e3 = t3, r2 = [{
            key: "createDialogBox",
            value: function() {
              var t4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Wikiplus", e4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", r3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 600, n3 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {
              };
              $(".Wikiplus-InterBox").length > 0 && $(".Wikiplus-InterBox").each(function() {
                $(this).remove();
              });
              var o2 = window.innerWidth, i2 = window.innerHeight, a2 = Math.min(o2, r3), u2 = $("<div>").addClass("Wikiplus-InterBox").css({
                "margin-left": o2 / 2 - a2 / 2,
                top: $(document).scrollTop() + 0.2 * i2,
                display: "none"
              }).append($("<div>").addClass("Wikiplus-InterBox-Header").html(t4)).append($("<div>").addClass("Wikiplus-InterBox-Content").append(e4)).append($("<span>").text("×").addClass("Wikiplus-InterBox-Close"));
              return $("body").append(u2), $(".Wikiplus-InterBox").width(a2), $(".Wikiplus-InterBox-Close").on("click", function() {
                $(this).parent().fadeOut("fast", function() {
                  window.onclose = window.onbeforeunload = void 0, $(this).remove();
                });
              }), function t5(e5) {
                e5.mousedown(function(r4) {
                  var n4 = r4.clientX, o3 = r4.clientY, i3 = e5.parent().offset().left, a3 = e5.parent().offset().top;
                  $(document).on("mousemove", function(t6) {
                    e5.parent().css({
                      "margin-left": i3 + t6.clientX - n4,
                      top: a3 + t6.clientY - o3
                    });
                  }), $(document).on("mouseup", function() {
                    e5.unbind("mousedown"), $(document).off("mousemove"), $(document).off("mouseup"), t5(e5);
                  });
                });
              }($(".Wikiplus-InterBox-Header")), $(".Wikiplus-InterBox").fadeIn(500), n3(), u2;
            }
          }, {
            key: "addFunctionButton",
            value: function(t4, e4) {
              var r3;
              switch (i.skin) {
                case "minerva":
                  r3 = $("<li>").attr("id", e4).addClass("toggle-list-item").append($("<a>").addClass("mw-ui-icon mw-ui-icon-before toggle-list-item__anchor").append($("<span>").attr("href", "javascript:void(0);").addClass("toggle-list-item__label").text(t4)));
                  break;
                case "moeskin":
                  r3 = $("<li>").addClass("Wikiplus-More-Function-Button").attr("id", e4).append($("<a>").attr("href", "javascript:void(0);").text(t4));
                  break;
                default:
                  r3 = $("<li>").addClass("mw-list-item").addClass("vector-tab-noicon").attr("id", e4).append($("<a>").attr("href", "javascript:void(0);").text(t4));
              }
              return "minerva" === i.skin && $("#p-tb").length > 0 ? ($("#p-tb").append(r3), $("#".concat(e4))) : "moeskin" === i.skin ? ($(".more-actions-list").first().append(r3), $("#".concat(e4))) : $("#p-cactions").length > 0 ? ($("#p-cactions ul").append(r3), $("#".concat(e4))) : void M.info(P.translate("cant_add_funcbtn"));
            }
          }, {
            key: "insertSimpleRedirectButton",
            value: function() {
              var t4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {
              }, e4 = this.addFunctionButton(P.translate("redirect_from"), "Wikiplus-SR-Intro");
              e4 && e4.on("click", t4);
            }
          }, {
            key: "insertSettingsPanelButton",
            value: function() {
              var t4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {
              }, e4 = this.addFunctionButton(P.translate("wikiplus_settings"), "Wikiplus-Settings-Intro");
              e4 && e4.on("click", t4);
            }
          }, {
            key: "insertTopQuickEditEntry",
            value: function(t4) {
              var e4 = $("<li>").attr("id", "Wikiplus-Edit-TopBtn").attr("class", "mw-list-item"), r3 = $("<a>").attr("href", "javascript:void(0)").text("".concat(P.translate("quickedit_topbtn")));
              switch (e4.append(r3), i.skin) {
                case "minerva":
                  e4.css({
                    "align-items": "center",
                    display: "flex"
                  }), e4.find("span").addClass("page-actions-menu__list-item"), e4.find("a").addClass("mw-ui-icon mw-ui-icon-element mw-ui-icon-wikimedia-edit-base20 mw-ui-icon-with-label-desktop").css("vertical-align", "middle");
                  break;
                case "vector-2022":
                  e4.addClass("vector-tab-noicon");
                  break;
                case "vector":
                  e4.append($("<span>").append(r3));
              }
              $(e4).on("click", function() {
                t4({
                  sectionNumber: -1,
                  targetPageName: i.currentPageName
                });
              }), $("#ca-edit").length > 0 && 0 === $("#Wikiplus-Edit-TopBtn").length && ("minerva" === i.skin ? $("#ca-edit").parent().after(e4) : $("#ca-edit").after(e4));
            }
          }, {
            key: "insertSectionQuickEditEntries",
            value: function() {
              var t4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {
              }, e4 = "minerva" === i.skin ? $("<span>").append($("<a>").addClass("Wikiplus-Edit-SectionBtn mw-ui-icon mw-ui-icon-element mw-ui-icon-wikimedia-edit-base20 edit-page mw-ui-icon-flush-right").css("margin-left", "0.75em").attr("href", "javascript:void(0)").attr("title", P.translate("quickedit_sectionbtn"))) : $("<span>").append($("<span>").addClass("mw-editsection-divider").text(" | ")).append($("<a>").addClass("Wikiplus-Edit-SectionBtn").attr("href", "javascript:void(0)").text(P.translate("quickedit_sectionbtn")));
              $(".mw-editsection").each(function(r3) {
                try {
                  var n3 = $(this).find("a[href*='action=edit']").first().attr("href"), o2 = n3.match(/&[ve]*section\=([^&]+)/)[1].replace(/T-/gi, ""), a2 = decodeURIComponent(n3.match(/title=(.+?)&/)[1]), u2 = $(this).prev().clone();
                  u2.find(".mw-headline-number").remove();
                  var c2 = u2.text().trim(), s2 = e4.clone();
                  s2.find(".Wikiplus-Edit-SectionBtn").on("click", function() {
                    t4({
                      sectionNumber: o2,
                      sectionName: c2,
                      targetPageName: a2
                    });
                  }), "minerva" === i.skin ? $(this).append(s2) : $(this).find(".mw-editsection-bracket").last().before(s2);
                } catch (t5) {
                  M.error("fail_to_init_quickedit");
                }
              });
            }
          }, {
            key: "insertLinkEditEntries",
            value: function() {
              var t4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {
              };
              $("#mw-content-text a.external").each(function(e4) {
                var r3 = function(t5) {
                  for (var e5, r4 = /(([^?&=]+)(?:=([^?&=]*))*)/g, n3 = {}; e5 = r4.exec(t5); )
                    try {
                      n3[e5[2]] = decodeURIComponent(e5[3]);
                    } catch (t6) {
                      n3[e5[2]] = e5[3];
                    }
                  return n3;
                }($(this).attr("href"));
                "edit" === r3.action && void 0 !== r3.title && "new" !== r3.section && $(this).after($("<a>").attr({
                  href: "javascript:void(0)",
                  class: "Wikiplus-Edit-EveryWhereBtn"
                }).text("(".concat(P.translate("quickedit_sectionbtn"), ")")).on("click", function() {
                  var e5;
                  t4({
                    targetPageName: r3.title,
                    sectionNumber: null !== (e5 = r3.section) && void 0 !== e5 ? e5 : -1
                  });
                }));
              });
            }
          }, {
            key: "showQuickEditPanel",
            value: function(t4) {
              var e4 = t4.title, r3 = void 0 === e4 ? "" : e4, n3 = t4.content, o2 = void 0 === n3 ? "" : n3, i2 = t4.summary, a2 = void 0 === i2 ? "" : i2, u2 = t4.onBack, c2 = void 0 === u2 ? function() {
              } : u2, s2 = t4.onParse, f2 = void 0 === s2 ? function() {
              } : s2, l2 = t4.onEdit, p2 = void 0 === l2 ? function() {
              } : l2, h2 = t4.escExit, v2 = void 0 !== h2 && h2, d2 = this;
              this.scrollTop = $(document).scrollTop(), this.quickEditPanelVisible && this.hideQuickEditPanel(), this.quickEditPanelVisible = true, window.onclose = window.onbeforeunload = function() {
                return "".concat(P.translate("onclose_confirm"));
              };
              var y2 = $(".noarticletext").length > 0, g2 = $("<span>").attr("id", "Wikiplus-Quickedit-Back").addClass("Wikiplus-Btn").text("".concat(P.translate("back"))), m2 = $("<span>").attr("id", "Wikiplus-Quickedit-Jump").addClass("Wikiplus-Btn").append($("<a>").attr("href", "#Wikiplus-Quickedit").text("".concat(P.translate("goto_editbox")))), b2 = $("<textarea>").attr("id", "Wikiplus-Quickedit"), w2 = $("<div>").attr("id", "Wikiplus-Quickedit-Preview-Output"), x2 = $("<input>").attr("id", "Wikiplus-Quickedit-Summary-Input").attr("placeholder", "".concat(P.translate("summary_placehold"))), k2 = $("<button>").attr("id", "Wikiplus-Quickedit-Submit").text("".concat(P.translate(y2 ? "publish_page" : "publish_change"), "(Ctrl+S)")), S2 = $("<button>").attr("id", "Wikiplus-Quickedit-Preview-Submit").text("".concat(P.translate("preview"))), E2 = $("<div>").append($("<input>").attr({
                type: "checkbox",
                id: "Wikiplus-Quickedit-MinorEdit"
              })).append($("<label>").attr("for", "Wikiplus-Quickedit-MinorEdit").text("".concat(P.translate("mark_minoredit"), "(Ctrl+Shift+S)"))).css({
                margin: "5px 5px 5px -3px",
                display: "inline"
              }), O2 = $("<div>").append(g2, m2, w2, b2, x2, $("<br>"), E2, k2, S2);
              this.createDialogBox(r3, O2, 1e3, function() {
                $("#Wikiplus-Quickedit").val(o2), $("#Wikiplus-Quickedit-Summary-Input").val(a2);
              }), $("#Wikiplus-Quickedit-Back").on("click", c2), $("#Wikiplus-Quickedit-Preview-Submit").on("click", bt(gt().mark(function t5() {
                var e5, r4, n4;
                return gt().wrap(function(t6) {
                  for (; ; )
                    switch (t6.prev = t6.next) {
                      case 0:
                        return e5 = $("<div>").addClass("Wikiplus-Banner").text("".concat(P.translate("loading_preview"))), r4 = $("#Wikiplus-Quickedit").val(), $(this).attr("disabled", "disabled"), $("#Wikiplus-Quickedit-Preview-Output").fadeOut(100, function() {
                          $("#Wikiplus-Quickedit-Preview-Output").html("").append(e5), $("#Wikiplus-Quickedit-Preview-Output").fadeIn(100);
                        }), $("html, body").animate({
                          scrollTop: d2.scrollTop
                        }, 200), t6.next = 7, f2(r4);
                      case 7:
                        n4 = t6.sent, $("#Wikiplus-Quickedit-Preview-Output").fadeOut("100", function() {
                          $("#Wikiplus-Quickedit-Preview-Output").html('<hr><div class="mw-body-content">' + n4 + "</div><hr>"), $("#Wikiplus-Quickedit-Preview-Output").fadeIn("100"), $("#Wikiplus-Quickedit-Preview-Submit").prop("disabled", false);
                        });
                      case 9:
                      case "end":
                        return t6.stop();
                    }
                }, t5, this);
              }))), $("#Wikiplus-Quickedit-Submit").on("click", bt(gt().mark(function t5() {
                var e5, r4, n4, o3;
                return gt().wrap(function(t6) {
                  for (; ; )
                    switch (t6.prev = t6.next) {
                      case 0:
                        return e5 = (/* @__PURE__ */ new Date()).valueOf(), r4 = $("<div>").addClass("Wikiplus-Banner").text("".concat(P.translate("submitting_edit"))), n4 = {
                          summary: $("#Wikiplus-Quickedit-Summary-Input").val(),
                          content: $("#Wikiplus-Quickedit").val(),
                          isMinorEdit: $("#Wikiplus-Quickedit-MinorEdit").is(":checked")
                        }, $("#Wikiplus-Quickedit-Submit,#Wikiplus-Quickedit,#Wikiplus-Quickedit-Preview-Submit").attr("disabled", "disabled"), $("html, body").animate({
                          scrollTop: d2.scrollTop
                        }, 200), $("#Wikiplus-Quickedit-Preview-Output").fadeOut(100, function() {
                          $("#Wikiplus-Quickedit-Preview-Output").html("").append(r4), $("#Wikiplus-Quickedit-Preview-Output").fadeIn(100);
                        }), t6.prev = 6, t6.next = 9, p2(n4);
                      case 9:
                        o3 = (/* @__PURE__ */ new Date()).valueOf() - e5, $("#Wikiplus-Quickedit-Preview-Output").find(".Wikiplus-Banner").css("background", "rgba(6, 239, 92, 0.44)"), $("#Wikiplus-Quickedit-Preview-Output").find(".Wikiplus-Banner").text("".concat(P.translate("edit_success", [o3.toString()]))), window.onclose = window.onbeforeunload = void 0, setTimeout(function() {
                          location.reload();
                        }, 500), t6.next = 21;
                        break;
                      case 16:
                        t6.prev = 16, t6.t0 = t6.catch(6), console.log(t6.t0), $(".Wikiplus-Banner").css("background", "rgba(218, 142, 167, 0.65)"), $(".Wikiplus-Banner").html(t6.t0.message);
                      case 21:
                        return t6.prev = 21, $("#Wikiplus-Quickedit-Submit,#Wikiplus-Quickedit,#Wikiplus-Quickedit-Preview-Submit").prop("disabled", false), t6.finish(21);
                      case 24:
                      case "end":
                        return t6.stop();
                    }
                }, t5, null, [[6, 16, 21, 24]]);
              }))), $("#Wikiplus-Quickedit,#Wikiplus-Quickedit-Summary-Input,#Wikiplus-Quickedit-MinorEdit").on("keydown", function(t5) {
                t5.ctrlKey && 83 === t5.which && (t5.shiftKey && $("#Wikiplus-Quickedit-MinorEdit").trigger("click"), $("#Wikiplus-Quickedit-Submit").trigger("click"), t5.preventDefault(), t5.stopPropagation());
              }), v2 && $(document).on("keydown", function(t5) {
                27 === t5.which && $("#Wikiplus-Quickedit-Back").click();
              });
            }
          }, {
            key: "hideQuickEditPanel",
            value: function() {
              this.quickEditPanelVisible = false, $(".Wikiplus-InterBox").fadeOut("fast", function() {
                window.onclose = window.onbeforeunload = void 0, $(this).remove();
              });
            }
          }, {
            key: "showSimpleRedirectPanel",
            value: function() {
              var t4 = this, e4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r3 = e4.onEdit, n3 = void 0 === r3 ? function() {
              } : r3, o2 = e4.onSuccess, i2 = void 0 === o2 ? function() {
              } : o2, a2 = $("<input>").addClass("Wikiplus-InterBox-Input"), u2 = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-SR-Apply").text(P.translate("submit")), c2 = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-SR-Cancel").text(P.translate("cancel")), s2 = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-SR-Continue").text(P.translate("continue")), f2 = $("<div>").append(a2).append($("<hr>")).append(u2).append(c2), l2 = this.createDialogBox(P.translate("redirect_desc"), f2, 600);
              u2.on("click", bt(gt().mark(function e5() {
                var r4;
                return gt().wrap(function(e6) {
                  for (; ; )
                    switch (e6.prev = e6.next) {
                      case 0:
                        return r4 = $(".Wikiplus-InterBox-Input").val(), $(".Wikiplus-InterBox-Content").html('<div class="Wikiplus-Banner">'.concat(P.translate("submitting_edit"), "</div>")), e6.prev = 2, e6.next = 5, n3({
                          title: r4,
                          forceOverwrite: false
                        });
                      case 5:
                        $(".Wikiplus-Banner").text(P.translate("redirect_saved")), t4.hideSimpleRedirectPanel(l2), i2({
                          title: r4
                        }), e6.next = 15;
                        break;
                      case 10:
                        e6.prev = 10, e6.t0 = e6.catch(2), $(".Wikiplus-Banner").css("background", "rgba(218, 142, 167, 0.65)"), $(".Wikiplus-Banner").text(e6.t0.message), "articleexists" === e6.t0.code && ($(".Wikiplus-InterBox-Content").append($("<hr>")).append(s2).append(c2), c2.on("click", function() {
                          t4.hideSimpleRedirectPanel(l2);
                        }), s2.on("click", bt(gt().mark(function e7() {
                          return gt().wrap(function(e8) {
                            for (; ; )
                              switch (e8.prev = e8.next) {
                                case 0:
                                  return $(".Wikiplus-InterBox-Content").html('<div class="Wikiplus-Banner">'.concat(P.translate("submitting_edit"), "</div>")), e8.prev = 1, e8.next = 4, n3({
                                    title: r4,
                                    forceOverwrite: true
                                  });
                                case 4:
                                  $(".Wikiplus-Banner").text(P.translate("redirect_saved")), t4.hideSimpleRedirectPanel(l2), i2({
                                    title: r4
                                  }), e8.next = 13;
                                  break;
                                case 9:
                                  e8.prev = 9, e8.t0 = e8.catch(1), $(".Wikiplus-Banner").css("background", "rgba(218, 142, 167, 0.65)"), $(".Wikiplus-Banner").text(e8.t0.message);
                                case 13:
                                case "end":
                                  return e8.stop();
                              }
                          }, e7, null, [[1, 9]]);
                        }))));
                      case 15:
                      case "end":
                        return e6.stop();
                    }
                }, e5, null, [[2, 10]]);
              }))), c2.on("click", function() {
                t4.hideSimpleRedirectPanel(l2);
              });
            }
          }, {
            key: "hideSimpleRedirectPanel",
            value: function() {
              (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $("body")).find(".Wikiplus-InterBox-Close").trigger("click");
            }
          }, {
            key: "showSettingsPanel",
            value: function() {
              var t4 = this, e4 = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).onSubmit, r3 = void 0 === e4 ? function() {
              } : e4, n3 = $("<textarea>").attr("id", "Wikiplus-Setting-Input").attr("rows", "10"), o2 = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-Setting-Apply").text(P.translate("submit")), i2 = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-Setting-Cancel").text(P.translate("cancel")), a2 = $("<div>").append(n3).append($("<hr>")).append(o2).append(i2), u2 = this.createDialogBox(P.translate("wikiplus_settings_desc"), a2, 600, function() {
                if (localStorage.Wikiplus_Settings) {
                  $("#Wikiplus-Setting-Input").val(localStorage.Wikiplus_Settings);
                  try {
                    var t5 = JSON.parse(localStorage.Wikiplus_Settings);
                    $("#Wikiplus-Setting-Input").val(JSON.stringify(t5, null, 2));
                  } catch (t6) {
                  }
                } else
                  $("#Wikiplus-Setting-Input").attr("placeholder", P.translate("wikiplus_settings_placeholder"));
              });
              o2.on("click", bt(gt().mark(function e5() {
                var n4, o3;
                return gt().wrap(function(e6) {
                  for (; ; )
                    switch (e6.prev = e6.next) {
                      case 0:
                        return n4 = $("<div>").addClass("Wikiplus-Banner").text(P.translate("wikiplus_settings_saved")), o3 = $("#Wikiplus-Setting-Input").val(), e6.prev = 2, r3({
                          settings: o3
                        }), $(".Wikiplus-InterBox-Content").html("").append(n4), e6.next = 7, dt(1500);
                      case 7:
                        t4.hideSettingsPanel(u2), e6.next = 13;
                        break;
                      case 10:
                        e6.prev = 10, e6.t0 = e6.catch(2), vt.error(P.translate("wikiplus_settings_grammar_error"));
                      case 13:
                      case "end":
                        return e6.stop();
                    }
                }, e5, null, [[2, 10]]);
              }))), i2.on("click", function() {
                t4.hideSettingsPanel(u2);
              });
            }
          }, {
            key: "hideSettingsPanel",
            value: function() {
              (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $("body")).find(".Wikiplus-InterBox-Close").trigger("click");
            }
          }, {
            key: "bindPreloadEvents",
            value: function(t4) {
              $("#toc").children("ul").find("a").each(function(e4) {
                $(this).on("mouseover", function() {
                  $(this).off("mouseover"), t4({
                    sectionNumber: e4 + 1
                  });
                });
              });
            }
          }], r2 && wt(e3.prototype, r2), n2 && wt(e3, n2), Object.defineProperty(e3, "prototype", {
            writable: false
          }), t3;
        }(), Et = new St();
        function Ot(t3) {
          return Ot = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, Ot(t3);
        }
        function Pt(t3, e3) {
          for (var r2 = 0; r2 < e3.length; r2++) {
            var n2 = e3[r2];
            n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, jt(n2.key), n2);
          }
        }
        function jt(t3) {
          var e3 = function(t4, e4) {
            if ("object" !== Ot(t4) || null === t4)
              return t4;
            var r2 = t4[Symbol.toPrimitive];
            if (void 0 !== r2) {
              var n2 = r2.call(t4, e4 || "default");
              if ("object" !== Ot(n2))
                return n2;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === e4 ? String : Number)(t4);
          }(t3, "string");
          return "symbol" === Ot(e3) ? e3 : String(e3);
        }
        var Lt = function() {
          function t3() {
            !function(t4, e4) {
              if (!(t4 instanceof e4))
                throw new TypeError("Cannot call a class as a function");
            }(this, t3);
          }
          var e3, r2, n2;
          return e3 = t3, r2 = [{
            key: "getSetting",
            value: function(t4) {
              var e4, r3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n3 = r3;
              try {
                e4 = JSON.parse(localStorage.Wikiplus_Settings);
              } catch (t5) {
                return;
              }
              try {
                var o2 = new Function("return " + e4[t4]);
                if ("function" != typeof o2)
                  return e4[t4];
                try {
                  return true === o2()(n3) ? void 0 : o2()(n3) || e4[t4];
                } catch (r4) {
                  return e4[t4];
                }
              } catch (n4) {
                try {
                  for (var i2 = e4[t4], a2 = 0, u2 = Object.keys(r3); a2 < u2.length; a2++) {
                    var c2 = u2[a2];
                    i2 = i2.replace("${".concat(c2, "}"), r3[c2]);
                  }
                  return i2;
                } catch (t5) {
                  return;
                }
              }
            }
          }], r2 && Pt(e3.prototype, r2), n2 && Pt(e3, n2), Object.defineProperty(e3, "prototype", {
            writable: false
          }), t3;
        }(), _t = new Lt();
        function It(t3) {
          return It = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, It(t3);
        }
        function Tt(t3, e3) {
          var r2 = Object.keys(t3);
          if (Object.getOwnPropertySymbols) {
            var n2 = Object.getOwnPropertySymbols(t3);
            e3 && (n2 = n2.filter(function(e4) {
              return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
            })), r2.push.apply(r2, n2);
          }
          return r2;
        }
        function Rt(t3) {
          for (var e3 = 1; e3 < arguments.length; e3++) {
            var r2 = null != arguments[e3] ? arguments[e3] : {};
            e3 % 2 ? Tt(Object(r2), true).forEach(function(e4) {
              $t(t3, e4, r2[e4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(r2)) : Tt(Object(r2)).forEach(function(e4) {
              Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(r2, e4));
            });
          }
          return t3;
        }
        function $t(t3, e3, r2) {
          return (e3 = function(t4) {
            var e4 = function(t5, e5) {
              if ("object" !== It(t5) || null === t5)
                return t5;
              var r3 = t5[Symbol.toPrimitive];
              if (void 0 !== r3) {
                var n2 = r3.call(t5, e5 || "default");
                if ("object" !== It(n2))
                  return n2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === e5 ? String : Number)(t5);
            }(t4, "string");
            return "symbol" === It(e4) ? e4 : String(e4);
          }(e3)) in t3 ? Object.defineProperty(t3, e3, {
            value: r2,
            enumerable: true,
            configurable: true,
            writable: true
          }) : t3[e3] = r2, t3;
        }
        function Nt() {
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
          Nt = function() {
            return e3;
          };
          var t3, e3 = {}, r2 = Object.prototype, n2 = r2.hasOwnProperty, o2 = Object.defineProperty || function(t4, e4, r3) {
            t4[e4] = r3.value;
          }, i2 = "function" == typeof Symbol ? Symbol : {}, a2 = i2.iterator || "@@iterator", u2 = i2.asyncIterator || "@@asyncIterator", c2 = i2.toStringTag || "@@toStringTag";
          function s2(t4, e4, r3) {
            return Object.defineProperty(t4, e4, {
              value: r3,
              enumerable: true,
              configurable: true,
              writable: true
            }), t4[e4];
          }
          try {
            s2({}, "");
          } catch (t4) {
            s2 = function(t5, e4, r3) {
              return t5[e4] = r3;
            };
          }
          function f2(t4, e4, r3, n3) {
            var i3 = e4 && e4.prototype instanceof g2 ? e4 : g2, a3 = Object.create(i3.prototype), u3 = new I2(n3 || []);
            return o2(a3, "_invoke", {
              value: P2(t4, r3, u3)
            }), a3;
          }
          function l2(t4, e4, r3) {
            try {
              return {
                type: "normal",
                arg: t4.call(e4, r3)
              };
            } catch (t5) {
              return {
                type: "throw",
                arg: t5
              };
            }
          }
          e3.wrap = f2;
          var p2 = "suspendedStart", h2 = "suspendedYield", v2 = "executing", d2 = "completed", y2 = {};
          function g2() {
          }
          function m2() {
          }
          function b2() {
          }
          var w2 = {};
          s2(w2, a2, function() {
            return this;
          });
          var x2 = Object.getPrototypeOf, k2 = x2 && x2(x2(T2([])));
          k2 && k2 !== r2 && n2.call(k2, a2) && (w2 = k2);
          var S2 = b2.prototype = g2.prototype = Object.create(w2);
          function E2(t4) {
            ["next", "throw", "return"].forEach(function(e4) {
              s2(t4, e4, function(t5) {
                return this._invoke(e4, t5);
              });
            });
          }
          function O2(t4, e4) {
            function r3(o3, i4, a3, u3) {
              var c3 = l2(t4[o3], t4, i4);
              if ("throw" !== c3.type) {
                var s3 = c3.arg, f3 = s3.value;
                return f3 && "object" == It(f3) && n2.call(f3, "__await") ? e4.resolve(f3.__await).then(function(t5) {
                  r3("next", t5, a3, u3);
                }, function(t5) {
                  r3("throw", t5, a3, u3);
                }) : e4.resolve(f3).then(function(t5) {
                  s3.value = t5, a3(s3);
                }, function(t5) {
                  return r3("throw", t5, a3, u3);
                });
              }
              u3(c3.arg);
            }
            var i3;
            o2(this, "_invoke", {
              value: function(t5, n3) {
                function o3() {
                  return new e4(function(e5, o4) {
                    r3(t5, n3, e5, o4);
                  });
                }
                return i3 = i3 ? i3.then(o3, o3) : o3();
              }
            });
          }
          function P2(e4, r3, n3) {
            var o3 = p2;
            return function(i3, a3) {
              if (o3 === v2)
                throw new Error("Generator is already running");
              if (o3 === d2) {
                if ("throw" === i3)
                  throw a3;
                return {
                  value: t3,
                  done: true
                };
              }
              for (n3.method = i3, n3.arg = a3; ; ) {
                var u3 = n3.delegate;
                if (u3) {
                  var c3 = j2(u3, n3);
                  if (c3) {
                    if (c3 === y2)
                      continue;
                    return c3;
                  }
                }
                if ("next" === n3.method)
                  n3.sent = n3._sent = n3.arg;
                else if ("throw" === n3.method) {
                  if (o3 === p2)
                    throw o3 = d2, n3.arg;
                  n3.dispatchException(n3.arg);
                } else
                  "return" === n3.method && n3.abrupt("return", n3.arg);
                o3 = v2;
                var s3 = l2(e4, r3, n3);
                if ("normal" === s3.type) {
                  if (o3 = n3.done ? d2 : h2, s3.arg === y2)
                    continue;
                  return {
                    value: s3.arg,
                    done: n3.done
                  };
                }
                "throw" === s3.type && (o3 = d2, n3.method = "throw", n3.arg = s3.arg);
              }
            };
          }
          function j2(e4, r3) {
            var n3 = r3.method, o3 = e4.iterator[n3];
            if (o3 === t3)
              return r3.delegate = null, "throw" === n3 && e4.iterator.return && (r3.method = "return", r3.arg = t3, j2(e4, r3), "throw" === r3.method) || "return" !== n3 && (r3.method = "throw", r3.arg = new TypeError("The iterator does not provide a '" + n3 + "' method")), y2;
            var i3 = l2(o3, e4.iterator, r3.arg);
            if ("throw" === i3.type)
              return r3.method = "throw", r3.arg = i3.arg, r3.delegate = null, y2;
            var a3 = i3.arg;
            return a3 ? a3.done ? (r3[e4.resultName] = a3.value, r3.next = e4.nextLoc, "return" !== r3.method && (r3.method = "next", r3.arg = t3), r3.delegate = null, y2) : a3 : (r3.method = "throw", r3.arg = new TypeError("iterator result is not an object"), r3.delegate = null, y2);
          }
          function L2(t4) {
            var e4 = {
              tryLoc: t4[0]
            };
            1 in t4 && (e4.catchLoc = t4[1]), 2 in t4 && (e4.finallyLoc = t4[2], e4.afterLoc = t4[3]), this.tryEntries.push(e4);
          }
          function _2(t4) {
            var e4 = t4.completion || {};
            e4.type = "normal", delete e4.arg, t4.completion = e4;
          }
          function I2(t4) {
            this.tryEntries = [{
              tryLoc: "root"
            }], t4.forEach(L2, this), this.reset(true);
          }
          function T2(e4) {
            if (e4 || "" === e4) {
              var r3 = e4[a2];
              if (r3)
                return r3.call(e4);
              if ("function" == typeof e4.next)
                return e4;
              if (!isNaN(e4.length)) {
                var o3 = -1, i3 = function r4() {
                  for (; ++o3 < e4.length; )
                    if (n2.call(e4, o3))
                      return r4.value = e4[o3], r4.done = false, r4;
                  return r4.value = t3, r4.done = true, r4;
                };
                return i3.next = i3;
              }
            }
            throw new TypeError(It(e4) + " is not iterable");
          }
          return m2.prototype = b2, o2(S2, "constructor", {
            value: b2,
            configurable: true
          }), o2(b2, "constructor", {
            value: m2,
            configurable: true
          }), m2.displayName = s2(b2, c2, "GeneratorFunction"), e3.isGeneratorFunction = function(t4) {
            var e4 = "function" == typeof t4 && t4.constructor;
            return !!e4 && (e4 === m2 || "GeneratorFunction" === (e4.displayName || e4.name));
          }, e3.mark = function(t4) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t4, b2) : (t4.__proto__ = b2, s2(t4, c2, "GeneratorFunction")), t4.prototype = Object.create(S2), t4;
          }, e3.awrap = function(t4) {
            return {
              __await: t4
            };
          }, E2(O2.prototype), s2(O2.prototype, u2, function() {
            return this;
          }), e3.AsyncIterator = O2, e3.async = function(t4, r3, n3, o3, i3) {
            void 0 === i3 && (i3 = Promise);
            var a3 = new O2(f2(t4, r3, n3, o3), i3);
            return e3.isGeneratorFunction(r3) ? a3 : a3.next().then(function(t5) {
              return t5.done ? t5.value : a3.next();
            });
          }, E2(S2), s2(S2, c2, "Generator"), s2(S2, a2, function() {
            return this;
          }), s2(S2, "toString", function() {
            return "[object Generator]";
          }), e3.keys = function(t4) {
            var e4 = Object(t4), r3 = [];
            for (var n3 in e4)
              r3.push(n3);
            return r3.reverse(), function t5() {
              for (; r3.length; ) {
                var n4 = r3.pop();
                if (n4 in e4)
                  return t5.value = n4, t5.done = false, t5;
              }
              return t5.done = true, t5;
            };
          }, e3.values = T2, I2.prototype = {
            constructor: I2,
            reset: function(e4) {
              if (this.prev = 0, this.next = 0, this.sent = this._sent = t3, this.done = false, this.delegate = null, this.method = "next", this.arg = t3, this.tryEntries.forEach(_2), !e4)
                for (var r3 in this)
                  "t" === r3.charAt(0) && n2.call(this, r3) && !isNaN(+r3.slice(1)) && (this[r3] = t3);
            },
            stop: function() {
              this.done = true;
              var t4 = this.tryEntries[0].completion;
              if ("throw" === t4.type)
                throw t4.arg;
              return this.rval;
            },
            dispatchException: function(e4) {
              if (this.done)
                throw e4;
              var r3 = this;
              function o3(n3, o4) {
                return u3.type = "throw", u3.arg = e4, r3.next = n3, o4 && (r3.method = "next", r3.arg = t3), !!o4;
              }
              for (var i3 = this.tryEntries.length - 1; i3 >= 0; --i3) {
                var a3 = this.tryEntries[i3], u3 = a3.completion;
                if ("root" === a3.tryLoc)
                  return o3("end");
                if (a3.tryLoc <= this.prev) {
                  var c3 = n2.call(a3, "catchLoc"), s3 = n2.call(a3, "finallyLoc");
                  if (c3 && s3) {
                    if (this.prev < a3.catchLoc)
                      return o3(a3.catchLoc, true);
                    if (this.prev < a3.finallyLoc)
                      return o3(a3.finallyLoc);
                  } else if (c3) {
                    if (this.prev < a3.catchLoc)
                      return o3(a3.catchLoc, true);
                  } else {
                    if (!s3)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a3.finallyLoc)
                      return o3(a3.finallyLoc);
                  }
                }
              }
            },
            abrupt: function(t4, e4) {
              for (var r3 = this.tryEntries.length - 1; r3 >= 0; --r3) {
                var o3 = this.tryEntries[r3];
                if (o3.tryLoc <= this.prev && n2.call(o3, "finallyLoc") && this.prev < o3.finallyLoc) {
                  var i3 = o3;
                  break;
                }
              }
              i3 && ("break" === t4 || "continue" === t4) && i3.tryLoc <= e4 && e4 <= i3.finallyLoc && (i3 = null);
              var a3 = i3 ? i3.completion : {};
              return a3.type = t4, a3.arg = e4, i3 ? (this.method = "next", this.next = i3.finallyLoc, y2) : this.complete(a3);
            },
            complete: function(t4, e4) {
              if ("throw" === t4.type)
                throw t4.arg;
              return "break" === t4.type || "continue" === t4.type ? this.next = t4.arg : "return" === t4.type ? (this.rval = this.arg = t4.arg, this.method = "return", this.next = "end") : "normal" === t4.type && e4 && (this.next = e4), y2;
            },
            finish: function(t4) {
              for (var e4 = this.tryEntries.length - 1; e4 >= 0; --e4) {
                var r3 = this.tryEntries[e4];
                if (r3.finallyLoc === t4)
                  return this.complete(r3.completion, r3.afterLoc), _2(r3), y2;
              }
            },
            catch: function(t4) {
              for (var e4 = this.tryEntries.length - 1; e4 >= 0; --e4) {
                var r3 = this.tryEntries[e4];
                if (r3.tryLoc === t4) {
                  var n3 = r3.completion;
                  if ("throw" === n3.type) {
                    var o3 = n3.arg;
                    _2(r3);
                  }
                  return o3;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function(e4, r3, n3) {
              return this.delegate = {
                iterator: T2(e4),
                resultName: r3,
                nextLoc: n3
              }, "next" === this.method && (this.arg = t3), y2;
            }
          }, e3;
        }
        function Ct(t3, e3, r2, n2, o2, i2, a2) {
          try {
            var u2 = t3[i2](a2), c2 = u2.value;
          } catch (t4) {
            return void r2(t4);
          }
          u2.done ? e3(c2) : Promise.resolve(c2).then(n2, o2);
        }
        function At(t3) {
          return function() {
            var e3 = this, r2 = arguments;
            return new Promise(function(n2, o2) {
              var i2 = t3.apply(e3, r2);
              function a2(t4) {
                Ct(i2, n2, o2, a2, u2, "next", t4);
              }
              function u2(t4) {
                Ct(i2, n2, o2, a2, u2, "throw", t4);
              }
              a2(void 0);
            });
          };
        }
        $(At(Nt().mark(function t3() {
          var e3, r2, n2, o2, a2, u2, c2, s2, f2, l2;
          return Nt().wrap(function(t4) {
            for (; ; )
              switch (t4.prev = t4.next) {
                case 0:
                  if (e3 = {}, r2 = $(".noarticletext").length > 0 && 0 === i.articleId, n2 = function() {
                    var t5 = At(Nt().mark(function t6(r3) {
                      var n3, o3, i2;
                      return Nt().wrap(function(t7) {
                        for (; ; )
                          switch (t7.prev = t7.next) {
                            case 0:
                              if (n3 = r3.revisionId, o3 = r3.title, !e3[n3]) {
                                t7.next = 3;
                                break;
                              }
                              return t7.abrupt("return", e3[n3]);
                            case 3:
                              return i2 = new st({
                                revisionId: n3,
                                title: o3
                              }), t7.next = 6, i2.init();
                            case 6:
                              return e3[n3] = i2, t7.abrupt("return", e3[n3]);
                            case 8:
                            case "end":
                              return t7.stop();
                          }
                      }, t6);
                    }));
                    return function(e4) {
                      return t5.apply(this, arguments);
                    };
                  }(), M.info("Wikiplus now loading. Version: ".concat(i.version)), window.mw) {
                    t4.next = 7;
                    break;
                  }
                  return console.log("Mediawiki JavaScript not loaded or not a Mediawiki website."), t4.abrupt("return");
                case 7:
                  if (i.userGroups.includes("autoconfirmed")) {
                    t4.next = 11;
                    break;
                  }
                  return vt.error(P.translate("not_autoconfirmed_user")), M.info(P.translate("not_autoconfirmed_user")), t4.abrupt("return");
                case 11:
                  if (i.isArticle && "view" === i.action) {
                    t4.next = 14;
                    break;
                  }
                  return M.info("Not an editable page. Stop initialization."), t4.abrupt("return");
                case 14:
                  return window._WikiplusPages = e3, o2 = i.currentPageName, a2 = i.revisionId, t4.next = 19, n2({
                    revisionId: a2,
                    title: o2
                  });
                case 19:
                  u2 = t4.sent, c2 = function() {
                    var t5 = At(Nt().mark(function t6() {
                      var e4, a3, u3, c3, s3, f3, l3, p2, h2, v2, d2, y2, g2, m2, b2, w2, x2, k2 = arguments;
                      return Nt().wrap(function(t7) {
                        for (; ; )
                          switch (t7.prev = t7.next) {
                            case 0:
                              if (a3 = (e4 = k2.length > 0 && void 0 !== k2[0] ? k2[0] : {}).sectionNumber, u3 = e4.sectionName, c3 = e4.targetPageName, !(s3 = c3 !== o2) || i.latestRevisionId === i.revisionId) {
                                t7.next = 5;
                                break;
                              }
                              return M.error("cross_page_history_revision_edit_warning"), t7.abrupt("return");
                            case 5:
                              if (!s3) {
                                t7.next = 11;
                                break;
                              }
                              return t7.next = 8, X.getLatestRevisionIdForPage(c3);
                            case 8:
                              t7.t0 = t7.sent, t7.next = 12;
                              break;
                            case 11:
                              t7.t0 = i.revisionId;
                            case 12:
                              return f3 = t7.t0, t7.next = 15, n2({
                                revisionId: f3,
                                title: c3
                              });
                            case 15:
                              return l3 = t7.sent, p2 = _t.getSetting("defaultSummary", {
                                sectionName: u3,
                                sectionNumber: a3,
                                sectionTargetName: c3
                              }), h2 = p2 || (u3 ? "/* ".concat(u3, " */ ").concat(P.translate("default_summary_suffix")) : P.translate("default_summary_suffix")), v2 = setTimeout(function() {
                                vt.success(P.translate("loading"));
                              }, 200), t7.next = 21, l3.getWikiText({
                                section: a3
                              });
                            case 21:
                              d2 = t7.sent, y2 = !s3 && i.latestRevisionId !== i.revisionId, g2 = true === _t.getSetting("esc_to_exit_quickedit") || "true" === _t.getSetting("esc_to_exit_quickedit") || true === _t.getSetting("escToExitQuickEdit") || "true" === _t.getSetting("escToExitQuickEdit"), m2 = _t.getSetting("custom_edit_tags"), b2 = location.host.includes("zh.wikipedia.org") || location.host.includes("zh.m.wikipedia.org") ? ["wikiplus"] : [], w2 = null != m2 && m2.length ? m2 : b2, clearTimeout(v2), vt.empty(), y2 && vt.warning(P.translate("history_edit_warning")), x2 = s3 ? !f3 : r2, Et.showQuickEditPanel({
                                title: "".concat(P.translate("quickedit_topbtn")).concat(y2 ? P.translate("history_edit_warning") : ""),
                                content: x2 ? P.translate("create_page_tip") : d2,
                                summary: h2,
                                onBack: Et.hideQuickEditPanel,
                                onParse: function(t8) {
                                  return l3.parseWikiText(t8);
                                },
                                onEdit: function() {
                                  var t8 = At(Nt().mark(function t9(e5) {
                                    var r3, n3, o3, i2;
                                    return Nt().wrap(function(t10) {
                                      for (; ; )
                                        switch (t10.prev = t10.next) {
                                          case 0:
                                            return r3 = e5.content, n3 = e5.summary, o3 = e5.isMinorEdit, i2 = {
                                              content: r3,
                                              config: Rt(Rt({
                                                summary: n3
                                              }, -1 !== a3 ? {
                                                section: a3
                                              } : {}), w2.length ? {
                                                tags: w2.join("|")
                                              } : {})
                                            }, o3 ? i2.config.minor = "true" : i2.config.notminor = "true", t10.next = 5, l3.edit(i2);
                                          case 5:
                                          case "end":
                                            return t10.stop();
                                        }
                                    }, t9);
                                  }));
                                  return function(e5) {
                                    return t8.apply(this, arguments);
                                  };
                                }(),
                                escExit: g2
                              });
                            case 32:
                            case "end":
                              return t7.stop();
                          }
                      }, t6);
                    }));
                    return function() {
                      return t5.apply(this, arguments);
                    };
                  }(), s2 = function() {
                    var t5 = At(Nt().mark(function t6() {
                      return Nt().wrap(function(t7) {
                        for (; ; )
                          switch (t7.prev = t7.next) {
                            case 0:
                              Et.showSimpleRedirectPanel({
                                onEdit: function() {
                                  var t8 = At(Nt().mark(function t9(e4) {
                                    var r3, o3, a3, u3, c3, s3;
                                    return Nt().wrap(function(t10) {
                                      for (; ; )
                                        switch (t10.prev = t10.next) {
                                          case 0:
                                            return r3 = e4.title, o3 = e4.forceOverwrite, a3 = void 0 !== o3 && o3, t10.next = 3, n2({
                                              title: r3
                                            });
                                          case 3:
                                            return u3 = t10.sent, c3 = i.currentPageName, s3 = {
                                              content: "#REDIRECT [[".concat(c3, "]]"),
                                              config: {
                                                summary: P.translate("redirect_from_summary", [r3, c3])
                                              }
                                            }, a3 || (s3.config.createonly = "true"), t10.next = 9, u3.edit(s3);
                                          case 9:
                                          case "end":
                                            return t10.stop();
                                        }
                                    }, t9);
                                  }));
                                  return function(e4) {
                                    return t8.apply(this, arguments);
                                  };
                                }(),
                                onSuccess: function(t8) {
                                  var e4 = t8.title;
                                  location.href = i.articlePath.replace(/\$1/gi, e4);
                                }
                              });
                            case 1:
                            case "end":
                              return t7.stop();
                          }
                      }, t6);
                    }));
                    return function() {
                      return t5.apply(this, arguments);
                    };
                  }(), f2 = function() {
                    var t5 = At(Nt().mark(function t6() {
                      return Nt().wrap(function(t7) {
                        for (; ; )
                          switch (t7.prev = t7.next) {
                            case 0:
                              Et.showSettingsPanel({
                                onSubmit: function(t8) {
                                  var e4 = t8.settings;
                                  JSON.parse(e4), localStorage.setItem("Wikiplus_Settings", e4);
                                }
                              });
                            case 1:
                            case "end":
                              return t7.stop();
                          }
                      }, t6);
                    }));
                    return function() {
                      return t5.apply(this, arguments);
                    };
                  }(), l2 = function() {
                    var t5 = At(Nt().mark(function t6(e4) {
                      var r3;
                      return Nt().wrap(function(t7) {
                        for (; ; )
                          switch (t7.prev = t7.next) {
                            case 0:
                              return r3 = e4.sectionNumber, t7.next = 3, u2.getWikiText({
                                section: r3
                              });
                            case 3:
                            case "end":
                              return t7.stop();
                          }
                      }, t6);
                    }));
                    return function(e4) {
                      return t5.apply(this, arguments);
                    };
                  }(), Et.insertTopQuickEditEntry(c2), Et.insertSectionQuickEditEntries(c2), Et.insertLinkEditEntries(c2), Et.insertSimpleRedirectButton(s2), Et.insertSettingsPanelButton(f2), Et.bindPreloadEvents(l2);
                case 30:
                case "end":
                  return t4.stop();
              }
          }, t3);
        })));
      }();
    })();
  }
});
//! src/Wikiplus/modules/highlight.js
var highlight_exports = {};
var init_highlight = __esm({
  "src/Wikiplus/modules/highlight.js"() {
    "use strict";
    /*! Wikiplus-highlight | Bhsd, 机智的小鱼君 | GPL-3.0 <https://qwbk.cc/H:GPL-3.0> */
    (() => {
      if ("wphl" in mw.libs) {
        return;
      }
      const version = "3.0.2";
      mw.libs["wphl"] = {
        version
      };
      const CDN = "//testingcf.jsdelivr.net", MW_CDN = "npm/@bhsd/codemirror-mediawiki@2.4.5/dist/mw.min.js", REPO_CDN = "npm/wikiplus-highlight";
      const {
        wgPageName: page,
        wgNamespaceNumber: ns,
        wgPageContentModel: contentmodel
      } = mw.config.get();
      const CONTENTMODEL = {
        "sanitized-css": "css",
        wikitext: "mediawiki"
      };
      const getObject = mw.storage.getObject || ((key) => {
        return JSON.parse(String(localStorage.getItem(key)));
      });
      const init = () => {
        return "CodeMirror6" in window ? Promise.resolve() : new Promise((resolve) => {
          const script = document.createElement("script");
          script.addEventListener("load", () => {
            resolve();
          });
          script.type = "module";
          script.src = "".concat(CDN, "/").concat(MW_CDN);
          document.head.append(script);
        });
      };
      const getPageMode = /* @__PURE__ */ function() {
        var _ref = _asyncToGenerator(function* () {
          if (ns !== 274 && contentmodel !== "Scribunto" || page.endsWith("/doc")) {
            return CONTENTMODEL[contentmodel] || contentmodel;
          }
          yield mw.loader.using("oojs-ui-windows");
          if (yield OO.ui.confirm(mw.msg("cm-mw-contentmodel"), {
            actions: [{
              label: ns === 274 ? "Widget" : "Lua"
            }, {
              label: "Wikitext",
              action: "accept"
            }]
          })) {
            return "mediawiki";
          }
          return ns === 274 ? "html" : "lua";
        });
        return function getPageMode2() {
          return _ref.apply(this, arguments);
        };
      }();
      const renderEditor = /* @__PURE__ */ function() {
        var _ref2 = _asyncToGenerator(function* ($target, setting) {
          yield init();
          const cm = yield CodeMirror6.fromTextArea($target[0], setting ? "json" : yield getPageMode());
          cm.view.dom.id = "Wikiplus-CodeMirror";
          document.querySelector("#Wikiplus-Quickedit-Jump > a").href = "#Wikiplus-CodeMirror";
          if (!setting) {
            const settings = getObject("Wikiplus_Settings"), escToExitQuickEdit = settings && (settings["esc_to_exit_quickedit"] || settings["escToExitQuickEdit"]), submit = (
              /** 提交编辑 */
              () => {
                document.querySelector("#Wikiplus-Quickedit-Submit").dispatchEvent(new MouseEvent("click"));
                return true;
              }
            ), submitMinor = (
              /** 提交小编辑 */
              () => {
                document.querySelector("#Wikiplus-Quickedit-MinorEdit").checked = true;
                return submit();
              }
            ), escapeEdit = (
              /** 按下Esc键退出编辑 */
              () => {
                document.querySelector("#Wikiplus-Quickedit-Back").dispatchEvent(new MouseEvent("click"));
                return true;
              }
            );
            cm.extraKeys([{
              key: "Mod-S",
              run: submit
            }, {
              key: "Shift-Mod-S",
              run: submitMinor
            }, ...escToExitQuickEdit === true || escToExitQuickEdit === "true" ? [{
              key: "Esc",
              run: escapeEdit
            }] : []]);
          }
          const oldKey = "Wikiplus-highlight-addons", oldPrefs = getObject(oldKey), mapping = {
            activeLine: "highlightActiveLine",
            trailingspace: "highlightTrailingWhitespace",
            matchBrackets: "bracketMatching",
            closeBrackets: "closeBrackets",
            matchTags: "tagMatching",
            fold: "codeFolding",
            wikiEditor: "wikiEditor",
            escape: "escape",
            contextmenu: "openLinks",
            lint: "lint"
          };
          localStorage.removeItem(oldKey);
          if (oldPrefs) {
            const obj = {};
            var _iterator = _createForOfIteratorHelper(oldPrefs), _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                const k = _step.value;
                if (k in mapping) {
                  obj[mapping[k]] = true;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            cm.prefer(obj);
          }
        });
        return function renderEditor2(_x, _x2) {
          return _ref2.apply(this, arguments);
        };
      }();
      const observer = new MutationObserver((records) => {
        const $editArea = $(records.flatMap(({
          addedNodes
        }) => {
          return [...addedNodes];
        })).find("#Wikiplus-Quickedit, #Wikiplus-Setting-Input");
        if ($editArea.length > 0) {
          void renderEditor($editArea, $editArea.attr("id") === "Wikiplus-Setting-Input");
        }
      });
      observer.observe(document.body, {
        childList: true
      });
      mw.loader.load("".concat(CDN, "/").concat(REPO_CDN, "@").concat(version, "/styles.min.css"), "text/css");
    })();
  }
});
//! src/Wikiplus/Wikiplus.ts
_asyncToGenerator(function* () {
  const {
    wgAction,
    wgIsArticle
  } = mw.config.get();
  if (wgAction !== "view" || !wgIsArticle) {
    return;
  }
  const {
    "gadget-Wikiplus-highlight": isWphlEnable,
    "visualeditor-enable": isVeEnable
  } = mw.user.options.get();
  const loader = /* @__PURE__ */ function() {
    var _ref4 = _asyncToGenerator(function* () {
      /*! Wikiplus - 4.0.11 | Eridanus Sora (妹空酱) | CC-BY-SA-4.0 <https://qwbk.cc/H:CC-BY-SA-4.0> */
      yield Promise.resolve().then(() => (init_core(), core_exports));
      if (!("ontouchstart" in document) && isWphlEnable) {
        /*! Wikiplus-highlight | Bhsd, 机智的小鱼君 | GPL-3.0 <https://qwbk.cc/H:GPL-3.0> */
        yield Promise.resolve().then(() => (init_highlight(), highlight_exports));
      }
    });
    return function loader2() {
      return _ref4.apply(this, arguments);
    };
  }();
  if (isVeEnable) {
    yield mw.loader.using("ext.visualEditor.core");
  }
  void loader();
})();

})();

/* </nowiki> */
