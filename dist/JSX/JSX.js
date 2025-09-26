/**
 * SPDX-License-Identifier: BSD-3-Clause
 * _addText: '{{Gadget Header|license=BSD|attribution=proteriax}}'
 *
 * @base {@link https://github.com/alex-kinokon/jsx-dom}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/JSX}
 * @license BSD-3-Clause {@link https://github.com/alex-kinokon/jsx-dom/blob/master/LICENSE}
 */

/**
 * BSD 3-Clause License
 *
 * Copyright (c) proteriax
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
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

// node_modules/.pnpm/proxy-polyfill@0.3.2/node_modules/proxy-polyfill/proxy.min.js
var require_proxy_min = __commonJS({
  "node_modules/.pnpm/proxy-polyfill@0.3.2/node_modules/proxy-polyfill/proxy.min.js"() {
    (function() {
      function n() {
        function v() {
          return null;
        }
        function l(a) {
          return a ? "object" === typeof a || "function" === typeof a : false;
        }
        function p(a) {
          if (null !== a && !l(a)) throw new TypeError("Object prototype may only be an Object or null: " + a);
        }
        var q = null, e = Object, w = !!e.create || !({ __proto__: null } instanceof e), A = e.create || (w ? function(a) {
          p(a);
          return { __proto__: a };
        } : function(a) {
          function c() {
          }
          p(a);
          if (null === a) throw new SyntaxError("Native Object.create is required to create objects with null prototype");
          c.prototype = a;
          return new c();
        }), B = e.getPrototypeOf || ([].__proto__ === Array.prototype ? function(a) {
          a = a.__proto__;
          return l(a) ? a : null;
        } : v);
        var m = function(a, c) {
          function k() {
          }
          if (void 0 === (this && this instanceof m ? this.constructor : void 0)) throw new TypeError("Constructor Proxy requires 'new'");
          if (!l(a) || !l(c)) throw new TypeError("Cannot create proxy with a non-object as target or handler");
          q = function() {
            a = null;
            k = function(b) {
              throw new TypeError("Cannot perform '" + b + "' on a proxy that has been revoked");
            };
          };
          setTimeout(function() {
            q = null;
          }, 0);
          var g = c;
          c = { get: null, set: null, apply: null, construct: null };
          for (var h in g) {
            if (!(h in c)) throw new TypeError("Proxy polyfill does not support trap '" + h + "'");
            c[h] = g[h];
          }
          "function" === typeof g && (c.apply = g.apply.bind(g));
          g = B(a);
          var r = false, t = false;
          if ("function" === typeof a) {
            var f = function() {
              var b = this && this.constructor === f, d = Array.prototype.slice.call(arguments);
              k(b ? "construct" : "apply");
              return b && c.construct ? c.construct.call(this, a, d) : !b && c.apply ? c.apply(a, this, d) : b ? (d.unshift(a), new (a.bind.apply(a, d))()) : a.apply(
                this,
                d
              );
            };
            r = true;
          } else a instanceof Array ? (f = [], t = true) : f = w || null !== g ? A(g) : {};
          var x = c.get ? function(b) {
            k("get");
            return c.get(this, b, f);
          } : function(b) {
            k("get");
            return this[b];
          }, C = c.set ? function(b, d) {
            k("set");
            c.set(this, b, d, f);
          } : function(b, d) {
            k("set");
            this[b] = d;
          }, y = {};
          e.getOwnPropertyNames(a).forEach(function(b) {
            if (!((r || t) && b in f)) {
              var d = e.getOwnPropertyDescriptor(a, b);
              e.defineProperty(f, b, { enumerable: !!d.enumerable, get: x.bind(a, b), set: C.bind(a, b) });
              y[b] = true;
            }
          });
          h = true;
          if (r || t) {
            var D = e.setPrototypeOf || ([].__proto__ === Array.prototype ? function(b, d) {
              p(d);
              b.__proto__ = d;
              return b;
            } : v);
            g && D(f, g) || (h = false);
          }
          if (c.get || !h) for (var u in a) y[u] || e.defineProperty(f, u, { get: x.bind(a, u) });
          e.seal(a);
          e.seal(f);
          return f;
        };
        m.revocable = function(a, c) {
          return { proxy: new m(a, c), revoke: q };
        };
        return m;
      }
      ;
      var z = "undefined" !== typeof process && "[object process]" === {}.toString.call(process) || "undefined" !== typeof navigator && "ReactNative" === navigator.product ? global : self;
      z.Proxy || (z.Proxy = n(), z.Proxy.revocable = z.Proxy.revocable);
    })();
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/global-this.js
var require_global_this = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/global-this.js"(exports2, module2) {
    "use strict";
    var check = function(it) {
      return it && it.Math === Math && it;
    };
    module2.exports = // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == "object" && self) || check(typeof global == "object" && global) || check(typeof exports2 == "object" && exports2) || // eslint-disable-next-line no-new-func -- fallback
    /* @__PURE__ */ (function() {
      return this;
    })() || Function("return this")();
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/fails.js
var require_fails = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/fails.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/descriptors.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/function-bind-native.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/function-call.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-property-is-enumerable.js"(exports2) {
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

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/create-property-descriptor.js
var require_create_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/create-property-descriptor.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/function-uncurry-this.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/classof-raw.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/indexed-object.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/is-null-or-undefined.js"(exports2, module2) {
    "use strict";
    module2.exports = function(it) {
      return it === null || it === void 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/require-object-coercible.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/to-indexed-object.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/is-callable.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/is-object.js"(exports2, module2) {
    "use strict";
    var isCallable = require_is_callable();
    module2.exports = function(it) {
      return typeof it == "object" ? it !== null : isCallable(it);
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/get-built-in.js
var require_get_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/get-built-in.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-is-prototype-of.js"(exports2, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    module2.exports = uncurryThis({}.isPrototypeOf);
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/environment-user-agent.js
var require_environment_user_agent = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/environment-user-agent.js"(exports2, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var navigator2 = globalThis2.navigator;
    var userAgent = navigator2 && navigator2.userAgent;
    module2.exports = userAgent ? String(userAgent) : "";
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/environment-v8-version.js
var require_environment_v8_version = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/environment-v8-version.js"(exports2, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var userAgent = require_environment_user_agent();
    var process2 = globalThis2.process;
    var Deno = globalThis2.Deno;
    var versions = process2 && process2.versions || Deno && Deno.version;
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/symbol-constructor-detection.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/use-symbol-as-uid.js"(exports2, module2) {
    "use strict";
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/is-symbol.js
var require_is_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/is-symbol.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/try-to-string.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/a-callable.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/get-method.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/ordinary-to-primitive.js"(exports2, module2) {
    "use strict";
    var call = require_function_call();
    var isCallable = require_is_callable();
    var isObject2 = require_is_object();
    var $TypeError = TypeError;
    module2.exports = function(input, pref) {
      var fn, val;
      if (pref === "string" && isCallable(fn = input.toString) && !isObject2(val = call(fn, input))) return val;
      if (isCallable(fn = input.valueOf) && !isObject2(val = call(fn, input))) return val;
      if (pref !== "string" && isCallable(fn = input.toString) && !isObject2(val = call(fn, input))) return val;
      throw new $TypeError("Can't convert object to primitive value");
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/is-pure.js
var require_is_pure = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/is-pure.js"(exports2, module2) {
    "use strict";
    module2.exports = false;
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/define-global-property.js
var require_define_global_property = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/define-global-property.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/shared-store.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/shared.js"(exports2, module2) {
    "use strict";
    var store = require_shared_store();
    module2.exports = function(key, value) {
      return store[key] || (store[key] = value || {});
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/to-object.js
var require_to_object = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/to-object.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/has-own-property.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/uid.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/well-known-symbol.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/to-primitive.js"(exports2, module2) {
    "use strict";
    var call = require_function_call();
    var isObject2 = require_is_object();
    var isSymbol = require_is_symbol();
    var getMethod = require_get_method();
    var ordinaryToPrimitive = require_ordinary_to_primitive();
    var wellKnownSymbol = require_well_known_symbol();
    var $TypeError = TypeError;
    var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
    module2.exports = function(input, pref) {
      if (!isObject2(input) || isSymbol(input)) return input;
      var exoticToPrim = getMethod(input, TO_PRIMITIVE);
      var result;
      if (exoticToPrim) {
        if (pref === void 0) pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject2(result) || isSymbol(result)) return result;
        throw new $TypeError("Can't convert object to primitive value");
      }
      if (pref === void 0) pref = "number";
      return ordinaryToPrimitive(input, pref);
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/to-property-key.js
var require_to_property_key = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/to-property-key.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/document-create-element.js"(exports2, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var isObject2 = require_is_object();
    var document2 = globalThis2.document;
    var EXISTS = isObject2(document2) && isObject2(document2.createElement);
    module2.exports = function(it) {
      return EXISTS ? document2.createElement(it) : {};
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/ie8-dom-define.js"(exports2, module2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var fails = require_fails();
    var createElement2 = require_document_create_element();
    module2.exports = !DESCRIPTORS && !fails(function() {
      return Object.defineProperty(createElement2("div"), "a", {
        get: function() {
          return 7;
        }
      }).a !== 7;
    });
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-get-own-property-descriptor.js
var require_object_get_own_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports2) {
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

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/v8-prototype-define-bug.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/an-object.js"(exports2, module2) {
    "use strict";
    var isObject2 = require_is_object();
    var $String = String;
    var $TypeError = TypeError;
    module2.exports = function(argument) {
      if (isObject2(argument)) return argument;
      throw new $TypeError($String(argument) + " is not an object");
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-define-property.js
var require_object_define_property = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-define-property.js"(exports2) {
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

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/create-non-enumerable-property.js
var require_create_non_enumerable_property = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/create-non-enumerable-property.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/function-name.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/inspect-source.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/weak-map-basic-detection.js"(exports2, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var isCallable = require_is_callable();
    var WeakMap = globalThis2.WeakMap;
    module2.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/shared-key.js
var require_shared_key = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/shared-key.js"(exports2, module2) {
    "use strict";
    var shared = require_shared();
    var uid = require_uid();
    var keys2 = shared("keys");
    module2.exports = function(key) {
      return keys2[key] || (keys2[key] = uid(key));
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/hidden-keys.js
var require_hidden_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/hidden-keys.js"(exports2, module2) {
    "use strict";
    module2.exports = {};
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/internal-state.js
var require_internal_state = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/internal-state.js"(exports2, module2) {
    "use strict";
    var NATIVE_WEAK_MAP = require_weak_map_basic_detection();
    var globalThis2 = require_global_this();
    var isObject2 = require_is_object();
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
        if (!isObject2(it) || (state = get(it)).type !== TYPE) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/make-built-in.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/define-built-in.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/math-trunc.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/to-integer-or-infinity.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/to-absolute-index.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/to-length.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/length-of-array-like.js"(exports2, module2) {
    "use strict";
    var toLength = require_to_length();
    module2.exports = function(obj) {
      return toLength(obj.length);
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/array-includes.js
var require_array_includes = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/array-includes.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-keys-internal.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/enum-bug-keys.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-get-own-property-names.js"(exports2) {
    "use strict";
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = enumBugKeys.concat("length", "prototype");
    exports2.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return internalObjectKeys(O, hiddenKeys);
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-get-own-property-symbols.js
var require_object_get_own_property_symbols = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-get-own-property-symbols.js"(exports2) {
    "use strict";
    exports2.f = Object.getOwnPropertySymbols;
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/own-keys.js
var require_own_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/own-keys.js"(exports2, module2) {
    "use strict";
    var getBuiltIn = require_get_built_in();
    var uncurryThis = require_function_uncurry_this();
    var getOwnPropertyNamesModule = require_object_get_own_property_names();
    var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
    var anObject = require_an_object();
    var concat = uncurryThis([].concat);
    module2.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
      var keys2 = getOwnPropertyNamesModule.f(anObject(it));
      var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
      return getOwnPropertySymbols ? concat(keys2, getOwnPropertySymbols(it)) : keys2;
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/copy-constructor-properties.js
var require_copy_constructor_properties = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/copy-constructor-properties.js"(exports2, module2) {
    "use strict";
    var hasOwn = require_has_own_property();
    var ownKeys = require_own_keys();
    var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
    var definePropertyModule = require_object_define_property();
    module2.exports = function(target, source, exceptions) {
      var keys2 = ownKeys(source);
      var defineProperty = definePropertyModule.f;
      var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
      for (var i = 0; i < keys2.length; i++) {
        var key = keys2[i];
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
          defineProperty(target, key, getOwnPropertyDescriptor(source, key));
        }
      }
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/is-forced.js
var require_is_forced = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/is-forced.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/export.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/an-instance.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/correct-prototype-getter.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-get-prototype-of.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/define-built-in-accessor.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/create-property.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-keys.js"(exports2, module2) {
    "use strict";
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    module2.exports = Object.keys || function keys2(O) {
      return internalObjectKeys(O, enumBugKeys);
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-define-properties.js
var require_object_define_properties = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-define-properties.js"(exports2) {
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
      var keys2 = objectKeys(Properties);
      var length = keys2.length;
      var index = 0;
      var key;
      while (length > index) definePropertyModule.f(O, key = keys2[index++], props[key]);
      return O;
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/html.js
var require_html = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/html.js"(exports2, module2) {
    "use strict";
    var getBuiltIn = require_get_built_in();
    module2.exports = getBuiltIn("document", "documentElement");
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-create.js
var require_object_create = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/object-create.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/iterators-core.js"(exports2, module2) {
    "use strict";
    var fails = require_fails();
    var isCallable = require_is_callable();
    var isObject2 = require_is_object();
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
    var NEW_ITERATOR_PROTOTYPE = !isObject2(IteratorPrototype) || fails(function() {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/get-iterator-direct.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/define-built-ins.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/create-iter-result-object.js"(exports2, module2) {
    "use strict";
    module2.exports = function(value, done) {
      return { value, done };
    };
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/iterator-close.js
var require_iterator_close = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/iterator-close.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/iterator-close-all.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/iterator-create-proxy.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/call-with-safe-iteration-closing.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/iterator-helper-throws-on-invalid-iterator.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/iterator-helper-without-closing-on-early-error.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/function-uncurry-this-clause.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/function-bind-context.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/iterators.js"(exports2, module2) {
    "use strict";
    module2.exports = {};
  }
});

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/is-array-iterator-method.js
var require_is_array_iterator_method = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/is-array-iterator-method.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/to-string-tag-support.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/classof.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/get-iterator-method.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/get-iterator.js"(exports2, module2) {
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
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/iterate.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/modules/es.iterator.for-each.js
var require_es_iterator_for_each = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/modules/es.iterator.for-each.js"() {
    "use strict";
    var $ = require_export();
    var call = require_function_call();
    var iterate = require_iterate();
    var aCallable = require_a_callable();
    var anObject = require_an_object();
    var getIteratorDirect = require_get_iterator_direct();
    var iteratorClose = require_iterator_close();
    var iteratorHelperWithoutClosingOnEarlyError = require_iterator_helper_without_closing_on_early_error();
    var forEachWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError("forEach", TypeError);
    $({ target: "Iterator", proto: true, real: true, forced: forEachWithoutClosingOnEarlyError }, {
      forEach: function forEach2(fn) {
        anObject(this);
        try {
          aCallable(fn);
        } catch (error) {
          iteratorClose(this, "throw", error);
        }
        if (forEachWithoutClosingOnEarlyError) return call(forEachWithoutClosingOnEarlyError, this, fn);
        var record = getIteratorDirect(this);
        var counter = 0;
        iterate(record, function(value) {
          fn(value, counter++);
        }, { IS_RECORD: true });
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

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/function-apply.js
var require_function_apply = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/internals/function-apply.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/modules/es.iterator.reduce.js
var require_es_iterator_reduce = __commonJS({
  "node_modules/.pnpm/core-js@3.45.1/node_modules/core-js/modules/es.iterator.reduce.js"() {
    "use strict";
    var $ = require_export();
    var iterate = require_iterate();
    var aCallable = require_a_callable();
    var anObject = require_an_object();
    var getIteratorDirect = require_get_iterator_direct();
    var iteratorClose = require_iterator_close();
    var iteratorHelperWithoutClosingOnEarlyError = require_iterator_helper_without_closing_on_early_error();
    var apply = require_function_apply();
    var fails = require_fails();
    var $TypeError = TypeError;
    var FAILS_ON_INITIAL_UNDEFINED = fails(function() {
      [].keys().reduce(function() {
      }, void 0);
    });
    var reduceWithoutClosingOnEarlyError = !FAILS_ON_INITIAL_UNDEFINED && iteratorHelperWithoutClosingOnEarlyError("reduce", $TypeError);
    $({ target: "Iterator", proto: true, real: true, forced: FAILS_ON_INITIAL_UNDEFINED || reduceWithoutClosingOnEarlyError }, {
      reduce: function reduce(reducer) {
        anObject(this);
        try {
          aCallable(reducer);
        } catch (error) {
          iteratorClose(this, "throw", error);
        }
        var noInitial = arguments.length < 2;
        var accumulator = noInitial ? void 0 : arguments[1];
        if (reduceWithoutClosingOnEarlyError) {
          return apply(reduceWithoutClosingOnEarlyError, this, noInitial ? [reducer] : [reducer, accumulator]);
        }
        var record = getIteratorDirect(this);
        var counter = 0;
        iterate(record, function(value) {
          if (noInitial) {
            noInitial = false;
            accumulator = value;
          } else {
            accumulator = reducer(accumulator, value, counter);
          }
          counter++;
        }, { IS_RECORD: true });
        if (noInitial) throw new $TypeError("Reduce of empty iterator with no initial value");
        return accumulator;
      }
    });
  }
});

// dist/JSX/JSX.js
require_proxy_min();
require_es_iterator_constructor();
require_es_iterator_filter();
require_es_iterator_for_each();
require_es_iterator_map();
require_es_iterator_reduce();
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
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames2 = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);
//! src/JSX/JSX.ts
var JSX_exports = {};
__export(JSX_exports, {
  Component: () => Component,
  Fragment: () => Fragment,
  PureComponent: () => Component,
  SVGNamespace: () => SVGNamespace,
  ShadowRoot: () => ShadowRoot,
  StrictMode: () => Fragment,
  className: () => className,
  createElement: () => createElement,
  createFactory: () => createFactory,
  createRef: () => createRef,
  forwardRef: () => forwardRef,
  h: () => createElement,
  isRef: () => isRef,
  jsx: () => jsx,
  jsxs: () => jsx,
  memo: () => identity,
  preventDefault: () => preventDefault,
  stopPropagation: () => stopPropagation,
  styled: () => styled,
  useCallback: () => identity,
  useClassList: () => useClassList,
  useImperativeHandle: () => useImperativeHandle,
  useMemo: () => useMemo,
  useRef: () => createRef,
  useText: () => useText
});
module.exports = __toCommonJS(JSX_exports);
var keys = Object.keys;
function identity(value) {
  return value;
}
function isBoolean(val) {
  return typeof val === "boolean";
}
function isElement(val) {
  return val && typeof val.nodeType === "number";
}
function isString(val) {
  return typeof val === "string";
}
function isNumber(val) {
  return typeof val === "number";
}
function isObject(val) {
  return typeof val === "object" ? val !== null : isFunction(val);
}
function isFunction(val) {
  return typeof val === "function";
}
function isComponentClass(Component2) {
  return !!(Component2 && Component2.isComponent);
}
function isArrayLike(obj) {
  return isObject(obj) && typeof obj.length === "number" && typeof obj.nodeType !== "number";
}
function forEach(value, fn) {
  if (!value) return;
  var _iterator2 = _createForOfIteratorHelper(keys(value)), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      const key = _step2.value;
      fn(value[key], key);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}
function createRef() {
  return Object.seal({
    current: null
  });
}
function isRef(maybeRef) {
  return isObject(maybeRef) && "current" in maybeRef;
}
var isUnitlessNumber = {
  animationIterationCount: 0,
  borderImageOutset: 0,
  borderImageSlice: 0,
  borderImageWidth: 0,
  boxFlex: 0,
  boxFlexGroup: 0,
  boxOrdinalGroup: 0,
  columnCount: 0,
  columns: 0,
  flex: 0,
  flexGrow: 0,
  flexPositive: 0,
  flexShrink: 0,
  flexNegative: 0,
  flexOrder: 0,
  gridArea: 0,
  gridRow: 0,
  gridRowEnd: 0,
  gridRowSpan: 0,
  gridRowStart: 0,
  gridColumn: 0,
  gridColumnEnd: 0,
  gridColumnSpan: 0,
  gridColumnStart: 0,
  fontWeight: 0,
  lineClamp: 0,
  lineHeight: 0,
  opacity: 0,
  order: 0,
  orphans: 0,
  tabSize: 0,
  widows: 0,
  zIndex: 0,
  zoom: 0,
  // SVG-related properties
  fillOpacity: 0,
  floodOpacity: 0,
  stopOpacity: 0,
  strokeDasharray: 0,
  strokeDashoffset: 0,
  strokeMiterlimit: 0,
  strokeOpacity: 0,
  strokeWidth: 0
};
function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}
var prefixes = ["Webkit", "ms", "Moz", "O"];
keys(isUnitlessNumber).forEach((prop) => {
  prefixes.forEach((prefix) => {
    isUnitlessNumber[prefixKey(prefix, prop)] = 0;
  });
});
var jsxDomType = Symbol.for("jsx-dom:type");
var JsxDomType = /* @__PURE__ */ (function(JsxDomType2) {
  JsxDomType2["ShadowRoot"] = "ShadowRoot";
  return JsxDomType2;
})(JsxDomType || {});
function ShadowRoot(_ref) {
  let {
    children,
    ref,
    ...attr2
  } = _ref;
  return {
    [jsxDomType]: JsxDomType.ShadowRoot,
    ref,
    attr: attr2,
    children
  };
}
function isShadowRoot(el) {
  return el != null && el[jsxDomType] === JsxDomType.ShadowRoot;
}
var SVGNamespace = "http://www.w3.org/2000/svg";
var XLinkNamespace = "http://www.w3.org/1999/xlink";
var XMLNamespace = "http://www.w3.org/XML/1998/namespace";
function isVisibleChild(value) {
  return !isBoolean(value) && value != null;
}
function className(value) {
  if (Array.isArray(value)) {
    return value.map(className).filter(Boolean).join(" ");
  } else if (isObject(value)) {
    if (Symbol.iterator in value) {
      return className(Array.from(value));
    }
    return keys(value).filter((k) => value[k]).join(" ");
  } else if (isVisibleChild(value)) {
    return "" + value;
  } else {
    return "";
  }
}
var svg = {
  animate: 0,
  circle: 0,
  clipPath: 0,
  defs: 0,
  desc: 0,
  ellipse: 0,
  feBlend: 0,
  feColorMatrix: 0,
  feComponentTransfer: 0,
  feComposite: 0,
  feConvolveMatrix: 0,
  feDiffuseLighting: 0,
  feDisplacementMap: 0,
  feDistantLight: 0,
  feFlood: 0,
  feFuncA: 0,
  feFuncB: 0,
  feFuncG: 0,
  feFuncR: 0,
  feGaussianBlur: 0,
  feImage: 0,
  feMerge: 0,
  feMergeNode: 0,
  feMorphology: 0,
  feOffset: 0,
  fePointLight: 0,
  feSpecularLighting: 0,
  feSpotLight: 0,
  feTile: 0,
  feTurbulence: 0,
  filter: 0,
  foreignObject: 0,
  g: 0,
  image: 0,
  line: 0,
  linearGradient: 0,
  marker: 0,
  mask: 0,
  metadata: 0,
  path: 0,
  pattern: 0,
  polygon: 0,
  polyline: 0,
  radialGradient: 0,
  rect: 0,
  stop: 0,
  svg: 0,
  switch: 0,
  symbol: 0,
  text: 0,
  textPath: 0,
  tspan: 0,
  use: 0,
  view: 0
};
var nonPresentationSVGAttributes = /^(a(ll|t|u)|base[FP]|c(al|lipPathU|on)|di|ed|ex|filter[RU]|g(lyphR|r)|ke|l(en|im)|ma(rker[HUW]|s)|n|pat|pr|point[^e]|re[^n]|s[puy]|st[^or]|ta|textL|vi|xC|y|z)/;
function createFactory(tag) {
  return createElement.bind(null, tag);
}
function Fragment(attr2) {
  const fragment = document.createDocumentFragment();
  appendChild(attr2.children, fragment);
  return fragment;
}
var Component = class {
  static isComponent = true;
  constructor(props) {
    this.props = props;
  }
  render() {
    return null;
  }
};
function initComponentClass(Class, attr2, children) {
  attr2 = {
    ...attr2,
    children
  };
  const instance = new Class(attr2);
  const node = instance.render();
  if ("ref" in attr2) {
    attachRef(attr2.ref, instance);
  }
  return node;
}
function jsx(tag, _ref) {
  let {
    children,
    ...attr2
  } = _ref;
  if (!attr2.namespaceURI && svg[tag] === 0) {
    attr2 = {
      ...attr2,
      namespaceURI: SVGNamespace
    };
  }
  let node;
  if (isString(tag)) {
    node = attr2.namespaceURI ? document.createElementNS(attr2.namespaceURI, tag) : document.createElement(tag);
    attributes(attr2, node);
    appendChild(children, node);
    if (node instanceof window.HTMLSelectElement && attr2.value != null) {
      if (attr2.multiple === true && Array.isArray(attr2.value)) {
        const values = attr2.value.map((value) => String(value));
        node.querySelectorAll("option").forEach((option) => option.selected = values.includes(option.value));
      } else {
        node.value = attr2.value;
      }
    }
    attachRef(attr2.ref, node);
  } else if (isFunction(tag)) {
    if (isObject(tag.defaultProps)) {
      attr2 = {
        ...tag.defaultProps,
        ...attr2
      };
    }
    node = isComponentClass(tag) ? initComponentClass(tag, attr2, children) : tag({
      ...attr2,
      children
    });
  } else {
    throw new TypeError("Invalid JSX element type: ".concat(tag));
  }
  return node;
}
function createElement(tag, attr2) {
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key2 = 2; _key2 < _len; _key2++) {
    children[_key2 - 2] = arguments[_key2];
  }
  if (isString(attr2) || Array.isArray(attr2)) {
    children.unshift(attr2);
    attr2 = {};
  }
  attr2 = attr2 || {};
  if (attr2.children != null && !children.length) {
    ({
      children,
      ...attr2
    } = attr2);
  }
  return jsx(tag, {
    ...attr2,
    children
  }, attr2.key);
}
function attachRef(ref, node) {
  if (isRef(ref)) {
    ref.current = node;
  } else if (isFunction(ref)) {
    ref(node);
  }
}
function appendChild(child, node) {
  if (isArrayLike(child)) {
    appendChildren(child, node);
  } else if (isString(child) || isNumber(child)) {
    appendChildToNode(document.createTextNode(child), node);
  } else if (child === null) {
    appendChildToNode(document.createComment(""), node);
  } else if (isElement(child)) {
    appendChildToNode(child, node);
  } else if (isShadowRoot(child)) {
    const shadowRoot = node.attachShadow(child.attr);
    appendChild(child.children, shadowRoot);
    attachRef(child.ref, shadowRoot);
  }
}
function appendChildren(children, node) {
  for (var _i = 0, _arr = [...children]; _i < _arr.length; _i++) {
    const child = _arr[_i];
    appendChild(child, node);
  }
  return node;
}
function appendChildToNode(child, node) {
  if (node instanceof window.HTMLTemplateElement) {
    node.content.appendChild(child);
  } else {
    node.appendChild(child);
  }
}
function normalizeAttribute(s, separator) {
  return s.replace(/[A-Z]/g, (match) => separator + match.toLowerCase());
}
function style(node, value) {
  if (value == null || value === false) ;
  else if (Array.isArray(value)) {
    value.forEach((v) => style(node, v));
  } else if (isString(value)) {
    node.setAttribute("style", value);
  } else if (isObject(value)) {
    forEach(value, (val, key) => {
      if (key.indexOf("-") === 0) {
        node.style.setProperty(key, val);
      } else if (isNumber(val) && isUnitlessNumber[key] !== 0) {
        node.style[key] = val + "px";
      } else {
        node.style[key] = val;
      }
    });
  }
}
function attribute(key, value, node) {
  switch (key) {
    case "xlinkActuate":
    case "xlinkArcrole":
    case "xlinkHref":
    case "xlinkRole":
    case "xlinkShow":
    case "xlinkTitle":
    case "xlinkType":
      attrNS(node, XLinkNamespace, normalizeAttribute(key, ":"), value);
      return;
    case "xmlnsXlink":
      attr(node, normalizeAttribute(key, ":"), value);
      return;
    case "xmlBase":
    case "xmlLang":
    case "xmlSpace":
      attrNS(node, XMLNamespace, normalizeAttribute(key, ":"), value);
      return;
  }
  switch (key) {
    case "htmlFor":
      attr(node, "for", value);
      return;
    case "dataset":
      forEach(value, (dataValue, dataKey) => {
        if (dataValue != null) {
          node.dataset[dataKey] = dataValue;
        }
      });
      return;
    case "innerHTML":
    case "innerText":
    case "textContent":
      if (isVisibleChild(value)) {
        node[key] = value;
      }
      return;
    case "dangerouslySetInnerHTML":
      if (isObject(value)) {
        node.innerHTML = value["__html"];
      }
      return;
    case "value":
      if (value == null || node instanceof window.HTMLSelectElement) {
        return;
      } else if (node instanceof window.HTMLTextAreaElement) {
        node.value = value;
        return;
      }
      break;
    case "spellCheck":
      node.spellcheck = value;
      return;
    case "class":
    case "className":
      if (isFunction(value)) {
        value(node);
      } else {
        attr(node, "class", className(value));
      }
      return;
    case "ref":
    case "namespaceURI":
      return;
    case "style":
      style(node, value);
      return;
    case "on":
    case "onCapture":
      forEach(value, (eventHandler, eventName) => {
        node.addEventListener(eventName, eventHandler, key === "onCapture");
      });
      return;
  }
  if (isFunction(value)) {
    if (key[0] === "o" && key[1] === "n") {
      let attribute2 = key.toLowerCase();
      const useCapture = attribute2.endsWith("capture");
      if (attribute2 === "ondoubleclick") {
        attribute2 = "ondblclick";
      } else if (useCapture && attribute2 === "ondoubleclickcapture") {
        attribute2 = "ondblclickcapture";
      }
      if (!useCapture && node[attribute2] === null) {
        node[attribute2] = value;
      } else if (useCapture) {
        node.addEventListener(attribute2.substring(2, attribute2.length - 7), value, true);
      } else {
        let eventName;
        if (attribute2 in window) {
          const standardEventName = attribute2.substring(2);
          eventName = standardEventName;
        } else {
          const customEventName = attribute2[2] + key.slice(3);
          eventName = customEventName;
        }
        node.addEventListener(eventName, value);
      }
    }
  } else if (isObject(value)) {
    node[key] = value;
  } else if (value === true) {
    attr(node, key, "");
  } else if (value !== false && value != null) {
    if (node instanceof SVGElement && !nonPresentationSVGAttributes.test(key)) {
      attr(node, normalizeAttribute(key, "-"), value);
    } else {
      attr(node, key, value);
    }
  }
}
function attr(node, key, value) {
  node.setAttribute(key, value);
}
function attrNS(node, namespace, key, value) {
  node.setAttributeNS(namespace, key, value);
}
function attributes(attr2, node) {
  var _iterator3 = _createForOfIteratorHelper(keys(attr2)), _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
      const key = _step3.value;
      attribute(key, attr2[key], node);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return node;
}
function useText(initialValue) {
  const text = new Text();
  Object.defineProperty(text, "toString", {
    value() {
      return this.textContent;
    }
  });
  function setText(value) {
    text.textContent = value;
  }
  if (initialValue != null) {
    setText(initialValue);
  }
  return [text, setText];
}
function useClassList(initialValue) {
  const div = document.createElement("div");
  if (initialValue != null) {
    div.className = className(initialValue);
  }
  let list = div.classList;
  function ClassList(value) {
    value.setAttribute("class", list.value);
    list = value.classList;
  }
  Object.defineProperties(ClassList, Object.getOwnPropertyDescriptors({
    get size() {
      return list.length;
    },
    get value() {
      return list.value;
    },
    add() {
      list.add(...arguments);
    },
    remove() {
      list.remove(...arguments);
    },
    toggle(token, force) {
      list.toggle(token, force);
    },
    contains(token) {
      return list.contains(token);
    }
  }));
  return ClassList;
}
function useMemo(factory) {
  return factory();
}
function forwardRef(render) {
  return (_ref) => {
    let {
      ref,
      ...props
    } = _ref;
    return render(props, ref !== null && ref !== void 0 ? ref : createRef());
  };
}
function useImperativeHandle(ref, init) {
  attachRef(ref, init());
}
var cache = /* @__PURE__ */ new Map();
var createStyledComponent = (name) => function(list) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }
  return (_ref) => {
    let {
      style: style2,
      ...props
    } = _ref;
    const lastIndex = list.length - 1;
    const css = list.slice(0, lastIndex).reduce((p, s, i) => {
      const interpolation = interpolations[i];
      const current = typeof interpolation === "function" ? interpolation(props) : interpolation;
      return p + s + current;
    }, "") + list[lastIndex];
    return createElement(name, {
      style: [css, style2],
      ...props
    });
  };
};
var baseStyled = (customComponent) => createStyledComponent(customComponent);
var styled = /* @__PURE__ */ new Proxy(baseStyled, {
  get(_, name) {
    return setIfAbsent(cache, name, () => createStyledComponent(name));
  }
});
function setIfAbsent(map, key, getValue) {
  if (map.has(key)) {
    return map.get(key);
  } else {
    const value = getValue(key);
    map.set(key, value);
    return value;
  }
}
function preventDefault(event) {
  event.preventDefault();
  return event;
}
function stopPropagation(event) {
  event.stopPropagation();
  return event;
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL3Byb3h5LXBvbHlmaWxsQDAuMy4yL25vZGVfbW9kdWxlcy9wcm94eS1wb2x5ZmlsbC9wcm94eS5taW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwtdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi1yYXcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmRleGVkLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1jYWxsYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1idWlsdC1pbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnZpcm9ubWVudC11c2VyLWFnZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYW4taW5zdGFuY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3JyZWN0LXByb3RvdHlwZS1nZXR0ZXIuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbi1hY2Nlc3Nvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaHRtbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1jcmVhdGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMtY29yZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5pdGVyYXRvci5jb25zdHJ1Y3Rvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1pdGVyYXRvci1kaXJlY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW5zLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLWl0ZXItcmVzdWx0LW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0b3ItY2xvc2UtYWxsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0b3ItY3JlYXRlLXByb3h5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2FsbC13aXRoLXNhZmUtaXRlcmF0aW9uLWNsb3NpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvci1oZWxwZXItdGhyb3dzLW9uLWludmFsaWQtaXRlcmF0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvci1oZWxwZXItd2l0aG91dC1jbG9zaW5nLW9uLWVhcmx5LWVycm9yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLml0ZXJhdG9yLmZpbHRlci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy1jbGF1c2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1hcnJheS1pdGVyYXRvci1tZXRob2QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jbGFzc29mLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1pdGVyYXRvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuaXRlcmF0b3IuZm9yLWVhY2guanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuaXRlcmF0b3IubWFwLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYXBwbHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40NS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuaXRlcmF0b3IucmVkdWNlLmpzIiwgInNyYy9KU1gvSlNYLnRzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9qc3gtZG9tQDguMS42L25vZGVfbW9kdWxlcy9qc3gtZG9tL2luZGV4LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIoZnVuY3Rpb24oKXtmdW5jdGlvbiBuKCl7ZnVuY3Rpb24gdigpe3JldHVybiBudWxsfWZ1bmN0aW9uIGwoYSl7cmV0dXJuIGE/XCJvYmplY3RcIj09PXR5cGVvZiBhfHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgYTohMX1mdW5jdGlvbiBwKGEpe2lmKG51bGwhPT1hJiYhbChhKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IHByb3RvdHlwZSBtYXkgb25seSBiZSBhbiBPYmplY3Qgb3IgbnVsbDogXCIrYSk7fXZhciBxPW51bGwsZT1PYmplY3Qsdz0hIWUuY3JlYXRlfHwhKHtfX3Byb3RvX186bnVsbH1pbnN0YW5jZW9mIGUpLEE9ZS5jcmVhdGV8fCh3P2Z1bmN0aW9uKGEpe3AoYSk7cmV0dXJue19fcHJvdG9fXzphfX06ZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYygpe31wKGEpO2lmKG51bGw9PT1hKXRocm93IG5ldyBTeW50YXhFcnJvcihcIk5hdGl2ZSBPYmplY3QuY3JlYXRlIGlzIHJlcXVpcmVkIHRvIGNyZWF0ZSBvYmplY3RzIHdpdGggbnVsbCBwcm90b3R5cGVcIik7Yy5wcm90b3R5cGU9YTtyZXR1cm4gbmV3IGN9KSxcbkI9ZS5nZXRQcm90b3R5cGVPZnx8KFtdLl9fcHJvdG9fXz09PUFycmF5LnByb3RvdHlwZT9mdW5jdGlvbihhKXthPWEuX19wcm90b19fO3JldHVybiBsKGEpP2E6bnVsbH06dik7dmFyIG09ZnVuY3Rpb24oYSxjKXtmdW5jdGlvbiBrKCl7fWlmKHZvaWQgMD09PSh0aGlzJiZ0aGlzIGluc3RhbmNlb2YgbT90aGlzLmNvbnN0cnVjdG9yOnZvaWQgMCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNvbnN0cnVjdG9yIFByb3h5IHJlcXVpcmVzICduZXcnXCIpO2lmKCFsKGEpfHwhbChjKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNyZWF0ZSBwcm94eSB3aXRoIGEgbm9uLW9iamVjdCBhcyB0YXJnZXQgb3IgaGFuZGxlclwiKTtxPWZ1bmN0aW9uKCl7YT1udWxsO2s9ZnVuY3Rpb24oYil7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBwZXJmb3JtICdcIitiK1wiJyBvbiBhIHByb3h5IHRoYXQgaGFzIGJlZW4gcmV2b2tlZFwiKTt9fTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cT1udWxsfSwwKTt2YXIgZz1cbmM7Yz17Z2V0Om51bGwsc2V0Om51bGwsYXBwbHk6bnVsbCxjb25zdHJ1Y3Q6bnVsbH07Zm9yKHZhciBoIGluIGcpe2lmKCEoaCBpbiBjKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJveHkgcG9seWZpbGwgZG9lcyBub3Qgc3VwcG9ydCB0cmFwICdcIitoK1wiJ1wiKTtjW2hdPWdbaF19XCJmdW5jdGlvblwiPT09dHlwZW9mIGcmJihjLmFwcGx5PWcuYXBwbHkuYmluZChnKSk7Zz1CKGEpO3ZhciByPSExLHQ9ITE7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGEpe3ZhciBmPWZ1bmN0aW9uKCl7dmFyIGI9dGhpcyYmdGhpcy5jb25zdHJ1Y3Rvcj09PWYsZD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO2soYj9cImNvbnN0cnVjdFwiOlwiYXBwbHlcIik7cmV0dXJuIGImJmMuY29uc3RydWN0P2MuY29uc3RydWN0LmNhbGwodGhpcyxhLGQpOiFiJiZjLmFwcGx5P2MuYXBwbHkoYSx0aGlzLGQpOmI/KGQudW5zaGlmdChhKSxuZXcgKGEuYmluZC5hcHBseShhLGQpKSk6YS5hcHBseSh0aGlzLFxuZCl9O3I9ITB9ZWxzZSBhIGluc3RhbmNlb2YgQXJyYXk/KGY9W10sdD0hMCk6Zj13fHxudWxsIT09Zz9BKGcpOnt9O3ZhciB4PWMuZ2V0P2Z1bmN0aW9uKGIpe2soXCJnZXRcIik7cmV0dXJuIGMuZ2V0KHRoaXMsYixmKX06ZnVuY3Rpb24oYil7ayhcImdldFwiKTtyZXR1cm4gdGhpc1tiXX0sQz1jLnNldD9mdW5jdGlvbihiLGQpe2soXCJzZXRcIik7Yy5zZXQodGhpcyxiLGQsZil9OmZ1bmN0aW9uKGIsZCl7ayhcInNldFwiKTt0aGlzW2JdPWR9LHk9e307ZS5nZXRPd25Qcm9wZXJ0eU5hbWVzKGEpLmZvckVhY2goZnVuY3Rpb24oYil7aWYoISgocnx8dCkmJmIgaW4gZikpe3ZhciBkPWUuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGEsYik7ZS5kZWZpbmVQcm9wZXJ0eShmLGIse2VudW1lcmFibGU6ISFkLmVudW1lcmFibGUsZ2V0OnguYmluZChhLGIpLHNldDpDLmJpbmQoYSxiKX0pO3lbYl09ITB9fSk7aD0hMDtpZihyfHx0KXt2YXIgRD1lLnNldFByb3RvdHlwZU9mfHwoW10uX19wcm90b19fPT09XG5BcnJheS5wcm90b3R5cGU/ZnVuY3Rpb24oYixkKXtwKGQpO2IuX19wcm90b19fPWQ7cmV0dXJuIGJ9OnYpO2cmJkQoZixnKXx8KGg9ITEpfWlmKGMuZ2V0fHwhaClmb3IodmFyIHUgaW4gYSl5W3VdfHxlLmRlZmluZVByb3BlcnR5KGYsdSx7Z2V0OnguYmluZChhLHUpfSk7ZS5zZWFsKGEpO2Uuc2VhbChmKTtyZXR1cm4gZn07bS5yZXZvY2FibGU9ZnVuY3Rpb24oYSxjKXtyZXR1cm57cHJveHk6bmV3IG0oYSxjKSxyZXZva2U6cX19O3JldHVybiBtfTt2YXIgej1cInVuZGVmaW5lZFwiIT09dHlwZW9mIHByb2Nlc3MmJlwiW29iamVjdCBwcm9jZXNzXVwiPT09e30udG9TdHJpbmcuY2FsbChwcm9jZXNzKXx8XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBuYXZpZ2F0b3ImJlwiUmVhY3ROYXRpdmVcIj09PW5hdmlnYXRvci5wcm9kdWN0P2dsb2JhbDpzZWxmO3ouUHJveHl8fCh6LlByb3h5PW4oKSx6LlByb3h5LnJldm9jYWJsZT16LlByb3h5LnJldm9jYWJsZSk7fSkoKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT09IE1hdGggJiYgaXQ7XG59O1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxubW9kdWxlLmV4cG9ydHMgPVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZ2xvYmFsLXRoaXMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2YgZ2xvYmFsVGhpcyA9PSAnb2JqZWN0JyAmJiBnbG9iYWxUaGlzKSB8fFxuICBjaGVjayh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYpIHx8XG4gIGNoZWNrKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsKSB8fFxuICBjaGVjayh0eXBlb2YgdGhpcyA9PSAnb2JqZWN0JyAmJiB0aGlzKSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmMgLS0gZmFsbGJhY2tcbiAgKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pKCkgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBEZXRlY3QgSUU4J3MgaW5jb21wbGV0ZSBkZWZpbmVQcm9wZXJ0eSBpbXBsZW1lbnRhdGlvblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIDEsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pWzFdICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbiAgdmFyIHRlc3QgPSAoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KS5iaW5kKCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gdHlwZW9mIHRlc3QgIT0gJ2Z1bmN0aW9uJyB8fCB0ZXN0Lmhhc093blByb3BlcnR5KCdwcm90b3R5cGUnKTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgY2FsbCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX0JJTkQgPyBjYWxsLmJpbmQoY2FsbCkgOiBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBjYWxsLmFwcGx5KGNhbGwsIGFyZ3VtZW50cyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBOYXNob3JuIH4gSkRLOCBidWdcbnZhciBOQVNIT1JOX0JVRyA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvciAmJiAhJHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoeyAxOiAyIH0sIDEpO1xuXG4vLyBgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZWAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5wcm90b3R5cGUucHJvcGVydHlpc2VudW1lcmFibGVcbmV4cG9ydHMuZiA9IE5BU0hPUk5fQlVHID8gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoVikge1xuICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLCBWKTtcbiAgcmV0dXJuICEhZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLmVudW1lcmFibGU7XG59IDogJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBjYWxsID0gRnVuY3Rpb25Qcm90b3R5cGUuY2FsbDtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1mdW5jdGlvbi1wcm90b3R5cGUtYmluZCAtLSBzYWZlXG52YXIgdW5jdXJyeVRoaXNXaXRoQmluZCA9IE5BVElWRV9CSU5EICYmIEZ1bmN0aW9uUHJvdG90eXBlLmJpbmQuYmluZChjYWxsLCBjYWxsKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IHVuY3VycnlUaGlzV2l0aEJpbmQgOiBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2FsbC5hcHBseShmbiwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyh7fS50b1N0cmluZyk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBzdHJpbmdTbGljZSh0b1N0cmluZyhpdCksIDgsIC0xKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcbnZhciBzcGxpdCA9IHVuY3VycnlUaGlzKCcnLnNwbGl0KTtcblxuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3Ncbm1vZHVsZS5leHBvcnRzID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyB0aHJvd3MgYW4gZXJyb3IgaW4gcmhpbm8sIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9yaGluby9pc3N1ZXMvMzQ2XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gISRPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcbn0pID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjbGFzc29mKGl0KSA9PT0gJ1N0cmluZycgPyBzcGxpdChpdCwgJycpIDogJE9iamVjdChpdCk7XG59IDogJE9iamVjdDtcbiIsICIndXNlIHN0cmljdCc7XG4vLyB3ZSBjYW4ndCB1c2UganVzdCBgaXQgPT0gbnVsbGAgc2luY2Ugb2YgYGRvY3VtZW50LmFsbGAgc3BlY2lhbCBjYXNlXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90LWFlY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSBudWxsIHx8IGl0ID09PSB1bmRlZmluZWQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoaXQpKSB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdFxudmFyIGRvY3VtZW50QWxsID0gdHlwZW9mIGRvY3VtZW50ID09ICdvYmplY3QnICYmIGRvY3VtZW50LmFsbDtcblxuLy8gYElzQ2FsbGFibGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2NhbGxhYmxlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby10eXBlb2YtdW5kZWZpbmVkIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBkb2N1bWVudEFsbCA9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudEFsbCAhPT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJyB8fCBhcmd1bWVudCA9PT0gZG9jdW1lbnRBbGw7XG59IDogZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogaXNDYWxsYWJsZShpdCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgYUZ1bmN0aW9uID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKGFyZ3VtZW50KSA/IGFyZ3VtZW50IDogdW5kZWZpbmVkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZXNwYWNlLCBtZXRob2QpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gYUZ1bmN0aW9uKGdsb2JhbFRoaXNbbmFtZXNwYWNlXSkgOiBnbG9iYWxUaGlzW25hbWVzcGFjZV0gJiYgZ2xvYmFsVGhpc1tuYW1lc3BhY2VdW21ldGhvZF07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1bmN1cnJ5VGhpcyh7fS5pc1Byb3RvdHlwZU9mKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xuXG52YXIgbmF2aWdhdG9yID0gZ2xvYmFsVGhpcy5uYXZpZ2F0b3I7XG52YXIgdXNlckFnZW50ID0gbmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cbm1vZHVsZS5leHBvcnRzID0gdXNlckFnZW50ID8gU3RyaW5nKHVzZXJBZ2VudCkgOiAnJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnZpcm9ubWVudC11c2VyLWFnZW50Jyk7XG5cbnZhciBwcm9jZXNzID0gZ2xvYmFsVGhpcy5wcm9jZXNzO1xudmFyIERlbm8gPSBnbG9iYWxUaGlzLkRlbm87XG52YXIgdmVyc2lvbnMgPSBwcm9jZXNzICYmIHByb2Nlc3MudmVyc2lvbnMgfHwgRGVubyAmJiBEZW5vLnZlcnNpb247XG52YXIgdjggPSB2ZXJzaW9ucyAmJiB2ZXJzaW9ucy52ODtcbnZhciBtYXRjaCwgdmVyc2lvbjtcblxuaWYgKHY4KSB7XG4gIG1hdGNoID0gdjguc3BsaXQoJy4nKTtcbiAgLy8gaW4gb2xkIENocm9tZSwgdmVyc2lvbnMgb2YgVjggaXNuJ3QgVjggPSBDaHJvbWUgLyAxMFxuICAvLyBidXQgdGhlaXIgY29ycmVjdCB2ZXJzaW9ucyBhcmUgbm90IGludGVyZXN0aW5nIGZvciB1c1xuICB2ZXJzaW9uID0gbWF0Y2hbMF0gPiAwICYmIG1hdGNoWzBdIDwgNCA/IDEgOiArKG1hdGNoWzBdICsgbWF0Y2hbMV0pO1xufVxuXG4vLyBCcm93c2VyRlMgTm9kZUpTIGBwcm9jZXNzYCBwb2x5ZmlsbCBpbmNvcnJlY3RseSBzZXQgYC52OGAgdG8gYDAuMGBcbi8vIHNvIGNoZWNrIGB1c2VyQWdlbnRgIGV2ZW4gaWYgYC52OGAgZXhpc3RzLCBidXQgMFxuaWYgKCF2ZXJzaW9uICYmIHVzZXJBZ2VudCkge1xuICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvRWRnZVxcLyhcXGQrKS8pO1xuICBpZiAoIW1hdGNoIHx8IG1hdGNoWzFdID49IDc0KSB7XG4gICAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0Nocm9tZVxcLyhcXGQrKS8pO1xuICAgIGlmIChtYXRjaCkgdmVyc2lvbiA9ICttYXRjaFsxXTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZlcnNpb247XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnZpcm9ubWVudC12OC12ZXJzaW9uJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG5cbnZhciAkU3RyaW5nID0gZ2xvYmFsVGhpcy5TdHJpbmc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlzeW1ib2xzIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9ICEhT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgc3ltYm9sID0gU3ltYm9sKCdzeW1ib2wgZGV0ZWN0aW9uJyk7XG4gIC8vIENocm9tZSAzOCBTeW1ib2wgaGFzIGluY29ycmVjdCB0b1N0cmluZyBjb252ZXJzaW9uXG4gIC8vIGBnZXQtb3duLXByb3BlcnR5LXN5bWJvbHNgIHBvbHlmaWxsIHN5bWJvbHMgY29udmVydGVkIHRvIG9iamVjdCBhcmUgbm90IFN5bWJvbCBpbnN0YW5jZXNcbiAgLy8gbmI6IERvIG5vdCBjYWxsIGBTdHJpbmdgIGRpcmVjdGx5IHRvIGF2b2lkIHRoaXMgYmVpbmcgb3B0aW1pemVkIG91dCB0byBgc3ltYm9sKycnYCB3aGljaCB3aWxsLFxuICAvLyBvZiBjb3Vyc2UsIGZhaWwuXG4gIHJldHVybiAhJFN0cmluZyhzeW1ib2wpIHx8ICEoT2JqZWN0KHN5bWJvbCkgaW5zdGFuY2VvZiBTeW1ib2wpIHx8XG4gICAgLy8gQ2hyb21lIDM4LTQwIHN5bWJvbHMgYXJlIG5vdCBpbmhlcml0ZWQgZnJvbSBET00gY29sbGVjdGlvbnMgcHJvdG90eXBlcyB0byBpbnN0YW5jZXNcbiAgICAhU3ltYm9sLnNoYW0gJiYgVjhfVkVSU0lPTiAmJiBWOF9WRVJTSU9OIDwgNDE7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1zeW1ib2wgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfU1lNQk9MICYmXG4gICFTeW1ib2wuc2hhbSAmJlxuICB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc1Byb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YnKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxubW9kdWxlLmV4cG9ydHMgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgJFN5bWJvbCA9IGdldEJ1aWx0SW4oJ1N5bWJvbCcpO1xuICByZXR1cm4gaXNDYWxsYWJsZSgkU3ltYm9sKSAmJiBpc1Byb3RvdHlwZU9mKCRTeW1ib2wucHJvdG90eXBlLCAkT2JqZWN0KGl0KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB0cnkge1xuICAgIHJldHVybiAkU3RyaW5nKGFyZ3VtZW50KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gJ09iamVjdCc7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciB0cnlUb1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90cnktdG8tc3RyaW5nJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBJc0NhbGxhYmxlKGFyZ3VtZW50KSBpcyB0cnVlYFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGlzQ2FsbGFibGUoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKHRyeVRvU3RyaW5nKGFyZ3VtZW50KSArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcblxuLy8gYEdldE1ldGhvZGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWdldG1ldGhvZFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoViwgUCkge1xuICB2YXIgZnVuYyA9IFZbUF07XG4gIHJldHVybiBpc051bGxPclVuZGVmaW5lZChmdW5jKSA/IHVuZGVmaW5lZCA6IGFDYWxsYWJsZShmdW5jKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBPcmRpbmFyeVRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb3JkaW5hcnl0b3ByaW1pdGl2ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5wdXQsIHByZWYpIHtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChwcmVmID09PSAnc3RyaW5nJyAmJiBpc0NhbGxhYmxlKGZuID0gaW5wdXQudG9TdHJpbmcpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAoaXNDYWxsYWJsZShmbiA9IGlucHV0LnZhbHVlT2YpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAocHJlZiAhPT0gJ3N0cmluZycgJiYgaXNDYWxsYWJsZShmbiA9IGlucHV0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgdHJ5IHtcbiAgICBkZWZpbmVQcm9wZXJ0eShnbG9iYWxUaGlzLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdsb2JhbFRoaXNba2V5XSA9IHZhbHVlO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG5cbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IG1vZHVsZS5leHBvcnRzID0gZ2xvYmFsVGhpc1tTSEFSRURdIHx8IGRlZmluZUdsb2JhbFByb3BlcnR5KFNIQVJFRCwge30pO1xuXG4oc3RvcmUudmVyc2lvbnMgfHwgKHN0b3JlLnZlcnNpb25zID0gW10pKS5wdXNoKHtcbiAgdmVyc2lvbjogJzMuNDUuMScsXG4gIG1vZGU6IElTX1BVUkUgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxNC0yMDI1IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJyxcbiAgbGljZW5zZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2Jsb2IvdjMuNDUuMS9MSUNFTlNFJyxcbiAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMnXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSB8fCB7fSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxuLy8gYFRvT2JqZWN0YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9vYmplY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiAkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSB1bmN1cnJ5VGhpcyh7fS5oYXNPd25Qcm9wZXJ0eSk7XG5cbi8vIGBIYXNPd25Qcm9wZXJ0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWhhc293bnByb3BlcnR5XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWhhc293biAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5oYXNPd24gfHwgZnVuY3Rpb24gaGFzT3duKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5KHRvT2JqZWN0KGl0KSwga2V5KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgaWQgPSAwO1xudmFyIHBvc3RmaXggPSBNYXRoLnJhbmRvbSgpO1xudmFyIHRvU3RyaW5nID0gdW5jdXJyeVRoaXMoMS4xLnRvU3RyaW5nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcgKyAoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSkgKyAnKV8nICsgdG9TdHJpbmcoKytpZCArIHBvc3RmaXgsIDM2KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyIFN5bWJvbCA9IGdsb2JhbFRoaXMuU3ltYm9sO1xudmFyIFdlbGxLbm93blN5bWJvbHNTdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG52YXIgY3JlYXRlV2VsbEtub3duU3ltYm9sID0gVVNFX1NZTUJPTF9BU19VSUQgPyBTeW1ib2xbJ2ZvciddIHx8IFN5bWJvbCA6IFN5bWJvbCAmJiBTeW1ib2wud2l0aG91dFNldHRlciB8fCB1aWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgaWYgKCFoYXNPd24oV2VsbEtub3duU3ltYm9sc1N0b3JlLCBuYW1lKSkge1xuICAgIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IE5BVElWRV9TWU1CT0wgJiYgaGFzT3duKFN5bWJvbCwgbmFtZSlcbiAgICAgID8gU3ltYm9sW25hbWVdXG4gICAgICA6IGNyZWF0ZVdlbGxLbm93blN5bWJvbCgnU3ltYm9sLicgKyBuYW1lKTtcbiAgfSByZXR1cm4gV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciBvcmRpbmFyeVRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBUT19QUklNSVRJVkUgPSB3ZWxsS25vd25TeW1ib2woJ3RvUHJpbWl0aXZlJyk7XG5cbi8vIGBUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICBpZiAoIWlzT2JqZWN0KGlucHV0KSB8fCBpc1N5bWJvbChpbnB1dCkpIHJldHVybiBpbnB1dDtcbiAgdmFyIGV4b3RpY1RvUHJpbSA9IGdldE1ldGhvZChpbnB1dCwgVE9fUFJJTUlUSVZFKTtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKGV4b3RpY1RvUHJpbSkge1xuICAgIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnZGVmYXVsdCc7XG4gICAgcmVzdWx0ID0gY2FsbChleG90aWNUb1ByaW0sIGlucHV0LCBwcmVmKTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlc3VsdCkgfHwgaXNTeW1ib2wocmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbiAgfVxuICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ251bWJlcic7XG4gIHJldHVybiBvcmRpbmFyeVRvUHJpbWl0aXZlKGlucHV0LCBwcmVmKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xuXG4vLyBgVG9Qcm9wZXJ0eUtleWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJvcGVydHlrZXlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmd1bWVudCwgJ3N0cmluZycpO1xuICByZXR1cm4gaXNTeW1ib2woa2V5KSA/IGtleSA6IGtleSArICcnO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgZG9jdW1lbnQgPSBnbG9iYWxUaGlzLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgRVhJU1RTID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gRVhJU1RTID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG5cbi8vIFRoYW5rcyB0byBJRTggZm9yIGl0cyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGNyZWF0ZUVsZW1lbnQoJ2RpdicpLCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH1cbiAgfSkuYSAhPT0gNztcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlJyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXknKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yXG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JbmRleGVkT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXNPd24oTywgUCkpIHJldHVybiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoIWNhbGwocHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZiwgTywgUCksIE9bUF0pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBWOCB+IENocm9tZSAzNi1cbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMzMzRcbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAncHJvdG90eXBlJywge1xuICAgIHZhbHVlOiA0MixcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSkucHJvdG90eXBlICE9PSA0Mjtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyICRTdHJpbmcgPSBTdHJpbmc7XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogVHlwZShhcmd1bWVudCkgaXMgT2JqZWN0YFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGlzT2JqZWN0KGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcigkU3RyaW5nKGFyZ3VtZW50KSArICcgaXMgbm90IGFuIG9iamVjdCcpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xudmFyIFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Y4LXByb3RvdHlwZS1kZWZpbmUtYnVnJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXknKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciAkZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgRU5VTUVSQUJMRSA9ICdlbnVtZXJhYmxlJztcbnZhciBDT05GSUdVUkFCTEUgPSAnY29uZmlndXJhYmxlJztcbnZhciBXUklUQUJMRSA9ICd3cml0YWJsZSc7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydHlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydHlcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmICh0eXBlb2YgTyA9PT0gJ2Z1bmN0aW9uJyAmJiBQID09PSAncHJvdG90eXBlJyAmJiAndmFsdWUnIGluIEF0dHJpYnV0ZXMgJiYgV1JJVEFCTEUgaW4gQXR0cmlidXRlcyAmJiAhQXR0cmlidXRlc1tXUklUQUJMRV0pIHtcbiAgICB2YXIgY3VycmVudCA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gICAgaWYgKGN1cnJlbnQgJiYgY3VycmVudFtXUklUQUJMRV0pIHtcbiAgICAgIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICAgICAgQXR0cmlidXRlcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiBDT05GSUdVUkFCTEUgaW4gQXR0cmlidXRlcyA/IEF0dHJpYnV0ZXNbQ09ORklHVVJBQkxFXSA6IGN1cnJlbnRbQ09ORklHVVJBQkxFXSxcbiAgICAgICAgZW51bWVyYWJsZTogRU5VTUVSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tFTlVNRVJBQkxFXSA6IGN1cnJlbnRbRU5VTUVSQUJMRV0sXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgICAgfTtcbiAgICB9XG4gIH0gcmV0dXJuICRkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbn0gOiAkZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IG5ldyAkVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCcpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBrZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldERlc2NyaXB0b3IgPSBERVNDUklQVE9SUyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG52YXIgRVhJU1RTID0gaGFzT3duKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpO1xuLy8gYWRkaXRpb25hbCBwcm90ZWN0aW9uIGZyb20gbWluaWZpZWQgLyBtYW5nbGVkIC8gZHJvcHBlZCBmdW5jdGlvbiBuYW1lc1xudmFyIFBST1BFUiA9IEVYSVNUUyAmJiAoZnVuY3Rpb24gc29tZXRoaW5nKCkgeyAvKiBlbXB0eSAqLyB9KS5uYW1lID09PSAnc29tZXRoaW5nJztcbnZhciBDT05GSUdVUkFCTEUgPSBFWElTVFMgJiYgKCFERVNDUklQVE9SUyB8fCAoREVTQ1JJUFRPUlMgJiYgZ2V0RGVzY3JpcHRvcihGdW5jdGlvblByb3RvdHlwZSwgJ25hbWUnKS5jb25maWd1cmFibGUpKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEVYSVNUUzogRVhJU1RTLFxuICBQUk9QRVI6IFBST1BFUixcbiAgQ09ORklHVVJBQkxFOiBDT05GSUdVUkFCTEVcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxudmFyIGZ1bmN0aW9uVG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyhGdW5jdGlvbi50b1N0cmluZyk7XG5cbi8vIHRoaXMgaGVscGVyIGJyb2tlbiBpbiBgY29yZS1qc0AzLjQuMS0zLjQuNGAsIHNvIHdlIGNhbid0IHVzZSBgc2hhcmVkYCBoZWxwZXJcbmlmICghaXNDYWxsYWJsZShzdG9yZS5pbnNwZWN0U291cmNlKSkge1xuICBzdG9yZS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uVG9TdHJpbmcoaXQpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0b3JlLmluc3BlY3RTb3VyY2U7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciBXZWFrTWFwID0gZ2xvYmFsVGhpcy5XZWFrTWFwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQ2FsbGFibGUoV2Vha01hcCkgJiYgL25hdGl2ZSBjb2RlLy50ZXN0KFN0cmluZyhXZWFrTWFwKSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG5cbnZhciBrZXlzID0gc2hhcmVkKCdrZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4ga2V5c1trZXldIHx8IChrZXlzW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9XRUFLX01BUCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24nKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQgPSAnT2JqZWN0IGFscmVhZHkgaW5pdGlhbGl6ZWQnO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbFRoaXMuVHlwZUVycm9yO1xudmFyIFdlYWtNYXAgPSBnbG9iYWxUaGlzLldlYWtNYXA7XG52YXIgc2V0LCBnZXQsIGhhcztcblxudmFyIGVuZm9yY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGhhcyhpdCkgPyBnZXQoaXQpIDogc2V0KGl0LCB7fSk7XG59O1xuXG52YXIgZ2V0dGVyRm9yID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBzdGF0ZTtcbiAgICBpZiAoIWlzT2JqZWN0KGl0KSB8fCAoc3RhdGUgPSBnZXQoaXQpKS50eXBlICE9PSBUWVBFKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbmNvbXBhdGlibGUgcmVjZWl2ZXIsICcgKyBUWVBFICsgJyByZXF1aXJlZCcpO1xuICAgIH0gcmV0dXJuIHN0YXRlO1xuICB9O1xufTtcblxuaWYgKE5BVElWRV9XRUFLX01BUCB8fCBzaGFyZWQuc3RhdGUpIHtcbiAgdmFyIHN0b3JlID0gc2hhcmVkLnN0YXRlIHx8IChzaGFyZWQuc3RhdGUgPSBuZXcgV2Vha01hcCgpKTtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tc2VsZi1hc3NpZ24gLS0gcHJvdG90eXBlIG1ldGhvZHMgcHJvdGVjdGlvbiAqL1xuICBzdG9yZS5nZXQgPSBzdG9yZS5nZXQ7XG4gIHN0b3JlLmhhcyA9IHN0b3JlLmhhcztcbiAgc3RvcmUuc2V0ID0gc3RvcmUuc2V0O1xuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXNlbGYtYXNzaWduIC0tIHByb3RvdHlwZSBtZXRob2RzIHByb3RlY3Rpb24gKi9cbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIGlmIChzdG9yZS5oYXMoaXQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEKTtcbiAgICBtZXRhZGF0YS5mYWNhZGUgPSBpdDtcbiAgICBzdG9yZS5zZXQoaXQsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBzdG9yZS5nZXQoaXQpIHx8IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gc3RvcmUuaGFzKGl0KTtcbiAgfTtcbn0gZWxzZSB7XG4gIHZhciBTVEFURSA9IHNoYXJlZEtleSgnc3RhdGUnKTtcbiAgaGlkZGVuS2V5c1tTVEFURV0gPSB0cnVlO1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKGhhc093bihpdCwgU1RBVEUpKSB0aHJvdyBuZXcgVHlwZUVycm9yKE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEKTtcbiAgICBtZXRhZGF0YS5mYWNhZGUgPSBpdDtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoaXQsIFNUQVRFLCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSkgPyBpdFtTVEFURV0gOiB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGhhc093bihpdCwgU1RBVEUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXQsXG4gIGdldDogZ2V0LFxuICBoYXM6IGhhcyxcbiAgZW5mb3JjZTogZW5mb3JjZSxcbiAgZ2V0dGVyRm9yOiBnZXR0ZXJGb3Jcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1uYW1lJykuQ09ORklHVVJBQkxFO1xudmFyIGluc3BlY3RTb3VyY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG5cbnZhciBlbmZvcmNlSW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZW5mb3JjZTtcbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXQ7XG52YXIgJFN0cmluZyA9IFN0cmluZztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xudmFyIHJlcGxhY2UgPSB1bmN1cnJ5VGhpcygnJy5yZXBsYWNlKTtcbnZhciBqb2luID0gdW5jdXJyeVRoaXMoW10uam9pbik7XG5cbnZhciBDT05GSUdVUkFCTEVfTEVOR1RIID0gREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5KGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSwgJ2xlbmd0aCcsIHsgdmFsdWU6IDggfSkubGVuZ3RoICE9PSA4O1xufSk7XG5cbnZhciBURU1QTEFURSA9IFN0cmluZyhTdHJpbmcpLnNwbGl0KCdTdHJpbmcnKTtcblxudmFyIG1ha2VCdWlsdEluID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUsIG5hbWUsIG9wdGlvbnMpIHtcbiAgaWYgKHN0cmluZ1NsaWNlKCRTdHJpbmcobmFtZSksIDAsIDcpID09PSAnU3ltYm9sKCcpIHtcbiAgICBuYW1lID0gJ1snICsgcmVwbGFjZSgkU3RyaW5nKG5hbWUpLCAvXlN5bWJvbFxcKChbXildKilcXCkuKiQvLCAnJDEnKSArICddJztcbiAgfVxuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmdldHRlcikgbmFtZSA9ICdnZXQgJyArIG5hbWU7XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuc2V0dGVyKSBuYW1lID0gJ3NldCAnICsgbmFtZTtcbiAgaWYgKCFoYXNPd24odmFsdWUsICduYW1lJykgfHwgKENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FICYmIHZhbHVlLm5hbWUgIT09IG5hbWUpKSB7XG4gICAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ25hbWUnLCB7IHZhbHVlOiBuYW1lLCBjb25maWd1cmFibGU6IHRydWUgfSk7XG4gICAgZWxzZSB2YWx1ZS5uYW1lID0gbmFtZTtcbiAgfVxuICBpZiAoQ09ORklHVVJBQkxFX0xFTkdUSCAmJiBvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnYXJpdHknKSAmJiB2YWx1ZS5sZW5ndGggIT09IG9wdGlvbnMuYXJpdHkpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ2xlbmd0aCcsIHsgdmFsdWU6IG9wdGlvbnMuYXJpdHkgfSk7XG4gIH1cbiAgdHJ5IHtcbiAgICBpZiAob3B0aW9ucyAmJiBoYXNPd24ob3B0aW9ucywgJ2NvbnN0cnVjdG9yJykgJiYgb3B0aW9ucy5jb25zdHJ1Y3Rvcikge1xuICAgICAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ3Byb3RvdHlwZScsIHsgd3JpdGFibGU6IGZhbHNlIH0pO1xuICAgIC8vIGluIFY4IH4gQ2hyb21lIDUzLCBwcm90b3R5cGVzIG9mIHNvbWUgbWV0aG9kcywgbGlrZSBgQXJyYXkucHJvdG90eXBlLnZhbHVlc2AsIGFyZSBub24td3JpdGFibGVcbiAgICB9IGVsc2UgaWYgKHZhbHVlLnByb3RvdHlwZSkgdmFsdWUucHJvdG90eXBlID0gdW5kZWZpbmVkO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIHZhciBzdGF0ZSA9IGVuZm9yY2VJbnRlcm5hbFN0YXRlKHZhbHVlKTtcbiAgaWYgKCFoYXNPd24oc3RhdGUsICdzb3VyY2UnKSkge1xuICAgIHN0YXRlLnNvdXJjZSA9IGpvaW4oVEVNUExBVEUsIHR5cGVvZiBuYW1lID09ICdzdHJpbmcnID8gbmFtZSA6ICcnKTtcbiAgfSByZXR1cm4gdmFsdWU7XG59O1xuXG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1leHRlbmQtbmF0aXZlIC0tIHJlcXVpcmVkXG5GdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgPSBtYWtlQnVpbHRJbihmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIGlzQ2FsbGFibGUodGhpcykgJiYgZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKS5zb3VyY2UgfHwgaW5zcGVjdFNvdXJjZSh0aGlzKTtcbn0sICd0b1N0cmluZycpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIG1ha2VCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge307XG4gIHZhciBzaW1wbGUgPSBvcHRpb25zLmVudW1lcmFibGU7XG4gIHZhciBuYW1lID0gb3B0aW9ucy5uYW1lICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5hbWUgOiBrZXk7XG4gIGlmIChpc0NhbGxhYmxlKHZhbHVlKSkgbWFrZUJ1aWx0SW4odmFsdWUsIG5hbWUsIG9wdGlvbnMpO1xuICBpZiAob3B0aW9ucy5nbG9iYWwpIHtcbiAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgICBlbHNlIGRlZmluZUdsb2JhbFByb3BlcnR5KGtleSwgdmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIW9wdGlvbnMudW5zYWZlKSBkZWxldGUgT1trZXldO1xuICAgICAgZWxzZSBpZiAoT1trZXldKSBzaW1wbGUgPSB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgICBlbHNlIGRlZmluZVByb3BlcnR5TW9kdWxlLmYoTywga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogIW9wdGlvbnMubm9uQ29uZmlndXJhYmxlLFxuICAgICAgd3JpdGFibGU6ICFvcHRpb25zLm5vbldyaXRhYmxlXG4gICAgfSk7XG4gIH0gcmV0dXJuIE87XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcblxuLy8gYE1hdGgudHJ1bmNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1tYXRoLnRydW5jXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tbWF0aC10cnVuYyAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE1hdGgudHJ1bmMgfHwgZnVuY3Rpb24gdHJ1bmMoeCkge1xuICB2YXIgbiA9ICt4O1xuICByZXR1cm4gKG4gPiAwID8gZmxvb3IgOiBjZWlsKShuKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRydW5jID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL21hdGgtdHJ1bmMnKTtcblxuLy8gYFRvSW50ZWdlck9ySW5maW5pdHlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2ludGVnZXJvcmluZmluaXR5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIgbnVtYmVyID0gK2FyZ3VtZW50O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICByZXR1cm4gbnVtYmVyICE9PSBudW1iZXIgfHwgbnVtYmVyID09PSAwID8gMCA6IHRydW5jKG51bWJlcik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBIZWxwZXIgZm9yIGEgcG9wdWxhciByZXBlYXRpbmcgY2FzZSBvZiB0aGUgc3BlYzpcbi8vIExldCBpbnRlZ2VyIGJlID8gVG9JbnRlZ2VyKGluZGV4KS5cbi8vIElmIGludGVnZXIgPCAwLCBsZXQgcmVzdWx0IGJlIG1heCgobGVuZ3RoICsgaW50ZWdlciksIDApOyBlbHNlIGxldCByZXN1bHQgYmUgbWluKGludGVnZXIsIGxlbmd0aCkuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIHZhciBpbnRlZ2VyID0gdG9JbnRlZ2VyT3JJbmZpbml0eShpbmRleCk7XG4gIHJldHVybiBpbnRlZ2VyIDwgMCA/IG1heChpbnRlZ2VyICsgbGVuZ3RoLCAwKSA6IG1pbihpbnRlZ2VyLCBsZW5ndGgpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG5cbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gYFRvTGVuZ3RoYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9sZW5ndGhcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBsZW4gPSB0b0ludGVnZXJPckluZmluaXR5KGFyZ3VtZW50KTtcbiAgcmV0dXJuIGxlbiA+IDAgPyBtaW4obGVuLCAweDFGRkZGRkZGRkZGRkZGKSA6IDA7IC8vIDIgKiogNTMgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xuXG4vLyBgTGVuZ3RoT2ZBcnJheUxpa2VgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1sZW5ndGhvZmFycmF5bGlrZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0b0xlbmd0aChvYmoubGVuZ3RoKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUueyBpbmRleE9mLCBpbmNsdWRlcyB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IGxlbmd0aE9mQXJyYXlMaWtlKE8pO1xuICAgIGlmIChsZW5ndGggPT09IDApIHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9PSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgICAgaWYgKHZhbHVlICE9PSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgaWYgKChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSAmJiBPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbiAgaW5jbHVkZXM6IGNyZWF0ZU1ldGhvZCh0cnVlKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmRleE9mYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxuICBpbmRleE9mOiBjcmVhdGVNZXRob2QoZmFsc2UpXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGluZGV4T2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmRleE9mO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIHB1c2ggPSB1bmN1cnJ5VGhpcyhbXS5wdXNoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgIWhhc093bihoaWRkZW5LZXlzLCBrZXkpICYmIGhhc093bihPLCBrZXkpICYmIHB1c2gocmVzdWx0LCBrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzT3duKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHB1c2gocmVzdWx0LCBrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIElFOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSBbXG4gICdjb25zdHJ1Y3RvcicsXG4gICdoYXNPd25Qcm9wZXJ0eScsXG4gICdpc1Byb3RvdHlwZU9mJyxcbiAgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcbiAgJ3RvTG9jYWxlU3RyaW5nJyxcbiAgJ3RvU3RyaW5nJyxcbiAgJ3ZhbHVlT2YnXG5dO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG5cbnZhciBoaWRkZW5LZXlzID0gZW51bUJ1Z0tleXMuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eW5hbWVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5bmFtZXMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlzeW1ib2xzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbnZhciBjb25jYXQgPSB1bmN1cnJ5VGhpcyhbXS5jb25jYXQpO1xuXG4vLyBhbGwgb2JqZWN0IGtleXMsIGluY2x1ZGVzIG5vbi1lbnVtZXJhYmxlIGFuZCBzeW1ib2xzXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ1JlZmxlY3QnLCAnb3duS2V5cycpIHx8IGZ1bmN0aW9uIG93bktleXMoaXQpIHtcbiAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlLmYoYW5PYmplY3QoaXQpKTtcbiAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mO1xuICByZXR1cm4gZ2V0T3duUHJvcGVydHlTeW1ib2xzID8gY29uY2F0KGtleXMsIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkpIDoga2V5cztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgb3duS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vd24ta2V5cycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSwgZXhjZXB0aW9ucykge1xuICB2YXIga2V5cyA9IG93bktleXMoc291cmNlKTtcbiAgdmFyIGRlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHlNb2R1bGUuZjtcbiAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoIWhhc093bih0YXJnZXQsIGtleSkgJiYgIShleGNlcHRpb25zICYmIGhhc093bihleGNlcHRpb25zLCBrZXkpKSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgIH1cbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciByZXBsYWNlbWVudCA9IC8jfFxcLnByb3RvdHlwZVxcLi87XG5cbnZhciBpc0ZvcmNlZCA9IGZ1bmN0aW9uIChmZWF0dXJlLCBkZXRlY3Rpb24pIHtcbiAgdmFyIHZhbHVlID0gZGF0YVtub3JtYWxpemUoZmVhdHVyZSldO1xuICByZXR1cm4gdmFsdWUgPT09IFBPTFlGSUxMID8gdHJ1ZVxuICAgIDogdmFsdWUgPT09IE5BVElWRSA/IGZhbHNlXG4gICAgOiBpc0NhbGxhYmxlKGRldGVjdGlvbikgPyBmYWlscyhkZXRlY3Rpb24pXG4gICAgOiAhIWRldGVjdGlvbjtcbn07XG5cbnZhciBub3JtYWxpemUgPSBpc0ZvcmNlZC5ub3JtYWxpemUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gIHJldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKHJlcGxhY2VtZW50LCAnLicpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG52YXIgZGF0YSA9IGlzRm9yY2VkLmRhdGEgPSB7fTtcbnZhciBOQVRJVkUgPSBpc0ZvcmNlZC5OQVRJVkUgPSAnTic7XG52YXIgUE9MWUZJTEwgPSBpc0ZvcmNlZC5QT0xZRklMTCA9ICdQJztcblxubW9kdWxlLmV4cG9ydHMgPSBpc0ZvcmNlZDtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJykuZjtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG52YXIgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMnKTtcbnZhciBpc0ZvcmNlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1mb3JjZWQnKTtcblxuLypcbiAgb3B0aW9ucy50YXJnZXQgICAgICAgICAtIG5hbWUgb2YgdGhlIHRhcmdldCBvYmplY3RcbiAgb3B0aW9ucy5nbG9iYWwgICAgICAgICAtIHRhcmdldCBpcyB0aGUgZ2xvYmFsIG9iamVjdFxuICBvcHRpb25zLnN0YXQgICAgICAgICAgIC0gZXhwb3J0IGFzIHN0YXRpYyBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnByb3RvICAgICAgICAgIC0gZXhwb3J0IGFzIHByb3RvdHlwZSBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnJlYWwgICAgICAgICAgIC0gcmVhbCBwcm90b3R5cGUgbWV0aG9kIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy5mb3JjZWQgICAgICAgICAtIGV4cG9ydCBldmVuIGlmIHRoZSBuYXRpdmUgZmVhdHVyZSBpcyBhdmFpbGFibGVcbiAgb3B0aW9ucy5iaW5kICAgICAgICAgICAtIGJpbmQgbWV0aG9kcyB0byB0aGUgdGFyZ2V0LCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMud3JhcCAgICAgICAgICAgLSB3cmFwIGNvbnN0cnVjdG9ycyB0byBwcmV2ZW50aW5nIGdsb2JhbCBwb2xsdXRpb24sIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy51bnNhZmUgICAgICAgICAtIHVzZSB0aGUgc2ltcGxlIGFzc2lnbm1lbnQgb2YgcHJvcGVydHkgaW5zdGVhZCBvZiBkZWxldGUgKyBkZWZpbmVQcm9wZXJ0eVxuICBvcHRpb25zLnNoYW0gICAgICAgICAgIC0gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICBvcHRpb25zLmVudW1lcmFibGUgICAgIC0gZXhwb3J0IGFzIGVudW1lcmFibGUgcHJvcGVydHlcbiAgb3B0aW9ucy5kb250Q2FsbEdldFNldCAtIHByZXZlbnQgY2FsbGluZyBhIGdldHRlciBvbiB0YXJnZXRcbiAgb3B0aW9ucy5uYW1lICAgICAgICAgICAtIHRoZSAubmFtZSBvZiB0aGUgZnVuY3Rpb24gaWYgaXQgZG9lcyBub3QgbWF0Y2ggdGhlIGtleVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdGlvbnMsIHNvdXJjZSkge1xuICB2YXIgVEFSR0VUID0gb3B0aW9ucy50YXJnZXQ7XG4gIHZhciBHTE9CQUwgPSBvcHRpb25zLmdsb2JhbDtcbiAgdmFyIFNUQVRJQyA9IG9wdGlvbnMuc3RhdDtcbiAgdmFyIEZPUkNFRCwgdGFyZ2V0LCBrZXksIHRhcmdldFByb3BlcnR5LCBzb3VyY2VQcm9wZXJ0eSwgZGVzY3JpcHRvcjtcbiAgaWYgKEdMT0JBTCkge1xuICAgIHRhcmdldCA9IGdsb2JhbFRoaXM7XG4gIH0gZWxzZSBpZiAoU1RBVElDKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsVGhpc1tUQVJHRVRdIHx8IGRlZmluZUdsb2JhbFByb3BlcnR5KFRBUkdFVCwge30pO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldCA9IGdsb2JhbFRoaXNbVEFSR0VUXSAmJiBnbG9iYWxUaGlzW1RBUkdFVF0ucHJvdG90eXBlO1xuICB9XG4gIGlmICh0YXJnZXQpIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIHNvdXJjZVByb3BlcnR5ID0gc291cmNlW2tleV07XG4gICAgaWYgKG9wdGlvbnMuZG9udENhbGxHZXRTZXQpIHtcbiAgICAgIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICAgICAgdGFyZ2V0UHJvcGVydHkgPSBkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IudmFsdWU7XG4gICAgfSBlbHNlIHRhcmdldFByb3BlcnR5ID0gdGFyZ2V0W2tleV07XG4gICAgRk9SQ0VEID0gaXNGb3JjZWQoR0xPQkFMID8ga2V5IDogVEFSR0VUICsgKFNUQVRJQyA/ICcuJyA6ICcjJykgKyBrZXksIG9wdGlvbnMuZm9yY2VkKTtcbiAgICAvLyBjb250YWluZWQgaW4gdGFyZ2V0XG4gICAgaWYgKCFGT1JDRUQgJiYgdGFyZ2V0UHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGVvZiBzb3VyY2VQcm9wZXJ0eSA9PSB0eXBlb2YgdGFyZ2V0UHJvcGVydHkpIGNvbnRpbnVlO1xuICAgICAgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyhzb3VyY2VQcm9wZXJ0eSwgdGFyZ2V0UHJvcGVydHkpO1xuICAgIH1cbiAgICAvLyBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gICAgaWYgKG9wdGlvbnMuc2hhbSB8fCAodGFyZ2V0UHJvcGVydHkgJiYgdGFyZ2V0UHJvcGVydHkuc2hhbSkpIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShzb3VyY2VQcm9wZXJ0eSwgJ3NoYW0nLCB0cnVlKTtcbiAgICB9XG4gICAgZGVmaW5lQnVpbHRJbih0YXJnZXQsIGtleSwgc291cmNlUHJvcGVydHksIG9wdGlvbnMpO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc1Byb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBQcm90b3R5cGUpIHtcbiAgaWYgKGlzUHJvdG90eXBlT2YoUHJvdG90eXBlLCBpdCkpIHJldHVybiBpdDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0luY29ycmVjdCBpbnZvY2F0aW9uJyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEYoKSB7IC8qIGVtcHR5ICovIH1cbiAgRi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBudWxsO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldHByb3RvdHlwZW9mIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2YobmV3IEYoKSkgIT09IEYucHJvdG90eXBlO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgQ09SUkVDVF9QUk9UT1RZUEVfR0VUVEVSID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcnJlY3QtcHJvdG90eXBlLWdldHRlcicpO1xuXG52YXIgSUVfUFJPVE8gPSBzaGFyZWRLZXkoJ0lFX1BST1RPJyk7XG52YXIgJE9iamVjdCA9IE9iamVjdDtcbnZhciBPYmplY3RQcm90b3R5cGUgPSAkT2JqZWN0LnByb3RvdHlwZTtcblxuLy8gYE9iamVjdC5nZXRQcm90b3R5cGVPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRwcm90b3R5cGVvZlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRwcm90b3R5cGVvZiAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IENPUlJFQ1RfUFJPVE9UWVBFX0dFVFRFUiA/ICRPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiAoTykge1xuICB2YXIgb2JqZWN0ID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXNPd24ob2JqZWN0LCBJRV9QUk9UTykpIHJldHVybiBvYmplY3RbSUVfUFJPVE9dO1xuICB2YXIgY29uc3RydWN0b3IgPSBvYmplY3QuY29uc3RydWN0b3I7XG4gIGlmIChpc0NhbGxhYmxlKGNvbnN0cnVjdG9yKSAmJiBvYmplY3QgaW5zdGFuY2VvZiBjb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBjb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIG9iamVjdCBpbnN0YW5jZW9mICRPYmplY3QgPyBPYmplY3RQcm90b3R5cGUgOiBudWxsO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgbWFrZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWFrZS1idWlsdC1pbicpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKSB7XG4gIGlmIChkZXNjcmlwdG9yLmdldCkgbWFrZUJ1aWx0SW4oZGVzY3JpcHRvci5nZXQsIG5hbWUsIHsgZ2V0dGVyOiB0cnVlIH0pO1xuICBpZiAoZGVzY3JpcHRvci5zZXQpIG1ha2VCdWlsdEluKGRlc2NyaXB0b3Iuc2V0LCBuYW1lLCB7IHNldHRlcjogdHJ1ZSB9KTtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5LmYodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwga2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3Rba2V5XSA9IHZhbHVlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG4vLyBgT2JqZWN0LmtleXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3Qua2V5c1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1rZXlzIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1ZycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBvYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzJyk7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydGllc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0aWVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnRpZXMgLS0gc2FmZVxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgJiYgIVY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBwcm9wcyA9IHRvSW5kZXhlZE9iamVjdChQcm9wZXJ0aWVzKTtcbiAgdmFyIGtleXMgPSBvYmplY3RLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsZW5ndGggPiBpbmRleCkgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXkgPSBrZXlzW2luZGV4KytdLCBwcm9wc1trZXldKTtcbiAgcmV0dXJuIE87XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ2RvY3VtZW50JywgJ2RvY3VtZW50RWxlbWVudCcpO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGdsb2JhbCBBY3RpdmVYT2JqZWN0IC0tIG9sZCBJRSwgV1NIICovXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZGVmaW5lUHJvcGVydGllc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnRpZXMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xudmFyIGh0bWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaHRtbCcpO1xudmFyIGRvY3VtZW50Q3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG5cbnZhciBHVCA9ICc+JztcbnZhciBMVCA9ICc8JztcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBTQ1JJUFQgPSAnc2NyaXB0JztcbnZhciBJRV9QUk9UTyA9IHNoYXJlZEtleSgnSUVfUFJPVE8nKTtcblxudmFyIEVtcHR5Q29uc3RydWN0b3IgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cbnZhciBzY3JpcHRUYWcgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICByZXR1cm4gTFQgKyBTQ1JJUFQgKyBHVCArIGNvbnRlbnQgKyBMVCArICcvJyArIFNDUklQVCArIEdUO1xufTtcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIEFjdGl2ZVggT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYID0gZnVuY3Rpb24gKGFjdGl2ZVhEb2N1bWVudCkge1xuICBhY3RpdmVYRG9jdW1lbnQud3JpdGUoc2NyaXB0VGFnKCcnKSk7XG4gIGFjdGl2ZVhEb2N1bWVudC5jbG9zZSgpO1xuICB2YXIgdGVtcCA9IGFjdGl2ZVhEb2N1bWVudC5wYXJlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1hc3NpZ25tZW50IC0tIGF2b2lkIG1lbW9yeSBsZWFrXG4gIGFjdGl2ZVhEb2N1bWVudCA9IG51bGw7XG4gIHJldHVybiB0ZW1wO1xufTtcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIE51bGxQcm90b09iamVjdFZpYUlGcmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IGRvY3VtZW50Q3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gIHZhciBKUyA9ICdqYXZhJyArIFNDUklQVCArICc6JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgaHRtbC5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNDc1XG4gIGlmcmFtZS5zcmMgPSBTdHJpbmcoSlMpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKHNjcmlwdFRhZygnZG9jdW1lbnQuRj1PYmplY3QnKSk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIHJldHVybiBpZnJhbWVEb2N1bWVudC5GO1xufTtcblxuLy8gQ2hlY2sgZm9yIGRvY3VtZW50LmRvbWFpbiBhbmQgYWN0aXZlIHggc3VwcG9ydFxuLy8gTm8gbmVlZCB0byB1c2UgYWN0aXZlIHggYXBwcm9hY2ggd2hlbiBkb2N1bWVudC5kb21haW4gaXMgbm90IHNldFxuLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lcy1zaGltcy9lczUtc2hpbS9pc3N1ZXMvMTUwXG4vLyB2YXJpYXRpb24gb2YgaHR0cHM6Ly9naXRodWIuY29tL2tpdGNhbWJyaWRnZS9lczUtc2hpbS9jb21taXQvNGY3MzhhYzA2NjM0NlxuLy8gYXZvaWQgSUUgR0MgYnVnXG52YXIgYWN0aXZlWERvY3VtZW50O1xudmFyIE51bGxQcm90b09iamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICBhY3RpdmVYRG9jdW1lbnQgPSBuZXcgQWN0aXZlWE9iamVjdCgnaHRtbGZpbGUnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogaWdub3JlICovIH1cbiAgTnVsbFByb3RvT2JqZWN0ID0gdHlwZW9mIGRvY3VtZW50ICE9ICd1bmRlZmluZWQnXG4gICAgPyBkb2N1bWVudC5kb21haW4gJiYgYWN0aXZlWERvY3VtZW50XG4gICAgICA/IE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVgoYWN0aXZlWERvY3VtZW50KSAvLyBvbGQgSUVcbiAgICAgIDogTnVsbFByb3RvT2JqZWN0VmlhSUZyYW1lKClcbiAgICA6IE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVgoYWN0aXZlWERvY3VtZW50KTsgLy8gV1NIXG4gIHZhciBsZW5ndGggPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkgZGVsZXRlIE51bGxQcm90b09iamVjdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2xlbmd0aF1dO1xuICByZXR1cm4gTnVsbFByb3RvT2JqZWN0KCk7XG59O1xuXG5oaWRkZW5LZXlzW0lFX1BST1RPXSA9IHRydWU7XG5cbi8vIGBPYmplY3QuY3JlYXRlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmNyZWF0ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1jcmVhdGUgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlDb25zdHJ1Y3RvcltQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5Q29uc3RydWN0b3IoKTtcbiAgICBFbXB0eUNvbnN0cnVjdG9yW1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IE51bGxQcm90b09iamVjdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZGVmaW5lUHJvcGVydGllc01vZHVsZS5mKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZScpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4nKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgPSBmYWxzZTtcblxuLy8gYCVJdGVyYXRvclByb3RvdHlwZSVgIG9iamVjdFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy0laXRlcmF0b3Jwcm90b3R5cGUlLW9iamVjdFxudmFyIEl0ZXJhdG9yUHJvdG90eXBlLCBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUsIGFycmF5SXRlcmF0b3I7XG5cbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLWFycmF5LXByb3RvdHlwZS1rZXlzIC0tIHNhZmUgKi9cbmlmIChbXS5rZXlzKSB7XG4gIGFycmF5SXRlcmF0b3IgPSBbXS5rZXlzKCk7XG4gIC8vIFNhZmFyaSA4IGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICBpZiAoISgnbmV4dCcgaW4gYXJyYXlJdGVyYXRvcikpIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgPSB0cnVlO1xuICBlbHNlIHtcbiAgICBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZihnZXRQcm90b3R5cGVPZihhcnJheUl0ZXJhdG9yKSk7XG4gICAgaWYgKFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSkgSXRlcmF0b3JQcm90b3R5cGUgPSBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cbn1cblxudmFyIE5FV19JVEVSQVRPUl9QUk9UT1RZUEUgPSAhaXNPYmplY3QoSXRlcmF0b3JQcm90b3R5cGUpIHx8IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRlc3QgPSB7fTtcbiAgLy8gRkY0NC0gbGVnYWN5IGl0ZXJhdG9ycyBjYXNlXG4gIHJldHVybiBJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0uY2FsbCh0ZXN0KSAhPT0gdGVzdDtcbn0pO1xuXG5pZiAoTkVXX0lURVJBVE9SX1BST1RPVFlQRSkgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbmVsc2UgaWYgKElTX1BVUkUpIEl0ZXJhdG9yUHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcblxuLy8gYCVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSVpdGVyYXRvcnByb3RvdHlwZSUtQEBpdGVyYXRvclxuaWYgKCFpc0NhbGxhYmxlKEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXSkpIHtcbiAgZGVmaW5lQnVpbHRJbihJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBJdGVyYXRvclByb3RvdHlwZTogSXRlcmF0b3JQcm90b3R5cGUsXG4gIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlM6IEJVR0dZX1NBRkFSSV9JVEVSQVRPUlNcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4taW5zdGFuY2UnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YnKTtcbnZhciBkZWZpbmVCdWlsdEluQWNjZXNzb3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluLWFjY2Vzc29yJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycy1jb3JlJykuSXRlcmF0b3JQcm90b3R5cGU7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcblxudmFyIENPTlNUUlVDVE9SID0gJ2NvbnN0cnVjdG9yJztcbnZhciBJVEVSQVRPUiA9ICdJdGVyYXRvcic7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG52YXIgTmF0aXZlSXRlcmF0b3IgPSBnbG9iYWxUaGlzW0lURVJBVE9SXTtcblxuLy8gRkY1Ni0gaGF2ZSBub24tc3RhbmRhcmQgZ2xvYmFsIGhlbHBlciBgSXRlcmF0b3JgXG52YXIgRk9SQ0VEID0gSVNfUFVSRVxuICB8fCAhaXNDYWxsYWJsZShOYXRpdmVJdGVyYXRvcilcbiAgfHwgTmF0aXZlSXRlcmF0b3IucHJvdG90eXBlICE9PSBJdGVyYXRvclByb3RvdHlwZVxuICAvLyBGRjQ0LSBub24tc3RhbmRhcmQgYEl0ZXJhdG9yYCBwYXNzZXMgcHJldmlvdXMgdGVzdHNcbiAgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHsgTmF0aXZlSXRlcmF0b3Ioe30pOyB9KTtcblxudmFyIEl0ZXJhdG9yQ29uc3RydWN0b3IgPSBmdW5jdGlvbiBJdGVyYXRvcigpIHtcbiAgYW5JbnN0YW5jZSh0aGlzLCBJdGVyYXRvclByb3RvdHlwZSk7XG4gIGlmIChnZXRQcm90b3R5cGVPZih0aGlzKSA9PT0gSXRlcmF0b3JQcm90b3R5cGUpIHRocm93IG5ldyAkVHlwZUVycm9yKCdBYnN0cmFjdCBjbGFzcyBJdGVyYXRvciBub3QgZGlyZWN0bHkgY29uc3RydWN0YWJsZScpO1xufTtcblxudmFyIGRlZmluZUl0ZXJhdG9yUHJvdG90eXBlQWNjZXNzb3IgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICBpZiAoREVTQ1JJUFRPUlMpIHtcbiAgICBkZWZpbmVCdWlsdEluQWNjZXNzb3IoSXRlcmF0b3JQcm90b3R5cGUsIGtleSwge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChyZXBsYWNlbWVudCkge1xuICAgICAgICBhbk9iamVjdCh0aGlzKTtcbiAgICAgICAgaWYgKHRoaXMgPT09IEl0ZXJhdG9yUHJvdG90eXBlKSB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIllvdSBjYW4ndCByZWRlZmluZSB0aGlzIHByb3BlcnR5XCIpO1xuICAgICAgICBpZiAoaGFzT3duKHRoaXMsIGtleSkpIHRoaXNba2V5XSA9IHJlcGxhY2VtZW50O1xuICAgICAgICBlbHNlIGNyZWF0ZVByb3BlcnR5KHRoaXMsIGtleSwgcmVwbGFjZW1lbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2UgSXRlcmF0b3JQcm90b3R5cGVba2V5XSA9IHZhbHVlO1xufTtcblxuaWYgKCFoYXNPd24oSXRlcmF0b3JQcm90b3R5cGUsIFRPX1NUUklOR19UQUcpKSBkZWZpbmVJdGVyYXRvclByb3RvdHlwZUFjY2Vzc29yKFRPX1NUUklOR19UQUcsIElURVJBVE9SKTtcblxuaWYgKEZPUkNFRCB8fCAhaGFzT3duKEl0ZXJhdG9yUHJvdG90eXBlLCBDT05TVFJVQ1RPUikgfHwgSXRlcmF0b3JQcm90b3R5cGVbQ09OU1RSVUNUT1JdID09PSBPYmplY3QpIHtcbiAgZGVmaW5lSXRlcmF0b3JQcm90b3R5cGVBY2Nlc3NvcihDT05TVFJVQ1RPUiwgSXRlcmF0b3JDb25zdHJ1Y3Rvcik7XG59XG5cbkl0ZXJhdG9yQ29uc3RydWN0b3IucHJvdG90eXBlID0gSXRlcmF0b3JQcm90b3R5cGU7XG5cbi8vIGBJdGVyYXRvcmAgY29uc3RydWN0b3Jcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXRlcmF0b3JcbiQoeyBnbG9iYWw6IHRydWUsIGNvbnN0cnVjdG9yOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIEl0ZXJhdG9yOiBJdGVyYXRvckNvbnN0cnVjdG9yXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBgR2V0SXRlcmF0b3JEaXJlY3Qob2JqKWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWdldGl0ZXJhdG9yZGlyZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHtcbiAgICBpdGVyYXRvcjogb2JqLFxuICAgIG5leHQ6IG9iai5uZXh0LFxuICAgIGRvbmU6IGZhbHNlXG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNyYywgb3B0aW9ucykge1xuICBmb3IgKHZhciBrZXkgaW4gc3JjKSBkZWZpbmVCdWlsdEluKHRhcmdldCwga2V5LCBzcmNba2V5XSwgb3B0aW9ucyk7XG4gIHJldHVybiB0YXJnZXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGBDcmVhdGVJdGVyUmVzdWx0T2JqZWN0YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtY3JlYXRlaXRlcnJlc3VsdG9iamVjdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUsIGRvbmUpIHtcbiAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiBkb25lIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwga2luZCwgdmFsdWUpIHtcbiAgdmFyIGlubmVyUmVzdWx0LCBpbm5lckVycm9yO1xuICBhbk9iamVjdChpdGVyYXRvcik7XG4gIHRyeSB7XG4gICAgaW5uZXJSZXN1bHQgPSBnZXRNZXRob2QoaXRlcmF0b3IsICdyZXR1cm4nKTtcbiAgICBpZiAoIWlubmVyUmVzdWx0KSB7XG4gICAgICBpZiAoa2luZCA9PT0gJ3Rocm93JykgdGhyb3cgdmFsdWU7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGlubmVyUmVzdWx0ID0gY2FsbChpbm5lclJlc3VsdCwgaXRlcmF0b3IpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlubmVyRXJyb3IgPSB0cnVlO1xuICAgIGlubmVyUmVzdWx0ID0gZXJyb3I7XG4gIH1cbiAgaWYgKGtpbmQgPT09ICd0aHJvdycpIHRocm93IHZhbHVlO1xuICBpZiAoaW5uZXJFcnJvcikgdGhyb3cgaW5uZXJSZXN1bHQ7XG4gIGFuT2JqZWN0KGlubmVyUmVzdWx0KTtcbiAgcmV0dXJuIHZhbHVlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXRlcmF0b3JDbG9zZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1jbG9zZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVycywga2luZCwgdmFsdWUpIHtcbiAgZm9yICh2YXIgaSA9IGl0ZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgaWYgKGl0ZXJzW2ldID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xuICAgIHRyeSB7XG4gICAgICB2YWx1ZSA9IGl0ZXJhdG9yQ2xvc2UoaXRlcnNbaV0uaXRlcmF0b3IsIGtpbmQsIHZhbHVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAga2luZCA9ICd0aHJvdyc7XG4gICAgICB2YWx1ZSA9IGVycm9yO1xuICAgIH1cbiAgfVxuICBpZiAoa2luZCA9PT0gJ3Rocm93JykgdGhyb3cgdmFsdWU7XG4gIHJldHVybiB2YWx1ZTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGRlZmluZUJ1aWx0SW5zID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbnMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMtY29yZScpLkl0ZXJhdG9yUHJvdG90eXBlO1xudmFyIGNyZWF0ZUl0ZXJSZXN1bHRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLWl0ZXItcmVzdWx0LW9iamVjdCcpO1xudmFyIGl0ZXJhdG9yQ2xvc2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3ItY2xvc2UnKTtcbnZhciBpdGVyYXRvckNsb3NlQWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlLWFsbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciBJVEVSQVRPUl9IRUxQRVIgPSAnSXRlcmF0b3JIZWxwZXInO1xudmFyIFdSQVBfRk9SX1ZBTElEX0lURVJBVE9SID0gJ1dyYXBGb3JWYWxpZEl0ZXJhdG9yJztcbnZhciBOT1JNQUwgPSAnbm9ybWFsJztcbnZhciBUSFJPVyA9ICd0aHJvdyc7XG52YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuc2V0O1xuXG52YXIgY3JlYXRlSXRlcmF0b3JQcm94eVByb3RvdHlwZSA9IGZ1bmN0aW9uIChJU19JVEVSQVRPUikge1xuICB2YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0dGVyRm9yKElTX0lURVJBVE9SID8gV1JBUF9GT1JfVkFMSURfSVRFUkFUT1IgOiBJVEVSQVRPUl9IRUxQRVIpO1xuXG4gIHJldHVybiBkZWZpbmVCdWlsdElucyhjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpLCB7XG4gICAgbmV4dDogZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhpcyk7XG4gICAgICAvLyBmb3Igc2ltcGxpZmljYXRpb246XG4gICAgICAvLyAgIGZvciBgJVdyYXBGb3JWYWxpZEl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0YCBvciB3aXRoIGBzdGF0ZS5yZXR1cm5IYW5kbGVyUmVzdWx0YCBvdXIgYG5leHRIYW5kbGVyYCByZXR1cm5zIGBJdGVyUmVzdWx0T2JqZWN0YFxuICAgICAgLy8gICBmb3IgYCVJdGVyYXRvckhlbHBlclByb3RvdHlwZSUubmV4dGAgLSBqdXN0IGEgdmFsdWVcbiAgICAgIGlmIChJU19JVEVSQVRPUikgcmV0dXJuIHN0YXRlLm5leHRIYW5kbGVyKCk7XG4gICAgICBpZiAoc3RhdGUuZG9uZSkgcmV0dXJuIGNyZWF0ZUl0ZXJSZXN1bHRPYmplY3QodW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBzdGF0ZS5uZXh0SGFuZGxlcigpO1xuICAgICAgICByZXR1cm4gc3RhdGUucmV0dXJuSGFuZGxlclJlc3VsdCA/IHJlc3VsdCA6IGNyZWF0ZUl0ZXJSZXN1bHRPYmplY3QocmVzdWx0LCBzdGF0ZS5kb25lKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHN0YXRlLmRvbmUgPSB0cnVlO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cbiAgICB9LFxuICAgICdyZXR1cm4nOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpO1xuICAgICAgdmFyIGl0ZXJhdG9yID0gc3RhdGUuaXRlcmF0b3I7XG4gICAgICBzdGF0ZS5kb25lID0gdHJ1ZTtcbiAgICAgIGlmIChJU19JVEVSQVRPUikge1xuICAgICAgICB2YXIgcmV0dXJuTWV0aG9kID0gZ2V0TWV0aG9kKGl0ZXJhdG9yLCAncmV0dXJuJyk7XG4gICAgICAgIHJldHVybiByZXR1cm5NZXRob2QgPyBjYWxsKHJldHVybk1ldGhvZCwgaXRlcmF0b3IpIDogY3JlYXRlSXRlclJlc3VsdE9iamVjdCh1bmRlZmluZWQsIHRydWUpO1xuICAgICAgfVxuICAgICAgaWYgKHN0YXRlLmlubmVyKSB0cnkge1xuICAgICAgICBpdGVyYXRvckNsb3NlKHN0YXRlLmlubmVyLml0ZXJhdG9yLCBOT1JNQUwpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIFRIUk9XLCBlcnJvcik7XG4gICAgICB9XG4gICAgICBpZiAoc3RhdGUub3Blbkl0ZXJzKSB0cnkge1xuICAgICAgICBpdGVyYXRvckNsb3NlQWxsKHN0YXRlLm9wZW5JdGVycywgTk9STUFMKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBUSFJPVywgZXJyb3IpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZXJhdG9yKSBpdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBOT1JNQUwpO1xuICAgICAgcmV0dXJuIGNyZWF0ZUl0ZXJSZXN1bHRPYmplY3QodW5kZWZpbmVkLCB0cnVlKTtcbiAgICB9XG4gIH0pO1xufTtcblxudmFyIFdyYXBGb3JWYWxpZEl0ZXJhdG9yUHJvdG90eXBlID0gY3JlYXRlSXRlcmF0b3JQcm94eVByb3RvdHlwZSh0cnVlKTtcbnZhciBJdGVyYXRvckhlbHBlclByb3RvdHlwZSA9IGNyZWF0ZUl0ZXJhdG9yUHJveHlQcm90b3R5cGUoZmFsc2UpO1xuXG5jcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoSXRlcmF0b3JIZWxwZXJQcm90b3R5cGUsIFRPX1NUUklOR19UQUcsICdJdGVyYXRvciBIZWxwZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmV4dEhhbmRsZXIsIElTX0lURVJBVE9SLCBSRVRVUk5fSEFORExFUl9SRVNVTFQpIHtcbiAgdmFyIEl0ZXJhdG9yUHJveHkgPSBmdW5jdGlvbiBJdGVyYXRvcihyZWNvcmQsIHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlKSB7XG4gICAgICBzdGF0ZS5pdGVyYXRvciA9IHJlY29yZC5pdGVyYXRvcjtcbiAgICAgIHN0YXRlLm5leHQgPSByZWNvcmQubmV4dDtcbiAgICB9IGVsc2Ugc3RhdGUgPSByZWNvcmQ7XG4gICAgc3RhdGUudHlwZSA9IElTX0lURVJBVE9SID8gV1JBUF9GT1JfVkFMSURfSVRFUkFUT1IgOiBJVEVSQVRPUl9IRUxQRVI7XG4gICAgc3RhdGUucmV0dXJuSGFuZGxlclJlc3VsdCA9ICEhUkVUVVJOX0hBTkRMRVJfUkVTVUxUO1xuICAgIHN0YXRlLm5leHRIYW5kbGVyID0gbmV4dEhhbmRsZXI7XG4gICAgc3RhdGUuY291bnRlciA9IDA7XG4gICAgc3RhdGUuZG9uZSA9IGZhbHNlO1xuICAgIHNldEludGVybmFsU3RhdGUodGhpcywgc3RhdGUpO1xuICB9O1xuXG4gIEl0ZXJhdG9yUHJveHkucHJvdG90eXBlID0gSVNfSVRFUkFUT1IgPyBXcmFwRm9yVmFsaWRJdGVyYXRvclByb3RvdHlwZSA6IEl0ZXJhdG9ySGVscGVyUHJvdG90eXBlO1xuXG4gIHJldHVybiBJdGVyYXRvclByb3h5O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgaXRlcmF0b3JDbG9zZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1jbG9zZScpO1xuXG4vLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBFTlRSSUVTKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEVOVFJJRVMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCAndGhyb3cnLCBlcnJvcik7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gU2hvdWxkIHRocm93IGFuIGVycm9yIG9uIGludmFsaWQgaXRlcmF0b3Jcbi8vIGh0dHBzOi8vaXNzdWVzLmNocm9taXVtLm9yZy9pc3N1ZXMvMzM2ODM5MTE1XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChtZXRob2ROYW1lLCBhcmd1bWVudCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8taXRlcmF0b3IgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgdmFyIG1ldGhvZCA9IHR5cGVvZiBJdGVyYXRvciA9PSAnZnVuY3Rpb24nICYmIEl0ZXJhdG9yLnByb3RvdHlwZVttZXRob2ROYW1lXTtcbiAgaWYgKG1ldGhvZCkgdHJ5IHtcbiAgICBtZXRob2QuY2FsbCh7IG5leHQ6IG51bGwgfSwgYXJndW1lbnQpLm5leHQoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9lY21hMjYyL3B1bGwvMzQ2N1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUsIEV4cGVjdGVkRXJyb3IpIHtcbiAgdmFyIEl0ZXJhdG9yID0gZ2xvYmFsVGhpcy5JdGVyYXRvcjtcbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0gSXRlcmF0b3IgJiYgSXRlcmF0b3IucHJvdG90eXBlO1xuICB2YXIgbWV0aG9kID0gSXRlcmF0b3JQcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGVbTUVUSE9EX05BTUVdO1xuXG4gIHZhciBDTE9TRUQgPSBmYWxzZTtcblxuICBpZiAobWV0aG9kKSB0cnkge1xuICAgIG1ldGhvZC5jYWxsKHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyB9LFxuICAgICAgJ3JldHVybic6IGZ1bmN0aW9uICgpIHsgQ0xPU0VEID0gdHJ1ZTsgfVxuICAgIH0sIC0xKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjkxMTk1XG4gICAgaWYgKCEoZXJyb3IgaW5zdGFuY2VvZiBFeHBlY3RlZEVycm9yKSkgQ0xPU0VEID0gZmFsc2U7XG4gIH1cblxuICBpZiAoIUNMT1NFRCkgcmV0dXJuIG1ldGhvZDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBnZXRJdGVyYXRvckRpcmVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItZGlyZWN0Jyk7XG52YXIgY3JlYXRlSXRlcmF0b3JQcm94eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1jcmVhdGUtcHJveHknKTtcbnZhciBjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NhbGwtd2l0aC1zYWZlLWl0ZXJhdGlvbi1jbG9zaW5nJyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgaXRlcmF0b3JDbG9zZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1jbG9zZScpO1xudmFyIGl0ZXJhdG9ySGVscGVyVGhyb3dzT25JbnZhbGlkSXRlcmF0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3ItaGVscGVyLXRocm93cy1vbi1pbnZhbGlkLWl0ZXJhdG9yJyk7XG52YXIgaXRlcmF0b3JIZWxwZXJXaXRob3V0Q2xvc2luZ09uRWFybHlFcnJvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1oZWxwZXItd2l0aG91dC1jbG9zaW5nLW9uLWVhcmx5LWVycm9yJyk7XG5cbnZhciBGSUxURVJfV0lUSE9VVF9USFJPV0lOR19PTl9JTlZBTElEX0lURVJBVE9SID0gIUlTX1BVUkUgJiYgIWl0ZXJhdG9ySGVscGVyVGhyb3dzT25JbnZhbGlkSXRlcmF0b3IoJ2ZpbHRlcicsIGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSk7XG52YXIgZmlsdGVyV2l0aG91dENsb3NpbmdPbkVhcmx5RXJyb3IgPSAhSVNfUFVSRSAmJiAhRklMVEVSX1dJVEhPVVRfVEhST1dJTkdfT05fSU5WQUxJRF9JVEVSQVRPUlxuICAmJiBpdGVyYXRvckhlbHBlcldpdGhvdXRDbG9zaW5nT25FYXJseUVycm9yKCdmaWx0ZXInLCBUeXBlRXJyb3IpO1xuXG52YXIgRk9SQ0VEID0gSVNfUFVSRSB8fCBGSUxURVJfV0lUSE9VVF9USFJPV0lOR19PTl9JTlZBTElEX0lURVJBVE9SIHx8IGZpbHRlcldpdGhvdXRDbG9zaW5nT25FYXJseUVycm9yO1xuXG52YXIgSXRlcmF0b3JQcm94eSA9IGNyZWF0ZUl0ZXJhdG9yUHJveHkoZnVuY3Rpb24gKCkge1xuICB2YXIgaXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yO1xuICB2YXIgcHJlZGljYXRlID0gdGhpcy5wcmVkaWNhdGU7XG4gIHZhciBuZXh0ID0gdGhpcy5uZXh0O1xuICB2YXIgcmVzdWx0LCBkb25lLCB2YWx1ZTtcbiAgd2hpbGUgKHRydWUpIHtcbiAgICByZXN1bHQgPSBhbk9iamVjdChjYWxsKG5leHQsIGl0ZXJhdG9yKSk7XG4gICAgZG9uZSA9IHRoaXMuZG9uZSA9ICEhcmVzdWx0LmRvbmU7XG4gICAgaWYgKGRvbmUpIHJldHVybjtcbiAgICB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICBpZiAoY2FsbFdpdGhTYWZlSXRlcmF0aW9uQ2xvc2luZyhpdGVyYXRvciwgcHJlZGljYXRlLCBbdmFsdWUsIHRoaXMuY291bnRlcisrXSwgdHJ1ZSkpIHJldHVybiB2YWx1ZTtcbiAgfVxufSk7XG5cbi8vIGBJdGVyYXRvci5wcm90b3R5cGUuZmlsdGVyYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXRlcmF0b3IucHJvdG90eXBlLmZpbHRlclxuJCh7IHRhcmdldDogJ0l0ZXJhdG9yJywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgZmlsdGVyOiBmdW5jdGlvbiBmaWx0ZXIocHJlZGljYXRlKSB7XG4gICAgYW5PYmplY3QodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGFDYWxsYWJsZShwcmVkaWNhdGUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpdGVyYXRvckNsb3NlKHRoaXMsICd0aHJvdycsIGVycm9yKTtcbiAgICB9XG5cbiAgICBpZiAoZmlsdGVyV2l0aG91dENsb3NpbmdPbkVhcmx5RXJyb3IpIHJldHVybiBjYWxsKGZpbHRlcldpdGhvdXRDbG9zaW5nT25FYXJseUVycm9yLCB0aGlzLCBwcmVkaWNhdGUpO1xuXG4gICAgcmV0dXJuIG5ldyBJdGVyYXRvclByb3h5KGdldEl0ZXJhdG9yRGlyZWN0KHRoaXMpLCB7XG4gICAgICBwcmVkaWNhdGU6IHByZWRpY2F0ZVxuICAgIH0pO1xuICB9XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2xhc3NvZlJhdyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbikge1xuICAvLyBOYXNob3JuIGJ1ZzpcbiAgLy8gICBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTEyOFxuICAvLyAgIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xMTMwXG4gIGlmIChjbGFzc29mUmF3KGZuKSA9PT0gJ0Z1bmN0aW9uJykgcmV0dXJuIHVuY3VycnlUaGlzKGZuKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy1jbGF1c2UnKTtcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBiaW5kID0gdW5jdXJyeVRoaXModW5jdXJyeVRoaXMuYmluZCk7XG5cbi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQpIHtcbiAgYUNhbGxhYmxlKGZuKTtcbiAgcmV0dXJuIHRoYXQgPT09IHVuZGVmaW5lZCA/IGZuIDogTkFUSVZFX0JJTkQgPyBiaW5kKGZuLCB0aGF0KSA6IGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG90eXBlID0gQXJyYXkucHJvdG90eXBlO1xuXG4vLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvdHlwZVtJVEVSQVRPUl0gPT09IGl0KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciB0ZXN0ID0ge307XG5cbnRlc3RbVE9fU1RSSU5HX1RBR10gPSAneic7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RyaW5nKHRlc3QpID09PSAnW29iamVjdCB6XSc7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIFRPX1NUUklOR19UQUdfU1VQUE9SVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgY2xhc3NvZlJhdyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIENPUlJFQ1RfQVJHVU1FTlRTID0gY2xhc3NvZlJhdyhmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbi8vIGdldHRpbmcgdGFnIGZyb20gRVM2KyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2Bcbm1vZHVsZS5leHBvcnRzID0gVE9fU1RSSU5HX1RBR19TVVBQT1JUID8gY2xhc3NvZlJhdyA6IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgdGFnLCByZXN1bHQ7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mICh0YWcgPSB0cnlHZXQoTyA9ICRPYmplY3QoaXQpLCBUT19TVFJJTkdfVEFHKSkgPT0gJ3N0cmluZycgPyB0YWdcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IENPUlJFQ1RfQVJHVU1FTlRTID8gY2xhc3NvZlJhdyhPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChyZXN1bHQgPSBjbGFzc29mUmF3KE8pKSA9PT0gJ09iamVjdCcgJiYgaXNDYWxsYWJsZShPLmNhbGxlZSkgPyAnQXJndW1lbnRzJyA6IHJlc3VsdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZicpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc051bGxPclVuZGVmaW5lZChpdCkpIHJldHVybiBnZXRNZXRob2QoaXQsIElURVJBVE9SKVxuICAgIHx8IGdldE1ldGhvZChpdCwgJ0BAaXRlcmF0b3InKVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRyeVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RyeS10by1zdHJpbmcnKTtcbnZhciBnZXRJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCwgdXNpbmdJdGVyYXRvcikge1xuICB2YXIgaXRlcmF0b3JNZXRob2QgPSBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGdldEl0ZXJhdG9yTWV0aG9kKGFyZ3VtZW50KSA6IHVzaW5nSXRlcmF0b3I7XG4gIGlmIChhQ2FsbGFibGUoaXRlcmF0b3JNZXRob2QpKSByZXR1cm4gYW5PYmplY3QoY2FsbChpdGVyYXRvck1ldGhvZCwgYXJndW1lbnQpKTtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IodHJ5VG9TdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgaXRlcmFibGUnKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xudmFyIGlzQXJyYXlJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheS1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xudmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZicpO1xudmFyIGdldEl0ZXJhdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvcicpO1xudmFyIGdldEl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBpdGVyYXRvckNsb3NlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG52YXIgUmVzdWx0ID0gZnVuY3Rpb24gKHN0b3BwZWQsIHJlc3VsdCkge1xuICB0aGlzLnN0b3BwZWQgPSBzdG9wcGVkO1xuICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcbn07XG5cbnZhciBSZXN1bHRQcm90b3R5cGUgPSBSZXN1bHQucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgdW5ib3VuZEZ1bmN0aW9uLCBvcHRpb25zKSB7XG4gIHZhciB0aGF0ID0gb3B0aW9ucyAmJiBvcHRpb25zLnRoYXQ7XG4gIHZhciBBU19FTlRSSUVTID0gISEob3B0aW9ucyAmJiBvcHRpb25zLkFTX0VOVFJJRVMpO1xuICB2YXIgSVNfUkVDT1JEID0gISEob3B0aW9ucyAmJiBvcHRpb25zLklTX1JFQ09SRCk7XG4gIHZhciBJU19JVEVSQVRPUiA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5JU19JVEVSQVRPUik7XG4gIHZhciBJTlRFUlJVUFRFRCA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5JTlRFUlJVUFRFRCk7XG4gIHZhciBmbiA9IGJpbmQodW5ib3VuZEZ1bmN0aW9uLCB0aGF0KTtcbiAgdmFyIGl0ZXJhdG9yLCBpdGVyRm4sIGluZGV4LCBsZW5ndGgsIHJlc3VsdCwgbmV4dCwgc3RlcDtcblxuICB2YXIgc3RvcCA9IGZ1bmN0aW9uIChjb25kaXRpb24pIHtcbiAgICBpZiAoaXRlcmF0b3IpIGl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsICdub3JtYWwnKTtcbiAgICByZXR1cm4gbmV3IFJlc3VsdCh0cnVlLCBjb25kaXRpb24pO1xuICB9O1xuXG4gIHZhciBjYWxsRm4gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoQVNfRU5UUklFUykge1xuICAgICAgYW5PYmplY3QodmFsdWUpO1xuICAgICAgcmV0dXJuIElOVEVSUlVQVEVEID8gZm4odmFsdWVbMF0sIHZhbHVlWzFdLCBzdG9wKSA6IGZuKHZhbHVlWzBdLCB2YWx1ZVsxXSk7XG4gICAgfSByZXR1cm4gSU5URVJSVVBURUQgPyBmbih2YWx1ZSwgc3RvcCkgOiBmbih2YWx1ZSk7XG4gIH07XG5cbiAgaWYgKElTX1JFQ09SRCkge1xuICAgIGl0ZXJhdG9yID0gaXRlcmFibGUuaXRlcmF0b3I7XG4gIH0gZWxzZSBpZiAoSVNfSVRFUkFUT1IpIHtcbiAgICBpdGVyYXRvciA9IGl0ZXJhYmxlO1xuICB9IGVsc2Uge1xuICAgIGl0ZXJGbiA9IGdldEl0ZXJhdG9yTWV0aG9kKGl0ZXJhYmxlKTtcbiAgICBpZiAoIWl0ZXJGbikgdGhyb3cgbmV3ICRUeXBlRXJyb3IodHJ5VG9TdHJpbmcoaXRlcmFibGUpICsgJyBpcyBub3QgaXRlcmFibGUnKTtcbiAgICAvLyBvcHRpbWlzYXRpb24gZm9yIGFycmF5IGl0ZXJhdG9yc1xuICAgIGlmIChpc0FycmF5SXRlcmF0b3JNZXRob2QoaXRlckZuKSkge1xuICAgICAgZm9yIChpbmRleCA9IDAsIGxlbmd0aCA9IGxlbmd0aE9mQXJyYXlMaWtlKGl0ZXJhYmxlKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgICAgcmVzdWx0ID0gY2FsbEZuKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgICAgIGlmIChyZXN1bHQgJiYgaXNQcm90b3R5cGVPZihSZXN1bHRQcm90b3R5cGUsIHJlc3VsdCkpIHJldHVybiByZXN1bHQ7XG4gICAgICB9IHJldHVybiBuZXcgUmVzdWx0KGZhbHNlKTtcbiAgICB9XG4gICAgaXRlcmF0b3IgPSBnZXRJdGVyYXRvcihpdGVyYWJsZSwgaXRlckZuKTtcbiAgfVxuXG4gIG5leHQgPSBJU19SRUNPUkQgPyBpdGVyYWJsZS5uZXh0IDogaXRlcmF0b3IubmV4dDtcbiAgd2hpbGUgKCEoc3RlcCA9IGNhbGwobmV4dCwgaXRlcmF0b3IpKS5kb25lKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9IGNhbGxGbihzdGVwLnZhbHVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaXRlcmF0b3JDbG9zZShpdGVyYXRvciwgJ3Rocm93JywgZXJyb3IpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHJlc3VsdCA9PSAnb2JqZWN0JyAmJiByZXN1bHQgJiYgaXNQcm90b3R5cGVPZihSZXN1bHRQcm90b3R5cGUsIHJlc3VsdCkpIHJldHVybiByZXN1bHQ7XG4gIH0gcmV0dXJuIG5ldyBSZXN1bHQoZmFsc2UpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpdGVyYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdGUnKTtcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGdldEl0ZXJhdG9yRGlyZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvci1kaXJlY3QnKTtcbnZhciBpdGVyYXRvckNsb3NlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlJyk7XG52YXIgaXRlcmF0b3JIZWxwZXJXaXRob3V0Q2xvc2luZ09uRWFybHlFcnJvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1oZWxwZXItd2l0aG91dC1jbG9zaW5nLW9uLWVhcmx5LWVycm9yJyk7XG5cbnZhciBmb3JFYWNoV2l0aG91dENsb3NpbmdPbkVhcmx5RXJyb3IgPSBpdGVyYXRvckhlbHBlcldpdGhvdXRDbG9zaW5nT25FYXJseUVycm9yKCdmb3JFYWNoJywgVHlwZUVycm9yKTtcblxuLy8gYEl0ZXJhdG9yLnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXRlcmF0b3IucHJvdG90eXBlLmZvcmVhY2hcbiQoeyB0YXJnZXQ6ICdJdGVyYXRvcicsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6IGZvckVhY2hXaXRob3V0Q2xvc2luZ09uRWFybHlFcnJvciB9LCB7XG4gIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgICBhbk9iamVjdCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgYUNhbGxhYmxlKGZuKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaXRlcmF0b3JDbG9zZSh0aGlzLCAndGhyb3cnLCBlcnJvcik7XG4gICAgfVxuXG4gICAgaWYgKGZvckVhY2hXaXRob3V0Q2xvc2luZ09uRWFybHlFcnJvcikgcmV0dXJuIGNhbGwoZm9yRWFjaFdpdGhvdXRDbG9zaW5nT25FYXJseUVycm9yLCB0aGlzLCBmbik7XG5cbiAgICB2YXIgcmVjb3JkID0gZ2V0SXRlcmF0b3JEaXJlY3QodGhpcyk7XG4gICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgIGl0ZXJhdGUocmVjb3JkLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGZuKHZhbHVlLCBjb3VudGVyKyspO1xuICAgIH0sIHsgSVNfUkVDT1JEOiB0cnVlIH0pO1xuICB9XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGdldEl0ZXJhdG9yRGlyZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvci1kaXJlY3QnKTtcbnZhciBjcmVhdGVJdGVyYXRvclByb3h5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWNyZWF0ZS1wcm94eScpO1xudmFyIGNhbGxXaXRoU2FmZUl0ZXJhdGlvbkNsb3NpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2FsbC13aXRoLXNhZmUtaXRlcmF0aW9uLWNsb3NpbmcnKTtcbnZhciBpdGVyYXRvckNsb3NlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlJyk7XG52YXIgaXRlcmF0b3JIZWxwZXJUaHJvd3NPbkludmFsaWRJdGVyYXRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1oZWxwZXItdGhyb3dzLW9uLWludmFsaWQtaXRlcmF0b3InKTtcbnZhciBpdGVyYXRvckhlbHBlcldpdGhvdXRDbG9zaW5nT25FYXJseUVycm9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWhlbHBlci13aXRob3V0LWNsb3Npbmctb24tZWFybHktZXJyb3InKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcblxudmFyIE1BUF9XSVRIT1VUX1RIUk9XSU5HX09OX0lOVkFMSURfSVRFUkFUT1IgPSAhSVNfUFVSRSAmJiAhaXRlcmF0b3JIZWxwZXJUaHJvd3NPbkludmFsaWRJdGVyYXRvcignbWFwJywgZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KTtcbnZhciBtYXBXaXRob3V0Q2xvc2luZ09uRWFybHlFcnJvciA9ICFJU19QVVJFICYmICFNQVBfV0lUSE9VVF9USFJPV0lOR19PTl9JTlZBTElEX0lURVJBVE9SXG4gICYmIGl0ZXJhdG9ySGVscGVyV2l0aG91dENsb3NpbmdPbkVhcmx5RXJyb3IoJ21hcCcsIFR5cGVFcnJvcik7XG5cbnZhciBGT1JDRUQgPSBJU19QVVJFIHx8IE1BUF9XSVRIT1VUX1RIUk9XSU5HX09OX0lOVkFMSURfSVRFUkFUT1IgfHwgbWFwV2l0aG91dENsb3NpbmdPbkVhcmx5RXJyb3I7XG5cbnZhciBJdGVyYXRvclByb3h5ID0gY3JlYXRlSXRlcmF0b3JQcm94eShmdW5jdGlvbiAoKSB7XG4gIHZhciBpdGVyYXRvciA9IHRoaXMuaXRlcmF0b3I7XG4gIHZhciByZXN1bHQgPSBhbk9iamVjdChjYWxsKHRoaXMubmV4dCwgaXRlcmF0b3IpKTtcbiAgdmFyIGRvbmUgPSB0aGlzLmRvbmUgPSAhIXJlc3VsdC5kb25lO1xuICBpZiAoIWRvbmUpIHJldHVybiBjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nKGl0ZXJhdG9yLCB0aGlzLm1hcHBlciwgW3Jlc3VsdC52YWx1ZSwgdGhpcy5jb3VudGVyKytdLCB0cnVlKTtcbn0pO1xuXG4vLyBgSXRlcmF0b3IucHJvdG90eXBlLm1hcGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWl0ZXJhdG9yLnByb3RvdHlwZS5tYXBcbiQoeyB0YXJnZXQ6ICdJdGVyYXRvcicsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIG1hcDogZnVuY3Rpb24gbWFwKG1hcHBlcikge1xuICAgIGFuT2JqZWN0KHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBhQ2FsbGFibGUobWFwcGVyKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaXRlcmF0b3JDbG9zZSh0aGlzLCAndGhyb3cnLCBlcnJvcik7XG4gICAgfVxuXG4gICAgaWYgKG1hcFdpdGhvdXRDbG9zaW5nT25FYXJseUVycm9yKSByZXR1cm4gY2FsbChtYXBXaXRob3V0Q2xvc2luZ09uRWFybHlFcnJvciwgdGhpcywgbWFwcGVyKTtcblxuICAgIHJldHVybiBuZXcgSXRlcmF0b3JQcm94eShnZXRJdGVyYXRvckRpcmVjdCh0aGlzKSwge1xuICAgICAgbWFwcGVyOiBtYXBwZXJcbiAgICB9KTtcbiAgfVxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBhcHBseSA9IEZ1bmN0aW9uUHJvdG90eXBlLmFwcGx5O1xudmFyIGNhbGwgPSBGdW5jdGlvblByb3RvdHlwZS5jYWxsO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZnVuY3Rpb24tcHJvdG90eXBlLWJpbmQsIGVzL25vLXJlZmxlY3QgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgUmVmbGVjdCA9PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmFwcGx5IHx8IChOQVRJVkVfQklORCA/IGNhbGwuYmluZChhcHBseSkgOiBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBjYWxsLmFwcGx5KGFwcGx5LCBhcmd1bWVudHMpO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgaXRlcmF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRlJyk7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBnZXRJdGVyYXRvckRpcmVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItZGlyZWN0Jyk7XG52YXIgaXRlcmF0b3JDbG9zZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1jbG9zZScpO1xudmFyIGl0ZXJhdG9ySGVscGVyV2l0aG91dENsb3NpbmdPbkVhcmx5RXJyb3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3ItaGVscGVyLXdpdGhvdXQtY2xvc2luZy1vbi1lYXJseS1lcnJvcicpO1xudmFyIGFwcGx5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWFwcGx5Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yOTE2NTFcbnZhciBGQUlMU19PTl9JTklUSUFMX1VOREVGSU5FRCA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWl0ZXJhdG9yLXByb3RvdHlwZS1yZWR1Y2UsIGVzL25vLWFycmF5LXByb3RvdHlwZS1rZXlzLCBhcnJheS1jYWxsYmFjay1yZXR1cm4gLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgW10ua2V5cygpLnJlZHVjZShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sIHVuZGVmaW5lZCk7XG59KTtcblxudmFyIHJlZHVjZVdpdGhvdXRDbG9zaW5nT25FYXJseUVycm9yID0gIUZBSUxTX09OX0lOSVRJQUxfVU5ERUZJTkVEICYmIGl0ZXJhdG9ySGVscGVyV2l0aG91dENsb3NpbmdPbkVhcmx5RXJyb3IoJ3JlZHVjZScsICRUeXBlRXJyb3IpO1xuXG4vLyBgSXRlcmF0b3IucHJvdG90eXBlLnJlZHVjZWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWl0ZXJhdG9yLnByb3RvdHlwZS5yZWR1Y2VcbiQoeyB0YXJnZXQ6ICdJdGVyYXRvcicsIHByb3RvOiB0cnVlLCByZWFsOiB0cnVlLCBmb3JjZWQ6IEZBSUxTX09OX0lOSVRJQUxfVU5ERUZJTkVEIHx8IHJlZHVjZVdpdGhvdXRDbG9zaW5nT25FYXJseUVycm9yIH0sIHtcbiAgcmVkdWNlOiBmdW5jdGlvbiByZWR1Y2UocmVkdWNlciAvKiAsIGluaXRpYWxWYWx1ZSAqLykge1xuICAgIGFuT2JqZWN0KHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBhQ2FsbGFibGUocmVkdWNlcik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGl0ZXJhdG9yQ2xvc2UodGhpcywgJ3Rocm93JywgZXJyb3IpO1xuICAgIH1cblxuICAgIHZhciBub0luaXRpYWwgPSBhcmd1bWVudHMubGVuZ3RoIDwgMjtcbiAgICB2YXIgYWNjdW11bGF0b3IgPSBub0luaXRpYWwgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMV07XG4gICAgaWYgKHJlZHVjZVdpdGhvdXRDbG9zaW5nT25FYXJseUVycm9yKSB7XG4gICAgICByZXR1cm4gYXBwbHkocmVkdWNlV2l0aG91dENsb3NpbmdPbkVhcmx5RXJyb3IsIHRoaXMsIG5vSW5pdGlhbCA/IFtyZWR1Y2VyXSA6IFtyZWR1Y2VyLCBhY2N1bXVsYXRvcl0pO1xuICAgIH1cbiAgICB2YXIgcmVjb3JkID0gZ2V0SXRlcmF0b3JEaXJlY3QodGhpcyk7XG4gICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgIGl0ZXJhdGUocmVjb3JkLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmIChub0luaXRpYWwpIHtcbiAgICAgICAgbm9Jbml0aWFsID0gZmFsc2U7XG4gICAgICAgIGFjY3VtdWxhdG9yID0gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY2N1bXVsYXRvciA9IHJlZHVjZXIoYWNjdW11bGF0b3IsIHZhbHVlLCBjb3VudGVyKTtcbiAgICAgIH1cbiAgICAgIGNvdW50ZXIrKztcbiAgICB9LCB7IElTX1JFQ09SRDogdHJ1ZSB9KTtcbiAgICBpZiAobm9Jbml0aWFsKSB0aHJvdyBuZXcgJFR5cGVFcnJvcignUmVkdWNlIG9mIGVtcHR5IGl0ZXJhdG9yIHdpdGggbm8gaW5pdGlhbCB2YWx1ZScpO1xuICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgfVxufSk7XG4iLCAiLy8g5aaC5p6c5L2/55SoIGpzeC1kb23vvIzliJnlj5bmtojms6jph4rku6XkuIvooYwgLyBUbyBVc2UganN4LWRvbSwgdW5jb21tZW50IHRoZSBmb2xsb3dpbmcgbGluZVxuZXhwb3J0ICogZnJvbSAnanN4LWRvbSc7XG4iLCAiLyogZXNsaW50LWRpc2FibGUgKi9cbmNvbnN0IGtleXMgPSBPYmplY3Qua2V5cztcbmZ1bmN0aW9uIGlkZW50aXR5KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGlzQm9vbGVhbih2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09IFwiYm9vbGVhblwiO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KHZhbCkge1xuICByZXR1cm4gdmFsICYmIHR5cGVvZiB2YWwubm9kZVR5cGUgPT09IFwibnVtYmVyXCI7XG59XG5mdW5jdGlvbiBpc1N0cmluZyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCI7XG59XG5mdW5jdGlvbiBpc051bWJlcih2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCI7XG59XG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCIgPyB2YWwgIT09IG51bGwgOiBpc0Z1bmN0aW9uKHZhbCk7XG59XG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gXCJmdW5jdGlvblwiO1xufVxuZnVuY3Rpb24gaXNDb21wb25lbnRDbGFzcyhDb21wb25lbnQpIHtcbiAgcmV0dXJuICEhKENvbXBvbmVudCAmJiBDb21wb25lbnQuaXNDb21wb25lbnQpO1xufVxuZnVuY3Rpb24gaXNBcnJheUxpa2Uob2JqKSB7XG4gIHJldHVybiAoXG4gICAgaXNPYmplY3Qob2JqKSAmJlxuICAgIHR5cGVvZiBvYmoubGVuZ3RoID09PSBcIm51bWJlclwiICYmXG4gICAgdHlwZW9mIG9iai5ub2RlVHlwZSAhPT0gXCJudW1iZXJcIlxuICApO1xufVxuZnVuY3Rpb24gZm9yRWFjaCh2YWx1ZSwgZm4pIHtcbiAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xuICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKHZhbHVlKSkge1xuICAgIGZuKHZhbHVlW2tleV0sIGtleSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlUmVmKCkge1xuICByZXR1cm4gT2JqZWN0LnNlYWwoe1xuICAgIGN1cnJlbnQ6IG51bGwsXG4gIH0pO1xufVxuZnVuY3Rpb24gaXNSZWYobWF5YmVSZWYpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KG1heWJlUmVmKSAmJiBcImN1cnJlbnRcIiBpbiBtYXliZVJlZjtcbn1cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBvblxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvYjg3YWFiZGZlMWI3NDYxZTczMzFhYmIzNjAxZDllNmJiMjc1NDRiYy9MSUNFTlNFXG4gKi9cblxuLyoqXG4gKiBDU1MgcHJvcGVydGllcyB3aGljaCBhY2NlcHQgbnVtYmVycyBidXQgYXJlIG5vdCBpbiB1bml0cyBvZiBcInB4XCIuXG4gKi9cbmNvbnN0IGlzVW5pdGxlc3NOdW1iZXIgPSB7XG4gIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiAwLFxuICBib3JkZXJJbWFnZU91dHNldDogMCxcbiAgYm9yZGVySW1hZ2VTbGljZTogMCxcbiAgYm9yZGVySW1hZ2VXaWR0aDogMCxcbiAgYm94RmxleDogMCxcbiAgYm94RmxleEdyb3VwOiAwLFxuICBib3hPcmRpbmFsR3JvdXA6IDAsXG4gIGNvbHVtbkNvdW50OiAwLFxuICBjb2x1bW5zOiAwLFxuICBmbGV4OiAwLFxuICBmbGV4R3JvdzogMCxcbiAgZmxleFBvc2l0aXZlOiAwLFxuICBmbGV4U2hyaW5rOiAwLFxuICBmbGV4TmVnYXRpdmU6IDAsXG4gIGZsZXhPcmRlcjogMCxcbiAgZ3JpZEFyZWE6IDAsXG4gIGdyaWRSb3c6IDAsXG4gIGdyaWRSb3dFbmQ6IDAsXG4gIGdyaWRSb3dTcGFuOiAwLFxuICBncmlkUm93U3RhcnQ6IDAsXG4gIGdyaWRDb2x1bW46IDAsXG4gIGdyaWRDb2x1bW5FbmQ6IDAsXG4gIGdyaWRDb2x1bW5TcGFuOiAwLFxuICBncmlkQ29sdW1uU3RhcnQ6IDAsXG4gIGZvbnRXZWlnaHQ6IDAsXG4gIGxpbmVDbGFtcDogMCxcbiAgbGluZUhlaWdodDogMCxcbiAgb3BhY2l0eTogMCxcbiAgb3JkZXI6IDAsXG4gIG9ycGhhbnM6IDAsXG4gIHRhYlNpemU6IDAsXG4gIHdpZG93czogMCxcbiAgekluZGV4OiAwLFxuICB6b29tOiAwLFxuICAvLyBTVkctcmVsYXRlZCBwcm9wZXJ0aWVzXG4gIGZpbGxPcGFjaXR5OiAwLFxuICBmbG9vZE9wYWNpdHk6IDAsXG4gIHN0b3BPcGFjaXR5OiAwLFxuICBzdHJva2VEYXNoYXJyYXk6IDAsXG4gIHN0cm9rZURhc2hvZmZzZXQ6IDAsXG4gIHN0cm9rZU1pdGVybGltaXQ6IDAsXG4gIHN0cm9rZU9wYWNpdHk6IDAsXG4gIHN0cm9rZVdpZHRoOiAwLFxufTtcblxuLyoqXG4gKiBAcGFyYW0gcHJlZml4IHZlbmRvci1zcGVjaWZpYyBwcmVmaXgsIGVnOiBXZWJraXRcbiAqIEBwYXJhbSBrZXkgc3R5bGUgbmFtZSwgZWc6IHRyYW5zaXRpb25EdXJhdGlvblxuICogQHJldHVybiBzdHlsZSBuYW1lIHByZWZpeGVkIHdpdGggYHByZWZpeGAsIHByb3Blcmx5IGNhbWVsQ2FzZWQsIGVnOlxuICogV2Via2l0VHJhbnNpdGlvbkR1cmF0aW9uXG4gKi9cbmZ1bmN0aW9uIHByZWZpeEtleShwcmVmaXgsIGtleSkge1xuICByZXR1cm4gcHJlZml4ICsga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnN1YnN0cmluZygxKTtcbn1cblxuLyoqXG4gKiBTdXBwb3J0IHN0eWxlIG5hbWVzIHRoYXQgbWF5IGNvbWUgcGFzc2VkIGluIHByZWZpeGVkIGJ5IGFkZGluZyBwZXJtdXRhdGlvbnNcbiAqIG9mIHZlbmRvciBwcmVmaXhlcy5cbiAqL1xuY29uc3QgcHJlZml4ZXMgPSBbXCJXZWJraXRcIiwgXCJtc1wiLCBcIk1velwiLCBcIk9cIl07XG4vLyBVc2luZyBPYmplY3Qua2V5cyBoZXJlLCBvciBlbHNlIHRoZSB2YW5pbGxhIGZvci1pbiBsb29wIG1ha2VzIElFOCBnbyBpbnRvIGFuXG4vLyBpbmZpbml0ZSBsb29wLCBiZWNhdXNlIGl0IGl0ZXJhdGVzIG92ZXIgdGhlIG5ld2x5IGFkZGVkIHByb3BzIHRvby5cbmtleXMoaXNVbml0bGVzc051bWJlcikuZm9yRWFjaCgocHJvcCkgPT4ge1xuICBwcmVmaXhlcy5mb3JFYWNoKChwcmVmaXgpID0+IHtcbiAgICBpc1VuaXRsZXNzTnVtYmVyW3ByZWZpeEtleShwcmVmaXgsIHByb3ApXSA9IDA7IC8vIGlzVW5pdGxlc3NOdW1iZXJbcHJvcF1cbiAgfSk7XG59KTtcblxuY29uc3QganN4RG9tVHlwZSA9IFN5bWJvbC5mb3IoXCJqc3gtZG9tOnR5cGVcIik7XG52YXIgSnN4RG9tVHlwZSA9IC8qI19fUFVSRV9fKi8gKGZ1bmN0aW9uIChKc3hEb21UeXBlKSB7XG4gIEpzeERvbVR5cGVbXCJTaGFkb3dSb290XCJdID0gXCJTaGFkb3dSb290XCI7XG4gIHJldHVybiBKc3hEb21UeXBlO1xufSkoSnN4RG9tVHlwZSB8fCB7fSk7XG5mdW5jdGlvbiBTaGFkb3dSb290KF9yZWYpIHtcbiAgbGV0IHsgY2hpbGRyZW4sIHJlZiwgLi4uYXR0ciB9ID0gX3JlZjtcbiAgcmV0dXJuIHtcbiAgICBbanN4RG9tVHlwZV06IEpzeERvbVR5cGUuU2hhZG93Um9vdCxcbiAgICByZWYsXG4gICAgYXR0cixcbiAgICBjaGlsZHJlbixcbiAgfTtcbn1cbmZ1bmN0aW9uIGlzU2hhZG93Um9vdChlbCkge1xuICByZXR1cm4gZWwgIT0gbnVsbCAmJiBlbFtqc3hEb21UeXBlXSA9PT0gSnN4RG9tVHlwZS5TaGFkb3dSb290O1xufVxuXG5jb25zdCBTVkdOYW1lc3BhY2UgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XG5jb25zdCBYTGlua05hbWVzcGFjZSA9IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiO1xuY29uc3QgWE1MTmFtZXNwYWNlID0gXCJodHRwOi8vd3d3LnczLm9yZy9YTUwvMTk5OC9uYW1lc3BhY2VcIjtcblxuLy8gaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy9qc3gtaW4tZGVwdGguaHRtbCNib29sZWFucy1udWxsLWFuZC11bmRlZmluZWQtYXJlLWlnbm9yZWRcbi8vIEVtdWxhdGUgSlNYIEV4cHJlc3Npb24gbG9naWMgdG8gaWdub3JlIGNlcnRhaW4gdHlwZSBvZiBjaGlsZHJlbiBvciBjbGFzc05hbWUuXG5mdW5jdGlvbiBpc1Zpc2libGVDaGlsZCh2YWx1ZSkge1xuICByZXR1cm4gIWlzQm9vbGVhbih2YWx1ZSkgJiYgdmFsdWUgIT0gbnVsbDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgYHZhbHVlYCB0byBhIGNsYXNzTmFtZSBzdHJpbmcuXG4gKiBgdmFsdWVgIGNhbiBiZSBhIHN0cmluZywgYW4gYXJyYXkgb3IgYSBgRGljdGlvbmFyeTxib29sZWFuPmAuXG4gKi9cbmZ1bmN0aW9uIGNsYXNzTmFtZSh2YWx1ZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWUubWFwKGNsYXNzTmFtZSkuZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpO1xuICB9IGVsc2UgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gdmFsdWUpIHtcbiAgICAgIHJldHVybiBjbGFzc05hbWUoQXJyYXkuZnJvbSh2YWx1ZSkpO1xuICAgIH1cbiAgICByZXR1cm4ga2V5cyh2YWx1ZSlcbiAgICAgIC5maWx0ZXIoKGspID0+IHZhbHVlW2tdKVxuICAgICAgLmpvaW4oXCIgXCIpO1xuICB9IGVsc2UgaWYgKGlzVmlzaWJsZUNoaWxkKHZhbHVlKSkge1xuICAgIHJldHVybiBcIlwiICsgdmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cbn1cbmNvbnN0IHN2ZyA9IHtcbiAgYW5pbWF0ZTogMCxcbiAgY2lyY2xlOiAwLFxuICBjbGlwUGF0aDogMCxcbiAgZGVmczogMCxcbiAgZGVzYzogMCxcbiAgZWxsaXBzZTogMCxcbiAgZmVCbGVuZDogMCxcbiAgZmVDb2xvck1hdHJpeDogMCxcbiAgZmVDb21wb25lbnRUcmFuc2ZlcjogMCxcbiAgZmVDb21wb3NpdGU6IDAsXG4gIGZlQ29udm9sdmVNYXRyaXg6IDAsXG4gIGZlRGlmZnVzZUxpZ2h0aW5nOiAwLFxuICBmZURpc3BsYWNlbWVudE1hcDogMCxcbiAgZmVEaXN0YW50TGlnaHQ6IDAsXG4gIGZlRmxvb2Q6IDAsXG4gIGZlRnVuY0E6IDAsXG4gIGZlRnVuY0I6IDAsXG4gIGZlRnVuY0c6IDAsXG4gIGZlRnVuY1I6IDAsXG4gIGZlR2F1c3NpYW5CbHVyOiAwLFxuICBmZUltYWdlOiAwLFxuICBmZU1lcmdlOiAwLFxuICBmZU1lcmdlTm9kZTogMCxcbiAgZmVNb3JwaG9sb2d5OiAwLFxuICBmZU9mZnNldDogMCxcbiAgZmVQb2ludExpZ2h0OiAwLFxuICBmZVNwZWN1bGFyTGlnaHRpbmc6IDAsXG4gIGZlU3BvdExpZ2h0OiAwLFxuICBmZVRpbGU6IDAsXG4gIGZlVHVyYnVsZW5jZTogMCxcbiAgZmlsdGVyOiAwLFxuICBmb3JlaWduT2JqZWN0OiAwLFxuICBnOiAwLFxuICBpbWFnZTogMCxcbiAgbGluZTogMCxcbiAgbGluZWFyR3JhZGllbnQ6IDAsXG4gIG1hcmtlcjogMCxcbiAgbWFzazogMCxcbiAgbWV0YWRhdGE6IDAsXG4gIHBhdGg6IDAsXG4gIHBhdHRlcm46IDAsXG4gIHBvbHlnb246IDAsXG4gIHBvbHlsaW5lOiAwLFxuICByYWRpYWxHcmFkaWVudDogMCxcbiAgcmVjdDogMCxcbiAgc3RvcDogMCxcbiAgc3ZnOiAwLFxuICBzd2l0Y2g6IDAsXG4gIHN5bWJvbDogMCxcbiAgdGV4dDogMCxcbiAgdGV4dFBhdGg6IDAsXG4gIHRzcGFuOiAwLFxuICB1c2U6IDAsXG4gIHZpZXc6IDAsXG59O1xuY29uc3Qgbm9uUHJlc2VudGF0aW9uU1ZHQXR0cmlidXRlcyA9XG4gIC9eKGEobGx8dHx1KXxiYXNlW0ZQXXxjKGFsfGxpcFBhdGhVfG9uKXxkaXxlZHxleHxmaWx0ZXJbUlVdfGcobHlwaFJ8cil8a2V8bChlbnxpbSl8bWEocmtlcltIVVddfHMpfG58cGF0fHByfHBvaW50W15lXXxyZVtebl18c1twdXldfHN0W15vcl18dGF8dGV4dEx8dml8eEN8eXx6KS87XG5mdW5jdGlvbiBjcmVhdGVGYWN0b3J5KHRhZykge1xuICByZXR1cm4gY3JlYXRlRWxlbWVudC5iaW5kKG51bGwsIHRhZyk7XG59XG5mdW5jdGlvbiBGcmFnbWVudChhdHRyKSB7XG4gIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICBhcHBlbmRDaGlsZChhdHRyLmNoaWxkcmVuLCBmcmFnbWVudCk7XG4gIHJldHVybiBmcmFnbWVudDtcbn1cbmNsYXNzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBpc0NvbXBvbmVudCA9IHRydWU7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuZnVuY3Rpb24gaW5pdENvbXBvbmVudENsYXNzKENsYXNzLCBhdHRyLCBjaGlsZHJlbikge1xuICBhdHRyID0ge1xuICAgIC4uLmF0dHIsXG4gICAgY2hpbGRyZW4sXG4gIH07XG4gIGNvbnN0IGluc3RhbmNlID0gbmV3IENsYXNzKGF0dHIpO1xuICBjb25zdCBub2RlID0gaW5zdGFuY2UucmVuZGVyKCk7XG4gIGlmIChcInJlZlwiIGluIGF0dHIpIHtcbiAgICBhdHRhY2hSZWYoYXR0ci5yZWYsIGluc3RhbmNlKTtcbiAgfVxuICByZXR1cm4gbm9kZTtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuZnVuY3Rpb24ganN4KHRhZywgX3JlZikge1xuICBsZXQgeyBjaGlsZHJlbiwgLi4uYXR0ciB9ID0gX3JlZjtcbiAgaWYgKCFhdHRyLm5hbWVzcGFjZVVSSSAmJiBzdmdbdGFnXSA9PT0gMCkge1xuICAgIGF0dHIgPSB7XG4gICAgICAuLi5hdHRyLFxuICAgICAgbmFtZXNwYWNlVVJJOiBTVkdOYW1lc3BhY2UsXG4gICAgfTtcbiAgfVxuICBsZXQgbm9kZTtcbiAgaWYgKGlzU3RyaW5nKHRhZykpIHtcbiAgICBub2RlID0gYXR0ci5uYW1lc3BhY2VVUklcbiAgICAgID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKGF0dHIubmFtZXNwYWNlVVJJLCB0YWcpXG4gICAgICA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBhdHRyaWJ1dGVzKGF0dHIsIG5vZGUpO1xuICAgIGFwcGVuZENoaWxkKGNoaWxkcmVuLCBub2RlKTtcblxuICAgIC8vIFNlbGVjdCBgb3B0aW9uYCBlbGVtZW50cyBpbiBgc2VsZWN0YFxuICAgIGlmIChub2RlIGluc3RhbmNlb2Ygd2luZG93LkhUTUxTZWxlY3RFbGVtZW50ICYmIGF0dHIudmFsdWUgIT0gbnVsbCkge1xuICAgICAgaWYgKGF0dHIubXVsdGlwbGUgPT09IHRydWUgJiYgQXJyYXkuaXNBcnJheShhdHRyLnZhbHVlKSkge1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBhdHRyLnZhbHVlLm1hcCgodmFsdWUpID0+IFN0cmluZyh2YWx1ZSkpO1xuICAgICAgICBub2RlXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCJvcHRpb25cIilcbiAgICAgICAgICAuZm9yRWFjaChcbiAgICAgICAgICAgIChvcHRpb24pID0+IChvcHRpb24uc2VsZWN0ZWQgPSB2YWx1ZXMuaW5jbHVkZXMob3B0aW9uLnZhbHVlKSksXG4gICAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUudmFsdWUgPSBhdHRyLnZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICBhdHRhY2hSZWYoYXR0ci5yZWYsIG5vZGUpO1xuICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24odGFnKSkge1xuICAgIC8vIEN1c3RvbSBlbGVtZW50cy5cbiAgICBpZiAoaXNPYmplY3QodGFnLmRlZmF1bHRQcm9wcykpIHtcbiAgICAgIGF0dHIgPSB7XG4gICAgICAgIC4uLnRhZy5kZWZhdWx0UHJvcHMsXG4gICAgICAgIC4uLmF0dHIsXG4gICAgICB9O1xuICAgIH1cbiAgICBub2RlID0gaXNDb21wb25lbnRDbGFzcyh0YWcpXG4gICAgICA/IGluaXRDb21wb25lbnRDbGFzcyh0YWcsIGF0dHIsIGNoaWxkcmVuKVxuICAgICAgOiB0YWcoe1xuICAgICAgICAgIC4uLmF0dHIsXG4gICAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEludmFsaWQgSlNYIGVsZW1lbnQgdHlwZTogJHt0YWd9YCk7XG4gIH1cbiAgcmV0dXJuIG5vZGU7XG59XG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZywgYXR0cikge1xuICBmb3IgKFxuICAgIHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCxcbiAgICAgIGNoaWxkcmVuID0gbmV3IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSxcbiAgICAgIF9rZXkyID0gMjtcbiAgICBfa2V5MiA8IF9sZW47XG4gICAgX2tleTIrK1xuICApIHtcbiAgICBjaGlsZHJlbltfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuICBpZiAoaXNTdHJpbmcoYXR0cikgfHwgQXJyYXkuaXNBcnJheShhdHRyKSkge1xuICAgIGNoaWxkcmVuLnVuc2hpZnQoYXR0cik7XG4gICAgYXR0ciA9IHt9O1xuICB9XG4gIGF0dHIgPSBhdHRyIHx8IHt9O1xuICBpZiAoYXR0ci5jaGlsZHJlbiAhPSBudWxsICYmICFjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAoeyBjaGlsZHJlbiwgLi4uYXR0ciB9ID0gYXR0cik7XG4gIH1cbiAgcmV0dXJuIGpzeChcbiAgICB0YWcsXG4gICAge1xuICAgICAgLi4uYXR0cixcbiAgICAgIGNoaWxkcmVuLFxuICAgIH0sXG4gICAgYXR0ci5rZXksXG4gICk7XG59XG5mdW5jdGlvbiBhdHRhY2hSZWYocmVmLCBub2RlKSB7XG4gIGlmIChpc1JlZihyZWYpKSB7XG4gICAgcmVmLmN1cnJlbnQgPSBub2RlO1xuICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24ocmVmKSkge1xuICAgIHJlZihub2RlKTtcbiAgfVxufVxuZnVuY3Rpb24gYXBwZW5kQ2hpbGQoY2hpbGQsIG5vZGUpIHtcbiAgaWYgKGlzQXJyYXlMaWtlKGNoaWxkKSkge1xuICAgIGFwcGVuZENoaWxkcmVuKGNoaWxkLCBub2RlKTtcbiAgfSBlbHNlIGlmIChpc1N0cmluZyhjaGlsZCkgfHwgaXNOdW1iZXIoY2hpbGQpKSB7XG4gICAgYXBwZW5kQ2hpbGRUb05vZGUoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2hpbGQpLCBub2RlKTtcbiAgfSBlbHNlIGlmIChjaGlsZCA9PT0gbnVsbCkge1xuICAgIGFwcGVuZENoaWxkVG9Ob2RlKGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoXCJcIiksIG5vZGUpO1xuICB9IGVsc2UgaWYgKGlzRWxlbWVudChjaGlsZCkpIHtcbiAgICBhcHBlbmRDaGlsZFRvTm9kZShjaGlsZCwgbm9kZSk7XG4gIH0gZWxzZSBpZiAoaXNTaGFkb3dSb290KGNoaWxkKSkge1xuICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSBub2RlLmF0dGFjaFNoYWRvdyhjaGlsZC5hdHRyKTtcbiAgICBhcHBlbmRDaGlsZChjaGlsZC5jaGlsZHJlbiwgc2hhZG93Um9vdCk7XG4gICAgYXR0YWNoUmVmKGNoaWxkLnJlZiwgc2hhZG93Um9vdCk7XG4gIH1cbn1cbmZ1bmN0aW9uIGFwcGVuZENoaWxkcmVuKGNoaWxkcmVuLCBub2RlKSB7XG4gIGZvciAoY29uc3QgY2hpbGQgb2YgWy4uLmNoaWxkcmVuXSkge1xuICAgIGFwcGVuZENoaWxkKGNoaWxkLCBub2RlKTtcbiAgfVxuICByZXR1cm4gbm9kZTtcbn1cbmZ1bmN0aW9uIGFwcGVuZENoaWxkVG9Ob2RlKGNoaWxkLCBub2RlKSB7XG4gIGlmIChub2RlIGluc3RhbmNlb2Ygd2luZG93LkhUTUxUZW1wbGF0ZUVsZW1lbnQpIHtcbiAgICBub2RlLmNvbnRlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICB9IGVsc2Uge1xuICAgIG5vZGUuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICB9XG59XG5mdW5jdGlvbiBub3JtYWxpemVBdHRyaWJ1dGUocywgc2VwYXJhdG9yKSB7XG4gIHJldHVybiBzLnJlcGxhY2UoL1tBLVpdL2csIChtYXRjaCkgPT4gc2VwYXJhdG9yICsgbWF0Y2gudG9Mb3dlckNhc2UoKSk7XG59XG5mdW5jdGlvbiBzdHlsZShub2RlLCB2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSA9PT0gZmFsc2UpO1xuICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHZhbHVlLmZvckVhY2goKHYpID0+IHN0eWxlKG5vZGUsIHYpKTtcbiAgfSBlbHNlIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICBub2RlLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIHZhbHVlKTtcbiAgfSBlbHNlIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICBmb3JFYWNoKHZhbHVlLCAodmFsLCBrZXkpID0+IHtcbiAgICAgIGlmIChrZXkuaW5kZXhPZihcIi1cIikgPT09IDApIHtcbiAgICAgICAgLy8gQ1NTIGN1c3RvbSBwcm9wZXJ0aWVzICh2YXJpYWJsZXMpIHN0YXJ0IHdpdGggYC1gIChlLmcuIGAtLW15LXZhcmlhYmxlYClcbiAgICAgICAgLy8gYW5kIG11c3QgYmUgYXNzaWduZWQgdmlhIGBzZXRQcm9wZXJ0eWAuXG4gICAgICAgIG5vZGUuc3R5bGUuc2V0UHJvcGVydHkoa2V5LCB2YWwpO1xuICAgICAgfSBlbHNlIGlmIChpc051bWJlcih2YWwpICYmIGlzVW5pdGxlc3NOdW1iZXJba2V5XSAhPT0gMCkge1xuICAgICAgICBub2RlLnN0eWxlW2tleV0gPSB2YWwgKyBcInB4XCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlLnN0eWxlW2tleV0gPSB2YWw7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGF0dHJpYnV0ZShrZXksIHZhbHVlLCBub2RlKSB7XG4gIHN3aXRjaCAoa2V5KSB7XG4gICAgY2FzZSBcInhsaW5rQWN0dWF0ZVwiOlxuICAgIGNhc2UgXCJ4bGlua0FyY3JvbGVcIjpcbiAgICBjYXNlIFwieGxpbmtIcmVmXCI6XG4gICAgY2FzZSBcInhsaW5rUm9sZVwiOlxuICAgIGNhc2UgXCJ4bGlua1Nob3dcIjpcbiAgICBjYXNlIFwieGxpbmtUaXRsZVwiOlxuICAgIGNhc2UgXCJ4bGlua1R5cGVcIjpcbiAgICAgIGF0dHJOUyhub2RlLCBYTGlua05hbWVzcGFjZSwgbm9ybWFsaXplQXR0cmlidXRlKGtleSwgXCI6XCIpLCB2YWx1ZSk7XG4gICAgICByZXR1cm47XG4gICAgY2FzZSBcInhtbG5zWGxpbmtcIjpcbiAgICAgIGF0dHIobm9kZSwgbm9ybWFsaXplQXR0cmlidXRlKGtleSwgXCI6XCIpLCB2YWx1ZSk7XG4gICAgICByZXR1cm47XG4gICAgY2FzZSBcInhtbEJhc2VcIjpcbiAgICBjYXNlIFwieG1sTGFuZ1wiOlxuICAgIGNhc2UgXCJ4bWxTcGFjZVwiOlxuICAgICAgYXR0ck5TKG5vZGUsIFhNTE5hbWVzcGFjZSwgbm9ybWFsaXplQXR0cmlidXRlKGtleSwgXCI6XCIpLCB2YWx1ZSk7XG4gICAgICByZXR1cm47XG4gIH1cbiAgc3dpdGNoIChrZXkpIHtcbiAgICBjYXNlIFwiaHRtbEZvclwiOlxuICAgICAgYXR0cihub2RlLCBcImZvclwiLCB2YWx1ZSk7XG4gICAgICByZXR1cm47XG4gICAgY2FzZSBcImRhdGFzZXRcIjpcbiAgICAgIGZvckVhY2godmFsdWUsIChkYXRhVmFsdWUsIGRhdGFLZXkpID0+IHtcbiAgICAgICAgaWYgKGRhdGFWYWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgbm9kZS5kYXRhc2V0W2RhdGFLZXldID0gZGF0YVZhbHVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICBjYXNlIFwiaW5uZXJIVE1MXCI6XG4gICAgY2FzZSBcImlubmVyVGV4dFwiOlxuICAgIGNhc2UgXCJ0ZXh0Q29udGVudFwiOlxuICAgICAgaWYgKGlzVmlzaWJsZUNoaWxkKHZhbHVlKSkge1xuICAgICAgICBub2RlW2tleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICBjYXNlIFwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIjpcbiAgICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgbm9kZS5pbm5lckhUTUwgPSB2YWx1ZVtcIl9faHRtbFwiXTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICBjYXNlIFwidmFsdWVcIjpcbiAgICAgIGlmICh2YWx1ZSA9PSBudWxsIHx8IG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTFNlbGVjdEVsZW1lbnQpIHtcbiAgICAgICAgLy8gc2tpcCBudWxsaXNoIHZhbHVlc1xuICAgICAgICAvLyBmb3IgYDxzZWxlY3Q+YCBhcHBseSB2YWx1ZSBhZnRlciBhcHBlbmRpbmcgYDxvcHRpb24+YCBlbGVtZW50c1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTFRleHRBcmVhRWxlbWVudCkge1xuICAgICAgICBub2RlLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIHVzZSBhdHRyaWJ1dGUgZm9yIG90aGVyIGVsZW1lbnRzXG4gICAgICBicmVhaztcbiAgICBjYXNlIFwic3BlbGxDaGVja1wiOlxuICAgICAgbm9kZS5zcGVsbGNoZWNrID0gdmFsdWU7XG4gICAgICByZXR1cm47XG4gICAgY2FzZSBcImNsYXNzXCI6XG4gICAgY2FzZSBcImNsYXNzTmFtZVwiOlxuICAgICAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICAgIHZhbHVlKG5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXR0cihub2RlLCBcImNsYXNzXCIsIGNsYXNzTmFtZSh2YWx1ZSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIGNhc2UgXCJyZWZcIjpcbiAgICBjYXNlIFwibmFtZXNwYWNlVVJJXCI6XG4gICAgICByZXR1cm47XG4gICAgY2FzZSBcInN0eWxlXCI6XG4gICAgICBzdHlsZShub2RlLCB2YWx1ZSk7XG4gICAgICByZXR1cm47XG4gICAgY2FzZSBcIm9uXCI6XG4gICAgY2FzZSBcIm9uQ2FwdHVyZVwiOlxuICAgICAgZm9yRWFjaCh2YWx1ZSwgKGV2ZW50SGFuZGxlciwgZXZlbnROYW1lKSA9PiB7XG4gICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50SGFuZGxlciwga2V5ID09PSBcIm9uQ2FwdHVyZVwiKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIC8vIGZhbGx0aHJvdWdoXG4gIH1cbiAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgaWYgKGtleVswXSA9PT0gXCJvXCIgJiYga2V5WzFdID09PSBcIm5cIikge1xuICAgICAgbGV0IGF0dHJpYnV0ZSA9IGtleS50b0xvd2VyQ2FzZSgpO1xuICAgICAgY29uc3QgdXNlQ2FwdHVyZSA9IGF0dHJpYnV0ZS5lbmRzV2l0aChcImNhcHR1cmVcIik7XG4gICAgICBpZiAoYXR0cmlidXRlID09PSBcIm9uZG91YmxlY2xpY2tcIikge1xuICAgICAgICBhdHRyaWJ1dGUgPSBcIm9uZGJsY2xpY2tcIjtcbiAgICAgIH0gZWxzZSBpZiAodXNlQ2FwdHVyZSAmJiBhdHRyaWJ1dGUgPT09IFwib25kb3VibGVjbGlja2NhcHR1cmVcIikge1xuICAgICAgICBhdHRyaWJ1dGUgPSBcIm9uZGJsY2xpY2tjYXB0dXJlXCI7XG4gICAgICB9XG4gICAgICBpZiAoIXVzZUNhcHR1cmUgJiYgbm9kZVthdHRyaWJ1dGVdID09PSBudWxsKSB7XG4gICAgICAgIC8vIHVzZSBwcm9wZXJ0eSB3aGVuIHBvc3NpYmxlIFBSICMxN1xuICAgICAgICBub2RlW2F0dHJpYnV0ZV0gPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSBpZiAodXNlQ2FwdHVyZSkge1xuICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgYXR0cmlidXRlLnN1YnN0cmluZygyLCBhdHRyaWJ1dGUubGVuZ3RoIC0gNyksXG4gICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBldmVudE5hbWU7XG4gICAgICAgIGlmIChhdHRyaWJ1dGUgaW4gd2luZG93KSB7XG4gICAgICAgICAgLy8gc3RhbmRhcmQgZXZlbnRcbiAgICAgICAgICAvLyB0aGUgSlNYIGF0dHJpYnV0ZSBjb3VsZCBoYXZlIGJlZW4gXCJvbk1vdXNlT3ZlclwiIGFuZCB0aGVcbiAgICAgICAgICAvLyBtZW1iZXIgbmFtZSBcIm9ubW91c2VvdmVyXCIgaXMgb24gdGhlIHdpbmRvdydzIHByb3RvdHlwZVxuICAgICAgICAgIC8vIHNvIGxldCdzIGFkZCB0aGUgbGlzdGVuZXIgXCJtb3VzZW92ZXJcIiwgd2hpY2ggaXMgYWxsIGxvd2VyY2FzZWRcbiAgICAgICAgICBjb25zdCBzdGFuZGFyZEV2ZW50TmFtZSA9IGF0dHJpYnV0ZS5zdWJzdHJpbmcoMik7XG4gICAgICAgICAgZXZlbnROYW1lID0gc3RhbmRhcmRFdmVudE5hbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gY3VzdG9tIGV2ZW50XG4gICAgICAgICAgLy8gdGhlIEpTWCBhdHRyaWJ1dGUgY291bGQgaGF2ZSBiZWVuIFwib25NeUN1c3RvbUV2ZW50XCJcbiAgICAgICAgICAvLyBzbyBsZXQncyB0cmltIG9mZiB0aGUgXCJvblwiIHByZWZpeCBhbmQgbG93ZXJjYXNlIHRoZSBmaXJzdCBjaGFyYWN0ZXJcbiAgICAgICAgICAvLyBhbmQgYWRkIHRoZSBsaXN0ZW5lciBcIm15Q3VzdG9tRXZlbnRcIlxuICAgICAgICAgIC8vIGV4Y2VwdCBmb3IgdGhlIGZpcnN0IGNoYXJhY3Rlciwgd2Uga2VlcCB0aGUgZXZlbnQgbmFtZSBjYXNlXG4gICAgICAgICAgY29uc3QgY3VzdG9tRXZlbnROYW1lID0gYXR0cmlidXRlWzJdICsga2V5LnNsaWNlKDMpO1xuICAgICAgICAgIGV2ZW50TmFtZSA9IGN1c3RvbUV2ZW50TmFtZTtcbiAgICAgICAgfVxuICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIG5vZGVba2V5XSA9IHZhbHVlO1xuICB9IGVsc2UgaWYgKHZhbHVlID09PSB0cnVlKSB7XG4gICAgYXR0cihub2RlLCBrZXksIFwiXCIpO1xuICB9IGVsc2UgaWYgKHZhbHVlICE9PSBmYWxzZSAmJiB2YWx1ZSAhPSBudWxsKSB7XG4gICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBTVkdFbGVtZW50ICYmICFub25QcmVzZW50YXRpb25TVkdBdHRyaWJ1dGVzLnRlc3Qoa2V5KSkge1xuICAgICAgYXR0cihub2RlLCBub3JtYWxpemVBdHRyaWJ1dGUoa2V5LCBcIi1cIiksIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXR0cihub2RlLCBrZXksIHZhbHVlKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGF0dHIobm9kZSwga2V5LCB2YWx1ZSkge1xuICBub2RlLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGF0dHJOUyhub2RlLCBuYW1lc3BhY2UsIGtleSwgdmFsdWUpIHtcbiAgbm9kZS5zZXRBdHRyaWJ1dGVOUyhuYW1lc3BhY2UsIGtleSwgdmFsdWUpO1xufVxuZnVuY3Rpb24gYXR0cmlidXRlcyhhdHRyLCBub2RlKSB7XG4gIGZvciAoY29uc3Qga2V5IG9mIGtleXMoYXR0cikpIHtcbiAgICBhdHRyaWJ1dGUoa2V5LCBhdHRyW2tleV0sIG5vZGUpO1xuICB9XG4gIHJldHVybiBub2RlO1xufVxuXG5mdW5jdGlvbiB1c2VUZXh0KGluaXRpYWxWYWx1ZSkge1xuICBjb25zdCB0ZXh0ID0gbmV3IFRleHQoKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRleHQsIFwidG9TdHJpbmdcIiwge1xuICAgIHZhbHVlKCkge1xuICAgICAgcmV0dXJuIHRoaXMudGV4dENvbnRlbnQ7XG4gICAgfSxcbiAgfSk7XG4gIGZ1bmN0aW9uIHNldFRleHQodmFsdWUpIHtcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gdmFsdWU7XG4gIH1cbiAgaWYgKGluaXRpYWxWYWx1ZSAhPSBudWxsKSB7XG4gICAgc2V0VGV4dChpbml0aWFsVmFsdWUpO1xuICB9XG4gIHJldHVybiBbdGV4dCwgc2V0VGV4dF07XG59XG5mdW5jdGlvbiB1c2VDbGFzc0xpc3QoaW5pdGlhbFZhbHVlKSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGlmIChpbml0aWFsVmFsdWUgIT0gbnVsbCkge1xuICAgIGRpdi5jbGFzc05hbWUgPSBjbGFzc05hbWUoaW5pdGlhbFZhbHVlKTtcbiAgfVxuICBsZXQgbGlzdCA9IGRpdi5jbGFzc0xpc3Q7XG4gIGZ1bmN0aW9uIENsYXNzTGlzdCh2YWx1ZSkge1xuICAgIHZhbHVlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGxpc3QudmFsdWUpO1xuICAgIGxpc3QgPSB2YWx1ZS5jbGFzc0xpc3Q7XG4gIH1cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoXG4gICAgQ2xhc3NMaXN0LFxuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHtcbiAgICAgIGdldCBzaXplKCkge1xuICAgICAgICByZXR1cm4gbGlzdC5sZW5ndGg7XG4gICAgICB9LFxuICAgICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gbGlzdC52YWx1ZTtcbiAgICAgIH0sXG4gICAgICBhZGQoKSB7XG4gICAgICAgIGxpc3QuYWRkKC4uLmFyZ3VtZW50cyk7XG4gICAgICB9LFxuICAgICAgcmVtb3ZlKCkge1xuICAgICAgICBsaXN0LnJlbW92ZSguLi5hcmd1bWVudHMpO1xuICAgICAgfSxcbiAgICAgIHRvZ2dsZSh0b2tlbiwgZm9yY2UpIHtcbiAgICAgICAgbGlzdC50b2dnbGUodG9rZW4sIGZvcmNlKTtcbiAgICAgIH0sXG4gICAgICBjb250YWlucyh0b2tlbikge1xuICAgICAgICByZXR1cm4gbGlzdC5jb250YWlucyh0b2tlbik7XG4gICAgICB9LFxuICAgIH0pLFxuICApO1xuICByZXR1cm4gQ2xhc3NMaXN0O1xufVxuXG5mdW5jdGlvbiB1c2VNZW1vKGZhY3RvcnkpIHtcbiAgcmV0dXJuIGZhY3RvcnkoKTtcbn1cbmZ1bmN0aW9uIGZvcndhcmRSZWYocmVuZGVyKSB7XG4gIHJldHVybiAoX3JlZikgPT4ge1xuICAgIGxldCB7IHJlZiwgLi4ucHJvcHMgfSA9IF9yZWY7XG4gICAgcmV0dXJuIHJlbmRlcihwcm9wcywgcmVmID8/IGNyZWF0ZVJlZigpKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBpbml0KSB7XG4gIGF0dGFjaFJlZihyZWYsIGluaXQoKSk7XG59XG5cbmNvbnN0IGNhY2hlID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbmNvbnN0IGNyZWF0ZVN0eWxlZENvbXBvbmVudCA9IChuYW1lKSA9PlxuICBmdW5jdGlvbiAobGlzdCkge1xuICAgIGZvciAoXG4gICAgICB2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsXG4gICAgICAgIGludGVycG9sYXRpb25zID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSxcbiAgICAgICAgX2tleSA9IDE7XG4gICAgICBfa2V5IDwgX2xlbjtcbiAgICAgIF9rZXkrK1xuICAgICkge1xuICAgICAgaW50ZXJwb2xhdGlvbnNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cbiAgICByZXR1cm4gKF9yZWYpID0+IHtcbiAgICAgIGxldCB7IHN0eWxlLCAuLi5wcm9wcyB9ID0gX3JlZjtcbiAgICAgIGNvbnN0IGxhc3RJbmRleCA9IGxpc3QubGVuZ3RoIC0gMTtcbiAgICAgIGNvbnN0IGNzcyA9XG4gICAgICAgIGxpc3Quc2xpY2UoMCwgbGFzdEluZGV4KS5yZWR1Y2UoKHAsIHMsIGkpID0+IHtcbiAgICAgICAgICBjb25zdCBpbnRlcnBvbGF0aW9uID0gaW50ZXJwb2xhdGlvbnNbaV07XG4gICAgICAgICAgY29uc3QgY3VycmVudCA9XG4gICAgICAgICAgICB0eXBlb2YgaW50ZXJwb2xhdGlvbiA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgICAgID8gaW50ZXJwb2xhdGlvbihwcm9wcylcbiAgICAgICAgICAgICAgOiBpbnRlcnBvbGF0aW9uO1xuICAgICAgICAgIHJldHVybiBwICsgcyArIGN1cnJlbnQ7XG4gICAgICAgIH0sIFwiXCIpICsgbGlzdFtsYXN0SW5kZXhdO1xuICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQobmFtZSwge1xuICAgICAgICBzdHlsZTogW2Nzcywgc3R5bGVdLFxuICAgICAgICAuLi5wcm9wcyxcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG5jb25zdCBiYXNlU3R5bGVkID0gKGN1c3RvbUNvbXBvbmVudCkgPT4gY3JlYXRlU3R5bGVkQ29tcG9uZW50KGN1c3RvbUNvbXBvbmVudCk7XG5jb25zdCBzdHlsZWQgPSAvKiBAX19QVVJFX18gKi8gbmV3IFByb3h5KGJhc2VTdHlsZWQsIHtcbiAgZ2V0KF8sIG5hbWUpIHtcbiAgICByZXR1cm4gc2V0SWZBYnNlbnQoY2FjaGUsIG5hbWUsICgpID0+IGNyZWF0ZVN0eWxlZENvbXBvbmVudChuYW1lKSk7XG4gIH0sXG59KTtcbmZ1bmN0aW9uIHNldElmQWJzZW50KG1hcCwga2V5LCBnZXRWYWx1ZSkge1xuICBpZiAobWFwLmhhcyhrZXkpKSB7XG4gICAgcmV0dXJuIG1hcC5nZXQoa2V5KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB2YWx1ZSA9IGdldFZhbHVlKGtleSk7XG4gICAgbWFwLnNldChrZXksIHZhbHVlKTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cblxudmFyIGluZGV4ID0ge1xuICBDb21wb25lbnQsXG4gIFB1cmVDb21wb25lbnQ6IENvbXBvbmVudCxcbiAgY3JlYXRlRWxlbWVudCxcbiAgRnJhZ21lbnQsXG4gIFNoYWRvd1Jvb3QsXG59O1xuZnVuY3Rpb24gcHJldmVudERlZmF1bHQoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgcmV0dXJuIGV2ZW50O1xufVxuZnVuY3Rpb24gc3RvcFByb3BhZ2F0aW9uKGV2ZW50KSB7XG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICByZXR1cm4gZXZlbnQ7XG59XG5cbmV4cG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRnJhZ21lbnQsXG4gIENvbXBvbmVudCBhcyBQdXJlQ29tcG9uZW50LFxuICBTVkdOYW1lc3BhY2UsXG4gIFNoYWRvd1Jvb3QsXG4gIEZyYWdtZW50IGFzIFN0cmljdE1vZGUsXG4gIGNsYXNzTmFtZSxcbiAgY3JlYXRlRWxlbWVudCxcbiAgY3JlYXRlRmFjdG9yeSxcbiAgY3JlYXRlUmVmLFxuICBpbmRleCBhcyBkZWZhdWx0LFxuICBmb3J3YXJkUmVmLFxuICBjcmVhdGVFbGVtZW50IGFzIGgsXG4gIGlzUmVmLFxuICBqc3gsXG4gIGpzeCBhcyBqc3hzLFxuICBpZGVudGl0eSBhcyBtZW1vLFxuICBwcmV2ZW50RGVmYXVsdCxcbiAgc3RvcFByb3BhZ2F0aW9uLFxuICBzdHlsZWQsXG4gIGlkZW50aXR5IGFzIHVzZUNhbGxiYWNrLFxuICB1c2VDbGFzc0xpc3QsXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUsXG4gIHVzZU1lbW8sXG4gIGNyZWF0ZVJlZiBhcyB1c2VSZWYsXG4gIHVzZVRleHQsXG59O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUEsS0FBQyxXQUFVO0FBQUMsZUFBUyxJQUFHO0FBQUMsaUJBQVMs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LFlBQU1DLGdCQUFnQlIsZUFBZU8sQ0FBQztBQUN0QyxZQUFNOU8sVUFDSixPQUFPK08sa0JBQWtCLGFBQ3JCQSxjQUFjdEcsS0FBSyxJQUNuQnNHO0FBQ04sYUFBT0YsSUFBSXJQLElBQUlRO0lBQ2pCLEdBQUcsRUFBRSxJQUFJcU4sS0FBS3FCLFNBQVM7QUFDekIsV0FBTzlSLGNBQWMwUixNQUFNO01BQ3pCbkQsT0FBTyxDQUFDd0QsS0FBS0YsTUFBSztNQUNsQixHQUFHaEc7SUFDTCxDQUFDO0VBQ0g7QUFDRjtBQUNGLElBQU11RyxhQUFjQyxxQkFBb0JaLHNCQUFzQlksZUFBZTtBQUM3RSxJQUFNelIsU0FBeUIsb0JBQUkwUixNQUFNRixZQUFZO0VBQ25ERyxJQUFJQyxHQUFHZCxNQUFNO0FBQ1gsV0FBT2UsWUFBWWxCLE9BQU9HLE1BQU0sTUFBTUQsc0JBQXNCQyxJQUFJLENBQUM7RUFDbkU7QUFDRixDQUFDO0FBQ0QsU0FBU2UsWUFBWWhMLEtBQUsxRSxLQUFLMlAsVUFBVTtBQUN2QyxNQUFJakwsSUFBSWtMLElBQUk1UCxHQUFHLEdBQUc7QUFDaEIsV0FBTzBFLElBQUk4SyxJQUFJeFAsR0FBRztFQUNwQixPQUFPO0FBQ0wsVUFBTXZCLFFBQVFrUixTQUFTM1AsR0FBRztBQUMxQjBFLFFBQUltTCxJQUFJN1AsS0FBS3ZCLEtBQUs7QUFDbEIsV0FBT0E7RUFDVDtBQUNGO0FBU0EsU0FBU2QsZUFBZW1TLE9BQU87QUFDN0JBLFFBQU1uUyxlQUFlO0FBQ3JCLFNBQU9tUztBQUNUO0FBQ0EsU0FBU2xTLGdCQUFnQmtTLE9BQU87QUFDOUJBLFFBQU1sUyxnQkFBZ0I7QUFDdEIsU0FBT2tTO0FBQ1Q7IiwKICAibmFtZXMiOiBbImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm5hdmlnYXRvciIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgInByb2Nlc3MiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJpc09iamVjdCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJTeW1ib2wiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiaXNPYmplY3QiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJpc09iamVjdCIsICJkb2N1bWVudCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJjcmVhdGVFbGVtZW50IiwgImV4cG9ydHMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiaXNPYmplY3QiLCAiZXhwb3J0cyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImtleXMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJpc09iamVjdCIsICJUeXBlRXJyb3IiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJleHBvcnRzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImtleXMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAia2V5cyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImtleXMiLCAiZXhwb3J0cyIsICJrZXlzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImFjdGl2ZVhEb2N1bWVudCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJpc09iamVjdCIsICJnbG9iYWxUaGlzIiwgIkl0ZXJhdG9yIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIkl0ZXJhdG9yIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiSXRlcmF0b3IiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZm9yRWFjaCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJKU1hfZXhwb3J0cyIsICJfX2V4cG9ydCIsICJDb21wb25lbnQiLCAiRnJhZ21lbnQiLCAiUHVyZUNvbXBvbmVudCIsICJTVkdOYW1lc3BhY2UiLCAiU2hhZG93Um9vdCIsICJTdHJpY3RNb2RlIiwgImNsYXNzTmFtZSIsICJjcmVhdGVFbGVtZW50IiwgImNyZWF0ZUZhY3RvcnkiLCAiY3JlYXRlUmVmIiwgImZvcndhcmRSZWYiLCAiaCIsICJpc1JlZiIsICJqc3giLCAianN4cyIsICJtZW1vIiwgImlkZW50aXR5IiwgInByZXZlbnREZWZhdWx0IiwgInN0b3BQcm9wYWdhdGlvbiIsICJzdHlsZWQiLCAidXNlQ2FsbGJhY2siLCAidXNlQ2xhc3NMaXN0IiwgInVzZUltcGVyYXRpdmVIYW5kbGUiLCAidXNlTWVtbyIsICJ1c2VSZWYiLCAidXNlVGV4dCIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJfX3RvQ29tbW9uSlMiLCAia2V5cyIsICJPYmplY3QiLCAidmFsdWUiLCAiaXNCb29sZWFuIiwgInZhbCIsICJpc0VsZW1lbnQiLCAibm9kZVR5cGUiLCAiaXNTdHJpbmciLCAiaXNOdW1iZXIiLCAiaXNPYmplY3QiLCAiaXNGdW5jdGlvbiIsICJpc0NvbXBvbmVudENsYXNzIiwgIkNvbXBvbmVudDIiLCAiaXNDb21wb25lbnQiLCAiaXNBcnJheUxpa2UiLCAib2JqIiwgImxlbmd0aCIsICJmb3JFYWNoIiwgImZuIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgImtleSIsICJlcnIiLCAiZSIsICJmIiwgInNlYWwiLCAiY3VycmVudCIsICJtYXliZVJlZiIsICJpc1VuaXRsZXNzTnVtYmVyIiwgImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50IiwgImJvcmRlckltYWdlT3V0c2V0IiwgImJvcmRlckltYWdlU2xpY2UiLCAiYm9yZGVySW1hZ2VXaWR0aCIsICJib3hGbGV4IiwgImJveEZsZXhHcm91cCIsICJib3hPcmRpbmFsR3JvdXAiLCAiY29sdW1uQ291bnQiLCAiY29sdW1ucyIsICJmbGV4IiwgImZsZXhHcm93IiwgImZsZXhQb3NpdGl2ZSIsICJmbGV4U2hyaW5rIiwgImZsZXhOZWdhdGl2ZSIsICJmbGV4T3JkZXIiLCAiZ3JpZEFyZWEiLCAiZ3JpZFJvdyIsICJncmlkUm93RW5kIiwgImdyaWRSb3dTcGFuIiwgImdyaWRSb3dTdGFydCIsICJncmlkQ29sdW1uIiwgImdyaWRDb2x1bW5FbmQiLCAiZ3JpZENvbHVtblNwYW4iLCAiZ3JpZENvbHVtblN0YXJ0IiwgImZvbnRXZWlnaHQiLCAibGluZUNsYW1wIiwgImxpbmVIZWlnaHQiLCAib3BhY2l0eSIsICJvcmRlciIsICJvcnBoYW5zIiwgInRhYlNpemUiLCAid2lkb3dzIiwgInpJbmRleCIsICJ6b29tIiwgImZpbGxPcGFjaXR5IiwgImZsb29kT3BhY2l0eSIsICJzdG9wT3BhY2l0eSIsICJzdHJva2VEYXNoYXJyYXkiLCAic3Ryb2tlRGFzaG9mZnNldCIsICJzdHJva2VNaXRlcmxpbWl0IiwgInN0cm9rZU9wYWNpdHkiLCAic3Ryb2tlV2lkdGgiLCAicHJlZml4S2V5IiwgInByZWZpeCIsICJjaGFyQXQiLCAidG9VcHBlckNhc2UiLCAic3Vic3RyaW5nIiwgInByZWZpeGVzIiwgInByb3AiLCAianN4RG9tVHlwZSIsICJTeW1ib2wiLCAiZm9yIiwgIkpzeERvbVR5cGUiLCAiSnN4RG9tVHlwZTIiLCAiX3JlZiIsICJjaGlsZHJlbiIsICJyZWYiLCAiYXR0cjIiLCAiYXR0ciIsICJpc1NoYWRvd1Jvb3QiLCAiZWwiLCAiWExpbmtOYW1lc3BhY2UiLCAiWE1MTmFtZXNwYWNlIiwgImlzVmlzaWJsZUNoaWxkIiwgIkFycmF5IiwgImlzQXJyYXkiLCAibWFwIiwgImZpbHRlciIsICJCb29sZWFuIiwgImpvaW4iLCAiaXRlcmF0b3IiLCAiZnJvbSIsICJrIiwgInN2ZyIsICJhbmltYXRlIiwgImNpcmNsZSIsICJjbGlwUGF0aCIsICJkZWZzIiwgImRlc2MiLCAiZWxsaXBzZSIsICJmZUJsZW5kIiwgImZlQ29sb3JNYXRyaXgiLCAiZmVDb21wb25lbnRUcmFuc2ZlciIsICJmZUNvbXBvc2l0ZSIsICJmZUNvbnZvbHZlTWF0cml4IiwgImZlRGlmZnVzZUxpZ2h0aW5nIiwgImZlRGlzcGxhY2VtZW50TWFwIiwgImZlRGlzdGFudExpZ2h0IiwgImZlRmxvb2QiLCAiZmVGdW5jQSIsICJmZUZ1bmNCIiwgImZlRnVuY0ciLCAiZmVGdW5jUiIsICJmZUdhdXNzaWFuQmx1ciIsICJmZUltYWdlIiwgImZlTWVyZ2UiLCAiZmVNZXJnZU5vZGUiLCAiZmVNb3JwaG9sb2d5IiwgImZlT2Zmc2V0IiwgImZlUG9pbnRMaWdodCIsICJmZVNwZWN1bGFyTGlnaHRpbmciLCAiZmVTcG90TGlnaHQiLCAiZmVUaWxlIiwgImZlVHVyYnVsZW5jZSIsICJmb3JlaWduT2JqZWN0IiwgImciLCAiaW1hZ2UiLCAibGluZSIsICJsaW5lYXJHcmFkaWVudCIsICJtYXJrZXIiLCAibWFzayIsICJtZXRhZGF0YSIsICJwYXRoIiwgInBhdHRlcm4iLCAicG9seWdvbiIsICJwb2x5bGluZSIsICJyYWRpYWxHcmFkaWVudCIsICJyZWN0IiwgInN0b3AiLCAic3dpdGNoIiwgInN5bWJvbCIsICJ0ZXh0IiwgInRleHRQYXRoIiwgInRzcGFuIiwgInVzZSIsICJ2aWV3IiwgIm5vblByZXNlbnRhdGlvblNWR0F0dHJpYnV0ZXMiLCAidGFnIiwgImJpbmQiLCAiZnJhZ21lbnQiLCAiZG9jdW1lbnQiLCAiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsICJhcHBlbmRDaGlsZCIsICJjb25zdHJ1Y3RvciIsICJwcm9wcyIsICJyZW5kZXIiLCAiaW5pdENvbXBvbmVudENsYXNzIiwgIkNsYXNzIiwgImluc3RhbmNlIiwgIm5vZGUiLCAiYXR0YWNoUmVmIiwgIm5hbWVzcGFjZVVSSSIsICJjcmVhdGVFbGVtZW50TlMiLCAiYXR0cmlidXRlcyIsICJ3aW5kb3ciLCAiSFRNTFNlbGVjdEVsZW1lbnQiLCAibXVsdGlwbGUiLCAidmFsdWVzIiwgIlN0cmluZyIsICJxdWVyeVNlbGVjdG9yQWxsIiwgIm9wdGlvbiIsICJzZWxlY3RlZCIsICJpbmNsdWRlcyIsICJkZWZhdWx0UHJvcHMiLCAiVHlwZUVycm9yIiwgImNvbmNhdCIsICJfbGVuIiwgImFyZ3VtZW50cyIsICJfa2V5MiIsICJ1bnNoaWZ0IiwgImNoaWxkIiwgImFwcGVuZENoaWxkcmVuIiwgImFwcGVuZENoaWxkVG9Ob2RlIiwgImNyZWF0ZVRleHROb2RlIiwgImNyZWF0ZUNvbW1lbnQiLCAic2hhZG93Um9vdCIsICJhdHRhY2hTaGFkb3ciLCAiX2kiLCAiX2FyciIsICJIVE1MVGVtcGxhdGVFbGVtZW50IiwgImNvbnRlbnQiLCAibm9ybWFsaXplQXR0cmlidXRlIiwgInNlcGFyYXRvciIsICJyZXBsYWNlIiwgIm1hdGNoIiwgInRvTG93ZXJDYXNlIiwgInN0eWxlIiwgInYiLCAic2V0QXR0cmlidXRlIiwgImluZGV4T2YiLCAic2V0UHJvcGVydHkiLCAiYXR0cmlidXRlIiwgImF0dHJOUyIsICJkYXRhVmFsdWUiLCAiZGF0YUtleSIsICJkYXRhc2V0IiwgImlubmVySFRNTCIsICJIVE1MVGV4dEFyZWFFbGVtZW50IiwgInNwZWxsY2hlY2siLCAiZXZlbnRIYW5kbGVyIiwgImV2ZW50TmFtZSIsICJhZGRFdmVudExpc3RlbmVyIiwgImF0dHJpYnV0ZTIiLCAidXNlQ2FwdHVyZSIsICJlbmRzV2l0aCIsICJzdGFuZGFyZEV2ZW50TmFtZSIsICJjdXN0b21FdmVudE5hbWUiLCAic2xpY2UiLCAiU1ZHRWxlbWVudCIsICJ0ZXN0IiwgIm5hbWVzcGFjZSIsICJzZXRBdHRyaWJ1dGVOUyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJpbml0aWFsVmFsdWUiLCAiVGV4dCIsICJkZWZpbmVQcm9wZXJ0eSIsICJ0ZXh0Q29udGVudCIsICJzZXRUZXh0IiwgImRpdiIsICJsaXN0IiwgImNsYXNzTGlzdCIsICJDbGFzc0xpc3QiLCAiZGVmaW5lUHJvcGVydGllcyIsICJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwgInNpemUiLCAiYWRkIiwgInJlbW92ZSIsICJ0b2dnbGUiLCAidG9rZW4iLCAiZm9yY2UiLCAiY29udGFpbnMiLCAiZmFjdG9yeSIsICJpbml0IiwgImNhY2hlIiwgIk1hcCIsICJjcmVhdGVTdHlsZWRDb21wb25lbnQiLCAibmFtZSIsICJpbnRlcnBvbGF0aW9ucyIsICJfa2V5IiwgInN0eWxlMiIsICJsYXN0SW5kZXgiLCAiY3NzIiwgInJlZHVjZSIsICJwIiwgImkiLCAiaW50ZXJwb2xhdGlvbiIsICJiYXNlU3R5bGVkIiwgImN1c3RvbUNvbXBvbmVudCIsICJQcm94eSIsICJnZXQiLCAiXyIsICJzZXRJZkFic2VudCIsICJnZXRWYWx1ZSIsICJoYXMiLCAic2V0IiwgImV2ZW50Il0KfQo=
