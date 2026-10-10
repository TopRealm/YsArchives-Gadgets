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

interface UnlinkListData {
	backlinks: string[];
	imageusage: string[];
	namespacesText: string;
	loaded: boolean;
}

const props = defineProps<{
	title: string;
	fileSpace: boolean;
	presetReason: string;
	docHtml: string;
	list: UnlinkListData;
	footerLinks: {
		text: string;
		href: string;
	}[];
}>();

const emit = defineEmits<{
	submit: [
		params: {
			reason: string;
			backlinks: string[];
			imageusage: string[];
		},
		statusContainer: HTMLElement | null,
	];
	close: [];
}>();

const open = ref(true);
const reason = ref(props.presetReason);
const selectedBacklinks = ref<string[]>([]);
const selectedImageusage = ref<string[]>([]);
const submitting = ref(false);
const statusRef = ref<TwStatusExposed | null>(null);
const {onShiftClick} = useShiftClick();

watch(
	() => props.list.backlinks,
	(list) => {
		selectedBacklinks.value = [...list];
	}
);
watch(
	() => props.list.imageusage,
	(list) => {
		selectedImageusage.value = [...list];
	}
);

const pageUrl = (title: string) => mw.util.getUrl(title);

const onToggle = (kind: 'backlinks' | 'imageusage', value: string, modelValue: string[] | boolean) => {
	const target = kind === 'backlinks' ? selectedBacklinks : selectedImageusage;
	if (Array.isArray(modelValue)) {
		target.value = modelValue.filter((item): item is string => typeof item === 'string');
	} else if (modelValue) {
		target.value = [...target.value, value];
	} else {
		target.value = target.value.filter((item) => item !== value);
	}
};

const selectAll = (kind: 'backlinks' | 'imageusage') => {
	if (kind === 'backlinks') {
		selectedBacklinks.value = [...props.list.backlinks];
	} else {
		selectedImageusage.value = [...props.list.imageusage];
	}
};

const selectNone = (kind: 'backlinks' | 'imageusage') => {
	if (kind === 'backlinks') {
		selectedBacklinks.value = [];
	} else {
		selectedImageusage.value = [];
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
		void mw.notify(uls('您必须指定取消链入的理由。', '您必須指定取消連入的理由。'), {
			type: 'warn',
			tag: 'twinkleunlink',
		});
		return;
	}
	if (selectedBacklinks.value.length === 0 && selectedImageusage.value.length === 0) {
		void mw.notify(uls('您必须至少选择一个要取消链入的页面。', '您必須至少選擇一個要取消連入的頁面。'), {
			type: 'warn',
			tag: 'twinkleunlink',
		});
		return;
	}
	submitting.value = true;
	emit(
		'submit',
		{
			reason: reason.value.trim(),
			backlinks: [...selectedBacklinks.value],
			imageusage: [...selectedImageusage.value],
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
		<!-- eslint-disable-next-line vue/no-v-html -- docHtml is assembled from localized strings and escaped page names -->
		<div class="tw-unlink-doc" v-html="docHtml"></div>
		<cdx-field>
			<template #label>理由：</template>
			<cdx-text-input v-model="reason" :disabled="submitting" />
		</cdx-field>
		<div v-if="!list.loaded" class="tw-loading">
			{{ uls('加载中……', '載入中……') }}
		</div>
		<template v-else>
			<template v-if="fileSpace">
				<h5>{{ uls('文件使用', '檔案使用') }}</h5>
				<div v-if="list.imageusage.length === 0">{{ uls('未找到文件使用。', '未找到檔案使用。') }}</div>
				<template v-else>
					<div>{{ list.namespacesText }}</div>
					<div class="tw-batch-actions">
						<cdx-button :disabled="submitting" weight="quiet" @click="selectAll('imageusage')">
							{{ uls('全选', '全選') }}
						</cdx-button>
						<cdx-button :disabled="submitting" weight="quiet" @click="selectNone('imageusage')">
							{{ uls('全不选', '全不選') }}
						</cdx-button>
					</div>
					<div @click="onShiftClick">
						<cdx-checkbox
							v-for="title in list.imageusage"
							:key="title"
							:model-value="selectedImageusage"
							:input-value="title"
							name="twinkle-unlink-imageusage"
							:disabled="submitting"
							@update:model-value="onToggle('imageusage', title, $event)"
						>
							<a :href="pageUrl(title)" target="_blank" rel="noopener noreferrer">{{ title }}</a>
						</cdx-checkbox>
					</div>
				</template>
			</template>
			<h5>{{ uls('链入', '連入') }}</h5>
			<div v-if="list.backlinks.length === 0">{{ uls('未找到链入。', '未找到連入。') }}</div>
			<template v-else>
				<div>{{ list.namespacesText }}</div>
				<div class="tw-batch-actions">
					<cdx-button :disabled="submitting" weight="quiet" @click="selectAll('backlinks')">
						{{ uls('全选', '全選') }}
					</cdx-button>
					<cdx-button :disabled="submitting" weight="quiet" @click="selectNone('backlinks')">
						{{ uls('全不选', '全不選') }}
					</cdx-button>
				</div>
				<div @click="onShiftClick">
					<cdx-checkbox
						v-for="title in list.backlinks"
						:key="title"
						:model-value="selectedBacklinks"
						:input-value="title"
						name="twinkle-unlink-backlinks"
						:disabled="submitting"
						@update:model-value="onToggle('backlinks', title, $event)"
					>
						<a :href="pageUrl(title)" target="_blank" rel="noopener noreferrer">{{ title }}</a>
					</cdx-checkbox>
				</div>
			</template>
		</template>
		<tw-status ref="statusRef" />
	</tw-dialog>
</template>

<style scoped lang="less">
.tw-unlink-doc {
	margin-bottom: 0.5em;
}
</style>
