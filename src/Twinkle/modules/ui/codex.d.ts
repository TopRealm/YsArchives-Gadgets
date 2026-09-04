/**
 * Minimal type declarations for the `@wikimedia/codex` ResourceLoader module.
 *
 * Only the components used by Twinkle are declared here. MediaWiki bundles
 * Codex since 1.39; these types follow the Codex 1.x API surface (Vue 3,
 * `v-model` bindings). Extend this file when migrating more modules.
 *
 * @see {@link https://www.mediawiki.org/wiki/Codex}
 */
declare module '@wikimedia/codex' {
	export interface ModalAction {
		label: string;
		actionType?: 'default' | 'progressive' | 'destructive' | undefined;
		disabled?: boolean | undefined;
	}

	export interface MenuItemData {
		value: string | number;
		label?: string | undefined;
		disabled?: boolean | undefined;
		description?: string | undefined;
		icon?: unknown;
	}

	export const CdxDialog: new () => {
		$props: {
			open: boolean;
			title: string;
			subtitle?: string | undefined;
			hideTitle?: boolean | undefined;
			useCloseButton?: boolean | undefined;
			closeButtonLabel?: string | undefined;
			primaryAction?: ModalAction | undefined;
			defaultAction?: ModalAction | undefined;
			stackedActions?: boolean | undefined;
			fixedHeight?: boolean | number | undefined;
		};
		$emit: {
			(event: 'update:open', value: boolean): void;
			(event: 'primary'): void;
			(event: 'default'): void;
		};
	};

	export const CdxField: new () => {
		$props: {
			isFieldset?: boolean | undefined;
			optionalFlag?: string | undefined;
			optionalLabel?: string | undefined;
		};
	};

	export const CdxTextInput: new () => {
		$props: {
			modelValue: string | number;
			inputType?: 'text' | 'search' | 'number' | 'email' | 'password' | 'url' | undefined;
			placeholder?: string | undefined;
			disabled?: boolean | undefined;
		};
		$emit: {
			(event: 'update:modelValue', value: string | number): void;
		};
	};

	export const CdxButton: new () => {
		$props: {
			action?: 'default' | 'progressive' | 'destructive' | undefined;
			weight?: 'normal' | 'primary' | 'quiet' | undefined;
			size?: 'medium' | 'large' | undefined;
			disabled?: boolean | undefined;
		};
		$emit: {
			(event: 'click'): void;
		};
	};

	export const CdxCheckbox: new () => {
		$props: {
			modelValue: boolean | string[];
			disabled?: boolean | undefined;
		};
		$emit: {
			(event: 'update:modelValue', value: boolean | string[]): void;
		};
	};

	export const CdxRadio: new () => {
		$props: {
			modelValue: string | number | boolean;
			inputValue?: string | number | boolean | undefined;
			name: string;
			disabled?: boolean | undefined;
		};
		$emit: {
			(event: 'update:modelValue', value: string | number | boolean): void;
		};
	};

	export const CdxTextArea: new () => {
		$props: {
			modelValue: string;
			disabled?: boolean | undefined;
		};
		$emit: {
			(event: 'update:modelValue', value: string): void;
		};
	};

	export const CdxSelect: new () => {
		$props: {
			selected: string | number | null;
			menuItems: MenuItemData[];
			defaultLabel?: string | undefined;
			disabled?: boolean | undefined;
		};
		$emit: {
			(event: 'update:selected', value: string | number | null): void;
		};
	};

	export const CdxMessage: new () => {
		$props: {
			type?: 'notice' | 'warning' | 'error' | 'success' | undefined;
			dismissButtonLabel?: string | undefined;
		};
	};

	export const CdxProgressBar: new () => {
		$props: {
			ariaLabel?: string | undefined;
			inline?: boolean | undefined;
		};
	};

	export const CdxLookup: new () => {
		$props: {
			selected: string | number | null;
			menuItems: MenuItemData[];
			inputValue?: string | number | null | undefined;
			initialInputValue?: string | number | undefined;
			disabled?: boolean | undefined;
			menuConfig?: Record<string, unknown> | undefined;
			status?: 'default' | 'error' | undefined;
		};
		$emit: {
			(event: 'update:selected', value: string | number | null): void;
			(event: 'update:input-value', value: string | number | null): void;
			(event: 'load-more'): void;
			(event: 'input', value: string): void;
			(event: 'change', value: unknown): void;
			(event: 'focus', value: unknown): void;
			(event: 'blur', value: unknown): void;
		};
	};
}
