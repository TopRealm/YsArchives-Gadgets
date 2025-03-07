/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/EditCount}
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

// dist/EditCount/EditCount.js
//! src/EditCount/EditCount.ts
var {
  wgUserEditCount
} = mw.config.get();
mw.loader.addStyleTag('#pt-mycontris > a::after,\n	.menu__item--userContributions > span > span::after {\n		content:" ('.concat(wgUserEditCount !== null && wgUserEditCount !== void 0 ? wgUserEditCount : 0, ')"\n	}'));

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRDb3VudC9FZGl0Q291bnQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IHt3Z1VzZXJFZGl0Q291bnR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5tdy5sb2FkZXIuYWRkU3R5bGVUYWcoXG5cdGAjcHQtbXljb250cmlzID4gYTo6YWZ0ZXIsXG5cdC5tZW51X19pdGVtLS11c2VyQ29udHJpYnV0aW9ucyA+IHNwYW4gPiBzcGFuOjphZnRlciB7XG5cdFx0Y29udGVudDpcIiAoJHt3Z1VzZXJFZGl0Q291bnQgPz8gMH0pXCJcblx0fWBcbik7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU07RUFBQ0E7QUFBZSxJQUFJQyxHQUFHQyxPQUFPQyxJQUFJO0FBRXhDRixHQUFHRyxPQUFPQyxZQUFBLG1HQUFBQyxPQUdLTixvQkFBQSxRQUFBQSxvQkFBQSxTQUFBQSxrQkFBbUIsR0FBQyxRQUFBLENBRW5DOyIsCiAgIm5hbWVzIjogWyJ3Z1VzZXJFZGl0Q291bnQiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJsb2FkZXIiLCAiYWRkU3R5bGVUYWciLCAiY29uY2F0Il0KfQo=
