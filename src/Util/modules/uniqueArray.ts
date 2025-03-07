type UniqueArray = typeof uniqueArray;

const uniqueArray = function uniqueArray<T>(args: T[]): T[] {
	/**!
	 * SPDX-License-Identifier: CC-BY-SA-4.0
	 *
	 * @source {@link https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array/922982}
	 * @license CC-BY-SA-4.0
	 */
	const result: typeof args = [];
	for (const item of args) {
		if (!result.includes(item)) {
			result[result.length] = item; // Replace Array#push to avoid core-js polyfilling
		}
	}
	return result;
};

export {type UniqueArray, uniqueArray};
