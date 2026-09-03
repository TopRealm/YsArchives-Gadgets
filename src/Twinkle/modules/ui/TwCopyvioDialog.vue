<script setup lang="ts">
import {CdxCheckbox, CdxField, CdxTextArea, CdxTextInput} from '@wikimedia/codex';
import {computed, ref, watch} from 'vue';
import TwDialog from './TwDialog.vue';
import TwStatus from './TwStatus.vue';
import {uls} from './useUls';

interface TwStatusExposed {
	getStatusRoot: () => HTMLElement | null;
}

defineProps<{
	title: string;
	footerLinks: {
		text: string;
		href: string;
	}[];
}>();

const emit = defineEmits<{
	submit: [
		params: {
			source: string;
			g4: boolean;
			g4_pagename: string;
			notify: boolean;
		},
		statusContainer: HTMLElement | null,
	];
	close: [];
}>();

const open = ref(true);
const source = ref('');
const g4 = ref(false);
const g4Pagename = ref('');
const notify = ref(true);
const submitting = ref(false);
const statusRef = ref<TwStatusExposed | null>(null);

const primaryAction = computed(() => ({
	label: uls('提交', '提交'),
	actionType: 'progressive' as const,
	disabled: submitting.value,
}));

const submit = () => {
	if (submitting.value) {
		return;
	}
	if (!source.value.trim()) {
		void mw.notify(uls('请指定侵权来源', '請指定侵權來源'), {
			type: 'warn',
			tag: 'twinklecopyvio',
		});
		return;
	}
	submitting.value = true;
	emit(
		'submit',
		{
			source: source.value.trim(),
			g4: g4.value,
			g4_pagename: g4Pagename.value.trim(),
			notify: notify.value,
		},
		statusRef.value?.getStatusRoot() ?? null
	);
};

watch(open, (value) => {
	if (!value) {
		emit('close');
	}
});
</script>

<template>
	<tw-dialog
		:open="open"
		:title="title"
		script-name="Twinkle"
		:footer-links="footerLinks"
		:primary-action="primaryAction"
		@update:open="open = $event"
		@primary="submit"
	>
		<cdx-field>
			<template #label>{{ uls('侵权来源：', '侵權來源：') }}</template>
			<cdx-text-area v-model="source" :disabled="submitting" />
		</cdx-field>
		<cdx-checkbox v-model="g4" :disabled="submitting">
			{{
				uls('CSD G4: 曾经根据侵权审核删除后又重新创建的内容', 'CSD G4: 曾經根據侵權審核刪除後又重新建立的內容')
			}}
		</cdx-checkbox>
		<cdx-field v-if="g4">
			<template #label>{{ uls('前次删除的页面名称', '前次刪除的頁面名稱') }}</template>
			<cdx-text-input v-model="g4Pagename" :disabled="submitting" />
		</cdx-field>
		<cdx-checkbox v-model="notify" :disabled="submitting">
			{{ uls('通知页面创建者', '通知頁面建立者') }}
		</cdx-checkbox>
		<tw-status ref="statusRef" />
	</tw-dialog>
</template>
