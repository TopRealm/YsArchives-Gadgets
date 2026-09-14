<script setup lang="ts">
import {CdxButton, CdxCheckbox, CdxField, CdxSelect, CdxTextInput, type MenuItemData} from '@wikimedia/codex';
import {computed, reactive, ref, watch} from 'vue';
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

interface ProtectListData {
	pages: PageItem[];
	loaded: boolean;
}

type ExpiryKind = 'edit' | 'move' | 'create';

const props = defineProps<{
	title: string;
	levels: {
		value: string;
		label: string;
	}[];
	moveLevels: {
		value: string;
		label: string;
	}[];
	lengths: {
		value: string;
		label: string;
	}[];
	list: ProtectListData;
	footerLinks: {
		text: string;
		href: string;
	}[];
}>();

const emit = defineEmits<{
	submit: [
		params: {
			reason: string;
			pages: string[];
			protectedCount: number;
			editmodify: boolean;
			editlevel: string;
			editexpiry: string;
			movemodify: boolean;
			movelevel: string;
			moveexpiry: string;
			createmodify: boolean;
			createlevel: string;
			createexpiry: string;
		},
		statusContainer: HTMLElement | null,
	];
	close: [];
}>();

const open = ref(true);
const editmodify = ref(true);
const editlevel = ref(props.levels.find((level) => level.value === 'sysop')?.value ?? 'sysop');
const editexpiry = ref('2 days');
const movemodify = ref(true);
const movelevel = ref('sysop');
const moveexpiry = ref('2 days');
const createmodify = ref(true);
const createlevel = ref('sysop');
const createexpiry = ref('infinity');
const reason = ref('');
const selectedPages = ref<string[]>([]);
const submitting = ref(false);
const statusRef = ref<TwStatusExposed | null>(null);
const {onShiftClick} = useShiftClick();

const customExpiries = reactive<Record<ExpiryKind, MenuItemData[]>>({
	edit: [],
	move: [],
	create: [],
});

const levelsItems = computed<MenuItemData[]>(() =>
	props.levels.map((level) => ({value: level.value, label: level.label}))
);
const moveLevelsItems = computed<MenuItemData[]>(() =>
	props.moveLevels.map((level) => ({value: level.value, label: level.label}))
);
const expiryItems = (kind: ExpiryKind): MenuItemData[] => [
	...props.lengths.map((length) => ({value: length.value, label: length.label})),
	...customExpiries[kind],
];

const editlevelDisabled = computed(() => !editmodify.value);
const editexpiryDisabled = computed(() => !editmodify.value || editlevel.value === 'all');
const movelevelDisabled = computed(() => !movemodify.value);
const moveexpiryDisabled = computed(() => !movemodify.value || movelevel.value === 'all');
const createlevelDisabled = computed(() => !createmodify.value);
const createexpiryDisabled = computed(() => !createmodify.value || createlevel.value === 'all');

// Faithful port of Twinkle.protect.formevents.movemodify.
watch(movemodify, (checked) => {
	if (checked) {
		if (editlevelDisabled.value) {
			movelevel.value = 'sysop';
			moveexpiry.value = 'infinity';
		} else {
			movelevel.value = editlevel.value;
			moveexpiry.value = editexpiry.value;
		}
	}
});

const onExpiryChange = (kind: ExpiryKind, value: string | number | null) => {
	if (value !== 'custom') {
		return;
	}
	const custom = prompt(
		uls(
			'输入自定义终止时间。\n您可以使用相对时间，如“1 minute”或“19 days”，或绝对时间“yyyymmddhhmm”（如“200602011405”是2006年02月01日14：05（北京时间，UTC+8））',
			'輸入自訂終止時間。\n您可以使用相對時間，如「1 minute」或「19 days」，或絕對時間「yyyymmddhhmm」（如「200602011405」是2006年02月01日14：05（北京時間，UTC+8））'
		),
		''
	);
	const target = kind === 'edit' ? editexpiry : kind === 'move' ? moveexpiry : createexpiry;
	if (custom) {
		customExpiries[kind].push({value: custom, label: custom});
		target.value = custom;
	} else {
		target.value = '1 day';
	}
};

// Select everything when the async list arrives.
watch(
	() => props.list.pages,
	(list) => {
		selectedPages.value = list.map((item) => item.title);
	}
);

const protectedCount = computed(
	() => props.list.pages.filter((item) => item.isProtected && selectedPages.value.includes(item.title)).length
);

const selectAll = () => {
	selectedPages.value = props.list.pages.map((item) => item.title);
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
		void mw.notify('您必须给出一个理由。', {
			type: 'warn',
			tag: 'twinklebatchprotect',
		});
		return;
	}
	if (selectedPages.value.length === 0) {
		void mw.notify(uls('请至少选择一个页面。', '請至少選擇一個頁面。'), {
			type: 'warn',
			tag: 'twinklebatchprotect',
		});
		return;
	}
	submitting.value = true;
	emit(
		'submit',
		{
			reason: reason.value.trim(),
			pages: [...selectedPages.value],
			protectedCount: protectedCount.value,
			editmodify: editmodify.value,
			editlevel: editlevel.value,
			editexpiry: editexpiry.value,
			movemodify: movemodify.value,
			movelevel: movelevel.value,
			moveexpiry: moveexpiry.value,
			createmodify: createmodify.value,
			createlevel: createlevel.value,
			createexpiry: createexpiry.value,
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
		<cdx-checkbox v-model="editmodify" :disabled="submitting">
			{{ uls('修改编辑保护', '修改編輯保護') }}
		</cdx-checkbox>
		<cdx-field>
			<template #label>编辑权限：</template>
			<cdx-select
				v-model:selected="editlevel"
				:menu-items="levelsItems"
				:disabled="submitting || editlevelDisabled"
			/>
		</cdx-field>
		<cdx-field>
			<template #label>终止时间：</template>
			<cdx-select
				v-model:selected="editexpiry"
				:menu-items="expiryItems('edit')"
				:disabled="submitting || editexpiryDisabled"
				@update:selected="onExpiryChange('edit', $event)"
			/>
		</cdx-field>
		<cdx-checkbox v-model="movemodify" :disabled="submitting">
			{{ uls('修改移动保护', '修改移動保護') }}
		</cdx-checkbox>
		<cdx-field>
			<template #label>移动权限：</template>
			<cdx-select
				v-model:selected="movelevel"
				:menu-items="moveLevelsItems"
				:disabled="submitting || movelevelDisabled"
			/>
		</cdx-field>
		<cdx-field>
			<template #label>终止时间：</template>
			<cdx-select
				v-model:selected="moveexpiry"
				:menu-items="expiryItems('move')"
				:disabled="submitting || moveexpiryDisabled"
				@update:selected="onExpiryChange('move', $event)"
			/>
		</cdx-field>
		<cdx-checkbox v-model="createmodify" :disabled="submitting">
			{{ uls('修改创建保护', '修改建立保護') }}
		</cdx-checkbox>
		<cdx-field>
			<template #label>创建权限：</template>
			<cdx-select
				v-model:selected="createlevel"
				:menu-items="levelsItems"
				:disabled="submitting || createlevelDisabled"
			/>
		</cdx-field>
		<cdx-field>
			<template #label>终止时间：</template>
			<cdx-select
				v-model:selected="createexpiry"
				:menu-items="expiryItems('create')"
				:disabled="submitting || createexpiryDisabled"
				@update:selected="onExpiryChange('create', $event)"
			/>
		</cdx-field>
		<cdx-field>
			<template #label>理由（保护日志）</template>
			<cdx-text-input v-model="reason" :disabled="submitting" />
		</cdx-field>
		<div v-if="!list.loaded" class="tw-loading">
			{{ uls('加载中……', '載入中……') }}
		</div>
		<template v-else>
			<h5>待保护页面</h5>
			<div class="tw-batch-actions">
				<cdx-button :disabled="submitting" weight="quiet" @click="selectAll">全选</cdx-button>
				<cdx-button :disabled="submitting" weight="quiet" @click="selectNone">全不选</cdx-button>
			</div>
			<div @click="onShiftClick">
				<cdx-checkbox
					v-for="item in list.pages"
					:key="item.title"
					:model-value="selectedPages"
					:input-value="item.title"
					name="twinkle-batchprotect-pages"
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
