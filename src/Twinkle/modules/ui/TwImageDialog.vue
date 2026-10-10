<script setup lang="ts">
import {CdxCheckbox, CdxField, CdxRadio, CdxSelect, CdxTextArea, type MenuItemData} from '@wikimedia/codex';
import {computed, ref, watch} from 'vue';
import TwDialog from './TwDialog.vue';
import TwStatus from './TwStatus.vue';
import {uls} from './useUls';

interface TwStatusExposed {
	getStatusRoot: () => HTMLElement | null;
}

interface TypeOption {
	value: string;
	label: string;
}

const props = defineProps<{
	title: string;
	initialNotify: boolean;
	footerLinks: {
		text: string;
		href: string;
	}[];
}>();

const emit = defineEmits<{
	submit: [
		params: {
			type: string;
			notify: boolean;
			f1_source: string;
			f4_type: string;
		},
		statusContainer: HTMLElement | null,
	];
	close: [];
}>();

const open = ref(true);
const notify = ref(props.initialNotify);
const selectedType = ref('no source');
const f1Source = ref('');
const f4Type = ref('');
const submitting = ref(false);
const statusRef = ref<TwStatusExposed | null>(null);

const typeOptions: TypeOption[] = [
	{
		value: 'no permission',
		label: uls('明显侵权之文件（CSD F1）', '明顯侵權之檔案（CSD F1）'),
	},
	{
		value: 'no source',
		label: uls('来源不明（CSD F3）', '來源不明（CSD F3）'),
	},
	{
		value: 'no license',
		label: uls('未知著作权信息（CSD F3）', '未知著作權資訊（CSD F3）'),
	},
	{
		value: 'no license',
		label: uls('著作权无法被查证（CSD F3）', '著作權無法被查證（CSD F3）'),
	},
	{
		value: 'replaceable fair use',
		label: uls('可被替代的非自由著作权文件（CSD F4）', '可被替代的非自由著作權檔案（CSD F4）'),
	},
	{
		value: 'orphaned fair use',
		label: uls('没有被条目使用的非自由著作权文件（CSD F5）', '沒有被條目使用的非自由著作權檔案（CSD F5）'),
	},
	{
		value: 'no fair use rationale',
		label: uls(
			'没有填写任何合理使用依据的非自由著作权文件（CSD F5）',
			'沒有填寫任何合理使用依據的非自由著作權檔案（CSD F5）'
		),
	},
];

const f4TypeOptions = computed<MenuItemData[]>(() => [
	{value: '', label: uls('请选择', '請選擇')},
	{
		value: '1',
		label: uls('有其他自由著作权文件展示相同的事物', '有其他自由著作權檔案展示相同的事物'),
	},
	{
		value: '2',
		label: uls(
			'文件描述的是在世或假定在世人物、仍然存在的建筑、室外雕塑或仍然在售的商品，且预计自行拍摄的照片不受他人著作权保护',
			'檔案描述的是在世或假定在世人物、仍然存在的建築、室外雕塑或仍然在售的商品，且預計自行拍攝的相片不受他人著作權保護'
		),
	},
	{value: '3', label: uls('文件为可自行绘制的地图或图表', '檔案為可自行繪製的地圖或圖表')},
	{value: '4', label: uls('文件来自商业图片机构（如Getty）', '檔案來自商業圖片機構（如Getty）')},
]);

const showF1Source = computed(() => selectedType.value === 'no permission');
const showF4Type = computed(() => selectedType.value === 'replaceable fair use');

const primaryAction = computed(() => ({
	label: uls('提交', '提交'),
	actionType: 'progressive' as const,
	disabled: submitting.value,
}));

const submit = () => {
	if (submitting.value) {
		return;
	}
	if (showF4Type.value && !f4Type.value) {
		void mw.notify(uls('CSD F4：请选择适用类型。', 'CSD F4：請選擇適用類別。'), {
			type: 'warn',
			tag: 'twinkleimage',
		});
		return;
	}
	submitting.value = true;
	emit(
		'submit',
		{
			type: selectedType.value,
			notify: notify.value,
			f1_source: f1Source.value,
			f4_type: f4Type.value,
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
		<cdx-checkbox v-model="notify" :disabled="submitting">
			{{ uls('通知上传者', '通知上傳者') }}
		</cdx-checkbox>
		<cdx-field is-fieldset>
			<template #label>{{ uls('需要的动作', '需要的動作') }}</template>
			<cdx-radio
				v-for="option in typeOptions"
				:key="`${option.value}-${option.label}`"
				v-model="selectedType"
				name="twinkle-image-type"
				:input-value="option.value"
				:disabled="submitting"
			>
				{{ option.label }}
			</cdx-radio>
		</cdx-field>
		<cdx-field v-if="showF1Source">
			<template #label>{{ uls('侵权来源：', '侵權來源：') }}</template>
			<cdx-text-area v-model="f1Source" :disabled="submitting" />
		</cdx-field>
		<cdx-field v-if="showF4Type">
			<template #label>{{ uls('适用类型：', '適用類別：') }}</template>
			<cdx-select v-model:selected="f4Type" :menu-items="f4TypeOptions" :disabled="submitting" />
		</cdx-field>
		<tw-status ref="statusRef" />
	</tw-dialog>
</template>
