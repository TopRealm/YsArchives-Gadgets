<script setup lang="ts">
import {CdxButton, CdxCheckbox, CdxRadio, CdxSelect, CdxTextInput, type MenuItemData} from '@wikimedia/codex';
import {computed, reactive, ref} from 'vue';
import TwDialog from './TwDialog.vue';
import TwStatus from './TwStatus.vue';
import {twinkle} from './twinkleGlobal';
import {uls} from './useUls';

interface TwStatusExposed {
	getStatusRoot: () => HTMLElement | null;
}

interface SubgroupDef {
	name: string;
	type: 'input' | 'select';
	label: string;
	tooltip?: string;
	list?: {label: string; value: string}[];
}

interface SpeedyCriterion {
	label: string;
	value: string;
	tooltip?: string;
	subgroup?: SubgroupDef | null;
	hideWhenMultiple?: boolean;
	hideSubgroupWhenMultiple?: boolean;
	hideWhenSingle?: boolean;
	hideSubgroupWhenSingle?: boolean;
	hideWhenSysop?: boolean;
	hideSubgroupWhenSysop?: boolean;
	hideWhenUser?: boolean;
	hideSubgroupWhenUser?: boolean;
	hideWhenRedirect?: boolean;
	showInNamespaces?: number[];
	hideInNamespaces?: number[];
}

interface CriteriaSection {
	title: string;
	items: SpeedyCriterion[];
}

interface SpeedyParams {
	tagOnly: boolean;
	values: string[];
	subgroups: Record<string, string>;
	talkpage: boolean;
	redirects: boolean;
	delmultiple: boolean;
	openusertalk: boolean;
	notify: boolean;
	blank: boolean;
	salting: boolean;
	multiple: boolean;
}

const props = defineProps<{
	isSysop: boolean;
	hasCSD: boolean;
	namespace: number;
	isRedirect: boolean;
	isIPUserTalk: boolean;
	pageContentModel: string;
	radioClick: boolean;
	deleteSysopDefaultToDelete: boolean;
	deleteTalkPageOnDelete: boolean;
	deleteRedirectsOnDelete: boolean;
	hasCSDReason: string;
	enlargeG7: boolean;
	priorCountText: string | null;
	priorCountColor: string;
	customList: SpeedyCriterion[];
	articleList: SpeedyCriterion[];
	userList: SpeedyCriterion[];
	usertalkList: SpeedyCriterion[];
	fileList: SpeedyCriterion[];
	categoryList: SpeedyCriterion[];
	draftList: SpeedyCriterion[];
	talkList: SpeedyCriterion[];
	generalList: SpeedyCriterion[];
	redirectList: SpeedyCriterion[];
}>();

const emit = defineEmits<{
	submit: [params: SpeedyParams, statusContainer: HTMLElement | null, restore: () => void];
	close: [];
}>();

const open = ref(true);
const submitting = ref(false);
const statusRef = ref<TwStatusExposed | null>(null);

// Option states (faithful to the original quickForm defaults)
const tagOnly = ref(props.isSysop ? !(props.hasCSD || props.deleteSysopDefaultToDelete) : true);
const talkpage = ref(props.deleteTalkPageOnDelete);
const redirects = ref(props.deleteRedirectsOnDelete);
const delmultiple = ref(false);
const openusertalk = ref(false);
const notify = ref(props.isSysop ? tagOnly.value : true);
const blank = ref(false);
const salting = ref(false);
const multiple = ref(false);

// Selection state
const selectedCsd = ref<string[]>([]);
const subgroupValues = reactive<Record<string, string>>({});

const sysopMode = computed(() => props.isSysop && !tagOnly.value);
const isMultiple = computed(() => (sysopMode.value ? delmultiple.value : multiple.value));
const submitText = computed(() => (sysopMode.value ? uls('删除页面', '刪除頁面') : uls('标记页面', '標記頁面')));

// Linkage when "tag only" is toggled (faithful port of the tag_only event)
const onTagOnlyChange = (value: boolean | string[]) => {
	tagOnly.value = value === true;
	if (tagOnly.value) {
		talkpage.value = false;
		redirects.value = false;
		delmultiple.value = false;
		openusertalk.value = false;
		notify.value = true;
		multiple.value = false;
		salting.value = false;
	} else {
		talkpage.value = props.deleteTalkPageOnDelete;
		redirects.value = true;
		notify.value = false;
	}
};

const toggleSelection = (value: string, modelValue: boolean | string[] | null) => {
	if (isMultiple.value) {
		if (Array.isArray(modelValue)) {
			selectedCsd.value = modelValue.filter((item): item is string => typeof item === 'string');
		} else if (modelValue === true) {
			if (!selectedCsd.value.includes(value)) {
				selectedCsd.value.push(value);
			}
		} else if (modelValue === false) {
			selectedCsd.value = selectedCsd.value.filter((item) => item !== value);
		}
	} else {
		selectedCsd.value = value === null ? [] : [value];
	}
};

// Filtering logic (faithful port of generateCsdList, without the DOM parts)
const filterCriteria = (list: SpeedyCriterion[]): SpeedyCriterion[] => {
	const multipleMode = isMultiple.value;
	const sysop = sysopMode.value;
	const result: SpeedyCriterion[] = [];
	for (const raw of list) {
		const criterion: SpeedyCriterion = {...raw};
		if (multipleMode) {
			if (criterion.hideWhenMultiple) {
				continue;
			}
			if (criterion.hideSubgroupWhenMultiple) {
				criterion.subgroup = null;
			}
		} else {
			if (criterion.hideWhenSingle) {
				continue;
			}
			if (criterion.hideSubgroupWhenSingle) {
				criterion.subgroup = null;
			}
		}
		if (sysop) {
			if (criterion.hideWhenSysop) {
				continue;
			}
			if (criterion.hideSubgroupWhenSysop) {
				criterion.subgroup = null;
			}
		} else {
			if (criterion.hideWhenUser) {
				continue;
			}
			if (criterion.hideSubgroupWhenUser) {
				criterion.subgroup = null;
			}
		}
		if (props.isRedirect && criterion.hideWhenRedirect) {
			continue;
		}
		if (criterion.showInNamespaces && !criterion.showInNamespaces.includes(props.namespace)) {
			continue;
		} else if (criterion.hideInNamespaces && criterion.hideInNamespaces.includes(props.namespace)) {
			continue;
		}
		result.push(criterion);
	}
	return result;
};

const criteriaGroups = computed<CriteriaSection[]>(() => {
	const groups: CriteriaSection[] = [];
	if (sysopMode.value) {
		groups.push({title: uls('自定义理由', '自訂理由'), items: filterCriteria(props.customList)});
	}
	switch (props.namespace) {
		case 0:
			groups.push({title: uls('条目', '條目'), items: filterCriteria(props.articleList)});
			break;
		case 2:
			groups.push({title: uls('用户页', '使用者頁面'), items: filterCriteria(props.userList)});
			break;
		case 3:
			if (props.isIPUserTalk) {
				groups.push({
					title: uls('用户讨论页', '使用者討論頁'),
					items: filterCriteria(props.usertalkList),
				});
			}
			break;
		case 6:
			groups.push({title: uls('文件', '檔案'), items: filterCriteria(props.fileList)});
			break;
		case 14:
			groups.push({title: uls('分类', '分類'), items: filterCriteria(props.categoryList)});
			break;
		case 302:
			groups.push({title: '草稿', items: filterCriteria(props.draftList)});
			break;
		default:
			break;
	}
	// show db-talk on talk pages, but not user talk pages
	if (props.namespace % 2 === 1 && props.namespace !== 3) {
		groups.push({title: uls('讨论页', '討論頁'), items: filterCriteria(props.talkList)});
	}
	// custom rationale lives under general criteria when tagging
	let general = props.generalList;
	if (!sysopMode.value) {
		general = [...props.customList, ...general];
	}
	groups.push({title: uls('常规', '常規'), items: filterCriteria(general)});
	if (props.isRedirect || props.isSysop) {
		groups.push({title: uls('重定向', '重新導向'), items: filterCriteria(props.redirectList)});
	}
	return groups;
});

// A subgroup is visible for a selected criterion (or while the radio is open)
const hasSubgroup = (criterion: SpeedyCriterion) => !!criterion.subgroup;
const subgroupVisible = (criterion: SpeedyCriterion) =>
	hasSubgroup(criterion) && selectedCsd.value.includes(criterion.value);

const getSubgroupValue = (name: string) => subgroupValues[name] ?? '';
const setSubgroupValue = (name: string, value: string | number | null) => {
	subgroupValues[name] = value === null || value === undefined ? '' : String(value);
};

// In radio-click mode, selecting a criterion with a subgroup opens it and
// disables the others until the subgroup's submit button is used
const radioOpen = (criterion: SpeedyCriterion) =>
	props.radioClick && !isMultiple.value && hasSubgroup(criterion) && selectedCsd.value.includes(criterion.value);

const radioDisabled = (criterion: SpeedyCriterion) => {
	if (!props.radioClick || isMultiple.value) {
		return false;
	}
	if (hasSubgroup(criterion)) {
		return false;
	}
	// another criterion has an open subgroup
	return selectedCsd.value.some((value) => {
		return value !== criterion.value && hasSubgroup(findCriterion(value));
	});
};

const findCriterion = (value: string): SpeedyCriterion => {
	for (const group of criteriaGroups.value) {
		const found = group.items.find((item) => item.value === value);
		if (found) {
			return found;
		}
	}
	return {label: value, value};
};

// Selecting a criterion in radio-click mode without a subgroup submits immediately
const onSelectionChange = (value: string, modelValue: string | number | boolean | null) => {
	if (modelValue === value) {
		selectedCsd.value = [value];
		// Faithful port of the sysop single-select linkage: checking a criterion
		// updates the "open user talk page" option from the preference
		if (sysopMode.value && !isMultiple.value) {
			const normalized = twinkle.speedy.normalizeHash[value] ?? value;
			const prefs = twinkle.getPref('openUserTalkPageOnSpeedyDelete');
			openusertalk.value = Array.isArray(prefs) && prefs.includes(normalized);
		}
		if (props.radioClick && !isMultiple.value && !hasSubgroup(findCriterion(value))) {
			submit();
		}
	}
};

const fileHintVisible = computed(() => props.namespace === 6 && !sysopMode.value);

const nonWikitextNotice = computed(() => !sysopMode.value && props.pageContentModel !== 'wikitext');

const primaryAction = computed(() => ({
	label: submitText.value,
	actionType: 'progressive' as const,
	disabled: submitting.value || nonWikitextNotice.value,
}));

const buildParams = (): SpeedyParams => ({
	tagOnly: tagOnly.value,
	values: [...selectedCsd.value],
	subgroups: {...subgroupValues},
	talkpage: talkpage.value,
	redirects: redirects.value,
	delmultiple: delmultiple.value,
	openusertalk: openusertalk.value,
	notify: notify.value,
	blank: blank.value,
	salting: salting.value,
	multiple: multiple.value,
});

const submit = () => {
	if (submitting.value || nonWikitextNotice.value) {
		return;
	}
	if (selectedCsd.value.length === 0) {
		void mw.notify(uls('请选择一个理据！', '請選擇一個理據！'), {
			type: 'warn',
			tag: 'twinklespeedy',
		});
		return;
	}
	submitting.value = true;
	emit('submit', buildParams(), statusRef.value?.getStatusRoot() ?? null, () => {
		submitting.value = false;
	});
};

// The primary action is only used when there is a submit button (non-radioClick,
// or multiple radio-click); the template binds it conditionally.
const usePrimaryAction = computed(() => !props.radioClick || isMultiple.value);
const resolvedPrimaryAction = computed(() => (usePrimaryAction.value ? primaryAction.value : undefined));

const openUserTalkLinkLabel = uls('开启用户讨论页', '開啟使用者討論頁');

// URLs computed in script scope (template cannot access `mw` directly)
const footerLinks = computed(() => [
	{text: uls('快速删除条例', '快速刪除條例'), href: mw.util.getUrl('LIB:CSD')},
	{text: uls('速删设置', '速刪設定'), href: mw.util.getUrl('H:TW/PREF#speedy')},
	{text: uls('Twinkle帮助', 'Twinkle說明'), href: mw.util.getUrl('H:TW/DOC#speedy')},
]);
const specialSdUrl = computed(() => mw.util.getUrl('LIB:SPECIALSD'));
const priorLogUrl = computed(() => mw.util.getUrl('Special:Log', {page: mw.config.get('wgPageName')}));

// Labels containing template braces must be assembled in script scope
const saltingTooltip = uls(
	'选取后，快速删除模板后将附带 {{salt}} 标签，以请求执行删除的管理员进行白纸保护，仅在页面创建3次以上才选择此项。',
	'選取後，快速刪除模板後將附帶 {{salt}} 標籤，以請求執行刪除的管理員進行白紙保護，僅在頁面建立3次以上才選擇此項。'
);
</script>

<template>
	<tw-dialog
		:open="open"
		:title="uls('选择快速删除理由', '選擇快速刪除理由')"
		script-name="Twinkle"
		:footer-links="footerLinks"
		:primary-action="resolvedPrimaryAction"
		@update:open="open = $event"
		@primary="submit"
	>
		<template v-if="isSysop">
			<cdx-checkbox
				:model-value="tagOnly"
				:title="uls('若您只想标记此页面而不是将其删除', '若您只想標記此頁面而不是將其刪除')"
				@update:model-value="onTagOnlyChange"
			>
				{{ uls('只标记，不删除', '只標記，不刪除') }}
			</cdx-checkbox>
		</template>

		<template v-if="sysopMode">
			<h4 class="tw-speedy-header">{{ uls('删除相关选项', '刪除相關選項') }}</h4>
			<cdx-checkbox
				v-if="namespace % 2 === 0 && namespace !== 2"
				v-model="talkpage"
				:title="uls('删除时附带删除此页面的讨论页。', '刪除時附帶刪除此頁面的討論頁。')"
			>
				{{ uls('删除讨论页', '刪除討論頁') }}
			</cdx-checkbox>
			<cdx-checkbox v-model="redirects" :title="uls('删除到此页的重定向。', '刪除到此頁的重新導向。')">
				{{ uls('删除重定向', '刪除重新導向') }}
			</cdx-checkbox>
			<cdx-checkbox
				v-model="delmultiple"
				:title="uls('您可选择应用于该页的多个理由。', '您可選擇應用於該頁的多個理由。')"
			>
				{{ uls('应用多个理由删除', '應用多個理由刪除') }}
			</cdx-checkbox>
			<cdx-checkbox v-model="openusertalk" :title="openUserTalkLinkLabel">
				{{ openUserTalkLinkLabel }}
			</cdx-checkbox>
		</template>

		<template v-else>
			<h4 class="tw-speedy-header">{{ uls('标记相关选项', '標記相關選項') }}</h4>
			<cdx-checkbox
				v-model="notify"
				:title="
					uls(
						'一个通知模板将会被加入创建者的讨论页，若您启用了该理据的通知。',
						'一個通知模板將會被加入建立者的討論頁，若您啟用了該理據的通知。'
					)
				"
			>
				{{ uls('如可能，通知创建者', '如可能，通知建立者') }}
			</cdx-checkbox>
			<cdx-checkbox
				v-model="blank"
				:title="
					uls(
						'在标记模板前，先清空页面，适用于严重破坏或负面生者传记等。',
						'在標記模板前，先清空頁面，適用於嚴重破壞或負面生者傳記等。'
					)
				"
			>
				{{ uls('清空页面', '清空頁面') }}
			</cdx-checkbox>
			<cdx-checkbox v-model="salting" :title="saltingTooltip">
				{{ uls('同时标记以请求白纸保护', '同時標記以請求白紙保護') }}
			</cdx-checkbox>
			<cdx-checkbox
				v-model="multiple"
				:title="uls('您可选择应用于该页的多个理由。', '您可選擇應用於該頁的多個理由。')"
			>
				{{ uls('应用多个理由', '應用多個理由') }}
			</cdx-checkbox>
		</template>

		<div v-if="priorCountText" class="tw-speedy-prior" :style="{color: priorCountColor}">
			{{ priorCountText }}
			<a :href="priorLogUrl" target="_blank" rel="noopener noreferrer">
				{{ uls('（日志）', '（日誌）') }}
			</a>
		</div>

		<template v-if="radioClick && isMultiple">
			<div>{{ uls('当选择完成后，单击：', '當選擇完成後，點擊：') }}</div>
			<cdx-button action="progressive" weight="primary" @click="submit">
				{{ submitText }}
			</cdx-button>
		</template>

		<template v-for="group in criteriaGroups" :key="group.title">
			<h4 class="tw-speedy-header">{{ group.title }}</h4>
			<template v-for="criterion in group.items" :key="criterion.value">
				<cdx-radio
					v-if="!isMultiple"
					:model-value="selectedCsd[0] ?? ''"
					:input-value="criterion.value"
					name="tw-speedy-csd"
					:disabled="radioDisabled(criterion)"
					@update:model-value="onSelectionChange(criterion.value, $event)"
				>
					<span :class="{'tw-speedy-g7': criterion.value === 'g7' && enlargeG7}">
						{{ criterion.label }}
					</span>
				</cdx-radio>
				<cdx-checkbox
					v-else
					:model-value="selectedCsd"
					:input-value="criterion.value"
					name="tw-speedy-csd"
					@update:model-value="toggleSelection(criterion.value, $event)"
				>
					<span :class="{'tw-speedy-g7': criterion.value === 'g7' && enlargeG7}">
						{{ criterion.label }}
					</span>
				</cdx-checkbox>
				<div v-if="criterion.tooltip" class="tw-speedy-tooltip">{{ criterion.tooltip }}</div>
				<div v-if="subgroupVisible(criterion) && criterion.subgroup" class="tw-speedy-subgroup">
					<template v-if="criterion.subgroup.type === 'input'">
						<label :for="`tw-speedy-${criterion.subgroup.name}`">{{ criterion.subgroup.label }}</label>
						<cdx-text-input
							:id="`tw-speedy-${criterion.subgroup.name}`"
							:model-value="getSubgroupValue(criterion.subgroup.name)"
							@update:model-value="setSubgroupValue(criterion.subgroup.name, $event)"
						/>
					</template>
					<template v-else>
						<label :for="`tw-speedy-${criterion.subgroup.name}`">{{ criterion.subgroup.label }}</label>
						<cdx-select
							:id="`tw-speedy-${criterion.subgroup.name}`"
							:selected="getSubgroupValue(criterion.subgroup.name)"
							:menu-items="
								(criterion.subgroup.list ?? []).map(
									(item): MenuItemData => ({value: item.value, label: item.label})
								)
							"
							@update:selected="setSubgroupValue(criterion.subgroup.name, $event)"
						/>
					</template>
					<cdx-button v-if="radioOpen(criterion)" action="progressive" weight="primary" @click="submit">
						{{ submitText }}
					</cdx-button>
				</div>
			</template>
		</template>

		<div v-if="fileHintVisible" class="tw-speedy-hint">
			{{
				uls(
					'标记CSD F1、F3、F5，请使用Twinkle的“图权”功能。',
					'標記CSD F1、F3、F5，請使用Twinkle的「圖權」功能。'
				)
			}}
		</div>
		<div v-if="!sysopMode" class="tw-speedy-hint">
			{{ uls('提报侵权页面，请使用Twinkle的“侵权”功能。', '提報侵權頁面，請使用Twinkle的「侵權」功能。') }}
		</div>
		<div v-if="nonWikitextNotice" class="tw-speedy-hint">
			{{
				uls('Twinkle不支持在页面内容模型为', 'Twinkle不支援在頁面內容模型為') +
				pageContentModel +
				uls('的页面上挂上快速删除模板，请参见', '的頁面上掛上快速刪除模板，請參見')
			}}
			<a :href="specialSdUrl" target="_blank" rel="noopener noreferrer">
				{{ uls('手动放置模板时的注意事项', '手動放置模板時的注意事項') }}
			</a>
			。
		</div>

		<tw-status ref="statusRef" />
	</tw-dialog>
</template>

<style scoped lang="less">
.tw-speedy-header {
	border-bottom: 1px solid #808080;
	margin: 0.8em 0 0.4em;
}

.tw-speedy-tooltip {
	font-size: 85%;
	color: var(--color-subtle, #54595d);
	margin-left: 1.75em;
}

.tw-speedy-subgroup {
	margin-left: 1.75em;
	margin-bottom: 0.6em;
	display: flex;
	flex-direction: column;
	gap: 0.3em;

	label {
		font-weight: bold;
	}
}

.tw-speedy-prior {
	margin-top: 0.6em;
}

.tw-speedy-hint {
	margin-top: 0.6em;
	font-size: 90%;
}

.tw-speedy-g7 {
	font-size: 1.5em;
	line-height: 1.5em;
}
</style>
