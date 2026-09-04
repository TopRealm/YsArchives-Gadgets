<script setup lang="ts">
import {CdxCheckbox, CdxField, CdxSelect, CdxTextArea, CdxTextInput, type MenuItemData} from '@wikimedia/codex';
import {computed, reactive, ref, watch} from 'vue';
import TwDialog from './TwDialog.vue';
import TwStatus from './TwStatus.vue';
import {uls} from './useUls';

interface TwStatusExposed {
	getStatusRoot: () => HTMLElement | null;
}

interface SubgroupItem {
	type: 'input' | 'textarea' | 'select' | 'checkbox';
	name?: string;
	label: string;
	tooltip?: string;
	options?: {
		value: string;
		label: string;
	}[];
	list?: {
		name: string;
		label: string;
		tooltip?: string;
		checked?: boolean;
	}[];
}

interface TagItem {
	tag: string;
	label: string;
	description?: string;
	subgroup?: SubgroupItem[];
	buildFilename?: boolean;
}

interface TagGroup {
	key: string;
	items: TagItem[];
}

interface ArticleGroup {
	key: string;
	subgroups: {
		key: string | null;
		items: {
			tag: string;
			description: string;
		}[];
	}[];
}

interface TagParams {
	tags: string[];
	existingTags: string[];
	tagsToRemove: string[];
	group: boolean;
	reason: string;
	patrol: boolean;
	[key: string]: string | boolean | string[];
}

const props = defineProps<{
	mode: 'article' | 'file' | 'redirect';
	title: string;
	canRemove: boolean;
	isMainspace: boolean;
	initialSortOrder: 'cat' | 'alpha';
	initialGroup: boolean;
	showPatrol: boolean;
	initialPatrol: boolean;
	articleGroups: ArticleGroup[];
	alphaTags: {
		tag: string;
		description: string;
	}[];
	alreadyPresentTags: string[];
	flatDescriptions: Record<string, string>;
	fileGroups: TagGroup[];
	redirectGroups: TagGroup[];
	customGroups: TagGroup[];
	footerLinks: {
		text: string;
		href: string;
	}[];
}>();

const emit = defineEmits<{
	submit: [params: TagParams, statusContainer: HTMLElement | null, restore: () => void];
	close: [];
}>();

const open = ref(true);
const submitting = ref(false);
const filterText = ref('');
const sortorder = ref<'cat' | 'alpha'>(props.initialSortOrder);
const selectedTags = ref<string[]>([]);
const existingChecked = ref<string[]>(props.mode === 'article' ? [...props.alreadyPresentTags] : []);
const groupByDefault = ref(props.initialGroup);
const reason = ref('');
const patrol = ref(props.initialPatrol);
const statusRef = ref<TwStatusExposed | null>(null);

// Subgroup parameter values, keyed by the original quickForm `name`
const subgroupValues = reactive<Record<string, string | boolean>>({});

const sortItems: MenuItemData[] = [
	{value: 'cat', label: uls('按类型', '按類別')},
	{value: 'alpha', label: '按字母'},
];

const filterRegex = computed(() => {
	const trimmed = filterText.value.trim();
	if (!trimmed) {
		return null;
	}
	try {
		return new RegExp(mw.util.escapeRegExp(trimmed), 'i');
	} catch {
		return null;
	}
});

const filterMatch = (text: string) => {
	if (!filterRegex.value) {
		return true;
	}
	return filterRegex.value.test(text);
};

const filterGroup = (group: TagGroup): TagGroup | null => {
	const items = group.items.filter((item) => filterMatch(item.label));
	if (items.length === 0) {
		return null;
	}
	return {...group, items};
};

const filteredFileGroups = computed<TagGroup[]>(() =>
	props.fileGroups.map(filterGroup).filter((g): g is TagGroup => g !== null)
);

const filteredRedirectGroups = computed<TagGroup[]>(() =>
	props.redirectGroups.map(filterGroup).filter((g): g is TagGroup => g !== null)
);

const filteredCustomGroups = computed<TagGroup[]>(() =>
	props.customGroups.map(filterGroup).filter((g): g is TagGroup => g !== null)
);

const filteredArticleGroups = computed<ArticleGroup[]>(() => {
	if (sortorder.value !== 'cat' || !filterRegex.value) {
		return props.articleGroups;
	}
	return props.articleGroups
		.map((group) => {
			const subgroups = group.subgroups
				.map((subgroup) => ({
					...subgroup,
					items: subgroup.items.filter((item) => filterMatch(`{{${item.tag}}}: ${item.description}`)),
				}))
				.filter((subgroup) => subgroup.items.length > 0);
			return subgroups.length > 0 ? {...group, subgroups} : null;
		})
		.filter((g): g is ArticleGroup => g !== null);
});

const filteredAlphaTags = computed(() => {
	if (!filterRegex.value) {
		return props.alphaTags;
	}
	return props.alphaTags.filter((item) => filterMatch(`{{${item.tag}}}: ${item.description}`));
});

const filteredAlreadyPresent = computed(() => {
	if (!filterRegex.value) {
		return props.alreadyPresentTags;
	}
	return props.alreadyPresentTags.filter((tag) => filterMatch(`{{${tag}}}: ${props.flatDescriptions[tag] ?? ''}`));
});

const templateLink = (tag: string) => mw.util.getUrl(`Template:${tag}`);

// The existing tags are discovered asynchronously after mount; keep the
// checked set in sync when they arrive
watch(
	() => props.alreadyPresentTags,
	(tags) => {
		if (props.mode === 'article' && props.canRemove) {
			existingChecked.value = [...tags];
		}
	}
);

const setSubgroupValue = (name: string, value: string | number | boolean | string[] | null) => {
	if (typeof value === 'number') {
		subgroupValues[name] = String(value);
	} else if (value === null) {
		subgroupValues[name] = false;
	} else if (Array.isArray(value)) {
		subgroupValues[name] = value.length > 0;
	} else {
		subgroupValues[name] = value;
	}
};

const getSubgroupText = (name: string, defaultValue = '') => {
	const value = subgroupValues[name];
	return typeof value === 'string' ? value : defaultValue;
};

const getSubgroupCheck = (name: string, defaultValue: boolean) => {
	const value = subgroupValues[name];
	return typeof value === 'boolean' ? value : defaultValue;
};

const addTag = (value: string, modelValue: string[] | boolean) => {
	if (Array.isArray(modelValue)) {
		const next = modelValue.filter((item): item is string => typeof item === 'string');
		// Without {{multiple issues}} grouping only a single tag may be
		// selected; the newly-checked item is appended last.
		selectedTags.value = !groupByDefault.value && next.length > 1 ? [next.at(-1) ?? value] : next;
	} else if (modelValue) {
		if (groupByDefault.value) {
			selectedTags.value = [...selectedTags.value, value];
		} else {
			selectedTags.value = [value];
		}
	} else {
		selectedTags.value = selectedTags.value.filter((item) => item !== value);
	}
};

// Keep only the most recently selected tag when grouping is turned off
watch(groupByDefault, (grouped) => {
	if (!grouped && selectedTags.value.length > 1) {
		selectedTags.value = [selectedTags.value.at(-1) ?? ''].filter(Boolean);
	}
});

const addExisting = (value: string, modelValue: string[] | boolean) => {
	if (Array.isArray(modelValue)) {
		existingChecked.value = modelValue.filter((item): item is string => typeof item === 'string');
	} else if (modelValue) {
		existingChecked.value = [...existingChecked.value, value];
	} else {
		existingChecked.value = existingChecked.value.filter((item) => item !== value);
	}
};

const buildParams = (): TagParams => {
	const tagsToRemove = props.alreadyPresentTags.filter((tag) => !existingChecked.value.includes(tag));
	return {
		tags: [...selectedTags.value],
		existingTags: [...existingChecked.value],
		tagsToRemove,
		group: groupByDefault.value,
		reason: reason.value,
		patrol: patrol.value,
		...subgroupValues,
	};
};

// Labels that contain wikitext braces must be assembled in script scope,
// because `}}` inside a template interpolation terminates the expression.
const existingLabel = (tag: string) => `{{${tag}}}`;
const tagLabel = (tag: string, description?: string) => (description ? `{{${tag}}}: ${description}` : `{{${tag}}}`);
const mergeTagOtherLabel = computed(() => {
	const other = selectedTags.value.includes('Merge to')
		? 'Merge from'
		: selectedTags.value.includes('Merge from')
			? 'Merge to'
			: 'Merge';
	return `用{{${other}${uls('}}标记其他条目', '}}標記其他條目')}`;
});
const mergeReasonLabel = computed(() =>
	uls(
		`合并理由（会被贴上${selectedTags.value.includes('Merge to') ? '其他' : '这'}条目的讨论页）：`,
		`合併理由（會被貼上${selectedTags.value.includes('Merge to') ? '其他' : '這'}條目的討論頁）：`
	)
);
const groupLabel = uls('如可能，合并入{{multiple issues}}', '如可能，合併入{{multiple issues}}');
const groupTooltip = uls(
	'若加入{{multiple issues}}支持的三个以上的模板，所有支持的模板都会被合并入{{multiple issues}}模板中。',
	'若加入{{multiple issues}}支援的三個以上的模板，所有支援的模板都會被合併入{{multiple issues}}模板中。'
);

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

const notabilityOptions: MenuItemData[] = [
	{value: 'none', label: `{{Notability}}：${uls('通用的关注度指引', '通用的關注度指引')}`},
	{value: 'Astro', label: `{{Notability|Astro}}：${uls('天体', '天體')}`},
	{value: 'Biographies', label: `{{Notability|Biographies}}：${uls('人物传记', '人物傳記')}`},
	{value: 'Book', label: `{{Notability|Book}}：${uls('书籍', '書籍')}`},
	{value: 'Cyclone', label: `{{Notability|Cyclone}}：${uls('气旋', '氣旋')}`},
	{value: 'Fiction', label: `{{Notability|Fiction}}：${uls('虚构事物', '虛構事物')}`},
	{value: 'Geographic', label: `{{Notability|Geographic}}：${uls('地理特征', '地理特徵')}`},
	{value: 'Geometry', label: `{{Notability|Geometry}}：${uls('几何图形', '幾何圖形')}`},
	{value: 'Invention', label: `{{Notability|Invention}}：${uls('发明、研究', '發明、研究')}`},
	{value: 'Music', label: `{{Notability|Music}}：${uls('音乐', '音樂')}`},
	{value: 'Numbers', label: `{{Notability|Numbers}}：${uls('数字', '數字')}`},
	{value: 'Organizations', label: `{{Notability|Organizations}}：${uls('组织', '組織')}`},
	{value: 'Property', label: `{{Notability|Property}}：${uls('性质表', '性質表')}`},
	{value: 'Traffic', label: '{{Notability|Traffic}}：交通'},
	{value: 'Web', label: `{{Notability|Web}}：${uls('网站、网络内容', '網站、網路內容')}（非正式指引）`},
];

const selectItems = (options?: {value: string; label: string}[]): MenuItemData[] =>
	(options ?? []).map((option) => ({value: option.value, label: option.label}));
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
			<template #label>{{ uls('筛选标记列表：', '篩選標記列表：') }}</template>
			<cdx-text-input v-model="filterText" :disabled="submitting" />
		</cdx-field>

		<template v-if="mode === 'article'">
			<cdx-field>
				<template #label>
					{{ uls('查看列表：', '檢視列表：') }}
					<span class="tw-tag-sort-tooltip">
						{{
							uls(
								'您可以在Twinkle参数设置（H:TW/PREF）中更改此项。',
								'您可以在Twinkle偏好設定（H:TW/PREF）中更改此項。'
							)
						}}
					</span>
				</template>
				<cdx-select v-model:selected="sortorder" :menu-items="sortItems" :disabled="submitting" />
			</cdx-field>
			<div v-if="!canRemove" class="tw-tag-untagnotice">
				{{
					uls(
						'要移除现有维护标记，请从当前条目版本中打开“标记”菜单',
						'要移除現有維護標記，請從目前條目版本中打開「標記」選單'
					)
				}}
			</div>
			<div class="tw-tag-workarea">
				<template v-if="canRemove && filteredAlreadyPresent.length > 0">
					<h5>{{ uls('已放置的维护标记', '已放置的維護標記') }}</h5>
					<cdx-checkbox
						v-for="tag in filteredAlreadyPresent"
						:key="`existing-${tag}`"
						:model-value="existingChecked"
						:input-value="tag"
						name="twinkle-tag-existing"
						:disabled="submitting"
						@update:model-value="addExisting(tag, $event)"
					>
						{{ existingLabel(tag) }}
						<span v-if="flatDescriptions[tag]">：{{ flatDescriptions[tag] }}</span>
						<a
							:href="templateLink(tag)"
							target="_blank"
							rel="noopener noreferrer"
							class="tw-tag-template-link"
							@click.stop
						>
							&gt;
						</a>
					</cdx-checkbox>
				</template>
				<template v-if="sortorder === 'cat'">
					<template v-for="loopGroup in filteredArticleGroups" :key="loopGroup.key">
						<h5>{{ loopGroup.key }}</h5>
						<div
							v-for="subgroup in loopGroup.subgroups"
							:key="subgroup.key ?? loopGroup.key"
							class="tw-tag-subgroup"
						>
							<b v-if="subgroup.key">{{ subgroup.key }}</b>
							<cdx-checkbox
								v-for="item in subgroup.items"
								:key="item.tag"
								:model-value="selectedTags"
								:input-value="item.tag"
								name="twinkle-tag-tags"
								:disabled="submitting"
								@update:model-value="addTag(item.tag, $event)"
							>
								{{ tagLabel(item.tag, item.description) }}
								<a
									:href="templateLink(item.tag)"
									target="_blank"
									rel="noopener noreferrer"
									class="tw-tag-template-link"
									@click.stop
								>
									&gt;
								</a>
							</cdx-checkbox>
						</div>
					</template>
				</template>
				<template v-else>
					<h5 v-if="canRemove && filteredAlreadyPresent.length > 0">
						{{ uls('可用的维护标记', '可用的維護標記') }}
					</h5>
					<cdx-checkbox
						v-for="item in filteredAlphaTags"
						:key="item.tag"
						:model-value="selectedTags"
						:input-value="item.tag"
						name="twinkle-tag-tags"
						:disabled="submitting"
						@update:model-value="addTag(item.tag, $event)"
					>
						{{ tagLabel(item.tag, item.description) }}
						<a
							:href="templateLink(item.tag)"
							target="_blank"
							rel="noopener noreferrer"
							class="tw-tag-template-link"
							@click.stop
						>
							&gt;
						</a>
					</cdx-checkbox>
				</template>
			</div>

			<!-- Special subgroups for article tags -->
			<template v-if="selectedTags.includes('Expert needed')">
				<cdx-field>
					<template #label>{{ uls('哪个领域的专家（必填）：', '哪個領域的專家（必填）：') }}</template>
					<cdx-text-input
						:model-value="getSubgroupText('expert')"
						:disabled="submitting"
						@update:model-value="setSubgroupValue('expert', $event)"
					/>
				</cdx-field>
				<cdx-field>
					<template #label>{{ uls('哪个领域的专家：', '哪個領域的專家：') }}</template>
					<cdx-text-input
						:model-value="getSubgroupText('expert2')"
						:disabled="submitting"
						@update:model-value="setSubgroupValue('expert2', $event)"
					/>
				</cdx-field>
				<cdx-field>
					<template #label>{{ uls('哪个领域的专家：', '哪個領域的專家：') }}</template>
					<cdx-text-input
						:model-value="getSubgroupText('expert3')"
						:disabled="submitting"
						@update:model-value="setSubgroupValue('expert3', $event)"
					/>
				</cdx-field>
			</template>
			<template
				v-if="
					selectedTags.includes('Merge') ||
					selectedTags.includes('Merge from') ||
					selectedTags.includes('Merge to')
				"
			>
				<cdx-field>
					<template #label>{{ uls('其他条目：', '其他條目：') }}</template>
					<template #description>
						{{
							uls(
								'如指定多个条目，请用管道符分隔：条目甲|条目乙',
								'如指定多個條目，請用管道符分隔：條目甲|條目乙'
							)
						}}
					</template>
					<cdx-text-input
						:model-value="getSubgroupText('mergeTarget')"
						:disabled="submitting"
						@update:model-value="setSubgroupValue('mergeTarget', $event)"
					/>
				</cdx-field>
				<cdx-checkbox
					:model-value="getSubgroupCheck('mergeTagOther', true)"
					:disabled="submitting"
					:title="uls('仅在只输入了一个条目名时可用', '僅在只輸入了一個條目名時可用')"
					@update:model-value="setSubgroupValue('mergeTagOther', $event)"
				>
					{{ mergeTagOtherLabel }}
				</cdx-checkbox>
				<cdx-field v-if="isMainspace">
					<template #label>{{ mergeReasonLabel }}</template>
					<cdx-text-area
						:model-value="getSubgroupText('mergeReason')"
						:disabled="submitting"
						@update:model-value="setSubgroupValue('mergeReason', $event)"
					/>
				</cdx-field>
			</template>
			<cdx-field v-if="selectedTags.includes('Missing information')">
				<template #label>{{ uls('缺少的内容（必填）：', '缺少的內容（必填）：') }}</template>
				<template #description>{{
					uls('必填，显示为“缺少有关……的信息。”', '必填，顯示為「缺少有關……的資訊。」')
				}}</template>
				<cdx-text-input
					:model-value="getSubgroupText('missingInformation')"
					:disabled="submitting"
					@update:model-value="setSubgroupValue('missingInformation', $event)"
				/>
			</cdx-field>
			<cdx-field v-if="selectedTags.includes('Notability')">
				<template #label>{{ uls('关注度类型：', '關注度類型：') }}</template>
				<cdx-select
					:selected="getSubgroupText('notability', 'none')"
					:menu-items="notabilityOptions"
					:disabled="submitting"
					@update:selected="setSubgroupValue('notability', $event)"
				/>
			</cdx-field>
			<template v-if="selectedTags.includes('Requested move')">
				<cdx-field>
					<template #label>{{ uls('新名称：', '新名稱：') }}</template>
					<cdx-text-input
						:model-value="getSubgroupText('moveTarget')"
						:disabled="submitting"
						@update:model-value="setSubgroupValue('moveTarget', $event)"
					/>
				</cdx-field>
				<cdx-field>
					<template #label>{{
						uls('移动理由（会被粘贴该条目的讨论页）：', '移動理由（會被貼上該條目的討論頁）：')
					}}</template>
					<cdx-text-area
						:model-value="getSubgroupText('moveReason')"
						:disabled="submitting"
						@update:model-value="setSubgroupValue('moveReason', $event)"
					/>
				</cdx-field>
			</template>
			<template v-if="selectedTags.includes('Split')">
				<cdx-field v-for="index in [1, 2, 3]" :key="index">
					<template #label>{{ uls(`页面名${index}：`, `頁面名${index}：`) }}</template>
					<cdx-text-input
						:model-value="getSubgroupText(`target${index}`)"
						:disabled="submitting"
						@update:model-value="setSubgroupValue(`target${index}`, $event)"
					/>
				</cdx-field>
			</template>
			<cdx-field v-if="selectedTags.includes('Cleanup')">
				<template #label>{{ uls('需要清理的理由', '需要清理的理由') }}</template>
				<cdx-text-input
					:model-value="getSubgroupText('cleanupReason')"
					:disabled="submitting"
					@update:model-value="setSubgroupValue('cleanupReason', $event)"
				/>
			</cdx-field>
			<cdx-checkbox v-model="groupByDefault" :disabled="submitting" :title="groupTooltip">
				{{ groupLabel }}
			</cdx-checkbox>
		</template>

		<template v-else-if="mode === 'file'">
			<div class="tw-tag-workarea">
				<template v-for="loopGroup in filteredFileGroups" :key="loopGroup.key">
					<h5>{{ loopGroup.key }}</h5>
					<template v-for="item in loopGroup.items" :key="item.tag">
						<cdx-checkbox
							:model-value="selectedTags"
							:input-value="item.tag"
							name="twinkle-tag-tags"
							:disabled="submitting"
							@update:model-value="addTag(item.tag, $event)"
						>
							{{ item.label }}
							<a
								:href="templateLink(item.tag)"
								target="_blank"
								rel="noopener noreferrer"
								class="tw-tag-template-link"
								@click.stop
							>
								&gt;
							</a>
						</cdx-checkbox>
						<cdx-field v-if="item.buildFilename && selectedTags.includes(item.tag)">
							<template #label>{{ uls('替换的文件：', '替換的檔案：') }}</template>
							<template #description>
								{{ uls('输入替换此文件的文件名称（必填）', '輸入替換此檔案的檔案名稱（必填）') }}
							</template>
							<cdx-text-input
								:model-value="getSubgroupText(`${item.tag.replace(/ /g, '_')}File`)"
								:disabled="submitting"
								@update:model-value="setSubgroupValue(`${item.tag.replace(/ /g, '_')}File`, $event)"
							/>
						</cdx-field>
						<template v-if="item.subgroup && selectedTags.includes(item.tag)">
							<template v-for="subitem in item.subgroup" :key="subitem.name ?? subitem.label">
								<cdx-field v-if="subitem.type !== 'checkbox'">
									<template #label>{{ subitem.label }}</template>
									<template v-if="subitem.tooltip" #description>{{ subitem.tooltip }}</template>
									<cdx-text-area
										v-if="subitem.type === 'textarea'"
										:model-value="getSubgroupText(subitem.name ?? '')"
										:disabled="submitting"
										@update:model-value="setSubgroupValue(subitem.name ?? '', $event)"
									/>
									<cdx-select
										v-else-if="subitem.type === 'select'"
										:selected="
											getSubgroupText(subitem.name ?? '', subitem.options?.[0]?.value ?? '')
										"
										:menu-items="selectItems(subitem.options)"
										:disabled="submitting"
										@update:selected="setSubgroupValue(subitem.name ?? '', $event)"
									/>
									<cdx-text-input
										v-else
										:model-value="getSubgroupText(subitem.name ?? '')"
										:disabled="submitting"
										@update:model-value="setSubgroupValue(subitem.name ?? '', $event)"
									/>
								</cdx-field>
								<cdx-checkbox
									v-for="checkboxItem in subitem.list ?? []"
									v-else
									:key="checkboxItem.name"
									:model-value="getSubgroupCheck(checkboxItem.name, !!checkboxItem.checked)"
									:disabled="submitting"
									:title="checkboxItem.tooltip"
									@update:model-value="setSubgroupValue(checkboxItem.name, $event)"
								>
									{{ checkboxItem.label }}
								</cdx-checkbox>
							</template>
						</template>
					</template>
				</template>
				<template v-for="loopGroup in filteredCustomGroups" :key="`custom-${loopGroup.key}`">
					<h5>{{ loopGroup.key }}</h5>
					<template v-for="item in loopGroup.items" :key="item.tag">
						<cdx-checkbox
							:model-value="selectedTags"
							:input-value="item.tag"
							name="twinkle-tag-tags"
							:disabled="submitting"
							@update:model-value="addTag(item.tag, $event)"
						>
							{{ item.label }}
						</cdx-checkbox>
						<template v-if="item.subgroup && selectedTags.includes(item.tag)">
							<template v-for="subitem in item.subgroup" :key="subitem.name ?? subitem.label">
								<cdx-field v-if="subitem.type !== 'checkbox'">
									<template #label>{{ subitem.label }}</template>
									<template v-if="subitem.tooltip" #description>{{ subitem.tooltip }}</template>
									<cdx-text-area
										v-if="subitem.type === 'textarea'"
										:model-value="getSubgroupText(subitem.name ?? '')"
										:disabled="submitting"
										@update:model-value="setSubgroupValue(subitem.name ?? '', $event)"
									/>
									<cdx-select
										v-else-if="subitem.type === 'select'"
										:selected="
											getSubgroupText(subitem.name ?? '', subitem.options?.[0]?.value ?? '')
										"
										:menu-items="selectItems(subitem.options)"
										:disabled="submitting"
										@update:selected="setSubgroupValue(subitem.name ?? '', $event)"
									/>
									<cdx-text-input
										v-else
										:model-value="getSubgroupText(subitem.name ?? '')"
										:disabled="submitting"
										@update:model-value="setSubgroupValue(subitem.name ?? '', $event)"
									/>
								</cdx-field>
								<cdx-checkbox
									v-for="checkboxItem in subitem.list ?? []"
									v-else
									:key="checkboxItem.name"
									:model-value="getSubgroupCheck(checkboxItem.name, !!checkboxItem.checked)"
									:disabled="submitting"
									:title="checkboxItem.tooltip"
									@update:model-value="setSubgroupValue(checkboxItem.name, $event)"
								>
									{{ checkboxItem.label }}
								</cdx-checkbox>
							</template>
						</template>
					</template>
				</template>
			</div>
		</template>

		<template v-else>
			<div class="tw-tag-workarea">
				<template v-for="loopGroup in filteredRedirectGroups" :key="loopGroup.key">
					<h5>{{ loopGroup.key }}</h5>
					<template v-for="item in loopGroup.items" :key="item.tag">
						<cdx-checkbox
							:model-value="selectedTags"
							:input-value="item.tag"
							name="twinkle-tag-tags"
							:disabled="submitting"
							@update:model-value="addTag(item.tag, $event)"
						>
							{{ item.label }}
							<a
								:href="templateLink(item.tag)"
								target="_blank"
								rel="noopener noreferrer"
								class="tw-tag-template-link"
								@click.stop
							>
								&gt;
							</a>
						</cdx-checkbox>
						<template v-if="item.subgroup && selectedTags.includes(item.tag)">
							<template v-for="subitem in item.subgroup" :key="subitem.name ?? subitem.label">
								<cdx-field v-if="subitem.type !== 'checkbox'">
									<template #label>{{ subitem.label }}</template>
									<template v-if="subitem.tooltip" #description>{{ subitem.tooltip }}</template>
									<cdx-text-area
										v-if="subitem.type === 'textarea'"
										:model-value="getSubgroupText(subitem.name ?? '')"
										:disabled="submitting"
										@update:model-value="setSubgroupValue(subitem.name ?? '', $event)"
									/>
									<cdx-select
										v-else-if="subitem.type === 'select'"
										:selected="
											getSubgroupText(subitem.name ?? '', subitem.options?.[0]?.value ?? '')
										"
										:menu-items="selectItems(subitem.options)"
										:disabled="submitting"
										@update:selected="setSubgroupValue(subitem.name ?? '', $event)"
									/>
									<cdx-text-input
										v-else
										:model-value="getSubgroupText(subitem.name ?? '')"
										:disabled="submitting"
										@update:model-value="setSubgroupValue(subitem.name ?? '', $event)"
									/>
								</cdx-field>
								<cdx-checkbox
									v-for="checkboxItem in subitem.list ?? []"
									v-else
									:key="checkboxItem.name"
									:model-value="getSubgroupCheck(checkboxItem.name, !!checkboxItem.checked)"
									:disabled="submitting"
									:title="checkboxItem.tooltip"
									@update:model-value="setSubgroupValue(checkboxItem.name, $event)"
								>
									{{ checkboxItem.label }}
								</cdx-checkbox>
							</template>
						</template>
					</template>
				</template>
				<template v-for="loopGroup in filteredCustomGroups" :key="`custom-${loopGroup.key}`">
					<h5>{{ loopGroup.key }}</h5>
					<template v-for="item in loopGroup.items" :key="item.tag">
						<cdx-checkbox
							:model-value="selectedTags"
							:input-value="item.tag"
							name="twinkle-tag-tags"
							:disabled="submitting"
							@update:model-value="addTag(item.tag, $event)"
						>
							{{ item.label }}
						</cdx-checkbox>
						<template v-if="item.subgroup && selectedTags.includes(item.tag)">
							<template v-for="subitem in item.subgroup" :key="subitem.name ?? subitem.label">
								<cdx-field v-if="subitem.type !== 'checkbox'">
									<template #label>{{ subitem.label }}</template>
									<template v-if="subitem.tooltip" #description>{{ subitem.tooltip }}</template>
									<cdx-text-area
										v-if="subitem.type === 'textarea'"
										:model-value="getSubgroupText(subitem.name ?? '')"
										:disabled="submitting"
										@update:model-value="setSubgroupValue(subitem.name ?? '', $event)"
									/>
									<cdx-select
										v-else-if="subitem.type === 'select'"
										:selected="
											getSubgroupText(subitem.name ?? '', subitem.options?.[0]?.value ?? '')
										"
										:menu-items="selectItems(subitem.options)"
										:disabled="submitting"
										@update:selected="setSubgroupValue(subitem.name ?? '', $event)"
									/>
									<cdx-text-input
										v-else
										:model-value="getSubgroupText(subitem.name ?? '')"
										:disabled="submitting"
										@update:model-value="setSubgroupValue(subitem.name ?? '', $event)"
									/>
								</cdx-field>
								<cdx-checkbox
									v-for="checkboxItem in subitem.list ?? []"
									v-else
									:key="checkboxItem.name"
									:model-value="getSubgroupCheck(checkboxItem.name, !!checkboxItem.checked)"
									:disabled="submitting"
									:title="checkboxItem.tooltip"
									@update:model-value="setSubgroupValue(checkboxItem.name, $event)"
								>
									{{ checkboxItem.label }}
								</cdx-checkbox>
							</template>
						</template>
					</template>
				</template>
			</div>
		</template>

		<template v-if="mode === 'article'">
			<cdx-field>
				<template #label>理由：</template>
				<template #description>
					{{
						uls(
							'附加于编辑摘要的可选理由，例如指出条目内容的哪些部分有问题或移除模板的理由，但若理由很长则应该发表在讨论页。',
							'附加於編輯摘要的可選理由，例如指出條目內容的哪些部分有問題或移除模板的理由，但若理由很長則應該發表在討論頁。'
						)
					}}
				</template>
				<cdx-text-input v-model="reason" :disabled="submitting" />
			</cdx-field>
		</template>
		<cdx-checkbox v-if="showPatrol" v-model="patrol" :disabled="submitting">
			{{ uls('标记页面为已巡查', '標記頁面為已巡查') }}
		</cdx-checkbox>
		<tw-status ref="statusRef" />
	</tw-dialog>
</template>

<style scoped lang="less">
.tw-tag-workarea {
	max-height: 28em;
	overflow-y: auto;
	margin-bottom: 0.5em;

	h5 {
		font-size: 110%;
		margin: 0.25em 0;

		&:not(:first-child) {
			margin-top: 1em;
		}
	}
}

.tw-tag-subgroup {
	margin-left: 1em;
}

.tw-tag-template-link {
	margin-left: 0.25em;
	text-decoration: none;
}

.tw-tag-untagnotice {
	margin-bottom: 0.5em;
}

.tw-tag-sort-tooltip {
	display: block;
	font-size: 90%;
	color: #555;
}
</style>
