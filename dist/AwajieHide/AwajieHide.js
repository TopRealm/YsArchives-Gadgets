/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0|import=no}}'
 * @author 顶呱呱的阿杰 
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
    const expandtext = item.dataset["expandtext"] || "展开";
    const collapsetext = item.dataset["collapsetext"] || "收起";
    const show = item.dataset["show"] || "hide";
    if (!HideTitle || !HideContent) continue;
    HideContent.style.height = show === "hide" && show ? "0px" : "".concat(HideContent.clientHeight, "px");
    const newBtn = document.createElement("button");
    newBtn.className = "awajie-hide-btn";
    newBtn.textContent = '[<span style="color: var(--color-progressive, #36c);">'.concat(show === "hide" ? expandtext : collapsetext, "</span>]");
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0F3YWppZUhpZGUvQXdhamllSGlkZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiKCgpID0+IHtcblx0Y29uc3QgZG9tTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53bS1Bd2FqaWVIaWRlJyk7XG5cdGNvbnN0IGRvbW9iajogUmVjb3JkPHN0cmluZywgSFRNTEVsZW1lbnQ+ID0ge307XG5cblx0Y29uc3QgSGlkZGVuU2V0dGluZ3MgPSAoaWQ6IHN0cmluZywgdmFsdWVweCA9IGZhbHNlKSA9PiB7XG5cdFx0Y29uc3QgY3VycmVudEl0ZW0gPSBkb21vYmpbaWRdO1xuXHRcdGlmICghY3VycmVudEl0ZW0pIHJldHVybjtcblxuXHRcdGNvbnN0IEhpZGVDb250ZW50ID0gY3VycmVudEl0ZW0ucXVlcnlTZWxlY3RvcignLndtLUF3YWppZUhpZGUgPiAud20tQXdhamllSGlkZS1jb250ZW50JykgYXMgSFRNTEVsZW1lbnQ7XG5cdFx0aWYgKCFIaWRlQ29udGVudCkgcmV0dXJuO1xuXG5cdFx0aWYgKHZhbHVlcHgpIHtcblx0XHRcdEhpZGVDb250ZW50LnN0eWxlLmhlaWdodCA9ICdhdXRvJztcblx0XHRcdGNvbnN0IEhpZGVDb250ZW50SGVpZ2h0ID0gSGlkZUNvbnRlbnQuY2xpZW50SGVpZ2h0O1xuXHRcdFx0SGlkZUNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG5cdFx0XHR2b2lkIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKEhpZGVDb250ZW50KS5oZWlnaHQ7XG5cdFx0XHRIaWRlQ29udGVudC5zdHlsZS5oZWlnaHQgPSBgJHtIaWRlQ29udGVudEhlaWdodH1weGA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdEhpZGVDb250ZW50LnN0eWxlLmhlaWdodCA9ICcwcHgnO1xuXHRcdH1cblx0XHRsZXQgcGFyZW50ID0gY3VycmVudEl0ZW0ucGFyZW50RWxlbWVudDtcblx0XHR3aGlsZSAocGFyZW50KSB7XG5cdFx0XHRjb25zdCBwYXJlbnRIaWRlID0gcGFyZW50LmNsb3Nlc3QoJy53bS1Bd2FqaWVIaWRlJyk7XG5cdFx0XHRpZiAocGFyZW50SGlkZSkge1xuXHRcdFx0XHRjb25zdCBwYXJlbnRDb250ZW50ID0gcGFyZW50SGlkZS5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0XHRcdCcud20tQXdhamllSGlkZSA+IC53bS1Bd2FqaWVIaWRlLWNvbnRlbnQnXG5cdFx0XHRcdCkgYXMgSFRNTEVsZW1lbnQ7XG5cdFx0XHRcdGlmIChwYXJlbnRDb250ZW50ICYmIHBhcmVudENvbnRlbnQuc3R5bGUuaGVpZ2h0ICE9PSAnMHB4Jykge1xuXHRcdFx0XHRcdHBhcmVudENvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgUGFyZW50Q29udGVudEhlaWdodCA9IHBhcmVudENvbnRlbnQuY2xpZW50SGVpZ2h0O1xuXHRcdFx0XHRcdFx0cGFyZW50Q29udGVudC5zdHlsZS5oZWlnaHQgPSBgJHtQYXJlbnRDb250ZW50SGVpZ2h0fXB4YDtcblx0XHRcdFx0XHR9LCA1MDApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudDtcblx0XHR9XG5cdH07XG5cdGZvciAobGV0IGkgPSBkb21MaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0Y29uc3QgaXRlbSA9IGRvbUxpc3RbaV0gYXMgSFRNTEVsZW1lbnQ7XG5cdFx0aWYgKCFpdGVtKSBjb250aW51ZTtcblx0XHRpdGVtLmRhdGFzZXRbJ2l0ZW0nXSA9IFN0cmluZyhpKTtcblx0XHRkb21vYmpbU3RyaW5nKGkpXSA9IGl0ZW07XG5cdFx0Y29uc3QgSGlkZVRpdGxlID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcud20tQXdhamllSGlkZSA+IC53bS1Bd2FqaWVIaWRlLXRpdGxlJyk7XG5cdFx0Y29uc3QgSGlkZUNvbnRlbnQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy53bS1Bd2FqaWVIaWRlID4gLndtLUF3YWppZUhpZGUtY29udGVudCcpIGFzIEhUTUxFbGVtZW50O1xuXHRcdGNvbnN0IGV4cGFuZHRleHQgPSBpdGVtLmRhdGFzZXRbJ2V4cGFuZHRleHQnXSB8fCAn5bGV5byAJztcblx0XHRjb25zdCBjb2xsYXBzZXRleHQgPSBpdGVtLmRhdGFzZXRbJ2NvbGxhcHNldGV4dCddIHx8ICfmlLbotbcnO1xuXHRcdGNvbnN0IHNob3cgPSBpdGVtLmRhdGFzZXRbJ3Nob3cnXSB8fCAnaGlkZSc7XG5cblx0XHRpZiAoIUhpZGVUaXRsZSB8fCAhSGlkZUNvbnRlbnQpIGNvbnRpbnVlO1xuXG5cdFx0SGlkZUNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gc2hvdyA9PT0gJ2hpZGUnICYmIHNob3cgPyAnMHB4JyA6IGAke0hpZGVDb250ZW50LmNsaWVudEhlaWdodH1weGA7XG5cblx0XHRjb25zdCBuZXdCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0XHRuZXdCdG4uY2xhc3NOYW1lID0gJ2F3YWppZS1oaWRlLWJ0bic7XG5cdFx0bmV3QnRuLnRleHRDb250ZW50ID0gYFs8c3BhbiBzdHlsZT1cImNvbG9yOiB2YXIoLS1jb2xvci1wcm9ncmVzc2l2ZSwgIzM2Yyk7XCI+JHtzaG93ID09PSAnaGlkZScgPyBleHBhbmR0ZXh0IDogY29sbGFwc2V0ZXh0fTwvc3Bhbj5dYDtcblx0XHRuZXdCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdGNvbnN0IG5ld0J0blNwYW4gPSBuZXdCdG4ucXVlcnlTZWxlY3Rvcignc3BhbicpO1xuXHRcdFx0aWYgKCFuZXdCdG5TcGFuKSByZXR1cm47XG5cdFx0XHRuZXdCdG5TcGFuLnRleHRDb250ZW50ID0gbmV3QnRuU3Bhbi5pbm5lckhUTUwgPT09IGV4cGFuZHRleHQgPyBjb2xsYXBzZXRleHQgOiBleHBhbmR0ZXh0O1xuXHRcdFx0SGlkZGVuU2V0dGluZ3MoaXRlbS5kYXRhc2V0WydpdGVtJ10gfHwgJycsIG5ld0J0blNwYW4uaW5uZXJIVE1MICE9PSBleHBhbmR0ZXh0KTtcblx0XHR9KTtcblx0XHRIaWRlVGl0bGUuYXBwZW5kKG5ld0J0bik7XG5cdH1cbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQyxNQUFNO0FBQ04sUUFBTUEsVUFBVUMsU0FBU0MsaUJBQWlCLGdCQUFnQjtBQUMxRCxRQUFNQyxTQUFzQyxDQUFDO0FBRTdDLFFBQU1DLGlCQUFpQkEsQ0FBQ0MsSUFBWUMsVUFBVSxVQUFVO0FBQ3ZELFVBQU1DLGNBQWNKLE9BQU9FLEVBQUU7QUFDN0IsUUFBSSxDQUFDRSxZQUFhO0FBRWxCLFVBQU1DLGNBQWNELFlBQVlFLGNBQWMseUNBQXlDO0FBQ3ZGLFFBQUksQ0FBQ0QsWUFBYTtBQUVsQixRQUFJRixTQUFTO0FBQ1pFLGtCQUFZRSxNQUFNQyxTQUFTO0FBQzNCLFlBQU1DLG9CQUFvQkosWUFBWUs7QUFDdENMLGtCQUFZRSxNQUFNQyxTQUFTO0FBQzNCLFdBQUtHLE9BQU9DLGlCQUFpQlAsV0FBVyxFQUFFRztBQUMxQ0gsa0JBQVlFLE1BQU1DLFNBQUEsR0FBQUssT0FBWUosbUJBQWlCLElBQUE7SUFDaEQsT0FBTztBQUNOSixrQkFBWUUsTUFBTUMsU0FBUztJQUM1QjtBQUNBLFFBQUlNLFNBQVNWLFlBQVlXO0FBQ3pCLFdBQU9ELFFBQVE7QUFDZCxZQUFNRSxhQUFhRixPQUFPRyxRQUFRLGdCQUFnQjtBQUNsRCxVQUFJRCxZQUFZO0FBQ2YsY0FBTUUsZ0JBQWdCRixXQUFXVixjQUNoQyx5Q0FDRDtBQUNBLFlBQUlZLGlCQUFpQkEsY0FBY1gsTUFBTUMsV0FBVyxPQUFPO0FBQzFEVSx3QkFBY1gsTUFBTUMsU0FBUztBQUM3QlcscUJBQVcsTUFBTTtBQUNoQixrQkFBTUMsc0JBQXNCRixjQUFjUjtBQUMxQ1EsMEJBQWNYLE1BQU1DLFNBQUEsR0FBQUssT0FBWU8scUJBQW1CLElBQUE7VUFDcEQsR0FBRyxHQUFHO1FBQ1A7TUFDRDtBQUNBTixlQUFTQSxPQUFPQztJQUNqQjtFQUNEO0FBQ0EsV0FBU00sSUFBSXhCLFFBQVF5QixTQUFTLEdBQUdELEtBQUssR0FBR0EsS0FBSztBQUM3QyxVQUFNRSxPQUFPMUIsUUFBUXdCLENBQUM7QUFDdEIsUUFBSSxDQUFDRSxLQUFNO0FBQ1hBLFNBQUtDLFFBQVEsTUFBTSxJQUFJQyxPQUFPSixDQUFDO0FBQy9CckIsV0FBT3lCLE9BQU9KLENBQUMsQ0FBQyxJQUFJRTtBQUNwQixVQUFNRyxZQUFZSCxLQUFLakIsY0FBYyx1Q0FBdUM7QUFDNUUsVUFBTUQsY0FBY2tCLEtBQUtqQixjQUFjLHlDQUF5QztBQUNoRixVQUFNcUIsYUFBYUosS0FBS0MsUUFBUSxZQUFZLEtBQUs7QUFDakQsVUFBTUksZUFBZUwsS0FBS0MsUUFBUSxjQUFjLEtBQUs7QUFDckQsVUFBTUssT0FBT04sS0FBS0MsUUFBUSxNQUFNLEtBQUs7QUFFckMsUUFBSSxDQUFDRSxhQUFhLENBQUNyQixZQUFhO0FBRWhDQSxnQkFBWUUsTUFBTUMsU0FBU3FCLFNBQVMsVUFBVUEsT0FBTyxRQUFBLEdBQUFoQixPQUFXUixZQUFZSyxjQUFZLElBQUE7QUFFeEYsVUFBTW9CLFNBQVNoQyxTQUFTaUMsY0FBYyxRQUFRO0FBQzlDRCxXQUFPRSxZQUFZO0FBQ25CRixXQUFPRyxjQUFBLHlEQUFBcEIsT0FBdUVnQixTQUFTLFNBQVNGLGFBQWFDLGNBQVksVUFBQTtBQUN6SEUsV0FBT0ksaUJBQWlCLFNBQVVDLE9BQU07QUFDdkNBLFFBQUVDLGdCQUFnQjtBQUNsQixZQUFNQyxhQUFhUCxPQUFPeEIsY0FBYyxNQUFNO0FBQzlDLFVBQUksQ0FBQytCLFdBQVk7QUFDakJBLGlCQUFXSixjQUFjSSxXQUFXQyxjQUFjWCxhQUFhQyxlQUFlRDtBQUM5RTFCLHFCQUFlc0IsS0FBS0MsUUFBUSxNQUFNLEtBQUssSUFBSWEsV0FBV0MsY0FBY1gsVUFBVTtJQUMvRSxDQUFDO0FBQ0RELGNBQVVhLE9BQU9ULE1BQU07RUFDeEI7QUFDRCxHQUFHOyIsCiAgIm5hbWVzIjogWyJkb21MaXN0IiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAiZG9tb2JqIiwgIkhpZGRlblNldHRpbmdzIiwgImlkIiwgInZhbHVlcHgiLCAiY3VycmVudEl0ZW0iLCAiSGlkZUNvbnRlbnQiLCAicXVlcnlTZWxlY3RvciIsICJzdHlsZSIsICJoZWlnaHQiLCAiSGlkZUNvbnRlbnRIZWlnaHQiLCAiY2xpZW50SGVpZ2h0IiwgIndpbmRvdyIsICJnZXRDb21wdXRlZFN0eWxlIiwgImNvbmNhdCIsICJwYXJlbnQiLCAicGFyZW50RWxlbWVudCIsICJwYXJlbnRIaWRlIiwgImNsb3Nlc3QiLCAicGFyZW50Q29udGVudCIsICJzZXRUaW1lb3V0IiwgIlBhcmVudENvbnRlbnRIZWlnaHQiLCAiaSIsICJsZW5ndGgiLCAiaXRlbSIsICJkYXRhc2V0IiwgIlN0cmluZyIsICJIaWRlVGl0bGUiLCAiZXhwYW5kdGV4dCIsICJjb2xsYXBzZXRleHQiLCAic2hvdyIsICJuZXdCdG4iLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAidGV4dENvbnRlbnQiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJlIiwgInN0b3BQcm9wYWdhdGlvbiIsICJuZXdCdG5TcGFuIiwgImlubmVySFRNTCIsICJhcHBlbmQiXQp9Cg==
