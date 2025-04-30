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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwtdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi1yYXcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmRleGVkLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1jYWxsYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1idWlsdC1pbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnZpcm9ubWVudC11c2VyLWFnZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYW4taW5zdGFuY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3JyZWN0LXByb3RvdHlwZS1nZXR0ZXIuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbi1hY2Nlc3Nvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaHRtbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1jcmVhdGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMtY29yZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5pdGVyYXRvci5jb25zdHJ1Y3Rvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1pdGVyYXRvci1kaXJlY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW5zLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLWl0ZXItcmVzdWx0LW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0b3ItY3JlYXRlLXByb3h5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2FsbC13aXRoLXNhZmUtaXRlcmF0aW9uLWNsb3NpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuaXRlcmF0b3IuZmlsdGVyLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLWNsYXVzZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9ycy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWFycmF5LWl0ZXJhdG9yLW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXN0cmluZy10YWctc3VwcG9ydC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40MS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDEuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQxLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5pdGVyYXRvci5maW5kLmpzIiwgInNyYy9Ib3RDYXQvbW9kdWxlcy9jaGVjay5tb2R1bGUubGVzcyIsICJzcmMvSG90Q2F0L21vZHVsZXMvYXBpLnRzIiwgInNyYy9Ib3RDYXQvbW9kdWxlcy9jaGVjay50cyIsICJzcmMvSG90Q2F0L0hvdENhdC5qcyIsICJzcmMvSG90Q2F0L21vZHVsZXMvZ2V0TWVzc2FnZS50cyIsICJzcmMvSG90Q2F0L21vZHVsZXMvbWVzc2FnZXMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIid1c2Ugc3RyaWN0JztcbnZhciBjaGVjayA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgJiYgaXQuTWF0aCA9PT0gTWF0aCAmJiBpdDtcbn07XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG5tb2R1bGUuZXhwb3J0cyA9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1nbG9iYWwtdGhpcyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBnbG9iYWxUaGlzID09ICdvYmplY3QnICYmIGdsb2JhbFRoaXMpIHx8XG4gIGNoZWNrKHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93KSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzIC0tIHNhZmVcbiAgY2hlY2sodHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZikgfHxcbiAgY2hlY2sodHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwpIHx8XG4gIGNoZWNrKHR5cGVvZiB0aGlzID09ICdvYmplY3QnICYmIHRoaXMpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuYyAtLSBmYWxsYmFja1xuICAoZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSkoKSB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIERldGVjdCBJRTgncyBpbmNvbXBsZXRlIGRlZmluZVByb3BlcnR5IGltcGxlbWVudGF0aW9uXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgMSwgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSlbMV0gIT09IDc7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZnVuY3Rpb24tcHJvdG90eXBlLWJpbmQgLS0gc2FmZVxuICB2YXIgdGVzdCA9IChmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0pLmJpbmQoKTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGlucyAtLSBzYWZlXG4gIHJldHVybiB0eXBlb2YgdGVzdCAhPSAnZnVuY3Rpb24nIHx8IHRlc3QuaGFzT3duUHJvcGVydHkoJ3Byb3RvdHlwZScpO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBjYWxsID0gRnVuY3Rpb24ucHJvdG90eXBlLmNhbGw7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZnVuY3Rpb24tcHJvdG90eXBlLWJpbmQgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IGNhbGwuYmluZChjYWxsKSA6IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGNhbGwuYXBwbHkoY2FsbCwgYXJndW1lbnRzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIE5hc2hvcm4gfiBKREs4IGJ1Z1xudmFyIE5BU0hPUk5fQlVHID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmICEkcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh7IDE6IDIgfSwgMSk7XG5cbi8vIGBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eWlzZW51bWVyYWJsZVxuZXhwb3J0cy5mID0gTkFTSE9STl9CVUcgPyBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShWKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMsIFYpO1xuICByZXR1cm4gISFkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IuZW51bWVyYWJsZTtcbn0gOiAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIGNhbGwgPSBGdW5jdGlvblByb3RvdHlwZS5jYWxsO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbnZhciB1bmN1cnJ5VGhpc1dpdGhCaW5kID0gTkFUSVZFX0JJTkQgJiYgRnVuY3Rpb25Qcm90b3R5cGUuYmluZC5iaW5kKGNhbGwsIGNhbGwpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9CSU5EID8gdW5jdXJyeVRoaXNXaXRoQmluZCA6IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjYWxsLmFwcGx5KGZuLCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbnZhciB0b1N0cmluZyA9IHVuY3VycnlUaGlzKHt9LnRvU3RyaW5nKTtcbnZhciBzdHJpbmdTbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHN0cmluZ1NsaWNlKHRvU3RyaW5nKGl0KSwgOCwgLTEpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xudmFyIHNwbGl0ID0gdW5jdXJyeVRoaXMoJycuc3BsaXQpO1xuXG4vLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xubW9kdWxlLmV4cG9ydHMgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIHRocm93cyBhbiBlcnJvciBpbiByaGlubywgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3JoaW5vL2lzc3Vlcy8zNDZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGlucyAtLSBzYWZlXG4gIHJldHVybiAhJE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApO1xufSkgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNsYXNzb2YoaXQpID09PSAnU3RyaW5nJyA/IHNwbGl0KGl0LCAnJykgOiAkT2JqZWN0KGl0KTtcbn0gOiAkT2JqZWN0O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIHdlIGNhbid0IHVzZSBqdXN0IGBpdCA9PSBudWxsYCBzaW5jZSBvZiBgZG9jdW1lbnQuYWxsYCBzcGVjaWFsIGNhc2Vcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtSXNIVE1MRERBLWludGVybmFsLXNsb3QtYWVjXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPT09IG51bGwgfHwgaXQgPT09IHVuZGVmaW5lZDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgUmVxdWlyZU9iamVjdENvZXJjaWJsZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlcXVpcmVvYmplY3Rjb2VyY2libGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpc051bGxPclVuZGVmaW5lZChpdCkpIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEluZGV4ZWRPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShpdCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90XG52YXIgZG9jdW1lbnRBbGwgPSB0eXBlb2YgZG9jdW1lbnQgPT0gJ29iamVjdCcgJiYgZG9jdW1lbnQuYWxsO1xuXG4vLyBgSXNDYWxsYWJsZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWlzY2FsbGFibGVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL25vLXR5cGVvZi11bmRlZmluZWQgLS0gcmVxdWlyZWQgZm9yIHRlc3Rpbmdcbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIGRvY3VtZW50QWxsID09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50QWxsICE9PSB1bmRlZmluZWQgPyBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PSAnZnVuY3Rpb24nIHx8IGFyZ3VtZW50ID09PSBkb2N1bWVudEFsbDtcbn0gOiBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PSAnZnVuY3Rpb24nO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiBpc0NhbGxhYmxlKGl0KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciBhRnVuY3Rpb24gPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGlzQ2FsbGFibGUoYXJndW1lbnQpID8gYXJndW1lbnQgOiB1bmRlZmluZWQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lc3BhY2UsIG1ldGhvZCkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBhRnVuY3Rpb24oZ2xvYmFsVGhpc1tuYW1lc3BhY2VdKSA6IGdsb2JhbFRoaXNbbmFtZXNwYWNlXSAmJiBnbG9iYWxUaGlzW25hbWVzcGFjZV1bbWV0aG9kXTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVuY3VycnlUaGlzKHt9LmlzUHJvdG90eXBlT2YpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG5cbnZhciBuYXZpZ2F0b3IgPSBnbG9iYWxUaGlzLm5hdmlnYXRvcjtcbnZhciB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudDtcblxubW9kdWxlLmV4cG9ydHMgPSB1c2VyQWdlbnQgPyBTdHJpbmcodXNlckFnZW50KSA6ICcnO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Vudmlyb25tZW50LXVzZXItYWdlbnQnKTtcblxudmFyIHByb2Nlc3MgPSBnbG9iYWxUaGlzLnByb2Nlc3M7XG52YXIgRGVubyA9IGdsb2JhbFRoaXMuRGVubztcbnZhciB2ZXJzaW9ucyA9IHByb2Nlc3MgJiYgcHJvY2Vzcy52ZXJzaW9ucyB8fCBEZW5vICYmIERlbm8udmVyc2lvbjtcbnZhciB2OCA9IHZlcnNpb25zICYmIHZlcnNpb25zLnY4O1xudmFyIG1hdGNoLCB2ZXJzaW9uO1xuXG5pZiAodjgpIHtcbiAgbWF0Y2ggPSB2OC5zcGxpdCgnLicpO1xuICAvLyBpbiBvbGQgQ2hyb21lLCB2ZXJzaW9ucyBvZiBWOCBpc24ndCBWOCA9IENocm9tZSAvIDEwXG4gIC8vIGJ1dCB0aGVpciBjb3JyZWN0IHZlcnNpb25zIGFyZSBub3QgaW50ZXJlc3RpbmcgZm9yIHVzXG4gIHZlcnNpb24gPSBtYXRjaFswXSA+IDAgJiYgbWF0Y2hbMF0gPCA0ID8gMSA6ICsobWF0Y2hbMF0gKyBtYXRjaFsxXSk7XG59XG5cbi8vIEJyb3dzZXJGUyBOb2RlSlMgYHByb2Nlc3NgIHBvbHlmaWxsIGluY29ycmVjdGx5IHNldCBgLnY4YCB0byBgMC4wYFxuLy8gc28gY2hlY2sgYHVzZXJBZ2VudGAgZXZlbiBpZiBgLnY4YCBleGlzdHMsIGJ1dCAwXG5pZiAoIXZlcnNpb24gJiYgdXNlckFnZW50KSB7XG4gIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9FZGdlXFwvKFxcZCspLyk7XG4gIGlmICghbWF0Y2ggfHwgbWF0Y2hbMV0gPj0gNzQpIHtcbiAgICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvQ2hyb21lXFwvKFxcZCspLyk7XG4gICAgaWYgKG1hdGNoKSB2ZXJzaW9uID0gK21hdGNoWzFdO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmVyc2lvbjtcbiIsICIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1zeW1ib2wgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Vudmlyb25tZW50LXY4LXZlcnNpb24nKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcblxudmFyICRTdHJpbmcgPSBnbG9iYWxUaGlzLlN0cmluZztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gcmVxdWlyZWQgZm9yIHRlc3Rpbmdcbm1vZHVsZS5leHBvcnRzID0gISFPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBzeW1ib2wgPSBTeW1ib2woJ3N5bWJvbCBkZXRlY3Rpb24nKTtcbiAgLy8gQ2hyb21lIDM4IFN5bWJvbCBoYXMgaW5jb3JyZWN0IHRvU3RyaW5nIGNvbnZlcnNpb25cbiAgLy8gYGdldC1vd24tcHJvcGVydHktc3ltYm9sc2AgcG9seWZpbGwgc3ltYm9scyBjb252ZXJ0ZWQgdG8gb2JqZWN0IGFyZSBub3QgU3ltYm9sIGluc3RhbmNlc1xuICAvLyBuYjogRG8gbm90IGNhbGwgYFN0cmluZ2AgZGlyZWN0bHkgdG8gYXZvaWQgdGhpcyBiZWluZyBvcHRpbWl6ZWQgb3V0IHRvIGBzeW1ib2wrJydgIHdoaWNoIHdpbGwsXG4gIC8vIG9mIGNvdXJzZSwgZmFpbC5cbiAgcmV0dXJuICEkU3RyaW5nKHN5bWJvbCkgfHwgIShPYmplY3Qoc3ltYm9sKSBpbnN0YW5jZW9mIFN5bWJvbCkgfHxcbiAgICAvLyBDaHJvbWUgMzgtNDAgc3ltYm9scyBhcmUgbm90IGluaGVyaXRlZCBmcm9tIERPTSBjb2xsZWN0aW9ucyBwcm90b3R5cGVzIHRvIGluc3RhbmNlc1xuICAgICFTeW1ib2wuc2hhbSAmJiBWOF9WRVJTSU9OICYmIFY4X1ZFUlNJT04gPCA0MTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9TWU1CT0wgJiZcbiAgIVN5bWJvbC5zaGFtICYmXG4gIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCc7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZicpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVTRV9TWU1CT0xfQVNfVUlEID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHZhciAkU3ltYm9sID0gZ2V0QnVpbHRJbignU3ltYm9sJyk7XG4gIHJldHVybiBpc0NhbGxhYmxlKCRTeW1ib2wpICYmIGlzUHJvdG90eXBlT2YoJFN5bWJvbC5wcm90b3R5cGUsICRPYmplY3QoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICRTdHJpbmcgPSBTdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICRTdHJpbmcoYXJndW1lbnQpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiAnT2JqZWN0JztcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHRyeVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RyeS10by1zdHJpbmcnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBBc3NlcnQ6IElzQ2FsbGFibGUoYXJndW1lbnQpIGlzIHRydWVgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNDYWxsYWJsZShhcmd1bWVudCkpIHJldHVybiBhcmd1bWVudDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IodHJ5VG9TdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG4vLyBgR2V0TWV0aG9kYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZ2V0bWV0aG9kXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChWLCBQKSB7XG4gIHZhciBmdW5jID0gVltQXTtcbiAgcmV0dXJuIGlzTnVsbE9yVW5kZWZpbmVkKGZ1bmMpID8gdW5kZWZpbmVkIDogYUNhbGxhYmxlKGZ1bmMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYE9yZGluYXJ5VG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vcmRpbmFyeXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKHByZWYgPT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChpc0NhbGxhYmxlKGZuID0gaW5wdXQudmFsdWVPZikgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChwcmVmICE9PSAnc3RyaW5nJyAmJiBpc0NhbGxhYmxlKGZuID0gaW5wdXQudG9TdHJpbmcpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICB0cnkge1xuICAgIGRlZmluZVByb3BlcnR5KGdsb2JhbFRoaXMsIGtleSwgeyB2YWx1ZTogdmFsdWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZ2xvYmFsVGhpc1trZXldID0gdmFsdWU7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gbW9kdWxlLmV4cG9ydHMgPSBnbG9iYWxUaGlzW1NIQVJFRF0gfHwgZGVmaW5lR2xvYmFsUHJvcGVydHkoU0hBUkVELCB7fSk7XG5cbihzdG9yZS52ZXJzaW9ucyB8fCAoc3RvcmUudmVyc2lvbnMgPSBbXSkpLnB1c2goe1xuICB2ZXJzaW9uOiAnMy40MS4wJyxcbiAgbW9kZTogSVNfUFVSRSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE0LTIwMjUgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknLFxuICBsaWNlbnNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvYmxvYi92My40MS4wL0xJQ0VOU0UnLFxuICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcydcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlIHx8IHt9KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG4vLyBgVG9PYmplY3RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b29iamVjdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuICRPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IHVuY3VycnlUaGlzKHt9Lmhhc093blByb3BlcnR5KTtcblxuLy8gYEhhc093blByb3BlcnR5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaGFzb3ducHJvcGVydHlcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaGFzb3duIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0Lmhhc093biB8fCBmdW5jdGlvbiBoYXNPd24oaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkodG9PYmplY3QoaXQpLCBrZXkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbnZhciBpZCA9IDA7XG52YXIgcG9zdGZpeCA9IE1hdGgucmFuZG9tKCk7XG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcygxLjAudG9TdHJpbmcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJyArIChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5KSArICcpXycgKyB0b1N0cmluZygrK2lkICsgcG9zdGZpeCwgMzYpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24nKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xuXG52YXIgU3ltYm9sID0gZ2xvYmFsVGhpcy5TeW1ib2w7XG52YXIgV2VsbEtub3duU3ltYm9sc1N0b3JlID0gc2hhcmVkKCd3a3MnKTtcbnZhciBjcmVhdGVXZWxsS25vd25TeW1ib2wgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IFN5bWJvbFsnZm9yJ10gfHwgU3ltYm9sIDogU3ltYm9sICYmIFN5bWJvbC53aXRob3V0U2V0dGVyIHx8IHVpZDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICBpZiAoIWhhc093bihXZWxsS25vd25TeW1ib2xzU3RvcmUsIG5hbWUpKSB7XG4gICAgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID0gTkFUSVZFX1NZTUJPTCAmJiBoYXNPd24oU3ltYm9sLCBuYW1lKVxuICAgICAgPyBTeW1ib2xbbmFtZV1cbiAgICAgIDogY3JlYXRlV2VsbEtub3duU3ltYm9sKCdTeW1ib2wuJyArIG5hbWUpO1xuICB9IHJldHVybiBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1zeW1ib2wnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xudmFyIG9yZGluYXJ5VG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3JkaW5hcnktdG8tcHJpbWl0aXZlJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xudmFyIFRPX1BSSU1JVElWRSA9IHdlbGxLbm93blN5bWJvbCgndG9QcmltaXRpdmUnKTtcblxuLy8gYFRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIGlmICghaXNPYmplY3QoaW5wdXQpIHx8IGlzU3ltYm9sKGlucHV0KSkgcmV0dXJuIGlucHV0O1xuICB2YXIgZXhvdGljVG9QcmltID0gZ2V0TWV0aG9kKGlucHV0LCBUT19QUklNSVRJVkUpO1xuICB2YXIgcmVzdWx0O1xuICBpZiAoZXhvdGljVG9QcmltKSB7XG4gICAgaWYgKHByZWYgPT09IHVuZGVmaW5lZCkgcHJlZiA9ICdkZWZhdWx0JztcbiAgICByZXN1bHQgPSBjYWxsKGV4b3RpY1RvUHJpbSwgaW5wdXQsIHByZWYpO1xuICAgIGlmICghaXNPYmplY3QocmVzdWx0KSB8fCBpc1N5bWJvbChyZXN1bHQpKSByZXR1cm4gcmVzdWx0O1xuICAgIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xuICB9XG4gIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnbnVtYmVyJztcbiAgcmV0dXJuIG9yZGluYXJ5VG9QcmltaXRpdmUoaW5wdXQsIHByZWYpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG5cbi8vIGBUb1Byb3BlcnR5S2V5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcm9wZXJ0eWtleVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCAnc3RyaW5nJyk7XG4gIHJldHVybiBpc1N5bWJvbChrZXkpID8ga2V5IDoga2V5ICsgJyc7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciBkb2N1bWVudCA9IGdsb2JhbFRoaXMuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBFWElTVFMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBFWElTVFMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcblxuLy8gVGhhbmtzIHRvIElFOCBmb3IgaXRzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3JlYXRlRWxlbWVudCgnZGl2JyksICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfVxuICB9KS5hICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhc093bihPLCBQKSkgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcighY2FsbChwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mLCBPLCBQKSwgT1tQXSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIFY4IH4gQ2hyb21lIDM2LVxuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzMzNFxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdwcm90b3R5cGUnLCB7XG4gICAgdmFsdWU6IDQyLFxuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KS5wcm90b3R5cGUgIT09IDQyO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFN0cmluZyA9IFN0cmluZztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBUeXBlKGFyZ3VtZW50KSBpcyBPYmplY3RgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNPYmplY3QoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKCRTdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYW4gb2JqZWN0Jyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG52YXIgVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdjgtcHJvdG90eXBlLWRlZmluZS1idWcnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBFTlVNRVJBQkxFID0gJ2VudW1lcmFibGUnO1xudmFyIENPTkZJR1VSQUJMRSA9ICdjb25maWd1cmFibGUnO1xudmFyIFdSSVRBQkxFID0gJ3dyaXRhYmxlJztcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA/IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKHR5cGVvZiBPID09PSAnZnVuY3Rpb24nICYmIFAgPT09ICdwcm90b3R5cGUnICYmICd2YWx1ZScgaW4gQXR0cmlidXRlcyAmJiBXUklUQUJMRSBpbiBBdHRyaWJ1dGVzICYmICFBdHRyaWJ1dGVzW1dSSVRBQkxFXSkge1xuICAgIHZhciBjdXJyZW50ID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgICBpZiAoY3VycmVudCAmJiBjdXJyZW50W1dSSVRBQkxFXSkge1xuICAgICAgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gICAgICBBdHRyaWJ1dGVzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IENPTkZJR1VSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tDT05GSUdVUkFCTEVdIDogY3VycmVudFtDT05GSUdVUkFCTEVdLFxuICAgICAgICBlbnVtZXJhYmxlOiBFTlVNRVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0VOVU1FUkFCTEVdIDogY3VycmVudFtFTlVNRVJBQkxFXSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgICB9O1xuICAgIH1cbiAgfSByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xufSA6ICRkZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0RGVzY3JpcHRvciA9IERFU0NSSVBUT1JTICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbnZhciBFWElTVFMgPSBoYXNPd24oRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJyk7XG4vLyBhZGRpdGlvbmFsIHByb3RlY3Rpb24gZnJvbSBtaW5pZmllZCAvIG1hbmdsZWQgLyBkcm9wcGVkIGZ1bmN0aW9uIG5hbWVzXG52YXIgUFJPUEVSID0gRVhJU1RTICYmIChmdW5jdGlvbiBzb21ldGhpbmcoKSB7IC8qIGVtcHR5ICovIH0pLm5hbWUgPT09ICdzb21ldGhpbmcnO1xudmFyIENPTkZJR1VSQUJMRSA9IEVYSVNUUyAmJiAoIURFU0NSSVBUT1JTIHx8IChERVNDUklQVE9SUyAmJiBnZXREZXNjcmlwdG9yKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpLmNvbmZpZ3VyYWJsZSkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRVhJU1RTOiBFWElTVFMsXG4gIFBST1BFUjogUFJPUEVSLFxuICBDT05GSUdVUkFCTEU6IENPTkZJR1VSQUJMRVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG52YXIgZnVuY3Rpb25Ub1N0cmluZyA9IHVuY3VycnlUaGlzKEZ1bmN0aW9uLnRvU3RyaW5nKTtcblxuLy8gdGhpcyBoZWxwZXIgYnJva2VuIGluIGBjb3JlLWpzQDMuNC4xLTMuNC40YCwgc28gd2UgY2FuJ3QgdXNlIGBzaGFyZWRgIGhlbHBlclxuaWYgKCFpc0NhbGxhYmxlKHN0b3JlLmluc3BlY3RTb3VyY2UpKSB7XG4gIHN0b3JlLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb25Ub1N0cmluZyhpdCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmUuaW5zcGVjdFNvdXJjZTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWxUaGlzLldlYWtNYXA7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNDYWxsYWJsZShXZWFrTWFwKSAmJiAvbmF0aXZlIGNvZGUvLnRlc3QoU3RyaW5nKFdlYWtNYXApKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcblxudmFyIGtleXMgPSBzaGFyZWQoJ2tleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBrZXlzW2tleV0gfHwgKGtleXNba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX1dFQUtfTUFQID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlYWstbWFwLWJhc2ljLWRldGVjdGlvbicpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCA9ICdPYmplY3QgYWxyZWFkeSBpbml0aWFsaXplZCc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsVGhpcy5UeXBlRXJyb3I7XG52YXIgV2Vha01hcCA9IGdsb2JhbFRoaXMuV2Vha01hcDtcbnZhciBzZXQsIGdldCwgaGFzO1xuXG52YXIgZW5mb3JjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaGFzKGl0KSA/IGdldChpdCkgOiBzZXQoaXQsIHt9KTtcbn07XG5cbnZhciBnZXR0ZXJGb3IgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIHN0YXRlO1xuICAgIGlmICghaXNPYmplY3QoaXQpIHx8IChzdGF0ZSA9IGdldChpdCkpLnR5cGUgIT09IFRZUEUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkJyk7XG4gICAgfSByZXR1cm4gc3RhdGU7XG4gIH07XG59O1xuXG5pZiAoTkFUSVZFX1dFQUtfTUFQIHx8IHNoYXJlZC5zdGF0ZSkge1xuICB2YXIgc3RvcmUgPSBzaGFyZWQuc3RhdGUgfHwgKHNoYXJlZC5zdGF0ZSA9IG5ldyBXZWFrTWFwKCkpO1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG4gIHN0b3JlLmdldCA9IHN0b3JlLmdldDtcbiAgc3RvcmUuaGFzID0gc3RvcmUuaGFzO1xuICBzdG9yZS5zZXQgPSBzdG9yZS5zZXQ7XG4gIC8qIGVzbGludC1lbmFibGUgbm8tc2VsZi1hc3NpZ24gLS0gcHJvdG90eXBlIG1ldGhvZHMgcHJvdGVjdGlvbiAqL1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKHN0b3JlLmhhcyhpdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIHN0b3JlLnNldChpdCwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHN0b3JlLmdldChpdCkgfHwge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBzdG9yZS5oYXMoaXQpO1xuICB9O1xufSBlbHNlIHtcbiAgdmFyIFNUQVRFID0gc2hhcmVkS2V5KCdzdGF0ZScpO1xuICBoaWRkZW5LZXlzW1NUQVRFXSA9IHRydWU7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoaGFzT3duKGl0LCBTVEFURSkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShpdCwgU1RBVEUsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKSA/IGl0W1NUQVRFXSA6IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldCxcbiAgZ2V0OiBnZXQsXG4gIGhhczogaGFzLFxuICBlbmZvcmNlOiBlbmZvcmNlLFxuICBnZXR0ZXJGb3I6IGdldHRlckZvclxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLW5hbWUnKS5DT05GSUdVUkFCTEU7XG52YXIgaW5zcGVjdFNvdXJjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZScpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcblxudmFyIGVuZm9yY2VJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5lbmZvcmNlO1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldDtcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG52YXIgcmVwbGFjZSA9IHVuY3VycnlUaGlzKCcnLnJlcGxhY2UpO1xudmFyIGpvaW4gPSB1bmN1cnJ5VGhpcyhbXS5qb2luKTtcblxudmFyIENPTkZJR1VSQUJMRV9MRU5HVEggPSBERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAnbGVuZ3RoJywgeyB2YWx1ZTogOCB9KS5sZW5ndGggIT09IDg7XG59KTtcblxudmFyIFRFTVBMQVRFID0gU3RyaW5nKFN0cmluZykuc3BsaXQoJ1N0cmluZycpO1xuXG52YXIgbWFrZUJ1aWx0SW4gPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgbmFtZSwgb3B0aW9ucykge1xuICBpZiAoc3RyaW5nU2xpY2UoJFN0cmluZyhuYW1lKSwgMCwgNykgPT09ICdTeW1ib2woJykge1xuICAgIG5hbWUgPSAnWycgKyByZXBsYWNlKCRTdHJpbmcobmFtZSksIC9eU3ltYm9sXFwoKFteKV0qKVxcKS4qJC8sICckMScpICsgJ10nO1xuICB9XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZ2V0dGVyKSBuYW1lID0gJ2dldCAnICsgbmFtZTtcbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5zZXR0ZXIpIG5hbWUgPSAnc2V0ICcgKyBuYW1lO1xuICBpZiAoIWhhc093bih2YWx1ZSwgJ25hbWUnKSB8fCAoQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgJiYgdmFsdWUubmFtZSAhPT0gbmFtZSkpIHtcbiAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbmFtZScsIHsgdmFsdWU6IG5hbWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbiAgICBlbHNlIHZhbHVlLm5hbWUgPSBuYW1lO1xuICB9XG4gIGlmIChDT05GSUdVUkFCTEVfTEVOR1RIICYmIG9wdGlvbnMgJiYgaGFzT3duKG9wdGlvbnMsICdhcml0eScpICYmIHZhbHVlLmxlbmd0aCAhPT0gb3B0aW9ucy5hcml0eSkge1xuICAgIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbGVuZ3RoJywgeyB2YWx1ZTogb3B0aW9ucy5hcml0eSB9KTtcbiAgfVxuICB0cnkge1xuICAgIGlmIChvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnY29uc3RydWN0b3InKSAmJiBvcHRpb25zLmNvbnN0cnVjdG9yKSB7XG4gICAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAncHJvdG90eXBlJywgeyB3cml0YWJsZTogZmFsc2UgfSk7XG4gICAgLy8gaW4gVjggfiBDaHJvbWUgNTMsIHByb3RvdHlwZXMgb2Ygc29tZSBtZXRob2RzLCBsaWtlIGBBcnJheS5wcm90b3R5cGUudmFsdWVzYCwgYXJlIG5vbi13cml0YWJsZVxuICAgIH0gZWxzZSBpZiAodmFsdWUucHJvdG90eXBlKSB2YWx1ZS5wcm90b3R5cGUgPSB1bmRlZmluZWQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgdmFyIHN0YXRlID0gZW5mb3JjZUludGVybmFsU3RhdGUodmFsdWUpO1xuICBpZiAoIWhhc093bihzdGF0ZSwgJ3NvdXJjZScpKSB7XG4gICAgc3RhdGUuc291cmNlID0gam9pbihURU1QTEFURSwgdHlwZW9mIG5hbWUgPT0gJ3N0cmluZycgPyBuYW1lIDogJycpO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG5cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV4dGVuZC1uYXRpdmUgLS0gcmVxdWlyZWRcbkZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IG1ha2VCdWlsdEluKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gaXNDYWxsYWJsZSh0aGlzKSAmJiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnNvdXJjZSB8fCBpbnNwZWN0U291cmNlKHRoaXMpO1xufSwgJ3RvU3RyaW5nJyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgbWFrZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWFrZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgdmFyIHNpbXBsZSA9IG9wdGlvbnMuZW51bWVyYWJsZTtcbiAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWUgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubmFtZSA6IGtleTtcbiAgaWYgKGlzQ2FsbGFibGUodmFsdWUpKSBtYWtlQnVpbHRJbih2YWx1ZSwgbmFtZSwgb3B0aW9ucyk7XG4gIGlmIChvcHRpb25zLmdsb2JhbCkge1xuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lR2xvYmFsUHJvcGVydHkoa2V5LCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghb3B0aW9ucy51bnNhZmUpIGRlbGV0ZSBPW2tleV07XG4gICAgICBlbHNlIGlmIChPW2tleV0pIHNpbXBsZSA9IHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiAhb3B0aW9ucy5ub25Db25maWd1cmFibGUsXG4gICAgICB3cml0YWJsZTogIW9wdGlvbnMubm9uV3JpdGFibGVcbiAgICB9KTtcbiAgfSByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4vLyBgTWF0aC50cnVuY2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hdGgudHJ1bmNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1tYXRoLXRydW5jIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gTWF0aC50cnVuYyB8fCBmdW5jdGlvbiB0cnVuYyh4KSB7XG4gIHZhciBuID0gK3g7XG4gIHJldHVybiAobiA+IDAgPyBmbG9vciA6IGNlaWwpKG4pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdHJ1bmMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWF0aC10cnVuYycpO1xuXG4vLyBgVG9JbnRlZ2VyT3JJbmZpbml0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvaW50ZWdlcm9yaW5maW5pdHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBudW1iZXIgPSArYXJndW1lbnQ7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gIHJldHVybiBudW1iZXIgIT09IG51bWJlciB8fCBudW1iZXIgPT09IDAgPyAwIDogdHJ1bmMobnVtYmVyKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIEhlbHBlciBmb3IgYSBwb3B1bGFyIHJlcGVhdGluZyBjYXNlIG9mIHRoZSBzcGVjOlxuLy8gTGV0IGludGVnZXIgYmUgPyBUb0ludGVnZXIoaW5kZXgpLlxuLy8gSWYgaW50ZWdlciA8IDAsIGxldCByZXN1bHQgYmUgbWF4KChsZW5ndGggKyBpbnRlZ2VyKSwgMCk7IGVsc2UgbGV0IHJlc3VsdCBiZSBtaW4oaW50ZWdlciwgbGVuZ3RoKS5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgdmFyIGludGVnZXIgPSB0b0ludGVnZXJPckluZmluaXR5KGluZGV4KTtcbiAgcmV0dXJuIGludGVnZXIgPCAwID8gbWF4KGludGVnZXIgKyBsZW5ndGgsIDApIDogbWluKGludGVnZXIsIGxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBgVG9MZW5ndGhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2xlbmd0aFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGxlbiA9IHRvSW50ZWdlck9ySW5maW5pdHkoYXJndW1lbnQpO1xuICByZXR1cm4gbGVuID4gMCA/IG1pbihsZW4sIDB4MUZGRkZGRkZGRkZGRkYpIDogMDsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG5cbi8vIGBMZW5ndGhPZkFycmF5TGlrZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWxlbmd0aG9mYXJyYXlsaWtlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHRvTGVuZ3RoKG9iai5sZW5ndGgpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGluZGV4T2YsIGluY2x1ZGVzIH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gICAgaWYgKGxlbmd0aCA9PT0gMCkgcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT09IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgICBpZiAodmFsdWUgIT09IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICBpZiAoKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pICYmIE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuICBpbmNsdWRlczogY3JlYXRlTWV0aG9kKHRydWUpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4gIGluZGV4T2Y6IGNyZWF0ZU1ldGhvZChmYWxzZSlcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgaW5kZXhPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluZGV4T2Y7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSAhaGFzT3duKGhpZGRlbktleXMsIGtleSkgJiYgaGFzT3duKE8sIGtleSkgJiYgcHVzaChyZXN1bHQsIGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXNPd24oTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+aW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcHVzaChyZXN1bHQsIGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gSUU4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IFtcbiAgJ2NvbnN0cnVjdG9yJyxcbiAgJ2hhc093blByb3BlcnR5JyxcbiAgJ2lzUHJvdG90eXBlT2YnLFxuICAncHJvcGVydHlJc0VudW1lcmFibGUnLFxuICAndG9Mb2NhbGVTdHJpbmcnLFxuICAndG9TdHJpbmcnLFxuICAndmFsdWVPZidcbl07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxudmFyIGhpZGRlbktleXMgPSBlbnVtQnVnS2V5cy5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5bmFtZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHluYW1lcyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcblxudmFyIGNvbmNhdCA9IHVuY3VycnlUaGlzKFtdLmNvbmNhdCk7XG5cbi8vIGFsbCBvYmplY3Qga2V5cywgaW5jbHVkZXMgbm9uLWVudW1lcmFibGUgYW5kIHN5bWJvbHNcbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignUmVmbGVjdCcsICdvd25LZXlzJykgfHwgZnVuY3Rpb24gb3duS2V5cyhpdCkge1xuICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUuZihhbk9iamVjdChpdCkpO1xuICB2YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlLmY7XG4gIHJldHVybiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBjb25jYXQoa2V5cywgZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSkgOiBrZXlzO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBvd25LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL293bi1rZXlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlLCBleGNlcHRpb25zKSB7XG4gIHZhciBrZXlzID0gb3duS2V5cyhzb3VyY2UpO1xuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mO1xuICB2YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmY7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGlmICghaGFzT3duKHRhcmdldCwga2V5KSAmJiAhKGV4Y2VwdGlvbnMgJiYgaGFzT3duKGV4Y2VwdGlvbnMsIGtleSkpKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgfVxuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIHJlcGxhY2VtZW50ID0gLyN8XFwucHJvdG90eXBlXFwuLztcblxudmFyIGlzRm9yY2VkID0gZnVuY3Rpb24gKGZlYXR1cmUsIGRldGVjdGlvbikge1xuICB2YXIgdmFsdWUgPSBkYXRhW25vcm1hbGl6ZShmZWF0dXJlKV07XG4gIHJldHVybiB2YWx1ZSA9PT0gUE9MWUZJTEwgPyB0cnVlXG4gICAgOiB2YWx1ZSA9PT0gTkFUSVZFID8gZmFsc2VcbiAgICA6IGlzQ2FsbGFibGUoZGV0ZWN0aW9uKSA/IGZhaWxzKGRldGVjdGlvbilcbiAgICA6ICEhZGV0ZWN0aW9uO1xufTtcblxudmFyIG5vcm1hbGl6ZSA9IGlzRm9yY2VkLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UocmVwbGFjZW1lbnQsICcuJykudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBkYXRhID0gaXNGb3JjZWQuZGF0YSA9IHt9O1xudmFyIE5BVElWRSA9IGlzRm9yY2VkLk5BVElWRSA9ICdOJztcbnZhciBQT0xZRklMTCA9IGlzRm9yY2VkLlBPTFlGSUxMID0gJ1AnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRm9yY2VkO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcbnZhciBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcycpO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xuXG4vKlxuICBvcHRpb25zLnRhcmdldCAgICAgICAgIC0gbmFtZSBvZiB0aGUgdGFyZ2V0IG9iamVjdFxuICBvcHRpb25zLmdsb2JhbCAgICAgICAgIC0gdGFyZ2V0IGlzIHRoZSBnbG9iYWwgb2JqZWN0XG4gIG9wdGlvbnMuc3RhdCAgICAgICAgICAgLSBleHBvcnQgYXMgc3RhdGljIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucHJvdG8gICAgICAgICAgLSBleHBvcnQgYXMgcHJvdG90eXBlIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucmVhbCAgICAgICAgICAgLSByZWFsIHByb3RvdHlwZSBtZXRob2QgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLmZvcmNlZCAgICAgICAgIC0gZXhwb3J0IGV2ZW4gaWYgdGhlIG5hdGl2ZSBmZWF0dXJlIGlzIGF2YWlsYWJsZVxuICBvcHRpb25zLmJpbmQgICAgICAgICAgIC0gYmluZCBtZXRob2RzIHRvIHRoZSB0YXJnZXQsIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy53cmFwICAgICAgICAgICAtIHdyYXAgY29uc3RydWN0b3JzIHRvIHByZXZlbnRpbmcgZ2xvYmFsIHBvbGx1dGlvbiwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLnVuc2FmZSAgICAgICAgIC0gdXNlIHRoZSBzaW1wbGUgYXNzaWdubWVudCBvZiBwcm9wZXJ0eSBpbnN0ZWFkIG9mIGRlbGV0ZSArIGRlZmluZVByb3BlcnR5XG4gIG9wdGlvbnMuc2hhbSAgICAgICAgICAgLSBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gIG9wdGlvbnMuZW51bWVyYWJsZSAgICAgLSBleHBvcnQgYXMgZW51bWVyYWJsZSBwcm9wZXJ0eVxuICBvcHRpb25zLmRvbnRDYWxsR2V0U2V0IC0gcHJldmVudCBjYWxsaW5nIGEgZ2V0dGVyIG9uIHRhcmdldFxuICBvcHRpb25zLm5hbWUgICAgICAgICAgIC0gdGhlIC5uYW1lIG9mIHRoZSBmdW5jdGlvbiBpZiBpdCBkb2VzIG5vdCBtYXRjaCB0aGUga2V5XG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucywgc291cmNlKSB7XG4gIHZhciBUQVJHRVQgPSBvcHRpb25zLnRhcmdldDtcbiAgdmFyIEdMT0JBTCA9IG9wdGlvbnMuZ2xvYmFsO1xuICB2YXIgU1RBVElDID0gb3B0aW9ucy5zdGF0O1xuICB2YXIgRk9SQ0VELCB0YXJnZXQsIGtleSwgdGFyZ2V0UHJvcGVydHksIHNvdXJjZVByb3BlcnR5LCBkZXNjcmlwdG9yO1xuICBpZiAoR0xPQkFMKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsVGhpcztcbiAgfSBlbHNlIGlmIChTVEFUSUMpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxUaGlzW1RBUkdFVF0gfHwgZGVmaW5lR2xvYmFsUHJvcGVydHkoVEFSR0VULCB7fSk7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsVGhpc1tUQVJHRVRdICYmIGdsb2JhbFRoaXNbVEFSR0VUXS5wcm90b3R5cGU7XG4gIH1cbiAgaWYgKHRhcmdldCkgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgc291cmNlUHJvcGVydHkgPSBzb3VyY2Vba2V5XTtcbiAgICBpZiAob3B0aW9ucy5kb250Q2FsbEdldFNldCkge1xuICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gICAgICB0YXJnZXRQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci52YWx1ZTtcbiAgICB9IGVsc2UgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRba2V5XTtcbiAgICBGT1JDRUQgPSBpc0ZvcmNlZChHTE9CQUwgPyBrZXkgOiBUQVJHRVQgKyAoU1RBVElDID8gJy4nIDogJyMnKSArIGtleSwgb3B0aW9ucy5mb3JjZWQpO1xuICAgIC8vIGNvbnRhaW5lZCBpbiB0YXJnZXRcbiAgICBpZiAoIUZPUkNFRCAmJiB0YXJnZXRQcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZW9mIHNvdXJjZVByb3BlcnR5ID09IHR5cGVvZiB0YXJnZXRQcm9wZXJ0eSkgY29udGludWU7XG4gICAgICBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKHNvdXJjZVByb3BlcnR5LCB0YXJnZXRQcm9wZXJ0eSk7XG4gICAgfVxuICAgIC8vIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgICBpZiAob3B0aW9ucy5zaGFtIHx8ICh0YXJnZXRQcm9wZXJ0eSAmJiB0YXJnZXRQcm9wZXJ0eS5zaGFtKSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHNvdXJjZVByb3BlcnR5LCAnc2hhbScsIHRydWUpO1xuICAgIH1cbiAgICBkZWZpbmVCdWlsdEluKHRhcmdldCwga2V5LCBzb3VyY2VQcm9wZXJ0eSwgb3B0aW9ucyk7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZicpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFByb3RvdHlwZSkge1xuICBpZiAoaXNQcm90b3R5cGVPZihQcm90b3R5cGUsIGl0KSkgcmV0dXJuIGl0O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcignSW5jb3JyZWN0IGludm9jYXRpb24nKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRigpIHsgLyogZW1wdHkgKi8gfVxuICBGLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IG51bGw7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0cHJvdG90eXBlb2YgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZihuZXcgRigpKSAhPT0gRi5wcm90b3R5cGU7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBDT1JSRUNUX1BST1RPVFlQRV9HRVRURVIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29ycmVjdC1wcm90b3R5cGUtZ2V0dGVyJyk7XG5cbnZhciBJRV9QUk9UTyA9IHNoYXJlZEtleSgnSUVfUFJPVE8nKTtcbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xudmFyIE9iamVjdFByb3RvdHlwZSA9ICRPYmplY3QucHJvdG90eXBlO1xuXG4vLyBgT2JqZWN0LmdldFByb3RvdHlwZU9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldHByb3RvdHlwZW9mXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldHByb3RvdHlwZW9mIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gQ09SUkVDVF9QUk9UT1RZUEVfR0VUVEVSID8gJE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIChPKSB7XG4gIHZhciBvYmplY3QgPSB0b09iamVjdChPKTtcbiAgaWYgKGhhc093bihvYmplY3QsIElFX1BST1RPKSkgcmV0dXJuIG9iamVjdFtJRV9QUk9UT107XG4gIHZhciBjb25zdHJ1Y3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcjtcbiAgaWYgKGlzQ2FsbGFibGUoY29uc3RydWN0b3IpICYmIG9iamVjdCBpbnN0YW5jZW9mIGNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gb2JqZWN0IGluc3RhbmNlb2YgJE9iamVjdCA/IE9iamVjdFByb3RvdHlwZSA6IG51bGw7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBtYWtlQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9tYWtlLWJ1aWx0LWluJyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpIHtcbiAgaWYgKGRlc2NyaXB0b3IuZ2V0KSBtYWtlQnVpbHRJbihkZXNjcmlwdG9yLmdldCwgbmFtZSwgeyBnZXR0ZXI6IHRydWUgfSk7XG4gIGlmIChkZXNjcmlwdG9yLnNldCkgbWFrZUJ1aWx0SW4oZGVzY3JpcHRvci5zZXQsIG5hbWUsIHsgc2V0dGVyOiB0cnVlIH0pO1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkuZih0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBrZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtrZXldID0gdmFsdWU7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG5cbi8vIGBPYmplY3Qua2V5c2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5rZXlzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWtleXMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Y4LXByb3RvdHlwZS1kZWZpbmUtYnVnJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIG9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMnKTtcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnRpZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydGllcyAtLSBzYWZlXG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyAmJiAhVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIHByb3BzID0gdG9JbmRleGVkT2JqZWN0KFByb3BlcnRpZXMpO1xuICB2YXIga2V5cyA9IG9iamVjdEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKE8sIGtleSA9IGtleXNbaW5kZXgrK10sIHByb3BzW2tleV0pO1xuICByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignZG9jdW1lbnQnLCAnZG9jdW1lbnRFbGVtZW50Jyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZ2xvYmFsIEFjdGl2ZVhPYmplY3QgLS0gb2xkIElFLCBXU0ggKi9cbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBkZWZpbmVQcm9wZXJ0aWVzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydGllcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG52YXIgaHRtbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9odG1sJyk7XG52YXIgZG9jdW1lbnRDcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcblxudmFyIEdUID0gJz4nO1xudmFyIExUID0gJzwnO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIFNDUklQVCA9ICdzY3JpcHQnO1xudmFyIElFX1BST1RPID0gc2hhcmVkS2V5KCdJRV9QUk9UTycpO1xuXG52YXIgRW1wdHlDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcblxudmFyIHNjcmlwdFRhZyA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gIHJldHVybiBMVCArIFNDUklQVCArIEdUICsgY29udGVudCArIExUICsgJy8nICsgU0NSSVBUICsgR1Q7XG59O1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgQWN0aXZlWCBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVggPSBmdW5jdGlvbiAoYWN0aXZlWERvY3VtZW50KSB7XG4gIGFjdGl2ZVhEb2N1bWVudC53cml0ZShzY3JpcHRUYWcoJycpKTtcbiAgYWN0aXZlWERvY3VtZW50LmNsb3NlKCk7XG4gIHZhciB0ZW1wID0gYWN0aXZlWERvY3VtZW50LnBhcmVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWFzc2lnbm1lbnQgLS0gYXZvaWQgbWVtb3J5IGxlYWtcbiAgYWN0aXZlWERvY3VtZW50ID0gbnVsbDtcbiAgcmV0dXJuIHRlbXA7XG59O1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgTnVsbFByb3RvT2JqZWN0VmlhSUZyYW1lID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gZG9jdW1lbnRDcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgdmFyIEpTID0gJ2phdmEnICsgU0NSSVBUICsgJzonO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBodG1sLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy80NzVcbiAgaWZyYW1lLnNyYyA9IFN0cmluZyhKUyk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUoc2NyaXB0VGFnKCdkb2N1bWVudC5GPU9iamVjdCcpKTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgcmV0dXJuIGlmcmFtZURvY3VtZW50LkY7XG59O1xuXG4vLyBDaGVjayBmb3IgZG9jdW1lbnQuZG9tYWluIGFuZCBhY3RpdmUgeCBzdXBwb3J0XG4vLyBObyBuZWVkIHRvIHVzZSBhY3RpdmUgeCBhcHByb2FjaCB3aGVuIGRvY3VtZW50LmRvbWFpbiBpcyBub3Qgc2V0XG4vLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltL2lzc3Vlcy8xNTBcbi8vIHZhcmlhdGlvbiBvZiBodHRwczovL2dpdGh1Yi5jb20va2l0Y2FtYnJpZGdlL2VzNS1zaGltL2NvbW1pdC80ZjczOGFjMDY2MzQ2XG4vLyBhdm9pZCBJRSBHQyBidWdcbnZhciBhY3RpdmVYRG9jdW1lbnQ7XG52YXIgTnVsbFByb3RvT2JqZWN0ID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIGFjdGl2ZVhEb2N1bWVudCA9IG5ldyBBY3RpdmVYT2JqZWN0KCdodG1sZmlsZScpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBpZ25vcmUgKi8gfVxuICBOdWxsUHJvdG9PYmplY3QgPSB0eXBlb2YgZG9jdW1lbnQgIT0gJ3VuZGVmaW5lZCdcbiAgICA/IGRvY3VtZW50LmRvbWFpbiAmJiBhY3RpdmVYRG9jdW1lbnRcbiAgICAgID8gTnVsbFByb3RvT2JqZWN0VmlhQWN0aXZlWChhY3RpdmVYRG9jdW1lbnQpIC8vIG9sZCBJRVxuICAgICAgOiBOdWxsUHJvdG9PYmplY3RWaWFJRnJhbWUoKVxuICAgIDogTnVsbFByb3RvT2JqZWN0VmlhQWN0aXZlWChhY3RpdmVYRG9jdW1lbnQpOyAvLyBXU0hcbiAgdmFyIGxlbmd0aCA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSBkZWxldGUgTnVsbFByb3RvT2JqZWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbbGVuZ3RoXV07XG4gIHJldHVybiBOdWxsUHJvdG9PYmplY3QoKTtcbn07XG5cbmhpZGRlbktleXNbSUVfUFJPVE9dID0gdHJ1ZTtcblxuLy8gYE9iamVjdC5jcmVhdGVgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuY3JlYXRlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWNyZWF0ZSAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eUNvbnN0cnVjdG9yW1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHlDb25zdHJ1Y3RvcigpO1xuICAgIEVtcHR5Q29uc3RydWN0b3JbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gTnVsbFByb3RvT2JqZWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkZWZpbmVQcm9wZXJ0aWVzTW9kdWxlLmYocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YnKTtcbnZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbicpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1lfU0FGQVJJX0lURVJBVE9SUyA9IGZhbHNlO1xuXG4vLyBgJUl0ZXJhdG9yUHJvdG90eXBlJWAgb2JqZWN0XG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSVpdGVyYXRvcnByb3RvdHlwZSUtb2JqZWN0XG52YXIgSXRlcmF0b3JQcm90b3R5cGUsIFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSwgYXJyYXlJdGVyYXRvcjtcblxuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWtleXMgLS0gc2FmZSAqL1xuaWYgKFtdLmtleXMpIHtcbiAgYXJyYXlJdGVyYXRvciA9IFtdLmtleXMoKTtcbiAgLy8gU2FmYXJpIDggaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gIGlmICghKCduZXh0JyBpbiBhcnJheUl0ZXJhdG9yKSkgQlVHR1lfU0FGQVJJX0lURVJBVE9SUyA9IHRydWU7XG4gIGVsc2Uge1xuICAgIFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKGdldFByb3RvdHlwZU9mKGFycmF5SXRlcmF0b3IpKTtcbiAgICBpZiAoUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlKSBJdGVyYXRvclByb3RvdHlwZSA9IFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxufVxuXG52YXIgTkVXX0lURVJBVE9SX1BST1RPVFlQRSA9ICFpc09iamVjdChJdGVyYXRvclByb3RvdHlwZSkgfHwgZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgdGVzdCA9IHt9O1xuICAvLyBGRjQ0LSBsZWdhY3kgaXRlcmF0b3JzIGNhc2VcbiAgcmV0dXJuIEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXS5jYWxsKHRlc3QpICE9PSB0ZXN0O1xufSk7XG5cbmlmIChORVdfSVRFUkFUT1JfUFJPVE9UWVBFKSBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuZWxzZSBpZiAoSVNfUFVSRSkgSXRlcmF0b3JQcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuXG4vLyBgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtJWl0ZXJhdG9ycHJvdG90eXBlJS1AQGl0ZXJhdG9yXG5pZiAoIWlzQ2FsbGFibGUoSXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdKSkge1xuICBkZWZpbmVCdWlsdEluKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEl0ZXJhdG9yUHJvdG90eXBlOiBJdGVyYXRvclByb3RvdHlwZSxcbiAgQlVHR1lfU0FGQVJJX0lURVJBVE9SUzogQlVHR1lfU0FGQVJJX0lURVJBVE9SU1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1pbnN0YW5jZScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZicpO1xudmFyIGRlZmluZUJ1aWx0SW5BY2Nlc3NvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4tYWNjZXNzb3InKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzLWNvcmUnKS5JdGVyYXRvclByb3RvdHlwZTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xuXG52YXIgQ09OU1RSVUNUT1IgPSAnY29uc3RydWN0b3InO1xudmFyIElURVJBVE9SID0gJ0l0ZXJhdG9yJztcbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBOYXRpdmVJdGVyYXRvciA9IGdsb2JhbFRoaXNbSVRFUkFUT1JdO1xuXG4vLyBGRjU2LSBoYXZlIG5vbi1zdGFuZGFyZCBnbG9iYWwgaGVscGVyIGBJdGVyYXRvcmBcbnZhciBGT1JDRUQgPSBJU19QVVJFXG4gIHx8ICFpc0NhbGxhYmxlKE5hdGl2ZUl0ZXJhdG9yKVxuICB8fCBOYXRpdmVJdGVyYXRvci5wcm90b3R5cGUgIT09IEl0ZXJhdG9yUHJvdG90eXBlXG4gIC8vIEZGNDQtIG5vbi1zdGFuZGFyZCBgSXRlcmF0b3JgIHBhc3NlcyBwcmV2aW91cyB0ZXN0c1xuICB8fCAhZmFpbHMoZnVuY3Rpb24gKCkgeyBOYXRpdmVJdGVyYXRvcih7fSk7IH0pO1xuXG52YXIgSXRlcmF0b3JDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uIEl0ZXJhdG9yKCkge1xuICBhbkluc3RhbmNlKHRoaXMsIEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgaWYgKGdldFByb3RvdHlwZU9mKHRoaXMpID09PSBJdGVyYXRvclByb3RvdHlwZSkgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Fic3RyYWN0IGNsYXNzIEl0ZXJhdG9yIG5vdCBkaXJlY3RseSBjb25zdHJ1Y3RhYmxlJyk7XG59O1xuXG52YXIgZGVmaW5lSXRlcmF0b3JQcm90b3R5cGVBY2Nlc3NvciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIGlmIChERVNDUklQVE9SUykge1xuICAgIGRlZmluZUJ1aWx0SW5BY2Nlc3NvcihJdGVyYXRvclByb3RvdHlwZSwga2V5LCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gKHJlcGxhY2VtZW50KSB7XG4gICAgICAgIGFuT2JqZWN0KHRoaXMpO1xuICAgICAgICBpZiAodGhpcyA9PT0gSXRlcmF0b3JQcm90b3R5cGUpIHRocm93IG5ldyAkVHlwZUVycm9yKFwiWW91IGNhbid0IHJlZGVmaW5lIHRoaXMgcHJvcGVydHlcIik7XG4gICAgICAgIGlmIChoYXNPd24odGhpcywga2V5KSkgdGhpc1trZXldID0gcmVwbGFjZW1lbnQ7XG4gICAgICAgIGVsc2UgY3JlYXRlUHJvcGVydHkodGhpcywga2V5LCByZXBsYWNlbWVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSBJdGVyYXRvclByb3RvdHlwZVtrZXldID0gdmFsdWU7XG59O1xuXG5pZiAoIWhhc093bihJdGVyYXRvclByb3RvdHlwZSwgVE9fU1RSSU5HX1RBRykpIGRlZmluZUl0ZXJhdG9yUHJvdG90eXBlQWNjZXNzb3IoVE9fU1RSSU5HX1RBRywgSVRFUkFUT1IpO1xuXG5pZiAoRk9SQ0VEIHx8ICFoYXNPd24oSXRlcmF0b3JQcm90b3R5cGUsIENPTlNUUlVDVE9SKSB8fCBJdGVyYXRvclByb3RvdHlwZVtDT05TVFJVQ1RPUl0gPT09IE9iamVjdCkge1xuICBkZWZpbmVJdGVyYXRvclByb3RvdHlwZUFjY2Vzc29yKENPTlNUUlVDVE9SLCBJdGVyYXRvckNvbnN0cnVjdG9yKTtcbn1cblxuSXRlcmF0b3JDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBJdGVyYXRvclByb3RvdHlwZTtcblxuLy8gYEl0ZXJhdG9yYCBjb25zdHJ1Y3RvclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pdGVyYXRvclxuJCh7IGdsb2JhbDogdHJ1ZSwgY29uc3RydWN0b3I6IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgSXRlcmF0b3I6IEl0ZXJhdG9yQ29uc3RydWN0b3Jcbn0pO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGBHZXRJdGVyYXRvckRpcmVjdChvYmopYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9wcm9wb3NhbC1pdGVyYXRvci1oZWxwZXJzLyNzZWMtZ2V0aXRlcmF0b3JkaXJlY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4ge1xuICAgIGl0ZXJhdG9yOiBvYmosXG4gICAgbmV4dDogb2JqLm5leHQsXG4gICAgZG9uZTogZmFsc2VcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc3JjLCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIGRlZmluZUJ1aWx0SW4odGFyZ2V0LCBrZXksIHNyY1trZXldLCBvcHRpb25zKTtcbiAgcmV0dXJuIHRhcmdldDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gYENyZWF0ZUl0ZXJSZXN1bHRPYmplY3RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1jcmVhdGVpdGVycmVzdWx0b2JqZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgZG9uZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6IGRvbmUgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBraW5kLCB2YWx1ZSkge1xuICB2YXIgaW5uZXJSZXN1bHQsIGlubmVyRXJyb3I7XG4gIGFuT2JqZWN0KGl0ZXJhdG9yKTtcbiAgdHJ5IHtcbiAgICBpbm5lclJlc3VsdCA9IGdldE1ldGhvZChpdGVyYXRvciwgJ3JldHVybicpO1xuICAgIGlmICghaW5uZXJSZXN1bHQpIHtcbiAgICAgIGlmIChraW5kID09PSAndGhyb3cnKSB0aHJvdyB2YWx1ZTtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgaW5uZXJSZXN1bHQgPSBjYWxsKGlubmVyUmVzdWx0LCBpdGVyYXRvcik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaW5uZXJFcnJvciA9IHRydWU7XG4gICAgaW5uZXJSZXN1bHQgPSBlcnJvcjtcbiAgfVxuICBpZiAoa2luZCA9PT0gJ3Rocm93JykgdGhyb3cgdmFsdWU7XG4gIGlmIChpbm5lckVycm9yKSB0aHJvdyBpbm5lclJlc3VsdDtcbiAgYW5PYmplY3QoaW5uZXJSZXN1bHQpO1xuICByZXR1cm4gdmFsdWU7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZScpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBkZWZpbmVCdWlsdElucyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW5zJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzLWNvcmUnKS5JdGVyYXRvclByb3RvdHlwZTtcbnZhciBjcmVhdGVJdGVyUmVzdWx0T2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1pdGVyLXJlc3VsdC1vYmplY3QnKTtcbnZhciBpdGVyYXRvckNsb3NlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlJyk7XG5cbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xudmFyIElURVJBVE9SX0hFTFBFUiA9ICdJdGVyYXRvckhlbHBlcic7XG52YXIgV1JBUF9GT1JfVkFMSURfSVRFUkFUT1IgPSAnV3JhcEZvclZhbGlkSXRlcmF0b3InO1xudmFyIHNldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLnNldDtcblxudmFyIGNyZWF0ZUl0ZXJhdG9yUHJveHlQcm90b3R5cGUgPSBmdW5jdGlvbiAoSVNfSVRFUkFUT1IpIHtcbiAgdmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldHRlckZvcihJU19JVEVSQVRPUiA/IFdSQVBfRk9SX1ZBTElEX0lURVJBVE9SIDogSVRFUkFUT1JfSEVMUEVSKTtcblxuICByZXR1cm4gZGVmaW5lQnVpbHRJbnMoY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKSwge1xuICAgIG5leHQ6IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpO1xuICAgICAgLy8gZm9yIHNpbXBsaWZpY2F0aW9uOlxuICAgICAgLy8gICBmb3IgYCVXcmFwRm9yVmFsaWRJdGVyYXRvclByb3RvdHlwZSUubmV4dGAgb3Igd2l0aCBgc3RhdGUucmV0dXJuSGFuZGxlclJlc3VsdGAgb3VyIGBuZXh0SGFuZGxlcmAgcmV0dXJucyBgSXRlclJlc3VsdE9iamVjdGBcbiAgICAgIC8vICAgZm9yIGAlSXRlcmF0b3JIZWxwZXJQcm90b3R5cGUlLm5leHRgIC0ganVzdCBhIHZhbHVlXG4gICAgICBpZiAoSVNfSVRFUkFUT1IpIHJldHVybiBzdGF0ZS5uZXh0SGFuZGxlcigpO1xuICAgICAgaWYgKHN0YXRlLmRvbmUpIHJldHVybiBjcmVhdGVJdGVyUmVzdWx0T2JqZWN0KHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gc3RhdGUubmV4dEhhbmRsZXIoKTtcbiAgICAgICAgcmV0dXJuIHN0YXRlLnJldHVybkhhbmRsZXJSZXN1bHQgPyByZXN1bHQgOiBjcmVhdGVJdGVyUmVzdWx0T2JqZWN0KHJlc3VsdCwgc3RhdGUuZG9uZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBzdGF0ZS5kb25lID0gdHJ1ZTtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgfSxcbiAgICAncmV0dXJuJzogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKTtcbiAgICAgIHZhciBpdGVyYXRvciA9IHN0YXRlLml0ZXJhdG9yO1xuICAgICAgc3RhdGUuZG9uZSA9IHRydWU7XG4gICAgICBpZiAoSVNfSVRFUkFUT1IpIHtcbiAgICAgICAgdmFyIHJldHVybk1ldGhvZCA9IGdldE1ldGhvZChpdGVyYXRvciwgJ3JldHVybicpO1xuICAgICAgICByZXR1cm4gcmV0dXJuTWV0aG9kID8gY2FsbChyZXR1cm5NZXRob2QsIGl0ZXJhdG9yKSA6IGNyZWF0ZUl0ZXJSZXN1bHRPYmplY3QodW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGlmIChzdGF0ZS5pbm5lcikgdHJ5IHtcbiAgICAgICAgaXRlcmF0b3JDbG9zZShzdGF0ZS5pbm5lci5pdGVyYXRvciwgJ25vcm1hbCcpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsICd0aHJvdycsIGVycm9yKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVyYXRvcikgaXRlcmF0b3JDbG9zZShpdGVyYXRvciwgJ25vcm1hbCcpO1xuICAgICAgcmV0dXJuIGNyZWF0ZUl0ZXJSZXN1bHRPYmplY3QodW5kZWZpbmVkLCB0cnVlKTtcbiAgICB9XG4gIH0pO1xufTtcblxudmFyIFdyYXBGb3JWYWxpZEl0ZXJhdG9yUHJvdG90eXBlID0gY3JlYXRlSXRlcmF0b3JQcm94eVByb3RvdHlwZSh0cnVlKTtcbnZhciBJdGVyYXRvckhlbHBlclByb3RvdHlwZSA9IGNyZWF0ZUl0ZXJhdG9yUHJveHlQcm90b3R5cGUoZmFsc2UpO1xuXG5jcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoSXRlcmF0b3JIZWxwZXJQcm90b3R5cGUsIFRPX1NUUklOR19UQUcsICdJdGVyYXRvciBIZWxwZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmV4dEhhbmRsZXIsIElTX0lURVJBVE9SLCBSRVRVUk5fSEFORExFUl9SRVNVTFQpIHtcbiAgdmFyIEl0ZXJhdG9yUHJveHkgPSBmdW5jdGlvbiBJdGVyYXRvcihyZWNvcmQsIHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlKSB7XG4gICAgICBzdGF0ZS5pdGVyYXRvciA9IHJlY29yZC5pdGVyYXRvcjtcbiAgICAgIHN0YXRlLm5leHQgPSByZWNvcmQubmV4dDtcbiAgICB9IGVsc2Ugc3RhdGUgPSByZWNvcmQ7XG4gICAgc3RhdGUudHlwZSA9IElTX0lURVJBVE9SID8gV1JBUF9GT1JfVkFMSURfSVRFUkFUT1IgOiBJVEVSQVRPUl9IRUxQRVI7XG4gICAgc3RhdGUucmV0dXJuSGFuZGxlclJlc3VsdCA9ICEhUkVUVVJOX0hBTkRMRVJfUkVTVUxUO1xuICAgIHN0YXRlLm5leHRIYW5kbGVyID0gbmV4dEhhbmRsZXI7XG4gICAgc3RhdGUuY291bnRlciA9IDA7XG4gICAgc3RhdGUuZG9uZSA9IGZhbHNlO1xuICAgIHNldEludGVybmFsU3RhdGUodGhpcywgc3RhdGUpO1xuICB9O1xuXG4gIEl0ZXJhdG9yUHJveHkucHJvdG90eXBlID0gSVNfSVRFUkFUT1IgPyBXcmFwRm9yVmFsaWRJdGVyYXRvclByb3RvdHlwZSA6IEl0ZXJhdG9ySGVscGVyUHJvdG90eXBlO1xuXG4gIHJldHVybiBJdGVyYXRvclByb3h5O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgaXRlcmF0b3JDbG9zZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1jbG9zZScpO1xuXG4vLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBFTlRSSUVTKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEVOVFJJRVMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCAndGhyb3cnLCBlcnJvcik7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBnZXRJdGVyYXRvckRpcmVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItZGlyZWN0Jyk7XG52YXIgY3JlYXRlSXRlcmF0b3JQcm94eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1jcmVhdGUtcHJveHknKTtcbnZhciBjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NhbGwtd2l0aC1zYWZlLWl0ZXJhdGlvbi1jbG9zaW5nJyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG5cbnZhciBJdGVyYXRvclByb3h5ID0gY3JlYXRlSXRlcmF0b3JQcm94eShmdW5jdGlvbiAoKSB7XG4gIHZhciBpdGVyYXRvciA9IHRoaXMuaXRlcmF0b3I7XG4gIHZhciBwcmVkaWNhdGUgPSB0aGlzLnByZWRpY2F0ZTtcbiAgdmFyIG5leHQgPSB0aGlzLm5leHQ7XG4gIHZhciByZXN1bHQsIGRvbmUsIHZhbHVlO1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIHJlc3VsdCA9IGFuT2JqZWN0KGNhbGwobmV4dCwgaXRlcmF0b3IpKTtcbiAgICBkb25lID0gdGhpcy5kb25lID0gISFyZXN1bHQuZG9uZTtcbiAgICBpZiAoZG9uZSkgcmV0dXJuO1xuICAgIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgIGlmIChjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nKGl0ZXJhdG9yLCBwcmVkaWNhdGUsIFt2YWx1ZSwgdGhpcy5jb3VudGVyKytdLCB0cnVlKSkgcmV0dXJuIHZhbHVlO1xuICB9XG59KTtcblxuLy8gYEl0ZXJhdG9yLnByb3RvdHlwZS5maWx0ZXJgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pdGVyYXRvci5wcm90b3R5cGUuZmlsdGVyXG4kKHsgdGFyZ2V0OiAnSXRlcmF0b3InLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiBJU19QVVJFIH0sIHtcbiAgZmlsdGVyOiBmdW5jdGlvbiBmaWx0ZXIocHJlZGljYXRlKSB7XG4gICAgYW5PYmplY3QodGhpcyk7XG4gICAgYUNhbGxhYmxlKHByZWRpY2F0ZSk7XG4gICAgcmV0dXJuIG5ldyBJdGVyYXRvclByb3h5KGdldEl0ZXJhdG9yRGlyZWN0KHRoaXMpLCB7XG4gICAgICBwcmVkaWNhdGU6IHByZWRpY2F0ZVxuICAgIH0pO1xuICB9XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2xhc3NvZlJhdyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbikge1xuICAvLyBOYXNob3JuIGJ1ZzpcbiAgLy8gICBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTEyOFxuICAvLyAgIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xMTMwXG4gIGlmIChjbGFzc29mUmF3KGZuKSA9PT0gJ0Z1bmN0aW9uJykgcmV0dXJuIHVuY3VycnlUaGlzKGZuKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy1jbGF1c2UnKTtcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBiaW5kID0gdW5jdXJyeVRoaXModW5jdXJyeVRoaXMuYmluZCk7XG5cbi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQpIHtcbiAgYUNhbGxhYmxlKGZuKTtcbiAgcmV0dXJuIHRoYXQgPT09IHVuZGVmaW5lZCA/IGZuIDogTkFUSVZFX0JJTkQgPyBiaW5kKGZuLCB0aGF0KSA6IGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG90eXBlID0gQXJyYXkucHJvdG90eXBlO1xuXG4vLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvdHlwZVtJVEVSQVRPUl0gPT09IGl0KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciB0ZXN0ID0ge307XG5cbnRlc3RbVE9fU1RSSU5HX1RBR10gPSAneic7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RyaW5nKHRlc3QpID09PSAnW29iamVjdCB6XSc7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIFRPX1NUUklOR19UQUdfU1VQUE9SVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgY2xhc3NvZlJhdyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIENPUlJFQ1RfQVJHVU1FTlRTID0gY2xhc3NvZlJhdyhmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbi8vIGdldHRpbmcgdGFnIGZyb20gRVM2KyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2Bcbm1vZHVsZS5leHBvcnRzID0gVE9fU1RSSU5HX1RBR19TVVBQT1JUID8gY2xhc3NvZlJhdyA6IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgdGFnLCByZXN1bHQ7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mICh0YWcgPSB0cnlHZXQoTyA9ICRPYmplY3QoaXQpLCBUT19TVFJJTkdfVEFHKSkgPT0gJ3N0cmluZycgPyB0YWdcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IENPUlJFQ1RfQVJHVU1FTlRTID8gY2xhc3NvZlJhdyhPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChyZXN1bHQgPSBjbGFzc29mUmF3KE8pKSA9PT0gJ09iamVjdCcgJiYgaXNDYWxsYWJsZShPLmNhbGxlZSkgPyAnQXJndW1lbnRzJyA6IHJlc3VsdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZicpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc051bGxPclVuZGVmaW5lZChpdCkpIHJldHVybiBnZXRNZXRob2QoaXQsIElURVJBVE9SKVxuICAgIHx8IGdldE1ldGhvZChpdCwgJ0BAaXRlcmF0b3InKVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRyeVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RyeS10by1zdHJpbmcnKTtcbnZhciBnZXRJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCwgdXNpbmdJdGVyYXRvcikge1xuICB2YXIgaXRlcmF0b3JNZXRob2QgPSBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGdldEl0ZXJhdG9yTWV0aG9kKGFyZ3VtZW50KSA6IHVzaW5nSXRlcmF0b3I7XG4gIGlmIChhQ2FsbGFibGUoaXRlcmF0b3JNZXRob2QpKSByZXR1cm4gYW5PYmplY3QoY2FsbChpdGVyYXRvck1ldGhvZCwgYXJndW1lbnQpKTtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IodHJ5VG9TdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgaXRlcmFibGUnKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xudmFyIGlzQXJyYXlJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheS1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xudmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZicpO1xudmFyIGdldEl0ZXJhdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvcicpO1xudmFyIGdldEl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBpdGVyYXRvckNsb3NlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG52YXIgUmVzdWx0ID0gZnVuY3Rpb24gKHN0b3BwZWQsIHJlc3VsdCkge1xuICB0aGlzLnN0b3BwZWQgPSBzdG9wcGVkO1xuICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcbn07XG5cbnZhciBSZXN1bHRQcm90b3R5cGUgPSBSZXN1bHQucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgdW5ib3VuZEZ1bmN0aW9uLCBvcHRpb25zKSB7XG4gIHZhciB0aGF0ID0gb3B0aW9ucyAmJiBvcHRpb25zLnRoYXQ7XG4gIHZhciBBU19FTlRSSUVTID0gISEob3B0aW9ucyAmJiBvcHRpb25zLkFTX0VOVFJJRVMpO1xuICB2YXIgSVNfUkVDT1JEID0gISEob3B0aW9ucyAmJiBvcHRpb25zLklTX1JFQ09SRCk7XG4gIHZhciBJU19JVEVSQVRPUiA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5JU19JVEVSQVRPUik7XG4gIHZhciBJTlRFUlJVUFRFRCA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5JTlRFUlJVUFRFRCk7XG4gIHZhciBmbiA9IGJpbmQodW5ib3VuZEZ1bmN0aW9uLCB0aGF0KTtcbiAgdmFyIGl0ZXJhdG9yLCBpdGVyRm4sIGluZGV4LCBsZW5ndGgsIHJlc3VsdCwgbmV4dCwgc3RlcDtcblxuICB2YXIgc3RvcCA9IGZ1bmN0aW9uIChjb25kaXRpb24pIHtcbiAgICBpZiAoaXRlcmF0b3IpIGl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsICdub3JtYWwnLCBjb25kaXRpb24pO1xuICAgIHJldHVybiBuZXcgUmVzdWx0KHRydWUsIGNvbmRpdGlvbik7XG4gIH07XG5cbiAgdmFyIGNhbGxGbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmIChBU19FTlRSSUVTKSB7XG4gICAgICBhbk9iamVjdCh2YWx1ZSk7XG4gICAgICByZXR1cm4gSU5URVJSVVBURUQgPyBmbih2YWx1ZVswXSwgdmFsdWVbMV0sIHN0b3ApIDogZm4odmFsdWVbMF0sIHZhbHVlWzFdKTtcbiAgICB9IHJldHVybiBJTlRFUlJVUFRFRCA/IGZuKHZhbHVlLCBzdG9wKSA6IGZuKHZhbHVlKTtcbiAgfTtcblxuICBpZiAoSVNfUkVDT1JEKSB7XG4gICAgaXRlcmF0b3IgPSBpdGVyYWJsZS5pdGVyYXRvcjtcbiAgfSBlbHNlIGlmIChJU19JVEVSQVRPUikge1xuICAgIGl0ZXJhdG9yID0gaXRlcmFibGU7XG4gIH0gZWxzZSB7XG4gICAgaXRlckZuID0gZ2V0SXRlcmF0b3JNZXRob2QoaXRlcmFibGUpO1xuICAgIGlmICghaXRlckZuKSB0aHJvdyBuZXcgJFR5cGVFcnJvcih0cnlUb1N0cmluZyhpdGVyYWJsZSkgKyAnIGlzIG5vdCBpdGVyYWJsZScpO1xuICAgIC8vIG9wdGltaXNhdGlvbiBmb3IgYXJyYXkgaXRlcmF0b3JzXG4gICAgaWYgKGlzQXJyYXlJdGVyYXRvck1ldGhvZChpdGVyRm4pKSB7XG4gICAgICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoaXRlcmFibGUpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgICByZXN1bHQgPSBjYWxsRm4oaXRlcmFibGVbaW5kZXhdKTtcbiAgICAgICAgaWYgKHJlc3VsdCAmJiBpc1Byb3RvdHlwZU9mKFJlc3VsdFByb3RvdHlwZSwgcmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0gcmV0dXJuIG5ldyBSZXN1bHQoZmFsc2UpO1xuICAgIH1cbiAgICBpdGVyYXRvciA9IGdldEl0ZXJhdG9yKGl0ZXJhYmxlLCBpdGVyRm4pO1xuICB9XG5cbiAgbmV4dCA9IElTX1JFQ09SRCA/IGl0ZXJhYmxlLm5leHQgOiBpdGVyYXRvci5uZXh0O1xuICB3aGlsZSAoIShzdGVwID0gY2FsbChuZXh0LCBpdGVyYXRvcikpLmRvbmUpIHtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gY2FsbEZuKHN0ZXAudmFsdWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCAndGhyb3cnLCBlcnJvcik7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgcmVzdWx0ID09ICdvYmplY3QnICYmIHJlc3VsdCAmJiBpc1Byb3RvdHlwZU9mKFJlc3VsdFByb3RvdHlwZSwgcmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgfSByZXR1cm4gbmV3IFJlc3VsdChmYWxzZSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGl0ZXJhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0ZScpO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZ2V0SXRlcmF0b3JEaXJlY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLWRpcmVjdCcpO1xuXG4vLyBgSXRlcmF0b3IucHJvdG90eXBlLmZpbmRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pdGVyYXRvci5wcm90b3R5cGUuZmluZFxuJCh7IHRhcmdldDogJ0l0ZXJhdG9yJywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUgfSwge1xuICBmaW5kOiBmdW5jdGlvbiBmaW5kKHByZWRpY2F0ZSkge1xuICAgIGFuT2JqZWN0KHRoaXMpO1xuICAgIGFDYWxsYWJsZShwcmVkaWNhdGUpO1xuICAgIHZhciByZWNvcmQgPSBnZXRJdGVyYXRvckRpcmVjdCh0aGlzKTtcbiAgICB2YXIgY291bnRlciA9IDA7XG4gICAgcmV0dXJuIGl0ZXJhdGUocmVjb3JkLCBmdW5jdGlvbiAodmFsdWUsIHN0b3ApIHtcbiAgICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGNvdW50ZXIrKykpIHJldHVybiBzdG9wKHZhbHVlKTtcbiAgICB9LCB7IElTX1JFQ09SRDogdHJ1ZSwgSU5URVJSVVBURUQ6IHRydWUgfSkucmVzdWx0O1xuICB9XG59KTtcbiIsICJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL0hvdENhdC9tb2R1bGVzL2NoZWNrLm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3QgY2F0Y2hlY2tJbmxpbmVJY29uID0gXCJjaGVjay1tb2R1bGVfX2NhdGNoZWNrSW5saW5lSWNvbl9tSjVORHFfXzQxMDBcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcImNhdGNoZWNrSW5saW5lSWNvblwiOiBjYXRjaGVja0lubGluZUljb25cbn07XG4gICAgICAiLCAiaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbi8vIEluaXRpYWxpemUgTWVkaWFXaWtpIEFQSVxuY29uc3QgbXdBcGk6ICh1c2VyQWdlbnQ/OiBzdHJpbmcpID0+IG13LkFwaSA9ICh1c2VyQWdlbnQpID0+IHtcblx0cmV0dXJuIGluaXRNd0FwaSh1c2VyQWdlbnQpO1xufTtcblxuZXhwb3J0IHttd0FwaX07XG4iLCAiaW1wb3J0IHtjYXRjaGVja0lubGluZUljb259IGZyb20gJy4vY2hlY2subW9kdWxlLmxlc3MnO1xuaW1wb3J0IHttd0FwaX0gZnJvbSAnLi9hcGknO1xuXG4vKipcbiAqIENoZWNrQ2F0ZWdvcmllcyBIb3RDYXQgRXh0ZW5zaW9uIOKAk1xuICogcmVtb3ZlcyB0aGUgdGVtcGxhdGUgd2hlbiBjYXRlZ29yaXppbmcgKHByb21wdHMgYmVmb3JlKSB3aXRoIEhvdENhdCBhbmRcbiAqIGFkZHMgYSBsaW5rIFwiQ2F0ZWdvcmllcyBhcmUgT0tcIiB0byB0aGUgY2F0ZWdvcnktc2VjdGlvblxuICpcbiAqIEByZXYgMiAoMjAxNC0wMy0yMClcbiAqIEBhdXRob3IgUmlsbGtlLCAyMDEyXG4gKi9cbihmdW5jdGlvbiBob3RDYXRDaGVjaygpIHtcblx0aWYgKFxuXHRcdG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlTnVtYmVyJykgIT09IDYgfHxcblx0XHR3aW5kb3cuSG90Q2F0QXV0b1JlbW92ZUNoZWNrQ2F0T3B0T3V0IHx8XG5cdFx0IWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2NhdGVnb3JpZXMnKVxuXHQpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3QgYXBpID0gbXdBcGkoJ2hvdENhdENoZWNrLzIuMCcpO1xuXHRjb25zdCBjaGVja0NhdGVnb3JpZXNSZWdFeHAgPSAve3tbQ2NdaGVja1sgX11jYXRlZ29yaWVzW157fV0qfX0vZztcblx0Y29uc3Qgc2VsZk5hbWUgPSAnKFtbTWVkaWFXaWtpOkdhZGdldC1Ib3RDYXQtY2hlY2suanN8U2NyaXB0XV0pOiAnO1xuXHRjb25zdCBzdG9yYWdlSXRlbU5hbWUgPSAnY2hlY2tDYXQnO1xuXHRjb25zdCBzdG9yYWdlSXRlbSA9IG13LnN0b3JhZ2UuZ2V0KHN0b3JhZ2VJdGVtTmFtZSk7XG5cdC8qKlxuXHQgKiBBIGZldyBzdHlsaW5nIGhlbHBlciBmdW5jdGlvbnNcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGljb25DbGFzc1xuXHQgKiBAcmV0dXJuIHtKUXVlcnl9XG5cdCAqL1xuXHRjb25zdCBjcmVhdGVqSWNvbiA9IChpY29uQ2xhc3M6IHN0cmluZyk6IEpRdWVyeSA9PiB7XG5cdFx0cmV0dXJuICQoJzxzcGFuPicpLmF0dHIoJ2NsYXNzJywgYHVpLWljb24gJHtpY29uQ2xhc3N9ICR7Y2F0Y2hlY2tJbmxpbmVJY29ufWApLnRleHQoJyAnKTtcblx0fTtcblx0Y29uc3QgY3JlYXRlTm90aWZ5QXJlYSA9ICh0ZXh0Tm9kZTogSlF1ZXJ5PEpRdWVyeS5Ob2RlPiwgaWNvbjogc3RyaW5nLCBzdGF0ZTogc3RyaW5nKTogSlF1ZXJ5PEhUTUxFbGVtZW50PiA9PiB7XG5cdFx0cmV0dXJuICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygndWktd2lkZ2V0Jylcblx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdCQoJzxkaXY+Jylcblx0XHRcdFx0XHQuYXR0cignY2xhc3MnLCBgJHtzdGF0ZX0gdWktY29ybmVyLWFsbGApXG5cdFx0XHRcdFx0LmNzcyh7XG5cdFx0XHRcdFx0XHQnbWFyZ2luLXRvcCc6ICcyMHB4Jyxcblx0XHRcdFx0XHRcdHBhZGRpbmc6ICcwLjdlbScsXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuYXBwZW5kKCQoJzxwPicpLmFwcGVuZChjcmVhdGVqSWNvbihpY29uKS5jc3MoJ21hcmdpblJpZ2h0JywgJzAuM2VtJyksIHRleHROb2RlKSlcblx0XHRcdCk7XG5cdH07XG5cdC8vIFJlbW92ZSBcImNoZWNrIGNhdGVnb3JpZXNcIiB3aGVuIHVzaW5nIEhvdENhdFxuXHQvLyBPbmx5IGV4ZWN1dGVkIG9uIGZpcnN0IHN1Ym1pdFxuXHQkKCdib2R5Jykub25lKCdzdWJtaXQuY2hlY2tDYXRMaXN0ZW5lcicsICcjaG90Y2F0Q29tbWl0Rm9ybScsIGZ1bmN0aW9uIChlKSB7XG5cdFx0aWYgKHN0b3JhZ2VJdGVtID09PSAnZGlzYWJsZWQnKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXNzaWdubWVudFxuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXG5cdFx0Y29uc3QgbmV3VmFsID0gKHNlbGYud3BUZXh0Ym94MSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50KS52YWx1ZT8ucmVwbGFjZShjaGVja0NhdGVnb3JpZXNSZWdFeHAsICcnKTtcblx0XHRjb25zdCBkbGdCdXR0b25zOiB7XG5cdFx0XHQnWWVzLCBSZW1vdmUnPzogKCkgPT4gdm9pZDtcblx0XHRcdCdObywga2VlcCBpdCc/OiAoKSA9PiB2b2lkO1xuXHRcdH0gPSB7fTtcblx0XHRsZXQgJGRpYWxvZ0NoZWNrU3RvcmFnZTogSlF1ZXJ5PEhUTUxFbGVtZW50Pjtcblx0XHRsZXQgJHBlcm1hU2F2ZUhpbnQ6IEpRdWVyeTxIVE1MRWxlbWVudD47XG5cdFx0bGV0ICR0ZXh0SGludE5vZGU7XG5cdFx0bGV0ICRkaWFsb2c7XG5cdFx0Y29uc3QgZG9SZW1vdmUgPSAoKSA9PiB7XG5cdFx0XHQoc2VsZi53cFN1bW1hcnkgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPVxuXHRcdFx0XHRgUmVtb3ZpbmcgW1tUZW1wbGF0ZTpDaGVjayBjYXRlZ29yaWVzfHt7Q2hlY2sgY2F0ZWdvcmllc319XV0gJHsoc2VsZi53cFN1bW1hcnkgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWV9YDtcblxuXHRcdFx0KHNlbGYud3BUZXh0Ym94MSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50KS52YWx1ZSA9IG5ld1ZhbDtcblx0XHR9O1xuXHRcdGNvbnN0IHdyaXRlU3RvcmFnZSA9ICh2YWw6IHN0cmluZykgPT4ge1xuXHRcdFx0bXcuc3RvcmFnZS5zZXQoc3RvcmFnZUl0ZW1OYW1lLCB2YWwsIDYwICogNjAgKiAyNCAqIDcpOyAvLyA3IGRheXNcblx0XHR9O1xuXHRcdGRsZ0J1dHRvbnNbJ1llcywgUmVtb3ZlJ10gPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRkb1JlbW92ZSgpO1xuXHRcdFx0aWYgKCgkZGlhbG9nQ2hlY2tTdG9yYWdlWzBdIGFzIEhUTUxJbnB1dEVsZW1lbnQpPy5jaGVja2VkKSB7XG5cdFx0XHRcdHdyaXRlU3RvcmFnZSgnYXV0bycpO1xuXHRcdFx0fVxuXHRcdFx0JCh0aGlzKS5kaWFsb2coJ2Nsb3NlJyk7XG5cdFx0fTtcblx0XHRkbGdCdXR0b25zWydObywga2VlcCBpdCddID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKCgkZGlhbG9nQ2hlY2tTdG9yYWdlWzBdIGFzIEhUTUxJbnB1dEVsZW1lbnQpPy5jaGVja2VkKSB7XG5cdFx0XHRcdHdyaXRlU3RvcmFnZSgnZGlzYWJsZWQnKTtcblx0XHRcdH1cblx0XHRcdCQodGhpcykuZGlhbG9nKCdjbG9zZScpO1xuXHRcdH07XG5cdFx0Y29uc3QgX2FkZFRvSlMgPSBmdW5jdGlvbiAodGhpczogSFRNTEVsZW1lbnQsIF9lOiBKUXVlcnkuRXZlbnQpIHtcblx0XHRcdF9lLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRpZiAoJHBlcm1hU2F2ZUhpbnQuaGFzQ2xhc3MoJ3VpLXN0YXRlLWRpc2FibGVkJykpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgJGVsOiBKUXVlcnk8SFRNTEVsZW1lbnQ+ID0gJCh0aGlzKTtcblx0XHRcdCRlbC5vZmYoJ2NsaWNrJykudGV4dCgnUGxlYXNlIHdhaXQuJyk7XG5cdFx0XHQkcGVybWFTYXZlSGludC5hZGRDbGFzcygndWktc3RhdGUtZGlzYWJsZWQnKTtcblx0XHRcdGNvbnN0IHBhcmFtczogQXBpRWRpdFBhZ2VQYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0dGl0bGU6IGBVc2VyOiR7bXcuY29uZmlnLmdldCgnd2dVc2VyTmFtZScpfS9jb21tb24uanNgLFxuXHRcdFx0XHRzdW1tYXJ5OiBgJHtzZWxmTmFtZX1TYXZpbmcgSG90Q2F0IGNvbmZpZ3VyYXRpb24uYCxcblx0XHRcdFx0YXBwZW5kdGV4dDogJGVsLmRhdGEoJ2FkZFRleHQnKSBhcyBzdHJpbmcsXG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgZWRpdERvbmUgPSAoZWRpdFN0YXQ/OiB7ZXJyb3I/OiB7Y29kZT86IHN0cmluZzsgaW5mbz86IHN0cmluZ319KSA9PiB7XG5cdFx0XHRcdGlmICghZWRpdFN0YXQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGVkaXRTdGF0LmVycm9yKSB7XG5cdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoXG5cdFx0XHRcdFx0XHRgVW5hYmxlIHRvIHNhdmUgdG8geW91ciBjb21tb24uanMgdXNpbmcgdGhlIEFQSVxcbiR7ZWRpdFN0YXQuZXJyb3IuY29kZX1cXG4ke2VkaXRTdGF0LmVycm9yLmluZm99YCxcblx0XHRcdFx0XHRcdHt0YWc6ICdob3RDYXRDaGVjaycsIHR5cGU6ICdlcnJvcid9XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHQkZWwudGV4dCgnRWRpdC1FcnJvciEnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkZWwudGV4dCgnRG9uZS4nKTtcblx0XHRcdFx0XHQkcGVybWFTYXZlSGludC5mYWRlT3V0KCk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHR2b2lkIGFwaS5wb3N0V2l0aFRva2VuKCdjc3JmJywgcGFyYW1zKS50aGVuKGVkaXREb25lKTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIE9uIFdpa2ltZWRpYSBDb21tb25zIHRoZXJlIHdlcmUgcGVvcGxlIHdobyBzYWlkOlxuXHRcdCAqIFwiQ2F0ZWdvcml6aW5nIHdpdGggSG90Q2F0IGRvZXMgbGVnaXQgYXV0b21hdGVkIHJlbW92YWwgb2YgdGhlIGNoZWNrLWNhdC1tZXNzYWdlXCJcblx0XHQgKiBTbyB3ZSBpbnZlbnRlZCBhIGRpYWxvZyB0aGF0IHNob3VsZCBiZSByZWFkYWJsZSBieSB1c2VycyBldmVuIHdpdGggdmVyeSBmZXcgRW5nbGlzaCBza2lsbHMuXG5cdFx0ICovXG5cdFx0Y29uc3QgcHJvbXB0ID0gKCkgPT4ge1xuXHRcdFx0JGRpYWxvZ0NoZWNrU3RvcmFnZSA9ICQoJzxpbnB1dD4nKVxuXHRcdFx0XHQuYXR0cih7XG5cdFx0XHRcdFx0dHlwZTogJ2NoZWNrYm94Jyxcblx0XHRcdFx0XHRpZDogJ2hvdENhdEF1dG9SZW1vdmVDaGVja0NhdFN0b3JhZ2UnLFxuXHRcdFx0XHR9KVxuXHRcdFx0XHQub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRpZiAoKHRoaXMgYXMgSFRNTElucHV0RWxlbWVudCkuY2hlY2tlZCkge1xuXHRcdFx0XHRcdFx0JHBlcm1hU2F2ZUhpbnQuZmFkZUluKCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdCRwZXJtYVNhdmVIaW50LmZhZGVPdXQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0JHRleHRIaW50Tm9kZSA9ICQoJzx1bD4nKTtcblx0XHRcdCQoJzxsaT4nKVxuXHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdCQoJzxhPicpXG5cdFx0XHRcdFx0XHQuYXR0cignaHJlZicsICcjJylcblx0XHRcdFx0XHRcdC50ZXh0KCdEaXNhYmxlIHRoaXMgZmVhdHVyZS4nKVxuXHRcdFx0XHRcdFx0LmRhdGEoJ2FkZFRleHQnLCAnXFxud2luZG93LkhvdENhdEF1dG9SZW1vdmVDaGVja0NhdE9wdE91dCA9IHRydWU7Jylcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBfYWRkVG9KUylcblx0XHRcdFx0KVxuXHRcdFx0XHQuYXBwZW5kVG8oJHRleHRIaW50Tm9kZSk7XG5cdFx0XHQkKCc8bGk+Jylcblx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHQkKCc8YT4nKVxuXHRcdFx0XHRcdFx0LmF0dHIoJ2hyZWYnLCAnIycpXG5cdFx0XHRcdFx0XHQudGV4dCgnUmVtb3ZlIHt7Y2hlY2sgY2F0ZWdvcmllc319IHdoZW4gZWRpdGluZyB1c2luZyBIb3RDYXQgd2l0aG91dCBwcm9tcHRpbmcuJylcblx0XHRcdFx0XHRcdC5kYXRhKCdhZGRUZXh0JywgJ1xcbndpbmRvdy5Ib3RDYXRBdXRvUmVtb3ZlQ2hlY2tDYXQgPSB0cnVlOycpXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgX2FkZFRvSlMpXG5cdFx0XHRcdClcblx0XHRcdFx0LmFwcGVuZFRvKCR0ZXh0SGludE5vZGUpO1xuXHRcdFx0JHBlcm1hU2F2ZUhpbnQgPSBjcmVhdGVOb3RpZnlBcmVhKFxuXHRcdFx0XHQkKCc8c3Bhbj4nKS50ZXh0KCdTYXZlIHRoZXNlIHNldHRpbmcgaW4geW91ciBjb21tb24uanM6ICcpLmFwcGVuZCgkdGV4dEhpbnROb2RlKSxcblx0XHRcdFx0J3VpLWljb24taW5mbycsXG5cdFx0XHRcdCd1aS1zdGF0ZS1oaWdobGlnaHQnXG5cdFx0XHQpO1xuXHRcdFx0JGRpYWxvZyA9ICQoJzxkaXY+Jylcblx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHQkKCc8c3Bhbj4nKVxuXHRcdFx0XHRcdFx0LmNzcyh7XG5cdFx0XHRcdFx0XHRcdCdmb250LXNpemUnOiAnMmVtJyxcblx0XHRcdFx0XHRcdFx0J2xpbmUtaGVpZ2h0JzogJzEuOGVtJyxcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdFx0XHQkKCc8c3Bhbj4nKS50ZXh0KCcge3tjaGVjayBjYXRlZ29yaWVzfX0gJykuY3NzKHtcblx0XHRcdFx0XHRcdFx0XHQnYmFja2dyb3VuZC1jb2xvcic6ICcjRjhDQ0IwJyxcblx0XHRcdFx0XHRcdFx0XHQndGV4dC1kZWNvcmF0aW9uJzogJ2xpbmUtdGhyb3VnaCAhaW1wb3J0YW50Jyxcblx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcblx0XHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHRcdCQoJzxzcGFuPicpLnRleHQoJyA/Jylcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0KVxuXHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdCc8YnI+Jyxcblx0XHRcdFx0XHQkZGlhbG9nQ2hlY2tTdG9yYWdlLFxuXHRcdFx0XHRcdCQoJzxsYWJlbD4nKS5hdHRyKCdmb3InLCAnaG90Q2F0QXV0b1JlbW92ZUNoZWNrQ2F0U3RvcmFnZScpLnRleHQoXCJEb24ndCBhc2sgYWdhaW5cIiksXG5cdFx0XHRcdFx0Jzxicj4nXG5cdFx0XHRcdClcblx0XHRcdFx0LmFwcGVuZChtdy51c2VyLmlzQW5vbigpID8gJycgOiAkcGVybWFTYXZlSGludC5oaWRlKCkpO1xuXHRcdFx0JGRpYWxvZy5kaWFsb2coe1xuXHRcdFx0XHRtb2RhbDogdHJ1ZSxcblx0XHRcdFx0Y2xvc2VPbkVzY2FwZTogdHJ1ZSxcblx0XHRcdFx0dGl0bGU6ICd7e2NoZWNrIGNhdGVnb3JpZXN9fSAo4oiSKT8nLFxuXHRcdFx0XHR3aWR0aDogNDUwLFxuXHRcdFx0XHRidXR0b25zOiBkbGdCdXR0b25zLFxuXHRcdFx0XHRjbG9zZTogKCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdFx0XHRcdCRib2R5LmZpbmQoJyNob3RjYXRDb21taXRGb3JtJykudHJpZ2dlcignc3VibWl0Jyk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9wZW4oKSB7XG5cdFx0XHRcdFx0Y29uc3QgJGJ1dHRvbnMgPSAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy51aS1kaWFsb2ctYnV0dG9ucGFuZSBidXR0b24nKTtcblx0XHRcdFx0XHQkYnV0dG9ucy5lcSgwKS5idXR0b24oe1xuXHRcdFx0XHRcdFx0aWNvbnM6IHtcblx0XHRcdFx0XHRcdFx0cHJpbWFyeTogJ3VpLWljb24tY2lyY2xlLWNoZWNrJyxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0JGJ1dHRvbnMuZXEoMSkuYnV0dG9uKHtcblx0XHRcdFx0XHRcdGljb25zOiB7XG5cdFx0XHRcdFx0XHRcdHByaW1hcnk6ICd1aS1pY29uLWNhbmNlbCcsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdGlmIChuZXdWYWwgIT09IChzZWxmLndwVGV4dGJveDEgYXMgSFRNTFRleHRBcmVhRWxlbWVudCkudmFsdWUpIHtcblx0XHRcdGlmICh3aW5kb3cuSG90Q2F0QXV0b1JlbW92ZUNoZWNrQ2F0IHx8IHN0b3JhZ2VJdGVtID09PSAnYXV0bycpIHtcblx0XHRcdFx0ZG9SZW1vdmUoKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRwcm9tcHQoKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0pO1xuXHQvLyBBZGQgT0stTGluayB0byB0aGUgY2F0cyBwYW5lbFxuXHRjb25zdCAkb2tMaW5rID0gJCgnPGE+Jylcblx0XHQuYXR0cih7XG5cdFx0XHRocmVmOiAnIycsXG5cdFx0XHR0aXRsZTogJ0NhdGVnb3JpZXMgYXJlIE9LISBJbW1lZGlhdGVseSByZW1vdmUgdGhlIHRlbXBsYXRlLicsXG5cdFx0fSlcblx0XHQuYXBwZW5kKCc8cz4nKVxuXHRcdC50ZXh0KCd7e0NoZWNrIGNhdGVnb3JpZXN9fScpO1xuXHQkb2tMaW5rLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnN0ICRlbCA9ICQodGhpcyk7XG5cdFx0JGVsLm9mZignY2xpY2snKTtcblx0XHRjb25zdCBkb0VkaXQgPSAocmVzdWx0OiBzdHJpbmcpID0+IHtcblx0XHRcdGlmICghcmVzdWx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdCRlbC50ZXh0KCdEb2luZy4nKTtcblx0XHRcdGNvbnN0IHRleHQgPSByZXN1bHQucmVwbGFjZShjaGVja0NhdGVnb3JpZXNSZWdFeHAsICcnKTtcblx0XHRcdGlmICh0ZXh0ID09PSByZXN1bHQpIHtcblx0XHRcdFx0JGVsLnRleHQoJ1RlbXBsYXRlIG5vdCBmb3VuZCEnKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcGFyYW1zOiBBcGlFZGl0UGFnZVBhcmFtcyA9IHtcblx0XHRcdFx0dGV4dCxcblx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHR0aXRsZTogbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpLFxuXHRcdFx0XHRzdW1tYXJ5OiBgJHtzZWxmTmFtZX1DYXRlZ29yaWVzIGFyZSBjaGVja2VkIGFuZCBPSy4gWW91IGNhbiBoZWxwIFtbQ2F0ZWdvcnk6TWVkaWEgbmVlZGluZyBjYXRlZ29yeSByZXZpZXd8cmV2aWV3aW5nXV0hYCxcblx0XHRcdFx0bm9jcmVhdGU6IHRydWUsXG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgZWRpdERvbmUgPSAoZWRpdFN0YXQ/OiB7ZXJyb3I/OiB7Y29kZT86IHN0cmluZzsgaW5mbz86IHN0cmluZ319KSA9PiB7XG5cdFx0XHRcdGlmICghZWRpdFN0YXQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGVkaXRTdGF0LmVycm9yKSB7XG5cdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoXG5cdFx0XHRcdFx0XHRgVW5hYmxlIHRvIHJlbW92ZSBcIkNoZWNrIGNhdGVnb3JpZXNcIiB3aXRoIHRoZSBBUElcXG4ke2VkaXRTdGF0LmVycm9yLmNvZGV9XFxuJHtlZGl0U3RhdC5lcnJvci5pbmZvfWAsXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRhZzogJ2hvdENhdENoZWNrJyxcblx0XHRcdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdCRlbC50ZXh0KCdFZGl0LUVycm9yIScpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRlbC50ZXh0KCdFZGl0IERvbmUuJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0XHRcdCRib2R5LmZpbmQoJy5jaGVja2NhdGVnb3JpZXMnKS5mYWRlT3V0KCk7XG5cdFx0XHR9O1xuXHRcdFx0JGVsLnRleHQoJ0RvaW5nLi4nKTtcblx0XHRcdHZvaWQgYXBpLnBvc3RXaXRoVG9rZW4oJ2NzcmYnLCBwYXJhbXMpLnRoZW4oZWRpdERvbmUpO1xuXHRcdH07XG5cdFx0JGVsLnRleHQoJ0RvaW5nJyk7XG5cdFx0dm9pZCAkLmFqYXgoe1xuXHRcdFx0dXJsOiBtdy5jb25maWcuZ2V0KCd3Z1NjcmlwdCcpLFxuXHRcdFx0ZGF0YToge1xuXHRcdFx0XHRhY3Rpb246ICdyYXcnLFxuXHRcdFx0XHR0aXRsZTogbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpLnJlcGxhY2UoLyAvZywgJ18nKSxcblx0XHRcdH0sXG5cdFx0XHRkYXRhVHlwZTogJ3RleHQnLFxuXHRcdFx0ZXJyb3I6ICgpID0+IHtcblx0XHRcdFx0JGVsLnRleHQoJ0Vycm9yIScpO1xuXHRcdFx0fSxcblx0XHRcdHN1Y2Nlc3M6IGRvRWRpdCxcblx0XHRcdHR5cGU6ICdHRVQnLFxuXHRcdFx0Y2FjaGU6IGZhbHNlLFxuXHRcdH0pO1xuXHR9KTtcblx0JChmdW5jdGlvbiBsb2FkSG90Q2F0Q2hlY2soKSB7XG5cdFx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0JGJvZHkuZmluZCgnI2NhdGxpbmtzJykuZmluZCgndWw6Zmlyc3QnKS5hcHBlbmQoJCgnPGxpPicpLmFwcGVuZCgkb2tMaW5rKSk7XG5cdH0pO1xufSkoKTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0ICcuL21vZHVsZXMvY2hlY2snO1xuaW1wb3J0IHtnZW5lcmF0ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL21vZHVsZXMvZ2V0TWVzc2FnZSc7XG5pbXBvcnQge2hvdENhdE1lc3NhZ2VzfSBmcm9tICcuL21vZHVsZXMvbWVzc2FnZXMnO1xuaW1wb3J0IHttd0FwaX0gZnJvbSAnLi9tb2R1bGVzL2FwaSc7XG5pbXBvcnQgcG5vIGZyb20gJy4vaW1hZ2VzL1Bfbm8ucG5nJztcbmltcG9ydCBweWVzIGZyb20gJy4vaW1hZ2VzL1BfeWVzLnBuZyc7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIEFqYXgtYmFzZWQgc2ltcGxlIENhdGVnb3J5IG1hbmFnZXIuIEFsbG93cyBhZGRpbmcvcmVtb3ZpbmcvY2hhbmdpbmcgY2F0ZWdvcmllcyBvbiBhIHBhZ2Ugdmlldy5cbiAqIFN1cHBvcnRzIG11bHRpcGxlIGNhdGVnb3J5IGNoYW5nZXMsIGFzIHdlbGwgYXMgcmVkaXJlY3QgYW5kIGRpc2FtYmlndWF0aW9uIHJlc29sdXRpb24uIEFsc29cbiAqIHBsdWdzIGludG8gdGhlIHVwbG9hZCBmb3JtLiBTZWFyY2ggZW5naW5lcyB0byB1c2UgZm9yIHRoZSBzdWdnZXN0aW9uIGxpc3QgYXJlIGNvbmZpZ3VyYWJsZSwgYW5kXG4gKiBjYW4gYmUgc2VsZWN0ZWQgaW50ZXJhY3RpdmVseS5cbiAqXG4gKiBAc2VlIHtAbGluayBodHRwczovL2NvbW1vbnMud2lraW1lZGlhLm9yZy93aWtpL0hlbHA6R2FkZ2V0LUhvdENhdH1cbiAqIEBhdXRob3IgYXV0aG9ycyA8aHR0cHM6Ly9jb21tb25zLndpa2ltZWRpYS5vcmcvd2lraS9IZWxwOkdhZGdldC1Ib3RDYXQvVmVyc2lvbl9oaXN0b3J5PlxuICovXG4vLyBMb2FkIHRyYW5zbGF0aW9ucyBsb2NhbGx5XG5ob3RDYXRNZXNzYWdlcygpO1xuXG4vLyBNYWluIGJvZHlcbihmdW5jdGlvbiBob3RDYXQoKSB7XG5cdC8vIERvbid0IHVzZSBtdy5jb25maWcuZ2V0KCkgYXMgdGhhdCB0YWtlcyBhIGNvcHkgb2YgdGhlIGNvbmZpZywgYW5kIHNvIGRvZXNuJ3Rcblx0Ly8gYWNjb3VudCBmb3IgdmFsdWVzIGNoYW5naW5nLCBlLmcuIHdnQ3VyUmV2aXNpb25JZCBhZnRlciBhIFZFIGVkaXRcblx0Y29uc3QgY29uZiA9IG13LmNvbmZpZy52YWx1ZXM7XG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKCh3aW5kb3cuSG90Q2F0ICYmICF3aW5kb3cuSG90Q2F0Lm5vZGVOYW1lKSB8fCBjb25mLndnQWN0aW9uID09PSAnZWRpdCcpIHtcblx0XHRyZXR1cm47IC8vIE5vdCBvbiBlZGl0IG1vZGVcblx0fVxuXHQvLyBJbml0aWFsaXplIE1lZGlhV2lraSBBUElcblx0Y29uc3QgYXBpID0gbXdBcGkoJ0hvdENhdC8zLjAnKTtcblx0Ly8gQ29uZmlndXJhdGlvbiBzdHVmZi5cblx0d2luZG93LkhvdENhdCA9IHtcblx0XHQvLyBUaGUgbGl0dGxlIG1vZGlmaWNhdGlvbiBsaW5rcyBkaXNwbGF5ZWQgYWZ0ZXIgY2F0ZWdvcnkgbmFtZXMuIFUrMjIxMiBpcyBhIG1pbnVzIHNpZ247IFUrMjE5MyBhbmQgVSsyMTkxIGFyZVxuXHRcdC8vIGRvd253YXJkIGFuZCB1cHdhcmQgcG9pbnRpbmcgYXJyb3dzLiBEbyBub3QgdXNlIOKGkyBhbmQg4oaRIGluIHRoZSBjb2RlIVxuXHRcdGxpbmtzOiB7XG5cdFx0XHRjaGFuZ2U6ICcowrEpJyxcblx0XHRcdHJlbW92ZTogJyhcXHUyMjEyKScsXG5cdFx0XHRhZGQ6ICcoKyknLFxuXHRcdFx0cmVzdG9yZTogJyjDlyknLFxuXHRcdFx0dW5kbzogJyjDlyknLFxuXHRcdFx0ZG93bjogJyhcXHUyMTkzKScsXG5cdFx0XHR1cDogJyhcXHUyMTkxKScsXG5cdFx0fSxcblx0XHRjaGFuZ2VUYWc6ICdIb3RDYXQnLFxuXHRcdC8vIFRoZSBIVE1MIGNvbnRlbnQgb2YgdGhlIFwiZW50ZXIgbXVsdGktbW9kZVwiIGxpbmsgYXQgdGhlIGZyb250LlxuXHRcdGFkZG11bHRpOiAnPHNwYW4+KzxzdXA+Kzwvc3VwPjwvc3Bhbj4nLFxuXHRcdC8vIFJldHVybiB0cnVlIHRvIGRpc2FibGUgSG90Q2F0LlxuXHRcdGRpc2FibGU6ICgpID0+IHtcblx0XHRcdGNvbnN0IG5zID0gY29uZi53Z05hbWVzcGFjZU51bWJlcjtcblx0XHRcdGNvbnN0IG5zSWRzID0gY29uZi53Z05hbWVzcGFjZUlkcztcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdG5zIDwgMCB8fFxuXHRcdFx0XHQvLyBTcGVjaWFsIHBhZ2VzOyBTcGVjaWFsOlVwbG9hZCBpcyBoYW5kbGVkIGRpZmZlcmVudGx5XG5cdFx0XHRcdG5zID09PSAxMCB8fFxuXHRcdFx0XHQvLyBUZW1wbGF0ZXNcblx0XHRcdFx0bnMgPT09IDgyOCB8fFxuXHRcdFx0XHQvLyBNb2R1bGUgKEx1YSlcblx0XHRcdFx0bnMgPT09IDggfHxcblx0XHRcdFx0Ly8gTWVkaWFXaWtpXG5cdFx0XHRcdChucyA9PT0gNiAmJiAhY29uZi53Z0FydGljbGVJZCkgfHxcblx0XHRcdFx0Ly8gTm9uLWV4aXN0aW5nIGZpbGUgcGFnZXNcblx0XHRcdFx0KG5zID09PSAyICYmIC9cXC4oanN8Y3NzKSQvLnRlc3QoY29uZi53Z1RpdGxlKSkgfHxcblx0XHRcdFx0Ly8gVXNlciBzY3JpcHRzXG5cdFx0XHRcdChuc0lkcyAmJiAobnMgPT09IG5zSWRzLmNyZWF0b3IgfHwgbnMgPT09IG5zSWRzLnRpbWVkdGV4dCB8fCBucyA9PT0gbnNJZHMuaW5zdGl0dXRpb24pKVxuXHRcdFx0KTtcblx0XHR9LFxuXHRcdC8vIEEgcmVnZXhwIG1hdGNoaW5nIGEgdGVtcGxhdGVzIHVzZWQgdG8gbWFyayB1bmNhdGVnb3JpemVkIHBhZ2VzLCBpZiB5b3VyIHdpa2kgZG9lcyBoYXZlIHRoYXQuXG5cdFx0Ly8gSWYgbm90LCBzZXQgaXQgdG8gbnVsbC5cblx0XHR1bmNhdF9yZWdleHA6IC97e1xccypbVXVdbmNhdGVnb3JpemVkXFxzKltefV0qfX1cXHMqKDwhLS0uKj8tLT5cXHMqKT8vZyxcblx0XHQvLyBUaGUgaW1hZ2VzIHVzZWQgZm9yIHRoZSBsaXR0bGUgaW5kaWNhdGlvbiBpY29uLiBTaG91bGQgbm90IG5lZWQgY2hhbmdpbmcuXG5cdFx0ZXhpc3RzWWVzOiBweWVzLFxuXHRcdGV4aXN0c05vOiBwbm8sXG5cdFx0Ly8gYSBsaXN0IG9mIGNhdGVnb3JpZXMgd2hpY2ggY2FuIGJlIHJlbW92ZWQgYnkgcmVtb3ZpbmcgYSB0ZW1wbGF0ZVxuXHRcdC8vIGtleTogdGhlIGNhdGVnb3J5IHdpdGhvdXQgbmFtZXNwYWNlXG5cdFx0Ly8gdmFsdWU6IEEgcmVnZXhwIG1hdGNoaW5nIHRoZSB0ZW1wbGF0ZSBuYW1lLCBhZ2FpbiB3aXRob3V0IG5hbWVzcGFjZVxuXHRcdC8vIElmIHlvdSBkb24ndCBoYXZlIHRoaXMgYXQgeW91ciB3aWtpLCBvciBkb24ndCB3YW50IHRoaXMsIHNldCBpdCB0byBhbiBlbXB0eSBvYmplY3Qge30uXG5cdFx0dGVtcGxhdGVfY2F0ZWdvcmllczoge30sXG5cdFx0Ly8gT3ZlcnJpZGUgdGhlIGRlY2lzaW9uIG9mIHdoZXRoZXIgSG90Q2F0IHNob3VsZCBoZWxwIHVzZXJzIGJ5IGF1dG9tYXRpY2FsbHlcblx0XHQvLyBjYXBpdGFsaXNpbmcgdGhlIHRpdGxlIGluIHRoZSB1c2VyIGlucHV0IHRleHQgaWYgdGhlIHdpa2kgaGFzIGNhc2Utc2Vuc2l0aXZlIHBhZ2UgbmFtZXMuXG5cdFx0Ly8gQmFzaWNhbGx5LCB0aGlzIHdpbGwgbWFrZSBhbiBBUEkgcXVlcnkgdG8gY2hlY2sgdGhlIE1lZGlhV2lraSBjb25maWd1cmF0aW9uIGFuZCBIb3RDYXQgdGhlbiBzZXRzXG5cdFx0Ly8gdGhpcyB0byB0cnVlIGZvciBtb3N0IHdpa2lzLCBhbmQgdG8gZmFsc2Ugb24gV2lrdGlvbmFyeS5cblx0XHQvL1xuXHRcdC8vIFlvdSBjYW4gc2V0IHRoaXMgZGlyZWN0bHkgaWYgdGhlcmUgaXMgYSBwcm9ibGVtIHdpdGggaXQuIEZvciBleGFtcGxlLCBHZW9yZ2lhbiBXaWtpcGVkaWEgKGthd2lraSksXG5cdFx0Ly8gaXMga25vd24gdG8gaGF2ZSBkaWZmZXJlbnQgY2FwaXRhbGlzYXRpb24gbG9naWMgYmV0d2VlbiBNZWRpYVdpa2kgUEhQIGFuZCBKYXZhU2NyaXB0LiBBcyBzdWNoLCBhdXRvbWF0aWNcblx0XHQvLyBjYXNlIGNoYW5nZXMgaW4gSmF2YVNjcmlwdCBieSBIb3RDYXQgd291bGQgYmUgd3JvbmcuXG5cdFx0Y2FwaXRhbGl6ZVBhZ2VOYW1lczogbnVsbCxcblx0XHQvLyBJZiB1cGxvYWRfZGlzYWJsZWQgaXMgdHJ1ZSwgSG90Q2F0IHdpbGwgbm90IGJlIHVzZWQgb24gdGhlIFVwbG9hZCBmb3JtLlxuXHRcdHVwbG9hZF9kaXNhYmxlZDogZmFsc2UsXG5cdFx0Ly8gU2luZ2xlIHJlZ3VsYXIgZXhwcmVzc2lvbiBtYXRjaGluZyBibGFja2xpc3RlZCBjYXRlZ29yaWVzIHRoYXQgY2Fubm90IGJlIGNoYW5nZWQgb3Jcblx0XHQvLyBhZGRlZCB1c2luZyBIb3RDYXQuIEZvciBpbnN0YW5jZSAvXFxic3R1YnM/JC8gKGFueSBjYXRlZ29yeSBlbmRpbmcgd2l0aCB0aGUgd29yZCBcInN0dWJcIlxuXHRcdC8vIG9yIFwic3R1YnNcIiksIG9yIC8oXFxic3R1YnM/JCl8XFxibWFpbnRlbmFuY2VcXGIvIChzdHViIGNhdGVnb3JpZXMgYW5kIGFueSBjYXRlZ29yeSB3aXRoIHRoZVxuXHRcdC8vIHdvcmQgXCJtYWludGVuYW5jZVwiIGluIGl0cyB0aXRsZS5cblx0XHRibGFja2xpc3Q6IG51bGwsXG5cdFx0Ly8gU3R1ZmYgY2hhbmdlYWJsZSBieSB1c2Vyczpcblx0XHQvLyBCYWNrZ3JvdW5kIGZvciBjaGFuZ2VkIGNhdGVnb3JpZXMgaW4gbXVsdGktZWRpdCBtb2RlLiBEZWZhdWx0IGlzIGEgdmVyeSBsaWdodCBzYWxtb24gcGluay5cblx0XHRiZ19jaGFuZ2VkOiAnI0ZDQScsXG5cdFx0Ly8gSWYgdHJ1ZSwgSG90Q2F0IHdpbGwgbmV2ZXIgYXV0b21hdGljYWxseSBzdWJtaXQgY2hhbmdlcy4gSG90Q2F0IHdpbGwgb25seSBvcGVuIGFuIGVkaXQgcGFnZSB3aXRoXG5cdFx0Ly8gdGhlIGNoYW5nZXM7IHVzZXJzIG11c3QgYWx3YXlzIHNhdmUgZXhwbGljaXRseS5cblx0XHRub19hdXRvY29tbWl0OiBmYWxzZSxcblx0XHQvLyBJZiB0cnVlLCB0aGUgXCJjYXRlZ29yeSBkZWxldGlvblwiIGxpbmsgXCIoLSlcIiB3aWxsIG5ldmVyIHNhdmUgYXV0b21hdGljYWxseSBidXQgYWx3YXlzIHNob3cgYW5cblx0XHQvLyBlZGl0IHBhZ2Ugd2hlcmUgdGhlIHVzZXIgaGFzIHRvIHNhdmUgdGhlIGVkaXQgbWFudWFsbHkuIElzIGZhbHNlIGJ5IGRlZmF1bHQgYmVjYXVzZSB0aGF0J3MgdGhlXG5cdFx0Ly8gdHJhZGl0aW9uYWwgYmVoYXZpb3IuIFRoaXMgc2V0dGluZyBvdmVycmlkZXMgbm9fYXV0b2NvbW1pdCBmb3IgXCIoLSlcIiBsaW5rcy5cblx0XHRkZWxfbmVlZHNfZGlmZjogZmFsc2UsXG5cdFx0Ly8gVGltZSwgaW4gbWlsbGlzZWNvbmRzLCB0aGF0IEhvdENhdCB3YWl0cyBhZnRlciBhIGtleXN0cm9rZSBiZWZvcmUgbWFraW5nIGEgcmVxdWVzdCB0byB0aGVcblx0XHQvLyBzZXJ2ZXIgdG8gZ2V0IHN1Z2dlc3Rpb25zLlxuXHRcdHN1Z2dlc3RfZGVsYXk6IDEwMDAsXG5cdFx0Ly8gRGVmYXVsdCB3aWR0aCwgaW4gY2hhcmFjdGVycywgb2YgdGhlIHRleHQgaW5wdXQgZmllbGQuXG5cdFx0ZWRpdGJveF93aWR0aDogNDAsXG5cdFx0Ly8gT25lIG9mIHRoZSBlbmdpbmVfbmFtZXMgYWJvdmUsIHRvIGJlIHVzZWQgYXMgdGhlIGRlZmF1bHQgc3VnZ2VzdGlvbiBlbmdpbmUuXG5cdFx0c3VnZ2VzdGlvbnM6ICdjb21iaW5lZCcsXG5cdFx0Ly8gSWYgdHJ1ZSwgYWx3YXlzIHVzZSB0aGUgZGVmYXVsdCBlbmdpbmUsIGFuZCBuZXZlciBkaXNwbGF5IGEgc2VsZWN0b3IuXG5cdFx0Zml4ZWRfc2VhcmNoOiBmYWxzZSxcblx0XHQvLyBJZiBmYWxzZSwgZG8gbm90IGRpc3BsYXkgdGhlIFwidXBcIiBhbmQgXCJkb3duXCIgbGlua3Ncblx0XHR1c2VfdXBfZG93bjogdHJ1ZSxcblx0XHQvLyBEZWZhdWx0IGxpc3Qgc2l6ZVxuXHRcdGxpc3RTaXplOiAxMCxcblx0XHQvLyBJZiB0cnVlLCBzaW5nbGUgY2F0ZWdvcnkgY2hhbmdlcyBhcmUgbWFya2VkIGFzIG1pbm9yIGVkaXRzLiBJZiBmYWxzZSwgdGhleSdyZSBub3QuXG5cdFx0c2luZ2xlX21pbm9yOiB0cnVlLFxuXHRcdC8vIElmIHRydWUsIG5ldmVyIGFkZCBhIHBhZ2UgdG8gdGhlIHVzZXIncyB3YXRjaGxpc3QuIElmIGZhbHNlLCBwYWdlcyBnZXQgYWRkZWQgdG8gdGhlIHdhdGNobGlzdCBpZlxuXHRcdC8vIHRoZSB1c2VyIGhhcyB0aGUgXCJBZGQgcGFnZXMgSSBlZGl0IHRvIG15IHdhdGNobGlzdFwiIG9yIHRoZSBcIkFkZCBwYWdlcyBJIGNyZWF0ZSB0byBteSB3YXRjaGxpc3RcIlxuXHRcdC8vIG9wdGlvbnMgaW4gaGlzIG9yIGhlciBwcmVmZXJlbmNlcyBzZXQuXG5cdFx0ZG9udF9hZGRfdG9fd2F0Y2hsaXN0OiBmYWxzZSxcblx0XHRzaG9ydGN1dHM6IG51bGwsXG5cdFx0YWRkU2hvcnRjdXRzOiAobWFwKSA9PiB7XG5cdFx0XHRpZiAoIW1hcCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR3aW5kb3cuSG90Q2F0LnNob3J0Y3V0cyB8fD0ge307XG5cdFx0XHRmb3IgKGxldCBrIGluIG1hcCkge1xuXHRcdFx0XHRpZiAoIU9iamVjdC5oYXNPd24obWFwLCBrKSB8fCB0eXBlb2YgayAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgdiA9IG1hcFtrXTtcblx0XHRcdFx0aWYgKHR5cGVvZiB2ICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGsgPSBrLnRyaW0oKTtcblx0XHRcdFx0diA9IHYudHJpbSgpO1xuXHRcdFx0XHRpZiAoay5sZW5ndGggPT09IDAgfHwgdi5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR3aW5kb3cuSG90Q2F0LnNob3J0Y3V0c1trXSA9IHY7XG5cdFx0XHR9XG5cdFx0fSxcblx0fTtcblx0Y29uc3QgSEMgPSB3aW5kb3cuSG90Q2F0O1xuXHQvLyBNb3JlIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LiBXZSBoYXZlIGEgZmV3IHBsYWNlcyB3aGVyZSB3ZSB0ZXN0IGZvciB0aGUgYnJvd3Nlcjogb25jZSBmb3Jcblx0Ly8gU2FmYXJpIDwgMy4wLCBhbmQgdHdpY2UgZm9yIFdlYktpdCAoQ2hyb21lIG9yIFNhZmFyaSwgYW55IHZlcnNpb25zKVxuXHRjb25zdCB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcblx0Y29uc3QgaXNfd2Via2l0ID0gL2FwcGxld2Via2l0XFwvXFxkKy8udGVzdCh1YSkgJiYgIXVhLmluY2x1ZGVzKCdzcG9vZmVyJyk7XG5cdGxldCBjYXRfcHJlZml4ID0gbnVsbDtcblx0bGV0IG5vU3VnZ2VzdGlvbnMgPSBmYWxzZTtcblx0Ly8gTm8gZnVydGhlciBjaGFuZ2VzIHNob3VsZCBiZSBuZWNlc3NhcnkgaGVyZS5cblx0Ly8gVGhlIGZvbGxvd2luZyByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5ncyBhcmUgdXNlZCB3aGVuIHNlYXJjaGluZyBmb3IgY2F0ZWdvcmllcyBpbiB3aWtpdGV4dC5cblx0Y29uc3Qgd2lraVRleHRCbGFuayA9IFN0cmluZy5yYXdgW1xcdCBfXFx4QTBcXHUxNjgwXFx1MTgwRVxcdTIwMDAtXFx1MjAwQVxcdTIwMjhcXHUyMDI5XFx1MjAyRlxcdTIwNUZcXHUzMDAwXStgO1xuXHRjb25zdCB3aWtpVGV4dEJsYW5rUkUgPSBuZXcgUmVnRXhwKHdpa2lUZXh0QmxhbmssICdnJyk7XG5cdC8vIFJlZ2V4cCBmb3IgaGFuZGxpbmcgYmxhbmtzIGluc2lkZSBhIGNhdGVnb3J5IHRpdGxlIG9yIG5hbWVzcGFjZSBuYW1lLlxuXHQvLyBTZWUge0BsaW5rIGh0dHA6Ly9zdm4ud2lraW1lZGlhLm9yZy92aWV3dmMvbWVkaWF3aWtpL3RydW5rL3BoYXNlMy9pbmNsdWRlcy9UaXRsZS5waHA/cmV2aXNpb249MTA0MDUxJnZpZXc9bWFya3VwI2wyNzIyfVxuXHQvLyBTZWUgYWxzbyB7QGxpbmsgaHR0cDovL3d3dy5maWxlZm9ybWF0LmluZm8vaW5mby91bmljb2RlL2NhdGVnb3J5L1pzL2xpc3QuaHRtfVxuXHQvLyAgIE1lZGlhV2lraSBjb2xsYXBzZXMgc2V2ZXJhbCBjb250aWd1b3VzIGJsYW5rcyBpbnNpZGUgYSBwYWdlIHRpdGxlIHRvIG9uZSBzaW5nbGUgYmxhbmsuIEl0IGFsc28gcmVwbGFjZSBhXG5cdC8vIG51bWJlciBvZiBzcGVjaWFsIHdoaXRlc3BhY2UgY2hhcmFjdGVycyBieSBzaW1wbGUgYmxhbmtzLiBBbmQgZmluYWxseSwgYmxhbmtzIGFyZSB0cmVhdGVkIGFzIHVuZGVyc2NvcmVzLlxuXHQvLyBUaGVyZWZvcmUsIHdoZW4gbG9va2luZyBmb3IgcGFnZSB0aXRsZXMgaW4gd2lraXRleHQsIHdlIG11c3QgaGFuZGxlIGFsbCB0aGVzZSBjYXNlcy5cblx0Ly8gICBOb3RlOiB3ZSBfZG9fIGluY2x1ZGUgdGhlIGhvcml6b250YWwgdGFiIGluIHRoZSBhYm92ZSBsaXN0LCBldmVuIHRob3VnaCB0aGUgTWVkaWFXaWtpIHNvZnR3YXJlIGZvciBzb21lIHJlYXNvblxuXHQvLyBhcHBlYXJzIHRvIG5vdCBoYW5kbGUgaXQuIFRoZSB6ZXJvLXdpZHRoIHNwYWNlIFxcdTIwMEIgaXMgX25vdF8gaGFuZGxlZCBhcyBhIHNwYWNlIGluc2lkZSB0aXRsZXMgYnkgTVcuXG5cdGNvbnN0IHdpa2lUZXh0QmxhbmtPckJpZGkgPSBTdHJpbmcucmF3YFtcXHQgX1xceEEwXFx1MTY4MFxcdTE4MEVcXHUyMDAwLVxcdTIwMEJcXHUyMDBFXFx1MjAwRlxcdTIwMjgtXFx1MjAyRlxcdTIwNUZcXHUzMDAwXSpgO1xuXHQvLyBXaGl0ZXNwYWNlIHJlZ2V4cCBmb3IgaGFuZGxpbmcgd2hpdGVzcGFjZSBiZXR3ZWVuIGxpbmsgY29tcG9uZW50cy4gSW5jbHVkaW5nIHRoZSBob3Jpem9udGFsIHRhYiwgYnV0IG5vdCBcXG5cXHJcXGZcXHY6XG5cdC8vIGEgbGluayBtdXN0IGJlIG9uIG9uZSBzaW5nbGUgbGluZS5cblx0Ly8gICBNZWRpYVdpa2kgYWxzbyByZW1vdmVzIFVuaWNvZGUgYmlkaSBvdmVycmlkZSBjaGFyYWN0ZXJzIGluIHBhZ2UgdGl0bGVzIChhbmQgbmFtZXNwYWNlIG5hbWVzKSBjb21wbGV0ZWx5LlxuXHQvLyBUaGlzIGlzICpub3QqIGhhbmRsZWQsIGFzIGl0IHdvdWxkIHJlcXVpcmUgdXMgdG8gYWxsb3cgYW55IG9mIFtcXHUyMDBFXFx1MjAwRlxcdTIwMkEtXFx1MjAyRV0gYmV0d2VlbiBhbnkgdHdvXG5cdC8vIGNoYXJhY3RlcnMgaW5zaWRlIGEgY2F0ZWdvcnkgbGluay4gSXQgX2NvdWxkXyBiZSBkb25lIHRob3VnaC4uLiBXZSBfZG9fIGhhbmRsZSBzdHJhbmdlIHNwYWNlcywgaW5jbHVkaW5nIHRoZVxuXHQvLyB6ZXJvLXdpZHRoIHNwYWNlIFxcdTIwMEIsIGFuZCBiaWRpIG92ZXJyaWRlcyBiZXR3ZWVuIHRoZSBjb21wb25lbnRzIG9mIGEgY2F0ZWdvcnkgbGluayAoYWRqYWNlbnQgdG8gdGhlIGNvbG9uLFxuXHQvLyBvciBhZGphY2VudCB0byBhbmQgaW5zaWRlIG9mIFwiW1tcIiBhbmQgXCJdXVwiKS5cblx0Ly8gRmlyc3QgYXV0by1sb2NhbGl6ZSB0aGUgcmVnZXhwcyBmb3IgdGhlIGNhdGVnb3J5IGFuZCB0aGUgdGVtcGxhdGUgbmFtZXNwYWNlcy5cblx0Y29uc3QgZm9ybWF0dGVkTmFtZXNwYWNlcyA9IGNvbmYud2dGb3JtYXR0ZWROYW1lc3BhY2VzO1xuXHRjb25zdCBuYW1lc3BhY2VJZHMgPSBjb25mLndnTmFtZXNwYWNlSWRzO1xuXHRjb25zdCBhdXRvTG9jYWxpemUgPSAobmFtZXNwYWNlTnVtYmVyLCBmYWxsYmFjaykgPT4ge1xuXHRcdGNvbnN0IGNyZWF0ZVJlZ2V4cFN0ciA9IChuYW1lKSA9PiB7XG5cdFx0XHRpZiAoIW5hbWUgfHwgbmFtZS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0bGV0IHJlZ2V4X25hbWUgPSAnJztcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbmFtZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCBpbml0aWFsID0gbmFtZS5jaGFyQXQoaSk7XG5cdFx0XHRcdGNvbnN0IGxsID0gaW5pdGlhbC50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHRjb25zdCB1bCA9IGluaXRpYWwudG9VcHBlckNhc2UoKTtcblx0XHRcdFx0cmVnZXhfbmFtZSArPSBsbCA9PT0gdWwgPyBpbml0aWFsIDogYFske2xsfSR7dWx9XWA7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVnZXhfbmFtZS5yZXBsYWNlKC8oWyQoKSorLj9cXFxcXl0pL2csIFN0cmluZy5yYXdgXFwkMWApLnJlcGxhY2Uod2lraVRleHRCbGFua1JFLCB3aWtpVGV4dEJsYW5rKTtcblx0XHR9O1xuXHRcdGZhbGxiYWNrID0gZmFsbGJhY2sudG9Mb3dlckNhc2UoKTtcblx0XHRjb25zdCBjYW5vbmljYWwgPSBmb3JtYXR0ZWROYW1lc3BhY2VzW1N0cmluZyhuYW1lc3BhY2VOdW1iZXIpXS50b0xvd2VyQ2FzZSgpO1xuXHRcdGxldCByZWdleHAgPSBjcmVhdGVSZWdleHBTdHIoY2Fub25pY2FsKTtcblx0XHRpZiAoZmFsbGJhY2sgJiYgY2Fub25pY2FsICE9PSBmYWxsYmFjaykge1xuXHRcdFx0cmVnZXhwICs9IGB8JHtjcmVhdGVSZWdleHBTdHIoZmFsbGJhY2spfWA7XG5cdFx0fVxuXHRcdGlmIChuYW1lc3BhY2VJZHMpIHtcblx0XHRcdGZvciAoY29uc3QgY2F0X25hbWUgaW4gbmFtZXNwYWNlSWRzKSB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHR0eXBlb2YgY2F0X25hbWUgPT09ICdzdHJpbmcnICYmXG5cdFx0XHRcdFx0Y2F0X25hbWUudG9Mb3dlckNhc2UoKSAhPT0gY2Fub25pY2FsICYmXG5cdFx0XHRcdFx0Y2F0X25hbWUudG9Mb3dlckNhc2UoKSAhPT0gZmFsbGJhY2sgJiZcblx0XHRcdFx0XHRuYW1lc3BhY2VJZHNbY2F0X25hbWVdID09PSBuYW1lc3BhY2VOdW1iZXJcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cmVnZXhwICs9IGB8JHtjcmVhdGVSZWdleHBTdHIoY2F0X25hbWUpfWA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJlZ2V4cDtcblx0fTtcblx0SEMuY2F0ZWdvcnlfY2Fub25pY2FsID0gZm9ybWF0dGVkTmFtZXNwYWNlc1snMTQnXTtcblx0SEMuY2F0ZWdvcnlfcmVnZXhwID0gYXV0b0xvY2FsaXplKDE0LCAnY2F0ZWdvcnknKTtcblx0aWYgKGZvcm1hdHRlZE5hbWVzcGFjZXNbJzEwJ10pIHtcblx0XHRIQy50ZW1wbGF0ZV9yZWdleHAgPSBhdXRvTG9jYWxpemUoMTAsICd0ZW1wbGF0ZScpO1xuXHR9XG5cdC8vIFV0aWxpdHkgZnVuY3Rpb25zLiBZZXMsIHRoaXMgZHVwbGljYXRlcyBzb21lIGZ1bmN0aW9uYWxpdHkgdGhhdCBhbHNvIGV4aXN0cyBpbiBvdGhlciBwbGFjZXMsIGJ1dFxuXHQvLyB0byBrZWVwIHRoaXMgd2hvbGUgc3R1ZmYgaW4gYSBzaW5nbGUgZmlsZSBub3QgZGVwZW5kaW5nIG9uIGFueSBvdGhlciBvbi13aWtpIEphdmFTY3JpcHRzLCB3ZSByZS1kb1xuXHQvLyB0aGVzZSBmZXcgb3BlcmF0aW9ucyBoZXJlLlxuXHRjb25zdCBtYWtlID0gKGFyZywgbGl0ZXJhbCkgPT4ge1xuXHRcdGlmICghYXJnKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0cmV0dXJuIGxpdGVyYWwgPyBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShhcmcpIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudChhcmcpO1xuXHR9O1xuXHRjb25zdCBwYXJhbSA9IChuYW1lLCB1cmkpID0+IHtcblx0XHR1cmkgfHw9IGRvY3VtZW50LmxvY2F0aW9uLmhyZWY7XG5cdFx0Y29uc3QgcmUgPSBuZXcgUmVnRXhwKGBbJj9dJHtuYW1lfT0oW14mI10qKWApO1xuXHRcdGNvbnN0IG0gPSByZS5leGVjKHVyaSk7XG5cdFx0aWYgKG0gJiYgbS5sZW5ndGggPiAxKSB7XG5cdFx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KG1bMV0pO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fTtcblx0Y29uc3QgdGl0bGUgPSAoaHJlZikgPT4ge1xuXHRcdGlmICghaHJlZikge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGNvbnN0IHNjcmlwdCA9IGAke2NvbmYud2dTY3JpcHR9P2A7XG5cdFx0aWYgKFxuXHRcdFx0aHJlZi5pbmRleE9mKHNjcmlwdCkgPT09IDAgfHxcblx0XHRcdGhyZWYuaW5kZXhPZihjb25mLndnU2VydmVyICsgc2NyaXB0KSA9PT0gMCB8fFxuXHRcdFx0KGNvbmYud2dTZXJ2ZXIuc2xpY2UoMCwgMikgPT09ICcvLycgJiZcblx0XHRcdFx0aHJlZi5pbmRleE9mKGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sICsgY29uZi53Z1NlcnZlciArIHNjcmlwdCkgPT09IDApXG5cdFx0KSB7XG5cdFx0XHQvLyBocmVmPVwiL2luZGV4LnBocD90aXRsZT0uLi5cIlxuXHRcdFx0cmV0dXJuIHBhcmFtKCd0aXRsZScsIGhyZWYpO1xuXHRcdH1cblx0XHQvLyBocmVmPVwiL3dpa2kvLi4uXCJcblx0XHRsZXQgcHJlZml4ID0gY29uZi53Z0FydGljbGVQYXRoLnJlcGxhY2UoJyQxJywgJycpO1xuXHRcdGlmIChocmVmLmluZGV4T2YocHJlZml4KSkge1xuXHRcdFx0cHJlZml4ID0gY29uZi53Z1NlcnZlciArIHByZWZpeDtcblx0XHR9IC8vIEZ1bGx5IGV4cGFuZGVkIFVSTD9cblx0XHRpZiAoaHJlZi5pbmRleE9mKHByZWZpeCkgJiYgcHJlZml4LnNsaWNlKDAsIDIpID09PSAnLy8nKSB7XG5cdFx0XHRwcmVmaXggPSBkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCArIHByZWZpeDtcblx0XHR9IC8vIFByb3RvY29sLXJlbGF0aXZlIHdnU2VydmVyP1xuXHRcdGlmIChocmVmLmluZGV4T2YocHJlZml4KSA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChocmVmLnNsaWNlKHByZWZpeC5sZW5ndGgpKTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH07XG5cdGNvbnN0IGhhc0NsYXNzID0gKHtjbGFzc05hbWV9LCBuYW1lKSA9PiB7XG5cdFx0cmV0dXJuIGAgJHtjbGFzc05hbWV9IGAuaW5jbHVkZXMoYCAke25hbWV9IGApO1xuXHR9O1xuXHRjb25zdCBjYXBpdGFsaXplID0gKHN0cikgPT4ge1xuXHRcdGlmICghc3RyIHx8IHN0ci5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiBzdHI7XG5cdFx0fVxuXHRcdHJldHVybiBzdHIuc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcblx0fTtcblx0Y29uc3Qgd2lraVBhZ2VQYXRoID0gKHBhZ2VOYW1lKSA9PiB7XG5cdFx0cmV0dXJuIGNvbmYud2dBcnRpY2xlUGF0aC5yZXBsYWNlKCckMScsIGVuY29kZVVSSUNvbXBvbmVudChwYWdlTmFtZSkucmVwbGFjZSgvJTNBL2csICc6JykucmVwbGFjZSgvJTJGL2csICcvJykpO1xuXHR9O1xuXHRjb25zdCBlc2NhcGVSRSA9IChzdHIpID0+IHtcblx0XHRyZXR1cm4gc3RyLnJlcGxhY2UoLyhbJCgpKisuP1tcXFxcXFxdXl0pL2csIFN0cmluZy5yYXdgXFwkMWApO1xuXHR9O1xuXHRjb25zdCBzdWJzdGl0dXRlRmFjdG9yeSA9IChvcHRpb25zKSA9PiB7XG5cdFx0b3B0aW9ucyB8fD0ge307XG5cdFx0Y29uc3QgbGVhZCA9IG9wdGlvbnMuaW5kaWNhdG9yIHx8ICckJztcblx0XHRjb25zdCBpbmRpY2F0b3IgPSBlc2NhcGVSRShsZWFkKTtcblx0XHRjb25zdCBsYnJhY2UgPSBlc2NhcGVSRShvcHRpb25zLmxicmFjZSB8fCAneycpO1xuXHRcdGNvbnN0IHJicmFjZSA9IGVzY2FwZVJFKG9wdGlvbnMucmJyYWNlIHx8ICd9Jyk7XG5cdFx0Y29uc3QgcmUgPSBuZXcgUmVnRXhwKFxuXHRcdFx0Ly8gJCRcblx0XHRcdGAoPzoke2luZGljYXRvcn0oJHtpbmRpY2F0b3J9KSl8YCArXG5cdFx0XHRcdC8vICQwLCAkMVxuXHRcdFx0XHRgKD86JHtpbmRpY2F0b3J9KFxcXFxkKykpfGAgK1xuXHRcdFx0XHQvLyAke2tleX1cblx0XHRcdFx0YCg/OiR7aW5kaWNhdG9yfSg/OiR7bGJyYWNlfShbXiR7bGJyYWNlfSR7cmJyYWNlfV0rKSR7cmJyYWNlfSkpfGAgK1xuXHRcdFx0XHQvLyAka2V5IChvbmx5IGlmIGZpcnN0IGNoYXIgYWZ0ZXIgJCBpcyBub3QgJCwgZGlnaXQsIG9yIHsgKVxuXHRcdFx0XHRgKD86JHtpbmRpY2F0b3J9KD8hKD86WyR7aW5kaWNhdG9yfSR7bGJyYWNlfV18XFxcXGQpKShcXFxcUys/KVxcXFxiKWAsXG5cdFx0XHQnZydcblx0XHQpO1xuXHRcdC8vIFJlcGxhY2UgJDEsICQyLCBvciAke2tleTF9LCAke2tleTJ9LCBvciAka2V5MSwgJGtleTIgYnkgdmFsdWVzIGZyb20gbWFwLiAkJCBpcyByZXBsYWNlZCBieSBhIHNpbmdsZSAkLlxuXHRcdHJldHVybiAoc3RyLCBtYXApID0+IHtcblx0XHRcdGlmICghbWFwKSB7XG5cdFx0XHRcdHJldHVybiBzdHI7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gc3RyLnJlcGxhY2UocmUsIChtYXRjaCwgcHJlZml4LCBpZHgsIGtleSwgYWxwaGEpID0+IHtcblx0XHRcdFx0aWYgKHByZWZpeCA9PT0gbGVhZCkge1xuXHRcdFx0XHRcdHJldHVybiBsZWFkO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGsgPSBhbHBoYSB8fCBrZXkgfHwgaWR4O1xuXHRcdFx0XHRjb25zdCByZXBsYWNlbWVudCA9IHR5cGVvZiBtYXBba10gPT09ICdmdW5jdGlvbicgPyBtYXBba10obWF0Y2gsIGspIDogbWFwW2tdO1xuXHRcdFx0XHRyZXR1cm4gdHlwZW9mIHJlcGxhY2VtZW50ID09PSAnc3RyaW5nJyA/IHJlcGxhY2VtZW50IDogcmVwbGFjZW1lbnQgfHwgbWF0Y2g7XG5cdFx0XHR9KTtcblx0XHR9O1xuXHR9O1xuXHRjb25zdCByZXBsYWNlU2hvcnRjdXRzID0gKCgpID0+IHtcblx0XHRjb25zdCByZXBsYWNlSGFzaCA9IHN1YnN0aXR1dGVGYWN0b3J5KHtcblx0XHRcdGluZGljYXRvcjogJyMnLFxuXHRcdFx0bGJyYWNlOiAnWycsXG5cdFx0XHRyYnJhY2U6ICddJyxcblx0XHR9KTtcblx0XHRyZXR1cm4gKHN0ciwgbWFwKSA9PiB7XG5cdFx0XHRjb25zdCBzID0gcmVwbGFjZUhhc2goc3RyLCBtYXApO1xuXHRcdFx0cmV0dXJuIEhDLmNhcGl0YWxpemVQYWdlTmFtZXMgPyBjYXBpdGFsaXplKHMpIDogcztcblx0XHR9O1xuXHR9KSgpO1xuXHQvLyBUZXh0IG1vZGlmaWNhdGlvblxuXHRjb25zdCBmaW5kQ2F0c1JFID0gbmV3IFJlZ0V4cChcblx0XHRgXFxcXFtcXFxcWyR7d2lraVRleHRCbGFua09yQmlkaX0oPzoke0hDLmNhdGVnb3J5X3JlZ2V4cH0pJHt3aWtpVGV4dEJsYW5rT3JCaWRpfTpbXlxcXFxdXStcXFxcXVxcXFxdYCxcblx0XHQnZydcblx0KTtcblx0Y29uc3QgcmVwbGFjZUJ5QmxhbmtzID0gKG1hdGNoKSA9PiB7XG5cdFx0cmV0dXJuIG1hdGNoLnJlcGxhY2UoLyhcXHN8XFxTKS9nLCAnICcpO1xuXHR9OyAvLyAvLi8gZG9lc24ndCBtYXRjaCBsaW5lYnJlYWtzLiAvKFxcc3xcXFMpLyBkb2VzLlxuXHRjb25zdCBmaW5kX2NhdGVnb3J5ID0gKHdpa2l0ZXh0LCBjYXRlZ29yeSwgb25jZSkgPT4ge1xuXHRcdGxldCBjYXRfcmVnZXggPSBudWxsO1xuXHRcdGlmIChIQy50ZW1wbGF0ZV9jYXRlZ29yaWVzW2NhdGVnb3J5XSkge1xuXHRcdFx0Y2F0X3JlZ2V4ID0gbmV3IFJlZ0V4cChcblx0XHRcdFx0YFxcXFx7XFxcXHske3dpa2lUZXh0QmxhbmtPckJpZGl9KCR7SEMudGVtcGxhdGVfcmVnZXhwfSg/PSR7d2lraVRleHRCbGFua09yQmlkaX06KSk/JHt3aWtpVGV4dEJsYW5rT3JCaWRpfSg/OiR7SEMudGVtcGxhdGVfY2F0ZWdvcmllc1tjYXRlZ29yeV19KSR7d2lraVRleHRCbGFua09yQmlkaX0oXFxcXHwuKj8pP1xcXFx9XFxcXH1gLFxuXHRcdFx0XHQnZydcblx0XHRcdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IGNhdF9uYW1lID0gZXNjYXBlUkUoY2F0ZWdvcnkpO1xuXHRcdFx0Y29uc3QgaW5pdGlhbCA9IGNhdF9uYW1lLnNsaWNlKDAsIDEpO1xuXHRcdFx0Y2F0X3JlZ2V4ID0gbmV3IFJlZ0V4cChcblx0XHRcdFx0YFxcXFxbXFxcXFske3dpa2lUZXh0QmxhbmtPckJpZGl9KCR7SEMuY2F0ZWdvcnlfcmVnZXhwfSkke3dpa2lUZXh0QmxhbmtPckJpZGl9OiR7d2lraVRleHRCbGFua09yQmlkaX0ke1xuXHRcdFx0XHRcdGluaXRpYWwgPT09ICdcXFxcJyB8fCAhSEMuY2FwaXRhbGl6ZVBhZ2VOYW1lc1xuXHRcdFx0XHRcdFx0PyBpbml0aWFsXG5cdFx0XHRcdFx0XHQ6IGBbJHtpbml0aWFsLnRvVXBwZXJDYXNlKCl9JHtpbml0aWFsLnRvTG93ZXJDYXNlKCl9XWBcblx0XHRcdFx0fSR7Y2F0X25hbWUuc2xpY2UoMSkucmVwbGFjZSh3aWtpVGV4dEJsYW5rUkUsIHdpa2lUZXh0QmxhbmspfSR7d2lraVRleHRCbGFua09yQmlkaX0oXFxcXHwuKj8pP1xcXFxdXFxcXF1gLFxuXHRcdFx0XHQnZydcblx0XHRcdCk7XG5cdFx0fVxuXHRcdGlmIChvbmNlKSB7XG5cdFx0XHRyZXR1cm4gY2F0X3JlZ2V4LmV4ZWMod2lraXRleHQpO1xuXHRcdH1cblx0XHRjb25zdCBub3dpa2lSZWdleCA9IG5ldyBSZWdFeHAoJzxubycuY29uY2F0KCd3aWtpPicsIFN0cmluZy5yYXdgKFxcc3xcXFMpKj88L25vYCwgJ3dpa2knLCAnPicpLCAnZycpO1xuXHRcdGNvbnN0IGNvcGllZHRleHQgPSB3aWtpdGV4dC5yZXBsYWNlKC88IS0tKFxcc3xcXFMpKj8tLT4vZywgcmVwbGFjZUJ5QmxhbmtzKS5yZXBsYWNlKG5vd2lraVJlZ2V4LCByZXBsYWNlQnlCbGFua3MpO1xuXHRcdGNvbnN0IHJlc3VsdCA9IFtdO1xuXHRcdGxldCBjdXJyX21hdGNoID0gbnVsbDtcblx0XHR3aGlsZSAoKGN1cnJfbWF0Y2ggPSBjYXRfcmVnZXguZXhlYyhjb3BpZWR0ZXh0KSkgIT09IG51bGwpIHtcblx0XHRcdHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IHtcblx0XHRcdFx0bWF0Y2g6IGN1cnJfbWF0Y2gsXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRyZXN1bHQucmUgPSBjYXRfcmVnZXg7XG5cdFx0cmV0dXJuIHJlc3VsdDsgLy8gQW4gYXJyYXkgY29udGFpbmluZyBhbGwgbWF0Y2hlcywgd2l0aCBwb3NpdGlvbnMsIGluIHJlc3VsdFsgaSBdLm1hdGNoXG5cdH07XG5cdGxldCBpbnRlcmxhbmd1YWdlUkUgPSBudWxsO1xuXHRjb25zdCBjaGFuZ2VfY2F0ZWdvcnkgPSAod2lraXRleHQsIHRvUmVtb3ZlLCB0b0FkZCwga2V5LCBpc19oaWRkZW4pID0+IHtcblx0XHRjb25zdCBmaW5kX2luc2VydGlvbnBvaW50ID0gKF93aWtpdGV4dCkgPT4ge1xuXHRcdFx0Y29uc3Qgbm93aWtpUmVnZXggPSBuZXcgUmVnRXhwKCc8bm8nLmNvbmNhdCgnd2lraT4nLCBTdHJpbmcucmF3YChcXHN8XFxTKSo/PC9ub2AsICd3aWtpJywgJz4nKSwgJ2cnKTtcblx0XHRcdGNvbnN0IGNvcGllZHRleHQgPSBfd2lraXRleHRcblx0XHRcdFx0LnJlcGxhY2UoLzwhLS0oXFxzfFxcUykqPy0tPi9nLCByZXBsYWNlQnlCbGFua3MpXG5cdFx0XHRcdC5yZXBsYWNlKG5vd2lraVJlZ2V4LCByZXBsYWNlQnlCbGFua3MpO1xuXHRcdFx0Ly8gU2VhcmNoIGluIGNvcGllZHRleHQgdG8gYXZvaWQgdGhhdCB3ZSBpbnNlcnQgaW5zaWRlIGFuIEhUTUwgY29tbWVudCBvciBhIG5vd2lraSBcImVsZW1lbnRcIi5cblx0XHRcdGxldCBpbmRleCA9IC0xO1xuXHRcdFx0ZmluZENhdHNSRS5sYXN0SW5kZXggPSAwO1xuXHRcdFx0d2hpbGUgKGZpbmRDYXRzUkUuZXhlYyhjb3BpZWR0ZXh0KSAhPT0gbnVsbCkge1xuXHRcdFx0XHRpbmRleCA9IGZpbmRDYXRzUkUubGFzdEluZGV4O1xuXHRcdFx0fVxuXHRcdFx0aWYgKGluZGV4IDwgMCkge1xuXHRcdFx0XHQvLyBGaW5kIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgaW50ZXJsYW5ndWFnZSBsaW5rLi4uXG5cdFx0XHRcdGxldCBtYXRjaCA9IG51bGw7XG5cdFx0XHRcdGlmIChpbnRlcmxhbmd1YWdlUkUpIHtcblx0XHRcdFx0XHRtYXRjaCA9IGludGVybGFuZ3VhZ2VSRS5leGVjKGNvcGllZHRleHQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIEFwcHJveGltYXRpb24gd2l0aG91dCBBUEk6IGludGVybGFuZ3VhZ2UgbGlua3Mgc3RhcnQgd2l0aCAyIHRvIDMgbG93ZXIgY2FzZSBsZXR0ZXJzLCBvcHRpb25hbGx5IGZvbGxvd2VkIGJ5XG5cdFx0XHRcdFx0Ly8gYSBzZXF1ZW5jZSBvZiBncm91cHMgY29uc2lzdGluZyBvZiBhIGRhc2ggZm9sbG93ZWQgYnkgb25lIG9yIG1vcmUgbG93ZXIgY2FzZSBsZXR0ZXJzLiBFeGNlcHRpb25zIGFyZSBcInNpbXBsZVwiXG5cdFx0XHRcdFx0Ly8gYW5kIFwidG9raXBvbmFcIi5cblx0XHRcdFx0XHRtYXRjaCA9IC8oKF58XFxuXFxyPykoXFxbXFxbXFxzKigoW2Etel17MiwzfSgtW2Etel0rKSopfHNpbXBsZXx0b2tpcG9uYSlcXHMqOlteXFxdXStdXVxccyopKSskLy5leGVjKFxuXHRcdFx0XHRcdFx0Y29waWVkdGV4dFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG1hdGNoKSB7XG5cdFx0XHRcdFx0KHtpbmRleH0gPSBtYXRjaCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRpZHg6IGluZGV4LFxuXHRcdFx0XHRcdG9uQ2F0OiBmYWxzZSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGlkeDogaW5kZXgsXG5cdFx0XHRcdG9uQ2F0OiBpbmRleCA+PSAwLFxuXHRcdFx0fTtcblx0XHR9O1xuXHRcdGNvbnN0IHN1bW1hcnkgPSBbXTtcblx0XHRjb25zdCBuYW1lU3BhY2UgPSBIQy5jYXRlZ29yeV9jYW5vbmljYWw7XG5cdFx0Y29uc3QgLy8gUG9zaXRpb24gb2YgcmVtb3ZlZCBjYXRlZ29yeTtcblx0XHRcdGtleUNoYW5nZSA9IHRvUmVtb3ZlICYmIHRvQWRkICYmIHRvUmVtb3ZlID09PSB0b0FkZCAmJiB0b0FkZC5sZW5ndGggPiAwO1xuXHRcdGxldCBtYXRjaGVzO1xuXHRcdGxldCBjYXRfcG9pbnQgPSAtMTtcblx0XHRrZXkgJiY9IGB8JHtrZXl9YDtcblx0XHQvLyBSZW1vdmVcblx0XHRpZiAodG9SZW1vdmUgJiYgdG9SZW1vdmUubGVuZ3RoID4gMCkge1xuXHRcdFx0bWF0Y2hlcyA9IGZpbmRfY2F0ZWdvcnkod2lraXRleHQsIHRvUmVtb3ZlKTtcblx0XHRcdGlmICghbWF0Y2hlcyB8fCBtYXRjaGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHRleHQ6IHdpa2l0ZXh0LFxuXHRcdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdFx0ZXJyb3I6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLWNhdF9ub3RGb3VuZCcsIHRvUmVtb3ZlKSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGxldCBiZWZvcmUgPSB3aWtpdGV4dC5zbGljZSgwLCBNYXRoLm1heCgwLCBtYXRjaGVzWzBdLm1hdGNoLmluZGV4KSk7XG5cdFx0XHRsZXQgYWZ0ZXIgPSB3aWtpdGV4dC5zbGljZShNYXRoLm1heCgwLCBtYXRjaGVzWzBdLm1hdGNoLmluZGV4ICsgbWF0Y2hlc1swXS5tYXRjaFswXS5sZW5ndGgpKTtcblx0XHRcdGlmIChtYXRjaGVzLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0Ly8gUmVtb3ZlIGFsbCBvY2N1cnJlbmNlcyBpbiBhZnRlclxuXHRcdFx0XHRtYXRjaGVzLnJlLmxhc3RJbmRleCA9IDA7XG5cdFx0XHRcdGFmdGVyID0gYWZ0ZXIucmVwbGFjZShtYXRjaGVzLnJlLCAnJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHRvQWRkICYmIC8vIG5hbWVTcGFjZSA9IG1hdGNoZXNbIDAgXS5tYXRjaFsgMSBdIHx8IG5hbWVTcGFjZTsgQ2Fub25pY2FsIG5hbWVzcGFjZSBzaG91bGQgYmUgYWx3YXlzIHByZWZlcnJlZFxuXHRcdFx0XHRrZXkgPT09IG51bGxcblx0XHRcdCkge1xuXHRcdFx0XHRbLCAsIGtleV0gPSBtYXRjaGVzWzBdLm1hdGNoO1xuXHRcdFx0fVxuXHRcdFx0Ly8gUmVtZW1iZXIgdGhlIGNhdGVnb3J5IGtleSwgaWYgYW55LlxuXHRcdFx0Ly8gUmVtb3ZlIHdoaXRlc3BhY2UgKHByb3Blcmx5KTogc3RyaXAgd2hpdGVzcGFjZSwgYnV0IG9ubHkgdXAgdG8gdGhlIG5leHQgbGluZSBmZWVkLlxuXHRcdFx0Ly8gSWYgd2UgdGhlbiBoYXZlIHR3byBsaW5lZmVlZHMgaW4gYSByb3csIHJlbW92ZSBvbmUuIE90aGVyd2lzZSwgaWYgd2UgaGF2ZSB0d28gbm9uLVxuXHRcdFx0Ly8gd2hpdGVzcGFjZSBjaGFyYWN0ZXJzLCBpbnNlcnQgYSBibGFuay5cblx0XHRcdGxldCBpID0gYmVmb3JlLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+PSAwICYmIGJlZm9yZS5jaGFyQXQoaSkgIT09ICdcXG4nICYmIGJlZm9yZS5zbGljZShpLCBpICsgMSkuc2VhcmNoKC9cXHMvKSA+PSAwKSB7XG5cdFx0XHRcdGktLTtcblx0XHRcdH1cblx0XHRcdGxldCBqID0gMDtcblx0XHRcdHdoaWxlIChqIDwgYWZ0ZXIubGVuZ3RoICYmIGFmdGVyLmNoYXJBdChqKSAhPT0gJ1xcbicgJiYgYWZ0ZXIuc2xpY2UoaiwgaiArIDEpLnNlYXJjaCgvXFxzLykgPj0gMCkge1xuXHRcdFx0XHRqKys7XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGkgPj0gMCAmJlxuXHRcdFx0XHRiZWZvcmUuY2hhckF0KGkpID09PSAnXFxuJyAmJlxuXHRcdFx0XHQoYWZ0ZXIubGVuZ3RoID09PSAwIHx8IChqIDwgYWZ0ZXIubGVuZ3RoICYmIGFmdGVyLmNoYXJBdChqKSA9PT0gJ1xcbicpKVxuXHRcdFx0KSB7XG5cdFx0XHRcdGktLTtcblx0XHRcdH1cblx0XHRcdGJlZm9yZSA9IGkgPj0gMCA/IGJlZm9yZS5zbGljZSgwLCBNYXRoLm1heCgwLCBpICsgMSkpIDogJyc7XG5cdFx0XHRhZnRlciA9IGogPCBhZnRlci5sZW5ndGggPyBhZnRlci5zbGljZShNYXRoLm1heCgwLCBqKSkgOiAnJztcblx0XHRcdGlmIChcblx0XHRcdFx0YmVmb3JlLmxlbmd0aCA+IDAgJiZcblx0XHRcdFx0YmVmb3JlLnNsaWNlKE1hdGgubWF4KDAsIGJlZm9yZS5sZW5ndGggLSAxKSkuc2VhcmNoKC9cXFMvKSA+PSAwICYmXG5cdFx0XHRcdGFmdGVyLmxlbmd0aCA+IDAgJiZcblx0XHRcdFx0YWZ0ZXIuc2xpY2UoMCwgMSkuc2VhcmNoKC9cXFMvKSA+PSAwXG5cdFx0XHQpIHtcblx0XHRcdFx0YmVmb3JlICs9ICcgJztcblx0XHRcdH1cblx0XHRcdGNhdF9wb2ludCA9IGJlZm9yZS5sZW5ndGg7XG5cdFx0XHRpZiAoY2F0X3BvaW50ID09PSAwICYmIGFmdGVyLmxlbmd0aCA+IDAgJiYgYWZ0ZXIuc2xpY2UoMCwgMSkgPT09ICdcXG4nKSB7XG5cdFx0XHRcdGFmdGVyID0gYWZ0ZXIuc2xpY2UoMSk7XG5cdFx0XHR9XG5cdFx0XHR3aWtpdGV4dCA9IGJlZm9yZSArIGFmdGVyO1xuXHRcdFx0aWYgKCFrZXlDaGFuZ2UpIHtcblx0XHRcdFx0aWYgKEhDLnRlbXBsYXRlX2NhdGVnb3JpZXNbdG9SZW1vdmVdKSB7XG5cdFx0XHRcdFx0c3VtbWFyeVtzdW1tYXJ5Lmxlbmd0aF0gPSBnZXRNZXNzYWdlKCdtZXNzYWdlcy10ZW1wbGF0ZV9yZW1vdmVkJywgdG9SZW1vdmUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHN1bW1hcnlbc3VtbWFyeS5sZW5ndGhdID0gZ2V0TWVzc2FnZSgnbWVzc2FnZXMtY2F0X3JlbW92ZWQnLCB0b1JlbW92ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gQWRkXG5cdFx0aWYgKHRvQWRkICYmIHRvQWRkLmxlbmd0aCA+IDApIHtcblx0XHRcdG1hdGNoZXMgPSBmaW5kX2NhdGVnb3J5KHdpa2l0ZXh0LCB0b0FkZCk7XG5cdFx0XHRpZiAobWF0Y2hlcyAmJiBtYXRjaGVzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0Ly8gQWxyZWFkeSBleGlzdHNcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0ZXh0OiB3aWtpdGV4dCxcblx0XHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHRcdGVycm9yOiBnZXRNZXNzYWdlKCdtZXNzYWdlcy1jYXRfZXhpc3RzJywgdG9BZGQpLFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0bGV0IG9uQ2F0ID0gZmFsc2U7XG5cdFx0XHRpZiAoY2F0X3BvaW50IDwgMCkge1xuXHRcdFx0XHRjb25zdCBwb2ludCA9IGZpbmRfaW5zZXJ0aW9ucG9pbnQod2lraXRleHQpO1xuXHRcdFx0XHRjYXRfcG9pbnQgPSBwb2ludC5pZHg7XG5cdFx0XHRcdCh7b25DYXR9ID0gcG9pbnQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b25DYXQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgbmV3Y2F0c3RyaW5nID0gYFtbJHtuYW1lU3BhY2V9OiR7dG9BZGR9JHtrZXkgfHwgJyd9XV1gO1xuXHRcdFx0aWYgKGNhdF9wb2ludCA+PSAwKSB7XG5cdFx0XHRcdGNvbnN0IHN1ZmZpeCA9IHdpa2l0ZXh0LnNsaWNlKE1hdGgubWF4KDAsIGNhdF9wb2ludCkpO1xuXHRcdFx0XHR3aWtpdGV4dCA9XG5cdFx0XHRcdFx0d2lraXRleHQuc2xpY2UoMCwgTWF0aC5tYXgoMCwgY2F0X3BvaW50KSkgK1xuXHRcdFx0XHRcdChjYXRfcG9pbnQgPiAwID8gJ1xcbicgOiAnJykgK1xuXHRcdFx0XHRcdG5ld2NhdHN0cmluZyArXG5cdFx0XHRcdFx0KG9uQ2F0ID8gJycgOiAnXFxuJyk7XG5cdFx0XHRcdHdpa2l0ZXh0ICs9IHN1ZmZpeC5sZW5ndGggPiAwICYmIHN1ZmZpeC5zbGljZSgwLCAxKSAhPT0gJ1xcbicgPyBgXFxuJHtzdWZmaXh9YCA6IHN1ZmZpeDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICh3aWtpdGV4dC5sZW5ndGggPiAwICYmIHdpa2l0ZXh0LnNsaWNlKC0xLCB3aWtpdGV4dC5sZW5ndGggLSAxICsgMSkgIT09ICdcXG4nKSB7XG5cdFx0XHRcdFx0d2lraXRleHQgKz0gJ1xcbic7XG5cdFx0XHRcdH1cblx0XHRcdFx0d2lraXRleHQgKz0gKHdpa2l0ZXh0Lmxlbmd0aCA+IDAgPyAnXFxuJyA6ICcnKSArIG5ld2NhdHN0cmluZztcblx0XHRcdH1cblx0XHRcdGlmIChrZXlDaGFuZ2UpIHtcblx0XHRcdFx0bGV0IGsgPSBrZXkgfHwgJyc7XG5cdFx0XHRcdGlmIChrLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRrID0gay5zbGljZSgxKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzdW1tYXJ5W3N1bW1hcnkubGVuZ3RoXSA9IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLWNhdF9rZXljaGFuZ2UnLCB0b0FkZCwgayk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzdW1tYXJ5W3N1bW1hcnkubGVuZ3RoXSA9IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLWNhdF9hZGRlZCcsIHRvQWRkKTtcblx0XHRcdH1cblx0XHRcdGlmIChIQy51bmNhdF9yZWdleHAgJiYgIWlzX2hpZGRlbikge1xuXHRcdFx0XHRjb25zdCB0eHQgPSB3aWtpdGV4dC5yZXBsYWNlKEhDLnVuY2F0X3JlZ2V4cCwgJycpOyAvLyBSZW1vdmUgXCJ1bmNhdFwiIHRlbXBsYXRlc1xuXHRcdFx0XHRpZiAodHh0Lmxlbmd0aCAhPT0gd2lraXRleHQubGVuZ3RoKSB7XG5cdFx0XHRcdFx0d2lraXRleHQgPSB0eHQ7XG5cdFx0XHRcdFx0c3VtbWFyeVtzdW1tYXJ5Lmxlbmd0aF0gPSBnZXRNZXNzYWdlKCdtZXNzYWdlcy11bmNhdF9yZW1vdmVkJyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRleHQ6IHdpa2l0ZXh0LFxuXHRcdFx0c3VtbWFyeSxcblx0XHRcdGVycm9yOiBudWxsLFxuXHRcdH07XG5cdH07XG5cdC8vIFRoZSByZWFsIEhvdENhdCBVSVxuXHRjb25zdCBldnRLZXlzID0gKHtjdHJsS2V5LCBtZXRhS2V5LCBzaGlmdEtleX0pID0+IHtcblx0XHRsZXQgY29kZSA9IDA7XG5cdFx0aWYgKGN0cmxLZXkpIHtcblx0XHRcdC8vIEFsbCBtb2Rlcm4gYnJvd3NlcnNcblx0XHRcdC8vIEN0cmwtY2xpY2sgc2VlbXMgdG8gYmUgb3ZlcmxvYWRlZCBpbiBGRi9NYWMgKGl0IG9wZW5zIGEgcG9wLXVwIG1lbnUpLCBzbyB0cmVhdCBjbWQtY2xpY2tcblx0XHRcdC8vIGFzIGEgY3RybC1jbGljaywgdG9vLlxuXHRcdFx0aWYgKGN0cmxLZXkgfHwgbWV0YUtleSkge1xuXHRcdFx0XHRjb2RlIHx8PSAxO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHNoaWZ0S2V5KSB7XG5cdFx0XHRcdGNvZGUgfHw9IDI7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBjb2RlO1xuXHR9O1xuXHRjb25zdCBldnRLaWxsID0gKGUpID0+IHtcblx0XHRpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZS5jYW5jZWxCdWJibGUgPSB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cdGxldCBjYXRMaW5lID0gbnVsbDsgLy8gdHJ1ZSBpZiBNZWRpYVdpa2kgc2VydmVzIHRoZSBuZXcgVUwtTEkgRE9NIGZvciBjYXRlZ29yaWVzXG5cdGxldCBvblVwbG9hZCA9IGZhbHNlO1xuXHRsZXQgZWRpdG9ycyA9IFtdO1xuXHRsZXQgY29tbWl0QnV0dG9uID0gbnVsbDtcblx0bGV0IGNvbW1pdEZvcm0gPSBudWxsO1xuXHRsZXQgbXVsdGlTcGFuID0gbnVsbDtcblx0bGV0IHBhZ2VUZXh0ID0gbnVsbDtcblx0bGV0IHBhZ2VUaW1lID0gbnVsbDtcblx0bGV0IHBhZ2VXYXRjaGVkID0gZmFsc2U7XG5cdGxldCB3YXRjaENyZWF0ZSA9IGZhbHNlO1xuXHRsZXQgd2F0Y2hFZGl0ID0gZmFsc2U7XG5cdGxldCBtaW5vckVkaXRzID0gZmFsc2U7XG5cdGxldCBlZGl0VG9rZW4gPSBudWxsO1xuXHRsZXQgaXNfcnRsID0gZmFsc2U7XG5cdGxldCBzZXJ2ZXJUaW1lID0gbnVsbDtcblx0bGV0IGxhc3RSZXZJZCA9IG51bGw7XG5cdGxldCBwYWdlVGV4dFJldklkID0gbnVsbDtcblx0bGV0IGNvbmZsaWN0aW5nVXNlciA9IG51bGw7XG5cdGxldCBuZXdET00gPSBmYWxzZTtcblx0Y29uc3QgVU5DSEFOR0VEID0gMDtcblx0Y29uc3QgT1BFTiA9IDE7IC8vIE9wZW4sIGJ1dCBubyBpbnB1dCB5ZXRcblx0Y29uc3QgQ0hBTkdFX1BFTkRJTkcgPSAyOyAvLyBPcGVuLCBzb21lIGlucHV0IG1hZGVcblx0Y29uc3QgQ0hBTkdFRCA9IDM7XG5cdGNvbnN0IERFTEVURUQgPSA0O1xuXHRjb25zdCBzZXRQYWdlID0gKGRhdGEpID0+IHtcblx0XHRsZXQgc3RhcnRUaW1lID0gbnVsbDtcblx0XHRpZiAoZGF0YSAmJiBkYXRhLnF1ZXJ5KSB7XG5cdFx0XHRpZiAoZGF0YS5xdWVyeS5wYWdlcykge1xuXHRcdFx0XHRjb25zdCBbcGFnZV0gPSBkYXRhLnF1ZXJ5LnBhZ2VzO1xuXHRcdFx0XHRpZiAocGFnZSkge1xuXHRcdFx0XHRcdGlmIChwYWdlLnJldmlzaW9ucyAmJiBwYWdlLnJldmlzaW9ucy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHQvLyBSZXZpc2lvbnMgYXJlIHNvcnRlZCBieSByZXZpc2lvbiBJRCwgaGVuY2UgWzBdIGlzIHRoZSBvbmUgd2UgYXNrZWQgZm9yLCBhbmQgcG9zc2libHkgdGhlcmUncyBhIFsxXSBpZiB3ZSdyZVxuXHRcdFx0XHRcdFx0Ly8gbm90IG9uIHRoZSBsYXRlc3QgcmV2aXNpb24gKGVkaXQgY29uZmxpY3RzIGFuZCBzdWNoKS5cblx0XHRcdFx0XHRcdHBhZ2VUZXh0ID0gcGFnZS5yZXZpc2lvbnNbMF0uc2xvdHMubWFpbi5jb250ZW50O1xuXHRcdFx0XHRcdFx0aWYgKHBhZ2UucmV2aXNpb25zWzBdLnRpbWVzdGFtcCkge1xuXHRcdFx0XHRcdFx0XHRwYWdlVGltZSA9IHBhZ2UucmV2aXNpb25zWzBdLnRpbWVzdGFtcC5yZXBsYWNlKC9cXEQvZywgJycpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKHBhZ2UucmV2aXNpb25zWzBdLnJldmlkKSB7XG5cdFx0XHRcdFx0XHRcdHBhZ2VUZXh0UmV2SWQgPSBwYWdlLnJldmlzaW9uc1swXS5yZXZpZDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmIChwYWdlLnJldmlzaW9ucy5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0XHRcdGNvbmZsaWN0aW5nVXNlciA9IHBhZ2UucmV2aXNpb25zWzFdLnVzZXI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChwYWdlLmxhc3RyZXZpZCkge1xuXHRcdFx0XHRcdFx0bGFzdFJldklkID0gcGFnZS5sYXN0cmV2aWQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChwYWdlLnN0YXJ0dGltZXN0YW1wKSB7XG5cdFx0XHRcdFx0XHRzdGFydFRpbWUgPSBwYWdlLnN0YXJ0dGltZXN0YW1wLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHBhZ2VXYXRjaGVkID0gdHlwZW9mIHBhZ2Uud2F0Y2hlZCA9PT0gJ3N0cmluZyc7XG5cdFx0XHRcdFx0aWYgKGRhdGEucXVlcnkudG9rZW5zKSB7XG5cdFx0XHRcdFx0XHRlZGl0VG9rZW4gPSBkYXRhLnF1ZXJ5LnRva2Vucy5jc3JmdG9rZW47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChwYWdlLmxhbmdsaW5rcyAmJiAoIWRhdGFbJ3F1ZXJ5LWNvbnRpbnVlJ10gfHwgIWRhdGFbJ3F1ZXJ5LWNvbnRpbnVlJ10ubGFuZ2xpbmtzKSkge1xuXHRcdFx0XHRcdFx0Ly8gV2UgaGF2ZSBpbnRlcmxhbmd1YWdlIGxpbmtzLCBhbmQgd2UgZ290IHRoZW0gYWxsLlxuXHRcdFx0XHRcdFx0bGV0IHJlID0gJyc7XG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHBhZ2UubGFuZ2xpbmtzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRcdHJlICs9XG5cdFx0XHRcdFx0XHRcdFx0KGkgPiAwID8gJ3wnIDogJycpICsgcGFnZS5sYW5nbGlua3NbaV0ubGFuZy5yZXBsYWNlKC8oWyQoKSorLj9cXFxcXl0pL2csIFN0cmluZy5yYXdgXFwkMWApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKHJlLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdFx0aW50ZXJsYW5ndWFnZVJFID0gbmV3IFJlZ0V4cChgKChefFxcXFxuXFxcXHI/KShcXFxcW1xcXFxbXFxcXHMqKCR7cmV9KVxcXFxzKjpbXlxcXFxdXStcXFxcXVxcXFxdXFxcXHMqKSkrJGApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gU2l0ZWluZm9cblx0XHRcdGlmIChkYXRhLnF1ZXJ5LmdlbmVyYWwpIHtcblx0XHRcdFx0aWYgKGRhdGEucXVlcnkuZ2VuZXJhbC50aW1lICYmICFzdGFydFRpbWUpIHtcblx0XHRcdFx0XHRzdGFydFRpbWUgPSBkYXRhLnF1ZXJ5LmdlbmVyYWwudGltZS5yZXBsYWNlKC9cXEQvZywgJycpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChIQy5jYXBpdGFsaXplUGFnZU5hbWVzID09PSBudWxsKSB7XG5cdFx0XHRcdFx0Ly8gUmVzb3VyY2VMb2FkZXIncyBKU1BhcnNlciBkb2Vzbid0IGxpa2UgLmNhc2UsIHNvIG92ZXJyaWRlIGVzbGludC5cblx0XHRcdFx0XHRIQy5jYXBpdGFsaXplUGFnZU5hbWVzID0gZGF0YS5xdWVyeS5nZW5lcmFsLmNhc2UgPT09ICdmaXJzdC1sZXR0ZXInO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRzZXJ2ZXJUaW1lID0gc3RhcnRUaW1lO1xuXHRcdFx0Ly8gVXNlcmluZm9cblx0XHRcdGlmIChkYXRhLnF1ZXJ5LnVzZXJpbmZvICYmIGRhdGEucXVlcnkudXNlcmluZm8ub3B0aW9ucykge1xuXHRcdFx0XHR3YXRjaENyZWF0ZSA9ICFIQy5kb250X2FkZF90b193YXRjaGxpc3QgJiYgZGF0YS5xdWVyeS51c2VyaW5mby5vcHRpb25zLndhdGNoY3JlYXRpb25zID09PSAnMSc7XG5cdFx0XHRcdHdhdGNoRWRpdCA9ICFIQy5kb250X2FkZF90b193YXRjaGxpc3QgJiYgZGF0YS5xdWVyeS51c2VyaW5mby5vcHRpb25zLndhdGNoZGVmYXVsdCA9PT0gJzEnO1xuXHRcdFx0XHRtaW5vckVkaXRzID0gZGF0YS5xdWVyeS51c2VyaW5mby5vcHRpb25zLm1pbm9yZGVmYXVsdCA9PT0gMTtcblx0XHRcdFx0Ly8gSWYgdGhlIHVzZXIgaGFzIHRoZSBcIkFsbCBlZGl0cyBhcmUgbWlub3JcIiBwcmVmZXJlbmNlIGVuYWJsZWQsIHdlIHNob3VsZCBob25vciB0aGF0XG5cdFx0XHRcdC8vIGZvciBzaW5nbGUgY2F0ZWdvcnkgY2hhbmdlcywgbm8gbWF0dGVyIHdoYXQgdGhlIHNpdGUgY29uZmlndXJhdGlvbiBpcy5cblx0XHRcdFx0aWYgKG1pbm9yRWRpdHMpIHtcblx0XHRcdFx0XHRIQy5zaW5nbGVfbWlub3IgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRsZXQgc2F2ZUluUHJvZ3Jlc3MgPSBmYWxzZTtcblx0Y29uc3QgaW5pdGlhdGVFZGl0ID0gKGRvRWRpdCwgZmFpbHVyZSkgPT4ge1xuXHRcdGlmIChzYXZlSW5Qcm9ncmVzcykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRzYXZlSW5Qcm9ncmVzcyA9IHRydWU7XG5cdFx0bGV0IG9sZEJ1dHRvblN0YXRlO1xuXHRcdGlmIChjb21taXRCdXR0b24pIHtcblx0XHRcdG9sZEJ1dHRvblN0YXRlID0gY29tbWl0QnV0dG9uLmRpc2FibGVkO1xuXHRcdFx0Y29tbWl0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcblx0XHR9XG5cdFx0Y29uc3QgZmFpbCA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG5cdFx0XHRzYXZlSW5Qcm9ncmVzcyA9IGZhbHNlO1xuXHRcdFx0aWYgKGNvbW1pdEJ1dHRvbikge1xuXHRcdFx0XHRjb21taXRCdXR0b24uZGlzYWJsZWQgPSBvbGRCdXR0b25TdGF0ZTtcblx0XHRcdH1cblx0XHRcdGZhaWx1cmUuYXBwbHkodGhpcywgYXJncyk7XG5cdFx0fTtcblx0XHQvLyBNdXN0IHVzZSBBamF4IGhlcmUgdG8gZ2V0IHRoZSB1c2VyIG9wdGlvbnMgYW5kIHRoZSBlZGl0IHRva2VuLlxuXHRcdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0cmF3Y29udGludWU6ICcnLFxuXHRcdFx0dGl0bGVzOiBjb25mLndnUGFnZU5hbWUsXG5cdFx0XHRwcm9wOiBbJ2luZm8nLCAncmV2aXNpb25zJywgJ2xhbmdsaW5rcyddLFxuXHRcdFx0aW5wcm9wOiAnd2F0Y2hlZCcsXG5cdFx0XHRydnByb3A6IFsnY29udGVudCcsICd0aW1lc3RhbXAnLCAnaWRzJywgJ3VzZXInXSxcblx0XHRcdHJ2c2xvdHM6ICdtYWluJyxcblx0XHRcdHJ2bGltaXQ6ICcyJyxcblx0XHRcdHJ2ZGlyOiAnbmV3ZXInLFxuXHRcdFx0cnZzdGFydGlkOiBjb25mLndnQ3VyUmV2aXNpb25JZCxcblx0XHRcdGxsbGltaXQ6ICc1MDAnLFxuXHRcdFx0bWV0YTogWydzaXRlaW5mbycsICd1c2VyaW5mbycsICd0b2tlbnMnXSxcblx0XHRcdHR5cGU6ICdjc3JmJyxcblx0XHRcdHVpcHJvcDogWydvcHRpb25zJ10sXG5cdFx0fTtcblx0XHRhcGkuZ2V0KHBhcmFtcylcblx0XHRcdC5kb25lKChkYXRhKSA9PiB7XG5cdFx0XHRcdHNldFBhZ2UoZGF0YSk7XG5cdFx0XHRcdGRvRWRpdChmYWlsKTtcblx0XHRcdH0pXG5cdFx0XHQuZmFpbCgoe3N0YXR1cywgc3RhdHVzVGV4dH0pID0+IHtcblx0XHRcdFx0ZmFpbChgJHtzdGF0dXN9ICR7c3RhdHVzVGV4dH1gKTtcblx0XHRcdH0pO1xuXHR9O1xuXHRjb25zdCBtdWx0aUNoYW5nZU1zZyA9IChjb3VudCkgPT4ge1xuXHRcdHJldHVybiBnZXRNZXNzYWdlKCdtZXNzYWdlcy1tdWx0aV9jaGFuZ2UnLCBTdHJpbmcoY291bnQpKTtcblx0fTtcblx0Y29uc3QgY3VycmVudFRpbWVzdGFtcCA9ICgpID0+IHtcblx0XHRjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuXHRcdGxldCB0cyA9IFN0cmluZyhub3cuZ2V0VVRDRnVsbFllYXIoKSk7XG5cdFx0Y29uc3QgdHdvID0gKHMpID0+IHtcblx0XHRcdHJldHVybiBzLnNsaWNlKC0yKTtcblx0XHR9O1xuXHRcdHRzICs9XG5cdFx0XHR0d28oYDAke25vdy5nZXRVVENNb250aCgpICsgMX1gKSArXG5cdFx0XHR0d28oYDAke25vdy5nZXRVVENEYXRlKCl9YCkgK1xuXHRcdFx0dHdvKGAwMCR7bm93LmdldFVUQ0hvdXJzKCl9YCkgK1xuXHRcdFx0dHdvKGAwMCR7bm93LmdldFVUQ01pbnV0ZXMoKX1gKSArXG5cdFx0XHR0d28oYDAwJHtub3cuZ2V0VVRDU2Vjb25kcygpfWApO1xuXHRcdHJldHVybiB0cztcblx0fTtcblx0Y29uc3QgcGVyZm9ybUNoYW5nZXMgPSAoZmFpbHVyZSwgc2luZ2xlRWRpdG9yKSA9PiB7XG5cdFx0aWYgKHBhZ2VUZXh0ID09PSBudWxsKSB7XG5cdFx0XHRmYWlsdXJlKGdldE1lc3NhZ2UoJ21lc3NhZ2VzLW11bHRpX2Vycm9yJykpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHQvLyBDcmVhdGUgYSBmb3JtIGFuZCBzdWJtaXQgaXQuIFdlIGRvbid0IHVzZSB0aGUgZWRpdCBBUEkgKGFwaS5waHA/YWN0aW9uPWVkaXQpIGJlY2F1c2Vcblx0XHQvLyAoYSkgc2Vuc2libHkgcmVwb3J0aW5nIGJhY2sgZXJyb3JzIGxpa2UgZWRpdCBjb25mbGljdHMgaXMgYWx3YXlzIGEgaGFzc2xlLCBhbmRcblx0XHQvLyAoYikgd2Ugd2FudCB0byBzaG93IGEgZGlmZiBmb3IgbXVsdGktZWRpdHMgYW55d2F5LCBhbmRcblx0XHQvLyAoYykgd2Ugd2FudCB0byB0cmlnZ2VyIG9uc3VibWl0IGV2ZW50cywgYWxsb3dpbmcgdXNlciBjb2RlIHRvIGludGVyY2VwdCB0aGUgZWRpdC5cblx0XHQvLyBVc2luZyB0aGUgZm9ybSwgd2UgY2FuIGRvIChiKSBhbmQgKGMpLCBhbmQgd2UgZ2V0IChhKSBmb3IgZnJlZS4gQW5kLCBvZiBjb3Vyc2UsIHVzaW5nIHRoZSBmb3JtXG5cdFx0Ly8gYXV0b21hdGljYWxseSByZWxvYWRzIHRoZSBwYWdlIHdpdGggdGhlIHVwZGF0ZWQgY2F0ZWdvcmllcyBvbiBhIHN1Y2Nlc3NmdWwgc3VibWl0LCB3aGljaFxuXHRcdC8vIHdlIHdvdWxkIGhhdmUgdG8gZG8gZXhwbGljaXRseSBpZiB3ZSB1c2VkIHRoZSBlZGl0IEFQSS5cblx0XHRsZXQgYWN0aW9uO1xuXHRcdC8vIE5vcm1hbGx5LCB3ZSBkb24ndCBoYXZlIHRvIGNhcmUgYWJvdXQgZWRpdCBjb25mbGljdHMuIElmIHNvbWUgb3RoZXIgdXNlciBlZGl0ZWQgdGhlIHBhZ2UgaW4gdGhlIG1lYW50aW1lLCB0aGVcblx0XHQvLyBzZXJ2ZXIgd2lsbCB0YWtlIGNhcmUgb2YgaXQgYW5kIG1lcmdlIHRoZSBlZGl0IGF1dG9tYXRpY2FsbHkgb3IgcHJlc2VudCBhbiBlZGl0IGNvbmZsaWN0IHNjcmVlbi4gSG93ZXZlciwgdGhlXG5cdFx0Ly8gc2VydmVyIHN1cHByZXNzZXMgZWRpdCBjb25mbGljdHMgd2l0aCBvbmVzZWxmLiBIZW5jZSwgaWYgd2UgaGF2ZSBhIGNvbmZsaWN0LCBhbmQgdGhlIGNvbmZsaWN0aW5nIHVzZXIgaXMgdGhlXG5cdFx0Ly8gY3VycmVudCB1c2VyLCB0aGVuIHdlIHNldCB0aGUgXCJvbGRpZFwiIHZhbHVlIGFuZCBzd2l0Y2ggdG8gZGlmZiwgd2hpY2ggZ2l2ZXMgdGhlIFwieW91IGFyZSBlZGl0aW5nIGFuIG9sZCB2ZXJzaW9uO1xuXHRcdC8vIGlmIHlvdSBzYXZlLCBhbnkgbW9yZSByZWNlbnQgY2hhbmdlcyB3aWxsIGJlIGxvc3RcIiBzY3JlZW4uXG5cdFx0Y29uc3Qgc2VsZkVkaXRDb25mbGljdCA9XG5cdFx0XHQoKGxhc3RSZXZJZCAhPT0gbnVsbCAmJiBsYXN0UmV2SWQgIT09IGNvbmYud2dDdXJSZXZpc2lvbklkKSB8fFxuXHRcdFx0XHQocGFnZVRleHRSZXZJZCAhPT0gbnVsbCAmJiBwYWdlVGV4dFJldklkICE9PSBjb25mLndnQ3VyUmV2aXNpb25JZCkpICYmXG5cdFx0XHRjb25mbGljdGluZ1VzZXIgJiZcblx0XHRcdGNvbmZsaWN0aW5nVXNlciA9PT0gY29uZi53Z1VzZXJOYW1lO1xuXHRcdGlmIChzaW5nbGVFZGl0b3IgJiYgIXNpbmdsZUVkaXRvci5ub0NvbW1pdCAmJiAhSEMubm9fYXV0b2NvbW1pdCAmJiBlZGl0VG9rZW4gJiYgIXNlbGZFZGl0Q29uZmxpY3QpIHtcblx0XHRcdC8vIElmIHdlIGRvIGhhdmUgYW4gZWRpdCBjb25mbGljdCwgYnV0IG5vdCB3aXRoIG91cnNlbGYsIHRoYXQncyBubyByZWFzb24gbm90IHRvIGF0dGVtcHQgdG8gc2F2ZTogdGhlIHNlcnZlciBzaWRlIG1heSBhY3R1YWxseSBiZSBhYmxlIHRvXG5cdFx0XHQvLyBtZXJnZSB0aGUgY2hhbmdlcy4gV2UganVzdCBuZWVkIHRvIG1ha2Ugc3VyZSB0aGF0IHdlIGRvIHByZXNlbnQgYSBkaWZmIHZpZXcgaWYgaXQncyBhIHNlbGYgZWRpdCBjb25mbGljdC5cblx0XHRcdGNvbW1pdEZvcm0ud3BFZGl0VG9rZW4udmFsdWUgPSBlZGl0VG9rZW47XG5cdFx0XHRhY3Rpb24gPSBjb21taXRGb3JtLndwRGlmZjtcblx0XHRcdGlmIChhY3Rpb24pIHtcblx0XHRcdFx0YWN0aW9uLnZhbHVlID0gJ3dwU2F2ZSc7XG5cdFx0XHRcdGFjdGlvbi5uYW1lID0gYWN0aW9uLnZhbHVlO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRhY3Rpb24gPSBjb21taXRGb3JtLndwU2F2ZTtcblx0XHRcdGlmIChhY3Rpb24pIHtcblx0XHRcdFx0YWN0aW9uLnZhbHVlID0gJ3dwRGlmZic7XG5cdFx0XHRcdGFjdGlvbi5uYW1lID0gYWN0aW9uLnZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRsZXQgcmVzdWx0ID0ge1xuXHRcdFx0dGV4dDogcGFnZVRleHQsXG5cdFx0fTtcblx0XHRjb25zdCBjaGFuZ2VkID0gW107XG5cdFx0Y29uc3QgYWRkZWQgPSBbXTtcblx0XHRjb25zdCBkZWxldGVkID0gW107XG5cdFx0Y29uc3QgdG9FZGl0ID0gc2luZ2xlRWRpdG9yID8gW3NpbmdsZUVkaXRvcl0gOiBlZGl0b3JzO1xuXHRcdGxldCBlZGl0O1xuXHRcdGxldCBpO1xuXHRcdGxldCBlcnJvciA9IG51bGw7XG5cdFx0bGV0IGNoYW5nZXMgPSAwO1xuXHRcdGZvciAoaSA9IDA7IGkgPCB0b0VkaXQubGVuZ3RoOyBpKyspIHtcblx0XHRcdGVkaXQgPSB0b0VkaXRbaV07XG5cdFx0XHRpZiAoZWRpdC5zdGF0ZSA9PT0gQ0hBTkdFRCkge1xuXHRcdFx0XHRyZXN1bHQgPSBjaGFuZ2VfY2F0ZWdvcnkoXG5cdFx0XHRcdFx0cmVzdWx0LnRleHQsXG5cdFx0XHRcdFx0ZWRpdC5vcmlnaW5hbENhdGVnb3J5LFxuXHRcdFx0XHRcdGVkaXQuY3VycmVudENhdGVnb3J5LFxuXHRcdFx0XHRcdGVkaXQuY3VycmVudEtleSxcblx0XHRcdFx0XHRlZGl0LmN1cnJlbnRIaWRkZW5cblx0XHRcdFx0KTtcblx0XHRcdFx0aWYgKCFyZXN1bHQuZXJyb3IpIHtcblx0XHRcdFx0XHRjaGFuZ2VzKys7XG5cdFx0XHRcdFx0aWYgKCFlZGl0Lm9yaWdpbmFsQ2F0ZWdvcnkgfHwgZWRpdC5vcmlnaW5hbENhdGVnb3J5Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdFx0YWRkZWRbYWRkZWQubGVuZ3RoXSA9IGVkaXQuY3VycmVudENhdGVnb3J5O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjaGFuZ2VkW2NoYW5nZWQubGVuZ3RoXSA9IHtcblx0XHRcdFx0XHRcdFx0ZnJvbTogZWRpdC5vcmlnaW5hbENhdGVnb3J5LFxuXHRcdFx0XHRcdFx0XHR0bzogZWRpdC5jdXJyZW50Q2F0ZWdvcnksXG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmIChlcnJvciA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdCh7ZXJyb3J9ID0gcmVzdWx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChlZGl0LnN0YXRlID09PSBERUxFVEVEICYmIGVkaXQub3JpZ2luYWxDYXRlZ29yeSAmJiBlZGl0Lm9yaWdpbmFsQ2F0ZWdvcnkubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRyZXN1bHQgPSBjaGFuZ2VfY2F0ZWdvcnkocmVzdWx0LnRleHQsIGVkaXQub3JpZ2luYWxDYXRlZ29yeSwgbnVsbCwgbnVsbCwgZmFsc2UpO1xuXHRcdFx0XHRpZiAoIXJlc3VsdC5lcnJvcikge1xuXHRcdFx0XHRcdGNoYW5nZXMrKztcblx0XHRcdFx0XHRkZWxldGVkW2RlbGV0ZWQubGVuZ3RoXSA9IGVkaXQub3JpZ2luYWxDYXRlZ29yeTtcblx0XHRcdFx0fSBlbHNlIGlmIChlcnJvciA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdCh7ZXJyb3J9ID0gcmVzdWx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoZXJyb3IgIT09IG51bGwpIHtcblx0XHRcdC8vIERvIG5vdCBjb21taXQgaWYgdGhlcmUgd2VyZSBlcnJvcnNcblx0XHRcdGFjdGlvbiA9IGNvbW1pdEZvcm0ud3BTYXZlO1xuXHRcdFx0aWYgKGFjdGlvbikge1xuXHRcdFx0XHRhY3Rpb24udmFsdWUgPSAnd3BEaWZmJztcblx0XHRcdFx0YWN0aW9uLm5hbWUgPSBhY3Rpb24udmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIEZpbGwgaW4gdGhlIGZvcm0gYW5kIHN1Ym1pdCBpdFxuXHRcdGNvbW1pdEZvcm0ud3BNaW5vcmVkaXQuY2hlY2tlZCA9IG1pbm9yRWRpdHM7XG5cdFx0Y29tbWl0Rm9ybS53cFdhdGNodGhpcy5jaGVja2VkID0gKCFjb25mLndnQXJ0aWNsZUlkICYmIHdhdGNoQ3JlYXRlKSB8fCB3YXRjaEVkaXQgfHwgcGFnZVdhdGNoZWQ7XG5cdFx0aWYgKGNvbmYud2dBcnRpY2xlSWQgfHwgISFzaW5nbGVFZGl0b3IpIHtcblx0XHRcdC8vIFByZXBhcmUgY2hhbmdlLXRhZyBzYXZlXG5cdFx0XHRpZiAoYWN0aW9uICYmIGFjdGlvbi52YWx1ZSA9PT0gJ3dwU2F2ZScpIHtcblx0XHRcdFx0aWYgKEhDLmNoYW5nZVRhZykge1xuXHRcdFx0XHRcdGNvbW1pdEZvcm0ud3BDaGFuZ2VUYWdzLnZhbHVlID0gSEMuY2hhbmdlVGFnO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb21taXRGb3JtLndwQXV0b1N1bW1hcnkudmFsdWUgPSBIQy5jaGFuZ2VUYWc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY2hhbmdlcyA9PT0gMSkge1xuXHRcdFx0XHRpZiAocmVzdWx0LnN1bW1hcnkgJiYgcmVzdWx0LnN1bW1hcnkubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGNvbW1pdEZvcm0ud3BTdW1tYXJ5LnZhbHVlID1cblx0XHRcdFx0XHRcdChIQy5jaGFuZ2VUYWcgPyAnJyA6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXByZWZpeCcpKSArXG5cdFx0XHRcdFx0XHRyZXN1bHQuc3VtbWFyeS5qb2luKGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXNlcGFyYXRvcicpKSArXG5cdFx0XHRcdFx0XHQoSEMuY2hhbmdlVGFnID8gJycgOiBnZXRNZXNzYWdlKCdtZXNzYWdlcy11c2luZycpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb21taXRGb3JtLndwTWlub3JlZGl0LmNoZWNrZWQgPSBIQy5zaW5nbGVfbWlub3IgfHwgbWlub3JFZGl0cztcblx0XHRcdH0gZWxzZSBpZiAoY2hhbmdlcykge1xuXHRcdFx0XHRsZXQgc3VtbWFyeSA9IFtdO1xuXHRcdFx0XHRjb25zdCBzaG9ydFN1bW1hcnkgPSBbXTtcblx0XHRcdFx0Ly8gRGVsZXRlZFxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgZGVsZXRlZC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdHN1bW1hcnlbc3VtbWFyeS5sZW5ndGhdID0gYOKIkiR7Z2V0TWVzc2FnZSgnbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJywgZGVsZXRlZFtpXSl9YDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGVsZXRlZC5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0XHRzaG9ydFN1bW1hcnlbc2hvcnRTdW1tYXJ5Lmxlbmd0aF0gPSBg4oiSJHtnZXRNZXNzYWdlKCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLCBkZWxldGVkWzBdKX1gO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGRlbGV0ZWQubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHNob3J0U3VtbWFyeVtzaG9ydFN1bW1hcnkubGVuZ3RoXSA9IGDiiJIgJHttdWx0aUNoYW5nZU1zZyhkZWxldGVkLmxlbmd0aCl9YDtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBBZGRlZFxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYWRkZWQubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRzdW1tYXJ5W3N1bW1hcnkubGVuZ3RoXSA9IGArJHtnZXRNZXNzYWdlKCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLCBhZGRlZFtpXSl9YDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoYWRkZWQubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdFx0c2hvcnRTdW1tYXJ5W3Nob3J0U3VtbWFyeS5sZW5ndGhdID0gYCske2dldE1lc3NhZ2UoJ21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsIGFkZGVkWzBdKX1gO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGFkZGVkLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRzaG9ydFN1bW1hcnlbc2hvcnRTdW1tYXJ5Lmxlbmd0aF0gPSBgKyAke211bHRpQ2hhbmdlTXNnKGFkZGVkLmxlbmd0aCl9YDtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBDaGFuZ2VkXG5cdFx0XHRcdGNvbnN0IGFycm93ID0gaXNfcnRsID8gJ1xcdTIxOTAnIDogJ1xcdTIxOTInOyAvLyBsZWZ0IGFuZCByaWdodCBhcnJvd3MuIERvbid0IHVzZSDihpAgYW5kIOKGkiBpbiB0aGUgY29kZS5cblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGNoYW5nZWQubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoY2hhbmdlZFtpXS5mcm9tID09PSBjaGFuZ2VkW2ldLnRvKSB7XG5cdFx0XHRcdFx0XHRzdW1tYXJ5W3N1bW1hcnkubGVuZ3RoXSA9IGDCsSR7Z2V0TWVzc2FnZSgnbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJywgY2hhbmdlZFtpXS5mcm9tKX1gO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzdW1tYXJ5W3N1bW1hcnkubGVuZ3RoXSA9XG5cdFx0XHRcdFx0XHRcdGDCsSR7Z2V0TWVzc2FnZSgnbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJywgY2hhbmdlZFtpXS5mcm9tKX0ke2Fycm93fSR7Z2V0TWVzc2FnZShcblx0XHRcdFx0XHRcdFx0XHQnbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJyxcblx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VkW2ldLnRvXG5cdFx0XHRcdFx0XHRcdCl9YDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGNoYW5nZWQubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdFx0aWYgKGNoYW5nZWRbMF0uZnJvbSA9PT0gY2hhbmdlZFswXS50bykge1xuXHRcdFx0XHRcdFx0c2hvcnRTdW1tYXJ5W3Nob3J0U3VtbWFyeS5sZW5ndGhdID1cblx0XHRcdFx0XHRcdFx0YMKxJHtnZXRNZXNzYWdlKCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLCBjaGFuZ2VkWzBdLmZyb20pfWA7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHNob3J0U3VtbWFyeVtzaG9ydFN1bW1hcnkubGVuZ3RoXSA9XG5cdFx0XHRcdFx0XHRcdGDCsSR7Z2V0TWVzc2FnZSgnbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJywgY2hhbmdlZFswXS5mcm9tKX0ke2Fycm93fSR7Z2V0TWVzc2FnZShcblx0XHRcdFx0XHRcdFx0XHQnbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJyxcblx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VkWzBdLnRvXG5cdFx0XHRcdFx0XHRcdCl9YDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiAoY2hhbmdlZC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0c2hvcnRTdW1tYXJ5W3Nob3J0U3VtbWFyeS5sZW5ndGhdID0gYMKxICR7bXVsdGlDaGFuZ2VNc2coY2hhbmdlZC5sZW5ndGgpfWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHN1bW1hcnkubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHN1bW1hcnkgPSBzdW1tYXJ5LmpvaW4oZ2V0TWVzc2FnZSgnbWVzc2FnZXMtc2VwYXJhdG9yJykpO1xuXHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdHN1bW1hcnkubGVuZ3RoID5cblx0XHRcdFx0XHRcdDIwMCAtXG5cdFx0XHRcdFx0XHRcdChIQy5jaGFuZ2VUYWcgPyAnJyA6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXByZWZpeCcpKS5sZW5ndGggLVxuXHRcdFx0XHRcdFx0XHQoSEMuY2hhbmdlVGFnID8gJycgOiBnZXRNZXNzYWdlKCdtZXNzYWdlcy11c2luZycpKS5sZW5ndGhcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdHN1bW1hcnkgPSBzaG9ydFN1bW1hcnkuam9pbihnZXRNZXNzYWdlKCdtZXNzYWdlcy1zZXBhcmF0b3InKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbW1pdEZvcm0ud3BTdW1tYXJ5LnZhbHVlID1cblx0XHRcdFx0XHRcdChIQy5jaGFuZ2VUYWcgPyAnJyA6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXByZWZpeCcpKSArXG5cdFx0XHRcdFx0XHRzdW1tYXJ5ICtcblx0XHRcdFx0XHRcdChIQy5jaGFuZ2VUYWcgPyAnJyA6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXVzaW5nJykpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNvbW1pdEZvcm0ud3BUZXh0Ym94MS52YWx1ZSA9IHJlc3VsdC50ZXh0O1xuXHRcdGNvbW1pdEZvcm0ud3BTdGFydHRpbWUudmFsdWUgPSBzZXJ2ZXJUaW1lIHx8IGN1cnJlbnRUaW1lc3RhbXAoKTtcblx0XHRjb21taXRGb3JtLndwRWRpdHRpbWUudmFsdWUgPSBwYWdlVGltZSB8fCBjb21taXRGb3JtLndwU3RhcnR0aW1lLnZhbHVlO1xuXHRcdGlmIChzZWxmRWRpdENvbmZsaWN0KSB7XG5cdFx0XHRjb21taXRGb3JtLm9sZGlkLnZhbHVlID0gU3RyaW5nKHBhZ2VUZXh0UmV2SWQgfHwgY29uZi53Z0N1clJldmlzaW9uSWQpO1xuXHRcdH1cblx0XHQvLyBTdWJtaXQgdGhlIGZvcm0gaW4gYSB3YXkgdGhhdCB0cmlnZ2VycyBvbnN1Ym1pdCBldmVudHM6IGNvbW1pdEZvcm0uc3VibWl0KCkgZG9lc24ndC5cblx0XHRjb21taXRGb3JtLmhjQ29tbWl0LmNsaWNrKCk7XG5cdH07XG5cdGNvbnN0IHJlc29sdmVPbmUgPSAocGFnZSwgdG9SZXNvbHZlKSA9PiB7XG5cdFx0Y29uc3QgY2F0cyA9IHBhZ2UuY2F0ZWdvcmllcztcblx0XHRjb25zdCB7bGlua3N9ID0gcGFnZTtcblx0XHRsZXQgaXNfZGFiID0gZmFsc2U7IC8vIEhhcmQgcmVkaXJlY3Q/XG5cdFx0bGV0IGlzX3JlZGlyID0gdHlwZW9mIHBhZ2UucmVkaXJlY3QgPT09ICdzdHJpbmcnO1xuXHRcdGxldCBpO1xuXHRcdGNvbnN0IGlzX2hpZGRlbiA9IHBhZ2UuY2F0ZWdvcnlpbmZvICYmIHR5cGVvZiBwYWdlLmNhdGVnb3J5aW5mby5oaWRkZW4gPT09ICdzdHJpbmcnO1xuXHRcdGNvbnN0IGlzX21pc3NpbmcgPSB0eXBlb2YgcGFnZS5taXNzaW5nID09PSAnc3RyaW5nJztcblx0XHRmb3IgKGkgPSAwOyBpIDwgdG9SZXNvbHZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoaSAmJiB0b1Jlc29sdmVbaV0uZGFiSW5wdXRDbGVhbmVkICE9PSBwYWdlLnRpdGxlLnNsaWNlKE1hdGgubWF4KDAsIHBhZ2UudGl0bGUuaW5kZXhPZignOicpICsgMSkpKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0Ly8gTm90ZTogdGhlIHNlcnZlciByZXR1cm5zIGluIHBhZ2UgYW4gTkZDIG5vcm1hbGl6ZWQgVW5pY29kZSB0aXRsZS4gSWYgb3VyIGlucHV0IHdhcyBub3QgTkZDIG5vcm1hbGl6ZWQsIHdlIG1heSBub3QgZmluZFxuXHRcdFx0Ly8gYW55IGVudHJ5IGhlcmUuIElmIHdlIGhhdmUgb25seSBvbmUgZWRpdG9yIHRvIHJlc29sdmUgKHRoZSBtb3N0IGNvbW1vbiBjYXNlLCBJIHByZXN1bWUpLCB3ZSBtYXkgc2ltcGx5IHNraXAgdGhlIGNoZWNrLlxuXHRcdFx0dG9SZXNvbHZlW2ldLmN1cnJlbnRIaWRkZW4gPSBpc19oaWRkZW47XG5cdFx0XHR0b1Jlc29sdmVbaV0uaW5wdXRFeGlzdHMgPSAhaXNfbWlzc2luZztcblx0XHRcdHRvUmVzb2x2ZVtpXS5pY29uLnNyYyA9IGlzX21pc3NpbmcgPyBIQy5leGlzdHNObyA6IEhDLmV4aXN0c1llcztcblx0XHR9XG5cdFx0aWYgKGlzX21pc3NpbmcpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKCFpc19yZWRpciAmJiBjYXRzICYmIChnZXRNZXNzYWdlKCdkaXNhbWJpZ19jYXRlZ29yeScpIHx8IGdldE1lc3NhZ2UoJ3JlZGlyX2NhdGVnb3J5JykpKSB7XG5cdFx0XHRmb3IgKGNvbnN0IGNhdF8gb2YgY2F0cykge1xuXHRcdFx0XHRsZXQgY2F0ID0gY2F0Xy50aXRsZTtcblx0XHRcdFx0Ly8gU3RyaXAgbmFtZXNwYWNlIHByZWZpeFxuXHRcdFx0XHRpZiAoY2F0KSB7XG5cdFx0XHRcdFx0Y2F0ID0gY2F0LnNsaWNlKE1hdGgubWF4KDAsIGNhdC5pbmRleE9mKCc6JykgKyAxKSkucmVwbGFjZSgvXy9nLCAnICcpO1xuXHRcdFx0XHRcdGlmIChjYXQgPT09IGdldE1lc3NhZ2UoJ2Rpc2FtYmlnX2NhdGVnb3J5JykpIHtcblx0XHRcdFx0XHRcdGlzX2RhYiA9IHRydWU7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGNhdCA9PT0gZ2V0TWVzc2FnZSgncmVkaXJfY2F0ZWdvcnknKSkge1xuXHRcdFx0XHRcdFx0aXNfcmVkaXIgPSB0cnVlO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICghaXNfcmVkaXIgJiYgIWlzX2RhYikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoIWxpbmtzIHx8IGxpbmtzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCB0aXRsZXMgPSBbXTtcblx0XHRmb3IgKGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChcblx0XHRcdFx0Ly8gQ2F0ZWdvcnkgbmFtZXNwYWNlIC0tIGFsd2F5cyB0cnVlIHNpbmNlIHdlIGFzayBvbmx5IGZvciB0aGUgY2F0ZWdvcnkgbGlua3Ncblx0XHRcdFx0bGlua3NbaV0ubnMgPT09IDE0ICYmXG5cdFx0XHRcdC8vIE5hbWUgbm90IGVtcHR5XG5cdFx0XHRcdGxpbmtzW2ldLnRpdGxlICYmXG5cdFx0XHRcdGxpbmtzW2ldLnRpdGxlLmxlbmd0aCA+IDBcblx0XHRcdCkge1xuXHRcdFx0XHQvLyBJbnRlcm5hbCBsaW5rIHRvIGV4aXN0aW5nIHRoaW5neS4gRXh0cmFjdCB0aGUgcGFnZSBuYW1lIGFuZCByZW1vdmUgdGhlIG5hbWVzcGFjZS5cblx0XHRcdFx0bGV0IG1hdGNoID0gbGlua3NbaV0udGl0bGU7XG5cdFx0XHRcdG1hdGNoID0gbWF0Y2guc2xpY2UoTWF0aC5tYXgoMCwgbWF0Y2guaW5kZXhPZignOicpICsgMSkpO1xuXHRcdFx0XHQvLyBFeGNsdWRlIGJsYWNrbGlzdGVkIGNhdGVnb3JpZXMuXG5cdFx0XHRcdGlmICghSEMuYmxhY2tsaXN0IHx8ICFIQy5ibGFja2xpc3QudGVzdChtYXRjaCkpIHtcblx0XHRcdFx0XHR0aXRsZXNbdGl0bGVzLmxlbmd0aF0gPSBtYXRjaDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAodGl0bGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRmb3IgKGkgPSAwOyBpIDwgdG9SZXNvbHZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoaSAmJiB0b1Jlc29sdmVbaV0uZGFiSW5wdXRDbGVhbmVkICE9PSBwYWdlLnRpdGxlLnNsaWNlKE1hdGgubWF4KDAsIHBhZ2UudGl0bGUuaW5kZXhPZignOicpICsgMSkpKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0dG9SZXNvbHZlW2ldLmlucHV0RXhpc3RzID0gdHJ1ZTsgLy8gTWlnaHQgYWN0dWFsbHkgYmUgd3JvbmcgaWYgaXQncyBhIHJlZGlyZWN0IHBvaW50aW5nIHRvIGEgbm9uLWV4aXN0aW5nIGNhdGVnb3J5XG5cdFx0XHR0b1Jlc29sdmVbaV0uaWNvbi5zcmMgPSBIQy5leGlzdHNZZXM7XG5cdFx0XHRpZiAodGl0bGVzLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0dG9SZXNvbHZlW2ldLmRhYiA9IHRpdGxlcztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRvUmVzb2x2ZVtpXS50ZXh0LnZhbHVlID1cblx0XHRcdFx0XHR0aXRsZXNbMF0gKyAodG9SZXNvbHZlW2ldLmN1cnJlbnRLZXkgPT09IG51bGwgPyAnJyA6IGB8JHt0b1Jlc29sdmVbaV0uY3VycmVudEtleX1gKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdGNvbnN0IHJlc29sdmVSZWRpcmVjdHMgPSAodG9SZXNvbHZlLCBwYXJhbXMpID0+IHtcblx0XHRpZiAoIXBhcmFtcyB8fCAhcGFyYW1zLnF1ZXJ5IHx8ICFwYXJhbXMucXVlcnkucGFnZXMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Zm9yIChjb25zdCBwIGluIHBhcmFtcy5xdWVyeS5wYWdlcykge1xuXHRcdFx0aWYgKCFPYmplY3QuaGFzT3duKHBhcmFtcy5xdWVyeS5wYWdlcywgcCkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRyZXNvbHZlT25lKHBhcmFtcy5xdWVyeS5wYWdlc1twXSwgdG9SZXNvbHZlKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IHJlc29sdmVNdWx0aSA9ICh0b1Jlc29sdmUsIGNhbGxiYWNrKSA9PiB7XG5cdFx0bGV0IGk7XG5cdFx0Zm9yIChpID0gMDsgaSA8IHRvUmVzb2x2ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dG9SZXNvbHZlW2ldLmRhYiA9IG51bGw7XG5cdFx0XHR0b1Jlc29sdmVbaV0uZGFiSW5wdXQgPSB0b1Jlc29sdmVbaV0ubGFzdElucHV0O1xuXHRcdH1cblx0XHRpZiAobm9TdWdnZXN0aW9ucykge1xuXHRcdFx0Y2FsbGJhY2sodG9SZXNvbHZlKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRwcm9wOiAnaW5mb3xsaW5rc3xjYXRlZ29yaWVzfGNhdGVnb3J5aW5mbycsXG5cdFx0XHRwbG5hbWVzcGFjZTogJzE0Jyxcblx0XHRcdHBsbGltaXQ6IHRvUmVzb2x2ZS5sZW5ndGggKiAxMCxcblx0XHRcdGNsbGltaXQ6IHRvUmVzb2x2ZS5sZW5ndGggKiAxMCxcblx0XHR9O1xuXHRcdGNvbnN0IHRpdGxlcyA9IFtdO1xuXHRcdGZvciAoaSA9IDA7IGkgPCB0b1Jlc29sdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCB2ID0gdG9SZXNvbHZlW2ldLmRhYklucHV0O1xuXHRcdFx0diA9IHJlcGxhY2VTaG9ydGN1dHModiwgSEMuc2hvcnRjdXRzKTtcblx0XHRcdHRvUmVzb2x2ZVtpXS5kYWJJbnB1dENsZWFuZWQgPSB2O1xuXHRcdFx0dGl0bGVzW3RpdGxlcy5sZW5ndGhdID0gYENhdGVnb3J5OiR7dn1gO1xuXHRcdH1cblx0XHRwYXJhbXMudGl0bGVzID0gdGl0bGVzLmpvaW4oJ3wnKTtcblx0XHRhcGkuZ2V0KHBhcmFtcylcblx0XHRcdC5kb25lKChqc29uKSA9PiB7XG5cdFx0XHRcdHJlc29sdmVSZWRpcmVjdHModG9SZXNvbHZlLCBqc29uKTtcblx0XHRcdFx0Y2FsbGJhY2sodG9SZXNvbHZlKTtcblx0XHRcdH0pXG5cdFx0XHQuZmFpbCgocmVxKSA9PiB7XG5cdFx0XHRcdGlmICghcmVxKSB7XG5cdFx0XHRcdFx0bm9TdWdnZXN0aW9ucyA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2FsbGJhY2sodG9SZXNvbHZlKTtcblx0XHRcdH0pO1xuXHR9O1xuXHRjb25zdCBtYWtlQWN0aXZlID0gKHdoaWNoKSA9PiB7XG5cdFx0aWYgKHdoaWNoLmlzX2FjdGl2ZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRmb3IgKGNvbnN0IGVkaXRvciBvZiBlZGl0b3JzKSB7XG5cdFx0XHRpZiAoZWRpdG9yICE9PSB3aGljaCkge1xuXHRcdFx0XHRlZGl0b3IuaW5hY3RpdmF0ZSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR3aGljaC5pc19hY3RpdmUgPSB0cnVlO1xuXHRcdGlmICh3aGljaC5kYWIpIHtcblx0XHRcdHNob3dEYWIod2hpY2gpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBDaGVjayBmb3IgcHJvZ3JhbW1hdGljIHZhbHVlIGNoYW5nZXMuXG5cdFx0XHRjb25zdCBleHBlY3RlZElucHV0ID0gd2hpY2gubGFzdFJlYWxJbnB1dCB8fCB3aGljaC5sYXN0SW5wdXQgfHwgJyc7XG5cdFx0XHRjb25zdCBhY3R1YWxWYWx1ZSA9IHdoaWNoLnRleHQudmFsdWUgfHwgJyc7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdChleHBlY3RlZElucHV0Lmxlbmd0aCA9PT0gMCAmJiBhY3R1YWxWYWx1ZS5sZW5ndGggPiAwKSB8fFxuXHRcdFx0XHQoZXhwZWN0ZWRJbnB1dC5sZW5ndGggPiAwICYmIGFjdHVhbFZhbHVlLmluZGV4T2YoZXhwZWN0ZWRJbnB1dCkpXG5cdFx0XHQpIHtcblx0XHRcdFx0Ly8gU29tZWhvdyB0aGUgZmllbGQncyB2YWx1ZSBhcHBlYXJzIHRvIGhhdmUgY2hhbmdlZCwgYW5kIHdoaWNoLmxhc3RTZWxlY3Rpb24gdGhlcmVmb3JlIGlzIG5vIGxvbmdlciB2YWxpZC4gVHJ5IHRvIHNldCB0aGVcblx0XHRcdFx0Ly8gY3Vyc29yIGF0IHRoZSBlbmQgb2YgdGhlIGNhdGVnb3J5LCBhbmQgZG8gbm90IGRpc3BsYXkgdGhlIG9sZCBzdWdnZXN0aW9uIGxpc3QuXG5cdFx0XHRcdHdoaWNoLnNob3dzTGlzdCA9IGZhbHNlO1xuXHRcdFx0XHRjb25zdCB2ID0gYWN0dWFsVmFsdWUuc3BsaXQoJ3wnKTtcblx0XHRcdFx0W3doaWNoLmxhc3RJbnB1dF0gPSB2O1xuXHRcdFx0XHR3aGljaC5sYXN0UmVhbElucHV0ID0gd2hpY2gubGFzdElucHV0O1xuXHRcdFx0XHRpZiAodi5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0Wywgd2hpY2guY3VycmVudEtleV0gPSB2O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHdoaWNoLmxhc3RTZWxlY3Rpb24gJiY9IHtcblx0XHRcdFx0XHRzdGFydDogdlswXS5sZW5ndGgsXG5cdFx0XHRcdFx0ZW5kOiB2WzBdLmxlbmd0aCxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmICh3aGljaC5zaG93c0xpc3QpIHtcblx0XHRcdFx0d2hpY2guZGlzcGxheUxpc3QoKTtcblx0XHRcdH1cblx0XHRcdGlmICh3aGljaC5sYXN0U2VsZWN0aW9uKSB7XG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdHdoaWNoLnNldFNlbGVjdGlvbih3aGljaC5sYXN0U2VsZWN0aW9uLnN0YXJ0LCB3aGljaC5sYXN0U2VsZWN0aW9uLmVuZCk7XG5cdFx0XHRcdH0sIDApO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0Y29uc3Qgc2hvd0RhYiA9ICh3aGljaCkgPT4ge1xuXHRcdGlmICh3aGljaC5pc19hY3RpdmUpIHtcblx0XHRcdHdoaWNoLnNob3dTdWdnZXN0aW9ucyh3aGljaC5kYWIsIGZhbHNlLCBudWxsLCBudWxsKTsgLy8gZG8gYXV0b2NvbXBsZXRpb24sIG5vIGtleSwgbm8gZW5naW5lIHNlbGVjdG9yXG5cdFx0XHR3aGljaC5kYWIgPSBudWxsO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRtYWtlQWN0aXZlKHdoaWNoKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IG11bHRpU3VibWl0ID0gKCkgPT4ge1xuXHRcdGNvbnN0IHRvUmVzb2x2ZSA9IFtdO1xuXHRcdGZvciAoY29uc3QgZWRpdG9yIG9mIGVkaXRvcnMpIHtcblx0XHRcdGlmIChlZGl0b3Iuc3RhdGUgPT09IENIQU5HRV9QRU5ESU5HIHx8IGVkaXRvci5zdGF0ZSA9PT0gT1BFTikge1xuXHRcdFx0XHR0b1Jlc29sdmVbdG9SZXNvbHZlLmxlbmd0aF0gPSBlZGl0b3I7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh0b1Jlc29sdmUubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRpbml0aWF0ZUVkaXQoXG5cdFx0XHRcdChmYWlsdXJlKSA9PiB7XG5cdFx0XHRcdFx0cGVyZm9ybUNoYW5nZXMoZmFpbHVyZSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdChtc2cpID0+IHtcblx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeShtc2csIHt0YWc6ICdob3RDYXQnfSk7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHJlc29sdmVNdWx0aSh0b1Jlc29sdmUsIChyZXNvbHZlZCkgPT4ge1xuXHRcdFx0bGV0IGZpcnN0RGFiID0gbnVsbDtcblx0XHRcdGxldCBkb250Q2hhbmdlID0gZmFsc2U7XG5cdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgcmVzb2x2ZWQpIHtcblx0XHRcdFx0aWYgKGVsZW1lbnQubGFzdElucHV0ID09PSBlbGVtZW50LmRhYklucHV0KSB7XG5cdFx0XHRcdFx0aWYgKGVsZW1lbnQuZGFiKSB7XG5cdFx0XHRcdFx0XHRmaXJzdERhYiB8fD0gZWxlbWVudDtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGVsZW1lbnQuYWNjZXB0Q2hlY2sodHJ1ZSkpIHtcblx0XHRcdFx0XHRcdGVsZW1lbnQuY29tbWl0KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIFdlIGRpZG4ndCBkaXNhYmxlIGFsbCB0aGUgb3BlbiBlZGl0b3JzLCBidXQgd2UgZGlkIGFzeW5jaHJvbm91cyBjYWxscy4gSXQgaXNcblx0XHRcdFx0XHQvLyB0aGVvcmV0aWNhbGx5IHBvc3NpYmxlIHRoYXQgdGhlIHVzZXIgY2hhbmdlZCBzb21ldGhpbmcuLi5cblx0XHRcdFx0XHRkb250Q2hhbmdlID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGZpcnN0RGFiKSB7XG5cdFx0XHRcdHNob3dEYWIoZmlyc3REYWIpO1xuXHRcdFx0fSBlbHNlIGlmICghZG9udENoYW5nZSkge1xuXHRcdFx0XHRpbml0aWF0ZUVkaXQoXG5cdFx0XHRcdFx0KGZhaWx1cmUpID0+IHtcblx0XHRcdFx0XHRcdHBlcmZvcm1DaGFuZ2VzKGZhaWx1cmUpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0KG1zZykgPT4ge1xuXHRcdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkobXNnLCB7dGFnOiAnaG90Q2F0J30pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblx0Y29uc3Qgc2V0TXVsdGlJbnB1dCA9ICgpID0+IHtcblx0XHRpZiAoY29tbWl0QnV0dG9uIHx8IG9uVXBsb2FkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbW1pdEJ1dHRvbiA9IG1ha2UoJ2lucHV0Jyk7XG5cdFx0Y29tbWl0QnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcblx0XHRjb21taXRCdXR0b24udmFsdWUgPSBnZXRNZXNzYWdlKCdtZXNzYWdlcy1jb21taXQnKTtcblx0XHRjb21taXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtdWx0aVN1Ym1pdCk7XG5cdFx0aWYgKG11bHRpU3Bhbikge1xuXHRcdFx0bXVsdGlTcGFuLnJlcGxhY2VXaXRoKGNvbW1pdEJ1dHRvbik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNhdExpbmUuYXBwZW5kKGNvbW1pdEJ1dHRvbik7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBjaGVja011bHRpSW5wdXQgPSAoKSA9PiB7XG5cdFx0aWYgKCFjb21taXRCdXR0b24pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0bGV0IGhhc0NoYW5nZXMgPSBmYWxzZTtcblx0XHRmb3IgKGNvbnN0IGVkaXRvciBvZiBlZGl0b3JzKSB7XG5cdFx0XHRpZiAoZWRpdG9yLnN0YXRlICE9PSBVTkNIQU5HRUQpIHtcblx0XHRcdFx0aGFzQ2hhbmdlcyA9IHRydWU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjb21taXRCdXR0b24uZGlzYWJsZWQgPSAhaGFzQ2hhbmdlcztcblx0fTtcblx0Y29uc3Qgc3VnZ2VzdGlvbkVuZ2luZXMgPSB7XG5cdFx0b3BlbnNlYXJjaDoge1xuXHRcdFx0dXJpOiBgJHttdy5jb25maWcuZ2V0KFxuXHRcdFx0XHQnd2dTY3JpcHRQYXRoJ1xuXHRcdFx0KX0vYXBpLnBocD9mb3JtYXQ9anNvbiZhY3Rpb249b3BlbnNlYXJjaCZuYW1lc3BhY2U9MTQmbGltaXQ9MzAmc2VhcmNoPUNhdGVnb3J5OiQxYCxcblx0XHRcdC8vICQxID0gc2VhcmNoIHRlcm1cblx0XHRcdC8vIEZ1bmN0aW9uIHRvIGNvbnZlcnQgcmVzdWx0IG9mIHVyaSBpbnRvIGFuIGFycmF5IG9mIGNhdGVnb3J5IG5hbWVzXG5cdFx0XHRoYW5kbGVyOiAocXVlcnlSZXN1bHQsIHF1ZXJ5S2V5KSA9PiB7XG5cdFx0XHRcdGlmIChxdWVyeVJlc3VsdCAmJiBxdWVyeVJlc3VsdC5sZW5ndGggPj0gMikge1xuXHRcdFx0XHRcdGNvbnN0IGtleSA9IHF1ZXJ5UmVzdWx0WzBdLnNsaWNlKE1hdGgubWF4KDAsIHF1ZXJ5UmVzdWx0WzBdLmluZGV4T2YoJzonKSArIDEpKTtcblx0XHRcdFx0XHRjb25zdCBbLCB0aXRsZXNdID0gcXVlcnlSZXN1bHQ7XG5cdFx0XHRcdFx0bGV0IGV4aXN0cyA9IGZhbHNlO1xuXHRcdFx0XHRcdGNhdF9wcmVmaXggfHw9IG5ldyBSZWdFeHAoYF4oJHtIQy5jYXRlZ29yeV9yZWdleHB9KTpgKTtcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRpdGxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0Y2F0X3ByZWZpeC5sYXN0SW5kZXggPSAwO1xuXHRcdFx0XHRcdFx0Y29uc3QgbSA9IGNhdF9wcmVmaXguZXhlYyh0aXRsZXNbaV0pO1xuXHRcdFx0XHRcdFx0aWYgKG0gJiYgbS5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0XHRcdHRpdGxlc1tpXSA9IHRpdGxlc1tpXS5zbGljZShNYXRoLm1heCgwLCB0aXRsZXNbaV0uaW5kZXhPZignOicpICsgMSkpOyAvLyBybSBuYW1lc3BhY2Vcblx0XHRcdFx0XHRcdFx0aWYgKGtleSA9PT0gdGl0bGVzW2ldKSB7XG5cdFx0XHRcdFx0XHRcdFx0ZXhpc3RzID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dGl0bGVzLnNwbGljZShpLCAxKTsgLy8gTm9wZSwgaXQncyBub3QgYSBjYXRlZ29yeSBhZnRlciBhbGwuXG5cdFx0XHRcdFx0XHRcdGktLTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGl0bGVzLmV4aXN0cyA9IGV4aXN0cztcblx0XHRcdFx0XHRpZiAocXVlcnlLZXkgIT09IGtleSkge1xuXHRcdFx0XHRcdFx0dGl0bGVzLm5vcm1hbGl6ZWQgPSBrZXk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIFJlbWVtYmVyIHRoZSBORkMgbm9ybWFsaXplZCBrZXkgd2UgZ290IGJhY2sgZnJvbSB0aGUgc2VydmVyXG5cdFx0XHRcdFx0cmV0dXJuIHRpdGxlcztcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRpbnRlcm5hbHNlYXJjaDoge1xuXHRcdFx0dXJpOiBgJHttdy5jb25maWcuZ2V0KFxuXHRcdFx0XHQnd2dTY3JpcHRQYXRoJ1xuXHRcdFx0KX0vYXBpLnBocD9mb3JtYXQ9anNvbiZhY3Rpb249cXVlcnkmbGlzdD1hbGxwYWdlcyZhcG5hbWVzcGFjZT0xNCZhcGxpbWl0PTMwJmFwZnJvbT0kMSZhcHByZWZpeD0kMWAsXG5cdFx0XHRoYW5kbGVyOiAocXVlcnlSZXN1bHQpID0+IHtcblx0XHRcdFx0aWYgKHF1ZXJ5UmVzdWx0ICYmIHF1ZXJ5UmVzdWx0LnF1ZXJ5ICYmIHF1ZXJ5UmVzdWx0LnF1ZXJ5LmFsbHBhZ2VzKSB7XG5cdFx0XHRcdFx0Y29uc3QgdGl0bGVzID0gcXVlcnlSZXN1bHQucXVlcnkuYWxscGFnZXM7XG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aXRsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdHRpdGxlc1tpXSA9IHRpdGxlc1tpXS50aXRsZS5zbGljZShNYXRoLm1heCgwLCB0aXRsZXNbaV0udGl0bGUuaW5kZXhPZignOicpICsgMSkpO1xuXHRcdFx0XHRcdH0gLy8gcm0gbmFtZXNwYWNlXG5cdFx0XHRcdFx0cmV0dXJuIHRpdGxlcztcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRleGlzdHM6IHtcblx0XHRcdHVyaTogYCR7bXcuY29uZmlnLmdldCgnd2dTY3JpcHRQYXRoJyl9L2FwaS5waHA/Zm9ybWF0PWpzb24mYWN0aW9uPXF1ZXJ5JnByb3A9aW5mbyZ0aXRsZXM9Q2F0ZWdvcnk6JDFgLFxuXHRcdFx0aGFuZGxlcjogKHF1ZXJ5UmVzdWx0LCBxdWVyeUtleSkgPT4ge1xuXHRcdFx0XHRpZiAocXVlcnlSZXN1bHQgJiYgcXVlcnlSZXN1bHQucXVlcnkgJiYgcXVlcnlSZXN1bHQucXVlcnkucGFnZXMgJiYgIXF1ZXJ5UmVzdWx0LnF1ZXJ5LnBhZ2VzWy0xXSkge1xuXHRcdFx0XHRcdC8vIFNob3VsZCBoYXZlIGV4YWN0bHkgMVxuXHRcdFx0XHRcdGZvciAoY29uc3QgcCBpbiBxdWVyeVJlc3VsdC5xdWVyeS5wYWdlcykge1xuXHRcdFx0XHRcdFx0aWYgKCFPYmplY3QuaGFzT3duKHF1ZXJ5UmVzdWx0LnF1ZXJ5LnBhZ2VzLCBwKSkge1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGxldCBfdGl0bGUgPSBxdWVyeVJlc3VsdC5xdWVyeS5wYWdlc1twXS50aXRsZTtcblx0XHRcdFx0XHRcdF90aXRsZSA9IF90aXRsZS5zbGljZShNYXRoLm1heCgwLCBfdGl0bGUuaW5kZXhPZignOicpICsgMSkpO1xuXHRcdFx0XHRcdFx0Y29uc3QgdGl0bGVzID0gW190aXRsZV07XG5cdFx0XHRcdFx0XHR0aXRsZXMuZXhpc3RzID0gdHJ1ZTtcblx0XHRcdFx0XHRcdGlmIChxdWVyeUtleSAhPT0gX3RpdGxlKSB7XG5cdFx0XHRcdFx0XHRcdHRpdGxlcy5ub3JtYWxpemVkID0gX3RpdGxlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ly8gTkZDXG5cdFx0XHRcdFx0XHRyZXR1cm4gdGl0bGVzO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRzdWJjYXRlZ29yaWVzOiB7XG5cdFx0XHR1cmk6IGAke213LmNvbmZpZy5nZXQoXG5cdFx0XHRcdCd3Z1NjcmlwdFBhdGgnXG5cdFx0XHQpfS9hcGkucGhwP2Zvcm1hdD1qc29uJmFjdGlvbj1xdWVyeSZsaXN0PWNhdGVnb3J5bWVtYmVycyZjbXR5cGU9c3ViY2F0JmNtbGltaXQ9bWF4JmNtdGl0bGU9Q2F0ZWdvcnk6JDFgLFxuXHRcdFx0aGFuZGxlcjogKHF1ZXJ5UmVzdWx0KSA9PiB7XG5cdFx0XHRcdGlmIChxdWVyeVJlc3VsdCAmJiBxdWVyeVJlc3VsdC5xdWVyeSAmJiBxdWVyeVJlc3VsdC5xdWVyeS5jYXRlZ29yeW1lbWJlcnMpIHtcblx0XHRcdFx0XHRjb25zdCB0aXRsZXMgPSBxdWVyeVJlc3VsdC5xdWVyeS5jYXRlZ29yeW1lbWJlcnM7XG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aXRsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdHRpdGxlc1tpXSA9IHRpdGxlc1tpXS50aXRsZS5zbGljZShNYXRoLm1heCgwLCB0aXRsZXNbaV0udGl0bGUuaW5kZXhPZignOicpICsgMSkpO1xuXHRcdFx0XHRcdH0gLy8gcm0gbmFtZXNwYWNlXG5cdFx0XHRcdFx0cmV0dXJuIHRpdGxlcztcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRwYXJlbnRjYXRlZ29yaWVzOiB7XG5cdFx0XHR1cmk6IGAke213LmNvbmZpZy5nZXQoXG5cdFx0XHRcdCd3Z1NjcmlwdFBhdGgnXG5cdFx0XHQpfS9hcGkucGhwP2Zvcm1hdD1qc29uJmFjdGlvbj1xdWVyeSZwcm9wPWNhdGVnb3JpZXMmdGl0bGVzPUNhdGVnb3J5OiQxJmNsbGltaXQ9bWF4YCxcblx0XHRcdGhhbmRsZXI6IChxdWVyeVJlc3VsdCkgPT4ge1xuXHRcdFx0XHRpZiAocXVlcnlSZXN1bHQgJiYgcXVlcnlSZXN1bHQucXVlcnkgJiYgcXVlcnlSZXN1bHQucXVlcnkucGFnZXMpIHtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IHAgaW4gcXVlcnlSZXN1bHQucXVlcnkucGFnZXMpIHtcblx0XHRcdFx0XHRcdGlmIChxdWVyeVJlc3VsdC5xdWVyeS5wYWdlc1twXS5jYXRlZ29yaWVzKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHRpdGxlcyA9IHF1ZXJ5UmVzdWx0LnF1ZXJ5LnBhZ2VzW3BdLmNhdGVnb3JpZXM7XG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGl0bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGl0bGVzW2ldID0gdGl0bGVzW2ldLnRpdGxlLnNsaWNlKE1hdGgubWF4KDAsIHRpdGxlc1tpXS50aXRsZS5pbmRleE9mKCc6JykgKyAxKSk7XG5cdFx0XHRcdFx0XHRcdH0gLy8gcm0gbmFtZXNwYWNlXG5cdFx0XHRcdFx0XHRcdHJldHVybiB0aXRsZXM7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fSxcblx0XHR9LFxuXHR9O1xuXHRjb25zdCBzdWdnZXN0aW9uQ29uZmlncyA9IHtcblx0XHRzZWFyY2hpbmRleDoge1xuXHRcdFx0bmFtZTogJ1NlYXJjaCBpbmRleCcsXG5cdFx0XHRlbmdpbmVzOiBbJ29wZW5zZWFyY2gnXSxcblx0XHRcdGNhY2hlOiB7fSxcblx0XHRcdHNob3c6IHRydWUsXG5cdFx0XHR0ZW1wOiBmYWxzZSxcblx0XHRcdG5vQ29tcGxldGlvbjogZmFsc2UsXG5cdFx0fSxcblx0XHRwYWdlbGlzdDoge1xuXHRcdFx0bmFtZTogJ1BhZ2UgbGlzdCcsXG5cdFx0XHRlbmdpbmVzOiBbJ2ludGVybmFsc2VhcmNoJywgJ2V4aXN0cyddLFxuXHRcdFx0Y2FjaGU6IHt9LFxuXHRcdFx0c2hvdzogdHJ1ZSxcblx0XHRcdHRlbXA6IGZhbHNlLFxuXHRcdFx0bm9Db21wbGV0aW9uOiBmYWxzZSxcblx0XHR9LFxuXHRcdGNvbWJpbmVkOiB7XG5cdFx0XHRuYW1lOiAnQ29tYmluZWQgc2VhcmNoJyxcblx0XHRcdGVuZ2luZXM6IFsnb3BlbnNlYXJjaCcsICdpbnRlcm5hbHNlYXJjaCddLFxuXHRcdFx0Y2FjaGU6IHt9LFxuXHRcdFx0c2hvdzogdHJ1ZSxcblx0XHRcdHRlbXA6IGZhbHNlLFxuXHRcdFx0bm9Db21wbGV0aW9uOiBmYWxzZSxcblx0XHR9LFxuXHRcdHN1YmNhdDoge1xuXHRcdFx0bmFtZTogJ1N1YmNhdGVnb3JpZXMnLFxuXHRcdFx0ZW5naW5lczogWydzdWJjYXRlZ29yaWVzJ10sXG5cdFx0XHRjYWNoZToge30sXG5cdFx0XHRzaG93OiB0cnVlLFxuXHRcdFx0dGVtcDogdHJ1ZSxcblx0XHRcdG5vQ29tcGxldGlvbjogdHJ1ZSxcblx0XHR9LFxuXHRcdHBhcmVudGNhdDoge1xuXHRcdFx0bmFtZTogJ1BhcmVudCBjYXRlZ29yaWVzJyxcblx0XHRcdGVuZ2luZXM6IFsncGFyZW50Y2F0ZWdvcmllcyddLFxuXHRcdFx0Y2FjaGU6IHt9LFxuXHRcdFx0c2hvdzogdHJ1ZSxcblx0XHRcdHRlbXA6IHRydWUsXG5cdFx0XHRub0NvbXBsZXRpb246IHRydWUsXG5cdFx0fSxcblx0fTtcblx0Ly8gRXZlbnQga2V5Q29kZXMgdGhhdCB3ZSBoYW5kbGUgaW4gdGhlIHRleHQgaW5wdXQgZmllbGQvc3VnZ2VzdGlvbiBsaXN0LlxuXHRjb25zdCBCUyA9IDg7XG5cdGNvbnN0IFRBQiA9IDk7XG5cdGNvbnN0IFJFVCA9IDEzO1xuXHRjb25zdCBFU0MgPSAyNztcblx0Y29uc3QgU1BBQ0UgPSAzMjtcblx0Y29uc3QgUEdVUCA9IDMzO1xuXHRjb25zdCBQR0RPV04gPSAzNDtcblx0Y29uc3QgVVAgPSAzODtcblx0Y29uc3QgRE9XTiA9IDQwO1xuXHRjb25zdCBERUwgPSA0Njtcblx0Y29uc3QgSU1FID0gMjI5O1xuXHRjbGFzcyBDYXRlZ29yeUVkaXRvciB7XG5cdFx0Y29uc3RydWN0b3IoLi4uYXJncykge1xuXHRcdFx0dGhpcy5pbml0aWFsaXplKC4uLmFyZ3MpO1xuXHRcdH1cblx0XHRpc0NvbXBvc2l0aW9uU3RhcnQgPSBmYWxzZTtcblx0XHRpbml0aWFsaXplKGxpbmUsIHNwYW4sIGFmdGVyLCBrZXksIGlzX2hpZGRlbikge1xuXHRcdFx0Ly8gSWYgYSBzcGFuIGlzIGdpdmVuLCAnYWZ0ZXInIGlzIHRoZSBjYXRlZ29yeSB0aXRsZSwgb3RoZXJ3aXNlIGl0IG1heSBiZSBhbiBlbGVtZW50IGFmdGVyIHdoaWNoIHRvXG5cdFx0XHQvLyBpbnNlcnQgdGhlIG5ldyBzcGFuLiAna2V5JyBpcyBsaWtld2lzZSBvdmVybG9hZGVkOyBpZiBhIHNwYW4gaXMgZ2l2ZW4sIGl0IGlzIHRoZSBjYXRlZ29yeSBrZXkgKGlmXG5cdFx0XHQvLyBrbm93biksIG90aGVyd2lzZSBpdCBpcyBhIGJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIGEgYmFyIHNoYWxsIGJlIHByZXBlbmRlZC5cblx0XHRcdGlmIChzcGFuKSB7XG5cdFx0XHRcdGlmIChpc19ydGwpIHtcblx0XHRcdFx0XHRzcGFuLmRpciA9ICdydGwnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuaXNBZGRDYXRlZ29yeSA9IGZhbHNlO1xuXHRcdFx0XHR0aGlzLmNhdExpbmsgPSBzcGFuLmZpcnN0Q2hpbGQ7XG5cdFx0XHRcdHRoaXMub3JpZ2luYWxDYXRlZ29yeSA9IGFmdGVyO1xuXHRcdFx0XHR0aGlzLm9yaWdpbmFsS2V5ID0ga2V5ICYmIGtleS5sZW5ndGggPiAxID8ga2V5LnNsaWNlKDEpIDogbnVsbDsgLy8gPiAxIGJlY2F1c2UgaXQgaW5jbHVkZXMgdGhlIGxlYWRpbmcgYmFyXG5cdFx0XHRcdHRoaXMub3JpZ2luYWxFeGlzdHMgPSAhaGFzQ2xhc3ModGhpcy5jYXRMaW5rLCAnbmV3Jyk7XG5cdFx0XHRcdC8vIENyZWF0ZSBjaGFuZ2UgYW5kIGRlbCBsaW5rc1xuXHRcdFx0XHR0aGlzLm1ha2VMaW5rU3BhbigpO1xuXHRcdFx0XHRpZiAoIXRoaXMub3JpZ2luYWxFeGlzdHMgJiYgdGhpcy51cERvd25MaW5rcykge1xuXHRcdFx0XHRcdHRoaXMudXBEb3duTGlua3Muc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRzcGFuLmFwcGVuZCh0aGlzLmxpbmtTcGFuKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuaXNBZGRDYXRlZ29yeSA9IHRydWU7XG5cdFx0XHRcdC8vIENyZWF0ZSBhZGQgc3BhbiBhbmQgYXBwZW5kIHRvIGNhdExpbmtzXG5cdFx0XHRcdHRoaXMub3JpZ2luYWxDYXRlZ29yeSA9ICcnO1xuXHRcdFx0XHR0aGlzLm9yaWdpbmFsS2V5ID0gbnVsbDtcblx0XHRcdFx0dGhpcy5vcmlnaW5hbEV4aXN0cyA9IGZhbHNlO1xuXHRcdFx0XHRpZiAoIW5ld0RPTSkge1xuXHRcdFx0XHRcdHNwYW4gPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHRcdFx0c3Bhbi5jbGFzc05hbWUgPSAnbm9wcmludCc7XG5cdFx0XHRcdFx0aWYgKGtleSkge1xuXHRcdFx0XHRcdFx0c3Bhbi5hcHBlbmQobWFrZSgnIHwgJywgdHJ1ZSkpO1xuXHRcdFx0XHRcdFx0aWYgKGFmdGVyKSB7XG5cdFx0XHRcdFx0XHRcdGFmdGVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNwYW4sIGFmdGVyLm5leHRTaWJsaW5nKTtcblx0XHRcdFx0XHRcdFx0YWZ0ZXIgPSBhZnRlci5uZXh0U2libGluZztcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobGluZSkge1xuXHRcdFx0XHRcdFx0XHRsaW5lLmFwcGVuZChzcGFuKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2UgaWYgKGxpbmUgJiYgbGluZS5maXJzdENoaWxkKSB7XG5cdFx0XHRcdFx0XHRzcGFuLmFwcGVuZChtYWtlKCcgJywgdHJ1ZSkpO1xuXHRcdFx0XHRcdFx0bGluZS5hcHBlbmQoc3Bhbik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMubGlua1NwYW4gPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHRcdHRoaXMubGlua1NwYW4uY2xhc3NOYW1lID0gJ25vcHJpbnQgbm9wb3B1cHMgaG90Y2F0bGluayc7XG5cdFx0XHRcdGNvbnN0IGxpbmsgPSBtYWtlKCdhJyk7XG5cdFx0XHRcdGxpbmsuaHJlZiA9ICcjY2F0bGlua3MnO1xuXHRcdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuLmJpbmQodGhpcykpO1xuXHRcdFx0XHRsaW5rLmFwcGVuZChtYWtlKEhDLmxpbmtzLmFkZCwgdHJ1ZSkpO1xuXHRcdFx0XHRsaW5rLnRpdGxlID0gZ2V0TWVzc2FnZSgndG9vbHRpcHMtYWRkJyk7XG5cdFx0XHRcdHRoaXMubGlua1NwYW4uYXBwZW5kKGxpbmspO1xuXHRcdFx0XHRzcGFuID0gbWFrZShuZXdET00gPyAnbGknIDogJ3NwYW4nKTtcblx0XHRcdFx0c3Bhbi5jbGFzc05hbWUgPSAnbm9wcmludCc7XG5cdFx0XHRcdGlmIChpc19ydGwpIHtcblx0XHRcdFx0XHRzcGFuLmRpciA9ICdydGwnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNwYW4uYXBwZW5kKHRoaXMubGlua1NwYW4pO1xuXHRcdFx0XHRpZiAoYWZ0ZXIpIHtcblx0XHRcdFx0XHRhZnRlci5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzcGFuLCBhZnRlci5uZXh0U2libGluZyk7XG5cdFx0XHRcdH0gZWxzZSBpZiAobGluZSkge1xuXHRcdFx0XHRcdGxpbmUuYXBwZW5kKHNwYW4pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMubm9ybWFsTGlua3MgPSBudWxsO1xuXHRcdFx0XHR0aGlzLnVuZGVsTGluayA9IG51bGw7XG5cdFx0XHRcdHRoaXMuY2F0TGluayA9IG51bGw7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLm9yaWdpbmFsSGlkZGVuID0gaXNfaGlkZGVuO1xuXHRcdFx0dGhpcy5saW5lID0gbGluZTtcblx0XHRcdHRoaXMuZW5naW5lID0gSEMuc3VnZ2VzdGlvbnM7XG5cdFx0XHR0aGlzLnNwYW4gPSBzcGFuO1xuXHRcdFx0dGhpcy5jdXJyZW50Q2F0ZWdvcnkgPSB0aGlzLm9yaWdpbmFsQ2F0ZWdvcnk7XG5cdFx0XHR0aGlzLmN1cnJlbnRFeGlzdHMgPSB0aGlzLm9yaWdpbmFsRXhpc3RzO1xuXHRcdFx0dGhpcy5jdXJyZW50SGlkZGVuID0gdGhpcy5vcmlnaW5hbEhpZGRlbjtcblx0XHRcdHRoaXMuY3VycmVudEtleSA9IHRoaXMub3JpZ2luYWxLZXk7XG5cdFx0XHR0aGlzLnN0YXRlID0gVU5DSEFOR0VEO1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRTdGF0ZSA9IFVOQ0hBTkdFRDtcblx0XHRcdHRoaXMubGFzdFNhdmVkQ2F0ZWdvcnkgPSB0aGlzLm9yaWdpbmFsQ2F0ZWdvcnk7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZEtleSA9IHRoaXMub3JpZ2luYWxLZXk7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZEV4aXN0cyA9IHRoaXMub3JpZ2luYWxFeGlzdHM7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZEhpZGRlbiA9IHRoaXMub3JpZ2luYWxIaWRkZW47XG5cdFx0XHRpZiAodGhpcy5jYXRMaW5rICYmIHRoaXMuY3VycmVudEtleSkge1xuXHRcdFx0XHR0aGlzLmNhdExpbmsudGl0bGUgPSB0aGlzLmN1cnJlbnRLZXk7XG5cdFx0XHR9XG5cdFx0XHRlZGl0b3JzW2VkaXRvcnMubGVuZ3RoXSA9IHRoaXM7XG5cdFx0fVxuXHRcdG1ha2VMaW5rU3BhbigpIHtcblx0XHRcdHRoaXMubm9ybWFsTGlua3MgPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHRsZXQgbGluayA9IG51bGw7XG5cdFx0XHRpZiAodGhpcy5vcmlnaW5hbENhdGVnb3J5ICYmIHRoaXMub3JpZ2luYWxDYXRlZ29yeS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGxpbmsgPSBtYWtlKCdhJyk7XG5cdFx0XHRcdGxpbmsuaHJlZiA9ICcjY2F0bGlua3MnO1xuXHRcdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZW1vdmUuYmluZCh0aGlzKSk7XG5cdFx0XHRcdGxpbmsuYXBwZW5kKG1ha2UoSEMubGlua3MucmVtb3ZlLCB0cnVlKSk7XG5cdFx0XHRcdGxpbmsudGl0bGUgPSBnZXRNZXNzYWdlKCd0b29sdGlwcy1yZW1vdmUnKTtcblx0XHRcdFx0dGhpcy5ub3JtYWxMaW5rcy5hcHBlbmQobWFrZSgnICcsIHRydWUpKTtcblx0XHRcdFx0dGhpcy5ub3JtYWxMaW5rcy5hcHBlbmQobGluayk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIUhDLnRlbXBsYXRlX2NhdGVnb3JpZXNbdGhpcy5vcmlnaW5hbENhdGVnb3J5XSkge1xuXHRcdFx0XHRsaW5rID0gbWFrZSgnYScpO1xuXHRcdFx0XHRsaW5rLmhyZWYgPSAnI2NhdGxpbmtzJztcblx0XHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3Blbi5iaW5kKHRoaXMpKTtcblx0XHRcdFx0bGluay5hcHBlbmQobWFrZShIQy5saW5rcy5jaGFuZ2UsIHRydWUpKTtcblx0XHRcdFx0bGluay50aXRsZSA9IGdldE1lc3NhZ2UoJ3Rvb2x0aXBzLWNoYW5nZScpO1xuXHRcdFx0XHR0aGlzLm5vcm1hbExpbmtzLmFwcGVuZChtYWtlKCcgJywgdHJ1ZSkpO1xuXHRcdFx0XHR0aGlzLm5vcm1hbExpbmtzLmFwcGVuZChsaW5rKTtcblx0XHRcdFx0aWYgKCFub1N1Z2dlc3Rpb25zICYmIEhDLnVzZV91cF9kb3duKSB7XG5cdFx0XHRcdFx0dGhpcy51cERvd25MaW5rcyA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdFx0XHRsaW5rID0gbWFrZSgnYScpO1xuXHRcdFx0XHRcdGxpbmsuaHJlZiA9ICcjY2F0bGlua3MnO1xuXHRcdFx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRvd24uYmluZCh0aGlzKSk7XG5cdFx0XHRcdFx0bGluay5hcHBlbmQobWFrZShIQy5saW5rcy5kb3duLCB0cnVlKSk7XG5cdFx0XHRcdFx0bGluay50aXRsZSA9IGdldE1lc3NhZ2UoJ3Rvb2x0aXBzLWRvd24nKTtcblx0XHRcdFx0XHR0aGlzLnVwRG93bkxpbmtzLmFwcGVuZChtYWtlKCcgJywgdHJ1ZSkpO1xuXHRcdFx0XHRcdHRoaXMudXBEb3duTGlua3MuYXBwZW5kKGxpbmspO1xuXHRcdFx0XHRcdGxpbmsgPSBtYWtlKCdhJyk7XG5cdFx0XHRcdFx0bGluay5ocmVmID0gJyNjYXRsaW5rcyc7XG5cdFx0XHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudXAuYmluZCh0aGlzKSk7XG5cdFx0XHRcdFx0bGluay5hcHBlbmQobWFrZShIQy5saW5rcy51cCwgdHJ1ZSkpO1xuXHRcdFx0XHRcdGxpbmsudGl0bGUgPSBnZXRNZXNzYWdlKCd0b29sdGlwcy11cCcpO1xuXHRcdFx0XHRcdHRoaXMudXBEb3duTGlua3MuYXBwZW5kKG1ha2UoJyAnLCB0cnVlKSk7XG5cdFx0XHRcdFx0dGhpcy51cERvd25MaW5rcy5hcHBlbmQobGluayk7XG5cdFx0XHRcdFx0dGhpcy5ub3JtYWxMaW5rcy5hcHBlbmQodGhpcy51cERvd25MaW5rcyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMubGlua1NwYW4gPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHR0aGlzLmxpbmtTcGFuLmNsYXNzTmFtZSA9ICdub3ByaW50IG5vcG9wdXBzIGhvdGNhdGxpbmsnO1xuXHRcdFx0dGhpcy5saW5rU3Bhbi5hcHBlbmQodGhpcy5ub3JtYWxMaW5rcyk7XG5cdFx0XHR0aGlzLnVuZGVsTGluayA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdHRoaXMudW5kZWxMaW5rLmNsYXNzTmFtZSA9ICdub3BvcHVwcyBob3RjYXRsaW5rJztcblx0XHRcdHRoaXMudW5kZWxMaW5rLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRsaW5rID0gbWFrZSgnYScpO1xuXHRcdFx0bGluay5ocmVmID0gJyNjYXRsaW5rcyc7XG5cdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZXN0b3JlLmJpbmQodGhpcykpO1xuXHRcdFx0bGluay5hcHBlbmQobWFrZShIQy5saW5rcy5yZXN0b3JlLCB0cnVlKSk7XG5cdFx0XHRsaW5rLnRpdGxlID0gZ2V0TWVzc2FnZSgndG9vbHRpcHMtcmVzdG9yZScpO1xuXHRcdFx0dGhpcy51bmRlbExpbmsuYXBwZW5kKG1ha2UoJyAnLCB0cnVlKSk7XG5cdFx0XHR0aGlzLnVuZGVsTGluay5hcHBlbmQobGluayk7XG5cdFx0XHR0aGlzLmxpbmtTcGFuLmFwcGVuZCh0aGlzLnVuZGVsTGluayk7XG5cdFx0fVxuXHRcdGludm9rZVN1Z2dlc3Rpb25zKGRvbnRfYXV0b2NvbXBsZXRlKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHRoaXMuZW5naW5lICYmXG5cdFx0XHRcdHN1Z2dlc3Rpb25Db25maWdzW3RoaXMuZW5naW5lXSAmJlxuXHRcdFx0XHRzdWdnZXN0aW9uQ29uZmlnc1t0aGlzLmVuZ2luZV0udGVtcCAmJlxuXHRcdFx0XHQhZG9udF9hdXRvY29tcGxldGVcblx0XHRcdCkge1xuXHRcdFx0XHR0aGlzLmVuZ2luZSA9IEhDLnN1Z2dlc3Rpb25zO1xuXHRcdFx0fSAvLyBSZXNldCB0byBhIHNlYXJjaCB1cG9uIGlucHV0XG5cdFx0XHR0aGlzLnN0YXRlID0gQ0hBTkdFX1BFTkRJTkc7XG5cdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRzZWxmLnRleHRjaGFuZ2UoZG9udF9hdXRvY29tcGxldGUpO1xuXHRcdFx0fSwgSEMuc3VnZ2VzdF9kZWxheSk7XG5cdFx0fVxuXHRcdG1ha2VGb3JtKCkge1xuXHRcdFx0Y29uc3QgZm9ybSA9IG1ha2UoJ2Zvcm0nKTtcblx0XHRcdGZvcm0ubWV0aG9kID0gJ1BPU1QnO1xuXHRcdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLmFjY2VwdC5iaW5kKHRoaXMpKTtcblx0XHRcdHRoaXMuZm9ybSA9IGZvcm07XG5cdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdGNvbnN0IHRleHQgPSBtYWtlKCdpbnB1dCcpO1xuXHRcdFx0dGV4dC50eXBlID0gJ3RleHQnO1xuXHRcdFx0dGV4dC5zaXplID0gSEMuZWRpdGJveF93aWR0aDtcblx0XHRcdGlmICghbm9TdWdnZXN0aW9ucykge1xuXHRcdFx0XHQvLyBCZSBjYXJlZnVsIGhlcmUgdG8gaGFuZGxlIElNRSBpbnB1dC4gVGhpcyBpcyBicm93c2VyL09TL0lNRSBkZXBlbmRlbnQsIGJ1dCBiYXNpY2FsbHkgdGhlcmUgYXJlIHR3byBtZWNoYW5pc21zOlxuXHRcdFx0XHQvLyAtIE1vZGVybiAoRE9NIExldmVsIDMpIGJyb3dzZXJzIHVzZSBjb21wb3NpdGlvbnN0YXJ0L2NvbXBvc2l0aW9uZW5kIGV2ZW50cyB0byBzaWduYWwgY29tcG9zaXRpb247IGlmIHRoZVxuXHRcdFx0XHQvLyAgIGNvbXBvc2l0aW9uIGlzIG5vdCBjYW5jZWxlZCwgdGhlcmUnbGwgYmUgYSB0ZXh0SW5wdXQgZXZlbnQgZm9sbG93aW5nLiBEdXJpbmcgYSBjb21wb3NpdGlvbiBrZXkgZXZlbnRzIGFyZVxuXHRcdFx0XHQvLyAgIGVpdGhlciBhbGwgc3VwcHJlc3NlZCAoRkYvR2Vja28pLCBvciBvdGhlcndpc2UgaGF2ZSBrZXlEb3duID09PSBJTUUgZm9yIGFsbCBrZXlzIChXZWJraXQpLlxuXHRcdFx0XHQvLyAgIC0gV2Via2l0IHNlbmRzIGEgdGV4dElucHV0IGZvbGxvd2VkIGJ5IGtleURvd24gPT09IElNRSBhbmQgYSBrZXlVcCB3aXRoIHRoZSBrZXkgdGhhdCBlbmRlZCBjb21wb3NpdGlvbi5cblx0XHRcdFx0Ly8gICAtIEdlY2tvIGRvZXNuJ3Qgc2VuZCB0ZXh0SW5wdXQgYnV0IGp1c3QgYSBrZXlVcCB3aXRoIHRoZSBrZXkgdGhhdCBlbmRlZCBjb21wb3NpdGlvbiwgd2l0aG91dCBzZW5kaW5nIGtleURvd25cblx0XHRcdFx0Ly9cdCBmaXJzdC4gR2Vja28gZG9lc24ndCBzZW5kIGFueSBrZXlkb3duIHdoaWxlIElNRSBpcyBhY3RpdmUuXG5cdFx0XHRcdC8vIC0gT2xkZXIgYnJvd3NlcnMgc2lnbmFsIGNvbXBvc2l0aW9uIGJ5IGtleURvd24gPT09IElNRSBmb3IgdGhlIGZpcnN0IGFuZCBzdWJzZXF1ZW50IGtleXMgZm9yIGEgY29tcG9zaXRpb24uIFRoZVxuXHRcdFx0XHQvLyAgIGZpcnN0IGtleURvd24gIT09IElNRSBpcyBjZXJ0YWlubHkgYWZ0ZXIgdGhlIGVuZCBvZiB0aGUgY29tcG9zaXRpb24uIFR5cGljYWxseSwgY29tcG9zaXRpb24gZW5kIGNhbiBhbHNvIGJlXG5cdFx0XHRcdC8vICAgZGV0ZWN0ZWQgYnkgYSBrZXlEb3duIElNRSB3aXRoIGEga2V5VXAgb2Ygc3BhY2UsIHRhYiwgZXNjYXBlLCBvciByZXR1cm4uXG5cdFx0XHRcdHRleHQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRjb25zdCBrZXkgPSBldmVudC5rZXkgfHwgMDtcblx0XHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0XHRzZWxmLmltZSAmJlxuXHRcdFx0XHRcdFx0c2VsZi5sYXN0S2V5ID09PSBJTUUgJiZcblx0XHRcdFx0XHRcdCFzZWxmLnVzZXNDb21wb3NpdGlvbiAmJlxuXHRcdFx0XHRcdFx0KGtleSA9PT0gVEFCIHx8IGtleSA9PT0gUkVUIHx8IGtleSA9PT0gRVNDIHx8IGtleSA9PT0gU1BBQ0UpXG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRzZWxmLmltZSA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoc2VsZi5pbWUpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoa2V5ID09PSBVUCB8fCBrZXkgPT09IERPV04gfHwga2V5ID09PSBQR1VQIHx8IGtleSA9PT0gUEdET1dOKSB7XG5cdFx0XHRcdFx0XHQvLyBJbiBjYXNlIGEgYnJvd3NlciBkb2Vzbid0IGdlbmVyYXRlIGtleXByZXNzIGV2ZW50cyBmb3IgYXJyb3cga2V5cy4uLlxuXHRcdFx0XHRcdFx0aWYgKHNlbGYua2V5Q291bnQgPT09IDApIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHNlbGYucHJvY2Vzc0tleShldmVudCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmIChrZXkgPT09IEVTQyAmJiBzZWxmLmxhc3RLZXkgIT09IElNRSAmJiAhc2VsZi5yZXNldEtleVNlbGVjdGlvbigpKSB7XG5cdFx0XHRcdFx0XHRcdC8vIE5vIHVuZG8gb2Yga2V5IHNlbGVjdGlvbjogdHJlYXQgRVNDIGFzIFwiY2FuY2VsXCIuXG5cdFx0XHRcdFx0XHRcdHNlbGYuY2FuY2VsKCk7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC8vIEFsc28gZG8gdGhpcyBmb3IgRVNDIGFzIGEgd29ya2Fyb3VuZCBmb3IgRmlyZWZveCBidWcgNTI0MzYwXG5cdFx0XHRcdFx0XHQvLyB7QGxpbmsgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NTI0MzYwfVxuXHRcdFx0XHRcdFx0aWYgKHNlbGYuaXNDb21wb3NpdGlvblN0YXJ0KSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHNlbGYuaW52b2tlU3VnZ2VzdGlvbnMoa2V5ID09PSBCUyB8fCBrZXkgPT09IERFTCB8fCBrZXkgPT09IEVTQyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGV4dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0Y29uc3Qga2V5ID0gZXZlbnQua2V5IHx8IDA7XG5cdFx0XHRcdFx0c2VsZi5sYXN0S2V5ID0ga2V5O1xuXHRcdFx0XHRcdHNlbGYua2V5Q291bnQgPSAwO1xuXHRcdFx0XHRcdC8vIERPTSBMZXZlbCA8IDMgSU1FIGlucHV0XG5cdFx0XHRcdFx0aWYgKCFzZWxmLmltZSAmJiBrZXkgPT09IElNRSAmJiAhc2VsZi51c2VzQ29tcG9zaXRpb24pIHtcblx0XHRcdFx0XHRcdC8vIHNlbGYudXNlc0NvbXBvc2l0aW9uIGNhdGNoZXMgYnJvd3NlcnMgdGhhdCBtYXkgZW1pdCBzcHVyaW91cyBrZXlkb3duIElNRSBhZnRlciBhIGNvbXBvc2l0aW9uIGhhcyBlbmRlZFxuXHRcdFx0XHRcdFx0c2VsZi5pbWUgPSB0cnVlO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRcdFx0XHRzZWxmLmltZSAmJlxuXHRcdFx0XHRcdFx0a2V5ICE9PSBJTUUgJiZcblx0XHRcdFx0XHRcdCEoKGtleSA+PSAxNiAmJiBrZXkgPD0gMjApIHx8IChrZXkgPj0gOTEgJiYga2V5IDw9IDkzKSB8fCBrZXkgPT09IDE0NClcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdC8vIElnbm9yZSBjb250cm9sIGtleXM6IGN0cmwsIHNoaWZ0LCBhbHQsIGFsdCBnciwgY2FwcyBsb2NrLCB3aW5kb3dzL2FwcGxlIGNtZCBrZXlzLCBudW0gbG9jay4gT25seSB0aGUgd2luZG93cyBrZXlzXG5cdFx0XHRcdFx0XHQvLyB0ZXJtaW5hdGUgSU1FIChhcHBsZSBjbWQgZG9lc24ndCksIGJ1dCB0aGV5IGFsc28gY2F1c2UgYSBibHVyLCBzbyBpdCdzIE9LIHRvIGlnbm9yZSB0aGVtIGhlcmUuXG5cdFx0XHRcdFx0XHQvLyBOb3RlOiBTYWZhcmkgNCAoNTMwLjE3KSBwcm9wYWdhdGVzIEVTQyBvdXQgb2YgYW4gSU1FIGNvbXBvc2l0aW9uIChvYnNlcnZlZCBhdCBsZWFzdCBvbiBXaW4gWFApLlxuXHRcdFx0XHRcdFx0c2VsZi5pbWUgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHNlbGYuaW1lKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gSGFuZGxlIHJldHVybiBleHBsaWNpdGx5LCB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBmb3JtIHN1Ym1pc3Npb24gdG8gYmUgYWJsZSB0byBjaGVjayBmb3IgY3RybFxuXHRcdFx0XHRcdGlmIChrZXkgPT09IFJFVCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHNlbGYuYWNjZXB0KGV2ZW50KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gSW5oaWJpdCBkZWZhdWx0IGJlaGF2aW9yIG9mIEVTQyAocmV2ZXJ0IHRvIGxhc3QgcmVhbCBpbnB1dCBpbiBGRjogd2UgZG8gdGhhdCBvdXJzZWx2ZXMpXG5cdFx0XHRcdFx0cmV0dXJuIGtleSA9PT0gRVNDID8gZXZ0S2lsbChldmVudCkgOiB0cnVlO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0Ly8gQW5kIGhhbmRsZSBjb250aW51ZWQgcHJlc3Npbmcgb2YgYXJyb3cga2V5c1xuXHRcdFx0XHR0ZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0c2VsZi5rZXlDb3VudCsrO1xuXHRcdFx0XHRcdHJldHVybiBzZWxmLnByb2Nlc3NLZXkoZXZlbnQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGV4dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcblx0XHRcdFx0XHRtYWtlQWN0aXZlKHNlbGYpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0Ly8gRG9uJ3QgdGVzdCBmb3IgdGV4dC5zZWxlY3Rpb25TdGFydCBiZWluZyBkZWZpbmVkO1xuXHRcdFx0XHQkKHRleHQpLm9uKCdibHVyJywgdGhpcy5zYXZlVmlldy5iaW5kKHRoaXMpKTtcblx0XHRcdFx0Ly8gRE9NIExldmVsIDMgSU1FIGhhbmRsaW5nXG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gU2V0dGluZyBsYXN0S2V5ID0gSU1FIHByb3ZpZGVzIGEgZmFrZSBrZXlEb3duIGZvciBHZWNrbydzIHNpbmdsZSBrZXlVcCBhZnRlciBhIGNtcG9zaXRpb24uIElmIHdlIGRpZG4ndCBkbyB0aGlzLFxuXHRcdFx0XHRcdC8vIGNhbmNlbGxpbmcgYSBjb21wb3NpdGlvbiB2aWEgRVNDIHdvdWxkIGFsc28gY2FuY2VsIGFuZCBjbG9zZSB0aGUgd2hvbGUgY2F0ZWdvcnkgaW5wdXQgZWRpdG9yLlxuXHRcdFx0XHRcdCQodGV4dCkub24oJ2NvbXBvc2l0aW9uc3RhcnQnLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRzZWxmLmxhc3RLZXkgPSBJTUU7XG5cdFx0XHRcdFx0XHRzZWxmLnVzZXNDb21wb3NpdGlvbiA9IHRydWU7XG5cdFx0XHRcdFx0XHRzZWxmLmltZSA9IHRydWU7XG5cdFx0XHRcdFx0XHRzZWxmLmlzQ29tcG9zaXRpb25TdGFydCA9IHRydWU7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0JCh0ZXh0KS5vbignY29tcG9zaXRpb25lbmQnLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRzZWxmLmxhc3RLZXkgPSBJTUU7XG5cdFx0XHRcdFx0XHRzZWxmLnVzZXNDb21wb3NpdGlvbiA9IHRydWU7XG5cdFx0XHRcdFx0XHRzZWxmLmltZSA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0c2VsZi5pc0NvbXBvc2l0aW9uU3RhcnQgPSBmYWxzZTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHQkKHRleHQpLm9uKCd0ZXh0SW5wdXQnLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRzZWxmLmltZSA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0aWYgKHNlbGYuaXNDb21wb3NpdGlvblN0YXJ0KSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHNlbGYuaW52b2tlU3VnZ2VzdGlvbnMoZmFsc2UpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHQvLyBKdXN0IGluIGNhc2Ugc29tZSBicm93c2VycyBtaWdodCBwcm9kdWNlIGV4Y2VwdGlvbnMgd2l0aCB0aGVzZSBET00gTGV2ZWwgMyBldmVudHNcblx0XHRcdFx0fVxuXHRcdFx0XHQkKHRleHQpLm9uKCdibHVyJywgKCkgPT4ge1xuXHRcdFx0XHRcdHNlbGYudXNlc0NvbXBvc2l0aW9uID0gZmFsc2U7XG5cdFx0XHRcdFx0c2VsZi5pbWUgPSBmYWxzZTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnRleHQgPSB0ZXh0O1xuXHRcdFx0dGhpcy5pY29uID0gbWFrZSgnaW1nJyk7XG5cdFx0XHRsZXQgbGlzdCA9IG51bGw7XG5cdFx0XHRpZiAoIW5vU3VnZ2VzdGlvbnMpIHtcblx0XHRcdFx0bGlzdCA9IG1ha2UoJ3NlbGVjdCcpO1xuXHRcdFx0XHRsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdGlmIChzZWxmLmhpZ2hsaWdodFN1Z2dlc3Rpb24oMCkpIHtcblx0XHRcdFx0XHRcdHNlbGYudGV4dGNoYW5nZShmYWxzZSwgdHJ1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0bGlzdC5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIChlKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHNlbGYuaGlnaGxpZ2h0U3VnZ2VzdGlvbigwKSkge1xuXHRcdFx0XHRcdFx0c2VsZi5hY2NlcHQoZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0bGlzdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHRcdFx0c2VsZi5oaWdobGlnaHRTdWdnZXN0aW9uKDApO1xuXHRcdFx0XHRcdHNlbGYudGV4dC5mb2N1cygpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0bGlzdC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4ge1xuXHRcdFx0XHRcdGlmIChldmVudC5rZXkgPT09IEVTQykge1xuXHRcdFx0XHRcdFx0c2VsZi5yZXNldEtleVNlbGVjdGlvbigpO1xuXHRcdFx0XHRcdFx0c2VsZi50ZXh0LmZvY3VzKCk7XG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdFx0c2VsZi50ZXh0Y2hhbmdlKHRydWUpO1xuXHRcdFx0XHRcdFx0fSwgSEMuc3VnZ2VzdF9kZWxheSk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChldmVudC5rZXkgPT09IFJFVCkge1xuXHRcdFx0XHRcdFx0c2VsZi5hY2NlcHQoZXZlbnQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdGlmICghSEMuZml4ZWRfc2VhcmNoKSB7XG5cdFx0XHRcdFx0Y29uc3QgZW5naW5lU2VsZWN0b3IgPSBtYWtlKCdzZWxlY3QnKTtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IGtleSBpbiBzdWdnZXN0aW9uQ29uZmlncykge1xuXHRcdFx0XHRcdFx0aWYgKHN1Z2dlc3Rpb25Db25maWdzW2tleV0uc2hvdykge1xuXHRcdFx0XHRcdFx0XHRjb25zdCBvcHQgPSBtYWtlKCdvcHRpb24nKTtcblx0XHRcdFx0XHRcdFx0b3B0LnZhbHVlID0ga2V5O1xuXHRcdFx0XHRcdFx0XHRpZiAoa2V5ID09PSB0aGlzLmVuZ2luZSkge1xuXHRcdFx0XHRcdFx0XHRcdG9wdC5zZWxlY3RlZCA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0b3B0LmFwcGVuZChtYWtlKHN1Z2dlc3Rpb25Db25maWdzW2tleV0ubmFtZSwgdHJ1ZSkpO1xuXHRcdFx0XHRcdFx0XHRlbmdpbmVTZWxlY3Rvci5hcHBlbmQob3B0KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZW5naW5lU2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0c2VsZi5lbmdpbmUgPSBzZWxmLmVuZ2luZVNlbGVjdG9yLm9wdGlvbnNbc2VsZi5lbmdpbmVTZWxlY3Rvci5zZWxlY3RlZEluZGV4XS52YWx1ZTtcblx0XHRcdFx0XHRcdHNlbGYudGV4dC5mb2N1cygpO1xuXHRcdFx0XHRcdFx0c2VsZi50ZXh0Y2hhbmdlKHRydWUsIHRydWUpOyAvLyBEb24ndCBhdXRvY29tcGxldGUsIGZvcmNlIHJlLWRpc3BsYXkgb2YgbGlzdFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3IgPSBlbmdpbmVTZWxlY3Rvcjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5saXN0ID0gbGlzdDtcblx0XHRcdGNvbnN0IGJ1dHRvbl9sYWJlbCA9IChfaWQsIGRlZmF1bHRUZXh0KSA9PiB7XG5cdFx0XHRcdGNvbnN0IGxhYmVsID0gbnVsbDtcblx0XHRcdFx0aWYgKCFsYWJlbCB8fCAhbGFiZWwuZGF0YSkge1xuXHRcdFx0XHRcdHJldHVybiBkZWZhdWx0VGV4dDtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbGFiZWwuZGF0YTtcblx0XHRcdH07XG5cdFx0XHQvLyBEbyBub3QgdXNlIHR5cGUgJ3N1Ym1pdCc7IHdlIGNhbm5vdCBkZXRlY3QgbW9kaWZpZXIga2V5cyBpZiB3ZSBkb1xuXHRcdFx0Y29uc3QgT0sgPSBtYWtlKCdpbnB1dCcpO1xuXHRcdFx0T0sudHlwZSA9ICdidXR0b24nO1xuXHRcdFx0T0sudmFsdWUgPSBidXR0b25fbGFiZWwoJ3dwT2tVcGxvYWRMYmwnLCBnZXRNZXNzYWdlKCdtZXNzYWdlcy1vaycpKTtcblx0XHRcdE9LLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hY2NlcHQuYmluZCh0aGlzKSk7XG5cdFx0XHR0aGlzLm9rID0gT0s7XG5cdFx0XHRjb25zdCBjYW5jZWwgPSBtYWtlKCdpbnB1dCcpO1xuXHRcdFx0Y2FuY2VsLnR5cGUgPSAnYnV0dG9uJztcblx0XHRcdGNhbmNlbC52YWx1ZSA9IGJ1dHRvbl9sYWJlbCgnd3BDYW5jZWxVcGxvYWRMYmwnLCBnZXRNZXNzYWdlKCdtZXNzYWdlcy1jYW5jZWwnKSk7XG5cdFx0XHRjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNhbmNlbC5iaW5kKHRoaXMpKTtcblx0XHRcdHRoaXMuY2FuY2VsQnV0dG9uID0gY2FuY2VsO1xuXHRcdFx0Y29uc3Qgc3BhbiA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdHNwYW4uY2xhc3NOYW1lID0gJ2hvdGNhdGlucHV0Jztcblx0XHRcdHNwYW4uc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuXHRcdFx0c3Bhbi5hcHBlbmQodGV4dCk7XG5cdFx0XHRzcGFuLnN0eWxlLndoaXRlU3BhY2UgPSAnbm93cmFwJztcblx0XHRcdGlmIChsaXN0KSB7XG5cdFx0XHRcdHNwYW4uYXBwZW5kKGxpc3QpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0c3Bhbi5hcHBlbmQodGhpcy5lbmdpbmVTZWxlY3Rvcik7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIW5vU3VnZ2VzdGlvbnMpIHtcblx0XHRcdFx0c3Bhbi5hcHBlbmQodGhpcy5pY29uKTtcblx0XHRcdH1cblx0XHRcdHNwYW4uYXBwZW5kKE9LKTtcblx0XHRcdHNwYW4uYXBwZW5kKGNhbmNlbCk7XG5cdFx0XHRmb3JtLmFwcGVuZChzcGFuKTtcblx0XHRcdGZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdHRoaXMuc3Bhbi5hcHBlbmQoZm9ybSk7XG5cdFx0fVxuXHRcdGRpc3BsYXkoZXZlbnQpIHtcblx0XHRcdGlmICh0aGlzLmlzQWRkQ2F0ZWdvcnkgJiYgIW9uVXBsb2FkICYmIHRoaXMubGluZSkge1xuXHRcdFx0XHRuZXcgQ2F0ZWdvcnlFZGl0b3IodGhpcy5saW5lLCBudWxsLCB0aGlzLnNwYW4sIHRydWUpOyAvLyBDcmVhdGUgYSBuZXcgb25lXG5cdFx0XHR9XG5cdFx0XHRpZiAoIWNvbW1pdEJ1dHRvbiAmJiAhb25VcGxvYWQpIHtcblx0XHRcdFx0Zm9yIChjb25zdCBlZGl0b3Igb2YgZWRpdG9ycykge1xuXHRcdFx0XHRcdGlmIChlZGl0b3Iuc3RhdGUgIT09IFVOQ0hBTkdFRCkge1xuXHRcdFx0XHRcdFx0c2V0TXVsdGlJbnB1dCgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoIXRoaXMuZm9ybSkge1xuXHRcdFx0XHR0aGlzLm1ha2VGb3JtKCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5saXN0KSB7XG5cdFx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5jdXJyZW50Q2F0ZWdvcnkgPSB0aGlzLmxhc3RTYXZlZENhdGVnb3J5O1xuXHRcdFx0dGhpcy5jdXJyZW50RXhpc3RzID0gdGhpcy5sYXN0U2F2ZWRFeGlzdHM7XG5cdFx0XHR0aGlzLmN1cnJlbnRIaWRkZW4gPSB0aGlzLmxhc3RTYXZlZEhpZGRlbjtcblx0XHRcdHRoaXMuY3VycmVudEtleSA9IHRoaXMubGFzdFNhdmVkS2V5O1xuXHRcdFx0dGhpcy5pY29uLnNyYyA9IHRoaXMuY3VycmVudEV4aXN0cyA/IEhDLmV4aXN0c1llcyA6IEhDLmV4aXN0c05vO1xuXHRcdFx0dGhpcy50ZXh0LnZhbHVlID0gdGhpcy5jdXJyZW50Q2F0ZWdvcnkgKyAodGhpcy5jdXJyZW50S2V5ID09PSBudWxsID8gJycgOiBgfCR7dGhpcy5jdXJyZW50S2V5fWApO1xuXHRcdFx0dGhpcy5vcmlnaW5hbFN0YXRlID0gdGhpcy5zdGF0ZTtcblx0XHRcdHRoaXMubGFzdElucHV0ID0gdGhpcy5jdXJyZW50Q2F0ZWdvcnk7XG5cdFx0XHR0aGlzLmlucHV0RXhpc3RzID0gdGhpcy5jdXJyZW50RXhpc3RzO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IHRoaXMuc3RhdGUgPT09IFVOQ0hBTkdFRCA/IE9QRU4gOiBDSEFOR0VfUEVORElORztcblx0XHRcdHRoaXMubGFzdFNlbGVjdGlvbiA9IHtcblx0XHRcdFx0c3RhcnQ6IHRoaXMuY3VycmVudENhdGVnb3J5Lmxlbmd0aCxcblx0XHRcdFx0ZW5kOiB0aGlzLmN1cnJlbnRDYXRlZ29yeS5sZW5ndGgsXG5cdFx0XHR9O1xuXHRcdFx0dGhpcy5zaG93c0xpc3QgPSBmYWxzZTtcblx0XHRcdC8vIERpc3BsYXkgdGhlIGZvcm1cblx0XHRcdGlmICh0aGlzLmNhdExpbmspIHtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxpbmtTcGFuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR0aGlzLmZvcm0uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xuXHRcdFx0dGhpcy5vay5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0Ly8gS2lsbCB0aGUgZXZlbnQgYmVmb3JlIGZvY3VzaW5nLCBvdGhlcndpc2UgSUUgd2lsbCBraWxsIHRoZSBvbmZvY3VzIGV2ZW50IVxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gZXZ0S2lsbChldmVudCk7XG5cdFx0XHR0aGlzLnRleHQuZm9jdXMoKTtcblx0XHRcdHRoaXMudGV4dC5yZWFkT25seSA9IGZhbHNlO1xuXHRcdFx0Y2hlY2tNdWx0aUlucHV0KCk7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblx0XHRzaG93KGV2ZW50LCBlbmdpbmUsIHJlYWRPbmx5KSB7XG5cdFx0XHRjb25zdCByZXN1bHQgPSB0aGlzLmRpc3BsYXkoZXZlbnQpO1xuXHRcdFx0Y29uc3QgdiA9IHRoaXMubGFzdFNhdmVkQ2F0ZWdvcnk7XG5cdFx0XHRpZiAodi5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH1cblx0XHRcdHRoaXMudGV4dC5yZWFkT25seSA9ICEhcmVhZE9ubHk7XG5cdFx0XHR0aGlzLmVuZ2luZSA9IGVuZ2luZTtcblx0XHRcdHRoaXMudGV4dGNoYW5nZShmYWxzZSwgdHJ1ZSk7IC8vIGRvIGF1dG9jb21wbGV0aW9uLCBmb3JjZSBkaXNwbGF5IG9mIHN1Z2dlc3Rpb25zXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblx0XHRvcGVuKGV2ZW50KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zaG93KGV2ZW50LCB0aGlzLmVuZ2luZSAmJiBzdWdnZXN0aW9uQ29uZmlnc1t0aGlzLmVuZ2luZV0udGVtcCA/IEhDLnN1Z2dlc3Rpb25zIDogdGhpcy5lbmdpbmUpO1xuXHRcdH1cblx0XHRkb3duKGV2ZW50KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zaG93KGV2ZW50LCAnc3ViY2F0JywgdHJ1ZSk7XG5cdFx0fVxuXHRcdHVwKGV2ZW50KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zaG93KGV2ZW50LCAncGFyZW50Y2F0Jyk7XG5cdFx0fVxuXHRcdGNhbmNlbCgpIHtcblx0XHRcdGlmICh0aGlzLmlzQWRkQ2F0ZWdvcnkgJiYgIW9uVXBsb2FkKSB7XG5cdFx0XHRcdHRoaXMucmVtb3ZlRWRpdG9yKCk7IC8vIFdlIGFkZGVkIGEgbmV3IGFkZGVyIHdoZW4gb3BlbmluZ1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHQvLyBDbG9zZSwgcmUtZGlzcGxheSBsaW5rXG5cdFx0XHR0aGlzLmluYWN0aXZhdGUoKTtcblx0XHRcdHRoaXMuZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0aWYgKHRoaXMuY2F0TGluaykge1xuXHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5saW5rU3Bhbi5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHR0aGlzLnN0YXRlID0gdGhpcy5vcmlnaW5hbFN0YXRlO1xuXHRcdFx0dGhpcy5jdXJyZW50Q2F0ZWdvcnkgPSB0aGlzLmxhc3RTYXZlZENhdGVnb3J5O1xuXHRcdFx0dGhpcy5jdXJyZW50S2V5ID0gdGhpcy5sYXN0U2F2ZWRLZXk7XG5cdFx0XHR0aGlzLmN1cnJlbnRFeGlzdHMgPSB0aGlzLmxhc3RTYXZlZEV4aXN0cztcblx0XHRcdHRoaXMuY3VycmVudEhpZGRlbiA9IHRoaXMubGFzdFNhdmVkSGlkZGVuO1xuXHRcdFx0aWYgKHRoaXMuY2F0TGluaykge1xuXHRcdFx0XHR0aGlzLmNhdExpbmsudGl0bGUgPSB0aGlzLmN1cnJlbnRLZXkgJiYgdGhpcy5jdXJyZW50S2V5Lmxlbmd0aCA+IDAgPyB0aGlzLmN1cnJlbnRLZXkgOiAnJztcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLnN0YXRlID09PSBVTkNIQU5HRUQpIHtcblx0XHRcdFx0aWYgKHRoaXMuY2F0TGluaykge1xuXHRcdFx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKCFvblVwbG9hZCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBIQy5iZ19jaGFuZ2VkO1xuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHQvKiBlbXB0eSAqL1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0XHR9XG5cdFx0cmVtb3ZlRWRpdG9yKCkge1xuXHRcdFx0aWYgKCFuZXdET00pIHtcblx0XHRcdFx0Y29uc3QgbmV4dCA9IHRoaXMuc3Bhbi5uZXh0U2libGluZztcblx0XHRcdFx0aWYgKG5leHQpIHtcblx0XHRcdFx0XHRuZXh0LnJlbW92ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5zcGFuICYmIHRoaXMuc3Bhbi5wYXJlbnROb2RlKSB7XG5cdFx0XHRcdHRoaXMuc3Bhbi5yZW1vdmUoKTtcblx0XHRcdH1cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZWRpdG9ycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAoZWRpdG9yc1tpXSA9PT0gdGhpcykge1xuXHRcdFx0XHRcdGVkaXRvcnMuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0XHR9XG5cdFx0cm9sbGJhY2soZXZlbnQpIHtcblx0XHRcdHRoaXMudW5kb0xpbmsucmVtb3ZlKCk7XG5cdFx0XHR0aGlzLnVuZG9MaW5rID0gbnVsbDtcblx0XHRcdHRoaXMuY3VycmVudENhdGVnb3J5ID0gdGhpcy5vcmlnaW5hbENhdGVnb3J5O1xuXHRcdFx0dGhpcy5jdXJyZW50S2V5ID0gdGhpcy5vcmlnaW5hbEtleTtcblx0XHRcdHRoaXMuY3VycmVudEV4aXN0cyA9IHRoaXMub3JpZ2luYWxFeGlzdHM7XG5cdFx0XHR0aGlzLmN1cnJlbnRIaWRkZW4gPSB0aGlzLm9yaWdpbmFsSGlkZGVuO1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRDYXRlZ29yeSA9IHRoaXMub3JpZ2luYWxDYXRlZ29yeTtcblx0XHRcdHRoaXMubGFzdFNhdmVkS2V5ID0gdGhpcy5vcmlnaW5hbEtleTtcblx0XHRcdHRoaXMubGFzdFNhdmVkRXhpc3RzID0gdGhpcy5vcmlnaW5hbEV4aXN0cztcblx0XHRcdHRoaXMubGFzdFNhdmVkSGlkZGVuID0gdGhpcy5vcmlnaW5hbEhpZGRlbjtcblx0XHRcdHRoaXMuc3RhdGUgPSBVTkNIQU5HRUQ7XG5cdFx0XHRpZiAoIXRoaXMuY3VycmVudENhdGVnb3J5IHx8IHRoaXMuY3VycmVudENhdGVnb3J5Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHQvLyBJdCB3YXMgYSBuZXdseSBhZGRlZCBjYXRlZ29yeS4gUmVtb3ZlIHRoZSB3aG9sZSBlZGl0b3IuXG5cdFx0XHRcdHRoaXMucmVtb3ZlRWRpdG9yKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBSZWRpc3BsYXkgdGhlIGxpbmsuLi5cblx0XHRcdFx0dGhpcy5jYXRMaW5rLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG5cdFx0XHRcdHRoaXMuY2F0TGluay5hcHBlbmQobWFrZSh0aGlzLmN1cnJlbnRDYXRlZ29yeSwgdHJ1ZSkpO1xuXHRcdFx0XHR0aGlzLmNhdExpbmsuaHJlZiA9IHdpa2lQYWdlUGF0aChgJHtIQy5jYXRlZ29yeV9jYW5vbmljYWx9OiR7dGhpcy5jdXJyZW50Q2F0ZWdvcnl9YCk7XG5cdFx0XHRcdHRoaXMuY2F0TGluay50aXRsZSA9IHRoaXMuY3VycmVudEtleSB8fCAnJztcblx0XHRcdFx0dGhpcy5jYXRMaW5rLmNsYXNzTmFtZSA9IHRoaXMuY3VycmVudEV4aXN0cyA/ICcnIDogJ25ldyc7XG5cdFx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuXHRcdFx0XHRpZiAodGhpcy51cERvd25MaW5rcykge1xuXHRcdFx0XHRcdHRoaXMudXBEb3duTGlua3Muc3R5bGUuZGlzcGxheSA9IHRoaXMuY3VycmVudEV4aXN0cyA/ICcnIDogJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGV2dEtpbGwoZXZlbnQpO1xuXHRcdH1cblx0XHRpbmFjdGl2YXRlKCkge1xuXHRcdFx0aWYgKHRoaXMubGlzdCkge1xuXHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdH1cblx0XHRcdHRoaXMuaXNfYWN0aXZlID0gZmFsc2U7XG5cdFx0fVxuXHRcdGFjY2VwdENoZWNrKGRvbnRDaGVjaykge1xuXHRcdFx0dGhpcy5zYW5pdGl6ZUlucHV0KCk7XG5cdFx0XHRjb25zdCB2YWx1ZSA9IHRoaXMudGV4dC52YWx1ZS5zcGxpdCgnfCcpO1xuXHRcdFx0bGV0IGtleSA9IG51bGw7XG5cdFx0XHRpZiAodmFsdWUubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRbLCBrZXldID0gdmFsdWU7XG5cdFx0XHR9XG5cdFx0XHRsZXQgdiA9IHZhbHVlWzBdLnJlcGxhY2UoL18vZywgJyAnKS50cmltKCk7XG5cdFx0XHRpZiAoSEMuY2FwaXRhbGl6ZVBhZ2VOYW1lcykge1xuXHRcdFx0XHR2ID0gY2FwaXRhbGl6ZSh2KTtcblx0XHRcdH1cblx0XHRcdHRoaXMubGFzdElucHV0ID0gdjtcblx0XHRcdHYgPSByZXBsYWNlU2hvcnRjdXRzKHYsIEhDLnNob3J0Y3V0cyk7XG5cdFx0XHRpZiAodi5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0dGhpcy5jYW5jZWwoKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKFxuXHRcdFx0XHQhZG9udENoZWNrICYmXG5cdFx0XHRcdCgoY29uZi53Z05hbWVzcGFjZU51bWJlciA9PT0gMTQgJiYgdiA9PT0gY29uZi53Z1RpdGxlKSB8fCAoSEMuYmxhY2tsaXN0ICYmIEhDLmJsYWNrbGlzdC50ZXN0KHYpKSlcblx0XHRcdCkge1xuXHRcdFx0XHR0aGlzLmNhbmNlbCgpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmN1cnJlbnRDYXRlZ29yeSA9IHY7XG5cdFx0XHR0aGlzLmN1cnJlbnRLZXkgPSBrZXk7XG5cdFx0XHR0aGlzLmN1cnJlbnRFeGlzdHMgPSB0aGlzLmlucHV0RXhpc3RzO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdGFjY2VwdChldmVudCkge1xuXHRcdFx0Ly8gKGV2dEtleXMoZXZlbnQpICYgMSkgIT09IDBcblx0XHRcdC8vIOW9k+S4lOS7heW9k2V2dEtleXMoZXZlbnQp5Li6MeaXtu+8jOaVtOS4quWIpOWIq+W8j+aJjeS4unRydWVcblx0XHRcdHRoaXMubm9Db21taXQgPSBldnRLZXlzKGV2ZW50KSA9PT0gMTtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGV2dEtpbGwoZXZlbnQpO1xuXHRcdFx0aWYgKHRoaXMuYWNjZXB0Q2hlY2soKSkge1xuXHRcdFx0XHRjb25zdCB0b1Jlc29sdmUgPSBbdGhpc107XG5cdFx0XHRcdGNvbnN0IG9yaWdpbmFsID0gdGhpcy5jdXJyZW50Q2F0ZWdvcnk7XG5cdFx0XHRcdHJlc29sdmVNdWx0aSh0b1Jlc29sdmUsIChyZXNvbHZlZCkgPT4ge1xuXHRcdFx0XHRcdGlmIChyZXNvbHZlZFswXS5kYWIpIHtcblx0XHRcdFx0XHRcdHNob3dEYWIocmVzb2x2ZWRbMF0pO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAocmVzb2x2ZWRbMF0uYWNjZXB0Q2hlY2sodHJ1ZSkpIHtcblx0XHRcdFx0XHRcdHJlc29sdmVkWzBdLmNvbW1pdChcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZWRbMF0uY3VycmVudENhdGVnb3J5ID09PSBvcmlnaW5hbFxuXHRcdFx0XHRcdFx0XHRcdD8gbnVsbFxuXHRcdFx0XHRcdFx0XHRcdDogZ2V0TWVzc2FnZSgnbWVzc2FnZXMtY2F0X3Jlc29sdmVkJywgb3JpZ2luYWwpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblx0XHRjbG9zZSgpIHtcblx0XHRcdGlmICghdGhpcy5jYXRMaW5rKSB7XG5cdFx0XHRcdC8vIENyZWF0ZSBhIGNhdExpbmtcblx0XHRcdFx0dGhpcy5jYXRMaW5rID0gbWFrZSgnYScpO1xuXHRcdFx0XHR0aGlzLmNhdExpbmsuYXBwZW5kKG1ha2UoJ2ZvbycsIHRydWUpKTtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdHRoaXMuc3Bhbi5pbnNlcnRCZWZvcmUodGhpcy5jYXRMaW5rLCB0aGlzLnNwYW4uZmlyc3RDaGlsZC5uZXh0U2libGluZyk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmNhdExpbmsuZmlyc3RDaGlsZC5yZW1vdmUoKTtcblx0XHRcdHRoaXMuY2F0TGluay5hcHBlbmQobWFrZSh0aGlzLmN1cnJlbnRDYXRlZ29yeSwgdHJ1ZSkpO1xuXHRcdFx0dGhpcy5jYXRMaW5rLmhyZWYgPSB3aWtpUGFnZVBhdGgoYCR7SEMuY2F0ZWdvcnlfY2Fub25pY2FsfToke3RoaXMuY3VycmVudENhdGVnb3J5fWApO1xuXHRcdFx0dGhpcy5jYXRMaW5rLmNsYXNzTmFtZSA9IHRoaXMuY3VycmVudEV4aXN0cyA/ICcnIDogJ25ldyc7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZENhdGVnb3J5ID0gdGhpcy5jdXJyZW50Q2F0ZWdvcnk7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZEtleSA9IHRoaXMuY3VycmVudEtleTtcblx0XHRcdHRoaXMubGFzdFNhdmVkRXhpc3RzID0gdGhpcy5jdXJyZW50RXhpc3RzO1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRIaWRkZW4gPSB0aGlzLmN1cnJlbnRIaWRkZW47XG5cdFx0XHQvLyBDbG9zZSBmb3JtIGFuZCByZWRpc3BsYXkgY2F0ZWdvcnlcblx0XHRcdHRoaXMuaW5hY3RpdmF0ZSgpO1xuXHRcdFx0dGhpcy5mb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR0aGlzLmNhdExpbmsudGl0bGUgPSB0aGlzLmN1cnJlbnRLZXkgfHwgJyc7XG5cdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0aWYgKHRoaXMuaXNBZGRDYXRlZ29yeSkge1xuXHRcdFx0XHRpZiAob25VcGxvYWQgJiYgdGhpcy5saW5lKSB7XG5cdFx0XHRcdFx0bmV3IENhdGVnb3J5RWRpdG9yKHRoaXMubGluZSwgbnVsbCwgdGhpcy5zcGFuLCB0cnVlKTsgLy8gQ3JlYXRlIGEgbmV3IG9uZVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuaXNBZGRDYXRlZ29yeSA9IGZhbHNlO1xuXHRcdFx0XHR0aGlzLmxpbmtTcGFuLnJlbW92ZSgpO1xuXHRcdFx0XHR0aGlzLm1ha2VMaW5rU3BhbigpO1xuXHRcdFx0XHR0aGlzLnNwYW4uYXBwZW5kKHRoaXMubGlua1NwYW4pO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCF0aGlzLnVuZG9MaW5rKSB7XG5cdFx0XHRcdC8vIEFwcGVuZCBhbiB1bmRvIGxpbmsuXG5cdFx0XHRcdGNvbnN0IHNwYW4gPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHRcdGNvbnN0IGxpbmsgPSBtYWtlKCdhJyk7XG5cdFx0XHRcdGxpbmsuaHJlZiA9ICcjY2F0bGlua3MnO1xuXHRcdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yb2xsYmFjay5iaW5kKHRoaXMpKTtcblx0XHRcdFx0bGluay5hcHBlbmQobWFrZShIQy5saW5rcy51bmRvLCB0cnVlKSk7XG5cdFx0XHRcdGxpbmsudGl0bGUgPSBnZXRNZXNzYWdlKCd0b29sdGlwcy11bmRvJyk7XG5cdFx0XHRcdHNwYW4uYXBwZW5kKG1ha2UoJyAnLCB0cnVlKSk7XG5cdFx0XHRcdHNwYW4uYXBwZW5kKGxpbmspO1xuXHRcdFx0XHR0aGlzLm5vcm1hbExpbmtzLmFwcGVuZChzcGFuKTtcblx0XHRcdFx0dGhpcy51bmRvTGluayA9IHNwYW47XG5cdFx0XHRcdGlmICghb25VcGxvYWQpIHtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IEhDLmJnX2NoYW5nZWQ7XG5cdFx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0XHQvKiBlbXB0eSAqL1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMudXBEb3duTGlua3MpIHtcblx0XHRcdFx0dGhpcy51cERvd25MaW5rcy5zdHlsZS5kaXNwbGF5ID0gdGhpcy5sYXN0U2F2ZWRFeGlzdHMgPyAnJyA6ICdub25lJztcblx0XHRcdH1cblx0XHRcdHRoaXMubGlua1NwYW4uc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IENIQU5HRUQ7XG5cdFx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0XHR9XG5cdFx0Y29tbWl0KCkge1xuXHRcdFx0Ly8gQ2hlY2sgYWdhaW4gdG8gY2F0Y2ggcHJvYmxlbSBjYXNlcyBhZnRlciByZWRpcmVjdCByZXNvbHV0aW9uXG5cdFx0XHRpZiAoXG5cdFx0XHRcdCh0aGlzLmN1cnJlbnRDYXRlZ29yeSA9PT0gdGhpcy5vcmlnaW5hbENhdGVnb3J5ICYmXG5cdFx0XHRcdFx0KHRoaXMuY3VycmVudEtleSA9PT0gdGhpcy5vcmlnaW5hbEtleSB8fFxuXHRcdFx0XHRcdFx0KHRoaXMuY3VycmVudEtleSA9PT0gbnVsbCAmJiB0aGlzLm9yaWdpbmFsS2V5Lmxlbmd0aCA9PT0gMCkpKSB8fFxuXHRcdFx0XHQoY29uZi53Z05hbWVzcGFjZU51bWJlciA9PT0gMTQgJiYgdGhpcy5jdXJyZW50Q2F0ZWdvcnkgPT09IGNvbmYud2dUaXRsZSkgfHxcblx0XHRcdFx0KEhDLmJsYWNrbGlzdCAmJiBIQy5ibGFja2xpc3QudGVzdCh0aGlzLmN1cnJlbnRDYXRlZ29yeSkpXG5cdFx0XHQpIHtcblx0XHRcdFx0dGhpcy5jYW5jZWwoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5jbG9zZSgpO1xuXHRcdFx0aWYgKCFjb21taXRCdXR0b24gJiYgIW9uVXBsb2FkKSB7XG5cdFx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0XHRpbml0aWF0ZUVkaXQoXG5cdFx0XHRcdFx0KGZhaWx1cmUpID0+IHtcblx0XHRcdFx0XHRcdHBlcmZvcm1DaGFuZ2VzKGZhaWx1cmUsIHNlbGYpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0KG1zZykgPT4ge1xuXHRcdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkobXNnLCB7dGFnOiAnaG90Q2F0J30pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmVtb3ZlKGV2ZW50KSB7XG5cdFx0XHQvLyAoZXZ0S2V5cyhldmVudCkgJiAxKVxuXHRcdFx0Ly8g5b2T5LiU5LuF5b2TZXZ0S2V5cyhldmVudCnkuLox5pe277yM5pW05Liq5Yik5Yir5byP5omN5Li6Me+8jOWQpuWImemDveaYrzBcblx0XHRcdHRoaXMuZG9SZW1vdmUoZXZ0S2V5cyhldmVudCkgPT09IDEpO1xuXHRcdFx0cmV0dXJuIGV2dEtpbGwoZXZlbnQpO1xuXHRcdH1cblx0XHRkb1JlbW92ZShub0NvbW1pdCkge1xuXHRcdFx0aWYgKHRoaXMuaXNBZGRDYXRlZ29yeSkge1xuXHRcdFx0XHQvLyBFbXB0eSBpbnB1dCBvbiBhZGRpbmcgYSBuZXcgY2F0ZWdvcnlcblx0XHRcdFx0dGhpcy5jYW5jZWwoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFjb21taXRCdXR0b24gJiYgIW9uVXBsb2FkKSB7XG5cdFx0XHRcdGZvciAoY29uc3QgZWRpdG9yIG9mIGVkaXRvcnMpIHtcblx0XHRcdFx0XHRpZiAoZWRpdG9yLnN0YXRlICE9PSBVTkNIQU5HRUQpIHtcblx0XHRcdFx0XHRcdHNldE11bHRpSW5wdXQoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGNvbW1pdEJ1dHRvbikge1xuXHRcdFx0XHR0aGlzLmNhdExpbmsudGl0bGUgPSAnJztcblx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmNzc1RleHQgKz0gJzsgdGV4dC1kZWNvcmF0aW9uIDogbGluZS10aHJvdWdoICFpbXBvcnRhbnQ7Jztcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gSEMuYmdfY2hhbmdlZDtcblx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0LyogZW1wdHkgKi9cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLm9yaWdpbmFsU3RhdGUgPSB0aGlzLnN0YXRlO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gREVMRVRFRDtcblx0XHRcdFx0dGhpcy5ub3JtYWxMaW5rcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR0aGlzLnVuZGVsTGluay5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHRcdFx0fSBlbHNlIGlmIChvblVwbG9hZCkge1xuXHRcdFx0XHQvLyBSZW1vdmUgdGhpcyBlZGl0b3IgY29tcGxldGVseVxuXHRcdFx0XHR0aGlzLnJlbW92ZUVkaXRvcigpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5vcmlnaW5hbFN0YXRlID0gdGhpcy5zdGF0ZTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IERFTEVURUQ7XG5cdFx0XHRcdHRoaXMubm9Db21taXQgPSBub0NvbW1pdCB8fCBIQy5kZWxfbmVlZHNfZGlmZjtcblx0XHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHRcdGluaXRpYXRlRWRpdChcblx0XHRcdFx0XHQoZmFpbHVyZSkgPT4ge1xuXHRcdFx0XHRcdFx0cGVyZm9ybUNoYW5nZXMoZmFpbHVyZSwgc2VsZik7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQobXNnKSA9PiB7XG5cdFx0XHRcdFx0XHRzZWxmLnN0YXRlID0gc2VsZi5vcmlnaW5hbFN0YXRlO1xuXHRcdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkobXNnLCB7dGFnOiAnaG90Q2F0J30pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmVzdG9yZShldmVudCkge1xuXHRcdFx0Ly8gQ2FuIG9jY3VyIG9ubHkgaWYgd2UgZG8gaGF2ZSBhIGNvbW1pdCBidXR0b24gYW5kIGFyZSBub3Qgb24gdGhlIHVwbG9hZCBmb3JtXG5cdFx0XHR0aGlzLmNhdExpbmsudGl0bGUgPSB0aGlzLmN1cnJlbnRLZXkgfHwgJyc7XG5cdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUudGV4dERlY29yYXRpb24gPSAnJztcblx0XHRcdHRoaXMuc3RhdGUgPSB0aGlzLm9yaWdpbmFsU3RhdGU7XG5cdFx0XHRpZiAodGhpcy5zdGF0ZSA9PT0gVU5DSEFOR0VEKSB7XG5cdFx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gSEMuYmdfY2hhbmdlZDtcblx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0LyogZW1wdHkgKi9cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5ub3JtYWxMaW5rcy5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHR0aGlzLnVuZGVsTGluay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0Y2hlY2tNdWx0aUlucHV0KCk7XG5cdFx0XHRyZXR1cm4gZXZ0S2lsbChldmVudCk7XG5cdFx0fVxuXHRcdC8vIEludGVybmFsIG9wZXJhdGlvbnNcblx0XHRzZWxlY3RFbmdpbmUoZW5naW5lTmFtZSkge1xuXHRcdFx0aWYgKCF0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5lbmdpbmVTZWxlY3Rvci5vcHRpb25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iub3B0aW9uc1tpXS5zZWxlY3RlZCA9IHRoaXMuZW5naW5lU2VsZWN0b3Iub3B0aW9uc1tpXS52YWx1ZSA9PT0gZW5naW5lTmFtZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0c2FuaXRpemVJbnB1dCgpIHtcblx0XHRcdGxldCB2ID0gdGhpcy50ZXh0LnZhbHVlIHx8ICcnO1xuXHRcdFx0diA9IHYucmVwbGFjZSgvXihcXHN8XykrLywgJycpOyAvLyBUcmltIGxlYWRpbmcgYmxhbmtzIGFuZCB1bmRlcnNjb3Jlc1xuXHRcdFx0Y29uc3QgcmUgPSBuZXcgUmVnRXhwKGBeKCR7SEMuY2F0ZWdvcnlfcmVnZXhwfSk6YCk7XG5cdFx0XHRpZiAocmUudGVzdCh2KSkge1xuXHRcdFx0XHR2ID0gdi5zbGljZShNYXRoLm1heCgwLCB2LmluZGV4T2YoJzonKSArIDEpKS5yZXBsYWNlKC9eKFxcc3xfKSsvLCAnJyk7XG5cdFx0XHR9XG5cdFx0XHR2ID0gdi5yZXBsYWNlKC9cXHUyMDBFJC8sICcnKTsgLy8gVHJpbSBlbmRpbmcgbGVmdC10by1yaWdodCBtYXJrXG5cdFx0XHRpZiAoSEMuY2FwaXRhbGl6ZVBhZ2VOYW1lcykge1xuXHRcdFx0XHR2ID0gY2FwaXRhbGl6ZSh2KTtcblx0XHRcdH1cblx0XHRcdC8vIE9ubHkgdXBkYXRlIHRoZSBpbnB1dCBmaWVsZCBpZiB0aGVyZSBpcyBhIGRpZmZlcmVuY2UuIFZhcmlvdXMgYnJvd3NlcnMgb3RoZXJ3aXNlXG5cdFx0XHQvLyByZXNldCB0aGUgc2VsZWN0aW9uIGFuZCBjdXJzb3IgcG9zaXRpb24gYWZ0ZXIgZWFjaCB2YWx1ZSByZS1hc3NpZ25tZW50LlxuXHRcdFx0aWYgKHRoaXMudGV4dC52YWx1ZSAhPT0gbnVsbCAmJiB0aGlzLnRleHQudmFsdWUgIT09IHYpIHtcblx0XHRcdFx0dGhpcy50ZXh0LnZhbHVlID0gdjtcblx0XHRcdH1cblx0XHR9XG5cdFx0bWFrZUNhbGwodXJsLCBjYWxsYmFja09iaiwgZW5naW5lLCBxdWVyeUtleSwgY2xlYW5LZXkpIHtcblx0XHRcdGxldCBjYiA9IGNhbGxiYWNrT2JqO1xuXHRcdFx0Y29uc3QgZSA9IGVuZ2luZTtcblx0XHRcdGNvbnN0IHYgPSBxdWVyeUtleTtcblx0XHRcdGNvbnN0IHogPSBjbGVhbktleTtcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0Y29uc3QgZG9uZSA9ICgpID0+IHtcblx0XHRcdFx0Y2IuY2FsbHNNYWRlKys7XG5cdFx0XHRcdGlmIChjYi5jYWxsc01hZGUgPT09IGNiLm5vZkNhbGxzKSB7XG5cdFx0XHRcdFx0aWYgKGNiLmV4aXN0cykge1xuXHRcdFx0XHRcdFx0Y2IuYWxsVGl0bGVzLmV4aXN0cyA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChjYi5ub3JtYWxpemVkKSB7XG5cdFx0XHRcdFx0XHRjYi5hbGxUaXRsZXMubm9ybWFsaXplZCA9IGNiLm5vcm1hbGl6ZWQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICghY2IuZG9udENhY2hlICYmICFzdWdnZXN0aW9uQ29uZmlnc1tjYi5lbmdpbmVOYW1lXS5jYWNoZVt6XSkge1xuXHRcdFx0XHRcdFx0c3VnZ2VzdGlvbkNvbmZpZ3NbY2IuZW5naW5lTmFtZV0uY2FjaGVbel0gPSBjYi5hbGxUaXRsZXM7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHNlbGYudGV4dC5yZWFkT25seSA9IGZhbHNlO1xuXHRcdFx0XHRcdGlmICghY2IuY2FuY2VsbGVkKSB7XG5cdFx0XHRcdFx0XHRzZWxmLnNob3dTdWdnZXN0aW9ucyhjYi5hbGxUaXRsZXMsIGNiLm5vQ29tcGxldGlvbiwgdiwgY2IuZW5naW5lTmFtZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChjYiA9PT0gc2VsZi5jYWxsYmFja09iaikge1xuXHRcdFx0XHRcdFx0c2VsZi5jYWxsYmFja09iaiA9IG51bGw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNiID0gdW5kZWZpbmVkO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0JC5nZXRKU09OKHVybCwgKGpzb24pID0+IHtcblx0XHRcdFx0Y29uc3QgdGl0bGVzID0gZS5oYW5kbGVyKGpzb24sIHopO1xuXHRcdFx0XHRpZiAodGl0bGVzICYmIHRpdGxlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0Y2IuYWxsVGl0bGVzID0gY2IuYWxsVGl0bGVzID09PSBudWxsID8gdGl0bGVzIDogWy4uLmNiLmFsbFRpdGxlcywgLi4uZ2VuZXJhdGVBcnJheSh0aXRsZXMpXTtcblx0XHRcdFx0XHRpZiAodGl0bGVzLmV4aXN0cykge1xuXHRcdFx0XHRcdFx0Y2IuZXhpc3RzID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHRpdGxlcy5ub3JtYWxpemVkKSB7XG5cdFx0XHRcdFx0XHRjYi5ub3JtYWxpemVkID0gdGl0bGVzLm5vcm1hbGl6ZWQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGRvbmUoKTtcblx0XHRcdH0pLmZhaWwoKHJlcSkgPT4ge1xuXHRcdFx0XHRpZiAoIXJlcSkge1xuXHRcdFx0XHRcdG5vU3VnZ2VzdGlvbnMgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNiLmRvbnRDYWNoZSA9IHRydWU7XG5cdFx0XHRcdGRvbmUoKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRjYWxsYmFja09iaiA9IG51bGw7XG5cdFx0dGV4dGNoYW5nZShkb250X2F1dG9jb21wbGV0ZSwgZm9yY2UpIHtcblx0XHRcdC8vIEhpZGUgYWxsIG90aGVyIGxpc3RzXG5cdFx0XHRtYWtlQWN0aXZlKHRoaXMpO1xuXHRcdFx0Ly8gR2V0IGlucHV0IHZhbHVlLCBvbWl0IHNvcnQga2V5LCBpZiBhbnlcblx0XHRcdHRoaXMuc2FuaXRpemVJbnB1dCgpO1xuXHRcdFx0bGV0IHYgPSB0aGlzLnRleHQudmFsdWU7XG5cdFx0XHQvLyBEaXNyZWdhcmQgYW55dGhpbmcgYWZ0ZXIgYSBwaXBlLlxuXHRcdFx0Y29uc3QgcGlwZSA9IHYuaW5kZXhPZignfCcpO1xuXHRcdFx0aWYgKHBpcGUgPT09IC0xKSB7XG5cdFx0XHRcdHRoaXMuY3VycmVudEtleSA9IG51bGw7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmN1cnJlbnRLZXkgPSB2LnNsaWNlKE1hdGgubWF4KDAsIHBpcGUgKyAxKSk7XG5cdFx0XHRcdHYgPSB2LnNsaWNlKDAsIE1hdGgubWF4KDAsIHBpcGUpKTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmxhc3RJbnB1dCA9PT0gdiAmJiAhZm9yY2UpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fSAvLyBObyBjaGFuZ2Vcblx0XHRcdGlmICh0aGlzLmxhc3RJbnB1dCAhPT0gdikge1xuXHRcdFx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0XHRcdH1cblx0XHRcdHRoaXMubGFzdElucHV0ID0gdjtcblx0XHRcdHRoaXMubGFzdFJlYWxJbnB1dCA9IHY7XG5cdFx0XHQvLyBNYXJrIGJsYWNrbGlzdGVkIGlucHV0cy5cblx0XHRcdHRoaXMub2suZGlzYWJsZWQgPSB2Lmxlbmd0aCA+IDAgJiYgSEMuYmxhY2tsaXN0ICYmIEhDLmJsYWNrbGlzdC50ZXN0KHYpO1xuXHRcdFx0aWYgKG5vU3VnZ2VzdGlvbnMpIHtcblx0XHRcdFx0Ly8gTm8gQWpheDoganVzdCBtYWtlIHN1cmUgdGhlIGxpc3QgaXMgaGlkZGVuXG5cdFx0XHRcdGlmICh0aGlzLmxpc3QpIHtcblx0XHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy5pY29uKSB7XG5cdFx0XHRcdFx0dGhpcy5pY29uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHYubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHRoaXMuc2hvd1N1Z2dlc3Rpb25zKFtdKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0bGV0IGNsZWFuS2V5ID0gdi5yZXBsYWNlKC9bXFx1MjAwRVxcdTIwMEZcXHUyMDJBLVxcdTIwMkVdL2csICcnKS5yZXBsYWNlKHdpa2lUZXh0QmxhbmtSRSwgJyAnKTtcblx0XHRcdGNsZWFuS2V5ID0gcmVwbGFjZVNob3J0Y3V0cyhjbGVhbktleSwgSEMuc2hvcnRjdXRzKTtcblx0XHRcdGNsZWFuS2V5ID0gY2xlYW5LZXkudHJpbSgpO1xuXHRcdFx0aWYgKGNsZWFuS2V5Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHR0aGlzLnNob3dTdWdnZXN0aW9ucyhbXSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmNhbGxiYWNrT2JqKSB7XG5cdFx0XHRcdHRoaXMuY2FsbGJhY2tPYmouY2FuY2VsbGVkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGVuZ2luZU5hbWUgPSBzdWdnZXN0aW9uQ29uZmlnc1t0aGlzLmVuZ2luZV0gPyB0aGlzLmVuZ2luZSA6ICdjb21iaW5lZCc7XG5cdFx0XHRkb250X2F1dG9jb21wbGV0ZSB8fD0gc3VnZ2VzdGlvbkNvbmZpZ3NbZW5naW5lTmFtZV0ubm9Db21wbGV0aW9uO1xuXHRcdFx0aWYgKHN1Z2dlc3Rpb25Db25maWdzW2VuZ2luZU5hbWVdLmNhY2hlW2NsZWFuS2V5XSkge1xuXHRcdFx0XHR0aGlzLnNob3dTdWdnZXN0aW9ucyhzdWdnZXN0aW9uQ29uZmlnc1tlbmdpbmVOYW1lXS5jYWNoZVtjbGVhbktleV0sIGRvbnRfYXV0b2NvbXBsZXRlLCB2LCBlbmdpbmVOYW1lKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3Qge2VuZ2luZXN9ID0gc3VnZ2VzdGlvbkNvbmZpZ3NbZW5naW5lTmFtZV07XG5cdFx0XHR0aGlzLmNhbGxiYWNrT2JqID0ge1xuXHRcdFx0XHRhbGxUaXRsZXM6IG51bGwsXG5cdFx0XHRcdGNhbGxzTWFkZTogMCxcblx0XHRcdFx0bm9mQ2FsbHM6IGVuZ2luZXMubGVuZ3RoLFxuXHRcdFx0XHRub0NvbXBsZXRpb246IGRvbnRfYXV0b2NvbXBsZXRlLFxuXHRcdFx0XHRlbmdpbmVOYW1lLFxuXHRcdFx0fTtcblx0XHRcdHRoaXMubWFrZUNhbGxzKGVuZ2luZXMsIHRoaXMuY2FsbGJhY2tPYmosIHYsIGNsZWFuS2V5KTtcblx0XHR9XG5cdFx0bWFrZUNhbGxzKGVuZ2luZXMsIGNiLCB2LCBjbGVhbktleSkge1xuXHRcdFx0Zm9yIChjb25zdCBlbmdpbmVfIG9mIGVuZ2luZXMpIHtcblx0XHRcdFx0Y29uc3QgZW5naW5lID0gc3VnZ2VzdGlvbkVuZ2luZXNbZW5naW5lX107XG5cdFx0XHRcdGNvbnN0IHVybCA9IGNvbmYud2dTY3JpcHRQYXRoICsgZW5naW5lLnVyaS5yZXBsYWNlKC9cXCQxL2csIGVuY29kZVVSSUNvbXBvbmVudChjbGVhbktleSkpO1xuXHRcdFx0XHR0aGlzLm1ha2VDYWxsKHVybCwgY2IsIGVuZ2luZSwgdiwgY2xlYW5LZXkpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRzaG93U3VnZ2VzdGlvbnModGl0bGVzLCBkb250QXV0b2NvbXBsZXRlLCBxdWVyeUtleSwgZW5naW5lTmFtZSkge1xuXHRcdFx0dGhpcy50ZXh0LnJlYWRPbmx5ID0gZmFsc2U7XG5cdFx0XHR0aGlzLmRhYiA9IG51bGw7XG5cdFx0XHR0aGlzLnNob3dzTGlzdCA9IGZhbHNlO1xuXHRcdFx0aWYgKCF0aGlzLmxpc3QpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKG5vU3VnZ2VzdGlvbnMpIHtcblx0XHRcdFx0aWYgKHRoaXMubGlzdCkge1xuXHRcdFx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLmljb24pIHtcblx0XHRcdFx0XHR0aGlzLmljb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmlucHV0RXhpc3RzID0gdHJ1ZTsgLy8gRGVmYXVsdC4uLlxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmVuZ2luZU5hbWUgPSBlbmdpbmVOYW1lO1xuXHRcdFx0aWYgKGVuZ2luZU5hbWUpIHtcblx0XHRcdFx0aWYgKCF0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVOYW1lID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdH1cblx0XHRcdGlmIChxdWVyeUtleSkge1xuXHRcdFx0XHRpZiAodGhpcy5sYXN0SW5wdXQuaW5kZXhPZihxdWVyeUtleSkpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdHRoaXMubGFzdFF1ZXJ5ICYmXG5cdFx0XHRcdFx0dGhpcy5sYXN0SW5wdXQuaW5kZXhPZih0aGlzLmxhc3RRdWVyeSkgPT09IDAgJiZcblx0XHRcdFx0XHR0aGlzLmxhc3RRdWVyeS5sZW5ndGggPiBxdWVyeUtleS5sZW5ndGhcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxhc3RRdWVyeSA9IHF1ZXJ5S2V5O1xuXHRcdFx0Ly8gR2V0IGN1cnJlbnQgaW5wdXQgdGV4dFxuXHRcdFx0bGV0IHYgPSB0aGlzLnRleHQudmFsdWUuc3BsaXQoJ3wnKTtcblx0XHRcdGNvbnN0IGtleSA9IHYubGVuZ3RoID4gMSA/IGB8JHt2WzFdfWAgOiAnJztcblx0XHRcdHYgPSBIQy5jYXBpdGFsaXplUGFnZU5hbWVzID8gY2FwaXRhbGl6ZSh2WzBdKSA6IHZbMF07XG5cdFx0XHRsZXQgdk5vcm1hbGl6ZWQgPSB2O1xuXHRcdFx0Y29uc3Qga25vd25Ub0V4aXN0ID0gdGl0bGVzICYmIHRpdGxlcy5leGlzdHM7XG5cdFx0XHRsZXQgaTtcblx0XHRcdGlmICh0aXRsZXMpIHtcblx0XHRcdFx0aWYgKHRpdGxlcy5ub3JtYWxpemVkICYmIHYuaW5kZXhPZihxdWVyeUtleSkgPT09IDApIHtcblx0XHRcdFx0XHQvLyBXZSBnb3QgYmFjayBhIGRpZmZlcmVudCBub3JtYWxpemF0aW9uIHRoYW4gd2hhdCBpcyBpbiB0aGUgaW5wdXQgZmllbGRcblx0XHRcdFx0XHR2Tm9ybWFsaXplZCA9IHRpdGxlcy5ub3JtYWxpemVkICsgdi5zbGljZShxdWVyeUtleS5sZW5ndGgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IHZMb3cgPSB2Tm9ybWFsaXplZC50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHQvLyBTdHJpcCBibGFja2xpc3RlZCBjYXRlZ29yaWVzXG5cdFx0XHRcdGlmIChIQy5ibGFja2xpc3QpIHtcblx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgdGl0bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRpZiAoSEMuYmxhY2tsaXN0LnRlc3QodGl0bGVzW2ldKSkge1xuXHRcdFx0XHRcdFx0XHR0aXRsZXMuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRcdFx0XHRpLS07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRpdGxlcy5zb3J0KChhLCBiKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGEgPT09IGIpIHtcblx0XHRcdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoYS5pbmRleE9mKGIpID09PSAwKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gYSBiZWdpbnMgd2l0aCBiOiBhID4gYlxuXHRcdFx0XHRcdGlmIChiLmluZGV4T2YoYSkgPT09IDApIHtcblx0XHRcdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gYiBiZWdpbnMgd2l0aCBhOiBhIDwgYlxuXHRcdFx0XHRcdC8vIE9wZW5zZWFyY2ggbWF5IHJldHVybiBzdHVmZiBub3QgYmVnaW5uaW5nIHdpdGggdGhlIHNlYXJjaCBwcmVmaXghXG5cdFx0XHRcdFx0bGV0IHByZWZpeE1hdGNoQSA9IGEuaW5kZXhPZih2Tm9ybWFsaXplZCkgPT09IDAgPyAxIDogMDtcblx0XHRcdFx0XHRsZXQgcHJlZml4TWF0Y2hCID0gYi5pbmRleE9mKHZOb3JtYWxpemVkKSA9PT0gMCA/IDEgOiAwO1xuXHRcdFx0XHRcdGlmIChwcmVmaXhNYXRjaEEgIT09IHByZWZpeE1hdGNoQikge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHByZWZpeE1hdGNoQiAtIHByZWZpeE1hdGNoQTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gQ2FzZS1pbnNlbnNpdGl2ZSBwcmVmaXggbWF0Y2ghXG5cdFx0XHRcdFx0Y29uc3QgYUxvdyA9IGEudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0XHRjb25zdCBiTG93ID0gYi50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHRcdHByZWZpeE1hdGNoQSA9IGFMb3cuaW5kZXhPZih2TG93KSA9PT0gMCA/IDEgOiAwO1xuXHRcdFx0XHRcdHByZWZpeE1hdGNoQiA9IGJMb3cuaW5kZXhPZih2TG93KSA9PT0gMCA/IDEgOiAwO1xuXHRcdFx0XHRcdGlmIChwcmVmaXhNYXRjaEEgIT09IHByZWZpeE1hdGNoQikge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHByZWZpeE1hdGNoQiAtIHByZWZpeE1hdGNoQTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGEgPCBiKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gLTE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChiIDwgYSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0Ly8gUmVtb3ZlIGR1cGxpY2F0ZXMgYW5kIHNlbGYtcmVmZXJlbmNlc1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgdGl0bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdFx0KGkgKyAxIDwgdGl0bGVzLmxlbmd0aCAmJiB0aXRsZXNbaV0gPT09IHRpdGxlc1tpICsgMV0pIHx8XG5cdFx0XHRcdFx0XHQoY29uZi53Z05hbWVzcGFjZU51bWJlciA9PT0gMTQgJiYgdGl0bGVzW2ldID09PSBjb25mLndnVGl0bGUpXG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHR0aXRsZXMuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRcdFx0aS0tO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKCF0aXRsZXMgfHwgdGl0bGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRpZiAodGhpcy5saXN0KSB7XG5cdFx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGVuZ2luZU5hbWUgJiYgc3VnZ2VzdGlvbkNvbmZpZ3NbZW5naW5lTmFtZV0gJiYgIXN1Z2dlc3Rpb25Db25maWdzW2VuZ2luZU5hbWVdLnRlbXApIHtcblx0XHRcdFx0XHRpZiAodGhpcy5pY29uKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmljb24uc3JjID0gSEMuZXhpc3RzTm87XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuaW5wdXRFeGlzdHMgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBbZmlyc3RUaXRsZV0gPSB0aXRsZXM7XG5cdFx0XHRjb25zdCBjb21wbGV0ZWQgPSB0aGlzLmF1dG9Db21wbGV0ZShmaXJzdFRpdGxlLCB2LCB2Tm9ybWFsaXplZCwga2V5LCBkb250QXV0b2NvbXBsZXRlKTtcblx0XHRcdGNvbnN0IGV4aXN0aW5nID0gY29tcGxldGVkIHx8IGtub3duVG9FeGlzdCB8fCBmaXJzdFRpdGxlID09PSByZXBsYWNlU2hvcnRjdXRzKHYsIEhDLnNob3J0Y3V0cyk7XG5cdFx0XHRpZiAoZW5naW5lTmFtZSAmJiBzdWdnZXN0aW9uQ29uZmlnc1tlbmdpbmVOYW1lXSAmJiAhc3VnZ2VzdGlvbkNvbmZpZ3NbZW5naW5lTmFtZV0udGVtcCkge1xuXHRcdFx0XHR0aGlzLmljb24uc3JjID0gZXhpc3RpbmcgPyBIQy5leGlzdHNZZXMgOiBIQy5leGlzdHNObztcblx0XHRcdFx0dGhpcy5pbnB1dEV4aXN0cyA9IGV4aXN0aW5nO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGNvbXBsZXRlZCkge1xuXHRcdFx0XHR0aGlzLmxhc3RJbnB1dCA9IGZpcnN0VGl0bGU7XG5cdFx0XHRcdGlmICh0aXRsZXMubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyAoUmUtKWZpbGwgdGhlIGxpc3Rcblx0XHRcdHdoaWxlICh0aGlzLmxpc3QuZmlyc3RDaGlsZCkge1xuXHRcdFx0XHR0aGlzLmxpc3QuZmlyc3RDaGlsZC5yZW1vdmUoKTtcblx0XHRcdH1cblx0XHRcdGZvciAoaSA9IDA7IGkgPCB0aXRsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29uc3Qgb3B0ID0gbWFrZSgnb3B0aW9uJyk7XG5cdFx0XHRcdG9wdC5hcHBlbmQobWFrZSh0aXRsZXNbaV0sIHRydWUpKTtcblx0XHRcdFx0b3B0LnNlbGVjdGVkID0gY29tcGxldGVkICYmIGkgPT09IDA7XG5cdFx0XHRcdHRoaXMubGlzdC5hcHBlbmQob3B0KTtcblx0XHRcdH1cblx0XHRcdHRoaXMuZGlzcGxheUxpc3QoKTtcblx0XHR9XG5cdFx0ZGlzcGxheUxpc3QoKSB7XG5cdFx0XHR0aGlzLnNob3dzTGlzdCA9IHRydWU7XG5cdFx0XHRpZiAoIXRoaXMuaXNfYWN0aXZlKSB7XG5cdFx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHRpZiAodGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRsZXQgbm9mSXRlbXMgPSBNYXRoLm1pbih0aGlzLmxpc3Qub3B0aW9ucy5sZW5ndGgsIEhDLmxpc3RTaXplKTtcblx0XHRcdGlmIChub2ZJdGVtcyA8PSAxKSB7XG5cdFx0XHRcdG5vZkl0ZW1zID0gMjtcblx0XHRcdH1cblx0XHRcdHRoaXMubGlzdC5zaXplID0gbm9mSXRlbXM7XG5cdFx0XHR0aGlzLmxpc3Quc3R5bGUuYWxpZ24gPSBpc19ydGwgPyAncmlnaHQnIDogJ2xlZnQnO1xuXHRcdFx0dGhpcy5saXN0LnN0eWxlLnpJbmRleCA9IDU7XG5cdFx0XHR0aGlzLmxpc3Quc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuXHRcdFx0Ly8gQ29tcHV0ZSBpbml0aWFsIGxpc3QgcG9zaXRpb24uIEZpcnN0IHRoZSBoZWlnaHQuXG5cdFx0XHRjb25zdCBhbmNob3IgPSBpc19ydGwgPyAncmlnaHQnIDogJ2xlZnQnO1xuXHRcdFx0bGV0IGxpc3RoID0gMDtcblx0XHRcdGlmICh0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG5cdFx0XHRcdC8vIE9mZi1zY3JlZW4gZGlzcGxheSB0byBnZXQgdGhlIGhlaWdodFxuXHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUudG9wID0gYCR7dGhpcy50ZXh0Lm9mZnNldFRvcH1weGA7XG5cdFx0XHRcdHRoaXMubGlzdC5zdHlsZVthbmNob3JdID0gJy0xMDAwMHB4Jztcblx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdFx0bGlzdGggPSB0aGlzLmxpc3Qub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxpc3RoID0gdGhpcy5saXN0Lm9mZnNldEhlaWdodDtcblx0XHRcdH1cblx0XHRcdC8vIEFwcHJveGltYXRlIGNhbGN1bGF0aW9uIG9mIG1heGltdW0gbGlzdCBzaXplXG5cdFx0XHRsZXQgbWF4TGlzdEhlaWdodCA9IGxpc3RoO1xuXHRcdFx0aWYgKG5vZkl0ZW1zIDwgSEMubGlzdFNpemUpIHtcblx0XHRcdFx0bWF4TGlzdEhlaWdodCA9IChsaXN0aCAvIG5vZkl0ZW1zKSAqIEhDLmxpc3RTaXplO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3Qgdmlld3BvcnQgPSAod2hhdCkgPT4ge1xuXHRcdFx0XHRjb25zdCBzID0gYGNsaWVudCR7d2hhdH1gO1xuXHRcdFx0XHRyZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W3NdIDogMDtcblx0XHRcdH07XG5cdFx0XHRjb25zdCBzY3JvbGxfb2Zmc2V0ID0gKHdoYXQpID0+IHtcblx0XHRcdFx0Y29uc3QgcyA9IGBzY3JvbGwke3doYXR9YDtcblx0XHRcdFx0bGV0IHJlc3VsdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtzXSA6IDA7XG5cdFx0XHRcdGlmIChpc19ydGwgJiYgd2hhdCA9PT0gJ0xlZnQnKSB7XG5cdFx0XHRcdFx0Ly8gUlRMIGluY29uc2lzdGVuY2llcy5cblx0XHRcdFx0XHQvLyBGRjogMCBhdCB0aGUgZmFyIHJpZ2h0LCB0aGVuIGluY3JlYXNpbmdseSBuZWdhdGl2ZSB2YWx1ZXMuXG5cdFx0XHRcdFx0Ly8gSUUgPj0gODogMCBhdCB0aGUgZmFyIHJpZ2h0LCB0aGVuIGluY3JlYXNpbmdseSBwb3NpdGl2ZSB2YWx1ZXMuXG5cdFx0XHRcdFx0Ly8gV2Via2l0OiBzY3JvbGxXaWR0aCAtIGNsaWVudFdpZHRoIGF0IHRoZSBmYXIgcmlnaHQsIHRoZW4gZG93biB0byB6ZXJvLlxuXHRcdFx0XHRcdC8vIE9wZXJhOiBkb24ndCBrbm93Li4uXG5cdFx0XHRcdFx0aWYgKHJlc3VsdCA8IDApIHtcblx0XHRcdFx0XHRcdHJlc3VsdCA9IC1yZXN1bHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICghaXNfd2Via2l0KSB7XG5cdFx0XHRcdFx0XHRyZXN1bHQgPSBzY3JvbGxfb2Zmc2V0KCdXaWR0aCcpIC0gdmlld3BvcnQoJ1dpZHRoJykgLSByZXN1bHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIE5vdyBhbGwgaGF2ZSB3ZWJraXQgYmVoYXZpb3IsIGkuZS4gemVybyBpZiBhdCB0aGUgbGVmdG1vc3QgZWRnZS5cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fTtcblx0XHRcdGNvbnN0IHBvc2l0aW9uID0gKG5vZGUpID0+IHtcblx0XHRcdFx0Ly8gU3RyaXBwZWQtZG93biBzaW1wbGlmaWVkIHBvc2l0aW9uIGZ1bmN0aW9uLiBJdCdzIGdvb2QgZW5vdWdoIGZvciBvdXIgcHVycG9zZXMuXG5cdFx0XHRcdGlmIChub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCkge1xuXHRcdFx0XHRcdGNvbnN0IGJveCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdHg6IE1hdGgucm91bmQoYm94LmxlZnQgKyBzY3JvbGxfb2Zmc2V0KCdMZWZ0JykpLFxuXHRcdFx0XHRcdFx0eTogTWF0aC5yb3VuZChib3gudG9wICsgc2Nyb2xsX29mZnNldCgnVG9wJykpLFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IHQgPSAwO1xuXHRcdFx0XHRsZXQgbCA9IDA7XG5cdFx0XHRcdGRvIHtcblx0XHRcdFx0XHR0ICs9IG5vZGUub2Zmc2V0VG9wIHx8IDA7XG5cdFx0XHRcdFx0bCArPSBub2RlLm9mZnNldExlZnQgfHwgMDtcblx0XHRcdFx0XHRub2RlID0gbm9kZS5vZmZzZXRQYXJlbnQ7XG5cdFx0XHRcdH0gd2hpbGUgKG5vZGUpO1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHg6IGwsXG5cdFx0XHRcdFx0eTogdCxcblx0XHRcdFx0fTtcblx0XHRcdH07XG5cdFx0XHRjb25zdCB0ZXh0UG9zID0gcG9zaXRpb24odGhpcy50ZXh0KTtcblx0XHRcdGNvbnN0IG5sID0gMDtcblx0XHRcdGxldCBudCA9IDA7XG5cdFx0XHQvLyBPcGVyYSA5LjUgc29tZWhvdyBoYXMgb2Zmc2V0V2lkdGggPSAwIGhlcmU/PyBVc2UgdGhlIG5leHQgYmVzdCB2YWx1ZS4uLlxuXHRcdFx0bGV0IG9mZnNldCA9IDA7XG5cdFx0XHRjb25zdCB0ZXh0Qm94V2lkdGggPSB0aGlzLnRleHQub2Zmc2V0V2lkdGggfHwgdGhpcy50ZXh0LmNsaWVudFdpZHRoO1xuXHRcdFx0aWYgKHRoaXMuZW5naW5lTmFtZSkge1xuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLnpJbmRleCA9IDU7XG5cdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLndpZHRoID0gYCR7dGV4dEJveFdpZHRofXB4YDtcblx0XHRcdFx0Ly8gRmlndXJlIG91dCB0aGUgaGVpZ2h0IG9mIHRoaXMgc2VsZWN0b3I6IGRpc3BsYXkgaXQgb2ZmLXNjcmVlbiwgdGhlbiBoaWRlIGl0IGFnYWluLlxuXHRcdFx0XHRpZiAodGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlW2FuY2hvcl0gPSAnLTEwMDAwcHgnO1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUudG9wID0gJzAnO1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0XHRcdG9mZnNldCA9IHRoaXMuZW5naW5lU2VsZWN0b3Iub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRvZmZzZXQgPSB0aGlzLmVuZ2luZVNlbGVjdG9yLm9mZnNldEhlaWdodDtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlW2FuY2hvcl0gPSBgJHtubH1weGA7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGV4dFBvcy55IDwgbWF4TGlzdEhlaWdodCArIG9mZnNldCArIDEpIHtcblx0XHRcdFx0Ly8gVGhlIGxpc3QgbWlnaHQgZXh0ZW5kIGJleW9uZCB0aGUgdXBwZXIgYm9yZGVyIG9mIHRoZSBwYWdlLiBMZXQncyBhdm9pZCB0aGF0IGJ5IHBsYWNpbmcgaXRcblx0XHRcdFx0Ly8gYmVsb3cgdGhlIGlucHV0IHRleHQgZmllbGQuXG5cdFx0XHRcdG50ID0gdGhpcy50ZXh0Lm9mZnNldEhlaWdodCArIG9mZnNldCArIDE7XG5cdFx0XHRcdGlmICh0aGlzLmVuZ2luZU5hbWUpIHtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLnRvcCA9IGAke3RoaXMudGV4dC5vZmZzZXRIZWlnaHR9cHhgO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRudCA9IC1saXN0aCAtIG9mZnNldCAtIDE7XG5cdFx0XHRcdGlmICh0aGlzLmVuZ2luZU5hbWUpIHtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLnRvcCA9IGAkey0ob2Zmc2V0ICsgMSl9cHhgO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxpc3Quc3R5bGUudG9wID0gYCR7bnR9cHhgO1xuXHRcdFx0dGhpcy5saXN0LnN0eWxlLndpZHRoID0gJyc7IC8vIE5vIGZpeGVkIHdpZHRoICh5ZXQpXG5cdFx0XHR0aGlzLmxpc3Quc3R5bGVbYW5jaG9yXSA9IGAke25sfXB4YDtcblx0XHRcdGlmICh0aGlzLmVuZ2luZU5hbWUpIHtcblx0XHRcdFx0dGhpcy5zZWxlY3RFbmdpbmUodGhpcy5lbmdpbmVOYW1lKTtcblx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0XHQvLyBTZXQgdGhlIHdpZHRoIG9mIHRoZSBsaXN0XG5cdFx0XHRpZiAodGhpcy5saXN0Lm9mZnNldFdpZHRoIDwgdGV4dEJveFdpZHRoKSB7XG5cdFx0XHRcdHRoaXMubGlzdC5zdHlsZS53aWR0aCA9IGAke3RleHRCb3hXaWR0aH1weGA7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdC8vIElmIHRoZSBsaXN0IGlzIHdpZGVyIHRoYW4gdGhlIHRleHRib3g6IG1ha2Ugc3VyZSBpdCBmaXRzIGhvcml6b250YWxseSBpbnRvIHRoZSBicm93c2VyIHdpbmRvd1xuXHRcdFx0Y29uc3Qgc2Nyb2xsID0gc2Nyb2xsX29mZnNldCgnTGVmdCcpO1xuXHRcdFx0Y29uc3Qgdmlld193ID0gdmlld3BvcnQoJ1dpZHRoJyk7XG5cdFx0XHRsZXQgdyA9IHRoaXMubGlzdC5vZmZzZXRXaWR0aDtcblx0XHRcdGNvbnN0IGxfcG9zID0gcG9zaXRpb24odGhpcy5saXN0KTtcblx0XHRcdGxldCBsZWZ0ID0gbF9wb3MueDtcblx0XHRcdGxldCByaWdodCA9IGxlZnQgKyB3O1xuXHRcdFx0aWYgKGxlZnQgPCBzY3JvbGwgfHwgcmlnaHQgPiBzY3JvbGwgKyB2aWV3X3cpIHtcblx0XHRcdFx0aWYgKHcgPiB2aWV3X3cpIHtcblx0XHRcdFx0XHR3ID0gdmlld193O1xuXHRcdFx0XHRcdHRoaXMubGlzdC5zdHlsZS53aWR0aCA9IGAke3d9cHhgO1xuXHRcdFx0XHRcdGlmIChpc19ydGwpIHtcblx0XHRcdFx0XHRcdGxlZnQgPSByaWdodCAtIHc7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJpZ2h0ID0gbGVmdCArIHc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCByZWxhdGl2ZV9vZmZzZXQgPSAwO1xuXHRcdFx0XHRpZiAobGVmdCA8IHNjcm9sbCkge1xuXHRcdFx0XHRcdHJlbGF0aXZlX29mZnNldCA9IHNjcm9sbCAtIGxlZnQ7XG5cdFx0XHRcdH0gZWxzZSBpZiAocmlnaHQgPiBzY3JvbGwgKyB2aWV3X3cpIHtcblx0XHRcdFx0XHRyZWxhdGl2ZV9vZmZzZXQgPSAtKHJpZ2h0IC0gc2Nyb2xsIC0gdmlld193KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoaXNfcnRsKSB7XG5cdFx0XHRcdFx0cmVsYXRpdmVfb2Zmc2V0ID0gLXJlbGF0aXZlX29mZnNldDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocmVsYXRpdmVfb2Zmc2V0KSB7XG5cdFx0XHRcdFx0dGhpcy5saXN0LnN0eWxlW2FuY2hvcl0gPSBgJHtubCArIHJlbGF0aXZlX29mZnNldH1weGA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0YXV0b0NvbXBsZXRlKG5ld1ZhbCwgYWN0VmFsLCBub3JtYWxpemVkQWN0VmFsLCBrZXksIGRvbnRNb2RpZnkpIHtcblx0XHRcdGlmIChuZXdWYWwgPT09IGFjdFZhbCkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGlmIChkb250TW9kaWZ5IHx8IHRoaXMuaW1lIHx8ICF0aGlzLmNhblNlbGVjdCgpKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdC8vIElmIHdlIGNhbid0IHNlbGVjdCBwcm9wZXJseSBvciBhbiBJTUUgY29tcG9zaXRpb24gaXMgb25nb2luZywgYXV0b2NvbXBsZXRpb24gd291bGQgYmUgYSBtYWpvciBhbm5veWFuY2UgdG8gdGhlIHVzZXIuXG5cdFx0XHRpZiAobmV3VmFsLmluZGV4T2YoYWN0VmFsKSkge1xuXHRcdFx0XHQvLyBNYXliZSBpdCdsbCB3b3JrIHdpdGggdGhlIG5vcm1hbGl6ZWQgdmFsdWUgKE5GQyk/XG5cdFx0XHRcdGlmIChub3JtYWxpemVkQWN0VmFsICYmIG5ld1ZhbC5pbmRleE9mKG5vcm1hbGl6ZWRBY3RWYWwpID09PSAwKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMubGFzdFJlYWxJbnB1dCA9PT0gYWN0VmFsKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmxhc3RSZWFsSW5wdXQgPSBub3JtYWxpemVkQWN0VmFsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRhY3RWYWwgPSBub3JtYWxpemVkQWN0VmFsO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gQWN0dWFsIGlucHV0IGlzIGEgcHJlZml4IG9mIHRoZSBuZXcgdGV4dC4gRmlsbCBpbiBuZXcgdGV4dCwgc2VsZWN0aW5nIHRoZSBuZXdseSBhZGRlZCBzdWZmaXhcblx0XHRcdC8vIHN1Y2ggdGhhdCBpdCBjYW4gYmUgZWFzaWx5IHJlbW92ZWQgYnkgdHlwaW5nIGJhY2tzcGFjZSBpZiB0aGUgc3VnZ2VzdGlvbiBpcyB1bndhbnRlZC5cblx0XHRcdHRoaXMudGV4dC5mb2N1cygpO1xuXHRcdFx0dGhpcy50ZXh0LnZhbHVlID0gbmV3VmFsICsga2V5O1xuXHRcdFx0dGhpcy5zZXRTZWxlY3Rpb24oYWN0VmFsLmxlbmd0aCwgbmV3VmFsLmxlbmd0aCk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0Y2FuU2VsZWN0KCkge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0dGhpcy50ZXh0LnNldFNlbGVjdGlvblJhbmdlIHx8XG5cdFx0XHRcdCh0aGlzLnRleHQuc2VsZWN0aW9uU3RhcnQgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnRleHQuc2VsZWN0aW9uRW5kICE9PSB1bmRlZmluZWQpXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRzZXRTZWxlY3Rpb24oZnJvbSwgdG8pIHtcblx0XHRcdC8vIHRoaXMudGV4dCBtdXN0IGJlIGZvY3VzZWQgKGF0IGxlYXN0IG9uIElFKVxuXHRcdFx0aWYgKCF0aGlzLnRleHQudmFsdWUpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMudGV4dC5zZXRTZWxlY3Rpb25SYW5nZSkge1xuXHRcdFx0XHQvLyBlLmcuIGtodG1sXG5cdFx0XHRcdHRoaXMudGV4dC5zZXRTZWxlY3Rpb25SYW5nZShmcm9tLCB0byk7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMudGV4dC5zZWxlY3Rpb25TdGFydCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGlmIChmcm9tID4gdGhpcy50ZXh0LnNlbGVjdGlvblN0YXJ0KSB7XG5cdFx0XHRcdFx0dGhpcy50ZXh0LnNlbGVjdGlvbkVuZCA9IHRvO1xuXHRcdFx0XHRcdHRoaXMudGV4dC5zZWxlY3Rpb25TdGFydCA9IGZyb207XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy50ZXh0LnNlbGVjdGlvblN0YXJ0ID0gZnJvbTtcblx0XHRcdFx0XHR0aGlzLnRleHQuc2VsZWN0aW9uRW5kID0gdG87XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Z2V0U2VsZWN0aW9uKCkge1xuXHRcdFx0bGV0IGZyb20gPSAwO1xuXHRcdFx0Ly8gdGhpcy50ZXh0IG11c3QgYmUgZm9jdXNlZCAoYXQgbGVhc3Qgb24gSUUpXG5cdFx0XHRsZXQgdG8gPSAwO1xuXHRcdFx0aWYgKCF0aGlzLnRleHQudmFsdWUpIHtcblx0XHRcdFx0Ly8gTm8gdGV4dC5cblx0XHRcdH0gZWxzZSBpZiAodGhpcy50ZXh0LnNlbGVjdGlvblN0YXJ0ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0ZnJvbSA9IHRoaXMudGV4dC5zZWxlY3Rpb25TdGFydDtcblx0XHRcdFx0dG8gPSB0aGlzLnRleHQuc2VsZWN0aW9uRW5kO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0c3RhcnQ6IGZyb20sXG5cdFx0XHRcdGVuZDogdG8sXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRzYXZlVmlldygpIHtcblx0XHRcdHRoaXMubGFzdFNlbGVjdGlvbiA9IHRoaXMuZ2V0U2VsZWN0aW9uKCk7XG5cdFx0fVxuXHRcdHByb2Nlc3NLZXkoZXZlbnQpIHtcblx0XHRcdGxldCBkaXIgPSAwO1xuXHRcdFx0c3dpdGNoICh0aGlzLmxhc3RLZXkpIHtcblx0XHRcdFx0Y2FzZSBVUDpcblx0XHRcdFx0XHRkaXIgPSAtMTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBET1dOOlxuXHRcdFx0XHRcdGRpciA9IDE7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgUEdVUDpcblx0XHRcdFx0XHRkaXIgPSAtSEMubGlzdFNpemU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgUEdET1dOOlxuXHRcdFx0XHRcdGRpciA9IEhDLmxpc3RTaXplO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIEVTQzpcblx0XHRcdFx0XHQvLyBJbmhpYml0IGRlZmF1bHQgYmVoYXZpb3IgKHJldmVydCB0byBsYXN0IHJlYWwgaW5wdXQgaW4gRkY6IHdlIGRvIHRoYXQgb3Vyc2VsdmVzKVxuXHRcdFx0XHRcdHJldHVybiBldnRLaWxsKGV2ZW50KTtcblx0XHRcdH1cblx0XHRcdGlmIChkaXIpIHtcblx0XHRcdFx0aWYgKHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScpIHtcblx0XHRcdFx0XHQvLyBMaXN0IGlzIHZpc2libGUsIHNvIHRoZXJlIGFyZSBzdWdnZXN0aW9uc1xuXHRcdFx0XHRcdHRoaXMuaGlnaGxpZ2h0U3VnZ2VzdGlvbihkaXIpO1xuXHRcdFx0XHRcdC8vIEtpbGwgdGhlIGV2ZW50LCBvdGhlcndpc2Ugc29tZSBicm93c2VycyAoZS5nLiwgRmlyZWZveCkgbWF5IGFkZGl0aW9uYWxseSB0cmVhdCBhbiB1cC1hcnJvd1xuXHRcdFx0XHRcdC8vIGFzIFwicGxhY2UgdGhlIHRleHQgY3Vyc29yIGF0IHRoZSBmcm9udFwiLCB3aGljaCB3ZSBkb24ndCB3YW50IGhlcmUuXG5cdFx0XHRcdFx0cmV0dXJuIGV2dEtpbGwoZXZlbnQpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHRcdHRoaXMua2V5Q291bnQgPD0gMSAmJlxuXHRcdFx0XHRcdCghdGhpcy5jYWxsYmFja09iaiB8fCB0aGlzLmNhbGxiYWNrT2JqLmNhbGxzTWFkZSA9PT0gdGhpcy5jYWxsYmFja09iai5ub2ZDYWxscylcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Ly8gSWYgbm8gc3VnZ2VzdGlvbnMgZGlzcGxheWVkLCBnZXQgdGhlbSwgdW5sZXNzIHdlJ3JlIGFscmVhZHkgZ2V0dGluZyB0aGVtLlxuXHRcdFx0XHRcdHRoaXMudGV4dGNoYW5nZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0aGlnaGxpZ2h0U3VnZ2VzdGlvbihkaXIpIHtcblx0XHRcdGlmIChub1N1Z2dlc3Rpb25zIHx8ICF0aGlzLmxpc3QgfHwgdGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBjdXJyID0gdGhpcy5saXN0LnNlbGVjdGVkSW5kZXg7XG5cdFx0XHRsZXQgdGd0ID0gLTE7XG5cdFx0XHRpZiAoZGlyID09PSAwKSB7XG5cdFx0XHRcdGlmIChjdXJyIDwgMCB8fCBjdXJyID49IHRoaXMubGlzdC5vcHRpb25zLmxlbmd0aCkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0Z3QgPSBjdXJyO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGd0ID0gY3VyciA8IDAgPyAwIDogY3VyciArIGRpcjtcblx0XHRcdFx0dGd0ID0gTWF0aC5tYXgodGd0LCAwKTtcblx0XHRcdFx0aWYgKHRndCA+PSB0aGlzLmxpc3Qub3B0aW9ucy5sZW5ndGgpIHtcblx0XHRcdFx0XHR0Z3QgPSB0aGlzLmxpc3Qub3B0aW9ucy5sZW5ndGggLSAxO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAodGd0ICE9PSBjdXJyIHx8IGRpciA9PT0gMCkge1xuXHRcdFx0XHRpZiAoY3VyciA+PSAwICYmIGN1cnIgPCB0aGlzLmxpc3Qub3B0aW9ucy5sZW5ndGggJiYgZGlyICE9PSAwKSB7XG5cdFx0XHRcdFx0dGhpcy5saXN0Lm9wdGlvbnNbY3Vycl0uc2VsZWN0ZWQgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmxpc3Qub3B0aW9uc1t0Z3RdLnNlbGVjdGVkID0gdHJ1ZTtcblx0XHRcdFx0Ly8gR2V0IGN1cnJlbnQgaW5wdXQgdGV4dFxuXHRcdFx0XHRjb25zdCB2ID0gdGhpcy50ZXh0LnZhbHVlLnNwbGl0KCd8Jyk7XG5cdFx0XHRcdGNvbnN0IGtleSA9IHYubGVuZ3RoID4gMSA/IGB8JHt2WzFdfWAgOiAnJztcblx0XHRcdFx0Y29uc3QgY29tcGxldGVkID0gdGhpcy5hdXRvQ29tcGxldGUodGhpcy5saXN0Lm9wdGlvbnNbdGd0XS50ZXh0LCB0aGlzLmxhc3RSZWFsSW5wdXQsIG51bGwsIGtleSwgZmFsc2UpO1xuXHRcdFx0XHRpZiAoIWNvbXBsZXRlZCB8fCB0aGlzLmxpc3Qub3B0aW9uc1t0Z3RdLnRleHQgPT09IHRoaXMubGFzdFJlYWxJbnB1dCkge1xuXHRcdFx0XHRcdHRoaXMudGV4dC52YWx1ZSA9IHRoaXMubGlzdC5vcHRpb25zW3RndF0udGV4dCArIGtleTtcblx0XHRcdFx0XHRpZiAodGhpcy5jYW5TZWxlY3QoKSkge1xuXHRcdFx0XHRcdFx0dGhpcy5zZXRTZWxlY3Rpb24odGhpcy5saXN0Lm9wdGlvbnNbdGd0XS50ZXh0Lmxlbmd0aCwgdGhpcy5saXN0Lm9wdGlvbnNbdGd0XS50ZXh0Lmxlbmd0aCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMubGFzdElucHV0ID0gdGhpcy5saXN0Lm9wdGlvbnNbdGd0XS50ZXh0O1xuXHRcdFx0XHR0aGlzLmlucHV0RXhpc3RzID0gdHJ1ZTsgLy8gTWlnaHQgYmUgd3JvbmcgaWYgZnJvbSBhIGRhYiBsaXN0Li4uXG5cdFx0XHRcdGlmICh0aGlzLmljb24pIHtcblx0XHRcdFx0XHR0aGlzLmljb24uc3JjID0gSEMuZXhpc3RzWWVzO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSBDSEFOR0VfUEVORElORztcblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRyZXNldEtleVNlbGVjdGlvbigpIHtcblx0XHRcdGlmIChub1N1Z2dlc3Rpb25zIHx8ICF0aGlzLmxpc3QgfHwgdGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBjdXJyID0gdGhpcy5saXN0LnNlbGVjdGVkSW5kZXg7XG5cdFx0XHRpZiAoY3VyciA+PSAwICYmIGN1cnIgPCB0aGlzLmxpc3Qub3B0aW9ucy5sZW5ndGgpIHtcblx0XHRcdFx0dGhpcy5saXN0Lm9wdGlvbnNbY3Vycl0uc2VsZWN0ZWQgPSBmYWxzZTtcblx0XHRcdFx0Ly8gR2V0IGN1cnJlbnQgaW5wdXQgdGV4dFxuXHRcdFx0XHRjb25zdCB2ID0gdGhpcy50ZXh0LnZhbHVlLnNwbGl0KCd8Jyk7XG5cdFx0XHRcdGNvbnN0IGtleSA9IHYubGVuZ3RoID4gMSA/IGB8JHt2WzFdfWAgOiAnJztcblx0XHRcdFx0Ly8gRVNDIGlzIGhhbmRsZWQgc3RyYW5nZWx5IGJ5IHNvbWUgYnJvd3NlcnMgKGUuZy4sIEZGKTsgc29tZWhvdyBpdCByZXNldHMgdGhlIGlucHV0IHZhbHVlIGJlZm9yZVxuXHRcdFx0XHQvLyBvdXIgZXZlbnQgaGFuZGxlcnMgZXZlciBnZXQgYSBjaGFuY2UgdG8gcnVuLlxuXHRcdFx0XHRsZXQgcmVzdWx0ID0gdlswXSAhPT0gdGhpcy5sYXN0SW5wdXQ7XG5cdFx0XHRcdGlmICh2WzBdICE9PSB0aGlzLmxhc3RSZWFsSW5wdXQpIHtcblx0XHRcdFx0XHR0aGlzLnRleHQudmFsdWUgPSB0aGlzLmxhc3RSZWFsSW5wdXQgKyBrZXk7XG5cdFx0XHRcdFx0cmVzdWx0ID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmxhc3RJbnB1dCA9IHRoaXMubGFzdFJlYWxJbnB1dDtcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblx0Y29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcblx0XHQvLyBVc2VyIGNvbmZpZ3VyYXRpb25zOiBEbyB0aGlzIGhlcmUsIGNhbGxlZCBmcm9tIHRoZSBvbmxvYWQgaGFuZGxlciwgc28gdGhhdCB1c2VycyBjYW5cblx0XHQvLyBvdmVycmlkZSBpdCBlYXNpbHkgaW4gdGhlaXIgb3duIHVzZXIgc2NyaXB0IGZpbGVzIGJ5IGp1c3QgZGVjbGFyaW5nIHZhcmlhYmxlcy5cblx0XHRjb25zdCBjb25maWcgPSB7fTtcblx0XHRIQy5kb250X2FkZF90b193YXRjaGxpc3QgPVxuXHRcdFx0d2luZG93LmhvdGNhdF9kb250X2FkZF90b193YXRjaGxpc3QgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHQ/IGNvbmZpZy5Ib3RDYXREb250QWRkVG9XYXRjaGxpc3QgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdD8gSEMuZG9udF9hZGRfdG9fd2F0Y2hsaXN0XG5cdFx0XHRcdFx0OiBjb25maWcuSG90Q2F0RG9udEFkZFRvV2F0Y2hsaXN0XG5cdFx0XHRcdDogISF3aW5kb3cuaG90Y2F0X2RvbnRfYWRkX3RvX3dhdGNobGlzdDtcblx0XHRIQy5ub19hdXRvY29tbWl0ID1cblx0XHRcdHdpbmRvdy5ob3RjYXRfbm9fYXV0b2NvbW1pdCA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdD8gY29uZmlnLkhvdENhdE5vQXV0b0NvbW1pdCA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0PyBjb25mLndnTmFtZXNwYWNlTnVtYmVyICUgMlxuXHRcdFx0XHRcdFx0PyB0cnVlXG5cdFx0XHRcdFx0XHQ6IEhDLm5vX2F1dG9jb21taXQgLy8gT24gdGFsayBuYW1lc3BhY2UgZGVmYXVsdCBhdXRvY29tbWl0IG9mZlxuXHRcdFx0XHRcdDogY29uZmlnLkhvdENhdE5vQXV0b0NvbW1pdFxuXHRcdFx0XHQ6ICEhd2luZG93LmhvdGNhdF9ub19hdXRvY29tbWl0O1xuXHRcdEhDLmRlbF9uZWVkc19kaWZmID1cblx0XHRcdHdpbmRvdy5ob3RjYXRfZGVsX25lZWRzX2RpZmYgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHQ/IGNvbmZpZy5Ib3RDYXREZWxOZWVkc0RpZmYgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdD8gSEMuZGVsX25lZWRzX2RpZmZcblx0XHRcdFx0XHQ6IGNvbmZpZy5Ib3RDYXREZWxOZWVkc0RpZmZcblx0XHRcdFx0OiAhIXdpbmRvdy5ob3RjYXRfZGVsX25lZWRzX2RpZmY7XG5cdFx0SEMuc3VnZ2VzdF9kZWxheSA9IHdpbmRvdy5ob3RjYXRfc3VnZ2VzdGlvbl9kZWxheSB8fCBjb25maWcuSG90Q2F0U3VnZ2VzdGlvbkRlbGF5IHx8IEhDLnN1Z2dlc3RfZGVsYXk7XG5cdFx0SEMuZWRpdGJveF93aWR0aCA9IHdpbmRvdy5ob3RjYXRfZWRpdGJveF93aWR0aCB8fCBjb25maWcuSG90Q2F0RWRpdEJveFdpZHRoIHx8IEhDLmVkaXRib3hfd2lkdGg7XG5cdFx0SEMuc3VnZ2VzdGlvbnMgPSB3aW5kb3cuaG90Y2F0X3N1Z2dlc3Rpb25zIHx8IGNvbmZpZy5Ib3RDYXRTdWdnZXN0aW9ucyB8fCBIQy5zdWdnZXN0aW9ucztcblx0XHRpZiAodHlwZW9mIEhDLnN1Z2dlc3Rpb25zICE9PSAnc3RyaW5nJyB8fCAhc3VnZ2VzdGlvbkNvbmZpZ3NbSEMuc3VnZ2VzdGlvbnNdKSB7XG5cdFx0XHRIQy5zdWdnZXN0aW9ucyA9ICdjb21iaW5lZCc7XG5cdFx0fVxuXHRcdEhDLmZpeGVkX3NlYXJjaCA9XG5cdFx0XHR3aW5kb3cuaG90Y2F0X3N1Z2dlc3Rpb25zX2ZpeGVkID09PSB1bmRlZmluZWRcblx0XHRcdFx0PyBjb25maWcuSG90Q2F0Rml4ZWRTdWdnZXN0aW9ucyA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0PyBIQy5maXhlZF9zZWFyY2hcblx0XHRcdFx0XHQ6IGNvbmZpZy5Ib3RDYXRGaXhlZFN1Z2dlc3Rpb25zXG5cdFx0XHRcdDogISF3aW5kb3cuaG90Y2F0X3N1Z2dlc3Rpb25zX2ZpeGVkO1xuXHRcdEhDLnNpbmdsZV9taW5vciA9XG5cdFx0XHR3aW5kb3cuaG90Y2F0X3NpbmdsZV9jaGFuZ2VzX2FyZV9taW5vciA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdD8gY29uZmlnLkhvdENhdE1pbm9yU2luZ2xlQ2hhbmdlcyA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0PyBIQy5zaW5nbGVfbWlub3Jcblx0XHRcdFx0XHQ6IGNvbmZpZy5Ib3RDYXRNaW5vclNpbmdsZUNoYW5nZXNcblx0XHRcdFx0OiAhIXdpbmRvdy5ob3RjYXRfc2luZ2xlX2NoYW5nZXNfYXJlX21pbm9yO1xuXHRcdEhDLmJnX2NoYW5nZWQgPSB3aW5kb3cuaG90Y2F0X2NoYW5nZWRfYmFja2dyb3VuZCB8fCBjb25maWcuSG90Q2F0Q2hhbmdlZEJhY2tncm91bmQgfHwgSEMuYmdfY2hhbmdlZDtcblx0XHRIQy51c2VfdXBfZG93biA9XG5cdFx0XHR3aW5kb3cuaG90Y2F0X3VzZV9jYXRlZ29yeV9saW5rcyA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdD8gY29uZmlnLkhvdENhdFVzZUNhdGVnb3J5TGlua3MgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdD8gSEMudXNlX3VwX2Rvd25cblx0XHRcdFx0XHQ6IGNvbmZpZy5Ib3RDYXRVc2VDYXRlZ29yeUxpbmtzXG5cdFx0XHRcdDogISF3aW5kb3cuaG90Y2F0X3VzZV9jYXRlZ29yeV9saW5rcztcblx0XHRIQy5saXN0U2l6ZSA9IHdpbmRvdy5ob3RjYXRfbGlzdF9zaXplIHx8IGNvbmZpZy5Ib3RDYXRMaXN0U2l6ZSB8fCBIQy5saXN0U2l6ZTtcblx0XHRIQy5jaGFuZ2VUYWcgPSBjb25maWcuSG90Q2F0Q2hhbmdlVGFnIHx8ICcnO1xuXHRcdC8vIFRoZSBuZXh0IHdob2xlIHNoZWJhbmcgaXMgbmVlZGVkLCBiZWNhdXNlIG1hbnVhbCB0YWdzIGdldCBub3Qgc3VibWl0dGVkIGV4Y2VwdCBvZiBzYXZlXG5cdFx0aWYgKEhDLmNoYW5nZVRhZykge1xuXHRcdFx0Y29uc3QgZUZvcm0gPSBkb2N1bWVudC5lZGl0Zm9ybTtcblx0XHRcdGNvbnN0IGNhdFJlZ0V4cCA9IG5ldyBSZWdFeHAoYF5cXFxcW1xcXFxbKCR7SEMuY2F0ZWdvcnlfcmVnZXhwfSk6YCk7XG5cdFx0XHRsZXQgb2xkVHh0O1xuXHRcdFx0Ly8gUmV0dXJucyB0cnVlIGlmIG1pbm9yIGNoYW5nZVxuXHRcdFx0Y29uc3QgaXNNaW5vckNoYW5nZSA9ICgpID0+IHtcblx0XHRcdFx0bGV0IG5ld1R4dCA9IGVGb3JtLndwVGV4dGJveDE7XG5cdFx0XHRcdGlmICghbmV3VHh0KSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG5ld1R4dCA9IG5ld1R4dC52YWx1ZTtcblx0XHRcdFx0Y29uc3Qgb2xkTGluZXMgPSBvbGRUeHQubWF0Y2goL14uKiQvZ20pO1xuXHRcdFx0XHRjb25zdCBuZXdMaW5lcyA9IG5ld1R4dC5tYXRjaCgvXi4qJC9nbSk7XG5cdFx0XHRcdGxldCBjQXJyOyAvLyBjaGFuZ2VzXG5cdFx0XHRcdGNvbnN0IGV4Y2VwdCA9IChhQXJyLCBiQXJyKSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gW107XG5cdFx0XHRcdFx0bGV0IGxBcnI7IC8vIHNtYWxsZXJcblx0XHRcdFx0XHRsZXQgLy8gbGFyZ2VyXG5cdFx0XHRcdFx0XHRzQXJyO1xuXHRcdFx0XHRcdGlmIChhQXJyLmxlbmd0aCA8IGJBcnIubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRsQXJyID0gYkFycjtcblx0XHRcdFx0XHRcdHNBcnIgPSBhQXJyO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRsQXJyID0gYUFycjtcblx0XHRcdFx0XHRcdHNBcnIgPSBiQXJyO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRmb3IgKGNvbnN0IGl0ZW0gb2YgbEFycikge1xuXHRcdFx0XHRcdFx0Y29uc3QgaW5kID0gc0Fyci5pbmRleE9mKGl0ZW0pO1xuXHRcdFx0XHRcdFx0aWYgKGluZCA9PT0gLTEpIHtcblx0XHRcdFx0XHRcdFx0cmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0gaXRlbTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHNBcnIuc3BsaWNlKGluZCwgMSk7IC8vIGRvbid0IGNoZWNrIHRoaXMgaXRlbSBhZ2FpblxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gWy4uLnJlc3VsdCwgLi4uc0Fycl07XG5cdFx0XHRcdH07XG5cdFx0XHRcdGNBcnIgPSBleGNlcHQob2xkTGluZXMsIG5ld0xpbmVzKTtcblx0XHRcdFx0aWYgKGNBcnIubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGNBcnIgPSBjQXJyLmZpbHRlcigoYykgPT4ge1xuXHRcdFx0XHRcdFx0YyA9IGMudHJpbSgpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGMgJiYgIWNhdFJlZ0V4cC50ZXN0KGMpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChjQXJyLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdG9sZFR4dCA9IG5ld1R4dDtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdGlmIChcblx0XHRcdFx0Y29uZi53Z0FjdGlvbiA9PT0gJ3N1Ym1pdCcgJiZcblx0XHRcdFx0Y29uZi53Z0FydGljbGVJZCAmJlxuXHRcdFx0XHRlRm9ybSAmJlxuXHRcdFx0XHRlRm9ybS53cFN1bW1hcnkgJiZcblx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpa2lEaWZmJylcblx0XHRcdCkge1xuXHRcdFx0XHRjb25zdCBzdW0gPSBlRm9ybS53cFN1bW1hcnk7XG5cdFx0XHRcdGNvbnN0IHN1bUEgPSBlRm9ybS53cEF1dG9TdW1tYXJ5O1xuXHRcdFx0XHRpZiAoc3VtLnZhbHVlICYmIHN1bUEudmFsdWUgPT09IEhDLmNoYW5nZVRhZykge1xuXHRcdFx0XHRcdC8vIEhvdENhdCBkaWZmXG5cdFx0XHRcdFx0Ly8gTUQ1IGhhc2ggb2YgdGhlIGVtcHR5IHN0cmluZywgYXMgSG90Q2F0IGVkaXQgaXMgYmFzZWQgb24gZW1wdHkgc3VtXG5cdFx0XHRcdFx0c3VtQS52YWx1ZSA9IHN1bUEudmFsdWUucmVwbGFjZShIQy5jaGFuZ2VUYWcsICdkNDFkOGNkOThmMDBiMjA0ZTk4MDA5OThlY2Y4NDI3ZScpO1xuXHRcdFx0XHRcdC8vIEF0dHIgY3JlYXRpb24gYW5kIGV2ZW50IGhhbmRsaW5nIGlzIG5vdCBzYW1lIGluIGFsbCAob2xkKSBicm93c2VycyBzbyB1c2UgJFxuXHRcdFx0XHRcdGNvbnN0ICRjdCA9ICQoJzxpbnB1dD4nKVxuXHRcdFx0XHRcdFx0LmF0dHIoe1xuXHRcdFx0XHRcdFx0XHR0eXBlOiAnaGlkZGVuJyxcblx0XHRcdFx0XHRcdFx0bmFtZTogJ3dwQ2hhbmdlVGFncycsXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0LnZhbChIQy5jaGFuZ2VUYWcpO1xuXHRcdFx0XHRcdCQoZUZvcm0pLmFwcGVuZCgkY3QpO1xuXHRcdFx0XHRcdG9sZFR4dCA9IGVGb3JtLndwVGV4dGJveDEudmFsdWU7XG5cdFx0XHRcdFx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0XHRcdFx0JGJvZHkuZmluZCgnaW5wdXRbbmFtZT13cFNhdmVdJykub25lKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0XHRcdGlmICgkY3QudmFsKCkpIHtcblx0XHRcdFx0XHRcdFx0c3VtLnZhbHVlID0gc3VtLnZhbHVlLnJlcGxhY2UoXG5cdFx0XHRcdFx0XHRcdFx0Z2V0TWVzc2FnZSgnbWVzc2FnZXMtdXNpbmcnKSB8fCBnZXRNZXNzYWdlKCdtZXNzYWdlcy1wcmVmaXgnKSxcblx0XHRcdFx0XHRcdFx0XHQnJ1xuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGNvbnN0IHJlbW92ZUNoYW5nZVRhZyA9ICgpID0+IHtcblx0XHRcdFx0XHRcdCQoZUZvcm0ud3BUZXh0Ym94MSlcblx0XHRcdFx0XHRcdFx0LmFkZChzdW0pXG5cdFx0XHRcdFx0XHRcdC5vbmUoJ2lucHV0JywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGlzTWlub3JDaGFuZ2UoKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZW1vdmVDaGFuZ2VUYWcoKTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCRjdC52YWwoJycpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0sIDUwMCk7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0cmVtb3ZlQ2hhbmdlVGFnKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gTnVtZXJpYyBpbnB1dCwgbWFrZSBzdXJlIHdlIGhhdmUgYSBudW1lcmljIHZhbHVlXG5cdFx0SEMubGlzdFNpemUgPSBOdW1iZXIucGFyc2VJbnQoSEMubGlzdFNpemUsIDEwKTtcblx0XHRpZiAoTnVtYmVyLmlzTmFOKEhDLmxpc3RTaXplKSB8fCBIQy5saXN0U2l6ZSA8IDUpIHtcblx0XHRcdEhDLmxpc3RTaXplID0gNTtcblx0XHR9XG5cdFx0SEMubGlzdFNpemUgPSBNYXRoLm1pbihIQy5saXN0U2l6ZSwgMzApOyAvLyBNYXggc2l6ZVxuXHRcdC8vIExvY2FsaXplIHNlYXJjaCBlbmdpbmUgbmFtZXNcblx0XHRmb3IgKGNvbnN0IFtrZXksIHN1Z2dlc3Rpb25Db25maWddIG9mIE9iamVjdC5lbnRyaWVzKHN1Z2dlc3Rpb25Db25maWdzKSkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aWYgKGtleSAmJiBnZXRNZXNzYWdlKGBlbmdpbmVfbmFtZXMtJHtrZXl9YCkpIHtcblx0XHRcdFx0XHRzdWdnZXN0aW9uQ29uZmlnLm5hbWUgPSBnZXRNZXNzYWdlKGBlbmdpbmVfbmFtZXMtJHtrZXl9YCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gQ2F0Y2ggYm90aCBuYXRpdmUgUlRMIGFuZCBcImZha2VkXCIgUlRMIHRocm91Z2ggW1tNZWRpYVdpa2k6UnRsLmpzXV1cblx0XHRpc19ydGwgPSBoYXNDbGFzcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JyksICdydGwnKTtcblx0XHRpZiAoIWlzX3J0bCkge1xuXHRcdFx0aWYgKGRvY3VtZW50LmRlZmF1bHRWaWV3ICYmIGRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUpIHtcblx0XHRcdFx0Ly8gR2Vja28gZXRjLlxuXHRcdFx0XHRpc19ydGwgPSBkb2N1bWVudC5kZWZhdWx0Vmlld1xuXHRcdFx0XHRcdC5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSwgbnVsbClcblx0XHRcdFx0XHQuZ2V0UHJvcGVydHlWYWx1ZSgnZGlyZWN0aW9uJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBOb3QgZXhhY3RseSByaWdodCwgYnV0IGJlc3QgZWZmb3J0XG5cdFx0XHRcdGlzX3J0bCA9ICQoJ2JvZHknKVswXS5zdHlsZS5kaXJlY3Rpb247XG5cdFx0XHR9XG5cdFx0XHRpc19ydGwgPSBpc19ydGwgPT09ICdydGwnO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgY2FuX2VkaXQgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYS1lZGl0JykgIT09IG51bGw7XG5cdH07XG5cdC8vIExlZ2FjeSBzdHVmZlxuXHRjb25zdCBjbG9zZUZvcm0gPSBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gQ2xvc2UgYWxsIG9wZW4gZWRpdG9ycyB3aXRob3V0IHJlZGlyZWN0IHJlc29sdXRpb24gYW5kIG90aGVyIGFzeW5jaHJvbm91cyBzdHVmZi5cblx0XHRmb3IgKGNvbnN0IGVkaXQgb2YgZWRpdG9ycykge1xuXHRcdFx0aWYgKGVkaXQuc3RhdGUgPT09IE9QRU4pIHtcblx0XHRcdFx0ZWRpdC5jYW5jZWwoKTtcblx0XHRcdH0gZWxzZSBpZiAoZWRpdC5zdGF0ZSA9PT0gQ0hBTkdFX1BFTkRJTkcpIHtcblx0XHRcdFx0ZWRpdC5zYW5pdGl6ZUlucHV0KCk7XG5cdFx0XHRcdGNvbnN0IHZhbHVlID0gZWRpdC50ZXh0LnZhbHVlLnNwbGl0KCd8Jyk7XG5cdFx0XHRcdGxldCBrZXkgPSBudWxsO1xuXHRcdFx0XHRpZiAodmFsdWUubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdFssIGtleV0gPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCB2ID0gdmFsdWVbMF0ucmVwbGFjZSgvXy9nLCAnICcpLnRyaW0oKTtcblx0XHRcdFx0aWYgKHYubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0ZWRpdC5jYW5jZWwoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRlZGl0LmN1cnJlbnRDYXRlZ29yeSA9IHY7XG5cdFx0XHRcdFx0ZWRpdC5jdXJyZW50S2V5ID0ga2V5O1xuXHRcdFx0XHRcdGVkaXQuY3VycmVudEV4aXN0cyA9IHRoaXMuaW5wdXRFeGlzdHM7XG5cdFx0XHRcdFx0ZWRpdC5jbG9zZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBzZXR1cF91cGxvYWQgPSAoKSA9PiB7XG5cdFx0b25VcGxvYWQgPSB0cnVlO1xuXHRcdC8vIEFkZCBhbiBlbXB0eSBjYXRlZ29yeSBiYXIgYXQgdGhlIGVuZCBvZiB0aGUgdGFibGUgY29udGFpbmluZyB0aGUgZGVzY3JpcHRpb24sIGFuZCBjaGFuZ2UgdGhlIG9uc3VibWl0IGhhbmRsZXIuXG5cdFx0bGV0IGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI213LWh0bWxmb3JtLWRlc2NyaXB0aW9uJykgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT13cERlc3RGaWxlXScpO1xuXHRcdGlmICghaXApIHtcblx0XHRcdGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT13cERlc3RGaWxlXScpO1xuXHRcdFx0d2hpbGUgKGlwICYmIGlwLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICd0YWJsZScpIHtcblx0XHRcdFx0aXAgPSBpcC5wYXJlbnROb2RlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoIWlwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHJldXBsb2FkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT13cEZvclJlVXBsb2FkXScpO1xuXHRcdGNvbnN0IGRlc3RGaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT13cERlc3RGaWxlXScpO1xuXHRcdGlmICgocmV1cGxvYWQgJiYgISFyZXVwbG9hZC52YWx1ZSkgfHwgKGRlc3RGaWxlICYmIChkZXN0RmlsZS5kaXNhYmxlZCB8fCBkZXN0RmlsZS5yZWFkT25seSkpKSB7XG5cdFx0XHRyZXR1cm47IC8vIHJlLXVwbG9hZCBmb3JtLi4uXG5cdFx0fVxuXHRcdC8vIEluc2VydCBhIHRhYmxlIHJvdyB3aXRoIHR3byBmaWVsZHMgKGxhYmVsIGFuZCBlbXB0eSBjYXRlZ29yeSBiYXIpXG5cdFx0Y29uc3QgbGFiZWxDZWxsID0gbWFrZSgndGQnKTtcblx0XHRjb25zdCBsaW5lQ2VsbCA9IG1ha2UoJ3RkJyk7XG5cdFx0Ly8gQ3JlYXRlIHRoZSBjYXRlZ29yeSBsaW5lXG5cdFx0Y2F0TGluZSA9IG1ha2UoJ2RpdicpO1xuXHRcdGNhdExpbmUuY2xhc3NOYW1lID0gJ2NhdGxpbmtzJztcblx0XHRjYXRMaW5lLmlkID0gJ2NhdGxpbmtzJztcblx0XHRjYXRMaW5lLnN0eWxlLnRleHRBbGlnbiA9IGlzX3J0bCA/ICdyaWdodCcgOiAnbGVmdCc7XG5cdFx0Ly8gV2UnbGwgYmUgaW5zaWRlIGEgdGFibGUgcm93LiBNYWtlIHN1cmUgdGhhdCB3ZSBkb24ndCBoYXZlIG1hcmdpbnMgb3Igc3RyYW5nZSBib3JkZXJzLlxuXHRcdGNhdExpbmUuc3R5bGUubWFyZ2luID0gJzAnO1xuXHRcdGNhdExpbmUuc3R5bGUuYm9yZGVyID0gJ25vbmUnO1xuXHRcdGxpbmVDZWxsLmFwcGVuZChjYXRMaW5lKTtcblx0XHQvLyBDcmVhdGUgdGhlIGxhYmVsXG5cdFx0Y29uc3QgbGFiZWwgPSBudWxsO1xuXHRcdGlmIChsYWJlbCkge1xuXHRcdFx0bGFiZWxDZWxsLmlkID0gJ2hvdGNhdExhYmVsVHJhbnNsYXRlZCc7XG5cdFx0XHRsYWJlbENlbGwuYXBwZW5kKGxhYmVsKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGFiZWxDZWxsLmlkID0gJ2hvdGNhdExhYmVsJztcblx0XHRcdGxhYmVsQ2VsbC5hcHBlbmQobWFrZShnZXRNZXNzYWdlKCdjYXRlZ29yaWVzJyksIHRydWUpKTtcblx0XHR9XG5cdFx0bGFiZWxDZWxsLmNsYXNzTmFtZSA9ICdtdy1sYWJlbCc7XG5cdFx0bGFiZWxDZWxsLnN0eWxlLnRleHRBbGlnbiA9ICdyaWdodCc7XG5cdFx0bGFiZWxDZWxsLnN0eWxlLnZlcnRpY2FsQWxpZ24gPSAnbWlkZGxlJztcblx0XHQvLyBDaGFuZ2UgdGhlIG9uc3VibWl0IGhhbmRsZXJcblx0XHRjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwbG9hZCcpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtdy11cGxvYWQtZm9ybScpO1xuXHRcdGlmIChmb3JtKSB7XG5cdFx0XHRjb25zdCBuZXdSb3cgPSBpcC5pbnNlcnRSb3coLTEpO1xuXHRcdFx0bmV3Um93LmFwcGVuZChsYWJlbENlbGwpO1xuXHRcdFx0bmV3Um93LmFwcGVuZChsaW5lQ2VsbCk7XG5cdFx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChvbGRTdWJtaXQsIC4uLmFyZ3MpID0+IHtcblx0XHRcdFx0cmV0dXJuICgoKSA9PiB7XG5cdFx0XHRcdFx0bGV0IGRvX3N1Ym1pdCA9IHRydWU7XG5cdFx0XHRcdFx0aWYgKG9sZFN1Ym1pdCkge1xuXHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBvbGRTdWJtaXQgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1ldmFsXG5cdFx0XHRcdFx0XHRcdGRvX3N1Ym1pdCA9IHdpbmRvdy5ldmFsKG9sZFN1Ym1pdCk7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG9sZFN1Ym1pdCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG5cdFx0XHRcdFx0XHRcdGRvX3N1Ym1pdCA9IG9sZFN1Ym1pdC5hcHBseShmb3JtLCBbb2xkU3VibWl0LCAuLi5hcmdzXSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICghZG9fc3VibWl0KSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNsb3NlRm9ybSgpO1xuXHRcdFx0XHRcdC8vIENvcHkgdGhlIGNhdGVnb3JpZXNcblx0XHRcdFx0XHRjb25zdCBlYiA9XG5cdFx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYVtuYW1lPXdwVXBsb2FkRGVzY3JpcHRpb25dJykgfHxcblx0XHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3cERlc2MnKTtcblx0XHRcdFx0XHRsZXQgYWRkZWRPbmUgPSBmYWxzZTtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IGVkaXRvciBvZiBlZGl0b3JzKSB7XG5cdFx0XHRcdFx0XHRjb25zdCB0ID0gZWRpdG9yLmN1cnJlbnRDYXRlZ29yeTtcblx0XHRcdFx0XHRcdGlmICghdCkge1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGNvbnN0IGtleSA9IGVkaXRvci5jdXJyZW50S2V5O1xuXHRcdFx0XHRcdFx0Y29uc3QgbmV3X2NhdCA9IGBbWyR7SEMuY2F0ZWdvcnlfY2Fub25pY2FsfToke3R9JHtrZXkgPyBgfCR7a2V5fWAgOiAnJ31dXWA7XG5cdFx0XHRcdFx0XHQvLyBPbmx5IGFkZCBpZiBub3QgYWxyZWFkeSBwcmVzZW50XG5cdFx0XHRcdFx0XHRjb25zdCBub3dpa2lSZWdleCA9IG5ldyBSZWdFeHAoXG5cdFx0XHRcdFx0XHRcdCc8bm8nLmNvbmNhdCgnd2lraT4nLCBTdHJpbmcucmF3YChcXHN8XFxTKSo/PC9ub2AsICd3aWtpJywgJz4nKSxcblx0XHRcdFx0XHRcdFx0J2cnXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0Y29uc3QgX2NsZWFuZWRUZXh0ID0gZWIudmFsdWUucmVwbGFjZSgvPCEtLShcXHN8XFxTKSo/LS0+L2csICcnKS5yZXBsYWNlKG5vd2lraVJlZ2V4KTtcblx0XHRcdFx0XHRcdGlmICghZmluZF9jYXRlZ29yeShfY2xlYW5lZFRleHQsIHQsIHRydWUpKSB7XG5cdFx0XHRcdFx0XHRcdGViLnZhbHVlICs9IGBcXG4ke25ld19jYXR9YDtcblx0XHRcdFx0XHRcdFx0YWRkZWRPbmUgPSB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoYWRkZWRPbmUpIHtcblx0XHRcdFx0XHRcdC8vIFJlbW92ZSBcInN1YnN0OnVuY1wiIGFkZGVkIGJ5IEZsaW5mbyBpZiBpdCBkaWRuJ3QgZmluZCBjYXRlZ29yaWVzXG5cdFx0XHRcdFx0XHRjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoJ3t7JCcuY29uY2F0KCdzdWJzdDonKS5jb25jYXQoJ3VuY319JyksICdnJyk7XG5cdFx0XHRcdFx0XHRlYi52YWx1ZSA9IGViLnZhbHVlLnJlcGxhY2UocmVnZXgsICcnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH0pKGZvcm0ub25zdWJtaXQpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXHRsZXQgY2xlYW5lZFRleHQgPSBudWxsO1xuXHRjb25zdCBpc09uUGFnZSA9ICh7Zmlyc3RDaGlsZH0pID0+IHtcblx0XHRpZiAoZmlyc3RDaGlsZC5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRsZXQgY2F0VGl0bGUgPSB0aXRsZShmaXJzdENoaWxkLmdldEF0dHJpYnV0ZSgnaHJlZicpKTtcblx0XHRpZiAoIWNhdFRpdGxlKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y2F0VGl0bGUgPSBjYXRUaXRsZS5zbGljZShjYXRUaXRsZS5pbmRleE9mKCc6JykgKyAxKS5yZXBsYWNlKC9fL2csICcgJyk7XG5cdFx0aWYgKEhDLmJsYWNrbGlzdCAmJiBIQy5ibGFja2xpc3QudGVzdChjYXRUaXRsZSkpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRjb25zdCByZXN1bHQgPSB7XG5cdFx0XHR0aXRsZTogY2F0VGl0bGUsXG5cdFx0XHRtYXRjaDogWycnLCAnJywgJyddLFxuXHRcdH07XG5cdFx0aWYgKHBhZ2VUZXh0ID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblx0XHRpZiAoY2xlYW5lZFRleHQgPT09IG51bGwpIHtcblx0XHRcdGNvbnN0IG5vd2lraVJlZ2V4ID0gbmV3IFJlZ0V4cCgnPG5vJy5jb25jYXQoJ3dpa2k+JywgU3RyaW5nLnJhd2AoXFxzfFxcUykqPzwvbm9gLCAnd2lraScsICc+JyksICdnJyk7XG5cdFx0XHRjbGVhbmVkVGV4dCA9IHBhZ2VUZXh0LnJlcGxhY2UoLzwhLS0oXFxzfFxcUykqPy0tPi9nLCAnJykucmVwbGFjZShub3dpa2lSZWdleCwgJycpO1xuXHRcdH1cblx0XHRyZXN1bHQubWF0Y2ggPSBmaW5kX2NhdGVnb3J5KGNsZWFuZWRUZXh0LCBjYXRUaXRsZSwgdHJ1ZSk7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblx0bGV0IGluaXRpYWxpemVkID0gZmFsc2U7XG5cdGxldCBzZXR1cFRpbWVvdXQgPSBudWxsO1xuXHRjb25zdCBmaW5kQnlDbGFzcyA9IChzY29wZSwgdGFnLCBjbGFzc05hbWUpID0+IHtcblx0XHRjb25zdCByZXN1bHQgPSAkKHNjb3BlKS5maW5kKGAke3RhZ30uJHtjbGFzc05hbWV9YCk7XG5cdFx0cmV0dXJuIHJlc3VsdCAmJiByZXN1bHQubGVuZ3RoID4gMCA/IHJlc3VsdFswXSA6IG51bGw7XG5cdH07XG5cdGNvbnN0IHNldHVwID0gKGFkZGl0aW9uYWxXb3JrKSA9PiB7XG5cdFx0aWYgKGluaXRpYWxpemVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGluaXRpYWxpemVkID0gdHJ1ZTtcblx0XHRpZiAoc2V0dXBUaW1lb3V0KSB7XG5cdFx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KHNldHVwVGltZW91dCk7XG5cdFx0XHRzZXR1cFRpbWVvdXQgPSBudWxsO1xuXHRcdH1cblx0XHQvLyBGaW5kIHRoZSBjYXRlZ29yeSBiYXIsIG9yIGNyZWF0ZSBhbiBlbXB0eSBvbmUgaWYgdGhlcmUgaXNuJ3Qgb25lLiBUaGVuIGFkZCAtLystIGxpbmtzIGFmdGVyXG5cdFx0Ly8gZWFjaCBjYXRlZ29yeSwgYW5kIGFkZCB0aGUgKyBsaW5rLlxuXHRcdGNhdExpbmUgfHw9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtdy1ub3JtYWwtY2F0bGlua3MnKTsgLy8gU3BlY2lhbDpVcGxvYWRcblx0XHRjb25zdCBoaWRkZW5DYXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI213LWhpZGRlbi1jYXRsaW5rcycpO1xuXHRcdGlmICghY2F0TGluZSkge1xuXHRcdFx0bGV0IGZvb3RlciA9IG51bGw7XG5cdFx0XHRpZiAoIWhpZGRlbkNhdHMpIHtcblx0XHRcdFx0Zm9vdGVyID0gZmluZEJ5Q2xhc3MoZG9jdW1lbnQsICdkaXYnLCAncHJpbnRmb290ZXInKTtcblx0XHRcdFx0aWYgKCFmb290ZXIpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH0gLy8gRG9uJ3Qga25vdyB3aGVyZSB0byBpbnNlcnQgdGhlIGNhdGVnb3J5IGxpbmVcblx0XHRcdH1cblx0XHRcdGNhdExpbmUgPSBtYWtlKCdkaXYnKTtcblx0XHRcdGNhdExpbmUuaWQgPSAnbXctbm9ybWFsLWNhdGxpbmtzJztcblx0XHRcdGNhdExpbmUuc3R5bGUudGV4dEFsaWduID0gaXNfcnRsID8gJ3JpZ2h0JyA6ICdsZWZ0Jztcblx0XHRcdC8vIEFkZCBhIGxhYmVsXG5cdFx0XHRjb25zdCBsYWJlbCA9IG1ha2UoJ2EnKTtcblx0XHRcdGxhYmVsLmhyZWYgPSBjb25mLndnQXJ0aWNsZVBhdGgucmVwbGFjZSgnJDEnLCAnU3BlY2lhbDpDYXRlZ29yaWVzJyk7XG5cdFx0XHRsYWJlbC50aXRsZSA9IGdldE1lc3NhZ2UoJ2NhdGVnb3JpZXMnKTtcblx0XHRcdGxhYmVsLmFwcGVuZChtYWtlKGdldE1lc3NhZ2UoJ2NhdGVnb3JpZXMnKSwgdHJ1ZSkpO1xuXHRcdFx0Y2F0TGluZS5hcHBlbmQobGFiZWwpO1xuXHRcdFx0Y2F0TGluZS5hcHBlbmQobWFrZSgnOicsIHRydWUpKTtcblx0XHRcdC8vIEluc2VydCB0aGUgbmV3IGNhdGVnb3J5IGxpbmVcblx0XHRcdGxldCBjb250YWluZXIgPSBoaWRkZW5DYXRzID8gaGlkZGVuQ2F0cy5wYXJlbnROb2RlIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhdGxpbmtzJyk7XG5cdFx0XHRpZiAoIWNvbnRhaW5lcikge1xuXHRcdFx0XHRjb250YWluZXIgPSBtYWtlKCdkaXYnKTtcblx0XHRcdFx0Y29udGFpbmVyLmlkID0gJ2NhdGxpbmtzJztcblx0XHRcdFx0Zm9vdGVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNvbnRhaW5lciwgZm9vdGVyLm5leHRTaWJsaW5nKTtcblx0XHRcdH1cblx0XHRcdGNvbnRhaW5lci5jbGFzc05hbWUgPSAnY2F0bGlua3Mgbm9wcmludCc7XG5cdFx0XHRjb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0aWYgKGhpZGRlbkNhdHMpIHtcblx0XHRcdFx0aGlkZGVuQ2F0cy5iZWZvcmUoY2F0TGluZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb250YWluZXIuYXBwZW5kKGNhdExpbmUpO1xuXHRcdFx0fVxuXHRcdH0gLy8gZW5kIGlmIGNhdExpbmUgZXhpc3RzXG5cdFx0aWYgKGlzX3J0bCkge1xuXHRcdFx0Y2F0TGluZS5kaXIgPSAncnRsJztcblx0XHR9XG5cdFx0Ly8gQ3JlYXRlIGVkaXRvcnMgZm9yIGFsbCBleGlzdGluZyBjYXRlZ29yaWVzXG5cdFx0Y29uc3QgY3JlYXRlRWRpdG9ycyA9IChsaW5lLCBpc19oaWRkZW4pID0+IHtcblx0XHRcdGxldCBpO1xuXHRcdFx0bGV0IGNhdHMgPSBsaW5lLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG5cdFx0XHRpZiAoY2F0cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdG5ld0RPTSA9IHRydWU7XG5cdFx0XHRcdGxpbmUgPSBjYXRzWzBdLnBhcmVudE5vZGU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjYXRzID0gbGluZS5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuJyk7XG5cdFx0XHR9XG5cdFx0XHQvLyBDb3B5IGNhdHMsIG90aGVyd2lzZSBpdCdsbCBhbHNvIG1hZ2ljYWxseSBjb250YWluIG91ciBhZGRlZCBzcGFucyBhcyBpdCBpcyBhIGxpdmUgY29sbGVjdGlvbiFcblx0XHRcdGNvbnN0IGNvcHlDYXRzID0gQXJyYXkuZnJvbSh7XG5cdFx0XHRcdGxlbmd0aDogY2F0cy5sZW5ndGgsXG5cdFx0XHR9KTtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBjYXRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvcHlDYXRzW2ldID0gY2F0c1tpXTtcblx0XHRcdH1cblx0XHRcdGZvciAoaSA9IDA7IGkgPCBjb3B5Q2F0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCB0ZXN0ID0gaXNPblBhZ2UoY29weUNhdHNbaV0pO1xuXHRcdFx0XHRpZiAodGVzdCAhPT0gbnVsbCAmJiB0ZXN0Lm1hdGNoICE9PSBudWxsICYmIGxpbmUpIHtcblx0XHRcdFx0XHRuZXcgQ2F0ZWdvcnlFZGl0b3IobGluZSwgY29weUNhdHNbaV0sIHRlc3QudGl0bGUsIHRlc3QubWF0Y2hbMl0sIGlzX2hpZGRlbik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBjb3B5Q2F0cy5sZW5ndGggPiAwID8gY29weUNhdHMuYXQoLTEpIDogbnVsbDtcblx0XHR9O1xuXHRcdGNvbnN0IGxhc3RTcGFuID0gY3JlYXRlRWRpdG9ycyhjYXRMaW5lLCBmYWxzZSk7XG5cdFx0Ly8gQ3JlYXRlIG9uZSB0byBhZGQgYSBuZXcgY2F0ZWdvcnlcblx0XHRuZXcgQ2F0ZWdvcnlFZGl0b3IobmV3RE9NID8gY2F0TGluZS5xdWVyeVNlbGVjdG9yQWxsKCd1bCcpWzBdIDogY2F0TGluZSwgbnVsbCwgbnVsbCwgbGFzdFNwYW4gIT09IG51bGwsIGZhbHNlKTtcblx0XHRpZiAoIW9uVXBsb2FkKSB7XG5cdFx0XHRpZiAocGFnZVRleHQgIT09IG51bGwgJiYgaGlkZGVuQ2F0cykge1xuXHRcdFx0XHRpZiAoaXNfcnRsKSB7XG5cdFx0XHRcdFx0aGlkZGVuQ2F0cy5kaXIgPSAncnRsJztcblx0XHRcdFx0fVxuXHRcdFx0XHRjcmVhdGVFZGl0b3JzKGhpZGRlbkNhdHMsIHRydWUpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gQW5kIGZpbmFsbHkgYWRkIHRoZSBcIm11bHRpLW1vZGVcIiBzcGFuLiAoRG8gdGhpcyBhdCB0aGUgZW5kLCBvdGhlcndpc2UgaXQgZW5kcyB1cCBpbiB0aGUgbGlzdCBhYm92ZS4pXG5cdFx0XHRjb25zdCBlbmFibGVNdWx0aSA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdGVuYWJsZU11bHRpLmNsYXNzTmFtZSA9ICdub3ByaW50Jztcblx0XHRcdGlmIChpc19ydGwpIHtcblx0XHRcdFx0ZW5hYmxlTXVsdGkuZGlyID0gJ3J0bCc7XG5cdFx0XHR9XG5cdFx0XHRjYXRMaW5lLmluc2VydEJlZm9yZShlbmFibGVNdWx0aSwgY2F0TGluZS5maXJzdENoaWxkLm5leHRTaWJsaW5nKTtcblx0XHRcdGVuYWJsZU11bHRpLmFwcGVuZChtYWtlKCdcXHUwMEEwJywgdHJ1ZSkpOyAvLyBuYnNwXG5cdFx0XHRtdWx0aVNwYW4gPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHRlbmFibGVNdWx0aS5hcHBlbmQobXVsdGlTcGFuKTtcblx0XHRcdG11bHRpU3Bhbi5pbm5lckhUTUwgPSBgKDxhPiR7SEMuYWRkbXVsdGl9PC9hPilgO1xuXHRcdFx0Y29uc3QgW2xpbmtdID0gbXVsdGlTcGFuLnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKTtcblx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0c2V0TXVsdGlJbnB1dCgpO1xuXHRcdFx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0XHRcdFx0cmV0dXJuIGV2dEtpbGwoZXZlbnQpO1xuXHRcdFx0fSk7XG5cdFx0XHRsaW5rLnRpdGxlID0gZ2V0TWVzc2FnZSgnbXVsdGlfdG9vbHRpcCcpO1xuXHRcdFx0bGluay5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG5cdFx0fVxuXHRcdGNsZWFuZWRUZXh0ID0gbnVsbDtcblx0XHRpZiAoYWRkaXRpb25hbFdvcmsgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuXHRcdFx0YWRkaXRpb25hbFdvcmsoKTtcblx0XHR9XG5cdFx0bXcuaG9vaygnaG90Y2F0LnJlYWR5JykuZmlyZSgpOyAvLyBFeGVjdXRlIHJlZ2lzdGVyZWQgY2FsbGJhY2sgZnVuY3Rpb25zXG5cdFx0JCgnYm9keScpLnRyaWdnZXIoJ2hvdGNhdFNldHVwQ29tcGxldGVkJyk7XG5cdH07XG5cdGNvbnN0IGNyZWF0ZUNvbW1pdEZvcm0gPSAoKSA9PiB7XG5cdFx0aWYgKGNvbW1pdEZvcm0pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgZm9ybUNvbnRhaW5lciA9IG1ha2UoJ2RpdicpO1xuXHRcdGZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kKGZvcm1Db250YWluZXIpO1xuXHRcdGZvcm1Db250YWluZXIuaW5uZXJIVE1MID0gYDxmb3JtIGlkPVwiaG90Y2F0Q29tbWl0Rm9ybVwiIG1ldGhvZD1cInBvc3RcIiBlbmN0eXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIGFjdGlvbj1cIiR7XG5cdFx0XHRjb25mLndnU2NyaXB0XG5cdFx0fT90aXRsZT0ke2VuY29kZVVSSUNvbXBvbmVudChjb25mLndnUGFnZU5hbWUpfSZhY3Rpb249c3VibWl0XCI+XG5cdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwid3BUZXh0Ym94MVwiPlxuXHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIm1vZGVsXCIgdmFsdWU9XCIke2NvbmYud2dQYWdlQ29udGVudE1vZGVsfVwiPlxuXHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImZvcm1hdFwiIHZhbHVlPVwidGV4dC94LXdpa2lcIj5cblx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ3cFN1bW1hcnlcIiB2YWx1ZT1cIlwiPlxuXHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwid3BNaW5vcmVkaXRcIiB0aXRsZT1cIndwTWlub3JlZGl0XCIgdmFsdWU9XCIxXCI+XG5cdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJ3cFdhdGNodGhpc1wiIHRpdGxlPVwid3BXYXRjaHRoaXNcIiB2YWx1ZT1cIjFcIj5cblx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ3cEF1dG9TdW1tYXJ5XCIgdmFsdWU9XCJkNDFkOGNkOThmMDBiMjA0ZTk4MDA5OThlY2Y4NDI3ZVwiPlxuXHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwRWRpdHRpbWVcIj5cblx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ3cFN0YXJ0dGltZVwiPlxuXHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwRGlmZlwiIHZhbHVlPVwid3BEaWZmXCI+XG5cdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwib2xkaWRcIiB2YWx1ZT1cIjBcIj5cblx0XHQ8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIG5hbWU9XCJoY0NvbW1pdFwiIHZhbHVlPVwiaGNDb21taXRcIj5cblx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ3cEVkaXRUb2tlblwiPlxuXHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwVWx0aW1hdGVQYXJhbVwiIHZhbHVlPVwiMVwiPlxuXHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwQ2hhbmdlVGFnc1wiPlxuXHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9XCLihLPwnZKy4pml8J2TivCdk4PwnZK+8J2SuOKEtPCdkrnihK9cIiBuYW1lPVwid3BVbmljb2RlQ2hlY2tcIj5cblx0XHQ8L2Zvcm0+YDtcblx0XHRjb21taXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvdGNhdENvbW1pdEZvcm0nKTtcblx0fTtcblx0Y29uc3QgZ2V0UGFnZSA9ICgpID0+IHtcblx0XHQvLyBXZSBrbm93IHdlIGhhdmUgYW4gYXJ0aWNsZSBoZXJlLlxuXHRcdGlmIChjb25mLndnQXJ0aWNsZUlkKSB7XG5cdFx0XHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0cmF3Y29udGludWU6ICcnLFxuXHRcdFx0XHR0aXRsZXM6IGNvbmYud2dQYWdlTmFtZSxcblx0XHRcdFx0cHJvcDogWydpbmZvJywgJ3JldmlzaW9ucyddLFxuXHRcdFx0XHRydnByb3A6IFsnY29udGVudCcsICd0aW1lc3RhbXAnLCAnaWRzJ10sXG5cdFx0XHRcdHJ2bGltaXQ6ICcxJyxcblx0XHRcdFx0cnZzdGFydGlkOiBjb25mLndnQ3VyUmV2aXNpb25JZCxcblx0XHRcdFx0cnZzbG90czogJ21haW4nLFxuXHRcdFx0XHRtZXRhOiBbJ3NpdGVpbmZvJ10sXG5cdFx0XHR9O1xuXHRcdFx0SEMuc3RhcnQgPSAoZGF0YSkgPT4ge1xuXHRcdFx0XHRzZXRQYWdlKGRhdGEpO1xuXHRcdFx0XHRzZXR1cChjcmVhdGVDb21taXRGb3JtKTtcblx0XHRcdH07XG5cdFx0XHRhcGkuZ2V0KHBhcmFtcykudGhlbigoZGF0YSkgPT4ge1xuXHRcdFx0XHRIQy5zdGFydChkYXRhKTtcblx0XHRcdH0pO1xuXHRcdFx0c2V0dXBUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHNldHVwKGNyZWF0ZUNvbW1pdEZvcm0pO1xuXHRcdFx0fSwgNDAwMCk7IC8vIDQgc2VjLCBqdXN0IGluIGNhc2UgZ2V0dGluZyB0aGUgd2lraXRleHQgdGFrZXMgbG9uZ2VyLlxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBEb2Vzbid0IGV4aXN0IHlldC4gRGlzYWJsZSBvbiBub24tZXhpc3RpbmcgVXNlciBwYWdlcy5cblx0XHRcdGlmIChjb25mLndnTmFtZXNwYWNlTnVtYmVyID09PSAyKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHBhZ2VUZXh0ID0gJyc7XG5cdFx0XHRwYWdlVGltZSA9IG51bGw7XG5cdFx0XHRzZXR1cChjcmVhdGVDb21taXRGb3JtKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IHNldFN0YXRlID0gKHN0YXRlKSA9PiB7XG5cdFx0Y29uc3QgY2F0cyA9IHN0YXRlLnNwbGl0KCdcXG4nKTtcblx0XHRpZiAoY2F0cy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRpZiAoaW5pdGlhbGl6ZWQgJiYgZWRpdG9ycy5sZW5ndGggPT09IDEgJiYgZWRpdG9yc1swXS5pc0FkZENhdGVnb3J5KSB7XG5cdFx0XHQvLyBJbnNlcnQgbmV3IHNwYW5zIGFuZCBjcmVhdGUgbmV3IGVkaXRvcnMgZm9yIHRoZW0uXG5cdFx0XHRjb25zdCBuZXdTcGFucyA9IFtdO1xuXHRcdFx0Y29uc3QgYmVmb3JlID0gZWRpdG9ycy5sZW5ndGggPT09IDEgPyBlZGl0b3JzWzBdLnNwYW4gOiBudWxsO1xuXHRcdFx0bGV0IGk7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2F0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAoY2F0c1tpXS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgY2F0ID0gY2F0c1tpXS5zcGxpdCgnfCcpO1xuXHRcdFx0XHRjb25zdCBrZXkgPSBjYXQubGVuZ3RoID4gMSA/IGNhdFsxXSA6IG51bGw7XG5cdFx0XHRcdFtjYXRdID0gY2F0O1xuXHRcdFx0XHRjb25zdCBsaW5rID0gbWFrZSgnYScpO1xuXHRcdFx0XHRsaW5rLmhyZWYgPSB3aWtpUGFnZVBhdGgoYCR7SEMuY2F0ZWdvcnlfY2Fub25pY2FsfToke2NhdH1gKTtcblx0XHRcdFx0bGluay5hcHBlbmQobWFrZShjYXQsIHRydWUpKTtcblx0XHRcdFx0bGluay50aXRsZSA9IGNhdDtcblx0XHRcdFx0Y29uc3Qgc3BhbiA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdFx0c3Bhbi5hcHBlbmQobGluayk7XG5cdFx0XHRcdGlmICghaSkge1xuXHRcdFx0XHRcdGNhdExpbmUuaW5zZXJ0QmVmb3JlKG1ha2UoJyAnLCB0cnVlKSwgYmVmb3JlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRiZWZvcmUuYmVmb3JlKHNwYW4pO1xuXHRcdFx0XHRpZiAoYmVmb3JlICYmIGkgKyAxIDwgY2F0cy5sZW5ndGgpIHtcblx0XHRcdFx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKG1ha2UoJyB8ICcsIHRydWUpLCBiZWZvcmUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG5ld1NwYW5zW25ld1NwYW5zLmxlbmd0aF0gPSB7XG5cdFx0XHRcdFx0ZWxlbWVudDogc3Bhbixcblx0XHRcdFx0XHR0aXRsZTogY2F0LFxuXHRcdFx0XHRcdGtleSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdC8vIEFuZCBjaGFuZ2UgdGhlIGxhc3Qgb25lLi4uXG5cdFx0XHRpZiAoYmVmb3JlKSB7XG5cdFx0XHRcdGJlZm9yZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShtYWtlKCcgfCAnLCB0cnVlKSwgYmVmb3JlKTtcblx0XHRcdH1cblx0XHRcdGZvciAoaSA9IDA7IGkgPCBuZXdTcGFucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRuZXcgQ2F0ZWdvcnlFZGl0b3IoY2F0TGluZSwgbmV3U3BhbnNbaV0uZWxlbWVudCwgbmV3U3BhbnNbaV0udGl0bGUsIG5ld1NwYW5zW2ldLmtleSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9O1xuXHRjb25zdCBnZXRTdGF0ZSA9ICgpID0+IHtcblx0XHRsZXQgcmVzdWx0ID0gbnVsbDtcblx0XHRmb3IgKGNvbnN0IGVkaXRvciBvZiBlZGl0b3JzKSB7XG5cdFx0XHRsZXQgdGV4dCA9IGVkaXRvci5jdXJyZW50Q2F0ZWdvcnk7XG5cdFx0XHRjb25zdCBrZXkgPSBlZGl0b3IuY3VycmVudEtleTtcblx0XHRcdGlmICh0ZXh0ICYmIHRleHQubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRpZiAoa2V5ICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0dGV4dCArPSBgfCR7a2V5fWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHJlc3VsdCA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdHJlc3VsdCA9IHRleHQ7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVzdWx0ICs9IGBcXG4ke3RleHR9YDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXHRjb25zdCByZWFsbHlfcnVuID0gKCkgPT4ge1xuXHRcdGluaXRpYWxpemUoKTtcblx0XHRpZiAoXG5cdFx0XHQhSEMudXBsb2FkX2Rpc2FibGVkICYmXG5cdFx0XHRjb25mLndnTmFtZXNwYWNlTnVtYmVyID09PSAtMSAmJlxuXHRcdFx0Y29uZi53Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSA9PT0gJ1VwbG9hZCcgJiZcblx0XHRcdGNvbmYud2dVc2VyTmFtZVxuXHRcdCkge1xuXHRcdFx0c2V0dXBfdXBsb2FkKCk7XG5cdFx0XHRzZXR1cCgoKSA9PiB7XG5cdFx0XHRcdC8vIENoZWNrIGZvciBzdGF0ZSByZXN0b3JhdGlvbiBvbmNlIHRoZSBzZXR1cCBpcyBkb25lIG90aGVyd2lzZSwgYnV0IGJlZm9yZSBzaWduYWxsaW5nIHNldHVwIGNvbXBsZXRpb25cblx0XHRcdFx0aWYgKHdpbmRvdy5VcGxvYWRGb3JtICYmIFVwbG9hZEZvcm0ucHJldmlvdXNfaG90Y2F0X3N0YXRlKSB7XG5cdFx0XHRcdFx0VXBsb2FkRm9ybS5wcmV2aW91c19ob3RjYXRfc3RhdGUgPSBzZXRTdGF0ZShVcGxvYWRGb3JtLnByZXZpb3VzX2hvdGNhdF9zdGF0ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdCFjb25mLndnSXNBcnRpY2xlIHx8XG5cdFx0XHRcdGNvbmYud2dBY3Rpb24gIT09ICd2aWV3JyB8fFxuXHRcdFx0XHRwYXJhbSgnZGlmZicpICE9PSBudWxsIHx8XG5cdFx0XHRcdHBhcmFtKCdvbGRpZCcpICE9PSBudWxsIHx8XG5cdFx0XHRcdCFjYW5fZWRpdCgpIHx8XG5cdFx0XHRcdEhDLmRpc2FibGUoKVxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGdldFBhZ2UoKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IHJ1biA9ICgpID0+IHtcblx0XHRpZiAoSEMuc3RhcnRlZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRIQy5zdGFydGVkID0gdHJ1ZTtcblx0XHRyZWFsbHlfcnVuKCk7XG5cdH07XG5cdC8vIEV4cG9ydCBsZWdhY3kgZnVuY3Rpb25zXG5cdHdpbmRvdy5ob3RjYXRfZ2V0X3N0YXRlID0gKCkgPT4ge1xuXHRcdHJldHVybiBnZXRTdGF0ZSgpO1xuXHR9O1xuXHR3aW5kb3cuaG90Y2F0X3NldF9zdGF0ZSA9IChzdGF0ZSkgPT4ge1xuXHRcdHJldHVybiBzZXRTdGF0ZShzdGF0ZSk7XG5cdH07XG5cdHdpbmRvdy5ob3RjYXRfY2xvc2VfZm9ybSA9ICgpID0+IHtcblx0XHRjbG9zZUZvcm0oKTtcblx0fTtcblx0SEMucnVuV2hlblJlYWR5ID0gKGNhbGxiYWNrKSA9PiB7XG5cdFx0Ly8gcnVuIHVzZXItcmVnaXN0ZXJlZCBjb2RlIG9uY2UgSG90Q2F0IGlzIGZ1bGx5IHNldCB1cCBhbmQgcmVhZHkuXG5cdFx0bXcuaG9vaygnaG90Y2F0LnJlYWR5JykuYWRkKGNhbGxiYWNrKTtcblx0fTtcblx0Ly8gUnVuIGFzIHNvb24gYXMgcG9zc2libGUuIFRoaXMgdmFyaWVzIGRlcGVuZGluZyBvbiBNZWRpYVdpa2kgdmVyc2lvbjtcblx0Ly8gd2luZG93J3MgJ2xvYWQnIGV2ZW50IGlzIGFsd2F5cyBzYWZlLCBidXQgdXN1YWxseSB3ZSBjYW4gZG8gYmV0dGVyIHRoYW4gdGhhdC5cblx0aWYgKGNvbmYud2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUgIT09ICdVcGxvYWQnKSB7XG5cdFx0Ly8gUmVsb2FkIEhvdENhdCBhZnRlciAoVkUpIGVkaXRzIChidWcgVDEwMzI4NSlcblx0XHRtdy5ob29rKCdwb3N0RWRpdCcpLmFkZCgoKSA9PiB7XG5cdFx0XHQvLyBSZXNldCBIb3RDYXQgaW4gY2FzZSB0aGlzIGlzIGEgc29mdCByZWxvYWQgKGUuZy4gVmlzdWFsRWRpdG9yIGVkaXQpLCB1bmxlc3MgdGhlIGNhdGVnb3JpZXNcblx0XHRcdC8vIHdlcmUgbm90IHJlLXJlbmRlcmVkIGFuZCBvdXIgaW50ZXJmYWNlIGlzIHN0aWxsIHRoZXJlIChlLmcuIERpc2N1c3Npb25Ub29scyBlZGl0KVxuXHRcdFx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXRsaW5rcyAuaG90Y2F0bGluaycpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNhdExpbmUgPSBudWxsO1xuXHRcdFx0ZWRpdG9ycyA9IFtdO1xuXHRcdFx0aW5pdGlhbGl6ZWQgPSBmYWxzZTtcblx0XHRcdEhDLnN0YXJ0ZWQgPSBmYWxzZTtcblx0XHRcdHJ1bigpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdlIGNhbiBzYWZlbHkgdHJpZ2dlciBqdXN0IGFmdGVyIHVzZXIgY29uZmlndXJhdGlvbiBpcyBsb2FkZWQuXG5cdC8vIFVzZSBhbHdheXMoKSBpbnN0ZWFkIG9mIHRoZW4oKSB0byBhbHNvIHN0YXJ0IEhvdENhdCBpZiB0aGUgdXNlciBtb2R1bGUgaGFzIHByb2JsZW1zLlxuXHQkKHJ1bik7XG59KSgpO1xuIiwgImNvbnN0IGdldE1lc3NhZ2UgPSAoa2V5OiBzdHJpbmcsIC4uLmFyZ3M6IHN0cmluZ1tdKTogc3RyaW5nID0+IHtcblx0a2V5ID0gYGhvdGNhdC0ke2tleX1gO1xuXHQvLyBNZXNzYWdlcyB0aGF0IGNhbiBiZSB1c2VkIGhlcmU6XG5cdC8vICogc2VlIG1lc3NhZ2VzLnRzXG5cdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0cmV0dXJuIG13Lm1lc3NhZ2Uoa2V5LCAuLi5hcmdzKS5wbGFpbigpO1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJjb25zdCBob3RDYXRNZXNzYWdlcyA9ICgpOiB2b2lkID0+IHtcblx0Y29uc3Qge3dnVXNlckxhbmd1YWdlfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoWyd6aC1oYW50JywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXR3J10uaW5jbHVkZXMod2dVc2VyTGFuZ3VhZ2UpKSB7XG5cdFx0bXcubWVzc2FnZXMuc2V0KHtcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X3JlbW92ZWQnOiAn5bey56e76ZmkW1tDYXRlZ29yeTokMV1dJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtdGVtcGxhdGVfcmVtb3ZlZCc6ICflt7Lnp7vpmaR7e1tbQ2F0ZWdvcnk6JDFdXX19Jyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X2FkZGVkJzogJ+W3sua3u+WKoFtbQ2F0ZWdvcnk6JDFdXScsXG5cdFx0XHQvLyAkMiBpcyB0aGUgbmV3IGtleVxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfa2V5Y2hhbmdlJzogJ+W3suioree9rltbQ2F0ZWdvcnk6JDFdXeeahOaWsOaOkuW6j+Wtl++8mlwiJDJcIicsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9ub3RGb3VuZCc6ICfliIbpoZ7igJwkMeKAneaykuacieaJvuWIsCcsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9leGlzdHMnOiAn5YiG6aGe4oCcJDHigJ3lt7LntpPlrZjlnKjvvIzmspLmnInmt7vliqDjgIInLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfcmVzb2x2ZWQnOiAn77yI6YeN5a6a5ZCRW1tDYXRlZ29yeTokMV1d5bey6JmV55CG77yJJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtdW5jYXRfcmVtb3ZlZCc6ICflt7Lnp7vpmaR7e3VuY2F0ZWdvcml6ZWR9fScsXG5cdFx0XHQvLyBTb21lIHRleHQgdG8gcHJlZml4IHRvIHRoZSBlZGl0IHN1bW1hcnkuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXByZWZpeCc6ICfkvb/nlKhbW0g6SE9UQ0FUfEhvdENhdF1dJyxcblx0XHRcdC8vIFNvbWUgdGV4dCB0byBhcHBlbmQgdG8gdGhlIGVkaXQgc3VtbWFyeS4gTmFtZWQgJ3VzaW5nJyBmb3IgaGlzdG9yaWNhbCByZWFzb25zLiBJZiB5b3UgcHJlZmVyXG5cdFx0XHQvLyB0byBoYXZlIGEgbWFya2VyIGF0IHRoZSBmcm9udCwgdXNlIHByZWZpeCBhbmQgc2V0IHRoaXMgdG8gdGhlIGVtcHR5IHN0cmluZy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtdXNpbmcnOiAnJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtbXVsdGlfY2hhbmdlJzogJyQx5YCL5YiG6aGeJyxcblx0XHRcdC8vIEFueSBjYXRlZ29yeSBpbiB0aGlzIGNhdGVnb3J5IGlzIGRlZW1lZCBhIGRpc2FtYmlndWF0aW9uIGNhdGVnb3J5OyBpLmUuLCBhIGNhdGVnb3J5IHRoYXQgc2hvdWxkIG5vdCBjb250YWluXG5cdFx0XHQvLyBhbnkgaXRlbXMsIGJ1dCB0aGF0IGNvbnRhaW5zIGxpbmtzIHRvIG90aGVyIGNhdGVnb3JpZXMgd2hlcmUgc3R1ZmYgc2hvdWxkIGJlIGNhdGVnb3JpemVkLiBJZiB5b3UgZG9uJ3QgaGF2ZVxuXHRcdFx0Ly8gdGhhdCBjb25jZXB0IG9uIHlvdXIgd2lraSwgc2V0IGl0IHRvIGJsYW5rIHN0cmluZy4gVXNlIGJsYW5rcywgbm90IHVuZGVyc2NvcmVzLlxuXHRcdFx0J2hvdGNhdC1kaXNhbWJpZ19jYXRlZ29yeSc6ICcnLFxuXHRcdFx0Ly8gQW55IGNhdGVnb3J5IGluIHRoaXMgY2F0ZWdvcnkgaXMgZGVlbWVkIGEgKHNvZnQpIHJlZGlyZWN0IHRvIHNvbWUgb3RoZXIgY2F0ZWdvcnkgZGVmaW5lZCBieSBhIGxpbmtcblx0XHRcdC8vIHRvIGFub3RoZXIgbm9uLWJsYWNrbGlzdGVkIGNhdGVnb3J5LiBJZiB5b3VyIHdpa2kgZG9lc24ndCBoYXZlIHNvZnQgY2F0ZWdvcnkgcmVkaXJlY3RzLCBzZXQgdGhpcyB0byBudWxsLlxuXHRcdFx0Ly8gSWYgYSBzb2Z0LXJlZGlyZWN0ZWQgY2F0ZWdvcnkgY29udGFpbnMgbW9yZSB0aGFuIG9uZSBsaW5rIHRvIGFub3RoZXIgbm9uLWJsYWNrbGlzdGVkIGNhdGVnb3J5LCBpdCdzIGNvbnNpZGVyZWRcblx0XHRcdC8vIGEgZGlzYW1iaWd1YXRpb24gY2F0ZWdvcnkgaW5zdGVhZC5cblx0XHRcdCdob3RjYXQtcmVkaXJfY2F0ZWdvcnknOiAn5bey6YeN5a6a5ZCR55qE5YiG57G7Jyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtc2VwYXJhdG9yJzogJzsgJyxcblx0XHRcdC8vICQxIGlzIHJlcGxhY2VkIGJ5IGEgbnVtYmVyLiBJZiB5b3VyIGxhbmd1YWdlIGhhcyBzZXZlcmFsIHBsdXJhbCBmb3JtcyAoYy5mLiBbWzplbndpa2k6RHVhbCAoZ3JhbW1hdGljYWwgZm9ybSldXSksXG5cdFx0XHQvLyB5b3UgY2FuIHNldCB0aGlzIHRvIGFuIGFycmF5IG9mIHN0cmluZ3Mgc3VpdGFibGUgZm9yIHBhc3NpbmcgdG8gbXcubGFuZ3VhZ2UuY29uZmlnUGx1cmFsKCkuXG5cdFx0XHQvLyBJZiB0aGF0IGZ1bmN0aW9uIGRvZXNuJ3QgZXhpc3QsIEhvdENhdCB3aWxsIHNpbXBseSBmYWxsIGJhY2sgdG8gdXNpbmcgdGhlIGxhc3Rcblx0XHRcdC8vIGVudHJ5IGluIHRoZSBhcnJheS5cblx0XHRcdC8vIERlZmF1bHRzIHRvICdbWycgKyBjYXRlZ29yeV9jYW5vbmljYWwgKyAnOiQxXV0nLiBDYW4gYmUgb3ZlcnJpZGRlbiBpZiBpbiB0aGUgc2hvcnQgZWRpdCBzdW1tYXJpZXNcblx0XHRcdC8vIG5vdCB0aGUgc3RhbmRhcmQgY2F0ZWdvcnkgbmFtZSBzaG91bGQgYmUgdXNlZCBidXQsIHNheSwgYSBzaG9ydGVyIG5hbWVzcGFjZSBhbGlhcy4gJDEgaXMgcmVwbGFjZWRcblx0XHRcdC8vIGJ5IGEgY2F0ZWdvcnkgbmFtZS5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJzogJyQxJyxcblx0XHRcdC8vIEJ1dHRvbiB0ZXh0LiBMb2NhbGl6ZSB0byB3Z0NvbnRlbnRMYW5ndWFnZSBoZXJlOyBsb2NhbGl6ZSB0byB3Z1VzZXJMYW5ndWFnZSBpbiBhIHN1YnBhZ2UsXG5cdFx0XHQvLyBzZWUgbG9jYWxpemF0aW9uIGhvb2sgYmVsb3cuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNvbW1pdCc6ICflhLLlrZgnLFxuXHRcdFx0Ly8gQnV0dG9uIHRleHQuIExvY2FsaXplIHRvIHdnQ29udGVudExhbmd1YWdlIGhlcmU7IGxvY2FsaXplIHRvIHdnVXNlckxhbmd1YWdlIGluIGEgc3VicGFnZSxcblx0XHRcdC8vIHNlZSBsb2NhbGl6YXRpb24gaG9vayBiZWxvdy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtb2snOiAn56K65a6aJyxcblx0XHRcdC8vIEJ1dHRvbiB0ZXh0LiBMb2NhbGl6ZSB0byB3Z0NvbnRlbnRMYW5ndWFnZSBoZXJlOyBsb2NhbGl6ZSB0byB3Z1VzZXJMYW5ndWFnZSBpbiBhIHN1YnBhZ2UsXG5cdFx0XHQvLyBzZWUgbG9jYWxpemF0aW9uIGhvb2sgYmVsb3cuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhbmNlbCc6ICflj5bmtognLFxuXHRcdFx0Ly8gTG9jYWxpemUgdG8gd2dDb250ZW50TGFuZ3VhZ2UgaGVyZTsgbG9jYWxpemUgdG8gd2dVc2VyTGFuZ3VhZ2UgaW4gYSBzdWJwYWdlLFxuXHRcdFx0Ly8gc2VlIGxvY2FsaXphdGlvbiBob29rIGJlbG93LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1tdWx0aV9lcnJvcic6XG5cdFx0XHRcdCfnhKHms5Xlvp7kvLrmnI3lmajlj5blvpfpoIHpnaLmloflrZfjgILlm6DmraTvvIzmgqjnmoTliIbpoZ7orormm7TnhKHms5XlhLLlrZjjgILmiJHlgJHngrrmraTkuI3kvr/ooajnpLrmirHmrYnjgIInLFxuXHRcdFx0Ly8gUGx1cmFsIG9mIGNhdGVnb3J5X2Nhbm9uaWNhbC5cblx0XHRcdCdob3RjYXQtY2F0ZWdvcmllcyc6ICfliIbpoZ4nLFxuXHRcdFx0Ly8gTmFtZXMgZm9yIHRoZSBzZWFyY2ggZW5naW5lc1xuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtc2VhcmNoaW5kZXgnOiAn5pCc5bCL57Si5byVJyxcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLXBhZ2VsaXN0JzogJ+mggemdouWIl+ihqCcsXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1jb21iaW5lZCc6ICflkIjkvbXmkJzlsIsnLFxuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtc3ViY2F0JzogJ+WtkOWIhumhnicsXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1wYXJlbnRjYXQnOiAn5LiK5bGk5YiG6aGeJyxcblx0XHRcdC8vIFRoZSB0b29sdGlwcyBmb3IgdGhlIGFib3ZlIGxpbmtzXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLWNoYW5nZSc6ICfkv67mlLknLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1yZW1vdmUnOiAn56e76ZmkJyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtYWRkJzogJ+WinuWKoOS4gOWAi+aWsOWIhumhnicsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLXJlc3RvcmUnOiAn5b6p5Y6f6K6K5pu0Jyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtdW5kbyc6ICflvqnljp/orormm7QnLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1kb3duJzogJ+aJk+mWi+S7peS/ruaUueS4pumhr+ekuuWtkOWIhumhnicsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLXVwJzogJ+aJk+mWi+S7peS/ruaUueS4pumhr+ekuuS4iuWxpOWIhumhnicsXG5cdFx0XHQvLyBUb29sdGlwIGZvciB0aGUgXCJlbnRlciBtdWx0aS1tb2RlXCIgbGlua1xuXHRcdFx0J2hvdGNhdC1tdWx0aV90b29sdGlwJzogJ+S/ruaUueWkmuWAi+WIhumhnicsXG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0bXcubWVzc2FnZXMuc2V0KHtcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X3JlbW92ZWQnOiAn5bey56e76ZmkW1tDYXRlZ29yeTokMV1dJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtdGVtcGxhdGVfcmVtb3ZlZCc6ICflt7Lnp7vpmaR7e1tbQ2F0ZWdvcnk6JDFdXX19Jyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X2FkZGVkJzogJ+W3sua3u+WKoFtbQ2F0ZWdvcnk6JDFdXScsXG5cdFx0XHQvLyAkMiBpcyB0aGUgbmV3IGtleVxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfa2V5Y2hhbmdlJzogJ+W3suiuvue9rltbQ2F0ZWdvcnk6JDFdXeeahOaWsOaOkuW6j+Wtl++8mlwiJDJcIicsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9ub3RGb3VuZCc6ICfliIbnsbvigJwkMeKAneayoeacieaJvuWIsCcsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9leGlzdHMnOiAn5YiG57G74oCcJDHigJ3lt7Lnu4/lrZjlnKjvvIzmsqHmnInmt7vliqDjgIInLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfcmVzb2x2ZWQnOiAn77yI6YeN5a6a5ZCRW1tDYXRlZ29yeTokMV1d5bey5aSE55CG77yJJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtdW5jYXRfcmVtb3ZlZCc6ICflt7Lnp7vpmaR7e3VuY2F0ZWdvcml6ZWR9fScsXG5cdFx0XHQvLyBTb21lIHRleHQgdG8gcHJlZml4IHRvIHRoZSBlZGl0IHN1bW1hcnkuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXByZWZpeCc6ICfkvb/nlKhbW0g6SE9UQ0FUfEhvdENhdF1dJyxcblx0XHRcdC8vIFNvbWUgdGV4dCB0byBhcHBlbmQgdG8gdGhlIGVkaXQgc3VtbWFyeS4gTmFtZWQgJ3VzaW5nJyBmb3IgaGlzdG9yaWNhbCByZWFzb25zLiBJZiB5b3UgcHJlZmVyXG5cdFx0XHQvLyB0byBoYXZlIGEgbWFya2VyIGF0IHRoZSBmcm9udCwgdXNlIHByZWZpeCBhbmQgc2V0IHRoaXMgdG8gdGhlIGVtcHR5IHN0cmluZy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtdXNpbmcnOiAnJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtbXVsdGlfY2hhbmdlJzogJyQx5Liq5YiG57G7Jyxcblx0XHRcdC8vIEFueSBjYXRlZ29yeSBpbiB0aGlzIGNhdGVnb3J5IGlzIGRlZW1lZCBhIGRpc2FtYmlndWF0aW9uIGNhdGVnb3J5OyBpLmUuLCBhIGNhdGVnb3J5IHRoYXQgc2hvdWxkIG5vdCBjb250YWluXG5cdFx0XHQvLyBhbnkgaXRlbXMsIGJ1dCB0aGF0IGNvbnRhaW5zIGxpbmtzIHRvIG90aGVyIGNhdGVnb3JpZXMgd2hlcmUgc3R1ZmYgc2hvdWxkIGJlIGNhdGVnb3JpemVkLiBJZiB5b3UgZG9uJ3QgaGF2ZVxuXHRcdFx0Ly8gdGhhdCBjb25jZXB0IG9uIHlvdXIgd2lraSwgc2V0IGl0IHRvIGJsYW5rIHN0cmluZy4gVXNlIGJsYW5rcywgbm90IHVuZGVyc2NvcmVzLlxuXHRcdFx0J2hvdGNhdC1kaXNhbWJpZ19jYXRlZ29yeSc6ICcnLFxuXHRcdFx0Ly8gQW55IGNhdGVnb3J5IGluIHRoaXMgY2F0ZWdvcnkgaXMgZGVlbWVkIGEgKHNvZnQpIHJlZGlyZWN0IHRvIHNvbWUgb3RoZXIgY2F0ZWdvcnkgZGVmaW5lZCBieSBhIGxpbmtcblx0XHRcdC8vIHRvIGFub3RoZXIgbm9uLWJsYWNrbGlzdGVkIGNhdGVnb3J5LiBJZiB5b3VyIHdpa2kgZG9lc24ndCBoYXZlIHNvZnQgY2F0ZWdvcnkgcmVkaXJlY3RzLCBzZXQgdGhpcyB0byBudWxsLlxuXHRcdFx0Ly8gSWYgYSBzb2Z0LXJlZGlyZWN0ZWQgY2F0ZWdvcnkgY29udGFpbnMgbW9yZSB0aGFuIG9uZSBsaW5rIHRvIGFub3RoZXIgbm9uLWJsYWNrbGlzdGVkIGNhdGVnb3J5LCBpdCdzIGNvbnNpZGVyZWRcblx0XHRcdC8vIGEgZGlzYW1iaWd1YXRpb24gY2F0ZWdvcnkgaW5zdGVhZC5cdFx0XHQnaG90Y2F0LXJlZGlyX2NhdGVnb3J5JzogJ+W3sumHjeWumuWQkeeahOWIhuexuycsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXNlcGFyYXRvcic6ICc7ICcsXG5cdFx0XHQvLyAkMSBpcyByZXBsYWNlZCBieSBhIG51bWJlci4gSWYgeW91ciBsYW5ndWFnZSBoYXMgc2V2ZXJhbCBwbHVyYWwgZm9ybXMgKGMuZi4gW1s6ZW53aWtpOkR1YWwgKGdyYW1tYXRpY2FsIGZvcm0pXV0pLFxuXHRcdFx0Ly8geW91IGNhbiBzZXQgdGhpcyB0byBhbiBhcnJheSBvZiBzdHJpbmdzIHN1aXRhYmxlIGZvciBwYXNzaW5nIHRvIG13Lmxhbmd1YWdlLmNvbmZpZ1BsdXJhbCgpLlxuXHRcdFx0Ly8gSWYgdGhhdCBmdW5jdGlvbiBkb2Vzbid0IGV4aXN0LCBIb3RDYXQgd2lsbCBzaW1wbHkgZmFsbCBiYWNrIHRvIHVzaW5nIHRoZSBsYXN0XG5cdFx0XHQvLyBlbnRyeSBpbiB0aGUgYXJyYXkuXG5cdFx0XHQvLyBEZWZhdWx0cyB0byAnW1snICsgY2F0ZWdvcnlfY2Fub25pY2FsICsgJzokMV1dJy4gQ2FuIGJlIG92ZXJyaWRkZW4gaWYgaW4gdGhlIHNob3J0IGVkaXQgc3VtbWFyaWVzXG5cdFx0XHQvLyBub3QgdGhlIHN0YW5kYXJkIGNhdGVnb3J5IG5hbWUgc2hvdWxkIGJlIHVzZWQgYnV0LCBzYXksIGEgc2hvcnRlciBuYW1lc3BhY2UgYWxpYXMuICQxIGlzIHJlcGxhY2VkXG5cdFx0XHQvLyBieSBhIGNhdGVnb3J5IG5hbWUuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZSc6ICckMScsXG5cdFx0XHQvLyBCdXR0b24gdGV4dC4gTG9jYWxpemUgdG8gd2dDb250ZW50TGFuZ3VhZ2UgaGVyZTsgbG9jYWxpemUgdG8gd2dVc2VyTGFuZ3VhZ2UgaW4gYSBzdWJwYWdlLFxuXHRcdFx0Ly8gc2VlIGxvY2FsaXphdGlvbiBob29rIGJlbG93LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jb21taXQnOiAn5L+d5a2YJyxcblx0XHRcdC8vIEJ1dHRvbiB0ZXh0LiBMb2NhbGl6ZSB0byB3Z0NvbnRlbnRMYW5ndWFnZSBoZXJlOyBsb2NhbGl6ZSB0byB3Z1VzZXJMYW5ndWFnZSBpbiBhIHN1YnBhZ2UsXG5cdFx0XHQvLyBzZWUgbG9jYWxpemF0aW9uIGhvb2sgYmVsb3cuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLW9rJzogJ+ehruWumicsXG5cdFx0XHQvLyBCdXR0b24gdGV4dC4gTG9jYWxpemUgdG8gd2dDb250ZW50TGFuZ3VhZ2UgaGVyZTsgbG9jYWxpemUgdG8gd2dVc2VyTGFuZ3VhZ2UgaW4gYSBzdWJwYWdlLFxuXHRcdFx0Ly8gc2VlIGxvY2FsaXphdGlvbiBob29rIGJlbG93LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYW5jZWwnOiAn5Y+W5raIJyxcblx0XHRcdC8vIExvY2FsaXplIHRvIHdnQ29udGVudExhbmd1YWdlIGhlcmU7IGxvY2FsaXplIHRvIHdnVXNlckxhbmd1YWdlIGluIGEgc3VicGFnZSxcblx0XHRcdC8vIHNlZSBsb2NhbGl6YXRpb24gaG9vayBiZWxvdy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtbXVsdGlfZXJyb3InOlxuXHRcdFx0XHQn5peg5rOV5LuO5pyN5Yqh5Zmo5Y+W5b6X6aG16Z2i5paH5a2X44CC5Zug5q2k77yM5oKo55qE5YiG57G75pu05pS55peg5rOV5L+d5a2Y44CC5oiR5Lus5Li65q2k5LiN5L6/6KGo56S65oqx5q2J44CCJyxcblx0XHRcdC8vIFBsdXJhbCBvZiBjYXRlZ29yeV9jYW5vbmljYWwuXG5cdFx0XHQnaG90Y2F0LWNhdGVnb3JpZXMnOiAn5YiG57G7Jyxcblx0XHRcdC8vIE5hbWVzIGZvciB0aGUgc2VhcmNoIGVuZ2luZXNcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLXNlYXJjaGluZGV4JzogJ+aQnOe0oue0ouW8lScsXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1wYWdlbGlzdCc6ICfpobXpnaLliJfooagnLFxuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtY29tYmluZWQnOiAn5ZCI5bm25pCc57SiJyxcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLXN1YmNhdCc6ICflrZDliIbnsbsnLFxuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtcGFyZW50Y2F0JzogJ+S4iuWxguWIhuexuycsXG5cdFx0XHQvLyBUaGUgdG9vbHRpcHMgZm9yIHRoZSBhYm92ZSBsaW5rc1xuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1jaGFuZ2UnOiAn5L+u5pS5Jyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtcmVtb3ZlJzogJ+enu+mZpCcsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLWFkZCc6ICflop7liqDkuIDkuKrmlrDliIbnsbsnLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1yZXN0b3JlJzogJ+aSpOmUgOabtOaUuScsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLXVuZG8nOiAn5pKk6ZSA5pu05pS5Jyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtZG93bic6ICfmiZPlvIDku6Xkv67mlLnlubbmmL7npLrlrZDliIbnsbsnLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy11cCc6ICfmiZPlvIDku6Xkv67mlLnlubbmmL7npLrkuIrlsYLliIbnsbsnLFxuXHRcdFx0Ly8gVG9vbHRpcCBmb3IgdGhlIFwiZW50ZXIgbXVsdGktbW9kZVwiIGxpbmtcblx0XHRcdCdob3RjYXQtbXVsdGlfdG9vbHRpcCc6ICfkv67mlLnlpJrkuKrliIbnsbsnLFxuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQge2hvdENhdE1lc3NhZ2VzfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBLDZGQUFBQSxTQUFBO0FBQUE7QUFDQSxRQUFJLFFBQVEsU0FBVSxJQUFJO0FBQ3hCLGFBQU8sTUFBTSxHQUFHLFNBQVMsUUFBUTtBQUFBLElBQ25DO0FBR0EsSUFBQUEsUUFBTztBQUFBLElBRUwsTUFBTSxPQUFPLGNBQWMsWUFBWSxVQUFVLEtBQ2pELE1BQU0sT0FBTyxVQUFVLFlBQVksTUFBTTtBQUFBLElBRXpDLE1BQU0sT0FBTyxRQUFRLFlBQVksSUFBSSxLQUNyQyxNQUFNLE9BQU8sVUFBVSxZQUFZLE1BQU0sS0FDekMsTUFBTSxPQUFPLFdBQVEsWUFBWSxPQUFJO0FBQUEsSUFFcEMsMkJBQVk7QUFBRSxhQUFPO0FBQUEsSUFBTSxFQUFHLEtBQUssU0FBUyxhQUFhLEVBQUU7QUFBQTtBQUFBOzs7QUNmOUQ7QUFBQSx1RkFBQUMsU0FBQTtBQUFBO0FBQ0EsSUFBQUEsUUFBTyxVQUFVLFNBQVUsTUFBTTtBQUMvQixVQUFJO0FBQ0YsZUFBTyxDQUFDLENBQUMsS0FBSztBQUFBLE1BQ2hCLFNBQVMsT0FBTztBQUNkLGVBQU87QUFBQSxNQUNUO0FBQUEsSUFDRjtBQUFBO0FBQUE7OztBQ1BBO0FBQUEsNkZBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksUUFBUTtBQUdaLElBQUFBLFFBQU8sVUFBVSxDQUFDLE1BQU0sV0FBWTtBQUVsQyxhQUFPLE9BQU8sZUFBZSxDQUFDLEdBQUcsR0FBRyxFQUFFLEtBQUssV0FBWTtBQUFFLGVBQU87QUFBQSxNQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTTtBQUFBLElBQ2pGLENBQUM7QUFBQTtBQUFBOzs7QUNQRDtBQUFBLHNHQUFB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SUFBSTRULFFBQVE7RUFDckM7QUFHQSxNQUFJcFUsS0FBS3lyQiwrQkFBK0IsVUFBVTtBQUVqRGp6QixPQUFHcXlCLEtBQUssVUFBVSxFQUFFcnFCLElBQUksTUFBTTtBQUc3QixVQUFJM0gsU0FBU0MsY0FBYyx1QkFBdUIsR0FBRztBQUNwRDtNQUNEO0FBQ0FvUyxnQkFBVTtBQUNWRSxnQkFBVSxDQUFBO0FBQ1ZzZSxvQkFBYztBQUNkbG1CLFNBQUdzb0IsVUFBVTtBQUNiRCxVQUFJO0lBQ0wsQ0FBQztFQUNGO0FBR0F0eUIsSUFBRXN5QixHQUFHO0FBQ04sR0FBRzsiLAogICJuYW1lcyI6IFsibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAibmF2aWdhdG9yIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiU3ltYm9sIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiZG9jdW1lbnQiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJUeXBlRXJyb3IiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiYWN0aXZlWERvY3VtZW50IiwgIm1vZHVsZSIsICIkIiwgImdsb2JhbFRoaXMiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiJCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICIkIiwgImNhdGNoZWNrSW5saW5lSWNvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgIm13QXBpIiwgInVzZXJBZ2VudCIsICJpbml0TXdBcGkiLCAiaG90Q2F0Q2hlY2siLCAibXciLCAiY29uZmlnIiwgImdldCIsICJ3aW5kb3ciLCAiSG90Q2F0QXV0b1JlbW92ZUNoZWNrQ2F0T3B0T3V0IiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiYXBpIiwgImNoZWNrQ2F0ZWdvcmllc1JlZ0V4cCIsICJzZWxmTmFtZSIsICJzdG9yYWdlSXRlbU5hbWUiLCAic3RvcmFnZUl0ZW0iLCAic3RvcmFnZSIsICJjcmVhdGVqSWNvbiIsICJpY29uQ2xhc3MiLCAiJCIsICJhdHRyIiwgImNvbmNhdCIsICJ0ZXh0IiwgImNyZWF0ZU5vdGlmeUFyZWEiLCAidGV4dE5vZGUiLCAiaWNvbiIsICJzdGF0ZSIsICJhZGRDbGFzcyIsICJhcHBlbmQiLCAiY3NzIiwgInBhZGRpbmciLCAib25lIiwgImUiLCAiX3NlbGYkd3BUZXh0Ym94MSR2YWx1IiwgInNlbGYiLCAibmV3VmFsIiwgIndwVGV4dGJveDEiLCAidmFsdWUiLCAicmVwbGFjZSIsICJkbGdCdXR0b25zIiwgIiRkaWFsb2dDaGVja1N0b3JhZ2UiLCAiJHBlcm1hU2F2ZUhpbnQiLCAiJHRleHRIaW50Tm9kZSIsICIkZGlhbG9nIiwgImRvUmVtb3ZlIiwgIndwU3VtbWFyeSIsICJ3cml0ZVN0b3JhZ2UiLCAidmFsIiwgInNldCIsICJfJGRpYWxvZ0NoZWNrU3RvcmFnZSQiLCAiY2hlY2tlZCIsICJkaWFsb2ciLCAiXyRkaWFsb2dDaGVja1N0b3JhZ2UkMiIsICJfYWRkVG9KUyIsICJfZSIsICJwcmV2ZW50RGVmYXVsdCIsICJoYXNDbGFzcyIsICIkZWwiLCAib2ZmIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgInRpdGxlIiwgInN1bW1hcnkiLCAiYXBwZW5kdGV4dCIsICJkYXRhIiwgImVkaXREb25lIiwgImVkaXRTdGF0IiwgImVycm9yIiwgIm5vdGlmeSIsICJjb2RlIiwgImluZm8iLCAidGFnIiwgInR5cGUiLCAiZmFkZU91dCIsICJwb3N0V2l0aFRva2VuIiwgInRoZW4iLCAicHJvbXB0IiwgImlkIiwgIm9uIiwgImZhZGVJbiIsICJhcHBlbmRUbyIsICJkaXNwbGF5IiwgInVzZXIiLCAiaXNBbm9uIiwgImhpZGUiLCAibW9kYWwiLCAiY2xvc2VPbkVzY2FwZSIsICJ3aWR0aCIsICJidXR0b25zIiwgImNsb3NlIiwgIiRib2R5IiwgImZpbmQiLCAidHJpZ2dlciIsICJvcGVuIiwgIiRidXR0b25zIiwgInBhcmVudCIsICJlcSIsICJidXR0b24iLCAiaWNvbnMiLCAicHJpbWFyeSIsICJIb3RDYXRBdXRvUmVtb3ZlQ2hlY2tDYXQiLCAiJG9rTGluayIsICJocmVmIiwgImRvRWRpdCIsICJyZXN1bHQiLCAibm9jcmVhdGUiLCAiYWpheCIsICJ1cmwiLCAiZGF0YVR5cGUiLCAic3VjY2VzcyIsICJjYWNoZSIsICJsb2FkSG90Q2F0Q2hlY2siLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImFyZ3MiLCAibWVzc2FnZSIsICJwbGFpbiIsICJob3RDYXRNZXNzYWdlcyIsICJ3Z1VzZXJMYW5ndWFnZSIsICJpbmNsdWRlcyIsICJtZXNzYWdlcyIsICJob3RDYXQiLCAiY29uZiIsICJ2YWx1ZXMiLCAiSG90Q2F0IiwgIm5vZGVOYW1lIiwgIndnQWN0aW9uIiwgImxpbmtzIiwgImNoYW5nZSIsICJyZW1vdmUiLCAiYWRkIiwgInJlc3RvcmUiLCAidW5kbyIsICJkb3duIiwgInVwIiwgImNoYW5nZVRhZyIsICJhZGRtdWx0aSIsICJkaXNhYmxlIiwgIm5zIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIm5zSWRzIiwgIndnTmFtZXNwYWNlSWRzIiwgIndnQXJ0aWNsZUlkIiwgInRlc3QiLCAid2dUaXRsZSIsICJjcmVhdG9yIiwgInRpbWVkdGV4dCIsICJpbnN0aXR1dGlvbiIsICJ1bmNhdF9yZWdleHAiLCAiZXhpc3RzWWVzIiwgIlBfeWVzX2RlZmF1bHQiLCAiZXhpc3RzTm8iLCAiUF9ub19kZWZhdWx0IiwgInRlbXBsYXRlX2NhdGVnb3JpZXMiLCAiY2FwaXRhbGl6ZVBhZ2VOYW1lcyIsICJ1cGxvYWRfZGlzYWJsZWQiLCAiYmxhY2tsaXN0IiwgImJnX2NoYW5nZWQiLCAibm9fYXV0b2NvbW1pdCIsICJkZWxfbmVlZHNfZGlmZiIsICJzdWdnZXN0X2RlbGF5IiwgImVkaXRib3hfd2lkdGgiLCAic3VnZ2VzdGlvbnMiLCAiZml4ZWRfc2VhcmNoIiwgInVzZV91cF9kb3duIiwgImxpc3RTaXplIiwgInNpbmdsZV9taW5vciIsICJkb250X2FkZF90b193YXRjaGxpc3QiLCAic2hvcnRjdXRzIiwgImFkZFNob3J0Y3V0cyIsICJtYXAiLCAiX3dpbmRvdyRIb3RDYXQiLCAiayIsICJPYmplY3QiLCAiaGFzT3duIiwgInYiLCAidHJpbSIsICJsZW5ndGgiLCAiSEMiLCAidWEiLCAibmF2aWdhdG9yIiwgInRvTG93ZXJDYXNlIiwgImlzX3dlYmtpdCIsICJjYXRfcHJlZml4IiwgIm5vU3VnZ2VzdGlvbnMiLCAid2lraVRleHRCbGFuayIsICJTdHJpbmciLCAicmF3IiwgIl90ZW1wbGF0ZU9iamVjdCIsICJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsIiwgIndpa2lUZXh0QmxhbmtSRSIsICJSZWdFeHAiLCAid2lraVRleHRCbGFua09yQmlkaSIsICJfdGVtcGxhdGVPYmplY3QyIiwgImZvcm1hdHRlZE5hbWVzcGFjZXMiLCAid2dGb3JtYXR0ZWROYW1lc3BhY2VzIiwgIm5hbWVzcGFjZUlkcyIsICJhdXRvTG9jYWxpemUiLCAibmFtZXNwYWNlTnVtYmVyIiwgImZhbGxiYWNrIiwgImNyZWF0ZVJlZ2V4cFN0ciIsICJuYW1lIiwgInJlZ2V4X25hbWUiLCAiaSIsICJpbml0aWFsIiwgImNoYXJBdCIsICJsbCIsICJ1bCIsICJ0b1VwcGVyQ2FzZSIsICJfdGVtcGxhdGVPYmplY3QzIiwgImNhbm9uaWNhbCIsICJyZWdleHAiLCAiY2F0X25hbWUiLCAiY2F0ZWdvcnlfY2Fub25pY2FsIiwgImNhdGVnb3J5X3JlZ2V4cCIsICJ0ZW1wbGF0ZV9yZWdleHAiLCAibWFrZSIsICJhcmciLCAibGl0ZXJhbCIsICJjcmVhdGVUZXh0Tm9kZSIsICJjcmVhdGVFbGVtZW50IiwgInBhcmFtIiwgInVyaSIsICJsb2NhdGlvbiIsICJyZSIsICJtIiwgImV4ZWMiLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgInNjcmlwdCIsICJ3Z1NjcmlwdCIsICJpbmRleE9mIiwgIndnU2VydmVyIiwgInNsaWNlIiwgInByb3RvY29sIiwgInByZWZpeCIsICJ3Z0FydGljbGVQYXRoIiwgImNsYXNzTmFtZSIsICJjYXBpdGFsaXplIiwgInN0ciIsICJ3aWtpUGFnZVBhdGgiLCAicGFnZU5hbWUiLCAiZW5jb2RlVVJJQ29tcG9uZW50IiwgImVzY2FwZVJFIiwgIl90ZW1wbGF0ZU9iamVjdDQiLCAic3Vic3RpdHV0ZUZhY3RvcnkiLCAib3B0aW9ucyIsICJsZWFkIiwgImluZGljYXRvciIsICJsYnJhY2UiLCAicmJyYWNlIiwgIm1hdGNoIiwgImlkeCIsICJhbHBoYSIsICJyZXBsYWNlbWVudCIsICJyZXBsYWNlU2hvcnRjdXRzIiwgInJlcGxhY2VIYXNoIiwgInMiLCAiZmluZENhdHNSRSIsICJyZXBsYWNlQnlCbGFua3MiLCAiZmluZF9jYXRlZ29yeSIsICJ3aWtpdGV4dCIsICJjYXRlZ29yeSIsICJvbmNlIiwgImNhdF9yZWdleCIsICJub3dpa2lSZWdleCIsICJfdGVtcGxhdGVPYmplY3Q1IiwgImNvcGllZHRleHQiLCAiY3Vycl9tYXRjaCIsICJpbnRlcmxhbmd1YWdlUkUiLCAiY2hhbmdlX2NhdGVnb3J5IiwgInRvUmVtb3ZlIiwgInRvQWRkIiwgImlzX2hpZGRlbiIsICJmaW5kX2luc2VydGlvbnBvaW50IiwgIl93aWtpdGV4dCIsICJfdGVtcGxhdGVPYmplY3Q2IiwgImluZGV4IiwgImxhc3RJbmRleCIsICJvbkNhdCIsICJuYW1lU3BhY2UiLCAia2V5Q2hhbmdlIiwgIm1hdGNoZXMiLCAiY2F0X3BvaW50IiwgImJlZm9yZSIsICJNYXRoIiwgIm1heCIsICJhZnRlciIsICJzZWFyY2giLCAiaiIsICJwb2ludCIsICJuZXdjYXRzdHJpbmciLCAic3VmZml4IiwgInR4dCIsICJldnRLZXlzIiwgImN0cmxLZXkiLCAibWV0YUtleSIsICJzaGlmdEtleSIsICJldnRLaWxsIiwgInN0b3BQcm9wYWdhdGlvbiIsICJjYW5jZWxCdWJibGUiLCAiY2F0TGluZSIsICJvblVwbG9hZCIsICJlZGl0b3JzIiwgImNvbW1pdEJ1dHRvbiIsICJjb21taXRGb3JtIiwgIm11bHRpU3BhbiIsICJwYWdlVGV4dCIsICJwYWdlVGltZSIsICJwYWdlV2F0Y2hlZCIsICJ3YXRjaENyZWF0ZSIsICJ3YXRjaEVkaXQiLCAibWlub3JFZGl0cyIsICJlZGl0VG9rZW4iLCAiaXNfcnRsIiwgInNlcnZlclRpbWUiLCAibGFzdFJldklkIiwgInBhZ2VUZXh0UmV2SWQiLCAiY29uZmxpY3RpbmdVc2VyIiwgIm5ld0RPTSIsICJVTkNIQU5HRUQiLCAiT1BFTiIsICJDSEFOR0VfUEVORElORyIsICJDSEFOR0VEIiwgIkRFTEVURUQiLCAic2V0UGFnZSIsICJzdGFydFRpbWUiLCAicXVlcnkiLCAicGFnZXMiLCAicGFnZSIsICJyZXZpc2lvbnMiLCAic2xvdHMiLCAibWFpbiIsICJjb250ZW50IiwgInRpbWVzdGFtcCIsICJyZXZpZCIsICJsYXN0cmV2aWQiLCAic3RhcnR0aW1lc3RhbXAiLCAid2F0Y2hlZCIsICJ0b2tlbnMiLCAiY3NyZnRva2VuIiwgImxhbmdsaW5rcyIsICJsYW5nIiwgIl90ZW1wbGF0ZU9iamVjdDciLCAiZ2VuZXJhbCIsICJ0aW1lIiwgImNhc2UiLCAidXNlcmluZm8iLCAid2F0Y2hjcmVhdGlvbnMiLCAid2F0Y2hkZWZhdWx0IiwgIm1pbm9yZGVmYXVsdCIsICJzYXZlSW5Qcm9ncmVzcyIsICJpbml0aWF0ZUVkaXQiLCAiZmFpbHVyZSIsICJvbGRCdXR0b25TdGF0ZSIsICJkaXNhYmxlZCIsICJmYWlsIiwgImFwcGx5IiwgImZvcm1hdHZlcnNpb24iLCAicmF3Y29udGludWUiLCAidGl0bGVzIiwgIndnUGFnZU5hbWUiLCAicHJvcCIsICJpbnByb3AiLCAicnZwcm9wIiwgInJ2c2xvdHMiLCAicnZsaW1pdCIsICJydmRpciIsICJydnN0YXJ0aWQiLCAid2dDdXJSZXZpc2lvbklkIiwgImxsbGltaXQiLCAibWV0YSIsICJ1aXByb3AiLCAiZG9uZSIsICJzdGF0dXMiLCAic3RhdHVzVGV4dCIsICJtdWx0aUNoYW5nZU1zZyIsICJjb3VudCIsICJjdXJyZW50VGltZXN0YW1wIiwgIm5vdyIsICJEYXRlIiwgInRzIiwgImdldFVUQ0Z1bGxZZWFyIiwgInR3byIsICJnZXRVVENNb250aCIsICJnZXRVVENEYXRlIiwgImdldFVUQ0hvdXJzIiwgImdldFVUQ01pbnV0ZXMiLCAiZ2V0VVRDU2Vjb25kcyIsICJwZXJmb3JtQ2hhbmdlcyIsICJzaW5nbGVFZGl0b3IiLCAic2VsZkVkaXRDb25mbGljdCIsICJ3Z1VzZXJOYW1lIiwgIm5vQ29tbWl0IiwgIndwRWRpdFRva2VuIiwgIndwRGlmZiIsICJ3cFNhdmUiLCAiY2hhbmdlZCIsICJhZGRlZCIsICJkZWxldGVkIiwgInRvRWRpdCIsICJlZGl0IiwgImNoYW5nZXMiLCAib3JpZ2luYWxDYXRlZ29yeSIsICJjdXJyZW50Q2F0ZWdvcnkiLCAiY3VycmVudEtleSIsICJjdXJyZW50SGlkZGVuIiwgImZyb20iLCAidG8iLCAid3BNaW5vcmVkaXQiLCAid3BXYXRjaHRoaXMiLCAid3BDaGFuZ2VUYWdzIiwgIndwQXV0b1N1bW1hcnkiLCAiam9pbiIsICJzaG9ydFN1bW1hcnkiLCAiYXJyb3ciLCAid3BTdGFydHRpbWUiLCAid3BFZGl0dGltZSIsICJvbGRpZCIsICJoY0NvbW1pdCIsICJjbGljayIsICJyZXNvbHZlT25lIiwgInRvUmVzb2x2ZSIsICJjYXRzIiwgImNhdGVnb3JpZXMiLCAiaXNfZGFiIiwgImlzX3JlZGlyIiwgInJlZGlyZWN0IiwgImNhdGVnb3J5aW5mbyIsICJoaWRkZW4iLCAiaXNfbWlzc2luZyIsICJtaXNzaW5nIiwgImRhYklucHV0Q2xlYW5lZCIsICJpbnB1dEV4aXN0cyIsICJzcmMiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgIm4iLCAiY2F0XyIsICJjYXQiLCAiZXJyIiwgImYiLCAiZGFiIiwgInJlc29sdmVSZWRpcmVjdHMiLCAicCIsICJyZXNvbHZlTXVsdGkiLCAiY2FsbGJhY2siLCAiZGFiSW5wdXQiLCAibGFzdElucHV0IiwgInBsbmFtZXNwYWNlIiwgInBsbGltaXQiLCAiY2xsaW1pdCIsICJqc29uIiwgInJlcSIsICJtYWtlQWN0aXZlIiwgIndoaWNoIiwgImlzX2FjdGl2ZSIsICJfaSIsICJfZWRpdG9ycyIsICJlZGl0b3IiLCAiaW5hY3RpdmF0ZSIsICJzaG93RGFiIiwgImV4cGVjdGVkSW5wdXQiLCAibGFzdFJlYWxJbnB1dCIsICJhY3R1YWxWYWx1ZSIsICJzaG93c0xpc3QiLCAic3BsaXQiLCAibGFzdFNlbGVjdGlvbiIsICJzdGFydCIsICJlbmQiLCAiZGlzcGxheUxpc3QiLCAic2V0VGltZW91dCIsICJzZXRTZWxlY3Rpb24iLCAic2hvd1N1Z2dlc3Rpb25zIiwgIm11bHRpU3VibWl0IiwgIl9pMiIsICJfZWRpdG9yczIiLCAibXNnIiwgInJlc29sdmVkIiwgImZpcnN0RGFiIiwgImRvbnRDaGFuZ2UiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAiZWxlbWVudCIsICJhY2NlcHRDaGVjayIsICJjb21taXQiLCAic2V0TXVsdGlJbnB1dCIsICJhZGRFdmVudExpc3RlbmVyIiwgInJlcGxhY2VXaXRoIiwgImNoZWNrTXVsdGlJbnB1dCIsICJoYXNDaGFuZ2VzIiwgIl9pMyIsICJfZWRpdG9yczMiLCAic3VnZ2VzdGlvbkVuZ2luZXMiLCAib3BlbnNlYXJjaCIsICJoYW5kbGVyIiwgInF1ZXJ5UmVzdWx0IiwgInF1ZXJ5S2V5IiwgImV4aXN0cyIsICJzcGxpY2UiLCAibm9ybWFsaXplZCIsICJpbnRlcm5hbHNlYXJjaCIsICJhbGxwYWdlcyIsICJfdGl0bGUiLCAic3ViY2F0ZWdvcmllcyIsICJjYXRlZ29yeW1lbWJlcnMiLCAicGFyZW50Y2F0ZWdvcmllcyIsICJzdWdnZXN0aW9uQ29uZmlncyIsICJzZWFyY2hpbmRleCIsICJlbmdpbmVzIiwgInNob3ciLCAidGVtcCIsICJub0NvbXBsZXRpb24iLCAicGFnZWxpc3QiLCAiY29tYmluZWQiLCAic3ViY2F0IiwgInBhcmVudGNhdCIsICJCUyIsICJUQUIiLCAiUkVUIiwgIkVTQyIsICJTUEFDRSIsICJQR1VQIiwgIlBHRE9XTiIsICJVUCIsICJET1dOIiwgIkRFTCIsICJJTUUiLCAiQ2F0ZWdvcnlFZGl0b3IiLCAiY29uc3RydWN0b3IiLCAiaW5pdGlhbGl6ZSIsICJpc0NvbXBvc2l0aW9uU3RhcnQiLCAibGluZSIsICJzcGFuIiwgImRpciIsICJpc0FkZENhdGVnb3J5IiwgImNhdExpbmsiLCAiZmlyc3RDaGlsZCIsICJvcmlnaW5hbEtleSIsICJvcmlnaW5hbEV4aXN0cyIsICJtYWtlTGlua1NwYW4iLCAidXBEb3duTGlua3MiLCAic3R5bGUiLCAibGlua1NwYW4iLCAicGFyZW50Tm9kZSIsICJpbnNlcnRCZWZvcmUiLCAibmV4dFNpYmxpbmciLCAibGluayIsICJiaW5kIiwgIm5vcm1hbExpbmtzIiwgInVuZGVsTGluayIsICJvcmlnaW5hbEhpZGRlbiIsICJlbmdpbmUiLCAiY3VycmVudEV4aXN0cyIsICJsYXN0U2F2ZWRTdGF0ZSIsICJsYXN0U2F2ZWRDYXRlZ29yeSIsICJsYXN0U2F2ZWRLZXkiLCAibGFzdFNhdmVkRXhpc3RzIiwgImxhc3RTYXZlZEhpZGRlbiIsICJpbnZva2VTdWdnZXN0aW9ucyIsICJkb250X2F1dG9jb21wbGV0ZSIsICJ0ZXh0Y2hhbmdlIiwgIm1ha2VGb3JtIiwgImZvcm0iLCAibWV0aG9kIiwgImFjY2VwdCIsICJzaXplIiwgImV2ZW50IiwgImltZSIsICJsYXN0S2V5IiwgInVzZXNDb21wb3NpdGlvbiIsICJrZXlDb3VudCIsICJwcm9jZXNzS2V5IiwgInJlc2V0S2V5U2VsZWN0aW9uIiwgImNhbmNlbCIsICJzYXZlVmlldyIsICJsaXN0IiwgImhpZ2hsaWdodFN1Z2dlc3Rpb24iLCAiZm9jdXMiLCAiZW5naW5lU2VsZWN0b3IiLCAib3B0IiwgInNlbGVjdGVkIiwgInNlbGVjdGVkSW5kZXgiLCAiYnV0dG9uX2xhYmVsIiwgIl9pZCIsICJkZWZhdWx0VGV4dCIsICJsYWJlbCIsICJPSyIsICJvayIsICJjYW5jZWxCdXR0b24iLCAicG9zaXRpb24iLCAid2hpdGVTcGFjZSIsICJfaTQiLCAiX2VkaXRvcnM0IiwgIm9yaWdpbmFsU3RhdGUiLCAicmVhZE9ubHkiLCAicmVtb3ZlRWRpdG9yIiwgImJhY2tncm91bmRDb2xvciIsICJuZXh0IiwgInJvbGxiYWNrIiwgInVuZG9MaW5rIiwgImRvbnRDaGVjayIsICJzYW5pdGl6ZUlucHV0IiwgIm9yaWdpbmFsIiwgIl9pNSIsICJfZWRpdG9yczUiLCAiY3NzVGV4dCIsICJ0ZXh0RGVjb3JhdGlvbiIsICJzZWxlY3RFbmdpbmUiLCAiZW5naW5lTmFtZSIsICJtYWtlQ2FsbCIsICJjYWxsYmFja09iaiIsICJjbGVhbktleSIsICJjYiIsICJ6IiwgImNhbGxzTWFkZSIsICJub2ZDYWxscyIsICJhbGxUaXRsZXMiLCAiZG9udENhY2hlIiwgImNhbmNlbGxlZCIsICJnZXRKU09OIiwgImdlbmVyYXRlQXJyYXkiLCAiZm9yY2UiLCAicGlwZSIsICJtYWtlQ2FsbHMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiZW5naW5lXyIsICJ3Z1NjcmlwdFBhdGgiLCAiZG9udEF1dG9jb21wbGV0ZSIsICJsYXN0UXVlcnkiLCAidk5vcm1hbGl6ZWQiLCAia25vd25Ub0V4aXN0IiwgInZMb3ciLCAic29ydCIsICJhIiwgImIiLCAicHJlZml4TWF0Y2hBIiwgInByZWZpeE1hdGNoQiIsICJhTG93IiwgImJMb3ciLCAiZmlyc3RUaXRsZSIsICJjb21wbGV0ZWQiLCAiYXV0b0NvbXBsZXRlIiwgImV4aXN0aW5nIiwgIm5vZkl0ZW1zIiwgIm1pbiIsICJhbGlnbiIsICJ6SW5kZXgiLCAiYW5jaG9yIiwgImxpc3RoIiwgInRvcCIsICJvZmZzZXRUb3AiLCAib2Zmc2V0SGVpZ2h0IiwgIm1heExpc3RIZWlnaHQiLCAidmlld3BvcnQiLCAid2hhdCIsICJkb2N1bWVudEVsZW1lbnQiLCAic2Nyb2xsX29mZnNldCIsICJub2RlIiwgImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsICJib3giLCAieCIsICJyb3VuZCIsICJsZWZ0IiwgInkiLCAidCIsICJsIiwgIm9mZnNldExlZnQiLCAib2Zmc2V0UGFyZW50IiwgInRleHRQb3MiLCAibmwiLCAibnQiLCAib2Zmc2V0IiwgInRleHRCb3hXaWR0aCIsICJvZmZzZXRXaWR0aCIsICJjbGllbnRXaWR0aCIsICJzY3JvbGwiLCAidmlld193IiwgInciLCAibF9wb3MiLCAicmlnaHQiLCAicmVsYXRpdmVfb2Zmc2V0IiwgImFjdFZhbCIsICJub3JtYWxpemVkQWN0VmFsIiwgImRvbnRNb2RpZnkiLCAiY2FuU2VsZWN0IiwgInNldFNlbGVjdGlvblJhbmdlIiwgInNlbGVjdGlvblN0YXJ0IiwgInNlbGVjdGlvbkVuZCIsICJnZXRTZWxlY3Rpb24iLCAiY3VyciIsICJ0Z3QiLCAiaG90Y2F0X2RvbnRfYWRkX3RvX3dhdGNobGlzdCIsICJIb3RDYXREb250QWRkVG9XYXRjaGxpc3QiLCAiaG90Y2F0X25vX2F1dG9jb21taXQiLCAiSG90Q2F0Tm9BdXRvQ29tbWl0IiwgImhvdGNhdF9kZWxfbmVlZHNfZGlmZiIsICJIb3RDYXREZWxOZWVkc0RpZmYiLCAiaG90Y2F0X3N1Z2dlc3Rpb25fZGVsYXkiLCAiSG90Q2F0U3VnZ2VzdGlvbkRlbGF5IiwgImhvdGNhdF9lZGl0Ym94X3dpZHRoIiwgIkhvdENhdEVkaXRCb3hXaWR0aCIsICJob3RjYXRfc3VnZ2VzdGlvbnMiLCAiSG90Q2F0U3VnZ2VzdGlvbnMiLCAiaG90Y2F0X3N1Z2dlc3Rpb25zX2ZpeGVkIiwgIkhvdENhdEZpeGVkU3VnZ2VzdGlvbnMiLCAiaG90Y2F0X3NpbmdsZV9jaGFuZ2VzX2FyZV9taW5vciIsICJIb3RDYXRNaW5vclNpbmdsZUNoYW5nZXMiLCAiaG90Y2F0X2NoYW5nZWRfYmFja2dyb3VuZCIsICJIb3RDYXRDaGFuZ2VkQmFja2dyb3VuZCIsICJob3RjYXRfdXNlX2NhdGVnb3J5X2xpbmtzIiwgIkhvdENhdFVzZUNhdGVnb3J5TGlua3MiLCAiaG90Y2F0X2xpc3Rfc2l6ZSIsICJIb3RDYXRMaXN0U2l6ZSIsICJIb3RDYXRDaGFuZ2VUYWciLCAiZUZvcm0iLCAiZWRpdGZvcm0iLCAiY2F0UmVnRXhwIiwgIm9sZFR4dCIsICJpc01pbm9yQ2hhbmdlIiwgIm5ld1R4dCIsICJvbGRMaW5lcyIsICJuZXdMaW5lcyIsICJjQXJyIiwgImV4Y2VwdCIsICJhQXJyIiwgImJBcnIiLCAibEFyciIsICJzQXJyIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgIml0ZW0iLCAiaW5kIiwgImZpbHRlciIsICJjIiwgInN1bSIsICJzdW1BIiwgIiRjdCIsICJyZW1vdmVDaGFuZ2VUYWciLCAiTnVtYmVyIiwgInBhcnNlSW50IiwgImlzTmFOIiwgIl9pNiIsICJfT2JqZWN0JGVudHJpZXMiLCAiZW50cmllcyIsICJzdWdnZXN0aW9uQ29uZmlnIiwgImRlZmF1bHRWaWV3IiwgImdldENvbXB1dGVkU3R5bGUiLCAiZ2V0UHJvcGVydHlWYWx1ZSIsICJkaXJlY3Rpb24iLCAiY2FuX2VkaXQiLCAiY2xvc2VGb3JtIiwgIl9pNyIsICJfZWRpdG9yczYiLCAic2V0dXBfdXBsb2FkIiwgImlwIiwgInJldXBsb2FkIiwgImRlc3RGaWxlIiwgImxhYmVsQ2VsbCIsICJsaW5lQ2VsbCIsICJ0ZXh0QWxpZ24iLCAibWFyZ2luIiwgImJvcmRlciIsICJ2ZXJ0aWNhbEFsaWduIiwgIm5ld1JvdyIsICJpbnNlcnRSb3ciLCAib2xkU3VibWl0IiwgImRvX3N1Ym1pdCIsICJldmFsIiwgIkZ1bmN0aW9uIiwgImViIiwgImFkZGVkT25lIiwgIl9pOCIsICJfZWRpdG9yczciLCAibmV3X2NhdCIsICJfdGVtcGxhdGVPYmplY3Q4IiwgIl9jbGVhbmVkVGV4dCIsICJyZWdleCIsICJvbnN1Ym1pdCIsICJjbGVhbmVkVGV4dCIsICJpc09uUGFnZSIsICJub2RlVHlwZSIsICJOb2RlIiwgIkVMRU1FTlRfTk9ERSIsICJjYXRUaXRsZSIsICJnZXRBdHRyaWJ1dGUiLCAiX3RlbXBsYXRlT2JqZWN0OSIsICJpbml0aWFsaXplZCIsICJzZXR1cFRpbWVvdXQiLCAiZmluZEJ5Q2xhc3MiLCAic2NvcGUiLCAic2V0dXAiLCAiYWRkaXRpb25hbFdvcmsiLCAiY2xlYXJUaW1lb3V0IiwgImhpZGRlbkNhdHMiLCAiZm9vdGVyIiwgImNvbnRhaW5lciIsICJjcmVhdGVFZGl0b3JzIiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAiY29weUNhdHMiLCAiQXJyYXkiLCAiYXQiLCAibGFzdFNwYW4iLCAiZW5hYmxlTXVsdGkiLCAiaW5uZXJIVE1MIiwgImN1cnNvciIsICJob29rIiwgImZpcmUiLCAiY3JlYXRlQ29tbWl0Rm9ybSIsICJmb3JtQ29udGFpbmVyIiwgIndnUGFnZUNvbnRlbnRNb2RlbCIsICJnZXRQYWdlIiwgInNldFN0YXRlIiwgIm5ld1NwYW5zIiwgImdldFN0YXRlIiwgIl9pOSIsICJfZWRpdG9yczgiLCAicmVhbGx5X3J1biIsICJ3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSIsICJVcGxvYWRGb3JtIiwgInByZXZpb3VzX2hvdGNhdF9zdGF0ZSIsICJ3Z0lzQXJ0aWNsZSIsICJydW4iLCAic3RhcnRlZCIsICJob3RjYXRfZ2V0X3N0YXRlIiwgImhvdGNhdF9zZXRfc3RhdGUiLCAiaG90Y2F0X2Nsb3NlX2Zvcm0iLCAicnVuV2hlblJlYWR5Il0KfQo=
