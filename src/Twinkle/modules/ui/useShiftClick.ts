/**
 * Shift-click batch checkbox support, ported from
 * `Morebits.checkboxShiftClickSupport`.
 *
 * Usage: bind the returned handler to the container element's `@click`
 * event, e.g. `<div @click="onShiftClick">…checkboxes…</div>`.
 * Clicking a checkbox while holding Shift toggles every checkbox between
 * the previously clicked one and the current one to the current state.
 */
export const useShiftClick = () => {
	let lastCheckbox: HTMLInputElement | null = null;

	const onShiftClick = (event: MouseEvent) => {
		const target = event.target as HTMLElement;
		const thisCb = target.closest<HTMLInputElement>('input[type="checkbox"]');
		if (!thisCb) {
			return;
		}
		if (event.shiftKey && lastCheckbox !== null) {
			const container = event.currentTarget as HTMLElement;
			const cbs = [...container.querySelectorAll<HTMLInputElement>('input[type="checkbox"]')];
			const index = cbs.indexOf(thisCb);
			const lastIndex = cbs.indexOf(lastCheckbox);
			if (index !== -1 && lastIndex !== -1) {
				// Inspired by wikibits.
				const endState = thisCb.checked;
				let start: number;
				let finish: number;
				if (index < lastIndex) {
					start = index + 1;
					finish = lastIndex;
				} else {
					start = lastIndex;
					finish = index - 1;
				}
				for (let i = start; i <= finish; i++) {
					const checkbox = cbs[i];
					if (checkbox && checkbox.checked !== endState) {
						checkbox.click();
					}
				}
			}
		}
		lastCheckbox = thisCb;
	};

	return {onShiftClick};
};
