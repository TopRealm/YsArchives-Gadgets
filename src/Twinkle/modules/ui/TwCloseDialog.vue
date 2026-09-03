<script setup lang="ts">
import {CdxCheckbox, CdxField, CdxSelect, CdxTextInput, type MenuItemData} from '@wikimedia/codex';
import {computed, ref, watch} from 'vue';
import TwDialog from './TwDialog.vue';
import TwStatus from './TwStatus.vue';
import {uls} from './useUls';

interface TwStatusExposed {
	getStatusRoot: () => HTMLElement | null;
}

interface CloseOption {
	value: string;
	label: string;
	action: string;
	disabled?: boolean;
}

interface CloseGroup {
	label: string;
	items: CloseOption[];
}

interface SubmitParams {
	title: string;
	code: string | null;
	remark: string;
	sdreason: string;
	section: number;
	parentSection: undefined;
	messageData: CloseOption;
	talkpage: boolean;
	redirects: boolean;
	noop: boolean;
}

const props = defineProps<{
	title: string;
	section: string;
	groups: CloseGroup[];
	defaultCode?: string;
	initialNoop: boolean;
	showTalkpage: boolean;
	footerLinks: {
		text: string;
		href: string;
	}[];
}>();

const emit = defineEmits<{
	submit: [params: SubmitParams, statusContainer: HTMLElement | null];
	close: [];
}>();

const open = ref(true);
const selectedCode = ref<string | number | null>(props.defaultCode ?? null);
const sdreason = ref('');
const remark = ref('');
const noop = ref(props.initialNoop);
const talkpage = ref(true);
const redirects = ref(true);
const submitting = ref(false);
const statusRef = ref<TwStatusExposed | null>(null);

const options = computed(() => props.groups.flatMap((group) => group.items));
const currentOption = computed(() => options.value.find((item) => item.value === selectedCode.value) ?? null);
const currentAction = computed(() => currentOption.value?.action);
const noopDisabled = computed(() => props.initialNoop || currentAction.value === 'noop');
const talkpageDisabled = computed(
	() => noop.value || props.initialNoop || currentAction.value === 'noop' || currentAction.value === 'keep'
);
const redirectsDisabled = computed(
	() => noop.value || props.initialNoop || currentAction.value === 'noop' || currentAction.value === 'keep'
);
const showSdreason = computed(() => selectedCode.value === 'sd' && currentAction.value !== 'noop' && !noop.value);

// The Select component shipped with the target wiki's Codex does not support
// menu groups, so flatten the groups and insert a disabled group-heading item
// before each group to emulate the original <optgroup> layout.
const menuItems = computed<MenuItemData[]>(() => {
	const items: MenuItemData[] = [];
	for (const [groupIndex, group] of props.groups.entries()) {
		items.push({
			value: `__group_${groupIndex}`,
			label: group.label,
			disabled: true,
		});
		for (const item of group.items) {
			const menuItem: MenuItemData = {
				value: item.value,
				label: item.label,
			};
			if (item.disabled) {
				menuItem.disabled = item.disabled;
			}
			items.push(menuItem);
		}
	}
	return items;
});

// Faithful port of Twinkle.close.callback.change_operation: toggling noop
// (un)checks and (dis)ables talkpage/redirects.
const applyOperationState = () => {
	if (noop.value || currentAction.value === 'keep') {
		talkpage.value = false;
		redirects.value = false;
	} else {
		talkpage.value = true;
		redirects.value = true;
	}
};

// Faithful port of Twinkle.close.callback.change_code: switching the code
// resets the noop checkbox and the talkpage/redirects checkboxes.
watch(
	selectedCode,
	() => {
		if (props.initialNoop || currentAction.value === 'noop') {
			noop.value = true;
		} else {
			noop.value = false;
		}
		applyOperationState();
	},
	{immediate: true}
);

watch(noop, applyOperationState);

const primaryAction = computed(() => ({
	label: uls('提交', '提交'),
	actionType: 'progressive' as const,
	disabled: submitting.value || currentOption.value === null,
}));

const submit = () => {
	if (submitting.value || currentOption.value === null) {
		return;
	}
	submitting.value = true;
	emit(
		'submit',
		{
			title: props.title,
			code: typeof selectedCode.value === 'string' ? selectedCode.value : null,
			remark: remark.value,
			sdreason: sdreason.value,
			section: Number.parseInt(props.section, 10),
			parentSection: undefined,
			messageData: currentOption.value,
			talkpage: props.showTalkpage && talkpage.value,
			redirects: redirects.value,
			noop: noop.value,
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
		:title="`关闭存废讨论 \u00B7 ${title}`"
		script-name="Twinkle"
		:footer-links="footerLinks"
		:primary-action="primaryAction"
		@update:open="open = $event"
		@primary="submit"
	>
		<cdx-field>
			<template #label>处理结果：</template>
			<cdx-select v-model:selected="selectedCode" :menu-items="menuItems" :disabled="submitting" />
		</cdx-field>
		<cdx-field v-if="showSdreason">
			<template #label>速删理由：</template>
			<cdx-text-input
				v-model="sdreason"
				:disabled="submitting"
				placeholder="用于删除日志，使用{{delete}}的参数格式，例如 A1 或 A1|G1"
			/>
		</cdx-field>
		<cdx-field>
			<template #label>补充说明：</template>
			<cdx-text-input v-model="remark" :disabled="submitting" />
		</cdx-field>
		<cdx-checkbox v-model="noop" :disabled="noopDisabled || submitting">
			{{ uls('只关闭讨论，不进行其他操作', '只關閉討論，不進行其他操作') }}
		</cdx-checkbox>
		<cdx-checkbox v-if="showTalkpage" v-model="talkpage" :disabled="talkpageDisabled || submitting">
			{{ uls('删除关联的讨论页', '刪除關聯的討論頁') }}
		</cdx-checkbox>
		<cdx-checkbox v-model="redirects" :disabled="redirectsDisabled || submitting">
			{{ uls('删除重定向页', '刪除重定向頁') }}
		</cdx-checkbox>
		<tw-status ref="statusRef" />
	</tw-dialog>
</template>
