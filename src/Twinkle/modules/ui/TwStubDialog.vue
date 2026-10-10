<script setup lang="ts">
import {CdxCheckbox, CdxField, CdxSelect, type MenuItemData} from '@wikimedia/codex';
import {computed, ref, watch} from 'vue';
import TwDialog from './TwDialog.vue';
import TwStatus from './TwStatus.vue';
import {uls} from './useUls';

interface TwStatusExposed {
	getStatusRoot: () => HTMLElement | null;
}

interface TagItem {
	value: string;
	label: string;
	url: string;
}

interface TagGroup {
	header: string;
	subgroups: {
		title?: string;
		items: TagItem[];
	}[];
}

const props = defineProps<{
	title: string;
	initialSortOrder: 'cat' | 'alpha';
	showPatrol: boolean;
	initialPatrol: boolean;
	customTags: TagItem[];
	catGroups: TagGroup[];
	alphaTags: TagItem[];
	footerLinks: {
		text: string;
		href: string;
	}[];
}>();

const emit = defineEmits<{
	submit: [params: {patrol: boolean; tags: string[]}, statusContainer: HTMLElement | null];
	close: [];
}>();

const open = ref(true);
const sortOrder = ref<'cat' | 'alpha'>(props.initialSortOrder);
const selectedTags = ref<string[]>([]);
const patrol = ref(props.initialPatrol);
const submitting = ref(false);
const statusRef = ref<TwStatusExposed | null>(null);

const sortOrderItems: MenuItemData[] = [
	{value: 'cat', label: uls('按类型', '按類別')},
	{value: 'alpha', label: '按字母'},
];

const displayGroups = computed<TagGroup[]>(() => {
	const groups: TagGroup[] = [];
	if (props.customTags.length > 0) {
		groups.push({
			header: uls('自定义模板', '自訂模板'),
			subgroups: [{items: props.customTags}],
		});
	}
	if (sortOrder.value === 'cat') {
		groups.push(...props.catGroups);
	} else {
		groups.push({
			header: '',
			subgroups: [{items: props.alphaTags}],
		});
	}
	return groups;
});

const onTagToggle = (value: string, modelValue: string[] | boolean) => {
	if (Array.isArray(modelValue)) {
		selectedTags.value = modelValue.filter((item): item is string => typeof item === 'string');
	} else if (modelValue) {
		selectedTags.value = [...selectedTags.value, value];
	} else {
		selectedTags.value = selectedTags.value.filter((item) => item !== value);
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
	if (selectedTags.value.length === 0) {
		void mw.notify('必须选择至少一个标记！', {
			type: 'warn',
			tag: 'twinklestub',
		});
		return;
	}
	submitting.value = true;
	emit(
		'submit',
		{
			patrol: patrol.value,
			tags: [...selectedTags.value],
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
		<cdx-checkbox v-if="showPatrol" v-model="patrol" :disabled="submitting">
			{{ uls('标记页面为已巡查', '標記頁面為已巡查') }}
		</cdx-checkbox>
		<cdx-field>
			<template #label>{{ uls('查看列表：', '檢視列表：') }}</template>
			<cdx-select v-model:selected="sortOrder" :menu-items="sortOrderItems" :disabled="submitting" />
		</cdx-field>
		<div v-for="(group, groupIndex) in displayGroups" :key="`${group.header}-${groupIndex}`">
			<h5 v-if="group.header" class="tw-stub-group-header">{{ group.header }}</h5>
			<div v-for="(subgroup, subgroupIndex) in group.subgroups" :key="`${subgroup.title ?? ''}-${subgroupIndex}`">
				<b v-if="subgroup.title">{{ subgroup.title }}</b>
				<cdx-checkbox
					v-for="item in subgroup.items"
					:key="item.value"
					:model-value="selectedTags"
					:input-value="item.value"
					name="twinkle-stub-tags"
					:disabled="submitting"
					@update:model-value="onTagToggle(item.value, $event)"
				>
					{{ item.label }}
					<a :href="item.url" target="_blank" rel="noopener noreferrer" class="tw-stub-template-link"> › </a>
				</cdx-checkbox>
			</div>
		</div>
		<tw-status ref="statusRef" />
	</tw-dialog>
</template>

<style scoped lang="less">
.tw-stub-group-header {
	margin: 0.5em 0 0;
}

.tw-stub-template-link {
	margin-left: 0.25em;
}
</style>
