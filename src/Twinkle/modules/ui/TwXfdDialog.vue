<script setup lang="ts">
import {CdxCheckbox, CdxField, CdxSelect, CdxTextArea, CdxTextInput, type MenuItemData} from '@wikimedia/codex';
import {computed, ref, watch} from 'vue';
import TwDialog from './TwDialog.vue';
import TwStatus from './TwStatus.vue';
import {uls} from './useUls';

interface TwStatusExposed {
	getStatusRoot: () => HTMLElement | null;
}

const props = defineProps<{
	title: string;
	defaultCategory: 'afd' | 'ffd';
	showFwdCsd: boolean;
	initialXfdCat: string;
	rememberCategory: boolean;
	fameDefaultReason: string;
	substubDefaultReason: string;
	fwdcsdReason: string;
	showNoinclude: boolean;
	noincludeDisabled: boolean;
	footerLinks: {
		text: string;
		href: string;
	}[];
}>();

const emit = defineEmits<{
	submit: [
		params: {
			category: string;
			notify: boolean;
			noinclude: boolean;
			xfdcat: string;
			mergeinto: string;
			xfdreason: string;
			fwdcsdreason: string;
		},
		statusContainer: HTMLElement | null,
	];
	close: [];
}>();

const open = ref(true);
const category = ref<'afd' | 'ffd'>(props.defaultCategory);
const notify = ref(true);
const noinclude = ref(props.showNoinclude);
const xfdcat = ref(props.initialXfdCat);
const mergeinto = ref('');
const fwdcsdreason = ref('');
const submitting = ref(false);
const statusRef = ref<TwStatusExposed | null>(null);

const initialReason = (() => {
	switch (props.initialXfdCat) {
		case 'fwdcsd':
			return props.fwdcsdReason;
		case 'fame':
			return props.fameDefaultReason;
		case 'substub':
			return props.substubDefaultReason;
		default:
			return '';
	}
})();
const xfdreason = ref(initialReason);

const categoryItems: MenuItemData[] = [
	{value: 'afd', label: uls('页面存废讨论', '頁面存廢討論')},
	{value: 'ffd', label: uls('文件存废讨论', '檔案存廢討論')},
];

const xfdcatItems = computed<MenuItemData[]>(() => {
	const items: MenuItemData[] = [
		{value: 'delete', label: uls('删除', '刪除')},
		{value: 'merge', label: uls('合并', '合併')},
	];
	if (props.showFwdCsd) {
		items.push({value: 'fwdcsd', label: uls('转交自快速删除候选', '轉交自快速刪除候選')});
	}
	items.push(
		{value: 'fame', label: uls('批量关注度提删', '批次關注度提刪')},
		{value: 'substub', label: uls('批量小小作品提删', '批次小小作品提刪')},
		{value: 'batch', label: uls('批量其他提删', '批次其他提刪')}
	);
	return items;
});

const showXfdcat = computed(() => category.value === 'afd');
const showNoincludeField = computed(() => category.value === 'afd');
const showMergeinto = computed(() => category.value === 'afd' && ['merge', 'fwdcsd'].includes(xfdcat.value));
const showFwdcsdReason = computed(() => category.value === 'afd' && xfdcat.value === 'fwdcsd');
const mergeintoLabel = computed(() => (xfdcat.value === 'fwdcsd' ? '提交人：' : uls('合并到：', '合併到：')));
const noincludeLabel = uls('使用<noinclude>包裹模板', '使用<noinclude>包裹模板');

// Faithful port of Twinkle.xfd.callback.change_afd_category.
watch(xfdcat, () => {
	switch (xfdcat.value) {
		case 'fwdcsd':
			xfdreason.value = props.fwdcsdReason;
			break;
		case 'fame':
			xfdreason.value = props.fameDefaultReason;
			break;
		case 'substub':
			xfdreason.value = props.substubDefaultReason;
			break;
		default:
			break;
	}
	if (props.rememberCategory) {
		localStorage.setItem('Twinkle_afdCategory', xfdcat.value);
	}
});

// Faithful port of the reset at the end of Twinkle.xfd.callback.change_category.
watch(category, () => {
	notify.value = true;
});

const primaryAction = computed(() => ({
	label: uls('提交', '提交'),
	actionType: 'progressive' as const,
	disabled: submitting.value,
}));

const submit = () => {
	if (submitting.value) {
		return;
	}
	if (category.value === 'afd' && xfdcat.value === 'merge' && !mergeinto.value.trim()) {
		void mw.notify(uls('请提供合并目标！', '請提供合併目標！'), {
			type: 'warn',
			tag: 'twinklexfd',
		});
		return;
	}
	submitting.value = true;
	emit(
		'submit',
		{
			category: category.value,
			notify: notify.value,
			noinclude: noinclude.value,
			xfdcat: xfdcat.value,
			mergeinto: mergeinto.value.trim(),
			xfdreason: xfdreason.value,
			fwdcsdreason: fwdcsdreason.value,
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
			<template #label>{{ uls('提交类型：', '提交類別：') }}</template>
			<cdx-select v-model:selected="category" :menu-items="categoryItems" :disabled="submitting" />
		</cdx-field>
		<cdx-checkbox v-model="notify" :disabled="submitting">
			{{ uls('如可能，通知页面创建者', '如可能，通知頁面建立者') }}
		</cdx-checkbox>
		<cdx-field is-fieldset v-if="showXfdcat">
			<template #label>{{ uls('页面存废讨论', '頁面存廢討論') }}</template>
			<cdx-checkbox v-if="showNoincludeField" v-model="noinclude" :disabled="submitting || noincludeDisabled">
				{{ noincludeLabel }}
			</cdx-checkbox>
			<cdx-field>
				<template #label>{{ uls('选择提删类型：', '選擇提刪類別：') }}</template>
				<cdx-select v-model:selected="xfdcat" :menu-items="xfdcatItems" :disabled="submitting" />
			</cdx-field>
			<cdx-field v-if="showMergeinto">
				<template #label>{{ mergeintoLabel }}</template>
				<cdx-text-input v-model="mergeinto" :disabled="submitting" />
			</cdx-field>
			<cdx-field>
				<template #label>{{ uls('提删理由：', '提刪理由：') }}</template>
				<cdx-text-area v-model="xfdreason" :disabled="submitting" />
			</cdx-field>
			<cdx-field v-if="showFwdcsdReason">
				<template #label>{{ uls('转交理由：', '轉交理由：') }}</template>
				<cdx-text-area v-model="fwdcsdreason" :disabled="submitting" />
			</cdx-field>
		</cdx-field>
		<cdx-field is-fieldset v-else>
			<template #label>{{ uls('文件存废讨论', '檔案存廢討論') }}</template>
			<cdx-field>
				<template #label>{{ uls('提删理由：', '提刪理由：') }}</template>
				<cdx-text-area v-model="xfdreason" :disabled="submitting" />
			</cdx-field>
		</cdx-field>
		<tw-status ref="statusRef" />
	</tw-dialog>
</template>
