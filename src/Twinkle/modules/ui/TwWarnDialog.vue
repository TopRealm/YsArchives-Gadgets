<script setup lang="ts">
import {
	CdxButton,
	CdxField,
	CdxLookup,
	CdxSelect,
	CdxTextArea,
	CdxTextInput,
	type MenuItemData,
} from '@wikimedia/codex';
import {computed, ref, watch} from 'vue';
import TwDialog from './TwDialog.vue';
import TwStatus from './TwStatus.vue';
import {uls} from './useUls';

interface TwStatusExposed {
	getStatusRoot: () => HTMLElement | null;
}

interface SubEntry {
	value: string;
	label: string;
	messageData: unknown;
}

interface SubGroup {
	key: string | null;
	entries: SubEntry[];
}

interface WarnParams {
	main_group: string;
	sub_group: string;
	article: string;
	reason: string;
	messageData: unknown;
}

const props = defineProps<{
	title: string;
	mainGroupOptions: {
		value: string;
		label: string;
	}[];
	initialMainGroup: string;
	initialArticle: string;
	messages: {
		levels: {
			category: string;
			list: Record<string, unknown>;
		}[];
		singlenotice: Record<string, unknown>;
		singlewarn: Record<string, unknown>;
	};
	customWarningList: {
		value: string;
		label: string;
	}[];
	notice: {
		text: string;
	};
	autolevelInfo: {
		level: number;
		latestType: string;
		showArv: boolean;
		username: string;
		groups: SubGroup[];
	} | null;
	footerLinks: {
		text: string;
		href: string;
	}[];
}>();

const emit = defineEmits<{
	submit: [params: WarnParams, statusContainer: HTMLElement | null, restore: () => void];
	preview: [params: WarnParams, previewBox: HTMLElement | null];
	autolevel: [oldSubValue: string];
	openArv: [];
	close: [];
}>();

const open = ref(true);
const submitting = ref(false);
const mainGroup = ref(props.initialMainGroup);
const subGroup = ref<string | null>(null);
const article = ref(props.initialArticle);
const reason = ref('');
const previewBox = ref<HTMLElement | null>(null);
const statusRef = ref<TwStatusExposed | null>(null);
const subMessageData = ref<Record<string, unknown>>({});
const lookupInput = ref('');

const notLinkedArticle: Record<string, string> = {
	'uw-bite': uls('被“咬到”的用户（不含User:） ', '被「咬到」的使用者（不含User:） '),
	'uw-aiv': uls('可选输入被警告的用户名（不含User:） ', '可選輸入被警告的使用者名稱（不含User:） '),
};

const prevArticle = ref<string | null>(null);

const mainGroupItems = computed<MenuItemData[]>(() =>
	props.mainGroupOptions.map((option) => ({value: option.value, label: option.label}))
);

// Faithful port of Twinkle.warn.callback.change_category's createEntries
const createEntries = (contents: Record<string, unknown>, val: string): SubEntry[] => {
	const level = val.replace(/^\D+/g, '');
	const entries: SubEntry[] = [];
	for (const [itemKey, itemPropertiesRaw] of Object.entries(contents)) {
		const itemProperties = itemPropertiesRaw as Record<string, unknown>;
		// Skip if the current template doesn't have a version for the current level
		if (level && !itemProperties[val]) {
			continue;
		}
		const key = typeof itemKey === 'string' ? itemKey : String((itemProperties as {value: string}).value);
		const template = key + level;
		const levelData = level ? (itemProperties[val] as {label: string}) : null;
		entries.push({
			value: template,
			label: `{{${template}}}: ${levelData ? levelData.label : String(itemProperties['label'] ?? '')}`,
			messageData: itemProperties,
		});
	}
	return entries;
};

const subGroups = computed<SubGroup[]>(() => {
	switch (mainGroup.value) {
		case 'singlenotice':
		case 'singlewarn':
			return [{key: null, entries: createEntries(props.messages[mainGroup.value], mainGroup.value)}];
		case 'singlecombined': {
			const unSortedSinglets = {
				...props.messages.singlenotice,
				...props.messages.singlewarn,
			};
			const sortedSingletMessages: Record<string, unknown> = {};
			for (const key of Object.keys(unSortedSinglets).sort()) {
				sortedSingletMessages[key] = unSortedSinglets[key];
			}
			return [{key: null, entries: createEntries(sortedSingletMessages, mainGroup.value)}];
		}
		case 'custom':
			return [
				{
					key: null,
					entries: props.customWarningList.map((item) => ({
						value: item.value,
						label: item.label,
						messageData: item,
					})),
				},
			];
		case 'kitchensink': {
			const groups: SubGroup[] = [];
			for (const lvl of ['level1', 'level2']) {
				for (const levelGroup of props.messages.levels) {
					groups.push({
						key: levelGroup.category,
						entries: createEntries(levelGroup.list, lvl),
					});
				}
			}
			groups.push(
				{
					key: null,
					entries: createEntries(props.messages.singlenotice, 'singlenotice'),
				},
				{
					key: null,
					entries: createEntries(props.messages.singlewarn, 'singlewarn'),
				}
			);
			if (props.customWarningList.length) {
				groups.push({
					key: null,
					entries: props.customWarningList.map((item) => ({
						value: item.value,
						label: item.label,
						messageData: item,
					})),
				});
			}
			return groups;
		}
		case 'level1':
		case 'level2':
			return props.messages.levels.map((levelGroup) => ({
				key: levelGroup.category,
				entries: createEntries(levelGroup.list, mainGroup.value),
			}));
		case 'autolevel':
			return props.autolevelInfo?.groups ?? [];
		default:
			return [];
	}
});

// Keep the messageData mapping in sync with the generated entries
watch(
	subGroups,
	(groups) => {
		const mapping: Record<string, unknown> = {};
		for (const group of groups) {
			for (const entry of group.entries) {
				mapping[entry.value] = entry.messageData;
			}
		}
		subMessageData.value = mapping;
	},
	{immediate: true, deep: true}
);

const lookupMenuItems = computed<MenuItemData[]>(() => {
	const items: MenuItemData[] = [];
	for (const [groupIndex, group] of subGroups.value.entries()) {
		if (group.key) {
			items.push({
				value: `__group_${groupIndex}`,
				label: group.key,
				disabled: true,
			});
		}
		for (const entry of group.entries) {
			items.push({
				value: entry.value,
				label: entry.label,
			});
		}
	}
	return items;
});

// CdxLookup on this Codex version does not filter its menu itself; filter
// here so fuzzy search works. Disabled group headers are dropped while a
// query is active.
const filteredLookupItems = computed<MenuItemData[]>(() => {
	const query = lookupInput.value.trim().toLowerCase();
	if (!query) {
		return lookupMenuItems.value;
	}
	return lookupMenuItems.value.filter((item) => {
		return !item.disabled && String(item.label).toLowerCase().includes(query);
	});
});

// Faithful port of Twinkle.warn.callback.change_subcategory's article-label switching
watch(subGroup, (value) => {
	if (!['singlenotice', 'singlewarn', 'singlecombined', 'kitchensink'].includes(mainGroup.value)) {
		return;
	}
	if (value && notLinkedArticle[value]) {
		if (prevArticle.value === null) {
			prevArticle.value = article.value;
		}
		article.value = '';
	} else if (prevArticle.value !== null) {
		article.value = prevArticle.value;
		prevArticle.value = null;
	}
});

const articleLabel = computed(() => {
	if (subGroup.value && ['singlenotice', 'singlewarn', 'singlecombined', 'kitchensink'].includes(mainGroup.value)) {
		return notLinkedArticle[subGroup.value] ?? uls('页面链接', '頁面連結');
	}
	return uls('页面链接', '頁面連結');
});

watch(mainGroup, (value) => {
	const oldSub = subGroup.value ?? '';
	subGroup.value = null;
	lookupInput.value = '';
	if (value === 'autolevel') {
		emit('autolevel', oldSub);
	}
});

const buildParams = (): WarnParams => ({
	main_group: mainGroup.value,
	sub_group: subGroup.value ?? '',
	article: article.value,
	reason: reason.value,
	messageData: subGroup.value ? subMessageData.value[subGroup.value] : undefined,
});

const primaryAction = computed(() => ({
	label: uls('提交', '提交'),
	actionType: 'progressive' as const,
	disabled: submitting.value,
}));

const onPreview = () => {
	emit('preview', buildParams(), previewBox.value);
};

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
		<cdx-field>
			<template #label>{{ uls('选择要发送的警告或提醒类型', '選擇要傳送的警告或提醒類別') }}</template>
			<template #description>
				{{ uls('首先选择一组，再选择具体的警告模板。', '首先選擇一組，再選擇具體的警告模板。') }}
			</template>
			<cdx-select v-model:selected="mainGroup" :menu-items="mainGroupItems" :disabled="submitting" />
		</cdx-field>
		<cdx-field>
			<template #label>{{ uls('警告模板：', '警告模板：') }}</template>
			<cdx-lookup
				v-model:selected="subGroup"
				v-model:input-value="lookupInput"
				:menu-items="filteredLookupItems"
				:disabled="submitting"
			/>
		</cdx-field>
		<cdx-field>
			<template #label>{{ articleLabel }}</template>
			<template #description>
				{{
					uls(
						'仅限一个，勿使用网址、[[ ]]，可使用Special:Diff',
						'僅限一個，勿使用網址、[[ ]]，可使用Special:Diff'
					)
				}}
			</template>
			<cdx-text-input v-model="article" :disabled="submitting" />
		</cdx-field>
		<div v-if="notice.text" class="tw-warn-notice">{{ notice.text }}</div>
		<div v-if="autolevelInfo" class="tw-warn-autolevel">
			<div>
				{{ uls('将发送', '將發送') }}<b>{{ uls('层级', '層級') }}{{ autolevelInfo.level }}</b
				>{{ uls('警告模板。', '警告模板。') }}
			</div>
			<div v-if="autolevelInfo.showArv">
				{{
					autolevelInfo.username +
					uls('最后收到了一个层级2警告（', '最後收到了一個層級2警告（') +
					autolevelInfo.latestType +
					uls('），所以将其报告给管理人员会比较好；', '），所以將其報告給管理人員會比較好；')
				}}
				<a href="#" class="tw-warn-arv-link" @click.prevent="emit('openArv')">
					{{ uls('单击此处打开告状工具', '點擊此處打開告狀工具') }}
				</a>
			</div>
		</div>
		<cdx-field>
			<template #label>{{ uls('可选信息：', '可選資訊：') }}</template>
			<template #description>{{ uls('理由或是附加信息', '理由或是附加資訊') }}</template>
			<cdx-text-area v-model="reason" :disabled="submitting" />
		</cdx-field>
		<cdx-button :disabled="submitting" weight="quiet" @click="onPreview">
			{{ uls('预览', '預覽') }}
		</cdx-button>
		<div ref="previewBox" hidden></div>
		<tw-status ref="statusRef" />
	</tw-dialog>
</template>

<style scoped lang="less">
.tw-warn-notice {
	color: #f00;
	margin: 0.5em 0;
}

.tw-warn-autolevel {
	color: #f00;
	margin: 0.5em 0;

	.tw-warn-arv-link {
		font-weight: bold;
	}
}
</style>
