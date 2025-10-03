/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://en.wikipedia.org/wiki/User:Enterprisey/search-shortcuts.js}
 * @base {@link https://en.wikipedia.org/wiki/User:Guarapiranga/search-shortcuts.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/SearchShortcuts}
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

// dist/SearchShortcuts/SearchShortcuts.js
//! src/SearchShortcuts/modules/util/keydownListener.ts
var keydownListener = ($searchInput) => {
  var _$searchInput$val;
  const inputValue = (_$searchInput$val = $searchInput.val()) === null || _$searchInput$val === void 0 ? void 0 : _$searchInput$val.trim();
  if (!inputValue || !/^(\[\[|\{\{)[^{}]+(}}|\]\])$/.test(inputValue)) {
    return;
  }
  if (inputValue.startsWith("{{")) {
    if (inputValue.startsWith("{{#invoke:")) {
      $searchInput.val(inputValue.replace("{{#invoke:", "Module:").replace(/\s*\|.*/, "").replace("}}", ""));
    } else if (inputValue.startsWith("{{#:")) {
      $searchInput.val(inputValue.replace("{{#", "H:MW#").replace(/\s*\|.*/, "").replace("}}", ""));
    } else if (inputValue.startsWith("{{:")) {
      $searchInput.val(inputValue.replace("{{:", "").replace(/\s*\|.*/, "").replace("}}", ""));
    } else {
      $searchInput.val(inputValue.replace("{{", "Template:").replace(/\s*\|.*/, "").replace("}}", ""));
    }
  } else if (inputValue.startsWith("[[")) {
    $searchInput.val(inputValue.replace(/\[\[:?/, "").replace(/\s*\|.*/, "").replace(/\s*#.*/, "").replace("]]", ""));
  }
};
//! src/SearchShortcuts/modules/addKeyDownListener.ts
var addKeyDownListener = ($searchInput) => {
  $searchInput.on("keydown", () => {
    keydownListener($searchInput);
  });
};
//! src/SearchShortcuts/SearchShortcuts.ts
var import_ext_gadget = require("ext.gadget.Util");
//! src/SearchShortcuts/options.json
var searchInputSelector = "#searchInput";
//! src/SearchShortcuts/modules/getSearchInput.ts
var getSearchInput = ($body) => {
  const $searchInput = $body.find(searchInputSelector);
  return $searchInput;
};
//! src/SearchShortcuts/SearchShortcuts.ts
void (0, import_ext_gadget.getBody)().then(function searchShortcuts($body) {
  const $searchInput = getSearchInput($body);
  if (!$searchInput.length) {
    return;
  }
  addKeyDownListener($searchInput);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1NlYXJjaFNob3J0Y3V0cy9tb2R1bGVzL3V0aWwva2V5ZG93bkxpc3RlbmVyLnRzIiwgInNyYy9TZWFyY2hTaG9ydGN1dHMvbW9kdWxlcy9hZGRLZXlEb3duTGlzdGVuZXIudHMiLCAic3JjL1NlYXJjaFNob3J0Y3V0cy9TZWFyY2hTaG9ydGN1dHMudHMiLCAic3JjL1NlYXJjaFNob3J0Y3V0cy9vcHRpb25zLmpzb24iLCAic3JjL1NlYXJjaFNob3J0Y3V0cy9tb2R1bGVzL2dldFNlYXJjaElucHV0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBrZXlkb3duTGlzdGVuZXIgPSAoJHNlYXJjaElucHV0OiBKUXVlcnk8SFRNTElucHV0RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3QgaW5wdXRWYWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkID0gJHNlYXJjaElucHV0LnZhbCgpPy50cmltKCk7XG5cdGlmICghaW5wdXRWYWx1ZSB8fCAhL14oXFxbXFxbfFxce1xceylbXnt9XSsofX18XFxdXFxdKSQvLnRlc3QoaW5wdXRWYWx1ZSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoaW5wdXRWYWx1ZS5zdGFydHNXaXRoKCd7eycpKSB7XG5cdFx0aWYgKGlucHV0VmFsdWUuc3RhcnRzV2l0aCgne3sjaW52b2tlOicpKSB7XG5cdFx0XHQkc2VhcmNoSW5wdXQudmFsKFxuXHRcdFx0XHRpbnB1dFZhbHVlXG5cdFx0XHRcdFx0LnJlcGxhY2UoJ3t7I2ludm9rZTonLCAnTW9kdWxlOicpXG5cdFx0XHRcdFx0LnJlcGxhY2UoL1xccypcXHwuKi8sICcnKVxuXHRcdFx0XHRcdC5yZXBsYWNlKCd9fScsICcnKVxuXHRcdFx0KTtcblx0XHR9IGVsc2UgaWYgKGlucHV0VmFsdWUuc3RhcnRzV2l0aCgne3sjOicpKSB7XG5cdFx0XHQkc2VhcmNoSW5wdXQudmFsKFxuXHRcdFx0XHRpbnB1dFZhbHVlXG5cdFx0XHRcdFx0LnJlcGxhY2UoJ3t7IycsICdIOk1XIycpXG5cdFx0XHRcdFx0LnJlcGxhY2UoL1xccypcXHwuKi8sICcnKVxuXHRcdFx0XHRcdC5yZXBsYWNlKCd9fScsICcnKVxuXHRcdFx0KTtcblx0XHR9IGVsc2UgaWYgKGlucHV0VmFsdWUuc3RhcnRzV2l0aCgne3s6JykpIHtcblx0XHRcdCRzZWFyY2hJbnB1dC52YWwoXG5cdFx0XHRcdGlucHV0VmFsdWVcblx0XHRcdFx0XHQucmVwbGFjZSgne3s6JywgJycpXG5cdFx0XHRcdFx0LnJlcGxhY2UoL1xccypcXHwuKi8sICcnKVxuXHRcdFx0XHRcdC5yZXBsYWNlKCd9fScsICcnKVxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JHNlYXJjaElucHV0LnZhbChcblx0XHRcdFx0aW5wdXRWYWx1ZVxuXHRcdFx0XHRcdC5yZXBsYWNlKCd7eycsICdUZW1wbGF0ZTonKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC9cXHMqXFx8LiovLCAnJylcblx0XHRcdFx0XHQucmVwbGFjZSgnfX0nLCAnJylcblx0XHRcdCk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKGlucHV0VmFsdWUuc3RhcnRzV2l0aCgnW1snKSkge1xuXHRcdCRzZWFyY2hJbnB1dC52YWwoXG5cdFx0XHRpbnB1dFZhbHVlXG5cdFx0XHRcdC5yZXBsYWNlKC9cXFtcXFs6Py8sICcnKVxuXHRcdFx0XHQucmVwbGFjZSgvXFxzKlxcfC4qLywgJycpXG5cdFx0XHRcdC5yZXBsYWNlKC9cXHMqIy4qLywgJycpXG5cdFx0XHRcdC5yZXBsYWNlKCddXScsICcnKVxuXHRcdCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7a2V5ZG93bkxpc3RlbmVyfTtcbiIsICJpbXBvcnQge2tleWRvd25MaXN0ZW5lcn0gZnJvbSAnLi91dGlsL2tleWRvd25MaXN0ZW5lcic7XG5cbmNvbnN0IGFkZEtleURvd25MaXN0ZW5lciA9ICgkc2VhcmNoSW5wdXQ6IEpRdWVyeTxIVE1MSW5wdXRFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQkc2VhcmNoSW5wdXQub24oJ2tleWRvd24nLCAoKTogdm9pZCA9PiB7XG5cdFx0a2V5ZG93bkxpc3RlbmVyKCRzZWFyY2hJbnB1dCk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHthZGRLZXlEb3duTGlzdGVuZXJ9O1xuIiwgImltcG9ydCB7YWRkS2V5RG93bkxpc3RlbmVyfSBmcm9tICcuL21vZHVsZXMvYWRkS2V5RG93bkxpc3RlbmVyJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0U2VhcmNoSW5wdXR9IGZyb20gJy4vbW9kdWxlcy9nZXRTZWFyY2hJbnB1dCc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gc2VhcmNoU2hvcnRjdXRzKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRjb25zdCAkc2VhcmNoSW5wdXQ6IEpRdWVyeTxIVE1MSW5wdXRFbGVtZW50PiA9IGdldFNlYXJjaElucHV0KCRib2R5KTtcblx0aWYgKCEkc2VhcmNoSW5wdXQubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0YWRkS2V5RG93bkxpc3RlbmVyKCRzZWFyY2hJbnB1dCk7XG59KTtcbiIsICJ7XG5cdFwic2VhcmNoSW5wdXRTZWxlY3RvclwiOiBcIiNzZWFyY2hJbnB1dFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuXG5jb25zdCBnZXRTZWFyY2hJbnB1dCA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiBKUXVlcnk8SFRNTElucHV0RWxlbWVudD4gPT4ge1xuXHRjb25zdCAkc2VhcmNoSW5wdXQ6IEpRdWVyeTxIVE1MSW5wdXRFbGVtZW50PiA9ICRib2R5LmZpbmQ8SFRNTElucHV0RWxlbWVudD4oT1BUSU9OUy5zZWFyY2hJbnB1dFNlbGVjdG9yKTtcblxuXHRyZXR1cm4gJHNlYXJjaElucHV0O1xufTtcblxuZXhwb3J0IHtnZXRTZWFyY2hJbnB1dH07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsa0JBQW1CQyxrQkFBaUQ7QUFBQSxNQUFBQztBQUN6RSxRQUFNQyxjQUFBRCxvQkFBaUNELGFBQWFHLElBQUksT0FBQSxRQUFBRixzQkFBQSxTQUFBLFNBQWpCQSxrQkFBb0JHLEtBQUs7QUFDaEUsTUFBSSxDQUFDRixjQUFjLENBQUMsK0JBQStCRyxLQUFLSCxVQUFVLEdBQUc7QUFDcEU7RUFDRDtBQUVBLE1BQUlBLFdBQVdJLFdBQVcsSUFBSSxHQUFHO0FBQ2hDLFFBQUlKLFdBQVdJLFdBQVcsWUFBWSxHQUFHO0FBQ3hDTixtQkFBYUcsSUFDWkQsV0FDRUssUUFBUSxjQUFjLFNBQVMsRUFDL0JBLFFBQVEsV0FBVyxFQUFFLEVBQ3JCQSxRQUFRLE1BQU0sRUFBRSxDQUNuQjtJQUNELFdBQVdMLFdBQVdJLFdBQVcsTUFBTSxHQUFHO0FBQ3pDTixtQkFBYUcsSUFDWkQsV0FDRUssUUFBUSxPQUFPLE9BQU8sRUFDdEJBLFFBQVEsV0FBVyxFQUFFLEVBQ3JCQSxRQUFRLE1BQU0sRUFBRSxDQUNuQjtJQUNELFdBQVdMLFdBQVdJLFdBQVcsS0FBSyxHQUFHO0FBQ3hDTixtQkFBYUcsSUFDWkQsV0FDRUssUUFBUSxPQUFPLEVBQUUsRUFDakJBLFFBQVEsV0FBVyxFQUFFLEVBQ3JCQSxRQUFRLE1BQU0sRUFBRSxDQUNuQjtJQUNELE9BQU87QUFDTlAsbUJBQWFHLElBQ1pELFdBQ0VLLFFBQVEsTUFBTSxXQUFXLEVBQ3pCQSxRQUFRLFdBQVcsRUFBRSxFQUNyQkEsUUFBUSxNQUFNLEVBQUUsQ0FDbkI7SUFDRDtFQUNELFdBQVdMLFdBQVdJLFdBQVcsSUFBSSxHQUFHO0FBQ3ZDTixpQkFBYUcsSUFDWkQsV0FDRUssUUFBUSxVQUFVLEVBQUUsRUFDcEJBLFFBQVEsV0FBVyxFQUFFLEVBQ3JCQSxRQUFRLFVBQVUsRUFBRSxFQUNwQkEsUUFBUSxNQUFNLEVBQUUsQ0FDbkI7RUFDRDtBQUNEOztBQzNDQSxJQUFNQyxxQkFBc0JSLGtCQUFpRDtBQUM1RUEsZUFBYVMsR0FBRyxXQUFXLE1BQVk7QUFDdENWLG9CQUFnQkMsWUFBWTtFQUM3QixDQUFDO0FBQ0Y7O0FDTEEsSUFBQVUsb0JBQXNCQyxRQUFBLGlCQUFBOztBQ0FyQixJQUFBQyxzQkFBdUI7O0FDQ3hCLElBQU1DLGlCQUFrQkMsV0FBNkQ7QUFDcEYsUUFBTWQsZUFBeUNjLE1BQU1DLEtBQStCSCxtQkFBbUI7QUFFdkcsU0FBT1o7QUFDUjs7QUZGQSxNQUFBLEdBQUtVLGtCQUFBTSxTQUFRLEVBQUVDLEtBQUssU0FBU0MsZ0JBQWdCSixPQUFzQztBQUNsRixRQUFNZCxlQUF5Q2EsZUFBZUMsS0FBSztBQUNuRSxNQUFJLENBQUNkLGFBQWFtQixRQUFRO0FBQ3pCO0VBQ0Q7QUFFQVgscUJBQW1CUixZQUFZO0FBQ2hDLENBQUM7IiwKICAibmFtZXMiOiBbImtleWRvd25MaXN0ZW5lciIsICIkc2VhcmNoSW5wdXQiLCAiXyRzZWFyY2hJbnB1dCR2YWwiLCAiaW5wdXRWYWx1ZSIsICJ2YWwiLCAidHJpbSIsICJ0ZXN0IiwgInN0YXJ0c1dpdGgiLCAicmVwbGFjZSIsICJhZGRLZXlEb3duTGlzdGVuZXIiLCAib24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJzZWFyY2hJbnB1dFNlbGVjdG9yIiwgImdldFNlYXJjaElucHV0IiwgIiRib2R5IiwgImZpbmQiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgInNlYXJjaFNob3J0Y3V0cyIsICJsZW5ndGgiXQp9Cg==
