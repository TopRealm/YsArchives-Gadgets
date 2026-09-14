/**
 * Bridge for `wgULS` (simplified/traditional Chinese interface switch)
 * inside Vue components.
 *
 * `wgULS` is provided by the target wiki's gadget infrastructure and is not
 * declared by types-mediawiki, so it is declared globally here. The variant
 * is fixed at page load (switching variants reloads the page), so no
 * reactivity is required: call `uls()` during `setup()`.
 */

declare global {
	const wgULS: (simplified: string, traditional: string) => string;
}

export const uls = (simplified: string, traditional: string): string => {
	return typeof wgULS === 'function' ? wgULS(simplified, traditional) : simplified;
};
