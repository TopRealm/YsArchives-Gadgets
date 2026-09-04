<script setup lang="ts">
import {CdxButton, CdxCheckbox, CdxSelect, CdxTextInput, type MenuItemData} from '@wikimedia/codex';
import {reactive, ref} from 'vue';
import TwConfigListDialog from './TwConfigListDialog.vue';
import TwStatus from './TwStatus.vue';
import {uls} from './useUls';

interface TwStatusExposed {
	getStatusRoot: () => HTMLElement | null;
}

interface CustomRow {
	value: string;
	label: string;
}

interface PrefDef {
	name: string;
	label: string;
	helptip?: string;
	adminOnly?: boolean;
	type: 'string' | 'boolean' | 'integer' | 'enum' | 'set' | 'customList';
	enumValues?: Record<string, string>;
	setValues?: Record<string, string>;
	setDisplayOrder?: string[];
	customListValueTitle?: string;
	customListLabelTitle?: string;
}

interface SectionDef {
	title: string;
	module: string;
	preferences: PrefDef[];
}

const props = defineProps<{
	sections: SectionDef[];
	defaults: Record<string, unknown>;
	initialValues: Record<string, unknown>;
}>();

const emit = defineEmits<{
	submit: [values: Record<string, unknown>, statusContainer: HTMLElement | null, restore: () => void];
}>();

const values = reactive<Record<string, unknown>>({});
for (const [key, value] of Object.entries(props.initialValues)) {
	values[key] = value;
}

const submitting = ref(false);
const statusRef = ref<TwStatusExposed | null>(null);
const tocVisible = ref(true);

// Custom list editing state
const listDialogOpen = ref(false);
const listPref = ref<PrefDef | null>(null);

// Helpers for the loosely-typed preference values
const getString = (name: string) => {
	const value = values[name];
	return typeof value === 'string' || typeof value === 'number' ? String(value) : '';
};

const getBoolean = (name: string) => values[name] === true;

const getSet = (name: string): string[] => {
	const value = values[name];
	return Array.isArray(value) ? (value as string[]).filter((item) => typeof item === 'string') : [];
};

const getCustom = (name: string): CustomRow[] => {
	const value = values[name];
	if (!Array.isArray(value)) {
		return [];
	}
	return (value as CustomRow[]).filter(
		(row) =>
			typeof row === 'object' && row !== null && typeof row.value === 'string' && typeof row.label === 'string'
	);
};

const setString = (name: string, value: string | number | null) => {
	values[name] = value === null || value === undefined ? '' : String(value);
};

const setBoolean = (name: string, value: boolean | string[]) => {
	values[name] = value === true;
};

const setOrder = (pref: PrefDef): string[] => {
	if (pref.setDisplayOrder) {
		return [...pref.setDisplayOrder];
	}
	return Object.keys(pref.setValues ?? {});
};

const updateSet = (name: string, value: string, modelValue: boolean | string[]) => {
	if (Array.isArray(modelValue)) {
		values[name] = modelValue.filter((item): item is string => typeof item === 'string');
	} else if (modelValue) {
		values[name] = [...getSet(name), value];
	} else {
		values[name] = getSet(name).filter((item) => item !== value);
	}
};

const enumItems = (pref: PrefDef): MenuItemData[] => {
	const items = Object.entries(pref.enumValues ?? {}).map(([value, label]) => ({value, label}));
	const current = getString(pref.name);
	// Append a user-defined value so it remains selectable (legacy behavior)
	if (current && !items.some((item) => item.value === current)) {
		items.push({value: current, label: current});
	}
	return items;
};

// Convert template mentions in helptips to clickable links (legacy behavior)
const helptipHtml = (tip: string) =>
	tip
		.replace(/{{(.+?)}}/g, `<a href="${mw.util.getUrl('Template:')}$1" rel="noopener" target="_blank">$1</a>`)
		.replace(/\[\[(.+?)]]/g, `<a href="${mw.util.getUrl('')}$1" rel="noopener" target="_blank">$1</a>`);

const resetPref = (pref: PrefDef) => {
	const defaultValue = props.defaults[pref.name];
	switch (pref.type) {
		case 'boolean':
			values[pref.name] = defaultValue === true;
			break;
		case 'string':
		case 'integer':
		case 'enum':
			values[pref.name] = defaultValue === undefined || defaultValue === null ? '' : String(defaultValue);
			break;
		case 'set':
			values[pref.name] = Array.isArray(defaultValue)
				? (defaultValue as unknown[]).filter((item): item is string => typeof item === 'string')
				: [];
			break;
		case 'customList':
			values[pref.name] = Array.isArray(defaultValue)
				? (defaultValue as CustomRow[]).map((row) => ({...row}))
				: [];
			break;
		default:
			break;
	}
};

const resetAll = () => {
	for (const section of props.sections) {
		for (const pref of section.preferences) {
			resetPref(pref);
		}
	}
};

const openListDialog = (pref: PrefDef) => {
	listPref.value = pref;
	listDialogOpen.value = true;
};

const onListSave = (rows: CustomRow[]) => {
	if (listPref.value) {
		values[listPref.value.name] = rows;
	}
};

const submit = () => {
	if (submitting.value) {
		return;
	}
	submitting.value = true;
	emit('submit', values, statusRef.value?.getStatusRoot() ?? null, () => {
		submitting.value = false;
	});
};

const resetLabel = uls('复位', '復位');
const restoreDefaultsLabel = uls('恢复默认', '恢復預設');
const saveLabel = uls('保存修改', '儲存修改');
const editItemsLabel = uls('编辑项目', '編輯項目');
</script>

<template>
	<div class="tw-config-toc toc">
		<div class="toctitle">
			<h2>{{ uls('目录 ', '目錄 ') }}</h2>
			<span class="toctoggle">
				[<a class="internal" href="#tw-tocshowhide" @click.prevent="tocVisible = !tocVisible">{{
					tocVisible ? uls('隐藏', '隱藏') : uls('显示', '顯示')
				}}</a
				>]
			</span>
		</div>
		<ul v-if="tocVisible">
			<li v-for="section in sections" :key="section.module" class="toclevel-1">
				<a :href="`#${section.module}`">{{ section.title }}</a>
			</li>
		</ul>
	</div>
	<div class="tw-config-panel">
		<div v-for="section in sections" :key="section.module" class="tw-config-section">
			<h4 :id="section.module">{{ section.title }}</h4>
			<div v-for="pref in section.preferences" :key="pref.name" class="tw-config-pref">
				<cdx-checkbox
					v-if="pref.type === 'boolean'"
					class="tw-config-control tw-config-boolean"
					:model-value="getBoolean(pref.name)"
					@update:model-value="setBoolean(pref.name, $event)"
				>
					{{ pref.label }}
				</cdx-checkbox>
				<template v-else-if="pref.type === 'string' || pref.type === 'integer'">
					<label class="tw-config-label" :for="`tw-config-${pref.name}`">{{ pref.label }}：</label>
					<cdx-text-input
						:id="`tw-config-${pref.name}`"
						class="tw-config-control"
						:model-value="getString(pref.name)"
						:input-type="pref.type === 'integer' ? 'number' : 'text'"
						@update:model-value="setString(pref.name, $event)"
					/>
				</template>
				<template v-else-if="pref.type === 'enum'">
					<label class="tw-config-label" :for="`tw-config-${pref.name}`">{{ pref.label }}：</label>
					<cdx-select
						:id="`tw-config-${pref.name}`"
						class="tw-config-control"
						:selected="getString(pref.name)"
						:menu-items="enumItems(pref)"
						@update:selected="setString(pref.name, $event)"
					/>
				</template>
				<template v-else-if="pref.type === 'set'">
					<span class="tw-config-label">{{ pref.label }}：</span>
					<span class="tw-config-control tw-config-set">
						<cdx-checkbox
							v-for="item in setOrder(pref)"
							:key="item"
							:model-value="getSet(pref.name)"
							:input-value="item"
							:name="`twinkle-config-${pref.name}`"
							@update:model-value="updateSet(pref.name, item, $event)"
						>
							{{ pref.setValues?.[item] ?? item }}
						</cdx-checkbox>
					</span>
				</template>
				<template v-else-if="pref.type === 'customList'">
					<label class="tw-config-label" :for="`tw-config-${pref.name}`">{{ pref.label }}：</label>
					<cdx-button :id="`tw-config-${pref.name}`" class="tw-config-control" @click="openListDialog(pref)">
						{{ editItemsLabel }}
					</cdx-button>
				</template>
				<div class="tw-config-side">
					<div v-if="pref.helptip" class="tw-config-helptip" v-html="helptipHtml(pref.helptip)"></div>
					<span class="tw-config-reset">
						<a href="#tw-reset" @click.prevent="resetPref(pref)">{{ resetLabel }}</a>
					</span>
				</div>
			</div>
		</div>
	</div>
	<div class="tw-config-buttonpane">
		<cdx-button action="progressive" weight="primary" :disabled="submitting" @click="submit">
			{{ saveLabel }}
		</cdx-button>
		<span class="plainlinks">
			<a href="#tw-reset-all" @click.prevent="resetAll">{{ restoreDefaultsLabel }}</a>
		</span>
	</div>
	<tw-status ref="statusRef" />
	<tw-config-list-dialog
		v-if="listPref"
		v-model:open="listDialogOpen"
		:title="listPref.label"
		:value-title="listPref.customListValueTitle ?? uls('数值', '數值')"
		:label-title="listPref.customListLabelTitle ?? uls('标签', '標籤')"
		:initial-rows="getCustom(listPref.name)"
		:default-rows="Array.isArray(defaults[listPref.name]) ? (defaults[listPref.name] as CustomRow[]) : []"
		@save="onListSave"
	/>
</template>

<style scoped lang="less">
.tw-config-toc {
	margin-left: 0.4em;
}

.tw-config-pref {
	display: grid;
	grid-template-columns: minmax(10em, 22em) minmax(12em, 1fr) minmax(8em, auto);
	align-items: center;
	gap: 0.5em 0.8em;
	padding: 0.4em 0;
	border-bottom: 1px solid var(--border-color-subtle, #c8ccd1);

	&:nth-child(odd) {
		background-color: rgb(128 128 128 / 0.1);
	}
}

.tw-config-label {
	text-align: right;
}

.tw-config-boolean {
	grid-column: 1 / 3;
}

.tw-config-side {
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: 0.25em;
}

.tw-config-helptip {
	font-size: 90%;
	color: var(--color-subtle, #54595d);
}

.tw-config-reset {
	text-align: right;
	font-size: 90%;
}

.tw-config-set {
	display: flex;
	flex-wrap: wrap;
	gap: 0 0.7em;

	:deep(.cdx-checkbox) {
		margin-right: 0.4em;
	}
}

.tw-config-section h4 {
	border-bottom: 1px solid #808080;
	margin: 0.8em 0 0.2em;
}

.tw-config-buttonpane {
	display: flex;
	align-items: baseline;
	gap: 2em;
	margin-top: 1em;
	padding: 0.5em;
	background-color: #bccadf;
}

@media (max-width: 767px) {
	.tw-config-pref {
		grid-template-columns: 1fr auto;
	}

	.tw-config-label {
		text-align: left;
		grid-column: 1 / -1;
	}

	.tw-config-control,
	.tw-config-boolean {
		grid-column: 1;
	}

	.tw-config-side {
		grid-column: 1 / -1;
		align-items: flex-start;
	}
}
</style>
