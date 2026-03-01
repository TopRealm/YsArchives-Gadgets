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

// dist/morebits/morebits.js
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
  Morebits.unbinder.getCallback = (self) => {
    return (match) => {
      const current = self.prefix + self.counter + self.postfix;
      self.history[current] = match;
      ++self.counter;
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
  Morebits.wiki.actionCompleted = (self) => {
    if (--Morebits.wiki.numberOfActionsLeft <= 0 && Morebits.wiki.nbrOfCheckpointsLeft <= 0) {
      Morebits.wiki.actionCompleted.event(self);
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
        ctx.editSummary = "[[LIB:UNDO|撤销]]由 ".concat(ctx.revertUser, " 所做出的").concat(window.wgULS("修订 ", "修訂 ")).concat(ctx.revertOldID, "：").concat(ctx.editSummary);
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
      const self = this;
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
        self.buttons[self.buttons.length] = button;
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21vcmViaXRzL21vcmViaXRzLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuLyohIFR3aW5rbGUuanMgLSBtb3JlYml0cy5qcyAqL1xuXG4vKipcbiAqIEEgbGlicmFyeSBmdWxsIG9mIGxvdHMgb2YgZ29vZG5lc3MgZm9yIHVzZXIgc2NyaXB0cyBvbiBNZWRpYVdpa2kgd2lraXMuXG4gKlxuICogVGhlIGhpZ2hsaWdodHMgaW5jbHVkZTpcbiAqIC0ge0BsaW5rIE1vcmViaXRzLndpa2kuYXBpfSAtIG1ha2UgY2FsbHMgdG8gdGhlIE1lZGlhV2lraSBBUElcbiAqIC0ge0BsaW5rIE1vcmViaXRzLndpa2kucGFnZX0gLSBtb2RpZnkgcGFnZXMgb24gdGhlIHdpa2kgKGVkaXQsIHJldmVydCwgZGVsZXRlLCBldGMuKVxuICogLSB7QGxpbmsgTW9yZWJpdHMuZGF0ZX0gLSBlbmhhbmNlZCBkYXRlIG9iamVjdCBwcm9jZXNzaW5nLCBzb3J0IG9mIGEgbGlnaHQgbW9tZW50LmpzXG4gKiAtIHtAbGluayBNb3JlYml0cy5xdWlja0Zvcm19IC0gZ2VuZXJhdGUgcXVpY2sgSFRNTCBmb3JtcyBvbiB0aGUgZmx5XG4gKiAtIHtAbGluayBNb3JlYml0cy5zaW1wbGVXaW5kb3d9IC0gYSB3cmFwcGVyIGZvciBqUXVlcnkgVUkgRGlhbG9nIHdpdGggYSBjdXN0b20gbG9vayBhbmQgZXh0cmEgZmVhdHVyZXNcbiAqIC0ge0BsaW5rIE1vcmViaXRzLnN0YXR1c30gLSBhIHJvdWdoLWFuZC1yZWFkeSBzdGF0dXMgbWVzc2FnZSBkaXNwbGF5ZXIsIHVzZWQgYnkgdGhlIE1vcmViaXRzLndpa2kgY2xhc3Nlc1xuICogLSB7QGxpbmsgTW9yZWJpdHMud2lraXRleHR9IC0gdXRpbGl0aWVzIGZvciBkZWFsaW5nIHdpdGggd2lraXRleHRcbiAqIC0ge0BsaW5rIE1vcmViaXRzLnN0cmluZ30gLSB1dGlsaXRpZXMgZm9yIG1hbmlwdWxhdGluZyBzdHJpbmdzXG4gKiAtIHtAbGluayBNb3JlYml0cy5hcnJheX0gLSB1dGlsaXRpZXMgZm9yIG1hbmlwdWxhdGluZyBhcnJheXNcbiAqIC0ge0BsaW5rIE1vcmViaXRzLmlwfSAtIHV0aWxpdGllcyB0byBoZWxwIHByb2Nlc3MgSVAgYWRkcmVzc2VzXG4gKlxuICogRGVwZW5kZW5jaWVzOlxuICogLSBUaGUgd2hvbGUgdGhpbmcgcmVsaWVzIG9uIGpRdWVyeS4gIEJ1dCBtb3N0IHdpa2lzIHNob3VsZCBwcm92aWRlIHRoaXMgYnkgZGVmYXVsdC5cbiAqIC0ge0BsaW5rIE1vcmViaXRzLnF1aWNrRm9ybX0sIHtAbGluayBNb3JlYml0cy5zaW1wbGVXaW5kb3d9LCBhbmQge0BsaW5rIE1vcmViaXRzLnN0YXR1c30gcmVseSBvbiB0aGUgXCJtb3JlYml0cy5jc3NcIiBmaWxlIGZvciB0aGVpciBzdHlsaW5nLlxuICogLSB7QGxpbmsgTW9yZWJpdHMuc2ltcGxlV2luZG93fSBhbmQge0BsaW5rIE1vcmViaXRzLnF1aWNrRm9ybX0gdG9vbHRpcHMgcmVseSBvbiBqUXVlcnkgVUkgRGlhbG9nIChmcm9tIFJlc291cmNlTG9hZGVyIG1vZHVsZSBuYW1lICdqcXVlcnkudWknKS5cbiAqIC0gVG8gY3JlYXRlIGEgZ2FkZ2V0IGJhc2VkIG9uIG1vcmViaXRzLmpzLCB1c2UgdGhpcyBzeW50YXggaW4gTWVkaWFXaWtpOkdhZGdldHMtZGVmaW5pdGlvbjpcbiAqICAgICAtIGAqR2FkZ2V0TmFtZVtSZXNvdXJjZUxvYWRlcnxkZXBlbmRlbmNpZXM9bWVkaWF3aWtpLnVzZXIsbWVkaWF3aWtpLnV0aWwsbWVkaWF3aWtpLlRpdGxlLGpxdWVyeS51aV18bW9yZWJpdHMuanN8bW9yZWJpdHMuY3NzfEdhZGdldE5hbWUuanNgXG4gKiAtIEFsdGVybmF0aXZlbHksIHlvdSBjYW4gY29uZmlndXJlIG1vcmViaXRzLmpzIGFzIGEgaGlkZGVuIGdhZGdldCBpbiBNZWRpYVdpa2k6R2FkZ2V0cy1kZWZpbml0aW9uOlxuICogICAgIC0gYCptb3JlYml0c1tSZXNvdXJjZUxvYWRlcnxkZXBlbmRlbmNpZXM9bWVkaWF3aWtpLnVzZXIsbWVkaWF3aWtpLnV0aWwsbWVkaWF3aWtpLlRpdGxlLGpxdWVyeS51aXxoaWRkZW5dfG1vcmViaXRzLmpzfG1vcmViaXRzLmNzc2BcbiAqICAgICBhbmQgdGhlbiBsb2FkIGV4dC5nYWRnZXQubW9yZWJpdHMgYXMgb25lIG9mIHRoZSBkZXBlbmRlbmNpZXMgZm9yIHRoZSBuZXcgZ2FkZ2V0LlxuICpcbiAqIEFsbCB0aGUgc3R1ZmYgaGVyZSB3b3JrcyBvbiBhbGwgYnJvd3NlcnMgZm9yIHdoaWNoIE1lZGlhV2lraSBwcm92aWRlcyBKYXZhU2NyaXB0IHN1cHBvcnQuXG4gKlxuICogVGhpcyBsaWJyYXJ5IGlzIG1haW50YWluZWQgYnkgdGhlIG1haW50YWluZXJzIG9mIFR3aW5rbGUuXG4gKiBGb3IgcXVlcmllcywgc3VnZ2VzdGlvbnMsIGhlbHAsIGV0Yy4sIGhlYWQgdG8gW0hlbHA6VHdpbmtsZV0oaHR0cHM6Ly95b3VzaG91Lndpa2kvd2lraS9IOlRXKS5cbiAqIFRoZSBsYXRlc3QgZGV2ZWxvcG1lbnQgc291cmNlIGlzIGF2YWlsYWJsZSBhdCB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3dpa2ltZWRpYS1nYWRnZXRzL3R3aW5rbGUvYmxvYi9tYXN0ZXIvbW9yZWJpdHMuanN8R2l0SHVifS5cbiAqXG4gKiBAcGFyYW0ge0pRdWVyeX0gJFxuICogQG5hbWVzcGFjZSBNb3JlYml0c1xuICovXG5pbXBvcnQgJy4vbW9yZWJpdHMubGVzcyc7XG5pbXBvcnQge2dlbmVyYXRlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbihmdW5jdGlvbiBtb3JlYml0cygkKSB7XG5cdC8vIFdyYXAgZW50aXJlIGZpbGUgd2l0aCBhbm9ueW1vdXMgZnVuY3Rpb25cblx0LyoqIEBsZW5kcyBNb3JlYml0cyAqL1xuXHRjb25zdCBNb3JlYml0cyA9IHt9O1xuXHR3aW5kb3cuTW9yZWJpdHMgPSBNb3JlYml0czsgLy8gYWxsb3cgZ2xvYmFsIGFjY2Vzc1xuXHQvLyBObyBNb3JlYml0cy5pMThuIGF0IHRoaXMgdGltZVxuXHQvKipcblx0ICogV2lraS1zcGVjaWZpYyBjb25maWd1cmF0aW9ucyBmb3IgTW9yZWJpdHNcblx0ICovXG5cdE1vcmViaXRzLmwxMG4gPSB7XG5cdFx0LyoqXG5cdFx0ICogTG9jYWwgYWxpYXNlcyBmb3IgXCJyZWRpcmVjdFwiIG1hZ2ljIHdvcmQuXG5cdFx0ICogQ2hlY2sgdXNpbmcgYXBpLnBocD9hY3Rpb249cXVlcnkmZm9ybWF0PWpzb24mbWV0YT1zaXRlaW5mbyZmb3JtYXR2ZXJzaW9uPTImc2lwcm9wPW1hZ2ljd29yZHNcblx0XHQgKi9cblx0XHRyZWRpcmVjdFRhZ0FsaWFzZXM6IFsnI1JFRElSRUNUJywgJyPph43lrprlkJEnXSxcblx0XHQvKipcblx0XHQgKiBUYWtlcyBhIHN0cmluZyBhcyBhcmd1bWVudCBhbmQgY2hlY2tzIGlmIGl0IGlzIGEgdGltZXN0YW1wIG9yIG5vdFxuXHRcdCAqIElmIG5vdCwgaXQgcmV0dXJucyBudWxsLiBJZiB5ZXMsIGl0IHJldHVybnMgYW4gYXJyYXkgb2YgaW50ZWdlcnNcblx0XHQgKiBpbiB0aGUgZm9ybWF0IFt5ZWFyLCBtb250aCwgZGF0ZSwgaG91ciwgbWludXRlLCBzZWNvbmRdXG5cdFx0ICogd2hpY2ggY2FuIGJlIHBhc3NlZCB0byBEYXRlLlVUQygpXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG5cdFx0ICogQHJldHVybnMge251bWJlcltdIHwgbnVsbH1cblx0XHQgKi9cblx0XHRzaWduYXR1cmVUaW1lc3RhbXBGb3JtYXQ6IChzdHIpID0+IHtcblx0XHRcdGNvbnN0IHJneFVUQyA9IC8oXFxkezR9KeW5tChcXGR7MSwyfSnmnIgoXFxkezEsMn0p5pelIFxcKC5cXCkgKFxcZHsyfSk6KFxcZHsyfSkgXFwoVVRDXFwpLzsgLy8gWVlZWeW5tE1vbnRo5pyIRETml6UgKHcpIEhIOm1tIChVVEMpXG5cdFx0XHRjb25zdCByZ3hDU1QgPSAvKFxcZHs0fSnlubQoXFxkezEsMn0p5pyIKFxcZHsxLDJ9KeaXpSBcXCguXFwpIChcXGR7Mn0pOihcXGR7Mn0pIFxcKENTVFxcKS87IC8vIFlZWVnlubRNb250aOaciERE5pelICh3KSBISDptbSAoQ1NUKVxuXHRcdFx0Y29uc3QgbWF0Y2ggPSByZ3hVVEMuZXhlYyhzdHIpIHx8IHJneENTVC5leGVjKHN0cik7XG5cdFx0XHRjb25zdCBtYXRjaENTVCA9IHJneENTVC5leGVjKHN0cik7XG5cdFx0XHRpZiAoIW1hdGNoKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgbW9udGggPSBNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEubW9udGhzLmluZGV4T2YobWF0Y2hbNF0pO1xuXHRcdFx0aWYgKG1vbnRoID09PSAtMSkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHRcdC8vIC4uLi4uIHllYXIgLi4uLiBtb250aCAuLi4gZGF0ZSAuLi4uIGhvdXIgLi4uIG1pbnV0ZVxuXHRcdFx0cmV0dXJuIG1hdGNoQ1NUXG5cdFx0XHRcdD8gW21hdGNoWzFdLCBtYXRjaFsyXSAtIDEsIG1hdGNoWzNdLCBtYXRjaFs0XSAtIDgsIG1hdGNoWzVdXVxuXHRcdFx0XHQ6IFttYXRjaFsxXSwgbWF0Y2hbMl0gLSAxLCBtYXRjaFszXSwgbWF0Y2hbNF0sIG1hdGNoWzVdXTtcblx0XHR9LFxuXHR9O1xuXHQvKipcblx0ICogU2ltcGxlIGhlbHBlciBmdW5jdGlvbiB0byBzZWUgd2hhdCBncm91cHMgYSB1c2VyIG1pZ2h0IGJlbG9uZy5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGdyb3VwIC0gZS5nLiBgc3lzb3BgLCBgYXV0b2NvbmZpcm1lZGAsIGV0Yy5cblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRNb3JlYml0cy51c2VySXNJbkdyb3VwID0gKGdyb3VwKSA9PiB7XG5cdFx0cmV0dXJuIG13LmNvbmZpZy5nZXQoJ3dnVXNlckdyb3VwcycpLmluY2x1ZGVzKGdyb3VwKTtcblx0fTtcblx0LyoqXG5cdCAqIEhhcmRjb2RlcyB3aGV0aGVyIHRoZSB1c2VyIGlzIGEgc3lzb3AsIHVzZWQgYSBsb3QuXG5cdCAqXG5cdCAqIEB0eXBlIHtib29sZWFufVxuXHQgKi9cblx0TW9yZWJpdHMudXNlcklzU3lzb3AgPVxuXHRcdE1vcmViaXRzLnVzZXJJc0luR3JvdXAoJ3N5c29wJykgfHwgTW9yZWJpdHMudXNlcklzSW5Hcm91cCgnc3Rld2FyZCcpIHx8IE1vcmViaXRzLnVzZXJJc0luR3JvdXAoJ3FpdXdlbicpO1xuXHQvKipcblx0ICogRGVwcmVjYXRlZCBhcyBvZiBGZWJydWFyeSAyMDIxLCB1c2Uge0BsaW5rIE1vcmViaXRzLmlwLnNhbml0aXplSVB2Nn0uXG5cdCAqXG5cdCAqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgTW9yZWJpdHMuaXAuc2FuaXRpemVJUHY2fS5cblx0ICogQ29udmVydHMgYW4gSVB2NiBhZGRyZXNzIHRvIHRoZSBjYW5vbmljYWwgZm9ybSBzdG9yZWQgYW5kIHVzZWQgYnkgTWVkaWFXaWtpLlxuXHQgKiBKYXZhU2NyaXB0IHRyYW5zbGF0aW9uIG9mIHRoZSB7QGxpbmsgaHR0cHM6Ly9nZXJyaXQud2lraW1lZGlhLm9yZy9yL3BsdWdpbnMvZ2l0aWxlcy9tZWRpYXdpa2kvY29yZS8rLzhlYjZhYzNlODRlYTMzMTJkMzkxY2E5NmMxMmM0OWUzYWQwNzUzYmIvaW5jbHVkZXMvdXRpbHMvSVAucGhwIzEzMXxgSVA6OnNhbml0aXplSVAoKWB9XG5cdCAqIGZ1bmN0aW9uIGZyb20gdGhlIElQVXRpbHMgbGlicmFyeS4gIEFkZHJlc3NlcyBhcmUgdmVyYm9zZSwgdXBwZXJjYXNlLFxuXHQgKiBub3JtYWxpemVkLCBhbmQgZXhwYW5kZWQgdG8gOCB3b3Jkcy5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGFkZHJlc3MgLSBUaGUgSVB2NiBhZGRyZXNzLCB3aXRoIG9yIHdpdGhvdXQgQ0lEUi5cblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdE1vcmViaXRzLnNhbml0aXplSVB2NiA9IChhZGRyZXNzKSA9PiB7XG5cdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0J1tNb3JlYml0c10gTk9URTogTW9yZWJpdHMuc2FuaXRpemVJUHY2IHdhcyByZW5hbWVkIHRvIE1vcmViaXRzLmlwLnNhbml0aXplSVB2NiBpbiBGZWJydWFyeSAyMDIxLCBwbGVhc2UgdXNlIHRoYXQgaW5zdGVhZCdcblx0XHQpO1xuXHRcdHJldHVybiBNb3JlYml0cy5pcC5zYW5pdGl6ZUlQdjYoYWRkcmVzcyk7XG5cdH07XG5cdC8qKlxuXHQgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGN1cnJlbnQgcGFnZSBpcyBhIHJlZGlyZWN0IG9yIHNvZnQgcmVkaXJlY3QuIEZhaWxzXG5cdCAqIHRvIGRldGVjdCBzb2Z0IHJlZGlyZWN0cyBvbiBlZGl0LCBoaXN0b3J5LCBldGMuIHBhZ2VzLiAgV2lsbCBhdHRlbXB0IHRvXG5cdCAqIGRldGVjdCBNb2R1bGU6UmZELCB3aXRoIHRoZSBzYW1lIGZhaWx1cmUgcG9pbnRzLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdE1vcmViaXRzLmlzUGFnZVJlZGlyZWN0ID0gKCkgPT4ge1xuXHRcdHJldHVybiAhIShcblx0XHRcdG13LmNvbmZpZy5nZXQoJ3dnSXNSZWRpcmVjdCcpIHx8XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29mdHJlZGlyZWN0JykgfHxcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3gtUmZEJykgfHxcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3gtUmVkaXJlY3RfY2F0ZWdvcnlfc2hlbGwnKVxuXHRcdCk7XG5cdH07XG5cdC8qKlxuXHQgKiBTdG9yZXMgYSBub3JtYWxpemVkICh1bmRlcnNjb3JlcyBjb252ZXJ0ZWQgdG8gc3BhY2VzKSB2ZXJzaW9uIG9mIHRoZVxuXHQgKiBgd2dQYWdlTmFtZWAgdmFyaWFibGUuXG5cdCAqXG5cdCAqIEB0eXBlIHtzdHJpbmd9XG5cdCAqL1xuXHRNb3JlYml0cy5wYWdlTmFtZU5vcm0gPSBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJykucmVwbGFjZSgvXy9nLCAnICcpO1xuXHQvKipcblx0ICogQ3JlYXRlIGEgc3RyaW5nIGZvciB1c2UgaW4gcmVnZXggbWF0Y2hpbmcgYSBwYWdlIG5hbWUuICBBY2NvdW50cyBmb3Jcblx0ICogbGVhZGluZyBjaGFyYWN0ZXIncyBjYXBpdGFsaXphdGlvbiwgdW5kZXJzY29yZXMgYXMgc3BhY2VzLCBhbmQgc3BlY2lhbFxuXHQgKiBjaGFyYWN0ZXJzIGJlaW5nIGVzY2FwZWQuICBTZWUgYWxzbyB7QGxpbmsgTW9yZWJpdHMubmFtZXNwYWNlUmVnZXh9LlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcGFnZU5hbWUgLSBQYWdlIG5hbWUgd2l0aG91dCBuYW1lc3BhY2UuXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9IC0gRm9yIGEgcGFnZSBuYW1lIGBGb28gYmFyYCwgcmV0dXJucyB0aGUgc3RyaW5nIGBbRmZdb29bXyBdYmFyYC5cblx0ICovXG5cdE1vcmViaXRzLnBhZ2VOYW1lUmVnZXggPSAocGFnZU5hbWUpID0+IHtcblx0XHRpZiAocGFnZU5hbWUgPT09ICcnKSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXHRcdGNvbnN0IFtmaXJzdENoYXJdID0gcGFnZU5hbWU7XG5cdFx0Y29uc3QgcmVtYWluZGVyID0gTW9yZWJpdHMuc3RyaW5nLmVzY2FwZVJlZ0V4cChwYWdlTmFtZS5zbGljZSgxKSk7XG5cdFx0aWYgKG13LlRpdGxlLnBocENoYXJUb1VwcGVyKGZpcnN0Q2hhcikgIT09IGZpcnN0Q2hhci50b0xvd2VyQ2FzZSgpKSB7XG5cdFx0XHRyZXR1cm4gYFske213LlRpdGxlLnBocENoYXJUb1VwcGVyKGZpcnN0Q2hhcil9JHtmaXJzdENoYXIudG9Mb3dlckNhc2UoKX1dJHtyZW1haW5kZXJ9YDtcblx0XHR9XG5cdFx0cmV0dXJuIE1vcmViaXRzLnN0cmluZy5lc2NhcGVSZWdFeHAoZmlyc3RDaGFyKSArIHJlbWFpbmRlcjtcblx0fTtcblx0LyoqXG5cdCAqIENvbnZlcnRzIHN0cmluZyBvciBhcnJheSBvZiBET00gbm9kZXMgaW50byBhbiBIVE1MIGZyYWdtZW50LlxuXHQgKiBXaWtpbGluayBzeW50YXggKGBbWy4uLl1dYCkgaXMgdHJhbnNmb3JtZWQgaW50byBIVE1MIGFuY2hvci5cblx0ICogVXNlZCBpbiBNb3JlYml0cy5xdWlja0Zvcm0gYW5kIE1vcmViaXRzLnN0YXR1c1xuXHQgKlxuXHQgKiBAaW50ZXJuYWxcblx0ICogQHBhcmFtIHtzdHJpbmd8Tm9kZXwoc3RyaW5nfE5vZGUpW119IGlucHV0XG5cdCAqIEByZXR1cm5zIHtEb2N1bWVudEZyYWdtZW50fVxuXHQgKi9cblx0TW9yZWJpdHMuY3JlYXRlSHRtbCA9IChpbnB1dCkgPT4ge1xuXHRcdGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXHRcdGlmICghaW5wdXQpIHtcblx0XHRcdHJldHVybiBmcmFnbWVudDtcblx0XHR9XG5cdFx0aW5wdXQgPSBnZW5lcmF0ZUFycmF5KGlucHV0KTtcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgaW5wdXQpIHtcblx0XHRcdGlmIChlbGVtZW50IGluc3RhbmNlb2YgTm9kZSkge1xuXHRcdFx0XHRmcmFnbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZvciAoY29uc3Qgbm9kZSBvZiAkLnBhcnNlSFRNTChNb3JlYml0cy5jcmVhdGVIdG1sLnJlbmRlcldpa2lsaW5rcyhlbGVtZW50KSkpIHtcblx0XHRcdFx0XHRmcmFnbWVudC5hcHBlbmRDaGlsZChub2RlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZnJhZ21lbnQ7XG5cdH07XG5cdC8qKlxuXHQgKiBDb252ZXJ0cyB3aWtpbGlua3MgdG8gSFRNTCBhbmNob3IgdGFncy5cblx0ICpcblx0ICogQHBhcmFtIHRleHRcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRNb3JlYml0cy5jcmVhdGVIdG1sLnJlbmRlcldpa2lsaW5rcyA9ICh0ZXh0KSA9PiB7XG5cdFx0Y29uc3QgdWIgPSBuZXcgTW9yZWJpdHMudW5iaW5kZXIodGV4dCk7XG5cdFx0Ly8gRG9uJ3QgY29udmVydCB3aWtpbGlua3Mgd2l0aGluIGNvZGUgdGFncyBhcyB0aGV5J3JlIHVzZWQgZm9yIGRpc3BsYXlpbmcgd2lraS1jb2RlXG5cdFx0dWIudW5iaW5kKCc8Y29kZT4nLCAnPC9jb2RlPicpO1xuXHRcdHViLmNvbnRlbnQgPSB1Yi5jb250ZW50LnJlcGxhY2UoL1xcW1xcWzo/KD86KFtefFxcXV0rPylcXHwpPyhbXlxcXXxdKz8pXFxdXFxdL2csIChfLCB0YXJnZXQsIHRleHRfKSA9PiB7XG5cdFx0XHR0YXJnZXQgfHw9IHRleHRfO1xuXHRcdFx0cmV0dXJuIGA8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIke213LnV0aWwuZ2V0VXJsKHRhcmdldCl9XCIgdGl0bGU9XCIke3RhcmdldC5yZXBsYWNlKFxuXHRcdFx0XHQvXCIvZyxcblx0XHRcdFx0JyYjMzQ7J1xuXHRcdFx0KX1cIj4ke3RleHRffTwvYT5gO1xuXHRcdH0pO1xuXHRcdHJldHVybiB1Yi5yZWJpbmQoKTtcblx0fTtcblx0LyoqXG5cdCAqIENyZWF0ZSBhIHN0cmluZyBmb3IgdXNlIGluIHJlZ2V4IG1hdGNoaW5nIGFsbCBuYW1lc3BhY2UgYWxpYXNlcywgcmVnYXJkbGVzc1xuXHQgKiBvZiB0aGUgY2FwaXRhbGl6YXRpb24gYW5kIHVuZGVyc2NvcmVzL3NwYWNlcy4gIERvZXNuJ3QgaW5jbHVkZSB0aGUgb3B0aW9uYWxcblx0ICogbGVhZGluZyBgOmAsIGJ1dCBpZiB0aGVyZSdzIG1vcmUgdGhhbiBvbmUgaXRlbSwgd3JhcHMgdGhlIGxpc3QgaW4gYVxuXHQgKiBub24tY2FwdHVyaW5nIGdyb3VwLiAgVGhpcyBtZWFucyB5b3UgY2FuIGRvIGBNb3JlYml0cy5uYW1lc3BhY2VSZWdleChbNF0pICtcblx0ICogJzonICsgTW9yZWJpdHMucGFnZU5hbWVSZWdleCgnVHdpbmtsZScpYCB0byBtYXRjaCBhIGZ1bGwgcGFnZS4gIFVzZXNcblx0ICoge0BsaW5rIE1vcmViaXRzLnBhZ2VOYW1lUmVnZXh9LlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcltdfSBuYW1lc3BhY2VzIC0gQXJyYXkgb2YgbmFtZXNwYWNlIG51bWJlcnMuICBVbnVzZWQvaW52YWxpZFxuXHQgKiBuYW1lc3BhY2UgbnVtYmVycyBhcmUgc2lsZW50bHkgZGlzY2FyZGVkLlxuXHQgKiBAZXhhbXBsZVxuXHQgKiAvLyByZXR1cm5zICcoPzpbRmZdW0lpXVtMbF1bRWVdfFtJaV1bTW1dW0FhXVtHZ11bRWVdKSdcblx0ICogTW9yZWJpdHMubmFtZXNwYWNlUmVnZXgoWzZdKVxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfSAtIFJlZ2V4LXN1aXRhYmxlIHN0cmluZyBvZiBhbGwgbmFtZXNwYWNlIGFsaWFzZXMuXG5cdCAqL1xuXHRNb3JlYml0cy5uYW1lc3BhY2VSZWdleCA9IChuYW1lc3BhY2VzKSA9PiB7XG5cdFx0bmFtZXNwYWNlcyA9IGdlbmVyYXRlQXJyYXkobmFtZXNwYWNlcyk7XG5cdFx0Y29uc3QgYWxpYXNlcyA9IFtdO1xuXHRcdGxldCByZWdleDtcblx0XHRmb3IgKGNvbnN0IFtuYW1lLCBudW1iZXJdIG9mIE9iamVjdC5lbnRyaWVzKG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlSWRzJykpKSB7XG5cdFx0XHRpZiAobmFtZXNwYWNlcy5pbmNsdWRlcyhudW1iZXIpKSB7XG5cdFx0XHRcdC8vIE5hbWVzcGFjZXMgYXJlIGNvbXBsZXRlbHkgYWdub3N0aWMgYXMgdG8gY2FzZSxcblx0XHRcdFx0Ly8gYW5kIGEgcmVnZXggc3RyaW5nIGlzIG1vcmUgdXNlZnVsL2NvbXBhdGlibGUgdGhhbiBhIFJlZ0V4cCBvYmplY3QsXG5cdFx0XHRcdC8vIHNvIHdlIGFjY2VwdCBhbnkgY2FzaW5nIGZvciBhbnkgbGV0dGVyLlxuXHRcdFx0XHRhbGlhc2VzW2FsaWFzZXMubGVuZ3RoXSA9IFsuLi5uYW1lXVxuXHRcdFx0XHRcdC5tYXAoKGNoYXIpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBNb3JlYml0cy5wYWdlTmFtZVJlZ2V4KGNoYXIpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmpvaW4oJycpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRzd2l0Y2ggKGFsaWFzZXMubGVuZ3RoKSB7XG5cdFx0XHRjYXNlIDA6XG5cdFx0XHRcdHJlZ2V4ID0gJyc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRbcmVnZXhdID0gYWxpYXNlcztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZWdleCA9IGAoPzoke2FsaWFzZXMuam9pbignfCcpfSlgO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0cmV0dXJuIHJlZ2V4O1xuXHR9O1xuXHQvKiAqKioqKioqKioqKioqKioqIE1vcmViaXRzLnF1aWNrRm9ybSAqKioqKioqKioqKioqKioqICovXG5cdC8qKlxuXHQgKiBDcmVhdGlvbiBvZiBzaW1wbGUgYW5kIHN0YW5kYXJkIGZvcm1zIHdpdGhvdXQgbXVjaCBzcGVjaWZpYyBjb2RpbmcuXG5cdCAqXG5cdCAqIEBuYW1lc3BhY2UgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0c1xuXHQgKiBAY2xhc3Ncblx0ICogQHBhcmFtIHtldmVudH0gZXZlbnQgLSBGdW5jdGlvbiB0byBleGVjdXRlIHdoZW4gZm9ybSBpcyBzdWJtaXR0ZWQuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbZXZlbnRUeXBlPXN1Ym1pdF0gLSBUeXBlIG9mIHRoZSBldmVudC5cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybSA9IGZ1bmN0aW9uIChldmVudCwgZXZlbnRUeXBlKSB7XG5cdFx0dGhpcy5yb290ID0gbmV3IE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50KHtcblx0XHRcdHR5cGU6ICdmb3JtJyxcblx0XHRcdGV2ZW50LFxuXHRcdFx0ZXZlbnRUeXBlLFxuXHRcdH0pO1xuXHR9O1xuXHQvKipcblx0ICogUmVuZGVycyB0aGUgSFRNTCBvdXRwdXQgb2YgdGhlIHF1aWNrRm9ybS5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCByZXQgPSB0aGlzLnJvb3QucmVuZGVyKCk7XG5cdFx0cmV0Lm5hbWVzID0ge307XG5cdFx0cmV0dXJuIHJldDtcblx0fTtcblx0LyoqXG5cdCAqIEFwcGVuZCBlbGVtZW50IHRvIHRoZSBmb3JtLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7KG9iamVjdHxNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCl9IGRhdGEgLSBBIHF1aWNrZm9ybSBlbGVtZW50LCBvciB0aGUgb2JqZWN0IHdpdGggd2hpY2hcblx0ICogYSBxdWlja2Zvcm0gZWxlbWVudCBpcyBjb25zdHJ1Y3RlZC5cblx0ICogQHJldHVybnMge01vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50fSAtIFNhbWUgYXMgd2hhdCBpcyBwYXNzZWQgdG8gdGhlIGZ1bmN0aW9uLlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdHJldHVybiB0aGlzLnJvb3QuYXBwZW5kKGRhdGEpO1xuXHR9O1xuXHQvKipcblx0ICogQ3JlYXRlIGEgbmV3IGVsZW1lbnQgZm9yIHRoZSB0aGUgZm9ybS5cblx0ICpcblx0ICogSW5kZXggdG8gTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQgdHlwZXM6XG5cdCAqIC0gR2xvYmFsIGF0dHJpYnV0ZXM6IGlkLCBjbGFzc05hbWUsIHN0eWxlLCB0b29sdGlwLCBleHRyYSwgJGRhdGEsIGFkbWlub25seVxuXHQgKiAtIGBzZWxlY3RgOiBBIGNvbWJvIGJveCAoYWthIGRyb3AtZG93bikuXG5cdCAqICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxhYmVsLCBtdWx0aXBsZSwgc2l6ZSwgbGlzdCwgZXZlbnQsIGRpc2FibGVkXG5cdCAqICAtIGBvcHRpb25gOiBBbiBlbGVtZW50IGZvciBhIGNvbWJvIGJveC5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IHZhbHVlLCBsYWJlbCwgc2VsZWN0ZWQsIGRpc2FibGVkXG5cdCAqICAtIGBvcHRncm91cGA6IEEgZ3JvdXAgb2YgXCJvcHRpb25cInMuXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBsYWJlbCwgbGlzdFxuXHQgKiAgLSBgZmllbGRgOiBBIGZpZWxkc2V0IChha2EgZ3JvdXAgYm94KS5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxhYmVsLCBkaXNhYmxlZFxuXHQgKiAgLSBgY2hlY2tib3hgOiBBIGNoZWNrYm94LiBNdXN0IHVzZSBcImxpc3RcIiBwYXJhbWV0ZXIuXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCBsaXN0LCBldmVudFxuXHQgKiAgICAgIC0gQXR0cmlidXRlcyAod2l0aGluIGxpc3QpOiBuYW1lLCBsYWJlbCwgdmFsdWUsIGNoZWNrZWQsIGRpc2FibGVkLCBldmVudCwgc3ViZ3JvdXBcblx0ICogIC0gYHJhZGlvYDogQSByYWRpbyBidXR0b24uIE11c3QgdXNlIFwibGlzdFwiIHBhcmFtZXRlci5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxpc3QsIGV2ZW50XG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzICh3aXRoaW4gbGlzdCk6IG5hbWUsIGxhYmVsLCB2YWx1ZSwgY2hlY2tlZCwgZGlzYWJsZWQsIGV2ZW50LCBzdWJncm91cFxuXHQgKiAgLSBgaW5wdXRgOiBBIHRleHQgaW5wdXQgYm94LlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogbmFtZSwgbGFiZWwsIHZhbHVlLCBzaXplLCBwbGFjZWhvbGRlciwgbWF4bGVuZ3RoLCBkaXNhYmxlZCwgcmVxdWlyZWQsIHJlYWRvbmx5LCBldmVudFxuXHQgKiAgLSBgbnVtYmVyYDogQSBudW1iZXIgaW5wdXQgYm94LlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogRXZlcnl0aGluZyB0aGUgdGV4dCBgaW5wdXRgIGhhcywgYXMgd2VsbCBhczogbWluLCBtYXgsIHN0ZXAsIGxpc3Rcblx0ICogIC0gYGR5bmlucHV0YDogQSBzZXQgb2YgdGV4dCBib3hlcyB3aXRoIFwiUmVtb3ZlXCIgYnV0dG9ucyBhbmQgYW4gXCJBZGRcIiBidXR0b24uXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCBsYWJlbCwgbWluLCBtYXgsIHN1YmxhYmVsLCB2YWx1ZSwgc2l6ZSwgbWF4bGVuZ3RoLCBldmVudFxuXHQgKiAgLSBgaGlkZGVuYDogQW4gaW52aXNpYmxlIGZvcm0gZmllbGQuXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCB2YWx1ZVxuXHQgKiAgLSBgaGVhZGVyYDogQSBsZXZlbCA1IGhlYWRlci5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IGxhYmVsXG5cdCAqICAtIGBkaXZgOiBBIGdlbmVyaWMgcGxhY2Vob2xkZXIgZWxlbWVudCBvciBsYWJlbC5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxhYmVsXG5cdCAqICAtIGBzdWJtaXRgOiBBIHN1Ym1pdCBidXR0b24uIE1vcmViaXRzLnNpbXBsZVdpbmRvdyBtb3ZlcyB0aGVzZSB0byB0aGUgZm9vdGVyIG9mIHRoZSBkaWFsb2cuXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCBsYWJlbCwgZGlzYWJsZWRcblx0ICogIC0gYGJ1dHRvbmA6IEEgZ2VuZXJpYyBidXR0b24uXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCBsYWJlbCwgZGlzYWJsZWQsIGV2ZW50XG5cdCAqICAtIGB0ZXh0YXJlYWA6IEEgYmlnLCBtdWx0aS1saW5lIHRleHQgYm94LlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogbmFtZSwgbGFiZWwsIHZhbHVlLCBjb2xzLCByb3dzLCBkaXNhYmxlZCwgcmVxdWlyZWQsIHJlYWRvbmx5XG5cdCAqICAtIGBmcmFnbWVudGA6IEEgRG9jdW1lbnRGcmFnbWVudCBvYmplY3QuXG5cdCAqICAgICAgLSBObyBhdHRyaWJ1dGVzLCBhbmQgbm8gZ2xvYmFsIGF0dHJpYnV0ZXMgZXhjZXB0IGFkbWlub25seS5cblx0ICogVGhlcmUgaXMgc29tZSBkaWZmZXJlbmNlIG9uIGhvdyB0eXBlcyBoYW5kbGUgdGhlIGBsYWJlbGAgYXR0cmlidXRlOlxuXHQgKiAtIGBkaXZgLCBgc2VsZWN0YCwgYGZpZWxkYCwgYGNoZWNrYm94YC9gcmFkaW9gLCBgaW5wdXRgLCBgdGV4dGFyZWFgLCBgaGVhZGVyYCwgYW5kIGBkeW5pbnB1dGAgY2FuIGFjY2VwdCBhbiBhcnJheSBvZiBpdGVtcyxcblx0ICogYW5kIHRoZSBsYWJlbCBpdGVtKHMpIGNhbiBiZSBgRWxlbWVudGBzLlxuXHQgKiAtIGBvcHRpb25gLCBgb3B0Z3JvdXBgLCBgX2R5bmlucHV0X2VsZW1lbnRgLCBgc3VibWl0YCwgYW5kIGBidXR0b25gIGFjY2VwdCBvbmx5IGEgc2luZ2xlIHN0cmluZy5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAY2xhc3Ncblx0ICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBPYmplY3QgcmVwcmVzZW50aW5nIHRoZSBxdWlja2Zvcm0gZWxlbWVudC4gU2hvdWxkXG5cdCAqIHNwZWNpZnkgb25lIG9mIHRoZSBhdmFpbGFibGUgdHlwZXMgZnJvbSB0aGUgaW5kZXggYWJvdmUsIGFzIHdlbGwgYXMgYW55XG5cdCAqIHJlbGV2YW50IGFuZCBhdmFpbGFibGUgYXR0cmlidXRlcy5cblx0ICogQGV4YW1wbGUgbmV3IE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50KHtcblx0ICogICAgIG5hbWU6ICd0YXJnZXQnLFxuXHQgKiAgICAgdHlwZTogJ2lucHV0Jyxcblx0ICogICAgIGxhYmVsOiAnWW91ciB0YXJnZXQ6Jyxcblx0ICogICAgIHRvb2x0aXA6ICdFbnRlciB5b3VyIHRhcmdldC4gUmVxdWlyZWQuJyxcblx0ICogICAgIHJlcXVpcmVkOiB0cnVlXG5cdCAqIH0pO1xuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQgPSBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdHRoaXMuZGF0YSA9IGRhdGE7XG5cdFx0dGhpcy5jaGlsZHMgPSBbXTtcblx0fTtcblx0LyoqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudFxuXHQgKiBAdHlwZSB7bnVtYmVyfVxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQuaWQgPSAwO1xuXHQvKipcblx0ICogQXBwZW5kcyBhbiBlbGVtZW50IHRvIGN1cnJlbnQgZWxlbWVudC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50XG5cdCAqIEBwYXJhbSB7TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnR9IGRhdGEgLSBBIHF1aWNrRm9ybSBlbGVtZW50IG9yIHRoZSBvYmplY3QgcmVxdWlyZWQgdG9cblx0ICogY3JlYXRlIHRoZSBxdWlja0Zvcm0gZWxlbWVudC5cblx0ICogQHJldHVybnMge01vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50fSBUaGUgc2FtZSBlbGVtZW50IHBhc3NlZCBpbi5cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50LnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdGxldCBjaGlsZDtcblx0XHRpZiAoZGF0YSBpbnN0YW5jZW9mIE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50KSB7XG5cdFx0XHRjaGlsZCA9IGRhdGE7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNoaWxkID0gbmV3IE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50KGRhdGEpO1xuXHRcdH1cblx0XHR0aGlzLmNoaWxkc1t0aGlzLmNoaWxkcy5sZW5ndGhdID0gY2hpbGQ7XG5cdFx0cmV0dXJuIGNoaWxkO1xuXHR9O1xuXHQvKipcblx0ICogUmVuZGVycyB0aGUgSFRNTCBvdXRwdXQgZm9yIHRoZSBxdWlja0Zvcm0gZWxlbWVudC4gIFRoaXMgc2hvdWxkIGJlIGNhbGxlZFxuXHQgKiB3aXRob3V0IHBhcmFtZXRlcnM6IGBmb3JtLnJlbmRlcigpYC5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IGludGVybmFsU3ViZ3JvdXBJZFxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnRcblx0ICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChpbnRlcm5hbFN1Ymdyb3VwSWQpIHtcblx0XHRjb25zdCBjdXJyZW50Tm9kZSA9IHRoaXMuY29tcHV0ZSh0aGlzLmRhdGEsIGludGVybmFsU3ViZ3JvdXBJZCk7XG5cdFx0Zm9yIChjb25zdCBjaGlsZCBvZiB0aGlzLmNoaWxkcykge1xuXHRcdFx0Ly8gZG8gbm90IHBhc3MgaW50ZXJuYWxfc3ViZ3JvdXBfaWQgdG8gcmVjdXJzaXZlIGNhbGxzXG5cdFx0XHRjdXJyZW50Tm9kZVsxXS5hcHBlbmRDaGlsZChjaGlsZC5yZW5kZXIoKSk7XG5cdFx0fVxuXHRcdHJldHVybiBjdXJyZW50Tm9kZVswXTtcblx0fTtcblx0LyoqXG5cdCAqIEBwYXJhbSB7Kn0gZGF0YVxuXHQgKiBAcGFyYW0ge251bWJlcn0gaW5JZFxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnRcblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50LnByb3RvdHlwZS5jb21wdXRlID0gZnVuY3Rpb24gKGRhdGEsIGluSWQpIHtcblx0XHRsZXQgbm9kZTtcblx0XHRsZXQgY2hpbGRDb250YWluZXIgPSBudWxsO1xuXHRcdGxldCBsYWJlbDtcblx0XHRjb25zdCBpZCA9IGAke2luSWQgPyBgJHtpbklkfV9gIDogJyd9bm9kZV8ke01vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50LmlkKyt9YDtcblx0XHRpZiAoZGF0YS5hZG1pbm9ubHkgJiYgIU1vcmViaXRzLnVzZXJJc1N5c29wKSB7XG5cdFx0XHQvLyBoZWxsIGhhY2sgYWxwaGFcblx0XHRcdGRhdGEudHlwZSA9ICdoaWRkZW4nO1xuXHRcdH1cblx0XHRsZXQgaTtcblx0XHRsZXQgY3VycmVudDtcblx0XHRsZXQgc3Vibm9kZTtcblx0XHRzd2l0Y2ggKGRhdGEudHlwZSkge1xuXHRcdFx0Y2FzZSAnZm9ybSc6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cdFx0XHRcdG5vZGUuY2xhc3NOYW1lID0gJ3F1aWNrZm9ybSc7XG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zY3JpcHQtdXJsXG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdhY3Rpb24nLCAnamF2YXNjcmlwdDp2b2lkKDApOycpO1xuXHRcdFx0XHRpZiAoZGF0YS5ldmVudCkge1xuXHRcdFx0XHRcdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihkYXRhLmV2ZW50VHlwZSB8fCAnc3VibWl0JywgZGF0YS5ldmVudCwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnZnJhZ21lbnQnOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXHRcdFx0XHQvLyBmcmFnbWVudHMgY2FuJ3QgaGF2ZSBhbnkgYXR0cmlidXRlcywgc28ganVzdCByZXR1cm4gaXQgc3RyYWlnaHQgYXdheVxuXHRcdFx0XHRyZXR1cm4gW25vZGUsIG5vZGVdO1xuXHRcdFx0Y2FzZSAnc2VsZWN0Jzoge1xuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdpZCcsIGBkaXZfJHtpZH1gKTtcblx0XHRcdFx0aWYgKGRhdGEubGFiZWwpIHtcblx0XHRcdFx0XHRsYWJlbCA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKSk7XG5cdFx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBpZCk7XG5cdFx0XHRcdFx0bGFiZWwuYXBwZW5kQ2hpbGQoTW9yZWJpdHMuY3JlYXRlSHRtbChkYXRhLmxhYmVsKSk7XG5cdFx0XHRcdFx0Ly8gTm8gbWFyZ2luXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBzZWxlY3QgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpKTtcblx0XHRcdFx0aWYgKGRhdGEuZXZlbnQpIHtcblx0XHRcdFx0XHRzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZGF0YS5ldmVudCwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLm11bHRpcGxlKSB7XG5cdFx0XHRcdFx0c2VsZWN0LnNldEF0dHJpYnV0ZSgnbXVsdGlwbGUnLCAnbXVsdGlwbGUnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5zaXplKSB7XG5cdFx0XHRcdFx0c2VsZWN0LnNldEF0dHJpYnV0ZSgnc2l6ZScsIGRhdGEuc2l6ZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEuZGlzYWJsZWQpIHtcblx0XHRcdFx0XHRzZWxlY3QuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBkYXRhLm5hbWUpO1xuXHRcdFx0XHRpZiAoZGF0YS5saXN0KSB7XG5cdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGRhdGEubGlzdC5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRcdFx0Y3VycmVudCA9IGRhdGEubGlzdFtpXTtcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50Lmxpc3QpIHtcblx0XHRcdFx0XHRcdFx0Y3VycmVudC50eXBlID0gJ29wdGdyb3VwJztcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGN1cnJlbnQudHlwZSA9ICdvcHRpb24nO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0c3Vibm9kZSA9IHRoaXMuY29tcHV0ZShjdXJyZW50KTtcblx0XHRcdFx0XHRcdHNlbGVjdC5hcHBlbmRDaGlsZChzdWJub2RlWzBdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2hpbGRDb250YWluZXIgPSBzZWxlY3Q7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0Y2FzZSAnb3B0aW9uJzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXHRcdFx0XHRub2RlLnZhbHVlcyA9IGRhdGEudmFsdWU7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGRhdGEudmFsdWUpO1xuXHRcdFx0XHRpZiAoZGF0YS5zZWxlY3RlZCkge1xuXHRcdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmRpc2FibGVkKSB7XG5cdFx0XHRcdFx0bm9kZS5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gQWRkIGhpZGRlbiBhdHRyXG5cdFx0XHRcdGlmIChkYXRhLmhpZGRlbikge1xuXHRcdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ2xhYmVsJywgZGF0YS5sYWJlbCk7XG5cdFx0XHRcdG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZGF0YS5sYWJlbCkpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ29wdGdyb3VwJzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGdyb3VwJyk7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdsYWJlbCcsIGRhdGEubGFiZWwpO1xuXHRcdFx0XHRpZiAoZGF0YS5saXN0KSB7XG5cdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGRhdGEubGlzdC5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRcdFx0Y3VycmVudCA9IGRhdGEubGlzdFtpXTtcblx0XHRcdFx0XHRcdGN1cnJlbnQudHlwZSA9ICdvcHRpb24nOyAvLyBtdXN0IGJlIG9wdGlvbnMgaGVyZVxuXHRcdFx0XHRcdFx0c3Vibm9kZSA9IHRoaXMuY29tcHV0ZShjdXJyZW50KTtcblx0XHRcdFx0XHRcdG5vZGUuYXBwZW5kQ2hpbGQoc3Vibm9kZVswXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnZmllbGQnOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKTtcblx0XHRcdFx0bGFiZWwgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpKTtcblx0XHRcdFx0bGFiZWwuYXBwZW5kQ2hpbGQoTW9yZWJpdHMuY3JlYXRlSHRtbChkYXRhLmxhYmVsKSk7XG5cdFx0XHRcdGlmIChkYXRhLm5hbWUpIHtcblx0XHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnbmFtZScsIGRhdGEubmFtZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEuZGlzYWJsZWQpIHtcblx0XHRcdFx0XHRub2RlLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2NoZWNrYm94Jzpcblx0XHRcdGNhc2UgJ3JhZGlvJzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHRpZiAoZGF0YS5saXN0KSB7XG5cdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGRhdGEubGlzdC5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRcdFx0Y29uc3QgY3VySWQgPSBgJHtpZH1fJHtpfWA7XG5cdFx0XHRcdFx0XHRjdXJyZW50ID0gZGF0YS5saXN0W2ldO1xuXHRcdFx0XHRcdFx0bGV0IGN1ckRpdjtcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50LnR5cGUgPT09ICdoZWFkZXInKSB7XG5cdFx0XHRcdFx0XHRcdC8vIGlubGluZSBoYWNrXG5cdFx0XHRcdFx0XHRcdGN1ckRpdiA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDYnKSk7XG5cdFx0XHRcdFx0XHRcdGN1ckRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjdXJyZW50LmxhYmVsKSk7XG5cdFx0XHRcdFx0XHRcdGlmIChjdXJyZW50LnRvb2x0aXApIHtcblx0XHRcdFx0XHRcdFx0XHRNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudC5nZW5lcmF0ZVRvb2x0aXAoY3VyRGl2LCBjdXJyZW50KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGN1ckRpdiA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuXHRcdFx0XHRcdFx0Ly8gQWRkIGhpZGRlbiBhdHRyXG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudC5oaWRkZW4pIHtcblx0XHRcdFx0XHRcdFx0Y3VyRGl2LnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0c3Vibm9kZSA9IGN1ckRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKTtcblx0XHRcdFx0XHRcdHN1Ym5vZGUudmFsdWVzID0gY3VycmVudC52YWx1ZTtcblx0XHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGN1cnJlbnQudmFsdWUpO1xuXHRcdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBkYXRhLnR5cGUpO1xuXHRcdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ2lkJywgY3VySWQpO1xuXHRcdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBjdXJyZW50Lm5hbWUgfHwgZGF0YS5uYW1lKTtcblx0XHRcdFx0XHRcdC8vIElmIG5hbWUgaXMgcHJvdmlkZWQgb24gdGhlIGluZGl2aWR1YWwgY2hlY2tib3gsIGFkZCBhIGRhdGEtc2luZ2xlXG5cdFx0XHRcdFx0XHQvLyBhdHRyaWJ1dGUgd2hpY2ggaW5kaWNhdGVzIGl0IGlzbid0IHBhcnQgb2YgYSBsaXN0IG9mIGNoZWNrYm94ZXMgd2l0aFxuXHRcdFx0XHRcdFx0Ly8gc2FtZSBuYW1lLiBVc2VkIGluIGdldElucHV0RGF0YSgpXG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudC5uYW1lKSB7XG5cdFx0XHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLXNpbmdsZScsICdkYXRhLXNpbmdsZScpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQuY2hlY2tlZCkge1xuXHRcdFx0XHRcdFx0XHRzdWJub2RlLmNoZWNrZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQuZGlzYWJsZWQpIHtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRsYWJlbCA9IGN1ckRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKTtcblx0XHRcdFx0XHRcdGxhYmVsLmFwcGVuZENoaWxkKE1vcmViaXRzLmNyZWF0ZUh0bWwoY3VycmVudC5sYWJlbCkpO1xuXHRcdFx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjdXJJZCk7XG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudC50b29sdGlwKSB7XG5cdFx0XHRcdFx0XHRcdE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50LmdlbmVyYXRlVG9vbHRpcChsYWJlbCwgY3VycmVudCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBzdHlsZXMgZ28gb24gdGhlIGxhYmVsLCBkb2Vzbid0IG1ha2Ugc2Vuc2UgdG8gc3R5bGUgYSBjaGVja2JveC9yYWRpb1xuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQuc3R5bGUpIHtcblx0XHRcdFx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsIGN1cnJlbnQuc3R5bGUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0bGV0IGV2ZW50O1xuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQuc3ViZ3JvdXApIHtcblx0XHRcdFx0XHRcdFx0bGV0IHRtcGdyb3VwID0gY3VycmVudC5zdWJncm91cDtcblx0XHRcdFx0XHRcdFx0dG1wZ3JvdXAgPSBnZW5lcmF0ZUFycmF5KHRtcGdyb3VwKTtcblx0XHRcdFx0XHRcdFx0Y29uc3Qgc3ViZ3JvdXBSYXcgPSBuZXcgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQoe1xuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdkaXYnLFxuXHRcdFx0XHRcdFx0XHRcdGlkOiBgJHtpZH1fJHtpfV9zdWJncm91cGAsXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IGVsIG9mIHRtcGdyb3VwKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgbmV3RWwgPSB7XG5cdFx0XHRcdFx0XHRcdFx0XHQuLi5lbCxcblx0XHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRcdG5ld0VsLnR5cGUgfHw9IGRhdGEudHlwZTtcblx0XHRcdFx0XHRcdFx0XHRuZXdFbC5uYW1lID0gYCR7Y3VycmVudC5uYW1lIHx8IGRhdGEubmFtZX0uJHtuZXdFbC5uYW1lfWA7XG5cdFx0XHRcdFx0XHRcdFx0c3ViZ3JvdXBSYXcuYXBwZW5kKG5ld0VsKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjb25zdCBzdWJncm91cCA9IHN1Ymdyb3VwUmF3LnJlbmRlcihjdXJJZCk7XG5cdFx0XHRcdFx0XHRcdHN1Ymdyb3VwLmNsYXNzTmFtZSA9ICdxdWlja2Zvcm1TdWJncm91cCc7XG5cdFx0XHRcdFx0XHRcdHN1Ym5vZGUuc3ViZ3JvdXAgPSBzdWJncm91cDtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5zaG93biA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRldmVudCA9IChlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGUudGFyZ2V0LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoZS50YXJnZXQuc3ViZ3JvdXApO1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGUudGFyZ2V0LnR5cGUgPT09ICdyYWRpbycpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qge25hbWV9ID0gZS50YXJnZXQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChlLnRhcmdldC5mb3JtLm5hbWVzW25hbWVdICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlLnRhcmdldC5mb3JtLm5hbWVzW25hbWVdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlLnRhcmdldC5mb3JtLm5hbWVzW25hbWVdLnN1Ymdyb3VwXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRlLnRhcmdldC5mb3JtLm5hbWVzW25hbWVdID0gZS50YXJnZXQ7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdGUudGFyZ2V0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZS50YXJnZXQuc3ViZ3JvdXApO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCwgdHJ1ZSk7XG5cdFx0XHRcdFx0XHRcdGlmIChjdXJyZW50LmNoZWNrZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRzdWJub2RlLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoc3ViZ3JvdXApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGRhdGEudHlwZSA9PT0gJ3JhZGlvJykge1xuXHRcdFx0XHRcdFx0XHRldmVudCA9IChlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHtuYW1lfSA9IGUudGFyZ2V0O1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGUudGFyZ2V0LmZvcm0ubmFtZXNbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRlLnRhcmdldC5mb3JtLm5hbWVzW25hbWVdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS50YXJnZXQuZm9ybS5uYW1lc1tuYW1lXS5zdWJncm91cFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVsZXRlIGUudGFyZ2V0LmZvcm0ubmFtZXNbbmFtZV07XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRzdWJub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50LCB0cnVlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC8vIGFkZCB1c2VycycgZXZlbnQgbGFzdCwgc28gaXQgY2FuIGludGVyYWN0IHdpdGggdGhlIHN1Ymdyb3VwXG5cdFx0XHRcdFx0XHRpZiAoZGF0YS5ldmVudCkge1xuXHRcdFx0XHRcdFx0XHRzdWJub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGRhdGEuZXZlbnQsIGZhbHNlKTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoY3VycmVudC5ldmVudCkge1xuXHRcdFx0XHRcdFx0XHRzdWJub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGN1cnJlbnQuZXZlbnQsIHRydWUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5zaGlmdENsaWNrU3VwcG9ydCAmJiBkYXRhLnR5cGUgPT09ICdjaGVja2JveCcpIHtcblx0XHRcdFx0XHRNb3JlYml0cy5jaGVja2JveFNoaWZ0Q2xpY2tTdXBwb3J0KE1vcmViaXRzLnF1aWNrRm9ybS5nZXRFbGVtZW50cyhub2RlLCBkYXRhLm5hbWUpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdC8vIGlucHV0IGlzIGFjdHVhbGx5IGEgdGV4dC10eXBlLCBzbyBudW1iZXIgaGVyZSBpbmhlcml0cyB0aGUgc2FtZSBzdHVmZlxuXHRcdFx0Y2FzZSAnbnVtYmVyJzpcblx0XHRcdGNhc2UgJ2lucHV0Jzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnaWQnLCBgZGl2XyR7aWR9YCk7XG5cdFx0XHRcdC8vIEFkZCBoaWRkZW4gYXR0clxuXHRcdFx0XHRpZiAoZGF0YS5oaWRkZW4pIHtcblx0XHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmxhYmVsKSB7XG5cdFx0XHRcdFx0bGFiZWwgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJykpO1xuXHRcdFx0XHRcdGxhYmVsLmFwcGVuZENoaWxkKE1vcmViaXRzLmNyZWF0ZUh0bWwoZGF0YS5sYWJlbCkpO1xuXHRcdFx0XHRcdGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgZGF0YS5pZCB8fCBpZCk7XG5cdFx0XHRcdFx0Ly8gTm8gbWFyZ2luXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzdWJub2RlID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKTtcblx0XHRcdFx0Ly8gQWRkIHZhbHVlIGFuZCBwbGFjZWhvbGRlciBhdHRyc1xuXHRcdFx0XHRpZiAoZGF0YS52YWx1ZSkge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGRhdGEudmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLnBsYWNlaG9sZGVyKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgZGF0YS5wbGFjZWhvbGRlcik7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBkYXRhLm5hbWUpO1xuXHRcdFx0XHRpZiAoZGF0YS50eXBlID09PSAnaW5wdXQnKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpO1xuXHRcdFx0XHRcdGZvciAoY29uc3QgYXR0IG9mIFsnbWluJywgJ21heCcsICdzdGVwJywgJ2xpc3QnXSkge1xuXHRcdFx0XHRcdFx0aWYgKGRhdGFbYXR0XSkge1xuXHRcdFx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZShhdHQsIGRhdGFbYXR0XSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGZvciAoY29uc3QgYXR0IG9mIFsndmFsdWUnLCAnc2l6ZScsICdwbGFjZWhvbGRlcicsICdtYXhsZW5ndGgnXSkge1xuXHRcdFx0XHRcdGlmIChkYXRhW2F0dF0pIHtcblx0XHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKGF0dCwgZGF0YVthdHRdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9yIChjb25zdCBhdHQgb2YgWydkaXNhYmxlZCcsICdyZXF1aXJlZCcsICdyZWFkb25seSddKSB7XG5cdFx0XHRcdFx0aWYgKGRhdGFbYXR0XSkge1xuXHRcdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoYXR0LCBhdHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5ldmVudCkge1xuXHRcdFx0XHRcdHN1Ym5vZGUuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBkYXRhLmV2ZW50LCBmYWxzZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2hpbGRDb250YWluZXIgPSBzdWJub2RlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2R5bmlucHV0Jzoge1xuXHRcdFx0XHRjb25zdCBtaW4gPSBkYXRhLm1pbiB8fCAxO1xuXHRcdFx0XHRjb25zdCBtYXggPSBkYXRhLm1heCB8fCBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0bGFiZWwgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1JykpO1xuXHRcdFx0XHRsYWJlbC5hcHBlbmRDaGlsZChNb3JlYml0cy5jcmVhdGVIdG1sKGRhdGEubGFiZWwpKTtcblx0XHRcdFx0Y29uc3QgbGlzdE5vZGUgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcblx0XHRcdFx0Y29uc3QgbW9yZSA9IHRoaXMuY29tcHV0ZSh7XG5cdFx0XHRcdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0XHRcdFx0bGFiZWw6ICfmm7TlpJonLFxuXHRcdFx0XHRcdGRpc2FibGVkOiBtaW4gPj0gbWF4LFxuXHRcdFx0XHRcdGV2ZW50OiAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgbmV3Tm9kZSA9IG5ldyBNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudChlLnRhcmdldC5zdWJsaXN0KTtcblx0XHRcdFx0XHRcdGUudGFyZ2V0LmFyZWEuYXBwZW5kQ2hpbGQobmV3Tm9kZS5yZW5kZXIoKSk7XG5cdFx0XHRcdFx0XHRpZiAoKytlLnRhcmdldC5jb3VudGVyID49IGUudGFyZ2V0Lm1heCkge1xuXHRcdFx0XHRcdFx0XHRlLnRhcmdldC5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRub2RlLmFwcGVuZENoaWxkKG1vcmVbMF0pO1xuXHRcdFx0XHRjb25zdCBbLCBtb3JlQnV0dG9uXSA9IG1vcmU7XG5cdFx0XHRcdGNvbnN0IHN1Ymxpc3QgPSB7XG5cdFx0XHRcdFx0dHlwZTogJ19keW5pbnB1dF9lbGVtZW50Jyxcblx0XHRcdFx0XHRsYWJlbDogZGF0YS5zdWJsYWJlbCB8fCBkYXRhLmxhYmVsLFxuXHRcdFx0XHRcdG5hbWU6IGRhdGEubmFtZSxcblx0XHRcdFx0XHR2YWx1ZTogZGF0YS52YWx1ZSxcblx0XHRcdFx0XHRzaXplOiBkYXRhLnNpemUsXG5cdFx0XHRcdFx0cmVtb3ZlOiBmYWxzZSxcblx0XHRcdFx0XHRtYXhsZW5ndGg6IGRhdGEubWF4bGVuZ3RoLFxuXHRcdFx0XHRcdGV2ZW50OiBkYXRhLmV2ZW50LFxuXHRcdFx0XHR9O1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbWluOyArK2kpIHtcblx0XHRcdFx0XHRjb25zdCBlbGVtID0gbmV3IE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50KHN1Ymxpc3QpO1xuXHRcdFx0XHRcdGxpc3ROb2RlLmFwcGVuZENoaWxkKGVsZW0ucmVuZGVyKCkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN1Ymxpc3QucmVtb3ZlID0gdHJ1ZTtcblx0XHRcdFx0c3VibGlzdC5tb3JlYnV0dG9uID0gbW9yZUJ1dHRvbjtcblx0XHRcdFx0c3VibGlzdC5saXN0bm9kZSA9IGxpc3ROb2RlO1xuXHRcdFx0XHRtb3JlQnV0dG9uLnN1Ymxpc3QgPSBzdWJsaXN0O1xuXHRcdFx0XHRtb3JlQnV0dG9uLmFyZWEgPSBsaXN0Tm9kZTtcblx0XHRcdFx0bW9yZUJ1dHRvbi5tYXggPSBtYXggLSBtaW47XG5cdFx0XHRcdG1vcmVCdXR0b24uY291bnRlciA9IDA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0Y2FzZSAnX2R5bmlucHV0X2VsZW1lbnQnOlxuXHRcdFx0XHQvLyBQcml2YXRlLCBzaW1pbGFyIHRvIG5vcm1hbCBpbnB1dFxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdGlmIChkYXRhLmxhYmVsKSB7XG5cdFx0XHRcdFx0bGFiZWwgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJykpO1xuXHRcdFx0XHRcdGxhYmVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGRhdGEubGFiZWwpKTtcblx0XHRcdFx0XHRsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGlkKTtcblx0XHRcdFx0XHQvLyBObyBtYXJnaW5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHN1Ym5vZGUgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpO1xuXHRcdFx0XHRpZiAoZGF0YS52YWx1ZSkge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGRhdGEudmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCduYW1lJywgZGF0YS5uYW1lKTtcblx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuXHRcdFx0XHRpZiAoZGF0YS5zaXplKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ3NpemUnLCBkYXRhLnNpemUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLm1heGxlbmd0aCkge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCBkYXRhLm1heGxlbmd0aCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEuZXZlbnQpIHtcblx0XHRcdFx0XHRzdWJub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZGF0YS5ldmVudCwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLnJlbW92ZSkge1xuXHRcdFx0XHRcdGNvbnN0IHJlbW92ZSA9IHRoaXMuY29tcHV0ZSh7XG5cdFx0XHRcdFx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHRcdFx0XHRcdGxhYmVsOiAn56e76ZmkJyxcblx0XHRcdFx0XHRcdGV2ZW50OiAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRjb25zdCBsaXN0ID0gZS50YXJnZXQubGlzdG5vZGU7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IG5vZGVfID0gZS50YXJnZXQuaW5wdXRub2RlO1xuXHRcdFx0XHRcdFx0XHRjb25zdCBtb3JlID0gZS50YXJnZXQubW9yZWJ1dHRvbjtcblx0XHRcdFx0XHRcdFx0bGlzdC5yZW1vdmVDaGlsZChub2RlXyk7XG5cdFx0XHRcdFx0XHRcdC0tbW9yZS5jb3VudGVyO1xuXHRcdFx0XHRcdFx0XHRtb3JlLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcblx0XHRcdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0bm9kZS5hcHBlbmRDaGlsZChyZW1vdmVbMF0pO1xuXHRcdFx0XHRcdGNvbnN0IFssIHJlbW92ZUJ1dHRvbl0gPSByZW1vdmU7XG5cdFx0XHRcdFx0cmVtb3ZlQnV0dG9uLmlucHV0bm9kZSA9IG5vZGU7XG5cdFx0XHRcdFx0cmVtb3ZlQnV0dG9uLmxpc3Rub2RlID0gZGF0YS5saXN0bm9kZTtcblx0XHRcdFx0XHRyZW1vdmVCdXR0b24ubW9yZWJ1dHRvbiA9IGRhdGEubW9yZWJ1dHRvbjtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2hpZGRlbic6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgndHlwZScsICdoaWRkZW4nKTtcblx0XHRcdFx0bm9kZS52YWx1ZXMgPSBkYXRhLnZhbHVlO1xuXHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkYXRhLnZhbHVlKTtcblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBkYXRhLm5hbWUpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2hlYWRlcic6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuXHRcdFx0XHRub2RlLmFwcGVuZENoaWxkKE1vcmViaXRzLmNyZWF0ZUh0bWwoZGF0YS5sYWJlbCkpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2Rpdic6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0aWYgKGRhdGEubmFtZSkge1xuXHRcdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCduYW1lJywgZGF0YS5uYW1lKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5sYWJlbCkge1xuXHRcdFx0XHRcdGNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdFx0XHRyZXN1bHQuY2xhc3NOYW1lID0gJ3F1aWNrZm9ybURlc2NyaXB0aW9uJztcblx0XHRcdFx0XHRyZXN1bHQuYXBwZW5kQ2hpbGQoTW9yZWJpdHMuY3JlYXRlSHRtbChkYXRhLmxhYmVsKSk7XG5cdFx0XHRcdFx0bm9kZS5hcHBlbmRDaGlsZChyZXN1bHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnc3VibWl0Jzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdFx0Y2hpbGRDb250YWluZXIgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpO1xuXHRcdFx0XHRjaGlsZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG5cdFx0XHRcdGlmIChkYXRhLmxhYmVsKSB7XG5cdFx0XHRcdFx0Y2hpbGRDb250YWluZXIuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGRhdGEubGFiZWwpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNoaWxkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnbmFtZScsIGRhdGEubmFtZSB8fCAnc3VibWl0Jyk7XG5cdFx0XHRcdGlmIChkYXRhLmRpc2FibGVkKSB7XG5cdFx0XHRcdFx0Y2hpbGRDb250YWluZXIuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnYnV0dG9uJzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdFx0Y2hpbGRDb250YWluZXIgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpO1xuXHRcdFx0XHRjaGlsZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG5cdFx0XHRcdGlmIChkYXRhLmxhYmVsKSB7XG5cdFx0XHRcdFx0Y2hpbGRDb250YWluZXIuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGRhdGEubGFiZWwpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNoaWxkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnbmFtZScsIGRhdGEubmFtZSk7XG5cdFx0XHRcdGlmIChkYXRhLmRpc2FibGVkKSB7XG5cdFx0XHRcdFx0Y2hpbGRDb250YWluZXIuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmV2ZW50KSB7XG5cdFx0XHRcdFx0Y2hpbGRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkYXRhLmV2ZW50LCBmYWxzZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICd0ZXh0YXJlYSc6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ2lkJywgYGRpdl8ke2lkfWApO1xuXHRcdFx0XHQvLyBBZGQgaGlkZGVuIGF0dHJcblx0XHRcdFx0aWYgKGRhdGEuaGlkZGVuKSB7XG5cdFx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5sYWJlbCkge1xuXHRcdFx0XHRcdGxhYmVsID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpKTtcblx0XHRcdFx0XHRjb25zdCBsYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXHRcdFx0XHRcdGxhYmVsRWxlbWVudC5hcHBlbmRDaGlsZChNb3JlYml0cy5jcmVhdGVIdG1sKGRhdGEubGFiZWwpKTtcblx0XHRcdFx0XHRsYWJlbEVsZW1lbnQuc2V0QXR0cmlidXRlKCdmb3InLCBkYXRhLmlkIHx8IGlkKTtcblx0XHRcdFx0XHRsYWJlbC5hcHBlbmRDaGlsZChsYWJlbEVsZW1lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN1Ym5vZGUgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJykpO1xuXHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgnbmFtZScsIGRhdGEubmFtZSk7XG5cdFx0XHRcdGlmIChkYXRhLmNvbHMpIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgnY29scycsIGRhdGEuY29scyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEucm93cykge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCdyb3dzJywgZGF0YS5yb3dzKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5kaXNhYmxlZCkge1xuXHRcdFx0XHRcdHN1Ym5vZGUuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLnJlcXVpcmVkKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJ3JlcXVpcmVkJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEucmVhZG9ubHkpIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAncmVhZG9ubHknKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS52YWx1ZSkge1xuXHRcdFx0XHRcdHN1Ym5vZGUudmFsdWUgPSBkYXRhLnZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIEFkZCBwbGFjZWhvbGRlciBhdHRyXG5cdFx0XHRcdGlmIChkYXRhLnBsYWNlaG9sZGVyKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5wbGFjZWhvbGRlciA9IGRhdGEucGxhY2Vob2xkZXI7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2hpbGRDb250YWluZXIgPSBzdWJub2RlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihgTW9yZWJpdHMucXVpY2tGb3JtOiB1bmtub3duIGVsZW1lbnQgdHlwZSAke2RhdGEudHlwZS50b1N0cmluZygpfWApO1xuXHRcdH1cblx0XHRjaGlsZENvbnRhaW5lciB8fD0gbm9kZTtcblx0XHRpZiAoZGF0YS50b29sdGlwKSB7XG5cdFx0XHRNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudC5nZW5lcmF0ZVRvb2x0aXAobGFiZWwgfHwgbm9kZSwgZGF0YSk7XG5cdFx0fVxuXHRcdGlmIChkYXRhLmV4dHJhKSB7XG5cdFx0XHRjaGlsZENvbnRhaW5lci5leHRyYSA9IGRhdGEuZXh0cmE7XG5cdFx0fVxuXHRcdGlmIChkYXRhLiRkYXRhKSB7XG5cdFx0XHQkKGNoaWxkQ29udGFpbmVyKS5kYXRhKGRhdGEuJGRhdGEpO1xuXHRcdH1cblx0XHRpZiAoZGF0YS5zdHlsZSkge1xuXHRcdFx0Y2hpbGRDb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIGRhdGEuc3R5bGUpO1xuXHRcdH1cblx0XHRpZiAoZGF0YS5jbGFzc05hbWUpIHtcblx0XHRcdGNoaWxkQ29udGFpbmVyLmNsYXNzTmFtZSA9IGNoaWxkQ29udGFpbmVyLmNsYXNzTmFtZVxuXHRcdFx0XHQ/IGAke2NoaWxkQ29udGFpbmVyLmNsYXNzTmFtZX0gJHtkYXRhLmNsYXNzTmFtZX1gXG5cdFx0XHRcdDogZGF0YS5jbGFzc05hbWU7XG5cdFx0fVxuXHRcdGNoaWxkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCBkYXRhLmlkIHx8IGlkKTtcblx0XHRyZXR1cm4gW25vZGUsIGNoaWxkQ29udGFpbmVyXTtcblx0fTtcblx0LyoqXG5cdCAqIENyZWF0ZSBhIGpRdWVyeSBVSS1iYXNlZCB0b29sdGlwLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnRcblx0ICogQHJlcXVpcmVzIGpxdWVyeS51aVxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBub2RlIC0gVGhlIEhUTUwgZWxlbWVudCBiZXNpZGUgd2hpY2ggYSB0b29sdGlwIGlzIHRvIGJlIGdlbmVyYXRlZC5cblx0ICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBUb29sdGlwLXJlbGF0ZWQgY29uZmlndXJhdGlvbiBkYXRhLlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQuZ2VuZXJhdGVUb29sdGlwID0gKG5vZGUsIGRhdGEpID0+IHtcblx0XHRjb25zdCB0b29sdGlwQnV0dG9uID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpO1xuXHRcdHRvb2x0aXBCdXR0b24uY2xhc3NOYW1lID0gJ21vcmViaXRzLXRvb2x0aXBCdXR0b24nO1xuXHRcdHRvb2x0aXBCdXR0b24udGl0bGUgPSBkYXRhLnRvb2x0aXA7IC8vIFByb3ZpZGVzIHRoZSBjb250ZW50IGZvciBqUXVlcnkgVUlcblx0XHR0b29sdGlwQnV0dG9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCc/JykpO1xuXHRcdCQodG9vbHRpcEJ1dHRvbikudG9vbHRpcCh7XG5cdFx0XHRwb3NpdGlvbjoge1xuXHRcdFx0XHRteTogJ2xlZnQgdG9wJyxcblx0XHRcdFx0YXQ6ICdjZW50ZXIgYm90dG9tJyxcblx0XHRcdFx0Y29sbGlzaW9uOiAnZmxpcGZpdCcsXG5cdFx0XHR9LFxuXHRcdFx0Ly8gRGVwcmVjYXRlZCBpbiBVSSAxLjEyLCBidXQgTVcgc3R1Y2sgb24gMS45LjIgaW5kZWZpbml0ZWx5OyBzZWUgIzM5OCBhbmQgVDcxMzg2XG5cdFx0XHR0b29sdGlwQ2xhc3M6ICdtb3JlYml0cy11aS10b29sdGlwJyxcblx0XHR9KTtcblx0fTtcblx0Ly8gU29tZSB1dGlsaXR5IG1ldGhvZHMgZm9yIG1hbmlwdWxhdGluZyBxdWlja0Zvcm1zIGFmdGVyIHRoZWlyIGNyZWF0aW9uOlxuXHQvLyAoTm9uZSBvZiB0aGVzZSB3b3JrIGZvciBcImR5bmlucHV0XCIgdHlwZSBmaWVsZHMgYXQgcHJlc2VudClcblx0LyoqXG5cdCAqIFJldHVybnMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIGZpbGxlZCBmb3JtIGRhdGEgZW50ZXJlZCBieSB0aGUgdXNlciwgd2l0aCB0aGUgb2JqZWN0XG5cdCAqIGtleXMgYmVpbmcgdGhlIGZvcm0gZWxlbWVudCBuYW1lcy4gRGlzYWJsZWQgZmllbGRzIHdpbGwgYmUgaWdub3JlZCwgYnV0IG5vdCBoaWRkZW4gZmllbGRzLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7SFRNTEZvcm1FbGVtZW50fSBmb3JtXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9IFdpdGggZmllbGQgbmFtZXMgYXMga2V5cywgaW5wdXQgZGF0YSBhcyB2YWx1ZXMuXG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uZ2V0SW5wdXREYXRhID0gKGZvcm0pID0+IHtcblx0XHRjb25zdCByZXN1bHQgPSB7fTtcblx0XHRmb3IgKGNvbnN0IGZpZWxkIG9mIGZvcm0uZWxlbWVudHMpIHtcblx0XHRcdGlmIChmaWVsZC5kaXNhYmxlZCB8fCAhZmllbGQubmFtZSB8fCAhZmllbGQudHlwZSB8fCBmaWVsZC50eXBlID09PSAnc3VibWl0JyB8fCBmaWVsZC50eXBlID09PSAnYnV0dG9uJykge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdC8vIEZvciBlbGVtZW50cyBpbiBzdWJncm91cHMsIHF1aWNrZm9ybSBwcmVwZW5kcyBlbGVtZW50IG5hbWVzIHdpdGhcblx0XHRcdC8vIG5hbWUgb2YgdGhlIHBhcmVudCBncm91cCBmb2xsb3dlZCBieSBhIHBlcmlvZCwgZ2V0IHJpZCBvZiB0aGF0LlxuXHRcdFx0Y29uc3QgZmllbGROYW1lTm9ybSA9IGZpZWxkLm5hbWUuc2xpY2UoZmllbGQubmFtZS5pbmRleE9mKCcuJykgKyAxKTtcblx0XHRcdHN3aXRjaCAoZmllbGQudHlwZSkge1xuXHRcdFx0XHRjYXNlICdyYWRpbyc6XG5cdFx0XHRcdFx0aWYgKGZpZWxkLmNoZWNrZWQpIHtcblx0XHRcdFx0XHRcdHJlc3VsdFtmaWVsZE5hbWVOb3JtXSA9IGZpZWxkLnZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnY2hlY2tib3gnOlxuXHRcdFx0XHRcdGlmIChmaWVsZC5kYXRhc2V0LnNpbmdsZSkge1xuXHRcdFx0XHRcdFx0cmVzdWx0W2ZpZWxkTmFtZU5vcm1dID0gZmllbGQuY2hlY2tlZDsgLy8gYm9vbGVhblxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXN1bHRbZmllbGROYW1lTm9ybV0gfHw9IFtdO1xuXHRcdFx0XHRcdFx0aWYgKGZpZWxkLmNoZWNrZWQpIHtcblx0XHRcdFx0XHRcdFx0cmVzdWx0W2ZpZWxkTmFtZU5vcm1dW3Jlc3VsdFtmaWVsZE5hbWVOb3JtXS5sZW5ndGhdID0gZmllbGQudmFsdWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdzZWxlY3QtbXVsdGlwbGUnOlxuXHRcdFx0XHRcdHJlc3VsdFtmaWVsZE5hbWVOb3JtXSA9ICQoZmllbGQpLnZhbCgpOyAvLyBmaWVsZC52YWx1ZSBkb2Vzbid0IHdvcmtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAndGV4dCc6IC8vIGZhbGxzIHRocm91Z2hcblx0XHRcdFx0Y2FzZSAndGV4dGFyZWEnOlxuXHRcdFx0XHRcdHJlc3VsdFtmaWVsZE5hbWVOb3JtXSA9IGZpZWxkLnZhbHVlLnRyaW0oKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHQvLyBjb3VsZCBiZSBzZWxlY3Qtb25lLCBkYXRlLCBudW1iZXIsIGVtYWlsLCBldGNcblx0XHRcdFx0XHRpZiAoZmllbGQudmFsdWUpIHtcblx0XHRcdFx0XHRcdHJlc3VsdFtmaWVsZE5hbWVOb3JtXSA9IGZpZWxkLnZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblx0LyoqXG5cdCAqIFJldHVybnMgYWxsIGZvcm0gZWxlbWVudHMgd2l0aCBhIGdpdmVuIGZpZWxkIG5hbWUgb3IgSUQuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQHBhcmFtIHtIVE1MRm9ybUVsZW1lbnR9IGZvcm1cblx0ICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkTmFtZSAtIFRoZSBuYW1lIG9yIGlkIG9mIHRoZSBmaWVsZHMuXG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudFtdfSAtIEFycmF5IG9mIG1hdGNoaW5nIGZvcm0gZWxlbWVudHMuXG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uZ2V0RWxlbWVudHMgPSAoZm9ybSwgZmllbGROYW1lKSA9PiB7XG5cdFx0Y29uc3QgJGZvcm0gPSAkKGZvcm0pO1xuXHRcdGZpZWxkTmFtZSA9ICQuZXNjYXBlU2VsZWN0b3IoZmllbGROYW1lKTsgLy8gc2FuaXRpemUgaW5wdXRcblx0XHRsZXQgJGVsZW1lbnRzID0gJGZvcm0uZmluZChgW25hbWU9XCIke2ZpZWxkTmFtZX1cIl1gKTtcblx0XHRpZiAoJGVsZW1lbnRzLmxlbmd0aCA+IDApIHtcblx0XHRcdHJldHVybiAkZWxlbWVudHMudG9BcnJheSgpO1xuXHRcdH1cblx0XHQkZWxlbWVudHMgPSAkZm9ybS5maW5kKGAjJHtmaWVsZE5hbWV9YCk7XG5cdFx0cmV0dXJuICRlbGVtZW50cy50b0FycmF5KCk7XG5cdH07XG5cdC8qKlxuXHQgKiBTZWFyY2hlcyB0aGUgYXJyYXkgb2YgZWxlbWVudHMgZm9yIGEgY2hlY2tib3ggb3IgcmFkaW8gYnV0dG9uIHdpdGggYSBjZXJ0YWluXG5cdCAqIGB2YWx1ZWAgYXR0cmlidXRlLCBhbmQgcmV0dXJucyB0aGUgZmlyc3Qgc3VjaCBlbGVtZW50LiBSZXR1cm5zIG51bGwgaWYgbm90IGZvdW5kLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudFtdfSBlbGVtZW50QXJyYXkgLSBBcnJheSBvZiBjaGVja2JveCBvciByYWRpbyBlbGVtZW50cy5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gVmFsdWUgdG8gc2VhcmNoIGZvci5cblx0ICogQHJldHVybnMge0hUTUxJbnB1dEVsZW1lbnR9XG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uZ2V0Q2hlY2tib3hPclJhZGlvID0gKGVsZW1lbnRBcnJheSwgdmFsdWUpID0+IHtcblx0XHRjb25zdCBmb3VuZCA9IGVsZW1lbnRBcnJheS5maWx0ZXIoKGVsZW1lbnQpID0+IHtcblx0XHRcdHJldHVybiBlbGVtZW50LnZhbHVlID09PSB2YWx1ZTtcblx0XHR9KTtcblx0XHRpZiAoZm91bmQubGVuZ3RoID4gMCkge1xuXHRcdFx0cmV0dXJuIGZvdW5kWzBdO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fTtcblx0LyoqXG5cdCAqIFJldHVybnMgdGhlICZsdDtkaXY+IGNvbnRhaW5pbmcgdGhlIGZvcm0gZWxlbWVudCwgb3IgdGhlIGZvcm0gZWxlbWVudCBpdHNlbGZcblx0ICogTWF5IG5vdCB3b3JrIGFzIGV4cGVjdGVkIG9uIGNoZWNrYm94ZXMgb3IgcmFkaW9zLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcblx0ICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmdldEVsZW1lbnRDb250YWluZXIgPSAoZWxlbWVudCkgPT4ge1xuXHRcdC8vIGZvciBkaXZzLCBoZWFkaW5ncyBhbmQgZmllbGRzZXRzLCB0aGUgY29udGFpbmVyIGlzIHRoZSBlbGVtZW50IGl0c2VsZlxuXHRcdGlmIChcblx0XHRcdGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRmllbGRTZXRFbGVtZW50IHx8XG5cdFx0XHRlbGVtZW50IGluc3RhbmNlb2YgSFRNTERpdkVsZW1lbnQgfHxcblx0XHRcdGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSGVhZGluZ0VsZW1lbnRcblx0XHQpIHtcblx0XHRcdHJldHVybiBlbGVtZW50O1xuXHRcdH1cblx0XHQvLyBmb3Igb3RoZXJzLCBqdXN0IHJldHVybiB0aGUgcGFyZW50IG5vZGVcblx0XHRyZXR1cm4gZWxlbWVudC5wYXJlbnROb2RlO1xuXHR9O1xuXHQvKipcblx0ICogR2V0cyB0aGUgSFRNTCBlbGVtZW50IHRoYXQgY29udGFpbnMgdGhlIGxhYmVsIG9mIHRoZSBnaXZlbiBmb3JtIGVsZW1lbnRcblx0ICogKG1haW5seSBmb3IgaW50ZXJuYWwgdXNlKS5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0geyhIVE1MRWxlbWVudHxNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCl9IGVsZW1lbnRcblx0ICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmdldEVsZW1lbnRMYWJlbE9iamVjdCA9IChlbGVtZW50KSA9PiB7XG5cdFx0Ly8gZm9yIGJ1dHRvbnMsIGRpdnMgYW5kIGhlYWRlcnMsIHRoZSBsYWJlbCBpcyBvbiB0aGUgZWxlbWVudCBpdHNlbGZcblx0XHRpZiAoXG5cdFx0XHRlbGVtZW50LnR5cGUgPT09ICdidXR0b24nIHx8XG5cdFx0XHRlbGVtZW50LnR5cGUgPT09ICdzdWJtaXQnIHx8XG5cdFx0XHRlbGVtZW50IGluc3RhbmNlb2YgSFRNTERpdkVsZW1lbnQgfHxcblx0XHRcdGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSGVhZGluZ0VsZW1lbnRcblx0XHQpIHtcblx0XHRcdHJldHVybiBlbGVtZW50O1xuXHRcdFx0Ly8gZm9yIGZpZWxkc2V0cywgdGhlIGxhYmVsIGlzIHRoZSBjaGlsZCA8bGVnZW5kPiBlbGVtZW50XG5cdFx0fSBlbHNlIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEZpZWxkU2V0RWxlbWVudCkge1xuXHRcdFx0cmV0dXJuIGVsZW1lbnQucXVlcnlTZWxlY3RvcignbGVnZW5kJyk7XG5cdFx0XHQvLyBmb3IgdGV4dGFyZWFzLCB0aGUgbGFiZWwgaXMgdGhlIHNpYmxpbmcgPGg1PiBlbGVtZW50XG5cdFx0fSBlbHNlIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCkge1xuXHRcdFx0cmV0dXJuIGVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCdoNScpO1xuXHRcdH1cblx0XHQvLyBmb3Igb3RoZXJzLCB0aGUgbGFiZWwgaXMgdGhlIHNpYmxpbmcgPGxhYmVsPiBlbGVtZW50XG5cdFx0cmV0dXJuIGVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCdsYWJlbCcpO1xuXHR9O1xuXHQvKipcblx0ICogR2V0cyB0aGUgbGFiZWwgdGV4dCBvZiB0aGUgZWxlbWVudC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0geyhIVE1MRWxlbWVudHxNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCl9IGVsZW1lbnRcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5nZXRFbGVtZW50TGFiZWwgPSAoZWxlbWVudCkgPT4ge1xuXHRcdGNvbnN0IGxhYmVsRWxlbWVudCA9IE1vcmViaXRzLnF1aWNrRm9ybS5nZXRFbGVtZW50TGFiZWxPYmplY3QoZWxlbWVudCk7XG5cdFx0aWYgKCFsYWJlbEVsZW1lbnQpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRyZXR1cm4gbGFiZWxFbGVtZW50LmZpcnN0Q2hpbGQudGV4dENvbnRlbnQ7XG5cdH07XG5cdC8qKlxuXHQgKiBTZXRzIHRoZSBsYWJlbCBvZiB0aGUgZWxlbWVudCB0byB0aGUgZ2l2ZW4gdGV4dC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0geyhIVE1MRWxlbWVudHxNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCl9IGVsZW1lbnRcblx0ICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsVGV4dFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBzdWNjZWVkZWQsIGZhbHNlIGlmIHRoZSBsYWJlbCBlbGVtZW50IGlzIHVuYXZhaWxhYmxlLlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLnNldEVsZW1lbnRMYWJlbCA9IChlbGVtZW50LCBsYWJlbFRleHQpID0+IHtcblx0XHRjb25zdCBsYWJlbEVsZW1lbnQgPSBNb3JlYml0cy5xdWlja0Zvcm0uZ2V0RWxlbWVudExhYmVsT2JqZWN0KGVsZW1lbnQpO1xuXHRcdGlmICghbGFiZWxFbGVtZW50KSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGxhYmVsRWxlbWVudC5maXJzdENoaWxkLnRleHRDb250ZW50ID0gbGFiZWxUZXh0O1xuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xuXHQvKipcblx0ICogU3RvcmVzIHRoZSBlbGVtZW50J3MgY3VycmVudCBsYWJlbCwgYW5kIHRlbXBvcmFyaWx5IHNldHMgdGhlIGxhYmVsIHRvIHRoZSBnaXZlbiB0ZXh0LlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7KEhUTUxFbGVtZW50fE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50KX0gZWxlbWVudFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGVtcG9yYXJ5TGFiZWxUZXh0XG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBgdHJ1ZWAgaWYgc3VjY2VlZGVkLCBgZmFsc2VgIGlmIHRoZSBsYWJlbCBlbGVtZW50IGlzIHVuYXZhaWxhYmxlLlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLm92ZXJyaWRlRWxlbWVudExhYmVsID0gKGVsZW1lbnQsIHRlbXBvcmFyeUxhYmVsVGV4dCkgPT4ge1xuXHRcdGlmICghZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtb2xkbGFiZWwnKSkge1xuXHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtb2xkbGFiZWwnLCBNb3JlYml0cy5xdWlja0Zvcm0uZ2V0RWxlbWVudExhYmVsKGVsZW1lbnQpKTtcblx0XHR9XG5cdFx0cmV0dXJuIE1vcmViaXRzLnF1aWNrRm9ybS5zZXRFbGVtZW50TGFiZWwoZWxlbWVudCwgdGVtcG9yYXJ5TGFiZWxUZXh0KTtcblx0fTtcblx0LyoqXG5cdCAqIFJlc3RvcmVzIHRoZSBsYWJlbCBzdG9yZWQgYnkgb3ZlcnJpZGVFbGVtZW50TGFiZWwuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQHBhcmFtIHsoSFRNTEVsZW1lbnR8TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQpfSBlbGVtZW50XG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHN1Y2NlZWRlZCwgZmFsc2UgaWYgdGhlIGxhYmVsIGVsZW1lbnQgaXMgdW5hdmFpbGFibGUuXG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0ucmVzZXRFbGVtZW50TGFiZWwgPSAoZWxlbWVudCkgPT4ge1xuXHRcdGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1vbGRsYWJlbCcpKSB7XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMucXVpY2tGb3JtLnNldEVsZW1lbnRMYWJlbChlbGVtZW50LCBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vbGRsYWJlbCcpKTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH07XG5cdC8qKlxuXHQgKiBTaG93cyBvciBoaWRlcyBhIGZvcm0gZWxlbWVudCBwbHVzIGl0cyBsYWJlbCBhbmQgdG9vbHRpcC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0geyhIVE1MRWxlbWVudHxqUXVlcnl8c3RyaW5nKX0gZWxlbWVudCAtIEhUTUwvalF1ZXJ5IGVsZW1lbnQsIG9yIGpRdWVyeSBzZWxlY3RvciBzdHJpbmcuXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Zpc2liaWxpdHldIC0gU2tpcCB0aGlzIHRvIHRvZ2dsZSB2aXNpYmlsaXR5LlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLnNldEVsZW1lbnRWaXNpYmlsaXR5ID0gKGVsZW1lbnQsIHZpc2liaWxpdHkpID0+IHtcblx0XHQkKGVsZW1lbnQpLnRvZ2dsZSh2aXNpYmlsaXR5KTtcblx0fTtcblx0LyoqXG5cdCAqIFNob3dzIG9yIGhpZGVzIHRoZSBxdWVzdGlvbiBtYXJrIGljb24gKHdoaWNoIGRpc3BsYXlzIHRoZSB0b29sdGlwKSBuZXh0IHRvIGEgZm9ybSBlbGVtZW50LlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7KEhUTUxFbGVtZW50fGpRdWVyeSl9IGVsZW1lbnRcblx0ICogQHBhcmFtIHtib29sZWFufSBbdmlzaWJpbGl0eV0gLSBTa2lwIHRoaXMgdG8gdG9nZ2xlIHZpc2liaWxpdHkuXG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uc2V0RWxlbWVudFRvb2x0aXBWaXNpYmlsaXR5ID0gKGVsZW1lbnQsIHZpc2liaWxpdHkpID0+IHtcblx0XHQkKE1vcmViaXRzLnF1aWNrRm9ybS5nZXRFbGVtZW50Q29udGFpbmVyKGVsZW1lbnQpKS5maW5kKCcubW9yZWJpdHMtdG9vbHRpcEJ1dHRvbicpLnRvZ2dsZSh2aXNpYmlsaXR5KTtcblx0fTtcblx0LyoqXG5cdCAqIEBleHRlcm5hbCBIVE1MRm9ybUVsZW1lbnRcblx0ICovXG5cdC8qKlxuXHQgKiBHZXQgY2hlY2tlZCBpdGVtcyBpbiB0aGUgZm9ybS5cblx0ICpcblx0ICogQGZ1bmN0aW9uIGV4dGVybmFsOkhUTUxGb3JtRWxlbWVudC5nZXRDaGVja2VkXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gRmluZCBjaGVja2VkIHByb3BlcnR5IG9mIGVsZW1lbnRzIChpLmUuIGEgY2hlY2tib3hcblx0ICogb3IgYSByYWRpb2J1dHRvbikgd2l0aCB0aGUgZ2l2ZW4gbmFtZSwgb3Igc2VsZWN0IG9wdGlvbnMgdGhhdCBoYXZlIHNlbGVjdGVkXG5cdCAqIHNldCB0byB0cnVlIChkb24ndCB0cnkgdG8gbWl4IHNlbGVjdHMgd2l0aCByYWRpby9jaGVja2JveGVzKS5cblx0ICogQHBhcmFtIHtzdHJpbmd9IFt0eXBlXSAtIE9wdGlvbmFsbHkgc3BlY2lmeSBlaXRoZXIgcmFkaW8gb3IgY2hlY2tib3ggKGZvclxuXHQgKiB0aGUgZXZlbnQgdGhhdCBib3RoIGNoZWNrYm94ZXMgYW5kIHJhZGlvYnV0dG9ucyBoYXZlIHRoZSBzYW1lIG5hbWUpLlxuXHQgKiBAcmV0dXJucyB7c3RyaW5nW119IC0gQ29udGFpbnMgdGhlIHZhbHVlcyBvZiBlbGVtZW50cyB3aXRoIHRoZSBnaXZlbiBuYW1lXG5cdCAqIGNoZWNrZWQgcHJvcGVydHkgc2V0IHRvIHRydWUuXG5cdCAqL1xuXHRIVE1MRm9ybUVsZW1lbnQucHJvdG90eXBlLmdldENoZWNrZWQgPSBmdW5jdGlvbiAobmFtZSwgdHlwZSkge1xuXHRcdGNvbnN0IGVsZW1lbnRzID0gdGhpcy5lbGVtZW50c1tuYW1lXTtcblx0XHRpZiAoIWVsZW1lbnRzKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXHRcdGNvbnN0IHJldHVybkFycmF5ID0gW107XG5cdFx0bGV0IGk7XG5cdFx0aWYgKGVsZW1lbnRzIGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpIHtcblx0XHRcdGNvbnN0IHtvcHRpb25zfSA9IGVsZW1lbnRzO1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0aWYgKG9wdGlvbnNbaV0uc2VsZWN0ZWQpIHtcblx0XHRcdFx0XHRpZiAob3B0aW9uc1tpXS52YWx1ZXMpIHtcblx0XHRcdFx0XHRcdHJldHVybkFycmF5W3JldHVybkFycmF5Lmxlbmd0aF0gPSBvcHRpb25zW2ldLnZhbHVlcztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuQXJyYXlbcmV0dXJuQXJyYXkubGVuZ3RoXSA9IG9wdGlvbnNbaV0udmFsdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChlbGVtZW50cyBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcblx0XHRcdGlmICh0eXBlICYmIGVsZW1lbnRzLnR5cGUgIT09IHR5cGUpIHtcblx0XHRcdFx0cmV0dXJuIFtdO1xuXHRcdFx0fSBlbHNlIGlmIChlbGVtZW50cy5jaGVja2VkKSB7XG5cdFx0XHRcdHJldHVybiBbZWxlbWVudHMudmFsdWVdO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0aWYgKGVsZW1lbnRzW2ldLmNoZWNrZWQpIHtcblx0XHRcdFx0XHRpZiAodHlwZSAmJiBlbGVtZW50c1tpXS50eXBlICE9PSB0eXBlKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGVsZW1lbnRzW2ldLnZhbHVlcykge1xuXHRcdFx0XHRcdFx0cmV0dXJuQXJyYXlbcmV0dXJuQXJyYXkubGVuZ3RoXSA9IGVsZW1lbnRzW2ldLnZhbHVlcztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuQXJyYXlbcmV0dXJuQXJyYXkubGVuZ3RoXSA9IGVsZW1lbnRzW2ldLnZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmV0dXJuQXJyYXk7XG5cdH07XG5cdC8qKlxuXHQgKiBEb2VzIHRoZSBzYW1lIGFzIHtAbGluayBIVE1MRm9ybUVsZW1lbnQuZ2V0Q2hlY2tlZHxnZXRDaGVja2VkfSwgYnV0IHdpdGggdW5jaGVja2VkIGVsZW1lbnRzLlxuXHQgKlxuXHQgKiBAZnVuY3Rpb24gZXh0ZXJuYWw6SFRNTEZvcm1FbGVtZW50LmdldFVuY2hlY2tlZFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIEZpbmQgY2hlY2tlZCBwcm9wZXJ0eSBvZiBlbGVtZW50cyAoaS5lLiBhIGNoZWNrYm94XG5cdCAqIG9yIGEgcmFkaW9idXR0b24pIHdpdGggdGhlIGdpdmVuIG5hbWUsIG9yIHNlbGVjdCBvcHRpb25zIHRoYXQgaGF2ZSBzZWxlY3RlZFxuXHQgKiBzZXQgdG8gdHJ1ZSAoZG9uJ3QgdHJ5IHRvIG1peCBzZWxlY3RzIHdpdGggcmFkaW8vY2hlY2tib3hlcykuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbdHlwZV0gLSBPcHRpb25hbGx5IHNwZWNpZnkgZWl0aGVyIHJhZGlvIG9yIGNoZWNrYm94IChmb3Jcblx0ICogdGhlIGV2ZW50IHRoYXQgYm90aCBjaGVja2JveGVzIGFuZCByYWRpb2J1dHRvbnMgaGF2ZSB0aGUgc2FtZSBuYW1lKS5cblx0ICogQHJldHVybnMge3N0cmluZ1tdfSAtIENvbnRhaW5zIHRoZSB2YWx1ZXMgb2YgZWxlbWVudHMgd2l0aCB0aGUgZ2l2ZW4gbmFtZVxuXHQgKiBjaGVja2VkIHByb3BlcnR5IHNldCB0byB0cnVlLlxuXHQgKi9cblx0SFRNTEZvcm1FbGVtZW50LnByb3RvdHlwZS5nZXRVbmNoZWNrZWQgPSBmdW5jdGlvbiAobmFtZSwgdHlwZSkge1xuXHRcdGNvbnN0IGVsZW1lbnRzID0gdGhpcy5lbGVtZW50c1tuYW1lXTtcblx0XHRpZiAoIWVsZW1lbnRzKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXHRcdGNvbnN0IHJldHVybkFycmF5ID0gW107XG5cdFx0bGV0IGk7XG5cdFx0aWYgKGVsZW1lbnRzIGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpIHtcblx0XHRcdGNvbnN0IHtvcHRpb25zfSA9IGVsZW1lbnRzO1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0aWYgKCFvcHRpb25zW2ldLnNlbGVjdGVkKSB7XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnNbaV0udmFsdWVzKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm5BcnJheVtyZXR1cm5BcnJheS5sZW5ndGhdID0gb3B0aW9uc1tpXS52YWx1ZXM7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybkFycmF5W3JldHVybkFycmF5Lmxlbmd0aF0gPSBvcHRpb25zW2ldLnZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoZWxlbWVudHMgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG5cdFx0XHRpZiAodHlwZSAmJiBlbGVtZW50cy50eXBlICE9PSB0eXBlKSB7XG5cdFx0XHRcdHJldHVybiBbXTtcblx0XHRcdH0gZWxzZSBpZiAoIWVsZW1lbnRzLmNoZWNrZWQpIHtcblx0XHRcdFx0cmV0dXJuIFtlbGVtZW50cy52YWx1ZV07XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRpZiAoIWVsZW1lbnRzW2ldLmNoZWNrZWQpIHtcblx0XHRcdFx0XHRpZiAodHlwZSAmJiBlbGVtZW50c1tpXS50eXBlICE9PSB0eXBlKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGVsZW1lbnRzW2ldLnZhbHVlcykge1xuXHRcdFx0XHRcdFx0cmV0dXJuQXJyYXlbcmV0dXJuQXJyYXkubGVuZ3RoXSA9IGVsZW1lbnRzW2ldLnZhbHVlcztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuQXJyYXlbcmV0dXJuQXJyYXkubGVuZ3RoXSA9IGVsZW1lbnRzW2ldLnZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmV0dXJuQXJyYXk7XG5cdH07XG5cdC8qKlxuXHQgKiBVdGlsaXRpZXMgdG8gaGVscCBwcm9jZXNzIElQIGFkZHJlc3Nlcy5cblx0ICpcblx0ICogQG5hbWVzcGFjZSBNb3JlYml0cy5pcFxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICovXG5cdE1vcmViaXRzLmlwID0ge1xuXHRcdC8qKlxuXHRcdCAqIENvbnZlcnRzIGFuIElQdjYgYWRkcmVzcyB0byB0aGUgY2Fub25pY2FsIGZvcm0gc3RvcmVkIGFuZCB1c2VkIGJ5IE1lZGlhV2lraS5cblx0XHQgKiBKYXZhU2NyaXB0IHRyYW5zbGF0aW9uIG9mIHRoZSB7QGxpbmsgaHR0cHM6Ly9nZXJyaXQud2lraW1lZGlhLm9yZy9yL3BsdWdpbnMvZ2l0aWxlcy9tZWRpYXdpa2kvY29yZS8rLzhlYjZhYzNlODRlYTMzMTJkMzkxY2E5NmMxMmM0OWUzYWQwNzUzYmIvaW5jbHVkZXMvdXRpbHMvSVAucGhwIzEzMXxgSVA6OnNhbml0aXplSVAoKWB9XG5cdFx0ICogZnVuY3Rpb24gZnJvbSB0aGUgSVBVdGlscyBsaWJyYXJ5LiAgQWRkcmVzc2VzIGFyZSB2ZXJib3NlLCB1cHBlcmNhc2UsXG5cdFx0ICogbm9ybWFsaXplZCwgYW5kIGV4cGFuZGVkIHRvIDggd29yZHMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gYWRkcmVzcyAtIFRoZSBJUHY2IGFkZHJlc3MsIHdpdGggb3Igd2l0aG91dCBDSURSLlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0c2FuaXRpemVJUHY2OiAoYWRkcmVzcykgPT4ge1xuXHRcdFx0YWRkcmVzcyA9IGFkZHJlc3MudHJpbSgpO1xuXHRcdFx0aWYgKGFkZHJlc3MgPT09ICcnKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFtdy51dGlsLmlzSVB2NkFkZHJlc3MoYWRkcmVzcywgdHJ1ZSkpIHtcblx0XHRcdFx0cmV0dXJuIGFkZHJlc3M7IC8vIG5vdGhpbmcgZWxzZSB0byBkbyBmb3IgSVB2NCBhZGRyZXNzZXMgb3IgaW52YWxpZCBvbmVzXG5cdFx0XHR9XG5cdFx0XHQvLyBSZW1vdmUgYW55IHdoaXRlc3BhY2VzLCBjb252ZXJ0IHRvIHVwcGVyIGNhc2Vcblx0XHRcdGFkZHJlc3MgPSBhZGRyZXNzLnRvVXBwZXJDYXNlKCk7XG5cdFx0XHQvLyBFeHBhbmQgemVybyBhYmJyZXZpYXRpb25zXG5cdFx0XHRjb25zdCBhYmJyZXZQb3MgPSBhZGRyZXNzLmluZGV4T2YoJzo6Jyk7XG5cdFx0XHRpZiAoYWJicmV2UG9zICE9PSAtMSkge1xuXHRcdFx0XHQvLyBXZSBrbm93IHRoaXMgaXMgdmFsaWQgSVB2Ni4gRmluZCB0aGUgbGFzdCBpbmRleCBvZiB0aGVcblx0XHRcdFx0Ly8gYWRkcmVzcyBiZWZvcmUgYW55IENJRFIgbnVtYmVyIChlLmcuIFwiYTpiOmM6Oi8yNFwiKS5cblx0XHRcdFx0Y29uc3QgQ0lEUlN0YXJ0ID0gYWRkcmVzcy5pbmRleE9mKCcvJyk7XG5cdFx0XHRcdGNvbnN0IGFkZHJlc3NFbmQgPSBDSURSU3RhcnQgPT09IC0xID8gYWRkcmVzcy5sZW5ndGggLSAxIDogQ0lEUlN0YXJ0IC0gMTtcblx0XHRcdFx0Ly8gSWYgdGhlICc6OicgaXMgYXQgdGhlIGJlZ2lubmluZy4uLlxuXHRcdFx0XHRsZXQgcmVwZWF0O1xuXHRcdFx0XHRsZXQgZXh0cmE7XG5cdFx0XHRcdGxldCBwYWQ7XG5cdFx0XHRcdGlmIChhYmJyZXZQb3MgPT09IDApIHtcblx0XHRcdFx0XHRyZXBlYXQgPSAnMDonO1xuXHRcdFx0XHRcdGV4dHJhID0gYWRkcmVzcyA9PT0gJzo6JyA/ICcwJyA6ICcnOyAvLyBmb3IgdGhlIGFkZHJlc3MgJzo6J1xuXHRcdFx0XHRcdHBhZCA9IDk7IC8vIDcrMiAoZHVlIHRvICc6OicpXG5cdFx0XHRcdFx0Ly8gSWYgdGhlICc6OicgaXMgYXQgdGhlIGVuZC4uLlxuXHRcdFx0XHR9IGVsc2UgaWYgKGFiYnJldlBvcyA9PT0gYWRkcmVzc0VuZCAtIDEpIHtcblx0XHRcdFx0XHRyZXBlYXQgPSAnOjAnO1xuXHRcdFx0XHRcdGV4dHJhID0gJyc7XG5cdFx0XHRcdFx0cGFkID0gOTsgLy8gNysyIChkdWUgdG8gJzo6Jylcblx0XHRcdFx0XHQvLyBJZiB0aGUgJzo6JyBpcyBpbiB0aGUgbWlkZGxlLi4uXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVwZWF0ID0gJzowJztcblx0XHRcdFx0XHRleHRyYSA9ICc6Jztcblx0XHRcdFx0XHRwYWQgPSA4OyAvLyA2KzIgKGR1ZSB0byAnOjonKVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0bGV0IHJlcGxhY2VtZW50ID0gcmVwZWF0O1xuXHRcdFx0XHRwYWQgLT0gYWRkcmVzcy5zcGxpdCgnOicpLmxlbmd0aCAtIDE7XG5cdFx0XHRcdGZvciAobGV0IGkgPSAxOyBpIDwgcGFkOyBpKyspIHtcblx0XHRcdFx0XHRyZXBsYWNlbWVudCArPSByZXBlYXQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmVwbGFjZW1lbnQgKz0gZXh0cmE7XG5cdFx0XHRcdGFkZHJlc3MgPSBhZGRyZXNzLnJlcGxhY2UoJzo6JywgcmVwbGFjZW1lbnQpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gUmVtb3ZlIGxlYWRpbmcgemVyb3MgZnJvbSBlYWNoIGJsb2MgYXMgbmVlZGVkXG5cdFx0XHRyZXR1cm4gYWRkcmVzcy5yZXBsYWNlKC8oXnw6KTArKFswLTlBLUZhLWZdezEsNH0pL2csICckMSQyJyk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBEZXRlcm1pbmUgaWYgdGhlIGdpdmVuIElQIGFkZHJlc3MgaXMgYSByYW5nZS4gIEp1c3QgY29uam9pbnNcblx0XHQgKiBgbXcudXRpbC5pc0lQQWRkcmVzc2Agd2l0aCBhbmQgd2l0aG91dCB0aGUgYGFsbG93QmxvY2tgIG9wdGlvbi5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBpcFxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufSAtIFRydWUgaWYgZ2l2ZW4gYSB2YWxpZCBJUCBhZGRyZXNzIHJhbmdlLCBmYWxzZSBvdGhlcndpc2UuXG5cdFx0ICovXG5cdFx0aXNSYW5nZTogKGlwKSA9PiB7XG5cdFx0XHRyZXR1cm4gbXcudXRpbC5pc0lQQWRkcmVzcyhpcCwgdHJ1ZSkgJiYgIW13LnV0aWwuaXNJUEFkZHJlc3MoaXApO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQ2hlY2sgdGhhdCBhbiBJUCByYW5nZSBpcyB3aXRoaW4gdGhlIENJRFIgbGltaXRzLiAgTW9zdCBsaWtlbHkgdG8gYmUgdXNlZnVsXG5cdFx0ICogaW4gY29uanVuY3Rpb24gd2l0aCBgd2dSZWxldmFudFVzZXJOYW1lYC4gIENJRFIgbGltaXRzIGFyZSBoYXJkY29kZWQgYXMgLzE2XG5cdFx0ICogZm9yIElQdjQgYW5kIC8zMiBmb3IgSVB2Ni5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBpcFxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufSAtIFRydWUgZm9yIHZhbGlkIHJhbmdlcyB3aXRoaW4gdGhlIENJRFIgbGltaXRzLFxuXHRcdCAqIG90aGVyd2lzZSBmYWxzZSAocmFuZ2VzIG91dHNpZGUgdGhlIGxpbWl0LCBzaW5nbGUgSVBzLCBub24tSVBzKS5cblx0XHQgKi9cblx0XHR2YWxpZENJRFI6IChpcCkgPT4ge1xuXHRcdFx0aWYgKE1vcmViaXRzLmlwLmlzUmFuZ2UoaXApKSB7XG5cdFx0XHRcdGNvbnN0IHN1Ym5ldCA9IE51bWJlci5wYXJzZUludChpcC5tYXRjaCgvXFwvKFxcZHsxLDN9KSQvKVsxXSwgMTApO1xuXHRcdFx0XHRpZiAoc3VibmV0KSB7XG5cdFx0XHRcdFx0Ly8gU2hvdWxkIGJlIHJlZHVuZGFudFxuXHRcdFx0XHRcdGlmIChtdy51dGlsLmlzSVB2NkFkZHJlc3MoaXAsIHRydWUpKSB7XG5cdFx0XHRcdFx0XHRpZiAoc3VibmV0ID49IDMyKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoc3VibmV0ID49IDE2KSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEdldCB0aGUgLzY0IHN1Ym5ldCBmb3IgYW4gSVB2NiBhZGRyZXNzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGlwdjYgLSBUaGUgSVB2NiBhZGRyZXNzLCB3aXRoIG9yIHdpdGhvdXQgYSBzdWJuZXQuXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW58c3RyaW5nfSAtIEZhbHNlIGlmIG5vdCBJUHY2IG9yIGJpZ2dlciB0aGFuIGEgNjQsXG5cdFx0ICogb3RoZXJ3aXNlIHRoZSAoc2FuaXRpemVkKSAvNjQgYWRkcmVzcy5cblx0XHQgKi9cblx0XHRnZXQ2NDogKGlwdjYpID0+IHtcblx0XHRcdGlmICghaXB2NiB8fCAhbXcudXRpbC5pc0lQdjZBZGRyZXNzKGlwdjYsIHRydWUpKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHN1Ym5ldE1hdGNoID0gaXB2Ni5tYXRjaCgvXFwvKFxcZHsxLDN9KSQvKTtcblx0XHRcdGlmIChzdWJuZXRNYXRjaCAmJiBOdW1iZXIucGFyc2VJbnQoc3VibmV0TWF0Y2hbMV0sIDEwKSA8IDY0KSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlwdjYgPSBNb3JlYml0cy5pcC5zYW5pdGl6ZUlQdjYoaXB2Nik7XG5cdFx0XHRjb25zdCBpcFJlZ2V4ID0gL14oKD86WzAtOUEtRl17MSw0fTopezR9KSg/OlswLTlBLUZdezEsNH06KXszfVswLTlBLUZdezEsNH0oPzpcXC9cXGR7MSwzfSk/JC87XG5cdFx0XHRyZXR1cm4gaXB2Ni5yZXBsYWNlKGlwUmVnZXgsICckMScuY29uY2F0KCcwOjA6MDowLzY0JykpO1xuXHRcdH0sXG5cdH07XG5cdC8qKlxuXHQgKiBIZWxwZXIgZnVuY3Rpb25zIHRvIG1hbmlwdWxhdGUgc3RyaW5ncy5cblx0ICpcblx0ICogQG5hbWVzcGFjZSBNb3JlYml0cy5zdHJpbmdcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzXG5cdCAqL1xuXHRNb3JlYml0cy5zdHJpbmcgPSB7XG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHN0clxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dG9VcHBlckNhc2VGaXJzdENoYXI6IChzdHIpID0+IHtcblx0XHRcdHN0ciA9IHN0ci50b1N0cmluZygpO1xuXHRcdFx0cmV0dXJuIHN0ci5zbGljZSgwLCAxKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHN0clxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dG9Mb3dlckNhc2VGaXJzdENoYXI6IChzdHIpID0+IHtcblx0XHRcdHN0ciA9IHN0ci50b1N0cmluZygpO1xuXHRcdFx0cmV0dXJuIHN0ci5zbGljZSgwLCAxKS50b0xvd2VyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogR2l2ZXMgYW4gYXJyYXkgb2Ygc3Vic3RyaW5ncyBvZiBgc3RyYCAtIHN0YXJ0aW5nIHdpdGggYHN0YXJ0YCBhbmRcblx0XHQgKiBlbmRpbmcgd2l0aCBgZW5kYCAtIHdoaWNoIGlzIG5vdCBpbiBgc2tpcGxpc3RgLiAgSW50ZW5kZWQgZm9yIHVzZVxuXHRcdCAqIG9uIHdpa2l0ZXh0IHdpdGggdGVtcGxhdGVzIG9yIGxpbmtzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHN0clxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdGFydFxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBlbmRcblx0XHQgKiBAcGFyYW0geyhzdHJpbmdbXXxzdHJpbmcpfSBbc2tpcGxpc3RdXG5cdFx0ICogQHJldHVybnMge3N0cmluZ1tdfVxuXHRcdCAqIEB0aHJvd3MgSWYgdGhlIGBzdGFydGAgYW5kIGBlbmRgIHN0cmluZ3MgYXJlbid0IG9mIHRoZSBzYW1lIGxlbmd0aC5cblx0XHQgKiBAdGhyb3dzIElmIGBza2lwbGlzdGAgaXNuJ3QgYW4gYXJyYXkgb3Igc3RyaW5nXG5cdFx0ICovXG5cdFx0c3BsaXRXZWlnaHRlZEJ5S2V5czogKHN0ciwgc3RhcnQsIGVuZCwgc2tpcGxpc3QpID0+IHtcblx0XHRcdGlmIChzdGFydC5sZW5ndGggIT09IGVuZC5sZW5ndGgpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdzdGFydCBtYXJrZXIgYW5kIGVuZCBtYXJrZXIgbXVzdCBiZSBvZiB0aGUgc2FtZSBsZW5ndGgnKTtcblx0XHRcdH1cblx0XHRcdGxldCBsZXZlbCA9IDA7XG5cdFx0XHRsZXQgaW5pdGlhbCA9IG51bGw7XG5cdFx0XHRjb25zdCByZXN1bHQgPSBbXTtcblx0XHRcdGlmICghQXJyYXkuaXNBcnJheShza2lwbGlzdCkpIHtcblx0XHRcdFx0aWYgKHNraXBsaXN0ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRza2lwbGlzdCA9IFtdO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBza2lwbGlzdCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRza2lwbGlzdCA9IFtza2lwbGlzdF07XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignbm9uLWFwcGxpY2FibGUgc2tpcGxpc3QgcGFyYW1ldGVyJyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBza2lwbGlzdCkge1xuXHRcdFx0XHRcdGlmIChzdHIuc2xpY2UoaSwgaSArIGVsZW1lbnQubGVuZ3RoKSA9PT0gZWxlbWVudCkge1xuXHRcdFx0XHRcdFx0aSArPSBlbGVtZW50Lmxlbmd0aCAtIDE7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHN0ci5zbGljZShpLCBpICsgc3RhcnQubGVuZ3RoKSA9PT0gc3RhcnQpIHtcblx0XHRcdFx0XHRpZiAoaW5pdGlhbCA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0aW5pdGlhbCA9IGk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCsrbGV2ZWw7XG5cdFx0XHRcdFx0aSArPSBzdGFydC5sZW5ndGggLSAxO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHN0ci5zbGljZShpLCBpICsgZW5kLmxlbmd0aCkgPT09IGVuZCkge1xuXHRcdFx0XHRcdC0tbGV2ZWw7XG5cdFx0XHRcdFx0aSArPSBlbmQubGVuZ3RoIC0gMTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWxldmVsICYmIGluaXRpYWwgIT09IG51bGwpIHtcblx0XHRcdFx0XHRyZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBzdHIuc2xpY2UoaW5pdGlhbCwgaSArIDEpO1xuXHRcdFx0XHRcdGluaXRpYWwgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogRm9ybWF0cyBmcmVlZm9ybSBcInJlYXNvblwiIChmcm9tIGEgdGV4dGFyZWEpIGZvciBkZWxldGlvbi9vdGhlclxuXHRcdCAqIHRlbXBsYXRlcyB0aGF0IGFyZSBnb2luZyB0byBiZSBzdWJzdGl0dXRlZCwgKGUuZy4gUFJPRCwgWEZELCBSUFApLlxuXHRcdCAqIEhhbmRsZXMgYHxgIG91dHNpZGUgYSBub3dpa2kgdGFnLlxuXHRcdCAqIE9wdGlvbmFsbHksIGFsc28gYWRkcyBhIHNpZ25hdHVyZSBpZiBub3QgcHJlc2VudCBhbHJlYWR5LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHN0clxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2FkZFNpZ11cblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdGZvcm1hdFJlYXNvblRleHQ6IChzdHIsIGFkZFNpZykgPT4ge1xuXHRcdFx0bGV0IHJlYXNvbiA9IChzdHIgfHwgJycpLnRvU3RyaW5nKCkudHJpbSgpO1xuXHRcdFx0Y29uc3QgdW5iaW5kZXIgPSBuZXcgTW9yZWJpdHMudW5iaW5kZXIocmVhc29uKTtcblx0XHRcdHVuYmluZGVyLnVuYmluZCgnPG5vJy5jb25jYXQoJ3dpa2knLCAnPicpLCAnPC9ubycuY29uY2F0KCd3aWtpJywgJz4nKSk7XG5cdFx0XHR1bmJpbmRlci5jb250ZW50ID0gdW5iaW5kZXIuY29udGVudC5yZXBsYWNlKC9cXHwvZywgJ3t7Jy5jb25jYXQoJ3N1YnN0OicsICchfX0nKSk7XG5cdFx0XHRyZWFzb24gPSB1bmJpbmRlci5yZWJpbmQoKTtcblx0XHRcdGlmIChhZGRTaWcpIHtcblx0XHRcdFx0Y29uc3Qgc2lnID0gJ35+Jy5jb25jYXQoJ35+Jyk7XG5cdFx0XHRcdGNvbnN0IHNpZ0luZGV4ID0gcmVhc29uLmxhc3RJbmRleE9mKHNpZyk7XG5cdFx0XHRcdGlmIChzaWdJbmRleCA9PT0gLTEgfHwgc2lnSW5kZXggIT09IHJlYXNvbi5sZW5ndGggLSBzaWcubGVuZ3RoKSB7XG5cdFx0XHRcdFx0cmVhc29uICs9IGAgJHtzaWd9YDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlYXNvbi50cmltKCk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBGb3JtYXRzIGEgXCJyZWFzb25cIiAoZnJvbSBhIHRleHRhcmVhKSBmb3IgaW5jbHVzaW9uIGluIGEgdXNlcnNwYWNlXG5cdFx0ICogbG9nLiAgUmVwbGFjZXMgbmV3bGluZXMgd2l0aCB7e1BifX0sIGFuZCBhZGRzIGFuIGV4dHJhIGAjYCBiZWZvcmVcblx0XHQgKiBsaXN0IGl0ZW1zIGZvciBwcm9wZXIgZm9ybWF0dGluZy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdGZvcm1hdFJlYXNvbkZvckxvZzogKHN0cikgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0c3RyXG5cdFx0XHRcdFx0Ly8gaGFuZGxlIGxpbmUgYnJlYWtzLCB3aGljaCBvdGhlcndpc2UgYnJlYWsgbnVtYmVyaW5nXG5cdFx0XHRcdFx0LnJlcGxhY2UoL1xcbisvZywgJ3t7cGJ9fScpXG5cdFx0XHRcdFx0Ly8gcHV0IGFuIGV4dHJhICMgaW4gZnJvbnQgYmVmb3JlIGJ1bGxldGVkIG9yIG51bWJlcmVkIGxpc3QgaXRlbXNcblx0XHRcdFx0XHQucmVwbGFjZSgvXigjKykvZ20sICcjJDEnKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC9eKFxcKispL2dtLCAnIyQxJylcblx0XHRcdCk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBMaWtlIGBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2UoKWAsIGJ1dCBlc2NhcGVzIGFueSBkb2xsYXIgc2lnbnMgaW5cblx0XHQgKiB0aGUgcmVwbGFjZW1lbnQgc3RyaW5nLiAgVXNlZnVsIHdoZW4gdGhlIHRoZSByZXBsYWNlbWVudCBzdHJpbmcgaXNcblx0XHQgKiBhcmJpdHJhcnksIHN1Y2ggYXMgYSB1c2VybmFtZSBvciBmcmVlZm9ybSB1c2VyIGlucHV0LCBhbmQgY291bGRcblx0XHQgKiBjb250YWluIGRvbGxhciBzaWducy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgLSBUZXh0IGluIHdoaWNoIHRvIHJlcGxhY2UuXG5cdFx0ICogQHBhcmFtIHsoc3RyaW5nfFJlZ0V4cCl9IHBhdHRlcm5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gcmVwbGFjZW1lbnRcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHNhZmVSZXBsYWNlOiAoc3RyaW5nLCBwYXR0ZXJuLCByZXBsYWNlbWVudCkgPT4ge1xuXHRcdFx0cmV0dXJuIHN0cmluZy5yZXBsYWNlKHBhdHRlcm4sIHJlcGxhY2VtZW50LnJlcGxhY2UoL1xcJC9nLCAnJCQkJCcpKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIERldGVybWluZSBpZiB0aGUgdXNlci1wcm92aWRlZCBleHBpcmF0aW9uIHdpbGwgYmUgY29uc2lkZXJlZCBhblxuXHRcdCAqIGluZmluaXRlLWxlbmd0aCBieSBNVy5cblx0XHQgKlxuXHRcdCAqIEBzZWUge0BsaW5rIGh0dHBzOi8vcGhhYnJpY2F0b3Iud2lraW1lZGlhLm9yZy9UNjg2NDZ9XG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gZXhwaXJ5XG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0aXNJbmZpbml0eTogKGV4cGlyeSkgPT4ge1xuXHRcdFx0cmV0dXJuIFsnaW5kZWZpbml0ZScsICdpbmZpbml0eScsICdpbmZpbml0ZScsICduZXZlciddLmluY2x1ZGVzKGV4cGlyeSk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBFc2NhcGVzIGEgc3RyaW5nIHRvIGJlIHVzZWQgaW4gYSBSZWdFeHAsIHJlcGxhY2luZyBzcGFjZXMgYW5kXG5cdFx0ICogdW5kZXJzY29yZXMgd2l0aCBgW18gXWAgYXMgdGhleSBhcmUgb2Z0ZW4gZXF1aXZhbGVudC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gU3RyaW5nIHRvIGJlIGVzY2FwZWQuXG5cdFx0ICogQHJldHVybnMge3N0cmluZ30gLSBUaGUgZXNjYXBlZCB0ZXh0LlxuXHRcdCAqL1xuXHRcdGVzY2FwZVJlZ0V4cDogKHRleHQpID0+IHtcblx0XHRcdHJldHVybiBtdy51dGlsLmVzY2FwZVJlZ0V4cCh0ZXh0KS5yZXBsYWNlKC8gfF8vZywgJ1tfIF0nKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIGZvcm1hdFRpbWVcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7Kn0gdGltZSBUaGUgc3RyaW5nIHRvIGZvcmFtdFxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0Zm9ybWF0VGltZTogKHRpbWUpID0+IHtcblx0XHRcdGxldCBtO1xuXHRcdFx0aWYgKChtID0gdGltZS5tYXRjaCgvXlxccyooXFxkKylcXHMqc2VjKG9uZCk/cz9cXHMqJC8pKSAhPT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gYCR7bVsxXX3np5JgO1xuXHRcdFx0fVxuXHRcdFx0aWYgKChtID0gdGltZS5tYXRjaCgvXlxccyooXFxkKylcXHMqbWluKHV0ZSk/cz9cXHMqJC8pKSAhPT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gYCR7bVsxXX3liIZgO1xuXHRcdFx0fVxuXHRcdFx0aWYgKChtID0gdGltZS5tYXRjaCgvXlxccyooXFxkKylcXHMqaG91cnM/XFxzKiQvKSkgIT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIG1bMV0gKyB3aW5kb3cud2dVTFMoJ+Wwj+aXticsICflsI/mmYInKTtcblx0XHRcdH1cblx0XHRcdGlmICgobSA9IHRpbWUubWF0Y2goL15cXHMqKFxcZCspXFxzKmRheXM/XFxzKiQvKSkgIT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIGAke21bMV195aSpYDtcblx0XHRcdH1cblx0XHRcdGlmICgobSA9IHRpbWUubWF0Y2goL15cXHMqKFxcZCspXFxzKndlZWtzP1xccyokLykpICE9PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiBtWzFdICsgd2luZG93LndnVUxTKCflkagnLCAn6YCxJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoKG0gPSB0aW1lLm1hdGNoKC9eXFxzKihcXGQrKVxccyptb250aHM/XFxzKiQvKSkgIT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIG1bMV0gKyB3aW5kb3cud2dVTFMoJ+S4quaciCcsICflgIvmnIgnKTtcblx0XHRcdH1cblx0XHRcdGlmICgobSA9IHRpbWUubWF0Y2goL15cXHMqKFxcZCspXFxzKnllYXJzP1xccyokLykpICE9PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiBgJHttWzFdfeW5tGA7XG5cdFx0XHR9XG5cdFx0XHRpZiAoTW9yZWJpdHMuc3RyaW5nLmlzSW5maW5pdHkodGltZS50cmltKCkpKSB7XG5cdFx0XHRcdHJldHVybiB3aW5kb3cud2dVTFMoJ+aXoOmZkOacnycsICfnhKHpmZDmnJ8nKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aW1lO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQXBwZW5kIHB1bmN0dWF0aW9uIHRvIGEgc3RyaW5nIHdoZW4gaXQncyBtaXNzaW5nXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHB1bmN0dWF0aW9uXG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHRhcHBlbmRQdW5jdHVhdGlvbjogKHN0ciwgcHVuY3R1YXRpb24pID0+IHtcblx0XHRcdGlmIChwdW5jdHVhdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHB1bmN0dWF0aW9uID0gJ+OAgic7XG5cdFx0XHR9XG5cdFx0XHRpZiAoc3RyLnNlYXJjaCgvWy4/ITvjgILvvJ/vvIHvvJtdJC8pID09PSAtMSkge1xuXHRcdFx0XHRzdHIgKz0gcHVuY3R1YXRpb247XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gc3RyO1xuXHRcdH0sXG5cdH07XG5cdC8qKlxuXHQgKiBIZWxwZXIgZnVuY3Rpb25zIHRvIG1hbmlwdWxhdGUgYXJyYXlzLlxuXHQgKlxuXHQgKiBAbmFtZXNwYWNlIE1vcmViaXRzLmFycmF5XG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0c1xuXHQgKi9cblx0TW9yZWJpdHMuYXJyYXkgPSB7XG5cdFx0LyoqXG5cdFx0ICogUmVtb3ZlIGR1cGxpY2F0ZWQgaXRlbXMgZnJvbSBhbiBhcnJheS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7QXJyYXl9IGFyclxuXHRcdCAqIEByZXR1cm5zIHtBcnJheX0gQSBjb3B5IG9mIHRoZSBhcnJheSB3aXRoIGR1cGxpY2F0ZXMgcmVtb3ZlZC5cblx0XHQgKiBAdGhyb3dzIFdoZW4gcHJvdmlkZWQgYSBub24tYXJyYXkuXG5cdFx0ICovXG5cdFx0dW5pcTogKGFycikgPT4ge1xuXHRcdFx0aWYgKCFBcnJheS5pc0FycmF5KGFycikpIHtcblx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQSBub24tYXJyYXkgb2JqZWN0IHBhc3NlZCB0byBNb3JlYml0cy5hcnJheS51bmlxJyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gYXJyLmZpbHRlcigoaXRlbSwgaWR4KSA9PiB7XG5cdFx0XHRcdHJldHVybiBhcnIuaW5kZXhPZihpdGVtKSA9PT0gaWR4O1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBSZW1vdmUgbm9uLWR1cGxpY2F0ZWQgaXRlbXMgZnJvbSBhbiBhcnJheS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7QXJyYXl9IGFyclxuXHRcdCAqIEByZXR1cm5zIHtBcnJheX0gQSBjb3B5IG9mIHRoZSBhcnJheSB3aXRoIHRoZSBmaXJzdCBpbnN0YW5jZSBvZiBlYWNoIHZhbHVlXG5cdFx0ICogcmVtb3ZlZDsgc3Vic2VxdWVudCBpbnN0YW5jZXMgb2YgdGhvc2UgdmFsdWVzIChkdXBsaWNhdGVzKSByZW1haW4uXG5cdFx0ICogQHRocm93cyBXaGVuIHByb3ZpZGVkIGEgbm9uLWFycmF5LlxuXHRcdCAqL1xuXHRcdGR1cHM6IChhcnIpID0+IHtcblx0XHRcdGlmICghQXJyYXkuaXNBcnJheShhcnIpKSB7XG5cdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Egbm9uLWFycmF5IG9iamVjdCBwYXNzZWQgdG8gTW9yZWJpdHMuYXJyYXkuZHVwcycpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGFyci5maWx0ZXIoKGl0ZW0sIGlkeCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gYXJyLmluZGV4T2YoaXRlbSkgIT09IGlkeDtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQnJlYWsgdXAgYW4gYXJyYXkgaW50byBzbWFsbGVyIGFycmF5cy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7QXJyYXl9IGFyclxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBzaXplIC0gU2l6ZSBvZiBlYWNoIGNodW5rIChleGNlcHQgdGhlIGxhc3QsIHdoaWNoIGNvdWxkIGJlIGRpZmZlcmVudCkuXG5cdFx0ICogQHJldHVybnMge0FycmF5W119IEFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIHNtYWxsZXIsIGNodW5rZWQgYXJyYXlzLlxuXHRcdCAqIEB0aHJvd3MgV2hlbiBwcm92aWRlZCBhIG5vbi1hcnJheS5cblx0XHQgKi9cblx0XHRjaHVuazogKGFyciwgc2l6ZSkgPT4ge1xuXHRcdFx0aWYgKCFBcnJheS5pc0FycmF5KGFycikpIHtcblx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQSBub24tYXJyYXkgb2JqZWN0IHBhc3NlZCB0byBNb3JlYml0cy5hcnJheS5jaHVuaycpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJyB8fCBzaXplIDw9IDApIHtcblx0XHRcdFx0Ly8gcHJldHR5IGltcG9zc2libGUgdG8gZG8gYW55dGhpbmcgOilcblx0XHRcdFx0cmV0dXJuIFthcnJdOyAvLyB3ZSByZXR1cm4gYW4gYXJyYXkgY29uc2lzdGluZyBvZiB0aGlzIGFycmF5LlxuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBudW1DaHVua3MgPSBNYXRoLmNlaWwoYXJyLmxlbmd0aCAvIHNpemUpO1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gQXJyYXkuZnJvbSh7XG5cdFx0XHRcdGxlbmd0aDogbnVtQ2h1bmtzLFxuXHRcdFx0fSk7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG51bUNodW5rczsgaSsrKSB7XG5cdFx0XHRcdHJlc3VsdFtpXSA9IGFyci5zbGljZShpICogc2l6ZSwgKGkgKyAxKSAqIHNpemUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9LFxuXHR9O1xuXHQvKipcblx0ICogVXRpbGl0aWVzIHRvIGVuaGFuY2Ugc2VsZWN0MiBtZW51cy4gU2VlIHR3aW5rbGV3YXJuLCB0d2lua2xlYmxvY2tcblx0ICogZm9yIHNhbXBsZSB1c2FnZXMuXG5cdCAqXG5cdCAqIEBzZWUge0BsaW5rIGh0dHBzOi8vc2VsZWN0Mi5vcmcvfVxuXHQgKlxuXHQgKiBAbmFtZXNwYWNlIE1vcmViaXRzLnNlbGVjdDJcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzXG5cdCAqIEByZXF1aXJlcyBqcXVlcnkuc2VsZWN0MlxuXHQgKi9cblx0TW9yZWJpdHMuc2VsZWN0MiA9IHtcblx0XHRtYXRjaGVyczoge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBDdXN0b20gbWF0Y2hlciBpbiB3aGljaCBpZiB0aGUgb3B0Z3JvdXAgbmFtZSBtYXRjaGVzLCBhbGwgb3B0aW9ucyBpbiB0aGF0XG5cdFx0XHQgKiBncm91cCBhcmUgc2hvd24sIGxpa2UgaW4ganF1ZXJ5LmNob3Nlbi5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0geyp9IHBhcmFtc1xuXHRcdFx0ICogQHBhcmFtIHsqfSBkYXRhXG5cdFx0XHQgKi9cblx0XHRcdG9wdGdyb3VwRnVsbDogKHBhcmFtcywgZGF0YSkgPT4ge1xuXHRcdFx0XHRjb25zdCBvcmlnaW5hbE1hdGNoZXIgPSAkLmZuLnNlbGVjdDIuZGVmYXVsdHMuZGVmYXVsdHMubWF0Y2hlcjtcblx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gb3JpZ2luYWxNYXRjaGVyKHBhcmFtcywgZGF0YSk7XG5cdFx0XHRcdGlmIChyZXN1bHQgJiYgcGFyYW1zLnRlcm0gJiYgZGF0YS50ZXh0LnRvVXBwZXJDYXNlKCkuaW5jbHVkZXMocGFyYW1zLnRlcm0udG9VcHBlckNhc2UoKSkpIHtcblx0XHRcdFx0XHRyZXN1bHQuY2hpbGRyZW4gPSBkYXRhLmNoaWxkcmVuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9LFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBDdXN0b20gbWF0Y2hlciB0aGF0IG1hdGNoZXMgZnJvbSB0aGUgYmVnaW5uaW5nIG9mIHdvcmRzIG9ubHkuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtIHsqfSBwYXJhbXNcblx0XHRcdCAqIEBwYXJhbSB7Kn0gZGF0YVxuXHRcdFx0ICovXG5cdFx0XHR3b3JkQmVnaW5uaW5nOiAocGFyYW1zLCBkYXRhKSA9PiB7XG5cdFx0XHRcdGNvbnN0IG9yaWdpbmFsTWF0Y2hlciA9ICQuZm4uc2VsZWN0Mi5kZWZhdWx0cy5kZWZhdWx0cy5tYXRjaGVyO1xuXHRcdFx0XHRjb25zdCByZXN1bHQgPSBvcmlnaW5hbE1hdGNoZXIocGFyYW1zLCBkYXRhKTtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdCFwYXJhbXMudGVybSB8fFxuXHRcdFx0XHRcdChyZXN1bHQgJiYgbmV3IFJlZ0V4cChgXFxcXGIke213LnV0aWwuZXNjYXBlUmVnRXhwKHBhcmFtcy50ZXJtKX1gLCAnaScpLnRlc3QocmVzdWx0LnRleHQpKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fSxcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFVuZGVybGluZSBtYXRjaGVkIHBhcnQgb2Ygb3B0aW9ucy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7Kn0gZGF0YVxuXHRcdCAqL1xuXHRcdGhpZ2hsaWdodFNlYXJjaE1hdGNoZXM6IChkYXRhKSA9PiB7XG5cdFx0XHRjb25zdCBzZWFyY2hUZXJtID0gTW9yZWJpdHMuc2VsZWN0MlNlYXJjaFF1ZXJ5O1xuXHRcdFx0aWYgKCFzZWFyY2hUZXJtIHx8IGRhdGEubG9hZGluZykge1xuXHRcdFx0XHRyZXR1cm4gZGF0YS50ZXh0O1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgaWR4ID0gZGF0YS50ZXh0LnRvVXBwZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hUZXJtLnRvVXBwZXJDYXNlKCkpO1xuXHRcdFx0aWYgKGlkeCA9PT0gLTEpIHtcblx0XHRcdFx0cmV0dXJuIGRhdGEudGV4dDtcblx0XHRcdH1cblx0XHRcdHJldHVybiAkKCc8c3Bhbj4nKS5hcHBlbmQoXG5cdFx0XHRcdGRhdGEudGV4dC5zbGljZSgwLCBpZHgpLFxuXHRcdFx0XHQkKCc8c3Bhbj4nKVxuXHRcdFx0XHRcdC5jc3MoJ3RleHQtZGVjb3JhdGlvbicsICd1bmRlcmxpbmUnKVxuXHRcdFx0XHRcdC50ZXh0KGRhdGEudGV4dC5zbGljZShpZHgsIGlkeCArIHNlYXJjaFRlcm0ubGVuZ3RoKSksXG5cdFx0XHRcdGRhdGEudGV4dC5zbGljZShpZHggKyBzZWFyY2hUZXJtLmxlbmd0aClcblx0XHRcdCk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBJbnRlcmNlcHQgcXVlcnkgYXMgaXQgaXMgaGFwcGVuaW5nLCBmb3IgdXNlIGluIGhpZ2hsaWdodFNlYXJjaE1hdGNoZXMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0geyp9IHBhcmFtc1xuXHRcdCAqL1xuXHRcdHF1ZXJ5SW50ZXJjZXB0b3I6IChwYXJhbXMpID0+IHtcblx0XHRcdE1vcmViaXRzLnNlbGVjdDJTZWFyY2hRdWVyeSA9IHBhcmFtcyAmJiBwYXJhbXMudGVybTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIE9wZW4gZHJvcGRvd24gYW5kIGJlZ2luIHNlYXJjaCB3aGVuIHRoZSBgLnNlbGVjdDItc2VsZWN0aW9uYCBoYXNcblx0XHQgKiBmb2N1cyBhbmQgYSBrZXkgaXMgcHJlc3NlZC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZcblx0XHQgKiBAc2VlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vc2VsZWN0Mi9zZWxlY3QyL2lzc3Vlcy8zMjc5I2lzc3VlY29tbWVudC00NDI1MjQxNDd9XG5cdFx0ICovXG5cdFx0YXV0b1N0YXJ0OiAoZXYpID0+IHtcblx0XHRcdGlmIChldi53aGljaCA8IDQ4KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGxldCB0YXJnZXQgPSAkKGV2LnRhcmdldCkuY2xvc2VzdCgnLnNlbGVjdDItY29udGFpbmVyJyk7XG5cdFx0XHRpZiAoIXRhcmdldC5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGFyZ2V0ID0gdGFyZ2V0LnByZXYoKTtcblx0XHRcdHRhcmdldC5zZWxlY3QyKCdvcGVuJyk7XG5cdFx0XHRjb25zdCBzZWFyY2ggPSB0YXJnZXQuZGF0YSgnc2VsZWN0MicpLmRyb3Bkb3duLiRzZWFyY2ggfHwgdGFyZ2V0LmRhdGEoJ3NlbGVjdDInKS5zZWxlY3Rpb24uJHNlYXJjaDtcblx0XHRcdC8vIFVzZSBET00gLmZvY3VzKCkgdG8gd29yayBhcm91bmQgYSBqUXVlcnkgMy42LjAgcmVncmVzc2lvbiAoaHR0cHM6Ly9naXRodWIuY29tL3NlbGVjdDIvc2VsZWN0Mi9pc3N1ZXMvNTk5Mylcblx0XHRcdHNlYXJjaFswXS5mb2N1cygpO1xuXHRcdH0sXG5cdH07XG5cdC8qKlxuXHQgKiBUZW1wb3JhcmlseSBoaWRlIGEgcGFydCBvZiBhIHN0cmluZyB3aGlsZSBwcm9jZXNzaW5nIHRoZSByZXN0IG9mIGl0LlxuXHQgKiBVc2VkIGJ5IHtAbGluayBNb3JlYml0cy53aWtpdGV4dC5wYWdlI2NvbW1lbnRPdXRJbWFnZXxNb3JlYml0cy53aWtpdGV4dC5wYWdlLmNvbW1lbnRPdXRJbWFnZX0uXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0c1xuXHQgKiBAY2xhc3Ncblx0ICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyAtIFRoZSBpbml0aWFsIHRleHQgdG8gcHJvY2Vzcy5cblx0ICogQGV4YW1wbGUgY29uc3QgdSA9IG5ldyBNb3JlYml0cy51bmJpbmRlcignSGVsbG8gd29ybGQgPCEtLSB3b3JsZCAtLT4gd29ybGQnKTtcblx0ICogdS51bmJpbmQoJzwhLS0nLCAnLS0+Jyk7IC8vIHRleHQgaW5zaWRlIGNvbW1lbnQgcmVtYWlucyBpbnRhY3Rcblx0ICogdS5jb250ZW50ID0gdS5jb250ZW50LnJlcGxhY2UoL3dvcmxkL2csICdlYXJ0aCcpO1xuXHQgKiB1LnJlYmluZCgpOyAvLyBnaXZlcyAnSGVsbG8gZWFydGggPCEtLSB3b3JsZCAtLT4gZWFydGgnXG5cdCAqL1xuXHRNb3JlYml0cy51bmJpbmRlciA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcblx0XHRpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ25vdCBhIHN0cmluZycpO1xuXHRcdH1cblx0XHQvKiogVGhlIHRleHQgYmVpbmcgcHJvY2Vzc2VkLiAqL1xuXHRcdHRoaXMuY29udGVudCA9IHN0cmluZztcblx0XHR0aGlzLmNvdW50ZXIgPSAwO1xuXHRcdHRoaXMuaGlzdG9yeSA9IHt9O1xuXHRcdHRoaXMucHJlZml4ID0gYCVVTklROjoke01hdGgucmFuZG9tKCl9OjpgO1xuXHRcdHRoaXMucG9zdGZpeCA9ICc6OlVOSVElJztcblx0fTtcblx0TW9yZWJpdHMudW5iaW5kZXIucHJvdG90eXBlID0ge1xuXHRcdC8qKlxuXHRcdCAqIEhpZGUgdGhlIHJlZ2lvbiBlbmNhcHN1bGF0ZWQgYnkgdGhlIGBwcmVmaXhgIGFuZCBgcG9zdGZpeGAgZnJvbVxuXHRcdCAqIHN0cmluZyBwcm9jZXNzaW5nLiAgYHByZWZpeGAgYW5kIGBwb3N0Zml4YCB3aWxsIGJlIHVzZWQgaW4gYVxuXHRcdCAqIFJlZ0V4cCwgc28gaXRlbXMgdGhhdCBuZWVkIGVzY2FwaW5nIHNob3VsZCBiZSB1c2UgYFxcXFxgLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHByZWZpeFxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBwb3N0Zml4XG5cdFx0ICogQHRocm93cyBJZiBlaXRoZXIgYHByZWZpeGAgb3IgYHBvc3RmaXhgIGlzIG1pc3NpbmcuXG5cdFx0ICovXG5cdFx0dW5iaW5kKHByZWZpeCwgcG9zdGZpeCkge1xuXHRcdFx0aWYgKCFwcmVmaXggfHwgIXBvc3RmaXgpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdCb3RoIHByZWZpeCBhbmQgcG9zdGZpeCBtdXN0IGJlIHByb3ZpZGVkJyk7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCByZSA9IG5ldyBSZWdFeHAoYCR7cHJlZml4fShbXFxcXHNcXFxcU10qPykke3Bvc3RmaXh9YCwgJ2cnKTtcblx0XHRcdHRoaXMuY29udGVudCA9IHRoaXMuY29udGVudC5yZXBsYWNlKHJlLCBNb3JlYml0cy51bmJpbmRlci5nZXRDYWxsYmFjayh0aGlzKSk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBSZXN0b3JlIHRoZSBoaWRkZW4gcG9ydGlvbiBvZiB0aGUgYGNvbnRlbnRgIHN0cmluZy5cblx0XHQgKlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBwcm9jZXNzZWQgb3V0cHV0LlxuXHRcdCAqL1xuXHRcdHJlYmluZCgpIHtcblx0XHRcdGxldCB7Y29udGVudH0gPSB0aGlzO1xuXHRcdFx0Zm9yIChjb25zdCBjdXJyZW50IGluIHRoaXMuaGlzdG9yeSkge1xuXHRcdFx0XHRpZiAoIU9iamVjdC5oYXNPd24odGhpcy5oaXN0b3J5LCBjdXJyZW50KSkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UoY3VycmVudCwgdGhpcy5oaXN0b3J5W2N1cnJlbnRdKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdH0sXG5cdFx0cHJlZml4OiBudWxsLFxuXHRcdC8vICVVTklROjowLjU5NTU5ODE2NDQ5MzgzMjQ6OlxuXHRcdHBvc3RmaXg6IG51bGwsXG5cdFx0Ly8gOjpVTklRJVxuXHRcdGNvbnRlbnQ6IG51bGwsXG5cdFx0Ly8gc3RyaW5nXG5cdFx0Y291bnRlcjogbnVsbCxcblx0XHQvLyAwKytcblx0XHRoaXN0b3J5OiBudWxsLCAvLyB7fVxuXHR9O1xuXHQvKipcblx0ICogQHBhcmFtIHt0eXBlb2YgTW9yZWJpdHN9IHNlbGZcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnVuYmluZGVyXG5cdCAqL1xuXHRNb3JlYml0cy51bmJpbmRlci5nZXRDYWxsYmFjayA9IChzZWxmKSA9PiB7XG5cdFx0cmV0dXJuIChtYXRjaCkgPT4ge1xuXHRcdFx0Y29uc3QgY3VycmVudCA9IHNlbGYucHJlZml4ICsgc2VsZi5jb3VudGVyICsgc2VsZi5wb3N0Zml4O1xuXHRcdFx0c2VsZi5oaXN0b3J5W2N1cnJlbnRdID0gbWF0Y2g7XG5cdFx0XHQrK3NlbGYuY291bnRlcjtcblx0XHRcdHJldHVybiBjdXJyZW50O1xuXHRcdH07XG5cdH07XG5cdC8qICoqKioqKioqKioqKioqKiogTW9yZWJpdHMuZGF0ZSAqKioqKioqKioqKioqKioqICovXG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBkYXRlIG9iamVjdCB3aXRoIGVuaGFuY2VkIHByb2Nlc3NpbmcgY2FwYWJpbGl0aWVzLCBhIGxhXG5cdCAqIHtAbGluayBodHRwczovL21vbWVudGpzLmNvbS98bW9tZW50LmpzfS4gTWVkaWFXaWtpIHRpbWVzdGFtcCBmb3JtYXQgaXMgYWxzb1xuXHQgKiBhY2NlcHRhYmxlLCBpbiBhZGRpdGlvbiB0byBldmVyeXRoaW5nIHRoYXQgSlMgRGF0ZSgpIGFjY2VwdHMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7Li4uYW55fSBhcmdzXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0c1xuXHQgKiBAY2xhc3Ncblx0ICovXG5cdE1vcmViaXRzLmRhdGUgPSBmdW5jdGlvbiAoLi4uYXJncykge1xuXHRcdC8vIENoZWNrIE1lZGlhV2lraSBmb3JtYXRzXG5cdFx0Ly8gTXVzdCBiZSBmaXJzdCBzaW5jZSBmaXJlZm94IGVycm9uZW91c2x5IGFjY2VwdHMgdGhlIHRpbWVzdGFtcFxuXHRcdC8vIGZvcm1hdCwgc2FucyB0aW1lem9uZSAoU2VlIGFsc286ICM5MjEsICM5MzYsICMxMTc0LCAjMTE4NyksIGFuZCB0aGVcblx0XHQvLyAxNC1kaWdpdCBzdHJpbmcgd2lsbCBiZSBpbnRlcnByZXRlZCBkaWZmZXJlbnRseS5cblx0XHRpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcblx0XHRcdGNvbnN0IFtwYXJhbV0gPSBhcmdzO1xuXHRcdFx0aWYgKC9eXFxkezE0fSQvLnRlc3QocGFyYW0pKSB7XG5cdFx0XHRcdC8vIFlZWVlNTURESEhtbXNzXG5cdFx0XHRcdGNvbnN0IGRpZ2l0TWF0Y2ggPSAvKFxcZHs0fSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pLy5leGVjKHBhcmFtKTtcblx0XHRcdFx0aWYgKGRpZ2l0TWF0Y2gpIHtcblx0XHRcdFx0XHQvLyAuLi4uLiB5ZWFyIC4uLiBtb250aCAuLiBkYXRlIC4uLiBob3VyIC4uLi4gbWludXRlIC4uLi4uIHNlY29uZFxuXHRcdFx0XHRcdHRoaXMuX2QgPSBuZXcgRGF0ZShcblx0XHRcdFx0XHRcdFJlZmxlY3QuYXBwbHkoRGF0ZS5VVEMsIG51bGwsIFtcblx0XHRcdFx0XHRcdFx0ZGlnaXRNYXRjaFsxXSxcblx0XHRcdFx0XHRcdFx0ZGlnaXRNYXRjaFsyXSAtIDEsXG5cdFx0XHRcdFx0XHRcdGRpZ2l0TWF0Y2hbM10sXG5cdFx0XHRcdFx0XHRcdGRpZ2l0TWF0Y2hbNF0sXG5cdFx0XHRcdFx0XHRcdGRpZ2l0TWF0Y2hbNV0sXG5cdFx0XHRcdFx0XHRcdGRpZ2l0TWF0Y2hbNl0sXG5cdFx0XHRcdFx0XHRdKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHQvLyBXaWtpdGV4dCBzaWduYXR1cmUgdGltZXN0YW1wXG5cdFx0XHRcdGNvbnN0IGRhdGVQYXJ0cyA9IE1vcmViaXRzLmwxMG4uc2lnbmF0dXJlVGltZXN0YW1wRm9ybWF0KHBhcmFtKTtcblx0XHRcdFx0aWYgKGRhdGVQYXJ0cykge1xuXHRcdFx0XHRcdHRoaXMuX2QgPSBuZXcgRGF0ZShEYXRlLlVUQy5hcHBseShudWxsLCBkYXRlUGFydHMpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBUcnkgc3RhbmRhcmQgZGF0ZVxuXHRcdHRoaXMuX2QgPz89IG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoRGF0ZSwgW0RhdGUsIC4uLmdlbmVyYXRlQXJyYXkoYXJncyldKSkoKTtcblx0XHQvLyBTdGlsbCBubz9cblx0XHRpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG5cdFx0XHRtdy5sb2cud2FybignSW52YWxpZCBNb3JlYml0cy5kYXRlIGluaXRpYWxpc2F0aW9uOicsIGFyZ3MpO1xuXHRcdH1cblx0fTtcblx0LyoqXG5cdCAqIExvY2FsaXplZCBzdHJpbmdzIGZvciBkYXRlIHByb2Nlc3NpbmcuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5kYXRlXG5cdCAqIEB0eXBlIHtvYmplY3QuPHN0cmluZywgc3RyaW5nPn1cblx0ICogQHByb3BlcnR5IHtzdHJpbmdbXX0gbW9udGhzXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IG1vbnRoc1Nob3J0XG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IGRheXNcblx0ICogQHByb3BlcnR5IHtzdHJpbmdbXX0gZGF5c1Nob3J0XG5cdCAqIEBwcm9wZXJ0eSB7b2JqZWN0LjxzdHJpbmcsIHN0cmluZz59IHJlbGF0aXZlVGltZXNcblx0ICogQHByaXZhdGVcblx0ICovXG5cdE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YSA9IHtcblx0XHQvLyBtZXNzYWdlIG5hbWVzIGhlcmUgY29ycmVzcG9uZCB0byBNZWRpYVdpa2kgbWVzc2FnZSBuYW1lc1xuXHRcdC8vIE5vIGkxOG4gYXQgdGhpcyB0aW1lXG5cdFx0bW9udGhzOiBbJzHmnIgnLCAnMuaciCcsICcz5pyIJywgJzTmnIgnLCAnNeaciCcsICc25pyIJywgJzfmnIgnLCAnOOaciCcsICc55pyIJywgJzEw5pyIJywgJzEx5pyIJywgJzEy5pyIJ10sXG5cdFx0bW9udGhzU2hvcnQ6IFsnMeaciCcsICcy5pyIJywgJzPmnIgnLCAnNOaciCcsICc15pyIJywgJzbmnIgnLCAnN+aciCcsICc45pyIJywgJznmnIgnLCAnMTDmnIgnLCAnMTHmnIgnLCAnMTLmnIgnXSxcblx0XHRkYXlzOiBbJ+aYn+acn+aXpScsICfmmJ/mnJ/kuIAnLCAn5pif5pyf5LqMJywgJ+aYn+acn+S4iScsICfmmJ/mnJ/lm5snLCAn5pif5pyf5LqUJywgJ+aYn+acn+WFrSddLFxuXHRcdGRheXNTaG9ydDogWyfml6UnLCAn5LiAJywgJ+S6jCcsICfkuIknLCAn5ZubJywgJ+S6lCcsICflha0nXSxcblx0XHRyZWxhdGl2ZVRpbWVzOiB7XG5cdFx0XHR0aGlzRGF5OiAnW+S7iuWkqV1BIGhoOm1tJyxcblx0XHRcdHByZXZEYXk6ICdb5pio5aSpXUEgaGg6bW0nLFxuXHRcdFx0bmV4dERheTogJ1vmmI7lpKldQSBoaDptbScsXG5cdFx0XHR0aGlzV2VlazogJ2RkZGRBIGhoOm1tJyxcblx0XHRcdHBhc3RXZWVrOiAnW+S4il1kZGRkQSBoaDptbScsXG5cdFx0XHRvdGhlcjogJ1lZWVktTU0tREQnLFxuXHRcdH0sXG5cdH07XG5cdC8qKlxuXHQgKiBNYXAgdW5pdHMgd2l0aCBnZXR0ZXIvc2V0dGVyIGZ1bmN0aW9uIG5hbWVzLCBmb3IgYGFkZGAgYW5kIGBzdWJ0cmFjdGBcblx0ICogbWV0aG9kcy5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLmRhdGVcblx0ICogQHR5cGUge29iamVjdC48c3RyaW5nLCBzdHJpbmc+fVxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gc2Vjb25kc1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gbWludXRlc1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gaG91cnNcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGRheXNcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IHdlZWtzXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtb250aHNcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IHllYXJzXG5cdCAqL1xuXHRNb3JlYml0cy5kYXRlLnVuaXRNYXAgPSB7XG5cdFx0c2Vjb25kczogJ1NlY29uZHMnLFxuXHRcdG1pbnV0ZXM6ICdNaW51dGVzJyxcblx0XHRob3VyczogJ0hvdXJzJyxcblx0XHRkYXlzOiAnRGF0ZScsXG5cdFx0d2Vla3M6ICdXZWVrJyxcblx0XHQvLyBOb3QgYSBmdW5jdGlvbiBidXQgaGFuZGxlZCBpbiBgYWRkYCB0aHJvdWdoIGN1bm5pbmcgdXNlIG9mIG11bHRpcGxpY2F0aW9uXG5cdFx0bW9udGhzOiAnTW9udGgnLFxuXHRcdHllYXJzOiAnRnVsbFllYXInLFxuXHR9O1xuXHRNb3JlYml0cy5kYXRlLnByb3RvdHlwZSA9IHtcblx0XHQvKiogQHJldHVybnMge2Jvb2xlYW59ICovXG5cdFx0aXNWYWxpZCgpIHtcblx0XHRcdHJldHVybiAhTnVtYmVyLmlzTmFOKHRoaXMuZ2V0VGltZSgpKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7KERhdGV8TW9yZWJpdHMuZGF0ZSl9IGRhdGVcblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHRpc0JlZm9yZShkYXRlKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUaW1lKCkgPCBkYXRlLmdldFRpbWUoKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7KERhdGV8TW9yZWJpdHMuZGF0ZSl9IGRhdGVcblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHRpc0FmdGVyKGRhdGUpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRpbWUoKSA+IGRhdGUuZ2V0VGltZSgpO1xuXHRcdH0sXG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9ICovXG5cdFx0Z2V0VVRDTW9udGhOYW1lKCkge1xuXHRcdFx0cmV0dXJuIE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5tb250aHNbdGhpcy5nZXRVVENNb250aCgpXTtcblx0XHR9LFxuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSAqL1xuXHRcdGdldFVUQ01vbnRoTmFtZUFiYnJldigpIHtcblx0XHRcdHJldHVybiBNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEubW9udGhzU2hvcnRbdGhpcy5nZXRVVENNb250aCgpXTtcblx0XHR9LFxuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSAqL1xuXHRcdGdldE1vbnRoTmFtZSgpIHtcblx0XHRcdHJldHVybiBNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEubW9udGhzW3RoaXMuZ2V0TW9udGgoKV07XG5cdFx0fSxcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gKi9cblx0XHRnZXRNb250aE5hbWVBYmJyZXYoKSB7XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLm1vbnRoc1Nob3J0W3RoaXMuZ2V0TW9udGgoKV07XG5cdFx0fSxcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gKi9cblx0XHRnZXRVVENEYXlOYW1lKCkge1xuXHRcdFx0cmV0dXJuIE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5kYXlzW3RoaXMuZ2V0VVRDRGF5KCldO1xuXHRcdH0sXG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9ICovXG5cdFx0Z2V0VVRDRGF5TmFtZUFiYnJldigpIHtcblx0XHRcdHJldHVybiBNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEuZGF5c1Nob3J0W3RoaXMuZ2V0VVRDRGF5KCldO1xuXHRcdH0sXG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9ICovXG5cdFx0Z2V0RGF5TmFtZSgpIHtcblx0XHRcdHJldHVybiBNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEuZGF5c1t0aGlzLmdldERheSgpXTtcblx0XHR9LFxuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSAqL1xuXHRcdGdldERheU5hbWVBYmJyZXYoKSB7XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLmRheXNTaG9ydFt0aGlzLmdldERheSgpXTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEFkZCBhIGdpdmVuIG51bWJlciBvZiBtaW51dGVzLCBob3VycywgZGF5cywgd2Vla3MsIG1vbnRocywgb3IgeWVhcnMgdG8gdGhlIGRhdGUuXG5cdFx0ICogVGhpcyBpcyBkb25lIGluLXBsYWNlLiBUaGUgbW9kaWZpZWQgZGF0ZSBvYmplY3QgaXMgYWxzbyByZXR1cm5lZCwgYWxsb3dpbmcgY2hhaW5pbmcuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyIC0gU2hvdWxkIGJlIGFuIGludGVnZXIuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHVuaXRcblx0XHQgKiBAdGhyb3dzIElmIGludmFsaWQgb3IgdW5zdXBwb3J0ZWQgdW5pdCBpcyBnaXZlbi5cblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuZGF0ZX1cblx0XHQgKi9cblx0XHRhZGQobnVtYmVyLCB1bml0KSB7XG5cdFx0XHRsZXQgbnVtID0gTnVtYmVyLnBhcnNlSW50KG51bWJlciwgMTApOyAvLyBub3JtYWxpemVcblx0XHRcdGlmIChOdW1iZXIuaXNOYU4obnVtKSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkIG51bWJlciBcIiR7bnVtYmVyfVwiIHByb3ZpZGVkLmApO1xuXHRcdFx0fVxuXHRcdFx0dW5pdCA9IHVuaXQudG9Mb3dlckNhc2UoKTsgLy8gbm9ybWFsaXplXG5cdFx0XHRjb25zdCB7dW5pdE1hcH0gPSBNb3JlYml0cy5kYXRlO1xuXHRcdFx0bGV0IHVuaXROb3JtID0gdW5pdE1hcFt1bml0XSB8fCB1bml0TWFwW2Ake3VuaXR9c2BdOyAvLyBzbyB0aGF0IGJvdGggc2luZ3VsYXIgYW5kICBwbHVyYWwgZm9ybXMgd29ya1xuXHRcdFx0aWYgKHVuaXROb3JtKSB7XG5cdFx0XHRcdC8vIE5vIGJ1aWx0LWluIHdlZWsgZnVuY3Rpb25zLCBzbyByYXRoZXIgdGhhbiBidWlsZCBvdXQgSVNPJ3MgZ2V0V2Vlay9zZXRXZWVrLCBqdXN0IG11bHRpcGx5XG5cdFx0XHRcdC8vIFByb2JhYmx5IGNhbid0IGJlIHVzZWQgZm9yIEp1bGlhbi0+R3JlZ29yaWFuIGNoYW5nZW92ZXJzLCBldGMuXG5cdFx0XHRcdGlmICh1bml0Tm9ybSA9PT0gJ1dlZWsnKSB7XG5cdFx0XHRcdFx0dW5pdE5vcm0gPSAnRGF0ZSc7XG5cdFx0XHRcdFx0bnVtICo9IDc7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpc1tgc2V0JHt1bml0Tm9ybX1gXSh0aGlzW2BnZXQke3VuaXROb3JtfWBdKCkgKyBudW0pO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblx0XHRcdHRocm93IG5ldyBFcnJvcihgSW52YWxpZCB1bml0IFwiJHt1bml0fVwiOiBPbmx5ICR7T2JqZWN0LmtleXModW5pdE1hcCkuam9pbignLCAnKX0gYXJlIGFsbG93ZWQuYCk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBTdWJ0cmFjdHMgYSBnaXZlbiBudW1iZXIgb2YgbWludXRlcywgaG91cnMsIGRheXMsIHdlZWtzLCBtb250aHMsIG9yIHllYXJzIHRvIHRoZSBkYXRlLlxuXHRcdCAqIFRoaXMgaXMgZG9uZSBpbi1wbGFjZS4gVGhlIG1vZGlmaWVkIGRhdGUgb2JqZWN0IGlzIGFsc28gcmV0dXJuZWQsIGFsbG93aW5nIGNoYWluaW5nLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciAtIFNob3VsZCBiZSBhbiBpbnRlZ2VyLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB1bml0XG5cdFx0ICogQHRocm93cyBJZiBpbnZhbGlkIG9yIHVuc3VwcG9ydGVkIHVuaXQgaXMgZ2l2ZW4uXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLmRhdGV9XG5cdFx0ICovXG5cdFx0c3VidHJhY3QobnVtYmVyLCB1bml0KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5hZGQoLW51bWJlciwgdW5pdCk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBGb3JtYXQgdGhlIGRhdGUgaW50byBhIHN0cmluZyBwZXIgdGhlIGdpdmVuIGZvcm1hdCBzdHJpbmcuXG5cdFx0ICogUmVwbGFjZW1lbnQgc3ludGF4IGlzIGEgc3Vic2V0IG9mIHRoYXQgaW4gbW9tZW50LmpzOlxuXHRcdCAqXG5cdFx0ICogfCBTeW50YXggfCBPdXRwdXQgfFxuXHRcdCAqIHwtLS0tLS0tLXwtLS0tLS0tLXxcblx0XHQgKiB8IEggfCBIb3VycyAoMjQtaG91cikgfFxuXHRcdCAqIHwgSEggfCBIb3VycyAoMjQtaG91ciwgcGFkZGVkIHRvIDIgZGlnaXRzKSB8XG5cdFx0ICogfCBoIHwgSG91cnMgKDEyLWhvdXIpIHxcblx0XHQgKiB8IGhoIHwgSG91cnMgKDEyLWhvdXIsIHBhZGRlZCB0byAyIGRpZ2l0cykgfFxuXHRcdCAqIHwgQSB8IEFNIG9yIFBNIHxcblx0XHQgKiB8IG0gfCBNaW51dGVzIHxcblx0XHQgKiB8IG1tIHwgTWludXRlcyAocGFkZGVkIHRvIDIgZGlnaXRzKSB8XG5cdFx0ICogfCBzIHwgU2Vjb25kcyB8XG5cdFx0ICogfCBzcyB8IFNlY29uZHMgKHBhZGRlZCB0byAyIGRpZ2l0cykgfFxuXHRcdCAqIHwgU1NTIHwgTWlsbGlzZWNvbmRzIGZyYWdtZW50LCAzIGRpZ2l0cyB8XG5cdFx0ICogfCBkIHwgRGF5IG51bWJlciBvZiB0aGUgd2VlayAoU3VuPTApIHxcblx0XHQgKiB8IGRkZCB8IEFiYnJldmlhdGVkIGRheSBuYW1lIHxcblx0XHQgKiB8IGRkZGQgfCBGdWxsIGRheSBuYW1lIHxcblx0XHQgKiB8IEQgfCBEYXRlIHxcblx0XHQgKiB8IEREIHwgRGF0ZSAocGFkZGVkIHRvIDIgZGlnaXRzKSB8XG5cdFx0ICogfCBNIHwgTW9udGggbnVtYmVyICgxLWluZGV4ZWQpIHxcblx0XHQgKiB8IE1NIHwgTW9udGggbnVtYmVyICgxLWluZGV4ZWQsIHBhZGRlZCB0byAyIGRpZ2l0cykgfFxuXHRcdCAqIHwgTU1NIHwgQWJicmV2aWF0ZWQgbW9udGggbmFtZSB8XG5cdFx0ICogfCBNTU1NIHwgRnVsbCBtb250aCBuYW1lIHxcblx0XHQgKiB8IFkgfCBZZWFyIHxcblx0XHQgKiB8IFlZIHwgRmluYWwgdHdvIGRpZ2l0cyBvZiB5ZWFyICgyMCBmb3IgMjAyMCwgNDIgZm9yIDE5NDIpIHxcblx0XHQgKiB8IFlZWVkgfCBZZWFyIChzYW1lIGFzIGBZYCkgfFxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGZvcm1hdHN0ciAtIEZvcm1hdCB0aGUgZGF0ZSBpbnRvIGEgc3RyaW5nLCB1c2luZ1xuXHRcdCAqIHRoZSByZXBsYWNlbWVudCBzeW50YXguICBVc2UgYFtgIGFuZCBgXWAgdG8gZXNjYXBlIGl0ZW1zLiAgSWYgbm90XG5cdFx0ICogcHJvdmlkZWQsIHdpbGwgcmV0dXJuIHRoZSBJU08tODYwMS1mb3JtYXR0ZWQgc3RyaW5nLlxuXHRcdCAqIEBwYXJhbSB7KHN0cmluZ3xudW1iZXIpfSBbem9uZT1zeXN0ZW1dIC0gYHN5c3RlbWAgKGZvciBicm93c2VyLWRlZmF1bHQgdGltZSB6b25lKSxcblx0XHQgKiBgdXRjYCwgb3Igc3BlY2lmeSBhIHRpbWUgem9uZSBhcyBudW1iZXIgb2YgbWludXRlcyByZWxhdGl2ZSB0byBVVEMuXG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHRmb3JtYXQoZm9ybWF0c3RyLCB6b25lKSB7XG5cdFx0XHRpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG5cdFx0XHRcdHJldHVybiAnSW52YWxpZCBkYXRlJzsgLy8gUHV0IHRoZSB0cnV0aCBvdXQsIHByZWZlcmFibGUgdG8gXCJOYU5OYU5OYW4gTmFOOk5hTlwiIG9yIHdoYXRldmVyXG5cdFx0XHR9XG5cblx0XHRcdGxldCB1ZGF0ZSA9IHRoaXM7XG5cdFx0XHQvLyBjcmVhdGUgYSBuZXcgZGF0ZSBvYmplY3QgdGhhdCB3aWxsIGNvbnRhaW4gdGhlIGRhdGUgdG8gZGlzcGxheSBhcyBzeXN0ZW0gdGltZVxuXHRcdFx0aWYgKHpvbmUgPT09ICd1dGMnKSB7XG5cdFx0XHRcdHVkYXRlID0gbmV3IE1vcmViaXRzLmRhdGUodGhpcy5nZXRUaW1lKCkpLmFkZCh0aGlzLmdldFRpbWV6b25lT2Zmc2V0KCksICdtaW51dGVzJyk7XG5cdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiB6b25lID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHQvLyBjb252ZXJ0IHRvIHV0YywgdGhlbiBhZGQgdGhlIHV0YyBvZmZzZXQgZ2l2ZW5cblx0XHRcdFx0dWRhdGUgPSBuZXcgTW9yZWJpdHMuZGF0ZSh0aGlzLmdldFRpbWUoKSkuYWRkKHRoaXMuZ2V0VGltZXpvbmVPZmZzZXQoKSArIHpvbmUsICdtaW51dGVzJyk7XG5cdFx0XHR9XG5cdFx0XHQvLyBkZWZhdWx0IHRvIElTT1N0cmluZ1xuXHRcdFx0aWYgKCFmb3JtYXRzdHIpIHtcblx0XHRcdFx0cmV0dXJuIHVkYXRlLnRvSVNPU3RyaW5nKCk7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBwYWQgPSAobnVtLCBsZW4pID0+IHtcblx0XHRcdFx0bGVuIHx8PSAyOyAvLyBVcCB0byBsZW5ndGggb2YgMDAgKyAxXG5cdFx0XHRcdHJldHVybiBgMDAke251bX1gLnRvU3RyaW5nKCkuc2xpY2UoMCAtIGxlbik7XG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgaDI0ID0gdWRhdGUuZ2V0SG91cnMoKTtcblx0XHRcdGNvbnN0IG0gPSB1ZGF0ZS5nZXRNaW51dGVzKCk7XG5cdFx0XHRjb25zdCBzID0gdWRhdGUuZ2V0U2Vjb25kcygpO1xuXHRcdFx0Y29uc3QgbXMgPSB1ZGF0ZS5nZXRNaWxsaXNlY29uZHMoKTtcblx0XHRcdGNvbnN0IEQgPSB1ZGF0ZS5nZXREYXRlKCk7XG5cdFx0XHRjb25zdCBNID0gdWRhdGUuZ2V0TW9udGgoKSArIDE7XG5cdFx0XHRjb25zdCBZID0gdWRhdGUuZ2V0RnVsbFllYXIoKTtcblx0XHRcdGNvbnN0IGgxMiA9IGgyNCAlIDEyIHx8IDEyO1xuXHRcdFx0Y29uc3QgYW1PclBtID0gaDI0ID49IDEyID8gJ+S4i+WNiCcgOiAn5LiK5Y2IJztcblx0XHRcdGNvbnN0IHJlcGxhY2VtZW50TWFwID0ge1xuXHRcdFx0XHRISDogcGFkKGgyNCksXG5cdFx0XHRcdEg6IGgyNCxcblx0XHRcdFx0aGg6IHBhZChoMTIpLFxuXHRcdFx0XHRoOiBoMTIsXG5cdFx0XHRcdEE6IGFtT3JQbSxcblx0XHRcdFx0bW06IHBhZChtKSxcblx0XHRcdFx0bSxcblx0XHRcdFx0c3M6IHBhZChzKSxcblx0XHRcdFx0cyxcblx0XHRcdFx0U1NTOiBwYWQobXMsIDMpLFxuXHRcdFx0XHRkZGRkOiB1ZGF0ZS5nZXREYXlOYW1lKCksXG5cdFx0XHRcdGRkZDogdWRhdGUuZ2V0RGF5TmFtZUFiYnJldigpLFxuXHRcdFx0XHRkOiB1ZGF0ZS5nZXREYXkoKSxcblx0XHRcdFx0REQ6IHBhZChEKSxcblx0XHRcdFx0RCxcblx0XHRcdFx0TU1NTTogdWRhdGUuZ2V0TW9udGhOYW1lKCksXG5cdFx0XHRcdE1NTTogdWRhdGUuZ2V0TW9udGhOYW1lQWJicmV2KCksXG5cdFx0XHRcdE1NOiBwYWQoTSksXG5cdFx0XHRcdE0sXG5cdFx0XHRcdFlZWVk6IFksXG5cdFx0XHRcdFlZOiBwYWQoWSAlIDEwMCksXG5cdFx0XHRcdFksXG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgdW5iaW5kZXIgPSBuZXcgTW9yZWJpdHMudW5iaW5kZXIoZm9ybWF0c3RyKTsgLy8gZXNjYXBlIHN0dWZmIGJldHdlZW4gWy4uLl1cblx0XHRcdHVuYmluZGVyLnVuYmluZChTdHJpbmcucmF3YFxcW2AsIFN0cmluZy5yYXdgXFxdYCk7XG5cdFx0XHR1bmJpbmRlci5jb250ZW50ID0gdW5iaW5kZXIuY29udGVudC5yZXBsYWNlKFxuXHRcdFx0XHQvKiBSZWdleCBub3Rlczpcblx0XHRcdFx0ICogZChkezIsM30pPyBtYXRjaGVzIGV4YWN0bHkgMSwgMyBvciA0IG9jY3VycmVuY2VzIG9mICdkJyAoJ2RkJyBpcyB0cmVhdGVkIGFzIGEgZG91YmxlIG1hdGNoIG9mICdkJylcblx0XHRcdFx0ICogWXsxLDJ9KFl7Mn0pPyBtYXRjaGVzIGV4YWN0bHkgMSwgMiBvciA0IG9jY3VycmVuY2VzIG9mICdZJ1xuXHRcdFx0XHQgKi9cblx0XHRcdFx0L0h7MSwyfXxoezEsMn18bXsxLDJ9fHN7MSwyfXxTU1N8ZChkezIsM30pP3xEezEsMn18TXsxLDR9fFl7MSwyfShZezJ9KT98QS9nLFxuXHRcdFx0XHQobWF0Y2gpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gcmVwbGFjZW1lbnRNYXBbbWF0Y2hdO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdFx0cmV0dXJuIHVuYmluZGVyLnJlYmluZCgpLnJlcGxhY2UoL1xcWyguKj8pXFxdL2csICckMScpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogR2l2ZXMgYSByZWFkYWJsZSByZWxhdGl2ZSB0aW1lIHN0cmluZyBzdWNoIGFzIFwiWWVzdGVyZGF5IGF0IDY6NDMgUE1cIiBvciBcIkxhc3QgVGh1cnNkYXkgYXQgMTE6NDUgQU1cIi5cblx0XHQgKiBTaW1pbGFyIHRvIGBjYWxlbmRhcmAgaW4gbW9tZW50LmpzLCBidXQgd2l0aCB0aW1lIHpvbmUgc3VwcG9ydC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7KHN0cmluZ3xudW1iZXIpfSBbem9uZT1zeXN0ZW1dIC0gJ3N5c3RlbScgKGZvciBicm93c2VyLWRlZmF1bHQgdGltZSB6b25lKSxcblx0XHQgKiAndXRjJyAoZm9yIFVUQyksIG9yIHNwZWNpZnkgYSB0aW1lIHpvbmUgYXMgbnVtYmVyIG9mIG1pbnV0ZXMgcGFzdCBVVEMuXG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHRjYWxlbmRhcih6b25lKSB7XG5cdFx0XHQvLyBaZXJvIG91dCB0aGUgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMgYW5kIG1pbGxpc2Vjb25kcyAtIGtlZXBpbmcgb25seSB0aGUgZGF0ZTtcblx0XHRcdC8vIGZpbmQgdGhlIGRpZmZlcmVuY2UuIE5vdGUgdGhhdCBzZXRIb3VycygpIHJldHVybnMgdGhlIHNhbWUgdGhpbmcgYXMgZ2V0VGltZSgpLlxuXHRcdFx0Y29uc3QgZGF0ZURpZmYgPSAobmV3IERhdGUoKS5zZXRIb3VycygwLCAwLCAwLCAwKSAtIG5ldyBEYXRlKHRoaXMpLnNldEhvdXJzKDAsIDAsIDAsIDApKSAvIDguNjRlNztcblx0XHRcdHN3aXRjaCAodHJ1ZSkge1xuXHRcdFx0XHRjYXNlIGRhdGVEaWZmID09PSAwOlxuXHRcdFx0XHRcdHJldHVybiB0aGlzLmZvcm1hdChNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEucmVsYXRpdmVUaW1lcy50aGlzRGF5LCB6b25lKTtcblx0XHRcdFx0Y2FzZSBkYXRlRGlmZiA9PT0gMTpcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5mb3JtYXQoTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLnJlbGF0aXZlVGltZXMucHJldkRheSwgem9uZSk7XG5cdFx0XHRcdGNhc2UgZGF0ZURpZmYgPiAwICYmIGRhdGVEaWZmIDwgNzpcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5mb3JtYXQoTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLnJlbGF0aXZlVGltZXMucGFzdFdlZWssIHpvbmUpO1xuXHRcdFx0XHRjYXNlIGRhdGVEaWZmID09PSAtMTpcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5mb3JtYXQoTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLnJlbGF0aXZlVGltZXMubmV4dERheSwgem9uZSk7XG5cdFx0XHRcdGNhc2UgZGF0ZURpZmYgPCAwICYmIGRhdGVEaWZmID4gLTc6XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuZm9ybWF0KE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5yZWxhdGl2ZVRpbWVzLnRoaXNXZWVrLCB6b25lKTtcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5mb3JtYXQoTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLnJlbGF0aXZlVGltZXMub3RoZXIsIHpvbmUpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogR2V0IGEgcmVndWxhciBleHByZXNzaW9uIHRoYXQgbWF0Y2hlcyB3aWtpdGV4dCBzZWN0aW9uIHRpdGxlcywgc3VjaFxuXHRcdCAqIGFzIGA9PURlY2VtYmVyIDIwMTk9PWAgb3IgYD09PSBKYW4gMjAxOCA9PT1gLlxuXHRcdCAqXG5cdFx0ICogQHJldHVybnMge1JlZ0V4cH1cblx0XHQgKi9cblx0XHRtb250aEhlYWRlclJlZ2V4KCkge1xuXHRcdFx0cmV0dXJuIG5ldyBSZWdFeHAoXG5cdFx0XHRcdGBeKD09KylcXFxccyoke3RoaXMuZ2V0VVRDRnVsbFllYXIoKX3lubQoPzoke3RoaXMuZ2V0VVRDTW9udGhOYW1lKCl9fCR7dGhpcy5nZXRVVENNb250aE5hbWVBYmJyZXYoKX0pXFxcXHMqXFxcXDFgLFxuXHRcdFx0XHQnbWcnXG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQ3JlYXRlcyBhIHdpa2l0ZXh0IHNlY3Rpb24gaGVhZGVyIHdpdGggdGhlIG1vbnRoIGFuZCB5ZWFyLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IFtsZXZlbD0yXSAtIEhlYWRlciBsZXZlbC4gIFBhc3MgMCBmb3IganVzdCB0aGUgdGV4dFxuXHRcdCAqIHdpdGggbm8gd2lraXRleHQgbWFya2VycyAoPT0pLlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0bW9udGhIZWFkZXIobGV2ZWwpIHtcblx0XHRcdC8vIERlZmF1bHQgdG8gMiwgYnV0IGFsbG93IGZvciAwIG9yIHN0cmluZ3kgbnVtYmVyc1xuXHRcdFx0bGV2ZWwgPSBOdW1iZXIucGFyc2VJbnQobGV2ZWwsIDEwKTtcblx0XHRcdGxldmVsID0gTnVtYmVyLmlzTmFOKGxldmVsKSA/IDIgOiBsZXZlbDtcblx0XHRcdGNvbnN0IGhlYWRlciA9ICc9Jy5yZXBlYXQobGV2ZWwpO1xuXHRcdFx0Y29uc3QgdGV4dCA9IGAke3RoaXMuZ2V0VVRDRnVsbFllYXIoKX3lubQke3RoaXMuZ2V0VVRDTW9udGhOYW1lKCl9YDtcblx0XHRcdGlmIChoZWFkZXIubGVuZ3RoKSB7XG5cdFx0XHRcdC8vIHdpa2l0ZXh0LWZvcm1hdHRlZCBoZWFkZXJcblx0XHRcdFx0cmV0dXJuIGAke2hlYWRlcn0gJHt0ZXh0fSAke2hlYWRlcn1gO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRleHQ7IC8vIEp1c3QgdGhlIHN0cmluZ1xuXHRcdH0sXG5cdH07XG5cdC8vIEFsbG93IG5hdGl2ZSBEYXRlLnByb3RvdHlwZSBtZXRob2RzIHRvIGJlIHVzZWQgb24gTW9yZWJpdHMuZGF0ZSBvYmplY3RzXG5cdGZvciAoY29uc3QgZnVuYyBvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhEYXRlLnByb3RvdHlwZSkpIHtcblx0XHQvLyBFeGNsdWRlIG1ldGhvZHMgdGhhdCBjb2xsaWRlIHdpdGggUGFnZVRyaWFnZSdzIERhdGUuanMgZXh0ZXJuYWwsIHdoaWNoIGNsb2JiZXJzIG5hdGl2ZSBEYXRlXG5cdFx0aWYgKCFbJ2FkZCcsICdnZXREYXlOYW1lJywgJ2dldE1vbnRoTmFtZSddLmluY2x1ZGVzKGZ1bmMpKSB7XG5cdFx0XHRNb3JlYml0cy5kYXRlLnByb3RvdHlwZVtmdW5jXSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9kW2Z1bmNdKC4uLmFyZ3MpO1xuXHRcdFx0fTtcblx0XHR9XG5cdH1cblx0LyogKioqKioqKioqKioqKioqKiBNb3JlYml0cy53aWtpICoqKioqKioqKioqKioqKiogKi9cblx0LyoqXG5cdCAqIFZhcmlvdXMgb2JqZWN0cyBmb3Igd2lraSBlZGl0aW5nIGFuZCBBUEkgYWNjZXNzLCBpbmNsdWRpbmdcblx0ICoge0BsaW5rIE1vcmViaXRzLndpa2kuYXBpfSBhbmQge0BsaW5rIE1vcmViaXRzLndpa2kucGFnZX0uXG5cdCAqXG5cdCAqIEBuYW1lc3BhY2UgTW9yZWJpdHMud2lraVxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICovXG5cdE1vcmViaXRzLndpa2kgPSB7fTtcblx0LyoqXG5cdCAqIEBkZXByZWNhdGVkIGluIGZhdm9yIG9mIE1vcmViaXRzLmlzUGFnZVJlZGlyZWN0IGFzIG9mIE5vdmVtYmVyIDIwMjBcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2lcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRNb3JlYml0cy53aWtpLmlzUGFnZVJlZGlyZWN0ID0gKCkgPT4ge1xuXHRcdGNvbnNvbGUud2Fybihcblx0XHRcdCdbTW9yZWJpdHNdIE5PVEU6IE1vcmViaXRzLndpa2kuaXNQYWdlUmVkaXJlY3QgaGFzIGJlZW4gZGVwcmVjYXRlZCwgdXNlIE1vcmViaXRzLmlzUGFnZVJlZGlyZWN0IGluc3RlYWQuJ1xuXHRcdCk7XG5cdFx0cmV0dXJuIE1vcmViaXRzLmlzUGFnZVJlZGlyZWN0KCk7XG5cdH07XG5cdC8qICoqKioqKioqKioqKioqKiogTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQgKioqKioqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2lcblx0ICogQHR5cGUge251bWJlcn1cblx0ICovXG5cdE1vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdCA9IDA7XG5cdC8qKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraVxuXHQgKiBAdHlwZSB7bnVtYmVyfVxuXHQgKi9cblx0TW9yZWJpdHMud2lraS5uYnJPZkNoZWNrcG9pbnRzTGVmdCA9IDA7XG5cdC8qKlxuXHQgKiBEaXNwbGF5IG1lc3NhZ2UgYW5kL29yIHJlZGlyZWN0IHRvIHBhZ2UgdXBvbiBjb21wbGV0aW9uIG9mIHRhc2tzLlxuXHQgKlxuXHQgKiBFdmVyeSBjYWxsIHRvIE1vcmViaXRzLndpa2kuYXBpLnBvc3QoKSByZXN1bHRzIGluIHRoZSBkaXNwYXRjaCBvZiBhblxuXHQgKiBhc3luY2hyb25vdXMgY2FsbGJhY2suIEVhY2ggY2FsbGJhY2sgY2FuIGluIHR1cm4gbWFrZSBhbiBhZGRpdGlvbmFsIGNhbGwgdG9cblx0ICogTW9yZWJpdHMud2lraS5hcGkucG9zdCgpIHRvIGNvbnRpbnVlIGEgcHJvY2Vzc2luZyBzZXF1ZW5jZS4gQXQgdGhlXG5cdCAqIGNvbmNsdXNpb24gb2YgdGhlIGZpbmFsIGNhbGxiYWNrIG9mIGEgcHJvY2Vzc2luZyBzZXF1ZW5jZSwgaXQgaXMgbm90XG5cdCAqIHBvc3NpYmxlIHRvIHNpbXBseSByZXR1cm4gdG8gdGhlIG9yaWdpbmFsIGNhbGxlciBiZWNhdXNlIHRoZXJlIGlzIG5vIGNhbGxcblx0ICogc3RhY2sgbGVhZGluZyBiYWNrIHRvIHRoZSBvcmlnaW5hbCBjb250ZXh0LiBJbnN0ZWFkLFxuXHQgKiBNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5ldmVudCgpIGlzIGNhbGxlZCB0byBkaXNwbGF5IHRoZSByZXN1bHQgdG9cblx0ICogdGhlIHVzZXIgYW5kIHRvIHBlcmZvcm0gYW4gb3B0aW9uYWwgcGFnZSByZWRpcmVjdC5cblx0ICpcblx0ICogVGhlIGRldGVybWluYXRpb24gb2Ygd2hlbiB0byBjYWxsIE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLmV2ZW50KCkgaXNcblx0ICogbWFuYWdlZCB0aHJvdWdoIHRoZSBnbG9iYWxzIE1vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdCBhbmRcblx0ICogTW9yZWJpdHMud2lraS5uYnJPZkNoZWNrcG9pbnRzTGVmdC4gTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0IGlzXG5cdCAqIGluY3JlbWVudGVkIGF0IHRoZSBzdGFydCBvZiBldmVyeSBNb3JlYml0cy53aWtpLmFwaSBjYWxsIGFuZCBkZWNyZW1lbnRlZFxuXHQgKiBhZnRlciB0aGUgY29tcGxldGlvbiBvZiBhIGNhbGxiYWNrIGZ1bmN0aW9uLiBJZiBhIGNhbGxiYWNrIGZ1bmN0aW9uIGRvZXNcblx0ICogbm90IGNyZWF0ZSBhIG5ldyBNb3JlYml0cy53aWtpLmFwaSBvYmplY3QgYmVmb3JlIGV4aXRpbmcsIGl0IGlzIHRoZSBmaW5hbFxuXHQgKiBzdGVwIGluIHRoZSBwcm9jZXNzaW5nIGNoYWluIGFuZCBNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5ldmVudCgpIHdpbGxcblx0ICogdGhlbiBiZSBjYWxsZWQuXG5cdCAqXG5cdCAqIE9wdGlvbmFsbHksIGNhbGxlcnMgbWF5IHVzZSBNb3JlYml0cy53aWtpLmFkZENoZWNrcG9pbnQoKSB0byBpbmRpY2F0ZSB0aGF0XG5cdCAqIHByb2Nlc3NpbmcgaXMgbm90IGNvbXBsZXRlIHVwb24gdGhlIGNvbmNsdXNpb24gb2YgdGhlIGZpbmFsIGNhbGxiYWNrXG5cdCAqIGZ1bmN0aW9uLiAgVGhpcyBpcyB1c2VkIGZvciBiYXRjaCBvcGVyYXRpb25zLiBUaGUgZW5kIG9mIGEgYmF0Y2ggaXNcblx0ICogc2lnbmFsZWQgYnkgY2FsbGluZyBNb3JlYml0cy53aWtpLnJlbW92ZUNoZWNrcG9pbnQoKS5cblx0ICpcblx0ICogQHBhcmFtIHt0eXBlb2YgTW9yZWJpdHN9IHNlbGZcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2lcblx0ICovXG5cdE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkID0gKHNlbGYpID0+IHtcblx0XHRpZiAoLS1Nb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQgPD0gMCAmJiBNb3JlYml0cy53aWtpLm5ick9mQ2hlY2twb2ludHNMZWZ0IDw9IDApIHtcblx0XHRcdE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLmV2ZW50KHNlbGYpO1xuXHRcdH1cblx0fTtcblx0Ly8gQ2hhbmdlIHBlciBhY3Rpb24gd2FudGVkXG5cdC8qKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraSAqL1xuXHRNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5ldmVudCA9ICgpID0+IHtcblx0XHRpZiAoTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQubm90aWNlKSB7XG5cdFx0XHRNb3JlYml0cy5zdGF0dXMuYWN0aW9uQ29tcGxldGVkKE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLm5vdGljZSk7XG5cdFx0fVxuXHRcdGlmIChNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5yZWRpcmVjdCkge1xuXHRcdFx0Ly8gaWYgaXQgaXNuJ3QgYSBVUkwsIG1ha2UgaXQgb25lLiBUT0RPOiBUaGlzIGJyZWFrcyBvbiB0aGUgYXJ0aWNsZXMgJ2h0dHA6Ly8nLCAnZnRwOi8vJywgYW5kIHNpbWlsYXIgb25lcy5cblx0XHRcdGlmICghL15cXHcrOlxcL1xcLy8udGVzdChNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5yZWRpcmVjdCkpIHtcblx0XHRcdFx0TW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQucmVkaXJlY3QgPSBtdy51dGlsLmdldFVybChNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5yZWRpcmVjdCk7XG5cdFx0XHRcdGlmIChNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5mb2xsb3dSZWRpcmVjdCA9PT0gZmFsc2UpIHtcblx0XHRcdFx0XHRNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5yZWRpcmVjdCArPSAnP3JlZGlyZWN0PW5vJztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdGxvY2F0aW9uID0gTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQucmVkaXJlY3Q7XG5cdFx0XHR9LCBNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC50aW1lT3V0KTtcblx0XHR9XG5cdH07XG5cdC8qKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraSAqL1xuXHRNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC50aW1lT3V0ID1cblx0XHR3aW5kb3cud3BBY3Rpb25Db21wbGV0ZWRUaW1lT3V0ID09PSB1bmRlZmluZWQgPyA1MDAwIDogd2luZG93LndwQWN0aW9uQ29tcGxldGVkVGltZU91dDtcblx0LyoqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpICovXG5cdE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLnJlZGlyZWN0ID0gbnVsbDtcblx0LyoqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpICovXG5cdE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLm5vdGljZSA9IG51bGw7XG5cdC8qKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraSAqL1xuXHRNb3JlYml0cy53aWtpLmFkZENoZWNrcG9pbnQgPSAoKSA9PiB7XG5cdFx0KytNb3JlYml0cy53aWtpLm5ick9mQ2hlY2twb2ludHNMZWZ0O1xuXHR9O1xuXHQvKiogQG1lbWJlcm9mIE1vcmViaXRzLndpa2kgKi9cblx0TW9yZWJpdHMud2lraS5yZW1vdmVDaGVja3BvaW50ID0gKCkgPT4ge1xuXHRcdGlmICgtLU1vcmViaXRzLndpa2kubmJyT2ZDaGVja3BvaW50c0xlZnQgPD0gMCAmJiBNb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQgPD0gMCkge1xuXHRcdFx0TW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQuZXZlbnQoKTtcblx0XHR9XG5cdH07XG5cdC8qICoqKioqKioqKioqKioqKiogTW9yZWJpdHMud2lraS5hcGkgKioqKioqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogQW4gZWFzeSB3YXkgdG8gdGFsayB0byB0aGUgTWVkaWFXaWtpIEFQSS4gIEFjY2VwdHMgZWl0aGVyIGpzb24gb3IgeG1sXG5cdCAqIChkZWZhdWx0KSBmb3JtYXRzOyBpZiBqc29uIGlzIHNlbGVjdGVkLCB3aWxsIGRlZmF1bHQgdG8gYGZvcm1hdHZlcnNpb249MmBcblx0ICogdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuICBTaW1pbGFybHksIGVuZm9yY2VzIG5ld2VyIGBlcnJvcmZvcm1hdGBzLFxuXHQgKiBkZWZhdWx0aW5nIHRvIGBodG1sYCBpZiB1bnNwZWNpZmllZC4gIGB1c2VsYW5nYCBlbmZvcmNlZCB0byB0aGUgd2lraSdzXG5cdCAqIGNvbnRlbnQgbGFuZ3VhZ2UuXG5cdCAqXG5cdCAqIEluIG5ldyBjb2RlLCB0aGUgdXNlIG9mIHRoZSBsYXN0IDMgcGFyYW1ldGVycyBzaG91bGQgYmUgYXZvaWRlZCwgaW5zdGVhZFxuXHQgKiB1c2Uge0BsaW5rIE1vcmViaXRzLndpa2kuYXBpI3NldFN0YXR1c0VsZW1lbnR8c2V0U3RhdHVzRWxlbWVudCgpfSB0byBiaW5kXG5cdCAqIHRoZSBzdGF0dXMgZWxlbWVudCAoaWYgbmVlZGVkKSBhbmQgdXNlIGAudGhlbigpYCBvciBgLmNhdGNoKClgIG9uIHRoZVxuXHQgKiBwcm9taXNlIHJldHVybmVkIGJ5IGBwb3N0KClgLCByYXRoZXIgdGhhbiBzcGVjaWZ5IHRoZSBgb25TdWNjZXNzYCBvclxuXHQgKiBgb25GYWlsdXJlYCBjYWxsYmFja3MuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpXG5cdCAqIEBjbGFzc1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gY3VycmVudEFjdGlvbiAtIFRoZSBjdXJyZW50IGFjdGlvbiAocmVxdWlyZWQpLlxuXHQgKiBAcGFyYW0ge09iamVjdH0gcXVlcnkgLSBUaGUgcXVlcnkgKHJlcXVpcmVkKS5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uU3VjY2Vzc10gLSBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHJlcXVlc3QgaXMgc3VjY2Vzc2Z1bC5cblx0ICogQHBhcmFtIHtNb3JlYml0cy5zdGF0dXN9IFtzdGF0dXNFbGVtZW50XSAtIEEgTW9yZWJpdHMuc3RhdHVzIG9iamVjdCB0byB1c2UgZm9yIHN0YXR1cyBtZXNzYWdlcy5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRXJyb3JdIC0gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgaWYgYW4gZXJyb3Igb2NjdXJzLlxuXHQgKi9cblx0TW9yZWJpdHMud2lraS5hcGkgPSBmdW5jdGlvbiAoY3VycmVudEFjdGlvbiwgcXVlcnksIG9uU3VjY2Vzcywgc3RhdHVzRWxlbWVudCwgb25FcnJvcikge1xuXHRcdHRoaXMuY3VycmVudEFjdGlvbiA9IGN1cnJlbnRBY3Rpb247XG5cdFx0dGhpcy5xdWVyeSA9IHF1ZXJ5O1xuXHRcdHRoaXMucXVlcnkuYXNzZXJ0ID0gJ3VzZXInO1xuXHRcdC8vIEVuZm9yY2UgbmV3ZXIgZXJyb3IgZm9ybWF0cywgcHJlZmVycmluZyBodG1sXG5cdFx0aWYgKCFxdWVyeS5lcnJvcmZvcm1hdCB8fCAhWyd3aWtpdGV4dCcsICdwbGFpbnRleHQnXS5pbmNsdWRlcyhxdWVyeS5lcnJvcmZvcm1hdCkpIHtcblx0XHRcdHRoaXMucXVlcnkuZXJyb3Jmb3JtYXQgPSAnaHRtbCc7XG5cdFx0fVxuXHRcdC8vIEV4cGxpY2l0bHkgdXNlIHRoZSB3aWtpJ3MgY29udGVudCBsYW5ndWFnZSB0byBtaW5pbWl6ZSBjb25mdXNpb24sXG5cdFx0Ly8gc2VlICMxMTc5IGZvciBkaXNjdXNzaW9uXG5cdFx0dGhpcy5xdWVyeS51c2VsYW5nIHx8PSAnY29udGVudCc7IC8vIFVzZSB3Z1VzZXJMYW5ndWFnZSBmb3IgcHJldmlld1xuXHRcdHRoaXMucXVlcnkuZXJyb3JsYW5nID0gJ3VzZWxhbmcnO1xuXHRcdHRoaXMucXVlcnkuZXJyb3JzdXNlbG9jYWwgPSAxO1xuXHRcdHRoaXMub25TdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdHRoaXMub25FcnJvciA9IG9uRXJyb3I7XG5cdFx0aWYgKHN0YXR1c0VsZW1lbnQpIHtcblx0XHRcdHRoaXMuc2V0U3RhdHVzRWxlbWVudChzdGF0dXNFbGVtZW50KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zdGF0ZWxlbSA9IG5ldyBNb3JlYml0cy5zdGF0dXMoY3VycmVudEFjdGlvbik7XG5cdFx0fVxuXHRcdC8vIEpTT04gaXMgdXNlZCB0aHJvdWdob3V0IE1vcmViaXRzL1R3aW5rbGUsIGJ1dCB4bWwgcmVtYWlucyB0aGUgZGVmYXVsdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcblx0XHRpZiAoIXF1ZXJ5LmZvcm1hdCkge1xuXHRcdFx0dGhpcy5xdWVyeS5mb3JtYXQgPSAneG1sJztcblx0XHR9IGVsc2UgaWYgKHF1ZXJ5LmZvcm1hdCA9PT0gJ2pzb24nICYmICFxdWVyeS5mb3JtYXR2ZXJzaW9uKSB7XG5cdFx0XHR0aGlzLnF1ZXJ5LmZvcm1hdHZlcnNpb24gPSAnMic7XG5cdFx0fSBlbHNlIGlmICghWyd4bWwnLCAnanNvbiddLmluY2x1ZGVzKHF1ZXJ5LmZvcm1hdCkpIHtcblx0XHRcdHRoaXMuc3RhdGVsZW0uZXJyb3IoJ0ludmFsaWQgQVBJIGZvcm1hdDogb25seSB4bWwgYW5kIGpzb24gYXJlIHN1cHBvcnRlZC4nKTtcblx0XHR9XG5cdFx0Ly8gSWdub3JlIHRhZ3MgZm9yIHF1ZXJpZXMgYW5kIG1vc3QgY29tbW9uIHVuc3VwcG9ydGVkIGFjdGlvbnMsIHByb2R1Y2VzIHdhcm5pbmdzXG5cdFx0aWYgKHF1ZXJ5LmFjdGlvbiAmJiBbJ3F1ZXJ5JywgJ3dhdGNoJ10uaW5jbHVkZXMocXVlcnkuYWN0aW9uKSkge1xuXHRcdFx0ZGVsZXRlIHF1ZXJ5LnRhZ3M7XG5cdFx0fSBlbHNlIGlmICghcXVlcnkudGFncyAmJiBtb3JlYml0c1dpa2lDaGFuZ2VUYWcpIHtcblx0XHRcdHF1ZXJ5LnRhZ3MgPSBtb3JlYml0c1dpa2lDaGFuZ2VUYWc7XG5cdFx0fVxuXHR9O1xuXHRNb3JlYml0cy53aWtpLmFwaS5wcm90b3R5cGUgPSB7XG5cdFx0Y3VycmVudEFjdGlvbjogJycsXG5cdFx0b25TdWNjZXNzOiBudWxsLFxuXHRcdG9uRXJyb3I6IG51bGwsXG5cdFx0cGFyZW50OiB3aW5kb3csXG5cdFx0Ly8gdXNlIGdsb2JhbCBjb250ZXh0IGlmIHRoZXJlIGlzIG5vIHBhcmVudCBvYmplY3Rcblx0XHRxdWVyeTogbnVsbCxcblx0XHRyZXNwb25zZTogbnVsbCxcblx0XHRyZXNwb25zZVhNTDogbnVsbCxcblx0XHQvLyB1c2UgYHJlc3BvbnNlYCBpbnN0ZWFkOyByZXRhaW5lZCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcblx0XHRzdGF0ZWxlbTogbnVsbCxcblx0XHQvLyB0aGlzIG5vbi1zdGFuZGFyZCBuYW1lIGtlcHQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG5cdFx0c3RhdHVzVGV4dDogbnVsbCxcblx0XHQvLyByZXN1bHQgcmVjZWl2ZWQgZnJvbSB0aGUgQVBJLCBub3JtYWxseSBcInN1Y2Nlc3NcIiBvciBcImVycm9yXCJcblx0XHRlcnJvckNvZGU6IG51bGwsXG5cdFx0Ly8gc2hvcnQgdGV4dCBlcnJvciBjb2RlLCBpZiBhbnksIGFzIGRvY3VtZW50ZWQgaW4gdGhlIE1lZGlhV2lraSBBUElcblx0XHRlcnJvclRleHQ6IG51bGwsXG5cdFx0Ly8gZnVsbCBlcnJvciBkZXNjcmlwdGlvbiwgaWYgYW55XG5cdFx0YmFkdG9rZW5SZXRyeTogZmFsc2UsXG5cdFx0Ly8gc2V0IHRvIHRydWUgaWYgdGhpcyBvbiBhIHJldHJ5IGF0dGVtcHRlZCBhZnRlciBhIGJhZHRva2VuIGVycm9yXG5cdFx0LyoqXG5cdFx0ICogS2VlcCB0cmFjayBvZiBwYXJlbnQgb2JqZWN0IGZvciBjYWxsYmFja3MuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0geyp9IHBhcmVudFxuXHRcdCAqL1xuXHRcdHNldFBhcmVudChwYXJlbnQpIHtcblx0XHRcdHRoaXMucGFyZW50ID0gcGFyZW50O1xuXHRcdH0sXG5cdFx0LyoqIEBwYXJhbSB7TW9yZWJpdHMuc3RhdHVzfSBzdGF0dXNFbGVtZW50ICovXG5cdFx0c2V0U3RhdHVzRWxlbWVudChzdGF0dXNFbGVtZW50KSB7XG5cdFx0XHR0aGlzLnN0YXRlbGVtID0gc3RhdHVzRWxlbWVudDtcblx0XHRcdHRoaXMuc3RhdGVsZW0uc3RhdHVzKHRoaXMuY3VycmVudEFjdGlvbik7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBDYXJyeSBvdXQgdGhlIHJlcXVlc3QuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gY2FsbGVyQWpheFBhcmFtZXRlcnMgLSBEbyBub3Qgc3BlY2lmeSBhIHBhcmFtZXRlciB1bmxlc3MgeW91IHJlYWxseVxuXHRcdCAqIHJlYWxseSB3YW50IHRvIGdpdmUgalF1ZXJ5IHNvbWUgZXh0cmEgcGFyYW1ldGVycy5cblx0XHQgKiBAcmV0dXJucyB7cHJvbWlzZX0gLSBBIGpRdWVyeSBwcm9taXNlIG9iamVjdCB0aGF0IGlzIHJlc29sdmVkIG9yIHJlamVjdGVkIHdpdGggdGhlIGFwaSBvYmplY3QuXG5cdFx0ICovXG5cdFx0cG9zdChjYWxsZXJBamF4UGFyYW1ldGVycykge1xuXHRcdFx0KytNb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQ7XG5cdFx0XHRjb25zdCBxdWVyeVN0cmluZ0FyciA9IFtdO1xuXHRcdFx0Zm9yIChjb25zdCBbaSwgdmFsXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLnF1ZXJ5KSkge1xuXHRcdFx0XHRpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG5cdFx0XHRcdFx0cXVlcnlTdHJpbmdBcnJbcXVlcnlTdHJpbmdBcnIubGVuZ3RoXSA9XG5cdFx0XHRcdFx0XHRgJHtlbmNvZGVVUklDb21wb25lbnQoaSl9PSR7dmFsLm1hcChlbmNvZGVVUklDb21wb25lbnQpLmpvaW4oJ3wnKX1gO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHZhbCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0cXVlcnlTdHJpbmdBcnJbcXVlcnlTdHJpbmdBcnIubGVuZ3RoXSA9IGAke2VuY29kZVVSSUNvbXBvbmVudChpKX09JHtlbmNvZGVVUklDb21wb25lbnQodmFsKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBxdWVyeVN0cmluZyA9IHF1ZXJ5U3RyaW5nQXJyLmpvaW4oJyYnKS5yZXBsYWNlKC9eKC4qPykoXFxidG9rZW49W14mXSopJiguKikvLCAnJDEkMyYkMicpO1xuXHRcdFx0Ly8gdG9rZW4gc2hvdWxkIGFsd2F5cyBiZSB0aGUgbGFzdCBpdGVtIGluIHRoZSBxdWVyeSBzdHJpbmcgKGJ1ZyBUVy1CLTAwMTMpXG5cdFx0XHRjb25zdCBhamF4cGFyYW1zID0ge1xuXHRcdFx0XHRjb250ZXh0OiB0aGlzLFxuXHRcdFx0XHR0eXBlOiB0aGlzLnF1ZXJ5LmFjdGlvbiA9PT0gJ3F1ZXJ5JyA/ICdHRVQnIDogJ1BPU1QnLFxuXHRcdFx0XHR1cmw6IG13LnV0aWwud2lraVNjcmlwdCgnYXBpJyksXG5cdFx0XHRcdGRhdGE6IHF1ZXJ5U3RyaW5nLFxuXHRcdFx0XHRkYXRhVHlwZTogdGhpcy5xdWVyeS5mb3JtYXQsXG5cdFx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0XHQnQXBpLVVzZXItQWdlbnQnOiBtb3JlYml0c1dpa2lBcGlVc2VyQWdlbnQsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdC4uLmNhbGxlckFqYXhQYXJhbWV0ZXJzLFxuXHRcdFx0fTtcblx0XHRcdHJldHVybiAkLmFqYXgoYWpheHBhcmFtcykudGhlbihcblx0XHRcdFx0ZnVuY3Rpb24gb25BUElzdWNjZXNzKHJlc3BvbnNlLCBzdGF0dXNUZXh0KSB7XG5cdFx0XHRcdFx0dGhpcy5zdGF0dXNUZXh0ID0gc3RhdHVzVGV4dDtcblx0XHRcdFx0XHR0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2U7XG5cdFx0XHRcdFx0dGhpcy5yZXNwb25zZVhNTCA9IHJlc3BvbnNlO1xuXHRcdFx0XHRcdC8vIExpbWl0IHRvIGZpcnN0IGVycm9yXG5cdFx0XHRcdFx0aWYgKHRoaXMucXVlcnkuZm9ybWF0ID09PSAnanNvbicpIHtcblx0XHRcdFx0XHRcdHRoaXMuZXJyb3JDb2RlID0gcmVzcG9uc2UuZXJyb3JzICYmIHJlc3BvbnNlLmVycm9yc1swXS5jb2RlO1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMucXVlcnkuZXJyb3Jmb3JtYXQgPT09ICdodG1sJykge1xuXHRcdFx0XHRcdFx0XHR0aGlzLmVycm9yVGV4dCA9IHJlc3BvbnNlLmVycm9ycyAmJiByZXNwb25zZS5lcnJvcnNbMF0uaHRtbDtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5xdWVyeS5lcnJvcmZvcm1hdCA9PT0gJ3dpa2l0ZXh0JyB8fCB0aGlzLnF1ZXJ5LmVycm9yZm9ybWF0ID09PSAncGxhaW50ZXh0Jykge1xuXHRcdFx0XHRcdFx0XHR0aGlzLmVycm9yVGV4dCA9IHJlc3BvbnNlLmVycm9ycyAmJiByZXNwb25zZS5lcnJvcnNbMF0udGV4dDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5lcnJvckNvZGUgPSAkKHJlc3BvbnNlKS5maW5kKCdlcnJvcnMgZXJyb3InKS5lcSgwKS5hdHRyKCdjb2RlJyk7XG5cdFx0XHRcdFx0XHQvLyBTdWZmaWNpZW50IGZvciBodG1sLCB3aWtpdGV4dCwgb3IgcGxhaW50ZXh0IGVycm9yZm9ybWF0c1xuXHRcdFx0XHRcdFx0dGhpcy5lcnJvclRleHQgPSAkKHJlc3BvbnNlKS5maW5kKCdlcnJvcnMgZXJyb3InKS5lcSgwKS50ZXh0KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICh0eXBlb2YgdGhpcy5lcnJvckNvZGUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0XHQvLyB0aGUgQVBJIGRpZG4ndCBsaWtlIHdoYXQgd2UgdG9sZCBpdCwgZS5nLiwgYmFkIGVkaXQgdG9rZW4gb3IgYW4gZXJyb3IgY3JlYXRpbmcgYSBwYWdlXG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5yZXR1cm5FcnJvcihjYWxsZXJBamF4UGFyYW1ldGVycyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIGludm9rZSBzdWNjZXNzIGNhbGxiYWNrIGlmIG9uZSB3YXMgc3VwcGxpZWRcblx0XHRcdFx0XHRpZiAodGhpcy5vblN1Y2Nlc3MpIHtcblx0XHRcdFx0XHRcdC8vIHNldCB0aGUgY2FsbGJhY2sgY29udGV4dCB0byB0aGlzLnBhcmVudCBmb3IgbmV3IGNvZGUgYW5kIHN1cHBseSB0aGUgQVBJIG9iamVjdFxuXHRcdFx0XHRcdFx0Ly8gYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBjYWxsYmFjayAoZm9yIGxlZ2FjeSBjb2RlKVxuXHRcdFx0XHRcdFx0dGhpcy5vblN1Y2Nlc3MuY2FsbCh0aGlzLnBhcmVudCwgdGhpcyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGVsZW0uaW5mbygn5a6M5oiQJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkKCk7XG5cdFx0XHRcdFx0cmV0dXJuICQuRGVmZXJyZWQoKS5yZXNvbHZlV2l0aCh0aGlzLnBhcmVudCwgW3RoaXNdKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0Ly8gb25seSBuZXR3b3JrIGFuZCBzZXJ2ZXIgZXJyb3JzIHJlYWNoIGhlcmUgLSBjb21wbGFpbnRzIGZyb20gdGhlIEFQSSBpdHNlbGYgYXJlIGNhdWdodCBpbiBzdWNjZXNzKClcblx0XHRcdFx0ZnVuY3Rpb24gb25BUElmYWlsdXJlKGVycm9yLCBzdGF0dXNUZXh0LCBlcnJvclRocm93bikge1xuXHRcdFx0XHRcdHRoaXMuc3RhdHVzVGV4dCA9IHN0YXR1c1RleHQ7XG5cdFx0XHRcdFx0dGhpcy5lcnJvclRocm93biA9IGVycm9yVGhyb3duOyAvLyBmcmVxdWVudGx5IHVuZGVmaW5lZFxuXHRcdFx0XHRcdHRoaXMuZXJyb3JUZXh0ID1cblx0XHRcdFx0XHRcdHN0YXR1c1RleHQgK1xuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCflnKjosIPnlKhBUEnml7blj5HnlJ/kuobplJnor6/igJwnLCAn5Zyo5ZG85Y+rQVBJ5pmC55m855Sf5LqG6Yyv6Kqk44CMJykgK1xuXHRcdFx0XHRcdFx0ZXJyb3Iuc3RhdHVzVGV4dCArXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+KAneOAgicsICfjgI3jgIInKTtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5yZXR1cm5FcnJvcigpO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0cmV0dXJuRXJyb3IoY2FsbGVyQWpheFBhcmFtZXRlcnMpIHtcblx0XHRcdGlmICh0aGlzLmVycm9yQ29kZSA9PT0gJ2JhZHRva2VuJyAmJiAhdGhpcy5iYWR0b2tlblJldHJ5KSB7XG5cdFx0XHRcdHRoaXMuc3RhdGVsZW0ud2Fybih3aW5kb3cud2dVTFMoJ+aXoOaViOS7pOeJjO+8jOiOt+WPluaWsOeahOS7pOeJjOW5tumHjeivleKApuKApicsICfnhKHmlYjmrIrmnZbvvIzlj5blvpfmlrDnmoTmrIrmnZbkuKbph43oqabigKbigKYnKSk7XG5cdFx0XHRcdHRoaXMuYmFkdG9rZW5SZXRyeSA9IHRydWU7XG5cdFx0XHRcdC8vIEdldCBhIG5ldyBDU1JGIHRva2VuIGFuZCByZXRyeS4gSWYgdGhlIG9yaWdpbmFsIGFjdGlvbiBuZWVkcyBhIGRpZmZlcmVudFxuXHRcdFx0XHQvLyB0eXBlIG9mIGFjdGlvbiB0aGFuIENTUkYsIHdlIGRvIG9uZSBwb2ludGxlc3MgcmV0cnkgYmVmb3JlIGJhaWxpbmcgb3V0XG5cdFx0XHRcdHJldHVybiBNb3JlYml0cy53aWtpLmFwaS5nZXRUb2tlbigpLnRoZW4oKHRva2VuKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5xdWVyeS50b2tlbiA9IHRva2VuO1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLnBvc3QoY2FsbGVyQWpheFBhcmFtZXRlcnMpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdHRoaXMuc3RhdGVsZW0uZXJyb3IoYCR7dGhpcy5lcnJvclRleHR977yIJHt0aGlzLmVycm9yQ29kZX3vvIlgKTtcblx0XHRcdC8vIGludm9rZSBmYWlsdXJlIGNhbGxiYWNrIGlmIG9uZSB3YXMgc3VwcGxpZWRcblx0XHRcdGlmICh0aGlzLm9uRXJyb3IpIHtcblx0XHRcdFx0Ly8gc2V0IHRoZSBjYWxsYmFjayBjb250ZXh0IHRvIHRoaXMucGFyZW50IGZvciBuZXcgY29kZSBhbmQgc3VwcGx5IHRoZSBBUEkgb2JqZWN0XG5cdFx0XHRcdC8vIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgY2FsbGJhY2sgZm9yIGxlZ2FjeSBjb2RlXG5cdFx0XHRcdHRoaXMub25FcnJvci5jYWxsKHRoaXMucGFyZW50LCB0aGlzKTtcblx0XHRcdH1cblx0XHRcdC8vIGRvbid0IGNvbXBsZXRlIHRoZSBhY3Rpb24gc28gdGhhdCB0aGUgZXJyb3IgcmVtYWlucyBkaXNwbGF5ZWRcblx0XHRcdHJldHVybiAkLkRlZmVycmVkKCkucmVqZWN0V2l0aCh0aGlzLnBhcmVudCwgW3RoaXNdKTtcblx0XHR9LFxuXHRcdGdldFN0YXR1c0VsZW1lbnQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zdGF0ZWxlbTtcblx0XHR9LFxuXHRcdGdldEVycm9yQ29kZSgpIHtcblx0XHRcdHJldHVybiB0aGlzLmVycm9yQ29kZTtcblx0XHR9LFxuXHRcdGdldEVycm9yVGV4dCgpIHtcblx0XHRcdHJldHVybiB0aGlzLmVycm9yVGV4dDtcblx0XHR9LFxuXHRcdGdldFhNTCgpIHtcblx0XHRcdC8vIHJldGFpbmVkIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSwgdXNlIGdldFJlc3BvbnNlKCkgaW5zdGVhZFxuXHRcdFx0cmV0dXJuIHRoaXMucmVzcG9uc2VYTUw7XG5cdFx0fSxcblx0XHRnZXRSZXNwb25zZSgpIHtcblx0XHRcdHJldHVybiB0aGlzLnJlc3BvbnNlO1xuXHRcdH0sXG5cdH07XG5cdC8qKlxuXHQgKiBSZXRyaWV2ZXMgd2lraXRleHQgZnJvbSBhIHBhZ2UuIENhY2hpbmcgZW5hYmxlZCwgZHVyYXRpb24gMSBkYXkuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZVxuXHQgKi9cblx0TW9yZWJpdHMud2lraS5nZXRDYWNoZWRKc29uID0gKHRpdGxlKSA9PiB7XG5cdFx0Y29uc3QgcXVlcnkgPSB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRcdHRpdGxlczogdGl0bGUsXG5cdFx0XHRydnNsb3RzOiAnbWFpbicsXG5cdFx0XHRydnByb3A6ICdjb250ZW50Jyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0c21heGFnZTogJzM2MDAnLFxuXHRcdFx0bWF4YWdlOiAnMzYwMCcsXG5cdFx0fTtcblxuXHRcdHJldHVybiBuZXcgTW9yZWJpdHMud2lraS5hcGkoJycsIHF1ZXJ5KS5wb3N0KCkudGhlbigoYXBpb2JqKSA9PiB7XG5cdFx0XHRhcGlvYmouZ2V0U3RhdHVzRWxlbWVudCgpLnVubGluaygpO1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhcGlvYmouZ2V0UmVzcG9uc2UoKTtcblx0XHRcdGNvbnN0IHdpa2l0ZXh0ID0gcmVzcG9uc2UucXVlcnkucGFnZXNbMF0ucmV2aXNpb25zWzBdLnNsb3RzLm1haW4uY29udGVudDtcblx0XHRcdHJldHVybiBKU09OLnBhcnNlKHdpa2l0ZXh0KTtcblx0XHR9KTtcblx0fTtcblx0bGV0IG1vcmViaXRzV2lraUFwaVVzZXJBZ2VudCA9ICdRaXV3ZW4vMS4xIChtb3JlYml0cy5qcyknO1xuXHQvKipcblx0ICogU2V0IHRoZSBjdXN0b20gdXNlciBhZ2VudCBoZWFkZXIsIHdoaWNoIGlzIHVzZWQgZm9yIHNlcnZlci1zaWRlIGxvZ2dpbmcuXG5cdCAqIE5vdGUgdGhhdCBkb2luZyBzbyB3aWxsIHNldCB0aGUgdXNlcmFnZW50IGZvciBldmVyeSBgTW9yZWJpdHMud2lraS5hcGlgXG5cdCAqIHByb2Nlc3MgcGVyZm9ybWVkIHRoZXJlYWZ0ZXIuXG5cdCAqXG5cdCAqIEBzZWUge0BsaW5rIGh0dHBzOi8vbGlzdHMud2lraW1lZGlhLm9yZy9waXBlcm1haWwvbWVkaWF3aWtpLWFwaS1hbm5vdW5jZS8yMDE0LU5vdmVtYmVyLzAwMDA3NS5odG1sfVxuXHQgKiBmb3Igb3JpZ2luYWwgYW5ub3VuY2VtZW50LlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraS5hcGlcblx0ICogQHBhcmFtIHtzdHJpbmd9IFt1YT1Zc0FyY2hpdmVzLzEuMSAobW9yZWJpdHMuanMpXSAtIFVzZXIgYWdlbnQuICBUaGUgZGVmYXVsdFxuXHQgKiB2YWx1ZSBvZiBgbW9yZWJpdHMuanNgIHdpbGwgYmUgYXBwZW5kZWQgdG8gYW55IHByb3ZpZGVkXG5cdCAqIHZhbHVlLlxuXHQgKi9cblx0TW9yZWJpdHMud2lraS5hcGkuc2V0QXBpVXNlckFnZW50ID0gKHVhKSA9PiB7XG5cdFx0bW9yZWJpdHNXaWtpQXBpVXNlckFnZW50ID0gYFlzQXJjaGl2ZXMvMS4xIChtb3JlYml0cy5qcyR7dWEgPyBgOyAke3VhfWAgOiAnJ30pYDtcblx0fTtcblx0LyoqXG5cdCAqIENoYW5nZS9yZXZpc2lvbiB0YWcgYXBwbGllZCB0byBNb3JlYml0cyBhY3Rpb25zIHdoZW4gbm8gb3RoZXIgdGFncyBhcmUgc3BlY2lmaWVkLlxuXHQgKiBVbnVzZWQgYnkgZGVmYXVsdC5cblx0ICpcblx0ICogQGNvbnN0YW50XG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpLmFwaVxuXHQgKiBAdHlwZSB7c3RyaW5nfVxuXHQgKi9cblx0Y29uc3QgbW9yZWJpdHNXaWtpQ2hhbmdlVGFnID0gJyc7XG5cdC8qKlxuXHQgKiBHZXQgYSBuZXcgQ1NSRiB0b2tlbiBvbiBlbmNvdW50ZXJpbmcgdG9rZW4gZXJyb3JzLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraS5hcGlcblx0ICogQHJldHVybnMge3N0cmluZ30gTWVkaWFXaWtpIENTUkYgdG9rZW4uXG5cdCAqL1xuXHRNb3JlYml0cy53aWtpLmFwaS5nZXRUb2tlbiA9ICgpID0+IHtcblx0XHRjb25zdCB0b2tlbkFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaSh3aW5kb3cud2dVTFMoJ+iOt+WPluS7pOeJjCcsICflj5blvpfmrIrmnZYnKSwge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0bWV0YTogJ3Rva2VucycsXG5cdFx0XHR0eXBlOiAnY3NyZicsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHR9KTtcblx0XHRyZXR1cm4gdG9rZW5BcGkucG9zdCgpLnRoZW4oKGFwaW9iaikgPT4ge1xuXHRcdFx0cmV0dXJuIGFwaW9iai5yZXNwb25zZS5xdWVyeS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdH0pO1xuXHR9O1xuXHQvKiAqKioqKioqKioqKioqKioqIE1vcmViaXRzLndpa2kucGFnZSAqKioqKioqKioqKioqKioqICovXG5cdC8qKlxuXHQgKiBVc2UgdGhlIE1lZGlhV2lraSBBUEkgdG8gbG9hZCBhIHBhZ2UgYW5kIG9wdGlvbmFsbHkgZWRpdCBpdCwgbW92ZSBpdCwgZXRjLlxuXHQgKlxuXHQgKiBDYWxsZXJzIGFyZSBub3QgcGVybWl0dGVkIHRvIGRpcmVjdGx5IGFjY2VzcyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIGNsYXNzIVxuXHQgKiBBbGwgcHJvcGVydHkgYWNjZXNzIGlzIHRocm91Z2ggdGhlIGFwcHJvcHJpYXRlIGdldF9fXygpIG9yIHNldF9fXygpIG1ldGhvZC5cblx0ICpcblx0ICogQ2FsbGVycyBzaG91bGQgc2V0IHtAbGluayBNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5ub3RpY2V9IGFuZCB7QGxpbmsgTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQucmVkaXJlY3R9XG5cdCAqIGJlZm9yZSB0aGUgZmlyc3QgY2FsbCB0byB7QGxpbmsgTW9yZWJpdHMud2lraS5wYWdlLmxvYWQoKX0uXG5cdCAqXG5cdCAqIEVhY2ggb2YgdGhlIGNhbGxiYWNrIGZ1bmN0aW9ucyB0YWtlcyBvbmUgcGFyYW1ldGVyLCB3aGljaCBpcyBhXG5cdCAqIHJlZmVyZW5jZSB0byB0aGUgTW9yZWJpdHMud2lraS5wYWdlIG9iamVjdCB0aGF0IHJlZ2lzdGVyZWQgdGhlIGNhbGxiYWNrLlxuXHQgKiBDYWxsYmFjayBmdW5jdGlvbnMgbWF5IGludm9rZSBhbnkgTW9yZWJpdHMud2lraS5wYWdlIHByb3RvdHlwZSBtZXRob2QgdXNpbmcgdGhpcyByZWZlcmVuY2UuXG5cdCAqXG5cdCAqXG5cdCAqIENhbGwgc2VxdWVuY2UgZm9yIGNvbW1vbiBvcGVyYXRpb25zIChvcHRpb25hbCBmaW5hbCB1c2VyIGNhbGxiYWNrcyBub3Qgc2hvd24pOlxuXHQgKlxuXHQgKiAtIEVkaXQgY3VycmVudCBjb250ZW50cyBvZiBhIHBhZ2UgKG5vIGVkaXQgY29uZmxpY3QpOlxuXHQgKiBgLmxvYWQodXNlclRleHRFZGl0Q2FsbGJhY2spIC0+IGN0eC5sb2FkQXBpLnBvc3QoKSAtPlxuXHQgKiBjdHgubG9hZEFwaS5wb3N0LnN1Y2Nlc3MoKSAtPiBjdHguZm5Mb2FkU3VjY2VzcygpIC0+IHVzZXJUZXh0RWRpdENhbGxiYWNrKCkgLT5cblx0ICogLnNhdmUoKSAtPiBjdHguc2F2ZUFwaS5wb3N0KCkgLT4gY3R4LmxvYWRBcGkucG9zdC5zdWNjZXNzKCkgLT4gY3R4LmZuU2F2ZVN1Y2Nlc3MoKWBcblx0ICpcblx0ICogLSBFZGl0IGN1cnJlbnQgY29udGVudHMgb2YgYSBwYWdlICh3aXRoIGVkaXQgY29uZmxpY3QpOlxuXHQgKiBgLmxvYWQodXNlclRleHRFZGl0Q2FsbGJhY2spIC0+IGN0eC5sb2FkQXBpLnBvc3QoKSAtPlxuXHQgKiBjdHgubG9hZEFwaS5wb3N0LnN1Y2Nlc3MoKSAtPiBjdHguZm5Mb2FkU3VjY2VzcygpIC0+IHVzZXJUZXh0RWRpdENhbGxiYWNrKCkgLT5cblx0ICogLnNhdmUoKSAtPiBjdHguc2F2ZUFwaS5wb3N0KCkgLT4gY3R4LmxvYWRBcGkucG9zdC5zdWNjZXNzKCkgLT5cblx0ICogY3R4LmZuU2F2ZUVycm9yKCkgLT4gY3R4LmxvYWRBcGkucG9zdCgpIC0+IGN0eC5sb2FkQXBpLnBvc3Quc3VjY2VzcygpIC0+XG5cdCAqIGN0eC5mbkxvYWRTdWNjZXNzKCkgLT4gdXNlclRleHRFZGl0Q2FsbGJhY2soKSAtPiAuc2F2ZSgpIC0+XG5cdCAqIGN0eC5zYXZlQXBpLnBvc3QoKSAtPiBjdHgubG9hZEFwaS5wb3N0LnN1Y2Nlc3MoKSAtPiBjdHguZm5TYXZlU3VjY2VzcygpYFxuXHQgKlxuXHQgKiAtIEFwcGVuZCB0byBhIHBhZ2UgKHNpbWlsYXIgZm9yIHByZXBlbmQgYW5kIG5ld1NlY3Rpb24pOlxuXHQgKiBgLmFwcGVuZCgpIC0+IGN0eC5sb2FkQXBpLnBvc3QoKSAtPiBjdHgubG9hZEFwaS5wb3N0LnN1Y2Nlc3MoKSAtPlxuXHQgKiBjdHguZm5Mb2FkU3VjY2VzcygpIC0+IGN0eC5mbkF1dG9TYXZlKCkgLT4gLnNhdmUoKSAtPiBjdHguc2F2ZUFwaS5wb3N0KCkgLT5cblx0ICogY3R4LmxvYWRBcGkucG9zdC5zdWNjZXNzKCkgLT4gY3R4LmZuU2F2ZVN1Y2Nlc3MoKWBcblx0ICpcblx0ICogTm90ZXM6XG5cdCAqIDEuIEFsbCBmdW5jdGlvbnMgZm9sbG93aW5nIE1vcmViaXRzLndpa2kuYXBpLnBvc3QoKSBhcmUgaW52b2tlZCBhc3luY2hyb25vdXNseSBmcm9tIHRoZSBqUXVlcnkgQUpBWCBsaWJyYXJ5LlxuXHQgKiAyLiBUaGUgc2VxdWVuY2UgZm9yIGFwcGVuZC9wcmVwZW5kL25ld1NlY3Rpb24gY291bGQgYmUgc2xpZ2h0bHkgc2hvcnRlbmVkLFxuXHQgKiBidXQgaXQgd291bGQgcmVxdWlyZSBzaWduaWZpY2FudCBkdXBsaWNhdGlvbiBvZiBjb2RlIGZvciBsaXR0bGUgYmVuZWZpdC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2lcblx0ICogQGNsYXNzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBwYWdlTmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBwYWdlLCBwcmVmaXhlZCBieSB0aGUgbmFtZXNwYWNlIChpZiBhbnkpLlxuXHQgKiBGb3IgdGhlIGN1cnJlbnQgcGFnZSwgdXNlIGBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJylgLlxuXHQgKiBAcGFyYW0ge3N0cmluZ3xNb3JlYml0cy5zdGF0dXN9IFtzdGF0dXNdIC0gQSBzdHJpbmcgZGVzY3JpYmluZyB0aGUgYWN0aW9uIGFib3V0IHRvIGJlIHVuZGVydGFrZW4sXG5cdCAqIG9yIGEgTW9yZWJpdHMuc3RhdHVzIG9iamVjdFxuXHQgKi9cblx0TW9yZWJpdHMud2lraS5wYWdlID0gZnVuY3Rpb24gKHBhZ2VOYW1lLCBzdGF0dXMpIHtcblx0XHRzdGF0dXMgfHw9IHdpbmRvdy53Z1VMUygn5omT5byA6aG16Z2i4oCcJywgJ+aJk+mWi+mggemdouOAjCcpICsgcGFnZU5hbWUgKyB3aW5kb3cud2dVTFMoJ+KAnScsICfjgI0nKTtcblx0XHQvKipcblx0XHQgKiBQcml2YXRlIGNvbnRleHQgdmFyaWFibGVzLlxuXHRcdCAqXG5cdFx0ICogVGhpcyBjb250ZXh0IGlzIG5vdCB2aXNpYmxlIHRvIHRoZSBvdXRzaWRlLCB0aHVzIGFsbCB0aGUgZGF0YSBoZXJlXG5cdFx0ICogbXVzdCBiZSBhY2Nlc3NlZCB2aWEgZ2V0dGVyIGFuZCBzZXR0ZXIgZnVuY3Rpb25zLlxuXHRcdCAqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRjb25zdCBjdHggPSB7XG5cdFx0XHQvLyBiYWNraW5nIGZpZWxkcyBmb3IgcHVibGljIHByb3BlcnRpZXNcblx0XHRcdHBhZ2VOYW1lLFxuXHRcdFx0cGFnZUV4aXN0czogZmFsc2UsXG5cdFx0XHRlZGl0U3VtbWFyeTogbnVsbCxcblx0XHRcdGNoYW5nZVRhZ3M6IG51bGwsXG5cdFx0XHR0ZXN0QWN0aW9uczogbnVsbCxcblx0XHRcdC8vIGFycmF5IGlmIGFueSB2YWxpZCBhY3Rpb25zXG5cdFx0XHRjYWxsYmFja1BhcmFtZXRlcnM6IG51bGwsXG5cdFx0XHRzdGF0dXNFbGVtZW50OiBzdGF0dXMgaW5zdGFuY2VvZiBNb3JlYml0cy5zdGF0dXMgPyBzdGF0dXMgOiBuZXcgTW9yZWJpdHMuc3RhdHVzKHN0YXR1cyksXG5cdFx0XHQvLyAtIGVkaXRcblx0XHRcdHBhZ2VUZXh0OiBudWxsLFxuXHRcdFx0ZWRpdE1vZGU6ICdhbGwnLFxuXHRcdFx0Ly8gc2F2ZSgpIHJlcGxhY2VzIGVudGlyZSBjb250ZW50cyBvZiB0aGUgcGFnZSBieSBkZWZhdWx0XG5cdFx0XHRhcHBlbmRUZXh0OiBudWxsLFxuXHRcdFx0Ly8gY2FuJ3QgcmV1c2UgcGFnZVRleHQgZm9yIHRoaXMgYmVjYXVzZSBwYWdlVGV4dCBpcyBuZWVkZWQgdG8gZm9sbG93IGEgcmVkaXJlY3Rcblx0XHRcdHByZXBlbmRUZXh0OiBudWxsLFxuXHRcdFx0Ly8gY2FuJ3QgcmV1c2UgcGFnZVRleHQgZm9yIHRoaXMgYmVjYXVzZSBwYWdlVGV4dCBpcyBuZWVkZWQgdG8gZm9sbG93IGEgcmVkaXJlY3Rcblx0XHRcdG5ld1NlY3Rpb25UZXh0OiBudWxsLFxuXHRcdFx0bmV3U2VjdGlvblRpdGxlOiBudWxsLFxuXHRcdFx0Y3JlYXRlT3B0aW9uOiBudWxsLFxuXHRcdFx0bWlub3JFZGl0OiBmYWxzZSxcblx0XHRcdGJvdEVkaXQ6IGZhbHNlLFxuXHRcdFx0cGFnZVNlY3Rpb246IG51bGwsXG5cdFx0XHRtYXhDb25mbGljdFJldHJpZXM6IDIsXG5cdFx0XHRtYXhSZXRyaWVzOiAyLFxuXHRcdFx0Zm9sbG93UmVkaXJlY3Q6IGZhbHNlLFxuXHRcdFx0Zm9sbG93Q3Jvc3NOc1JlZGlyZWN0OiB0cnVlLFxuXHRcdFx0d2F0Y2hsaXN0T3B0aW9uOiAnbm9jaGFuZ2UnLFxuXHRcdFx0d2F0Y2hsaXN0RXhwaXJ5OiBudWxsLFxuXHRcdFx0Y3JlYXRvcjogbnVsbCxcblx0XHRcdHRpbWVzdGFtcDogbnVsbCxcblx0XHRcdC8vIC0gcmV2ZXJ0XG5cdFx0XHRyZXZlcnRPbGRJRDogbnVsbCxcblx0XHRcdC8vIC0gbW92ZVxuXHRcdFx0bW92ZURlc3RpbmF0aW9uOiBudWxsLFxuXHRcdFx0bW92ZVRhbGtQYWdlOiBmYWxzZSxcblx0XHRcdG1vdmVTdWJwYWdlczogZmFsc2UsXG5cdFx0XHRtb3ZlU3VwcHJlc3NSZWRpcmVjdDogZmFsc2UsXG5cdFx0XHQvLyAtIHByb3RlY3Rcblx0XHRcdHByb3RlY3RFZGl0OiBudWxsLFxuXHRcdFx0cHJvdGVjdE1vdmU6IG51bGwsXG5cdFx0XHRwcm90ZWN0Q3JlYXRlOiBudWxsLFxuXHRcdFx0cHJvdGVjdENhc2NhZGU6IG51bGwsXG5cdFx0XHQvLyAtIGNyZWF0aW9uIGxvb2t1cFxuXHRcdFx0bG9va3VwTm9uUmVkaXJlY3RDcmVhdG9yOiBmYWxzZSxcblx0XHRcdC8vIGludGVybmFsIHN0YXR1c1xuXHRcdFx0cGFnZUxvYWRlZDogZmFsc2UsXG5cdFx0XHRjc3JmVG9rZW46IG51bGwsXG5cdFx0XHRsb2FkVGltZTogbnVsbCxcblx0XHRcdGxhc3RFZGl0VGltZTogbnVsbCxcblx0XHRcdHBhZ2VJRDogbnVsbCxcblx0XHRcdGNvbnRlbnRNb2RlbDogbnVsbCxcblx0XHRcdHJldmVydEN1cklEOiBudWxsLFxuXHRcdFx0cmV2ZXJ0VXNlcjogbnVsbCxcblx0XHRcdHdhdGNoZWQ6IGZhbHNlLFxuXHRcdFx0ZnVsbHlQcm90ZWN0ZWQ6IGZhbHNlLFxuXHRcdFx0c3VwcHJlc3NQcm90ZWN0V2FybmluZzogZmFsc2UsXG5cdFx0XHRjb25mbGljdFJldHJpZXM6IDAsXG5cdFx0XHRyZXRyaWVzOiAwLFxuXHRcdFx0Ly8gY2FsbGJhY2tzXG5cdFx0XHRvbkxvYWRTdWNjZXNzOiBudWxsLFxuXHRcdFx0b25Mb2FkRmFpbHVyZTogbnVsbCxcblx0XHRcdG9uU2F2ZVN1Y2Nlc3M6IG51bGwsXG5cdFx0XHRvblNhdmVGYWlsdXJlOiBudWxsLFxuXHRcdFx0b25Mb29rdXBDcmVhdGlvblN1Y2Nlc3M6IG51bGwsXG5cdFx0XHRvbkxvb2t1cENyZWF0aW9uRmFpbHVyZTogbnVsbCxcblx0XHRcdG9uTW92ZVN1Y2Nlc3M6IG51bGwsXG5cdFx0XHRvbk1vdmVGYWlsdXJlOiBudWxsLFxuXHRcdFx0b25EZWxldGVTdWNjZXNzOiBudWxsLFxuXHRcdFx0b25EZWxldGVGYWlsdXJlOiBudWxsLFxuXHRcdFx0b25VbmRlbGV0ZVN1Y2Nlc3M6IG51bGwsXG5cdFx0XHRvblVuZGVsZXRlRmFpbHVyZTogbnVsbCxcblx0XHRcdG9uUHJvdGVjdFN1Y2Nlc3M6IG51bGwsXG5cdFx0XHRvblByb3RlY3RGYWlsdXJlOiBudWxsLFxuXHRcdFx0Ly8gaW50ZXJuYWwgb2JqZWN0c1xuXHRcdFx0bG9hZFF1ZXJ5OiBudWxsLFxuXHRcdFx0bG9hZEFwaTogbnVsbCxcblx0XHRcdHNhdmVBcGk6IG51bGwsXG5cdFx0XHRsb29rdXBDcmVhdGlvbkFwaTogbnVsbCxcblx0XHRcdG1vdmVBcGk6IG51bGwsXG5cdFx0XHRtb3ZlUHJvY2Vzc0FwaTogbnVsbCxcblx0XHRcdHBhdHJvbEFwaTogbnVsbCxcblx0XHRcdHBhdHJvbFByb2Nlc3NBcGk6IG51bGwsXG5cdFx0XHRkZWxldGVBcGk6IG51bGwsXG5cdFx0XHRkZWxldGVQcm9jZXNzQXBpOiBudWxsLFxuXHRcdFx0dW5kZWxldGVBcGk6IG51bGwsXG5cdFx0XHR1bmRlbGV0ZVByb2Nlc3NBcGk6IG51bGwsXG5cdFx0XHRwcm90ZWN0QXBpOiBudWxsLFxuXHRcdFx0cHJvdGVjdFByb2Nlc3NBcGk6IG51bGwsXG5cdFx0fTtcblx0XHRjb25zdCBlbXB0eUZ1bmN0aW9uID0gKCkgPT4ge307XG5cdFx0LyoqXG5cdFx0ICogTG9hZHMgdGhlIHRleHQgZm9yIHRoZSBwYWdlLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gb25TdWNjZXNzIC0gQ2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhlIGxvYWQgaGFzIHN1Y2NlZWRlZC5cblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25GYWlsdXJlXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCB3aGVuIHRoZSBsb2FkIGZhaWxzLlxuXHRcdCAqL1xuXHRcdHRoaXMubG9hZCA9IGZ1bmN0aW9uIChvblN1Y2Nlc3MsIG9uRmFpbHVyZSkge1xuXHRcdFx0Y3R4Lm9uTG9hZFN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0XHRjdHgub25Mb2FkRmFpbHVyZSA9IG9uRmFpbHVyZSB8fCBlbXB0eUZ1bmN0aW9uO1xuXHRcdFx0Ly8gTmVlZCB0byBiZSBhYmxlIHRvIGRvIHNvbWV0aGluZyBhZnRlciB0aGUgcGFnZSBsb2Fkc1xuXHRcdFx0aWYgKCFvblN1Y2Nlc3MpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoJ0ludGVybmFsIGVycm9yOiBubyBvblN1Y2Nlc3MgY2FsbGJhY2sgcHJvdmlkZWQgdG8gbG9hZCgpIScpO1xuXHRcdFx0XHRjdHgub25Mb2FkRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LmxvYWRRdWVyeSA9IHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRwcm9wOiAnaW5mb3xyZXZpc2lvbnMnLFxuXHRcdFx0XHRpbnByb3A6ICd3YXRjaGVkJyxcblx0XHRcdFx0aW50ZXN0YWN0aW9uczogJ2VkaXQnLFxuXHRcdFx0XHQvLyBjYW4gYmUgZXhwYW5kZWRcblx0XHRcdFx0Y3VydGltZXN0YW1wOiAnJyxcblx0XHRcdFx0bWV0YTogJ3Rva2VucycsXG5cdFx0XHRcdHR5cGU6ICdjc3JmJyxcblx0XHRcdFx0dGl0bGVzOiBjdHgucGFnZU5hbWUsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHQvLyBkb24ndCBuZWVkIHJ2bGltaXQ9MSBiZWNhdXNlIHdlIGRvbid0IG5lZWQgcnZzdGFydGlkIGhlcmUgYW5kIG9ubHkgb25lIGFjdHVhbCByZXYgaXMgcmV0dXJuZWQgYnkgZGVmYXVsdFxuXHRcdFx0fTtcblxuXHRcdFx0aWYgKGN0eC5lZGl0TW9kZSA9PT0gJ2FsbCcpIHtcblx0XHRcdFx0Y3R4LmxvYWRRdWVyeS5ydnByb3AgPSAnY29udGVudHx0aW1lc3RhbXAnOyAvLyBnZXQgdGhlIHBhZ2UgY29udGVudCBhdCB0aGUgc2FtZSB0aW1lLCBpZiBuZWVkZWRcblx0XHRcdH0gZWxzZSBpZiAoY3R4LmVkaXRNb2RlID09PSAncmV2ZXJ0Jykge1xuXHRcdFx0XHRjdHgubG9hZFF1ZXJ5LnJ2cHJvcCA9ICd0aW1lc3RhbXAnO1xuXHRcdFx0XHRjdHgubG9hZFF1ZXJ5LnJ2bGltaXQgPSAxO1xuXHRcdFx0XHRjdHgubG9hZFF1ZXJ5LnJ2c3RhcnRpZCA9IGN0eC5yZXZlcnRPbGRJRDtcblx0XHRcdH1cblx0XHRcdGlmIChjdHguZm9sbG93UmVkaXJlY3QpIHtcblx0XHRcdFx0Y3R4LmxvYWRRdWVyeS5yZWRpcmVjdHMgPSAnJzsgLy8gZm9sbG93IGFsbCByZWRpcmVjdHNcblx0XHRcdH1cblxuXHRcdFx0aWYgKHR5cGVvZiBjdHgucGFnZVNlY3Rpb24gPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGN0eC5sb2FkUXVlcnkucnZzZWN0aW9uID0gY3R4LnBhZ2VTZWN0aW9uO1xuXHRcdFx0fVxuXHRcdFx0aWYgKE1vcmViaXRzLnVzZXJJc1N5c29wKSB7XG5cdFx0XHRcdGN0eC5sb2FkUXVlcnkuaW5wcm9wICs9ICd8cHJvdGVjdGlvbic7XG5cdFx0XHR9XG5cdFx0XHRjdHgubG9hZEFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0d2luZG93LndnVUxTKCfmipPlj5bpobXpnaLigKbigKYnLCAn5oqT5Y+W6aCB6Z2i4oCm4oCmJyksXG5cdFx0XHRcdGN0eC5sb2FkUXVlcnksXG5cdFx0XHRcdGZuTG9hZFN1Y2Nlc3MsXG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHRjdHgub25Mb2FkRmFpbHVyZVxuXHRcdFx0KTtcblx0XHRcdGN0eC5sb2FkQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdGN0eC5sb2FkQXBpLnBvc3QoKTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFNhdmVzIHRoZSB0ZXh0IGZvciB0aGUgcGFnZSB0byBXaWtpcGVkaWEuXG5cdFx0ICogTXVzdCBiZSBwcmVjZWRlZCBieSBzdWNjZXNzZnVsbHkgY2FsbGluZyBgbG9hZCgpYC5cblx0XHQgKlxuXHRcdCAqIFdhcm5pbmc6IENhbGxpbmcgYHNhdmUoKWAgY2FuIHJlc3VsdCBpbiBhZGRpdGlvbmFsIGNhbGxzIHRvIHRoZVxuXHRcdCAqIHByZXZpb3VzIGBsb2FkKClgIGNhbGxiYWNrcyB0byByZWNvdmVyIGZyb20gZWRpdCBjb25mbGljdHMhIEluIHRoaXNcblx0XHQgKiBjYXNlLCBjYWxsZXJzIG11c3QgbWFrZSB0aGUgc2FtZSBlZGl0IHRvIHRoZSBuZXcgcGFnZVRleHQgYW5kXG5cdFx0ICogcmUtaW52b2tlIGBzYXZlKClgLiAgVGhpcyBiZWhhdmlvciBjYW4gYmUgZGlzYWJsZWQgd2l0aFxuXHRcdCAqIGBzZXRNYXhDb25mbGljdFJldHJpZXMoMClgLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uU3VjY2Vzc10gLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgc2F2ZSBoYXMgc3VjY2VlZGVkLlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhlIHNhdmUgZmFpbHMuXG5cdFx0ICovXG5cdFx0dGhpcy5zYXZlID0gZnVuY3Rpb24gKG9uU3VjY2Vzcywgb25GYWlsdXJlKSB7XG5cdFx0XHRjdHgub25TYXZlU3VjY2VzcyA9IG9uU3VjY2Vzcztcblx0XHRcdGN0eC5vblNhdmVGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHQvLyBhcmUgd2UgZ2V0dGluZyBvdXIgZWRpdGluZyB0b2tlbiBmcm9tIG13LnVzZXIudG9rZW5zP1xuXHRcdFx0Y29uc3QgY2FuVXNlTXdVc2VyVG9rZW4gPSBmbkNhblVzZU13VXNlclRva2VuKCdlZGl0Jyk7XG5cdFx0XHRpZiAoIWN0eC5wYWdlTG9hZGVkICYmICFjYW5Vc2VNd1VzZXJUb2tlbikge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcignSW50ZXJuYWwgZXJyb3I6IGF0dGVtcHQgdG8gc2F2ZSBhIHBhZ2UgdGhhdCBoYXMgbm90IGJlZW4gbG9hZGVkIScpO1xuXHRcdFx0XHRjdHgub25TYXZlRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFjdHguZWRpdFN1bW1hcnkpIHtcblx0XHRcdFx0Ly8gbmV3IHNlY3Rpb24gbW9kZSBhbGxvd3MgKG5heSwgZW5jb3VyYWdlcykgdXNpbmcgdGhlXG5cdFx0XHRcdC8vIHRpdGxlIGFzIHRoZSBlZGl0IHN1bW1hcnksIGJ1dCB0aGUgcXVlcnkgbmVlZHNcblx0XHRcdFx0Ly8gZWRpdFN1bW1hcnkgdG8gYmUgdW5kZWZpbmVkIG9yICcnLCBub3QgbnVsbFxuXHRcdFx0XHRpZiAoY3R4LmVkaXRNb2RlID09PSAnbmV3JyAmJiBjdHgubmV3U2VjdGlvblRpdGxlKSB7XG5cdFx0XHRcdFx0Y3R4LmVkaXRTdW1tYXJ5ID0gJyc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoJ0ludGVybmFsIGVycm9yOiBlZGl0IHN1bW1hcnkgbm90IHNldCBiZWZvcmUgc2F2ZSEnKTtcblx0XHRcdFx0XHRjdHgub25TYXZlRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIHNob3VsZG4ndCBoYXBwZW4gaWYgY2FuVXNlTXdVc2VyVG9rZW4gPT09IHRydWVcblx0XHRcdGlmIChcblx0XHRcdFx0Y3R4LmZ1bGx5UHJvdGVjdGVkICYmXG5cdFx0XHRcdCFjdHguc3VwcHJlc3NQcm90ZWN0V2FybmluZyAmJlxuXHRcdFx0XHQhY29uZmlybShcblx0XHRcdFx0XHRjdHguZnVsbHlQcm90ZWN0ZWQgPT09ICdpbmZpbml0eSdcblx0XHRcdFx0XHRcdD8gd2luZG93LndnVUxTKCfmgqjljbPlsIbnvJbovpHlhajkv53miqTpobXpnaLigJwnLCAn5oKo5Y2z5bCH57eo6Lyv5YWo5L+d6K236aCB6Z2i44CMJykgK1xuXHRcdFx0XHRcdFx0XHRcdGN0eC5wYWdlTmFtZSArXG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKFxuXHRcdFx0XHRcdFx0XHRcdFx0J+KAne+8iOaXoOmZkOacn++8ieOAglxcblxcbuWNleWHu+ehruWumuS7peehruWumu+8jOaIluWNleWHu+WPlua2iOS7peWPlua2iOaTjeS9nOOAgicsXG5cdFx0XHRcdFx0XHRcdFx0XHQn44CN77yI54Sh6ZmQ5pyf77yJ44CCXFxuXFxu6bue5pOK56K65a6a5Lul56K65a6a77yM5oiW6bue5pOK5Y+W5raI5Lul5Y+W5raI5pON5L2c44CCJ1xuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdDogYCR7XG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfmgqjljbPlsIbnvJbovpHlhajkv53miqTpobXpnaLigJwnLCAn5oKo5Y2z5bCH57eo6Lyv5YWo5L+d6K236aCB6Z2i44CMJykgK1xuXHRcdFx0XHRcdFx0XHRcdGN0eC5wYWdlTmFtZSArXG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfigJ3vvIjliLDmnJ/vvJonLCAn44CN77yI5Yiw5pyf77yaJykgK1xuXHRcdFx0XHRcdFx0XHRcdG5ldyBNb3JlYml0cy5kYXRlKGN0eC5mdWxseVByb3RlY3RlZCkuY2FsZW5kYXIoJ3V0YycpXG5cdFx0XHRcdFx0XHRcdH0gKFVUQynvvInjgIJcXG5cXG4ke3dpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHRcdFx0XHQn5Y2V5Ye756Gu5a6a5Lul56Gu5a6a77yM5oiW5Y2V5Ye75Y+W5raI5Lul5Y+W5raI5pON5L2c44CCJyxcblx0XHRcdFx0XHRcdFx0XHQn6bue5pOK56K65a6a5Lul56K65a6a77yM5oiW6bue5pOK5Y+W5raI5Lul5Y+W5raI5pON5L2c44CCJ1xuXHRcdFx0XHRcdFx0XHQpfWBcblx0XHRcdFx0KVxuXHRcdFx0KSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5bey5Y+W5raI5a+55YWo5L+d5oqk6aG16Z2i55qE57yW6L6R44CCJywgJ+W3suWPlua2iOWwjeWFqOS/neitt+mggemdoueahOe3qOi8r+OAgicpKTtcblx0XHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGN0eC5yZXRyaWVzID0gMDtcblx0XHRcdGNvbnN0IHF1ZXJ5ID0ge1xuXHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0dGl0bGU6IGN0eC5wYWdlTmFtZSxcblx0XHRcdFx0c3VtbWFyeTogY3R4LmVkaXRTdW1tYXJ5LFxuXHRcdFx0XHR0b2tlbjogY2FuVXNlTXdVc2VyVG9rZW4gPyBtdy51c2VyLnRva2Vucy5nZXQoJ2NzcmZUb2tlbicpIDogY3R4LmNzcmZUb2tlbixcblx0XHRcdFx0d2F0Y2hsaXN0OiBjdHgud2F0Y2hsaXN0T3B0aW9uLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdH07XG5cdFx0XHRpZiAoY3R4LmNoYW5nZVRhZ3MpIHtcblx0XHRcdFx0cXVlcnkudGFncyA9IGN0eC5jaGFuZ2VUYWdzO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGZuQXBwbHlXYXRjaGxpc3RFeHBpcnkoKSkge1xuXHRcdFx0XHRxdWVyeS53YXRjaGxpc3RleHBpcnkgPSBjdHgud2F0Y2hsaXN0RXhwaXJ5O1xuXHRcdFx0fVxuXHRcdFx0aWYgKHR5cGVvZiBjdHgucGFnZVNlY3Rpb24gPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdHF1ZXJ5LnNlY3Rpb24gPSBjdHgucGFnZVNlY3Rpb247XG5cdFx0XHR9XG5cdFx0XHQvLyBTZXQgbWlub3IgZWRpdCBhdHRyaWJ1dGUuIElmIHRoZXNlIHBhcmFtZXRlcnMgYXJlIHByZXNlbnQgd2l0aCBhbnkgdmFsdWUsIGl0IGlzIGludGVycHJldGVkIGFzIHRydWVcblx0XHRcdGlmIChjdHgubWlub3JFZGl0KSB7XG5cdFx0XHRcdHF1ZXJ5Lm1pbm9yID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHF1ZXJ5Lm5vdG1pbm9yID0gdHJ1ZTsgLy8gZm9yY2UgVHdpbmtsZSBjb25maWcgdG8gb3ZlcnJpZGUgdXNlciBwcmVmZXJlbmNlIHNldHRpbmcgZm9yIFwiYWxsIGVkaXRzIGFyZSBtaW5vclwiXG5cdFx0XHR9XG5cdFx0XHQvLyBTZXQgYm90IGVkaXQgYXR0cmlidXRlLiBJZiB0aGlzIHBhcmFtZXRlciBpcyBwcmVzZW50IHdpdGggYW55IHZhbHVlLCBpdCBpcyBpbnRlcnByZXRlZCBhcyB0cnVlXG5cdFx0XHRpZiAoY3R4LmJvdEVkaXQpIHtcblx0XHRcdFx0cXVlcnkuYm90ID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHN3aXRjaCAoY3R4LmVkaXRNb2RlKSB7XG5cdFx0XHRcdGNhc2UgJ2FwcGVuZCc6XG5cdFx0XHRcdFx0aWYgKGN0eC5hcHBlbmRUZXh0ID09PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcignSW50ZXJuYWwgZXJyb3I6IGFwcGVuZCB0ZXh0IG5vdCBzZXQgYmVmb3JlIHNhdmUhJyk7XG5cdFx0XHRcdFx0XHRjdHgub25TYXZlRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cXVlcnkuYXBwZW5kdGV4dCA9IGN0eC5hcHBlbmRUZXh0OyAvLyB1c2UgbW9kZSB0byBhcHBlbmQgdG8gY3VycmVudCBwYWdlIGNvbnRlbnRzXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3ByZXBlbmQnOlxuXHRcdFx0XHRcdGlmIChjdHgucHJlcGVuZFRleHQgPT09IG51bGwpIHtcblx0XHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKCdJbnRlcm5hbCBlcnJvcjogcHJlcGVuZCB0ZXh0IG5vdCBzZXQgYmVmb3JlIHNhdmUhJyk7XG5cdFx0XHRcdFx0XHRjdHgub25TYXZlRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cXVlcnkucHJlcGVuZHRleHQgPSBjdHgucHJlcGVuZFRleHQ7IC8vIHVzZSBtb2RlIHRvIHByZXBlbmQgdG8gY3VycmVudCBwYWdlIGNvbnRlbnRzXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ25ldyc6XG5cdFx0XHRcdFx0aWYgKCFjdHgubmV3U2VjdGlvblRleHQpIHtcblx0XHRcdFx0XHRcdC8vIEFQSSBkb2Vzbid0IGFsbG93IGVtcHR5IG5ldyBzZWN0aW9uIHRleHRcblx0XHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKCdJbnRlcm5hbCBlcnJvcjogbmV3IHNlY3Rpb24gdGV4dCBub3Qgc2V0IGJlZm9yZSBzYXZlIScpO1xuXHRcdFx0XHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHF1ZXJ5LnNlY3Rpb24gPSAnbmV3Jztcblx0XHRcdFx0XHRxdWVyeS50ZXh0ID0gY3R4Lm5ld1NlY3Rpb25UZXh0OyAvLyBhZGQgYSBuZXcgc2VjdGlvbiB0byBjdXJyZW50IHBhZ2Vcblx0XHRcdFx0XHRxdWVyeS5zZWN0aW9udGl0bGUgPSBjdHgubmV3U2VjdGlvblRpdGxlIHx8IGN0eC5lZGl0U3VtbWFyeTsgLy8gZG9uZSBieSB0aGUgQVBJLCBidXQgbm9uLScnIHZhbHVlcyB3b3VsZCBnZXQgdHJlYXRlZCBhcyB0ZXh0XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3JldmVydCc6XG5cdFx0XHRcdFx0cXVlcnkudW5kbyA9IGN0eC5yZXZlcnRDdXJJRDtcblx0XHRcdFx0XHRxdWVyeS51bmRvYWZ0ZXIgPSBjdHgucmV2ZXJ0T2xkSUQ7XG5cdFx0XHRcdFx0aWYgKGN0eC5sYXN0RWRpdFRpbWUpIHtcblx0XHRcdFx0XHRcdHF1ZXJ5LmJhc2V0aW1lc3RhbXAgPSBjdHgubGFzdEVkaXRUaW1lOyAvLyBjaGVjayB0aGF0IHBhZ2UgaGFzbid0IGJlZW4gZWRpdGVkIHNpbmNlIGl0IHdhcyBsb2FkZWRcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRxdWVyeS5zdGFydHRpbWVzdGFtcCA9IGN0eC5sb2FkVGltZTsgLy8gY2hlY2sgdGhhdCBwYWdlIGhhc24ndCBiZWVuIGRlbGV0ZWQgc2luY2UgaXQgd2FzIGxvYWRlZCAoZG9uJ3QgcmVjcmVhdGUgYmFkIHN0dWZmKVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdC8vICdhbGwnXG5cdFx0XHRcdFx0cXVlcnkudGV4dCA9IGN0eC5wYWdlVGV4dDsgLy8gcmVwbGFjZSBlbnRpcmUgY29udGVudHMgb2YgdGhlIHBhZ2Vcblx0XHRcdFx0XHRpZiAoY3R4Lmxhc3RFZGl0VGltZSkge1xuXHRcdFx0XHRcdFx0cXVlcnkuYmFzZXRpbWVzdGFtcCA9IGN0eC5sYXN0RWRpdFRpbWU7IC8vIGNoZWNrIHRoYXQgcGFnZSBoYXNuJ3QgYmVlbiBlZGl0ZWQgc2luY2UgaXQgd2FzIGxvYWRlZFxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHF1ZXJ5LnN0YXJ0dGltZXN0YW1wID0gY3R4LmxvYWRUaW1lOyAvLyBjaGVjayB0aGF0IHBhZ2UgaGFzbid0IGJlZW4gZGVsZXRlZCBzaW5jZSBpdCB3YXMgbG9hZGVkIChkb24ndCByZWNyZWF0ZSBiYWQgc3R1ZmYpXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRpZiAoWydyZWNyZWF0ZScsICdjcmVhdGVvbmx5JywgJ25vY3JlYXRlJ10uaW5jbHVkZXMoY3R4LmNyZWF0ZU9wdGlvbikpIHtcblx0XHRcdFx0cXVlcnlbY3R4LmNyZWF0ZU9wdGlvbl0gPSAnJztcblx0XHRcdH1cblx0XHRcdGlmIChjYW5Vc2VNd1VzZXJUb2tlbiAmJiBjdHguZm9sbG93UmVkaXJlY3QpIHtcblx0XHRcdFx0cXVlcnkucmVkaXJlY3QgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LnNhdmVBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUygn5L+d5a2Y6aG16Z2i4oCm4oCmJywgJ+WEsuWtmOmggemdouKApuKApicpLFxuXHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0Zm5TYXZlU3VjY2Vzcyxcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdGZuU2F2ZUVycm9yXG5cdFx0XHQpO1xuXHRcdFx0Y3R4LnNhdmVBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0Y3R4LnNhdmVBcGkucG9zdCgpO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQWRkcyB0aGUgdGV4dCBwcm92aWRlZCB2aWEgYHNldEFwcGVuZFRleHQoKWAgdG8gdGhlIGVuZCBvZiB0aGVcblx0XHQgKiBwYWdlLiAgRG9lcyBub3QgcmVxdWlyZSBjYWxsaW5nIGBsb2FkKClgIGZpcnN0LCB1bmxlc3MgYSB3YXRjaGxpc3Rcblx0XHQgKiBleHBpcnkgaXMgdXNlZC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvblN1Y2Nlc3NdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhlIG1ldGhvZCBoYXMgc3VjY2VlZGVkLlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhlIG1ldGhvZCBmYWlscy5cblx0XHQgKi9cblx0XHR0aGlzLmFwcGVuZCA9IGZ1bmN0aW9uIChvblN1Y2Nlc3MsIG9uRmFpbHVyZSkge1xuXHRcdFx0Y3R4LmVkaXRNb2RlID0gJ2FwcGVuZCc7XG5cdFx0XHRpZiAoZm5DYW5Vc2VNd1VzZXJUb2tlbignZWRpdCcpKSB7XG5cdFx0XHRcdHRoaXMuc2F2ZShvblN1Y2Nlc3MsIG9uRmFpbHVyZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdHgub25TYXZlU3VjY2VzcyA9IG9uU3VjY2Vzcztcblx0XHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdFx0dGhpcy5sb2FkKGZuQXV0b1NhdmUsIGN0eC5vblNhdmVGYWlsdXJlKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEFkZHMgdGhlIHRleHQgcHJvdmlkZWQgdmlhIGBzZXRQcmVwZW5kVGV4dCgpYCB0byB0aGUgc3RhcnQgb2YgdGhlXG5cdFx0ICogcGFnZS4gIERvZXMgbm90IHJlcXVpcmUgY2FsbGluZyBgbG9hZCgpYCBmaXJzdCwgdW5sZXNzIGEgd2F0Y2hsaXN0XG5cdFx0ICogZXhwaXJ5IGlzIHVzZWQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSAgW29uU3VjY2Vzc10gLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgbWV0aG9kIGhhcyBzdWNjZWVkZWQuXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gIFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhlIG1ldGhvZCBmYWlscy5cblx0XHQgKi9cblx0XHR0aGlzLnByZXBlbmQgPSBmdW5jdGlvbiAob25TdWNjZXNzLCBvbkZhaWx1cmUpIHtcblx0XHRcdGN0eC5lZGl0TW9kZSA9ICdwcmVwZW5kJztcblx0XHRcdGlmIChmbkNhblVzZU13VXNlclRva2VuKCdlZGl0JykpIHtcblx0XHRcdFx0dGhpcy5zYXZlKG9uU3VjY2Vzcywgb25GYWlsdXJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN0eC5vblNhdmVTdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdFx0XHRjdHgub25TYXZlRmFpbHVyZSA9IG9uRmFpbHVyZSB8fCBlbXB0eUZ1bmN0aW9uO1xuXHRcdFx0XHR0aGlzLmxvYWQoZm5BdXRvU2F2ZSwgY3R4Lm9uU2F2ZUZhaWx1cmUpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQ3JlYXRlcyBhIG5ldyBzZWN0aW9uIHdpdGggdGhlIHRleHQgcHJvdmlkZWQgYnkgYHNldE5ld1NlY3Rpb25UZXh0KClgXG5cdFx0ICogYW5kIHNlY3Rpb24gdGl0bGUgZnJvbSBgc2V0TmV3U2VjdGlvblRpdGxlKClgLlxuXHRcdCAqIElmIGBlZGl0U3VtbWFyeWAgaXMgcHJvdmlkZWQsIHRoYXQgd2lsbCBiZSB1c2VkIGluc3RlYWQgb2YgdGhlXG5cdFx0ICogYXV0b2dlbmVyYXRlZCBcIi0+VGl0bGUgKG5ldyBzZWN0aW9uXCIgZWRpdCBzdW1tYXJ5LlxuXHRcdCAqIERvZXMgbm90IHJlcXVpcmUgY2FsbGluZyBgbG9hZCgpYCBmaXJzdCwgdW5sZXNzIGEgd2F0Y2hsaXN0IGV4cGlyeVxuXHRcdCAqIGlzIHVzZWQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSAgW29uU3VjY2Vzc10gLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgbWV0aG9kIGhhcyBzdWNjZWVkZWQuXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gIFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhlIG1ldGhvZCBmYWlscy5cblx0XHQgKi9cblx0XHR0aGlzLm5ld1NlY3Rpb24gPSBmdW5jdGlvbiAob25TdWNjZXNzLCBvbkZhaWx1cmUpIHtcblx0XHRcdGN0eC5lZGl0TW9kZSA9ICduZXcnO1xuXHRcdFx0aWYgKGZuQ2FuVXNlTXdVc2VyVG9rZW4oJ2VkaXQnKSkge1xuXHRcdFx0XHR0aGlzLnNhdmUob25TdWNjZXNzLCBvbkZhaWx1cmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3R4Lm9uU2F2ZVN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0XHRcdGN0eC5vblNhdmVGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHRcdHRoaXMubG9hZChmbkF1dG9TYXZlLCBjdHgub25TYXZlRmFpbHVyZSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gVGhlIG5hbWUgb2YgdGhlIGxvYWRlZCBwYWdlLCBpbmNsdWRpbmcgdGhlIG5hbWVzcGFjZSAqL1xuXHRcdHRoaXMuZ2V0UGFnZU5hbWUgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LnBhZ2VOYW1lO1xuXHRcdH07XG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSB0ZXh0IG9mIHRoZSBwYWdlIGFmdGVyIGEgc3VjY2Vzc2Z1bCBsb2FkKCkgKi9cblx0XHR0aGlzLmdldFBhZ2VUZXh0ID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC5wYWdlVGV4dDtcblx0XHR9O1xuXHRcdC8qKiBAcGFyYW0ge3N0cmluZ30gcGFnZVRleHQgLSBVcGRhdGVkIHBhZ2UgdGV4dCB0aGF0IHdpbGwgYmUgc2F2ZWQgd2hlbiBgc2F2ZSgpYCBpcyBjYWxsZWQgKi9cblx0XHR0aGlzLnNldFBhZ2VUZXh0ID0gKHBhZ2VUZXh0KSA9PiB7XG5cdFx0XHRjdHguZWRpdE1vZGUgPSAnYWxsJztcblx0XHRcdGN0eC5wYWdlVGV4dCA9IHBhZ2VUZXh0O1xuXHRcdH07XG5cdFx0LyoqIEBwYXJhbSB7c3RyaW5nfSBhcHBlbmRUZXh0IC0gVGV4dCB0aGF0IHdpbGwgYmUgYXBwZW5kZWQgdG8gdGhlIHBhZ2Ugd2hlbiBgYXBwZW5kKClgIGlzIGNhbGxlZCAqL1xuXHRcdHRoaXMuc2V0QXBwZW5kVGV4dCA9IChhcHBlbmRUZXh0KSA9PiB7XG5cdFx0XHRjdHguZWRpdE1vZGUgPSAnYXBwZW5kJztcblx0XHRcdGN0eC5hcHBlbmRUZXh0ID0gYXBwZW5kVGV4dDtcblx0XHR9O1xuXHRcdC8qKiBAcGFyYW0ge3N0cmluZ30gcHJlcGVuZFRleHQgLSBUZXh0IHRoYXQgd2lsbCBiZSBwcmVwZW5kZWQgdG8gdGhlIHBhZ2Ugd2hlbiBgcHJlcGVuZCgpYCBpcyBjYWxsZWQgKi9cblx0XHR0aGlzLnNldFByZXBlbmRUZXh0ID0gKHByZXBlbmRUZXh0KSA9PiB7XG5cdFx0XHRjdHguZWRpdE1vZGUgPSAncHJlcGVuZCc7XG5cdFx0XHRjdHgucHJlcGVuZFRleHQgPSBwcmVwZW5kVGV4dDtcblx0XHR9O1xuXHRcdC8qKiBAcGFyYW0ge3N0cmluZ30gbmV3U2VjdGlvblRleHQgLSBUZXh0IHRoYXQgd2lsbCBiZSBhZGRlZCBpbiBhIG5ldyBzZWN0aW9uIG9uIHRoZSBwYWdlIHdoZW4gYG5ld1NlY3Rpb24oKWAgaXMgY2FsbGVkICovXG5cdFx0dGhpcy5zZXROZXdTZWN0aW9uVGV4dCA9IChuZXdTZWN0aW9uVGV4dCkgPT4ge1xuXHRcdFx0Y3R4LmVkaXRNb2RlID0gJ25ldyc7XG5cdFx0XHRjdHgubmV3U2VjdGlvblRleHQgPSBuZXdTZWN0aW9uVGV4dDtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBuZXdTZWN0aW9uVGl0bGUgLSBUaXRsZSBmb3IgdGhlIG5ldyBzZWN0aW9uIGNyZWF0ZWQgd2hlbiBgbmV3U2VjdGlvbigpYCBpcyBjYWxsZWRcblx0XHQgKiBJZiBtaXNzaW5nLCBgY3R4LmVkaXRTdW1tYXJ5YCB3aWxsIGJlIHVzZWQuIElzc3VlcyBtYXkgb2NjdXIgaWYgYSBzdWJzdGl0dXRlZCB0ZW1wbGF0ZSBpcyB1c2VkLlxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0TmV3U2VjdGlvblRpdGxlID0gKG5ld1NlY3Rpb25UaXRsZSkgPT4ge1xuXHRcdFx0Y3R4LmVkaXRNb2RlID0gJ25ldyc7XG5cdFx0XHRjdHgubmV3U2VjdGlvblRpdGxlID0gbmV3U2VjdGlvblRpdGxlO1xuXHRcdH07XG5cdFx0Ly8gRWRpdC1yZWxhdGVkIHNldHRlciBtZXRob2RzOlxuXHRcdC8qKlxuXHRcdCAqIFNldCB0aGUgZWRpdCBzdW1tYXJ5IHRoYXQgd2lsbCBiZSB1c2VkIHdoZW4gYHNhdmUoKWAgaXMgY2FsbGVkLlxuXHRcdCAqIFVubmVjZXNzYXJ5IGlmIGVkaXRNb2RlIGlzICduZXcnIGFuZCBuZXdTZWN0aW9uVGl0bGUgaXMgcHJvdmlkZWQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3VtbWFyeVxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0RWRpdFN1bW1hcnkgPSAoc3VtbWFyeSkgPT4ge1xuXHRcdFx0Y3R4LmVkaXRTdW1tYXJ5ID0gc3VtbWFyeTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFNldCBhbnkgY3VzdG9tIHRhZyhzKSB0byBiZSBhcHBsaWVkIHRvIHRoZSBBUEkgYWN0aW9uLlxuXHRcdCAqIEEgbnVtYmVyIG9mIGFjdGlvbnMgZG9uJ3Qgc3VwcG9ydCBpdCwgbW9zdCBub3RhYmx5IHdhdGNoLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IHRhZ3MgLSBTdHJpbmcgb3IgYXJyYXkgb2YgdGFnKHMpLlxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0Q2hhbmdlVGFncyA9ICh0YWdzKSA9PiB7XG5cdFx0XHRjdHguY2hhbmdlVGFncyA9IHRhZ3M7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gW2NyZWF0ZU9wdGlvbj1udWxsXSAtIENhbiB0YWtlIHRoZSBmb2xsb3dpbmcgZm91ciB2YWx1ZXM6XG5cdFx0ICogLSByZWNyZWF0ZTogY3JlYXRlIHRoZSBwYWdlIGlmIGl0IGRvZXMgbm90IGV4aXN0LCBvciBlZGl0IGl0IGlmIGl0IGV4aXN0cy5cblx0XHQgKiAtIGNyZWF0ZW9ubHk6IGNyZWF0ZSB0aGUgcGFnZSBpZiBpdCBkb2VzIG5vdCBleGlzdCwgYnV0IHJldHVybiBhblxuXHRcdCAqIGVycm9yIGlmIGl0IGFscmVhZHkgZXhpc3RzLlxuXHRcdCAqIC0gbm9jcmVhdGU6IGRvbid0IGNyZWF0ZSB0aGUgcGFnZSwgb25seSBlZGl0IGl0IGlmIGl0IGFscmVhZHkgZXhpc3RzLlxuXHRcdCAqIC0gYG51bGxgOiBjcmVhdGUgdGhlIHBhZ2UgaWYgaXQgZG9lcyBub3QgZXhpc3QsIHVubGVzcyBpdCB3YXMgZGVsZXRlZFxuXHRcdCAqIGluIHRoZSBtb21lbnQgYmV0d2VlbiBsb2FkaW5nIHRoZSBwYWdlIGFuZCBzYXZpbmcgdGhlIGVkaXQgKGRlZmF1bHQpLlxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0Q3JlYXRlT3B0aW9uID0gKGNyZWF0ZU9wdGlvbikgPT4ge1xuXHRcdFx0Y3R4LmNyZWF0ZU9wdGlvbiA9IGNyZWF0ZU9wdGlvbjtcblx0XHR9O1xuXHRcdC8qKiBAcGFyYW0ge2Jvb2xlYW59IG1pbm9yRWRpdCAtIFNldCB0cnVlIHRvIG1hcmsgdGhlIGVkaXQgYXMgYSBtaW5vciBlZGl0LiAqL1xuXHRcdHRoaXMuc2V0TWlub3JFZGl0ID0gKG1pbm9yRWRpdCkgPT4ge1xuXHRcdFx0Y3R4Lm1pbm9yRWRpdCA9IG1pbm9yRWRpdDtcblx0XHR9O1xuXHRcdC8qKiBAcGFyYW0ge2Jvb2xlYW59IGJvdEVkaXQgLSBTZXQgdHJ1ZSB0byBtYXJrIHRoZSBlZGl0IGFzIGEgYm90IGVkaXQgKi9cblx0XHR0aGlzLnNldEJvdEVkaXQgPSAoYm90RWRpdCkgPT4ge1xuXHRcdFx0Y3R4LmJvdEVkaXQgPSBib3RFZGl0O1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IHBhZ2VTZWN0aW9uIC0gSW50ZWdlciBzcGVjaWZ5aW5nIHRoZSBzZWN0aW9uIG51bWJlciB0byBsb2FkIG9yIHNhdmUuXG5cdFx0ICogSWYgc3BlY2lmaWVkIGFzIGBudWxsYCwgdGhlIGVudGlyZSBwYWdlIHdpbGwgYmUgcmV0cmlldmVkLlxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0UGFnZVNlY3Rpb24gPSAocGFnZVNlY3Rpb24pID0+IHtcblx0XHRcdGN0eC5wYWdlU2VjdGlvbiA9IHBhZ2VTZWN0aW9uO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IG1heENvbmZsaWN0UmV0cmllcyAtIE51bWJlciBvZiByZXRyaWVzIGZvciBzYXZlIGVycm9ycyBpbnZvbHZpbmcgYW4gZWRpdCBjb25mbGljdCBvclxuXHRcdCAqIGxvc3Mgb2YgdG9rZW4uIERlZmF1bHQ6IDIuXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRNYXhDb25mbGljdFJldHJpZXMgPSAobWF4Q29uZmxpY3RSZXRyaWVzKSA9PiB7XG5cdFx0XHRjdHgubWF4Q29uZmxpY3RSZXRyaWVzID0gbWF4Q29uZmxpY3RSZXRyaWVzO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IG1heFJldHJpZXMgLSBOdW1iZXIgb2YgcmV0cmllcyBmb3Igc2F2ZSBlcnJvcnMgbm90IGludm9sdmluZyBhbiBlZGl0IGNvbmZsaWN0IG9yXG5cdFx0ICogbG9zcyBvZiB0b2tlbi4gRGVmYXVsdDogMi5cblx0XHQgKi9cblx0XHR0aGlzLnNldE1heFJldHJpZXMgPSAobWF4UmV0cmllcykgPT4ge1xuXHRcdFx0Y3R4Lm1heFJldHJpZXMgPSBtYXhSZXRyaWVzO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogU2V0IHdoZXRoZXIgYW5kIGhvdyB0byB3YXRjaCB0aGUgcGFnZSwgaW5jbHVkaW5nIHNldHRpbmcgYW4gZXhwaXJ5LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtib29sZWFufHN0cmluZ3xNb3JlYml0cy5kYXRlfERhdGV9IFt3YXRjaGxpc3RPcHRpb249ZmFsc2VdIC1cblx0XHQgKiBCYXNpY2FsbHkgYSBtaXggb2YgTVcgQVBJIGFuZCBUd2lua2xleSBvcHRpb25zIGF2YWlsYWJsZSBwcmUtZXhwaXJ5OlxuXHRcdCAqIC0gYHRydWVgfGAneWVzJ2B8YCd3YXRjaCdgOiBwYWdlIHdpbGwgYmUgYWRkZWQgdG8gdGhlIHVzZXInc1xuXHRcdCAqIHdhdGNobGlzdCB3aGVuIHRoZSBhY3Rpb24gaXMgY2FsbGVkLiBEZWZhdWx0cyB0byBhbiBpbmRlZmluaXRlXG5cdFx0ICogd2F0Y2ggdW5sZXNzIGB3YXRjaGxpc3RFeHBpcnlgIGlzIHByb3ZpZGVkLlxuXHRcdCAqIC0gYGZhbHNlYHxgJ25vJ2B8YCdub2NoYW5nZSdgOiB3YXRjaGxpc3Qgc3RhdHVzIG9mIHRoZSBwYWdlIChpbmNsdWRpbmcgZXhwaXJ5KSB3aWxsIG5vdCBiZSBjaGFuZ2VkLlxuXHRcdCAqIC0gYCdkZWZhdWx0J2B8YCdwcmVmZXJlbmNlcydgOiB3YXRjaGxpc3Qgc3RhdHVzIG9mIHRoZSBwYWdlIHdpbGwgYmVcblx0XHQgKiBzZXQgYmFzZWQgb24gdGhlIHVzZXIncyBwcmVmZXJlbmNlIHNldHRpbmdzIHdoZW4gdGhlIGFjdGlvbiBpc1xuXHRcdCAqIGNhbGxlZC4gRGVmYXVsdHMgdG8gYW4gaW5kZWZpbml0ZSB3YXRjaCB1bmxlc3MgYHdhdGNobGlzdEV4cGlyeWAgaXNcblx0XHQgKiBwcm92aWRlZC5cblx0XHQgKiAtIGAndW53YXRjaCdgOiBleHBsaWNpdGx5IHVud2F0Y2ggdGhlIHBhZ2UuXG5cdFx0ICogLSBBbnkgb3RoZXIgYHN0cmluZ2Agb3IgYG51bWJlcmAsIG9yIGEgYE1vcmViaXRzLmRhdGVgIG9yIGBEYXRlYFxuXHRcdCAqIG9iamVjdDogd2F0Y2ggcGFnZSB1bnRpbCB0aGUgc3BlY2lmaWVkIHRpbWUsIGRlZmVycmluZyB0b1xuXHRcdCAqIGB3YXRjaGxpc3RFeHBpcnlgIGlmIHByb3ZpZGVkLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcnxNb3JlYml0cy5kYXRlfERhdGV9IFt3YXRjaGxpc3RFeHBpcnk9aW5maW5pdHldIC1cblx0XHQgKiBBIGRhdGUtbGlrZSBzdHJpbmcgb3IgbnVtYmVyLCBvciBhIGRhdGUgb2JqZWN0LiAgSWYgYSBzdHJpbmcgb3IgbnVtYmVyLFxuXHRcdCAqIGNhbiBiZSByZWxhdGl2ZSAoMiB3ZWVrcykgb3Igb3RoZXIgc2ltaWxhcmx5IGRhdGUtbGlrZSAoaS5lLiBOT1QgXCJwb3RhdG9cIik6XG5cdFx0ICogSVNPIDg2MDE6IDIwMzgtMDEtMDlUMDM6MTQ6MDdaXG5cdFx0ICogTWVkaWFXaWtpOiAyMDM4MDEwOTAzMTQwN1xuXHRcdCAqIFVOSVg6IDIxNDc0ODM2NDdcblx0XHQgKiBTUUw6IDIwMzgtMDEtMDkgMDM6MTQ6MDdcblx0XHQgKiBDYW4gYWxzbyBiZSBgaW5maW5pdHlgIG9yIGluZmluaXR5LWxpa2UgKGBpbmZpbml0ZWAsIGBpbmRlZmluaXRlYCwgYW5kIGBuZXZlcmApLlxuXHRcdCAqIFNlZSB7QGxpbmsgaHR0cHM6Ly9waGFicmljYXRvci53aWtpbWVkaWEub3JnL3NvdXJjZS9tZWRpYXdpa2ktbGlicy1UaW1lc3RhbXAvYnJvd3NlL21hc3Rlci9zcmMvQ29udmVydGlibGVUaW1lc3RhbXAucGhwOzRlNTNiODU5YTk1ODBjNTU5NTgwNzhmNDZkZDRmM2E0NGQwZmNhYTAkNTctMTA5P2FzPXNvdXJjZSZibGFtZT1vZmZ9XG5cdFx0ICovXG5cdFx0dGhpcy5zZXRXYXRjaGxpc3QgPSAod2F0Y2hsaXN0T3B0aW9uLCB3YXRjaGxpc3RFeHBpcnkpID0+IHtcblx0XHRcdGlmICh3YXRjaGxpc3RPcHRpb24gaW5zdGFuY2VvZiBNb3JlYml0cy5kYXRlIHx8IHdhdGNobGlzdE9wdGlvbiBpbnN0YW5jZW9mIERhdGUpIHtcblx0XHRcdFx0d2F0Y2hsaXN0T3B0aW9uID0gd2F0Y2hsaXN0T3B0aW9uLnRvSVNPU3RyaW5nKCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAod2F0Y2hsaXN0RXhwaXJ5ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0d2F0Y2hsaXN0RXhwaXJ5ID0gJ2luZmluaXR5Jztcblx0XHRcdH0gZWxzZSBpZiAod2F0Y2hsaXN0RXhwaXJ5IGluc3RhbmNlb2YgTW9yZWJpdHMuZGF0ZSB8fCB3YXRjaGxpc3RFeHBpcnkgaW5zdGFuY2VvZiBEYXRlKSB7XG5cdFx0XHRcdHdhdGNobGlzdEV4cGlyeSA9IHdhdGNobGlzdEV4cGlyeS50b0lTT1N0cmluZygpO1xuXHRcdFx0fVxuXHRcdFx0c3dpdGNoICh3YXRjaGxpc3RPcHRpb24pIHtcblx0XHRcdFx0Y2FzZSAnbm9jaGFuZ2UnOlxuXHRcdFx0XHRjYXNlICdubyc6XG5cdFx0XHRcdGNhc2UgZmFsc2U6XG5cdFx0XHRcdGNhc2UgdW5kZWZpbmVkOlxuXHRcdFx0XHRcdGN0eC53YXRjaGxpc3RPcHRpb24gPSAnbm9jaGFuZ2UnO1xuXHRcdFx0XHRcdC8vIFRoZSBNVyBBUEkgYWxsb3dzIGZvciBjaGFuZ2luZyBleHBpcnkgd2l0aCBub2NoYW5nZSAoYXMgXCJub2NoYW5nZVwiIHJlZmVycyB0byB0aGUgYmluYXJ5IHN0YXR1cyksXG5cdFx0XHRcdFx0Ly8gYnV0IGJ5IGtlZXBpbmcgdGhpcyBudWxsIGl0IHdpbGwgZGVmYXVsdCB0byBhbnkgZXhpc3RpbmcgZXhwaXJ5LCBlbnN1cmUgdGhlcmUgaXMgYWN0dWFsbHkgXCJubyBjaGFuZ2UuXCJcblx0XHRcdFx0XHRjdHgud2F0Y2hsaXN0RXhwaXJ5ID0gbnVsbDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAndW53YXRjaCc6XG5cdFx0XHRcdFx0Ly8gZXhwaXJ5IHVuaW1wb3J0YW50XG5cdFx0XHRcdFx0Y3R4LndhdGNobGlzdE9wdGlvbiA9ICd1bndhdGNoJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAncHJlZmVyZW5jZXMnOlxuXHRcdFx0XHRjYXNlICdkZWZhdWx0Jzpcblx0XHRcdFx0XHRjdHgud2F0Y2hsaXN0T3B0aW9uID0gJ3ByZWZlcmVuY2VzJztcblx0XHRcdFx0XHQvLyBUaGUgQVBJIGFsbG93cyBhbiBleHBpcnkgaGVyZSwgYnV0IHRoZXJlIGlzIGFzIG9mIHlldCAoVDI2NTcxNilcblx0XHRcdFx0XHQvLyBubyBleHBpcnkgcHJlZmVyZW5jZSBvcHRpb24sIHNvIGl0J3MgYSBiaXQgZGV2b2lkIG9mIGNvbnRleHQuXG5cdFx0XHRcdFx0Y3R4LndhdGNobGlzdEV4cGlyeSA9IHdhdGNobGlzdEV4cGlyeTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnd2F0Y2gnOlxuXHRcdFx0XHRjYXNlICd5ZXMnOlxuXHRcdFx0XHRjYXNlIHRydWU6XG5cdFx0XHRcdFx0Y3R4LndhdGNobGlzdE9wdGlvbiA9ICd3YXRjaCc7XG5cdFx0XHRcdFx0Y3R4LndhdGNobGlzdEV4cGlyeSA9IHdhdGNobGlzdEV4cGlyeTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHQvLyBOb3QgcmVhbGx5IGEgXCJkZWZhdWx0XCIgcGVyIHNlIGJ1dCBjYXRjaGVzIFwiYW55IG90aGVyIHN0cmluZ1wiXG5cdFx0XHRcdFx0Y3R4LndhdGNobGlzdE9wdGlvbiA9ICd3YXRjaCc7XG5cdFx0XHRcdFx0Y3R4LndhdGNobGlzdEV4cGlyeSA9IHdhdGNobGlzdE9wdGlvbjtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFNldCBhIHdhdGNobGlzdCBleHBpcnkuIHNldFdhdGNobGlzdCBjYW4gbW9zdGx5IGhhbmRsZSB0aGlzIGJ5XG5cdFx0ICogaXRzZWxmLCBzbyB0aGlzIGlzIGhlcmUgbGFyZ2VseSBmb3IgY29tcGxldGVuZXNzIGFuZCBjb21wYXRpYmlsaXR5XG5cdFx0ICogd2l0aCB0aGUgZnVsbCBzdWl0ZSBvZiBvcHRpb25zLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfE1vcmViaXRzLmRhdGV8RGF0ZX0gW3dhdGNobGlzdEV4cGlyeT1pbmZpbml0eV0gLVxuXHRcdCAqIEEgZGF0ZS1saWtlIHN0cmluZyBvciBudW1iZXIsIG9yIGEgZGF0ZSBvYmplY3QuICBJZiBhIHN0cmluZyBvciBudW1iZXIsXG5cdFx0ICogY2FuIGJlIHJlbGF0aXZlICgyIHdlZWtzKSBvciBvdGhlciBzaW1pbGFybHkgZGF0ZS1saWtlIChpLmUuIE5PVCBcInBvdGF0b1wiKTpcblx0XHQgKiBJU08gODYwMTogMjAzOC0wMS0wOVQwMzoxNDowN1pcblx0XHQgKiBNZWRpYVdpa2k6IDIwMzgwMTA5MDMxNDA3XG5cdFx0ICogVU5JWDogMjE0NzQ4MzY0N1xuXHRcdCAqIFNRTDogMjAzOC0wMS0wOSAwMzoxNDowN1xuXHRcdCAqIENhbiBhbHNvIGJlIGBpbmZpbml0eWAgb3IgaW5maW5pdHktbGlrZSAoYGluZmluaXRlYCwgYGluZGVmaW5pdGVgLCBhbmQgYG5ldmVyYCkuXG5cdFx0ICogU2VlIHtAbGluayBodHRwczovL3BoYWJyaWNhdG9yLndpa2ltZWRpYS5vcmcvc291cmNlL21lZGlhd2lraS1saWJzLVRpbWVzdGFtcC9icm93c2UvbWFzdGVyL3NyYy9Db252ZXJ0aWJsZVRpbWVzdGFtcC5waHA7NGU1M2I4NTlhOTU4MGM1NTk1ODA3OGY0NmRkNGYzYTQ0ZDBmY2FhMCQ1Ny0xMDk/YXM9c291cmNlJmJsYW1lPW9mZn1cblx0XHQgKi9cblx0XHR0aGlzLnNldFdhdGNobGlzdEV4cGlyeSA9ICh3YXRjaGxpc3RFeHBpcnkpID0+IHtcblx0XHRcdGlmICh3YXRjaGxpc3RFeHBpcnkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR3YXRjaGxpc3RFeHBpcnkgPSAnaW5maW5pdHknO1xuXHRcdFx0fSBlbHNlIGlmICh3YXRjaGxpc3RFeHBpcnkgaW5zdGFuY2VvZiBNb3JlYml0cy5kYXRlIHx8IHdhdGNobGlzdEV4cGlyeSBpbnN0YW5jZW9mIERhdGUpIHtcblx0XHRcdFx0d2F0Y2hsaXN0RXhwaXJ5ID0gd2F0Y2hsaXN0RXhwaXJ5LnRvSVNPU3RyaW5nKCk7XG5cdFx0XHR9XG5cdFx0XHRjdHgud2F0Y2hsaXN0RXhwaXJ5ID0gd2F0Y2hsaXN0RXhwaXJ5O1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQGRlcHJlY2F0ZWQgQXMgb2YgRGVjZW1iZXIgMjAyMCwgdXNlIHNldFdhdGNobGlzdC5cblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFt3YXRjaGxpc3RPcHRpb249ZmFsc2VdIC1cblx0XHQgKiAtIGBUcnVlYDogcGFnZSB3YXRjaGxpc3Qgc3RhdHVzIHdpbGwgYmUgc2V0IGJhc2VkIG9uIHRoZSB1c2VyJ3Ncblx0XHQgKiBwcmVmZXJlbmNlIHNldHRpbmdzIHdoZW4gYHNhdmUoKWAgaXMgY2FsbGVkLlxuXHRcdCAqIC0gYEZhbHNlYDogd2F0Y2hsaXN0IHN0YXR1cyBvZiB0aGUgcGFnZSB3aWxsIG5vdCBiZSBjaGFuZ2VkLlxuXHRcdCAqXG5cdFx0ICogV2F0Y2hsaXN0IG5vdGVzOlxuXHRcdCAqIDEuIFRoZSBNZWRpYVdpa2kgQVBJIHZhbHVlIG9mICd1bndhdGNoJywgd2hpY2ggZXhwbGljaXRseSByZW1vdmVzXG5cdFx0ICogdGhlIHBhZ2UgZnJvbSB0aGUgdXNlcidzIHdhdGNobGlzdCwgaXMgbm90IHVzZWQuXG5cdFx0ICogMi4gSWYgYm90aCBgc2V0V2F0Y2hsaXN0KClgIGFuZCBgc2V0V2F0Y2hsaXN0RnJvbVByZWZlcmVuY2VzKClgIGFyZVxuXHRcdCAqIGNhbGxlZCwgdGhlIGxhc3QgY2FsbCB0YWtlcyBwcmlvcml0eS5cblx0XHQgKiAzLiBUd2lua2xlIG1vZHVsZXMgc2hvdWxkIHVzZSB0aGUgYXBwcm9wcmlhdGUgcHJlZmVyZW5jZSB0byBzZXQgdGhlIHdhdGNobGlzdCBvcHRpb25zLlxuXHRcdCAqIDQuIE1vc3QgVHdpbmtsZSBtb2R1bGVzIHVzZSBgc2V0V2F0Y2hsaXN0KClgLiBgc2V0V2F0Y2hsaXN0RnJvbVByZWZlcmVuY2VzKClgXG5cdFx0ICogaXMgb25seSBuZWVkZWQgZm9yIHRoZSBmZXcgVHdpbmtsZSB3YXRjaGxpc3QgcHJlZmVyZW5jZXMgdGhhdFxuXHRcdCAqIGFjY2VwdCBhIHN0cmluZyB2YWx1ZSBvZiBgZGVmYXVsdGAuXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRXYXRjaGxpc3RGcm9tUHJlZmVyZW5jZXMgPSAod2F0Y2hsaXN0T3B0aW9uKSA9PiB7XG5cdFx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRcdCdbTW9yZWJpdHNdIE5PVEU6IE1vcmViaXRzLndpa2kucGFnZS5zZXRXYXRjaGxpc3RGcm9tUHJlZmVyZW5jZXMgd2FzIGRlcHJlY2F0ZWQgRGVjZW1iZXIgMjAyMCwgcGxlYXNlIHVzZSBzZXRXYXRjaGxpc3QnXG5cdFx0XHQpO1xuXHRcdFx0aWYgKHdhdGNobGlzdE9wdGlvbikge1xuXHRcdFx0XHRjdHgud2F0Y2hsaXN0T3B0aW9uID0gJ3ByZWZlcmVuY2VzJztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN0eC53YXRjaGxpc3RPcHRpb24gPSAnbm9jaGFuZ2UnO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbZm9sbG93UmVkaXJlY3Q9ZmFsc2VdIC1cblx0XHQgKiAtIGB0cnVlYDogYSBtYXhpbXVtIG9mIG9uZSByZWRpcmVjdCB3aWxsIGJlIGZvbGxvd2VkLiBJbiB0aGUgZXZlbnRcblx0XHQgKiBvZiBhIHJlZGlyZWN0LCBhIG1lc3NhZ2UgaXMgZGlzcGxheWVkIHRvIHRoZSB1c2VyIGFuZCB0aGUgcmVkaXJlY3Rcblx0XHQgKiB0YXJnZXQgY2FuIGJlIHJldHJpZXZlZCB3aXRoIGdldFBhZ2VOYW1lKCkuXG5cdFx0ICogLSBgZmFsc2VgOiAoZGVmYXVsdCkgdGhlIHJlcXVlc3RlZCBwYWdlTmFtZSB3aWxsIGJlIHVzZWQgd2l0aG91dCByZWdhcmQgdG8gYW55IHJlZGlyZWN0LlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvbGxvd0Nyb3NzTnNSZWRpcmVjdD10cnVlXSAtIE5vdCBhcHBsaWNhYmxlIGlmIGBmb2xsb3dSZWRpcmVjdGAgaXMgbm90IHNldCB0cnVlLlxuXHRcdCAqIC0gYHRydWVgOiAoZGVmYXVsdCkgZm9sbG93IHJlZGlyZWN0IGV2ZW4gaWYgaXQgaXMgYSBjcm9zcy1uYW1lc3BhY2UgcmVkaXJlY3Rcblx0XHQgKiAtIGBmYWxzZWA6IGRvbid0IGZvbGxvdyByZWRpcmVjdCBpZiBpdCBpcyBjcm9zcy1uYW1lc3BhY2UsIGVkaXQgdGhlIHJlZGlyZWN0IGl0c2VsZi5cblx0XHQgKi9cblx0XHR0aGlzLnNldEZvbGxvd1JlZGlyZWN0ID0gKGZvbGxvd1JlZGlyZWN0LCBmb2xsb3dDcm9zc05zUmVkaXJlY3QpID0+IHtcblx0XHRcdGlmIChjdHgucGFnZUxvYWRlZCkge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHQnSW50ZXJuYWwgZXJyb3I6IGNhbm5vdCBjaGFuZ2UgcmVkaXJlY3Qgc2V0dGluZyBhZnRlciB0aGUgcGFnZSBoYXMgYmVlbiBsb2FkZWQhJ1xuXHRcdFx0XHQpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjdHguZm9sbG93UmVkaXJlY3QgPSBmb2xsb3dSZWRpcmVjdDtcblx0XHRcdGN0eC5mb2xsb3dDcm9zc05zUmVkaXJlY3QgPVxuXHRcdFx0XHRmb2xsb3dDcm9zc05zUmVkaXJlY3QgPT09IHVuZGVmaW5lZCA/IGN0eC5mb2xsb3dDcm9zc05zUmVkaXJlY3QgOiBmb2xsb3dDcm9zc05zUmVkaXJlY3Q7XG5cdFx0fTtcblx0XHQvLyBsb29rdXAtY3JlYXRpb24gc2V0dGVyIGZ1bmN0aW9uXG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBmbGFnIC0gSWYgc2V0IHRydWUsIHRoZSBhdXRob3IgYW5kIHRpbWVzdGFtcCBvZlxuXHRcdCAqIHRoZSBmaXJzdCBub24tcmVkaXJlY3QgdmVyc2lvbiBvZiB0aGUgcGFnZSBpcyByZXRyaWV2ZWQuXG5cdFx0ICpcblx0XHQgKiBXYXJuaW5nOlxuXHRcdCAqIDEuIElmIHRoZXJlIGFyZSBubyByZXZpc2lvbnMgYW1vbmcgdGhlIGZpcnN0IDUwIHRoYXQgYXJlXG5cdFx0ICogbm9uLXJlZGlyZWN0cywgb3IgaWYgdGhlcmUgYXJlIGxlc3MgNTAgcmV2aXNpb25zIGFuZCBhbGwgYXJlXG5cdFx0ICogcmVkaXJlY3RzLCB0aGUgb3JpZ2luYWwgY3JlYXRpb24gaXMgcmV0cmlldmVkLlxuXHRcdCAqIDIuIFJldmlzaW9ucyB0aGF0IHRoZSB1c2VyIGlzIG5vdCBwcml2aWxlZ2VkIHRvIGFjY2Vzc1xuXHRcdCAqIChyZXZkZWxlZC9zdXBwcmVzc2VkKSB3aWxsIGJlIHRyZWF0ZWQgYXMgbm9uLXJlZGlyZWN0cy5cblx0XHQgKiAzLiBNdXN0IG5vdCBiZSB1c2VkIHdoZW4gdGhlIHBhZ2UgaGFzIGEgbm9uLXdpa2l0ZXh0IGNvbnRlbnRtb2RlbFxuXHRcdCAqIHN1Y2ggYXMgTW9kdWxlc3BhY2UgTHVhIG9yIHVzZXIgSmF2YVNjcmlwdC9DU1MuXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRMb29rdXBOb25SZWRpcmVjdENyZWF0b3IgPSAoZmxhZykgPT4ge1xuXHRcdFx0Y3R4Lmxvb2t1cE5vblJlZGlyZWN0Q3JlYXRvciA9IGZsYWc7XG5cdFx0fTtcblx0XHQvLyBNb3ZlLXJlbGF0ZWQgc2V0dGVyIGZ1bmN0aW9uc1xuXHRcdC8qKiBAcGFyYW0ge3N0cmluZ30gZGVzdGluYXRpb24gKi9cblx0XHR0aGlzLnNldE1vdmVEZXN0aW5hdGlvbiA9IChkZXN0aW5hdGlvbikgPT4ge1xuXHRcdFx0Y3R4Lm1vdmVEZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uO1xuXHRcdH07XG5cdFx0LyoqIEBwYXJhbSB7Ym9vbGVhbn0gZmxhZyAqL1xuXHRcdHRoaXMuc2V0TW92ZVRhbGtQYWdlID0gKGZsYWcpID0+IHtcblx0XHRcdGN0eC5tb3ZlVGFsa1BhZ2UgPSAhIWZsYWc7XG5cdFx0fTtcblx0XHQvKiogQHBhcmFtIHtib29sZWFufSBmbGFnICovXG5cdFx0dGhpcy5zZXRNb3ZlU3VicGFnZXMgPSAoZmxhZykgPT4ge1xuXHRcdFx0Y3R4Lm1vdmVTdWJwYWdlcyA9ICEhZmxhZztcblx0XHR9O1xuXHRcdC8qKiBAcGFyYW0ge2Jvb2xlYW59IGZsYWcgKi9cblx0XHR0aGlzLnNldE1vdmVTdXBwcmVzc1JlZGlyZWN0ID0gKGZsYWcpID0+IHtcblx0XHRcdGN0eC5tb3ZlU3VwcHJlc3NSZWRpcmVjdCA9ICEhZmxhZztcblx0XHR9O1xuXHRcdC8vIFByb3RlY3QtcmVsYXRlZCBzZXR0ZXIgZnVuY3Rpb25zXG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGxldmVsIC0gVGhlIHJpZ2h0IHJlcXVpcmVkIGZvciB0aGUgc3BlY2lmaWMgYWN0aW9uXG5cdFx0ICogZS5nLiBzeXNvcCwgdGVtcGxhdGVlZGl0b3IsIGF1dG9jb25maXJtZWRcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gW2V4cGlyeT1pbmZpbml0eV1cblx0XHQgKi9cblx0XHR0aGlzLnNldEVkaXRQcm90ZWN0aW9uID0gKGxldmVsLCBleHBpcnkpID0+IHtcblx0XHRcdGN0eC5wcm90ZWN0RWRpdCA9IHtcblx0XHRcdFx0bGV2ZWwsXG5cdFx0XHRcdGV4cGlyeTogZXhwaXJ5IHx8ICdpbmZpbml0eScsXG5cdFx0XHR9O1xuXHRcdH07XG5cdFx0dGhpcy5zZXRNb3ZlUHJvdGVjdGlvbiA9IChsZXZlbCwgZXhwaXJ5KSA9PiB7XG5cdFx0XHRjdHgucHJvdGVjdE1vdmUgPSB7XG5cdFx0XHRcdGxldmVsLFxuXHRcdFx0XHRleHBpcnk6IGV4cGlyeSB8fCAnaW5maW5pdHknLFxuXHRcdFx0fTtcblx0XHR9O1xuXHRcdHRoaXMuc2V0Q3JlYXRlUHJvdGVjdGlvbiA9IChsZXZlbCwgZXhwaXJ5KSA9PiB7XG5cdFx0XHRjdHgucHJvdGVjdENyZWF0ZSA9IHtcblx0XHRcdFx0bGV2ZWwsXG5cdFx0XHRcdGV4cGlyeTogZXhwaXJ5IHx8ICdpbmZpbml0eScsXG5cdFx0XHR9O1xuXHRcdH07XG5cdFx0dGhpcy5zZXRDYXNjYWRpbmdQcm90ZWN0aW9uID0gKGZsYWcpID0+IHtcblx0XHRcdGN0eC5wcm90ZWN0Q2FzY2FkZSA9ICEhZmxhZztcblx0XHR9O1xuXHRcdHRoaXMuc3VwcHJlc3NQcm90ZWN0V2FybmluZyA9ICgpID0+IHtcblx0XHRcdGN0eC5zdXBwcmVzc1Byb3RlY3RXYXJuaW5nID0gdHJ1ZTtcblx0XHR9O1xuXHRcdC8vIFJldmVydC1yZWxhdGVkIGdldHRlcnMvc2V0dGVyczpcblx0XHR0aGlzLnNldE9sZElEID0gKG9sZElEKSA9PiB7XG5cdFx0XHRjdHgucmV2ZXJ0T2xkSUQgPSBvbGRJRDtcblx0XHR9O1xuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY3VycmVudCByZXZpc2lvbiBJRCBvZiB0aGUgcGFnZSAqL1xuXHRcdHRoaXMuZ2V0Q3VycmVudElEID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC5yZXZlcnRDdXJJRDtcblx0XHR9O1xuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSBMYXN0IGVkaXRvciBvZiB0aGUgcGFnZSAqL1xuXHRcdHRoaXMuZ2V0UmV2aXNpb25Vc2VyID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC5yZXZlcnRVc2VyO1xuXHRcdH07XG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9IElTTyA4NjAxIHRpbWVzdGFtcCBhdCB3aGljaCB0aGUgcGFnZSB3YXMgbGFzdCBlZGl0ZWQuICovXG5cdFx0dGhpcy5nZXRMYXN0RWRpdFRpbWUgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4Lmxhc3RFZGl0VGltZTtcblx0XHR9O1xuXHRcdC8vIE1pc2NlbGxhbmVvdXMgZ2V0dGVycy9zZXR0ZXJzOlxuXHRcdC8qKlxuXHRcdCAqIERlZmluZSBhbiBvYmplY3QgZm9yIHVzZSBpbiBhIGNhbGxiYWNrIGZ1bmN0aW9uLlxuXHRcdCAqXG5cdFx0ICogYGNhbGxiYWNrUGFyYW1ldGVyc2AgaXMgZm9yIHVzZSBieSB0aGUgY2FsbGVyIG9ubHkuIFRoZSBwYXJhbWV0ZXJzXG5cdFx0ICogYWxsb3cgYSBjYWxsZXIgdG8gcGFzcyB0aGUgcHJvcGVyIGNvbnRleHQgaW50byBpdHMgY2FsbGJhY2tcblx0XHQgKiBmdW5jdGlvbi4gIENhbGxlcnMgbXVzdCBlbnN1cmUgdGhhdCBhbnkgY2hhbmdlcyB0byB0aGVcblx0XHQgKiBjYWxsYmFja1BhcmFtZXRlcnMgb2JqZWN0IHdpdGhpbiBhIGBsb2FkKClgIGNhbGxiYWNrIHN0aWxsIHBlcm1pdCBhXG5cdFx0ICogcHJvcGVyIHJlLWVudHJ5IGludG8gdGhlIGBsb2FkKClgIGNhbGxiYWNrIGlmIGFuIGVkaXQgY29uZmxpY3QgaXNcblx0XHQgKiBkZXRlY3RlZCB1cG9uIGNhbGxpbmcgYHNhdmUoKWAuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2tQYXJhbWV0ZXJzXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRDYWxsYmFja1BhcmFtZXRlcnMgPSAoY2FsbGJhY2tQYXJhbWV0ZXJzKSA9PiB7XG5cdFx0XHRjdHguY2FsbGJhY2tQYXJhbWV0ZXJzID0gY2FsbGJhY2tQYXJhbWV0ZXJzO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHJldHVybnMge09iamVjdH0gLSBUaGUgb2JqZWN0IHByZXZpb3VzbHkgc2V0IGJ5IGBzZXRDYWxsYmFja1BhcmFtZXRlcnMoKWAuXG5cdFx0ICovXG5cdFx0dGhpcy5nZXRDYWxsYmFja1BhcmFtZXRlcnMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LmNhbGxiYWNrUGFyYW1ldGVycztcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7TW9yZWJpdHMuc3RhdHVzfSBzdGF0dXNFbGVtZW50XG5cdFx0ICovXG5cdFx0dGhpcy5zZXRTdGF0dXNFbGVtZW50ID0gKHN0YXR1c0VsZW1lbnQpID0+IHtcblx0XHRcdGN0eC5zdGF0dXNFbGVtZW50ID0gc3RhdHVzRWxlbWVudDtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zdGF0dXN9IFN0YXR1cyBlbGVtZW50IGNyZWF0ZWQgYnkgdGhlIGNvbnN0cnVjdG9yLlxuXHRcdCAqL1xuXHRcdHRoaXMuZ2V0U3RhdHVzRWxlbWVudCA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHguc3RhdHVzRWxlbWVudDtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBwYWdlIGV4aXN0ZWQgb24gdGhlIHdpa2kgd2hlbiBpdCB3YXMgbGFzdCBsb2FkZWQuXG5cdFx0ICovXG5cdFx0dGhpcy5leGlzdHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LnBhZ2VFeGlzdHM7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfSBQYWdlIElEIG9mIHRoZSBwYWdlIGxvYWRlZC4gMCBpZiB0aGUgcGFnZSBkb2Vzbid0XG5cdFx0ICogZXhpc3QuXG5cdFx0ICovXG5cdFx0dGhpcy5nZXRQYWdlSUQgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LnBhZ2VJRDtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9IC0gQ29udGVudCBtb2RlbCBvZiB0aGUgcGFnZS4gIFBvc3NpYmxlIHZhbHVlc1xuXHRcdCAqIGluY2x1ZGUgKGJ1dCBtYXkgbm90IGJlIGxpbWl0ZWQgdG8pOiBgd2lraXRleHRgLCBgamF2YXNjcmlwdGAsXG5cdFx0ICogYGNzc2AsIGBqc29uYCwgYFNjcmlidW50b2AsIGBzYW5pdGl6ZWQtY3NzYCwgYE1hc3NNZXNzYWdlTGlzdENvbnRlbnRgLlxuXHRcdCAqIEFsc28gZ2V0dGFibGUgdmlhIGBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VDb250ZW50TW9kZWwnKWAuXG5cdFx0ICovXG5cdFx0dGhpcy5nZXRDb250ZW50TW9kZWwgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LmNvbnRlbnRNb2RlbDtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufHN0cmluZ30gLSBXYXRjaGVkIHN0YXR1cyBvZiB0aGUgcGFnZS4gQm9vbGVhblxuXHRcdCAqIHVubGVzcyBpdCdzIGJlaW5nIHdhdGNoZWQgdGVtcG9yYXJpbHksIGluIHdoaWNoIGNhc2UgcmV0dXJucyB0aGVcblx0XHQgKiBleHBpcnkgc3RyaW5nLlxuXHRcdCAqL1xuXHRcdHRoaXMuZ2V0V2F0Y2hlZCA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHgud2F0Y2hlZDtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9IElTTyA4NjAxIHRpbWVzdGFtcCBhdCB3aGljaCB0aGUgcGFnZSB3YXMgbGFzdCBsb2FkZWQuXG5cdFx0ICovXG5cdFx0dGhpcy5nZXRMb2FkVGltZSA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHgubG9hZFRpbWU7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgdXNlciB3aG8gY3JlYXRlZCB0aGUgcGFnZSBmb2xsb3dpbmcgYGxvb2t1cENyZWF0aW9uKClgLlxuXHRcdCAqL1xuXHRcdHRoaXMuZ2V0Q3JlYXRvciA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHguY3JlYXRvcjtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBJU09TdHJpbmcgdGltZXN0YW1wIG9mIHBhZ2UgY3JlYXRpb24gZm9sbG93aW5nIGBsb29rdXBDcmVhdGlvbigpYC5cblx0XHQgKi9cblx0XHR0aGlzLmdldENyZWF0aW9uVGltZXN0YW1wID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC50aW1lc3RhbXA7XG5cdFx0fTtcblx0XHQvKiogQHJldHVybnMge2Jvb2xlYW59IHdoZXRoZXIgb3Igbm90IHlvdSBjYW4gZWRpdCB0aGUgcGFnZSAqL1xuXHRcdHRoaXMuY2FuRWRpdCA9ICgpID0+IHtcblx0XHRcdHJldHVybiAhIWN0eC50ZXN0QWN0aW9ucyAmJiBjdHgudGVzdEFjdGlvbnMuaW5jbHVkZXMoJ2VkaXQnKTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFJldHJpZXZlcyB0aGUgdXNlcm5hbWUgb2YgdGhlIHVzZXIgd2hvIGNyZWF0ZWQgdGhlIHBhZ2UgYXMgd2VsbCBhc1xuXHRcdCAqIHRoZSB0aW1lc3RhbXAgb2YgY3JlYXRpb24uICBUaGUgdXNlcm5hbWUgY2FuIGJlIHJldHJpZXZlZCB1c2luZyB0aGVcblx0XHQgKiBgZ2V0Q3JlYXRvcigpYCBmdW5jdGlvbjsgdGhlIHRpbWVzdGFtcCBjYW4gYmUgcmV0cmlldmVkIHVzaW5nIHRoZVxuXHRcdCAqIGBnZXRDcmVhdGlvblRpbWVzdGFtcCgpYCBmdW5jdGlvbi5cblx0XHQgKiBQcmlvciB0byBKdW5lIDIwMTkga25vd24gYXMgYGxvb2t1cENyZWF0b3IoKWAuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvblN1Y2Nlc3MgLSBDYWxsYmFjayBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlblxuXHRcdCAqIHRoZSB1c2VybmFtZSBhbmQgdGltZXN0YW1wIGFyZSBmb3VuZCB3aXRoaW4gdGhlIGNhbGxiYWNrLlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW5cblx0XHQgKiB0aGUgbG9va3VwIGZhaWxzXG5cdFx0ICovXG5cdFx0dGhpcy5sb29rdXBDcmVhdGlvbiA9IGZ1bmN0aW9uIChvblN1Y2Nlc3MsIG9uRmFpbHVyZSkge1xuXHRcdFx0Y3R4Lm9uTG9va3VwQ3JlYXRpb25TdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdFx0Y3R4Lm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHRpZiAoIW9uU3VjY2Vzcykge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcignSW50ZXJuYWwgZXJyb3I6IG5vIG9uU3VjY2VzcyBjYWxsYmFjayBwcm92aWRlZCB0byBsb29rdXBDcmVhdGlvbigpIScpO1xuXHRcdFx0XHRjdHgub25Mb29rdXBDcmVhdGlvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHF1ZXJ5ID0ge1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdFx0XHR0aXRsZXM6IGN0eC5wYWdlTmFtZSxcblx0XHRcdFx0cnZsaW1pdDogMSxcblx0XHRcdFx0cnZwcm9wOiAndXNlcnx0aW1lc3RhbXAnLFxuXHRcdFx0XHRydmRpcjogJ25ld2VyJyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHR9O1xuXHRcdFx0Ly8gT25seSB0aGUgd2lraXRleHQgY29udGVudCBtb2RlbCBjYW4gcmVsaWFibHkgaGFuZGxlXG5cdFx0XHQvLyBydnNlY3Rpb24sIG90aGVycyByZXR1cm4gYW4gZXJyb3Igd2hlbiBwYWlyZWQgd2l0aCB0aGVcblx0XHRcdC8vIGNvbnRlbnQgcnZwcm9wLiBSZWxhdGVkbHksIG5vbi13aWtpdGV4dCBtb2RlbHMgZG9uJ3Rcblx0XHRcdC8vIHVuZGVyc3RhbmQgdGhlICNSRURJUkVDVCBjb25jZXB0LCBzbyB3ZSBzaG91bGRuJ3QgYXR0ZW1wdFxuXHRcdFx0Ly8gdGhlIHJlZGlyZWN0IHJlc29sdXRpb24gaW4gZm5Mb29rdXBDcmVhdGlvblN1Y2Nlc3Ncblx0XHRcdGlmIChjdHgubG9va3VwTm9uUmVkaXJlY3RDcmVhdG9yKSB7XG5cdFx0XHRcdHF1ZXJ5LnJ2c2VjdGlvbiA9IDA7XG5cdFx0XHRcdHF1ZXJ5LnJ2cHJvcCArPSAnfGNvbnRlbnQnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN0eC5mb2xsb3dSZWRpcmVjdCkge1xuXHRcdFx0XHRxdWVyeS5yZWRpcmVjdHMgPSAnJzsgLy8gZm9sbG93IGFsbCByZWRpcmVjdHNcblx0XHRcdH1cblxuXHRcdFx0Y3R4Lmxvb2t1cENyZWF0aW9uQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoJ+aKk+WPlumhtemdouWIm+W7uuiAheS/oeaBrycsICfmipPlj5bpoIHpnaLlu7rnq4vogIXos4foqIonKSxcblx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdGZuTG9va3VwQ3JlYXRpb25TdWNjZXNzLFxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0Y3R4Lm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlXG5cdFx0XHQpO1xuXHRcdFx0Y3R4Lmxvb2t1cENyZWF0aW9uQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdGN0eC5sb29rdXBDcmVhdGlvbkFwaS5wb3N0KCk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBSZXZlcnRzIGEgcGFnZSB0byBgcmV2ZXJ0T2xkSURgIHNldCBieSBgc2V0T2xkSURgLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uU3VjY2Vzc10gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gc3VjY2Vzcy5cblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25GYWlsdXJlXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIHJ1biBvbiBmYWlsdXJlLlxuXHRcdCAqL1xuXHRcdHRoaXMucmV2ZXJ0ID0gZnVuY3Rpb24gKG9uU3VjY2Vzcywgb25GYWlsdXJlKSB7XG5cdFx0XHRjdHgub25TYXZlU3VjY2VzcyA9IG9uU3VjY2Vzcztcblx0XHRcdGN0eC5vblNhdmVGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHRpZiAoIWN0eC5yZXZlcnRPbGRJRCkge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcignSW50ZXJuYWwgZXJyb3I6IHJldmlzaW9uIElEIHRvIHJldmVydCB0byB3YXMgbm90IHNldCBiZWZvcmUgcmV2ZXJ0IScpO1xuXHRcdFx0XHRjdHgub25TYXZlRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LmVkaXRNb2RlID0gJ3JldmVydCc7XG5cdFx0XHR0aGlzLmxvYWQoZm5BdXRvU2F2ZSwgY3R4Lm9uU2F2ZUZhaWx1cmUpO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogTW92ZXMgYSBwYWdlIHRvIGFub3RoZXIgdGl0bGUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25TdWNjZXNzXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIHJ1biBvbiBzdWNjZXNzLlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIGZhaWx1cmUuXG5cdFx0ICovXG5cdFx0dGhpcy5tb3ZlID0gZnVuY3Rpb24gKG9uU3VjY2Vzcywgb25GYWlsdXJlKSB7XG5cdFx0XHRjdHgub25Nb3ZlU3VjY2VzcyA9IG9uU3VjY2Vzcztcblx0XHRcdGN0eC5vbk1vdmVGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHRpZiAoIWZuUHJlZmxpZ2h0Q2hlY2tzLmNhbGwodGhpcywgJ21vdmUnLCBjdHgub25Nb3ZlRmFpbHVyZSkpIHtcblx0XHRcdFx0cmV0dXJuOyAvLyBhYm9ydFxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWN0eC5tb3ZlRGVzdGluYXRpb24pIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoJ0ludGVybmFsIGVycm9yOiBkZXN0aW5hdGlvbiBwYWdlIG5hbWUgd2FzIG5vdCBzZXQgYmVmb3JlIG1vdmUhJyk7XG5cdFx0XHRcdGN0eC5vbk1vdmVGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoZm5DYW5Vc2VNd1VzZXJUb2tlbignbW92ZScpKSB7XG5cdFx0XHRcdGZuUHJvY2Vzc01vdmUuY2FsbCh0aGlzLCB0aGlzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHF1ZXJ5ID0gZm5OZWVkVG9rZW5JbmZvUXVlcnkoJ21vdmUnKTtcblx0XHRcdFx0Y3R4Lm1vdmVBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfojrflj5bku6TniYzigKbigKYnLCAn5Y+W5b6X5qyK5p2W4oCm4oCmJyksXG5cdFx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdFx0Zm5Qcm9jZXNzTW92ZSxcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0XHRjdHgub25Nb3ZlRmFpbHVyZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRjdHgubW92ZUFwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRcdGN0eC5tb3ZlQXBpLnBvc3QoKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIE1hcmtzIHRoZSBwYWdlIGFzIHBhdHJvbGxlZCwgdXNpbmcgYHJjaWRgIChpZiBhdmFpbGFibGUpIG9yIGByZXZpZGAuXG5cdFx0ICpcblx0XHQgKiBQYXRyb2xsaW5nIGFzIHN1Y2ggZG9lc24ndCBuZWVkIHRvIHJlbHkgb24gbG9hZGluZyB0aGUgcGFnZSBpblxuXHRcdCAqIHF1ZXN0aW9uOyBzaW1wbHkgcGFzc2luZyBhIHJldmlkIHRvIHRoZSBBUEkgaXMgc3VmZmljaWVudCwgc28gaW5cblx0XHQgKiB0aG9zZSBjYXNlcyBqdXN0IHVzaW5nIHtAbGluayBNb3JlYml0cy53aWtpLmFwaX0gaXMgcHJvYmFibHkgcHJlZmVyYWJsZS5cblx0XHQgKlxuXHRcdCAqIE5vIGVycm9yIGhhbmRsaW5nIHNpbmNlIHdlIGRvbid0IGFjdHVhbGx5IGNhcmUgYWJvdXQgdGhlIGVycm9ycy5cblx0XHQgKi9cblx0XHR0aGlzLnBhdHJvbCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmICghTW9yZWJpdHMudXNlcklzU3lzb3AgJiYgIU1vcmViaXRzLnVzZXJJc0luR3JvdXAoJ3BhdHJvbGxlcicpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdFx0Ly8gSWYgYSBsaW5rIGlzIHByZXNlbnQsIGRvbid0IG5lZWQgdG8gY2hlY2sgaWYgaXQncyBwYXRyb2xsZWRcblx0XHRcdGlmICgkYm9keS5maW5kKCcucGF0cm9sbGluaycpLmxlbmd0aCkge1xuXHRcdFx0XHRjb25zdCBwYXRyb2xocmVmID0gJGJvZHkuZmluZCgnLnBhdHJvbGxpbmsgYScpLmF0dHIoJ2hyZWYnKTtcblx0XHRcdFx0Y3R4LnJjaWQgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3JjaWQnLCBwYXRyb2xocmVmKTtcblx0XHRcdFx0Zm5Qcm9jZXNzUGF0cm9sKHRoaXMsIHRoaXMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgcGF0cm9sUXVlcnkgPSB7XG5cdFx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRcdHByb3A6ICdpbmZvJyxcblx0XHRcdFx0XHRtZXRhOiAndG9rZW5zJyxcblx0XHRcdFx0XHR0eXBlOiAncGF0cm9sJyxcblx0XHRcdFx0XHQvLyBhcyBsb25nIGFzIHdlJ3JlIHF1ZXJ5aW5nLCBtaWdodCBhcyB3ZWxsIGdldCBhIHRva2VuXG5cdFx0XHRcdFx0bGlzdDogJ3JlY2VudGNoYW5nZXMnLFxuXHRcdFx0XHRcdC8vIGNoZWNrIGlmIHRoZSBwYWdlIGlzIHVucGF0cm9sbGVkXG5cdFx0XHRcdFx0dGl0bGVzOiBjdHgucGFnZU5hbWUsXG5cdFx0XHRcdFx0cmNwcm9wOiAncGF0cm9sbGVkJyxcblx0XHRcdFx0XHRyY3RpdGxlOiBjdHgucGFnZU5hbWUsXG5cdFx0XHRcdFx0cmNsaW1pdDogMSxcblx0XHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0fTtcblx0XHRcdFx0Y3R4LnBhdHJvbEFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+iOt+WPluS7pOeJjOKApuKApicsICflj5blvpfmrIrmnZbigKbigKYnKSxcblx0XHRcdFx0XHRwYXRyb2xRdWVyeSxcblx0XHRcdFx0XHRmblByb2Nlc3NQYXRyb2xcblx0XHRcdFx0KTtcblx0XHRcdFx0Y3R4LnBhdHJvbEFwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRcdGN0eC5wYXRyb2xBcGkucG9zdCgpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0Ly8gfGRlbGV0ZXwgaXMgYSByZXNlcnZlZCB3b3JkIGluIHNvbWUgZmxhdm91cnMgb2YgSlNcblx0XHQvKipcblx0XHQgKiBEZWxldGVzIGEgcGFnZSAoZm9yIGFkbWlucyBvbmx5KS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvblN1Y2Nlc3NdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIHN1Y2Nlc3MuXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gZmFpbHVyZS5cblx0XHQgKi9cblx0XHR0aGlzLmRlbGV0ZVBhZ2UgPSBmdW5jdGlvbiAob25TdWNjZXNzLCBvbkZhaWx1cmUpIHtcblx0XHRcdGN0eC5vbkRlbGV0ZVN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0XHRjdHgub25EZWxldGVGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHRpZiAoIWZuUHJlZmxpZ2h0Q2hlY2tzLmNhbGwodGhpcywgJ2RlbGV0ZScsIGN0eC5vbkRlbGV0ZUZhaWx1cmUpKSB7XG5cdFx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHRcdH1cblxuXHRcdFx0aWYgKGZuQ2FuVXNlTXdVc2VyVG9rZW4oJ2RlbGV0ZScpKSB7XG5cdFx0XHRcdGZuUHJvY2Vzc0RlbGV0ZS5jYWxsKHRoaXMsIHRoaXMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgcXVlcnkgPSBmbk5lZWRUb2tlbkluZm9RdWVyeSgnZGVsZXRlJyk7XG5cdFx0XHRcdGN0eC5kZWxldGVBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfojrflj5bku6TniYzigKbigKYnLCAn5Y+W5b6X5qyK5p2W4oCm4oCmJyksXG5cdFx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdFx0Zm5Qcm9jZXNzRGVsZXRlLFxuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHRcdGN0eC5vbkRlbGV0ZUZhaWx1cmVcblx0XHRcdFx0KTtcblx0XHRcdFx0Y3R4LmRlbGV0ZUFwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRcdGN0eC5kZWxldGVBcGkucG9zdCgpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogVW5kZWxldGVzIGEgcGFnZSAoZm9yIGFkbWlucyBvbmx5KS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvblN1Y2Nlc3NdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIHN1Y2Nlc3MuXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gZmFpbHVyZS5cblx0XHQgKi9cblx0XHR0aGlzLnVuZGVsZXRlUGFnZSA9IGZ1bmN0aW9uIChvblN1Y2Nlc3MsIG9uRmFpbHVyZSkge1xuXHRcdFx0Y3R4Lm9uVW5kZWxldGVTdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdFx0Y3R4Lm9uVW5kZWxldGVGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHRpZiAoIWZuUHJlZmxpZ2h0Q2hlY2tzLmNhbGwodGhpcywgJ3VuZGVsZXRlJywgY3R4Lm9uVW5kZWxldGVGYWlsdXJlKSkge1xuXHRcdFx0XHRyZXR1cm47IC8vIGFib3J0XG5cdFx0XHR9XG5cblx0XHRcdGlmIChmbkNhblVzZU13VXNlclRva2VuKCd1bmRlbGV0ZScpKSB7XG5cdFx0XHRcdGZuUHJvY2Vzc1VuZGVsZXRlLmNhbGwodGhpcywgdGhpcyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCBxdWVyeSA9IGZuTmVlZFRva2VuSW5mb1F1ZXJ5KCd1bmRlbGV0ZScpO1xuXHRcdFx0XHRjdHgudW5kZWxldGVBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfojrflj5bku6TniYzigKbigKYnLCAn5Y+W5b6X5qyK5p2W4oCm4oCmJyksXG5cdFx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdFx0Zm5Qcm9jZXNzVW5kZWxldGUsXG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdFx0Y3R4Lm9uVW5kZWxldGVGYWlsdXJlXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGN0eC51bmRlbGV0ZUFwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRcdGN0eC51bmRlbGV0ZUFwaS5wb3N0KCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBQcm90ZWN0cyBhIHBhZ2UgKGZvciBhZG1pbnMgb25seSkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25TdWNjZXNzXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIHJ1biBvbiBzdWNjZXNzLlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIGZhaWx1cmUuXG5cdFx0ICovXG5cdFx0dGhpcy5wcm90ZWN0ID0gZnVuY3Rpb24gKG9uU3VjY2Vzcywgb25GYWlsdXJlKSB7XG5cdFx0XHRjdHgub25Qcm90ZWN0U3VjY2VzcyA9IG9uU3VjY2Vzcztcblx0XHRcdGN0eC5vblByb3RlY3RGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHRpZiAoIWZuUHJlZmxpZ2h0Q2hlY2tzLmNhbGwodGhpcywgJ3Byb3RlY3QnLCBjdHgub25Qcm90ZWN0RmFpbHVyZSkpIHtcblx0XHRcdFx0cmV0dXJuOyAvLyBhYm9ydFxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWN0eC5wcm90ZWN0RWRpdCAmJiAhY3R4LnByb3RlY3RNb3ZlICYmICFjdHgucHJvdGVjdENyZWF0ZSkge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHQnSW50ZXJuYWwgZXJyb3I6IHlvdSBtdXN0IHNldCBlZGl0IGFuZC9vciBtb3ZlIGFuZC9vciBjcmVhdGUgcHJvdGVjdGlvbiBiZWZvcmUgY2FsbGluZyBwcm90ZWN0KCkhJ1xuXHRcdFx0XHQpO1xuXHRcdFx0XHRjdHgub25Qcm90ZWN0RmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Ly8gYmVjYXVzZSBvZiB0aGUgd2F5IE1XIEFQSSBpbnRlcnByZXRzIHByb3RlY3Rpb24gbGV2ZWxzXG5cdFx0XHQvLyAoYWJzb2x1dGUsIG5vdCBkaWZmZXJlbnRpYWwpLCB3ZSBhbHdheXMgbmVlZCB0byByZXF1ZXN0XG5cdFx0XHQvLyBwcm90ZWN0aW9uIGxldmVscyBmcm9tIHRoZSBzZXJ2ZXJcblx0XHRcdGNvbnN0IHF1ZXJ5ID0gZm5OZWVkVG9rZW5JbmZvUXVlcnkoJ3Byb3RlY3QnKTtcblx0XHRcdGN0eC5wcm90ZWN0QXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoJ+iOt+WPluS7pOeJjOKApuKApicsICflj5blvpfmrIrmnZbigKbigKYnKSxcblx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdGZuUHJvY2Vzc1Byb3RlY3QsXG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHRjdHgub25Qcm90ZWN0RmFpbHVyZVxuXHRcdFx0KTtcblx0XHRcdGN0eC5wcm90ZWN0QXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdGN0eC5wcm90ZWN0QXBpLnBvc3QoKTtcblx0XHR9O1xuXHRcdC8qXG5cdFx0ICogUHJpdmF0ZSBtZW1iZXIgZnVuY3Rpb25zXG5cdFx0ICogVGhlc2UgYXJlIG5vdCBleHBvc2VkIG91dHNpZGVcblx0XHQgKi9cblx0XHQvKipcblx0XHQgKiBEZXRlcm1pbmVzIHdoZXRoZXIgd2UgY2FuIHNhdmUgYW4gQVBJIGNhbGwgYnkgdXNpbmcgdGhlIGNzcmYgdG9rZW5cblx0XHQgKiBzZW50IHdpdGggdGhlIHBhZ2UgSFRNTCwgb3Igd2hldGhlciB3ZSBuZWVkIHRvIGFzayB0aGUgc2VydmVyIGZvclxuXHRcdCAqIG1vcmUgaW5mbyAoZS5nLiBwcm90ZWN0aW9uIG9yIHdhdGNobGlzdCBleHBpcnkpLlxuXHRcdCAqXG5cdFx0ICogQ3VycmVudGx5IHVzZWQgZm9yIGBhcHBlbmRgLCBgcHJlcGVuZGAsIGBuZXdTZWN0aW9uYCwgYG1vdmVgLFxuXHRcdCAqIGBkZWxldGVQYWdlYCwgYW5kIGB1bmRlbGV0ZVBhZ2VgLiBOb3QgdXNlZCBmb3IgYHByb3RlY3RgXG5cdFx0ICogc2luY2UgaXQgYWx3YXlzIG5lZWRzIHRvIHJlcXVlc3QgcHJvdGVjdGlvbiBzdGF0dXMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gW2FjdGlvbj1lZGl0XSAtIFRoZSBhY3Rpb24gYmVpbmcgdW5kZXJ0YWtlbiwgZS5nLlxuXHRcdCAqIFwiZWRpdFwiIG9yIFwiZGVsZXRlXCIuIEluIHByYWN0aWNlLCBvbmx5IFwiZWRpdFwiIG9yIFwibm90ZWRpdFwiIG1hdHRlcnMuXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0Y29uc3QgZm5DYW5Vc2VNd1VzZXJUb2tlbiA9IChhY3Rpb24pID0+IHtcblx0XHRcdGFjdGlvbiB8fD0gJ2VkaXQnO1xuXHRcdFx0Ly8gSWYgYSB3YXRjaGxpc3QgZXhwaXJ5IGlzIHNldCwgd2UgbXVzdCBhbHdheXMgbG9hZCB0aGUgcGFnZVxuXHRcdFx0Ly8gdG8gYXZvaWQgb3ZlcndyaXRpbmcgaW5kZWZpbml0ZSBwcm90ZWN0aW9uLiAgT2YgY291cnNlLCBub3Rcblx0XHRcdC8vIG5lZWRlZCBpZiBzZXR0aW5nIGluZGVmaW5pdGUgd2F0Y2hpbmchXG5cdFx0XHRpZiAoY3R4LndhdGNobGlzdEV4cGlyeSAmJiAhTW9yZWJpdHMuc3RyaW5nLmlzSW5maW5pdHkoY3R4LndhdGNobGlzdEV4cGlyeSkpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0Ly8gQVBJLWJhc2VkIHJlZGlyZWN0IHJlc29sdXRpb24gb25seSB3b3JrcyBmb3IgYWN0aW9uPXF1ZXJ5IGFuZFxuXHRcdFx0Ly8gYWN0aW9uPWVkaXQgaW4gYXBwZW5kL3ByZXBlbmQvbmV3IG1vZGVzXG5cdFx0XHRpZiAoY3R4LmZvbGxvd1JlZGlyZWN0KSB7XG5cdFx0XHRcdGlmICghY3R4LmZvbGxvd0Nyb3NzTnNSZWRpcmVjdCkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTsgLy8gbXVzdCBsb2FkIHRoZSBwYWdlIHRvIGNoZWNrIGZvciBjcm9zcyBuYW1lc3BhY2UgcmVkaXJlY3RzXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoYWN0aW9uICE9PSAnZWRpdCcgfHwgY3R4LmVkaXRNb2RlID09PSAnYWxsJyB8fCBjdHguZWRpdE1vZGUgPT09ICdyZXZlcnQnKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBkbyB3ZSBuZWVkIHRvIGZldGNoIHRoZSBlZGl0IHByb3RlY3Rpb24gZXhwaXJ5P1xuXHRcdFx0aWYgKE1vcmViaXRzLnVzZXJJc1N5c29wICYmICFjdHguc3VwcHJlc3NQcm90ZWN0V2FybmluZykge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0bmV3IG13LlRpdGxlKE1vcmViaXRzLnBhZ2VOYW1lTm9ybSkuZ2V0UHJlZml4ZWRUZXh0KCkgIT09XG5cdFx0XHRcdFx0bmV3IG13LlRpdGxlKGN0eC5wYWdlTmFtZSkuZ2V0UHJlZml4ZWRUZXh0KClcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIHdnUmVzdHJpY3Rpb25FZGl0IGlzIG51bGwgb24gbm9uLWV4aXN0ZW50IHBhZ2VzLFxuXHRcdFx0XHQvLyBzbyB0aGlzIG5lYXRseSBoYW5kbGVzIG5vbmV4aXN0ZW50IHBhZ2VzXG5cdFx0XHRcdGNvbnN0IGVkaXRSZXN0cmljdGlvbiA9IG13LmNvbmZpZy5nZXQoJ3dnUmVzdHJpY3Rpb25FZGl0Jyk7XG5cdFx0XHRcdGlmICghZWRpdFJlc3RyaWN0aW9uIHx8IGVkaXRSZXN0cmljdGlvbi5pbmNsdWRlcygnc3lzb3AnKSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuICEhbXcudXNlci50b2tlbnMuZ2V0KCdjc3JmVG9rZW4nKTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFdoZW4gZnVuY3Rpb25zIGNhbid0IHVzZVxuXHRcdCAqIHtAbGluayBNb3JlYml0cy53aWtpLnBhZ2V+Zm5DYW5Vc2VNd1VzZXJUb2tlbnxmbkNhblVzZU13VXNlclRva2VufVxuXHRcdCAqIG9yIHJlcXVpcmUgY2hlY2tpbmcgcHJvdGVjdGlvbiBvciB3YXRjaGVkIHN0YXR1cywgbWFpbnRhaW4gdGhlIHF1ZXJ5XG5cdFx0ICogaW4gb25lIHBsYWNlLiBVc2VkIGZvciB7QGxpbmsgTW9yZWJpdHMud2lraS5wYWdlI2RlbGV0ZVBhZ2V8ZGVsZXRlfSxcblx0XHQgKiB7QGxpbmsgTW9yZWJpdHMud2lraS5wYWdlI3VuZGVsZXRlUGFnZXx1bmRlbGV0ZX0sXG5cdFx0ICoge0BsaW5rKiBNb3JlYml0cy53aWtpLnBhZ2UjcHJvdGVjdHxwcm90ZWN0fSxcblx0XHQgKiBhbmQge0BsaW5rIE1vcmViaXRzLndpa2kucGFnZSNtb3ZlfG1vdmV9XG5cdFx0ICogKGJhc2ljYWxseSwganVzdCBub3Qge0BsaW5rIE1vcmViaXRzLndpa2kucGFnZSNsb2FkfGxvYWR9KS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24gLSBUaGUgYWN0aW9uIGJlaW5nIHVuZGVydGFrZW4sIGUuZy4gXCJlZGl0XCIgb3Jcblx0XHQgKiBcImRlbGV0ZVwiLlxuXHRcdCAqIEByZXR1cm5zIHtPYmplY3R9IEFwcHJvcHJpYXRlIHF1ZXJ5LlxuXHRcdCAqL1xuXHRcdGNvbnN0IGZuTmVlZFRva2VuSW5mb1F1ZXJ5ID0gKGFjdGlvbikgPT4ge1xuXHRcdFx0Y29uc3QgcXVlcnkgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0bWV0YTogJ3Rva2VucycsXG5cdFx0XHRcdHR5cGU6ICdjc3JmJyxcblx0XHRcdFx0dGl0bGVzOiBjdHgucGFnZU5hbWUsXG5cdFx0XHRcdHByb3A6ICdpbmZvJyxcblx0XHRcdFx0aW5wcm9wOiAnd2F0Y2hlZCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0fTtcblx0XHRcdC8vIFByb3RlY3Rpb24gbm90IGNoZWNrZWQgZm9yIG5vbi1zeXNvcCBtb3Zlc1xuXHRcdFx0aWYgKGFjdGlvbiAhPT0gJ21vdmUnIHx8IE1vcmViaXRzLnVzZXJJc1N5c29wKSB7XG5cdFx0XHRcdHF1ZXJ5LmlucHJvcCArPSAnfHByb3RlY3Rpb24nO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN0eC5mb2xsb3dSZWRpcmVjdCAmJiBhY3Rpb24gIT09ICd1bmRlbGV0ZScpIHtcblx0XHRcdFx0cXVlcnkucmVkaXJlY3RzID0gJyc7IC8vIGZvbGxvdyBhbGwgcmVkaXJlY3RzXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBxdWVyeTtcblx0XHR9O1xuXHRcdC8vIGNhbGxiYWNrIGZyb20gbG9hZFN1Y2Nlc3MoKSBmb3IgYXBwZW5kKCksIHByZXBlbmQoKSwgYW5kIG5ld1NlY3Rpb24oKSB0aHJlYWRzXG5cdFx0Y29uc3QgZm5BdXRvU2F2ZSA9IChwYWdlb2JqKSA9PiB7XG5cdFx0XHRwYWdlb2JqLnNhdmUoY3R4Lm9uU2F2ZVN1Y2Nlc3MsIGN0eC5vblNhdmVGYWlsdXJlKTtcblx0XHR9O1xuXHRcdC8vIGNhbGxiYWNrIGZyb20gbG9hZEFwaS5wb3N0KClcblx0XHRjb25zdCBmbkxvYWRTdWNjZXNzID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBjdHgubG9hZEFwaS5nZXRSZXNwb25zZSgpLnF1ZXJ5O1xuXHRcdFx0aWYgKCFmbkNoZWNrUGFnZU5hbWUocmVzcG9uc2UsIGN0eC5vbkxvYWRGYWlsdXJlKSkge1xuXHRcdFx0XHRyZXR1cm47IC8vIGFib3J0XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IFtwYWdlXSA9IHJlc3BvbnNlLnBhZ2VzO1xuXHRcdFx0bGV0IHJldjtcblx0XHRcdGN0eC5wYWdlRXhpc3RzID0gIXBhZ2UubWlzc2luZztcblx0XHRcdGlmIChjdHgucGFnZUV4aXN0cykge1xuXHRcdFx0XHRbcmV2XSA9IHBhZ2UucmV2aXNpb25zO1xuXHRcdFx0XHRjdHgubGFzdEVkaXRUaW1lID0gcmV2LnRpbWVzdGFtcDtcblx0XHRcdFx0Y3R4LnBhZ2VUZXh0ID0gcmV2LmNvbnRlbnQ7XG5cdFx0XHRcdGN0eC5wYWdlSUQgPSBwYWdlLnBhZ2VpZDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN0eC5wYWdlVGV4dCA9ICcnOyAvLyBhbGxvdyBmb3IgY29uY2F0ZW5hdGlvbiwgZXRjLlxuXHRcdFx0XHRjdHgucGFnZUlEID0gMDsgLy8gbm9uZXhpc3RlbnQgaW4gcmVzcG9uc2UsIG1hdGNoZXMgd2dBcnRpY2xlSWRcblx0XHRcdH1cblxuXHRcdFx0Y3R4LmNzcmZUb2tlbiA9IHJlc3BvbnNlLnRva2Vucy5jc3JmdG9rZW47XG5cdFx0XHRpZiAoIWN0eC5jc3JmVG9rZW4pIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfmnKrog73ojrflj5bnvJbovpHku6TniYzjgIInLCAn5pyq6IO95Y+W5b6X57eo6Lyv5qyK5p2W44CCJykpO1xuXHRcdFx0XHRjdHgub25Mb2FkRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LmxvYWRUaW1lID0gY3R4LmxvYWRBcGkuZ2V0UmVzcG9uc2UoKS5jdXJ0aW1lc3RhbXA7XG5cdFx0XHRpZiAoIWN0eC5sb2FkVGltZSkge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+acquiDveiOt+WPluW9k+WJjeaXtumXtOaIs+OAgicsICfmnKrog73lj5blvpfnlbbliY3mmYLplpPmiLPjgIInKSk7XG5cdFx0XHRcdGN0eC5vbkxvYWRGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjdHguY29udGVudE1vZGVsID0gcGFnZS5jb250ZW50bW9kZWw7XG5cdFx0XHRjdHgud2F0Y2hlZCA9IHBhZ2Uud2F0Y2hsaXN0ZXhwaXJ5IHx8IHBhZ2Uud2F0Y2hlZDtcblx0XHRcdC8vIGV4dHJhY3QgcHJvdGVjdGlvbiBpbmZvLCB0byBhbGVydCBhZG1pbnMgd2hlbiB0aGV5IGFyZSBhYm91dCB0byBlZGl0IGEgcHJvdGVjdGVkIHBhZ2Vcblx0XHRcdC8vIEluY2x1ZGVzIGNhc2NhZGluZyBwcm90ZWN0aW9uXG5cdFx0XHRpZiAoTW9yZWJpdHMudXNlcklzU3lzb3ApIHtcblx0XHRcdFx0Y29uc3QgZWRpdFByb3QgPSBwYWdlLnByb3RlY3Rpb24uZmluZExhc3QoKHByKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIHByLnR5cGUgPT09ICdlZGl0JyAmJiBwci5sZXZlbCA9PT0gJ3N5c29wJztcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGlmIChlZGl0UHJvdCkge1xuXHRcdFx0XHRcdGN0eC5mdWxseVByb3RlY3RlZCA9IGVkaXRQcm90LmV4cGlyeTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjdHguZnVsbHlQcm90ZWN0ZWQgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Y3R4LnJldmVydEN1cklEID0gcGFnZS5sYXN0cmV2aWQ7XG5cdFx0XHRjb25zdCB0ZXN0YWN0aW9ucyA9IHBhZ2UuYWN0aW9ucztcblx0XHRcdGN0eC50ZXN0QWN0aW9ucyA9IFtdOyAvLyB3YXMgbnVsbFxuXHRcdFx0Zm9yIChjb25zdCBhY3Rpb24gb2YgT2JqZWN0LmtleXModGVzdGFjdGlvbnMpKSB7XG5cdFx0XHRcdGlmICh0ZXN0YWN0aW9uc1thY3Rpb25dKSB7XG5cdFx0XHRcdFx0Y3R4LnRlc3RBY3Rpb25zW2N0eC50ZXN0QWN0aW9ucy5sZW5ndGhdID0gYWN0aW9uO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3R4LmVkaXRNb2RlID09PSAncmV2ZXJ0Jykge1xuXHRcdFx0XHRjdHgucmV2ZXJ0Q3VySUQgPSByZXYgJiYgcmV2LnJldmlkO1xuXHRcdFx0XHRpZiAoIWN0eC5yZXZlcnRDdXJJRCkge1xuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5pyq6IO96I635Y+W5b2T5YmN5L+u6K6i54mI5pysSUTjgIInLCAn5pyq6IO95Y+W5b6X55uu5YmN5L+u6KiC54mI5pysSUTjgIInKSk7XG5cdFx0XHRcdFx0Y3R4Lm9uTG9hZEZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGN0eC5yZXZlcnRVc2VyID0gcmV2ICYmIHJldi51c2VyO1xuXHRcdFx0XHRpZiAoIWN0eC5yZXZlcnRVc2VyKSB7XG5cdFx0XHRcdFx0aWYgKHJldiAmJiByZXYudXNlcmhpZGRlbikge1xuXHRcdFx0XHRcdFx0Ly8gdXNlcm5hbWUgd2FzIFJldkRlbCdkIG9yIG92ZXJzaWdodGVkXG5cdFx0XHRcdFx0XHRjdHgucmV2ZXJ0VXNlciA9IHdpbmRvdy53Z1VMUygnPOeUqOaIt+WQjeW3sumakOiXjz4nLCAnPOS9v+eUqOiAheWQjeeoseW3sumaseiXjz4nKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5pyq6IO96I635Y+W5q2k5L+u6K6i54mI5pys55qE57yW6L6R6ICF44CCJywgJ+acquiDveWPluW+l+atpOS/ruiogueJiOacrOeahOe3qOi8r+iAheOAgicpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0Y3R4Lm9uTG9hZEZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIHNldCByZXZlcnQgZWRpdCBzdW1tYXJ5XG5cdFx0XHRcdGN0eC5lZGl0U3VtbWFyeSA9IGBbW0xJQjpVTkRPfOaSpOmUgF1d55SxICR7Y3R4LnJldmVydFVzZXJ9IOaJgOWBmuWHuueahCR7d2luZG93LndnVUxTKCfkv67orqIgJywgJ+S/ruiogiAnKX0ke1xuXHRcdFx0XHRcdGN0eC5yZXZlcnRPbGRJRFxuXHRcdFx0XHR977yaJHtjdHguZWRpdFN1bW1hcnl9YDtcblx0XHRcdH1cblx0XHRcdGN0eC5wYWdlTG9hZGVkID0gdHJ1ZTtcblx0XHRcdC8vIG13Lm5vdGlmeShcIkdlbmVyYXRlIGVkaXQgY29uZmxpY3Qgbm93XCIsIHt0eXBlOiAnd2FybicsIHRhZzogJ21vcmViaXRzJ30pOyAgLy8gZm9yIHRlc3RpbmcgZWRpdCBjb25mbGljdCByZWNvdmVyeSBsb2dpY1xuXHRcdFx0Y3R4Lm9uTG9hZFN1Y2Nlc3ModGhpcyk7IC8vIGludm9rZSBjYWxsYmFja1xuXHRcdH07XG5cdFx0Ly8gaGVscGVyIGZ1bmN0aW9uIHRvIHBhcnNlIHRoZSBwYWdlIG5hbWUgcmV0dXJuZWQgZnJvbSB0aGUgQVBJXG5cdFx0Y29uc3QgZm5DaGVja1BhZ2VOYW1lID0gZnVuY3Rpb24gKHJlc3BvbnNlLCBvbkZhaWx1cmUpIHtcblx0XHRcdG9uRmFpbHVyZSB8fD0gZW1wdHlGdW5jdGlvbjtcblx0XHRcdGNvbnN0IHBhZ2UgPSByZXNwb25zZS5wYWdlcyAmJiByZXNwb25zZS5wYWdlc1swXTtcblx0XHRcdGlmIChwYWdlKSB7XG5cdFx0XHRcdC8vIGNoZWNrIGZvciBpbnZhbGlkIHRpdGxlc1xuXHRcdFx0XHRpZiAocGFnZS5pbnZhbGlkKSB7XG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfmoIfpopjkuI3lkIjms5XvvJonLCBg5qiZ6aGM5LiN5ZCI5rOV77yaJHtjdHgucGFnZU5hbWV9YCkpO1xuXHRcdFx0XHRcdG9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7IC8vIGFib3J0XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gcmV0cmlldmUgYWN0dWFsIHRpdGxlIG9mIHRoZSBwYWdlIGFmdGVyIG5vcm1hbGl6YXRpb24gYW5kIHJlZGlyZWN0c1xuXHRcdFx0XHRjb25zdCByZXNvbHZlZE5hbWUgPSBwYWdlLnRpdGxlO1xuXHRcdFx0XHRpZiAocmVzcG9uc2UucmVkaXJlY3RzKSB7XG5cdFx0XHRcdFx0Ly8gY2hlY2sgZm9yIGNyb3NzLW5hbWVzcGFjZSByZWRpcmVjdDpcblx0XHRcdFx0XHRjb25zdCBvcmlnTnMgPSBuZXcgbXcuVGl0bGUoY3R4LnBhZ2VOYW1lKS5uYW1lc3BhY2U7XG5cdFx0XHRcdFx0Y29uc3QgbmV3TnMgPSBuZXcgbXcuVGl0bGUocmVzb2x2ZWROYW1lKS5uYW1lc3BhY2U7XG5cdFx0XHRcdFx0aWYgKG9yaWdOcyAhPT0gbmV3TnMgJiYgIWN0eC5mb2xsb3dDcm9zc05zUmVkaXJlY3QpIHtcblx0XHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdFx0XHRjdHgucGFnZU5hbWUgK1xuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5piv6Leo5ZG95ZCN56m66Ze06YeN5a6a5ZCR5YiwJywgJ+aYr+i3qOWRveWQjeepuumWk+mHjeaWsOWwjuWQkeWIsCcpICtcblx0XHRcdFx0XHRcdFx0XHRyZXNvbHZlZE5hbWUgK1xuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn77yM55Wl6L+HJywgJ++8jOeVpemBjicpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0b25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBvbmx5IG5vdGlmeSB1c2VyIGZvciByZWRpcmVjdHMsIG5vdCBub3JtYWxpemF0aW9uXG5cdFx0XHRcdFx0bmV3IE1vcmViaXRzLnN0YXR1cyhcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5L+h5oGvJywgJ+izh+ioiicpLFxuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfku44gJywgJ+W+niAnKSArXG5cdFx0XHRcdFx0XHRcdGN0eC5wYWdlTmFtZSArXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygnIOmHjeWumuWQkeWIsCAnLCAnIOmHjeaWsOWwjuWQkeWIsCAnKSArXG5cdFx0XHRcdFx0XHRcdHJlc29sdmVkTmFtZVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y3R4LnBhZ2VOYW1lID0gcmVzb2x2ZWROYW1lOyAvLyB1cGRhdGUgdG8gcmVkaXJlY3QgdGFyZ2V0IG9yIG5vcm1hbGl6ZWQgbmFtZVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gY291bGQgYmUgYSBjaXJjdWxhciByZWRpcmVjdCBvciBvdGhlciBwcm9ibGVtXG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5LiN6IO96Kej5p6Q6aG16Z2i55qE6YeN5a6a5ZCR77yaJywgJ+S4jeiDveino+aekOmggemdoueahOmHjeaWsOWwjuWQke+8micpICsgY3R4LnBhZ2VOYW1lXG5cdFx0XHRcdCk7XG5cdFx0XHRcdG9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0Ly8gZm9yY2UgZXJyb3IgdG8gc3RheSBvbiB0aGUgc2NyZWVuXG5cdFx0XHRcdCsrTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0O1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7IC8vIGFib3J0XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0cnVlOyAvLyBhbGwgT0tcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIERldGVybWluZSB3aGV0aGVyIHdlIHNob3VsZCBwcm92aWRlIGEgd2F0Y2hsaXN0IGV4cGlyeS4gIFdpbGwgbm90XG5cdFx0ICogZG8gc28gaWYgdGhlIHBhZ2UgaXMgY3VycmVudGx5IHBlcm1hbmVudGx5IHdhdGNoZWQsIG9yIHRoZSBjdXJyZW50XG5cdFx0ICogZXhwaXJ5IGlzICphZnRlciogdGhlIG5ldywgcHJvdmlkZWQgZXhwaXJ5LiAgT25seSBoYW5kbGVzIHN0cmluZ3Ncblx0XHQgKiByZWNvZ25pemVkIGJ5IHtAbGluayBNb3JlYml0cy5kYXRlfSBvciByZWxhdGl2ZSB0aW1lZnJhbWVzIHdpdGhcblx0XHQgKiB1bml0IGl0IGNhbiBwcm9jZXNzLiAgUmVsaWVzIG9uIHRoZSBmYWN0IHRoYXQgZm5DYW5Vc2VNd1VzZXJUb2tlblxuXHRcdCAqIHJlcXVpcmVzIHBhZ2UgbG9hZGluZyBpZiBhIHdhdGNobGlzdGV4cGlyeSBpcyBwcm92aWRlZCwgc28gd2UgYXJlXG5cdFx0ICogZW5zdXJlZCBvZiBrbm93aW5nIHRoZSB3YXRjaCBzdGF0dXMgYnkgdGhlIHVzZSBvZiB0aGlzLlxuXHRcdCAqXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0Y29uc3QgZm5BcHBseVdhdGNobGlzdEV4cGlyeSA9ICgpID0+IHtcblx0XHRcdGlmIChjdHgud2F0Y2hsaXN0RXhwaXJ5KSB7XG5cdFx0XHRcdGlmICghY3R4LndhdGNoZWQgfHwgTW9yZWJpdHMuc3RyaW5nLmlzSW5maW5pdHkoY3R4LndhdGNobGlzdEV4cGlyeSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgY3R4LndhdGNoZWQgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0bGV0IG5ld0V4cGlyeTtcblx0XHRcdFx0XHQvLyBBdHRlbXB0IHRvIGRldGVybWluZSBpZiB0aGUgbmV3IGV4cGlyeSBpcyBhXG5cdFx0XHRcdFx0Ly8gcmVsYXRpdmUgKGUuZy4gYDEgbW9udGhgKSBvciBhYnNvbHV0ZSBkYXRldGltZVxuXHRcdFx0XHRcdGNvbnN0IHJlbCA9IGN0eC53YXRjaGxpc3RFeHBpcnkuc3BsaXQoJyAnKTtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0bmV3RXhwaXJ5ID0gbmV3IE1vcmViaXRzLmRhdGUoKS5hZGQocmVsWzBdLCByZWxbMV0pO1xuXHRcdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdFx0bmV3RXhwaXJ5ID0gbmV3IE1vcmViaXRzLmRhdGUoY3R4LndhdGNobGlzdEV4cGlyeSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIElmIHRoZSBkYXRlIGlzIHZhbGlkLCBvbmx5IHVzZSBpdCBpZiBpdCBleHRlbmRzIHRoZSBjdXJyZW50IGV4cGlyeVxuXHRcdFx0XHRcdGlmIChuZXdFeHBpcnkuaXNWYWxpZCgpKSB7XG5cdFx0XHRcdFx0XHRpZiAobmV3RXhwaXJ5LmlzQWZ0ZXIobmV3IE1vcmViaXRzLmRhdGUoY3R4LndhdGNoZWQpKSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gSWYgaXQncyBzdGlsbCBub3QgdmFsaWQsIGhvcGUgaXQncyBhIHZhbGlkIE1XIGV4cGlyeSBmb3JtYXQgdGhhdFxuXHRcdFx0XHRcdFx0Ly8gTW9yZWJpdHMuZGF0ZSBkb2Vzbid0IHJlY29nbml6ZSwgc28ganVzdCBkZWZhdWx0IHRvIHVzaW5nIGl0LlxuXHRcdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIGFsc28gaW5jbHVkZSBtaW5vciB0eXBvcy5cblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH07XG5cdFx0Ly8gY2FsbGJhY2sgZnJvbSBzYXZlQXBpLnBvc3QoKVxuXHRcdGNvbnN0IGZuU2F2ZVN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdHguZWRpdE1vZGUgPSAnYWxsJzsgLy8gY2FuY2VsIGFwcGVuZC9wcmVwZW5kL25ld1NlY3Rpb24vcmV2ZXJ0IG1vZGVzXG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGN0eC5zYXZlQXBpLmdldFJlc3BvbnNlKCk7XG5cdFx0XHQvLyBzZWUgaWYgdGhlIEFQSSB0aGlua3Mgd2Ugd2VyZSBzdWNjZXNzZnVsXG5cdFx0XHRpZiAocmVzcG9uc2UuZWRpdC5yZXN1bHQgPT09ICdTdWNjZXNzJykge1xuXHRcdFx0XHQvLyByZWFsIHN1Y2Nlc3Ncblx0XHRcdFx0Ly8gZGVmYXVsdCBvbiBzdWNjZXNzIGFjdGlvbiAtIGRpc3BsYXkgbGluayBmb3IgZWRpdGVkIHBhZ2Vcblx0XHRcdFx0Y29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRcdFx0bGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBtdy51dGlsLmdldFVybChjdHgucGFnZU5hbWUpKTtcblx0XHRcdFx0bGluay5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjdHgucGFnZU5hbWUpKTtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuaW5mbyhbJ+WujOaIkO+8iCcsIGxpbmssICfvvIknXSk7XG5cdFx0XHRcdGlmIChjdHgub25TYXZlU3VjY2Vzcykge1xuXHRcdFx0XHRcdGN0eC5vblNhdmVTdWNjZXNzKHRoaXMpOyAvLyBpbnZva2UgY2FsbGJhY2tcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdC8vIGVycm9ycyBoZXJlIGFyZSBvbmx5IGdlbmVyYXRlZCBieSBleHRlbnNpb25zIHdoaWNoIGhvb2sgQVBJRWRpdEJlZm9yZVNhdmUgd2l0aGluIE1lZGlhV2lraSxcblx0XHRcdC8vIHdoaWNoIGFzIG9mIDEuMzQuMC13bWYuMjMgKFNlcHQgMjAxOSkgc2hvdWxkIG9ubHkgZW5jb21wYXNzIGNhcHRjaGEgbWVzc2FnZXNcblx0XHRcdGlmIChyZXNwb25zZS5lZGl0LmNhcHRjaGEpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfkuI3og73kv53lrZjpobXpnaLvvIzlm6DmnI3liqHlmajopoHmsYLmgqjovpPlhaXpqozor4HnoIHjgIInLCAn5LiN6IO95YSy5a2Y6aCB6Z2i77yM5Zug5Ly65pyN5Zmo6KaB5rGC5oKo6Ly45YWl6amX6K2J56K844CCJylcblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5L+d5a2Y6aG16Z2i5pe255SxQVBJ5b6X5Yiw5pyq55+l6ZSZ6K+vJywgJ+WEsuWtmOmggemdouaZgueUsUFQSeW+l+WIsOacquefpemMr+iqpCcpKTtcblx0XHRcdH1cblx0XHRcdC8vIGZvcmNlIGVycm9yIHRvIHN0YXkgb24gdGhlIHNjcmVlblxuXHRcdFx0KytNb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQ7XG5cdFx0XHRjdHgub25TYXZlRmFpbHVyZSh0aGlzKTtcblx0XHR9O1xuXHRcdC8vIGNhbGxiYWNrIGZyb20gc2F2ZUFwaS5wb3N0KClcblx0XHRjb25zdCBmblNhdmVFcnJvciA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IGVycm9yQ29kZSA9IGN0eC5zYXZlQXBpLmdldEVycm9yQ29kZSgpO1xuXHRcdFx0Ly8gY2hlY2sgZm9yIGVkaXQgY29uZmxpY3Rcblx0XHRcdGlmIChlcnJvckNvZGUgPT09ICdlZGl0Y29uZmxpY3QnICYmIGN0eC5jb25mbGljdFJldHJpZXMrKyA8IGN0eC5tYXhDb25mbGljdFJldHJpZXMpIHtcblx0XHRcdFx0Ly8gZWRpdCBjb25mbGljdHMgY2FuIG9jY3VyIHdoZW4gdGhlIHBhZ2UgbmVlZHMgdG8gYmUgcHVyZ2VkIGZyb20gdGhlIHNlcnZlciBjYWNoZVxuXHRcdFx0XHRjb25zdCBwdXJnZVF1ZXJ5ID0ge1xuXHRcdFx0XHRcdGFjdGlvbjogJ3B1cmdlJyxcblx0XHRcdFx0XHR0aXRsZXM6IGN0eC5wYWdlTmFtZSwgLy8gcmVkaXJlY3RzIGFyZSBhbHJlYWR5IHJlc29sdmVkXG5cdFx0XHRcdH07XG5cblx0XHRcdFx0Y29uc3QgcHVyZ2VBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfmo4DmtYvliLDnvJbovpHlhrLnqoHvvIzmraPlnKjmm7TmlrDmnI3liqHlmajnvJPlrZgnLCAn5qqi5ris5Yiw57eo6Lyv6KGd56qB77yM5q2j5Zyo5pu05paw5Ly65pyN5Zmo5b+r5Y+WJyksXG5cdFx0XHRcdFx0cHVyZ2VRdWVyeSxcblx0XHRcdFx0XHQoKSA9PiB7XG5cdFx0XHRcdFx0XHQtLU1vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdDsgLy8gYWxsb3cgZm9yIG5vcm1hbCBjb21wbGV0aW9uIGlmIHJldHJ5IHN1Y2NlZWRzXG5cdFx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5pbmZvKHdpbmRvdy53Z1VMUygn5qOA5rWL5Yiw57yW6L6R5Yay56qB77yM6YeN6K+V5L+u5pS5JywgJ+aqoua4rOWIsOe3qOi8r+ihneeqge+8jOmHjeippuS/ruaUuScpKTtcblx0XHRcdFx0XHRcdGlmIChmbkNhblVzZU13VXNlclRva2VuKCdlZGl0JykpIHtcblx0XHRcdFx0XHRcdFx0Y3R4LnNhdmVBcGkucG9zdCgpOyAvLyBuZWNlc3NhcmlseSBhcHBlbmQsIHByZXBlbmQsIG9yIG5ld1NlY3Rpb24sIHNvIHRoaXMgc2hvdWxkIHdvcmsgYXMgZGVzaXJlZFxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y3R4LmxvYWRBcGkucG9zdCgpOyAvLyByZWxvYWQgdGhlIHBhZ2UgYW5kIHJlYXBwbHkgdGhlIGVkaXRcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50XG5cdFx0XHRcdCk7XG5cdFx0XHRcdHB1cmdlQXBpLnBvc3QoKTtcblx0XHRcdFx0Ly8gY2hlY2sgZm9yIG5ldHdvcmsgb3Igc2VydmVyIGVycm9yXG5cdFx0XHR9IGVsc2UgaWYgKChlcnJvckNvZGUgPT09IG51bGwgfHwgZXJyb3JDb2RlID09PSB1bmRlZmluZWQpICYmIGN0eC5yZXRyaWVzKysgPCBjdHgubWF4UmV0cmllcykge1xuXHRcdFx0XHQvLyB0aGUgZXJyb3IgbWlnaHQgYmUgdHJhbnNpZW50LCBzbyB0cnkgYWdhaW5cblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuaW5mbyh3aW5kb3cud2dVTFMoJ+S/neWtmOWksei0pe+8jOWcqDLnp5LlkI7ph43or5XigKbigKYnLCAn5YSy5a2Y5aSx5pWX77yM5ZyoMuenkuW+jOmHjeippuKApuKApicpKTtcblx0XHRcdFx0LS1Nb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQ7IC8vIGFsbG93IGZvciBub3JtYWwgY29tcGxldGlvbiBpZiByZXRyeSBzdWNjZWVkc1xuXHRcdFx0XHQvLyB3YWl0IGZvciBzb21ldGltZSBmb3IgY2xpZW50IHRvIHJlZ2FpbiBjb25uZWN0aXZpdHlcblx0XHRcdFx0c2xlZXAoMjAwMCkudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0Y3R4LnNhdmVBcGkucG9zdCgpOyAvLyBnaXZlIGl0IGFub3RoZXIgZ28hXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQvLyBoYXJkIGVycm9yLCBnaXZlIHVwXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGN0eC5zYXZlQXBpLmdldFJlc3BvbnNlKCk7XG5cdFx0XHRcdGNvbnN0IGVycm9yRGF0YSA9XG5cdFx0XHRcdFx0cmVzcG9uc2UuZXJyb3IgfHxcblx0XHRcdFx0XHQvLyBiYyBlcnJvciBmb3JtYXRcblx0XHRcdFx0XHRyZXNwb25zZS5lcnJvcnNbMF0uZGF0YTsgLy8gaHRtbC93aWtpdGV4dC9wbGFpbnRleHQgZXJyb3IgZm9ybWF0XG5cdFx0XHRcdHN3aXRjaCAoZXJyb3JDb2RlKSB7XG5cdFx0XHRcdFx0Y2FzZSAncHJvdGVjdGVkcGFnZSc6XG5cdFx0XHRcdFx0XHQvLyBub24tYWRtaW4gYXR0ZW1wdGluZyB0byBlZGl0IGEgcHJvdGVjdGVkIHBhZ2UgLSB0aGlzIGdpdmVzIGEgZnJpZW5kbGllciBtZXNzYWdlIHRoYW4gdGhlIGRlZmF1bHRcblx0XHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5LiN6IO95L+d5a2Y5L+u5pS577ya6aG16Z2i6KKr5L+d5oqkJywgJ+S4jeiDveWEsuWtmOS/ruaUue+8mumggemdouiiq+S/neittycpKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ2FidXNlZmlsdGVyLWRpc2FsbG93ZWQnOlxuXHRcdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn57yW6L6R6KKr6Ziy5rul55So6L+H5ruk5Zmo6KeE5YiZ4oCcJywgJ+e3qOi8r+iiq+mYsua/q+eUqOmBjua/vuWZqOimj+WJh+OAjCcpICtcblx0XHRcdFx0XHRcdFx0XHRlcnJvckRhdGEuYWJ1c2VmaWx0ZXIuZGVzY3JpcHRpb24gK1xuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHRcdFx0XHRcdCfigJ3pmLvmraLjgILoi6XmgqjorqTkuLrmgqjnmoTor6XmrKHnvJbovpHmmK/mnInmhI/kuYnnmoTvvIzor7foh7MgTElCX3RhbGs6566h55CG5ZGY5ZGK56S65p2/IOaPkOaKpeOAgicsXG5cdFx0XHRcdFx0XHRcdFx0XHQn44CN6Zi75q2i44CC6Iul5oKo6KqN54K65oKo55qE6Kmy5qyh57eo6Lyv5piv5pyJ5oSP576p55qE77yM6KuL6IezIExJQl90YWxrOueuoeeQhuWToeWRiuekuuadvyDmj5DloLHjgIInXG5cdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ2FidXNlZmlsdGVyLXdhcm5pbmcnOlxuXHRcdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoW1xuXHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+e8lui+keiiq+mYsua7peeUqOi/h+a7pOWZqOinhOWImeKAnCcsICfnt6jovK/ooqvpmLLmv6vnlKjpgY7mv77lmajopo/liYfjgIwnKSxcblx0XHRcdFx0XHRcdFx0ZXJyb3JEYXRhLmFidXNlZmlsdGVyLmRlc2NyaXB0aW9uLFxuXHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0XHRcdFx0J+KAneitpuWRiu+8jOiLpeaCqOS7jeW4jOacm+WBmuWHuuivpee8lui+ke+8jOivt+WwneivlemHjeaWsOaPkOS6pO+8jOagueaNrui/h+a7pOWZqOeahOiuvue9ruaCqOWPr+iDveWPr+S7peS9nOWHuuatpOe8lui+keOAgicsXG5cdFx0XHRcdFx0XHRcdFx0J+OAjeitpuWRiu+8jOiLpeaCqOS7jeW4jOacm+WBmuWHuuipsue3qOi8r++8jOiri+WYl+ippumHjeaWsOaPkOS6pO+8jOagueaTmumBjua/vuWZqOeahOioreWumuaCqOWPr+iDveWPr+S7peS9nOWHuuatpOe3qOi8r+OAgidcblx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdF0pO1xuXHRcdFx0XHRcdFx0Ly8gV2Ugc2hvdWxkIHByb3ZpZGUgdGhlIHVzZXIgd2l0aCBhIHdheSB0byBhdXRvbWF0aWNhbGx5IHJldHJ5IHRoZSBhY3Rpb24gaWYgdGhleSBzbyBjaG9vc2UgLVxuXHRcdFx0XHRcdFx0Ly8gSSBjYW4ndCBzZWUgaG93IHRvIGRvIHRoaXMgd2l0aG91dCBjcmVhdGluZyBhIFVJIGRlcGVuZGVuY3kgb24gTW9yZWJpdHMud2lraS5wYWdlIHRob3VnaCAtLSBUVE9cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ3NwYW1ibGFja2xpc3QnOiB7XG5cdFx0XHRcdFx0XHQvLyBJZiBtdWx0aXBsZSBpdGVtcyBhcmUgYmxhY2tsaXN0ZWQsIHdlIG9ubHkgcmV0dXJuIHRoZSBmaXJzdFxuXHRcdFx0XHRcdFx0Y29uc3QgW3NwYW1dID0gZXJyb3JEYXRhLnNwYW1ibGFja2xpc3QubWF0Y2hlcztcblx0XHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+S4jeiDveS/neWtmOmhtemdou+8jOWboFVSTCAnLCAn5LiN6IO95YSy5a2Y6aCB6Z2i77yM5ZugVVJMICcpICtcblx0XHRcdFx0XHRcdFx0XHRzcGFtICtcblx0XHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJyDlnKjlnoPlnL7pk77mjqXpu5HlkI3ljZXkuK3jgIInLCAnIOWcqOWeg+WcvumAo+e1kOm7keWQjeWWruS4reOAgicpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfkuI3og73kv53lrZjkv67mlLnvvJonLCAn5LiN6IO95YSy5a2Y5L+u5pS577yaJykgKyBjdHguc2F2ZUFwaS5nZXRFcnJvclRleHQoKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjdHguZWRpdE1vZGUgPSAnYWxsJzsgLy8gY2FuY2VsIGFwcGVuZC9wcmVwZW5kL25ld1NlY3Rpb24vcmV2ZXJ0IG1vZGVzXG5cdFx0XHRcdGlmIChjdHgub25TYXZlRmFpbHVyZSkge1xuXHRcdFx0XHRcdGN0eC5vblNhdmVGYWlsdXJlKHRoaXMpOyAvLyBpbnZva2UgY2FsbGJhY2tcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRjb25zdCBpc1RleHRSZWRpcmVjdCA9ICh0ZXh0KSA9PiB7XG5cdFx0XHRpZiAoIXRleHQpIHtcblx0XHRcdFx0Ly8gbm8gdGV4dCAtIGNvbnRlbnQgZW1wdHkgb3IgaW5hY2Nlc3NpYmxlIChyZXZkZWxsZWQgb3Igc3VwcHJlc3NlZClcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIE1vcmViaXRzLmwxMG4ucmVkaXJlY3RUYWdBbGlhc2VzLnNvbWUoKHRhZykgPT4ge1xuXHRcdFx0XHRyZXR1cm4gbmV3IFJlZ0V4cChgXlxcXFxzKiR7dGFnfVxcXFxXYCwgJ2knKS50ZXN0KHRleHQpO1xuXHRcdFx0fSk7XG5cdFx0fTtcblx0XHRjb25zdCBmbkxvb2t1cENyZWF0aW9uU3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gY3R4Lmxvb2t1cENyZWF0aW9uQXBpLmdldFJlc3BvbnNlKCkucXVlcnk7XG5cdFx0XHRpZiAoIWZuQ2hlY2tQYWdlTmFtZShyZXNwb25zZSwgY3R4Lm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlKSkge1xuXHRcdFx0XHRyZXR1cm47IC8vIGFib3J0XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHJldiA9IHJlc3BvbnNlLnBhZ2VzWzBdLnJldmlzaW9ucyAmJiByZXNwb25zZS5wYWdlc1swXS5yZXZpc2lvbnNbMF07XG5cdFx0XHRpZiAoIXJldikge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+aXoOazleaJvuWIsCcsICfnhKHms5Xmib7liLAnKSArXG5cdFx0XHRcdFx0XHRjdHgucGFnZU5hbWUgK1xuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfnmoTku7vkvZXkv67orqLniYjmnKwnLCAn55qE5Lu75L2V5L+u6KiC54mI5pysJylcblx0XHRcdFx0KTtcblx0XHRcdFx0Y3R4Lm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWN0eC5sb29rdXBOb25SZWRpcmVjdENyZWF0b3IgfHwgIWlzVGV4dFJlZGlyZWN0KHJldi5jb250ZW50KSkge1xuXHRcdFx0XHRjdHguY3JlYXRvciA9IHJldi51c2VyO1xuXHRcdFx0XHRpZiAoIWN0eC5jcmVhdG9yKSB7XG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfml6Dms5Xojrflj5bpobXpnaLliJvlu7rogIXnmoTlkI3lrZcnLCAn54Sh5rOV5Y+W5b6X6aCB6Z2i5bu656uL6ICF55qE5ZCN5a2XJykpO1xuXHRcdFx0XHRcdGN0eC5vbkxvb2t1cENyZWF0aW9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y3R4LnRpbWVzdGFtcCA9IHJldi50aW1lc3RhbXA7XG5cdFx0XHRcdGlmICghY3R4LnRpbWVzdGFtcCkge1xuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5peg5rOV6I635Y+W6aG16Z2i5Yib5bu65pe26Ze0JywgJ+eEoeazleWPluW+l+mggemdouW7uueri+aZgumWkycpKTtcblx0XHRcdFx0XHRjdHgub25Mb29rdXBDcmVhdGlvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmluZm8od2luZG93LndnVUxTKCflt7Lojrflj5bpobXpnaLliJvlu7rkv6Hmga8nLCAn5bey5Y+W5b6X6aCB6Z2i5bu656uL6LOH6KiKJykpO1xuXHRcdFx0XHRjdHgub25Mb29rdXBDcmVhdGlvblN1Y2Nlc3ModGhpcyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdHgubG9va3VwQ3JlYXRpb25BcGkucXVlcnkucnZsaW1pdCA9IDUwOyAvLyBtb2RpZnkgcHJldmlvdXMgcXVlcnkgdG8gZmV0Y2ggbW9yZSByZXZpc2lvbnNcblx0XHRcdFx0Y3R4Lmxvb2t1cENyZWF0aW9uQXBpLnF1ZXJ5LnRpdGxlcyA9IGN0eC5wYWdlTmFtZTsgLy8gdXBkYXRlIHBhZ2VOYW1lIGlmIHJlZGlyZWN0IHJlc29sdXRpb24gdG9vayBwbGFjZSBpbiBlYXJsaWVyIHF1ZXJ5XG5cdFx0XHRcdGN0eC5sb29rdXBDcmVhdGlvbkFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+iOt+WPlumhtemdouWIm+W7uuS/oeaBrycsICflj5blvpfpoIHpnaLlu7rnq4vos4foqIonKSxcblx0XHRcdFx0XHRjdHgubG9va3VwQ3JlYXRpb25BcGkucXVlcnksXG5cdFx0XHRcdFx0Zm5Mb29rdXBOb25SZWRpcmVjdENyZWF0b3IsXG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdFx0Y3R4Lm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGN0eC5sb29rdXBDcmVhdGlvbkFwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRcdGN0eC5sb29rdXBDcmVhdGlvbkFwaS5wb3N0KCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRjb25zdCBmbkxvb2t1cE5vblJlZGlyZWN0Q3JlYXRvciA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gY3R4Lmxvb2t1cENyZWF0aW9uQXBpLmdldFJlc3BvbnNlKCkucXVlcnk7XG5cdFx0XHRjb25zdCByZXZzID0gcmVzcG9uc2UucGFnZXNbMF0ucmV2aXNpb25zO1xuXHRcdFx0Zm9yIChjb25zdCByZXYgb2YgcmV2cykge1xuXHRcdFx0XHRpZiAoIWlzVGV4dFJlZGlyZWN0KHJldi5jb250ZW50KSkge1xuXHRcdFx0XHRcdGN0eC5jcmVhdG9yID0gcmV2LnVzZXI7XG5cdFx0XHRcdFx0Y3R4LnRpbWVzdGFtcCA9IHJldi50aW1lc3RhbXA7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICghY3R4LmNyZWF0b3IpIHtcblx0XHRcdFx0Ly8gZmFsbGJhY2sgdG8gZ2l2ZSBmaXJzdCByZXZpc2lvbiBhdXRob3IgaWYgbm8gbm9uLXJlZGlyZWN0IHZlcnNpb24gaW4gdGhlIGZpcnN0IDUwXG5cdFx0XHRcdGN0eC5jcmVhdG9yID0gcmV2c1swXS51c2VyO1xuXHRcdFx0XHRjdHgudGltZXN0YW1wID0gcmV2c1swXS50aW1lc3RhbXA7XG5cdFx0XHRcdGlmICghY3R4LmNyZWF0b3IpIHtcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+aXoOazleiOt+WPlumhtemdouWIm+W7uuiAheeahOWQjeWtlycsICfnhKHms5Xlj5blvpfpoIHpnaLlu7rnq4vogIXnmoTlkI3lrZcnKSk7XG5cdFx0XHRcdFx0Y3R4Lm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKCFjdHgudGltZXN0YW1wKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5peg5rOV6I635Y+W6aG16Z2i5Yib5bu65pe26Ze0JywgJ+eEoeazleWPluW+l+mggemdouW7uueri+aZgumWkycpKTtcblx0XHRcdFx0Y3R4Lm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjdHguc3RhdHVzRWxlbWVudC5pbmZvKHdpbmRvdy53Z1VMUygn5bey6I635Y+W6aG16Z2i5Yib5bu65L+h5oGvJywgJ+W3suWPluW+l+mggemdouW7uueri+izh+ioiicpKTtcblx0XHRcdGN0eC5vbkxvb2t1cENyZWF0aW9uU3VjY2Vzcyh0aGlzKTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIENvbW1vbiBjaGVja3MgZm9yIGFjdGlvbiBtZXRob2RzLiBVc2VkIGZvciBtb3ZlLCB1bmRlbGV0ZSwgZGVsZXRlLFxuXHRcdCAqIHByb3RlY3QuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uIC0gVGhlIGFjdGlvbiBiZWluZyBjaGVja2VkLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBvbkZhaWx1cmUgLSBGYWlsdXJlIGNhbGxiYWNrLlxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdGNvbnN0IGZuUHJlZmxpZ2h0Q2hlY2tzID0gZnVuY3Rpb24gKGFjdGlvbiwgb25GYWlsdXJlKSB7XG5cdFx0XHQvLyBpZiBhIG5vbi1hZG1pbiB0cmllcyB0byBkbyB0aGlzLCBkb24ndCBib3RoZXJcblx0XHRcdGlmICghTW9yZWJpdHMudXNlcklzU3lzb3AgJiYgYWN0aW9uICE9PSAnbW92ZScpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfml6Dms5Xlr7npobXpnaLov5vooYzigJwnLCAn54Sh5rOV5bCN6aCB6Z2i6YCy6KGM44CMJykgK1xuXHRcdFx0XHRcdFx0YWN0aW9uICtcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn4oCd5pON5L2c77ya5Y+q5pyJ566h55CG5ZGY5Y+v5Lul6L+b6KGM5q2k5pON5L2cJywgJ+OAjeaTjeS9nO+8muWPquacieeuoeeQhuWToeWPr+S7pemAsuihjOatpOaTjeS9nCcpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdG9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFjdHguZWRpdFN1bW1hcnkpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoYEludGVybmFsIGVycm9yOiAke2FjdGlvbn0gcmVhc29uIG5vdCBzZXQgKHVzZSBzZXRFZGl0U3VtbWFyeSBmdW5jdGlvbikhYCk7XG5cdFx0XHRcdG9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7IC8vIGFsbCBPS1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQ29tbW9uIGNoZWNrcyBmb3IgZm5Qcm9jZXNzIGZ1bmN0aW9ucyAoYGZuUHJvY2Vzc0RlbGV0ZWAsIGBmblByb2Nlc3NNb3ZlYCwgZXRjLlxuXHRcdCAqIFVzZWQgZm9yIG1vdmUsIHVuZGVsZXRlLCBkZWxldGUsIHByb3RlY3QuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uIC0gVGhlIGFjdGlvbiBiZWluZyBjaGVja2VkLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBvbkZhaWx1cmUgLSBGYWlsdXJlIGNhbGxiYWNrLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSByZXNwb25zZSAtIFRoZSByZXNwb25zZSBkb2N1bWVudCBmcm9tIHRoZSBBUEkgY2FsbC5cblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHRjb25zdCBmblByb2Nlc3NDaGVja3MgPSBmdW5jdGlvbiAoYWN0aW9uLCBvbkZhaWx1cmUsIHJlc3BvbnNlKSB7XG5cdFx0XHRjb25zdCBbe21pc3Npbmd9XSA9IHJlc3BvbnNlLnBhZ2VzO1xuXHRcdFx0Ly8gTm8gdW5kZWxldGUgYXMgYW4gZXhpc3RpbmcgcGFnZSBjb3VsZCBoYXZlIGRlbGV0ZWQgcmV2aXNpb25zXG5cdFx0XHRjb25zdCBhY3Rpb25NaXNzaW5nID0gbWlzc2luZyAmJiBbJ2RlbGV0ZScsICdtb3ZlJ10uaW5jbHVkZXMoYWN0aW9uKTtcblx0XHRcdGNvbnN0IHByb3RlY3RNaXNzaW5nID0gYWN0aW9uID09PSAncHJvdGVjdCcgJiYgbWlzc2luZyAmJiAoY3R4LnByb3RlY3RFZGl0IHx8IGN0eC5wcm90ZWN0TW92ZSk7XG5cdFx0XHRjb25zdCBzYWx0TWlzc2luZyA9IGFjdGlvbiA9PT0gJ3Byb3RlY3QnICYmICFtaXNzaW5nICYmIGN0eC5wcm90ZWN0Q3JlYXRlO1xuXHRcdFx0aWYgKGFjdGlvbk1pc3NpbmcgfHwgcHJvdGVjdE1pc3NpbmcgfHwgc2FsdE1pc3NpbmcpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0YCR7XG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+aXoOazleWvuemhtemdoui/m+ihjOKAnCcsICfnhKHms5XlsI3poIHpnaLpgLLooYzjgIwnKSArXG5cdFx0XHRcdFx0XHRhY3Rpb24gK1xuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfigJ3mk43kvZzvvIzlm6DkuLrpobXpnaInLCAn44CN5pON5L2c77yM5Zug54K66aCB6Z2iJykgK1xuXHRcdFx0XHRcdFx0KG1pc3NpbmcgPyAn5bey5LiNJyA6IHdpbmRvdy53Z1VMUygn5bey57uPJywgJ+W3sue2kycpKVxuXHRcdFx0XHRcdH3lrZjlnKhgXG5cdFx0XHRcdCk7XG5cdFx0XHRcdG9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0Ly8gRGVsZXRlLCB1bmRlbGV0ZSwgbW92ZVxuXHRcdFx0Ly8gZXh0cmFjdCBwcm90ZWN0aW9uIGluZm9cblx0XHRcdGxldCBlZGl0cHJvdDtcblx0XHRcdGlmIChhY3Rpb24gPT09ICd1bmRlbGV0ZScpIHtcblx0XHRcdFx0ZWRpdHByb3QgPSByZXNwb25zZS5wYWdlc1swXS5wcm90ZWN0aW9uLmZpbmRMYXN0KChwcikgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBwci50eXBlID09PSAnY3JlYXRlJyAmJiBwci5sZXZlbCA9PT0gJ3N5c29wJztcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2UgaWYgKGFjdGlvbiA9PT0gJ2RlbGV0ZScgfHwgYWN0aW9uID09PSAnbW92ZScpIHtcblx0XHRcdFx0ZWRpdHByb3QgPSByZXNwb25zZS5wYWdlc1swXS5wcm90ZWN0aW9uLmZpbmRMYXN0KChwcikgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBwci50eXBlID09PSAnZWRpdCcgJiYgcHIubGV2ZWwgPT09ICdzeXNvcCc7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0aWYgKFxuXHRcdFx0XHRlZGl0cHJvdCAmJlxuXHRcdFx0XHQhY3R4LnN1cHByZXNzUHJvdGVjdFdhcm5pbmcgJiZcblx0XHRcdFx0IWNvbmZpcm0oXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfmgqjljbPlsIblr7nlhajkv53miqTpobXpnaLigJwnLCAn5oKo5Y2z5bCH5bCN5YWo5L+d6K236aCB6Z2i44CMJykgK1xuXHRcdFx0XHRcdFx0Y3R4LnBhZ2VOYW1lICtcblx0XHRcdFx0XHRcdChlZGl0cHJvdC5leHBpcnkgPT09ICdpbmZpbml0eSdcblx0XHRcdFx0XHRcdFx0PyB3aW5kb3cud2dVTFMoJ+KAne+8iOawuOS5he+8iScsICfjgI3vvIjmsLjkuYXvvIknKVxuXHRcdFx0XHRcdFx0XHQ6IGAke1xuXHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfigJ3vvIjliLDmnJ/vvJonLCAn44CN77yI5Yiw5pyf77yaJykgK1xuXHRcdFx0XHRcdFx0XHRcdFx0bmV3IE1vcmViaXRzLmRhdGUoZWRpdHByb3QuZXhwaXJ5KS5jYWxlbmRhcigndXRjJylcblx0XHRcdFx0XHRcdFx0XHR9IChVVEMp77yJYCkgK1xuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfigJ3ov5vooYzigJwnLCAn44CN6YCy6KGM44CMJykgK1xuXHRcdFx0XHRcdFx0YWN0aW9uICtcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn4oCd5pON5L2cJywgJ+OAjeaTjeS9nCcpICtcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHRcdFx0J+OAglxcblxcbuWNleWHu+ehruWumuS7pee7p+e7reaTjeS9nO+8jOaIluWNleWHu+WPlua2iOS7peWPlua2iOaTjeS9nOOAgicsXG5cdFx0XHRcdFx0XHRcdCfjgIJcXG5cXG7pu57mk4rnorrlrprku6Xnubznuozmk43kvZzvvIzmiJbpu57mk4rlj5bmtojku6Xlj5bmtojmk43kvZzjgIInXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdClcblx0XHRcdCkge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+W3suWPlua2iOWvueWFqOS/neaKpOmhtemdoueahOaTjeS9nOOAgicsICflt7Llj5bmtojlsI3lhajkv53orbfpoIHpnaLnmoTmk43kvZzjgIInKSk7XG5cdFx0XHRcdG9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFyZXNwb25zZS50b2tlbnMuY3NyZnRva2VuKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5peg5rOV6I635Y+W5Luk54mM44CCJywgJ+eEoeazleWPluW+l+asiuadluOAgicpKTtcblx0XHRcdFx0b25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTsgLy8gYWxsIE9LXG5cdFx0fTtcblxuXHRcdGNvbnN0IGZuUHJvY2Vzc01vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRsZXQgcGFnZVRpdGxlO1xuXHRcdFx0bGV0IHRva2VuO1xuXHRcdFx0aWYgKGZuQ2FuVXNlTXdVc2VyVG9rZW4oJ21vdmUnKSkge1xuXHRcdFx0XHR0b2tlbiA9IG13LnVzZXIudG9rZW5zLmdldCgnY3NyZlRva2VuJyk7XG5cdFx0XHRcdHBhZ2VUaXRsZSA9IGN0eC5wYWdlTmFtZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gY3R4Lm1vdmVBcGkuZ2V0UmVzcG9uc2UoKS5xdWVyeTtcblx0XHRcdFx0aWYgKCFmblByb2Nlc3NDaGVja3MoJ21vdmUnLCBjdHgub25Nb3ZlRmFpbHVyZSwgcmVzcG9uc2UpKSB7XG5cdFx0XHRcdFx0cmV0dXJuOyAvLyBhYm9ydFxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dG9rZW4gPSByZXNwb25zZS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdFx0XHRjb25zdCBbcGFnZV0gPSByZXNwb25zZS5wYWdlcztcblx0XHRcdFx0cGFnZVRpdGxlID0gcGFnZS50aXRsZTtcblx0XHRcdFx0Y3R4LndhdGNoZWQgPSBwYWdlLndhdGNobGlzdGV4cGlyeSB8fCBwYWdlLndhdGNoZWQ7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBxdWVyeSA9IHtcblx0XHRcdFx0YWN0aW9uOiAnbW92ZScsXG5cdFx0XHRcdGZyb206IHBhZ2VUaXRsZSxcblx0XHRcdFx0dG86IGN0eC5tb3ZlRGVzdGluYXRpb24sXG5cdFx0XHRcdHRva2VuLFxuXHRcdFx0XHRyZWFzb246IGN0eC5lZGl0U3VtbWFyeSxcblx0XHRcdFx0d2F0Y2hsaXN0OiBjdHgud2F0Y2hsaXN0T3B0aW9uLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdH07XG5cdFx0XHRpZiAoY3R4LmNoYW5nZVRhZ3MpIHtcblx0XHRcdFx0cXVlcnkudGFncyA9IGN0eC5jaGFuZ2VUYWdzO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGZuQXBwbHlXYXRjaGxpc3RFeHBpcnkoKSkge1xuXHRcdFx0XHRxdWVyeS53YXRjaGxpc3RleHBpcnkgPSBjdHgud2F0Y2hsaXN0RXhwaXJ5O1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN0eC5tb3ZlVGFsa1BhZ2UpIHtcblx0XHRcdFx0cXVlcnkubW92ZXRhbGsgPSAndHJ1ZSc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3R4Lm1vdmVTdWJwYWdlcykge1xuXHRcdFx0XHRxdWVyeS5tb3Zlc3VicGFnZXMgPSAndHJ1ZSc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3R4Lm1vdmVTdXBwcmVzc1JlZGlyZWN0KSB7XG5cdFx0XHRcdHF1ZXJ5Lm5vcmVkaXJlY3QgPSAndHJ1ZSc7XG5cdFx0XHR9XG5cdFx0XHRjdHgubW92ZVByb2Nlc3NBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUygn56e75Yqo6aG16Z2i4oCm4oCmJywgJ+enu+WLlemggemdouKApuKApicpLFxuXHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0Y3R4Lm9uTW92ZVN1Y2Nlc3MsXG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHRjdHgub25Nb3ZlRmFpbHVyZVxuXHRcdFx0KTtcblx0XHRcdGN0eC5tb3ZlUHJvY2Vzc0FwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRjdHgubW92ZVByb2Nlc3NBcGkucG9zdCgpO1xuXHRcdH07XG5cdFx0Y29uc3QgZm5Qcm9jZXNzUGF0cm9sID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgcXVlcnkgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3BhdHJvbCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0fTtcblx0XHRcdC8vIERpZG4ndCBuZWVkIHRvIGxvYWQgdGhlIHBhZ2Vcblx0XHRcdGlmIChjdHgucmNpZCkge1xuXHRcdFx0XHRxdWVyeS5yY2lkID0gY3R4LnJjaWQ7XG5cdFx0XHRcdHF1ZXJ5LnRva2VuID0gbXcudXNlci50b2tlbnMuZ2V0KCdwYXRyb2xUb2tlbicpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBjdHgucGF0cm9sQXBpLmdldFJlc3BvbnNlKCkucXVlcnk7XG5cdFx0XHRcdC8vIERvbid0IHBhdHJvbCBpZiBub3QgdW5wYXRyb2xsZWRcblx0XHRcdFx0aWYgKCFyZXNwb25zZS5yZWNlbnRjaGFuZ2VzWzBdLnVucGF0cm9sbGVkKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IFt7bGFzdHJldmlkfV0gPSByZXNwb25zZS5wYWdlcztcblx0XHRcdFx0aWYgKCFsYXN0cmV2aWQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0cXVlcnkucmV2aWQgPSBsYXN0cmV2aWQ7XG5cdFx0XHRcdGNvbnN0IHRva2VuID0gcmVzcG9uc2UudG9rZW5zLmNzcmZ0b2tlbjtcblx0XHRcdFx0aWYgKCF0b2tlbikge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRxdWVyeS50b2tlbiA9IHRva2VuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN0eC5jaGFuZ2VUYWdzKSB7XG5cdFx0XHRcdHF1ZXJ5LnRhZ3MgPSBjdHguY2hhbmdlVGFncztcblx0XHRcdH1cblx0XHRcdGNvbnN0IHBhdHJvbFN0YXQgPSBuZXcgTW9yZWJpdHMuc3RhdHVzKHdpbmRvdy53Z1VMUygn5qCH6K6w6aG16Z2i5Li65bey5beh5p+lJywgJ+aomeiomOmggemdoueCuuW3suW3oeafpScpKTtcblx0XHRcdGN0eC5wYXRyb2xQcm9jZXNzQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoJ+W3oeafpemhtemdouKApuKApicsICflt6Hmn6XpoIHpnaLigKbigKYnKSxcblx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdHBhdHJvbFN0YXRcblx0XHRcdCk7XG5cdFx0XHRjdHgucGF0cm9sUHJvY2Vzc0FwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRjdHgucGF0cm9sUHJvY2Vzc0FwaS5wb3N0KCk7XG5cdFx0fTtcblx0XHRjb25zdCBmblByb2Nlc3NEZWxldGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRsZXQgcGFnZVRpdGxlO1xuXHRcdFx0bGV0IHRva2VuO1xuXHRcdFx0aWYgKGZuQ2FuVXNlTXdVc2VyVG9rZW4oJ2RlbGV0ZScpKSB7XG5cdFx0XHRcdHRva2VuID0gbXcudXNlci50b2tlbnMuZ2V0KCdjc3JmVG9rZW4nKTtcblx0XHRcdFx0cGFnZVRpdGxlID0gY3R4LnBhZ2VOYW1lO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBjdHguZGVsZXRlQXBpLmdldFJlc3BvbnNlKCkucXVlcnk7XG5cdFx0XHRcdGlmICghZm5Qcm9jZXNzQ2hlY2tzKCdkZWxldGUnLCBjdHgub25EZWxldGVGYWlsdXJlLCByZXNwb25zZSkpIHtcblx0XHRcdFx0XHRyZXR1cm47IC8vIGFib3J0XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0b2tlbiA9IHJlc3BvbnNlLnRva2Vucy5jc3JmdG9rZW47XG5cdFx0XHRcdGNvbnN0IFtwYWdlXSA9IHJlc3BvbnNlLnBhZ2VzO1xuXHRcdFx0XHRwYWdlVGl0bGUgPSBwYWdlLnRpdGxlO1xuXHRcdFx0XHRjdHgud2F0Y2hlZCA9IHBhZ2Uud2F0Y2hsaXN0ZXhwaXJ5IHx8IHBhZ2Uud2F0Y2hlZDtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHF1ZXJ5ID0ge1xuXHRcdFx0XHRhY3Rpb246ICdkZWxldGUnLFxuXHRcdFx0XHR0aXRsZTogcGFnZVRpdGxlLFxuXHRcdFx0XHR0b2tlbixcblx0XHRcdFx0cmVhc29uOiBjdHguZWRpdFN1bW1hcnksXG5cdFx0XHRcdHdhdGNobGlzdDogY3R4LndhdGNobGlzdE9wdGlvbixcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKGN0eC5jaGFuZ2VUYWdzKSB7XG5cdFx0XHRcdHF1ZXJ5LnRhZ3MgPSBjdHguY2hhbmdlVGFncztcblx0XHRcdH1cblx0XHRcdGlmIChmbkFwcGx5V2F0Y2hsaXN0RXhwaXJ5KCkpIHtcblx0XHRcdFx0cXVlcnkud2F0Y2hsaXN0ZXhwaXJ5ID0gY3R4LndhdGNobGlzdEV4cGlyeTtcblx0XHRcdH1cblx0XHRcdGN0eC5kZWxldGVQcm9jZXNzQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoJ+WIoOmZpOmhtemdouKApuKApicsICfliKrpmaTpoIHpnaLigKbigKYnKSxcblx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdGN0eC5vbkRlbGV0ZVN1Y2Nlc3MsXG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHRmblByb2Nlc3NEZWxldGVFcnJvclxuXHRcdFx0KTtcblx0XHRcdGN0eC5kZWxldGVQcm9jZXNzQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdGN0eC5kZWxldGVQcm9jZXNzQXBpLnBvc3QoKTtcblx0XHR9O1xuXHRcdC8vIGNhbGxiYWNrIGZyb20gZGVsZXRlUHJvY2Vzc0FwaS5wb3N0KClcblx0XHRjb25zdCBmblByb2Nlc3NEZWxldGVFcnJvciA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IGVycm9yQ29kZSA9IGN0eC5kZWxldGVQcm9jZXNzQXBpLmdldEVycm9yQ29kZSgpO1xuXHRcdFx0Ly8gY2hlY2sgZm9yIFwiRGF0YWJhc2UgcXVlcnkgZXJyb3JcIlxuXHRcdFx0aWYgKGVycm9yQ29kZSA9PT0gJ2ludGVybmFsX2FwaV9lcnJvcl9EQlF1ZXJ5RXJyb3InICYmIGN0eC5yZXRyaWVzKysgPCBjdHgubWF4UmV0cmllcykge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5pbmZvKHdpbmRvdy53Z1VMUygn5pWw5o2u5bqT5p+l6K+i6ZSZ6K+v77yM6YeN6K+VJywgJ+izh+aWmeW6q+afpeipoumMr+iqpO+8jOmHjeippicpKTtcblx0XHRcdFx0LS1Nb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQ7IC8vIGFsbG93IGZvciBub3JtYWwgY29tcGxldGlvbiBpZiByZXRyeSBzdWNjZWVkc1xuXHRcdFx0XHRjdHguZGVsZXRlUHJvY2Vzc0FwaS5wb3N0KCk7IC8vIGdpdmUgaXQgYW5vdGhlciBnbyFcblx0XHRcdH0gZWxzZSBpZiAoZXJyb3JDb2RlID09PSAnbWlzc2luZ3RpdGxlJykge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+S4jeiDveWIoOmZpOmhtemdou+8jOWboOWFtuW3suS4jeWtmOWcqCcsICfkuI3og73liKrpmaTpoIHpnaLvvIzlm6Dlhbblt7LkuI3lrZjlnKgnKSk7XG5cdFx0XHRcdGlmIChjdHgub25EZWxldGVGYWlsdXJlKSB7XG5cdFx0XHRcdFx0Y3R4Lm9uRGVsZXRlRmFpbHVyZS5jYWxsKHRoaXMsIGN0eC5kZWxldGVQcm9jZXNzQXBpKTsgLy8gaW52b2tlIGNhbGxiYWNrXG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gaGFyZCBlcnJvciwgZ2l2ZSB1cFxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfml6Dms5XliKDpmaTpobXpnaLvvJonLCAn54Sh5rOV5Yiq6Zmk6aCB6Z2i77yaJykgKyBjdHguZGVsZXRlUHJvY2Vzc0FwaS5nZXRFcnJvclRleHQoKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRpZiAoY3R4Lm9uRGVsZXRlRmFpbHVyZSkge1xuXHRcdFx0XHRcdGN0eC5vbkRlbGV0ZUZhaWx1cmUuY2FsbCh0aGlzLCBjdHguZGVsZXRlUHJvY2Vzc0FwaSk7IC8vIGludm9rZSBjYWxsYmFja1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGNvbnN0IGZuUHJvY2Vzc1VuZGVsZXRlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0bGV0IHBhZ2VUaXRsZTtcblx0XHRcdGxldCB0b2tlbjtcblx0XHRcdGlmIChmbkNhblVzZU13VXNlclRva2VuKCd1bmRlbGV0ZScpKSB7XG5cdFx0XHRcdHRva2VuID0gbXcudXNlci50b2tlbnMuZ2V0KCdjc3JmVG9rZW4nKTtcblx0XHRcdFx0cGFnZVRpdGxlID0gY3R4LnBhZ2VOYW1lO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBjdHgudW5kZWxldGVBcGkuZ2V0UmVzcG9uc2UoKS5xdWVyeTtcblx0XHRcdFx0aWYgKCFmblByb2Nlc3NDaGVja3MoJ3VuZGVsZXRlJywgY3R4Lm9uVW5kZWxldGVGYWlsdXJlLCByZXNwb25zZSkpIHtcblx0XHRcdFx0XHRyZXR1cm47IC8vIGFib3J0XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0b2tlbiA9IHJlc3BvbnNlLnRva2Vucy5jc3JmdG9rZW47XG5cdFx0XHRcdGNvbnN0IFtwYWdlXSA9IHJlc3BvbnNlLnBhZ2VzO1xuXHRcdFx0XHRwYWdlVGl0bGUgPSBwYWdlLnRpdGxlO1xuXHRcdFx0XHRjdHgud2F0Y2hlZCA9IHBhZ2Uud2F0Y2hsaXN0ZXhwaXJ5IHx8IHBhZ2Uud2F0Y2hlZDtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHF1ZXJ5ID0ge1xuXHRcdFx0XHRhY3Rpb246ICd1bmRlbGV0ZScsXG5cdFx0XHRcdHRpdGxlOiBwYWdlVGl0bGUsXG5cdFx0XHRcdHRva2VuLFxuXHRcdFx0XHRyZWFzb246IGN0eC5lZGl0U3VtbWFyeSxcblx0XHRcdFx0d2F0Y2hsaXN0OiBjdHgud2F0Y2hsaXN0T3B0aW9uLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdH07XG5cdFx0XHRpZiAoY3R4LmNoYW5nZVRhZ3MpIHtcblx0XHRcdFx0cXVlcnkudGFncyA9IGN0eC5jaGFuZ2VUYWdzO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGZuQXBwbHlXYXRjaGxpc3RFeHBpcnkoKSkge1xuXHRcdFx0XHRxdWVyeS53YXRjaGxpc3RleHBpcnkgPSBjdHgud2F0Y2hsaXN0RXhwaXJ5O1xuXHRcdFx0fVxuXHRcdFx0Y3R4LnVuZGVsZXRlUHJvY2Vzc0FwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0d2luZG93LndnVUxTKCfov5jljp/pobXpnaLigKbigKYnLCAn6YKE5Y6f6aCB6Z2i4oCm4oCmJyksXG5cdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHRjdHgub25VbmRlbGV0ZVN1Y2Nlc3MsXG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHRmblByb2Nlc3NVbmRlbGV0ZUVycm9yXG5cdFx0XHQpO1xuXHRcdFx0Y3R4LnVuZGVsZXRlUHJvY2Vzc0FwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRjdHgudW5kZWxldGVQcm9jZXNzQXBpLnBvc3QoKTtcblx0XHR9O1xuXHRcdC8vIGNhbGxiYWNrIGZyb20gdW5kZWxldGVQcm9jZXNzQXBpLnBvc3QoKVxuXHRcdGNvbnN0IGZuUHJvY2Vzc1VuZGVsZXRlRXJyb3IgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCBlcnJvckNvZGUgPSBjdHgudW5kZWxldGVQcm9jZXNzQXBpLmdldEVycm9yQ29kZSgpO1xuXHRcdFx0Ly8gY2hlY2sgZm9yIFwiRGF0YWJhc2UgcXVlcnkgZXJyb3JcIlxuXHRcdFx0aWYgKGVycm9yQ29kZSA9PT0gJ2ludGVybmFsX2FwaV9lcnJvcl9EQlF1ZXJ5RXJyb3InKSB7XG5cdFx0XHRcdGlmIChjdHgucmV0cmllcysrIDwgY3R4Lm1heFJldHJpZXMpIHtcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5pbmZvKHdpbmRvdy53Z1VMUygn5pWw5o2u5bqT5p+l6K+i6ZSZ6K+v77yM6YeN6K+VJywgJ+izh+aWmeW6q+afpeipoumMr+iqpO+8jOmHjeippicpKTtcblx0XHRcdFx0XHQtLU1vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdDsgLy8gYWxsb3cgZm9yIG5vcm1hbCBjb21wbGV0aW9uIGlmIHJldHJ5IHN1Y2NlZWRzXG5cdFx0XHRcdFx0Y3R4LnVuZGVsZXRlUHJvY2Vzc0FwaS5wb3N0KCk7IC8vIGdpdmUgaXQgYW5vdGhlciBnbyFcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHRcdFx0J+aMgee7reeahOaVsOaNruW6k+afpeivoumUmeivr++8jOmHjeaWsOWKoOi9vemhtemdouW5tumHjeivlScsXG5cdFx0XHRcdFx0XHRcdCfmjIHnuoznmoTos4fmlpnluqvmn6XoqaLpjK/oqqTvvIzph43mlrDovInlhaXpoIHpnaLkuKbph43oqaYnXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRpZiAoY3R4Lm9uVW5kZWxldGVGYWlsdXJlKSB7XG5cdFx0XHRcdFx0XHRjdHgub25VbmRlbGV0ZUZhaWx1cmUuY2FsbCh0aGlzLCBjdHgudW5kZWxldGVQcm9jZXNzQXBpKTsgLy8gaW52b2tlIGNhbGxiYWNrXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGVycm9yQ29kZSA9PT0gJ2NhbnR1bmRlbGV0ZScpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKFxuXHRcdFx0XHRcdFx0J+aXoOazlei/mOWOn+WIoOmZpOmhtemdou+8jOWboOayoeacieeJiOacrOS+m+i/mOWOn+aIluW3suiiq+i/mOWOnycsXG5cdFx0XHRcdFx0XHQn54Sh5rOV6YKE5Y6f5Yiq6Zmk6aCB6Z2i77yM5Zug5rKS5pyJ54mI5pys5L6b6YKE5Y6f5oiW5bey6KKr6YKE5Y6fJ1xuXHRcdFx0XHRcdClcblx0XHRcdFx0KTtcblx0XHRcdFx0aWYgKGN0eC5vblVuZGVsZXRlRmFpbHVyZSkge1xuXHRcdFx0XHRcdGN0eC5vblVuZGVsZXRlRmFpbHVyZS5jYWxsKHRoaXMsIGN0eC51bmRlbGV0ZVByb2Nlc3NBcGkpOyAvLyBpbnZva2UgY2FsbGJhY2tcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBoYXJkIGVycm9yLCBnaXZlIHVwXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+aXoOazlei/mOWOn+mhtemdou+8micsICfnhKHms5XpgoTljp/poIHpnaLvvJonKSArIGN0eC51bmRlbGV0ZVByb2Nlc3NBcGkuZ2V0RXJyb3JUZXh0KClcblx0XHRcdFx0KTtcblx0XHRcdFx0aWYgKGN0eC5vblVuZGVsZXRlRmFpbHVyZSkge1xuXHRcdFx0XHRcdGN0eC5vblVuZGVsZXRlRmFpbHVyZS5jYWxsKHRoaXMsIGN0eC51bmRlbGV0ZVByb2Nlc3NBcGkpOyAvLyBpbnZva2UgY2FsbGJhY2tcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRjb25zdCBmblByb2Nlc3NQcm90ZWN0ID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBjdHgucHJvdGVjdEFwaS5nZXRSZXNwb25zZSgpLnF1ZXJ5O1xuXHRcdFx0aWYgKCFmblByb2Nlc3NDaGVja3MoJ3Byb3RlY3QnLCBjdHgub25Qcm90ZWN0RmFpbHVyZSwgcmVzcG9uc2UpKSB7XG5cdFx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgdG9rZW4gPSByZXNwb25zZS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdFx0Y29uc3QgW3BhZ2VdID0gcmVzcG9uc2UucGFnZXM7XG5cdFx0XHRjb25zdCBwYWdlVGl0bGUgPSBwYWdlLnRpdGxlO1xuXHRcdFx0Y3R4LndhdGNoZWQgPSBwYWdlLndhdGNobGlzdGV4cGlyeSB8fCBwYWdlLndhdGNoZWQ7XG5cdFx0XHQvLyBGZXRjaCBleGlzdGluZyBwcm90ZWN0aW9uIGxldmVsc1xuXHRcdFx0Y29uc3QgcHJzID0gcmVzcG9uc2UucGFnZXNbMF0ucHJvdGVjdGlvbjtcblx0XHRcdGxldCBlZGl0cHJvdDtcblx0XHRcdGxldCBtb3ZlcHJvdDtcblx0XHRcdGxldCBjcmVhdGVwcm90O1xuXHRcdFx0Zm9yIChjb25zdCBwciBvZiBwcnMpIHtcblx0XHRcdFx0Ly8gRmlsdGVyIG91dCBwcm90ZWN0aW9uIGZyb20gY2FzY2FkaW5nXG5cdFx0XHRcdGlmIChwci50eXBlID09PSAnZWRpdCcgJiYgIXByLnNvdXJjZSkge1xuXHRcdFx0XHRcdGVkaXRwcm90ID0gcHI7XG5cdFx0XHRcdH0gZWxzZSBpZiAocHIudHlwZSA9PT0gJ21vdmUnKSB7XG5cdFx0XHRcdFx0bW92ZXByb3QgPSBwcjtcblx0XHRcdFx0fSBlbHNlIGlmIChwci50eXBlID09PSAnY3JlYXRlJykge1xuXHRcdFx0XHRcdGNyZWF0ZXByb3QgPSBwcjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gRmFsbCBiYWNrIHRvIGN1cnJlbnQgbGV2ZWxzIGlmIG5vdCBleHBsaWNpdGx5IHNldFxuXHRcdFx0aWYgKCFjdHgucHJvdGVjdEVkaXQgJiYgZWRpdHByb3QpIHtcblx0XHRcdFx0Y3R4LnByb3RlY3RFZGl0ID0ge1xuXHRcdFx0XHRcdGxldmVsOiBlZGl0cHJvdC5sZXZlbCxcblx0XHRcdFx0XHRleHBpcnk6IGVkaXRwcm90LmV4cGlyeSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmICghY3R4LnByb3RlY3RNb3ZlICYmIG1vdmVwcm90KSB7XG5cdFx0XHRcdGN0eC5wcm90ZWN0TW92ZSA9IHtcblx0XHRcdFx0XHRsZXZlbDogbW92ZXByb3QubGV2ZWwsXG5cdFx0XHRcdFx0ZXhwaXJ5OiBtb3ZlcHJvdC5leHBpcnksXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWN0eC5wcm90ZWN0Q3JlYXRlICYmIGNyZWF0ZXByb3QpIHtcblx0XHRcdFx0Y3R4LnByb3RlY3RDcmVhdGUgPSB7XG5cdFx0XHRcdFx0bGV2ZWw6IGNyZWF0ZXByb3QubGV2ZWwsXG5cdFx0XHRcdFx0ZXhwaXJ5OiBjcmVhdGVwcm90LmV4cGlyeSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdC8vIERlZmF1bHQgdG8gcHJlLWV4aXN0aW5nIGNhc2NhZGluZyBwcm90ZWN0aW9uIGlmIHVuY2hhbmdlZCAoc2ltaWxhciB0byBhYm92ZSlcblx0XHRcdGlmIChjdHgucHJvdGVjdENhc2NhZGUgPT09IG51bGwpIHtcblx0XHRcdFx0Y3R4LnByb3RlY3RDYXNjYWRlID0gISFwcnMuZmlsdGVyKChwcikgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBwci5jYXNjYWRlO1xuXHRcdFx0XHR9KS5sZW5ndGg7XG5cdFx0XHR9XG5cdFx0XHQvLyBXYXJuIGlmIGNhc2NhZGluZyBwcm90ZWN0aW9uIGJlaW5nIGFwcGxpZWQgd2l0aCBhbiBpbnZhbGlkIHByb3RlY3Rpb24gbGV2ZWwsXG5cdFx0XHQvLyB3aGljaCBmb3IgZWRpdCBwcm90ZWN0aW9uIHdpbGwgY2F1c2UgY2FzY2FkaW5nIHRvIGJlIHNpbGVudGx5IHN0cmlwcGVkXG5cdFx0XHRpZiAoY3R4LnByb3RlY3RDYXNjYWRlKSB7XG5cdFx0XHRcdC8vIE9uIG1vdmUgcHJvdGVjdGlvbiwgdGhpcyBpcyB0ZWNobmljYWxseSBzdHJpY3RlciB0aGFuIHRoZSBNVyBBUEksXG5cdFx0XHRcdC8vIGJ1dCBzZWVtcyByZWFzb25hYmxlIHRvIGF2b2lkIGR1bWIgdmFsdWVzIGFuZCBtaXNsZWFkaW5nIGxvZyBlbnRyaWVzIChUMjY1NjI2KVxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0KCFjdHgucHJvdGVjdEVkaXQgfHxcblx0XHRcdFx0XHRcdGN0eC5wcm90ZWN0RWRpdC5sZXZlbCAhPT0gJ3N5c29wJyB8fFxuXHRcdFx0XHRcdFx0IWN0eC5wcm90ZWN0TW92ZSB8fFxuXHRcdFx0XHRcdFx0Y3R4LnByb3RlY3RNb3ZlLmxldmVsICE9PSAnc3lzb3AnKSAmJlxuXHRcdFx0XHRcdCFjb25maXJtKFxuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfmgqjlt7Llr7nigJwnLCAn5oKo5bey5bCN44CMJykgK1xuXHRcdFx0XHRcdFx0XHRjdHgucGFnZU5hbWUgK1xuXHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+KAneWQr+eUqOS6hui/numUgeS/neaKpCcsICfjgI3llZ/nlKjkuobpgKPpjpbkv53orbcnKSArXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHRcdFx0XHQn77yM5L2G5rKh5pyJ6K6+572u5LuF566h55CG5ZGY55qE5L+d5oqk57qn5Yir44CCXFxuXFxuJyxcblx0XHRcdFx0XHRcdFx0XHQn77yM5L2G5rKS5pyJ6Kit5a6a5YOF566h55CG5ZOh55qE5L+d6K2357Sa5Yil44CCXFxuXFxuJ1xuXHRcdFx0XHRcdFx0XHQpICtcblx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKFxuXHRcdFx0XHRcdFx0XHRcdCfljZXlh7vnoa7orqTku6Xoh6rliqjosIPmlbTlubbnu6fnu63ov57plIHlhajkv53miqTvvIzljZXlh7vlj5bmtojku6Xot7Pov4fmraTmk43kvZwnLFxuXHRcdFx0XHRcdFx0XHRcdCfpu57mk4rnorroqo3ku6Xoh6rli5Xoqr/mlbTkuKbnubznuozpgKPpjpblhajkv53orbfvvIzpu57mk4rlj5bmtojku6Xot7PpgY7mraTmk43kvZwnXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn6L+e6ZSB5L+d5oqk5bey5Y+W5raI44CCJywgJ+mAo+mOluS/neitt+W3suWPlua2iOOAgicpKTtcblx0XHRcdFx0XHRjdHgub25Qcm90ZWN0RmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y3R4LnByb3RlY3RFZGl0LmxldmVsID0gJ3N5c29wJztcblx0XHRcdFx0Y3R4LnByb3RlY3RNb3ZlLmxldmVsID0gJ3N5c29wJztcblx0XHRcdH1cblx0XHRcdC8vIEJ1aWxkIHByb3RlY3Rpb24gbGV2ZWxzIGFuZCBleHBpcnlzIChleHBpcmllcz8pIGZvciBxdWVyeVxuXHRcdFx0Y29uc3QgcHJvdGVjdGlvbnMgPSBbXTtcblx0XHRcdGNvbnN0IGV4cGlyeXMgPSBbXTtcblx0XHRcdGlmIChjdHgucHJvdGVjdEVkaXQpIHtcblx0XHRcdFx0cHJvdGVjdGlvbnNbcHJvdGVjdGlvbnMubGVuZ3RoXSA9IGBlZGl0PSR7Y3R4LnByb3RlY3RFZGl0LmxldmVsfWA7XG5cdFx0XHRcdGV4cGlyeXNbZXhwaXJ5cy5sZW5ndGhdID0gY3R4LnByb3RlY3RFZGl0LmV4cGlyeTtcblx0XHRcdH1cblx0XHRcdGlmIChjdHgucHJvdGVjdE1vdmUpIHtcblx0XHRcdFx0cHJvdGVjdGlvbnNbcHJvdGVjdGlvbnMubGVuZ3RoXSA9IGBtb3ZlPSR7Y3R4LnByb3RlY3RNb3ZlLmxldmVsfWA7XG5cdFx0XHRcdGV4cGlyeXNbZXhwaXJ5cy5sZW5ndGhdID0gY3R4LnByb3RlY3RNb3ZlLmV4cGlyeTtcblx0XHRcdH1cblx0XHRcdGlmIChjdHgucHJvdGVjdENyZWF0ZSkge1xuXHRcdFx0XHRwcm90ZWN0aW9uc1twcm90ZWN0aW9ucy5sZW5ndGhdID0gYGNyZWF0ZT0ke2N0eC5wcm90ZWN0Q3JlYXRlLmxldmVsfWA7XG5cdFx0XHRcdGV4cGlyeXNbZXhwaXJ5cy5sZW5ndGhdID0gY3R4LnByb3RlY3RDcmVhdGUuZXhwaXJ5O1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcXVlcnkgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3Byb3RlY3QnLFxuXHRcdFx0XHR0aXRsZTogcGFnZVRpdGxlLFxuXHRcdFx0XHR0b2tlbixcblx0XHRcdFx0cHJvdGVjdGlvbnM6IHByb3RlY3Rpb25zLmpvaW4oJ3wnKSxcblx0XHRcdFx0ZXhwaXJ5OiBleHBpcnlzLmpvaW4oJ3wnKSxcblx0XHRcdFx0cmVhc29uOiBjdHguZWRpdFN1bW1hcnksXG5cdFx0XHRcdHdhdGNobGlzdDogY3R4LndhdGNobGlzdE9wdGlvbixcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHR9O1xuXHRcdFx0Ly8gT25seSBzaG93cyB1cCBpbiBsb2dzLCBub3QgcGFnZSBoaXN0b3J5XG5cdFx0XHRpZiAoY3R4LmNoYW5nZVRhZ3MpIHtcblx0XHRcdFx0cXVlcnkudGFncyA9IGN0eC5jaGFuZ2VUYWdzO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGZuQXBwbHlXYXRjaGxpc3RFeHBpcnkoKSkge1xuXHRcdFx0XHRxdWVyeS53YXRjaGxpc3RleHBpcnkgPSBjdHgud2F0Y2hsaXN0RXhwaXJ5O1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN0eC5wcm90ZWN0Q2FzY2FkZSkge1xuXHRcdFx0XHRxdWVyeS5jYXNjYWRlID0gJ3RydWUnO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LnByb3RlY3RQcm9jZXNzQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoJ+S/neaKpOmhtemdouKApuKApicsICfkv53orbfpoIHpnaLigKbigKYnKSxcblx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdGN0eC5vblByb3RlY3RTdWNjZXNzLFxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0Y3R4Lm9uUHJvdGVjdEZhaWx1cmVcblx0XHRcdCk7XG5cdFx0XHRjdHgucHJvdGVjdFByb2Nlc3NBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0Y3R4LnByb3RlY3RQcm9jZXNzQXBpLnBvc3QoKTtcblx0XHR9O1xuXHRcdGNvbnN0IHNsZWVwID0gKG1pbGxpc2Vjb25kcykgPT4ge1xuXHRcdFx0Y29uc3QgZGVmZXJyZWQgPSAkLkRlZmVycmVkKCk7XG5cdFx0XHRzZXRUaW1lb3V0KGRlZmVycmVkLnJlc29sdmUsIG1pbGxpc2Vjb25kcyk7XG5cdFx0XHRyZXR1cm4gZGVmZXJyZWQ7XG5cdFx0fTtcblx0fTsgLy8gZW5kIE1vcmViaXRzLndpa2kucGFnZVxuXHQvKiAqKioqKioqKioqKioqKioqIE1vcmViaXRzLndpa2kucHJldmlldyAqKioqKioqKioqKioqKioqICovXG5cdC8qKlxuXHQgKiBVc2UgdGhlIEFQSSB0byBwYXJzZSBhIGZyYWdtZW50IG9mIHdpa2l0ZXh0IGFuZCByZW5kZXIgaXQgYXMgSFRNTC5cblx0ICpcblx0ICogVGhlIHN1Z2dlc3RlZCBpbXBsZW1lbnRhdGlvbiBwYXR0ZXJuIChpbiB7QGxpbmsgTW9yZWJpdHMuc2ltcGxlV2luZG93fSBhbmRcblx0ICoge0BsaW5rIE1vcmViaXRzLnF1aWNrRm9ybX0gc2l0dWF0aW9ucykgaXMgdG8gY29uc3RydWN0IGFcblx0ICogYE1vcmViaXRzLndpa2kucHJldmlld2Agb2JqZWN0IGFmdGVyIHJlbmRlcmluZyBhIGBNb3JlYml0cy5xdWlja0Zvcm1gLCBhbmRcblx0ICogYmluZCB0aGUgb2JqZWN0IHRvIGFuIGFyYml0cmFyeSBwcm9wZXJ0eSBvZiB0aGUgZm9ybSAoZS5nLiB8cHJldmlld2VyfCkuXG5cdCAqIEZvciBhbiBleGFtcGxlLCBzZWUgdHdpbmtsZXdhcm4uanMuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpXG5cdCAqIEBjbGFzc1xuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwcmV2aWV3Ym94IC0gVGhlIGVsZW1lbnQgdGhhdCB3aWxsIGNvbnRhaW4gdGhlIHJlbmRlcmVkIEhUTUwsXG5cdCAqIHVzdWFsbHkgYSA8ZGl2PiBlbGVtZW50LlxuXHQgKi9cblx0TW9yZWJpdHMud2lraS5wcmV2aWV3ID0gZnVuY3Rpb24gKHByZXZpZXdib3gpIHtcblx0XHR0aGlzLnByZXZpZXdib3ggPSBwcmV2aWV3Ym94O1xuXHRcdCQocHJldmlld2JveCkuYWRkQ2xhc3MoJ21vcmViaXRzLXByZXZpZXdib3gnKS5oaWRlKCk7XG5cdFx0LyoqXG5cdFx0ICogRGlzcGxheXMgdGhlIHByZXZpZXcgYm94LCBhbmQgYmVnaW5zIGFuIGFzeW5jaHJvbm91cyBhdHRlbXB0XG5cdFx0ICogdG8gcmVuZGVyIHRoZSBzcGVjaWZpZWQgd2lraXRleHQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gd2lraXRleHQgLSBXaWtpdGV4dCB0byByZW5kZXI7IG1vc3QgdGhpbmdzIHNob3VsZCB3b3JrLCBpbmNsdWRpbmcgYHN1YnN0OmAgYW5kIGB+fn5+YC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gW3BhZ2VUaXRsZV0gLSBPcHRpb25hbCBwYXJhbWV0ZXIgZm9yIHRoZSBwYWdlIHRoaXMgc2hvdWxkIGJlIHJlbmRlcmVkIGFzIGJlaW5nIG9uLCBpZiBvbWl0dGVkIGl0IGlzIHRha2VuIGFzIHRoZSBjdXJyZW50IHBhZ2UuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IFtzZWN0aW9uVGl0bGVdIC0gSWYgcHJvdmlkZWQsIHJlbmRlciB0aGUgdGV4dCBhcyBhIG5ldyBzZWN0aW9uIHVzaW5nIHRoaXMgYXMgdGhlIHRpdGxlLlxuXHRcdCAqIEByZXR1cm5zIHtqUXVlcnkucHJvbWlzZX1cblx0XHQgKi9cblx0XHR0aGlzLmJlZ2luUmVuZGVyID0gKHdpa2l0ZXh0LCBwYWdlVGl0bGUsIHNlY3Rpb25UaXRsZSkgPT4ge1xuXHRcdFx0JChwcmV2aWV3Ym94KS5zaG93KCk7XG5cdFx0XHRjb25zdCBzdGF0dXNzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdFx0cHJldmlld2JveC5hcHBlbmRDaGlsZChzdGF0dXNzcGFuKTtcblx0XHRcdE1vcmViaXRzLnN0YXR1cy5pbml0KHN0YXR1c3NwYW4pO1xuXHRcdFx0Ly8g6Iul6aG16Z2i5LiN5pivd2lraXRleHTvvIjkvovlpoJKU+OAgUNTU+etie+8ie+8jOmCo+S5iOaJvuS4gOS4qndpa2l0ZXh06aG16Z2i5p2l6aKE6KeI44CCXG5cdFx0XHRsZXQgcGFnZU5hbWUgPSBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyk7XG5cdFx0XHRpZiAobXcuY29uZmlnLmdldCgnd2dQYWdlQ29udGVudE1vZGVsJykgIT09ICd3aWtpdGV4dCcpIHtcblx0XHRcdFx0cGFnZU5hbWUgPSBgRHJhZnQ6JHtwYWdlTmFtZX1gO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcXVlcnkgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdFx0cHJvcDogWyd0ZXh0JywgJ21vZHVsZXMnXSxcblx0XHRcdFx0cHN0OiB0cnVlLFxuXHRcdFx0XHQvLyBQU1QgPSBwcmUtc2F2ZSB0cmFuc2Zvcm07IHRoaXMgbWFrZXMgc3Vic3RpdHV0aW9uIHdvcmsgcHJvcGVybHlcblx0XHRcdFx0cHJldmlldzogdHJ1ZSxcblx0XHRcdFx0dGV4dDogd2lraXRleHQsXG5cdFx0XHRcdHRpdGxlOiBwYWdlVGl0bGUgfHwgcGFnZU5hbWUsXG5cdFx0XHRcdGRpc2FibGVsaW1pdHJlcG9ydDogdHJ1ZSxcblx0XHRcdFx0ZGlzYWJsZWVkaXRzZWN0aW9uOiB0cnVlLFxuXHRcdFx0XHR1c2VsYW5nOiBtdy5jb25maWcuZ2V0KCd3Z1VzZXJMYW5ndWFnZScpLFxuXHRcdFx0XHQvLyBVc2Ugd2dVc2VyTGFuZ3VhZ2UgZm9yIHByZXZpZXdcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKHNlY3Rpb25UaXRsZSkge1xuXHRcdFx0XHRxdWVyeS5zZWN0aW9uID0gJ25ldyc7XG5cdFx0XHRcdHF1ZXJ5LnNlY3Rpb250aXRsZSA9IHNlY3Rpb25UaXRsZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHJlbmRlckFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0d2luZG93LndnVUxTKCfliqDovb3kuK3igKbigKYnLCAn6LyJ5YWl5Lit4oCm4oCmJyksXG5cdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHRmblJlbmRlclN1Y2Nlc3MsXG5cdFx0XHRcdG5ldyBNb3JlYml0cy5zdGF0dXMod2luZG93LndnVUxTKCfpooTop4gnLCAn6aCQ6Ka9JykpXG5cdFx0XHQpO1xuXHRcdFx0cmVuZGVyQXBpLnBvc3QoKTtcblx0XHR9O1xuXHRcdGNvbnN0IGZuUmVuZGVyU3VjY2VzcyA9IChhcGlvYmopID0+IHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXBpb2JqLmdldFJlc3BvbnNlKCk7XG5cdFx0XHRjb25zdCBodG1sID0gcmVzcG9uc2UucGFyc2UudGV4dDtcblx0XHRcdGlmICghaHRtbCkge1xuXHRcdFx0XHRhcGlvYmouc3RhdGVsZW0uZXJyb3Iod2luZG93LndnVUxTKCfliqDovb3pooTop4jlpLHotKXvvIzmiJbmqKHmnb/kuLrnqbonLCAn6LyJ5YWl6aCQ6Ka95aSx5pWX77yM5oiW5qih5p2/54K656m6JykpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRwcmV2aWV3Ym94LmlubmVySFRNTCA9IGh0bWw7XG5cdFx0XHRtdy5sb2FkZXIubG9hZChyZXNwb25zZS5wYXJzZS5tb2R1bGVzdHlsZXMpO1xuXHRcdFx0bXcubG9hZGVyLmxvYWQocmVzcG9uc2UucGFyc2UubW9kdWxlcyk7XG5cdFx0XHQvLyB0aGlzIG1ha2VzIGxpbmtzIG9wZW4gaW4gbmV3IHRhYlxuXHRcdFx0JChwcmV2aWV3Ym94KS5maW5kKCdhJykuYXR0cigndGFyZ2V0JywgJ19ibGFuaycpLmF0dHIoJ3JlbCcsICdub29wZW5lciBub3JlZmVycmVyJyk7XG5cdFx0fTtcblx0XHQvKiogSGlkZXMgdGhlIHByZXZpZXcgYm94IGFuZCBjbGVhcnMgaXQuICovXG5cdFx0dGhpcy5jbG9zZVByZXZpZXcgPSAoKSA9PiB7XG5cdFx0XHQkKHByZXZpZXdib3gpLmVtcHR5KCkuaGlkZSgpO1xuXHRcdH07XG5cdH07XG5cdC8qICoqKioqKioqKioqKioqKiogTW9yZWJpdHMud2lraXRleHQgKioqKioqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogV2lraXRleHQgbWFuaXB1bGF0aW9uLlxuXHQgKlxuXHQgKiBAbmFtZXNwYWNlIE1vcmViaXRzLndpa2l0ZXh0XG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0c1xuXHQgKi9cblx0TW9yZWJpdHMud2lraXRleHQgPSB7fTtcblx0LyoqXG5cdCAqIEdldCB0aGUgdmFsdWUgb2YgZXZlcnkgcGFyYW1ldGVyIGZvdW5kIGluIHRoZSB3aWtpdGV4dCBvZiBhIGdpdmVuIHRlbXBsYXRlLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraXRleHRcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBXaWtpdGV4dCBjb250YWluaW5nIGEgdGVtcGxhdGUuXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9MF0gLSBJbmRleCBub3Rpbmcgd2hlcmUgaW4gdGhlIHRleHQgdGhlIHRlbXBsYXRlIGJlZ2lucy5cblx0ICogQHJldHVybnMge09iamVjdH0gYHtuYW1lOiB0ZW1wbGF0ZU5hbWUsIHBhcmFtZXRlcnM6IHtrZXk6IHZhbHVlfX1gLlxuXHQgKi9cblx0TW9yZWJpdHMud2lraXRleHQucGFyc2VUZW1wbGF0ZSA9ICh0ZXh0LCBzdGFydCkgPT4ge1xuXHRcdHN0YXJ0IHx8PSAwO1xuXHRcdGNvbnN0IGxldmVsID0gW107IC8vIFRyYWNrIG9mIGhvdyBkZWVwIHdlIGFyZSAoe3ssIHt7eywgb3IgW1spXG5cdFx0bGV0IGNvdW50ID0gLTE7IC8vIE51bWJlciBvZiBwYXJhbWV0ZXJzIGZvdW5kXG5cdFx0bGV0IHVubmFtZWQgPSAwOyAvLyBLZWVwIHRyYWNrIG9mIHdoYXQgbnVtYmVyIGFuIHVubmFtZWQgcGFyYW1ldGVyIHNob3VsZCByZWNlaXZlXG5cdFx0bGV0IGVxdWFscyA9IC0xOyAvLyBBZnRlciBmaW5kaW5nIFwiPVwiIGJlZm9yZSBhIHBhcmFtZXRlciwgdGhlIGluZGV4OyBvdGhlcndpc2UsIC0xXG5cdFx0bGV0IGN1cnJlbnQgPSAnJztcblx0XHRjb25zdCByZXN1bHQgPSB7XG5cdFx0XHRuYW1lOiAnJyxcblx0XHRcdHBhcmFtZXRlcnM6IHt9LFxuXHRcdH07XG5cdFx0bGV0IGtleTtcblx0XHRsZXQgdmFsdWU7XG5cdFx0LyoqXG5cdFx0ICogRnVuY3Rpb24gdG8gaGFuZGxlIGZpbmRpbmcgcGFyYW1ldGVyIHZhbHVlcy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZpbmFsPWZhbHNlXSAtIFdoZXRoZXIgdGhpcyBpcyB0aGUgZmluYWxcblx0XHQgKiBwYXJhbWV0ZXIgYW5kIHdlIG5lZWQgdG8gcmVtb3ZlIHRoZSB0cmFpbGluZyBgfX1gLlxuXHRcdCAqL1xuXHRcdGNvbnN0IGZpbmRQYXJhbSA9IChmaW5hbCkgPT4ge1xuXHRcdFx0Ly8gTm90aGluZyBmb3VuZCB5ZXQsIHRoaXMgbXVzdCBiZSB0aGUgdGVtcGxhdGUgbmFtZVxuXHRcdFx0aWYgKGNvdW50ID09PSAtMSkge1xuXHRcdFx0XHRyZXN1bHQubmFtZSA9IGN1cnJlbnQuc2xpY2UoMikudHJpbSgpO1xuXHRcdFx0XHQrK2NvdW50O1xuXHRcdFx0fSBlbHNlIGlmIChlcXVhbHMgPT09IC0xKSB7XG5cdFx0XHRcdC8vIEluIGEgcGFyYW1ldGVyXG5cdFx0XHRcdC8vIE5vIGVxdWFscywgc28gaXQgbXVzdCBiZSB1bm5hbWVkOyBubyB0cmltIHNpbmNlIHdoaXRlc3BhY2UgYWxsb3dlZFxuXHRcdFx0XHRjb25zdCBwYXJhbSA9IGZpbmFsID8gY3VycmVudC5zbGljZShlcXVhbHMgKyAxLCAtMikgOiBjdXJyZW50O1xuXHRcdFx0XHRpZiAocGFyYW0pIHtcblx0XHRcdFx0XHRyZXN1bHQucGFyYW1ldGVyc1srK3VubmFtZWRdID0gcGFyYW07XG5cdFx0XHRcdFx0Kytjb3VudDtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gV2UgZm91bmQgYW4gZXF1YWxzLCBzbyBzYXZlIHRoZSBwYXJhbWV0ZXIgYXMga2V5OiB2YWx1ZVxuXHRcdFx0XHRrZXkgPSBjdXJyZW50LnNsaWNlKDAsIE1hdGgubWF4KDAsIGVxdWFscykpLnRyaW0oKTtcblx0XHRcdFx0dmFsdWUgPSBmaW5hbCA/IGN1cnJlbnQuc2xpY2UoZXF1YWxzICsgMSwgLTIpLnRyaW0oKSA6IGN1cnJlbnQuc2xpY2UoTWF0aC5tYXgoMCwgZXF1YWxzICsgMSkpLnRyaW0oKTtcblx0XHRcdFx0cmVzdWx0LnBhcmFtZXRlcnNba2V5XSA9IHZhbHVlO1xuXHRcdFx0XHRlcXVhbHMgPSAtMTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdGZvciAobGV0IGkgPSBzdGFydDsgaSA8IHRleHQubGVuZ3RoOyArK2kpIHtcblx0XHRcdGNvbnN0IHRlc3QzID0gdGV4dC5zbGljZShpLCBpICsgMyk7XG5cdFx0XHRpZiAodGVzdDMgPT09ICd7e3snIHx8ICh0ZXN0MyA9PT0gJ319fScgJiYgbGV2ZWwuYXQoLTEpID09PSAzKSkge1xuXHRcdFx0XHRjdXJyZW50ICs9IHRlc3QzO1xuXHRcdFx0XHRpICs9IDI7XG5cdFx0XHRcdGlmICh0ZXN0MyA9PT0gJ3t7eycpIHtcblx0XHRcdFx0XHRsZXZlbFtsZXZlbC5sZW5ndGhdID0gMztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRsZXZlbC5wb3AoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHRlc3QyID0gdGV4dC5zbGljZShpLCBpICsgMik7XG5cdFx0XHQvLyBFbnRlcmluZyBhIHRlbXBsYXRlIChvciBsaW5rKVxuXHRcdFx0aWYgKHRlc3QyID09PSAne3snIHx8IHRlc3QyID09PSAnW1snKSB7XG5cdFx0XHRcdGN1cnJlbnQgKz0gdGVzdDI7XG5cdFx0XHRcdCsraTtcblx0XHRcdFx0aWYgKHRlc3QyID09PSAne3snKSB7XG5cdFx0XHRcdFx0bGV2ZWxbbGV2ZWwubGVuZ3RoXSA9IDI7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bGV2ZWxbbGV2ZWwubGVuZ3RoXSA9ICd3bCc7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHQvLyBFaXRoZXIgbGVhdmluZyBhIGxpbmsgb3IgdGVtcGxhdGUvcGFyc2VyIGZ1bmN0aW9uXG5cdFx0XHRpZiAoKHRlc3QyID09PSAnfX0nICYmIGxldmVsLmF0KC0xKSA9PT0gMikgfHwgKHRlc3QyID09PSAnXV0nICYmIGxldmVsLmF0KC0xKSA9PT0gJ3dsJykpIHtcblx0XHRcdFx0Y3VycmVudCArPSB0ZXN0Mjtcblx0XHRcdFx0KytpO1xuXHRcdFx0XHRsZXZlbC5wb3AoKTtcblx0XHRcdFx0Ly8gRmluZCB0aGUgZmluYWwgcGFyYW1ldGVyIGlmIHRoaXMgcmVhbGx5IGlzIHRoZSBlbmRcblx0XHRcdFx0aWYgKHRlc3QyID09PSAnfX0nICYmIGxldmVsLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdGZpbmRQYXJhbSh0cnVlKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGlmICh0ZXh0LmNoYXJBdChpKSA9PT0gJ3wnICYmIGxldmVsLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHQvLyBBbm90aGVyIHBpcGUgZm91bmQsIHRvcGxldmVsLCBzbyBwYXJhbWV0ZXIgY29taW5nIHVwIVxuXHRcdFx0XHRmaW5kUGFyYW0oKTtcblx0XHRcdFx0Y3VycmVudCA9ICcnO1xuXHRcdFx0fSBlbHNlIGlmIChlcXVhbHMgPT09IC0xICYmIHRleHQuY2hhckF0KGkpID09PSAnPScgJiYgbGV2ZWwubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdC8vIEVxdWFscyBmb3VuZCwgdG9wbGV2ZWxcblx0XHRcdFx0ZXF1YWxzID0gY3VycmVudC5sZW5ndGg7XG5cdFx0XHRcdGN1cnJlbnQgKz0gdGV4dC5jaGFyQXQoaSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBKdXN0IGFkdmFuY2UgdGhlIHBvc2l0aW9uXG5cdFx0XHRcdGN1cnJlbnQgKz0gdGV4dC5jaGFyQXQoaSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cdC8qKlxuXHQgKiBBZGp1c3QgYW5kIG1hbmlwdWxhdGUgdGhlIHdpa2l0ZXh0IG9mIGEgcGFnZS5cblx0ICpcblx0ICogQGNsYXNzXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpdGV4dFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFdpa2l0ZXh0IHRvIGJlIG1hbmlwdWxhdGVkLlxuXHQgKi9cblx0TW9yZWJpdHMud2lraXRleHQucGFnZSA9IGZ1bmN0aW9uICh0ZXh0KSB7XG5cdFx0dGhpcy50ZXh0ID0gdGV4dDtcblx0fTtcblx0TW9yZWJpdHMud2lraXRleHQucGFnZS5wcm90b3R5cGUgPSB7XG5cdFx0dGV4dDogJycsXG5cdFx0LyoqXG5cdFx0ICogUmVtb3ZlcyBsaW5rcyB0byBgbGlua190YXJnZXRgIGZyb20gdGhlIHBhZ2UgdGV4dC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBsaW5rVGFyZ2V0XG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLndpa2l0ZXh0LnBhZ2V9XG5cdFx0ICovXG5cdFx0cmVtb3ZlTGluayhsaW5rVGFyZ2V0KSB7XG5cdFx0XHRjb25zdCBtd1RpdGxlID0gbXcuVGl0bGUubmV3RnJvbVRleHQobGlua1RhcmdldCk7XG5cdFx0XHRjb25zdCBuYW1lc3BhY2VJRCA9IG13VGl0bGUuZ2V0TmFtZXNwYWNlSWQoKTtcblx0XHRcdGNvbnN0IHRpdGxlID0gbXdUaXRsZS5nZXRNYWluVGV4dCgpO1xuXHRcdFx0bGV0IGxpbmtSZWdleFN0cmluZyA9ICcnO1xuXHRcdFx0aWYgKG5hbWVzcGFjZUlEICE9PSAwKSB7XG5cdFx0XHRcdGxpbmtSZWdleFN0cmluZyA9IGAke01vcmViaXRzLm5hbWVzcGFjZVJlZ2V4KG5hbWVzcGFjZUlEKX06YDtcblx0XHRcdH1cblx0XHRcdGxpbmtSZWdleFN0cmluZyArPSBNb3JlYml0cy5wYWdlTmFtZVJlZ2V4KHRpdGxlKTtcblx0XHRcdC8vIEZvciBtb3N0IG5hbWVzcGFjZXMsIHVubGluayBib3RoIFtbVXNlcjpUZXN0XV0gYW5kIFtbOlVzZXI6VGVzdF1dXG5cdFx0XHQvLyBGb3IgZmlsZXMgYW5kIGNhdGVnb3JpZXMsIG9ubHkgdW5saW5rIFtbOkNhdGVnb3J5OlRlc3RdXS4gRG8gbm90IHVubGluayBbW0NhdGVnb3J5OlRlc3RdXVxuXHRcdFx0Y29uc3QgaXNGaWxlT3JDYXRlZ29yeSA9IFs2LCAxNF0uaW5jbHVkZXMobmFtZXNwYWNlSUQpO1xuXHRcdFx0Y29uc3QgY29sb24gPSBpc0ZpbGVPckNhdGVnb3J5ID8gJzonIDogJzo/Jztcblx0XHRcdGNvbnN0IHNpbXBsZUxpbmtSZWdleCA9IG5ldyBSZWdFeHAoYFxcXFxbXFxcXFske2NvbG9ufSgke2xpbmtSZWdleFN0cmluZ30pXFxcXF1cXFxcXWAsICdnJyk7XG5cdFx0XHRjb25zdCBwaXBlZExpbmtSZWdleCA9IG5ldyBSZWdFeHAoYFxcXFxbXFxcXFske2NvbG9ufSR7bGlua1JlZ2V4U3RyaW5nfVxcXFx8KC4rPylcXFxcXVxcXFxdYCwgJ2cnKTtcblx0XHRcdHRoaXMudGV4dCA9IHRoaXMudGV4dC5yZXBsYWNlKHNpbXBsZUxpbmtSZWdleCwgJyQxJykucmVwbGFjZShwaXBlZExpbmtSZWdleCwgJyQxJyk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIENvbW1lbnRzIG91dCBpbWFnZXMgZnJvbSBwYWdlIHRleHQ7IGlmIHVzZWQgaW4gYSBnYWxsZXJ5LCBkZWxldGVzIHRoZSB3aG9sZSBsaW5lLlxuXHRcdCAqIElmIHVzZWQgYXMgYSB0ZW1wbGF0ZSBhcmd1bWVudCAobm90IG5lY2Vzc2FyaWx5IHdpdGggYEZpbGU6YCBwcmVmaXgpLCB0aGUgdGVtcGxhdGUgcGFyYW1ldGVyIGlzIGNvbW1lbnRlZCBvdXQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gaW1hZ2UgLSBJbWFnZSBuYW1lIHdpdGhvdXQgYEZpbGU6YCBwcmVmaXguXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IFtyZWFzb25dIC0gUmVhc29uIHRvIGJlIGluY2x1ZGVkIGluIGNvbW1lbnQsIGFsb25nc2lkZSB0aGUgY29tbWVudGVkLW91dCBpbWFnZS5cblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMud2lraXRleHQucGFnZX1cblx0XHQgKi9cblx0XHRjb21tZW50T3V0SW1hZ2UoaW1hZ2UsIHJlYXNvbikge1xuXHRcdFx0Y29uc3QgdW5iaW5kZXIgPSBuZXcgTW9yZWJpdHMudW5iaW5kZXIodGhpcy50ZXh0KTtcblx0XHRcdHVuYmluZGVyLnVuYmluZCgnPCEtLScsICctLT4nKTtcblx0XHRcdHJlYXNvbiA9IHJlYXNvbiA/IGAke3JlYXNvbn06IGAgOiAnJztcblx0XHRcdGNvbnN0IGltYWdlUmVnZXhTdHJpbmcgPSBNb3JlYml0cy5wYWdlTmFtZVJlZ2V4KGltYWdlKTtcblx0XHRcdC8vIENoZWNrIGZvciBub3JtYWwgaW1hZ2UgbGlua3MsIGkuZS4gW1tGaWxlOkZvb2Jhci5wbmd8Li4uXV1cblx0XHRcdC8vIFdpbGwgZWF0IHRoZSB3aG9sZSBsaW5rXG5cdFx0XHRjb25zdCBsaW5rc1JlZ2V4ID0gbmV3IFJlZ0V4cChcblx0XHRcdFx0YFxcXFxbXFxcXFske01vcmViaXRzLm5hbWVzcGFjZVJlZ2V4KDYpfTpcXFxccyoke2ltYWdlUmVnZXhTdHJpbmd9XFxcXHMqW1xcXFx8KD86XFxcXF1cXFxcXSldYFxuXHRcdFx0KTtcblx0XHRcdGNvbnN0IGFsbExpbmtzID0gTW9yZWJpdHMuc3RyaW5nLnNwbGl0V2VpZ2h0ZWRCeUtleXModW5iaW5kZXIuY29udGVudCwgJ1tbJywgJ11dJyk7XG5cdFx0XHRmb3IgKGNvbnN0IGFsbExpbmsgb2YgYWxsTGlua3MpIHtcblx0XHRcdFx0aWYgKGxpbmtzUmVnZXgudGVzdChhbGxMaW5rKSkge1xuXHRcdFx0XHRcdGNvbnN0IHJlcGxhY2VtZW50ID0gYDwhLS0gJHtyZWFzb259JHthbGxMaW5rfSAtLT5gO1xuXHRcdFx0XHRcdHVuYmluZGVyLmNvbnRlbnQgPSB1bmJpbmRlci5jb250ZW50LnJlcGxhY2UoYWxsTGluaywgcmVwbGFjZW1lbnQpO1xuXHRcdFx0XHRcdC8vIHVuYmluZCB0aGUgbmV3bHkgY3JlYXRlZCBjb21tZW50c1xuXHRcdFx0XHRcdHVuYmluZGVyLnVuYmluZCgnPCEtLScsICctLT4nKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gQ2hlY2sgZm9yIGdhbGxlcnkgaW1hZ2VzLCBpLmUuIGluc3RhbmNlcyB0aGF0IG11c3Qgc3RhcnQgb24gYSBuZXcgbGluZSxcblx0XHRcdC8vIGV2ZW50dWFsbHkgcHJlY2VkZWQgd2l0aCBzb21lIHNwYWNlLCBhbmQgbXVzdCBpbmNsdWRlIEZpbGU6IHByZWZpeFxuXHRcdFx0Ly8gV2lsbCBlYXQgdGhlIHdob2xlIGxpbmUuXG5cdFx0XHRjb25zdCBnYWxsZXJ5SW1hZ2VSZWdleCA9IG5ldyBSZWdFeHAoXG5cdFx0XHRcdGAoXlxcXFxzKiR7TW9yZWJpdHMubmFtZXNwYWNlUmVnZXgoNil9OlxcXFxzKiR7aW1hZ2VSZWdleFN0cmluZ31cXFxccyooPzpcXFxcfC4qPyR8JCkpYCxcblx0XHRcdFx0J21nJ1xuXHRcdFx0KTtcblx0XHRcdHVuYmluZGVyLmNvbnRlbnQgPSB1bmJpbmRlci5jb250ZW50LnJlcGxhY2UoZ2FsbGVyeUltYWdlUmVnZXgsIGA8IS0tICR7cmVhc29ufSQxIC0tPmApO1xuXHRcdFx0Ly8gdW5iaW5kIHRoZSBuZXdseSBjcmVhdGVkIGNvbW1lbnRzXG5cdFx0XHR1bmJpbmRlci51bmJpbmQoJzwhLS0nLCAnLS0+Jyk7XG5cdFx0XHQvLyBDaGVjayBmcmVlIGltYWdlIHVzYWdlcywgZm9yIGV4YW1wbGUgYXMgdGVtcGxhdGUgYXJndW1lbnRzLCBtaWdodCBoYXZlIHRoZSBGaWxlOiBwcmVmaXggZXhjbHVkZWQsIGJ1dCBtdXN0IGJlIHByZWNlZGVkIGJ5IGFuIHxcblx0XHRcdC8vIFdpbGwgb25seSBlYXQgdGhlIGltYWdlIG5hbWUgYW5kIHRoZSBwcmVjZWRpbmcgYmFyIGFuZCBhbiBldmVudHVhbCBuYW1lZCBwYXJhbWV0ZXJcblx0XHRcdGNvbnN0IGZyZWVJbWFnZVJlZ2V4ID0gbmV3IFJlZ0V4cChcblx0XHRcdFx0YChcXFxcfFxcXFxzKig/OltcXFxcd1xcXFxzXStcXFxcPSk/XFxcXHMqKD86JHtNb3JlYml0cy5uYW1lc3BhY2VSZWdleCg2KX06XFxcXHMqKT8ke2ltYWdlUmVnZXhTdHJpbmd9KWAsXG5cdFx0XHRcdCdtZydcblx0XHRcdCk7XG5cdFx0XHR1bmJpbmRlci5jb250ZW50ID0gdW5iaW5kZXIuY29udGVudC5yZXBsYWNlKGZyZWVJbWFnZVJlZ2V4LCBgPCEtLSAke3JlYXNvbn0kMSAtLT5gKTtcblx0XHRcdC8vIFJlYmluZCB0aGUgY29udGVudCBub3csIHdlIGFyZSBkb25lIVxuXHRcdFx0dGhpcy50ZXh0ID0gdW5iaW5kZXIucmViaW5kKCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIENvbnZlcnRzIHVzZXMgb2YgW1tGaWxlOmBpbWFnZWBdXSB0byBbW0ZpbGU6YGltYWdlYHxgZGF0YWBdXS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBpbWFnZSAtIEltYWdlIG5hbWUgd2l0aG91dCBGaWxlOiBwcmVmaXguXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGRhdGEgLSBUaGUgZGlzcGxheSBvcHRpb25zLlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy53aWtpdGV4dC5wYWdlfVxuXHRcdCAqL1xuXHRcdGFkZFRvSW1hZ2VDb21tZW50KGltYWdlLCBkYXRhKSB7XG5cdFx0XHRjb25zdCBpbWFnZVJlZ2V4U3RyaW5nID0gTW9yZWJpdHMucGFnZU5hbWVSZWdleChpbWFnZSk7XG5cdFx0XHRjb25zdCBsaW5rc1JlZ2V4ID0gbmV3IFJlZ0V4cChcblx0XHRcdFx0YFxcXFxbXFxcXFske01vcmViaXRzLm5hbWVzcGFjZVJlZ2V4KDYpfTpcXFxccyoke2ltYWdlUmVnZXhTdHJpbmd9XFxcXHMqW1xcXFx8KD86XFxcXF1cXFxcXSldYFxuXHRcdFx0KTtcblx0XHRcdGNvbnN0IGFsbExpbmtzID0gTW9yZWJpdHMuc3RyaW5nLnNwbGl0V2VpZ2h0ZWRCeUtleXModGhpcy50ZXh0LCAnW1snLCAnXV0nKTtcblx0XHRcdGZvciAobGV0IHJlcGxhY2VtZW50IG9mIGFsbExpbmtzKSB7XG5cdFx0XHRcdGlmIChsaW5rc1JlZ2V4LnRlc3QocmVwbGFjZW1lbnQpKSB7XG5cdFx0XHRcdFx0Ly8ganVzdCBwdXQgaXQgYXQgdGhlIGVuZD9cblx0XHRcdFx0XHRyZXBsYWNlbWVudCA9IHJlcGxhY2VtZW50LnJlcGxhY2UoL1xcXVxcXSQvLCBgfCR7ZGF0YX1dXWApO1xuXHRcdFx0XHRcdHRoaXMudGV4dCA9IHRoaXMudGV4dC5yZXBsYWNlKHJlcGxhY2VtZW50LCByZXBsYWNlbWVudCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGNvbnN0IGdhbGxlcnlSZWdleCA9IG5ldyBSZWdFeHAoYF4oXFxcXHMqJHtpbWFnZVJlZ2V4U3RyaW5nfS4qPylcXFxcfD8oLio/KSRgLCAnbWcnKTtcblx0XHRcdGNvbnN0IG5ld3RleHQgPSBgJDF8JDIgJHtkYXRhfWA7XG5cdFx0XHR0aGlzLnRleHQgPSB0aGlzLnRleHQucmVwbGFjZShnYWxsZXJ5UmVnZXgsIG5ld3RleHQpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBSZW1vdmUgYWxsIHRyYW5zY2x1c2lvbnMgb2YgYSB0ZW1wbGF0ZSBmcm9tIHBhZ2UgdGV4dC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZSAtIFBhZ2UgbmFtZSB3aG9zZSB0cmFuc2NsdXNpb25zIGFyZSB0byBiZSByZW1vdmVkLFxuXHRcdCAqIGluY2x1ZGUgbmFtZXNwYWNlIHByZWZpeCBvbmx5IGlmIG5vdCBpbiB0ZW1wbGF0ZSBuYW1lc3BhY2UuXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLndpa2l0ZXh0LnBhZ2V9XG5cdFx0ICovXG5cdFx0cmVtb3ZlVGVtcGxhdGUodGVtcGxhdGUpIHtcblx0XHRcdGNvbnN0IHRlbXBsYXRlUmVnZXhTdHJpbmcgPSBNb3JlYml0cy5wYWdlTmFtZVJlZ2V4KHRlbXBsYXRlKTtcblx0XHRcdGNvbnN0IGxpbmtzUmVnZXggPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRgXFxcXHtcXFxceyg/OiR7TW9yZWJpdHMubmFtZXNwYWNlUmVnZXgoMTApfTopP1xcXFxzKiR7dGVtcGxhdGVSZWdleFN0cmluZ31cXFxccypbXFxcXHwoPzpcXFxcfVxcXFx9KV1gXG5cdFx0XHQpO1xuXHRcdFx0Y29uc3QgYWxsVGVtcGxhdGVzID0gTW9yZWJpdHMuc3RyaW5nLnNwbGl0V2VpZ2h0ZWRCeUtleXModGhpcy50ZXh0LCAne3snLCAnfX0nLCBbJ3t7eycsICd9fX0nXSk7XG5cdFx0XHRmb3IgKGNvbnN0IGFsbFRlbXBsYXRlIG9mIGFsbFRlbXBsYXRlcykge1xuXHRcdFx0XHRpZiAobGlua3NSZWdleC50ZXN0KGFsbFRlbXBsYXRlKSkge1xuXHRcdFx0XHRcdHRoaXMudGV4dCA9IHRoaXMudGV4dC5yZXBsYWNlKGFsbFRlbXBsYXRlLCAnJyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogU21hcnRseSBpbnNlcnQgYSB0YWcgYXRvcCBwYWdlIHRleHQgYnV0IGFmdGVyIHNwZWNpZmllZCB0ZW1wbGF0ZXMsXG5cdFx0ICogc3VjaCBhcyBoYXRub3Rlcywgc2hvcnQgZGVzY3JpcHRpb24sIG9yIGRlbGV0aW9uIGFuZCBwcm90ZWN0aW9uIHRlbXBsYXRlcy5cblx0XHQgKiBOb3RhYmx5LCBkb2VzICpub3QqIGluc2VydCBhIG5ld2xpbmUgYWZ0ZXIgdGhlIHRhZy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgLSBUaGUgdGFnIHRvIGJlIGluc2VydGVkLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSByZWdleCAtIFRlbXBsYXRlcyBhZnRlciB3aGljaCB0byBpbnNlcnQgdGFnLFxuXHRcdCAqIGdpdmVuIGFzIGVpdGhlciBhcyBhIChyZWdleC12YWxpZCkgc3RyaW5nIG9yIGFuIGFycmF5IHRvIGJlIGpvaW5lZCBieSBwaXBlcy5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gW2ZsYWdzPWldIC0gUmVnZXggZmxhZ3MgdG8gYXBwbHkuICBgJydgIHRvIHByb3ZpZGUgbm8gZmxhZ3M7XG5cdFx0ICogb3RoZXIgZmFsc2V5IHZhbHVlcyB3aWxsIGRlZmF1bHQgdG8gYGlgLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBbcHJlUmVnZXhdIC0gT3B0aW9uYWwgcmVnZXggc3RyaW5nIG9yIGFycmF5IHRvIG1hdGNoXG5cdFx0ICogYmVmb3JlIGFueSB0ZW1wbGF0ZSBtYXRjaGVzIChpLmUuIGJlZm9yZSBge3tgKSwgc3VjaCBhcyBodG1sIGNvbW1lbnRzLlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy53aWtpdGV4dC5wYWdlfVxuXHRcdCAqL1xuXHRcdGluc2VydEFmdGVyVGVtcGxhdGVzKHRhZywgcmVnZXgsIGZsYWdzLCBwcmVSZWdleCkge1xuXHRcdFx0aWYgKHRhZyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ05vIHRhZyBwcm92aWRlZCcpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gLmxlbmd0aCBpcyBvbmx5IGEgcHJvcGVydHkgb2Ygc3RyaW5ncyBhbmQgYXJyYXlzIHNvIHdlXG5cdFx0XHQvLyBzaG91bGRuJ3QgbmVlZCB0byBjaGVjayB0eXBlXG5cdFx0XHRpZiAocmVnZXggPT09IHVuZGVmaW5lZCB8fCAhcmVnZXgubGVuZ3RoKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignTm8gcmVnZXggcHJvdmlkZWQnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShyZWdleCkpIHtcblx0XHRcdFx0cmVnZXggPSByZWdleC5qb2luKCd8Jyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mIGZsYWdzICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHRmbGFncyA9ICdpJztcblx0XHRcdH1cblx0XHRcdGlmICghcHJlUmVnZXggfHwgIXByZVJlZ2V4Lmxlbmd0aCkge1xuXHRcdFx0XHRwcmVSZWdleCA9ICcnO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHByZVJlZ2V4KSkge1xuXHRcdFx0XHRwcmVSZWdleCA9IHByZVJlZ2V4LmpvaW4oJ3wnKTtcblx0XHRcdH1cblx0XHRcdC8vIFJlZ2V4IGlzIGV4dHJhIGNvbXBsaWNhdGVkIHRvIGFsbG93IGZvciB0ZW1wbGF0ZXMgd2l0aFxuXHRcdFx0Ly8gcGFyYW1ldGVycyBhbmQgdG8gaGFuZGxlIHdoaXRlc3BhY2UgcHJvcGVybHlcblx0XHRcdHRoaXMudGV4dCA9IHRoaXMudGV4dC5yZXBsYWNlKFxuXHRcdFx0XHRuZXcgUmVnRXhwKFxuXHRcdFx0XHRcdC8vIGxlYWRpbmcgd2hpdGVzcGFjZVxuXHRcdFx0XHRcdC8vIGNhcHR1cmUgdGVtcGxhdGUocylcblx0XHRcdFx0XHQvLyBQcmUtdGVtcGxhdGUgcmVnZXgsIHN1Y2ggYXMgbGVhZGluZyBodG1sIGNvbW1lbnRzXG5cdFx0XHRcdFx0Ly8gYmVnaW4gdGVtcGxhdGUgZm9ybWF0XG5cdFx0XHRcdFx0Ly8gVGVtcGxhdGUgcmVnZXhcblx0XHRcdFx0XHQvLyBlbmQgbWFpbiB0ZW1wbGF0ZSBuYW1lLCBvcHRpb25hbGx5IHdpdGggYSBudW1iZXJcblx0XHRcdFx0XHQvLyBQcm9iYWJseSByZW1vdmUgdGhlICg/OikgdGhvdWdoXG5cdFx0XHRcdFx0Ly8gdGVtcGxhdGUgcGFyYW1ldGVyc1xuXHRcdFx0XHRcdC8vIGVuZCB0ZW1wbGF0ZSBmb3JtYXRcblx0XHRcdFx0XHQvLyBlbmQgY2FwdHVyZVxuXHRcdFx0XHRcdC8vIHRyYWlsaW5nIHdoaXRlc3BhY2Vcblx0XHRcdFx0XHRgXlxcXFxzKig/OigoPzpcXFxccyoke1xuXHRcdFx0XHRcdFx0Ly8gUHJlLXRlbXBsYXRlIHJlZ2V4LCBzdWNoIGFzIGxlYWRpbmcgaHRtbCBjb21tZW50c1xuXHRcdFx0XHRcdFx0cHJlUmVnZXhcblx0XHRcdFx0XHR9fFxcXFx7XFxcXHtcXFxccyooPzoke1xuXHRcdFx0XHRcdFx0Ly8gVGVtcGxhdGUgcmVnZXhcblx0XHRcdFx0XHRcdHJlZ2V4XG5cdFx0XHRcdFx0fSlcXFxcZCpcXFxccyooXFxcXHwoPzpcXFxce1xcXFx7W157fV0qXFxcXH1cXFxcfXxbXnt9XSkqKT9cXFxcfVxcXFx9KSsoPzpcXFxccypcXFxcbik/KVxcXFxzKik/YCxcblx0XHRcdFx0XHRmbGFnc1xuXHRcdFx0XHQpLFxuXHRcdFx0XHRgJDEke3RhZ31gXG5cdFx0XHQpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBHZXQgdGhlIG1hbmlwdWxhdGVkIHdpa2l0ZXh0LlxuXHRcdCAqXG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHRnZXRUZXh0KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMudGV4dDtcblx0XHR9LFxuXHR9O1xuXHQvKiAqKioqKioqKioqKiBNb3JlYml0cy51c2Vyc3BhY2VMb2dnZXIgKioqKioqKioqKioqICovXG5cdC8qKlxuXHQgKiBIYW5kbGVzIGxvZ2dpbmcgYWN0aW9ucyB0byBhIHVzZXJzcGFjZSBsb2cuXG5cdCAqIFVzZWQgaW4gQ1NELCBQUk9ELCBhbmQgWEZELlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICogQGNsYXNzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBsb2dQYWdlTmFtZSAtIFRpdGxlIG9mIHRoZSBzdWJwYWdlIG9mIHRoZSBjdXJyZW50IHVzZXIncyBsb2cuXG5cdCAqL1xuXHRNb3JlYml0cy51c2Vyc3BhY2VMb2dnZXIgPSBmdW5jdGlvbiAobG9nUGFnZU5hbWUpIHtcblx0XHRpZiAoIWxvZ1BhZ2VOYW1lKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ25vIGxvZyBwYWdlIG5hbWUgc3BlY2lmaWVkJyk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFRoZSB0ZXh0IHRvIHByZWZpeCB0aGUgbG9nIHdpdGggdXBvbiBjcmVhdGlvbiwgZGVmYXVsdHMgdG8gZW1wdHkuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMuaW5pdGlhbFRleHQgPSAnJztcblx0XHQvKipcblx0XHQgKiBUaGUgaGVhZGVyIGxldmVsIHRvIHVzZSBmb3IgbW9udGhzLCBkZWZhdWx0cyB0byAzIChgPT09YCkuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSB7bnVtYmVyfVxuXHRcdCAqL1xuXHRcdHRoaXMuaGVhZGVyTGV2ZWwgPSAzO1xuXHRcdHRoaXMuY2hhbmdlVGFncyA9ICcnO1xuXHRcdC8qKlxuXHRcdCAqIExvZyB0aGUgZW50cnkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbG9nVGV4dCAtIERvZXNuJ3QgaW5jbHVkZSBsZWFkaW5nIGAjYCBvciBgKmAuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHN1bW1hcnlUZXh0IC0gRWRpdCBzdW1tYXJ5LlxuXHRcdCAqIEByZXR1cm5zIHtKUXVlcnkuUHJvbWlzZX1cblx0XHQgKi9cblx0XHR0aGlzLmxvZyA9IGZ1bmN0aW9uIChsb2dUZXh0LCBzdW1tYXJ5VGV4dCkge1xuXHRcdFx0Y29uc3QgZGVmID0gJC5EZWZlcnJlZCgpO1xuXHRcdFx0aWYgKCFsb2dUZXh0KSB7XG5cdFx0XHRcdHJldHVybiBkZWYucmVqZWN0KCk7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBwYWdlID0gbmV3IE1vcmViaXRzLndpa2kucGFnZShcblx0XHRcdFx0YFVzZXI6JHttdy5jb25maWcuZ2V0KCd3Z1VzZXJOYW1lJyl9LyR7bG9nUGFnZU5hbWV9YCxcblx0XHRcdFx0d2luZG93LndnVUxTKCflsIbpobnnm67liqDlhaXliLDnlKjmiLfnqbrpl7Tml6Xlv5cnLCAn5bCH6aCF55uu5Yqg5YWl5Yiw5L2/55So6ICF56m66ZaT5pel6KqMJylcblx0XHRcdCk7IC8vIG1ha2UgdGhpcyAnLi4uIHRvICcgKyBsb2dQYWdlTmFtZSA/XG5cdFx0XHRwYWdlLmxvYWQoKHBhZ2VvYmopID0+IHtcblx0XHRcdFx0Ly8gYWRkIGJsdXJiIGlmIGxvZyBwYWdlIGRvZXNuJ3QgZXhpc3Qgb3IgaXMgYmxhbmtcblx0XHRcdFx0bGV0IHRleHQgPSBwYWdlb2JqLmdldFBhZ2VUZXh0KCkgfHwgdGhpcy5pbml0aWFsVGV4dDtcblx0XHRcdFx0Ly8gY3JlYXRlIG1vbnRobHkgaGVhZGVyIGlmIGl0IGRvZXNuJ3QgZXhpc3QgYWxyZWFkeVxuXHRcdFx0XHRjb25zdCBkYXRlID0gbmV3IE1vcmViaXRzLmRhdGUocGFnZW9iai5nZXRMb2FkVGltZSgpKTtcblx0XHRcdFx0aWYgKCFkYXRlLm1vbnRoSGVhZGVyUmVnZXgoKS5leGVjKHRleHQpKSB7XG5cdFx0XHRcdFx0dGV4dCArPSBgXFxuXFxuJHtkYXRlLm1vbnRoSGVhZGVyKHRoaXMuaGVhZGVyTGV2ZWwpfWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0cGFnZW9iai5zZXRQYWdlVGV4dChgJHt0ZXh0fVxcbiR7bG9nVGV4dH1gKTtcblx0XHRcdFx0cGFnZW9iai5zZXRFZGl0U3VtbWFyeShzdW1tYXJ5VGV4dCk7XG5cdFx0XHRcdHBhZ2VvYmouc2V0Q2hhbmdlVGFncyh0aGlzLmNoYW5nZVRhZ3MpO1xuXHRcdFx0XHRwYWdlb2JqLnNldENyZWF0ZU9wdGlvbigncmVjcmVhdGUnKTtcblx0XHRcdFx0cGFnZW9iai5zYXZlKGRlZi5yZXNvbHZlLCBkZWYucmVqZWN0KTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIGRlZjtcblx0XHR9O1xuXHR9O1xuXHQvKiAqKioqKioqKioqKioqKioqIE1vcmViaXRzLnN0YXR1cyAqKioqKioqKioqKioqKioqICovXG5cdC8qKlxuXHQgKiBDcmVhdGUgYW5kIHNob3cgc3RhdHVzIG1lc3NhZ2VzIG9mIHZhcnlpbmcgdXJnZW5jeS5cblx0ICoge0BsaW5rIE1vcmViaXRzLnN0YXR1cy5pbml0fE1vcmViaXRzLnN0YXR1cy5pbml0KCl9IG11c3QgYmUgY2FsbGVkIGJlZm9yZVxuXHQgKiBhbnkgc3RhdHVzIG9iamVjdCBpcyBjcmVhdGVkLCBvdGhlcndpc2UgdGhvc2Ugc3RhdHVzZXMgd29uJ3QgYmUgdmlzaWJsZS5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzXG5cdCAqIEBjbGFzc1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRleHQgYmVmb3JlIHRoZSB0aGUgY29sb24gYDpgLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RhdCAtIFRleHQgYWZ0ZXIgdGhlIGNvbG9uIGA6YC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IFt0eXBlPXN0YXR1c10gLSBEZXRlcm1pbmUgdGhlIGZvbnQgY29sb3Igb2YgdGhlIHN0YXR1c1xuXHQgKiBsaW5lLCBhbGxvd2FibGUgdmFsdWVzIGFyZTogYHN0YXR1c2AgKGJsdWUpLCBgaW5mb2AgKGdyZWVuKSwgYHdhcm5gIChyZWQpLFxuXHQgKiBvciBgZXJyb3JgIChib2xkIHJlZCkuXG5cdCAqL1xuXHRNb3JlYml0cy5zdGF0dXMgPSBmdW5jdGlvbiAodGV4dCwgc3RhdCwgdHlwZSkge1xuXHRcdHRoaXMudGV4dFJhdyA9IHRleHQ7XG5cdFx0dGhpcy50ZXh0ID0gTW9yZWJpdHMuY3JlYXRlSHRtbCh0ZXh0KTtcblx0XHR0aGlzLnR5cGUgPSB0eXBlIHx8ICdzdGF0dXMnO1xuXHRcdHRoaXMuZ2VuZXJhdGUoKTtcblx0XHRpZiAoc3RhdCkge1xuXHRcdFx0dGhpcy51cGRhdGUoc3RhdCwgdHlwZSk7XG5cdFx0fVxuXHR9O1xuXHQvKipcblx0ICogU3BlY2lmeSBhbiBhcmVhIGZvciBzdGF0dXMgbWVzc2FnZSBlbGVtZW50cyB0byBiZSBhZGRlZCB0by5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnN0YXR1c1xuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSByb290IC0gVXN1YWxseSBhIGRpdiBlbGVtZW50LlxuXHQgKiBAdGhyb3dzIElmIGByb290YCBpcyBub3QgYW4gYEhUTUxFbGVtZW50YC5cblx0ICovXG5cdE1vcmViaXRzLnN0YXR1cy5pbml0ID0gKHJvb3QpID0+IHtcblx0XHRpZiAoIShyb290IGluc3RhbmNlb2YgRWxlbWVudCkpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ29iamVjdCBub3QgYW4gaW5zdGFuY2Ugb2YgRWxlbWVudCcpO1xuXHRcdH1cblx0XHR3aGlsZSAocm9vdC5oYXNDaGlsZE5vZGVzKCkpIHtcblx0XHRcdHJvb3QucmVtb3ZlQ2hpbGQocm9vdC5maXJzdENoaWxkKTtcblx0XHR9XG5cdFx0TW9yZWJpdHMuc3RhdHVzLnJvb3QgPSByb290O1xuXHRcdE1vcmViaXRzLnN0YXR1cy5lcnJvckV2ZW50ID0gbnVsbDtcblx0fTtcblx0TW9yZWJpdHMuc3RhdHVzLnJvb3QgPSBudWxsO1xuXHQvKipcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnN0YXR1c1xuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIC0gRnVuY3Rpb24gdG8gZXhlY3V0ZSBvbiBlcnJvci5cblx0ICogQHRocm93cyBXaGVuIGBoYW5kbGVyYCBpcyBub3QgYSBmdW5jdGlvbi5cblx0ICovXG5cdE1vcmViaXRzLnN0YXR1cy5vbkVycm9yID0gKGhhbmRsZXIpID0+IHtcblx0XHRpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdE1vcmViaXRzLnN0YXR1cy5lcnJvckV2ZW50ID0gaGFuZGxlcjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignTW9yZWJpdHMuc3RhdHVzLm9uRXJyb3I6IGhhbmRsZXIgaXMgbm90IGEgZnVuY3Rpb24nKTtcblx0XHR9XG5cdH07XG5cdE1vcmViaXRzLnN0YXR1cy5wcm90b3R5cGUgPSB7XG5cdFx0c3RhdDogbnVsbCxcblx0XHRzdGF0UmF3OiBudWxsLFxuXHRcdHRleHQ6IG51bGwsXG5cdFx0dGV4dFJhdzogbnVsbCxcblx0XHR0eXBlOiAnc3RhdHVzJyxcblx0XHR0YXJnZXQ6IG51bGwsXG5cdFx0bm9kZTogbnVsbCxcblx0XHRsaW5rZWQ6IGZhbHNlLFxuXHRcdC8qKiBBZGQgdGhlIHN0YXR1cyBlbGVtZW50IG5vZGUgdG8gdGhlIERPTS4gKi9cblx0XHRsaW5rKCkge1xuXHRcdFx0aWYgKCF0aGlzLmxpbmtlZCAmJiBNb3JlYml0cy5zdGF0dXMucm9vdCkge1xuXHRcdFx0XHRNb3JlYml0cy5zdGF0dXMucm9vdC5hcHBlbmRDaGlsZCh0aGlzLm5vZGUpO1xuXHRcdFx0XHR0aGlzLmxpbmtlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvKiogUmVtb3ZlIHRoZSBzdGF0dXMgZWxlbWVudCBub2RlIGZyb20gdGhlIERPTS4gKi9cblx0XHR1bmxpbmsoKSB7XG5cdFx0XHRpZiAodGhpcy5saW5rZWQpIHtcblx0XHRcdFx0TW9yZWJpdHMuc3RhdHVzLnJvb3QucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKTtcblx0XHRcdFx0dGhpcy5saW5rZWQgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFVwZGF0ZSB0aGUgc3RhdHVzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHN0YXR1cyAtIFBhcnQgb2Ygc3RhdHVzIG1lc3NhZ2UgYWZ0ZXIgY29sb24uXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSAnc3RhdHVzJyAoYmx1ZSksICdpbmZvJyAoZ3JlZW4pLCAnd2Fybidcblx0XHQgKiAocmVkKSwgb3IgJ2Vycm9yJyAoYm9sZCByZWQpLlxuXHRcdCAqL1xuXHRcdHVwZGF0ZShzdGF0dXMsIHR5cGUpIHtcblx0XHRcdHRoaXMuc3RhdFJhdyA9IHN0YXR1cztcblx0XHRcdHRoaXMuc3RhdCA9IE1vcmViaXRzLmNyZWF0ZUh0bWwoc3RhdHVzKTtcblx0XHRcdGlmICh0eXBlKSB7XG5cdFx0XHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdFx0XHRcdGlmICh0eXBlID09PSAnZXJyb3InKSB7XG5cdFx0XHRcdFx0Ly8gaGFjayB0byBmb3JjZSB0aGUgcGFnZSBub3QgdG8gcmVsb2FkIHdoZW4gYW4gZXJyb3IgaXMgb3V0cHV0IC0gc2VlIGFsc28gTW9yZWJpdHMuc3RhdHVzKCkgYWJvdmVcblx0XHRcdFx0XHRNb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQgPSAxMDAwO1xuXHRcdFx0XHRcdC8vIGNhbGwgZXJyb3IgY2FsbGJhY2tcblx0XHRcdFx0XHRpZiAoTW9yZWJpdHMuc3RhdHVzLmVycm9yRXZlbnQpIHtcblx0XHRcdFx0XHRcdE1vcmViaXRzLnN0YXR1cy5lcnJvckV2ZW50KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIGFsc28gbG9nIGVycm9yIG1lc3NhZ2VzIGluIHRoZSBicm93c2VyIGNvbnNvbGVcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBbTW9yZWJpdHNdICR7dGhpcy50ZXh0UmF3fTogJHt0aGlzLnN0YXRSYXd9YCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMucmVuZGVyKCk7XG5cdFx0fSxcblx0XHQvKiogUHJvZHVjZSB0aGUgaHRtbCBmb3IgZmlyc3QgcGFydCBvZiB0aGUgc3RhdHVzIG1lc3NhZ2UuICovXG5cdFx0Z2VuZXJhdGUoKSB7XG5cdFx0XHR0aGlzLm5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdHRoaXMubm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpLmFwcGVuZENoaWxkKHRoaXMudGV4dCk7XG5cdFx0XHR0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnOiAnKSk7XG5cdFx0XHR0aGlzLnRhcmdldCA9IHRoaXMubm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpO1xuXHRcdFx0dGhpcy50YXJnZXQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpKTsgLy8gZHVtbXkgbm9kZVxuXHRcdH0sXG5cblx0XHQvKiogQ29tcGxldGUgdGhlIGh0bWwsIGZvciB0aGUgc2Vjb25kIHBhcnQgb2YgdGhlIHN0YXR1cyBtZXNzYWdlLiAqL1xuXHRcdHJlbmRlcigpIHtcblx0XHRcdHRoaXMubm9kZS5jbGFzc05hbWUgPSBgbW9yZWJpdHNfc3RhdHVzXyR7dGhpcy50eXBlfWA7XG5cdFx0XHR3aGlsZSAodGhpcy50YXJnZXQuaGFzQ2hpbGROb2RlcygpKSB7XG5cdFx0XHRcdHRoaXMudGFyZ2V0LnJlbW92ZUNoaWxkKHRoaXMudGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50YXJnZXQuYXBwZW5kQ2hpbGQodGhpcy5zdGF0KTtcblx0XHRcdHRoaXMubGluaygpO1xuXHRcdH0sXG5cdFx0c3RhdHVzKHN0YXR1cykge1xuXHRcdFx0dGhpcy51cGRhdGUoc3RhdHVzLCAnc3RhdHVzJyk7XG5cdFx0fSxcblx0XHRpbmZvKHN0YXR1cykge1xuXHRcdFx0dGhpcy51cGRhdGUoc3RhdHVzLCAnaW5mbycpO1xuXHRcdH0sXG5cdFx0d2FybihzdGF0dXMpIHtcblx0XHRcdHRoaXMudXBkYXRlKHN0YXR1cywgJ3dhcm4nKTtcblx0XHR9LFxuXHRcdGVycm9yKHN0YXR1cykge1xuXHRcdFx0dGhpcy51cGRhdGUoc3RhdHVzLCAnZXJyb3InKTtcblx0XHR9LFxuXHR9O1xuXHQvKipcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnN0YXR1c1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIEJlZm9yZSBjb2xvblxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RhdHVzIC0gQWZ0ZXIgY29sb25cblx0ICogQHJldHVybnMge01vcmViaXRzLnN0YXR1c30gLSBgc3RhdHVzYC10eXBlIChibHVlKVxuXHQgKi9cblx0TW9yZWJpdHMuc3RhdHVzLnN0YXR1cyA9ICh0ZXh0LCBzdGF0dXMpID0+IHtcblx0XHRyZXR1cm4gbmV3IE1vcmViaXRzLnN0YXR1cyh0ZXh0LCBzdGF0dXMpO1xuXHR9O1xuXHQvKipcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnN0YXR1c1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIEJlZm9yZSBjb2xvblxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RhdHVzIC0gQWZ0ZXIgY29sb25cblx0ICogQHJldHVybnMge01vcmViaXRzLnN0YXR1c30gLSBgaW5mb2AtdHlwZSAoZ3JlZW4pXG5cdCAqL1xuXHRNb3JlYml0cy5zdGF0dXMuaW5mbyA9ICh0ZXh0LCBzdGF0dXMpID0+IHtcblx0XHRyZXR1cm4gbmV3IE1vcmViaXRzLnN0YXR1cyh0ZXh0LCBzdGF0dXMsICdpbmZvJyk7XG5cdH07XG5cdC8qKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuc3RhdHVzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gQmVmb3JlIGNvbG9uXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0dXMgLSBBZnRlciBjb2xvblxuXHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc3RhdHVzfSAtIGB3YXJuYC10eXBlIChyZWQpXG5cdCAqL1xuXHRNb3JlYml0cy5zdGF0dXMud2FybiA9ICh0ZXh0LCBzdGF0dXMpID0+IHtcblx0XHRyZXR1cm4gbmV3IE1vcmViaXRzLnN0YXR1cyh0ZXh0LCBzdGF0dXMsICd3YXJuJyk7XG5cdH07XG5cdC8qKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuc3RhdHVzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gQmVmb3JlIGNvbG9uXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0dXMgLSBBZnRlciBjb2xvblxuXHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc3RhdHVzfSAtIGBlcnJvcmAtdHlwZSAoYm9sZCByZWQpXG5cdCAqL1xuXHRNb3JlYml0cy5zdGF0dXMuZXJyb3IgPSAodGV4dCwgc3RhdHVzKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBNb3JlYml0cy5zdGF0dXModGV4dCwgc3RhdHVzLCAnZXJyb3InKTtcblx0fTtcblx0LyoqXG5cdCAqIEZvciB0aGUgYWN0aW9uIGNvbXBsZXRlIG1lc3NhZ2UgYXQgdGhlIGVuZCwgY3JlYXRlIGEgc3RhdHVzIGxpbmUgd2l0aG91dFxuXHQgKiBhIGNvbG9uIHNlcGFyYXRvci5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnN0YXR1c1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dFxuXHQgKi9cblx0TW9yZWJpdHMuc3RhdHVzLmFjdGlvbkNvbXBsZXRlZCA9ICh0ZXh0KSA9PiB7XG5cdFx0Y29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYicpKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KSk7XG5cdFx0bm9kZS5jbGFzc05hbWUgPSAnbW9yZWJpdHNfc3RhdHVzX2luZm8gbW9yZWJpdHNfYWN0aW9uX2NvbXBsZXRlJztcblx0XHRpZiAoTW9yZWJpdHMuc3RhdHVzLnJvb3QpIHtcblx0XHRcdE1vcmViaXRzLnN0YXR1cy5yb290LmFwcGVuZENoaWxkKG5vZGUpO1xuXHRcdH1cblx0fTtcblx0LyoqXG5cdCAqIERpc3BsYXkgdGhlIHVzZXIncyByYXRpb25hbGUsIGNvbW1lbnRzLCBldGMuIEJhY2sgdG8gdGhlbSBhZnRlciBhIGZhaWx1cmUsXG5cdCAqIHNvIHRoYXQgdGhleSBtYXkgcmUtdXNlIGl0LlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuc3RhdHVzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb21tZW50c1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuXHQgKi9cblx0TW9yZWJpdHMuc3RhdHVzLnByaW50VXNlclRleHQgPSAoY29tbWVudHMsIG1lc3NhZ2UpID0+IHtcblx0XHRjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRcdHAuaW5uZXJIVE1MID0gbWVzc2FnZTtcblx0XHRjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRkaXYuY2xhc3NOYW1lID0gJ21vcmViaXRzLXVzZXJ0ZXh0Jztcblx0XHRkaXYuc3R5bGUubWFyZ2luVG9wID0gJzAnO1xuXHRcdGRpdi5zdHlsZS53aGl0ZVNwYWNlID0gJ3ByZS13cmFwJztcblx0XHRkaXYudGV4dENvbnRlbnQgPSBjb21tZW50cztcblx0XHRwLmFwcGVuZENoaWxkKGRpdik7XG5cdFx0TW9yZWJpdHMuc3RhdHVzLnJvb3QuYXBwZW5kQ2hpbGQocCk7XG5cdH07XG5cdC8qKlxuXHQgKiBTaW1wbGUgaGVscGVyIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIHNpbXBsZSBub2RlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIFR5cGUgb2YgSFRNTCBlbGVtZW50LlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29udGVudCAtIFRleHQgY29udGVudC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IFtjb2xvcl0gLSBGb250IGNvbG9yLlxuXHQgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG5cdCAqL1xuXHRNb3JlYml0cy5odG1sTm9kZSA9ICh0eXBlLCBjb250ZW50LCBjb2xvcikgPT4ge1xuXHRcdGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuXHRcdGlmIChjb2xvcikge1xuXHRcdFx0bm9kZS5zdHlsZS5jb2xvciA9IGNvbG9yO1xuXHRcdH1cblx0XHRub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpKTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fTtcblx0LyoqXG5cdCAqIEFkZCBzaGlmdC1jbGljayBzdXBwb3J0IGZvciBjaGVja2JveGVzLiBUaGUgd2lraWJpdHMgdmVyc2lvblxuXHQgKiAoYHdpbmRvdy5hZGRDaGVja2JveENsaWNrSGFuZGxlcnNgKSBoYXMgc29tZSByZXN0cmljdGlvbnMsIGFuZCBkb2Vzbid0IHdvcmtcblx0ICogd2l0aCBjaGVja2JveGVzIGluc2lkZSBhIHNvcnRhYmxlIHRhYmxlLCBzbyBsZXQncyBidWlsZCBvdXIgb3duLlxuXHQgKlxuXHQgKiBAcGFyYW0galF1ZXJ5U2VsZWN0b3Jcblx0ICogQHBhcmFtIGpRdWVyeUNvbnRleHRcblx0ICovXG5cdE1vcmViaXRzLmNoZWNrYm94U2hpZnRDbGlja1N1cHBvcnQgPSAoalF1ZXJ5U2VsZWN0b3IsIGpRdWVyeUNvbnRleHQpID0+IHtcblx0XHRsZXQgbGFzdENoZWNrYm94ID0gbnVsbDtcblx0XHRjb25zdCBjbGlja0hhbmRsZXIgPSBmdW5jdGlvbiBjbGlja0hhbmRsZXIoZXZlbnQpIHtcblx0XHRcdGNvbnN0IHRoaXNDYiA9IHRoaXM7XG5cdFx0XHRpZiAoZXZlbnQuc2hpZnRLZXkgJiYgbGFzdENoZWNrYm94ICE9PSBudWxsKSB7XG5cdFx0XHRcdGNvbnN0IGNicyA9ICQoalF1ZXJ5U2VsZWN0b3IsIGpRdWVyeUNvbnRleHQpOyAvLyBjYW4ndCBjYWNoZSB0aGVtLCBvYnZpb3VzbHksIGlmIHdlIHdhbnQgdG8gc3VwcG9ydCByZXNvcnRpbmdcblx0XHRcdFx0bGV0IGluZGV4ID0gLTE7XG5cdFx0XHRcdGxldCBsYXN0SW5kZXggPSAtMTtcblx0XHRcdFx0bGV0IGk7XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBjYnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoY2JzW2ldID09PSB0aGlzQ2IpIHtcblx0XHRcdFx0XHRcdGluZGV4ID0gaTtcblx0XHRcdFx0XHRcdGlmIChsYXN0SW5kZXggPiAtMSkge1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGNic1tpXSA9PT0gbGFzdENoZWNrYm94KSB7XG5cdFx0XHRcdFx0XHRsYXN0SW5kZXggPSBpO1xuXHRcdFx0XHRcdFx0aWYgKGluZGV4ID4gLTEpIHtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChpbmRleCA+IC0xICYmIGxhc3RJbmRleCA+IC0xKSB7XG5cdFx0XHRcdFx0Ly8gaW5zcGlyZWQgYnkgd2lraWJpdHNcblx0XHRcdFx0XHRjb25zdCBlbmRTdGF0ZSA9IHRoaXNDYi5jaGVja2VkO1xuXHRcdFx0XHRcdGxldCBzdGFydDtcblx0XHRcdFx0XHRsZXQgZmluaXNoO1xuXHRcdFx0XHRcdGlmIChpbmRleCA8IGxhc3RJbmRleCkge1xuXHRcdFx0XHRcdFx0c3RhcnQgPSBpbmRleCArIDE7XG5cdFx0XHRcdFx0XHRmaW5pc2ggPSBsYXN0SW5kZXg7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHN0YXJ0ID0gbGFzdEluZGV4O1xuXHRcdFx0XHRcdFx0ZmluaXNoID0gaW5kZXggLSAxO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRmb3IgKGkgPSBzdGFydDsgaSA8PSBmaW5pc2g7IGkrKykge1xuXHRcdFx0XHRcdFx0aWYgKGNic1tpXS5jaGVja2VkICE9PSBlbmRTdGF0ZSkge1xuXHRcdFx0XHRcdFx0XHRjYnNbaV0uY2xpY2soKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGxhc3RDaGVja2JveCA9IHRoaXNDYjtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH07XG5cdFx0JChqUXVlcnlTZWxlY3RvciwgalF1ZXJ5Q29udGV4dCkub24oJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcblx0fTtcblx0LyogKioqKioqKioqKioqKioqKiBNb3JlYml0cy5iYXRjaE9wZXJhdGlvbiAqKioqKioqKioqKioqKioqICovXG5cdC8qKlxuXHQgKiBJdGVyYXRlcyBvdmVyIGEgZ3JvdXAgb2YgcGFnZXMgKG9yIGFyYml0cmFyeSBvYmplY3RzKSBhbmQgZXhlY3V0ZXMgYSB3b3JrZXIgZnVuY3Rpb25cblx0ICogZm9yIGVhY2guXG5cdCAqXG5cdCAqIGBzZXRQYWdlTGlzdChwYWdlTGlzdClgOiBTZXRzIHRoZSBsaXN0IG9mIHBhZ2VzIHRvIHdvcmsgb24uIEl0IHNob3VsZCBiZSBhblxuXHQgKiBhcnJheSBvZiBwYWdlIG5hbWVzIHN0cmluZ3MuXG5cdCAqXG5cdCAqIGBzZXRPcHRpb24ob3B0aW9uTmFtZSwgb3B0aW9uVmFsdWUpYDogU2V0cyBhIGtub3duIG9wdGlvbjpcblx0ICogLSBgY2h1bmtTaXplYCAoaW50ZWdlcik6IFRoZSBzaXplIG9mIGNodW5rcyB0byBicmVhayB0aGUgYXJyYXkgaW50byAoZGVmYXVsdFxuXHQgKiA1MCkuIFNldHRpbmcgdGhpcyB0byBhIHNtYWxsIHZhbHVlICg8NSkgY2FuIGNhdXNlIHByb2JsZW1zLlxuXHQgKiAtIGBwcmVzZXJ2ZUluZGl2aWR1YWxTdGF0dXNMaW5lc2AgKGJvb2xlYW4pOiBLZWVwIGVhY2ggcGFnZSdzIHN0YXR1cyBlbGVtZW50XG5cdCAqIHZpc2libGUgd2hlbiB3b3JrZXIgaXMgY29tcGxldGU/IFNlZSBub3RlIGJlbG93LlxuXHQgKlxuXHQgKiBgcnVuKHdvcmtlciwgcG9zdEZpbmlzaClgOiBSdW5zIHRoZSBjYWxsYmFjayBgd29ya2VyYCBmb3IgZWFjaCBwYWdlIGluIHRoZVxuXHQgKiBsaXN0LiAgVGhlIGNhbGxiYWNrIG11c3QgY2FsbCBgd29ya2VyU3VjY2Vzc2Agd2hlbiBzdWNjZWVkaW5nLCBvclxuXHQgKiBgd29ya2VyRmFpbHVyZWAgd2hlbiBmYWlsaW5nLiAgSWYgdXNpbmcge0BsaW5rIE1vcmViaXRzLndpa2kuYXBpfSBvclxuXHQgKiB7QGxpbmsgTW9yZWJpdHMud2lraS5wYWdlfSwgdGhpcyBpcyBlYXNpbHkgZG9uZSBieSBwYXNzaW5nIHRoZXNlIHR3b1xuXHQgKiBmdW5jdGlvbnMgYXMgcGFyYW1ldGVycyB0byB0aGUgbWV0aG9kcyBvbiB0aG9zZSBvYmplY3RzOiBmb3IgaW5zdGFuY2UsXG5cdCAqIGBwYWdlLnNhdmUoYmF0Y2hPcC53b3JrZXJTdWNjZXNzLCBiYXRjaE9wLndvcmtlckZhaWx1cmUpYC4gIE1ha2Ugc3VyZSB0aGVcblx0ICogbWV0aG9kcyBhcmUgY2FsbGVkIGRpcmVjdGx5IGlmIHNwZWNpYWwgc3VjY2Vzcy9mYWlsdXJlIGNhc2VzIGFyaXNlLiAgSWYgeW91XG5cdCAqIG9taXQgdG8gY2FsbCB0aGVzZSBtZXRob2RzLCB0aGUgYmF0Y2ggb3BlcmF0aW9uIHdpbGwgc3RhbGwgYWZ0ZXIgdGhlIGZpcnN0XG5cdCAqIGNodW5rISAgQWxzbyBlbnN1cmUgdGhhdCBlaXRoZXIgd29ya2VyU3VjY2VzcyBvciB3b3JrZXJGYWlsdXJlIGlzIGNhbGxlZCBub1xuXHQgKiBtb3JlIHRoYW4gb25jZS4gIFRoZSBzZWNvbmQgY2FsbGJhY2sgYHBvc3RGaW5pc2hgIGlzIGV4ZWN1dGVkIHdoZW4gdGhlXG5cdCAqIGVudGlyZSBiYXRjaCBoYXMgYmVlbiBwcm9jZXNzZWQuXG5cdCAqXG5cdCAqIElmIHVzaW5nIGBwcmVzZXJ2ZUluZGl2aWR1YWxTdGF0dXNMaW5lc2AsIHlvdSBzaG91bGQgdHJ5IHRvIGVuc3VyZSB0aGF0IHRoZVxuXHQgKiBgd29ya2VyU3VjY2Vzc2AgY2FsbGJhY2sgaGFzIGFjY2VzcyB0byB0aGUgcGFnZSB0aXRsZS4gIFRoaXMgaXMgbm8gcHJvYmxlbSBmb3Jcblx0ICoge0BsaW5rIE1vcmViaXRzLndpa2kucGFnZX0gb2JqZWN0cy4gIEJ1dCB3aGVuIHVzaW5nIHRoZSBBUEksIHBsZWFzZSBzZXQgdGhlXG5cdCAqIHxwYWdlTmFtZXwgcHJvcGVydHkgb24gdGhlIHtAbGluayBNb3JlYml0cy53aWtpLmFwaX0gb2JqZWN0LlxuXHQgKlxuXHQgKiBUaGVyZSBhcmUgc2FtcGxlIGJhdGNoT3BlcmF0aW9uIGltcGxlbWVudGF0aW9ucyB1c2luZyBNb3JlYml0cy53aWtpLnBhZ2UgaW5cblx0ICogdHdpbmtsZWJhdGNoZGVsZXRlLmpzLCB0d2lua2xlYmF0Y2h1bmRlbGV0ZS5qcywgYW5kIHR3aW5rbGViYXRjaHByb3RlY3QuanMuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0c1xuXHQgKiBAY2xhc3Ncblx0ICogQHBhcmFtIHtzdHJpbmd9IFtjdXJyZW50QWN0aW9uXVxuXHQgKi9cblx0TW9yZWJpdHMuYmF0Y2hPcGVyYXRpb24gPSBmdW5jdGlvbiAoY3VycmVudEFjdGlvbikge1xuXHRcdGNvbnN0IGN0eCA9IHtcblx0XHRcdC8vIGJhY2tpbmcgZmllbGRzIGZvciBwdWJsaWMgcHJvcGVydGllc1xuXHRcdFx0cGFnZUxpc3Q6IG51bGwsXG5cdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdGNodW5rU2l6ZTogNTAsXG5cdFx0XHRcdHByZXNlcnZlSW5kaXZpZHVhbFN0YXR1c0xpbmVzOiBmYWxzZSxcblx0XHRcdH0sXG5cdFx0XHQvLyBpbnRlcm5hbCBjb3VudGVycywgZXRjLlxuXHRcdFx0c3RhdHVzRWxlbWVudDogbmV3IE1vcmViaXRzLnN0YXR1cyhjdXJyZW50QWN0aW9uIHx8IHdpbmRvdy53Z1VMUygn5omn6KGM5om56YeP5pON5L2cJywgJ+Wft+ihjOaJueasoeaTjeS9nCcpKSxcblx0XHRcdHdvcmtlcjogbnVsbCxcblx0XHRcdC8vIGZ1bmN0aW9uIHRoYXQgZXhlY3V0ZXMgZm9yIGVhY2ggaXRlbSBpbiBwYWdlTGlzdFxuXHRcdFx0cG9zdEZpbmlzaDogbnVsbCxcblx0XHRcdC8vIGZ1bmN0aW9uIHRoYXQgZXhlY3V0ZXMgd2hlbiB0aGUgd2hvbGUgYmF0Y2ggaGFzIGJlZW4gcHJvY2Vzc2VkXG5cdFx0XHRjb3VudFN0YXJ0ZWQ6IDAsXG5cdFx0XHRjb3VudEZpbmlzaGVkOiAwLFxuXHRcdFx0Y291bnRGaW5pc2hlZFN1Y2Nlc3M6IDAsXG5cdFx0XHRjdXJyZW50Q2h1bmtJbmRleDogLTEsXG5cdFx0XHRwYWdlQ2h1bmtzOiBbXSxcblx0XHRcdHJ1bm5pbmc6IGZhbHNlLFxuXHRcdH07XG5cdFx0Ly8gc2hvdWxkbid0IGJlIG5lZWRlZCBieSBleHRlcm5hbCB1c2VycywgYnV0IHByb3ZpZGVkIGFueXdheSBmb3IgbWF4aW11bSBmbGV4aWJpbGl0eVxuXHRcdHRoaXMuZ2V0U3RhdHVzRWxlbWVudCA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHguc3RhdHVzRWxlbWVudDtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFNldHMgdGhlIGxpc3Qgb2YgcGFnZXMgdG8gd29yayBvbi5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7QXJyYXl9IHBhZ2VMaXN0IC0gQXJyYXkgb2Ygb2JqZWN0cyBvdmVyIHdoaWNoIHlvdSB3aXNoIHRvIGV4ZWN1dGUgdGhlIHdvcmtlciBmdW5jdGlvblxuXHRcdCAqIFRoaXMgaXMgdXN1YWxseSB0aGUgbGlzdCBvZiBwYWdlIG5hbWVzIChzdHJpbmdzKS5cblx0XHQgKi9cblx0XHR0aGlzLnNldFBhZ2VMaXN0ID0gKHBhZ2VMaXN0KSA9PiB7XG5cdFx0XHRjdHgucGFnZUxpc3QgPSBwYWdlTGlzdDtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFNldHMgYSBrbm93biBvcHRpb24uXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9uTmFtZSAtIE5hbWUgb2YgdGhlIG9wdGlvbjpcblx0XHQgKiAtIGNodW5rU2l6ZSAoaW50ZWdlcik6IFRoZSBzaXplIG9mIGNodW5rcyB0byBicmVhayB0aGUgYXJyYXkgaW50b1xuXHRcdCAqIChkZWZhdWx0IDUwKS4gU2V0dGluZyB0aGlzIHRvIGEgc21hbGwgdmFsdWUgKDw1KSBjYW4gY2F1c2UgcHJvYmxlbXMuXG5cdFx0ICogLSBwcmVzZXJ2ZUluZGl2aWR1YWxTdGF0dXNMaW5lcyAoYm9vbGVhbik6IEtlZXAgZWFjaCBwYWdlJ3Mgc3RhdHVzXG5cdFx0ICogZWxlbWVudCB2aXNpYmxlIHdoZW4gd29ya2VyIGlzIGNvbXBsZXRlP1xuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfGJvb2xlYW59IG9wdGlvblZhbHVlIC0gVmFsdWUgdG8gd2hpY2ggdGhlIG9wdGlvbiBpc1xuXHRcdCAqIHRvIGJlIHNldC4gU2hvdWxkIGJlIGFuIGludGVnZXIgZm9yIGNodW5rU2l6ZSBhbmQgYSBib29sZWFuIGZvclxuXHRcdCAqIHByZXNlcnZlSW5kaXZpZHVhbFN0YXR1c0xpbmVzLlxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0T3B0aW9uID0gKG9wdGlvbk5hbWUsIG9wdGlvblZhbHVlKSA9PiB7XG5cdFx0XHRjdHgub3B0aW9uc1tvcHRpb25OYW1lXSA9IG9wdGlvblZhbHVlO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogUnVucyB0aGUgZmlyc3QgY2FsbGJhY2sgZm9yIGVhY2ggcGFnZSBpbiB0aGUgbGlzdC5cblx0XHQgKiBUaGUgY2FsbGJhY2sgbXVzdCBjYWxsIHdvcmtlclN1Y2Nlc3Mgd2hlbiBzdWNjZWVkaW5nLCBvciB3b3JrZXJGYWlsdXJlIHdoZW4gZmFpbGluZy5cblx0XHQgKiBSdW5zIHRoZSBvcHRpb25hbCBzZWNvbmQgY2FsbGJhY2sgd2hlbiB0aGUgd2hvbGUgYmF0Y2ggaGFzIGJlZW4gcHJvY2Vzc2VkLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gd29ya2VyXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW3Bvc3RGaW5pc2hdXG5cdFx0ICovXG5cdFx0dGhpcy5ydW4gPSAod29ya2VyLCBwb3N0RmluaXNoKSA9PiB7XG5cdFx0XHRpZiAoY3R4LnJ1bm5pbmcpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfmibnph4/mk43kvZzlt7LlnKjov5DooYwnLCAn5om55qyh5pON5L2c5bey5Zyo5Z+36KGMJykpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjdHgucnVubmluZyA9IHRydWU7XG5cdFx0XHRjdHgud29ya2VyID0gd29ya2VyO1xuXHRcdFx0Y3R4LnBvc3RGaW5pc2ggPSBwb3N0RmluaXNoO1xuXHRcdFx0Y3R4LmNvdW50U3RhcnRlZCA9IDA7XG5cdFx0XHRjdHguY291bnRGaW5pc2hlZCA9IDA7XG5cdFx0XHRjdHguY291bnRGaW5pc2hlZFN1Y2Nlc3MgPSAwO1xuXHRcdFx0Y3R4LmN1cnJlbnRDaHVua0luZGV4ID0gLTE7XG5cdFx0XHRjdHgucGFnZUNodW5rcyA9IFtdO1xuXHRcdFx0Y29uc3QgdG90YWwgPSBjdHgucGFnZUxpc3QubGVuZ3RoO1xuXHRcdFx0aWYgKCF0b3RhbCkge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5pbmZvKHdpbmRvdy53Z1VMUygn5rKh5pyJ5oyH5a6a6aG16Z2iJywgJ+aykuacieaMh+WumumggemdoicpKTtcblx0XHRcdFx0Y3R4LnJ1bm5pbmcgPSBmYWxzZTtcblx0XHRcdFx0aWYgKGN0eC5wb3N0RmluaXNoKSB7XG5cdFx0XHRcdFx0Y3R4LnBvc3RGaW5pc2goKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHQvLyBjaHVuayBwYWdlIGxpc3QgaW50byBtb3JlIG1hbmFnZWFibGUgdW5pdHNcblx0XHRcdGN0eC5wYWdlQ2h1bmtzID0gTW9yZWJpdHMuYXJyYXkuY2h1bmsoY3R4LnBhZ2VMaXN0LCBjdHgub3B0aW9ucy5jaHVua1NpemUpO1xuXHRcdFx0Ly8gc3RhcnQgdGhlIHByb2Nlc3Ncblx0XHRcdE1vcmViaXRzLndpa2kuYWRkQ2hlY2twb2ludCgpO1xuXHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuc3RhdHVzKCcwJScpO1xuXHRcdFx0Zm5TdGFydE5ld0NodW5rKCk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBUbyBiZSBjYWxsZWQgYnkgd29ya2VyIGJlZm9yZSBpdCB0ZXJtaW5hdGVzIHN1Y2Nlc3NmdWxseS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7KE1vcmViaXRzLndpa2kucGFnZXxNb3JlYml0cy53aWtpLmFwaXxzdHJpbmcpfSBhcmcgLVxuXHRcdCAqIFRoaXMgc2hvdWxkIGJlIHRoZSBgTW9yZWJpdHMud2lraS5wYWdlYCBvciBgTW9yZWJpdHMud2lraS5hcGlgIG9iamVjdCB1c2VkIGJ5IHdvcmtlclxuXHRcdCAqIChmb3IgdGhlIGFkanVzdG1lbnQgb2Ygc3RhdHVzIGxpbmVzIGVtaXR0ZWQgYnkgdGhlbSkuXG5cdFx0ICogSWYgbm8gTW9yZWJpdHMud2lraS4qIG9iamVjdCBpcyB1c2VkIChlLmcuIHlvdSdyZSB1c2luZyBgbXcuQXBpKClgIG9yIHNvbWV0aGluZyBlbHNlKSwgYW5kXG5cdFx0ICogYHByZXNlcnZlSW5kaXZpZHVhbFN0YXR1c0xpbmVzYCBvcHRpb24gaXMgb24sIGdpdmUgdGhlIHBhZ2UgbmFtZSAoc3RyaW5nKSBhcyBhcmd1bWVudC5cblx0XHQgKi9cblx0XHR0aGlzLndvcmtlclN1Y2Nlc3MgPSAoYXJnKSA9PiB7XG5cdFx0XHRpZiAoYXJnIGluc3RhbmNlb2YgTW9yZWJpdHMud2lraS5hcGkgfHwgYXJnIGluc3RhbmNlb2YgTW9yZWJpdHMud2lraS5wYWdlKSB7XG5cdFx0XHRcdC8vIHVwZGF0ZSBvciByZW1vdmUgc3RhdHVzIGxpbmVcblx0XHRcdFx0Y29uc3Qgc3RhdGVsZW0gPSBhcmcuZ2V0U3RhdHVzRWxlbWVudCgpO1xuXHRcdFx0XHRpZiAoY3R4Lm9wdGlvbnMucHJlc2VydmVJbmRpdmlkdWFsU3RhdHVzTGluZXMpIHtcblx0XHRcdFx0XHRpZiAoYXJnLmdldFBhZ2VOYW1lIHx8IGFyZy5wYWdlTmFtZSB8fCAoYXJnLnF1ZXJ5ICYmIGFyZy5xdWVyeS50aXRsZSkpIHtcblx0XHRcdFx0XHRcdC8vIHdlIGtub3cgdGhlIHBhZ2UgdGl0bGUgLSBkaXNwbGF5IGEgcmVsZXZhbnQgbWVzc2FnZVxuXHRcdFx0XHRcdFx0Y29uc3QgcGFnZU5hbWUgPSBhcmcuZ2V0UGFnZU5hbWUgPyBhcmcuZ2V0UGFnZU5hbWUoKSA6IGFyZy5wYWdlTmFtZSB8fCBhcmcucXVlcnkudGl0bGU7XG5cdFx0XHRcdFx0XHRzdGF0ZWxlbS5pbmZvKGDlrozmiJDvvIhbWyR7cGFnZU5hbWV9XV3vvIlgKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gd2UgZG9uJ3Qga25vdyB0aGUgcGFnZSB0aXRsZSAtIGp1c3QgZGlzcGxheSBhIGdlbmVyaWMgbWVzc2FnZVxuXHRcdFx0XHRcdFx0c3RhdGVsZW0uaW5mbygn5a6M5oiQJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIHJlbW92ZSB0aGUgc3RhdHVzIGxpbmUgYXV0b21hdGljYWxseSBwcm9kdWNlZCBieSBNb3JlYml0cy53aWtpLipcblx0XHRcdFx0XHRzdGF0ZWxlbS51bmxpbmsoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgYXJnID09PSAnc3RyaW5nJyAmJiBjdHgub3B0aW9ucy5wcmVzZXJ2ZUluZGl2aWR1YWxTdGF0dXNMaW5lcykge1xuXHRcdFx0XHRuZXcgTW9yZWJpdHMuc3RhdHVzKGFyZywgYOWujOaIkO+8iFtbJHthcmd9XV3vvIlgKTtcblx0XHRcdH1cblx0XHRcdGN0eC5jb3VudEZpbmlzaGVkU3VjY2VzcysrO1xuXHRcdFx0Zm5Eb25lT25lKCk7XG5cdFx0fTtcblx0XHR0aGlzLndvcmtlckZhaWx1cmUgPSAoKSA9PiB7XG5cdFx0XHRmbkRvbmVPbmUoKTtcblx0XHR9O1xuXHRcdC8vIHByaXZhdGUgZnVuY3Rpb25zXG5cdFx0Y29uc3QgdGhpc1Byb3h5ID0gdGhpcztcblx0XHRjb25zdCBmblN0YXJ0TmV3Q2h1bmsgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBjaHVuayA9IGN0eC5wYWdlQ2h1bmtzWysrY3R4LmN1cnJlbnRDaHVua0luZGV4XTtcblx0XHRcdGlmICghY2h1bmspIHtcblx0XHRcdFx0cmV0dXJuOyAvLyBkb25lISB5YXlcblx0XHRcdH1cblx0XHRcdC8vIHN0YXJ0IHdvcmtlcnMgZm9yIHRoZSBjdXJyZW50IGNodW5rXG5cdFx0XHRjdHguY291bnRTdGFydGVkICs9IGNodW5rLmxlbmd0aDtcblx0XHRcdGZvciAoY29uc3QgcGFnZSBvZiBjaHVuaykge1xuXHRcdFx0XHRjdHgud29ya2VyKHBhZ2UsIHRoaXNQcm94eSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRjb25zdCBmbkRvbmVPbmUgPSAoKSA9PiB7XG5cdFx0XHRjdHguY291bnRGaW5pc2hlZCsrO1xuXHRcdFx0Ly8gdXBkYXRlIG92ZXJhbGwgc3RhdHVzIGxpbmVcblx0XHRcdGNvbnN0IHRvdGFsID0gY3R4LnBhZ2VMaXN0Lmxlbmd0aDtcblx0XHRcdGlmIChjdHguY291bnRGaW5pc2hlZCA8IHRvdGFsKSB7XG5cdFx0XHRcdGNvbnN0IHByb2dyZXNzID0gTWF0aC5yb3VuZCgoMTAwICogY3R4LmNvdW50RmluaXNoZWQpIC8gdG90YWwpO1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5zdGF0dXMoYCR7cHJvZ3Jlc3N9JWApO1xuXHRcdFx0XHQvLyBzdGFydCBhIG5ldyBjaHVuayBpZiB3ZSdyZSBjbG9zZSBlbm91Z2ggdG8gdGhlIGVuZCBvZiB0aGUgcHJldmlvdXMgY2h1bmssIGFuZFxuXHRcdFx0XHQvLyB3ZSBoYXZlbid0IGFscmVhZHkgc3RhcnRlZCB0aGUgbmV4dCBvbmVcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdGN0eC5jb3VudEZpbmlzaGVkID49IGN0eC5jb3VudFN0YXJ0ZWQgLSBNYXRoLm1heChjdHgub3B0aW9ucy5jaHVua1NpemUgLyAxMCwgMikgJiZcblx0XHRcdFx0XHRNYXRoLmZsb29yKGN0eC5jb3VudEZpbmlzaGVkIC8gY3R4Lm9wdGlvbnMuY2h1bmtTaXplKSA+IGN0eC5jdXJyZW50Q2h1bmtJbmRleFxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRmblN0YXJ0TmV3Q2h1bmsoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChjdHguY291bnRGaW5pc2hlZCA9PT0gdG90YWwpIHtcblx0XHRcdFx0Y29uc3Qgc3RhdHVzU3RyaW5nID0gYOWujOaIkO+8iCR7Y3R4LmNvdW50RmluaXNoZWRTdWNjZXNzfS8ke2N0eC5jb3VudEZpbmlzaGVkfeaTjeS9nOaIkOWKn+WujOaIkO+8iWA7XG5cdFx0XHRcdGlmIChjdHguY291bnRGaW5pc2hlZFN1Y2Nlc3MgPCBjdHguY291bnRGaW5pc2hlZCkge1xuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50Lndhcm4oc3RhdHVzU3RyaW5nKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5pbmZvKHN0YXR1c1N0cmluZyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGN0eC5wb3N0RmluaXNoKSB7XG5cdFx0XHRcdFx0Y3R4LnBvc3RGaW5pc2goKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRNb3JlYml0cy53aWtpLnJlbW92ZUNoZWNrcG9pbnQoKTtcblx0XHRcdFx0Y3R4LnJ1bm5pbmcgPSBmYWxzZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIGN0eC5jb3VudEZpbmlzaGVkID4gdG90YWxcblx0XHRcdFx0Ly8ganVzdCBmb3IgZ2lnZ2xlcyEgKHdlbGwsIHNlcmlvdXMgZGVidWdnaW5nLCBhY3R1YWxseSlcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQud2Fybihcblx0XHRcdFx0XHRgJHt3aW5kb3cud2dVTFMoJ+WujOaIkO+8iOWkmuaJp+ihjOS6hicsICflrozmiJDvvIjlpJrln7fooYzkuoYnKSArIChjdHguY291bnRGaW5pc2hlZCAtIHRvdGFsKX3mrKHvvIlgXG5cdFx0XHRcdCk7XG5cdFx0XHRcdE1vcmViaXRzLndpa2kucmVtb3ZlQ2hlY2twb2ludCgpO1xuXHRcdFx0XHRjdHgucnVubmluZyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH07XG5cdH07XG5cdC8qKlxuXHQgKiBBIHNpbXBsZSBkcmFnZ2FibGUgd2luZG93LCBub3cgYSB3cmFwcGVyIGZvciBqUXVlcnkgVUkncyBkaWFsb2cgZmVhdHVyZS5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzXG5cdCAqIEBjbGFzc1xuXHQgKiBAcmVxdWlyZXMganF1ZXJ5LnVpLmRpYWxvZ1xuXHQgKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcblx0ICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCAtIFRoZSBtYXhpbXVtIGFsbG93YWJsZSBoZWlnaHQgZm9yIHRoZSBjb250ZW50IGFyZWEuXG5cdCAqL1xuXHRNb3JlYml0cy5zaW1wbGVXaW5kb3cgPSBmdW5jdGlvbiAod2lkdGgsIGhlaWdodCkge1xuXHRcdGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHR0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuXHRcdGNvbnRlbnQuY2xhc3NOYW1lID0gJ21vcmViaXRzLWRpYWxvZy1jb250ZW50Jztcblx0XHRjb250ZW50LmlkID0gYG1vcmViaXRzLWRpYWxvZy1jb250ZW50LSR7TWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMWUxNSl9YDtcblx0XHR0aGlzLmhlaWdodCA9IGhlaWdodDtcblx0XHQkKHRoaXMuY29udGVudCkuZGlhbG9nKHtcblx0XHRcdGF1dG9PcGVuOiBmYWxzZSxcblx0XHRcdGJ1dHRvbnM6IHtcblx0XHRcdFx0J1BsYWNlaG9sZGVyIGJ1dHRvbic6ICgpID0+IHt9LFxuXHRcdFx0fSxcblx0XHRcdGRpYWxvZ0NsYXNzOiAnbW9yZWJpdHMtZGlhbG9nJyxcblx0XHRcdHdpZHRoOiBNYXRoLm1pbihOdW1iZXIucGFyc2VJbnQod2luZG93LmlubmVyV2lkdGgsIDEwKSwgTnVtYmVyLnBhcnNlSW50KHdpZHRoIHx8IDgwMCwgMTApKSxcblx0XHRcdC8vIGdpdmUgalF1ZXJ5IHRoZSBnaXZlbiBoZWlnaHQgdmFsdWUgKHdoaWNoIHJlcHJlc2VudHMgdGhlIGFudGljaXBhdGVkIGhlaWdodCBvZiB0aGUgZGlhbG9nKSBoZXJlLCBzb1xuXHRcdFx0Ly8gaXQgY2FuIHBvc2l0aW9uIHRoZSBkaWFsb2cgYXBwcm9wcmlhdGVseVxuXHRcdFx0Ly8gdGhlIDIwIHBpeGVscyByZXByZXNlbnRzIGFkanVzdG1lbnQgZm9yIHRoZSBleHRyYSBoZWlnaHQgb2YgdGhlIGpRdWVyeSBkaWFsb2cgXCJjaHJvbWVcIiwgY29tcGFyZWRcblx0XHRcdC8vIHRvIHRoYXQgb2YgdGhlIG9sZCBTaW1wbGVXaW5kb3dcblx0XHRcdGhlaWdodDogaGVpZ2h0ICsgMjAsXG5cdFx0XHRjbG9zZTogKGV2ZW50KSA9PiB7XG5cdFx0XHRcdC8vIGRpYWxvZ3MgYW5kIHRoZWlyIGNvbnRlbnQgY2FuIGJlIGRlc3Ryb3llZCBvbmNlIGNsb3NlZFxuXHRcdFx0XHQkKGV2ZW50LnRhcmdldCkuZGlhbG9nKCdkZXN0cm95JykucmVtb3ZlKCk7XG5cdFx0XHR9LFxuXHRcdFx0cmVzaXplU3RhcnQoKSB7XG5cdFx0XHRcdFt0aGlzLnNjcm9sbGJveF0gPSAkKHRoaXMpLmZpbmQoJy5tb3JlYml0cy1zY3JvbGxib3gnKTtcblx0XHRcdFx0aWYgKHRoaXMuc2Nyb2xsYm94KSB7XG5cdFx0XHRcdFx0dGhpcy5zY3JvbGxib3guc3R5bGUubWF4SGVpZ2h0ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0cmVzaXplU3RvcCgpIHtcblx0XHRcdFx0dGhpcy5zY3JvbGxib3ggPSBudWxsO1xuXHRcdFx0fSxcblx0XHRcdHJlc2l6ZSgpIHtcblx0XHRcdFx0dGhpcy5zdHlsZS5tYXhIZWlnaHQgPSAnJztcblx0XHRcdFx0aWYgKHRoaXMuc2Nyb2xsYm94KSB7XG5cdFx0XHRcdFx0dGhpcy5zY3JvbGxib3guc3R5bGUud2lkdGggPSAnJztcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHR9KTtcblx0XHRjb25zdCAkd2lkZ2V0ID0gJCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnd2lkZ2V0Jyk7XG5cdFx0Ly8gZGVsZXRlIHRoZSBwbGFjZWhvbGRlciBidXR0b24gKGl0J3Mgb25seSB0aGVyZSBzbyB0aGUgYnV0dG9ucGFuZSBnZXRzIGNyZWF0ZWQpXG5cdFx0JHdpZGdldC5maW5kKCdidXR0b24nKS5lYWNoKChrZXksIHZhbHVlKSA9PiB7XG5cdFx0XHR2YWx1ZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHZhbHVlKTtcblx0XHR9KTtcblx0XHQvLyBhZGQgY29udGFpbmVyIGZvciB0aGUgYnV0dG9ucyB3ZSBhZGQsIGFuZCB0aGUgZm9vdGVyIGxpbmtzIChpZiBhbnkpXG5cdFx0Y29uc3QgYnV0dG9uc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRidXR0b25zcGFuLmNsYXNzTmFtZSA9ICdtb3JlYml0cy1kaWFsb2ctYnV0dG9ucyc7XG5cdFx0Y29uc3QgbGlua3NzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdGxpbmtzc3Bhbi5jbGFzc05hbWUgPSAnbW9yZWJpdHMtZGlhbG9nLWZvb3RlcmxpbmtzJztcblx0XHQkd2lkZ2V0LmZpbmQoJy51aS1kaWFsb2ctYnV0dG9ucGFuZScpLmFwcGVuZChidXR0b25zcGFuLCBsaW5rc3NwYW4pO1xuXHRcdC8vIHJlc2l6ZSB0aGUgc2Nyb2xsYm94IHdpdGggdGhlIGRpYWxvZywgaWYgb25lIGlzIHByZXNlbnRcblx0XHQkd2lkZ2V0LnJlc2l6YWJsZSgnb3B0aW9uJywgJ2Fsc29SZXNpemUnLCBgIyR7dGhpcy5jb250ZW50LmlkfSAubW9yZWJpdHMtc2Nyb2xsYm94LCAjJHt0aGlzLmNvbnRlbnQuaWR9YCk7XG5cdH07XG5cdE1vcmViaXRzLnNpbXBsZVdpbmRvdy5wcm90b3R5cGUgPSB7XG5cdFx0YnV0dG9uczogW10sXG5cdFx0aGVpZ2h0OiA2MDAsXG5cdFx0aGFzRm9vdGVyTGlua3M6IGZhbHNlLFxuXHRcdHNjcmlwdE5hbWU6IG51bGwsXG5cdFx0LyoqXG5cdFx0ICogRm9jdXNlcyB0aGUgZGlhbG9nLiBUaGlzIG1pZ2h0IHdvcmssIG9yIG9uIHRoZSBjb250cmFyeSwgaXQgbWlnaHQgbm90LlxuXHRcdCAqXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRmb2N1cygpIHtcblx0XHRcdCQodGhpcy5jb250ZW50KS5kaWFsb2coJ21vdmVUb1RvcCcpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBDbG9zZXMgdGhlIGRpYWxvZy4gSWYgdGhpcyBpcyBzZXQgYXMgYW4gZXZlbnQgaGFuZGxlciwgaXQgd2lsbCBzdG9wIHRoZSBldmVudFxuXHRcdCAqIGZyb20gZG9pbmcgYW55dGhpbmcgbW9yZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7ZXZlbnR9IFtldmVudF1cblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHRcdCAqL1xuXHRcdGNsb3NlKGV2ZW50KSB7XG5cdFx0XHRpZiAoZXZlbnQpIHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdH1cblx0XHRcdCQodGhpcy5jb250ZW50KS5kaWFsb2coJ2Nsb3NlJyk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFNob3dzIHRoZSBkaWFsb2cuIENhbGxpbmcgZGlzcGxheSgpIG9uIGEgZGlhbG9nIHRoYXQgaGFzIHByZXZpb3VzbHkgYmVlbiBjbG9zZWRcblx0XHQgKiBtaWdodCB3b3JrLCBidXQgaXQgaXMgbm90IGd1YXJhbnRlZWQuXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHRcdCAqL1xuXHRcdGRpc3BsYXkoKSB7XG5cdFx0XHRpZiAodGhpcy5zY3JpcHROYW1lKSB7XG5cdFx0XHRcdGNvbnN0ICR3aWRnZXQgPSAkKHRoaXMuY29udGVudCkuZGlhbG9nKCd3aWRnZXQnKTtcblx0XHRcdFx0JHdpZGdldC5maW5kKCcubW9yZWJpdHMtZGlhbG9nLXNjcmlwdG5hbWUnKS5yZW1vdmUoKTtcblx0XHRcdFx0Y29uc3Qgc2NyaXB0bmFtZXNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRcdHNjcmlwdG5hbWVzcGFuLmNsYXNzTmFtZSA9ICdtb3JlYml0cy1kaWFsb2ctc2NyaXB0bmFtZSc7XG5cdFx0XHRcdHNjcmlwdG5hbWVzcGFuLnRleHRDb250ZW50ID0gYCR7dGhpcy5zY3JpcHROYW1lfSBcXHUwMEI3IGA7IC8vIFUrMDBCNyBNSURETEUgRE9UID0gJm1pZGRvdDtcblx0XHRcdFx0JHdpZGdldC5maW5kKCcudWktZGlhbG9nLXRpdGxlJykucHJlcGVuZChzY3JpcHRuYW1lc3Bhbik7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBkaWFsb2cgPSAkKHRoaXMuY29udGVudCkuZGlhbG9nKCdvcGVuJyk7XG5cdFx0XHRpZiAod2luZG93LnNldHVwVG9vbHRpcHMgJiYgd2luZG93LnBnICYmIHdpbmRvdy5wZy5yZSAmJiB3aW5kb3cucGcucmUuZGlmZikge1xuXHRcdFx0XHQvLyB0aWUgaW4gd2l0aCBOQVZQT1Bcblx0XHRcdFx0ZGlhbG9nLnBhcmVudCgpWzBdLnJhblNldHVwVG9vbHRpcHNBbHJlYWR5ID0gZmFsc2U7XG5cdFx0XHRcdHdpbmRvdy5zZXR1cFRvb2x0aXBzKGRpYWxvZy5wYXJlbnQoKVswXSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnNldEhlaWdodCh0aGlzLmhlaWdodCk7IC8vIGluaXQgaGVpZ2h0IGFsZ29yaXRobVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBTZXRzIHRoZSBkaWFsb2cgdGl0bGUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGVcblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHRcdCAqL1xuXHRcdHNldFRpdGxlKHRpdGxlKSB7XG5cdFx0XHQkKHRoaXMuY29udGVudCkuZGlhbG9nKCdvcHRpb24nLCAndGl0bGUnLCB0aXRsZSk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFNldHMgdGhlIHNjcmlwdCBuYW1lLCBhcHBlYXJpbmcgYXMgYSBwcmVmaXggdG8gdGhlIHRpdGxlIHRvIGhlbHAgdXNlcnMgZGV0ZXJtaW5lIHdoaWNoXG5cdFx0ICogdXNlciBzY3JpcHQgaXMgcHJvZHVjaW5nIHdoaWNoIGRpYWxvZy4gRm9yIGluc3RhbmNlLCBUd2lua2xlIG1vZHVsZXMgc2V0IHRoaXMgdG8gXCJUd2lua2xlXCIuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdFx0ICovXG5cdFx0c2V0U2NyaXB0TmFtZShuYW1lKSB7XG5cdFx0XHR0aGlzLnNjcmlwdE5hbWUgPSBuYW1lO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBTZXRzIHRoZSBkaWFsb2cgd2lkdGguXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHRcdCAqL1xuXHRcdHNldFdpZHRoKHdpZHRoKSB7XG5cdFx0XHQkKHRoaXMuY29udGVudCkuZGlhbG9nKCdvcHRpb24nLCAnd2lkdGgnLCB3aWR0aCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFNldHMgdGhlIGRpYWxvZydzIG1heGltdW0gaGVpZ2h0LiBUaGUgZGlhbG9nIHdpbGwgYXV0by1zaXplIHRvIGZpdCBpdHMgY29udGVudHMsXG5cdFx0ICogYnV0IHRoZSBjb250ZW50IGFyZWEgd2lsbCBncm93IG5vIGxhcmdlciB0aGFuIHRoZSBoZWlnaHQgZ2l2ZW4gaGVyZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHRcdCAqL1xuXHRcdHNldEhlaWdodChoZWlnaHQpIHtcblx0XHRcdHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXHRcdFx0Ly8gZnJvbSBkaXNwbGF5IHRpbWUgb253YXJkcywgbGV0IHRoZSBicm93c2VyIGRldGVybWluZSB0aGUgb3B0aW11bSBoZWlnaHQsXG5cdFx0XHQvLyBhbmQgaW5zdGVhZCBsaW1pdCB0aGUgaGVpZ2h0IGF0IHRoZSBnaXZlbiB2YWx1ZVxuXHRcdFx0Ly8gbm90ZSB0aGF0IHRoZSBnaXZlbiBoZWlnaHQgd2lsbCBleGNsdWRlIHRoZSBhcHByb3guIDIwcHggdGhhdCB0aGUgalF1ZXJ5IFVJXG5cdFx0XHQvLyBjaHJvbWUgaGFzIGluIGhlaWdodCBpbiBhZGRpdGlvbiB0byB0aGUgaGVpZ2h0IG9mIGFuIGVxdWl2YWxlbnQgXCJjbGFzc2ljXCJcblx0XHRcdC8vIE1vcmViaXRzLnNpbXBsZVdpbmRvd1xuXHRcdFx0aWYgKFxuXHRcdFx0XHROdW1iZXIucGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZSgkKHRoaXMuY29udGVudCkuZGlhbG9nKCd3aWRnZXQnKVswXSwgbnVsbCkuaGVpZ2h0LCAxMCkgPlxuXHRcdFx0XHR3aW5kb3cuaW5uZXJIZWlnaHRcblx0XHRcdCkge1xuXHRcdFx0XHQkKHRoaXMuY29udGVudClcblx0XHRcdFx0XHQuZGlhbG9nKCdvcHRpb24nLCAnaGVpZ2h0Jywgd2luZG93LmlubmVySGVpZ2h0IC0gMilcblx0XHRcdFx0XHQuZGlhbG9nKCdvcHRpb24nLCAncG9zaXRpb24nLCAndG9wJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKHRoaXMuY29udGVudCkuZGlhbG9nKCdvcHRpb24nLCAnaGVpZ2h0JywgJ2F1dG8nKTtcblx0XHRcdH1cblx0XHRcdCQodGhpcy5jb250ZW50KS5kaWFsb2coJ3dpZGdldCcpLmZpbmQoJy5tb3JlYml0cy1kaWFsb2ctY29udGVudCcpWzBdLnN0eWxlLm1heEhlaWdodCA9IGAke051bWJlci5wYXJzZUludChcblx0XHRcdFx0dGhpcy5oZWlnaHQgLSAzMCxcblx0XHRcdFx0MTBcblx0XHRcdCl9cHhgO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBTZXRzIHRoZSBjb250ZW50IG9mIHRoZSBkaWFsb2cgdG8gdGhlIGdpdmVuIGVsZW1lbnQgbm9kZSwgdXN1YWxseSBmcm9tIHJlbmRlcmluZ1xuXHRcdCAqIGEge0BsaW5rIE1vcmViaXRzLnF1aWNrRm9ybX0uXG5cdFx0ICogUmUtZW51bWVyYXRlcyB0aGUgZm9vdGVyIGJ1dHRvbnMsIGJ1dCBsZWF2ZXMgdGhlIGZvb3RlciBsaW5rcyBhcyB0aGV5IGFyZS5cblx0XHQgKiBCZSBzdXJlIHRvIGNhbGwgdGhpcyBhdCBsZWFzdCBvbmNlIGJlZm9yZSB0aGUgZGlhbG9nIGlzIGRpc3BsYXllZC4uLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGVudFxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdFx0ICovXG5cdFx0c2V0Q29udGVudChjb250ZW50KSB7XG5cdFx0XHR0aGlzLnB1cmdlQ29udGVudCgpO1xuXHRcdFx0dGhpcy5hZGRDb250ZW50KGNvbnRlbnQpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBBZGRzIHRoZSBnaXZlbiBlbGVtZW50IG5vZGUgdG8gdGhlIGRpYWxvZyBjb250ZW50LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGVudFxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdFx0ICovXG5cdFx0YWRkQ29udGVudChjb250ZW50KSB7XG5cdFx0XHR0aGlzLmNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cdFx0XHQvLyBsb29rIGZvciBzdWJtaXQgYnV0dG9ucyBpbiB0aGUgY29udGVudCwgaGlkZSB0aGVtLCBhbmQgYWRkIGEgcHJveHkgYnV0dG9uIHRvIHRoZSBidXR0b24gcGFuZVxuXHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHQkKHRoaXMuY29udGVudClcblx0XHRcdFx0LmZpbmQoJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0sIGJ1dHRvblt0eXBlPVwic3VibWl0XCJdJylcblx0XHRcdFx0LmVhY2goKGtleSwgdmFsdWUpID0+IHtcblx0XHRcdFx0XHR2YWx1ZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHRcdGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdFx0XHRcdGlmICh2YWx1ZS5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcblx0XHRcdFx0XHRcdGJ1dHRvbi50ZXh0Q29udGVudCA9IHZhbHVlLmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHZhbHVlLnRleHRDb250ZW50KSB7XG5cdFx0XHRcdFx0XHRidXR0b24udGV4dENvbnRlbnQgPSB2YWx1ZS50ZXh0Q29udGVudDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0YnV0dG9uLnRleHRDb250ZW50ID0gJ+aPkOS6pCc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJ1dHRvbi5jbGFzc05hbWUgPSB2YWx1ZS5jbGFzc05hbWUgfHwgJ3N1Ym1pdEJ1dHRvblByb3h5Jztcblx0XHRcdFx0XHQvLyBoZXJlIGlzIGFuIGluc3RhbmNlIG9mIGNoZWFwIGNvZGluZywgcHJvYmFibHkgYSBtZW1vcnktdXNhZ2UgaGl0IGluIHVzaW5nIGEgY2xvc3VyZSBoZXJlXG5cdFx0XHRcdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdFx0XHQnY2xpY2snLFxuXHRcdFx0XHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHR2YWx1ZS5jbGljaygpO1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGZhbHNlXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRzZWxmLmJ1dHRvbnNbc2VsZi5idXR0b25zLmxlbmd0aF0gPSBidXR0b247XG5cdFx0XHRcdH0pO1xuXHRcdFx0Ly8gcmVtb3ZlIGFsbCBidXR0b25zIGZyb20gdGhlIGJ1dHRvbiBwYW5lIGFuZCByZS1hZGQgdGhlbVxuXHRcdFx0aWYgKHRoaXMuYnV0dG9ucy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdCQodGhpcy5jb250ZW50KVxuXHRcdFx0XHRcdC5kaWFsb2coJ3dpZGdldCcpXG5cdFx0XHRcdFx0LmZpbmQoJy5tb3JlYml0cy1kaWFsb2ctYnV0dG9ucycpXG5cdFx0XHRcdFx0LmVtcHR5KClcblx0XHRcdFx0XHQuYXBwZW5kKHRoaXMuYnV0dG9ucylbMF1cblx0XHRcdFx0XHQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWVtcHR5Jyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKHRoaXMuY29udGVudClcblx0XHRcdFx0XHQuZGlhbG9nKCd3aWRnZXQnKVxuXHRcdFx0XHRcdC5maW5kKCcubW9yZWJpdHMtZGlhbG9nLWJ1dHRvbnMnKVswXVxuXHRcdFx0XHRcdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZW1wdHknLCAnZGF0YS1lbXB0eScpOyAvLyB1c2VkIGJ5IENTU1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFJlbW92ZXMgYWxsIGNvbnRlbnRzIGZyb20gdGhlIGRpYWxvZywgYmFycmluZyBhbnkgZm9vdGVyIGxpbmtzLlxuXHRcdCAqXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRwdXJnZUNvbnRlbnQoKSB7XG5cdFx0XHR0aGlzLmJ1dHRvbnMgPSBbXTtcblx0XHRcdC8vIGRlbGV0ZSBhbGwgYnV0dG9ucyBpbiB0aGUgYnV0dG9ucGFuZVxuXHRcdFx0JCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnd2lkZ2V0JykuZmluZCgnLm1vcmViaXRzLWRpYWxvZy1idXR0b25zJykuZW1wdHkoKTtcblx0XHRcdHdoaWxlICh0aGlzLmNvbnRlbnQuaGFzQ2hpbGROb2RlcygpKSB7XG5cdFx0XHRcdHRoaXMuY29udGVudC5yZW1vdmVDaGlsZCh0aGlzLmNvbnRlbnQuZmlyc3RDaGlsZCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEFkZHMgYSBsaW5rIGluIHRoZSBib3R0b20tcmlnaHQgY29ybmVyIG9mIHRoZSBkaWFsb2cuXG5cdFx0ICogVGhpcyBjYW4gYmUgdXNlZCB0byBwcm92aWRlIGhlbHAgb3IgcG9saWN5IGxpbmtzLlxuXHRcdCAqIEZvciBleGFtcGxlLCBUd2lua2xlJ3MgQ1NEIG1vZHVsZSBhZGRzIGEgbGluayB0byB0aGUgQ1NEIHBvbGljeSBwYWdlLFxuXHRcdCAqIGFzIHdlbGwgYXMgYSBsaW5rIHRvIFR3aW5rbGUncyBkb2N1bWVudGF0aW9uLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBEaXNwbGF5IHRleHQuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHdpa2lQYWdlIC0gTGluayB0YXJnZXQuXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbcHJlcD1mYWxzZV0gLSBTZXQgdHJ1ZSB0byBwcmVwZW5kIHJhdGhlciB0aGFuIGFwcGVuZC5cblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHRcdCAqL1xuXHRcdGFkZEZvb3RlckxpbmsodGV4dCwgd2lraVBhZ2UsIHByZXApIHtcblx0XHRcdGNvbnN0ICRmb290ZXJsaW5rcyA9ICQodGhpcy5jb250ZW50KS5kaWFsb2coJ3dpZGdldCcpLmZpbmQoJy5tb3JlYml0cy1kaWFsb2ctZm9vdGVybGlua3MnKTtcblx0XHRcdGlmICh0aGlzLmhhc0Zvb3RlckxpbmtzKSB7XG5cdFx0XHRcdGNvbnN0IGJ1bGxldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdFx0YnVsbGV0LnRleHRDb250ZW50ID0gJyBcXHUyMDIyICc7IC8vIFUrMjAyMiBCVUxMRVRcblx0XHRcdFx0aWYgKHByZXApIHtcblx0XHRcdFx0XHQkZm9vdGVybGlua3MucHJlcGVuZChidWxsZXQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRmb290ZXJsaW5rcy5hcHBlbmQoYnVsbGV0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Y29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRcdGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgbXcudXRpbC5nZXRVcmwod2lraVBhZ2UpKTtcblx0XHRcdGxpbmsuc2V0QXR0cmlidXRlKCd0aXRsZScsIHdpa2lQYWdlKTtcblx0XHRcdGxpbmsuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7XG5cdFx0XHRsaW5rLnNldEF0dHJpYnV0ZSgncmVsJywgJ25vb3BlbmVyIG5vcmVmZXJyZXInKTtcblx0XHRcdGxpbmsudGV4dENvbnRlbnQgPSB0ZXh0O1xuXHRcdFx0aWYgKHByZXApIHtcblx0XHRcdFx0JGZvb3RlcmxpbmtzLnByZXBlbmQobGluayk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkZm9vdGVybGlua3MuYXBwZW5kKGxpbmspO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5oYXNGb290ZXJMaW5rcyA9IHRydWU7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFNldHMgd2hldGhlciB0aGUgd2luZG93IHNob3VsZCBiZSBtb2RhbCBvciBub3QuIE1vZGFsIGRpYWxvZ3MgY3JlYXRlXG5cdFx0ICogYW4gb3ZlcmxheSBiZWxvdyB0aGUgZGlhbG9nIGJ1dCBhYm92ZSBvdGhlciBwYWdlIGVsZW1lbnRzLiBUaGlzXG5cdFx0ICogbXVzdCBiZSB1c2VkIChpZiBuZWNlc3NhcnkpIGJlZm9yZSBjYWxsaW5nIGRpc3BsYXkoKS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW21vZGFsPWZhbHNlXSAtIElmIHNldCB0byB0cnVlLCBvdGhlciBpdGVtcyBvbiB0aGVcblx0XHQgKiBwYWdlIHdpbGwgYmUgZGlzYWJsZWQsIGkuZS4sIGNhbm5vdCBiZSBpbnRlcmFjdGVkIHdpdGguXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRzZXRNb2RhbGl0eShtb2RhbCkge1xuXHRcdFx0JCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnb3B0aW9uJywgJ21vZGFsJywgbW9kYWwpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0fTtcblx0LyoqXG5cdCAqIEVuYWJsZXMgb3IgZGlzYWJsZXMgYWxsIGZvb3RlciBidXR0b25zIG9uIGFsbCB7QGxpbmsgTW9yZWJpdHMuc2ltcGxlV2luZG93fXMgaW4gdGhlIGN1cnJlbnQgcGFnZS5cblx0ICogVGhpcyBzaG91bGQgYmUgY2FsbGVkIHdpdGggYGZhbHNlYCB3aGVuIHRoZSBidXR0b24ocykgYmVjb21lIGlycmVsZXZhbnQgKGUuZy4ganVzdCBiZWZvcmVcblx0ICoge0BsaW5rIE1vcmViaXRzLnN0YXR1cy5pbml0fSBpcyBjYWxsZWQpLlxuXHQgKiBUaGlzIGlzIG5vdCBhbiBpbnN0YW5jZSBtZXRob2Qgc28gdGhhdCBjb25zdW1lcnMgZG9uJ3QgaGF2ZSB0byBrZWVwIGEgcmVmZXJlbmNlIHRvIHRoZVxuXHQgKiBvcmlnaW5hbCBgTW9yZWJpdHMuc2ltcGxlV2luZG93YCBvYmplY3Qgc2l0dGluZyBhcm91bmQgc29tZXdoZXJlLiBBbnl3YXksIG1vc3Qgb2YgdGhlIHRpbWVcblx0ICogdGhlcmUgd2lsbCBvbmx5IGJlIG9uZSBgTW9yZWJpdHMuc2ltcGxlV2luZG93YCBvcGVuLCBzbyB0aGlzIHNob3VsZG4ndCBtYXR0ZXIuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5zaW1wbGVXaW5kb3dcblx0ICogQHBhcmFtIHtib29sZWFufSBlbmFibGVkXG5cdCAqL1xuXHRNb3JlYml0cy5zaW1wbGVXaW5kb3cuc2V0QnV0dG9uc0VuYWJsZWQgPSAoZW5hYmxlZCkgPT4ge1xuXHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdCRib2R5LmZpbmQoJy5tb3JlYml0cy1kaWFsb2ctYnV0dG9ucyBidXR0b24nKS5wcm9wKCdkaXNhYmxlZCcsICFlbmFibGVkKTtcblx0fTtcbn0pKGpRdWVyeSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1Q0EsSUFBQUEsb0JBQTRCQyxRQUFBLGlCQUFBO0FBckM1QjtDQXVDQyxTQUFTQyxTQUFTQyxHQUFHO0FBR3JCLFFBQU1DLFdBQVcsQ0FBQztBQUNsQkMsU0FBT0QsV0FBV0E7QUFL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dEQsVUFBTW5SLFFBQVF6c0IsRUFBRSxNQUFNO0FBQ3RCeXNCLFVBQU1wZixLQUFLLGlDQUFpQyxFQUFFMFQsS0FBSyxZQUFZLENBQUM2YyxPQUFPO0VBQ3hFO0FBQ0QsR0FBR0MsTUFBTTsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJtb3JlYml0cyIsICIkIiwgIk1vcmViaXRzIiwgIndpbmRvdyIsICJsMTBuIiwgInJlZGlyZWN0VGFnQWxpYXNlcyIsICJzaWduYXR1cmVUaW1lc3RhbXBGb3JtYXQiLCAic3RyIiwgInJneFVUQyIsICJyZ3hDU1QiLCAibWF0Y2giLCAiZXhlYyIsICJtYXRjaENTVCIsICJtb250aCIsICJkYXRlIiwgImxvY2FsZURhdGEiLCAibW9udGhzIiwgImluZGV4T2YiLCAidXNlcklzSW5Hcm91cCIsICJncm91cCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImluY2x1ZGVzIiwgInVzZXJJc1N5c29wIiwgInNhbml0aXplSVB2NiIsICJhZGRyZXNzIiwgImNvbnNvbGUiLCAid2FybiIsICJpcCIsICJpc1BhZ2VSZWRpcmVjdCIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgInBhZ2VOYW1lTm9ybSIsICJyZXBsYWNlIiwgInBhZ2VOYW1lUmVnZXgiLCAicGFnZU5hbWUiLCAiZmlyc3RDaGFyIiwgInJlbWFpbmRlciIsICJzdHJpbmciLCAiZXNjYXBlUmVnRXhwIiwgInNsaWNlIiwgIlRpdGxlIiwgInBocENoYXJUb1VwcGVyIiwgInRvTG93ZXJDYXNlIiwgImNvbmNhdCIsICJjcmVhdGVIdG1sIiwgImlucHV0IiwgImZyYWdtZW50IiwgImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCAiZ2VuZXJhdGVBcnJheSIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiZWxlbWVudCIsICJ2YWx1ZSIsICJOb2RlIiwgImFwcGVuZENoaWxkIiwgIl9pdGVyYXRvcjIiLCAicGFyc2VIVE1MIiwgInJlbmRlcldpa2lsaW5rcyIsICJfc3RlcDIiLCAibm9kZSIsICJlcnIiLCAiZSIsICJmIiwgInRleHQiLCAidWIiLCAidW5iaW5kZXIiLCAidW5iaW5kIiwgImNvbnRlbnQiLCAiXyIsICJ0YXJnZXQiLCAidGV4dF8iLCAidXRpbCIsICJnZXRVcmwiLCAicmViaW5kIiwgIm5hbWVzcGFjZVJlZ2V4IiwgIm5hbWVzcGFjZXMiLCAiYWxpYXNlcyIsICJyZWdleCIsICJfaSIsICJfT2JqZWN0JGVudHJpZXMiLCAiT2JqZWN0IiwgImVudHJpZXMiLCAibGVuZ3RoIiwgIm5hbWUiLCAibnVtYmVyIiwgIm1hcCIsICJjaGFyIiwgImpvaW4iLCAicXVpY2tGb3JtIiwgImV2ZW50IiwgImV2ZW50VHlwZSIsICJyb290IiwgInR5cGUiLCAicHJvdG90eXBlIiwgInJlbmRlciIsICJyZXQiLCAibmFtZXMiLCAiYXBwZW5kIiwgImRhdGEiLCAiY2hpbGRzIiwgImlkIiwgImNoaWxkIiwgImludGVybmFsU3ViZ3JvdXBJZCIsICJjdXJyZW50Tm9kZSIsICJjb21wdXRlIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgImluSWQiLCAiY2hpbGRDb250YWluZXIiLCAibGFiZWwiLCAiYWRtaW5vbmx5IiwgImkiLCAiY3VycmVudCIsICJzdWJub2RlIiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgInNldEF0dHJpYnV0ZSIsICJhZGRFdmVudExpc3RlbmVyIiwgInNlbGVjdCIsICJtdWx0aXBsZSIsICJzaXplIiwgImRpc2FibGVkIiwgImxpc3QiLCAidmFsdWVzIiwgInNlbGVjdGVkIiwgImhpZGRlbiIsICJjcmVhdGVUZXh0Tm9kZSIsICJjdXJJZCIsICJjdXJEaXYiLCAidG9vbHRpcCIsICJnZW5lcmF0ZVRvb2x0aXAiLCAiY2hlY2tlZCIsICJzdHlsZSIsICJzdWJncm91cCIsICJ0bXBncm91cCIsICJzdWJncm91cFJhdyIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJlbCIsICJuZXdFbCIsICJzaG93biIsICJwYXJlbnROb2RlIiwgImZvcm0iLCAicmVtb3ZlQ2hpbGQiLCAic2hpZnRDbGlja1N1cHBvcnQiLCAiY2hlY2tib3hTaGlmdENsaWNrU3VwcG9ydCIsICJnZXRFbGVtZW50cyIsICJwbGFjZWhvbGRlciIsICJfaTIiLCAiX2FyciIsICJhdHQiLCAiX2kzIiwgIl9hcnIyIiwgIl9pNCIsICJfYXJyMyIsICJtaW4iLCAibWF4IiwgIk51bWJlciIsICJQT1NJVElWRV9JTkZJTklUWSIsICJsaXN0Tm9kZSIsICJtb3JlIiwgIm5ld05vZGUiLCAic3VibGlzdCIsICJhcmVhIiwgImNvdW50ZXIiLCAic3RvcFByb3BhZ2F0aW9uIiwgIm1vcmVCdXR0b24iLCAic3VibGFiZWwiLCAicmVtb3ZlIiwgIm1heGxlbmd0aCIsICJlbGVtIiwgIm1vcmVidXR0b24iLCAibGlzdG5vZGUiLCAibm9kZV8iLCAiaW5wdXRub2RlIiwgInJlbW92ZUF0dHJpYnV0ZSIsICJyZW1vdmVCdXR0b24iLCAicmVzdWx0IiwgImxhYmVsRWxlbWVudCIsICJjb2xzIiwgInJvd3MiLCAicmVxdWlyZWQiLCAicmVhZG9ubHkiLCAiRXJyb3IiLCAidG9TdHJpbmciLCAiZXh0cmEiLCAiJGRhdGEiLCAidG9vbHRpcEJ1dHRvbiIsICJ0aXRsZSIsICJwb3NpdGlvbiIsICJteSIsICJhdCIsICJjb2xsaXNpb24iLCAidG9vbHRpcENsYXNzIiwgImdldElucHV0RGF0YSIsICJfaXRlcmF0b3I1IiwgImVsZW1lbnRzIiwgIl9zdGVwNSIsICJmaWVsZCIsICJmaWVsZE5hbWVOb3JtIiwgImRhdGFzZXQiLCAic2luZ2xlIiwgInZhbCIsICJ0cmltIiwgImZpZWxkTmFtZSIsICIkZm9ybSIsICJlc2NhcGVTZWxlY3RvciIsICIkZWxlbWVudHMiLCAiZmluZCIsICJ0b0FycmF5IiwgImdldENoZWNrYm94T3JSYWRpbyIsICJlbGVtZW50QXJyYXkiLCAiZm91bmQiLCAiZmlsdGVyIiwgImdldEVsZW1lbnRDb250YWluZXIiLCAiSFRNTEZpZWxkU2V0RWxlbWVudCIsICJIVE1MRGl2RWxlbWVudCIsICJIVE1MSGVhZGluZ0VsZW1lbnQiLCAiZ2V0RWxlbWVudExhYmVsT2JqZWN0IiwgIkhUTUxUZXh0QXJlYUVsZW1lbnQiLCAiZ2V0RWxlbWVudExhYmVsIiwgImZpcnN0Q2hpbGQiLCAidGV4dENvbnRlbnQiLCAic2V0RWxlbWVudExhYmVsIiwgImxhYmVsVGV4dCIsICJvdmVycmlkZUVsZW1lbnRMYWJlbCIsICJ0ZW1wb3JhcnlMYWJlbFRleHQiLCAiaGFzQXR0cmlidXRlIiwgInJlc2V0RWxlbWVudExhYmVsIiwgImdldEF0dHJpYnV0ZSIsICJzZXRFbGVtZW50VmlzaWJpbGl0eSIsICJ2aXNpYmlsaXR5IiwgInRvZ2dsZSIsICJzZXRFbGVtZW50VG9vbHRpcFZpc2liaWxpdHkiLCAiSFRNTEZvcm1FbGVtZW50IiwgImdldENoZWNrZWQiLCAicmV0dXJuQXJyYXkiLCAiSFRNTFNlbGVjdEVsZW1lbnQiLCAib3B0aW9ucyIsICJIVE1MSW5wdXRFbGVtZW50IiwgImdldFVuY2hlY2tlZCIsICJpc0lQdjZBZGRyZXNzIiwgInRvVXBwZXJDYXNlIiwgImFiYnJldlBvcyIsICJDSURSU3RhcnQiLCAiYWRkcmVzc0VuZCIsICJyZXBlYXQiLCAicGFkIiwgInJlcGxhY2VtZW50IiwgInNwbGl0IiwgImlzUmFuZ2UiLCAiaXNJUEFkZHJlc3MiLCAidmFsaWRDSURSIiwgInN1Ym5ldCIsICJwYXJzZUludCIsICJnZXQ2NCIsICJpcHY2IiwgInN1Ym5ldE1hdGNoIiwgImlwUmVnZXgiLCAidG9VcHBlckNhc2VGaXJzdENoYXIiLCAidG9Mb3dlckNhc2VGaXJzdENoYXIiLCAic3BsaXRXZWlnaHRlZEJ5S2V5cyIsICJzdGFydCIsICJlbmQiLCAic2tpcGxpc3QiLCAibGV2ZWwiLCAiaW5pdGlhbCIsICJBcnJheSIsICJpc0FycmF5IiwgIlR5cGVFcnJvciIsICJfaXRlcmF0b3I2IiwgIl9zdGVwNiIsICJmb3JtYXRSZWFzb25UZXh0IiwgImFkZFNpZyIsICJyZWFzb24iLCAic2lnIiwgInNpZ0luZGV4IiwgImxhc3RJbmRleE9mIiwgImZvcm1hdFJlYXNvbkZvckxvZyIsICJzYWZlUmVwbGFjZSIsICJwYXR0ZXJuIiwgImlzSW5maW5pdHkiLCAiZXhwaXJ5IiwgImZvcm1hdFRpbWUiLCAidGltZSIsICJtIiwgIndnVUxTIiwgImFwcGVuZFB1bmN0dWF0aW9uIiwgInB1bmN0dWF0aW9uIiwgInNlYXJjaCIsICJhcnJheSIsICJ1bmlxIiwgImFyciIsICJpdGVtIiwgImlkeCIsICJkdXBzIiwgImNodW5rIiwgIm51bUNodW5rcyIsICJNYXRoIiwgImNlaWwiLCAiZnJvbSIsICJzZWxlY3QyIiwgIm1hdGNoZXJzIiwgIm9wdGdyb3VwRnVsbCIsICJwYXJhbXMiLCAib3JpZ2luYWxNYXRjaGVyIiwgImZuIiwgImRlZmF1bHRzIiwgIm1hdGNoZXIiLCAidGVybSIsICJjaGlsZHJlbiIsICJ3b3JkQmVnaW5uaW5nIiwgIlJlZ0V4cCIsICJ0ZXN0IiwgImhpZ2hsaWdodFNlYXJjaE1hdGNoZXMiLCAic2VhcmNoVGVybSIsICJzZWxlY3QyU2VhcmNoUXVlcnkiLCAibG9hZGluZyIsICJjc3MiLCAicXVlcnlJbnRlcmNlcHRvciIsICJhdXRvU3RhcnQiLCAiZXYiLCAid2hpY2giLCAiY2xvc2VzdCIsICJwcmV2IiwgImRyb3Bkb3duIiwgIiRzZWFyY2giLCAic2VsZWN0aW9uIiwgImZvY3VzIiwgImhpc3RvcnkiLCAicHJlZml4IiwgInJhbmRvbSIsICJwb3N0Zml4IiwgInJlIiwgImdldENhbGxiYWNrIiwgImhhc093biIsICJzZWxmIiwgImFyZ3MiLCAiX3RoaXMkX2QiLCAicGFyYW0iLCAiZGlnaXRNYXRjaCIsICJfZCIsICJEYXRlIiwgIlJlZmxlY3QiLCAiYXBwbHkiLCAiVVRDIiwgImRhdGVQYXJ0cyIsICJGdW5jdGlvbiIsICJiaW5kIiwgImlzVmFsaWQiLCAibG9nIiwgIm1vbnRoc1Nob3J0IiwgImRheXMiLCAiZGF5c1Nob3J0IiwgInJlbGF0aXZlVGltZXMiLCAidGhpc0RheSIsICJwcmV2RGF5IiwgIm5leHREYXkiLCAidGhpc1dlZWsiLCAicGFzdFdlZWsiLCAib3RoZXIiLCAidW5pdE1hcCIsICJzZWNvbmRzIiwgIm1pbnV0ZXMiLCAiaG91cnMiLCAid2Vla3MiLCAieWVhcnMiLCAiaXNOYU4iLCAiZ2V0VGltZSIsICJpc0JlZm9yZSIsICJpc0FmdGVyIiwgImdldFVUQ01vbnRoTmFtZSIsICJnZXRVVENNb250aCIsICJnZXRVVENNb250aE5hbWVBYmJyZXYiLCAiZ2V0TW9udGhOYW1lIiwgImdldE1vbnRoIiwgImdldE1vbnRoTmFtZUFiYnJldiIsICJnZXRVVENEYXlOYW1lIiwgImdldFVUQ0RheSIsICJnZXRVVENEYXlOYW1lQWJicmV2IiwgImdldERheU5hbWUiLCAiZ2V0RGF5IiwgImdldERheU5hbWVBYmJyZXYiLCAiYWRkIiwgInVuaXQiLCAibnVtIiwgInVuaXROb3JtIiwgImtleXMiLCAic3VidHJhY3QiLCAiZm9ybWF0IiwgImZvcm1hdHN0ciIsICJ6b25lIiwgInVkYXRlIiwgImdldFRpbWV6b25lT2Zmc2V0IiwgInRvSVNPU3RyaW5nIiwgImxlbiIsICJoMjQiLCAiZ2V0SG91cnMiLCAiZ2V0TWludXRlcyIsICJnZXRTZWNvbmRzIiwgIm1zIiwgImdldE1pbGxpc2Vjb25kcyIsICJEIiwgImdldERhdGUiLCAiTSIsICJZIiwgImdldEZ1bGxZZWFyIiwgImgxMiIsICJhbU9yUG0iLCAicmVwbGFjZW1lbnRNYXAiLCAiSEgiLCAiSCIsICJoaCIsICJoIiwgIkEiLCAibW0iLCAic3MiLCAiU1NTIiwgImRkZGQiLCAiZGRkIiwgImQiLCAiREQiLCAiTU1NTSIsICJNTU0iLCAiTU0iLCAiWVlZWSIsICJZWSIsICJTdHJpbmciLCAicmF3IiwgIl90ZW1wbGF0ZU9iamVjdCIsICJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsIiwgIl90ZW1wbGF0ZU9iamVjdDIiLCAiY2FsZW5kYXIiLCAiZGF0ZURpZmYiLCAic2V0SG91cnMiLCAibW9udGhIZWFkZXJSZWdleCIsICJnZXRVVENGdWxsWWVhciIsICJtb250aEhlYWRlciIsICJoZWFkZXIiLCAiX2l0ZXJhdG9yNyIsICJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwgIl9zdGVwNyIsICJmdW5jIiwgIndpa2kiLCAibnVtYmVyT2ZBY3Rpb25zTGVmdCIsICJuYnJPZkNoZWNrcG9pbnRzTGVmdCIsICJhY3Rpb25Db21wbGV0ZWQiLCAibm90aWNlIiwgInN0YXR1cyIsICJyZWRpcmVjdCIsICJmb2xsb3dSZWRpcmVjdCIsICJzZXRUaW1lb3V0IiwgImxvY2F0aW9uIiwgInRpbWVPdXQiLCAid3BBY3Rpb25Db21wbGV0ZWRUaW1lT3V0IiwgImFkZENoZWNrcG9pbnQiLCAicmVtb3ZlQ2hlY2twb2ludCIsICJhcGkiLCAiY3VycmVudEFjdGlvbiIsICJxdWVyeSIsICJvblN1Y2Nlc3MiLCAic3RhdHVzRWxlbWVudCIsICJvbkVycm9yIiwgIl90aGlzJHF1ZXJ5IiwgImFzc2VydCIsICJlcnJvcmZvcm1hdCIsICJ1c2VsYW5nIiwgImVycm9ybGFuZyIsICJlcnJvcnN1c2Vsb2NhbCIsICJzZXRTdGF0dXNFbGVtZW50IiwgInN0YXRlbGVtIiwgImZvcm1hdHZlcnNpb24iLCAiZXJyb3IiLCAiYWN0aW9uIiwgInRhZ3MiLCAibW9yZWJpdHNXaWtpQ2hhbmdlVGFnIiwgInBhcmVudCIsICJyZXNwb25zZSIsICJyZXNwb25zZVhNTCIsICJzdGF0dXNUZXh0IiwgImVycm9yQ29kZSIsICJlcnJvclRleHQiLCAiYmFkdG9rZW5SZXRyeSIsICJzZXRQYXJlbnQiLCAicG9zdCIsICJjYWxsZXJBamF4UGFyYW1ldGVycyIsICJxdWVyeVN0cmluZ0FyciIsICJfaTUiLCAiX09iamVjdCRlbnRyaWVzMiIsICJlbmNvZGVVUklDb21wb25lbnQiLCAicXVlcnlTdHJpbmciLCAiYWpheHBhcmFtcyIsICJjb250ZXh0IiwgInVybCIsICJ3aWtpU2NyaXB0IiwgImRhdGFUeXBlIiwgImhlYWRlcnMiLCAibW9yZWJpdHNXaWtpQXBpVXNlckFnZW50IiwgImFqYXgiLCAidGhlbiIsICJvbkFQSXN1Y2Nlc3MiLCAiZXJyb3JzIiwgImNvZGUiLCAiaHRtbCIsICJlcSIsICJhdHRyIiwgInJldHVybkVycm9yIiwgImNhbGwiLCAiaW5mbyIsICJEZWZlcnJlZCIsICJyZXNvbHZlV2l0aCIsICJvbkFQSWZhaWx1cmUiLCAiZXJyb3JUaHJvd24iLCAiZ2V0VG9rZW4iLCAidG9rZW4iLCAicmVqZWN0V2l0aCIsICJnZXRTdGF0dXNFbGVtZW50IiwgImdldEVycm9yQ29kZSIsICJnZXRFcnJvclRleHQiLCAiZ2V0WE1MIiwgImdldFJlc3BvbnNlIiwgImdldENhY2hlZEpzb24iLCAicHJvcCIsICJ0aXRsZXMiLCAicnZzbG90cyIsICJydnByb3AiLCAic21heGFnZSIsICJtYXhhZ2UiLCAiYXBpb2JqIiwgInVubGluayIsICJ3aWtpdGV4dCIsICJwYWdlcyIsICJyZXZpc2lvbnMiLCAic2xvdHMiLCAibWFpbiIsICJKU09OIiwgInBhcnNlIiwgInNldEFwaVVzZXJBZ2VudCIsICJ1YSIsICJ0b2tlbkFwaSIsICJtZXRhIiwgInRva2VucyIsICJjc3JmdG9rZW4iLCAicGFnZSIsICJjdHgiLCAicGFnZUV4aXN0cyIsICJlZGl0U3VtbWFyeSIsICJjaGFuZ2VUYWdzIiwgInRlc3RBY3Rpb25zIiwgImNhbGxiYWNrUGFyYW1ldGVycyIsICJwYWdlVGV4dCIsICJlZGl0TW9kZSIsICJhcHBlbmRUZXh0IiwgInByZXBlbmRUZXh0IiwgIm5ld1NlY3Rpb25UZXh0IiwgIm5ld1NlY3Rpb25UaXRsZSIsICJjcmVhdGVPcHRpb24iLCAibWlub3JFZGl0IiwgImJvdEVkaXQiLCAicGFnZVNlY3Rpb24iLCAibWF4Q29uZmxpY3RSZXRyaWVzIiwgIm1heFJldHJpZXMiLCAiZm9sbG93Q3Jvc3NOc1JlZGlyZWN0IiwgIndhdGNobGlzdE9wdGlvbiIsICJ3YXRjaGxpc3RFeHBpcnkiLCAiY3JlYXRvciIsICJ0aW1lc3RhbXAiLCAicmV2ZXJ0T2xkSUQiLCAibW92ZURlc3RpbmF0aW9uIiwgIm1vdmVUYWxrUGFnZSIsICJtb3ZlU3VicGFnZXMiLCAibW92ZVN1cHByZXNzUmVkaXJlY3QiLCAicHJvdGVjdEVkaXQiLCAicHJvdGVjdE1vdmUiLCAicHJvdGVjdENyZWF0ZSIsICJwcm90ZWN0Q2FzY2FkZSIsICJsb29rdXBOb25SZWRpcmVjdENyZWF0b3IiLCAicGFnZUxvYWRlZCIsICJjc3JmVG9rZW4iLCAibG9hZFRpbWUiLCAibGFzdEVkaXRUaW1lIiwgInBhZ2VJRCIsICJjb250ZW50TW9kZWwiLCAicmV2ZXJ0Q3VySUQiLCAicmV2ZXJ0VXNlciIsICJ3YXRjaGVkIiwgImZ1bGx5UHJvdGVjdGVkIiwgInN1cHByZXNzUHJvdGVjdFdhcm5pbmciLCAiY29uZmxpY3RSZXRyaWVzIiwgInJldHJpZXMiLCAib25Mb2FkU3VjY2VzcyIsICJvbkxvYWRGYWlsdXJlIiwgIm9uU2F2ZVN1Y2Nlc3MiLCAib25TYXZlRmFpbHVyZSIsICJvbkxvb2t1cENyZWF0aW9uU3VjY2VzcyIsICJvbkxvb2t1cENyZWF0aW9uRmFpbHVyZSIsICJvbk1vdmVTdWNjZXNzIiwgIm9uTW92ZUZhaWx1cmUiLCAib25EZWxldGVTdWNjZXNzIiwgIm9uRGVsZXRlRmFpbHVyZSIsICJvblVuZGVsZXRlU3VjY2VzcyIsICJvblVuZGVsZXRlRmFpbHVyZSIsICJvblByb3RlY3RTdWNjZXNzIiwgIm9uUHJvdGVjdEZhaWx1cmUiLCAibG9hZFF1ZXJ5IiwgImxvYWRBcGkiLCAic2F2ZUFwaSIsICJsb29rdXBDcmVhdGlvbkFwaSIsICJtb3ZlQXBpIiwgIm1vdmVQcm9jZXNzQXBpIiwgInBhdHJvbEFwaSIsICJwYXRyb2xQcm9jZXNzQXBpIiwgImRlbGV0ZUFwaSIsICJkZWxldGVQcm9jZXNzQXBpIiwgInVuZGVsZXRlQXBpIiwgInVuZGVsZXRlUHJvY2Vzc0FwaSIsICJwcm90ZWN0QXBpIiwgInByb3RlY3RQcm9jZXNzQXBpIiwgImVtcHR5RnVuY3Rpb24iLCAibG9hZCIsICJvbkZhaWx1cmUiLCAiaW5wcm9wIiwgImludGVzdGFjdGlvbnMiLCAiY3VydGltZXN0YW1wIiwgInJ2bGltaXQiLCAicnZzdGFydGlkIiwgInJlZGlyZWN0cyIsICJydnNlY3Rpb24iLCAiZm5Mb2FkU3VjY2VzcyIsICJzYXZlIiwgImNhblVzZU13VXNlclRva2VuIiwgImZuQ2FuVXNlTXdVc2VyVG9rZW4iLCAiY29uZmlybSIsICJzdW1tYXJ5IiwgInVzZXIiLCAid2F0Y2hsaXN0IiwgImZuQXBwbHlXYXRjaGxpc3RFeHBpcnkiLCAid2F0Y2hsaXN0ZXhwaXJ5IiwgInNlY3Rpb24iLCAibWlub3IiLCAibm90bWlub3IiLCAiYm90IiwgImFwcGVuZHRleHQiLCAicHJlcGVuZHRleHQiLCAic2VjdGlvbnRpdGxlIiwgInVuZG8iLCAidW5kb2FmdGVyIiwgImJhc2V0aW1lc3RhbXAiLCAic3RhcnR0aW1lc3RhbXAiLCAiZm5TYXZlU3VjY2VzcyIsICJmblNhdmVFcnJvciIsICJmbkF1dG9TYXZlIiwgInByZXBlbmQiLCAibmV3U2VjdGlvbiIsICJnZXRQYWdlTmFtZSIsICJnZXRQYWdlVGV4dCIsICJzZXRQYWdlVGV4dCIsICJzZXRBcHBlbmRUZXh0IiwgInNldFByZXBlbmRUZXh0IiwgInNldE5ld1NlY3Rpb25UZXh0IiwgInNldE5ld1NlY3Rpb25UaXRsZSIsICJzZXRFZGl0U3VtbWFyeSIsICJzZXRDaGFuZ2VUYWdzIiwgInNldENyZWF0ZU9wdGlvbiIsICJzZXRNaW5vckVkaXQiLCAic2V0Qm90RWRpdCIsICJzZXRQYWdlU2VjdGlvbiIsICJzZXRNYXhDb25mbGljdFJldHJpZXMiLCAic2V0TWF4UmV0cmllcyIsICJzZXRXYXRjaGxpc3QiLCAic2V0V2F0Y2hsaXN0RXhwaXJ5IiwgInNldFdhdGNobGlzdEZyb21QcmVmZXJlbmNlcyIsICJzZXRGb2xsb3dSZWRpcmVjdCIsICJzZXRMb29rdXBOb25SZWRpcmVjdENyZWF0b3IiLCAiZmxhZyIsICJzZXRNb3ZlRGVzdGluYXRpb24iLCAiZGVzdGluYXRpb24iLCAic2V0TW92ZVRhbGtQYWdlIiwgInNldE1vdmVTdWJwYWdlcyIsICJzZXRNb3ZlU3VwcHJlc3NSZWRpcmVjdCIsICJzZXRFZGl0UHJvdGVjdGlvbiIsICJzZXRNb3ZlUHJvdGVjdGlvbiIsICJzZXRDcmVhdGVQcm90ZWN0aW9uIiwgInNldENhc2NhZGluZ1Byb3RlY3Rpb24iLCAic2V0T2xkSUQiLCAib2xkSUQiLCAiZ2V0Q3VycmVudElEIiwgImdldFJldmlzaW9uVXNlciIsICJnZXRMYXN0RWRpdFRpbWUiLCAic2V0Q2FsbGJhY2tQYXJhbWV0ZXJzIiwgImdldENhbGxiYWNrUGFyYW1ldGVycyIsICJleGlzdHMiLCAiZ2V0UGFnZUlEIiwgImdldENvbnRlbnRNb2RlbCIsICJnZXRXYXRjaGVkIiwgImdldExvYWRUaW1lIiwgImdldENyZWF0b3IiLCAiZ2V0Q3JlYXRpb25UaW1lc3RhbXAiLCAiY2FuRWRpdCIsICJsb29rdXBDcmVhdGlvbiIsICJydmRpciIsICJmbkxvb2t1cENyZWF0aW9uU3VjY2VzcyIsICJyZXZlcnQiLCAibW92ZSIsICJmblByZWZsaWdodENoZWNrcyIsICJmblByb2Nlc3NNb3ZlIiwgImZuTmVlZFRva2VuSW5mb1F1ZXJ5IiwgInBhdHJvbCIsICIkYm9keSIsICJwYXRyb2xocmVmIiwgInJjaWQiLCAiZ2V0UGFyYW1WYWx1ZSIsICJmblByb2Nlc3NQYXRyb2wiLCAicGF0cm9sUXVlcnkiLCAicmNwcm9wIiwgInJjdGl0bGUiLCAicmNsaW1pdCIsICJkZWxldGVQYWdlIiwgImZuUHJvY2Vzc0RlbGV0ZSIsICJ1bmRlbGV0ZVBhZ2UiLCAiZm5Qcm9jZXNzVW5kZWxldGUiLCAicHJvdGVjdCIsICJmblByb2Nlc3NQcm90ZWN0IiwgImdldFByZWZpeGVkVGV4dCIsICJlZGl0UmVzdHJpY3Rpb24iLCAicGFnZW9iaiIsICJmbkNoZWNrUGFnZU5hbWUiLCAicmV2IiwgIm1pc3NpbmciLCAicGFnZWlkIiwgImNvbnRlbnRtb2RlbCIsICJlZGl0UHJvdCIsICJwcm90ZWN0aW9uIiwgImZpbmRMYXN0IiwgInByIiwgImxhc3RyZXZpZCIsICJ0ZXN0YWN0aW9ucyIsICJhY3Rpb25zIiwgIl9pNiIsICJfT2JqZWN0JGtleXMiLCAicmV2aWQiLCAidXNlcmhpZGRlbiIsICJpbnZhbGlkIiwgInJlc29sdmVkTmFtZSIsICJvcmlnTnMiLCAibmFtZXNwYWNlIiwgIm5ld05zIiwgIm5ld0V4cGlyeSIsICJyZWwiLCAiZWRpdCIsICJsaW5rIiwgImNhcHRjaGEiLCAicHVyZ2VRdWVyeSIsICJwdXJnZUFwaSIsICJzbGVlcCIsICJlcnJvckRhdGEiLCAiYWJ1c2VmaWx0ZXIiLCAiZGVzY3JpcHRpb24iLCAic3BhbSIsICJzcGFtYmxhY2tsaXN0IiwgIm1hdGNoZXMiLCAiaXNUZXh0UmVkaXJlY3QiLCAic29tZSIsICJ0YWciLCAiZm5Mb29rdXBOb25SZWRpcmVjdENyZWF0b3IiLCAicmV2cyIsICJfaXRlcmF0b3I4IiwgIl9zdGVwOCIsICJmblByb2Nlc3NDaGVja3MiLCAiYWN0aW9uTWlzc2luZyIsICJwcm90ZWN0TWlzc2luZyIsICJzYWx0TWlzc2luZyIsICJlZGl0cHJvdCIsICJwYWdlVGl0bGUiLCAidG8iLCAibW92ZXRhbGsiLCAibW92ZXN1YnBhZ2VzIiwgIm5vcmVkaXJlY3QiLCAicmVjZW50Y2hhbmdlcyIsICJ1bnBhdHJvbGxlZCIsICJwYXRyb2xTdGF0IiwgImZuUHJvY2Vzc0RlbGV0ZUVycm9yIiwgImZuUHJvY2Vzc1VuZGVsZXRlRXJyb3IiLCAicHJzIiwgIm1vdmVwcm90IiwgImNyZWF0ZXByb3QiLCAiX2l0ZXJhdG9yOSIsICJfc3RlcDkiLCAic291cmNlIiwgImNhc2NhZGUiLCAicHJvdGVjdGlvbnMiLCAiZXhwaXJ5cyIsICJtaWxsaXNlY29uZHMiLCAiZGVmZXJyZWQiLCAicmVzb2x2ZSIsICJwcmV2aWV3IiwgInByZXZpZXdib3giLCAiYWRkQ2xhc3MiLCAiaGlkZSIsICJiZWdpblJlbmRlciIsICJzZWN0aW9uVGl0bGUiLCAic2hvdyIsICJzdGF0dXNzcGFuIiwgImluaXQiLCAicHN0IiwgImRpc2FibGVsaW1pdHJlcG9ydCIsICJkaXNhYmxlZWRpdHNlY3Rpb24iLCAicmVuZGVyQXBpIiwgImZuUmVuZGVyU3VjY2VzcyIsICJpbm5lckhUTUwiLCAibG9hZGVyIiwgIm1vZHVsZXN0eWxlcyIsICJtb2R1bGVzIiwgImNsb3NlUHJldmlldyIsICJlbXB0eSIsICJwYXJzZVRlbXBsYXRlIiwgImNvdW50IiwgInVubmFtZWQiLCAiZXF1YWxzIiwgInBhcmFtZXRlcnMiLCAia2V5IiwgImZpbmRQYXJhbSIsICJmaW5hbCIsICJ0ZXN0MyIsICJwb3AiLCAidGVzdDIiLCAiY2hhckF0IiwgInJlbW92ZUxpbmsiLCAibGlua1RhcmdldCIsICJtd1RpdGxlIiwgIm5ld0Zyb21UZXh0IiwgIm5hbWVzcGFjZUlEIiwgImdldE5hbWVzcGFjZUlkIiwgImdldE1haW5UZXh0IiwgImxpbmtSZWdleFN0cmluZyIsICJpc0ZpbGVPckNhdGVnb3J5IiwgImNvbG9uIiwgInNpbXBsZUxpbmtSZWdleCIsICJwaXBlZExpbmtSZWdleCIsICJjb21tZW50T3V0SW1hZ2UiLCAiaW1hZ2UiLCAiaW1hZ2VSZWdleFN0cmluZyIsICJsaW5rc1JlZ2V4IiwgImFsbExpbmtzIiwgIl9pdGVyYXRvcjAiLCAiX3N0ZXAwIiwgImFsbExpbmsiLCAiZ2FsbGVyeUltYWdlUmVnZXgiLCAiZnJlZUltYWdlUmVnZXgiLCAiYWRkVG9JbWFnZUNvbW1lbnQiLCAiX2l0ZXJhdG9yMSIsICJfc3RlcDEiLCAiZ2FsbGVyeVJlZ2V4IiwgIm5ld3RleHQiLCAicmVtb3ZlVGVtcGxhdGUiLCAidGVtcGxhdGUiLCAidGVtcGxhdGVSZWdleFN0cmluZyIsICJhbGxUZW1wbGF0ZXMiLCAiX2l0ZXJhdG9yMTAiLCAiX3N0ZXAxMCIsICJhbGxUZW1wbGF0ZSIsICJpbnNlcnRBZnRlclRlbXBsYXRlcyIsICJmbGFncyIsICJwcmVSZWdleCIsICJnZXRUZXh0IiwgInVzZXJzcGFjZUxvZ2dlciIsICJsb2dQYWdlTmFtZSIsICJpbml0aWFsVGV4dCIsICJoZWFkZXJMZXZlbCIsICJsb2dUZXh0IiwgInN1bW1hcnlUZXh0IiwgImRlZiIsICJyZWplY3QiLCAic3RhdCIsICJ0ZXh0UmF3IiwgImdlbmVyYXRlIiwgInVwZGF0ZSIsICJFbGVtZW50IiwgImhhc0NoaWxkTm9kZXMiLCAiZXJyb3JFdmVudCIsICJoYW5kbGVyIiwgInN0YXRSYXciLCAibGlua2VkIiwgInByaW50VXNlclRleHQiLCAiY29tbWVudHMiLCAibWVzc2FnZSIsICJwIiwgImRpdiIsICJtYXJnaW5Ub3AiLCAid2hpdGVTcGFjZSIsICJodG1sTm9kZSIsICJjb2xvciIsICJqUXVlcnlTZWxlY3RvciIsICJqUXVlcnlDb250ZXh0IiwgImxhc3RDaGVja2JveCIsICJjbGlja0hhbmRsZXIiLCAiY2xpY2tIYW5kbGVyMiIsICJ0aGlzQ2IiLCAic2hpZnRLZXkiLCAiY2JzIiwgImluZGV4IiwgImxhc3RJbmRleCIsICJlbmRTdGF0ZSIsICJmaW5pc2giLCAiY2xpY2siLCAib24iLCAiYmF0Y2hPcGVyYXRpb24iLCAicGFnZUxpc3QiLCAiY2h1bmtTaXplIiwgInByZXNlcnZlSW5kaXZpZHVhbFN0YXR1c0xpbmVzIiwgIndvcmtlciIsICJwb3N0RmluaXNoIiwgImNvdW50U3RhcnRlZCIsICJjb3VudEZpbmlzaGVkIiwgImNvdW50RmluaXNoZWRTdWNjZXNzIiwgImN1cnJlbnRDaHVua0luZGV4IiwgInBhZ2VDaHVua3MiLCAicnVubmluZyIsICJzZXRQYWdlTGlzdCIsICJzZXRPcHRpb24iLCAib3B0aW9uTmFtZSIsICJvcHRpb25WYWx1ZSIsICJydW4iLCAidG90YWwiLCAiZm5TdGFydE5ld0NodW5rIiwgIndvcmtlclN1Y2Nlc3MiLCAiYXJnIiwgImZuRG9uZU9uZSIsICJ3b3JrZXJGYWlsdXJlIiwgInRoaXNQcm94eSIsICJfaXRlcmF0b3IxMSIsICJfc3RlcDExIiwgInByb2dyZXNzIiwgInJvdW5kIiwgImZsb29yIiwgInN0YXR1c1N0cmluZyIsICJzaW1wbGVXaW5kb3ciLCAid2lkdGgiLCAiaGVpZ2h0IiwgImRpYWxvZyIsICJhdXRvT3BlbiIsICJidXR0b25zIiwgIlBsYWNlaG9sZGVyIGJ1dHRvbiIsICJkaWFsb2dDbGFzcyIsICJpbm5lcldpZHRoIiwgImNsb3NlIiwgInJlc2l6ZVN0YXJ0IiwgInNjcm9sbGJveCIsICJtYXhIZWlnaHQiLCAicmVzaXplU3RvcCIsICJyZXNpemUiLCAiJHdpZGdldCIsICJlYWNoIiwgImJ1dHRvbnNwYW4iLCAibGlua3NzcGFuIiwgInJlc2l6YWJsZSIsICJoYXNGb290ZXJMaW5rcyIsICJzY3JpcHROYW1lIiwgInByZXZlbnREZWZhdWx0IiwgImRpc3BsYXkiLCAic2NyaXB0bmFtZXNwYW4iLCAic2V0dXBUb29sdGlwcyIsICJwZyIsICJkaWZmIiwgInJhblNldHVwVG9vbHRpcHNBbHJlYWR5IiwgInNldEhlaWdodCIsICJzZXRUaXRsZSIsICJzZXRTY3JpcHROYW1lIiwgInNldFdpZHRoIiwgImdldENvbXB1dGVkU3R5bGUiLCAiaW5uZXJIZWlnaHQiLCAic2V0Q29udGVudCIsICJwdXJnZUNvbnRlbnQiLCAiYWRkQ29udGVudCIsICJidXR0b24iLCAiYWRkRm9vdGVyTGluayIsICJ3aWtpUGFnZSIsICJwcmVwIiwgIiRmb290ZXJsaW5rcyIsICJidWxsZXQiLCAic2V0TW9kYWxpdHkiLCAibW9kYWwiLCAic2V0QnV0dG9uc0VuYWJsZWQiLCAiZW5hYmxlZCIsICJqUXVlcnkiXQp9Cg==
