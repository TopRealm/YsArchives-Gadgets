/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/AddSectionPlus}
 * @author 安忆 <i@anyi.in>
 * @license GPL-3.0-or-later {@link https://youshou.wiki/wiki/H:GPLV3}
 */

/**
 * Copyright (C)  安忆
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
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

// dist/AddSectionPlus/AddSectionPlus.js
//! src/AddSectionPlus/AddSectionPlus.ts
var import_ext_gadget = require("ext.gadget.Util");
//! src/AddSectionPlus/modules/processElement.ts
var processElement = ($element, skin) => {
  const title = ($element.attr("aria-label") || $element.attr("title") || $element.text()).trim();
  if (!title) {
    return;
  }
  switch (skin) {
    case "gongbi":
      $element.attr({
        title
      }).html("&#8203");
      break;
    default:
      $element.attr({
        title
      }).text("[+]");
  }
};
//! src/AddSectionPlus/AddSectionPlus.ts
void (0, import_ext_gadget.getBody)().then(function addSectionPlus($body) {
  const {
    skin
  } = mw.config.get();
  if (skin === "citizen") {
    return;
    //! style is already added by [[MediaWiki:Gadget-AddSectionPlus-pagestyles.css]]
  }
  const $wrapper = $body.find("#ca-addsection");
  if (!$wrapper.length) {
    return;
  }
  const $target = $wrapper.find("span");
  if (!$target.length) {
    return;
  }
  processElement($target, skin);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0FkZFNlY3Rpb25QbHVzL0FkZFNlY3Rpb25QbHVzLnRzIiwgInNyYy9BZGRTZWN0aW9uUGx1cy9tb2R1bGVzL3Byb2Nlc3NFbGVtZW50LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgJy4vQWRkU2VjdGlvblBsdXMubGVzcyc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3Byb2Nlc3NFbGVtZW50fSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc0VsZW1lbnQnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGFkZFNlY3Rpb25QbHVzKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRjb25zdCB7c2tpbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHNraW4gPT09ICdjaXRpemVuJykge1xuXHRcdHJldHVybjsgLy8hIHN0eWxlIGlzIGFscmVhZHkgYWRkZWQgYnkgW1tNZWRpYVdpa2k6R2FkZ2V0LUFkZFNlY3Rpb25QbHVzLXBhZ2VzdHlsZXMuY3NzXV1cblx0fVxuXG5cdGNvbnN0ICR3cmFwcGVyOiBKUXVlcnkgPSAkYm9keS5maW5kKCcjY2EtYWRkc2VjdGlvbicpO1xuXHRpZiAoISR3cmFwcGVyLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICR0YXJnZXQ6IEpRdWVyeSA9ICR3cmFwcGVyLmZpbmQoJ3NwYW4nKTtcblx0aWYgKCEkdGFyZ2V0Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHByb2Nlc3NFbGVtZW50KCR0YXJnZXQsIHNraW4pO1xufSk7XG4iLCAiY29uc3QgcHJvY2Vzc0VsZW1lbnQgPSAoJGVsZW1lbnQ6IEpRdWVyeSwgc2tpbjogc3RyaW5nKTogdm9pZCA9PiB7XG5cdGNvbnN0IHRpdGxlOiBzdHJpbmcgPSAoJGVsZW1lbnQuYXR0cignYXJpYS1sYWJlbCcpIHx8ICRlbGVtZW50LmF0dHIoJ3RpdGxlJykgfHwgJGVsZW1lbnQudGV4dCgpKS50cmltKCk7XG5cdGlmICghdGl0bGUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRzd2l0Y2ggKHNraW4pIHtcblx0XHRjYXNlICdnb25nYmknOlxuXHRcdFx0JGVsZW1lbnRcblx0XHRcdFx0LmF0dHIoe1xuXHRcdFx0XHRcdHRpdGxlLFxuXHRcdFx0XHR9KVxuXHRcdFx0XHQuaHRtbCgnJiM4MjAzJyk7XG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0JGVsZW1lbnRcblx0XHRcdFx0LmF0dHIoe1xuXHRcdFx0XHRcdHRpdGxlLFxuXHRcdFx0XHR9KVxuXHRcdFx0XHQudGV4dCgnWytdJyk7XG5cdH1cbn07XG5cbmV4cG9ydCB7cHJvY2Vzc0VsZW1lbnR9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFBQSxvQkFBc0JDLFFBQUEsaUJBQUE7O0FDRHRCLElBQU1DLGlCQUFpQkEsQ0FBQ0MsVUFBa0JDLFNBQXVCO0FBQ2hFLFFBQU1DLFNBQWlCRixTQUFTRyxLQUFLLFlBQVksS0FBS0gsU0FBU0csS0FBSyxPQUFPLEtBQUtILFNBQVNJLEtBQUssR0FBR0MsS0FBSztBQUN0RyxNQUFJLENBQUNILE9BQU87QUFDWDtFQUNEO0FBRUEsVUFBUUQsTUFBQTtJQUNQLEtBQUs7QUFDSkQsZUFDRUcsS0FBSztRQUNMRDtNQUNELENBQUMsRUFDQUksS0FBSyxRQUFRO0FBQ2Y7SUFDRDtBQUNDTixlQUNFRyxLQUFLO1FBQ0xEO01BQ0QsQ0FBQyxFQUNBRSxLQUFLLEtBQUs7RUFDZDtBQUNEOztBRGpCQSxNQUFBLEdBQUtQLGtCQUFBVSxTQUFRLEVBQUVDLEtBQUssU0FBU0MsZUFBZUMsT0FBc0M7QUFDakYsUUFBTTtJQUFDVDtFQUFJLElBQUlVLEdBQUdDLE9BQU9DLElBQUk7QUFFN0IsTUFBSVosU0FBUyxXQUFXO0FBQ3ZCO0lBQVE7RUFDVDtBQUVBLFFBQU1hLFdBQW1CSixNQUFNSyxLQUFLLGdCQUFnQjtBQUNwRCxNQUFJLENBQUNELFNBQVNFLFFBQVE7QUFDckI7RUFDRDtBQUVBLFFBQU1DLFVBQWtCSCxTQUFTQyxLQUFLLE1BQU07QUFDNUMsTUFBSSxDQUFDRSxRQUFRRCxRQUFRO0FBQ3BCO0VBQ0Q7QUFFQWpCLGlCQUFla0IsU0FBU2hCLElBQUk7QUFDN0IsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJwcm9jZXNzRWxlbWVudCIsICIkZWxlbWVudCIsICJza2luIiwgInRpdGxlIiwgImF0dHIiLCAidGV4dCIsICJ0cmltIiwgImh0bWwiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImFkZFNlY3Rpb25QbHVzIiwgIiRib2R5IiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiJHdyYXBwZXIiLCAiZmluZCIsICJsZW5ndGgiLCAiJHRhcmdldCJdCn0K
