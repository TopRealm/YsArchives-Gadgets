<script setup lang="ts">
import {CdxButton, CdxField, CdxRadio, CdxSelect, CdxTextArea, CdxTextInput, type MenuItemData} from '@wikimedia/codex';
import {computed, ref, watch} from 'vue';
import TwDialog from './TwDialog.vue';
import TwStatus from './TwStatus.vue';
import {uls} from './useUls';

interface TwStatusExposed {
	getStatusRoot: () => HTMLElement | null;
}

interface Noticeboard {
	value: string;
	label: string;
}

interface SubmitParams {
	tbtarget: string;
	page: string;
	section: string;
	message: string;
}

const props = defineProps<{
	title: string;
	noticeboards: Noticeboard[];
	defaultNoticeboard?: string;
	footerLinks: {
		text: string;
		href: string;
	}[];
}>();

const emit = defineEmits<{
	submit: [params: SubmitParams, statusContainer: HTMLElement | null];
	preview: [params: SubmitParams, previewBox: HTMLElement | null];
	targetChanged: [previewBox: HTMLElement | null];
	close: [];
}>();

const open = ref(true);
const target = ref('mytalk');
const page = ref('');
const section = ref('');
const message = ref('');
const noticeboard = ref<string>(props.defaultNoticeboard ?? props.noticeboards[0]?.value ?? '');
const submitting = ref(false);
const statusRef = ref<TwStatusExposed | null>(null);
const previewBox = ref<HTMLElement | null>(null);

const targetOptions: {value: string; label: string}[] = [
	{value: 'mytalk', label: uls('回复：我的讨论页', '回覆：我的討論頁')},
	{value: 'usertalk', label: uls('回复：其他用户的讨论页', '回覆：其他使用者的討論頁')},
	{value: 'other', label: uls('回复：其它页面', '回覆：其它頁面')},
	{value: 'see', label: uls('邀请讨论', '邀請討論')},
	{value: 'notice', label: '通告板通知'},
	{value: 'mail', label: uls('“有新邮件”', '「有新郵件」')},
];

const noticeboardItems = computed<MenuItemData[]>(() =>
	props.noticeboards.map((item) => ({
		value: item.value,
		label: item.label,
	}))
);

const showOptout = computed(() => ['usertalk', 'other', 'mytalk'].includes(target.value));
const showNoticeboard = computed(() => target.value === 'notice');
const showPageInput = computed(() => ['usertalk', 'other', 'see'].includes(target.value));
const showMessage = computed(() => target.value !== 'notice');

const pageLabel = computed(() =>
	target.value === 'usertalk' ? uls('用户（必填）', '使用者（必填）') : uls('完整页面名', '完整頁面名')
);
const sectionLabel = computed(() =>
	target.value === 'mail' ? uls('电子邮件主题（可选）', '電子郵件主題（可選）') : uls('章节（可选）', '章節（可選）')
);

const buildParams = (): SubmitParams => ({
	tbtarget: target.value,
	page:
		target.value === 'notice'
			? noticeboard.value
			: showPageInput.value
				? page.value
				: (mw.config.get('wgUserName') ?? ''),
	section: section.value,
	message: message.value.trim(),
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
	if (showPageInput.value && !page.value.trim()) {
		void mw.notify(uls('请填写页面名', '請填寫頁面名'), {
			type: 'warn',
			tag: 'friendlytalkback',
		});
		return;
	}
	submitting.value = true;
	emit('submit', buildParams(), statusRef.value?.getStatusRoot() ?? null);
};

const onPreview = () => {
	emit('preview', buildParams(), previewBox.value);
};

watch(target, () => {
	emit('targetChanged', previewBox.value);
});

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
			<template #label>{{ uls('回复类型', '回覆類型') }}</template>
			<cdx-radio
				v-for="option in targetOptions"
				:key="option.value"
				v-model="target"
				name="twinkle-talkback-target"
				:input-value="option.value"
				:disabled="submitting"
			>
				{{ option.label }}
			</cdx-radio>
		</cdx-field>
		<cdx-field is-fieldset>
			<template #label>工作区</template>
			<div v-if="showOptout" id="twinkle-talkback-optout-message" class="tw-talkback-optout"></div>
			<cdx-field v-if="showNoticeboard">
				<template #label>通告板：</template>
				<cdx-select v-model:selected="noticeboard" :menu-items="noticeboardItems" :disabled="submitting" />
			</cdx-field>
			<cdx-field v-if="showPageInput">
				<template #label>{{ pageLabel }}</template>
				<cdx-text-input v-model="page" :disabled="submitting" />
			</cdx-field>
			<cdx-field>
				<template #label>{{ sectionLabel }}</template>
				<cdx-text-input v-model="section" :disabled="submitting" />
			</cdx-field>
			<cdx-field v-if="showMessage">
				<template #label>{{ uls('附加信息（可选）：', '附加資訊（可選）：') }}</template>
				<cdx-text-area v-model="message" :disabled="submitting" />
			</cdx-field>
		</cdx-field>
		<cdx-button :disabled="submitting" weight="quiet" @click="onPreview">
			{{ uls('预览', '預覽') }}
		</cdx-button>
		<div ref="previewBox" hidden></div>
		<tw-status ref="statusRef" />
	</tw-dialog>
</template>

<style scoped lang="less">
.tw-talkback-optout {
	color: #f00;
}
</style>
