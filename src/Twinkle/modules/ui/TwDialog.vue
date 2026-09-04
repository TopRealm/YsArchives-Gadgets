<script setup lang="ts">
import {CdxDialog} from '@wikimedia/codex';
import {computed} from 'vue';

const props = defineProps<{
	open: boolean;
	title: string;
	scriptName?: string;
	subtitle?: string;
	footerLinks?: {
		text: string;
		href: string;
	}[];
	primaryAction?:
		| {
				label: string;
				actionType?: 'progressive' | 'destructive';
				disabled?: boolean;
		  }
		| undefined;
	defaultAction?: {
		label: string;
		disabled?: boolean;
	};
}>();

const emit = defineEmits<{
	'update:open': [value: boolean];
	primary: [];
	default: [];
}>();

const resolvedTitle = computed(() => (props.scriptName ? `${props.scriptName} \u00B7 ${props.title}` : props.title));
</script>

<template>
	<cdx-dialog
		:open="open"
		:title="resolvedTitle"
		:subtitle="subtitle"
		:primary-action="primaryAction"
		:default-action="defaultAction"
		:use-close-button="true"
		@update:open="emit('update:open', $event)"
		@primary="emit('primary')"
		@default="emit('default')"
	>
		<template v-if="footerLinks && footerLinks.length > 0" #footer-text>
			<span v-for="(link, index) in footerLinks" :key="link.href">
				<span v-if="index > 0"> • </span>
				<a :href="link.href" target="_blank" rel="noopener noreferrer">{{ link.text }}</a>
			</span>
		</template>
		<slot />
	</cdx-dialog>
</template>

<style lang="less">
/*
 * Dialog safety rules (global, because CdxDialog teleports its DOM to
 * <body>): keep the dialog and its dropdown menus inside the viewport so
 * nothing overflows the screen on small displays. `dvh` accounts for
 * dynamic mobile browser chrome, with `vh` as a fallback.
 */
.cdx-dialog {
	max-height: calc(100vh - 16px);
	max-height: calc(100dvh - 16px);
}

.cdx-dialog .cdx-dialog__body {
	overflow-y: auto;
	-webkit-overflow-scrolling: touch;
}

.cdx-dialog .cdx-menu__listbox {
	max-height: 18em;
}

@media (max-width: 767px) {
	.cdx-dialog {
		width: calc(100% - 16px);
	}

	.cdx-dialog .cdx-dialog__header {
		padding: 12px 16px;
	}

	.cdx-dialog .cdx-dialog__body {
		padding: 12px 16px;
	}

	.cdx-dialog .cdx-dialog__footer {
		padding: 12px 16px;
		padding-bottom: max(12px, env(safe-area-inset-bottom));
	}
}
</style>
