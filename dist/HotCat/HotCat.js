/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title=HotCat|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://commons.wikimedia.org/wiki/MediaWiki:Gadget-HotCat.js}
 * @base {@link https://commons.wikimedia.org/wiki/MediaWiki:Gadget-HotCat.js/zh-hans}
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-HotCat.js/local_defaults}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/HotCat}
 * @license CC-BY-SA-4.0 {@link https://youshou.wiki/wiki/H:CC-BY-SA-4.0}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title=CheckCategories HotCat Extension|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://commons.wikimedia.org/wiki/MediaWiki:Gadget-Hotcatcheck.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/HotCat-check.js}
 * @license CC-BY-SA-4.0 {@link https://youshou,wiki/wiki/H:CC-BY-SA-4.0}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-3.0 + GFDL-1.3-no-invariants-or-later
 *
 * P no
 *
 * @base {@link https://www.qiuwenbaike.cn/wiki/File:P_no.svg}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/HotCat/images}
 * @license CC-BY-SA-3.0 + GFDL-1.3-no-invariants-or-later {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-3.0}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-3.0 + GFDL-1.3-no-invariants-or-later
 *
 * P yes
 *
 * @base {@link https://www.qiuwenbaike.cn/wiki/File:P_yes.svg}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/HotCat/images}
 * @license CC-BY-SA-3.0 + GFDL-1.3-no-invariants-or-later {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-3.0}
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
    var navigator2 = globalThis2.navigator;
    var userAgent = navigator2 && navigator2.userAgent;
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

// dist/HotCat/HotCat.js
require_es_iterator_constructor();
require_es_iterator_filter();
require_es_iterator_find();
var _templateObject;
var _templateObject2;
var _templateObject3;
var _templateObject4;
var _templateObject5;
var _templateObject6;
var _templateObject7;
var _templateObject8;
var _templateObject9;
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
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
//! src/HotCat/modules/check.module.less
var catcheckInlineIcon = "check-module__catcheckInlineIcon_mJ5NDq__4100";
//! src/HotCat/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var mwApi = (userAgent) => {
  return (0, import_ext_gadget.initMwApi)(userAgent);
};
//! src/HotCat/modules/check.ts
(function hotCatCheck() {
  if (mw.config.get("wgNamespaceNumber") !== 6 || window.HotCatAutoRemoveCheckCatOptOut || !document.querySelector(".checkcategories")) {
    return;
  }
  const api = mwApi("hotCatCheck/2.0");
  const checkCategoriesRegExp = /{{[Cc]heck[ _]categories[^{}]*}}/g;
  const selfName = "([[MediaWiki:Gadget-HotCat-check.js|Script]]): ";
  const storageItemName = "checkCat";
  const storageItem = mw.storage.get(storageItemName);
  const createjIcon = (iconClass) => {
    return $("<span>").attr("class", "ui-icon ".concat(iconClass, " ").concat(catcheckInlineIcon)).text(" ");
  };
  const createNotifyArea = (textNode, icon, state) => {
    return $("<div>").addClass("ui-widget").append($("<div>").attr("class", "".concat(state, " ui-corner-all")).css({
      "margin-top": "20px",
      padding: "0.7em"
    }).append($("<p>").append(createjIcon(icon).css("marginRight", "0.3em"), textNode)));
  };
  $("body").one("submit.checkCatListener", "#hotcatCommitForm", function(e) {
    var _self$wpTextbox1$valu;
    if (storageItem === "disabled") {
      return true;
    }
    const self2 = this;
    const newVal = (_self$wpTextbox1$valu = self2.wpTextbox1.value) === null || _self$wpTextbox1$valu === void 0 ? void 0 : _self$wpTextbox1$valu.replace(checkCategoriesRegExp, "");
    const dlgButtons = {};
    let $dialogCheckStorage;
    let $permaSaveHint;
    let $textHintNode;
    let $dialog;
    const doRemove = () => {
      self2.wpSummary.value = "Removing [[Template:Check categories|{{Check categories}}]] ".concat(self2.wpSummary.value);
      self2.wpTextbox1.value = newVal;
    };
    const writeStorage = (val) => {
      mw.storage.set(storageItemName, val, 60 * 60 * 24 * 7);
    };
    dlgButtons["Yes, Remove"] = function() {
      var _$dialogCheckStorage$;
      doRemove();
      if ((_$dialogCheckStorage$ = $dialogCheckStorage[0]) !== null && _$dialogCheckStorage$ !== void 0 && _$dialogCheckStorage$.checked) {
        writeStorage("auto");
      }
      $(this).dialog("close");
    };
    dlgButtons["No, keep it"] = function() {
      var _$dialogCheckStorage$2;
      if ((_$dialogCheckStorage$2 = $dialogCheckStorage[0]) !== null && _$dialogCheckStorage$2 !== void 0 && _$dialogCheckStorage$2.checked) {
        writeStorage("disabled");
      }
      $(this).dialog("close");
    };
    const _addToJS = function(_e) {
      _e.preventDefault();
      if ($permaSaveHint.hasClass("ui-state-disabled")) {
        return;
      }
      const $el = $(this);
      $el.off("click").text("Please wait.");
      $permaSaveHint.addClass("ui-state-disabled");
      const params = {
        action: "edit",
        format: "json",
        title: "User:".concat(mw.config.get("wgUserName"), "/common.js"),
        summary: "".concat(selfName, "Saving HotCat configuration."),
        appendtext: $el.data("addText")
      };
      const editDone = (editStat) => {
        if (!editStat) {
          return;
        }
        if (editStat.error) {
          void mw.notify("Unable to save to your common.js using the API\n".concat(editStat.error.code, "\n").concat(editStat.error.info), {
            tag: "hotCatCheck",
            type: "error"
          });
          $el.text("Edit-Error!");
        } else {
          $el.text("Done.");
          $permaSaveHint.fadeOut();
        }
      };
      void api.postWithToken("csrf", params).then(editDone);
    };
    const prompt = () => {
      $dialogCheckStorage = $("<input>").attr({
        type: "checkbox",
        id: "hotCatAutoRemoveCheckCatStorage"
      }).on("change", function() {
        if (this.checked) {
          $permaSaveHint.fadeIn();
        } else {
          $permaSaveHint.fadeOut();
        }
      });
      $textHintNode = $("<ul>");
      $("<li>").append($("<a>").attr("href", "#").text("Disable this feature.").data("addText", "\nwindow.HotCatAutoRemoveCheckCatOptOut = true;").on("click", _addToJS)).appendTo($textHintNode);
      $("<li>").append($("<a>").attr("href", "#").text("Remove {{check categories}} when editing using HotCat without prompting.").data("addText", "\nwindow.HotCatAutoRemoveCheckCat = true;").on("click", _addToJS)).appendTo($textHintNode);
      $permaSaveHint = createNotifyArea($("<span>").text("Save these setting in your common.js: ").append($textHintNode), "ui-icon-info", "ui-state-highlight");
      $dialog = $("<div>").append($("<span>").css({
        "font-size": "2em",
        "line-height": "1.8em"
      }).append($("<span>").text(" {{check categories}} ").css({
        "background-color": "#F8CCB0",
        "text-decoration": "line-through !important",
        display: "inline-block"
      }), $("<span>").text(" ?"))).append("<br>", $dialogCheckStorage, $("<label>").attr("for", "hotCatAutoRemoveCheckCatStorage").text("Don't ask again"), "<br>").append(mw.user.isAnon() ? "" : $permaSaveHint.hide());
      $dialog.dialog({
        modal: true,
        closeOnEscape: true,
        title: "{{check categories}} (−)?",
        width: 450,
        buttons: dlgButtons,
        close: () => {
          const $body = $("body");
          $body.find("#hotcatCommitForm").trigger("submit");
        },
        open() {
          const $buttons = $(this).parent().find(".ui-dialog-buttonpane button");
          $buttons.eq(0).button({
            icons: {
              primary: "ui-icon-circle-check"
            }
          });
          $buttons.eq(1).button({
            icons: {
              primary: "ui-icon-cancel"
            }
          });
        }
      });
    };
    if (newVal !== self2.wpTextbox1.value) {
      if (window.HotCatAutoRemoveCheckCat || storageItem === "auto") {
        doRemove();
        return true;
      }
      e.preventDefault();
      prompt();
    }
    return true;
  });
  const $okLink = $("<a>").attr({
    href: "#",
    title: "Categories are OK! Immediately remove the template."
  }).append("<s>").text("{{Check categories}}");
  $okLink.on("click", function(e) {
    e.preventDefault();
    const $el = $(this);
    $el.off("click");
    const doEdit = (result) => {
      if (!result) {
        return;
      }
      $el.text("Doing.");
      const text = result.replace(checkCategoriesRegExp, "");
      if (text === result) {
        $el.text("Template not found!");
        return;
      }
      const params = {
        text,
        action: "edit",
        format: "json",
        title: mw.config.get("wgPageName"),
        summary: "".concat(selfName, "Categories are checked and OK. You can help [[Category:Media needing category review|reviewing]]!"),
        nocreate: true
      };
      const editDone = (editStat) => {
        if (!editStat) {
          return;
        }
        if (editStat.error) {
          void mw.notify('Unable to remove "Check categories" with the API\n'.concat(editStat.error.code, "\n").concat(editStat.error.info), {
            tag: "hotCatCheck",
            type: "error"
          });
          $el.text("Edit-Error!");
        } else {
          $el.text("Edit Done.");
        }
        const $body = $("body");
        $body.find(".checkcategories").fadeOut();
      };
      $el.text("Doing..");
      void api.postWithToken("csrf", params).then(editDone);
    };
    $el.text("Doing");
    void $.ajax({
      url: mw.config.get("wgScript"),
      data: {
        action: "raw",
        title: mw.config.get("wgPageName").replace(/ /g, "_")
      },
      dataType: "text",
      error: () => {
        $el.text("Error!");
      },
      success: doEdit,
      type: "GET",
      cache: false
    });
  });
  $(function loadHotCatCheck() {
    const $body = $("body");
    $body.find("#catlinks").find("ul:first").append($("<li>").append($okLink));
  });
})();
//! src/HotCat/HotCat.js
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/HotCat/modules/getMessage.ts
var getMessage = (key, ...args) => {
  key = "hotcat-".concat(key);
  return mw.message(key, ...args).plain();
};
//! src/HotCat/modules/messages.ts
var hotCatMessages = () => {
  const {
    wgUserLanguage
  } = mw.config.get();
  if (["zh-hant", "zh-hk", "zh-mo", "zh-tw"].includes(wgUserLanguage)) {
    mw.messages.set({
      "hotcat-messages-cat_removed": "已移除[[Category:$1]]",
      "hotcat-messages-template_removed": "已移除{{[[Category:$1]]}}",
      "hotcat-messages-cat_added": "已添加[[Category:$1]]",
      // $2 is the new key
      "hotcat-messages-cat_keychange": '已設置[[Category:$1]]的新排序字："$2"',
      "hotcat-messages-cat_notFound": "分類“$1”沒有找到",
      "hotcat-messages-cat_exists": "分類“$1”已經存在，沒有添加。",
      "hotcat-messages-cat_resolved": "（重定向[[Category:$1]]已處理）",
      "hotcat-messages-uncat_removed": "已移除{{uncategorized}}",
      // Some text to prefix to the edit summary.
      "hotcat-messages-prefix": "使用[[H:HOTCAT|HotCat]]",
      // Some text to append to the edit summary. Named 'using' for historical reasons. If you prefer
      // to have a marker at the front, use prefix and set this to the empty string.
      "hotcat-messages-using": "",
      "hotcat-messages-multi_change": "$1個分類",
      // Any category in this category is deemed a disambiguation category; i.e., a category that should not contain
      // any items, but that contains links to other categories where stuff should be categorized. If you don't have
      // that concept on your wiki, set it to blank string. Use blanks, not underscores.
      "hotcat-disambig_category": "",
      // Any category in this category is deemed a (soft) redirect to some other category defined by a link
      // to another non-blacklisted category. If your wiki doesn't have soft category redirects, set this to null.
      // If a soft-redirected category contains more than one link to another non-blacklisted category, it's considered
      // a disambiguation category instead.
      "hotcat-redir_category": "已重定向的分类",
      "hotcat-messages-separator": "; ",
      // $1 is replaced by a number. If your language has several plural forms (c.f. [[:enwiki:Dual (grammatical form)]]),
      // you can set this to an array of strings suitable for passing to mw.language.configPlural().
      // If that function doesn't exist, HotCat will simply fall back to using the last
      // entry in the array.
      // Defaults to '[[' + category_canonical + ':$1]]'. Can be overridden if in the short edit summaries
      // not the standard category name should be used but, say, a shorter namespace alias. $1 is replaced
      // by a category name.
      "hotcat-messages-short_catchange": "$1",
      // Button text. Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
      // see localization hook below.
      "hotcat-messages-commit": "儲存",
      // Button text. Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
      // see localization hook below.
      "hotcat-messages-ok": "確定",
      // Button text. Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
      // see localization hook below.
      "hotcat-messages-cancel": "取消",
      // Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
      // see localization hook below.
      "hotcat-messages-multi_error": "無法從伺服器取得頁面文字。因此，您的分類變更無法儲存。我們為此不便表示抱歉。",
      // Plural of category_canonical.
      "hotcat-categories": "分類",
      // Names for the search engines
      "hotcat-engine_names-searchindex": "搜尋索引",
      "hotcat-engine_names-pagelist": "頁面列表",
      "hotcat-engine_names-combined": "合併搜尋",
      "hotcat-engine_names-subcat": "子分類",
      "hotcat-engine_names-parentcat": "上層分類",
      // The tooltips for the above links
      "hotcat-tooltips-change": "修改",
      "hotcat-tooltips-remove": "移除",
      "hotcat-tooltips-add": "增加一個新分類",
      "hotcat-tooltips-restore": "復原變更",
      "hotcat-tooltips-undo": "復原變更",
      "hotcat-tooltips-down": "打開以修改並顯示子分類",
      "hotcat-tooltips-up": "打開以修改並顯示上層分類",
      // Tooltip for the "enter multi-mode" link
      "hotcat-multi_tooltip": "修改多個分類"
    });
  } else {
    mw.messages.set({
      "hotcat-messages-cat_removed": "已移除[[Category:$1]]",
      "hotcat-messages-template_removed": "已移除{{[[Category:$1]]}}",
      "hotcat-messages-cat_added": "已添加[[Category:$1]]",
      // $2 is the new key
      "hotcat-messages-cat_keychange": '已设置[[Category:$1]]的新排序字："$2"',
      "hotcat-messages-cat_notFound": "分类“$1”没有找到",
      "hotcat-messages-cat_exists": "分类“$1”已经存在，没有添加。",
      "hotcat-messages-cat_resolved": "（重定向[[Category:$1]]已处理）",
      "hotcat-messages-uncat_removed": "已移除{{uncategorized}}",
      // Some text to prefix to the edit summary.
      "hotcat-messages-prefix": "使用[[H:HOTCAT|HotCat]]",
      // Some text to append to the edit summary. Named 'using' for historical reasons. If you prefer
      // to have a marker at the front, use prefix and set this to the empty string.
      "hotcat-messages-using": "",
      "hotcat-messages-multi_change": "$1个分类",
      // Any category in this category is deemed a disambiguation category; i.e., a category that should not contain
      // any items, but that contains links to other categories where stuff should be categorized. If you don't have
      // that concept on your wiki, set it to blank string. Use blanks, not underscores.
      "hotcat-disambig_category": "",
      // Any category in this category is deemed a (soft) redirect to some other category defined by a link
      // to another non-blacklisted category. If your wiki doesn't have soft category redirects, set this to null.
      // If a soft-redirected category contains more than one link to another non-blacklisted category, it's considered
      // a disambiguation category instead.			'hotcat-redir_category': '已重定向的分类',
      "hotcat-messages-separator": "; ",
      // $1 is replaced by a number. If your language has several plural forms (c.f. [[:enwiki:Dual (grammatical form)]]),
      // you can set this to an array of strings suitable for passing to mw.language.configPlural().
      // If that function doesn't exist, HotCat will simply fall back to using the last
      // entry in the array.
      // Defaults to '[[' + category_canonical + ':$1]]'. Can be overridden if in the short edit summaries
      // not the standard category name should be used but, say, a shorter namespace alias. $1 is replaced
      // by a category name.
      "hotcat-messages-short_catchange": "$1",
      // Button text. Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
      // see localization hook below.
      "hotcat-messages-commit": "保存",
      // Button text. Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
      // see localization hook below.
      "hotcat-messages-ok": "确定",
      // Button text. Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
      // see localization hook below.
      "hotcat-messages-cancel": "取消",
      // Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
      // see localization hook below.
      "hotcat-messages-multi_error": "无法从服务器取得页面文字。因此，您的分类更改无法保存。我们为此不便表示抱歉。",
      // Plural of category_canonical.
      "hotcat-categories": "分类",
      // Names for the search engines
      "hotcat-engine_names-searchindex": "搜索索引",
      "hotcat-engine_names-pagelist": "页面列表",
      "hotcat-engine_names-combined": "合并搜索",
      "hotcat-engine_names-subcat": "子分类",
      "hotcat-engine_names-parentcat": "上层分类",
      // The tooltips for the above links
      "hotcat-tooltips-change": "修改",
      "hotcat-tooltips-remove": "移除",
      "hotcat-tooltips-add": "增加一个新分类",
      "hotcat-tooltips-restore": "撤销更改",
      "hotcat-tooltips-undo": "撤销更改",
      "hotcat-tooltips-down": "打开以修改并显示子分类",
      "hotcat-tooltips-up": "打开以修改并显示上层分类",
      // Tooltip for the "enter multi-mode" link
      "hotcat-multi_tooltip": "修改多个分类"
    });
  }
};
//! src/HotCat/images/P_no.png
var P_no_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAABmJLR0QA/wD/AP+gvaeTAAADOUlEQVQ4jY2SXUzbZRjFf/9/y1fsKEGQQaDbmEKZzrmL6Qg6RzQQso9ELcm6i043zURJTPy40IQF9WqJmZpdaEIWIyH76EzwZsZEs6spc2TSJgjFhQEZUrqh2RAK9P++7+ONLbVs6pOcq+e853lzzrH4n3PtmhTny0qZyRMzOVk43dxsqbvxrH8XcRot0YcEaw9QnbVaBC4JcrKurvDCfwqOjCw/ZIucxKI1d6e1Jh6/QWVlNS6XG4GzKafw5W3brEUAO/dBNLoQPHGia/hYd2frTHwGpSWDocggzc/U8WxLA/1fn8ZRBq3lgMu19IWIWGsEoz8vhMTQt6Vhe374/Ck6OwPM/zmPUoapqet0vPYcN2/OEHjhMMXFpcTjv6GUQTmmPRJJ7v+H4ODgnccdI6eUFnvX0/tob3+FkdEhurpeZSWlePe9I9y+/Tu7d++j6ck2Nmz0U3p/Zeb3xuijGQ/DYXH5fPPDgD99wBhNR8ceotEB/P7HiMUi1NRsprPzQ2pqaqmtbch1a27nTm+5DVBdfed5rcWvtZCGiM3x42eoqKgmFovgdrsJBI7i8ZTg89WTzf0b6wDcAI6jg3cLvKiomKqqjSQS04hAMrnIpk0Po7UAkkv/I+Oh0jRlp5nGwMD3DA1dwuPxImLo7f2I8euja3hKC46WH1cFlSlVypANx1H09HwAQEtrkJbWIEtLi7zf/RK3biXI5SutzmQEtTbzuZ5cvNjP+Pgw6ys3sPWRJg4efIfGxjbm5uJ88vGbOI5a5SsZvvzDA/0ZQUeZwdyL5859CsCOHS0UFHrweit46+3P8fnquXLlO8ZiEZQyaGUcY9SL3d2WWf2hWJ9l+zExEWNqcpSiIg8NW56grNyHNmC78uk6dpqSknJmE9OkHGWUMof37q26mk7GAhAR6/xX8TCWBABSqWVm4xNMTP5CibeMrY8+hW27MnGurCQZG7uarHtw+5FQqP5sdtSZrvT2zt7nLnB6wAqmi+04KWzbRV5efk5DrG8dWX7j0IHNv+Z2Z035+vputAm8jmV2gbUuizoF8o3Y1pehYM1Pue/uKZiecFhcC3qmCqPy3LogEQqtX7wXN3v+ApHw44zjlQ7KAAAAAElFTkSuQmCC";
//! src/HotCat/images/P_yes.png
var P_yes_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAABmJLR0QA/wD/AP+gvaeTAAADAElEQVQ4jY2S32vbZRSHnzffdMvWJVmWtJamnUXWbnZgHKuTMSnOm1GcCJ3iil0qcyBDUIbzYl5N8K43SileFDc60h/0RlR0/gE6JkVpIQy0DLo4pavbsEvTtP2+7zlezKRZ2joPnJv3fM7DOef9GP5nzMxoZIuuJKRGZXY2dPvoUWM30pn/hviHjbo+xbwMNFWUCsAPig60tYW+fSzwxo3l1oDqAIZjj5tcYXzVD51JpUwBIFgtyGaXToqTIYEdGwHy+QUyI4P8cfsWZ89eIJlsOel5RU9V3zDG6CPA6V8W09aXy0BgI9jdu3OcfvsYudxNUqnnmZ+fIxpNEAptf31qamkE+KrcODm5cMgX/cI6DVinVOfKqs8H53vJ5W6yZ89+envfxzoIeFuwThFx75RXnphQz7kHwyDrTlCKwcGPmZ6+TjS6i1OnzrFzZ4K9ew8gYhARgOfKwKamhW7n2LcZbGrqGpnMZwB0d58hGo3T2vosqgbntCQLl4G+73o2c5Dvr9Lffw5VpaPjRdraDtDS0o4xQayVSun9MtA6joCuVe7PE4vVYYxhdHSA2dlfqa2N0NXVSzzRSDiSwK5NBoDCNfj3N62VXdYKvu/45uth+tKHGBn5lHv3/mJs7OGqnZ2vsm17hGSyFWtlfTo7VgY6Jw+cU5aXV7h6NcPSUp7Llz6hL91BsbhILFbPwYMv0dDwFMYEcU4fTavZ6z/Wf1kG+lYmrRUCgRoufHSJaDQOQLG4CMCRF14htC1MPN64bjJnxRexb128aGRtQjWfl/wWiT7B+Q+HCAQeWjQUquXp9sPU17fgxFT7U6yV08ePN/5cuqUHMD7a/1s2m98vqu0iSiLRhOcFsb7PM6lOdjfvY/eT7agaRLSUeXWSPnEiOV75OWWvXLkyVxvc6g+B6Sm9zd/JUSj8zY5wjLq65sq279WT9958rXmm2mbrzJfJ/N6l8C5GOsGEK6S3QL/TgBlO9zT/VN23KbAUExPqLbo/GxFbE3Rb76TTDYXNtJXxD+yujTqqNmcnAAAAAElFTkSuQmCC";
//! src/HotCat/HotCat.js
hotCatMessages();
(function hotCat() {
  const conf = mw.config.values;
  if (window.HotCat && !window.HotCat.nodeName || conf.wgAction === "edit") {
    return;
  }
  const api = mwApi("HotCat/3.0");
  window.HotCat = {
    // The little modification links displayed after category names. U+2212 is a minus sign; U+2193 and U+2191 are
    // downward and upward pointing arrows. Do not use ↓ and ↑ in the code!
    links: {
      change: "(±)",
      remove: "(−)",
      add: "(+)",
      restore: "(×)",
      undo: "(×)",
      down: "(↓)",
      up: "(↑)"
    },
    changeTag: "HotCat",
    // The HTML content of the "enter multi-mode" link at the front.
    addmulti: "<span>+<sup>+</sup></span>",
    // Return true to disable HotCat.
    disable: () => {
      const ns = conf.wgNamespaceNumber;
      const nsIds = conf.wgNamespaceIds;
      return ns < 0 || // Special pages; Special:Upload is handled differently
      ns === 10 || // Templates
      ns === 828 || // Module (Lua)
      ns === 8 || // MediaWiki
      ns === 6 && !conf.wgArticleId || // Non-existing file pages
      ns === 2 && /\.(js|css)$/.test(conf.wgTitle) || // User scripts
      nsIds && (ns === nsIds.creator || ns === nsIds.timedtext || ns === nsIds.institution);
    },
    // A regexp matching a templates used to mark uncategorized pages, if your wiki does have that.
    // If not, set it to null.
    uncat_regexp: /{{\s*[Uu]ncategorized\s*[^}]*}}\s*(<!--.*?-->\s*)?/g,
    // The images used for the little indication icon. Should not need changing.
    existsYes: P_yes_default,
    existsNo: P_no_default,
    // a list of categories which can be removed by removing a template
    // key: the category without namespace
    // value: A regexp matching the template name, again without namespace
    // If you don't have this at your wiki, or don't want this, set it to an empty object {}.
    template_categories: {},
    // Override the decision of whether HotCat should help users by automatically
    // capitalising the title in the user input text if the wiki has case-sensitive page names.
    // Basically, this will make an API query to check the MediaWiki configuration and HotCat then sets
    // this to true for most wikis, and to false on Wiktionary.
    //
    // You can set this directly if there is a problem with it. For example, Georgian Wikipedia (kawiki),
    // is known to have different capitalisation logic between MediaWiki PHP and JavaScript. As such, automatic
    // case changes in JavaScript by HotCat would be wrong.
    capitalizePageNames: null,
    // If upload_disabled is true, HotCat will not be used on the Upload form.
    upload_disabled: false,
    // Single regular expression matching blacklisted categories that cannot be changed or
    // added using HotCat. For instance /\bstubs?$/ (any category ending with the word "stub"
    // or "stubs"), or /(\bstubs?$)|\bmaintenance\b/ (stub categories and any category with the
    // word "maintenance" in its title.
    blacklist: null,
    // Stuff changeable by users:
    // Background for changed categories in multi-edit mode. Default is a very light salmon pink.
    bg_changed: "#FCA",
    // If true, HotCat will never automatically submit changes. HotCat will only open an edit page with
    // the changes; users must always save explicitly.
    no_autocommit: false,
    // If true, the "category deletion" link "(-)" will never save automatically but always show an
    // edit page where the user has to save the edit manually. Is false by default because that's the
    // traditional behavior. This setting overrides no_autocommit for "(-)" links.
    del_needs_diff: false,
    // Time, in milliseconds, that HotCat waits after a keystroke before making a request to the
    // server to get suggestions.
    suggest_delay: 1e3,
    // Default width, in characters, of the text input field.
    editbox_width: 40,
    // One of the engine_names above, to be used as the default suggestion engine.
    suggestions: "combined",
    // If true, always use the default engine, and never display a selector.
    fixed_search: false,
    // If false, do not display the "up" and "down" links
    use_up_down: true,
    // Default list size
    listSize: 10,
    // If true, single category changes are marked as minor edits. If false, they're not.
    single_minor: true,
    // If true, never add a page to the user's watchlist. If false, pages get added to the watchlist if
    // the user has the "Add pages I edit to my watchlist" or the "Add pages I create to my watchlist"
    // options in his or her preferences set.
    dont_add_to_watchlist: false,
    shortcuts: null,
    addShortcuts: (map) => {
      var _window$HotCat;
      if (!map) {
        return;
      }
      (_window$HotCat = window.HotCat).shortcuts || (_window$HotCat.shortcuts = {});
      for (let k in map) {
        if (!Object.hasOwn(map, k) || typeof k !== "string") {
          continue;
        }
        let v = map[k];
        if (typeof v !== "string") {
          continue;
        }
        k = k.trim();
        v = v.trim();
        if (k.length === 0 || v.length === 0) {
          continue;
        }
        window.HotCat.shortcuts[k] = v;
      }
    }
  };
  const HC = window.HotCat;
  const ua = navigator.userAgent.toLowerCase();
  const is_webkit = /applewebkit\/\d+/.test(ua) && !ua.includes("spoofer");
  let cat_prefix = null;
  let noSuggestions = false;
  const wikiTextBlank = String.raw(_templateObject || (_templateObject = _taggedTemplateLiteral(["[	 _  ᠎ - \u2028\u2029  　]+"], ["[\\t _\\xA0\\u1680\\u180E\\u2000-\\u200A\\u2028\\u2029\\u202F\\u205F\\u3000]+"])));
  const wikiTextBlankRE = new RegExp(wikiTextBlank, "g");
  const wikiTextBlankOrBidi = String.raw(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["[	 _  ᠎ -​‎‏\u2028-  　]*"], ["[\\t _\\xA0\\u1680\\u180E\\u2000-\\u200B\\u200E\\u200F\\u2028-\\u202F\\u205F\\u3000]*"])));
  const formattedNamespaces = conf.wgFormattedNamespaces;
  const namespaceIds = conf.wgNamespaceIds;
  const autoLocalize = (namespaceNumber, fallback) => {
    const createRegexpStr = (name) => {
      if (!name || name.length === 0) {
        return;
      }
      let regex_name = "";
      for (let i = 0; i < name.length; i++) {
        const initial = name.charAt(i);
        const ll = initial.toLowerCase();
        const ul = initial.toUpperCase();
        regex_name += ll === ul ? initial : "[".concat(ll).concat(ul, "]");
      }
      return regex_name.replace(/([$()*+.?\\^])/g, String.raw(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["$1"], ["\\$1"])))).replace(wikiTextBlankRE, wikiTextBlank);
    };
    fallback = fallback.toLowerCase();
    const canonical = formattedNamespaces[String(namespaceNumber)].toLowerCase();
    let regexp = createRegexpStr(canonical);
    if (fallback && canonical !== fallback) {
      regexp += "|".concat(createRegexpStr(fallback));
    }
    if (namespaceIds) {
      for (const cat_name in namespaceIds) {
        if (typeof cat_name === "string" && cat_name.toLowerCase() !== canonical && cat_name.toLowerCase() !== fallback && namespaceIds[cat_name] === namespaceNumber) {
          regexp += "|".concat(createRegexpStr(cat_name));
        }
      }
    }
    return regexp;
  };
  HC.category_canonical = formattedNamespaces["14"];
  HC.category_regexp = autoLocalize(14, "category");
  if (formattedNamespaces["10"]) {
    HC.template_regexp = autoLocalize(10, "template");
  }
  const make = (arg, literal) => {
    if (!arg) {
      return null;
    }
    return literal ? document.createTextNode(arg) : document.createElement(arg);
  };
  const param = (name, uri) => {
    uri || (uri = document.location.href);
    const re = new RegExp("[&?]".concat(name, "=([^&#]*)"));
    const m = re.exec(uri);
    if (m && m.length > 1) {
      return decodeURIComponent(m[1]);
    }
    return null;
  };
  const title = (href) => {
    if (!href) {
      return null;
    }
    const script = "".concat(conf.wgScript, "?");
    if (href.indexOf(script) === 0 || href.indexOf(conf.wgServer + script) === 0 || conf.wgServer.slice(0, 2) === "//" && href.indexOf(document.location.protocol + conf.wgServer + script) === 0) {
      return param("title", href);
    }
    let prefix = conf.wgArticlePath.replace("$1", "");
    if (href.indexOf(prefix)) {
      prefix = conf.wgServer + prefix;
    }
    if (href.indexOf(prefix) && prefix.slice(0, 2) === "//") {
      prefix = document.location.protocol + prefix;
    }
    if (href.indexOf(prefix) === 0) {
      return decodeURIComponent(href.slice(prefix.length));
    }
    return null;
  };
  const hasClass = ({
    className
  }, name) => {
    return " ".concat(className, " ").includes(" ".concat(name, " "));
  };
  const capitalize = (str) => {
    if (!str || str.length === 0) {
      return str;
    }
    return str.slice(0, 1).toUpperCase() + str.slice(1);
  };
  const wikiPagePath = (pageName) => {
    return conf.wgArticlePath.replace("$1", encodeURIComponent(pageName).replace(/%3A/g, ":").replace(/%2F/g, "/"));
  };
  const escapeRE = (str) => {
    return str.replace(/([$()*+.?[\\\]^])/g, String.raw(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["$1"], ["\\$1"]))));
  };
  const substituteFactory = (options) => {
    options || (options = {});
    const lead = options.indicator || "$";
    const indicator = escapeRE(lead);
    const lbrace = escapeRE(options.lbrace || "{");
    const rbrace = escapeRE(options.rbrace || "}");
    const re = new RegExp(
      // $$
      "(?:".concat(indicator, "(").concat(indicator, "))|(?:").concat(indicator, "(\\d+))|(?:").concat(indicator, "(?:").concat(lbrace, "([^").concat(lbrace).concat(rbrace, "]+)").concat(rbrace, "))|(?:").concat(indicator, "(?!(?:[").concat(indicator).concat(lbrace, "]|\\d))(\\S+?)\\b)"),
      "g"
    );
    return (str, map) => {
      if (!map) {
        return str;
      }
      return str.replace(re, (match, prefix, idx, key, alpha) => {
        if (prefix === lead) {
          return lead;
        }
        const k = alpha || key || idx;
        const replacement = typeof map[k] === "function" ? map[k](match, k) : map[k];
        return typeof replacement === "string" ? replacement : replacement || match;
      });
    };
  };
  const replaceShortcuts = (() => {
    const replaceHash = substituteFactory({
      indicator: "#",
      lbrace: "[",
      rbrace: "]"
    });
    return (str, map) => {
      const s = replaceHash(str, map);
      return HC.capitalizePageNames ? capitalize(s) : s;
    };
  })();
  const findCatsRE = new RegExp("\\[\\[".concat(wikiTextBlankOrBidi, "(?:").concat(HC.category_regexp, ")").concat(wikiTextBlankOrBidi, ":[^\\]]+\\]\\]"), "g");
  const replaceByBlanks = (match) => {
    return match.replace(/(\s|\S)/g, " ");
  };
  const find_category = (wikitext, category, once) => {
    let cat_regex = null;
    if (HC.template_categories[category]) {
      cat_regex = new RegExp("\\{\\{".concat(wikiTextBlankOrBidi, "(").concat(HC.template_regexp, "(?=").concat(wikiTextBlankOrBidi, ":))?").concat(wikiTextBlankOrBidi, "(?:").concat(HC.template_categories[category], ")").concat(wikiTextBlankOrBidi, "(\\|.*?)?\\}\\}"), "g");
    } else {
      const cat_name = escapeRE(category);
      const initial = cat_name.slice(0, 1);
      cat_regex = new RegExp("\\[\\[".concat(wikiTextBlankOrBidi, "(").concat(HC.category_regexp, ")").concat(wikiTextBlankOrBidi, ":").concat(wikiTextBlankOrBidi).concat(initial === "\\" || !HC.capitalizePageNames ? initial : "[".concat(initial.toUpperCase()).concat(initial.toLowerCase(), "]")).concat(cat_name.slice(1).replace(wikiTextBlankRE, wikiTextBlank)).concat(wikiTextBlankOrBidi, "(\\|.*?)?\\]\\]"), "g");
    }
    if (once) {
      return cat_regex.exec(wikitext);
    }
    const nowikiRegex = new RegExp("<no".concat("wiki>", String.raw(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["(s|S)*?</no"], ["(\\s|\\S)*?</no"]))), "wiki", ">"), "g");
    const copiedtext = wikitext.replace(/<!--(\s|\S)*?-->/g, replaceByBlanks).replace(nowikiRegex, replaceByBlanks);
    const result = [];
    let curr_match = null;
    while ((curr_match = cat_regex.exec(copiedtext)) !== null) {
      result[result.length] = {
        match: curr_match
      };
    }
    result.re = cat_regex;
    return result;
  };
  let interlanguageRE = null;
  const change_category = (wikitext, toRemove, toAdd, key, is_hidden) => {
    const find_insertionpoint = (_wikitext) => {
      const nowikiRegex = new RegExp("<no".concat("wiki>", String.raw(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["(s|S)*?</no"], ["(\\s|\\S)*?</no"]))), "wiki", ">"), "g");
      const copiedtext = _wikitext.replace(/<!--(\s|\S)*?-->/g, replaceByBlanks).replace(nowikiRegex, replaceByBlanks);
      let index = -1;
      findCatsRE.lastIndex = 0;
      while (findCatsRE.exec(copiedtext) !== null) {
        index = findCatsRE.lastIndex;
      }
      if (index < 0) {
        let match = null;
        if (interlanguageRE) {
          match = interlanguageRE.exec(copiedtext);
        } else {
          match = /((^|\n\r?)(\[\[\s*(([a-z]{2,3}(-[a-z]+)*)|simple|tokipona)\s*:[^\]]+]]\s*))+$/.exec(copiedtext);
        }
        if (match) {
          ({
            index
          } = match);
        }
        return {
          idx: index,
          onCat: false
        };
      }
      return {
        idx: index,
        onCat: index >= 0
      };
    };
    const summary = [];
    const nameSpace = HC.category_canonical;
    const keyChange = toRemove && toAdd && toRemove === toAdd && toAdd.length > 0;
    let matches;
    let cat_point = -1;
    key && (key = "|".concat(key));
    if (toRemove && toRemove.length > 0) {
      matches = find_category(wikitext, toRemove);
      if (!matches || matches.length === 0) {
        return {
          text: wikitext,
          summary,
          error: getMessage("messages-cat_notFound", toRemove)
        };
      }
      let before = wikitext.slice(0, Math.max(0, matches[0].match.index));
      let after = wikitext.slice(Math.max(0, matches[0].match.index + matches[0].match[0].length));
      if (matches.length > 1) {
        matches.re.lastIndex = 0;
        after = after.replace(matches.re, "");
      }
      if (toAdd && // nameSpace = matches[ 0 ].match[ 1 ] || nameSpace; Canonical namespace should be always preferred
      key === null) {
        [, , key] = matches[0].match;
      }
      let i = before.length - 1;
      while (i >= 0 && before.charAt(i) !== "\n" && before.slice(i, i + 1).search(/\s/) >= 0) {
        i--;
      }
      let j = 0;
      while (j < after.length && after.charAt(j) !== "\n" && after.slice(j, j + 1).search(/\s/) >= 0) {
        j++;
      }
      if (i >= 0 && before.charAt(i) === "\n" && (after.length === 0 || j < after.length && after.charAt(j) === "\n")) {
        i--;
      }
      before = i >= 0 ? before.slice(0, Math.max(0, i + 1)) : "";
      after = j < after.length ? after.slice(Math.max(0, j)) : "";
      if (before.length > 0 && before.slice(Math.max(0, before.length - 1)).search(/\S/) >= 0 && after.length > 0 && after.slice(0, 1).search(/\S/) >= 0) {
        before += " ";
      }
      cat_point = before.length;
      if (cat_point === 0 && after.length > 0 && after.slice(0, 1) === "\n") {
        after = after.slice(1);
      }
      wikitext = before + after;
      if (!keyChange) {
        if (HC.template_categories[toRemove]) {
          summary[summary.length] = getMessage("messages-template_removed", toRemove);
        } else {
          summary[summary.length] = getMessage("messages-cat_removed", toRemove);
        }
      }
    }
    if (toAdd && toAdd.length > 0) {
      matches = find_category(wikitext, toAdd);
      if (matches && matches.length > 0) {
        return {
          text: wikitext,
          summary,
          error: getMessage("messages-cat_exists", toAdd)
        };
      }
      let onCat = false;
      if (cat_point < 0) {
        const point = find_insertionpoint(wikitext);
        cat_point = point.idx;
        ({
          onCat
        } = point);
      } else {
        onCat = true;
      }
      const newcatstring = "[[".concat(nameSpace, ":").concat(toAdd).concat(key || "", "]]");
      if (cat_point >= 0) {
        const suffix = wikitext.slice(Math.max(0, cat_point));
        wikitext = wikitext.slice(0, Math.max(0, cat_point)) + (cat_point > 0 ? "\n" : "") + newcatstring + (onCat ? "" : "\n");
        wikitext += suffix.length > 0 && suffix.slice(0, 1) !== "\n" ? "\n".concat(suffix) : suffix;
      } else {
        if (wikitext.length > 0 && wikitext.slice(-1, wikitext.length - 1 + 1) !== "\n") {
          wikitext += "\n";
        }
        wikitext += (wikitext.length > 0 ? "\n" : "") + newcatstring;
      }
      if (keyChange) {
        let k = key || "";
        if (k.length > 0) {
          k = k.slice(1);
        }
        summary[summary.length] = getMessage("messages-cat_keychange", toAdd, k);
      } else {
        summary[summary.length] = getMessage("messages-cat_added", toAdd);
      }
      if (HC.uncat_regexp && !is_hidden) {
        const txt = wikitext.replace(HC.uncat_regexp, "");
        if (txt.length !== wikitext.length) {
          wikitext = txt;
          summary[summary.length] = getMessage("messages-uncat_removed");
        }
      }
    }
    return {
      text: wikitext,
      summary,
      error: null
    };
  };
  const evtKeys = ({
    ctrlKey,
    metaKey,
    shiftKey
  }) => {
    let code = 0;
    if (ctrlKey) {
      if (ctrlKey || metaKey) {
        code || (code = 1);
      }
      if (shiftKey) {
        code || (code = 2);
      }
    }
    return code;
  };
  const evtKill = (e) => {
    if (e.preventDefault) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.cancelBubble = true;
    }
    return false;
  };
  let catLine = null;
  let onUpload = false;
  let editors = [];
  let commitButton = null;
  let commitForm = null;
  let multiSpan = null;
  let pageText = null;
  let pageTime = null;
  let pageWatched = false;
  let watchCreate = false;
  let watchEdit = false;
  let minorEdits = false;
  let editToken = null;
  let is_rtl = false;
  let serverTime = null;
  let lastRevId = null;
  let pageTextRevId = null;
  let conflictingUser = null;
  let newDOM = false;
  const UNCHANGED = 0;
  const OPEN = 1;
  const CHANGE_PENDING = 2;
  const CHANGED = 3;
  const DELETED = 4;
  const setPage = (data) => {
    let startTime = null;
    if (data && data.query) {
      if (data.query.pages) {
        const [page] = data.query.pages;
        if (page) {
          if (page.revisions && page.revisions.length > 0) {
            pageText = page.revisions[0].slots.main.content;
            if (page.revisions[0].timestamp) {
              pageTime = page.revisions[0].timestamp.replace(/\D/g, "");
            }
            if (page.revisions[0].revid) {
              pageTextRevId = page.revisions[0].revid;
            }
            if (page.revisions.length > 1) {
              conflictingUser = page.revisions[1].user;
            }
          }
          if (page.lastrevid) {
            lastRevId = page.lastrevid;
          }
          if (page.starttimestamp) {
            startTime = page.starttimestamp.replace(/\D/g, "");
          }
          pageWatched = typeof page.watched === "string";
          if (data.query.tokens) {
            editToken = data.query.tokens.csrftoken;
          }
          if (page.langlinks && (!data["query-continue"] || !data["query-continue"].langlinks)) {
            let re = "";
            for (let i = 0; i < page.langlinks.length; i++) {
              re += (i > 0 ? "|" : "") + page.langlinks[i].lang.replace(/([$()*+.?\\^])/g, String.raw(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["$1"], ["\\$1"]))));
            }
            if (re.length > 0) {
              interlanguageRE = new RegExp("((^|\\n\\r?)(\\[\\[\\s*(".concat(re, ")\\s*:[^\\]]+\\]\\]\\s*))+$"));
            }
          }
        }
      }
      if (data.query.general) {
        if (data.query.general.time && !startTime) {
          startTime = data.query.general.time.replace(/\D/g, "");
        }
        if (HC.capitalizePageNames === null) {
          HC.capitalizePageNames = data.query.general.case === "first-letter";
        }
      }
      serverTime = startTime;
      if (data.query.userinfo && data.query.userinfo.options) {
        watchCreate = !HC.dont_add_to_watchlist && data.query.userinfo.options.watchcreations === "1";
        watchEdit = !HC.dont_add_to_watchlist && data.query.userinfo.options.watchdefault === "1";
        minorEdits = data.query.userinfo.options.minordefault === 1;
        if (minorEdits) {
          HC.single_minor = true;
        }
      }
    }
  };
  let saveInProgress = false;
  const initiateEdit = (doEdit, failure) => {
    if (saveInProgress) {
      return;
    }
    saveInProgress = true;
    let oldButtonState;
    if (commitButton) {
      oldButtonState = commitButton.disabled;
      commitButton.disabled = true;
    }
    const fail = function(...args) {
      saveInProgress = false;
      if (commitButton) {
        commitButton.disabled = oldButtonState;
      }
      failure.apply(this, args);
    };
    const params = {
      action: "query",
      format: "json",
      formatversion: "2",
      rawcontinue: "",
      titles: conf.wgPageName,
      prop: ["info", "revisions", "langlinks"],
      inprop: "watched",
      rvprop: ["content", "timestamp", "ids", "user"],
      rvslots: "main",
      rvlimit: "2",
      rvdir: "newer",
      rvstartid: conf.wgCurRevisionId,
      lllimit: "500",
      meta: ["siteinfo", "userinfo", "tokens"],
      type: "csrf",
      uiprop: ["options"]
    };
    api.get(params).done((data) => {
      setPage(data);
      doEdit(fail);
    }).fail(({
      status,
      statusText
    }) => {
      fail("".concat(status, " ").concat(statusText));
    });
  };
  const multiChangeMsg = (count) => {
    return getMessage("messages-multi_change", String(count));
  };
  const currentTimestamp = () => {
    const now = /* @__PURE__ */ new Date();
    let ts = String(now.getUTCFullYear());
    const two = (s) => {
      return s.slice(-2);
    };
    ts += two("0".concat(now.getUTCMonth() + 1)) + two("0".concat(now.getUTCDate())) + two("00".concat(now.getUTCHours())) + two("00".concat(now.getUTCMinutes())) + two("00".concat(now.getUTCSeconds()));
    return ts;
  };
  const performChanges = (failure, singleEditor) => {
    if (pageText === null) {
      failure(getMessage("messages-multi_error"));
      return;
    }
    let action;
    const selfEditConflict = (lastRevId !== null && lastRevId !== conf.wgCurRevisionId || pageTextRevId !== null && pageTextRevId !== conf.wgCurRevisionId) && conflictingUser && conflictingUser === conf.wgUserName;
    if (singleEditor && !singleEditor.noCommit && !HC.no_autocommit && editToken && !selfEditConflict) {
      commitForm.wpEditToken.value = editToken;
      action = commitForm.wpDiff;
      if (action) {
        action.value = "wpSave";
        action.name = action.value;
      }
    } else {
      action = commitForm.wpSave;
      if (action) {
        action.value = "wpDiff";
        action.name = action.value;
      }
    }
    let result = {
      text: pageText
    };
    const changed = [];
    const added = [];
    const deleted = [];
    const toEdit = singleEditor ? [singleEditor] : editors;
    let edit;
    let i;
    let error = null;
    let changes = 0;
    for (i = 0; i < toEdit.length; i++) {
      edit = toEdit[i];
      if (edit.state === CHANGED) {
        result = change_category(result.text, edit.originalCategory, edit.currentCategory, edit.currentKey, edit.currentHidden);
        if (!result.error) {
          changes++;
          if (!edit.originalCategory || edit.originalCategory.length === 0) {
            added[added.length] = edit.currentCategory;
          } else {
            changed[changed.length] = {
              from: edit.originalCategory,
              to: edit.currentCategory
            };
          }
        } else if (error === null) {
          ({
            error
          } = result);
        }
      } else if (edit.state === DELETED && edit.originalCategory && edit.originalCategory.length > 0) {
        result = change_category(result.text, edit.originalCategory, null, null, false);
        if (!result.error) {
          changes++;
          deleted[deleted.length] = edit.originalCategory;
        } else if (error === null) {
          ({
            error
          } = result);
        }
      }
    }
    if (error !== null) {
      action = commitForm.wpSave;
      if (action) {
        action.value = "wpDiff";
        action.name = action.value;
      }
    }
    commitForm.wpMinoredit.checked = minorEdits;
    commitForm.wpWatchthis.checked = !conf.wgArticleId && watchCreate || watchEdit || pageWatched;
    if (conf.wgArticleId || !!singleEditor) {
      if (action && action.value === "wpSave") {
        if (HC.changeTag) {
          commitForm.wpChangeTags.value = HC.changeTag;
        }
      } else {
        commitForm.wpAutoSummary.value = HC.changeTag;
      }
      if (changes === 1) {
        if (result.summary && result.summary.length > 0) {
          commitForm.wpSummary.value = (HC.changeTag ? "" : getMessage("messages-prefix")) + result.summary.join(getMessage("messages-separator")) + (HC.changeTag ? "" : getMessage("messages-using"));
        }
        commitForm.wpMinoredit.checked = HC.single_minor || minorEdits;
      } else if (changes) {
        let summary = [];
        const shortSummary = [];
        for (i = 0; i < deleted.length; i++) {
          summary[summary.length] = "−".concat(getMessage("messages-short_catchange", deleted[i]));
        }
        if (deleted.length === 1) {
          shortSummary[shortSummary.length] = "−".concat(getMessage("messages-short_catchange", deleted[0]));
        } else if (deleted.length > 0) {
          shortSummary[shortSummary.length] = "− ".concat(multiChangeMsg(deleted.length));
        }
        for (i = 0; i < added.length; i++) {
          summary[summary.length] = "+".concat(getMessage("messages-short_catchange", added[i]));
        }
        if (added.length === 1) {
          shortSummary[shortSummary.length] = "+".concat(getMessage("messages-short_catchange", added[0]));
        } else if (added.length > 0) {
          shortSummary[shortSummary.length] = "+ ".concat(multiChangeMsg(added.length));
        }
        const arrow = is_rtl ? "←" : "→";
        for (i = 0; i < changed.length; i++) {
          if (changed[i].from === changed[i].to) {
            summary[summary.length] = "±".concat(getMessage("messages-short_catchange", changed[i].from));
          } else {
            summary[summary.length] = "±".concat(getMessage("messages-short_catchange", changed[i].from)).concat(arrow).concat(getMessage("messages-short_catchange", changed[i].to));
          }
        }
        if (changed.length === 1) {
          if (changed[0].from === changed[0].to) {
            shortSummary[shortSummary.length] = "±".concat(getMessage("messages-short_catchange", changed[0].from));
          } else {
            shortSummary[shortSummary.length] = "±".concat(getMessage("messages-short_catchange", changed[0].from)).concat(arrow).concat(getMessage("messages-short_catchange", changed[0].to));
          }
        } else if (changed.length > 0) {
          shortSummary[shortSummary.length] = "± ".concat(multiChangeMsg(changed.length));
        }
        if (summary.length > 0) {
          summary = summary.join(getMessage("messages-separator"));
          if (summary.length > 200 - (HC.changeTag ? "" : getMessage("messages-prefix")).length - (HC.changeTag ? "" : getMessage("messages-using")).length) {
            summary = shortSummary.join(getMessage("messages-separator"));
          }
          commitForm.wpSummary.value = (HC.changeTag ? "" : getMessage("messages-prefix")) + summary + (HC.changeTag ? "" : getMessage("messages-using"));
        }
      }
    }
    commitForm.wpTextbox1.value = result.text;
    commitForm.wpStarttime.value = serverTime || currentTimestamp();
    commitForm.wpEdittime.value = pageTime || commitForm.wpStarttime.value;
    if (selfEditConflict) {
      commitForm.oldid.value = String(pageTextRevId || conf.wgCurRevisionId);
    }
    commitForm.hcCommit.click();
  };
  const resolveOne = (page, toResolve) => {
    const cats = page.categories;
    const {
      links
    } = page;
    let is_dab = false;
    let is_redir = typeof page.redirect === "string";
    let i;
    const is_hidden = page.categoryinfo && typeof page.categoryinfo.hidden === "string";
    const is_missing = typeof page.missing === "string";
    for (i = 0; i < toResolve.length; i++) {
      if (i && toResolve[i].dabInputCleaned !== page.title.slice(Math.max(0, page.title.indexOf(":") + 1))) {
        continue;
      }
      toResolve[i].currentHidden = is_hidden;
      toResolve[i].inputExists = !is_missing;
      toResolve[i].icon.src = is_missing ? HC.existsNo : HC.existsYes;
    }
    if (is_missing) {
      return;
    }
    if (!is_redir && cats && (getMessage("disambig_category") || getMessage("redir_category"))) {
      var _iterator = _createForOfIteratorHelper(cats), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          const cat_ = _step.value;
          let cat = cat_.title;
          if (cat) {
            cat = cat.slice(Math.max(0, cat.indexOf(":") + 1)).replace(/_/g, " ");
            if (cat === getMessage("disambig_category")) {
              is_dab = true;
              break;
            } else if (cat === getMessage("redir_category")) {
              is_redir = true;
              break;
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    if (!is_redir && !is_dab) {
      return;
    }
    if (!links || links.length === 0) {
      return;
    }
    const titles = [];
    for (i = 0; i < links.length; i++) {
      if (
        // Category namespace -- always true since we ask only for the category links
        links[i].ns === 14 && // Name not empty
        links[i].title && links[i].title.length > 0
      ) {
        let match = links[i].title;
        match = match.slice(Math.max(0, match.indexOf(":") + 1));
        if (!HC.blacklist || !HC.blacklist.test(match)) {
          titles[titles.length] = match;
        }
      }
    }
    if (titles.length === 0) {
      return;
    }
    for (i = 0; i < toResolve.length; i++) {
      if (i && toResolve[i].dabInputCleaned !== page.title.slice(Math.max(0, page.title.indexOf(":") + 1))) {
        continue;
      }
      toResolve[i].inputExists = true;
      toResolve[i].icon.src = HC.existsYes;
      if (titles.length > 1) {
        toResolve[i].dab = titles;
      } else {
        toResolve[i].text.value = titles[0] + (toResolve[i].currentKey === null ? "" : "|".concat(toResolve[i].currentKey));
      }
    }
  };
  const resolveRedirects = (toResolve, params) => {
    if (!params || !params.query || !params.query.pages) {
      return;
    }
    for (const p in params.query.pages) {
      if (!Object.hasOwn(params.query.pages, p)) {
        continue;
      }
      resolveOne(params.query.pages[p], toResolve);
    }
  };
  const resolveMulti = (toResolve, callback) => {
    let i;
    for (i = 0; i < toResolve.length; i++) {
      toResolve[i].dab = null;
      toResolve[i].dabInput = toResolve[i].lastInput;
    }
    if (noSuggestions) {
      callback(toResolve);
      return;
    }
    const params = {
      action: "query",
      format: "json",
      prop: "info|links|categories|categoryinfo",
      plnamespace: "14",
      pllimit: toResolve.length * 10,
      cllimit: toResolve.length * 10
    };
    const titles = [];
    for (i = 0; i < toResolve.length; i++) {
      let v = toResolve[i].dabInput;
      v = replaceShortcuts(v, HC.shortcuts);
      toResolve[i].dabInputCleaned = v;
      titles[titles.length] = "Category:".concat(v);
    }
    params.titles = titles.join("|");
    api.get(params).done((json) => {
      resolveRedirects(toResolve, json);
      callback(toResolve);
    }).fail((req) => {
      if (!req) {
        noSuggestions = true;
      }
      callback(toResolve);
    });
  };
  const makeActive = (which) => {
    if (which.is_active) {
      return;
    }
    for (var _i = 0, _editors = editors; _i < _editors.length; _i++) {
      const editor = _editors[_i];
      if (editor !== which) {
        editor.inactivate();
      }
    }
    which.is_active = true;
    if (which.dab) {
      showDab(which);
    } else {
      const expectedInput = which.lastRealInput || which.lastInput || "";
      const actualValue = which.text.value || "";
      if (expectedInput.length === 0 && actualValue.length > 0 || expectedInput.length > 0 && actualValue.indexOf(expectedInput)) {
        which.showsList = false;
        const v = actualValue.split("|");
        [which.lastInput] = v;
        which.lastRealInput = which.lastInput;
        if (v.length > 1) {
          [, which.currentKey] = v;
        }
        which.lastSelection && (which.lastSelection = {
          start: v[0].length,
          end: v[0].length
        });
      }
      if (which.showsList) {
        which.displayList();
      }
      if (which.lastSelection) {
        setTimeout(() => {
          which.setSelection(which.lastSelection.start, which.lastSelection.end);
        }, 0);
      }
    }
  };
  const showDab = (which) => {
    if (which.is_active) {
      which.showSuggestions(which.dab, false, null, null);
      which.dab = null;
    } else {
      makeActive(which);
    }
  };
  const multiSubmit = () => {
    const toResolve = [];
    for (var _i2 = 0, _editors2 = editors; _i2 < _editors2.length; _i2++) {
      const editor = _editors2[_i2];
      if (editor.state === CHANGE_PENDING || editor.state === OPEN) {
        toResolve[toResolve.length] = editor;
      }
    }
    if (toResolve.length === 0) {
      initiateEdit((failure) => {
        performChanges(failure);
      }, (msg) => {
        void mw.notify(msg, {
          tag: "hotCat"
        });
      });
      return;
    }
    resolveMulti(toResolve, (resolved) => {
      let firstDab = null;
      let dontChange = false;
      var _iterator2 = _createForOfIteratorHelper(resolved), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          const element = _step2.value;
          if (element.lastInput === element.dabInput) {
            if (element.dab) {
              firstDab || (firstDab = element);
            } else if (element.acceptCheck(true)) {
              element.commit();
            }
          } else {
            dontChange = true;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      if (firstDab) {
        showDab(firstDab);
      } else if (!dontChange) {
        initiateEdit((failure) => {
          performChanges(failure);
        }, (msg) => {
          void mw.notify(msg, {
            tag: "hotCat"
          });
        });
      }
    });
  };
  const setMultiInput = () => {
    if (commitButton || onUpload) {
      return;
    }
    commitButton = make("input");
    commitButton.type = "button";
    commitButton.value = getMessage("messages-commit");
    commitButton.addEventListener("click", multiSubmit);
    if (multiSpan) {
      multiSpan.replaceWith(commitButton);
    } else {
      catLine.append(commitButton);
    }
  };
  const checkMultiInput = () => {
    if (!commitButton) {
      return;
    }
    let hasChanges = false;
    for (var _i3 = 0, _editors3 = editors; _i3 < _editors3.length; _i3++) {
      const editor = _editors3[_i3];
      if (editor.state !== UNCHANGED) {
        hasChanges = true;
        break;
      }
    }
    commitButton.disabled = !hasChanges;
  };
  const suggestionEngines = {
    opensearch: {
      uri: "".concat(mw.config.get("wgScriptPath"), "/api.php?format=json&action=opensearch&namespace=14&limit=30&search=Category:$1"),
      // $1 = search term
      // Function to convert result of uri into an array of category names
      handler: (queryResult, queryKey) => {
        if (queryResult && queryResult.length >= 2) {
          const key = queryResult[0].slice(Math.max(0, queryResult[0].indexOf(":") + 1));
          const [, titles] = queryResult;
          let exists = false;
          cat_prefix || (cat_prefix = new RegExp("^(".concat(HC.category_regexp, "):")));
          for (let i = 0; i < titles.length; i++) {
            cat_prefix.lastIndex = 0;
            const m = cat_prefix.exec(titles[i]);
            if (m && m.length > 1) {
              titles[i] = titles[i].slice(Math.max(0, titles[i].indexOf(":") + 1));
              if (key === titles[i]) {
                exists = true;
              }
            } else {
              titles.splice(i, 1);
              i--;
            }
          }
          titles.exists = exists;
          if (queryKey !== key) {
            titles.normalized = key;
          }
          return titles;
        }
        return null;
      }
    },
    internalsearch: {
      uri: "".concat(mw.config.get("wgScriptPath"), "/api.php?format=json&action=query&list=allpages&apnamespace=14&aplimit=30&apfrom=$1&apprefix=$1"),
      handler: (queryResult) => {
        if (queryResult && queryResult.query && queryResult.query.allpages) {
          const titles = queryResult.query.allpages;
          for (let i = 0; i < titles.length; i++) {
            titles[i] = titles[i].title.slice(Math.max(0, titles[i].title.indexOf(":") + 1));
          }
          return titles;
        }
        return null;
      }
    },
    exists: {
      uri: "".concat(mw.config.get("wgScriptPath"), "/api.php?format=json&action=query&prop=info&titles=Category:$1"),
      handler: (queryResult, queryKey) => {
        if (queryResult && queryResult.query && queryResult.query.pages && !queryResult.query.pages[-1]) {
          for (const p in queryResult.query.pages) {
            if (!Object.hasOwn(queryResult.query.pages, p)) {
              continue;
            }
            let _title = queryResult.query.pages[p].title;
            _title = _title.slice(Math.max(0, _title.indexOf(":") + 1));
            const titles = [_title];
            titles.exists = true;
            if (queryKey !== _title) {
              titles.normalized = _title;
            }
            return titles;
          }
        }
        return null;
      }
    },
    subcategories: {
      uri: "".concat(mw.config.get("wgScriptPath"), "/api.php?format=json&action=query&list=categorymembers&cmtype=subcat&cmlimit=max&cmtitle=Category:$1"),
      handler: (queryResult) => {
        if (queryResult && queryResult.query && queryResult.query.categorymembers) {
          const titles = queryResult.query.categorymembers;
          for (let i = 0; i < titles.length; i++) {
            titles[i] = titles[i].title.slice(Math.max(0, titles[i].title.indexOf(":") + 1));
          }
          return titles;
        }
        return null;
      }
    },
    parentcategories: {
      uri: "".concat(mw.config.get("wgScriptPath"), "/api.php?format=json&action=query&prop=categories&titles=Category:$1&cllimit=max"),
      handler: (queryResult) => {
        if (queryResult && queryResult.query && queryResult.query.pages) {
          for (const p in queryResult.query.pages) {
            if (queryResult.query.pages[p].categories) {
              const titles = queryResult.query.pages[p].categories;
              for (let i = 0; i < titles.length; i++) {
                titles[i] = titles[i].title.slice(Math.max(0, titles[i].title.indexOf(":") + 1));
              }
              return titles;
            }
          }
        }
        return null;
      }
    }
  };
  const suggestionConfigs = {
    searchindex: {
      name: "Search index",
      engines: ["opensearch"],
      cache: {},
      show: true,
      temp: false,
      noCompletion: false
    },
    pagelist: {
      name: "Page list",
      engines: ["internalsearch", "exists"],
      cache: {},
      show: true,
      temp: false,
      noCompletion: false
    },
    combined: {
      name: "Combined search",
      engines: ["opensearch", "internalsearch"],
      cache: {},
      show: true,
      temp: false,
      noCompletion: false
    },
    subcat: {
      name: "Subcategories",
      engines: ["subcategories"],
      cache: {},
      show: true,
      temp: true,
      noCompletion: true
    },
    parentcat: {
      name: "Parent categories",
      engines: ["parentcategories"],
      cache: {},
      show: true,
      temp: true,
      noCompletion: true
    }
  };
  const BS = 8;
  const TAB = 9;
  const RET = 13;
  const ESC = 27;
  const SPACE = 32;
  const PGUP = 33;
  const PGDOWN = 34;
  const UP = 38;
  const DOWN = 40;
  const DEL = 46;
  const IME = 229;
  class CategoryEditor {
    constructor(...args) {
      this.initialize(...args);
    }
    isCompositionStart = false;
    initialize(line, span, after, key, is_hidden) {
      if (span) {
        if (is_rtl) {
          span.dir = "rtl";
        }
        this.isAddCategory = false;
        this.catLink = span.firstChild;
        this.originalCategory = after;
        this.originalKey = key && key.length > 1 ? key.slice(1) : null;
        this.originalExists = !hasClass(this.catLink, "new");
        this.makeLinkSpan();
        if (!this.originalExists && this.upDownLinks) {
          this.upDownLinks.style.display = "none";
        }
        span.append(this.linkSpan);
      } else {
        this.isAddCategory = true;
        this.originalCategory = "";
        this.originalKey = null;
        this.originalExists = false;
        if (!newDOM) {
          span = make("span");
          span.className = "noprint";
          if (key) {
            span.append(make(" | ", true));
            if (after) {
              after.parentNode.insertBefore(span, after.nextSibling);
              after = after.nextSibling;
            } else if (line) {
              line.append(span);
            }
          } else if (line && line.firstChild) {
            span.append(make(" ", true));
            line.append(span);
          }
        }
        this.linkSpan = make("span");
        this.linkSpan.className = "noprint nopopups hotcatlink";
        const link = make("a");
        link.href = "#catlinks";
        link.addEventListener("click", this.open.bind(this));
        link.append(make(HC.links.add, true));
        link.title = getMessage("tooltips-add");
        this.linkSpan.append(link);
        span = make(newDOM ? "li" : "span");
        span.className = "noprint";
        if (is_rtl) {
          span.dir = "rtl";
        }
        span.append(this.linkSpan);
        if (after) {
          after.parentNode.insertBefore(span, after.nextSibling);
        } else if (line) {
          line.append(span);
        }
        this.normalLinks = null;
        this.undelLink = null;
        this.catLink = null;
      }
      this.originalHidden = is_hidden;
      this.line = line;
      this.engine = HC.suggestions;
      this.span = span;
      this.currentCategory = this.originalCategory;
      this.currentExists = this.originalExists;
      this.currentHidden = this.originalHidden;
      this.currentKey = this.originalKey;
      this.state = UNCHANGED;
      this.lastSavedState = UNCHANGED;
      this.lastSavedCategory = this.originalCategory;
      this.lastSavedKey = this.originalKey;
      this.lastSavedExists = this.originalExists;
      this.lastSavedHidden = this.originalHidden;
      if (this.catLink && this.currentKey) {
        this.catLink.title = this.currentKey;
      }
      editors[editors.length] = this;
    }
    makeLinkSpan() {
      this.normalLinks = make("span");
      let link = null;
      if (this.originalCategory && this.originalCategory.length > 0) {
        link = make("a");
        link.href = "#catlinks";
        link.addEventListener("click", this.remove.bind(this));
        link.append(make(HC.links.remove, true));
        link.title = getMessage("tooltips-remove");
        this.normalLinks.append(make(" ", true));
        this.normalLinks.append(link);
      }
      if (!HC.template_categories[this.originalCategory]) {
        link = make("a");
        link.href = "#catlinks";
        link.addEventListener("click", this.open.bind(this));
        link.append(make(HC.links.change, true));
        link.title = getMessage("tooltips-change");
        this.normalLinks.append(make(" ", true));
        this.normalLinks.append(link);
        if (!noSuggestions && HC.use_up_down) {
          this.upDownLinks = make("span");
          link = make("a");
          link.href = "#catlinks";
          link.addEventListener("click", this.down.bind(this));
          link.append(make(HC.links.down, true));
          link.title = getMessage("tooltips-down");
          this.upDownLinks.append(make(" ", true));
          this.upDownLinks.append(link);
          link = make("a");
          link.href = "#catlinks";
          link.addEventListener("click", this.up.bind(this));
          link.append(make(HC.links.up, true));
          link.title = getMessage("tooltips-up");
          this.upDownLinks.append(make(" ", true));
          this.upDownLinks.append(link);
          this.normalLinks.append(this.upDownLinks);
        }
      }
      this.linkSpan = make("span");
      this.linkSpan.className = "noprint nopopups hotcatlink";
      this.linkSpan.append(this.normalLinks);
      this.undelLink = make("span");
      this.undelLink.className = "nopopups hotcatlink";
      this.undelLink.style.display = "none";
      link = make("a");
      link.href = "#catlinks";
      link.addEventListener("click", this.restore.bind(this));
      link.append(make(HC.links.restore, true));
      link.title = getMessage("tooltips-restore");
      this.undelLink.append(make(" ", true));
      this.undelLink.append(link);
      this.linkSpan.append(this.undelLink);
    }
    invokeSuggestions(dont_autocomplete) {
      if (this.engine && suggestionConfigs[this.engine] && suggestionConfigs[this.engine].temp && !dont_autocomplete) {
        this.engine = HC.suggestions;
      }
      this.state = CHANGE_PENDING;
      const self2 = this;
      setTimeout(() => {
        self2.textchange(dont_autocomplete);
      }, HC.suggest_delay);
    }
    makeForm() {
      const form = make("form");
      form.method = "POST";
      form.addEventListener("submit", this.accept.bind(this));
      this.form = form;
      const self2 = this;
      const text = make("input");
      text.type = "text";
      text.size = HC.editbox_width;
      if (!noSuggestions) {
        text.addEventListener("keyup", (event) => {
          const key = event.key || 0;
          if (self2.ime && self2.lastKey === IME && !self2.usesComposition && (key === TAB || key === RET || key === ESC || key === SPACE)) {
            self2.ime = false;
          }
          if (self2.ime) {
            return true;
          }
          if (key === UP || key === DOWN || key === PGUP || key === PGDOWN) {
            if (self2.keyCount === 0) {
              return self2.processKey(event);
            }
          } else {
            if (key === ESC && self2.lastKey !== IME && !self2.resetKeySelection()) {
              self2.cancel();
              return;
            }
            if (self2.isCompositionStart) {
              return;
            }
            self2.invokeSuggestions(key === BS || key === DEL || key === ESC);
          }
          return true;
        });
        text.addEventListener("keydown", (event) => {
          const key = event.key || 0;
          self2.lastKey = key;
          self2.keyCount = 0;
          if (!self2.ime && key === IME && !self2.usesComposition) {
            self2.ime = true;
          } else if (self2.ime && key !== IME && !(key >= 16 && key <= 20 || key >= 91 && key <= 93 || key === 144)) {
            self2.ime = false;
          }
          if (self2.ime) {
            return true;
          }
          if (key === RET) {
            return self2.accept(event);
          }
          return key === ESC ? evtKill(event) : true;
        });
        text.addEventListener("keypress", (event) => {
          self2.keyCount++;
          return self2.processKey(event);
        });
        text.addEventListener("focus", () => {
          makeActive(self2);
        });
        $(text).on("blur", this.saveView.bind(this));
        try {
          $(text).on("compositionstart", () => {
            self2.lastKey = IME;
            self2.usesComposition = true;
            self2.ime = true;
            self2.isCompositionStart = true;
          });
          $(text).on("compositionend", () => {
            self2.lastKey = IME;
            self2.usesComposition = true;
            self2.ime = false;
            self2.isCompositionStart = false;
          });
          $(text).on("textInput", () => {
            self2.ime = false;
            if (self2.isCompositionStart) {
              return;
            }
            self2.invokeSuggestions(false);
          });
        } catch {
        }
        $(text).on("blur", () => {
          self2.usesComposition = false;
          self2.ime = false;
        });
      }
      this.text = text;
      this.icon = make("img");
      let list = null;
      if (!noSuggestions) {
        list = make("select");
        list.addEventListener("click", () => {
          if (self2.highlightSuggestion(0)) {
            self2.textchange(false, true);
          }
        });
        list.addEventListener("dblclick", (e) => {
          if (self2.highlightSuggestion(0)) {
            self2.accept(e);
          }
        });
        list.addEventListener("change", () => {
          self2.highlightSuggestion(0);
          self2.text.focus();
        });
        list.addEventListener("keyup", (event) => {
          if (event.key === ESC) {
            self2.resetKeySelection();
            self2.text.focus();
            setTimeout(() => {
              self2.textchange(true);
            }, HC.suggest_delay);
          } else if (event.key === RET) {
            self2.accept(event);
          }
        });
        if (!HC.fixed_search) {
          const engineSelector = make("select");
          for (const key in suggestionConfigs) {
            if (suggestionConfigs[key].show) {
              const opt = make("option");
              opt.value = key;
              if (key === this.engine) {
                opt.selected = true;
              }
              opt.append(make(suggestionConfigs[key].name, true));
              engineSelector.append(opt);
            }
          }
          engineSelector.addEventListener("change", () => {
            self2.engine = self2.engineSelector.options[self2.engineSelector.selectedIndex].value;
            self2.text.focus();
            self2.textchange(true, true);
          });
          this.engineSelector = engineSelector;
        }
      }
      this.list = list;
      const button_label = (_id, defaultText) => {
        const label = null;
        if (!label || !label.data) {
          return defaultText;
        }
        return label.data;
      };
      const OK = make("input");
      OK.type = "button";
      OK.value = button_label("wpOkUploadLbl", getMessage("messages-ok"));
      OK.addEventListener("click", this.accept.bind(this));
      this.ok = OK;
      const cancel = make("input");
      cancel.type = "button";
      cancel.value = button_label("wpCancelUploadLbl", getMessage("messages-cancel"));
      cancel.addEventListener("click", this.cancel.bind(this));
      this.cancelButton = cancel;
      const span = make("span");
      span.className = "hotcatinput";
      span.style.position = "relative";
      span.append(text);
      span.style.whiteSpace = "nowrap";
      if (list) {
        span.append(list);
      }
      if (this.engineSelector) {
        span.append(this.engineSelector);
      }
      if (!noSuggestions) {
        span.append(this.icon);
      }
      span.append(OK);
      span.append(cancel);
      form.append(span);
      form.style.display = "none";
      this.span.append(form);
    }
    display(event) {
      if (this.isAddCategory && !onUpload && this.line) {
        new CategoryEditor(this.line, null, this.span, true);
      }
      if (!commitButton && !onUpload) {
        for (var _i4 = 0, _editors4 = editors; _i4 < _editors4.length; _i4++) {
          const editor = _editors4[_i4];
          if (editor.state !== UNCHANGED) {
            setMultiInput();
            break;
          }
        }
      }
      if (!this.form) {
        this.makeForm();
      }
      if (this.list) {
        this.list.style.display = "none";
      }
      if (this.engineSelector) {
        this.engineSelector.style.display = "none";
      }
      this.currentCategory = this.lastSavedCategory;
      this.currentExists = this.lastSavedExists;
      this.currentHidden = this.lastSavedHidden;
      this.currentKey = this.lastSavedKey;
      this.icon.src = this.currentExists ? HC.existsYes : HC.existsNo;
      this.text.value = this.currentCategory + (this.currentKey === null ? "" : "|".concat(this.currentKey));
      this.originalState = this.state;
      this.lastInput = this.currentCategory;
      this.inputExists = this.currentExists;
      this.state = this.state === UNCHANGED ? OPEN : CHANGE_PENDING;
      this.lastSelection = {
        start: this.currentCategory.length,
        end: this.currentCategory.length
      };
      this.showsList = false;
      if (this.catLink) {
        this.catLink.style.display = "none";
      }
      this.linkSpan.style.display = "none";
      this.form.style.display = "inline";
      this.ok.disabled = false;
      const result = evtKill(event);
      this.text.focus();
      this.text.readOnly = false;
      checkMultiInput();
      return result;
    }
    show(event, engine, readOnly) {
      const result = this.display(event);
      const v = this.lastSavedCategory;
      if (v.length === 0) {
        return result;
      }
      this.text.readOnly = !!readOnly;
      this.engine = engine;
      this.textchange(false, true);
      return result;
    }
    open(event) {
      return this.show(event, this.engine && suggestionConfigs[this.engine].temp ? HC.suggestions : this.engine);
    }
    down(event) {
      return this.show(event, "subcat", true);
    }
    up(event) {
      return this.show(event, "parentcat");
    }
    cancel() {
      if (this.isAddCategory && !onUpload) {
        this.removeEditor();
        return;
      }
      this.inactivate();
      this.form.style.display = "none";
      if (this.catLink) {
        this.catLink.style.display = "";
      }
      this.linkSpan.style.display = "";
      this.state = this.originalState;
      this.currentCategory = this.lastSavedCategory;
      this.currentKey = this.lastSavedKey;
      this.currentExists = this.lastSavedExists;
      this.currentHidden = this.lastSavedHidden;
      if (this.catLink) {
        this.catLink.title = this.currentKey && this.currentKey.length > 0 ? this.currentKey : "";
      }
      if (this.state === UNCHANGED) {
        if (this.catLink) {
          this.catLink.style.backgroundColor = "transparent";
        }
      } else if (!onUpload) {
        try {
          this.catLink.style.backgroundColor = HC.bg_changed;
        } catch {
        }
      }
      checkMultiInput();
    }
    removeEditor() {
      if (!newDOM) {
        const next = this.span.nextSibling;
        if (next) {
          next.remove();
        }
      }
      if (this.span && this.span.parentNode) {
        this.span.remove();
      }
      for (let i = 0; i < editors.length; i++) {
        if (editors[i] === this) {
          editors.splice(i, 1);
          break;
        }
      }
      checkMultiInput();
    }
    rollback(event) {
      this.undoLink.remove();
      this.undoLink = null;
      this.currentCategory = this.originalCategory;
      this.currentKey = this.originalKey;
      this.currentExists = this.originalExists;
      this.currentHidden = this.originalHidden;
      this.lastSavedCategory = this.originalCategory;
      this.lastSavedKey = this.originalKey;
      this.lastSavedExists = this.originalExists;
      this.lastSavedHidden = this.originalHidden;
      this.state = UNCHANGED;
      if (!this.currentCategory || this.currentCategory.length === 0) {
        this.removeEditor();
      } else {
        this.catLink.firstChild.remove();
        this.catLink.append(make(this.currentCategory, true));
        this.catLink.href = wikiPagePath("".concat(HC.category_canonical, ":").concat(this.currentCategory));
        this.catLink.title = this.currentKey || "";
        this.catLink.className = this.currentExists ? "" : "new";
        this.catLink.style.backgroundColor = "transparent";
        if (this.upDownLinks) {
          this.upDownLinks.style.display = this.currentExists ? "" : "none";
        }
        checkMultiInput();
      }
      return evtKill(event);
    }
    inactivate() {
      if (this.list) {
        this.list.style.display = "none";
      }
      if (this.engineSelector) {
        this.engineSelector.style.display = "none";
      }
      this.is_active = false;
    }
    acceptCheck(dontCheck) {
      this.sanitizeInput();
      const value = this.text.value.split("|");
      let key = null;
      if (value.length > 1) {
        [, key] = value;
      }
      let v = value[0].replace(/_/g, " ").trim();
      if (HC.capitalizePageNames) {
        v = capitalize(v);
      }
      this.lastInput = v;
      v = replaceShortcuts(v, HC.shortcuts);
      if (v.length === 0) {
        this.cancel();
        return false;
      }
      if (!dontCheck && (conf.wgNamespaceNumber === 14 && v === conf.wgTitle || HC.blacklist && HC.blacklist.test(v))) {
        this.cancel();
        return false;
      }
      this.currentCategory = v;
      this.currentKey = key;
      this.currentExists = this.inputExists;
      return true;
    }
    accept(event) {
      this.noCommit = evtKeys(event) === 1;
      const result = evtKill(event);
      if (this.acceptCheck()) {
        const toResolve = [this];
        const original = this.currentCategory;
        resolveMulti(toResolve, (resolved) => {
          if (resolved[0].dab) {
            showDab(resolved[0]);
          } else if (resolved[0].acceptCheck(true)) {
            resolved[0].commit(resolved[0].currentCategory === original ? null : getMessage("messages-cat_resolved", original));
          }
        });
      }
      return result;
    }
    close() {
      if (!this.catLink) {
        this.catLink = make("a");
        this.catLink.append(make("foo", true));
        this.catLink.style.display = "none";
        this.span.insertBefore(this.catLink, this.span.firstChild.nextSibling);
      }
      this.catLink.firstChild.remove();
      this.catLink.append(make(this.currentCategory, true));
      this.catLink.href = wikiPagePath("".concat(HC.category_canonical, ":").concat(this.currentCategory));
      this.catLink.className = this.currentExists ? "" : "new";
      this.lastSavedCategory = this.currentCategory;
      this.lastSavedKey = this.currentKey;
      this.lastSavedExists = this.currentExists;
      this.lastSavedHidden = this.currentHidden;
      this.inactivate();
      this.form.style.display = "none";
      this.catLink.title = this.currentKey || "";
      this.catLink.style.display = "";
      if (this.isAddCategory) {
        if (onUpload && this.line) {
          new CategoryEditor(this.line, null, this.span, true);
        }
        this.isAddCategory = false;
        this.linkSpan.remove();
        this.makeLinkSpan();
        this.span.append(this.linkSpan);
      }
      if (!this.undoLink) {
        const span = make("span");
        const link = make("a");
        link.href = "#catlinks";
        link.addEventListener("click", this.rollback.bind(this));
        link.append(make(HC.links.undo, true));
        link.title = getMessage("tooltips-undo");
        span.append(make(" ", true));
        span.append(link);
        this.normalLinks.append(span);
        this.undoLink = span;
        if (!onUpload) {
          try {
            this.catLink.style.backgroundColor = HC.bg_changed;
          } catch {
          }
        }
      }
      if (this.upDownLinks) {
        this.upDownLinks.style.display = this.lastSavedExists ? "" : "none";
      }
      this.linkSpan.style.display = "";
      this.state = CHANGED;
      checkMultiInput();
    }
    commit() {
      if (this.currentCategory === this.originalCategory && (this.currentKey === this.originalKey || this.currentKey === null && this.originalKey.length === 0) || conf.wgNamespaceNumber === 14 && this.currentCategory === conf.wgTitle || HC.blacklist && HC.blacklist.test(this.currentCategory)) {
        this.cancel();
        return;
      }
      this.close();
      if (!commitButton && !onUpload) {
        const self2 = this;
        initiateEdit((failure) => {
          performChanges(failure, self2);
        }, (msg) => {
          void mw.notify(msg, {
            tag: "hotCat"
          });
        });
      }
    }
    remove(event) {
      this.doRemove(evtKeys(event) === 1);
      return evtKill(event);
    }
    doRemove(noCommit) {
      if (this.isAddCategory) {
        this.cancel();
        return;
      }
      if (!commitButton && !onUpload) {
        for (var _i5 = 0, _editors5 = editors; _i5 < _editors5.length; _i5++) {
          const editor = _editors5[_i5];
          if (editor.state !== UNCHANGED) {
            setMultiInput();
            break;
          }
        }
      }
      if (commitButton) {
        this.catLink.title = "";
        this.catLink.style.cssText += "; text-decoration : line-through !important;";
        try {
          this.catLink.style.backgroundColor = HC.bg_changed;
        } catch {
        }
        this.originalState = this.state;
        this.state = DELETED;
        this.normalLinks.style.display = "none";
        this.undelLink.style.display = "";
        checkMultiInput();
      } else if (onUpload) {
        this.removeEditor();
      } else {
        this.originalState = this.state;
        this.state = DELETED;
        this.noCommit = noCommit || HC.del_needs_diff;
        const self2 = this;
        initiateEdit((failure) => {
          performChanges(failure, self2);
        }, (msg) => {
          self2.state = self2.originalState;
          void mw.notify(msg, {
            tag: "hotCat"
          });
        });
      }
    }
    restore(event) {
      this.catLink.title = this.currentKey || "";
      this.catLink.style.textDecoration = "";
      this.state = this.originalState;
      if (this.state === UNCHANGED) {
        this.catLink.style.backgroundColor = "transparent";
      } else {
        try {
          this.catLink.style.backgroundColor = HC.bg_changed;
        } catch {
        }
      }
      this.normalLinks.style.display = "";
      this.undelLink.style.display = "none";
      checkMultiInput();
      return evtKill(event);
    }
    // Internal operations
    selectEngine(engineName) {
      if (!this.engineSelector) {
        return;
      }
      for (let i = 0; i < this.engineSelector.options.length; i++) {
        this.engineSelector.options[i].selected = this.engineSelector.options[i].value === engineName;
      }
    }
    sanitizeInput() {
      let v = this.text.value || "";
      v = v.replace(/^(\s|_)+/, "");
      const re = new RegExp("^(".concat(HC.category_regexp, "):"));
      if (re.test(v)) {
        v = v.slice(Math.max(0, v.indexOf(":") + 1)).replace(/^(\s|_)+/, "");
      }
      v = v.replace(/\u200E$/, "");
      if (HC.capitalizePageNames) {
        v = capitalize(v);
      }
      if (this.text.value !== null && this.text.value !== v) {
        this.text.value = v;
      }
    }
    makeCall(url, callbackObj, engine, queryKey, cleanKey) {
      let cb = callbackObj;
      const e = engine;
      const v = queryKey;
      const z = cleanKey;
      const self2 = this;
      const done = () => {
        cb.callsMade++;
        if (cb.callsMade === cb.nofCalls) {
          if (cb.exists) {
            cb.allTitles.exists = true;
          }
          if (cb.normalized) {
            cb.allTitles.normalized = cb.normalized;
          }
          if (!cb.dontCache && !suggestionConfigs[cb.engineName].cache[z]) {
            suggestionConfigs[cb.engineName].cache[z] = cb.allTitles;
          }
          self2.text.readOnly = false;
          if (!cb.cancelled) {
            self2.showSuggestions(cb.allTitles, cb.noCompletion, v, cb.engineName);
          }
          if (cb === self2.callbackObj) {
            self2.callbackObj = null;
          }
          cb = void 0;
        }
      };
      $.getJSON(url, (json) => {
        const titles = e.handler(json, z);
        if (titles && titles.length > 0) {
          cb.allTitles = cb.allTitles === null ? titles : [...cb.allTitles, ...(0, import_ext_gadget2.generateArray)(titles)];
          if (titles.exists) {
            cb.exists = true;
          }
          if (titles.normalized) {
            cb.normalized = titles.normalized;
          }
        }
        done();
      }).fail((req) => {
        if (!req) {
          noSuggestions = true;
        }
        cb.dontCache = true;
        done();
      });
    }
    callbackObj = null;
    textchange(dont_autocomplete, force) {
      makeActive(this);
      this.sanitizeInput();
      let v = this.text.value;
      const pipe = v.indexOf("|");
      if (pipe === -1) {
        this.currentKey = null;
      } else {
        this.currentKey = v.slice(Math.max(0, pipe + 1));
        v = v.slice(0, Math.max(0, pipe));
      }
      if (this.lastInput === v && !force) {
        return;
      }
      if (this.lastInput !== v) {
        checkMultiInput();
      }
      this.lastInput = v;
      this.lastRealInput = v;
      this.ok.disabled = v.length > 0 && HC.blacklist && HC.blacklist.test(v);
      if (noSuggestions) {
        if (this.list) {
          this.list.style.display = "none";
        }
        if (this.engineSelector) {
          this.engineSelector.style.display = "none";
        }
        if (this.icon) {
          this.icon.style.display = "none";
        }
        return;
      }
      if (v.length === 0) {
        this.showSuggestions([]);
        return;
      }
      let cleanKey = v.replace(/[\u200E\u200F\u202A-\u202E]/g, "").replace(wikiTextBlankRE, " ");
      cleanKey = replaceShortcuts(cleanKey, HC.shortcuts);
      cleanKey = cleanKey.trim();
      if (cleanKey.length === 0) {
        this.showSuggestions([]);
        return;
      }
      if (this.callbackObj) {
        this.callbackObj.cancelled = true;
      }
      const engineName = suggestionConfigs[this.engine] ? this.engine : "combined";
      dont_autocomplete || (dont_autocomplete = suggestionConfigs[engineName].noCompletion);
      if (suggestionConfigs[engineName].cache[cleanKey]) {
        this.showSuggestions(suggestionConfigs[engineName].cache[cleanKey], dont_autocomplete, v, engineName);
        return;
      }
      const {
        engines
      } = suggestionConfigs[engineName];
      this.callbackObj = {
        allTitles: null,
        callsMade: 0,
        nofCalls: engines.length,
        noCompletion: dont_autocomplete,
        engineName
      };
      this.makeCalls(engines, this.callbackObj, v, cleanKey);
    }
    makeCalls(engines, cb, v, cleanKey) {
      var _iterator3 = _createForOfIteratorHelper(engines), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          const engine_ = _step3.value;
          const engine = suggestionEngines[engine_];
          const url = conf.wgScriptPath + engine.uri.replace(/\$1/g, encodeURIComponent(cleanKey));
          this.makeCall(url, cb, engine, v, cleanKey);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
    showSuggestions(titles, dontAutocomplete, queryKey, engineName) {
      this.text.readOnly = false;
      this.dab = null;
      this.showsList = false;
      if (!this.list) {
        return;
      }
      if (noSuggestions) {
        if (this.list) {
          this.list.style.display = "none";
        }
        if (this.engineSelector) {
          this.engineSelector.style.display = "none";
        }
        if (this.icon) {
          this.icon.style.display = "none";
        }
        this.inputExists = true;
        return;
      }
      this.engineName = engineName;
      if (engineName) {
        if (!this.engineSelector) {
          this.engineName = null;
        }
      } else if (this.engineSelector) {
        this.engineSelector.style.display = "none";
      }
      if (queryKey) {
        if (this.lastInput.indexOf(queryKey)) {
          return;
        }
        if (this.lastQuery && this.lastInput.indexOf(this.lastQuery) === 0 && this.lastQuery.length > queryKey.length) {
          return;
        }
      }
      this.lastQuery = queryKey;
      let v = this.text.value.split("|");
      const key = v.length > 1 ? "|".concat(v[1]) : "";
      v = HC.capitalizePageNames ? capitalize(v[0]) : v[0];
      let vNormalized = v;
      const knownToExist = titles && titles.exists;
      let i;
      if (titles) {
        if (titles.normalized && v.indexOf(queryKey) === 0) {
          vNormalized = titles.normalized + v.slice(queryKey.length);
        }
        const vLow = vNormalized.toLowerCase();
        if (HC.blacklist) {
          for (i = 0; i < titles.length; i++) {
            if (HC.blacklist.test(titles[i])) {
              titles.splice(i, 1);
              i--;
            }
          }
        }
        titles.sort((a, b) => {
          if (a === b) {
            return 0;
          }
          if (a.indexOf(b) === 0) {
            return 1;
          }
          if (b.indexOf(a) === 0) {
            return -1;
          }
          let prefixMatchA = a.indexOf(vNormalized) === 0 ? 1 : 0;
          let prefixMatchB = b.indexOf(vNormalized) === 0 ? 1 : 0;
          if (prefixMatchA !== prefixMatchB) {
            return prefixMatchB - prefixMatchA;
          }
          const aLow = a.toLowerCase();
          const bLow = b.toLowerCase();
          prefixMatchA = aLow.indexOf(vLow) === 0 ? 1 : 0;
          prefixMatchB = bLow.indexOf(vLow) === 0 ? 1 : 0;
          if (prefixMatchA !== prefixMatchB) {
            return prefixMatchB - prefixMatchA;
          }
          if (a < b) {
            return -1;
          }
          if (b < a) {
            return 1;
          }
          return 0;
        });
        for (i = 0; i < titles.length; i++) {
          if (i + 1 < titles.length && titles[i] === titles[i + 1] || conf.wgNamespaceNumber === 14 && titles[i] === conf.wgTitle) {
            titles.splice(i, 1);
            i--;
          }
        }
      }
      if (!titles || titles.length === 0) {
        if (this.list) {
          this.list.style.display = "none";
        }
        if (this.engineSelector) {
          this.engineSelector.style.display = "none";
        }
        if (engineName && suggestionConfigs[engineName] && !suggestionConfigs[engineName].temp) {
          if (this.icon) {
            this.icon.src = HC.existsNo;
          }
          this.inputExists = false;
        }
        return;
      }
      const [firstTitle] = titles;
      const completed = this.autoComplete(firstTitle, v, vNormalized, key, dontAutocomplete);
      const existing = completed || knownToExist || firstTitle === replaceShortcuts(v, HC.shortcuts);
      if (engineName && suggestionConfigs[engineName] && !suggestionConfigs[engineName].temp) {
        this.icon.src = existing ? HC.existsYes : HC.existsNo;
        this.inputExists = existing;
      }
      if (completed) {
        this.lastInput = firstTitle;
        if (titles.length === 1) {
          this.list.style.display = "none";
          if (this.engineSelector) {
            this.engineSelector.style.display = "none";
          }
          return;
        }
      }
      while (this.list.firstChild) {
        this.list.firstChild.remove();
      }
      for (i = 0; i < titles.length; i++) {
        const opt = make("option");
        opt.append(make(titles[i], true));
        opt.selected = completed && i === 0;
        this.list.append(opt);
      }
      this.displayList();
    }
    displayList() {
      this.showsList = true;
      if (!this.is_active) {
        this.list.style.display = "none";
        if (this.engineSelector) {
          this.engineSelector.style.display = "none";
        }
        return;
      }
      let nofItems = Math.min(this.list.options.length, HC.listSize);
      if (nofItems <= 1) {
        nofItems = 2;
      }
      this.list.size = nofItems;
      this.list.style.align = is_rtl ? "right" : "left";
      this.list.style.zIndex = 5;
      this.list.style.position = "absolute";
      const anchor = is_rtl ? "right" : "left";
      let listh = 0;
      if (this.list.style.display === "none") {
        this.list.style.top = "".concat(this.text.offsetTop, "px");
        this.list.style[anchor] = "-10000px";
        this.list.style.display = "";
        listh = this.list.offsetHeight;
        this.list.style.display = "none";
      } else {
        listh = this.list.offsetHeight;
      }
      let maxListHeight = listh;
      if (nofItems < HC.listSize) {
        maxListHeight = listh / nofItems * HC.listSize;
      }
      const viewport = (what) => {
        const s = "client".concat(what);
        return document.documentElement ? document.documentElement[s] : 0;
      };
      const scroll_offset = (what) => {
        const s = "scroll".concat(what);
        let result = document.documentElement ? document.documentElement[s] : 0;
        if (is_rtl && what === "Left") {
          if (result < 0) {
            result = -result;
          }
          if (!is_webkit) {
            result = scroll_offset("Width") - viewport("Width") - result;
          }
        }
        return result;
      };
      const position = (node) => {
        if (node.getBoundingClientRect) {
          const box = node.getBoundingClientRect();
          return {
            x: Math.round(box.left + scroll_offset("Left")),
            y: Math.round(box.top + scroll_offset("Top"))
          };
        }
        let t = 0;
        let l = 0;
        do {
          t += node.offsetTop || 0;
          l += node.offsetLeft || 0;
          node = node.offsetParent;
        } while (node);
        return {
          x: l,
          y: t
        };
      };
      const textPos = position(this.text);
      const nl = 0;
      let nt = 0;
      let offset = 0;
      const textBoxWidth = this.text.offsetWidth || this.text.clientWidth;
      if (this.engineName) {
        this.engineSelector.style.zIndex = 5;
        this.engineSelector.style.position = "absolute";
        this.engineSelector.style.width = "".concat(textBoxWidth, "px");
        if (this.engineSelector.style.display === "none") {
          this.engineSelector.style[anchor] = "-10000px";
          this.engineSelector.style.top = "0";
          this.engineSelector.style.display = "";
          offset = this.engineSelector.offsetHeight;
          this.engineSelector.style.display = "none";
        } else {
          offset = this.engineSelector.offsetHeight;
        }
        this.engineSelector.style[anchor] = "".concat(nl, "px");
      }
      if (textPos.y < maxListHeight + offset + 1) {
        nt = this.text.offsetHeight + offset + 1;
        if (this.engineName) {
          this.engineSelector.style.top = "".concat(this.text.offsetHeight, "px");
        }
      } else {
        nt = -listh - offset - 1;
        if (this.engineName) {
          this.engineSelector.style.top = "".concat(-(offset + 1), "px");
        }
      }
      this.list.style.top = "".concat(nt, "px");
      this.list.style.width = "";
      this.list.style[anchor] = "".concat(nl, "px");
      if (this.engineName) {
        this.selectEngine(this.engineName);
        this.engineSelector.style.display = "";
      }
      this.list.style.display = "block";
      if (this.list.offsetWidth < textBoxWidth) {
        this.list.style.width = "".concat(textBoxWidth, "px");
        return;
      }
      const scroll = scroll_offset("Left");
      const view_w = viewport("Width");
      let w = this.list.offsetWidth;
      const l_pos = position(this.list);
      let left = l_pos.x;
      let right = left + w;
      if (left < scroll || right > scroll + view_w) {
        if (w > view_w) {
          w = view_w;
          this.list.style.width = "".concat(w, "px");
          if (is_rtl) {
            left = right - w;
          } else {
            right = left + w;
          }
        }
        let relative_offset = 0;
        if (left < scroll) {
          relative_offset = scroll - left;
        } else if (right > scroll + view_w) {
          relative_offset = -(right - scroll - view_w);
        }
        if (is_rtl) {
          relative_offset = -relative_offset;
        }
        if (relative_offset) {
          this.list.style[anchor] = "".concat(nl + relative_offset, "px");
        }
      }
    }
    autoComplete(newVal, actVal, normalizedActVal, key, dontModify) {
      if (newVal === actVal) {
        return true;
      }
      if (dontModify || this.ime || !this.canSelect()) {
        return false;
      }
      if (newVal.indexOf(actVal)) {
        if (normalizedActVal && newVal.indexOf(normalizedActVal) === 0) {
          if (this.lastRealInput === actVal) {
            this.lastRealInput = normalizedActVal;
          }
          actVal = normalizedActVal;
        } else {
          return false;
        }
      }
      this.text.focus();
      this.text.value = newVal + key;
      this.setSelection(actVal.length, newVal.length);
      return true;
    }
    canSelect() {
      return this.text.setSelectionRange || this.text.selectionStart !== void 0 && this.text.selectionEnd !== void 0;
    }
    setSelection(from, to) {
      if (!this.text.value) {
        return;
      }
      if (this.text.setSelectionRange) {
        this.text.setSelectionRange(from, to);
      } else if (this.text.selectionStart !== void 0) {
        if (from > this.text.selectionStart) {
          this.text.selectionEnd = to;
          this.text.selectionStart = from;
        } else {
          this.text.selectionStart = from;
          this.text.selectionEnd = to;
        }
      }
    }
    getSelection() {
      let from = 0;
      let to = 0;
      if (!this.text.value) {
      } else if (this.text.selectionStart !== void 0) {
        from = this.text.selectionStart;
        to = this.text.selectionEnd;
      }
      return {
        start: from,
        end: to
      };
    }
    saveView() {
      this.lastSelection = this.getSelection();
    }
    processKey(event) {
      let dir = 0;
      switch (this.lastKey) {
        case UP:
          dir = -1;
          break;
        case DOWN:
          dir = 1;
          break;
        case PGUP:
          dir = -HC.listSize;
          break;
        case PGDOWN:
          dir = HC.listSize;
          break;
        case ESC:
          return evtKill(event);
      }
      if (dir) {
        if (this.list.style.display !== "none") {
          this.highlightSuggestion(dir);
          return evtKill(event);
        } else if (this.keyCount <= 1 && (!this.callbackObj || this.callbackObj.callsMade === this.callbackObj.nofCalls)) {
          this.textchange();
        }
      }
      return true;
    }
    highlightSuggestion(dir) {
      if (noSuggestions || !this.list || this.list.style.display === "none") {
        return false;
      }
      const curr = this.list.selectedIndex;
      let tgt = -1;
      if (dir === 0) {
        if (curr < 0 || curr >= this.list.options.length) {
          return false;
        }
        tgt = curr;
      } else {
        tgt = curr < 0 ? 0 : curr + dir;
        tgt = Math.max(tgt, 0);
        if (tgt >= this.list.options.length) {
          tgt = this.list.options.length - 1;
        }
      }
      if (tgt !== curr || dir === 0) {
        if (curr >= 0 && curr < this.list.options.length && dir !== 0) {
          this.list.options[curr].selected = false;
        }
        this.list.options[tgt].selected = true;
        const v = this.text.value.split("|");
        const key = v.length > 1 ? "|".concat(v[1]) : "";
        const completed = this.autoComplete(this.list.options[tgt].text, this.lastRealInput, null, key, false);
        if (!completed || this.list.options[tgt].text === this.lastRealInput) {
          this.text.value = this.list.options[tgt].text + key;
          if (this.canSelect()) {
            this.setSelection(this.list.options[tgt].text.length, this.list.options[tgt].text.length);
          }
        }
        this.lastInput = this.list.options[tgt].text;
        this.inputExists = true;
        if (this.icon) {
          this.icon.src = HC.existsYes;
        }
        this.state = CHANGE_PENDING;
      }
      return true;
    }
    resetKeySelection() {
      if (noSuggestions || !this.list || this.list.style.display === "none") {
        return false;
      }
      const curr = this.list.selectedIndex;
      if (curr >= 0 && curr < this.list.options.length) {
        this.list.options[curr].selected = false;
        const v = this.text.value.split("|");
        const key = v.length > 1 ? "|".concat(v[1]) : "";
        let result = v[0] !== this.lastInput;
        if (v[0] !== this.lastRealInput) {
          this.text.value = this.lastRealInput + key;
          result = true;
        }
        this.lastInput = this.lastRealInput;
        return result;
      }
      return false;
    }
  }
  const initialize = () => {
    const config = {};
    HC.dont_add_to_watchlist = window.hotcat_dont_add_to_watchlist === void 0 ? config.HotCatDontAddToWatchlist === void 0 ? HC.dont_add_to_watchlist : config.HotCatDontAddToWatchlist : !!window.hotcat_dont_add_to_watchlist;
    HC.no_autocommit = window.hotcat_no_autocommit === void 0 ? config.HotCatNoAutoCommit === void 0 ? conf.wgNamespaceNumber % 2 ? true : HC.no_autocommit : config.HotCatNoAutoCommit : !!window.hotcat_no_autocommit;
    HC.del_needs_diff = window.hotcat_del_needs_diff === void 0 ? config.HotCatDelNeedsDiff === void 0 ? HC.del_needs_diff : config.HotCatDelNeedsDiff : !!window.hotcat_del_needs_diff;
    HC.suggest_delay = window.hotcat_suggestion_delay || config.HotCatSuggestionDelay || HC.suggest_delay;
    HC.editbox_width = window.hotcat_editbox_width || config.HotCatEditBoxWidth || HC.editbox_width;
    HC.suggestions = window.hotcat_suggestions || config.HotCatSuggestions || HC.suggestions;
    if (typeof HC.suggestions !== "string" || !suggestionConfigs[HC.suggestions]) {
      HC.suggestions = "combined";
    }
    HC.fixed_search = window.hotcat_suggestions_fixed === void 0 ? config.HotCatFixedSuggestions === void 0 ? HC.fixed_search : config.HotCatFixedSuggestions : !!window.hotcat_suggestions_fixed;
    HC.single_minor = window.hotcat_single_changes_are_minor === void 0 ? config.HotCatMinorSingleChanges === void 0 ? HC.single_minor : config.HotCatMinorSingleChanges : !!window.hotcat_single_changes_are_minor;
    HC.bg_changed = window.hotcat_changed_background || config.HotCatChangedBackground || HC.bg_changed;
    HC.use_up_down = window.hotcat_use_category_links === void 0 ? config.HotCatUseCategoryLinks === void 0 ? HC.use_up_down : config.HotCatUseCategoryLinks : !!window.hotcat_use_category_links;
    HC.listSize = window.hotcat_list_size || config.HotCatListSize || HC.listSize;
    HC.changeTag = config.HotCatChangeTag || "";
    if (HC.changeTag) {
      const eForm = document.editform;
      const catRegExp = new RegExp("^\\[\\[(".concat(HC.category_regexp, "):"));
      let oldTxt;
      const isMinorChange = () => {
        let newTxt = eForm.wpTextbox1;
        if (!newTxt) {
          return;
        }
        newTxt = newTxt.value;
        const oldLines = oldTxt.match(/^.*$/gm);
        const newLines = newTxt.match(/^.*$/gm);
        let cArr;
        const except = (aArr, bArr) => {
          const result = [];
          let lArr;
          let sArr;
          if (aArr.length < bArr.length) {
            lArr = bArr;
            sArr = aArr;
          } else {
            lArr = aArr;
            sArr = bArr;
          }
          var _iterator4 = _createForOfIteratorHelper(lArr), _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
              const item = _step4.value;
              const ind = sArr.indexOf(item);
              if (ind === -1) {
                result[result.length] = item;
              } else {
                sArr.splice(ind, 1);
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
          return [...result, ...sArr];
        };
        cArr = except(oldLines, newLines);
        if (cArr.length > 0) {
          cArr = cArr.filter((c) => {
            c = c.trim();
            return c && !catRegExp.test(c);
          });
        }
        if (cArr.length === 0) {
          oldTxt = newTxt;
          return true;
        }
      };
      if (conf.wgAction === "submit" && conf.wgArticleId && eForm && eForm.wpSummary && document.querySelector("#wikiDiff")) {
        const sum = eForm.wpSummary;
        const sumA = eForm.wpAutoSummary;
        if (sum.value && sumA.value === HC.changeTag) {
          sumA.value = sumA.value.replace(HC.changeTag, "d41d8cd98f00b204e9800998ecf8427e");
          const $ct = $("<input>").attr({
            type: "hidden",
            name: "wpChangeTags"
          }).val(HC.changeTag);
          $(eForm).append($ct);
          oldTxt = eForm.wpTextbox1.value;
          const $body = $("body");
          $body.find("input[name=wpSave]").one("click", () => {
            if ($ct.val()) {
              sum.value = sum.value.replace(getMessage("messages-using") || getMessage("messages-prefix"), "");
            }
          });
          const removeChangeTag = () => {
            $(eForm.wpTextbox1).add(sum).one("input", () => {
              setTimeout(() => {
                if (isMinorChange()) {
                  removeChangeTag();
                } else {
                  $ct.val("");
                }
              }, 500);
            });
          };
          removeChangeTag();
        }
      }
    }
    HC.listSize = Number.parseInt(HC.listSize, 10);
    if (Number.isNaN(HC.listSize) || HC.listSize < 5) {
      HC.listSize = 5;
    }
    HC.listSize = Math.min(HC.listSize, 30);
    for (var _i6 = 0, _Object$entries = Object.entries(suggestionConfigs); _i6 < _Object$entries.length; _i6++) {
      const [key, suggestionConfig] = _Object$entries[_i6];
      try {
        if (key && getMessage("engine_names-".concat(key))) {
          suggestionConfig.name = getMessage("engine_names-".concat(key));
        }
      } catch {
        continue;
      }
    }
    is_rtl = hasClass(document.querySelector("body"), "rtl");
    if (!is_rtl) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        is_rtl = document.defaultView.getComputedStyle(document.querySelector("body"), null).getPropertyValue("direction");
      } else {
        is_rtl = $("body")[0].style.direction;
      }
      is_rtl = is_rtl === "rtl";
    }
  };
  const can_edit = () => {
    return document.querySelector("#ca-edit") !== null;
  };
  const closeForm = function() {
    for (var _i7 = 0, _editors6 = editors; _i7 < _editors6.length; _i7++) {
      const edit = _editors6[_i7];
      if (edit.state === OPEN) {
        edit.cancel();
      } else if (edit.state === CHANGE_PENDING) {
        edit.sanitizeInput();
        const value = edit.text.value.split("|");
        let key = null;
        if (value.length > 1) {
          [, key] = value;
        }
        const v = value[0].replace(/_/g, " ").trim();
        if (v.length === 0) {
          edit.cancel();
        } else {
          edit.currentCategory = v;
          edit.currentKey = key;
          edit.currentExists = this.inputExists;
          edit.close();
        }
      }
    }
  };
  const setup_upload = () => {
    onUpload = true;
    let ip = document.querySelector("#mw-htmlform-description") || document.querySelector("input[name=wpDestFile]");
    if (!ip) {
      ip = document.querySelector("input[name=wpDestFile]");
      while (ip && ip.nodeName.toLowerCase() !== "table") {
        ip = ip.parentNode;
      }
    }
    if (!ip) {
      return;
    }
    const reupload = document.querySelector("input[name=wpForReUpload]");
    const destFile = document.querySelector("input[name=wpDestFile]");
    if (reupload && !!reupload.value || destFile && (destFile.disabled || destFile.readOnly)) {
      return;
    }
    const labelCell = make("td");
    const lineCell = make("td");
    catLine = make("div");
    catLine.className = "catlinks";
    catLine.id = "catlinks";
    catLine.style.textAlign = is_rtl ? "right" : "left";
    catLine.style.margin = "0";
    catLine.style.border = "none";
    lineCell.append(catLine);
    const label = null;
    if (label) {
      labelCell.id = "hotcatLabelTranslated";
      labelCell.append(label);
    } else {
      labelCell.id = "hotcatLabel";
      labelCell.append(make(getMessage("categories"), true));
    }
    labelCell.className = "mw-label";
    labelCell.style.textAlign = "right";
    labelCell.style.verticalAlign = "middle";
    const form = document.querySelector("#upload") || document.querySelector("#mw-upload-form");
    if (form) {
      const newRow = ip.insertRow(-1);
      newRow.append(labelCell);
      newRow.append(lineCell);
      form.addEventListener("submit", (oldSubmit, ...args) => {
        return (() => {
          let do_submit = true;
          if (oldSubmit) {
            if (typeof oldSubmit === "string") {
              do_submit = window.eval(oldSubmit);
            } else if (oldSubmit instanceof Function) {
              do_submit = oldSubmit.apply(form, [oldSubmit, ...args]);
            }
          }
          if (!do_submit) {
            return false;
          }
          closeForm();
          const eb = document.querySelector("textarea[name=wpUploadDescription]") || document.querySelector("#wpDesc");
          let addedOne = false;
          for (var _i8 = 0, _editors7 = editors; _i8 < _editors7.length; _i8++) {
            const editor = _editors7[_i8];
            const t = editor.currentCategory;
            if (!t) {
              continue;
            }
            const key = editor.currentKey;
            const new_cat = "[[".concat(HC.category_canonical, ":").concat(t).concat(key ? "|".concat(key) : "", "]]");
            const nowikiRegex = new RegExp("<no".concat("wiki>", String.raw(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["(s|S)*?</no"], ["(\\s|\\S)*?</no"]))), "wiki", ">"), "g");
            const _cleanedText = eb.value.replace(/<!--(\s|\S)*?-->/g, "").replace(nowikiRegex);
            if (!find_category(_cleanedText, t, true)) {
              eb.value += "\n".concat(new_cat);
              addedOne = true;
            }
          }
          if (addedOne) {
            const regex = new RegExp("{{$".concat("subst:").concat("unc}}"), "g");
            eb.value = eb.value.replace(regex, "");
          }
          return true;
        })(form.onsubmit);
      });
    }
  };
  let cleanedText = null;
  const isOnPage = ({
    firstChild
  }) => {
    if (firstChild.nodeType !== Node.ELEMENT_NODE) {
      return null;
    }
    let catTitle = title(firstChild.getAttribute("href"));
    if (!catTitle) {
      return null;
    }
    catTitle = catTitle.slice(catTitle.indexOf(":") + 1).replace(/_/g, " ");
    if (HC.blacklist && HC.blacklist.test(catTitle)) {
      return null;
    }
    const result = {
      title: catTitle,
      match: ["", "", ""]
    };
    if (pageText === null) {
      return result;
    }
    if (cleanedText === null) {
      const nowikiRegex = new RegExp("<no".concat("wiki>", String.raw(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["(s|S)*?</no"], ["(\\s|\\S)*?</no"]))), "wiki", ">"), "g");
      cleanedText = pageText.replace(/<!--(\s|\S)*?-->/g, "").replace(nowikiRegex, "");
    }
    result.match = find_category(cleanedText, catTitle, true);
    return result;
  };
  let initialized = false;
  let setupTimeout = null;
  const findByClass = (scope, tag, className) => {
    const result = $(scope).find("".concat(tag, ".").concat(className));
    return result && result.length > 0 ? result[0] : null;
  };
  const setup = (additionalWork) => {
    if (initialized) {
      return;
    }
    initialized = true;
    if (setupTimeout) {
      window.clearTimeout(setupTimeout);
      setupTimeout = null;
    }
    catLine || (catLine = document.querySelector("#mw-normal-catlinks"));
    const hiddenCats = document.querySelector("#mw-hidden-catlinks");
    if (!catLine) {
      let footer = null;
      if (!hiddenCats) {
        footer = findByClass(document, "div", "printfooter");
        if (!footer) {
          return;
        }
      }
      catLine = make("div");
      catLine.id = "mw-normal-catlinks";
      catLine.style.textAlign = is_rtl ? "right" : "left";
      const label = make("a");
      label.href = conf.wgArticlePath.replace("$1", "Special:Categories");
      label.title = getMessage("categories");
      label.append(make(getMessage("categories"), true));
      catLine.append(label);
      catLine.append(make(":", true));
      let container = hiddenCats ? hiddenCats.parentNode : document.querySelector("#catlinks");
      if (!container) {
        container = make("div");
        container.id = "catlinks";
        footer.parentNode.insertBefore(container, footer.nextSibling);
      }
      container.className = "catlinks noprint";
      container.style.display = "";
      if (hiddenCats) {
        hiddenCats.before(catLine);
      } else {
        container.append(catLine);
      }
    }
    if (is_rtl) {
      catLine.dir = "rtl";
    }
    const createEditors = (line, is_hidden) => {
      let i;
      let cats = line.querySelectorAll("li");
      if (cats.length > 0) {
        newDOM = true;
        line = cats[0].parentNode;
      } else {
        cats = line.querySelectorAll("span");
      }
      const copyCats = Array.from({
        length: cats.length
      });
      for (i = 0; i < cats.length; i++) {
        copyCats[i] = cats[i];
      }
      for (i = 0; i < copyCats.length; i++) {
        const test = isOnPage(copyCats[i]);
        if (test !== null && test.match !== null && line) {
          new CategoryEditor(line, copyCats[i], test.title, test.match[2], is_hidden);
        }
      }
      return copyCats.length > 0 ? copyCats.at(-1) : null;
    };
    const lastSpan = createEditors(catLine, false);
    new CategoryEditor(newDOM ? catLine.querySelectorAll("ul")[0] : catLine, null, null, lastSpan !== null, false);
    if (!onUpload) {
      if (pageText !== null && hiddenCats) {
        if (is_rtl) {
          hiddenCats.dir = "rtl";
        }
        createEditors(hiddenCats, true);
      }
      const enableMulti = make("span");
      enableMulti.className = "noprint";
      if (is_rtl) {
        enableMulti.dir = "rtl";
      }
      catLine.insertBefore(enableMulti, catLine.firstChild.nextSibling);
      enableMulti.append(make(" ", true));
      multiSpan = make("span");
      enableMulti.append(multiSpan);
      multiSpan.innerHTML = "(<a>".concat(HC.addmulti, "</a>)");
      const [link] = multiSpan.querySelectorAll("a");
      link.addEventListener("click", (event) => {
        setMultiInput();
        checkMultiInput();
        return evtKill(event);
      });
      link.title = getMessage("multi_tooltip");
      link.style.cursor = "pointer";
    }
    cleanedText = null;
    if (additionalWork instanceof Function) {
      additionalWork();
    }
    mw.hook("hotcat.ready").fire();
    $("body").trigger("hotcatSetupCompleted");
  };
  const createCommitForm = () => {
    if (commitForm) {
      return;
    }
    const formContainer = make("div");
    formContainer.style.display = "none";
    document.querySelector("body").append(formContainer);
    formContainer.innerHTML = '<form id="hotcatCommitForm" method="post" enctype="multipart/form-data" action="'.concat(conf.wgScript, "?title=").concat(encodeURIComponent(conf.wgPageName), '&action=submit">\n		<input type="hidden" name="wpTextbox1">\n		<input type="hidden" name="model" value="').concat(conf.wgPageContentModel, '">\n		<input type="hidden" name="format" value="text/x-wiki">\n		<input type="hidden" name="wpSummary" value="">\n		<input type="checkbox" name="wpMinoredit" title="wpMinoredit" value="1">\n		<input type="checkbox" name="wpWatchthis" title="wpWatchthis" value="1">\n		<input type="hidden" name="wpAutoSummary" value="d41d8cd98f00b204e9800998ecf8427e">\n		<input type="hidden" name="wpEdittime">\n		<input type="hidden" name="wpStarttime">\n		<input type="hidden" name="wpDiff" value="wpDiff">\n		<input type="hidden" name="oldid" value="0">\n		<input type="submit" name="hcCommit" value="hcCommit">\n		<input type="hidden" name="wpEditToken">\n		<input type="hidden" name="wpUltimateParam" value="1">\n		<input type="hidden" name="wpChangeTags">\n		<input type="hidden" value="ℳ𝒲♥𝓊𝓃𝒾𝒸ℴ𝒹ℯ" name="wpUnicodeCheck">\n		</form>');
    commitForm = document.querySelector("#hotcatCommitForm");
  };
  const getPage = () => {
    if (conf.wgArticleId) {
      const params = {
        action: "query",
        format: "json",
        formatversion: "2",
        rawcontinue: "",
        titles: conf.wgPageName,
        prop: ["info", "revisions"],
        rvprop: ["content", "timestamp", "ids"],
        rvlimit: "1",
        rvstartid: conf.wgCurRevisionId,
        rvslots: "main",
        meta: ["siteinfo"]
      };
      HC.start = (data) => {
        setPage(data);
        setup(createCommitForm);
      };
      api.get(params).then((data) => {
        HC.start(data);
      });
      setupTimeout = setTimeout(() => {
        setup(createCommitForm);
      }, 4e3);
    } else {
      if (conf.wgNamespaceNumber === 2) {
        return;
      }
      pageText = "";
      pageTime = null;
      setup(createCommitForm);
    }
  };
  const setState = (state) => {
    const cats = state.split("\n");
    if (cats.length === 0) {
      return null;
    }
    if (initialized && editors.length === 1 && editors[0].isAddCategory) {
      const newSpans = [];
      const before = editors.length === 1 ? editors[0].span : null;
      let i;
      for (i = 0; i < cats.length; i++) {
        if (cats[i].length === 0) {
          continue;
        }
        let cat = cats[i].split("|");
        const key = cat.length > 1 ? cat[1] : null;
        [cat] = cat;
        const link = make("a");
        link.href = wikiPagePath("".concat(HC.category_canonical, ":").concat(cat));
        link.append(make(cat, true));
        link.title = cat;
        const span = make("span");
        span.append(link);
        if (!i) {
          catLine.insertBefore(make(" ", true), before);
        }
        before.before(span);
        if (before && i + 1 < cats.length) {
          parent.insertBefore(make(" | ", true), before);
        }
        newSpans[newSpans.length] = {
          element: span,
          title: cat,
          key
        };
      }
      if (before) {
        before.parentNode.insertBefore(make(" | ", true), before);
      }
      for (i = 0; i < newSpans.length; i++) {
        new CategoryEditor(catLine, newSpans[i].element, newSpans[i].title, newSpans[i].key);
      }
    }
    return null;
  };
  const getState = () => {
    let result = null;
    for (var _i9 = 0, _editors8 = editors; _i9 < _editors8.length; _i9++) {
      const editor = _editors8[_i9];
      let text = editor.currentCategory;
      const key = editor.currentKey;
      if (text && text.length > 0) {
        if (key !== null) {
          text += "|".concat(key);
        }
        if (result === null) {
          result = text;
        } else {
          result += "\n".concat(text);
        }
      }
    }
    return result;
  };
  const really_run = () => {
    initialize();
    if (!HC.upload_disabled && conf.wgNamespaceNumber === -1 && conf.wgCanonicalSpecialPageName === "Upload" && conf.wgUserName) {
      setup_upload();
      setup(() => {
        if (window.UploadForm && UploadForm.previous_hotcat_state) {
          UploadForm.previous_hotcat_state = setState(UploadForm.previous_hotcat_state);
        }
      });
    } else {
      if (!conf.wgIsArticle || conf.wgAction !== "view" || param("diff") !== null || param("oldid") !== null || !can_edit() || HC.disable()) {
        return;
      }
      getPage();
    }
  };
  const run = () => {
    if (HC.started) {
      return;
    }
    HC.started = true;
    really_run();
  };
  window.hotcat_get_state = () => {
    return getState();
  };
  window.hotcat_set_state = (state) => {
    return setState(state);
  };
  window.hotcat_close_form = () => {
    closeForm();
  };
  HC.runWhenReady = (callback) => {
    mw.hook("hotcat.ready").add(callback);
  };
  if (conf.wgCanonicalSpecialPageName !== "Upload") {
    mw.hook("postEdit").add(() => {
      if (document.querySelector("#catlinks .hotcatlink")) {
        return;
      }
      catLine = null;
      editors = [];
      initialized = false;
      HC.started = false;
      run();
    });
  }
  $(run);
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwtdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi1yYXcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmRleGVkLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1jYWxsYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1idWlsdC1pbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnZpcm9ubWVudC11c2VyLWFnZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYW4taW5zdGFuY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3JyZWN0LXByb3RvdHlwZS1nZXR0ZXIuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbi1hY2Nlc3Nvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaHRtbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1jcmVhdGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMtY29yZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5pdGVyYXRvci5jb25zdHJ1Y3Rvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1pdGVyYXRvci1kaXJlY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW5zLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLWl0ZXItcmVzdWx0LW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0b3ItY2xvc2UtYWxsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0b3ItY3JlYXRlLXByb3h5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2FsbC13aXRoLXNhZmUtaXRlcmF0aW9uLWNsb3NpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvci1oZWxwZXItdGhyb3dzLW9uLWludmFsaWQtaXRlcmF0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvci1oZWxwZXItd2l0aG91dC1jbG9zaW5nLW9uLWVhcmx5LWVycm9yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLml0ZXJhdG9yLmZpbHRlci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy1jbGF1c2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1hcnJheS1pdGVyYXRvci1tZXRob2QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jbGFzc29mLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1pdGVyYXRvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuaXRlcmF0b3IuZmluZC5qcyIsICJzcmMvSG90Q2F0L21vZHVsZXMvY2hlY2subW9kdWxlLmxlc3MiLCAic3JjL0hvdENhdC9tb2R1bGVzL2FwaS50cyIsICJzcmMvSG90Q2F0L21vZHVsZXMvY2hlY2sudHMiLCAic3JjL0hvdENhdC9Ib3RDYXQuanMiLCAic3JjL0hvdENhdC9tb2R1bGVzL2dldE1lc3NhZ2UudHMiLCAic3JjL0hvdENhdC9tb2R1bGVzL21lc3NhZ2VzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIndXNlIHN0cmljdCc7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT09IE1hdGggJiYgaXQ7XG59O1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxubW9kdWxlLmV4cG9ydHMgPVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZ2xvYmFsLXRoaXMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2YgZ2xvYmFsVGhpcyA9PSAnb2JqZWN0JyAmJiBnbG9iYWxUaGlzKSB8fFxuICBjaGVjayh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYpIHx8XG4gIGNoZWNrKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsKSB8fFxuICBjaGVjayh0eXBlb2YgdGhpcyA9PSAnb2JqZWN0JyAmJiB0aGlzKSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmMgLS0gZmFsbGJhY2tcbiAgKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pKCkgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBEZXRlY3QgSUU4J3MgaW5jb21wbGV0ZSBkZWZpbmVQcm9wZXJ0eSBpbXBsZW1lbnRhdGlvblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIDEsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pWzFdICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbiAgdmFyIHRlc3QgPSAoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KS5iaW5kKCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gdHlwZW9mIHRlc3QgIT0gJ2Z1bmN0aW9uJyB8fCB0ZXN0Lmhhc093blByb3BlcnR5KCdwcm90b3R5cGUnKTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgY2FsbCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX0JJTkQgPyBjYWxsLmJpbmQoY2FsbCkgOiBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBjYWxsLmFwcGx5KGNhbGwsIGFyZ3VtZW50cyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBOYXNob3JuIH4gSkRLOCBidWdcbnZhciBOQVNIT1JOX0JVRyA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvciAmJiAhJHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoeyAxOiAyIH0sIDEpO1xuXG4vLyBgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZWAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5wcm90b3R5cGUucHJvcGVydHlpc2VudW1lcmFibGVcbmV4cG9ydHMuZiA9IE5BU0hPUk5fQlVHID8gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoVikge1xuICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLCBWKTtcbiAgcmV0dXJuICEhZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLmVudW1lcmFibGU7XG59IDogJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBjYWxsID0gRnVuY3Rpb25Qcm90b3R5cGUuY2FsbDtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1mdW5jdGlvbi1wcm90b3R5cGUtYmluZCAtLSBzYWZlXG52YXIgdW5jdXJyeVRoaXNXaXRoQmluZCA9IE5BVElWRV9CSU5EICYmIEZ1bmN0aW9uUHJvdG90eXBlLmJpbmQuYmluZChjYWxsLCBjYWxsKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IHVuY3VycnlUaGlzV2l0aEJpbmQgOiBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2FsbC5hcHBseShmbiwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyh7fS50b1N0cmluZyk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBzdHJpbmdTbGljZSh0b1N0cmluZyhpdCksIDgsIC0xKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcbnZhciBzcGxpdCA9IHVuY3VycnlUaGlzKCcnLnNwbGl0KTtcblxuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3Ncbm1vZHVsZS5leHBvcnRzID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyB0aHJvd3MgYW4gZXJyb3IgaW4gcmhpbm8sIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9yaGluby9pc3N1ZXMvMzQ2XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gISRPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcbn0pID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjbGFzc29mKGl0KSA9PT0gJ1N0cmluZycgPyBzcGxpdChpdCwgJycpIDogJE9iamVjdChpdCk7XG59IDogJE9iamVjdDtcbiIsICIndXNlIHN0cmljdCc7XG4vLyB3ZSBjYW4ndCB1c2UganVzdCBgaXQgPT0gbnVsbGAgc2luY2Ugb2YgYGRvY3VtZW50LmFsbGAgc3BlY2lhbCBjYXNlXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90LWFlY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSBudWxsIHx8IGl0ID09PSB1bmRlZmluZWQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoaXQpKSB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdFxudmFyIGRvY3VtZW50QWxsID0gdHlwZW9mIGRvY3VtZW50ID09ICdvYmplY3QnICYmIGRvY3VtZW50LmFsbDtcblxuLy8gYElzQ2FsbGFibGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2NhbGxhYmxlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby10eXBlb2YtdW5kZWZpbmVkIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBkb2N1bWVudEFsbCA9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudEFsbCAhPT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJyB8fCBhcmd1bWVudCA9PT0gZG9jdW1lbnRBbGw7XG59IDogZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogaXNDYWxsYWJsZShpdCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgYUZ1bmN0aW9uID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKGFyZ3VtZW50KSA/IGFyZ3VtZW50IDogdW5kZWZpbmVkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZXNwYWNlLCBtZXRob2QpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gYUZ1bmN0aW9uKGdsb2JhbFRoaXNbbmFtZXNwYWNlXSkgOiBnbG9iYWxUaGlzW25hbWVzcGFjZV0gJiYgZ2xvYmFsVGhpc1tuYW1lc3BhY2VdW21ldGhvZF07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1bmN1cnJ5VGhpcyh7fS5pc1Byb3RvdHlwZU9mKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xuXG52YXIgbmF2aWdhdG9yID0gZ2xvYmFsVGhpcy5uYXZpZ2F0b3I7XG52YXIgdXNlckFnZW50ID0gbmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cbm1vZHVsZS5leHBvcnRzID0gdXNlckFnZW50ID8gU3RyaW5nKHVzZXJBZ2VudCkgOiAnJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnZpcm9ubWVudC11c2VyLWFnZW50Jyk7XG5cbnZhciBwcm9jZXNzID0gZ2xvYmFsVGhpcy5wcm9jZXNzO1xudmFyIERlbm8gPSBnbG9iYWxUaGlzLkRlbm87XG52YXIgdmVyc2lvbnMgPSBwcm9jZXNzICYmIHByb2Nlc3MudmVyc2lvbnMgfHwgRGVubyAmJiBEZW5vLnZlcnNpb247XG52YXIgdjggPSB2ZXJzaW9ucyAmJiB2ZXJzaW9ucy52ODtcbnZhciBtYXRjaCwgdmVyc2lvbjtcblxuaWYgKHY4KSB7XG4gIG1hdGNoID0gdjguc3BsaXQoJy4nKTtcbiAgLy8gaW4gb2xkIENocm9tZSwgdmVyc2lvbnMgb2YgVjggaXNuJ3QgVjggPSBDaHJvbWUgLyAxMFxuICAvLyBidXQgdGhlaXIgY29ycmVjdCB2ZXJzaW9ucyBhcmUgbm90IGludGVyZXN0aW5nIGZvciB1c1xuICB2ZXJzaW9uID0gbWF0Y2hbMF0gPiAwICYmIG1hdGNoWzBdIDwgNCA/IDEgOiArKG1hdGNoWzBdICsgbWF0Y2hbMV0pO1xufVxuXG4vLyBCcm93c2VyRlMgTm9kZUpTIGBwcm9jZXNzYCBwb2x5ZmlsbCBpbmNvcnJlY3RseSBzZXQgYC52OGAgdG8gYDAuMGBcbi8vIHNvIGNoZWNrIGB1c2VyQWdlbnRgIGV2ZW4gaWYgYC52OGAgZXhpc3RzLCBidXQgMFxuaWYgKCF2ZXJzaW9uICYmIHVzZXJBZ2VudCkge1xuICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvRWRnZVxcLyhcXGQrKS8pO1xuICBpZiAoIW1hdGNoIHx8IG1hdGNoWzFdID49IDc0KSB7XG4gICAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0Nocm9tZVxcLyhcXGQrKS8pO1xuICAgIGlmIChtYXRjaCkgdmVyc2lvbiA9ICttYXRjaFsxXTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZlcnNpb247XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnZpcm9ubWVudC12OC12ZXJzaW9uJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG5cbnZhciAkU3RyaW5nID0gZ2xvYmFsVGhpcy5TdHJpbmc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlzeW1ib2xzIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9ICEhT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgc3ltYm9sID0gU3ltYm9sKCdzeW1ib2wgZGV0ZWN0aW9uJyk7XG4gIC8vIENocm9tZSAzOCBTeW1ib2wgaGFzIGluY29ycmVjdCB0b1N0cmluZyBjb252ZXJzaW9uXG4gIC8vIGBnZXQtb3duLXByb3BlcnR5LXN5bWJvbHNgIHBvbHlmaWxsIHN5bWJvbHMgY29udmVydGVkIHRvIG9iamVjdCBhcmUgbm90IFN5bWJvbCBpbnN0YW5jZXNcbiAgLy8gbmI6IERvIG5vdCBjYWxsIGBTdHJpbmdgIGRpcmVjdGx5IHRvIGF2b2lkIHRoaXMgYmVpbmcgb3B0aW1pemVkIG91dCB0byBgc3ltYm9sKycnYCB3aGljaCB3aWxsLFxuICAvLyBvZiBjb3Vyc2UsIGZhaWwuXG4gIHJldHVybiAhJFN0cmluZyhzeW1ib2wpIHx8ICEoT2JqZWN0KHN5bWJvbCkgaW5zdGFuY2VvZiBTeW1ib2wpIHx8XG4gICAgLy8gQ2hyb21lIDM4LTQwIHN5bWJvbHMgYXJlIG5vdCBpbmhlcml0ZWQgZnJvbSBET00gY29sbGVjdGlvbnMgcHJvdG90eXBlcyB0byBpbnN0YW5jZXNcbiAgICAhU3ltYm9sLnNoYW0gJiYgVjhfVkVSU0lPTiAmJiBWOF9WRVJTSU9OIDwgNDE7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1zeW1ib2wgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfU1lNQk9MICYmXG4gICFTeW1ib2wuc2hhbSAmJlxuICB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc1Byb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YnKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxubW9kdWxlLmV4cG9ydHMgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgJFN5bWJvbCA9IGdldEJ1aWx0SW4oJ1N5bWJvbCcpO1xuICByZXR1cm4gaXNDYWxsYWJsZSgkU3ltYm9sKSAmJiBpc1Byb3RvdHlwZU9mKCRTeW1ib2wucHJvdG90eXBlLCAkT2JqZWN0KGl0KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB0cnkge1xuICAgIHJldHVybiAkU3RyaW5nKGFyZ3VtZW50KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gJ09iamVjdCc7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciB0cnlUb1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90cnktdG8tc3RyaW5nJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBJc0NhbGxhYmxlKGFyZ3VtZW50KSBpcyB0cnVlYFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGlzQ2FsbGFibGUoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKHRyeVRvU3RyaW5nKGFyZ3VtZW50KSArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcblxuLy8gYEdldE1ldGhvZGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWdldG1ldGhvZFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoViwgUCkge1xuICB2YXIgZnVuYyA9IFZbUF07XG4gIHJldHVybiBpc051bGxPclVuZGVmaW5lZChmdW5jKSA/IHVuZGVmaW5lZCA6IGFDYWxsYWJsZShmdW5jKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBPcmRpbmFyeVRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb3JkaW5hcnl0b3ByaW1pdGl2ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5wdXQsIHByZWYpIHtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChwcmVmID09PSAnc3RyaW5nJyAmJiBpc0NhbGxhYmxlKGZuID0gaW5wdXQudG9TdHJpbmcpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAoaXNDYWxsYWJsZShmbiA9IGlucHV0LnZhbHVlT2YpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAocHJlZiAhPT0gJ3N0cmluZycgJiYgaXNDYWxsYWJsZShmbiA9IGlucHV0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgdHJ5IHtcbiAgICBkZWZpbmVQcm9wZXJ0eShnbG9iYWxUaGlzLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdsb2JhbFRoaXNba2V5XSA9IHZhbHVlO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG5cbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IG1vZHVsZS5leHBvcnRzID0gZ2xvYmFsVGhpc1tTSEFSRURdIHx8IGRlZmluZUdsb2JhbFByb3BlcnR5KFNIQVJFRCwge30pO1xuXG4oc3RvcmUudmVyc2lvbnMgfHwgKHN0b3JlLnZlcnNpb25zID0gW10pKS5wdXNoKHtcbiAgdmVyc2lvbjogJzMuNDUuMScsXG4gIG1vZGU6IElTX1BVUkUgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxNC0yMDI1IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJyxcbiAgbGljZW5zZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2Jsb2IvdjMuNDUuMS9MSUNFTlNFJyxcbiAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMnXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSB8fCB7fSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxuLy8gYFRvT2JqZWN0YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9vYmplY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiAkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSB1bmN1cnJ5VGhpcyh7fS5oYXNPd25Qcm9wZXJ0eSk7XG5cbi8vIGBIYXNPd25Qcm9wZXJ0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWhhc293bnByb3BlcnR5XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWhhc293biAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5oYXNPd24gfHwgZnVuY3Rpb24gaGFzT3duKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5KHRvT2JqZWN0KGl0KSwga2V5KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgaWQgPSAwO1xudmFyIHBvc3RmaXggPSBNYXRoLnJhbmRvbSgpO1xudmFyIHRvU3RyaW5nID0gdW5jdXJyeVRoaXMoMS4xLnRvU3RyaW5nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcgKyAoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSkgKyAnKV8nICsgdG9TdHJpbmcoKytpZCArIHBvc3RmaXgsIDM2KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyIFN5bWJvbCA9IGdsb2JhbFRoaXMuU3ltYm9sO1xudmFyIFdlbGxLbm93blN5bWJvbHNTdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG52YXIgY3JlYXRlV2VsbEtub3duU3ltYm9sID0gVVNFX1NZTUJPTF9BU19VSUQgPyBTeW1ib2xbJ2ZvciddIHx8IFN5bWJvbCA6IFN5bWJvbCAmJiBTeW1ib2wud2l0aG91dFNldHRlciB8fCB1aWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgaWYgKCFoYXNPd24oV2VsbEtub3duU3ltYm9sc1N0b3JlLCBuYW1lKSkge1xuICAgIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IE5BVElWRV9TWU1CT0wgJiYgaGFzT3duKFN5bWJvbCwgbmFtZSlcbiAgICAgID8gU3ltYm9sW25hbWVdXG4gICAgICA6IGNyZWF0ZVdlbGxLbm93blN5bWJvbCgnU3ltYm9sLicgKyBuYW1lKTtcbiAgfSByZXR1cm4gV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciBvcmRpbmFyeVRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBUT19QUklNSVRJVkUgPSB3ZWxsS25vd25TeW1ib2woJ3RvUHJpbWl0aXZlJyk7XG5cbi8vIGBUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICBpZiAoIWlzT2JqZWN0KGlucHV0KSB8fCBpc1N5bWJvbChpbnB1dCkpIHJldHVybiBpbnB1dDtcbiAgdmFyIGV4b3RpY1RvUHJpbSA9IGdldE1ldGhvZChpbnB1dCwgVE9fUFJJTUlUSVZFKTtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKGV4b3RpY1RvUHJpbSkge1xuICAgIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnZGVmYXVsdCc7XG4gICAgcmVzdWx0ID0gY2FsbChleG90aWNUb1ByaW0sIGlucHV0LCBwcmVmKTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlc3VsdCkgfHwgaXNTeW1ib2wocmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbiAgfVxuICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ251bWJlcic7XG4gIHJldHVybiBvcmRpbmFyeVRvUHJpbWl0aXZlKGlucHV0LCBwcmVmKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xuXG4vLyBgVG9Qcm9wZXJ0eUtleWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJvcGVydHlrZXlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmd1bWVudCwgJ3N0cmluZycpO1xuICByZXR1cm4gaXNTeW1ib2woa2V5KSA/IGtleSA6IGtleSArICcnO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgZG9jdW1lbnQgPSBnbG9iYWxUaGlzLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgRVhJU1RTID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gRVhJU1RTID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG5cbi8vIFRoYW5rcyB0byBJRTggZm9yIGl0cyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGNyZWF0ZUVsZW1lbnQoJ2RpdicpLCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH1cbiAgfSkuYSAhPT0gNztcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlJyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXknKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yXG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JbmRleGVkT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXNPd24oTywgUCkpIHJldHVybiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoIWNhbGwocHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZiwgTywgUCksIE9bUF0pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBWOCB+IENocm9tZSAzNi1cbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMzMzRcbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAncHJvdG90eXBlJywge1xuICAgIHZhbHVlOiA0MixcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSkucHJvdG90eXBlICE9PSA0Mjtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyICRTdHJpbmcgPSBTdHJpbmc7XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogVHlwZShhcmd1bWVudCkgaXMgT2JqZWN0YFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGlzT2JqZWN0KGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcigkU3RyaW5nKGFyZ3VtZW50KSArICcgaXMgbm90IGFuIG9iamVjdCcpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xudmFyIFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Y4LXByb3RvdHlwZS1kZWZpbmUtYnVnJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXknKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciAkZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgRU5VTUVSQUJMRSA9ICdlbnVtZXJhYmxlJztcbnZhciBDT05GSUdVUkFCTEUgPSAnY29uZmlndXJhYmxlJztcbnZhciBXUklUQUJMRSA9ICd3cml0YWJsZSc7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydHlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydHlcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmICh0eXBlb2YgTyA9PT0gJ2Z1bmN0aW9uJyAmJiBQID09PSAncHJvdG90eXBlJyAmJiAndmFsdWUnIGluIEF0dHJpYnV0ZXMgJiYgV1JJVEFCTEUgaW4gQXR0cmlidXRlcyAmJiAhQXR0cmlidXRlc1tXUklUQUJMRV0pIHtcbiAgICB2YXIgY3VycmVudCA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gICAgaWYgKGN1cnJlbnQgJiYgY3VycmVudFtXUklUQUJMRV0pIHtcbiAgICAgIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICAgICAgQXR0cmlidXRlcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiBDT05GSUdVUkFCTEUgaW4gQXR0cmlidXRlcyA/IEF0dHJpYnV0ZXNbQ09ORklHVVJBQkxFXSA6IGN1cnJlbnRbQ09ORklHVVJBQkxFXSxcbiAgICAgICAgZW51bWVyYWJsZTogRU5VTUVSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tFTlVNRVJBQkxFXSA6IGN1cnJlbnRbRU5VTUVSQUJMRV0sXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgICAgfTtcbiAgICB9XG4gIH0gcmV0dXJuICRkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbn0gOiAkZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IG5ldyAkVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCcpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBrZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldERlc2NyaXB0b3IgPSBERVNDUklQVE9SUyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG52YXIgRVhJU1RTID0gaGFzT3duKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpO1xuLy8gYWRkaXRpb25hbCBwcm90ZWN0aW9uIGZyb20gbWluaWZpZWQgLyBtYW5nbGVkIC8gZHJvcHBlZCBmdW5jdGlvbiBuYW1lc1xudmFyIFBST1BFUiA9IEVYSVNUUyAmJiAoZnVuY3Rpb24gc29tZXRoaW5nKCkgeyAvKiBlbXB0eSAqLyB9KS5uYW1lID09PSAnc29tZXRoaW5nJztcbnZhciBDT05GSUdVUkFCTEUgPSBFWElTVFMgJiYgKCFERVNDUklQVE9SUyB8fCAoREVTQ1JJUFRPUlMgJiYgZ2V0RGVzY3JpcHRvcihGdW5jdGlvblByb3RvdHlwZSwgJ25hbWUnKS5jb25maWd1cmFibGUpKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEVYSVNUUzogRVhJU1RTLFxuICBQUk9QRVI6IFBST1BFUixcbiAgQ09ORklHVVJBQkxFOiBDT05GSUdVUkFCTEVcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxudmFyIGZ1bmN0aW9uVG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyhGdW5jdGlvbi50b1N0cmluZyk7XG5cbi8vIHRoaXMgaGVscGVyIGJyb2tlbiBpbiBgY29yZS1qc0AzLjQuMS0zLjQuNGAsIHNvIHdlIGNhbid0IHVzZSBgc2hhcmVkYCBoZWxwZXJcbmlmICghaXNDYWxsYWJsZShzdG9yZS5pbnNwZWN0U291cmNlKSkge1xuICBzdG9yZS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uVG9TdHJpbmcoaXQpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0b3JlLmluc3BlY3RTb3VyY2U7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciBXZWFrTWFwID0gZ2xvYmFsVGhpcy5XZWFrTWFwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQ2FsbGFibGUoV2Vha01hcCkgJiYgL25hdGl2ZSBjb2RlLy50ZXN0KFN0cmluZyhXZWFrTWFwKSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG5cbnZhciBrZXlzID0gc2hhcmVkKCdrZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4ga2V5c1trZXldIHx8IChrZXlzW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9XRUFLX01BUCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24nKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQgPSAnT2JqZWN0IGFscmVhZHkgaW5pdGlhbGl6ZWQnO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbFRoaXMuVHlwZUVycm9yO1xudmFyIFdlYWtNYXAgPSBnbG9iYWxUaGlzLldlYWtNYXA7XG52YXIgc2V0LCBnZXQsIGhhcztcblxudmFyIGVuZm9yY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGhhcyhpdCkgPyBnZXQoaXQpIDogc2V0KGl0LCB7fSk7XG59O1xuXG52YXIgZ2V0dGVyRm9yID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBzdGF0ZTtcbiAgICBpZiAoIWlzT2JqZWN0KGl0KSB8fCAoc3RhdGUgPSBnZXQoaXQpKS50eXBlICE9PSBUWVBFKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbmNvbXBhdGlibGUgcmVjZWl2ZXIsICcgKyBUWVBFICsgJyByZXF1aXJlZCcpO1xuICAgIH0gcmV0dXJuIHN0YXRlO1xuICB9O1xufTtcblxuaWYgKE5BVElWRV9XRUFLX01BUCB8fCBzaGFyZWQuc3RhdGUpIHtcbiAgdmFyIHN0b3JlID0gc2hhcmVkLnN0YXRlIHx8IChzaGFyZWQuc3RhdGUgPSBuZXcgV2Vha01hcCgpKTtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tc2VsZi1hc3NpZ24gLS0gcHJvdG90eXBlIG1ldGhvZHMgcHJvdGVjdGlvbiAqL1xuICBzdG9yZS5nZXQgPSBzdG9yZS5nZXQ7XG4gIHN0b3JlLmhhcyA9IHN0b3JlLmhhcztcbiAgc3RvcmUuc2V0ID0gc3RvcmUuc2V0O1xuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXNlbGYtYXNzaWduIC0tIHByb3RvdHlwZSBtZXRob2RzIHByb3RlY3Rpb24gKi9cbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIGlmIChzdG9yZS5oYXMoaXQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEKTtcbiAgICBtZXRhZGF0YS5mYWNhZGUgPSBpdDtcbiAgICBzdG9yZS5zZXQoaXQsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBzdG9yZS5nZXQoaXQpIHx8IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gc3RvcmUuaGFzKGl0KTtcbiAgfTtcbn0gZWxzZSB7XG4gIHZhciBTVEFURSA9IHNoYXJlZEtleSgnc3RhdGUnKTtcbiAgaGlkZGVuS2V5c1tTVEFURV0gPSB0cnVlO1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKGhhc093bihpdCwgU1RBVEUpKSB0aHJvdyBuZXcgVHlwZUVycm9yKE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEKTtcbiAgICBtZXRhZGF0YS5mYWNhZGUgPSBpdDtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoaXQsIFNUQVRFLCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSkgPyBpdFtTVEFURV0gOiB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGhhc093bihpdCwgU1RBVEUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXQsXG4gIGdldDogZ2V0LFxuICBoYXM6IGhhcyxcbiAgZW5mb3JjZTogZW5mb3JjZSxcbiAgZ2V0dGVyRm9yOiBnZXR0ZXJGb3Jcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1uYW1lJykuQ09ORklHVVJBQkxFO1xudmFyIGluc3BlY3RTb3VyY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG5cbnZhciBlbmZvcmNlSW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZW5mb3JjZTtcbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXQ7XG52YXIgJFN0cmluZyA9IFN0cmluZztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xudmFyIHJlcGxhY2UgPSB1bmN1cnJ5VGhpcygnJy5yZXBsYWNlKTtcbnZhciBqb2luID0gdW5jdXJyeVRoaXMoW10uam9pbik7XG5cbnZhciBDT05GSUdVUkFCTEVfTEVOR1RIID0gREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5KGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSwgJ2xlbmd0aCcsIHsgdmFsdWU6IDggfSkubGVuZ3RoICE9PSA4O1xufSk7XG5cbnZhciBURU1QTEFURSA9IFN0cmluZyhTdHJpbmcpLnNwbGl0KCdTdHJpbmcnKTtcblxudmFyIG1ha2VCdWlsdEluID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUsIG5hbWUsIG9wdGlvbnMpIHtcbiAgaWYgKHN0cmluZ1NsaWNlKCRTdHJpbmcobmFtZSksIDAsIDcpID09PSAnU3ltYm9sKCcpIHtcbiAgICBuYW1lID0gJ1snICsgcmVwbGFjZSgkU3RyaW5nKG5hbWUpLCAvXlN5bWJvbFxcKChbXildKilcXCkuKiQvLCAnJDEnKSArICddJztcbiAgfVxuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmdldHRlcikgbmFtZSA9ICdnZXQgJyArIG5hbWU7XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuc2V0dGVyKSBuYW1lID0gJ3NldCAnICsgbmFtZTtcbiAgaWYgKCFoYXNPd24odmFsdWUsICduYW1lJykgfHwgKENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FICYmIHZhbHVlLm5hbWUgIT09IG5hbWUpKSB7XG4gICAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ25hbWUnLCB7IHZhbHVlOiBuYW1lLCBjb25maWd1cmFibGU6IHRydWUgfSk7XG4gICAgZWxzZSB2YWx1ZS5uYW1lID0gbmFtZTtcbiAgfVxuICBpZiAoQ09ORklHVVJBQkxFX0xFTkdUSCAmJiBvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnYXJpdHknKSAmJiB2YWx1ZS5sZW5ndGggIT09IG9wdGlvbnMuYXJpdHkpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ2xlbmd0aCcsIHsgdmFsdWU6IG9wdGlvbnMuYXJpdHkgfSk7XG4gIH1cbiAgdHJ5IHtcbiAgICBpZiAob3B0aW9ucyAmJiBoYXNPd24ob3B0aW9ucywgJ2NvbnN0cnVjdG9yJykgJiYgb3B0aW9ucy5jb25zdHJ1Y3Rvcikge1xuICAgICAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ3Byb3RvdHlwZScsIHsgd3JpdGFibGU6IGZhbHNlIH0pO1xuICAgIC8vIGluIFY4IH4gQ2hyb21lIDUzLCBwcm90b3R5cGVzIG9mIHNvbWUgbWV0aG9kcywgbGlrZSBgQXJyYXkucHJvdG90eXBlLnZhbHVlc2AsIGFyZSBub24td3JpdGFibGVcbiAgICB9IGVsc2UgaWYgKHZhbHVlLnByb3RvdHlwZSkgdmFsdWUucHJvdG90eXBlID0gdW5kZWZpbmVkO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIHZhciBzdGF0ZSA9IGVuZm9yY2VJbnRlcm5hbFN0YXRlKHZhbHVlKTtcbiAgaWYgKCFoYXNPd24oc3RhdGUsICdzb3VyY2UnKSkge1xuICAgIHN0YXRlLnNvdXJjZSA9IGpvaW4oVEVNUExBVEUsIHR5cGVvZiBuYW1lID09ICdzdHJpbmcnID8gbmFtZSA6ICcnKTtcbiAgfSByZXR1cm4gdmFsdWU7XG59O1xuXG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1leHRlbmQtbmF0aXZlIC0tIHJlcXVpcmVkXG5GdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgPSBtYWtlQnVpbHRJbihmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIGlzQ2FsbGFibGUodGhpcykgJiYgZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKS5zb3VyY2UgfHwgaW5zcGVjdFNvdXJjZSh0aGlzKTtcbn0sICd0b1N0cmluZycpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIG1ha2VCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge307XG4gIHZhciBzaW1wbGUgPSBvcHRpb25zLmVudW1lcmFibGU7XG4gIHZhciBuYW1lID0gb3B0aW9ucy5uYW1lICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5hbWUgOiBrZXk7XG4gIGlmIChpc0NhbGxhYmxlKHZhbHVlKSkgbWFrZUJ1aWx0SW4odmFsdWUsIG5hbWUsIG9wdGlvbnMpO1xuICBpZiAob3B0aW9ucy5nbG9iYWwpIHtcbiAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgICBlbHNlIGRlZmluZUdsb2JhbFByb3BlcnR5KGtleSwgdmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIW9wdGlvbnMudW5zYWZlKSBkZWxldGUgT1trZXldO1xuICAgICAgZWxzZSBpZiAoT1trZXldKSBzaW1wbGUgPSB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgICBlbHNlIGRlZmluZVByb3BlcnR5TW9kdWxlLmYoTywga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogIW9wdGlvbnMubm9uQ29uZmlndXJhYmxlLFxuICAgICAgd3JpdGFibGU6ICFvcHRpb25zLm5vbldyaXRhYmxlXG4gICAgfSk7XG4gIH0gcmV0dXJuIE87XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcblxuLy8gYE1hdGgudHJ1bmNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1tYXRoLnRydW5jXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tbWF0aC10cnVuYyAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE1hdGgudHJ1bmMgfHwgZnVuY3Rpb24gdHJ1bmMoeCkge1xuICB2YXIgbiA9ICt4O1xuICByZXR1cm4gKG4gPiAwID8gZmxvb3IgOiBjZWlsKShuKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRydW5jID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL21hdGgtdHJ1bmMnKTtcblxuLy8gYFRvSW50ZWdlck9ySW5maW5pdHlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2ludGVnZXJvcmluZmluaXR5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIgbnVtYmVyID0gK2FyZ3VtZW50O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICByZXR1cm4gbnVtYmVyICE9PSBudW1iZXIgfHwgbnVtYmVyID09PSAwID8gMCA6IHRydW5jKG51bWJlcik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBIZWxwZXIgZm9yIGEgcG9wdWxhciByZXBlYXRpbmcgY2FzZSBvZiB0aGUgc3BlYzpcbi8vIExldCBpbnRlZ2VyIGJlID8gVG9JbnRlZ2VyKGluZGV4KS5cbi8vIElmIGludGVnZXIgPCAwLCBsZXQgcmVzdWx0IGJlIG1heCgobGVuZ3RoICsgaW50ZWdlciksIDApOyBlbHNlIGxldCByZXN1bHQgYmUgbWluKGludGVnZXIsIGxlbmd0aCkuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIHZhciBpbnRlZ2VyID0gdG9JbnRlZ2VyT3JJbmZpbml0eShpbmRleCk7XG4gIHJldHVybiBpbnRlZ2VyIDwgMCA/IG1heChpbnRlZ2VyICsgbGVuZ3RoLCAwKSA6IG1pbihpbnRlZ2VyLCBsZW5ndGgpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG5cbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gYFRvTGVuZ3RoYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9sZW5ndGhcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBsZW4gPSB0b0ludGVnZXJPckluZmluaXR5KGFyZ3VtZW50KTtcbiAgcmV0dXJuIGxlbiA+IDAgPyBtaW4obGVuLCAweDFGRkZGRkZGRkZGRkZGKSA6IDA7IC8vIDIgKiogNTMgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xuXG4vLyBgTGVuZ3RoT2ZBcnJheUxpa2VgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1sZW5ndGhvZmFycmF5bGlrZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0b0xlbmd0aChvYmoubGVuZ3RoKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUueyBpbmRleE9mLCBpbmNsdWRlcyB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IGxlbmd0aE9mQXJyYXlMaWtlKE8pO1xuICAgIGlmIChsZW5ndGggPT09IDApIHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9PSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgICAgaWYgKHZhbHVlICE9PSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgaWYgKChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSAmJiBPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbiAgaW5jbHVkZXM6IGNyZWF0ZU1ldGhvZCh0cnVlKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmRleE9mYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxuICBpbmRleE9mOiBjcmVhdGVNZXRob2QoZmFsc2UpXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGluZGV4T2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmRleE9mO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIHB1c2ggPSB1bmN1cnJ5VGhpcyhbXS5wdXNoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgIWhhc093bihoaWRkZW5LZXlzLCBrZXkpICYmIGhhc093bihPLCBrZXkpICYmIHB1c2gocmVzdWx0LCBrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzT3duKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHB1c2gocmVzdWx0LCBrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIElFOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSBbXG4gICdjb25zdHJ1Y3RvcicsXG4gICdoYXNPd25Qcm9wZXJ0eScsXG4gICdpc1Byb3RvdHlwZU9mJyxcbiAgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcbiAgJ3RvTG9jYWxlU3RyaW5nJyxcbiAgJ3RvU3RyaW5nJyxcbiAgJ3ZhbHVlT2YnXG5dO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG5cbnZhciBoaWRkZW5LZXlzID0gZW51bUJ1Z0tleXMuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eW5hbWVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5bmFtZXMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlzeW1ib2xzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbnZhciBjb25jYXQgPSB1bmN1cnJ5VGhpcyhbXS5jb25jYXQpO1xuXG4vLyBhbGwgb2JqZWN0IGtleXMsIGluY2x1ZGVzIG5vbi1lbnVtZXJhYmxlIGFuZCBzeW1ib2xzXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ1JlZmxlY3QnLCAnb3duS2V5cycpIHx8IGZ1bmN0aW9uIG93bktleXMoaXQpIHtcbiAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlLmYoYW5PYmplY3QoaXQpKTtcbiAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mO1xuICByZXR1cm4gZ2V0T3duUHJvcGVydHlTeW1ib2xzID8gY29uY2F0KGtleXMsIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkpIDoga2V5cztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgb3duS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vd24ta2V5cycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSwgZXhjZXB0aW9ucykge1xuICB2YXIga2V5cyA9IG93bktleXMoc291cmNlKTtcbiAgdmFyIGRlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHlNb2R1bGUuZjtcbiAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoIWhhc093bih0YXJnZXQsIGtleSkgJiYgIShleGNlcHRpb25zICYmIGhhc093bihleGNlcHRpb25zLCBrZXkpKSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgIH1cbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciByZXBsYWNlbWVudCA9IC8jfFxcLnByb3RvdHlwZVxcLi87XG5cbnZhciBpc0ZvcmNlZCA9IGZ1bmN0aW9uIChmZWF0dXJlLCBkZXRlY3Rpb24pIHtcbiAgdmFyIHZhbHVlID0gZGF0YVtub3JtYWxpemUoZmVhdHVyZSldO1xuICByZXR1cm4gdmFsdWUgPT09IFBPTFlGSUxMID8gdHJ1ZVxuICAgIDogdmFsdWUgPT09IE5BVElWRSA/IGZhbHNlXG4gICAgOiBpc0NhbGxhYmxlKGRldGVjdGlvbikgPyBmYWlscyhkZXRlY3Rpb24pXG4gICAgOiAhIWRldGVjdGlvbjtcbn07XG5cbnZhciBub3JtYWxpemUgPSBpc0ZvcmNlZC5ub3JtYWxpemUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gIHJldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKHJlcGxhY2VtZW50LCAnLicpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG52YXIgZGF0YSA9IGlzRm9yY2VkLmRhdGEgPSB7fTtcbnZhciBOQVRJVkUgPSBpc0ZvcmNlZC5OQVRJVkUgPSAnTic7XG52YXIgUE9MWUZJTEwgPSBpc0ZvcmNlZC5QT0xZRklMTCA9ICdQJztcblxubW9kdWxlLmV4cG9ydHMgPSBpc0ZvcmNlZDtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJykuZjtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG52YXIgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMnKTtcbnZhciBpc0ZvcmNlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1mb3JjZWQnKTtcblxuLypcbiAgb3B0aW9ucy50YXJnZXQgICAgICAgICAtIG5hbWUgb2YgdGhlIHRhcmdldCBvYmplY3RcbiAgb3B0aW9ucy5nbG9iYWwgICAgICAgICAtIHRhcmdldCBpcyB0aGUgZ2xvYmFsIG9iamVjdFxuICBvcHRpb25zLnN0YXQgICAgICAgICAgIC0gZXhwb3J0IGFzIHN0YXRpYyBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnByb3RvICAgICAgICAgIC0gZXhwb3J0IGFzIHByb3RvdHlwZSBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnJlYWwgICAgICAgICAgIC0gcmVhbCBwcm90b3R5cGUgbWV0aG9kIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy5mb3JjZWQgICAgICAgICAtIGV4cG9ydCBldmVuIGlmIHRoZSBuYXRpdmUgZmVhdHVyZSBpcyBhdmFpbGFibGVcbiAgb3B0aW9ucy5iaW5kICAgICAgICAgICAtIGJpbmQgbWV0aG9kcyB0byB0aGUgdGFyZ2V0LCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMud3JhcCAgICAgICAgICAgLSB3cmFwIGNvbnN0cnVjdG9ycyB0byBwcmV2ZW50aW5nIGdsb2JhbCBwb2xsdXRpb24sIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy51bnNhZmUgICAgICAgICAtIHVzZSB0aGUgc2ltcGxlIGFzc2lnbm1lbnQgb2YgcHJvcGVydHkgaW5zdGVhZCBvZiBkZWxldGUgKyBkZWZpbmVQcm9wZXJ0eVxuICBvcHRpb25zLnNoYW0gICAgICAgICAgIC0gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICBvcHRpb25zLmVudW1lcmFibGUgICAgIC0gZXhwb3J0IGFzIGVudW1lcmFibGUgcHJvcGVydHlcbiAgb3B0aW9ucy5kb250Q2FsbEdldFNldCAtIHByZXZlbnQgY2FsbGluZyBhIGdldHRlciBvbiB0YXJnZXRcbiAgb3B0aW9ucy5uYW1lICAgICAgICAgICAtIHRoZSAubmFtZSBvZiB0aGUgZnVuY3Rpb24gaWYgaXQgZG9lcyBub3QgbWF0Y2ggdGhlIGtleVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdGlvbnMsIHNvdXJjZSkge1xuICB2YXIgVEFSR0VUID0gb3B0aW9ucy50YXJnZXQ7XG4gIHZhciBHTE9CQUwgPSBvcHRpb25zLmdsb2JhbDtcbiAgdmFyIFNUQVRJQyA9IG9wdGlvbnMuc3RhdDtcbiAgdmFyIEZPUkNFRCwgdGFyZ2V0LCBrZXksIHRhcmdldFByb3BlcnR5LCBzb3VyY2VQcm9wZXJ0eSwgZGVzY3JpcHRvcjtcbiAgaWYgKEdMT0JBTCkge1xuICAgIHRhcmdldCA9IGdsb2JhbFRoaXM7XG4gIH0gZWxzZSBpZiAoU1RBVElDKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsVGhpc1tUQVJHRVRdIHx8IGRlZmluZUdsb2JhbFByb3BlcnR5KFRBUkdFVCwge30pO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldCA9IGdsb2JhbFRoaXNbVEFSR0VUXSAmJiBnbG9iYWxUaGlzW1RBUkdFVF0ucHJvdG90eXBlO1xuICB9XG4gIGlmICh0YXJnZXQpIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIHNvdXJjZVByb3BlcnR5ID0gc291cmNlW2tleV07XG4gICAgaWYgKG9wdGlvbnMuZG9udENhbGxHZXRTZXQpIHtcbiAgICAgIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICAgICAgdGFyZ2V0UHJvcGVydHkgPSBkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IudmFsdWU7XG4gICAgfSBlbHNlIHRhcmdldFByb3BlcnR5ID0gdGFyZ2V0W2tleV07XG4gICAgRk9SQ0VEID0gaXNGb3JjZWQoR0xPQkFMID8ga2V5IDogVEFSR0VUICsgKFNUQVRJQyA/ICcuJyA6ICcjJykgKyBrZXksIG9wdGlvbnMuZm9yY2VkKTtcbiAgICAvLyBjb250YWluZWQgaW4gdGFyZ2V0XG4gICAgaWYgKCFGT1JDRUQgJiYgdGFyZ2V0UHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGVvZiBzb3VyY2VQcm9wZXJ0eSA9PSB0eXBlb2YgdGFyZ2V0UHJvcGVydHkpIGNvbnRpbnVlO1xuICAgICAgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyhzb3VyY2VQcm9wZXJ0eSwgdGFyZ2V0UHJvcGVydHkpO1xuICAgIH1cbiAgICAvLyBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gICAgaWYgKG9wdGlvbnMuc2hhbSB8fCAodGFyZ2V0UHJvcGVydHkgJiYgdGFyZ2V0UHJvcGVydHkuc2hhbSkpIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShzb3VyY2VQcm9wZXJ0eSwgJ3NoYW0nLCB0cnVlKTtcbiAgICB9XG4gICAgZGVmaW5lQnVpbHRJbih0YXJnZXQsIGtleSwgc291cmNlUHJvcGVydHksIG9wdGlvbnMpO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc1Byb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBQcm90b3R5cGUpIHtcbiAgaWYgKGlzUHJvdG90eXBlT2YoUHJvdG90eXBlLCBpdCkpIHJldHVybiBpdDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0luY29ycmVjdCBpbnZvY2F0aW9uJyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEYoKSB7IC8qIGVtcHR5ICovIH1cbiAgRi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBudWxsO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldHByb3RvdHlwZW9mIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2YobmV3IEYoKSkgIT09IEYucHJvdG90eXBlO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgQ09SUkVDVF9QUk9UT1RZUEVfR0VUVEVSID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcnJlY3QtcHJvdG90eXBlLWdldHRlcicpO1xuXG52YXIgSUVfUFJPVE8gPSBzaGFyZWRLZXkoJ0lFX1BST1RPJyk7XG52YXIgJE9iamVjdCA9IE9iamVjdDtcbnZhciBPYmplY3RQcm90b3R5cGUgPSAkT2JqZWN0LnByb3RvdHlwZTtcblxuLy8gYE9iamVjdC5nZXRQcm90b3R5cGVPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRwcm90b3R5cGVvZlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRwcm90b3R5cGVvZiAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IENPUlJFQ1RfUFJPVE9UWVBFX0dFVFRFUiA/ICRPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiAoTykge1xuICB2YXIgb2JqZWN0ID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXNPd24ob2JqZWN0LCBJRV9QUk9UTykpIHJldHVybiBvYmplY3RbSUVfUFJPVE9dO1xuICB2YXIgY29uc3RydWN0b3IgPSBvYmplY3QuY29uc3RydWN0b3I7XG4gIGlmIChpc0NhbGxhYmxlKGNvbnN0cnVjdG9yKSAmJiBvYmplY3QgaW5zdGFuY2VvZiBjb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBjb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIG9iamVjdCBpbnN0YW5jZW9mICRPYmplY3QgPyBPYmplY3RQcm90b3R5cGUgOiBudWxsO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgbWFrZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWFrZS1idWlsdC1pbicpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKSB7XG4gIGlmIChkZXNjcmlwdG9yLmdldCkgbWFrZUJ1aWx0SW4oZGVzY3JpcHRvci5nZXQsIG5hbWUsIHsgZ2V0dGVyOiB0cnVlIH0pO1xuICBpZiAoZGVzY3JpcHRvci5zZXQpIG1ha2VCdWlsdEluKGRlc2NyaXB0b3Iuc2V0LCBuYW1lLCB7IHNldHRlcjogdHJ1ZSB9KTtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5LmYodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwga2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3Rba2V5XSA9IHZhbHVlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG4vLyBgT2JqZWN0LmtleXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3Qua2V5c1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1rZXlzIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1ZycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBvYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzJyk7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydGllc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0aWVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnRpZXMgLS0gc2FmZVxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgJiYgIVY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBwcm9wcyA9IHRvSW5kZXhlZE9iamVjdChQcm9wZXJ0aWVzKTtcbiAgdmFyIGtleXMgPSBvYmplY3RLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsZW5ndGggPiBpbmRleCkgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXkgPSBrZXlzW2luZGV4KytdLCBwcm9wc1trZXldKTtcbiAgcmV0dXJuIE87XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ2RvY3VtZW50JywgJ2RvY3VtZW50RWxlbWVudCcpO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGdsb2JhbCBBY3RpdmVYT2JqZWN0IC0tIG9sZCBJRSwgV1NIICovXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZGVmaW5lUHJvcGVydGllc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnRpZXMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xudmFyIGh0bWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaHRtbCcpO1xudmFyIGRvY3VtZW50Q3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG5cbnZhciBHVCA9ICc+JztcbnZhciBMVCA9ICc8JztcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBTQ1JJUFQgPSAnc2NyaXB0JztcbnZhciBJRV9QUk9UTyA9IHNoYXJlZEtleSgnSUVfUFJPVE8nKTtcblxudmFyIEVtcHR5Q29uc3RydWN0b3IgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cbnZhciBzY3JpcHRUYWcgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICByZXR1cm4gTFQgKyBTQ1JJUFQgKyBHVCArIGNvbnRlbnQgKyBMVCArICcvJyArIFNDUklQVCArIEdUO1xufTtcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIEFjdGl2ZVggT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYID0gZnVuY3Rpb24gKGFjdGl2ZVhEb2N1bWVudCkge1xuICBhY3RpdmVYRG9jdW1lbnQud3JpdGUoc2NyaXB0VGFnKCcnKSk7XG4gIGFjdGl2ZVhEb2N1bWVudC5jbG9zZSgpO1xuICB2YXIgdGVtcCA9IGFjdGl2ZVhEb2N1bWVudC5wYXJlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1hc3NpZ25tZW50IC0tIGF2b2lkIG1lbW9yeSBsZWFrXG4gIGFjdGl2ZVhEb2N1bWVudCA9IG51bGw7XG4gIHJldHVybiB0ZW1wO1xufTtcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIE51bGxQcm90b09iamVjdFZpYUlGcmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IGRvY3VtZW50Q3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gIHZhciBKUyA9ICdqYXZhJyArIFNDUklQVCArICc6JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgaHRtbC5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNDc1XG4gIGlmcmFtZS5zcmMgPSBTdHJpbmcoSlMpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKHNjcmlwdFRhZygnZG9jdW1lbnQuRj1PYmplY3QnKSk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIHJldHVybiBpZnJhbWVEb2N1bWVudC5GO1xufTtcblxuLy8gQ2hlY2sgZm9yIGRvY3VtZW50LmRvbWFpbiBhbmQgYWN0aXZlIHggc3VwcG9ydFxuLy8gTm8gbmVlZCB0byB1c2UgYWN0aXZlIHggYXBwcm9hY2ggd2hlbiBkb2N1bWVudC5kb21haW4gaXMgbm90IHNldFxuLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lcy1zaGltcy9lczUtc2hpbS9pc3N1ZXMvMTUwXG4vLyB2YXJpYXRpb24gb2YgaHR0cHM6Ly9naXRodWIuY29tL2tpdGNhbWJyaWRnZS9lczUtc2hpbS9jb21taXQvNGY3MzhhYzA2NjM0NlxuLy8gYXZvaWQgSUUgR0MgYnVnXG52YXIgYWN0aXZlWERvY3VtZW50O1xudmFyIE51bGxQcm90b09iamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICBhY3RpdmVYRG9jdW1lbnQgPSBuZXcgQWN0aXZlWE9iamVjdCgnaHRtbGZpbGUnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogaWdub3JlICovIH1cbiAgTnVsbFByb3RvT2JqZWN0ID0gdHlwZW9mIGRvY3VtZW50ICE9ICd1bmRlZmluZWQnXG4gICAgPyBkb2N1bWVudC5kb21haW4gJiYgYWN0aXZlWERvY3VtZW50XG4gICAgICA/IE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVgoYWN0aXZlWERvY3VtZW50KSAvLyBvbGQgSUVcbiAgICAgIDogTnVsbFByb3RvT2JqZWN0VmlhSUZyYW1lKClcbiAgICA6IE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVgoYWN0aXZlWERvY3VtZW50KTsgLy8gV1NIXG4gIHZhciBsZW5ndGggPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkgZGVsZXRlIE51bGxQcm90b09iamVjdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2xlbmd0aF1dO1xuICByZXR1cm4gTnVsbFByb3RvT2JqZWN0KCk7XG59O1xuXG5oaWRkZW5LZXlzW0lFX1BST1RPXSA9IHRydWU7XG5cbi8vIGBPYmplY3QuY3JlYXRlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmNyZWF0ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1jcmVhdGUgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlDb25zdHJ1Y3RvcltQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5Q29uc3RydWN0b3IoKTtcbiAgICBFbXB0eUNvbnN0cnVjdG9yW1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IE51bGxQcm90b09iamVjdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZGVmaW5lUHJvcGVydGllc01vZHVsZS5mKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZScpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4nKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgPSBmYWxzZTtcblxuLy8gYCVJdGVyYXRvclByb3RvdHlwZSVgIG9iamVjdFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy0laXRlcmF0b3Jwcm90b3R5cGUlLW9iamVjdFxudmFyIEl0ZXJhdG9yUHJvdG90eXBlLCBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUsIGFycmF5SXRlcmF0b3I7XG5cbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLWFycmF5LXByb3RvdHlwZS1rZXlzIC0tIHNhZmUgKi9cbmlmIChbXS5rZXlzKSB7XG4gIGFycmF5SXRlcmF0b3IgPSBbXS5rZXlzKCk7XG4gIC8vIFNhZmFyaSA4IGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICBpZiAoISgnbmV4dCcgaW4gYXJyYXlJdGVyYXRvcikpIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgPSB0cnVlO1xuICBlbHNlIHtcbiAgICBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZihnZXRQcm90b3R5cGVPZihhcnJheUl0ZXJhdG9yKSk7XG4gICAgaWYgKFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSkgSXRlcmF0b3JQcm90b3R5cGUgPSBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cbn1cblxudmFyIE5FV19JVEVSQVRPUl9QUk9UT1RZUEUgPSAhaXNPYmplY3QoSXRlcmF0b3JQcm90b3R5cGUpIHx8IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRlc3QgPSB7fTtcbiAgLy8gRkY0NC0gbGVnYWN5IGl0ZXJhdG9ycyBjYXNlXG4gIHJldHVybiBJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0uY2FsbCh0ZXN0KSAhPT0gdGVzdDtcbn0pO1xuXG5pZiAoTkVXX0lURVJBVE9SX1BST1RPVFlQRSkgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbmVsc2UgaWYgKElTX1BVUkUpIEl0ZXJhdG9yUHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcblxuLy8gYCVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSVpdGVyYXRvcnByb3RvdHlwZSUtQEBpdGVyYXRvclxuaWYgKCFpc0NhbGxhYmxlKEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXSkpIHtcbiAgZGVmaW5lQnVpbHRJbihJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBJdGVyYXRvclByb3RvdHlwZTogSXRlcmF0b3JQcm90b3R5cGUsXG4gIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlM6IEJVR0dZX1NBRkFSSV9JVEVSQVRPUlNcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4taW5zdGFuY2UnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YnKTtcbnZhciBkZWZpbmVCdWlsdEluQWNjZXNzb3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluLWFjY2Vzc29yJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycy1jb3JlJykuSXRlcmF0b3JQcm90b3R5cGU7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcblxudmFyIENPTlNUUlVDVE9SID0gJ2NvbnN0cnVjdG9yJztcbnZhciBJVEVSQVRPUiA9ICdJdGVyYXRvcic7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG52YXIgTmF0aXZlSXRlcmF0b3IgPSBnbG9iYWxUaGlzW0lURVJBVE9SXTtcblxuLy8gRkY1Ni0gaGF2ZSBub24tc3RhbmRhcmQgZ2xvYmFsIGhlbHBlciBgSXRlcmF0b3JgXG52YXIgRk9SQ0VEID0gSVNfUFVSRVxuICB8fCAhaXNDYWxsYWJsZShOYXRpdmVJdGVyYXRvcilcbiAgfHwgTmF0aXZlSXRlcmF0b3IucHJvdG90eXBlICE9PSBJdGVyYXRvclByb3RvdHlwZVxuICAvLyBGRjQ0LSBub24tc3RhbmRhcmQgYEl0ZXJhdG9yYCBwYXNzZXMgcHJldmlvdXMgdGVzdHNcbiAgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHsgTmF0aXZlSXRlcmF0b3Ioe30pOyB9KTtcblxudmFyIEl0ZXJhdG9yQ29uc3RydWN0b3IgPSBmdW5jdGlvbiBJdGVyYXRvcigpIHtcbiAgYW5JbnN0YW5jZSh0aGlzLCBJdGVyYXRvclByb3RvdHlwZSk7XG4gIGlmIChnZXRQcm90b3R5cGVPZih0aGlzKSA9PT0gSXRlcmF0b3JQcm90b3R5cGUpIHRocm93IG5ldyAkVHlwZUVycm9yKCdBYnN0cmFjdCBjbGFzcyBJdGVyYXRvciBub3QgZGlyZWN0bHkgY29uc3RydWN0YWJsZScpO1xufTtcblxudmFyIGRlZmluZUl0ZXJhdG9yUHJvdG90eXBlQWNjZXNzb3IgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICBpZiAoREVTQ1JJUFRPUlMpIHtcbiAgICBkZWZpbmVCdWlsdEluQWNjZXNzb3IoSXRlcmF0b3JQcm90b3R5cGUsIGtleSwge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChyZXBsYWNlbWVudCkge1xuICAgICAgICBhbk9iamVjdCh0aGlzKTtcbiAgICAgICAgaWYgKHRoaXMgPT09IEl0ZXJhdG9yUHJvdG90eXBlKSB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIllvdSBjYW4ndCByZWRlZmluZSB0aGlzIHByb3BlcnR5XCIpO1xuICAgICAgICBpZiAoaGFzT3duKHRoaXMsIGtleSkpIHRoaXNba2V5XSA9IHJlcGxhY2VtZW50O1xuICAgICAgICBlbHNlIGNyZWF0ZVByb3BlcnR5KHRoaXMsIGtleSwgcmVwbGFjZW1lbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2UgSXRlcmF0b3JQcm90b3R5cGVba2V5XSA9IHZhbHVlO1xufTtcblxuaWYgKCFoYXNPd24oSXRlcmF0b3JQcm90b3R5cGUsIFRPX1NUUklOR19UQUcpKSBkZWZpbmVJdGVyYXRvclByb3RvdHlwZUFjY2Vzc29yKFRPX1NUUklOR19UQUcsIElURVJBVE9SKTtcblxuaWYgKEZPUkNFRCB8fCAhaGFzT3duKEl0ZXJhdG9yUHJvdG90eXBlLCBDT05TVFJVQ1RPUikgfHwgSXRlcmF0b3JQcm90b3R5cGVbQ09OU1RSVUNUT1JdID09PSBPYmplY3QpIHtcbiAgZGVmaW5lSXRlcmF0b3JQcm90b3R5cGVBY2Nlc3NvcihDT05TVFJVQ1RPUiwgSXRlcmF0b3JDb25zdHJ1Y3Rvcik7XG59XG5cbkl0ZXJhdG9yQ29uc3RydWN0b3IucHJvdG90eXBlID0gSXRlcmF0b3JQcm90b3R5cGU7XG5cbi8vIGBJdGVyYXRvcmAgY29uc3RydWN0b3Jcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXRlcmF0b3JcbiQoeyBnbG9iYWw6IHRydWUsIGNvbnN0cnVjdG9yOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIEl0ZXJhdG9yOiBJdGVyYXRvckNvbnN0cnVjdG9yXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBgR2V0SXRlcmF0b3JEaXJlY3Qob2JqKWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWdldGl0ZXJhdG9yZGlyZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHtcbiAgICBpdGVyYXRvcjogb2JqLFxuICAgIG5leHQ6IG9iai5uZXh0LFxuICAgIGRvbmU6IGZhbHNlXG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNyYywgb3B0aW9ucykge1xuICBmb3IgKHZhciBrZXkgaW4gc3JjKSBkZWZpbmVCdWlsdEluKHRhcmdldCwga2V5LCBzcmNba2V5XSwgb3B0aW9ucyk7XG4gIHJldHVybiB0YXJnZXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGBDcmVhdGVJdGVyUmVzdWx0T2JqZWN0YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtY3JlYXRlaXRlcnJlc3VsdG9iamVjdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUsIGRvbmUpIHtcbiAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiBkb25lIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwga2luZCwgdmFsdWUpIHtcbiAgdmFyIGlubmVyUmVzdWx0LCBpbm5lckVycm9yO1xuICBhbk9iamVjdChpdGVyYXRvcik7XG4gIHRyeSB7XG4gICAgaW5uZXJSZXN1bHQgPSBnZXRNZXRob2QoaXRlcmF0b3IsICdyZXR1cm4nKTtcbiAgICBpZiAoIWlubmVyUmVzdWx0KSB7XG4gICAgICBpZiAoa2luZCA9PT0gJ3Rocm93JykgdGhyb3cgdmFsdWU7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGlubmVyUmVzdWx0ID0gY2FsbChpbm5lclJlc3VsdCwgaXRlcmF0b3IpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlubmVyRXJyb3IgPSB0cnVlO1xuICAgIGlubmVyUmVzdWx0ID0gZXJyb3I7XG4gIH1cbiAgaWYgKGtpbmQgPT09ICd0aHJvdycpIHRocm93IHZhbHVlO1xuICBpZiAoaW5uZXJFcnJvcikgdGhyb3cgaW5uZXJSZXN1bHQ7XG4gIGFuT2JqZWN0KGlubmVyUmVzdWx0KTtcbiAgcmV0dXJuIHZhbHVlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXRlcmF0b3JDbG9zZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1jbG9zZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVycywga2luZCwgdmFsdWUpIHtcbiAgZm9yICh2YXIgaSA9IGl0ZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgaWYgKGl0ZXJzW2ldID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xuICAgIHRyeSB7XG4gICAgICB2YWx1ZSA9IGl0ZXJhdG9yQ2xvc2UoaXRlcnNbaV0uaXRlcmF0b3IsIGtpbmQsIHZhbHVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAga2luZCA9ICd0aHJvdyc7XG4gICAgICB2YWx1ZSA9IGVycm9yO1xuICAgIH1cbiAgfVxuICBpZiAoa2luZCA9PT0gJ3Rocm93JykgdGhyb3cgdmFsdWU7XG4gIHJldHVybiB2YWx1ZTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGRlZmluZUJ1aWx0SW5zID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbnMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMtY29yZScpLkl0ZXJhdG9yUHJvdG90eXBlO1xudmFyIGNyZWF0ZUl0ZXJSZXN1bHRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLWl0ZXItcmVzdWx0LW9iamVjdCcpO1xudmFyIGl0ZXJhdG9yQ2xvc2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3ItY2xvc2UnKTtcbnZhciBpdGVyYXRvckNsb3NlQWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlLWFsbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciBJVEVSQVRPUl9IRUxQRVIgPSAnSXRlcmF0b3JIZWxwZXInO1xudmFyIFdSQVBfRk9SX1ZBTElEX0lURVJBVE9SID0gJ1dyYXBGb3JWYWxpZEl0ZXJhdG9yJztcbnZhciBOT1JNQUwgPSAnbm9ybWFsJztcbnZhciBUSFJPVyA9ICd0aHJvdyc7XG52YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuc2V0O1xuXG52YXIgY3JlYXRlSXRlcmF0b3JQcm94eVByb3RvdHlwZSA9IGZ1bmN0aW9uIChJU19JVEVSQVRPUikge1xuICB2YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0dGVyRm9yKElTX0lURVJBVE9SID8gV1JBUF9GT1JfVkFMSURfSVRFUkFUT1IgOiBJVEVSQVRPUl9IRUxQRVIpO1xuXG4gIHJldHVybiBkZWZpbmVCdWlsdElucyhjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpLCB7XG4gICAgbmV4dDogZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhpcyk7XG4gICAgICAvLyBmb3Igc2ltcGxpZmljYXRpb246XG4gICAgICAvLyAgIGZvciBgJVdyYXBGb3JWYWxpZEl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0YCBvciB3aXRoIGBzdGF0ZS5yZXR1cm5IYW5kbGVyUmVzdWx0YCBvdXIgYG5leHRIYW5kbGVyYCByZXR1cm5zIGBJdGVyUmVzdWx0T2JqZWN0YFxuICAgICAgLy8gICBmb3IgYCVJdGVyYXRvckhlbHBlclByb3RvdHlwZSUubmV4dGAgLSBqdXN0IGEgdmFsdWVcbiAgICAgIGlmIChJU19JVEVSQVRPUikgcmV0dXJuIHN0YXRlLm5leHRIYW5kbGVyKCk7XG4gICAgICBpZiAoc3RhdGUuZG9uZSkgcmV0dXJuIGNyZWF0ZUl0ZXJSZXN1bHRPYmplY3QodW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBzdGF0ZS5uZXh0SGFuZGxlcigpO1xuICAgICAgICByZXR1cm4gc3RhdGUucmV0dXJuSGFuZGxlclJlc3VsdCA/IHJlc3VsdCA6IGNyZWF0ZUl0ZXJSZXN1bHRPYmplY3QocmVzdWx0LCBzdGF0ZS5kb25lKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHN0YXRlLmRvbmUgPSB0cnVlO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cbiAgICB9LFxuICAgICdyZXR1cm4nOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpO1xuICAgICAgdmFyIGl0ZXJhdG9yID0gc3RhdGUuaXRlcmF0b3I7XG4gICAgICBzdGF0ZS5kb25lID0gdHJ1ZTtcbiAgICAgIGlmIChJU19JVEVSQVRPUikge1xuICAgICAgICB2YXIgcmV0dXJuTWV0aG9kID0gZ2V0TWV0aG9kKGl0ZXJhdG9yLCAncmV0dXJuJyk7XG4gICAgICAgIHJldHVybiByZXR1cm5NZXRob2QgPyBjYWxsKHJldHVybk1ldGhvZCwgaXRlcmF0b3IpIDogY3JlYXRlSXRlclJlc3VsdE9iamVjdCh1bmRlZmluZWQsIHRydWUpO1xuICAgICAgfVxuICAgICAgaWYgKHN0YXRlLmlubmVyKSB0cnkge1xuICAgICAgICBpdGVyYXRvckNsb3NlKHN0YXRlLmlubmVyLml0ZXJhdG9yLCBOT1JNQUwpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIFRIUk9XLCBlcnJvcik7XG4gICAgICB9XG4gICAgICBpZiAoc3RhdGUub3Blbkl0ZXJzKSB0cnkge1xuICAgICAgICBpdGVyYXRvckNsb3NlQWxsKHN0YXRlLm9wZW5JdGVycywgTk9STUFMKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBUSFJPVywgZXJyb3IpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZXJhdG9yKSBpdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBOT1JNQUwpO1xuICAgICAgcmV0dXJuIGNyZWF0ZUl0ZXJSZXN1bHRPYmplY3QodW5kZWZpbmVkLCB0cnVlKTtcbiAgICB9XG4gIH0pO1xufTtcblxudmFyIFdyYXBGb3JWYWxpZEl0ZXJhdG9yUHJvdG90eXBlID0gY3JlYXRlSXRlcmF0b3JQcm94eVByb3RvdHlwZSh0cnVlKTtcbnZhciBJdGVyYXRvckhlbHBlclByb3RvdHlwZSA9IGNyZWF0ZUl0ZXJhdG9yUHJveHlQcm90b3R5cGUoZmFsc2UpO1xuXG5jcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoSXRlcmF0b3JIZWxwZXJQcm90b3R5cGUsIFRPX1NUUklOR19UQUcsICdJdGVyYXRvciBIZWxwZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmV4dEhhbmRsZXIsIElTX0lURVJBVE9SLCBSRVRVUk5fSEFORExFUl9SRVNVTFQpIHtcbiAgdmFyIEl0ZXJhdG9yUHJveHkgPSBmdW5jdGlvbiBJdGVyYXRvcihyZWNvcmQsIHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlKSB7XG4gICAgICBzdGF0ZS5pdGVyYXRvciA9IHJlY29yZC5pdGVyYXRvcjtcbiAgICAgIHN0YXRlLm5leHQgPSByZWNvcmQubmV4dDtcbiAgICB9IGVsc2Ugc3RhdGUgPSByZWNvcmQ7XG4gICAgc3RhdGUudHlwZSA9IElTX0lURVJBVE9SID8gV1JBUF9GT1JfVkFMSURfSVRFUkFUT1IgOiBJVEVSQVRPUl9IRUxQRVI7XG4gICAgc3RhdGUucmV0dXJuSGFuZGxlclJlc3VsdCA9ICEhUkVUVVJOX0hBTkRMRVJfUkVTVUxUO1xuICAgIHN0YXRlLm5leHRIYW5kbGVyID0gbmV4dEhhbmRsZXI7XG4gICAgc3RhdGUuY291bnRlciA9IDA7XG4gICAgc3RhdGUuZG9uZSA9IGZhbHNlO1xuICAgIHNldEludGVybmFsU3RhdGUodGhpcywgc3RhdGUpO1xuICB9O1xuXG4gIEl0ZXJhdG9yUHJveHkucHJvdG90eXBlID0gSVNfSVRFUkFUT1IgPyBXcmFwRm9yVmFsaWRJdGVyYXRvclByb3RvdHlwZSA6IEl0ZXJhdG9ySGVscGVyUHJvdG90eXBlO1xuXG4gIHJldHVybiBJdGVyYXRvclByb3h5O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgaXRlcmF0b3JDbG9zZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1jbG9zZScpO1xuXG4vLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBFTlRSSUVTKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEVOVFJJRVMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCAndGhyb3cnLCBlcnJvcik7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gU2hvdWxkIHRocm93IGFuIGVycm9yIG9uIGludmFsaWQgaXRlcmF0b3Jcbi8vIGh0dHBzOi8vaXNzdWVzLmNocm9taXVtLm9yZy9pc3N1ZXMvMzM2ODM5MTE1XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChtZXRob2ROYW1lLCBhcmd1bWVudCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8taXRlcmF0b3IgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgdmFyIG1ldGhvZCA9IHR5cGVvZiBJdGVyYXRvciA9PSAnZnVuY3Rpb24nICYmIEl0ZXJhdG9yLnByb3RvdHlwZVttZXRob2ROYW1lXTtcbiAgaWYgKG1ldGhvZCkgdHJ5IHtcbiAgICBtZXRob2QuY2FsbCh7IG5leHQ6IG51bGwgfSwgYXJndW1lbnQpLm5leHQoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9lY21hMjYyL3B1bGwvMzQ2N1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUsIEV4cGVjdGVkRXJyb3IpIHtcbiAgdmFyIEl0ZXJhdG9yID0gZ2xvYmFsVGhpcy5JdGVyYXRvcjtcbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0gSXRlcmF0b3IgJiYgSXRlcmF0b3IucHJvdG90eXBlO1xuICB2YXIgbWV0aG9kID0gSXRlcmF0b3JQcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGVbTUVUSE9EX05BTUVdO1xuXG4gIHZhciBDTE9TRUQgPSBmYWxzZTtcblxuICBpZiAobWV0aG9kKSB0cnkge1xuICAgIG1ldGhvZC5jYWxsKHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyB9LFxuICAgICAgJ3JldHVybic6IGZ1bmN0aW9uICgpIHsgQ0xPU0VEID0gdHJ1ZTsgfVxuICAgIH0sIC0xKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjkxMTk1XG4gICAgaWYgKCEoZXJyb3IgaW5zdGFuY2VvZiBFeHBlY3RlZEVycm9yKSkgQ0xPU0VEID0gZmFsc2U7XG4gIH1cblxuICBpZiAoIUNMT1NFRCkgcmV0dXJuIG1ldGhvZDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBnZXRJdGVyYXRvckRpcmVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItZGlyZWN0Jyk7XG52YXIgY3JlYXRlSXRlcmF0b3JQcm94eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1jcmVhdGUtcHJveHknKTtcbnZhciBjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NhbGwtd2l0aC1zYWZlLWl0ZXJhdGlvbi1jbG9zaW5nJyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgaXRlcmF0b3JDbG9zZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1jbG9zZScpO1xudmFyIGl0ZXJhdG9ySGVscGVyVGhyb3dzT25JbnZhbGlkSXRlcmF0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3ItaGVscGVyLXRocm93cy1vbi1pbnZhbGlkLWl0ZXJhdG9yJyk7XG52YXIgaXRlcmF0b3JIZWxwZXJXaXRob3V0Q2xvc2luZ09uRWFybHlFcnJvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1oZWxwZXItd2l0aG91dC1jbG9zaW5nLW9uLWVhcmx5LWVycm9yJyk7XG5cbnZhciBGSUxURVJfV0lUSE9VVF9USFJPV0lOR19PTl9JTlZBTElEX0lURVJBVE9SID0gIUlTX1BVUkUgJiYgIWl0ZXJhdG9ySGVscGVyVGhyb3dzT25JbnZhbGlkSXRlcmF0b3IoJ2ZpbHRlcicsIGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSk7XG52YXIgZmlsdGVyV2l0aG91dENsb3NpbmdPbkVhcmx5RXJyb3IgPSAhSVNfUFVSRSAmJiAhRklMVEVSX1dJVEhPVVRfVEhST1dJTkdfT05fSU5WQUxJRF9JVEVSQVRPUlxuICAmJiBpdGVyYXRvckhlbHBlcldpdGhvdXRDbG9zaW5nT25FYXJseUVycm9yKCdmaWx0ZXInLCBUeXBlRXJyb3IpO1xuXG52YXIgRk9SQ0VEID0gSVNfUFVSRSB8fCBGSUxURVJfV0lUSE9VVF9USFJPV0lOR19PTl9JTlZBTElEX0lURVJBVE9SIHx8IGZpbHRlcldpdGhvdXRDbG9zaW5nT25FYXJseUVycm9yO1xuXG52YXIgSXRlcmF0b3JQcm94eSA9IGNyZWF0ZUl0ZXJhdG9yUHJveHkoZnVuY3Rpb24gKCkge1xuICB2YXIgaXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yO1xuICB2YXIgcHJlZGljYXRlID0gdGhpcy5wcmVkaWNhdGU7XG4gIHZhciBuZXh0ID0gdGhpcy5uZXh0O1xuICB2YXIgcmVzdWx0LCBkb25lLCB2YWx1ZTtcbiAgd2hpbGUgKHRydWUpIHtcbiAgICByZXN1bHQgPSBhbk9iamVjdChjYWxsKG5leHQsIGl0ZXJhdG9yKSk7XG4gICAgZG9uZSA9IHRoaXMuZG9uZSA9ICEhcmVzdWx0LmRvbmU7XG4gICAgaWYgKGRvbmUpIHJldHVybjtcbiAgICB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICBpZiAoY2FsbFdpdGhTYWZlSXRlcmF0aW9uQ2xvc2luZyhpdGVyYXRvciwgcHJlZGljYXRlLCBbdmFsdWUsIHRoaXMuY291bnRlcisrXSwgdHJ1ZSkpIHJldHVybiB2YWx1ZTtcbiAgfVxufSk7XG5cbi8vIGBJdGVyYXRvci5wcm90b3R5cGUuZmlsdGVyYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXRlcmF0b3IucHJvdG90eXBlLmZpbHRlclxuJCh7IHRhcmdldDogJ0l0ZXJhdG9yJywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgZmlsdGVyOiBmdW5jdGlvbiBmaWx0ZXIocHJlZGljYXRlKSB7XG4gICAgYW5PYmplY3QodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGFDYWxsYWJsZShwcmVkaWNhdGUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpdGVyYXRvckNsb3NlKHRoaXMsICd0aHJvdycsIGVycm9yKTtcbiAgICB9XG5cbiAgICBpZiAoZmlsdGVyV2l0aG91dENsb3NpbmdPbkVhcmx5RXJyb3IpIHJldHVybiBjYWxsKGZpbHRlcldpdGhvdXRDbG9zaW5nT25FYXJseUVycm9yLCB0aGlzLCBwcmVkaWNhdGUpO1xuXG4gICAgcmV0dXJuIG5ldyBJdGVyYXRvclByb3h5KGdldEl0ZXJhdG9yRGlyZWN0KHRoaXMpLCB7XG4gICAgICBwcmVkaWNhdGU6IHByZWRpY2F0ZVxuICAgIH0pO1xuICB9XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2xhc3NvZlJhdyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbikge1xuICAvLyBOYXNob3JuIGJ1ZzpcbiAgLy8gICBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTEyOFxuICAvLyAgIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xMTMwXG4gIGlmIChjbGFzc29mUmF3KGZuKSA9PT0gJ0Z1bmN0aW9uJykgcmV0dXJuIHVuY3VycnlUaGlzKGZuKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy1jbGF1c2UnKTtcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBiaW5kID0gdW5jdXJyeVRoaXModW5jdXJyeVRoaXMuYmluZCk7XG5cbi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQpIHtcbiAgYUNhbGxhYmxlKGZuKTtcbiAgcmV0dXJuIHRoYXQgPT09IHVuZGVmaW5lZCA/IGZuIDogTkFUSVZFX0JJTkQgPyBiaW5kKGZuLCB0aGF0KSA6IGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG90eXBlID0gQXJyYXkucHJvdG90eXBlO1xuXG4vLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvdHlwZVtJVEVSQVRPUl0gPT09IGl0KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciB0ZXN0ID0ge307XG5cbnRlc3RbVE9fU1RSSU5HX1RBR10gPSAneic7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RyaW5nKHRlc3QpID09PSAnW29iamVjdCB6XSc7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIFRPX1NUUklOR19UQUdfU1VQUE9SVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgY2xhc3NvZlJhdyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIENPUlJFQ1RfQVJHVU1FTlRTID0gY2xhc3NvZlJhdyhmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbi8vIGdldHRpbmcgdGFnIGZyb20gRVM2KyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2Bcbm1vZHVsZS5leHBvcnRzID0gVE9fU1RSSU5HX1RBR19TVVBQT1JUID8gY2xhc3NvZlJhdyA6IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgdGFnLCByZXN1bHQ7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mICh0YWcgPSB0cnlHZXQoTyA9ICRPYmplY3QoaXQpLCBUT19TVFJJTkdfVEFHKSkgPT0gJ3N0cmluZycgPyB0YWdcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IENPUlJFQ1RfQVJHVU1FTlRTID8gY2xhc3NvZlJhdyhPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChyZXN1bHQgPSBjbGFzc29mUmF3KE8pKSA9PT0gJ09iamVjdCcgJiYgaXNDYWxsYWJsZShPLmNhbGxlZSkgPyAnQXJndW1lbnRzJyA6IHJlc3VsdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZicpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc051bGxPclVuZGVmaW5lZChpdCkpIHJldHVybiBnZXRNZXRob2QoaXQsIElURVJBVE9SKVxuICAgIHx8IGdldE1ldGhvZChpdCwgJ0BAaXRlcmF0b3InKVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRyeVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RyeS10by1zdHJpbmcnKTtcbnZhciBnZXRJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCwgdXNpbmdJdGVyYXRvcikge1xuICB2YXIgaXRlcmF0b3JNZXRob2QgPSBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGdldEl0ZXJhdG9yTWV0aG9kKGFyZ3VtZW50KSA6IHVzaW5nSXRlcmF0b3I7XG4gIGlmIChhQ2FsbGFibGUoaXRlcmF0b3JNZXRob2QpKSByZXR1cm4gYW5PYmplY3QoY2FsbChpdGVyYXRvck1ldGhvZCwgYXJndW1lbnQpKTtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IodHJ5VG9TdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgaXRlcmFibGUnKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xudmFyIGlzQXJyYXlJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheS1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xudmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZicpO1xudmFyIGdldEl0ZXJhdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvcicpO1xudmFyIGdldEl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBpdGVyYXRvckNsb3NlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG52YXIgUmVzdWx0ID0gZnVuY3Rpb24gKHN0b3BwZWQsIHJlc3VsdCkge1xuICB0aGlzLnN0b3BwZWQgPSBzdG9wcGVkO1xuICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcbn07XG5cbnZhciBSZXN1bHRQcm90b3R5cGUgPSBSZXN1bHQucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgdW5ib3VuZEZ1bmN0aW9uLCBvcHRpb25zKSB7XG4gIHZhciB0aGF0ID0gb3B0aW9ucyAmJiBvcHRpb25zLnRoYXQ7XG4gIHZhciBBU19FTlRSSUVTID0gISEob3B0aW9ucyAmJiBvcHRpb25zLkFTX0VOVFJJRVMpO1xuICB2YXIgSVNfUkVDT1JEID0gISEob3B0aW9ucyAmJiBvcHRpb25zLklTX1JFQ09SRCk7XG4gIHZhciBJU19JVEVSQVRPUiA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5JU19JVEVSQVRPUik7XG4gIHZhciBJTlRFUlJVUFRFRCA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5JTlRFUlJVUFRFRCk7XG4gIHZhciBmbiA9IGJpbmQodW5ib3VuZEZ1bmN0aW9uLCB0aGF0KTtcbiAgdmFyIGl0ZXJhdG9yLCBpdGVyRm4sIGluZGV4LCBsZW5ndGgsIHJlc3VsdCwgbmV4dCwgc3RlcDtcblxuICB2YXIgc3RvcCA9IGZ1bmN0aW9uIChjb25kaXRpb24pIHtcbiAgICBpZiAoaXRlcmF0b3IpIGl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsICdub3JtYWwnKTtcbiAgICByZXR1cm4gbmV3IFJlc3VsdCh0cnVlLCBjb25kaXRpb24pO1xuICB9O1xuXG4gIHZhciBjYWxsRm4gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoQVNfRU5UUklFUykge1xuICAgICAgYW5PYmplY3QodmFsdWUpO1xuICAgICAgcmV0dXJuIElOVEVSUlVQVEVEID8gZm4odmFsdWVbMF0sIHZhbHVlWzFdLCBzdG9wKSA6IGZuKHZhbHVlWzBdLCB2YWx1ZVsxXSk7XG4gICAgfSByZXR1cm4gSU5URVJSVVBURUQgPyBmbih2YWx1ZSwgc3RvcCkgOiBmbih2YWx1ZSk7XG4gIH07XG5cbiAgaWYgKElTX1JFQ09SRCkge1xuICAgIGl0ZXJhdG9yID0gaXRlcmFibGUuaXRlcmF0b3I7XG4gIH0gZWxzZSBpZiAoSVNfSVRFUkFUT1IpIHtcbiAgICBpdGVyYXRvciA9IGl0ZXJhYmxlO1xuICB9IGVsc2Uge1xuICAgIGl0ZXJGbiA9IGdldEl0ZXJhdG9yTWV0aG9kKGl0ZXJhYmxlKTtcbiAgICBpZiAoIWl0ZXJGbikgdGhyb3cgbmV3ICRUeXBlRXJyb3IodHJ5VG9TdHJpbmcoaXRlcmFibGUpICsgJyBpcyBub3QgaXRlcmFibGUnKTtcbiAgICAvLyBvcHRpbWlzYXRpb24gZm9yIGFycmF5IGl0ZXJhdG9yc1xuICAgIGlmIChpc0FycmF5SXRlcmF0b3JNZXRob2QoaXRlckZuKSkge1xuICAgICAgZm9yIChpbmRleCA9IDAsIGxlbmd0aCA9IGxlbmd0aE9mQXJyYXlMaWtlKGl0ZXJhYmxlKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgICAgcmVzdWx0ID0gY2FsbEZuKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgICAgIGlmIChyZXN1bHQgJiYgaXNQcm90b3R5cGVPZihSZXN1bHRQcm90b3R5cGUsIHJlc3VsdCkpIHJldHVybiByZXN1bHQ7XG4gICAgICB9IHJldHVybiBuZXcgUmVzdWx0KGZhbHNlKTtcbiAgICB9XG4gICAgaXRlcmF0b3IgPSBnZXRJdGVyYXRvcihpdGVyYWJsZSwgaXRlckZuKTtcbiAgfVxuXG4gIG5leHQgPSBJU19SRUNPUkQgPyBpdGVyYWJsZS5uZXh0IDogaXRlcmF0b3IubmV4dDtcbiAgd2hpbGUgKCEoc3RlcCA9IGNhbGwobmV4dCwgaXRlcmF0b3IpKS5kb25lKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9IGNhbGxGbihzdGVwLnZhbHVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaXRlcmF0b3JDbG9zZShpdGVyYXRvciwgJ3Rocm93JywgZXJyb3IpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHJlc3VsdCA9PSAnb2JqZWN0JyAmJiByZXN1bHQgJiYgaXNQcm90b3R5cGVPZihSZXN1bHRQcm90b3R5cGUsIHJlc3VsdCkpIHJldHVybiByZXN1bHQ7XG4gIH0gcmV0dXJuIG5ldyBSZXN1bHQoZmFsc2UpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpdGVyYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdGUnKTtcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGdldEl0ZXJhdG9yRGlyZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvci1kaXJlY3QnKTtcbnZhciBpdGVyYXRvckNsb3NlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlJyk7XG52YXIgaXRlcmF0b3JIZWxwZXJXaXRob3V0Q2xvc2luZ09uRWFybHlFcnJvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1oZWxwZXItd2l0aG91dC1jbG9zaW5nLW9uLWVhcmx5LWVycm9yJyk7XG5cbnZhciBmaW5kV2l0aG91dENsb3NpbmdPbkVhcmx5RXJyb3IgPSBpdGVyYXRvckhlbHBlcldpdGhvdXRDbG9zaW5nT25FYXJseUVycm9yKCdmaW5kJywgVHlwZUVycm9yKTtcblxuLy8gYEl0ZXJhdG9yLnByb3RvdHlwZS5maW5kYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXRlcmF0b3IucHJvdG90eXBlLmZpbmRcbiQoeyB0YXJnZXQ6ICdJdGVyYXRvcicsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6IGZpbmRXaXRob3V0Q2xvc2luZ09uRWFybHlFcnJvciB9LCB7XG4gIGZpbmQ6IGZ1bmN0aW9uIGZpbmQocHJlZGljYXRlKSB7XG4gICAgYW5PYmplY3QodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGFDYWxsYWJsZShwcmVkaWNhdGUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpdGVyYXRvckNsb3NlKHRoaXMsICd0aHJvdycsIGVycm9yKTtcbiAgICB9XG5cbiAgICBpZiAoZmluZFdpdGhvdXRDbG9zaW5nT25FYXJseUVycm9yKSByZXR1cm4gY2FsbChmaW5kV2l0aG91dENsb3NpbmdPbkVhcmx5RXJyb3IsIHRoaXMsIHByZWRpY2F0ZSk7XG5cbiAgICB2YXIgcmVjb3JkID0gZ2V0SXRlcmF0b3JEaXJlY3QodGhpcyk7XG4gICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgIHJldHVybiBpdGVyYXRlKHJlY29yZCwgZnVuY3Rpb24gKHZhbHVlLCBzdG9wKSB7XG4gICAgICBpZiAocHJlZGljYXRlKHZhbHVlLCBjb3VudGVyKyspKSByZXR1cm4gc3RvcCh2YWx1ZSk7XG4gICAgfSwgeyBJU19SRUNPUkQ6IHRydWUsIElOVEVSUlVQVEVEOiB0cnVlIH0pLnJlc3VsdDtcbiAgfVxufSk7XG4iLCAiaW1wb3J0IFwiZXNidWlsZC1jc3MtbW9kdWxlcy1wbHVnaW4tbnMtY3NzOnNyYy9Ib3RDYXQvbW9kdWxlcy9jaGVjay5tb2R1bGUubGVzc1wiO1xuZXhwb3J0IGNvbnN0IGNhdGNoZWNrSW5saW5lSWNvbiA9IFwiY2hlY2stbW9kdWxlX19jYXRjaGVja0lubGluZUljb25fbUo1TkRxX180MTAwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJjYXRjaGVja0lubGluZUljb25cIjogY2F0Y2hlY2tJbmxpbmVJY29uXG59O1xuICAgICAgIiwgImltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG4vLyBJbml0aWFsaXplIE1lZGlhV2lraSBBUElcbmNvbnN0IG13QXBpOiAodXNlckFnZW50Pzogc3RyaW5nKSA9PiBtdy5BcGkgPSAodXNlckFnZW50KSA9PiB7XG5cdHJldHVybiBpbml0TXdBcGkodXNlckFnZW50KTtcbn07XG5cbmV4cG9ydCB7bXdBcGl9O1xuIiwgImltcG9ydCB7Y2F0Y2hlY2tJbmxpbmVJY29ufSBmcm9tICcuL2NoZWNrLm1vZHVsZS5sZXNzJztcbmltcG9ydCB7bXdBcGl9IGZyb20gJy4vYXBpJztcblxuLyoqXG4gKiBDaGVja0NhdGVnb3JpZXMgSG90Q2F0IEV4dGVuc2lvbiDigJNcbiAqIHJlbW92ZXMgdGhlIHRlbXBsYXRlIHdoZW4gY2F0ZWdvcml6aW5nIChwcm9tcHRzIGJlZm9yZSkgd2l0aCBIb3RDYXQgYW5kXG4gKiBhZGRzIGEgbGluayBcIkNhdGVnb3JpZXMgYXJlIE9LXCIgdG8gdGhlIGNhdGVnb3J5LXNlY3Rpb25cbiAqXG4gKiBAcmV2IDIgKDIwMTQtMDMtMjApXG4gKiBAYXV0aG9yIFJpbGxrZSwgMjAxMlxuICovXG4oZnVuY3Rpb24gaG90Q2F0Q2hlY2soKSB7XG5cdGlmIChcblx0XHRtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpICE9PSA2IHx8XG5cdFx0d2luZG93LkhvdENhdEF1dG9SZW1vdmVDaGVja0NhdE9wdE91dCB8fFxuXHRcdCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tjYXRlZ29yaWVzJylcblx0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IGFwaSA9IG13QXBpKCdob3RDYXRDaGVjay8yLjAnKTtcblx0Y29uc3QgY2hlY2tDYXRlZ29yaWVzUmVnRXhwID0gL3t7W0NjXWhlY2tbIF9dY2F0ZWdvcmllc1tee31dKn19L2c7XG5cdGNvbnN0IHNlbGZOYW1lID0gJyhbW01lZGlhV2lraTpHYWRnZXQtSG90Q2F0LWNoZWNrLmpzfFNjcmlwdF1dKTogJztcblx0Y29uc3Qgc3RvcmFnZUl0ZW1OYW1lID0gJ2NoZWNrQ2F0Jztcblx0Y29uc3Qgc3RvcmFnZUl0ZW0gPSBtdy5zdG9yYWdlLmdldChzdG9yYWdlSXRlbU5hbWUpO1xuXHQvKipcblx0ICogQSBmZXcgc3R5bGluZyBoZWxwZXIgZnVuY3Rpb25zXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBpY29uQ2xhc3Ncblx0ICogQHJldHVybiB7SlF1ZXJ5fVxuXHQgKi9cblx0Y29uc3QgY3JlYXRlakljb24gPSAoaWNvbkNsYXNzOiBzdHJpbmcpOiBKUXVlcnkgPT4ge1xuXHRcdHJldHVybiAkKCc8c3Bhbj4nKS5hdHRyKCdjbGFzcycsIGB1aS1pY29uICR7aWNvbkNsYXNzfSAke2NhdGNoZWNrSW5saW5lSWNvbn1gKS50ZXh0KCcgJyk7XG5cdH07XG5cdGNvbnN0IGNyZWF0ZU5vdGlmeUFyZWEgPSAodGV4dE5vZGU6IEpRdWVyeTxKUXVlcnkuTm9kZT4sIGljb246IHN0cmluZywgc3RhdGU6IHN0cmluZyk6IEpRdWVyeTxIVE1MRWxlbWVudD4gPT4ge1xuXHRcdHJldHVybiAkKCc8ZGl2PicpXG5cdFx0XHQuYWRkQ2xhc3MoJ3VpLXdpZGdldCcpXG5cdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHQkKCc8ZGl2PicpXG5cdFx0XHRcdFx0LmF0dHIoJ2NsYXNzJywgYCR7c3RhdGV9IHVpLWNvcm5lci1hbGxgKVxuXHRcdFx0XHRcdC5jc3Moe1xuXHRcdFx0XHRcdFx0J21hcmdpbi10b3AnOiAnMjBweCcsXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAnMC43ZW0nLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmFwcGVuZCgkKCc8cD4nKS5hcHBlbmQoY3JlYXRlakljb24oaWNvbikuY3NzKCdtYXJnaW5SaWdodCcsICcwLjNlbScpLCB0ZXh0Tm9kZSkpXG5cdFx0XHQpO1xuXHR9O1xuXHQvLyBSZW1vdmUgXCJjaGVjayBjYXRlZ29yaWVzXCIgd2hlbiB1c2luZyBIb3RDYXRcblx0Ly8gT25seSBleGVjdXRlZCBvbiBmaXJzdCBzdWJtaXRcblx0JCgnYm9keScpLm9uZSgnc3VibWl0LmNoZWNrQ2F0TGlzdGVuZXInLCAnI2hvdGNhdENvbW1pdEZvcm0nLCBmdW5jdGlvbiAoZSkge1xuXHRcdGlmIChzdG9yYWdlSXRlbSA9PT0gJ2Rpc2FibGVkJykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnRcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblxuXHRcdGNvbnN0IG5ld1ZhbCA9IChzZWxmLndwVGV4dGJveDEgYXMgSFRNTFRleHRBcmVhRWxlbWVudCkudmFsdWU/LnJlcGxhY2UoY2hlY2tDYXRlZ29yaWVzUmVnRXhwLCAnJyk7XG5cdFx0Y29uc3QgZGxnQnV0dG9uczoge1xuXHRcdFx0J1llcywgUmVtb3ZlJz86ICgpID0+IHZvaWQ7XG5cdFx0XHQnTm8sIGtlZXAgaXQnPzogKCkgPT4gdm9pZDtcblx0XHR9ID0ge307XG5cdFx0bGV0ICRkaWFsb2dDaGVja1N0b3JhZ2U6IEpRdWVyeTxIVE1MRWxlbWVudD47XG5cdFx0bGV0ICRwZXJtYVNhdmVIaW50OiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xuXHRcdGxldCAkdGV4dEhpbnROb2RlO1xuXHRcdGxldCAkZGlhbG9nO1xuXHRcdGNvbnN0IGRvUmVtb3ZlID0gKCkgPT4ge1xuXHRcdFx0KHNlbGYud3BTdW1tYXJ5IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID1cblx0XHRcdFx0YFJlbW92aW5nIFtbVGVtcGxhdGU6Q2hlY2sgY2F0ZWdvcmllc3x7e0NoZWNrIGNhdGVnb3JpZXN9fV1dICR7KHNlbGYud3BTdW1tYXJ5IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlfWA7XG5cblx0XHRcdChzZWxmLndwVGV4dGJveDEgYXMgSFRNTFRleHRBcmVhRWxlbWVudCkudmFsdWUgPSBuZXdWYWw7XG5cdFx0fTtcblx0XHRjb25zdCB3cml0ZVN0b3JhZ2UgPSAodmFsOiBzdHJpbmcpID0+IHtcblx0XHRcdG13LnN0b3JhZ2Uuc2V0KHN0b3JhZ2VJdGVtTmFtZSwgdmFsLCA2MCAqIDYwICogMjQgKiA3KTsgLy8gNyBkYXlzXG5cdFx0fTtcblx0XHRkbGdCdXR0b25zWydZZXMsIFJlbW92ZSddID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0ZG9SZW1vdmUoKTtcblx0XHRcdGlmICgoJGRpYWxvZ0NoZWNrU3RvcmFnZVswXSBhcyBIVE1MSW5wdXRFbGVtZW50KT8uY2hlY2tlZCkge1xuXHRcdFx0XHR3cml0ZVN0b3JhZ2UoJ2F1dG8nKTtcblx0XHRcdH1cblx0XHRcdCQodGhpcykuZGlhbG9nKCdjbG9zZScpO1xuXHRcdH07XG5cdFx0ZGxnQnV0dG9uc1snTm8sIGtlZXAgaXQnXSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmICgoJGRpYWxvZ0NoZWNrU3RvcmFnZVswXSBhcyBIVE1MSW5wdXRFbGVtZW50KT8uY2hlY2tlZCkge1xuXHRcdFx0XHR3cml0ZVN0b3JhZ2UoJ2Rpc2FibGVkJyk7XG5cdFx0XHR9XG5cdFx0XHQkKHRoaXMpLmRpYWxvZygnY2xvc2UnKTtcblx0XHR9O1xuXHRcdGNvbnN0IF9hZGRUb0pTID0gZnVuY3Rpb24gKHRoaXM6IEhUTUxFbGVtZW50LCBfZTogSlF1ZXJ5LkV2ZW50KSB7XG5cdFx0XHRfZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0aWYgKCRwZXJtYVNhdmVIaW50Lmhhc0NsYXNzKCd1aS1zdGF0ZS1kaXNhYmxlZCcpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0ICRlbDogSlF1ZXJ5PEhUTUxFbGVtZW50PiA9ICQodGhpcyk7XG5cdFx0XHQkZWwub2ZmKCdjbGljaycpLnRleHQoJ1BsZWFzZSB3YWl0LicpO1xuXHRcdFx0JHBlcm1hU2F2ZUhpbnQuYWRkQ2xhc3MoJ3VpLXN0YXRlLWRpc2FibGVkJyk7XG5cdFx0XHRjb25zdCBwYXJhbXM6IEFwaUVkaXRQYWdlUGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdHRpdGxlOiBgVXNlcjoke213LmNvbmZpZy5nZXQoJ3dnVXNlck5hbWUnKX0vY29tbW9uLmpzYCxcblx0XHRcdFx0c3VtbWFyeTogYCR7c2VsZk5hbWV9U2F2aW5nIEhvdENhdCBjb25maWd1cmF0aW9uLmAsXG5cdFx0XHRcdGFwcGVuZHRleHQ6ICRlbC5kYXRhKCdhZGRUZXh0JykgYXMgc3RyaW5nLFxuXHRcdFx0fTtcblx0XHRcdGNvbnN0IGVkaXREb25lID0gKGVkaXRTdGF0Pzoge2Vycm9yPzoge2NvZGU/OiBzdHJpbmc7IGluZm8/OiBzdHJpbmd9fSkgPT4ge1xuXHRcdFx0XHRpZiAoIWVkaXRTdGF0KSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChlZGl0U3RhdC5lcnJvcikge1xuXHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KFxuXHRcdFx0XHRcdFx0YFVuYWJsZSB0byBzYXZlIHRvIHlvdXIgY29tbW9uLmpzIHVzaW5nIHRoZSBBUElcXG4ke2VkaXRTdGF0LmVycm9yLmNvZGV9XFxuJHtlZGl0U3RhdC5lcnJvci5pbmZvfWAsXG5cdFx0XHRcdFx0XHR7dGFnOiAnaG90Q2F0Q2hlY2snLCB0eXBlOiAnZXJyb3InfVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0JGVsLnRleHQoJ0VkaXQtRXJyb3IhJyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JGVsLnRleHQoJ0RvbmUuJyk7XG5cdFx0XHRcdFx0JHBlcm1hU2F2ZUhpbnQuZmFkZU91dCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0dm9pZCBhcGkucG9zdFdpdGhUb2tlbignY3NyZicsIHBhcmFtcykudGhlbihlZGl0RG9uZSk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBPbiBXaWtpbWVkaWEgQ29tbW9ucyB0aGVyZSB3ZXJlIHBlb3BsZSB3aG8gc2FpZDpcblx0XHQgKiBcIkNhdGVnb3JpemluZyB3aXRoIEhvdENhdCBkb2VzIGxlZ2l0IGF1dG9tYXRlZCByZW1vdmFsIG9mIHRoZSBjaGVjay1jYXQtbWVzc2FnZVwiXG5cdFx0ICogU28gd2UgaW52ZW50ZWQgYSBkaWFsb2cgdGhhdCBzaG91bGQgYmUgcmVhZGFibGUgYnkgdXNlcnMgZXZlbiB3aXRoIHZlcnkgZmV3IEVuZ2xpc2ggc2tpbGxzLlxuXHRcdCAqL1xuXHRcdGNvbnN0IHByb21wdCA9ICgpID0+IHtcblx0XHRcdCRkaWFsb2dDaGVja1N0b3JhZ2UgPSAkKCc8aW5wdXQ+Jylcblx0XHRcdFx0LmF0dHIoe1xuXHRcdFx0XHRcdHR5cGU6ICdjaGVja2JveCcsXG5cdFx0XHRcdFx0aWQ6ICdob3RDYXRBdXRvUmVtb3ZlQ2hlY2tDYXRTdG9yYWdlJyxcblx0XHRcdFx0fSlcblx0XHRcdFx0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0aWYgKCh0aGlzIGFzIEhUTUxJbnB1dEVsZW1lbnQpLmNoZWNrZWQpIHtcblx0XHRcdFx0XHRcdCRwZXJtYVNhdmVIaW50LmZhZGVJbigpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQkcGVybWFTYXZlSGludC5mYWRlT3V0KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdCR0ZXh0SGludE5vZGUgPSAkKCc8dWw+Jyk7XG5cdFx0XHQkKCc8bGk+Jylcblx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHQkKCc8YT4nKVxuXHRcdFx0XHRcdFx0LmF0dHIoJ2hyZWYnLCAnIycpXG5cdFx0XHRcdFx0XHQudGV4dCgnRGlzYWJsZSB0aGlzIGZlYXR1cmUuJylcblx0XHRcdFx0XHRcdC5kYXRhKCdhZGRUZXh0JywgJ1xcbndpbmRvdy5Ib3RDYXRBdXRvUmVtb3ZlQ2hlY2tDYXRPcHRPdXQgPSB0cnVlOycpXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgX2FkZFRvSlMpXG5cdFx0XHRcdClcblx0XHRcdFx0LmFwcGVuZFRvKCR0ZXh0SGludE5vZGUpO1xuXHRcdFx0JCgnPGxpPicpXG5cdFx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdFx0JCgnPGE+Jylcblx0XHRcdFx0XHRcdC5hdHRyKCdocmVmJywgJyMnKVxuXHRcdFx0XHRcdFx0LnRleHQoJ1JlbW92ZSB7e2NoZWNrIGNhdGVnb3JpZXN9fSB3aGVuIGVkaXRpbmcgdXNpbmcgSG90Q2F0IHdpdGhvdXQgcHJvbXB0aW5nLicpXG5cdFx0XHRcdFx0XHQuZGF0YSgnYWRkVGV4dCcsICdcXG53aW5kb3cuSG90Q2F0QXV0b1JlbW92ZUNoZWNrQ2F0ID0gdHJ1ZTsnKVxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIF9hZGRUb0pTKVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5hcHBlbmRUbygkdGV4dEhpbnROb2RlKTtcblx0XHRcdCRwZXJtYVNhdmVIaW50ID0gY3JlYXRlTm90aWZ5QXJlYShcblx0XHRcdFx0JCgnPHNwYW4+JykudGV4dCgnU2F2ZSB0aGVzZSBzZXR0aW5nIGluIHlvdXIgY29tbW9uLmpzOiAnKS5hcHBlbmQoJHRleHRIaW50Tm9kZSksXG5cdFx0XHRcdCd1aS1pY29uLWluZm8nLFxuXHRcdFx0XHQndWktc3RhdGUtaGlnaGxpZ2h0J1xuXHRcdFx0KTtcblx0XHRcdCRkaWFsb2cgPSAkKCc8ZGl2PicpXG5cdFx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdFx0JCgnPHNwYW4+Jylcblx0XHRcdFx0XHRcdC5jc3Moe1xuXHRcdFx0XHRcdFx0XHQnZm9udC1zaXplJzogJzJlbScsXG5cdFx0XHRcdFx0XHRcdCdsaW5lLWhlaWdodCc6ICcxLjhlbScsXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHRcdFx0JCgnPHNwYW4+JykudGV4dCgnIHt7Y2hlY2sgY2F0ZWdvcmllc319ICcpLmNzcyh7XG5cdFx0XHRcdFx0XHRcdFx0J2JhY2tncm91bmQtY29sb3InOiAnI0Y4Q0NCMCcsXG5cdFx0XHRcdFx0XHRcdFx0J3RleHQtZGVjb3JhdGlvbic6ICdsaW5lLXRocm91Z2ggIWltcG9ydGFudCcsXG5cdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG5cdFx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0XHQkKCc8c3Bhbj4nKS50ZXh0KCcgPycpXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdClcblx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHQnPGJyPicsXG5cdFx0XHRcdFx0JGRpYWxvZ0NoZWNrU3RvcmFnZSxcblx0XHRcdFx0XHQkKCc8bGFiZWw+JykuYXR0cignZm9yJywgJ2hvdENhdEF1dG9SZW1vdmVDaGVja0NhdFN0b3JhZ2UnKS50ZXh0KFwiRG9uJ3QgYXNrIGFnYWluXCIpLFxuXHRcdFx0XHRcdCc8YnI+J1xuXHRcdFx0XHQpXG5cdFx0XHRcdC5hcHBlbmQobXcudXNlci5pc0Fub24oKSA/ICcnIDogJHBlcm1hU2F2ZUhpbnQuaGlkZSgpKTtcblx0XHRcdCRkaWFsb2cuZGlhbG9nKHtcblx0XHRcdFx0bW9kYWw6IHRydWUsXG5cdFx0XHRcdGNsb3NlT25Fc2NhcGU6IHRydWUsXG5cdFx0XHRcdHRpdGxlOiAne3tjaGVjayBjYXRlZ29yaWVzfX0gKOKIkik/Jyxcblx0XHRcdFx0d2lkdGg6IDQ1MCxcblx0XHRcdFx0YnV0dG9uczogZGxnQnV0dG9ucyxcblx0XHRcdFx0Y2xvc2U6ICgpID0+IHtcblx0XHRcdFx0XHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0XHRcdFx0XHQkYm9keS5maW5kKCcjaG90Y2F0Q29tbWl0Rm9ybScpLnRyaWdnZXIoJ3N1Ym1pdCcpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRvcGVuKCkge1xuXHRcdFx0XHRcdGNvbnN0ICRidXR0b25zID0gJCh0aGlzKS5wYXJlbnQoKS5maW5kKCcudWktZGlhbG9nLWJ1dHRvbnBhbmUgYnV0dG9uJyk7XG5cdFx0XHRcdFx0JGJ1dHRvbnMuZXEoMCkuYnV0dG9uKHtcblx0XHRcdFx0XHRcdGljb25zOiB7XG5cdFx0XHRcdFx0XHRcdHByaW1hcnk6ICd1aS1pY29uLWNpcmNsZS1jaGVjaycsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdCRidXR0b25zLmVxKDEpLmJ1dHRvbih7XG5cdFx0XHRcdFx0XHRpY29uczoge1xuXHRcdFx0XHRcdFx0XHRwcmltYXJ5OiAndWktaWNvbi1jYW5jZWwnLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSxcblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHRpZiAobmV3VmFsICE9PSAoc2VsZi53cFRleHRib3gxIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQpLnZhbHVlKSB7XG5cdFx0XHRpZiAod2luZG93LkhvdENhdEF1dG9SZW1vdmVDaGVja0NhdCB8fCBzdG9yYWdlSXRlbSA9PT0gJ2F1dG8nKSB7XG5cdFx0XHRcdGRvUmVtb3ZlKCk7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0cHJvbXB0KCk7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9KTtcblx0Ly8gQWRkIE9LLUxpbmsgdG8gdGhlIGNhdHMgcGFuZWxcblx0Y29uc3QgJG9rTGluayA9ICQoJzxhPicpXG5cdFx0LmF0dHIoe1xuXHRcdFx0aHJlZjogJyMnLFxuXHRcdFx0dGl0bGU6ICdDYXRlZ29yaWVzIGFyZSBPSyEgSW1tZWRpYXRlbHkgcmVtb3ZlIHRoZSB0ZW1wbGF0ZS4nLFxuXHRcdH0pXG5cdFx0LmFwcGVuZCgnPHM+Jylcblx0XHQudGV4dCgne3tDaGVjayBjYXRlZ29yaWVzfX0nKTtcblx0JG9rTGluay5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRjb25zdCAkZWwgPSAkKHRoaXMpO1xuXHRcdCRlbC5vZmYoJ2NsaWNrJyk7XG5cdFx0Y29uc3QgZG9FZGl0ID0gKHJlc3VsdDogc3RyaW5nKSA9PiB7XG5cdFx0XHRpZiAoIXJlc3VsdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHQkZWwudGV4dCgnRG9pbmcuJyk7XG5cdFx0XHRjb25zdCB0ZXh0ID0gcmVzdWx0LnJlcGxhY2UoY2hlY2tDYXRlZ29yaWVzUmVnRXhwLCAnJyk7XG5cdFx0XHRpZiAodGV4dCA9PT0gcmVzdWx0KSB7XG5cdFx0XHRcdCRlbC50ZXh0KCdUZW1wbGF0ZSBub3QgZm91bmQhJyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHBhcmFtczogQXBpRWRpdFBhZ2VQYXJhbXMgPSB7XG5cdFx0XHRcdHRleHQsXG5cdFx0XHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0dGl0bGU6IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKSxcblx0XHRcdFx0c3VtbWFyeTogYCR7c2VsZk5hbWV9Q2F0ZWdvcmllcyBhcmUgY2hlY2tlZCBhbmQgT0suIFlvdSBjYW4gaGVscCBbW0NhdGVnb3J5Ok1lZGlhIG5lZWRpbmcgY2F0ZWdvcnkgcmV2aWV3fHJldmlld2luZ11dIWAsXG5cdFx0XHRcdG5vY3JlYXRlOiB0cnVlLFxuXHRcdFx0fTtcblx0XHRcdGNvbnN0IGVkaXREb25lID0gKGVkaXRTdGF0Pzoge2Vycm9yPzoge2NvZGU/OiBzdHJpbmc7IGluZm8/OiBzdHJpbmd9fSkgPT4ge1xuXHRcdFx0XHRpZiAoIWVkaXRTdGF0KSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChlZGl0U3RhdC5lcnJvcikge1xuXHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KFxuXHRcdFx0XHRcdFx0YFVuYWJsZSB0byByZW1vdmUgXCJDaGVjayBjYXRlZ29yaWVzXCIgd2l0aCB0aGUgQVBJXFxuJHtlZGl0U3RhdC5lcnJvci5jb2RlfVxcbiR7ZWRpdFN0YXQuZXJyb3IuaW5mb31gLFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0YWc6ICdob3RDYXRDaGVjaycsXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHQkZWwudGV4dCgnRWRpdC1FcnJvciEnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkZWwudGV4dCgnRWRpdCBEb25lLicpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdFx0XHQkYm9keS5maW5kKCcuY2hlY2tjYXRlZ29yaWVzJykuZmFkZU91dCgpO1xuXHRcdFx0fTtcblx0XHRcdCRlbC50ZXh0KCdEb2luZy4uJyk7XG5cdFx0XHR2b2lkIGFwaS5wb3N0V2l0aFRva2VuKCdjc3JmJywgcGFyYW1zKS50aGVuKGVkaXREb25lKTtcblx0XHR9O1xuXHRcdCRlbC50ZXh0KCdEb2luZycpO1xuXHRcdHZvaWQgJC5hamF4KHtcblx0XHRcdHVybDogbXcuY29uZmlnLmdldCgnd2dTY3JpcHQnKSxcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0YWN0aW9uOiAncmF3Jyxcblx0XHRcdFx0dGl0bGU6IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKS5yZXBsYWNlKC8gL2csICdfJyksXG5cdFx0XHR9LFxuXHRcdFx0ZGF0YVR5cGU6ICd0ZXh0Jyxcblx0XHRcdGVycm9yOiAoKSA9PiB7XG5cdFx0XHRcdCRlbC50ZXh0KCdFcnJvciEnKTtcblx0XHRcdH0sXG5cdFx0XHRzdWNjZXNzOiBkb0VkaXQsXG5cdFx0XHR0eXBlOiAnR0VUJyxcblx0XHRcdGNhY2hlOiBmYWxzZSxcblx0XHR9KTtcblx0fSk7XG5cdCQoZnVuY3Rpb24gbG9hZEhvdENhdENoZWNrKCkge1xuXHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdCRib2R5LmZpbmQoJyNjYXRsaW5rcycpLmZpbmQoJ3VsOmZpcnN0JykuYXBwZW5kKCQoJzxsaT4nKS5hcHBlbmQoJG9rTGluaykpO1xuXHR9KTtcbn0pKCk7XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCAnLi9tb2R1bGVzL2NoZWNrJztcbmltcG9ydCB7Z2VuZXJhdGVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9tb2R1bGVzL2dldE1lc3NhZ2UnO1xuaW1wb3J0IHtob3RDYXRNZXNzYWdlc30gZnJvbSAnLi9tb2R1bGVzL21lc3NhZ2VzJztcbmltcG9ydCB7bXdBcGl9IGZyb20gJy4vbW9kdWxlcy9hcGknO1xuaW1wb3J0IHBubyBmcm9tICcuL2ltYWdlcy9QX25vLnBuZyc7XG5pbXBvcnQgcHllcyBmcm9tICcuL2ltYWdlcy9QX3llcy5wbmcnO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBBamF4LWJhc2VkIHNpbXBsZSBDYXRlZ29yeSBtYW5hZ2VyLiBBbGxvd3MgYWRkaW5nL3JlbW92aW5nL2NoYW5naW5nIGNhdGVnb3JpZXMgb24gYSBwYWdlIHZpZXcuXG4gKiBTdXBwb3J0cyBtdWx0aXBsZSBjYXRlZ29yeSBjaGFuZ2VzLCBhcyB3ZWxsIGFzIHJlZGlyZWN0IGFuZCBkaXNhbWJpZ3VhdGlvbiByZXNvbHV0aW9uLiBBbHNvXG4gKiBwbHVncyBpbnRvIHRoZSB1cGxvYWQgZm9ybS4gU2VhcmNoIGVuZ2luZXMgdG8gdXNlIGZvciB0aGUgc3VnZ2VzdGlvbiBsaXN0IGFyZSBjb25maWd1cmFibGUsIGFuZFxuICogY2FuIGJlIHNlbGVjdGVkIGludGVyYWN0aXZlbHkuXG4gKlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9jb21tb25zLndpa2ltZWRpYS5vcmcvd2lraS9IZWxwOkdhZGdldC1Ib3RDYXR9XG4gKiBAYXV0aG9yIGF1dGhvcnMgPGh0dHBzOi8vY29tbW9ucy53aWtpbWVkaWEub3JnL3dpa2kvSGVscDpHYWRnZXQtSG90Q2F0L1ZlcnNpb25faGlzdG9yeT5cbiAqL1xuLy8gTG9hZCB0cmFuc2xhdGlvbnMgbG9jYWxseVxuaG90Q2F0TWVzc2FnZXMoKTtcblxuLy8gTWFpbiBib2R5XG4oZnVuY3Rpb24gaG90Q2F0KCkge1xuXHQvLyBEb24ndCB1c2UgbXcuY29uZmlnLmdldCgpIGFzIHRoYXQgdGFrZXMgYSBjb3B5IG9mIHRoZSBjb25maWcsIGFuZCBzbyBkb2Vzbid0XG5cdC8vIGFjY291bnQgZm9yIHZhbHVlcyBjaGFuZ2luZywgZS5nLiB3Z0N1clJldmlzaW9uSWQgYWZ0ZXIgYSBWRSBlZGl0XG5cdGNvbnN0IGNvbmYgPSBtdy5jb25maWcudmFsdWVzO1xuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdGlmICgod2luZG93LkhvdENhdCAmJiAhd2luZG93LkhvdENhdC5ub2RlTmFtZSkgfHwgY29uZi53Z0FjdGlvbiA9PT0gJ2VkaXQnKSB7XG5cdFx0cmV0dXJuOyAvLyBOb3Qgb24gZWRpdCBtb2RlXG5cdH1cblx0Ly8gSW5pdGlhbGl6ZSBNZWRpYVdpa2kgQVBJXG5cdGNvbnN0IGFwaSA9IG13QXBpKCdIb3RDYXQvMy4wJyk7XG5cdC8vIENvbmZpZ3VyYXRpb24gc3R1ZmYuXG5cdHdpbmRvdy5Ib3RDYXQgPSB7XG5cdFx0Ly8gVGhlIGxpdHRsZSBtb2RpZmljYXRpb24gbGlua3MgZGlzcGxheWVkIGFmdGVyIGNhdGVnb3J5IG5hbWVzLiBVKzIyMTIgaXMgYSBtaW51cyBzaWduOyBVKzIxOTMgYW5kIFUrMjE5MSBhcmVcblx0XHQvLyBkb3dud2FyZCBhbmQgdXB3YXJkIHBvaW50aW5nIGFycm93cy4gRG8gbm90IHVzZSDihpMgYW5kIOKGkSBpbiB0aGUgY29kZSFcblx0XHRsaW5rczoge1xuXHRcdFx0Y2hhbmdlOiAnKMKxKScsXG5cdFx0XHRyZW1vdmU6ICcoXFx1MjIxMiknLFxuXHRcdFx0YWRkOiAnKCspJyxcblx0XHRcdHJlc3RvcmU6ICcow5cpJyxcblx0XHRcdHVuZG86ICcow5cpJyxcblx0XHRcdGRvd246ICcoXFx1MjE5MyknLFxuXHRcdFx0dXA6ICcoXFx1MjE5MSknLFxuXHRcdH0sXG5cdFx0Y2hhbmdlVGFnOiAnSG90Q2F0Jyxcblx0XHQvLyBUaGUgSFRNTCBjb250ZW50IG9mIHRoZSBcImVudGVyIG11bHRpLW1vZGVcIiBsaW5rIGF0IHRoZSBmcm9udC5cblx0XHRhZGRtdWx0aTogJzxzcGFuPis8c3VwPis8L3N1cD48L3NwYW4+Jyxcblx0XHQvLyBSZXR1cm4gdHJ1ZSB0byBkaXNhYmxlIEhvdENhdC5cblx0XHRkaXNhYmxlOiAoKSA9PiB7XG5cdFx0XHRjb25zdCBucyA9IGNvbmYud2dOYW1lc3BhY2VOdW1iZXI7XG5cdFx0XHRjb25zdCBuc0lkcyA9IGNvbmYud2dOYW1lc3BhY2VJZHM7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRucyA8IDAgfHxcblx0XHRcdFx0Ly8gU3BlY2lhbCBwYWdlczsgU3BlY2lhbDpVcGxvYWQgaXMgaGFuZGxlZCBkaWZmZXJlbnRseVxuXHRcdFx0XHRucyA9PT0gMTAgfHxcblx0XHRcdFx0Ly8gVGVtcGxhdGVzXG5cdFx0XHRcdG5zID09PSA4MjggfHxcblx0XHRcdFx0Ly8gTW9kdWxlIChMdWEpXG5cdFx0XHRcdG5zID09PSA4IHx8XG5cdFx0XHRcdC8vIE1lZGlhV2lraVxuXHRcdFx0XHQobnMgPT09IDYgJiYgIWNvbmYud2dBcnRpY2xlSWQpIHx8XG5cdFx0XHRcdC8vIE5vbi1leGlzdGluZyBmaWxlIHBhZ2VzXG5cdFx0XHRcdChucyA9PT0gMiAmJiAvXFwuKGpzfGNzcykkLy50ZXN0KGNvbmYud2dUaXRsZSkpIHx8XG5cdFx0XHRcdC8vIFVzZXIgc2NyaXB0c1xuXHRcdFx0XHQobnNJZHMgJiYgKG5zID09PSBuc0lkcy5jcmVhdG9yIHx8IG5zID09PSBuc0lkcy50aW1lZHRleHQgfHwgbnMgPT09IG5zSWRzLmluc3RpdHV0aW9uKSlcblx0XHRcdCk7XG5cdFx0fSxcblx0XHQvLyBBIHJlZ2V4cCBtYXRjaGluZyBhIHRlbXBsYXRlcyB1c2VkIHRvIG1hcmsgdW5jYXRlZ29yaXplZCBwYWdlcywgaWYgeW91ciB3aWtpIGRvZXMgaGF2ZSB0aGF0LlxuXHRcdC8vIElmIG5vdCwgc2V0IGl0IHRvIG51bGwuXG5cdFx0dW5jYXRfcmVnZXhwOiAve3tcXHMqW1V1XW5jYXRlZ29yaXplZFxccypbXn1dKn19XFxzKig8IS0tLio/LS0+XFxzKik/L2csXG5cdFx0Ly8gVGhlIGltYWdlcyB1c2VkIGZvciB0aGUgbGl0dGxlIGluZGljYXRpb24gaWNvbi4gU2hvdWxkIG5vdCBuZWVkIGNoYW5naW5nLlxuXHRcdGV4aXN0c1llczogcHllcyxcblx0XHRleGlzdHNObzogcG5vLFxuXHRcdC8vIGEgbGlzdCBvZiBjYXRlZ29yaWVzIHdoaWNoIGNhbiBiZSByZW1vdmVkIGJ5IHJlbW92aW5nIGEgdGVtcGxhdGVcblx0XHQvLyBrZXk6IHRoZSBjYXRlZ29yeSB3aXRob3V0IG5hbWVzcGFjZVxuXHRcdC8vIHZhbHVlOiBBIHJlZ2V4cCBtYXRjaGluZyB0aGUgdGVtcGxhdGUgbmFtZSwgYWdhaW4gd2l0aG91dCBuYW1lc3BhY2Vcblx0XHQvLyBJZiB5b3UgZG9uJ3QgaGF2ZSB0aGlzIGF0IHlvdXIgd2lraSwgb3IgZG9uJ3Qgd2FudCB0aGlzLCBzZXQgaXQgdG8gYW4gZW1wdHkgb2JqZWN0IHt9LlxuXHRcdHRlbXBsYXRlX2NhdGVnb3JpZXM6IHt9LFxuXHRcdC8vIE92ZXJyaWRlIHRoZSBkZWNpc2lvbiBvZiB3aGV0aGVyIEhvdENhdCBzaG91bGQgaGVscCB1c2VycyBieSBhdXRvbWF0aWNhbGx5XG5cdFx0Ly8gY2FwaXRhbGlzaW5nIHRoZSB0aXRsZSBpbiB0aGUgdXNlciBpbnB1dCB0ZXh0IGlmIHRoZSB3aWtpIGhhcyBjYXNlLXNlbnNpdGl2ZSBwYWdlIG5hbWVzLlxuXHRcdC8vIEJhc2ljYWxseSwgdGhpcyB3aWxsIG1ha2UgYW4gQVBJIHF1ZXJ5IHRvIGNoZWNrIHRoZSBNZWRpYVdpa2kgY29uZmlndXJhdGlvbiBhbmQgSG90Q2F0IHRoZW4gc2V0c1xuXHRcdC8vIHRoaXMgdG8gdHJ1ZSBmb3IgbW9zdCB3aWtpcywgYW5kIHRvIGZhbHNlIG9uIFdpa3Rpb25hcnkuXG5cdFx0Ly9cblx0XHQvLyBZb3UgY2FuIHNldCB0aGlzIGRpcmVjdGx5IGlmIHRoZXJlIGlzIGEgcHJvYmxlbSB3aXRoIGl0LiBGb3IgZXhhbXBsZSwgR2VvcmdpYW4gV2lraXBlZGlhIChrYXdpa2kpLFxuXHRcdC8vIGlzIGtub3duIHRvIGhhdmUgZGlmZmVyZW50IGNhcGl0YWxpc2F0aW9uIGxvZ2ljIGJldHdlZW4gTWVkaWFXaWtpIFBIUCBhbmQgSmF2YVNjcmlwdC4gQXMgc3VjaCwgYXV0b21hdGljXG5cdFx0Ly8gY2FzZSBjaGFuZ2VzIGluIEphdmFTY3JpcHQgYnkgSG90Q2F0IHdvdWxkIGJlIHdyb25nLlxuXHRcdGNhcGl0YWxpemVQYWdlTmFtZXM6IG51bGwsXG5cdFx0Ly8gSWYgdXBsb2FkX2Rpc2FibGVkIGlzIHRydWUsIEhvdENhdCB3aWxsIG5vdCBiZSB1c2VkIG9uIHRoZSBVcGxvYWQgZm9ybS5cblx0XHR1cGxvYWRfZGlzYWJsZWQ6IGZhbHNlLFxuXHRcdC8vIFNpbmdsZSByZWd1bGFyIGV4cHJlc3Npb24gbWF0Y2hpbmcgYmxhY2tsaXN0ZWQgY2F0ZWdvcmllcyB0aGF0IGNhbm5vdCBiZSBjaGFuZ2VkIG9yXG5cdFx0Ly8gYWRkZWQgdXNpbmcgSG90Q2F0LiBGb3IgaW5zdGFuY2UgL1xcYnN0dWJzPyQvIChhbnkgY2F0ZWdvcnkgZW5kaW5nIHdpdGggdGhlIHdvcmQgXCJzdHViXCJcblx0XHQvLyBvciBcInN0dWJzXCIpLCBvciAvKFxcYnN0dWJzPyQpfFxcYm1haW50ZW5hbmNlXFxiLyAoc3R1YiBjYXRlZ29yaWVzIGFuZCBhbnkgY2F0ZWdvcnkgd2l0aCB0aGVcblx0XHQvLyB3b3JkIFwibWFpbnRlbmFuY2VcIiBpbiBpdHMgdGl0bGUuXG5cdFx0YmxhY2tsaXN0OiBudWxsLFxuXHRcdC8vIFN0dWZmIGNoYW5nZWFibGUgYnkgdXNlcnM6XG5cdFx0Ly8gQmFja2dyb3VuZCBmb3IgY2hhbmdlZCBjYXRlZ29yaWVzIGluIG11bHRpLWVkaXQgbW9kZS4gRGVmYXVsdCBpcyBhIHZlcnkgbGlnaHQgc2FsbW9uIHBpbmsuXG5cdFx0YmdfY2hhbmdlZDogJyNGQ0EnLFxuXHRcdC8vIElmIHRydWUsIEhvdENhdCB3aWxsIG5ldmVyIGF1dG9tYXRpY2FsbHkgc3VibWl0IGNoYW5nZXMuIEhvdENhdCB3aWxsIG9ubHkgb3BlbiBhbiBlZGl0IHBhZ2Ugd2l0aFxuXHRcdC8vIHRoZSBjaGFuZ2VzOyB1c2VycyBtdXN0IGFsd2F5cyBzYXZlIGV4cGxpY2l0bHkuXG5cdFx0bm9fYXV0b2NvbW1pdDogZmFsc2UsXG5cdFx0Ly8gSWYgdHJ1ZSwgdGhlIFwiY2F0ZWdvcnkgZGVsZXRpb25cIiBsaW5rIFwiKC0pXCIgd2lsbCBuZXZlciBzYXZlIGF1dG9tYXRpY2FsbHkgYnV0IGFsd2F5cyBzaG93IGFuXG5cdFx0Ly8gZWRpdCBwYWdlIHdoZXJlIHRoZSB1c2VyIGhhcyB0byBzYXZlIHRoZSBlZGl0IG1hbnVhbGx5LiBJcyBmYWxzZSBieSBkZWZhdWx0IGJlY2F1c2UgdGhhdCdzIHRoZVxuXHRcdC8vIHRyYWRpdGlvbmFsIGJlaGF2aW9yLiBUaGlzIHNldHRpbmcgb3ZlcnJpZGVzIG5vX2F1dG9jb21taXQgZm9yIFwiKC0pXCIgbGlua3MuXG5cdFx0ZGVsX25lZWRzX2RpZmY6IGZhbHNlLFxuXHRcdC8vIFRpbWUsIGluIG1pbGxpc2Vjb25kcywgdGhhdCBIb3RDYXQgd2FpdHMgYWZ0ZXIgYSBrZXlzdHJva2UgYmVmb3JlIG1ha2luZyBhIHJlcXVlc3QgdG8gdGhlXG5cdFx0Ly8gc2VydmVyIHRvIGdldCBzdWdnZXN0aW9ucy5cblx0XHRzdWdnZXN0X2RlbGF5OiAxMDAwLFxuXHRcdC8vIERlZmF1bHQgd2lkdGgsIGluIGNoYXJhY3RlcnMsIG9mIHRoZSB0ZXh0IGlucHV0IGZpZWxkLlxuXHRcdGVkaXRib3hfd2lkdGg6IDQwLFxuXHRcdC8vIE9uZSBvZiB0aGUgZW5naW5lX25hbWVzIGFib3ZlLCB0byBiZSB1c2VkIGFzIHRoZSBkZWZhdWx0IHN1Z2dlc3Rpb24gZW5naW5lLlxuXHRcdHN1Z2dlc3Rpb25zOiAnY29tYmluZWQnLFxuXHRcdC8vIElmIHRydWUsIGFsd2F5cyB1c2UgdGhlIGRlZmF1bHQgZW5naW5lLCBhbmQgbmV2ZXIgZGlzcGxheSBhIHNlbGVjdG9yLlxuXHRcdGZpeGVkX3NlYXJjaDogZmFsc2UsXG5cdFx0Ly8gSWYgZmFsc2UsIGRvIG5vdCBkaXNwbGF5IHRoZSBcInVwXCIgYW5kIFwiZG93blwiIGxpbmtzXG5cdFx0dXNlX3VwX2Rvd246IHRydWUsXG5cdFx0Ly8gRGVmYXVsdCBsaXN0IHNpemVcblx0XHRsaXN0U2l6ZTogMTAsXG5cdFx0Ly8gSWYgdHJ1ZSwgc2luZ2xlIGNhdGVnb3J5IGNoYW5nZXMgYXJlIG1hcmtlZCBhcyBtaW5vciBlZGl0cy4gSWYgZmFsc2UsIHRoZXkncmUgbm90LlxuXHRcdHNpbmdsZV9taW5vcjogdHJ1ZSxcblx0XHQvLyBJZiB0cnVlLCBuZXZlciBhZGQgYSBwYWdlIHRvIHRoZSB1c2VyJ3Mgd2F0Y2hsaXN0LiBJZiBmYWxzZSwgcGFnZXMgZ2V0IGFkZGVkIHRvIHRoZSB3YXRjaGxpc3QgaWZcblx0XHQvLyB0aGUgdXNlciBoYXMgdGhlIFwiQWRkIHBhZ2VzIEkgZWRpdCB0byBteSB3YXRjaGxpc3RcIiBvciB0aGUgXCJBZGQgcGFnZXMgSSBjcmVhdGUgdG8gbXkgd2F0Y2hsaXN0XCJcblx0XHQvLyBvcHRpb25zIGluIGhpcyBvciBoZXIgcHJlZmVyZW5jZXMgc2V0LlxuXHRcdGRvbnRfYWRkX3RvX3dhdGNobGlzdDogZmFsc2UsXG5cdFx0c2hvcnRjdXRzOiBudWxsLFxuXHRcdGFkZFNob3J0Y3V0czogKG1hcCkgPT4ge1xuXHRcdFx0aWYgKCFtYXApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0d2luZG93LkhvdENhdC5zaG9ydGN1dHMgfHw9IHt9O1xuXHRcdFx0Zm9yIChsZXQgayBpbiBtYXApIHtcblx0XHRcdFx0aWYgKCFPYmplY3QuaGFzT3duKG1hcCwgaykgfHwgdHlwZW9mIGsgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IHYgPSBtYXBba107XG5cdFx0XHRcdGlmICh0eXBlb2YgdiAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRrID0gay50cmltKCk7XG5cdFx0XHRcdHYgPSB2LnRyaW0oKTtcblx0XHRcdFx0aWYgKGsubGVuZ3RoID09PSAwIHx8IHYubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0d2luZG93LkhvdENhdC5zaG9ydGN1dHNba10gPSB2O1xuXHRcdFx0fVxuXHRcdH0sXG5cdH07XG5cdGNvbnN0IEhDID0gd2luZG93LkhvdENhdDtcblx0Ly8gTW9yZSBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS4gV2UgaGF2ZSBhIGZldyBwbGFjZXMgd2hlcmUgd2UgdGVzdCBmb3IgdGhlIGJyb3dzZXI6IG9uY2UgZm9yXG5cdC8vIFNhZmFyaSA8IDMuMCwgYW5kIHR3aWNlIGZvciBXZWJLaXQgKENocm9tZSBvciBTYWZhcmksIGFueSB2ZXJzaW9ucylcblx0Y29uc3QgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG5cdGNvbnN0IGlzX3dlYmtpdCA9IC9hcHBsZXdlYmtpdFxcL1xcZCsvLnRlc3QodWEpICYmICF1YS5pbmNsdWRlcygnc3Bvb2ZlcicpO1xuXHRsZXQgY2F0X3ByZWZpeCA9IG51bGw7XG5cdGxldCBub1N1Z2dlc3Rpb25zID0gZmFsc2U7XG5cdC8vIE5vIGZ1cnRoZXIgY2hhbmdlcyBzaG91bGQgYmUgbmVjZXNzYXJ5IGhlcmUuXG5cdC8vIFRoZSBmb2xsb3dpbmcgcmVndWxhciBleHByZXNzaW9uIHN0cmluZ3MgYXJlIHVzZWQgd2hlbiBzZWFyY2hpbmcgZm9yIGNhdGVnb3JpZXMgaW4gd2lraXRleHQuXG5cdGNvbnN0IHdpa2lUZXh0QmxhbmsgPSBTdHJpbmcucmF3YFtcXHQgX1xceEEwXFx1MTY4MFxcdTE4MEVcXHUyMDAwLVxcdTIwMEFcXHUyMDI4XFx1MjAyOVxcdTIwMkZcXHUyMDVGXFx1MzAwMF0rYDtcblx0Y29uc3Qgd2lraVRleHRCbGFua1JFID0gbmV3IFJlZ0V4cCh3aWtpVGV4dEJsYW5rLCAnZycpO1xuXHQvLyBSZWdleHAgZm9yIGhhbmRsaW5nIGJsYW5rcyBpbnNpZGUgYSBjYXRlZ29yeSB0aXRsZSBvciBuYW1lc3BhY2UgbmFtZS5cblx0Ly8gU2VlIHtAbGluayBodHRwOi8vc3ZuLndpa2ltZWRpYS5vcmcvdmlld3ZjL21lZGlhd2lraS90cnVuay9waGFzZTMvaW5jbHVkZXMvVGl0bGUucGhwP3JldmlzaW9uPTEwNDA1MSZ2aWV3PW1hcmt1cCNsMjcyMn1cblx0Ly8gU2VlIGFsc28ge0BsaW5rIGh0dHA6Ly93d3cuZmlsZWZvcm1hdC5pbmZvL2luZm8vdW5pY29kZS9jYXRlZ29yeS9acy9saXN0Lmh0bX1cblx0Ly8gICBNZWRpYVdpa2kgY29sbGFwc2VzIHNldmVyYWwgY29udGlndW91cyBibGFua3MgaW5zaWRlIGEgcGFnZSB0aXRsZSB0byBvbmUgc2luZ2xlIGJsYW5rLiBJdCBhbHNvIHJlcGxhY2UgYVxuXHQvLyBudW1iZXIgb2Ygc3BlY2lhbCB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMgYnkgc2ltcGxlIGJsYW5rcy4gQW5kIGZpbmFsbHksIGJsYW5rcyBhcmUgdHJlYXRlZCBhcyB1bmRlcnNjb3Jlcy5cblx0Ly8gVGhlcmVmb3JlLCB3aGVuIGxvb2tpbmcgZm9yIHBhZ2UgdGl0bGVzIGluIHdpa2l0ZXh0LCB3ZSBtdXN0IGhhbmRsZSBhbGwgdGhlc2UgY2FzZXMuXG5cdC8vICAgTm90ZTogd2UgX2RvXyBpbmNsdWRlIHRoZSBob3Jpem9udGFsIHRhYiBpbiB0aGUgYWJvdmUgbGlzdCwgZXZlbiB0aG91Z2ggdGhlIE1lZGlhV2lraSBzb2Z0d2FyZSBmb3Igc29tZSByZWFzb25cblx0Ly8gYXBwZWFycyB0byBub3QgaGFuZGxlIGl0LiBUaGUgemVyby13aWR0aCBzcGFjZSBcXHUyMDBCIGlzIF9ub3RfIGhhbmRsZWQgYXMgYSBzcGFjZSBpbnNpZGUgdGl0bGVzIGJ5IE1XLlxuXHRjb25zdCB3aWtpVGV4dEJsYW5rT3JCaWRpID0gU3RyaW5nLnJhd2BbXFx0IF9cXHhBMFxcdTE2ODBcXHUxODBFXFx1MjAwMC1cXHUyMDBCXFx1MjAwRVxcdTIwMEZcXHUyMDI4LVxcdTIwMkZcXHUyMDVGXFx1MzAwMF0qYDtcblx0Ly8gV2hpdGVzcGFjZSByZWdleHAgZm9yIGhhbmRsaW5nIHdoaXRlc3BhY2UgYmV0d2VlbiBsaW5rIGNvbXBvbmVudHMuIEluY2x1ZGluZyB0aGUgaG9yaXpvbnRhbCB0YWIsIGJ1dCBub3QgXFxuXFxyXFxmXFx2OlxuXHQvLyBhIGxpbmsgbXVzdCBiZSBvbiBvbmUgc2luZ2xlIGxpbmUuXG5cdC8vICAgTWVkaWFXaWtpIGFsc28gcmVtb3ZlcyBVbmljb2RlIGJpZGkgb3ZlcnJpZGUgY2hhcmFjdGVycyBpbiBwYWdlIHRpdGxlcyAoYW5kIG5hbWVzcGFjZSBuYW1lcykgY29tcGxldGVseS5cblx0Ly8gVGhpcyBpcyAqbm90KiBoYW5kbGVkLCBhcyBpdCB3b3VsZCByZXF1aXJlIHVzIHRvIGFsbG93IGFueSBvZiBbXFx1MjAwRVxcdTIwMEZcXHUyMDJBLVxcdTIwMkVdIGJldHdlZW4gYW55IHR3b1xuXHQvLyBjaGFyYWN0ZXJzIGluc2lkZSBhIGNhdGVnb3J5IGxpbmsuIEl0IF9jb3VsZF8gYmUgZG9uZSB0aG91Z2guLi4gV2UgX2RvXyBoYW5kbGUgc3RyYW5nZSBzcGFjZXMsIGluY2x1ZGluZyB0aGVcblx0Ly8gemVyby13aWR0aCBzcGFjZSBcXHUyMDBCLCBhbmQgYmlkaSBvdmVycmlkZXMgYmV0d2VlbiB0aGUgY29tcG9uZW50cyBvZiBhIGNhdGVnb3J5IGxpbmsgKGFkamFjZW50IHRvIHRoZSBjb2xvbixcblx0Ly8gb3IgYWRqYWNlbnQgdG8gYW5kIGluc2lkZSBvZiBcIltbXCIgYW5kIFwiXV1cIikuXG5cdC8vIEZpcnN0IGF1dG8tbG9jYWxpemUgdGhlIHJlZ2V4cHMgZm9yIHRoZSBjYXRlZ29yeSBhbmQgdGhlIHRlbXBsYXRlIG5hbWVzcGFjZXMuXG5cdGNvbnN0IGZvcm1hdHRlZE5hbWVzcGFjZXMgPSBjb25mLndnRm9ybWF0dGVkTmFtZXNwYWNlcztcblx0Y29uc3QgbmFtZXNwYWNlSWRzID0gY29uZi53Z05hbWVzcGFjZUlkcztcblx0Y29uc3QgYXV0b0xvY2FsaXplID0gKG5hbWVzcGFjZU51bWJlciwgZmFsbGJhY2spID0+IHtcblx0XHRjb25zdCBjcmVhdGVSZWdleHBTdHIgPSAobmFtZSkgPT4ge1xuXHRcdFx0aWYgKCFuYW1lIHx8IG5hbWUubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGxldCByZWdleF9uYW1lID0gJyc7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5hbWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29uc3QgaW5pdGlhbCA9IG5hbWUuY2hhckF0KGkpO1xuXHRcdFx0XHRjb25zdCBsbCA9IGluaXRpYWwudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0Y29uc3QgdWwgPSBpbml0aWFsLnRvVXBwZXJDYXNlKCk7XG5cdFx0XHRcdHJlZ2V4X25hbWUgKz0gbGwgPT09IHVsID8gaW5pdGlhbCA6IGBbJHtsbH0ke3VsfV1gO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlZ2V4X25hbWUucmVwbGFjZSgvKFskKCkqKy4/XFxcXF5dKS9nLCBTdHJpbmcucmF3YFxcJDFgKS5yZXBsYWNlKHdpa2lUZXh0QmxhbmtSRSwgd2lraVRleHRCbGFuayk7XG5cdFx0fTtcblx0XHRmYWxsYmFjayA9IGZhbGxiYWNrLnRvTG93ZXJDYXNlKCk7XG5cdFx0Y29uc3QgY2Fub25pY2FsID0gZm9ybWF0dGVkTmFtZXNwYWNlc1tTdHJpbmcobmFtZXNwYWNlTnVtYmVyKV0udG9Mb3dlckNhc2UoKTtcblx0XHRsZXQgcmVnZXhwID0gY3JlYXRlUmVnZXhwU3RyKGNhbm9uaWNhbCk7XG5cdFx0aWYgKGZhbGxiYWNrICYmIGNhbm9uaWNhbCAhPT0gZmFsbGJhY2spIHtcblx0XHRcdHJlZ2V4cCArPSBgfCR7Y3JlYXRlUmVnZXhwU3RyKGZhbGxiYWNrKX1gO1xuXHRcdH1cblx0XHRpZiAobmFtZXNwYWNlSWRzKSB7XG5cdFx0XHRmb3IgKGNvbnN0IGNhdF9uYW1lIGluIG5hbWVzcGFjZUlkcykge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0dHlwZW9mIGNhdF9uYW1lID09PSAnc3RyaW5nJyAmJlxuXHRcdFx0XHRcdGNhdF9uYW1lLnRvTG93ZXJDYXNlKCkgIT09IGNhbm9uaWNhbCAmJlxuXHRcdFx0XHRcdGNhdF9uYW1lLnRvTG93ZXJDYXNlKCkgIT09IGZhbGxiYWNrICYmXG5cdFx0XHRcdFx0bmFtZXNwYWNlSWRzW2NhdF9uYW1lXSA9PT0gbmFtZXNwYWNlTnVtYmVyXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJlZ2V4cCArPSBgfCR7Y3JlYXRlUmVnZXhwU3RyKGNhdF9uYW1lKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZWdleHA7XG5cdH07XG5cdEhDLmNhdGVnb3J5X2Nhbm9uaWNhbCA9IGZvcm1hdHRlZE5hbWVzcGFjZXNbJzE0J107XG5cdEhDLmNhdGVnb3J5X3JlZ2V4cCA9IGF1dG9Mb2NhbGl6ZSgxNCwgJ2NhdGVnb3J5Jyk7XG5cdGlmIChmb3JtYXR0ZWROYW1lc3BhY2VzWycxMCddKSB7XG5cdFx0SEMudGVtcGxhdGVfcmVnZXhwID0gYXV0b0xvY2FsaXplKDEwLCAndGVtcGxhdGUnKTtcblx0fVxuXHQvLyBVdGlsaXR5IGZ1bmN0aW9ucy4gWWVzLCB0aGlzIGR1cGxpY2F0ZXMgc29tZSBmdW5jdGlvbmFsaXR5IHRoYXQgYWxzbyBleGlzdHMgaW4gb3RoZXIgcGxhY2VzLCBidXRcblx0Ly8gdG8ga2VlcCB0aGlzIHdob2xlIHN0dWZmIGluIGEgc2luZ2xlIGZpbGUgbm90IGRlcGVuZGluZyBvbiBhbnkgb3RoZXIgb24td2lraSBKYXZhU2NyaXB0cywgd2UgcmUtZG9cblx0Ly8gdGhlc2UgZmV3IG9wZXJhdGlvbnMgaGVyZS5cblx0Y29uc3QgbWFrZSA9IChhcmcsIGxpdGVyYWwpID0+IHtcblx0XHRpZiAoIWFyZykge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHJldHVybiBsaXRlcmFsID8gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYXJnKSA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYXJnKTtcblx0fTtcblx0Y29uc3QgcGFyYW0gPSAobmFtZSwgdXJpKSA9PiB7XG5cdFx0dXJpIHx8PSBkb2N1bWVudC5sb2NhdGlvbi5ocmVmO1xuXHRcdGNvbnN0IHJlID0gbmV3IFJlZ0V4cChgWyY/XSR7bmFtZX09KFteJiNdKilgKTtcblx0XHRjb25zdCBtID0gcmUuZXhlYyh1cmkpO1xuXHRcdGlmIChtICYmIG0ubGVuZ3RoID4gMSkge1xuXHRcdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChtWzFdKTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH07XG5cdGNvbnN0IHRpdGxlID0gKGhyZWYpID0+IHtcblx0XHRpZiAoIWhyZWYpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRjb25zdCBzY3JpcHQgPSBgJHtjb25mLndnU2NyaXB0fT9gO1xuXHRcdGlmIChcblx0XHRcdGhyZWYuaW5kZXhPZihzY3JpcHQpID09PSAwIHx8XG5cdFx0XHRocmVmLmluZGV4T2YoY29uZi53Z1NlcnZlciArIHNjcmlwdCkgPT09IDAgfHxcblx0XHRcdChjb25mLndnU2VydmVyLnNsaWNlKDAsIDIpID09PSAnLy8nICYmXG5cdFx0XHRcdGhyZWYuaW5kZXhPZihkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCArIGNvbmYud2dTZXJ2ZXIgKyBzY3JpcHQpID09PSAwKVxuXHRcdCkge1xuXHRcdFx0Ly8gaHJlZj1cIi9pbmRleC5waHA/dGl0bGU9Li4uXCJcblx0XHRcdHJldHVybiBwYXJhbSgndGl0bGUnLCBocmVmKTtcblx0XHR9XG5cdFx0Ly8gaHJlZj1cIi93aWtpLy4uLlwiXG5cdFx0bGV0IHByZWZpeCA9IGNvbmYud2dBcnRpY2xlUGF0aC5yZXBsYWNlKCckMScsICcnKTtcblx0XHRpZiAoaHJlZi5pbmRleE9mKHByZWZpeCkpIHtcblx0XHRcdHByZWZpeCA9IGNvbmYud2dTZXJ2ZXIgKyBwcmVmaXg7XG5cdFx0fSAvLyBGdWxseSBleHBhbmRlZCBVUkw/XG5cdFx0aWYgKGhyZWYuaW5kZXhPZihwcmVmaXgpICYmIHByZWZpeC5zbGljZSgwLCAyKSA9PT0gJy8vJykge1xuXHRcdFx0cHJlZml4ID0gZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2wgKyBwcmVmaXg7XG5cdFx0fSAvLyBQcm90b2NvbC1yZWxhdGl2ZSB3Z1NlcnZlcj9cblx0XHRpZiAoaHJlZi5pbmRleE9mKHByZWZpeCkgPT09IDApIHtcblx0XHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoaHJlZi5zbGljZShwcmVmaXgubGVuZ3RoKSk7XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9O1xuXHRjb25zdCBoYXNDbGFzcyA9ICh7Y2xhc3NOYW1lfSwgbmFtZSkgPT4ge1xuXHRcdHJldHVybiBgICR7Y2xhc3NOYW1lfSBgLmluY2x1ZGVzKGAgJHtuYW1lfSBgKTtcblx0fTtcblx0Y29uc3QgY2FwaXRhbGl6ZSA9IChzdHIpID0+IHtcblx0XHRpZiAoIXN0ciB8fCBzdHIubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gc3RyO1xuXHRcdH1cblx0XHRyZXR1cm4gc3RyLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG5cdH07XG5cdGNvbnN0IHdpa2lQYWdlUGF0aCA9IChwYWdlTmFtZSkgPT4ge1xuXHRcdHJldHVybiBjb25mLndnQXJ0aWNsZVBhdGgucmVwbGFjZSgnJDEnLCBlbmNvZGVVUklDb21wb25lbnQocGFnZU5hbWUpLnJlcGxhY2UoLyUzQS9nLCAnOicpLnJlcGxhY2UoLyUyRi9nLCAnLycpKTtcblx0fTtcblx0Y29uc3QgZXNjYXBlUkUgPSAoc3RyKSA9PiB7XG5cdFx0cmV0dXJuIHN0ci5yZXBsYWNlKC8oWyQoKSorLj9bXFxcXFxcXV5dKS9nLCBTdHJpbmcucmF3YFxcJDFgKTtcblx0fTtcblx0Y29uc3Qgc3Vic3RpdHV0ZUZhY3RvcnkgPSAob3B0aW9ucykgPT4ge1xuXHRcdG9wdGlvbnMgfHw9IHt9O1xuXHRcdGNvbnN0IGxlYWQgPSBvcHRpb25zLmluZGljYXRvciB8fCAnJCc7XG5cdFx0Y29uc3QgaW5kaWNhdG9yID0gZXNjYXBlUkUobGVhZCk7XG5cdFx0Y29uc3QgbGJyYWNlID0gZXNjYXBlUkUob3B0aW9ucy5sYnJhY2UgfHwgJ3snKTtcblx0XHRjb25zdCByYnJhY2UgPSBlc2NhcGVSRShvcHRpb25zLnJicmFjZSB8fCAnfScpO1xuXHRcdGNvbnN0IHJlID0gbmV3IFJlZ0V4cChcblx0XHRcdC8vICQkXG5cdFx0XHRgKD86JHtpbmRpY2F0b3J9KCR7aW5kaWNhdG9yfSkpfGAgK1xuXHRcdFx0XHQvLyAkMCwgJDFcblx0XHRcdFx0YCg/OiR7aW5kaWNhdG9yfShcXFxcZCspKXxgICtcblx0XHRcdFx0Ly8gJHtrZXl9XG5cdFx0XHRcdGAoPzoke2luZGljYXRvcn0oPzoke2xicmFjZX0oW14ke2xicmFjZX0ke3JicmFjZX1dKykke3JicmFjZX0pKXxgICtcblx0XHRcdFx0Ly8gJGtleSAob25seSBpZiBmaXJzdCBjaGFyIGFmdGVyICQgaXMgbm90ICQsIGRpZ2l0LCBvciB7IClcblx0XHRcdFx0YCg/OiR7aW5kaWNhdG9yfSg/ISg/Olske2luZGljYXRvcn0ke2xicmFjZX1dfFxcXFxkKSkoXFxcXFMrPylcXFxcYilgLFxuXHRcdFx0J2cnXG5cdFx0KTtcblx0XHQvLyBSZXBsYWNlICQxLCAkMiwgb3IgJHtrZXkxfSwgJHtrZXkyfSwgb3IgJGtleTEsICRrZXkyIGJ5IHZhbHVlcyBmcm9tIG1hcC4gJCQgaXMgcmVwbGFjZWQgYnkgYSBzaW5nbGUgJC5cblx0XHRyZXR1cm4gKHN0ciwgbWFwKSA9PiB7XG5cdFx0XHRpZiAoIW1hcCkge1xuXHRcdFx0XHRyZXR1cm4gc3RyO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHN0ci5yZXBsYWNlKHJlLCAobWF0Y2gsIHByZWZpeCwgaWR4LCBrZXksIGFscGhhKSA9PiB7XG5cdFx0XHRcdGlmIChwcmVmaXggPT09IGxlYWQpIHtcblx0XHRcdFx0XHRyZXR1cm4gbGVhZDtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBrID0gYWxwaGEgfHwga2V5IHx8IGlkeDtcblx0XHRcdFx0Y29uc3QgcmVwbGFjZW1lbnQgPSB0eXBlb2YgbWFwW2tdID09PSAnZnVuY3Rpb24nID8gbWFwW2tdKG1hdGNoLCBrKSA6IG1hcFtrXTtcblx0XHRcdFx0cmV0dXJuIHR5cGVvZiByZXBsYWNlbWVudCA9PT0gJ3N0cmluZycgPyByZXBsYWNlbWVudCA6IHJlcGxhY2VtZW50IHx8IG1hdGNoO1xuXHRcdFx0fSk7XG5cdFx0fTtcblx0fTtcblx0Y29uc3QgcmVwbGFjZVNob3J0Y3V0cyA9ICgoKSA9PiB7XG5cdFx0Y29uc3QgcmVwbGFjZUhhc2ggPSBzdWJzdGl0dXRlRmFjdG9yeSh7XG5cdFx0XHRpbmRpY2F0b3I6ICcjJyxcblx0XHRcdGxicmFjZTogJ1snLFxuXHRcdFx0cmJyYWNlOiAnXScsXG5cdFx0fSk7XG5cdFx0cmV0dXJuIChzdHIsIG1hcCkgPT4ge1xuXHRcdFx0Y29uc3QgcyA9IHJlcGxhY2VIYXNoKHN0ciwgbWFwKTtcblx0XHRcdHJldHVybiBIQy5jYXBpdGFsaXplUGFnZU5hbWVzID8gY2FwaXRhbGl6ZShzKSA6IHM7XG5cdFx0fTtcblx0fSkoKTtcblx0Ly8gVGV4dCBtb2RpZmljYXRpb25cblx0Y29uc3QgZmluZENhdHNSRSA9IG5ldyBSZWdFeHAoXG5cdFx0YFxcXFxbXFxcXFske3dpa2lUZXh0QmxhbmtPckJpZGl9KD86JHtIQy5jYXRlZ29yeV9yZWdleHB9KSR7d2lraVRleHRCbGFua09yQmlkaX06W15cXFxcXV0rXFxcXF1cXFxcXWAsXG5cdFx0J2cnXG5cdCk7XG5cdGNvbnN0IHJlcGxhY2VCeUJsYW5rcyA9IChtYXRjaCkgPT4ge1xuXHRcdHJldHVybiBtYXRjaC5yZXBsYWNlKC8oXFxzfFxcUykvZywgJyAnKTtcblx0fTsgLy8gLy4vIGRvZXNuJ3QgbWF0Y2ggbGluZWJyZWFrcy4gLyhcXHN8XFxTKS8gZG9lcy5cblx0Y29uc3QgZmluZF9jYXRlZ29yeSA9ICh3aWtpdGV4dCwgY2F0ZWdvcnksIG9uY2UpID0+IHtcblx0XHRsZXQgY2F0X3JlZ2V4ID0gbnVsbDtcblx0XHRpZiAoSEMudGVtcGxhdGVfY2F0ZWdvcmllc1tjYXRlZ29yeV0pIHtcblx0XHRcdGNhdF9yZWdleCA9IG5ldyBSZWdFeHAoXG5cdFx0XHRcdGBcXFxce1xcXFx7JHt3aWtpVGV4dEJsYW5rT3JCaWRpfSgke0hDLnRlbXBsYXRlX3JlZ2V4cH0oPz0ke3dpa2lUZXh0QmxhbmtPckJpZGl9OikpPyR7d2lraVRleHRCbGFua09yQmlkaX0oPzoke0hDLnRlbXBsYXRlX2NhdGVnb3JpZXNbY2F0ZWdvcnldfSkke3dpa2lUZXh0QmxhbmtPckJpZGl9KFxcXFx8Lio/KT9cXFxcfVxcXFx9YCxcblx0XHRcdFx0J2cnXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBjYXRfbmFtZSA9IGVzY2FwZVJFKGNhdGVnb3J5KTtcblx0XHRcdGNvbnN0IGluaXRpYWwgPSBjYXRfbmFtZS5zbGljZSgwLCAxKTtcblx0XHRcdGNhdF9yZWdleCA9IG5ldyBSZWdFeHAoXG5cdFx0XHRcdGBcXFxcW1xcXFxbJHt3aWtpVGV4dEJsYW5rT3JCaWRpfSgke0hDLmNhdGVnb3J5X3JlZ2V4cH0pJHt3aWtpVGV4dEJsYW5rT3JCaWRpfToke3dpa2lUZXh0QmxhbmtPckJpZGl9JHtcblx0XHRcdFx0XHRpbml0aWFsID09PSAnXFxcXCcgfHwgIUhDLmNhcGl0YWxpemVQYWdlTmFtZXNcblx0XHRcdFx0XHRcdD8gaW5pdGlhbFxuXHRcdFx0XHRcdFx0OiBgWyR7aW5pdGlhbC50b1VwcGVyQ2FzZSgpfSR7aW5pdGlhbC50b0xvd2VyQ2FzZSgpfV1gXG5cdFx0XHRcdH0ke2NhdF9uYW1lLnNsaWNlKDEpLnJlcGxhY2Uod2lraVRleHRCbGFua1JFLCB3aWtpVGV4dEJsYW5rKX0ke3dpa2lUZXh0QmxhbmtPckJpZGl9KFxcXFx8Lio/KT9cXFxcXVxcXFxdYCxcblx0XHRcdFx0J2cnXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRpZiAob25jZSkge1xuXHRcdFx0cmV0dXJuIGNhdF9yZWdleC5leGVjKHdpa2l0ZXh0KTtcblx0XHR9XG5cdFx0Y29uc3Qgbm93aWtpUmVnZXggPSBuZXcgUmVnRXhwKCc8bm8nLmNvbmNhdCgnd2lraT4nLCBTdHJpbmcucmF3YChcXHN8XFxTKSo/PC9ub2AsICd3aWtpJywgJz4nKSwgJ2cnKTtcblx0XHRjb25zdCBjb3BpZWR0ZXh0ID0gd2lraXRleHQucmVwbGFjZSgvPCEtLShcXHN8XFxTKSo/LS0+L2csIHJlcGxhY2VCeUJsYW5rcykucmVwbGFjZShub3dpa2lSZWdleCwgcmVwbGFjZUJ5QmxhbmtzKTtcblx0XHRjb25zdCByZXN1bHQgPSBbXTtcblx0XHRsZXQgY3Vycl9tYXRjaCA9IG51bGw7XG5cdFx0d2hpbGUgKChjdXJyX21hdGNoID0gY2F0X3JlZ2V4LmV4ZWMoY29waWVkdGV4dCkpICE9PSBudWxsKSB7XG5cdFx0XHRyZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSB7XG5cdFx0XHRcdG1hdGNoOiBjdXJyX21hdGNoLFxuXHRcdFx0fTtcblx0XHR9XG5cdFx0cmVzdWx0LnJlID0gY2F0X3JlZ2V4O1xuXHRcdHJldHVybiByZXN1bHQ7IC8vIEFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIG1hdGNoZXMsIHdpdGggcG9zaXRpb25zLCBpbiByZXN1bHRbIGkgXS5tYXRjaFxuXHR9O1xuXHRsZXQgaW50ZXJsYW5ndWFnZVJFID0gbnVsbDtcblx0Y29uc3QgY2hhbmdlX2NhdGVnb3J5ID0gKHdpa2l0ZXh0LCB0b1JlbW92ZSwgdG9BZGQsIGtleSwgaXNfaGlkZGVuKSA9PiB7XG5cdFx0Y29uc3QgZmluZF9pbnNlcnRpb25wb2ludCA9IChfd2lraXRleHQpID0+IHtcblx0XHRcdGNvbnN0IG5vd2lraVJlZ2V4ID0gbmV3IFJlZ0V4cCgnPG5vJy5jb25jYXQoJ3dpa2k+JywgU3RyaW5nLnJhd2AoXFxzfFxcUykqPzwvbm9gLCAnd2lraScsICc+JyksICdnJyk7XG5cdFx0XHRjb25zdCBjb3BpZWR0ZXh0ID0gX3dpa2l0ZXh0XG5cdFx0XHRcdC5yZXBsYWNlKC88IS0tKFxcc3xcXFMpKj8tLT4vZywgcmVwbGFjZUJ5QmxhbmtzKVxuXHRcdFx0XHQucmVwbGFjZShub3dpa2lSZWdleCwgcmVwbGFjZUJ5QmxhbmtzKTtcblx0XHRcdC8vIFNlYXJjaCBpbiBjb3BpZWR0ZXh0IHRvIGF2b2lkIHRoYXQgd2UgaW5zZXJ0IGluc2lkZSBhbiBIVE1MIGNvbW1lbnQgb3IgYSBub3dpa2kgXCJlbGVtZW50XCIuXG5cdFx0XHRsZXQgaW5kZXggPSAtMTtcblx0XHRcdGZpbmRDYXRzUkUubGFzdEluZGV4ID0gMDtcblx0XHRcdHdoaWxlIChmaW5kQ2F0c1JFLmV4ZWMoY29waWVkdGV4dCkgIT09IG51bGwpIHtcblx0XHRcdFx0aW5kZXggPSBmaW5kQ2F0c1JFLmxhc3RJbmRleDtcblx0XHRcdH1cblx0XHRcdGlmIChpbmRleCA8IDApIHtcblx0XHRcdFx0Ly8gRmluZCB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGludGVybGFuZ3VhZ2UgbGluay4uLlxuXHRcdFx0XHRsZXQgbWF0Y2ggPSBudWxsO1xuXHRcdFx0XHRpZiAoaW50ZXJsYW5ndWFnZVJFKSB7XG5cdFx0XHRcdFx0bWF0Y2ggPSBpbnRlcmxhbmd1YWdlUkUuZXhlYyhjb3BpZWR0ZXh0KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBBcHByb3hpbWF0aW9uIHdpdGhvdXQgQVBJOiBpbnRlcmxhbmd1YWdlIGxpbmtzIHN0YXJ0IHdpdGggMiB0byAzIGxvd2VyIGNhc2UgbGV0dGVycywgb3B0aW9uYWxseSBmb2xsb3dlZCBieVxuXHRcdFx0XHRcdC8vIGEgc2VxdWVuY2Ugb2YgZ3JvdXBzIGNvbnNpc3Rpbmcgb2YgYSBkYXNoIGZvbGxvd2VkIGJ5IG9uZSBvciBtb3JlIGxvd2VyIGNhc2UgbGV0dGVycy4gRXhjZXB0aW9ucyBhcmUgXCJzaW1wbGVcIlxuXHRcdFx0XHRcdC8vIGFuZCBcInRva2lwb25hXCIuXG5cdFx0XHRcdFx0bWF0Y2ggPSAvKChefFxcblxccj8pKFxcW1xcW1xccyooKFthLXpdezIsM30oLVthLXpdKykqKXxzaW1wbGV8dG9raXBvbmEpXFxzKjpbXlxcXV0rXV1cXHMqKSkrJC8uZXhlYyhcblx0XHRcdFx0XHRcdGNvcGllZHRleHRcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChtYXRjaCkge1xuXHRcdFx0XHRcdCh7aW5kZXh9ID0gbWF0Y2gpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0aWR4OiBpbmRleCxcblx0XHRcdFx0XHRvbkNhdDogZmFsc2UsXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRpZHg6IGluZGV4LFxuXHRcdFx0XHRvbkNhdDogaW5kZXggPj0gMCxcblx0XHRcdH07XG5cdFx0fTtcblx0XHRjb25zdCBzdW1tYXJ5ID0gW107XG5cdFx0Y29uc3QgbmFtZVNwYWNlID0gSEMuY2F0ZWdvcnlfY2Fub25pY2FsO1xuXHRcdGNvbnN0IC8vIFBvc2l0aW9uIG9mIHJlbW92ZWQgY2F0ZWdvcnk7XG5cdFx0XHRrZXlDaGFuZ2UgPSB0b1JlbW92ZSAmJiB0b0FkZCAmJiB0b1JlbW92ZSA9PT0gdG9BZGQgJiYgdG9BZGQubGVuZ3RoID4gMDtcblx0XHRsZXQgbWF0Y2hlcztcblx0XHRsZXQgY2F0X3BvaW50ID0gLTE7XG5cdFx0a2V5ICYmPSBgfCR7a2V5fWA7XG5cdFx0Ly8gUmVtb3ZlXG5cdFx0aWYgKHRvUmVtb3ZlICYmIHRvUmVtb3ZlLmxlbmd0aCA+IDApIHtcblx0XHRcdG1hdGNoZXMgPSBmaW5kX2NhdGVnb3J5KHdpa2l0ZXh0LCB0b1JlbW92ZSk7XG5cdFx0XHRpZiAoIW1hdGNoZXMgfHwgbWF0Y2hlcy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0ZXh0OiB3aWtpdGV4dCxcblx0XHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHRcdGVycm9yOiBnZXRNZXNzYWdlKCdtZXNzYWdlcy1jYXRfbm90Rm91bmQnLCB0b1JlbW92ZSksXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRsZXQgYmVmb3JlID0gd2lraXRleHQuc2xpY2UoMCwgTWF0aC5tYXgoMCwgbWF0Y2hlc1swXS5tYXRjaC5pbmRleCkpO1xuXHRcdFx0bGV0IGFmdGVyID0gd2lraXRleHQuc2xpY2UoTWF0aC5tYXgoMCwgbWF0Y2hlc1swXS5tYXRjaC5pbmRleCArIG1hdGNoZXNbMF0ubWF0Y2hbMF0ubGVuZ3RoKSk7XG5cdFx0XHRpZiAobWF0Y2hlcy5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdC8vIFJlbW92ZSBhbGwgb2NjdXJyZW5jZXMgaW4gYWZ0ZXJcblx0XHRcdFx0bWF0Y2hlcy5yZS5sYXN0SW5kZXggPSAwO1xuXHRcdFx0XHRhZnRlciA9IGFmdGVyLnJlcGxhY2UobWF0Y2hlcy5yZSwgJycpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKFxuXHRcdFx0XHR0b0FkZCAmJiAvLyBuYW1lU3BhY2UgPSBtYXRjaGVzWyAwIF0ubWF0Y2hbIDEgXSB8fCBuYW1lU3BhY2U7IENhbm9uaWNhbCBuYW1lc3BhY2Ugc2hvdWxkIGJlIGFsd2F5cyBwcmVmZXJyZWRcblx0XHRcdFx0a2V5ID09PSBudWxsXG5cdFx0XHQpIHtcblx0XHRcdFx0WywgLCBrZXldID0gbWF0Y2hlc1swXS5tYXRjaDtcblx0XHRcdH1cblx0XHRcdC8vIFJlbWVtYmVyIHRoZSBjYXRlZ29yeSBrZXksIGlmIGFueS5cblx0XHRcdC8vIFJlbW92ZSB3aGl0ZXNwYWNlIChwcm9wZXJseSk6IHN0cmlwIHdoaXRlc3BhY2UsIGJ1dCBvbmx5IHVwIHRvIHRoZSBuZXh0IGxpbmUgZmVlZC5cblx0XHRcdC8vIElmIHdlIHRoZW4gaGF2ZSB0d28gbGluZWZlZWRzIGluIGEgcm93LCByZW1vdmUgb25lLiBPdGhlcndpc2UsIGlmIHdlIGhhdmUgdHdvIG5vbi1cblx0XHRcdC8vIHdoaXRlc3BhY2UgY2hhcmFjdGVycywgaW5zZXJ0IGEgYmxhbmsuXG5cdFx0XHRsZXQgaSA9IGJlZm9yZS5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPj0gMCAmJiBiZWZvcmUuY2hhckF0KGkpICE9PSAnXFxuJyAmJiBiZWZvcmUuc2xpY2UoaSwgaSArIDEpLnNlYXJjaCgvXFxzLykgPj0gMCkge1xuXHRcdFx0XHRpLS07XG5cdFx0XHR9XG5cdFx0XHRsZXQgaiA9IDA7XG5cdFx0XHR3aGlsZSAoaiA8IGFmdGVyLmxlbmd0aCAmJiBhZnRlci5jaGFyQXQoaikgIT09ICdcXG4nICYmIGFmdGVyLnNsaWNlKGosIGogKyAxKS5zZWFyY2goL1xccy8pID49IDApIHtcblx0XHRcdFx0aisrO1xuXHRcdFx0fVxuXHRcdFx0aWYgKFxuXHRcdFx0XHRpID49IDAgJiZcblx0XHRcdFx0YmVmb3JlLmNoYXJBdChpKSA9PT0gJ1xcbicgJiZcblx0XHRcdFx0KGFmdGVyLmxlbmd0aCA9PT0gMCB8fCAoaiA8IGFmdGVyLmxlbmd0aCAmJiBhZnRlci5jaGFyQXQoaikgPT09ICdcXG4nKSlcblx0XHRcdCkge1xuXHRcdFx0XHRpLS07XG5cdFx0XHR9XG5cdFx0XHRiZWZvcmUgPSBpID49IDAgPyBiZWZvcmUuc2xpY2UoMCwgTWF0aC5tYXgoMCwgaSArIDEpKSA6ICcnO1xuXHRcdFx0YWZ0ZXIgPSBqIDwgYWZ0ZXIubGVuZ3RoID8gYWZ0ZXIuc2xpY2UoTWF0aC5tYXgoMCwgaikpIDogJyc7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGJlZm9yZS5sZW5ndGggPiAwICYmXG5cdFx0XHRcdGJlZm9yZS5zbGljZShNYXRoLm1heCgwLCBiZWZvcmUubGVuZ3RoIC0gMSkpLnNlYXJjaCgvXFxTLykgPj0gMCAmJlxuXHRcdFx0XHRhZnRlci5sZW5ndGggPiAwICYmXG5cdFx0XHRcdGFmdGVyLnNsaWNlKDAsIDEpLnNlYXJjaCgvXFxTLykgPj0gMFxuXHRcdFx0KSB7XG5cdFx0XHRcdGJlZm9yZSArPSAnICc7XG5cdFx0XHR9XG5cdFx0XHRjYXRfcG9pbnQgPSBiZWZvcmUubGVuZ3RoO1xuXHRcdFx0aWYgKGNhdF9wb2ludCA9PT0gMCAmJiBhZnRlci5sZW5ndGggPiAwICYmIGFmdGVyLnNsaWNlKDAsIDEpID09PSAnXFxuJykge1xuXHRcdFx0XHRhZnRlciA9IGFmdGVyLnNsaWNlKDEpO1xuXHRcdFx0fVxuXHRcdFx0d2lraXRleHQgPSBiZWZvcmUgKyBhZnRlcjtcblx0XHRcdGlmICgha2V5Q2hhbmdlKSB7XG5cdFx0XHRcdGlmIChIQy50ZW1wbGF0ZV9jYXRlZ29yaWVzW3RvUmVtb3ZlXSkge1xuXHRcdFx0XHRcdHN1bW1hcnlbc3VtbWFyeS5sZW5ndGhdID0gZ2V0TWVzc2FnZSgnbWVzc2FnZXMtdGVtcGxhdGVfcmVtb3ZlZCcsIHRvUmVtb3ZlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzdW1tYXJ5W3N1bW1hcnkubGVuZ3RoXSA9IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLWNhdF9yZW1vdmVkJywgdG9SZW1vdmUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIEFkZFxuXHRcdGlmICh0b0FkZCAmJiB0b0FkZC5sZW5ndGggPiAwKSB7XG5cdFx0XHRtYXRjaGVzID0gZmluZF9jYXRlZ29yeSh3aWtpdGV4dCwgdG9BZGQpO1xuXHRcdFx0aWYgKG1hdGNoZXMgJiYgbWF0Y2hlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdC8vIEFscmVhZHkgZXhpc3RzXG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dGV4dDogd2lraXRleHQsXG5cdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHRlcnJvcjogZ2V0TWVzc2FnZSgnbWVzc2FnZXMtY2F0X2V4aXN0cycsIHRvQWRkKSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGxldCBvbkNhdCA9IGZhbHNlO1xuXHRcdFx0aWYgKGNhdF9wb2ludCA8IDApIHtcblx0XHRcdFx0Y29uc3QgcG9pbnQgPSBmaW5kX2luc2VydGlvbnBvaW50KHdpa2l0ZXh0KTtcblx0XHRcdFx0Y2F0X3BvaW50ID0gcG9pbnQuaWR4O1xuXHRcdFx0XHQoe29uQ2F0fSA9IHBvaW50KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG9uQ2F0ID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IG5ld2NhdHN0cmluZyA9IGBbWyR7bmFtZVNwYWNlfToke3RvQWRkfSR7a2V5IHx8ICcnfV1dYDtcblx0XHRcdGlmIChjYXRfcG9pbnQgPj0gMCkge1xuXHRcdFx0XHRjb25zdCBzdWZmaXggPSB3aWtpdGV4dC5zbGljZShNYXRoLm1heCgwLCBjYXRfcG9pbnQpKTtcblx0XHRcdFx0d2lraXRleHQgPVxuXHRcdFx0XHRcdHdpa2l0ZXh0LnNsaWNlKDAsIE1hdGgubWF4KDAsIGNhdF9wb2ludCkpICtcblx0XHRcdFx0XHQoY2F0X3BvaW50ID4gMCA/ICdcXG4nIDogJycpICtcblx0XHRcdFx0XHRuZXdjYXRzdHJpbmcgK1xuXHRcdFx0XHRcdChvbkNhdCA/ICcnIDogJ1xcbicpO1xuXHRcdFx0XHR3aWtpdGV4dCArPSBzdWZmaXgubGVuZ3RoID4gMCAmJiBzdWZmaXguc2xpY2UoMCwgMSkgIT09ICdcXG4nID8gYFxcbiR7c3VmZml4fWAgOiBzdWZmaXg7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAod2lraXRleHQubGVuZ3RoID4gMCAmJiB3aWtpdGV4dC5zbGljZSgtMSwgd2lraXRleHQubGVuZ3RoIC0gMSArIDEpICE9PSAnXFxuJykge1xuXHRcdFx0XHRcdHdpa2l0ZXh0ICs9ICdcXG4nO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHdpa2l0ZXh0ICs9ICh3aWtpdGV4dC5sZW5ndGggPiAwID8gJ1xcbicgOiAnJykgKyBuZXdjYXRzdHJpbmc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoa2V5Q2hhbmdlKSB7XG5cdFx0XHRcdGxldCBrID0ga2V5IHx8ICcnO1xuXHRcdFx0XHRpZiAoay5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0ayA9IGsuc2xpY2UoMSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3VtbWFyeVtzdW1tYXJ5Lmxlbmd0aF0gPSBnZXRNZXNzYWdlKCdtZXNzYWdlcy1jYXRfa2V5Y2hhbmdlJywgdG9BZGQsIGspO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c3VtbWFyeVtzdW1tYXJ5Lmxlbmd0aF0gPSBnZXRNZXNzYWdlKCdtZXNzYWdlcy1jYXRfYWRkZWQnLCB0b0FkZCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoSEMudW5jYXRfcmVnZXhwICYmICFpc19oaWRkZW4pIHtcblx0XHRcdFx0Y29uc3QgdHh0ID0gd2lraXRleHQucmVwbGFjZShIQy51bmNhdF9yZWdleHAsICcnKTsgLy8gUmVtb3ZlIFwidW5jYXRcIiB0ZW1wbGF0ZXNcblx0XHRcdFx0aWYgKHR4dC5sZW5ndGggIT09IHdpa2l0ZXh0Lmxlbmd0aCkge1xuXHRcdFx0XHRcdHdpa2l0ZXh0ID0gdHh0O1xuXHRcdFx0XHRcdHN1bW1hcnlbc3VtbWFyeS5sZW5ndGhdID0gZ2V0TWVzc2FnZSgnbWVzc2FnZXMtdW5jYXRfcmVtb3ZlZCcpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHR0ZXh0OiB3aWtpdGV4dCxcblx0XHRcdHN1bW1hcnksXG5cdFx0XHRlcnJvcjogbnVsbCxcblx0XHR9O1xuXHR9O1xuXHQvLyBUaGUgcmVhbCBIb3RDYXQgVUlcblx0Y29uc3QgZXZ0S2V5cyA9ICh7Y3RybEtleSwgbWV0YUtleSwgc2hpZnRLZXl9KSA9PiB7XG5cdFx0bGV0IGNvZGUgPSAwO1xuXHRcdGlmIChjdHJsS2V5KSB7XG5cdFx0XHQvLyBBbGwgbW9kZXJuIGJyb3dzZXJzXG5cdFx0XHQvLyBDdHJsLWNsaWNrIHNlZW1zIHRvIGJlIG92ZXJsb2FkZWQgaW4gRkYvTWFjIChpdCBvcGVucyBhIHBvcC11cCBtZW51KSwgc28gdHJlYXQgY21kLWNsaWNrXG5cdFx0XHQvLyBhcyBhIGN0cmwtY2xpY2ssIHRvby5cblx0XHRcdGlmIChjdHJsS2V5IHx8IG1ldGFLZXkpIHtcblx0XHRcdFx0Y29kZSB8fD0gMTtcblx0XHRcdH1cblx0XHRcdGlmIChzaGlmdEtleSkge1xuXHRcdFx0XHRjb2RlIHx8PSAyO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gY29kZTtcblx0fTtcblx0Y29uc3QgZXZ0S2lsbCA9IChlKSA9PiB7XG5cdFx0aWYgKGUucHJldmVudERlZmF1bHQpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGUuY2FuY2VsQnViYmxlID0gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXHRsZXQgY2F0TGluZSA9IG51bGw7IC8vIHRydWUgaWYgTWVkaWFXaWtpIHNlcnZlcyB0aGUgbmV3IFVMLUxJIERPTSBmb3IgY2F0ZWdvcmllc1xuXHRsZXQgb25VcGxvYWQgPSBmYWxzZTtcblx0bGV0IGVkaXRvcnMgPSBbXTtcblx0bGV0IGNvbW1pdEJ1dHRvbiA9IG51bGw7XG5cdGxldCBjb21taXRGb3JtID0gbnVsbDtcblx0bGV0IG11bHRpU3BhbiA9IG51bGw7XG5cdGxldCBwYWdlVGV4dCA9IG51bGw7XG5cdGxldCBwYWdlVGltZSA9IG51bGw7XG5cdGxldCBwYWdlV2F0Y2hlZCA9IGZhbHNlO1xuXHRsZXQgd2F0Y2hDcmVhdGUgPSBmYWxzZTtcblx0bGV0IHdhdGNoRWRpdCA9IGZhbHNlO1xuXHRsZXQgbWlub3JFZGl0cyA9IGZhbHNlO1xuXHRsZXQgZWRpdFRva2VuID0gbnVsbDtcblx0bGV0IGlzX3J0bCA9IGZhbHNlO1xuXHRsZXQgc2VydmVyVGltZSA9IG51bGw7XG5cdGxldCBsYXN0UmV2SWQgPSBudWxsO1xuXHRsZXQgcGFnZVRleHRSZXZJZCA9IG51bGw7XG5cdGxldCBjb25mbGljdGluZ1VzZXIgPSBudWxsO1xuXHRsZXQgbmV3RE9NID0gZmFsc2U7XG5cdGNvbnN0IFVOQ0hBTkdFRCA9IDA7XG5cdGNvbnN0IE9QRU4gPSAxOyAvLyBPcGVuLCBidXQgbm8gaW5wdXQgeWV0XG5cdGNvbnN0IENIQU5HRV9QRU5ESU5HID0gMjsgLy8gT3Blbiwgc29tZSBpbnB1dCBtYWRlXG5cdGNvbnN0IENIQU5HRUQgPSAzO1xuXHRjb25zdCBERUxFVEVEID0gNDtcblx0Y29uc3Qgc2V0UGFnZSA9IChkYXRhKSA9PiB7XG5cdFx0bGV0IHN0YXJ0VGltZSA9IG51bGw7XG5cdFx0aWYgKGRhdGEgJiYgZGF0YS5xdWVyeSkge1xuXHRcdFx0aWYgKGRhdGEucXVlcnkucGFnZXMpIHtcblx0XHRcdFx0Y29uc3QgW3BhZ2VdID0gZGF0YS5xdWVyeS5wYWdlcztcblx0XHRcdFx0aWYgKHBhZ2UpIHtcblx0XHRcdFx0XHRpZiAocGFnZS5yZXZpc2lvbnMgJiYgcGFnZS5yZXZpc2lvbnMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdFx0Ly8gUmV2aXNpb25zIGFyZSBzb3J0ZWQgYnkgcmV2aXNpb24gSUQsIGhlbmNlIFswXSBpcyB0aGUgb25lIHdlIGFza2VkIGZvciwgYW5kIHBvc3NpYmx5IHRoZXJlJ3MgYSBbMV0gaWYgd2UncmVcblx0XHRcdFx0XHRcdC8vIG5vdCBvbiB0aGUgbGF0ZXN0IHJldmlzaW9uIChlZGl0IGNvbmZsaWN0cyBhbmQgc3VjaCkuXG5cdFx0XHRcdFx0XHRwYWdlVGV4dCA9IHBhZ2UucmV2aXNpb25zWzBdLnNsb3RzLm1haW4uY29udGVudDtcblx0XHRcdFx0XHRcdGlmIChwYWdlLnJldmlzaW9uc1swXS50aW1lc3RhbXApIHtcblx0XHRcdFx0XHRcdFx0cGFnZVRpbWUgPSBwYWdlLnJldmlzaW9uc1swXS50aW1lc3RhbXAucmVwbGFjZSgvXFxEL2csICcnKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmIChwYWdlLnJldmlzaW9uc1swXS5yZXZpZCkge1xuXHRcdFx0XHRcdFx0XHRwYWdlVGV4dFJldklkID0gcGFnZS5yZXZpc2lvbnNbMF0ucmV2aWQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAocGFnZS5yZXZpc2lvbnMubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdFx0XHRjb25mbGljdGluZ1VzZXIgPSBwYWdlLnJldmlzaW9uc1sxXS51c2VyO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAocGFnZS5sYXN0cmV2aWQpIHtcblx0XHRcdFx0XHRcdGxhc3RSZXZJZCA9IHBhZ2UubGFzdHJldmlkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAocGFnZS5zdGFydHRpbWVzdGFtcCkge1xuXHRcdFx0XHRcdFx0c3RhcnRUaW1lID0gcGFnZS5zdGFydHRpbWVzdGFtcC5yZXBsYWNlKC9cXEQvZywgJycpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRwYWdlV2F0Y2hlZCA9IHR5cGVvZiBwYWdlLndhdGNoZWQgPT09ICdzdHJpbmcnO1xuXHRcdFx0XHRcdGlmIChkYXRhLnF1ZXJ5LnRva2Vucykge1xuXHRcdFx0XHRcdFx0ZWRpdFRva2VuID0gZGF0YS5xdWVyeS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAocGFnZS5sYW5nbGlua3MgJiYgKCFkYXRhWydxdWVyeS1jb250aW51ZSddIHx8ICFkYXRhWydxdWVyeS1jb250aW51ZSddLmxhbmdsaW5rcykpIHtcblx0XHRcdFx0XHRcdC8vIFdlIGhhdmUgaW50ZXJsYW5ndWFnZSBsaW5rcywgYW5kIHdlIGdvdCB0aGVtIGFsbC5cblx0XHRcdFx0XHRcdGxldCByZSA9ICcnO1xuXHRcdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwYWdlLmxhbmdsaW5rcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0XHRyZSArPVxuXHRcdFx0XHRcdFx0XHRcdChpID4gMCA/ICd8JyA6ICcnKSArIHBhZ2UubGFuZ2xpbmtzW2ldLmxhbmcucmVwbGFjZSgvKFskKCkqKy4/XFxcXF5dKS9nLCBTdHJpbmcucmF3YFxcJDFgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmIChyZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRcdGludGVybGFuZ3VhZ2VSRSA9IG5ldyBSZWdFeHAoYCgoXnxcXFxcblxcXFxyPykoXFxcXFtcXFxcW1xcXFxzKigke3JlfSlcXFxccyo6W15cXFxcXV0rXFxcXF1cXFxcXVxcXFxzKikpKyRgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIFNpdGVpbmZvXG5cdFx0XHRpZiAoZGF0YS5xdWVyeS5nZW5lcmFsKSB7XG5cdFx0XHRcdGlmIChkYXRhLnF1ZXJ5LmdlbmVyYWwudGltZSAmJiAhc3RhcnRUaW1lKSB7XG5cdFx0XHRcdFx0c3RhcnRUaW1lID0gZGF0YS5xdWVyeS5nZW5lcmFsLnRpbWUucmVwbGFjZSgvXFxEL2csICcnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoSEMuY2FwaXRhbGl6ZVBhZ2VOYW1lcyA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdC8vIFJlc291cmNlTG9hZGVyJ3MgSlNQYXJzZXIgZG9lc24ndCBsaWtlIC5jYXNlLCBzbyBvdmVycmlkZSBlc2xpbnQuXG5cdFx0XHRcdFx0SEMuY2FwaXRhbGl6ZVBhZ2VOYW1lcyA9IGRhdGEucXVlcnkuZ2VuZXJhbC5jYXNlID09PSAnZmlyc3QtbGV0dGVyJztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0c2VydmVyVGltZSA9IHN0YXJ0VGltZTtcblx0XHRcdC8vIFVzZXJpbmZvXG5cdFx0XHRpZiAoZGF0YS5xdWVyeS51c2VyaW5mbyAmJiBkYXRhLnF1ZXJ5LnVzZXJpbmZvLm9wdGlvbnMpIHtcblx0XHRcdFx0d2F0Y2hDcmVhdGUgPSAhSEMuZG9udF9hZGRfdG9fd2F0Y2hsaXN0ICYmIGRhdGEucXVlcnkudXNlcmluZm8ub3B0aW9ucy53YXRjaGNyZWF0aW9ucyA9PT0gJzEnO1xuXHRcdFx0XHR3YXRjaEVkaXQgPSAhSEMuZG9udF9hZGRfdG9fd2F0Y2hsaXN0ICYmIGRhdGEucXVlcnkudXNlcmluZm8ub3B0aW9ucy53YXRjaGRlZmF1bHQgPT09ICcxJztcblx0XHRcdFx0bWlub3JFZGl0cyA9IGRhdGEucXVlcnkudXNlcmluZm8ub3B0aW9ucy5taW5vcmRlZmF1bHQgPT09IDE7XG5cdFx0XHRcdC8vIElmIHRoZSB1c2VyIGhhcyB0aGUgXCJBbGwgZWRpdHMgYXJlIG1pbm9yXCIgcHJlZmVyZW5jZSBlbmFibGVkLCB3ZSBzaG91bGQgaG9ub3IgdGhhdFxuXHRcdFx0XHQvLyBmb3Igc2luZ2xlIGNhdGVnb3J5IGNoYW5nZXMsIG5vIG1hdHRlciB3aGF0IHRoZSBzaXRlIGNvbmZpZ3VyYXRpb24gaXMuXG5cdFx0XHRcdGlmIChtaW5vckVkaXRzKSB7XG5cdFx0XHRcdFx0SEMuc2luZ2xlX21pbm9yID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0bGV0IHNhdmVJblByb2dyZXNzID0gZmFsc2U7XG5cdGNvbnN0IGluaXRpYXRlRWRpdCA9IChkb0VkaXQsIGZhaWx1cmUpID0+IHtcblx0XHRpZiAoc2F2ZUluUHJvZ3Jlc3MpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0c2F2ZUluUHJvZ3Jlc3MgPSB0cnVlO1xuXHRcdGxldCBvbGRCdXR0b25TdGF0ZTtcblx0XHRpZiAoY29tbWl0QnV0dG9uKSB7XG5cdFx0XHRvbGRCdXR0b25TdGF0ZSA9IGNvbW1pdEJ1dHRvbi5kaXNhYmxlZDtcblx0XHRcdGNvbW1pdEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG5cdFx0fVxuXHRcdGNvbnN0IGZhaWwgPSBmdW5jdGlvbiAoLi4uYXJncykge1xuXHRcdFx0c2F2ZUluUHJvZ3Jlc3MgPSBmYWxzZTtcblx0XHRcdGlmIChjb21taXRCdXR0b24pIHtcblx0XHRcdFx0Y29tbWl0QnV0dG9uLmRpc2FibGVkID0gb2xkQnV0dG9uU3RhdGU7XG5cdFx0XHR9XG5cdFx0XHRmYWlsdXJlLmFwcGx5KHRoaXMsIGFyZ3MpO1xuXHRcdH07XG5cdFx0Ly8gTXVzdCB1c2UgQWpheCBoZXJlIHRvIGdldCB0aGUgdXNlciBvcHRpb25zIGFuZCB0aGUgZWRpdCB0b2tlbi5cblx0XHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdHJhd2NvbnRpbnVlOiAnJyxcblx0XHRcdHRpdGxlczogY29uZi53Z1BhZ2VOYW1lLFxuXHRcdFx0cHJvcDogWydpbmZvJywgJ3JldmlzaW9ucycsICdsYW5nbGlua3MnXSxcblx0XHRcdGlucHJvcDogJ3dhdGNoZWQnLFxuXHRcdFx0cnZwcm9wOiBbJ2NvbnRlbnQnLCAndGltZXN0YW1wJywgJ2lkcycsICd1c2VyJ10sXG5cdFx0XHRydnNsb3RzOiAnbWFpbicsXG5cdFx0XHRydmxpbWl0OiAnMicsXG5cdFx0XHRydmRpcjogJ25ld2VyJyxcblx0XHRcdHJ2c3RhcnRpZDogY29uZi53Z0N1clJldmlzaW9uSWQsXG5cdFx0XHRsbGxpbWl0OiAnNTAwJyxcblx0XHRcdG1ldGE6IFsnc2l0ZWluZm8nLCAndXNlcmluZm8nLCAndG9rZW5zJ10sXG5cdFx0XHR0eXBlOiAnY3NyZicsXG5cdFx0XHR1aXByb3A6IFsnb3B0aW9ucyddLFxuXHRcdH07XG5cdFx0YXBpLmdldChwYXJhbXMpXG5cdFx0XHQuZG9uZSgoZGF0YSkgPT4ge1xuXHRcdFx0XHRzZXRQYWdlKGRhdGEpO1xuXHRcdFx0XHRkb0VkaXQoZmFpbCk7XG5cdFx0XHR9KVxuXHRcdFx0LmZhaWwoKHtzdGF0dXMsIHN0YXR1c1RleHR9KSA9PiB7XG5cdFx0XHRcdGZhaWwoYCR7c3RhdHVzfSAke3N0YXR1c1RleHR9YCk7XG5cdFx0XHR9KTtcblx0fTtcblx0Y29uc3QgbXVsdGlDaGFuZ2VNc2cgPSAoY291bnQpID0+IHtcblx0XHRyZXR1cm4gZ2V0TWVzc2FnZSgnbWVzc2FnZXMtbXVsdGlfY2hhbmdlJywgU3RyaW5nKGNvdW50KSk7XG5cdH07XG5cdGNvbnN0IGN1cnJlbnRUaW1lc3RhbXAgPSAoKSA9PiB7XG5cdFx0Y29uc3Qgbm93ID0gbmV3IERhdGUoKTtcblx0XHRsZXQgdHMgPSBTdHJpbmcobm93LmdldFVUQ0Z1bGxZZWFyKCkpO1xuXHRcdGNvbnN0IHR3byA9IChzKSA9PiB7XG5cdFx0XHRyZXR1cm4gcy5zbGljZSgtMik7XG5cdFx0fTtcblx0XHR0cyArPVxuXHRcdFx0dHdvKGAwJHtub3cuZ2V0VVRDTW9udGgoKSArIDF9YCkgK1xuXHRcdFx0dHdvKGAwJHtub3cuZ2V0VVRDRGF0ZSgpfWApICtcblx0XHRcdHR3byhgMDAke25vdy5nZXRVVENIb3VycygpfWApICtcblx0XHRcdHR3byhgMDAke25vdy5nZXRVVENNaW51dGVzKCl9YCkgK1xuXHRcdFx0dHdvKGAwMCR7bm93LmdldFVUQ1NlY29uZHMoKX1gKTtcblx0XHRyZXR1cm4gdHM7XG5cdH07XG5cdGNvbnN0IHBlcmZvcm1DaGFuZ2VzID0gKGZhaWx1cmUsIHNpbmdsZUVkaXRvcikgPT4ge1xuXHRcdGlmIChwYWdlVGV4dCA9PT0gbnVsbCkge1xuXHRcdFx0ZmFpbHVyZShnZXRNZXNzYWdlKCdtZXNzYWdlcy1tdWx0aV9lcnJvcicpKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Ly8gQ3JlYXRlIGEgZm9ybSBhbmQgc3VibWl0IGl0LiBXZSBkb24ndCB1c2UgdGhlIGVkaXQgQVBJIChhcGkucGhwP2FjdGlvbj1lZGl0KSBiZWNhdXNlXG5cdFx0Ly8gKGEpIHNlbnNpYmx5IHJlcG9ydGluZyBiYWNrIGVycm9ycyBsaWtlIGVkaXQgY29uZmxpY3RzIGlzIGFsd2F5cyBhIGhhc3NsZSwgYW5kXG5cdFx0Ly8gKGIpIHdlIHdhbnQgdG8gc2hvdyBhIGRpZmYgZm9yIG11bHRpLWVkaXRzIGFueXdheSwgYW5kXG5cdFx0Ly8gKGMpIHdlIHdhbnQgdG8gdHJpZ2dlciBvbnN1Ym1pdCBldmVudHMsIGFsbG93aW5nIHVzZXIgY29kZSB0byBpbnRlcmNlcHQgdGhlIGVkaXQuXG5cdFx0Ly8gVXNpbmcgdGhlIGZvcm0sIHdlIGNhbiBkbyAoYikgYW5kIChjKSwgYW5kIHdlIGdldCAoYSkgZm9yIGZyZWUuIEFuZCwgb2YgY291cnNlLCB1c2luZyB0aGUgZm9ybVxuXHRcdC8vIGF1dG9tYXRpY2FsbHkgcmVsb2FkcyB0aGUgcGFnZSB3aXRoIHRoZSB1cGRhdGVkIGNhdGVnb3JpZXMgb24gYSBzdWNjZXNzZnVsIHN1Ym1pdCwgd2hpY2hcblx0XHQvLyB3ZSB3b3VsZCBoYXZlIHRvIGRvIGV4cGxpY2l0bHkgaWYgd2UgdXNlZCB0aGUgZWRpdCBBUEkuXG5cdFx0bGV0IGFjdGlvbjtcblx0XHQvLyBOb3JtYWxseSwgd2UgZG9uJ3QgaGF2ZSB0byBjYXJlIGFib3V0IGVkaXQgY29uZmxpY3RzLiBJZiBzb21lIG90aGVyIHVzZXIgZWRpdGVkIHRoZSBwYWdlIGluIHRoZSBtZWFudGltZSwgdGhlXG5cdFx0Ly8gc2VydmVyIHdpbGwgdGFrZSBjYXJlIG9mIGl0IGFuZCBtZXJnZSB0aGUgZWRpdCBhdXRvbWF0aWNhbGx5IG9yIHByZXNlbnQgYW4gZWRpdCBjb25mbGljdCBzY3JlZW4uIEhvd2V2ZXIsIHRoZVxuXHRcdC8vIHNlcnZlciBzdXBwcmVzc2VzIGVkaXQgY29uZmxpY3RzIHdpdGggb25lc2VsZi4gSGVuY2UsIGlmIHdlIGhhdmUgYSBjb25mbGljdCwgYW5kIHRoZSBjb25mbGljdGluZyB1c2VyIGlzIHRoZVxuXHRcdC8vIGN1cnJlbnQgdXNlciwgdGhlbiB3ZSBzZXQgdGhlIFwib2xkaWRcIiB2YWx1ZSBhbmQgc3dpdGNoIHRvIGRpZmYsIHdoaWNoIGdpdmVzIHRoZSBcInlvdSBhcmUgZWRpdGluZyBhbiBvbGQgdmVyc2lvbjtcblx0XHQvLyBpZiB5b3Ugc2F2ZSwgYW55IG1vcmUgcmVjZW50IGNoYW5nZXMgd2lsbCBiZSBsb3N0XCIgc2NyZWVuLlxuXHRcdGNvbnN0IHNlbGZFZGl0Q29uZmxpY3QgPVxuXHRcdFx0KChsYXN0UmV2SWQgIT09IG51bGwgJiYgbGFzdFJldklkICE9PSBjb25mLndnQ3VyUmV2aXNpb25JZCkgfHxcblx0XHRcdFx0KHBhZ2VUZXh0UmV2SWQgIT09IG51bGwgJiYgcGFnZVRleHRSZXZJZCAhPT0gY29uZi53Z0N1clJldmlzaW9uSWQpKSAmJlxuXHRcdFx0Y29uZmxpY3RpbmdVc2VyICYmXG5cdFx0XHRjb25mbGljdGluZ1VzZXIgPT09IGNvbmYud2dVc2VyTmFtZTtcblx0XHRpZiAoc2luZ2xlRWRpdG9yICYmICFzaW5nbGVFZGl0b3Iubm9Db21taXQgJiYgIUhDLm5vX2F1dG9jb21taXQgJiYgZWRpdFRva2VuICYmICFzZWxmRWRpdENvbmZsaWN0KSB7XG5cdFx0XHQvLyBJZiB3ZSBkbyBoYXZlIGFuIGVkaXQgY29uZmxpY3QsIGJ1dCBub3Qgd2l0aCBvdXJzZWxmLCB0aGF0J3Mgbm8gcmVhc29uIG5vdCB0byBhdHRlbXB0IHRvIHNhdmU6IHRoZSBzZXJ2ZXIgc2lkZSBtYXkgYWN0dWFsbHkgYmUgYWJsZSB0b1xuXHRcdFx0Ly8gbWVyZ2UgdGhlIGNoYW5nZXMuIFdlIGp1c3QgbmVlZCB0byBtYWtlIHN1cmUgdGhhdCB3ZSBkbyBwcmVzZW50IGEgZGlmZiB2aWV3IGlmIGl0J3MgYSBzZWxmIGVkaXQgY29uZmxpY3QuXG5cdFx0XHRjb21taXRGb3JtLndwRWRpdFRva2VuLnZhbHVlID0gZWRpdFRva2VuO1xuXHRcdFx0YWN0aW9uID0gY29tbWl0Rm9ybS53cERpZmY7XG5cdFx0XHRpZiAoYWN0aW9uKSB7XG5cdFx0XHRcdGFjdGlvbi52YWx1ZSA9ICd3cFNhdmUnO1xuXHRcdFx0XHRhY3Rpb24ubmFtZSA9IGFjdGlvbi52YWx1ZTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0YWN0aW9uID0gY29tbWl0Rm9ybS53cFNhdmU7XG5cdFx0XHRpZiAoYWN0aW9uKSB7XG5cdFx0XHRcdGFjdGlvbi52YWx1ZSA9ICd3cERpZmYnO1xuXHRcdFx0XHRhY3Rpb24ubmFtZSA9IGFjdGlvbi52YWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0bGV0IHJlc3VsdCA9IHtcblx0XHRcdHRleHQ6IHBhZ2VUZXh0LFxuXHRcdH07XG5cdFx0Y29uc3QgY2hhbmdlZCA9IFtdO1xuXHRcdGNvbnN0IGFkZGVkID0gW107XG5cdFx0Y29uc3QgZGVsZXRlZCA9IFtdO1xuXHRcdGNvbnN0IHRvRWRpdCA9IHNpbmdsZUVkaXRvciA/IFtzaW5nbGVFZGl0b3JdIDogZWRpdG9ycztcblx0XHRsZXQgZWRpdDtcblx0XHRsZXQgaTtcblx0XHRsZXQgZXJyb3IgPSBudWxsO1xuXHRcdGxldCBjaGFuZ2VzID0gMDtcblx0XHRmb3IgKGkgPSAwOyBpIDwgdG9FZGl0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRlZGl0ID0gdG9FZGl0W2ldO1xuXHRcdFx0aWYgKGVkaXQuc3RhdGUgPT09IENIQU5HRUQpIHtcblx0XHRcdFx0cmVzdWx0ID0gY2hhbmdlX2NhdGVnb3J5KFxuXHRcdFx0XHRcdHJlc3VsdC50ZXh0LFxuXHRcdFx0XHRcdGVkaXQub3JpZ2luYWxDYXRlZ29yeSxcblx0XHRcdFx0XHRlZGl0LmN1cnJlbnRDYXRlZ29yeSxcblx0XHRcdFx0XHRlZGl0LmN1cnJlbnRLZXksXG5cdFx0XHRcdFx0ZWRpdC5jdXJyZW50SGlkZGVuXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGlmICghcmVzdWx0LmVycm9yKSB7XG5cdFx0XHRcdFx0Y2hhbmdlcysrO1xuXHRcdFx0XHRcdGlmICghZWRpdC5vcmlnaW5hbENhdGVnb3J5IHx8IGVkaXQub3JpZ2luYWxDYXRlZ29yeS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRcdGFkZGVkW2FkZGVkLmxlbmd0aF0gPSBlZGl0LmN1cnJlbnRDYXRlZ29yeTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Y2hhbmdlZFtjaGFuZ2VkLmxlbmd0aF0gPSB7XG5cdFx0XHRcdFx0XHRcdGZyb206IGVkaXQub3JpZ2luYWxDYXRlZ29yeSxcblx0XHRcdFx0XHRcdFx0dG86IGVkaXQuY3VycmVudENhdGVnb3J5LFxuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiAoZXJyb3IgPT09IG51bGwpIHtcblx0XHRcdFx0XHQoe2Vycm9yfSA9IHJlc3VsdCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoZWRpdC5zdGF0ZSA9PT0gREVMRVRFRCAmJiBlZGl0Lm9yaWdpbmFsQ2F0ZWdvcnkgJiYgZWRpdC5vcmlnaW5hbENhdGVnb3J5Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0cmVzdWx0ID0gY2hhbmdlX2NhdGVnb3J5KHJlc3VsdC50ZXh0LCBlZGl0Lm9yaWdpbmFsQ2F0ZWdvcnksIG51bGwsIG51bGwsIGZhbHNlKTtcblx0XHRcdFx0aWYgKCFyZXN1bHQuZXJyb3IpIHtcblx0XHRcdFx0XHRjaGFuZ2VzKys7XG5cdFx0XHRcdFx0ZGVsZXRlZFtkZWxldGVkLmxlbmd0aF0gPSBlZGl0Lm9yaWdpbmFsQ2F0ZWdvcnk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoZXJyb3IgPT09IG51bGwpIHtcblx0XHRcdFx0XHQoe2Vycm9yfSA9IHJlc3VsdCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKGVycm9yICE9PSBudWxsKSB7XG5cdFx0XHQvLyBEbyBub3QgY29tbWl0IGlmIHRoZXJlIHdlcmUgZXJyb3JzXG5cdFx0XHRhY3Rpb24gPSBjb21taXRGb3JtLndwU2F2ZTtcblx0XHRcdGlmIChhY3Rpb24pIHtcblx0XHRcdFx0YWN0aW9uLnZhbHVlID0gJ3dwRGlmZic7XG5cdFx0XHRcdGFjdGlvbi5uYW1lID0gYWN0aW9uLnZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBGaWxsIGluIHRoZSBmb3JtIGFuZCBzdWJtaXQgaXRcblx0XHRjb21taXRGb3JtLndwTWlub3JlZGl0LmNoZWNrZWQgPSBtaW5vckVkaXRzO1xuXHRcdGNvbW1pdEZvcm0ud3BXYXRjaHRoaXMuY2hlY2tlZCA9ICghY29uZi53Z0FydGljbGVJZCAmJiB3YXRjaENyZWF0ZSkgfHwgd2F0Y2hFZGl0IHx8IHBhZ2VXYXRjaGVkO1xuXHRcdGlmIChjb25mLndnQXJ0aWNsZUlkIHx8ICEhc2luZ2xlRWRpdG9yKSB7XG5cdFx0XHQvLyBQcmVwYXJlIGNoYW5nZS10YWcgc2F2ZVxuXHRcdFx0aWYgKGFjdGlvbiAmJiBhY3Rpb24udmFsdWUgPT09ICd3cFNhdmUnKSB7XG5cdFx0XHRcdGlmIChIQy5jaGFuZ2VUYWcpIHtcblx0XHRcdFx0XHRjb21taXRGb3JtLndwQ2hhbmdlVGFncy52YWx1ZSA9IEhDLmNoYW5nZVRhZztcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29tbWl0Rm9ybS53cEF1dG9TdW1tYXJ5LnZhbHVlID0gSEMuY2hhbmdlVGFnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGNoYW5nZXMgPT09IDEpIHtcblx0XHRcdFx0aWYgKHJlc3VsdC5zdW1tYXJ5ICYmIHJlc3VsdC5zdW1tYXJ5Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRjb21taXRGb3JtLndwU3VtbWFyeS52YWx1ZSA9XG5cdFx0XHRcdFx0XHQoSEMuY2hhbmdlVGFnID8gJycgOiBnZXRNZXNzYWdlKCdtZXNzYWdlcy1wcmVmaXgnKSkgK1xuXHRcdFx0XHRcdFx0cmVzdWx0LnN1bW1hcnkuam9pbihnZXRNZXNzYWdlKCdtZXNzYWdlcy1zZXBhcmF0b3InKSkgK1xuXHRcdFx0XHRcdFx0KEhDLmNoYW5nZVRhZyA/ICcnIDogZ2V0TWVzc2FnZSgnbWVzc2FnZXMtdXNpbmcnKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29tbWl0Rm9ybS53cE1pbm9yZWRpdC5jaGVja2VkID0gSEMuc2luZ2xlX21pbm9yIHx8IG1pbm9yRWRpdHM7XG5cdFx0XHR9IGVsc2UgaWYgKGNoYW5nZXMpIHtcblx0XHRcdFx0bGV0IHN1bW1hcnkgPSBbXTtcblx0XHRcdFx0Y29uc3Qgc2hvcnRTdW1tYXJ5ID0gW107XG5cdFx0XHRcdC8vIERlbGV0ZWRcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGRlbGV0ZWQubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRzdW1tYXJ5W3N1bW1hcnkubGVuZ3RoXSA9IGDiiJIke2dldE1lc3NhZ2UoJ21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsIGRlbGV0ZWRbaV0pfWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRlbGV0ZWQubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdFx0c2hvcnRTdW1tYXJ5W3Nob3J0U3VtbWFyeS5sZW5ndGhdID0gYOKIkiR7Z2V0TWVzc2FnZSgnbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJywgZGVsZXRlZFswXSl9YDtcblx0XHRcdFx0fSBlbHNlIGlmIChkZWxldGVkLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRzaG9ydFN1bW1hcnlbc2hvcnRTdW1tYXJ5Lmxlbmd0aF0gPSBg4oiSICR7bXVsdGlDaGFuZ2VNc2coZGVsZXRlZC5sZW5ndGgpfWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gQWRkZWRcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGFkZGVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0c3VtbWFyeVtzdW1tYXJ5Lmxlbmd0aF0gPSBgKyR7Z2V0TWVzc2FnZSgnbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJywgYWRkZWRbaV0pfWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGFkZGVkLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRcdHNob3J0U3VtbWFyeVtzaG9ydFN1bW1hcnkubGVuZ3RoXSA9IGArJHtnZXRNZXNzYWdlKCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLCBhZGRlZFswXSl9YDtcblx0XHRcdFx0fSBlbHNlIGlmIChhZGRlZC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0c2hvcnRTdW1tYXJ5W3Nob3J0U3VtbWFyeS5sZW5ndGhdID0gYCsgJHttdWx0aUNoYW5nZU1zZyhhZGRlZC5sZW5ndGgpfWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gQ2hhbmdlZFxuXHRcdFx0XHRjb25zdCBhcnJvdyA9IGlzX3J0bCA/ICdcXHUyMTkwJyA6ICdcXHUyMTkyJzsgLy8gbGVmdCBhbmQgcmlnaHQgYXJyb3dzLiBEb24ndCB1c2Ug4oaQIGFuZCDihpIgaW4gdGhlIGNvZGUuXG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBjaGFuZ2VkLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGNoYW5nZWRbaV0uZnJvbSA9PT0gY2hhbmdlZFtpXS50bykge1xuXHRcdFx0XHRcdFx0c3VtbWFyeVtzdW1tYXJ5Lmxlbmd0aF0gPSBgwrEke2dldE1lc3NhZ2UoJ21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsIGNoYW5nZWRbaV0uZnJvbSl9YDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0c3VtbWFyeVtzdW1tYXJ5Lmxlbmd0aF0gPVxuXHRcdFx0XHRcdFx0XHRgwrEke2dldE1lc3NhZ2UoJ21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsIGNoYW5nZWRbaV0uZnJvbSl9JHthcnJvd30ke2dldE1lc3NhZ2UoXG5cdFx0XHRcdFx0XHRcdFx0J21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsXG5cdFx0XHRcdFx0XHRcdFx0Y2hhbmdlZFtpXS50b1xuXHRcdFx0XHRcdFx0XHQpfWA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChjaGFuZ2VkLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRcdGlmIChjaGFuZ2VkWzBdLmZyb20gPT09IGNoYW5nZWRbMF0udG8pIHtcblx0XHRcdFx0XHRcdHNob3J0U3VtbWFyeVtzaG9ydFN1bW1hcnkubGVuZ3RoXSA9XG5cdFx0XHRcdFx0XHRcdGDCsSR7Z2V0TWVzc2FnZSgnbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJywgY2hhbmdlZFswXS5mcm9tKX1gO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzaG9ydFN1bW1hcnlbc2hvcnRTdW1tYXJ5Lmxlbmd0aF0gPVxuXHRcdFx0XHRcdFx0XHRgwrEke2dldE1lc3NhZ2UoJ21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsIGNoYW5nZWRbMF0uZnJvbSl9JHthcnJvd30ke2dldE1lc3NhZ2UoXG5cdFx0XHRcdFx0XHRcdFx0J21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsXG5cdFx0XHRcdFx0XHRcdFx0Y2hhbmdlZFswXS50b1xuXHRcdFx0XHRcdFx0XHQpfWA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKGNoYW5nZWQubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHNob3J0U3VtbWFyeVtzaG9ydFN1bW1hcnkubGVuZ3RoXSA9IGDCsSAke211bHRpQ2hhbmdlTXNnKGNoYW5nZWQubGVuZ3RoKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChzdW1tYXJ5Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRzdW1tYXJ5ID0gc3VtbWFyeS5qb2luKGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXNlcGFyYXRvcicpKTtcblx0XHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0XHRzdW1tYXJ5Lmxlbmd0aCA+XG5cdFx0XHRcdFx0XHQyMDAgLVxuXHRcdFx0XHRcdFx0XHQoSEMuY2hhbmdlVGFnID8gJycgOiBnZXRNZXNzYWdlKCdtZXNzYWdlcy1wcmVmaXgnKSkubGVuZ3RoIC1cblx0XHRcdFx0XHRcdFx0KEhDLmNoYW5nZVRhZyA/ICcnIDogZ2V0TWVzc2FnZSgnbWVzc2FnZXMtdXNpbmcnKSkubGVuZ3RoXG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRzdW1tYXJ5ID0gc2hvcnRTdW1tYXJ5LmpvaW4oZ2V0TWVzc2FnZSgnbWVzc2FnZXMtc2VwYXJhdG9yJykpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb21taXRGb3JtLndwU3VtbWFyeS52YWx1ZSA9XG5cdFx0XHRcdFx0XHQoSEMuY2hhbmdlVGFnID8gJycgOiBnZXRNZXNzYWdlKCdtZXNzYWdlcy1wcmVmaXgnKSkgK1xuXHRcdFx0XHRcdFx0c3VtbWFyeSArXG5cdFx0XHRcdFx0XHQoSEMuY2hhbmdlVGFnID8gJycgOiBnZXRNZXNzYWdlKCdtZXNzYWdlcy11c2luZycpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRjb21taXRGb3JtLndwVGV4dGJveDEudmFsdWUgPSByZXN1bHQudGV4dDtcblx0XHRjb21taXRGb3JtLndwU3RhcnR0aW1lLnZhbHVlID0gc2VydmVyVGltZSB8fCBjdXJyZW50VGltZXN0YW1wKCk7XG5cdFx0Y29tbWl0Rm9ybS53cEVkaXR0aW1lLnZhbHVlID0gcGFnZVRpbWUgfHwgY29tbWl0Rm9ybS53cFN0YXJ0dGltZS52YWx1ZTtcblx0XHRpZiAoc2VsZkVkaXRDb25mbGljdCkge1xuXHRcdFx0Y29tbWl0Rm9ybS5vbGRpZC52YWx1ZSA9IFN0cmluZyhwYWdlVGV4dFJldklkIHx8IGNvbmYud2dDdXJSZXZpc2lvbklkKTtcblx0XHR9XG5cdFx0Ly8gU3VibWl0IHRoZSBmb3JtIGluIGEgd2F5IHRoYXQgdHJpZ2dlcnMgb25zdWJtaXQgZXZlbnRzOiBjb21taXRGb3JtLnN1Ym1pdCgpIGRvZXNuJ3QuXG5cdFx0Y29tbWl0Rm9ybS5oY0NvbW1pdC5jbGljaygpO1xuXHR9O1xuXHRjb25zdCByZXNvbHZlT25lID0gKHBhZ2UsIHRvUmVzb2x2ZSkgPT4ge1xuXHRcdGNvbnN0IGNhdHMgPSBwYWdlLmNhdGVnb3JpZXM7XG5cdFx0Y29uc3Qge2xpbmtzfSA9IHBhZ2U7XG5cdFx0bGV0IGlzX2RhYiA9IGZhbHNlOyAvLyBIYXJkIHJlZGlyZWN0P1xuXHRcdGxldCBpc19yZWRpciA9IHR5cGVvZiBwYWdlLnJlZGlyZWN0ID09PSAnc3RyaW5nJztcblx0XHRsZXQgaTtcblx0XHRjb25zdCBpc19oaWRkZW4gPSBwYWdlLmNhdGVnb3J5aW5mbyAmJiB0eXBlb2YgcGFnZS5jYXRlZ29yeWluZm8uaGlkZGVuID09PSAnc3RyaW5nJztcblx0XHRjb25zdCBpc19taXNzaW5nID0gdHlwZW9mIHBhZ2UubWlzc2luZyA9PT0gJ3N0cmluZyc7XG5cdFx0Zm9yIChpID0gMDsgaSA8IHRvUmVzb2x2ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGkgJiYgdG9SZXNvbHZlW2ldLmRhYklucHV0Q2xlYW5lZCAhPT0gcGFnZS50aXRsZS5zbGljZShNYXRoLm1heCgwLCBwYWdlLnRpdGxlLmluZGV4T2YoJzonKSArIDEpKSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdC8vIE5vdGU6IHRoZSBzZXJ2ZXIgcmV0dXJucyBpbiBwYWdlIGFuIE5GQyBub3JtYWxpemVkIFVuaWNvZGUgdGl0bGUuIElmIG91ciBpbnB1dCB3YXMgbm90IE5GQyBub3JtYWxpemVkLCB3ZSBtYXkgbm90IGZpbmRcblx0XHRcdC8vIGFueSBlbnRyeSBoZXJlLiBJZiB3ZSBoYXZlIG9ubHkgb25lIGVkaXRvciB0byByZXNvbHZlICh0aGUgbW9zdCBjb21tb24gY2FzZSwgSSBwcmVzdW1lKSwgd2UgbWF5IHNpbXBseSBza2lwIHRoZSBjaGVjay5cblx0XHRcdHRvUmVzb2x2ZVtpXS5jdXJyZW50SGlkZGVuID0gaXNfaGlkZGVuO1xuXHRcdFx0dG9SZXNvbHZlW2ldLmlucHV0RXhpc3RzID0gIWlzX21pc3Npbmc7XG5cdFx0XHR0b1Jlc29sdmVbaV0uaWNvbi5zcmMgPSBpc19taXNzaW5nID8gSEMuZXhpc3RzTm8gOiBIQy5leGlzdHNZZXM7XG5cdFx0fVxuXHRcdGlmIChpc19taXNzaW5nKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICghaXNfcmVkaXIgJiYgY2F0cyAmJiAoZ2V0TWVzc2FnZSgnZGlzYW1iaWdfY2F0ZWdvcnknKSB8fCBnZXRNZXNzYWdlKCdyZWRpcl9jYXRlZ29yeScpKSkge1xuXHRcdFx0Zm9yIChjb25zdCBjYXRfIG9mIGNhdHMpIHtcblx0XHRcdFx0bGV0IGNhdCA9IGNhdF8udGl0bGU7XG5cdFx0XHRcdC8vIFN0cmlwIG5hbWVzcGFjZSBwcmVmaXhcblx0XHRcdFx0aWYgKGNhdCkge1xuXHRcdFx0XHRcdGNhdCA9IGNhdC5zbGljZShNYXRoLm1heCgwLCBjYXQuaW5kZXhPZignOicpICsgMSkpLnJlcGxhY2UoL18vZywgJyAnKTtcblx0XHRcdFx0XHRpZiAoY2F0ID09PSBnZXRNZXNzYWdlKCdkaXNhbWJpZ19jYXRlZ29yeScpKSB7XG5cdFx0XHRcdFx0XHRpc19kYWIgPSB0cnVlO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChjYXQgPT09IGdldE1lc3NhZ2UoJ3JlZGlyX2NhdGVnb3J5JykpIHtcblx0XHRcdFx0XHRcdGlzX3JlZGlyID0gdHJ1ZTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoIWlzX3JlZGlyICYmICFpc19kYWIpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKCFsaW5rcyB8fCBsaW5rcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgdGl0bGVzID0gW107XG5cdFx0Zm9yIChpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdC8vIENhdGVnb3J5IG5hbWVzcGFjZSAtLSBhbHdheXMgdHJ1ZSBzaW5jZSB3ZSBhc2sgb25seSBmb3IgdGhlIGNhdGVnb3J5IGxpbmtzXG5cdFx0XHRcdGxpbmtzW2ldLm5zID09PSAxNCAmJlxuXHRcdFx0XHQvLyBOYW1lIG5vdCBlbXB0eVxuXHRcdFx0XHRsaW5rc1tpXS50aXRsZSAmJlxuXHRcdFx0XHRsaW5rc1tpXS50aXRsZS5sZW5ndGggPiAwXG5cdFx0XHQpIHtcblx0XHRcdFx0Ly8gSW50ZXJuYWwgbGluayB0byBleGlzdGluZyB0aGluZ3kuIEV4dHJhY3QgdGhlIHBhZ2UgbmFtZSBhbmQgcmVtb3ZlIHRoZSBuYW1lc3BhY2UuXG5cdFx0XHRcdGxldCBtYXRjaCA9IGxpbmtzW2ldLnRpdGxlO1xuXHRcdFx0XHRtYXRjaCA9IG1hdGNoLnNsaWNlKE1hdGgubWF4KDAsIG1hdGNoLmluZGV4T2YoJzonKSArIDEpKTtcblx0XHRcdFx0Ly8gRXhjbHVkZSBibGFja2xpc3RlZCBjYXRlZ29yaWVzLlxuXHRcdFx0XHRpZiAoIUhDLmJsYWNrbGlzdCB8fCAhSEMuYmxhY2tsaXN0LnRlc3QobWF0Y2gpKSB7XG5cdFx0XHRcdFx0dGl0bGVzW3RpdGxlcy5sZW5ndGhdID0gbWF0Y2g7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHRpdGxlcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Zm9yIChpID0gMDsgaSA8IHRvUmVzb2x2ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGkgJiYgdG9SZXNvbHZlW2ldLmRhYklucHV0Q2xlYW5lZCAhPT0gcGFnZS50aXRsZS5zbGljZShNYXRoLm1heCgwLCBwYWdlLnRpdGxlLmluZGV4T2YoJzonKSArIDEpKSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHRvUmVzb2x2ZVtpXS5pbnB1dEV4aXN0cyA9IHRydWU7IC8vIE1pZ2h0IGFjdHVhbGx5IGJlIHdyb25nIGlmIGl0J3MgYSByZWRpcmVjdCBwb2ludGluZyB0byBhIG5vbi1leGlzdGluZyBjYXRlZ29yeVxuXHRcdFx0dG9SZXNvbHZlW2ldLmljb24uc3JjID0gSEMuZXhpc3RzWWVzO1xuXHRcdFx0aWYgKHRpdGxlcy5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdHRvUmVzb2x2ZVtpXS5kYWIgPSB0aXRsZXM7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0b1Jlc29sdmVbaV0udGV4dC52YWx1ZSA9XG5cdFx0XHRcdFx0dGl0bGVzWzBdICsgKHRvUmVzb2x2ZVtpXS5jdXJyZW50S2V5ID09PSBudWxsID8gJycgOiBgfCR7dG9SZXNvbHZlW2ldLmN1cnJlbnRLZXl9YCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRjb25zdCByZXNvbHZlUmVkaXJlY3RzID0gKHRvUmVzb2x2ZSwgcGFyYW1zKSA9PiB7XG5cdFx0aWYgKCFwYXJhbXMgfHwgIXBhcmFtcy5xdWVyeSB8fCAhcGFyYW1zLnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGZvciAoY29uc3QgcCBpbiBwYXJhbXMucXVlcnkucGFnZXMpIHtcblx0XHRcdGlmICghT2JqZWN0Lmhhc093bihwYXJhbXMucXVlcnkucGFnZXMsIHApKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0cmVzb2x2ZU9uZShwYXJhbXMucXVlcnkucGFnZXNbcF0sIHRvUmVzb2x2ZSk7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCByZXNvbHZlTXVsdGkgPSAodG9SZXNvbHZlLCBjYWxsYmFjaykgPT4ge1xuXHRcdGxldCBpO1xuXHRcdGZvciAoaSA9IDA7IGkgPCB0b1Jlc29sdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHRvUmVzb2x2ZVtpXS5kYWIgPSBudWxsO1xuXHRcdFx0dG9SZXNvbHZlW2ldLmRhYklucHV0ID0gdG9SZXNvbHZlW2ldLmxhc3RJbnB1dDtcblx0XHR9XG5cdFx0aWYgKG5vU3VnZ2VzdGlvbnMpIHtcblx0XHRcdGNhbGxiYWNrKHRvUmVzb2x2ZSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0cHJvcDogJ2luZm98bGlua3N8Y2F0ZWdvcmllc3xjYXRlZ29yeWluZm8nLFxuXHRcdFx0cGxuYW1lc3BhY2U6ICcxNCcsXG5cdFx0XHRwbGxpbWl0OiB0b1Jlc29sdmUubGVuZ3RoICogMTAsXG5cdFx0XHRjbGxpbWl0OiB0b1Jlc29sdmUubGVuZ3RoICogMTAsXG5cdFx0fTtcblx0XHRjb25zdCB0aXRsZXMgPSBbXTtcblx0XHRmb3IgKGkgPSAwOyBpIDwgdG9SZXNvbHZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgdiA9IHRvUmVzb2x2ZVtpXS5kYWJJbnB1dDtcblx0XHRcdHYgPSByZXBsYWNlU2hvcnRjdXRzKHYsIEhDLnNob3J0Y3V0cyk7XG5cdFx0XHR0b1Jlc29sdmVbaV0uZGFiSW5wdXRDbGVhbmVkID0gdjtcblx0XHRcdHRpdGxlc1t0aXRsZXMubGVuZ3RoXSA9IGBDYXRlZ29yeToke3Z9YDtcblx0XHR9XG5cdFx0cGFyYW1zLnRpdGxlcyA9IHRpdGxlcy5qb2luKCd8Jyk7XG5cdFx0YXBpLmdldChwYXJhbXMpXG5cdFx0XHQuZG9uZSgoanNvbikgPT4ge1xuXHRcdFx0XHRyZXNvbHZlUmVkaXJlY3RzKHRvUmVzb2x2ZSwganNvbik7XG5cdFx0XHRcdGNhbGxiYWNrKHRvUmVzb2x2ZSk7XG5cdFx0XHR9KVxuXHRcdFx0LmZhaWwoKHJlcSkgPT4ge1xuXHRcdFx0XHRpZiAoIXJlcSkge1xuXHRcdFx0XHRcdG5vU3VnZ2VzdGlvbnMgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNhbGxiYWNrKHRvUmVzb2x2ZSk7XG5cdFx0XHR9KTtcblx0fTtcblx0Y29uc3QgbWFrZUFjdGl2ZSA9ICh3aGljaCkgPT4ge1xuXHRcdGlmICh3aGljaC5pc19hY3RpdmUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Zm9yIChjb25zdCBlZGl0b3Igb2YgZWRpdG9ycykge1xuXHRcdFx0aWYgKGVkaXRvciAhPT0gd2hpY2gpIHtcblx0XHRcdFx0ZWRpdG9yLmluYWN0aXZhdGUoKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0d2hpY2guaXNfYWN0aXZlID0gdHJ1ZTtcblx0XHRpZiAod2hpY2guZGFiKSB7XG5cdFx0XHRzaG93RGFiKHdoaWNoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gQ2hlY2sgZm9yIHByb2dyYW1tYXRpYyB2YWx1ZSBjaGFuZ2VzLlxuXHRcdFx0Y29uc3QgZXhwZWN0ZWRJbnB1dCA9IHdoaWNoLmxhc3RSZWFsSW5wdXQgfHwgd2hpY2gubGFzdElucHV0IHx8ICcnO1xuXHRcdFx0Y29uc3QgYWN0dWFsVmFsdWUgPSB3aGljaC50ZXh0LnZhbHVlIHx8ICcnO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHQoZXhwZWN0ZWRJbnB1dC5sZW5ndGggPT09IDAgJiYgYWN0dWFsVmFsdWUubGVuZ3RoID4gMCkgfHxcblx0XHRcdFx0KGV4cGVjdGVkSW5wdXQubGVuZ3RoID4gMCAmJiBhY3R1YWxWYWx1ZS5pbmRleE9mKGV4cGVjdGVkSW5wdXQpKVxuXHRcdFx0KSB7XG5cdFx0XHRcdC8vIFNvbWVob3cgdGhlIGZpZWxkJ3MgdmFsdWUgYXBwZWFycyB0byBoYXZlIGNoYW5nZWQsIGFuZCB3aGljaC5sYXN0U2VsZWN0aW9uIHRoZXJlZm9yZSBpcyBubyBsb25nZXIgdmFsaWQuIFRyeSB0byBzZXQgdGhlXG5cdFx0XHRcdC8vIGN1cnNvciBhdCB0aGUgZW5kIG9mIHRoZSBjYXRlZ29yeSwgYW5kIGRvIG5vdCBkaXNwbGF5IHRoZSBvbGQgc3VnZ2VzdGlvbiBsaXN0LlxuXHRcdFx0XHR3aGljaC5zaG93c0xpc3QgPSBmYWxzZTtcblx0XHRcdFx0Y29uc3QgdiA9IGFjdHVhbFZhbHVlLnNwbGl0KCd8Jyk7XG5cdFx0XHRcdFt3aGljaC5sYXN0SW5wdXRdID0gdjtcblx0XHRcdFx0d2hpY2gubGFzdFJlYWxJbnB1dCA9IHdoaWNoLmxhc3RJbnB1dDtcblx0XHRcdFx0aWYgKHYubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdFssIHdoaWNoLmN1cnJlbnRLZXldID0gdjtcblx0XHRcdFx0fVxuXHRcdFx0XHR3aGljaC5sYXN0U2VsZWN0aW9uICYmPSB7XG5cdFx0XHRcdFx0c3RhcnQ6IHZbMF0ubGVuZ3RoLFxuXHRcdFx0XHRcdGVuZDogdlswXS5sZW5ndGgsXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAod2hpY2guc2hvd3NMaXN0KSB7XG5cdFx0XHRcdHdoaWNoLmRpc3BsYXlMaXN0KCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAod2hpY2gubGFzdFNlbGVjdGlvbikge1xuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHR3aGljaC5zZXRTZWxlY3Rpb24od2hpY2gubGFzdFNlbGVjdGlvbi5zdGFydCwgd2hpY2gubGFzdFNlbGVjdGlvbi5lbmQpO1xuXHRcdFx0XHR9LCAwKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdGNvbnN0IHNob3dEYWIgPSAod2hpY2gpID0+IHtcblx0XHRpZiAod2hpY2guaXNfYWN0aXZlKSB7XG5cdFx0XHR3aGljaC5zaG93U3VnZ2VzdGlvbnMod2hpY2guZGFiLCBmYWxzZSwgbnVsbCwgbnVsbCk7IC8vIGRvIGF1dG9jb21wbGV0aW9uLCBubyBrZXksIG5vIGVuZ2luZSBzZWxlY3RvclxuXHRcdFx0d2hpY2guZGFiID0gbnVsbDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWFrZUFjdGl2ZSh3aGljaCk7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBtdWx0aVN1Ym1pdCA9ICgpID0+IHtcblx0XHRjb25zdCB0b1Jlc29sdmUgPSBbXTtcblx0XHRmb3IgKGNvbnN0IGVkaXRvciBvZiBlZGl0b3JzKSB7XG5cdFx0XHRpZiAoZWRpdG9yLnN0YXRlID09PSBDSEFOR0VfUEVORElORyB8fCBlZGl0b3Iuc3RhdGUgPT09IE9QRU4pIHtcblx0XHRcdFx0dG9SZXNvbHZlW3RvUmVzb2x2ZS5sZW5ndGhdID0gZWRpdG9yO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAodG9SZXNvbHZlLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0aW5pdGlhdGVFZGl0KFxuXHRcdFx0XHQoZmFpbHVyZSkgPT4ge1xuXHRcdFx0XHRcdHBlcmZvcm1DaGFuZ2VzKGZhaWx1cmUpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQobXNnKSA9PiB7XG5cdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkobXNnLCB7dGFnOiAnaG90Q2F0J30pO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRyZXNvbHZlTXVsdGkodG9SZXNvbHZlLCAocmVzb2x2ZWQpID0+IHtcblx0XHRcdGxldCBmaXJzdERhYiA9IG51bGw7XG5cdFx0XHRsZXQgZG9udENoYW5nZSA9IGZhbHNlO1xuXHRcdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIHJlc29sdmVkKSB7XG5cdFx0XHRcdGlmIChlbGVtZW50Lmxhc3RJbnB1dCA9PT0gZWxlbWVudC5kYWJJbnB1dCkge1xuXHRcdFx0XHRcdGlmIChlbGVtZW50LmRhYikge1xuXHRcdFx0XHRcdFx0Zmlyc3REYWIgfHw9IGVsZW1lbnQ7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChlbGVtZW50LmFjY2VwdENoZWNrKHRydWUpKSB7XG5cdFx0XHRcdFx0XHRlbGVtZW50LmNvbW1pdCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBXZSBkaWRuJ3QgZGlzYWJsZSBhbGwgdGhlIG9wZW4gZWRpdG9ycywgYnV0IHdlIGRpZCBhc3luY2hyb25vdXMgY2FsbHMuIEl0IGlzXG5cdFx0XHRcdFx0Ly8gdGhlb3JldGljYWxseSBwb3NzaWJsZSB0aGF0IHRoZSB1c2VyIGNoYW5nZWQgc29tZXRoaW5nLi4uXG5cdFx0XHRcdFx0ZG9udENoYW5nZSA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChmaXJzdERhYikge1xuXHRcdFx0XHRzaG93RGFiKGZpcnN0RGFiKTtcblx0XHRcdH0gZWxzZSBpZiAoIWRvbnRDaGFuZ2UpIHtcblx0XHRcdFx0aW5pdGlhdGVFZGl0KFxuXHRcdFx0XHRcdChmYWlsdXJlKSA9PiB7XG5cdFx0XHRcdFx0XHRwZXJmb3JtQ2hhbmdlcyhmYWlsdXJlKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdChtc2cpID0+IHtcblx0XHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KG1zZywge3RhZzogJ2hvdENhdCd9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cdGNvbnN0IHNldE11bHRpSW5wdXQgPSAoKSA9PiB7XG5cdFx0aWYgKGNvbW1pdEJ1dHRvbiB8fCBvblVwbG9hZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb21taXRCdXR0b24gPSBtYWtlKCdpbnB1dCcpO1xuXHRcdGNvbW1pdEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG5cdFx0Y29tbWl0QnV0dG9uLnZhbHVlID0gZ2V0TWVzc2FnZSgnbWVzc2FnZXMtY29tbWl0Jyk7XG5cdFx0Y29tbWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbXVsdGlTdWJtaXQpO1xuXHRcdGlmIChtdWx0aVNwYW4pIHtcblx0XHRcdG11bHRpU3Bhbi5yZXBsYWNlV2l0aChjb21taXRCdXR0b24pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjYXRMaW5lLmFwcGVuZChjb21taXRCdXR0b24pO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgY2hlY2tNdWx0aUlucHV0ID0gKCkgPT4ge1xuXHRcdGlmICghY29tbWl0QnV0dG9uKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGxldCBoYXNDaGFuZ2VzID0gZmFsc2U7XG5cdFx0Zm9yIChjb25zdCBlZGl0b3Igb2YgZWRpdG9ycykge1xuXHRcdFx0aWYgKGVkaXRvci5zdGF0ZSAhPT0gVU5DSEFOR0VEKSB7XG5cdFx0XHRcdGhhc0NoYW5nZXMgPSB0cnVlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0Y29tbWl0QnV0dG9uLmRpc2FibGVkID0gIWhhc0NoYW5nZXM7XG5cdH07XG5cdGNvbnN0IHN1Z2dlc3Rpb25FbmdpbmVzID0ge1xuXHRcdG9wZW5zZWFyY2g6IHtcblx0XHRcdHVyaTogYCR7bXcuY29uZmlnLmdldChcblx0XHRcdFx0J3dnU2NyaXB0UGF0aCdcblx0XHRcdCl9L2FwaS5waHA/Zm9ybWF0PWpzb24mYWN0aW9uPW9wZW5zZWFyY2gmbmFtZXNwYWNlPTE0JmxpbWl0PTMwJnNlYXJjaD1DYXRlZ29yeTokMWAsXG5cdFx0XHQvLyAkMSA9IHNlYXJjaCB0ZXJtXG5cdFx0XHQvLyBGdW5jdGlvbiB0byBjb252ZXJ0IHJlc3VsdCBvZiB1cmkgaW50byBhbiBhcnJheSBvZiBjYXRlZ29yeSBuYW1lc1xuXHRcdFx0aGFuZGxlcjogKHF1ZXJ5UmVzdWx0LCBxdWVyeUtleSkgPT4ge1xuXHRcdFx0XHRpZiAocXVlcnlSZXN1bHQgJiYgcXVlcnlSZXN1bHQubGVuZ3RoID49IDIpIHtcblx0XHRcdFx0XHRjb25zdCBrZXkgPSBxdWVyeVJlc3VsdFswXS5zbGljZShNYXRoLm1heCgwLCBxdWVyeVJlc3VsdFswXS5pbmRleE9mKCc6JykgKyAxKSk7XG5cdFx0XHRcdFx0Y29uc3QgWywgdGl0bGVzXSA9IHF1ZXJ5UmVzdWx0O1xuXHRcdFx0XHRcdGxldCBleGlzdHMgPSBmYWxzZTtcblx0XHRcdFx0XHRjYXRfcHJlZml4IHx8PSBuZXcgUmVnRXhwKGBeKCR7SEMuY2F0ZWdvcnlfcmVnZXhwfSk6YCk7XG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aXRsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdGNhdF9wcmVmaXgubGFzdEluZGV4ID0gMDtcblx0XHRcdFx0XHRcdGNvbnN0IG0gPSBjYXRfcHJlZml4LmV4ZWModGl0bGVzW2ldKTtcblx0XHRcdFx0XHRcdGlmIChtICYmIG0ubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdFx0XHR0aXRsZXNbaV0gPSB0aXRsZXNbaV0uc2xpY2UoTWF0aC5tYXgoMCwgdGl0bGVzW2ldLmluZGV4T2YoJzonKSArIDEpKTsgLy8gcm0gbmFtZXNwYWNlXG5cdFx0XHRcdFx0XHRcdGlmIChrZXkgPT09IHRpdGxlc1tpXSkge1xuXHRcdFx0XHRcdFx0XHRcdGV4aXN0cyA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHRpdGxlcy5zcGxpY2UoaSwgMSk7IC8vIE5vcGUsIGl0J3Mgbm90IGEgY2F0ZWdvcnkgYWZ0ZXIgYWxsLlxuXHRcdFx0XHRcdFx0XHRpLS07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRpdGxlcy5leGlzdHMgPSBleGlzdHM7XG5cdFx0XHRcdFx0aWYgKHF1ZXJ5S2V5ICE9PSBrZXkpIHtcblx0XHRcdFx0XHRcdHRpdGxlcy5ub3JtYWxpemVkID0ga2V5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBSZW1lbWJlciB0aGUgTkZDIG5vcm1hbGl6ZWQga2V5IHdlIGdvdCBiYWNrIGZyb20gdGhlIHNlcnZlclxuXHRcdFx0XHRcdHJldHVybiB0aXRsZXM7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0aW50ZXJuYWxzZWFyY2g6IHtcblx0XHRcdHVyaTogYCR7bXcuY29uZmlnLmdldChcblx0XHRcdFx0J3dnU2NyaXB0UGF0aCdcblx0XHRcdCl9L2FwaS5waHA/Zm9ybWF0PWpzb24mYWN0aW9uPXF1ZXJ5Jmxpc3Q9YWxscGFnZXMmYXBuYW1lc3BhY2U9MTQmYXBsaW1pdD0zMCZhcGZyb209JDEmYXBwcmVmaXg9JDFgLFxuXHRcdFx0aGFuZGxlcjogKHF1ZXJ5UmVzdWx0KSA9PiB7XG5cdFx0XHRcdGlmIChxdWVyeVJlc3VsdCAmJiBxdWVyeVJlc3VsdC5xdWVyeSAmJiBxdWVyeVJlc3VsdC5xdWVyeS5hbGxwYWdlcykge1xuXHRcdFx0XHRcdGNvbnN0IHRpdGxlcyA9IHF1ZXJ5UmVzdWx0LnF1ZXJ5LmFsbHBhZ2VzO1xuXHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGl0bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHR0aXRsZXNbaV0gPSB0aXRsZXNbaV0udGl0bGUuc2xpY2UoTWF0aC5tYXgoMCwgdGl0bGVzW2ldLnRpdGxlLmluZGV4T2YoJzonKSArIDEpKTtcblx0XHRcdFx0XHR9IC8vIHJtIG5hbWVzcGFjZVxuXHRcdFx0XHRcdHJldHVybiB0aXRsZXM7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0ZXhpc3RzOiB7XG5cdFx0XHR1cmk6IGAke213LmNvbmZpZy5nZXQoJ3dnU2NyaXB0UGF0aCcpfS9hcGkucGhwP2Zvcm1hdD1qc29uJmFjdGlvbj1xdWVyeSZwcm9wPWluZm8mdGl0bGVzPUNhdGVnb3J5OiQxYCxcblx0XHRcdGhhbmRsZXI6IChxdWVyeVJlc3VsdCwgcXVlcnlLZXkpID0+IHtcblx0XHRcdFx0aWYgKHF1ZXJ5UmVzdWx0ICYmIHF1ZXJ5UmVzdWx0LnF1ZXJ5ICYmIHF1ZXJ5UmVzdWx0LnF1ZXJ5LnBhZ2VzICYmICFxdWVyeVJlc3VsdC5xdWVyeS5wYWdlc1stMV0pIHtcblx0XHRcdFx0XHQvLyBTaG91bGQgaGF2ZSBleGFjdGx5IDFcblx0XHRcdFx0XHRmb3IgKGNvbnN0IHAgaW4gcXVlcnlSZXN1bHQucXVlcnkucGFnZXMpIHtcblx0XHRcdFx0XHRcdGlmICghT2JqZWN0Lmhhc093bihxdWVyeVJlc3VsdC5xdWVyeS5wYWdlcywgcCkpIHtcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRsZXQgX3RpdGxlID0gcXVlcnlSZXN1bHQucXVlcnkucGFnZXNbcF0udGl0bGU7XG5cdFx0XHRcdFx0XHRfdGl0bGUgPSBfdGl0bGUuc2xpY2UoTWF0aC5tYXgoMCwgX3RpdGxlLmluZGV4T2YoJzonKSArIDEpKTtcblx0XHRcdFx0XHRcdGNvbnN0IHRpdGxlcyA9IFtfdGl0bGVdO1xuXHRcdFx0XHRcdFx0dGl0bGVzLmV4aXN0cyA9IHRydWU7XG5cdFx0XHRcdFx0XHRpZiAocXVlcnlLZXkgIT09IF90aXRsZSkge1xuXHRcdFx0XHRcdFx0XHR0aXRsZXMubm9ybWFsaXplZCA9IF90aXRsZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC8vIE5GQ1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRpdGxlcztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0c3ViY2F0ZWdvcmllczoge1xuXHRcdFx0dXJpOiBgJHttdy5jb25maWcuZ2V0KFxuXHRcdFx0XHQnd2dTY3JpcHRQYXRoJ1xuXHRcdFx0KX0vYXBpLnBocD9mb3JtYXQ9anNvbiZhY3Rpb249cXVlcnkmbGlzdD1jYXRlZ29yeW1lbWJlcnMmY210eXBlPXN1YmNhdCZjbWxpbWl0PW1heCZjbXRpdGxlPUNhdGVnb3J5OiQxYCxcblx0XHRcdGhhbmRsZXI6IChxdWVyeVJlc3VsdCkgPT4ge1xuXHRcdFx0XHRpZiAocXVlcnlSZXN1bHQgJiYgcXVlcnlSZXN1bHQucXVlcnkgJiYgcXVlcnlSZXN1bHQucXVlcnkuY2F0ZWdvcnltZW1iZXJzKSB7XG5cdFx0XHRcdFx0Y29uc3QgdGl0bGVzID0gcXVlcnlSZXN1bHQucXVlcnkuY2F0ZWdvcnltZW1iZXJzO1xuXHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGl0bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHR0aXRsZXNbaV0gPSB0aXRsZXNbaV0udGl0bGUuc2xpY2UoTWF0aC5tYXgoMCwgdGl0bGVzW2ldLnRpdGxlLmluZGV4T2YoJzonKSArIDEpKTtcblx0XHRcdFx0XHR9IC8vIHJtIG5hbWVzcGFjZVxuXHRcdFx0XHRcdHJldHVybiB0aXRsZXM7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0cGFyZW50Y2F0ZWdvcmllczoge1xuXHRcdFx0dXJpOiBgJHttdy5jb25maWcuZ2V0KFxuXHRcdFx0XHQnd2dTY3JpcHRQYXRoJ1xuXHRcdFx0KX0vYXBpLnBocD9mb3JtYXQ9anNvbiZhY3Rpb249cXVlcnkmcHJvcD1jYXRlZ29yaWVzJnRpdGxlcz1DYXRlZ29yeTokMSZjbGxpbWl0PW1heGAsXG5cdFx0XHRoYW5kbGVyOiAocXVlcnlSZXN1bHQpID0+IHtcblx0XHRcdFx0aWYgKHF1ZXJ5UmVzdWx0ICYmIHF1ZXJ5UmVzdWx0LnF1ZXJ5ICYmIHF1ZXJ5UmVzdWx0LnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBwIGluIHF1ZXJ5UmVzdWx0LnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdFx0XHRpZiAocXVlcnlSZXN1bHQucXVlcnkucGFnZXNbcF0uY2F0ZWdvcmllcykge1xuXHRcdFx0XHRcdFx0XHRjb25zdCB0aXRsZXMgPSBxdWVyeVJlc3VsdC5xdWVyeS5wYWdlc1twXS5jYXRlZ29yaWVzO1xuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRpdGxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0XHRcdHRpdGxlc1tpXSA9IHRpdGxlc1tpXS50aXRsZS5zbGljZShNYXRoLm1heCgwLCB0aXRsZXNbaV0udGl0bGUuaW5kZXhPZignOicpICsgMSkpO1xuXHRcdFx0XHRcdFx0XHR9IC8vIHJtIG5hbWVzcGFjZVxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdGl0bGVzO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH0sXG5cdFx0fSxcblx0fTtcblx0Y29uc3Qgc3VnZ2VzdGlvbkNvbmZpZ3MgPSB7XG5cdFx0c2VhcmNoaW5kZXg6IHtcblx0XHRcdG5hbWU6ICdTZWFyY2ggaW5kZXgnLFxuXHRcdFx0ZW5naW5lczogWydvcGVuc2VhcmNoJ10sXG5cdFx0XHRjYWNoZToge30sXG5cdFx0XHRzaG93OiB0cnVlLFxuXHRcdFx0dGVtcDogZmFsc2UsXG5cdFx0XHRub0NvbXBsZXRpb246IGZhbHNlLFxuXHRcdH0sXG5cdFx0cGFnZWxpc3Q6IHtcblx0XHRcdG5hbWU6ICdQYWdlIGxpc3QnLFxuXHRcdFx0ZW5naW5lczogWydpbnRlcm5hbHNlYXJjaCcsICdleGlzdHMnXSxcblx0XHRcdGNhY2hlOiB7fSxcblx0XHRcdHNob3c6IHRydWUsXG5cdFx0XHR0ZW1wOiBmYWxzZSxcblx0XHRcdG5vQ29tcGxldGlvbjogZmFsc2UsXG5cdFx0fSxcblx0XHRjb21iaW5lZDoge1xuXHRcdFx0bmFtZTogJ0NvbWJpbmVkIHNlYXJjaCcsXG5cdFx0XHRlbmdpbmVzOiBbJ29wZW5zZWFyY2gnLCAnaW50ZXJuYWxzZWFyY2gnXSxcblx0XHRcdGNhY2hlOiB7fSxcblx0XHRcdHNob3c6IHRydWUsXG5cdFx0XHR0ZW1wOiBmYWxzZSxcblx0XHRcdG5vQ29tcGxldGlvbjogZmFsc2UsXG5cdFx0fSxcblx0XHRzdWJjYXQ6IHtcblx0XHRcdG5hbWU6ICdTdWJjYXRlZ29yaWVzJyxcblx0XHRcdGVuZ2luZXM6IFsnc3ViY2F0ZWdvcmllcyddLFxuXHRcdFx0Y2FjaGU6IHt9LFxuXHRcdFx0c2hvdzogdHJ1ZSxcblx0XHRcdHRlbXA6IHRydWUsXG5cdFx0XHRub0NvbXBsZXRpb246IHRydWUsXG5cdFx0fSxcblx0XHRwYXJlbnRjYXQ6IHtcblx0XHRcdG5hbWU6ICdQYXJlbnQgY2F0ZWdvcmllcycsXG5cdFx0XHRlbmdpbmVzOiBbJ3BhcmVudGNhdGVnb3JpZXMnXSxcblx0XHRcdGNhY2hlOiB7fSxcblx0XHRcdHNob3c6IHRydWUsXG5cdFx0XHR0ZW1wOiB0cnVlLFxuXHRcdFx0bm9Db21wbGV0aW9uOiB0cnVlLFxuXHRcdH0sXG5cdH07XG5cdC8vIEV2ZW50IGtleUNvZGVzIHRoYXQgd2UgaGFuZGxlIGluIHRoZSB0ZXh0IGlucHV0IGZpZWxkL3N1Z2dlc3Rpb24gbGlzdC5cblx0Y29uc3QgQlMgPSA4O1xuXHRjb25zdCBUQUIgPSA5O1xuXHRjb25zdCBSRVQgPSAxMztcblx0Y29uc3QgRVNDID0gMjc7XG5cdGNvbnN0IFNQQUNFID0gMzI7XG5cdGNvbnN0IFBHVVAgPSAzMztcblx0Y29uc3QgUEdET1dOID0gMzQ7XG5cdGNvbnN0IFVQID0gMzg7XG5cdGNvbnN0IERPV04gPSA0MDtcblx0Y29uc3QgREVMID0gNDY7XG5cdGNvbnN0IElNRSA9IDIyOTtcblx0Y2xhc3MgQ2F0ZWdvcnlFZGl0b3Ige1xuXHRcdGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcblx0XHRcdHRoaXMuaW5pdGlhbGl6ZSguLi5hcmdzKTtcblx0XHR9XG5cdFx0aXNDb21wb3NpdGlvblN0YXJ0ID0gZmFsc2U7XG5cdFx0aW5pdGlhbGl6ZShsaW5lLCBzcGFuLCBhZnRlciwga2V5LCBpc19oaWRkZW4pIHtcblx0XHRcdC8vIElmIGEgc3BhbiBpcyBnaXZlbiwgJ2FmdGVyJyBpcyB0aGUgY2F0ZWdvcnkgdGl0bGUsIG90aGVyd2lzZSBpdCBtYXkgYmUgYW4gZWxlbWVudCBhZnRlciB3aGljaCB0b1xuXHRcdFx0Ly8gaW5zZXJ0IHRoZSBuZXcgc3Bhbi4gJ2tleScgaXMgbGlrZXdpc2Ugb3ZlcmxvYWRlZDsgaWYgYSBzcGFuIGlzIGdpdmVuLCBpdCBpcyB0aGUgY2F0ZWdvcnkga2V5IChpZlxuXHRcdFx0Ly8ga25vd24pLCBvdGhlcndpc2UgaXQgaXMgYSBib29sZWFuIGluZGljYXRpbmcgd2hldGhlciBhIGJhciBzaGFsbCBiZSBwcmVwZW5kZWQuXG5cdFx0XHRpZiAoc3Bhbikge1xuXHRcdFx0XHRpZiAoaXNfcnRsKSB7XG5cdFx0XHRcdFx0c3Bhbi5kaXIgPSAncnRsJztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmlzQWRkQ2F0ZWdvcnkgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5jYXRMaW5rID0gc3Bhbi5maXJzdENoaWxkO1xuXHRcdFx0XHR0aGlzLm9yaWdpbmFsQ2F0ZWdvcnkgPSBhZnRlcjtcblx0XHRcdFx0dGhpcy5vcmlnaW5hbEtleSA9IGtleSAmJiBrZXkubGVuZ3RoID4gMSA/IGtleS5zbGljZSgxKSA6IG51bGw7IC8vID4gMSBiZWNhdXNlIGl0IGluY2x1ZGVzIHRoZSBsZWFkaW5nIGJhclxuXHRcdFx0XHR0aGlzLm9yaWdpbmFsRXhpc3RzID0gIWhhc0NsYXNzKHRoaXMuY2F0TGluaywgJ25ldycpO1xuXHRcdFx0XHQvLyBDcmVhdGUgY2hhbmdlIGFuZCBkZWwgbGlua3Ncblx0XHRcdFx0dGhpcy5tYWtlTGlua1NwYW4oKTtcblx0XHRcdFx0aWYgKCF0aGlzLm9yaWdpbmFsRXhpc3RzICYmIHRoaXMudXBEb3duTGlua3MpIHtcblx0XHRcdFx0XHR0aGlzLnVwRG93bkxpbmtzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3Bhbi5hcHBlbmQodGhpcy5saW5rU3Bhbik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmlzQWRkQ2F0ZWdvcnkgPSB0cnVlO1xuXHRcdFx0XHQvLyBDcmVhdGUgYWRkIHNwYW4gYW5kIGFwcGVuZCB0byBjYXRMaW5rc1xuXHRcdFx0XHR0aGlzLm9yaWdpbmFsQ2F0ZWdvcnkgPSAnJztcblx0XHRcdFx0dGhpcy5vcmlnaW5hbEtleSA9IG51bGw7XG5cdFx0XHRcdHRoaXMub3JpZ2luYWxFeGlzdHMgPSBmYWxzZTtcblx0XHRcdFx0aWYgKCFuZXdET00pIHtcblx0XHRcdFx0XHRzcGFuID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0XHRcdHNwYW4uY2xhc3NOYW1lID0gJ25vcHJpbnQnO1xuXHRcdFx0XHRcdGlmIChrZXkpIHtcblx0XHRcdFx0XHRcdHNwYW4uYXBwZW5kKG1ha2UoJyB8ICcsIHRydWUpKTtcblx0XHRcdFx0XHRcdGlmIChhZnRlcikge1xuXHRcdFx0XHRcdFx0XHRhZnRlci5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzcGFuLCBhZnRlci5uZXh0U2libGluZyk7XG5cdFx0XHRcdFx0XHRcdGFmdGVyID0gYWZ0ZXIubmV4dFNpYmxpbmc7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGxpbmUpIHtcblx0XHRcdFx0XHRcdFx0bGluZS5hcHBlbmQoc3Bhbik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChsaW5lICYmIGxpbmUuZmlyc3RDaGlsZCkge1xuXHRcdFx0XHRcdFx0c3Bhbi5hcHBlbmQobWFrZSgnICcsIHRydWUpKTtcblx0XHRcdFx0XHRcdGxpbmUuYXBwZW5kKHNwYW4pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmxpbmtTcGFuID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0XHR0aGlzLmxpbmtTcGFuLmNsYXNzTmFtZSA9ICdub3ByaW50IG5vcG9wdXBzIGhvdGNhdGxpbmsnO1xuXHRcdFx0XHRjb25zdCBsaW5rID0gbWFrZSgnYScpO1xuXHRcdFx0XHRsaW5rLmhyZWYgPSAnI2NhdGxpbmtzJztcblx0XHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3Blbi5iaW5kKHRoaXMpKTtcblx0XHRcdFx0bGluay5hcHBlbmQobWFrZShIQy5saW5rcy5hZGQsIHRydWUpKTtcblx0XHRcdFx0bGluay50aXRsZSA9IGdldE1lc3NhZ2UoJ3Rvb2x0aXBzLWFkZCcpO1xuXHRcdFx0XHR0aGlzLmxpbmtTcGFuLmFwcGVuZChsaW5rKTtcblx0XHRcdFx0c3BhbiA9IG1ha2UobmV3RE9NID8gJ2xpJyA6ICdzcGFuJyk7XG5cdFx0XHRcdHNwYW4uY2xhc3NOYW1lID0gJ25vcHJpbnQnO1xuXHRcdFx0XHRpZiAoaXNfcnRsKSB7XG5cdFx0XHRcdFx0c3Bhbi5kaXIgPSAncnRsJztcblx0XHRcdFx0fVxuXHRcdFx0XHRzcGFuLmFwcGVuZCh0aGlzLmxpbmtTcGFuKTtcblx0XHRcdFx0aWYgKGFmdGVyKSB7XG5cdFx0XHRcdFx0YWZ0ZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc3BhbiwgYWZ0ZXIubmV4dFNpYmxpbmcpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGxpbmUpIHtcblx0XHRcdFx0XHRsaW5lLmFwcGVuZChzcGFuKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLm5vcm1hbExpbmtzID0gbnVsbDtcblx0XHRcdFx0dGhpcy51bmRlbExpbmsgPSBudWxsO1xuXHRcdFx0XHR0aGlzLmNhdExpbmsgPSBudWxsO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5vcmlnaW5hbEhpZGRlbiA9IGlzX2hpZGRlbjtcblx0XHRcdHRoaXMubGluZSA9IGxpbmU7XG5cdFx0XHR0aGlzLmVuZ2luZSA9IEhDLnN1Z2dlc3Rpb25zO1xuXHRcdFx0dGhpcy5zcGFuID0gc3Bhbjtcblx0XHRcdHRoaXMuY3VycmVudENhdGVnb3J5ID0gdGhpcy5vcmlnaW5hbENhdGVnb3J5O1xuXHRcdFx0dGhpcy5jdXJyZW50RXhpc3RzID0gdGhpcy5vcmlnaW5hbEV4aXN0cztcblx0XHRcdHRoaXMuY3VycmVudEhpZGRlbiA9IHRoaXMub3JpZ2luYWxIaWRkZW47XG5cdFx0XHR0aGlzLmN1cnJlbnRLZXkgPSB0aGlzLm9yaWdpbmFsS2V5O1xuXHRcdFx0dGhpcy5zdGF0ZSA9IFVOQ0hBTkdFRDtcblx0XHRcdHRoaXMubGFzdFNhdmVkU3RhdGUgPSBVTkNIQU5HRUQ7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZENhdGVnb3J5ID0gdGhpcy5vcmlnaW5hbENhdGVnb3J5O1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRLZXkgPSB0aGlzLm9yaWdpbmFsS2V5O1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRFeGlzdHMgPSB0aGlzLm9yaWdpbmFsRXhpc3RzO1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRIaWRkZW4gPSB0aGlzLm9yaWdpbmFsSGlkZGVuO1xuXHRcdFx0aWYgKHRoaXMuY2F0TGluayAmJiB0aGlzLmN1cnJlbnRLZXkpIHtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLnRpdGxlID0gdGhpcy5jdXJyZW50S2V5O1xuXHRcdFx0fVxuXHRcdFx0ZWRpdG9yc1tlZGl0b3JzLmxlbmd0aF0gPSB0aGlzO1xuXHRcdH1cblx0XHRtYWtlTGlua1NwYW4oKSB7XG5cdFx0XHR0aGlzLm5vcm1hbExpbmtzID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0bGV0IGxpbmsgPSBudWxsO1xuXHRcdFx0aWYgKHRoaXMub3JpZ2luYWxDYXRlZ29yeSAmJiB0aGlzLm9yaWdpbmFsQ2F0ZWdvcnkubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRsaW5rID0gbWFrZSgnYScpO1xuXHRcdFx0XHRsaW5rLmhyZWYgPSAnI2NhdGxpbmtzJztcblx0XHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVtb3ZlLmJpbmQodGhpcykpO1xuXHRcdFx0XHRsaW5rLmFwcGVuZChtYWtlKEhDLmxpbmtzLnJlbW92ZSwgdHJ1ZSkpO1xuXHRcdFx0XHRsaW5rLnRpdGxlID0gZ2V0TWVzc2FnZSgndG9vbHRpcHMtcmVtb3ZlJyk7XG5cdFx0XHRcdHRoaXMubm9ybWFsTGlua3MuYXBwZW5kKG1ha2UoJyAnLCB0cnVlKSk7XG5cdFx0XHRcdHRoaXMubm9ybWFsTGlua3MuYXBwZW5kKGxpbmspO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFIQy50ZW1wbGF0ZV9jYXRlZ29yaWVzW3RoaXMub3JpZ2luYWxDYXRlZ29yeV0pIHtcblx0XHRcdFx0bGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdFx0bGluay5ocmVmID0gJyNjYXRsaW5rcyc7XG5cdFx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW4uYmluZCh0aGlzKSk7XG5cdFx0XHRcdGxpbmsuYXBwZW5kKG1ha2UoSEMubGlua3MuY2hhbmdlLCB0cnVlKSk7XG5cdFx0XHRcdGxpbmsudGl0bGUgPSBnZXRNZXNzYWdlKCd0b29sdGlwcy1jaGFuZ2UnKTtcblx0XHRcdFx0dGhpcy5ub3JtYWxMaW5rcy5hcHBlbmQobWFrZSgnICcsIHRydWUpKTtcblx0XHRcdFx0dGhpcy5ub3JtYWxMaW5rcy5hcHBlbmQobGluayk7XG5cdFx0XHRcdGlmICghbm9TdWdnZXN0aW9ucyAmJiBIQy51c2VfdXBfZG93bikge1xuXHRcdFx0XHRcdHRoaXMudXBEb3duTGlua3MgPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHRcdFx0bGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdFx0XHRsaW5rLmhyZWYgPSAnI2NhdGxpbmtzJztcblx0XHRcdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kb3duLmJpbmQodGhpcykpO1xuXHRcdFx0XHRcdGxpbmsuYXBwZW5kKG1ha2UoSEMubGlua3MuZG93biwgdHJ1ZSkpO1xuXHRcdFx0XHRcdGxpbmsudGl0bGUgPSBnZXRNZXNzYWdlKCd0b29sdGlwcy1kb3duJyk7XG5cdFx0XHRcdFx0dGhpcy51cERvd25MaW5rcy5hcHBlbmQobWFrZSgnICcsIHRydWUpKTtcblx0XHRcdFx0XHR0aGlzLnVwRG93bkxpbmtzLmFwcGVuZChsaW5rKTtcblx0XHRcdFx0XHRsaW5rID0gbWFrZSgnYScpO1xuXHRcdFx0XHRcdGxpbmsuaHJlZiA9ICcjY2F0bGlua3MnO1xuXHRcdFx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnVwLmJpbmQodGhpcykpO1xuXHRcdFx0XHRcdGxpbmsuYXBwZW5kKG1ha2UoSEMubGlua3MudXAsIHRydWUpKTtcblx0XHRcdFx0XHRsaW5rLnRpdGxlID0gZ2V0TWVzc2FnZSgndG9vbHRpcHMtdXAnKTtcblx0XHRcdFx0XHR0aGlzLnVwRG93bkxpbmtzLmFwcGVuZChtYWtlKCcgJywgdHJ1ZSkpO1xuXHRcdFx0XHRcdHRoaXMudXBEb3duTGlua3MuYXBwZW5kKGxpbmspO1xuXHRcdFx0XHRcdHRoaXMubm9ybWFsTGlua3MuYXBwZW5kKHRoaXMudXBEb3duTGlua3MpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxpbmtTcGFuID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0dGhpcy5saW5rU3Bhbi5jbGFzc05hbWUgPSAnbm9wcmludCBub3BvcHVwcyBob3RjYXRsaW5rJztcblx0XHRcdHRoaXMubGlua1NwYW4uYXBwZW5kKHRoaXMubm9ybWFsTGlua3MpO1xuXHRcdFx0dGhpcy51bmRlbExpbmsgPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHR0aGlzLnVuZGVsTGluay5jbGFzc05hbWUgPSAnbm9wb3B1cHMgaG90Y2F0bGluayc7XG5cdFx0XHR0aGlzLnVuZGVsTGluay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0bGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdGxpbmsuaHJlZiA9ICcjY2F0bGlua3MnO1xuXHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVzdG9yZS5iaW5kKHRoaXMpKTtcblx0XHRcdGxpbmsuYXBwZW5kKG1ha2UoSEMubGlua3MucmVzdG9yZSwgdHJ1ZSkpO1xuXHRcdFx0bGluay50aXRsZSA9IGdldE1lc3NhZ2UoJ3Rvb2x0aXBzLXJlc3RvcmUnKTtcblx0XHRcdHRoaXMudW5kZWxMaW5rLmFwcGVuZChtYWtlKCcgJywgdHJ1ZSkpO1xuXHRcdFx0dGhpcy51bmRlbExpbmsuYXBwZW5kKGxpbmspO1xuXHRcdFx0dGhpcy5saW5rU3Bhbi5hcHBlbmQodGhpcy51bmRlbExpbmspO1xuXHRcdH1cblx0XHRpbnZva2VTdWdnZXN0aW9ucyhkb250X2F1dG9jb21wbGV0ZSkge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHR0aGlzLmVuZ2luZSAmJlxuXHRcdFx0XHRzdWdnZXN0aW9uQ29uZmlnc1t0aGlzLmVuZ2luZV0gJiZcblx0XHRcdFx0c3VnZ2VzdGlvbkNvbmZpZ3NbdGhpcy5lbmdpbmVdLnRlbXAgJiZcblx0XHRcdFx0IWRvbnRfYXV0b2NvbXBsZXRlXG5cdFx0XHQpIHtcblx0XHRcdFx0dGhpcy5lbmdpbmUgPSBIQy5zdWdnZXN0aW9ucztcblx0XHRcdH0gLy8gUmVzZXQgdG8gYSBzZWFyY2ggdXBvbiBpbnB1dFxuXHRcdFx0dGhpcy5zdGF0ZSA9IENIQU5HRV9QRU5ESU5HO1xuXHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0c2VsZi50ZXh0Y2hhbmdlKGRvbnRfYXV0b2NvbXBsZXRlKTtcblx0XHRcdH0sIEhDLnN1Z2dlc3RfZGVsYXkpO1xuXHRcdH1cblx0XHRtYWtlRm9ybSgpIHtcblx0XHRcdGNvbnN0IGZvcm0gPSBtYWtlKCdmb3JtJyk7XG5cdFx0XHRmb3JtLm1ldGhvZCA9ICdQT1NUJztcblx0XHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5hY2NlcHQuYmluZCh0aGlzKSk7XG5cdFx0XHR0aGlzLmZvcm0gPSBmb3JtO1xuXHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHRjb25zdCB0ZXh0ID0gbWFrZSgnaW5wdXQnKTtcblx0XHRcdHRleHQudHlwZSA9ICd0ZXh0Jztcblx0XHRcdHRleHQuc2l6ZSA9IEhDLmVkaXRib3hfd2lkdGg7XG5cdFx0XHRpZiAoIW5vU3VnZ2VzdGlvbnMpIHtcblx0XHRcdFx0Ly8gQmUgY2FyZWZ1bCBoZXJlIHRvIGhhbmRsZSBJTUUgaW5wdXQuIFRoaXMgaXMgYnJvd3Nlci9PUy9JTUUgZGVwZW5kZW50LCBidXQgYmFzaWNhbGx5IHRoZXJlIGFyZSB0d28gbWVjaGFuaXNtczpcblx0XHRcdFx0Ly8gLSBNb2Rlcm4gKERPTSBMZXZlbCAzKSBicm93c2VycyB1c2UgY29tcG9zaXRpb25zdGFydC9jb21wb3NpdGlvbmVuZCBldmVudHMgdG8gc2lnbmFsIGNvbXBvc2l0aW9uOyBpZiB0aGVcblx0XHRcdFx0Ly8gICBjb21wb3NpdGlvbiBpcyBub3QgY2FuY2VsZWQsIHRoZXJlJ2xsIGJlIGEgdGV4dElucHV0IGV2ZW50IGZvbGxvd2luZy4gRHVyaW5nIGEgY29tcG9zaXRpb24ga2V5IGV2ZW50cyBhcmVcblx0XHRcdFx0Ly8gICBlaXRoZXIgYWxsIHN1cHByZXNzZWQgKEZGL0dlY2tvKSwgb3Igb3RoZXJ3aXNlIGhhdmUga2V5RG93biA9PT0gSU1FIGZvciBhbGwga2V5cyAoV2Via2l0KS5cblx0XHRcdFx0Ly8gICAtIFdlYmtpdCBzZW5kcyBhIHRleHRJbnB1dCBmb2xsb3dlZCBieSBrZXlEb3duID09PSBJTUUgYW5kIGEga2V5VXAgd2l0aCB0aGUga2V5IHRoYXQgZW5kZWQgY29tcG9zaXRpb24uXG5cdFx0XHRcdC8vICAgLSBHZWNrbyBkb2Vzbid0IHNlbmQgdGV4dElucHV0IGJ1dCBqdXN0IGEga2V5VXAgd2l0aCB0aGUga2V5IHRoYXQgZW5kZWQgY29tcG9zaXRpb24sIHdpdGhvdXQgc2VuZGluZyBrZXlEb3duXG5cdFx0XHRcdC8vXHQgZmlyc3QuIEdlY2tvIGRvZXNuJ3Qgc2VuZCBhbnkga2V5ZG93biB3aGlsZSBJTUUgaXMgYWN0aXZlLlxuXHRcdFx0XHQvLyAtIE9sZGVyIGJyb3dzZXJzIHNpZ25hbCBjb21wb3NpdGlvbiBieSBrZXlEb3duID09PSBJTUUgZm9yIHRoZSBmaXJzdCBhbmQgc3Vic2VxdWVudCBrZXlzIGZvciBhIGNvbXBvc2l0aW9uLiBUaGVcblx0XHRcdFx0Ly8gICBmaXJzdCBrZXlEb3duICE9PSBJTUUgaXMgY2VydGFpbmx5IGFmdGVyIHRoZSBlbmQgb2YgdGhlIGNvbXBvc2l0aW9uLiBUeXBpY2FsbHksIGNvbXBvc2l0aW9uIGVuZCBjYW4gYWxzbyBiZVxuXHRcdFx0XHQvLyAgIGRldGVjdGVkIGJ5IGEga2V5RG93biBJTUUgd2l0aCBhIGtleVVwIG9mIHNwYWNlLCB0YWIsIGVzY2FwZSwgb3IgcmV0dXJuLlxuXHRcdFx0XHR0ZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0Y29uc3Qga2V5ID0gZXZlbnQua2V5IHx8IDA7XG5cdFx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdFx0c2VsZi5pbWUgJiZcblx0XHRcdFx0XHRcdHNlbGYubGFzdEtleSA9PT0gSU1FICYmXG5cdFx0XHRcdFx0XHQhc2VsZi51c2VzQ29tcG9zaXRpb24gJiZcblx0XHRcdFx0XHRcdChrZXkgPT09IFRBQiB8fCBrZXkgPT09IFJFVCB8fCBrZXkgPT09IEVTQyB8fCBrZXkgPT09IFNQQUNFKVxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0c2VsZi5pbWUgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHNlbGYuaW1lKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGtleSA9PT0gVVAgfHwga2V5ID09PSBET1dOIHx8IGtleSA9PT0gUEdVUCB8fCBrZXkgPT09IFBHRE9XTikge1xuXHRcdFx0XHRcdFx0Ly8gSW4gY2FzZSBhIGJyb3dzZXIgZG9lc24ndCBnZW5lcmF0ZSBrZXlwcmVzcyBldmVudHMgZm9yIGFycm93IGtleXMuLi5cblx0XHRcdFx0XHRcdGlmIChzZWxmLmtleUNvdW50ID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBzZWxmLnByb2Nlc3NLZXkoZXZlbnQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiAoa2V5ID09PSBFU0MgJiYgc2VsZi5sYXN0S2V5ICE9PSBJTUUgJiYgIXNlbGYucmVzZXRLZXlTZWxlY3Rpb24oKSkge1xuXHRcdFx0XHRcdFx0XHQvLyBObyB1bmRvIG9mIGtleSBzZWxlY3Rpb246IHRyZWF0IEVTQyBhcyBcImNhbmNlbFwiLlxuXHRcdFx0XHRcdFx0XHRzZWxmLmNhbmNlbCgpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBBbHNvIGRvIHRoaXMgZm9yIEVTQyBhcyBhIHdvcmthcm91bmQgZm9yIEZpcmVmb3ggYnVnIDUyNDM2MFxuXHRcdFx0XHRcdFx0Ly8ge0BsaW5rIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTUyNDM2MH1cblx0XHRcdFx0XHRcdGlmIChzZWxmLmlzQ29tcG9zaXRpb25TdGFydCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRzZWxmLmludm9rZVN1Z2dlc3Rpb25zKGtleSA9PT0gQlMgfHwga2V5ID09PSBERUwgfHwga2V5ID09PSBFU0MpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRleHQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGtleSA9IGV2ZW50LmtleSB8fCAwO1xuXHRcdFx0XHRcdHNlbGYubGFzdEtleSA9IGtleTtcblx0XHRcdFx0XHRzZWxmLmtleUNvdW50ID0gMDtcblx0XHRcdFx0XHQvLyBET00gTGV2ZWwgPCAzIElNRSBpbnB1dFxuXHRcdFx0XHRcdGlmICghc2VsZi5pbWUgJiYga2V5ID09PSBJTUUgJiYgIXNlbGYudXNlc0NvbXBvc2l0aW9uKSB7XG5cdFx0XHRcdFx0XHQvLyBzZWxmLnVzZXNDb21wb3NpdGlvbiBjYXRjaGVzIGJyb3dzZXJzIHRoYXQgbWF5IGVtaXQgc3B1cmlvdXMga2V5ZG93biBJTUUgYWZ0ZXIgYSBjb21wb3NpdGlvbiBoYXMgZW5kZWRcblx0XHRcdFx0XHRcdHNlbGYuaW1lID0gdHJ1ZTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHRcdFx0c2VsZi5pbWUgJiZcblx0XHRcdFx0XHRcdGtleSAhPT0gSU1FICYmXG5cdFx0XHRcdFx0XHQhKChrZXkgPj0gMTYgJiYga2V5IDw9IDIwKSB8fCAoa2V5ID49IDkxICYmIGtleSA8PSA5MykgfHwga2V5ID09PSAxNDQpXG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHQvLyBJZ25vcmUgY29udHJvbCBrZXlzOiBjdHJsLCBzaGlmdCwgYWx0LCBhbHQgZ3IsIGNhcHMgbG9jaywgd2luZG93cy9hcHBsZSBjbWQga2V5cywgbnVtIGxvY2suIE9ubHkgdGhlIHdpbmRvd3Mga2V5c1xuXHRcdFx0XHRcdFx0Ly8gdGVybWluYXRlIElNRSAoYXBwbGUgY21kIGRvZXNuJ3QpLCBidXQgdGhleSBhbHNvIGNhdXNlIGEgYmx1ciwgc28gaXQncyBPSyB0byBpZ25vcmUgdGhlbSBoZXJlLlxuXHRcdFx0XHRcdFx0Ly8gTm90ZTogU2FmYXJpIDQgKDUzMC4xNykgcHJvcGFnYXRlcyBFU0Mgb3V0IG9mIGFuIElNRSBjb21wb3NpdGlvbiAob2JzZXJ2ZWQgYXQgbGVhc3Qgb24gV2luIFhQKS5cblx0XHRcdFx0XHRcdHNlbGYuaW1lID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChzZWxmLmltZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIEhhbmRsZSByZXR1cm4gZXhwbGljaXRseSwgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgZm9ybSBzdWJtaXNzaW9uIHRvIGJlIGFibGUgdG8gY2hlY2sgZm9yIGN0cmxcblx0XHRcdFx0XHRpZiAoa2V5ID09PSBSRVQpIHtcblx0XHRcdFx0XHRcdHJldHVybiBzZWxmLmFjY2VwdChldmVudCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIEluaGliaXQgZGVmYXVsdCBiZWhhdmlvciBvZiBFU0MgKHJldmVydCB0byBsYXN0IHJlYWwgaW5wdXQgaW4gRkY6IHdlIGRvIHRoYXQgb3Vyc2VsdmVzKVxuXHRcdFx0XHRcdHJldHVybiBrZXkgPT09IEVTQyA/IGV2dEtpbGwoZXZlbnQpIDogdHJ1ZTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vIEFuZCBoYW5kbGUgY29udGludWVkIHByZXNzaW5nIG9mIGFycm93IGtleXNcblx0XHRcdFx0dGV4dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChldmVudCkgPT4ge1xuXHRcdFx0XHRcdHNlbGYua2V5Q291bnQrKztcblx0XHRcdFx0XHRyZXR1cm4gc2VsZi5wcm9jZXNzS2V5KGV2ZW50KTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRleHQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB7XG5cdFx0XHRcdFx0bWFrZUFjdGl2ZShzZWxmKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vIERvbid0IHRlc3QgZm9yIHRleHQuc2VsZWN0aW9uU3RhcnQgYmVpbmcgZGVmaW5lZDtcblx0XHRcdFx0JCh0ZXh0KS5vbignYmx1cicsIHRoaXMuc2F2ZVZpZXcuYmluZCh0aGlzKSk7XG5cdFx0XHRcdC8vIERPTSBMZXZlbCAzIElNRSBoYW5kbGluZ1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFNldHRpbmcgbGFzdEtleSA9IElNRSBwcm92aWRlcyBhIGZha2Uga2V5RG93biBmb3IgR2Vja28ncyBzaW5nbGUga2V5VXAgYWZ0ZXIgYSBjbXBvc2l0aW9uLiBJZiB3ZSBkaWRuJ3QgZG8gdGhpcyxcblx0XHRcdFx0XHQvLyBjYW5jZWxsaW5nIGEgY29tcG9zaXRpb24gdmlhIEVTQyB3b3VsZCBhbHNvIGNhbmNlbCBhbmQgY2xvc2UgdGhlIHdob2xlIGNhdGVnb3J5IGlucHV0IGVkaXRvci5cblx0XHRcdFx0XHQkKHRleHQpLm9uKCdjb21wb3NpdGlvbnN0YXJ0JywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0c2VsZi5sYXN0S2V5ID0gSU1FO1xuXHRcdFx0XHRcdFx0c2VsZi51c2VzQ29tcG9zaXRpb24gPSB0cnVlO1xuXHRcdFx0XHRcdFx0c2VsZi5pbWUgPSB0cnVlO1xuXHRcdFx0XHRcdFx0c2VsZi5pc0NvbXBvc2l0aW9uU3RhcnQgPSB0cnVlO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdCQodGV4dCkub24oJ2NvbXBvc2l0aW9uZW5kJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0c2VsZi5sYXN0S2V5ID0gSU1FO1xuXHRcdFx0XHRcdFx0c2VsZi51c2VzQ29tcG9zaXRpb24gPSB0cnVlO1xuXHRcdFx0XHRcdFx0c2VsZi5pbWUgPSBmYWxzZTtcblx0XHRcdFx0XHRcdHNlbGYuaXNDb21wb3NpdGlvblN0YXJ0ID0gZmFsc2U7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0JCh0ZXh0KS5vbigndGV4dElucHV0JywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0c2VsZi5pbWUgPSBmYWxzZTtcblx0XHRcdFx0XHRcdGlmIChzZWxmLmlzQ29tcG9zaXRpb25TdGFydCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRzZWxmLmludm9rZVN1Z2dlc3Rpb25zKGZhbHNlKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0Ly8gSnVzdCBpbiBjYXNlIHNvbWUgYnJvd3NlcnMgbWlnaHQgcHJvZHVjZSBleGNlcHRpb25zIHdpdGggdGhlc2UgRE9NIExldmVsIDMgZXZlbnRzXG5cdFx0XHRcdH1cblx0XHRcdFx0JCh0ZXh0KS5vbignYmx1cicsICgpID0+IHtcblx0XHRcdFx0XHRzZWxmLnVzZXNDb21wb3NpdGlvbiA9IGZhbHNlO1xuXHRcdFx0XHRcdHNlbGYuaW1lID0gZmFsc2U7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50ZXh0ID0gdGV4dDtcblx0XHRcdHRoaXMuaWNvbiA9IG1ha2UoJ2ltZycpO1xuXHRcdFx0bGV0IGxpc3QgPSBudWxsO1xuXHRcdFx0aWYgKCFub1N1Z2dlc3Rpb25zKSB7XG5cdFx0XHRcdGxpc3QgPSBtYWtlKCdzZWxlY3QnKTtcblx0XHRcdFx0bGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0XHRpZiAoc2VsZi5oaWdobGlnaHRTdWdnZXN0aW9uKDApKSB7XG5cdFx0XHRcdFx0XHRzZWxmLnRleHRjaGFuZ2UoZmFsc2UsIHRydWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0XHRcdGlmIChzZWxmLmhpZ2hsaWdodFN1Z2dlc3Rpb24oMCkpIHtcblx0XHRcdFx0XHRcdHNlbGYuYWNjZXB0KGUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0XHRcdHNlbGYuaGlnaGxpZ2h0U3VnZ2VzdGlvbigwKTtcblx0XHRcdFx0XHRzZWxmLnRleHQuZm9jdXMoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGxpc3QuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRpZiAoZXZlbnQua2V5ID09PSBFU0MpIHtcblx0XHRcdFx0XHRcdHNlbGYucmVzZXRLZXlTZWxlY3Rpb24oKTtcblx0XHRcdFx0XHRcdHNlbGYudGV4dC5mb2N1cygpO1xuXHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHNlbGYudGV4dGNoYW5nZSh0cnVlKTtcblx0XHRcdFx0XHRcdH0sIEhDLnN1Z2dlc3RfZGVsYXkpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoZXZlbnQua2V5ID09PSBSRVQpIHtcblx0XHRcdFx0XHRcdHNlbGYuYWNjZXB0KGV2ZW50KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRpZiAoIUhDLmZpeGVkX3NlYXJjaCkge1xuXHRcdFx0XHRcdGNvbnN0IGVuZ2luZVNlbGVjdG9yID0gbWFrZSgnc2VsZWN0Jyk7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBrZXkgaW4gc3VnZ2VzdGlvbkNvbmZpZ3MpIHtcblx0XHRcdFx0XHRcdGlmIChzdWdnZXN0aW9uQ29uZmlnc1trZXldLnNob3cpIHtcblx0XHRcdFx0XHRcdFx0Y29uc3Qgb3B0ID0gbWFrZSgnb3B0aW9uJyk7XG5cdFx0XHRcdFx0XHRcdG9wdC52YWx1ZSA9IGtleTtcblx0XHRcdFx0XHRcdFx0aWYgKGtleSA9PT0gdGhpcy5lbmdpbmUpIHtcblx0XHRcdFx0XHRcdFx0XHRvcHQuc2VsZWN0ZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdG9wdC5hcHBlbmQobWFrZShzdWdnZXN0aW9uQ29uZmlnc1trZXldLm5hbWUsIHRydWUpKTtcblx0XHRcdFx0XHRcdFx0ZW5naW5lU2VsZWN0b3IuYXBwZW5kKG9wdCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVuZ2luZVNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcblx0XHRcdFx0XHRcdHNlbGYuZW5naW5lID0gc2VsZi5lbmdpbmVTZWxlY3Rvci5vcHRpb25zW3NlbGYuZW5naW5lU2VsZWN0b3Iuc2VsZWN0ZWRJbmRleF0udmFsdWU7XG5cdFx0XHRcdFx0XHRzZWxmLnRleHQuZm9jdXMoKTtcblx0XHRcdFx0XHRcdHNlbGYudGV4dGNoYW5nZSh0cnVlLCB0cnVlKTsgLy8gRG9uJ3QgYXV0b2NvbXBsZXRlLCBmb3JjZSByZS1kaXNwbGF5IG9mIGxpc3Rcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yID0gZW5naW5lU2VsZWN0b3I7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMubGlzdCA9IGxpc3Q7XG5cdFx0XHRjb25zdCBidXR0b25fbGFiZWwgPSAoX2lkLCBkZWZhdWx0VGV4dCkgPT4ge1xuXHRcdFx0XHRjb25zdCBsYWJlbCA9IG51bGw7XG5cdFx0XHRcdGlmICghbGFiZWwgfHwgIWxhYmVsLmRhdGEpIHtcblx0XHRcdFx0XHRyZXR1cm4gZGVmYXVsdFRleHQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGxhYmVsLmRhdGE7XG5cdFx0XHR9O1xuXHRcdFx0Ly8gRG8gbm90IHVzZSB0eXBlICdzdWJtaXQnOyB3ZSBjYW5ub3QgZGV0ZWN0IG1vZGlmaWVyIGtleXMgaWYgd2UgZG9cblx0XHRcdGNvbnN0IE9LID0gbWFrZSgnaW5wdXQnKTtcblx0XHRcdE9LLnR5cGUgPSAnYnV0dG9uJztcblx0XHRcdE9LLnZhbHVlID0gYnV0dG9uX2xhYmVsKCd3cE9rVXBsb2FkTGJsJywgZ2V0TWVzc2FnZSgnbWVzc2FnZXMtb2snKSk7XG5cdFx0XHRPSy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYWNjZXB0LmJpbmQodGhpcykpO1xuXHRcdFx0dGhpcy5vayA9IE9LO1xuXHRcdFx0Y29uc3QgY2FuY2VsID0gbWFrZSgnaW5wdXQnKTtcblx0XHRcdGNhbmNlbC50eXBlID0gJ2J1dHRvbic7XG5cdFx0XHRjYW5jZWwudmFsdWUgPSBidXR0b25fbGFiZWwoJ3dwQ2FuY2VsVXBsb2FkTGJsJywgZ2V0TWVzc2FnZSgnbWVzc2FnZXMtY2FuY2VsJykpO1xuXHRcdFx0Y2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jYW5jZWwuYmluZCh0aGlzKSk7XG5cdFx0XHR0aGlzLmNhbmNlbEJ1dHRvbiA9IGNhbmNlbDtcblx0XHRcdGNvbnN0IHNwYW4gPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHRzcGFuLmNsYXNzTmFtZSA9ICdob3RjYXRpbnB1dCc7XG5cdFx0XHRzcGFuLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcblx0XHRcdHNwYW4uYXBwZW5kKHRleHQpO1xuXHRcdFx0c3Bhbi5zdHlsZS53aGl0ZVNwYWNlID0gJ25vd3JhcCc7XG5cdFx0XHRpZiAobGlzdCkge1xuXHRcdFx0XHRzcGFuLmFwcGVuZChsaXN0KTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdHNwYW4uYXBwZW5kKHRoaXMuZW5naW5lU2VsZWN0b3IpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFub1N1Z2dlc3Rpb25zKSB7XG5cdFx0XHRcdHNwYW4uYXBwZW5kKHRoaXMuaWNvbik7XG5cdFx0XHR9XG5cdFx0XHRzcGFuLmFwcGVuZChPSyk7XG5cdFx0XHRzcGFuLmFwcGVuZChjYW5jZWwpO1xuXHRcdFx0Zm9ybS5hcHBlbmQoc3Bhbik7XG5cdFx0XHRmb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR0aGlzLnNwYW4uYXBwZW5kKGZvcm0pO1xuXHRcdH1cblx0XHRkaXNwbGF5KGV2ZW50KSB7XG5cdFx0XHRpZiAodGhpcy5pc0FkZENhdGVnb3J5ICYmICFvblVwbG9hZCAmJiB0aGlzLmxpbmUpIHtcblx0XHRcdFx0bmV3IENhdGVnb3J5RWRpdG9yKHRoaXMubGluZSwgbnVsbCwgdGhpcy5zcGFuLCB0cnVlKTsgLy8gQ3JlYXRlIGEgbmV3IG9uZVxuXHRcdFx0fVxuXHRcdFx0aWYgKCFjb21taXRCdXR0b24gJiYgIW9uVXBsb2FkKSB7XG5cdFx0XHRcdGZvciAoY29uc3QgZWRpdG9yIG9mIGVkaXRvcnMpIHtcblx0XHRcdFx0XHRpZiAoZWRpdG9yLnN0YXRlICE9PSBVTkNIQU5HRUQpIHtcblx0XHRcdFx0XHRcdHNldE11bHRpSW5wdXQoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKCF0aGlzLmZvcm0pIHtcblx0XHRcdFx0dGhpcy5tYWtlRm9ybSgpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMubGlzdCkge1xuXHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdH1cblx0XHRcdHRoaXMuY3VycmVudENhdGVnb3J5ID0gdGhpcy5sYXN0U2F2ZWRDYXRlZ29yeTtcblx0XHRcdHRoaXMuY3VycmVudEV4aXN0cyA9IHRoaXMubGFzdFNhdmVkRXhpc3RzO1xuXHRcdFx0dGhpcy5jdXJyZW50SGlkZGVuID0gdGhpcy5sYXN0U2F2ZWRIaWRkZW47XG5cdFx0XHR0aGlzLmN1cnJlbnRLZXkgPSB0aGlzLmxhc3RTYXZlZEtleTtcblx0XHRcdHRoaXMuaWNvbi5zcmMgPSB0aGlzLmN1cnJlbnRFeGlzdHMgPyBIQy5leGlzdHNZZXMgOiBIQy5leGlzdHNObztcblx0XHRcdHRoaXMudGV4dC52YWx1ZSA9IHRoaXMuY3VycmVudENhdGVnb3J5ICsgKHRoaXMuY3VycmVudEtleSA9PT0gbnVsbCA/ICcnIDogYHwke3RoaXMuY3VycmVudEtleX1gKTtcblx0XHRcdHRoaXMub3JpZ2luYWxTdGF0ZSA9IHRoaXMuc3RhdGU7XG5cdFx0XHR0aGlzLmxhc3RJbnB1dCA9IHRoaXMuY3VycmVudENhdGVnb3J5O1xuXHRcdFx0dGhpcy5pbnB1dEV4aXN0cyA9IHRoaXMuY3VycmVudEV4aXN0cztcblx0XHRcdHRoaXMuc3RhdGUgPSB0aGlzLnN0YXRlID09PSBVTkNIQU5HRUQgPyBPUEVOIDogQ0hBTkdFX1BFTkRJTkc7XG5cdFx0XHR0aGlzLmxhc3RTZWxlY3Rpb24gPSB7XG5cdFx0XHRcdHN0YXJ0OiB0aGlzLmN1cnJlbnRDYXRlZ29yeS5sZW5ndGgsXG5cdFx0XHRcdGVuZDogdGhpcy5jdXJyZW50Q2F0ZWdvcnkubGVuZ3RoLFxuXHRcdFx0fTtcblx0XHRcdHRoaXMuc2hvd3NMaXN0ID0gZmFsc2U7XG5cdFx0XHQvLyBEaXNwbGF5IHRoZSBmb3JtXG5cdFx0XHRpZiAodGhpcy5jYXRMaW5rKSB7XG5cdFx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5saW5rU3Bhbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0dGhpcy5mb3JtLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcblx0XHRcdHRoaXMub2suZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdC8vIEtpbGwgdGhlIGV2ZW50IGJlZm9yZSBmb2N1c2luZywgb3RoZXJ3aXNlIElFIHdpbGwga2lsbCB0aGUgb25mb2N1cyBldmVudCFcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGV2dEtpbGwoZXZlbnQpO1xuXHRcdFx0dGhpcy50ZXh0LmZvY3VzKCk7XG5cdFx0XHR0aGlzLnRleHQucmVhZE9ubHkgPSBmYWxzZTtcblx0XHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdFx0c2hvdyhldmVudCwgZW5naW5lLCByZWFkT25seSkge1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gdGhpcy5kaXNwbGF5KGV2ZW50KTtcblx0XHRcdGNvbnN0IHYgPSB0aGlzLmxhc3RTYXZlZENhdGVnb3J5O1xuXHRcdFx0aWYgKHYubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnRleHQucmVhZE9ubHkgPSAhIXJlYWRPbmx5O1xuXHRcdFx0dGhpcy5lbmdpbmUgPSBlbmdpbmU7XG5cdFx0XHR0aGlzLnRleHRjaGFuZ2UoZmFsc2UsIHRydWUpOyAvLyBkbyBhdXRvY29tcGxldGlvbiwgZm9yY2UgZGlzcGxheSBvZiBzdWdnZXN0aW9uc1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdFx0b3BlbihldmVudCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc2hvdyhldmVudCwgdGhpcy5lbmdpbmUgJiYgc3VnZ2VzdGlvbkNvbmZpZ3NbdGhpcy5lbmdpbmVdLnRlbXAgPyBIQy5zdWdnZXN0aW9ucyA6IHRoaXMuZW5naW5lKTtcblx0XHR9XG5cdFx0ZG93bihldmVudCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc2hvdyhldmVudCwgJ3N1YmNhdCcsIHRydWUpO1xuXHRcdH1cblx0XHR1cChldmVudCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc2hvdyhldmVudCwgJ3BhcmVudGNhdCcpO1xuXHRcdH1cblx0XHRjYW5jZWwoKSB7XG5cdFx0XHRpZiAodGhpcy5pc0FkZENhdGVnb3J5ICYmICFvblVwbG9hZCkge1xuXHRcdFx0XHR0aGlzLnJlbW92ZUVkaXRvcigpOyAvLyBXZSBhZGRlZCBhIG5ldyBhZGRlciB3aGVuIG9wZW5pbmdcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Ly8gQ2xvc2UsIHJlLWRpc3BsYXkgbGlua1xuXHRcdFx0dGhpcy5pbmFjdGl2YXRlKCk7XG5cdFx0XHR0aGlzLmZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdGlmICh0aGlzLmNhdExpbmspIHtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdH1cblx0XHRcdHRoaXMubGlua1NwYW4uc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IHRoaXMub3JpZ2luYWxTdGF0ZTtcblx0XHRcdHRoaXMuY3VycmVudENhdGVnb3J5ID0gdGhpcy5sYXN0U2F2ZWRDYXRlZ29yeTtcblx0XHRcdHRoaXMuY3VycmVudEtleSA9IHRoaXMubGFzdFNhdmVkS2V5O1xuXHRcdFx0dGhpcy5jdXJyZW50RXhpc3RzID0gdGhpcy5sYXN0U2F2ZWRFeGlzdHM7XG5cdFx0XHR0aGlzLmN1cnJlbnRIaWRkZW4gPSB0aGlzLmxhc3RTYXZlZEhpZGRlbjtcblx0XHRcdGlmICh0aGlzLmNhdExpbmspIHtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLnRpdGxlID0gdGhpcy5jdXJyZW50S2V5ICYmIHRoaXMuY3VycmVudEtleS5sZW5ndGggPiAwID8gdGhpcy5jdXJyZW50S2V5IDogJyc7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5zdGF0ZSA9PT0gVU5DSEFOR0VEKSB7XG5cdFx0XHRcdGlmICh0aGlzLmNhdExpbmspIHtcblx0XHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50Jztcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICghb25VcGxvYWQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gSEMuYmdfY2hhbmdlZDtcblx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0LyogZW1wdHkgKi9cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Y2hlY2tNdWx0aUlucHV0KCk7XG5cdFx0fVxuXHRcdHJlbW92ZUVkaXRvcigpIHtcblx0XHRcdGlmICghbmV3RE9NKSB7XG5cdFx0XHRcdGNvbnN0IG5leHQgPSB0aGlzLnNwYW4ubmV4dFNpYmxpbmc7XG5cdFx0XHRcdGlmIChuZXh0KSB7XG5cdFx0XHRcdFx0bmV4dC5yZW1vdmUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuc3BhbiAmJiB0aGlzLnNwYW4ucGFyZW50Tm9kZSkge1xuXHRcdFx0XHR0aGlzLnNwYW4ucmVtb3ZlKCk7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGVkaXRvcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKGVkaXRvcnNbaV0gPT09IHRoaXMpIHtcblx0XHRcdFx0XHRlZGl0b3JzLnNwbGljZShpLCAxKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Y2hlY2tNdWx0aUlucHV0KCk7XG5cdFx0fVxuXHRcdHJvbGxiYWNrKGV2ZW50KSB7XG5cdFx0XHR0aGlzLnVuZG9MaW5rLnJlbW92ZSgpO1xuXHRcdFx0dGhpcy51bmRvTGluayA9IG51bGw7XG5cdFx0XHR0aGlzLmN1cnJlbnRDYXRlZ29yeSA9IHRoaXMub3JpZ2luYWxDYXRlZ29yeTtcblx0XHRcdHRoaXMuY3VycmVudEtleSA9IHRoaXMub3JpZ2luYWxLZXk7XG5cdFx0XHR0aGlzLmN1cnJlbnRFeGlzdHMgPSB0aGlzLm9yaWdpbmFsRXhpc3RzO1xuXHRcdFx0dGhpcy5jdXJyZW50SGlkZGVuID0gdGhpcy5vcmlnaW5hbEhpZGRlbjtcblx0XHRcdHRoaXMubGFzdFNhdmVkQ2F0ZWdvcnkgPSB0aGlzLm9yaWdpbmFsQ2F0ZWdvcnk7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZEtleSA9IHRoaXMub3JpZ2luYWxLZXk7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZEV4aXN0cyA9IHRoaXMub3JpZ2luYWxFeGlzdHM7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZEhpZGRlbiA9IHRoaXMub3JpZ2luYWxIaWRkZW47XG5cdFx0XHR0aGlzLnN0YXRlID0gVU5DSEFOR0VEO1xuXHRcdFx0aWYgKCF0aGlzLmN1cnJlbnRDYXRlZ29yeSB8fCB0aGlzLmN1cnJlbnRDYXRlZ29yeS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0Ly8gSXQgd2FzIGEgbmV3bHkgYWRkZWQgY2F0ZWdvcnkuIFJlbW92ZSB0aGUgd2hvbGUgZWRpdG9yLlxuXHRcdFx0XHR0aGlzLnJlbW92ZUVkaXRvcigpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gUmVkaXNwbGF5IHRoZSBsaW5rLi4uXG5cdFx0XHRcdHRoaXMuY2F0TGluay5maXJzdENoaWxkLnJlbW92ZSgpO1xuXHRcdFx0XHR0aGlzLmNhdExpbmsuYXBwZW5kKG1ha2UodGhpcy5jdXJyZW50Q2F0ZWdvcnksIHRydWUpKTtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLmhyZWYgPSB3aWtpUGFnZVBhdGgoYCR7SEMuY2F0ZWdvcnlfY2Fub25pY2FsfToke3RoaXMuY3VycmVudENhdGVnb3J5fWApO1xuXHRcdFx0XHR0aGlzLmNhdExpbmsudGl0bGUgPSB0aGlzLmN1cnJlbnRLZXkgfHwgJyc7XG5cdFx0XHRcdHRoaXMuY2F0TGluay5jbGFzc05hbWUgPSB0aGlzLmN1cnJlbnRFeGlzdHMgPyAnJyA6ICduZXcnO1xuXHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50Jztcblx0XHRcdFx0aWYgKHRoaXMudXBEb3duTGlua3MpIHtcblx0XHRcdFx0XHR0aGlzLnVwRG93bkxpbmtzLnN0eWxlLmRpc3BsYXkgPSB0aGlzLmN1cnJlbnRFeGlzdHMgPyAnJyA6ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBldnRLaWxsKGV2ZW50KTtcblx0XHR9XG5cdFx0aW5hY3RpdmF0ZSgpIHtcblx0XHRcdGlmICh0aGlzLmxpc3QpIHtcblx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmlzX2FjdGl2ZSA9IGZhbHNlO1xuXHRcdH1cblx0XHRhY2NlcHRDaGVjayhkb250Q2hlY2spIHtcblx0XHRcdHRoaXMuc2FuaXRpemVJbnB1dCgpO1xuXHRcdFx0Y29uc3QgdmFsdWUgPSB0aGlzLnRleHQudmFsdWUuc3BsaXQoJ3wnKTtcblx0XHRcdGxldCBrZXkgPSBudWxsO1xuXHRcdFx0aWYgKHZhbHVlLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0Wywga2V5XSA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdFx0bGV0IHYgPSB2YWx1ZVswXS5yZXBsYWNlKC9fL2csICcgJykudHJpbSgpO1xuXHRcdFx0aWYgKEhDLmNhcGl0YWxpemVQYWdlTmFtZXMpIHtcblx0XHRcdFx0diA9IGNhcGl0YWxpemUodik7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxhc3RJbnB1dCA9IHY7XG5cdFx0XHR2ID0gcmVwbGFjZVNob3J0Y3V0cyh2LCBIQy5zaG9ydGN1dHMpO1xuXHRcdFx0aWYgKHYubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHRoaXMuY2FuY2VsKCk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlmIChcblx0XHRcdFx0IWRvbnRDaGVjayAmJlxuXHRcdFx0XHQoKGNvbmYud2dOYW1lc3BhY2VOdW1iZXIgPT09IDE0ICYmIHYgPT09IGNvbmYud2dUaXRsZSkgfHwgKEhDLmJsYWNrbGlzdCAmJiBIQy5ibGFja2xpc3QudGVzdCh2KSkpXG5cdFx0XHQpIHtcblx0XHRcdFx0dGhpcy5jYW5jZWwoKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5jdXJyZW50Q2F0ZWdvcnkgPSB2O1xuXHRcdFx0dGhpcy5jdXJyZW50S2V5ID0ga2V5O1xuXHRcdFx0dGhpcy5jdXJyZW50RXhpc3RzID0gdGhpcy5pbnB1dEV4aXN0cztcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRhY2NlcHQoZXZlbnQpIHtcblx0XHRcdC8vIChldnRLZXlzKGV2ZW50KSAmIDEpICE9PSAwXG5cdFx0XHQvLyDlvZPkuJTku4XlvZNldnRLZXlzKGV2ZW50KeS4ujHml7bvvIzmlbTkuKrliKTliKvlvI/miY3kuLp0cnVlXG5cdFx0XHR0aGlzLm5vQ29tbWl0ID0gZXZ0S2V5cyhldmVudCkgPT09IDE7XG5cdFx0XHRjb25zdCByZXN1bHQgPSBldnRLaWxsKGV2ZW50KTtcblx0XHRcdGlmICh0aGlzLmFjY2VwdENoZWNrKCkpIHtcblx0XHRcdFx0Y29uc3QgdG9SZXNvbHZlID0gW3RoaXNdO1xuXHRcdFx0XHRjb25zdCBvcmlnaW5hbCA9IHRoaXMuY3VycmVudENhdGVnb3J5O1xuXHRcdFx0XHRyZXNvbHZlTXVsdGkodG9SZXNvbHZlLCAocmVzb2x2ZWQpID0+IHtcblx0XHRcdFx0XHRpZiAocmVzb2x2ZWRbMF0uZGFiKSB7XG5cdFx0XHRcdFx0XHRzaG93RGFiKHJlc29sdmVkWzBdKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHJlc29sdmVkWzBdLmFjY2VwdENoZWNrKHRydWUpKSB7XG5cdFx0XHRcdFx0XHRyZXNvbHZlZFswXS5jb21taXQoXG5cdFx0XHRcdFx0XHRcdHJlc29sdmVkWzBdLmN1cnJlbnRDYXRlZ29yeSA9PT0gb3JpZ2luYWxcblx0XHRcdFx0XHRcdFx0XHQ/IG51bGxcblx0XHRcdFx0XHRcdFx0XHQ6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLWNhdF9yZXNvbHZlZCcsIG9yaWdpbmFsKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdFx0Y2xvc2UoKSB7XG5cdFx0XHRpZiAoIXRoaXMuY2F0TGluaykge1xuXHRcdFx0XHQvLyBDcmVhdGUgYSBjYXRMaW5rXG5cdFx0XHRcdHRoaXMuY2F0TGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLmFwcGVuZChtYWtlKCdmb28nLCB0cnVlKSk7XG5cdFx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR0aGlzLnNwYW4uaW5zZXJ0QmVmb3JlKHRoaXMuY2F0TGluaywgdGhpcy5zcGFuLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5jYXRMaW5rLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG5cdFx0XHR0aGlzLmNhdExpbmsuYXBwZW5kKG1ha2UodGhpcy5jdXJyZW50Q2F0ZWdvcnksIHRydWUpKTtcblx0XHRcdHRoaXMuY2F0TGluay5ocmVmID0gd2lraVBhZ2VQYXRoKGAke0hDLmNhdGVnb3J5X2Nhbm9uaWNhbH06JHt0aGlzLmN1cnJlbnRDYXRlZ29yeX1gKTtcblx0XHRcdHRoaXMuY2F0TGluay5jbGFzc05hbWUgPSB0aGlzLmN1cnJlbnRFeGlzdHMgPyAnJyA6ICduZXcnO1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRDYXRlZ29yeSA9IHRoaXMuY3VycmVudENhdGVnb3J5O1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRLZXkgPSB0aGlzLmN1cnJlbnRLZXk7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZEV4aXN0cyA9IHRoaXMuY3VycmVudEV4aXN0cztcblx0XHRcdHRoaXMubGFzdFNhdmVkSGlkZGVuID0gdGhpcy5jdXJyZW50SGlkZGVuO1xuXHRcdFx0Ly8gQ2xvc2UgZm9ybSBhbmQgcmVkaXNwbGF5IGNhdGVnb3J5XG5cdFx0XHR0aGlzLmluYWN0aXZhdGUoKTtcblx0XHRcdHRoaXMuZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0dGhpcy5jYXRMaW5rLnRpdGxlID0gdGhpcy5jdXJyZW50S2V5IHx8ICcnO1xuXHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdGlmICh0aGlzLmlzQWRkQ2F0ZWdvcnkpIHtcblx0XHRcdFx0aWYgKG9uVXBsb2FkICYmIHRoaXMubGluZSkge1xuXHRcdFx0XHRcdG5ldyBDYXRlZ29yeUVkaXRvcih0aGlzLmxpbmUsIG51bGwsIHRoaXMuc3BhbiwgdHJ1ZSk7IC8vIENyZWF0ZSBhIG5ldyBvbmVcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmlzQWRkQ2F0ZWdvcnkgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5saW5rU3Bhbi5yZW1vdmUoKTtcblx0XHRcdFx0dGhpcy5tYWtlTGlua1NwYW4oKTtcblx0XHRcdFx0dGhpcy5zcGFuLmFwcGVuZCh0aGlzLmxpbmtTcGFuKTtcblx0XHRcdH1cblx0XHRcdGlmICghdGhpcy51bmRvTGluaykge1xuXHRcdFx0XHQvLyBBcHBlbmQgYW4gdW5kbyBsaW5rLlxuXHRcdFx0XHRjb25zdCBzcGFuID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0XHRjb25zdCBsaW5rID0gbWFrZSgnYScpO1xuXHRcdFx0XHRsaW5rLmhyZWYgPSAnI2NhdGxpbmtzJztcblx0XHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucm9sbGJhY2suYmluZCh0aGlzKSk7XG5cdFx0XHRcdGxpbmsuYXBwZW5kKG1ha2UoSEMubGlua3MudW5kbywgdHJ1ZSkpO1xuXHRcdFx0XHRsaW5rLnRpdGxlID0gZ2V0TWVzc2FnZSgndG9vbHRpcHMtdW5kbycpO1xuXHRcdFx0XHRzcGFuLmFwcGVuZChtYWtlKCcgJywgdHJ1ZSkpO1xuXHRcdFx0XHRzcGFuLmFwcGVuZChsaW5rKTtcblx0XHRcdFx0dGhpcy5ub3JtYWxMaW5rcy5hcHBlbmQoc3Bhbik7XG5cdFx0XHRcdHRoaXMudW5kb0xpbmsgPSBzcGFuO1xuXHRcdFx0XHRpZiAoIW9uVXBsb2FkKSB7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBIQy5iZ19jaGFuZ2VkO1xuXHRcdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdFx0LyogZW1wdHkgKi9cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLnVwRG93bkxpbmtzKSB7XG5cdFx0XHRcdHRoaXMudXBEb3duTGlua3Muc3R5bGUuZGlzcGxheSA9IHRoaXMubGFzdFNhdmVkRXhpc3RzID8gJycgOiAnbm9uZSc7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxpbmtTcGFuLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdHRoaXMuc3RhdGUgPSBDSEFOR0VEO1xuXHRcdFx0Y2hlY2tNdWx0aUlucHV0KCk7XG5cdFx0fVxuXHRcdGNvbW1pdCgpIHtcblx0XHRcdC8vIENoZWNrIGFnYWluIHRvIGNhdGNoIHByb2JsZW0gY2FzZXMgYWZ0ZXIgcmVkaXJlY3QgcmVzb2x1dGlvblxuXHRcdFx0aWYgKFxuXHRcdFx0XHQodGhpcy5jdXJyZW50Q2F0ZWdvcnkgPT09IHRoaXMub3JpZ2luYWxDYXRlZ29yeSAmJlxuXHRcdFx0XHRcdCh0aGlzLmN1cnJlbnRLZXkgPT09IHRoaXMub3JpZ2luYWxLZXkgfHxcblx0XHRcdFx0XHRcdCh0aGlzLmN1cnJlbnRLZXkgPT09IG51bGwgJiYgdGhpcy5vcmlnaW5hbEtleS5sZW5ndGggPT09IDApKSkgfHxcblx0XHRcdFx0KGNvbmYud2dOYW1lc3BhY2VOdW1iZXIgPT09IDE0ICYmIHRoaXMuY3VycmVudENhdGVnb3J5ID09PSBjb25mLndnVGl0bGUpIHx8XG5cdFx0XHRcdChIQy5ibGFja2xpc3QgJiYgSEMuYmxhY2tsaXN0LnRlc3QodGhpcy5jdXJyZW50Q2F0ZWdvcnkpKVxuXHRcdFx0KSB7XG5cdFx0XHRcdHRoaXMuY2FuY2VsKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRoaXMuY2xvc2UoKTtcblx0XHRcdGlmICghY29tbWl0QnV0dG9uICYmICFvblVwbG9hZCkge1xuXHRcdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdFx0aW5pdGlhdGVFZGl0KFxuXHRcdFx0XHRcdChmYWlsdXJlKSA9PiB7XG5cdFx0XHRcdFx0XHRwZXJmb3JtQ2hhbmdlcyhmYWlsdXJlLCBzZWxmKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdChtc2cpID0+IHtcblx0XHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KG1zZywge3RhZzogJ2hvdENhdCd9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJlbW92ZShldmVudCkge1xuXHRcdFx0Ly8gKGV2dEtleXMoZXZlbnQpICYgMSlcblx0XHRcdC8vIOW9k+S4lOS7heW9k2V2dEtleXMoZXZlbnQp5Li6MeaXtu+8jOaVtOS4quWIpOWIq+W8j+aJjeS4ujHvvIzlkKbliJnpg73mmK8wXG5cdFx0XHR0aGlzLmRvUmVtb3ZlKGV2dEtleXMoZXZlbnQpID09PSAxKTtcblx0XHRcdHJldHVybiBldnRLaWxsKGV2ZW50KTtcblx0XHR9XG5cdFx0ZG9SZW1vdmUobm9Db21taXQpIHtcblx0XHRcdGlmICh0aGlzLmlzQWRkQ2F0ZWdvcnkpIHtcblx0XHRcdFx0Ly8gRW1wdHkgaW5wdXQgb24gYWRkaW5nIGEgbmV3IGNhdGVnb3J5XG5cdFx0XHRcdHRoaXMuY2FuY2VsKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICghY29tbWl0QnV0dG9uICYmICFvblVwbG9hZCkge1xuXHRcdFx0XHRmb3IgKGNvbnN0IGVkaXRvciBvZiBlZGl0b3JzKSB7XG5cdFx0XHRcdFx0aWYgKGVkaXRvci5zdGF0ZSAhPT0gVU5DSEFOR0VEKSB7XG5cdFx0XHRcdFx0XHRzZXRNdWx0aUlucHV0KCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChjb21taXRCdXR0b24pIHtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLnRpdGxlID0gJyc7XG5cdFx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5jc3NUZXh0ICs9ICc7IHRleHQtZGVjb3JhdGlvbiA6IGxpbmUtdGhyb3VnaCAhaW1wb3J0YW50Oyc7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IEhDLmJnX2NoYW5nZWQ7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdC8qIGVtcHR5ICovXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5vcmlnaW5hbFN0YXRlID0gdGhpcy5zdGF0ZTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IERFTEVURUQ7XG5cdFx0XHRcdHRoaXMubm9ybWFsTGlua3Muc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0dGhpcy51bmRlbExpbmsuc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0XHRcdH0gZWxzZSBpZiAob25VcGxvYWQpIHtcblx0XHRcdFx0Ly8gUmVtb3ZlIHRoaXMgZWRpdG9yIGNvbXBsZXRlbHlcblx0XHRcdFx0dGhpcy5yZW1vdmVFZGl0b3IoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMub3JpZ2luYWxTdGF0ZSA9IHRoaXMuc3RhdGU7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSBERUxFVEVEO1xuXHRcdFx0XHR0aGlzLm5vQ29tbWl0ID0gbm9Db21taXQgfHwgSEMuZGVsX25lZWRzX2RpZmY7XG5cdFx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0XHRpbml0aWF0ZUVkaXQoXG5cdFx0XHRcdFx0KGZhaWx1cmUpID0+IHtcblx0XHRcdFx0XHRcdHBlcmZvcm1DaGFuZ2VzKGZhaWx1cmUsIHNlbGYpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0KG1zZykgPT4ge1xuXHRcdFx0XHRcdFx0c2VsZi5zdGF0ZSA9IHNlbGYub3JpZ2luYWxTdGF0ZTtcblx0XHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KG1zZywge3RhZzogJ2hvdENhdCd9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJlc3RvcmUoZXZlbnQpIHtcblx0XHRcdC8vIENhbiBvY2N1ciBvbmx5IGlmIHdlIGRvIGhhdmUgYSBjb21taXQgYnV0dG9uIGFuZCBhcmUgbm90IG9uIHRoZSB1cGxvYWQgZm9ybVxuXHRcdFx0dGhpcy5jYXRMaW5rLnRpdGxlID0gdGhpcy5jdXJyZW50S2V5IHx8ICcnO1xuXHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJyc7XG5cdFx0XHR0aGlzLnN0YXRlID0gdGhpcy5vcmlnaW5hbFN0YXRlO1xuXHRcdFx0aWYgKHRoaXMuc3RhdGUgPT09IFVOQ0hBTkdFRCkge1xuXHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50Jztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IEhDLmJnX2NoYW5nZWQ7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdC8qIGVtcHR5ICovXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMubm9ybWFsTGlua3Muc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0dGhpcy51bmRlbExpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHRcdFx0cmV0dXJuIGV2dEtpbGwoZXZlbnQpO1xuXHRcdH1cblx0XHQvLyBJbnRlcm5hbCBvcGVyYXRpb25zXG5cdFx0c2VsZWN0RW5naW5lKGVuZ2luZU5hbWUpIHtcblx0XHRcdGlmICghdGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZW5naW5lU2VsZWN0b3Iub3B0aW9ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLm9wdGlvbnNbaV0uc2VsZWN0ZWQgPSB0aGlzLmVuZ2luZVNlbGVjdG9yLm9wdGlvbnNbaV0udmFsdWUgPT09IGVuZ2luZU5hbWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHNhbml0aXplSW5wdXQoKSB7XG5cdFx0XHRsZXQgdiA9IHRoaXMudGV4dC52YWx1ZSB8fCAnJztcblx0XHRcdHYgPSB2LnJlcGxhY2UoL14oXFxzfF8pKy8sICcnKTsgLy8gVHJpbSBsZWFkaW5nIGJsYW5rcyBhbmQgdW5kZXJzY29yZXNcblx0XHRcdGNvbnN0IHJlID0gbmV3IFJlZ0V4cChgXigke0hDLmNhdGVnb3J5X3JlZ2V4cH0pOmApO1xuXHRcdFx0aWYgKHJlLnRlc3QodikpIHtcblx0XHRcdFx0diA9IHYuc2xpY2UoTWF0aC5tYXgoMCwgdi5pbmRleE9mKCc6JykgKyAxKSkucmVwbGFjZSgvXihcXHN8XykrLywgJycpO1xuXHRcdFx0fVxuXHRcdFx0diA9IHYucmVwbGFjZSgvXFx1MjAwRSQvLCAnJyk7IC8vIFRyaW0gZW5kaW5nIGxlZnQtdG8tcmlnaHQgbWFya1xuXHRcdFx0aWYgKEhDLmNhcGl0YWxpemVQYWdlTmFtZXMpIHtcblx0XHRcdFx0diA9IGNhcGl0YWxpemUodik7XG5cdFx0XHR9XG5cdFx0XHQvLyBPbmx5IHVwZGF0ZSB0aGUgaW5wdXQgZmllbGQgaWYgdGhlcmUgaXMgYSBkaWZmZXJlbmNlLiBWYXJpb3VzIGJyb3dzZXJzIG90aGVyd2lzZVxuXHRcdFx0Ly8gcmVzZXQgdGhlIHNlbGVjdGlvbiBhbmQgY3Vyc29yIHBvc2l0aW9uIGFmdGVyIGVhY2ggdmFsdWUgcmUtYXNzaWdubWVudC5cblx0XHRcdGlmICh0aGlzLnRleHQudmFsdWUgIT09IG51bGwgJiYgdGhpcy50ZXh0LnZhbHVlICE9PSB2KSB7XG5cdFx0XHRcdHRoaXMudGV4dC52YWx1ZSA9IHY7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdG1ha2VDYWxsKHVybCwgY2FsbGJhY2tPYmosIGVuZ2luZSwgcXVlcnlLZXksIGNsZWFuS2V5KSB7XG5cdFx0XHRsZXQgY2IgPSBjYWxsYmFja09iajtcblx0XHRcdGNvbnN0IGUgPSBlbmdpbmU7XG5cdFx0XHRjb25zdCB2ID0gcXVlcnlLZXk7XG5cdFx0XHRjb25zdCB6ID0gY2xlYW5LZXk7XG5cdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdGNvbnN0IGRvbmUgPSAoKSA9PiB7XG5cdFx0XHRcdGNiLmNhbGxzTWFkZSsrO1xuXHRcdFx0XHRpZiAoY2IuY2FsbHNNYWRlID09PSBjYi5ub2ZDYWxscykge1xuXHRcdFx0XHRcdGlmIChjYi5leGlzdHMpIHtcblx0XHRcdFx0XHRcdGNiLmFsbFRpdGxlcy5leGlzdHMgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoY2Iubm9ybWFsaXplZCkge1xuXHRcdFx0XHRcdFx0Y2IuYWxsVGl0bGVzLm5vcm1hbGl6ZWQgPSBjYi5ub3JtYWxpemVkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoIWNiLmRvbnRDYWNoZSAmJiAhc3VnZ2VzdGlvbkNvbmZpZ3NbY2IuZW5naW5lTmFtZV0uY2FjaGVbel0pIHtcblx0XHRcdFx0XHRcdHN1Z2dlc3Rpb25Db25maWdzW2NiLmVuZ2luZU5hbWVdLmNhY2hlW3pdID0gY2IuYWxsVGl0bGVzO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRzZWxmLnRleHQucmVhZE9ubHkgPSBmYWxzZTtcblx0XHRcdFx0XHRpZiAoIWNiLmNhbmNlbGxlZCkge1xuXHRcdFx0XHRcdFx0c2VsZi5zaG93U3VnZ2VzdGlvbnMoY2IuYWxsVGl0bGVzLCBjYi5ub0NvbXBsZXRpb24sIHYsIGNiLmVuZ2luZU5hbWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoY2IgPT09IHNlbGYuY2FsbGJhY2tPYmopIHtcblx0XHRcdFx0XHRcdHNlbGYuY2FsbGJhY2tPYmogPSBudWxsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjYiA9IHVuZGVmaW5lZDtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdCQuZ2V0SlNPTih1cmwsIChqc29uKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHRpdGxlcyA9IGUuaGFuZGxlcihqc29uLCB6KTtcblx0XHRcdFx0aWYgKHRpdGxlcyAmJiB0aXRsZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGNiLmFsbFRpdGxlcyA9IGNiLmFsbFRpdGxlcyA9PT0gbnVsbCA/IHRpdGxlcyA6IFsuLi5jYi5hbGxUaXRsZXMsIC4uLmdlbmVyYXRlQXJyYXkodGl0bGVzKV07XG5cdFx0XHRcdFx0aWYgKHRpdGxlcy5leGlzdHMpIHtcblx0XHRcdFx0XHRcdGNiLmV4aXN0cyA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICh0aXRsZXMubm9ybWFsaXplZCkge1xuXHRcdFx0XHRcdFx0Y2Iubm9ybWFsaXplZCA9IHRpdGxlcy5ub3JtYWxpemVkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRkb25lKCk7XG5cdFx0XHR9KS5mYWlsKChyZXEpID0+IHtcblx0XHRcdFx0aWYgKCFyZXEpIHtcblx0XHRcdFx0XHRub1N1Z2dlc3Rpb25zID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjYi5kb250Q2FjaGUgPSB0cnVlO1xuXHRcdFx0XHRkb25lKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0Y2FsbGJhY2tPYmogPSBudWxsO1xuXHRcdHRleHRjaGFuZ2UoZG9udF9hdXRvY29tcGxldGUsIGZvcmNlKSB7XG5cdFx0XHQvLyBIaWRlIGFsbCBvdGhlciBsaXN0c1xuXHRcdFx0bWFrZUFjdGl2ZSh0aGlzKTtcblx0XHRcdC8vIEdldCBpbnB1dCB2YWx1ZSwgb21pdCBzb3J0IGtleSwgaWYgYW55XG5cdFx0XHR0aGlzLnNhbml0aXplSW5wdXQoKTtcblx0XHRcdGxldCB2ID0gdGhpcy50ZXh0LnZhbHVlO1xuXHRcdFx0Ly8gRGlzcmVnYXJkIGFueXRoaW5nIGFmdGVyIGEgcGlwZS5cblx0XHRcdGNvbnN0IHBpcGUgPSB2LmluZGV4T2YoJ3wnKTtcblx0XHRcdGlmIChwaXBlID09PSAtMSkge1xuXHRcdFx0XHR0aGlzLmN1cnJlbnRLZXkgPSBudWxsO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5jdXJyZW50S2V5ID0gdi5zbGljZShNYXRoLm1heCgwLCBwaXBlICsgMSkpO1xuXHRcdFx0XHR2ID0gdi5zbGljZSgwLCBNYXRoLm1heCgwLCBwaXBlKSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5sYXN0SW5wdXQgPT09IHYgJiYgIWZvcmNlKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH0gLy8gTm8gY2hhbmdlXG5cdFx0XHRpZiAodGhpcy5sYXN0SW5wdXQgIT09IHYpIHtcblx0XHRcdFx0Y2hlY2tNdWx0aUlucHV0KCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxhc3RJbnB1dCA9IHY7XG5cdFx0XHR0aGlzLmxhc3RSZWFsSW5wdXQgPSB2O1xuXHRcdFx0Ly8gTWFyayBibGFja2xpc3RlZCBpbnB1dHMuXG5cdFx0XHR0aGlzLm9rLmRpc2FibGVkID0gdi5sZW5ndGggPiAwICYmIEhDLmJsYWNrbGlzdCAmJiBIQy5ibGFja2xpc3QudGVzdCh2KTtcblx0XHRcdGlmIChub1N1Z2dlc3Rpb25zKSB7XG5cdFx0XHRcdC8vIE5vIEFqYXg6IGp1c3QgbWFrZSBzdXJlIHRoZSBsaXN0IGlzIGhpZGRlblxuXHRcdFx0XHRpZiAodGhpcy5saXN0KSB7XG5cdFx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMuaWNvbikge1xuXHRcdFx0XHRcdHRoaXMuaWNvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICh2Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHR0aGlzLnNob3dTdWdnZXN0aW9ucyhbXSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGxldCBjbGVhbktleSA9IHYucmVwbGFjZSgvW1xcdTIwMEVcXHUyMDBGXFx1MjAyQS1cXHUyMDJFXS9nLCAnJykucmVwbGFjZSh3aWtpVGV4dEJsYW5rUkUsICcgJyk7XG5cdFx0XHRjbGVhbktleSA9IHJlcGxhY2VTaG9ydGN1dHMoY2xlYW5LZXksIEhDLnNob3J0Y3V0cyk7XG5cdFx0XHRjbGVhbktleSA9IGNsZWFuS2V5LnRyaW0oKTtcblx0XHRcdGlmIChjbGVhbktleS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0dGhpcy5zaG93U3VnZ2VzdGlvbnMoW10pO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5jYWxsYmFja09iaikge1xuXHRcdFx0XHR0aGlzLmNhbGxiYWNrT2JqLmNhbmNlbGxlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBlbmdpbmVOYW1lID0gc3VnZ2VzdGlvbkNvbmZpZ3NbdGhpcy5lbmdpbmVdID8gdGhpcy5lbmdpbmUgOiAnY29tYmluZWQnO1xuXHRcdFx0ZG9udF9hdXRvY29tcGxldGUgfHw9IHN1Z2dlc3Rpb25Db25maWdzW2VuZ2luZU5hbWVdLm5vQ29tcGxldGlvbjtcblx0XHRcdGlmIChzdWdnZXN0aW9uQ29uZmlnc1tlbmdpbmVOYW1lXS5jYWNoZVtjbGVhbktleV0pIHtcblx0XHRcdFx0dGhpcy5zaG93U3VnZ2VzdGlvbnMoc3VnZ2VzdGlvbkNvbmZpZ3NbZW5naW5lTmFtZV0uY2FjaGVbY2xlYW5LZXldLCBkb250X2F1dG9jb21wbGV0ZSwgdiwgZW5naW5lTmFtZSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHtlbmdpbmVzfSA9IHN1Z2dlc3Rpb25Db25maWdzW2VuZ2luZU5hbWVdO1xuXHRcdFx0dGhpcy5jYWxsYmFja09iaiA9IHtcblx0XHRcdFx0YWxsVGl0bGVzOiBudWxsLFxuXHRcdFx0XHRjYWxsc01hZGU6IDAsXG5cdFx0XHRcdG5vZkNhbGxzOiBlbmdpbmVzLmxlbmd0aCxcblx0XHRcdFx0bm9Db21wbGV0aW9uOiBkb250X2F1dG9jb21wbGV0ZSxcblx0XHRcdFx0ZW5naW5lTmFtZSxcblx0XHRcdH07XG5cdFx0XHR0aGlzLm1ha2VDYWxscyhlbmdpbmVzLCB0aGlzLmNhbGxiYWNrT2JqLCB2LCBjbGVhbktleSk7XG5cdFx0fVxuXHRcdG1ha2VDYWxscyhlbmdpbmVzLCBjYiwgdiwgY2xlYW5LZXkpIHtcblx0XHRcdGZvciAoY29uc3QgZW5naW5lXyBvZiBlbmdpbmVzKSB7XG5cdFx0XHRcdGNvbnN0IGVuZ2luZSA9IHN1Z2dlc3Rpb25FbmdpbmVzW2VuZ2luZV9dO1xuXHRcdFx0XHRjb25zdCB1cmwgPSBjb25mLndnU2NyaXB0UGF0aCArIGVuZ2luZS51cmkucmVwbGFjZSgvXFwkMS9nLCBlbmNvZGVVUklDb21wb25lbnQoY2xlYW5LZXkpKTtcblx0XHRcdFx0dGhpcy5tYWtlQ2FsbCh1cmwsIGNiLCBlbmdpbmUsIHYsIGNsZWFuS2V5KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0c2hvd1N1Z2dlc3Rpb25zKHRpdGxlcywgZG9udEF1dG9jb21wbGV0ZSwgcXVlcnlLZXksIGVuZ2luZU5hbWUpIHtcblx0XHRcdHRoaXMudGV4dC5yZWFkT25seSA9IGZhbHNlO1xuXHRcdFx0dGhpcy5kYWIgPSBudWxsO1xuXHRcdFx0dGhpcy5zaG93c0xpc3QgPSBmYWxzZTtcblx0XHRcdGlmICghdGhpcy5saXN0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmIChub1N1Z2dlc3Rpb25zKSB7XG5cdFx0XHRcdGlmICh0aGlzLmxpc3QpIHtcblx0XHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy5pY29uKSB7XG5cdFx0XHRcdFx0dGhpcy5pY29uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5pbnB1dEV4aXN0cyA9IHRydWU7IC8vIERlZmF1bHQuLi5cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5lbmdpbmVOYW1lID0gZW5naW5lTmFtZTtcblx0XHRcdGlmIChlbmdpbmVOYW1lKSB7XG5cdFx0XHRcdGlmICghdGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lTmFtZSA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR9XG5cdFx0XHRpZiAocXVlcnlLZXkpIHtcblx0XHRcdFx0aWYgKHRoaXMubGFzdElucHV0LmluZGV4T2YocXVlcnlLZXkpKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHR0aGlzLmxhc3RRdWVyeSAmJlxuXHRcdFx0XHRcdHRoaXMubGFzdElucHV0LmluZGV4T2YodGhpcy5sYXN0UXVlcnkpID09PSAwICYmXG5cdFx0XHRcdFx0dGhpcy5sYXN0UXVlcnkubGVuZ3RoID4gcXVlcnlLZXkubGVuZ3RoXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5sYXN0UXVlcnkgPSBxdWVyeUtleTtcblx0XHRcdC8vIEdldCBjdXJyZW50IGlucHV0IHRleHRcblx0XHRcdGxldCB2ID0gdGhpcy50ZXh0LnZhbHVlLnNwbGl0KCd8Jyk7XG5cdFx0XHRjb25zdCBrZXkgPSB2Lmxlbmd0aCA+IDEgPyBgfCR7dlsxXX1gIDogJyc7XG5cdFx0XHR2ID0gSEMuY2FwaXRhbGl6ZVBhZ2VOYW1lcyA/IGNhcGl0YWxpemUodlswXSkgOiB2WzBdO1xuXHRcdFx0bGV0IHZOb3JtYWxpemVkID0gdjtcblx0XHRcdGNvbnN0IGtub3duVG9FeGlzdCA9IHRpdGxlcyAmJiB0aXRsZXMuZXhpc3RzO1xuXHRcdFx0bGV0IGk7XG5cdFx0XHRpZiAodGl0bGVzKSB7XG5cdFx0XHRcdGlmICh0aXRsZXMubm9ybWFsaXplZCAmJiB2LmluZGV4T2YocXVlcnlLZXkpID09PSAwKSB7XG5cdFx0XHRcdFx0Ly8gV2UgZ290IGJhY2sgYSBkaWZmZXJlbnQgbm9ybWFsaXphdGlvbiB0aGFuIHdoYXQgaXMgaW4gdGhlIGlucHV0IGZpZWxkXG5cdFx0XHRcdFx0dk5vcm1hbGl6ZWQgPSB0aXRsZXMubm9ybWFsaXplZCArIHYuc2xpY2UocXVlcnlLZXkubGVuZ3RoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCB2TG93ID0gdk5vcm1hbGl6ZWQudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0Ly8gU3RyaXAgYmxhY2tsaXN0ZWQgY2F0ZWdvcmllc1xuXHRcdFx0XHRpZiAoSEMuYmxhY2tsaXN0KSB7XG5cdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IHRpdGxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0aWYgKEhDLmJsYWNrbGlzdC50ZXN0KHRpdGxlc1tpXSkpIHtcblx0XHRcdFx0XHRcdFx0dGl0bGVzLnNwbGljZShpLCAxKTtcblx0XHRcdFx0XHRcdFx0aS0tO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aXRsZXMuc29ydCgoYSwgYikgPT4ge1xuXHRcdFx0XHRcdGlmIChhID09PSBiKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGEuaW5kZXhPZihiKSA9PT0gMCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIGEgYmVnaW5zIHdpdGggYjogYSA+IGJcblx0XHRcdFx0XHRpZiAoYi5pbmRleE9mKGEpID09PSAwKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gLTE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIGIgYmVnaW5zIHdpdGggYTogYSA8IGJcblx0XHRcdFx0XHQvLyBPcGVuc2VhcmNoIG1heSByZXR1cm4gc3R1ZmYgbm90IGJlZ2lubmluZyB3aXRoIHRoZSBzZWFyY2ggcHJlZml4IVxuXHRcdFx0XHRcdGxldCBwcmVmaXhNYXRjaEEgPSBhLmluZGV4T2Yodk5vcm1hbGl6ZWQpID09PSAwID8gMSA6IDA7XG5cdFx0XHRcdFx0bGV0IHByZWZpeE1hdGNoQiA9IGIuaW5kZXhPZih2Tm9ybWFsaXplZCkgPT09IDAgPyAxIDogMDtcblx0XHRcdFx0XHRpZiAocHJlZml4TWF0Y2hBICE9PSBwcmVmaXhNYXRjaEIpIHtcblx0XHRcdFx0XHRcdHJldHVybiBwcmVmaXhNYXRjaEIgLSBwcmVmaXhNYXRjaEE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIENhc2UtaW5zZW5zaXRpdmUgcHJlZml4IG1hdGNoIVxuXHRcdFx0XHRcdGNvbnN0IGFMb3cgPSBhLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdFx0Y29uc3QgYkxvdyA9IGIudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0XHRwcmVmaXhNYXRjaEEgPSBhTG93LmluZGV4T2YodkxvdykgPT09IDAgPyAxIDogMDtcblx0XHRcdFx0XHRwcmVmaXhNYXRjaEIgPSBiTG93LmluZGV4T2YodkxvdykgPT09IDAgPyAxIDogMDtcblx0XHRcdFx0XHRpZiAocHJlZml4TWF0Y2hBICE9PSBwcmVmaXhNYXRjaEIpIHtcblx0XHRcdFx0XHRcdHJldHVybiBwcmVmaXhNYXRjaEIgLSBwcmVmaXhNYXRjaEE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChhIDwgYikge1xuXHRcdFx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoYiA8IGEpIHtcblx0XHRcdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vIFJlbW92ZSBkdXBsaWNhdGVzIGFuZCBzZWxmLXJlZmVyZW5jZXNcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IHRpdGxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdChpICsgMSA8IHRpdGxlcy5sZW5ndGggJiYgdGl0bGVzW2ldID09PSB0aXRsZXNbaSArIDFdKSB8fFxuXHRcdFx0XHRcdFx0KGNvbmYud2dOYW1lc3BhY2VOdW1iZXIgPT09IDE0ICYmIHRpdGxlc1tpXSA9PT0gY29uZi53Z1RpdGxlKVxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0dGl0bGVzLnNwbGljZShpLCAxKTtcblx0XHRcdFx0XHRcdGktLTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICghdGl0bGVzIHx8IHRpdGxlcy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0aWYgKHRoaXMubGlzdCkge1xuXHRcdFx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChlbmdpbmVOYW1lICYmIHN1Z2dlc3Rpb25Db25maWdzW2VuZ2luZU5hbWVdICYmICFzdWdnZXN0aW9uQ29uZmlnc1tlbmdpbmVOYW1lXS50ZW1wKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuaWNvbikge1xuXHRcdFx0XHRcdFx0dGhpcy5pY29uLnNyYyA9IEhDLmV4aXN0c05vO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLmlucHV0RXhpc3RzID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgW2ZpcnN0VGl0bGVdID0gdGl0bGVzO1xuXHRcdFx0Y29uc3QgY29tcGxldGVkID0gdGhpcy5hdXRvQ29tcGxldGUoZmlyc3RUaXRsZSwgdiwgdk5vcm1hbGl6ZWQsIGtleSwgZG9udEF1dG9jb21wbGV0ZSk7XG5cdFx0XHRjb25zdCBleGlzdGluZyA9IGNvbXBsZXRlZCB8fCBrbm93blRvRXhpc3QgfHwgZmlyc3RUaXRsZSA9PT0gcmVwbGFjZVNob3J0Y3V0cyh2LCBIQy5zaG9ydGN1dHMpO1xuXHRcdFx0aWYgKGVuZ2luZU5hbWUgJiYgc3VnZ2VzdGlvbkNvbmZpZ3NbZW5naW5lTmFtZV0gJiYgIXN1Z2dlc3Rpb25Db25maWdzW2VuZ2luZU5hbWVdLnRlbXApIHtcblx0XHRcdFx0dGhpcy5pY29uLnNyYyA9IGV4aXN0aW5nID8gSEMuZXhpc3RzWWVzIDogSEMuZXhpc3RzTm87XG5cdFx0XHRcdHRoaXMuaW5wdXRFeGlzdHMgPSBleGlzdGluZztcblx0XHRcdH1cblx0XHRcdGlmIChjb21wbGV0ZWQpIHtcblx0XHRcdFx0dGhpcy5sYXN0SW5wdXQgPSBmaXJzdFRpdGxlO1xuXHRcdFx0XHRpZiAodGl0bGVzLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHRcdGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gKFJlLSlmaWxsIHRoZSBsaXN0XG5cdFx0XHR3aGlsZSAodGhpcy5saXN0LmZpcnN0Q2hpbGQpIHtcblx0XHRcdFx0dGhpcy5saXN0LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgdGl0bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IG9wdCA9IG1ha2UoJ29wdGlvbicpO1xuXHRcdFx0XHRvcHQuYXBwZW5kKG1ha2UodGl0bGVzW2ldLCB0cnVlKSk7XG5cdFx0XHRcdG9wdC5zZWxlY3RlZCA9IGNvbXBsZXRlZCAmJiBpID09PSAwO1xuXHRcdFx0XHR0aGlzLmxpc3QuYXBwZW5kKG9wdCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmRpc3BsYXlMaXN0KCk7XG5cdFx0fVxuXHRcdGRpc3BsYXlMaXN0KCkge1xuXHRcdFx0dGhpcy5zaG93c0xpc3QgPSB0cnVlO1xuXHRcdFx0aWYgKCF0aGlzLmlzX2FjdGl2ZSkge1xuXHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0bGV0IG5vZkl0ZW1zID0gTWF0aC5taW4odGhpcy5saXN0Lm9wdGlvbnMubGVuZ3RoLCBIQy5saXN0U2l6ZSk7XG5cdFx0XHRpZiAobm9mSXRlbXMgPD0gMSkge1xuXHRcdFx0XHRub2ZJdGVtcyA9IDI7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxpc3Quc2l6ZSA9IG5vZkl0ZW1zO1xuXHRcdFx0dGhpcy5saXN0LnN0eWxlLmFsaWduID0gaXNfcnRsID8gJ3JpZ2h0JyA6ICdsZWZ0Jztcblx0XHRcdHRoaXMubGlzdC5zdHlsZS56SW5kZXggPSA1O1xuXHRcdFx0dGhpcy5saXN0LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcblx0XHRcdC8vIENvbXB1dGUgaW5pdGlhbCBsaXN0IHBvc2l0aW9uLiBGaXJzdCB0aGUgaGVpZ2h0LlxuXHRcdFx0Y29uc3QgYW5jaG9yID0gaXNfcnRsID8gJ3JpZ2h0JyA6ICdsZWZ0Jztcblx0XHRcdGxldCBsaXN0aCA9IDA7XG5cdFx0XHRpZiAodGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuXHRcdFx0XHQvLyBPZmYtc2NyZWVuIGRpc3BsYXkgdG8gZ2V0IHRoZSBoZWlnaHRcblx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLnRvcCA9IGAke3RoaXMudGV4dC5vZmZzZXRUb3B9cHhgO1xuXHRcdFx0XHR0aGlzLmxpc3Quc3R5bGVbYW5jaG9yXSA9ICctMTAwMDBweCc7XG5cdFx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHRcdGxpc3RoID0gdGhpcy5saXN0Lm9mZnNldEhlaWdodDtcblx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsaXN0aCA9IHRoaXMubGlzdC5vZmZzZXRIZWlnaHQ7XG5cdFx0XHR9XG5cdFx0XHQvLyBBcHByb3hpbWF0ZSBjYWxjdWxhdGlvbiBvZiBtYXhpbXVtIGxpc3Qgc2l6ZVxuXHRcdFx0bGV0IG1heExpc3RIZWlnaHQgPSBsaXN0aDtcblx0XHRcdGlmIChub2ZJdGVtcyA8IEhDLmxpc3RTaXplKSB7XG5cdFx0XHRcdG1heExpc3RIZWlnaHQgPSAobGlzdGggLyBub2ZJdGVtcykgKiBIQy5saXN0U2l6ZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHZpZXdwb3J0ID0gKHdoYXQpID0+IHtcblx0XHRcdFx0Y29uc3QgcyA9IGBjbGllbnQke3doYXR9YDtcblx0XHRcdFx0cmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtzXSA6IDA7XG5cdFx0XHR9O1xuXHRcdFx0Y29uc3Qgc2Nyb2xsX29mZnNldCA9ICh3aGF0KSA9PiB7XG5cdFx0XHRcdGNvbnN0IHMgPSBgc2Nyb2xsJHt3aGF0fWA7XG5cdFx0XHRcdGxldCByZXN1bHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRbc10gOiAwO1xuXHRcdFx0XHRpZiAoaXNfcnRsICYmIHdoYXQgPT09ICdMZWZ0Jykge1xuXHRcdFx0XHRcdC8vIFJUTCBpbmNvbnNpc3RlbmNpZXMuXG5cdFx0XHRcdFx0Ly8gRkY6IDAgYXQgdGhlIGZhciByaWdodCwgdGhlbiBpbmNyZWFzaW5nbHkgbmVnYXRpdmUgdmFsdWVzLlxuXHRcdFx0XHRcdC8vIElFID49IDg6IDAgYXQgdGhlIGZhciByaWdodCwgdGhlbiBpbmNyZWFzaW5nbHkgcG9zaXRpdmUgdmFsdWVzLlxuXHRcdFx0XHRcdC8vIFdlYmtpdDogc2Nyb2xsV2lkdGggLSBjbGllbnRXaWR0aCBhdCB0aGUgZmFyIHJpZ2h0LCB0aGVuIGRvd24gdG8gemVyby5cblx0XHRcdFx0XHQvLyBPcGVyYTogZG9uJ3Qga25vdy4uLlxuXHRcdFx0XHRcdGlmIChyZXN1bHQgPCAwKSB7XG5cdFx0XHRcdFx0XHRyZXN1bHQgPSAtcmVzdWx0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoIWlzX3dlYmtpdCkge1xuXHRcdFx0XHRcdFx0cmVzdWx0ID0gc2Nyb2xsX29mZnNldCgnV2lkdGgnKSAtIHZpZXdwb3J0KCdXaWR0aCcpIC0gcmVzdWx0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBOb3cgYWxsIGhhdmUgd2Via2l0IGJlaGF2aW9yLCBpLmUuIHplcm8gaWYgYXQgdGhlIGxlZnRtb3N0IGVkZ2UuXG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH07XG5cdFx0XHRjb25zdCBwb3NpdGlvbiA9IChub2RlKSA9PiB7XG5cdFx0XHRcdC8vIFN0cmlwcGVkLWRvd24gc2ltcGxpZmllZCBwb3NpdGlvbiBmdW5jdGlvbi4gSXQncyBnb29kIGVub3VnaCBmb3Igb3VyIHB1cnBvc2VzLlxuXHRcdFx0XHRpZiAobm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHtcblx0XHRcdFx0XHRjb25zdCBib3ggPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHR4OiBNYXRoLnJvdW5kKGJveC5sZWZ0ICsgc2Nyb2xsX29mZnNldCgnTGVmdCcpKSxcblx0XHRcdFx0XHRcdHk6IE1hdGgucm91bmQoYm94LnRvcCArIHNjcm9sbF9vZmZzZXQoJ1RvcCcpKSxcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCB0ID0gMDtcblx0XHRcdFx0bGV0IGwgPSAwO1xuXHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0dCArPSBub2RlLm9mZnNldFRvcCB8fCAwO1xuXHRcdFx0XHRcdGwgKz0gbm9kZS5vZmZzZXRMZWZ0IHx8IDA7XG5cdFx0XHRcdFx0bm9kZSA9IG5vZGUub2Zmc2V0UGFyZW50O1xuXHRcdFx0XHR9IHdoaWxlIChub2RlKTtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR4OiBsLFxuXHRcdFx0XHRcdHk6IHQsXG5cdFx0XHRcdH07XG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgdGV4dFBvcyA9IHBvc2l0aW9uKHRoaXMudGV4dCk7XG5cdFx0XHRjb25zdCBubCA9IDA7XG5cdFx0XHRsZXQgbnQgPSAwO1xuXHRcdFx0Ly8gT3BlcmEgOS41IHNvbWVob3cgaGFzIG9mZnNldFdpZHRoID0gMCBoZXJlPz8gVXNlIHRoZSBuZXh0IGJlc3QgdmFsdWUuLi5cblx0XHRcdGxldCBvZmZzZXQgPSAwO1xuXHRcdFx0Y29uc3QgdGV4dEJveFdpZHRoID0gdGhpcy50ZXh0Lm9mZnNldFdpZHRoIHx8IHRoaXMudGV4dC5jbGllbnRXaWR0aDtcblx0XHRcdGlmICh0aGlzLmVuZ2luZU5hbWUpIHtcblx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS56SW5kZXggPSA1O1xuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcblx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS53aWR0aCA9IGAke3RleHRCb3hXaWR0aH1weGA7XG5cdFx0XHRcdC8vIEZpZ3VyZSBvdXQgdGhlIGhlaWdodCBvZiB0aGlzIHNlbGVjdG9yOiBkaXNwbGF5IGl0IG9mZi1zY3JlZW4sIHRoZW4gaGlkZSBpdCBhZ2Fpbi5cblx0XHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZVthbmNob3JdID0gJy0xMDAwMHB4Jztcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLnRvcCA9ICcwJztcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdFx0XHRvZmZzZXQgPSB0aGlzLmVuZ2luZVNlbGVjdG9yLm9mZnNldEhlaWdodDtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0b2Zmc2V0ID0gdGhpcy5lbmdpbmVTZWxlY3Rvci5vZmZzZXRIZWlnaHQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZVthbmNob3JdID0gYCR7bmx9cHhgO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRleHRQb3MueSA8IG1heExpc3RIZWlnaHQgKyBvZmZzZXQgKyAxKSB7XG5cdFx0XHRcdC8vIFRoZSBsaXN0IG1pZ2h0IGV4dGVuZCBiZXlvbmQgdGhlIHVwcGVyIGJvcmRlciBvZiB0aGUgcGFnZS4gTGV0J3MgYXZvaWQgdGhhdCBieSBwbGFjaW5nIGl0XG5cdFx0XHRcdC8vIGJlbG93IHRoZSBpbnB1dCB0ZXh0IGZpZWxkLlxuXHRcdFx0XHRudCA9IHRoaXMudGV4dC5vZmZzZXRIZWlnaHQgKyBvZmZzZXQgKyAxO1xuXHRcdFx0XHRpZiAodGhpcy5lbmdpbmVOYW1lKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS50b3AgPSBgJHt0aGlzLnRleHQub2Zmc2V0SGVpZ2h0fXB4YDtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bnQgPSAtbGlzdGggLSBvZmZzZXQgLSAxO1xuXHRcdFx0XHRpZiAodGhpcy5lbmdpbmVOYW1lKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS50b3AgPSBgJHstKG9mZnNldCArIDEpfXB4YDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5saXN0LnN0eWxlLnRvcCA9IGAke250fXB4YDtcblx0XHRcdHRoaXMubGlzdC5zdHlsZS53aWR0aCA9ICcnOyAvLyBObyBmaXhlZCB3aWR0aCAoeWV0KVxuXHRcdFx0dGhpcy5saXN0LnN0eWxlW2FuY2hvcl0gPSBgJHtubH1weGA7XG5cdFx0XHRpZiAodGhpcy5lbmdpbmVOYW1lKSB7XG5cdFx0XHRcdHRoaXMuc2VsZWN0RW5naW5lKHRoaXMuZW5naW5lTmFtZSk7XG5cdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdFx0Ly8gU2V0IHRoZSB3aWR0aCBvZiB0aGUgbGlzdFxuXHRcdFx0aWYgKHRoaXMubGlzdC5vZmZzZXRXaWR0aCA8IHRleHRCb3hXaWR0aCkge1xuXHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUud2lkdGggPSBgJHt0ZXh0Qm94V2lkdGh9cHhgO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHQvLyBJZiB0aGUgbGlzdCBpcyB3aWRlciB0aGFuIHRoZSB0ZXh0Ym94OiBtYWtlIHN1cmUgaXQgZml0cyBob3Jpem9udGFsbHkgaW50byB0aGUgYnJvd3NlciB3aW5kb3dcblx0XHRcdGNvbnN0IHNjcm9sbCA9IHNjcm9sbF9vZmZzZXQoJ0xlZnQnKTtcblx0XHRcdGNvbnN0IHZpZXdfdyA9IHZpZXdwb3J0KCdXaWR0aCcpO1xuXHRcdFx0bGV0IHcgPSB0aGlzLmxpc3Qub2Zmc2V0V2lkdGg7XG5cdFx0XHRjb25zdCBsX3BvcyA9IHBvc2l0aW9uKHRoaXMubGlzdCk7XG5cdFx0XHRsZXQgbGVmdCA9IGxfcG9zLng7XG5cdFx0XHRsZXQgcmlnaHQgPSBsZWZ0ICsgdztcblx0XHRcdGlmIChsZWZ0IDwgc2Nyb2xsIHx8IHJpZ2h0ID4gc2Nyb2xsICsgdmlld193KSB7XG5cdFx0XHRcdGlmICh3ID4gdmlld193KSB7XG5cdFx0XHRcdFx0dyA9IHZpZXdfdztcblx0XHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUud2lkdGggPSBgJHt3fXB4YDtcblx0XHRcdFx0XHRpZiAoaXNfcnRsKSB7XG5cdFx0XHRcdFx0XHRsZWZ0ID0gcmlnaHQgLSB3O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyaWdodCA9IGxlZnQgKyB3O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgcmVsYXRpdmVfb2Zmc2V0ID0gMDtcblx0XHRcdFx0aWYgKGxlZnQgPCBzY3JvbGwpIHtcblx0XHRcdFx0XHRyZWxhdGl2ZV9vZmZzZXQgPSBzY3JvbGwgLSBsZWZ0O1xuXHRcdFx0XHR9IGVsc2UgaWYgKHJpZ2h0ID4gc2Nyb2xsICsgdmlld193KSB7XG5cdFx0XHRcdFx0cmVsYXRpdmVfb2Zmc2V0ID0gLShyaWdodCAtIHNjcm9sbCAtIHZpZXdfdyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGlzX3J0bCkge1xuXHRcdFx0XHRcdHJlbGF0aXZlX29mZnNldCA9IC1yZWxhdGl2ZV9vZmZzZXQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHJlbGF0aXZlX29mZnNldCkge1xuXHRcdFx0XHRcdHRoaXMubGlzdC5zdHlsZVthbmNob3JdID0gYCR7bmwgKyByZWxhdGl2ZV9vZmZzZXR9cHhgO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGF1dG9Db21wbGV0ZShuZXdWYWwsIGFjdFZhbCwgbm9ybWFsaXplZEFjdFZhbCwga2V5LCBkb250TW9kaWZ5KSB7XG5cdFx0XHRpZiAobmV3VmFsID09PSBhY3RWYWwpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZG9udE1vZGlmeSB8fCB0aGlzLmltZSB8fCAhdGhpcy5jYW5TZWxlY3QoKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHQvLyBJZiB3ZSBjYW4ndCBzZWxlY3QgcHJvcGVybHkgb3IgYW4gSU1FIGNvbXBvc2l0aW9uIGlzIG9uZ29pbmcsIGF1dG9jb21wbGV0aW9uIHdvdWxkIGJlIGEgbWFqb3IgYW5ub3lhbmNlIHRvIHRoZSB1c2VyLlxuXHRcdFx0aWYgKG5ld1ZhbC5pbmRleE9mKGFjdFZhbCkpIHtcblx0XHRcdFx0Ly8gTWF5YmUgaXQnbGwgd29yayB3aXRoIHRoZSBub3JtYWxpemVkIHZhbHVlIChORkMpP1xuXHRcdFx0XHRpZiAobm9ybWFsaXplZEFjdFZhbCAmJiBuZXdWYWwuaW5kZXhPZihub3JtYWxpemVkQWN0VmFsKSA9PT0gMCkge1xuXHRcdFx0XHRcdGlmICh0aGlzLmxhc3RSZWFsSW5wdXQgPT09IGFjdFZhbCkge1xuXHRcdFx0XHRcdFx0dGhpcy5sYXN0UmVhbElucHV0ID0gbm9ybWFsaXplZEFjdFZhbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YWN0VmFsID0gbm9ybWFsaXplZEFjdFZhbDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIEFjdHVhbCBpbnB1dCBpcyBhIHByZWZpeCBvZiB0aGUgbmV3IHRleHQuIEZpbGwgaW4gbmV3IHRleHQsIHNlbGVjdGluZyB0aGUgbmV3bHkgYWRkZWQgc3VmZml4XG5cdFx0XHQvLyBzdWNoIHRoYXQgaXQgY2FuIGJlIGVhc2lseSByZW1vdmVkIGJ5IHR5cGluZyBiYWNrc3BhY2UgaWYgdGhlIHN1Z2dlc3Rpb24gaXMgdW53YW50ZWQuXG5cdFx0XHR0aGlzLnRleHQuZm9jdXMoKTtcblx0XHRcdHRoaXMudGV4dC52YWx1ZSA9IG5ld1ZhbCArIGtleTtcblx0XHRcdHRoaXMuc2V0U2VsZWN0aW9uKGFjdFZhbC5sZW5ndGgsIG5ld1ZhbC5sZW5ndGgpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdGNhblNlbGVjdCgpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdHRoaXMudGV4dC5zZXRTZWxlY3Rpb25SYW5nZSB8fFxuXHRcdFx0XHQodGhpcy50ZXh0LnNlbGVjdGlvblN0YXJ0ICE9PSB1bmRlZmluZWQgJiYgdGhpcy50ZXh0LnNlbGVjdGlvbkVuZCAhPT0gdW5kZWZpbmVkKVxuXHRcdFx0KTtcblx0XHR9XG5cdFx0c2V0U2VsZWN0aW9uKGZyb20sIHRvKSB7XG5cdFx0XHQvLyB0aGlzLnRleHQgbXVzdCBiZSBmb2N1c2VkIChhdCBsZWFzdCBvbiBJRSlcblx0XHRcdGlmICghdGhpcy50ZXh0LnZhbHVlKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLnRleHQuc2V0U2VsZWN0aW9uUmFuZ2UpIHtcblx0XHRcdFx0Ly8gZS5nLiBraHRtbFxuXHRcdFx0XHR0aGlzLnRleHQuc2V0U2VsZWN0aW9uUmFuZ2UoZnJvbSwgdG8pO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnRleHQuc2VsZWN0aW9uU3RhcnQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRpZiAoZnJvbSA+IHRoaXMudGV4dC5zZWxlY3Rpb25TdGFydCkge1xuXHRcdFx0XHRcdHRoaXMudGV4dC5zZWxlY3Rpb25FbmQgPSB0bztcblx0XHRcdFx0XHR0aGlzLnRleHQuc2VsZWN0aW9uU3RhcnQgPSBmcm9tO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMudGV4dC5zZWxlY3Rpb25TdGFydCA9IGZyb207XG5cdFx0XHRcdFx0dGhpcy50ZXh0LnNlbGVjdGlvbkVuZCA9IHRvO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGdldFNlbGVjdGlvbigpIHtcblx0XHRcdGxldCBmcm9tID0gMDtcblx0XHRcdC8vIHRoaXMudGV4dCBtdXN0IGJlIGZvY3VzZWQgKGF0IGxlYXN0IG9uIElFKVxuXHRcdFx0bGV0IHRvID0gMDtcblx0XHRcdGlmICghdGhpcy50ZXh0LnZhbHVlKSB7XG5cdFx0XHRcdC8vIE5vIHRleHQuXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMudGV4dC5zZWxlY3Rpb25TdGFydCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGZyb20gPSB0aGlzLnRleHQuc2VsZWN0aW9uU3RhcnQ7XG5cdFx0XHRcdHRvID0gdGhpcy50ZXh0LnNlbGVjdGlvbkVuZDtcblx0XHRcdH1cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHN0YXJ0OiBmcm9tLFxuXHRcdFx0XHRlbmQ6IHRvLFxuXHRcdFx0fTtcblx0XHR9XG5cdFx0c2F2ZVZpZXcoKSB7XG5cdFx0XHR0aGlzLmxhc3RTZWxlY3Rpb24gPSB0aGlzLmdldFNlbGVjdGlvbigpO1xuXHRcdH1cblx0XHRwcm9jZXNzS2V5KGV2ZW50KSB7XG5cdFx0XHRsZXQgZGlyID0gMDtcblx0XHRcdHN3aXRjaCAodGhpcy5sYXN0S2V5KSB7XG5cdFx0XHRcdGNhc2UgVVA6XG5cdFx0XHRcdFx0ZGlyID0gLTE7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgRE9XTjpcblx0XHRcdFx0XHRkaXIgPSAxO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFBHVVA6XG5cdFx0XHRcdFx0ZGlyID0gLUhDLmxpc3RTaXplO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFBHRE9XTjpcblx0XHRcdFx0XHRkaXIgPSBIQy5saXN0U2l6ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBFU0M6XG5cdFx0XHRcdFx0Ly8gSW5oaWJpdCBkZWZhdWx0IGJlaGF2aW9yIChyZXZlcnQgdG8gbGFzdCByZWFsIGlucHV0IGluIEZGOiB3ZSBkbyB0aGF0IG91cnNlbHZlcylcblx0XHRcdFx0XHRyZXR1cm4gZXZ0S2lsbChldmVudCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGlyKSB7XG5cdFx0XHRcdGlmICh0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnKSB7XG5cdFx0XHRcdFx0Ly8gTGlzdCBpcyB2aXNpYmxlLCBzbyB0aGVyZSBhcmUgc3VnZ2VzdGlvbnNcblx0XHRcdFx0XHR0aGlzLmhpZ2hsaWdodFN1Z2dlc3Rpb24oZGlyKTtcblx0XHRcdFx0XHQvLyBLaWxsIHRoZSBldmVudCwgb3RoZXJ3aXNlIHNvbWUgYnJvd3NlcnMgKGUuZy4sIEZpcmVmb3gpIG1heSBhZGRpdGlvbmFsbHkgdHJlYXQgYW4gdXAtYXJyb3dcblx0XHRcdFx0XHQvLyBhcyBcInBsYWNlIHRoZSB0ZXh0IGN1cnNvciBhdCB0aGUgZnJvbnRcIiwgd2hpY2ggd2UgZG9uJ3Qgd2FudCBoZXJlLlxuXHRcdFx0XHRcdHJldHVybiBldnRLaWxsKGV2ZW50KTtcblx0XHRcdFx0fSBlbHNlIGlmIChcblx0XHRcdFx0XHR0aGlzLmtleUNvdW50IDw9IDEgJiZcblx0XHRcdFx0XHQoIXRoaXMuY2FsbGJhY2tPYmogfHwgdGhpcy5jYWxsYmFja09iai5jYWxsc01hZGUgPT09IHRoaXMuY2FsbGJhY2tPYmoubm9mQ2FsbHMpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdC8vIElmIG5vIHN1Z2dlc3Rpb25zIGRpc3BsYXllZCwgZ2V0IHRoZW0sIHVubGVzcyB3ZSdyZSBhbHJlYWR5IGdldHRpbmcgdGhlbS5cblx0XHRcdFx0XHR0aGlzLnRleHRjaGFuZ2UoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdGhpZ2hsaWdodFN1Z2dlc3Rpb24oZGlyKSB7XG5cdFx0XHRpZiAobm9TdWdnZXN0aW9ucyB8fCAhdGhpcy5saXN0IHx8IHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgY3VyciA9IHRoaXMubGlzdC5zZWxlY3RlZEluZGV4O1xuXHRcdFx0bGV0IHRndCA9IC0xO1xuXHRcdFx0aWYgKGRpciA9PT0gMCkge1xuXHRcdFx0XHRpZiAoY3VyciA8IDAgfHwgY3VyciA+PSB0aGlzLmxpc3Qub3B0aW9ucy5sZW5ndGgpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGd0ID0gY3Vycjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRndCA9IGN1cnIgPCAwID8gMCA6IGN1cnIgKyBkaXI7XG5cdFx0XHRcdHRndCA9IE1hdGgubWF4KHRndCwgMCk7XG5cdFx0XHRcdGlmICh0Z3QgPj0gdGhpcy5saXN0Lm9wdGlvbnMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0dGd0ID0gdGhpcy5saXN0Lm9wdGlvbnMubGVuZ3RoIC0gMTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHRndCAhPT0gY3VyciB8fCBkaXIgPT09IDApIHtcblx0XHRcdFx0aWYgKGN1cnIgPj0gMCAmJiBjdXJyIDwgdGhpcy5saXN0Lm9wdGlvbnMubGVuZ3RoICYmIGRpciAhPT0gMCkge1xuXHRcdFx0XHRcdHRoaXMubGlzdC5vcHRpb25zW2N1cnJdLnNlbGVjdGVkID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5saXN0Lm9wdGlvbnNbdGd0XS5zZWxlY3RlZCA9IHRydWU7XG5cdFx0XHRcdC8vIEdldCBjdXJyZW50IGlucHV0IHRleHRcblx0XHRcdFx0Y29uc3QgdiA9IHRoaXMudGV4dC52YWx1ZS5zcGxpdCgnfCcpO1xuXHRcdFx0XHRjb25zdCBrZXkgPSB2Lmxlbmd0aCA+IDEgPyBgfCR7dlsxXX1gIDogJyc7XG5cdFx0XHRcdGNvbnN0IGNvbXBsZXRlZCA9IHRoaXMuYXV0b0NvbXBsZXRlKHRoaXMubGlzdC5vcHRpb25zW3RndF0udGV4dCwgdGhpcy5sYXN0UmVhbElucHV0LCBudWxsLCBrZXksIGZhbHNlKTtcblx0XHRcdFx0aWYgKCFjb21wbGV0ZWQgfHwgdGhpcy5saXN0Lm9wdGlvbnNbdGd0XS50ZXh0ID09PSB0aGlzLmxhc3RSZWFsSW5wdXQpIHtcblx0XHRcdFx0XHR0aGlzLnRleHQudmFsdWUgPSB0aGlzLmxpc3Qub3B0aW9uc1t0Z3RdLnRleHQgKyBrZXk7XG5cdFx0XHRcdFx0aWYgKHRoaXMuY2FuU2VsZWN0KCkpIHtcblx0XHRcdFx0XHRcdHRoaXMuc2V0U2VsZWN0aW9uKHRoaXMubGlzdC5vcHRpb25zW3RndF0udGV4dC5sZW5ndGgsIHRoaXMubGlzdC5vcHRpb25zW3RndF0udGV4dC5sZW5ndGgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmxhc3RJbnB1dCA9IHRoaXMubGlzdC5vcHRpb25zW3RndF0udGV4dDtcblx0XHRcdFx0dGhpcy5pbnB1dEV4aXN0cyA9IHRydWU7IC8vIE1pZ2h0IGJlIHdyb25nIGlmIGZyb20gYSBkYWIgbGlzdC4uLlxuXHRcdFx0XHRpZiAodGhpcy5pY29uKSB7XG5cdFx0XHRcdFx0dGhpcy5pY29uLnNyYyA9IEhDLmV4aXN0c1llcztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gQ0hBTkdFX1BFTkRJTkc7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmVzZXRLZXlTZWxlY3Rpb24oKSB7XG5cdFx0XHRpZiAobm9TdWdnZXN0aW9ucyB8fCAhdGhpcy5saXN0IHx8IHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgY3VyciA9IHRoaXMubGlzdC5zZWxlY3RlZEluZGV4O1xuXHRcdFx0aWYgKGN1cnIgPj0gMCAmJiBjdXJyIDwgdGhpcy5saXN0Lm9wdGlvbnMubGVuZ3RoKSB7XG5cdFx0XHRcdHRoaXMubGlzdC5vcHRpb25zW2N1cnJdLnNlbGVjdGVkID0gZmFsc2U7XG5cdFx0XHRcdC8vIEdldCBjdXJyZW50IGlucHV0IHRleHRcblx0XHRcdFx0Y29uc3QgdiA9IHRoaXMudGV4dC52YWx1ZS5zcGxpdCgnfCcpO1xuXHRcdFx0XHRjb25zdCBrZXkgPSB2Lmxlbmd0aCA+IDEgPyBgfCR7dlsxXX1gIDogJyc7XG5cdFx0XHRcdC8vIEVTQyBpcyBoYW5kbGVkIHN0cmFuZ2VseSBieSBzb21lIGJyb3dzZXJzIChlLmcuLCBGRik7IHNvbWVob3cgaXQgcmVzZXRzIHRoZSBpbnB1dCB2YWx1ZSBiZWZvcmVcblx0XHRcdFx0Ly8gb3VyIGV2ZW50IGhhbmRsZXJzIGV2ZXIgZ2V0IGEgY2hhbmNlIHRvIHJ1bi5cblx0XHRcdFx0bGV0IHJlc3VsdCA9IHZbMF0gIT09IHRoaXMubGFzdElucHV0O1xuXHRcdFx0XHRpZiAodlswXSAhPT0gdGhpcy5sYXN0UmVhbElucHV0KSB7XG5cdFx0XHRcdFx0dGhpcy50ZXh0LnZhbHVlID0gdGhpcy5sYXN0UmVhbElucHV0ICsga2V5O1xuXHRcdFx0XHRcdHJlc3VsdCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5sYXN0SW5wdXQgPSB0aGlzLmxhc3RSZWFsSW5wdXQ7XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cdGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XG5cdFx0Ly8gVXNlciBjb25maWd1cmF0aW9uczogRG8gdGhpcyBoZXJlLCBjYWxsZWQgZnJvbSB0aGUgb25sb2FkIGhhbmRsZXIsIHNvIHRoYXQgdXNlcnMgY2FuXG5cdFx0Ly8gb3ZlcnJpZGUgaXQgZWFzaWx5IGluIHRoZWlyIG93biB1c2VyIHNjcmlwdCBmaWxlcyBieSBqdXN0IGRlY2xhcmluZyB2YXJpYWJsZXMuXG5cdFx0Y29uc3QgY29uZmlnID0ge307XG5cdFx0SEMuZG9udF9hZGRfdG9fd2F0Y2hsaXN0ID1cblx0XHRcdHdpbmRvdy5ob3RjYXRfZG9udF9hZGRfdG9fd2F0Y2hsaXN0ID09PSB1bmRlZmluZWRcblx0XHRcdFx0PyBjb25maWcuSG90Q2F0RG9udEFkZFRvV2F0Y2hsaXN0ID09PSB1bmRlZmluZWRcblx0XHRcdFx0XHQ/IEhDLmRvbnRfYWRkX3RvX3dhdGNobGlzdFxuXHRcdFx0XHRcdDogY29uZmlnLkhvdENhdERvbnRBZGRUb1dhdGNobGlzdFxuXHRcdFx0XHQ6ICEhd2luZG93LmhvdGNhdF9kb250X2FkZF90b193YXRjaGxpc3Q7XG5cdFx0SEMubm9fYXV0b2NvbW1pdCA9XG5cdFx0XHR3aW5kb3cuaG90Y2F0X25vX2F1dG9jb21taXQgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHQ/IGNvbmZpZy5Ib3RDYXROb0F1dG9Db21taXQgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdD8gY29uZi53Z05hbWVzcGFjZU51bWJlciAlIDJcblx0XHRcdFx0XHRcdD8gdHJ1ZVxuXHRcdFx0XHRcdFx0OiBIQy5ub19hdXRvY29tbWl0IC8vIE9uIHRhbGsgbmFtZXNwYWNlIGRlZmF1bHQgYXV0b2NvbW1pdCBvZmZcblx0XHRcdFx0XHQ6IGNvbmZpZy5Ib3RDYXROb0F1dG9Db21taXRcblx0XHRcdFx0OiAhIXdpbmRvdy5ob3RjYXRfbm9fYXV0b2NvbW1pdDtcblx0XHRIQy5kZWxfbmVlZHNfZGlmZiA9XG5cdFx0XHR3aW5kb3cuaG90Y2F0X2RlbF9uZWVkc19kaWZmID09PSB1bmRlZmluZWRcblx0XHRcdFx0PyBjb25maWcuSG90Q2F0RGVsTmVlZHNEaWZmID09PSB1bmRlZmluZWRcblx0XHRcdFx0XHQ/IEhDLmRlbF9uZWVkc19kaWZmXG5cdFx0XHRcdFx0OiBjb25maWcuSG90Q2F0RGVsTmVlZHNEaWZmXG5cdFx0XHRcdDogISF3aW5kb3cuaG90Y2F0X2RlbF9uZWVkc19kaWZmO1xuXHRcdEhDLnN1Z2dlc3RfZGVsYXkgPSB3aW5kb3cuaG90Y2F0X3N1Z2dlc3Rpb25fZGVsYXkgfHwgY29uZmlnLkhvdENhdFN1Z2dlc3Rpb25EZWxheSB8fCBIQy5zdWdnZXN0X2RlbGF5O1xuXHRcdEhDLmVkaXRib3hfd2lkdGggPSB3aW5kb3cuaG90Y2F0X2VkaXRib3hfd2lkdGggfHwgY29uZmlnLkhvdENhdEVkaXRCb3hXaWR0aCB8fCBIQy5lZGl0Ym94X3dpZHRoO1xuXHRcdEhDLnN1Z2dlc3Rpb25zID0gd2luZG93LmhvdGNhdF9zdWdnZXN0aW9ucyB8fCBjb25maWcuSG90Q2F0U3VnZ2VzdGlvbnMgfHwgSEMuc3VnZ2VzdGlvbnM7XG5cdFx0aWYgKHR5cGVvZiBIQy5zdWdnZXN0aW9ucyAhPT0gJ3N0cmluZycgfHwgIXN1Z2dlc3Rpb25Db25maWdzW0hDLnN1Z2dlc3Rpb25zXSkge1xuXHRcdFx0SEMuc3VnZ2VzdGlvbnMgPSAnY29tYmluZWQnO1xuXHRcdH1cblx0XHRIQy5maXhlZF9zZWFyY2ggPVxuXHRcdFx0d2luZG93LmhvdGNhdF9zdWdnZXN0aW9uc19maXhlZCA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdD8gY29uZmlnLkhvdENhdEZpeGVkU3VnZ2VzdGlvbnMgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdD8gSEMuZml4ZWRfc2VhcmNoXG5cdFx0XHRcdFx0OiBjb25maWcuSG90Q2F0Rml4ZWRTdWdnZXN0aW9uc1xuXHRcdFx0XHQ6ICEhd2luZG93LmhvdGNhdF9zdWdnZXN0aW9uc19maXhlZDtcblx0XHRIQy5zaW5nbGVfbWlub3IgPVxuXHRcdFx0d2luZG93LmhvdGNhdF9zaW5nbGVfY2hhbmdlc19hcmVfbWlub3IgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHQ/IGNvbmZpZy5Ib3RDYXRNaW5vclNpbmdsZUNoYW5nZXMgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdD8gSEMuc2luZ2xlX21pbm9yXG5cdFx0XHRcdFx0OiBjb25maWcuSG90Q2F0TWlub3JTaW5nbGVDaGFuZ2VzXG5cdFx0XHRcdDogISF3aW5kb3cuaG90Y2F0X3NpbmdsZV9jaGFuZ2VzX2FyZV9taW5vcjtcblx0XHRIQy5iZ19jaGFuZ2VkID0gd2luZG93LmhvdGNhdF9jaGFuZ2VkX2JhY2tncm91bmQgfHwgY29uZmlnLkhvdENhdENoYW5nZWRCYWNrZ3JvdW5kIHx8IEhDLmJnX2NoYW5nZWQ7XG5cdFx0SEMudXNlX3VwX2Rvd24gPVxuXHRcdFx0d2luZG93LmhvdGNhdF91c2VfY2F0ZWdvcnlfbGlua3MgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHQ/IGNvbmZpZy5Ib3RDYXRVc2VDYXRlZ29yeUxpbmtzID09PSB1bmRlZmluZWRcblx0XHRcdFx0XHQ/IEhDLnVzZV91cF9kb3duXG5cdFx0XHRcdFx0OiBjb25maWcuSG90Q2F0VXNlQ2F0ZWdvcnlMaW5rc1xuXHRcdFx0XHQ6ICEhd2luZG93LmhvdGNhdF91c2VfY2F0ZWdvcnlfbGlua3M7XG5cdFx0SEMubGlzdFNpemUgPSB3aW5kb3cuaG90Y2F0X2xpc3Rfc2l6ZSB8fCBjb25maWcuSG90Q2F0TGlzdFNpemUgfHwgSEMubGlzdFNpemU7XG5cdFx0SEMuY2hhbmdlVGFnID0gY29uZmlnLkhvdENhdENoYW5nZVRhZyB8fCAnJztcblx0XHQvLyBUaGUgbmV4dCB3aG9sZSBzaGViYW5nIGlzIG5lZWRlZCwgYmVjYXVzZSBtYW51YWwgdGFncyBnZXQgbm90IHN1Ym1pdHRlZCBleGNlcHQgb2Ygc2F2ZVxuXHRcdGlmIChIQy5jaGFuZ2VUYWcpIHtcblx0XHRcdGNvbnN0IGVGb3JtID0gZG9jdW1lbnQuZWRpdGZvcm07XG5cdFx0XHRjb25zdCBjYXRSZWdFeHAgPSBuZXcgUmVnRXhwKGBeXFxcXFtcXFxcWygke0hDLmNhdGVnb3J5X3JlZ2V4cH0pOmApO1xuXHRcdFx0bGV0IG9sZFR4dDtcblx0XHRcdC8vIFJldHVybnMgdHJ1ZSBpZiBtaW5vciBjaGFuZ2Vcblx0XHRcdGNvbnN0IGlzTWlub3JDaGFuZ2UgPSAoKSA9PiB7XG5cdFx0XHRcdGxldCBuZXdUeHQgPSBlRm9ybS53cFRleHRib3gxO1xuXHRcdFx0XHRpZiAoIW5ld1R4dCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRuZXdUeHQgPSBuZXdUeHQudmFsdWU7XG5cdFx0XHRcdGNvbnN0IG9sZExpbmVzID0gb2xkVHh0Lm1hdGNoKC9eLiokL2dtKTtcblx0XHRcdFx0Y29uc3QgbmV3TGluZXMgPSBuZXdUeHQubWF0Y2goL14uKiQvZ20pO1xuXHRcdFx0XHRsZXQgY0FycjsgLy8gY2hhbmdlc1xuXHRcdFx0XHRjb25zdCBleGNlcHQgPSAoYUFyciwgYkFycikgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHJlc3VsdCA9IFtdO1xuXHRcdFx0XHRcdGxldCBsQXJyOyAvLyBzbWFsbGVyXG5cdFx0XHRcdFx0bGV0IC8vIGxhcmdlclxuXHRcdFx0XHRcdFx0c0Fycjtcblx0XHRcdFx0XHRpZiAoYUFyci5sZW5ndGggPCBiQXJyLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0bEFyciA9IGJBcnI7XG5cdFx0XHRcdFx0XHRzQXJyID0gYUFycjtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bEFyciA9IGFBcnI7XG5cdFx0XHRcdFx0XHRzQXJyID0gYkFycjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBpdGVtIG9mIGxBcnIpIHtcblx0XHRcdFx0XHRcdGNvbnN0IGluZCA9IHNBcnIuaW5kZXhPZihpdGVtKTtcblx0XHRcdFx0XHRcdGlmIChpbmQgPT09IC0xKSB7XG5cdFx0XHRcdFx0XHRcdHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IGl0ZW07XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRzQXJyLnNwbGljZShpbmQsIDEpOyAvLyBkb24ndCBjaGVjayB0aGlzIGl0ZW0gYWdhaW5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIFsuLi5yZXN1bHQsIC4uLnNBcnJdO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHRjQXJyID0gZXhjZXB0KG9sZExpbmVzLCBuZXdMaW5lcyk7XG5cdFx0XHRcdGlmIChjQXJyLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRjQXJyID0gY0Fyci5maWx0ZXIoKGMpID0+IHtcblx0XHRcdFx0XHRcdGMgPSBjLnRyaW0oKTtcblx0XHRcdFx0XHRcdHJldHVybiBjICYmICFjYXRSZWdFeHAudGVzdChjKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoY0Fyci5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRvbGRUeHQgPSBuZXdUeHQ7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGNvbmYud2dBY3Rpb24gPT09ICdzdWJtaXQnICYmXG5cdFx0XHRcdGNvbmYud2dBcnRpY2xlSWQgJiZcblx0XHRcdFx0ZUZvcm0gJiZcblx0XHRcdFx0ZUZvcm0ud3BTdW1tYXJ5ICYmXG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aWtpRGlmZicpXG5cdFx0XHQpIHtcblx0XHRcdFx0Y29uc3Qgc3VtID0gZUZvcm0ud3BTdW1tYXJ5O1xuXHRcdFx0XHRjb25zdCBzdW1BID0gZUZvcm0ud3BBdXRvU3VtbWFyeTtcblx0XHRcdFx0aWYgKHN1bS52YWx1ZSAmJiBzdW1BLnZhbHVlID09PSBIQy5jaGFuZ2VUYWcpIHtcblx0XHRcdFx0XHQvLyBIb3RDYXQgZGlmZlxuXHRcdFx0XHRcdC8vIE1ENSBoYXNoIG9mIHRoZSBlbXB0eSBzdHJpbmcsIGFzIEhvdENhdCBlZGl0IGlzIGJhc2VkIG9uIGVtcHR5IHN1bVxuXHRcdFx0XHRcdHN1bUEudmFsdWUgPSBzdW1BLnZhbHVlLnJlcGxhY2UoSEMuY2hhbmdlVGFnLCAnZDQxZDhjZDk4ZjAwYjIwNGU5ODAwOTk4ZWNmODQyN2UnKTtcblx0XHRcdFx0XHQvLyBBdHRyIGNyZWF0aW9uIGFuZCBldmVudCBoYW5kbGluZyBpcyBub3Qgc2FtZSBpbiBhbGwgKG9sZCkgYnJvd3NlcnMgc28gdXNlICRcblx0XHRcdFx0XHRjb25zdCAkY3QgPSAkKCc8aW5wdXQ+Jylcblx0XHRcdFx0XHRcdC5hdHRyKHtcblx0XHRcdFx0XHRcdFx0dHlwZTogJ2hpZGRlbicsXG5cdFx0XHRcdFx0XHRcdG5hbWU6ICd3cENoYW5nZVRhZ3MnLFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdC52YWwoSEMuY2hhbmdlVGFnKTtcblx0XHRcdFx0XHQkKGVGb3JtKS5hcHBlbmQoJGN0KTtcblx0XHRcdFx0XHRvbGRUeHQgPSBlRm9ybS53cFRleHRib3gxLnZhbHVlO1xuXHRcdFx0XHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdFx0XHRcdCRib2R5LmZpbmQoJ2lucHV0W25hbWU9d3BTYXZlXScpLm9uZSgnY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoJGN0LnZhbCgpKSB7XG5cdFx0XHRcdFx0XHRcdHN1bS52YWx1ZSA9IHN1bS52YWx1ZS5yZXBsYWNlKFxuXHRcdFx0XHRcdFx0XHRcdGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXVzaW5nJykgfHwgZ2V0TWVzc2FnZSgnbWVzc2FnZXMtcHJlZml4JyksXG5cdFx0XHRcdFx0XHRcdFx0Jydcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRjb25zdCByZW1vdmVDaGFuZ2VUYWcgPSAoKSA9PiB7XG5cdFx0XHRcdFx0XHQkKGVGb3JtLndwVGV4dGJveDEpXG5cdFx0XHRcdFx0XHRcdC5hZGQoc3VtKVxuXHRcdFx0XHRcdFx0XHQub25lKCdpbnB1dCcsICgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChpc01pbm9yQ2hhbmdlKCkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVtb3ZlQ2hhbmdlVGFnKCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQkY3QudmFsKCcnKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9LCA1MDApO1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdHJlbW92ZUNoYW5nZVRhZygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIE51bWVyaWMgaW5wdXQsIG1ha2Ugc3VyZSB3ZSBoYXZlIGEgbnVtZXJpYyB2YWx1ZVxuXHRcdEhDLmxpc3RTaXplID0gTnVtYmVyLnBhcnNlSW50KEhDLmxpc3RTaXplLCAxMCk7XG5cdFx0aWYgKE51bWJlci5pc05hTihIQy5saXN0U2l6ZSkgfHwgSEMubGlzdFNpemUgPCA1KSB7XG5cdFx0XHRIQy5saXN0U2l6ZSA9IDU7XG5cdFx0fVxuXHRcdEhDLmxpc3RTaXplID0gTWF0aC5taW4oSEMubGlzdFNpemUsIDMwKTsgLy8gTWF4IHNpemVcblx0XHQvLyBMb2NhbGl6ZSBzZWFyY2ggZW5naW5lIG5hbWVzXG5cdFx0Zm9yIChjb25zdCBba2V5LCBzdWdnZXN0aW9uQ29uZmlnXSBvZiBPYmplY3QuZW50cmllcyhzdWdnZXN0aW9uQ29uZmlncykpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGlmIChrZXkgJiYgZ2V0TWVzc2FnZShgZW5naW5lX25hbWVzLSR7a2V5fWApKSB7XG5cdFx0XHRcdFx0c3VnZ2VzdGlvbkNvbmZpZy5uYW1lID0gZ2V0TWVzc2FnZShgZW5naW5lX25hbWVzLSR7a2V5fWApO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIENhdGNoIGJvdGggbmF0aXZlIFJUTCBhbmQgXCJmYWtlZFwiIFJUTCB0aHJvdWdoIFtbTWVkaWFXaWtpOlJ0bC5qc11dXG5cdFx0aXNfcnRsID0gaGFzQ2xhc3MoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLCAncnRsJyk7XG5cdFx0aWYgKCFpc19ydGwpIHtcblx0XHRcdGlmIChkb2N1bWVudC5kZWZhdWx0VmlldyAmJiBkb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKSB7XG5cdFx0XHRcdC8vIEdlY2tvIGV0Yy5cblx0XHRcdFx0aXNfcnRsID0gZG9jdW1lbnQuZGVmYXVsdFZpZXdcblx0XHRcdFx0XHQuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JyksIG51bGwpXG5cdFx0XHRcdFx0LmdldFByb3BlcnR5VmFsdWUoJ2RpcmVjdGlvbicpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gTm90IGV4YWN0bHkgcmlnaHQsIGJ1dCBiZXN0IGVmZm9ydFxuXHRcdFx0XHRpc19ydGwgPSAkKCdib2R5JylbMF0uc3R5bGUuZGlyZWN0aW9uO1xuXHRcdFx0fVxuXHRcdFx0aXNfcnRsID0gaXNfcnRsID09PSAncnRsJztcblx0XHR9XG5cdH07XG5cdGNvbnN0IGNhbl9lZGl0ID0gKCkgPT4ge1xuXHRcdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2EtZWRpdCcpICE9PSBudWxsO1xuXHR9O1xuXHQvLyBMZWdhY3kgc3R1ZmZcblx0Y29uc3QgY2xvc2VGb3JtID0gZnVuY3Rpb24gKCkge1xuXHRcdC8vIENsb3NlIGFsbCBvcGVuIGVkaXRvcnMgd2l0aG91dCByZWRpcmVjdCByZXNvbHV0aW9uIGFuZCBvdGhlciBhc3luY2hyb25vdXMgc3R1ZmYuXG5cdFx0Zm9yIChjb25zdCBlZGl0IG9mIGVkaXRvcnMpIHtcblx0XHRcdGlmIChlZGl0LnN0YXRlID09PSBPUEVOKSB7XG5cdFx0XHRcdGVkaXQuY2FuY2VsKCk7XG5cdFx0XHR9IGVsc2UgaWYgKGVkaXQuc3RhdGUgPT09IENIQU5HRV9QRU5ESU5HKSB7XG5cdFx0XHRcdGVkaXQuc2FuaXRpemVJbnB1dCgpO1xuXHRcdFx0XHRjb25zdCB2YWx1ZSA9IGVkaXQudGV4dC52YWx1ZS5zcGxpdCgnfCcpO1xuXHRcdFx0XHRsZXQga2V5ID0gbnVsbDtcblx0XHRcdFx0aWYgKHZhbHVlLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRbLCBrZXldID0gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgdiA9IHZhbHVlWzBdLnJlcGxhY2UoL18vZywgJyAnKS50cmltKCk7XG5cdFx0XHRcdGlmICh2Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdGVkaXQuY2FuY2VsKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZWRpdC5jdXJyZW50Q2F0ZWdvcnkgPSB2O1xuXHRcdFx0XHRcdGVkaXQuY3VycmVudEtleSA9IGtleTtcblx0XHRcdFx0XHRlZGl0LmN1cnJlbnRFeGlzdHMgPSB0aGlzLmlucHV0RXhpc3RzO1xuXHRcdFx0XHRcdGVkaXQuY2xvc2UoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0Y29uc3Qgc2V0dXBfdXBsb2FkID0gKCkgPT4ge1xuXHRcdG9uVXBsb2FkID0gdHJ1ZTtcblx0XHQvLyBBZGQgYW4gZW1wdHkgY2F0ZWdvcnkgYmFyIGF0IHRoZSBlbmQgb2YgdGhlIHRhYmxlIGNvbnRhaW5pbmcgdGhlIGRlc2NyaXB0aW9uLCBhbmQgY2hhbmdlIHRoZSBvbnN1Ym1pdCBoYW5kbGVyLlxuXHRcdGxldCBpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtdy1odG1sZm9ybS1kZXNjcmlwdGlvbicpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9d3BEZXN0RmlsZV0nKTtcblx0XHRpZiAoIWlwKSB7XG5cdFx0XHRpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9d3BEZXN0RmlsZV0nKTtcblx0XHRcdHdoaWxlIChpcCAmJiBpcC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAndGFibGUnKSB7XG5cdFx0XHRcdGlwID0gaXAucGFyZW50Tm9kZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCFpcCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCByZXVwbG9hZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9d3BGb3JSZVVwbG9hZF0nKTtcblx0XHRjb25zdCBkZXN0RmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9d3BEZXN0RmlsZV0nKTtcblx0XHRpZiAoKHJldXBsb2FkICYmICEhcmV1cGxvYWQudmFsdWUpIHx8IChkZXN0RmlsZSAmJiAoZGVzdEZpbGUuZGlzYWJsZWQgfHwgZGVzdEZpbGUucmVhZE9ubHkpKSkge1xuXHRcdFx0cmV0dXJuOyAvLyByZS11cGxvYWQgZm9ybS4uLlxuXHRcdH1cblx0XHQvLyBJbnNlcnQgYSB0YWJsZSByb3cgd2l0aCB0d28gZmllbGRzIChsYWJlbCBhbmQgZW1wdHkgY2F0ZWdvcnkgYmFyKVxuXHRcdGNvbnN0IGxhYmVsQ2VsbCA9IG1ha2UoJ3RkJyk7XG5cdFx0Y29uc3QgbGluZUNlbGwgPSBtYWtlKCd0ZCcpO1xuXHRcdC8vIENyZWF0ZSB0aGUgY2F0ZWdvcnkgbGluZVxuXHRcdGNhdExpbmUgPSBtYWtlKCdkaXYnKTtcblx0XHRjYXRMaW5lLmNsYXNzTmFtZSA9ICdjYXRsaW5rcyc7XG5cdFx0Y2F0TGluZS5pZCA9ICdjYXRsaW5rcyc7XG5cdFx0Y2F0TGluZS5zdHlsZS50ZXh0QWxpZ24gPSBpc19ydGwgPyAncmlnaHQnIDogJ2xlZnQnO1xuXHRcdC8vIFdlJ2xsIGJlIGluc2lkZSBhIHRhYmxlIHJvdy4gTWFrZSBzdXJlIHRoYXQgd2UgZG9uJ3QgaGF2ZSBtYXJnaW5zIG9yIHN0cmFuZ2UgYm9yZGVycy5cblx0XHRjYXRMaW5lLnN0eWxlLm1hcmdpbiA9ICcwJztcblx0XHRjYXRMaW5lLnN0eWxlLmJvcmRlciA9ICdub25lJztcblx0XHRsaW5lQ2VsbC5hcHBlbmQoY2F0TGluZSk7XG5cdFx0Ly8gQ3JlYXRlIHRoZSBsYWJlbFxuXHRcdGNvbnN0IGxhYmVsID0gbnVsbDtcblx0XHRpZiAobGFiZWwpIHtcblx0XHRcdGxhYmVsQ2VsbC5pZCA9ICdob3RjYXRMYWJlbFRyYW5zbGF0ZWQnO1xuXHRcdFx0bGFiZWxDZWxsLmFwcGVuZChsYWJlbCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxhYmVsQ2VsbC5pZCA9ICdob3RjYXRMYWJlbCc7XG5cdFx0XHRsYWJlbENlbGwuYXBwZW5kKG1ha2UoZ2V0TWVzc2FnZSgnY2F0ZWdvcmllcycpLCB0cnVlKSk7XG5cdFx0fVxuXHRcdGxhYmVsQ2VsbC5jbGFzc05hbWUgPSAnbXctbGFiZWwnO1xuXHRcdGxhYmVsQ2VsbC5zdHlsZS50ZXh0QWxpZ24gPSAncmlnaHQnO1xuXHRcdGxhYmVsQ2VsbC5zdHlsZS52ZXJ0aWNhbEFsaWduID0gJ21pZGRsZSc7XG5cdFx0Ly8gQ2hhbmdlIHRoZSBvbnN1Ym1pdCBoYW5kbGVyXG5cdFx0Y29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGxvYWQnKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXctdXBsb2FkLWZvcm0nKTtcblx0XHRpZiAoZm9ybSkge1xuXHRcdFx0Y29uc3QgbmV3Um93ID0gaXAuaW5zZXJ0Um93KC0xKTtcblx0XHRcdG5ld1Jvdy5hcHBlbmQobGFiZWxDZWxsKTtcblx0XHRcdG5ld1Jvdy5hcHBlbmQobGluZUNlbGwpO1xuXHRcdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAob2xkU3VibWl0LCAuLi5hcmdzKSA9PiB7XG5cdFx0XHRcdHJldHVybiAoKCkgPT4ge1xuXHRcdFx0XHRcdGxldCBkb19zdWJtaXQgPSB0cnVlO1xuXHRcdFx0XHRcdGlmIChvbGRTdWJtaXQpIHtcblx0XHRcdFx0XHRcdGlmICh0eXBlb2Ygb2xkU3VibWl0ID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXZhbFxuXHRcdFx0XHRcdFx0XHRkb19zdWJtaXQgPSB3aW5kb3cuZXZhbChvbGRTdWJtaXQpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChvbGRTdWJtaXQgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuXHRcdFx0XHRcdFx0XHRkb19zdWJtaXQgPSBvbGRTdWJtaXQuYXBwbHkoZm9ybSwgW29sZFN1Ym1pdCwgLi4uYXJnc10pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoIWRvX3N1Ym1pdCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjbG9zZUZvcm0oKTtcblx0XHRcdFx0XHQvLyBDb3B5IHRoZSBjYXRlZ29yaWVzXG5cdFx0XHRcdFx0Y29uc3QgZWIgPVxuXHRcdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGV4dGFyZWFbbmFtZT13cFVwbG9hZERlc2NyaXB0aW9uXScpIHx8XG5cdFx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd3BEZXNjJyk7XG5cdFx0XHRcdFx0bGV0IGFkZGVkT25lID0gZmFsc2U7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBlZGl0b3Igb2YgZWRpdG9ycykge1xuXHRcdFx0XHRcdFx0Y29uc3QgdCA9IGVkaXRvci5jdXJyZW50Q2F0ZWdvcnk7XG5cdFx0XHRcdFx0XHRpZiAoIXQpIHtcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjb25zdCBrZXkgPSBlZGl0b3IuY3VycmVudEtleTtcblx0XHRcdFx0XHRcdGNvbnN0IG5ld19jYXQgPSBgW1ske0hDLmNhdGVnb3J5X2Nhbm9uaWNhbH06JHt0fSR7a2V5ID8gYHwke2tleX1gIDogJyd9XV1gO1xuXHRcdFx0XHRcdFx0Ly8gT25seSBhZGQgaWYgbm90IGFscmVhZHkgcHJlc2VudFxuXHRcdFx0XHRcdFx0Y29uc3Qgbm93aWtpUmVnZXggPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRcdFx0XHQnPG5vJy5jb25jYXQoJ3dpa2k+JywgU3RyaW5nLnJhd2AoXFxzfFxcUykqPzwvbm9gLCAnd2lraScsICc+JyksXG5cdFx0XHRcdFx0XHRcdCdnJ1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdGNvbnN0IF9jbGVhbmVkVGV4dCA9IGViLnZhbHVlLnJlcGxhY2UoLzwhLS0oXFxzfFxcUykqPy0tPi9nLCAnJykucmVwbGFjZShub3dpa2lSZWdleCk7XG5cdFx0XHRcdFx0XHRpZiAoIWZpbmRfY2F0ZWdvcnkoX2NsZWFuZWRUZXh0LCB0LCB0cnVlKSkge1xuXHRcdFx0XHRcdFx0XHRlYi52YWx1ZSArPSBgXFxuJHtuZXdfY2F0fWA7XG5cdFx0XHRcdFx0XHRcdGFkZGVkT25lID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGFkZGVkT25lKSB7XG5cdFx0XHRcdFx0XHQvLyBSZW1vdmUgXCJzdWJzdDp1bmNcIiBhZGRlZCBieSBGbGluZm8gaWYgaXQgZGlkbid0IGZpbmQgY2F0ZWdvcmllc1xuXHRcdFx0XHRcdFx0Y29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKCd7eyQnLmNvbmNhdCgnc3Vic3Q6JykuY29uY2F0KCd1bmN9fScpLCAnZycpO1xuXHRcdFx0XHRcdFx0ZWIudmFsdWUgPSBlYi52YWx1ZS5yZXBsYWNlKHJlZ2V4LCAnJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9KShmb3JtLm9uc3VibWl0KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblx0bGV0IGNsZWFuZWRUZXh0ID0gbnVsbDtcblx0Y29uc3QgaXNPblBhZ2UgPSAoe2ZpcnN0Q2hpbGR9KSA9PiB7XG5cdFx0aWYgKGZpcnN0Q2hpbGQubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0bGV0IGNhdFRpdGxlID0gdGl0bGUoZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSk7XG5cdFx0aWYgKCFjYXRUaXRsZSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGNhdFRpdGxlID0gY2F0VGl0bGUuc2xpY2UoY2F0VGl0bGUuaW5kZXhPZignOicpICsgMSkucmVwbGFjZSgvXy9nLCAnICcpO1xuXHRcdGlmIChIQy5ibGFja2xpc3QgJiYgSEMuYmxhY2tsaXN0LnRlc3QoY2F0VGl0bGUpKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y29uc3QgcmVzdWx0ID0ge1xuXHRcdFx0dGl0bGU6IGNhdFRpdGxlLFxuXHRcdFx0bWF0Y2g6IFsnJywgJycsICcnXSxcblx0XHR9O1xuXHRcdGlmIChwYWdlVGV4dCA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdFx0aWYgKGNsZWFuZWRUZXh0ID09PSBudWxsKSB7XG5cdFx0XHRjb25zdCBub3dpa2lSZWdleCA9IG5ldyBSZWdFeHAoJzxubycuY29uY2F0KCd3aWtpPicsIFN0cmluZy5yYXdgKFxcc3xcXFMpKj88L25vYCwgJ3dpa2knLCAnPicpLCAnZycpO1xuXHRcdFx0Y2xlYW5lZFRleHQgPSBwYWdlVGV4dC5yZXBsYWNlKC88IS0tKFxcc3xcXFMpKj8tLT4vZywgJycpLnJlcGxhY2Uobm93aWtpUmVnZXgsICcnKTtcblx0XHR9XG5cdFx0cmVzdWx0Lm1hdGNoID0gZmluZF9jYXRlZ29yeShjbGVhbmVkVGV4dCwgY2F0VGl0bGUsIHRydWUpO1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cdGxldCBpbml0aWFsaXplZCA9IGZhbHNlO1xuXHRsZXQgc2V0dXBUaW1lb3V0ID0gbnVsbDtcblx0Y29uc3QgZmluZEJ5Q2xhc3MgPSAoc2NvcGUsIHRhZywgY2xhc3NOYW1lKSA9PiB7XG5cdFx0Y29uc3QgcmVzdWx0ID0gJChzY29wZSkuZmluZChgJHt0YWd9LiR7Y2xhc3NOYW1lfWApO1xuXHRcdHJldHVybiByZXN1bHQgJiYgcmVzdWx0Lmxlbmd0aCA+IDAgPyByZXN1bHRbMF0gOiBudWxsO1xuXHR9O1xuXHRjb25zdCBzZXR1cCA9IChhZGRpdGlvbmFsV29yaykgPT4ge1xuXHRcdGlmIChpbml0aWFsaXplZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpbml0aWFsaXplZCA9IHRydWU7XG5cdFx0aWYgKHNldHVwVGltZW91dCkge1xuXHRcdFx0d2luZG93LmNsZWFyVGltZW91dChzZXR1cFRpbWVvdXQpO1xuXHRcdFx0c2V0dXBUaW1lb3V0ID0gbnVsbDtcblx0XHR9XG5cdFx0Ly8gRmluZCB0aGUgY2F0ZWdvcnkgYmFyLCBvciBjcmVhdGUgYW4gZW1wdHkgb25lIGlmIHRoZXJlIGlzbid0IG9uZS4gVGhlbiBhZGQgLS8rLSBsaW5rcyBhZnRlclxuXHRcdC8vIGVhY2ggY2F0ZWdvcnksIGFuZCBhZGQgdGhlICsgbGluay5cblx0XHRjYXRMaW5lIHx8PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXctbm9ybWFsLWNhdGxpbmtzJyk7IC8vIFNwZWNpYWw6VXBsb2FkXG5cdFx0Y29uc3QgaGlkZGVuQ2F0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtdy1oaWRkZW4tY2F0bGlua3MnKTtcblx0XHRpZiAoIWNhdExpbmUpIHtcblx0XHRcdGxldCBmb290ZXIgPSBudWxsO1xuXHRcdFx0aWYgKCFoaWRkZW5DYXRzKSB7XG5cdFx0XHRcdGZvb3RlciA9IGZpbmRCeUNsYXNzKGRvY3VtZW50LCAnZGl2JywgJ3ByaW50Zm9vdGVyJyk7XG5cdFx0XHRcdGlmICghZm9vdGVyKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9IC8vIERvbid0IGtub3cgd2hlcmUgdG8gaW5zZXJ0IHRoZSBjYXRlZ29yeSBsaW5lXG5cdFx0XHR9XG5cdFx0XHRjYXRMaW5lID0gbWFrZSgnZGl2Jyk7XG5cdFx0XHRjYXRMaW5lLmlkID0gJ213LW5vcm1hbC1jYXRsaW5rcyc7XG5cdFx0XHRjYXRMaW5lLnN0eWxlLnRleHRBbGlnbiA9IGlzX3J0bCA/ICdyaWdodCcgOiAnbGVmdCc7XG5cdFx0XHQvLyBBZGQgYSBsYWJlbFxuXHRcdFx0Y29uc3QgbGFiZWwgPSBtYWtlKCdhJyk7XG5cdFx0XHRsYWJlbC5ocmVmID0gY29uZi53Z0FydGljbGVQYXRoLnJlcGxhY2UoJyQxJywgJ1NwZWNpYWw6Q2F0ZWdvcmllcycpO1xuXHRcdFx0bGFiZWwudGl0bGUgPSBnZXRNZXNzYWdlKCdjYXRlZ29yaWVzJyk7XG5cdFx0XHRsYWJlbC5hcHBlbmQobWFrZShnZXRNZXNzYWdlKCdjYXRlZ29yaWVzJyksIHRydWUpKTtcblx0XHRcdGNhdExpbmUuYXBwZW5kKGxhYmVsKTtcblx0XHRcdGNhdExpbmUuYXBwZW5kKG1ha2UoJzonLCB0cnVlKSk7XG5cdFx0XHQvLyBJbnNlcnQgdGhlIG5ldyBjYXRlZ29yeSBsaW5lXG5cdFx0XHRsZXQgY29udGFpbmVyID0gaGlkZGVuQ2F0cyA/IGhpZGRlbkNhdHMucGFyZW50Tm9kZSA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXRsaW5rcycpO1xuXHRcdFx0aWYgKCFjb250YWluZXIpIHtcblx0XHRcdFx0Y29udGFpbmVyID0gbWFrZSgnZGl2Jyk7XG5cdFx0XHRcdGNvbnRhaW5lci5pZCA9ICdjYXRsaW5rcyc7XG5cdFx0XHRcdGZvb3Rlci5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjb250YWluZXIsIGZvb3Rlci5uZXh0U2libGluZyk7XG5cdFx0XHR9XG5cdFx0XHRjb250YWluZXIuY2xhc3NOYW1lID0gJ2NhdGxpbmtzIG5vcHJpbnQnO1xuXHRcdFx0Y29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdGlmIChoaWRkZW5DYXRzKSB7XG5cdFx0XHRcdGhpZGRlbkNhdHMuYmVmb3JlKGNhdExpbmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29udGFpbmVyLmFwcGVuZChjYXRMaW5lKTtcblx0XHRcdH1cblx0XHR9IC8vIGVuZCBpZiBjYXRMaW5lIGV4aXN0c1xuXHRcdGlmIChpc19ydGwpIHtcblx0XHRcdGNhdExpbmUuZGlyID0gJ3J0bCc7XG5cdFx0fVxuXHRcdC8vIENyZWF0ZSBlZGl0b3JzIGZvciBhbGwgZXhpc3RpbmcgY2F0ZWdvcmllc1xuXHRcdGNvbnN0IGNyZWF0ZUVkaXRvcnMgPSAobGluZSwgaXNfaGlkZGVuKSA9PiB7XG5cdFx0XHRsZXQgaTtcblx0XHRcdGxldCBjYXRzID0gbGluZS5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xuXHRcdFx0aWYgKGNhdHMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRuZXdET00gPSB0cnVlO1xuXHRcdFx0XHRsaW5lID0gY2F0c1swXS5wYXJlbnROb2RlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2F0cyA9IGxpbmUucXVlcnlTZWxlY3RvckFsbCgnc3BhbicpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gQ29weSBjYXRzLCBvdGhlcndpc2UgaXQnbGwgYWxzbyBtYWdpY2FsbHkgY29udGFpbiBvdXIgYWRkZWQgc3BhbnMgYXMgaXQgaXMgYSBsaXZlIGNvbGxlY3Rpb24hXG5cdFx0XHRjb25zdCBjb3B5Q2F0cyA9IEFycmF5LmZyb20oe1xuXHRcdFx0XHRsZW5ndGg6IGNhdHMubGVuZ3RoLFxuXHRcdFx0fSk7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2F0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb3B5Q2F0c1tpXSA9IGNhdHNbaV07XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgY29weUNhdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29uc3QgdGVzdCA9IGlzT25QYWdlKGNvcHlDYXRzW2ldKTtcblx0XHRcdFx0aWYgKHRlc3QgIT09IG51bGwgJiYgdGVzdC5tYXRjaCAhPT0gbnVsbCAmJiBsaW5lKSB7XG5cdFx0XHRcdFx0bmV3IENhdGVnb3J5RWRpdG9yKGxpbmUsIGNvcHlDYXRzW2ldLCB0ZXN0LnRpdGxlLCB0ZXN0Lm1hdGNoWzJdLCBpc19oaWRkZW4pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY29weUNhdHMubGVuZ3RoID4gMCA/IGNvcHlDYXRzLmF0KC0xKSA6IG51bGw7XG5cdFx0fTtcblx0XHRjb25zdCBsYXN0U3BhbiA9IGNyZWF0ZUVkaXRvcnMoY2F0TGluZSwgZmFsc2UpO1xuXHRcdC8vIENyZWF0ZSBvbmUgdG8gYWRkIGEgbmV3IGNhdGVnb3J5XG5cdFx0bmV3IENhdGVnb3J5RWRpdG9yKG5ld0RPTSA/IGNhdExpbmUucXVlcnlTZWxlY3RvckFsbCgndWwnKVswXSA6IGNhdExpbmUsIG51bGwsIG51bGwsIGxhc3RTcGFuICE9PSBudWxsLCBmYWxzZSk7XG5cdFx0aWYgKCFvblVwbG9hZCkge1xuXHRcdFx0aWYgKHBhZ2VUZXh0ICE9PSBudWxsICYmIGhpZGRlbkNhdHMpIHtcblx0XHRcdFx0aWYgKGlzX3J0bCkge1xuXHRcdFx0XHRcdGhpZGRlbkNhdHMuZGlyID0gJ3J0bCc7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y3JlYXRlRWRpdG9ycyhoaWRkZW5DYXRzLCB0cnVlKTtcblx0XHRcdH1cblx0XHRcdC8vIEFuZCBmaW5hbGx5IGFkZCB0aGUgXCJtdWx0aS1tb2RlXCIgc3Bhbi4gKERvIHRoaXMgYXQgdGhlIGVuZCwgb3RoZXJ3aXNlIGl0IGVuZHMgdXAgaW4gdGhlIGxpc3QgYWJvdmUuKVxuXHRcdFx0Y29uc3QgZW5hYmxlTXVsdGkgPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHRlbmFibGVNdWx0aS5jbGFzc05hbWUgPSAnbm9wcmludCc7XG5cdFx0XHRpZiAoaXNfcnRsKSB7XG5cdFx0XHRcdGVuYWJsZU11bHRpLmRpciA9ICdydGwnO1xuXHRcdFx0fVxuXHRcdFx0Y2F0TGluZS5pbnNlcnRCZWZvcmUoZW5hYmxlTXVsdGksIGNhdExpbmUuZmlyc3RDaGlsZC5uZXh0U2libGluZyk7XG5cdFx0XHRlbmFibGVNdWx0aS5hcHBlbmQobWFrZSgnXFx1MDBBMCcsIHRydWUpKTsgLy8gbmJzcFxuXHRcdFx0bXVsdGlTcGFuID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0ZW5hYmxlTXVsdGkuYXBwZW5kKG11bHRpU3Bhbik7XG5cdFx0XHRtdWx0aVNwYW4uaW5uZXJIVE1MID0gYCg8YT4ke0hDLmFkZG11bHRpfTwvYT4pYDtcblx0XHRcdGNvbnN0IFtsaW5rXSA9IG11bHRpU3Bhbi5xdWVyeVNlbGVjdG9yQWxsKCdhJyk7XG5cdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdHNldE11bHRpSW5wdXQoKTtcblx0XHRcdFx0Y2hlY2tNdWx0aUlucHV0KCk7XG5cdFx0XHRcdHJldHVybiBldnRLaWxsKGV2ZW50KTtcblx0XHRcdH0pO1xuXHRcdFx0bGluay50aXRsZSA9IGdldE1lc3NhZ2UoJ211bHRpX3Rvb2x0aXAnKTtcblx0XHRcdGxpbmsuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuXHRcdH1cblx0XHRjbGVhbmVkVGV4dCA9IG51bGw7XG5cdFx0aWYgKGFkZGl0aW9uYWxXb3JrIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcblx0XHRcdGFkZGl0aW9uYWxXb3JrKCk7XG5cdFx0fVxuXHRcdG13Lmhvb2soJ2hvdGNhdC5yZWFkeScpLmZpcmUoKTsgLy8gRXhlY3V0ZSByZWdpc3RlcmVkIGNhbGxiYWNrIGZ1bmN0aW9uc1xuXHRcdCQoJ2JvZHknKS50cmlnZ2VyKCdob3RjYXRTZXR1cENvbXBsZXRlZCcpO1xuXHR9O1xuXHRjb25zdCBjcmVhdGVDb21taXRGb3JtID0gKCkgPT4ge1xuXHRcdGlmIChjb21taXRGb3JtKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IGZvcm1Db250YWluZXIgPSBtYWtlKCdkaXYnKTtcblx0XHRmb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZChmb3JtQ29udGFpbmVyKTtcblx0XHRmb3JtQ29udGFpbmVyLmlubmVySFRNTCA9IGA8Zm9ybSBpZD1cImhvdGNhdENvbW1pdEZvcm1cIiBtZXRob2Q9XCJwb3N0XCIgZW5jdHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIiBhY3Rpb249XCIke1xuXHRcdFx0Y29uZi53Z1NjcmlwdFxuXHRcdH0/dGl0bGU9JHtlbmNvZGVVUklDb21wb25lbnQoY29uZi53Z1BhZ2VOYW1lKX0mYWN0aW9uPXN1Ym1pdFwiPlxuXHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwVGV4dGJveDFcIj5cblx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJtb2RlbFwiIHZhbHVlPVwiJHtjb25mLndnUGFnZUNvbnRlbnRNb2RlbH1cIj5cblx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJmb3JtYXRcIiB2YWx1ZT1cInRleHQveC13aWtpXCI+XG5cdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwid3BTdW1tYXJ5XCIgdmFsdWU9XCJcIj5cblx0XHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIndwTWlub3JlZGl0XCIgdGl0bGU9XCJ3cE1pbm9yZWRpdFwiIHZhbHVlPVwiMVwiPlxuXHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwid3BXYXRjaHRoaXNcIiB0aXRsZT1cIndwV2F0Y2h0aGlzXCIgdmFsdWU9XCIxXCI+XG5cdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwid3BBdXRvU3VtbWFyeVwiIHZhbHVlPVwiZDQxZDhjZDk4ZjAwYjIwNGU5ODAwOTk4ZWNmODQyN2VcIj5cblx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ3cEVkaXR0aW1lXCI+XG5cdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwid3BTdGFydHRpbWVcIj5cblx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ3cERpZmZcIiB2YWx1ZT1cIndwRGlmZlwiPlxuXHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIm9sZGlkXCIgdmFsdWU9XCIwXCI+XG5cdFx0PGlucHV0IHR5cGU9XCJzdWJtaXRcIiBuYW1lPVwiaGNDb21taXRcIiB2YWx1ZT1cImhjQ29tbWl0XCI+XG5cdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwid3BFZGl0VG9rZW5cIj5cblx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ3cFVsdGltYXRlUGFyYW1cIiB2YWx1ZT1cIjFcIj5cblx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ3cENoYW5nZVRhZ3NcIj5cblx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIHZhbHVlPVwi4oSz8J2SsuKZpfCdk4rwnZOD8J2SvvCdkrjihLTwnZK54oSvXCIgbmFtZT1cIndwVW5pY29kZUNoZWNrXCI+XG5cdFx0PC9mb3JtPmA7XG5cdFx0Y29tbWl0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob3RjYXRDb21taXRGb3JtJyk7XG5cdH07XG5cdGNvbnN0IGdldFBhZ2UgPSAoKSA9PiB7XG5cdFx0Ly8gV2Uga25vdyB3ZSBoYXZlIGFuIGFydGljbGUgaGVyZS5cblx0XHRpZiAoY29uZi53Z0FydGljbGVJZCkge1xuXHRcdFx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHJhd2NvbnRpbnVlOiAnJyxcblx0XHRcdFx0dGl0bGVzOiBjb25mLndnUGFnZU5hbWUsXG5cdFx0XHRcdHByb3A6IFsnaW5mbycsICdyZXZpc2lvbnMnXSxcblx0XHRcdFx0cnZwcm9wOiBbJ2NvbnRlbnQnLCAndGltZXN0YW1wJywgJ2lkcyddLFxuXHRcdFx0XHRydmxpbWl0OiAnMScsXG5cdFx0XHRcdHJ2c3RhcnRpZDogY29uZi53Z0N1clJldmlzaW9uSWQsXG5cdFx0XHRcdHJ2c2xvdHM6ICdtYWluJyxcblx0XHRcdFx0bWV0YTogWydzaXRlaW5mbyddLFxuXHRcdFx0fTtcblx0XHRcdEhDLnN0YXJ0ID0gKGRhdGEpID0+IHtcblx0XHRcdFx0c2V0UGFnZShkYXRhKTtcblx0XHRcdFx0c2V0dXAoY3JlYXRlQ29tbWl0Rm9ybSk7XG5cdFx0XHR9O1xuXHRcdFx0YXBpLmdldChwYXJhbXMpLnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdFx0SEMuc3RhcnQoZGF0YSk7XG5cdFx0XHR9KTtcblx0XHRcdHNldHVwVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRzZXR1cChjcmVhdGVDb21taXRGb3JtKTtcblx0XHRcdH0sIDQwMDApOyAvLyA0IHNlYywganVzdCBpbiBjYXNlIGdldHRpbmcgdGhlIHdpa2l0ZXh0IHRha2VzIGxvbmdlci5cblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gRG9lc24ndCBleGlzdCB5ZXQuIERpc2FibGUgb24gbm9uLWV4aXN0aW5nIFVzZXIgcGFnZXMuXG5cdFx0XHRpZiAoY29uZi53Z05hbWVzcGFjZU51bWJlciA9PT0gMikge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRwYWdlVGV4dCA9ICcnO1xuXHRcdFx0cGFnZVRpbWUgPSBudWxsO1xuXHRcdFx0c2V0dXAoY3JlYXRlQ29tbWl0Rm9ybSk7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBzZXRTdGF0ZSA9IChzdGF0ZSkgPT4ge1xuXHRcdGNvbnN0IGNhdHMgPSBzdGF0ZS5zcGxpdCgnXFxuJyk7XG5cdFx0aWYgKGNhdHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0aWYgKGluaXRpYWxpemVkICYmIGVkaXRvcnMubGVuZ3RoID09PSAxICYmIGVkaXRvcnNbMF0uaXNBZGRDYXRlZ29yeSkge1xuXHRcdFx0Ly8gSW5zZXJ0IG5ldyBzcGFucyBhbmQgY3JlYXRlIG5ldyBlZGl0b3JzIGZvciB0aGVtLlxuXHRcdFx0Y29uc3QgbmV3U3BhbnMgPSBbXTtcblx0XHRcdGNvbnN0IGJlZm9yZSA9IGVkaXRvcnMubGVuZ3RoID09PSAxID8gZWRpdG9yc1swXS5zcGFuIDogbnVsbDtcblx0XHRcdGxldCBpO1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGNhdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKGNhdHNbaV0ubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IGNhdCA9IGNhdHNbaV0uc3BsaXQoJ3wnKTtcblx0XHRcdFx0Y29uc3Qga2V5ID0gY2F0Lmxlbmd0aCA+IDEgPyBjYXRbMV0gOiBudWxsO1xuXHRcdFx0XHRbY2F0XSA9IGNhdDtcblx0XHRcdFx0Y29uc3QgbGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdFx0bGluay5ocmVmID0gd2lraVBhZ2VQYXRoKGAke0hDLmNhdGVnb3J5X2Nhbm9uaWNhbH06JHtjYXR9YCk7XG5cdFx0XHRcdGxpbmsuYXBwZW5kKG1ha2UoY2F0LCB0cnVlKSk7XG5cdFx0XHRcdGxpbmsudGl0bGUgPSBjYXQ7XG5cdFx0XHRcdGNvbnN0IHNwYW4gPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHRcdHNwYW4uYXBwZW5kKGxpbmspO1xuXHRcdFx0XHRpZiAoIWkpIHtcblx0XHRcdFx0XHRjYXRMaW5lLmluc2VydEJlZm9yZShtYWtlKCcgJywgdHJ1ZSksIGJlZm9yZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YmVmb3JlLmJlZm9yZShzcGFuKTtcblx0XHRcdFx0aWYgKGJlZm9yZSAmJiBpICsgMSA8IGNhdHMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0cGFyZW50Lmluc2VydEJlZm9yZShtYWtlKCcgfCAnLCB0cnVlKSwgYmVmb3JlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRuZXdTcGFuc1tuZXdTcGFucy5sZW5ndGhdID0ge1xuXHRcdFx0XHRcdGVsZW1lbnQ6IHNwYW4sXG5cdFx0XHRcdFx0dGl0bGU6IGNhdCxcblx0XHRcdFx0XHRrZXksXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHQvLyBBbmQgY2hhbmdlIHRoZSBsYXN0IG9uZS4uLlxuXHRcdFx0aWYgKGJlZm9yZSkge1xuXHRcdFx0XHRiZWZvcmUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobWFrZSgnIHwgJywgdHJ1ZSksIGJlZm9yZSk7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgbmV3U3BhbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0bmV3IENhdGVnb3J5RWRpdG9yKGNhdExpbmUsIG5ld1NwYW5zW2ldLmVsZW1lbnQsIG5ld1NwYW5zW2ldLnRpdGxlLCBuZXdTcGFuc1tpXS5rZXkpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fTtcblx0Y29uc3QgZ2V0U3RhdGUgPSAoKSA9PiB7XG5cdFx0bGV0IHJlc3VsdCA9IG51bGw7XG5cdFx0Zm9yIChjb25zdCBlZGl0b3Igb2YgZWRpdG9ycykge1xuXHRcdFx0bGV0IHRleHQgPSBlZGl0b3IuY3VycmVudENhdGVnb3J5O1xuXHRcdFx0Y29uc3Qga2V5ID0gZWRpdG9yLmN1cnJlbnRLZXk7XG5cdFx0XHRpZiAodGV4dCAmJiB0ZXh0Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0aWYgKGtleSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdHRleHQgKz0gYHwke2tleX1gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChyZXN1bHQgPT09IG51bGwpIHtcblx0XHRcdFx0XHRyZXN1bHQgPSB0ZXh0O1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJlc3VsdCArPSBgXFxuJHt0ZXh0fWA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblx0Y29uc3QgcmVhbGx5X3J1biA9ICgpID0+IHtcblx0XHRpbml0aWFsaXplKCk7XG5cdFx0aWYgKFxuXHRcdFx0IUhDLnVwbG9hZF9kaXNhYmxlZCAmJlxuXHRcdFx0Y29uZi53Z05hbWVzcGFjZU51bWJlciA9PT0gLTEgJiZcblx0XHRcdGNvbmYud2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUgPT09ICdVcGxvYWQnICYmXG5cdFx0XHRjb25mLndnVXNlck5hbWVcblx0XHQpIHtcblx0XHRcdHNldHVwX3VwbG9hZCgpO1xuXHRcdFx0c2V0dXAoKCkgPT4ge1xuXHRcdFx0XHQvLyBDaGVjayBmb3Igc3RhdGUgcmVzdG9yYXRpb24gb25jZSB0aGUgc2V0dXAgaXMgZG9uZSBvdGhlcndpc2UsIGJ1dCBiZWZvcmUgc2lnbmFsbGluZyBzZXR1cCBjb21wbGV0aW9uXG5cdFx0XHRcdGlmICh3aW5kb3cuVXBsb2FkRm9ybSAmJiBVcGxvYWRGb3JtLnByZXZpb3VzX2hvdGNhdF9zdGF0ZSkge1xuXHRcdFx0XHRcdFVwbG9hZEZvcm0ucHJldmlvdXNfaG90Y2F0X3N0YXRlID0gc2V0U3RhdGUoVXBsb2FkRm9ybS5wcmV2aW91c19ob3RjYXRfc3RhdGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHQhY29uZi53Z0lzQXJ0aWNsZSB8fFxuXHRcdFx0XHRjb25mLndnQWN0aW9uICE9PSAndmlldycgfHxcblx0XHRcdFx0cGFyYW0oJ2RpZmYnKSAhPT0gbnVsbCB8fFxuXHRcdFx0XHRwYXJhbSgnb2xkaWQnKSAhPT0gbnVsbCB8fFxuXHRcdFx0XHQhY2FuX2VkaXQoKSB8fFxuXHRcdFx0XHRIQy5kaXNhYmxlKClcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRnZXRQYWdlKCk7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBydW4gPSAoKSA9PiB7XG5cdFx0aWYgKEhDLnN0YXJ0ZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0SEMuc3RhcnRlZCA9IHRydWU7XG5cdFx0cmVhbGx5X3J1bigpO1xuXHR9O1xuXHQvLyBFeHBvcnQgbGVnYWN5IGZ1bmN0aW9uc1xuXHR3aW5kb3cuaG90Y2F0X2dldF9zdGF0ZSA9ICgpID0+IHtcblx0XHRyZXR1cm4gZ2V0U3RhdGUoKTtcblx0fTtcblx0d2luZG93LmhvdGNhdF9zZXRfc3RhdGUgPSAoc3RhdGUpID0+IHtcblx0XHRyZXR1cm4gc2V0U3RhdGUoc3RhdGUpO1xuXHR9O1xuXHR3aW5kb3cuaG90Y2F0X2Nsb3NlX2Zvcm0gPSAoKSA9PiB7XG5cdFx0Y2xvc2VGb3JtKCk7XG5cdH07XG5cdEhDLnJ1bldoZW5SZWFkeSA9IChjYWxsYmFjaykgPT4ge1xuXHRcdC8vIHJ1biB1c2VyLXJlZ2lzdGVyZWQgY29kZSBvbmNlIEhvdENhdCBpcyBmdWxseSBzZXQgdXAgYW5kIHJlYWR5LlxuXHRcdG13Lmhvb2soJ2hvdGNhdC5yZWFkeScpLmFkZChjYWxsYmFjayk7XG5cdH07XG5cdC8vIFJ1biBhcyBzb29uIGFzIHBvc3NpYmxlLiBUaGlzIHZhcmllcyBkZXBlbmRpbmcgb24gTWVkaWFXaWtpIHZlcnNpb247XG5cdC8vIHdpbmRvdydzICdsb2FkJyBldmVudCBpcyBhbHdheXMgc2FmZSwgYnV0IHVzdWFsbHkgd2UgY2FuIGRvIGJldHRlciB0aGFuIHRoYXQuXG5cdGlmIChjb25mLndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lICE9PSAnVXBsb2FkJykge1xuXHRcdC8vIFJlbG9hZCBIb3RDYXQgYWZ0ZXIgKFZFKSBlZGl0cyAoYnVnIFQxMDMyODUpXG5cdFx0bXcuaG9vaygncG9zdEVkaXQnKS5hZGQoKCkgPT4ge1xuXHRcdFx0Ly8gUmVzZXQgSG90Q2F0IGluIGNhc2UgdGhpcyBpcyBhIHNvZnQgcmVsb2FkIChlLmcuIFZpc3VhbEVkaXRvciBlZGl0KSwgdW5sZXNzIHRoZSBjYXRlZ29yaWVzXG5cdFx0XHQvLyB3ZXJlIG5vdCByZS1yZW5kZXJlZCBhbmQgb3VyIGludGVyZmFjZSBpcyBzdGlsbCB0aGVyZSAoZS5nLiBEaXNjdXNzaW9uVG9vbHMgZWRpdClcblx0XHRcdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2F0bGlua3MgLmhvdGNhdGxpbmsnKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjYXRMaW5lID0gbnVsbDtcblx0XHRcdGVkaXRvcnMgPSBbXTtcblx0XHRcdGluaXRpYWxpemVkID0gZmFsc2U7XG5cdFx0XHRIQy5zdGFydGVkID0gZmFsc2U7XG5cdFx0XHRydW4oKTtcblx0XHR9KTtcblx0fVxuXHQvLyBXZSBjYW4gc2FmZWx5IHRyaWdnZXIganVzdCBhZnRlciB1c2VyIGNvbmZpZ3VyYXRpb24gaXMgbG9hZGVkLlxuXHQvLyBVc2UgYWx3YXlzKCkgaW5zdGVhZCBvZiB0aGVuKCkgdG8gYWxzbyBzdGFydCBIb3RDYXQgaWYgdGhlIHVzZXIgbW9kdWxlIGhhcyBwcm9ibGVtcy5cblx0JChydW4pO1xufSkoKTtcbiIsICJjb25zdCBnZXRNZXNzYWdlID0gKGtleTogc3RyaW5nLCAuLi5hcmdzOiBzdHJpbmdbXSk6IHN0cmluZyA9PiB7XG5cdGtleSA9IGBob3RjYXQtJHtrZXl9YDtcblx0Ly8gTWVzc2FnZXMgdGhhdCBjYW4gYmUgdXNlZCBoZXJlOlxuXHQvLyAqIHNlZSBtZXNzYWdlcy50c1xuXHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdHJldHVybiBtdy5tZXNzYWdlKGtleSwgLi4uYXJncykucGxhaW4oKTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiY29uc3QgaG90Q2F0TWVzc2FnZXMgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IHt3Z1VzZXJMYW5ndWFnZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKFsnemgtaGFudCcsICd6aC1oaycsICd6aC1tbycsICd6aC10dyddLmluY2x1ZGVzKHdnVXNlckxhbmd1YWdlKSkge1xuXHRcdG13Lm1lc3NhZ2VzLnNldCh7XG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9yZW1vdmVkJzogJ+W3suenu+mZpFtbQ2F0ZWdvcnk6JDFdXScsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXRlbXBsYXRlX3JlbW92ZWQnOiAn5bey56e76Zmke3tbW0NhdGVnb3J5OiQxXV19fScsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9hZGRlZCc6ICflt7Lmt7vliqBbW0NhdGVnb3J5OiQxXV0nLFxuXHRcdFx0Ly8gJDIgaXMgdGhlIG5ldyBrZXlcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X2tleWNoYW5nZSc6ICflt7LoqK3nva5bW0NhdGVnb3J5OiQxXV3nmoTmlrDmjpLluo/lrZfvvJpcIiQyXCInLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfbm90Rm91bmQnOiAn5YiG6aGe4oCcJDHigJ3mspLmnInmib7liLAnLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfZXhpc3RzJzogJ+WIhumhnuKAnCQx4oCd5bey57aT5a2Y5Zyo77yM5rKS5pyJ5re75Yqg44CCJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X3Jlc29sdmVkJzogJ++8iOmHjeWumuWQkVtbQ2F0ZWdvcnk6JDFdXeW3suiZleeQhu+8iScsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXVuY2F0X3JlbW92ZWQnOiAn5bey56e76Zmke3t1bmNhdGVnb3JpemVkfX0nLFxuXHRcdFx0Ly8gU29tZSB0ZXh0IHRvIHByZWZpeCB0byB0aGUgZWRpdCBzdW1tYXJ5LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1wcmVmaXgnOiAn5L2/55SoW1tIOkhPVENBVHxIb3RDYXRdXScsXG5cdFx0XHQvLyBTb21lIHRleHQgdG8gYXBwZW5kIHRvIHRoZSBlZGl0IHN1bW1hcnkuIE5hbWVkICd1c2luZycgZm9yIGhpc3RvcmljYWwgcmVhc29ucy4gSWYgeW91IHByZWZlclxuXHRcdFx0Ly8gdG8gaGF2ZSBhIG1hcmtlciBhdCB0aGUgZnJvbnQsIHVzZSBwcmVmaXggYW5kIHNldCB0aGlzIHRvIHRoZSBlbXB0eSBzdHJpbmcuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXVzaW5nJzogJycsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLW11bHRpX2NoYW5nZSc6ICckMeWAi+WIhumhnicsXG5cdFx0XHQvLyBBbnkgY2F0ZWdvcnkgaW4gdGhpcyBjYXRlZ29yeSBpcyBkZWVtZWQgYSBkaXNhbWJpZ3VhdGlvbiBjYXRlZ29yeTsgaS5lLiwgYSBjYXRlZ29yeSB0aGF0IHNob3VsZCBub3QgY29udGFpblxuXHRcdFx0Ly8gYW55IGl0ZW1zLCBidXQgdGhhdCBjb250YWlucyBsaW5rcyB0byBvdGhlciBjYXRlZ29yaWVzIHdoZXJlIHN0dWZmIHNob3VsZCBiZSBjYXRlZ29yaXplZC4gSWYgeW91IGRvbid0IGhhdmVcblx0XHRcdC8vIHRoYXQgY29uY2VwdCBvbiB5b3VyIHdpa2ksIHNldCBpdCB0byBibGFuayBzdHJpbmcuIFVzZSBibGFua3MsIG5vdCB1bmRlcnNjb3Jlcy5cblx0XHRcdCdob3RjYXQtZGlzYW1iaWdfY2F0ZWdvcnknOiAnJyxcblx0XHRcdC8vIEFueSBjYXRlZ29yeSBpbiB0aGlzIGNhdGVnb3J5IGlzIGRlZW1lZCBhIChzb2Z0KSByZWRpcmVjdCB0byBzb21lIG90aGVyIGNhdGVnb3J5IGRlZmluZWQgYnkgYSBsaW5rXG5cdFx0XHQvLyB0byBhbm90aGVyIG5vbi1ibGFja2xpc3RlZCBjYXRlZ29yeS4gSWYgeW91ciB3aWtpIGRvZXNuJ3QgaGF2ZSBzb2Z0IGNhdGVnb3J5IHJlZGlyZWN0cywgc2V0IHRoaXMgdG8gbnVsbC5cblx0XHRcdC8vIElmIGEgc29mdC1yZWRpcmVjdGVkIGNhdGVnb3J5IGNvbnRhaW5zIG1vcmUgdGhhbiBvbmUgbGluayB0byBhbm90aGVyIG5vbi1ibGFja2xpc3RlZCBjYXRlZ29yeSwgaXQncyBjb25zaWRlcmVkXG5cdFx0XHQvLyBhIGRpc2FtYmlndWF0aW9uIGNhdGVnb3J5IGluc3RlYWQuXG5cdFx0XHQnaG90Y2F0LXJlZGlyX2NhdGVnb3J5JzogJ+W3sumHjeWumuWQkeeahOWIhuexuycsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXNlcGFyYXRvcic6ICc7ICcsXG5cdFx0XHQvLyAkMSBpcyByZXBsYWNlZCBieSBhIG51bWJlci4gSWYgeW91ciBsYW5ndWFnZSBoYXMgc2V2ZXJhbCBwbHVyYWwgZm9ybXMgKGMuZi4gW1s6ZW53aWtpOkR1YWwgKGdyYW1tYXRpY2FsIGZvcm0pXV0pLFxuXHRcdFx0Ly8geW91IGNhbiBzZXQgdGhpcyB0byBhbiBhcnJheSBvZiBzdHJpbmdzIHN1aXRhYmxlIGZvciBwYXNzaW5nIHRvIG13Lmxhbmd1YWdlLmNvbmZpZ1BsdXJhbCgpLlxuXHRcdFx0Ly8gSWYgdGhhdCBmdW5jdGlvbiBkb2Vzbid0IGV4aXN0LCBIb3RDYXQgd2lsbCBzaW1wbHkgZmFsbCBiYWNrIHRvIHVzaW5nIHRoZSBsYXN0XG5cdFx0XHQvLyBlbnRyeSBpbiB0aGUgYXJyYXkuXG5cdFx0XHQvLyBEZWZhdWx0cyB0byAnW1snICsgY2F0ZWdvcnlfY2Fub25pY2FsICsgJzokMV1dJy4gQ2FuIGJlIG92ZXJyaWRkZW4gaWYgaW4gdGhlIHNob3J0IGVkaXQgc3VtbWFyaWVzXG5cdFx0XHQvLyBub3QgdGhlIHN0YW5kYXJkIGNhdGVnb3J5IG5hbWUgc2hvdWxkIGJlIHVzZWQgYnV0LCBzYXksIGEgc2hvcnRlciBuYW1lc3BhY2UgYWxpYXMuICQxIGlzIHJlcGxhY2VkXG5cdFx0XHQvLyBieSBhIGNhdGVnb3J5IG5hbWUuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZSc6ICckMScsXG5cdFx0XHQvLyBCdXR0b24gdGV4dC4gTG9jYWxpemUgdG8gd2dDb250ZW50TGFuZ3VhZ2UgaGVyZTsgbG9jYWxpemUgdG8gd2dVc2VyTGFuZ3VhZ2UgaW4gYSBzdWJwYWdlLFxuXHRcdFx0Ly8gc2VlIGxvY2FsaXphdGlvbiBob29rIGJlbG93LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jb21taXQnOiAn5YSy5a2YJyxcblx0XHRcdC8vIEJ1dHRvbiB0ZXh0LiBMb2NhbGl6ZSB0byB3Z0NvbnRlbnRMYW5ndWFnZSBoZXJlOyBsb2NhbGl6ZSB0byB3Z1VzZXJMYW5ndWFnZSBpbiBhIHN1YnBhZ2UsXG5cdFx0XHQvLyBzZWUgbG9jYWxpemF0aW9uIGhvb2sgYmVsb3cuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLW9rJzogJ+eiuuWumicsXG5cdFx0XHQvLyBCdXR0b24gdGV4dC4gTG9jYWxpemUgdG8gd2dDb250ZW50TGFuZ3VhZ2UgaGVyZTsgbG9jYWxpemUgdG8gd2dVc2VyTGFuZ3VhZ2UgaW4gYSBzdWJwYWdlLFxuXHRcdFx0Ly8gc2VlIGxvY2FsaXphdGlvbiBob29rIGJlbG93LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYW5jZWwnOiAn5Y+W5raIJyxcblx0XHRcdC8vIExvY2FsaXplIHRvIHdnQ29udGVudExhbmd1YWdlIGhlcmU7IGxvY2FsaXplIHRvIHdnVXNlckxhbmd1YWdlIGluIGEgc3VicGFnZSxcblx0XHRcdC8vIHNlZSBsb2NhbGl6YXRpb24gaG9vayBiZWxvdy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtbXVsdGlfZXJyb3InOlxuXHRcdFx0XHQn54Sh5rOV5b6e5Ly65pyN5Zmo5Y+W5b6X6aCB6Z2i5paH5a2X44CC5Zug5q2k77yM5oKo55qE5YiG6aGe6K6K5pu054Sh5rOV5YSy5a2Y44CC5oiR5YCR54K65q2k5LiN5L6/6KGo56S65oqx5q2J44CCJyxcblx0XHRcdC8vIFBsdXJhbCBvZiBjYXRlZ29yeV9jYW5vbmljYWwuXG5cdFx0XHQnaG90Y2F0LWNhdGVnb3JpZXMnOiAn5YiG6aGeJyxcblx0XHRcdC8vIE5hbWVzIGZvciB0aGUgc2VhcmNoIGVuZ2luZXNcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLXNlYXJjaGluZGV4JzogJ+aQnOWwi+e0ouW8lScsXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1wYWdlbGlzdCc6ICfpoIHpnaLliJfooagnLFxuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtY29tYmluZWQnOiAn5ZCI5L215pCc5bCLJyxcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLXN1YmNhdCc6ICflrZDliIbpoZ4nLFxuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtcGFyZW50Y2F0JzogJ+S4iuWxpOWIhumhnicsXG5cdFx0XHQvLyBUaGUgdG9vbHRpcHMgZm9yIHRoZSBhYm92ZSBsaW5rc1xuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1jaGFuZ2UnOiAn5L+u5pS5Jyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtcmVtb3ZlJzogJ+enu+mZpCcsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLWFkZCc6ICflop7liqDkuIDlgIvmlrDliIbpoZ4nLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1yZXN0b3JlJzogJ+W+qeWOn+iuiuabtCcsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLXVuZG8nOiAn5b6p5Y6f6K6K5pu0Jyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtZG93bic6ICfmiZPplovku6Xkv67mlLnkuKbpoa/npLrlrZDliIbpoZ4nLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy11cCc6ICfmiZPplovku6Xkv67mlLnkuKbpoa/npLrkuIrlsaTliIbpoZ4nLFxuXHRcdFx0Ly8gVG9vbHRpcCBmb3IgdGhlIFwiZW50ZXIgbXVsdGktbW9kZVwiIGxpbmtcblx0XHRcdCdob3RjYXQtbXVsdGlfdG9vbHRpcCc6ICfkv67mlLnlpJrlgIvliIbpoZ4nLFxuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdG13Lm1lc3NhZ2VzLnNldCh7XG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9yZW1vdmVkJzogJ+W3suenu+mZpFtbQ2F0ZWdvcnk6JDFdXScsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXRlbXBsYXRlX3JlbW92ZWQnOiAn5bey56e76Zmke3tbW0NhdGVnb3J5OiQxXV19fScsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9hZGRlZCc6ICflt7Lmt7vliqBbW0NhdGVnb3J5OiQxXV0nLFxuXHRcdFx0Ly8gJDIgaXMgdGhlIG5ldyBrZXlcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X2tleWNoYW5nZSc6ICflt7Lorr7nva5bW0NhdGVnb3J5OiQxXV3nmoTmlrDmjpLluo/lrZfvvJpcIiQyXCInLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfbm90Rm91bmQnOiAn5YiG57G74oCcJDHigJ3msqHmnInmib7liLAnLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfZXhpc3RzJzogJ+WIhuexu+KAnCQx4oCd5bey57uP5a2Y5Zyo77yM5rKh5pyJ5re75Yqg44CCJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X3Jlc29sdmVkJzogJ++8iOmHjeWumuWQkVtbQ2F0ZWdvcnk6JDFdXeW3suWkhOeQhu+8iScsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXVuY2F0X3JlbW92ZWQnOiAn5bey56e76Zmke3t1bmNhdGVnb3JpemVkfX0nLFxuXHRcdFx0Ly8gU29tZSB0ZXh0IHRvIHByZWZpeCB0byB0aGUgZWRpdCBzdW1tYXJ5LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1wcmVmaXgnOiAn5L2/55SoW1tIOkhPVENBVHxIb3RDYXRdXScsXG5cdFx0XHQvLyBTb21lIHRleHQgdG8gYXBwZW5kIHRvIHRoZSBlZGl0IHN1bW1hcnkuIE5hbWVkICd1c2luZycgZm9yIGhpc3RvcmljYWwgcmVhc29ucy4gSWYgeW91IHByZWZlclxuXHRcdFx0Ly8gdG8gaGF2ZSBhIG1hcmtlciBhdCB0aGUgZnJvbnQsIHVzZSBwcmVmaXggYW5kIHNldCB0aGlzIHRvIHRoZSBlbXB0eSBzdHJpbmcuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXVzaW5nJzogJycsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLW11bHRpX2NoYW5nZSc6ICckMeS4quWIhuexuycsXG5cdFx0XHQvLyBBbnkgY2F0ZWdvcnkgaW4gdGhpcyBjYXRlZ29yeSBpcyBkZWVtZWQgYSBkaXNhbWJpZ3VhdGlvbiBjYXRlZ29yeTsgaS5lLiwgYSBjYXRlZ29yeSB0aGF0IHNob3VsZCBub3QgY29udGFpblxuXHRcdFx0Ly8gYW55IGl0ZW1zLCBidXQgdGhhdCBjb250YWlucyBsaW5rcyB0byBvdGhlciBjYXRlZ29yaWVzIHdoZXJlIHN0dWZmIHNob3VsZCBiZSBjYXRlZ29yaXplZC4gSWYgeW91IGRvbid0IGhhdmVcblx0XHRcdC8vIHRoYXQgY29uY2VwdCBvbiB5b3VyIHdpa2ksIHNldCBpdCB0byBibGFuayBzdHJpbmcuIFVzZSBibGFua3MsIG5vdCB1bmRlcnNjb3Jlcy5cblx0XHRcdCdob3RjYXQtZGlzYW1iaWdfY2F0ZWdvcnknOiAnJyxcblx0XHRcdC8vIEFueSBjYXRlZ29yeSBpbiB0aGlzIGNhdGVnb3J5IGlzIGRlZW1lZCBhIChzb2Z0KSByZWRpcmVjdCB0byBzb21lIG90aGVyIGNhdGVnb3J5IGRlZmluZWQgYnkgYSBsaW5rXG5cdFx0XHQvLyB0byBhbm90aGVyIG5vbi1ibGFja2xpc3RlZCBjYXRlZ29yeS4gSWYgeW91ciB3aWtpIGRvZXNuJ3QgaGF2ZSBzb2Z0IGNhdGVnb3J5IHJlZGlyZWN0cywgc2V0IHRoaXMgdG8gbnVsbC5cblx0XHRcdC8vIElmIGEgc29mdC1yZWRpcmVjdGVkIGNhdGVnb3J5IGNvbnRhaW5zIG1vcmUgdGhhbiBvbmUgbGluayB0byBhbm90aGVyIG5vbi1ibGFja2xpc3RlZCBjYXRlZ29yeSwgaXQncyBjb25zaWRlcmVkXG5cdFx0XHQvLyBhIGRpc2FtYmlndWF0aW9uIGNhdGVnb3J5IGluc3RlYWQuXHRcdFx0J2hvdGNhdC1yZWRpcl9jYXRlZ29yeSc6ICflt7Lph43lrprlkJHnmoTliIbnsbsnLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1zZXBhcmF0b3InOiAnOyAnLFxuXHRcdFx0Ly8gJDEgaXMgcmVwbGFjZWQgYnkgYSBudW1iZXIuIElmIHlvdXIgbGFuZ3VhZ2UgaGFzIHNldmVyYWwgcGx1cmFsIGZvcm1zIChjLmYuIFtbOmVud2lraTpEdWFsIChncmFtbWF0aWNhbCBmb3JtKV1dKSxcblx0XHRcdC8vIHlvdSBjYW4gc2V0IHRoaXMgdG8gYW4gYXJyYXkgb2Ygc3RyaW5ncyBzdWl0YWJsZSBmb3IgcGFzc2luZyB0byBtdy5sYW5ndWFnZS5jb25maWdQbHVyYWwoKS5cblx0XHRcdC8vIElmIHRoYXQgZnVuY3Rpb24gZG9lc24ndCBleGlzdCwgSG90Q2F0IHdpbGwgc2ltcGx5IGZhbGwgYmFjayB0byB1c2luZyB0aGUgbGFzdFxuXHRcdFx0Ly8gZW50cnkgaW4gdGhlIGFycmF5LlxuXHRcdFx0Ly8gRGVmYXVsdHMgdG8gJ1tbJyArIGNhdGVnb3J5X2Nhbm9uaWNhbCArICc6JDFdXScuIENhbiBiZSBvdmVycmlkZGVuIGlmIGluIHRoZSBzaG9ydCBlZGl0IHN1bW1hcmllc1xuXHRcdFx0Ly8gbm90IHRoZSBzdGFuZGFyZCBjYXRlZ29yeSBuYW1lIHNob3VsZCBiZSB1c2VkIGJ1dCwgc2F5LCBhIHNob3J0ZXIgbmFtZXNwYWNlIGFsaWFzLiAkMSBpcyByZXBsYWNlZFxuXHRcdFx0Ly8gYnkgYSBjYXRlZ29yeSBuYW1lLlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnOiAnJDEnLFxuXHRcdFx0Ly8gQnV0dG9uIHRleHQuIExvY2FsaXplIHRvIHdnQ29udGVudExhbmd1YWdlIGhlcmU7IGxvY2FsaXplIHRvIHdnVXNlckxhbmd1YWdlIGluIGEgc3VicGFnZSxcblx0XHRcdC8vIHNlZSBsb2NhbGl6YXRpb24gaG9vayBiZWxvdy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY29tbWl0JzogJ+S/neWtmCcsXG5cdFx0XHQvLyBCdXR0b24gdGV4dC4gTG9jYWxpemUgdG8gd2dDb250ZW50TGFuZ3VhZ2UgaGVyZTsgbG9jYWxpemUgdG8gd2dVc2VyTGFuZ3VhZ2UgaW4gYSBzdWJwYWdlLFxuXHRcdFx0Ly8gc2VlIGxvY2FsaXphdGlvbiBob29rIGJlbG93LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1vayc6ICfnoa7lrponLFxuXHRcdFx0Ly8gQnV0dG9uIHRleHQuIExvY2FsaXplIHRvIHdnQ29udGVudExhbmd1YWdlIGhlcmU7IGxvY2FsaXplIHRvIHdnVXNlckxhbmd1YWdlIGluIGEgc3VicGFnZSxcblx0XHRcdC8vIHNlZSBsb2NhbGl6YXRpb24gaG9vayBiZWxvdy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2FuY2VsJzogJ+WPlua2iCcsXG5cdFx0XHQvLyBMb2NhbGl6ZSB0byB3Z0NvbnRlbnRMYW5ndWFnZSBoZXJlOyBsb2NhbGl6ZSB0byB3Z1VzZXJMYW5ndWFnZSBpbiBhIHN1YnBhZ2UsXG5cdFx0XHQvLyBzZWUgbG9jYWxpemF0aW9uIGhvb2sgYmVsb3cuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLW11bHRpX2Vycm9yJzpcblx0XHRcdFx0J+aXoOazleS7juacjeWKoeWZqOWPluW+l+mhtemdouaWh+Wtl+OAguWboOatpO+8jOaCqOeahOWIhuexu+abtOaUueaXoOazleS/neWtmOOAguaIkeS7rOS4uuatpOS4jeS+v+ihqOekuuaKseatieOAgicsXG5cdFx0XHQvLyBQbHVyYWwgb2YgY2F0ZWdvcnlfY2Fub25pY2FsLlxuXHRcdFx0J2hvdGNhdC1jYXRlZ29yaWVzJzogJ+WIhuexuycsXG5cdFx0XHQvLyBOYW1lcyBmb3IgdGhlIHNlYXJjaCBlbmdpbmVzXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1zZWFyY2hpbmRleCc6ICfmkJzntKLntKLlvJUnLFxuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtcGFnZWxpc3QnOiAn6aG16Z2i5YiX6KGoJyxcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLWNvbWJpbmVkJzogJ+WQiOW5tuaQnOe0oicsXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1zdWJjYXQnOiAn5a2Q5YiG57G7Jyxcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLXBhcmVudGNhdCc6ICfkuIrlsYLliIbnsbsnLFxuXHRcdFx0Ly8gVGhlIHRvb2x0aXBzIGZvciB0aGUgYWJvdmUgbGlua3Ncblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtY2hhbmdlJzogJ+S/ruaUuScsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLXJlbW92ZSc6ICfnp7vpmaQnLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1hZGQnOiAn5aKe5Yqg5LiA5Liq5paw5YiG57G7Jyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtcmVzdG9yZSc6ICfmkqTplIDmm7TmlLknLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy11bmRvJzogJ+aSpOmUgOabtOaUuScsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLWRvd24nOiAn5omT5byA5Lul5L+u5pS55bm25pi+56S65a2Q5YiG57G7Jyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtdXAnOiAn5omT5byA5Lul5L+u5pS55bm25pi+56S65LiK5bGC5YiG57G7Jyxcblx0XHRcdC8vIFRvb2x0aXAgZm9yIHRoZSBcImVudGVyIG11bHRpLW1vZGVcIiBsaW5rXG5cdFx0XHQnaG90Y2F0LW11bHRpX3Rvb2x0aXAnOiAn5L+u5pS55aSa5Liq5YiG57G7Jyxcblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0IHtob3RDYXRNZXNzYWdlc307XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQSw2RkFBQUEsU0FBQTtBQUFBO0FBQ0EsUUFBSSxRQUFRLFNBQVUsSUFBSTtBQUN4QixhQUFPLE1BQU0sR0FBRyxTQUFTLFFBQVE7QUFBQSxJQUNuQztBQUdBLElBQUFBLFFBQU87QUFBQSxJQUVMLE1BQU0sT0FBTyxjQUFjLFlBQVksVUFBVSxLQUNqRCxNQUFNLE9BQU8sVUFBVSxZQUFZLE1BQU07QUFBQSxJQUV6QyxNQUFNLE9BQU8sUUFBUSxZQUFZLElBQUksS0FDckMsTUFBTSxPQUFPLFVBQVUsWUFBWSxNQUFNLEtBQ3pDLE1BQU0sT0FBTyxXQUFRLFlBQVksT0FBSTtBQUFBLElBRXBDLDRCQUFZO0FBQUUsYUFBTztBQUFBLElBQU0sR0FBRyxLQUFLLFNBQVMsYUFBYSxFQUFFO0FBQUE7QUFBQTs7O0FDZjlEO0FBQUEsdUZBQUFDLFNBQUE7QUFBQTtBQUNBLElBQUFBLFFBQU8sVUFBVSxTQUFVLE1BQU07QUFDL0IsVUFBSTtBQUNGLGVBQU8sQ0FBQyxDQUFDLEtBQUs7QUFBQSxNQUNoQixTQUFTLE9BQU87QUFDZCxlQUFPO0FBQUEsTUFDVDtBQUFBLElBQ0Y7QUFBQTtBQUFBOzs7QUNQQTtBQUFBLDZGQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLFFBQVE7QUFHWixJQUFBQSxRQUFPLFVBQVUsQ0FBQyxNQUFNLFdBQVk7QUFFbEMsYUFBTyxPQUFPLGVBQWUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxLQUFLLFdBQVk7QUFBRSxlQUFPO0FBQUEsTUFBRyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU07QUFBQSxJQUNqRixD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QVU7QUFFakRqekIsT0FBR3F5QixLQUFLLFVBQVUsRUFBRXJxQixJQUFJLE1BQU07QUFHN0IsVUFBSTNILFNBQVNDLGNBQWMsdUJBQXVCLEdBQUc7QUFDcEQ7TUFDRDtBQUNBb1MsZ0JBQVU7QUFDVkUsZ0JBQVUsQ0FBQTtBQUNWc2Usb0JBQWM7QUFDZGxtQixTQUFHc29CLFVBQVU7QUFDYkQsVUFBSTtJQUNMLENBQUM7RUFDRjtBQUdBdHlCLElBQUVzeUIsR0FBRztBQUNOLEdBQUc7IiwKICAibmFtZXMiOiBbIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm5hdmlnYXRvciIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIlN5bWJvbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgImRvY3VtZW50IiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiVHlwZUVycm9yIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImFjdGl2ZVhEb2N1bWVudCIsICJtb2R1bGUiLCAiJCIsICJnbG9iYWxUaGlzIiwgIkl0ZXJhdG9yIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIkl0ZXJhdG9yIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiSXRlcmF0b3IiLCAiJCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICIkIiwgImNhdGNoZWNrSW5saW5lSWNvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgIm13QXBpIiwgInVzZXJBZ2VudCIsICJpbml0TXdBcGkiLCAiaG90Q2F0Q2hlY2siLCAibXciLCAiY29uZmlnIiwgImdldCIsICJ3aW5kb3ciLCAiSG90Q2F0QXV0b1JlbW92ZUNoZWNrQ2F0T3B0T3V0IiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiYXBpIiwgImNoZWNrQ2F0ZWdvcmllc1JlZ0V4cCIsICJzZWxmTmFtZSIsICJzdG9yYWdlSXRlbU5hbWUiLCAic3RvcmFnZUl0ZW0iLCAic3RvcmFnZSIsICJjcmVhdGVqSWNvbiIsICJpY29uQ2xhc3MiLCAiJCIsICJhdHRyIiwgImNvbmNhdCIsICJ0ZXh0IiwgImNyZWF0ZU5vdGlmeUFyZWEiLCAidGV4dE5vZGUiLCAiaWNvbiIsICJzdGF0ZSIsICJhZGRDbGFzcyIsICJhcHBlbmQiLCAiY3NzIiwgInBhZGRpbmciLCAib25lIiwgImUiLCAiX3NlbGYkd3BUZXh0Ym94MSR2YWx1IiwgInNlbGYiLCAibmV3VmFsIiwgIndwVGV4dGJveDEiLCAidmFsdWUiLCAicmVwbGFjZSIsICJkbGdCdXR0b25zIiwgIiRkaWFsb2dDaGVja1N0b3JhZ2UiLCAiJHBlcm1hU2F2ZUhpbnQiLCAiJHRleHRIaW50Tm9kZSIsICIkZGlhbG9nIiwgImRvUmVtb3ZlIiwgIndwU3VtbWFyeSIsICJ3cml0ZVN0b3JhZ2UiLCAidmFsIiwgInNldCIsICJfJGRpYWxvZ0NoZWNrU3RvcmFnZSQiLCAiY2hlY2tlZCIsICJkaWFsb2ciLCAiXyRkaWFsb2dDaGVja1N0b3JhZ2UkMiIsICJfYWRkVG9KUyIsICJfZSIsICJwcmV2ZW50RGVmYXVsdCIsICJoYXNDbGFzcyIsICIkZWwiLCAib2ZmIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgInRpdGxlIiwgInN1bW1hcnkiLCAiYXBwZW5kdGV4dCIsICJkYXRhIiwgImVkaXREb25lIiwgImVkaXRTdGF0IiwgImVycm9yIiwgIm5vdGlmeSIsICJjb2RlIiwgImluZm8iLCAidGFnIiwgInR5cGUiLCAiZmFkZU91dCIsICJwb3N0V2l0aFRva2VuIiwgInRoZW4iLCAicHJvbXB0IiwgImlkIiwgIm9uIiwgImZhZGVJbiIsICJhcHBlbmRUbyIsICJkaXNwbGF5IiwgInVzZXIiLCAiaXNBbm9uIiwgImhpZGUiLCAibW9kYWwiLCAiY2xvc2VPbkVzY2FwZSIsICJ3aWR0aCIsICJidXR0b25zIiwgImNsb3NlIiwgIiRib2R5IiwgImZpbmQiLCAidHJpZ2dlciIsICJvcGVuIiwgIiRidXR0b25zIiwgInBhcmVudCIsICJlcSIsICJidXR0b24iLCAiaWNvbnMiLCAicHJpbWFyeSIsICJIb3RDYXRBdXRvUmVtb3ZlQ2hlY2tDYXQiLCAiJG9rTGluayIsICJocmVmIiwgImRvRWRpdCIsICJyZXN1bHQiLCAibm9jcmVhdGUiLCAiYWpheCIsICJ1cmwiLCAiZGF0YVR5cGUiLCAic3VjY2VzcyIsICJjYWNoZSIsICJsb2FkSG90Q2F0Q2hlY2siLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImFyZ3MiLCAibWVzc2FnZSIsICJwbGFpbiIsICJob3RDYXRNZXNzYWdlcyIsICJ3Z1VzZXJMYW5ndWFnZSIsICJpbmNsdWRlcyIsICJtZXNzYWdlcyIsICJob3RDYXQiLCAiY29uZiIsICJ2YWx1ZXMiLCAiSG90Q2F0IiwgIm5vZGVOYW1lIiwgIndnQWN0aW9uIiwgImxpbmtzIiwgImNoYW5nZSIsICJyZW1vdmUiLCAiYWRkIiwgInJlc3RvcmUiLCAidW5kbyIsICJkb3duIiwgInVwIiwgImNoYW5nZVRhZyIsICJhZGRtdWx0aSIsICJkaXNhYmxlIiwgIm5zIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIm5zSWRzIiwgIndnTmFtZXNwYWNlSWRzIiwgIndnQXJ0aWNsZUlkIiwgInRlc3QiLCAid2dUaXRsZSIsICJjcmVhdG9yIiwgInRpbWVkdGV4dCIsICJpbnN0aXR1dGlvbiIsICJ1bmNhdF9yZWdleHAiLCAiZXhpc3RzWWVzIiwgIlBfeWVzX2RlZmF1bHQiLCAiZXhpc3RzTm8iLCAiUF9ub19kZWZhdWx0IiwgInRlbXBsYXRlX2NhdGVnb3JpZXMiLCAiY2FwaXRhbGl6ZVBhZ2VOYW1lcyIsICJ1cGxvYWRfZGlzYWJsZWQiLCAiYmxhY2tsaXN0IiwgImJnX2NoYW5nZWQiLCAibm9fYXV0b2NvbW1pdCIsICJkZWxfbmVlZHNfZGlmZiIsICJzdWdnZXN0X2RlbGF5IiwgImVkaXRib3hfd2lkdGgiLCAic3VnZ2VzdGlvbnMiLCAiZml4ZWRfc2VhcmNoIiwgInVzZV91cF9kb3duIiwgImxpc3RTaXplIiwgInNpbmdsZV9taW5vciIsICJkb250X2FkZF90b193YXRjaGxpc3QiLCAic2hvcnRjdXRzIiwgImFkZFNob3J0Y3V0cyIsICJtYXAiLCAiX3dpbmRvdyRIb3RDYXQiLCAiayIsICJPYmplY3QiLCAiaGFzT3duIiwgInYiLCAidHJpbSIsICJsZW5ndGgiLCAiSEMiLCAidWEiLCAibmF2aWdhdG9yIiwgInRvTG93ZXJDYXNlIiwgImlzX3dlYmtpdCIsICJjYXRfcHJlZml4IiwgIm5vU3VnZ2VzdGlvbnMiLCAid2lraVRleHRCbGFuayIsICJTdHJpbmciLCAicmF3IiwgIl90ZW1wbGF0ZU9iamVjdCIsICJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsIiwgIndpa2lUZXh0QmxhbmtSRSIsICJSZWdFeHAiLCAid2lraVRleHRCbGFua09yQmlkaSIsICJfdGVtcGxhdGVPYmplY3QyIiwgImZvcm1hdHRlZE5hbWVzcGFjZXMiLCAid2dGb3JtYXR0ZWROYW1lc3BhY2VzIiwgIm5hbWVzcGFjZUlkcyIsICJhdXRvTG9jYWxpemUiLCAibmFtZXNwYWNlTnVtYmVyIiwgImZhbGxiYWNrIiwgImNyZWF0ZVJlZ2V4cFN0ciIsICJuYW1lIiwgInJlZ2V4X25hbWUiLCAiaSIsICJpbml0aWFsIiwgImNoYXJBdCIsICJsbCIsICJ1bCIsICJ0b1VwcGVyQ2FzZSIsICJfdGVtcGxhdGVPYmplY3QzIiwgImNhbm9uaWNhbCIsICJyZWdleHAiLCAiY2F0X25hbWUiLCAiY2F0ZWdvcnlfY2Fub25pY2FsIiwgImNhdGVnb3J5X3JlZ2V4cCIsICJ0ZW1wbGF0ZV9yZWdleHAiLCAibWFrZSIsICJhcmciLCAibGl0ZXJhbCIsICJjcmVhdGVUZXh0Tm9kZSIsICJjcmVhdGVFbGVtZW50IiwgInBhcmFtIiwgInVyaSIsICJsb2NhdGlvbiIsICJyZSIsICJtIiwgImV4ZWMiLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgInNjcmlwdCIsICJ3Z1NjcmlwdCIsICJpbmRleE9mIiwgIndnU2VydmVyIiwgInNsaWNlIiwgInByb3RvY29sIiwgInByZWZpeCIsICJ3Z0FydGljbGVQYXRoIiwgImNsYXNzTmFtZSIsICJjYXBpdGFsaXplIiwgInN0ciIsICJ3aWtpUGFnZVBhdGgiLCAicGFnZU5hbWUiLCAiZW5jb2RlVVJJQ29tcG9uZW50IiwgImVzY2FwZVJFIiwgIl90ZW1wbGF0ZU9iamVjdDQiLCAic3Vic3RpdHV0ZUZhY3RvcnkiLCAib3B0aW9ucyIsICJsZWFkIiwgImluZGljYXRvciIsICJsYnJhY2UiLCAicmJyYWNlIiwgIm1hdGNoIiwgImlkeCIsICJhbHBoYSIsICJyZXBsYWNlbWVudCIsICJyZXBsYWNlU2hvcnRjdXRzIiwgInJlcGxhY2VIYXNoIiwgInMiLCAiZmluZENhdHNSRSIsICJyZXBsYWNlQnlCbGFua3MiLCAiZmluZF9jYXRlZ29yeSIsICJ3aWtpdGV4dCIsICJjYXRlZ29yeSIsICJvbmNlIiwgImNhdF9yZWdleCIsICJub3dpa2lSZWdleCIsICJfdGVtcGxhdGVPYmplY3Q1IiwgImNvcGllZHRleHQiLCAiY3Vycl9tYXRjaCIsICJpbnRlcmxhbmd1YWdlUkUiLCAiY2hhbmdlX2NhdGVnb3J5IiwgInRvUmVtb3ZlIiwgInRvQWRkIiwgImlzX2hpZGRlbiIsICJmaW5kX2luc2VydGlvbnBvaW50IiwgIl93aWtpdGV4dCIsICJfdGVtcGxhdGVPYmplY3Q2IiwgImluZGV4IiwgImxhc3RJbmRleCIsICJvbkNhdCIsICJuYW1lU3BhY2UiLCAia2V5Q2hhbmdlIiwgIm1hdGNoZXMiLCAiY2F0X3BvaW50IiwgImJlZm9yZSIsICJNYXRoIiwgIm1heCIsICJhZnRlciIsICJzZWFyY2giLCAiaiIsICJwb2ludCIsICJuZXdjYXRzdHJpbmciLCAic3VmZml4IiwgInR4dCIsICJldnRLZXlzIiwgImN0cmxLZXkiLCAibWV0YUtleSIsICJzaGlmdEtleSIsICJldnRLaWxsIiwgInN0b3BQcm9wYWdhdGlvbiIsICJjYW5jZWxCdWJibGUiLCAiY2F0TGluZSIsICJvblVwbG9hZCIsICJlZGl0b3JzIiwgImNvbW1pdEJ1dHRvbiIsICJjb21taXRGb3JtIiwgIm11bHRpU3BhbiIsICJwYWdlVGV4dCIsICJwYWdlVGltZSIsICJwYWdlV2F0Y2hlZCIsICJ3YXRjaENyZWF0ZSIsICJ3YXRjaEVkaXQiLCAibWlub3JFZGl0cyIsICJlZGl0VG9rZW4iLCAiaXNfcnRsIiwgInNlcnZlclRpbWUiLCAibGFzdFJldklkIiwgInBhZ2VUZXh0UmV2SWQiLCAiY29uZmxpY3RpbmdVc2VyIiwgIm5ld0RPTSIsICJVTkNIQU5HRUQiLCAiT1BFTiIsICJDSEFOR0VfUEVORElORyIsICJDSEFOR0VEIiwgIkRFTEVURUQiLCAic2V0UGFnZSIsICJzdGFydFRpbWUiLCAicXVlcnkiLCAicGFnZXMiLCAicGFnZSIsICJyZXZpc2lvbnMiLCAic2xvdHMiLCAibWFpbiIsICJjb250ZW50IiwgInRpbWVzdGFtcCIsICJyZXZpZCIsICJsYXN0cmV2aWQiLCAic3RhcnR0aW1lc3RhbXAiLCAid2F0Y2hlZCIsICJ0b2tlbnMiLCAiY3NyZnRva2VuIiwgImxhbmdsaW5rcyIsICJsYW5nIiwgIl90ZW1wbGF0ZU9iamVjdDciLCAiZ2VuZXJhbCIsICJ0aW1lIiwgImNhc2UiLCAidXNlcmluZm8iLCAid2F0Y2hjcmVhdGlvbnMiLCAid2F0Y2hkZWZhdWx0IiwgIm1pbm9yZGVmYXVsdCIsICJzYXZlSW5Qcm9ncmVzcyIsICJpbml0aWF0ZUVkaXQiLCAiZmFpbHVyZSIsICJvbGRCdXR0b25TdGF0ZSIsICJkaXNhYmxlZCIsICJmYWlsIiwgImFwcGx5IiwgImZvcm1hdHZlcnNpb24iLCAicmF3Y29udGludWUiLCAidGl0bGVzIiwgIndnUGFnZU5hbWUiLCAicHJvcCIsICJpbnByb3AiLCAicnZwcm9wIiwgInJ2c2xvdHMiLCAicnZsaW1pdCIsICJydmRpciIsICJydnN0YXJ0aWQiLCAid2dDdXJSZXZpc2lvbklkIiwgImxsbGltaXQiLCAibWV0YSIsICJ1aXByb3AiLCAiZG9uZSIsICJzdGF0dXMiLCAic3RhdHVzVGV4dCIsICJtdWx0aUNoYW5nZU1zZyIsICJjb3VudCIsICJjdXJyZW50VGltZXN0YW1wIiwgIm5vdyIsICJEYXRlIiwgInRzIiwgImdldFVUQ0Z1bGxZZWFyIiwgInR3byIsICJnZXRVVENNb250aCIsICJnZXRVVENEYXRlIiwgImdldFVUQ0hvdXJzIiwgImdldFVUQ01pbnV0ZXMiLCAiZ2V0VVRDU2Vjb25kcyIsICJwZXJmb3JtQ2hhbmdlcyIsICJzaW5nbGVFZGl0b3IiLCAic2VsZkVkaXRDb25mbGljdCIsICJ3Z1VzZXJOYW1lIiwgIm5vQ29tbWl0IiwgIndwRWRpdFRva2VuIiwgIndwRGlmZiIsICJ3cFNhdmUiLCAiY2hhbmdlZCIsICJhZGRlZCIsICJkZWxldGVkIiwgInRvRWRpdCIsICJlZGl0IiwgImNoYW5nZXMiLCAib3JpZ2luYWxDYXRlZ29yeSIsICJjdXJyZW50Q2F0ZWdvcnkiLCAiY3VycmVudEtleSIsICJjdXJyZW50SGlkZGVuIiwgImZyb20iLCAidG8iLCAid3BNaW5vcmVkaXQiLCAid3BXYXRjaHRoaXMiLCAid3BDaGFuZ2VUYWdzIiwgIndwQXV0b1N1bW1hcnkiLCAiam9pbiIsICJzaG9ydFN1bW1hcnkiLCAiYXJyb3ciLCAid3BTdGFydHRpbWUiLCAid3BFZGl0dGltZSIsICJvbGRpZCIsICJoY0NvbW1pdCIsICJjbGljayIsICJyZXNvbHZlT25lIiwgInRvUmVzb2x2ZSIsICJjYXRzIiwgImNhdGVnb3JpZXMiLCAiaXNfZGFiIiwgImlzX3JlZGlyIiwgInJlZGlyZWN0IiwgImNhdGVnb3J5aW5mbyIsICJoaWRkZW4iLCAiaXNfbWlzc2luZyIsICJtaXNzaW5nIiwgImRhYklucHV0Q2xlYW5lZCIsICJpbnB1dEV4aXN0cyIsICJzcmMiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgIm4iLCAiY2F0XyIsICJjYXQiLCAiZXJyIiwgImYiLCAiZGFiIiwgInJlc29sdmVSZWRpcmVjdHMiLCAicCIsICJyZXNvbHZlTXVsdGkiLCAiY2FsbGJhY2siLCAiZGFiSW5wdXQiLCAibGFzdElucHV0IiwgInBsbmFtZXNwYWNlIiwgInBsbGltaXQiLCAiY2xsaW1pdCIsICJqc29uIiwgInJlcSIsICJtYWtlQWN0aXZlIiwgIndoaWNoIiwgImlzX2FjdGl2ZSIsICJfaSIsICJfZWRpdG9ycyIsICJlZGl0b3IiLCAiaW5hY3RpdmF0ZSIsICJzaG93RGFiIiwgImV4cGVjdGVkSW5wdXQiLCAibGFzdFJlYWxJbnB1dCIsICJhY3R1YWxWYWx1ZSIsICJzaG93c0xpc3QiLCAic3BsaXQiLCAibGFzdFNlbGVjdGlvbiIsICJzdGFydCIsICJlbmQiLCAiZGlzcGxheUxpc3QiLCAic2V0VGltZW91dCIsICJzZXRTZWxlY3Rpb24iLCAic2hvd1N1Z2dlc3Rpb25zIiwgIm11bHRpU3VibWl0IiwgIl9pMiIsICJfZWRpdG9yczIiLCAibXNnIiwgInJlc29sdmVkIiwgImZpcnN0RGFiIiwgImRvbnRDaGFuZ2UiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAiZWxlbWVudCIsICJhY2NlcHRDaGVjayIsICJjb21taXQiLCAic2V0TXVsdGlJbnB1dCIsICJhZGRFdmVudExpc3RlbmVyIiwgInJlcGxhY2VXaXRoIiwgImNoZWNrTXVsdGlJbnB1dCIsICJoYXNDaGFuZ2VzIiwgIl9pMyIsICJfZWRpdG9yczMiLCAic3VnZ2VzdGlvbkVuZ2luZXMiLCAib3BlbnNlYXJjaCIsICJoYW5kbGVyIiwgInF1ZXJ5UmVzdWx0IiwgInF1ZXJ5S2V5IiwgImV4aXN0cyIsICJzcGxpY2UiLCAibm9ybWFsaXplZCIsICJpbnRlcm5hbHNlYXJjaCIsICJhbGxwYWdlcyIsICJfdGl0bGUiLCAic3ViY2F0ZWdvcmllcyIsICJjYXRlZ29yeW1lbWJlcnMiLCAicGFyZW50Y2F0ZWdvcmllcyIsICJzdWdnZXN0aW9uQ29uZmlncyIsICJzZWFyY2hpbmRleCIsICJlbmdpbmVzIiwgInNob3ciLCAidGVtcCIsICJub0NvbXBsZXRpb24iLCAicGFnZWxpc3QiLCAiY29tYmluZWQiLCAic3ViY2F0IiwgInBhcmVudGNhdCIsICJCUyIsICJUQUIiLCAiUkVUIiwgIkVTQyIsICJTUEFDRSIsICJQR1VQIiwgIlBHRE9XTiIsICJVUCIsICJET1dOIiwgIkRFTCIsICJJTUUiLCAiQ2F0ZWdvcnlFZGl0b3IiLCAiY29uc3RydWN0b3IiLCAiaW5pdGlhbGl6ZSIsICJpc0NvbXBvc2l0aW9uU3RhcnQiLCAibGluZSIsICJzcGFuIiwgImRpciIsICJpc0FkZENhdGVnb3J5IiwgImNhdExpbmsiLCAiZmlyc3RDaGlsZCIsICJvcmlnaW5hbEtleSIsICJvcmlnaW5hbEV4aXN0cyIsICJtYWtlTGlua1NwYW4iLCAidXBEb3duTGlua3MiLCAic3R5bGUiLCAibGlua1NwYW4iLCAicGFyZW50Tm9kZSIsICJpbnNlcnRCZWZvcmUiLCAibmV4dFNpYmxpbmciLCAibGluayIsICJiaW5kIiwgIm5vcm1hbExpbmtzIiwgInVuZGVsTGluayIsICJvcmlnaW5hbEhpZGRlbiIsICJlbmdpbmUiLCAiY3VycmVudEV4aXN0cyIsICJsYXN0U2F2ZWRTdGF0ZSIsICJsYXN0U2F2ZWRDYXRlZ29yeSIsICJsYXN0U2F2ZWRLZXkiLCAibGFzdFNhdmVkRXhpc3RzIiwgImxhc3RTYXZlZEhpZGRlbiIsICJpbnZva2VTdWdnZXN0aW9ucyIsICJkb250X2F1dG9jb21wbGV0ZSIsICJ0ZXh0Y2hhbmdlIiwgIm1ha2VGb3JtIiwgImZvcm0iLCAibWV0aG9kIiwgImFjY2VwdCIsICJzaXplIiwgImV2ZW50IiwgImltZSIsICJsYXN0S2V5IiwgInVzZXNDb21wb3NpdGlvbiIsICJrZXlDb3VudCIsICJwcm9jZXNzS2V5IiwgInJlc2V0S2V5U2VsZWN0aW9uIiwgImNhbmNlbCIsICJzYXZlVmlldyIsICJsaXN0IiwgImhpZ2hsaWdodFN1Z2dlc3Rpb24iLCAiZm9jdXMiLCAiZW5naW5lU2VsZWN0b3IiLCAib3B0IiwgInNlbGVjdGVkIiwgInNlbGVjdGVkSW5kZXgiLCAiYnV0dG9uX2xhYmVsIiwgIl9pZCIsICJkZWZhdWx0VGV4dCIsICJsYWJlbCIsICJPSyIsICJvayIsICJjYW5jZWxCdXR0b24iLCAicG9zaXRpb24iLCAid2hpdGVTcGFjZSIsICJfaTQiLCAiX2VkaXRvcnM0IiwgIm9yaWdpbmFsU3RhdGUiLCAicmVhZE9ubHkiLCAicmVtb3ZlRWRpdG9yIiwgImJhY2tncm91bmRDb2xvciIsICJuZXh0IiwgInJvbGxiYWNrIiwgInVuZG9MaW5rIiwgImRvbnRDaGVjayIsICJzYW5pdGl6ZUlucHV0IiwgIm9yaWdpbmFsIiwgIl9pNSIsICJfZWRpdG9yczUiLCAiY3NzVGV4dCIsICJ0ZXh0RGVjb3JhdGlvbiIsICJzZWxlY3RFbmdpbmUiLCAiZW5naW5lTmFtZSIsICJtYWtlQ2FsbCIsICJjYWxsYmFja09iaiIsICJjbGVhbktleSIsICJjYiIsICJ6IiwgImNhbGxzTWFkZSIsICJub2ZDYWxscyIsICJhbGxUaXRsZXMiLCAiZG9udENhY2hlIiwgImNhbmNlbGxlZCIsICJnZXRKU09OIiwgImdlbmVyYXRlQXJyYXkiLCAiZm9yY2UiLCAicGlwZSIsICJtYWtlQ2FsbHMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiZW5naW5lXyIsICJ3Z1NjcmlwdFBhdGgiLCAiZG9udEF1dG9jb21wbGV0ZSIsICJsYXN0UXVlcnkiLCAidk5vcm1hbGl6ZWQiLCAia25vd25Ub0V4aXN0IiwgInZMb3ciLCAic29ydCIsICJhIiwgImIiLCAicHJlZml4TWF0Y2hBIiwgInByZWZpeE1hdGNoQiIsICJhTG93IiwgImJMb3ciLCAiZmlyc3RUaXRsZSIsICJjb21wbGV0ZWQiLCAiYXV0b0NvbXBsZXRlIiwgImV4aXN0aW5nIiwgIm5vZkl0ZW1zIiwgIm1pbiIsICJhbGlnbiIsICJ6SW5kZXgiLCAiYW5jaG9yIiwgImxpc3RoIiwgInRvcCIsICJvZmZzZXRUb3AiLCAib2Zmc2V0SGVpZ2h0IiwgIm1heExpc3RIZWlnaHQiLCAidmlld3BvcnQiLCAid2hhdCIsICJkb2N1bWVudEVsZW1lbnQiLCAic2Nyb2xsX29mZnNldCIsICJub2RlIiwgImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsICJib3giLCAieCIsICJyb3VuZCIsICJsZWZ0IiwgInkiLCAidCIsICJsIiwgIm9mZnNldExlZnQiLCAib2Zmc2V0UGFyZW50IiwgInRleHRQb3MiLCAibmwiLCAibnQiLCAib2Zmc2V0IiwgInRleHRCb3hXaWR0aCIsICJvZmZzZXRXaWR0aCIsICJjbGllbnRXaWR0aCIsICJzY3JvbGwiLCAidmlld193IiwgInciLCAibF9wb3MiLCAicmlnaHQiLCAicmVsYXRpdmVfb2Zmc2V0IiwgImFjdFZhbCIsICJub3JtYWxpemVkQWN0VmFsIiwgImRvbnRNb2RpZnkiLCAiY2FuU2VsZWN0IiwgInNldFNlbGVjdGlvblJhbmdlIiwgInNlbGVjdGlvblN0YXJ0IiwgInNlbGVjdGlvbkVuZCIsICJnZXRTZWxlY3Rpb24iLCAiY3VyciIsICJ0Z3QiLCAiaG90Y2F0X2RvbnRfYWRkX3RvX3dhdGNobGlzdCIsICJIb3RDYXREb250QWRkVG9XYXRjaGxpc3QiLCAiaG90Y2F0X25vX2F1dG9jb21taXQiLCAiSG90Q2F0Tm9BdXRvQ29tbWl0IiwgImhvdGNhdF9kZWxfbmVlZHNfZGlmZiIsICJIb3RDYXREZWxOZWVkc0RpZmYiLCAiaG90Y2F0X3N1Z2dlc3Rpb25fZGVsYXkiLCAiSG90Q2F0U3VnZ2VzdGlvbkRlbGF5IiwgImhvdGNhdF9lZGl0Ym94X3dpZHRoIiwgIkhvdENhdEVkaXRCb3hXaWR0aCIsICJob3RjYXRfc3VnZ2VzdGlvbnMiLCAiSG90Q2F0U3VnZ2VzdGlvbnMiLCAiaG90Y2F0X3N1Z2dlc3Rpb25zX2ZpeGVkIiwgIkhvdENhdEZpeGVkU3VnZ2VzdGlvbnMiLCAiaG90Y2F0X3NpbmdsZV9jaGFuZ2VzX2FyZV9taW5vciIsICJIb3RDYXRNaW5vclNpbmdsZUNoYW5nZXMiLCAiaG90Y2F0X2NoYW5nZWRfYmFja2dyb3VuZCIsICJIb3RDYXRDaGFuZ2VkQmFja2dyb3VuZCIsICJob3RjYXRfdXNlX2NhdGVnb3J5X2xpbmtzIiwgIkhvdENhdFVzZUNhdGVnb3J5TGlua3MiLCAiaG90Y2F0X2xpc3Rfc2l6ZSIsICJIb3RDYXRMaXN0U2l6ZSIsICJIb3RDYXRDaGFuZ2VUYWciLCAiZUZvcm0iLCAiZWRpdGZvcm0iLCAiY2F0UmVnRXhwIiwgIm9sZFR4dCIsICJpc01pbm9yQ2hhbmdlIiwgIm5ld1R4dCIsICJvbGRMaW5lcyIsICJuZXdMaW5lcyIsICJjQXJyIiwgImV4Y2VwdCIsICJhQXJyIiwgImJBcnIiLCAibEFyciIsICJzQXJyIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgIml0ZW0iLCAiaW5kIiwgImZpbHRlciIsICJjIiwgInN1bSIsICJzdW1BIiwgIiRjdCIsICJyZW1vdmVDaGFuZ2VUYWciLCAiTnVtYmVyIiwgInBhcnNlSW50IiwgImlzTmFOIiwgIl9pNiIsICJfT2JqZWN0JGVudHJpZXMiLCAiZW50cmllcyIsICJzdWdnZXN0aW9uQ29uZmlnIiwgImRlZmF1bHRWaWV3IiwgImdldENvbXB1dGVkU3R5bGUiLCAiZ2V0UHJvcGVydHlWYWx1ZSIsICJkaXJlY3Rpb24iLCAiY2FuX2VkaXQiLCAiY2xvc2VGb3JtIiwgIl9pNyIsICJfZWRpdG9yczYiLCAic2V0dXBfdXBsb2FkIiwgImlwIiwgInJldXBsb2FkIiwgImRlc3RGaWxlIiwgImxhYmVsQ2VsbCIsICJsaW5lQ2VsbCIsICJ0ZXh0QWxpZ24iLCAibWFyZ2luIiwgImJvcmRlciIsICJ2ZXJ0aWNhbEFsaWduIiwgIm5ld1JvdyIsICJpbnNlcnRSb3ciLCAib2xkU3VibWl0IiwgImRvX3N1Ym1pdCIsICJldmFsIiwgIkZ1bmN0aW9uIiwgImViIiwgImFkZGVkT25lIiwgIl9pOCIsICJfZWRpdG9yczciLCAibmV3X2NhdCIsICJfdGVtcGxhdGVPYmplY3Q4IiwgIl9jbGVhbmVkVGV4dCIsICJyZWdleCIsICJvbnN1Ym1pdCIsICJjbGVhbmVkVGV4dCIsICJpc09uUGFnZSIsICJub2RlVHlwZSIsICJOb2RlIiwgIkVMRU1FTlRfTk9ERSIsICJjYXRUaXRsZSIsICJnZXRBdHRyaWJ1dGUiLCAiX3RlbXBsYXRlT2JqZWN0OSIsICJpbml0aWFsaXplZCIsICJzZXR1cFRpbWVvdXQiLCAiZmluZEJ5Q2xhc3MiLCAic2NvcGUiLCAic2V0dXAiLCAiYWRkaXRpb25hbFdvcmsiLCAiY2xlYXJUaW1lb3V0IiwgImhpZGRlbkNhdHMiLCAiZm9vdGVyIiwgImNvbnRhaW5lciIsICJjcmVhdGVFZGl0b3JzIiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAiY29weUNhdHMiLCAiQXJyYXkiLCAiYXQiLCAibGFzdFNwYW4iLCAiZW5hYmxlTXVsdGkiLCAiaW5uZXJIVE1MIiwgImN1cnNvciIsICJob29rIiwgImZpcmUiLCAiY3JlYXRlQ29tbWl0Rm9ybSIsICJmb3JtQ29udGFpbmVyIiwgIndnUGFnZUNvbnRlbnRNb2RlbCIsICJnZXRQYWdlIiwgInNldFN0YXRlIiwgIm5ld1NwYW5zIiwgImdldFN0YXRlIiwgIl9pOSIsICJfZWRpdG9yczgiLCAicmVhbGx5X3J1biIsICJ3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSIsICJVcGxvYWRGb3JtIiwgInByZXZpb3VzX2hvdGNhdF9zdGF0ZSIsICJ3Z0lzQXJ0aWNsZSIsICJydW4iLCAic3RhcnRlZCIsICJob3RjYXRfZ2V0X3N0YXRlIiwgImhvdGNhdF9zZXRfc3RhdGUiLCAiaG90Y2F0X2Nsb3NlX2Zvcm0iLCAicnVuV2hlblJlYWR5Il0KfQo=
