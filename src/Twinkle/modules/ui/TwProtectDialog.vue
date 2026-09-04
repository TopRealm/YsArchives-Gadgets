<script setup lang="ts">
import {CdxCheckbox, CdxField, CdxRadio, CdxSelect, CdxTextArea, type MenuItemData} from '@wikimedia/codex';
import {UTC8_OFFSET_MINUTES, beijingDateToISO} from '../utc8';
import {computed, ref, watch} from 'vue';
import TwDialog from './TwDialog.vue';
import TwStatus from './TwStatus.vue';
import {uls} from './useUls';

interface TwStatusExposed {
	getStatusRoot: () => HTMLElement | null;
}

interface OptionItem {
	value: string;
	label: string;
	selected?: boolean;
}

interface OptionGroup {
	label: string;
	value?: string;
	list?: OptionItem[];
}

interface PresetInfo {
	edit?: string;
	move?: string;
	create?: string;
	expiry?: string;
	reason?: string | null;
	template?: string;
}

interface ProtectParams {
	actiontype: 'protect' | 'request' | 'tag';
	category: string;
	editmodify: boolean;
	movemodify: boolean;
	editlevel: string;
	movelevel: string;
	createlevel: string;
	editexpiry: string;
	moveexpiry: string;
	createexpiry: string;
	protectReason: string;
	close: boolean;
	tagtype: string;
	small: boolean;
	noinclude: boolean;
	showexpiry: boolean;
	expiry: string;
	reason: string;
}

const props = defineProps<{
	isSysop: boolean;
	pageExists: boolean;
	isScribunto: boolean;
	isTemplate: boolean;
	title: string;
	protectionInfo: {
		previousNotice: string | null;
		logLink: string;
		currentStatus: {
			severe: boolean;
			text: string;
		} | null;
	};
	footerLinks: {
		text: string;
		href: string;
	}[];
	protectionLevels: OptionItem[];
	protectionLengths: OptionItem[];
	protectionTypesAdmin: OptionGroup[];
	protectionTypesCreateOnly: OptionGroup[];
	protectionTypesCreate: OptionGroup[];
	protectionTags: OptionGroup[];
	protectionPresetsInfo: Record<string, PresetInfo>;
}>();

const emit = defineEmits<{
	submit: [params: ProtectParams, statusContainer: HTMLElement | null, restore: () => void];
	close: [];
}>();

const open = ref(true);
const submitting = ref(false);
const actiontype = ref<'protect' | 'request' | 'tag'>(props.isSysop ? 'protect' : 'request');
const category = ref('');
// protect options (field2)
const editmodify = ref(true);
const movemodify = ref(true);
const editlevel = ref('sysop');
const movelevel = ref('sysop');
const createlevel = ref('sysop');
const editexpiry = ref('1 week');
const moveexpiry = ref('1 week');
const createexpiry = ref('1 week');
const protectReason = ref('');
const close = ref(true);
// tag options (field1)
const tagtype = ref('pp-vandalism');
const small = ref(false);
const noinclude = ref(props.isTemplate);
const showexpiry = ref(true);
// request options (field1)
const expiry = ref('');
const reason = ref('');

const statusRef = ref<TwStatusExposed | null>(null);

const customEditExpiries = ref<string[]>([]);
const customMoveExpiries = ref<string[]>([]);
const customCreateExpiries = ref<string[]>([]);

// Date picker values shown while "custom" is selected (YYYY-MM-DD, Beijing time)
const customEditDate = ref('');
const customMoveDate = ref('');
const customCreateDate = ref('');

const tagRadioDisabled = computed(() => !props.pageExists || props.isScribunto);

const showPresetField = computed(() => actiontype.value !== 'tag');
const showTagField = computed(
	() => actiontype.value === 'tag' || (actiontype.value === 'protect' && props.pageExists && !props.isScribunto)
);
const showProtectField = computed(() => actiontype.value === 'protect');
const showRequestField = computed(() => actiontype.value === 'request');
const showShowexpiry = computed(() => actiontype.value !== 'tag');

const flattenGroups = (groups: OptionGroup[]): MenuItemData[] => {
	const items: MenuItemData[] = [];
	for (const [groupIndex, group] of groups.entries()) {
		if (group.list) {
			items.push({
				value: `__group_${groupIndex}`,
				label: group.label,
				disabled: true,
			});
			for (const item of group.list) {
				items.push({
					value: item.value,
					label: item.label,
				});
			}
		} else if (group.value !== undefined) {
			items.push({
				value: group.value,
				label: group.label,
			});
		}
	}
	return items;
};

const categoryOptions = computed<MenuItemData[]>(() => {
	let list: OptionGroup[];
	if (actiontype.value === 'request') {
		list = props.pageExists
			? [...props.protectionTypesAdmin, ...props.protectionTypesCreateOnly]
			: props.protectionTypesCreate;
	} else {
		list = props.pageExists ? props.protectionTypesAdmin : props.protectionTypesCreate;
	}
	return flattenGroups(list);
});

const firstCategoryValue = computed<string>(() => {
	const list =
		actiontype.value === 'request'
			? props.pageExists
				? [...props.protectionTypesAdmin, ...props.protectionTypesCreateOnly]
				: props.protectionTypesCreate
			: props.pageExists
				? props.protectionTypesAdmin
				: props.protectionTypesCreate;
	for (const group of list) {
		if (group.list) {
			const firstItem = group.list[0];
			if (firstItem) {
				return firstItem.value;
			}
		} else if (group.value !== undefined) {
			return group.value;
		}
	}
	return '';
});

const editlevelItems = computed<MenuItemData[]>(() =>
	props.protectionLevels
		.filter((level) => props.isTemplate || level.value !== 'templateeditor')
		.map((level) => ({value: level.value, label: level.label}))
);

const movelevelItems = computed<MenuItemData[]>(() =>
	props.protectionLevels
		.filter((level) => level.value !== 'autoconfirmed' && (props.isTemplate || level.value !== 'templateeditor'))
		.map((level) => ({value: level.value, label: level.label}))
);

const createlevelItems = computed<MenuItemData[]>(() =>
	props.protectionLevels
		.filter((level) => level.value !== 'templateeditor')
		.map((level) => ({value: level.value, label: level.label}))
);

const tagtypeItems = computed<MenuItemData[]>(() => flattenGroups(props.protectionTags));

const baseExpiryItems = computed<MenuItemData[]>(() =>
	props.protectionLengths.map((item) => ({value: item.value, label: item.label}))
);

// Custom expiry values are stored as UTC ISO strings; render them as
// Beijing wall-clock time for the dropdown label.
const customExpiryLabel = (item: string): string => {
	const match = /^(\d{4}-\d{2}-\d{2})T\d{2}:\d{2}:/.exec(item);
	if (!match) {
		return item;
	}
	const beijing = new Date(new Date(item).getTime() + UTC8_OFFSET_MINUTES * 60_000);
	const pad = (num: number) => String(num).padStart(2, '0');
	return `${match[1]} ${pad(beijing.getUTCHours())}:${pad(beijing.getUTCMinutes())} (UTC+8)`;
};

const editExpiryItems = computed<MenuItemData[]>(() => [
	...baseExpiryItems.value,
	...customEditExpiries.value.map((item) => ({value: item, label: customExpiryLabel(item)})),
]);

const moveExpiryItems = computed<MenuItemData[]>(() => [
	...baseExpiryItems.value,
	...customMoveExpiries.value.map((item) => ({value: item, label: customExpiryLabel(item)})),
]);

const createExpiryItems = computed<MenuItemData[]>(() => [
	...baseExpiryItems.value,
	...customCreateExpiries.value.map((item) => ({value: item, label: customExpiryLabel(item)})),
]);

// Faithful port of Twinkle.protect.formevents
const editlevelDisabled = computed(() => !editmodify.value);
const editexpiryDisabled = computed(() => !editmodify.value || editlevel.value === 'all');
const movelevelDisabled = computed(() => !movemodify.value);
const moveexpiryDisabled = computed(() => !movemodify.value || movelevel.value === 'all');
const createexpiryDisabled = computed(() => createlevel.value === 'all');
const tagOptionsDisabled = computed(() => tagtype.value === 'none' || tagtype.value === 'noop');
const requestExpiryDisabled = computed(() => category.value === 'unprotect');

const firstProtectionLength = computed(() => props.protectionLengths[0]?.value ?? '1 day');

// Today in Beijing wall-clock time, for the date picker's min attribute
const beijingToday = computed(() => new Date(Date.now() + UTC8_OFFSET_MINUTES * 60_000).toISOString().slice(0, 10));

// Faithful port of Twinkle.protect.doCustomExpiry, using a date picker
// instead of a prompt. Dates are interpreted as Beijing time (UTC+8).
const applyCustomDate = (target: 'edit' | 'move' | 'create', value: string) => {
	const iso = beijingDateToISO(value);
	if (target === 'edit') {
		if (iso !== value && !customEditExpiries.value.includes(iso)) {
			customEditExpiries.value.push(iso);
		}
		if (iso === value) {
			editexpiry.value = firstProtectionLength.value;
			small.value = false;
		} else {
			editexpiry.value = iso;
			small.value = true;
		}
	} else if (target === 'move') {
		if (iso !== value && !customMoveExpiries.value.includes(iso)) {
			customMoveExpiries.value.push(iso);
		}
		moveexpiry.value = iso === value ? firstProtectionLength.value : iso;
	} else {
		if (iso !== value && !customCreateExpiries.value.includes(iso)) {
			customCreateExpiries.value.push(iso);
		}
		createexpiry.value = iso === value ? firstProtectionLength.value : iso;
	}
};

watch(editexpiry, (value) => {
	if (value === 'custom') {
		return;
	}
	customEditDate.value = '';
	// Faithful port of the small-checkbox linkage in the original expiry event
	const index = props.protectionLengths.findIndex((item) => item.value === value);
	if (index !== -1) {
		small.value = index >= 4; // 1 month
	}
});

watch(moveexpiry, (value) => {
	if (value !== 'custom') {
		customMoveDate.value = '';
	}
});

watch(createexpiry, (value) => {
	if (value !== 'custom') {
		customCreateDate.value = '';
	}
});

// Faithful port of Twinkle.protect.formevents.movemodify
watch(movemodify, () => {
	if (editmodify.value) {
		// keep move settings in sync with edit settings
		movelevel.value = editlevel.value;
		moveexpiry.value = editexpiry.value;
	} else {
		movelevel.value = 'sysop';
		moveexpiry.value = 'infinity';
	}
});

// Faithful port of Twinkle.protect.callback.changePreset
watch(category, (value) => {
	if (!value) {
		return;
	}
	if (actiontype.value === 'protect') {
		const item = props.protectionPresetsInfo[value];
		if (!item) {
			return;
		}
		if (props.pageExists) {
			if (item.edit) {
				editmodify.value = true;
				editlevel.value = item.edit;
			} else {
				editmodify.value = false;
			}
			if (item.move) {
				movemodify.value = true;
				movelevel.value = item.move;
			} else {
				movemodify.value = false;
			}
			editexpiry.value = item.expiry || '1 week';
			moveexpiry.value = item.expiry || '1 week';
		} else {
			if (item.create) {
				createlevel.value = item.create;
			}
			createexpiry.value = item.expiry || '1 week';
		}
		protectReason.value = item.reason ?? '';
		if (props.pageExists && !props.isScribunto) {
			tagtype.value = value === 'unprotect' ? 'none' : (item.template ?? value);
			if (/template/.test(value)) {
				noinclude.value = true;
			} else if (mw.config.get('wgNamespaceNumber') !== 10) {
				noinclude.value = false;
			}
		}
	} else {
		expiry.value = '';
	}
});

watch(actiontype, () => {
	category.value = firstCategoryValue.value;
});

// Initialize category for the initial action type
category.value = firstCategoryValue.value;

const buildParams = (): ProtectParams => ({
	actiontype: actiontype.value,
	category: category.value,
	editmodify: editmodify.value,
	movemodify: movemodify.value,
	editlevel: editlevel.value,
	movelevel: movelevel.value,
	createlevel: createlevel.value,
	editexpiry: editexpiry.value,
	moveexpiry: moveexpiry.value,
	createexpiry: createexpiry.value,
	protectReason: protectReason.value,
	close: close.value,
	tagtype: tagtype.value,
	small: small.value,
	noinclude: noinclude.value,
	showexpiry: showexpiry.value,
	expiry: expiry.value,
	reason: reason.value,
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
	submitting.value = true;
	emit('submit', buildParams(), statusRef.value?.getStatusRoot() ?? null, () => {
		submitting.value = false;
	});
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
		<cdx-field is-fieldset>
			<template #label>{{ uls('操作类型', '操作類別') }}</template>
			<cdx-radio
				v-if="isSysop"
				v-model="actiontype"
				name="twinkle-protect-actiontype"
				input-value="protect"
				:disabled="submitting"
			>
				{{ uls('保护页面', '保護頁面') }}
			</cdx-radio>
			<cdx-radio
				v-model="actiontype"
				name="twinkle-protect-actiontype"
				input-value="request"
				:disabled="submitting"
			>
				{{ uls('请求保护页面', '請求保護頁面') }}
			</cdx-radio>
			<cdx-radio
				v-model="actiontype"
				name="twinkle-protect-actiontype"
				input-value="tag"
				:disabled="submitting || tagRadioDisabled"
			>
				{{ uls('用保护模板标记此页', '用保護模板標記此頁') }}
			</cdx-radio>
		</cdx-field>

		<div v-if="protectionInfo.previousNotice" class="tw-protect-loginfo">
			{{ protectionInfo.previousNotice }}
			<a :href="protectionInfo.logLink" target="_blank" rel="noopener noreferrer">
				{{ uls('保护日志', '保護日誌') }}
			</a>
		</div>
		<div
			v-if="protectionInfo.currentStatus"
			class="tw-protect-current"
			:class="{'tw-protect-current-warn': protectionInfo.currentStatus.severe}"
		>
			<b>{{ uls('当前保护等级', '目前保護等級') }}：</b>
			{{ protectionInfo.currentStatus.text }}
		</div>

		<!-- field_preset -->
		<cdx-field v-if="showPresetField">
			<template #label>
				{{ actiontype === 'request' ? uls('类型和理由：', '類別和理由：') : uls('选择默认：', '選擇預設：') }}
			</template>
			<cdx-select v-model:selected="category" :menu-items="categoryOptions" :disabled="submitting" />
		</cdx-field>

		<!-- field2: protect options -->
		<template v-if="showProtectField">
			<template v-if="pageExists">
				<cdx-checkbox
					v-model="editmodify"
					:disabled="submitting"
					:title="uls('若此项关闭，编辑权限将不会修改。', '若此項關閉，編輯權限將不會修改。')"
				>
					{{ uls('修改编辑权限', '修改編輯權限') }}
				</cdx-checkbox>
				<cdx-field>
					<template #label>{{ uls('编辑权限：', '編輯權限：') }}</template>
					<cdx-select
						v-model:selected="editlevel"
						:menu-items="editlevelItems"
						:disabled="submitting || editlevelDisabled"
					/>
				</cdx-field>
				<cdx-field>
					<template #label>{{ uls('终止时间：', '終止時間：') }}</template>
					<cdx-select
						v-model:selected="editexpiry"
						:menu-items="editExpiryItems"
						:disabled="submitting || editexpiryDisabled"
					/>
					<input
						v-if="editexpiry === 'custom'"
						v-model="customEditDate"
						type="date"
						class="tw-protect-custom-date"
						:min="beijingToday"
						:disabled="submitting"
						@change="applyCustomDate('edit', customEditDate)"
					/>
				</cdx-field>
				<cdx-checkbox
					v-model="movemodify"
					:disabled="submitting"
					:title="uls('若此项被关闭，移动权限将不被修改。', '若此項被關閉，移動權限將不被修改。')"
				>
					{{ uls('修改移动权限', '修改移動權限') }}
				</cdx-checkbox>
				<cdx-field>
					<template #label>{{ uls('移动权限：', '移動權限：') }}</template>
					<cdx-select
						v-model:selected="movelevel"
						:menu-items="movelevelItems"
						:disabled="submitting || movelevelDisabled"
					/>
				</cdx-field>
				<cdx-field>
					<template #label>{{ uls('终止时间：', '終止時間：') }}</template>
					<cdx-select
						v-model:selected="moveexpiry"
						:menu-items="moveExpiryItems"
						:disabled="submitting || moveexpiryDisabled"
					/>
					<input
						v-if="moveexpiry === 'custom'"
						v-model="customMoveDate"
						type="date"
						class="tw-protect-custom-date"
						:min="beijingToday"
						:disabled="submitting"
						@change="applyCustomDate('move', customMoveDate)"
					/>
				</cdx-field>
			</template>
			<template v-else>
				<cdx-field>
					<template #label>{{ uls('创建权限：', '建立權限：') }}</template>
					<cdx-select v-model:selected="createlevel" :menu-items="createlevelItems" :disabled="submitting" />
				</cdx-field>
				<cdx-field>
					<template #label>{{ uls('终止时间：', '終止時間：') }}</template>
					<cdx-select
						v-model:selected="createexpiry"
						:menu-items="createExpiryItems"
						:disabled="submitting || createexpiryDisabled"
					/>
				</cdx-field>
			</template>
			<cdx-checkbox v-model="close" :disabled="submitting">
				{{ uls('标记请求保护页面中的请求', '標記請求保護頁面中的請求') }}
			</cdx-checkbox>
			<cdx-field>
				<template #label>{{ uls('理由（保护日志）：', '理由（保護日誌）：') }}</template>
				<cdx-text-area v-model="protectReason" :disabled="submitting" />
			</cdx-field>
		</template>

		<!-- field1: tag options -->
		<template v-if="showTagField">
			<cdx-field>
				<template #label>{{ uls('选择保护模板：', '選擇保護模板：') }}</template>
				<cdx-select v-model:selected="tagtype" :menu-items="tagtypeItems" :disabled="submitting" />
			</cdx-field>
			<cdx-checkbox
				v-model="small"
				:disabled="submitting || tagOptionsDisabled"
				:title="
					uls(
						'将给模板加上|small=yes参数，显示成右上角的一把挂锁。',
						'將給模板加上|small=yes參數，顯示成右上角的一把掛鎖。'
					)
				"
			>
				{{ uls('使用图标（small=yes）', '使用圖示（small=yes）') }}
			</cdx-checkbox>
			<cdx-checkbox
				v-model="noinclude"
				:disabled="submitting || tagOptionsDisabled"
				:title="uls('将保护模板包裹在&lt;noinclude&gt;中', '將保護模板包裹在&lt;noinclude&gt;中')"
			>
				{{ uls('用&lt;noinclude&gt;包裹保护模板', '用&lt;noinclude&gt;包裹保護模板') }}
			</cdx-checkbox>
			<cdx-checkbox
				v-if="showShowexpiry"
				v-model="showexpiry"
				:disabled="submitting || tagOptionsDisabled"
				:title="uls('将给模板加上|expiry参数', '將給模板加上|expiry參數')"
			>
				{{ uls('在模板显示到期时间', '在模板顯示到期時間') }}
			</cdx-checkbox>
		</template>

		<!-- field1: request options -->
		<template v-if="showRequestField">
			<cdx-field>
				<template #label>{{ uls('时长：', '時長：') }}</template>
				<cdx-select
					v-model:selected="expiry"
					:menu-items="[
						{value: '', label: ''},
						{value: 'temporary', label: uls('临时', '臨時')},
						{value: 'infinity', label: '永久'},
					]"
					:disabled="submitting || requestExpiryDisabled"
				/>
			</cdx-field>
			<cdx-field>
				<template #label>理由：</template>
				<cdx-text-area v-model="reason" :disabled="submitting" />
			</cdx-field>
		</template>

		<tw-status ref="statusRef" />
	</tw-dialog>
</template>

<style scoped lang="less">
.tw-protect-loginfo {
	margin-bottom: 0.5em;
}

.tw-protect-current {
	color: #000;

	&-warn {
		color: #c00;
	}
}

.tw-protect-custom-date {
	box-sizing: border-box;
	width: 100%;
	min-height: 32px;
	margin-top: 4px;
	padding: 4px 8px;
	border: 1px solid var(--border-color-base, #a2a9b1);
	border-radius: 2px;
	background-color: var(--background-color-base, #fff);
	color: var(--color-base, #202122);
	font-size: 1rem;

	&:focus {
		border-color: var(--border-color-progressive, #36c);
		box-shadow: inset 0 0 0 1px var(--box-shadow-color-progressive--focus, #36c);
		outline: 0;
	}
}
</style>
