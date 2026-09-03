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
	primaryAction?: {
		label: string;
		actionType?: 'progressive' | 'destructive';
		disabled?: boolean;
	};
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
				<span v-if="index > 0"> \u2022 </span>
				<a :href="link.href" target="_blank" rel="noopener noreferrer">{{ link.text }}</a>
			</span>
		</template>
		<slot />
	</cdx-dialog>
</template>
