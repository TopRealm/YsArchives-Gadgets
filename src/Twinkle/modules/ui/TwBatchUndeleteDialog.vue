<script setup lang="ts">
import {CdxButton, CdxCheckbox, CdxField, CdxTextInput} from '@wikimedia/codex';
import {computed, ref, watch} from 'vue';
import TwDialog from './TwDialog.vue';
import TwStatus from './TwStatus.vue';
import {uls} from './useUls';
import {useShiftClick} from './useShiftClick';

interface TwStatusExposed {
	getStatusRoot: () => HTMLElement | null;
}

interface PageItem {
	title: string;
	label: string;
	isProtected: boolean;
}

const props = defineProps<{
	title: string;
	list: PageItem[];
	footerLinks: {
		text: string;
		href: string;
	}[];
}>();

const emit = defineEmits<{
	submit: [
		params: {
			undel_talk: boolean;
			reason: string;
			pages: string[];
			protectedCount: number;
		},
		statusContainer: HTMLElement | null,
	];
	close: [];
}>();

const open = ref(true);
const undelTalk = ref(true);
const reason = ref('');
const selectedPages = ref<string[]>([]);
const submitting = ref(false);
const statusRef = ref<TwStatusExposed | null>(null);
const {onShiftClick} = useShiftClick();

// When the list arrives asynchronously, select everything by default.
watch(
	() => props.list,
	(list) => {
		selectedPages.value = list.map((item) => item.title);
	}
);

const protectedCount = computed(
	() => props.list.filter((item) => item.isProtected && selectedPages.value.includes(item.title)).length
);

const selectAll = () => {
	selectedPages.value = props.list.map((item) => item.title);
};

const selectNone = () => {
	selectedPages.value = [];
};

const onToggle = (value: string, modelValue: string[] | boolean) => {
	if (Array.isArray(modelValue)) {
		selectedPages.value = modelValue.filter((item): item is string => typeof item === 'string');
	} else if (modelValue) {
		selectedPages.value = [...selectedPages.value, value];
	} else {
		selectedPages.value = selectedPages.value.filter((item) => item !== value);
	}
};

const primaryAction = computed(() => ({
	label: uls('提交', '提交'),
	actionType: 'progressive' as const,
	disabled: submitting.value,
}));

const submit = () => {
	if (submitting.value) {
		return;
	}
	if (!reason.value.trim()) {
		void mw.notify('您需要指定理由。', {
			type: 'warn',
			tag: 'twinklebatchundelete',
		});
		return;
	}
	if (selectedPages.value.length === 0) {
		void mw.notify(uls('请至少选择一个页面。', '請至少選擇一個頁面。'), {
			type: 'warn',
			tag: 'twinklebatchundelete',
		});
		return;
	}
	submitting.value = true;
	emit(
		'submit',
		{
			undel_talk: undelTalk.value,
			reason: reason.value.trim(),
			pages: [...selectedPages.value],
			protectedCount: protectedCount.value,
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
		<cdx-checkbox v-model="undelTalk" :disabled="submitting">
			{{ uls('若存在已删除的讨论页，也恢复', '若存在已刪除的討論頁，也恢復') }}
		</cdx-checkbox>
		<cdx-field>
			<template #label>理由：</template>
			<cdx-text-input v-model="reason" :disabled="submitting" />
		</cdx-field>
		<div v-if="list.length === 0" class="tw-loading">
			{{ uls('加载中……', '載入中……') }}
		</div>
		<template v-else>
			<h5>{{ uls('待恢复页面', '待恢復頁面') }}</h5>
			<div class="tw-batch-actions">
				<cdx-button :disabled="submitting" weight="quiet" @click="selectAll">
					{{ uls('全选', '全選') }}
				</cdx-button>
				<cdx-button :disabled="submitting" weight="quiet" @click="selectNone">
					{{ uls('全不选', '全不選') }}
				</cdx-button>
			</div>
			<div @click="onShiftClick">
				<cdx-checkbox
					v-for="item in list"
					:key="item.title"
					:model-value="selectedPages"
					:input-value="item.title"
					name="twinkle-batchundelete-pages"
					:disabled="submitting"
					@update:model-value="onToggle(item.title, $event)"
				>
					<span :class="{'tw-batch-protected': item.isProtected}">{{ item.label }}</span>
				</cdx-checkbox>
			</div>
		</template>
		<tw-status ref="statusRef" />
	</tw-dialog>
</template>

<style scoped lang="less">
.tw-batch-protected {
	color: #f00;
}
</style>
