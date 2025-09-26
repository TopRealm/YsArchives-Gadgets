/**
 * SPDX-License-Identifier: GPL-2.0-only
 * _addText: '{{Gadget Header|license=GPL-2.0-only}}'
 *
 * @base {@link https://github.com/wikimedia-gadgets/VariantAlly}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/VariantAllyDialog}
 * @license GPL-2.0 {@link https://youshou.wiki/wiki/H:GPLV2}
 */

/**
 * VariantAlly
 * Copyright (C) 2023-2024 Diskdance
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation, version 2.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
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

// dist/VariantAllyDialog/VariantAllyDialog.js
var _mw$config$get;
//! src/VariantAllyDialog/VariantAllyDialog.ts
var import_vue22 = require("vue");
var import_vue19 = require("vue");
var import_vue20 = require("vue");
var import_ext_gadget = require("ext.gadget.VariantAlly");
var import_vue11 = require("vue");
var import_vue12 = require("vue");
var import_vue3 = require("vue");
var import_vue = require("vue");
var VAIcon_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
  __name: "VAIcon",
  props: {
    icon: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      required: true
    }
  },
  setup(__props, {
    expose: __expose
  }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue2 = require("vue");
var _hoisted_1 = ["width", "height"];
var _hoisted_2 = {
  key: 0
};
var _hoisted_3 = /* @__PURE__ */ (0, import_vue2.createElementVNode)(
  "path",
  {
    d: "M20 18h-1.44a.61.61 0 01-.4-.12.81.81 0 01-.23-.31L17 15h-5l-1 2.54a.77.77 0 01-.22.3.59.59 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.19 17.19 0 01-5 2.1q.56.82.87 1.38a23.28 23.28 0 005.22-2.51 15.64 15.64 0 003.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 01-2.45 4.45 9.11 9.11 0 01-2.46-4.45z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_4 = {
  key: 1
};
var _hoisted_5 = /* @__PURE__ */ (0, import_vue2.createElementVNode)(
  "path",
  {
    d: "m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_6 = /* @__PURE__ */ (0, import_vue2.createElementVNode)(
  "path",
  {
    d: "M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_7 = [_hoisted_5, _hoisted_6];
var _hoisted_8 = {
  key: 2
};
var _hoisted_9 = /* @__PURE__ */ (0, import_vue2.createElementVNode)(
  "path",
  {
    d: "M8.59 3.42 14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_10 = [_hoisted_9];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("svg", {
    class: "va-icon-button__icon",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    width: $props.size,
    height: $props.size,
    viewBox: "0 0 20 20",
    "aria-hidden": "true"
  }, [$props.icon === "lang" ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("g", _hoisted_2, [(0, import_vue2.createCommentVNode)(" eslint-disable "), _hoisted_3, (0, import_vue2.createCommentVNode)(" eslint-enable ")])) : $props.icon === "close" ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("g", _hoisted_4, [..._hoisted_7])) : ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("g", _hoisted_8, [..._hoisted_10]))], 8, _hoisted_1);
}
//! src/VariantAllyDialog/components/VAIcon.vue
VAIcon_default.render = render;
VAIcon_default.__file = "src\\VariantAllyDialog\\components\\VAIcon.vue";
var VAIcon_default2 = VAIcon_default;
var VAButton_default = /* @__PURE__ */ (0, import_vue3.defineComponent)({
  __name: "VAButton",
  props: {
    icon: {
      type: String,
      required: false
    },
    indicator: {
      type: String,
      required: false
    },
    action: {
      type: String,
      required: false
    },
    weight: {
      type: String,
      required: false
    }
  },
  emits: ["click"],
  setup(__props, {
    expose: __expose
  }) {
    __expose();
    const __returned__ = {
      VAIcon: VAIcon_default2
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue4 = require("vue");
var _hoisted_12 = {
  key: 1,
  class: "va-button__text"
};
function render2(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)(
    "button",
    {
      class: (0, import_vue4.normalizeClass)(["va-button", {
        "va-button--action-progressive": $props.action === "progressive",
        "va-button--weight-quiet": $props.weight === "quiet"
      }]),
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click"))
    },
    [$props.icon !== void 0 ? ((0, import_vue4.openBlock)(), (0, import_vue4.createBlock)($setup["VAIcon"], {
      key: 0,
      class: "va-button__icon",
      icon: $props.icon,
      size: 20
    }, null, 8, ["icon"])) : (0, import_vue4.createCommentVNode)("v-if", true), _ctx.$slots["default"] ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("span", _hoisted_12, [(0, import_vue4.renderSlot)(_ctx.$slots, "default", {}, void 0, true)])) : (0, import_vue4.createCommentVNode)("v-if", true), $props.indicator !== void 0 ? ((0, import_vue4.openBlock)(), (0, import_vue4.createBlock)($setup["VAIcon"], {
      key: 2,
      class: "va-button__indicator",
      icon: $props.indicator,
      size: 16
    }, null, 8, ["icon"])) : (0, import_vue4.createCommentVNode)("v-if", true)],
    2
    /* CLASS */
  );
}
//! src/VariantAllyDialog/components/VAButton.vue
VAButton_default.render = render2;
VAButton_default.__file = "src\\VariantAllyDialog\\components\\VAButton.vue";
VAButton_default.__scopeId = "data-v-bb7734b1";
var VAButton_default2 = VAButton_default;
var import_vue5 = require("vue");
function render3(_ctx, _cache) {
  return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(import_vue5.Transition, {
    name: "va-fade",
    mode: "out-in"
  }, {
    default: (0, import_vue5.withCtx)(() => [(0, import_vue5.renderSlot)(_ctx.$slots, "default", {}, void 0, true)]),
    _: 3
    /* FORWARDED */
  });
}
//! src/VariantAllyDialog/components/VAFadeTransition.vue
var script = {};
script.render = render3;
script.__file = "src\\VariantAllyDialog\\components\\VAFadeTransition.vue";
script.__scopeId = "data-v-bb9c5751";
var VAFadeTransition_default = script;
//! src/VariantAllyDialog/composables/useI18n.ts
var import_vue7 = require("vue");
//! src/VariantAllyDialog/messages.json
var messages_default = {
  variants: {
    "zh-cn": "中国大陆简体",
    "zh-sg": "新加坡简体",
    "zh-my": "马来西亚简体",
    "zh-hk": "中國香港繁體",
    "zh-mo": "中國澳門繁體",
    "zh-tw": "中國臺灣繁體"
  },
  hans: {
    space: "",
    close: "关闭",
    "vp.header": "我们支持",
    "vp.header.alt": "记住此变体？",
    "vp.main": "选取内容的语言变体",
    "vp.main.alt": "以后都使用此变体呈现内容",
    "vp.main.ext": "保存您偏好的中文语言变体，以避免显示简繁混杂的内容，提供最佳的阅读体验。",
    "vp.button.ok": "确定",
    "vp.button.other": "其他"
  },
  hant: {
    space: "",
    close: "關閉",
    "vp.header": "我們支援",
    "vp.header.alt": "記住此變體？",
    "vp.main": "選取內容的語言變體",
    "vp.main.alt": "以後都使用此變體呈現內容",
    "vp.main.ext": "儲存您偏好的中文語言變體，以避免顯示簡繁混雜的內容，提供最佳的閱讀體驗。",
    "vp.button.ok": "確定",
    "vp.button.other": "其他"
  }
};
//! src/VariantAllyDialog/modules/utils.ts
var import_vue6 = require("vue");
var VALID_VARIANTS = ["zh-cn", "zh-sg", "zh-my", "zh-tw", "zh-hk", "zh-mo"];
var wgUserVariant = (0, import_vue6.ref)((_mw$config$get = mw.config.get("wgUserVariant")) !== null && _mw$config$get !== void 0 ? _mw$config$get : "");
function isMobileDevice() {
  return matchMedia("(hover: none), (pointer: coarse)").matches;
}
function getMountPoint() {
  var _document$querySelect, _document$querySelect2;
  switch (mw.config.get("skin")) {
    case "vector-2022":
      return (_document$querySelect = document.querySelectorAll(".mw-page-container")[0]) !== null && _document$querySelect !== void 0 ? _document$querySelect : document.body;
    case "gongbi":
      return (_document$querySelect2 = document.querySelector("#mw-content-block")) !== null && _document$querySelect2 !== void 0 ? _document$querySelect2 : document.body;
    default:
      return document.body;
  }
}
var inferredVariant = (0, import_vue6.computed)(() => {
  if (VALID_VARIANTS.includes(wgUserVariant.value)) {
    return wgUserVariant.value;
  }
  return null;
});
function shuffleVariant(last) {
  const targetArray = [...VALID_VARIANTS].filter((i) => {
    return i !== last;
  });
  const randomIndex = Math.floor(Math.random() * targetArray.length);
  return targetArray[randomIndex];
}
//! src/VariantAllyDialog/composables/useI18n.ts
var i18nVariant = (0, import_vue7.computed)(() => {
  if (wgUserVariant.value === "zh") {
    return Math.random() > 0.5 ? "hans" : "hant";
  }
  if (["zh-hant", "zh-tw", "zh-hk", "zh-mo"].includes(wgUserVariant.value)) {
    return "hant";
  }
  return "hans";
});
function useI18n(key) {
  var _currentMsgsGroup$key;
  const currentMsgsGroup = messages_default[i18nVariant.value];
  return (_currentMsgsGroup$key = currentMsgsGroup[key]) !== null && _currentMsgsGroup$key !== void 0 ? _currentMsgsGroup$key : key;
}
//! src/VariantAllyDialog/composables/useUniqueId.ts
var counter = 0;
function useUniqueId() {
  return "va-".concat(counter++);
}
var useUniqueId_default = useUniqueId;
//! src/VariantAllyDialog/composables/useShuffledVariant.ts
var import_vue8 = require("vue");
var INTERVAL = 3 * 1e3;
function useShuffledVariant(isFreezed) {
  const result = (0, import_vue8.ref)(shuffleVariant());
  let id;
  (0, import_vue8.watch)(isFreezed, (newValue) => {
    if (newValue) {
      var _inferredVariant$valu;
      clearInterval(id);
      result.value = (_inferredVariant$valu = inferredVariant.value) !== null && _inferredVariant$valu !== void 0 ? _inferredVariant$valu : shuffleVariant();
    } else {
      id = window.setInterval(() => {
        result.value = shuffleVariant(result.value);
      }, INTERVAL);
    }
  }, {
    immediate: true
  });
  return result;
}
var useShuffledVariant_default = useShuffledVariant;
//! src/VariantAllyDialog/composables/useModelWrapper.ts
var import_vue9 = require("vue");
function useModelWrapper(props, emit, name = "modelValue") {
  return (0, import_vue9.computed)({
    get() {
      return props[name];
    },
    set(value) {
      emit("update:".concat(name), value);
    }
  });
}
var useModelWrapper_default = useModelWrapper;
//! src/VariantAllyDialog/composables/useDefault.ts
var import_vue10 = require("vue");
function useDefault(defaultValue) {
  const realRef = (0, import_vue10.shallowRef)(typeof defaultValue === "function" ? defaultValue() : defaultValue.value);
  (0, import_vue10.watch)(defaultValue, (newValue) => {
    realRef.value = newValue;
  }, {
    deep: true
  });
  return (0, import_vue10.computed)({
    get() {
      return realRef.value;
    },
    set(newValue) {
      realRef.value = newValue;
    }
  });
}
var useDefault_default = useDefault;
var VAVariantPrompt_default = /* @__PURE__ */ (0, import_vue11.defineComponent)({
  __name: "VAVariantPrompt",
  props: {
    open: {
      type: Boolean,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    autoClose: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:open", "update:disabled", "select", "optout"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const prompt = (0, import_vue12.ref)(null);
    const titleId = useUniqueId_default();
    const descId = useUniqueId_default();
    const isOpen = useModelWrapper_default(props, emit, "open");
    const isDisabled = useModelWrapper_default(props, emit, "disabled");
    const isVariantNarrowed = useDefault_default(() => inferredVariant.value !== null);
    const shuffledVariant = useShuffledVariant_default(isVariantNarrowed);
    function optOutAndClose() {
      emit("optout");
      isOpen.value = false;
    }
    function select(variant) {
      isDisabled.value = true;
      emit("select", variant);
    }
    (0, import_vue12.watch)(prompt, () => {
      const element = prompt.value;
      if (element !== null) {
        element.addEventListener("mouseleave", (ev) => {
          if (ev.buttons === 0 && props.autoClose && !props.disabled) {
            isOpen.value = false;
          }
        });
      }
    });
    const __returned__ = {
      props,
      emit,
      prompt,
      titleId,
      descId,
      isOpen,
      isDisabled,
      isVariantNarrowed,
      shuffledVariant,
      optOutAndClose,
      select,
      VAButton: VAButton_default2,
      VAFadeTransition: VAFadeTransition_default,
      get useI18n() {
        return useI18n;
      },
      get i18nVariant() {
        return i18nVariant;
      },
      get VALID_VARIANTS() {
        return VALID_VARIANTS;
      },
      get inferredVariant() {
        return inferredVariant;
      },
      get messages() {
        return messages_default;
      }
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue13 = require("vue");
var _withScopeId = (n) => ((0, import_vue13.pushScopeId)("data-v-5a44cc75"), n = n(), (0, import_vue13.popScopeId)(), n);
var _hoisted_13 = ["lang", "aria-labelledby", "aria-describedby"];
var _hoisted_22 = ["id"];
var _hoisted_32 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ (0, import_vue13.createElementVNode)(
  "br",
  null,
  null,
  -1
  /* HOISTED */
));
var _hoisted_42 = ["lang"];
var _hoisted_52 = ["id"];
var _hoisted_62 = {
  class: "va-variant-prompt__options"
};
var _hoisted_72 = {
  class: "va-variant-prompt__footer"
};
var _hoisted_82 = {
  class: "va-para va-para--subtle"
};
function render4(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue13.openBlock)(), (0, import_vue13.createBlock)(import_vue13.Transition, {
    name: "va-variant-prompt",
    appear: ""
  }, {
    default: (0, import_vue13.withCtx)(() => [$props.open ? ((0, import_vue13.openBlock)(), (0, import_vue13.createElementBlock)("div", {
      key: 0,
      ref: "prompt",
      lang: "zh-".concat($setup.i18nVariant),
      class: "va-variant-prompt",
      role: "dialog",
      "aria-modal": "false",
      "aria-labelledby": $setup.titleId,
      "aria-describedby": $setup.descId
    }, [(0, import_vue13.createVNode)($setup["VAButton"], {
      class: "va-variant-prompt__close",
      weight: "quiet",
      icon: "close",
      title: $setup.useI18n("close"),
      "aria-label": $setup.useI18n("close"),
      disabled: $props.disabled,
      onClick: $setup.optOutAndClose
    }, null, 8, ["title", "aria-label", "disabled"]), (0, import_vue13.createElementVNode)("h2", {
      id: $setup.titleId,
      class: "va-variant-prompt__title va-title"
    }, [(0, import_vue13.createTextVNode)(
      (0, import_vue13.toDisplayString)($setup.useI18n($setup.isVariantNarrowed ? "vp.header.alt" : "vp.header")),
      1
      /* TEXT */
    ), _hoisted_32, (0, import_vue13.createVNode)($setup["VAFadeTransition"], null, {
      default: (0, import_vue13.withCtx)(() => [!$setup.isVariantNarrowed ? ((0, import_vue13.openBlock)(), (0, import_vue13.createElementBlock)("span", {
        key: $setup.shuffledVariant,
        lang: "zh-".concat($setup.shuffledVariant),
        class: "va-variant-prompt__title__variant"
      }, (0, import_vue13.toDisplayString)($setup.messages.variants[$setup.shuffledVariant]), 9, _hoisted_42)) : (0, import_vue13.createCommentVNode)("v-if", true)]),
      _: 1
      /* STABLE */
    })], 8, _hoisted_22), (0, import_vue13.createElementVNode)("p", {
      id: $setup.descId,
      class: "va-variant-prompt__desc va-para"
    }, (0, import_vue13.toDisplayString)($setup.useI18n($setup.isVariantNarrowed ? "vp.main.alt" : "vp.main")), 9, _hoisted_52), (0, import_vue13.createElementVNode)("div", _hoisted_62, [(0, import_vue13.createCommentVNode)(" inferredVariant is non-null, guarded by isVariantNarrowed "), ((0, import_vue13.openBlock)(true), (0, import_vue13.createElementBlock)(
      import_vue13.Fragment,
      null,
      (0, import_vue13.renderList)($setup.isVariantNarrowed && $setup.inferredVariant !== null ? [$setup.inferredVariant] : $setup.VALID_VARIANTS, (variant) => {
        return (0, import_vue13.openBlock)(), (0, import_vue13.createBlock)($setup["VAButton"], {
          key: variant,
          class: (0, import_vue13.normalizeClass)(["va-variant-prompt__options__button", {
            "va-variant-prompt__options__button--primary": $setup.isVariantNarrowed
          }]),
          indicator: "arrowNext",
          weight: "quiet",
          action: "progressive",
          lang: variant,
          disabled: $props.disabled,
          onClick: ($event) => $setup.select(variant)
        }, {
          default: (0, import_vue13.withCtx)(() => [(0, import_vue13.createTextVNode)(
            (0, import_vue13.toDisplayString)($setup.messages.variants[variant]),
            1
            /* TEXT */
          )]),
          _: 2
          /* DYNAMIC */
        }, 1032, ["class", "lang", "disabled", "onClick"]);
      }),
      128
      /* KEYED_FRAGMENT */
    )), $setup.isVariantNarrowed ? ((0, import_vue13.openBlock)(), (0, import_vue13.createBlock)($setup["VAButton"], {
      key: 0,
      class: "va-variant-prompt__options__button",
      indicator: "arrowNext",
      weight: "quiet",
      action: "progressive",
      disabled: $props.disabled,
      onClick: _cache[0] || (_cache[0] = ($event) => $setup.isVariantNarrowed = false)
    }, {
      default: (0, import_vue13.withCtx)(() => [(0, import_vue13.createTextVNode)(
        (0, import_vue13.toDisplayString)($setup.useI18n("vp.button.other")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["disabled"])) : (0, import_vue13.createCommentVNode)("v-if", true)]), (0, import_vue13.createElementVNode)("footer", _hoisted_72, [(0, import_vue13.createElementVNode)(
      "p",
      _hoisted_82,
      (0, import_vue13.toDisplayString)($setup.useI18n("vp.main.ext")),
      1
      /* TEXT */
    )])], 8, _hoisted_13)) : (0, import_vue13.createCommentVNode)("v-if", true)]),
    _: 1
    /* STABLE */
  });
}
//! src/VariantAllyDialog/components/VAVariantPrompt.vue
VAVariantPrompt_default.render = render4;
VAVariantPrompt_default.__file = "src\\VariantAllyDialog\\components\\VAVariantPrompt.vue";
VAVariantPrompt_default.__scopeId = "data-v-5a44cc75";
var VAVariantPrompt_default2 = VAVariantPrompt_default;
var import_vue16 = require("vue");
var import_vue17 = require("vue");
var import_vue14 = require("vue");
var VASelect_default = /* @__PURE__ */ (0, import_vue14.defineComponent)({
  __name: "VASelect",
  props: {
    modelValue: {
      type: String,
      required: true
    }
  },
  emits: ["update:modelValue"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const modelValue = useModelWrapper_default(props, emit);
    const __returned__ = {
      props,
      emit,
      modelValue
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue15 = require("vue");
function render5(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue15.withDirectives)(((0, import_vue15.openBlock)(), (0, import_vue15.createElementBlock)(
    "select",
    {
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.modelValue = $event),
      class: "va-select"
    },
    [(0, import_vue15.renderSlot)(_ctx.$slots, "default", {}, void 0, true)],
    512
    /* NEED_PATCH */
  )), [[import_vue15.vModelSelect, $setup.modelValue]]);
}
//! src/VariantAllyDialog/components/VASelect.vue
VASelect_default.render = render5;
VASelect_default.__file = "src\\VariantAllyDialog\\components\\VASelect.vue";
VASelect_default.__scopeId = "data-v-c9b46460";
var VASelect_default2 = VASelect_default;
var VAVariantPromptMobile_default = /* @__PURE__ */ (0, import_vue16.defineComponent)({
  __name: "VAVariantPromptMobile",
  props: {
    open: {
      type: Boolean,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:open", "update:disabled", "select", "optout"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const prompt = (0, import_vue17.ref)(null);
    const titleId = useUniqueId_default();
    const selectedVariant = useDefault_default(() => {
      var _inferredVariant$valu2;
      return (_inferredVariant$valu2 = inferredVariant.value) !== null && _inferredVariant$valu2 !== void 0 ? _inferredVariant$valu2 : shuffleVariant();
    });
    const isOpen = useModelWrapper_default(props, emit, "open");
    const isDisabled = useModelWrapper_default(props, emit, "disabled");
    function optOutAndClose() {
      emit("optout");
      isOpen.value = false;
    }
    function select(variant) {
      isDisabled.value = true;
      emit("select", variant);
    }
    const __returned__ = {
      props,
      emit,
      prompt,
      titleId,
      selectedVariant,
      isOpen,
      isDisabled,
      optOutAndClose,
      select,
      VAButton: VAButton_default2,
      VASelect: VASelect_default2,
      get useI18n() {
        return useI18n;
      },
      get i18nVariant() {
        return i18nVariant;
      },
      get VALID_VARIANTS() {
        return VALID_VARIANTS;
      },
      get messages() {
        return messages_default;
      }
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue18 = require("vue");
var _hoisted_14 = ["lang", "aria-labelledby"];
var _hoisted_23 = {
  class: "va-variant-prompt-mobile__header"
};
var _hoisted_33 = ["id"];
var _hoisted_43 = {
  class: "va-variant-prompt-mobile__main"
};
var _hoisted_53 = ["value", "lang"];
var _hoisted_63 = {
  class: "va-variant-prompt-mobile__footer"
};
var _hoisted_73 = {
  class: "va-para va-para--subtle"
};
function render6(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue18.openBlock)(), (0, import_vue18.createBlock)(import_vue18.Transition, {
    name: "va-variant-prompt-mobile",
    appear: ""
  }, {
    default: (0, import_vue18.withCtx)(() => [$props.open ? ((0, import_vue18.openBlock)(), (0, import_vue18.createElementBlock)("div", {
      key: 0,
      ref: "prompt",
      lang: "zh-".concat($setup.i18nVariant),
      class: "va-variant-prompt-mobile",
      role: "dialog",
      "aria-modal": "false",
      "aria-labelledby": $setup.titleId
    }, [(0, import_vue18.createElementVNode)("div", _hoisted_23, [(0, import_vue18.createElementVNode)("h2", {
      id: $setup.titleId,
      class: "va-variant-prompt-mobile__header__title va-title"
    }, (0, import_vue18.toDisplayString)($setup.useI18n("vp.main")), 9, _hoisted_33), (0, import_vue18.createVNode)($setup["VAButton"], {
      class: "va-variant-prompt-mobile__header__close",
      weight: "quiet",
      icon: "close",
      title: $setup.useI18n("close"),
      "aria-label": $setup.useI18n("close"),
      disabled: $props.disabled,
      onClick: $setup.optOutAndClose
    }, null, 8, ["title", "aria-label", "disabled"])]), (0, import_vue18.createElementVNode)("div", _hoisted_43, [(0, import_vue18.createVNode)($setup["VASelect"], {
      modelValue: $setup.selectedVariant,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.selectedVariant = $event),
      class: "va-variant-prompt-mobile__main__select",
      lang: $setup.selectedVariant,
      disabled: $props.disabled,
      "aria-labelledby": $setup.titleId
    }, {
      default: (0, import_vue18.withCtx)(() => [((0, import_vue18.openBlock)(true), (0, import_vue18.createElementBlock)(
        import_vue18.Fragment,
        null,
        (0, import_vue18.renderList)($setup.VALID_VARIANTS, (variant) => {
          return (0, import_vue18.openBlock)(), (0, import_vue18.createElementBlock)("option", {
            key: variant,
            value: variant,
            lang: variant
          }, (0, import_vue18.toDisplayString)($setup.messages.variants[variant]), 9, _hoisted_53);
        }),
        128
        /* KEYED_FRAGMENT */
      ))]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue", "lang", "disabled", "aria-labelledby"]), (0, import_vue18.createVNode)($setup["VAButton"], {
      class: "va-variant-prompt-mobile__main__action",
      action: "progressive",
      icon: "arrowNext",
      disabled: $props.disabled,
      onClick: _cache[1] || (_cache[1] = ($event) => $setup.select($setup.selectedVariant))
    }, {
      default: (0, import_vue18.withCtx)(() => [(0, import_vue18.createTextVNode)(
        (0, import_vue18.toDisplayString)($setup.useI18n("vp.button.ok")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["disabled"])]), (0, import_vue18.createElementVNode)("footer", _hoisted_63, [(0, import_vue18.createElementVNode)(
      "p",
      _hoisted_73,
      (0, import_vue18.toDisplayString)($setup.useI18n("vp.main.ext")),
      1
      /* TEXT */
    )])], 8, _hoisted_14)) : (0, import_vue18.createCommentVNode)("v-if", true)]),
    _: 1
    /* STABLE */
  });
}
//! src/VariantAllyDialog/components/VAVariantPromptMobile.vue
VAVariantPromptMobile_default.render = render6;
VAVariantPromptMobile_default.__file = "src\\VariantAllyDialog\\components\\VAVariantPromptMobile.vue";
VAVariantPromptMobile_default.__scopeId = "data-v-5cc7865b";
var VAVariantPromptMobile_default2 = VAVariantPromptMobile_default;
var App_default = /* @__PURE__ */ (0, import_vue19.defineComponent)({
  __name: "App",
  setup(__props, {
    expose: __expose
  }) {
    __expose();
    const isOpen = (0, import_vue20.ref)(true);
    const isDisabled = (0, import_vue20.ref)(false);
    const isMobile = isMobileDevice();
    const desktopMountPoint = getMountPoint();
    function setVariant(variant) {
      (0, import_ext_gadget.setLocalVariant)(variant);
      (0, import_ext_gadget.redirect)(variant, {
        forced: true
      });
    }
    addEventListener(isMobile ? "touchmove" : "scroll", () => {
      if (!isDisabled.value) {
        isOpen.value = false;
      }
    });
    function onOptOut() {
      (0, import_ext_gadget.setOptOut)();
    }
    const __returned__ = {
      isOpen,
      isDisabled,
      isMobile,
      desktopMountPoint,
      setVariant,
      onOptOut,
      VAVariantPrompt: VAVariantPrompt_default2,
      VAVariantPromptMobile: VAVariantPromptMobile_default2
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue21 = require("vue");
function render7(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue21.openBlock)(), (0, import_vue21.createElementBlock)(
    import_vue21.Fragment,
    null,
    [((0, import_vue21.openBlock)(), (0, import_vue21.createBlock)(import_vue21.Teleport, {
      to: $setup.desktopMountPoint
    }, [!$setup.isMobile ? ((0, import_vue21.openBlock)(), (0, import_vue21.createBlock)($setup["VAVariantPrompt"], {
      key: 0,
      open: $setup.isOpen,
      "onUpdate:open": _cache[0] || (_cache[0] = ($event) => $setup.isOpen = $event),
      disabled: $setup.isDisabled,
      "onUpdate:disabled": _cache[1] || (_cache[1] = ($event) => $setup.isDisabled = $event),
      "auto-close": false,
      onOptout: $setup.onOptOut,
      onSelect: $setup.setVariant
    }, null, 8, ["open", "disabled"])) : (0, import_vue21.createCommentVNode)("v-if", true)], 8, ["to"])), (0, import_vue21.createCommentVNode)(" Teleport to body because they are always floated at bottom "), ((0, import_vue21.openBlock)(), (0, import_vue21.createBlock)(import_vue21.Teleport, {
      to: "body"
    }, [$setup.isMobile ? ((0, import_vue21.openBlock)(), (0, import_vue21.createBlock)($setup["VAVariantPromptMobile"], {
      key: 0,
      open: $setup.isOpen,
      "onUpdate:open": _cache[2] || (_cache[2] = ($event) => $setup.isOpen = $event),
      disabled: $setup.isDisabled,
      "onUpdate:disabled": _cache[3] || (_cache[3] = ($event) => $setup.isDisabled = $event),
      onOptout: $setup.onOptOut,
      onSelect: $setup.setVariant
    }, null, 8, ["open", "disabled"])) : (0, import_vue21.createCommentVNode)("v-if", true)]))],
    64
    /* STABLE_FRAGMENT */
  );
}
//! src/VariantAllyDialog/App.vue
App_default.render = render7;
App_default.__file = "src\\VariantAllyDialog\\App.vue";
var App_default2 = App_default;
//! src/VariantAllyDialog/VariantAllyDialog.ts
var root = document.createElement("div");
document.body.append(root);
(0, import_vue22.createApp)(App_default2).mount(root);

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL1ZhcmlhbnRBbGx5RGlhbG9nLnRzIiwgImRpc3QvVmFyaWFudEFsbHlEaWFsb2cvc3JjL1ZhcmlhbnRBbGx5RGlhbG9nL0FwcC52dWUiLCAiZGlzdC9WYXJpYW50QWxseURpYWxvZy9zcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9uZW50cy9WQVZhcmlhbnRQcm9tcHQudnVlIiwgInNmYy10ZW1wbGF0ZTpFOlxcZ2hSZXBvXFxTaXRlR2FkZ2V0c1xcWXNBcmNoaXZlcy1HYWRnZXRzXFxzcmNcXFZhcmlhbnRBbGx5RGlhbG9nXFxjb21wb25lbnRzXFxWQUljb24udnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvbmVudHMvVkFJY29uLnZ1ZSIsICJzZmMtdGVtcGxhdGU6RTpcXGdoUmVwb1xcU2l0ZUdhZGdldHNcXFlzQXJjaGl2ZXMtR2FkZ2V0c1xcc3JjXFxWYXJpYW50QWxseURpYWxvZ1xcY29tcG9uZW50c1xcVkFCdXR0b24udnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvbmVudHMvVkFCdXR0b24udnVlIiwgInNmYy10ZW1wbGF0ZTpFOlxcZ2hSZXBvXFxTaXRlR2FkZ2V0c1xcWXNBcmNoaXZlcy1HYWRnZXRzXFxzcmNcXFZhcmlhbnRBbGx5RGlhbG9nXFxjb21wb25lbnRzXFxWQUZhZGVUcmFuc2l0aW9uLnZ1ZT90eXBlPXRlbXBsYXRlIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb25lbnRzL1ZBRmFkZVRyYW5zaXRpb24udnVlIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb3NhYmxlcy91c2VJMThuLnRzIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9tZXNzYWdlcy5qc29uIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9tb2R1bGVzL3V0aWxzLnRzIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb3NhYmxlcy91c2VVbmlxdWVJZC50cyIsICJzcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9zYWJsZXMvdXNlU2h1ZmZsZWRWYXJpYW50LnRzIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb3NhYmxlcy91c2VNb2RlbFdyYXBwZXIudHMiLCAic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvc2FibGVzL3VzZURlZmF1bHQudHMiLCAic2ZjLXRlbXBsYXRlOkU6XFxnaFJlcG9cXFNpdGVHYWRnZXRzXFxZc0FyY2hpdmVzLUdhZGdldHNcXHNyY1xcVmFyaWFudEFsbHlEaWFsb2dcXGNvbXBvbmVudHNcXFZBVmFyaWFudFByb21wdC52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9uZW50cy9WQVZhcmlhbnRQcm9tcHQudnVlIiwgImRpc3QvVmFyaWFudEFsbHlEaWFsb2cvc3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvbmVudHMvVkFWYXJpYW50UHJvbXB0TW9iaWxlLnZ1ZSIsICJkaXN0L1ZhcmlhbnRBbGx5RGlhbG9nL3NyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb25lbnRzL1ZBU2VsZWN0LnZ1ZSIsICJzZmMtdGVtcGxhdGU6RTpcXGdoUmVwb1xcU2l0ZUdhZGdldHNcXFlzQXJjaGl2ZXMtR2FkZ2V0c1xcc3JjXFxWYXJpYW50QWxseURpYWxvZ1xcY29tcG9uZW50c1xcVkFTZWxlY3QudnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvbmVudHMvVkFTZWxlY3QudnVlIiwgInNmYy10ZW1wbGF0ZTpFOlxcZ2hSZXBvXFxTaXRlR2FkZ2V0c1xcWXNBcmNoaXZlcy1HYWRnZXRzXFxzcmNcXFZhcmlhbnRBbGx5RGlhbG9nXFxjb21wb25lbnRzXFxWQVZhcmlhbnRQcm9tcHRNb2JpbGUudnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvbmVudHMvVkFWYXJpYW50UHJvbXB0TW9iaWxlLnZ1ZSIsICJzZmMtdGVtcGxhdGU6RTpcXGdoUmVwb1xcU2l0ZUdhZGdldHNcXFlzQXJjaGl2ZXMtR2FkZ2V0c1xcc3JjXFxWYXJpYW50QWxseURpYWxvZ1xcQXBwLnZ1ZT90eXBlPXRlbXBsYXRlIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9BcHAudnVlIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2NyZWF0ZUFwcH0gZnJvbSAndnVlJztcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAudnVlJztcblxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmQocm9vdCk7XG4vLyBBcHDnsbvlnovkuKLlpLHvvIzmiYvliqjorr7nva7nsbvlnosgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hcmd1bWVudFxuY3JlYXRlQXBwKEFwcCBhcyB1bmtub3duIGFzIGltcG9ydCgndnVlJykuRGVmaW5lQ29tcG9uZW50KS5tb3VudChyb290KTtcbiIsICI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtyZWZ9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge3NldExvY2FsVmFyaWFudCwgcmVkaXJlY3QsIFZhbGlkVmFyaWFudCwgc2V0T3B0T3V0fSBmcm9tICdleHQuZ2FkZ2V0LlZhcmlhbnRBbGx5JztcbmltcG9ydCBWQVZhcmlhbnRQcm9tcHQgZnJvbSAnLi9jb21wb25lbnRzL1ZBVmFyaWFudFByb21wdC52dWUnO1xuaW1wb3J0IFZBVmFyaWFudFByb21wdE1vYmlsZSBmcm9tICcuL2NvbXBvbmVudHMvVkFWYXJpYW50UHJvbXB0TW9iaWxlLnZ1ZSc7XG5pbXBvcnQge2dldE1vdW50UG9pbnQsIGlzTW9iaWxlRGV2aWNlfSBmcm9tICcuL21vZHVsZXMvdXRpbHMnO1xuXG5jb25zdCBpc09wZW4gPSByZWYodHJ1ZSk7XG5jb25zdCBpc0Rpc2FibGVkID0gcmVmKGZhbHNlKTtcbmNvbnN0IGlzTW9iaWxlID0gaXNNb2JpbGVEZXZpY2UoKTtcbmNvbnN0IGRlc2t0b3BNb3VudFBvaW50ID0gZ2V0TW91bnRQb2ludCgpO1xuXG5mdW5jdGlvbiBzZXRWYXJpYW50KHZhcmlhbnQ6IFZhbGlkVmFyaWFudCkge1xuXHRzZXRMb2NhbFZhcmlhbnQodmFyaWFudCk7XG5cdHJlZGlyZWN0KHZhcmlhbnQsIHtmb3JjZWQ6IHRydWV9KTtcbn1cblxuLy8gQnJvd3NlciBzdXBwb3J0OiBpT1MgU2FmYXJpIDwgMTVcbi8vIFdvcmsgYXJvdW5kIFNhZmFyaSBmaXJpbmcgc2Nyb2xsIGV2ZW50IGF0IHVuZXhwZWN0ZWQgY29uZGl0aW9ucyAoZS5nLiBwb3BwaW5nIHVwIFNlbGVjdClcbmFkZEV2ZW50TGlzdGVuZXIoaXNNb2JpbGUgPyAndG91Y2htb3ZlJyA6ICdzY3JvbGwnLCAoKSA9PiB7XG5cdGlmICghaXNEaXNhYmxlZC52YWx1ZSkge1xuXHRcdGlzT3Blbi52YWx1ZSA9IGZhbHNlO1xuXHR9XG59KTtcblxuZnVuY3Rpb24gb25PcHRPdXQoKSB7XG5cdHNldE9wdE91dCgpO1xufVxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cblx0PFRlbGVwb3J0IDp0bz1cImRlc2t0b3BNb3VudFBvaW50XCI+XG5cdFx0PFZBVmFyaWFudFByb21wdFxuXHRcdFx0di1pZj1cIiFpc01vYmlsZVwiXG5cdFx0XHR2LW1vZGVsOm9wZW49XCJpc09wZW5cIlxuXHRcdFx0di1tb2RlbDpkaXNhYmxlZD1cImlzRGlzYWJsZWRcIlxuXHRcdFx0OmF1dG8tY2xvc2U9XCJmYWxzZVwiXG5cdFx0XHRAb3B0b3V0PVwib25PcHRPdXRcIlxuXHRcdFx0QHNlbGVjdD1cInNldFZhcmlhbnRcIlxuXHRcdC8+XG5cdDwvVGVsZXBvcnQ+XG5cblx0PCEtLSBUZWxlcG9ydCB0byBib2R5IGJlY2F1c2UgdGhleSBhcmUgYWx3YXlzIGZsb2F0ZWQgYXQgYm90dG9tIC0tPlxuXHQ8VGVsZXBvcnQgdG89XCJib2R5XCI+XG5cdFx0PFZBVmFyaWFudFByb21wdE1vYmlsZVxuXHRcdFx0di1pZj1cImlzTW9iaWxlXCJcblx0XHRcdHYtbW9kZWw6b3Blbj1cImlzT3BlblwiXG5cdFx0XHR2LW1vZGVsOmRpc2FibGVkPVwiaXNEaXNhYmxlZFwiXG5cdFx0XHRAb3B0b3V0PVwib25PcHRPdXRcIlxuXHRcdFx0QHNlbGVjdD1cInNldFZhcmlhbnRcIlxuXHRcdC8+XG5cdDwvVGVsZXBvcnQ+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgbGFuZz1cImxlc3NcIj5cbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4vc3R5bGVzL3Rva2Vucy5sZXNzJztcblxuLnZhLXZhcmlhbnQtcHJvbXB0IHtcblx0Ly8gVmVjdG9yIDIwMjIgc3BlY2lmaWMgYWRqdXN0bWVudHNcblx0LnNraW4tdmVjdG9yLTIwMjIgJiB7XG5cdFx0Ly8gQ2FsY3VsYXRlZCBmcm9tIFZlY3RvciAyMDIyIHNvdXJjZSBjb2RlXG5cdFx0QHZlY3Rvci0yMDIyLWhlYWRlci1oZWlnaHQ6IDUwcHggKyAyICogOHB4O1xuXHRcdG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIEBzcGFjaW5nLXZlcnRpY2FsLWRpYWxvZyAtIEB2ZWN0b3ItMjAyMi1oZWFkZXItaGVpZ2h0KTtcblxuXHRcdC52ZWN0b3ItdG9jLWF2YWlsYWJsZS52ZWN0b3ItZmVhdHVyZS10b2MtcGlubmVkLWNsaWVudHByZWYtMSAmLFxuXHRcdC52ZWN0b3ItZmVhdHVyZS1tYWluLW1lbnUtcGlubmVkLWVuYWJsZWQgJiB7XG5cdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcblx0XHRcdFx0bGVmdDogdW5zZXQ7XG5cblx0XHRcdFx0Ly8gQ2FsY3VsYXRlZCBmcm9tIFZlY3RvciAyMDIyIHNvdXJjZSBjb2RlXG5cdFx0XHRcdC8vIEluIHRoaXMgd2lkdGggdGhpcyBwcm9tcHQgd2lsbCBub3Qgb2JzY3VyZSBhcnRpY2xlIGNvbnRlbnRcblx0XHRcdFx0QHZlY3Rvci0yMDIyLWxlZnQtcGFkZGluZzogMi43NWVtO1xuXHRcdFx0XHRtYXJnaW4tbGVmdDogLShAdmVjdG9yLTIwMjItbGVmdC1wYWRkaW5nIC8gMyAqIDIpO1xuXHRcdFx0XHRtYXgtd2lkdGg6IGNhbGMoMTIuMjVlbSArIDM2cHgpO1xuXHRcdFx0XHRwYWRkaW5nOiBAc3BhY2luZy0xMDA7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG5cdFx0XHRAdmVjdG9yLTIwMjItbGVmdC1wYWRkaW5nOiAzLjI1ZW07XG5cdFx0XHRsZWZ0OiB1bnNldDtcblx0XHRcdG1hcmdpbi1sZWZ0OiAtKEB2ZWN0b3ItMjAyMi1sZWZ0LXBhZGRpbmcgLyAzICogMik7XG5cdFx0XHRtYXgtd2lkdGg6IGNhbGMoMTUuNzVlbSArIDM2cHgpO1xuXHRcdH1cblx0fVxufVxuPC9zdHlsZT5cbi4vbW9kdWxlcy91dGlsc1xuIiwgIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge3JlZiwgd2F0Y2h9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge3R5cGUgVmFsaWRWYXJpYW50fSBmcm9tICdleHQuZ2FkZ2V0LlZhcmlhbnRBbGx5JztcbmltcG9ydCBWQUJ1dHRvbiBmcm9tICcuL1ZBQnV0dG9uLnZ1ZSc7XG5pbXBvcnQgVkFGYWRlVHJhbnNpdGlvbiBmcm9tICcuL1ZBRmFkZVRyYW5zaXRpb24udnVlJztcbmltcG9ydCB1c2VJMThuLCB7aTE4blZhcmlhbnR9IGZyb20gJy4uL2NvbXBvc2FibGVzL3VzZUkxOG4nO1xuaW1wb3J0IHVzZVVuaXF1ZUlkIGZyb20gJy4uL2NvbXBvc2FibGVzL3VzZVVuaXF1ZUlkJztcbmltcG9ydCB1c2VTaHVmZmxlZFZhcmlhbnQgZnJvbSAnLi4vY29tcG9zYWJsZXMvdXNlU2h1ZmZsZWRWYXJpYW50JztcbmltcG9ydCB7VkFMSURfVkFSSUFOVFMsIGluZmVycmVkVmFyaWFudH0gZnJvbSAnLi4vbW9kdWxlcy91dGlscyc7XG5pbXBvcnQgbWVzc2FnZXMgZnJvbSAnLi4vbWVzc2FnZXMuanNvbic7XG5pbXBvcnQgdXNlTW9kZWxXcmFwcGVyIGZyb20gJy4uL2NvbXBvc2FibGVzL3VzZU1vZGVsV3JhcHBlcic7XG5pbXBvcnQgdXNlRGVmYXVsdCBmcm9tICcuLi9jb21wb3NhYmxlcy91c2VEZWZhdWx0JztcblxuY29uc3QgcHJvcHMgPSB3aXRoRGVmYXVsdHMoXG5cdGRlZmluZVByb3BzPHtcblx0XHRvcGVuOiBib29sZWFuO1xuXHRcdGRpc2FibGVkPzogYm9vbGVhbjtcblx0XHRhdXRvQ2xvc2U/OiBib29sZWFuO1xuXHR9PigpLFxuXHR7XG5cdFx0ZGlzYWJsZWQ6IGZhbHNlLFxuXHRcdGF1dG9DbG9zZTogZmFsc2UsXG5cdH1cbik7XG5jb25zdCBlbWl0ID0gZGVmaW5lRW1pdHM8e1xuXHQoZTogJ3VwZGF0ZTpvcGVuJywgdmFsdWU6IGJvb2xlYW4pOiB2b2lkO1xuXHQoZTogJ3VwZGF0ZTpkaXNhYmxlZCcsIHZhbHVlOiBib29sZWFuKTogdm9pZDtcblx0KGU6ICdzZWxlY3QnLCB2YXJpYW50OiBWYWxpZFZhcmlhbnQpOiB2b2lkO1xuXHQoZTogJ29wdG91dCcpOiB2b2lkO1xufT4oKTtcblxuY29uc3QgcHJvbXB0ID0gcmVmPEhUTUxFbGVtZW50IHwgbnVsbD4obnVsbCk7XG5jb25zdCB0aXRsZUlkID0gdXNlVW5pcXVlSWQoKTtcbmNvbnN0IGRlc2NJZCA9IHVzZVVuaXF1ZUlkKCk7XG5jb25zdCBpc09wZW4gPSB1c2VNb2RlbFdyYXBwZXIocHJvcHMsIGVtaXQsICdvcGVuJyk7XG5jb25zdCBpc0Rpc2FibGVkID0gdXNlTW9kZWxXcmFwcGVyKHByb3BzLCBlbWl0LCAnZGlzYWJsZWQnKTtcbmNvbnN0IGlzVmFyaWFudE5hcnJvd2VkID0gdXNlRGVmYXVsdCgoKSA9PiBpbmZlcnJlZFZhcmlhbnQudmFsdWUgIT09IG51bGwpO1xuY29uc3Qgc2h1ZmZsZWRWYXJpYW50ID0gdXNlU2h1ZmZsZWRWYXJpYW50KGlzVmFyaWFudE5hcnJvd2VkKTtcblxuZnVuY3Rpb24gb3B0T3V0QW5kQ2xvc2UoKSB7XG5cdGVtaXQoJ29wdG91dCcpO1xuXHRpc09wZW4udmFsdWUgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0KHZhcmlhbnQ6IFZhbGlkVmFyaWFudCkge1xuXHRpc0Rpc2FibGVkLnZhbHVlID0gdHJ1ZTtcblx0ZW1pdCgnc2VsZWN0JywgdmFyaWFudCk7XG59XG5cbndhdGNoKHByb21wdCwgKCkgPT4ge1xuXHRjb25zdCBlbGVtZW50ID0gcHJvbXB0LnZhbHVlO1xuXHRpZiAoZWxlbWVudCAhPT0gbnVsbCkge1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIChldikgPT4ge1xuXHRcdFx0Ly8gRG8gbm90IGRpc21pc3MgaWYgYW55IGJ1dHRvbiBpcyBwcmVzc2VkIG9yIHRoZSBwcm9tcHQgaXMgZGlzYWJsZWRcblx0XHRcdGlmIChldi5idXR0b25zID09PSAwICYmIHByb3BzLmF1dG9DbG9zZSAmJiAhcHJvcHMuZGlzYWJsZWQpIHtcblx0XHRcdFx0aXNPcGVuLnZhbHVlID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn0pO1xuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cblx0PFRyYW5zaXRpb24gbmFtZT1cInZhLXZhcmlhbnQtcHJvbXB0XCIgYXBwZWFyPlxuXHRcdDxkaXZcblx0XHRcdHYtaWY9XCJvcGVuXCJcblx0XHRcdHJlZj1cInByb21wdFwiXG5cdFx0XHQ6bGFuZz1cImB6aC0ke2kxOG5WYXJpYW50fWBcIlxuXHRcdFx0Y2xhc3M9XCJ2YS12YXJpYW50LXByb21wdFwiXG5cdFx0XHRyb2xlPVwiZGlhbG9nXCJcblx0XHRcdGFyaWEtbW9kYWw9XCJmYWxzZVwiXG5cdFx0XHQ6YXJpYS1sYWJlbGxlZGJ5PVwidGl0bGVJZFwiXG5cdFx0XHQ6YXJpYS1kZXNjcmliZWRieT1cImRlc2NJZFwiXG5cdFx0PlxuXHRcdFx0PFZBQnV0dG9uXG5cdFx0XHRcdGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHRfX2Nsb3NlXCJcblx0XHRcdFx0d2VpZ2h0PVwicXVpZXRcIlxuXHRcdFx0XHRpY29uPVwiY2xvc2VcIlxuXHRcdFx0XHQ6dGl0bGU9XCJ1c2VJMThuKCdjbG9zZScpXCJcblx0XHRcdFx0OmFyaWEtbGFiZWw9XCJ1c2VJMThuKCdjbG9zZScpXCJcblx0XHRcdFx0OmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHRAY2xpY2s9XCJvcHRPdXRBbmRDbG9zZVwiXG5cdFx0XHQvPlxuXHRcdFx0PGgyIDppZD1cInRpdGxlSWRcIiBjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0X190aXRsZSB2YS10aXRsZVwiPlxuXHRcdFx0XHR7eyB1c2VJMThuKGlzVmFyaWFudE5hcnJvd2VkID8gJ3ZwLmhlYWRlci5hbHQnIDogJ3ZwLmhlYWRlcicpIH19PGJyIC8+XG5cdFx0XHRcdDxWQUZhZGVUcmFuc2l0aW9uPlxuXHRcdFx0XHRcdDxzcGFuXG5cdFx0XHRcdFx0XHR2LWlmPVwiIWlzVmFyaWFudE5hcnJvd2VkXCJcblx0XHRcdFx0XHRcdDprZXk9XCJzaHVmZmxlZFZhcmlhbnRcIlxuXHRcdFx0XHRcdFx0Omxhbmc9XCJgemgtJHtzaHVmZmxlZFZhcmlhbnR9YFwiXG5cdFx0XHRcdFx0XHRjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0X190aXRsZV9fdmFyaWFudFwiXG5cdFx0XHRcdFx0XHQ+e3sgbWVzc2FnZXMudmFyaWFudHNbc2h1ZmZsZWRWYXJpYW50XSB9fTwvc3BhblxuXHRcdFx0XHRcdD5cblx0XHRcdFx0PC9WQUZhZGVUcmFuc2l0aW9uPlxuXHRcdFx0PC9oMj5cblx0XHRcdDxwIDppZD1cImRlc2NJZFwiIGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHRfX2Rlc2MgdmEtcGFyYVwiPlxuXHRcdFx0XHR7eyB1c2VJMThuKGlzVmFyaWFudE5hcnJvd2VkID8gJ3ZwLm1haW4uYWx0JyA6ICd2cC5tYWluJykgfX1cblx0XHRcdDwvcD5cblx0XHRcdDxkaXYgY2xhc3M9XCJ2YS12YXJpYW50LXByb21wdF9fb3B0aW9uc1wiPlxuXHRcdFx0XHQ8IS0tIGluZmVycmVkVmFyaWFudCBpcyBub24tbnVsbCwgZ3VhcmRlZCBieSBpc1ZhcmlhbnROYXJyb3dlZCAtLT5cblx0XHRcdFx0PFZBQnV0dG9uXG5cdFx0XHRcdFx0di1mb3I9XCJ2YXJpYW50IGluIGlzVmFyaWFudE5hcnJvd2VkICYmIGluZmVycmVkVmFyaWFudCAhPT0gbnVsbFxuXHRcdFx0XHRcdFx0PyBbaW5mZXJyZWRWYXJpYW50XVxuXHRcdFx0XHRcdFx0OiBWQUxJRF9WQVJJQU5UU1wiXG5cdFx0XHRcdFx0OmtleT1cInZhcmlhbnRcIlxuXHRcdFx0XHRcdGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHRfX29wdGlvbnNfX2J1dHRvblwiXG5cdFx0XHRcdFx0OmNsYXNzPVwieyd2YS12YXJpYW50LXByb21wdF9fb3B0aW9uc19fYnV0dG9uLS1wcmltYXJ5JzogaXNWYXJpYW50TmFycm93ZWR9XCJcblx0XHRcdFx0XHRpbmRpY2F0b3I9XCJhcnJvd05leHRcIlxuXHRcdFx0XHRcdHdlaWdodD1cInF1aWV0XCJcblx0XHRcdFx0XHRhY3Rpb249XCJwcm9ncmVzc2l2ZVwiXG5cdFx0XHRcdFx0Omxhbmc9XCJ2YXJpYW50XCJcblx0XHRcdFx0XHQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG5cdFx0XHRcdFx0QGNsaWNrPVwic2VsZWN0KHZhcmlhbnQpXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdHt7IG1lc3NhZ2VzLnZhcmlhbnRzW3ZhcmlhbnRdIH19XG5cdFx0XHRcdDwvVkFCdXR0b24+XG5cdFx0XHRcdDxWQUJ1dHRvblxuXHRcdFx0XHRcdHYtaWY9XCJpc1ZhcmlhbnROYXJyb3dlZFwiXG5cdFx0XHRcdFx0Y2xhc3M9XCJ2YS12YXJpYW50LXByb21wdF9fb3B0aW9uc19fYnV0dG9uXCJcblx0XHRcdFx0XHRpbmRpY2F0b3I9XCJhcnJvd05leHRcIlxuXHRcdFx0XHRcdHdlaWdodD1cInF1aWV0XCJcblx0XHRcdFx0XHRhY3Rpb249XCJwcm9ncmVzc2l2ZVwiXG5cdFx0XHRcdFx0OmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHRcdEBjbGljaz1cImlzVmFyaWFudE5hcnJvd2VkID0gZmFsc2VcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e3sgdXNlSTE4bigndnAuYnV0dG9uLm90aGVyJykgfX1cblx0XHRcdFx0PC9WQUJ1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGZvb3RlciBjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0X19mb290ZXJcIj5cblx0XHRcdFx0PHAgY2xhc3M9XCJ2YS1wYXJhIHZhLXBhcmEtLXN1YnRsZVwiPlxuXHRcdFx0XHRcdHt7IHVzZUkxOG4oJ3ZwLm1haW4uZXh0JykgfX1cblx0XHRcdFx0PC9wPlxuXHRcdFx0PC9mb290ZXI+XG5cdFx0PC9kaXY+XG5cdDwvVHJhbnNpdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cImxlc3NcIj5cbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uL3N0eWxlcy9taXhpbnMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi9zdHlsZXMvdG9rZW5zLmxlc3MnO1xuXG4udmEtdGl0bGUge1xuXHRib3JkZXI6IDA7IC8vIFJlc2V0XG5cdHBhZGRpbmc6IDA7IC8vIFJlc2V0XG5cdG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG5cblx0Zm9udC1zaXplOiBAZm9udC1zaXplLXh4LWxhcmdlO1xuXHRmb250LXdlaWdodDogQGZvbnQtd2VpZ2h0LWJvbGQ7XG5cdG1hcmdpbjogQHNwYWNpbmctNTAgQHNwYWNpbmctMDtcblx0Y29sb3I6IEBjb2xvci1iYXNlO1xufVxuXG4udmEtcGFyYSB7XG5cdG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG5cdG1hcmdpbi10b3A6IEBzcGFjaW5nLTUwO1xuXHRtYXJnaW4tYm90dG9tOiBAc3BhY2luZy01MDtcblx0Y29sb3I6IEBjb2xvci1iYXNlO1xuXG5cdCYtLXN1YnRsZSB7XG5cdFx0Y29sb3I6IEBjb2xvci1zdWJ0bGU7XG5cdFx0Zm9udC1zaXplOiBAZm9udC1zaXplLXgtc21hbGw7XG5cdFx0bWFyZ2luLWJvdHRvbTogQHNwYWNpbmctMzU7XG5cdH1cbn1cblxuLnZhLXZhcmlhbnQtcHJvbXB0IHtcblx0Ym94LXNpemluZzogQGJveC1zaXppbmctYmFzZTtcblx0ei1pbmRleDogQHotaW5kZXgtb3ZlcmxheTtcblx0cGFkZGluZzogQHNwYWNpbmctMTAwIEBzcGFjaW5nLTE1MDtcblx0cG9zaXRpb246IGZpeGVkO1xuXHRsZWZ0OiBAc3BhY2luZy1ob3Jpem9udGFsLWRpYWxvZztcblx0Ym90dG9tOiBAc3BhY2luZy12ZXJ0aWNhbC1kaWFsb2c7XG5cdHdpZHRoOiBjYWxjKDEwMCUgLSBAc3BhY2luZy1ob3Jpem9udGFsLWRpYWxvZyAqIDIpO1xuXHRtYXgtd2lkdGg6IDE4ZW07XG5cdG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyZW0pO1xuXG5cdG92ZXJmbG93OiBhdXRvO1xuXHRvdmVyc2Nyb2xsLWJlaGF2aW9yOiBub25lO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBAYmFja2dyb3VuZC1jb2xvci1iYXNlO1xuXHRib3JkZXI6IEBib3JkZXItYmFzZTtcblx0Ym9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXMtYmFzZTtcblx0Ym94LXNoYWRvdzogQGJveC1zaGFkb3ctZHJvcC1tZWRpdW07XG5cdGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHktc3lzdGVtLXNhbnM7XG5cdGZvbnQtc2l6ZTogMXJlbTsgLy8gUmVzZXRcblx0bGluZS1oZWlnaHQ6IG5vcm1hbDsgLy8gUmVzZXRcblxuXHQmX19jbG9zZSB7XG5cdFx0cGFkZGluZzogQHNwYWNpbmctc2hvcnRoYW5kLWJ1dHRvbi1pY29uLW9ubHk7XG5cdFx0ZmxvYXQ6IHJpZ2h0O1xuXHRcdG1hcmdpbi10b3A6IEBzcGFjaW5nLTUwO1xuXHRcdG1hcmdpbi1yaWdodDogLShAc3BhY2luZy1ob3Jpem9udGFsLWJ1dHRvbi1pY29uLW9ubHkgKyAxcHgpO1xuXHR9XG5cblx0Jl9fdGl0bGUge1xuXHRcdCZfX3ZhcmlhbnQge1xuXHRcdFx0Y29sb3I6IEBjb2xvci1wcm9ncmVzc2l2ZTtcblx0XHR9XG5cdH1cblxuXHQmX19vcHRpb25zIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRtYXJnaW46IEBzcGFjaW5nLTc1IEBzcGFjaW5nLTA7XG5cblx0XHRib3JkZXI6IDFweCBzb2xpZCBAYm9yZGVyLWNvbG9yLWJhc2U7XG5cdFx0Ym9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXMtYmFzZTtcblxuXHRcdCZfX2J1dHRvbiB7XG5cdFx0XHRmb250LXNpemU6IEBmb250LXNpemUtc21hbGw7XG5cdFx0XHRjb2xvcjogQGNvbG9yLWJhc2U7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBAYmFja2dyb3VuZC1jb2xvci1pbnRlcmFjdGl2ZS1zdWJ0bGU7XG5cdFx0XHRib3JkZXItcmFkaXVzOiAwO1xuXG5cdFx0XHQmLS1wcmltYXJ5IHtcblx0XHRcdFx0Y29sb3I6IEBjb2xvci1wcm9ncmVzc2l2ZTtcblx0XHRcdH1cblxuXHRcdFx0Jjpob3Zlcixcblx0XHRcdCY6YWN0aXZlIHtcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiBAYm9yZGVyLWNvbG9yLXRyYW5zcGFyZW50O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4vKiBQcm9tcHQgdHJhbnNpdGlvbiBlZmZlY3QgKi9cbi52YS12YXJpYW50LXByb21wdC1lbnRlci1hY3RpdmUsXG4udmEtdmFyaWFudC1wcm9tcHQtbGVhdmUtYWN0aXZlIHtcblx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogQHRyYW5zaXRpb24tcHJvcGVydHktZmFkZTtcblx0dHJhbnNpdGlvbi1kdXJhdGlvbjogQHRyYW5zaXRpb24tZHVyYXRpb24tbWVkaXVtO1xuXHR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogQHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uLXN5c3RlbTtcbn1cblxuLnZhLXZhcmlhbnQtcHJvbXB0LWVudGVyLWZyb20sXG4udmEtdmFyaWFudC1wcm9tcHQtbGVhdmUtdG8ge1xuXHRvcGFjaXR5OiAwO1xufVxuPC9zdHlsZT5cbiIsICJpbXBvcnQgeyBjcmVhdGVDb21tZW50Vk5vZGUgYXMgX2NyZWF0ZUNvbW1lbnRWTm9kZSwgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jayB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfaG9pc3RlZF8xID0gW1wid2lkdGhcIiwgXCJoZWlnaHRcIl1cbmNvbnN0IF9ob2lzdGVkXzIgPSB7IGtleTogMCB9XG5jb25zdCBfaG9pc3RlZF8zID0gLyojX19QVVJFX18qL19jcmVhdGVFbGVtZW50Vk5vZGUoXCJwYXRoXCIsIHsgZDogXCJNMjAgMThoLTEuNDRhLjYxLjYxIDAgMDEtLjQtLjEyLjgxLjgxIDAgMDEtLjIzLS4zMUwxNyAxNWgtNWwtMSAyLjU0YS43Ny43NyAwIDAxLS4yMi4zLjU5LjU5IDAgMDEtLjQuMTRIOWw0LjU1LTExLjQ3aDEuODl6bS0zLjUzLTQuMzFMMTQuODkgOS41YTExLjYyIDExLjYyIDAgMDEtLjM5LTEuMjRxLS4wOS4zNy0uMTkuNjlsLS4xOS41Ni0xLjU4IDQuMTl6bS02LjMtMS41OGExMy40MyAxMy40MyAwIDAxLTIuOTEtMS40MSAxMS40NiAxMS40NiAwIDAwMi44MS01LjM3SDEyVjRINy4zMWE0IDQgMCAwMC0uMi0uNTZDNi44NyAyLjc5IDYuNiAyIDYuNiAybC0xLjQ3LjVzLjQuODkuNiAxLjVIMHYxLjMzaDIuMTVBMTEuMjMgMTEuMjMgMCAwMDUgMTAuN2ExNy4xOSAxNy4xOSAwIDAxLTUgMi4xcS41Ni44Mi44NyAxLjM4YTIzLjI4IDIzLjI4IDAgMDA1LjIyLTIuNTEgMTUuNjQgMTUuNjQgMCAwMDMuNTYgMS43N3pNMy42MyA1LjMzaDQuOTFhOC4xMSA4LjExIDAgMDEtMi40NSA0LjQ1IDkuMTEgOS4xMSAwIDAxLTIuNDYtNC40NXpcIiB9LCBudWxsLCAtMSAvKiBIT0lTVEVEICovKVxuY29uc3QgX2hvaXN0ZWRfNCA9IHsga2V5OiAxIH1cbmNvbnN0IF9ob2lzdGVkXzUgPSAvKiNfX1BVUkVfXyovX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBhdGhcIiwgeyBkOiBcIm00LjM0IDIuOTMgMTIuNzMgMTIuNzMtMS40MSAxLjQxTDIuOTMgNC4zNXpcIiB9LCBudWxsLCAtMSAvKiBIT0lTVEVEICovKVxuY29uc3QgX2hvaXN0ZWRfNiA9IC8qI19fUFVSRV9fKi9fY3JlYXRlRWxlbWVudFZOb2RlKFwicGF0aFwiLCB7IGQ6IFwiTTE3LjA3IDQuMzQgNC4zNCAxNy4wN2wtMS40MS0xLjQxTDE1LjY2IDIuOTN6XCIgfSwgbnVsbCwgLTEgLyogSE9JU1RFRCAqLylcbmNvbnN0IF9ob2lzdGVkXzcgPSBbXG4gIF9ob2lzdGVkXzUsXG4gIF9ob2lzdGVkXzZcbl1cbmNvbnN0IF9ob2lzdGVkXzggPSB7IGtleTogMiB9XG5jb25zdCBfaG9pc3RlZF85ID0gLyojX19QVVJFX18qL19jcmVhdGVFbGVtZW50Vk5vZGUoXCJwYXRoXCIsIHsgZDogXCJNOC41OSAzLjQyIDE0LjE3IDlIMnYyaDEyLjE3bC01LjU4IDUuNTlMMTAgMThsOC04LTgtOHpcIiB9LCBudWxsLCAtMSAvKiBIT0lTVEVEICovKVxuY29uc3QgX2hvaXN0ZWRfMTAgPSBbXG4gIF9ob2lzdGVkXzlcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJzdmdcIiwge1xuICAgIGNsYXNzOiBcInZhLWljb24tYnV0dG9uX19pY29uXCIsXG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICBcInhtbG5zOnhsaW5rXCI6IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLFxuICAgIHdpZHRoOiAkcHJvcHMuc2l6ZSxcbiAgICBoZWlnaHQ6ICRwcm9wcy5zaXplLFxuICAgIHZpZXdCb3g6IFwiMCAwIDIwIDIwXCIsXG4gICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICB9LCBbXG4gICAgKCRwcm9wcy5pY29uID09PSAnbGFuZycpXG4gICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJnXCIsIF9ob2lzdGVkXzIsIFtcbiAgICAgICAgICBfY3JlYXRlQ29tbWVudFZOb2RlKFwiIGVzbGludC1kaXNhYmxlIFwiKSxcbiAgICAgICAgICBfaG9pc3RlZF8zLFxuICAgICAgICAgIF9jcmVhdGVDb21tZW50Vk5vZGUoXCIgZXNsaW50LWVuYWJsZSBcIilcbiAgICAgICAgXSkpXG4gICAgICA6ICgkcHJvcHMuaWNvbiA9PT0gJ2Nsb3NlJylcbiAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZ1wiLCBfaG9pc3RlZF80LCBbLi4uX2hvaXN0ZWRfN10pKVxuICAgICAgICA6IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJnXCIsIF9ob2lzdGVkXzgsIFsuLi5faG9pc3RlZF8xMF0pKVxuICBdLCA4IC8qIFBST1BTICovLCBfaG9pc3RlZF8xKSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRTpcXFxcZ2hSZXBvXFxcXFNpdGVHYWRnZXRzXFxcXFlzQXJjaGl2ZXMtR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQUljb24udnVlP3R5cGU9c2NyaXB0XCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkU6XFxcXGdoUmVwb1xcXFxTaXRlR2FkZ2V0c1xcXFxZc0FyY2hpdmVzLUdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFJY29uLnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFJY29uLnZ1ZVwiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiLCAiaW1wb3J0IHsgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUJsb2NrIGFzIF9jcmVhdGVCbG9jaywgY3JlYXRlQ29tbWVudFZOb2RlIGFzIF9jcmVhdGVDb21tZW50Vk5vZGUsIHJlbmRlclNsb3QgYXMgX3JlbmRlclNsb3QsIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrLCBub3JtYWxpemVDbGFzcyBhcyBfbm9ybWFsaXplQ2xhc3MsIHB1c2hTY29wZUlkIGFzIF9wdXNoU2NvcGVJZCwgcG9wU2NvcGVJZCBhcyBfcG9wU2NvcGVJZCB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfd2l0aFNjb3BlSWQgPSBuID0+IChfcHVzaFNjb3BlSWQoXCJkYXRhLXYtYmI3NzM0YjFcIiksbj1uKCksX3BvcFNjb3BlSWQoKSxuKVxuY29uc3QgX2hvaXN0ZWRfMSA9IHtcbiAga2V5OiAxLFxuICBjbGFzczogXCJ2YS1idXR0b25fX3RleHRcIlxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImJ1dHRvblwiLCB7XG4gICAgY2xhc3M6IF9ub3JtYWxpemVDbGFzcyhbXCJ2YS1idXR0b25cIiwge1xuXHRcdFx0J3ZhLWJ1dHRvbi0tYWN0aW9uLXByb2dyZXNzaXZlJzogJHByb3BzLmFjdGlvbiA9PT0gJ3Byb2dyZXNzaXZlJyxcblx0XHRcdCd2YS1idXR0b24tLXdlaWdodC1xdWlldCc6ICRwcm9wcy53ZWlnaHQgPT09ICdxdWlldCcsXG5cdFx0fV0pLFxuICAgIG9uQ2xpY2s6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gJGV2ZW50ID0+IChfY3R4LiRlbWl0KCdjbGljaycpKSlcbiAgfSwgW1xuICAgICgkcHJvcHMuaWNvbiAhPT0gdW5kZWZpbmVkKVxuICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiVkFJY29uXCJdLCB7XG4gICAgICAgICAga2V5OiAwLFxuICAgICAgICAgIGNsYXNzOiBcInZhLWJ1dHRvbl9faWNvblwiLFxuICAgICAgICAgIGljb246ICRwcm9wcy5pY29uLFxuICAgICAgICAgIHNpemU6IDIwXG4gICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcImljb25cIl0pKVxuICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKSxcbiAgICAoX2N0eC4kc2xvdHNbJ2RlZmF1bHQnXSlcbiAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcInNwYW5cIiwgX2hvaXN0ZWRfMSwgW1xuICAgICAgICAgIF9yZW5kZXJTbG90KF9jdHguJHNsb3RzLCBcImRlZmF1bHRcIiwge30sIHVuZGVmaW5lZCwgdHJ1ZSlcbiAgICAgICAgXSkpXG4gICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpLFxuICAgICgkcHJvcHMuaW5kaWNhdG9yICE9PSB1bmRlZmluZWQpXG4gICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jaygkc2V0dXBbXCJWQUljb25cIl0sIHtcbiAgICAgICAgICBrZXk6IDIsXG4gICAgICAgICAgY2xhc3M6IFwidmEtYnV0dG9uX19pbmRpY2F0b3JcIixcbiAgICAgICAgICBpY29uOiAkcHJvcHMuaW5kaWNhdG9yLFxuICAgICAgICAgIHNpemU6IDE2XG4gICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcImljb25cIl0pKVxuICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKVxuICBdLCAyIC8qIENMQVNTICovKSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRTpcXFxcZ2hSZXBvXFxcXFNpdGVHYWRnZXRzXFxcXFlzQXJjaGl2ZXMtR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQUJ1dHRvbi52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgXCJFOlxcXFxnaFJlcG9cXFxcU2l0ZUdhZGdldHNcXFxcWXNBcmNoaXZlcy1HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBQnV0dG9uLnZ1ZT90eXBlPXN0eWxlJmluZGV4PTBcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRTpcXFxcZ2hSZXBvXFxcXFNpdGVHYWRnZXRzXFxcXFlzQXJjaGl2ZXMtR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQUJ1dHRvbi52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBQnV0dG9uLnZ1ZVwiO3NjcmlwdC5fX3Njb3BlSWQgPSBcImRhdGEtdi1iYjc3MzRiMVwiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiLCAiaW1wb3J0IHsgcmVuZGVyU2xvdCBhcyBfcmVuZGVyU2xvdCwgVHJhbnNpdGlvbiBhcyBfVHJhbnNpdGlvbiwgd2l0aEN0eCBhcyBfd2l0aEN0eCwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUJsb2NrIGFzIF9jcmVhdGVCbG9jayB9IGZyb20gXCJ2dWVcIlxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSkge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKF9UcmFuc2l0aW9uLCB7XG4gICAgbmFtZTogXCJ2YS1mYWRlXCIsXG4gICAgbW9kZTogXCJvdXQtaW5cIlxuICB9LCB7XG4gICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgX3JlbmRlclNsb3QoX2N0eC4kc2xvdHMsIFwiZGVmYXVsdFwiLCB7fSwgdW5kZWZpbmVkLCB0cnVlKVxuICAgIF0pLFxuICAgIF86IDMgLyogRk9SV0FSREVEICovXG4gIH0pKVxufSIsICJjb25zdCBzY3JpcHQgPSB7fTtpbXBvcnQgXCJFOlxcXFxnaFJlcG9cXFxcU2l0ZUdhZGdldHNcXFxcWXNBcmNoaXZlcy1HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBRmFkZVRyYW5zaXRpb24udnVlP3R5cGU9c3R5bGUmaW5kZXg9MFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJFOlxcXFxnaFJlcG9cXFxcU2l0ZUdhZGdldHNcXFxcWXNBcmNoaXZlcy1HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBRmFkZVRyYW5zaXRpb24udnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQUZhZGVUcmFuc2l0aW9uLnZ1ZVwiO3NjcmlwdC5fX3Njb3BlSWQgPSBcImRhdGEtdi1iYjljNTc1MVwiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiLCAiaW1wb3J0IHtjb21wdXRlZH0gZnJvbSAndnVlJztcbmltcG9ydCBtZXNzYWdlcyBmcm9tICcuLi9tZXNzYWdlcy5qc29uJztcbmltcG9ydCB7d2dVc2VyVmFyaWFudH0gZnJvbSAnLi4vbW9kdWxlcy91dGlscyc7XG5cbi8vIEludGVyZmFjZSB2YXJpYW50IG9mIHZhcmlhbnQgcHJvbXB0XG5jb25zdCBpMThuVmFyaWFudCA9IGNvbXB1dGVkKCgpID0+IHtcblx0aWYgKHdnVXNlclZhcmlhbnQudmFsdWUgPT09ICd6aCcpIHtcblx0XHQvLyBObyBjb252ZXJzaW9uOiB1c2UgcmFuZG9tbHkgc2VsZWN0ZWQgdmFyaWFudFxuXHRcdHJldHVybiBNYXRoLnJhbmRvbSgpID4gMC41ID8gJ2hhbnMnIDogJ2hhbnQnO1xuXHR9XG5cdGlmIChbJ3poLWhhbnQnLCAnemgtdHcnLCAnemgtaGsnLCAnemgtbW8nXS5pbmNsdWRlcyh3Z1VzZXJWYXJpYW50LnZhbHVlKSkge1xuXHRcdHJldHVybiAnaGFudCc7XG5cdH1cblxuXHRyZXR1cm4gJ2hhbnMnO1xufSk7XG5cbmZ1bmN0aW9uIHVzZUkxOG4oa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuXHRjb25zdCBjdXJyZW50TXNnc0dyb3VwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0gbWVzc2FnZXNbaTE4blZhcmlhbnQudmFsdWVdO1xuXHRyZXR1cm4gY3VycmVudE1zZ3NHcm91cFtrZXldID8/IGtleTtcbn1cblxuZXhwb3J0IHt1c2VJMThuIGFzIGRlZmF1bHQsIGkxOG5WYXJpYW50fTtcbiIsICJ7XG5cdFwidmFyaWFudHNcIjoge1xuXHRcdFwiemgtY25cIjogXCLkuK3lm73lpKfpmYbnroDkvZNcIixcblx0XHRcInpoLXNnXCI6IFwi5paw5Yqg5Z2h566A5L2TXCIsXG5cdFx0XCJ6aC1teVwiOiBcIumprOadpeilv+S6mueugOS9k1wiLFxuXHRcdFwiemgtaGtcIjogXCLkuK3lnIvpppnmuK/nuYHpq5RcIixcblx0XHRcInpoLW1vXCI6IFwi5Lit5ZyL5r6z6ZaA57mB6auUXCIsXG5cdFx0XCJ6aC10d1wiOiBcIuS4reWci+iHuueBo+e5gemrlFwiXG5cdH0sXG5cdFwiaGFuc1wiOiB7XG5cdFx0XCJzcGFjZVwiOiBcIlwiLFxuXHRcdFwiY2xvc2VcIjogXCLlhbPpl61cIixcblx0XHRcInZwLmhlYWRlclwiOiBcIuaIkeS7rOaUr+aMgVwiLFxuXHRcdFwidnAuaGVhZGVyLmFsdFwiOiBcIuiusOS9j+atpOWPmOS9k++8n1wiLFxuXHRcdFwidnAubWFpblwiOiBcIumAieWPluWGheWuueeahOivreiogOWPmOS9k1wiLFxuXHRcdFwidnAubWFpbi5hbHRcIjogXCLku6XlkI7pg73kvb/nlKjmraTlj5jkvZPlkYjnjrDlhoXlrrlcIixcblx0XHRcInZwLm1haW4uZXh0XCI6IFwi5L+d5a2Y5oKo5YGP5aW955qE5Lit5paH6K+t6KiA5Y+Y5L2T77yM5Lul6YG/5YWN5pi+56S6566A57mB5re35p2C55qE5YaF5a6577yM5o+Q5L6b5pyA5L2z55qE6ZiF6K+75L2T6aqM44CCXCIsXG5cdFx0XCJ2cC5idXR0b24ub2tcIjogXCLnoa7lrppcIixcblx0XHRcInZwLmJ1dHRvbi5vdGhlclwiOiBcIuWFtuS7llwiXG5cdH0sXG5cdFwiaGFudFwiOiB7XG5cdFx0XCJzcGFjZVwiOiBcIlwiLFxuXHRcdFwiY2xvc2VcIjogXCLpl5zplolcIixcblx0XHRcInZwLmhlYWRlclwiOiBcIuaIkeWAkeaUr+aPtFwiLFxuXHRcdFwidnAuaGVhZGVyLmFsdFwiOiBcIuiomOS9j+atpOiuiumrlO+8n1wiLFxuXHRcdFwidnAubWFpblwiOiBcIumBuOWPluWFp+WuueeahOiqnuiogOiuiumrlFwiLFxuXHRcdFwidnAubWFpbi5hbHRcIjogXCLku6Xlvozpg73kvb/nlKjmraTororpq5TlkYjnj77lhaflrrlcIixcblx0XHRcInZwLm1haW4uZXh0XCI6IFwi5YSy5a2Y5oKo5YGP5aW955qE5Lit5paH6Kqe6KiA6K6K6auU77yM5Lul6YG/5YWN6aGv56S657Ch57mB5re36Zuc55qE5YWn5a6577yM5o+Q5L6b5pyA5L2z55qE6Zax6K6A6auU6amX44CCXCIsXG5cdFx0XCJ2cC5idXR0b24ub2tcIjogXCLnorrlrppcIixcblx0XHRcInZwLmJ1dHRvbi5vdGhlclwiOiBcIuWFtuS7llwiXG5cdH1cbn1cbiIsICJpbXBvcnQge3R5cGUgVmFsaWRWYXJpYW50fSBmcm9tICdleHQuZ2FkZ2V0LlZhcmlhbnRBbGx5JztcbmltcG9ydCB7Y29tcHV0ZWQsIHJlZn0gZnJvbSAndnVlJztcblxuY29uc3QgVkFMSURfVkFSSUFOVFMgPSBbJ3poLWNuJywgJ3poLXNnJywgJ3poLW15JywgJ3poLXR3JywgJ3poLWhrJywgJ3poLW1vJ10gYXMgY29uc3Q7XG5cbi8vIFdyYXAgd2dVc2VyVmFyaWFudCBpbiBhIHJlZiBmb3IgZGVidWdnaW5nIHB1cnBvc2VzLlxuLy8gSXQgaGFzIG5vIHJlYWN0aXZpdHkgaW4gcHJvZHVjdGlvbi4gKGNoYW5nZXMgdG8gd2dVc2VyVmFyaWFudCB3aWxsIG5vdCBiZSByZWZsZWN0ZWQpXG4vLyB3Z1VzZXJWYXJpYW50IGNhbiBiZSBudWxsLCBzbyBmYWxscyBiYWNrIHRvIGFuIGVtcHR5IHN0cmluZy5cbmNvbnN0IHdnVXNlclZhcmlhbnQgPSByZWYobXcuY29uZmlnLmdldCgnd2dVc2VyVmFyaWFudCcpID8/ICcnKTtcblxuZnVuY3Rpb24gaXNNb2JpbGVEZXZpY2UoKTogYm9vbGVhbiB7XG5cdC8vIEJyb3dzZXIgc3VwcG9ydDpcblx0Ly8gQ2hyb21pdW0gb24gc29tZSBBbmRyb2lkIGRldmljZSAoZS5nLiBTYW1zdW5nKSBoYXMgXCIoaG92ZXI6IGhvdmVyKVwiIHNldFxuXHQvLyBTbyBjaGVjayBwb2ludGVyIHRvZ2V0aGVyXG5cdHJldHVybiBtYXRjaE1lZGlhKCcoaG92ZXI6IG5vbmUpLCAocG9pbnRlcjogY29hcnNlKScpLm1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIGdldE1vdW50UG9pbnQoKTogRWxlbWVudCB7XG5cdHN3aXRjaCAobXcuY29uZmlnLmdldCgnc2tpbicpKSB7XG5cdFx0Y2FzZSAndmVjdG9yLTIwMjInOlxuXHRcdFx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tdy1wYWdlLWNvbnRhaW5lcicpWzBdID8/IGRvY3VtZW50LmJvZHk7XG5cdFx0Y2FzZSAnZ29uZ2JpJzpcblx0XHRcdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXctY29udGVudC1ibG9jaycpID8/IGRvY3VtZW50LmJvZHk7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBkb2N1bWVudC5ib2R5O1xuXHR9XG59XG5cbmNvbnN0IGluZmVycmVkVmFyaWFudCA9IGNvbXB1dGVkKCgpID0+IHtcblx0aWYgKChWQUxJRF9WQVJJQU5UUyBhcyBSZWFkb25seUFycmF5PHN0cmluZz4pLmluY2x1ZGVzKHdnVXNlclZhcmlhbnQudmFsdWUpKSB7XG5cdFx0cmV0dXJuIHdnVXNlclZhcmlhbnQudmFsdWUgYXMgVmFsaWRWYXJpYW50O1xuXHR9XG5cdHJldHVybiBudWxsO1xufSk7XG5cbi8qKlxuICogU2h1ZmZsZSBiZXR3ZWVuIGFsbCB2YWxpZCB2YXJpYW50cy5cbiAqXG4gKiBAcGFyYW0gbGFzdCBsYXN0IHNodWZmbGVkIHZhcmlhbnQsIHVzZWQgdG8gcHJldmVudCBkdXBsaWNhdGlvbnNcbiAqIEByZXR1cm5zIHNodWZmbGVkIHZhcmlhbnRcbiAqL1xuZnVuY3Rpb24gc2h1ZmZsZVZhcmlhbnQobGFzdD86IFZhbGlkVmFyaWFudCk6IFZhbGlkVmFyaWFudCB7XG5cdGNvbnN0IHRhcmdldEFycmF5ID0gWy4uLlZBTElEX1ZBUklBTlRTXS5maWx0ZXIoKGkpID0+IHtcblx0XHRyZXR1cm4gaSAhPT0gbGFzdDtcblx0fSk7XG5cdGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGFyZ2V0QXJyYXkubGVuZ3RoKTtcblx0cmV0dXJuIHRhcmdldEFycmF5W3JhbmRvbUluZGV4XSE7XG59XG5cbmV4cG9ydCB7VkFMSURfVkFSSUFOVFMsIHdnVXNlclZhcmlhbnQsIGlzTW9iaWxlRGV2aWNlLCBnZXRNb3VudFBvaW50LCBpbmZlcnJlZFZhcmlhbnQsIHNodWZmbGVWYXJpYW50fTtcbiIsICJsZXQgY291bnRlciA9IDA7XG5cbi8qKlxuICogUmV0dXJuIGEgdW5pcXVlIGVsZW1lbnQgSUQgb24gZWFjaCBjYWxsLlxuICpcbiAqIEByZXR1cm5zIGlkXG4gKi9cbmZ1bmN0aW9uIHVzZVVuaXF1ZUlkKCk6IHN0cmluZyB7XG5cdHJldHVybiBgdmEtJHtjb3VudGVyKyt9YDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlVW5pcXVlSWQ7XG4iLCAiaW1wb3J0IHtSZWYsIHJlZiwgd2F0Y2h9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge3R5cGUgVmFsaWRWYXJpYW50fSBmcm9tICdleHQuZ2FkZ2V0LlZhcmlhbnRBbGx5JztcbmltcG9ydCB7aW5mZXJyZWRWYXJpYW50LCBzaHVmZmxlVmFyaWFudH0gZnJvbSAnLi4vbW9kdWxlcy91dGlscyc7XG5cbmNvbnN0IElOVEVSVkFMID0gMyAqIDEwMDA7XG5cbi8qKlxuICogUmV0dXJuIGEgcmVmIHdoaWNoIHNodWZmbGUgYmV0d2VlbiBhbGwgcG9zc2libGUgdmFyaWFudHMuXG4gKlxuICogQHBhcmFtIGlzRnJlZXplZCBzaG91bGQgc2h1ZmZsaW5nIHBhdXNlIG9yIG5vdFxuICovXG5mdW5jdGlvbiB1c2VTaHVmZmxlZFZhcmlhbnQoaXNGcmVlemVkOiBSZWY8Ym9vbGVhbj4pOiBSZWY8VmFsaWRWYXJpYW50PiB7XG5cdGNvbnN0IHJlc3VsdCA9IHJlZjxWYWxpZFZhcmlhbnQ+KHNodWZmbGVWYXJpYW50KCkpO1xuXHRsZXQgaWQ6IG51bWJlcjtcblxuXHR3YXRjaChcblx0XHRpc0ZyZWV6ZWQsXG5cdFx0KG5ld1ZhbHVlKSA9PiB7XG5cdFx0XHRpZiAobmV3VmFsdWUpIHtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbChpZCk7XG5cdFx0XHRcdC8vIEF0dGVtcHQgdG8gZnJlZXplIGF0IGluZmVycmVkIHZhcmlhbnQgYXQgYSBiZXN0IGVmZm9ydFxuXHRcdFx0XHQvLyBUaGlzIHNob3VsZCBiZSBtb3N0IGNhc2VzXG5cdFx0XHRcdHJlc3VsdC52YWx1ZSA9IGluZmVycmVkVmFyaWFudC52YWx1ZSA/PyBzaHVmZmxlVmFyaWFudCgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0XHRcdHJlc3VsdC52YWx1ZSA9IHNodWZmbGVWYXJpYW50KHJlc3VsdC52YWx1ZSk7XG5cdFx0XHRcdH0sIElOVEVSVkFMKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdHtpbW1lZGlhdGU6IHRydWV9XG5cdCk7XG5cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlU2h1ZmZsZWRWYXJpYW50O1xuIiwgImltcG9ydCB7V3JpdGFibGVDb21wdXRlZFJlZiwgY29tcHV0ZWR9IGZyb20gJ3Z1ZSc7XG5cbi8qKlxuICogUmV0dXJuIGEgY29tcHV0ZWQgcHJvcGVydHkgdGhhdCByZXR1cm5zIHRoZSBjb3JyZXNwb25kaW5nIHByb3AgdmFsdWUgd2hlbiBpcyBhY2Nlc3NlZFxuICogYW5kIGZpcmVzIGFuIGV2ZW50IHdoZW4gaXMgc2V0LiBVc2VkIHdpdGggdi1tb2RlbC5cbiAqXG4gKiBAcGFyYW0gcHJvcHMgcHJvcHMgZmllbGQgb2YgYSBjb21wb25lbnRcbiAqIEBwYXJhbSBlbWl0IGVtaXQgZnVuY3Rpb24gb2YgYSBjb21wb25lbnRcbiAqIEBwYXJhbSBuYW1lIG5hbWUgb2YgdGhlIHByb3BcbiAqIEByZXR1cm4gd3JhcHBlZCBjb21wdXRlciBwcm9wZXJ0eVxuICovXG5mdW5jdGlvbiB1c2VNb2RlbFdyYXBwZXI8VCBleHRlbmRzIHN0cmluZywgUCBleHRlbmRzIFJlY29yZDxULCB1bmtub3duPj4oXG5cdHByb3BzOiBQLFxuXHRlbWl0OiAoZXZlbnQ6IGB1cGRhdGU6JHtUfWAsIHZhbHVlOiBQW1RdKSA9PiB2b2lkLFxuXHRuYW1lOiBUID0gJ21vZGVsVmFsdWUnIGFzIFRcbik6IFdyaXRhYmxlQ29tcHV0ZWRSZWY8UFtUXT4ge1xuXHRyZXR1cm4gY29tcHV0ZWQoe1xuXHRcdGdldCgpIHtcblx0XHRcdHJldHVybiBwcm9wc1tuYW1lXTtcblx0XHR9LFxuXHRcdHNldCh2YWx1ZSkge1xuXHRcdFx0ZW1pdChgdXBkYXRlOiR7bmFtZX1gLCB2YWx1ZSk7XG5cdFx0fSxcblx0fSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZU1vZGVsV3JhcHBlcjtcbiIsICJpbXBvcnQge1JlZiwgV2F0Y2hTb3VyY2UsIGNvbXB1dGVkLCBzaGFsbG93UmVmLCB3YXRjaH0gZnJvbSAndnVlJztcblxuLyoqXG4gKiBDcmVhdGUgYSByZWYgdGhhdCwgY2FuIGJlIGluZGVwZW5kZW50bHkgdXBkYXRlZCwgYnV0IHdoZW4gaXRzIGRlZmF1bHRcbiAqIHZhbHVlIGNoYW5nZXMsIGl0IGlzIHJlc3RvcmVkIHRvIGl0cyAobmV3KSBkZWZhdWx0IHZhbHVlLlxuICpcbiAqIFVzZWQgZm9yIGRlYnVnZ2luZy5cbiAqL1xuZnVuY3Rpb24gdXNlRGVmYXVsdDxUPihkZWZhdWx0VmFsdWU6IFdhdGNoU291cmNlPFQ+KTogUmVmPFQ+IHtcblx0Y29uc3QgcmVhbFJlZiA9IHNoYWxsb3dSZWY8VD4odHlwZW9mIGRlZmF1bHRWYWx1ZSA9PT0gJ2Z1bmN0aW9uJyA/IGRlZmF1bHRWYWx1ZSgpIDogZGVmYXVsdFZhbHVlLnZhbHVlKTtcblxuXHR3YXRjaDxUPihcblx0XHRkZWZhdWx0VmFsdWUsXG5cdFx0KG5ld1ZhbHVlKSA9PiB7XG5cdFx0XHRyZWFsUmVmLnZhbHVlID0gbmV3VmFsdWU7XG5cdFx0fSxcblx0XHR7ZGVlcDogdHJ1ZX1cblx0KTtcblxuXHRyZXR1cm4gY29tcHV0ZWQoe1xuXHRcdGdldCgpIHtcblx0XHRcdHJldHVybiByZWFsUmVmLnZhbHVlIGFzIFQ7IC8vIOexu+Wei+aWreiogOS/ruWkjSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLXJldHVybiBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnQgYnkgYXdhamllXG5cdFx0fSxcblx0XHRzZXQobmV3VmFsdWUpIHtcblx0XHRcdHJlYWxSZWYudmFsdWUgPSBuZXdWYWx1ZTtcblx0XHR9LFxuXHR9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlRGVmYXVsdDtcbiIsICJpbXBvcnQgeyBjcmVhdGVWTm9kZSBhcyBfY3JlYXRlVk5vZGUsIHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrLCBjcmVhdGVDb21tZW50Vk5vZGUgYXMgX2NyZWF0ZUNvbW1lbnRWTm9kZSwgd2l0aEN0eCBhcyBfd2l0aEN0eCwgY3JlYXRlVGV4dFZOb2RlIGFzIF9jcmVhdGVUZXh0Vk5vZGUsIHJlbmRlckxpc3QgYXMgX3JlbmRlckxpc3QsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwgbm9ybWFsaXplQ2xhc3MgYXMgX25vcm1hbGl6ZUNsYXNzLCBjcmVhdGVCbG9jayBhcyBfY3JlYXRlQmxvY2ssIFRyYW5zaXRpb24gYXMgX1RyYW5zaXRpb24sIHB1c2hTY29wZUlkIGFzIF9wdXNoU2NvcGVJZCwgcG9wU2NvcGVJZCBhcyBfcG9wU2NvcGVJZCB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfd2l0aFNjb3BlSWQgPSBuID0+IChfcHVzaFNjb3BlSWQoXCJkYXRhLXYtNWE0NGNjNzVcIiksbj1uKCksX3BvcFNjb3BlSWQoKSxuKVxuY29uc3QgX2hvaXN0ZWRfMSA9IFtcImxhbmdcIiwgXCJhcmlhLWxhYmVsbGVkYnlcIiwgXCJhcmlhLWRlc2NyaWJlZGJ5XCJdXG5jb25zdCBfaG9pc3RlZF8yID0gW1wiaWRcIl1cbmNvbnN0IF9ob2lzdGVkXzMgPSAvKiNfX1BVUkVfXyovIF93aXRoU2NvcGVJZCgoKSA9PiAvKiNfX1BVUkVfXyovX2NyZWF0ZUVsZW1lbnRWTm9kZShcImJyXCIsIG51bGwsIG51bGwsIC0xIC8qIEhPSVNURUQgKi8pKVxuY29uc3QgX2hvaXN0ZWRfNCA9IFtcImxhbmdcIl1cbmNvbnN0IF9ob2lzdGVkXzUgPSBbXCJpZFwiXVxuY29uc3QgX2hvaXN0ZWRfNiA9IHsgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHRfX29wdGlvbnNcIiB9XG5jb25zdCBfaG9pc3RlZF83ID0geyBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdF9fZm9vdGVyXCIgfVxuY29uc3QgX2hvaXN0ZWRfOCA9IHsgY2xhc3M6IFwidmEtcGFyYSB2YS1wYXJhLS1zdWJ0bGVcIiB9XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soX1RyYW5zaXRpb24sIHtcbiAgICBuYW1lOiBcInZhLXZhcmlhbnQtcHJvbXB0XCIsXG4gICAgYXBwZWFyOiBcIlwiXG4gIH0sIHtcbiAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAoJHByb3BzLm9wZW4pXG4gICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCB7XG4gICAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgICByZWY6IFwicHJvbXB0XCIsXG4gICAgICAgICAgICBsYW5nOiBgemgtJHskc2V0dXAuaTE4blZhcmlhbnR9YCxcbiAgICAgICAgICAgIGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0XCIsXG4gICAgICAgICAgICByb2xlOiBcImRpYWxvZ1wiLFxuICAgICAgICAgICAgXCJhcmlhLW1vZGFsXCI6IFwiZmFsc2VcIixcbiAgICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6ICRzZXR1cC50aXRsZUlkLFxuICAgICAgICAgICAgXCJhcmlhLWRlc2NyaWJlZGJ5XCI6ICRzZXR1cC5kZXNjSWRcbiAgICAgICAgICB9LCBbXG4gICAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiVkFCdXR0b25cIl0sIHtcbiAgICAgICAgICAgICAgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHRfX2Nsb3NlXCIsXG4gICAgICAgICAgICAgIHdlaWdodDogXCJxdWlldFwiLFxuICAgICAgICAgICAgICBpY29uOiBcImNsb3NlXCIsXG4gICAgICAgICAgICAgIHRpdGxlOiAkc2V0dXAudXNlSTE4bignY2xvc2UnKSxcbiAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6ICRzZXR1cC51c2VJMThuKCdjbG9zZScpLFxuICAgICAgICAgICAgICBkaXNhYmxlZDogJHByb3BzLmRpc2FibGVkLFxuICAgICAgICAgICAgICBvbkNsaWNrOiAkc2V0dXAub3B0T3V0QW5kQ2xvc2VcbiAgICAgICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcInRpdGxlXCIsIFwiYXJpYS1sYWJlbFwiLCBcImRpc2FibGVkXCJdKSxcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJoMlwiLCB7XG4gICAgICAgICAgICAgIGlkOiAkc2V0dXAudGl0bGVJZCxcbiAgICAgICAgICAgICAgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHRfX3RpdGxlIHZhLXRpdGxlXCJcbiAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC51c2VJMThuKCRzZXR1cC5pc1ZhcmlhbnROYXJyb3dlZCA/ICd2cC5oZWFkZXIuYWx0JyA6ICd2cC5oZWFkZXInKSksIDEgLyogVEVYVCAqLyksXG4gICAgICAgICAgICAgIF9ob2lzdGVkXzMsXG4gICAgICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJWQUZhZGVUcmFuc2l0aW9uXCJdLCBudWxsLCB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgICAgICAgKCEkc2V0dXAuaXNWYXJpYW50TmFycm93ZWQpXG4gICAgICAgICAgICAgICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAkc2V0dXAuc2h1ZmZsZWRWYXJpYW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFuZzogYHpoLSR7JHNldHVwLnNodWZmbGVkVmFyaWFudH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHRfX3RpdGxlX192YXJpYW50XCJcbiAgICAgICAgICAgICAgICAgICAgICB9LCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5tZXNzYWdlcy52YXJpYW50c1skc2V0dXAuc2h1ZmZsZWRWYXJpYW50XSksIDkgLyogVEVYVCwgUFJPUFMgKi8sIF9ob2lzdGVkXzQpKVxuICAgICAgICAgICAgICAgICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sIDggLyogUFJPUFMgKi8sIF9ob2lzdGVkXzIpLFxuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBcIiwge1xuICAgICAgICAgICAgICBpZDogJHNldHVwLmRlc2NJZCxcbiAgICAgICAgICAgICAgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHRfX2Rlc2MgdmEtcGFyYVwiXG4gICAgICAgICAgICB9LCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC51c2VJMThuKCRzZXR1cC5pc1ZhcmlhbnROYXJyb3dlZCA/ICd2cC5tYWluLmFsdCcgOiAndnAubWFpbicpKSwgOSAvKiBURVhULCBQUk9QUyAqLywgX2hvaXN0ZWRfNSksXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzYsIFtcbiAgICAgICAgICAgICAgX2NyZWF0ZUNvbW1lbnRWTm9kZShcIiBpbmZlcnJlZFZhcmlhbnQgaXMgbm9uLW51bGwsIGd1YXJkZWQgYnkgaXNWYXJpYW50TmFycm93ZWQgXCIpLFxuICAgICAgICAgICAgICAoX29wZW5CbG9jayh0cnVlKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhfRnJhZ21lbnQsIG51bGwsIF9yZW5kZXJMaXN0KCRzZXR1cC5pc1ZhcmlhbnROYXJyb3dlZCAmJiAkc2V0dXAuaW5mZXJyZWRWYXJpYW50ICE9PSBudWxsXG5cdFx0XHRcdFx0XHQ/IFskc2V0dXAuaW5mZXJyZWRWYXJpYW50XVxuXHRcdFx0XHRcdFx0OiAkc2V0dXAuVkFMSURfVkFSSUFOVFMsICh2YXJpYW50KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jaygkc2V0dXBbXCJWQUJ1dHRvblwiXSwge1xuICAgICAgICAgICAgICAgICAga2V5OiB2YXJpYW50LFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IF9ub3JtYWxpemVDbGFzcyhbXCJ2YS12YXJpYW50LXByb21wdF9fb3B0aW9uc19fYnV0dG9uXCIsIHsndmEtdmFyaWFudC1wcm9tcHRfX29wdGlvbnNfX2J1dHRvbi0tcHJpbWFyeSc6ICRzZXR1cC5pc1ZhcmlhbnROYXJyb3dlZH1dKSxcbiAgICAgICAgICAgICAgICAgIGluZGljYXRvcjogXCJhcnJvd05leHRcIixcbiAgICAgICAgICAgICAgICAgIHdlaWdodDogXCJxdWlldFwiLFxuICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcInByb2dyZXNzaXZlXCIsXG4gICAgICAgICAgICAgICAgICBsYW5nOiB2YXJpYW50LFxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICRwcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICRldmVudCA9PiAoJHNldHVwLnNlbGVjdCh2YXJpYW50KSlcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkc2V0dXAubWVzc2FnZXMudmFyaWFudHNbdmFyaWFudF0pLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF86IDIgLyogRFlOQU1JQyAqL1xuICAgICAgICAgICAgICAgIH0sIDEwMzIgLyogUFJPUFMsIERZTkFNSUNfU0xPVFMgKi8sIFtcImNsYXNzXCIsIFwibGFuZ1wiLCBcImRpc2FibGVkXCIsIFwib25DbGlja1wiXSkpXG4gICAgICAgICAgICAgIH0pLCAxMjggLyogS0VZRURfRlJBR01FTlQgKi8pKSxcbiAgICAgICAgICAgICAgKCRzZXR1cC5pc1ZhcmlhbnROYXJyb3dlZClcbiAgICAgICAgICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jaygkc2V0dXBbXCJWQUJ1dHRvblwiXSwge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0X19vcHRpb25zX19idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgaW5kaWNhdG9yOiBcImFycm93TmV4dFwiLFxuICAgICAgICAgICAgICAgICAgICB3ZWlnaHQ6IFwicXVpZXRcIixcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcInByb2dyZXNzaXZlXCIsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAkcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gJGV2ZW50ID0+ICgkc2V0dXAuaXNWYXJpYW50TmFycm93ZWQgPSBmYWxzZSkpXG4gICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLnVzZUkxOG4oJ3ZwLmJ1dHRvbi5vdGhlcicpKSwgMSAvKiBURVhUICovKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgICAgICAgICAgIH0sIDggLyogUFJPUFMgKi8sIFtcImRpc2FibGVkXCJdKSlcbiAgICAgICAgICAgICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJmb290ZXJcIiwgX2hvaXN0ZWRfNywgW1xuICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwicFwiLCBfaG9pc3RlZF84LCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC51c2VJMThuKCd2cC5tYWluLmV4dCcpKSwgMSAvKiBURVhUICovKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdLCA4IC8qIFBST1BTICovLCBfaG9pc3RlZF8xKSlcbiAgICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKVxuICAgIF0pLFxuICAgIF86IDEgLyogU1RBQkxFICovXG4gIH0pKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJFOlxcXFxnaFJlcG9cXFxcU2l0ZUdhZGdldHNcXFxcWXNBcmNoaXZlcy1HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBVmFyaWFudFByb21wdC52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgXCJFOlxcXFxnaFJlcG9cXFxcU2l0ZUdhZGdldHNcXFxcWXNBcmNoaXZlcy1HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBVmFyaWFudFByb21wdC52dWU/dHlwZT1zdHlsZSZpbmRleD0wXCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkU6XFxcXGdoUmVwb1xcXFxTaXRlR2FkZ2V0c1xcXFxZc0FyY2hpdmVzLUdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFWYXJpYW50UHJvbXB0LnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFWYXJpYW50UHJvbXB0LnZ1ZVwiO3NjcmlwdC5fX3Njb3BlSWQgPSBcImRhdGEtdi01YTQ0Y2M3NVwiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiLCAiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7cmVmfSBmcm9tICd2dWUnO1xuaW1wb3J0IHt0eXBlIFZhbGlkVmFyaWFudH0gZnJvbSAnZXh0LmdhZGdldC5WYXJpYW50QWxseSc7XG5pbXBvcnQgVkFCdXR0b24gZnJvbSAnLi9WQUJ1dHRvbi52dWUnO1xuaW1wb3J0IFZBU2VsZWN0IGZyb20gJy4vVkFTZWxlY3QudnVlJztcbmltcG9ydCB1c2VJMThuLCB7aTE4blZhcmlhbnR9IGZyb20gJy4uL2NvbXBvc2FibGVzL3VzZUkxOG4nO1xuaW1wb3J0IHVzZVVuaXF1ZUlkIGZyb20gJy4uL2NvbXBvc2FibGVzL3VzZVVuaXF1ZUlkJztcbmltcG9ydCB7VkFMSURfVkFSSUFOVFMsIGluZmVycmVkVmFyaWFudCwgc2h1ZmZsZVZhcmlhbnR9IGZyb20gJy4uL21vZHVsZXMvdXRpbHMnO1xuaW1wb3J0IG1lc3NhZ2VzIGZyb20gJy4uL21lc3NhZ2VzLmpzb24nO1xuaW1wb3J0IHVzZU1vZGVsV3JhcHBlciBmcm9tICcuLi9jb21wb3NhYmxlcy91c2VNb2RlbFdyYXBwZXInO1xuaW1wb3J0IHVzZURlZmF1bHQgZnJvbSAnLi4vY29tcG9zYWJsZXMvdXNlRGVmYXVsdCc7XG5cbmNvbnN0IHByb3BzID0gd2l0aERlZmF1bHRzKFxuXHRkZWZpbmVQcm9wczx7XG5cdFx0b3BlbjogYm9vbGVhbjtcblx0XHRkaXNhYmxlZD86IGJvb2xlYW47XG5cdH0+KCksXG5cdHtcblx0XHRkaXNhYmxlZDogZmFsc2UsXG5cdH1cbik7XG5jb25zdCBlbWl0ID0gZGVmaW5lRW1pdHM8e1xuXHQoZTogJ3VwZGF0ZTpvcGVuJywgdmFsdWU6IGJvb2xlYW4pOiB2b2lkO1xuXHQoZTogJ3VwZGF0ZTpkaXNhYmxlZCcsIHZhbHVlOiBib29sZWFuKTogdm9pZDtcblx0KGU6ICdzZWxlY3QnLCB2YXJpYW50OiBWYWxpZFZhcmlhbnQpOiB2b2lkO1xuXHQoZTogJ29wdG91dCcpOiB2b2lkO1xufT4oKTtcblxuY29uc3QgcHJvbXB0ID0gcmVmPEhUTUxFbGVtZW50IHwgbnVsbD4obnVsbCk7XG5jb25zdCB0aXRsZUlkID0gdXNlVW5pcXVlSWQoKTtcbmNvbnN0IHNlbGVjdGVkVmFyaWFudCA9IHVzZURlZmF1bHQoKCkgPT4gaW5mZXJyZWRWYXJpYW50LnZhbHVlID8/IHNodWZmbGVWYXJpYW50KCkpO1xuY29uc3QgaXNPcGVuID0gdXNlTW9kZWxXcmFwcGVyKHByb3BzLCBlbWl0LCAnb3BlbicpO1xuY29uc3QgaXNEaXNhYmxlZCA9IHVzZU1vZGVsV3JhcHBlcihwcm9wcywgZW1pdCwgJ2Rpc2FibGVkJyk7XG5cbmZ1bmN0aW9uIG9wdE91dEFuZENsb3NlKCkge1xuXHRlbWl0KCdvcHRvdXQnKTtcblx0aXNPcGVuLnZhbHVlID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdCh2YXJpYW50OiBWYWxpZFZhcmlhbnQpIHtcblx0aXNEaXNhYmxlZC52YWx1ZSA9IHRydWU7XG5cdGVtaXQoJ3NlbGVjdCcsIHZhcmlhbnQpO1xufVxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cblx0PFRyYW5zaXRpb24gbmFtZT1cInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZVwiIGFwcGVhcj5cblx0XHQ8ZGl2XG5cdFx0XHR2LWlmPVwib3BlblwiXG5cdFx0XHRyZWY9XCJwcm9tcHRcIlxuXHRcdFx0Omxhbmc9XCJgemgtJHtpMThuVmFyaWFudH1gXCJcblx0XHRcdGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlXCJcblx0XHRcdHJvbGU9XCJkaWFsb2dcIlxuXHRcdFx0YXJpYS1tb2RhbD1cImZhbHNlXCJcblx0XHRcdDphcmlhLWxhYmVsbGVkYnk9XCJ0aXRsZUlkXCJcblx0XHQ+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlX19oZWFkZXJcIj5cblx0XHRcdFx0PGgyIDppZD1cInRpdGxlSWRcIiBjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9faGVhZGVyX190aXRsZSB2YS10aXRsZVwiPlxuXHRcdFx0XHRcdHt7IHVzZUkxOG4oJ3ZwLm1haW4nKSB9fVxuXHRcdFx0XHQ8L2gyPlxuXHRcdFx0XHQ8VkFCdXR0b25cblx0XHRcdFx0XHRjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9faGVhZGVyX19jbG9zZVwiXG5cdFx0XHRcdFx0d2VpZ2h0PVwicXVpZXRcIlxuXHRcdFx0XHRcdGljb249XCJjbG9zZVwiXG5cdFx0XHRcdFx0OnRpdGxlPVwidXNlSTE4bignY2xvc2UnKVwiXG5cdFx0XHRcdFx0OmFyaWEtbGFiZWw9XCJ1c2VJMThuKCdjbG9zZScpXCJcblx0XHRcdFx0XHQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG5cdFx0XHRcdFx0QGNsaWNrPVwib3B0T3V0QW5kQ2xvc2VcIlxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlX19tYWluXCI+XG5cdFx0XHRcdDxWQVNlbGVjdFxuXHRcdFx0XHRcdHYtbW9kZWw9XCJzZWxlY3RlZFZhcmlhbnRcIlxuXHRcdFx0XHRcdGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlX19tYWluX19zZWxlY3RcIlxuXHRcdFx0XHRcdDpsYW5nPVwic2VsZWN0ZWRWYXJpYW50XCJcblx0XHRcdFx0XHQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG5cdFx0XHRcdFx0OmFyaWEtbGFiZWxsZWRieT1cInRpdGxlSWRcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PG9wdGlvbiB2LWZvcj1cInZhcmlhbnQgaW4gVkFMSURfVkFSSUFOVFNcIiA6a2V5PVwidmFyaWFudFwiIDp2YWx1ZT1cInZhcmlhbnRcIiA6bGFuZz1cInZhcmlhbnRcIj5cblx0XHRcdFx0XHRcdHt7IG1lc3NhZ2VzLnZhcmlhbnRzW3ZhcmlhbnRdIH19XG5cdFx0XHRcdFx0PC9vcHRpb24+XG5cdFx0XHRcdDwvVkFTZWxlY3Q+XG5cdFx0XHRcdDxWQUJ1dHRvblxuXHRcdFx0XHRcdGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlX19tYWluX19hY3Rpb25cIlxuXHRcdFx0XHRcdGFjdGlvbj1cInByb2dyZXNzaXZlXCJcblx0XHRcdFx0XHRpY29uPVwiYXJyb3dOZXh0XCJcblx0XHRcdFx0XHQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG5cdFx0XHRcdFx0QGNsaWNrPVwic2VsZWN0KHNlbGVjdGVkVmFyaWFudClcIlxuXHRcdFx0XHRcdD57eyB1c2VJMThuKCd2cC5idXR0b24ub2snKSB9fTwvVkFCdXR0b25cblx0XHRcdFx0PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8Zm9vdGVyIGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlX19mb290ZXJcIj5cblx0XHRcdFx0PHAgY2xhc3M9XCJ2YS1wYXJhIHZhLXBhcmEtLXN1YnRsZVwiPlxuXHRcdFx0XHRcdHt7IHVzZUkxOG4oJ3ZwLm1haW4uZXh0JykgfX1cblx0XHRcdFx0PC9wPlxuXHRcdFx0PC9mb290ZXI+XG5cdFx0PC9kaXY+XG5cdDwvVHJhbnNpdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cImxlc3NcIj5cbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uL3N0eWxlcy9taXhpbnMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi9zdHlsZXMvdG9rZW5zLmxlc3MnO1xuXG4udmEtdGl0bGUge1xuXHRib3JkZXI6IDA7IC8vIFJlc2V0XG5cdHBhZGRpbmc6IDA7IC8vIFJlc2V0XG5cdG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG5cblx0Zm9udC1zaXplOiBAZm9udC1zaXplLXh4LWxhcmdlO1xuXHRmb250LXdlaWdodDogQGZvbnQtd2VpZ2h0LWJvbGQ7XG5cdG1hcmdpbjogQHNwYWNpbmctNTAgQHNwYWNpbmctMDtcblx0Y29sb3I6IEBjb2xvci1iYXNlO1xufVxuXG4udmEtcGFyYSB7XG5cdG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG5cdG1hcmdpbi10b3A6IEBzcGFjaW5nLTUwO1xuXHRjb2xvcjogQGNvbG9yLWJhc2U7XG5cblx0Ji0tc3VidGxlIHtcblx0XHRjb2xvcjogQGNvbG9yLXN1YnRsZTtcblx0XHRmb250LXNpemU6IEBmb250LXNpemUteC1zbWFsbDtcblx0XHRtYXJnaW4tYm90dG9tOiBAc3BhY2luZy0zNTtcblx0fVxufVxuXG4udmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlIHtcblx0Ym94LXNpemluZzogQGJveC1zaXppbmctYmFzZTtcblx0ei1pbmRleDogQHotaW5kZXgtb3ZlcmxheTtcblx0cGFkZGluZzogQHNwYWNpbmctNTAgQHNwYWNpbmctMTAwO1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdGxlZnQ6IEBzcGFjaW5nLTA7XG5cdHJpZ2h0OiBAc3BhY2luZy0wO1xuXHRib3R0b206IEBzcGFjaW5nLTA7XG5cdG1hcmdpbjogQHNwYWNpbmctMCBhdXRvO1xuXHR3aWR0aDogMTAwJTtcblx0bWF4LXdpZHRoOiA2MDBweDtcblx0bWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDJlbSk7XG5cblx0b3ZlcmZsb3c6IGF1dG87XG5cdG92ZXJzY3JvbGwtYmVoYXZpb3I6IG5vbmU7XG5cdGJhY2tncm91bmQtY29sb3I6IEBiYWNrZ3JvdW5kLWNvbG9yLWJhc2U7XG5cdGJvcmRlcjogQGJvcmRlci1iYXNlO1xuXHRib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cy1iYXNlO1xuXHRib3gtc2hhZG93OiBAYm94LXNoYWRvdy1kcm9wLW1lZGl1bTtcblx0Zm9udC1mYW1pbHk6IEBmb250LWZhbWlseS1zeXN0ZW0tc2Fucztcblx0Zm9udC1zaXplOiAxcmVtOyAvLyBSZXNldFxuXHRsaW5lLWhlaWdodDogbm9ybWFsOyAvLyBSZXNldFxuXG5cdCZfX2hlYWRlciB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXG5cdFx0Jl9fdGl0bGUge1xuXHRcdFx0ZmxleDogMTtcblx0XHRcdGZvbnQtc2l6ZTogQGZvbnQtc2l6ZS1tZWRpdW07XG5cdFx0fVxuXG5cdFx0Jl9fY2xvc2Uge1xuXHRcdFx0cGFkZGluZzogQHNwYWNpbmctc2hvcnRoYW5kLWJ1dHRvbi1pY29uLW9ubHk7XG5cdFx0XHRtYXJnaW4tcmlnaHQ6IC0oQHNwYWNpbmctaG9yaXpvbnRhbC1idXR0b24taWNvbi1vbmx5ICsgMXB4KTtcblx0XHR9XG5cdH1cblxuXHQmX19tYWluIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdG1hcmdpbi10b3A6IEBzcGFjaW5nLTI1O1xuXG5cdFx0Jl9fc2VsZWN0IHtcblx0XHRcdG1hcmdpbi1yaWdodDogQHNwYWNpbmctNzU7XG5cdFx0XHRmbGV4OiAxO1xuXHRcdH1cblxuXHRcdCZfX2FjdGlvbiB7XG5cdFx0XHRmbGV4LXNocmluazogMDtcblx0XHR9XG5cdH1cblxuXHQmX19jbG9zZSB7XG5cdFx0cGFkZGluZzogQHNwYWNpbmctc2hvcnRoYW5kLWJ1dHRvbi1pY29uLW9ubHk7XG5cdFx0ZmxvYXQ6IHJpZ2h0O1xuXHRcdG1hcmdpbi1yaWdodDogLShAc3BhY2luZy1ob3Jpem9udGFsLWJ1dHRvbi1pY29uLW9ubHkgKyAxcHgpO1xuXHR9XG59XG5cbi8qIFByb21wdCB0cmFuc2l0aW9uIGVmZmVjdCAqL1xuLnZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZS1lbnRlci1hY3RpdmUsXG4udmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlLWxlYXZlLWFjdGl2ZSB7XG5cdHRyYW5zaXRpb24tcHJvcGVydHk6IEB0cmFuc2l0aW9uLXByb3BlcnR5LWxheW91dDtcblx0dHJhbnNpdGlvbi1kdXJhdGlvbjogQHRyYW5zaXRpb24tZHVyYXRpb24tbWVkaXVtO1xuXHR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogQHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uLXN5c3RlbTtcbn1cblxuLnZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZS1lbnRlci1mcm9tLFxuLnZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZS1sZWF2ZS10byB7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbn1cbjwvc3R5bGU+XG4uLi9tb2R1bGVzL3V0aWxzXG4iLCAiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB1c2VNb2RlbFdyYXBwZXIgZnJvbSAnLi4vY29tcG9zYWJsZXMvdXNlTW9kZWxXcmFwcGVyJztcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG5cdG1vZGVsVmFsdWU6IHN0cmluZztcbn0+KCk7XG5jb25zdCBlbWl0ID0gZGVmaW5lRW1pdHM8e1xuXHQoZTogJ3VwZGF0ZTptb2RlbFZhbHVlJywgdmFsdWU6IHN0cmluZyk6IHZvaWQ7XG59PigpO1xuXG5jb25zdCBtb2RlbFZhbHVlID0gdXNlTW9kZWxXcmFwcGVyKHByb3BzLCBlbWl0KTtcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG5cdDxzZWxlY3Qgdi1tb2RlbD1cIm1vZGVsVmFsdWVcIiBjbGFzcz1cInZhLXNlbGVjdFwiPlxuXHRcdDxzbG90IC8+XG5cdDwvc2VsZWN0PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwibGVzc1wiPlxuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vc3R5bGVzL21peGlucy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uL3N0eWxlcy90b2tlbnMubGVzcyc7XG5cbi52YS1zZWxlY3Qge1xuXHQuc2VsZWN0X19oYW5kbGUoKTtcblx0YXBwZWFyYW5jZTogbm9uZTtcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHJpZ2h0IEBzcGFjaW5nLTc1O1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRiYWNrZ3JvdW5kLWltYWdlOiBAaWNvbi1leHBhbmQ7XG5cdGJhY2tncm91bmQtc2l6ZTogQHNpemUtaWNvbi14LXNtYWxsO1xuXG5cdCY6ZGlzYWJsZWQge1xuXHRcdC5zZWxlY3RfX2hhbmRsZS0tZGlzYWJsZWQoKTtcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBAaWNvbi1leHBhbmQtZGlzYWJsZWQ7XG5cdFx0Ly8gU3VwcG9ydDogQ2hyb21lLCB3aGljaCBzZXRzIGFuIG9wYWNpdHkgbGVzcyB0aGFuIDEgZm9yIGRpc2FibGVkIHNlbGVjdCBlbGVtZW50cy5cblx0XHRvcGFjaXR5OiBAb3BhY2l0eS1iYXNlO1xuXHRcdGN1cnNvcjogQGN1cnNvci1ub3QtYWxsb3dlZDtcblx0fVxuXG5cdCY6ZW5hYmxlZCB7XG5cdFx0LnNlbGVjdF9faGFuZGxlLS1lbmFibGVkKCk7XG5cdH1cbn1cbjwvc3R5bGU+XG4iLCAiaW1wb3J0IHsgcmVuZGVyU2xvdCBhcyBfcmVuZGVyU2xvdCwgdk1vZGVsU2VsZWN0IGFzIF92TW9kZWxTZWxlY3QsIHdpdGhEaXJlY3RpdmVzIGFzIF93aXRoRGlyZWN0aXZlcywgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiBfd2l0aERpcmVjdGl2ZXMoKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcInNlbGVjdFwiLCB7XG4gICAgXCJvblVwZGF0ZTptb2RlbFZhbHVlXCI6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gJGV2ZW50ID0+ICgoJHNldHVwLm1vZGVsVmFsdWUpID0gJGV2ZW50KSksXG4gICAgY2xhc3M6IFwidmEtc2VsZWN0XCJcbiAgfSwgW1xuICAgIF9yZW5kZXJTbG90KF9jdHguJHNsb3RzLCBcImRlZmF1bHRcIiwge30sIHVuZGVmaW5lZCwgdHJ1ZSlcbiAgXSwgNTEyIC8qIE5FRURfUEFUQ0ggKi8pKSwgW1xuICAgIFtfdk1vZGVsU2VsZWN0LCAkc2V0dXAubW9kZWxWYWx1ZV1cbiAgXSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRTpcXFxcZ2hSZXBvXFxcXFNpdGVHYWRnZXRzXFxcXFlzQXJjaGl2ZXMtR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQVNlbGVjdC52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgXCJFOlxcXFxnaFJlcG9cXFxcU2l0ZUdhZGdldHNcXFxcWXNBcmNoaXZlcy1HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBU2VsZWN0LnZ1ZT90eXBlPXN0eWxlJmluZGV4PTBcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRTpcXFxcZ2hSZXBvXFxcXFNpdGVHYWRnZXRzXFxcXFlzQXJjaGl2ZXMtR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQVNlbGVjdC52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBU2VsZWN0LnZ1ZVwiO3NjcmlwdC5fX3Njb3BlSWQgPSBcImRhdGEtdi1jOWI0NjQ2MFwiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiLCAiaW1wb3J0IHsgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCBjcmVhdGVWTm9kZSBhcyBfY3JlYXRlVk5vZGUsIHJlbmRlckxpc3QgYXMgX3JlbmRlckxpc3QsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrLCB3aXRoQ3R4IGFzIF93aXRoQ3R4LCBjcmVhdGVUZXh0Vk5vZGUgYXMgX2NyZWF0ZVRleHRWTm9kZSwgY3JlYXRlQ29tbWVudFZOb2RlIGFzIF9jcmVhdGVDb21tZW50Vk5vZGUsIFRyYW5zaXRpb24gYXMgX1RyYW5zaXRpb24sIGNyZWF0ZUJsb2NrIGFzIF9jcmVhdGVCbG9jaywgcHVzaFNjb3BlSWQgYXMgX3B1c2hTY29wZUlkLCBwb3BTY29wZUlkIGFzIF9wb3BTY29wZUlkIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF93aXRoU2NvcGVJZCA9IG4gPT4gKF9wdXNoU2NvcGVJZChcImRhdGEtdi01Y2M3ODY1YlwiKSxuPW4oKSxfcG9wU2NvcGVJZCgpLG4pXG5jb25zdCBfaG9pc3RlZF8xID0gW1wibGFuZ1wiLCBcImFyaWEtbGFiZWxsZWRieVwiXVxuY29uc3QgX2hvaXN0ZWRfMiA9IHsgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlX19oZWFkZXJcIiB9XG5jb25zdCBfaG9pc3RlZF8zID0gW1wiaWRcIl1cbmNvbnN0IF9ob2lzdGVkXzQgPSB7IGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9fbWFpblwiIH1cbmNvbnN0IF9ob2lzdGVkXzUgPSBbXCJ2YWx1ZVwiLCBcImxhbmdcIl1cbmNvbnN0IF9ob2lzdGVkXzYgPSB7IGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9fZm9vdGVyXCIgfVxuY29uc3QgX2hvaXN0ZWRfNyA9IHsgY2xhc3M6IFwidmEtcGFyYSB2YS1wYXJhLS1zdWJ0bGVcIiB9XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soX1RyYW5zaXRpb24sIHtcbiAgICBuYW1lOiBcInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZVwiLFxuICAgIGFwcGVhcjogXCJcIlxuICB9LCB7XG4gICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgKCRwcm9wcy5vcGVuKVxuICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwge1xuICAgICAgICAgICAga2V5OiAwLFxuICAgICAgICAgICAgcmVmOiBcInByb21wdFwiLFxuICAgICAgICAgICAgbGFuZzogYHpoLSR7JHNldHVwLmkxOG5WYXJpYW50fWAsXG4gICAgICAgICAgICBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVcIixcbiAgICAgICAgICAgIHJvbGU6IFwiZGlhbG9nXCIsXG4gICAgICAgICAgICBcImFyaWEtbW9kYWxcIjogXCJmYWxzZVwiLFxuICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogJHNldHVwLnRpdGxlSWRcbiAgICAgICAgICB9LCBbXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzIsIFtcbiAgICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImgyXCIsIHtcbiAgICAgICAgICAgICAgICBpZDogJHNldHVwLnRpdGxlSWQsXG4gICAgICAgICAgICAgICAgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlX19oZWFkZXJfX3RpdGxlIHZhLXRpdGxlXCJcbiAgICAgICAgICAgICAgfSwgX3RvRGlzcGxheVN0cmluZygkc2V0dXAudXNlSTE4bigndnAubWFpbicpKSwgOSAvKiBURVhULCBQUk9QUyAqLywgX2hvaXN0ZWRfMyksXG4gICAgICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJWQUJ1dHRvblwiXSwge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9faGVhZGVyX19jbG9zZVwiLFxuICAgICAgICAgICAgICAgIHdlaWdodDogXCJxdWlldFwiLFxuICAgICAgICAgICAgICAgIGljb246IFwiY2xvc2VcIixcbiAgICAgICAgICAgICAgICB0aXRsZTogJHNldHVwLnVzZUkxOG4oJ2Nsb3NlJyksXG4gICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6ICRzZXR1cC51c2VJMThuKCdjbG9zZScpLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiAkcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgb25DbGljazogJHNldHVwLm9wdE91dEFuZENsb3NlXG4gICAgICAgICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcInRpdGxlXCIsIFwiYXJpYS1sYWJlbFwiLCBcImRpc2FibGVkXCJdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzQsIFtcbiAgICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIlZBU2VsZWN0XCJdLCB7XG4gICAgICAgICAgICAgICAgbW9kZWxWYWx1ZTogJHNldHVwLnNlbGVjdGVkVmFyaWFudCxcbiAgICAgICAgICAgICAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAkZXZlbnQgPT4gKCgkc2V0dXAuc2VsZWN0ZWRWYXJpYW50KSA9ICRldmVudCkpLFxuICAgICAgICAgICAgICAgIGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9fbWFpbl9fc2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgbGFuZzogJHNldHVwLnNlbGVjdGVkVmFyaWFudCxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogJHByb3BzLmRpc2FibGVkLFxuICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6ICRzZXR1cC50aXRsZUlkXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICAgICAgICAoX29wZW5CbG9jayh0cnVlKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhfRnJhZ21lbnQsIG51bGwsIF9yZW5kZXJMaXN0KCRzZXR1cC5WQUxJRF9WQVJJQU5UUywgKHZhcmlhbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJvcHRpb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogdmFyaWFudCxcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFyaWFudCxcbiAgICAgICAgICAgICAgICAgICAgICBsYW5nOiB2YXJpYW50XG4gICAgICAgICAgICAgICAgICAgIH0sIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLm1lc3NhZ2VzLnZhcmlhbnRzW3ZhcmlhbnRdKSwgOSAvKiBURVhULCBQUk9QUyAqLywgX2hvaXN0ZWRfNSkpXG4gICAgICAgICAgICAgICAgICB9KSwgMTI4IC8qIEtFWUVEX0ZSQUdNRU5UICovKSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICAgICAgICB9LCA4IC8qIFBST1BTICovLCBbXCJtb2RlbFZhbHVlXCIsIFwibGFuZ1wiLCBcImRpc2FibGVkXCIsIFwiYXJpYS1sYWJlbGxlZGJ5XCJdKSxcbiAgICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIlZBQnV0dG9uXCJdLCB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlX19tYWluX19hY3Rpb25cIixcbiAgICAgICAgICAgICAgICBhY3Rpb246IFwicHJvZ3Jlc3NpdmVcIixcbiAgICAgICAgICAgICAgICBpY29uOiBcImFycm93TmV4dFwiLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiAkcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgb25DbGljazogX2NhY2hlWzFdIHx8IChfY2FjaGVbMV0gPSAkZXZlbnQgPT4gKCRzZXR1cC5zZWxlY3QoJHNldHVwLnNlbGVjdGVkVmFyaWFudCkpKVxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC51c2VJMThuKCd2cC5idXR0b24ub2snKSksIDEgLyogVEVYVCAqLylcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICAgICAgICB9LCA4IC8qIFBST1BTICovLCBbXCJkaXNhYmxlZFwiXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImZvb3RlclwiLCBfaG9pc3RlZF82LCBbXG4gICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJwXCIsIF9ob2lzdGVkXzcsIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLnVzZUkxOG4oJ3ZwLm1haW4uZXh0JykpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0sIDggLyogUFJPUFMgKi8sIF9ob2lzdGVkXzEpKVxuICAgICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpXG4gICAgXSksXG4gICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgfSkpXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkU6XFxcXGdoUmVwb1xcXFxTaXRlR2FkZ2V0c1xcXFxZc0FyY2hpdmVzLUdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFWYXJpYW50UHJvbXB0TW9iaWxlLnZ1ZT90eXBlPXNjcmlwdFwiO2ltcG9ydCBcIkU6XFxcXGdoUmVwb1xcXFxTaXRlR2FkZ2V0c1xcXFxZc0FyY2hpdmVzLUdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFWYXJpYW50UHJvbXB0TW9iaWxlLnZ1ZT90eXBlPXN0eWxlJmluZGV4PTBcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRTpcXFxcZ2hSZXBvXFxcXFNpdGVHYWRnZXRzXFxcXFlzQXJjaGl2ZXMtR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQVZhcmlhbnRQcm9tcHRNb2JpbGUudnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQVZhcmlhbnRQcm9tcHRNb2JpbGUudnVlXCI7c2NyaXB0Ll9fc2NvcGVJZCA9IFwiZGF0YS12LTVjYzc4NjViXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJpbXBvcnQgeyBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrLCBjcmVhdGVDb21tZW50Vk5vZGUgYXMgX2NyZWF0ZUNvbW1lbnRWTm9kZSwgVGVsZXBvcnQgYXMgX1RlbGVwb3J0LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKF9GcmFnbWVudCwgbnVsbCwgW1xuICAgIChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jayhfVGVsZXBvcnQsIHsgdG86ICRzZXR1cC5kZXNrdG9wTW91bnRQb2ludCB9LCBbXG4gICAgICAoISRzZXR1cC5pc01vYmlsZSlcbiAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiVkFWYXJpYW50UHJvbXB0XCJdLCB7XG4gICAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgICBvcGVuOiAkc2V0dXAuaXNPcGVuLFxuICAgICAgICAgICAgXCJvblVwZGF0ZTpvcGVuXCI6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gJGV2ZW50ID0+ICgoJHNldHVwLmlzT3BlbikgPSAkZXZlbnQpKSxcbiAgICAgICAgICAgIGRpc2FibGVkOiAkc2V0dXAuaXNEaXNhYmxlZCxcbiAgICAgICAgICAgIFwib25VcGRhdGU6ZGlzYWJsZWRcIjogX2NhY2hlWzFdIHx8IChfY2FjaGVbMV0gPSAkZXZlbnQgPT4gKCgkc2V0dXAuaXNEaXNhYmxlZCkgPSAkZXZlbnQpKSxcbiAgICAgICAgICAgIFwiYXV0by1jbG9zZVwiOiBmYWxzZSxcbiAgICAgICAgICAgIG9uT3B0b3V0OiAkc2V0dXAub25PcHRPdXQsXG4gICAgICAgICAgICBvblNlbGVjdDogJHNldHVwLnNldFZhcmlhbnRcbiAgICAgICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJvcGVuXCIsIFwiZGlzYWJsZWRcIl0pKVxuICAgICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpXG4gICAgXSwgOCAvKiBQUk9QUyAqLywgW1widG9cIl0pKSxcbiAgICBfY3JlYXRlQ29tbWVudFZOb2RlKFwiIFRlbGVwb3J0IHRvIGJvZHkgYmVjYXVzZSB0aGV5IGFyZSBhbHdheXMgZmxvYXRlZCBhdCBib3R0b20gXCIpLFxuICAgIChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jayhfVGVsZXBvcnQsIHsgdG86IFwiYm9keVwiIH0sIFtcbiAgICAgICgkc2V0dXAuaXNNb2JpbGUpXG4gICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIlZBVmFyaWFudFByb21wdE1vYmlsZVwiXSwge1xuICAgICAgICAgICAga2V5OiAwLFxuICAgICAgICAgICAgb3BlbjogJHNldHVwLmlzT3BlbixcbiAgICAgICAgICAgIFwib25VcGRhdGU6b3BlblwiOiBfY2FjaGVbMl0gfHwgKF9jYWNoZVsyXSA9ICRldmVudCA9PiAoKCRzZXR1cC5pc09wZW4pID0gJGV2ZW50KSksXG4gICAgICAgICAgICBkaXNhYmxlZDogJHNldHVwLmlzRGlzYWJsZWQsXG4gICAgICAgICAgICBcIm9uVXBkYXRlOmRpc2FibGVkXCI6IF9jYWNoZVszXSB8fCAoX2NhY2hlWzNdID0gJGV2ZW50ID0+ICgoJHNldHVwLmlzRGlzYWJsZWQpID0gJGV2ZW50KSksXG4gICAgICAgICAgICBvbk9wdG91dDogJHNldHVwLm9uT3B0T3V0LFxuICAgICAgICAgICAgb25TZWxlY3Q6ICRzZXR1cC5zZXRWYXJpYW50XG4gICAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1wib3BlblwiLCBcImRpc2FibGVkXCJdKSlcbiAgICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKVxuICAgIF0pKVxuICBdLCA2NCAvKiBTVEFCTEVfRlJBR01FTlQgKi8pKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJFOlxcXFxnaFJlcG9cXFxcU2l0ZUdhZGdldHNcXFxcWXNBcmNoaXZlcy1HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxBcHAudnVlP3R5cGU9c2NyaXB0XCI7aW1wb3J0IFwiRTpcXFxcZ2hSZXBvXFxcXFNpdGVHYWRnZXRzXFxcXFlzQXJjaGl2ZXMtR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcQXBwLnZ1ZT90eXBlPXN0eWxlJmluZGV4PTBcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRTpcXFxcZ2hSZXBvXFxcXFNpdGVHYWRnZXRzXFxcXFlzQXJjaGl2ZXMtR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcQXBwLnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXEFwcC52dWVcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGVBQXdCQyxRQUFBLEtBQUE7O0FDQ3hCLElBQUFDLGVBQWtCRCxRQUFBLEtBQUE7QUFDbEIsSUFBQUUsb0JBQWlFRixRQUFBLHdCQUFBOztBQ0RqRSxJQUFBRyxlQUF5QkgsUUFBQSxLQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEekIsSUFBQUksY0FBeUtKLFFBQUEsS0FBQTtBQUV6SyxJQUFNSyxhQUFhLENBQUMsU0FBUyxRQUFRO0FBQ3JDLElBQU1DLGFBQWE7RUFBRUMsS0FBSztBQUFFO0FBQzVCLElBQU1DLGFBQTBCLG9CQUFBSixZQUFBSztFQUFvQjtFQUFRO0lBQUVDLEdBQUc7RUFBZ2hCO0VBQUc7RUFBTTs7QUFBZ0I7QUFDMW1CLElBQU1DLGFBQWE7RUFBRUosS0FBSztBQUFFO0FBQzVCLElBQU1LLGFBQTBCLG9CQUFBUixZQUFBSztFQUFvQjtFQUFRO0lBQUVDLEdBQUc7RUFBOEM7RUFBRztFQUFNOztBQUFnQjtBQUN4SSxJQUFNRyxhQUEwQixvQkFBQVQsWUFBQUs7RUFBb0I7RUFBUTtJQUFFQyxHQUFHO0VBQWdEO0VBQUc7RUFBTTs7QUFBZ0I7QUFDMUksSUFBTUksYUFBYSxDQUNqQkYsWUFDQUMsVUFBQTtBQUVGLElBQU1FLGFBQWE7RUFBRVIsS0FBSztBQUFFO0FBQzVCLElBQU1TLGFBQTBCLG9CQUFBWixZQUFBSztFQUFvQjtFQUFRO0lBQUVDLEdBQUc7RUFBeUQ7RUFBRztFQUFNOztBQUFnQjtBQUNuSixJQUFNTyxjQUFjLENBQ2xCRCxVQUFBO0FBR0ssU0FBU0UsT0FBT0MsTUFBTUMsUUFBUUMsUUFBUUMs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QUFNSixJQUFJOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfdnVlMjIiLCAicmVxdWlyZSIsICJpbXBvcnRfdnVlMjAiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiaW1wb3J0X3Z1ZTEyIiwgImltcG9ydF92dWUyIiwgIl9ob2lzdGVkXzEiLCAiX2hvaXN0ZWRfMiIsICJrZXkiLCAiX2hvaXN0ZWRfMyIsICJjcmVhdGVFbGVtZW50Vk5vZGUiLCAiZCIsICJfaG9pc3RlZF80IiwgIl9ob2lzdGVkXzUiLCAiX2hvaXN0ZWRfNiIsICJfaG9pc3RlZF83IiwgIl9ob2lzdGVkXzgiLCAiX2hvaXN0ZWRfOSIsICJfaG9pc3RlZF8xMCIsICJyZW5kZXIiLCAiX2N0eCIsICJfY2FjaGUiLCAiJHByb3BzIiwgIiRzZXR1cCIsICIkZGF0YSIsICIkb3B0aW9ucyIsICJvcGVuQmxvY2siLCAiY3JlYXRlRWxlbWVudEJsb2NrIiwgImNsYXNzIiwgInhtbG5zIiwgIndpZHRoIiwgInNpemUiLCAiaGVpZ2h0IiwgInZpZXdCb3giLCAiaWNvbiIsICJjcmVhdGVDb21tZW50Vk5vZGUiLCAiVkFJY29uX2RlZmF1bHQiLCAiX19maWxlIiwgIlZBSWNvbl9kZWZhdWx0MiIsICJpbXBvcnRfdnVlNCIsICJfaG9pc3RlZF8xMiIsICJyZW5kZXIyIiwgIm5vcm1hbGl6ZUNsYXNzIiwgImFjdGlvbiIsICJ3ZWlnaHQiLCAib25DbGljayIsICIkZXZlbnQiLCAiJGVtaXQiLCAiY3JlYXRlQmxvY2siLCAiJHNsb3RzIiwgInJlbmRlclNsb3QiLCAiaW5kaWNhdG9yIiwgIlZBQnV0dG9uX2RlZmF1bHQiLCAiX19zY29wZUlkIiwgIlZBQnV0dG9uX2RlZmF1bHQyIiwgImltcG9ydF92dWU1IiwgInJlbmRlcjMiLCAiVHJhbnNpdGlvbiIsICJuYW1lIiwgIm1vZGUiLCAiZGVmYXVsdCIsICJ3aXRoQ3R4IiwgIl8iLCAic2NyaXB0IiwgIlZBRmFkZVRyYW5zaXRpb25fZGVmYXVsdCIsICJpbXBvcnRfdnVlNyIsICJtZXNzYWdlc19kZWZhdWx0IiwgInZhcmlhbnRzIiwgImhhbnMiLCAic3BhY2UiLCAiY2xvc2UiLCAiaGFudCIsICJpbXBvcnRfdnVlNiIsICJWQUxJRF9WQVJJQU5UUyIsICJ3Z1VzZXJWYXJpYW50IiwgInJlZiIsICJfbXckY29uZmlnJGdldCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImlzTW9iaWxlRGV2aWNlIiwgIm1hdGNoTWVkaWEiLCAibWF0Y2hlcyIsICJnZXRNb3VudFBvaW50IiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdCIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QyIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAiYm9keSIsICJxdWVyeVNlbGVjdG9yIiwgImluZmVycmVkVmFyaWFudCIsICJjb21wdXRlZCIsICJpbmNsdWRlcyIsICJ2YWx1ZSIsICJzaHVmZmxlVmFyaWFudCIsICJsYXN0IiwgInRhcmdldEFycmF5IiwgImZpbHRlciIsICJpIiwgInJhbmRvbUluZGV4IiwgIk1hdGgiLCAiZmxvb3IiLCAicmFuZG9tIiwgImxlbmd0aCIsICJpMThuVmFyaWFudCIsICJ1c2VJMThuIiwgIl9jdXJyZW50TXNnc0dyb3VwJGtleSIsICJjdXJyZW50TXNnc0dyb3VwIiwgImNvdW50ZXIiLCAidXNlVW5pcXVlSWQiLCAiY29uY2F0IiwgInVzZVVuaXF1ZUlkX2RlZmF1bHQiLCAiaW1wb3J0X3Z1ZTgiLCAiSU5URVJWQUwiLCAidXNlU2h1ZmZsZWRWYXJpYW50IiwgImlzRnJlZXplZCIsICJyZXN1bHQiLCAiaWQiLCAid2F0Y2giLCAibmV3VmFsdWUiLCAiX2luZmVycmVkVmFyaWFudCR2YWx1IiwgImNsZWFySW50ZXJ2YWwiLCAid2luZG93IiwgInNldEludGVydmFsIiwgImltbWVkaWF0ZSIsICJ1c2VTaHVmZmxlZFZhcmlhbnRfZGVmYXVsdCIsICJpbXBvcnRfdnVlOSIsICJ1c2VNb2RlbFdyYXBwZXIiLCAicHJvcHMiLCAiZW1pdCIsICJzZXQiLCAidXNlTW9kZWxXcmFwcGVyX2RlZmF1bHQiLCAiaW1wb3J0X3Z1ZTEwIiwgInVzZURlZmF1bHQiLCAiZGVmYXVsdFZhbHVlIiwgInJlYWxSZWYiLCAic2hhbGxvd1JlZiIsICJkZWVwIiwgInVzZURlZmF1bHRfZGVmYXVsdCIsICJfX3Byb3BzIiwgIl9fZW1pdCIsICJwcm9tcHQiLCAidGl0bGVJZCIsICJkZXNjSWQiLCAiaXNPcGVuIiwgImlzRGlzYWJsZWQiLCAiaXNWYXJpYW50TmFycm93ZWQiLCAic2h1ZmZsZWRWYXJpYW50IiwgIm9wdE91dEFuZENsb3NlIiwgInNlbGVjdCIsICJ2YXJpYW50IiwgImVsZW1lbnQiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJldiIsICJidXR0b25zIiwgImF1dG9DbG9zZSIsICJkaXNhYmxlZCIsICJpbXBvcnRfdnVlMTMiLCAiX3dpdGhTY29wZUlkIiwgIm4iLCAicHVzaFNjb3BlSWQiLCAicG9wU2NvcGVJZCIsICJfaG9pc3RlZF8xMyIsICJfaG9pc3RlZF8yMiIsICJfaG9pc3RlZF8zMiIsICJfaG9pc3RlZF80MiIsICJfaG9pc3RlZF81MiIsICJfaG9pc3RlZF82MiIsICJfaG9pc3RlZF83MiIsICJfaG9pc3RlZF84MiIsICJyZW5kZXI0IiwgImFwcGVhciIsICJvcGVuIiwgImxhbmciLCAicm9sZSIsICJjcmVhdGVWTm9kZSIsICJ0aXRsZSIsICJjcmVhdGVUZXh0Vk5vZGUiLCAidG9EaXNwbGF5U3RyaW5nIiwgIm1lc3NhZ2VzIiwgIkZyYWdtZW50IiwgInJlbmRlckxpc3QiLCAiVkFWYXJpYW50UHJvbXB0X2RlZmF1bHQiLCAiVkFWYXJpYW50UHJvbXB0X2RlZmF1bHQyIiwgImltcG9ydF92dWUxNyIsICJtb2RlbFZhbHVlIiwgImltcG9ydF92dWUxNSIsICJyZW5kZXI1IiwgIndpdGhEaXJlY3RpdmVzIiwgInZNb2RlbFNlbGVjdCIsICJWQVNlbGVjdF9kZWZhdWx0IiwgIlZBU2VsZWN0X2RlZmF1bHQyIiwgInNlbGVjdGVkVmFyaWFudCIsICJfaW5mZXJyZWRWYXJpYW50JHZhbHUyIiwgImltcG9ydF92dWUxOCIsICJfaG9pc3RlZF8xNCIsICJfaG9pc3RlZF8yMyIsICJfaG9pc3RlZF8zMyIsICJfaG9pc3RlZF80MyIsICJfaG9pc3RlZF81MyIsICJfaG9pc3RlZF82MyIsICJfaG9pc3RlZF83MyIsICJyZW5kZXI2IiwgIlZBVmFyaWFudFByb21wdE1vYmlsZV9kZWZhdWx0IiwgIlZBVmFyaWFudFByb21wdE1vYmlsZV9kZWZhdWx0MiIsICJpc01vYmlsZSIsICJkZXNrdG9wTW91bnRQb2ludCIsICJzZXRWYXJpYW50IiwgInNldExvY2FsVmFyaWFudCIsICJyZWRpcmVjdCIsICJmb3JjZWQiLCAib25PcHRPdXQiLCAic2V0T3B0T3V0IiwgImltcG9ydF92dWUyMSIsICJyZW5kZXI3IiwgIlRlbGVwb3J0IiwgInRvIiwgIm9uT3B0b3V0IiwgIm9uU2VsZWN0IiwgIkFwcF9kZWZhdWx0IiwgIkFwcF9kZWZhdWx0MiIsICJyb290IiwgImNyZWF0ZUVsZW1lbnQiLCAiYXBwZW5kIiwgImNyZWF0ZUFwcCIsICJtb3VudCJdCn0K
