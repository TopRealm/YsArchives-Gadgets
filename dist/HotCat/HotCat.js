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
var catcheckInlineIcon = "check-module__catcheckInlineIcon_mJ5NDq__491";
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwtdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi1yYXcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmRleGVkLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1jYWxsYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1idWlsdC1pbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnZpcm9ubWVudC11c2VyLWFnZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYW4taW5zdGFuY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3JyZWN0LXByb3RvdHlwZS1nZXR0ZXIuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbi1hY2Nlc3Nvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaHRtbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1jcmVhdGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMtY29yZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5pdGVyYXRvci5jb25zdHJ1Y3Rvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1pdGVyYXRvci1kaXJlY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW5zLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLWl0ZXItcmVzdWx0LW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0b3ItY3JlYXRlLXByb3h5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2FsbC13aXRoLXNhZmUtaXRlcmF0aW9uLWNsb3NpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuaXRlcmF0b3IuZmlsdGVyLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLWNsYXVzZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9ycy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWFycmF5LWl0ZXJhdG9yLW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXN0cmluZy10YWctc3VwcG9ydC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5pdGVyYXRvci5maW5kLmpzIiwgIi4uLy4uL3NyYy9Ib3RDYXQvbW9kdWxlcy9jaGVjay5tb2R1bGUubGVzcyIsICIuLi8uLi9zcmMvSG90Q2F0L21vZHVsZXMvYXBpLnRzIiwgIi4uLy4uL3NyYy9Ib3RDYXQvbW9kdWxlcy9jaGVjay50cyIsICIuLi8uLi9zcmMvSG90Q2F0L0hvdENhdC5qcyIsICIuLi8uLi9zcmMvSG90Q2F0L21vZHVsZXMvZ2V0TWVzc2FnZS50cyIsICIuLi8uLi9zcmMvSG90Q2F0L21vZHVsZXMvbWVzc2FnZXMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIid1c2Ugc3RyaWN0JztcbnZhciBjaGVjayA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgJiYgaXQuTWF0aCA9PT0gTWF0aCAmJiBpdDtcbn07XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG5tb2R1bGUuZXhwb3J0cyA9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1nbG9iYWwtdGhpcyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBnbG9iYWxUaGlzID09ICdvYmplY3QnICYmIGdsb2JhbFRoaXMpIHx8XG4gIGNoZWNrKHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93KSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzIC0tIHNhZmVcbiAgY2hlY2sodHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZikgfHxcbiAgY2hlY2sodHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwpIHx8XG4gIGNoZWNrKHR5cGVvZiB0aGlzID09ICdvYmplY3QnICYmIHRoaXMpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuYyAtLSBmYWxsYmFja1xuICAoZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSkoKSB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIERldGVjdCBJRTgncyBpbmNvbXBsZXRlIGRlZmluZVByb3BlcnR5IGltcGxlbWVudGF0aW9uXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgMSwgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSlbMV0gIT09IDc7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZnVuY3Rpb24tcHJvdG90eXBlLWJpbmQgLS0gc2FmZVxuICB2YXIgdGVzdCA9IChmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0pLmJpbmQoKTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGlucyAtLSBzYWZlXG4gIHJldHVybiB0eXBlb2YgdGVzdCAhPSAnZnVuY3Rpb24nIHx8IHRlc3QuaGFzT3duUHJvcGVydHkoJ3Byb3RvdHlwZScpO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBjYWxsID0gRnVuY3Rpb24ucHJvdG90eXBlLmNhbGw7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZnVuY3Rpb24tcHJvdG90eXBlLWJpbmQgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IGNhbGwuYmluZChjYWxsKSA6IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGNhbGwuYXBwbHkoY2FsbCwgYXJndW1lbnRzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIE5hc2hvcm4gfiBKREs4IGJ1Z1xudmFyIE5BU0hPUk5fQlVHID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmICEkcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh7IDE6IDIgfSwgMSk7XG5cbi8vIGBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eWlzZW51bWVyYWJsZVxuZXhwb3J0cy5mID0gTkFTSE9STl9CVUcgPyBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShWKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMsIFYpO1xuICByZXR1cm4gISFkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IuZW51bWVyYWJsZTtcbn0gOiAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIGNhbGwgPSBGdW5jdGlvblByb3RvdHlwZS5jYWxsO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbnZhciB1bmN1cnJ5VGhpc1dpdGhCaW5kID0gTkFUSVZFX0JJTkQgJiYgRnVuY3Rpb25Qcm90b3R5cGUuYmluZC5iaW5kKGNhbGwsIGNhbGwpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9CSU5EID8gdW5jdXJyeVRoaXNXaXRoQmluZCA6IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjYWxsLmFwcGx5KGZuLCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbnZhciB0b1N0cmluZyA9IHVuY3VycnlUaGlzKHt9LnRvU3RyaW5nKTtcbnZhciBzdHJpbmdTbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHN0cmluZ1NsaWNlKHRvU3RyaW5nKGl0KSwgOCwgLTEpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xudmFyIHNwbGl0ID0gdW5jdXJyeVRoaXMoJycuc3BsaXQpO1xuXG4vLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xubW9kdWxlLmV4cG9ydHMgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIHRocm93cyBhbiBlcnJvciBpbiByaGlubywgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3JoaW5vL2lzc3Vlcy8zNDZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGlucyAtLSBzYWZlXG4gIHJldHVybiAhJE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApO1xufSkgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNsYXNzb2YoaXQpID09PSAnU3RyaW5nJyA/IHNwbGl0KGl0LCAnJykgOiAkT2JqZWN0KGl0KTtcbn0gOiAkT2JqZWN0O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIHdlIGNhbid0IHVzZSBqdXN0IGBpdCA9PSBudWxsYCBzaW5jZSBvZiBgZG9jdW1lbnQuYWxsYCBzcGVjaWFsIGNhc2Vcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtSXNIVE1MRERBLWludGVybmFsLXNsb3QtYWVjXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPT09IG51bGwgfHwgaXQgPT09IHVuZGVmaW5lZDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgUmVxdWlyZU9iamVjdENvZXJjaWJsZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlcXVpcmVvYmplY3Rjb2VyY2libGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpc051bGxPclVuZGVmaW5lZChpdCkpIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEluZGV4ZWRPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShpdCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90XG52YXIgZG9jdW1lbnRBbGwgPSB0eXBlb2YgZG9jdW1lbnQgPT0gJ29iamVjdCcgJiYgZG9jdW1lbnQuYWxsO1xuXG4vLyBgSXNDYWxsYWJsZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWlzY2FsbGFibGVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL25vLXR5cGVvZi11bmRlZmluZWQgLS0gcmVxdWlyZWQgZm9yIHRlc3Rpbmdcbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIGRvY3VtZW50QWxsID09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50QWxsICE9PSB1bmRlZmluZWQgPyBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PSAnZnVuY3Rpb24nIHx8IGFyZ3VtZW50ID09PSBkb2N1bWVudEFsbDtcbn0gOiBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PSAnZnVuY3Rpb24nO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiBpc0NhbGxhYmxlKGl0KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciBhRnVuY3Rpb24gPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGlzQ2FsbGFibGUoYXJndW1lbnQpID8gYXJndW1lbnQgOiB1bmRlZmluZWQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lc3BhY2UsIG1ldGhvZCkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBhRnVuY3Rpb24oZ2xvYmFsVGhpc1tuYW1lc3BhY2VdKSA6IGdsb2JhbFRoaXNbbmFtZXNwYWNlXSAmJiBnbG9iYWxUaGlzW25hbWVzcGFjZV1bbWV0aG9kXTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVuY3VycnlUaGlzKHt9LmlzUHJvdG90eXBlT2YpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG5cbnZhciBuYXZpZ2F0b3IgPSBnbG9iYWxUaGlzLm5hdmlnYXRvcjtcbnZhciB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudDtcblxubW9kdWxlLmV4cG9ydHMgPSB1c2VyQWdlbnQgPyBTdHJpbmcodXNlckFnZW50KSA6ICcnO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Vudmlyb25tZW50LXVzZXItYWdlbnQnKTtcblxudmFyIHByb2Nlc3MgPSBnbG9iYWxUaGlzLnByb2Nlc3M7XG52YXIgRGVubyA9IGdsb2JhbFRoaXMuRGVubztcbnZhciB2ZXJzaW9ucyA9IHByb2Nlc3MgJiYgcHJvY2Vzcy52ZXJzaW9ucyB8fCBEZW5vICYmIERlbm8udmVyc2lvbjtcbnZhciB2OCA9IHZlcnNpb25zICYmIHZlcnNpb25zLnY4O1xudmFyIG1hdGNoLCB2ZXJzaW9uO1xuXG5pZiAodjgpIHtcbiAgbWF0Y2ggPSB2OC5zcGxpdCgnLicpO1xuICAvLyBpbiBvbGQgQ2hyb21lLCB2ZXJzaW9ucyBvZiBWOCBpc24ndCBWOCA9IENocm9tZSAvIDEwXG4gIC8vIGJ1dCB0aGVpciBjb3JyZWN0IHZlcnNpb25zIGFyZSBub3QgaW50ZXJlc3RpbmcgZm9yIHVzXG4gIHZlcnNpb24gPSBtYXRjaFswXSA+IDAgJiYgbWF0Y2hbMF0gPCA0ID8gMSA6ICsobWF0Y2hbMF0gKyBtYXRjaFsxXSk7XG59XG5cbi8vIEJyb3dzZXJGUyBOb2RlSlMgYHByb2Nlc3NgIHBvbHlmaWxsIGluY29ycmVjdGx5IHNldCBgLnY4YCB0byBgMC4wYFxuLy8gc28gY2hlY2sgYHVzZXJBZ2VudGAgZXZlbiBpZiBgLnY4YCBleGlzdHMsIGJ1dCAwXG5pZiAoIXZlcnNpb24gJiYgdXNlckFnZW50KSB7XG4gIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9FZGdlXFwvKFxcZCspLyk7XG4gIGlmICghbWF0Y2ggfHwgbWF0Y2hbMV0gPj0gNzQpIHtcbiAgICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvQ2hyb21lXFwvKFxcZCspLyk7XG4gICAgaWYgKG1hdGNoKSB2ZXJzaW9uID0gK21hdGNoWzFdO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmVyc2lvbjtcbiIsICIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1zeW1ib2wgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Vudmlyb25tZW50LXY4LXZlcnNpb24nKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcblxudmFyICRTdHJpbmcgPSBnbG9iYWxUaGlzLlN0cmluZztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gcmVxdWlyZWQgZm9yIHRlc3Rpbmdcbm1vZHVsZS5leHBvcnRzID0gISFPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBzeW1ib2wgPSBTeW1ib2woJ3N5bWJvbCBkZXRlY3Rpb24nKTtcbiAgLy8gQ2hyb21lIDM4IFN5bWJvbCBoYXMgaW5jb3JyZWN0IHRvU3RyaW5nIGNvbnZlcnNpb25cbiAgLy8gYGdldC1vd24tcHJvcGVydHktc3ltYm9sc2AgcG9seWZpbGwgc3ltYm9scyBjb252ZXJ0ZWQgdG8gb2JqZWN0IGFyZSBub3QgU3ltYm9sIGluc3RhbmNlc1xuICAvLyBuYjogRG8gbm90IGNhbGwgYFN0cmluZ2AgZGlyZWN0bHkgdG8gYXZvaWQgdGhpcyBiZWluZyBvcHRpbWl6ZWQgb3V0IHRvIGBzeW1ib2wrJydgIHdoaWNoIHdpbGwsXG4gIC8vIG9mIGNvdXJzZSwgZmFpbC5cbiAgcmV0dXJuICEkU3RyaW5nKHN5bWJvbCkgfHwgIShPYmplY3Qoc3ltYm9sKSBpbnN0YW5jZW9mIFN5bWJvbCkgfHxcbiAgICAvLyBDaHJvbWUgMzgtNDAgc3ltYm9scyBhcmUgbm90IGluaGVyaXRlZCBmcm9tIERPTSBjb2xsZWN0aW9ucyBwcm90b3R5cGVzIHRvIGluc3RhbmNlc1xuICAgICFTeW1ib2wuc2hhbSAmJiBWOF9WRVJTSU9OICYmIFY4X1ZFUlNJT04gPCA0MTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9TWU1CT0wgJiZcbiAgIVN5bWJvbC5zaGFtICYmXG4gIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCc7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZicpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVTRV9TWU1CT0xfQVNfVUlEID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHZhciAkU3ltYm9sID0gZ2V0QnVpbHRJbignU3ltYm9sJyk7XG4gIHJldHVybiBpc0NhbGxhYmxlKCRTeW1ib2wpICYmIGlzUHJvdG90eXBlT2YoJFN5bWJvbC5wcm90b3R5cGUsICRPYmplY3QoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICRTdHJpbmcgPSBTdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICRTdHJpbmcoYXJndW1lbnQpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiAnT2JqZWN0JztcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHRyeVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RyeS10by1zdHJpbmcnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBBc3NlcnQ6IElzQ2FsbGFibGUoYXJndW1lbnQpIGlzIHRydWVgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNDYWxsYWJsZShhcmd1bWVudCkpIHJldHVybiBhcmd1bWVudDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IodHJ5VG9TdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG4vLyBgR2V0TWV0aG9kYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZ2V0bWV0aG9kXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChWLCBQKSB7XG4gIHZhciBmdW5jID0gVltQXTtcbiAgcmV0dXJuIGlzTnVsbE9yVW5kZWZpbmVkKGZ1bmMpID8gdW5kZWZpbmVkIDogYUNhbGxhYmxlKGZ1bmMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYE9yZGluYXJ5VG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vcmRpbmFyeXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKHByZWYgPT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChpc0NhbGxhYmxlKGZuID0gaW5wdXQudmFsdWVPZikgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChwcmVmICE9PSAnc3RyaW5nJyAmJiBpc0NhbGxhYmxlKGZuID0gaW5wdXQudG9TdHJpbmcpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICB0cnkge1xuICAgIGRlZmluZVByb3BlcnR5KGdsb2JhbFRoaXMsIGtleSwgeyB2YWx1ZTogdmFsdWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZ2xvYmFsVGhpc1trZXldID0gdmFsdWU7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gbW9kdWxlLmV4cG9ydHMgPSBnbG9iYWxUaGlzW1NIQVJFRF0gfHwgZGVmaW5lR2xvYmFsUHJvcGVydHkoU0hBUkVELCB7fSk7XG5cbihzdG9yZS52ZXJzaW9ucyB8fCAoc3RvcmUudmVyc2lvbnMgPSBbXSkpLnB1c2goe1xuICB2ZXJzaW9uOiAnMy40MS4wJyxcbiAgbW9kZTogSVNfUFVSRSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE0LTIwMjUgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknLFxuICBsaWNlbnNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvYmxvYi92My40MS4wL0xJQ0VOU0UnLFxuICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcydcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlIHx8IHt9KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG4vLyBgVG9PYmplY3RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b29iamVjdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuICRPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IHVuY3VycnlUaGlzKHt9Lmhhc093blByb3BlcnR5KTtcblxuLy8gYEhhc093blByb3BlcnR5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaGFzb3ducHJvcGVydHlcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaGFzb3duIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0Lmhhc093biB8fCBmdW5jdGlvbiBoYXNPd24oaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkodG9PYmplY3QoaXQpLCBrZXkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbnZhciBpZCA9IDA7XG52YXIgcG9zdGZpeCA9IE1hdGgucmFuZG9tKCk7XG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcygxLjAudG9TdHJpbmcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJyArIChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5KSArICcpXycgKyB0b1N0cmluZygrK2lkICsgcG9zdGZpeCwgMzYpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24nKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xuXG52YXIgU3ltYm9sID0gZ2xvYmFsVGhpcy5TeW1ib2w7XG52YXIgV2VsbEtub3duU3ltYm9sc1N0b3JlID0gc2hhcmVkKCd3a3MnKTtcbnZhciBjcmVhdGVXZWxsS25vd25TeW1ib2wgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IFN5bWJvbFsnZm9yJ10gfHwgU3ltYm9sIDogU3ltYm9sICYmIFN5bWJvbC53aXRob3V0U2V0dGVyIHx8IHVpZDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICBpZiAoIWhhc093bihXZWxsS25vd25TeW1ib2xzU3RvcmUsIG5hbWUpKSB7XG4gICAgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID0gTkFUSVZFX1NZTUJPTCAmJiBoYXNPd24oU3ltYm9sLCBuYW1lKVxuICAgICAgPyBTeW1ib2xbbmFtZV1cbiAgICAgIDogY3JlYXRlV2VsbEtub3duU3ltYm9sKCdTeW1ib2wuJyArIG5hbWUpO1xuICB9IHJldHVybiBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1zeW1ib2wnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xudmFyIG9yZGluYXJ5VG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3JkaW5hcnktdG8tcHJpbWl0aXZlJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xudmFyIFRPX1BSSU1JVElWRSA9IHdlbGxLbm93blN5bWJvbCgndG9QcmltaXRpdmUnKTtcblxuLy8gYFRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIGlmICghaXNPYmplY3QoaW5wdXQpIHx8IGlzU3ltYm9sKGlucHV0KSkgcmV0dXJuIGlucHV0O1xuICB2YXIgZXhvdGljVG9QcmltID0gZ2V0TWV0aG9kKGlucHV0LCBUT19QUklNSVRJVkUpO1xuICB2YXIgcmVzdWx0O1xuICBpZiAoZXhvdGljVG9QcmltKSB7XG4gICAgaWYgKHByZWYgPT09IHVuZGVmaW5lZCkgcHJlZiA9ICdkZWZhdWx0JztcbiAgICByZXN1bHQgPSBjYWxsKGV4b3RpY1RvUHJpbSwgaW5wdXQsIHByZWYpO1xuICAgIGlmICghaXNPYmplY3QocmVzdWx0KSB8fCBpc1N5bWJvbChyZXN1bHQpKSByZXR1cm4gcmVzdWx0O1xuICAgIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xuICB9XG4gIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnbnVtYmVyJztcbiAgcmV0dXJuIG9yZGluYXJ5VG9QcmltaXRpdmUoaW5wdXQsIHByZWYpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG5cbi8vIGBUb1Byb3BlcnR5S2V5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcm9wZXJ0eWtleVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCAnc3RyaW5nJyk7XG4gIHJldHVybiBpc1N5bWJvbChrZXkpID8ga2V5IDoga2V5ICsgJyc7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciBkb2N1bWVudCA9IGdsb2JhbFRoaXMuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBFWElTVFMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBFWElTVFMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcblxuLy8gVGhhbmtzIHRvIElFOCBmb3IgaXRzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3JlYXRlRWxlbWVudCgnZGl2JyksICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfVxuICB9KS5hICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhc093bihPLCBQKSkgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcighY2FsbChwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mLCBPLCBQKSwgT1tQXSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIFY4IH4gQ2hyb21lIDM2LVxuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzMzNFxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdwcm90b3R5cGUnLCB7XG4gICAgdmFsdWU6IDQyLFxuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KS5wcm90b3R5cGUgIT09IDQyO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFN0cmluZyA9IFN0cmluZztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBUeXBlKGFyZ3VtZW50KSBpcyBPYmplY3RgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNPYmplY3QoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKCRTdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYW4gb2JqZWN0Jyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG52YXIgVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdjgtcHJvdG90eXBlLWRlZmluZS1idWcnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBFTlVNRVJBQkxFID0gJ2VudW1lcmFibGUnO1xudmFyIENPTkZJR1VSQUJMRSA9ICdjb25maWd1cmFibGUnO1xudmFyIFdSSVRBQkxFID0gJ3dyaXRhYmxlJztcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA/IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKHR5cGVvZiBPID09PSAnZnVuY3Rpb24nICYmIFAgPT09ICdwcm90b3R5cGUnICYmICd2YWx1ZScgaW4gQXR0cmlidXRlcyAmJiBXUklUQUJMRSBpbiBBdHRyaWJ1dGVzICYmICFBdHRyaWJ1dGVzW1dSSVRBQkxFXSkge1xuICAgIHZhciBjdXJyZW50ID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgICBpZiAoY3VycmVudCAmJiBjdXJyZW50W1dSSVRBQkxFXSkge1xuICAgICAgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gICAgICBBdHRyaWJ1dGVzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IENPTkZJR1VSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tDT05GSUdVUkFCTEVdIDogY3VycmVudFtDT05GSUdVUkFCTEVdLFxuICAgICAgICBlbnVtZXJhYmxlOiBFTlVNRVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0VOVU1FUkFCTEVdIDogY3VycmVudFtFTlVNRVJBQkxFXSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgICB9O1xuICAgIH1cbiAgfSByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xufSA6ICRkZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0RGVzY3JpcHRvciA9IERFU0NSSVBUT1JTICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbnZhciBFWElTVFMgPSBoYXNPd24oRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJyk7XG4vLyBhZGRpdGlvbmFsIHByb3RlY3Rpb24gZnJvbSBtaW5pZmllZCAvIG1hbmdsZWQgLyBkcm9wcGVkIGZ1bmN0aW9uIG5hbWVzXG52YXIgUFJPUEVSID0gRVhJU1RTICYmIChmdW5jdGlvbiBzb21ldGhpbmcoKSB7IC8qIGVtcHR5ICovIH0pLm5hbWUgPT09ICdzb21ldGhpbmcnO1xudmFyIENPTkZJR1VSQUJMRSA9IEVYSVNUUyAmJiAoIURFU0NSSVBUT1JTIHx8IChERVNDUklQVE9SUyAmJiBnZXREZXNjcmlwdG9yKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpLmNvbmZpZ3VyYWJsZSkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRVhJU1RTOiBFWElTVFMsXG4gIFBST1BFUjogUFJPUEVSLFxuICBDT05GSUdVUkFCTEU6IENPTkZJR1VSQUJMRVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG52YXIgZnVuY3Rpb25Ub1N0cmluZyA9IHVuY3VycnlUaGlzKEZ1bmN0aW9uLnRvU3RyaW5nKTtcblxuLy8gdGhpcyBoZWxwZXIgYnJva2VuIGluIGBjb3JlLWpzQDMuNC4xLTMuNC40YCwgc28gd2UgY2FuJ3QgdXNlIGBzaGFyZWRgIGhlbHBlclxuaWYgKCFpc0NhbGxhYmxlKHN0b3JlLmluc3BlY3RTb3VyY2UpKSB7XG4gIHN0b3JlLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb25Ub1N0cmluZyhpdCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmUuaW5zcGVjdFNvdXJjZTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWxUaGlzLldlYWtNYXA7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNDYWxsYWJsZShXZWFrTWFwKSAmJiAvbmF0aXZlIGNvZGUvLnRlc3QoU3RyaW5nKFdlYWtNYXApKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcblxudmFyIGtleXMgPSBzaGFyZWQoJ2tleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBrZXlzW2tleV0gfHwgKGtleXNba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX1dFQUtfTUFQID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlYWstbWFwLWJhc2ljLWRldGVjdGlvbicpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCA9ICdPYmplY3QgYWxyZWFkeSBpbml0aWFsaXplZCc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsVGhpcy5UeXBlRXJyb3I7XG52YXIgV2Vha01hcCA9IGdsb2JhbFRoaXMuV2Vha01hcDtcbnZhciBzZXQsIGdldCwgaGFzO1xuXG52YXIgZW5mb3JjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaGFzKGl0KSA/IGdldChpdCkgOiBzZXQoaXQsIHt9KTtcbn07XG5cbnZhciBnZXR0ZXJGb3IgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIHN0YXRlO1xuICAgIGlmICghaXNPYmplY3QoaXQpIHx8IChzdGF0ZSA9IGdldChpdCkpLnR5cGUgIT09IFRZUEUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkJyk7XG4gICAgfSByZXR1cm4gc3RhdGU7XG4gIH07XG59O1xuXG5pZiAoTkFUSVZFX1dFQUtfTUFQIHx8IHNoYXJlZC5zdGF0ZSkge1xuICB2YXIgc3RvcmUgPSBzaGFyZWQuc3RhdGUgfHwgKHNoYXJlZC5zdGF0ZSA9IG5ldyBXZWFrTWFwKCkpO1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG4gIHN0b3JlLmdldCA9IHN0b3JlLmdldDtcbiAgc3RvcmUuaGFzID0gc3RvcmUuaGFzO1xuICBzdG9yZS5zZXQgPSBzdG9yZS5zZXQ7XG4gIC8qIGVzbGludC1lbmFibGUgbm8tc2VsZi1hc3NpZ24gLS0gcHJvdG90eXBlIG1ldGhvZHMgcHJvdGVjdGlvbiAqL1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKHN0b3JlLmhhcyhpdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIHN0b3JlLnNldChpdCwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHN0b3JlLmdldChpdCkgfHwge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBzdG9yZS5oYXMoaXQpO1xuICB9O1xufSBlbHNlIHtcbiAgdmFyIFNUQVRFID0gc2hhcmVkS2V5KCdzdGF0ZScpO1xuICBoaWRkZW5LZXlzW1NUQVRFXSA9IHRydWU7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoaGFzT3duKGl0LCBTVEFURSkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShpdCwgU1RBVEUsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKSA/IGl0W1NUQVRFXSA6IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldCxcbiAgZ2V0OiBnZXQsXG4gIGhhczogaGFzLFxuICBlbmZvcmNlOiBlbmZvcmNlLFxuICBnZXR0ZXJGb3I6IGdldHRlckZvclxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLW5hbWUnKS5DT05GSUdVUkFCTEU7XG52YXIgaW5zcGVjdFNvdXJjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZScpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcblxudmFyIGVuZm9yY2VJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5lbmZvcmNlO1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldDtcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG52YXIgcmVwbGFjZSA9IHVuY3VycnlUaGlzKCcnLnJlcGxhY2UpO1xudmFyIGpvaW4gPSB1bmN1cnJ5VGhpcyhbXS5qb2luKTtcblxudmFyIENPTkZJR1VSQUJMRV9MRU5HVEggPSBERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAnbGVuZ3RoJywgeyB2YWx1ZTogOCB9KS5sZW5ndGggIT09IDg7XG59KTtcblxudmFyIFRFTVBMQVRFID0gU3RyaW5nKFN0cmluZykuc3BsaXQoJ1N0cmluZycpO1xuXG52YXIgbWFrZUJ1aWx0SW4gPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgbmFtZSwgb3B0aW9ucykge1xuICBpZiAoc3RyaW5nU2xpY2UoJFN0cmluZyhuYW1lKSwgMCwgNykgPT09ICdTeW1ib2woJykge1xuICAgIG5hbWUgPSAnWycgKyByZXBsYWNlKCRTdHJpbmcobmFtZSksIC9eU3ltYm9sXFwoKFteKV0qKVxcKS4qJC8sICckMScpICsgJ10nO1xuICB9XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZ2V0dGVyKSBuYW1lID0gJ2dldCAnICsgbmFtZTtcbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5zZXR0ZXIpIG5hbWUgPSAnc2V0ICcgKyBuYW1lO1xuICBpZiAoIWhhc093bih2YWx1ZSwgJ25hbWUnKSB8fCAoQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgJiYgdmFsdWUubmFtZSAhPT0gbmFtZSkpIHtcbiAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbmFtZScsIHsgdmFsdWU6IG5hbWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbiAgICBlbHNlIHZhbHVlLm5hbWUgPSBuYW1lO1xuICB9XG4gIGlmIChDT05GSUdVUkFCTEVfTEVOR1RIICYmIG9wdGlvbnMgJiYgaGFzT3duKG9wdGlvbnMsICdhcml0eScpICYmIHZhbHVlLmxlbmd0aCAhPT0gb3B0aW9ucy5hcml0eSkge1xuICAgIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbGVuZ3RoJywgeyB2YWx1ZTogb3B0aW9ucy5hcml0eSB9KTtcbiAgfVxuICB0cnkge1xuICAgIGlmIChvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnY29uc3RydWN0b3InKSAmJiBvcHRpb25zLmNvbnN0cnVjdG9yKSB7XG4gICAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAncHJvdG90eXBlJywgeyB3cml0YWJsZTogZmFsc2UgfSk7XG4gICAgLy8gaW4gVjggfiBDaHJvbWUgNTMsIHByb3RvdHlwZXMgb2Ygc29tZSBtZXRob2RzLCBsaWtlIGBBcnJheS5wcm90b3R5cGUudmFsdWVzYCwgYXJlIG5vbi13cml0YWJsZVxuICAgIH0gZWxzZSBpZiAodmFsdWUucHJvdG90eXBlKSB2YWx1ZS5wcm90b3R5cGUgPSB1bmRlZmluZWQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgdmFyIHN0YXRlID0gZW5mb3JjZUludGVybmFsU3RhdGUodmFsdWUpO1xuICBpZiAoIWhhc093bihzdGF0ZSwgJ3NvdXJjZScpKSB7XG4gICAgc3RhdGUuc291cmNlID0gam9pbihURU1QTEFURSwgdHlwZW9mIG5hbWUgPT0gJ3N0cmluZycgPyBuYW1lIDogJycpO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG5cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV4dGVuZC1uYXRpdmUgLS0gcmVxdWlyZWRcbkZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IG1ha2VCdWlsdEluKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gaXNDYWxsYWJsZSh0aGlzKSAmJiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnNvdXJjZSB8fCBpbnNwZWN0U291cmNlKHRoaXMpO1xufSwgJ3RvU3RyaW5nJyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgbWFrZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWFrZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgdmFyIHNpbXBsZSA9IG9wdGlvbnMuZW51bWVyYWJsZTtcbiAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWUgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubmFtZSA6IGtleTtcbiAgaWYgKGlzQ2FsbGFibGUodmFsdWUpKSBtYWtlQnVpbHRJbih2YWx1ZSwgbmFtZSwgb3B0aW9ucyk7XG4gIGlmIChvcHRpb25zLmdsb2JhbCkge1xuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lR2xvYmFsUHJvcGVydHkoa2V5LCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghb3B0aW9ucy51bnNhZmUpIGRlbGV0ZSBPW2tleV07XG4gICAgICBlbHNlIGlmIChPW2tleV0pIHNpbXBsZSA9IHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiAhb3B0aW9ucy5ub25Db25maWd1cmFibGUsXG4gICAgICB3cml0YWJsZTogIW9wdGlvbnMubm9uV3JpdGFibGVcbiAgICB9KTtcbiAgfSByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4vLyBgTWF0aC50cnVuY2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hdGgudHJ1bmNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1tYXRoLXRydW5jIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gTWF0aC50cnVuYyB8fCBmdW5jdGlvbiB0cnVuYyh4KSB7XG4gIHZhciBuID0gK3g7XG4gIHJldHVybiAobiA+IDAgPyBmbG9vciA6IGNlaWwpKG4pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdHJ1bmMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWF0aC10cnVuYycpO1xuXG4vLyBgVG9JbnRlZ2VyT3JJbmZpbml0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvaW50ZWdlcm9yaW5maW5pdHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBudW1iZXIgPSArYXJndW1lbnQ7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gIHJldHVybiBudW1iZXIgIT09IG51bWJlciB8fCBudW1iZXIgPT09IDAgPyAwIDogdHJ1bmMobnVtYmVyKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIEhlbHBlciBmb3IgYSBwb3B1bGFyIHJlcGVhdGluZyBjYXNlIG9mIHRoZSBzcGVjOlxuLy8gTGV0IGludGVnZXIgYmUgPyBUb0ludGVnZXIoaW5kZXgpLlxuLy8gSWYgaW50ZWdlciA8IDAsIGxldCByZXN1bHQgYmUgbWF4KChsZW5ndGggKyBpbnRlZ2VyKSwgMCk7IGVsc2UgbGV0IHJlc3VsdCBiZSBtaW4oaW50ZWdlciwgbGVuZ3RoKS5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgdmFyIGludGVnZXIgPSB0b0ludGVnZXJPckluZmluaXR5KGluZGV4KTtcbiAgcmV0dXJuIGludGVnZXIgPCAwID8gbWF4KGludGVnZXIgKyBsZW5ndGgsIDApIDogbWluKGludGVnZXIsIGxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBgVG9MZW5ndGhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2xlbmd0aFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGxlbiA9IHRvSW50ZWdlck9ySW5maW5pdHkoYXJndW1lbnQpO1xuICByZXR1cm4gbGVuID4gMCA/IG1pbihsZW4sIDB4MUZGRkZGRkZGRkZGRkYpIDogMDsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG5cbi8vIGBMZW5ndGhPZkFycmF5TGlrZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWxlbmd0aG9mYXJyYXlsaWtlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHRvTGVuZ3RoKG9iai5sZW5ndGgpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGluZGV4T2YsIGluY2x1ZGVzIH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gICAgaWYgKGxlbmd0aCA9PT0gMCkgcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT09IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgICBpZiAodmFsdWUgIT09IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICBpZiAoKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pICYmIE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuICBpbmNsdWRlczogY3JlYXRlTWV0aG9kKHRydWUpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4gIGluZGV4T2Y6IGNyZWF0ZU1ldGhvZChmYWxzZSlcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgaW5kZXhPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluZGV4T2Y7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSAhaGFzT3duKGhpZGRlbktleXMsIGtleSkgJiYgaGFzT3duKE8sIGtleSkgJiYgcHVzaChyZXN1bHQsIGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXNPd24oTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+aW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcHVzaChyZXN1bHQsIGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gSUU4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IFtcbiAgJ2NvbnN0cnVjdG9yJyxcbiAgJ2hhc093blByb3BlcnR5JyxcbiAgJ2lzUHJvdG90eXBlT2YnLFxuICAncHJvcGVydHlJc0VudW1lcmFibGUnLFxuICAndG9Mb2NhbGVTdHJpbmcnLFxuICAndG9TdHJpbmcnLFxuICAndmFsdWVPZidcbl07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxudmFyIGhpZGRlbktleXMgPSBlbnVtQnVnS2V5cy5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5bmFtZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHluYW1lcyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcblxudmFyIGNvbmNhdCA9IHVuY3VycnlUaGlzKFtdLmNvbmNhdCk7XG5cbi8vIGFsbCBvYmplY3Qga2V5cywgaW5jbHVkZXMgbm9uLWVudW1lcmFibGUgYW5kIHN5bWJvbHNcbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignUmVmbGVjdCcsICdvd25LZXlzJykgfHwgZnVuY3Rpb24gb3duS2V5cyhpdCkge1xuICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUuZihhbk9iamVjdChpdCkpO1xuICB2YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlLmY7XG4gIHJldHVybiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBjb25jYXQoa2V5cywgZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSkgOiBrZXlzO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBvd25LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL293bi1rZXlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlLCBleGNlcHRpb25zKSB7XG4gIHZhciBrZXlzID0gb3duS2V5cyhzb3VyY2UpO1xuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mO1xuICB2YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmY7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGlmICghaGFzT3duKHRhcmdldCwga2V5KSAmJiAhKGV4Y2VwdGlvbnMgJiYgaGFzT3duKGV4Y2VwdGlvbnMsIGtleSkpKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgfVxuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIHJlcGxhY2VtZW50ID0gLyN8XFwucHJvdG90eXBlXFwuLztcblxudmFyIGlzRm9yY2VkID0gZnVuY3Rpb24gKGZlYXR1cmUsIGRldGVjdGlvbikge1xuICB2YXIgdmFsdWUgPSBkYXRhW25vcm1hbGl6ZShmZWF0dXJlKV07XG4gIHJldHVybiB2YWx1ZSA9PT0gUE9MWUZJTEwgPyB0cnVlXG4gICAgOiB2YWx1ZSA9PT0gTkFUSVZFID8gZmFsc2VcbiAgICA6IGlzQ2FsbGFibGUoZGV0ZWN0aW9uKSA/IGZhaWxzKGRldGVjdGlvbilcbiAgICA6ICEhZGV0ZWN0aW9uO1xufTtcblxudmFyIG5vcm1hbGl6ZSA9IGlzRm9yY2VkLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UocmVwbGFjZW1lbnQsICcuJykudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBkYXRhID0gaXNGb3JjZWQuZGF0YSA9IHt9O1xudmFyIE5BVElWRSA9IGlzRm9yY2VkLk5BVElWRSA9ICdOJztcbnZhciBQT0xZRklMTCA9IGlzRm9yY2VkLlBPTFlGSUxMID0gJ1AnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRm9yY2VkO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcbnZhciBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcycpO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xuXG4vKlxuICBvcHRpb25zLnRhcmdldCAgICAgICAgIC0gbmFtZSBvZiB0aGUgdGFyZ2V0IG9iamVjdFxuICBvcHRpb25zLmdsb2JhbCAgICAgICAgIC0gdGFyZ2V0IGlzIHRoZSBnbG9iYWwgb2JqZWN0XG4gIG9wdGlvbnMuc3RhdCAgICAgICAgICAgLSBleHBvcnQgYXMgc3RhdGljIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucHJvdG8gICAgICAgICAgLSBleHBvcnQgYXMgcHJvdG90eXBlIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucmVhbCAgICAgICAgICAgLSByZWFsIHByb3RvdHlwZSBtZXRob2QgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLmZvcmNlZCAgICAgICAgIC0gZXhwb3J0IGV2ZW4gaWYgdGhlIG5hdGl2ZSBmZWF0dXJlIGlzIGF2YWlsYWJsZVxuICBvcHRpb25zLmJpbmQgICAgICAgICAgIC0gYmluZCBtZXRob2RzIHRvIHRoZSB0YXJnZXQsIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy53cmFwICAgICAgICAgICAtIHdyYXAgY29uc3RydWN0b3JzIHRvIHByZXZlbnRpbmcgZ2xvYmFsIHBvbGx1dGlvbiwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLnVuc2FmZSAgICAgICAgIC0gdXNlIHRoZSBzaW1wbGUgYXNzaWdubWVudCBvZiBwcm9wZXJ0eSBpbnN0ZWFkIG9mIGRlbGV0ZSArIGRlZmluZVByb3BlcnR5XG4gIG9wdGlvbnMuc2hhbSAgICAgICAgICAgLSBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gIG9wdGlvbnMuZW51bWVyYWJsZSAgICAgLSBleHBvcnQgYXMgZW51bWVyYWJsZSBwcm9wZXJ0eVxuICBvcHRpb25zLmRvbnRDYWxsR2V0U2V0IC0gcHJldmVudCBjYWxsaW5nIGEgZ2V0dGVyIG9uIHRhcmdldFxuICBvcHRpb25zLm5hbWUgICAgICAgICAgIC0gdGhlIC5uYW1lIG9mIHRoZSBmdW5jdGlvbiBpZiBpdCBkb2VzIG5vdCBtYXRjaCB0aGUga2V5XG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucywgc291cmNlKSB7XG4gIHZhciBUQVJHRVQgPSBvcHRpb25zLnRhcmdldDtcbiAgdmFyIEdMT0JBTCA9IG9wdGlvbnMuZ2xvYmFsO1xuICB2YXIgU1RBVElDID0gb3B0aW9ucy5zdGF0O1xuICB2YXIgRk9SQ0VELCB0YXJnZXQsIGtleSwgdGFyZ2V0UHJvcGVydHksIHNvdXJjZVByb3BlcnR5LCBkZXNjcmlwdG9yO1xuICBpZiAoR0xPQkFMKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsVGhpcztcbiAgfSBlbHNlIGlmIChTVEFUSUMpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxUaGlzW1RBUkdFVF0gfHwgZGVmaW5lR2xvYmFsUHJvcGVydHkoVEFSR0VULCB7fSk7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsVGhpc1tUQVJHRVRdICYmIGdsb2JhbFRoaXNbVEFSR0VUXS5wcm90b3R5cGU7XG4gIH1cbiAgaWYgKHRhcmdldCkgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgc291cmNlUHJvcGVydHkgPSBzb3VyY2Vba2V5XTtcbiAgICBpZiAob3B0aW9ucy5kb250Q2FsbEdldFNldCkge1xuICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gICAgICB0YXJnZXRQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci52YWx1ZTtcbiAgICB9IGVsc2UgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRba2V5XTtcbiAgICBGT1JDRUQgPSBpc0ZvcmNlZChHTE9CQUwgPyBrZXkgOiBUQVJHRVQgKyAoU1RBVElDID8gJy4nIDogJyMnKSArIGtleSwgb3B0aW9ucy5mb3JjZWQpO1xuICAgIC8vIGNvbnRhaW5lZCBpbiB0YXJnZXRcbiAgICBpZiAoIUZPUkNFRCAmJiB0YXJnZXRQcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZW9mIHNvdXJjZVByb3BlcnR5ID09IHR5cGVvZiB0YXJnZXRQcm9wZXJ0eSkgY29udGludWU7XG4gICAgICBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKHNvdXJjZVByb3BlcnR5LCB0YXJnZXRQcm9wZXJ0eSk7XG4gICAgfVxuICAgIC8vIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgICBpZiAob3B0aW9ucy5zaGFtIHx8ICh0YXJnZXRQcm9wZXJ0eSAmJiB0YXJnZXRQcm9wZXJ0eS5zaGFtKSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHNvdXJjZVByb3BlcnR5LCAnc2hhbScsIHRydWUpO1xuICAgIH1cbiAgICBkZWZpbmVCdWlsdEluKHRhcmdldCwga2V5LCBzb3VyY2VQcm9wZXJ0eSwgb3B0aW9ucyk7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZicpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFByb3RvdHlwZSkge1xuICBpZiAoaXNQcm90b3R5cGVPZihQcm90b3R5cGUsIGl0KSkgcmV0dXJuIGl0O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcignSW5jb3JyZWN0IGludm9jYXRpb24nKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRigpIHsgLyogZW1wdHkgKi8gfVxuICBGLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IG51bGw7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0cHJvdG90eXBlb2YgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZihuZXcgRigpKSAhPT0gRi5wcm90b3R5cGU7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBDT1JSRUNUX1BST1RPVFlQRV9HRVRURVIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29ycmVjdC1wcm90b3R5cGUtZ2V0dGVyJyk7XG5cbnZhciBJRV9QUk9UTyA9IHNoYXJlZEtleSgnSUVfUFJPVE8nKTtcbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xudmFyIE9iamVjdFByb3RvdHlwZSA9ICRPYmplY3QucHJvdG90eXBlO1xuXG4vLyBgT2JqZWN0LmdldFByb3RvdHlwZU9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldHByb3RvdHlwZW9mXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldHByb3RvdHlwZW9mIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gQ09SUkVDVF9QUk9UT1RZUEVfR0VUVEVSID8gJE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIChPKSB7XG4gIHZhciBvYmplY3QgPSB0b09iamVjdChPKTtcbiAgaWYgKGhhc093bihvYmplY3QsIElFX1BST1RPKSkgcmV0dXJuIG9iamVjdFtJRV9QUk9UT107XG4gIHZhciBjb25zdHJ1Y3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcjtcbiAgaWYgKGlzQ2FsbGFibGUoY29uc3RydWN0b3IpICYmIG9iamVjdCBpbnN0YW5jZW9mIGNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gb2JqZWN0IGluc3RhbmNlb2YgJE9iamVjdCA/IE9iamVjdFByb3RvdHlwZSA6IG51bGw7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBtYWtlQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9tYWtlLWJ1aWx0LWluJyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpIHtcbiAgaWYgKGRlc2NyaXB0b3IuZ2V0KSBtYWtlQnVpbHRJbihkZXNjcmlwdG9yLmdldCwgbmFtZSwgeyBnZXR0ZXI6IHRydWUgfSk7XG4gIGlmIChkZXNjcmlwdG9yLnNldCkgbWFrZUJ1aWx0SW4oZGVzY3JpcHRvci5zZXQsIG5hbWUsIHsgc2V0dGVyOiB0cnVlIH0pO1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkuZih0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBrZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtrZXldID0gdmFsdWU7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG5cbi8vIGBPYmplY3Qua2V5c2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5rZXlzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWtleXMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Y4LXByb3RvdHlwZS1kZWZpbmUtYnVnJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIG9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMnKTtcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnRpZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydGllcyAtLSBzYWZlXG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyAmJiAhVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIHByb3BzID0gdG9JbmRleGVkT2JqZWN0KFByb3BlcnRpZXMpO1xuICB2YXIga2V5cyA9IG9iamVjdEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKE8sIGtleSA9IGtleXNbaW5kZXgrK10sIHByb3BzW2tleV0pO1xuICByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignZG9jdW1lbnQnLCAnZG9jdW1lbnRFbGVtZW50Jyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZ2xvYmFsIEFjdGl2ZVhPYmplY3QgLS0gb2xkIElFLCBXU0ggKi9cbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBkZWZpbmVQcm9wZXJ0aWVzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydGllcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG52YXIgaHRtbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9odG1sJyk7XG52YXIgZG9jdW1lbnRDcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcblxudmFyIEdUID0gJz4nO1xudmFyIExUID0gJzwnO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIFNDUklQVCA9ICdzY3JpcHQnO1xudmFyIElFX1BST1RPID0gc2hhcmVkS2V5KCdJRV9QUk9UTycpO1xuXG52YXIgRW1wdHlDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcblxudmFyIHNjcmlwdFRhZyA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gIHJldHVybiBMVCArIFNDUklQVCArIEdUICsgY29udGVudCArIExUICsgJy8nICsgU0NSSVBUICsgR1Q7XG59O1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgQWN0aXZlWCBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVggPSBmdW5jdGlvbiAoYWN0aXZlWERvY3VtZW50KSB7XG4gIGFjdGl2ZVhEb2N1bWVudC53cml0ZShzY3JpcHRUYWcoJycpKTtcbiAgYWN0aXZlWERvY3VtZW50LmNsb3NlKCk7XG4gIHZhciB0ZW1wID0gYWN0aXZlWERvY3VtZW50LnBhcmVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWFzc2lnbm1lbnQgLS0gYXZvaWQgbWVtb3J5IGxlYWtcbiAgYWN0aXZlWERvY3VtZW50ID0gbnVsbDtcbiAgcmV0dXJuIHRlbXA7XG59O1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgTnVsbFByb3RvT2JqZWN0VmlhSUZyYW1lID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gZG9jdW1lbnRDcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgdmFyIEpTID0gJ2phdmEnICsgU0NSSVBUICsgJzonO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBodG1sLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy80NzVcbiAgaWZyYW1lLnNyYyA9IFN0cmluZyhKUyk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUoc2NyaXB0VGFnKCdkb2N1bWVudC5GPU9iamVjdCcpKTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgcmV0dXJuIGlmcmFtZURvY3VtZW50LkY7XG59O1xuXG4vLyBDaGVjayBmb3IgZG9jdW1lbnQuZG9tYWluIGFuZCBhY3RpdmUgeCBzdXBwb3J0XG4vLyBObyBuZWVkIHRvIHVzZSBhY3RpdmUgeCBhcHByb2FjaCB3aGVuIGRvY3VtZW50LmRvbWFpbiBpcyBub3Qgc2V0XG4vLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltL2lzc3Vlcy8xNTBcbi8vIHZhcmlhdGlvbiBvZiBodHRwczovL2dpdGh1Yi5jb20va2l0Y2FtYnJpZGdlL2VzNS1zaGltL2NvbW1pdC80ZjczOGFjMDY2MzQ2XG4vLyBhdm9pZCBJRSBHQyBidWdcbnZhciBhY3RpdmVYRG9jdW1lbnQ7XG52YXIgTnVsbFByb3RvT2JqZWN0ID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIGFjdGl2ZVhEb2N1bWVudCA9IG5ldyBBY3RpdmVYT2JqZWN0KCdodG1sZmlsZScpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBpZ25vcmUgKi8gfVxuICBOdWxsUHJvdG9PYmplY3QgPSB0eXBlb2YgZG9jdW1lbnQgIT0gJ3VuZGVmaW5lZCdcbiAgICA/IGRvY3VtZW50LmRvbWFpbiAmJiBhY3RpdmVYRG9jdW1lbnRcbiAgICAgID8gTnVsbFByb3RvT2JqZWN0VmlhQWN0aXZlWChhY3RpdmVYRG9jdW1lbnQpIC8vIG9sZCBJRVxuICAgICAgOiBOdWxsUHJvdG9PYmplY3RWaWFJRnJhbWUoKVxuICAgIDogTnVsbFByb3RvT2JqZWN0VmlhQWN0aXZlWChhY3RpdmVYRG9jdW1lbnQpOyAvLyBXU0hcbiAgdmFyIGxlbmd0aCA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSBkZWxldGUgTnVsbFByb3RvT2JqZWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbbGVuZ3RoXV07XG4gIHJldHVybiBOdWxsUHJvdG9PYmplY3QoKTtcbn07XG5cbmhpZGRlbktleXNbSUVfUFJPVE9dID0gdHJ1ZTtcblxuLy8gYE9iamVjdC5jcmVhdGVgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuY3JlYXRlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWNyZWF0ZSAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eUNvbnN0cnVjdG9yW1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHlDb25zdHJ1Y3RvcigpO1xuICAgIEVtcHR5Q29uc3RydWN0b3JbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gTnVsbFByb3RvT2JqZWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkZWZpbmVQcm9wZXJ0aWVzTW9kdWxlLmYocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YnKTtcbnZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbicpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1lfU0FGQVJJX0lURVJBVE9SUyA9IGZhbHNlO1xuXG4vLyBgJUl0ZXJhdG9yUHJvdG90eXBlJWAgb2JqZWN0XG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSVpdGVyYXRvcnByb3RvdHlwZSUtb2JqZWN0XG52YXIgSXRlcmF0b3JQcm90b3R5cGUsIFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSwgYXJyYXlJdGVyYXRvcjtcblxuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWtleXMgLS0gc2FmZSAqL1xuaWYgKFtdLmtleXMpIHtcbiAgYXJyYXlJdGVyYXRvciA9IFtdLmtleXMoKTtcbiAgLy8gU2FmYXJpIDggaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gIGlmICghKCduZXh0JyBpbiBhcnJheUl0ZXJhdG9yKSkgQlVHR1lfU0FGQVJJX0lURVJBVE9SUyA9IHRydWU7XG4gIGVsc2Uge1xuICAgIFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKGdldFByb3RvdHlwZU9mKGFycmF5SXRlcmF0b3IpKTtcbiAgICBpZiAoUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlKSBJdGVyYXRvclByb3RvdHlwZSA9IFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxufVxuXG52YXIgTkVXX0lURVJBVE9SX1BST1RPVFlQRSA9ICFpc09iamVjdChJdGVyYXRvclByb3RvdHlwZSkgfHwgZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgdGVzdCA9IHt9O1xuICAvLyBGRjQ0LSBsZWdhY3kgaXRlcmF0b3JzIGNhc2VcbiAgcmV0dXJuIEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXS5jYWxsKHRlc3QpICE9PSB0ZXN0O1xufSk7XG5cbmlmIChORVdfSVRFUkFUT1JfUFJPVE9UWVBFKSBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuZWxzZSBpZiAoSVNfUFVSRSkgSXRlcmF0b3JQcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuXG4vLyBgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtJWl0ZXJhdG9ycHJvdG90eXBlJS1AQGl0ZXJhdG9yXG5pZiAoIWlzQ2FsbGFibGUoSXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdKSkge1xuICBkZWZpbmVCdWlsdEluKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEl0ZXJhdG9yUHJvdG90eXBlOiBJdGVyYXRvclByb3RvdHlwZSxcbiAgQlVHR1lfU0FGQVJJX0lURVJBVE9SUzogQlVHR1lfU0FGQVJJX0lURVJBVE9SU1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1pbnN0YW5jZScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZicpO1xudmFyIGRlZmluZUJ1aWx0SW5BY2Nlc3NvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4tYWNjZXNzb3InKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzLWNvcmUnKS5JdGVyYXRvclByb3RvdHlwZTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xuXG52YXIgQ09OU1RSVUNUT1IgPSAnY29uc3RydWN0b3InO1xudmFyIElURVJBVE9SID0gJ0l0ZXJhdG9yJztcbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBOYXRpdmVJdGVyYXRvciA9IGdsb2JhbFRoaXNbSVRFUkFUT1JdO1xuXG4vLyBGRjU2LSBoYXZlIG5vbi1zdGFuZGFyZCBnbG9iYWwgaGVscGVyIGBJdGVyYXRvcmBcbnZhciBGT1JDRUQgPSBJU19QVVJFXG4gIHx8ICFpc0NhbGxhYmxlKE5hdGl2ZUl0ZXJhdG9yKVxuICB8fCBOYXRpdmVJdGVyYXRvci5wcm90b3R5cGUgIT09IEl0ZXJhdG9yUHJvdG90eXBlXG4gIC8vIEZGNDQtIG5vbi1zdGFuZGFyZCBgSXRlcmF0b3JgIHBhc3NlcyBwcmV2aW91cyB0ZXN0c1xuICB8fCAhZmFpbHMoZnVuY3Rpb24gKCkgeyBOYXRpdmVJdGVyYXRvcih7fSk7IH0pO1xuXG52YXIgSXRlcmF0b3JDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uIEl0ZXJhdG9yKCkge1xuICBhbkluc3RhbmNlKHRoaXMsIEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgaWYgKGdldFByb3RvdHlwZU9mKHRoaXMpID09PSBJdGVyYXRvclByb3RvdHlwZSkgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fic3RyYWN0IGNsYXNzIEl0ZXJhdG9yIG5vdCBkaXJlY3RseSBjb25zdHJ1Y3RhYmxlJyk7XG59O1xuXG52YXIgZGVmaW5lSXRlcmF0b3JQcm90b3R5cGVBY2Nlc3NvciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIGlmIChERVNDUklQVE9SUykge1xuICAgIGRlZmluZUJ1aWx0SW5BY2Nlc3NvcihJdGVyYXRvclByb3RvdHlwZSwga2V5LCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gKHJlcGxhY2VtZW50KSB7XG4gICAgICAgIGFuT2JqZWN0KHRoaXMpO1xuICAgICAgICBpZiAodGhpcyA9PT0gSXRlcmF0b3JQcm90b3R5cGUpIHRocm93IG5ldyAkVHlwZUVycm9yKFwiWW91IGNhbid0IHJlZGVmaW5lIHRoaXMgcHJvcGVydHlcIik7XG4gICAgICAgIGlmIChoYXNPd24odGhpcywga2V5KSkgdGhpc1trZXldID0gcmVwbGFjZW1lbnQ7XG4gICAgICAgIGVsc2UgY3JlYXRlUHJvcGVydHkodGhpcywga2V5LCByZXBsYWNlbWVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSBJdGVyYXRvclByb3RvdHlwZVtrZXldID0gdmFsdWU7XG59O1xuXG5pZiAoIWhhc093bihJdGVyYXRvclByb3RvdHlwZSwgVE9fU1RSSU5HX1RBRykpIGRlZmluZUl0ZXJhdG9yUHJvdG90eXBlQWNjZXNzb3IoVE9fU1RSSU5HX1RBRywgSVRFUkFUT1IpO1xuXG5pZiAoRk9SQ0VEIHx8ICFoYXNPd24oSXRlcmF0b3JQcm90b3R5cGUsIENPTlNUUlVDVE9SKSB8fCBJdGVyYXRvclByb3RvdHlwZVtDT05TVFJVQ1RPUl0gPT09IE9iamVjdCkge1xuICBkZWZpbmVJdGVyYXRvclByb3RvdHlwZUFjY2Vzc29yKENPTlNUUlVDVE9SLCBJdGVyYXRvckNvbnN0cnVjdG9yKTtcbn1cblxuSXRlcmF0b3JDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBJdGVyYXRvclByb3RvdHlwZTtcblxuLy8gYEl0ZXJhdG9yYCBjb25zdHJ1Y3RvclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pdGVyYXRvclxuJCh7IGdsb2JhbDogdHJ1ZSwgY29uc3RydWN0b3I6IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgSXRlcmF0b3I6IEl0ZXJhdG9yQ29uc3RydWN0b3Jcbn0pO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGBHZXRJdGVyYXRvckRpcmVjdChvYmopYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9wcm9wb3NhbC1pdGVyYXRvci1oZWxwZXJzLyNzZWMtZ2V0aXRlcmF0b3JkaXJlY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4ge1xuICAgIGl0ZXJhdG9yOiBvYmosXG4gICAgbmV4dDogb2JqLm5leHQsXG4gICAgZG9uZTogZmFsc2VcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc3JjLCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIGRlZmluZUJ1aWx0SW4odGFyZ2V0LCBrZXksIHNyY1trZXldLCBvcHRpb25zKTtcbiAgcmV0dXJuIHRhcmdldDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gYENyZWF0ZUl0ZXJSZXN1bHRPYmplY3RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1jcmVhdGVpdGVycmVzdWx0b2JqZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgZG9uZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6IGRvbmUgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBraW5kLCB2YWx1ZSkge1xuICB2YXIgaW5uZXJSZXN1bHQsIGlubmVyRXJyb3I7XG4gIGFuT2JqZWN0KGl0ZXJhdG9yKTtcbiAgdHJ5IHtcbiAgICBpbm5lclJlc3VsdCA9IGdldE1ldGhvZChpdGVyYXRvciwgJ3JldHVybicpO1xuICAgIGlmICghaW5uZXJSZXN1bHQpIHtcbiAgICAgIGlmIChraW5kID09PSAndGhyb3cnKSB0aHJvdyB2YWx1ZTtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgaW5uZXJSZXN1bHQgPSBjYWxsKGlubmVyUmVzdWx0LCBpdGVyYXRvcik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaW5uZXJFcnJvciA9IHRydWU7XG4gICAgaW5uZXJSZXN1bHQgPSBlcnJvcjtcbiAgfVxuICBpZiAoa2luZCA9PT0gJ3Rocm93JykgdGhyb3cgdmFsdWU7XG4gIGlmIChpbm5lckVycm9yKSB0aHJvdyBpbm5lclJlc3VsdDtcbiAgYW5PYmplY3QoaW5uZXJSZXN1bHQpO1xuICByZXR1cm4gdmFsdWU7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZScpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBkZWZpbmVCdWlsdElucyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW5zJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzLWNvcmUnKS5JdGVyYXRvclByb3RvdHlwZTtcbnZhciBjcmVhdGVJdGVyUmVzdWx0T2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1pdGVyLXJlc3VsdC1vYmplY3QnKTtcbnZhciBpdGVyYXRvckNsb3NlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlJyk7XG5cbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xudmFyIElURVJBVE9SX0hFTFBFUiA9ICdJdGVyYXRvckhlbHBlcic7XG52YXIgV1JBUF9GT1JfVkFMSURfSVRFUkFUT1IgPSAnV3JhcEZvclZhbGlkSXRlcmF0b3InO1xudmFyIHNldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLnNldDtcblxudmFyIGNyZWF0ZUl0ZXJhdG9yUHJveHlQcm90b3R5cGUgPSBmdW5jdGlvbiAoSVNfSVRFUkFUT1IpIHtcbiAgdmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldHRlckZvcihJU19JVEVSQVRPUiA/IFdSQVBfRk9SX1ZBTElEX0lURVJBVE9SIDogSVRFUkFUT1JfSEVMUEVSKTtcblxuICByZXR1cm4gZGVmaW5lQnVpbHRJbnMoY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKSwge1xuICAgIG5leHQ6IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpO1xuICAgICAgLy8gZm9yIHNpbXBsaWZpY2F0aW9uOlxuICAgICAgLy8gICBmb3IgYCVXcmFwRm9yVmFsaWRJdGVyYXRvclByb3RvdHlwZSUubmV4dGAgb3Igd2l0aCBgc3RhdGUucmV0dXJuSGFuZGxlclJlc3VsdGAgb3VyIGBuZXh0SGFuZGxlcmAgcmV0dXJucyBgSXRlclJlc3VsdE9iamVjdGBcbiAgICAgIC8vICAgZm9yIGAlSXRlcmF0b3JIZWxwZXJQcm90b3R5cGUlLm5leHRgIC0ganVzdCBhIHZhbHVlXG4gICAgICBpZiAoSVNfSVRFUkFUT1IpIHJldHVybiBzdGF0ZS5uZXh0SGFuZGxlcigpO1xuICAgICAgaWYgKHN0YXRlLmRvbmUpIHJldHVybiBjcmVhdGVJdGVyUmVzdWx0T2JqZWN0KHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gc3RhdGUubmV4dEhhbmRsZXIoKTtcbiAgICAgICAgcmV0dXJuIHN0YXRlLnJldHVybkhhbmRsZXJSZXN1bHQgPyByZXN1bHQgOiBjcmVhdGVJdGVyUmVzdWx0T2JqZWN0KHJlc3VsdCwgc3RhdGUuZG9uZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBzdGF0ZS5kb25lID0gdHJ1ZTtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgfSxcbiAgICAncmV0dXJuJzogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKTtcbiAgICAgIHZhciBpdGVyYXRvciA9IHN0YXRlLml0ZXJhdG9yO1xuICAgICAgc3RhdGUuZG9uZSA9IHRydWU7XG4gICAgICBpZiAoSVNfSVRFUkFUT1IpIHtcbiAgICAgICAgdmFyIHJldHVybk1ldGhvZCA9IGdldE1ldGhvZChpdGVyYXRvciwgJ3JldHVybicpO1xuICAgICAgICByZXR1cm4gcmV0dXJuTWV0aG9kID8gY2FsbChyZXR1cm5NZXRob2QsIGl0ZXJhdG9yKSA6IGNyZWF0ZUl0ZXJSZXN1bHRPYmplY3QodW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGlmIChzdGF0ZS5pbm5lcikgdHJ5IHtcbiAgICAgICAgaXRlcmF0b3JDbG9zZShzdGF0ZS5pbm5lci5pdGVyYXRvciwgJ25vcm1hbCcpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsICd0aHJvdycsIGVycm9yKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVyYXRvcikgaXRlcmF0b3JDbG9zZShpdGVyYXRvciwgJ25vcm1hbCcpO1xuICAgICAgcmV0dXJuIGNyZWF0ZUl0ZXJSZXN1bHRPYmplY3QodW5kZWZpbmVkLCB0cnVlKTtcbiAgICB9XG4gIH0pO1xufTtcblxudmFyIFdyYXBGb3JWYWxpZEl0ZXJhdG9yUHJvdG90eXBlID0gY3JlYXRlSXRlcmF0b3JQcm94eVByb3RvdHlwZSh0cnVlKTtcbnZhciBJdGVyYXRvckhlbHBlclByb3RvdHlwZSA9IGNyZWF0ZUl0ZXJhdG9yUHJveHlQcm90b3R5cGUoZmFsc2UpO1xuXG5jcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoSXRlcmF0b3JIZWxwZXJQcm90b3R5cGUsIFRPX1NUUklOR19UQUcsICdJdGVyYXRvciBIZWxwZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmV4dEhhbmRsZXIsIElTX0lURVJBVE9SLCBSRVRVUk5fSEFORExFUl9SRVNVTFQpIHtcbiAgdmFyIEl0ZXJhdG9yUHJveHkgPSBmdW5jdGlvbiBJdGVyYXRvcihyZWNvcmQsIHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlKSB7XG4gICAgICBzdGF0ZS5pdGVyYXRvciA9IHJlY29yZC5pdGVyYXRvcjtcbiAgICAgIHN0YXRlLm5leHQgPSByZWNvcmQubmV4dDtcbiAgICB9IGVsc2Ugc3RhdGUgPSByZWNvcmQ7XG4gICAgc3RhdGUudHlwZSA9IElTX0lURVJBVE9SID8gV1JBUF9GT1JfVkFMSURfSVRFUkFUT1IgOiBJVEVSQVRPUl9IRUxQRVI7XG4gICAgc3RhdGUucmV0dXJuSGFuZGxlclJlc3VsdCA9ICEhUkVUVVJOX0hBTkRMRVJfUkVTVUxUO1xuICAgIHN0YXRlLm5leHRIYW5kbGVyID0gbmV4dEhhbmRsZXI7XG4gICAgc3RhdGUuY291bnRlciA9IDA7XG4gICAgc3RhdGUuZG9uZSA9IGZhbHNlO1xuICAgIHNldEludGVybmFsU3RhdGUodGhpcywgc3RhdGUpO1xuICB9O1xuXG4gIEl0ZXJhdG9yUHJveHkucHJvdG90eXBlID0gSVNfSVRFUkFUT1IgPyBXcmFwRm9yVmFsaWRJdGVyYXRvclByb3RvdHlwZSA6IEl0ZXJhdG9ySGVscGVyUHJvdG90eXBlO1xuXG4gIHJldHVybiBJdGVyYXRvclByb3h5O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgaXRlcmF0b3JDbG9zZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1jbG9zZScpO1xuXG4vLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBFTlRSSUVTKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEVOVFJJRVMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCAndGhyb3cnLCBlcnJvcik7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBnZXRJdGVyYXRvckRpcmVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItZGlyZWN0Jyk7XG52YXIgY3JlYXRlSXRlcmF0b3JQcm94eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1jcmVhdGUtcHJveHknKTtcbnZhciBjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NhbGwtd2l0aC1zYWZlLWl0ZXJhdGlvbi1jbG9zaW5nJyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG5cbnZhciBJdGVyYXRvclByb3h5ID0gY3JlYXRlSXRlcmF0b3JQcm94eShmdW5jdGlvbiAoKSB7XG4gIHZhciBpdGVyYXRvciA9IHRoaXMuaXRlcmF0b3I7XG4gIHZhciBwcmVkaWNhdGUgPSB0aGlzLnByZWRpY2F0ZTtcbiAgdmFyIG5leHQgPSB0aGlzLm5leHQ7XG4gIHZhciByZXN1bHQsIGRvbmUsIHZhbHVlO1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIHJlc3VsdCA9IGFuT2JqZWN0KGNhbGwobmV4dCwgaXRlcmF0b3IpKTtcbiAgICBkb25lID0gdGhpcy5kb25lID0gISFyZXN1bHQuZG9uZTtcbiAgICBpZiAoZG9uZSkgcmV0dXJuO1xuICAgIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgIGlmIChjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nKGl0ZXJhdG9yLCBwcmVkaWNhdGUsIFt2YWx1ZSwgdGhpcy5jb3VudGVyKytdLCB0cnVlKSkgcmV0dXJuIHZhbHVlO1xuICB9XG59KTtcblxuLy8gYEl0ZXJhdG9yLnByb3RvdHlwZS5maWx0ZXJgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pdGVyYXRvci5wcm90b3R5cGUuZmlsdGVyXG4kKHsgdGFyZ2V0OiAnSXRlcmF0b3InLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiBJU19QVVJFIH0sIHtcbiAgZmlsdGVyOiBmdW5jdGlvbiBmaWx0ZXIocHJlZGljYXRlKSB7XG4gICAgYW5PYmplY3QodGhpcyk7XG4gICAgYUNhbGxhYmxlKHByZWRpY2F0ZSk7XG4gICAgcmV0dXJuIG5ldyBJdGVyYXRvclByb3h5KGdldEl0ZXJhdG9yRGlyZWN0KHRoaXMpLCB7XG4gICAgICBwcmVkaWNhdGU6IHByZWRpY2F0ZVxuICAgIH0pO1xuICB9XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2xhc3NvZlJhdyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbikge1xuICAvLyBOYXNob3JuIGJ1ZzpcbiAgLy8gICBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTEyOFxuICAvLyAgIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xMTMwXG4gIGlmIChjbGFzc29mUmF3KGZuKSA9PT0gJ0Z1bmN0aW9uJykgcmV0dXJuIHVuY3VycnlUaGlzKGZuKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy1jbGF1c2UnKTtcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBiaW5kID0gdW5jdXJyeVRoaXModW5jdXJyeVRoaXMuYmluZCk7XG5cbi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQpIHtcbiAgYUNhbGxhYmxlKGZuKTtcbiAgcmV0dXJuIHRoYXQgPT09IHVuZGVmaW5lZCA/IGZuIDogTkFUSVZFX0JJTkQgPyBiaW5kKGZuLCB0aGF0KSA6IGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG90eXBlID0gQXJyYXkucHJvdG90eXBlO1xuXG4vLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvdHlwZVtJVEVSQVRPUl0gPT09IGl0KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciB0ZXN0ID0ge307XG5cbnRlc3RbVE9fU1RSSU5HX1RBR10gPSAneic7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RyaW5nKHRlc3QpID09PSAnW29iamVjdCB6XSc7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIFRPX1NUUklOR19UQUdfU1VQUE9SVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgY2xhc3NvZlJhdyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIENPUlJFQ1RfQVJHVU1FTlRTID0gY2xhc3NvZlJhdyhmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbi8vIGdldHRpbmcgdGFnIGZyb20gRVM2KyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2Bcbm1vZHVsZS5leHBvcnRzID0gVE9fU1RSSU5HX1RBR19TVVBQT1JUID8gY2xhc3NvZlJhdyA6IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgdGFnLCByZXN1bHQ7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mICh0YWcgPSB0cnlHZXQoTyA9ICRPYmplY3QoaXQpLCBUT19TVFJJTkdfVEFHKSkgPT0gJ3N0cmluZycgPyB0YWdcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IENPUlJFQ1RfQVJHVU1FTlRTID8gY2xhc3NvZlJhdyhPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChyZXN1bHQgPSBjbGFzc29mUmF3KE8pKSA9PT0gJ09iamVjdCcgJiYgaXNDYWxsYWJsZShPLmNhbGxlZSkgPyAnQXJndW1lbnRzJyA6IHJlc3VsdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZicpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc051bGxPclVuZGVmaW5lZChpdCkpIHJldHVybiBnZXRNZXRob2QoaXQsIElURVJBVE9SKVxuICAgIHx8IGdldE1ldGhvZChpdCwgJ0BAaXRlcmF0b3InKVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRyeVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RyeS10by1zdHJpbmcnKTtcbnZhciBnZXRJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCwgdXNpbmdJdGVyYXRvcikge1xuICB2YXIgaXRlcmF0b3JNZXRob2QgPSBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGdldEl0ZXJhdG9yTWV0aG9kKGFyZ3VtZW50KSA6IHVzaW5nSXRlcmF0b3I7XG4gIGlmIChhQ2FsbGFibGUoaXRlcmF0b3JNZXRob2QpKSByZXR1cm4gYW5PYmplY3QoY2FsbChpdGVyYXRvck1ldGhvZCwgYXJndW1lbnQpKTtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IodHJ5VG9TdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgaXRlcmFibGUnKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xudmFyIGlzQXJyYXlJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheS1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xudmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZicpO1xudmFyIGdldEl0ZXJhdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvcicpO1xudmFyIGdldEl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBpdGVyYXRvckNsb3NlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG52YXIgUmVzdWx0ID0gZnVuY3Rpb24gKHN0b3BwZWQsIHJlc3VsdCkge1xuICB0aGlzLnN0b3BwZWQgPSBzdG9wcGVkO1xuICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcbn07XG5cbnZhciBSZXN1bHRQcm90b3R5cGUgPSBSZXN1bHQucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgdW5ib3VuZEZ1bmN0aW9uLCBvcHRpb25zKSB7XG4gIHZhciB0aGF0ID0gb3B0aW9ucyAmJiBvcHRpb25zLnRoYXQ7XG4gIHZhciBBU19FTlRSSUVTID0gISEob3B0aW9ucyAmJiBvcHRpb25zLkFTX0VOVFJJRVMpO1xuICB2YXIgSVNfUkVDT1JEID0gISEob3B0aW9ucyAmJiBvcHRpb25zLklTX1JFQ09SRCk7XG4gIHZhciBJU19JVEVSQVRPUiA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5JU19JVEVSQVRPUik7XG4gIHZhciBJTlRFUlJVUFRFRCA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5JTlRFUlJVUFRFRCk7XG4gIHZhciBmbiA9IGJpbmQodW5ib3VuZEZ1bmN0aW9uLCB0aGF0KTtcbiAgdmFyIGl0ZXJhdG9yLCBpdGVyRm4sIGluZGV4LCBsZW5ndGgsIHJlc3VsdCwgbmV4dCwgc3RlcDtcblxuICB2YXIgc3RvcCA9IGZ1bmN0aW9uIChjb25kaXRpb24pIHtcbiAgICBpZiAoaXRlcmF0b3IpIGl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsICdub3JtYWwnLCBjb25kaXRpb24pO1xuICAgIHJldHVybiBuZXcgUmVzdWx0KHRydWUsIGNvbmRpdGlvbik7XG4gIH07XG5cbiAgdmFyIGNhbGxGbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmIChBU19FTlRSSUVTKSB7XG4gICAgICBhbk9iamVjdCh2YWx1ZSk7XG4gICAgICByZXR1cm4gSU5URVJSVVBURUQgPyBmbih2YWx1ZVswXSwgdmFsdWVbMV0sIHN0b3ApIDogZm4odmFsdWVbMF0sIHZhbHVlWzFdKTtcbiAgICB9IHJldHVybiBJTlRFUlJVUFRFRCA/IGZuKHZhbHVlLCBzdG9wKSA6IGZuKHZhbHVlKTtcbiAgfTtcblxuICBpZiAoSVNfUkVDT1JEKSB7XG4gICAgaXRlcmF0b3IgPSBpdGVyYWJsZS5pdGVyYXRvcjtcbiAgfSBlbHNlIGlmIChJU19JVEVSQVRPUikge1xuICAgIGl0ZXJhdG9yID0gaXRlcmFibGU7XG4gIH0gZWxzZSB7XG4gICAgaXRlckZuID0gZ2V0SXRlcmF0b3JNZXRob2QoaXRlcmFibGUpO1xuICAgIGlmICghaXRlckZuKSB0aHJvdyBuZXcgJFR5cGVFcnJvcih0cnlUb1N0cmluZyhpdGVyYWJsZSkgKyAnIGlzIG5vdCBpdGVyYWJsZScpO1xuICAgIC8vIG9wdGltaXNhdGlvbiBmb3IgYXJyYXkgaXRlcmF0b3JzXG4gICAgaWYgKGlzQXJyYXlJdGVyYXRvck1ldGhvZChpdGVyRm4pKSB7XG4gICAgICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoaXRlcmFibGUpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgICByZXN1bHQgPSBjYWxsRm4oaXRlcmFibGVbaW5kZXhdKTtcbiAgICAgICAgaWYgKHJlc3VsdCAmJiBpc1Byb3RvdHlwZU9mKFJlc3VsdFByb3RvdHlwZSwgcmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0gcmV0dXJuIG5ldyBSZXN1bHQoZmFsc2UpO1xuICAgIH1cbiAgICBpdGVyYXRvciA9IGdldEl0ZXJhdG9yKGl0ZXJhYmxlLCBpdGVyRm4pO1xuICB9XG5cbiAgbmV4dCA9IElTX1JFQ09SRCA/IGl0ZXJhYmxlLm5leHQgOiBpdGVyYXRvci5uZXh0O1xuICB3aGlsZSAoIShzdGVwID0gY2FsbChuZXh0LCBpdGVyYXRvcikpLmRvbmUpIHtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gY2FsbEZuKHN0ZXAudmFsdWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCAndGhyb3cnLCBlcnJvcik7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgcmVzdWx0ID09ICdvYmplY3QnICYmIHJlc3VsdCAmJiBpc1Byb3RvdHlwZU9mKFJlc3VsdFByb3RvdHlwZSwgcmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgfSByZXR1cm4gbmV3IFJlc3VsdChmYWxzZSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGl0ZXJhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0ZScpO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZ2V0SXRlcmF0b3JEaXJlY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLWRpcmVjdCcpO1xuXG4vLyBgSXRlcmF0b3IucHJvdG90eXBlLmZpbmRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pdGVyYXRvci5wcm90b3R5cGUuZmluZFxuJCh7IHRhcmdldDogJ0l0ZXJhdG9yJywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUgfSwge1xuICBmaW5kOiBmdW5jdGlvbiBmaW5kKHByZWRpY2F0ZSkge1xuICAgIGFuT2JqZWN0KHRoaXMpO1xuICAgIGFDYWxsYWJsZShwcmVkaWNhdGUpO1xuICAgIHZhciByZWNvcmQgPSBnZXRJdGVyYXRvckRpcmVjdCh0aGlzKTtcbiAgICB2YXIgY291bnRlciA9IDA7XG4gICAgcmV0dXJuIGl0ZXJhdGUocmVjb3JkLCBmdW5jdGlvbiAodmFsdWUsIHN0b3ApIHtcbiAgICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGNvdW50ZXIrKykpIHJldHVybiBzdG9wKHZhbHVlKTtcbiAgICB9LCB7IElTX1JFQ09SRDogdHJ1ZSwgSU5URVJSVVBURUQ6IHRydWUgfSkucmVzdWx0O1xuICB9XG59KTtcbiIsICJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL0hvdENhdC9tb2R1bGVzL2NoZWNrLm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3QgY2F0Y2hlY2tJbmxpbmVJY29uID0gXCJjaGVjay1tb2R1bGVfX2NhdGNoZWNrSW5saW5lSWNvbl9tSjVORHFfXzQ5MVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwiY2F0Y2hlY2tJbmxpbmVJY29uXCI6IGNhdGNoZWNrSW5saW5lSWNvblxufTtcbiAgICAgICIsICJpbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuLy8gSW5pdGlhbGl6ZSBNZWRpYVdpa2kgQVBJXG5jb25zdCBtd0FwaTogKHVzZXJBZ2VudD86IHN0cmluZykgPT4gbXcuQXBpID0gKHVzZXJBZ2VudCkgPT4ge1xuXHRyZXR1cm4gaW5pdE13QXBpKHVzZXJBZ2VudCk7XG59O1xuXG5leHBvcnQge213QXBpfTtcbiIsICJpbXBvcnQge2NhdGNoZWNrSW5saW5lSWNvbn0gZnJvbSAnLi9jaGVjay5tb2R1bGUubGVzcyc7XG5pbXBvcnQge213QXBpfSBmcm9tICcuL2FwaSc7XG5cbi8qKlxuICogQ2hlY2tDYXRlZ29yaWVzIEhvdENhdCBFeHRlbnNpb24g4oCTXG4gKiByZW1vdmVzIHRoZSB0ZW1wbGF0ZSB3aGVuIGNhdGVnb3JpemluZyAocHJvbXB0cyBiZWZvcmUpIHdpdGggSG90Q2F0IGFuZFxuICogYWRkcyBhIGxpbmsgXCJDYXRlZ29yaWVzIGFyZSBPS1wiIHRvIHRoZSBjYXRlZ29yeS1zZWN0aW9uXG4gKlxuICogQHJldiAyICgyMDE0LTAzLTIwKVxuICogQGF1dGhvciBSaWxsa2UsIDIwMTJcbiAqL1xuKGZ1bmN0aW9uIGhvdENhdENoZWNrKCkge1xuXHRpZiAoXG5cdFx0bXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKSAhPT0gNiB8fFxuXHRcdHdpbmRvdy5Ib3RDYXRBdXRvUmVtb3ZlQ2hlY2tDYXRPcHRPdXQgfHxcblx0XHQhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrY2F0ZWdvcmllcycpXG5cdCkge1xuXHRcdHJldHVybjtcblx0fVxuXHRjb25zdCBhcGkgPSBtd0FwaSgnaG90Q2F0Q2hlY2svMi4wJyk7XG5cdGNvbnN0IGNoZWNrQ2F0ZWdvcmllc1JlZ0V4cCA9IC97e1tDY11oZWNrWyBfXWNhdGVnb3JpZXNbXnt9XSp9fS9nO1xuXHRjb25zdCBzZWxmTmFtZSA9ICcoW1tNZWRpYVdpa2k6R2FkZ2V0LUhvdENhdC1jaGVjay5qc3xTY3JpcHRdXSk6ICc7XG5cdGNvbnN0IHN0b3JhZ2VJdGVtTmFtZSA9ICdjaGVja0NhdCc7XG5cdGNvbnN0IHN0b3JhZ2VJdGVtID0gbXcuc3RvcmFnZS5nZXQoc3RvcmFnZUl0ZW1OYW1lKTtcblx0LyoqXG5cdCAqIEEgZmV3IHN0eWxpbmcgaGVscGVyIGZ1bmN0aW9uc1xuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gaWNvbkNsYXNzXG5cdCAqIEByZXR1cm4ge0pRdWVyeX1cblx0ICovXG5cdGNvbnN0IGNyZWF0ZWpJY29uID0gKGljb25DbGFzczogc3RyaW5nKTogSlF1ZXJ5ID0+IHtcblx0XHRyZXR1cm4gJCgnPHNwYW4+JykuYXR0cignY2xhc3MnLCBgdWktaWNvbiAke2ljb25DbGFzc30gJHtjYXRjaGVja0lubGluZUljb259YCkudGV4dCgnICcpO1xuXHR9O1xuXHRjb25zdCBjcmVhdGVOb3RpZnlBcmVhID0gKHRleHROb2RlOiBKUXVlcnk8SlF1ZXJ5Lk5vZGU+LCBpY29uOiBzdHJpbmcsIHN0YXRlOiBzdHJpbmcpOiBKUXVlcnk8SFRNTEVsZW1lbnQ+ID0+IHtcblx0XHRyZXR1cm4gJCgnPGRpdj4nKVxuXHRcdFx0LmFkZENsYXNzKCd1aS13aWRnZXQnKVxuXHRcdFx0LmFwcGVuZChcblx0XHRcdFx0JCgnPGRpdj4nKVxuXHRcdFx0XHRcdC5hdHRyKCdjbGFzcycsIGAke3N0YXRlfSB1aS1jb3JuZXItYWxsYClcblx0XHRcdFx0XHQuY3NzKHtcblx0XHRcdFx0XHRcdCdtYXJnaW4tdG9wJzogJzIwcHgnLFxuXHRcdFx0XHRcdFx0cGFkZGluZzogJzAuN2VtJyxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5hcHBlbmQoJCgnPHA+JykuYXBwZW5kKGNyZWF0ZWpJY29uKGljb24pLmNzcygnbWFyZ2luUmlnaHQnLCAnMC4zZW0nKSwgdGV4dE5vZGUpKVxuXHRcdFx0KTtcblx0fTtcblx0Ly8gUmVtb3ZlIFwiY2hlY2sgY2F0ZWdvcmllc1wiIHdoZW4gdXNpbmcgSG90Q2F0XG5cdC8vIE9ubHkgZXhlY3V0ZWQgb24gZmlyc3Qgc3VibWl0XG5cdCQoJ2JvZHknKS5vbmUoJ3N1Ym1pdC5jaGVja0NhdExpc3RlbmVyJywgJyNob3RjYXRDb21taXRGb3JtJywgZnVuY3Rpb24gKGUpIHtcblx0XHRpZiAoc3RvcmFnZUl0ZW0gPT09ICdkaXNhYmxlZCcpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cblx0XHRjb25zdCBuZXdWYWwgPSAoc2VsZi53cFRleHRib3gxIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQpLnZhbHVlPy5yZXBsYWNlKGNoZWNrQ2F0ZWdvcmllc1JlZ0V4cCwgJycpO1xuXHRcdGNvbnN0IGRsZ0J1dHRvbnM6IHtcblx0XHRcdCdZZXMsIFJlbW92ZSc/OiAoKSA9PiB2b2lkO1xuXHRcdFx0J05vLCBrZWVwIGl0Jz86ICgpID0+IHZvaWQ7XG5cdFx0fSA9IHt9O1xuXHRcdGxldCAkZGlhbG9nQ2hlY2tTdG9yYWdlOiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xuXHRcdGxldCAkcGVybWFTYXZlSGludDogSlF1ZXJ5PEhUTUxFbGVtZW50Pjtcblx0XHRsZXQgJHRleHRIaW50Tm9kZTtcblx0XHRsZXQgJGRpYWxvZztcblx0XHRjb25zdCBkb1JlbW92ZSA9ICgpID0+IHtcblx0XHRcdChzZWxmLndwU3VtbWFyeSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9XG5cdFx0XHRcdGBSZW1vdmluZyBbW1RlbXBsYXRlOkNoZWNrIGNhdGVnb3JpZXN8e3tDaGVjayBjYXRlZ29yaWVzfX1dXSAkeyhzZWxmLndwU3VtbWFyeSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZX1gO1xuXG5cdFx0XHQoc2VsZi53cFRleHRib3gxIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQpLnZhbHVlID0gbmV3VmFsO1xuXHRcdH07XG5cdFx0Y29uc3Qgd3JpdGVTdG9yYWdlID0gKHZhbDogc3RyaW5nKSA9PiB7XG5cdFx0XHRtdy5zdG9yYWdlLnNldChzdG9yYWdlSXRlbU5hbWUsIHZhbCwgNjAgKiA2MCAqIDI0ICogNyk7IC8vIDcgZGF5c1xuXHRcdH07XG5cdFx0ZGxnQnV0dG9uc1snWWVzLCBSZW1vdmUnXSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGRvUmVtb3ZlKCk7XG5cdFx0XHRpZiAoKCRkaWFsb2dDaGVja1N0b3JhZ2VbMF0gYXMgSFRNTElucHV0RWxlbWVudCk/LmNoZWNrZWQpIHtcblx0XHRcdFx0d3JpdGVTdG9yYWdlKCdhdXRvJyk7XG5cdFx0XHR9XG5cdFx0XHQkKHRoaXMpLmRpYWxvZygnY2xvc2UnKTtcblx0XHR9O1xuXHRcdGRsZ0J1dHRvbnNbJ05vLCBrZWVwIGl0J10gPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoKCRkaWFsb2dDaGVja1N0b3JhZ2VbMF0gYXMgSFRNTElucHV0RWxlbWVudCk/LmNoZWNrZWQpIHtcblx0XHRcdFx0d3JpdGVTdG9yYWdlKCdkaXNhYmxlZCcpO1xuXHRcdFx0fVxuXHRcdFx0JCh0aGlzKS5kaWFsb2coJ2Nsb3NlJyk7XG5cdFx0fTtcblx0XHRjb25zdCBfYWRkVG9KUyA9IGZ1bmN0aW9uICh0aGlzOiBIVE1MRWxlbWVudCwgX2U6IEpRdWVyeS5FdmVudCkge1xuXHRcdFx0X2UucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGlmICgkcGVybWFTYXZlSGludC5oYXNDbGFzcygndWktc3RhdGUtZGlzYWJsZWQnKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCAkZWw6IEpRdWVyeTxIVE1MRWxlbWVudD4gPSAkKHRoaXMpO1xuXHRcdFx0JGVsLm9mZignY2xpY2snKS50ZXh0KCdQbGVhc2Ugd2FpdC4nKTtcblx0XHRcdCRwZXJtYVNhdmVIaW50LmFkZENsYXNzKCd1aS1zdGF0ZS1kaXNhYmxlZCcpO1xuXHRcdFx0Y29uc3QgcGFyYW1zOiBBcGlFZGl0UGFnZVBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHR0aXRsZTogYFVzZXI6JHttdy5jb25maWcuZ2V0KCd3Z1VzZXJOYW1lJyl9L2NvbW1vbi5qc2AsXG5cdFx0XHRcdHN1bW1hcnk6IGAke3NlbGZOYW1lfVNhdmluZyBIb3RDYXQgY29uZmlndXJhdGlvbi5gLFxuXHRcdFx0XHRhcHBlbmR0ZXh0OiAkZWwuZGF0YSgnYWRkVGV4dCcpIGFzIHN0cmluZyxcblx0XHRcdH07XG5cdFx0XHRjb25zdCBlZGl0RG9uZSA9IChlZGl0U3RhdD86IHtlcnJvcj86IHtjb2RlPzogc3RyaW5nOyBpbmZvPzogc3RyaW5nfX0pID0+IHtcblx0XHRcdFx0aWYgKCFlZGl0U3RhdCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZWRpdFN0YXQuZXJyb3IpIHtcblx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeShcblx0XHRcdFx0XHRcdGBVbmFibGUgdG8gc2F2ZSB0byB5b3VyIGNvbW1vbi5qcyB1c2luZyB0aGUgQVBJXFxuJHtlZGl0U3RhdC5lcnJvci5jb2RlfVxcbiR7ZWRpdFN0YXQuZXJyb3IuaW5mb31gLFxuXHRcdFx0XHRcdFx0e3RhZzogJ2hvdENhdENoZWNrJywgdHlwZTogJ2Vycm9yJ31cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdCRlbC50ZXh0KCdFZGl0LUVycm9yIScpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRlbC50ZXh0KCdEb25lLicpO1xuXHRcdFx0XHRcdCRwZXJtYVNhdmVIaW50LmZhZGVPdXQoKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdHZvaWQgYXBpLnBvc3RXaXRoVG9rZW4oJ2NzcmYnLCBwYXJhbXMpLnRoZW4oZWRpdERvbmUpO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogT24gV2lraW1lZGlhIENvbW1vbnMgdGhlcmUgd2VyZSBwZW9wbGUgd2hvIHNhaWQ6XG5cdFx0ICogXCJDYXRlZ29yaXppbmcgd2l0aCBIb3RDYXQgZG9lcyBsZWdpdCBhdXRvbWF0ZWQgcmVtb3ZhbCBvZiB0aGUgY2hlY2stY2F0LW1lc3NhZ2VcIlxuXHRcdCAqIFNvIHdlIGludmVudGVkIGEgZGlhbG9nIHRoYXQgc2hvdWxkIGJlIHJlYWRhYmxlIGJ5IHVzZXJzIGV2ZW4gd2l0aCB2ZXJ5IGZldyBFbmdsaXNoIHNraWxscy5cblx0XHQgKi9cblx0XHRjb25zdCBwcm9tcHQgPSAoKSA9PiB7XG5cdFx0XHQkZGlhbG9nQ2hlY2tTdG9yYWdlID0gJCgnPGlucHV0PicpXG5cdFx0XHRcdC5hdHRyKHtcblx0XHRcdFx0XHR0eXBlOiAnY2hlY2tib3gnLFxuXHRcdFx0XHRcdGlkOiAnaG90Q2F0QXV0b1JlbW92ZUNoZWNrQ2F0U3RvcmFnZScsXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdGlmICgodGhpcyBhcyBIVE1MSW5wdXRFbGVtZW50KS5jaGVja2VkKSB7XG5cdFx0XHRcdFx0XHQkcGVybWFTYXZlSGludC5mYWRlSW4oKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0JHBlcm1hU2F2ZUhpbnQuZmFkZU91dCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHQkdGV4dEhpbnROb2RlID0gJCgnPHVsPicpO1xuXHRcdFx0JCgnPGxpPicpXG5cdFx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdFx0JCgnPGE+Jylcblx0XHRcdFx0XHRcdC5hdHRyKCdocmVmJywgJyMnKVxuXHRcdFx0XHRcdFx0LnRleHQoJ0Rpc2FibGUgdGhpcyBmZWF0dXJlLicpXG5cdFx0XHRcdFx0XHQuZGF0YSgnYWRkVGV4dCcsICdcXG53aW5kb3cuSG90Q2F0QXV0b1JlbW92ZUNoZWNrQ2F0T3B0T3V0ID0gdHJ1ZTsnKVxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIF9hZGRUb0pTKVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5hcHBlbmRUbygkdGV4dEhpbnROb2RlKTtcblx0XHRcdCQoJzxsaT4nKVxuXHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdCQoJzxhPicpXG5cdFx0XHRcdFx0XHQuYXR0cignaHJlZicsICcjJylcblx0XHRcdFx0XHRcdC50ZXh0KCdSZW1vdmUge3tjaGVjayBjYXRlZ29yaWVzfX0gd2hlbiBlZGl0aW5nIHVzaW5nIEhvdENhdCB3aXRob3V0IHByb21wdGluZy4nKVxuXHRcdFx0XHRcdFx0LmRhdGEoJ2FkZFRleHQnLCAnXFxud2luZG93LkhvdENhdEF1dG9SZW1vdmVDaGVja0NhdCA9IHRydWU7Jylcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBfYWRkVG9KUylcblx0XHRcdFx0KVxuXHRcdFx0XHQuYXBwZW5kVG8oJHRleHRIaW50Tm9kZSk7XG5cdFx0XHQkcGVybWFTYXZlSGludCA9IGNyZWF0ZU5vdGlmeUFyZWEoXG5cdFx0XHRcdCQoJzxzcGFuPicpLnRleHQoJ1NhdmUgdGhlc2Ugc2V0dGluZyBpbiB5b3VyIGNvbW1vbi5qczogJykuYXBwZW5kKCR0ZXh0SGludE5vZGUpLFxuXHRcdFx0XHQndWktaWNvbi1pbmZvJyxcblx0XHRcdFx0J3VpLXN0YXRlLWhpZ2hsaWdodCdcblx0XHRcdCk7XG5cdFx0XHQkZGlhbG9nID0gJCgnPGRpdj4nKVxuXHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdCQoJzxzcGFuPicpXG5cdFx0XHRcdFx0XHQuY3NzKHtcblx0XHRcdFx0XHRcdFx0J2ZvbnQtc2l6ZSc6ICcyZW0nLFxuXHRcdFx0XHRcdFx0XHQnbGluZS1oZWlnaHQnOiAnMS44ZW0nLFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdFx0XHRcdCQoJzxzcGFuPicpLnRleHQoJyB7e2NoZWNrIGNhdGVnb3JpZXN9fSAnKS5jc3Moe1xuXHRcdFx0XHRcdFx0XHRcdCdiYWNrZ3JvdW5kLWNvbG9yJzogJyNGOENDQjAnLFxuXHRcdFx0XHRcdFx0XHRcdCd0ZXh0LWRlY29yYXRpb24nOiAnbGluZS10aHJvdWdoICFpbXBvcnRhbnQnLFxuXHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuXHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdFx0JCgnPHNwYW4+JykudGV4dCgnID8nKVxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdFx0Jzxicj4nLFxuXHRcdFx0XHRcdCRkaWFsb2dDaGVja1N0b3JhZ2UsXG5cdFx0XHRcdFx0JCgnPGxhYmVsPicpLmF0dHIoJ2ZvcicsICdob3RDYXRBdXRvUmVtb3ZlQ2hlY2tDYXRTdG9yYWdlJykudGV4dChcIkRvbid0IGFzayBhZ2FpblwiKSxcblx0XHRcdFx0XHQnPGJyPidcblx0XHRcdFx0KVxuXHRcdFx0XHQuYXBwZW5kKG13LnVzZXIuaXNBbm9uKCkgPyAnJyA6ICRwZXJtYVNhdmVIaW50LmhpZGUoKSk7XG5cdFx0XHQkZGlhbG9nLmRpYWxvZyh7XG5cdFx0XHRcdG1vZGFsOiB0cnVlLFxuXHRcdFx0XHRjbG9zZU9uRXNjYXBlOiB0cnVlLFxuXHRcdFx0XHR0aXRsZTogJ3t7Y2hlY2sgY2F0ZWdvcmllc319ICjiiJIpPycsXG5cdFx0XHRcdHdpZHRoOiA0NTAsXG5cdFx0XHRcdGJ1dHRvbnM6IGRsZ0J1dHRvbnMsXG5cdFx0XHRcdGNsb3NlOiAoKSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0XHRcdFx0JGJvZHkuZmluZCgnI2hvdGNhdENvbW1pdEZvcm0nKS50cmlnZ2VyKCdzdWJtaXQnKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0b3BlbigpIHtcblx0XHRcdFx0XHRjb25zdCAkYnV0dG9ucyA9ICQodGhpcykucGFyZW50KCkuZmluZCgnLnVpLWRpYWxvZy1idXR0b25wYW5lIGJ1dHRvbicpO1xuXHRcdFx0XHRcdCRidXR0b25zLmVxKDApLmJ1dHRvbih7XG5cdFx0XHRcdFx0XHRpY29uczoge1xuXHRcdFx0XHRcdFx0XHRwcmltYXJ5OiAndWktaWNvbi1jaXJjbGUtY2hlY2snLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHQkYnV0dG9ucy5lcSgxKS5idXR0b24oe1xuXHRcdFx0XHRcdFx0aWNvbnM6IHtcblx0XHRcdFx0XHRcdFx0cHJpbWFyeTogJ3VpLWljb24tY2FuY2VsJyxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0sXG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0aWYgKG5ld1ZhbCAhPT0gKHNlbGYud3BUZXh0Ym94MSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50KS52YWx1ZSkge1xuXHRcdFx0aWYgKHdpbmRvdy5Ib3RDYXRBdXRvUmVtb3ZlQ2hlY2tDYXQgfHwgc3RvcmFnZUl0ZW0gPT09ICdhdXRvJykge1xuXHRcdFx0XHRkb1JlbW92ZSgpO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHByb21wdCgpO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSk7XG5cdC8vIEFkZCBPSy1MaW5rIHRvIHRoZSBjYXRzIHBhbmVsXG5cdGNvbnN0ICRva0xpbmsgPSAkKCc8YT4nKVxuXHRcdC5hdHRyKHtcblx0XHRcdGhyZWY6ICcjJyxcblx0XHRcdHRpdGxlOiAnQ2F0ZWdvcmllcyBhcmUgT0shIEltbWVkaWF0ZWx5IHJlbW92ZSB0aGUgdGVtcGxhdGUuJyxcblx0XHR9KVxuXHRcdC5hcHBlbmQoJzxzPicpXG5cdFx0LnRleHQoJ3t7Q2hlY2sgY2F0ZWdvcmllc319Jyk7XG5cdCRva0xpbmsub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Y29uc3QgJGVsID0gJCh0aGlzKTtcblx0XHQkZWwub2ZmKCdjbGljaycpO1xuXHRcdGNvbnN0IGRvRWRpdCA9IChyZXN1bHQ6IHN0cmluZykgPT4ge1xuXHRcdFx0aWYgKCFyZXN1bHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0JGVsLnRleHQoJ0RvaW5nLicpO1xuXHRcdFx0Y29uc3QgdGV4dCA9IHJlc3VsdC5yZXBsYWNlKGNoZWNrQ2F0ZWdvcmllc1JlZ0V4cCwgJycpO1xuXHRcdFx0aWYgKHRleHQgPT09IHJlc3VsdCkge1xuXHRcdFx0XHQkZWwudGV4dCgnVGVtcGxhdGUgbm90IGZvdW5kIScpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBwYXJhbXM6IEFwaUVkaXRQYWdlUGFyYW1zID0ge1xuXHRcdFx0XHR0ZXh0LFxuXHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdHRpdGxlOiBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyksXG5cdFx0XHRcdHN1bW1hcnk6IGAke3NlbGZOYW1lfUNhdGVnb3JpZXMgYXJlIGNoZWNrZWQgYW5kIE9LLiBZb3UgY2FuIGhlbHAgW1tDYXRlZ29yeTpNZWRpYSBuZWVkaW5nIGNhdGVnb3J5IHJldmlld3xyZXZpZXdpbmddXSFgLFxuXHRcdFx0XHRub2NyZWF0ZTogdHJ1ZSxcblx0XHRcdH07XG5cdFx0XHRjb25zdCBlZGl0RG9uZSA9IChlZGl0U3RhdD86IHtlcnJvcj86IHtjb2RlPzogc3RyaW5nOyBpbmZvPzogc3RyaW5nfX0pID0+IHtcblx0XHRcdFx0aWYgKCFlZGl0U3RhdCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZWRpdFN0YXQuZXJyb3IpIHtcblx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeShcblx0XHRcdFx0XHRcdGBVbmFibGUgdG8gcmVtb3ZlIFwiQ2hlY2sgY2F0ZWdvcmllc1wiIHdpdGggdGhlIEFQSVxcbiR7ZWRpdFN0YXQuZXJyb3IuY29kZX1cXG4ke2VkaXRTdGF0LmVycm9yLmluZm99YCxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGFnOiAnaG90Q2F0Q2hlY2snLFxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0JGVsLnRleHQoJ0VkaXQtRXJyb3IhJyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JGVsLnRleHQoJ0VkaXQgRG9uZS4nKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0XHRcdFx0JGJvZHkuZmluZCgnLmNoZWNrY2F0ZWdvcmllcycpLmZhZGVPdXQoKTtcblx0XHRcdH07XG5cdFx0XHQkZWwudGV4dCgnRG9pbmcuLicpO1xuXHRcdFx0dm9pZCBhcGkucG9zdFdpdGhUb2tlbignY3NyZicsIHBhcmFtcykudGhlbihlZGl0RG9uZSk7XG5cdFx0fTtcblx0XHQkZWwudGV4dCgnRG9pbmcnKTtcblx0XHR2b2lkICQuYWpheCh7XG5cdFx0XHR1cmw6IG13LmNvbmZpZy5nZXQoJ3dnU2NyaXB0JyksXG5cdFx0XHRkYXRhOiB7XG5cdFx0XHRcdGFjdGlvbjogJ3JhdycsXG5cdFx0XHRcdHRpdGxlOiBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJykucmVwbGFjZSgvIC9nLCAnXycpLFxuXHRcdFx0fSxcblx0XHRcdGRhdGFUeXBlOiAndGV4dCcsXG5cdFx0XHRlcnJvcjogKCkgPT4ge1xuXHRcdFx0XHQkZWwudGV4dCgnRXJyb3IhJyk7XG5cdFx0XHR9LFxuXHRcdFx0c3VjY2VzczogZG9FZGl0LFxuXHRcdFx0dHlwZTogJ0dFVCcsXG5cdFx0XHRjYWNoZTogZmFsc2UsXG5cdFx0fSk7XG5cdH0pO1xuXHQkKGZ1bmN0aW9uIGxvYWRIb3RDYXRDaGVjaygpIHtcblx0XHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0XHQkYm9keS5maW5kKCcjY2F0bGlua3MnKS5maW5kKCd1bDpmaXJzdCcpLmFwcGVuZCgkKCc8bGk+JykuYXBwZW5kKCRva0xpbmspKTtcblx0fSk7XG59KSgpO1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgJy4vbW9kdWxlcy9jaGVjayc7XG5pbXBvcnQge2dlbmVyYXRlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vbW9kdWxlcy9nZXRNZXNzYWdlJztcbmltcG9ydCB7aG90Q2F0TWVzc2FnZXN9IGZyb20gJy4vbW9kdWxlcy9tZXNzYWdlcyc7XG5pbXBvcnQge213QXBpfSBmcm9tICcuL21vZHVsZXMvYXBpJztcbmltcG9ydCBwbm8gZnJvbSAnLi9pbWFnZXMvUF9uby5wbmcnO1xuaW1wb3J0IHB5ZXMgZnJvbSAnLi9pbWFnZXMvUF95ZXMucG5nJztcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gQWpheC1iYXNlZCBzaW1wbGUgQ2F0ZWdvcnkgbWFuYWdlci4gQWxsb3dzIGFkZGluZy9yZW1vdmluZy9jaGFuZ2luZyBjYXRlZ29yaWVzIG9uIGEgcGFnZSB2aWV3LlxuICogU3VwcG9ydHMgbXVsdGlwbGUgY2F0ZWdvcnkgY2hhbmdlcywgYXMgd2VsbCBhcyByZWRpcmVjdCBhbmQgZGlzYW1iaWd1YXRpb24gcmVzb2x1dGlvbi4gQWxzb1xuICogcGx1Z3MgaW50byB0aGUgdXBsb2FkIGZvcm0uIFNlYXJjaCBlbmdpbmVzIHRvIHVzZSBmb3IgdGhlIHN1Z2dlc3Rpb24gbGlzdCBhcmUgY29uZmlndXJhYmxlLCBhbmRcbiAqIGNhbiBiZSBzZWxlY3RlZCBpbnRlcmFjdGl2ZWx5LlxuICpcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vY29tbW9ucy53aWtpbWVkaWEub3JnL3dpa2kvSGVscDpHYWRnZXQtSG90Q2F0fVxuICogQGF1dGhvciBhdXRob3JzIDxodHRwczovL2NvbW1vbnMud2lraW1lZGlhLm9yZy93aWtpL0hlbHA6R2FkZ2V0LUhvdENhdC9WZXJzaW9uX2hpc3Rvcnk+XG4gKi9cbi8vIExvYWQgdHJhbnNsYXRpb25zIGxvY2FsbHlcbmhvdENhdE1lc3NhZ2VzKCk7XG5cbi8vIE1haW4gYm9keVxuKGZ1bmN0aW9uIGhvdENhdCgpIHtcblx0Ly8gRG9uJ3QgdXNlIG13LmNvbmZpZy5nZXQoKSBhcyB0aGF0IHRha2VzIGEgY29weSBvZiB0aGUgY29uZmlnLCBhbmQgc28gZG9lc24ndFxuXHQvLyBhY2NvdW50IGZvciB2YWx1ZXMgY2hhbmdpbmcsIGUuZy4gd2dDdXJSZXZpc2lvbklkIGFmdGVyIGEgVkUgZWRpdFxuXHRjb25zdCBjb25mID0gbXcuY29uZmlnLnZhbHVlcztcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAoKHdpbmRvdy5Ib3RDYXQgJiYgIXdpbmRvdy5Ib3RDYXQubm9kZU5hbWUpIHx8IGNvbmYud2dBY3Rpb24gPT09ICdlZGl0Jykge1xuXHRcdHJldHVybjsgLy8gTm90IG9uIGVkaXQgbW9kZVxuXHR9XG5cdC8vIEluaXRpYWxpemUgTWVkaWFXaWtpIEFQSVxuXHRjb25zdCBhcGkgPSBtd0FwaSgnSG90Q2F0LzMuMCcpO1xuXHQvLyBDb25maWd1cmF0aW9uIHN0dWZmLlxuXHR3aW5kb3cuSG90Q2F0ID0ge1xuXHRcdC8vIFRoZSBsaXR0bGUgbW9kaWZpY2F0aW9uIGxpbmtzIGRpc3BsYXllZCBhZnRlciBjYXRlZ29yeSBuYW1lcy4gVSsyMjEyIGlzIGEgbWludXMgc2lnbjsgVSsyMTkzIGFuZCBVKzIxOTEgYXJlXG5cdFx0Ly8gZG93bndhcmQgYW5kIHVwd2FyZCBwb2ludGluZyBhcnJvd3MuIERvIG5vdCB1c2Ug4oaTIGFuZCDihpEgaW4gdGhlIGNvZGUhXG5cdFx0bGlua3M6IHtcblx0XHRcdGNoYW5nZTogJyjCsSknLFxuXHRcdFx0cmVtb3ZlOiAnKFxcdTIyMTIpJyxcblx0XHRcdGFkZDogJygrKScsXG5cdFx0XHRyZXN0b3JlOiAnKMOXKScsXG5cdFx0XHR1bmRvOiAnKMOXKScsXG5cdFx0XHRkb3duOiAnKFxcdTIxOTMpJyxcblx0XHRcdHVwOiAnKFxcdTIxOTEpJyxcblx0XHR9LFxuXHRcdGNoYW5nZVRhZzogJ0hvdENhdCcsXG5cdFx0Ly8gVGhlIEhUTUwgY29udGVudCBvZiB0aGUgXCJlbnRlciBtdWx0aS1tb2RlXCIgbGluayBhdCB0aGUgZnJvbnQuXG5cdFx0YWRkbXVsdGk6ICc8c3Bhbj4rPHN1cD4rPC9zdXA+PC9zcGFuPicsXG5cdFx0Ly8gUmV0dXJuIHRydWUgdG8gZGlzYWJsZSBIb3RDYXQuXG5cdFx0ZGlzYWJsZTogKCkgPT4ge1xuXHRcdFx0Y29uc3QgbnMgPSBjb25mLndnTmFtZXNwYWNlTnVtYmVyO1xuXHRcdFx0Y29uc3QgbnNJZHMgPSBjb25mLndnTmFtZXNwYWNlSWRzO1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0bnMgPCAwIHx8XG5cdFx0XHRcdC8vIFNwZWNpYWwgcGFnZXM7IFNwZWNpYWw6VXBsb2FkIGlzIGhhbmRsZWQgZGlmZmVyZW50bHlcblx0XHRcdFx0bnMgPT09IDEwIHx8XG5cdFx0XHRcdC8vIFRlbXBsYXRlc1xuXHRcdFx0XHRucyA9PT0gODI4IHx8XG5cdFx0XHRcdC8vIE1vZHVsZSAoTHVhKVxuXHRcdFx0XHRucyA9PT0gOCB8fFxuXHRcdFx0XHQvLyBNZWRpYVdpa2lcblx0XHRcdFx0KG5zID09PSA2ICYmICFjb25mLndnQXJ0aWNsZUlkKSB8fFxuXHRcdFx0XHQvLyBOb24tZXhpc3RpbmcgZmlsZSBwYWdlc1xuXHRcdFx0XHQobnMgPT09IDIgJiYgL1xcLihqc3xjc3MpJC8udGVzdChjb25mLndnVGl0bGUpKSB8fFxuXHRcdFx0XHQvLyBVc2VyIHNjcmlwdHNcblx0XHRcdFx0KG5zSWRzICYmIChucyA9PT0gbnNJZHMuY3JlYXRvciB8fCBucyA9PT0gbnNJZHMudGltZWR0ZXh0IHx8IG5zID09PSBuc0lkcy5pbnN0aXR1dGlvbikpXG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0Ly8gQSByZWdleHAgbWF0Y2hpbmcgYSB0ZW1wbGF0ZXMgdXNlZCB0byBtYXJrIHVuY2F0ZWdvcml6ZWQgcGFnZXMsIGlmIHlvdXIgd2lraSBkb2VzIGhhdmUgdGhhdC5cblx0XHQvLyBJZiBub3QsIHNldCBpdCB0byBudWxsLlxuXHRcdHVuY2F0X3JlZ2V4cDogL3t7XFxzKltVdV1uY2F0ZWdvcml6ZWRcXHMqW159XSp9fVxccyooPCEtLS4qPy0tPlxccyopPy9nLFxuXHRcdC8vIFRoZSBpbWFnZXMgdXNlZCBmb3IgdGhlIGxpdHRsZSBpbmRpY2F0aW9uIGljb24uIFNob3VsZCBub3QgbmVlZCBjaGFuZ2luZy5cblx0XHRleGlzdHNZZXM6IHB5ZXMsXG5cdFx0ZXhpc3RzTm86IHBubyxcblx0XHQvLyBhIGxpc3Qgb2YgY2F0ZWdvcmllcyB3aGljaCBjYW4gYmUgcmVtb3ZlZCBieSByZW1vdmluZyBhIHRlbXBsYXRlXG5cdFx0Ly8ga2V5OiB0aGUgY2F0ZWdvcnkgd2l0aG91dCBuYW1lc3BhY2Vcblx0XHQvLyB2YWx1ZTogQSByZWdleHAgbWF0Y2hpbmcgdGhlIHRlbXBsYXRlIG5hbWUsIGFnYWluIHdpdGhvdXQgbmFtZXNwYWNlXG5cdFx0Ly8gSWYgeW91IGRvbid0IGhhdmUgdGhpcyBhdCB5b3VyIHdpa2ksIG9yIGRvbid0IHdhbnQgdGhpcywgc2V0IGl0IHRvIGFuIGVtcHR5IG9iamVjdCB7fS5cblx0XHR0ZW1wbGF0ZV9jYXRlZ29yaWVzOiB7fSxcblx0XHQvLyBPdmVycmlkZSB0aGUgZGVjaXNpb24gb2Ygd2hldGhlciBIb3RDYXQgc2hvdWxkIGhlbHAgdXNlcnMgYnkgYXV0b21hdGljYWxseVxuXHRcdC8vIGNhcGl0YWxpc2luZyB0aGUgdGl0bGUgaW4gdGhlIHVzZXIgaW5wdXQgdGV4dCBpZiB0aGUgd2lraSBoYXMgY2FzZS1zZW5zaXRpdmUgcGFnZSBuYW1lcy5cblx0XHQvLyBCYXNpY2FsbHksIHRoaXMgd2lsbCBtYWtlIGFuIEFQSSBxdWVyeSB0byBjaGVjayB0aGUgTWVkaWFXaWtpIGNvbmZpZ3VyYXRpb24gYW5kIEhvdENhdCB0aGVuIHNldHNcblx0XHQvLyB0aGlzIHRvIHRydWUgZm9yIG1vc3Qgd2lraXMsIGFuZCB0byBmYWxzZSBvbiBXaWt0aW9uYXJ5LlxuXHRcdC8vXG5cdFx0Ly8gWW91IGNhbiBzZXQgdGhpcyBkaXJlY3RseSBpZiB0aGVyZSBpcyBhIHByb2JsZW0gd2l0aCBpdC4gRm9yIGV4YW1wbGUsIEdlb3JnaWFuIFdpa2lwZWRpYSAoa2F3aWtpKSxcblx0XHQvLyBpcyBrbm93biB0byBoYXZlIGRpZmZlcmVudCBjYXBpdGFsaXNhdGlvbiBsb2dpYyBiZXR3ZWVuIE1lZGlhV2lraSBQSFAgYW5kIEphdmFTY3JpcHQuIEFzIHN1Y2gsIGF1dG9tYXRpY1xuXHRcdC8vIGNhc2UgY2hhbmdlcyBpbiBKYXZhU2NyaXB0IGJ5IEhvdENhdCB3b3VsZCBiZSB3cm9uZy5cblx0XHRjYXBpdGFsaXplUGFnZU5hbWVzOiBudWxsLFxuXHRcdC8vIElmIHVwbG9hZF9kaXNhYmxlZCBpcyB0cnVlLCBIb3RDYXQgd2lsbCBub3QgYmUgdXNlZCBvbiB0aGUgVXBsb2FkIGZvcm0uXG5cdFx0dXBsb2FkX2Rpc2FibGVkOiBmYWxzZSxcblx0XHQvLyBTaW5nbGUgcmVndWxhciBleHByZXNzaW9uIG1hdGNoaW5nIGJsYWNrbGlzdGVkIGNhdGVnb3JpZXMgdGhhdCBjYW5ub3QgYmUgY2hhbmdlZCBvclxuXHRcdC8vIGFkZGVkIHVzaW5nIEhvdENhdC4gRm9yIGluc3RhbmNlIC9cXGJzdHVicz8kLyAoYW55IGNhdGVnb3J5IGVuZGluZyB3aXRoIHRoZSB3b3JkIFwic3R1YlwiXG5cdFx0Ly8gb3IgXCJzdHVic1wiKSwgb3IgLyhcXGJzdHVicz8kKXxcXGJtYWludGVuYW5jZVxcYi8gKHN0dWIgY2F0ZWdvcmllcyBhbmQgYW55IGNhdGVnb3J5IHdpdGggdGhlXG5cdFx0Ly8gd29yZCBcIm1haW50ZW5hbmNlXCIgaW4gaXRzIHRpdGxlLlxuXHRcdGJsYWNrbGlzdDogbnVsbCxcblx0XHQvLyBTdHVmZiBjaGFuZ2VhYmxlIGJ5IHVzZXJzOlxuXHRcdC8vIEJhY2tncm91bmQgZm9yIGNoYW5nZWQgY2F0ZWdvcmllcyBpbiBtdWx0aS1lZGl0IG1vZGUuIERlZmF1bHQgaXMgYSB2ZXJ5IGxpZ2h0IHNhbG1vbiBwaW5rLlxuXHRcdGJnX2NoYW5nZWQ6ICcjRkNBJyxcblx0XHQvLyBJZiB0cnVlLCBIb3RDYXQgd2lsbCBuZXZlciBhdXRvbWF0aWNhbGx5IHN1Ym1pdCBjaGFuZ2VzLiBIb3RDYXQgd2lsbCBvbmx5IG9wZW4gYW4gZWRpdCBwYWdlIHdpdGhcblx0XHQvLyB0aGUgY2hhbmdlczsgdXNlcnMgbXVzdCBhbHdheXMgc2F2ZSBleHBsaWNpdGx5LlxuXHRcdG5vX2F1dG9jb21taXQ6IGZhbHNlLFxuXHRcdC8vIElmIHRydWUsIHRoZSBcImNhdGVnb3J5IGRlbGV0aW9uXCIgbGluayBcIigtKVwiIHdpbGwgbmV2ZXIgc2F2ZSBhdXRvbWF0aWNhbGx5IGJ1dCBhbHdheXMgc2hvdyBhblxuXHRcdC8vIGVkaXQgcGFnZSB3aGVyZSB0aGUgdXNlciBoYXMgdG8gc2F2ZSB0aGUgZWRpdCBtYW51YWxseS4gSXMgZmFsc2UgYnkgZGVmYXVsdCBiZWNhdXNlIHRoYXQncyB0aGVcblx0XHQvLyB0cmFkaXRpb25hbCBiZWhhdmlvci4gVGhpcyBzZXR0aW5nIG92ZXJyaWRlcyBub19hdXRvY29tbWl0IGZvciBcIigtKVwiIGxpbmtzLlxuXHRcdGRlbF9uZWVkc19kaWZmOiBmYWxzZSxcblx0XHQvLyBUaW1lLCBpbiBtaWxsaXNlY29uZHMsIHRoYXQgSG90Q2F0IHdhaXRzIGFmdGVyIGEga2V5c3Ryb2tlIGJlZm9yZSBtYWtpbmcgYSByZXF1ZXN0IHRvIHRoZVxuXHRcdC8vIHNlcnZlciB0byBnZXQgc3VnZ2VzdGlvbnMuXG5cdFx0c3VnZ2VzdF9kZWxheTogMTAwMCxcblx0XHQvLyBEZWZhdWx0IHdpZHRoLCBpbiBjaGFyYWN0ZXJzLCBvZiB0aGUgdGV4dCBpbnB1dCBmaWVsZC5cblx0XHRlZGl0Ym94X3dpZHRoOiA0MCxcblx0XHQvLyBPbmUgb2YgdGhlIGVuZ2luZV9uYW1lcyBhYm92ZSwgdG8gYmUgdXNlZCBhcyB0aGUgZGVmYXVsdCBzdWdnZXN0aW9uIGVuZ2luZS5cblx0XHRzdWdnZXN0aW9uczogJ2NvbWJpbmVkJyxcblx0XHQvLyBJZiB0cnVlLCBhbHdheXMgdXNlIHRoZSBkZWZhdWx0IGVuZ2luZSwgYW5kIG5ldmVyIGRpc3BsYXkgYSBzZWxlY3Rvci5cblx0XHRmaXhlZF9zZWFyY2g6IGZhbHNlLFxuXHRcdC8vIElmIGZhbHNlLCBkbyBub3QgZGlzcGxheSB0aGUgXCJ1cFwiIGFuZCBcImRvd25cIiBsaW5rc1xuXHRcdHVzZV91cF9kb3duOiB0cnVlLFxuXHRcdC8vIERlZmF1bHQgbGlzdCBzaXplXG5cdFx0bGlzdFNpemU6IDEwLFxuXHRcdC8vIElmIHRydWUsIHNpbmdsZSBjYXRlZ29yeSBjaGFuZ2VzIGFyZSBtYXJrZWQgYXMgbWlub3IgZWRpdHMuIElmIGZhbHNlLCB0aGV5J3JlIG5vdC5cblx0XHRzaW5nbGVfbWlub3I6IHRydWUsXG5cdFx0Ly8gSWYgdHJ1ZSwgbmV2ZXIgYWRkIGEgcGFnZSB0byB0aGUgdXNlcidzIHdhdGNobGlzdC4gSWYgZmFsc2UsIHBhZ2VzIGdldCBhZGRlZCB0byB0aGUgd2F0Y2hsaXN0IGlmXG5cdFx0Ly8gdGhlIHVzZXIgaGFzIHRoZSBcIkFkZCBwYWdlcyBJIGVkaXQgdG8gbXkgd2F0Y2hsaXN0XCIgb3IgdGhlIFwiQWRkIHBhZ2VzIEkgY3JlYXRlIHRvIG15IHdhdGNobGlzdFwiXG5cdFx0Ly8gb3B0aW9ucyBpbiBoaXMgb3IgaGVyIHByZWZlcmVuY2VzIHNldC5cblx0XHRkb250X2FkZF90b193YXRjaGxpc3Q6IGZhbHNlLFxuXHRcdHNob3J0Y3V0czogbnVsbCxcblx0XHRhZGRTaG9ydGN1dHM6IChtYXApID0+IHtcblx0XHRcdGlmICghbWFwKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHdpbmRvdy5Ib3RDYXQuc2hvcnRjdXRzIHx8PSB7fTtcblx0XHRcdGZvciAobGV0IGsgaW4gbWFwKSB7XG5cdFx0XHRcdGlmICghT2JqZWN0Lmhhc093bihtYXAsIGspIHx8IHR5cGVvZiBrICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCB2ID0gbWFwW2tdO1xuXHRcdFx0XHRpZiAodHlwZW9mIHYgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0ayA9IGsudHJpbSgpO1xuXHRcdFx0XHR2ID0gdi50cmltKCk7XG5cdFx0XHRcdGlmIChrLmxlbmd0aCA9PT0gMCB8fCB2Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHdpbmRvdy5Ib3RDYXQuc2hvcnRjdXRzW2tdID0gdjtcblx0XHRcdH1cblx0XHR9LFxuXHR9O1xuXHRjb25zdCBIQyA9IHdpbmRvdy5Ib3RDYXQ7XG5cdC8vIE1vcmUgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuIFdlIGhhdmUgYSBmZXcgcGxhY2VzIHdoZXJlIHdlIHRlc3QgZm9yIHRoZSBicm93c2VyOiBvbmNlIGZvclxuXHQvLyBTYWZhcmkgPCAzLjAsIGFuZCB0d2ljZSBmb3IgV2ViS2l0IChDaHJvbWUgb3IgU2FmYXJpLCBhbnkgdmVyc2lvbnMpXG5cdGNvbnN0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuXHRjb25zdCBpc193ZWJraXQgPSAvYXBwbGV3ZWJraXRcXC9cXGQrLy50ZXN0KHVhKSAmJiAhdWEuaW5jbHVkZXMoJ3Nwb29mZXInKTtcblx0bGV0IGNhdF9wcmVmaXggPSBudWxsO1xuXHRsZXQgbm9TdWdnZXN0aW9ucyA9IGZhbHNlO1xuXHQvLyBObyBmdXJ0aGVyIGNoYW5nZXMgc2hvdWxkIGJlIG5lY2Vzc2FyeSBoZXJlLlxuXHQvLyBUaGUgZm9sbG93aW5nIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmdzIGFyZSB1c2VkIHdoZW4gc2VhcmNoaW5nIGZvciBjYXRlZ29yaWVzIGluIHdpa2l0ZXh0LlxuXHRjb25zdCB3aWtpVGV4dEJsYW5rID0gU3RyaW5nLnJhd2BbXFx0IF9cXHhBMFxcdTE2ODBcXHUxODBFXFx1MjAwMC1cXHUyMDBBXFx1MjAyOFxcdTIwMjlcXHUyMDJGXFx1MjA1RlxcdTMwMDBdK2A7XG5cdGNvbnN0IHdpa2lUZXh0QmxhbmtSRSA9IG5ldyBSZWdFeHAod2lraVRleHRCbGFuaywgJ2cnKTtcblx0Ly8gUmVnZXhwIGZvciBoYW5kbGluZyBibGFua3MgaW5zaWRlIGEgY2F0ZWdvcnkgdGl0bGUgb3IgbmFtZXNwYWNlIG5hbWUuXG5cdC8vIFNlZSB7QGxpbmsgaHR0cDovL3N2bi53aWtpbWVkaWEub3JnL3ZpZXd2Yy9tZWRpYXdpa2kvdHJ1bmsvcGhhc2UzL2luY2x1ZGVzL1RpdGxlLnBocD9yZXZpc2lvbj0xMDQwNTEmdmlldz1tYXJrdXAjbDI3MjJ9XG5cdC8vIFNlZSBhbHNvIHtAbGluayBodHRwOi8vd3d3LmZpbGVmb3JtYXQuaW5mby9pbmZvL3VuaWNvZGUvY2F0ZWdvcnkvWnMvbGlzdC5odG19XG5cdC8vICAgTWVkaWFXaWtpIGNvbGxhcHNlcyBzZXZlcmFsIGNvbnRpZ3VvdXMgYmxhbmtzIGluc2lkZSBhIHBhZ2UgdGl0bGUgdG8gb25lIHNpbmdsZSBibGFuay4gSXQgYWxzbyByZXBsYWNlIGFcblx0Ly8gbnVtYmVyIG9mIHNwZWNpYWwgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzIGJ5IHNpbXBsZSBibGFua3MuIEFuZCBmaW5hbGx5LCBibGFua3MgYXJlIHRyZWF0ZWQgYXMgdW5kZXJzY29yZXMuXG5cdC8vIFRoZXJlZm9yZSwgd2hlbiBsb29raW5nIGZvciBwYWdlIHRpdGxlcyBpbiB3aWtpdGV4dCwgd2UgbXVzdCBoYW5kbGUgYWxsIHRoZXNlIGNhc2VzLlxuXHQvLyAgIE5vdGU6IHdlIF9kb18gaW5jbHVkZSB0aGUgaG9yaXpvbnRhbCB0YWIgaW4gdGhlIGFib3ZlIGxpc3QsIGV2ZW4gdGhvdWdoIHRoZSBNZWRpYVdpa2kgc29mdHdhcmUgZm9yIHNvbWUgcmVhc29uXG5cdC8vIGFwcGVhcnMgdG8gbm90IGhhbmRsZSBpdC4gVGhlIHplcm8td2lkdGggc3BhY2UgXFx1MjAwQiBpcyBfbm90XyBoYW5kbGVkIGFzIGEgc3BhY2UgaW5zaWRlIHRpdGxlcyBieSBNVy5cblx0Y29uc3Qgd2lraVRleHRCbGFua09yQmlkaSA9IFN0cmluZy5yYXdgW1xcdCBfXFx4QTBcXHUxNjgwXFx1MTgwRVxcdTIwMDAtXFx1MjAwQlxcdTIwMEVcXHUyMDBGXFx1MjAyOC1cXHUyMDJGXFx1MjA1RlxcdTMwMDBdKmA7XG5cdC8vIFdoaXRlc3BhY2UgcmVnZXhwIGZvciBoYW5kbGluZyB3aGl0ZXNwYWNlIGJldHdlZW4gbGluayBjb21wb25lbnRzLiBJbmNsdWRpbmcgdGhlIGhvcml6b250YWwgdGFiLCBidXQgbm90IFxcblxcclxcZlxcdjpcblx0Ly8gYSBsaW5rIG11c3QgYmUgb24gb25lIHNpbmdsZSBsaW5lLlxuXHQvLyAgIE1lZGlhV2lraSBhbHNvIHJlbW92ZXMgVW5pY29kZSBiaWRpIG92ZXJyaWRlIGNoYXJhY3RlcnMgaW4gcGFnZSB0aXRsZXMgKGFuZCBuYW1lc3BhY2UgbmFtZXMpIGNvbXBsZXRlbHkuXG5cdC8vIFRoaXMgaXMgKm5vdCogaGFuZGxlZCwgYXMgaXQgd291bGQgcmVxdWlyZSB1cyB0byBhbGxvdyBhbnkgb2YgW1xcdTIwMEVcXHUyMDBGXFx1MjAyQS1cXHUyMDJFXSBiZXR3ZWVuIGFueSB0d29cblx0Ly8gY2hhcmFjdGVycyBpbnNpZGUgYSBjYXRlZ29yeSBsaW5rLiBJdCBfY291bGRfIGJlIGRvbmUgdGhvdWdoLi4uIFdlIF9kb18gaGFuZGxlIHN0cmFuZ2Ugc3BhY2VzLCBpbmNsdWRpbmcgdGhlXG5cdC8vIHplcm8td2lkdGggc3BhY2UgXFx1MjAwQiwgYW5kIGJpZGkgb3ZlcnJpZGVzIGJldHdlZW4gdGhlIGNvbXBvbmVudHMgb2YgYSBjYXRlZ29yeSBsaW5rIChhZGphY2VudCB0byB0aGUgY29sb24sXG5cdC8vIG9yIGFkamFjZW50IHRvIGFuZCBpbnNpZGUgb2YgXCJbW1wiIGFuZCBcIl1dXCIpLlxuXHQvLyBGaXJzdCBhdXRvLWxvY2FsaXplIHRoZSByZWdleHBzIGZvciB0aGUgY2F0ZWdvcnkgYW5kIHRoZSB0ZW1wbGF0ZSBuYW1lc3BhY2VzLlxuXHRjb25zdCBmb3JtYXR0ZWROYW1lc3BhY2VzID0gY29uZi53Z0Zvcm1hdHRlZE5hbWVzcGFjZXM7XG5cdGNvbnN0IG5hbWVzcGFjZUlkcyA9IGNvbmYud2dOYW1lc3BhY2VJZHM7XG5cdGNvbnN0IGF1dG9Mb2NhbGl6ZSA9IChuYW1lc3BhY2VOdW1iZXIsIGZhbGxiYWNrKSA9PiB7XG5cdFx0Y29uc3QgY3JlYXRlUmVnZXhwU3RyID0gKG5hbWUpID0+IHtcblx0XHRcdGlmICghbmFtZSB8fCBuYW1lLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRsZXQgcmVnZXhfbmFtZSA9ICcnO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBuYW1lLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IGluaXRpYWwgPSBuYW1lLmNoYXJBdChpKTtcblx0XHRcdFx0Y29uc3QgbGwgPSBpbml0aWFsLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdGNvbnN0IHVsID0gaW5pdGlhbC50b1VwcGVyQ2FzZSgpO1xuXHRcdFx0XHRyZWdleF9uYW1lICs9IGxsID09PSB1bCA/IGluaXRpYWwgOiBgWyR7bGx9JHt1bH1dYDtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZWdleF9uYW1lLnJlcGxhY2UoLyhbJCgpKisuP1xcXFxeXSkvZywgU3RyaW5nLnJhd2BcXCQxYCkucmVwbGFjZSh3aWtpVGV4dEJsYW5rUkUsIHdpa2lUZXh0QmxhbmspO1xuXHRcdH07XG5cdFx0ZmFsbGJhY2sgPSBmYWxsYmFjay50b0xvd2VyQ2FzZSgpO1xuXHRcdGNvbnN0IGNhbm9uaWNhbCA9IGZvcm1hdHRlZE5hbWVzcGFjZXNbU3RyaW5nKG5hbWVzcGFjZU51bWJlcildLnRvTG93ZXJDYXNlKCk7XG5cdFx0bGV0IHJlZ2V4cCA9IGNyZWF0ZVJlZ2V4cFN0cihjYW5vbmljYWwpO1xuXHRcdGlmIChmYWxsYmFjayAmJiBjYW5vbmljYWwgIT09IGZhbGxiYWNrKSB7XG5cdFx0XHRyZWdleHAgKz0gYHwke2NyZWF0ZVJlZ2V4cFN0cihmYWxsYmFjayl9YDtcblx0XHR9XG5cdFx0aWYgKG5hbWVzcGFjZUlkcykge1xuXHRcdFx0Zm9yIChjb25zdCBjYXRfbmFtZSBpbiBuYW1lc3BhY2VJZHMpIHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdHR5cGVvZiBjYXRfbmFtZSA9PT0gJ3N0cmluZycgJiZcblx0XHRcdFx0XHRjYXRfbmFtZS50b0xvd2VyQ2FzZSgpICE9PSBjYW5vbmljYWwgJiZcblx0XHRcdFx0XHRjYXRfbmFtZS50b0xvd2VyQ2FzZSgpICE9PSBmYWxsYmFjayAmJlxuXHRcdFx0XHRcdG5hbWVzcGFjZUlkc1tjYXRfbmFtZV0gPT09IG5hbWVzcGFjZU51bWJlclxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRyZWdleHAgKz0gYHwke2NyZWF0ZVJlZ2V4cFN0cihjYXRfbmFtZSl9YDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVnZXhwO1xuXHR9O1xuXHRIQy5jYXRlZ29yeV9jYW5vbmljYWwgPSBmb3JtYXR0ZWROYW1lc3BhY2VzWycxNCddO1xuXHRIQy5jYXRlZ29yeV9yZWdleHAgPSBhdXRvTG9jYWxpemUoMTQsICdjYXRlZ29yeScpO1xuXHRpZiAoZm9ybWF0dGVkTmFtZXNwYWNlc1snMTAnXSkge1xuXHRcdEhDLnRlbXBsYXRlX3JlZ2V4cCA9IGF1dG9Mb2NhbGl6ZSgxMCwgJ3RlbXBsYXRlJyk7XG5cdH1cblx0Ly8gVXRpbGl0eSBmdW5jdGlvbnMuIFllcywgdGhpcyBkdXBsaWNhdGVzIHNvbWUgZnVuY3Rpb25hbGl0eSB0aGF0IGFsc28gZXhpc3RzIGluIG90aGVyIHBsYWNlcywgYnV0XG5cdC8vIHRvIGtlZXAgdGhpcyB3aG9sZSBzdHVmZiBpbiBhIHNpbmdsZSBmaWxlIG5vdCBkZXBlbmRpbmcgb24gYW55IG90aGVyIG9uLXdpa2kgSmF2YVNjcmlwdHMsIHdlIHJlLWRvXG5cdC8vIHRoZXNlIGZldyBvcGVyYXRpb25zIGhlcmUuXG5cdGNvbnN0IG1ha2UgPSAoYXJnLCBsaXRlcmFsKSA9PiB7XG5cdFx0aWYgKCFhcmcpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRyZXR1cm4gbGl0ZXJhbCA/IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGFyZykgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGFyZyk7XG5cdH07XG5cdGNvbnN0IHBhcmFtID0gKG5hbWUsIHVyaSkgPT4ge1xuXHRcdHVyaSB8fD0gZG9jdW1lbnQubG9jYXRpb24uaHJlZjtcblx0XHRjb25zdCByZSA9IG5ldyBSZWdFeHAoYFsmP10ke25hbWV9PShbXiYjXSopYCk7XG5cdFx0Y29uc3QgbSA9IHJlLmV4ZWModXJpKTtcblx0XHRpZiAobSAmJiBtLmxlbmd0aCA+IDEpIHtcblx0XHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQobVsxXSk7XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9O1xuXHRjb25zdCB0aXRsZSA9IChocmVmKSA9PiB7XG5cdFx0aWYgKCFocmVmKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y29uc3Qgc2NyaXB0ID0gYCR7Y29uZi53Z1NjcmlwdH0/YDtcblx0XHRpZiAoXG5cdFx0XHRocmVmLmluZGV4T2Yoc2NyaXB0KSA9PT0gMCB8fFxuXHRcdFx0aHJlZi5pbmRleE9mKGNvbmYud2dTZXJ2ZXIgKyBzY3JpcHQpID09PSAwIHx8XG5cdFx0XHQoY29uZi53Z1NlcnZlci5zbGljZSgwLCAyKSA9PT0gJy8vJyAmJlxuXHRcdFx0XHRocmVmLmluZGV4T2YoZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2wgKyBjb25mLndnU2VydmVyICsgc2NyaXB0KSA9PT0gMClcblx0XHQpIHtcblx0XHRcdC8vIGhyZWY9XCIvaW5kZXgucGhwP3RpdGxlPS4uLlwiXG5cdFx0XHRyZXR1cm4gcGFyYW0oJ3RpdGxlJywgaHJlZik7XG5cdFx0fVxuXHRcdC8vIGhyZWY9XCIvd2lraS8uLi5cIlxuXHRcdGxldCBwcmVmaXggPSBjb25mLndnQXJ0aWNsZVBhdGgucmVwbGFjZSgnJDEnLCAnJyk7XG5cdFx0aWYgKGhyZWYuaW5kZXhPZihwcmVmaXgpKSB7XG5cdFx0XHRwcmVmaXggPSBjb25mLndnU2VydmVyICsgcHJlZml4O1xuXHRcdH0gLy8gRnVsbHkgZXhwYW5kZWQgVVJMP1xuXHRcdGlmIChocmVmLmluZGV4T2YocHJlZml4KSAmJiBwcmVmaXguc2xpY2UoMCwgMikgPT09ICcvLycpIHtcblx0XHRcdHByZWZpeCA9IGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sICsgcHJlZml4O1xuXHRcdH0gLy8gUHJvdG9jb2wtcmVsYXRpdmUgd2dTZXJ2ZXI/XG5cdFx0aWYgKGhyZWYuaW5kZXhPZihwcmVmaXgpID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGhyZWYuc2xpY2UocHJlZml4Lmxlbmd0aCkpO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fTtcblx0Y29uc3QgaGFzQ2xhc3MgPSAoe2NsYXNzTmFtZX0sIG5hbWUpID0+IHtcblx0XHRyZXR1cm4gYCAke2NsYXNzTmFtZX0gYC5pbmNsdWRlcyhgICR7bmFtZX0gYCk7XG5cdH07XG5cdGNvbnN0IGNhcGl0YWxpemUgPSAoc3RyKSA9PiB7XG5cdFx0aWYgKCFzdHIgfHwgc3RyLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIHN0cjtcblx0XHR9XG5cdFx0cmV0dXJuIHN0ci5zbGljZSgwLCAxKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xuXHR9O1xuXHRjb25zdCB3aWtpUGFnZVBhdGggPSAocGFnZU5hbWUpID0+IHtcblx0XHRyZXR1cm4gY29uZi53Z0FydGljbGVQYXRoLnJlcGxhY2UoJyQxJywgZW5jb2RlVVJJQ29tcG9uZW50KHBhZ2VOYW1lKS5yZXBsYWNlKC8lM0EvZywgJzonKS5yZXBsYWNlKC8lMkYvZywgJy8nKSk7XG5cdH07XG5cdGNvbnN0IGVzY2FwZVJFID0gKHN0cikgPT4ge1xuXHRcdHJldHVybiBzdHIucmVwbGFjZSgvKFskKCkqKy4/W1xcXFxcXF1eXSkvZywgU3RyaW5nLnJhd2BcXCQxYCk7XG5cdH07XG5cdGNvbnN0IHN1YnN0aXR1dGVGYWN0b3J5ID0gKG9wdGlvbnMpID0+IHtcblx0XHRvcHRpb25zIHx8PSB7fTtcblx0XHRjb25zdCBsZWFkID0gb3B0aW9ucy5pbmRpY2F0b3IgfHwgJyQnO1xuXHRcdGNvbnN0IGluZGljYXRvciA9IGVzY2FwZVJFKGxlYWQpO1xuXHRcdGNvbnN0IGxicmFjZSA9IGVzY2FwZVJFKG9wdGlvbnMubGJyYWNlIHx8ICd7Jyk7XG5cdFx0Y29uc3QgcmJyYWNlID0gZXNjYXBlUkUob3B0aW9ucy5yYnJhY2UgfHwgJ30nKTtcblx0XHRjb25zdCByZSA9IG5ldyBSZWdFeHAoXG5cdFx0XHQvLyAkJFxuXHRcdFx0YCg/OiR7aW5kaWNhdG9yfSgke2luZGljYXRvcn0pKXxgICtcblx0XHRcdFx0Ly8gJDAsICQxXG5cdFx0XHRcdGAoPzoke2luZGljYXRvcn0oXFxcXGQrKSl8YCArXG5cdFx0XHRcdC8vICR7a2V5fVxuXHRcdFx0XHRgKD86JHtpbmRpY2F0b3J9KD86JHtsYnJhY2V9KFteJHtsYnJhY2V9JHtyYnJhY2V9XSspJHtyYnJhY2V9KSl8YCArXG5cdFx0XHRcdC8vICRrZXkgKG9ubHkgaWYgZmlyc3QgY2hhciBhZnRlciAkIGlzIG5vdCAkLCBkaWdpdCwgb3IgeyApXG5cdFx0XHRcdGAoPzoke2luZGljYXRvcn0oPyEoPzpbJHtpbmRpY2F0b3J9JHtsYnJhY2V9XXxcXFxcZCkpKFxcXFxTKz8pXFxcXGIpYCxcblx0XHRcdCdnJ1xuXHRcdCk7XG5cdFx0Ly8gUmVwbGFjZSAkMSwgJDIsIG9yICR7a2V5MX0sICR7a2V5Mn0sIG9yICRrZXkxLCAka2V5MiBieSB2YWx1ZXMgZnJvbSBtYXAuICQkIGlzIHJlcGxhY2VkIGJ5IGEgc2luZ2xlICQuXG5cdFx0cmV0dXJuIChzdHIsIG1hcCkgPT4ge1xuXHRcdFx0aWYgKCFtYXApIHtcblx0XHRcdFx0cmV0dXJuIHN0cjtcblx0XHRcdH1cblx0XHRcdHJldHVybiBzdHIucmVwbGFjZShyZSwgKG1hdGNoLCBwcmVmaXgsIGlkeCwga2V5LCBhbHBoYSkgPT4ge1xuXHRcdFx0XHRpZiAocHJlZml4ID09PSBsZWFkKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGxlYWQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgayA9IGFscGhhIHx8IGtleSB8fCBpZHg7XG5cdFx0XHRcdGNvbnN0IHJlcGxhY2VtZW50ID0gdHlwZW9mIG1hcFtrXSA9PT0gJ2Z1bmN0aW9uJyA/IG1hcFtrXShtYXRjaCwgaykgOiBtYXBba107XG5cdFx0XHRcdHJldHVybiB0eXBlb2YgcmVwbGFjZW1lbnQgPT09ICdzdHJpbmcnID8gcmVwbGFjZW1lbnQgOiByZXBsYWNlbWVudCB8fCBtYXRjaDtcblx0XHRcdH0pO1xuXHRcdH07XG5cdH07XG5cdGNvbnN0IHJlcGxhY2VTaG9ydGN1dHMgPSAoKCkgPT4ge1xuXHRcdGNvbnN0IHJlcGxhY2VIYXNoID0gc3Vic3RpdHV0ZUZhY3Rvcnkoe1xuXHRcdFx0aW5kaWNhdG9yOiAnIycsXG5cdFx0XHRsYnJhY2U6ICdbJyxcblx0XHRcdHJicmFjZTogJ10nLFxuXHRcdH0pO1xuXHRcdHJldHVybiAoc3RyLCBtYXApID0+IHtcblx0XHRcdGNvbnN0IHMgPSByZXBsYWNlSGFzaChzdHIsIG1hcCk7XG5cdFx0XHRyZXR1cm4gSEMuY2FwaXRhbGl6ZVBhZ2VOYW1lcyA/IGNhcGl0YWxpemUocykgOiBzO1xuXHRcdH07XG5cdH0pKCk7XG5cdC8vIFRleHQgbW9kaWZpY2F0aW9uXG5cdGNvbnN0IGZpbmRDYXRzUkUgPSBuZXcgUmVnRXhwKFxuXHRcdGBcXFxcW1xcXFxbJHt3aWtpVGV4dEJsYW5rT3JCaWRpfSg/OiR7SEMuY2F0ZWdvcnlfcmVnZXhwfSkke3dpa2lUZXh0QmxhbmtPckJpZGl9OlteXFxcXF1dK1xcXFxdXFxcXF1gLFxuXHRcdCdnJ1xuXHQpO1xuXHRjb25zdCByZXBsYWNlQnlCbGFua3MgPSAobWF0Y2gpID0+IHtcblx0XHRyZXR1cm4gbWF0Y2gucmVwbGFjZSgvKFxcc3xcXFMpL2csICcgJyk7XG5cdH07IC8vIC8uLyBkb2Vzbid0IG1hdGNoIGxpbmVicmVha3MuIC8oXFxzfFxcUykvIGRvZXMuXG5cdGNvbnN0IGZpbmRfY2F0ZWdvcnkgPSAod2lraXRleHQsIGNhdGVnb3J5LCBvbmNlKSA9PiB7XG5cdFx0bGV0IGNhdF9yZWdleCA9IG51bGw7XG5cdFx0aWYgKEhDLnRlbXBsYXRlX2NhdGVnb3JpZXNbY2F0ZWdvcnldKSB7XG5cdFx0XHRjYXRfcmVnZXggPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRgXFxcXHtcXFxceyR7d2lraVRleHRCbGFua09yQmlkaX0oJHtIQy50ZW1wbGF0ZV9yZWdleHB9KD89JHt3aWtpVGV4dEJsYW5rT3JCaWRpfTopKT8ke3dpa2lUZXh0QmxhbmtPckJpZGl9KD86JHtIQy50ZW1wbGF0ZV9jYXRlZ29yaWVzW2NhdGVnb3J5XX0pJHt3aWtpVGV4dEJsYW5rT3JCaWRpfShcXFxcfC4qPyk/XFxcXH1cXFxcfWAsXG5cdFx0XHRcdCdnJ1xuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgY2F0X25hbWUgPSBlc2NhcGVSRShjYXRlZ29yeSk7XG5cdFx0XHRjb25zdCBpbml0aWFsID0gY2F0X25hbWUuc2xpY2UoMCwgMSk7XG5cdFx0XHRjYXRfcmVnZXggPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRgXFxcXFtcXFxcWyR7d2lraVRleHRCbGFua09yQmlkaX0oJHtIQy5jYXRlZ29yeV9yZWdleHB9KSR7d2lraVRleHRCbGFua09yQmlkaX06JHt3aWtpVGV4dEJsYW5rT3JCaWRpfSR7XG5cdFx0XHRcdFx0aW5pdGlhbCA9PT0gJ1xcXFwnIHx8ICFIQy5jYXBpdGFsaXplUGFnZU5hbWVzXG5cdFx0XHRcdFx0XHQ/IGluaXRpYWxcblx0XHRcdFx0XHRcdDogYFske2luaXRpYWwudG9VcHBlckNhc2UoKX0ke2luaXRpYWwudG9Mb3dlckNhc2UoKX1dYFxuXHRcdFx0XHR9JHtjYXRfbmFtZS5zbGljZSgxKS5yZXBsYWNlKHdpa2lUZXh0QmxhbmtSRSwgd2lraVRleHRCbGFuayl9JHt3aWtpVGV4dEJsYW5rT3JCaWRpfShcXFxcfC4qPyk/XFxcXF1cXFxcXWAsXG5cdFx0XHRcdCdnJ1xuXHRcdFx0KTtcblx0XHR9XG5cdFx0aWYgKG9uY2UpIHtcblx0XHRcdHJldHVybiBjYXRfcmVnZXguZXhlYyh3aWtpdGV4dCk7XG5cdFx0fVxuXHRcdGNvbnN0IG5vd2lraVJlZ2V4ID0gbmV3IFJlZ0V4cCgnPG5vJy5jb25jYXQoJ3dpa2k+JywgU3RyaW5nLnJhd2AoXFxzfFxcUykqPzwvbm9gLCAnd2lraScsICc+JyksICdnJyk7XG5cdFx0Y29uc3QgY29waWVkdGV4dCA9IHdpa2l0ZXh0LnJlcGxhY2UoLzwhLS0oXFxzfFxcUykqPy0tPi9nLCByZXBsYWNlQnlCbGFua3MpLnJlcGxhY2Uobm93aWtpUmVnZXgsIHJlcGxhY2VCeUJsYW5rcyk7XG5cdFx0Y29uc3QgcmVzdWx0ID0gW107XG5cdFx0bGV0IGN1cnJfbWF0Y2ggPSBudWxsO1xuXHRcdHdoaWxlICgoY3Vycl9tYXRjaCA9IGNhdF9yZWdleC5leGVjKGNvcGllZHRleHQpKSAhPT0gbnVsbCkge1xuXHRcdFx0cmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0ge1xuXHRcdFx0XHRtYXRjaDogY3Vycl9tYXRjaCxcblx0XHRcdH07XG5cdFx0fVxuXHRcdHJlc3VsdC5yZSA9IGNhdF9yZWdleDtcblx0XHRyZXR1cm4gcmVzdWx0OyAvLyBBbiBhcnJheSBjb250YWluaW5nIGFsbCBtYXRjaGVzLCB3aXRoIHBvc2l0aW9ucywgaW4gcmVzdWx0WyBpIF0ubWF0Y2hcblx0fTtcblx0bGV0IGludGVybGFuZ3VhZ2VSRSA9IG51bGw7XG5cdGNvbnN0IGNoYW5nZV9jYXRlZ29yeSA9ICh3aWtpdGV4dCwgdG9SZW1vdmUsIHRvQWRkLCBrZXksIGlzX2hpZGRlbikgPT4ge1xuXHRcdGNvbnN0IGZpbmRfaW5zZXJ0aW9ucG9pbnQgPSAoX3dpa2l0ZXh0KSA9PiB7XG5cdFx0XHRjb25zdCBub3dpa2lSZWdleCA9IG5ldyBSZWdFeHAoJzxubycuY29uY2F0KCd3aWtpPicsIFN0cmluZy5yYXdgKFxcc3xcXFMpKj88L25vYCwgJ3dpa2knLCAnPicpLCAnZycpO1xuXHRcdFx0Y29uc3QgY29waWVkdGV4dCA9IF93aWtpdGV4dFxuXHRcdFx0XHQucmVwbGFjZSgvPCEtLShcXHN8XFxTKSo/LS0+L2csIHJlcGxhY2VCeUJsYW5rcylcblx0XHRcdFx0LnJlcGxhY2Uobm93aWtpUmVnZXgsIHJlcGxhY2VCeUJsYW5rcyk7XG5cdFx0XHQvLyBTZWFyY2ggaW4gY29waWVkdGV4dCB0byBhdm9pZCB0aGF0IHdlIGluc2VydCBpbnNpZGUgYW4gSFRNTCBjb21tZW50IG9yIGEgbm93aWtpIFwiZWxlbWVudFwiLlxuXHRcdFx0bGV0IGluZGV4ID0gLTE7XG5cdFx0XHRmaW5kQ2F0c1JFLmxhc3RJbmRleCA9IDA7XG5cdFx0XHR3aGlsZSAoZmluZENhdHNSRS5leGVjKGNvcGllZHRleHQpICE9PSBudWxsKSB7XG5cdFx0XHRcdGluZGV4ID0gZmluZENhdHNSRS5sYXN0SW5kZXg7XG5cdFx0XHR9XG5cdFx0XHRpZiAoaW5kZXggPCAwKSB7XG5cdFx0XHRcdC8vIEZpbmQgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBpbnRlcmxhbmd1YWdlIGxpbmsuLi5cblx0XHRcdFx0bGV0IG1hdGNoID0gbnVsbDtcblx0XHRcdFx0aWYgKGludGVybGFuZ3VhZ2VSRSkge1xuXHRcdFx0XHRcdG1hdGNoID0gaW50ZXJsYW5ndWFnZVJFLmV4ZWMoY29waWVkdGV4dCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gQXBwcm94aW1hdGlvbiB3aXRob3V0IEFQSTogaW50ZXJsYW5ndWFnZSBsaW5rcyBzdGFydCB3aXRoIDIgdG8gMyBsb3dlciBjYXNlIGxldHRlcnMsIG9wdGlvbmFsbHkgZm9sbG93ZWQgYnlcblx0XHRcdFx0XHQvLyBhIHNlcXVlbmNlIG9mIGdyb3VwcyBjb25zaXN0aW5nIG9mIGEgZGFzaCBmb2xsb3dlZCBieSBvbmUgb3IgbW9yZSBsb3dlciBjYXNlIGxldHRlcnMuIEV4Y2VwdGlvbnMgYXJlIFwic2ltcGxlXCJcblx0XHRcdFx0XHQvLyBhbmQgXCJ0b2tpcG9uYVwiLlxuXHRcdFx0XHRcdG1hdGNoID0gLygoXnxcXG5cXHI/KShcXFtcXFtcXHMqKChbYS16XXsyLDN9KC1bYS16XSspKil8c2ltcGxlfHRva2lwb25hKVxccyo6W15cXF1dK11dXFxzKikpKyQvLmV4ZWMoXG5cdFx0XHRcdFx0XHRjb3BpZWR0ZXh0XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAobWF0Y2gpIHtcblx0XHRcdFx0XHQoe2luZGV4fSA9IG1hdGNoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGlkeDogaW5kZXgsXG5cdFx0XHRcdFx0b25DYXQ6IGZhbHNlLFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0aWR4OiBpbmRleCxcblx0XHRcdFx0b25DYXQ6IGluZGV4ID49IDAsXG5cdFx0XHR9O1xuXHRcdH07XG5cdFx0Y29uc3Qgc3VtbWFyeSA9IFtdO1xuXHRcdGNvbnN0IG5hbWVTcGFjZSA9IEhDLmNhdGVnb3J5X2Nhbm9uaWNhbDtcblx0XHRjb25zdCAvLyBQb3NpdGlvbiBvZiByZW1vdmVkIGNhdGVnb3J5O1xuXHRcdFx0a2V5Q2hhbmdlID0gdG9SZW1vdmUgJiYgdG9BZGQgJiYgdG9SZW1vdmUgPT09IHRvQWRkICYmIHRvQWRkLmxlbmd0aCA+IDA7XG5cdFx0bGV0IG1hdGNoZXM7XG5cdFx0bGV0IGNhdF9wb2ludCA9IC0xO1xuXHRcdGtleSAmJj0gYHwke2tleX1gO1xuXHRcdC8vIFJlbW92ZVxuXHRcdGlmICh0b1JlbW92ZSAmJiB0b1JlbW92ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRtYXRjaGVzID0gZmluZF9jYXRlZ29yeSh3aWtpdGV4dCwgdG9SZW1vdmUpO1xuXHRcdFx0aWYgKCFtYXRjaGVzIHx8IG1hdGNoZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dGV4dDogd2lraXRleHQsXG5cdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHRlcnJvcjogZ2V0TWVzc2FnZSgnbWVzc2FnZXMtY2F0X25vdEZvdW5kJywgdG9SZW1vdmUpLFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0bGV0IGJlZm9yZSA9IHdpa2l0ZXh0LnNsaWNlKDAsIE1hdGgubWF4KDAsIG1hdGNoZXNbMF0ubWF0Y2guaW5kZXgpKTtcblx0XHRcdGxldCBhZnRlciA9IHdpa2l0ZXh0LnNsaWNlKE1hdGgubWF4KDAsIG1hdGNoZXNbMF0ubWF0Y2guaW5kZXggKyBtYXRjaGVzWzBdLm1hdGNoWzBdLmxlbmd0aCkpO1xuXHRcdFx0aWYgKG1hdGNoZXMubGVuZ3RoID4gMSkge1xuXHRcdFx0XHQvLyBSZW1vdmUgYWxsIG9jY3VycmVuY2VzIGluIGFmdGVyXG5cdFx0XHRcdG1hdGNoZXMucmUubGFzdEluZGV4ID0gMDtcblx0XHRcdFx0YWZ0ZXIgPSBhZnRlci5yZXBsYWNlKG1hdGNoZXMucmUsICcnKTtcblx0XHRcdH1cblx0XHRcdGlmIChcblx0XHRcdFx0dG9BZGQgJiYgLy8gbmFtZVNwYWNlID0gbWF0Y2hlc1sgMCBdLm1hdGNoWyAxIF0gfHwgbmFtZVNwYWNlOyBDYW5vbmljYWwgbmFtZXNwYWNlIHNob3VsZCBiZSBhbHdheXMgcHJlZmVycmVkXG5cdFx0XHRcdGtleSA9PT0gbnVsbFxuXHRcdFx0KSB7XG5cdFx0XHRcdFssICwga2V5XSA9IG1hdGNoZXNbMF0ubWF0Y2g7XG5cdFx0XHR9XG5cdFx0XHQvLyBSZW1lbWJlciB0aGUgY2F0ZWdvcnkga2V5LCBpZiBhbnkuXG5cdFx0XHQvLyBSZW1vdmUgd2hpdGVzcGFjZSAocHJvcGVybHkpOiBzdHJpcCB3aGl0ZXNwYWNlLCBidXQgb25seSB1cCB0byB0aGUgbmV4dCBsaW5lIGZlZWQuXG5cdFx0XHQvLyBJZiB3ZSB0aGVuIGhhdmUgdHdvIGxpbmVmZWVkcyBpbiBhIHJvdywgcmVtb3ZlIG9uZS4gT3RoZXJ3aXNlLCBpZiB3ZSBoYXZlIHR3byBub24tXG5cdFx0XHQvLyB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMsIGluc2VydCBhIGJsYW5rLlxuXHRcdFx0bGV0IGkgPSBiZWZvcmUubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID49IDAgJiYgYmVmb3JlLmNoYXJBdChpKSAhPT0gJ1xcbicgJiYgYmVmb3JlLnNsaWNlKGksIGkgKyAxKS5zZWFyY2goL1xccy8pID49IDApIHtcblx0XHRcdFx0aS0tO1xuXHRcdFx0fVxuXHRcdFx0bGV0IGogPSAwO1xuXHRcdFx0d2hpbGUgKGogPCBhZnRlci5sZW5ndGggJiYgYWZ0ZXIuY2hhckF0KGopICE9PSAnXFxuJyAmJiBhZnRlci5zbGljZShqLCBqICsgMSkuc2VhcmNoKC9cXHMvKSA+PSAwKSB7XG5cdFx0XHRcdGorKztcblx0XHRcdH1cblx0XHRcdGlmIChcblx0XHRcdFx0aSA+PSAwICYmXG5cdFx0XHRcdGJlZm9yZS5jaGFyQXQoaSkgPT09ICdcXG4nICYmXG5cdFx0XHRcdChhZnRlci5sZW5ndGggPT09IDAgfHwgKGogPCBhZnRlci5sZW5ndGggJiYgYWZ0ZXIuY2hhckF0KGopID09PSAnXFxuJykpXG5cdFx0XHQpIHtcblx0XHRcdFx0aS0tO1xuXHRcdFx0fVxuXHRcdFx0YmVmb3JlID0gaSA+PSAwID8gYmVmb3JlLnNsaWNlKDAsIE1hdGgubWF4KDAsIGkgKyAxKSkgOiAnJztcblx0XHRcdGFmdGVyID0gaiA8IGFmdGVyLmxlbmd0aCA/IGFmdGVyLnNsaWNlKE1hdGgubWF4KDAsIGopKSA6ICcnO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRiZWZvcmUubGVuZ3RoID4gMCAmJlxuXHRcdFx0XHRiZWZvcmUuc2xpY2UoTWF0aC5tYXgoMCwgYmVmb3JlLmxlbmd0aCAtIDEpKS5zZWFyY2goL1xcUy8pID49IDAgJiZcblx0XHRcdFx0YWZ0ZXIubGVuZ3RoID4gMCAmJlxuXHRcdFx0XHRhZnRlci5zbGljZSgwLCAxKS5zZWFyY2goL1xcUy8pID49IDBcblx0XHRcdCkge1xuXHRcdFx0XHRiZWZvcmUgKz0gJyAnO1xuXHRcdFx0fVxuXHRcdFx0Y2F0X3BvaW50ID0gYmVmb3JlLmxlbmd0aDtcblx0XHRcdGlmIChjYXRfcG9pbnQgPT09IDAgJiYgYWZ0ZXIubGVuZ3RoID4gMCAmJiBhZnRlci5zbGljZSgwLCAxKSA9PT0gJ1xcbicpIHtcblx0XHRcdFx0YWZ0ZXIgPSBhZnRlci5zbGljZSgxKTtcblx0XHRcdH1cblx0XHRcdHdpa2l0ZXh0ID0gYmVmb3JlICsgYWZ0ZXI7XG5cdFx0XHRpZiAoIWtleUNoYW5nZSkge1xuXHRcdFx0XHRpZiAoSEMudGVtcGxhdGVfY2F0ZWdvcmllc1t0b1JlbW92ZV0pIHtcblx0XHRcdFx0XHRzdW1tYXJ5W3N1bW1hcnkubGVuZ3RoXSA9IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXRlbXBsYXRlX3JlbW92ZWQnLCB0b1JlbW92ZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c3VtbWFyeVtzdW1tYXJ5Lmxlbmd0aF0gPSBnZXRNZXNzYWdlKCdtZXNzYWdlcy1jYXRfcmVtb3ZlZCcsIHRvUmVtb3ZlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBBZGRcblx0XHRpZiAodG9BZGQgJiYgdG9BZGQubGVuZ3RoID4gMCkge1xuXHRcdFx0bWF0Y2hlcyA9IGZpbmRfY2F0ZWdvcnkod2lraXRleHQsIHRvQWRkKTtcblx0XHRcdGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHQvLyBBbHJlYWR5IGV4aXN0c1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHRleHQ6IHdpa2l0ZXh0LFxuXHRcdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdFx0ZXJyb3I6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLWNhdF9leGlzdHMnLCB0b0FkZCksXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRsZXQgb25DYXQgPSBmYWxzZTtcblx0XHRcdGlmIChjYXRfcG9pbnQgPCAwKSB7XG5cdFx0XHRcdGNvbnN0IHBvaW50ID0gZmluZF9pbnNlcnRpb25wb2ludCh3aWtpdGV4dCk7XG5cdFx0XHRcdGNhdF9wb2ludCA9IHBvaW50LmlkeDtcblx0XHRcdFx0KHtvbkNhdH0gPSBwb2ludCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvbkNhdCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBuZXdjYXRzdHJpbmcgPSBgW1ske25hbWVTcGFjZX06JHt0b0FkZH0ke2tleSB8fCAnJ31dXWA7XG5cdFx0XHRpZiAoY2F0X3BvaW50ID49IDApIHtcblx0XHRcdFx0Y29uc3Qgc3VmZml4ID0gd2lraXRleHQuc2xpY2UoTWF0aC5tYXgoMCwgY2F0X3BvaW50KSk7XG5cdFx0XHRcdHdpa2l0ZXh0ID1cblx0XHRcdFx0XHR3aWtpdGV4dC5zbGljZSgwLCBNYXRoLm1heCgwLCBjYXRfcG9pbnQpKSArXG5cdFx0XHRcdFx0KGNhdF9wb2ludCA+IDAgPyAnXFxuJyA6ICcnKSArXG5cdFx0XHRcdFx0bmV3Y2F0c3RyaW5nICtcblx0XHRcdFx0XHQob25DYXQgPyAnJyA6ICdcXG4nKTtcblx0XHRcdFx0d2lraXRleHQgKz0gc3VmZml4Lmxlbmd0aCA+IDAgJiYgc3VmZml4LnNsaWNlKDAsIDEpICE9PSAnXFxuJyA/IGBcXG4ke3N1ZmZpeH1gIDogc3VmZml4O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKHdpa2l0ZXh0Lmxlbmd0aCA+IDAgJiYgd2lraXRleHQuc2xpY2UoLTEsIHdpa2l0ZXh0Lmxlbmd0aCAtIDEgKyAxKSAhPT0gJ1xcbicpIHtcblx0XHRcdFx0XHR3aWtpdGV4dCArPSAnXFxuJztcblx0XHRcdFx0fVxuXHRcdFx0XHR3aWtpdGV4dCArPSAod2lraXRleHQubGVuZ3RoID4gMCA/ICdcXG4nIDogJycpICsgbmV3Y2F0c3RyaW5nO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGtleUNoYW5nZSkge1xuXHRcdFx0XHRsZXQgayA9IGtleSB8fCAnJztcblx0XHRcdFx0aWYgKGsubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGsgPSBrLnNsaWNlKDEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN1bW1hcnlbc3VtbWFyeS5sZW5ndGhdID0gZ2V0TWVzc2FnZSgnbWVzc2FnZXMtY2F0X2tleWNoYW5nZScsIHRvQWRkLCBrKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHN1bW1hcnlbc3VtbWFyeS5sZW5ndGhdID0gZ2V0TWVzc2FnZSgnbWVzc2FnZXMtY2F0X2FkZGVkJywgdG9BZGQpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKEhDLnVuY2F0X3JlZ2V4cCAmJiAhaXNfaGlkZGVuKSB7XG5cdFx0XHRcdGNvbnN0IHR4dCA9IHdpa2l0ZXh0LnJlcGxhY2UoSEMudW5jYXRfcmVnZXhwLCAnJyk7IC8vIFJlbW92ZSBcInVuY2F0XCIgdGVtcGxhdGVzXG5cdFx0XHRcdGlmICh0eHQubGVuZ3RoICE9PSB3aWtpdGV4dC5sZW5ndGgpIHtcblx0XHRcdFx0XHR3aWtpdGV4dCA9IHR4dDtcblx0XHRcdFx0XHRzdW1tYXJ5W3N1bW1hcnkubGVuZ3RoXSA9IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXVuY2F0X3JlbW92ZWQnKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0dGV4dDogd2lraXRleHQsXG5cdFx0XHRzdW1tYXJ5LFxuXHRcdFx0ZXJyb3I6IG51bGwsXG5cdFx0fTtcblx0fTtcblx0Ly8gVGhlIHJlYWwgSG90Q2F0IFVJXG5cdGNvbnN0IGV2dEtleXMgPSAoe2N0cmxLZXksIG1ldGFLZXksIHNoaWZ0S2V5fSkgPT4ge1xuXHRcdGxldCBjb2RlID0gMDtcblx0XHRpZiAoY3RybEtleSkge1xuXHRcdFx0Ly8gQWxsIG1vZGVybiBicm93c2Vyc1xuXHRcdFx0Ly8gQ3RybC1jbGljayBzZWVtcyB0byBiZSBvdmVybG9hZGVkIGluIEZGL01hYyAoaXQgb3BlbnMgYSBwb3AtdXAgbWVudSksIHNvIHRyZWF0IGNtZC1jbGlja1xuXHRcdFx0Ly8gYXMgYSBjdHJsLWNsaWNrLCB0b28uXG5cdFx0XHRpZiAoY3RybEtleSB8fCBtZXRhS2V5KSB7XG5cdFx0XHRcdGNvZGUgfHw9IDE7XG5cdFx0XHR9XG5cdFx0XHRpZiAoc2hpZnRLZXkpIHtcblx0XHRcdFx0Y29kZSB8fD0gMjtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGNvZGU7XG5cdH07XG5cdGNvbnN0IGV2dEtpbGwgPSAoZSkgPT4ge1xuXHRcdGlmIChlLnByZXZlbnREZWZhdWx0KSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRlLmNhbmNlbEJ1YmJsZSA9IHRydWU7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblx0bGV0IGNhdExpbmUgPSBudWxsOyAvLyB0cnVlIGlmIE1lZGlhV2lraSBzZXJ2ZXMgdGhlIG5ldyBVTC1MSSBET00gZm9yIGNhdGVnb3JpZXNcblx0bGV0IG9uVXBsb2FkID0gZmFsc2U7XG5cdGxldCBlZGl0b3JzID0gW107XG5cdGxldCBjb21taXRCdXR0b24gPSBudWxsO1xuXHRsZXQgY29tbWl0Rm9ybSA9IG51bGw7XG5cdGxldCBtdWx0aVNwYW4gPSBudWxsO1xuXHRsZXQgcGFnZVRleHQgPSBudWxsO1xuXHRsZXQgcGFnZVRpbWUgPSBudWxsO1xuXHRsZXQgcGFnZVdhdGNoZWQgPSBmYWxzZTtcblx0bGV0IHdhdGNoQ3JlYXRlID0gZmFsc2U7XG5cdGxldCB3YXRjaEVkaXQgPSBmYWxzZTtcblx0bGV0IG1pbm9yRWRpdHMgPSBmYWxzZTtcblx0bGV0IGVkaXRUb2tlbiA9IG51bGw7XG5cdGxldCBpc19ydGwgPSBmYWxzZTtcblx0bGV0IHNlcnZlclRpbWUgPSBudWxsO1xuXHRsZXQgbGFzdFJldklkID0gbnVsbDtcblx0bGV0IHBhZ2VUZXh0UmV2SWQgPSBudWxsO1xuXHRsZXQgY29uZmxpY3RpbmdVc2VyID0gbnVsbDtcblx0bGV0IG5ld0RPTSA9IGZhbHNlO1xuXHRjb25zdCBVTkNIQU5HRUQgPSAwO1xuXHRjb25zdCBPUEVOID0gMTsgLy8gT3BlbiwgYnV0IG5vIGlucHV0IHlldFxuXHRjb25zdCBDSEFOR0VfUEVORElORyA9IDI7IC8vIE9wZW4sIHNvbWUgaW5wdXQgbWFkZVxuXHRjb25zdCBDSEFOR0VEID0gMztcblx0Y29uc3QgREVMRVRFRCA9IDQ7XG5cdGNvbnN0IHNldFBhZ2UgPSAoZGF0YSkgPT4ge1xuXHRcdGxldCBzdGFydFRpbWUgPSBudWxsO1xuXHRcdGlmIChkYXRhICYmIGRhdGEucXVlcnkpIHtcblx0XHRcdGlmIChkYXRhLnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdGNvbnN0IFtwYWdlXSA9IGRhdGEucXVlcnkucGFnZXM7XG5cdFx0XHRcdGlmIChwYWdlKSB7XG5cdFx0XHRcdFx0aWYgKHBhZ2UucmV2aXNpb25zICYmIHBhZ2UucmV2aXNpb25zLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdC8vIFJldmlzaW9ucyBhcmUgc29ydGVkIGJ5IHJldmlzaW9uIElELCBoZW5jZSBbMF0gaXMgdGhlIG9uZSB3ZSBhc2tlZCBmb3IsIGFuZCBwb3NzaWJseSB0aGVyZSdzIGEgWzFdIGlmIHdlJ3JlXG5cdFx0XHRcdFx0XHQvLyBub3Qgb24gdGhlIGxhdGVzdCByZXZpc2lvbiAoZWRpdCBjb25mbGljdHMgYW5kIHN1Y2gpLlxuXHRcdFx0XHRcdFx0cGFnZVRleHQgPSBwYWdlLnJldmlzaW9uc1swXS5zbG90cy5tYWluLmNvbnRlbnQ7XG5cdFx0XHRcdFx0XHRpZiAocGFnZS5yZXZpc2lvbnNbMF0udGltZXN0YW1wKSB7XG5cdFx0XHRcdFx0XHRcdHBhZ2VUaW1lID0gcGFnZS5yZXZpc2lvbnNbMF0udGltZXN0YW1wLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAocGFnZS5yZXZpc2lvbnNbMF0ucmV2aWQpIHtcblx0XHRcdFx0XHRcdFx0cGFnZVRleHRSZXZJZCA9IHBhZ2UucmV2aXNpb25zWzBdLnJldmlkO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKHBhZ2UucmV2aXNpb25zLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRcdFx0Y29uZmxpY3RpbmdVc2VyID0gcGFnZS5yZXZpc2lvbnNbMV0udXNlcjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHBhZ2UubGFzdHJldmlkKSB7XG5cdFx0XHRcdFx0XHRsYXN0UmV2SWQgPSBwYWdlLmxhc3RyZXZpZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHBhZ2Uuc3RhcnR0aW1lc3RhbXApIHtcblx0XHRcdFx0XHRcdHN0YXJ0VGltZSA9IHBhZ2Uuc3RhcnR0aW1lc3RhbXAucmVwbGFjZSgvXFxEL2csICcnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cGFnZVdhdGNoZWQgPSB0eXBlb2YgcGFnZS53YXRjaGVkID09PSAnc3RyaW5nJztcblx0XHRcdFx0XHRpZiAoZGF0YS5xdWVyeS50b2tlbnMpIHtcblx0XHRcdFx0XHRcdGVkaXRUb2tlbiA9IGRhdGEucXVlcnkudG9rZW5zLmNzcmZ0b2tlbjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHBhZ2UubGFuZ2xpbmtzICYmICghZGF0YVsncXVlcnktY29udGludWUnXSB8fCAhZGF0YVsncXVlcnktY29udGludWUnXS5sYW5nbGlua3MpKSB7XG5cdFx0XHRcdFx0XHQvLyBXZSBoYXZlIGludGVybGFuZ3VhZ2UgbGlua3MsIGFuZCB3ZSBnb3QgdGhlbSBhbGwuXG5cdFx0XHRcdFx0XHRsZXQgcmUgPSAnJztcblx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcGFnZS5sYW5nbGlua3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdFx0cmUgKz1cblx0XHRcdFx0XHRcdFx0XHQoaSA+IDAgPyAnfCcgOiAnJykgKyBwYWdlLmxhbmdsaW5rc1tpXS5sYW5nLnJlcGxhY2UoLyhbJCgpKisuP1xcXFxeXSkvZywgU3RyaW5nLnJhd2BcXCQxYCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAocmUubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdFx0XHRpbnRlcmxhbmd1YWdlUkUgPSBuZXcgUmVnRXhwKGAoKF58XFxcXG5cXFxccj8pKFxcXFxbXFxcXFtcXFxccyooJHtyZX0pXFxcXHMqOlteXFxcXF1dK1xcXFxdXFxcXF1cXFxccyopKSskYCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBTaXRlaW5mb1xuXHRcdFx0aWYgKGRhdGEucXVlcnkuZ2VuZXJhbCkge1xuXHRcdFx0XHRpZiAoZGF0YS5xdWVyeS5nZW5lcmFsLnRpbWUgJiYgIXN0YXJ0VGltZSkge1xuXHRcdFx0XHRcdHN0YXJ0VGltZSA9IGRhdGEucXVlcnkuZ2VuZXJhbC50aW1lLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKEhDLmNhcGl0YWxpemVQYWdlTmFtZXMgPT09IG51bGwpIHtcblx0XHRcdFx0XHQvLyBSZXNvdXJjZUxvYWRlcidzIEpTUGFyc2VyIGRvZXNuJ3QgbGlrZSAuY2FzZSwgc28gb3ZlcnJpZGUgZXNsaW50LlxuXHRcdFx0XHRcdEhDLmNhcGl0YWxpemVQYWdlTmFtZXMgPSBkYXRhLnF1ZXJ5LmdlbmVyYWwuY2FzZSA9PT0gJ2ZpcnN0LWxldHRlcic7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHNlcnZlclRpbWUgPSBzdGFydFRpbWU7XG5cdFx0XHQvLyBVc2VyaW5mb1xuXHRcdFx0aWYgKGRhdGEucXVlcnkudXNlcmluZm8gJiYgZGF0YS5xdWVyeS51c2VyaW5mby5vcHRpb25zKSB7XG5cdFx0XHRcdHdhdGNoQ3JlYXRlID0gIUhDLmRvbnRfYWRkX3RvX3dhdGNobGlzdCAmJiBkYXRhLnF1ZXJ5LnVzZXJpbmZvLm9wdGlvbnMud2F0Y2hjcmVhdGlvbnMgPT09ICcxJztcblx0XHRcdFx0d2F0Y2hFZGl0ID0gIUhDLmRvbnRfYWRkX3RvX3dhdGNobGlzdCAmJiBkYXRhLnF1ZXJ5LnVzZXJpbmZvLm9wdGlvbnMud2F0Y2hkZWZhdWx0ID09PSAnMSc7XG5cdFx0XHRcdG1pbm9yRWRpdHMgPSBkYXRhLnF1ZXJ5LnVzZXJpbmZvLm9wdGlvbnMubWlub3JkZWZhdWx0ID09PSAxO1xuXHRcdFx0XHQvLyBJZiB0aGUgdXNlciBoYXMgdGhlIFwiQWxsIGVkaXRzIGFyZSBtaW5vclwiIHByZWZlcmVuY2UgZW5hYmxlZCwgd2Ugc2hvdWxkIGhvbm9yIHRoYXRcblx0XHRcdFx0Ly8gZm9yIHNpbmdsZSBjYXRlZ29yeSBjaGFuZ2VzLCBubyBtYXR0ZXIgd2hhdCB0aGUgc2l0ZSBjb25maWd1cmF0aW9uIGlzLlxuXHRcdFx0XHRpZiAobWlub3JFZGl0cykge1xuXHRcdFx0XHRcdEhDLnNpbmdsZV9taW5vciA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdGxldCBzYXZlSW5Qcm9ncmVzcyA9IGZhbHNlO1xuXHRjb25zdCBpbml0aWF0ZUVkaXQgPSAoZG9FZGl0LCBmYWlsdXJlKSA9PiB7XG5cdFx0aWYgKHNhdmVJblByb2dyZXNzKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHNhdmVJblByb2dyZXNzID0gdHJ1ZTtcblx0XHRsZXQgb2xkQnV0dG9uU3RhdGU7XG5cdFx0aWYgKGNvbW1pdEJ1dHRvbikge1xuXHRcdFx0b2xkQnV0dG9uU3RhdGUgPSBjb21taXRCdXR0b24uZGlzYWJsZWQ7XG5cdFx0XHRjb21taXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuXHRcdH1cblx0XHRjb25zdCBmYWlsID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcblx0XHRcdHNhdmVJblByb2dyZXNzID0gZmFsc2U7XG5cdFx0XHRpZiAoY29tbWl0QnV0dG9uKSB7XG5cdFx0XHRcdGNvbW1pdEJ1dHRvbi5kaXNhYmxlZCA9IG9sZEJ1dHRvblN0YXRlO1xuXHRcdFx0fVxuXHRcdFx0ZmFpbHVyZS5hcHBseSh0aGlzLCBhcmdzKTtcblx0XHR9O1xuXHRcdC8vIE11c3QgdXNlIEFqYXggaGVyZSB0byBnZXQgdGhlIHVzZXIgb3B0aW9ucyBhbmQgdGhlIGVkaXQgdG9rZW4uXG5cdFx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRyYXdjb250aW51ZTogJycsXG5cdFx0XHR0aXRsZXM6IGNvbmYud2dQYWdlTmFtZSxcblx0XHRcdHByb3A6IFsnaW5mbycsICdyZXZpc2lvbnMnLCAnbGFuZ2xpbmtzJ10sXG5cdFx0XHRpbnByb3A6ICd3YXRjaGVkJyxcblx0XHRcdHJ2cHJvcDogWydjb250ZW50JywgJ3RpbWVzdGFtcCcsICdpZHMnLCAndXNlciddLFxuXHRcdFx0cnZzbG90czogJ21haW4nLFxuXHRcdFx0cnZsaW1pdDogJzInLFxuXHRcdFx0cnZkaXI6ICduZXdlcicsXG5cdFx0XHRydnN0YXJ0aWQ6IGNvbmYud2dDdXJSZXZpc2lvbklkLFxuXHRcdFx0bGxsaW1pdDogJzUwMCcsXG5cdFx0XHRtZXRhOiBbJ3NpdGVpbmZvJywgJ3VzZXJpbmZvJywgJ3Rva2VucyddLFxuXHRcdFx0dHlwZTogJ2NzcmYnLFxuXHRcdFx0dWlwcm9wOiBbJ29wdGlvbnMnXSxcblx0XHR9O1xuXHRcdGFwaS5nZXQocGFyYW1zKVxuXHRcdFx0LmRvbmUoKGRhdGEpID0+IHtcblx0XHRcdFx0c2V0UGFnZShkYXRhKTtcblx0XHRcdFx0ZG9FZGl0KGZhaWwpO1xuXHRcdFx0fSlcblx0XHRcdC5mYWlsKCh7c3RhdHVzLCBzdGF0dXNUZXh0fSkgPT4ge1xuXHRcdFx0XHRmYWlsKGAke3N0YXR1c30gJHtzdGF0dXNUZXh0fWApO1xuXHRcdFx0fSk7XG5cdH07XG5cdGNvbnN0IG11bHRpQ2hhbmdlTXNnID0gKGNvdW50KSA9PiB7XG5cdFx0cmV0dXJuIGdldE1lc3NhZ2UoJ21lc3NhZ2VzLW11bHRpX2NoYW5nZScsIFN0cmluZyhjb3VudCkpO1xuXHR9O1xuXHRjb25zdCBjdXJyZW50VGltZXN0YW1wID0gKCkgPT4ge1xuXHRcdGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG5cdFx0bGV0IHRzID0gU3RyaW5nKG5vdy5nZXRVVENGdWxsWWVhcigpKTtcblx0XHRjb25zdCB0d28gPSAocykgPT4ge1xuXHRcdFx0cmV0dXJuIHMuc2xpY2UoLTIpO1xuXHRcdH07XG5cdFx0dHMgKz1cblx0XHRcdHR3byhgMCR7bm93LmdldFVUQ01vbnRoKCkgKyAxfWApICtcblx0XHRcdHR3byhgMCR7bm93LmdldFVUQ0RhdGUoKX1gKSArXG5cdFx0XHR0d28oYDAwJHtub3cuZ2V0VVRDSG91cnMoKX1gKSArXG5cdFx0XHR0d28oYDAwJHtub3cuZ2V0VVRDTWludXRlcygpfWApICtcblx0XHRcdHR3byhgMDAke25vdy5nZXRVVENTZWNvbmRzKCl9YCk7XG5cdFx0cmV0dXJuIHRzO1xuXHR9O1xuXHRjb25zdCBwZXJmb3JtQ2hhbmdlcyA9IChmYWlsdXJlLCBzaW5nbGVFZGl0b3IpID0+IHtcblx0XHRpZiAocGFnZVRleHQgPT09IG51bGwpIHtcblx0XHRcdGZhaWx1cmUoZ2V0TWVzc2FnZSgnbWVzc2FnZXMtbXVsdGlfZXJyb3InKSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vIENyZWF0ZSBhIGZvcm0gYW5kIHN1Ym1pdCBpdC4gV2UgZG9uJ3QgdXNlIHRoZSBlZGl0IEFQSSAoYXBpLnBocD9hY3Rpb249ZWRpdCkgYmVjYXVzZVxuXHRcdC8vIChhKSBzZW5zaWJseSByZXBvcnRpbmcgYmFjayBlcnJvcnMgbGlrZSBlZGl0IGNvbmZsaWN0cyBpcyBhbHdheXMgYSBoYXNzbGUsIGFuZFxuXHRcdC8vIChiKSB3ZSB3YW50IHRvIHNob3cgYSBkaWZmIGZvciBtdWx0aS1lZGl0cyBhbnl3YXksIGFuZFxuXHRcdC8vIChjKSB3ZSB3YW50IHRvIHRyaWdnZXIgb25zdWJtaXQgZXZlbnRzLCBhbGxvd2luZyB1c2VyIGNvZGUgdG8gaW50ZXJjZXB0IHRoZSBlZGl0LlxuXHRcdC8vIFVzaW5nIHRoZSBmb3JtLCB3ZSBjYW4gZG8gKGIpIGFuZCAoYyksIGFuZCB3ZSBnZXQgKGEpIGZvciBmcmVlLiBBbmQsIG9mIGNvdXJzZSwgdXNpbmcgdGhlIGZvcm1cblx0XHQvLyBhdXRvbWF0aWNhbGx5IHJlbG9hZHMgdGhlIHBhZ2Ugd2l0aCB0aGUgdXBkYXRlZCBjYXRlZ29yaWVzIG9uIGEgc3VjY2Vzc2Z1bCBzdWJtaXQsIHdoaWNoXG5cdFx0Ly8gd2Ugd291bGQgaGF2ZSB0byBkbyBleHBsaWNpdGx5IGlmIHdlIHVzZWQgdGhlIGVkaXQgQVBJLlxuXHRcdGxldCBhY3Rpb247XG5cdFx0Ly8gTm9ybWFsbHksIHdlIGRvbid0IGhhdmUgdG8gY2FyZSBhYm91dCBlZGl0IGNvbmZsaWN0cy4gSWYgc29tZSBvdGhlciB1c2VyIGVkaXRlZCB0aGUgcGFnZSBpbiB0aGUgbWVhbnRpbWUsIHRoZVxuXHRcdC8vIHNlcnZlciB3aWxsIHRha2UgY2FyZSBvZiBpdCBhbmQgbWVyZ2UgdGhlIGVkaXQgYXV0b21hdGljYWxseSBvciBwcmVzZW50IGFuIGVkaXQgY29uZmxpY3Qgc2NyZWVuLiBIb3dldmVyLCB0aGVcblx0XHQvLyBzZXJ2ZXIgc3VwcHJlc3NlcyBlZGl0IGNvbmZsaWN0cyB3aXRoIG9uZXNlbGYuIEhlbmNlLCBpZiB3ZSBoYXZlIGEgY29uZmxpY3QsIGFuZCB0aGUgY29uZmxpY3RpbmcgdXNlciBpcyB0aGVcblx0XHQvLyBjdXJyZW50IHVzZXIsIHRoZW4gd2Ugc2V0IHRoZSBcIm9sZGlkXCIgdmFsdWUgYW5kIHN3aXRjaCB0byBkaWZmLCB3aGljaCBnaXZlcyB0aGUgXCJ5b3UgYXJlIGVkaXRpbmcgYW4gb2xkIHZlcnNpb247XG5cdFx0Ly8gaWYgeW91IHNhdmUsIGFueSBtb3JlIHJlY2VudCBjaGFuZ2VzIHdpbGwgYmUgbG9zdFwiIHNjcmVlbi5cblx0XHRjb25zdCBzZWxmRWRpdENvbmZsaWN0ID1cblx0XHRcdCgobGFzdFJldklkICE9PSBudWxsICYmIGxhc3RSZXZJZCAhPT0gY29uZi53Z0N1clJldmlzaW9uSWQpIHx8XG5cdFx0XHRcdChwYWdlVGV4dFJldklkICE9PSBudWxsICYmIHBhZ2VUZXh0UmV2SWQgIT09IGNvbmYud2dDdXJSZXZpc2lvbklkKSkgJiZcblx0XHRcdGNvbmZsaWN0aW5nVXNlciAmJlxuXHRcdFx0Y29uZmxpY3RpbmdVc2VyID09PSBjb25mLndnVXNlck5hbWU7XG5cdFx0aWYgKHNpbmdsZUVkaXRvciAmJiAhc2luZ2xlRWRpdG9yLm5vQ29tbWl0ICYmICFIQy5ub19hdXRvY29tbWl0ICYmIGVkaXRUb2tlbiAmJiAhc2VsZkVkaXRDb25mbGljdCkge1xuXHRcdFx0Ly8gSWYgd2UgZG8gaGF2ZSBhbiBlZGl0IGNvbmZsaWN0LCBidXQgbm90IHdpdGggb3Vyc2VsZiwgdGhhdCdzIG5vIHJlYXNvbiBub3QgdG8gYXR0ZW1wdCB0byBzYXZlOiB0aGUgc2VydmVyIHNpZGUgbWF5IGFjdHVhbGx5IGJlIGFibGUgdG9cblx0XHRcdC8vIG1lcmdlIHRoZSBjaGFuZ2VzLiBXZSBqdXN0IG5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgd2UgZG8gcHJlc2VudCBhIGRpZmYgdmlldyBpZiBpdCdzIGEgc2VsZiBlZGl0IGNvbmZsaWN0LlxuXHRcdFx0Y29tbWl0Rm9ybS53cEVkaXRUb2tlbi52YWx1ZSA9IGVkaXRUb2tlbjtcblx0XHRcdGFjdGlvbiA9IGNvbW1pdEZvcm0ud3BEaWZmO1xuXHRcdFx0aWYgKGFjdGlvbikge1xuXHRcdFx0XHRhY3Rpb24udmFsdWUgPSAnd3BTYXZlJztcblx0XHRcdFx0YWN0aW9uLm5hbWUgPSBhY3Rpb24udmFsdWU7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGFjdGlvbiA9IGNvbW1pdEZvcm0ud3BTYXZlO1xuXHRcdFx0aWYgKGFjdGlvbikge1xuXHRcdFx0XHRhY3Rpb24udmFsdWUgPSAnd3BEaWZmJztcblx0XHRcdFx0YWN0aW9uLm5hbWUgPSBhY3Rpb24udmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGxldCByZXN1bHQgPSB7XG5cdFx0XHR0ZXh0OiBwYWdlVGV4dCxcblx0XHR9O1xuXHRcdGNvbnN0IGNoYW5nZWQgPSBbXTtcblx0XHRjb25zdCBhZGRlZCA9IFtdO1xuXHRcdGNvbnN0IGRlbGV0ZWQgPSBbXTtcblx0XHRjb25zdCB0b0VkaXQgPSBzaW5nbGVFZGl0b3IgPyBbc2luZ2xlRWRpdG9yXSA6IGVkaXRvcnM7XG5cdFx0bGV0IGVkaXQ7XG5cdFx0bGV0IGk7XG5cdFx0bGV0IGVycm9yID0gbnVsbDtcblx0XHRsZXQgY2hhbmdlcyA9IDA7XG5cdFx0Zm9yIChpID0gMDsgaSA8IHRvRWRpdC5sZW5ndGg7IGkrKykge1xuXHRcdFx0ZWRpdCA9IHRvRWRpdFtpXTtcblx0XHRcdGlmIChlZGl0LnN0YXRlID09PSBDSEFOR0VEKSB7XG5cdFx0XHRcdHJlc3VsdCA9IGNoYW5nZV9jYXRlZ29yeShcblx0XHRcdFx0XHRyZXN1bHQudGV4dCxcblx0XHRcdFx0XHRlZGl0Lm9yaWdpbmFsQ2F0ZWdvcnksXG5cdFx0XHRcdFx0ZWRpdC5jdXJyZW50Q2F0ZWdvcnksXG5cdFx0XHRcdFx0ZWRpdC5jdXJyZW50S2V5LFxuXHRcdFx0XHRcdGVkaXQuY3VycmVudEhpZGRlblxuXHRcdFx0XHQpO1xuXHRcdFx0XHRpZiAoIXJlc3VsdC5lcnJvcikge1xuXHRcdFx0XHRcdGNoYW5nZXMrKztcblx0XHRcdFx0XHRpZiAoIWVkaXQub3JpZ2luYWxDYXRlZ29yeSB8fCBlZGl0Lm9yaWdpbmFsQ2F0ZWdvcnkubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0XHRhZGRlZFthZGRlZC5sZW5ndGhdID0gZWRpdC5jdXJyZW50Q2F0ZWdvcnk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGNoYW5nZWRbY2hhbmdlZC5sZW5ndGhdID0ge1xuXHRcdFx0XHRcdFx0XHRmcm9tOiBlZGl0Lm9yaWdpbmFsQ2F0ZWdvcnksXG5cdFx0XHRcdFx0XHRcdHRvOiBlZGl0LmN1cnJlbnRDYXRlZ29yeSxcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKGVycm9yID09PSBudWxsKSB7XG5cdFx0XHRcdFx0KHtlcnJvcn0gPSByZXN1bHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGVkaXQuc3RhdGUgPT09IERFTEVURUQgJiYgZWRpdC5vcmlnaW5hbENhdGVnb3J5ICYmIGVkaXQub3JpZ2luYWxDYXRlZ29yeS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHJlc3VsdCA9IGNoYW5nZV9jYXRlZ29yeShyZXN1bHQudGV4dCwgZWRpdC5vcmlnaW5hbENhdGVnb3J5LCBudWxsLCBudWxsLCBmYWxzZSk7XG5cdFx0XHRcdGlmICghcmVzdWx0LmVycm9yKSB7XG5cdFx0XHRcdFx0Y2hhbmdlcysrO1xuXHRcdFx0XHRcdGRlbGV0ZWRbZGVsZXRlZC5sZW5ndGhdID0gZWRpdC5vcmlnaW5hbENhdGVnb3J5O1xuXHRcdFx0XHR9IGVsc2UgaWYgKGVycm9yID09PSBudWxsKSB7XG5cdFx0XHRcdFx0KHtlcnJvcn0gPSByZXN1bHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChlcnJvciAhPT0gbnVsbCkge1xuXHRcdFx0Ly8gRG8gbm90IGNvbW1pdCBpZiB0aGVyZSB3ZXJlIGVycm9yc1xuXHRcdFx0YWN0aW9uID0gY29tbWl0Rm9ybS53cFNhdmU7XG5cdFx0XHRpZiAoYWN0aW9uKSB7XG5cdFx0XHRcdGFjdGlvbi52YWx1ZSA9ICd3cERpZmYnO1xuXHRcdFx0XHRhY3Rpb24ubmFtZSA9IGFjdGlvbi52YWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gRmlsbCBpbiB0aGUgZm9ybSBhbmQgc3VibWl0IGl0XG5cdFx0Y29tbWl0Rm9ybS53cE1pbm9yZWRpdC5jaGVja2VkID0gbWlub3JFZGl0cztcblx0XHRjb21taXRGb3JtLndwV2F0Y2h0aGlzLmNoZWNrZWQgPSAoIWNvbmYud2dBcnRpY2xlSWQgJiYgd2F0Y2hDcmVhdGUpIHx8IHdhdGNoRWRpdCB8fCBwYWdlV2F0Y2hlZDtcblx0XHRpZiAoY29uZi53Z0FydGljbGVJZCB8fCAhIXNpbmdsZUVkaXRvcikge1xuXHRcdFx0Ly8gUHJlcGFyZSBjaGFuZ2UtdGFnIHNhdmVcblx0XHRcdGlmIChhY3Rpb24gJiYgYWN0aW9uLnZhbHVlID09PSAnd3BTYXZlJykge1xuXHRcdFx0XHRpZiAoSEMuY2hhbmdlVGFnKSB7XG5cdFx0XHRcdFx0Y29tbWl0Rm9ybS53cENoYW5nZVRhZ3MudmFsdWUgPSBIQy5jaGFuZ2VUYWc7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbW1pdEZvcm0ud3BBdXRvU3VtbWFyeS52YWx1ZSA9IEhDLmNoYW5nZVRhZztcblx0XHRcdH1cblx0XHRcdGlmIChjaGFuZ2VzID09PSAxKSB7XG5cdFx0XHRcdGlmIChyZXN1bHQuc3VtbWFyeSAmJiByZXN1bHQuc3VtbWFyeS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0Y29tbWl0Rm9ybS53cFN1bW1hcnkudmFsdWUgPVxuXHRcdFx0XHRcdFx0KEhDLmNoYW5nZVRhZyA/ICcnIDogZ2V0TWVzc2FnZSgnbWVzc2FnZXMtcHJlZml4JykpICtcblx0XHRcdFx0XHRcdHJlc3VsdC5zdW1tYXJ5LmpvaW4oZ2V0TWVzc2FnZSgnbWVzc2FnZXMtc2VwYXJhdG9yJykpICtcblx0XHRcdFx0XHRcdChIQy5jaGFuZ2VUYWcgPyAnJyA6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXVzaW5nJykpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbW1pdEZvcm0ud3BNaW5vcmVkaXQuY2hlY2tlZCA9IEhDLnNpbmdsZV9taW5vciB8fCBtaW5vckVkaXRzO1xuXHRcdFx0fSBlbHNlIGlmIChjaGFuZ2VzKSB7XG5cdFx0XHRcdGxldCBzdW1tYXJ5ID0gW107XG5cdFx0XHRcdGNvbnN0IHNob3J0U3VtbWFyeSA9IFtdO1xuXHRcdFx0XHQvLyBEZWxldGVkXG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBkZWxldGVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0c3VtbWFyeVtzdW1tYXJ5Lmxlbmd0aF0gPSBg4oiSJHtnZXRNZXNzYWdlKCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLCBkZWxldGVkW2ldKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkZWxldGVkLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRcdHNob3J0U3VtbWFyeVtzaG9ydFN1bW1hcnkubGVuZ3RoXSA9IGDiiJIke2dldE1lc3NhZ2UoJ21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsIGRlbGV0ZWRbMF0pfWA7XG5cdFx0XHRcdH0gZWxzZSBpZiAoZGVsZXRlZC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0c2hvcnRTdW1tYXJ5W3Nob3J0U3VtbWFyeS5sZW5ndGhdID0gYOKIkiAke211bHRpQ2hhbmdlTXNnKGRlbGV0ZWQubGVuZ3RoKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIEFkZGVkXG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBhZGRlZC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdHN1bW1hcnlbc3VtbWFyeS5sZW5ndGhdID0gYCske2dldE1lc3NhZ2UoJ21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsIGFkZGVkW2ldKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChhZGRlZC5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0XHRzaG9ydFN1bW1hcnlbc2hvcnRTdW1tYXJ5Lmxlbmd0aF0gPSBgKyR7Z2V0TWVzc2FnZSgnbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJywgYWRkZWRbMF0pfWA7XG5cdFx0XHRcdH0gZWxzZSBpZiAoYWRkZWQubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHNob3J0U3VtbWFyeVtzaG9ydFN1bW1hcnkubGVuZ3RoXSA9IGArICR7bXVsdGlDaGFuZ2VNc2coYWRkZWQubGVuZ3RoKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIENoYW5nZWRcblx0XHRcdFx0Y29uc3QgYXJyb3cgPSBpc19ydGwgPyAnXFx1MjE5MCcgOiAnXFx1MjE5Mic7IC8vIGxlZnQgYW5kIHJpZ2h0IGFycm93cy4gRG9uJ3QgdXNlIOKGkCBhbmQg4oaSIGluIHRoZSBjb2RlLlxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2hhbmdlZC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChjaGFuZ2VkW2ldLmZyb20gPT09IGNoYW5nZWRbaV0udG8pIHtcblx0XHRcdFx0XHRcdHN1bW1hcnlbc3VtbWFyeS5sZW5ndGhdID0gYMKxJHtnZXRNZXNzYWdlKCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLCBjaGFuZ2VkW2ldLmZyb20pfWA7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHN1bW1hcnlbc3VtbWFyeS5sZW5ndGhdID1cblx0XHRcdFx0XHRcdFx0YMKxJHtnZXRNZXNzYWdlKCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLCBjaGFuZ2VkW2ldLmZyb20pfSR7YXJyb3d9JHtnZXRNZXNzYWdlKFxuXHRcdFx0XHRcdFx0XHRcdCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLFxuXHRcdFx0XHRcdFx0XHRcdGNoYW5nZWRbaV0udG9cblx0XHRcdFx0XHRcdFx0KX1gO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoY2hhbmdlZC5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0XHRpZiAoY2hhbmdlZFswXS5mcm9tID09PSBjaGFuZ2VkWzBdLnRvKSB7XG5cdFx0XHRcdFx0XHRzaG9ydFN1bW1hcnlbc2hvcnRTdW1tYXJ5Lmxlbmd0aF0gPVxuXHRcdFx0XHRcdFx0XHRgwrEke2dldE1lc3NhZ2UoJ21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsIGNoYW5nZWRbMF0uZnJvbSl9YDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0c2hvcnRTdW1tYXJ5W3Nob3J0U3VtbWFyeS5sZW5ndGhdID1cblx0XHRcdFx0XHRcdFx0YMKxJHtnZXRNZXNzYWdlKCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLCBjaGFuZ2VkWzBdLmZyb20pfSR7YXJyb3d9JHtnZXRNZXNzYWdlKFxuXHRcdFx0XHRcdFx0XHRcdCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLFxuXHRcdFx0XHRcdFx0XHRcdGNoYW5nZWRbMF0udG9cblx0XHRcdFx0XHRcdFx0KX1gO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmIChjaGFuZ2VkLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRzaG9ydFN1bW1hcnlbc2hvcnRTdW1tYXJ5Lmxlbmd0aF0gPSBgwrEgJHttdWx0aUNoYW5nZU1zZyhjaGFuZ2VkLmxlbmd0aCl9YDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoc3VtbWFyeS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0c3VtbWFyeSA9IHN1bW1hcnkuam9pbihnZXRNZXNzYWdlKCdtZXNzYWdlcy1zZXBhcmF0b3InKSk7XG5cdFx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdFx0c3VtbWFyeS5sZW5ndGggPlxuXHRcdFx0XHRcdFx0MjAwIC1cblx0XHRcdFx0XHRcdFx0KEhDLmNoYW5nZVRhZyA/ICcnIDogZ2V0TWVzc2FnZSgnbWVzc2FnZXMtcHJlZml4JykpLmxlbmd0aCAtXG5cdFx0XHRcdFx0XHRcdChIQy5jaGFuZ2VUYWcgPyAnJyA6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXVzaW5nJykpLmxlbmd0aFxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0c3VtbWFyeSA9IHNob3J0U3VtbWFyeS5qb2luKGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXNlcGFyYXRvcicpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29tbWl0Rm9ybS53cFN1bW1hcnkudmFsdWUgPVxuXHRcdFx0XHRcdFx0KEhDLmNoYW5nZVRhZyA/ICcnIDogZ2V0TWVzc2FnZSgnbWVzc2FnZXMtcHJlZml4JykpICtcblx0XHRcdFx0XHRcdHN1bW1hcnkgK1xuXHRcdFx0XHRcdFx0KEhDLmNoYW5nZVRhZyA/ICcnIDogZ2V0TWVzc2FnZSgnbWVzc2FnZXMtdXNpbmcnKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y29tbWl0Rm9ybS53cFRleHRib3gxLnZhbHVlID0gcmVzdWx0LnRleHQ7XG5cdFx0Y29tbWl0Rm9ybS53cFN0YXJ0dGltZS52YWx1ZSA9IHNlcnZlclRpbWUgfHwgY3VycmVudFRpbWVzdGFtcCgpO1xuXHRcdGNvbW1pdEZvcm0ud3BFZGl0dGltZS52YWx1ZSA9IHBhZ2VUaW1lIHx8IGNvbW1pdEZvcm0ud3BTdGFydHRpbWUudmFsdWU7XG5cdFx0aWYgKHNlbGZFZGl0Q29uZmxpY3QpIHtcblx0XHRcdGNvbW1pdEZvcm0ub2xkaWQudmFsdWUgPSBTdHJpbmcocGFnZVRleHRSZXZJZCB8fCBjb25mLndnQ3VyUmV2aXNpb25JZCk7XG5cdFx0fVxuXHRcdC8vIFN1Ym1pdCB0aGUgZm9ybSBpbiBhIHdheSB0aGF0IHRyaWdnZXJzIG9uc3VibWl0IGV2ZW50czogY29tbWl0Rm9ybS5zdWJtaXQoKSBkb2Vzbid0LlxuXHRcdGNvbW1pdEZvcm0uaGNDb21taXQuY2xpY2soKTtcblx0fTtcblx0Y29uc3QgcmVzb2x2ZU9uZSA9IChwYWdlLCB0b1Jlc29sdmUpID0+IHtcblx0XHRjb25zdCBjYXRzID0gcGFnZS5jYXRlZ29yaWVzO1xuXHRcdGNvbnN0IHtsaW5rc30gPSBwYWdlO1xuXHRcdGxldCBpc19kYWIgPSBmYWxzZTsgLy8gSGFyZCByZWRpcmVjdD9cblx0XHRsZXQgaXNfcmVkaXIgPSB0eXBlb2YgcGFnZS5yZWRpcmVjdCA9PT0gJ3N0cmluZyc7XG5cdFx0bGV0IGk7XG5cdFx0Y29uc3QgaXNfaGlkZGVuID0gcGFnZS5jYXRlZ29yeWluZm8gJiYgdHlwZW9mIHBhZ2UuY2F0ZWdvcnlpbmZvLmhpZGRlbiA9PT0gJ3N0cmluZyc7XG5cdFx0Y29uc3QgaXNfbWlzc2luZyA9IHR5cGVvZiBwYWdlLm1pc3NpbmcgPT09ICdzdHJpbmcnO1xuXHRcdGZvciAoaSA9IDA7IGkgPCB0b1Jlc29sdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChpICYmIHRvUmVzb2x2ZVtpXS5kYWJJbnB1dENsZWFuZWQgIT09IHBhZ2UudGl0bGUuc2xpY2UoTWF0aC5tYXgoMCwgcGFnZS50aXRsZS5pbmRleE9mKCc6JykgKyAxKSkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHQvLyBOb3RlOiB0aGUgc2VydmVyIHJldHVybnMgaW4gcGFnZSBhbiBORkMgbm9ybWFsaXplZCBVbmljb2RlIHRpdGxlLiBJZiBvdXIgaW5wdXQgd2FzIG5vdCBORkMgbm9ybWFsaXplZCwgd2UgbWF5IG5vdCBmaW5kXG5cdFx0XHQvLyBhbnkgZW50cnkgaGVyZS4gSWYgd2UgaGF2ZSBvbmx5IG9uZSBlZGl0b3IgdG8gcmVzb2x2ZSAodGhlIG1vc3QgY29tbW9uIGNhc2UsIEkgcHJlc3VtZSksIHdlIG1heSBzaW1wbHkgc2tpcCB0aGUgY2hlY2suXG5cdFx0XHR0b1Jlc29sdmVbaV0uY3VycmVudEhpZGRlbiA9IGlzX2hpZGRlbjtcblx0XHRcdHRvUmVzb2x2ZVtpXS5pbnB1dEV4aXN0cyA9ICFpc19taXNzaW5nO1xuXHRcdFx0dG9SZXNvbHZlW2ldLmljb24uc3JjID0gaXNfbWlzc2luZyA/IEhDLmV4aXN0c05vIDogSEMuZXhpc3RzWWVzO1xuXHRcdH1cblx0XHRpZiAoaXNfbWlzc2luZykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoIWlzX3JlZGlyICYmIGNhdHMgJiYgKGdldE1lc3NhZ2UoJ2Rpc2FtYmlnX2NhdGVnb3J5JykgfHwgZ2V0TWVzc2FnZSgncmVkaXJfY2F0ZWdvcnknKSkpIHtcblx0XHRcdGZvciAoY29uc3QgY2F0XyBvZiBjYXRzKSB7XG5cdFx0XHRcdGxldCBjYXQgPSBjYXRfLnRpdGxlO1xuXHRcdFx0XHQvLyBTdHJpcCBuYW1lc3BhY2UgcHJlZml4XG5cdFx0XHRcdGlmIChjYXQpIHtcblx0XHRcdFx0XHRjYXQgPSBjYXQuc2xpY2UoTWF0aC5tYXgoMCwgY2F0LmluZGV4T2YoJzonKSArIDEpKS5yZXBsYWNlKC9fL2csICcgJyk7XG5cdFx0XHRcdFx0aWYgKGNhdCA9PT0gZ2V0TWVzc2FnZSgnZGlzYW1iaWdfY2F0ZWdvcnknKSkge1xuXHRcdFx0XHRcdFx0aXNfZGFiID0gdHJ1ZTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoY2F0ID09PSBnZXRNZXNzYWdlKCdyZWRpcl9jYXRlZ29yeScpKSB7XG5cdFx0XHRcdFx0XHRpc19yZWRpciA9IHRydWU7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCFpc19yZWRpciAmJiAhaXNfZGFiKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICghbGlua3MgfHwgbGlua3MubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHRpdGxlcyA9IFtdO1xuXHRcdGZvciAoaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHQvLyBDYXRlZ29yeSBuYW1lc3BhY2UgLS0gYWx3YXlzIHRydWUgc2luY2Ugd2UgYXNrIG9ubHkgZm9yIHRoZSBjYXRlZ29yeSBsaW5rc1xuXHRcdFx0XHRsaW5rc1tpXS5ucyA9PT0gMTQgJiZcblx0XHRcdFx0Ly8gTmFtZSBub3QgZW1wdHlcblx0XHRcdFx0bGlua3NbaV0udGl0bGUgJiZcblx0XHRcdFx0bGlua3NbaV0udGl0bGUubGVuZ3RoID4gMFxuXHRcdFx0KSB7XG5cdFx0XHRcdC8vIEludGVybmFsIGxpbmsgdG8gZXhpc3RpbmcgdGhpbmd5LiBFeHRyYWN0IHRoZSBwYWdlIG5hbWUgYW5kIHJlbW92ZSB0aGUgbmFtZXNwYWNlLlxuXHRcdFx0XHRsZXQgbWF0Y2ggPSBsaW5rc1tpXS50aXRsZTtcblx0XHRcdFx0bWF0Y2ggPSBtYXRjaC5zbGljZShNYXRoLm1heCgwLCBtYXRjaC5pbmRleE9mKCc6JykgKyAxKSk7XG5cdFx0XHRcdC8vIEV4Y2x1ZGUgYmxhY2tsaXN0ZWQgY2F0ZWdvcmllcy5cblx0XHRcdFx0aWYgKCFIQy5ibGFja2xpc3QgfHwgIUhDLmJsYWNrbGlzdC50ZXN0KG1hdGNoKSkge1xuXHRcdFx0XHRcdHRpdGxlc1t0aXRsZXMubGVuZ3RoXSA9IG1hdGNoO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh0aXRsZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGZvciAoaSA9IDA7IGkgPCB0b1Jlc29sdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChpICYmIHRvUmVzb2x2ZVtpXS5kYWJJbnB1dENsZWFuZWQgIT09IHBhZ2UudGl0bGUuc2xpY2UoTWF0aC5tYXgoMCwgcGFnZS50aXRsZS5pbmRleE9mKCc6JykgKyAxKSkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHR0b1Jlc29sdmVbaV0uaW5wdXRFeGlzdHMgPSB0cnVlOyAvLyBNaWdodCBhY3R1YWxseSBiZSB3cm9uZyBpZiBpdCdzIGEgcmVkaXJlY3QgcG9pbnRpbmcgdG8gYSBub24tZXhpc3RpbmcgY2F0ZWdvcnlcblx0XHRcdHRvUmVzb2x2ZVtpXS5pY29uLnNyYyA9IEhDLmV4aXN0c1llcztcblx0XHRcdGlmICh0aXRsZXMubGVuZ3RoID4gMSkge1xuXHRcdFx0XHR0b1Jlc29sdmVbaV0uZGFiID0gdGl0bGVzO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dG9SZXNvbHZlW2ldLnRleHQudmFsdWUgPVxuXHRcdFx0XHRcdHRpdGxlc1swXSArICh0b1Jlc29sdmVbaV0uY3VycmVudEtleSA9PT0gbnVsbCA/ICcnIDogYHwke3RvUmVzb2x2ZVtpXS5jdXJyZW50S2V5fWApO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0Y29uc3QgcmVzb2x2ZVJlZGlyZWN0cyA9ICh0b1Jlc29sdmUsIHBhcmFtcykgPT4ge1xuXHRcdGlmICghcGFyYW1zIHx8ICFwYXJhbXMucXVlcnkgfHwgIXBhcmFtcy5xdWVyeS5wYWdlcykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRmb3IgKGNvbnN0IHAgaW4gcGFyYW1zLnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRpZiAoIU9iamVjdC5oYXNPd24ocGFyYW1zLnF1ZXJ5LnBhZ2VzLCBwKSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHJlc29sdmVPbmUocGFyYW1zLnF1ZXJ5LnBhZ2VzW3BdLCB0b1Jlc29sdmUpO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgcmVzb2x2ZU11bHRpID0gKHRvUmVzb2x2ZSwgY2FsbGJhY2spID0+IHtcblx0XHRsZXQgaTtcblx0XHRmb3IgKGkgPSAwOyBpIDwgdG9SZXNvbHZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR0b1Jlc29sdmVbaV0uZGFiID0gbnVsbDtcblx0XHRcdHRvUmVzb2x2ZVtpXS5kYWJJbnB1dCA9IHRvUmVzb2x2ZVtpXS5sYXN0SW5wdXQ7XG5cdFx0fVxuXHRcdGlmIChub1N1Z2dlc3Rpb25zKSB7XG5cdFx0XHRjYWxsYmFjayh0b1Jlc29sdmUpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdHByb3A6ICdpbmZvfGxpbmtzfGNhdGVnb3JpZXN8Y2F0ZWdvcnlpbmZvJyxcblx0XHRcdHBsbmFtZXNwYWNlOiAnMTQnLFxuXHRcdFx0cGxsaW1pdDogdG9SZXNvbHZlLmxlbmd0aCAqIDEwLFxuXHRcdFx0Y2xsaW1pdDogdG9SZXNvbHZlLmxlbmd0aCAqIDEwLFxuXHRcdH07XG5cdFx0Y29uc3QgdGl0bGVzID0gW107XG5cdFx0Zm9yIChpID0gMDsgaSA8IHRvUmVzb2x2ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IHYgPSB0b1Jlc29sdmVbaV0uZGFiSW5wdXQ7XG5cdFx0XHR2ID0gcmVwbGFjZVNob3J0Y3V0cyh2LCBIQy5zaG9ydGN1dHMpO1xuXHRcdFx0dG9SZXNvbHZlW2ldLmRhYklucHV0Q2xlYW5lZCA9IHY7XG5cdFx0XHR0aXRsZXNbdGl0bGVzLmxlbmd0aF0gPSBgQ2F0ZWdvcnk6JHt2fWA7XG5cdFx0fVxuXHRcdHBhcmFtcy50aXRsZXMgPSB0aXRsZXMuam9pbignfCcpO1xuXHRcdGFwaS5nZXQocGFyYW1zKVxuXHRcdFx0LmRvbmUoKGpzb24pID0+IHtcblx0XHRcdFx0cmVzb2x2ZVJlZGlyZWN0cyh0b1Jlc29sdmUsIGpzb24pO1xuXHRcdFx0XHRjYWxsYmFjayh0b1Jlc29sdmUpO1xuXHRcdFx0fSlcblx0XHRcdC5mYWlsKChyZXEpID0+IHtcblx0XHRcdFx0aWYgKCFyZXEpIHtcblx0XHRcdFx0XHRub1N1Z2dlc3Rpb25zID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjYWxsYmFjayh0b1Jlc29sdmUpO1xuXHRcdFx0fSk7XG5cdH07XG5cdGNvbnN0IG1ha2VBY3RpdmUgPSAod2hpY2gpID0+IHtcblx0XHRpZiAod2hpY2guaXNfYWN0aXZlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGZvciAoY29uc3QgZWRpdG9yIG9mIGVkaXRvcnMpIHtcblx0XHRcdGlmIChlZGl0b3IgIT09IHdoaWNoKSB7XG5cdFx0XHRcdGVkaXRvci5pbmFjdGl2YXRlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHdoaWNoLmlzX2FjdGl2ZSA9IHRydWU7XG5cdFx0aWYgKHdoaWNoLmRhYikge1xuXHRcdFx0c2hvd0RhYih3aGljaCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIENoZWNrIGZvciBwcm9ncmFtbWF0aWMgdmFsdWUgY2hhbmdlcy5cblx0XHRcdGNvbnN0IGV4cGVjdGVkSW5wdXQgPSB3aGljaC5sYXN0UmVhbElucHV0IHx8IHdoaWNoLmxhc3RJbnB1dCB8fCAnJztcblx0XHRcdGNvbnN0IGFjdHVhbFZhbHVlID0gd2hpY2gudGV4dC52YWx1ZSB8fCAnJztcblx0XHRcdGlmIChcblx0XHRcdFx0KGV4cGVjdGVkSW5wdXQubGVuZ3RoID09PSAwICYmIGFjdHVhbFZhbHVlLmxlbmd0aCA+IDApIHx8XG5cdFx0XHRcdChleHBlY3RlZElucHV0Lmxlbmd0aCA+IDAgJiYgYWN0dWFsVmFsdWUuaW5kZXhPZihleHBlY3RlZElucHV0KSlcblx0XHRcdCkge1xuXHRcdFx0XHQvLyBTb21laG93IHRoZSBmaWVsZCdzIHZhbHVlIGFwcGVhcnMgdG8gaGF2ZSBjaGFuZ2VkLCBhbmQgd2hpY2gubGFzdFNlbGVjdGlvbiB0aGVyZWZvcmUgaXMgbm8gbG9uZ2VyIHZhbGlkLiBUcnkgdG8gc2V0IHRoZVxuXHRcdFx0XHQvLyBjdXJzb3IgYXQgdGhlIGVuZCBvZiB0aGUgY2F0ZWdvcnksIGFuZCBkbyBub3QgZGlzcGxheSB0aGUgb2xkIHN1Z2dlc3Rpb24gbGlzdC5cblx0XHRcdFx0d2hpY2guc2hvd3NMaXN0ID0gZmFsc2U7XG5cdFx0XHRcdGNvbnN0IHYgPSBhY3R1YWxWYWx1ZS5zcGxpdCgnfCcpO1xuXHRcdFx0XHRbd2hpY2gubGFzdElucHV0XSA9IHY7XG5cdFx0XHRcdHdoaWNoLmxhc3RSZWFsSW5wdXQgPSB3aGljaC5sYXN0SW5wdXQ7XG5cdFx0XHRcdGlmICh2Lmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRbLCB3aGljaC5jdXJyZW50S2V5XSA9IHY7XG5cdFx0XHRcdH1cblx0XHRcdFx0d2hpY2gubGFzdFNlbGVjdGlvbiAmJj0ge1xuXHRcdFx0XHRcdHN0YXJ0OiB2WzBdLmxlbmd0aCxcblx0XHRcdFx0XHRlbmQ6IHZbMF0ubGVuZ3RoLFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKHdoaWNoLnNob3dzTGlzdCkge1xuXHRcdFx0XHR3aGljaC5kaXNwbGF5TGlzdCgpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHdoaWNoLmxhc3RTZWxlY3Rpb24pIHtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0d2hpY2guc2V0U2VsZWN0aW9uKHdoaWNoLmxhc3RTZWxlY3Rpb24uc3RhcnQsIHdoaWNoLmxhc3RTZWxlY3Rpb24uZW5kKTtcblx0XHRcdFx0fSwgMCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBzaG93RGFiID0gKHdoaWNoKSA9PiB7XG5cdFx0aWYgKHdoaWNoLmlzX2FjdGl2ZSkge1xuXHRcdFx0d2hpY2guc2hvd1N1Z2dlc3Rpb25zKHdoaWNoLmRhYiwgZmFsc2UsIG51bGwsIG51bGwpOyAvLyBkbyBhdXRvY29tcGxldGlvbiwgbm8ga2V5LCBubyBlbmdpbmUgc2VsZWN0b3Jcblx0XHRcdHdoaWNoLmRhYiA9IG51bGw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1ha2VBY3RpdmUod2hpY2gpO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgbXVsdGlTdWJtaXQgPSAoKSA9PiB7XG5cdFx0Y29uc3QgdG9SZXNvbHZlID0gW107XG5cdFx0Zm9yIChjb25zdCBlZGl0b3Igb2YgZWRpdG9ycykge1xuXHRcdFx0aWYgKGVkaXRvci5zdGF0ZSA9PT0gQ0hBTkdFX1BFTkRJTkcgfHwgZWRpdG9yLnN0YXRlID09PSBPUEVOKSB7XG5cdFx0XHRcdHRvUmVzb2x2ZVt0b1Jlc29sdmUubGVuZ3RoXSA9IGVkaXRvcjtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHRvUmVzb2x2ZS5sZW5ndGggPT09IDApIHtcblx0XHRcdGluaXRpYXRlRWRpdChcblx0XHRcdFx0KGZhaWx1cmUpID0+IHtcblx0XHRcdFx0XHRwZXJmb3JtQ2hhbmdlcyhmYWlsdXJlKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0KG1zZykgPT4ge1xuXHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KG1zZywge3RhZzogJ2hvdENhdCd9KTtcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0cmVzb2x2ZU11bHRpKHRvUmVzb2x2ZSwgKHJlc29sdmVkKSA9PiB7XG5cdFx0XHRsZXQgZmlyc3REYWIgPSBudWxsO1xuXHRcdFx0bGV0IGRvbnRDaGFuZ2UgPSBmYWxzZTtcblx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiByZXNvbHZlZCkge1xuXHRcdFx0XHRpZiAoZWxlbWVudC5sYXN0SW5wdXQgPT09IGVsZW1lbnQuZGFiSW5wdXQpIHtcblx0XHRcdFx0XHRpZiAoZWxlbWVudC5kYWIpIHtcblx0XHRcdFx0XHRcdGZpcnN0RGFiIHx8PSBlbGVtZW50O1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoZWxlbWVudC5hY2NlcHRDaGVjayh0cnVlKSkge1xuXHRcdFx0XHRcdFx0ZWxlbWVudC5jb21taXQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gV2UgZGlkbid0IGRpc2FibGUgYWxsIHRoZSBvcGVuIGVkaXRvcnMsIGJ1dCB3ZSBkaWQgYXN5bmNocm9ub3VzIGNhbGxzLiBJdCBpc1xuXHRcdFx0XHRcdC8vIHRoZW9yZXRpY2FsbHkgcG9zc2libGUgdGhhdCB0aGUgdXNlciBjaGFuZ2VkIHNvbWV0aGluZy4uLlxuXHRcdFx0XHRcdGRvbnRDaGFuZ2UgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZmlyc3REYWIpIHtcblx0XHRcdFx0c2hvd0RhYihmaXJzdERhYik7XG5cdFx0XHR9IGVsc2UgaWYgKCFkb250Q2hhbmdlKSB7XG5cdFx0XHRcdGluaXRpYXRlRWRpdChcblx0XHRcdFx0XHQoZmFpbHVyZSkgPT4ge1xuXHRcdFx0XHRcdFx0cGVyZm9ybUNoYW5nZXMoZmFpbHVyZSk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQobXNnKSA9PiB7XG5cdFx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeShtc2csIHt0YWc6ICdob3RDYXQnfSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCBzZXRNdWx0aUlucHV0ID0gKCkgPT4ge1xuXHRcdGlmIChjb21taXRCdXR0b24gfHwgb25VcGxvYWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29tbWl0QnV0dG9uID0gbWFrZSgnaW5wdXQnKTtcblx0XHRjb21taXRCdXR0b24udHlwZSA9ICdidXR0b24nO1xuXHRcdGNvbW1pdEJ1dHRvbi52YWx1ZSA9IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLWNvbW1pdCcpO1xuXHRcdGNvbW1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG11bHRpU3VibWl0KTtcblx0XHRpZiAobXVsdGlTcGFuKSB7XG5cdFx0XHRtdWx0aVNwYW4ucmVwbGFjZVdpdGgoY29tbWl0QnV0dG9uKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2F0TGluZS5hcHBlbmQoY29tbWl0QnV0dG9uKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IGNoZWNrTXVsdGlJbnB1dCA9ICgpID0+IHtcblx0XHRpZiAoIWNvbW1pdEJ1dHRvbikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRsZXQgaGFzQ2hhbmdlcyA9IGZhbHNlO1xuXHRcdGZvciAoY29uc3QgZWRpdG9yIG9mIGVkaXRvcnMpIHtcblx0XHRcdGlmIChlZGl0b3Iuc3RhdGUgIT09IFVOQ0hBTkdFRCkge1xuXHRcdFx0XHRoYXNDaGFuZ2VzID0gdHJ1ZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNvbW1pdEJ1dHRvbi5kaXNhYmxlZCA9ICFoYXNDaGFuZ2VzO1xuXHR9O1xuXHRjb25zdCBzdWdnZXN0aW9uRW5naW5lcyA9IHtcblx0XHRvcGVuc2VhcmNoOiB7XG5cdFx0XHR1cmk6IGAke213LmNvbmZpZy5nZXQoXG5cdFx0XHRcdCd3Z1NjcmlwdFBhdGgnXG5cdFx0XHQpfS9hcGkucGhwP2Zvcm1hdD1qc29uJmFjdGlvbj1vcGVuc2VhcmNoJm5hbWVzcGFjZT0xNCZsaW1pdD0zMCZzZWFyY2g9Q2F0ZWdvcnk6JDFgLFxuXHRcdFx0Ly8gJDEgPSBzZWFyY2ggdGVybVxuXHRcdFx0Ly8gRnVuY3Rpb24gdG8gY29udmVydCByZXN1bHQgb2YgdXJpIGludG8gYW4gYXJyYXkgb2YgY2F0ZWdvcnkgbmFtZXNcblx0XHRcdGhhbmRsZXI6IChxdWVyeVJlc3VsdCwgcXVlcnlLZXkpID0+IHtcblx0XHRcdFx0aWYgKHF1ZXJ5UmVzdWx0ICYmIHF1ZXJ5UmVzdWx0Lmxlbmd0aCA+PSAyKSB7XG5cdFx0XHRcdFx0Y29uc3Qga2V5ID0gcXVlcnlSZXN1bHRbMF0uc2xpY2UoTWF0aC5tYXgoMCwgcXVlcnlSZXN1bHRbMF0uaW5kZXhPZignOicpICsgMSkpO1xuXHRcdFx0XHRcdGNvbnN0IFssIHRpdGxlc10gPSBxdWVyeVJlc3VsdDtcblx0XHRcdFx0XHRsZXQgZXhpc3RzID0gZmFsc2U7XG5cdFx0XHRcdFx0Y2F0X3ByZWZpeCB8fD0gbmV3IFJlZ0V4cChgXigke0hDLmNhdGVnb3J5X3JlZ2V4cH0pOmApO1xuXHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGl0bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRjYXRfcHJlZml4Lmxhc3RJbmRleCA9IDA7XG5cdFx0XHRcdFx0XHRjb25zdCBtID0gY2F0X3ByZWZpeC5leGVjKHRpdGxlc1tpXSk7XG5cdFx0XHRcdFx0XHRpZiAobSAmJiBtLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRcdFx0dGl0bGVzW2ldID0gdGl0bGVzW2ldLnNsaWNlKE1hdGgubWF4KDAsIHRpdGxlc1tpXS5pbmRleE9mKCc6JykgKyAxKSk7IC8vIHJtIG5hbWVzcGFjZVxuXHRcdFx0XHRcdFx0XHRpZiAoa2V5ID09PSB0aXRsZXNbaV0pIHtcblx0XHRcdFx0XHRcdFx0XHRleGlzdHMgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0aXRsZXMuc3BsaWNlKGksIDEpOyAvLyBOb3BlLCBpdCdzIG5vdCBhIGNhdGVnb3J5IGFmdGVyIGFsbC5cblx0XHRcdFx0XHRcdFx0aS0tO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aXRsZXMuZXhpc3RzID0gZXhpc3RzO1xuXHRcdFx0XHRcdGlmIChxdWVyeUtleSAhPT0ga2V5KSB7XG5cdFx0XHRcdFx0XHR0aXRsZXMubm9ybWFsaXplZCA9IGtleTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gUmVtZW1iZXIgdGhlIE5GQyBub3JtYWxpemVkIGtleSB3ZSBnb3QgYmFjayBmcm9tIHRoZSBzZXJ2ZXJcblx0XHRcdFx0XHRyZXR1cm4gdGl0bGVzO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fSxcblx0XHR9LFxuXHRcdGludGVybmFsc2VhcmNoOiB7XG5cdFx0XHR1cmk6IGAke213LmNvbmZpZy5nZXQoXG5cdFx0XHRcdCd3Z1NjcmlwdFBhdGgnXG5cdFx0XHQpfS9hcGkucGhwP2Zvcm1hdD1qc29uJmFjdGlvbj1xdWVyeSZsaXN0PWFsbHBhZ2VzJmFwbmFtZXNwYWNlPTE0JmFwbGltaXQ9MzAmYXBmcm9tPSQxJmFwcHJlZml4PSQxYCxcblx0XHRcdGhhbmRsZXI6IChxdWVyeVJlc3VsdCkgPT4ge1xuXHRcdFx0XHRpZiAocXVlcnlSZXN1bHQgJiYgcXVlcnlSZXN1bHQucXVlcnkgJiYgcXVlcnlSZXN1bHQucXVlcnkuYWxscGFnZXMpIHtcblx0XHRcdFx0XHRjb25zdCB0aXRsZXMgPSBxdWVyeVJlc3VsdC5xdWVyeS5hbGxwYWdlcztcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRpdGxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0dGl0bGVzW2ldID0gdGl0bGVzW2ldLnRpdGxlLnNsaWNlKE1hdGgubWF4KDAsIHRpdGxlc1tpXS50aXRsZS5pbmRleE9mKCc6JykgKyAxKSk7XG5cdFx0XHRcdFx0fSAvLyBybSBuYW1lc3BhY2Vcblx0XHRcdFx0XHRyZXR1cm4gdGl0bGVzO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fSxcblx0XHR9LFxuXHRcdGV4aXN0czoge1xuXHRcdFx0dXJpOiBgJHttdy5jb25maWcuZ2V0KCd3Z1NjcmlwdFBhdGgnKX0vYXBpLnBocD9mb3JtYXQ9anNvbiZhY3Rpb249cXVlcnkmcHJvcD1pbmZvJnRpdGxlcz1DYXRlZ29yeTokMWAsXG5cdFx0XHRoYW5kbGVyOiAocXVlcnlSZXN1bHQsIHF1ZXJ5S2V5KSA9PiB7XG5cdFx0XHRcdGlmIChxdWVyeVJlc3VsdCAmJiBxdWVyeVJlc3VsdC5xdWVyeSAmJiBxdWVyeVJlc3VsdC5xdWVyeS5wYWdlcyAmJiAhcXVlcnlSZXN1bHQucXVlcnkucGFnZXNbLTFdKSB7XG5cdFx0XHRcdFx0Ly8gU2hvdWxkIGhhdmUgZXhhY3RseSAxXG5cdFx0XHRcdFx0Zm9yIChjb25zdCBwIGluIHF1ZXJ5UmVzdWx0LnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdFx0XHRpZiAoIU9iamVjdC5oYXNPd24ocXVlcnlSZXN1bHQucXVlcnkucGFnZXMsIHApKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0bGV0IF90aXRsZSA9IHF1ZXJ5UmVzdWx0LnF1ZXJ5LnBhZ2VzW3BdLnRpdGxlO1xuXHRcdFx0XHRcdFx0X3RpdGxlID0gX3RpdGxlLnNsaWNlKE1hdGgubWF4KDAsIF90aXRsZS5pbmRleE9mKCc6JykgKyAxKSk7XG5cdFx0XHRcdFx0XHRjb25zdCB0aXRsZXMgPSBbX3RpdGxlXTtcblx0XHRcdFx0XHRcdHRpdGxlcy5leGlzdHMgPSB0cnVlO1xuXHRcdFx0XHRcdFx0aWYgKHF1ZXJ5S2V5ICE9PSBfdGl0bGUpIHtcblx0XHRcdFx0XHRcdFx0dGl0bGVzLm5vcm1hbGl6ZWQgPSBfdGl0bGU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBORkNcblx0XHRcdFx0XHRcdHJldHVybiB0aXRsZXM7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fSxcblx0XHR9LFxuXHRcdHN1YmNhdGVnb3JpZXM6IHtcblx0XHRcdHVyaTogYCR7bXcuY29uZmlnLmdldChcblx0XHRcdFx0J3dnU2NyaXB0UGF0aCdcblx0XHRcdCl9L2FwaS5waHA/Zm9ybWF0PWpzb24mYWN0aW9uPXF1ZXJ5Jmxpc3Q9Y2F0ZWdvcnltZW1iZXJzJmNtdHlwZT1zdWJjYXQmY21saW1pdD1tYXgmY210aXRsZT1DYXRlZ29yeTokMWAsXG5cdFx0XHRoYW5kbGVyOiAocXVlcnlSZXN1bHQpID0+IHtcblx0XHRcdFx0aWYgKHF1ZXJ5UmVzdWx0ICYmIHF1ZXJ5UmVzdWx0LnF1ZXJ5ICYmIHF1ZXJ5UmVzdWx0LnF1ZXJ5LmNhdGVnb3J5bWVtYmVycykge1xuXHRcdFx0XHRcdGNvbnN0IHRpdGxlcyA9IHF1ZXJ5UmVzdWx0LnF1ZXJ5LmNhdGVnb3J5bWVtYmVycztcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRpdGxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0dGl0bGVzW2ldID0gdGl0bGVzW2ldLnRpdGxlLnNsaWNlKE1hdGgubWF4KDAsIHRpdGxlc1tpXS50aXRsZS5pbmRleE9mKCc6JykgKyAxKSk7XG5cdFx0XHRcdFx0fSAvLyBybSBuYW1lc3BhY2Vcblx0XHRcdFx0XHRyZXR1cm4gdGl0bGVzO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fSxcblx0XHR9LFxuXHRcdHBhcmVudGNhdGVnb3JpZXM6IHtcblx0XHRcdHVyaTogYCR7bXcuY29uZmlnLmdldChcblx0XHRcdFx0J3dnU2NyaXB0UGF0aCdcblx0XHRcdCl9L2FwaS5waHA/Zm9ybWF0PWpzb24mYWN0aW9uPXF1ZXJ5JnByb3A9Y2F0ZWdvcmllcyZ0aXRsZXM9Q2F0ZWdvcnk6JDEmY2xsaW1pdD1tYXhgLFxuXHRcdFx0aGFuZGxlcjogKHF1ZXJ5UmVzdWx0KSA9PiB7XG5cdFx0XHRcdGlmIChxdWVyeVJlc3VsdCAmJiBxdWVyeVJlc3VsdC5xdWVyeSAmJiBxdWVyeVJlc3VsdC5xdWVyeS5wYWdlcykge1xuXHRcdFx0XHRcdGZvciAoY29uc3QgcCBpbiBxdWVyeVJlc3VsdC5xdWVyeS5wYWdlcykge1xuXHRcdFx0XHRcdFx0aWYgKHF1ZXJ5UmVzdWx0LnF1ZXJ5LnBhZ2VzW3BdLmNhdGVnb3JpZXMpIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgdGl0bGVzID0gcXVlcnlSZXN1bHQucXVlcnkucGFnZXNbcF0uY2F0ZWdvcmllcztcblx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aXRsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdFx0XHR0aXRsZXNbaV0gPSB0aXRsZXNbaV0udGl0bGUuc2xpY2UoTWF0aC5tYXgoMCwgdGl0bGVzW2ldLnRpdGxlLmluZGV4T2YoJzonKSArIDEpKTtcblx0XHRcdFx0XHRcdFx0fSAvLyBybSBuYW1lc3BhY2Vcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRpdGxlcztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdH07XG5cdGNvbnN0IHN1Z2dlc3Rpb25Db25maWdzID0ge1xuXHRcdHNlYXJjaGluZGV4OiB7XG5cdFx0XHRuYW1lOiAnU2VhcmNoIGluZGV4Jyxcblx0XHRcdGVuZ2luZXM6IFsnb3BlbnNlYXJjaCddLFxuXHRcdFx0Y2FjaGU6IHt9LFxuXHRcdFx0c2hvdzogdHJ1ZSxcblx0XHRcdHRlbXA6IGZhbHNlLFxuXHRcdFx0bm9Db21wbGV0aW9uOiBmYWxzZSxcblx0XHR9LFxuXHRcdHBhZ2VsaXN0OiB7XG5cdFx0XHRuYW1lOiAnUGFnZSBsaXN0Jyxcblx0XHRcdGVuZ2luZXM6IFsnaW50ZXJuYWxzZWFyY2gnLCAnZXhpc3RzJ10sXG5cdFx0XHRjYWNoZToge30sXG5cdFx0XHRzaG93OiB0cnVlLFxuXHRcdFx0dGVtcDogZmFsc2UsXG5cdFx0XHRub0NvbXBsZXRpb246IGZhbHNlLFxuXHRcdH0sXG5cdFx0Y29tYmluZWQ6IHtcblx0XHRcdG5hbWU6ICdDb21iaW5lZCBzZWFyY2gnLFxuXHRcdFx0ZW5naW5lczogWydvcGVuc2VhcmNoJywgJ2ludGVybmFsc2VhcmNoJ10sXG5cdFx0XHRjYWNoZToge30sXG5cdFx0XHRzaG93OiB0cnVlLFxuXHRcdFx0dGVtcDogZmFsc2UsXG5cdFx0XHRub0NvbXBsZXRpb246IGZhbHNlLFxuXHRcdH0sXG5cdFx0c3ViY2F0OiB7XG5cdFx0XHRuYW1lOiAnU3ViY2F0ZWdvcmllcycsXG5cdFx0XHRlbmdpbmVzOiBbJ3N1YmNhdGVnb3JpZXMnXSxcblx0XHRcdGNhY2hlOiB7fSxcblx0XHRcdHNob3c6IHRydWUsXG5cdFx0XHR0ZW1wOiB0cnVlLFxuXHRcdFx0bm9Db21wbGV0aW9uOiB0cnVlLFxuXHRcdH0sXG5cdFx0cGFyZW50Y2F0OiB7XG5cdFx0XHRuYW1lOiAnUGFyZW50IGNhdGVnb3JpZXMnLFxuXHRcdFx0ZW5naW5lczogWydwYXJlbnRjYXRlZ29yaWVzJ10sXG5cdFx0XHRjYWNoZToge30sXG5cdFx0XHRzaG93OiB0cnVlLFxuXHRcdFx0dGVtcDogdHJ1ZSxcblx0XHRcdG5vQ29tcGxldGlvbjogdHJ1ZSxcblx0XHR9LFxuXHR9O1xuXHQvLyBFdmVudCBrZXlDb2RlcyB0aGF0IHdlIGhhbmRsZSBpbiB0aGUgdGV4dCBpbnB1dCBmaWVsZC9zdWdnZXN0aW9uIGxpc3QuXG5cdGNvbnN0IEJTID0gODtcblx0Y29uc3QgVEFCID0gOTtcblx0Y29uc3QgUkVUID0gMTM7XG5cdGNvbnN0IEVTQyA9IDI3O1xuXHRjb25zdCBTUEFDRSA9IDMyO1xuXHRjb25zdCBQR1VQID0gMzM7XG5cdGNvbnN0IFBHRE9XTiA9IDM0O1xuXHRjb25zdCBVUCA9IDM4O1xuXHRjb25zdCBET1dOID0gNDA7XG5cdGNvbnN0IERFTCA9IDQ2O1xuXHRjb25zdCBJTUUgPSAyMjk7XG5cdGNsYXNzIENhdGVnb3J5RWRpdG9yIHtcblx0XHRjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG5cdFx0XHR0aGlzLmluaXRpYWxpemUoLi4uYXJncyk7XG5cdFx0fVxuXHRcdGlzQ29tcG9zaXRpb25TdGFydCA9IGZhbHNlO1xuXHRcdGluaXRpYWxpemUobGluZSwgc3BhbiwgYWZ0ZXIsIGtleSwgaXNfaGlkZGVuKSB7XG5cdFx0XHQvLyBJZiBhIHNwYW4gaXMgZ2l2ZW4sICdhZnRlcicgaXMgdGhlIGNhdGVnb3J5IHRpdGxlLCBvdGhlcndpc2UgaXQgbWF5IGJlIGFuIGVsZW1lbnQgYWZ0ZXIgd2hpY2ggdG9cblx0XHRcdC8vIGluc2VydCB0aGUgbmV3IHNwYW4uICdrZXknIGlzIGxpa2V3aXNlIG92ZXJsb2FkZWQ7IGlmIGEgc3BhbiBpcyBnaXZlbiwgaXQgaXMgdGhlIGNhdGVnb3J5IGtleSAoaWZcblx0XHRcdC8vIGtub3duKSwgb3RoZXJ3aXNlIGl0IGlzIGEgYm9vbGVhbiBpbmRpY2F0aW5nIHdoZXRoZXIgYSBiYXIgc2hhbGwgYmUgcHJlcGVuZGVkLlxuXHRcdFx0aWYgKHNwYW4pIHtcblx0XHRcdFx0aWYgKGlzX3J0bCkge1xuXHRcdFx0XHRcdHNwYW4uZGlyID0gJ3J0bCc7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5pc0FkZENhdGVnb3J5ID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMuY2F0TGluayA9IHNwYW4uZmlyc3RDaGlsZDtcblx0XHRcdFx0dGhpcy5vcmlnaW5hbENhdGVnb3J5ID0gYWZ0ZXI7XG5cdFx0XHRcdHRoaXMub3JpZ2luYWxLZXkgPSBrZXkgJiYga2V5Lmxlbmd0aCA+IDEgPyBrZXkuc2xpY2UoMSkgOiBudWxsOyAvLyA+IDEgYmVjYXVzZSBpdCBpbmNsdWRlcyB0aGUgbGVhZGluZyBiYXJcblx0XHRcdFx0dGhpcy5vcmlnaW5hbEV4aXN0cyA9ICFoYXNDbGFzcyh0aGlzLmNhdExpbmssICduZXcnKTtcblx0XHRcdFx0Ly8gQ3JlYXRlIGNoYW5nZSBhbmQgZGVsIGxpbmtzXG5cdFx0XHRcdHRoaXMubWFrZUxpbmtTcGFuKCk7XG5cdFx0XHRcdGlmICghdGhpcy5vcmlnaW5hbEV4aXN0cyAmJiB0aGlzLnVwRG93bkxpbmtzKSB7XG5cdFx0XHRcdFx0dGhpcy51cERvd25MaW5rcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNwYW4uYXBwZW5kKHRoaXMubGlua1NwYW4pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5pc0FkZENhdGVnb3J5ID0gdHJ1ZTtcblx0XHRcdFx0Ly8gQ3JlYXRlIGFkZCBzcGFuIGFuZCBhcHBlbmQgdG8gY2F0TGlua3Ncblx0XHRcdFx0dGhpcy5vcmlnaW5hbENhdGVnb3J5ID0gJyc7XG5cdFx0XHRcdHRoaXMub3JpZ2luYWxLZXkgPSBudWxsO1xuXHRcdFx0XHR0aGlzLm9yaWdpbmFsRXhpc3RzID0gZmFsc2U7XG5cdFx0XHRcdGlmICghbmV3RE9NKSB7XG5cdFx0XHRcdFx0c3BhbiA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdFx0XHRzcGFuLmNsYXNzTmFtZSA9ICdub3ByaW50Jztcblx0XHRcdFx0XHRpZiAoa2V5KSB7XG5cdFx0XHRcdFx0XHRzcGFuLmFwcGVuZChtYWtlKCcgfCAnLCB0cnVlKSk7XG5cdFx0XHRcdFx0XHRpZiAoYWZ0ZXIpIHtcblx0XHRcdFx0XHRcdFx0YWZ0ZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc3BhbiwgYWZ0ZXIubmV4dFNpYmxpbmcpO1xuXHRcdFx0XHRcdFx0XHRhZnRlciA9IGFmdGVyLm5leHRTaWJsaW5nO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChsaW5lKSB7XG5cdFx0XHRcdFx0XHRcdGxpbmUuYXBwZW5kKHNwYW4pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSBpZiAobGluZSAmJiBsaW5lLmZpcnN0Q2hpbGQpIHtcblx0XHRcdFx0XHRcdHNwYW4uYXBwZW5kKG1ha2UoJyAnLCB0cnVlKSk7XG5cdFx0XHRcdFx0XHRsaW5lLmFwcGVuZChzcGFuKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5saW5rU3BhbiA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdFx0dGhpcy5saW5rU3Bhbi5jbGFzc05hbWUgPSAnbm9wcmludCBub3BvcHVwcyBob3RjYXRsaW5rJztcblx0XHRcdFx0Y29uc3QgbGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdFx0bGluay5ocmVmID0gJyNjYXRsaW5rcyc7XG5cdFx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW4uYmluZCh0aGlzKSk7XG5cdFx0XHRcdGxpbmsuYXBwZW5kKG1ha2UoSEMubGlua3MuYWRkLCB0cnVlKSk7XG5cdFx0XHRcdGxpbmsudGl0bGUgPSBnZXRNZXNzYWdlKCd0b29sdGlwcy1hZGQnKTtcblx0XHRcdFx0dGhpcy5saW5rU3Bhbi5hcHBlbmQobGluayk7XG5cdFx0XHRcdHNwYW4gPSBtYWtlKG5ld0RPTSA/ICdsaScgOiAnc3BhbicpO1xuXHRcdFx0XHRzcGFuLmNsYXNzTmFtZSA9ICdub3ByaW50Jztcblx0XHRcdFx0aWYgKGlzX3J0bCkge1xuXHRcdFx0XHRcdHNwYW4uZGlyID0gJ3J0bCc7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3Bhbi5hcHBlbmQodGhpcy5saW5rU3Bhbik7XG5cdFx0XHRcdGlmIChhZnRlcikge1xuXHRcdFx0XHRcdGFmdGVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNwYW4sIGFmdGVyLm5leHRTaWJsaW5nKTtcblx0XHRcdFx0fSBlbHNlIGlmIChsaW5lKSB7XG5cdFx0XHRcdFx0bGluZS5hcHBlbmQoc3Bhbik7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5ub3JtYWxMaW5rcyA9IG51bGw7XG5cdFx0XHRcdHRoaXMudW5kZWxMaW5rID0gbnVsbDtcblx0XHRcdFx0dGhpcy5jYXRMaW5rID0gbnVsbDtcblx0XHRcdH1cblx0XHRcdHRoaXMub3JpZ2luYWxIaWRkZW4gPSBpc19oaWRkZW47XG5cdFx0XHR0aGlzLmxpbmUgPSBsaW5lO1xuXHRcdFx0dGhpcy5lbmdpbmUgPSBIQy5zdWdnZXN0aW9ucztcblx0XHRcdHRoaXMuc3BhbiA9IHNwYW47XG5cdFx0XHR0aGlzLmN1cnJlbnRDYXRlZ29yeSA9IHRoaXMub3JpZ2luYWxDYXRlZ29yeTtcblx0XHRcdHRoaXMuY3VycmVudEV4aXN0cyA9IHRoaXMub3JpZ2luYWxFeGlzdHM7XG5cdFx0XHR0aGlzLmN1cnJlbnRIaWRkZW4gPSB0aGlzLm9yaWdpbmFsSGlkZGVuO1xuXHRcdFx0dGhpcy5jdXJyZW50S2V5ID0gdGhpcy5vcmlnaW5hbEtleTtcblx0XHRcdHRoaXMuc3RhdGUgPSBVTkNIQU5HRUQ7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZFN0YXRlID0gVU5DSEFOR0VEO1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRDYXRlZ29yeSA9IHRoaXMub3JpZ2luYWxDYXRlZ29yeTtcblx0XHRcdHRoaXMubGFzdFNhdmVkS2V5ID0gdGhpcy5vcmlnaW5hbEtleTtcblx0XHRcdHRoaXMubGFzdFNhdmVkRXhpc3RzID0gdGhpcy5vcmlnaW5hbEV4aXN0cztcblx0XHRcdHRoaXMubGFzdFNhdmVkSGlkZGVuID0gdGhpcy5vcmlnaW5hbEhpZGRlbjtcblx0XHRcdGlmICh0aGlzLmNhdExpbmsgJiYgdGhpcy5jdXJyZW50S2V5KSB7XG5cdFx0XHRcdHRoaXMuY2F0TGluay50aXRsZSA9IHRoaXMuY3VycmVudEtleTtcblx0XHRcdH1cblx0XHRcdGVkaXRvcnNbZWRpdG9ycy5sZW5ndGhdID0gdGhpcztcblx0XHR9XG5cdFx0bWFrZUxpbmtTcGFuKCkge1xuXHRcdFx0dGhpcy5ub3JtYWxMaW5rcyA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdGxldCBsaW5rID0gbnVsbDtcblx0XHRcdGlmICh0aGlzLm9yaWdpbmFsQ2F0ZWdvcnkgJiYgdGhpcy5vcmlnaW5hbENhdGVnb3J5Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0bGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdFx0bGluay5ocmVmID0gJyNjYXRsaW5rcyc7XG5cdFx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJlbW92ZS5iaW5kKHRoaXMpKTtcblx0XHRcdFx0bGluay5hcHBlbmQobWFrZShIQy5saW5rcy5yZW1vdmUsIHRydWUpKTtcblx0XHRcdFx0bGluay50aXRsZSA9IGdldE1lc3NhZ2UoJ3Rvb2x0aXBzLXJlbW92ZScpO1xuXHRcdFx0XHR0aGlzLm5vcm1hbExpbmtzLmFwcGVuZChtYWtlKCcgJywgdHJ1ZSkpO1xuXHRcdFx0XHR0aGlzLm5vcm1hbExpbmtzLmFwcGVuZChsaW5rKTtcblx0XHRcdH1cblx0XHRcdGlmICghSEMudGVtcGxhdGVfY2F0ZWdvcmllc1t0aGlzLm9yaWdpbmFsQ2F0ZWdvcnldKSB7XG5cdFx0XHRcdGxpbmsgPSBtYWtlKCdhJyk7XG5cdFx0XHRcdGxpbmsuaHJlZiA9ICcjY2F0bGlua3MnO1xuXHRcdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuLmJpbmQodGhpcykpO1xuXHRcdFx0XHRsaW5rLmFwcGVuZChtYWtlKEhDLmxpbmtzLmNoYW5nZSwgdHJ1ZSkpO1xuXHRcdFx0XHRsaW5rLnRpdGxlID0gZ2V0TWVzc2FnZSgndG9vbHRpcHMtY2hhbmdlJyk7XG5cdFx0XHRcdHRoaXMubm9ybWFsTGlua3MuYXBwZW5kKG1ha2UoJyAnLCB0cnVlKSk7XG5cdFx0XHRcdHRoaXMubm9ybWFsTGlua3MuYXBwZW5kKGxpbmspO1xuXHRcdFx0XHRpZiAoIW5vU3VnZ2VzdGlvbnMgJiYgSEMudXNlX3VwX2Rvd24pIHtcblx0XHRcdFx0XHR0aGlzLnVwRG93bkxpbmtzID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0XHRcdGxpbmsgPSBtYWtlKCdhJyk7XG5cdFx0XHRcdFx0bGluay5ocmVmID0gJyNjYXRsaW5rcyc7XG5cdFx0XHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZG93bi5iaW5kKHRoaXMpKTtcblx0XHRcdFx0XHRsaW5rLmFwcGVuZChtYWtlKEhDLmxpbmtzLmRvd24sIHRydWUpKTtcblx0XHRcdFx0XHRsaW5rLnRpdGxlID0gZ2V0TWVzc2FnZSgndG9vbHRpcHMtZG93bicpO1xuXHRcdFx0XHRcdHRoaXMudXBEb3duTGlua3MuYXBwZW5kKG1ha2UoJyAnLCB0cnVlKSk7XG5cdFx0XHRcdFx0dGhpcy51cERvd25MaW5rcy5hcHBlbmQobGluayk7XG5cdFx0XHRcdFx0bGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdFx0XHRsaW5rLmhyZWYgPSAnI2NhdGxpbmtzJztcblx0XHRcdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy51cC5iaW5kKHRoaXMpKTtcblx0XHRcdFx0XHRsaW5rLmFwcGVuZChtYWtlKEhDLmxpbmtzLnVwLCB0cnVlKSk7XG5cdFx0XHRcdFx0bGluay50aXRsZSA9IGdldE1lc3NhZ2UoJ3Rvb2x0aXBzLXVwJyk7XG5cdFx0XHRcdFx0dGhpcy51cERvd25MaW5rcy5hcHBlbmQobWFrZSgnICcsIHRydWUpKTtcblx0XHRcdFx0XHR0aGlzLnVwRG93bkxpbmtzLmFwcGVuZChsaW5rKTtcblx0XHRcdFx0XHR0aGlzLm5vcm1hbExpbmtzLmFwcGVuZCh0aGlzLnVwRG93bkxpbmtzKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5saW5rU3BhbiA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdHRoaXMubGlua1NwYW4uY2xhc3NOYW1lID0gJ25vcHJpbnQgbm9wb3B1cHMgaG90Y2F0bGluayc7XG5cdFx0XHR0aGlzLmxpbmtTcGFuLmFwcGVuZCh0aGlzLm5vcm1hbExpbmtzKTtcblx0XHRcdHRoaXMudW5kZWxMaW5rID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0dGhpcy51bmRlbExpbmsuY2xhc3NOYW1lID0gJ25vcG9wdXBzIGhvdGNhdGxpbmsnO1xuXHRcdFx0dGhpcy51bmRlbExpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdGxpbmsgPSBtYWtlKCdhJyk7XG5cdFx0XHRsaW5rLmhyZWYgPSAnI2NhdGxpbmtzJztcblx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJlc3RvcmUuYmluZCh0aGlzKSk7XG5cdFx0XHRsaW5rLmFwcGVuZChtYWtlKEhDLmxpbmtzLnJlc3RvcmUsIHRydWUpKTtcblx0XHRcdGxpbmsudGl0bGUgPSBnZXRNZXNzYWdlKCd0b29sdGlwcy1yZXN0b3JlJyk7XG5cdFx0XHR0aGlzLnVuZGVsTGluay5hcHBlbmQobWFrZSgnICcsIHRydWUpKTtcblx0XHRcdHRoaXMudW5kZWxMaW5rLmFwcGVuZChsaW5rKTtcblx0XHRcdHRoaXMubGlua1NwYW4uYXBwZW5kKHRoaXMudW5kZWxMaW5rKTtcblx0XHR9XG5cdFx0aW52b2tlU3VnZ2VzdGlvbnMoZG9udF9hdXRvY29tcGxldGUpIHtcblx0XHRcdGlmIChcblx0XHRcdFx0dGhpcy5lbmdpbmUgJiZcblx0XHRcdFx0c3VnZ2VzdGlvbkNvbmZpZ3NbdGhpcy5lbmdpbmVdICYmXG5cdFx0XHRcdHN1Z2dlc3Rpb25Db25maWdzW3RoaXMuZW5naW5lXS50ZW1wICYmXG5cdFx0XHRcdCFkb250X2F1dG9jb21wbGV0ZVxuXHRcdFx0KSB7XG5cdFx0XHRcdHRoaXMuZW5naW5lID0gSEMuc3VnZ2VzdGlvbnM7XG5cdFx0XHR9IC8vIFJlc2V0IHRvIGEgc2VhcmNoIHVwb24gaW5wdXRcblx0XHRcdHRoaXMuc3RhdGUgPSBDSEFOR0VfUEVORElORztcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHNlbGYudGV4dGNoYW5nZShkb250X2F1dG9jb21wbGV0ZSk7XG5cdFx0XHR9LCBIQy5zdWdnZXN0X2RlbGF5KTtcblx0XHR9XG5cdFx0bWFrZUZvcm0oKSB7XG5cdFx0XHRjb25zdCBmb3JtID0gbWFrZSgnZm9ybScpO1xuXHRcdFx0Zm9ybS5tZXRob2QgPSAnUE9TVCc7XG5cdFx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuYWNjZXB0LmJpbmQodGhpcykpO1xuXHRcdFx0dGhpcy5mb3JtID0gZm9ybTtcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0Y29uc3QgdGV4dCA9IG1ha2UoJ2lucHV0Jyk7XG5cdFx0XHR0ZXh0LnR5cGUgPSAndGV4dCc7XG5cdFx0XHR0ZXh0LnNpemUgPSBIQy5lZGl0Ym94X3dpZHRoO1xuXHRcdFx0aWYgKCFub1N1Z2dlc3Rpb25zKSB7XG5cdFx0XHRcdC8vIEJlIGNhcmVmdWwgaGVyZSB0byBoYW5kbGUgSU1FIGlucHV0LiBUaGlzIGlzIGJyb3dzZXIvT1MvSU1FIGRlcGVuZGVudCwgYnV0IGJhc2ljYWxseSB0aGVyZSBhcmUgdHdvIG1lY2hhbmlzbXM6XG5cdFx0XHRcdC8vIC0gTW9kZXJuIChET00gTGV2ZWwgMykgYnJvd3NlcnMgdXNlIGNvbXBvc2l0aW9uc3RhcnQvY29tcG9zaXRpb25lbmQgZXZlbnRzIHRvIHNpZ25hbCBjb21wb3NpdGlvbjsgaWYgdGhlXG5cdFx0XHRcdC8vICAgY29tcG9zaXRpb24gaXMgbm90IGNhbmNlbGVkLCB0aGVyZSdsbCBiZSBhIHRleHRJbnB1dCBldmVudCBmb2xsb3dpbmcuIER1cmluZyBhIGNvbXBvc2l0aW9uIGtleSBldmVudHMgYXJlXG5cdFx0XHRcdC8vICAgZWl0aGVyIGFsbCBzdXBwcmVzc2VkIChGRi9HZWNrbyksIG9yIG90aGVyd2lzZSBoYXZlIGtleURvd24gPT09IElNRSBmb3IgYWxsIGtleXMgKFdlYmtpdCkuXG5cdFx0XHRcdC8vICAgLSBXZWJraXQgc2VuZHMgYSB0ZXh0SW5wdXQgZm9sbG93ZWQgYnkga2V5RG93biA9PT0gSU1FIGFuZCBhIGtleVVwIHdpdGggdGhlIGtleSB0aGF0IGVuZGVkIGNvbXBvc2l0aW9uLlxuXHRcdFx0XHQvLyAgIC0gR2Vja28gZG9lc24ndCBzZW5kIHRleHRJbnB1dCBidXQganVzdCBhIGtleVVwIHdpdGggdGhlIGtleSB0aGF0IGVuZGVkIGNvbXBvc2l0aW9uLCB3aXRob3V0IHNlbmRpbmcga2V5RG93blxuXHRcdFx0XHQvL1x0IGZpcnN0LiBHZWNrbyBkb2Vzbid0IHNlbmQgYW55IGtleWRvd24gd2hpbGUgSU1FIGlzIGFjdGl2ZS5cblx0XHRcdFx0Ly8gLSBPbGRlciBicm93c2VycyBzaWduYWwgY29tcG9zaXRpb24gYnkga2V5RG93biA9PT0gSU1FIGZvciB0aGUgZmlyc3QgYW5kIHN1YnNlcXVlbnQga2V5cyBmb3IgYSBjb21wb3NpdGlvbi4gVGhlXG5cdFx0XHRcdC8vICAgZmlyc3Qga2V5RG93biAhPT0gSU1FIGlzIGNlcnRhaW5seSBhZnRlciB0aGUgZW5kIG9mIHRoZSBjb21wb3NpdGlvbi4gVHlwaWNhbGx5LCBjb21wb3NpdGlvbiBlbmQgY2FuIGFsc28gYmVcblx0XHRcdFx0Ly8gICBkZXRlY3RlZCBieSBhIGtleURvd24gSU1FIHdpdGggYSBrZXlVcCBvZiBzcGFjZSwgdGFiLCBlc2NhcGUsIG9yIHJldHVybi5cblx0XHRcdFx0dGV4dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGtleSA9IGV2ZW50LmtleSB8fCAwO1xuXHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdHNlbGYuaW1lICYmXG5cdFx0XHRcdFx0XHRzZWxmLmxhc3RLZXkgPT09IElNRSAmJlxuXHRcdFx0XHRcdFx0IXNlbGYudXNlc0NvbXBvc2l0aW9uICYmXG5cdFx0XHRcdFx0XHQoa2V5ID09PSBUQUIgfHwga2V5ID09PSBSRVQgfHwga2V5ID09PSBFU0MgfHwga2V5ID09PSBTUEFDRSlcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdHNlbGYuaW1lID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChzZWxmLmltZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChrZXkgPT09IFVQIHx8IGtleSA9PT0gRE9XTiB8fCBrZXkgPT09IFBHVVAgfHwga2V5ID09PSBQR0RPV04pIHtcblx0XHRcdFx0XHRcdC8vIEluIGNhc2UgYSBicm93c2VyIGRvZXNuJ3QgZ2VuZXJhdGUga2V5cHJlc3MgZXZlbnRzIGZvciBhcnJvdyBrZXlzLi4uXG5cdFx0XHRcdFx0XHRpZiAoc2VsZi5rZXlDb3VudCA9PT0gMCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gc2VsZi5wcm9jZXNzS2V5KGV2ZW50KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYgKGtleSA9PT0gRVNDICYmIHNlbGYubGFzdEtleSAhPT0gSU1FICYmICFzZWxmLnJlc2V0S2V5U2VsZWN0aW9uKCkpIHtcblx0XHRcdFx0XHRcdFx0Ly8gTm8gdW5kbyBvZiBrZXkgc2VsZWN0aW9uOiB0cmVhdCBFU0MgYXMgXCJjYW5jZWxcIi5cblx0XHRcdFx0XHRcdFx0c2VsZi5jYW5jZWwoKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ly8gQWxzbyBkbyB0aGlzIGZvciBFU0MgYXMgYSB3b3JrYXJvdW5kIGZvciBGaXJlZm94IGJ1ZyA1MjQzNjBcblx0XHRcdFx0XHRcdC8vIHtAbGluayBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD01MjQzNjB9XG5cdFx0XHRcdFx0XHRpZiAoc2VsZi5pc0NvbXBvc2l0aW9uU3RhcnQpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0c2VsZi5pbnZva2VTdWdnZXN0aW9ucyhrZXkgPT09IEJTIHx8IGtleSA9PT0gREVMIHx8IGtleSA9PT0gRVNDKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0ZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRjb25zdCBrZXkgPSBldmVudC5rZXkgfHwgMDtcblx0XHRcdFx0XHRzZWxmLmxhc3RLZXkgPSBrZXk7XG5cdFx0XHRcdFx0c2VsZi5rZXlDb3VudCA9IDA7XG5cdFx0XHRcdFx0Ly8gRE9NIExldmVsIDwgMyBJTUUgaW5wdXRcblx0XHRcdFx0XHRpZiAoIXNlbGYuaW1lICYmIGtleSA9PT0gSU1FICYmICFzZWxmLnVzZXNDb21wb3NpdGlvbikge1xuXHRcdFx0XHRcdFx0Ly8gc2VsZi51c2VzQ29tcG9zaXRpb24gY2F0Y2hlcyBicm93c2VycyB0aGF0IG1heSBlbWl0IHNwdXJpb3VzIGtleWRvd24gSU1FIGFmdGVyIGEgY29tcG9zaXRpb24gaGFzIGVuZGVkXG5cdFx0XHRcdFx0XHRzZWxmLmltZSA9IHRydWU7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChcblx0XHRcdFx0XHRcdHNlbGYuaW1lICYmXG5cdFx0XHRcdFx0XHRrZXkgIT09IElNRSAmJlxuXHRcdFx0XHRcdFx0ISgoa2V5ID49IDE2ICYmIGtleSA8PSAyMCkgfHwgKGtleSA+PSA5MSAmJiBrZXkgPD0gOTMpIHx8IGtleSA9PT0gMTQ0KVxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0Ly8gSWdub3JlIGNvbnRyb2wga2V5czogY3RybCwgc2hpZnQsIGFsdCwgYWx0IGdyLCBjYXBzIGxvY2ssIHdpbmRvd3MvYXBwbGUgY21kIGtleXMsIG51bSBsb2NrLiBPbmx5IHRoZSB3aW5kb3dzIGtleXNcblx0XHRcdFx0XHRcdC8vIHRlcm1pbmF0ZSBJTUUgKGFwcGxlIGNtZCBkb2Vzbid0KSwgYnV0IHRoZXkgYWxzbyBjYXVzZSBhIGJsdXIsIHNvIGl0J3MgT0sgdG8gaWdub3JlIHRoZW0gaGVyZS5cblx0XHRcdFx0XHRcdC8vIE5vdGU6IFNhZmFyaSA0ICg1MzAuMTcpIHByb3BhZ2F0ZXMgRVNDIG91dCBvZiBhbiBJTUUgY29tcG9zaXRpb24gKG9ic2VydmVkIGF0IGxlYXN0IG9uIFdpbiBYUCkuXG5cdFx0XHRcdFx0XHRzZWxmLmltZSA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoc2VsZi5pbWUpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBIYW5kbGUgcmV0dXJuIGV4cGxpY2l0bHksIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IGZvcm0gc3VibWlzc2lvbiB0byBiZSBhYmxlIHRvIGNoZWNrIGZvciBjdHJsXG5cdFx0XHRcdFx0aWYgKGtleSA9PT0gUkVUKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gc2VsZi5hY2NlcHQoZXZlbnQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBJbmhpYml0IGRlZmF1bHQgYmVoYXZpb3Igb2YgRVNDIChyZXZlcnQgdG8gbGFzdCByZWFsIGlucHV0IGluIEZGOiB3ZSBkbyB0aGF0IG91cnNlbHZlcylcblx0XHRcdFx0XHRyZXR1cm4ga2V5ID09PSBFU0MgPyBldnRLaWxsKGV2ZW50KSA6IHRydWU7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQvLyBBbmQgaGFuZGxlIGNvbnRpbnVlZCBwcmVzc2luZyBvZiBhcnJvdyBrZXlzXG5cdFx0XHRcdHRleHQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRzZWxmLmtleUNvdW50Kys7XG5cdFx0XHRcdFx0cmV0dXJuIHNlbGYucHJvY2Vzc0tleShldmVudCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0ZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4ge1xuXHRcdFx0XHRcdG1ha2VBY3RpdmUoc2VsZik7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQvLyBEb24ndCB0ZXN0IGZvciB0ZXh0LnNlbGVjdGlvblN0YXJ0IGJlaW5nIGRlZmluZWQ7XG5cdFx0XHRcdCQodGV4dCkub24oJ2JsdXInLCB0aGlzLnNhdmVWaWV3LmJpbmQodGhpcykpO1xuXHRcdFx0XHQvLyBET00gTGV2ZWwgMyBJTUUgaGFuZGxpbmdcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBTZXR0aW5nIGxhc3RLZXkgPSBJTUUgcHJvdmlkZXMgYSBmYWtlIGtleURvd24gZm9yIEdlY2tvJ3Mgc2luZ2xlIGtleVVwIGFmdGVyIGEgY21wb3NpdGlvbi4gSWYgd2UgZGlkbid0IGRvIHRoaXMsXG5cdFx0XHRcdFx0Ly8gY2FuY2VsbGluZyBhIGNvbXBvc2l0aW9uIHZpYSBFU0Mgd291bGQgYWxzbyBjYW5jZWwgYW5kIGNsb3NlIHRoZSB3aG9sZSBjYXRlZ29yeSBpbnB1dCBlZGl0b3IuXG5cdFx0XHRcdFx0JCh0ZXh0KS5vbignY29tcG9zaXRpb25zdGFydCcsICgpID0+IHtcblx0XHRcdFx0XHRcdHNlbGYubGFzdEtleSA9IElNRTtcblx0XHRcdFx0XHRcdHNlbGYudXNlc0NvbXBvc2l0aW9uID0gdHJ1ZTtcblx0XHRcdFx0XHRcdHNlbGYuaW1lID0gdHJ1ZTtcblx0XHRcdFx0XHRcdHNlbGYuaXNDb21wb3NpdGlvblN0YXJ0ID0gdHJ1ZTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHQkKHRleHQpLm9uKCdjb21wb3NpdGlvbmVuZCcsICgpID0+IHtcblx0XHRcdFx0XHRcdHNlbGYubGFzdEtleSA9IElNRTtcblx0XHRcdFx0XHRcdHNlbGYudXNlc0NvbXBvc2l0aW9uID0gdHJ1ZTtcblx0XHRcdFx0XHRcdHNlbGYuaW1lID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRzZWxmLmlzQ29tcG9zaXRpb25TdGFydCA9IGZhbHNlO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdCQodGV4dCkub24oJ3RleHRJbnB1dCcsICgpID0+IHtcblx0XHRcdFx0XHRcdHNlbGYuaW1lID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRpZiAoc2VsZi5pc0NvbXBvc2l0aW9uU3RhcnQpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0c2VsZi5pbnZva2VTdWdnZXN0aW9ucyhmYWxzZSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdC8vIEp1c3QgaW4gY2FzZSBzb21lIGJyb3dzZXJzIG1pZ2h0IHByb2R1Y2UgZXhjZXB0aW9ucyB3aXRoIHRoZXNlIERPTSBMZXZlbCAzIGV2ZW50c1xuXHRcdFx0XHR9XG5cdFx0XHRcdCQodGV4dCkub24oJ2JsdXInLCAoKSA9PiB7XG5cdFx0XHRcdFx0c2VsZi51c2VzQ29tcG9zaXRpb24gPSBmYWxzZTtcblx0XHRcdFx0XHRzZWxmLmltZSA9IGZhbHNlO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdHRoaXMudGV4dCA9IHRleHQ7XG5cdFx0XHR0aGlzLmljb24gPSBtYWtlKCdpbWcnKTtcblx0XHRcdGxldCBsaXN0ID0gbnVsbDtcblx0XHRcdGlmICghbm9TdWdnZXN0aW9ucykge1xuXHRcdFx0XHRsaXN0ID0gbWFrZSgnc2VsZWN0Jyk7XG5cdFx0XHRcdGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHNlbGYuaGlnaGxpZ2h0U3VnZ2VzdGlvbigwKSkge1xuXHRcdFx0XHRcdFx0c2VsZi50ZXh0Y2hhbmdlKGZhbHNlLCB0cnVlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgKGUpID0+IHtcblx0XHRcdFx0XHRpZiAoc2VsZi5oaWdobGlnaHRTdWdnZXN0aW9uKDApKSB7XG5cdFx0XHRcdFx0XHRzZWxmLmFjY2VwdChlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcblx0XHRcdFx0XHRzZWxmLmhpZ2hsaWdodFN1Z2dlc3Rpb24oMCk7XG5cdFx0XHRcdFx0c2VsZi50ZXh0LmZvY3VzKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0aWYgKGV2ZW50LmtleSA9PT0gRVNDKSB7XG5cdFx0XHRcdFx0XHRzZWxmLnJlc2V0S2V5U2VsZWN0aW9uKCk7XG5cdFx0XHRcdFx0XHRzZWxmLnRleHQuZm9jdXMoKTtcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZWxmLnRleHRjaGFuZ2UodHJ1ZSk7XG5cdFx0XHRcdFx0XHR9LCBIQy5zdWdnZXN0X2RlbGF5KTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gUkVUKSB7XG5cdFx0XHRcdFx0XHRzZWxmLmFjY2VwdChldmVudCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0aWYgKCFIQy5maXhlZF9zZWFyY2gpIHtcblx0XHRcdFx0XHRjb25zdCBlbmdpbmVTZWxlY3RvciA9IG1ha2UoJ3NlbGVjdCcpO1xuXHRcdFx0XHRcdGZvciAoY29uc3Qga2V5IGluIHN1Z2dlc3Rpb25Db25maWdzKSB7XG5cdFx0XHRcdFx0XHRpZiAoc3VnZ2VzdGlvbkNvbmZpZ3Nba2V5XS5zaG93KSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IG9wdCA9IG1ha2UoJ29wdGlvbicpO1xuXHRcdFx0XHRcdFx0XHRvcHQudmFsdWUgPSBrZXk7XG5cdFx0XHRcdFx0XHRcdGlmIChrZXkgPT09IHRoaXMuZW5naW5lKSB7XG5cdFx0XHRcdFx0XHRcdFx0b3B0LnNlbGVjdGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRvcHQuYXBwZW5kKG1ha2Uoc3VnZ2VzdGlvbkNvbmZpZ3Nba2V5XS5uYW1lLCB0cnVlKSk7XG5cdFx0XHRcdFx0XHRcdGVuZ2luZVNlbGVjdG9yLmFwcGVuZChvcHQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbmdpbmVTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRzZWxmLmVuZ2luZSA9IHNlbGYuZW5naW5lU2VsZWN0b3Iub3B0aW9uc1tzZWxmLmVuZ2luZVNlbGVjdG9yLnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xuXHRcdFx0XHRcdFx0c2VsZi50ZXh0LmZvY3VzKCk7XG5cdFx0XHRcdFx0XHRzZWxmLnRleHRjaGFuZ2UodHJ1ZSwgdHJ1ZSk7IC8vIERvbid0IGF1dG9jb21wbGV0ZSwgZm9yY2UgcmUtZGlzcGxheSBvZiBsaXN0XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3RvciA9IGVuZ2luZVNlbGVjdG9yO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxpc3QgPSBsaXN0O1xuXHRcdFx0Y29uc3QgYnV0dG9uX2xhYmVsID0gKF9pZCwgZGVmYXVsdFRleHQpID0+IHtcblx0XHRcdFx0Y29uc3QgbGFiZWwgPSBudWxsO1xuXHRcdFx0XHRpZiAoIWxhYmVsIHx8ICFsYWJlbC5kYXRhKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGRlZmF1bHRUZXh0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBsYWJlbC5kYXRhO1xuXHRcdFx0fTtcblx0XHRcdC8vIERvIG5vdCB1c2UgdHlwZSAnc3VibWl0Jzsgd2UgY2Fubm90IGRldGVjdCBtb2RpZmllciBrZXlzIGlmIHdlIGRvXG5cdFx0XHRjb25zdCBPSyA9IG1ha2UoJ2lucHV0Jyk7XG5cdFx0XHRPSy50eXBlID0gJ2J1dHRvbic7XG5cdFx0XHRPSy52YWx1ZSA9IGJ1dHRvbl9sYWJlbCgnd3BPa1VwbG9hZExibCcsIGdldE1lc3NhZ2UoJ21lc3NhZ2VzLW9rJykpO1xuXHRcdFx0T0suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFjY2VwdC5iaW5kKHRoaXMpKTtcblx0XHRcdHRoaXMub2sgPSBPSztcblx0XHRcdGNvbnN0IGNhbmNlbCA9IG1ha2UoJ2lucHV0Jyk7XG5cdFx0XHRjYW5jZWwudHlwZSA9ICdidXR0b24nO1xuXHRcdFx0Y2FuY2VsLnZhbHVlID0gYnV0dG9uX2xhYmVsKCd3cENhbmNlbFVwbG9hZExibCcsIGdldE1lc3NhZ2UoJ21lc3NhZ2VzLWNhbmNlbCcpKTtcblx0XHRcdGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2FuY2VsLmJpbmQodGhpcykpO1xuXHRcdFx0dGhpcy5jYW5jZWxCdXR0b24gPSBjYW5jZWw7XG5cdFx0XHRjb25zdCBzcGFuID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0c3Bhbi5jbGFzc05hbWUgPSAnaG90Y2F0aW5wdXQnO1xuXHRcdFx0c3Bhbi5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG5cdFx0XHRzcGFuLmFwcGVuZCh0ZXh0KTtcblx0XHRcdHNwYW4uc3R5bGUud2hpdGVTcGFjZSA9ICdub3dyYXAnO1xuXHRcdFx0aWYgKGxpc3QpIHtcblx0XHRcdFx0c3Bhbi5hcHBlbmQobGlzdCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHRzcGFuLmFwcGVuZCh0aGlzLmVuZ2luZVNlbGVjdG9yKTtcblx0XHRcdH1cblx0XHRcdGlmICghbm9TdWdnZXN0aW9ucykge1xuXHRcdFx0XHRzcGFuLmFwcGVuZCh0aGlzLmljb24pO1xuXHRcdFx0fVxuXHRcdFx0c3Bhbi5hcHBlbmQoT0spO1xuXHRcdFx0c3Bhbi5hcHBlbmQoY2FuY2VsKTtcblx0XHRcdGZvcm0uYXBwZW5kKHNwYW4pO1xuXHRcdFx0Zm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0dGhpcy5zcGFuLmFwcGVuZChmb3JtKTtcblx0XHR9XG5cdFx0ZGlzcGxheShldmVudCkge1xuXHRcdFx0aWYgKHRoaXMuaXNBZGRDYXRlZ29yeSAmJiAhb25VcGxvYWQgJiYgdGhpcy5saW5lKSB7XG5cdFx0XHRcdG5ldyBDYXRlZ29yeUVkaXRvcih0aGlzLmxpbmUsIG51bGwsIHRoaXMuc3BhbiwgdHJ1ZSk7IC8vIENyZWF0ZSBhIG5ldyBvbmVcblx0XHRcdH1cblx0XHRcdGlmICghY29tbWl0QnV0dG9uICYmICFvblVwbG9hZCkge1xuXHRcdFx0XHRmb3IgKGNvbnN0IGVkaXRvciBvZiBlZGl0b3JzKSB7XG5cdFx0XHRcdFx0aWYgKGVkaXRvci5zdGF0ZSAhPT0gVU5DSEFOR0VEKSB7XG5cdFx0XHRcdFx0XHRzZXRNdWx0aUlucHV0KCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICghdGhpcy5mb3JtKSB7XG5cdFx0XHRcdHRoaXMubWFrZUZvcm0oKTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmxpc3QpIHtcblx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmN1cnJlbnRDYXRlZ29yeSA9IHRoaXMubGFzdFNhdmVkQ2F0ZWdvcnk7XG5cdFx0XHR0aGlzLmN1cnJlbnRFeGlzdHMgPSB0aGlzLmxhc3RTYXZlZEV4aXN0cztcblx0XHRcdHRoaXMuY3VycmVudEhpZGRlbiA9IHRoaXMubGFzdFNhdmVkSGlkZGVuO1xuXHRcdFx0dGhpcy5jdXJyZW50S2V5ID0gdGhpcy5sYXN0U2F2ZWRLZXk7XG5cdFx0XHR0aGlzLmljb24uc3JjID0gdGhpcy5jdXJyZW50RXhpc3RzID8gSEMuZXhpc3RzWWVzIDogSEMuZXhpc3RzTm87XG5cdFx0XHR0aGlzLnRleHQudmFsdWUgPSB0aGlzLmN1cnJlbnRDYXRlZ29yeSArICh0aGlzLmN1cnJlbnRLZXkgPT09IG51bGwgPyAnJyA6IGB8JHt0aGlzLmN1cnJlbnRLZXl9YCk7XG5cdFx0XHR0aGlzLm9yaWdpbmFsU3RhdGUgPSB0aGlzLnN0YXRlO1xuXHRcdFx0dGhpcy5sYXN0SW5wdXQgPSB0aGlzLmN1cnJlbnRDYXRlZ29yeTtcblx0XHRcdHRoaXMuaW5wdXRFeGlzdHMgPSB0aGlzLmN1cnJlbnRFeGlzdHM7XG5cdFx0XHR0aGlzLnN0YXRlID0gdGhpcy5zdGF0ZSA9PT0gVU5DSEFOR0VEID8gT1BFTiA6IENIQU5HRV9QRU5ESU5HO1xuXHRcdFx0dGhpcy5sYXN0U2VsZWN0aW9uID0ge1xuXHRcdFx0XHRzdGFydDogdGhpcy5jdXJyZW50Q2F0ZWdvcnkubGVuZ3RoLFxuXHRcdFx0XHRlbmQ6IHRoaXMuY3VycmVudENhdGVnb3J5Lmxlbmd0aCxcblx0XHRcdH07XG5cdFx0XHR0aGlzLnNob3dzTGlzdCA9IGZhbHNlO1xuXHRcdFx0Ly8gRGlzcGxheSB0aGUgZm9ybVxuXHRcdFx0aWYgKHRoaXMuY2F0TGluaykge1xuXHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdH1cblx0XHRcdHRoaXMubGlua1NwYW4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdHRoaXMuZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XG5cdFx0XHR0aGlzLm9rLmRpc2FibGVkID0gZmFsc2U7XG5cdFx0XHQvLyBLaWxsIHRoZSBldmVudCBiZWZvcmUgZm9jdXNpbmcsIG90aGVyd2lzZSBJRSB3aWxsIGtpbGwgdGhlIG9uZm9jdXMgZXZlbnQhXG5cdFx0XHRjb25zdCByZXN1bHQgPSBldnRLaWxsKGV2ZW50KTtcblx0XHRcdHRoaXMudGV4dC5mb2N1cygpO1xuXHRcdFx0dGhpcy50ZXh0LnJlYWRPbmx5ID0gZmFsc2U7XG5cdFx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHRcdHNob3coZXZlbnQsIGVuZ2luZSwgcmVhZE9ubHkpIHtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IHRoaXMuZGlzcGxheShldmVudCk7XG5cdFx0XHRjb25zdCB2ID0gdGhpcy5sYXN0U2F2ZWRDYXRlZ29yeTtcblx0XHRcdGlmICh2Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50ZXh0LnJlYWRPbmx5ID0gISFyZWFkT25seTtcblx0XHRcdHRoaXMuZW5naW5lID0gZW5naW5lO1xuXHRcdFx0dGhpcy50ZXh0Y2hhbmdlKGZhbHNlLCB0cnVlKTsgLy8gZG8gYXV0b2NvbXBsZXRpb24sIGZvcmNlIGRpc3BsYXkgb2Ygc3VnZ2VzdGlvbnNcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHRcdG9wZW4oZXZlbnQpIHtcblx0XHRcdHJldHVybiB0aGlzLnNob3coZXZlbnQsIHRoaXMuZW5naW5lICYmIHN1Z2dlc3Rpb25Db25maWdzW3RoaXMuZW5naW5lXS50ZW1wID8gSEMuc3VnZ2VzdGlvbnMgOiB0aGlzLmVuZ2luZSk7XG5cdFx0fVxuXHRcdGRvd24oZXZlbnQpIHtcblx0XHRcdHJldHVybiB0aGlzLnNob3coZXZlbnQsICdzdWJjYXQnLCB0cnVlKTtcblx0XHR9XG5cdFx0dXAoZXZlbnQpIHtcblx0XHRcdHJldHVybiB0aGlzLnNob3coZXZlbnQsICdwYXJlbnRjYXQnKTtcblx0XHR9XG5cdFx0Y2FuY2VsKCkge1xuXHRcdFx0aWYgKHRoaXMuaXNBZGRDYXRlZ29yeSAmJiAhb25VcGxvYWQpIHtcblx0XHRcdFx0dGhpcy5yZW1vdmVFZGl0b3IoKTsgLy8gV2UgYWRkZWQgYSBuZXcgYWRkZXIgd2hlbiBvcGVuaW5nXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdC8vIENsb3NlLCByZS1kaXNwbGF5IGxpbmtcblx0XHRcdHRoaXMuaW5hY3RpdmF0ZSgpO1xuXHRcdFx0dGhpcy5mb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRpZiAodGhpcy5jYXRMaW5rKSB7XG5cdFx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxpbmtTcGFuLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdHRoaXMuc3RhdGUgPSB0aGlzLm9yaWdpbmFsU3RhdGU7XG5cdFx0XHR0aGlzLmN1cnJlbnRDYXRlZ29yeSA9IHRoaXMubGFzdFNhdmVkQ2F0ZWdvcnk7XG5cdFx0XHR0aGlzLmN1cnJlbnRLZXkgPSB0aGlzLmxhc3RTYXZlZEtleTtcblx0XHRcdHRoaXMuY3VycmVudEV4aXN0cyA9IHRoaXMubGFzdFNhdmVkRXhpc3RzO1xuXHRcdFx0dGhpcy5jdXJyZW50SGlkZGVuID0gdGhpcy5sYXN0U2F2ZWRIaWRkZW47XG5cdFx0XHRpZiAodGhpcy5jYXRMaW5rKSB7XG5cdFx0XHRcdHRoaXMuY2F0TGluay50aXRsZSA9IHRoaXMuY3VycmVudEtleSAmJiB0aGlzLmN1cnJlbnRLZXkubGVuZ3RoID4gMCA/IHRoaXMuY3VycmVudEtleSA6ICcnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuc3RhdGUgPT09IFVOQ0hBTkdFRCkge1xuXHRcdFx0XHRpZiAodGhpcy5jYXRMaW5rKSB7XG5cdFx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoIW9uVXBsb2FkKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IEhDLmJnX2NoYW5nZWQ7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdC8qIGVtcHR5ICovXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHRcdH1cblx0XHRyZW1vdmVFZGl0b3IoKSB7XG5cdFx0XHRpZiAoIW5ld0RPTSkge1xuXHRcdFx0XHRjb25zdCBuZXh0ID0gdGhpcy5zcGFuLm5leHRTaWJsaW5nO1xuXHRcdFx0XHRpZiAobmV4dCkge1xuXHRcdFx0XHRcdG5leHQucmVtb3ZlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLnNwYW4gJiYgdGhpcy5zcGFuLnBhcmVudE5vZGUpIHtcblx0XHRcdFx0dGhpcy5zcGFuLnJlbW92ZSgpO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBlZGl0b3JzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChlZGl0b3JzW2ldID09PSB0aGlzKSB7XG5cdFx0XHRcdFx0ZWRpdG9ycy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHRcdH1cblx0XHRyb2xsYmFjayhldmVudCkge1xuXHRcdFx0dGhpcy51bmRvTGluay5yZW1vdmUoKTtcblx0XHRcdHRoaXMudW5kb0xpbmsgPSBudWxsO1xuXHRcdFx0dGhpcy5jdXJyZW50Q2F0ZWdvcnkgPSB0aGlzLm9yaWdpbmFsQ2F0ZWdvcnk7XG5cdFx0XHR0aGlzLmN1cnJlbnRLZXkgPSB0aGlzLm9yaWdpbmFsS2V5O1xuXHRcdFx0dGhpcy5jdXJyZW50RXhpc3RzID0gdGhpcy5vcmlnaW5hbEV4aXN0cztcblx0XHRcdHRoaXMuY3VycmVudEhpZGRlbiA9IHRoaXMub3JpZ2luYWxIaWRkZW47XG5cdFx0XHR0aGlzLmxhc3RTYXZlZENhdGVnb3J5ID0gdGhpcy5vcmlnaW5hbENhdGVnb3J5O1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRLZXkgPSB0aGlzLm9yaWdpbmFsS2V5O1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRFeGlzdHMgPSB0aGlzLm9yaWdpbmFsRXhpc3RzO1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRIaWRkZW4gPSB0aGlzLm9yaWdpbmFsSGlkZGVuO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IFVOQ0hBTkdFRDtcblx0XHRcdGlmICghdGhpcy5jdXJyZW50Q2F0ZWdvcnkgfHwgdGhpcy5jdXJyZW50Q2F0ZWdvcnkubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdC8vIEl0IHdhcyBhIG5ld2x5IGFkZGVkIGNhdGVnb3J5LiBSZW1vdmUgdGhlIHdob2xlIGVkaXRvci5cblx0XHRcdFx0dGhpcy5yZW1vdmVFZGl0b3IoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIFJlZGlzcGxheSB0aGUgbGluay4uLlxuXHRcdFx0XHR0aGlzLmNhdExpbmsuZmlyc3RDaGlsZC5yZW1vdmUoKTtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLmFwcGVuZChtYWtlKHRoaXMuY3VycmVudENhdGVnb3J5LCB0cnVlKSk7XG5cdFx0XHRcdHRoaXMuY2F0TGluay5ocmVmID0gd2lraVBhZ2VQYXRoKGAke0hDLmNhdGVnb3J5X2Nhbm9uaWNhbH06JHt0aGlzLmN1cnJlbnRDYXRlZ29yeX1gKTtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLnRpdGxlID0gdGhpcy5jdXJyZW50S2V5IHx8ICcnO1xuXHRcdFx0XHR0aGlzLmNhdExpbmsuY2xhc3NOYW1lID0gdGhpcy5jdXJyZW50RXhpc3RzID8gJycgOiAnbmV3Jztcblx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG5cdFx0XHRcdGlmICh0aGlzLnVwRG93bkxpbmtzKSB7XG5cdFx0XHRcdFx0dGhpcy51cERvd25MaW5rcy5zdHlsZS5kaXNwbGF5ID0gdGhpcy5jdXJyZW50RXhpc3RzID8gJycgOiAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2hlY2tNdWx0aUlucHV0KCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZXZ0S2lsbChldmVudCk7XG5cdFx0fVxuXHRcdGluYWN0aXZhdGUoKSB7XG5cdFx0XHRpZiAodGhpcy5saXN0KSB7XG5cdFx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5pc19hY3RpdmUgPSBmYWxzZTtcblx0XHR9XG5cdFx0YWNjZXB0Q2hlY2soZG9udENoZWNrKSB7XG5cdFx0XHR0aGlzLnNhbml0aXplSW5wdXQoKTtcblx0XHRcdGNvbnN0IHZhbHVlID0gdGhpcy50ZXh0LnZhbHVlLnNwbGl0KCd8Jyk7XG5cdFx0XHRsZXQga2V5ID0gbnVsbDtcblx0XHRcdGlmICh2YWx1ZS5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFssIGtleV0gPSB2YWx1ZTtcblx0XHRcdH1cblx0XHRcdGxldCB2ID0gdmFsdWVbMF0ucmVwbGFjZSgvXy9nLCAnICcpLnRyaW0oKTtcblx0XHRcdGlmIChIQy5jYXBpdGFsaXplUGFnZU5hbWVzKSB7XG5cdFx0XHRcdHYgPSBjYXBpdGFsaXplKHYpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5sYXN0SW5wdXQgPSB2O1xuXHRcdFx0diA9IHJlcGxhY2VTaG9ydGN1dHModiwgSEMuc2hvcnRjdXRzKTtcblx0XHRcdGlmICh2Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHR0aGlzLmNhbmNlbCgpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdCFkb250Q2hlY2sgJiZcblx0XHRcdFx0KChjb25mLndnTmFtZXNwYWNlTnVtYmVyID09PSAxNCAmJiB2ID09PSBjb25mLndnVGl0bGUpIHx8IChIQy5ibGFja2xpc3QgJiYgSEMuYmxhY2tsaXN0LnRlc3QodikpKVxuXHRcdFx0KSB7XG5cdFx0XHRcdHRoaXMuY2FuY2VsKCk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHRoaXMuY3VycmVudENhdGVnb3J5ID0gdjtcblx0XHRcdHRoaXMuY3VycmVudEtleSA9IGtleTtcblx0XHRcdHRoaXMuY3VycmVudEV4aXN0cyA9IHRoaXMuaW5wdXRFeGlzdHM7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0YWNjZXB0KGV2ZW50KSB7XG5cdFx0XHQvLyAoZXZ0S2V5cyhldmVudCkgJiAxKSAhPT0gMFxuXHRcdFx0Ly8g5b2T5LiU5LuF5b2TZXZ0S2V5cyhldmVudCnkuLox5pe277yM5pW05Liq5Yik5Yir5byP5omN5Li6dHJ1ZVxuXHRcdFx0dGhpcy5ub0NvbW1pdCA9IGV2dEtleXMoZXZlbnQpID09PSAxO1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gZXZ0S2lsbChldmVudCk7XG5cdFx0XHRpZiAodGhpcy5hY2NlcHRDaGVjaygpKSB7XG5cdFx0XHRcdGNvbnN0IHRvUmVzb2x2ZSA9IFt0aGlzXTtcblx0XHRcdFx0Y29uc3Qgb3JpZ2luYWwgPSB0aGlzLmN1cnJlbnRDYXRlZ29yeTtcblx0XHRcdFx0cmVzb2x2ZU11bHRpKHRvUmVzb2x2ZSwgKHJlc29sdmVkKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHJlc29sdmVkWzBdLmRhYikge1xuXHRcdFx0XHRcdFx0c2hvd0RhYihyZXNvbHZlZFswXSk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChyZXNvbHZlZFswXS5hY2NlcHRDaGVjayh0cnVlKSkge1xuXHRcdFx0XHRcdFx0cmVzb2x2ZWRbMF0uY29tbWl0KFxuXHRcdFx0XHRcdFx0XHRyZXNvbHZlZFswXS5jdXJyZW50Q2F0ZWdvcnkgPT09IG9yaWdpbmFsXG5cdFx0XHRcdFx0XHRcdFx0PyBudWxsXG5cdFx0XHRcdFx0XHRcdFx0OiBnZXRNZXNzYWdlKCdtZXNzYWdlcy1jYXRfcmVzb2x2ZWQnLCBvcmlnaW5hbClcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHRcdGNsb3NlKCkge1xuXHRcdFx0aWYgKCF0aGlzLmNhdExpbmspIHtcblx0XHRcdFx0Ly8gQ3JlYXRlIGEgY2F0TGlua1xuXHRcdFx0XHR0aGlzLmNhdExpbmsgPSBtYWtlKCdhJyk7XG5cdFx0XHRcdHRoaXMuY2F0TGluay5hcHBlbmQobWFrZSgnZm9vJywgdHJ1ZSkpO1xuXHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0dGhpcy5zcGFuLmluc2VydEJlZm9yZSh0aGlzLmNhdExpbmssIHRoaXMuc3Bhbi5maXJzdENoaWxkLm5leHRTaWJsaW5nKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuY2F0TGluay5maXJzdENoaWxkLnJlbW92ZSgpO1xuXHRcdFx0dGhpcy5jYXRMaW5rLmFwcGVuZChtYWtlKHRoaXMuY3VycmVudENhdGVnb3J5LCB0cnVlKSk7XG5cdFx0XHR0aGlzLmNhdExpbmsuaHJlZiA9IHdpa2lQYWdlUGF0aChgJHtIQy5jYXRlZ29yeV9jYW5vbmljYWx9OiR7dGhpcy5jdXJyZW50Q2F0ZWdvcnl9YCk7XG5cdFx0XHR0aGlzLmNhdExpbmsuY2xhc3NOYW1lID0gdGhpcy5jdXJyZW50RXhpc3RzID8gJycgOiAnbmV3Jztcblx0XHRcdHRoaXMubGFzdFNhdmVkQ2F0ZWdvcnkgPSB0aGlzLmN1cnJlbnRDYXRlZ29yeTtcblx0XHRcdHRoaXMubGFzdFNhdmVkS2V5ID0gdGhpcy5jdXJyZW50S2V5O1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRFeGlzdHMgPSB0aGlzLmN1cnJlbnRFeGlzdHM7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZEhpZGRlbiA9IHRoaXMuY3VycmVudEhpZGRlbjtcblx0XHRcdC8vIENsb3NlIGZvcm0gYW5kIHJlZGlzcGxheSBjYXRlZ29yeVxuXHRcdFx0dGhpcy5pbmFjdGl2YXRlKCk7XG5cdFx0XHR0aGlzLmZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdHRoaXMuY2F0TGluay50aXRsZSA9IHRoaXMuY3VycmVudEtleSB8fCAnJztcblx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHRpZiAodGhpcy5pc0FkZENhdGVnb3J5KSB7XG5cdFx0XHRcdGlmIChvblVwbG9hZCAmJiB0aGlzLmxpbmUpIHtcblx0XHRcdFx0XHRuZXcgQ2F0ZWdvcnlFZGl0b3IodGhpcy5saW5lLCBudWxsLCB0aGlzLnNwYW4sIHRydWUpOyAvLyBDcmVhdGUgYSBuZXcgb25lXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5pc0FkZENhdGVnb3J5ID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMubGlua1NwYW4ucmVtb3ZlKCk7XG5cdFx0XHRcdHRoaXMubWFrZUxpbmtTcGFuKCk7XG5cdFx0XHRcdHRoaXMuc3Bhbi5hcHBlbmQodGhpcy5saW5rU3Bhbik7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIXRoaXMudW5kb0xpbmspIHtcblx0XHRcdFx0Ly8gQXBwZW5kIGFuIHVuZG8gbGluay5cblx0XHRcdFx0Y29uc3Qgc3BhbiA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdFx0Y29uc3QgbGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdFx0bGluay5ocmVmID0gJyNjYXRsaW5rcyc7XG5cdFx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJvbGxiYWNrLmJpbmQodGhpcykpO1xuXHRcdFx0XHRsaW5rLmFwcGVuZChtYWtlKEhDLmxpbmtzLnVuZG8sIHRydWUpKTtcblx0XHRcdFx0bGluay50aXRsZSA9IGdldE1lc3NhZ2UoJ3Rvb2x0aXBzLXVuZG8nKTtcblx0XHRcdFx0c3Bhbi5hcHBlbmQobWFrZSgnICcsIHRydWUpKTtcblx0XHRcdFx0c3Bhbi5hcHBlbmQobGluayk7XG5cdFx0XHRcdHRoaXMubm9ybWFsTGlua3MuYXBwZW5kKHNwYW4pO1xuXHRcdFx0XHR0aGlzLnVuZG9MaW5rID0gc3Bhbjtcblx0XHRcdFx0aWYgKCFvblVwbG9hZCkge1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gSEMuYmdfY2hhbmdlZDtcblx0XHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHRcdC8qIGVtcHR5ICovXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy51cERvd25MaW5rcykge1xuXHRcdFx0XHR0aGlzLnVwRG93bkxpbmtzLnN0eWxlLmRpc3BsYXkgPSB0aGlzLmxhc3RTYXZlZEV4aXN0cyA/ICcnIDogJ25vbmUnO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5saW5rU3Bhbi5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHR0aGlzLnN0YXRlID0gQ0hBTkdFRDtcblx0XHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHRcdH1cblx0XHRjb21taXQoKSB7XG5cdFx0XHQvLyBDaGVjayBhZ2FpbiB0byBjYXRjaCBwcm9ibGVtIGNhc2VzIGFmdGVyIHJlZGlyZWN0IHJlc29sdXRpb25cblx0XHRcdGlmIChcblx0XHRcdFx0KHRoaXMuY3VycmVudENhdGVnb3J5ID09PSB0aGlzLm9yaWdpbmFsQ2F0ZWdvcnkgJiZcblx0XHRcdFx0XHQodGhpcy5jdXJyZW50S2V5ID09PSB0aGlzLm9yaWdpbmFsS2V5IHx8XG5cdFx0XHRcdFx0XHQodGhpcy5jdXJyZW50S2V5ID09PSBudWxsICYmIHRoaXMub3JpZ2luYWxLZXkubGVuZ3RoID09PSAwKSkpIHx8XG5cdFx0XHRcdChjb25mLndnTmFtZXNwYWNlTnVtYmVyID09PSAxNCAmJiB0aGlzLmN1cnJlbnRDYXRlZ29yeSA9PT0gY29uZi53Z1RpdGxlKSB8fFxuXHRcdFx0XHQoSEMuYmxhY2tsaXN0ICYmIEhDLmJsYWNrbGlzdC50ZXN0KHRoaXMuY3VycmVudENhdGVnb3J5KSlcblx0XHRcdCkge1xuXHRcdFx0XHR0aGlzLmNhbmNlbCgpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmNsb3NlKCk7XG5cdFx0XHRpZiAoIWNvbW1pdEJ1dHRvbiAmJiAhb25VcGxvYWQpIHtcblx0XHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHRcdGluaXRpYXRlRWRpdChcblx0XHRcdFx0XHQoZmFpbHVyZSkgPT4ge1xuXHRcdFx0XHRcdFx0cGVyZm9ybUNoYW5nZXMoZmFpbHVyZSwgc2VsZik7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQobXNnKSA9PiB7XG5cdFx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeShtc2csIHt0YWc6ICdob3RDYXQnfSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZW1vdmUoZXZlbnQpIHtcblx0XHRcdC8vIChldnRLZXlzKGV2ZW50KSAmIDEpXG5cdFx0XHQvLyDlvZPkuJTku4XlvZNldnRLZXlzKGV2ZW50KeS4ujHml7bvvIzmlbTkuKrliKTliKvlvI/miY3kuLox77yM5ZCm5YiZ6YO95pivMFxuXHRcdFx0dGhpcy5kb1JlbW92ZShldnRLZXlzKGV2ZW50KSA9PT0gMSk7XG5cdFx0XHRyZXR1cm4gZXZ0S2lsbChldmVudCk7XG5cdFx0fVxuXHRcdGRvUmVtb3ZlKG5vQ29tbWl0KSB7XG5cdFx0XHRpZiAodGhpcy5pc0FkZENhdGVnb3J5KSB7XG5cdFx0XHRcdC8vIEVtcHR5IGlucHV0IG9uIGFkZGluZyBhIG5ldyBjYXRlZ29yeVxuXHRcdFx0XHR0aGlzLmNhbmNlbCgpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWNvbW1pdEJ1dHRvbiAmJiAhb25VcGxvYWQpIHtcblx0XHRcdFx0Zm9yIChjb25zdCBlZGl0b3Igb2YgZWRpdG9ycykge1xuXHRcdFx0XHRcdGlmIChlZGl0b3Iuc3RhdGUgIT09IFVOQ0hBTkdFRCkge1xuXHRcdFx0XHRcdFx0c2V0TXVsdGlJbnB1dCgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoY29tbWl0QnV0dG9uKSB7XG5cdFx0XHRcdHRoaXMuY2F0TGluay50aXRsZSA9ICcnO1xuXHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuY3NzVGV4dCArPSAnOyB0ZXh0LWRlY29yYXRpb24gOiBsaW5lLXRocm91Z2ggIWltcG9ydGFudDsnO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBIQy5iZ19jaGFuZ2VkO1xuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHQvKiBlbXB0eSAqL1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMub3JpZ2luYWxTdGF0ZSA9IHRoaXMuc3RhdGU7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSBERUxFVEVEO1xuXHRcdFx0XHR0aGlzLm5vcm1hbExpbmtzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdHRoaXMudW5kZWxMaW5rLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdFx0Y2hlY2tNdWx0aUlucHV0KCk7XG5cdFx0XHR9IGVsc2UgaWYgKG9uVXBsb2FkKSB7XG5cdFx0XHRcdC8vIFJlbW92ZSB0aGlzIGVkaXRvciBjb21wbGV0ZWx5XG5cdFx0XHRcdHRoaXMucmVtb3ZlRWRpdG9yKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLm9yaWdpbmFsU3RhdGUgPSB0aGlzLnN0YXRlO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gREVMRVRFRDtcblx0XHRcdFx0dGhpcy5ub0NvbW1pdCA9IG5vQ29tbWl0IHx8IEhDLmRlbF9uZWVkc19kaWZmO1xuXHRcdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdFx0aW5pdGlhdGVFZGl0KFxuXHRcdFx0XHRcdChmYWlsdXJlKSA9PiB7XG5cdFx0XHRcdFx0XHRwZXJmb3JtQ2hhbmdlcyhmYWlsdXJlLCBzZWxmKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdChtc2cpID0+IHtcblx0XHRcdFx0XHRcdHNlbGYuc3RhdGUgPSBzZWxmLm9yaWdpbmFsU3RhdGU7XG5cdFx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeShtc2csIHt0YWc6ICdob3RDYXQnfSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXN0b3JlKGV2ZW50KSB7XG5cdFx0XHQvLyBDYW4gb2NjdXIgb25seSBpZiB3ZSBkbyBoYXZlIGEgY29tbWl0IGJ1dHRvbiBhbmQgYXJlIG5vdCBvbiB0aGUgdXBsb2FkIGZvcm1cblx0XHRcdHRoaXMuY2F0TGluay50aXRsZSA9IHRoaXMuY3VycmVudEtleSB8fCAnJztcblx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICcnO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IHRoaXMub3JpZ2luYWxTdGF0ZTtcblx0XHRcdGlmICh0aGlzLnN0YXRlID09PSBVTkNIQU5HRUQpIHtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBIQy5iZ19jaGFuZ2VkO1xuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHQvKiBlbXB0eSAqL1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLm5vcm1hbExpbmtzLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdHRoaXMudW5kZWxMaW5rLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0XHRcdHJldHVybiBldnRLaWxsKGV2ZW50KTtcblx0XHR9XG5cdFx0Ly8gSW50ZXJuYWwgb3BlcmF0aW9uc1xuXHRcdHNlbGVjdEVuZ2luZShlbmdpbmVOYW1lKSB7XG5cdFx0XHRpZiAoIXRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVuZ2luZVNlbGVjdG9yLm9wdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5vcHRpb25zW2ldLnNlbGVjdGVkID0gdGhpcy5lbmdpbmVTZWxlY3Rvci5vcHRpb25zW2ldLnZhbHVlID09PSBlbmdpbmVOYW1lO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRzYW5pdGl6ZUlucHV0KCkge1xuXHRcdFx0bGV0IHYgPSB0aGlzLnRleHQudmFsdWUgfHwgJyc7XG5cdFx0XHR2ID0gdi5yZXBsYWNlKC9eKFxcc3xfKSsvLCAnJyk7IC8vIFRyaW0gbGVhZGluZyBibGFua3MgYW5kIHVuZGVyc2NvcmVzXG5cdFx0XHRjb25zdCByZSA9IG5ldyBSZWdFeHAoYF4oJHtIQy5jYXRlZ29yeV9yZWdleHB9KTpgKTtcblx0XHRcdGlmIChyZS50ZXN0KHYpKSB7XG5cdFx0XHRcdHYgPSB2LnNsaWNlKE1hdGgubWF4KDAsIHYuaW5kZXhPZignOicpICsgMSkpLnJlcGxhY2UoL14oXFxzfF8pKy8sICcnKTtcblx0XHRcdH1cblx0XHRcdHYgPSB2LnJlcGxhY2UoL1xcdTIwMEUkLywgJycpOyAvLyBUcmltIGVuZGluZyBsZWZ0LXRvLXJpZ2h0IG1hcmtcblx0XHRcdGlmIChIQy5jYXBpdGFsaXplUGFnZU5hbWVzKSB7XG5cdFx0XHRcdHYgPSBjYXBpdGFsaXplKHYpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gT25seSB1cGRhdGUgdGhlIGlucHV0IGZpZWxkIGlmIHRoZXJlIGlzIGEgZGlmZmVyZW5jZS4gVmFyaW91cyBicm93c2VycyBvdGhlcndpc2Vcblx0XHRcdC8vIHJlc2V0IHRoZSBzZWxlY3Rpb24gYW5kIGN1cnNvciBwb3NpdGlvbiBhZnRlciBlYWNoIHZhbHVlIHJlLWFzc2lnbm1lbnQuXG5cdFx0XHRpZiAodGhpcy50ZXh0LnZhbHVlICE9PSBudWxsICYmIHRoaXMudGV4dC52YWx1ZSAhPT0gdikge1xuXHRcdFx0XHR0aGlzLnRleHQudmFsdWUgPSB2O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRtYWtlQ2FsbCh1cmwsIGNhbGxiYWNrT2JqLCBlbmdpbmUsIHF1ZXJ5S2V5LCBjbGVhbktleSkge1xuXHRcdFx0bGV0IGNiID0gY2FsbGJhY2tPYmo7XG5cdFx0XHRjb25zdCBlID0gZW5naW5lO1xuXHRcdFx0Y29uc3QgdiA9IHF1ZXJ5S2V5O1xuXHRcdFx0Y29uc3QgeiA9IGNsZWFuS2V5O1xuXHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHRjb25zdCBkb25lID0gKCkgPT4ge1xuXHRcdFx0XHRjYi5jYWxsc01hZGUrKztcblx0XHRcdFx0aWYgKGNiLmNhbGxzTWFkZSA9PT0gY2Iubm9mQ2FsbHMpIHtcblx0XHRcdFx0XHRpZiAoY2IuZXhpc3RzKSB7XG5cdFx0XHRcdFx0XHRjYi5hbGxUaXRsZXMuZXhpc3RzID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGNiLm5vcm1hbGl6ZWQpIHtcblx0XHRcdFx0XHRcdGNiLmFsbFRpdGxlcy5ub3JtYWxpemVkID0gY2Iubm9ybWFsaXplZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKCFjYi5kb250Q2FjaGUgJiYgIXN1Z2dlc3Rpb25Db25maWdzW2NiLmVuZ2luZU5hbWVdLmNhY2hlW3pdKSB7XG5cdFx0XHRcdFx0XHRzdWdnZXN0aW9uQ29uZmlnc1tjYi5lbmdpbmVOYW1lXS5jYWNoZVt6XSA9IGNiLmFsbFRpdGxlcztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0c2VsZi50ZXh0LnJlYWRPbmx5ID0gZmFsc2U7XG5cdFx0XHRcdFx0aWYgKCFjYi5jYW5jZWxsZWQpIHtcblx0XHRcdFx0XHRcdHNlbGYuc2hvd1N1Z2dlc3Rpb25zKGNiLmFsbFRpdGxlcywgY2Iubm9Db21wbGV0aW9uLCB2LCBjYi5lbmdpbmVOYW1lKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGNiID09PSBzZWxmLmNhbGxiYWNrT2JqKSB7XG5cdFx0XHRcdFx0XHRzZWxmLmNhbGxiYWNrT2JqID0gbnVsbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y2IgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHQkLmdldEpTT04odXJsLCAoanNvbikgPT4ge1xuXHRcdFx0XHRjb25zdCB0aXRsZXMgPSBlLmhhbmRsZXIoanNvbiwgeik7XG5cdFx0XHRcdGlmICh0aXRsZXMgJiYgdGl0bGVzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRjYi5hbGxUaXRsZXMgPSBjYi5hbGxUaXRsZXMgPT09IG51bGwgPyB0aXRsZXMgOiBbLi4uY2IuYWxsVGl0bGVzLCAuLi5nZW5lcmF0ZUFycmF5KHRpdGxlcyldO1xuXHRcdFx0XHRcdGlmICh0aXRsZXMuZXhpc3RzKSB7XG5cdFx0XHRcdFx0XHRjYi5leGlzdHMgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAodGl0bGVzLm5vcm1hbGl6ZWQpIHtcblx0XHRcdFx0XHRcdGNiLm5vcm1hbGl6ZWQgPSB0aXRsZXMubm9ybWFsaXplZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0ZG9uZSgpO1xuXHRcdFx0fSkuZmFpbCgocmVxKSA9PiB7XG5cdFx0XHRcdGlmICghcmVxKSB7XG5cdFx0XHRcdFx0bm9TdWdnZXN0aW9ucyA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2IuZG9udENhY2hlID0gdHJ1ZTtcblx0XHRcdFx0ZG9uZSgpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGNhbGxiYWNrT2JqID0gbnVsbDtcblx0XHR0ZXh0Y2hhbmdlKGRvbnRfYXV0b2NvbXBsZXRlLCBmb3JjZSkge1xuXHRcdFx0Ly8gSGlkZSBhbGwgb3RoZXIgbGlzdHNcblx0XHRcdG1ha2VBY3RpdmUodGhpcyk7XG5cdFx0XHQvLyBHZXQgaW5wdXQgdmFsdWUsIG9taXQgc29ydCBrZXksIGlmIGFueVxuXHRcdFx0dGhpcy5zYW5pdGl6ZUlucHV0KCk7XG5cdFx0XHRsZXQgdiA9IHRoaXMudGV4dC52YWx1ZTtcblx0XHRcdC8vIERpc3JlZ2FyZCBhbnl0aGluZyBhZnRlciBhIHBpcGUuXG5cdFx0XHRjb25zdCBwaXBlID0gdi5pbmRleE9mKCd8Jyk7XG5cdFx0XHRpZiAocGlwZSA9PT0gLTEpIHtcblx0XHRcdFx0dGhpcy5jdXJyZW50S2V5ID0gbnVsbDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuY3VycmVudEtleSA9IHYuc2xpY2UoTWF0aC5tYXgoMCwgcGlwZSArIDEpKTtcblx0XHRcdFx0diA9IHYuc2xpY2UoMCwgTWF0aC5tYXgoMCwgcGlwZSkpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMubGFzdElucHV0ID09PSB2ICYmICFmb3JjZSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9IC8vIE5vIGNoYW5nZVxuXHRcdFx0aWYgKHRoaXMubGFzdElucHV0ICE9PSB2KSB7XG5cdFx0XHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5sYXN0SW5wdXQgPSB2O1xuXHRcdFx0dGhpcy5sYXN0UmVhbElucHV0ID0gdjtcblx0XHRcdC8vIE1hcmsgYmxhY2tsaXN0ZWQgaW5wdXRzLlxuXHRcdFx0dGhpcy5vay5kaXNhYmxlZCA9IHYubGVuZ3RoID4gMCAmJiBIQy5ibGFja2xpc3QgJiYgSEMuYmxhY2tsaXN0LnRlc3Qodik7XG5cdFx0XHRpZiAobm9TdWdnZXN0aW9ucykge1xuXHRcdFx0XHQvLyBObyBBamF4OiBqdXN0IG1ha2Ugc3VyZSB0aGUgbGlzdCBpcyBoaWRkZW5cblx0XHRcdFx0aWYgKHRoaXMubGlzdCkge1xuXHRcdFx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLmljb24pIHtcblx0XHRcdFx0XHR0aGlzLmljb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAodi5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0dGhpcy5zaG93U3VnZ2VzdGlvbnMoW10pO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRsZXQgY2xlYW5LZXkgPSB2LnJlcGxhY2UoL1tcXHUyMDBFXFx1MjAwRlxcdTIwMkEtXFx1MjAyRV0vZywgJycpLnJlcGxhY2Uod2lraVRleHRCbGFua1JFLCAnICcpO1xuXHRcdFx0Y2xlYW5LZXkgPSByZXBsYWNlU2hvcnRjdXRzKGNsZWFuS2V5LCBIQy5zaG9ydGN1dHMpO1xuXHRcdFx0Y2xlYW5LZXkgPSBjbGVhbktleS50cmltKCk7XG5cdFx0XHRpZiAoY2xlYW5LZXkubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHRoaXMuc2hvd1N1Z2dlc3Rpb25zKFtdKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuY2FsbGJhY2tPYmopIHtcblx0XHRcdFx0dGhpcy5jYWxsYmFja09iai5jYW5jZWxsZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgZW5naW5lTmFtZSA9IHN1Z2dlc3Rpb25Db25maWdzW3RoaXMuZW5naW5lXSA/IHRoaXMuZW5naW5lIDogJ2NvbWJpbmVkJztcblx0XHRcdGRvbnRfYXV0b2NvbXBsZXRlIHx8PSBzdWdnZXN0aW9uQ29uZmlnc1tlbmdpbmVOYW1lXS5ub0NvbXBsZXRpb247XG5cdFx0XHRpZiAoc3VnZ2VzdGlvbkNvbmZpZ3NbZW5naW5lTmFtZV0uY2FjaGVbY2xlYW5LZXldKSB7XG5cdFx0XHRcdHRoaXMuc2hvd1N1Z2dlc3Rpb25zKHN1Z2dlc3Rpb25Db25maWdzW2VuZ2luZU5hbWVdLmNhY2hlW2NsZWFuS2V5XSwgZG9udF9hdXRvY29tcGxldGUsIHYsIGVuZ2luZU5hbWUpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCB7ZW5naW5lc30gPSBzdWdnZXN0aW9uQ29uZmlnc1tlbmdpbmVOYW1lXTtcblx0XHRcdHRoaXMuY2FsbGJhY2tPYmogPSB7XG5cdFx0XHRcdGFsbFRpdGxlczogbnVsbCxcblx0XHRcdFx0Y2FsbHNNYWRlOiAwLFxuXHRcdFx0XHRub2ZDYWxsczogZW5naW5lcy5sZW5ndGgsXG5cdFx0XHRcdG5vQ29tcGxldGlvbjogZG9udF9hdXRvY29tcGxldGUsXG5cdFx0XHRcdGVuZ2luZU5hbWUsXG5cdFx0XHR9O1xuXHRcdFx0dGhpcy5tYWtlQ2FsbHMoZW5naW5lcywgdGhpcy5jYWxsYmFja09iaiwgdiwgY2xlYW5LZXkpO1xuXHRcdH1cblx0XHRtYWtlQ2FsbHMoZW5naW5lcywgY2IsIHYsIGNsZWFuS2V5KSB7XG5cdFx0XHRmb3IgKGNvbnN0IGVuZ2luZV8gb2YgZW5naW5lcykge1xuXHRcdFx0XHRjb25zdCBlbmdpbmUgPSBzdWdnZXN0aW9uRW5naW5lc1tlbmdpbmVfXTtcblx0XHRcdFx0Y29uc3QgdXJsID0gY29uZi53Z1NjcmlwdFBhdGggKyBlbmdpbmUudXJpLnJlcGxhY2UoL1xcJDEvZywgZW5jb2RlVVJJQ29tcG9uZW50KGNsZWFuS2V5KSk7XG5cdFx0XHRcdHRoaXMubWFrZUNhbGwodXJsLCBjYiwgZW5naW5lLCB2LCBjbGVhbktleSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHNob3dTdWdnZXN0aW9ucyh0aXRsZXMsIGRvbnRBdXRvY29tcGxldGUsIHF1ZXJ5S2V5LCBlbmdpbmVOYW1lKSB7XG5cdFx0XHR0aGlzLnRleHQucmVhZE9ubHkgPSBmYWxzZTtcblx0XHRcdHRoaXMuZGFiID0gbnVsbDtcblx0XHRcdHRoaXMuc2hvd3NMaXN0ID0gZmFsc2U7XG5cdFx0XHRpZiAoIXRoaXMubGlzdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAobm9TdWdnZXN0aW9ucykge1xuXHRcdFx0XHRpZiAodGhpcy5saXN0KSB7XG5cdFx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMuaWNvbikge1xuXHRcdFx0XHRcdHRoaXMuaWNvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuaW5wdXRFeGlzdHMgPSB0cnVlOyAvLyBEZWZhdWx0Li4uXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRoaXMuZW5naW5lTmFtZSA9IGVuZ2luZU5hbWU7XG5cdFx0XHRpZiAoZW5naW5lTmFtZSkge1xuXHRcdFx0XHRpZiAoIXRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZU5hbWUgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHF1ZXJ5S2V5KSB7XG5cdFx0XHRcdGlmICh0aGlzLmxhc3RJbnB1dC5pbmRleE9mKHF1ZXJ5S2V5KSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0dGhpcy5sYXN0UXVlcnkgJiZcblx0XHRcdFx0XHR0aGlzLmxhc3RJbnB1dC5pbmRleE9mKHRoaXMubGFzdFF1ZXJ5KSA9PT0gMCAmJlxuXHRcdFx0XHRcdHRoaXMubGFzdFF1ZXJ5Lmxlbmd0aCA+IHF1ZXJ5S2V5Lmxlbmd0aFxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMubGFzdFF1ZXJ5ID0gcXVlcnlLZXk7XG5cdFx0XHQvLyBHZXQgY3VycmVudCBpbnB1dCB0ZXh0XG5cdFx0XHRsZXQgdiA9IHRoaXMudGV4dC52YWx1ZS5zcGxpdCgnfCcpO1xuXHRcdFx0Y29uc3Qga2V5ID0gdi5sZW5ndGggPiAxID8gYHwke3ZbMV19YCA6ICcnO1xuXHRcdFx0diA9IEhDLmNhcGl0YWxpemVQYWdlTmFtZXMgPyBjYXBpdGFsaXplKHZbMF0pIDogdlswXTtcblx0XHRcdGxldCB2Tm9ybWFsaXplZCA9IHY7XG5cdFx0XHRjb25zdCBrbm93blRvRXhpc3QgPSB0aXRsZXMgJiYgdGl0bGVzLmV4aXN0cztcblx0XHRcdGxldCBpO1xuXHRcdFx0aWYgKHRpdGxlcykge1xuXHRcdFx0XHRpZiAodGl0bGVzLm5vcm1hbGl6ZWQgJiYgdi5pbmRleE9mKHF1ZXJ5S2V5KSA9PT0gMCkge1xuXHRcdFx0XHRcdC8vIFdlIGdvdCBiYWNrIGEgZGlmZmVyZW50IG5vcm1hbGl6YXRpb24gdGhhbiB3aGF0IGlzIGluIHRoZSBpbnB1dCBmaWVsZFxuXHRcdFx0XHRcdHZOb3JtYWxpemVkID0gdGl0bGVzLm5vcm1hbGl6ZWQgKyB2LnNsaWNlKHF1ZXJ5S2V5Lmxlbmd0aCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgdkxvdyA9IHZOb3JtYWxpemVkLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdC8vIFN0cmlwIGJsYWNrbGlzdGVkIGNhdGVnb3JpZXNcblx0XHRcdFx0aWYgKEhDLmJsYWNrbGlzdCkge1xuXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCB0aXRsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdGlmIChIQy5ibGFja2xpc3QudGVzdCh0aXRsZXNbaV0pKSB7XG5cdFx0XHRcdFx0XHRcdHRpdGxlcy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdFx0XHRcdGktLTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dGl0bGVzLnNvcnQoKGEsIGIpID0+IHtcblx0XHRcdFx0XHRpZiAoYSA9PT0gYikge1xuXHRcdFx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChhLmluZGV4T2YoYikgPT09IDApIHtcblx0XHRcdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBhIGJlZ2lucyB3aXRoIGI6IGEgPiBiXG5cdFx0XHRcdFx0aWYgKGIuaW5kZXhPZihhKSA9PT0gMCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBiIGJlZ2lucyB3aXRoIGE6IGEgPCBiXG5cdFx0XHRcdFx0Ly8gT3BlbnNlYXJjaCBtYXkgcmV0dXJuIHN0dWZmIG5vdCBiZWdpbm5pbmcgd2l0aCB0aGUgc2VhcmNoIHByZWZpeCFcblx0XHRcdFx0XHRsZXQgcHJlZml4TWF0Y2hBID0gYS5pbmRleE9mKHZOb3JtYWxpemVkKSA9PT0gMCA/IDEgOiAwO1xuXHRcdFx0XHRcdGxldCBwcmVmaXhNYXRjaEIgPSBiLmluZGV4T2Yodk5vcm1hbGl6ZWQpID09PSAwID8gMSA6IDA7XG5cdFx0XHRcdFx0aWYgKHByZWZpeE1hdGNoQSAhPT0gcHJlZml4TWF0Y2hCKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcHJlZml4TWF0Y2hCIC0gcHJlZml4TWF0Y2hBO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBDYXNlLWluc2Vuc2l0aXZlIHByZWZpeCBtYXRjaCFcblx0XHRcdFx0XHRjb25zdCBhTG93ID0gYS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHRcdGNvbnN0IGJMb3cgPSBiLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdFx0cHJlZml4TWF0Y2hBID0gYUxvdy5pbmRleE9mKHZMb3cpID09PSAwID8gMSA6IDA7XG5cdFx0XHRcdFx0cHJlZml4TWF0Y2hCID0gYkxvdy5pbmRleE9mKHZMb3cpID09PSAwID8gMSA6IDA7XG5cdFx0XHRcdFx0aWYgKHByZWZpeE1hdGNoQSAhPT0gcHJlZml4TWF0Y2hCKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcHJlZml4TWF0Y2hCIC0gcHJlZml4TWF0Y2hBO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoYSA8IGIpIHtcblx0XHRcdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGIgPCBhKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQvLyBSZW1vdmUgZHVwbGljYXRlcyBhbmQgc2VsZi1yZWZlcmVuY2VzXG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCB0aXRsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0XHQoaSArIDEgPCB0aXRsZXMubGVuZ3RoICYmIHRpdGxlc1tpXSA9PT0gdGl0bGVzW2kgKyAxXSkgfHxcblx0XHRcdFx0XHRcdChjb25mLndnTmFtZXNwYWNlTnVtYmVyID09PSAxNCAmJiB0aXRsZXNbaV0gPT09IGNvbmYud2dUaXRsZSlcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdHRpdGxlcy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdFx0XHRpLS07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoIXRpdGxlcyB8fCB0aXRsZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdGlmICh0aGlzLmxpc3QpIHtcblx0XHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZW5naW5lTmFtZSAmJiBzdWdnZXN0aW9uQ29uZmlnc1tlbmdpbmVOYW1lXSAmJiAhc3VnZ2VzdGlvbkNvbmZpZ3NbZW5naW5lTmFtZV0udGVtcCkge1xuXHRcdFx0XHRcdGlmICh0aGlzLmljb24pIHtcblx0XHRcdFx0XHRcdHRoaXMuaWNvbi5zcmMgPSBIQy5leGlzdHNObztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5pbnB1dEV4aXN0cyA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IFtmaXJzdFRpdGxlXSA9IHRpdGxlcztcblx0XHRcdGNvbnN0IGNvbXBsZXRlZCA9IHRoaXMuYXV0b0NvbXBsZXRlKGZpcnN0VGl0bGUsIHYsIHZOb3JtYWxpemVkLCBrZXksIGRvbnRBdXRvY29tcGxldGUpO1xuXHRcdFx0Y29uc3QgZXhpc3RpbmcgPSBjb21wbGV0ZWQgfHwga25vd25Ub0V4aXN0IHx8IGZpcnN0VGl0bGUgPT09IHJlcGxhY2VTaG9ydGN1dHModiwgSEMuc2hvcnRjdXRzKTtcblx0XHRcdGlmIChlbmdpbmVOYW1lICYmIHN1Z2dlc3Rpb25Db25maWdzW2VuZ2luZU5hbWVdICYmICFzdWdnZXN0aW9uQ29uZmlnc1tlbmdpbmVOYW1lXS50ZW1wKSB7XG5cdFx0XHRcdHRoaXMuaWNvbi5zcmMgPSBleGlzdGluZyA/IEhDLmV4aXN0c1llcyA6IEhDLmV4aXN0c05vO1xuXHRcdFx0XHR0aGlzLmlucHV0RXhpc3RzID0gZXhpc3Rpbmc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY29tcGxldGVkKSB7XG5cdFx0XHRcdHRoaXMubGFzdElucHV0ID0gZmlyc3RUaXRsZTtcblx0XHRcdFx0aWYgKHRpdGxlcy5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0XHRpZiAodGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIChSZS0pZmlsbCB0aGUgbGlzdFxuXHRcdFx0d2hpbGUgKHRoaXMubGlzdC5maXJzdENoaWxkKSB7XG5cdFx0XHRcdHRoaXMubGlzdC5maXJzdENoaWxkLnJlbW92ZSgpO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChpID0gMDsgaSA8IHRpdGxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCBvcHQgPSBtYWtlKCdvcHRpb24nKTtcblx0XHRcdFx0b3B0LmFwcGVuZChtYWtlKHRpdGxlc1tpXSwgdHJ1ZSkpO1xuXHRcdFx0XHRvcHQuc2VsZWN0ZWQgPSBjb21wbGV0ZWQgJiYgaSA9PT0gMDtcblx0XHRcdFx0dGhpcy5saXN0LmFwcGVuZChvcHQpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5kaXNwbGF5TGlzdCgpO1xuXHRcdH1cblx0XHRkaXNwbGF5TGlzdCgpIHtcblx0XHRcdHRoaXMuc2hvd3NMaXN0ID0gdHJ1ZTtcblx0XHRcdGlmICghdGhpcy5pc19hY3RpdmUpIHtcblx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGxldCBub2ZJdGVtcyA9IE1hdGgubWluKHRoaXMubGlzdC5vcHRpb25zLmxlbmd0aCwgSEMubGlzdFNpemUpO1xuXHRcdFx0aWYgKG5vZkl0ZW1zIDw9IDEpIHtcblx0XHRcdFx0bm9mSXRlbXMgPSAyO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5saXN0LnNpemUgPSBub2ZJdGVtcztcblx0XHRcdHRoaXMubGlzdC5zdHlsZS5hbGlnbiA9IGlzX3J0bCA/ICdyaWdodCcgOiAnbGVmdCc7XG5cdFx0XHR0aGlzLmxpc3Quc3R5bGUuekluZGV4ID0gNTtcblx0XHRcdHRoaXMubGlzdC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG5cdFx0XHQvLyBDb21wdXRlIGluaXRpYWwgbGlzdCBwb3NpdGlvbi4gRmlyc3QgdGhlIGhlaWdodC5cblx0XHRcdGNvbnN0IGFuY2hvciA9IGlzX3J0bCA/ICdyaWdodCcgOiAnbGVmdCc7XG5cdFx0XHRsZXQgbGlzdGggPSAwO1xuXHRcdFx0aWYgKHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcblx0XHRcdFx0Ly8gT2ZmLXNjcmVlbiBkaXNwbGF5IHRvIGdldCB0aGUgaGVpZ2h0XG5cdFx0XHRcdHRoaXMubGlzdC5zdHlsZS50b3AgPSBgJHt0aGlzLnRleHQub2Zmc2V0VG9wfXB4YDtcblx0XHRcdFx0dGhpcy5saXN0LnN0eWxlW2FuY2hvcl0gPSAnLTEwMDAwcHgnO1xuXHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0XHRsaXN0aCA9IHRoaXMubGlzdC5vZmZzZXRIZWlnaHQ7XG5cdFx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bGlzdGggPSB0aGlzLmxpc3Qub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0fVxuXHRcdFx0Ly8gQXBwcm94aW1hdGUgY2FsY3VsYXRpb24gb2YgbWF4aW11bSBsaXN0IHNpemVcblx0XHRcdGxldCBtYXhMaXN0SGVpZ2h0ID0gbGlzdGg7XG5cdFx0XHRpZiAobm9mSXRlbXMgPCBIQy5saXN0U2l6ZSkge1xuXHRcdFx0XHRtYXhMaXN0SGVpZ2h0ID0gKGxpc3RoIC8gbm9mSXRlbXMpICogSEMubGlzdFNpemU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCB2aWV3cG9ydCA9ICh3aGF0KSA9PiB7XG5cdFx0XHRcdGNvbnN0IHMgPSBgY2xpZW50JHt3aGF0fWA7XG5cdFx0XHRcdHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRbc10gOiAwO1xuXHRcdFx0fTtcblx0XHRcdGNvbnN0IHNjcm9sbF9vZmZzZXQgPSAod2hhdCkgPT4ge1xuXHRcdFx0XHRjb25zdCBzID0gYHNjcm9sbCR7d2hhdH1gO1xuXHRcdFx0XHRsZXQgcmVzdWx0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W3NdIDogMDtcblx0XHRcdFx0aWYgKGlzX3J0bCAmJiB3aGF0ID09PSAnTGVmdCcpIHtcblx0XHRcdFx0XHQvLyBSVEwgaW5jb25zaXN0ZW5jaWVzLlxuXHRcdFx0XHRcdC8vIEZGOiAwIGF0IHRoZSBmYXIgcmlnaHQsIHRoZW4gaW5jcmVhc2luZ2x5IG5lZ2F0aXZlIHZhbHVlcy5cblx0XHRcdFx0XHQvLyBJRSA+PSA4OiAwIGF0IHRoZSBmYXIgcmlnaHQsIHRoZW4gaW5jcmVhc2luZ2x5IHBvc2l0aXZlIHZhbHVlcy5cblx0XHRcdFx0XHQvLyBXZWJraXQ6IHNjcm9sbFdpZHRoIC0gY2xpZW50V2lkdGggYXQgdGhlIGZhciByaWdodCwgdGhlbiBkb3duIHRvIHplcm8uXG5cdFx0XHRcdFx0Ly8gT3BlcmE6IGRvbid0IGtub3cuLi5cblx0XHRcdFx0XHRpZiAocmVzdWx0IDwgMCkge1xuXHRcdFx0XHRcdFx0cmVzdWx0ID0gLXJlc3VsdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKCFpc193ZWJraXQpIHtcblx0XHRcdFx0XHRcdHJlc3VsdCA9IHNjcm9sbF9vZmZzZXQoJ1dpZHRoJykgLSB2aWV3cG9ydCgnV2lkdGgnKSAtIHJlc3VsdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gTm93IGFsbCBoYXZlIHdlYmtpdCBiZWhhdmlvciwgaS5lLiB6ZXJvIGlmIGF0IHRoZSBsZWZ0bW9zdCBlZGdlLlxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgcG9zaXRpb24gPSAobm9kZSkgPT4ge1xuXHRcdFx0XHQvLyBTdHJpcHBlZC1kb3duIHNpbXBsaWZpZWQgcG9zaXRpb24gZnVuY3Rpb24uIEl0J3MgZ29vZCBlbm91Z2ggZm9yIG91ciBwdXJwb3Nlcy5cblx0XHRcdFx0aWYgKG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSB7XG5cdFx0XHRcdFx0Y29uc3QgYm94ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0eDogTWF0aC5yb3VuZChib3gubGVmdCArIHNjcm9sbF9vZmZzZXQoJ0xlZnQnKSksXG5cdFx0XHRcdFx0XHR5OiBNYXRoLnJvdW5kKGJveC50b3AgKyBzY3JvbGxfb2Zmc2V0KCdUb3AnKSksXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgdCA9IDA7XG5cdFx0XHRcdGxldCBsID0gMDtcblx0XHRcdFx0ZG8ge1xuXHRcdFx0XHRcdHQgKz0gbm9kZS5vZmZzZXRUb3AgfHwgMDtcblx0XHRcdFx0XHRsICs9IG5vZGUub2Zmc2V0TGVmdCB8fCAwO1xuXHRcdFx0XHRcdG5vZGUgPSBub2RlLm9mZnNldFBhcmVudDtcblx0XHRcdFx0fSB3aGlsZSAobm9kZSk7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0eDogbCxcblx0XHRcdFx0XHR5OiB0LFxuXHRcdFx0XHR9O1xuXHRcdFx0fTtcblx0XHRcdGNvbnN0IHRleHRQb3MgPSBwb3NpdGlvbih0aGlzLnRleHQpO1xuXHRcdFx0Y29uc3QgbmwgPSAwO1xuXHRcdFx0bGV0IG50ID0gMDtcblx0XHRcdC8vIE9wZXJhIDkuNSBzb21laG93IGhhcyBvZmZzZXRXaWR0aCA9IDAgaGVyZT8/IFVzZSB0aGUgbmV4dCBiZXN0IHZhbHVlLi4uXG5cdFx0XHRsZXQgb2Zmc2V0ID0gMDtcblx0XHRcdGNvbnN0IHRleHRCb3hXaWR0aCA9IHRoaXMudGV4dC5vZmZzZXRXaWR0aCB8fCB0aGlzLnRleHQuY2xpZW50V2lkdGg7XG5cdFx0XHRpZiAodGhpcy5lbmdpbmVOYW1lKSB7XG5cdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuekluZGV4ID0gNTtcblx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG5cdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUud2lkdGggPSBgJHt0ZXh0Qm94V2lkdGh9cHhgO1xuXHRcdFx0XHQvLyBGaWd1cmUgb3V0IHRoZSBoZWlnaHQgb2YgdGhpcyBzZWxlY3RvcjogZGlzcGxheSBpdCBvZmYtc2NyZWVuLCB0aGVuIGhpZGUgaXQgYWdhaW4uXG5cdFx0XHRcdGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGVbYW5jaG9yXSA9ICctMTAwMDBweCc7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS50b3AgPSAnMCc7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHRcdFx0b2Zmc2V0ID0gdGhpcy5lbmdpbmVTZWxlY3Rvci5vZmZzZXRIZWlnaHQ7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG9mZnNldCA9IHRoaXMuZW5naW5lU2VsZWN0b3Iub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGVbYW5jaG9yXSA9IGAke25sfXB4YDtcblx0XHRcdH1cblx0XHRcdGlmICh0ZXh0UG9zLnkgPCBtYXhMaXN0SGVpZ2h0ICsgb2Zmc2V0ICsgMSkge1xuXHRcdFx0XHQvLyBUaGUgbGlzdCBtaWdodCBleHRlbmQgYmV5b25kIHRoZSB1cHBlciBib3JkZXIgb2YgdGhlIHBhZ2UuIExldCdzIGF2b2lkIHRoYXQgYnkgcGxhY2luZyBpdFxuXHRcdFx0XHQvLyBiZWxvdyB0aGUgaW5wdXQgdGV4dCBmaWVsZC5cblx0XHRcdFx0bnQgPSB0aGlzLnRleHQub2Zmc2V0SGVpZ2h0ICsgb2Zmc2V0ICsgMTtcblx0XHRcdFx0aWYgKHRoaXMuZW5naW5lTmFtZSkge1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUudG9wID0gYCR7dGhpcy50ZXh0Lm9mZnNldEhlaWdodH1weGA7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG50ID0gLWxpc3RoIC0gb2Zmc2V0IC0gMTtcblx0XHRcdFx0aWYgKHRoaXMuZW5naW5lTmFtZSkge1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUudG9wID0gYCR7LShvZmZzZXQgKyAxKX1weGA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMubGlzdC5zdHlsZS50b3AgPSBgJHtudH1weGA7XG5cdFx0XHR0aGlzLmxpc3Quc3R5bGUud2lkdGggPSAnJzsgLy8gTm8gZml4ZWQgd2lkdGggKHlldClcblx0XHRcdHRoaXMubGlzdC5zdHlsZVthbmNob3JdID0gYCR7bmx9cHhgO1xuXHRcdFx0aWYgKHRoaXMuZW5naW5lTmFtZSkge1xuXHRcdFx0XHR0aGlzLnNlbGVjdEVuZ2luZSh0aGlzLmVuZ2luZU5hbWUpO1xuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdH1cblx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHRcdC8vIFNldCB0aGUgd2lkdGggb2YgdGhlIGxpc3Rcblx0XHRcdGlmICh0aGlzLmxpc3Qub2Zmc2V0V2lkdGggPCB0ZXh0Qm94V2lkdGgpIHtcblx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLndpZHRoID0gYCR7dGV4dEJveFdpZHRofXB4YDtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Ly8gSWYgdGhlIGxpc3QgaXMgd2lkZXIgdGhhbiB0aGUgdGV4dGJveDogbWFrZSBzdXJlIGl0IGZpdHMgaG9yaXpvbnRhbGx5IGludG8gdGhlIGJyb3dzZXIgd2luZG93XG5cdFx0XHRjb25zdCBzY3JvbGwgPSBzY3JvbGxfb2Zmc2V0KCdMZWZ0Jyk7XG5cdFx0XHRjb25zdCB2aWV3X3cgPSB2aWV3cG9ydCgnV2lkdGgnKTtcblx0XHRcdGxldCB3ID0gdGhpcy5saXN0Lm9mZnNldFdpZHRoO1xuXHRcdFx0Y29uc3QgbF9wb3MgPSBwb3NpdGlvbih0aGlzLmxpc3QpO1xuXHRcdFx0bGV0IGxlZnQgPSBsX3Bvcy54O1xuXHRcdFx0bGV0IHJpZ2h0ID0gbGVmdCArIHc7XG5cdFx0XHRpZiAobGVmdCA8IHNjcm9sbCB8fCByaWdodCA+IHNjcm9sbCArIHZpZXdfdykge1xuXHRcdFx0XHRpZiAodyA+IHZpZXdfdykge1xuXHRcdFx0XHRcdHcgPSB2aWV3X3c7XG5cdFx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLndpZHRoID0gYCR7d31weGA7XG5cdFx0XHRcdFx0aWYgKGlzX3J0bCkge1xuXHRcdFx0XHRcdFx0bGVmdCA9IHJpZ2h0IC0gdztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmlnaHQgPSBsZWZ0ICsgdztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IHJlbGF0aXZlX29mZnNldCA9IDA7XG5cdFx0XHRcdGlmIChsZWZ0IDwgc2Nyb2xsKSB7XG5cdFx0XHRcdFx0cmVsYXRpdmVfb2Zmc2V0ID0gc2Nyb2xsIC0gbGVmdDtcblx0XHRcdFx0fSBlbHNlIGlmIChyaWdodCA+IHNjcm9sbCArIHZpZXdfdykge1xuXHRcdFx0XHRcdHJlbGF0aXZlX29mZnNldCA9IC0ocmlnaHQgLSBzY3JvbGwgLSB2aWV3X3cpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChpc19ydGwpIHtcblx0XHRcdFx0XHRyZWxhdGl2ZV9vZmZzZXQgPSAtcmVsYXRpdmVfb2Zmc2V0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChyZWxhdGl2ZV9vZmZzZXQpIHtcblx0XHRcdFx0XHR0aGlzLmxpc3Quc3R5bGVbYW5jaG9yXSA9IGAke25sICsgcmVsYXRpdmVfb2Zmc2V0fXB4YDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRhdXRvQ29tcGxldGUobmV3VmFsLCBhY3RWYWwsIG5vcm1hbGl6ZWRBY3RWYWwsIGtleSwgZG9udE1vZGlmeSkge1xuXHRcdFx0aWYgKG5ld1ZhbCA9PT0gYWN0VmFsKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRvbnRNb2RpZnkgfHwgdGhpcy5pbWUgfHwgIXRoaXMuY2FuU2VsZWN0KCkpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0Ly8gSWYgd2UgY2FuJ3Qgc2VsZWN0IHByb3Blcmx5IG9yIGFuIElNRSBjb21wb3NpdGlvbiBpcyBvbmdvaW5nLCBhdXRvY29tcGxldGlvbiB3b3VsZCBiZSBhIG1ham9yIGFubm95YW5jZSB0byB0aGUgdXNlci5cblx0XHRcdGlmIChuZXdWYWwuaW5kZXhPZihhY3RWYWwpKSB7XG5cdFx0XHRcdC8vIE1heWJlIGl0J2xsIHdvcmsgd2l0aCB0aGUgbm9ybWFsaXplZCB2YWx1ZSAoTkZDKT9cblx0XHRcdFx0aWYgKG5vcm1hbGl6ZWRBY3RWYWwgJiYgbmV3VmFsLmluZGV4T2Yobm9ybWFsaXplZEFjdFZhbCkgPT09IDApIHtcblx0XHRcdFx0XHRpZiAodGhpcy5sYXN0UmVhbElucHV0ID09PSBhY3RWYWwpIHtcblx0XHRcdFx0XHRcdHRoaXMubGFzdFJlYWxJbnB1dCA9IG5vcm1hbGl6ZWRBY3RWYWw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGFjdFZhbCA9IG5vcm1hbGl6ZWRBY3RWYWw7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBBY3R1YWwgaW5wdXQgaXMgYSBwcmVmaXggb2YgdGhlIG5ldyB0ZXh0LiBGaWxsIGluIG5ldyB0ZXh0LCBzZWxlY3RpbmcgdGhlIG5ld2x5IGFkZGVkIHN1ZmZpeFxuXHRcdFx0Ly8gc3VjaCB0aGF0IGl0IGNhbiBiZSBlYXNpbHkgcmVtb3ZlZCBieSB0eXBpbmcgYmFja3NwYWNlIGlmIHRoZSBzdWdnZXN0aW9uIGlzIHVud2FudGVkLlxuXHRcdFx0dGhpcy50ZXh0LmZvY3VzKCk7XG5cdFx0XHR0aGlzLnRleHQudmFsdWUgPSBuZXdWYWwgKyBrZXk7XG5cdFx0XHR0aGlzLnNldFNlbGVjdGlvbihhY3RWYWwubGVuZ3RoLCBuZXdWYWwubGVuZ3RoKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRjYW5TZWxlY3QoKSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHR0aGlzLnRleHQuc2V0U2VsZWN0aW9uUmFuZ2UgfHxcblx0XHRcdFx0KHRoaXMudGV4dC5zZWxlY3Rpb25TdGFydCAhPT0gdW5kZWZpbmVkICYmIHRoaXMudGV4dC5zZWxlY3Rpb25FbmQgIT09IHVuZGVmaW5lZClcblx0XHRcdCk7XG5cdFx0fVxuXHRcdHNldFNlbGVjdGlvbihmcm9tLCB0bykge1xuXHRcdFx0Ly8gdGhpcy50ZXh0IG11c3QgYmUgZm9jdXNlZCAoYXQgbGVhc3Qgb24gSUUpXG5cdFx0XHRpZiAoIXRoaXMudGV4dC52YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy50ZXh0LnNldFNlbGVjdGlvblJhbmdlKSB7XG5cdFx0XHRcdC8vIGUuZy4ga2h0bWxcblx0XHRcdFx0dGhpcy50ZXh0LnNldFNlbGVjdGlvblJhbmdlKGZyb20sIHRvKTtcblx0XHRcdH0gZWxzZSBpZiAodGhpcy50ZXh0LnNlbGVjdGlvblN0YXJ0ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0aWYgKGZyb20gPiB0aGlzLnRleHQuc2VsZWN0aW9uU3RhcnQpIHtcblx0XHRcdFx0XHR0aGlzLnRleHQuc2VsZWN0aW9uRW5kID0gdG87XG5cdFx0XHRcdFx0dGhpcy50ZXh0LnNlbGVjdGlvblN0YXJ0ID0gZnJvbTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnRleHQuc2VsZWN0aW9uU3RhcnQgPSBmcm9tO1xuXHRcdFx0XHRcdHRoaXMudGV4dC5zZWxlY3Rpb25FbmQgPSB0bztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRnZXRTZWxlY3Rpb24oKSB7XG5cdFx0XHRsZXQgZnJvbSA9IDA7XG5cdFx0XHQvLyB0aGlzLnRleHQgbXVzdCBiZSBmb2N1c2VkIChhdCBsZWFzdCBvbiBJRSlcblx0XHRcdGxldCB0byA9IDA7XG5cdFx0XHRpZiAoIXRoaXMudGV4dC52YWx1ZSkge1xuXHRcdFx0XHQvLyBObyB0ZXh0LlxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnRleHQuc2VsZWN0aW9uU3RhcnQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRmcm9tID0gdGhpcy50ZXh0LnNlbGVjdGlvblN0YXJ0O1xuXHRcdFx0XHR0byA9IHRoaXMudGV4dC5zZWxlY3Rpb25FbmQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRzdGFydDogZnJvbSxcblx0XHRcdFx0ZW5kOiB0byxcblx0XHRcdH07XG5cdFx0fVxuXHRcdHNhdmVWaWV3KCkge1xuXHRcdFx0dGhpcy5sYXN0U2VsZWN0aW9uID0gdGhpcy5nZXRTZWxlY3Rpb24oKTtcblx0XHR9XG5cdFx0cHJvY2Vzc0tleShldmVudCkge1xuXHRcdFx0bGV0IGRpciA9IDA7XG5cdFx0XHRzd2l0Y2ggKHRoaXMubGFzdEtleSkge1xuXHRcdFx0XHRjYXNlIFVQOlxuXHRcdFx0XHRcdGRpciA9IC0xO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIERPV046XG5cdFx0XHRcdFx0ZGlyID0gMTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBQR1VQOlxuXHRcdFx0XHRcdGRpciA9IC1IQy5saXN0U2l6ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBQR0RPV046XG5cdFx0XHRcdFx0ZGlyID0gSEMubGlzdFNpemU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgRVNDOlxuXHRcdFx0XHRcdC8vIEluaGliaXQgZGVmYXVsdCBiZWhhdmlvciAocmV2ZXJ0IHRvIGxhc3QgcmVhbCBpbnB1dCBpbiBGRjogd2UgZG8gdGhhdCBvdXJzZWx2ZXMpXG5cdFx0XHRcdFx0cmV0dXJuIGV2dEtpbGwoZXZlbnQpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRpcikge1xuXHRcdFx0XHRpZiAodGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgIT09ICdub25lJykge1xuXHRcdFx0XHRcdC8vIExpc3QgaXMgdmlzaWJsZSwgc28gdGhlcmUgYXJlIHN1Z2dlc3Rpb25zXG5cdFx0XHRcdFx0dGhpcy5oaWdobGlnaHRTdWdnZXN0aW9uKGRpcik7XG5cdFx0XHRcdFx0Ly8gS2lsbCB0aGUgZXZlbnQsIG90aGVyd2lzZSBzb21lIGJyb3dzZXJzIChlLmcuLCBGaXJlZm94KSBtYXkgYWRkaXRpb25hbGx5IHRyZWF0IGFuIHVwLWFycm93XG5cdFx0XHRcdFx0Ly8gYXMgXCJwbGFjZSB0aGUgdGV4dCBjdXJzb3IgYXQgdGhlIGZyb250XCIsIHdoaWNoIHdlIGRvbid0IHdhbnQgaGVyZS5cblx0XHRcdFx0XHRyZXR1cm4gZXZ0S2lsbChldmVudCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRcdFx0dGhpcy5rZXlDb3VudCA8PSAxICYmXG5cdFx0XHRcdFx0KCF0aGlzLmNhbGxiYWNrT2JqIHx8IHRoaXMuY2FsbGJhY2tPYmouY2FsbHNNYWRlID09PSB0aGlzLmNhbGxiYWNrT2JqLm5vZkNhbGxzKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHQvLyBJZiBubyBzdWdnZXN0aW9ucyBkaXNwbGF5ZWQsIGdldCB0aGVtLCB1bmxlc3Mgd2UncmUgYWxyZWFkeSBnZXR0aW5nIHRoZW0uXG5cdFx0XHRcdFx0dGhpcy50ZXh0Y2hhbmdlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRoaWdobGlnaHRTdWdnZXN0aW9uKGRpcikge1xuXHRcdFx0aWYgKG5vU3VnZ2VzdGlvbnMgfHwgIXRoaXMubGlzdCB8fCB0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGN1cnIgPSB0aGlzLmxpc3Quc2VsZWN0ZWRJbmRleDtcblx0XHRcdGxldCB0Z3QgPSAtMTtcblx0XHRcdGlmIChkaXIgPT09IDApIHtcblx0XHRcdFx0aWYgKGN1cnIgPCAwIHx8IGN1cnIgPj0gdGhpcy5saXN0Lm9wdGlvbnMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRndCA9IGN1cnI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0Z3QgPSBjdXJyIDwgMCA/IDAgOiBjdXJyICsgZGlyO1xuXHRcdFx0XHR0Z3QgPSBNYXRoLm1heCh0Z3QsIDApO1xuXHRcdFx0XHRpZiAodGd0ID49IHRoaXMubGlzdC5vcHRpb25zLmxlbmd0aCkge1xuXHRcdFx0XHRcdHRndCA9IHRoaXMubGlzdC5vcHRpb25zLmxlbmd0aCAtIDE7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICh0Z3QgIT09IGN1cnIgfHwgZGlyID09PSAwKSB7XG5cdFx0XHRcdGlmIChjdXJyID49IDAgJiYgY3VyciA8IHRoaXMubGlzdC5vcHRpb25zLmxlbmd0aCAmJiBkaXIgIT09IDApIHtcblx0XHRcdFx0XHR0aGlzLmxpc3Qub3B0aW9uc1tjdXJyXS5zZWxlY3RlZCA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMubGlzdC5vcHRpb25zW3RndF0uc2VsZWN0ZWQgPSB0cnVlO1xuXHRcdFx0XHQvLyBHZXQgY3VycmVudCBpbnB1dCB0ZXh0XG5cdFx0XHRcdGNvbnN0IHYgPSB0aGlzLnRleHQudmFsdWUuc3BsaXQoJ3wnKTtcblx0XHRcdFx0Y29uc3Qga2V5ID0gdi5sZW5ndGggPiAxID8gYHwke3ZbMV19YCA6ICcnO1xuXHRcdFx0XHRjb25zdCBjb21wbGV0ZWQgPSB0aGlzLmF1dG9Db21wbGV0ZSh0aGlzLmxpc3Qub3B0aW9uc1t0Z3RdLnRleHQsIHRoaXMubGFzdFJlYWxJbnB1dCwgbnVsbCwga2V5LCBmYWxzZSk7XG5cdFx0XHRcdGlmICghY29tcGxldGVkIHx8IHRoaXMubGlzdC5vcHRpb25zW3RndF0udGV4dCA9PT0gdGhpcy5sYXN0UmVhbElucHV0KSB7XG5cdFx0XHRcdFx0dGhpcy50ZXh0LnZhbHVlID0gdGhpcy5saXN0Lm9wdGlvbnNbdGd0XS50ZXh0ICsga2V5O1xuXHRcdFx0XHRcdGlmICh0aGlzLmNhblNlbGVjdCgpKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnNldFNlbGVjdGlvbih0aGlzLmxpc3Qub3B0aW9uc1t0Z3RdLnRleHQubGVuZ3RoLCB0aGlzLmxpc3Qub3B0aW9uc1t0Z3RdLnRleHQubGVuZ3RoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5sYXN0SW5wdXQgPSB0aGlzLmxpc3Qub3B0aW9uc1t0Z3RdLnRleHQ7XG5cdFx0XHRcdHRoaXMuaW5wdXRFeGlzdHMgPSB0cnVlOyAvLyBNaWdodCBiZSB3cm9uZyBpZiBmcm9tIGEgZGFiIGxpc3QuLi5cblx0XHRcdFx0aWYgKHRoaXMuaWNvbikge1xuXHRcdFx0XHRcdHRoaXMuaWNvbi5zcmMgPSBIQy5leGlzdHNZZXM7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IENIQU5HRV9QRU5ESU5HO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdHJlc2V0S2V5U2VsZWN0aW9uKCkge1xuXHRcdFx0aWYgKG5vU3VnZ2VzdGlvbnMgfHwgIXRoaXMubGlzdCB8fCB0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGN1cnIgPSB0aGlzLmxpc3Quc2VsZWN0ZWRJbmRleDtcblx0XHRcdGlmIChjdXJyID49IDAgJiYgY3VyciA8IHRoaXMubGlzdC5vcHRpb25zLmxlbmd0aCkge1xuXHRcdFx0XHR0aGlzLmxpc3Qub3B0aW9uc1tjdXJyXS5zZWxlY3RlZCA9IGZhbHNlO1xuXHRcdFx0XHQvLyBHZXQgY3VycmVudCBpbnB1dCB0ZXh0XG5cdFx0XHRcdGNvbnN0IHYgPSB0aGlzLnRleHQudmFsdWUuc3BsaXQoJ3wnKTtcblx0XHRcdFx0Y29uc3Qga2V5ID0gdi5sZW5ndGggPiAxID8gYHwke3ZbMV19YCA6ICcnO1xuXHRcdFx0XHQvLyBFU0MgaXMgaGFuZGxlZCBzdHJhbmdlbHkgYnkgc29tZSBicm93c2VycyAoZS5nLiwgRkYpOyBzb21laG93IGl0IHJlc2V0cyB0aGUgaW5wdXQgdmFsdWUgYmVmb3JlXG5cdFx0XHRcdC8vIG91ciBldmVudCBoYW5kbGVycyBldmVyIGdldCBhIGNoYW5jZSB0byBydW4uXG5cdFx0XHRcdGxldCByZXN1bHQgPSB2WzBdICE9PSB0aGlzLmxhc3RJbnB1dDtcblx0XHRcdFx0aWYgKHZbMF0gIT09IHRoaXMubGFzdFJlYWxJbnB1dCkge1xuXHRcdFx0XHRcdHRoaXMudGV4dC52YWx1ZSA9IHRoaXMubGFzdFJlYWxJbnB1dCArIGtleTtcblx0XHRcdFx0XHRyZXN1bHQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMubGFzdElucHV0ID0gdGhpcy5sYXN0UmVhbElucHV0O1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXHRjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuXHRcdC8vIFVzZXIgY29uZmlndXJhdGlvbnM6IERvIHRoaXMgaGVyZSwgY2FsbGVkIGZyb20gdGhlIG9ubG9hZCBoYW5kbGVyLCBzbyB0aGF0IHVzZXJzIGNhblxuXHRcdC8vIG92ZXJyaWRlIGl0IGVhc2lseSBpbiB0aGVpciBvd24gdXNlciBzY3JpcHQgZmlsZXMgYnkganVzdCBkZWNsYXJpbmcgdmFyaWFibGVzLlxuXHRcdGNvbnN0IGNvbmZpZyA9IHt9O1xuXHRcdEhDLmRvbnRfYWRkX3RvX3dhdGNobGlzdCA9XG5cdFx0XHR3aW5kb3cuaG90Y2F0X2RvbnRfYWRkX3RvX3dhdGNobGlzdCA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdD8gY29uZmlnLkhvdENhdERvbnRBZGRUb1dhdGNobGlzdCA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0PyBIQy5kb250X2FkZF90b193YXRjaGxpc3Rcblx0XHRcdFx0XHQ6IGNvbmZpZy5Ib3RDYXREb250QWRkVG9XYXRjaGxpc3Rcblx0XHRcdFx0OiAhIXdpbmRvdy5ob3RjYXRfZG9udF9hZGRfdG9fd2F0Y2hsaXN0O1xuXHRcdEhDLm5vX2F1dG9jb21taXQgPVxuXHRcdFx0d2luZG93LmhvdGNhdF9ub19hdXRvY29tbWl0ID09PSB1bmRlZmluZWRcblx0XHRcdFx0PyBjb25maWcuSG90Q2F0Tm9BdXRvQ29tbWl0ID09PSB1bmRlZmluZWRcblx0XHRcdFx0XHQ/IGNvbmYud2dOYW1lc3BhY2VOdW1iZXIgJSAyXG5cdFx0XHRcdFx0XHQ/IHRydWVcblx0XHRcdFx0XHRcdDogSEMubm9fYXV0b2NvbW1pdCAvLyBPbiB0YWxrIG5hbWVzcGFjZSBkZWZhdWx0IGF1dG9jb21taXQgb2ZmXG5cdFx0XHRcdFx0OiBjb25maWcuSG90Q2F0Tm9BdXRvQ29tbWl0XG5cdFx0XHRcdDogISF3aW5kb3cuaG90Y2F0X25vX2F1dG9jb21taXQ7XG5cdFx0SEMuZGVsX25lZWRzX2RpZmYgPVxuXHRcdFx0d2luZG93LmhvdGNhdF9kZWxfbmVlZHNfZGlmZiA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdD8gY29uZmlnLkhvdENhdERlbE5lZWRzRGlmZiA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0PyBIQy5kZWxfbmVlZHNfZGlmZlxuXHRcdFx0XHRcdDogY29uZmlnLkhvdENhdERlbE5lZWRzRGlmZlxuXHRcdFx0XHQ6ICEhd2luZG93LmhvdGNhdF9kZWxfbmVlZHNfZGlmZjtcblx0XHRIQy5zdWdnZXN0X2RlbGF5ID0gd2luZG93LmhvdGNhdF9zdWdnZXN0aW9uX2RlbGF5IHx8IGNvbmZpZy5Ib3RDYXRTdWdnZXN0aW9uRGVsYXkgfHwgSEMuc3VnZ2VzdF9kZWxheTtcblx0XHRIQy5lZGl0Ym94X3dpZHRoID0gd2luZG93LmhvdGNhdF9lZGl0Ym94X3dpZHRoIHx8IGNvbmZpZy5Ib3RDYXRFZGl0Qm94V2lkdGggfHwgSEMuZWRpdGJveF93aWR0aDtcblx0XHRIQy5zdWdnZXN0aW9ucyA9IHdpbmRvdy5ob3RjYXRfc3VnZ2VzdGlvbnMgfHwgY29uZmlnLkhvdENhdFN1Z2dlc3Rpb25zIHx8IEhDLnN1Z2dlc3Rpb25zO1xuXHRcdGlmICh0eXBlb2YgSEMuc3VnZ2VzdGlvbnMgIT09ICdzdHJpbmcnIHx8ICFzdWdnZXN0aW9uQ29uZmlnc1tIQy5zdWdnZXN0aW9uc10pIHtcblx0XHRcdEhDLnN1Z2dlc3Rpb25zID0gJ2NvbWJpbmVkJztcblx0XHR9XG5cdFx0SEMuZml4ZWRfc2VhcmNoID1cblx0XHRcdHdpbmRvdy5ob3RjYXRfc3VnZ2VzdGlvbnNfZml4ZWQgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHQ/IGNvbmZpZy5Ib3RDYXRGaXhlZFN1Z2dlc3Rpb25zID09PSB1bmRlZmluZWRcblx0XHRcdFx0XHQ/IEhDLmZpeGVkX3NlYXJjaFxuXHRcdFx0XHRcdDogY29uZmlnLkhvdENhdEZpeGVkU3VnZ2VzdGlvbnNcblx0XHRcdFx0OiAhIXdpbmRvdy5ob3RjYXRfc3VnZ2VzdGlvbnNfZml4ZWQ7XG5cdFx0SEMuc2luZ2xlX21pbm9yID1cblx0XHRcdHdpbmRvdy5ob3RjYXRfc2luZ2xlX2NoYW5nZXNfYXJlX21pbm9yID09PSB1bmRlZmluZWRcblx0XHRcdFx0PyBjb25maWcuSG90Q2F0TWlub3JTaW5nbGVDaGFuZ2VzID09PSB1bmRlZmluZWRcblx0XHRcdFx0XHQ/IEhDLnNpbmdsZV9taW5vclxuXHRcdFx0XHRcdDogY29uZmlnLkhvdENhdE1pbm9yU2luZ2xlQ2hhbmdlc1xuXHRcdFx0XHQ6ICEhd2luZG93LmhvdGNhdF9zaW5nbGVfY2hhbmdlc19hcmVfbWlub3I7XG5cdFx0SEMuYmdfY2hhbmdlZCA9IHdpbmRvdy5ob3RjYXRfY2hhbmdlZF9iYWNrZ3JvdW5kIHx8IGNvbmZpZy5Ib3RDYXRDaGFuZ2VkQmFja2dyb3VuZCB8fCBIQy5iZ19jaGFuZ2VkO1xuXHRcdEhDLnVzZV91cF9kb3duID1cblx0XHRcdHdpbmRvdy5ob3RjYXRfdXNlX2NhdGVnb3J5X2xpbmtzID09PSB1bmRlZmluZWRcblx0XHRcdFx0PyBjb25maWcuSG90Q2F0VXNlQ2F0ZWdvcnlMaW5rcyA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0PyBIQy51c2VfdXBfZG93blxuXHRcdFx0XHRcdDogY29uZmlnLkhvdENhdFVzZUNhdGVnb3J5TGlua3Ncblx0XHRcdFx0OiAhIXdpbmRvdy5ob3RjYXRfdXNlX2NhdGVnb3J5X2xpbmtzO1xuXHRcdEhDLmxpc3RTaXplID0gd2luZG93LmhvdGNhdF9saXN0X3NpemUgfHwgY29uZmlnLkhvdENhdExpc3RTaXplIHx8IEhDLmxpc3RTaXplO1xuXHRcdEhDLmNoYW5nZVRhZyA9IGNvbmZpZy5Ib3RDYXRDaGFuZ2VUYWcgfHwgJyc7XG5cdFx0Ly8gVGhlIG5leHQgd2hvbGUgc2hlYmFuZyBpcyBuZWVkZWQsIGJlY2F1c2UgbWFudWFsIHRhZ3MgZ2V0IG5vdCBzdWJtaXR0ZWQgZXhjZXB0IG9mIHNhdmVcblx0XHRpZiAoSEMuY2hhbmdlVGFnKSB7XG5cdFx0XHRjb25zdCBlRm9ybSA9IGRvY3VtZW50LmVkaXRmb3JtO1xuXHRcdFx0Y29uc3QgY2F0UmVnRXhwID0gbmV3IFJlZ0V4cChgXlxcXFxbXFxcXFsoJHtIQy5jYXRlZ29yeV9yZWdleHB9KTpgKTtcblx0XHRcdGxldCBvbGRUeHQ7XG5cdFx0XHQvLyBSZXR1cm5zIHRydWUgaWYgbWlub3IgY2hhbmdlXG5cdFx0XHRjb25zdCBpc01pbm9yQ2hhbmdlID0gKCkgPT4ge1xuXHRcdFx0XHRsZXQgbmV3VHh0ID0gZUZvcm0ud3BUZXh0Ym94MTtcblx0XHRcdFx0aWYgKCFuZXdUeHQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0bmV3VHh0ID0gbmV3VHh0LnZhbHVlO1xuXHRcdFx0XHRjb25zdCBvbGRMaW5lcyA9IG9sZFR4dC5tYXRjaCgvXi4qJC9nbSk7XG5cdFx0XHRcdGNvbnN0IG5ld0xpbmVzID0gbmV3VHh0Lm1hdGNoKC9eLiokL2dtKTtcblx0XHRcdFx0bGV0IGNBcnI7IC8vIGNoYW5nZXNcblx0XHRcdFx0Y29uc3QgZXhjZXB0ID0gKGFBcnIsIGJBcnIpID0+IHtcblx0XHRcdFx0XHRjb25zdCByZXN1bHQgPSBbXTtcblx0XHRcdFx0XHRsZXQgbEFycjsgLy8gc21hbGxlclxuXHRcdFx0XHRcdGxldCAvLyBsYXJnZXJcblx0XHRcdFx0XHRcdHNBcnI7XG5cdFx0XHRcdFx0aWYgKGFBcnIubGVuZ3RoIDwgYkFyci5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdGxBcnIgPSBiQXJyO1xuXHRcdFx0XHRcdFx0c0FyciA9IGFBcnI7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGxBcnIgPSBhQXJyO1xuXHRcdFx0XHRcdFx0c0FyciA9IGJBcnI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGZvciAoY29uc3QgaXRlbSBvZiBsQXJyKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBpbmQgPSBzQXJyLmluZGV4T2YoaXRlbSk7XG5cdFx0XHRcdFx0XHRpZiAoaW5kID09PSAtMSkge1xuXHRcdFx0XHRcdFx0XHRyZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBpdGVtO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0c0Fyci5zcGxpY2UoaW5kLCAxKTsgLy8gZG9uJ3QgY2hlY2sgdGhpcyBpdGVtIGFnYWluXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBbLi4ucmVzdWx0LCAuLi5zQXJyXTtcblx0XHRcdFx0fTtcblx0XHRcdFx0Y0FyciA9IGV4Y2VwdChvbGRMaW5lcywgbmV3TGluZXMpO1xuXHRcdFx0XHRpZiAoY0Fyci5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0Y0FyciA9IGNBcnIuZmlsdGVyKChjKSA9PiB7XG5cdFx0XHRcdFx0XHRjID0gYy50cmltKCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gYyAmJiAhY2F0UmVnRXhwLnRlc3QoYyk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGNBcnIubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0b2xkVHh0ID0gbmV3VHh0O1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRjb25mLndnQWN0aW9uID09PSAnc3VibWl0JyAmJlxuXHRcdFx0XHRjb25mLndnQXJ0aWNsZUlkICYmXG5cdFx0XHRcdGVGb3JtICYmXG5cdFx0XHRcdGVGb3JtLndwU3VtbWFyeSAmJlxuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2lraURpZmYnKVxuXHRcdFx0KSB7XG5cdFx0XHRcdGNvbnN0IHN1bSA9IGVGb3JtLndwU3VtbWFyeTtcblx0XHRcdFx0Y29uc3Qgc3VtQSA9IGVGb3JtLndwQXV0b1N1bW1hcnk7XG5cdFx0XHRcdGlmIChzdW0udmFsdWUgJiYgc3VtQS52YWx1ZSA9PT0gSEMuY2hhbmdlVGFnKSB7XG5cdFx0XHRcdFx0Ly8gSG90Q2F0IGRpZmZcblx0XHRcdFx0XHQvLyBNRDUgaGFzaCBvZiB0aGUgZW1wdHkgc3RyaW5nLCBhcyBIb3RDYXQgZWRpdCBpcyBiYXNlZCBvbiBlbXB0eSBzdW1cblx0XHRcdFx0XHRzdW1BLnZhbHVlID0gc3VtQS52YWx1ZS5yZXBsYWNlKEhDLmNoYW5nZVRhZywgJ2Q0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlJyk7XG5cdFx0XHRcdFx0Ly8gQXR0ciBjcmVhdGlvbiBhbmQgZXZlbnQgaGFuZGxpbmcgaXMgbm90IHNhbWUgaW4gYWxsIChvbGQpIGJyb3dzZXJzIHNvIHVzZSAkXG5cdFx0XHRcdFx0Y29uc3QgJGN0ID0gJCgnPGlucHV0PicpXG5cdFx0XHRcdFx0XHQuYXR0cih7XG5cdFx0XHRcdFx0XHRcdHR5cGU6ICdoaWRkZW4nLFxuXHRcdFx0XHRcdFx0XHRuYW1lOiAnd3BDaGFuZ2VUYWdzJyxcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQudmFsKEhDLmNoYW5nZVRhZyk7XG5cdFx0XHRcdFx0JChlRm9ybSkuYXBwZW5kKCRjdCk7XG5cdFx0XHRcdFx0b2xkVHh0ID0gZUZvcm0ud3BUZXh0Ym94MS52YWx1ZTtcblx0XHRcdFx0XHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0XHRcdFx0XHQkYm9keS5maW5kKCdpbnB1dFtuYW1lPXdwU2F2ZV0nKS5vbmUoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKCRjdC52YWwoKSkge1xuXHRcdFx0XHRcdFx0XHRzdW0udmFsdWUgPSBzdW0udmFsdWUucmVwbGFjZShcblx0XHRcdFx0XHRcdFx0XHRnZXRNZXNzYWdlKCdtZXNzYWdlcy11c2luZycpIHx8IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXByZWZpeCcpLFxuXHRcdFx0XHRcdFx0XHRcdCcnXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0Y29uc3QgcmVtb3ZlQ2hhbmdlVGFnID0gKCkgPT4ge1xuXHRcdFx0XHRcdFx0JChlRm9ybS53cFRleHRib3gxKVxuXHRcdFx0XHRcdFx0XHQuYWRkKHN1bSlcblx0XHRcdFx0XHRcdFx0Lm9uZSgnaW5wdXQnLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoaXNNaW5vckNoYW5nZSgpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlbW92ZUNoYW5nZVRhZygpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0JGN0LnZhbCgnJyk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSwgNTAwKTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRyZW1vdmVDaGFuZ2VUYWcoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBOdW1lcmljIGlucHV0LCBtYWtlIHN1cmUgd2UgaGF2ZSBhIG51bWVyaWMgdmFsdWVcblx0XHRIQy5saXN0U2l6ZSA9IE51bWJlci5wYXJzZUludChIQy5saXN0U2l6ZSwgMTApO1xuXHRcdGlmIChOdW1iZXIuaXNOYU4oSEMubGlzdFNpemUpIHx8IEhDLmxpc3RTaXplIDwgNSkge1xuXHRcdFx0SEMubGlzdFNpemUgPSA1O1xuXHRcdH1cblx0XHRIQy5saXN0U2l6ZSA9IE1hdGgubWluKEhDLmxpc3RTaXplLCAzMCk7IC8vIE1heCBzaXplXG5cdFx0Ly8gTG9jYWxpemUgc2VhcmNoIGVuZ2luZSBuYW1lc1xuXHRcdGZvciAoY29uc3QgW2tleSwgc3VnZ2VzdGlvbkNvbmZpZ10gb2YgT2JqZWN0LmVudHJpZXMoc3VnZ2VzdGlvbkNvbmZpZ3MpKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRpZiAoa2V5ICYmIGdldE1lc3NhZ2UoYGVuZ2luZV9uYW1lcy0ke2tleX1gKSkge1xuXHRcdFx0XHRcdHN1Z2dlc3Rpb25Db25maWcubmFtZSA9IGdldE1lc3NhZ2UoYGVuZ2luZV9uYW1lcy0ke2tleX1gKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBDYXRjaCBib3RoIG5hdGl2ZSBSVEwgYW5kIFwiZmFrZWRcIiBSVEwgdGhyb3VnaCBbW01lZGlhV2lraTpSdGwuanNdXVxuXHRcdGlzX3J0bCA9IGhhc0NsYXNzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSwgJ3J0bCcpO1xuXHRcdGlmICghaXNfcnRsKSB7XG5cdFx0XHRpZiAoZG9jdW1lbnQuZGVmYXVsdFZpZXcgJiYgZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZSkge1xuXHRcdFx0XHQvLyBHZWNrbyBldGMuXG5cdFx0XHRcdGlzX3J0bCA9IGRvY3VtZW50LmRlZmF1bHRWaWV3XG5cdFx0XHRcdFx0LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLCBudWxsKVxuXHRcdFx0XHRcdC5nZXRQcm9wZXJ0eVZhbHVlKCdkaXJlY3Rpb24nKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIE5vdCBleGFjdGx5IHJpZ2h0LCBidXQgYmVzdCBlZmZvcnRcblx0XHRcdFx0aXNfcnRsID0gJCgnYm9keScpWzBdLnN0eWxlLmRpcmVjdGlvbjtcblx0XHRcdH1cblx0XHRcdGlzX3J0bCA9IGlzX3J0bCA9PT0gJ3J0bCc7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBjYW5fZWRpdCA9ICgpID0+IHtcblx0XHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhLWVkaXQnKSAhPT0gbnVsbDtcblx0fTtcblx0Ly8gTGVnYWN5IHN0dWZmXG5cdGNvbnN0IGNsb3NlRm9ybSA9IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBDbG9zZSBhbGwgb3BlbiBlZGl0b3JzIHdpdGhvdXQgcmVkaXJlY3QgcmVzb2x1dGlvbiBhbmQgb3RoZXIgYXN5bmNocm9ub3VzIHN0dWZmLlxuXHRcdGZvciAoY29uc3QgZWRpdCBvZiBlZGl0b3JzKSB7XG5cdFx0XHRpZiAoZWRpdC5zdGF0ZSA9PT0gT1BFTikge1xuXHRcdFx0XHRlZGl0LmNhbmNlbCgpO1xuXHRcdFx0fSBlbHNlIGlmIChlZGl0LnN0YXRlID09PSBDSEFOR0VfUEVORElORykge1xuXHRcdFx0XHRlZGl0LnNhbml0aXplSW5wdXQoKTtcblx0XHRcdFx0Y29uc3QgdmFsdWUgPSBlZGl0LnRleHQudmFsdWUuc3BsaXQoJ3wnKTtcblx0XHRcdFx0bGV0IGtleSA9IG51bGw7XG5cdFx0XHRcdGlmICh2YWx1ZS5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0Wywga2V5XSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IHYgPSB2YWx1ZVswXS5yZXBsYWNlKC9fL2csICcgJykudHJpbSgpO1xuXHRcdFx0XHRpZiAodi5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRlZGl0LmNhbmNlbCgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGVkaXQuY3VycmVudENhdGVnb3J5ID0gdjtcblx0XHRcdFx0XHRlZGl0LmN1cnJlbnRLZXkgPSBrZXk7XG5cdFx0XHRcdFx0ZWRpdC5jdXJyZW50RXhpc3RzID0gdGhpcy5pbnB1dEV4aXN0cztcblx0XHRcdFx0XHRlZGl0LmNsb3NlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdGNvbnN0IHNldHVwX3VwbG9hZCA9ICgpID0+IHtcblx0XHRvblVwbG9hZCA9IHRydWU7XG5cdFx0Ly8gQWRkIGFuIGVtcHR5IGNhdGVnb3J5IGJhciBhdCB0aGUgZW5kIG9mIHRoZSB0YWJsZSBjb250YWluaW5nIHRoZSBkZXNjcmlwdGlvbiwgYW5kIGNoYW5nZSB0aGUgb25zdWJtaXQgaGFuZGxlci5cblx0XHRsZXQgaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXctaHRtbGZvcm0tZGVzY3JpcHRpb24nKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPXdwRGVzdEZpbGVdJyk7XG5cdFx0aWYgKCFpcCkge1xuXHRcdFx0aXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPXdwRGVzdEZpbGVdJyk7XG5cdFx0XHR3aGlsZSAoaXAgJiYgaXAubm9kZU5hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ3RhYmxlJykge1xuXHRcdFx0XHRpcCA9IGlwLnBhcmVudE5vZGU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICghaXApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgcmV1cGxvYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPXdwRm9yUmVVcGxvYWRdJyk7XG5cdFx0Y29uc3QgZGVzdEZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPXdwRGVzdEZpbGVdJyk7XG5cdFx0aWYgKChyZXVwbG9hZCAmJiAhIXJldXBsb2FkLnZhbHVlKSB8fCAoZGVzdEZpbGUgJiYgKGRlc3RGaWxlLmRpc2FibGVkIHx8IGRlc3RGaWxlLnJlYWRPbmx5KSkpIHtcblx0XHRcdHJldHVybjsgLy8gcmUtdXBsb2FkIGZvcm0uLi5cblx0XHR9XG5cdFx0Ly8gSW5zZXJ0IGEgdGFibGUgcm93IHdpdGggdHdvIGZpZWxkcyAobGFiZWwgYW5kIGVtcHR5IGNhdGVnb3J5IGJhcilcblx0XHRjb25zdCBsYWJlbENlbGwgPSBtYWtlKCd0ZCcpO1xuXHRcdGNvbnN0IGxpbmVDZWxsID0gbWFrZSgndGQnKTtcblx0XHQvLyBDcmVhdGUgdGhlIGNhdGVnb3J5IGxpbmVcblx0XHRjYXRMaW5lID0gbWFrZSgnZGl2Jyk7XG5cdFx0Y2F0TGluZS5jbGFzc05hbWUgPSAnY2F0bGlua3MnO1xuXHRcdGNhdExpbmUuaWQgPSAnY2F0bGlua3MnO1xuXHRcdGNhdExpbmUuc3R5bGUudGV4dEFsaWduID0gaXNfcnRsID8gJ3JpZ2h0JyA6ICdsZWZ0Jztcblx0XHQvLyBXZSdsbCBiZSBpbnNpZGUgYSB0YWJsZSByb3cuIE1ha2Ugc3VyZSB0aGF0IHdlIGRvbid0IGhhdmUgbWFyZ2lucyBvciBzdHJhbmdlIGJvcmRlcnMuXG5cdFx0Y2F0TGluZS5zdHlsZS5tYXJnaW4gPSAnMCc7XG5cdFx0Y2F0TGluZS5zdHlsZS5ib3JkZXIgPSAnbm9uZSc7XG5cdFx0bGluZUNlbGwuYXBwZW5kKGNhdExpbmUpO1xuXHRcdC8vIENyZWF0ZSB0aGUgbGFiZWxcblx0XHRjb25zdCBsYWJlbCA9IG51bGw7XG5cdFx0aWYgKGxhYmVsKSB7XG5cdFx0XHRsYWJlbENlbGwuaWQgPSAnaG90Y2F0TGFiZWxUcmFuc2xhdGVkJztcblx0XHRcdGxhYmVsQ2VsbC5hcHBlbmQobGFiZWwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsYWJlbENlbGwuaWQgPSAnaG90Y2F0TGFiZWwnO1xuXHRcdFx0bGFiZWxDZWxsLmFwcGVuZChtYWtlKGdldE1lc3NhZ2UoJ2NhdGVnb3JpZXMnKSwgdHJ1ZSkpO1xuXHRcdH1cblx0XHRsYWJlbENlbGwuY2xhc3NOYW1lID0gJ213LWxhYmVsJztcblx0XHRsYWJlbENlbGwuc3R5bGUudGV4dEFsaWduID0gJ3JpZ2h0Jztcblx0XHRsYWJlbENlbGwuc3R5bGUudmVydGljYWxBbGlnbiA9ICdtaWRkbGUnO1xuXHRcdC8vIENoYW5nZSB0aGUgb25zdWJtaXQgaGFuZGxlclxuXHRcdGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXBsb2FkJykgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI213LXVwbG9hZC1mb3JtJyk7XG5cdFx0aWYgKGZvcm0pIHtcblx0XHRcdGNvbnN0IG5ld1JvdyA9IGlwLmluc2VydFJvdygtMSk7XG5cdFx0XHRuZXdSb3cuYXBwZW5kKGxhYmVsQ2VsbCk7XG5cdFx0XHRuZXdSb3cuYXBwZW5kKGxpbmVDZWxsKTtcblx0XHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKG9sZFN1Ym1pdCwgLi4uYXJncykgPT4ge1xuXHRcdFx0XHRyZXR1cm4gKCgpID0+IHtcblx0XHRcdFx0XHRsZXQgZG9fc3VibWl0ID0gdHJ1ZTtcblx0XHRcdFx0XHRpZiAob2xkU3VibWl0KSB7XG5cdFx0XHRcdFx0XHRpZiAodHlwZW9mIG9sZFN1Ym1pdCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV2YWxcblx0XHRcdFx0XHRcdFx0ZG9fc3VibWl0ID0gd2luZG93LmV2YWwob2xkU3VibWl0KTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAob2xkU3VibWl0IGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcblx0XHRcdFx0XHRcdFx0ZG9fc3VibWl0ID0gb2xkU3VibWl0LmFwcGx5KGZvcm0sIFtvbGRTdWJtaXQsIC4uLmFyZ3NdKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKCFkb19zdWJtaXQpIHtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y2xvc2VGb3JtKCk7XG5cdFx0XHRcdFx0Ly8gQ29weSB0aGUgY2F0ZWdvcmllc1xuXHRcdFx0XHRcdGNvbnN0IGViID1cblx0XHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhW25hbWU9d3BVcGxvYWREZXNjcmlwdGlvbl0nKSB8fFxuXHRcdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dwRGVzYycpO1xuXHRcdFx0XHRcdGxldCBhZGRlZE9uZSA9IGZhbHNlO1xuXHRcdFx0XHRcdGZvciAoY29uc3QgZWRpdG9yIG9mIGVkaXRvcnMpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHQgPSBlZGl0b3IuY3VycmVudENhdGVnb3J5O1xuXHRcdFx0XHRcdFx0aWYgKCF0KSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Y29uc3Qga2V5ID0gZWRpdG9yLmN1cnJlbnRLZXk7XG5cdFx0XHRcdFx0XHRjb25zdCBuZXdfY2F0ID0gYFtbJHtIQy5jYXRlZ29yeV9jYW5vbmljYWx9OiR7dH0ke2tleSA/IGB8JHtrZXl9YCA6ICcnfV1dYDtcblx0XHRcdFx0XHRcdC8vIE9ubHkgYWRkIGlmIG5vdCBhbHJlYWR5IHByZXNlbnRcblx0XHRcdFx0XHRcdGNvbnN0IG5vd2lraVJlZ2V4ID0gbmV3IFJlZ0V4cChcblx0XHRcdFx0XHRcdFx0JzxubycuY29uY2F0KCd3aWtpPicsIFN0cmluZy5yYXdgKFxcc3xcXFMpKj88L25vYCwgJ3dpa2knLCAnPicpLFxuXHRcdFx0XHRcdFx0XHQnZydcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRjb25zdCBfY2xlYW5lZFRleHQgPSBlYi52YWx1ZS5yZXBsYWNlKC88IS0tKFxcc3xcXFMpKj8tLT4vZywgJycpLnJlcGxhY2Uobm93aWtpUmVnZXgpO1xuXHRcdFx0XHRcdFx0aWYgKCFmaW5kX2NhdGVnb3J5KF9jbGVhbmVkVGV4dCwgdCwgdHJ1ZSkpIHtcblx0XHRcdFx0XHRcdFx0ZWIudmFsdWUgKz0gYFxcbiR7bmV3X2NhdH1gO1xuXHRcdFx0XHRcdFx0XHRhZGRlZE9uZSA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChhZGRlZE9uZSkge1xuXHRcdFx0XHRcdFx0Ly8gUmVtb3ZlIFwic3Vic3Q6dW5jXCIgYWRkZWQgYnkgRmxpbmZvIGlmIGl0IGRpZG4ndCBmaW5kIGNhdGVnb3JpZXNcblx0XHRcdFx0XHRcdGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCgne3skJy5jb25jYXQoJ3N1YnN0OicpLmNvbmNhdCgndW5jfX0nKSwgJ2cnKTtcblx0XHRcdFx0XHRcdGViLnZhbHVlID0gZWIudmFsdWUucmVwbGFjZShyZWdleCwgJycpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fSkoZm9ybS5vbnN1Ym1pdCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cdGxldCBjbGVhbmVkVGV4dCA9IG51bGw7XG5cdGNvbnN0IGlzT25QYWdlID0gKHtmaXJzdENoaWxkfSkgPT4ge1xuXHRcdGlmIChmaXJzdENoaWxkLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGxldCBjYXRUaXRsZSA9IHRpdGxlKGZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKCdocmVmJykpO1xuXHRcdGlmICghY2F0VGl0bGUpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRjYXRUaXRsZSA9IGNhdFRpdGxlLnNsaWNlKGNhdFRpdGxlLmluZGV4T2YoJzonKSArIDEpLnJlcGxhY2UoL18vZywgJyAnKTtcblx0XHRpZiAoSEMuYmxhY2tsaXN0ICYmIEhDLmJsYWNrbGlzdC50ZXN0KGNhdFRpdGxlKSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGNvbnN0IHJlc3VsdCA9IHtcblx0XHRcdHRpdGxlOiBjYXRUaXRsZSxcblx0XHRcdG1hdGNoOiBbJycsICcnLCAnJ10sXG5cdFx0fTtcblx0XHRpZiAocGFnZVRleHQgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHRcdGlmIChjbGVhbmVkVGV4dCA9PT0gbnVsbCkge1xuXHRcdFx0Y29uc3Qgbm93aWtpUmVnZXggPSBuZXcgUmVnRXhwKCc8bm8nLmNvbmNhdCgnd2lraT4nLCBTdHJpbmcucmF3YChcXHN8XFxTKSo/PC9ub2AsICd3aWtpJywgJz4nKSwgJ2cnKTtcblx0XHRcdGNsZWFuZWRUZXh0ID0gcGFnZVRleHQucmVwbGFjZSgvPCEtLShcXHN8XFxTKSo/LS0+L2csICcnKS5yZXBsYWNlKG5vd2lraVJlZ2V4LCAnJyk7XG5cdFx0fVxuXHRcdHJlc3VsdC5tYXRjaCA9IGZpbmRfY2F0ZWdvcnkoY2xlYW5lZFRleHQsIGNhdFRpdGxlLCB0cnVlKTtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXHRsZXQgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcblx0bGV0IHNldHVwVGltZW91dCA9IG51bGw7XG5cdGNvbnN0IGZpbmRCeUNsYXNzID0gKHNjb3BlLCB0YWcsIGNsYXNzTmFtZSkgPT4ge1xuXHRcdGNvbnN0IHJlc3VsdCA9ICQoc2NvcGUpLmZpbmQoYCR7dGFnfS4ke2NsYXNzTmFtZX1gKTtcblx0XHRyZXR1cm4gcmVzdWx0ICYmIHJlc3VsdC5sZW5ndGggPiAwID8gcmVzdWx0WzBdIDogbnVsbDtcblx0fTtcblx0Y29uc3Qgc2V0dXAgPSAoYWRkaXRpb25hbFdvcmspID0+IHtcblx0XHRpZiAoaW5pdGlhbGl6ZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aW5pdGlhbGl6ZWQgPSB0cnVlO1xuXHRcdGlmIChzZXR1cFRpbWVvdXQpIHtcblx0XHRcdHdpbmRvdy5jbGVhclRpbWVvdXQoc2V0dXBUaW1lb3V0KTtcblx0XHRcdHNldHVwVGltZW91dCA9IG51bGw7XG5cdFx0fVxuXHRcdC8vIEZpbmQgdGhlIGNhdGVnb3J5IGJhciwgb3IgY3JlYXRlIGFuIGVtcHR5IG9uZSBpZiB0aGVyZSBpc24ndCBvbmUuIFRoZW4gYWRkIC0vKy0gbGlua3MgYWZ0ZXJcblx0XHQvLyBlYWNoIGNhdGVnb3J5LCBhbmQgYWRkIHRoZSArIGxpbmsuXG5cdFx0Y2F0TGluZSB8fD0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI213LW5vcm1hbC1jYXRsaW5rcycpOyAvLyBTcGVjaWFsOlVwbG9hZFxuXHRcdGNvbnN0IGhpZGRlbkNhdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXctaGlkZGVuLWNhdGxpbmtzJyk7XG5cdFx0aWYgKCFjYXRMaW5lKSB7XG5cdFx0XHRsZXQgZm9vdGVyID0gbnVsbDtcblx0XHRcdGlmICghaGlkZGVuQ2F0cykge1xuXHRcdFx0XHRmb290ZXIgPSBmaW5kQnlDbGFzcyhkb2N1bWVudCwgJ2RpdicsICdwcmludGZvb3RlcicpO1xuXHRcdFx0XHRpZiAoIWZvb3Rlcikge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fSAvLyBEb24ndCBrbm93IHdoZXJlIHRvIGluc2VydCB0aGUgY2F0ZWdvcnkgbGluZVxuXHRcdFx0fVxuXHRcdFx0Y2F0TGluZSA9IG1ha2UoJ2RpdicpO1xuXHRcdFx0Y2F0TGluZS5pZCA9ICdtdy1ub3JtYWwtY2F0bGlua3MnO1xuXHRcdFx0Y2F0TGluZS5zdHlsZS50ZXh0QWxpZ24gPSBpc19ydGwgPyAncmlnaHQnIDogJ2xlZnQnO1xuXHRcdFx0Ly8gQWRkIGEgbGFiZWxcblx0XHRcdGNvbnN0IGxhYmVsID0gbWFrZSgnYScpO1xuXHRcdFx0bGFiZWwuaHJlZiA9IGNvbmYud2dBcnRpY2xlUGF0aC5yZXBsYWNlKCckMScsICdTcGVjaWFsOkNhdGVnb3JpZXMnKTtcblx0XHRcdGxhYmVsLnRpdGxlID0gZ2V0TWVzc2FnZSgnY2F0ZWdvcmllcycpO1xuXHRcdFx0bGFiZWwuYXBwZW5kKG1ha2UoZ2V0TWVzc2FnZSgnY2F0ZWdvcmllcycpLCB0cnVlKSk7XG5cdFx0XHRjYXRMaW5lLmFwcGVuZChsYWJlbCk7XG5cdFx0XHRjYXRMaW5lLmFwcGVuZChtYWtlKCc6JywgdHJ1ZSkpO1xuXHRcdFx0Ly8gSW5zZXJ0IHRoZSBuZXcgY2F0ZWdvcnkgbGluZVxuXHRcdFx0bGV0IGNvbnRhaW5lciA9IGhpZGRlbkNhdHMgPyBoaWRkZW5DYXRzLnBhcmVudE5vZGUgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2F0bGlua3MnKTtcblx0XHRcdGlmICghY29udGFpbmVyKSB7XG5cdFx0XHRcdGNvbnRhaW5lciA9IG1ha2UoJ2RpdicpO1xuXHRcdFx0XHRjb250YWluZXIuaWQgPSAnY2F0bGlua3MnO1xuXHRcdFx0XHRmb290ZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY29udGFpbmVyLCBmb290ZXIubmV4dFNpYmxpbmcpO1xuXHRcdFx0fVxuXHRcdFx0Y29udGFpbmVyLmNsYXNzTmFtZSA9ICdjYXRsaW5rcyBub3ByaW50Jztcblx0XHRcdGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHRpZiAoaGlkZGVuQ2F0cykge1xuXHRcdFx0XHRoaWRkZW5DYXRzLmJlZm9yZShjYXRMaW5lKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnRhaW5lci5hcHBlbmQoY2F0TGluZSk7XG5cdFx0XHR9XG5cdFx0fSAvLyBlbmQgaWYgY2F0TGluZSBleGlzdHNcblx0XHRpZiAoaXNfcnRsKSB7XG5cdFx0XHRjYXRMaW5lLmRpciA9ICdydGwnO1xuXHRcdH1cblx0XHQvLyBDcmVhdGUgZWRpdG9ycyBmb3IgYWxsIGV4aXN0aW5nIGNhdGVnb3JpZXNcblx0XHRjb25zdCBjcmVhdGVFZGl0b3JzID0gKGxpbmUsIGlzX2hpZGRlbikgPT4ge1xuXHRcdFx0bGV0IGk7XG5cdFx0XHRsZXQgY2F0cyA9IGxpbmUucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcblx0XHRcdGlmIChjYXRzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0bmV3RE9NID0gdHJ1ZTtcblx0XHRcdFx0bGluZSA9IGNhdHNbMF0ucGFyZW50Tm9kZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNhdHMgPSBsaW5lLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW4nKTtcblx0XHRcdH1cblx0XHRcdC8vIENvcHkgY2F0cywgb3RoZXJ3aXNlIGl0J2xsIGFsc28gbWFnaWNhbGx5IGNvbnRhaW4gb3VyIGFkZGVkIHNwYW5zIGFzIGl0IGlzIGEgbGl2ZSBjb2xsZWN0aW9uIVxuXHRcdFx0Y29uc3QgY29weUNhdHMgPSBBcnJheS5mcm9tKHtcblx0XHRcdFx0bGVuZ3RoOiBjYXRzLmxlbmd0aCxcblx0XHRcdH0pO1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGNhdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29weUNhdHNbaV0gPSBjYXRzW2ldO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGNvcHlDYXRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IHRlc3QgPSBpc09uUGFnZShjb3B5Q2F0c1tpXSk7XG5cdFx0XHRcdGlmICh0ZXN0ICE9PSBudWxsICYmIHRlc3QubWF0Y2ggIT09IG51bGwgJiYgbGluZSkge1xuXHRcdFx0XHRcdG5ldyBDYXRlZ29yeUVkaXRvcihsaW5lLCBjb3B5Q2F0c1tpXSwgdGVzdC50aXRsZSwgdGVzdC5tYXRjaFsyXSwgaXNfaGlkZGVuKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNvcHlDYXRzLmxlbmd0aCA+IDAgPyBjb3B5Q2F0cy5hdCgtMSkgOiBudWxsO1xuXHRcdH07XG5cdFx0Y29uc3QgbGFzdFNwYW4gPSBjcmVhdGVFZGl0b3JzKGNhdExpbmUsIGZhbHNlKTtcblx0XHQvLyBDcmVhdGUgb25lIHRvIGFkZCBhIG5ldyBjYXRlZ29yeVxuXHRcdG5ldyBDYXRlZ29yeUVkaXRvcihuZXdET00gPyBjYXRMaW5lLnF1ZXJ5U2VsZWN0b3JBbGwoJ3VsJylbMF0gOiBjYXRMaW5lLCBudWxsLCBudWxsLCBsYXN0U3BhbiAhPT0gbnVsbCwgZmFsc2UpO1xuXHRcdGlmICghb25VcGxvYWQpIHtcblx0XHRcdGlmIChwYWdlVGV4dCAhPT0gbnVsbCAmJiBoaWRkZW5DYXRzKSB7XG5cdFx0XHRcdGlmIChpc19ydGwpIHtcblx0XHRcdFx0XHRoaWRkZW5DYXRzLmRpciA9ICdydGwnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNyZWF0ZUVkaXRvcnMoaGlkZGVuQ2F0cywgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0XHQvLyBBbmQgZmluYWxseSBhZGQgdGhlIFwibXVsdGktbW9kZVwiIHNwYW4uIChEbyB0aGlzIGF0IHRoZSBlbmQsIG90aGVyd2lzZSBpdCBlbmRzIHVwIGluIHRoZSBsaXN0IGFib3ZlLilcblx0XHRcdGNvbnN0IGVuYWJsZU11bHRpID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0ZW5hYmxlTXVsdGkuY2xhc3NOYW1lID0gJ25vcHJpbnQnO1xuXHRcdFx0aWYgKGlzX3J0bCkge1xuXHRcdFx0XHRlbmFibGVNdWx0aS5kaXIgPSAncnRsJztcblx0XHRcdH1cblx0XHRcdGNhdExpbmUuaW5zZXJ0QmVmb3JlKGVuYWJsZU11bHRpLCBjYXRMaW5lLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcpO1xuXHRcdFx0ZW5hYmxlTXVsdGkuYXBwZW5kKG1ha2UoJ1xcdTAwQTAnLCB0cnVlKSk7IC8vIG5ic3Bcblx0XHRcdG11bHRpU3BhbiA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdGVuYWJsZU11bHRpLmFwcGVuZChtdWx0aVNwYW4pO1xuXHRcdFx0bXVsdGlTcGFuLmlubmVySFRNTCA9IGAoPGE+JHtIQy5hZGRtdWx0aX08L2E+KWA7XG5cdFx0XHRjb25zdCBbbGlua10gPSBtdWx0aVNwYW4ucXVlcnlTZWxlY3RvckFsbCgnYScpO1xuXHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuXHRcdFx0XHRzZXRNdWx0aUlucHV0KCk7XG5cdFx0XHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHRcdFx0XHRyZXR1cm4gZXZ0S2lsbChldmVudCk7XG5cdFx0XHR9KTtcblx0XHRcdGxpbmsudGl0bGUgPSBnZXRNZXNzYWdlKCdtdWx0aV90b29sdGlwJyk7XG5cdFx0XHRsaW5rLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcblx0XHR9XG5cdFx0Y2xlYW5lZFRleHQgPSBudWxsO1xuXHRcdGlmIChhZGRpdGlvbmFsV29yayBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG5cdFx0XHRhZGRpdGlvbmFsV29yaygpO1xuXHRcdH1cblx0XHRtdy5ob29rKCdob3RjYXQucmVhZHknKS5maXJlKCk7IC8vIEV4ZWN1dGUgcmVnaXN0ZXJlZCBjYWxsYmFjayBmdW5jdGlvbnNcblx0XHQkKCdib2R5JykudHJpZ2dlcignaG90Y2F0U2V0dXBDb21wbGV0ZWQnKTtcblx0fTtcblx0Y29uc3QgY3JlYXRlQ29tbWl0Rm9ybSA9ICgpID0+IHtcblx0XHRpZiAoY29tbWl0Rm9ybSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBmb3JtQ29udGFpbmVyID0gbWFrZSgnZGl2Jyk7XG5cdFx0Zm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmQoZm9ybUNvbnRhaW5lcik7XG5cdFx0Zm9ybUNvbnRhaW5lci5pbm5lckhUTUwgPSBgPGZvcm0gaWQ9XCJob3RjYXRDb21taXRGb3JtXCIgbWV0aG9kPVwicG9zdFwiIGVuY3R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgYWN0aW9uPVwiJHtcblx0XHRcdGNvbmYud2dTY3JpcHRcblx0XHR9P3RpdGxlPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGNvbmYud2dQYWdlTmFtZSl9JmFjdGlvbj1zdWJtaXRcIj5cblx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ3cFRleHRib3gxXCI+XG5cdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwibW9kZWxcIiB2YWx1ZT1cIiR7Y29uZi53Z1BhZ2VDb250ZW50TW9kZWx9XCI+XG5cdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiZm9ybWF0XCIgdmFsdWU9XCJ0ZXh0L3gtd2lraVwiPlxuXHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwU3VtbWFyeVwiIHZhbHVlPVwiXCI+XG5cdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJ3cE1pbm9yZWRpdFwiIHRpdGxlPVwid3BNaW5vcmVkaXRcIiB2YWx1ZT1cIjFcIj5cblx0XHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIndwV2F0Y2h0aGlzXCIgdGl0bGU9XCJ3cFdhdGNodGhpc1wiIHZhbHVlPVwiMVwiPlxuXHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwQXV0b1N1bW1hcnlcIiB2YWx1ZT1cImQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlXCI+XG5cdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwid3BFZGl0dGltZVwiPlxuXHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwU3RhcnR0aW1lXCI+XG5cdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwid3BEaWZmXCIgdmFsdWU9XCJ3cERpZmZcIj5cblx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJvbGRpZFwiIHZhbHVlPVwiMFwiPlxuXHRcdDxpbnB1dCB0eXBlPVwic3VibWl0XCIgbmFtZT1cImhjQ29tbWl0XCIgdmFsdWU9XCJoY0NvbW1pdFwiPlxuXHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwRWRpdFRva2VuXCI+XG5cdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwid3BVbHRpbWF0ZVBhcmFtXCIgdmFsdWU9XCIxXCI+XG5cdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwid3BDaGFuZ2VUYWdzXCI+XG5cdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT1cIuKEs/CdkrLimaXwnZOK8J2Tg/Cdkr7wnZK44oS08J2SueKEr1wiIG5hbWU9XCJ3cFVuaWNvZGVDaGVja1wiPlxuXHRcdDwvZm9ybT5gO1xuXHRcdGNvbW1pdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG90Y2F0Q29tbWl0Rm9ybScpO1xuXHR9O1xuXHRjb25zdCBnZXRQYWdlID0gKCkgPT4ge1xuXHRcdC8vIFdlIGtub3cgd2UgaGF2ZSBhbiBhcnRpY2xlIGhlcmUuXG5cdFx0aWYgKGNvbmYud2dBcnRpY2xlSWQpIHtcblx0XHRcdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRyYXdjb250aW51ZTogJycsXG5cdFx0XHRcdHRpdGxlczogY29uZi53Z1BhZ2VOYW1lLFxuXHRcdFx0XHRwcm9wOiBbJ2luZm8nLCAncmV2aXNpb25zJ10sXG5cdFx0XHRcdHJ2cHJvcDogWydjb250ZW50JywgJ3RpbWVzdGFtcCcsICdpZHMnXSxcblx0XHRcdFx0cnZsaW1pdDogJzEnLFxuXHRcdFx0XHRydnN0YXJ0aWQ6IGNvbmYud2dDdXJSZXZpc2lvbklkLFxuXHRcdFx0XHRydnNsb3RzOiAnbWFpbicsXG5cdFx0XHRcdG1ldGE6IFsnc2l0ZWluZm8nXSxcblx0XHRcdH07XG5cdFx0XHRIQy5zdGFydCA9IChkYXRhKSA9PiB7XG5cdFx0XHRcdHNldFBhZ2UoZGF0YSk7XG5cdFx0XHRcdHNldHVwKGNyZWF0ZUNvbW1pdEZvcm0pO1xuXHRcdFx0fTtcblx0XHRcdGFwaS5nZXQocGFyYW1zKS50aGVuKChkYXRhKSA9PiB7XG5cdFx0XHRcdEhDLnN0YXJ0KGRhdGEpO1xuXHRcdFx0fSk7XG5cdFx0XHRzZXR1cFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0c2V0dXAoY3JlYXRlQ29tbWl0Rm9ybSk7XG5cdFx0XHR9LCA0MDAwKTsgLy8gNCBzZWMsIGp1c3QgaW4gY2FzZSBnZXR0aW5nIHRoZSB3aWtpdGV4dCB0YWtlcyBsb25nZXIuXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIERvZXNuJ3QgZXhpc3QgeWV0LiBEaXNhYmxlIG9uIG5vbi1leGlzdGluZyBVc2VyIHBhZ2VzLlxuXHRcdFx0aWYgKGNvbmYud2dOYW1lc3BhY2VOdW1iZXIgPT09IDIpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0cGFnZVRleHQgPSAnJztcblx0XHRcdHBhZ2VUaW1lID0gbnVsbDtcblx0XHRcdHNldHVwKGNyZWF0ZUNvbW1pdEZvcm0pO1xuXHRcdH1cblx0fTtcblx0Y29uc3Qgc2V0U3RhdGUgPSAoc3RhdGUpID0+IHtcblx0XHRjb25zdCBjYXRzID0gc3RhdGUuc3BsaXQoJ1xcbicpO1xuXHRcdGlmIChjYXRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGlmIChpbml0aWFsaXplZCAmJiBlZGl0b3JzLmxlbmd0aCA9PT0gMSAmJiBlZGl0b3JzWzBdLmlzQWRkQ2F0ZWdvcnkpIHtcblx0XHRcdC8vIEluc2VydCBuZXcgc3BhbnMgYW5kIGNyZWF0ZSBuZXcgZWRpdG9ycyBmb3IgdGhlbS5cblx0XHRcdGNvbnN0IG5ld1NwYW5zID0gW107XG5cdFx0XHRjb25zdCBiZWZvcmUgPSBlZGl0b3JzLmxlbmd0aCA9PT0gMSA/IGVkaXRvcnNbMF0uc3BhbiA6IG51bGw7XG5cdFx0XHRsZXQgaTtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBjYXRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChjYXRzW2ldLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCBjYXQgPSBjYXRzW2ldLnNwbGl0KCd8Jyk7XG5cdFx0XHRcdGNvbnN0IGtleSA9IGNhdC5sZW5ndGggPiAxID8gY2F0WzFdIDogbnVsbDtcblx0XHRcdFx0W2NhdF0gPSBjYXQ7XG5cdFx0XHRcdGNvbnN0IGxpbmsgPSBtYWtlKCdhJyk7XG5cdFx0XHRcdGxpbmsuaHJlZiA9IHdpa2lQYWdlUGF0aChgJHtIQy5jYXRlZ29yeV9jYW5vbmljYWx9OiR7Y2F0fWApO1xuXHRcdFx0XHRsaW5rLmFwcGVuZChtYWtlKGNhdCwgdHJ1ZSkpO1xuXHRcdFx0XHRsaW5rLnRpdGxlID0gY2F0O1xuXHRcdFx0XHRjb25zdCBzcGFuID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0XHRzcGFuLmFwcGVuZChsaW5rKTtcblx0XHRcdFx0aWYgKCFpKSB7XG5cdFx0XHRcdFx0Y2F0TGluZS5pbnNlcnRCZWZvcmUobWFrZSgnICcsIHRydWUpLCBiZWZvcmUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJlZm9yZS5iZWZvcmUoc3Bhbik7XG5cdFx0XHRcdGlmIChiZWZvcmUgJiYgaSArIDEgPCBjYXRzLmxlbmd0aCkge1xuXHRcdFx0XHRcdHBhcmVudC5pbnNlcnRCZWZvcmUobWFrZSgnIHwgJywgdHJ1ZSksIGJlZm9yZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0bmV3U3BhbnNbbmV3U3BhbnMubGVuZ3RoXSA9IHtcblx0XHRcdFx0XHRlbGVtZW50OiBzcGFuLFxuXHRcdFx0XHRcdHRpdGxlOiBjYXQsXG5cdFx0XHRcdFx0a2V5LFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0Ly8gQW5kIGNoYW5nZSB0aGUgbGFzdCBvbmUuLi5cblx0XHRcdGlmIChiZWZvcmUpIHtcblx0XHRcdFx0YmVmb3JlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG1ha2UoJyB8ICcsIHRydWUpLCBiZWZvcmUpO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChpID0gMDsgaSA8IG5ld1NwYW5zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdG5ldyBDYXRlZ29yeUVkaXRvcihjYXRMaW5lLCBuZXdTcGFuc1tpXS5lbGVtZW50LCBuZXdTcGFuc1tpXS50aXRsZSwgbmV3U3BhbnNbaV0ua2V5KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH07XG5cdGNvbnN0IGdldFN0YXRlID0gKCkgPT4ge1xuXHRcdGxldCByZXN1bHQgPSBudWxsO1xuXHRcdGZvciAoY29uc3QgZWRpdG9yIG9mIGVkaXRvcnMpIHtcblx0XHRcdGxldCB0ZXh0ID0gZWRpdG9yLmN1cnJlbnRDYXRlZ29yeTtcblx0XHRcdGNvbnN0IGtleSA9IGVkaXRvci5jdXJyZW50S2V5O1xuXHRcdFx0aWYgKHRleHQgJiYgdGV4dC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGlmIChrZXkgIT09IG51bGwpIHtcblx0XHRcdFx0XHR0ZXh0ICs9IGB8JHtrZXl9YDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocmVzdWx0ID09PSBudWxsKSB7XG5cdFx0XHRcdFx0cmVzdWx0ID0gdGV4dDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXN1bHQgKz0gYFxcbiR7dGV4dH1gO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cdGNvbnN0IHJlYWxseV9ydW4gPSAoKSA9PiB7XG5cdFx0aW5pdGlhbGl6ZSgpO1xuXHRcdGlmIChcblx0XHRcdCFIQy51cGxvYWRfZGlzYWJsZWQgJiZcblx0XHRcdGNvbmYud2dOYW1lc3BhY2VOdW1iZXIgPT09IC0xICYmXG5cdFx0XHRjb25mLndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lID09PSAnVXBsb2FkJyAmJlxuXHRcdFx0Y29uZi53Z1VzZXJOYW1lXG5cdFx0KSB7XG5cdFx0XHRzZXR1cF91cGxvYWQoKTtcblx0XHRcdHNldHVwKCgpID0+IHtcblx0XHRcdFx0Ly8gQ2hlY2sgZm9yIHN0YXRlIHJlc3RvcmF0aW9uIG9uY2UgdGhlIHNldHVwIGlzIGRvbmUgb3RoZXJ3aXNlLCBidXQgYmVmb3JlIHNpZ25hbGxpbmcgc2V0dXAgY29tcGxldGlvblxuXHRcdFx0XHRpZiAod2luZG93LlVwbG9hZEZvcm0gJiYgVXBsb2FkRm9ybS5wcmV2aW91c19ob3RjYXRfc3RhdGUpIHtcblx0XHRcdFx0XHRVcGxvYWRGb3JtLnByZXZpb3VzX2hvdGNhdF9zdGF0ZSA9IHNldFN0YXRlKFVwbG9hZEZvcm0ucHJldmlvdXNfaG90Y2F0X3N0YXRlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChcblx0XHRcdFx0IWNvbmYud2dJc0FydGljbGUgfHxcblx0XHRcdFx0Y29uZi53Z0FjdGlvbiAhPT0gJ3ZpZXcnIHx8XG5cdFx0XHRcdHBhcmFtKCdkaWZmJykgIT09IG51bGwgfHxcblx0XHRcdFx0cGFyYW0oJ29sZGlkJykgIT09IG51bGwgfHxcblx0XHRcdFx0IWNhbl9lZGl0KCkgfHxcblx0XHRcdFx0SEMuZGlzYWJsZSgpXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Z2V0UGFnZSgpO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgcnVuID0gKCkgPT4ge1xuXHRcdGlmIChIQy5zdGFydGVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdEhDLnN0YXJ0ZWQgPSB0cnVlO1xuXHRcdHJlYWxseV9ydW4oKTtcblx0fTtcblx0Ly8gRXhwb3J0IGxlZ2FjeSBmdW5jdGlvbnNcblx0d2luZG93LmhvdGNhdF9nZXRfc3RhdGUgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIGdldFN0YXRlKCk7XG5cdH07XG5cdHdpbmRvdy5ob3RjYXRfc2V0X3N0YXRlID0gKHN0YXRlKSA9PiB7XG5cdFx0cmV0dXJuIHNldFN0YXRlKHN0YXRlKTtcblx0fTtcblx0d2luZG93LmhvdGNhdF9jbG9zZV9mb3JtID0gKCkgPT4ge1xuXHRcdGNsb3NlRm9ybSgpO1xuXHR9O1xuXHRIQy5ydW5XaGVuUmVhZHkgPSAoY2FsbGJhY2spID0+IHtcblx0XHQvLyBydW4gdXNlci1yZWdpc3RlcmVkIGNvZGUgb25jZSBIb3RDYXQgaXMgZnVsbHkgc2V0IHVwIGFuZCByZWFkeS5cblx0XHRtdy5ob29rKCdob3RjYXQucmVhZHknKS5hZGQoY2FsbGJhY2spO1xuXHR9O1xuXHQvLyBSdW4gYXMgc29vbiBhcyBwb3NzaWJsZS4gVGhpcyB2YXJpZXMgZGVwZW5kaW5nIG9uIE1lZGlhV2lraSB2ZXJzaW9uO1xuXHQvLyB3aW5kb3cncyAnbG9hZCcgZXZlbnQgaXMgYWx3YXlzIHNhZmUsIGJ1dCB1c3VhbGx5IHdlIGNhbiBkbyBiZXR0ZXIgdGhhbiB0aGF0LlxuXHRpZiAoY29uZi53Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSAhPT0gJ1VwbG9hZCcpIHtcblx0XHQvLyBSZWxvYWQgSG90Q2F0IGFmdGVyIChWRSkgZWRpdHMgKGJ1ZyBUMTAzMjg1KVxuXHRcdG13Lmhvb2soJ3Bvc3RFZGl0JykuYWRkKCgpID0+IHtcblx0XHRcdC8vIFJlc2V0IEhvdENhdCBpbiBjYXNlIHRoaXMgaXMgYSBzb2Z0IHJlbG9hZCAoZS5nLiBWaXN1YWxFZGl0b3IgZWRpdCksIHVubGVzcyB0aGUgY2F0ZWdvcmllc1xuXHRcdFx0Ly8gd2VyZSBub3QgcmUtcmVuZGVyZWQgYW5kIG91ciBpbnRlcmZhY2UgaXMgc3RpbGwgdGhlcmUgKGUuZy4gRGlzY3Vzc2lvblRvb2xzIGVkaXQpXG5cdFx0XHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhdGxpbmtzIC5ob3RjYXRsaW5rJykpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y2F0TGluZSA9IG51bGw7XG5cdFx0XHRlZGl0b3JzID0gW107XG5cdFx0XHRpbml0aWFsaXplZCA9IGZhbHNlO1xuXHRcdFx0SEMuc3RhcnRlZCA9IGZhbHNlO1xuXHRcdFx0cnVuKCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2UgY2FuIHNhZmVseSB0cmlnZ2VyIGp1c3QgYWZ0ZXIgdXNlciBjb25maWd1cmF0aW9uIGlzIGxvYWRlZC5cblx0Ly8gVXNlIGFsd2F5cygpIGluc3RlYWQgb2YgdGhlbigpIHRvIGFsc28gc3RhcnQgSG90Q2F0IGlmIHRoZSB1c2VyIG1vZHVsZSBoYXMgcHJvYmxlbXMuXG5cdCQocnVuKTtcbn0pKCk7XG4iLCAiY29uc3QgZ2V0TWVzc2FnZSA9IChrZXk6IHN0cmluZywgLi4uYXJnczogc3RyaW5nW10pOiBzdHJpbmcgPT4ge1xuXHRrZXkgPSBgaG90Y2F0LSR7a2V5fWA7XG5cdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0Ly8gKiBzZWUgbWVzc2FnZXMudHNcblx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRyZXR1cm4gbXcubWVzc2FnZShrZXksIC4uLmFyZ3MpLnBsYWluKCk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImNvbnN0IGhvdENhdE1lc3NhZ2VzID0gKCk6IHZvaWQgPT4ge1xuXHRjb25zdCB7d2dVc2VyTGFuZ3VhZ2V9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmIChbJ3poLWhhbnQnLCAnemgtaGsnLCAnemgtbW8nLCAnemgtdHcnXS5pbmNsdWRlcyh3Z1VzZXJMYW5ndWFnZSkpIHtcblx0XHRtdy5tZXNzYWdlcy5zZXQoe1xuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfcmVtb3ZlZCc6ICflt7Lnp7vpmaRbW0NhdGVnb3J5OiQxXV0nLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy10ZW1wbGF0ZV9yZW1vdmVkJzogJ+W3suenu+mZpHt7W1tDYXRlZ29yeTokMV1dfX0nLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfYWRkZWQnOiAn5bey5re75YqgW1tDYXRlZ29yeTokMV1dJyxcblx0XHRcdC8vICQyIGlzIHRoZSBuZXcga2V5XG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9rZXljaGFuZ2UnOiAn5bey6Kit572uW1tDYXRlZ29yeTokMV1d55qE5paw5o6S5bqP5a2X77yaXCIkMlwiJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X25vdEZvdW5kJzogJ+WIhumhnuKAnCQx4oCd5rKS5pyJ5om+5YiwJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X2V4aXN0cyc6ICfliIbpoZ7igJwkMeKAneW3sue2k+WtmOWcqO+8jOaykuaciea3u+WKoOOAgicsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9yZXNvbHZlZCc6ICfvvIjph43lrprlkJFbW0NhdGVnb3J5OiQxXV3lt7LomZXnkIbvvIknLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy11bmNhdF9yZW1vdmVkJzogJ+W3suenu+mZpHt7dW5jYXRlZ29yaXplZH19Jyxcblx0XHRcdC8vIFNvbWUgdGV4dCB0byBwcmVmaXggdG8gdGhlIGVkaXQgc3VtbWFyeS5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtcHJlZml4JzogJ+S9v+eUqFtbSDpIT1RDQVR8SG90Q2F0XV0nLFxuXHRcdFx0Ly8gU29tZSB0ZXh0IHRvIGFwcGVuZCB0byB0aGUgZWRpdCBzdW1tYXJ5LiBOYW1lZCAndXNpbmcnIGZvciBoaXN0b3JpY2FsIHJlYXNvbnMuIElmIHlvdSBwcmVmZXJcblx0XHRcdC8vIHRvIGhhdmUgYSBtYXJrZXIgYXQgdGhlIGZyb250LCB1c2UgcHJlZml4IGFuZCBzZXQgdGhpcyB0byB0aGUgZW1wdHkgc3RyaW5nLlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy11c2luZyc6ICcnLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1tdWx0aV9jaGFuZ2UnOiAnJDHlgIvliIbpoZ4nLFxuXHRcdFx0Ly8gQW55IGNhdGVnb3J5IGluIHRoaXMgY2F0ZWdvcnkgaXMgZGVlbWVkIGEgZGlzYW1iaWd1YXRpb24gY2F0ZWdvcnk7IGkuZS4sIGEgY2F0ZWdvcnkgdGhhdCBzaG91bGQgbm90IGNvbnRhaW5cblx0XHRcdC8vIGFueSBpdGVtcywgYnV0IHRoYXQgY29udGFpbnMgbGlua3MgdG8gb3RoZXIgY2F0ZWdvcmllcyB3aGVyZSBzdHVmZiBzaG91bGQgYmUgY2F0ZWdvcml6ZWQuIElmIHlvdSBkb24ndCBoYXZlXG5cdFx0XHQvLyB0aGF0IGNvbmNlcHQgb24geW91ciB3aWtpLCBzZXQgaXQgdG8gYmxhbmsgc3RyaW5nLiBVc2UgYmxhbmtzLCBub3QgdW5kZXJzY29yZXMuXG5cdFx0XHQnaG90Y2F0LWRpc2FtYmlnX2NhdGVnb3J5JzogJycsXG5cdFx0XHQvLyBBbnkgY2F0ZWdvcnkgaW4gdGhpcyBjYXRlZ29yeSBpcyBkZWVtZWQgYSAoc29mdCkgcmVkaXJlY3QgdG8gc29tZSBvdGhlciBjYXRlZ29yeSBkZWZpbmVkIGJ5IGEgbGlua1xuXHRcdFx0Ly8gdG8gYW5vdGhlciBub24tYmxhY2tsaXN0ZWQgY2F0ZWdvcnkuIElmIHlvdXIgd2lraSBkb2Vzbid0IGhhdmUgc29mdCBjYXRlZ29yeSByZWRpcmVjdHMsIHNldCB0aGlzIHRvIG51bGwuXG5cdFx0XHQvLyBJZiBhIHNvZnQtcmVkaXJlY3RlZCBjYXRlZ29yeSBjb250YWlucyBtb3JlIHRoYW4gb25lIGxpbmsgdG8gYW5vdGhlciBub24tYmxhY2tsaXN0ZWQgY2F0ZWdvcnksIGl0J3MgY29uc2lkZXJlZFxuXHRcdFx0Ly8gYSBkaXNhbWJpZ3VhdGlvbiBjYXRlZ29yeSBpbnN0ZWFkLlxuXHRcdFx0J2hvdGNhdC1yZWRpcl9jYXRlZ29yeSc6ICflt7Lph43lrprlkJHnmoTliIbnsbsnLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1zZXBhcmF0b3InOiAnOyAnLFxuXHRcdFx0Ly8gJDEgaXMgcmVwbGFjZWQgYnkgYSBudW1iZXIuIElmIHlvdXIgbGFuZ3VhZ2UgaGFzIHNldmVyYWwgcGx1cmFsIGZvcm1zIChjLmYuIFtbOmVud2lraTpEdWFsIChncmFtbWF0aWNhbCBmb3JtKV1dKSxcblx0XHRcdC8vIHlvdSBjYW4gc2V0IHRoaXMgdG8gYW4gYXJyYXkgb2Ygc3RyaW5ncyBzdWl0YWJsZSBmb3IgcGFzc2luZyB0byBtdy5sYW5ndWFnZS5jb25maWdQbHVyYWwoKS5cblx0XHRcdC8vIElmIHRoYXQgZnVuY3Rpb24gZG9lc24ndCBleGlzdCwgSG90Q2F0IHdpbGwgc2ltcGx5IGZhbGwgYmFjayB0byB1c2luZyB0aGUgbGFzdFxuXHRcdFx0Ly8gZW50cnkgaW4gdGhlIGFycmF5LlxuXHRcdFx0Ly8gRGVmYXVsdHMgdG8gJ1tbJyArIGNhdGVnb3J5X2Nhbm9uaWNhbCArICc6JDFdXScuIENhbiBiZSBvdmVycmlkZGVuIGlmIGluIHRoZSBzaG9ydCBlZGl0IHN1bW1hcmllc1xuXHRcdFx0Ly8gbm90IHRoZSBzdGFuZGFyZCBjYXRlZ29yeSBuYW1lIHNob3VsZCBiZSB1c2VkIGJ1dCwgc2F5LCBhIHNob3J0ZXIgbmFtZXNwYWNlIGFsaWFzLiAkMSBpcyByZXBsYWNlZFxuXHRcdFx0Ly8gYnkgYSBjYXRlZ29yeSBuYW1lLlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnOiAnJDEnLFxuXHRcdFx0Ly8gQnV0dG9uIHRleHQuIExvY2FsaXplIHRvIHdnQ29udGVudExhbmd1YWdlIGhlcmU7IGxvY2FsaXplIHRvIHdnVXNlckxhbmd1YWdlIGluIGEgc3VicGFnZSxcblx0XHRcdC8vIHNlZSBsb2NhbGl6YXRpb24gaG9vayBiZWxvdy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY29tbWl0JzogJ+WEsuWtmCcsXG5cdFx0XHQvLyBCdXR0b24gdGV4dC4gTG9jYWxpemUgdG8gd2dDb250ZW50TGFuZ3VhZ2UgaGVyZTsgbG9jYWxpemUgdG8gd2dVc2VyTGFuZ3VhZ2UgaW4gYSBzdWJwYWdlLFxuXHRcdFx0Ly8gc2VlIGxvY2FsaXphdGlvbiBob29rIGJlbG93LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1vayc6ICfnorrlrponLFxuXHRcdFx0Ly8gQnV0dG9uIHRleHQuIExvY2FsaXplIHRvIHdnQ29udGVudExhbmd1YWdlIGhlcmU7IGxvY2FsaXplIHRvIHdnVXNlckxhbmd1YWdlIGluIGEgc3VicGFnZSxcblx0XHRcdC8vIHNlZSBsb2NhbGl6YXRpb24gaG9vayBiZWxvdy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2FuY2VsJzogJ+WPlua2iCcsXG5cdFx0XHQvLyBMb2NhbGl6ZSB0byB3Z0NvbnRlbnRMYW5ndWFnZSBoZXJlOyBsb2NhbGl6ZSB0byB3Z1VzZXJMYW5ndWFnZSBpbiBhIHN1YnBhZ2UsXG5cdFx0XHQvLyBzZWUgbG9jYWxpemF0aW9uIGhvb2sgYmVsb3cuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLW11bHRpX2Vycm9yJzpcblx0XHRcdFx0J+eEoeazleW+nuS8uuacjeWZqOWPluW+l+mggemdouaWh+Wtl+OAguWboOatpO+8jOaCqOeahOWIhumhnuiuiuabtOeEoeazleWEsuWtmOOAguaIkeWAkeeCuuatpOS4jeS+v+ihqOekuuaKseatieOAgicsXG5cdFx0XHQvLyBQbHVyYWwgb2YgY2F0ZWdvcnlfY2Fub25pY2FsLlxuXHRcdFx0J2hvdGNhdC1jYXRlZ29yaWVzJzogJ+WIhumhnicsXG5cdFx0XHQvLyBOYW1lcyBmb3IgdGhlIHNlYXJjaCBlbmdpbmVzXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1zZWFyY2hpbmRleCc6ICfmkJzlsIvntKLlvJUnLFxuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtcGFnZWxpc3QnOiAn6aCB6Z2i5YiX6KGoJyxcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLWNvbWJpbmVkJzogJ+WQiOS9teaQnOWwiycsXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1zdWJjYXQnOiAn5a2Q5YiG6aGeJyxcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLXBhcmVudGNhdCc6ICfkuIrlsaTliIbpoZ4nLFxuXHRcdFx0Ly8gVGhlIHRvb2x0aXBzIGZvciB0aGUgYWJvdmUgbGlua3Ncblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtY2hhbmdlJzogJ+S/ruaUuScsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLXJlbW92ZSc6ICfnp7vpmaQnLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1hZGQnOiAn5aKe5Yqg5LiA5YCL5paw5YiG6aGeJyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtcmVzdG9yZSc6ICflvqnljp/orormm7QnLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy11bmRvJzogJ+W+qeWOn+iuiuabtCcsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLWRvd24nOiAn5omT6ZaL5Lul5L+u5pS55Lim6aGv56S65a2Q5YiG6aGeJyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtdXAnOiAn5omT6ZaL5Lul5L+u5pS55Lim6aGv56S65LiK5bGk5YiG6aGeJyxcblx0XHRcdC8vIFRvb2x0aXAgZm9yIHRoZSBcImVudGVyIG11bHRpLW1vZGVcIiBsaW5rXG5cdFx0XHQnaG90Y2F0LW11bHRpX3Rvb2x0aXAnOiAn5L+u5pS55aSa5YCL5YiG6aGeJyxcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRtdy5tZXNzYWdlcy5zZXQoe1xuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfcmVtb3ZlZCc6ICflt7Lnp7vpmaRbW0NhdGVnb3J5OiQxXV0nLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy10ZW1wbGF0ZV9yZW1vdmVkJzogJ+W3suenu+mZpHt7W1tDYXRlZ29yeTokMV1dfX0nLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfYWRkZWQnOiAn5bey5re75YqgW1tDYXRlZ29yeTokMV1dJyxcblx0XHRcdC8vICQyIGlzIHRoZSBuZXcga2V5XG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9rZXljaGFuZ2UnOiAn5bey6K6+572uW1tDYXRlZ29yeTokMV1d55qE5paw5o6S5bqP5a2X77yaXCIkMlwiJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X25vdEZvdW5kJzogJ+WIhuexu+KAnCQx4oCd5rKh5pyJ5om+5YiwJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X2V4aXN0cyc6ICfliIbnsbvigJwkMeKAneW3sue7j+WtmOWcqO+8jOayoeaciea3u+WKoOOAgicsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9yZXNvbHZlZCc6ICfvvIjph43lrprlkJFbW0NhdGVnb3J5OiQxXV3lt7LlpITnkIbvvIknLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy11bmNhdF9yZW1vdmVkJzogJ+W3suenu+mZpHt7dW5jYXRlZ29yaXplZH19Jyxcblx0XHRcdC8vIFNvbWUgdGV4dCB0byBwcmVmaXggdG8gdGhlIGVkaXQgc3VtbWFyeS5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtcHJlZml4JzogJ+S9v+eUqFtbSDpIT1RDQVR8SG90Q2F0XV0nLFxuXHRcdFx0Ly8gU29tZSB0ZXh0IHRvIGFwcGVuZCB0byB0aGUgZWRpdCBzdW1tYXJ5LiBOYW1lZCAndXNpbmcnIGZvciBoaXN0b3JpY2FsIHJlYXNvbnMuIElmIHlvdSBwcmVmZXJcblx0XHRcdC8vIHRvIGhhdmUgYSBtYXJrZXIgYXQgdGhlIGZyb250LCB1c2UgcHJlZml4IGFuZCBzZXQgdGhpcyB0byB0aGUgZW1wdHkgc3RyaW5nLlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy11c2luZyc6ICcnLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1tdWx0aV9jaGFuZ2UnOiAnJDHkuKrliIbnsbsnLFxuXHRcdFx0Ly8gQW55IGNhdGVnb3J5IGluIHRoaXMgY2F0ZWdvcnkgaXMgZGVlbWVkIGEgZGlzYW1iaWd1YXRpb24gY2F0ZWdvcnk7IGkuZS4sIGEgY2F0ZWdvcnkgdGhhdCBzaG91bGQgbm90IGNvbnRhaW5cblx0XHRcdC8vIGFueSBpdGVtcywgYnV0IHRoYXQgY29udGFpbnMgbGlua3MgdG8gb3RoZXIgY2F0ZWdvcmllcyB3aGVyZSBzdHVmZiBzaG91bGQgYmUgY2F0ZWdvcml6ZWQuIElmIHlvdSBkb24ndCBoYXZlXG5cdFx0XHQvLyB0aGF0IGNvbmNlcHQgb24geW91ciB3aWtpLCBzZXQgaXQgdG8gYmxhbmsgc3RyaW5nLiBVc2UgYmxhbmtzLCBub3QgdW5kZXJzY29yZXMuXG5cdFx0XHQnaG90Y2F0LWRpc2FtYmlnX2NhdGVnb3J5JzogJycsXG5cdFx0XHQvLyBBbnkgY2F0ZWdvcnkgaW4gdGhpcyBjYXRlZ29yeSBpcyBkZWVtZWQgYSAoc29mdCkgcmVkaXJlY3QgdG8gc29tZSBvdGhlciBjYXRlZ29yeSBkZWZpbmVkIGJ5IGEgbGlua1xuXHRcdFx0Ly8gdG8gYW5vdGhlciBub24tYmxhY2tsaXN0ZWQgY2F0ZWdvcnkuIElmIHlvdXIgd2lraSBkb2Vzbid0IGhhdmUgc29mdCBjYXRlZ29yeSByZWRpcmVjdHMsIHNldCB0aGlzIHRvIG51bGwuXG5cdFx0XHQvLyBJZiBhIHNvZnQtcmVkaXJlY3RlZCBjYXRlZ29yeSBjb250YWlucyBtb3JlIHRoYW4gb25lIGxpbmsgdG8gYW5vdGhlciBub24tYmxhY2tsaXN0ZWQgY2F0ZWdvcnksIGl0J3MgY29uc2lkZXJlZFxuXHRcdFx0Ly8gYSBkaXNhbWJpZ3VhdGlvbiBjYXRlZ29yeSBpbnN0ZWFkLlx0XHRcdCdob3RjYXQtcmVkaXJfY2F0ZWdvcnknOiAn5bey6YeN5a6a5ZCR55qE5YiG57G7Jyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtc2VwYXJhdG9yJzogJzsgJyxcblx0XHRcdC8vICQxIGlzIHJlcGxhY2VkIGJ5IGEgbnVtYmVyLiBJZiB5b3VyIGxhbmd1YWdlIGhhcyBzZXZlcmFsIHBsdXJhbCBmb3JtcyAoYy5mLiBbWzplbndpa2k6RHVhbCAoZ3JhbW1hdGljYWwgZm9ybSldXSksXG5cdFx0XHQvLyB5b3UgY2FuIHNldCB0aGlzIHRvIGFuIGFycmF5IG9mIHN0cmluZ3Mgc3VpdGFibGUgZm9yIHBhc3NpbmcgdG8gbXcubGFuZ3VhZ2UuY29uZmlnUGx1cmFsKCkuXG5cdFx0XHQvLyBJZiB0aGF0IGZ1bmN0aW9uIGRvZXNuJ3QgZXhpc3QsIEhvdENhdCB3aWxsIHNpbXBseSBmYWxsIGJhY2sgdG8gdXNpbmcgdGhlIGxhc3Rcblx0XHRcdC8vIGVudHJ5IGluIHRoZSBhcnJheS5cblx0XHRcdC8vIERlZmF1bHRzIHRvICdbWycgKyBjYXRlZ29yeV9jYW5vbmljYWwgKyAnOiQxXV0nLiBDYW4gYmUgb3ZlcnJpZGRlbiBpZiBpbiB0aGUgc2hvcnQgZWRpdCBzdW1tYXJpZXNcblx0XHRcdC8vIG5vdCB0aGUgc3RhbmRhcmQgY2F0ZWdvcnkgbmFtZSBzaG91bGQgYmUgdXNlZCBidXQsIHNheSwgYSBzaG9ydGVyIG5hbWVzcGFjZSBhbGlhcy4gJDEgaXMgcmVwbGFjZWRcblx0XHRcdC8vIGJ5IGEgY2F0ZWdvcnkgbmFtZS5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJzogJyQxJyxcblx0XHRcdC8vIEJ1dHRvbiB0ZXh0LiBMb2NhbGl6ZSB0byB3Z0NvbnRlbnRMYW5ndWFnZSBoZXJlOyBsb2NhbGl6ZSB0byB3Z1VzZXJMYW5ndWFnZSBpbiBhIHN1YnBhZ2UsXG5cdFx0XHQvLyBzZWUgbG9jYWxpemF0aW9uIGhvb2sgYmVsb3cuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNvbW1pdCc6ICfkv53lrZgnLFxuXHRcdFx0Ly8gQnV0dG9uIHRleHQuIExvY2FsaXplIHRvIHdnQ29udGVudExhbmd1YWdlIGhlcmU7IGxvY2FsaXplIHRvIHdnVXNlckxhbmd1YWdlIGluIGEgc3VicGFnZSxcblx0XHRcdC8vIHNlZSBsb2NhbGl6YXRpb24gaG9vayBiZWxvdy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtb2snOiAn56Gu5a6aJyxcblx0XHRcdC8vIEJ1dHRvbiB0ZXh0LiBMb2NhbGl6ZSB0byB3Z0NvbnRlbnRMYW5ndWFnZSBoZXJlOyBsb2NhbGl6ZSB0byB3Z1VzZXJMYW5ndWFnZSBpbiBhIHN1YnBhZ2UsXG5cdFx0XHQvLyBzZWUgbG9jYWxpemF0aW9uIGhvb2sgYmVsb3cuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhbmNlbCc6ICflj5bmtognLFxuXHRcdFx0Ly8gTG9jYWxpemUgdG8gd2dDb250ZW50TGFuZ3VhZ2UgaGVyZTsgbG9jYWxpemUgdG8gd2dVc2VyTGFuZ3VhZ2UgaW4gYSBzdWJwYWdlLFxuXHRcdFx0Ly8gc2VlIGxvY2FsaXphdGlvbiBob29rIGJlbG93LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1tdWx0aV9lcnJvcic6XG5cdFx0XHRcdCfml6Dms5Xku47mnI3liqHlmajlj5blvpfpobXpnaLmloflrZfjgILlm6DmraTvvIzmgqjnmoTliIbnsbvmm7TmlLnml6Dms5Xkv53lrZjjgILmiJHku6zkuLrmraTkuI3kvr/ooajnpLrmirHmrYnjgIInLFxuXHRcdFx0Ly8gUGx1cmFsIG9mIGNhdGVnb3J5X2Nhbm9uaWNhbC5cblx0XHRcdCdob3RjYXQtY2F0ZWdvcmllcyc6ICfliIbnsbsnLFxuXHRcdFx0Ly8gTmFtZXMgZm9yIHRoZSBzZWFyY2ggZW5naW5lc1xuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtc2VhcmNoaW5kZXgnOiAn5pCc57Si57Si5byVJyxcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLXBhZ2VsaXN0JzogJ+mhtemdouWIl+ihqCcsXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1jb21iaW5lZCc6ICflkIjlubbmkJzntKInLFxuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtc3ViY2F0JzogJ+WtkOWIhuexuycsXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1wYXJlbnRjYXQnOiAn5LiK5bGC5YiG57G7Jyxcblx0XHRcdC8vIFRoZSB0b29sdGlwcyBmb3IgdGhlIGFib3ZlIGxpbmtzXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLWNoYW5nZSc6ICfkv67mlLknLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1yZW1vdmUnOiAn56e76ZmkJyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtYWRkJzogJ+WinuWKoOS4gOS4quaWsOWIhuexuycsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLXJlc3RvcmUnOiAn5pKk6ZSA5pu05pS5Jyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtdW5kbyc6ICfmkqTplIDmm7TmlLknLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1kb3duJzogJ+aJk+W8gOS7peS/ruaUueW5tuaYvuekuuWtkOWIhuexuycsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLXVwJzogJ+aJk+W8gOS7peS/ruaUueW5tuaYvuekuuS4iuWxguWIhuexuycsXG5cdFx0XHQvLyBUb29sdGlwIGZvciB0aGUgXCJlbnRlciBtdWx0aS1tb2RlXCIgbGlua1xuXHRcdFx0J2hvdGNhdC1tdWx0aV90b29sdGlwJzogJ+S/ruaUueWkmuS4quWIhuexuycsXG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7aG90Q2F0TWVzc2FnZXN9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUEsNkZBQUFBLFNBQUE7QUFBQTtBQUNBLFFBQUksUUFBUSxTQUFVLElBQUk7QUFDeEIsYUFBTyxNQUFNLEdBQUcsU0FBUyxRQUFRO0FBQUEsSUFDbkM7QUFHQSxJQUFBQSxRQUFPO0FBQUEsSUFFTCxNQUFNLE9BQU8sY0FBYyxZQUFZLFVBQVUsS0FDakQsTUFBTSxPQUFPLFVBQVUsWUFBWSxNQUFNO0FBQUEsSUFFekMsTUFBTSxPQUFPLFFBQVEsWUFBWSxJQUFJLEtBQ3JDLE1BQU0sT0FBTyxVQUFVLFlBQVksTUFBTSxLQUN6QyxNQUFNLE9BQU8sV0FBUSxZQUFZLE9BQUk7QUFBQSxJQUVwQywyQkFBWTtBQUFFLGFBQU87QUFBQSxJQUFNLEVBQUcsS0FBSyxTQUFTLGFBQWEsRUFBRTtBQUFBO0FBQUE7OztBQ2Y5RDtBQUFBLHVGQUFBQyxTQUFBO0FBQUE7QUFDQSxJQUFBQSxRQUFPLFVBQVUsU0FBVSxNQUFNO0FBQy9CLFVBQUk7QUFDRixlQUFPLENBQUMsQ0FBQyxLQUFLO0FBQUEsTUFDaEIsU0FBUyxPQUFPO0FBQ2QsZUFBTztBQUFBLE1BQ1Q7QUFBQSxJQUNGO0FBQUE7QUFBQTs7O0FDUEE7QUFBQSw2RkFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxRQUFRO0FBR1osSUFBQUEsUUFBTyxVQUFVLENBQUMsTUFBTSxXQUFZO0FBRWxDLGFBQU8sT0FBTyxlQUFlLENBQUMsR0FBRyxHQUFHLEVBQUUsS0FBSyxXQUFZO0FBQUUsZUFBTztBQUFBLE1BQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNO0FBQUEsSUFDakYsQ0FBQztBQUFBO0FBQUE7OztBQ1BEO0FBQUEsc0dBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksUUFBUTtBQUVaLElBQUFBLFFBQU8sVUFBVSxDQUFDLE1BQU0sV0FBWTtBQUVsQyxVQUFJLE9BQVEsV0FBWTtBQUFBLE1BQWMsRUFBRyxLQUFLO0FBRTlDLGFBQU8sT0FBTyxRQUFRLGNBQWMsS0FBSyxlQUFlLFdBQVc7QUFBQSxJQUNyRSxDQUFDO0FBQUE7QUFBQTs7O0FDUkQ7QUFBQSwrRkFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxjQUFjO0FBRWxCLFFBQUksT0FBTyxTQUFTLFVBQVU7QUFFOUIsSUFBQUEsUUFBTyxVQUFVLGNBQWMsS0FBSyxLQUFLLElBQUksSUFBSSxXQUFZO0FBQzNELGFBQU8sS0FBSyxNQUFNLE1BQU0sU0FBUztBQUFBLElBQ25DO0FBQUE7QUFBQTs7O0FDUEE7QUFBQTtBQUFBO0FBQ0EsUUFBSSx3QkFBd0IsQ0FBQyxFQUFFO0FBRS9CLFFBQUksMkJBQTJCLE9BQU87QUFHdEMsUUFBSSxjQUFjLDRCQUE0QixDQUFDLHNCQUFzQixLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztBQUlyRixZQUFRLElBQUksY0FBYyxTQUFTLHFCQUFxQixHQUFHO0FBQ3pELFVBQUksYUFBYSx5QkFBeUIsTUFBTSxDQUFDO0FBQ2pELGFBQU8sQ0FBQyxDQUFDLGNBQWMsV0FBVztBQUFBLElBQ3BDLElBQUk7QUFBQTtBQUFBOzs7QUNiSjtBQUFBLDRHQUFBQyxTQUFBO0FBQUE7QUFDQSxJQUFBQSxRQUFPLFVBQVUsU0FBVSxRQUFRLE9BQU87QUFDeEMsYUFBTztBQUFBLFFBQ0wsWUFBWSxFQUFFLFNBQVM7QUFBQSxRQUN2QixjQUFjLEVBQUUsU0FBUztBQUFBLFFBQ3pCLFVBQVUsRUFBRSxTQUFTO0FBQUEsUUFDckI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBO0FBQUE7OztBQ1JBO0FBQUEsdUdBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksY0FBYztBQUVsQixRQUFJLG9CQUFvQixTQUFTO0FBQ2pDLFFBQUksT0FBTyxrQkFBa0I7QUFFN0IsUUFBSSxzQkFBc0IsZUFBZSxrQkFBa0IsS0FBSyxLQUFLLE1BQU0sSUFBSTtBQUUvRSxJQUFBQSxRQUFPLFVBQVUsY0FBYyxzQkFBc0IsU0FBVSxJQUFJO0FBQ2pFLGFBQU8sV0FBWTtBQUNqQixlQUFPLEtBQUssTUFBTSxJQUFJLFNBQVM7QUFBQSxNQUNqQztBQUFBLElBQ0Y7QUFBQTtBQUFBOzs7QUNaQTtBQUFBLDZGQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLGNBQWM7QUFFbEIsUUFBSSxXQUFXLFlBQVksQ0FBQyxFQUFFLFFBQVE7QUFDdEMsUUFBSSxjQUFjLFlBQVksR0FBRyxLQUFLO0FBRXRDLElBQUFBLFFBQU8sVUFBVSxTQUFVLElBQUk7QUFDN0IsYUFBTyxZQUFZLFNBQVMsRUFBRSxHQUFHLEdBQUcsRUFBRTtBQUFBLElBQ3hDO0FBQUE7QUFBQTs7O0FDUkE7QUFBQSxnR0FBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxjQUFjO0FBQ2xCLFFBQUksUUFBUTtBQUNaLFFBQUksVUFBVTtBQUVkLFFBQUksVUFBVTtBQUNkLFFBQUksUUFBUSxZQUFZLEdBQUcsS0FBSztBQUdoQyxJQUFBQSxRQUFPLFVBQVUsTUFBTSxXQUFZO0FBR2pDLGFBQU8sQ0FBQyxRQUFRLEdBQUcsRUFBRSxxQkFBcUIsQ0FBQztBQUFBLElBQzdDLENBQUMsSUFBSSxTQUFVLElBQUk7QUFDakIsYUFBTyxRQUFRLEVBQUUsTUFBTSxXQUFXLE1BQU0sSUFBSSxFQUFFLElBQUksUUFBUSxFQUFFO0FBQUEsSUFDOUQsSUFBSTtBQUFBO0FBQUE7OztBQ2ZKO0FBQUEsc0dBQUFDLFNBQUE7QUFBQTtBQUdBLElBQUFBLFFBQU8sVUFBVSxTQUFVLElBQUk7QUFDN0IsYUFBTyxPQUFPLFFBQVEsT0FBTztBQUFBLElBQy9CO0FBQUE7QUFBQTs7O0FDTEE7QUFBQSwwR0FBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxvQkFBb0I7QUFFeEIsUUFBSSxhQUFhO0FBSWpCLElBQUFBLFFBQU8sVUFBVSxTQUFVLElBQUk7QUFDN0IsVUFBSSxrQkFBa0IsRUFBRSxFQUFHLE9BQU0sSUFBSSxXQUFXLDBCQUEwQixFQUFFO0FBQzVFLGFBQU87QUFBQSxJQUNUO0FBQUE7QUFBQTs7O0FDVkE7QUFBQSxtR0FBQUMsU0FBQTtBQUFBO0FBRUEsUUFBSSxnQkFBZ0I7QUFDcEIsUUFBSSx5QkFBeUI7QUFFN0IsSUFBQUEsUUFBTyxVQUFVLFNBQVUsSUFBSTtBQUM3QixhQUFPLGNBQWMsdUJBQXVCLEVBQUUsQ0FBQztBQUFBLElBQ2pEO0FBQUE7QUFBQTs7O0FDUEE7QUFBQSw2RkFBQUMsU0FBQTtBQUFBO0FBRUEsUUFBSSxjQUFjLE9BQU8sWUFBWSxZQUFZLFNBQVM7QUFLMUQsSUFBQUEsUUFBTyxVQUFVLE9BQU8sZUFBZSxlQUFlLGdCQUFnQixTQUFZLFNBQVUsVUFBVTtBQUNwRyxhQUFPLE9BQU8sWUFBWSxjQUFjLGFBQWE7QUFBQSxJQUN2RCxJQUFJLFNBQVUsVUFBVTtBQUN0QixhQUFPLE9BQU8sWUFBWTtBQUFBLElBQzVCO0FBQUE7QUFBQTs7O0FDWEE7QUFBQSwyRkFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxhQUFhO0FBRWpCLElBQUFBLFFBQU8sVUFBVSxTQUFVLElBQUk7QUFDN0IsYUFBTyxPQUFPLE1BQU0sV0FBVyxPQUFPLE9BQU8sV0FBVyxFQUFFO0FBQUEsSUFDNUQ7QUFBQTtBQUFBOzs7QUNMQTtBQUFBLDhGQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJQyxjQUFhO0FBQ2pCLFFBQUksYUFBYTtBQUVqQixRQUFJLFlBQVksU0FBVSxVQUFVO0FBQ2xDLGFBQU8sV0FBVyxRQUFRLElBQUksV0FBVztBQUFBLElBQzNDO0FBRUEsSUFBQUQsUUFBTyxVQUFVLFNBQVUsV0FBVyxRQUFRO0FBQzVDLGFBQU8sVUFBVSxTQUFTLElBQUksVUFBVUMsWUFBVyxTQUFTLENBQUMsSUFBSUEsWUFBVyxTQUFTLEtBQUtBLFlBQVcsU0FBUyxFQUFFLE1BQU07QUFBQSxJQUN4SDtBQUFBO0FBQUE7OztBQ1ZBO0FBQUEsd0dBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksY0FBYztBQUVsQixJQUFBQSxRQUFPLFVBQVUsWUFBWSxDQUFDLEVBQUUsYUFBYTtBQUFBO0FBQUE7OztBQ0g3QztBQUFBLHdHQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJQyxjQUFhO0FBRWpCLFFBQUlDLGFBQVlELFlBQVc7QUFDM0IsUUFBSSxZQUFZQyxjQUFhQSxXQUFVO0FBRXZDLElBQUFGLFFBQU8sVUFBVSxZQUFZLE9BQU8sU0FBUyxJQUFJO0FBQUE7QUFBQTs7O0FDTmpEO0FBQUEsd0dBQUFHLFNBQUE7QUFBQTtBQUNBLFFBQUlDLGNBQWE7QUFDakIsUUFBSSxZQUFZO0FBRWhCLFFBQUksVUFBVUEsWUFBVztBQUN6QixRQUFJLE9BQU9BLFlBQVc7QUFDdEIsUUFBSSxXQUFXLFdBQVcsUUFBUSxZQUFZLFFBQVEsS0FBSztBQUMzRCxRQUFJLEtBQUssWUFBWSxTQUFTO0FBQzlCLFFBQUk7QUFBSixRQUFXO0FBRVgsUUFBSSxJQUFJO0FBQ04sY0FBUSxHQUFHLE1BQU0sR0FBRztBQUdwQixnQkFBVSxNQUFNLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQztBQUFBLElBQ25FO0FBSUEsUUFBSSxDQUFDLFdBQVcsV0FBVztBQUN6QixjQUFRLFVBQVUsTUFBTSxhQUFhO0FBQ3JDLFVBQUksQ0FBQyxTQUFTLE1BQU0sQ0FBQyxLQUFLLElBQUk7QUFDNUIsZ0JBQVEsVUFBVSxNQUFNLGVBQWU7QUFDdkMsWUFBSSxNQUFPLFdBQVUsQ0FBQyxNQUFNLENBQUM7QUFBQSxNQUMvQjtBQUFBLElBQ0Y7QUFFQSxJQUFBRCxRQUFPLFVBQVU7QUFBQTtBQUFBOzs7QUMzQmpCO0FBQUEsOEdBQUFFLFNBQUE7QUFBQTtBQUVBLFFBQUksYUFBYTtBQUNqQixRQUFJLFFBQVE7QUFDWixRQUFJQyxjQUFhO0FBRWpCLFFBQUksVUFBVUEsWUFBVztBQUd6QixJQUFBRCxRQUFPLFVBQVUsQ0FBQyxDQUFDLE9BQU8seUJBQXlCLENBQUMsTUFBTSxXQUFZO0FBQ3BFLFVBQUksU0FBUyxPQUFPLGtCQUFrQjtBQUt0QyxhQUFPLENBQUMsUUFBUSxNQUFNLEtBQUssRUFBRSxPQUFPLE1BQU0sYUFBYTtBQUFBLE1BRXJELENBQUMsT0FBTyxRQUFRLGNBQWMsYUFBYTtBQUFBLElBQy9DLENBQUM7QUFBQTtBQUFBOzs7QUNsQkQ7QUFBQSxtR0FBQUUsU0FBQTtBQUFBO0FBRUEsUUFBSSxnQkFBZ0I7QUFFcEIsSUFBQUEsUUFBTyxVQUFVLGlCQUNmLENBQUMsT0FBTyxRQUNSLE9BQU8sT0FBTyxZQUFZO0FBQUE7QUFBQTs7O0FDTjVCO0FBQUEsMkZBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksYUFBYTtBQUNqQixRQUFJLGFBQWE7QUFDakIsUUFBSSxnQkFBZ0I7QUFDcEIsUUFBSSxvQkFBb0I7QUFFeEIsUUFBSSxVQUFVO0FBRWQsSUFBQUEsUUFBTyxVQUFVLG9CQUFvQixTQUFVLElBQUk7QUFDakQsYUFBTyxPQUFPLE1BQU07QUFBQSxJQUN0QixJQUFJLFNBQVUsSUFBSTtBQUNoQixVQUFJLFVBQVUsV0FBVyxRQUFRO0FBQ2pDLGFBQU8sV0FBVyxPQUFPLEtBQUssY0FBYyxRQUFRLFdBQVcsUUFBUSxFQUFFLENBQUM7QUFBQSxJQUM1RTtBQUFBO0FBQUE7OztBQ2JBO0FBQUEsK0ZBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksVUFBVTtBQUVkLElBQUFBLFFBQU8sVUFBVSxTQUFVLFVBQVU7QUFDbkMsVUFBSTtBQUNGLGVBQU8sUUFBUSxRQUFRO0FBQUEsTUFDekIsU0FBUyxPQUFPO0FBQ2QsZUFBTztBQUFBLE1BQ1Q7QUFBQSxJQUNGO0FBQUE7QUFBQTs7O0FDVEE7QUFBQSw0RkFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxhQUFhO0FBQ2pCLFFBQUksY0FBYztBQUVsQixRQUFJLGFBQWE7QUFHakIsSUFBQUEsUUFBTyxVQUFVLFNBQVUsVUFBVTtBQUNuQyxVQUFJLFdBQVcsUUFBUSxFQUFHLFFBQU87QUFDakMsWUFBTSxJQUFJLFdBQVcsWUFBWSxRQUFRLElBQUksb0JBQW9CO0FBQUEsSUFDbkU7QUFBQTtBQUFBOzs7QUNWQTtBQUFBLDRGQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLFlBQVk7QUFDaEIsUUFBSSxvQkFBb0I7QUFJeEIsSUFBQUEsUUFBTyxVQUFVLFNBQVUsR0FBRyxHQUFHO0FBQy9CLFVBQUksT0FBTyxFQUFFLENBQUM7QUFDZCxhQUFPLGtCQUFrQixJQUFJLElBQUksU0FBWSxVQUFVLElBQUk7QUFBQSxJQUM3RDtBQUFBO0FBQUE7OztBQ1RBO0FBQUEsdUdBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksT0FBTztBQUNYLFFBQUksYUFBYTtBQUNqQixRQUFJLFdBQVc7QUFFZixRQUFJLGFBQWE7QUFJakIsSUFBQUEsUUFBTyxVQUFVLFNBQVUsT0FBTyxNQUFNO0FBQ3RDLFVBQUksSUFBSTtBQUNSLFVBQUksU0FBUyxZQUFZLFdBQVcsS0FBSyxNQUFNLFFBQVEsS0FBSyxDQUFDLFNBQVMsTUFBTSxLQUFLLElBQUksS0FBSyxDQUFDLEVBQUcsUUFBTztBQUNyRyxVQUFJLFdBQVcsS0FBSyxNQUFNLE9BQU8sS0FBSyxDQUFDLFNBQVMsTUFBTSxLQUFLLElBQUksS0FBSyxDQUFDLEVBQUcsUUFBTztBQUMvRSxVQUFJLFNBQVMsWUFBWSxXQUFXLEtBQUssTUFBTSxRQUFRLEtBQUssQ0FBQyxTQUFTLE1BQU0sS0FBSyxJQUFJLEtBQUssQ0FBQyxFQUFHLFFBQU87QUFDckcsWUFBTSxJQUFJLFdBQVcseUNBQXlDO0FBQUEsSUFDaEU7QUFBQTtBQUFBOzs7QUNmQTtBQUFBLHlGQUFBQyxTQUFBO0FBQUE7QUFDQSxJQUFBQSxRQUFPLFVBQVU7QUFBQTtBQUFBOzs7QUNEakI7QUFBQSx3R0FBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSUMsY0FBYTtBQUdqQixRQUFJLGlCQUFpQixPQUFPO0FBRTVCLElBQUFELFFBQU8sVUFBVSxTQUFVLEtBQUssT0FBTztBQUNyQyxVQUFJO0FBQ0YsdUJBQWVDLGFBQVksS0FBSyxFQUFFLE9BQWMsY0FBYyxNQUFNLFVBQVUsS0FBSyxDQUFDO0FBQUEsTUFDdEYsU0FBUyxPQUFPO0FBQ2QsUUFBQUEsWUFBVyxHQUFHLElBQUk7QUFBQSxNQUNwQjtBQUFFLGFBQU87QUFBQSxJQUNYO0FBQUE7QUFBQTs7O0FDWkE7QUFBQSw4RkFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxVQUFVO0FBQ2QsUUFBSUMsY0FBYTtBQUNqQixRQUFJLHVCQUF1QjtBQUUzQixRQUFJLFNBQVM7QUFDYixRQUFJLFFBQVFELFFBQU8sVUFBVUMsWUFBVyxNQUFNLEtBQUsscUJBQXFCLFFBQVEsQ0FBQyxDQUFDO0FBRWxGLEtBQUMsTUFBTSxhQUFhLE1BQU0sV0FBVyxDQUFDLElBQUksS0FBSztBQUFBLE1BQzdDLFNBQVM7QUFBQSxNQUNULE1BQU0sVUFBVSxTQUFTO0FBQUEsTUFDekIsV0FBVztBQUFBLE1BQ1gsU0FBUztBQUFBLE1BQ1QsUUFBUTtBQUFBLElBQ1YsQ0FBQztBQUFBO0FBQUE7OztBQ2REO0FBQUEsd0ZBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksUUFBUTtBQUVaLElBQUFBLFFBQU8sVUFBVSxTQUFVLEtBQUssT0FBTztBQUNyQyxhQUFPLE1BQU0sR0FBRyxNQUFNLE1BQU0sR0FBRyxJQUFJLFNBQVMsQ0FBQztBQUFBLElBQy9DO0FBQUE7QUFBQTs7O0FDTEE7QUFBQSwyRkFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSx5QkFBeUI7QUFFN0IsUUFBSSxVQUFVO0FBSWQsSUFBQUEsUUFBTyxVQUFVLFNBQVUsVUFBVTtBQUNuQyxhQUFPLFFBQVEsdUJBQXVCLFFBQVEsQ0FBQztBQUFBLElBQ2pEO0FBQUE7QUFBQTs7O0FDVEE7QUFBQSxrR0FBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxjQUFjO0FBQ2xCLFFBQUksV0FBVztBQUVmLFFBQUksaUJBQWlCLFlBQVksQ0FBQyxFQUFFLGNBQWM7QUFLbEQsSUFBQUEsUUFBTyxVQUFVLE9BQU8sVUFBVSxTQUFTLE9BQU8sSUFBSSxLQUFLO0FBQ3pELGFBQU8sZUFBZSxTQUFTLEVBQUUsR0FBRyxHQUFHO0FBQUEsSUFDekM7QUFBQTtBQUFBOzs7QUNYQTtBQUFBLHFGQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLGNBQWM7QUFFbEIsUUFBSSxLQUFLO0FBQ1QsUUFBSSxVQUFVLEtBQUssT0FBTztBQUMxQixRQUFJLFdBQVcsWUFBWSxHQUFJLFFBQVE7QUFFdkMsSUFBQUEsUUFBTyxVQUFVLFNBQVUsS0FBSztBQUM5QixhQUFPLGFBQWEsUUFBUSxTQUFZLEtBQUssT0FBTyxPQUFPLFNBQVMsRUFBRSxLQUFLLFNBQVMsRUFBRTtBQUFBLElBQ3hGO0FBQUE7QUFBQTs7O0FDVEE7QUFBQSxtR0FBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSUMsY0FBYTtBQUNqQixRQUFJLFNBQVM7QUFDYixRQUFJLFNBQVM7QUFDYixRQUFJLE1BQU07QUFDVixRQUFJLGdCQUFnQjtBQUNwQixRQUFJLG9CQUFvQjtBQUV4QixRQUFJQyxVQUFTRCxZQUFXO0FBQ3hCLFFBQUksd0JBQXdCLE9BQU8sS0FBSztBQUN4QyxRQUFJLHdCQUF3QixvQkFBb0JDLFFBQU8sS0FBSyxLQUFLQSxVQUFTQSxXQUFVQSxRQUFPLGlCQUFpQjtBQUU1RyxJQUFBRixRQUFPLFVBQVUsU0FBVSxNQUFNO0FBQy9CLFVBQUksQ0FBQyxPQUFPLHVCQUF1QixJQUFJLEdBQUc7QUFDeEMsOEJBQXNCLElBQUksSUFBSSxpQkFBaUIsT0FBT0UsU0FBUSxJQUFJLElBQzlEQSxRQUFPLElBQUksSUFDWCxzQkFBc0IsWUFBWSxJQUFJO0FBQUEsTUFDNUM7QUFBRSxhQUFPLHNCQUFzQixJQUFJO0FBQUEsSUFDckM7QUFBQTtBQUFBOzs7QUNsQkE7QUFBQSw4RkFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxPQUFPO0FBQ1gsUUFBSSxXQUFXO0FBQ2YsUUFBSSxXQUFXO0FBQ2YsUUFBSSxZQUFZO0FBQ2hCLFFBQUksc0JBQXNCO0FBQzFCLFFBQUksa0JBQWtCO0FBRXRCLFFBQUksYUFBYTtBQUNqQixRQUFJLGVBQWUsZ0JBQWdCLGFBQWE7QUFJaEQsSUFBQUEsUUFBTyxVQUFVLFNBQVUsT0FBTyxNQUFNO0FBQ3RDLFVBQUksQ0FBQyxTQUFTLEtBQUssS0FBSyxTQUFTLEtBQUssRUFBRyxRQUFPO0FBQ2hELFVBQUksZUFBZSxVQUFVLE9BQU8sWUFBWTtBQUNoRCxVQUFJO0FBQ0osVUFBSSxjQUFjO0FBQ2hCLFlBQUksU0FBUyxPQUFXLFFBQU87QUFDL0IsaUJBQVMsS0FBSyxjQUFjLE9BQU8sSUFBSTtBQUN2QyxZQUFJLENBQUMsU0FBUyxNQUFNLEtBQUssU0FBUyxNQUFNLEVBQUcsUUFBTztBQUNsRCxjQUFNLElBQUksV0FBVyx5Q0FBeUM7QUFBQSxNQUNoRTtBQUNBLFVBQUksU0FBUyxPQUFXLFFBQU87QUFDL0IsYUFBTyxvQkFBb0IsT0FBTyxJQUFJO0FBQUEsSUFDeEM7QUFBQTtBQUFBOzs7QUN6QkE7QUFBQSxpR0FBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxjQUFjO0FBQ2xCLFFBQUksV0FBVztBQUlmLElBQUFBLFFBQU8sVUFBVSxTQUFVLFVBQVU7QUFDbkMsVUFBSSxNQUFNLFlBQVksVUFBVSxRQUFRO0FBQ3hDLGFBQU8sU0FBUyxHQUFHLElBQUksTUFBTSxNQUFNO0FBQUEsSUFDckM7QUFBQTtBQUFBOzs7QUNUQTtBQUFBLHlHQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJQyxjQUFhO0FBQ2pCLFFBQUksV0FBVztBQUVmLFFBQUlDLFlBQVdELFlBQVc7QUFFMUIsUUFBSSxTQUFTLFNBQVNDLFNBQVEsS0FBSyxTQUFTQSxVQUFTLGFBQWE7QUFFbEUsSUFBQUYsUUFBTyxVQUFVLFNBQVUsSUFBSTtBQUM3QixhQUFPLFNBQVNFLFVBQVMsY0FBYyxFQUFFLElBQUksQ0FBQztBQUFBLElBQ2hEO0FBQUE7QUFBQTs7O0FDVkE7QUFBQSxnR0FBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxjQUFjO0FBQ2xCLFFBQUksUUFBUTtBQUNaLFFBQUksZ0JBQWdCO0FBR3BCLElBQUFBLFFBQU8sVUFBVSxDQUFDLGVBQWUsQ0FBQyxNQUFNLFdBQVk7QUFFbEQsYUFBTyxPQUFPLGVBQWUsY0FBYyxLQUFLLEdBQUcsS0FBSztBQUFBLFFBQ3RELEtBQUssV0FBWTtBQUFFLGlCQUFPO0FBQUEsUUFBRztBQUFBLE1BQy9CLENBQUMsRUFBRSxNQUFNO0FBQUEsSUFDWCxDQUFDO0FBQUE7QUFBQTs7O0FDWEQ7QUFBQTtBQUFBO0FBQ0EsUUFBSSxjQUFjO0FBQ2xCLFFBQUksT0FBTztBQUNYLFFBQUksNkJBQTZCO0FBQ2pDLFFBQUksMkJBQTJCO0FBQy9CLFFBQUksa0JBQWtCO0FBQ3RCLFFBQUksZ0JBQWdCO0FBQ3BCLFFBQUksU0FBUztBQUNiLFFBQUksaUJBQWlCO0FBR3JCLFFBQUksNEJBQTRCLE9BQU87QUFJdkMsWUFBUSxJQUFJLGNBQWMsNEJBQTRCLFNBQVMseUJBQXlCLEdBQUcsR0FBRztBQUM1RixVQUFJLGdCQUFnQixDQUFDO0FBQ3JCLFVBQUksY0FBYyxDQUFDO0FBQ25CLFVBQUksZUFBZ0IsS0FBSTtBQUN0QixlQUFPLDBCQUEwQixHQUFHLENBQUM7QUFBQSxNQUN2QyxTQUFTLE9BQU87QUFBQSxNQUFjO0FBQzlCLFVBQUksT0FBTyxHQUFHLENBQUMsRUFBRyxRQUFPLHlCQUF5QixDQUFDLEtBQUssMkJBQTJCLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFBQSxJQUNuRztBQUFBO0FBQUE7OztBQ3RCQTtBQUFBLHlHQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLGNBQWM7QUFDbEIsUUFBSSxRQUFRO0FBSVosSUFBQUEsUUFBTyxVQUFVLGVBQWUsTUFBTSxXQUFZO0FBRWhELGFBQU8sT0FBTyxlQUFlLFdBQVk7QUFBQSxNQUFjLEdBQUcsYUFBYTtBQUFBLFFBQ3JFLE9BQU87QUFBQSxRQUNQLFVBQVU7QUFBQSxNQUNaLENBQUMsRUFBRSxjQUFjO0FBQUEsSUFDbkIsQ0FBQztBQUFBO0FBQUE7OztBQ1pEO0FBQUEsMkZBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksV0FBVztBQUVmLFFBQUksVUFBVTtBQUNkLFFBQUksYUFBYTtBQUdqQixJQUFBQSxRQUFPLFVBQVUsU0FBVSxVQUFVO0FBQ25DLFVBQUksU0FBUyxRQUFRLEVBQUcsUUFBTztBQUMvQixZQUFNLElBQUksV0FBVyxRQUFRLFFBQVEsSUFBSSxtQkFBbUI7QUFBQSxJQUM5RDtBQUFBO0FBQUE7OztBQ1ZBO0FBQUE7QUFBQTtBQUNBLFFBQUksY0FBYztBQUNsQixRQUFJLGlCQUFpQjtBQUNyQixRQUFJLDBCQUEwQjtBQUM5QixRQUFJLFdBQVc7QUFDZixRQUFJLGdCQUFnQjtBQUVwQixRQUFJLGFBQWE7QUFFakIsUUFBSSxrQkFBa0IsT0FBTztBQUU3QixRQUFJLDRCQUE0QixPQUFPO0FBQ3ZDLFFBQUksYUFBYTtBQUNqQixRQUFJLGVBQWU7QUFDbkIsUUFBSSxXQUFXO0FBSWYsWUFBUSxJQUFJLGNBQWMsMEJBQTBCLFNBQVMsZUFBZSxHQUFHLEdBQUcsWUFBWTtBQUM1RixlQUFTLENBQUM7QUFDVixVQUFJLGNBQWMsQ0FBQztBQUNuQixlQUFTLFVBQVU7QUFDbkIsVUFBSSxPQUFPLE1BQU0sY0FBYyxNQUFNLGVBQWUsV0FBVyxjQUFjLFlBQVksY0FBYyxDQUFDLFdBQVcsUUFBUSxHQUFHO0FBQzVILFlBQUksVUFBVSwwQkFBMEIsR0FBRyxDQUFDO0FBQzVDLFlBQUksV0FBVyxRQUFRLFFBQVEsR0FBRztBQUNoQyxZQUFFLENBQUMsSUFBSSxXQUFXO0FBQ2xCLHVCQUFhO0FBQUEsWUFDWCxjQUFjLGdCQUFnQixhQUFhLFdBQVcsWUFBWSxJQUFJLFFBQVEsWUFBWTtBQUFBLFlBQzFGLFlBQVksY0FBYyxhQUFhLFdBQVcsVUFBVSxJQUFJLFFBQVEsVUFBVTtBQUFBLFlBQ2xGLFVBQVU7QUFBQSxVQUNaO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBRSxhQUFPLGdCQUFnQixHQUFHLEdBQUcsVUFBVTtBQUFBLElBQzNDLElBQUksa0JBQWtCLFNBQVMsZUFBZSxHQUFHLEdBQUcsWUFBWTtBQUM5RCxlQUFTLENBQUM7QUFDVixVQUFJLGNBQWMsQ0FBQztBQUNuQixlQUFTLFVBQVU7QUFDbkIsVUFBSSxlQUFnQixLQUFJO0FBQ3RCLGVBQU8sZ0JBQWdCLEdBQUcsR0FBRyxVQUFVO0FBQUEsTUFDekMsU0FBUyxPQUFPO0FBQUEsTUFBYztBQUM5QixVQUFJLFNBQVMsY0FBYyxTQUFTLFdBQVksT0FBTSxJQUFJLFdBQVcseUJBQXlCO0FBQzlGLFVBQUksV0FBVyxXQUFZLEdBQUUsQ0FBQyxJQUFJLFdBQVc7QUFDN0MsYUFBTztBQUFBLElBQ1Q7QUFBQTtBQUFBOzs7QUMzQ0E7QUFBQSxnSEFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxjQUFjO0FBQ2xCLFFBQUksdUJBQXVCO0FBQzNCLFFBQUksMkJBQTJCO0FBRS9CLElBQUFBLFFBQU8sVUFBVSxjQUFjLFNBQVUsUUFBUSxLQUFLLE9BQU87QUFDM0QsYUFBTyxxQkFBcUIsRUFBRSxRQUFRLEtBQUsseUJBQXlCLEdBQUcsS0FBSyxDQUFDO0FBQUEsSUFDL0UsSUFBSSxTQUFVLFFBQVEsS0FBSyxPQUFPO0FBQ2hDLGFBQU8sR0FBRyxJQUFJO0FBQ2QsYUFBTztBQUFBLElBQ1Q7QUFBQTtBQUFBOzs7QUNWQTtBQUFBLCtGQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLGNBQWM7QUFDbEIsUUFBSSxTQUFTO0FBRWIsUUFBSSxvQkFBb0IsU0FBUztBQUVqQyxRQUFJLGdCQUFnQixlQUFlLE9BQU87QUFFMUMsUUFBSSxTQUFTLE9BQU8sbUJBQW1CLE1BQU07QUFFN0MsUUFBSSxTQUFTLFVBQVcsU0FBUyxZQUFZO0FBQUEsSUFBYyxFQUFHLFNBQVM7QUFDdkUsUUFBSSxlQUFlLFdBQVcsQ0FBQyxlQUFnQixlQUFlLGNBQWMsbUJBQW1CLE1BQU0sRUFBRTtBQUV2RyxJQUFBQSxRQUFPLFVBQVU7QUFBQSxNQUNmO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUE7QUFBQTs7O0FDakJBO0FBQUEsZ0dBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksY0FBYztBQUNsQixRQUFJLGFBQWE7QUFDakIsUUFBSSxRQUFRO0FBRVosUUFBSSxtQkFBbUIsWUFBWSxTQUFTLFFBQVE7QUFHcEQsUUFBSSxDQUFDLFdBQVcsTUFBTSxhQUFhLEdBQUc7QUFDcEMsWUFBTSxnQkFBZ0IsU0FBVSxJQUFJO0FBQ2xDLGVBQU8saUJBQWlCLEVBQUU7QUFBQSxNQUM1QjtBQUFBLElBQ0Y7QUFFQSxJQUFBQSxRQUFPLFVBQVUsTUFBTTtBQUFBO0FBQUE7OztBQ2R2QjtBQUFBLDBHQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJQyxjQUFhO0FBQ2pCLFFBQUksYUFBYTtBQUVqQixRQUFJLFVBQVVBLFlBQVc7QUFFekIsSUFBQUQsUUFBTyxVQUFVLFdBQVcsT0FBTyxLQUFLLGNBQWMsS0FBSyxPQUFPLE9BQU8sQ0FBQztBQUFBO0FBQUE7OztBQ04xRTtBQUFBLDRGQUFBRSxTQUFBO0FBQUE7QUFDQSxRQUFJLFNBQVM7QUFDYixRQUFJLE1BQU07QUFFVixRQUFJLE9BQU8sT0FBTyxNQUFNO0FBRXhCLElBQUFBLFFBQU8sVUFBVSxTQUFVLEtBQUs7QUFDOUIsYUFBTyxLQUFLLEdBQUcsTUFBTSxLQUFLLEdBQUcsSUFBSSxJQUFJLEdBQUc7QUFBQSxJQUMxQztBQUFBO0FBQUE7OztBQ1JBO0FBQUEsNkZBQUFDLFNBQUE7QUFBQTtBQUNBLElBQUFBLFFBQU8sVUFBVSxDQUFDO0FBQUE7QUFBQTs7O0FDRGxCO0FBQUEsZ0dBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksa0JBQWtCO0FBQ3RCLFFBQUlDLGNBQWE7QUFDakIsUUFBSSxXQUFXO0FBQ2YsUUFBSSw4QkFBOEI7QUFDbEMsUUFBSSxTQUFTO0FBQ2IsUUFBSSxTQUFTO0FBQ2IsUUFBSSxZQUFZO0FBQ2hCLFFBQUksYUFBYTtBQUVqQixRQUFJLDZCQUE2QjtBQUNqQyxRQUFJQyxhQUFZRCxZQUFXO0FBQzNCLFFBQUksVUFBVUEsWUFBVztBQUN6QixRQUFJO0FBQUosUUFBUztBQUFULFFBQWM7QUFFZCxRQUFJLFVBQVUsU0FBVSxJQUFJO0FBQzFCLGFBQU8sSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQztBQUFBLElBQ3ZDO0FBRUEsUUFBSSxZQUFZLFNBQVUsTUFBTTtBQUM5QixhQUFPLFNBQVUsSUFBSTtBQUNuQixZQUFJO0FBQ0osWUFBSSxDQUFDLFNBQVMsRUFBRSxNQUFNLFFBQVEsSUFBSSxFQUFFLEdBQUcsU0FBUyxNQUFNO0FBQ3BELGdCQUFNLElBQUlDLFdBQVUsNEJBQTRCLE9BQU8sV0FBVztBQUFBLFFBQ3BFO0FBQUUsZUFBTztBQUFBLE1BQ1g7QUFBQSxJQUNGO0FBRUEsUUFBSSxtQkFBbUIsT0FBTyxPQUFPO0FBQy9CLGNBQVEsT0FBTyxVQUFVLE9BQU8sUUFBUSxJQUFJLFFBQVE7QUFFeEQsWUFBTSxNQUFNLE1BQU07QUFDbEIsWUFBTSxNQUFNLE1BQU07QUFDbEIsWUFBTSxNQUFNLE1BQU07QUFFbEIsWUFBTSxTQUFVLElBQUksVUFBVTtBQUM1QixZQUFJLE1BQU0sSUFBSSxFQUFFLEVBQUcsT0FBTSxJQUFJQSxXQUFVLDBCQUEwQjtBQUNqRSxpQkFBUyxTQUFTO0FBQ2xCLGNBQU0sSUFBSSxJQUFJLFFBQVE7QUFDdEIsZUFBTztBQUFBLE1BQ1Q7QUFDQSxZQUFNLFNBQVUsSUFBSTtBQUNsQixlQUFPLE1BQU0sSUFBSSxFQUFFLEtBQUssQ0FBQztBQUFBLE1BQzNCO0FBQ0EsWUFBTSxTQUFVLElBQUk7QUFDbEIsZUFBTyxNQUFNLElBQUksRUFBRTtBQUFBLE1BQ3JCO0FBQUEsSUFDRixPQUFPO0FBQ0QsY0FBUSxVQUFVLE9BQU87QUFDN0IsaUJBQVcsS0FBSyxJQUFJO0FBQ3BCLFlBQU0sU0FBVSxJQUFJLFVBQVU7QUFDNUIsWUFBSSxPQUFPLElBQUksS0FBSyxFQUFHLE9BQU0sSUFBSUEsV0FBVSwwQkFBMEI7QUFDckUsaUJBQVMsU0FBUztBQUNsQixvQ0FBNEIsSUFBSSxPQUFPLFFBQVE7QUFDL0MsZUFBTztBQUFBLE1BQ1Q7QUFDQSxZQUFNLFNBQVUsSUFBSTtBQUNsQixlQUFPLE9BQU8sSUFBSSxLQUFLLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQztBQUFBLE1BQzFDO0FBQ0EsWUFBTSxTQUFVLElBQUk7QUFDbEIsZUFBTyxPQUFPLElBQUksS0FBSztBQUFBLE1BQ3pCO0FBQUEsSUFDRjtBQWpDTTtBQW1CQTtBQWdCTixJQUFBRixRQUFPLFVBQVU7QUFBQSxNQUNmO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQTtBQUFBOzs7QUN0RUE7QUFBQSwrRkFBQUcsU0FBQTtBQUFBO0FBQ0EsUUFBSSxjQUFjO0FBQ2xCLFFBQUksUUFBUTtBQUNaLFFBQUksYUFBYTtBQUNqQixRQUFJLFNBQVM7QUFDYixRQUFJLGNBQWM7QUFDbEIsUUFBSSw2QkFBNkIsd0JBQXNDO0FBQ3ZFLFFBQUksZ0JBQWdCO0FBQ3BCLFFBQUksc0JBQXNCO0FBRTFCLFFBQUksdUJBQXVCLG9CQUFvQjtBQUMvQyxRQUFJLG1CQUFtQixvQkFBb0I7QUFDM0MsUUFBSSxVQUFVO0FBRWQsUUFBSSxpQkFBaUIsT0FBTztBQUM1QixRQUFJLGNBQWMsWUFBWSxHQUFHLEtBQUs7QUFDdEMsUUFBSSxVQUFVLFlBQVksR0FBRyxPQUFPO0FBQ3BDLFFBQUksT0FBTyxZQUFZLENBQUMsRUFBRSxJQUFJO0FBRTlCLFFBQUksc0JBQXNCLGVBQWUsQ0FBQyxNQUFNLFdBQVk7QUFDMUQsYUFBTyxlQUFlLFdBQVk7QUFBQSxNQUFjLEdBQUcsVUFBVSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsV0FBVztBQUFBLElBQ3hGLENBQUM7QUFFRCxRQUFJLFdBQVcsT0FBTyxNQUFNLEVBQUUsTUFBTSxRQUFRO0FBRTVDLFFBQUksY0FBY0EsUUFBTyxVQUFVLFNBQVUsT0FBTyxNQUFNLFNBQVM7QUFDakUsVUFBSSxZQUFZLFFBQVEsSUFBSSxHQUFHLEdBQUcsQ0FBQyxNQUFNLFdBQVc7QUFDbEQsZUFBTyxNQUFNLFFBQVEsUUFBUSxJQUFJLEdBQUcseUJBQXlCLElBQUksSUFBSTtBQUFBLE1BQ3ZFO0FBQ0EsVUFBSSxXQUFXLFFBQVEsT0FBUSxRQUFPLFNBQVM7QUFDL0MsVUFBSSxXQUFXLFFBQVEsT0FBUSxRQUFPLFNBQVM7QUFDL0MsVUFBSSxDQUFDLE9BQU8sT0FBTyxNQUFNLEtBQU0sOEJBQThCLE1BQU0sU0FBUyxNQUFPO0FBQ2pGLFlBQUksWUFBYSxnQkFBZSxPQUFPLFFBQVEsRUFBRSxPQUFPLE1BQU0sY0FBYyxLQUFLLENBQUM7QUFBQSxZQUM3RSxPQUFNLE9BQU87QUFBQSxNQUNwQjtBQUNBLFVBQUksdUJBQXVCLFdBQVcsT0FBTyxTQUFTLE9BQU8sS0FBSyxNQUFNLFdBQVcsUUFBUSxPQUFPO0FBQ2hHLHVCQUFlLE9BQU8sVUFBVSxFQUFFLE9BQU8sUUFBUSxNQUFNLENBQUM7QUFBQSxNQUMxRDtBQUNBLFVBQUk7QUFDRixZQUFJLFdBQVcsT0FBTyxTQUFTLGFBQWEsS0FBSyxRQUFRLGFBQWE7QUFDcEUsY0FBSSxZQUFhLGdCQUFlLE9BQU8sYUFBYSxFQUFFLFVBQVUsTUFBTSxDQUFDO0FBQUEsUUFFekUsV0FBVyxNQUFNLFVBQVcsT0FBTSxZQUFZO0FBQUEsTUFDaEQsU0FBUyxPQUFPO0FBQUEsTUFBYztBQUM5QixVQUFJLFFBQVEscUJBQXFCLEtBQUs7QUFDdEMsVUFBSSxDQUFDLE9BQU8sT0FBTyxRQUFRLEdBQUc7QUFDNUIsY0FBTSxTQUFTLEtBQUssVUFBVSxPQUFPLFFBQVEsV0FBVyxPQUFPLEVBQUU7QUFBQSxNQUNuRTtBQUFFLGFBQU87QUFBQSxJQUNYO0FBSUEsYUFBUyxVQUFVLFdBQVcsWUFBWSxTQUFTLFdBQVc7QUFDNUQsYUFBTyxXQUFXLElBQUksS0FBSyxpQkFBaUIsSUFBSSxFQUFFLFVBQVUsY0FBYyxJQUFJO0FBQUEsSUFDaEYsR0FBRyxVQUFVO0FBQUE7QUFBQTs7O0FDdERiO0FBQUEsaUdBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksYUFBYTtBQUNqQixRQUFJLHVCQUF1QjtBQUMzQixRQUFJLGNBQWM7QUFDbEIsUUFBSSx1QkFBdUI7QUFFM0IsSUFBQUEsUUFBTyxVQUFVLFNBQVUsR0FBRyxLQUFLLE9BQU8sU0FBUztBQUNqRCxVQUFJLENBQUMsUUFBUyxXQUFVLENBQUM7QUFDekIsVUFBSSxTQUFTLFFBQVE7QUFDckIsVUFBSSxPQUFPLFFBQVEsU0FBUyxTQUFZLFFBQVEsT0FBTztBQUN2RCxVQUFJLFdBQVcsS0FBSyxFQUFHLGFBQVksT0FBTyxNQUFNLE9BQU87QUFDdkQsVUFBSSxRQUFRLFFBQVE7QUFDbEIsWUFBSSxPQUFRLEdBQUUsR0FBRyxJQUFJO0FBQUEsWUFDaEIsc0JBQXFCLEtBQUssS0FBSztBQUFBLE1BQ3RDLE9BQU87QUFDTCxZQUFJO0FBQ0YsY0FBSSxDQUFDLFFBQVEsT0FBUSxRQUFPLEVBQUUsR0FBRztBQUFBLG1CQUN4QixFQUFFLEdBQUcsRUFBRyxVQUFTO0FBQUEsUUFDNUIsU0FBUyxPQUFPO0FBQUEsUUFBYztBQUM5QixZQUFJLE9BQVEsR0FBRSxHQUFHLElBQUk7QUFBQSxZQUNoQixzQkFBcUIsRUFBRSxHQUFHLEtBQUs7QUFBQSxVQUNsQztBQUFBLFVBQ0EsWUFBWTtBQUFBLFVBQ1osY0FBYyxDQUFDLFFBQVE7QUFBQSxVQUN2QixVQUFVLENBQUMsUUFBUTtBQUFBLFFBQ3JCLENBQUM7QUFBQSxNQUNIO0FBQUUsYUFBTztBQUFBLElBQ1g7QUFBQTtBQUFBOzs7QUMzQkE7QUFBQSw0RkFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxPQUFPLEtBQUs7QUFDaEIsUUFBSSxRQUFRLEtBQUs7QUFLakIsSUFBQUEsUUFBTyxVQUFVLEtBQUssU0FBUyxTQUFTLE1BQU0sR0FBRztBQUMvQyxVQUFJLElBQUksQ0FBQztBQUNULGNBQVEsSUFBSSxJQUFJLFFBQVEsTUFBTSxDQUFDO0FBQUEsSUFDakM7QUFBQTtBQUFBOzs7QUNWQTtBQUFBLHdHQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLFFBQVE7QUFJWixJQUFBQSxRQUFPLFVBQVUsU0FBVSxVQUFVO0FBQ25DLFVBQUksU0FBUyxDQUFDO0FBRWQsYUFBTyxXQUFXLFVBQVUsV0FBVyxJQUFJLElBQUksTUFBTSxNQUFNO0FBQUEsSUFDN0Q7QUFBQTtBQUFBOzs7QUNUQTtBQUFBLG1HQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLHNCQUFzQjtBQUUxQixRQUFJLE1BQU0sS0FBSztBQUNmLFFBQUksTUFBTSxLQUFLO0FBS2YsSUFBQUEsUUFBTyxVQUFVLFNBQVUsT0FBTyxRQUFRO0FBQ3hDLFVBQUksVUFBVSxvQkFBb0IsS0FBSztBQUN2QyxhQUFPLFVBQVUsSUFBSSxJQUFJLFVBQVUsUUFBUSxDQUFDLElBQUksSUFBSSxTQUFTLE1BQU07QUFBQSxJQUNyRTtBQUFBO0FBQUE7OztBQ1pBO0FBQUEsMkZBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksc0JBQXNCO0FBRTFCLFFBQUksTUFBTSxLQUFLO0FBSWYsSUFBQUEsUUFBTyxVQUFVLFNBQVUsVUFBVTtBQUNuQyxVQUFJLE1BQU0sb0JBQW9CLFFBQVE7QUFDdEMsYUFBTyxNQUFNLElBQUksSUFBSSxLQUFLLGdCQUFnQixJQUFJO0FBQUEsSUFDaEQ7QUFBQTtBQUFBOzs7QUNWQTtBQUFBLHNHQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLFdBQVc7QUFJZixJQUFBQSxRQUFPLFVBQVUsU0FBVSxLQUFLO0FBQzlCLGFBQU8sU0FBUyxJQUFJLE1BQU07QUFBQSxJQUM1QjtBQUFBO0FBQUE7OztBQ1BBO0FBQUEsZ0dBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksa0JBQWtCO0FBQ3RCLFFBQUksa0JBQWtCO0FBQ3RCLFFBQUksb0JBQW9CO0FBR3hCLFFBQUksZUFBZSxTQUFVLGFBQWE7QUFDeEMsYUFBTyxTQUFVLE9BQU8sSUFBSSxXQUFXO0FBQ3JDLFlBQUksSUFBSSxnQkFBZ0IsS0FBSztBQUM3QixZQUFJLFNBQVMsa0JBQWtCLENBQUM7QUFDaEMsWUFBSSxXQUFXLEVBQUcsUUFBTyxDQUFDLGVBQWU7QUFDekMsWUFBSSxRQUFRLGdCQUFnQixXQUFXLE1BQU07QUFDN0MsWUFBSTtBQUdKLFlBQUksZUFBZSxPQUFPLEdBQUksUUFBTyxTQUFTLE9BQU87QUFDbkQsa0JBQVEsRUFBRSxPQUFPO0FBRWpCLGNBQUksVUFBVSxNQUFPLFFBQU87QUFBQSxRQUU5QjtBQUFBLFlBQU8sUUFBTSxTQUFTLE9BQU8sU0FBUztBQUNwQyxlQUFLLGVBQWUsU0FBUyxNQUFNLEVBQUUsS0FBSyxNQUFNLEdBQUksUUFBTyxlQUFlLFNBQVM7QUFBQSxRQUNyRjtBQUFFLGVBQU8sQ0FBQyxlQUFlO0FBQUEsTUFDM0I7QUFBQSxJQUNGO0FBRUEsSUFBQUEsUUFBTyxVQUFVO0FBQUE7QUFBQTtBQUFBLE1BR2YsVUFBVSxhQUFhLElBQUk7QUFBQTtBQUFBO0FBQUEsTUFHM0IsU0FBUyxhQUFhLEtBQUs7QUFBQSxJQUM3QjtBQUFBO0FBQUE7OztBQ2pDQTtBQUFBLHNHQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLGNBQWM7QUFDbEIsUUFBSSxTQUFTO0FBQ2IsUUFBSSxrQkFBa0I7QUFDdEIsUUFBSSxVQUFVLHlCQUF1QztBQUNyRCxRQUFJLGFBQWE7QUFFakIsUUFBSSxPQUFPLFlBQVksQ0FBQyxFQUFFLElBQUk7QUFFOUIsSUFBQUEsUUFBTyxVQUFVLFNBQVUsUUFBUSxPQUFPO0FBQ3hDLFVBQUksSUFBSSxnQkFBZ0IsTUFBTTtBQUM5QixVQUFJLElBQUk7QUFDUixVQUFJLFNBQVMsQ0FBQztBQUNkLFVBQUk7QUFDSixXQUFLLE9BQU8sRUFBRyxFQUFDLE9BQU8sWUFBWSxHQUFHLEtBQUssT0FBTyxHQUFHLEdBQUcsS0FBSyxLQUFLLFFBQVEsR0FBRztBQUU3RSxhQUFPLE1BQU0sU0FBUyxFQUFHLEtBQUksT0FBTyxHQUFHLE1BQU0sTUFBTSxHQUFHLENBQUMsR0FBRztBQUN4RCxTQUFDLFFBQVEsUUFBUSxHQUFHLEtBQUssS0FBSyxRQUFRLEdBQUc7QUFBQSxNQUMzQztBQUNBLGFBQU87QUFBQSxJQUNUO0FBQUE7QUFBQTs7O0FDcEJBO0FBQUEsK0ZBQUFDLFNBQUE7QUFBQTtBQUVBLElBQUFBLFFBQU8sVUFBVTtBQUFBLE1BQ2Y7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUE7QUFBQTs7O0FDVkE7QUFBQTtBQUFBO0FBQ0EsUUFBSSxxQkFBcUI7QUFDekIsUUFBSSxjQUFjO0FBRWxCLFFBQUksYUFBYSxZQUFZLE9BQU8sVUFBVSxXQUFXO0FBS3pELFlBQVEsSUFBSSxPQUFPLHVCQUF1QixTQUFTLG9CQUFvQixHQUFHO0FBQ3hFLGFBQU8sbUJBQW1CLEdBQUcsVUFBVTtBQUFBLElBQ3pDO0FBQUE7QUFBQTs7O0FDWEE7QUFBQTtBQUFBO0FBRUEsWUFBUSxJQUFJLE9BQU87QUFBQTtBQUFBOzs7QUNGbkI7QUFBQSwwRkFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxhQUFhO0FBQ2pCLFFBQUksY0FBYztBQUNsQixRQUFJLDRCQUE0QjtBQUNoQyxRQUFJLDhCQUE4QjtBQUNsQyxRQUFJLFdBQVc7QUFFZixRQUFJLFNBQVMsWUFBWSxDQUFDLEVBQUUsTUFBTTtBQUdsQyxJQUFBQSxRQUFPLFVBQVUsV0FBVyxXQUFXLFNBQVMsS0FBSyxTQUFTLFFBQVEsSUFBSTtBQUN4RSxVQUFJLE9BQU8sMEJBQTBCLEVBQUUsU0FBUyxFQUFFLENBQUM7QUFDbkQsVUFBSSx3QkFBd0IsNEJBQTRCO0FBQ3hELGFBQU8sd0JBQXdCLE9BQU8sTUFBTSxzQkFBc0IsRUFBRSxDQUFDLElBQUk7QUFBQSxJQUMzRTtBQUFBO0FBQUE7OztBQ2RBO0FBQUEsNkdBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksU0FBUztBQUNiLFFBQUksVUFBVTtBQUNkLFFBQUksaUNBQWlDO0FBQ3JDLFFBQUksdUJBQXVCO0FBRTNCLElBQUFBLFFBQU8sVUFBVSxTQUFVLFFBQVEsUUFBUSxZQUFZO0FBQ3JELFVBQUksT0FBTyxRQUFRLE1BQU07QUFDekIsVUFBSSxpQkFBaUIscUJBQXFCO0FBQzFDLFVBQUksMkJBQTJCLCtCQUErQjtBQUM5RCxlQUFTLElBQUksR0FBRyxJQUFJLEtBQUssUUFBUSxLQUFLO0FBQ3BDLFlBQUksTUFBTSxLQUFLLENBQUM7QUFDaEIsWUFBSSxDQUFDLE9BQU8sUUFBUSxHQUFHLEtBQUssRUFBRSxjQUFjLE9BQU8sWUFBWSxHQUFHLElBQUk7QUFDcEUseUJBQWUsUUFBUSxLQUFLLHlCQUF5QixRQUFRLEdBQUcsQ0FBQztBQUFBLFFBQ25FO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQTtBQUFBOzs7QUNoQkE7QUFBQSwyRkFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxRQUFRO0FBQ1osUUFBSSxhQUFhO0FBRWpCLFFBQUksY0FBYztBQUVsQixRQUFJLFdBQVcsU0FBVSxTQUFTLFdBQVc7QUFDM0MsVUFBSSxRQUFRLEtBQUssVUFBVSxPQUFPLENBQUM7QUFDbkMsYUFBTyxVQUFVLFdBQVcsT0FDeEIsVUFBVSxTQUFTLFFBQ25CLFdBQVcsU0FBUyxJQUFJLE1BQU0sU0FBUyxJQUN2QyxDQUFDLENBQUM7QUFBQSxJQUNSO0FBRUEsUUFBSSxZQUFZLFNBQVMsWUFBWSxTQUFVLFFBQVE7QUFDckQsYUFBTyxPQUFPLE1BQU0sRUFBRSxRQUFRLGFBQWEsR0FBRyxFQUFFLFlBQVk7QUFBQSxJQUM5RDtBQUVBLFFBQUksT0FBTyxTQUFTLE9BQU8sQ0FBQztBQUM1QixRQUFJLFNBQVMsU0FBUyxTQUFTO0FBQy9CLFFBQUksV0FBVyxTQUFTLFdBQVc7QUFFbkMsSUFBQUEsUUFBTyxVQUFVO0FBQUE7QUFBQTs7O0FDdEJqQjtBQUFBLHdGQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJQyxjQUFhO0FBQ2pCLFFBQUksMkJBQTJCLDZDQUEyRDtBQUMxRixRQUFJLDhCQUE4QjtBQUNsQyxRQUFJLGdCQUFnQjtBQUNwQixRQUFJLHVCQUF1QjtBQUMzQixRQUFJLDRCQUE0QjtBQUNoQyxRQUFJLFdBQVc7QUFpQmYsSUFBQUQsUUFBTyxVQUFVLFNBQVUsU0FBUyxRQUFRO0FBQzFDLFVBQUksU0FBUyxRQUFRO0FBQ3JCLFVBQUksU0FBUyxRQUFRO0FBQ3JCLFVBQUksU0FBUyxRQUFRO0FBQ3JCLFVBQUksUUFBUSxRQUFRLEtBQUssZ0JBQWdCLGdCQUFnQjtBQUN6RCxVQUFJLFFBQVE7QUFDVixpQkFBU0M7QUFBQSxNQUNYLFdBQVcsUUFBUTtBQUNqQixpQkFBU0EsWUFBVyxNQUFNLEtBQUsscUJBQXFCLFFBQVEsQ0FBQyxDQUFDO0FBQUEsTUFDaEUsT0FBTztBQUNMLGlCQUFTQSxZQUFXLE1BQU0sS0FBS0EsWUFBVyxNQUFNLEVBQUU7QUFBQSxNQUNwRDtBQUNBLFVBQUksT0FBUSxNQUFLLE9BQU8sUUFBUTtBQUM5Qix5QkFBaUIsT0FBTyxHQUFHO0FBQzNCLFlBQUksUUFBUSxnQkFBZ0I7QUFDMUIsdUJBQWEseUJBQXlCLFFBQVEsR0FBRztBQUNqRCwyQkFBaUIsY0FBYyxXQUFXO0FBQUEsUUFDNUMsTUFBTyxrQkFBaUIsT0FBTyxHQUFHO0FBQ2xDLGlCQUFTLFNBQVMsU0FBUyxNQUFNLFVBQVUsU0FBUyxNQUFNLE9BQU8sS0FBSyxRQUFRLE1BQU07QUFFcEYsWUFBSSxDQUFDLFVBQVUsbUJBQW1CLFFBQVc7QUFDM0MsY0FBSSxPQUFPLGtCQUFrQixPQUFPLGVBQWdCO0FBQ3BELG9DQUEwQixnQkFBZ0IsY0FBYztBQUFBLFFBQzFEO0FBRUEsWUFBSSxRQUFRLFFBQVMsa0JBQWtCLGVBQWUsTUFBTztBQUMzRCxzQ0FBNEIsZ0JBQWdCLFFBQVEsSUFBSTtBQUFBLFFBQzFEO0FBQ0Esc0JBQWMsUUFBUSxLQUFLLGdCQUFnQixPQUFPO0FBQUEsTUFDcEQ7QUFBQSxJQUNGO0FBQUE7QUFBQTs7O0FDdERBO0FBQUEsNkZBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksZ0JBQWdCO0FBRXBCLFFBQUksYUFBYTtBQUVqQixJQUFBQSxRQUFPLFVBQVUsU0FBVSxJQUFJLFdBQVc7QUFDeEMsVUFBSSxjQUFjLFdBQVcsRUFBRSxFQUFHLFFBQU87QUFDekMsWUFBTSxJQUFJLFdBQVcsc0JBQXNCO0FBQUEsSUFDN0M7QUFBQTtBQUFBOzs7QUNSQTtBQUFBLDBHQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLFFBQVE7QUFFWixJQUFBQSxRQUFPLFVBQVUsQ0FBQyxNQUFNLFdBQVk7QUFDbEMsZUFBUyxJQUFJO0FBQUEsTUFBYztBQUMzQixRQUFFLFVBQVUsY0FBYztBQUUxQixhQUFPLE9BQU8sZUFBZSxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUU7QUFBQSxJQUM5QyxDQUFDO0FBQUE7QUFBQTs7O0FDUkQ7QUFBQSx5R0FBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxTQUFTO0FBQ2IsUUFBSSxhQUFhO0FBQ2pCLFFBQUksV0FBVztBQUNmLFFBQUksWUFBWTtBQUNoQixRQUFJLDJCQUEyQjtBQUUvQixRQUFJLFdBQVcsVUFBVSxVQUFVO0FBQ25DLFFBQUksVUFBVTtBQUNkLFFBQUksa0JBQWtCLFFBQVE7QUFLOUIsSUFBQUEsUUFBTyxVQUFVLDJCQUEyQixRQUFRLGlCQUFpQixTQUFVLEdBQUc7QUFDaEYsVUFBSSxTQUFTLFNBQVMsQ0FBQztBQUN2QixVQUFJLE9BQU8sUUFBUSxRQUFRLEVBQUcsUUFBTyxPQUFPLFFBQVE7QUFDcEQsVUFBSSxjQUFjLE9BQU87QUFDekIsVUFBSSxXQUFXLFdBQVcsS0FBSyxrQkFBa0IsYUFBYTtBQUM1RCxlQUFPLFlBQVk7QUFBQSxNQUNyQjtBQUFFLGFBQU8sa0JBQWtCLFVBQVUsa0JBQWtCO0FBQUEsSUFDekQ7QUFBQTtBQUFBOzs7QUNyQkE7QUFBQSwwR0FBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxjQUFjO0FBQ2xCLFFBQUksaUJBQWlCO0FBRXJCLElBQUFBLFFBQU8sVUFBVSxTQUFVLFFBQVEsTUFBTSxZQUFZO0FBQ25ELFVBQUksV0FBVyxJQUFLLGFBQVksV0FBVyxLQUFLLE1BQU0sRUFBRSxRQUFRLEtBQUssQ0FBQztBQUN0RSxVQUFJLFdBQVcsSUFBSyxhQUFZLFdBQVcsS0FBSyxNQUFNLEVBQUUsUUFBUSxLQUFLLENBQUM7QUFDdEUsYUFBTyxlQUFlLEVBQUUsUUFBUSxNQUFNLFVBQVU7QUFBQSxJQUNsRDtBQUFBO0FBQUE7OztBQ1JBO0FBQUEsaUdBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksY0FBYztBQUNsQixRQUFJLHVCQUF1QjtBQUMzQixRQUFJLDJCQUEyQjtBQUUvQixJQUFBQSxRQUFPLFVBQVUsU0FBVSxRQUFRLEtBQUssT0FBTztBQUM3QyxVQUFJLFlBQWEsc0JBQXFCLEVBQUUsUUFBUSxLQUFLLHlCQUF5QixHQUFHLEtBQUssQ0FBQztBQUFBLFVBQ2xGLFFBQU8sR0FBRyxJQUFJO0FBQUEsSUFDckI7QUFBQTtBQUFBOzs7QUNSQTtBQUFBLDZGQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLHFCQUFxQjtBQUN6QixRQUFJLGNBQWM7QUFLbEIsSUFBQUEsUUFBTyxVQUFVLE9BQU8sUUFBUSxTQUFTLEtBQUssR0FBRztBQUMvQyxhQUFPLG1CQUFtQixHQUFHLFdBQVc7QUFBQSxJQUMxQztBQUFBO0FBQUE7OztBQ1RBO0FBQUE7QUFBQTtBQUNBLFFBQUksY0FBYztBQUNsQixRQUFJLDBCQUEwQjtBQUM5QixRQUFJLHVCQUF1QjtBQUMzQixRQUFJLFdBQVc7QUFDZixRQUFJLGtCQUFrQjtBQUN0QixRQUFJLGFBQWE7QUFLakIsWUFBUSxJQUFJLGVBQWUsQ0FBQywwQkFBMEIsT0FBTyxtQkFBbUIsU0FBUyxpQkFBaUIsR0FBRyxZQUFZO0FBQ3ZILGVBQVMsQ0FBQztBQUNWLFVBQUksUUFBUSxnQkFBZ0IsVUFBVTtBQUN0QyxVQUFJLE9BQU8sV0FBVyxVQUFVO0FBQ2hDLFVBQUksU0FBUyxLQUFLO0FBQ2xCLFVBQUksUUFBUTtBQUNaLFVBQUk7QUFDSixhQUFPLFNBQVMsTUFBTyxzQkFBcUIsRUFBRSxHQUFHLE1BQU0sS0FBSyxPQUFPLEdBQUcsTUFBTSxHQUFHLENBQUM7QUFDaEYsYUFBTztBQUFBLElBQ1Q7QUFBQTtBQUFBOzs7QUNwQkE7QUFBQSxzRkFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxhQUFhO0FBRWpCLElBQUFBLFFBQU8sVUFBVSxXQUFXLFlBQVksaUJBQWlCO0FBQUE7QUFBQTs7O0FDSHpEO0FBQUEsK0ZBQUFDLFNBQUE7QUFBQTtBQUVBLFFBQUksV0FBVztBQUNmLFFBQUkseUJBQXlCO0FBQzdCLFFBQUksY0FBYztBQUNsQixRQUFJLGFBQWE7QUFDakIsUUFBSSxPQUFPO0FBQ1gsUUFBSSx3QkFBd0I7QUFDNUIsUUFBSSxZQUFZO0FBRWhCLFFBQUksS0FBSztBQUNULFFBQUksS0FBSztBQUNULFFBQUksWUFBWTtBQUNoQixRQUFJLFNBQVM7QUFDYixRQUFJLFdBQVcsVUFBVSxVQUFVO0FBRW5DLFFBQUksbUJBQW1CLFdBQVk7QUFBQSxJQUFjO0FBRWpELFFBQUksWUFBWSxTQUFVLFNBQVM7QUFDakMsYUFBTyxLQUFLLFNBQVMsS0FBSyxVQUFVLEtBQUssTUFBTSxTQUFTO0FBQUEsSUFDMUQ7QUFHQSxRQUFJLDRCQUE0QixTQUFVQyxrQkFBaUI7QUFDekQsTUFBQUEsaUJBQWdCLE1BQU0sVUFBVSxFQUFFLENBQUM7QUFDbkMsTUFBQUEsaUJBQWdCLE1BQU07QUFDdEIsVUFBSSxPQUFPQSxpQkFBZ0IsYUFBYTtBQUV4QyxNQUFBQSxtQkFBa0I7QUFDbEIsYUFBTztBQUFBLElBQ1Q7QUFHQSxRQUFJLDJCQUEyQixXQUFZO0FBRXpDLFVBQUksU0FBUyxzQkFBc0IsUUFBUTtBQUMzQyxVQUFJLEtBQUssU0FBUyxTQUFTO0FBQzNCLFVBQUk7QUFDSixhQUFPLE1BQU0sVUFBVTtBQUN2QixXQUFLLFlBQVksTUFBTTtBQUV2QixhQUFPLE1BQU0sT0FBTyxFQUFFO0FBQ3RCLHVCQUFpQixPQUFPLGNBQWM7QUFDdEMscUJBQWUsS0FBSztBQUNwQixxQkFBZSxNQUFNLFVBQVUsbUJBQW1CLENBQUM7QUFDbkQscUJBQWUsTUFBTTtBQUNyQixhQUFPLGVBQWU7QUFBQSxJQUN4QjtBQU9BLFFBQUk7QUFDSixRQUFJLGtCQUFrQixXQUFZO0FBQ2hDLFVBQUk7QUFDRiwwQkFBa0IsSUFBSSxjQUFjLFVBQVU7QUFBQSxNQUNoRCxTQUFTLE9BQU87QUFBQSxNQUFlO0FBQy9CLHdCQUFrQixPQUFPLFlBQVksY0FDakMsU0FBUyxVQUFVLGtCQUNqQiwwQkFBMEIsZUFBZSxJQUN6Qyx5QkFBeUIsSUFDM0IsMEJBQTBCLGVBQWU7QUFDN0MsVUFBSSxTQUFTLFlBQVk7QUFDekIsYUFBTyxTQUFVLFFBQU8sZ0JBQWdCLFNBQVMsRUFBRSxZQUFZLE1BQU0sQ0FBQztBQUN0RSxhQUFPLGdCQUFnQjtBQUFBLElBQ3pCO0FBRUEsZUFBVyxRQUFRLElBQUk7QUFLdkIsSUFBQUQsUUFBTyxVQUFVLE9BQU8sVUFBVSxTQUFTLE9BQU8sR0FBRyxZQUFZO0FBQy9ELFVBQUk7QUFDSixVQUFJLE1BQU0sTUFBTTtBQUNkLHlCQUFpQixTQUFTLElBQUksU0FBUyxDQUFDO0FBQ3hDLGlCQUFTLElBQUksaUJBQWlCO0FBQzlCLHlCQUFpQixTQUFTLElBQUk7QUFFOUIsZUFBTyxRQUFRLElBQUk7QUFBQSxNQUNyQixNQUFPLFVBQVMsZ0JBQWdCO0FBQ2hDLGFBQU8sZUFBZSxTQUFZLFNBQVMsdUJBQXVCLEVBQUUsUUFBUSxVQUFVO0FBQUEsSUFDeEY7QUFBQTtBQUFBOzs7QUNwRkE7QUFBQSxnR0FBQUUsU0FBQTtBQUFBO0FBQ0EsUUFBSSxRQUFRO0FBQ1osUUFBSSxhQUFhO0FBQ2pCLFFBQUksV0FBVztBQUNmLFFBQUksU0FBUztBQUNiLFFBQUksaUJBQWlCO0FBQ3JCLFFBQUksZ0JBQWdCO0FBQ3BCLFFBQUksa0JBQWtCO0FBQ3RCLFFBQUksVUFBVTtBQUVkLFFBQUksV0FBVyxnQkFBZ0IsVUFBVTtBQUN6QyxRQUFJLHlCQUF5QjtBQUk3QixRQUFJO0FBQUosUUFBdUI7QUFBdkIsUUFBMEQ7QUFHMUQsUUFBSSxDQUFDLEVBQUUsTUFBTTtBQUNYLHNCQUFnQixDQUFDLEVBQUUsS0FBSztBQUV4QixVQUFJLEVBQUUsVUFBVSxlQUFnQiwwQkFBeUI7QUFBQSxXQUNwRDtBQUNILDRDQUFvQyxlQUFlLGVBQWUsYUFBYSxDQUFDO0FBQ2hGLFlBQUksc0NBQXNDLE9BQU8sVUFBVyxxQkFBb0I7QUFBQSxNQUNsRjtBQUFBLElBQ0Y7QUFFQSxRQUFJLHlCQUF5QixDQUFDLFNBQVMsaUJBQWlCLEtBQUssTUFBTSxXQUFZO0FBQzdFLFVBQUksT0FBTyxDQUFDO0FBRVosYUFBTyxrQkFBa0IsUUFBUSxFQUFFLEtBQUssSUFBSSxNQUFNO0FBQUEsSUFDcEQsQ0FBQztBQUVELFFBQUksdUJBQXdCLHFCQUFvQixDQUFDO0FBQUEsYUFDeEMsUUFBUyxxQkFBb0IsT0FBTyxpQkFBaUI7QUFJOUQsUUFBSSxDQUFDLFdBQVcsa0JBQWtCLFFBQVEsQ0FBQyxHQUFHO0FBQzVDLG9CQUFjLG1CQUFtQixVQUFVLFdBQVk7QUFDckQsZUFBTztBQUFBLE1BQ1QsQ0FBQztBQUFBLElBQ0g7QUFFQSxJQUFBQSxRQUFPLFVBQVU7QUFBQSxNQUNmO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQTtBQUFBOzs7QUNoREE7QUFBQTtBQUFBO0FBQ0EsUUFBSUMsS0FBSTtBQUNSLFFBQUlDLGNBQWE7QUFDakIsUUFBSSxhQUFhO0FBQ2pCLFFBQUksV0FBVztBQUNmLFFBQUksYUFBYTtBQUNqQixRQUFJLGlCQUFpQjtBQUNyQixRQUFJLHdCQUF3QjtBQUM1QixRQUFJLGlCQUFpQjtBQUNyQixRQUFJLFFBQVE7QUFDWixRQUFJLFNBQVM7QUFDYixRQUFJLGtCQUFrQjtBQUN0QixRQUFJLG9CQUFvQix5QkFBdUM7QUFDL0QsUUFBSSxjQUFjO0FBQ2xCLFFBQUksVUFBVTtBQUVkLFFBQUksY0FBYztBQUNsQixRQUFJLFdBQVc7QUFDZixRQUFJLGdCQUFnQixnQkFBZ0IsYUFBYTtBQUVqRCxRQUFJLGFBQWE7QUFDakIsUUFBSSxpQkFBaUJBLFlBQVcsUUFBUTtBQUd4QyxRQUFJLFNBQVMsV0FDUixDQUFDLFdBQVcsY0FBYyxLQUMxQixlQUFlLGNBQWMscUJBRTdCLENBQUMsTUFBTSxXQUFZO0FBQUUscUJBQWUsQ0FBQyxDQUFDO0FBQUEsSUFBRyxDQUFDO0FBRS9DLFFBQUksc0JBQXNCLFNBQVMsV0FBVztBQUM1QyxpQkFBVyxNQUFNLGlCQUFpQjtBQUNsQyxVQUFJLGVBQWUsSUFBSSxNQUFNLGtCQUFtQixPQUFNLElBQUksV0FBVyxvREFBb0Q7QUFBQSxJQUMzSDtBQUVBLFFBQUksa0NBQWtDLFNBQVUsS0FBSyxPQUFPO0FBQzFELFVBQUksYUFBYTtBQUNmLDhCQUFzQixtQkFBbUIsS0FBSztBQUFBLFVBQzVDLGNBQWM7QUFBQSxVQUNkLEtBQUssV0FBWTtBQUNmLG1CQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0EsS0FBSyxTQUFVLGFBQWE7QUFDMUIscUJBQVMsSUFBSTtBQUNiLGdCQUFJLFNBQVMsa0JBQW1CLE9BQU0sSUFBSSxXQUFXLGtDQUFrQztBQUN2RixnQkFBSSxPQUFPLE1BQU0sR0FBRyxFQUFHLE1BQUssR0FBRyxJQUFJO0FBQUEsZ0JBQzlCLGdCQUFlLE1BQU0sS0FBSyxXQUFXO0FBQUEsVUFDNUM7QUFBQSxRQUNGLENBQUM7QUFBQSxNQUNILE1BQU8sbUJBQWtCLEdBQUcsSUFBSTtBQUFBLElBQ2xDO0FBRUEsUUFBSSxDQUFDLE9BQU8sbUJBQW1CLGFBQWEsRUFBRyxpQ0FBZ0MsZUFBZSxRQUFRO0FBRXRHLFFBQUksVUFBVSxDQUFDLE9BQU8sbUJBQW1CLFdBQVcsS0FBSyxrQkFBa0IsV0FBVyxNQUFNLFFBQVE7QUFDbEcsc0NBQWdDLGFBQWEsbUJBQW1CO0FBQUEsSUFDbEU7QUFFQSx3QkFBb0IsWUFBWTtBQUloQyxJQUFBRCxHQUFFLEVBQUUsUUFBUSxNQUFNLGFBQWEsTUFBTSxRQUFRLE9BQU8sR0FBRztBQUFBLE1BQ3JELFVBQVU7QUFBQSxJQUNaLENBQUM7QUFBQTtBQUFBOzs7QUNoRUQ7QUFBQSxxR0FBQUUsU0FBQTtBQUFBO0FBR0EsSUFBQUEsUUFBTyxVQUFVLFNBQVUsS0FBSztBQUM5QixhQUFPO0FBQUEsUUFDTCxVQUFVO0FBQUEsUUFDVixNQUFNLElBQUk7QUFBQSxRQUNWLE1BQU07QUFBQSxNQUNSO0FBQUEsSUFDRjtBQUFBO0FBQUE7OztBQ1RBO0FBQUEsa0dBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksZ0JBQWdCO0FBRXBCLElBQUFBLFFBQU8sVUFBVSxTQUFVLFFBQVEsS0FBSyxTQUFTO0FBQy9DLGVBQVMsT0FBTyxJQUFLLGVBQWMsUUFBUSxLQUFLLElBQUksR0FBRyxHQUFHLE9BQU87QUFDakUsYUFBTztBQUFBLElBQ1Q7QUFBQTtBQUFBOzs7QUNOQTtBQUFBLDJHQUFBQyxTQUFBO0FBQUE7QUFHQSxJQUFBQSxRQUFPLFVBQVUsU0FBVSxPQUFPLE1BQU07QUFDdEMsYUFBTyxFQUFFLE9BQWMsS0FBVztBQUFBLElBQ3BDO0FBQUE7QUFBQTs7O0FDTEE7QUFBQSxnR0FBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxPQUFPO0FBQ1gsUUFBSSxXQUFXO0FBQ2YsUUFBSSxZQUFZO0FBRWhCLElBQUFBLFFBQU8sVUFBVSxTQUFVLFVBQVUsTUFBTSxPQUFPO0FBQ2hELFVBQUksYUFBYTtBQUNqQixlQUFTLFFBQVE7QUFDakIsVUFBSTtBQUNGLHNCQUFjLFVBQVUsVUFBVSxRQUFRO0FBQzFDLFlBQUksQ0FBQyxhQUFhO0FBQ2hCLGNBQUksU0FBUyxRQUFTLE9BQU07QUFDNUIsaUJBQU87QUFBQSxRQUNUO0FBQ0Esc0JBQWMsS0FBSyxhQUFhLFFBQVE7QUFBQSxNQUMxQyxTQUFTLE9BQU87QUFDZCxxQkFBYTtBQUNiLHNCQUFjO0FBQUEsTUFDaEI7QUFDQSxVQUFJLFNBQVMsUUFBUyxPQUFNO0FBQzVCLFVBQUksV0FBWSxPQUFNO0FBQ3RCLGVBQVMsV0FBVztBQUNwQixhQUFPO0FBQUEsSUFDVDtBQUFBO0FBQUE7OztBQ3ZCQTtBQUFBLHVHQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLE9BQU87QUFDWCxRQUFJLFNBQVM7QUFDYixRQUFJLDhCQUE4QjtBQUNsQyxRQUFJLGlCQUFpQjtBQUNyQixRQUFJLGtCQUFrQjtBQUN0QixRQUFJLHNCQUFzQjtBQUMxQixRQUFJLFlBQVk7QUFDaEIsUUFBSSxvQkFBb0IseUJBQXVDO0FBQy9ELFFBQUkseUJBQXlCO0FBQzdCLFFBQUksZ0JBQWdCO0FBRXBCLFFBQUksZ0JBQWdCLGdCQUFnQixhQUFhO0FBQ2pELFFBQUksa0JBQWtCO0FBQ3RCLFFBQUksMEJBQTBCO0FBQzlCLFFBQUksbUJBQW1CLG9CQUFvQjtBQUUzQyxRQUFJLCtCQUErQixTQUFVLGFBQWE7QUFDeEQsVUFBSSxtQkFBbUIsb0JBQW9CLFVBQVUsY0FBYywwQkFBMEIsZUFBZTtBQUU1RyxhQUFPLGVBQWUsT0FBTyxpQkFBaUIsR0FBRztBQUFBLFFBQy9DLE1BQU0sU0FBUyxPQUFPO0FBQ3BCLGNBQUksUUFBUSxpQkFBaUIsSUFBSTtBQUlqQyxjQUFJLFlBQWEsUUFBTyxNQUFNLFlBQVk7QUFDMUMsY0FBSSxNQUFNLEtBQU0sUUFBTyx1QkFBdUIsUUFBVyxJQUFJO0FBQzdELGNBQUk7QUFDRixnQkFBSSxTQUFTLE1BQU0sWUFBWTtBQUMvQixtQkFBTyxNQUFNLHNCQUFzQixTQUFTLHVCQUF1QixRQUFRLE1BQU0sSUFBSTtBQUFBLFVBQ3ZGLFNBQVMsT0FBTztBQUNkLGtCQUFNLE9BQU87QUFDYixrQkFBTTtBQUFBLFVBQ1I7QUFBQSxRQUNGO0FBQUEsUUFDQSxVQUFVLFdBQVk7QUFDcEIsY0FBSSxRQUFRLGlCQUFpQixJQUFJO0FBQ2pDLGNBQUksV0FBVyxNQUFNO0FBQ3JCLGdCQUFNLE9BQU87QUFDYixjQUFJLGFBQWE7QUFDZixnQkFBSSxlQUFlLFVBQVUsVUFBVSxRQUFRO0FBQy9DLG1CQUFPLGVBQWUsS0FBSyxjQUFjLFFBQVEsSUFBSSx1QkFBdUIsUUFBVyxJQUFJO0FBQUEsVUFDN0Y7QUFDQSxjQUFJLE1BQU0sTUFBTyxLQUFJO0FBQ25CLDBCQUFjLE1BQU0sTUFBTSxVQUFVLFFBQVE7QUFBQSxVQUM5QyxTQUFTLE9BQU87QUFDZCxtQkFBTyxjQUFjLFVBQVUsU0FBUyxLQUFLO0FBQUEsVUFDL0M7QUFDQSxjQUFJLFNBQVUsZUFBYyxVQUFVLFFBQVE7QUFDOUMsaUJBQU8sdUJBQXVCLFFBQVcsSUFBSTtBQUFBLFFBQy9DO0FBQUEsTUFDRixDQUFDO0FBQUEsSUFDSDtBQUVBLFFBQUksZ0NBQWdDLDZCQUE2QixJQUFJO0FBQ3JFLFFBQUksMEJBQTBCLDZCQUE2QixLQUFLO0FBRWhFLGdDQUE0Qix5QkFBeUIsZUFBZSxpQkFBaUI7QUFFckYsSUFBQUEsUUFBTyxVQUFVLFNBQVUsYUFBYSxhQUFhLHVCQUF1QjtBQUMxRSxVQUFJLGdCQUFnQixTQUFTLFNBQVMsUUFBUSxPQUFPO0FBQ25ELFlBQUksT0FBTztBQUNULGdCQUFNLFdBQVcsT0FBTztBQUN4QixnQkFBTSxPQUFPLE9BQU87QUFBQSxRQUN0QixNQUFPLFNBQVE7QUFDZixjQUFNLE9BQU8sY0FBYywwQkFBMEI7QUFDckQsY0FBTSxzQkFBc0IsQ0FBQyxDQUFDO0FBQzlCLGNBQU0sY0FBYztBQUNwQixjQUFNLFVBQVU7QUFDaEIsY0FBTSxPQUFPO0FBQ2IseUJBQWlCLE1BQU0sS0FBSztBQUFBLE1BQzlCO0FBRUEsb0JBQWMsWUFBWSxjQUFjLGdDQUFnQztBQUV4RSxhQUFPO0FBQUEsSUFDVDtBQUFBO0FBQUE7OztBQzdFQTtBQUFBLGtIQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLFdBQVc7QUFDZixRQUFJLGdCQUFnQjtBQUdwQixJQUFBQSxRQUFPLFVBQVUsU0FBVSxVQUFVLElBQUksT0FBTyxTQUFTO0FBQ3ZELFVBQUk7QUFDRixlQUFPLFVBQVUsR0FBRyxTQUFTLEtBQUssRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxHQUFHLEtBQUs7QUFBQSxNQUM5RCxTQUFTLE9BQU87QUFDZCxzQkFBYyxVQUFVLFNBQVMsS0FBSztBQUFBLE1BQ3hDO0FBQUEsSUFDRjtBQUFBO0FBQUE7OztBQ1hBO0FBQUE7QUFBQTtBQUNBLFFBQUlDLEtBQUk7QUFDUixRQUFJLE9BQU87QUFDWCxRQUFJLFlBQVk7QUFDaEIsUUFBSSxXQUFXO0FBQ2YsUUFBSSxvQkFBb0I7QUFDeEIsUUFBSSxzQkFBc0I7QUFDMUIsUUFBSSwrQkFBK0I7QUFDbkMsUUFBSSxVQUFVO0FBRWQsUUFBSSxnQkFBZ0Isb0JBQW9CLFdBQVk7QUFDbEQsVUFBSSxXQUFXLEtBQUs7QUFDcEIsVUFBSSxZQUFZLEtBQUs7QUFDckIsVUFBSSxPQUFPLEtBQUs7QUFDaEIsVUFBSSxRQUFRLE1BQU07QUFDbEIsYUFBTyxNQUFNO0FBQ1gsaUJBQVMsU0FBUyxLQUFLLE1BQU0sUUFBUSxDQUFDO0FBQ3RDLGVBQU8sS0FBSyxPQUFPLENBQUMsQ0FBQyxPQUFPO0FBQzVCLFlBQUksS0FBTTtBQUNWLGdCQUFRLE9BQU87QUFDZixZQUFJLDZCQUE2QixVQUFVLFdBQVcsQ0FBQyxPQUFPLEtBQUssU0FBUyxHQUFHLElBQUksRUFBRyxRQUFPO0FBQUEsTUFDL0Y7QUFBQSxJQUNGLENBQUM7QUFJRCxJQUFBQSxHQUFFLEVBQUUsUUFBUSxZQUFZLE9BQU8sTUFBTSxNQUFNLE1BQU0sUUFBUSxRQUFRLEdBQUc7QUFBQSxNQUNsRSxRQUFRLFNBQVMsT0FBTyxXQUFXO0FBQ2pDLGlCQUFTLElBQUk7QUFDYixrQkFBVSxTQUFTO0FBQ25CLGVBQU8sSUFBSSxjQUFjLGtCQUFrQixJQUFJLEdBQUc7QUFBQSxVQUNoRDtBQUFBLFFBQ0YsQ0FBQztBQUFBLE1BQ0g7QUFBQSxJQUNGLENBQUM7QUFBQTtBQUFBOzs7QUNsQ0Q7QUFBQSw4R0FBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxhQUFhO0FBQ2pCLFFBQUksY0FBYztBQUVsQixJQUFBQSxRQUFPLFVBQVUsU0FBVSxJQUFJO0FBSTdCLFVBQUksV0FBVyxFQUFFLE1BQU0sV0FBWSxRQUFPLFlBQVksRUFBRTtBQUFBLElBQzFEO0FBQUE7QUFBQTs7O0FDVEE7QUFBQSx1R0FBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxjQUFjO0FBQ2xCLFFBQUksWUFBWTtBQUNoQixRQUFJLGNBQWM7QUFFbEIsUUFBSSxPQUFPLFlBQVksWUFBWSxJQUFJO0FBR3ZDLElBQUFBLFFBQU8sVUFBVSxTQUFVLElBQUksTUFBTTtBQUNuQyxnQkFBVSxFQUFFO0FBQ1osYUFBTyxTQUFTLFNBQVksS0FBSyxjQUFjLEtBQUssSUFBSSxJQUFJLElBQUksV0FBeUI7QUFDdkYsZUFBTyxHQUFHLE1BQU0sTUFBTSxTQUFTO0FBQUEsTUFDakM7QUFBQSxJQUNGO0FBQUE7QUFBQTs7O0FDYkE7QUFBQSwyRkFBQUMsU0FBQTtBQUFBO0FBQ0EsSUFBQUEsUUFBTyxVQUFVLENBQUM7QUFBQTtBQUFBOzs7QUNEbEI7QUFBQSwwR0FBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxrQkFBa0I7QUFDdEIsUUFBSSxZQUFZO0FBRWhCLFFBQUksV0FBVyxnQkFBZ0IsVUFBVTtBQUN6QyxRQUFJLGlCQUFpQixNQUFNO0FBRzNCLElBQUFBLFFBQU8sVUFBVSxTQUFVLElBQUk7QUFDN0IsYUFBTyxPQUFPLFdBQWMsVUFBVSxVQUFVLE1BQU0sZUFBZSxRQUFRLE1BQU07QUFBQSxJQUNyRjtBQUFBO0FBQUE7OztBQ1ZBO0FBQUEsdUdBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksa0JBQWtCO0FBRXRCLFFBQUksZ0JBQWdCLGdCQUFnQixhQUFhO0FBQ2pELFFBQUksT0FBTyxDQUFDO0FBRVosU0FBSyxhQUFhLElBQUk7QUFFdEIsSUFBQUEsUUFBTyxVQUFVLE9BQU8sSUFBSSxNQUFNO0FBQUE7QUFBQTs7O0FDUmxDO0FBQUEseUZBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksd0JBQXdCO0FBQzVCLFFBQUksYUFBYTtBQUNqQixRQUFJLGFBQWE7QUFDakIsUUFBSSxrQkFBa0I7QUFFdEIsUUFBSSxnQkFBZ0IsZ0JBQWdCLGFBQWE7QUFDakQsUUFBSSxVQUFVO0FBR2QsUUFBSSxvQkFBb0IsV0FBVywyQkFBWTtBQUFFLGFBQU87QUFBQSxJQUFXLEVBQUUsQ0FBQyxNQUFNO0FBRzVFLFFBQUksU0FBUyxTQUFVLElBQUksS0FBSztBQUM5QixVQUFJO0FBQ0YsZUFBTyxHQUFHLEdBQUc7QUFBQSxNQUNmLFNBQVMsT0FBTztBQUFBLE1BQWM7QUFBQSxJQUNoQztBQUdBLElBQUFBLFFBQU8sVUFBVSx3QkFBd0IsYUFBYSxTQUFVLElBQUk7QUFDbEUsVUFBSSxHQUFHLEtBQUs7QUFDWixhQUFPLE9BQU8sU0FBWSxjQUFjLE9BQU8sT0FBTyxTQUVsRCxRQUFRLE1BQU0sT0FBTyxJQUFJLFFBQVEsRUFBRSxHQUFHLGFBQWEsTUFBTSxXQUFXLE1BRXBFLG9CQUFvQixXQUFXLENBQUMsS0FFL0IsU0FBUyxXQUFXLENBQUMsT0FBTyxZQUFZLFdBQVcsRUFBRSxNQUFNLElBQUksY0FBYztBQUFBLElBQ3BGO0FBQUE7QUFBQTs7O0FDN0JBO0FBQUEscUdBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksVUFBVTtBQUNkLFFBQUksWUFBWTtBQUNoQixRQUFJLG9CQUFvQjtBQUN4QixRQUFJLFlBQVk7QUFDaEIsUUFBSSxrQkFBa0I7QUFFdEIsUUFBSSxXQUFXLGdCQUFnQixVQUFVO0FBRXpDLElBQUFBLFFBQU8sVUFBVSxTQUFVLElBQUk7QUFDN0IsVUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUcsUUFBTyxVQUFVLElBQUksUUFBUSxLQUNwRCxVQUFVLElBQUksWUFBWSxLQUMxQixVQUFVLFFBQVEsRUFBRSxDQUFDO0FBQUEsSUFDNUI7QUFBQTtBQUFBOzs7QUNiQTtBQUFBLDhGQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLE9BQU87QUFDWCxRQUFJLFlBQVk7QUFDaEIsUUFBSSxXQUFXO0FBQ2YsUUFBSSxjQUFjO0FBQ2xCLFFBQUksb0JBQW9CO0FBRXhCLFFBQUksYUFBYTtBQUVqQixJQUFBQSxRQUFPLFVBQVUsU0FBVSxVQUFVLGVBQWU7QUFDbEQsVUFBSSxpQkFBaUIsVUFBVSxTQUFTLElBQUksa0JBQWtCLFFBQVEsSUFBSTtBQUMxRSxVQUFJLFVBQVUsY0FBYyxFQUFHLFFBQU8sU0FBUyxLQUFLLGdCQUFnQixRQUFRLENBQUM7QUFDN0UsWUFBTSxJQUFJLFdBQVcsWUFBWSxRQUFRLElBQUksa0JBQWtCO0FBQUEsSUFDakU7QUFBQTtBQUFBOzs7QUNiQTtBQUFBLHlGQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLE9BQU87QUFDWCxRQUFJLE9BQU87QUFDWCxRQUFJLFdBQVc7QUFDZixRQUFJLGNBQWM7QUFDbEIsUUFBSSx3QkFBd0I7QUFDNUIsUUFBSSxvQkFBb0I7QUFDeEIsUUFBSSxnQkFBZ0I7QUFDcEIsUUFBSSxjQUFjO0FBQ2xCLFFBQUksb0JBQW9CO0FBQ3hCLFFBQUksZ0JBQWdCO0FBRXBCLFFBQUksYUFBYTtBQUVqQixRQUFJLFNBQVMsU0FBVSxTQUFTLFFBQVE7QUFDdEMsV0FBSyxVQUFVO0FBQ2YsV0FBSyxTQUFTO0FBQUEsSUFDaEI7QUFFQSxRQUFJLGtCQUFrQixPQUFPO0FBRTdCLElBQUFBLFFBQU8sVUFBVSxTQUFVLFVBQVUsaUJBQWlCLFNBQVM7QUFDN0QsVUFBSSxPQUFPLFdBQVcsUUFBUTtBQUM5QixVQUFJLGFBQWEsQ0FBQyxFQUFFLFdBQVcsUUFBUTtBQUN2QyxVQUFJLFlBQVksQ0FBQyxFQUFFLFdBQVcsUUFBUTtBQUN0QyxVQUFJLGNBQWMsQ0FBQyxFQUFFLFdBQVcsUUFBUTtBQUN4QyxVQUFJLGNBQWMsQ0FBQyxFQUFFLFdBQVcsUUFBUTtBQUN4QyxVQUFJLEtBQUssS0FBSyxpQkFBaUIsSUFBSTtBQUNuQyxVQUFJLFVBQVUsUUFBUSxPQUFPLFFBQVEsUUFBUSxNQUFNO0FBRW5ELFVBQUksT0FBTyxTQUFVLFdBQVc7QUFDOUIsWUFBSSxTQUFVLGVBQWMsVUFBVSxVQUFVLFNBQVM7QUFDekQsZUFBTyxJQUFJLE9BQU8sTUFBTSxTQUFTO0FBQUEsTUFDbkM7QUFFQSxVQUFJLFNBQVMsU0FBVSxPQUFPO0FBQzVCLFlBQUksWUFBWTtBQUNkLG1CQUFTLEtBQUs7QUFDZCxpQkFBTyxjQUFjLEdBQUcsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7QUFBQSxRQUMzRTtBQUFFLGVBQU8sY0FBYyxHQUFHLE9BQU8sSUFBSSxJQUFJLEdBQUcsS0FBSztBQUFBLE1BQ25EO0FBRUEsVUFBSSxXQUFXO0FBQ2IsbUJBQVcsU0FBUztBQUFBLE1BQ3RCLFdBQVcsYUFBYTtBQUN0QixtQkFBVztBQUFBLE1BQ2IsT0FBTztBQUNMLGlCQUFTLGtCQUFrQixRQUFRO0FBQ25DLFlBQUksQ0FBQyxPQUFRLE9BQU0sSUFBSSxXQUFXLFlBQVksUUFBUSxJQUFJLGtCQUFrQjtBQUU1RSxZQUFJLHNCQUFzQixNQUFNLEdBQUc7QUFDakMsZUFBSyxRQUFRLEdBQUcsU0FBUyxrQkFBa0IsUUFBUSxHQUFHLFNBQVMsT0FBTyxTQUFTO0FBQzdFLHFCQUFTLE9BQU8sU0FBUyxLQUFLLENBQUM7QUFDL0IsZ0JBQUksVUFBVSxjQUFjLGlCQUFpQixNQUFNLEVBQUcsUUFBTztBQUFBLFVBQy9EO0FBQUUsaUJBQU8sSUFBSSxPQUFPLEtBQUs7QUFBQSxRQUMzQjtBQUNBLG1CQUFXLFlBQVksVUFBVSxNQUFNO0FBQUEsTUFDekM7QUFFQSxhQUFPLFlBQVksU0FBUyxPQUFPLFNBQVM7QUFDNUMsYUFBTyxFQUFFLE9BQU8sS0FBSyxNQUFNLFFBQVEsR0FBRyxNQUFNO0FBQzFDLFlBQUk7QUFDRixtQkFBUyxPQUFPLEtBQUssS0FBSztBQUFBLFFBQzVCLFNBQVMsT0FBTztBQUNkLHdCQUFjLFVBQVUsU0FBUyxLQUFLO0FBQUEsUUFDeEM7QUFDQSxZQUFJLE9BQU8sVUFBVSxZQUFZLFVBQVUsY0FBYyxpQkFBaUIsTUFBTSxFQUFHLFFBQU87QUFBQSxNQUM1RjtBQUFFLGFBQU8sSUFBSSxPQUFPLEtBQUs7QUFBQSxJQUMzQjtBQUFBO0FBQUE7OztBQ3BFQTtBQUFBO0FBQUE7QUFDQSxRQUFJQyxLQUFJO0FBQ1IsUUFBSSxVQUFVO0FBQ2QsUUFBSSxZQUFZO0FBQ2hCLFFBQUksV0FBVztBQUNmLFFBQUksb0JBQW9CO0FBSXhCLElBQUFBLEdBQUUsRUFBRSxRQUFRLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxHQUFHO0FBQUEsTUFDakQsTUFBTSxTQUFTLEtBQUssV0FBVztBQUM3QixpQkFBUyxJQUFJO0FBQ2Isa0JBQVUsU0FBUztBQUNuQixZQUFJLFNBQVMsa0JBQWtCLElBQUk7QUFDbkMsWUFBSSxVQUFVO0FBQ2QsZUFBTyxRQUFRLFFBQVEsU0FBVSxPQUFPLE1BQU07QUFDNUMsY0FBSSxVQUFVLE9BQU8sU0FBUyxFQUFHLFFBQU8sS0FBSyxLQUFLO0FBQUEsUUFDcEQsR0FBRyxFQUFFLFdBQVcsTUFBTSxhQUFhLEtBQUssQ0FBQyxFQUFFO0FBQUEsTUFDN0M7QUFBQSxJQUNGLENBQUM7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCTSxJQUFNQyxxQkFBcUI7O0FDRGxDLElBQUFDLG9CQUF3QkMsUUFBQSxpQkFBQTtBQUd4QixJQUFNQyxRQUF5Q0MsZUFBYztBQUM1RCxVQUFBLEdBQU9ILGtCQUFBSSxXQUFVRCxTQUFTO0FBQzNCOztDQ01DLFNBQVNFLGNBQWM7QUFDdkIsTUFDQ0MsR0FBR0MsT0FBT0MsSUFBSSxtQkFBbUIsTUFBTSxLQUN2Q0MsT0FBT0Msa0NBQ1AsQ0FBQ0MsU0FBU0MsY0FBYyxrQkFBa0IsR0FDekM7QUFDRDtFQUNEO0FBQ0EsUUFBTUMsTUFBTVgsTUFBTSxpQkFBaUI7QUFDbkMsUUFBTVksd0JBQXdCO0FBQzlCLFFBQU1DLFdBQVc7QUFDakIsUUFBTUMsa0JBQWtCO0FBQ3hCLFFBQU1DLGNBQWNYLEdBQUdZLFFBQVFWLElBQUlRLGVBQWU7QUFPbEQsUUFBTUcsY0FBZUMsZUFBOEI7QUFDbEQsV0FBT0MsRUFBRSxRQUFRLEVBQUVDLEtBQUssU0FBQSxXQUFBQyxPQUFvQkgsV0FBUyxHQUFBLEVBQUFHLE9BQUl4QixrQkFBa0IsQ0FBRSxFQUFFeUIsS0FBSyxHQUFHO0VBQ3hGO0FBQ0EsUUFBTUMsbUJBQW1CQSxDQUFDQyxVQUErQkMsTUFBY0MsVUFBdUM7QUFDN0csV0FBT1AsRUFBRSxPQUFPLEVBQ2RRLFNBQVMsV0FBVyxFQUNwQkMsT0FDQVQsRUFBRSxPQUFPLEVBQ1BDLEtBQUssU0FBQSxHQUFBQyxPQUFZSyxPQUFLLGdCQUFBLENBQWdCLEVBQ3RDRyxJQUFJO01BQ0osY0FBYztNQUNkQyxTQUFTO0lBQ1YsQ0FBQyxFQUNBRixPQUFPVCxFQUFFLEtBQUssRUFBRVMsT0FBT1gsWUFBWVEsSUFBSSxFQUFFSSxJQUFJLGVBQWUsT0FBTyxHQUFHTCxRQUFRLENBQUMsQ0FDbEY7RUFDRjtBQUdBTCxJQUFFLE1BQU0sRUFBRVksSUFBSSwyQkFBMkIscUJBQXFCLFNBQVVDLEdBQUc7QUFBQSxRQUFBQztBQUMxRSxRQUFJbEIsZ0JBQWdCLFlBQVk7QUFDL0IsYUFBTztJQUNSO0FBRUEsVUFBTW1CLFFBQU87QUFFYixVQUFNQyxVQUFBRix3QkFBVUMsTUFBS0UsV0FBbUNDLFdBQUEsUUFBQUosMEJBQUEsU0FBQSxTQUF4Q0Esc0JBQStDSyxRQUFRMUIsdUJBQXVCLEVBQUU7QUFDaEcsVUFBTTJCLGFBR0YsQ0FBQztBQUNMLFFBQUlDO0FBQ0osUUFBSUM7QUFDSixRQUFJQztBQUNKLFFBQUlDO0FBQ0osVUFBTUMsV0FBV0EsTUFBTTtBQUNyQlYsTUFBQUEsTUFBS1csVUFBK0JSLFFBQUEsK0RBQUFoQixPQUM0QmEsTUFBS1csVUFBK0JSLEtBQUs7QUFFekdILE1BQUFBLE1BQUtFLFdBQW1DQyxRQUFRRjtJQUNsRDtBQUNBLFVBQU1XLGVBQWdCQyxTQUFnQjtBQUNyQzNDLFNBQUdZLFFBQVFnQyxJQUFJbEMsaUJBQWlCaUMsS0FBSyxLQUFLLEtBQUssS0FBSyxDQUFDO0lBQ3REO0FBQ0FSLGVBQVcsYUFBYSxJQUFJLFdBQVk7QUFBQSxVQUFBVTtBQUN2Q0wsZUFBUztBQUNULFdBQUFLLHdCQUFLVCxvQkFBb0IsQ0FBQyxPQUFBLFFBQUFTLDBCQUFBLFVBQXJCQSxzQkFBNkNDLFNBQVM7QUFDMURKLHFCQUFhLE1BQU07TUFDcEI7QUFDQTNCLFFBQUUsSUFBSSxFQUFFZ0MsT0FBTyxPQUFPO0lBQ3ZCO0FBQ0FaLGVBQVcsYUFBYSxJQUFJLFdBQVk7QUFBQSxVQUFBYTtBQUN2QyxXQUFBQSx5QkFBS1osb0JBQW9CLENBQUMsT0FBQSxRQUFBWSwyQkFBQSxVQUFyQkEsdUJBQTZDRixTQUFTO0FBQzFESixxQkFBYSxVQUFVO01BQ3hCO0FBQ0EzQixRQUFFLElBQUksRUFBRWdDLE9BQU8sT0FBTztJQUN2QjtBQUNBLFVBQU1FLFdBQVcsU0FBNkJDLElBQWtCO0FBQy9EQSxTQUFHQyxlQUFlO0FBQ2xCLFVBQUlkLGVBQWVlLFNBQVMsbUJBQW1CLEdBQUc7QUFDakQ7TUFDRDtBQUNBLFlBQU1DLE1BQTJCdEMsRUFBRSxJQUFJO0FBQ3ZDc0MsVUFBSUMsSUFBSSxPQUFPLEVBQUVwQyxLQUFLLGNBQWM7QUFDcENtQixxQkFBZWQsU0FBUyxtQkFBbUI7QUFDM0MsWUFBTWdDLFNBQTRCO1FBQ2pDQyxRQUFRO1FBQ1JDLFFBQVE7UUFDUkMsT0FBQSxRQUFBekMsT0FBZWpCLEdBQUdDLE9BQU9DLElBQUksWUFBWSxHQUFDLFlBQUE7UUFDMUN5RCxTQUFBLEdBQUExQyxPQUFZUixVQUFRLDhCQUFBO1FBQ3BCbUQsWUFBWVAsSUFBSVEsS0FBSyxTQUFTO01BQy9CO0FBQ0EsWUFBTUMsV0FBWUMsY0FBd0Q7QUFDekUsWUFBSSxDQUFDQSxVQUFVO0FBQ2Q7UUFDRDtBQUNBLFlBQUlBLFNBQVNDLE9BQU87QUFDbkIsZUFBS2hFLEdBQUdpRSxPQUFBLG1EQUFBaEQsT0FDNEM4QyxTQUFTQyxNQUFNRSxNQUFJLElBQUEsRUFBQWpELE9BQUs4QyxTQUFTQyxNQUFNRyxJQUFJLEdBQzlGO1lBQUNDLEtBQUs7WUFBZUMsTUFBTTtVQUFPLENBQ25DO0FBQ0FoQixjQUFJbkMsS0FBSyxhQUFhO1FBQ3ZCLE9BQU87QUFDTm1DLGNBQUluQyxLQUFLLE9BQU87QUFDaEJtQix5QkFBZWlDLFFBQVE7UUFDeEI7TUFDRDtBQUNBLFdBQUsvRCxJQUFJZ0UsY0FBYyxRQUFRaEIsTUFBTSxFQUFFaUIsS0FBS1YsUUFBUTtJQUNyRDtBQU1BLFVBQU1XLFNBQVNBLE1BQU07QUFDcEJyQyw0QkFBc0JyQixFQUFFLFNBQVMsRUFDL0JDLEtBQUs7UUFDTHFELE1BQU07UUFDTkssSUFBSTtNQUNMLENBQUMsRUFDQUMsR0FBRyxVQUFVLFdBQVk7QUFDekIsWUFBSyxLQUEwQjdCLFNBQVM7QUFDdkNULHlCQUFldUMsT0FBTztRQUN2QixPQUFPO0FBQ052Qyx5QkFBZWlDLFFBQVE7UUFDeEI7TUFDRCxDQUFDO0FBQ0ZoQyxzQkFBZ0J2QixFQUFFLE1BQU07QUFDeEJBLFFBQUUsTUFBTSxFQUNOUyxPQUNBVCxFQUFFLEtBQUssRUFDTEMsS0FBSyxRQUFRLEdBQUcsRUFDaEJFLEtBQUssdUJBQXVCLEVBQzVCMkMsS0FBSyxXQUFXLGlEQUFpRCxFQUNqRWMsR0FBRyxTQUFTMUIsUUFBUSxDQUN2QixFQUNDNEIsU0FBU3ZDLGFBQWE7QUFDeEJ2QixRQUFFLE1BQU0sRUFDTlMsT0FDQVQsRUFBRSxLQUFLLEVBQ0xDLEtBQUssUUFBUSxHQUFHLEVBQ2hCRSxLQUFLLDBFQUEwRSxFQUMvRTJDLEtBQUssV0FBVywyQ0FBMkMsRUFDM0RjLEdBQUcsU0FBUzFCLFFBQVEsQ0FDdkIsRUFDQzRCLFNBQVN2QyxhQUFhO0FBQ3hCRCx1QkFBaUJsQixpQkFDaEJKLEVBQUUsUUFBUSxFQUFFRyxLQUFLLHdDQUF3QyxFQUFFTSxPQUFPYyxhQUFhLEdBQy9FLGdCQUNBLG9CQUNEO0FBQ0FDLGdCQUFVeEIsRUFBRSxPQUFPLEVBQ2pCUyxPQUNBVCxFQUFFLFFBQVEsRUFDUlUsSUFBSTtRQUNKLGFBQWE7UUFDYixlQUFlO01BQ2hCLENBQUMsRUFDQUQsT0FDQVQsRUFBRSxRQUFRLEVBQUVHLEtBQUssd0JBQXdCLEVBQUVPLElBQUk7UUFDOUMsb0JBQW9CO1FBQ3BCLG1CQUFtQjtRQUNuQnFELFNBQVM7TUFDVixDQUFDLEdBQ0QvRCxFQUFFLFFBQVEsRUFBRUcsS0FBSyxJQUFJLENBQ3RCLENBQ0YsRUFDQ00sT0FDQSxRQUNBWSxxQkFDQXJCLEVBQUUsU0FBUyxFQUFFQyxLQUFLLE9BQU8saUNBQWlDLEVBQUVFLEtBQUssaUJBQWlCLEdBQ2xGLE1BQ0QsRUFDQ00sT0FBT3hCLEdBQUcrRSxLQUFLQyxPQUFPLElBQUksS0FBSzNDLGVBQWU0QyxLQUFLLENBQUM7QUFDdEQxQyxjQUFRUSxPQUFPO1FBQ2RtQyxPQUFPO1FBQ1BDLGVBQWU7UUFDZnpCLE9BQU87UUFDUDBCLE9BQU87UUFDUEMsU0FBU2xEO1FBQ1RtRCxPQUFPQSxNQUFNO0FBQ1osZ0JBQU1DLFFBQVF4RSxFQUFFLE1BQU07QUFDdEJ3RSxnQkFBTUMsS0FBSyxtQkFBbUIsRUFBRUMsUUFBUSxRQUFRO1FBQ2pEO1FBQ0FDLE9BQU87QUFDTixnQkFBTUMsV0FBVzVFLEVBQUUsSUFBSSxFQUFFNkUsT0FBTyxFQUFFSixLQUFLLDhCQUE4QjtBQUNyRUcsbUJBQVNFLEdBQUcsQ0FBQyxFQUFFQyxPQUFPO1lBQ3JCQyxPQUFPO2NBQ05DLFNBQVM7WUFDVjtVQUNELENBQUM7QUFDREwsbUJBQVNFLEdBQUcsQ0FBQyxFQUFFQyxPQUFPO1lBQ3JCQyxPQUFPO2NBQ05DLFNBQVM7WUFDVjtVQUNELENBQUM7UUFDRjtNQUNELENBQUM7SUFDRjtBQUVBLFFBQUlqRSxXQUFZRCxNQUFLRSxXQUFtQ0MsT0FBTztBQUM5RCxVQUFJOUIsT0FBTzhGLDRCQUE0QnRGLGdCQUFnQixRQUFRO0FBQzlENkIsaUJBQVM7QUFDVCxlQUFPO01BQ1I7QUFDQVosUUFBRXVCLGVBQWU7QUFDakJzQixhQUFPO0lBQ1I7QUFDQSxXQUFPO0VBQ1IsQ0FBQztBQUVELFFBQU15QixVQUFVbkYsRUFBRSxLQUFLLEVBQ3JCQyxLQUFLO0lBQ0xtRixNQUFNO0lBQ056QyxPQUFPO0VBQ1IsQ0FBQyxFQUNBbEMsT0FBTyxLQUFLLEVBQ1pOLEtBQUssc0JBQXNCO0FBQzdCZ0YsVUFBUXZCLEdBQUcsU0FBUyxTQUFVL0MsR0FBRztBQUNoQ0EsTUFBRXVCLGVBQWU7QUFDakIsVUFBTUUsTUFBTXRDLEVBQUUsSUFBSTtBQUNsQnNDLFFBQUlDLElBQUksT0FBTztBQUNmLFVBQU04QyxTQUFVQyxZQUFtQjtBQUNsQyxVQUFJLENBQUNBLFFBQVE7QUFDWjtNQUNEO0FBQ0FoRCxVQUFJbkMsS0FBSyxRQUFRO0FBQ2pCLFlBQU1BLE9BQU9tRixPQUFPbkUsUUFBUTFCLHVCQUF1QixFQUFFO0FBQ3JELFVBQUlVLFNBQVNtRixRQUFRO0FBQ3BCaEQsWUFBSW5DLEtBQUsscUJBQXFCO0FBQzlCO01BQ0Q7QUFDQSxZQUFNcUMsU0FBNEI7UUFDakNyQztRQUNBc0MsUUFBUTtRQUNSQyxRQUFRO1FBQ1JDLE9BQU8xRCxHQUFHQyxPQUFPQyxJQUFJLFlBQVk7UUFDakN5RCxTQUFBLEdBQUExQyxPQUFZUixVQUFRLG1HQUFBO1FBQ3BCNkYsVUFBVTtNQUNYO0FBQ0EsWUFBTXhDLFdBQVlDLGNBQXdEO0FBQ3pFLFlBQUksQ0FBQ0EsVUFBVTtBQUNkO1FBQ0Q7QUFDQSxZQUFJQSxTQUFTQyxPQUFPO0FBQ25CLGVBQUtoRSxHQUFHaUUsT0FBQSxxREFBQWhELE9BQzhDOEMsU0FBU0MsTUFBTUUsTUFBSSxJQUFBLEVBQUFqRCxPQUFLOEMsU0FBU0MsTUFBTUcsSUFBSSxHQUNoRztZQUNDQyxLQUFLO1lBQ0xDLE1BQU07VUFDUCxDQUNEO0FBQ0FoQixjQUFJbkMsS0FBSyxhQUFhO1FBQ3ZCLE9BQU87QUFDTm1DLGNBQUluQyxLQUFLLFlBQVk7UUFDdEI7QUFDQSxjQUFNcUUsUUFBUXhFLEVBQUUsTUFBTTtBQUN0QndFLGNBQU1DLEtBQUssa0JBQWtCLEVBQUVsQixRQUFRO01BQ3hDO0FBQ0FqQixVQUFJbkMsS0FBSyxTQUFTO0FBQ2xCLFdBQUtYLElBQUlnRSxjQUFjLFFBQVFoQixNQUFNLEVBQUVpQixLQUFLVixRQUFRO0lBQ3JEO0FBQ0FULFFBQUluQyxLQUFLLE9BQU87QUFDaEIsU0FBS0gsRUFBRXdGLEtBQUs7TUFDWEMsS0FBS3hHLEdBQUdDLE9BQU9DLElBQUksVUFBVTtNQUM3QjJELE1BQU07UUFDTEwsUUFBUTtRQUNSRSxPQUFPMUQsR0FBR0MsT0FBT0MsSUFBSSxZQUFZLEVBQUVnQyxRQUFRLE1BQU0sR0FBRztNQUNyRDtNQUNBdUUsVUFBVTtNQUNWekMsT0FBT0EsTUFBTTtBQUNaWCxZQUFJbkMsS0FBSyxRQUFRO01BQ2xCO01BQ0F3RixTQUFTTjtNQUNUL0IsTUFBTTtNQUNOc0MsT0FBTztJQUNSLENBQUM7RUFDRixDQUFDO0FBQ0Q1RixJQUFFLFNBQVM2RixrQkFBa0I7QUFDNUIsVUFBTXJCLFFBQVF4RSxFQUFFLE1BQU07QUFDdEJ3RSxVQUFNQyxLQUFLLFdBQVcsRUFBRUEsS0FBSyxVQUFVLEVBQUVoRSxPQUFPVCxFQUFFLE1BQU0sRUFBRVMsT0FBTzBFLE9BQU8sQ0FBQztFQUMxRSxDQUFDO0FBQ0YsR0FBRzs7QUNoU0gsSUFBQVcscUJBQTRCbEgsUUFBQSxpQkFBQTs7QUNINUIsSUFBTW1ILGFBQWFBLENBQUNDLFFBQWdCQyxTQUEyQjtBQUM5REQsUUFBQSxVQUFBOUYsT0FBZ0I4RixHQUFHO0FBSW5CLFNBQU8vRyxHQUFHaUgsUUFBUUYsS0FBSyxHQUFHQyxJQUFJLEVBQUVFLE1BQU07QUFDdkM7O0FDTkEsSUFBTUMsaUJBQWlCQSxNQUFZO0FBQ2xDLFFBQU07SUFBQ0M7RUFBYyxJQUFJcEgsR0FBR0MsT0FBT0MsSUFBSTtBQUV2QyxNQUFJLENBQUMsV0FBVyxTQUFTLFNBQVMsT0FBTyxFQUFFbUgsU0FBU0QsY0FBYyxHQUFHO0FBQ3BFcEgsT0FBR3NILFNBQVMxRSxJQUFJO01BQ2YsK0JBQStCO01BQy9CLG9DQUFvQztNQUNwQyw2QkFBNkI7O01BRTdCLGlDQUFpQztNQUNqQyxnQ0FBZ0M7TUFDaEMsOEJBQThCO01BQzlCLGdDQUFnQztNQUNoQyxpQ0FBaUM7O01BRWpDLDBCQUEwQjs7O01BRzFCLHlCQUF5QjtNQUN6QixnQ0FBZ0M7Ozs7TUFJaEMsNEJBQTRCOzs7OztNQUs1Qix5QkFBeUI7TUFDekIsNkJBQTZCOzs7Ozs7OztNQVE3QixtQ0FBbUM7OztNQUduQywwQkFBMEI7OztNQUcxQixzQkFBc0I7OztNQUd0QiwwQkFBMEI7OztNQUcxQiwrQkFDQzs7TUFFRCxxQkFBcUI7O01BRXJCLG1DQUFtQztNQUNuQyxnQ0FBZ0M7TUFDaEMsZ0NBQWdDO01BQ2hDLDhCQUE4QjtNQUM5QixpQ0FBaUM7O01BRWpDLDBCQUEwQjtNQUMxQiwwQkFBMEI7TUFDMUIsdUJBQXVCO01BQ3ZCLDJCQUEyQjtNQUMzQix3QkFBd0I7TUFDeEIsd0JBQXdCO01BQ3hCLHNCQUFzQjs7TUFFdEIsd0JBQXdCO0lBQ3pCLENBQUM7RUFDRixPQUFPO0FBQ041QyxPQUFHc0gsU0FBUzFFLElBQUk7TUFDZiwrQkFBK0I7TUFDL0Isb0NBQW9DO01BQ3BDLDZCQUE2Qjs7TUFFN0IsaUNBQWlDO01BQ2pDLGdDQUFnQztNQUNoQyw4QkFBOEI7TUFDOUIsZ0NBQWdDO01BQ2hDLGlDQUFpQzs7TUFFakMsMEJBQTBCOzs7TUFHMUIseUJBQXlCO01BQ3pCLGdDQUFnQzs7OztNQUloQyw0QkFBNEI7Ozs7O01BSzVCLDZCQUE2Qjs7Ozs7Ozs7TUFRN0IsbUNBQW1DOzs7TUFHbkMsMEJBQTBCOzs7TUFHMUIsc0JBQXNCOzs7TUFHdEIsMEJBQTBCOzs7TUFHMUIsK0JBQ0M7O01BRUQscUJBQXFCOztNQUVyQixtQ0FBbUM7TUFDbkMsZ0NBQWdDO01BQ2hDLGdDQUFnQztNQUNoQyw4QkFBOEI7TUFDOUIsaUNBQWlDOztNQUVqQywwQkFBMEI7TUFDMUIsMEJBQTBCO01BQzFCLHVCQUF1QjtNQUN2QiwyQkFBMkI7TUFDM0Isd0JBQXdCO01BQ3hCLHdCQUF3QjtNQUN4QixzQkFBc0I7O01BRXRCLHdCQUF3QjtJQUN6QixDQUFDO0VBQ0Y7QUFDRDs7Ozs7O0FGckhBdUUsZUFBZTtDQUdkLFNBQVNJLFNBQVM7QUFHbEIsUUFBTUMsT0FBT3hILEdBQUdDLE9BQU93SDtBQUV2QixNQUFLdEgsT0FBT3VILFVBQVUsQ0FBQ3ZILE9BQU91SCxPQUFPQyxZQUFhSCxLQUFLSSxhQUFhLFFBQVE7QUFDM0U7RUFDRDtBQUVBLFFBQU1ySCxNQUFNWCxNQUFNLFlBQVk7QUFFOUJPLFNBQU91SCxTQUFTOzs7SUFHZkcsT0FBTztNQUNOQyxRQUFRO01BQ1JDLFFBQVE7TUFDUkMsS0FBSztNQUNMQyxTQUFTO01BQ1RDLE1BQU07TUFDTkMsTUFBTTtNQUNOQyxJQUFJO0lBQ0w7SUFDQUMsV0FBVzs7SUFFWEMsVUFBVTs7SUFFVkMsU0FBU0EsTUFBTTtBQUNkLFlBQU1DLEtBQUtoQixLQUFLaUI7QUFDaEIsWUFBTUMsUUFBUWxCLEtBQUttQjtBQUNuQixhQUNDSCxLQUFLO01BRUxBLE9BQU87TUFFUEEsT0FBTztNQUVQQSxPQUFPO01BRU5BLE9BQU8sS0FBSyxDQUFDaEIsS0FBS29CO01BRWxCSixPQUFPLEtBQUssY0FBY0ssS0FBS3JCLEtBQUtzQixPQUFPO01BRTNDSixVQUFVRixPQUFPRSxNQUFNSyxXQUFXUCxPQUFPRSxNQUFNTSxhQUFhUixPQUFPRSxNQUFNTztJQUU1RTs7O0lBR0FDLGNBQWM7O0lBRWRDLFdBQVdDO0lBQ1hDLFVBQVVDOzs7OztJQUtWQyxxQkFBcUIsQ0FBQzs7Ozs7Ozs7O0lBU3RCQyxxQkFBcUI7O0lBRXJCQyxpQkFBaUI7Ozs7O0lBS2pCQyxXQUFXOzs7SUFHWEMsWUFBWTs7O0lBR1pDLGVBQWU7Ozs7SUFJZkMsZ0JBQWdCOzs7SUFHaEJDLGVBQWU7O0lBRWZDLGVBQWU7O0lBRWZDLGFBQWE7O0lBRWJDLGNBQWM7O0lBRWRDLGFBQWE7O0lBRWJDLFVBQVU7O0lBRVZDLGNBQWM7Ozs7SUFJZEMsdUJBQXVCO0lBQ3ZCQyxXQUFXO0lBQ1hDLGNBQWVDLFNBQVE7QUFBQSxVQUFBQztBQUN0QixVQUFJLENBQUNELEtBQUs7QUFDVDtNQUNEO0FBQ0EsT0FBQUMsaUJBQUF0SyxPQUFPdUgsUUFBTzRDLGNBQWRHLGVBQWNILFlBQWMsQ0FBQztBQUM3QixlQUFTSSxLQUFLRixLQUFLO0FBQ2xCLFlBQUksQ0FBQ0csT0FBT0MsT0FBT0osS0FBS0UsQ0FBQyxLQUFLLE9BQU9BLE1BQU0sVUFBVTtBQUNwRDtRQUNEO0FBQ0EsWUFBSUcsSUFBSUwsSUFBSUUsQ0FBQztBQUNiLFlBQUksT0FBT0csTUFBTSxVQUFVO0FBQzFCO1FBQ0Q7QUFDQUgsWUFBSUEsRUFBRUksS0FBSztBQUNYRCxZQUFJQSxFQUFFQyxLQUFLO0FBQ1gsWUFBSUosRUFBRUssV0FBVyxLQUFLRixFQUFFRSxXQUFXLEdBQUc7QUFDckM7UUFDRDtBQUNBNUssZUFBT3VILE9BQU80QyxVQUFVSSxDQUFDLElBQUlHO01BQzlCO0lBQ0Q7RUFDRDtBQUNBLFFBQU1HLEtBQUs3SyxPQUFPdUg7QUFHbEIsUUFBTXVELEtBQUtDLFVBQVVyTCxVQUFVc0wsWUFBWTtBQUMzQyxRQUFNQyxZQUFZLG1CQUFtQnZDLEtBQUtvQyxFQUFFLEtBQUssQ0FBQ0EsR0FBRzVELFNBQVMsU0FBUztBQUN2RSxNQUFJZ0UsYUFBYTtBQUNqQixNQUFJQyxnQkFBZ0I7QUFHcEIsUUFBTUMsZ0JBQWdCQyxPQUFPQyxJQUFBQyxvQkFBQUEsa0JBQUFDLHVCQUFBLENBQUEsNkJBQUEsR0FBQSxDQUFBLCtFQUFBLENBQUEsRUFBQTtBQUM3QixRQUFNQyxrQkFBa0IsSUFBSUMsT0FBT04sZUFBZSxHQUFHO0FBU3JELFFBQU1PLHNCQUFzQk4sT0FBT0MsSUFBQU0scUJBQUFBLG1CQUFBSix1QkFBQSxDQUFBLDBCQUFBLEdBQUEsQ0FBQSx1RkFBQSxDQUFBLEVBQUE7QUFTbkMsUUFBTUssc0JBQXNCeEUsS0FBS3lFO0FBQ2pDLFFBQU1DLGVBQWUxRSxLQUFLbUI7QUFDMUIsUUFBTXdELGVBQWVBLENBQUNDLGlCQUFpQkMsYUFBYTtBQUNuRCxVQUFNQyxrQkFBbUJDLFVBQVM7QUFDakMsVUFBSSxDQUFDQSxRQUFRQSxLQUFLeEIsV0FBVyxHQUFHO0FBQy9CO01BQ0Q7QUFDQSxVQUFJeUIsYUFBYTtBQUNqQixlQUFTQyxJQUFJLEdBQUdBLElBQUlGLEtBQUt4QixRQUFRMEIsS0FBSztBQUNyQyxjQUFNQyxVQUFVSCxLQUFLSSxPQUFPRixDQUFDO0FBQzdCLGNBQU1HLEtBQUtGLFFBQVF2QixZQUFZO0FBQy9CLGNBQU0wQixLQUFLSCxRQUFRSSxZQUFZO0FBQy9CTixzQkFBY0ksT0FBT0MsS0FBS0gsVUFBQSxJQUFBekwsT0FBYzJMLEVBQUUsRUFBQTNMLE9BQUc0TCxJQUFFLEdBQUE7TUFDaEQ7QUFDQSxhQUFPTCxXQUFXdEssUUFBUSxtQkFBbUJzSixPQUFPQyxJQUFBc0IscUJBQUFBLG1CQUFBcEIsdUJBQUEsQ0FBQSxJQUFBLEdBQUEsQ0FBQSxNQUFBLENBQUEsRUFBQSxDQUFRLEVBQUV6SixRQUFRMEosaUJBQWlCTCxhQUFhO0lBQ3JHO0FBQ0FjLGVBQVdBLFNBQVNsQixZQUFZO0FBQ2hDLFVBQU02QixZQUFZaEIsb0JBQW9CUixPQUFPWSxlQUFlLENBQUMsRUFBRWpCLFlBQVk7QUFDM0UsUUFBSThCLFNBQVNYLGdCQUFnQlUsU0FBUztBQUN0QyxRQUFJWCxZQUFZVyxjQUFjWCxVQUFVO0FBQ3ZDWSxnQkFBQSxJQUFBaE0sT0FBY3FMLGdCQUFnQkQsUUFBUSxDQUFDO0lBQ3hDO0FBQ0EsUUFBSUgsY0FBYztBQUNqQixpQkFBV2dCLFlBQVloQixjQUFjO0FBQ3BDLFlBQ0MsT0FBT2dCLGFBQWEsWUFDcEJBLFNBQVMvQixZQUFZLE1BQU02QixhQUMzQkUsU0FBUy9CLFlBQVksTUFBTWtCLFlBQzNCSCxhQUFhZ0IsUUFBUSxNQUFNZCxpQkFDMUI7QUFDRGEsb0JBQUEsSUFBQWhNLE9BQWNxTCxnQkFBZ0JZLFFBQVEsQ0FBQztRQUN4QztNQUNEO0lBQ0Q7QUFDQSxXQUFPRDtFQUNSO0FBQ0FqQyxLQUFHbUMscUJBQXFCbkIsb0JBQW9CLElBQUk7QUFDaERoQixLQUFHb0Msa0JBQWtCakIsYUFBYSxJQUFJLFVBQVU7QUFDaEQsTUFBSUgsb0JBQW9CLElBQUksR0FBRztBQUM5QmhCLE9BQUdxQyxrQkFBa0JsQixhQUFhLElBQUksVUFBVTtFQUNqRDtBQUlBLFFBQU1tQixPQUFPQSxDQUFDQyxLQUFLQyxZQUFZO0FBQzlCLFFBQUksQ0FBQ0QsS0FBSztBQUNULGFBQU87SUFDUjtBQUNBLFdBQU9DLFVBQVVuTixTQUFTb04sZUFBZUYsR0FBRyxJQUFJbE4sU0FBU3FOLGNBQWNILEdBQUc7RUFDM0U7QUFDQSxRQUFNSSxRQUFRQSxDQUFDcEIsTUFBTXFCLFFBQVE7QUFDNUJBLFlBQUFBLE1BQVF2TixTQUFTd04sU0FBUzFIO0FBQzFCLFVBQU0ySCxLQUFLLElBQUlqQyxPQUFBLE9BQUE1SyxPQUFjc0wsTUFBSSxXQUFBLENBQVc7QUFDNUMsVUFBTXdCLElBQUlELEdBQUdFLEtBQUtKLEdBQUc7QUFDckIsUUFBSUcsS0FBS0EsRUFBRWhELFNBQVMsR0FBRztBQUN0QixhQUFPa0QsbUJBQW1CRixFQUFFLENBQUMsQ0FBQztJQUMvQjtBQUNBLFdBQU87RUFDUjtBQUNBLFFBQU1ySyxRQUFTeUMsVUFBUztBQUN2QixRQUFJLENBQUNBLE1BQU07QUFDVixhQUFPO0lBQ1I7QUFDQSxVQUFNK0gsU0FBQSxHQUFBak4sT0FBWXVHLEtBQUsyRyxVQUFRLEdBQUE7QUFDL0IsUUFDQ2hJLEtBQUtpSSxRQUFRRixNQUFNLE1BQU0sS0FDekIvSCxLQUFLaUksUUFBUTVHLEtBQUs2RyxXQUFXSCxNQUFNLE1BQU0sS0FDeEMxRyxLQUFLNkcsU0FBU0MsTUFBTSxHQUFHLENBQUMsTUFBTSxRQUM5Qm5JLEtBQUtpSSxRQUFRL04sU0FBU3dOLFNBQVNVLFdBQVcvRyxLQUFLNkcsV0FBV0gsTUFBTSxNQUFNLEdBQ3RFO0FBRUQsYUFBT1AsTUFBTSxTQUFTeEgsSUFBSTtJQUMzQjtBQUVBLFFBQUlxSSxTQUFTaEgsS0FBS2lILGNBQWN2TSxRQUFRLE1BQU0sRUFBRTtBQUNoRCxRQUFJaUUsS0FBS2lJLFFBQVFJLE1BQU0sR0FBRztBQUN6QkEsZUFBU2hILEtBQUs2RyxXQUFXRztJQUMxQjtBQUNBLFFBQUlySSxLQUFLaUksUUFBUUksTUFBTSxLQUFLQSxPQUFPRixNQUFNLEdBQUcsQ0FBQyxNQUFNLE1BQU07QUFDeERFLGVBQVNuTyxTQUFTd04sU0FBU1UsV0FBV0M7SUFDdkM7QUFDQSxRQUFJckksS0FBS2lJLFFBQVFJLE1BQU0sTUFBTSxHQUFHO0FBQy9CLGFBQU9QLG1CQUFtQjlILEtBQUttSSxNQUFNRSxPQUFPekQsTUFBTSxDQUFDO0lBQ3BEO0FBQ0EsV0FBTztFQUNSO0FBQ0EsUUFBTTNILFdBQVdBLENBQUM7SUFBQ3NMO0VBQVMsR0FBR25DLFNBQVM7QUFDdkMsV0FBTyxJQUFBdEwsT0FBSXlOLFdBQVMsR0FBQSxFQUFJckgsU0FBQSxJQUFBcEcsT0FBYXNMLE1BQUksR0FBQSxDQUFHO0VBQzdDO0FBQ0EsUUFBTW9DLGFBQWNDLFNBQVE7QUFDM0IsUUFBSSxDQUFDQSxPQUFPQSxJQUFJN0QsV0FBVyxHQUFHO0FBQzdCLGFBQU82RDtJQUNSO0FBQ0EsV0FBT0EsSUFBSU4sTUFBTSxHQUFHLENBQUMsRUFBRXhCLFlBQVksSUFBSThCLElBQUlOLE1BQU0sQ0FBQztFQUNuRDtBQUNBLFFBQU1PLGVBQWdCQyxjQUFhO0FBQ2xDLFdBQU90SCxLQUFLaUgsY0FBY3ZNLFFBQVEsTUFBTTZNLG1CQUFtQkQsUUFBUSxFQUFFNU0sUUFBUSxRQUFRLEdBQUcsRUFBRUEsUUFBUSxRQUFRLEdBQUcsQ0FBQztFQUMvRztBQUNBLFFBQU04TSxXQUFZSixTQUFRO0FBQ3pCLFdBQU9BLElBQUkxTSxRQUFRLHNCQUFzQnNKLE9BQU9DLElBQUF3RCxxQkFBQUEsbUJBQUF0RCx1QkFBQSxDQUFBLElBQUEsR0FBQSxDQUFBLE1BQUEsQ0FBQSxFQUFBLENBQVE7RUFDekQ7QUFDQSxRQUFNdUQsb0JBQXFCQyxhQUFZO0FBQ3RDQSxnQkFBQUEsVUFBWSxDQUFDO0FBQ2IsVUFBTUMsT0FBT0QsUUFBUUUsYUFBYTtBQUNsQyxVQUFNQSxZQUFZTCxTQUFTSSxJQUFJO0FBQy9CLFVBQU1FLFNBQVNOLFNBQVNHLFFBQVFHLFVBQVUsR0FBRztBQUM3QyxVQUFNQyxTQUFTUCxTQUFTRyxRQUFRSSxVQUFVLEdBQUc7QUFDN0MsVUFBTXpCLEtBQUssSUFBSWpDOztNQUFBLE1BQUE1SyxPQUVSb08sV0FBUyxHQUFBLEVBQUFwTyxPQUFJb08sV0FBUyxRQUFBLEVBQUFwTyxPQUVyQm9PLFdBQVMsYUFBQSxFQUFBcE8sT0FFVG9PLFdBQVMsS0FBQSxFQUFBcE8sT0FBTXFPLFFBQU0sS0FBQSxFQUFBck8sT0FBTXFPLE1BQU0sRUFBQXJPLE9BQUdzTyxRQUFNLEtBQUEsRUFBQXRPLE9BQU1zTyxRQUFNLFFBQUEsRUFBQXRPLE9BRXREb08sV0FBUyxTQUFBLEVBQUFwTyxPQUFVb08sU0FBUyxFQUFBcE8sT0FBR3FPLFFBQU0sb0JBQUE7TUFDNUM7SUFDRDtBQUVBLFdBQU8sQ0FBQ1YsS0FBS3BFLFFBQVE7QUFDcEIsVUFBSSxDQUFDQSxLQUFLO0FBQ1QsZUFBT29FO01BQ1I7QUFDQSxhQUFPQSxJQUFJMU0sUUFBUTRMLElBQUksQ0FBQzBCLE9BQU9oQixRQUFRaUIsS0FBSzFJLEtBQUsySSxVQUFVO0FBQzFELFlBQUlsQixXQUFXWSxNQUFNO0FBQ3BCLGlCQUFPQTtRQUNSO0FBQ0EsY0FBTTFFLElBQUlnRixTQUFTM0ksT0FBTzBJO0FBQzFCLGNBQU1FLGNBQWMsT0FBT25GLElBQUlFLENBQUMsTUFBTSxhQUFhRixJQUFJRSxDQUFDLEVBQUU4RSxPQUFPOUUsQ0FBQyxJQUFJRixJQUFJRSxDQUFDO0FBQzNFLGVBQU8sT0FBT2lGLGdCQUFnQixXQUFXQSxjQUFjQSxlQUFlSDtNQUN2RSxDQUFDO0lBQ0Y7RUFDRDtBQUNBLFFBQU1JLG9CQUFvQixNQUFNO0FBQy9CLFVBQU1DLGNBQWNYLGtCQUFrQjtNQUNyQ0csV0FBVztNQUNYQyxRQUFRO01BQ1JDLFFBQVE7SUFDVCxDQUFDO0FBQ0QsV0FBTyxDQUFDWCxLQUFLcEUsUUFBUTtBQUNwQixZQUFNc0YsSUFBSUQsWUFBWWpCLEtBQUtwRSxHQUFHO0FBQzlCLGFBQU9RLEdBQUd4QixzQkFBc0JtRixXQUFXbUIsQ0FBQyxJQUFJQTtJQUNqRDtFQUNELEdBQUc7QUFFSCxRQUFNQyxhQUFhLElBQUlsRSxPQUFBLFNBQUE1SyxPQUNiNksscUJBQW1CLEtBQUEsRUFBQTdLLE9BQU0rSixHQUFHb0MsaUJBQWUsR0FBQSxFQUFBbk0sT0FBSTZLLHFCQUFtQixnQkFBQSxHQUMzRSxHQUNEO0FBQ0EsUUFBTWtFLGtCQUFtQlIsV0FBVTtBQUNsQyxXQUFPQSxNQUFNdE4sUUFBUSxZQUFZLEdBQUc7RUFDckM7QUFDQSxRQUFNK04sZ0JBQWdCQSxDQUFDQyxVQUFVQyxVQUFVQyxTQUFTO0FBQ25ELFFBQUlDLFlBQVk7QUFDaEIsUUFBSXJGLEdBQUd6QixvQkFBb0I0RyxRQUFRLEdBQUc7QUFDckNFLGtCQUFZLElBQUl4RSxPQUFBLFNBQUE1SyxPQUNONksscUJBQW1CLEdBQUEsRUFBQTdLLE9BQUkrSixHQUFHcUMsaUJBQWUsS0FBQSxFQUFBcE0sT0FBTTZLLHFCQUFtQixNQUFBLEVBQUE3SyxPQUFPNksscUJBQW1CLEtBQUEsRUFBQTdLLE9BQU0rSixHQUFHekIsb0JBQW9CNEcsUUFBUSxHQUFDLEdBQUEsRUFBQWxQLE9BQUk2SyxxQkFBbUIsaUJBQUEsR0FDbEssR0FDRDtJQUNELE9BQU87QUFDTixZQUFNb0IsV0FBVzhCLFNBQVNtQixRQUFRO0FBQ2xDLFlBQU16RCxVQUFVUSxTQUFTb0IsTUFBTSxHQUFHLENBQUM7QUFDbkMrQixrQkFBWSxJQUFJeEUsT0FBQSxTQUFBNUssT0FDTjZLLHFCQUFtQixHQUFBLEVBQUE3SyxPQUFJK0osR0FBR29DLGlCQUFlLEdBQUEsRUFBQW5NLE9BQUk2SyxxQkFBbUIsR0FBQSxFQUFBN0ssT0FBSTZLLG1CQUFtQixFQUFBN0ssT0FDL0Z5TCxZQUFZLFFBQVEsQ0FBQzFCLEdBQUd4QixzQkFDckJrRCxVQUFBLElBQUF6TCxPQUNJeUwsUUFBUUksWUFBWSxDQUFDLEVBQUE3TCxPQUFHeUwsUUFBUXZCLFlBQVksR0FBQyxHQUFBLENBQ3JELEVBQUFsSyxPQUFHaU0sU0FBU29CLE1BQU0sQ0FBQyxFQUFFcE0sUUFBUTBKLGlCQUFpQkwsYUFBYSxDQUFDLEVBQUF0SyxPQUFHNksscUJBQW1CLGlCQUFBLEdBQ2xGLEdBQ0Q7SUFDRDtBQUNBLFFBQUlzRSxNQUFNO0FBQ1QsYUFBT0MsVUFBVXJDLEtBQUtrQyxRQUFRO0lBQy9CO0FBQ0EsVUFBTUksY0FBYyxJQUFJekUsT0FBTyxNQUFNNUssT0FBTyxTQUFTdUssT0FBT0MsSUFBQThFLHFCQUFBQSxtQkFBQTVFLHVCQUFBLENBQUEsYUFBQSxHQUFBLENBQUEsaUJBQUEsQ0FBQSxFQUFBLEdBQW9CLFFBQVEsR0FBRyxHQUFHLEdBQUc7QUFDakcsVUFBTTZFLGFBQWFOLFNBQVNoTyxRQUFRLHFCQUFxQjhOLGVBQWUsRUFBRTlOLFFBQVFvTyxhQUFhTixlQUFlO0FBQzlHLFVBQU0zSixTQUFTLENBQUE7QUFDZixRQUFJb0ssYUFBYTtBQUNqQixZQUFRQSxhQUFhSixVQUFVckMsS0FBS3dDLFVBQVUsT0FBTyxNQUFNO0FBQzFEbkssYUFBT0EsT0FBTzBFLE1BQU0sSUFBSTtRQUN2QnlFLE9BQU9pQjtNQUNSO0lBQ0Q7QUFDQXBLLFdBQU95SCxLQUFLdUM7QUFDWixXQUFPaEs7RUFDUjtBQUNBLE1BQUlxSyxrQkFBa0I7QUFDdEIsUUFBTUMsa0JBQWtCQSxDQUFDVCxVQUFVVSxVQUFVQyxPQUFPOUosS0FBSytKLGNBQWM7QUFDdEUsVUFBTUMsc0JBQXVCQyxlQUFjO0FBQzFDLFlBQU1WLGNBQWMsSUFBSXpFLE9BQU8sTUFBTTVLLE9BQU8sU0FBU3VLLE9BQU9DLElBQUF3RixxQkFBQUEsbUJBQUF0Rix1QkFBQSxDQUFBLGFBQUEsR0FBQSxDQUFBLGlCQUFBLENBQUEsRUFBQSxHQUFvQixRQUFRLEdBQUcsR0FBRyxHQUFHO0FBQ2pHLFlBQU02RSxhQUFhUSxVQUNqQjlPLFFBQVEscUJBQXFCOE4sZUFBZSxFQUM1QzlOLFFBQVFvTyxhQUFhTixlQUFlO0FBRXRDLFVBQUlrQixRQUFRO0FBQ1puQixpQkFBV29CLFlBQVk7QUFDdkIsYUFBT3BCLFdBQVcvQixLQUFLd0MsVUFBVSxNQUFNLE1BQU07QUFDNUNVLGdCQUFRbkIsV0FBV29CO01BQ3BCO0FBQ0EsVUFBSUQsUUFBUSxHQUFHO0FBRWQsWUFBSTFCLFFBQVE7QUFDWixZQUFJa0IsaUJBQWlCO0FBQ3BCbEIsa0JBQVFrQixnQkFBZ0IxQyxLQUFLd0MsVUFBVTtRQUN4QyxPQUFPO0FBSU5oQixrQkFBUSxnRkFBZ0Z4QixLQUN2RndDLFVBQ0Q7UUFDRDtBQUNBLFlBQUloQixPQUFPO0FBQ1YsV0FBQztZQUFDMEI7VUFBSyxJQUFJMUI7UUFDWjtBQUNBLGVBQU87VUFDTkMsS0FBS3lCO1VBQ0xFLE9BQU87UUFDUjtNQUNEO0FBQ0EsYUFBTztRQUNOM0IsS0FBS3lCO1FBQ0xFLE9BQU9GLFNBQVM7TUFDakI7SUFDRDtBQUNBLFVBQU12TixVQUFVLENBQUE7QUFDaEIsVUFBTTBOLFlBQVlyRyxHQUFHbUM7QUFDckIsVUFDQ21FLFlBQVlWLFlBQVlDLFNBQVNELGFBQWFDLFNBQVNBLE1BQU05RixTQUFTO0FBQ3ZFLFFBQUl3RztBQUNKLFFBQUlDLFlBQVk7QUFDaEJ6SyxZQUFBQSxNQUFBLElBQUE5RixPQUFZOEYsR0FBRztBQUVmLFFBQUk2SixZQUFZQSxTQUFTN0YsU0FBUyxHQUFHO0FBQ3BDd0csZ0JBQVV0QixjQUFjQyxVQUFVVSxRQUFRO0FBQzFDLFVBQUksQ0FBQ1csV0FBV0EsUUFBUXhHLFdBQVcsR0FBRztBQUNyQyxlQUFPO1VBQ043SixNQUFNZ1A7VUFDTnZNO1VBQ0FLLE9BQU84QyxXQUFXLHlCQUF5QjhKLFFBQVE7UUFDcEQ7TUFDRDtBQUNBLFVBQUlhLFNBQVN2QixTQUFTNUIsTUFBTSxHQUFHb0QsS0FBS0MsSUFBSSxHQUFHSixRQUFRLENBQUMsRUFBRS9CLE1BQU0wQixLQUFLLENBQUM7QUFDbEUsVUFBSVUsUUFBUTFCLFNBQVM1QixNQUFNb0QsS0FBS0MsSUFBSSxHQUFHSixRQUFRLENBQUMsRUFBRS9CLE1BQU0wQixRQUFRSyxRQUFRLENBQUMsRUFBRS9CLE1BQU0sQ0FBQyxFQUFFekUsTUFBTSxDQUFDO0FBQzNGLFVBQUl3RyxRQUFReEcsU0FBUyxHQUFHO0FBRXZCd0csZ0JBQVF6RCxHQUFHcUQsWUFBWTtBQUN2QlMsZ0JBQVFBLE1BQU0xUCxRQUFRcVAsUUFBUXpELElBQUksRUFBRTtNQUNyQztBQUNBLFVBQ0MrQztNQUNBOUosUUFBUSxNQUNQO0FBQ0QsU0FBQSxFQUFBLEVBQUtBLEdBQUcsSUFBSXdLLFFBQVEsQ0FBQyxFQUFFL0I7TUFDeEI7QUFLQSxVQUFJL0MsSUFBSWdGLE9BQU8xRyxTQUFTO0FBQ3hCLGFBQU8wQixLQUFLLEtBQUtnRixPQUFPOUUsT0FBT0YsQ0FBQyxNQUFNLFFBQVFnRixPQUFPbkQsTUFBTTdCLEdBQUdBLElBQUksQ0FBQyxFQUFFb0YsT0FBTyxJQUFJLEtBQUssR0FBRztBQUN2RnBGO01BQ0Q7QUFDQSxVQUFJcUYsSUFBSTtBQUNSLGFBQU9BLElBQUlGLE1BQU03RyxVQUFVNkcsTUFBTWpGLE9BQU9tRixDQUFDLE1BQU0sUUFBUUYsTUFBTXRELE1BQU13RCxHQUFHQSxJQUFJLENBQUMsRUFBRUQsT0FBTyxJQUFJLEtBQUssR0FBRztBQUMvRkM7TUFDRDtBQUNBLFVBQ0NyRixLQUFLLEtBQ0xnRixPQUFPOUUsT0FBT0YsQ0FBQyxNQUFNLFNBQ3BCbUYsTUFBTTdHLFdBQVcsS0FBTStHLElBQUlGLE1BQU03RyxVQUFVNkcsTUFBTWpGLE9BQU9tRixDQUFDLE1BQU0sT0FDL0Q7QUFDRHJGO01BQ0Q7QUFDQWdGLGVBQVNoRixLQUFLLElBQUlnRixPQUFPbkQsTUFBTSxHQUFHb0QsS0FBS0MsSUFBSSxHQUFHbEYsSUFBSSxDQUFDLENBQUMsSUFBSTtBQUN4RG1GLGNBQVFFLElBQUlGLE1BQU03RyxTQUFTNkcsTUFBTXRELE1BQU1vRCxLQUFLQyxJQUFJLEdBQUdHLENBQUMsQ0FBQyxJQUFJO0FBQ3pELFVBQ0NMLE9BQU8xRyxTQUFTLEtBQ2hCMEcsT0FBT25ELE1BQU1vRCxLQUFLQyxJQUFJLEdBQUdGLE9BQU8xRyxTQUFTLENBQUMsQ0FBQyxFQUFFOEcsT0FBTyxJQUFJLEtBQUssS0FDN0RELE1BQU03RyxTQUFTLEtBQ2Y2RyxNQUFNdEQsTUFBTSxHQUFHLENBQUMsRUFBRXVELE9BQU8sSUFBSSxLQUFLLEdBQ2pDO0FBQ0RKLGtCQUFVO01BQ1g7QUFDQUQsa0JBQVlDLE9BQU8xRztBQUNuQixVQUFJeUcsY0FBYyxLQUFLSSxNQUFNN0csU0FBUyxLQUFLNkcsTUFBTXRELE1BQU0sR0FBRyxDQUFDLE1BQU0sTUFBTTtBQUN0RXNELGdCQUFRQSxNQUFNdEQsTUFBTSxDQUFDO01BQ3RCO0FBQ0E0QixpQkFBV3VCLFNBQVNHO0FBQ3BCLFVBQUksQ0FBQ04sV0FBVztBQUNmLFlBQUl0RyxHQUFHekIsb0JBQW9CcUgsUUFBUSxHQUFHO0FBQ3JDak4sa0JBQVFBLFFBQVFvSCxNQUFNLElBQUlqRSxXQUFXLDZCQUE2QjhKLFFBQVE7UUFDM0UsT0FBTztBQUNOak4sa0JBQVFBLFFBQVFvSCxNQUFNLElBQUlqRSxXQUFXLHdCQUF3QjhKLFFBQVE7UUFDdEU7TUFDRDtJQUNEO0FBRUEsUUFBSUMsU0FBU0EsTUFBTTlGLFNBQVMsR0FBRztBQUM5QndHLGdCQUFVdEIsY0FBY0MsVUFBVVcsS0FBSztBQUN2QyxVQUFJVSxXQUFXQSxRQUFReEcsU0FBUyxHQUFHO0FBRWxDLGVBQU87VUFDTjdKLE1BQU1nUDtVQUNOdk07VUFDQUssT0FBTzhDLFdBQVcsdUJBQXVCK0osS0FBSztRQUMvQztNQUNEO0FBQ0EsVUFBSU8sUUFBUTtBQUNaLFVBQUlJLFlBQVksR0FBRztBQUNsQixjQUFNTyxRQUFRaEIsb0JBQW9CYixRQUFRO0FBQzFDc0Isb0JBQVlPLE1BQU10QztBQUNsQixTQUFDO1VBQUMyQjtRQUFLLElBQUlXO01BQ1osT0FBTztBQUNOWCxnQkFBUTtNQUNUO0FBQ0EsWUFBTVksZUFBQSxLQUFBL1EsT0FBb0JvUSxXQUFTLEdBQUEsRUFBQXBRLE9BQUk0UCxLQUFLLEVBQUE1UCxPQUFHOEYsT0FBTyxJQUFFLElBQUE7QUFDeEQsVUFBSXlLLGFBQWEsR0FBRztBQUNuQixjQUFNUyxTQUFTL0IsU0FBUzVCLE1BQU1vRCxLQUFLQyxJQUFJLEdBQUdILFNBQVMsQ0FBQztBQUNwRHRCLG1CQUNDQSxTQUFTNUIsTUFBTSxHQUFHb0QsS0FBS0MsSUFBSSxHQUFHSCxTQUFTLENBQUMsS0FDdkNBLFlBQVksSUFBSSxPQUFPLE1BQ3hCUSxnQkFDQ1osUUFBUSxLQUFLO0FBQ2ZsQixvQkFBWStCLE9BQU9sSCxTQUFTLEtBQUtrSCxPQUFPM0QsTUFBTSxHQUFHLENBQUMsTUFBTSxPQUFBLEtBQUFyTixPQUFZZ1IsTUFBTSxJQUFLQTtNQUNoRixPQUFPO0FBQ04sWUFBSS9CLFNBQVNuRixTQUFTLEtBQUttRixTQUFTNUIsTUFBTSxJQUFJNEIsU0FBU25GLFNBQVMsSUFBSSxDQUFDLE1BQU0sTUFBTTtBQUNoRm1GLHNCQUFZO1FBQ2I7QUFDQUEscUJBQWFBLFNBQVNuRixTQUFTLElBQUksT0FBTyxNQUFNaUg7TUFDakQ7QUFDQSxVQUFJVixXQUFXO0FBQ2QsWUFBSTVHLElBQUkzRCxPQUFPO0FBQ2YsWUFBSTJELEVBQUVLLFNBQVMsR0FBRztBQUNqQkwsY0FBSUEsRUFBRTRELE1BQU0sQ0FBQztRQUNkO0FBQ0EzSyxnQkFBUUEsUUFBUW9ILE1BQU0sSUFBSWpFLFdBQVcsMEJBQTBCK0osT0FBT25HLENBQUM7TUFDeEUsT0FBTztBQUNOL0csZ0JBQVFBLFFBQVFvSCxNQUFNLElBQUlqRSxXQUFXLHNCQUFzQitKLEtBQUs7TUFDakU7QUFDQSxVQUFJN0YsR0FBRzlCLGdCQUFnQixDQUFDNEgsV0FBVztBQUNsQyxjQUFNb0IsTUFBTWhDLFNBQVNoTyxRQUFROEksR0FBRzlCLGNBQWMsRUFBRTtBQUNoRCxZQUFJZ0osSUFBSW5ILFdBQVdtRixTQUFTbkYsUUFBUTtBQUNuQ21GLHFCQUFXZ0M7QUFDWHZPLGtCQUFRQSxRQUFRb0gsTUFBTSxJQUFJakUsV0FBVyx3QkFBd0I7UUFDOUQ7TUFDRDtJQUNEO0FBQ0EsV0FBTztNQUNONUYsTUFBTWdQO01BQ052TTtNQUNBSyxPQUFPO0lBQ1I7RUFDRDtBQUVBLFFBQU1tTyxVQUFVQSxDQUFDO0lBQUNDO0lBQVNDO0lBQVNDO0VBQVEsTUFBTTtBQUNqRCxRQUFJcE8sT0FBTztBQUNYLFFBQUlrTyxTQUFTO0FBSVosVUFBSUEsV0FBV0MsU0FBUztBQUN2Qm5PLGlCQUFBQSxPQUFTO01BQ1Y7QUFDQSxVQUFJb08sVUFBVTtBQUNicE8saUJBQUFBLE9BQVM7TUFDVjtJQUNEO0FBQ0EsV0FBT0E7RUFDUjtBQUNBLFFBQU1xTyxVQUFXM1EsT0FBTTtBQUN0QixRQUFJQSxFQUFFdUIsZ0JBQWdCO0FBQ3JCdkIsUUFBRXVCLGVBQWU7QUFDakJ2QixRQUFFNFEsZ0JBQWdCO0lBQ25CLE9BQU87QUFDTjVRLFFBQUU2USxlQUFlO0lBQ2xCO0FBQ0EsV0FBTztFQUNSO0FBQ0EsTUFBSUMsVUFBVTtBQUNkLE1BQUlDLFdBQVc7QUFDZixNQUFJQyxVQUFVLENBQUE7QUFDZCxNQUFJQyxlQUFlO0FBQ25CLE1BQUlDLGFBQWE7QUFDakIsTUFBSUMsWUFBWTtBQUNoQixNQUFJQyxXQUFXO0FBQ2YsTUFBSUMsV0FBVztBQUNmLE1BQUlDLGNBQWM7QUFDbEIsTUFBSUMsY0FBYztBQUNsQixNQUFJQyxZQUFZO0FBQ2hCLE1BQUlDLGFBQWE7QUFDakIsTUFBSUMsWUFBWTtBQUNoQixNQUFJQyxTQUFTO0FBQ2IsTUFBSUMsYUFBYTtBQUNqQixNQUFJQyxZQUFZO0FBQ2hCLE1BQUlDLGdCQUFnQjtBQUNwQixNQUFJQyxrQkFBa0I7QUFDdEIsTUFBSUMsU0FBUztBQUNiLFFBQU1DLFlBQVk7QUFDbEIsUUFBTUMsT0FBTztBQUNiLFFBQU1DLGlCQUFpQjtBQUN2QixRQUFNQyxVQUFVO0FBQ2hCLFFBQU1DLFVBQVU7QUFDaEIsUUFBTUMsVUFBV3JRLFVBQVM7QUFDekIsUUFBSXNRLFlBQVk7QUFDaEIsUUFBSXRRLFFBQVFBLEtBQUt1USxPQUFPO0FBQ3ZCLFVBQUl2USxLQUFLdVEsTUFBTUMsT0FBTztBQUNyQixjQUFNLENBQUNDLElBQUksSUFBSXpRLEtBQUt1USxNQUFNQztBQUMxQixZQUFJQyxNQUFNO0FBQ1QsY0FBSUEsS0FBS0MsYUFBYUQsS0FBS0MsVUFBVXhKLFNBQVMsR0FBRztBQUdoRGlJLHVCQUFXc0IsS0FBS0MsVUFBVSxDQUFDLEVBQUVDLE1BQU1DLEtBQUtDO0FBQ3hDLGdCQUFJSixLQUFLQyxVQUFVLENBQUMsRUFBRUksV0FBVztBQUNoQzFCLHlCQUFXcUIsS0FBS0MsVUFBVSxDQUFDLEVBQUVJLFVBQVV6UyxRQUFRLE9BQU8sRUFBRTtZQUN6RDtBQUNBLGdCQUFJb1MsS0FBS0MsVUFBVSxDQUFDLEVBQUVLLE9BQU87QUFDNUJsQiw4QkFBZ0JZLEtBQUtDLFVBQVUsQ0FBQyxFQUFFSztZQUNuQztBQUNBLGdCQUFJTixLQUFLQyxVQUFVeEosU0FBUyxHQUFHO0FBQzlCNEksZ0NBQWtCVyxLQUFLQyxVQUFVLENBQUMsRUFBRXhQO1lBQ3JDO1VBQ0Q7QUFDQSxjQUFJdVAsS0FBS08sV0FBVztBQUNuQnBCLHdCQUFZYSxLQUFLTztVQUNsQjtBQUNBLGNBQUlQLEtBQUtRLGdCQUFnQjtBQUN4Qlgsd0JBQVlHLEtBQUtRLGVBQWU1UyxRQUFRLE9BQU8sRUFBRTtVQUNsRDtBQUNBZ1Isd0JBQWMsT0FBT29CLEtBQUtTLFlBQVk7QUFDdEMsY0FBSWxSLEtBQUt1USxNQUFNWSxRQUFRO0FBQ3RCMUIsd0JBQVl6UCxLQUFLdVEsTUFBTVksT0FBT0M7VUFDL0I7QUFDQSxjQUFJWCxLQUFLWSxjQUFjLENBQUNyUixLQUFLLGdCQUFnQixLQUFLLENBQUNBLEtBQUssZ0JBQWdCLEVBQUVxUixZQUFZO0FBRXJGLGdCQUFJcEgsS0FBSztBQUNULHFCQUFTckIsSUFBSSxHQUFHQSxJQUFJNkgsS0FBS1ksVUFBVW5LLFFBQVEwQixLQUFLO0FBQy9DcUIscUJBQ0VyQixJQUFJLElBQUksTUFBTSxNQUFNNkgsS0FBS1ksVUFBVXpJLENBQUMsRUFBRTBJLEtBQUtqVCxRQUFRLG1CQUFtQnNKLE9BQU9DLElBQUEySixxQkFBQUEsbUJBQUF6Six1QkFBQSxDQUFBLElBQUEsR0FBQSxDQUFBLE1BQUEsQ0FBQSxFQUFBLENBQVE7WUFDeEY7QUFDQSxnQkFBSW1DLEdBQUcvQyxTQUFTLEdBQUc7QUFDbEIyRixnQ0FBa0IsSUFBSTdFLE9BQUEsMkJBQUE1SyxPQUFrQzZNLElBQUUsNkJBQUEsQ0FBNkI7WUFDeEY7VUFDRDtRQUNEO01BQ0Q7QUFFQSxVQUFJakssS0FBS3VRLE1BQU1pQixTQUFTO0FBQ3ZCLFlBQUl4UixLQUFLdVEsTUFBTWlCLFFBQVFDLFFBQVEsQ0FBQ25CLFdBQVc7QUFDMUNBLHNCQUFZdFEsS0FBS3VRLE1BQU1pQixRQUFRQyxLQUFLcFQsUUFBUSxPQUFPLEVBQUU7UUFDdEQ7QUFDQSxZQUFJOEksR0FBR3hCLHdCQUF3QixNQUFNO0FBRXBDd0IsYUFBR3hCLHNCQUFzQjNGLEtBQUt1USxNQUFNaUIsUUFBUUUsU0FBUztRQUN0RDtNQUNEO0FBQ0EvQixtQkFBYVc7QUFFYixVQUFJdFEsS0FBS3VRLE1BQU1vQixZQUFZM1IsS0FBS3VRLE1BQU1vQixTQUFTckcsU0FBUztBQUN2RGdFLHNCQUFjLENBQUNuSSxHQUFHWCx5QkFBeUJ4RyxLQUFLdVEsTUFBTW9CLFNBQVNyRyxRQUFRc0csbUJBQW1CO0FBQzFGckMsb0JBQVksQ0FBQ3BJLEdBQUdYLHlCQUF5QnhHLEtBQUt1USxNQUFNb0IsU0FBU3JHLFFBQVF1RyxpQkFBaUI7QUFDdEZyQyxxQkFBYXhQLEtBQUt1USxNQUFNb0IsU0FBU3JHLFFBQVF3RyxpQkFBaUI7QUFHMUQsWUFBSXRDLFlBQVk7QUFDZnJJLGFBQUdaLGVBQWU7UUFDbkI7TUFDRDtJQUNEO0VBQ0Q7QUFDQSxNQUFJd0wsaUJBQWlCO0FBQ3JCLFFBQU1DLGVBQWVBLENBQUN6UCxRQUFRMFAsWUFBWTtBQUN6QyxRQUFJRixnQkFBZ0I7QUFDbkI7SUFDRDtBQUNBQSxxQkFBaUI7QUFDakIsUUFBSUc7QUFDSixRQUFJbEQsY0FBYztBQUNqQmtELHVCQUFpQmxELGFBQWFtRDtBQUM5Qm5ELG1CQUFhbUQsV0FBVztJQUN6QjtBQUNBLFVBQU1DLE9BQU8sWUFBYWpQLE1BQU07QUFDL0I0Tyx1QkFBaUI7QUFDakIsVUFBSS9DLGNBQWM7QUFDakJBLHFCQUFhbUQsV0FBV0Q7TUFDekI7QUFDQUQsY0FBUUksTUFBTSxNQUFNbFAsSUFBSTtJQUN6QjtBQUVBLFVBQU16RCxTQUFTO01BQ2RDLFFBQVE7TUFDUkMsUUFBUTtNQUNSMFMsZUFBZTtNQUNmQyxhQUFhO01BQ2JDLFFBQVE3TyxLQUFLOE87TUFDYkMsTUFBTSxDQUFDLFFBQVEsYUFBYSxXQUFXO01BQ3ZDQyxRQUFRO01BQ1JDLFFBQVEsQ0FBQyxXQUFXLGFBQWEsT0FBTyxNQUFNO01BQzlDQyxTQUFTO01BQ1RDLFNBQVM7TUFDVEMsT0FBTztNQUNQQyxXQUFXclAsS0FBS3NQO01BQ2hCQyxTQUFTO01BQ1RDLE1BQU0sQ0FBQyxZQUFZLFlBQVksUUFBUTtNQUN2QzNTLE1BQU07TUFDTjRTLFFBQVEsQ0FBQyxTQUFTO0lBQ25CO0FBQ0ExVyxRQUFJTCxJQUFJcUQsTUFBTSxFQUNaMlQsS0FBTXJULFVBQVM7QUFDZnFRLGNBQVFyUSxJQUFJO0FBQ1p1QyxhQUFPNlAsSUFBSTtJQUNaLENBQUMsRUFDQUEsS0FBSyxDQUFDO01BQUNrQjtNQUFRQztJQUFVLE1BQU07QUFDL0JuQixXQUFBLEdBQUFoVixPQUFRa1csUUFBTSxHQUFBLEVBQUFsVyxPQUFJbVcsVUFBVSxDQUFFO0lBQy9CLENBQUM7RUFDSDtBQUNBLFFBQU1DLGlCQUFrQkMsV0FBVTtBQUNqQyxXQUFPeFEsV0FBVyx5QkFBeUIwRSxPQUFPOEwsS0FBSyxDQUFDO0VBQ3pEO0FBQ0EsUUFBTUMsbUJBQW1CQSxNQUFNO0FBQzlCLFVBQU1DLE1BQU0sb0JBQUlDLEtBQUs7QUFDckIsUUFBSUMsS0FBS2xNLE9BQU9nTSxJQUFJRyxlQUFlLENBQUM7QUFDcEMsVUFBTUMsTUFBTzlILE9BQU07QUFDbEIsYUFBT0EsRUFBRXhCLE1BQU0sRUFBRTtJQUNsQjtBQUNBb0osVUFDQ0UsSUFBQSxJQUFBM1csT0FBUXVXLElBQUlLLFlBQVksSUFBSSxDQUFDLENBQUUsSUFDL0JELElBQUEsSUFBQTNXLE9BQVF1VyxJQUFJTSxXQUFXLENBQUMsQ0FBRSxJQUMxQkYsSUFBQSxLQUFBM1csT0FBU3VXLElBQUlPLFlBQVksQ0FBQyxDQUFFLElBQzVCSCxJQUFBLEtBQUEzVyxPQUFTdVcsSUFBSVEsY0FBYyxDQUFDLENBQUUsSUFDOUJKLElBQUEsS0FBQTNXLE9BQVN1VyxJQUFJUyxjQUFjLENBQUMsQ0FBRTtBQUMvQixXQUFPUDtFQUNSO0FBQ0EsUUFBTVEsaUJBQWlCQSxDQUFDcEMsU0FBU3FDLGlCQUFpQjtBQUNqRCxRQUFJbkYsYUFBYSxNQUFNO0FBQ3RCOEMsY0FBUWhQLFdBQVcsc0JBQXNCLENBQUM7QUFDMUM7SUFDRDtBQVFBLFFBQUl0RDtBQU1KLFVBQU00VSxvQkFDSDNFLGNBQWMsUUFBUUEsY0FBY2pNLEtBQUtzUCxtQkFDekNwRCxrQkFBa0IsUUFBUUEsa0JBQWtCbE0sS0FBS3NQLG9CQUNuRG5ELG1CQUNBQSxvQkFBb0JuTSxLQUFLNlE7QUFDMUIsUUFBSUYsZ0JBQWdCLENBQUNBLGFBQWFHLFlBQVksQ0FBQ3ROLEdBQUdwQixpQkFBaUIwSixhQUFhLENBQUM4RSxrQkFBa0I7QUFHbEd0RixpQkFBV3lGLFlBQVl0VyxRQUFRcVI7QUFDL0I5UCxlQUFTc1AsV0FBVzBGO0FBQ3BCLFVBQUloVixRQUFRO0FBQ1hBLGVBQU92QixRQUFRO0FBQ2Z1QixlQUFPK0ksT0FBTy9JLE9BQU92QjtNQUN0QjtJQUNELE9BQU87QUFDTnVCLGVBQVNzUCxXQUFXMkY7QUFDcEIsVUFBSWpWLFFBQVE7QUFDWEEsZUFBT3ZCLFFBQVE7QUFDZnVCLGVBQU8rSSxPQUFPL0ksT0FBT3ZCO01BQ3RCO0lBQ0Q7QUFDQSxRQUFJb0UsU0FBUztNQUNabkYsTUFBTThSO0lBQ1A7QUFDQSxVQUFNMEYsVUFBVSxDQUFBO0FBQ2hCLFVBQU1DLFFBQVEsQ0FBQTtBQUNkLFVBQU1DLFVBQVUsQ0FBQTtBQUNoQixVQUFNQyxTQUFTVixlQUFlLENBQUNBLFlBQVksSUFBSXZGO0FBQy9DLFFBQUlrRztBQUNKLFFBQUlyTTtBQUNKLFFBQUl6SSxRQUFRO0FBQ1osUUFBSStVLFVBQVU7QUFDZCxTQUFLdE0sSUFBSSxHQUFHQSxJQUFJb00sT0FBTzlOLFFBQVEwQixLQUFLO0FBQ25DcU0sYUFBT0QsT0FBT3BNLENBQUM7QUFDZixVQUFJcU0sS0FBS3hYLFVBQVUwUyxTQUFTO0FBQzNCM04saUJBQVNzSyxnQkFDUnRLLE9BQU9uRixNQUNQNFgsS0FBS0Usa0JBQ0xGLEtBQUtHLGlCQUNMSCxLQUFLSSxZQUNMSixLQUFLSyxhQUNOO0FBQ0EsWUFBSSxDQUFDOVMsT0FBT3JDLE9BQU87QUFDbEIrVTtBQUNBLGNBQUksQ0FBQ0QsS0FBS0Usb0JBQW9CRixLQUFLRSxpQkFBaUJqTyxXQUFXLEdBQUc7QUFDakU0TixrQkFBTUEsTUFBTTVOLE1BQU0sSUFBSStOLEtBQUtHO1VBQzVCLE9BQU87QUFDTlAsb0JBQVFBLFFBQVEzTixNQUFNLElBQUk7Y0FDekJxTyxNQUFNTixLQUFLRTtjQUNYSyxJQUFJUCxLQUFLRztZQUNWO1VBQ0Q7UUFDRCxXQUFXalYsVUFBVSxNQUFNO0FBQzFCLFdBQUM7WUFBQ0E7VUFBSyxJQUFJcUM7UUFDWjtNQUNELFdBQVd5UyxLQUFLeFgsVUFBVTJTLFdBQVc2RSxLQUFLRSxvQkFBb0JGLEtBQUtFLGlCQUFpQmpPLFNBQVMsR0FBRztBQUMvRjFFLGlCQUFTc0ssZ0JBQWdCdEssT0FBT25GLE1BQU00WCxLQUFLRSxrQkFBa0IsTUFBTSxNQUFNLEtBQUs7QUFDOUUsWUFBSSxDQUFDM1MsT0FBT3JDLE9BQU87QUFDbEIrVTtBQUNBSCxrQkFBUUEsUUFBUTdOLE1BQU0sSUFBSStOLEtBQUtFO1FBQ2hDLFdBQVdoVixVQUFVLE1BQU07QUFDMUIsV0FBQztZQUFDQTtVQUFLLElBQUlxQztRQUNaO01BQ0Q7SUFDRDtBQUNBLFFBQUlyQyxVQUFVLE1BQU07QUFFbkJSLGVBQVNzUCxXQUFXMkY7QUFDcEIsVUFBSWpWLFFBQVE7QUFDWEEsZUFBT3ZCLFFBQVE7QUFDZnVCLGVBQU8rSSxPQUFPL0ksT0FBT3ZCO01BQ3RCO0lBQ0Q7QUFFQTZRLGVBQVd3RyxZQUFZeFcsVUFBVXVRO0FBQ2pDUCxlQUFXeUcsWUFBWXpXLFVBQVcsQ0FBQzBFLEtBQUtvQixlQUFldUssZUFBZ0JDLGFBQWFGO0FBQ3BGLFFBQUkxTCxLQUFLb0IsZUFBZSxDQUFDLENBQUN1UCxjQUFjO0FBRXZDLFVBQUkzVSxVQUFVQSxPQUFPdkIsVUFBVSxVQUFVO0FBQ3hDLFlBQUkrSSxHQUFHM0MsV0FBVztBQUNqQnlLLHFCQUFXMEcsYUFBYXZYLFFBQVErSSxHQUFHM0M7UUFDcEM7TUFDRCxPQUFPO0FBQ055SyxtQkFBVzJHLGNBQWN4WCxRQUFRK0ksR0FBRzNDO01BQ3JDO0FBQ0EsVUFBSTBRLFlBQVksR0FBRztBQUNsQixZQUFJMVMsT0FBTzFDLFdBQVcwQyxPQUFPMUMsUUFBUW9ILFNBQVMsR0FBRztBQUNoRCtILHFCQUFXclEsVUFBVVIsU0FDbkIrSSxHQUFHM0MsWUFBWSxLQUFLdkIsV0FBVyxpQkFBaUIsS0FDakRULE9BQU8xQyxRQUFRK1YsS0FBSzVTLFdBQVcsb0JBQW9CLENBQUMsS0FDbkRrRSxHQUFHM0MsWUFBWSxLQUFLdkIsV0FBVyxnQkFBZ0I7UUFDbEQ7QUFDQWdNLG1CQUFXd0csWUFBWXhXLFVBQVVrSSxHQUFHWixnQkFBZ0JpSjtNQUNyRCxXQUFXMEYsU0FBUztBQUNuQixZQUFJcFYsVUFBVSxDQUFBO0FBQ2QsY0FBTWdXLGVBQWUsQ0FBQTtBQUVyQixhQUFLbE4sSUFBSSxHQUFHQSxJQUFJbU0sUUFBUTdOLFFBQVEwQixLQUFLO0FBQ3BDOUksa0JBQVFBLFFBQVFvSCxNQUFNLElBQUEsSUFBQTlKLE9BQVE2RixXQUFXLDRCQUE0QjhSLFFBQVFuTSxDQUFDLENBQUMsQ0FBQztRQUNqRjtBQUNBLFlBQUltTSxRQUFRN04sV0FBVyxHQUFHO0FBQ3pCNE8sdUJBQWFBLGFBQWE1TyxNQUFNLElBQUEsSUFBQTlKLE9BQVE2RixXQUFXLDRCQUE0QjhSLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDM0YsV0FBV0EsUUFBUTdOLFNBQVMsR0FBRztBQUM5QjRPLHVCQUFhQSxhQUFhNU8sTUFBTSxJQUFBLEtBQUE5SixPQUFTb1csZUFBZXVCLFFBQVE3TixNQUFNLENBQUM7UUFDeEU7QUFFQSxhQUFLMEIsSUFBSSxHQUFHQSxJQUFJa00sTUFBTTVOLFFBQVEwQixLQUFLO0FBQ2xDOUksa0JBQVFBLFFBQVFvSCxNQUFNLElBQUEsSUFBQTlKLE9BQVE2RixXQUFXLDRCQUE0QjZSLE1BQU1sTSxDQUFDLENBQUMsQ0FBQztRQUMvRTtBQUNBLFlBQUlrTSxNQUFNNU4sV0FBVyxHQUFHO0FBQ3ZCNE8sdUJBQWFBLGFBQWE1TyxNQUFNLElBQUEsSUFBQTlKLE9BQVE2RixXQUFXLDRCQUE0QjZSLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDekYsV0FBV0EsTUFBTTVOLFNBQVMsR0FBRztBQUM1QjRPLHVCQUFhQSxhQUFhNU8sTUFBTSxJQUFBLEtBQUE5SixPQUFTb1csZUFBZXNCLE1BQU01TixNQUFNLENBQUM7UUFDdEU7QUFFQSxjQUFNNk8sUUFBUXJHLFNBQVMsTUFBVztBQUNsQyxhQUFLOUcsSUFBSSxHQUFHQSxJQUFJaU0sUUFBUTNOLFFBQVEwQixLQUFLO0FBQ3BDLGNBQUlpTSxRQUFRak0sQ0FBQyxFQUFFMk0sU0FBU1YsUUFBUWpNLENBQUMsRUFBRTRNLElBQUk7QUFDdEMxVixvQkFBUUEsUUFBUW9ILE1BQU0sSUFBQSxJQUFBOUosT0FBUTZGLFdBQVcsNEJBQTRCNFIsUUFBUWpNLENBQUMsRUFBRTJNLElBQUksQ0FBQztVQUN0RixPQUFPO0FBQ056VixvQkFBUUEsUUFBUW9ILE1BQU0sSUFBQSxJQUFBOUosT0FDakI2RixXQUFXLDRCQUE0QjRSLFFBQVFqTSxDQUFDLEVBQUUyTSxJQUFJLENBQUMsRUFBQW5ZLE9BQUcyWSxLQUFLLEVBQUEzWSxPQUFHNkYsV0FDckUsNEJBQ0E0UixRQUFRak0sQ0FBQyxFQUFFNE0sRUFDWixDQUFDO1VBQ0g7UUFDRDtBQUNBLFlBQUlYLFFBQVEzTixXQUFXLEdBQUc7QUFDekIsY0FBSTJOLFFBQVEsQ0FBQyxFQUFFVSxTQUFTVixRQUFRLENBQUMsRUFBRVcsSUFBSTtBQUN0Q00seUJBQWFBLGFBQWE1TyxNQUFNLElBQUEsSUFBQTlKLE9BQzNCNkYsV0FBVyw0QkFBNEI0UixRQUFRLENBQUMsRUFBRVUsSUFBSSxDQUFDO1VBQzdELE9BQU87QUFDTk8seUJBQWFBLGFBQWE1TyxNQUFNLElBQUEsSUFBQTlKLE9BQzNCNkYsV0FBVyw0QkFBNEI0UixRQUFRLENBQUMsRUFBRVUsSUFBSSxDQUFDLEVBQUFuWSxPQUFHMlksS0FBSyxFQUFBM1ksT0FBRzZGLFdBQ3JFLDRCQUNBNFIsUUFBUSxDQUFDLEVBQUVXLEVBQ1osQ0FBQztVQUNIO1FBQ0QsV0FBV1gsUUFBUTNOLFNBQVMsR0FBRztBQUM5QjRPLHVCQUFhQSxhQUFhNU8sTUFBTSxJQUFBLEtBQUE5SixPQUFTb1csZUFBZXFCLFFBQVEzTixNQUFNLENBQUM7UUFDeEU7QUFDQSxZQUFJcEgsUUFBUW9ILFNBQVMsR0FBRztBQUN2QnBILG9CQUFVQSxRQUFRK1YsS0FBSzVTLFdBQVcsb0JBQW9CLENBQUM7QUFDdkQsY0FDQ25ELFFBQVFvSCxTQUNSLE9BQ0VDLEdBQUczQyxZQUFZLEtBQUt2QixXQUFXLGlCQUFpQixHQUFHaUUsVUFDbkRDLEdBQUczQyxZQUFZLEtBQUt2QixXQUFXLGdCQUFnQixHQUFHaUUsUUFDbkQ7QUFDRHBILHNCQUFVZ1csYUFBYUQsS0FBSzVTLFdBQVcsb0JBQW9CLENBQUM7VUFDN0Q7QUFDQWdNLHFCQUFXclEsVUFBVVIsU0FDbkIrSSxHQUFHM0MsWUFBWSxLQUFLdkIsV0FBVyxpQkFBaUIsS0FDakRuRCxXQUNDcUgsR0FBRzNDLFlBQVksS0FBS3ZCLFdBQVcsZ0JBQWdCO1FBQ2xEO01BQ0Q7SUFDRDtBQUNBZ00sZUFBVzlRLFdBQVdDLFFBQVFvRSxPQUFPbkY7QUFDckM0UixlQUFXK0csWUFBWTVYLFFBQVF1UixjQUFjK0QsaUJBQWlCO0FBQzlEekUsZUFBV2dILFdBQVc3WCxRQUFRZ1IsWUFBWUgsV0FBVytHLFlBQVk1WDtBQUNqRSxRQUFJbVcsa0JBQWtCO0FBQ3JCdEYsaUJBQVdpSCxNQUFNOVgsUUFBUXVKLE9BQU9rSSxpQkFBaUJsTSxLQUFLc1AsZUFBZTtJQUN0RTtBQUVBaEUsZUFBV2tILFNBQVNDLE1BQU07RUFDM0I7QUFDQSxRQUFNQyxhQUFhQSxDQUFDNUYsTUFBTTZGLGNBQWM7QUFDdkMsVUFBTUMsT0FBTzlGLEtBQUsrRjtBQUNsQixVQUFNO01BQUN4UztJQUFLLElBQUl5TTtBQUNoQixRQUFJZ0csU0FBUztBQUNiLFFBQUlDLFdBQVcsT0FBT2pHLEtBQUtrRyxhQUFhO0FBQ3hDLFFBQUkvTjtBQUNKLFVBQU1xRSxZQUFZd0QsS0FBS21HLGdCQUFnQixPQUFPbkcsS0FBS21HLGFBQWFDLFdBQVc7QUFDM0UsVUFBTUMsYUFBYSxPQUFPckcsS0FBS3NHLFlBQVk7QUFDM0MsU0FBS25PLElBQUksR0FBR0EsSUFBSTBOLFVBQVVwUCxRQUFRMEIsS0FBSztBQUN0QyxVQUFJQSxLQUFLME4sVUFBVTFOLENBQUMsRUFBRW9PLG9CQUFvQnZHLEtBQUs1USxNQUFNNEssTUFBTW9ELEtBQUtDLElBQUksR0FBRzJDLEtBQUs1USxNQUFNMEssUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUc7QUFDckc7TUFDRDtBQUdBK0wsZ0JBQVUxTixDQUFDLEVBQUUwTSxnQkFBZ0JySTtBQUM3QnFKLGdCQUFVMU4sQ0FBQyxFQUFFcU8sY0FBYyxDQUFDSDtBQUM1QlIsZ0JBQVUxTixDQUFDLEVBQUVwTCxLQUFLMFosTUFBTUosYUFBYTNQLEdBQUczQixXQUFXMkIsR0FBRzdCO0lBQ3ZEO0FBQ0EsUUFBSXdSLFlBQVk7QUFDZjtJQUNEO0FBQ0EsUUFBSSxDQUFDSixZQUFZSCxTQUFTdFQsV0FBVyxtQkFBbUIsS0FBS0EsV0FBVyxnQkFBZ0IsSUFBSTtBQUFBLFVBQUFrVSxZQUFBQywyQkFDeEViLElBQUEsR0FBQWM7QUFBQSxVQUFBO0FBQW5CLGFBQUFGLFVBQUFsTCxFQUFBLEdBQUEsRUFBQW9MLFFBQUFGLFVBQUFHLEVBQUEsR0FBQWpFLFFBQXlCO0FBQUEsZ0JBQWRrRSxPQUFBRixNQUFBalo7QUFDVixjQUFJb1osTUFBTUQsS0FBSzFYO0FBRWYsY0FBSTJYLEtBQUs7QUFDUkEsa0JBQU1BLElBQUkvTSxNQUFNb0QsS0FBS0MsSUFBSSxHQUFHMEosSUFBSWpOLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFbE0sUUFBUSxNQUFNLEdBQUc7QUFDcEUsZ0JBQUltWixRQUFRdlUsV0FBVyxtQkFBbUIsR0FBRztBQUM1Q3dULHVCQUFTO0FBQ1Q7WUFDRCxXQUFXZSxRQUFRdlUsV0FBVyxnQkFBZ0IsR0FBRztBQUNoRHlULHlCQUFXO0FBQ1g7WUFDRDtVQUNEO1FBQ0Q7TUFBQSxTQUFBZSxLQUFBO0FBQUFOLGtCQUFBcFosRUFBQTBaLEdBQUE7TUFBQSxVQUFBO0FBQUFOLGtCQUFBTyxFQUFBO01BQUE7SUFDRDtBQUNBLFFBQUksQ0FBQ2hCLFlBQVksQ0FBQ0QsUUFBUTtBQUN6QjtJQUNEO0FBQ0EsUUFBSSxDQUFDelMsU0FBU0EsTUFBTWtELFdBQVcsR0FBRztBQUNqQztJQUNEO0FBQ0EsVUFBTXNMLFNBQVMsQ0FBQTtBQUNmLFNBQUs1SixJQUFJLEdBQUdBLElBQUk1RSxNQUFNa0QsUUFBUTBCLEtBQUs7QUFDbEM7O1FBRUM1RSxNQUFNNEUsQ0FBQyxFQUFFakUsT0FBTztRQUVoQlgsTUFBTTRFLENBQUMsRUFBRS9JLFNBQ1RtRSxNQUFNNEUsQ0FBQyxFQUFFL0ksTUFBTXFILFNBQVM7UUFDdkI7QUFFRCxZQUFJeUUsUUFBUTNILE1BQU00RSxDQUFDLEVBQUUvSTtBQUNyQjhMLGdCQUFRQSxNQUFNbEIsTUFBTW9ELEtBQUtDLElBQUksR0FBR25DLE1BQU1wQixRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFFdkQsWUFBSSxDQUFDcEQsR0FBR3RCLGFBQWEsQ0FBQ3NCLEdBQUd0QixVQUFVYixLQUFLMkcsS0FBSyxHQUFHO0FBQy9DNkcsaUJBQU9BLE9BQU90TCxNQUFNLElBQUl5RTtRQUN6QjtNQUNEO0lBQ0Q7QUFDQSxRQUFJNkcsT0FBT3RMLFdBQVcsR0FBRztBQUN4QjtJQUNEO0FBQ0EsU0FBSzBCLElBQUksR0FBR0EsSUFBSTBOLFVBQVVwUCxRQUFRMEIsS0FBSztBQUN0QyxVQUFJQSxLQUFLME4sVUFBVTFOLENBQUMsRUFBRW9PLG9CQUFvQnZHLEtBQUs1USxNQUFNNEssTUFBTW9ELEtBQUtDLElBQUksR0FBRzJDLEtBQUs1USxNQUFNMEssUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUc7QUFDckc7TUFDRDtBQUNBK0wsZ0JBQVUxTixDQUFDLEVBQUVxTyxjQUFjO0FBQzNCWCxnQkFBVTFOLENBQUMsRUFBRXBMLEtBQUswWixNQUFNL1AsR0FBRzdCO0FBQzNCLFVBQUlrTixPQUFPdEwsU0FBUyxHQUFHO0FBQ3RCb1Asa0JBQVUxTixDQUFDLEVBQUUrTyxNQUFNbkY7TUFDcEIsT0FBTztBQUNOOEQsa0JBQVUxTixDQUFDLEVBQUV2TCxLQUFLZSxRQUNqQm9VLE9BQU8sQ0FBQyxLQUFLOEQsVUFBVTFOLENBQUMsRUFBRXlNLGVBQWUsT0FBTyxLQUFBLElBQUFqWSxPQUFTa1osVUFBVTFOLENBQUMsRUFBRXlNLFVBQVU7TUFDbEY7SUFDRDtFQUNEO0FBQ0EsUUFBTXVDLG1CQUFtQkEsQ0FBQ3RCLFdBQVc1VyxXQUFXO0FBQy9DLFFBQUksQ0FBQ0EsVUFBVSxDQUFDQSxPQUFPNlEsU0FBUyxDQUFDN1EsT0FBTzZRLE1BQU1DLE9BQU87QUFDcEQ7SUFDRDtBQUNBLGVBQVdxSCxLQUFLblksT0FBTzZRLE1BQU1DLE9BQU87QUFDbkMsVUFBSSxDQUFDMUosT0FBT0MsT0FBT3JILE9BQU82USxNQUFNQyxPQUFPcUgsQ0FBQyxHQUFHO0FBQzFDO01BQ0Q7QUFDQXhCLGlCQUFXM1csT0FBTzZRLE1BQU1DLE1BQU1xSCxDQUFDLEdBQUd2QixTQUFTO0lBQzVDO0VBQ0Q7QUFDQSxRQUFNd0IsZUFBZUEsQ0FBQ3hCLFdBQVd5QixhQUFhO0FBQzdDLFFBQUluUDtBQUNKLFNBQUtBLElBQUksR0FBR0EsSUFBSTBOLFVBQVVwUCxRQUFRMEIsS0FBSztBQUN0QzBOLGdCQUFVMU4sQ0FBQyxFQUFFK08sTUFBTTtBQUNuQnJCLGdCQUFVMU4sQ0FBQyxFQUFFb1AsV0FBVzFCLFVBQVUxTixDQUFDLEVBQUVxUDtJQUN0QztBQUNBLFFBQUl4USxlQUFlO0FBQ2xCc1EsZUFBU3pCLFNBQVM7QUFDbEI7SUFDRDtBQUNBLFVBQU01VyxTQUFTO01BQ2RDLFFBQVE7TUFDUkMsUUFBUTtNQUNSOFMsTUFBTTtNQUNOd0YsYUFBYTtNQUNiQyxTQUFTN0IsVUFBVXBQLFNBQVM7TUFDNUJrUixTQUFTOUIsVUFBVXBQLFNBQVM7SUFDN0I7QUFDQSxVQUFNc0wsU0FBUyxDQUFBO0FBQ2YsU0FBSzVKLElBQUksR0FBR0EsSUFBSTBOLFVBQVVwUCxRQUFRMEIsS0FBSztBQUN0QyxVQUFJNUIsSUFBSXNQLFVBQVUxTixDQUFDLEVBQUVvUDtBQUNyQmhSLFVBQUkrRSxpQkFBaUIvRSxHQUFHRyxHQUFHVixTQUFTO0FBQ3BDNlAsZ0JBQVUxTixDQUFDLEVBQUVvTyxrQkFBa0JoUTtBQUMvQndMLGFBQU9BLE9BQU90TCxNQUFNLElBQUEsWUFBQTlKLE9BQWdCNEosQ0FBQztJQUN0QztBQUNBdEgsV0FBTzhTLFNBQVNBLE9BQU9xRCxLQUFLLEdBQUc7QUFDL0JuWixRQUFJTCxJQUFJcUQsTUFBTSxFQUNaMlQsS0FBTWdGLFVBQVM7QUFDZlQsdUJBQWlCdEIsV0FBVytCLElBQUk7QUFDaENOLGVBQVN6QixTQUFTO0lBQ25CLENBQUMsRUFDQWxFLEtBQU1rRyxTQUFRO0FBQ2QsVUFBSSxDQUFDQSxLQUFLO0FBQ1Q3USx3QkFBZ0I7TUFDakI7QUFDQXNRLGVBQVN6QixTQUFTO0lBQ25CLENBQUM7RUFDSDtBQUNBLFFBQU1pQyxhQUFjQyxXQUFVO0FBQzdCLFFBQUlBLE1BQU1DLFdBQVc7QUFDcEI7SUFDRDtBQUNBLGFBQUFDLEtBQUEsR0FBQUMsV0FBcUI1SixTQUFBMkosS0FBQUMsU0FBQXpSLFFBQUF3UixNQUFTO0FBQTlCLFlBQVdFLFNBQUFELFNBQUFELEVBQUE7QUFDVixVQUFJRSxXQUFXSixPQUFPO0FBQ3JCSSxlQUFPQyxXQUFXO01BQ25CO0lBQ0Q7QUFDQUwsVUFBTUMsWUFBWTtBQUNsQixRQUFJRCxNQUFNYixLQUFLO0FBQ2RtQixjQUFRTixLQUFLO0lBQ2QsT0FBTztBQUVOLFlBQU1PLGdCQUFnQlAsTUFBTVEsaUJBQWlCUixNQUFNUCxhQUFhO0FBQ2hFLFlBQU1nQixjQUFjVCxNQUFNbmIsS0FBS2UsU0FBUztBQUN4QyxVQUNFMmEsY0FBYzdSLFdBQVcsS0FBSytSLFlBQVkvUixTQUFTLEtBQ25ENlIsY0FBYzdSLFNBQVMsS0FBSytSLFlBQVkxTyxRQUFRd08sYUFBYSxHQUM3RDtBQUdEUCxjQUFNVSxZQUFZO0FBQ2xCLGNBQU1sUyxJQUFJaVMsWUFBWUUsTUFBTSxHQUFHO0FBQy9CLFNBQUNYLE1BQU1QLFNBQVMsSUFBSWpSO0FBQ3BCd1IsY0FBTVEsZ0JBQWdCUixNQUFNUDtBQUM1QixZQUFJalIsRUFBRUUsU0FBUyxHQUFHO0FBQ2pCLFdBQUEsRUFBR3NSLE1BQU1uRCxVQUFVLElBQUlyTztRQUN4QjtBQUNBd1IsY0FBTVksa0JBQU5aLE1BQU1ZLGdCQUFrQjtVQUN2QkMsT0FBT3JTLEVBQUUsQ0FBQyxFQUFFRTtVQUNab1MsS0FBS3RTLEVBQUUsQ0FBQyxFQUFFRTtRQUNYO01BQ0Q7QUFDQSxVQUFJc1IsTUFBTVUsV0FBVztBQUNwQlYsY0FBTWUsWUFBWTtNQUNuQjtBQUNBLFVBQUlmLE1BQU1ZLGVBQWU7QUFDeEJJLG1CQUFXLE1BQU07QUFDaEJoQixnQkFBTWlCLGFBQWFqQixNQUFNWSxjQUFjQyxPQUFPYixNQUFNWSxjQUFjRSxHQUFHO1FBQ3RFLEdBQUcsQ0FBQztNQUNMO0lBQ0Q7RUFDRDtBQUNBLFFBQU1SLFVBQVdOLFdBQVU7QUFDMUIsUUFBSUEsTUFBTUMsV0FBVztBQUNwQkQsWUFBTWtCLGdCQUFnQmxCLE1BQU1iLEtBQUssT0FBTyxNQUFNLElBQUk7QUFDbERhLFlBQU1iLE1BQU07SUFDYixPQUFPO0FBQ05ZLGlCQUFXQyxLQUFLO0lBQ2pCO0VBQ0Q7QUFDQSxRQUFNbUIsY0FBY0EsTUFBTTtBQUN6QixVQUFNckQsWUFBWSxDQUFBO0FBQ2xCLGFBQUFzRCxNQUFBLEdBQUFDLFlBQXFCOUssU0FBQTZLLE1BQUFDLFVBQUEzUyxRQUFBMFMsT0FBUztBQUE5QixZQUFXaEIsU0FBQWlCLFVBQUFELEdBQUE7QUFDVixVQUFJaEIsT0FBT25iLFVBQVV5UyxrQkFBa0IwSSxPQUFPbmIsVUFBVXdTLE1BQU07QUFDN0RxRyxrQkFBVUEsVUFBVXBQLE1BQU0sSUFBSTBSO01BQy9CO0lBQ0Q7QUFDQSxRQUFJdEMsVUFBVXBQLFdBQVcsR0FBRztBQUMzQjhLLG1CQUNFQyxhQUFZO0FBQ1pvQyx1QkFBZXBDLE9BQU87TUFDdkIsR0FDQzZILFNBQVE7QUFDUixhQUFLM2QsR0FBR2lFLE9BQU8wWixLQUFLO1VBQUN2WixLQUFLO1FBQVEsQ0FBQztNQUNwQyxDQUNEO0FBQ0E7SUFDRDtBQUNBdVgsaUJBQWF4QixXQUFZeUQsY0FBYTtBQUNyQyxVQUFJQyxXQUFXO0FBQ2YsVUFBSUMsYUFBYTtBQUFBLFVBQUFDLGFBQUE5QywyQkFDSzJDLFFBQUEsR0FBQUk7QUFBQSxVQUFBO0FBQXRCLGFBQUFELFdBQUFqTyxFQUFBLEdBQUEsRUFBQWtPLFNBQUFELFdBQUE1QyxFQUFBLEdBQUFqRSxRQUFnQztBQUFBLGdCQUFyQitHLFVBQUFELE9BQUEvYjtBQUNWLGNBQUlnYyxRQUFRbkMsY0FBY21DLFFBQVFwQyxVQUFVO0FBQzNDLGdCQUFJb0MsUUFBUXpDLEtBQUs7QUFDaEJxQywyQkFBQUEsV0FBYUk7WUFDZCxXQUFXQSxRQUFRQyxZQUFZLElBQUksR0FBRztBQUNyQ0Qsc0JBQVFFLE9BQU87WUFDaEI7VUFDRCxPQUFPO0FBR05MLHlCQUFhO1VBQ2Q7UUFDRDtNQUFBLFNBQUF4QyxLQUFBO0FBQUF5QyxtQkFBQW5jLEVBQUEwWixHQUFBO01BQUEsVUFBQTtBQUFBeUMsbUJBQUF4QyxFQUFBO01BQUE7QUFDQSxVQUFJc0MsVUFBVTtBQUNibEIsZ0JBQVFrQixRQUFRO01BQ2pCLFdBQVcsQ0FBQ0MsWUFBWTtBQUN2QmpJLHFCQUNFQyxhQUFZO0FBQ1pvQyx5QkFBZXBDLE9BQU87UUFDdkIsR0FDQzZILFNBQVE7QUFDUixlQUFLM2QsR0FBR2lFLE9BQU8wWixLQUFLO1lBQUN2WixLQUFLO1VBQVEsQ0FBQztRQUNwQyxDQUNEO01BQ0Q7SUFDRCxDQUFDO0VBQ0Y7QUFDQSxRQUFNZ2EsZ0JBQWdCQSxNQUFNO0FBQzNCLFFBQUl2TCxnQkFBZ0JGLFVBQVU7QUFDN0I7SUFDRDtBQUNBRSxtQkFBZXZGLEtBQUssT0FBTztBQUMzQnVGLGlCQUFheE8sT0FBTztBQUNwQndPLGlCQUFhNVEsUUFBUTZFLFdBQVcsaUJBQWlCO0FBQ2pEK0wsaUJBQWF3TCxpQkFBaUIsU0FBU2IsV0FBVztBQUNsRCxRQUFJekssV0FBVztBQUNkQSxnQkFBVXVMLFlBQVl6TCxZQUFZO0lBQ25DLE9BQU87QUFDTkgsY0FBUWxSLE9BQU9xUixZQUFZO0lBQzVCO0VBQ0Q7QUFDQSxRQUFNMEwsa0JBQWtCQSxNQUFNO0FBQzdCLFFBQUksQ0FBQzFMLGNBQWM7QUFDbEI7SUFDRDtBQUNBLFFBQUkyTCxhQUFhO0FBQ2pCLGFBQUFDLE1BQUEsR0FBQUMsWUFBcUI5TCxTQUFBNkwsTUFBQUMsVUFBQTNULFFBQUEwVCxPQUFTO0FBQTlCLFlBQVdoQyxTQUFBaUMsVUFBQUQsR0FBQTtBQUNWLFVBQUloQyxPQUFPbmIsVUFBVXVTLFdBQVc7QUFDL0IySyxxQkFBYTtBQUNiO01BQ0Q7SUFDRDtBQUNBM0wsaUJBQWFtRCxXQUFXLENBQUN3STtFQUMxQjtBQUNBLFFBQU1HLG9CQUFvQjtJQUN6QkMsWUFBWTtNQUNYaFIsS0FBQSxHQUFBM00sT0FBUWpCLEdBQUdDLE9BQU9DLElBQ2pCLGNBQ0QsR0FBQyxpRkFBQTs7O01BR0QyZSxTQUFTQSxDQUFDQyxhQUFhQyxhQUFhO0FBQ25DLFlBQUlELGVBQWVBLFlBQVkvVCxVQUFVLEdBQUc7QUFDM0MsZ0JBQU1oRSxNQUFNK1gsWUFBWSxDQUFDLEVBQUV4USxNQUFNb0QsS0FBS0MsSUFBSSxHQUFHbU4sWUFBWSxDQUFDLEVBQUUxUSxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDN0UsZ0JBQU0sQ0FBQSxFQUFHaUksTUFBTSxJQUFJeUk7QUFDbkIsY0FBSUUsU0FBUztBQUNiM1QseUJBQUFBLGFBQWUsSUFBSVEsT0FBQSxLQUFBNUssT0FBWStKLEdBQUdvQyxpQkFBZSxJQUFBLENBQUk7QUFDckQsbUJBQVNYLElBQUksR0FBR0EsSUFBSTRKLE9BQU90TCxRQUFRMEIsS0FBSztBQUN2Q3BCLHVCQUFXOEYsWUFBWTtBQUN2QixrQkFBTXBELElBQUkxQyxXQUFXMkMsS0FBS3FJLE9BQU81SixDQUFDLENBQUM7QUFDbkMsZ0JBQUlzQixLQUFLQSxFQUFFaEQsU0FBUyxHQUFHO0FBQ3RCc0wscUJBQU81SixDQUFDLElBQUk0SixPQUFPNUosQ0FBQyxFQUFFNkIsTUFBTW9ELEtBQUtDLElBQUksR0FBRzBFLE9BQU81SixDQUFDLEVBQUUyQixRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDbkUsa0JBQUlySCxRQUFRc1AsT0FBTzVKLENBQUMsR0FBRztBQUN0QnVTLHlCQUFTO2NBQ1Y7WUFDRCxPQUFPO0FBQ04zSSxxQkFBTzRJLE9BQU94UyxHQUFHLENBQUM7QUFDbEJBO1lBQ0Q7VUFDRDtBQUNBNEosaUJBQU8ySSxTQUFTQTtBQUNoQixjQUFJRCxhQUFhaFksS0FBSztBQUNyQnNQLG1CQUFPNkksYUFBYW5ZO1VBQ3JCO0FBRUEsaUJBQU9zUDtRQUNSO0FBQ0EsZUFBTztNQUNSO0lBQ0Q7SUFDQThJLGdCQUFnQjtNQUNmdlIsS0FBQSxHQUFBM00sT0FBUWpCLEdBQUdDLE9BQU9DLElBQ2pCLGNBQ0QsR0FBQyxpR0FBQTtNQUNEMmUsU0FBVUMsaUJBQWdCO0FBQ3pCLFlBQUlBLGVBQWVBLFlBQVkxSyxTQUFTMEssWUFBWTFLLE1BQU1nTCxVQUFVO0FBQ25FLGdCQUFNL0ksU0FBU3lJLFlBQVkxSyxNQUFNZ0w7QUFDakMsbUJBQVMzUyxJQUFJLEdBQUdBLElBQUk0SixPQUFPdEwsUUFBUTBCLEtBQUs7QUFDdkM0SixtQkFBTzVKLENBQUMsSUFBSTRKLE9BQU81SixDQUFDLEVBQUUvSSxNQUFNNEssTUFBTW9ELEtBQUtDLElBQUksR0FBRzBFLE9BQU81SixDQUFDLEVBQUUvSSxNQUFNMEssUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDO1VBQ2hGO0FBQ0EsaUJBQU9pSTtRQUNSO0FBQ0EsZUFBTztNQUNSO0lBQ0Q7SUFDQTJJLFFBQVE7TUFDUHBSLEtBQUEsR0FBQTNNLE9BQVFqQixHQUFHQyxPQUFPQyxJQUFJLGNBQWMsR0FBQyxnRUFBQTtNQUNyQzJlLFNBQVNBLENBQUNDLGFBQWFDLGFBQWE7QUFDbkMsWUFBSUQsZUFBZUEsWUFBWTFLLFNBQVMwSyxZQUFZMUssTUFBTUMsU0FBUyxDQUFDeUssWUFBWTFLLE1BQU1DLE1BQU0sRUFBRSxHQUFHO0FBRWhHLHFCQUFXcUgsS0FBS29ELFlBQVkxSyxNQUFNQyxPQUFPO0FBQ3hDLGdCQUFJLENBQUMxSixPQUFPQyxPQUFPa1UsWUFBWTFLLE1BQU1DLE9BQU9xSCxDQUFDLEdBQUc7QUFDL0M7WUFDRDtBQUNBLGdCQUFJMkQsU0FBU1AsWUFBWTFLLE1BQU1DLE1BQU1xSCxDQUFDLEVBQUVoWTtBQUN4QzJiLHFCQUFTQSxPQUFPL1EsTUFBTW9ELEtBQUtDLElBQUksR0FBRzBOLE9BQU9qUixRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDMUQsa0JBQU1pSSxTQUFTLENBQUNnSixNQUFNO0FBQ3RCaEosbUJBQU8ySSxTQUFTO0FBQ2hCLGdCQUFJRCxhQUFhTSxRQUFRO0FBQ3hCaEoscUJBQU82SSxhQUFhRztZQUNyQjtBQUVBLG1CQUFPaEo7VUFDUjtRQUNEO0FBQ0EsZUFBTztNQUNSO0lBQ0Q7SUFDQWlKLGVBQWU7TUFDZDFSLEtBQUEsR0FBQTNNLE9BQVFqQixHQUFHQyxPQUFPQyxJQUNqQixjQUNELEdBQUMsc0dBQUE7TUFDRDJlLFNBQVVDLGlCQUFnQjtBQUN6QixZQUFJQSxlQUFlQSxZQUFZMUssU0FBUzBLLFlBQVkxSyxNQUFNbUwsaUJBQWlCO0FBQzFFLGdCQUFNbEosU0FBU3lJLFlBQVkxSyxNQUFNbUw7QUFDakMsbUJBQVM5UyxJQUFJLEdBQUdBLElBQUk0SixPQUFPdEwsUUFBUTBCLEtBQUs7QUFDdkM0SixtQkFBTzVKLENBQUMsSUFBSTRKLE9BQU81SixDQUFDLEVBQUUvSSxNQUFNNEssTUFBTW9ELEtBQUtDLElBQUksR0FBRzBFLE9BQU81SixDQUFDLEVBQUUvSSxNQUFNMEssUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDO1VBQ2hGO0FBQ0EsaUJBQU9pSTtRQUNSO0FBQ0EsZUFBTztNQUNSO0lBQ0Q7SUFDQW1KLGtCQUFrQjtNQUNqQjVSLEtBQUEsR0FBQTNNLE9BQVFqQixHQUFHQyxPQUFPQyxJQUNqQixjQUNELEdBQUMsa0ZBQUE7TUFDRDJlLFNBQVVDLGlCQUFnQjtBQUN6QixZQUFJQSxlQUFlQSxZQUFZMUssU0FBUzBLLFlBQVkxSyxNQUFNQyxPQUFPO0FBQ2hFLHFCQUFXcUgsS0FBS29ELFlBQVkxSyxNQUFNQyxPQUFPO0FBQ3hDLGdCQUFJeUssWUFBWTFLLE1BQU1DLE1BQU1xSCxDQUFDLEVBQUVyQixZQUFZO0FBQzFDLG9CQUFNaEUsU0FBU3lJLFlBQVkxSyxNQUFNQyxNQUFNcUgsQ0FBQyxFQUFFckI7QUFDMUMsdUJBQVM1TixJQUFJLEdBQUdBLElBQUk0SixPQUFPdEwsUUFBUTBCLEtBQUs7QUFDdkM0Six1QkFBTzVKLENBQUMsSUFBSTRKLE9BQU81SixDQUFDLEVBQUUvSSxNQUFNNEssTUFBTW9ELEtBQUtDLElBQUksR0FBRzBFLE9BQU81SixDQUFDLEVBQUUvSSxNQUFNMEssUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDO2NBQ2hGO0FBQ0EscUJBQU9pSTtZQUNSO1VBQ0Q7UUFDRDtBQUNBLGVBQU87TUFDUjtJQUNEO0VBQ0Q7QUFDQSxRQUFNb0osb0JBQW9CO0lBQ3pCQyxhQUFhO01BQ1puVCxNQUFNO01BQ05vVCxTQUFTLENBQUMsWUFBWTtNQUN0QmhaLE9BQU8sQ0FBQztNQUNSaVosTUFBTTtNQUNOQyxNQUFNO01BQ05DLGNBQWM7SUFDZjtJQUNBQyxVQUFVO01BQ1R4VCxNQUFNO01BQ05vVCxTQUFTLENBQUMsa0JBQWtCLFFBQVE7TUFDcENoWixPQUFPLENBQUM7TUFDUmlaLE1BQU07TUFDTkMsTUFBTTtNQUNOQyxjQUFjO0lBQ2Y7SUFDQUUsVUFBVTtNQUNUelQsTUFBTTtNQUNOb1QsU0FBUyxDQUFDLGNBQWMsZ0JBQWdCO01BQ3hDaFosT0FBTyxDQUFDO01BQ1JpWixNQUFNO01BQ05DLE1BQU07TUFDTkMsY0FBYztJQUNmO0lBQ0FHLFFBQVE7TUFDUDFULE1BQU07TUFDTm9ULFNBQVMsQ0FBQyxlQUFlO01BQ3pCaFosT0FBTyxDQUFDO01BQ1JpWixNQUFNO01BQ05DLE1BQU07TUFDTkMsY0FBYztJQUNmO0lBQ0FJLFdBQVc7TUFDVjNULE1BQU07TUFDTm9ULFNBQVMsQ0FBQyxrQkFBa0I7TUFDNUJoWixPQUFPLENBQUM7TUFDUmlaLE1BQU07TUFDTkMsTUFBTTtNQUNOQyxjQUFjO0lBQ2Y7RUFDRDtBQUVBLFFBQU1LLEtBQUs7QUFDWCxRQUFNQyxNQUFNO0FBQ1osUUFBTUMsTUFBTTtBQUNaLFFBQU1DLE1BQU07QUFDWixRQUFNQyxRQUFRO0FBQ2QsUUFBTUMsT0FBTztBQUNiLFFBQU1DLFNBQVM7QUFDZixRQUFNQyxLQUFLO0FBQ1gsUUFBTUMsT0FBTztBQUNiLFFBQU1DLE1BQU07QUFDWixRQUFNQyxNQUFNO0VBQ1osTUFBTUMsZUFBZTtJQUNwQkMsZUFBZS9aLE1BQU07QUFDcEIsV0FBS2dhLFdBQVcsR0FBR2hhLElBQUk7SUFDeEI7SUFDQWlhLHFCQUFxQjtJQUNyQkQsV0FBV0UsTUFBTUMsTUFBTXZQLE9BQU83SyxLQUFLK0osV0FBVztBQUk3QyxVQUFJcVEsTUFBTTtBQUNULFlBQUk1TixRQUFRO0FBQ1g0TixlQUFLQyxNQUFNO1FBQ1o7QUFDQSxhQUFLQyxnQkFBZ0I7QUFDckIsYUFBS0MsVUFBVUgsS0FBS0k7QUFDcEIsYUFBS3ZJLG1CQUFtQnBIO0FBQ3hCLGFBQUs0UCxjQUFjemEsT0FBT0EsSUFBSWdFLFNBQVMsSUFBSWhFLElBQUl1SCxNQUFNLENBQUMsSUFBSTtBQUMxRCxhQUFLbVQsaUJBQWlCLENBQUNyZSxTQUFTLEtBQUtrZSxTQUFTLEtBQUs7QUFFbkQsYUFBS0ksYUFBYTtBQUNsQixZQUFJLENBQUMsS0FBS0Qsa0JBQWtCLEtBQUtFLGFBQWE7QUFDN0MsZUFBS0EsWUFBWUMsTUFBTTljLFVBQVU7UUFDbEM7QUFDQXFjLGFBQUszZixPQUFPLEtBQUtxZ0IsUUFBUTtNQUMxQixPQUFPO0FBQ04sYUFBS1IsZ0JBQWdCO0FBRXJCLGFBQUtySSxtQkFBbUI7QUFDeEIsYUFBS3dJLGNBQWM7QUFDbkIsYUFBS0MsaUJBQWlCO0FBQ3RCLFlBQUksQ0FBQzdOLFFBQVE7QUFDWnVOLGlCQUFPN1QsS0FBSyxNQUFNO0FBQ2xCNlQsZUFBS3pTLFlBQVk7QUFDakIsY0FBSTNILEtBQUs7QUFDUm9hLGlCQUFLM2YsT0FBTzhMLEtBQUssT0FBTyxJQUFJLENBQUM7QUFDN0IsZ0JBQUlzRSxPQUFPO0FBQ1ZBLG9CQUFNa1EsV0FBV0MsYUFBYVosTUFBTXZQLE1BQU1vUSxXQUFXO0FBQ3JEcFEsc0JBQVFBLE1BQU1vUTtZQUNmLFdBQVdkLE1BQU07QUFDaEJBLG1CQUFLMWYsT0FBTzJmLElBQUk7WUFDakI7VUFDRCxXQUFXRCxRQUFRQSxLQUFLSyxZQUFZO0FBQ25DSixpQkFBSzNmLE9BQU84TCxLQUFLLEtBQUssSUFBSSxDQUFDO0FBQzNCNFQsaUJBQUsxZixPQUFPMmYsSUFBSTtVQUNqQjtRQUNEO0FBQ0EsYUFBS1UsV0FBV3ZVLEtBQUssTUFBTTtBQUMzQixhQUFLdVUsU0FBU25ULFlBQVk7QUFDMUIsY0FBTXVULE9BQU8zVSxLQUFLLEdBQUc7QUFDckIyVSxhQUFLOWIsT0FBTztBQUNaOGIsYUFBSzVELGlCQUFpQixTQUFTLEtBQUszWSxLQUFLd2MsS0FBSyxJQUFJLENBQUM7QUFDbkRELGFBQUt6Z0IsT0FBTzhMLEtBQUt0QyxHQUFHbkQsTUFBTUcsS0FBSyxJQUFJLENBQUM7QUFDcENpYSxhQUFLdmUsUUFBUW9ELFdBQVcsY0FBYztBQUN0QyxhQUFLK2EsU0FBU3JnQixPQUFPeWdCLElBQUk7QUFDekJkLGVBQU83VCxLQUFLc0csU0FBUyxPQUFPLE1BQU07QUFDbEN1TixhQUFLelMsWUFBWTtBQUNqQixZQUFJNkUsUUFBUTtBQUNYNE4sZUFBS0MsTUFBTTtRQUNaO0FBQ0FELGFBQUszZixPQUFPLEtBQUtxZ0IsUUFBUTtBQUN6QixZQUFJalEsT0FBTztBQUNWQSxnQkFBTWtRLFdBQVdDLGFBQWFaLE1BQU12UCxNQUFNb1EsV0FBVztRQUN0RCxXQUFXZCxNQUFNO0FBQ2hCQSxlQUFLMWYsT0FBTzJmLElBQUk7UUFDakI7QUFDQSxhQUFLZ0IsY0FBYztBQUNuQixhQUFLQyxZQUFZO0FBQ2pCLGFBQUtkLFVBQVU7TUFDaEI7QUFDQSxXQUFLZSxpQkFBaUJ2UjtBQUN0QixXQUFLb1EsT0FBT0E7QUFDWixXQUFLb0IsU0FBU3RYLEdBQUdoQjtBQUNqQixXQUFLbVgsT0FBT0E7QUFDWixXQUFLbEksa0JBQWtCLEtBQUtEO0FBQzVCLFdBQUt1SixnQkFBZ0IsS0FBS2Q7QUFDMUIsV0FBS3RJLGdCQUFnQixLQUFLa0o7QUFDMUIsV0FBS25KLGFBQWEsS0FBS3NJO0FBQ3ZCLFdBQUtsZ0IsUUFBUXVTO0FBQ2IsV0FBSzJPLGlCQUFpQjNPO0FBQ3RCLFdBQUs0TyxvQkFBb0IsS0FBS3pKO0FBQzlCLFdBQUswSixlQUFlLEtBQUtsQjtBQUN6QixXQUFLbUIsa0JBQWtCLEtBQUtsQjtBQUM1QixXQUFLbUIsa0JBQWtCLEtBQUtQO0FBQzVCLFVBQUksS0FBS2YsV0FBVyxLQUFLcEksWUFBWTtBQUNwQyxhQUFLb0ksUUFBUTVkLFFBQVEsS0FBS3dWO01BQzNCO0FBQ0F0RyxjQUFRQSxRQUFRN0gsTUFBTSxJQUFJO0lBQzNCO0lBQ0EyVyxlQUFlO0FBQ2QsV0FBS1MsY0FBYzdVLEtBQUssTUFBTTtBQUM5QixVQUFJMlUsT0FBTztBQUNYLFVBQUksS0FBS2pKLG9CQUFvQixLQUFLQSxpQkFBaUJqTyxTQUFTLEdBQUc7QUFDOURrWCxlQUFPM1UsS0FBSyxHQUFHO0FBQ2YyVSxhQUFLOWIsT0FBTztBQUNaOGIsYUFBSzVELGlCQUFpQixTQUFTLEtBQUt0VyxPQUFPbWEsS0FBSyxJQUFJLENBQUM7QUFDckRELGFBQUt6Z0IsT0FBTzhMLEtBQUt0QyxHQUFHbkQsTUFBTUUsUUFBUSxJQUFJLENBQUM7QUFDdkNrYSxhQUFLdmUsUUFBUW9ELFdBQVcsaUJBQWlCO0FBQ3pDLGFBQUtxYixZQUFZM2dCLE9BQU84TCxLQUFLLEtBQUssSUFBSSxDQUFDO0FBQ3ZDLGFBQUs2VSxZQUFZM2dCLE9BQU95Z0IsSUFBSTtNQUM3QjtBQUNBLFVBQUksQ0FBQ2pYLEdBQUd6QixvQkFBb0IsS0FBS3lQLGdCQUFnQixHQUFHO0FBQ25EaUosZUFBTzNVLEtBQUssR0FBRztBQUNmMlUsYUFBSzliLE9BQU87QUFDWjhiLGFBQUs1RCxpQkFBaUIsU0FBUyxLQUFLM1ksS0FBS3djLEtBQUssSUFBSSxDQUFDO0FBQ25ERCxhQUFLemdCLE9BQU84TCxLQUFLdEMsR0FBR25ELE1BQU1DLFFBQVEsSUFBSSxDQUFDO0FBQ3ZDbWEsYUFBS3ZlLFFBQVFvRCxXQUFXLGlCQUFpQjtBQUN6QyxhQUFLcWIsWUFBWTNnQixPQUFPOEwsS0FBSyxLQUFLLElBQUksQ0FBQztBQUN2QyxhQUFLNlUsWUFBWTNnQixPQUFPeWdCLElBQUk7QUFDNUIsWUFBSSxDQUFDM1csaUJBQWlCTixHQUFHZCxhQUFhO0FBQ3JDLGVBQUt5WCxjQUFjclUsS0FBSyxNQUFNO0FBQzlCMlUsaUJBQU8zVSxLQUFLLEdBQUc7QUFDZjJVLGVBQUs5YixPQUFPO0FBQ1o4YixlQUFLNUQsaUJBQWlCLFNBQVMsS0FBS2xXLEtBQUsrWixLQUFLLElBQUksQ0FBQztBQUNuREQsZUFBS3pnQixPQUFPOEwsS0FBS3RDLEdBQUduRCxNQUFNTSxNQUFNLElBQUksQ0FBQztBQUNyQzhaLGVBQUt2ZSxRQUFRb0QsV0FBVyxlQUFlO0FBQ3ZDLGVBQUs2YSxZQUFZbmdCLE9BQU84TCxLQUFLLEtBQUssSUFBSSxDQUFDO0FBQ3ZDLGVBQUtxVSxZQUFZbmdCLE9BQU95Z0IsSUFBSTtBQUM1QkEsaUJBQU8zVSxLQUFLLEdBQUc7QUFDZjJVLGVBQUs5YixPQUFPO0FBQ1o4YixlQUFLNUQsaUJBQWlCLFNBQVMsS0FBS2pXLEdBQUc4WixLQUFLLElBQUksQ0FBQztBQUNqREQsZUFBS3pnQixPQUFPOEwsS0FBS3RDLEdBQUduRCxNQUFNTyxJQUFJLElBQUksQ0FBQztBQUNuQzZaLGVBQUt2ZSxRQUFRb0QsV0FBVyxhQUFhO0FBQ3JDLGVBQUs2YSxZQUFZbmdCLE9BQU84TCxLQUFLLEtBQUssSUFBSSxDQUFDO0FBQ3ZDLGVBQUtxVSxZQUFZbmdCLE9BQU95Z0IsSUFBSTtBQUM1QixlQUFLRSxZQUFZM2dCLE9BQU8sS0FBS21nQixXQUFXO1FBQ3pDO01BQ0Q7QUFDQSxXQUFLRSxXQUFXdlUsS0FBSyxNQUFNO0FBQzNCLFdBQUt1VSxTQUFTblQsWUFBWTtBQUMxQixXQUFLbVQsU0FBU3JnQixPQUFPLEtBQUsyZ0IsV0FBVztBQUNyQyxXQUFLQyxZQUFZOVUsS0FBSyxNQUFNO0FBQzVCLFdBQUs4VSxVQUFVMVQsWUFBWTtBQUMzQixXQUFLMFQsVUFBVVIsTUFBTTljLFVBQVU7QUFDL0JtZCxhQUFPM1UsS0FBSyxHQUFHO0FBQ2YyVSxXQUFLOWIsT0FBTztBQUNaOGIsV0FBSzVELGlCQUFpQixTQUFTLEtBQUtwVyxRQUFRaWEsS0FBSyxJQUFJLENBQUM7QUFDdERELFdBQUt6Z0IsT0FBTzhMLEtBQUt0QyxHQUFHbkQsTUFBTUksU0FBUyxJQUFJLENBQUM7QUFDeENnYSxXQUFLdmUsUUFBUW9ELFdBQVcsa0JBQWtCO0FBQzFDLFdBQUtzYixVQUFVNWdCLE9BQU84TCxLQUFLLEtBQUssSUFBSSxDQUFDO0FBQ3JDLFdBQUs4VSxVQUFVNWdCLE9BQU95Z0IsSUFBSTtBQUMxQixXQUFLSixTQUFTcmdCLE9BQU8sS0FBSzRnQixTQUFTO0lBQ3BDO0lBQ0FTLGtCQUFrQkMsbUJBQW1CO0FBQ3BDLFVBQ0MsS0FBS1IsVUFDTDdDLGtCQUFrQixLQUFLNkMsTUFBTSxLQUM3QjdDLGtCQUFrQixLQUFLNkMsTUFBTSxFQUFFekMsUUFDL0IsQ0FBQ2lELG1CQUNBO0FBQ0QsYUFBS1IsU0FBU3RYLEdBQUdoQjtNQUNsQjtBQUNBLFdBQUsxSSxRQUFReVM7QUFDYixZQUFNalMsUUFBTztBQUNidWIsaUJBQVcsTUFBTTtBQUNoQnZiLFFBQUFBLE1BQUtpaEIsV0FBV0QsaUJBQWlCO01BQ2xDLEdBQUc5WCxHQUFHbEIsYUFBYTtJQUNwQjtJQUNBa1osV0FBVztBQUNWLFlBQU1DLE9BQU8zVixLQUFLLE1BQU07QUFDeEIyVixXQUFLQyxTQUFTO0FBQ2RELFdBQUs1RSxpQkFBaUIsVUFBVSxLQUFLOEUsT0FBT2pCLEtBQUssSUFBSSxDQUFDO0FBQ3RELFdBQUtlLE9BQU9BO0FBQ1osWUFBTW5oQixRQUFPO0FBQ2IsWUFBTVosT0FBT29NLEtBQUssT0FBTztBQUN6QnBNLFdBQUttRCxPQUFPO0FBQ1puRCxXQUFLa2lCLE9BQU9wWSxHQUFHakI7QUFDZixVQUFJLENBQUN1QixlQUFlO0FBV25CcEssYUFBS21kLGlCQUFpQixTQUFVZ0YsV0FBVTtBQUN6QyxnQkFBTXRjLE1BQU1zYyxNQUFNdGMsT0FBTztBQUN6QixjQUNDakYsTUFBS3doQixPQUNMeGhCLE1BQUt5aEIsWUFBWTFDLE9BQ2pCLENBQUMvZSxNQUFLMGhCLG9CQUNMemMsUUFBUXFaLE9BQU9yWixRQUFRc1osT0FBT3RaLFFBQVF1WixPQUFPdlosUUFBUXdaLFFBQ3JEO0FBQ0R6ZSxZQUFBQSxNQUFLd2hCLE1BQU07VUFDWjtBQUNBLGNBQUl4aEIsTUFBS3doQixLQUFLO0FBQ2IsbUJBQU87VUFDUjtBQUNBLGNBQUl2YyxRQUFRMlosTUFBTTNaLFFBQVE0WixRQUFRNVosUUFBUXlaLFFBQVF6WixRQUFRMFosUUFBUTtBQUVqRSxnQkFBSTNlLE1BQUsyaEIsYUFBYSxHQUFHO0FBQ3hCLHFCQUFPM2hCLE1BQUs0aEIsV0FBV0wsS0FBSztZQUM3QjtVQUNELE9BQU87QUFDTixnQkFBSXRjLFFBQVF1WixPQUFPeGUsTUFBS3loQixZQUFZMUMsT0FBTyxDQUFDL2UsTUFBSzZoQixrQkFBa0IsR0FBRztBQUVyRTdoQixjQUFBQSxNQUFLOGhCLE9BQU87QUFDWjtZQUNEO0FBR0EsZ0JBQUk5aEIsTUFBS21mLG9CQUFvQjtBQUM1QjtZQUNEO0FBQ0FuZixZQUFBQSxNQUFLK2dCLGtCQUFrQjliLFFBQVFvWixNQUFNcFosUUFBUTZaLE9BQU83WixRQUFRdVosR0FBRztVQUNoRTtBQUNBLGlCQUFPO1FBQ1IsQ0FBQztBQUNEcGYsYUFBS21kLGlCQUFpQixXQUFZZ0YsV0FBVTtBQUMzQyxnQkFBTXRjLE1BQU1zYyxNQUFNdGMsT0FBTztBQUN6QmpGLFVBQUFBLE1BQUt5aEIsVUFBVXhjO0FBQ2ZqRixVQUFBQSxNQUFLMmhCLFdBQVc7QUFFaEIsY0FBSSxDQUFDM2hCLE1BQUt3aEIsT0FBT3ZjLFFBQVE4WixPQUFPLENBQUMvZSxNQUFLMGhCLGlCQUFpQjtBQUV0RDFoQixZQUFBQSxNQUFLd2hCLE1BQU07VUFDWixXQUNDeGhCLE1BQUt3aEIsT0FDTHZjLFFBQVE4WixPQUNSLEVBQUc5WixPQUFPLE1BQU1BLE9BQU8sTUFBUUEsT0FBTyxNQUFNQSxPQUFPLE1BQU9BLFFBQVEsTUFDakU7QUFJRGpGLFlBQUFBLE1BQUt3aEIsTUFBTTtVQUNaO0FBQ0EsY0FBSXhoQixNQUFLd2hCLEtBQUs7QUFDYixtQkFBTztVQUNSO0FBRUEsY0FBSXZjLFFBQVFzWixLQUFLO0FBQ2hCLG1CQUFPdmUsTUFBS3FoQixPQUFPRSxLQUFLO1VBQ3pCO0FBRUEsaUJBQU90YyxRQUFRdVosTUFBTS9OLFFBQVE4USxLQUFLLElBQUk7UUFDdkMsQ0FBQztBQUVEbmlCLGFBQUttZCxpQkFBaUIsWUFBYWdGLFdBQVU7QUFDNUN2aEIsVUFBQUEsTUFBSzJoQjtBQUNMLGlCQUFPM2hCLE1BQUs0aEIsV0FBV0wsS0FBSztRQUM3QixDQUFDO0FBQ0RuaUIsYUFBS21kLGlCQUFpQixTQUFTLE1BQU07QUFDcENqQyxxQkFBV3RhLEtBQUk7UUFDaEIsQ0FBQztBQUVEZixVQUFFRyxJQUFJLEVBQUV5RCxHQUFHLFFBQVEsS0FBS2tmLFNBQVMzQixLQUFLLElBQUksQ0FBQztBQUUzQyxZQUFJO0FBR0huaEIsWUFBRUcsSUFBSSxFQUFFeUQsR0FBRyxvQkFBb0IsTUFBTTtBQUNwQzdDLFlBQUFBLE1BQUt5aEIsVUFBVTFDO0FBQ2YvZSxZQUFBQSxNQUFLMGhCLGtCQUFrQjtBQUN2QjFoQixZQUFBQSxNQUFLd2hCLE1BQU07QUFDWHhoQixZQUFBQSxNQUFLbWYscUJBQXFCO1VBQzNCLENBQUM7QUFDRGxnQixZQUFFRyxJQUFJLEVBQUV5RCxHQUFHLGtCQUFrQixNQUFNO0FBQ2xDN0MsWUFBQUEsTUFBS3loQixVQUFVMUM7QUFDZi9lLFlBQUFBLE1BQUswaEIsa0JBQWtCO0FBQ3ZCMWhCLFlBQUFBLE1BQUt3aEIsTUFBTTtBQUNYeGhCLFlBQUFBLE1BQUttZixxQkFBcUI7VUFDM0IsQ0FBQztBQUNEbGdCLFlBQUVHLElBQUksRUFBRXlELEdBQUcsYUFBYSxNQUFNO0FBQzdCN0MsWUFBQUEsTUFBS3doQixNQUFNO0FBQ1gsZ0JBQUl4aEIsTUFBS21mLG9CQUFvQjtBQUM1QjtZQUNEO0FBQ0FuZixZQUFBQSxNQUFLK2dCLGtCQUFrQixLQUFLO1VBQzdCLENBQUM7UUFDRixRQUFRO1FBRVI7QUFDQTloQixVQUFFRyxJQUFJLEVBQUV5RCxHQUFHLFFBQVEsTUFBTTtBQUN4QjdDLFVBQUFBLE1BQUswaEIsa0JBQWtCO0FBQ3ZCMWhCLFVBQUFBLE1BQUt3aEIsTUFBTTtRQUNaLENBQUM7TUFDRjtBQUNBLFdBQUtwaUIsT0FBT0E7QUFDWixXQUFLRyxPQUFPaU0sS0FBSyxLQUFLO0FBQ3RCLFVBQUl3VyxPQUFPO0FBQ1gsVUFBSSxDQUFDeFksZUFBZTtBQUNuQndZLGVBQU94VyxLQUFLLFFBQVE7QUFDcEJ3VyxhQUFLekYsaUJBQWlCLFNBQVMsTUFBTTtBQUNwQyxjQUFJdmMsTUFBS2lpQixvQkFBb0IsQ0FBQyxHQUFHO0FBQ2hDamlCLFlBQUFBLE1BQUtpaEIsV0FBVyxPQUFPLElBQUk7VUFDNUI7UUFDRCxDQUFDO0FBQ0RlLGFBQUt6RixpQkFBaUIsWUFBYXpjLE9BQU07QUFDeEMsY0FBSUUsTUFBS2lpQixvQkFBb0IsQ0FBQyxHQUFHO0FBQ2hDamlCLFlBQUFBLE1BQUtxaEIsT0FBT3ZoQixDQUFDO1VBQ2Q7UUFDRCxDQUFDO0FBQ0RraUIsYUFBS3pGLGlCQUFpQixVQUFVLE1BQU07QUFDckN2YyxVQUFBQSxNQUFLaWlCLG9CQUFvQixDQUFDO0FBQzFCamlCLFVBQUFBLE1BQUtaLEtBQUs4aUIsTUFBTTtRQUNqQixDQUFDO0FBQ0RGLGFBQUt6RixpQkFBaUIsU0FBVWdGLFdBQVU7QUFDekMsY0FBSUEsTUFBTXRjLFFBQVF1WixLQUFLO0FBQ3RCeGUsWUFBQUEsTUFBSzZoQixrQkFBa0I7QUFDdkI3aEIsWUFBQUEsTUFBS1osS0FBSzhpQixNQUFNO0FBQ2hCM0csdUJBQVcsTUFBTTtBQUNoQnZiLGNBQUFBLE1BQUtpaEIsV0FBVyxJQUFJO1lBQ3JCLEdBQUcvWCxHQUFHbEIsYUFBYTtVQUNwQixXQUFXdVosTUFBTXRjLFFBQVFzWixLQUFLO0FBQzdCdmUsWUFBQUEsTUFBS3FoQixPQUFPRSxLQUFLO1VBQ2xCO1FBQ0QsQ0FBQztBQUNELFlBQUksQ0FBQ3JZLEdBQUdmLGNBQWM7QUFDckIsZ0JBQU1nYSxpQkFBaUIzVyxLQUFLLFFBQVE7QUFDcEMscUJBQVd2RyxPQUFPMFksbUJBQW1CO0FBQ3BDLGdCQUFJQSxrQkFBa0IxWSxHQUFHLEVBQUU2WSxNQUFNO0FBQ2hDLG9CQUFNc0UsTUFBTTVXLEtBQUssUUFBUTtBQUN6QjRXLGtCQUFJamlCLFFBQVE4RTtBQUNaLGtCQUFJQSxRQUFRLEtBQUt1YixRQUFRO0FBQ3hCNEIsb0JBQUlDLFdBQVc7Y0FDaEI7QUFDQUQsa0JBQUkxaUIsT0FBTzhMLEtBQUttUyxrQkFBa0IxWSxHQUFHLEVBQUV3RixNQUFNLElBQUksQ0FBQztBQUNsRDBYLDZCQUFlemlCLE9BQU8waUIsR0FBRztZQUMxQjtVQUNEO0FBQ0FELHlCQUFlNUYsaUJBQWlCLFVBQVUsTUFBTTtBQUMvQ3ZjLFlBQUFBLE1BQUt3Z0IsU0FBU3hnQixNQUFLbWlCLGVBQWU5VSxRQUFRck4sTUFBS21pQixlQUFlRyxhQUFhLEVBQUVuaUI7QUFDN0VILFlBQUFBLE1BQUtaLEtBQUs4aUIsTUFBTTtBQUNoQmxpQixZQUFBQSxNQUFLaWhCLFdBQVcsTUFBTSxJQUFJO1VBQzNCLENBQUM7QUFDRCxlQUFLa0IsaUJBQWlCQTtRQUN2QjtNQUNEO0FBQ0EsV0FBS0gsT0FBT0E7QUFDWixZQUFNTyxlQUFlQSxDQUFDQyxLQUFLQyxnQkFBZ0I7QUFDMUMsY0FBTUMsUUFBUTtBQUNkLFlBQUksQ0FBQ0EsU0FBUyxDQUFDQSxNQUFNM2dCLE1BQU07QUFDMUIsaUJBQU8wZ0I7UUFDUjtBQUNBLGVBQU9DLE1BQU0zZ0I7TUFDZDtBQUVBLFlBQU00Z0IsS0FBS25YLEtBQUssT0FBTztBQUN2Qm1YLFNBQUdwZ0IsT0FBTztBQUNWb2dCLFNBQUd4aUIsUUFBUW9pQixhQUFhLGlCQUFpQnZkLFdBQVcsYUFBYSxDQUFDO0FBQ2xFMmQsU0FBR3BHLGlCQUFpQixTQUFTLEtBQUs4RSxPQUFPakIsS0FBSyxJQUFJLENBQUM7QUFDbkQsV0FBS3dDLEtBQUtEO0FBQ1YsWUFBTWIsU0FBU3RXLEtBQUssT0FBTztBQUMzQnNXLGFBQU92ZixPQUFPO0FBQ2R1ZixhQUFPM2hCLFFBQVFvaUIsYUFBYSxxQkFBcUJ2ZCxXQUFXLGlCQUFpQixDQUFDO0FBQzlFOGMsYUFBT3ZGLGlCQUFpQixTQUFTLEtBQUt1RixPQUFPMUIsS0FBSyxJQUFJLENBQUM7QUFDdkQsV0FBS3lDLGVBQWVmO0FBQ3BCLFlBQU16QyxPQUFPN1QsS0FBSyxNQUFNO0FBQ3hCNlQsV0FBS3pTLFlBQVk7QUFDakJ5UyxXQUFLUyxNQUFNZ0QsV0FBVztBQUN0QnpELFdBQUszZixPQUFPTixJQUFJO0FBQ2hCaWdCLFdBQUtTLE1BQU1pRCxhQUFhO0FBQ3hCLFVBQUlmLE1BQU07QUFDVDNDLGFBQUszZixPQUFPc2lCLElBQUk7TUFDakI7QUFDQSxVQUFJLEtBQUtHLGdCQUFnQjtBQUN4QjlDLGFBQUszZixPQUFPLEtBQUt5aUIsY0FBYztNQUNoQztBQUNBLFVBQUksQ0FBQzNZLGVBQWU7QUFDbkI2VixhQUFLM2YsT0FBTyxLQUFLSCxJQUFJO01BQ3RCO0FBQ0E4ZixXQUFLM2YsT0FBT2lqQixFQUFFO0FBQ2R0RCxXQUFLM2YsT0FBT29pQixNQUFNO0FBQ2xCWCxXQUFLemhCLE9BQU8yZixJQUFJO0FBQ2hCOEIsV0FBS3JCLE1BQU05YyxVQUFVO0FBQ3JCLFdBQUtxYyxLQUFLM2YsT0FBT3loQixJQUFJO0lBQ3RCO0lBQ0FuZSxRQUFRdWUsT0FBTztBQUNkLFVBQUksS0FBS2hDLGlCQUFpQixDQUFDMU8sWUFBWSxLQUFLdU8sTUFBTTtBQUNqRCxZQUFJSixlQUFlLEtBQUtJLE1BQU0sTUFBTSxLQUFLQyxNQUFNLElBQUk7TUFDcEQ7QUFDQSxVQUFJLENBQUN0TyxnQkFBZ0IsQ0FBQ0YsVUFBVTtBQUMvQixpQkFBQW1TLE1BQUEsR0FBQUMsWUFBcUJuUyxTQUFBa1MsTUFBQUMsVUFBQWhhLFFBQUErWixPQUFTO0FBQTlCLGdCQUFXckksU0FBQXNJLFVBQUFELEdBQUE7QUFDVixjQUFJckksT0FBT25iLFVBQVV1UyxXQUFXO0FBQy9CdUssMEJBQWM7QUFDZDtVQUNEO1FBQ0Q7TUFDRDtBQUNBLFVBQUksQ0FBQyxLQUFLNkUsTUFBTTtBQUNmLGFBQUtELFNBQVM7TUFDZjtBQUNBLFVBQUksS0FBS2MsTUFBTTtBQUNkLGFBQUtBLEtBQUtsQyxNQUFNOWMsVUFBVTtNQUMzQjtBQUNBLFVBQUksS0FBS21mLGdCQUFnQjtBQUN4QixhQUFLQSxlQUFlckMsTUFBTTljLFVBQVU7TUFDckM7QUFDQSxXQUFLbVUsa0JBQWtCLEtBQUt3SjtBQUM1QixXQUFLRixnQkFBZ0IsS0FBS0k7QUFDMUIsV0FBS3hKLGdCQUFnQixLQUFLeUo7QUFDMUIsV0FBSzFKLGFBQWEsS0FBS3dKO0FBQ3ZCLFdBQUtyaEIsS0FBSzBaLE1BQU0sS0FBS3dILGdCQUFnQnZYLEdBQUc3QixZQUFZNkIsR0FBRzNCO0FBQ3ZELFdBQUtuSSxLQUFLZSxRQUFRLEtBQUtnWCxtQkFBbUIsS0FBS0MsZUFBZSxPQUFPLEtBQUEsSUFBQWpZLE9BQVMsS0FBS2lZLFVBQVU7QUFDN0YsV0FBSzhMLGdCQUFnQixLQUFLMWpCO0FBQzFCLFdBQUt3YSxZQUFZLEtBQUs3QztBQUN0QixXQUFLNkIsY0FBYyxLQUFLeUg7QUFDeEIsV0FBS2poQixRQUFRLEtBQUtBLFVBQVV1UyxZQUFZQyxPQUFPQztBQUMvQyxXQUFLa0osZ0JBQWdCO1FBQ3BCQyxPQUFPLEtBQUtqRSxnQkFBZ0JsTztRQUM1Qm9TLEtBQUssS0FBS2xFLGdCQUFnQmxPO01BQzNCO0FBQ0EsV0FBS2dTLFlBQVk7QUFFakIsVUFBSSxLQUFLdUUsU0FBUztBQUNqQixhQUFLQSxRQUFRTSxNQUFNOWMsVUFBVTtNQUM5QjtBQUNBLFdBQUsrYyxTQUFTRCxNQUFNOWMsVUFBVTtBQUM5QixXQUFLbWUsS0FBS3JCLE1BQU05YyxVQUFVO0FBQzFCLFdBQUs0ZixHQUFHMU8sV0FBVztBQUVuQixZQUFNM1AsU0FBU2tNLFFBQVE4USxLQUFLO0FBQzVCLFdBQUtuaUIsS0FBSzhpQixNQUFNO0FBQ2hCLFdBQUs5aUIsS0FBSytqQixXQUFXO0FBQ3JCMUcsc0JBQWdCO0FBQ2hCLGFBQU9sWTtJQUNSO0lBQ0F1WixLQUFLeUQsT0FBT2YsUUFBUTJDLFVBQVU7QUFDN0IsWUFBTTVlLFNBQVMsS0FBS3ZCLFFBQVF1ZSxLQUFLO0FBQ2pDLFlBQU14WSxJQUFJLEtBQUs0WDtBQUNmLFVBQUk1WCxFQUFFRSxXQUFXLEdBQUc7QUFDbkIsZUFBTzFFO01BQ1I7QUFDQSxXQUFLbkYsS0FBSytqQixXQUFXLENBQUMsQ0FBQ0E7QUFDdkIsV0FBSzNDLFNBQVNBO0FBQ2QsV0FBS1MsV0FBVyxPQUFPLElBQUk7QUFDM0IsYUFBTzFjO0lBQ1I7SUFDQVgsS0FBSzJkLE9BQU87QUFDWCxhQUFPLEtBQUt6RCxLQUFLeUQsT0FBTyxLQUFLZixVQUFVN0Msa0JBQWtCLEtBQUs2QyxNQUFNLEVBQUV6QyxPQUFPN1UsR0FBR2hCLGNBQWMsS0FBS3NZLE1BQU07SUFDMUc7SUFDQW5hLEtBQUtrYixPQUFPO0FBQ1gsYUFBTyxLQUFLekQsS0FBS3lELE9BQU8sVUFBVSxJQUFJO0lBQ3ZDO0lBQ0FqYixHQUFHaWIsT0FBTztBQUNULGFBQU8sS0FBS3pELEtBQUt5RCxPQUFPLFdBQVc7SUFDcEM7SUFDQU8sU0FBUztBQUNSLFVBQUksS0FBS3ZDLGlCQUFpQixDQUFDMU8sVUFBVTtBQUNwQyxhQUFLdVMsYUFBYTtBQUNsQjtNQUNEO0FBRUEsV0FBS3hJLFdBQVc7QUFDaEIsV0FBS3VHLEtBQUtyQixNQUFNOWMsVUFBVTtBQUMxQixVQUFJLEtBQUt3YyxTQUFTO0FBQ2pCLGFBQUtBLFFBQVFNLE1BQU05YyxVQUFVO01BQzlCO0FBQ0EsV0FBSytjLFNBQVNELE1BQU05YyxVQUFVO0FBQzlCLFdBQUt4RCxRQUFRLEtBQUswakI7QUFDbEIsV0FBSy9MLGtCQUFrQixLQUFLd0o7QUFDNUIsV0FBS3ZKLGFBQWEsS0FBS3dKO0FBQ3ZCLFdBQUtILGdCQUFnQixLQUFLSTtBQUMxQixXQUFLeEosZ0JBQWdCLEtBQUt5SjtBQUMxQixVQUFJLEtBQUt0QixTQUFTO0FBQ2pCLGFBQUtBLFFBQVE1ZCxRQUFRLEtBQUt3VixjQUFjLEtBQUtBLFdBQVduTyxTQUFTLElBQUksS0FBS21PLGFBQWE7TUFDeEY7QUFDQSxVQUFJLEtBQUs1WCxVQUFVdVMsV0FBVztBQUM3QixZQUFJLEtBQUt5TixTQUFTO0FBQ2pCLGVBQUtBLFFBQVFNLE1BQU11RCxrQkFBa0I7UUFDdEM7TUFDRCxXQUFXLENBQUN4UyxVQUFVO0FBQ3JCLFlBQUk7QUFDSCxlQUFLMk8sUUFBUU0sTUFBTXVELGtCQUFrQm5hLEdBQUdyQjtRQUN6QyxRQUFRO1FBRVI7TUFDRDtBQUNBNFUsc0JBQWdCO0lBQ2pCO0lBQ0EyRyxlQUFlO0FBQ2QsVUFBSSxDQUFDdFIsUUFBUTtBQUNaLGNBQU13UixPQUFPLEtBQUtqRSxLQUFLYTtBQUN2QixZQUFJb0QsTUFBTTtBQUNUQSxlQUFLcmQsT0FBTztRQUNiO01BQ0Q7QUFDQSxVQUFJLEtBQUtvWixRQUFRLEtBQUtBLEtBQUtXLFlBQVk7QUFDdEMsYUFBS1gsS0FBS3BaLE9BQU87TUFDbEI7QUFDQSxlQUFTMEUsSUFBSSxHQUFHQSxJQUFJbUcsUUFBUTdILFFBQVEwQixLQUFLO0FBQ3hDLFlBQUltRyxRQUFRbkcsQ0FBQyxNQUFNLE1BQU07QUFDeEJtRyxrQkFBUXFNLE9BQU94UyxHQUFHLENBQUM7QUFDbkI7UUFDRDtNQUNEO0FBQ0E4UixzQkFBZ0I7SUFDakI7SUFDQThHLFNBQVNoQyxPQUFPO0FBQ2YsV0FBS2lDLFNBQVN2ZCxPQUFPO0FBQ3JCLFdBQUt1ZCxXQUFXO0FBQ2hCLFdBQUtyTSxrQkFBa0IsS0FBS0Q7QUFDNUIsV0FBS0UsYUFBYSxLQUFLc0k7QUFDdkIsV0FBS2UsZ0JBQWdCLEtBQUtkO0FBQzFCLFdBQUt0SSxnQkFBZ0IsS0FBS2tKO0FBQzFCLFdBQUtJLG9CQUFvQixLQUFLeko7QUFDOUIsV0FBSzBKLGVBQWUsS0FBS2xCO0FBQ3pCLFdBQUttQixrQkFBa0IsS0FBS2xCO0FBQzVCLFdBQUttQixrQkFBa0IsS0FBS1A7QUFDNUIsV0FBSy9nQixRQUFRdVM7QUFDYixVQUFJLENBQUMsS0FBS29GLG1CQUFtQixLQUFLQSxnQkFBZ0JsTyxXQUFXLEdBQUc7QUFFL0QsYUFBS21hLGFBQWE7TUFDbkIsT0FBTztBQUVOLGFBQUs1RCxRQUFRQyxXQUFXeFosT0FBTztBQUMvQixhQUFLdVosUUFBUTlmLE9BQU84TCxLQUFLLEtBQUsyTCxpQkFBaUIsSUFBSSxDQUFDO0FBQ3BELGFBQUtxSSxRQUFRbmIsT0FBTzBJLGFBQUEsR0FBQTVOLE9BQWdCK0osR0FBR21DLG9CQUFrQixHQUFBLEVBQUFsTSxPQUFJLEtBQUtnWSxlQUFlLENBQUU7QUFDbkYsYUFBS3FJLFFBQVE1ZCxRQUFRLEtBQUt3VixjQUFjO0FBQ3hDLGFBQUtvSSxRQUFRNVMsWUFBWSxLQUFLNlQsZ0JBQWdCLEtBQUs7QUFDbkQsYUFBS2pCLFFBQVFNLE1BQU11RCxrQkFBa0I7QUFDckMsWUFBSSxLQUFLeEQsYUFBYTtBQUNyQixlQUFLQSxZQUFZQyxNQUFNOWMsVUFBVSxLQUFLeWQsZ0JBQWdCLEtBQUs7UUFDNUQ7QUFDQWhFLHdCQUFnQjtNQUNqQjtBQUNBLGFBQU9oTSxRQUFROFEsS0FBSztJQUNyQjtJQUNBM0csYUFBYTtBQUNaLFVBQUksS0FBS29ILE1BQU07QUFDZCxhQUFLQSxLQUFLbEMsTUFBTTljLFVBQVU7TUFDM0I7QUFDQSxVQUFJLEtBQUttZixnQkFBZ0I7QUFDeEIsYUFBS0EsZUFBZXJDLE1BQU05YyxVQUFVO01BQ3JDO0FBQ0EsV0FBS3dYLFlBQVk7SUFDbEI7SUFDQTRCLFlBQVlxSCxXQUFXO0FBQ3RCLFdBQUtDLGNBQWM7QUFDbkIsWUFBTXZqQixRQUFRLEtBQUtmLEtBQUtlLE1BQU0rYSxNQUFNLEdBQUc7QUFDdkMsVUFBSWpXLE1BQU07QUFDVixVQUFJOUUsTUFBTThJLFNBQVMsR0FBRztBQUNyQixTQUFBLEVBQUdoRSxHQUFHLElBQUk5RTtNQUNYO0FBQ0EsVUFBSTRJLElBQUk1SSxNQUFNLENBQUMsRUFBRUMsUUFBUSxNQUFNLEdBQUcsRUFBRTRJLEtBQUs7QUFDekMsVUFBSUUsR0FBR3hCLHFCQUFxQjtBQUMzQnFCLFlBQUk4RCxXQUFXOUQsQ0FBQztNQUNqQjtBQUNBLFdBQUtpUixZQUFZalI7QUFDakJBLFVBQUkrRSxpQkFBaUIvRSxHQUFHRyxHQUFHVixTQUFTO0FBQ3BDLFVBQUlPLEVBQUVFLFdBQVcsR0FBRztBQUNuQixhQUFLNlksT0FBTztBQUNaLGVBQU87TUFDUjtBQUNBLFVBQ0MsQ0FBQzJCLGNBQ0MvZCxLQUFLaUIsc0JBQXNCLE1BQU1vQyxNQUFNckQsS0FBS3NCLFdBQWFrQyxHQUFHdEIsYUFBYXNCLEdBQUd0QixVQUFVYixLQUFLZ0MsQ0FBQyxJQUM3RjtBQUNELGFBQUsrWSxPQUFPO0FBQ1osZUFBTztNQUNSO0FBQ0EsV0FBSzNLLGtCQUFrQnBPO0FBQ3ZCLFdBQUtxTyxhQUFhblM7QUFDbEIsV0FBS3diLGdCQUFnQixLQUFLekg7QUFDMUIsYUFBTztJQUNSO0lBQ0FxSSxPQUFPRSxPQUFPO0FBR2IsV0FBSy9LLFdBQVduRyxRQUFRa1IsS0FBSyxNQUFNO0FBQ25DLFlBQU1oZCxTQUFTa00sUUFBUThRLEtBQUs7QUFDNUIsVUFBSSxLQUFLbkYsWUFBWSxHQUFHO0FBQ3ZCLGNBQU0vRCxZQUFZLENBQUMsSUFBSTtBQUN2QixjQUFNc0wsV0FBVyxLQUFLeE07QUFDdEIwQyxxQkFBYXhCLFdBQVl5RCxjQUFhO0FBQ3JDLGNBQUlBLFNBQVMsQ0FBQyxFQUFFcEMsS0FBSztBQUNwQm1CLG9CQUFRaUIsU0FBUyxDQUFDLENBQUM7VUFDcEIsV0FBV0EsU0FBUyxDQUFDLEVBQUVNLFlBQVksSUFBSSxHQUFHO0FBQ3pDTixxQkFBUyxDQUFDLEVBQUVPLE9BQ1hQLFNBQVMsQ0FBQyxFQUFFM0Usb0JBQW9Cd00sV0FDN0IsT0FDQTNlLFdBQVcseUJBQXlCMmUsUUFBUSxDQUNoRDtVQUNEO1FBQ0QsQ0FBQztNQUNGO0FBQ0EsYUFBT3BmO0lBQ1I7SUFDQWYsUUFBUTtBQUNQLFVBQUksQ0FBQyxLQUFLZ2MsU0FBUztBQUVsQixhQUFLQSxVQUFVaFUsS0FBSyxHQUFHO0FBQ3ZCLGFBQUtnVSxRQUFROWYsT0FBTzhMLEtBQUssT0FBTyxJQUFJLENBQUM7QUFDckMsYUFBS2dVLFFBQVFNLE1BQU05YyxVQUFVO0FBQzdCLGFBQUtxYyxLQUFLWSxhQUFhLEtBQUtULFNBQVMsS0FBS0gsS0FBS0ksV0FBV1MsV0FBVztNQUN0RTtBQUNBLFdBQUtWLFFBQVFDLFdBQVd4WixPQUFPO0FBQy9CLFdBQUt1WixRQUFROWYsT0FBTzhMLEtBQUssS0FBSzJMLGlCQUFpQixJQUFJLENBQUM7QUFDcEQsV0FBS3FJLFFBQVFuYixPQUFPMEksYUFBQSxHQUFBNU4sT0FBZ0IrSixHQUFHbUMsb0JBQWtCLEdBQUEsRUFBQWxNLE9BQUksS0FBS2dZLGVBQWUsQ0FBRTtBQUNuRixXQUFLcUksUUFBUTVTLFlBQVksS0FBSzZULGdCQUFnQixLQUFLO0FBQ25ELFdBQUtFLG9CQUFvQixLQUFLeEo7QUFDOUIsV0FBS3lKLGVBQWUsS0FBS3hKO0FBQ3pCLFdBQUt5SixrQkFBa0IsS0FBS0o7QUFDNUIsV0FBS0ssa0JBQWtCLEtBQUt6SjtBQUU1QixXQUFLdUQsV0FBVztBQUNoQixXQUFLdUcsS0FBS3JCLE1BQU05YyxVQUFVO0FBQzFCLFdBQUt3YyxRQUFRNWQsUUFBUSxLQUFLd1YsY0FBYztBQUN4QyxXQUFLb0ksUUFBUU0sTUFBTTljLFVBQVU7QUFDN0IsVUFBSSxLQUFLdWMsZUFBZTtBQUN2QixZQUFJMU8sWUFBWSxLQUFLdU8sTUFBTTtBQUMxQixjQUFJSixlQUFlLEtBQUtJLE1BQU0sTUFBTSxLQUFLQyxNQUFNLElBQUk7UUFDcEQ7QUFDQSxhQUFLRSxnQkFBZ0I7QUFDckIsYUFBS1EsU0FBUzlaLE9BQU87QUFDckIsYUFBSzJaLGFBQWE7QUFDbEIsYUFBS1AsS0FBSzNmLE9BQU8sS0FBS3FnQixRQUFRO01BQy9CO0FBQ0EsVUFBSSxDQUFDLEtBQUt5RCxVQUFVO0FBRW5CLGNBQU1uRSxPQUFPN1QsS0FBSyxNQUFNO0FBQ3hCLGNBQU0yVSxPQUFPM1UsS0FBSyxHQUFHO0FBQ3JCMlUsYUFBSzliLE9BQU87QUFDWjhiLGFBQUs1RCxpQkFBaUIsU0FBUyxLQUFLZ0gsU0FBU25ELEtBQUssSUFBSSxDQUFDO0FBQ3ZERCxhQUFLemdCLE9BQU84TCxLQUFLdEMsR0FBR25ELE1BQU1LLE1BQU0sSUFBSSxDQUFDO0FBQ3JDK1osYUFBS3ZlLFFBQVFvRCxXQUFXLGVBQWU7QUFDdkNxYSxhQUFLM2YsT0FBTzhMLEtBQUssS0FBSyxJQUFJLENBQUM7QUFDM0I2VCxhQUFLM2YsT0FBT3lnQixJQUFJO0FBQ2hCLGFBQUtFLFlBQVkzZ0IsT0FBTzJmLElBQUk7QUFDNUIsYUFBS21FLFdBQVduRTtBQUNoQixZQUFJLENBQUN4TyxVQUFVO0FBQ2QsY0FBSTtBQUNILGlCQUFLMk8sUUFBUU0sTUFBTXVELGtCQUFrQm5hLEdBQUdyQjtVQUN6QyxRQUFRO1VBRVI7UUFDRDtNQUNEO0FBQ0EsVUFBSSxLQUFLZ1ksYUFBYTtBQUNyQixhQUFLQSxZQUFZQyxNQUFNOWMsVUFBVSxLQUFLNmQsa0JBQWtCLEtBQUs7TUFDOUQ7QUFDQSxXQUFLZCxTQUFTRCxNQUFNOWMsVUFBVTtBQUM5QixXQUFLeEQsUUFBUTBTO0FBQ2J1SyxzQkFBZ0I7SUFDakI7SUFDQUosU0FBUztBQUVSLFVBQ0UsS0FBS2xGLG9CQUFvQixLQUFLRCxxQkFDN0IsS0FBS0UsZUFBZSxLQUFLc0ksZUFDeEIsS0FBS3RJLGVBQWUsUUFBUSxLQUFLc0ksWUFBWXpXLFdBQVcsTUFDMUR2RCxLQUFLaUIsc0JBQXNCLE1BQU0sS0FBS3dRLG9CQUFvQnpSLEtBQUtzQixXQUMvRGtDLEdBQUd0QixhQUFhc0IsR0FBR3RCLFVBQVViLEtBQUssS0FBS29RLGVBQWUsR0FDdEQ7QUFDRCxhQUFLMkssT0FBTztBQUNaO01BQ0Q7QUFDQSxXQUFLdGUsTUFBTTtBQUNYLFVBQUksQ0FBQ3VOLGdCQUFnQixDQUFDRixVQUFVO0FBQy9CLGNBQU03USxRQUFPO0FBQ2IrVCxxQkFDRUMsYUFBWTtBQUNab0MseUJBQWVwQyxTQUFTaFUsS0FBSTtRQUM3QixHQUNDNmIsU0FBUTtBQUNSLGVBQUszZCxHQUFHaUUsT0FBTzBaLEtBQUs7WUFBQ3ZaLEtBQUs7VUFBUSxDQUFDO1FBQ3BDLENBQ0Q7TUFDRDtJQUNEO0lBQ0EyRCxPQUFPc2IsT0FBTztBQUdiLFdBQUs3Z0IsU0FBUzJQLFFBQVFrUixLQUFLLE1BQU0sQ0FBQztBQUNsQyxhQUFPOVEsUUFBUThRLEtBQUs7SUFDckI7SUFDQTdnQixTQUFTOFYsVUFBVTtBQUNsQixVQUFJLEtBQUsrSSxlQUFlO0FBRXZCLGFBQUt1QyxPQUFPO0FBQ1o7TUFDRDtBQUNBLFVBQUksQ0FBQy9RLGdCQUFnQixDQUFDRixVQUFVO0FBQy9CLGlCQUFBK1MsTUFBQSxHQUFBQyxZQUFxQi9TLFNBQUE4UyxNQUFBQyxVQUFBNWEsUUFBQTJhLE9BQVM7QUFBOUIsZ0JBQVdqSixTQUFBa0osVUFBQUQsR0FBQTtBQUNWLGNBQUlqSixPQUFPbmIsVUFBVXVTLFdBQVc7QUFDL0J1SywwQkFBYztBQUNkO1VBQ0Q7UUFDRDtNQUNEO0FBQ0EsVUFBSXZMLGNBQWM7QUFDakIsYUFBS3lPLFFBQVE1ZCxRQUFRO0FBQ3JCLGFBQUs0ZCxRQUFRTSxNQUFNZ0UsV0FBVztBQUM5QixZQUFJO0FBQ0gsZUFBS3RFLFFBQVFNLE1BQU11RCxrQkFBa0JuYSxHQUFHckI7UUFDekMsUUFBUTtRQUVSO0FBQ0EsYUFBS3FiLGdCQUFnQixLQUFLMWpCO0FBQzFCLGFBQUtBLFFBQVEyUztBQUNiLGFBQUtrTyxZQUFZUCxNQUFNOWMsVUFBVTtBQUNqQyxhQUFLc2QsVUFBVVIsTUFBTTljLFVBQVU7QUFDL0J5Wix3QkFBZ0I7TUFDakIsV0FBVzVMLFVBQVU7QUFFcEIsYUFBS3VTLGFBQWE7TUFDbkIsT0FBTztBQUNOLGFBQUtGLGdCQUFnQixLQUFLMWpCO0FBQzFCLGFBQUtBLFFBQVEyUztBQUNiLGFBQUtxRSxXQUFXQSxZQUFZdE4sR0FBR25CO0FBQy9CLGNBQU0vSCxRQUFPO0FBQ2IrVCxxQkFDRUMsYUFBWTtBQUNab0MseUJBQWVwQyxTQUFTaFUsS0FBSTtRQUM3QixHQUNDNmIsU0FBUTtBQUNSN2IsVUFBQUEsTUFBS1IsUUFBUVEsTUFBS2tqQjtBQUNsQixlQUFLaGxCLEdBQUdpRSxPQUFPMFosS0FBSztZQUFDdlosS0FBSztVQUFRLENBQUM7UUFDcEMsQ0FDRDtNQUNEO0lBQ0Q7SUFDQTZELFFBQVFvYixPQUFPO0FBRWQsV0FBSy9CLFFBQVE1ZCxRQUFRLEtBQUt3VixjQUFjO0FBQ3hDLFdBQUtvSSxRQUFRTSxNQUFNaUUsaUJBQWlCO0FBQ3BDLFdBQUt2a0IsUUFBUSxLQUFLMGpCO0FBQ2xCLFVBQUksS0FBSzFqQixVQUFVdVMsV0FBVztBQUM3QixhQUFLeU4sUUFBUU0sTUFBTXVELGtCQUFrQjtNQUN0QyxPQUFPO0FBQ04sWUFBSTtBQUNILGVBQUs3RCxRQUFRTSxNQUFNdUQsa0JBQWtCbmEsR0FBR3JCO1FBQ3pDLFFBQVE7UUFFUjtNQUNEO0FBQ0EsV0FBS3dZLFlBQVlQLE1BQU05YyxVQUFVO0FBQ2pDLFdBQUtzZCxVQUFVUixNQUFNOWMsVUFBVTtBQUMvQnlaLHNCQUFnQjtBQUNoQixhQUFPaE0sUUFBUThRLEtBQUs7SUFDckI7O0lBRUF5QyxhQUFhQyxZQUFZO0FBQ3hCLFVBQUksQ0FBQyxLQUFLOUIsZ0JBQWdCO0FBQ3pCO01BQ0Q7QUFDQSxlQUFTeFgsSUFBSSxHQUFHQSxJQUFJLEtBQUt3WCxlQUFlOVUsUUFBUXBFLFFBQVEwQixLQUFLO0FBQzVELGFBQUt3WCxlQUFlOVUsUUFBUTFDLENBQUMsRUFBRTBYLFdBQVcsS0FBS0YsZUFBZTlVLFFBQVExQyxDQUFDLEVBQUV4SyxVQUFVOGpCO01BQ3BGO0lBQ0Q7SUFDQVAsZ0JBQWdCO0FBQ2YsVUFBSTNhLElBQUksS0FBSzNKLEtBQUtlLFNBQVM7QUFDM0I0SSxVQUFJQSxFQUFFM0ksUUFBUSxZQUFZLEVBQUU7QUFDNUIsWUFBTTRMLEtBQUssSUFBSWpDLE9BQUEsS0FBQTVLLE9BQVkrSixHQUFHb0MsaUJBQWUsSUFBQSxDQUFJO0FBQ2pELFVBQUlVLEdBQUdqRixLQUFLZ0MsQ0FBQyxHQUFHO0FBQ2ZBLFlBQUlBLEVBQUV5RCxNQUFNb0QsS0FBS0MsSUFBSSxHQUFHOUcsRUFBRXVELFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFbE0sUUFBUSxZQUFZLEVBQUU7TUFDcEU7QUFDQTJJLFVBQUlBLEVBQUUzSSxRQUFRLFdBQVcsRUFBRTtBQUMzQixVQUFJOEksR0FBR3hCLHFCQUFxQjtBQUMzQnFCLFlBQUk4RCxXQUFXOUQsQ0FBQztNQUNqQjtBQUdBLFVBQUksS0FBSzNKLEtBQUtlLFVBQVUsUUFBUSxLQUFLZixLQUFLZSxVQUFVNEksR0FBRztBQUN0RCxhQUFLM0osS0FBS2UsUUFBUTRJO01BQ25CO0lBQ0Q7SUFDQW1iLFNBQVN4ZixLQUFLeWYsYUFBYTNELFFBQVF2RCxVQUFVbUgsVUFBVTtBQUN0RCxVQUFJQyxLQUFLRjtBQUNULFlBQU1ya0IsSUFBSTBnQjtBQUNWLFlBQU16WCxJQUFJa1U7QUFDVixZQUFNcUgsSUFBSUY7QUFDVixZQUFNcGtCLFFBQU87QUFDYixZQUFNb1YsT0FBT0EsTUFBTTtBQUNsQmlQLFdBQUdFO0FBQ0gsWUFBSUYsR0FBR0UsY0FBY0YsR0FBR0csVUFBVTtBQUNqQyxjQUFJSCxHQUFHbkgsUUFBUTtBQUNkbUgsZUFBR0ksVUFBVXZILFNBQVM7VUFDdkI7QUFDQSxjQUFJbUgsR0FBR2pILFlBQVk7QUFDbEJpSCxlQUFHSSxVQUFVckgsYUFBYWlILEdBQUdqSDtVQUM5QjtBQUNBLGNBQUksQ0FBQ2lILEdBQUdLLGFBQWEsQ0FBQy9HLGtCQUFrQjBHLEdBQUdKLFVBQVUsRUFBRXBmLE1BQU15ZixDQUFDLEdBQUc7QUFDaEUzRyw4QkFBa0IwRyxHQUFHSixVQUFVLEVBQUVwZixNQUFNeWYsQ0FBQyxJQUFJRCxHQUFHSTtVQUNoRDtBQUNBemtCLFVBQUFBLE1BQUtaLEtBQUsrakIsV0FBVztBQUNyQixjQUFJLENBQUNrQixHQUFHTSxXQUFXO0FBQ2xCM2tCLFlBQUFBLE1BQUt5YixnQkFBZ0I0SSxHQUFHSSxXQUFXSixHQUFHckcsY0FBY2pWLEdBQUdzYixHQUFHSixVQUFVO1VBQ3JFO0FBQ0EsY0FBSUksT0FBT3JrQixNQUFLbWtCLGFBQWE7QUFDNUJua0IsWUFBQUEsTUFBS21rQixjQUFjO1VBQ3BCO0FBQ0FFLGVBQUs7UUFDTjtNQUNEO0FBQ0FwbEIsUUFBRTJsQixRQUFRbGdCLEtBQU0wVixVQUFTO0FBQ3hCLGNBQU03RixTQUFTelUsRUFBRWlkLFFBQVEzQyxNQUFNa0ssQ0FBQztBQUNoQyxZQUFJL1AsVUFBVUEsT0FBT3RMLFNBQVMsR0FBRztBQUNoQ29iLGFBQUdJLFlBQVlKLEdBQUdJLGNBQWMsT0FBT2xRLFNBQVMsQ0FBQyxHQUFHOFAsR0FBR0ksV0FBVyxJQUFBLEdBQUcxZixtQkFBQThmLGVBQWN0USxNQUFNLENBQUM7QUFDMUYsY0FBSUEsT0FBTzJJLFFBQVE7QUFDbEJtSCxlQUFHbkgsU0FBUztVQUNiO0FBQ0EsY0FBSTNJLE9BQU82SSxZQUFZO0FBQ3RCaUgsZUFBR2pILGFBQWE3SSxPQUFPNkk7VUFDeEI7UUFDRDtBQUNBaEksYUFBSztNQUNOLENBQUMsRUFBRWpCLEtBQU1rRyxTQUFRO0FBQ2hCLFlBQUksQ0FBQ0EsS0FBSztBQUNUN1EsMEJBQWdCO1FBQ2pCO0FBQ0E2YSxXQUFHSyxZQUFZO0FBQ2Z0UCxhQUFLO01BQ04sQ0FBQztJQUNGO0lBQ0ErTyxjQUFjO0lBQ2RsRCxXQUFXRCxtQkFBbUI4RCxPQUFPO0FBRXBDeEssaUJBQVcsSUFBSTtBQUVmLFdBQUtvSixjQUFjO0FBQ25CLFVBQUkzYSxJQUFJLEtBQUszSixLQUFLZTtBQUVsQixZQUFNNGtCLE9BQU9oYyxFQUFFdUQsUUFBUSxHQUFHO0FBQzFCLFVBQUl5WSxTQUFTLElBQUk7QUFDaEIsYUFBSzNOLGFBQWE7TUFDbkIsT0FBTztBQUNOLGFBQUtBLGFBQWFyTyxFQUFFeUQsTUFBTW9ELEtBQUtDLElBQUksR0FBR2tWLE9BQU8sQ0FBQyxDQUFDO0FBQy9DaGMsWUFBSUEsRUFBRXlELE1BQU0sR0FBR29ELEtBQUtDLElBQUksR0FBR2tWLElBQUksQ0FBQztNQUNqQztBQUNBLFVBQUksS0FBSy9LLGNBQWNqUixLQUFLLENBQUMrYixPQUFPO0FBQ25DO01BQ0Q7QUFDQSxVQUFJLEtBQUs5SyxjQUFjalIsR0FBRztBQUN6QjBULHdCQUFnQjtNQUNqQjtBQUNBLFdBQUt6QyxZQUFZalI7QUFDakIsV0FBS2dTLGdCQUFnQmhTO0FBRXJCLFdBQUs2WixHQUFHMU8sV0FBV25MLEVBQUVFLFNBQVMsS0FBS0MsR0FBR3RCLGFBQWFzQixHQUFHdEIsVUFBVWIsS0FBS2dDLENBQUM7QUFDdEUsVUFBSVMsZUFBZTtBQUVsQixZQUFJLEtBQUt3WSxNQUFNO0FBQ2QsZUFBS0EsS0FBS2xDLE1BQU05YyxVQUFVO1FBQzNCO0FBQ0EsWUFBSSxLQUFLbWYsZ0JBQWdCO0FBQ3hCLGVBQUtBLGVBQWVyQyxNQUFNOWMsVUFBVTtRQUNyQztBQUNBLFlBQUksS0FBS3pELE1BQU07QUFDZCxlQUFLQSxLQUFLdWdCLE1BQU05YyxVQUFVO1FBQzNCO0FBQ0E7TUFDRDtBQUNBLFVBQUkrRixFQUFFRSxXQUFXLEdBQUc7QUFDbkIsYUFBS3dTLGdCQUFnQixDQUFBLENBQUU7QUFDdkI7TUFDRDtBQUNBLFVBQUkySSxXQUFXcmIsRUFBRTNJLFFBQVEsZ0NBQWdDLEVBQUUsRUFBRUEsUUFBUTBKLGlCQUFpQixHQUFHO0FBQ3pGc2EsaUJBQVd0VyxpQkFBaUJzVyxVQUFVbGIsR0FBR1YsU0FBUztBQUNsRDRiLGlCQUFXQSxTQUFTcGIsS0FBSztBQUN6QixVQUFJb2IsU0FBU25iLFdBQVcsR0FBRztBQUMxQixhQUFLd1MsZ0JBQWdCLENBQUEsQ0FBRTtBQUN2QjtNQUNEO0FBQ0EsVUFBSSxLQUFLMEksYUFBYTtBQUNyQixhQUFLQSxZQUFZUSxZQUFZO01BQzlCO0FBQ0EsWUFBTVYsYUFBYXRHLGtCQUFrQixLQUFLNkMsTUFBTSxJQUFJLEtBQUtBLFNBQVM7QUFDbEVRLDRCQUFBQSxvQkFBc0JyRCxrQkFBa0JzRyxVQUFVLEVBQUVqRztBQUNwRCxVQUFJTCxrQkFBa0JzRyxVQUFVLEVBQUVwZixNQUFNdWYsUUFBUSxHQUFHO0FBQ2xELGFBQUszSSxnQkFBZ0JrQyxrQkFBa0JzRyxVQUFVLEVBQUVwZixNQUFNdWYsUUFBUSxHQUFHcEQsbUJBQW1CalksR0FBR2tiLFVBQVU7QUFDcEc7TUFDRDtBQUNBLFlBQU07UUFBQ3BHO01BQU8sSUFBSUYsa0JBQWtCc0csVUFBVTtBQUM5QyxXQUFLRSxjQUFjO1FBQ2xCTSxXQUFXO1FBQ1hGLFdBQVc7UUFDWEMsVUFBVTNHLFFBQVE1VTtRQUNsQitVLGNBQWNnRDtRQUNkaUQ7TUFDRDtBQUNBLFdBQUtlLFVBQVVuSCxTQUFTLEtBQUtzRyxhQUFhcGIsR0FBR3FiLFFBQVE7SUFDdEQ7SUFDQVksVUFBVW5ILFNBQVN3RyxJQUFJdGIsR0FBR3FiLFVBQVU7QUFBQSxVQUFBYSxhQUFBOUwsMkJBQ2IwRSxPQUFBLEdBQUFxSDtBQUFBLFVBQUE7QUFBdEIsYUFBQUQsV0FBQWpYLEVBQUEsR0FBQSxFQUFBa1gsU0FBQUQsV0FBQTVMLEVBQUEsR0FBQWpFLFFBQStCO0FBQUEsZ0JBQXBCK1AsVUFBQUQsT0FBQS9rQjtBQUNWLGdCQUFNcWdCLFNBQVMzRCxrQkFBa0JzSSxPQUFPO0FBQ3hDLGdCQUFNemdCLE1BQU1nQixLQUFLMGYsZUFBZTVFLE9BQU8xVSxJQUFJMUwsUUFBUSxRQUFRNk0sbUJBQW1CbVgsUUFBUSxDQUFDO0FBQ3ZGLGVBQUtGLFNBQVN4ZixLQUFLMmYsSUFBSTdELFFBQVF6WCxHQUFHcWIsUUFBUTtRQUMzQztNQUFBLFNBQUE1SyxLQUFBO0FBQUF5TCxtQkFBQW5sQixFQUFBMFosR0FBQTtNQUFBLFVBQUE7QUFBQXlMLG1CQUFBeEwsRUFBQTtNQUFBO0lBQ0Q7SUFDQWdDLGdCQUFnQmxILFFBQVE4USxrQkFBa0JwSSxVQUFVZ0gsWUFBWTtBQUMvRCxXQUFLN2tCLEtBQUsrakIsV0FBVztBQUNyQixXQUFLekosTUFBTTtBQUNYLFdBQUt1QixZQUFZO0FBQ2pCLFVBQUksQ0FBQyxLQUFLK0csTUFBTTtBQUNmO01BQ0Q7QUFDQSxVQUFJeFksZUFBZTtBQUNsQixZQUFJLEtBQUt3WSxNQUFNO0FBQ2QsZUFBS0EsS0FBS2xDLE1BQU05YyxVQUFVO1FBQzNCO0FBQ0EsWUFBSSxLQUFLbWYsZ0JBQWdCO0FBQ3hCLGVBQUtBLGVBQWVyQyxNQUFNOWMsVUFBVTtRQUNyQztBQUNBLFlBQUksS0FBS3pELE1BQU07QUFDZCxlQUFLQSxLQUFLdWdCLE1BQU05YyxVQUFVO1FBQzNCO0FBQ0EsYUFBS2dXLGNBQWM7QUFDbkI7TUFDRDtBQUNBLFdBQUtpTCxhQUFhQTtBQUNsQixVQUFJQSxZQUFZO0FBQ2YsWUFBSSxDQUFDLEtBQUs5QixnQkFBZ0I7QUFDekIsZUFBSzhCLGFBQWE7UUFDbkI7TUFDRCxXQUFXLEtBQUs5QixnQkFBZ0I7QUFDL0IsYUFBS0EsZUFBZXJDLE1BQU05YyxVQUFVO01BQ3JDO0FBQ0EsVUFBSWlhLFVBQVU7QUFDYixZQUFJLEtBQUtqRCxVQUFVMU4sUUFBUTJRLFFBQVEsR0FBRztBQUNyQztRQUNEO0FBQ0EsWUFDQyxLQUFLcUksYUFDTCxLQUFLdEwsVUFBVTFOLFFBQVEsS0FBS2daLFNBQVMsTUFBTSxLQUMzQyxLQUFLQSxVQUFVcmMsU0FBU2dVLFNBQVNoVSxRQUNoQztBQUNEO1FBQ0Q7TUFDRDtBQUNBLFdBQUtxYyxZQUFZckk7QUFFakIsVUFBSWxVLElBQUksS0FBSzNKLEtBQUtlLE1BQU0rYSxNQUFNLEdBQUc7QUFDakMsWUFBTWpXLE1BQU04RCxFQUFFRSxTQUFTLElBQUEsSUFBQTlKLE9BQVE0SixFQUFFLENBQUMsQ0FBQyxJQUFLO0FBQ3hDQSxVQUFJRyxHQUFHeEIsc0JBQXNCbUYsV0FBVzlELEVBQUUsQ0FBQyxDQUFDLElBQUlBLEVBQUUsQ0FBQztBQUNuRCxVQUFJd2MsY0FBY3hjO0FBQ2xCLFlBQU15YyxlQUFlalIsVUFBVUEsT0FBTzJJO0FBQ3RDLFVBQUl2UztBQUNKLFVBQUk0SixRQUFRO0FBQ1gsWUFBSUEsT0FBTzZJLGNBQWNyVSxFQUFFdUQsUUFBUTJRLFFBQVEsTUFBTSxHQUFHO0FBRW5Ec0ksd0JBQWNoUixPQUFPNkksYUFBYXJVLEVBQUV5RCxNQUFNeVEsU0FBU2hVLE1BQU07UUFDMUQ7QUFDQSxjQUFNd2MsT0FBT0YsWUFBWWxjLFlBQVk7QUFFckMsWUFBSUgsR0FBR3RCLFdBQVc7QUFDakIsZUFBSytDLElBQUksR0FBR0EsSUFBSTRKLE9BQU90TCxRQUFRMEIsS0FBSztBQUNuQyxnQkFBSXpCLEdBQUd0QixVQUFVYixLQUFLd04sT0FBTzVKLENBQUMsQ0FBQyxHQUFHO0FBQ2pDNEoscUJBQU80SSxPQUFPeFMsR0FBRyxDQUFDO0FBQ2xCQTtZQUNEO1VBQ0Q7UUFDRDtBQUNBNEosZUFBT21SLEtBQUssQ0FBQ0MsR0FBR0MsTUFBTTtBQUNyQixjQUFJRCxNQUFNQyxHQUFHO0FBQ1osbUJBQU87VUFDUjtBQUNBLGNBQUlELEVBQUVyWixRQUFRc1osQ0FBQyxNQUFNLEdBQUc7QUFDdkIsbUJBQU87VUFDUjtBQUVBLGNBQUlBLEVBQUV0WixRQUFRcVosQ0FBQyxNQUFNLEdBQUc7QUFDdkIsbUJBQU87VUFDUjtBQUdBLGNBQUlFLGVBQWVGLEVBQUVyWixRQUFRaVosV0FBVyxNQUFNLElBQUksSUFBSTtBQUN0RCxjQUFJTyxlQUFlRixFQUFFdFosUUFBUWlaLFdBQVcsTUFBTSxJQUFJLElBQUk7QUFDdEQsY0FBSU0saUJBQWlCQyxjQUFjO0FBQ2xDLG1CQUFPQSxlQUFlRDtVQUN2QjtBQUVBLGdCQUFNRSxPQUFPSixFQUFFdGMsWUFBWTtBQUMzQixnQkFBTTJjLE9BQU9KLEVBQUV2YyxZQUFZO0FBQzNCd2MseUJBQWVFLEtBQUt6WixRQUFRbVosSUFBSSxNQUFNLElBQUksSUFBSTtBQUM5Q0sseUJBQWVFLEtBQUsxWixRQUFRbVosSUFBSSxNQUFNLElBQUksSUFBSTtBQUM5QyxjQUFJSSxpQkFBaUJDLGNBQWM7QUFDbEMsbUJBQU9BLGVBQWVEO1VBQ3ZCO0FBQ0EsY0FBSUYsSUFBSUMsR0FBRztBQUNWLG1CQUFPO1VBQ1I7QUFDQSxjQUFJQSxJQUFJRCxHQUFHO0FBQ1YsbUJBQU87VUFDUjtBQUNBLGlCQUFPO1FBQ1IsQ0FBQztBQUVELGFBQUtoYixJQUFJLEdBQUdBLElBQUk0SixPQUFPdEwsUUFBUTBCLEtBQUs7QUFDbkMsY0FDRUEsSUFBSSxJQUFJNEosT0FBT3RMLFVBQVVzTCxPQUFPNUosQ0FBQyxNQUFNNEosT0FBTzVKLElBQUksQ0FBQyxLQUNuRGpGLEtBQUtpQixzQkFBc0IsTUFBTTROLE9BQU81SixDQUFDLE1BQU1qRixLQUFLc0IsU0FDcEQ7QUFDRHVOLG1CQUFPNEksT0FBT3hTLEdBQUcsQ0FBQztBQUNsQkE7VUFDRDtRQUNEO01BQ0Q7QUFDQSxVQUFJLENBQUM0SixVQUFVQSxPQUFPdEwsV0FBVyxHQUFHO0FBQ25DLFlBQUksS0FBSytZLE1BQU07QUFDZCxlQUFLQSxLQUFLbEMsTUFBTTljLFVBQVU7UUFDM0I7QUFDQSxZQUFJLEtBQUttZixnQkFBZ0I7QUFDeEIsZUFBS0EsZUFBZXJDLE1BQU05YyxVQUFVO1FBQ3JDO0FBQ0EsWUFBSWloQixjQUFjdEcsa0JBQWtCc0csVUFBVSxLQUFLLENBQUN0RyxrQkFBa0JzRyxVQUFVLEVBQUVsRyxNQUFNO0FBQ3ZGLGNBQUksS0FBS3hlLE1BQU07QUFDZCxpQkFBS0EsS0FBSzBaLE1BQU0vUCxHQUFHM0I7VUFDcEI7QUFDQSxlQUFLeVIsY0FBYztRQUNwQjtBQUNBO01BQ0Q7QUFDQSxZQUFNLENBQUNpTixVQUFVLElBQUkxUjtBQUNyQixZQUFNMlIsWUFBWSxLQUFLQyxhQUFhRixZQUFZbGQsR0FBR3djLGFBQWF0Z0IsS0FBS29nQixnQkFBZ0I7QUFDckYsWUFBTWUsV0FBV0YsYUFBYVYsZ0JBQWdCUyxlQUFlblksaUJBQWlCL0UsR0FBR0csR0FBR1YsU0FBUztBQUM3RixVQUFJeWIsY0FBY3RHLGtCQUFrQnNHLFVBQVUsS0FBSyxDQUFDdEcsa0JBQWtCc0csVUFBVSxFQUFFbEcsTUFBTTtBQUN2RixhQUFLeGUsS0FBSzBaLE1BQU1tTixXQUFXbGQsR0FBRzdCLFlBQVk2QixHQUFHM0I7QUFDN0MsYUFBS3lSLGNBQWNvTjtNQUNwQjtBQUNBLFVBQUlGLFdBQVc7QUFDZCxhQUFLbE0sWUFBWWlNO0FBQ2pCLFlBQUkxUixPQUFPdEwsV0FBVyxHQUFHO0FBQ3hCLGVBQUsrWSxLQUFLbEMsTUFBTTljLFVBQVU7QUFDMUIsY0FBSSxLQUFLbWYsZ0JBQWdCO0FBQ3hCLGlCQUFLQSxlQUFlckMsTUFBTTljLFVBQVU7VUFDckM7QUFDQTtRQUNEO01BQ0Q7QUFFQSxhQUFPLEtBQUtnZixLQUFLdkMsWUFBWTtBQUM1QixhQUFLdUMsS0FBS3ZDLFdBQVd4WixPQUFPO01BQzdCO0FBQ0EsV0FBSzBFLElBQUksR0FBR0EsSUFBSTRKLE9BQU90TCxRQUFRMEIsS0FBSztBQUNuQyxjQUFNeVgsTUFBTTVXLEtBQUssUUFBUTtBQUN6QjRXLFlBQUkxaUIsT0FBTzhMLEtBQUsrSSxPQUFPNUosQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNoQ3lYLFlBQUlDLFdBQVc2RCxhQUFhdmIsTUFBTTtBQUNsQyxhQUFLcVgsS0FBS3RpQixPQUFPMGlCLEdBQUc7TUFDckI7QUFDQSxXQUFLOUcsWUFBWTtJQUNsQjtJQUNBQSxjQUFjO0FBQ2IsV0FBS0wsWUFBWTtBQUNqQixVQUFJLENBQUMsS0FBS1QsV0FBVztBQUNwQixhQUFLd0gsS0FBS2xDLE1BQU05YyxVQUFVO0FBQzFCLFlBQUksS0FBS21mLGdCQUFnQjtBQUN4QixlQUFLQSxlQUFlckMsTUFBTTljLFVBQVU7UUFDckM7QUFDQTtNQUNEO0FBQ0EsVUFBSXFqQixXQUFXelcsS0FBSzBXLElBQUksS0FBS3RFLEtBQUszVSxRQUFRcEUsUUFBUUMsR0FBR2IsUUFBUTtBQUM3RCxVQUFJZ2UsWUFBWSxHQUFHO0FBQ2xCQSxtQkFBVztNQUNaO0FBQ0EsV0FBS3JFLEtBQUtWLE9BQU8rRTtBQUNqQixXQUFLckUsS0FBS2xDLE1BQU15RyxRQUFROVUsU0FBUyxVQUFVO0FBQzNDLFdBQUt1USxLQUFLbEMsTUFBTTBHLFNBQVM7QUFDekIsV0FBS3hFLEtBQUtsQyxNQUFNZ0QsV0FBVztBQUUzQixZQUFNMkQsU0FBU2hWLFNBQVMsVUFBVTtBQUNsQyxVQUFJaVYsUUFBUTtBQUNaLFVBQUksS0FBSzFFLEtBQUtsQyxNQUFNOWMsWUFBWSxRQUFRO0FBRXZDLGFBQUtnZixLQUFLbEMsTUFBTTZHLE1BQUEsR0FBQXhuQixPQUFTLEtBQUtDLEtBQUt3bkIsV0FBUyxJQUFBO0FBQzVDLGFBQUs1RSxLQUFLbEMsTUFBTTJHLE1BQU0sSUFBSTtBQUMxQixhQUFLekUsS0FBS2xDLE1BQU05YyxVQUFVO0FBQzFCMGpCLGdCQUFRLEtBQUsxRSxLQUFLNkU7QUFDbEIsYUFBSzdFLEtBQUtsQyxNQUFNOWMsVUFBVTtNQUMzQixPQUFPO0FBQ04wakIsZ0JBQVEsS0FBSzFFLEtBQUs2RTtNQUNuQjtBQUVBLFVBQUlDLGdCQUFnQko7QUFDcEIsVUFBSUwsV0FBV25kLEdBQUdiLFVBQVU7QUFDM0J5ZSx3QkFBaUJKLFFBQVFMLFdBQVluZCxHQUFHYjtNQUN6QztBQUNBLFlBQU0wZSxXQUFZQyxVQUFTO0FBQzFCLGNBQU1oWixJQUFBLFNBQUE3TyxPQUFhNm5CLElBQUk7QUFDdkIsZUFBT3pvQixTQUFTMG9CLGtCQUFrQjFvQixTQUFTMG9CLGdCQUFnQmpaLENBQUMsSUFBSTtNQUNqRTtBQUNBLFlBQU1rWixnQkFBaUJGLFVBQVM7QUFDL0IsY0FBTWhaLElBQUEsU0FBQTdPLE9BQWE2bkIsSUFBSTtBQUN2QixZQUFJemlCLFNBQVNoRyxTQUFTMG9CLGtCQUFrQjFvQixTQUFTMG9CLGdCQUFnQmpaLENBQUMsSUFBSTtBQUN0RSxZQUFJeUQsVUFBVXVWLFNBQVMsUUFBUTtBQU05QixjQUFJemlCLFNBQVMsR0FBRztBQUNmQSxxQkFBUyxDQUFDQTtVQUNYO0FBQ0EsY0FBSSxDQUFDK0UsV0FBVztBQUNmL0UscUJBQVMyaUIsY0FBYyxPQUFPLElBQUlILFNBQVMsT0FBTyxJQUFJeGlCO1VBQ3ZEO1FBRUQ7QUFDQSxlQUFPQTtNQUNSO0FBQ0EsWUFBTXVlLFdBQVlxRSxVQUFTO0FBRTFCLFlBQUlBLEtBQUtDLHVCQUF1QjtBQUMvQixnQkFBTUMsTUFBTUYsS0FBS0Msc0JBQXNCO0FBQ3ZDLGlCQUFPO1lBQ05FLEdBQUcxWCxLQUFLMlgsTUFBTUYsSUFBSUcsT0FBT04sY0FBYyxNQUFNLENBQUM7WUFDOUNPLEdBQUc3WCxLQUFLMlgsTUFBTUYsSUFBSVYsTUFBTU8sY0FBYyxLQUFLLENBQUM7VUFDN0M7UUFDRDtBQUNBLFlBQUlRLElBQUk7QUFDUixZQUFJQyxJQUFJO0FBQ1IsV0FBRztBQUNGRCxlQUFLUCxLQUFLUCxhQUFhO0FBQ3ZCZSxlQUFLUixLQUFLUyxjQUFjO0FBQ3hCVCxpQkFBT0EsS0FBS1U7UUFDYixTQUFTVjtBQUNULGVBQU87VUFDTkcsR0FBR0s7VUFDSEYsR0FBR0M7UUFDSjtNQUNEO0FBQ0EsWUFBTUksVUFBVWhGLFNBQVMsS0FBSzFqQixJQUFJO0FBQ2xDLFlBQU0yb0IsS0FBSztBQUNYLFVBQUlDLEtBQUs7QUFFVCxVQUFJQyxTQUFTO0FBQ2IsWUFBTUMsZUFBZSxLQUFLOW9CLEtBQUsrb0IsZUFBZSxLQUFLL29CLEtBQUtncEI7QUFDeEQsVUFBSSxLQUFLbkUsWUFBWTtBQUNwQixhQUFLOUIsZUFBZXJDLE1BQU0wRyxTQUFTO0FBQ25DLGFBQUtyRSxlQUFlckMsTUFBTWdELFdBQVc7QUFDckMsYUFBS1gsZUFBZXJDLE1BQU14YyxRQUFBLEdBQUFuRSxPQUFXK29CLGNBQVksSUFBQTtBQUVqRCxZQUFJLEtBQUsvRixlQUFlckMsTUFBTTljLFlBQVksUUFBUTtBQUNqRCxlQUFLbWYsZUFBZXJDLE1BQU0yRyxNQUFNLElBQUk7QUFDcEMsZUFBS3RFLGVBQWVyQyxNQUFNNkcsTUFBTTtBQUNoQyxlQUFLeEUsZUFBZXJDLE1BQU05YyxVQUFVO0FBQ3BDaWxCLG1CQUFTLEtBQUs5RixlQUFlMEU7QUFDN0IsZUFBSzFFLGVBQWVyQyxNQUFNOWMsVUFBVTtRQUNyQyxPQUFPO0FBQ05pbEIsbUJBQVMsS0FBSzlGLGVBQWUwRTtRQUM5QjtBQUNBLGFBQUsxRSxlQUFlckMsTUFBTTJHLE1BQU0sSUFBQSxHQUFBdG5CLE9BQU80b0IsSUFBRSxJQUFBO01BQzFDO0FBQ0EsVUFBSUQsUUFBUUwsSUFBSVgsZ0JBQWdCbUIsU0FBUyxHQUFHO0FBRzNDRCxhQUFLLEtBQUs1b0IsS0FBS3luQixlQUFlb0IsU0FBUztBQUN2QyxZQUFJLEtBQUtoRSxZQUFZO0FBQ3BCLGVBQUs5QixlQUFlckMsTUFBTTZHLE1BQUEsR0FBQXhuQixPQUFTLEtBQUtDLEtBQUt5bkIsY0FBWSxJQUFBO1FBQzFEO01BQ0QsT0FBTztBQUNObUIsYUFBSyxDQUFDdEIsUUFBUXVCLFNBQVM7QUFDdkIsWUFBSSxLQUFLaEUsWUFBWTtBQUNwQixlQUFLOUIsZUFBZXJDLE1BQU02RyxNQUFBLEdBQUF4bkIsT0FBUyxFQUFFOG9CLFNBQVMsSUFBRSxJQUFBO1FBQ2pEO01BQ0Q7QUFDQSxXQUFLakcsS0FBS2xDLE1BQU02RyxNQUFBLEdBQUF4bkIsT0FBUzZvQixJQUFFLElBQUE7QUFDM0IsV0FBS2hHLEtBQUtsQyxNQUFNeGMsUUFBUTtBQUN4QixXQUFLMGUsS0FBS2xDLE1BQU0yRyxNQUFNLElBQUEsR0FBQXRuQixPQUFPNG9CLElBQUUsSUFBQTtBQUMvQixVQUFJLEtBQUs5RCxZQUFZO0FBQ3BCLGFBQUtELGFBQWEsS0FBS0MsVUFBVTtBQUNqQyxhQUFLOUIsZUFBZXJDLE1BQU05YyxVQUFVO01BQ3JDO0FBQ0EsV0FBS2dmLEtBQUtsQyxNQUFNOWMsVUFBVTtBQUUxQixVQUFJLEtBQUtnZixLQUFLbUcsY0FBY0QsY0FBYztBQUN6QyxhQUFLbEcsS0FBS2xDLE1BQU14YyxRQUFBLEdBQUFuRSxPQUFXK29CLGNBQVksSUFBQTtBQUN2QztNQUNEO0FBRUEsWUFBTUcsU0FBU25CLGNBQWMsTUFBTTtBQUNuQyxZQUFNb0IsU0FBU3ZCLFNBQVMsT0FBTztBQUMvQixVQUFJd0IsSUFBSSxLQUFLdkcsS0FBS21HO0FBQ2xCLFlBQU1LLFFBQVExRixTQUFTLEtBQUtkLElBQUk7QUFDaEMsVUFBSXdGLE9BQU9nQixNQUFNbEI7QUFDakIsVUFBSW1CLFFBQVFqQixPQUFPZTtBQUNuQixVQUFJZixPQUFPYSxVQUFVSSxRQUFRSixTQUFTQyxRQUFRO0FBQzdDLFlBQUlDLElBQUlELFFBQVE7QUFDZkMsY0FBSUQ7QUFDSixlQUFLdEcsS0FBS2xDLE1BQU14YyxRQUFBLEdBQUFuRSxPQUFXb3BCLEdBQUMsSUFBQTtBQUM1QixjQUFJOVcsUUFBUTtBQUNYK1YsbUJBQU9pQixRQUFRRjtVQUNoQixPQUFPO0FBQ05FLG9CQUFRakIsT0FBT2U7VUFDaEI7UUFDRDtBQUNBLFlBQUlHLGtCQUFrQjtBQUN0QixZQUFJbEIsT0FBT2EsUUFBUTtBQUNsQkssNEJBQWtCTCxTQUFTYjtRQUM1QixXQUFXaUIsUUFBUUosU0FBU0MsUUFBUTtBQUNuQ0ksNEJBQWtCLEVBQUVELFFBQVFKLFNBQVNDO1FBQ3RDO0FBQ0EsWUFBSTdXLFFBQVE7QUFDWGlYLDRCQUFrQixDQUFDQTtRQUNwQjtBQUNBLFlBQUlBLGlCQUFpQjtBQUNwQixlQUFLMUcsS0FBS2xDLE1BQU0yRyxNQUFNLElBQUEsR0FBQXRuQixPQUFPNG9CLEtBQUtXLGlCQUFlLElBQUE7UUFDbEQ7TUFDRDtJQUNEO0lBQ0F2QyxhQUFhbG1CLFFBQVEwb0IsUUFBUUMsa0JBQWtCM2pCLEtBQUs0akIsWUFBWTtBQUMvRCxVQUFJNW9CLFdBQVcwb0IsUUFBUTtBQUN0QixlQUFPO01BQ1I7QUFDQSxVQUFJRSxjQUFjLEtBQUtySCxPQUFPLENBQUMsS0FBS3NILFVBQVUsR0FBRztBQUNoRCxlQUFPO01BQ1I7QUFFQSxVQUFJN29CLE9BQU9xTSxRQUFRcWMsTUFBTSxHQUFHO0FBRTNCLFlBQUlDLG9CQUFvQjNvQixPQUFPcU0sUUFBUXNjLGdCQUFnQixNQUFNLEdBQUc7QUFDL0QsY0FBSSxLQUFLN04sa0JBQWtCNE4sUUFBUTtBQUNsQyxpQkFBSzVOLGdCQUFnQjZOO1VBQ3RCO0FBQ0FELG1CQUFTQztRQUNWLE9BQU87QUFDTixpQkFBTztRQUNSO01BQ0Q7QUFHQSxXQUFLeHBCLEtBQUs4aUIsTUFBTTtBQUNoQixXQUFLOWlCLEtBQUtlLFFBQVFGLFNBQVNnRjtBQUMzQixXQUFLdVcsYUFBYW1OLE9BQU8xZixRQUFRaEosT0FBT2dKLE1BQU07QUFDOUMsYUFBTztJQUNSO0lBQ0E2ZixZQUFZO0FBQ1gsYUFDQyxLQUFLMXBCLEtBQUsycEIscUJBQ1QsS0FBSzNwQixLQUFLNHBCLG1CQUFtQixVQUFhLEtBQUs1cEIsS0FBSzZwQixpQkFBaUI7SUFFeEU7SUFDQXpOLGFBQWFsRSxNQUFNQyxJQUFJO0FBRXRCLFVBQUksQ0FBQyxLQUFLblksS0FBS2UsT0FBTztBQUNyQjtNQUNEO0FBQ0EsVUFBSSxLQUFLZixLQUFLMnBCLG1CQUFtQjtBQUVoQyxhQUFLM3BCLEtBQUsycEIsa0JBQWtCelIsTUFBTUMsRUFBRTtNQUNyQyxXQUFXLEtBQUtuWSxLQUFLNHBCLG1CQUFtQixRQUFXO0FBQ2xELFlBQUkxUixPQUFPLEtBQUtsWSxLQUFLNHBCLGdCQUFnQjtBQUNwQyxlQUFLNXBCLEtBQUs2cEIsZUFBZTFSO0FBQ3pCLGVBQUtuWSxLQUFLNHBCLGlCQUFpQjFSO1FBQzVCLE9BQU87QUFDTixlQUFLbFksS0FBSzRwQixpQkFBaUIxUjtBQUMzQixlQUFLbFksS0FBSzZwQixlQUFlMVI7UUFDMUI7TUFDRDtJQUNEO0lBQ0EyUixlQUFlO0FBQ2QsVUFBSTVSLE9BQU87QUFFWCxVQUFJQyxLQUFLO0FBQ1QsVUFBSSxDQUFDLEtBQUtuWSxLQUFLZSxPQUFPO01BRXRCLFdBQVcsS0FBS2YsS0FBSzRwQixtQkFBbUIsUUFBVztBQUNsRDFSLGVBQU8sS0FBS2xZLEtBQUs0cEI7QUFDakJ6UixhQUFLLEtBQUtuWSxLQUFLNnBCO01BQ2hCO0FBQ0EsYUFBTztRQUNON04sT0FBTzlEO1FBQ1ArRCxLQUFLOUQ7TUFDTjtJQUNEO0lBQ0F3SyxXQUFXO0FBQ1YsV0FBSzVHLGdCQUFnQixLQUFLK04sYUFBYTtJQUN4QztJQUNBdEgsV0FBV0wsT0FBTztBQUNqQixVQUFJakMsTUFBTTtBQUNWLGNBQVEsS0FBS21DLFNBQUE7UUFDWixLQUFLN0M7QUFDSlUsZ0JBQU07QUFDTjtRQUNELEtBQUtUO0FBQ0pTLGdCQUFNO0FBQ047UUFDRCxLQUFLWjtBQUNKWSxnQkFBTSxDQUFDcFcsR0FBR2I7QUFDVjtRQUNELEtBQUtzVztBQUNKVyxnQkFBTXBXLEdBQUdiO0FBQ1Q7UUFDRCxLQUFLbVc7QUFFSixpQkFBTy9OLFFBQVE4USxLQUFLO01BQ3RCO0FBQ0EsVUFBSWpDLEtBQUs7QUFDUixZQUFJLEtBQUswQyxLQUFLbEMsTUFBTTljLFlBQVksUUFBUTtBQUV2QyxlQUFLaWYsb0JBQW9CM0MsR0FBRztBQUc1QixpQkFBTzdPLFFBQVE4USxLQUFLO1FBQ3JCLFdBQ0MsS0FBS0ksWUFBWSxNQUNoQixDQUFDLEtBQUt3QyxlQUFlLEtBQUtBLFlBQVlJLGNBQWMsS0FBS0osWUFBWUssV0FDckU7QUFFRCxlQUFLdkQsV0FBVztRQUNqQjtNQUNEO0FBQ0EsYUFBTztJQUNSO0lBQ0FnQixvQkFBb0IzQyxLQUFLO0FBQ3hCLFVBQUk5VixpQkFBaUIsQ0FBQyxLQUFLd1ksUUFBUSxLQUFLQSxLQUFLbEMsTUFBTTljLFlBQVksUUFBUTtBQUN0RSxlQUFPO01BQ1I7QUFDQSxZQUFNbW1CLE9BQU8sS0FBS25ILEtBQUtNO0FBQ3ZCLFVBQUk4RyxNQUFNO0FBQ1YsVUFBSTlKLFFBQVEsR0FBRztBQUNkLFlBQUk2SixPQUFPLEtBQUtBLFFBQVEsS0FBS25ILEtBQUszVSxRQUFRcEUsUUFBUTtBQUNqRCxpQkFBTztRQUNSO0FBQ0FtZ0IsY0FBTUQ7TUFDUCxPQUFPO0FBQ05DLGNBQU1ELE9BQU8sSUFBSSxJQUFJQSxPQUFPN0o7QUFDNUI4SixjQUFNeFosS0FBS0MsSUFBSXVaLEtBQUssQ0FBQztBQUNyQixZQUFJQSxPQUFPLEtBQUtwSCxLQUFLM1UsUUFBUXBFLFFBQVE7QUFDcENtZ0IsZ0JBQU0sS0FBS3BILEtBQUszVSxRQUFRcEUsU0FBUztRQUNsQztNQUNEO0FBQ0EsVUFBSW1nQixRQUFRRCxRQUFRN0osUUFBUSxHQUFHO0FBQzlCLFlBQUk2SixRQUFRLEtBQUtBLE9BQU8sS0FBS25ILEtBQUszVSxRQUFRcEUsVUFBVXFXLFFBQVEsR0FBRztBQUM5RCxlQUFLMEMsS0FBSzNVLFFBQVE4YixJQUFJLEVBQUU5RyxXQUFXO1FBQ3BDO0FBQ0EsYUFBS0wsS0FBSzNVLFFBQVErYixHQUFHLEVBQUUvRyxXQUFXO0FBRWxDLGNBQU10WixJQUFJLEtBQUszSixLQUFLZSxNQUFNK2EsTUFBTSxHQUFHO0FBQ25DLGNBQU1qVyxNQUFNOEQsRUFBRUUsU0FBUyxJQUFBLElBQUE5SixPQUFRNEosRUFBRSxDQUFDLENBQUMsSUFBSztBQUN4QyxjQUFNbWQsWUFBWSxLQUFLQyxhQUFhLEtBQUtuRSxLQUFLM1UsUUFBUStiLEdBQUcsRUFBRWhxQixNQUFNLEtBQUsyYixlQUFlLE1BQU05VixLQUFLLEtBQUs7QUFDckcsWUFBSSxDQUFDaWhCLGFBQWEsS0FBS2xFLEtBQUszVSxRQUFRK2IsR0FBRyxFQUFFaHFCLFNBQVMsS0FBSzJiLGVBQWU7QUFDckUsZUFBSzNiLEtBQUtlLFFBQVEsS0FBSzZoQixLQUFLM1UsUUFBUStiLEdBQUcsRUFBRWhxQixPQUFPNkY7QUFDaEQsY0FBSSxLQUFLNmpCLFVBQVUsR0FBRztBQUNyQixpQkFBS3ROLGFBQWEsS0FBS3dHLEtBQUszVSxRQUFRK2IsR0FBRyxFQUFFaHFCLEtBQUs2SixRQUFRLEtBQUsrWSxLQUFLM1UsUUFBUStiLEdBQUcsRUFBRWhxQixLQUFLNkosTUFBTTtVQUN6RjtRQUNEO0FBQ0EsYUFBSytRLFlBQVksS0FBS2dJLEtBQUszVSxRQUFRK2IsR0FBRyxFQUFFaHFCO0FBQ3hDLGFBQUs0WixjQUFjO0FBQ25CLFlBQUksS0FBS3paLE1BQU07QUFDZCxlQUFLQSxLQUFLMFosTUFBTS9QLEdBQUc3QjtRQUNwQjtBQUNBLGFBQUs3SCxRQUFReVM7TUFDZDtBQUNBLGFBQU87SUFDUjtJQUNBNFAsb0JBQW9CO0FBQ25CLFVBQUlyWSxpQkFBaUIsQ0FBQyxLQUFLd1ksUUFBUSxLQUFLQSxLQUFLbEMsTUFBTTljLFlBQVksUUFBUTtBQUN0RSxlQUFPO01BQ1I7QUFDQSxZQUFNbW1CLE9BQU8sS0FBS25ILEtBQUtNO0FBQ3ZCLFVBQUk2RyxRQUFRLEtBQUtBLE9BQU8sS0FBS25ILEtBQUszVSxRQUFRcEUsUUFBUTtBQUNqRCxhQUFLK1ksS0FBSzNVLFFBQVE4YixJQUFJLEVBQUU5RyxXQUFXO0FBRW5DLGNBQU10WixJQUFJLEtBQUszSixLQUFLZSxNQUFNK2EsTUFBTSxHQUFHO0FBQ25DLGNBQU1qVyxNQUFNOEQsRUFBRUUsU0FBUyxJQUFBLElBQUE5SixPQUFRNEosRUFBRSxDQUFDLENBQUMsSUFBSztBQUd4QyxZQUFJeEUsU0FBU3dFLEVBQUUsQ0FBQyxNQUFNLEtBQUtpUjtBQUMzQixZQUFJalIsRUFBRSxDQUFDLE1BQU0sS0FBS2dTLGVBQWU7QUFDaEMsZUFBSzNiLEtBQUtlLFFBQVEsS0FBSzRhLGdCQUFnQjlWO0FBQ3ZDVixtQkFBUztRQUNWO0FBQ0EsYUFBS3lWLFlBQVksS0FBS2U7QUFDdEIsZUFBT3hXO01BQ1I7QUFDQSxhQUFPO0lBQ1I7RUFDRDtBQUNBLFFBQU0yYSxhQUFhQSxNQUFNO0FBR3hCLFVBQU0vZ0IsU0FBUyxDQUFDO0FBQ2hCK0ssT0FBR1gsd0JBQ0ZsSyxPQUFPZ3JCLGlDQUFpQyxTQUNyQ2xyQixPQUFPbXJCLDZCQUE2QixTQUNuQ3BnQixHQUFHWCx3QkFDSHBLLE9BQU9tckIsMkJBQ1IsQ0FBQyxDQUFDanJCLE9BQU9nckI7QUFDYm5nQixPQUFHcEIsZ0JBQ0Z6SixPQUFPa3JCLHlCQUF5QixTQUM3QnByQixPQUFPcXJCLHVCQUF1QixTQUM3QjlqQixLQUFLaUIsb0JBQW9CLElBQ3hCLE9BQ0F1QyxHQUFHcEIsZ0JBQ0ozSixPQUFPcXJCLHFCQUNSLENBQUMsQ0FBQ25yQixPQUFPa3JCO0FBQ2JyZ0IsT0FBR25CLGlCQUNGMUosT0FBT29yQiwwQkFBMEIsU0FDOUJ0ckIsT0FBT3VyQix1QkFBdUIsU0FDN0J4Z0IsR0FBR25CLGlCQUNINUosT0FBT3VyQixxQkFDUixDQUFDLENBQUNyckIsT0FBT29yQjtBQUNidmdCLE9BQUdsQixnQkFBZ0IzSixPQUFPc3JCLDJCQUEyQnhyQixPQUFPeXJCLHlCQUF5QjFnQixHQUFHbEI7QUFDeEZrQixPQUFHakIsZ0JBQWdCNUosT0FBT3dyQix3QkFBd0IxckIsT0FBTzJyQixzQkFBc0I1Z0IsR0FBR2pCO0FBQ2xGaUIsT0FBR2hCLGNBQWM3SixPQUFPMHJCLHNCQUFzQjVyQixPQUFPNnJCLHFCQUFxQjlnQixHQUFHaEI7QUFDN0UsUUFBSSxPQUFPZ0IsR0FBR2hCLGdCQUFnQixZQUFZLENBQUN5VixrQkFBa0J6VSxHQUFHaEIsV0FBVyxHQUFHO0FBQzdFZ0IsU0FBR2hCLGNBQWM7SUFDbEI7QUFDQWdCLE9BQUdmLGVBQ0Y5SixPQUFPNHJCLDZCQUE2QixTQUNqQzlyQixPQUFPK3JCLDJCQUEyQixTQUNqQ2hoQixHQUFHZixlQUNIaEssT0FBTytyQix5QkFDUixDQUFDLENBQUM3ckIsT0FBTzRyQjtBQUNiL2dCLE9BQUdaLGVBQ0ZqSyxPQUFPOHJCLG9DQUFvQyxTQUN4Q2hzQixPQUFPaXNCLDZCQUE2QixTQUNuQ2xoQixHQUFHWixlQUNIbkssT0FBT2lzQiwyQkFDUixDQUFDLENBQUMvckIsT0FBTzhyQjtBQUNiamhCLE9BQUdyQixhQUFheEosT0FBT2dzQiw2QkFBNkJsc0IsT0FBT21zQiwyQkFBMkJwaEIsR0FBR3JCO0FBQ3pGcUIsT0FBR2QsY0FDRi9KLE9BQU9rc0IsOEJBQThCLFNBQ2xDcHNCLE9BQU9xc0IsMkJBQTJCLFNBQ2pDdGhCLEdBQUdkLGNBQ0hqSyxPQUFPcXNCLHlCQUNSLENBQUMsQ0FBQ25zQixPQUFPa3NCO0FBQ2JyaEIsT0FBR2IsV0FBV2hLLE9BQU9vc0Isb0JBQW9CdHNCLE9BQU91c0Isa0JBQWtCeGhCLEdBQUdiO0FBQ3JFYSxPQUFHM0MsWUFBWXBJLE9BQU93c0IsbUJBQW1CO0FBRXpDLFFBQUl6aEIsR0FBRzNDLFdBQVc7QUFDakIsWUFBTXFrQixRQUFRcnNCLFNBQVNzc0I7QUFDdkIsWUFBTUMsWUFBWSxJQUFJL2dCLE9BQUEsV0FBQTVLLE9BQWtCK0osR0FBR29DLGlCQUFlLElBQUEsQ0FBSTtBQUM5RCxVQUFJeWY7QUFFSixZQUFNQyxnQkFBZ0JBLE1BQU07QUFDM0IsWUFBSUMsU0FBU0wsTUFBTTFxQjtBQUNuQixZQUFJLENBQUMrcUIsUUFBUTtBQUNaO1FBQ0Q7QUFDQUEsaUJBQVNBLE9BQU85cUI7QUFDaEIsY0FBTStxQixXQUFXSCxPQUFPcmQsTUFBTSxRQUFRO0FBQ3RDLGNBQU15ZCxXQUFXRixPQUFPdmQsTUFBTSxRQUFRO0FBQ3RDLFlBQUkwZDtBQUNKLGNBQU1DLFNBQVNBLENBQUNDLE1BQU1DLFNBQVM7QUFDOUIsZ0JBQU1obkIsU0FBUyxDQUFBO0FBQ2YsY0FBSWluQjtBQUNKLGNBQ0NDO0FBQ0QsY0FBSUgsS0FBS3JpQixTQUFTc2lCLEtBQUt0aUIsUUFBUTtBQUM5QnVpQixtQkFBT0Q7QUFDUEUsbUJBQU9IO1VBQ1IsT0FBTztBQUNORSxtQkFBT0Y7QUFDUEcsbUJBQU9GO1VBQ1I7QUFBQSxjQUFBRyxhQUFBdlMsMkJBQ21CcVMsSUFBQSxHQUFBRztBQUFBLGNBQUE7QUFBbkIsaUJBQUFELFdBQUExZCxFQUFBLEdBQUEsRUFBQTJkLFNBQUFELFdBQUFyUyxFQUFBLEdBQUFqRSxRQUF5QjtBQUFBLG9CQUFkd1csT0FBQUQsT0FBQXhyQjtBQUNWLG9CQUFNMHJCLE1BQU1KLEtBQUtuZixRQUFRc2YsSUFBSTtBQUM3QixrQkFBSUMsUUFBUSxJQUFJO0FBQ2Z0bkIsdUJBQU9BLE9BQU8wRSxNQUFNLElBQUkyaUI7Y0FDekIsT0FBTztBQUNOSCxxQkFBS3RPLE9BQU8wTyxLQUFLLENBQUM7Y0FDbkI7WUFDRDtVQUFBLFNBQUFyUyxLQUFBO0FBQUFrUyx1QkFBQTVyQixFQUFBMFosR0FBQTtVQUFBLFVBQUE7QUFBQWtTLHVCQUFBalMsRUFBQTtVQUFBO0FBQ0EsaUJBQU8sQ0FBQyxHQUFHbFYsUUFBUSxHQUFHa25CLElBQUk7UUFDM0I7QUFDQUwsZUFBT0MsT0FBT0gsVUFBVUMsUUFBUTtBQUNoQyxZQUFJQyxLQUFLbmlCLFNBQVMsR0FBRztBQUNwQm1pQixpQkFBT0EsS0FBS1UsT0FBUUMsT0FBTTtBQUN6QkEsZ0JBQUlBLEVBQUUvaUIsS0FBSztBQUNYLG1CQUFPK2lCLEtBQUssQ0FBQ2pCLFVBQVUvakIsS0FBS2dsQixDQUFDO1VBQzlCLENBQUM7UUFDRjtBQUNBLFlBQUlYLEtBQUtuaUIsV0FBVyxHQUFHO0FBQ3RCOGhCLG1CQUFTRTtBQUNULGlCQUFPO1FBQ1I7TUFDRDtBQUNBLFVBQ0N2bEIsS0FBS0ksYUFBYSxZQUNsQkosS0FBS29CLGVBQ0w4akIsU0FDQUEsTUFBTWpxQixhQUNOcEMsU0FBU0MsY0FBYyxXQUFXLEdBQ2pDO0FBQ0QsY0FBTXd0QixNQUFNcEIsTUFBTWpxQjtBQUNsQixjQUFNc3JCLE9BQU9yQixNQUFNalQ7QUFDbkIsWUFBSXFVLElBQUk3ckIsU0FBUzhyQixLQUFLOXJCLFVBQVUrSSxHQUFHM0MsV0FBVztBQUc3QzBsQixlQUFLOXJCLFFBQVE4ckIsS0FBSzlyQixNQUFNQyxRQUFROEksR0FBRzNDLFdBQVcsa0NBQWtDO0FBRWhGLGdCQUFNMmxCLE1BQU1qdEIsRUFBRSxTQUFTLEVBQ3JCQyxLQUFLO1lBQ0xxRCxNQUFNO1lBQ05rSSxNQUFNO1VBQ1AsQ0FBQyxFQUNBNUosSUFBSXFJLEdBQUczQyxTQUFTO0FBQ2xCdEgsWUFBRTJyQixLQUFLLEVBQUVsckIsT0FBT3dzQixHQUFHO0FBQ25CbkIsbUJBQVNILE1BQU0xcUIsV0FBV0M7QUFDMUIsZ0JBQU1zRCxRQUFReEUsRUFBRSxNQUFNO0FBQ3RCd0UsZ0JBQU1DLEtBQUssb0JBQW9CLEVBQUU3RCxJQUFJLFNBQVMsTUFBTTtBQUNuRCxnQkFBSXFzQixJQUFJcnJCLElBQUksR0FBRztBQUNkbXJCLGtCQUFJN3JCLFFBQVE2ckIsSUFBSTdyQixNQUFNQyxRQUNyQjRFLFdBQVcsZ0JBQWdCLEtBQUtBLFdBQVcsaUJBQWlCLEdBQzVELEVBQ0Q7WUFDRDtVQUNELENBQUM7QUFDRCxnQkFBTW1uQixrQkFBa0JBLE1BQU07QUFDN0JsdEIsY0FBRTJyQixNQUFNMXFCLFVBQVUsRUFDaEJnRyxJQUFJOGxCLEdBQUcsRUFDUG5zQixJQUFJLFNBQVMsTUFBTTtBQUNuQjBiLHlCQUFXLE1BQU07QUFDaEIsb0JBQUl5UCxjQUFjLEdBQUc7QUFDcEJtQixrQ0FBZ0I7Z0JBQ2pCLE9BQU87QUFDTkQsc0JBQUlyckIsSUFBSSxFQUFFO2dCQUNYO2NBQ0QsR0FBRyxHQUFHO1lBQ1AsQ0FBQztVQUNIO0FBQ0FzckIsMEJBQWdCO1FBQ2pCO01BQ0Q7SUFDRDtBQUVBampCLE9BQUdiLFdBQVcrakIsT0FBT0MsU0FBU25qQixHQUFHYixVQUFVLEVBQUU7QUFDN0MsUUFBSStqQixPQUFPRSxNQUFNcGpCLEdBQUdiLFFBQVEsS0FBS2EsR0FBR2IsV0FBVyxHQUFHO0FBQ2pEYSxTQUFHYixXQUFXO0lBQ2Y7QUFDQWEsT0FBR2IsV0FBV3VILEtBQUswVyxJQUFJcGQsR0FBR2IsVUFBVSxFQUFFO0FBRXRDLGFBQUFra0IsTUFBQSxHQUFBQyxrQkFBc0MzakIsT0FBTzRqQixRQUFROU8saUJBQWlCLEdBQUE0TyxNQUFBQyxnQkFBQXZqQixRQUFBc2pCLE9BQUc7QUFBekUsWUFBVyxDQUFDdG5CLEtBQUt5bkIsZ0JBQWdCLElBQUFGLGdCQUFBRCxHQUFBO0FBQ2hDLFVBQUk7QUFDSCxZQUFJdG5CLE9BQU9ELFdBQUEsZ0JBQUE3RixPQUEyQjhGLEdBQUcsQ0FBRSxHQUFHO0FBQzdDeW5CLDJCQUFpQmppQixPQUFPekYsV0FBQSxnQkFBQTdGLE9BQTJCOEYsR0FBRyxDQUFFO1FBQ3pEO01BQ0QsUUFBUTtBQUNQO01BQ0Q7SUFDRDtBQUVBd00sYUFBU25RLFNBQVMvQyxTQUFTQyxjQUFjLE1BQU0sR0FBRyxLQUFLO0FBQ3ZELFFBQUksQ0FBQ2lULFFBQVE7QUFDWixVQUFJbFQsU0FBU291QixlQUFlcHVCLFNBQVNvdUIsWUFBWUMsa0JBQWtCO0FBRWxFbmIsaUJBQVNsVCxTQUFTb3VCLFlBQ2hCQyxpQkFBaUJydUIsU0FBU0MsY0FBYyxNQUFNLEdBQUcsSUFBSSxFQUNyRHF1QixpQkFBaUIsV0FBVztNQUMvQixPQUFPO0FBRU5wYixpQkFBU3hTLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRTZnQixNQUFNZ047TUFDN0I7QUFDQXJiLGVBQVNBLFdBQVc7SUFDckI7RUFDRDtBQUNBLFFBQU1zYixXQUFXQSxNQUFNO0FBQ3RCLFdBQU94dUIsU0FBU0MsY0FBYyxVQUFVLE1BQU07RUFDL0M7QUFFQSxRQUFNd3VCLFlBQVksV0FBWTtBQUU3QixhQUFBQyxNQUFBLEdBQUFDLFlBQW1CcGMsU0FBQW1jLE1BQUFDLFVBQUFqa0IsUUFBQWdrQixPQUFTO0FBQTVCLFlBQVdqVyxPQUFBa1csVUFBQUQsR0FBQTtBQUNWLFVBQUlqVyxLQUFLeFgsVUFBVXdTLE1BQU07QUFDeEJnRixhQUFLOEssT0FBTztNQUNiLFdBQVc5SyxLQUFLeFgsVUFBVXlTLGdCQUFnQjtBQUN6QytFLGFBQUswTSxjQUFjO0FBQ25CLGNBQU12akIsUUFBUTZXLEtBQUs1WCxLQUFLZSxNQUFNK2EsTUFBTSxHQUFHO0FBQ3ZDLFlBQUlqVyxNQUFNO0FBQ1YsWUFBSTlFLE1BQU04SSxTQUFTLEdBQUc7QUFDckIsV0FBQSxFQUFHaEUsR0FBRyxJQUFJOUU7UUFDWDtBQUNBLGNBQU00SSxJQUFJNUksTUFBTSxDQUFDLEVBQUVDLFFBQVEsTUFBTSxHQUFHLEVBQUU0SSxLQUFLO0FBQzNDLFlBQUlELEVBQUVFLFdBQVcsR0FBRztBQUNuQitOLGVBQUs4SyxPQUFPO1FBQ2IsT0FBTztBQUNOOUssZUFBS0csa0JBQWtCcE87QUFDdkJpTyxlQUFLSSxhQUFhblM7QUFDbEIrUixlQUFLeUosZ0JBQWdCLEtBQUt6SDtBQUMxQmhDLGVBQUt4VCxNQUFNO1FBQ1o7TUFDRDtJQUNEO0VBQ0Q7QUFDQSxRQUFNMnBCLGVBQWVBLE1BQU07QUFDMUJ0YyxlQUFXO0FBRVgsUUFBSXVjLEtBQUs3dUIsU0FBU0MsY0FBYywwQkFBMEIsS0FBS0QsU0FBU0MsY0FBYyx3QkFBd0I7QUFDOUcsUUFBSSxDQUFDNHVCLElBQUk7QUFDUkEsV0FBSzd1QixTQUFTQyxjQUFjLHdCQUF3QjtBQUNwRCxhQUFPNHVCLE1BQU1BLEdBQUd2bkIsU0FBU3dELFlBQVksTUFBTSxTQUFTO0FBQ25EK2pCLGFBQUtBLEdBQUdwTjtNQUNUO0lBQ0Q7QUFDQSxRQUFJLENBQUNvTixJQUFJO0FBQ1I7SUFDRDtBQUNBLFVBQU1DLFdBQVc5dUIsU0FBU0MsY0FBYywyQkFBMkI7QUFDbkUsVUFBTTh1QixXQUFXL3VCLFNBQVNDLGNBQWMsd0JBQXdCO0FBQ2hFLFFBQUs2dUIsWUFBWSxDQUFDLENBQUNBLFNBQVNsdEIsU0FBV210QixhQUFhQSxTQUFTcFosWUFBWW9aLFNBQVNuSyxXQUFZO0FBQzdGO0lBQ0Q7QUFFQSxVQUFNb0ssWUFBWS9oQixLQUFLLElBQUk7QUFDM0IsVUFBTWdpQixXQUFXaGlCLEtBQUssSUFBSTtBQUUxQm9GLGNBQVVwRixLQUFLLEtBQUs7QUFDcEJvRixZQUFRaEUsWUFBWTtBQUNwQmdFLFlBQVFoTyxLQUFLO0FBQ2JnTyxZQUFRa1AsTUFBTTJOLFlBQVloYyxTQUFTLFVBQVU7QUFFN0NiLFlBQVFrUCxNQUFNNE4sU0FBUztBQUN2QjljLFlBQVFrUCxNQUFNNk4sU0FBUztBQUN2QkgsYUFBUzl0QixPQUFPa1IsT0FBTztBQUV2QixVQUFNOFIsUUFBUTtBQUNkLFFBQUlBLE9BQU87QUFDVjZLLGdCQUFVM3FCLEtBQUs7QUFDZjJxQixnQkFBVTd0QixPQUFPZ2pCLEtBQUs7SUFDdkIsT0FBTztBQUNONkssZ0JBQVUzcUIsS0FBSztBQUNmMnFCLGdCQUFVN3RCLE9BQU84TCxLQUFLeEcsV0FBVyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQ3REO0FBQ0F1b0IsY0FBVTNnQixZQUFZO0FBQ3RCMmdCLGNBQVV6TixNQUFNMk4sWUFBWTtBQUM1QkYsY0FBVXpOLE1BQU04TixnQkFBZ0I7QUFFaEMsVUFBTXpNLE9BQU81aUIsU0FBU0MsY0FBYyxTQUFTLEtBQUtELFNBQVNDLGNBQWMsaUJBQWlCO0FBQzFGLFFBQUkyaUIsTUFBTTtBQUNULFlBQU0wTSxTQUFTVCxHQUFHVSxVQUFVLEVBQUU7QUFDOUJELGFBQU9udUIsT0FBTzZ0QixTQUFTO0FBQ3ZCTSxhQUFPbnVCLE9BQU84dEIsUUFBUTtBQUN0QnJNLFdBQUs1RSxpQkFBaUIsVUFBVSxDQUFDd1IsY0FBYzdvQixTQUFTO0FBQ3ZELGdCQUFRLE1BQU07QUFDYixjQUFJOG9CLFlBQVk7QUFDaEIsY0FBSUQsV0FBVztBQUNkLGdCQUFJLE9BQU9BLGNBQWMsVUFBVTtBQUVsQ0MsMEJBQVkzdkIsT0FBTzR2QixLQUFLRixTQUFTO1lBQ2xDLFdBQVdBLHFCQUFxQkcsVUFBVTtBQUN6Q0YsMEJBQVlELFVBQVUzWixNQUFNK00sTUFBTSxDQUFDNE0sV0FBVyxHQUFHN29CLElBQUksQ0FBQztZQUN2RDtVQUNEO0FBQ0EsY0FBSSxDQUFDOG9CLFdBQVc7QUFDZixtQkFBTztVQUNSO0FBQ0FoQixvQkFBVTtBQUVWLGdCQUFNbUIsS0FDTDV2QixTQUFTQyxjQUFjLG9DQUFvQyxLQUMzREQsU0FBU0MsY0FBYyxTQUFTO0FBQ2pDLGNBQUk0dkIsV0FBVztBQUNmLG1CQUFBQyxNQUFBLEdBQUFDLFlBQXFCeGQsU0FBQXVkLE1BQUFDLFVBQUFybEIsUUFBQW9sQixPQUFTO0FBQTlCLGtCQUFXMVQsU0FBQTJULFVBQUFELEdBQUE7QUFDVixrQkFBTTNHLElBQUkvTSxPQUFPeEQ7QUFDakIsZ0JBQUksQ0FBQ3VRLEdBQUc7QUFDUDtZQUNEO0FBQ0Esa0JBQU16aUIsTUFBTTBWLE9BQU92RDtBQUNuQixrQkFBTW1YLFVBQUEsS0FBQXB2QixPQUFlK0osR0FBR21DLG9CQUFrQixHQUFBLEVBQUFsTSxPQUFJdW9CLENBQUMsRUFBQXZvQixPQUFHOEYsTUFBQSxJQUFBOUYsT0FBVThGLEdBQUcsSUFBSyxJQUFFLElBQUE7QUFFdEUsa0JBQU11SixjQUFjLElBQUl6RSxPQUN2QixNQUFNNUssT0FBTyxTQUFTdUssT0FBT0MsSUFBQTZrQixxQkFBQUEsbUJBQUEza0IsdUJBQUEsQ0FBQSxhQUFBLEdBQUEsQ0FBQSxpQkFBQSxDQUFBLEVBQUEsR0FBb0IsUUFBUSxHQUFHLEdBQzVELEdBQ0Q7QUFDQSxrQkFBTTRrQixlQUFlTixHQUFHaHVCLE1BQU1DLFFBQVEscUJBQXFCLEVBQUUsRUFBRUEsUUFBUW9PLFdBQVc7QUFDbEYsZ0JBQUksQ0FBQ0wsY0FBY3NnQixjQUFjL0csR0FBRyxJQUFJLEdBQUc7QUFDMUN5RyxpQkFBR2h1QixTQUFBLEtBQUFoQixPQUFjb3ZCLE9BQU87QUFDeEJILHlCQUFXO1lBQ1o7VUFDRDtBQUNBLGNBQUlBLFVBQVU7QUFFYixrQkFBTU0sUUFBUSxJQUFJM2tCLE9BQU8sTUFBTTVLLE9BQU8sUUFBUSxFQUFFQSxPQUFPLE9BQU8sR0FBRyxHQUFHO0FBQ3BFZ3ZCLGVBQUdodUIsUUFBUWd1QixHQUFHaHVCLE1BQU1DLFFBQVFzdUIsT0FBTyxFQUFFO1VBQ3RDO0FBQ0EsaUJBQU87UUFDUixHQUFHdk4sS0FBS3dOLFFBQVE7TUFDakIsQ0FBQztJQUNGO0VBQ0Q7QUFDQSxNQUFJQyxjQUFjO0FBQ2xCLFFBQU1DLFdBQVdBLENBQUM7SUFBQ3BQO0VBQVUsTUFBTTtBQUNsQyxRQUFJQSxXQUFXcVAsYUFBYUMsS0FBS0MsY0FBYztBQUM5QyxhQUFPO0lBQ1I7QUFDQSxRQUFJQyxXQUFXcnRCLE1BQU02ZCxXQUFXeVAsYUFBYSxNQUFNLENBQUM7QUFDcEQsUUFBSSxDQUFDRCxVQUFVO0FBQ2QsYUFBTztJQUNSO0FBQ0FBLGVBQVdBLFNBQVN6aUIsTUFBTXlpQixTQUFTM2lCLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRWxNLFFBQVEsTUFBTSxHQUFHO0FBQ3RFLFFBQUk4SSxHQUFHdEIsYUFBYXNCLEdBQUd0QixVQUFVYixLQUFLa29CLFFBQVEsR0FBRztBQUNoRCxhQUFPO0lBQ1I7QUFDQSxVQUFNMXFCLFNBQVM7TUFDZDNDLE9BQU9xdEI7TUFDUHZoQixPQUFPLENBQUMsSUFBSSxJQUFJLEVBQUU7SUFDbkI7QUFDQSxRQUFJd0QsYUFBYSxNQUFNO0FBQ3RCLGFBQU8zTTtJQUNSO0FBQ0EsUUFBSXFxQixnQkFBZ0IsTUFBTTtBQUN6QixZQUFNcGdCLGNBQWMsSUFBSXpFLE9BQU8sTUFBTTVLLE9BQU8sU0FBU3VLLE9BQU9DLElBQUF3bEIscUJBQUFBLG1CQUFBdGxCLHVCQUFBLENBQUEsYUFBQSxHQUFBLENBQUEsaUJBQUEsQ0FBQSxFQUFBLEdBQW9CLFFBQVEsR0FBRyxHQUFHLEdBQUc7QUFDakcra0Isb0JBQWMxZCxTQUFTOVEsUUFBUSxxQkFBcUIsRUFBRSxFQUFFQSxRQUFRb08sYUFBYSxFQUFFO0lBQ2hGO0FBQ0FqSyxXQUFPbUosUUFBUVMsY0FBY3lnQixhQUFhSyxVQUFVLElBQUk7QUFDeEQsV0FBTzFxQjtFQUNSO0FBQ0EsTUFBSTZxQixjQUFjO0FBQ2xCLE1BQUlDLGVBQWU7QUFDbkIsUUFBTUMsY0FBY0EsQ0FBQ0MsT0FBT2p0QixLQUFLc0ssY0FBYztBQUM5QyxVQUFNckksU0FBU3RGLEVBQUVzd0IsS0FBSyxFQUFFN3JCLEtBQUEsR0FBQXZFLE9BQVFtRCxLQUFHLEdBQUEsRUFBQW5ELE9BQUl5TixTQUFTLENBQUU7QUFDbEQsV0FBT3JJLFVBQVVBLE9BQU8wRSxTQUFTLElBQUkxRSxPQUFPLENBQUMsSUFBSTtFQUNsRDtBQUNBLFFBQU1pckIsUUFBU0Msb0JBQW1CO0FBQ2pDLFFBQUlMLGFBQWE7QUFDaEI7SUFDRDtBQUNBQSxrQkFBYztBQUNkLFFBQUlDLGNBQWM7QUFDakJoeEIsYUFBT3F4QixhQUFhTCxZQUFZO0FBQ2hDQSxxQkFBZTtJQUNoQjtBQUdBemUsZ0JBQUFBLFVBQVlyUyxTQUFTQyxjQUFjLHFCQUFxQjtBQUN4RCxVQUFNbXhCLGFBQWFweEIsU0FBU0MsY0FBYyxxQkFBcUI7QUFDL0QsUUFBSSxDQUFDb1MsU0FBUztBQUNiLFVBQUlnZixTQUFTO0FBQ2IsVUFBSSxDQUFDRCxZQUFZO0FBQ2hCQyxpQkFBU04sWUFBWS93QixVQUFVLE9BQU8sYUFBYTtBQUNuRCxZQUFJLENBQUNxeEIsUUFBUTtBQUNaO1FBQ0Q7TUFDRDtBQUNBaGYsZ0JBQVVwRixLQUFLLEtBQUs7QUFDcEJvRixjQUFRaE8sS0FBSztBQUNiZ08sY0FBUWtQLE1BQU0yTixZQUFZaGMsU0FBUyxVQUFVO0FBRTdDLFlBQU1pUixRQUFRbFgsS0FBSyxHQUFHO0FBQ3RCa1gsWUFBTXJlLE9BQU9xQixLQUFLaUgsY0FBY3ZNLFFBQVEsTUFBTSxvQkFBb0I7QUFDbEVzaUIsWUFBTTlnQixRQUFRb0QsV0FBVyxZQUFZO0FBQ3JDMGQsWUFBTWhqQixPQUFPOEwsS0FBS3hHLFdBQVcsWUFBWSxHQUFHLElBQUksQ0FBQztBQUNqRDRMLGNBQVFsUixPQUFPZ2pCLEtBQUs7QUFDcEI5UixjQUFRbFIsT0FBTzhMLEtBQUssS0FBSyxJQUFJLENBQUM7QUFFOUIsVUFBSXFrQixZQUFZRixhQUFhQSxXQUFXM1AsYUFBYXpoQixTQUFTQyxjQUFjLFdBQVc7QUFDdkYsVUFBSSxDQUFDcXhCLFdBQVc7QUFDZkEsb0JBQVlya0IsS0FBSyxLQUFLO0FBQ3RCcWtCLGtCQUFVanRCLEtBQUs7QUFDZmd0QixlQUFPNVAsV0FBV0MsYUFBYTRQLFdBQVdELE9BQU8xUCxXQUFXO01BQzdEO0FBQ0EyUCxnQkFBVWpqQixZQUFZO0FBQ3RCaWpCLGdCQUFVL1AsTUFBTTljLFVBQVU7QUFDMUIsVUFBSTJzQixZQUFZO0FBQ2ZBLG1CQUFXaGdCLE9BQU9pQixPQUFPO01BQzFCLE9BQU87QUFDTmlmLGtCQUFVbndCLE9BQU9rUixPQUFPO01BQ3pCO0lBQ0Q7QUFDQSxRQUFJYSxRQUFRO0FBQ1hiLGNBQVEwTyxNQUFNO0lBQ2Y7QUFFQSxVQUFNd1EsZ0JBQWdCQSxDQUFDMVEsTUFBTXBRLGNBQWM7QUFDMUMsVUFBSXJFO0FBQ0osVUFBSTJOLE9BQU84RyxLQUFLMlEsaUJBQWlCLElBQUk7QUFDckMsVUFBSXpYLEtBQUtyUCxTQUFTLEdBQUc7QUFDcEI2SSxpQkFBUztBQUNUc04sZUFBTzlHLEtBQUssQ0FBQyxFQUFFMEg7TUFDaEIsT0FBTztBQUNOMUgsZUFBTzhHLEtBQUsyUSxpQkFBaUIsTUFBTTtNQUNwQztBQUVBLFlBQU1DLFdBQVdDLE1BQU0zWSxLQUFLO1FBQzNCck8sUUFBUXFQLEtBQUtyUDtNQUNkLENBQUM7QUFDRCxXQUFLMEIsSUFBSSxHQUFHQSxJQUFJMk4sS0FBS3JQLFFBQVEwQixLQUFLO0FBQ2pDcWxCLGlCQUFTcmxCLENBQUMsSUFBSTJOLEtBQUszTixDQUFDO01BQ3JCO0FBQ0EsV0FBS0EsSUFBSSxHQUFHQSxJQUFJcWxCLFNBQVMvbUIsUUFBUTBCLEtBQUs7QUFDckMsY0FBTTVELE9BQU84bkIsU0FBU21CLFNBQVNybEIsQ0FBQyxDQUFDO0FBQ2pDLFlBQUk1RCxTQUFTLFFBQVFBLEtBQUsyRyxVQUFVLFFBQVEwUixNQUFNO0FBQ2pELGNBQUlKLGVBQWVJLE1BQU00USxTQUFTcmxCLENBQUMsR0FBRzVELEtBQUtuRixPQUFPbUYsS0FBSzJHLE1BQU0sQ0FBQyxHQUFHc0IsU0FBUztRQUMzRTtNQUNEO0FBQ0EsYUFBT2doQixTQUFTL21CLFNBQVMsSUFBSSttQixTQUFTRSxHQUFHLEVBQUUsSUFBSTtJQUNoRDtBQUNBLFVBQU1DLFdBQVdMLGNBQWNsZixTQUFTLEtBQUs7QUFFN0MsUUFBSW9PLGVBQWVsTixTQUFTbEIsUUFBUW1mLGlCQUFpQixJQUFJLEVBQUUsQ0FBQyxJQUFJbmYsU0FBUyxNQUFNLE1BQU11ZixhQUFhLE1BQU0sS0FBSztBQUM3RyxRQUFJLENBQUN0ZixVQUFVO0FBQ2QsVUFBSUssYUFBYSxRQUFReWUsWUFBWTtBQUNwQyxZQUFJbGUsUUFBUTtBQUNYa2UscUJBQVdyUSxNQUFNO1FBQ2xCO0FBQ0F3USxzQkFBY0gsWUFBWSxJQUFJO01BQy9CO0FBRUEsWUFBTVMsY0FBYzVrQixLQUFLLE1BQU07QUFDL0I0a0Isa0JBQVl4akIsWUFBWTtBQUN4QixVQUFJNkUsUUFBUTtBQUNYMmUsb0JBQVk5USxNQUFNO01BQ25CO0FBQ0ExTyxjQUFRcVAsYUFBYW1RLGFBQWF4ZixRQUFRNk8sV0FBV1MsV0FBVztBQUNoRWtRLGtCQUFZMXdCLE9BQU84TCxLQUFLLEtBQVUsSUFBSSxDQUFDO0FBQ3ZDeUYsa0JBQVl6RixLQUFLLE1BQU07QUFDdkI0a0Isa0JBQVkxd0IsT0FBT3VSLFNBQVM7QUFDNUJBLGdCQUFVb2YsWUFBQSxPQUFBbHhCLE9BQW1CK0osR0FBRzFDLFVBQVEsT0FBQTtBQUN4QyxZQUFNLENBQUMyWixJQUFJLElBQUlsUCxVQUFVOGUsaUJBQWlCLEdBQUc7QUFDN0M1UCxXQUFLNUQsaUJBQWlCLFNBQVVnRixXQUFVO0FBQ3pDakYsc0JBQWM7QUFDZEcsd0JBQWdCO0FBQ2hCLGVBQU9oTSxRQUFROFEsS0FBSztNQUNyQixDQUFDO0FBQ0RwQixXQUFLdmUsUUFBUW9ELFdBQVcsZUFBZTtBQUN2Q21iLFdBQUtMLE1BQU13USxTQUFTO0lBQ3JCO0FBQ0ExQixrQkFBYztBQUNkLFFBQUlhLDBCQUEwQnZCLFVBQVU7QUFDdkN1QixxQkFBZTtJQUNoQjtBQUNBdnhCLE9BQUdxeUIsS0FBSyxjQUFjLEVBQUVDLEtBQUs7QUFDN0J2eEIsTUFBRSxNQUFNLEVBQUUwRSxRQUFRLHNCQUFzQjtFQUN6QztBQUNBLFFBQU04c0IsbUJBQW1CQSxNQUFNO0FBQzlCLFFBQUl6ZixZQUFZO0FBQ2Y7SUFDRDtBQUNBLFVBQU0wZixnQkFBZ0JsbEIsS0FBSyxLQUFLO0FBQ2hDa2xCLGtCQUFjNVEsTUFBTTljLFVBQVU7QUFDOUJ6RSxhQUFTQyxjQUFjLE1BQU0sRUFBRWtCLE9BQU9neEIsYUFBYTtBQUNuREEsa0JBQWNMLFlBQUEsbUZBQUFseEIsT0FDYnVHLEtBQUsyRyxVQUNOLFNBQUEsRUFBQWxOLE9BQVU4TixtQkFBbUJ2SCxLQUFLOE8sVUFBVSxHQUFDLDBHQUFBLEVBQUFyVixPQUVGdUcsS0FBS2lyQixvQkFBa0IsOHpCQUFBO0FBZ0JsRTNmLGlCQUFhelMsU0FBU0MsY0FBYyxtQkFBbUI7RUFDeEQ7QUFDQSxRQUFNb3lCLFVBQVVBLE1BQU07QUFFckIsUUFBSWxyQixLQUFLb0IsYUFBYTtBQUNyQixZQUFNckYsU0FBUztRQUNkQyxRQUFRO1FBQ1JDLFFBQVE7UUFDUjBTLGVBQWU7UUFDZkMsYUFBYTtRQUNiQyxRQUFRN08sS0FBSzhPO1FBQ2JDLE1BQU0sQ0FBQyxRQUFRLFdBQVc7UUFDMUJFLFFBQVEsQ0FBQyxXQUFXLGFBQWEsS0FBSztRQUN0Q0UsU0FBUztRQUNURSxXQUFXclAsS0FBS3NQO1FBQ2hCSixTQUFTO1FBQ1RNLE1BQU0sQ0FBQyxVQUFVO01BQ2xCO0FBQ0FoTSxTQUFHa1MsUUFBU3JaLFVBQVM7QUFDcEJxUSxnQkFBUXJRLElBQUk7QUFDWnl0QixjQUFNaUIsZ0JBQWdCO01BQ3ZCO0FBQ0FoeUIsVUFBSUwsSUFBSXFELE1BQU0sRUFBRWlCLEtBQU1YLFVBQVM7QUFDOUJtSCxXQUFHa1MsTUFBTXJaLElBQUk7TUFDZCxDQUFDO0FBQ0RzdEIscUJBQWU5VCxXQUFXLE1BQU07QUFDL0JpVSxjQUFNaUIsZ0JBQWdCO01BQ3ZCLEdBQUcsR0FBSTtJQUNSLE9BQU87QUFFTixVQUFJL3FCLEtBQUtpQixzQkFBc0IsR0FBRztBQUNqQztNQUNEO0FBQ0F1SyxpQkFBVztBQUNYQyxpQkFBVztBQUNYcWUsWUFBTWlCLGdCQUFnQjtJQUN2QjtFQUNEO0FBQ0EsUUFBTUksV0FBWXJ4QixXQUFVO0FBQzNCLFVBQU04WSxPQUFPOVksTUFBTTBiLE1BQU0sSUFBSTtBQUM3QixRQUFJNUMsS0FBS3JQLFdBQVcsR0FBRztBQUN0QixhQUFPO0lBQ1I7QUFDQSxRQUFJbW1CLGVBQWV0ZSxRQUFRN0gsV0FBVyxLQUFLNkgsUUFBUSxDQUFDLEVBQUV5TyxlQUFlO0FBRXBFLFlBQU11UixXQUFXLENBQUE7QUFDakIsWUFBTW5oQixTQUFTbUIsUUFBUTdILFdBQVcsSUFBSTZILFFBQVEsQ0FBQyxFQUFFdU8sT0FBTztBQUN4RCxVQUFJMVU7QUFDSixXQUFLQSxJQUFJLEdBQUdBLElBQUkyTixLQUFLclAsUUFBUTBCLEtBQUs7QUFDakMsWUFBSTJOLEtBQUszTixDQUFDLEVBQUUxQixXQUFXLEdBQUc7QUFDekI7UUFDRDtBQUNBLFlBQUlzUSxNQUFNakIsS0FBSzNOLENBQUMsRUFBRXVRLE1BQU0sR0FBRztBQUMzQixjQUFNalcsTUFBTXNVLElBQUl0USxTQUFTLElBQUlzUSxJQUFJLENBQUMsSUFBSTtBQUN0QyxTQUFDQSxHQUFHLElBQUlBO0FBQ1IsY0FBTTRHLE9BQU8zVSxLQUFLLEdBQUc7QUFDckIyVSxhQUFLOWIsT0FBTzBJLGFBQUEsR0FBQTVOLE9BQWdCK0osR0FBR21DLG9CQUFrQixHQUFBLEVBQUFsTSxPQUFJb2EsR0FBRyxDQUFFO0FBQzFENEcsYUFBS3pnQixPQUFPOEwsS0FBSytOLEtBQUssSUFBSSxDQUFDO0FBQzNCNEcsYUFBS3ZlLFFBQVEyWDtBQUNiLGNBQU04RixPQUFPN1QsS0FBSyxNQUFNO0FBQ3hCNlQsYUFBSzNmLE9BQU95Z0IsSUFBSTtBQUNoQixZQUFJLENBQUN4VixHQUFHO0FBQ1BpRyxrQkFBUXFQLGFBQWF6VSxLQUFLLEtBQUssSUFBSSxHQUFHbUUsTUFBTTtRQUM3QztBQUNBQSxlQUFPQSxPQUFPMFAsSUFBSTtBQUNsQixZQUFJMVAsVUFBVWhGLElBQUksSUFBSTJOLEtBQUtyUCxRQUFRO0FBQ2xDbkYsaUJBQU9tYyxhQUFhelUsS0FBSyxPQUFPLElBQUksR0FBR21FLE1BQU07UUFDOUM7QUFDQW1oQixpQkFBU0EsU0FBUzduQixNQUFNLElBQUk7VUFDM0JrVCxTQUFTa0Q7VUFDVHpkLE9BQU8yWDtVQUNQdFU7UUFDRDtNQUNEO0FBRUEsVUFBSTBLLFFBQVE7QUFDWEEsZUFBT3FRLFdBQVdDLGFBQWF6VSxLQUFLLE9BQU8sSUFBSSxHQUFHbUUsTUFBTTtNQUN6RDtBQUNBLFdBQUtoRixJQUFJLEdBQUdBLElBQUltbUIsU0FBUzduQixRQUFRMEIsS0FBSztBQUNyQyxZQUFJcVUsZUFBZXBPLFNBQVNrZ0IsU0FBU25tQixDQUFDLEVBQUV3UixTQUFTMlUsU0FBU25tQixDQUFDLEVBQUUvSSxPQUFPa3ZCLFNBQVNubUIsQ0FBQyxFQUFFMUYsR0FBRztNQUNwRjtJQUNEO0FBQ0EsV0FBTztFQUNSO0FBQ0EsUUFBTThyQixXQUFXQSxNQUFNO0FBQ3RCLFFBQUl4c0IsU0FBUztBQUNiLGFBQUF5c0IsTUFBQSxHQUFBQyxZQUFxQm5nQixTQUFBa2dCLE1BQUFDLFVBQUFob0IsUUFBQStuQixPQUFTO0FBQTlCLFlBQVdyVyxTQUFBc1csVUFBQUQsR0FBQTtBQUNWLFVBQUk1eEIsT0FBT3ViLE9BQU94RDtBQUNsQixZQUFNbFMsTUFBTTBWLE9BQU92RDtBQUNuQixVQUFJaFksUUFBUUEsS0FBSzZKLFNBQVMsR0FBRztBQUM1QixZQUFJaEUsUUFBUSxNQUFNO0FBQ2pCN0Ysa0JBQUEsSUFBQUQsT0FBWThGLEdBQUc7UUFDaEI7QUFDQSxZQUFJVixXQUFXLE1BQU07QUFDcEJBLG1CQUFTbkY7UUFDVixPQUFPO0FBQ05tRixvQkFBQSxLQUFBcEYsT0FBZUMsSUFBSTtRQUNwQjtNQUNEO0lBQ0Q7QUFDQSxXQUFPbUY7RUFDUjtBQUNBLFFBQU0yc0IsYUFBYUEsTUFBTTtBQUN4QmhTLGVBQVc7QUFDWCxRQUNDLENBQUNoVyxHQUFHdkIsbUJBQ0pqQyxLQUFLaUIsc0JBQXNCLE1BQzNCakIsS0FBS3lyQiwrQkFBK0IsWUFDcEN6ckIsS0FBSzZRLFlBQ0o7QUFDRDRXLG1CQUFhO0FBQ2JxQyxZQUFNLE1BQU07QUFFWCxZQUFJbnhCLE9BQU8reUIsY0FBY0EsV0FBV0MsdUJBQXVCO0FBQzFERCxxQkFBV0Msd0JBQXdCUixTQUFTTyxXQUFXQyxxQkFBcUI7UUFDN0U7TUFDRCxDQUFDO0lBQ0YsT0FBTztBQUNOLFVBQ0MsQ0FBQzNyQixLQUFLNHJCLGVBQ041ckIsS0FBS0ksYUFBYSxVQUNsQitGLE1BQU0sTUFBTSxNQUFNLFFBQ2xCQSxNQUFNLE9BQU8sTUFBTSxRQUNuQixDQUFDa2hCLFNBQVMsS0FDVjdqQixHQUFHekMsUUFBUSxHQUNWO0FBQ0Q7TUFDRDtBQUNBbXFCLGNBQVE7SUFDVDtFQUNEO0FBQ0EsUUFBTVcsTUFBTUEsTUFBTTtBQUNqQixRQUFJcm9CLEdBQUdzb0IsU0FBUztBQUNmO0lBQ0Q7QUFDQXRvQixPQUFHc29CLFVBQVU7QUFDYk4sZUFBVztFQUNaO0FBRUE3eUIsU0FBT296QixtQkFBbUIsTUFBTTtBQUMvQixXQUFPVixTQUFTO0VBQ2pCO0FBQ0ExeUIsU0FBT3F6QixtQkFBb0JseUIsV0FBVTtBQUNwQyxXQUFPcXhCLFNBQVNyeEIsS0FBSztFQUN0QjtBQUNBbkIsU0FBT3N6QixvQkFBb0IsTUFBTTtBQUNoQzNFLGNBQVU7RUFDWDtBQUNBOWpCLEtBQUcwb0IsZUFBZ0I5WCxjQUFhO0FBRS9CNWIsT0FBR3F5QixLQUFLLGNBQWMsRUFBRXJxQixJQUFJNFQsUUFBUTtFQUNyQztBQUdBLE1BQUlwVSxLQUFLeXJCLCtCQUErQixVQUFVO0FBRWpEanpCLE9BQUdxeUIsS0FBSyxVQUFVLEVBQUVycUIsSUFBSSxNQUFNO0FBRzdCLFVBQUkzSCxTQUFTQyxjQUFjLHVCQUF1QixHQUFHO0FBQ3BEO01BQ0Q7QUFDQW9TLGdCQUFVO0FBQ1ZFLGdCQUFVLENBQUE7QUFDVnNlLG9CQUFjO0FBQ2RsbUIsU0FBR3NvQixVQUFVO0FBQ2JELFVBQUk7SUFDTCxDQUFDO0VBQ0Y7QUFHQXR5QixJQUFFc3lCLEdBQUc7QUFDTixHQUFHOyIsCiAgIm5hbWVzIjogWyJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJuYXZpZ2F0b3IiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJTeW1ib2wiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJkb2N1bWVudCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIlR5cGVFcnJvciIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJhY3RpdmVYRG9jdW1lbnQiLCAibW9kdWxlIiwgIiQiLCAiZ2xvYmFsVGhpcyIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICIkIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIiQiLCAiY2F0Y2hlY2tJbmxpbmVJY29uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAibXdBcGkiLCAidXNlckFnZW50IiwgImluaXRNd0FwaSIsICJob3RDYXRDaGVjayIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIndpbmRvdyIsICJIb3RDYXRBdXRvUmVtb3ZlQ2hlY2tDYXRPcHRPdXQiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJhcGkiLCAiY2hlY2tDYXRlZ29yaWVzUmVnRXhwIiwgInNlbGZOYW1lIiwgInN0b3JhZ2VJdGVtTmFtZSIsICJzdG9yYWdlSXRlbSIsICJzdG9yYWdlIiwgImNyZWF0ZWpJY29uIiwgImljb25DbGFzcyIsICIkIiwgImF0dHIiLCAiY29uY2F0IiwgInRleHQiLCAiY3JlYXRlTm90aWZ5QXJlYSIsICJ0ZXh0Tm9kZSIsICJpY29uIiwgInN0YXRlIiwgImFkZENsYXNzIiwgImFwcGVuZCIsICJjc3MiLCAicGFkZGluZyIsICJvbmUiLCAiZSIsICJfc2VsZiR3cFRleHRib3gxJHZhbHUiLCAic2VsZiIsICJuZXdWYWwiLCAid3BUZXh0Ym94MSIsICJ2YWx1ZSIsICJyZXBsYWNlIiwgImRsZ0J1dHRvbnMiLCAiJGRpYWxvZ0NoZWNrU3RvcmFnZSIsICIkcGVybWFTYXZlSGludCIsICIkdGV4dEhpbnROb2RlIiwgIiRkaWFsb2ciLCAiZG9SZW1vdmUiLCAid3BTdW1tYXJ5IiwgIndyaXRlU3RvcmFnZSIsICJ2YWwiLCAic2V0IiwgIl8kZGlhbG9nQ2hlY2tTdG9yYWdlJCIsICJjaGVja2VkIiwgImRpYWxvZyIsICJfJGRpYWxvZ0NoZWNrU3RvcmFnZSQyIiwgIl9hZGRUb0pTIiwgIl9lIiwgInByZXZlbnREZWZhdWx0IiwgImhhc0NsYXNzIiwgIiRlbCIsICJvZmYiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAidGl0bGUiLCAic3VtbWFyeSIsICJhcHBlbmR0ZXh0IiwgImRhdGEiLCAiZWRpdERvbmUiLCAiZWRpdFN0YXQiLCAiZXJyb3IiLCAibm90aWZ5IiwgImNvZGUiLCAiaW5mbyIsICJ0YWciLCAidHlwZSIsICJmYWRlT3V0IiwgInBvc3RXaXRoVG9rZW4iLCAidGhlbiIsICJwcm9tcHQiLCAiaWQiLCAib24iLCAiZmFkZUluIiwgImFwcGVuZFRvIiwgImRpc3BsYXkiLCAidXNlciIsICJpc0Fub24iLCAiaGlkZSIsICJtb2RhbCIsICJjbG9zZU9uRXNjYXBlIiwgIndpZHRoIiwgImJ1dHRvbnMiLCAiY2xvc2UiLCAiJGJvZHkiLCAiZmluZCIsICJ0cmlnZ2VyIiwgIm9wZW4iLCAiJGJ1dHRvbnMiLCAicGFyZW50IiwgImVxIiwgImJ1dHRvbiIsICJpY29ucyIsICJwcmltYXJ5IiwgIkhvdENhdEF1dG9SZW1vdmVDaGVja0NhdCIsICIkb2tMaW5rIiwgImhyZWYiLCAiZG9FZGl0IiwgInJlc3VsdCIsICJub2NyZWF0ZSIsICJhamF4IiwgInVybCIsICJkYXRhVHlwZSIsICJzdWNjZXNzIiwgImNhY2hlIiwgImxvYWRIb3RDYXRDaGVjayIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiYXJncyIsICJtZXNzYWdlIiwgInBsYWluIiwgImhvdENhdE1lc3NhZ2VzIiwgIndnVXNlckxhbmd1YWdlIiwgImluY2x1ZGVzIiwgIm1lc3NhZ2VzIiwgImhvdENhdCIsICJjb25mIiwgInZhbHVlcyIsICJIb3RDYXQiLCAibm9kZU5hbWUiLCAid2dBY3Rpb24iLCAibGlua3MiLCAiY2hhbmdlIiwgInJlbW92ZSIsICJhZGQiLCAicmVzdG9yZSIsICJ1bmRvIiwgImRvd24iLCAidXAiLCAiY2hhbmdlVGFnIiwgImFkZG11bHRpIiwgImRpc2FibGUiLCAibnMiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAibnNJZHMiLCAid2dOYW1lc3BhY2VJZHMiLCAid2dBcnRpY2xlSWQiLCAidGVzdCIsICJ3Z1RpdGxlIiwgImNyZWF0b3IiLCAidGltZWR0ZXh0IiwgImluc3RpdHV0aW9uIiwgInVuY2F0X3JlZ2V4cCIsICJleGlzdHNZZXMiLCAiUF95ZXNfZGVmYXVsdCIsICJleGlzdHNObyIsICJQX25vX2RlZmF1bHQiLCAidGVtcGxhdGVfY2F0ZWdvcmllcyIsICJjYXBpdGFsaXplUGFnZU5hbWVzIiwgInVwbG9hZF9kaXNhYmxlZCIsICJibGFja2xpc3QiLCAiYmdfY2hhbmdlZCIsICJub19hdXRvY29tbWl0IiwgImRlbF9uZWVkc19kaWZmIiwgInN1Z2dlc3RfZGVsYXkiLCAiZWRpdGJveF93aWR0aCIsICJzdWdnZXN0aW9ucyIsICJmaXhlZF9zZWFyY2giLCAidXNlX3VwX2Rvd24iLCAibGlzdFNpemUiLCAic2luZ2xlX21pbm9yIiwgImRvbnRfYWRkX3RvX3dhdGNobGlzdCIsICJzaG9ydGN1dHMiLCAiYWRkU2hvcnRjdXRzIiwgIm1hcCIsICJfd2luZG93JEhvdENhdCIsICJrIiwgIk9iamVjdCIsICJoYXNPd24iLCAidiIsICJ0cmltIiwgImxlbmd0aCIsICJIQyIsICJ1YSIsICJuYXZpZ2F0b3IiLCAidG9Mb3dlckNhc2UiLCAiaXNfd2Via2l0IiwgImNhdF9wcmVmaXgiLCAibm9TdWdnZXN0aW9ucyIsICJ3aWtpVGV4dEJsYW5rIiwgIlN0cmluZyIsICJyYXciLCAiX3RlbXBsYXRlT2JqZWN0IiwgIl90YWdnZWRUZW1wbGF0ZUxpdGVyYWwiLCAid2lraVRleHRCbGFua1JFIiwgIlJlZ0V4cCIsICJ3aWtpVGV4dEJsYW5rT3JCaWRpIiwgIl90ZW1wbGF0ZU9iamVjdDIiLCAiZm9ybWF0dGVkTmFtZXNwYWNlcyIsICJ3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMiLCAibmFtZXNwYWNlSWRzIiwgImF1dG9Mb2NhbGl6ZSIsICJuYW1lc3BhY2VOdW1iZXIiLCAiZmFsbGJhY2siLCAiY3JlYXRlUmVnZXhwU3RyIiwgIm5hbWUiLCAicmVnZXhfbmFtZSIsICJpIiwgImluaXRpYWwiLCAiY2hhckF0IiwgImxsIiwgInVsIiwgInRvVXBwZXJDYXNlIiwgIl90ZW1wbGF0ZU9iamVjdDMiLCAiY2Fub25pY2FsIiwgInJlZ2V4cCIsICJjYXRfbmFtZSIsICJjYXRlZ29yeV9jYW5vbmljYWwiLCAiY2F0ZWdvcnlfcmVnZXhwIiwgInRlbXBsYXRlX3JlZ2V4cCIsICJtYWtlIiwgImFyZyIsICJsaXRlcmFsIiwgImNyZWF0ZVRleHROb2RlIiwgImNyZWF0ZUVsZW1lbnQiLCAicGFyYW0iLCAidXJpIiwgImxvY2F0aW9uIiwgInJlIiwgIm0iLCAiZXhlYyIsICJkZWNvZGVVUklDb21wb25lbnQiLCAic2NyaXB0IiwgIndnU2NyaXB0IiwgImluZGV4T2YiLCAid2dTZXJ2ZXIiLCAic2xpY2UiLCAicHJvdG9jb2wiLCAicHJlZml4IiwgIndnQXJ0aWNsZVBhdGgiLCAiY2xhc3NOYW1lIiwgImNhcGl0YWxpemUiLCAic3RyIiwgIndpa2lQYWdlUGF0aCIsICJwYWdlTmFtZSIsICJlbmNvZGVVUklDb21wb25lbnQiLCAiZXNjYXBlUkUiLCAiX3RlbXBsYXRlT2JqZWN0NCIsICJzdWJzdGl0dXRlRmFjdG9yeSIsICJvcHRpb25zIiwgImxlYWQiLCAiaW5kaWNhdG9yIiwgImxicmFjZSIsICJyYnJhY2UiLCAibWF0Y2giLCAiaWR4IiwgImFscGhhIiwgInJlcGxhY2VtZW50IiwgInJlcGxhY2VTaG9ydGN1dHMiLCAicmVwbGFjZUhhc2giLCAicyIsICJmaW5kQ2F0c1JFIiwgInJlcGxhY2VCeUJsYW5rcyIsICJmaW5kX2NhdGVnb3J5IiwgIndpa2l0ZXh0IiwgImNhdGVnb3J5IiwgIm9uY2UiLCAiY2F0X3JlZ2V4IiwgIm5vd2lraVJlZ2V4IiwgIl90ZW1wbGF0ZU9iamVjdDUiLCAiY29waWVkdGV4dCIsICJjdXJyX21hdGNoIiwgImludGVybGFuZ3VhZ2VSRSIsICJjaGFuZ2VfY2F0ZWdvcnkiLCAidG9SZW1vdmUiLCAidG9BZGQiLCAiaXNfaGlkZGVuIiwgImZpbmRfaW5zZXJ0aW9ucG9pbnQiLCAiX3dpa2l0ZXh0IiwgIl90ZW1wbGF0ZU9iamVjdDYiLCAiaW5kZXgiLCAibGFzdEluZGV4IiwgIm9uQ2F0IiwgIm5hbWVTcGFjZSIsICJrZXlDaGFuZ2UiLCAibWF0Y2hlcyIsICJjYXRfcG9pbnQiLCAiYmVmb3JlIiwgIk1hdGgiLCAibWF4IiwgImFmdGVyIiwgInNlYXJjaCIsICJqIiwgInBvaW50IiwgIm5ld2NhdHN0cmluZyIsICJzdWZmaXgiLCAidHh0IiwgImV2dEtleXMiLCAiY3RybEtleSIsICJtZXRhS2V5IiwgInNoaWZ0S2V5IiwgImV2dEtpbGwiLCAic3RvcFByb3BhZ2F0aW9uIiwgImNhbmNlbEJ1YmJsZSIsICJjYXRMaW5lIiwgIm9uVXBsb2FkIiwgImVkaXRvcnMiLCAiY29tbWl0QnV0dG9uIiwgImNvbW1pdEZvcm0iLCAibXVsdGlTcGFuIiwgInBhZ2VUZXh0IiwgInBhZ2VUaW1lIiwgInBhZ2VXYXRjaGVkIiwgIndhdGNoQ3JlYXRlIiwgIndhdGNoRWRpdCIsICJtaW5vckVkaXRzIiwgImVkaXRUb2tlbiIsICJpc19ydGwiLCAic2VydmVyVGltZSIsICJsYXN0UmV2SWQiLCAicGFnZVRleHRSZXZJZCIsICJjb25mbGljdGluZ1VzZXIiLCAibmV3RE9NIiwgIlVOQ0hBTkdFRCIsICJPUEVOIiwgIkNIQU5HRV9QRU5ESU5HIiwgIkNIQU5HRUQiLCAiREVMRVRFRCIsICJzZXRQYWdlIiwgInN0YXJ0VGltZSIsICJxdWVyeSIsICJwYWdlcyIsICJwYWdlIiwgInJldmlzaW9ucyIsICJzbG90cyIsICJtYWluIiwgImNvbnRlbnQiLCAidGltZXN0YW1wIiwgInJldmlkIiwgImxhc3RyZXZpZCIsICJzdGFydHRpbWVzdGFtcCIsICJ3YXRjaGVkIiwgInRva2VucyIsICJjc3JmdG9rZW4iLCAibGFuZ2xpbmtzIiwgImxhbmciLCAiX3RlbXBsYXRlT2JqZWN0NyIsICJnZW5lcmFsIiwgInRpbWUiLCAiY2FzZSIsICJ1c2VyaW5mbyIsICJ3YXRjaGNyZWF0aW9ucyIsICJ3YXRjaGRlZmF1bHQiLCAibWlub3JkZWZhdWx0IiwgInNhdmVJblByb2dyZXNzIiwgImluaXRpYXRlRWRpdCIsICJmYWlsdXJlIiwgIm9sZEJ1dHRvblN0YXRlIiwgImRpc2FibGVkIiwgImZhaWwiLCAiYXBwbHkiLCAiZm9ybWF0dmVyc2lvbiIsICJyYXdjb250aW51ZSIsICJ0aXRsZXMiLCAid2dQYWdlTmFtZSIsICJwcm9wIiwgImlucHJvcCIsICJydnByb3AiLCAicnZzbG90cyIsICJydmxpbWl0IiwgInJ2ZGlyIiwgInJ2c3RhcnRpZCIsICJ3Z0N1clJldmlzaW9uSWQiLCAibGxsaW1pdCIsICJtZXRhIiwgInVpcHJvcCIsICJkb25lIiwgInN0YXR1cyIsICJzdGF0dXNUZXh0IiwgIm11bHRpQ2hhbmdlTXNnIiwgImNvdW50IiwgImN1cnJlbnRUaW1lc3RhbXAiLCAibm93IiwgIkRhdGUiLCAidHMiLCAiZ2V0VVRDRnVsbFllYXIiLCAidHdvIiwgImdldFVUQ01vbnRoIiwgImdldFVUQ0RhdGUiLCAiZ2V0VVRDSG91cnMiLCAiZ2V0VVRDTWludXRlcyIsICJnZXRVVENTZWNvbmRzIiwgInBlcmZvcm1DaGFuZ2VzIiwgInNpbmdsZUVkaXRvciIsICJzZWxmRWRpdENvbmZsaWN0IiwgIndnVXNlck5hbWUiLCAibm9Db21taXQiLCAid3BFZGl0VG9rZW4iLCAid3BEaWZmIiwgIndwU2F2ZSIsICJjaGFuZ2VkIiwgImFkZGVkIiwgImRlbGV0ZWQiLCAidG9FZGl0IiwgImVkaXQiLCAiY2hhbmdlcyIsICJvcmlnaW5hbENhdGVnb3J5IiwgImN1cnJlbnRDYXRlZ29yeSIsICJjdXJyZW50S2V5IiwgImN1cnJlbnRIaWRkZW4iLCAiZnJvbSIsICJ0byIsICJ3cE1pbm9yZWRpdCIsICJ3cFdhdGNodGhpcyIsICJ3cENoYW5nZVRhZ3MiLCAid3BBdXRvU3VtbWFyeSIsICJqb2luIiwgInNob3J0U3VtbWFyeSIsICJhcnJvdyIsICJ3cFN0YXJ0dGltZSIsICJ3cEVkaXR0aW1lIiwgIm9sZGlkIiwgImhjQ29tbWl0IiwgImNsaWNrIiwgInJlc29sdmVPbmUiLCAidG9SZXNvbHZlIiwgImNhdHMiLCAiY2F0ZWdvcmllcyIsICJpc19kYWIiLCAiaXNfcmVkaXIiLCAicmVkaXJlY3QiLCAiY2F0ZWdvcnlpbmZvIiwgImhpZGRlbiIsICJpc19taXNzaW5nIiwgIm1pc3NpbmciLCAiZGFiSW5wdXRDbGVhbmVkIiwgImlucHV0RXhpc3RzIiwgInNyYyIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAibiIsICJjYXRfIiwgImNhdCIsICJlcnIiLCAiZiIsICJkYWIiLCAicmVzb2x2ZVJlZGlyZWN0cyIsICJwIiwgInJlc29sdmVNdWx0aSIsICJjYWxsYmFjayIsICJkYWJJbnB1dCIsICJsYXN0SW5wdXQiLCAicGxuYW1lc3BhY2UiLCAicGxsaW1pdCIsICJjbGxpbWl0IiwgImpzb24iLCAicmVxIiwgIm1ha2VBY3RpdmUiLCAid2hpY2giLCAiaXNfYWN0aXZlIiwgIl9pIiwgIl9lZGl0b3JzIiwgImVkaXRvciIsICJpbmFjdGl2YXRlIiwgInNob3dEYWIiLCAiZXhwZWN0ZWRJbnB1dCIsICJsYXN0UmVhbElucHV0IiwgImFjdHVhbFZhbHVlIiwgInNob3dzTGlzdCIsICJzcGxpdCIsICJsYXN0U2VsZWN0aW9uIiwgInN0YXJ0IiwgImVuZCIsICJkaXNwbGF5TGlzdCIsICJzZXRUaW1lb3V0IiwgInNldFNlbGVjdGlvbiIsICJzaG93U3VnZ2VzdGlvbnMiLCAibXVsdGlTdWJtaXQiLCAiX2kyIiwgIl9lZGl0b3JzMiIsICJtc2ciLCAicmVzb2x2ZWQiLCAiZmlyc3REYWIiLCAiZG9udENoYW5nZSIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJlbGVtZW50IiwgImFjY2VwdENoZWNrIiwgImNvbW1pdCIsICJzZXRNdWx0aUlucHV0IiwgImFkZEV2ZW50TGlzdGVuZXIiLCAicmVwbGFjZVdpdGgiLCAiY2hlY2tNdWx0aUlucHV0IiwgImhhc0NoYW5nZXMiLCAiX2kzIiwgIl9lZGl0b3JzMyIsICJzdWdnZXN0aW9uRW5naW5lcyIsICJvcGVuc2VhcmNoIiwgImhhbmRsZXIiLCAicXVlcnlSZXN1bHQiLCAicXVlcnlLZXkiLCAiZXhpc3RzIiwgInNwbGljZSIsICJub3JtYWxpemVkIiwgImludGVybmFsc2VhcmNoIiwgImFsbHBhZ2VzIiwgIl90aXRsZSIsICJzdWJjYXRlZ29yaWVzIiwgImNhdGVnb3J5bWVtYmVycyIsICJwYXJlbnRjYXRlZ29yaWVzIiwgInN1Z2dlc3Rpb25Db25maWdzIiwgInNlYXJjaGluZGV4IiwgImVuZ2luZXMiLCAic2hvdyIsICJ0ZW1wIiwgIm5vQ29tcGxldGlvbiIsICJwYWdlbGlzdCIsICJjb21iaW5lZCIsICJzdWJjYXQiLCAicGFyZW50Y2F0IiwgIkJTIiwgIlRBQiIsICJSRVQiLCAiRVNDIiwgIlNQQUNFIiwgIlBHVVAiLCAiUEdET1dOIiwgIlVQIiwgIkRPV04iLCAiREVMIiwgIklNRSIsICJDYXRlZ29yeUVkaXRvciIsICJjb25zdHJ1Y3RvciIsICJpbml0aWFsaXplIiwgImlzQ29tcG9zaXRpb25TdGFydCIsICJsaW5lIiwgInNwYW4iLCAiZGlyIiwgImlzQWRkQ2F0ZWdvcnkiLCAiY2F0TGluayIsICJmaXJzdENoaWxkIiwgIm9yaWdpbmFsS2V5IiwgIm9yaWdpbmFsRXhpc3RzIiwgIm1ha2VMaW5rU3BhbiIsICJ1cERvd25MaW5rcyIsICJzdHlsZSIsICJsaW5rU3BhbiIsICJwYXJlbnROb2RlIiwgImluc2VydEJlZm9yZSIsICJuZXh0U2libGluZyIsICJsaW5rIiwgImJpbmQiLCAibm9ybWFsTGlua3MiLCAidW5kZWxMaW5rIiwgIm9yaWdpbmFsSGlkZGVuIiwgImVuZ2luZSIsICJjdXJyZW50RXhpc3RzIiwgImxhc3RTYXZlZFN0YXRlIiwgImxhc3RTYXZlZENhdGVnb3J5IiwgImxhc3RTYXZlZEtleSIsICJsYXN0U2F2ZWRFeGlzdHMiLCAibGFzdFNhdmVkSGlkZGVuIiwgImludm9rZVN1Z2dlc3Rpb25zIiwgImRvbnRfYXV0b2NvbXBsZXRlIiwgInRleHRjaGFuZ2UiLCAibWFrZUZvcm0iLCAiZm9ybSIsICJtZXRob2QiLCAiYWNjZXB0IiwgInNpemUiLCAiZXZlbnQiLCAiaW1lIiwgImxhc3RLZXkiLCAidXNlc0NvbXBvc2l0aW9uIiwgImtleUNvdW50IiwgInByb2Nlc3NLZXkiLCAicmVzZXRLZXlTZWxlY3Rpb24iLCAiY2FuY2VsIiwgInNhdmVWaWV3IiwgImxpc3QiLCAiaGlnaGxpZ2h0U3VnZ2VzdGlvbiIsICJmb2N1cyIsICJlbmdpbmVTZWxlY3RvciIsICJvcHQiLCAic2VsZWN0ZWQiLCAic2VsZWN0ZWRJbmRleCIsICJidXR0b25fbGFiZWwiLCAiX2lkIiwgImRlZmF1bHRUZXh0IiwgImxhYmVsIiwgIk9LIiwgIm9rIiwgImNhbmNlbEJ1dHRvbiIsICJwb3NpdGlvbiIsICJ3aGl0ZVNwYWNlIiwgIl9pNCIsICJfZWRpdG9yczQiLCAib3JpZ2luYWxTdGF0ZSIsICJyZWFkT25seSIsICJyZW1vdmVFZGl0b3IiLCAiYmFja2dyb3VuZENvbG9yIiwgIm5leHQiLCAicm9sbGJhY2siLCAidW5kb0xpbmsiLCAiZG9udENoZWNrIiwgInNhbml0aXplSW5wdXQiLCAib3JpZ2luYWwiLCAiX2k1IiwgIl9lZGl0b3JzNSIsICJjc3NUZXh0IiwgInRleHREZWNvcmF0aW9uIiwgInNlbGVjdEVuZ2luZSIsICJlbmdpbmVOYW1lIiwgIm1ha2VDYWxsIiwgImNhbGxiYWNrT2JqIiwgImNsZWFuS2V5IiwgImNiIiwgInoiLCAiY2FsbHNNYWRlIiwgIm5vZkNhbGxzIiwgImFsbFRpdGxlcyIsICJkb250Q2FjaGUiLCAiY2FuY2VsbGVkIiwgImdldEpTT04iLCAiZ2VuZXJhdGVBcnJheSIsICJmb3JjZSIsICJwaXBlIiwgIm1ha2VDYWxscyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJlbmdpbmVfIiwgIndnU2NyaXB0UGF0aCIsICJkb250QXV0b2NvbXBsZXRlIiwgImxhc3RRdWVyeSIsICJ2Tm9ybWFsaXplZCIsICJrbm93blRvRXhpc3QiLCAidkxvdyIsICJzb3J0IiwgImEiLCAiYiIsICJwcmVmaXhNYXRjaEEiLCAicHJlZml4TWF0Y2hCIiwgImFMb3ciLCAiYkxvdyIsICJmaXJzdFRpdGxlIiwgImNvbXBsZXRlZCIsICJhdXRvQ29tcGxldGUiLCAiZXhpc3RpbmciLCAibm9mSXRlbXMiLCAibWluIiwgImFsaWduIiwgInpJbmRleCIsICJhbmNob3IiLCAibGlzdGgiLCAidG9wIiwgIm9mZnNldFRvcCIsICJvZmZzZXRIZWlnaHQiLCAibWF4TGlzdEhlaWdodCIsICJ2aWV3cG9ydCIsICJ3aGF0IiwgImRvY3VtZW50RWxlbWVudCIsICJzY3JvbGxfb2Zmc2V0IiwgIm5vZGUiLCAiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwgImJveCIsICJ4IiwgInJvdW5kIiwgImxlZnQiLCAieSIsICJ0IiwgImwiLCAib2Zmc2V0TGVmdCIsICJvZmZzZXRQYXJlbnQiLCAidGV4dFBvcyIsICJubCIsICJudCIsICJvZmZzZXQiLCAidGV4dEJveFdpZHRoIiwgIm9mZnNldFdpZHRoIiwgImNsaWVudFdpZHRoIiwgInNjcm9sbCIsICJ2aWV3X3ciLCAidyIsICJsX3BvcyIsICJyaWdodCIsICJyZWxhdGl2ZV9vZmZzZXQiLCAiYWN0VmFsIiwgIm5vcm1hbGl6ZWRBY3RWYWwiLCAiZG9udE1vZGlmeSIsICJjYW5TZWxlY3QiLCAic2V0U2VsZWN0aW9uUmFuZ2UiLCAic2VsZWN0aW9uU3RhcnQiLCAic2VsZWN0aW9uRW5kIiwgImdldFNlbGVjdGlvbiIsICJjdXJyIiwgInRndCIsICJob3RjYXRfZG9udF9hZGRfdG9fd2F0Y2hsaXN0IiwgIkhvdENhdERvbnRBZGRUb1dhdGNobGlzdCIsICJob3RjYXRfbm9fYXV0b2NvbW1pdCIsICJIb3RDYXROb0F1dG9Db21taXQiLCAiaG90Y2F0X2RlbF9uZWVkc19kaWZmIiwgIkhvdENhdERlbE5lZWRzRGlmZiIsICJob3RjYXRfc3VnZ2VzdGlvbl9kZWxheSIsICJIb3RDYXRTdWdnZXN0aW9uRGVsYXkiLCAiaG90Y2F0X2VkaXRib3hfd2lkdGgiLCAiSG90Q2F0RWRpdEJveFdpZHRoIiwgImhvdGNhdF9zdWdnZXN0aW9ucyIsICJIb3RDYXRTdWdnZXN0aW9ucyIsICJob3RjYXRfc3VnZ2VzdGlvbnNfZml4ZWQiLCAiSG90Q2F0Rml4ZWRTdWdnZXN0aW9ucyIsICJob3RjYXRfc2luZ2xlX2NoYW5nZXNfYXJlX21pbm9yIiwgIkhvdENhdE1pbm9yU2luZ2xlQ2hhbmdlcyIsICJob3RjYXRfY2hhbmdlZF9iYWNrZ3JvdW5kIiwgIkhvdENhdENoYW5nZWRCYWNrZ3JvdW5kIiwgImhvdGNhdF91c2VfY2F0ZWdvcnlfbGlua3MiLCAiSG90Q2F0VXNlQ2F0ZWdvcnlMaW5rcyIsICJob3RjYXRfbGlzdF9zaXplIiwgIkhvdENhdExpc3RTaXplIiwgIkhvdENhdENoYW5nZVRhZyIsICJlRm9ybSIsICJlZGl0Zm9ybSIsICJjYXRSZWdFeHAiLCAib2xkVHh0IiwgImlzTWlub3JDaGFuZ2UiLCAibmV3VHh0IiwgIm9sZExpbmVzIiwgIm5ld0xpbmVzIiwgImNBcnIiLCAiZXhjZXB0IiwgImFBcnIiLCAiYkFyciIsICJsQXJyIiwgInNBcnIiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiaXRlbSIsICJpbmQiLCAiZmlsdGVyIiwgImMiLCAic3VtIiwgInN1bUEiLCAiJGN0IiwgInJlbW92ZUNoYW5nZVRhZyIsICJOdW1iZXIiLCAicGFyc2VJbnQiLCAiaXNOYU4iLCAiX2k2IiwgIl9PYmplY3QkZW50cmllcyIsICJlbnRyaWVzIiwgInN1Z2dlc3Rpb25Db25maWciLCAiZGVmYXVsdFZpZXciLCAiZ2V0Q29tcHV0ZWRTdHlsZSIsICJnZXRQcm9wZXJ0eVZhbHVlIiwgImRpcmVjdGlvbiIsICJjYW5fZWRpdCIsICJjbG9zZUZvcm0iLCAiX2k3IiwgIl9lZGl0b3JzNiIsICJzZXR1cF91cGxvYWQiLCAiaXAiLCAicmV1cGxvYWQiLCAiZGVzdEZpbGUiLCAibGFiZWxDZWxsIiwgImxpbmVDZWxsIiwgInRleHRBbGlnbiIsICJtYXJnaW4iLCAiYm9yZGVyIiwgInZlcnRpY2FsQWxpZ24iLCAibmV3Um93IiwgImluc2VydFJvdyIsICJvbGRTdWJtaXQiLCAiZG9fc3VibWl0IiwgImV2YWwiLCAiRnVuY3Rpb24iLCAiZWIiLCAiYWRkZWRPbmUiLCAiX2k4IiwgIl9lZGl0b3JzNyIsICJuZXdfY2F0IiwgIl90ZW1wbGF0ZU9iamVjdDgiLCAiX2NsZWFuZWRUZXh0IiwgInJlZ2V4IiwgIm9uc3VibWl0IiwgImNsZWFuZWRUZXh0IiwgImlzT25QYWdlIiwgIm5vZGVUeXBlIiwgIk5vZGUiLCAiRUxFTUVOVF9OT0RFIiwgImNhdFRpdGxlIiwgImdldEF0dHJpYnV0ZSIsICJfdGVtcGxhdGVPYmplY3Q5IiwgImluaXRpYWxpemVkIiwgInNldHVwVGltZW91dCIsICJmaW5kQnlDbGFzcyIsICJzY29wZSIsICJzZXR1cCIsICJhZGRpdGlvbmFsV29yayIsICJjbGVhclRpbWVvdXQiLCAiaGlkZGVuQ2F0cyIsICJmb290ZXIiLCAiY29udGFpbmVyIiwgImNyZWF0ZUVkaXRvcnMiLCAicXVlcnlTZWxlY3RvckFsbCIsICJjb3B5Q2F0cyIsICJBcnJheSIsICJhdCIsICJsYXN0U3BhbiIsICJlbmFibGVNdWx0aSIsICJpbm5lckhUTUwiLCAiY3Vyc29yIiwgImhvb2siLCAiZmlyZSIsICJjcmVhdGVDb21taXRGb3JtIiwgImZvcm1Db250YWluZXIiLCAid2dQYWdlQ29udGVudE1vZGVsIiwgImdldFBhZ2UiLCAic2V0U3RhdGUiLCAibmV3U3BhbnMiLCAiZ2V0U3RhdGUiLCAiX2k5IiwgIl9lZGl0b3JzOCIsICJyZWFsbHlfcnVuIiwgIndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIiwgIlVwbG9hZEZvcm0iLCAicHJldmlvdXNfaG90Y2F0X3N0YXRlIiwgIndnSXNBcnRpY2xlIiwgInJ1biIsICJzdGFydGVkIiwgImhvdGNhdF9nZXRfc3RhdGUiLCAiaG90Y2F0X3NldF9zdGF0ZSIsICJob3RjYXRfY2xvc2VfZm9ybSIsICJydW5XaGVuUmVhZHkiXQp9Cg==
