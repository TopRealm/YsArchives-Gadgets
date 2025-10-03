/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0|import=no}}'
 *
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/AwajieHide}
 * @author [[User:顶呱呱的阿杰]]
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

// dist/AwajieHide/AwajieHide.js
//! src/AwajieHide/AwajieHide.ts
(() => {
  const domList = document.querySelectorAll(".wm-AwajieHide");
  const domobj = {};
  const temp = document.createElement("div");
  const ESCFun = (htmlStr) => {
    temp.innerHTML = htmlStr;
    return temp.textContent;
  };
  const HiddenSettings = (id, valuepx = false) => {
    const currentItem = domobj[id];
    if (!currentItem) return;
    const HideContent = currentItem.querySelector(".wm-AwajieHide > .wm-AwajieHide-content");
    if (!HideContent) return;
    if (valuepx) {
      HideContent.style.height = "auto";
      const HideContentHeight = HideContent.clientHeight;
      HideContent.style.height = "0px";
      void window.getComputedStyle(HideContent).height;
      HideContent.style.height = "".concat(HideContentHeight, "px");
    } else {
      HideContent.style.height = "0px";
    }
    let parent = currentItem.parentElement;
    while (parent) {
      const parentHide = parent.closest(".wm-AwajieHide");
      if (parentHide) {
        const parentContent = parentHide.querySelector(".wm-AwajieHide > .wm-AwajieHide-content");
        if (parentContent && parentContent.style.height !== "0px") {
          parentContent.style.height = "auto";
          setTimeout(() => {
            const ParentContentHeight = parentContent.clientHeight;
            parentContent.style.height = "".concat(ParentContentHeight, "px");
          }, 500);
        }
      }
      parent = parent.parentElement;
    }
  };
  for (let i = domList.length - 1; i >= 0; i--) {
    const item = domList[i];
    if (!item) continue;
    item.dataset["item"] = String(i);
    domobj[String(i)] = item;
    const HideTitle = item.querySelector(".wm-AwajieHide > .wm-AwajieHide-title");
    const HideContent = item.querySelector(".wm-AwajieHide > .wm-AwajieHide-content");
    const expandtext = ESCFun(item.dataset["expandtext"] || "展开");
    const collapsetext = ESCFun(item.dataset["collapsetext"] || "收起");
    const show = item.dataset["show"] || "hide";
    if (!HideTitle || !HideContent) continue;
    HideContent.style.height = show === "hide" && show ? "0px" : "".concat(HideContent.clientHeight, "px");
    const newBtn = document.createElement("button");
    newBtn.className = "awajie-hide-btn";
    newBtn.innerHTML = '[<span style="color: var(--color-progressive, #36c);">'.concat(show === "hide" ? expandtext : collapsetext, "</span>]");
    newBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const newBtnSpan = newBtn.querySelector("span");
      if (!newBtnSpan) return;
      newBtnSpan.textContent = newBtnSpan.innerHTML === expandtext ? collapsetext : expandtext;
      HiddenSettings(item.dataset["item"] || "", newBtnSpan.innerHTML !== expandtext);
    });
    HideTitle.append(newBtn);
  }
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0F3YWppZUhpZGUvQXdhamllSGlkZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICcuL0F3YWppZUhpZGUubGVzcyc7XG5cbigoKSA9PiB7XG5cdGNvbnN0IGRvbUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud20tQXdhamllSGlkZScpO1xuXHRjb25zdCBkb21vYmo6IFJlY29yZDxzdHJpbmcsIEhUTUxFbGVtZW50PiA9IHt9O1xuXHRjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cblx0Y29uc3QgRVNDRnVuID0gKGh0bWxTdHI6IHN0cmluZykgPT4ge1xuXHRcdHRlbXAuaW5uZXJIVE1MID0gaHRtbFN0cjtcblx0XHRyZXR1cm4gdGVtcC50ZXh0Q29udGVudDtcblx0fTtcblx0Y29uc3QgSGlkZGVuU2V0dGluZ3MgPSAoaWQ6IHN0cmluZywgdmFsdWVweCA9IGZhbHNlKSA9PiB7XG5cdFx0Y29uc3QgY3VycmVudEl0ZW0gPSBkb21vYmpbaWRdO1xuXHRcdGlmICghY3VycmVudEl0ZW0pIHJldHVybjtcblxuXHRcdGNvbnN0IEhpZGVDb250ZW50ID0gY3VycmVudEl0ZW0ucXVlcnlTZWxlY3RvcignLndtLUF3YWppZUhpZGUgPiAud20tQXdhamllSGlkZS1jb250ZW50JykgYXMgSFRNTEVsZW1lbnQ7XG5cdFx0aWYgKCFIaWRlQ29udGVudCkgcmV0dXJuO1xuXG5cdFx0aWYgKHZhbHVlcHgpIHtcblx0XHRcdEhpZGVDb250ZW50LnN0eWxlLmhlaWdodCA9ICdhdXRvJztcblx0XHRcdGNvbnN0IEhpZGVDb250ZW50SGVpZ2h0ID0gSGlkZUNvbnRlbnQuY2xpZW50SGVpZ2h0O1xuXHRcdFx0SGlkZUNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG5cdFx0XHR2b2lkIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKEhpZGVDb250ZW50KS5oZWlnaHQ7XG5cdFx0XHRIaWRlQ29udGVudC5zdHlsZS5oZWlnaHQgPSBgJHtIaWRlQ29udGVudEhlaWdodH1weGA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdEhpZGVDb250ZW50LnN0eWxlLmhlaWdodCA9ICcwcHgnO1xuXHRcdH1cblx0XHRsZXQgcGFyZW50ID0gY3VycmVudEl0ZW0ucGFyZW50RWxlbWVudDtcblx0XHR3aGlsZSAocGFyZW50KSB7XG5cdFx0XHRjb25zdCBwYXJlbnRIaWRlID0gcGFyZW50LmNsb3Nlc3QoJy53bS1Bd2FqaWVIaWRlJyk7XG5cdFx0XHRpZiAocGFyZW50SGlkZSkge1xuXHRcdFx0XHRjb25zdCBwYXJlbnRDb250ZW50ID0gcGFyZW50SGlkZS5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0XHRcdCcud20tQXdhamllSGlkZSA+IC53bS1Bd2FqaWVIaWRlLWNvbnRlbnQnXG5cdFx0XHRcdCkgYXMgSFRNTEVsZW1lbnQ7XG5cdFx0XHRcdGlmIChwYXJlbnRDb250ZW50ICYmIHBhcmVudENvbnRlbnQuc3R5bGUuaGVpZ2h0ICE9PSAnMHB4Jykge1xuXHRcdFx0XHRcdHBhcmVudENvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgUGFyZW50Q29udGVudEhlaWdodCA9IHBhcmVudENvbnRlbnQuY2xpZW50SGVpZ2h0O1xuXHRcdFx0XHRcdFx0cGFyZW50Q29udGVudC5zdHlsZS5oZWlnaHQgPSBgJHtQYXJlbnRDb250ZW50SGVpZ2h0fXB4YDtcblx0XHRcdFx0XHR9LCA1MDApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudDtcblx0XHR9XG5cdH07XG5cdGZvciAobGV0IGkgPSBkb21MaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0Y29uc3QgaXRlbSA9IGRvbUxpc3RbaV0gYXMgSFRNTEVsZW1lbnQ7XG5cdFx0aWYgKCFpdGVtKSBjb250aW51ZTtcblx0XHRpdGVtLmRhdGFzZXRbJ2l0ZW0nXSA9IFN0cmluZyhpKTtcblx0XHRkb21vYmpbU3RyaW5nKGkpXSA9IGl0ZW07XG5cdFx0Y29uc3QgSGlkZVRpdGxlID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcud20tQXdhamllSGlkZSA+IC53bS1Bd2FqaWVIaWRlLXRpdGxlJyk7XG5cdFx0Y29uc3QgSGlkZUNvbnRlbnQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy53bS1Bd2FqaWVIaWRlID4gLndtLUF3YWppZUhpZGUtY29udGVudCcpIGFzIEhUTUxFbGVtZW50O1xuXHRcdGNvbnN0IGV4cGFuZHRleHQgPSBFU0NGdW4oaXRlbS5kYXRhc2V0WydleHBhbmR0ZXh0J10gfHwgJ+WxleW8gCcpO1xuXHRcdGNvbnN0IGNvbGxhcHNldGV4dCA9IEVTQ0Z1bihpdGVtLmRhdGFzZXRbJ2NvbGxhcHNldGV4dCddIHx8ICfmlLbotbcnKTtcblx0XHRjb25zdCBzaG93ID0gaXRlbS5kYXRhc2V0WydzaG93J10gfHwgJ2hpZGUnO1xuXG5cdFx0aWYgKCFIaWRlVGl0bGUgfHwgIUhpZGVDb250ZW50KSBjb250aW51ZTtcblxuXHRcdEhpZGVDb250ZW50LnN0eWxlLmhlaWdodCA9IHNob3cgPT09ICdoaWRlJyAmJiBzaG93ID8gJzBweCcgOiBgJHtIaWRlQ29udGVudC5jbGllbnRIZWlnaHR9cHhgO1xuXG5cdFx0Y29uc3QgbmV3QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdFx0bmV3QnRuLmNsYXNzTmFtZSA9ICdhd2FqaWUtaGlkZS1idG4nO1xuXHRcdG5ld0J0bi5pbm5lckhUTUwgPSBgWzxzcGFuIHN0eWxlPVwiY29sb3I6IHZhcigtLWNvbG9yLXByb2dyZXNzaXZlLCAjMzZjKTtcIj4ke3Nob3cgPT09ICdoaWRlJyA/IGV4cGFuZHRleHQgOiBjb2xsYXBzZXRleHR9PC9zcGFuPl1gO1xuXHRcdG5ld0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0Y29uc3QgbmV3QnRuU3BhbiA9IG5ld0J0bi5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XG5cdFx0XHRpZiAoIW5ld0J0blNwYW4pIHJldHVybjtcblx0XHRcdG5ld0J0blNwYW4udGV4dENvbnRlbnQgPSBuZXdCdG5TcGFuLmlubmVySFRNTCA9PT0gZXhwYW5kdGV4dCA/IGNvbGxhcHNldGV4dCA6IGV4cGFuZHRleHQ7XG5cdFx0XHRIaWRkZW5TZXR0aW5ncyhpdGVtLmRhdGFzZXRbJ2l0ZW0nXSB8fCAnJywgbmV3QnRuU3Bhbi5pbm5lckhUTUwgIT09IGV4cGFuZHRleHQpO1xuXHRcdH0pO1xuXHRcdEhpZGVUaXRsZS5hcHBlbmQobmV3QnRuKTtcblx0fVxufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVDLE1BQU07QUFDTixRQUFNQSxVQUFVQyxTQUFTQyxpQkFBaUIsZ0JBQWdCO0FBQzFELFFBQU1DLFNBQXNDLENBQUM7QUFDN0MsUUFBTUMsT0FBT0gsU0FBU0ksY0FBYyxLQUFLO0FBRXpDLFFBQU1DLFNBQVVDLGFBQW9CO0FBQ25DSCxTQUFLSSxZQUFZRDtBQUNqQixXQUFPSCxLQUFLSztFQUNiO0FBQ0EsUUFBTUMsaUJBQWlCQSxDQUFDQyxJQUFZQyxVQUFVLFVBQVU7QUFDdkQsVUFBTUMsY0FBY1YsT0FBT1EsRUFBRTtBQUM3QixRQUFJLENBQUNFLFlBQWE7QUFFbEIsVUFBTUMsY0FBY0QsWUFBWUUsY0FBYyx5Q0FBeUM7QUFDdkYsUUFBSSxDQUFDRCxZQUFhO0FBRWxCLFFBQUlGLFNBQVM7QUFDWkUsa0JBQVlFLE1BQU1DLFNBQVM7QUFDM0IsWUFBTUMsb0JBQW9CSixZQUFZSztBQUN0Q0wsa0JBQVlFLE1BQU1DLFNBQVM7QUFDM0IsV0FBS0csT0FBT0MsaUJBQWlCUCxXQUFXLEVBQUVHO0FBQzFDSCxrQkFBWUUsTUFBTUMsU0FBQSxHQUFBSyxPQUFZSixtQkFBaUIsSUFBQTtJQUNoRCxPQUFPO0FBQ05KLGtCQUFZRSxNQUFNQyxTQUFTO0lBQzVCO0FBQ0EsUUFBSU0sU0FBU1YsWUFBWVc7QUFDekIsV0FBT0QsUUFBUTtBQUNkLFlBQU1FLGFBQWFGLE9BQU9HLFFBQVEsZ0JBQWdCO0FBQ2xELFVBQUlELFlBQVk7QUFDZixjQUFNRSxnQkFBZ0JGLFdBQVdWLGNBQ2hDLHlDQUNEO0FBQ0EsWUFBSVksaUJBQWlCQSxjQUFjWCxNQUFNQyxXQUFXLE9BQU87QUFDMURVLHdCQUFjWCxNQUFNQyxTQUFTO0FBQzdCVyxxQkFBVyxNQUFNO0FBQ2hCLGtCQUFNQyxzQkFBc0JGLGNBQWNSO0FBQzFDUSwwQkFBY1gsTUFBTUMsU0FBQSxHQUFBSyxPQUFZTyxxQkFBbUIsSUFBQTtVQUNwRCxHQUFHLEdBQUc7UUFDUDtNQUNEO0FBQ0FOLGVBQVNBLE9BQU9DO0lBQ2pCO0VBQ0Q7QUFDQSxXQUFTTSxJQUFJOUIsUUFBUStCLFNBQVMsR0FBR0QsS0FBSyxHQUFHQSxLQUFLO0FBQzdDLFVBQU1FLE9BQU9oQyxRQUFROEIsQ0FBQztBQUN0QixRQUFJLENBQUNFLEtBQU07QUFDWEEsU0FBS0MsUUFBUSxNQUFNLElBQUlDLE9BQU9KLENBQUM7QUFDL0IzQixXQUFPK0IsT0FBT0osQ0FBQyxDQUFDLElBQUlFO0FBQ3BCLFVBQU1HLFlBQVlILEtBQUtqQixjQUFjLHVDQUF1QztBQUM1RSxVQUFNRCxjQUFja0IsS0FBS2pCLGNBQWMseUNBQXlDO0FBQ2hGLFVBQU1xQixhQUFhOUIsT0FBTzBCLEtBQUtDLFFBQVEsWUFBWSxLQUFLLElBQUk7QUFDNUQsVUFBTUksZUFBZS9CLE9BQU8wQixLQUFLQyxRQUFRLGNBQWMsS0FBSyxJQUFJO0FBQ2hFLFVBQU1LLE9BQU9OLEtBQUtDLFFBQVEsTUFBTSxLQUFLO0FBRXJDLFFBQUksQ0FBQ0UsYUFBYSxDQUFDckIsWUFBYTtBQUVoQ0EsZ0JBQVlFLE1BQU1DLFNBQVNxQixTQUFTLFVBQVVBLE9BQU8sUUFBQSxHQUFBaEIsT0FBV1IsWUFBWUssY0FBWSxJQUFBO0FBRXhGLFVBQU1vQixTQUFTdEMsU0FBU0ksY0FBYyxRQUFRO0FBQzlDa0MsV0FBT0MsWUFBWTtBQUNuQkQsV0FBTy9CLFlBQUEseURBQUFjLE9BQXFFZ0IsU0FBUyxTQUFTRixhQUFhQyxjQUFZLFVBQUE7QUFDdkhFLFdBQU9FLGlCQUFpQixTQUFVQyxPQUFNO0FBQ3ZDQSxRQUFFQyxnQkFBZ0I7QUFDbEIsWUFBTUMsYUFBYUwsT0FBT3hCLGNBQWMsTUFBTTtBQUM5QyxVQUFJLENBQUM2QixXQUFZO0FBQ2pCQSxpQkFBV25DLGNBQWNtQyxXQUFXcEMsY0FBYzRCLGFBQWFDLGVBQWVEO0FBQzlFMUIscUJBQWVzQixLQUFLQyxRQUFRLE1BQU0sS0FBSyxJQUFJVyxXQUFXcEMsY0FBYzRCLFVBQVU7SUFDL0UsQ0FBQztBQUNERCxjQUFVVSxPQUFPTixNQUFNO0VBQ3hCO0FBQ0QsR0FBRzsiLAogICJuYW1lcyI6IFsiZG9tTGlzdCIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgImRvbW9iaiIsICJ0ZW1wIiwgImNyZWF0ZUVsZW1lbnQiLCAiRVNDRnVuIiwgImh0bWxTdHIiLCAiaW5uZXJIVE1MIiwgInRleHRDb250ZW50IiwgIkhpZGRlblNldHRpbmdzIiwgImlkIiwgInZhbHVlcHgiLCAiY3VycmVudEl0ZW0iLCAiSGlkZUNvbnRlbnQiLCAicXVlcnlTZWxlY3RvciIsICJzdHlsZSIsICJoZWlnaHQiLCAiSGlkZUNvbnRlbnRIZWlnaHQiLCAiY2xpZW50SGVpZ2h0IiwgIndpbmRvdyIsICJnZXRDb21wdXRlZFN0eWxlIiwgImNvbmNhdCIsICJwYXJlbnQiLCAicGFyZW50RWxlbWVudCIsICJwYXJlbnRIaWRlIiwgImNsb3Nlc3QiLCAicGFyZW50Q29udGVudCIsICJzZXRUaW1lb3V0IiwgIlBhcmVudENvbnRlbnRIZWlnaHQiLCAiaSIsICJsZW5ndGgiLCAiaXRlbSIsICJkYXRhc2V0IiwgIlN0cmluZyIsICJIaWRlVGl0bGUiLCAiZXhwYW5kdGV4dCIsICJjb2xsYXBzZXRleHQiLCAic2hvdyIsICJuZXdCdG4iLCAiY2xhc3NOYW1lIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiZSIsICJzdG9wUHJvcGFnYXRpb24iLCAibmV3QnRuU3BhbiIsICJhcHBlbmQiXQp9Cg==
