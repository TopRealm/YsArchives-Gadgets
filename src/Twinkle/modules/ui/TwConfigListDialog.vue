<script setup lang="ts">
import {CdxButton, CdxDialog, CdxTextInput} from '@wikimedia/codex';
import {computed, ref, watch} from 'vue';
import {uls} from './useUls';

interface CustomRow {
	value: string;
	label: string;
}

const props = defineProps<{
	open: boolean;
	title: string;
	valueTitle: string;
	labelTitle: string;
	initialRows: CustomRow[];
	defaultRows: CustomRow[];
}>();

const emit = defineEmits<{
	'update:open': [value: boolean];
	save: [rows: CustomRow[]];
}>();

const panelOpen = ref(props.open);
const rows = ref<CustomRow[]>([]);

watch(
	() => props.open,
	(value) => {
		panelOpen.value = value;
		if (value) {
			rows.value = props.initialRows.map((row) => ({...row}));
		}
	}
);

watch(panelOpen, (value) => {
	emit('update:open', value);
});

const addRow = () => {
	rows.value.push({value: '', label: ''});
};

const removeRow = (index: number) => {
	rows.value.splice(index, 1);
};

const reset = () => {
	rows.value = props.defaultRows.map((row) => ({...row}));
};

const save = () => {
	// Exclude totally empty rows, as the legacy listDialog.save did
	const result = rows.value
		.filter((row) => row.value.trim() !== '' || row.label.trim() !== '')
		.map((row) => ({value: row.value, label: row.label}));
	emit('save', result);
	panelOpen.value = false;
};

const primaryAction = computed(() => ({
	label: uls('保存修改', '儲存修改'),
	actionType: 'progressive' as const,
}));

const defaultAction = computed(() => ({
	label: uls('复位', '復位'),
}));
</script>

<template>
	<cdx-dialog
		v-model:open="panelOpen"
		:title="title"
		:use-close-button="true"
		:primary-action="primaryAction"
		:default-action="defaultAction"
		@primary="save"
		@default="reset"
	>
		<table class="wikitable tw-config-list-table">
			<thead>
				<tr>
					<th class="tw-config-list-remove-col"></th>
					<th>{{ valueTitle }}</th>
					<th>{{ labelTitle }}</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(row, index) in rows" :key="index">
					<td>
						<cdx-button weight="quiet" :disabled="false" @click="removeRow(index)">
							{{ uls('移除', '移除') }}
						</cdx-button>
					</td>
					<td>
						<cdx-text-input v-model="row.value" />
					</td>
					<td>
						<cdx-text-input v-model="row.label" />
					</td>
				</tr>
			</tbody>
		</table>
		<cdx-button class="tw-config-list-add" @click="addRow">
			{{ uls('添加', '添加') }}
		</cdx-button>
	</cdx-dialog>
</template>

<style scoped lang="less">
.tw-config-list-table {
	width: 100%;
	margin-bottom: 0.5em;

	.tw-config-list-remove-col {
		width: 5em;
	}

	td {
		padding: 0.25em 0.5em;
	}
}

.tw-config-list-add {
	display: block;
	margin-left: auto;
}
</style>
