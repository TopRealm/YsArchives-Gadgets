/**
 * SPDX-License-Identifier: GPL-3.0
 * _addText: '{{Gadget Header|license=GPL-3.0}}'
 *
 * @base <https://github.com/MoegirlPediaInterfaceAdmins/MoegirlPediaInterfaceCodes/blob/f1341d831b3aab2501f7744581149ec201707bdb/src/gadgets/ShowAvatar/MediaWiki%3AGadget-ShowAvatar.css>
 * @source <https://github.com/TopRealm/InterfaceCodes/tree/master/src/Gadgets/Appearance/ShowAvatar.css>
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

// dist/ShowAvatar/ShowAvatar.js
//! src/ShowAvatar/ShowAvatar.ts
var header = $("#citizen-page-header .citizen-page-header-inner .citizen-page-heading .firstHeading-container");
var avatarUrl = new URL("https://youshou.wiki/");
avatarUrl.searchParams.set("user", mw.config.get("wgPageName").replace(/^user:/i, ""));
avatarUrl.pathname = "/extensions/Avatar/avatar.php";
if (mw.config.get("wgNamespaceNumber") === 2 && !mw.config.get("wgPageName").includes("/")) {
  const hrefUrl = new URL(avatarUrl.toString());
  hrefUrl.pathname = "/wiki/Special:Viewavatar";
  const srcUrl = new URL(avatarUrl.toString());
  header.prepend($("<a/>").attr({
    href: hrefUrl,
    title: "查看头像"
  }).prepend($("<img/>").attr({
    src: srcUrl,
    id: "user-rootpage-avatar"
  }).css({
    width: "2.2em",
    height: "2.2em"
  })));
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Nob3dBdmF0YXIvU2hvd0F2YXRhci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICcuL1Nob3dBdmF0YXIubGVzcyc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby1qcXVlcnkvbm8tcGFyc2UtaHRtbC1saXRlcmFsICovXG5cbmNvbnN0IGhlYWRlciA9ICQoJyNjaXRpemVuLXBhZ2UtaGVhZGVyIC5jaXRpemVuLXBhZ2UtaGVhZGVyLWlubmVyIC5jaXRpemVuLXBhZ2UtaGVhZGluZyAuZmlyc3RIZWFkaW5nLWNvbnRhaW5lcicpO1xuXG5jb25zdCBhdmF0YXJVcmwgPSBuZXcgVVJMKCdodHRwczovL3lvdXNob3Uud2lraS8nKTtcbmF2YXRhclVybC5zZWFyY2hQYXJhbXMuc2V0KCd1c2VyJywgbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpLnJlcGxhY2UoL151c2VyOi9pLCAnJykpO1xuYXZhdGFyVXJsLnBhdGhuYW1lID0gJy9leHRlbnNpb25zL0F2YXRhci9hdmF0YXIucGhwJztcblxuaWYgKG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlTnVtYmVyJykgPT09IDIgJiYgIW13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKS5pbmNsdWRlcygnLycpKSB7XG5cdGNvbnN0IGhyZWZVcmwgPSBuZXcgVVJMKGF2YXRhclVybC50b1N0cmluZygpKTtcblx0aHJlZlVybC5wYXRobmFtZSA9ICcvd2lraS9TcGVjaWFsOlZpZXdhdmF0YXInO1xuXHRjb25zdCBzcmNVcmwgPSBuZXcgVVJMKGF2YXRhclVybC50b1N0cmluZygpKTtcblx0aGVhZGVyLnByZXBlbmQoXG5cdFx0JCgnPGEvPicpXG5cdFx0XHQuYXR0cih7XG5cdFx0XHRcdGhyZWY6IGhyZWZVcmwsXG5cdFx0XHRcdHRpdGxlOiAn5p+l55yL5aS05YOPJyxcblx0XHRcdH0pXG5cdFx0XHQucHJlcGVuZChcblx0XHRcdFx0JCgnPGltZy8+Jylcblx0XHRcdFx0XHQuYXR0cih7XG5cdFx0XHRcdFx0XHRzcmM6IHNyY1VybCxcblx0XHRcdFx0XHRcdGlkOiAndXNlci1yb290cGFnZS1hdmF0YXInLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmNzcyh7XG5cdFx0XHRcdFx0XHR3aWR0aDogJzIuMmVtJyxcblx0XHRcdFx0XHRcdGhlaWdodDogJzIuMmVtJyxcblx0XHRcdFx0XHR9KVxuXHRcdFx0KVxuXHQpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSxJQUFNQSxTQUFTQyxFQUFFLCtGQUErRjtBQUVoSCxJQUFNQyxZQUFZLElBQUlDLElBQUksdUJBQXVCO0FBQ2pERCxVQUFVRSxhQUFhQyxJQUFJLFFBQVFDLEdBQUdDLE9BQU9DLElBQUksWUFBWSxFQUFFQyxRQUFRLFdBQVcsRUFBRSxDQUFDO0FBQ3JGUCxVQUFVUSxXQUFXO0FBRXJCLElBQUlKLEdBQUdDLE9BQU9DLElBQUksbUJBQW1CLE1BQU0sS0FBSyxDQUFDRixHQUFHQyxPQUFPQyxJQUFJLFlBQVksRUFBRUcsU0FBUyxHQUFHLEdBQUc7QUFDM0YsUUFBTUMsVUFBVSxJQUFJVCxJQUFJRCxVQUFVVyxTQUFTLENBQUM7QUFDNUNELFVBQVFGLFdBQVc7QUFDbkIsUUFBTUksU0FBUyxJQUFJWCxJQUFJRCxVQUFVVyxTQUFTLENBQUM7QUFDM0NiLFNBQU9lLFFBQ05kLEVBQUUsTUFBTSxFQUNOZSxLQUFLO0lBQ0xDLE1BQU1MO0lBQ05NLE9BQU87RUFDUixDQUFDLEVBQ0FILFFBQ0FkLEVBQUUsUUFBUSxFQUNSZSxLQUFLO0lBQ0xHLEtBQUtMO0lBQ0xNLElBQUk7RUFDTCxDQUFDLEVBQ0FDLElBQUk7SUFDSkMsT0FBTztJQUNQQyxRQUFRO0VBQ1QsQ0FBQyxDQUNILENBQ0Y7QUFDRDsiLAogICJuYW1lcyI6IFsiaGVhZGVyIiwgIiQiLCAiYXZhdGFyVXJsIiwgIlVSTCIsICJzZWFyY2hQYXJhbXMiLCAic2V0IiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAicmVwbGFjZSIsICJwYXRobmFtZSIsICJpbmNsdWRlcyIsICJocmVmVXJsIiwgInRvU3RyaW5nIiwgInNyY1VybCIsICJwcmVwZW5kIiwgImF0dHIiLCAiaHJlZiIsICJ0aXRsZSIsICJzcmMiLCAiaWQiLCAiY3NzIiwgIndpZHRoIiwgImhlaWdodCJdCn0K
