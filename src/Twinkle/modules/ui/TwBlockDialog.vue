<script setup lang="ts">
import {
	CdxButton,
	CdxCheckbox,
	CdxField,
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

interface PresetOption {
	label: string;
	value: string;
	selected?: boolean;
	disabled?: boolean;
}

interface PresetGroup {
	label: string;
	list: PresetOption[];
}

type PresetInfo = Record<string, unknown>;

interface BlockNotice {
	currentBlock: string | null;
	currentInfo: string | null;
	blockLog: string | null;
	blockLogLink: string;
}

interface BlockParams {
	actiontype: string[];
	preset: string;
	expiry_preset: string;
	expiry: string;
	pagerestrictions: string;
	namespacerestrictions: string[];
	nocreate: boolean;
	noemail: boolean;
	disabletalk: boolean;
	autoblock: boolean;
	hardblock: boolean;
	watchuser: boolean;
	closevip: boolean;
	reason: string;
	template: string;
	article: string;
	area: string;
	template_expiry: string;
	block_reason: string;
	blank_duration: boolean;
	notalk: boolean;
	noemail_template: boolean;
	nocreate_template: boolean;
	tag: string[];
	sppUsername: string;
	sppType: string;
	sppEvidence: string;
	spmChecked: boolean;
	spmEvidence: string;
	unblock_reason: string;
	block64: boolean;
}

const props = defineProps<{
	title: string;
	showBlock: boolean;
	showTemplate: boolean;
	showTag: boolean;
	showProtect: boolean;
	showUnblock: boolean;
	initialBlock: boolean;
	initialTemplate: boolean;
	initialPartial: boolean;
	initialUnblock: boolean;
	sixtyFourAvailable: boolean;
	initialBlock64: boolean;
	presetGroups: PresetGroup[];
	templateGroups: PresetGroup[];
	presetsInfo: Record<string, PresetInfo>;
	expiryPresetOptions: {
		value: string;
		label: string;
	}[];
	namespaces: {
		value: number;
		label: string;
	}[];
	isRegistered: boolean;
	userIsBot: boolean;
	notices: BlockNotice;
	footerLinks: {
		text: string;
		href: string;
	}[];
}>();

const emit = defineEmits<{
	submit: [params: BlockParams, statusContainer: HTMLElement | null, restore: () => void];
	preview: [params: BlockParams, previewBox: HTMLElement | null];
	block64Changed: [checked: boolean];
	close: [];
}>();

const open = ref(true);
const submitting = ref(false);
const actiontype = ref<string[]>([]);
const block64 = ref(props.initialBlock64);
const preset = ref('');
const expiryPreset = ref('custom');
const expiry = ref('');
const pagerestrictionsInput = ref('');
const namespacerestrictions = ref<string[]>([]);
const nocreate = ref(false);
const noemail = ref(false);
const disabletalk = ref(false);
const autoblock = ref(false);
const hardblock = ref(false);
const watchuser = ref(false);
const closevip = ref(true);
const reason = ref('');
const template = ref('');
const article = ref('');
const area = ref('');
const templateExpiry = ref('');
const blockReason = ref('');
const blankDuration = ref(false);
const notalk = ref(false);
const noemailTemplate = ref(false);
const nocreateTemplate = ref(false);
const tag = ref<string[]>([]);
const sppUsername = ref('');
const sppType = ref('blocked');
const sppEvidence = ref('');
const spmChecked = ref(false);
const spmEvidence = ref('');
const unblockReason = ref('');
const previewBox = ref<HTMLElement | null>(null);
const statusRef = ref<TwStatusExposed | null>(null);

// Initialize actiontype state from props
actiontype.value = [
	...(props.initialBlock ? ['block'] : []),
	...(props.initialTemplate ? ['template'] : []),
	...(props.initialPartial ? ['partial'] : []),
	...(props.initialUnblock ? ['unblock'] : []),
];

const toBlock = computed(() => actiontype.value.includes('block'));
const toTemplate = computed(() => actiontype.value.includes('template'));
const toPartial = computed(() => actiontype.value.includes('partial'));
const toTag = computed(() => actiontype.value.includes('tag'));
const toUnblock = computed(() => actiontype.value.includes('unblock'));

const partialDisabled = computed(() => !toBlock.value && !toTemplate.value);

const toggleAction = (value: string, modelValue: string[] | boolean) => {
	let next: string[];
	if (Array.isArray(modelValue)) {
		next = modelValue.filter((item): item is string => typeof item === 'string');
	} else if (modelValue) {
		next = [...actiontype.value, value];
	} else {
		next = actiontype.value.filter((item) => item !== value);
	}
	// Faithful port of the unblock exclusivity in change_action
	if (value === 'unblock' && next.includes('unblock')) {
		next = ['unblock'];
	} else if (value !== 'unblock' && next.includes('unblock')) {
		next = next.filter((item) => item !== 'unblock');
	}
	actiontype.value = next;
};

const presetItems = computed<MenuItemData[]>(() => {
	const items: MenuItemData[] = [];
	for (const [groupIndex, group] of props.presetGroups.entries()) {
		if (group.list.length === 0) {
			continue;
		}
		if (group.list.length > 0 && props.presetGroups.length > 1) {
			items.push({
				value: `__group_${groupIndex}`,
				label: group.label,
				disabled: true,
			});
		}
		for (const item of group.list) {
			items.push({
				value: item.value,
				label: item.label,
				disabled: item.disabled,
			});
		}
	}
	return items;
});

const templateItems = computed<MenuItemData[]>(() => {
	const items: MenuItemData[] = [];
	for (const [groupIndex, group] of props.templateGroups.entries()) {
		if (group.list.length === 0) {
			continue;
		}
		if (props.templateGroups.length > 1) {
			items.push({
				value: `__group_${groupIndex}`,
				label: group.label,
				disabled: true,
			});
		}
		for (const item of group.list) {
			items.push({
				value: item.value,
				label: item.label,
				disabled: item.disabled,
			});
		}
	}
	return items;
});

const expiryPresetItems = computed<MenuItemData[]>(() =>
	props.expiryPresetOptions.map((option) => ({value: option.value, label: option.label}))
);

const seeAlsoOptions = [
	{value: uls('过滤器日志', '過濾器日誌'), label: uls('过滤器日志', '過濾器日誌')},
	{value: uls('用户讨论页', '使用者討論頁'), label: uls('用户讨论页', '使用者討論頁')},
	{value: uls('过去的封禁记录', '過去的封鎖記錄'), label: uls('过去的封禁记录', '過去的封鎖記錄')},
];

const seeAlsoValues = ref<string[]>([]);

// CdxCheckbox with an array model emits boolean | string[]
const updateNamespaces = (value: boolean | string[]) => {
	namespacerestrictions.value = Array.isArray(value)
		? value.filter((item): item is string => typeof item === 'string')
		: [];
};
const updateTag = (value: boolean | string[]) => {
	tag.value = Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : [];
};

// Faithful port of Twinkle.block.callback.toggle_see_alsos
const toggleSeeAlso = (value: string, modelValue: string[] | boolean) => {
	let next: string[];
	if (Array.isArray(modelValue)) {
		next = modelValue.filter((item): item is string => typeof item === 'string');
	} else if (modelValue) {
		next = [...seeAlsoValues.value, value];
	} else {
		next = seeAlsoValues.value.filter((item) => item !== value);
	}
	// Remove the previous 参见 note from the reason
	reason.value = reason.value.replace(new RegExp(`(<!-- )(参见|參見)${seeAlsoValues.value.join('、')}( -->)`), '');
	seeAlsoValues.value = next;
	if (seeAlsoValues.value.length) {
		reason.value = `${reason.value}<!-- ${uls('参见', '參見')}${seeAlsoValues.value.join('、')} -->`;
	}
};

// Faithful port of Twinkle.block.callback.update_form
const applyPreset = (key: string) => {
	if (!key) {
		return;
	}
	const data = props.presetsInfo[key];
	if (!data) {
		return;
	}
	if (!data['useInitialOptions']) {
		let presetExpiry = String(data['expiry'] ?? '');
		if (Date.parse(presetExpiry)) {
			presetExpiry = new Date(presetExpiry).toUTCString();
			expiryPreset.value = 'custom';
		} else {
			expiryPreset.value = presetExpiry || 'custom';
		}
		expiry.value = presetExpiry;
	}
	const checkValue = (name: string) => {
		const value = data[name];
		return value === '' || !!value;
	};
	nocreate.value = checkValue('nocreate');
	noemail.value = checkValue('noemail');
	disabletalk.value = checkValue('disabletalk');
	hardblock.value = checkValue('hardblock');
	watchuser.value = checkValue('watchuser');
	if (props.userIsBot || /bot\b/i.test(mw.config.get('wgRelevantUserName') || '')) {
		autoblock.value = false;
	} else {
		autoblock.value = checkValue('autoblock');
	}
	if (data['prependReason'] && data['reason']) {
		reason.value = `${String(data['reason'])}；${reason.value}`;
	} else {
		reason.value = String(data['reason'] ?? '');
	}
	// Clear and/or set any partial page or namespace restrictions
	if (!data['useInitialOptions']) {
		pagerestrictionsInput.value = '';
		namespacerestrictions.value = [];
	}
	const restrictions = data['restrictions'] as
		| {
				pages?: {
					title: string;
				}[];
				namespaces?: number[];
		  }
		| undefined;
	if (restrictions?.pages && pagerestrictionsInput.value === '') {
		pagerestrictionsInput.value = restrictions.pages.map((pr) => pr.title).join('、');
	}
	if (restrictions?.namespaces) {
		namespacerestrictions.value = restrictions.namespaces.map(String);
	}
	// Mirror the preset to the template selection
	const templateName = String(data['templateName'] || key);
	if (templateItems.value.some((item) => item.value === templateName)) {
		template.value = templateName;
	} else {
		template.value = key;
	}
	applyTemplate();
};

// Faithful port of Twinkle.block.callback.change_template
const applyTemplate = () => {
	const settings = props.presetsInfo[template.value] ?? {};
	if (!toBlock.value) {
		if (settings['indefinite'] || settings['nonstandard']) {
			templateExpiry.value = 'infinity';
		} else if (templateExpiry.value === 'infinity') {
			templateExpiry.value = '';
		}
	}
	if (settings['reasonParam']) {
		blockReason.value = String(props.presetsInfo[preset.value]?.['reason'] ?? '');
	} else {
		blockReason.value = '';
	}
};

const templateExpiryHidden = computed(() => {
	const settings = props.presetsInfo[template.value] ?? {};
	return !toBlock.value && (settings['indefinite'] || settings['nonstandard']);
});

const blankDurationVisible = computed(() => {
	const settings = props.presetsInfo[template.value] ?? {};
	return !settings['indefinite'] && !settings['nonstandard'];
});

const notalkVisible = computed(() => {
	const settings = props.presetsInfo[template.value] ?? {};
	return !settings['nonstandard'];
});

const articleVisible = computed(() => {
	const settings = props.presetsInfo[template.value] ?? {};
	return !!settings['pageParam'];
});

const blockReasonVisible = computed(() => {
	const settings = props.presetsInfo[template.value] ?? {};
	return !!settings['reasonParam'];
});

const areaVisible = computed(() => toPartial.value && !toBlock.value);

const expiryInputVisible = computed(() => expiryPreset.value === 'custom');

watch(expiryPreset, (value) => {
	if (value !== 'custom') {
		expiry.value = value;
	}
});

watch(preset, (value) => {
	if (value && !value.startsWith('__group_')) {
		applyPreset(value);
	}
});

watch(template, (value) => {
	if (value && !value.startsWith('__group_')) {
		applyTemplate();
	}
});

watch(block64, (checked) => {
	emit('block64Changed', checked);
});

const primaryAction = computed(() => ({
	label: uls('提交', '提交'),
	actionType: 'progressive' as const,
	disabled: submitting.value,
}));

const buildParams = (): BlockParams => ({
	actiontype: [...actiontype.value],
	preset: preset.value,
	expiry_preset: expiryPreset.value,
	expiry: expiry.value,
	pagerestrictions: pagerestrictionsInput.value,
	namespacerestrictions: [...namespacerestrictions.value],
	nocreate: nocreate.value,
	noemail: noemail.value,
	disabletalk: disabletalk.value,
	autoblock: autoblock.value,
	hardblock: hardblock.value,
	watchuser: watchuser.value,
	closevip: closevip.value,
	reason: reason.value,
	template: template.value,
	article: article.value,
	area: area.value,
	template_expiry: templateExpiry.value,
	block_reason: blockReason.value,
	blank_duration: blankDuration.value,
	notalk: notalk.value,
	noemail_template: noemailTemplate.value,
	nocreate_template: nocreateTemplate.value,
	tag: [...tag.value],
	sppUsername: sppUsername.value,
	sppType: sppType.value,
	sppEvidence: sppEvidence.value,
	spmChecked: spmChecked.value,
	spmEvidence: spmEvidence.value,
	unblock_reason: unblockReason.value,
	block64: block64.value,
});

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

// Labels containing template braces must be assembled in script scope
const tagLabels = {
	'Blocked user': `{{Blocked user}}：${uls('一般永久封禁', '一般永久封鎖')}`,
	Sockpuppet: `{{Sockpuppet}}：${uls('傀儡账号', '傀儡賬號')}`,
	Sockpuppeteer: `{{Sockpuppeteer|blocked}}：${uls('傀儡主账号', '傀儡主賬號')}`,
};
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
			<cdx-checkbox
				v-if="showBlock"
				:model-value="actiontype"
				input-value="block"
				name="twinkleblock-actiontype"
				:disabled="submitting"
				@update:model-value="toggleAction('block', $event)"
			>
				{{ uls('封禁用户', '封鎖使用者') }}
			</cdx-checkbox>
			<cdx-checkbox
				v-if="showBlock"
				:model-value="actiontype"
				input-value="partial"
				name="twinkleblock-actiontype"
				:disabled="submitting || partialDisabled"
				@update:model-value="toggleAction('partial', $event)"
			>
				{{ uls('部分封禁', '部分封鎖') }}
			</cdx-checkbox>
			<cdx-checkbox
				v-if="showTemplate"
				:model-value="actiontype"
				input-value="template"
				name="twinkleblock-actiontype"
				:disabled="submitting"
				@update:model-value="toggleAction('template', $event)"
			>
				{{ uls('加入封禁模板到用户讨论页', '加入封鎖模板到使用者討論頁') }}
			</cdx-checkbox>
			<cdx-checkbox
				v-if="showTag"
				:model-value="actiontype"
				input-value="tag"
				name="twinkleblock-actiontype"
				:disabled="submitting"
				@update:model-value="toggleAction('tag', $event)"
			>
				{{ uls('标记用户页', '標記使用者頁面') }}
			</cdx-checkbox>
			<cdx-checkbox
				v-if="showProtect"
				:model-value="actiontype"
				input-value="protect"
				name="twinkleblock-actiontype"
				:disabled="submitting"
				@update:model-value="toggleAction('protect', $event)"
			>
				{{ uls('保护用户页', '保護使用者頁面') }}
			</cdx-checkbox>
			<cdx-checkbox
				v-if="showUnblock"
				:model-value="actiontype"
				input-value="unblock"
				name="twinkleblock-actiontype"
				:disabled="submitting"
				@update:model-value="toggleAction('unblock', $event)"
			>
				{{ uls('解除封禁用户', '解除封鎖使用者') }}
			</cdx-checkbox>
		</cdx-field>

		<template v-if="sixtyFourAvailable">
			<cdx-checkbox v-model="block64" :disabled="submitting">
				{{ uls('改成封禁/64', '改成封鎖/64') }}
			</cdx-checkbox>
			<div class="tw-block-64-note">
				{{ uls('直接封禁/64段有益无害。', '直接封鎖/64段有益無害。') }}
			</div>
		</template>

		<template v-if="toBlock">
			<cdx-field>
				<template #label>{{ uls('选择默认：', '選擇預設：') }}</template>
				<cdx-select v-model:selected="preset" :menu-items="presetItems" :disabled="submitting" />
			</cdx-field>
			<div v-if="notices.currentBlock" class="tw-block-notice">
				<b>{{ notices.currentBlock }}</b>
				<span v-if="notices.currentInfo">{{ notices.currentInfo }}</span>
			</div>
			<div v-if="notices.blockLog" class="tw-block-notice">
				{{ notices.blockLog }}
				<a :href="notices.blockLogLink" target="_blank" rel="noopener noreferrer">
					{{ uls('封禁日志', '封鎖日誌') }}
				</a>
			</div>
			<cdx-field>
				<template #label>{{ uls('过期时间：', '過期時間：') }}</template>
				<cdx-select v-model:selected="expiryPreset" :menu-items="expiryPresetItems" :disabled="submitting" />
			</cdx-field>
			<cdx-field v-if="expiryInputVisible">
				<template #label>{{ uls('自定义过期时间', '自訂過期時間') }}</template>
				<cdx-text-input v-model="expiry" :disabled="submitting" />
			</cdx-field>
			<template v-if="toPartial">
				<cdx-field>
					<template #label>{{ uls('页面封禁', '頁面封鎖') }}</template>
					<template #description>{{
						uls('最多10个页面，用顿号或逗号分隔。', '最多10個頁面，用頓號或逗號分隔。')
					}}</template>
					<cdx-text-input
						v-model="pagerestrictionsInput"
						:placeholder="uls('输入要阻止用户编辑的页面', '輸入要阻止使用者編輯的頁面')"
						:disabled="submitting"
					/>
				</cdx-field>
				<cdx-field>
					<template #label>{{ uls('命名空间封禁', '命名空間封鎖') }}</template>
					<cdx-checkbox
						v-for="ns in namespaces"
						:key="ns.value"
						:model-value="namespacerestrictions"
						:input-value="String(ns.value)"
						name="twinkleblock-namespaces"
						:disabled="submitting"
						@update:model-value="updateNamespaces"
					>
						{{ ns.label }}
					</cdx-checkbox>
				</cdx-field>
			</template>
			<cdx-field is-fieldset>
				<template #label>{{ uls('封禁选项', '封鎖選項') }}</template>
				<cdx-checkbox v-model="nocreate" :disabled="submitting">
					{{ uls('禁止创建账号', '禁止建立賬號') }}
				</cdx-checkbox>
				<cdx-checkbox v-model="noemail" :disabled="submitting">
					{{ uls('电子邮件停用', '電子郵件停用') }}
				</cdx-checkbox>
				<cdx-checkbox v-model="disabletalk" :disabled="submitting">
					{{ uls('不能编辑自己的讨论页', '不能編輯自己的討論頁') }}
				</cdx-checkbox>
				<cdx-checkbox v-if="isRegistered" v-model="autoblock" :disabled="submitting">
					{{ uls('自动封禁', '自動封鎖') }}
				</cdx-checkbox>
				<cdx-checkbox v-else v-model="hardblock" :disabled="submitting">
					{{ uls('阻止登录用户使用该IP地址编辑', '阻止登入使用者使用該IP位址編輯') }}
				</cdx-checkbox>
				<cdx-checkbox v-model="watchuser" :disabled="submitting">
					{{ uls('监视该用户的用户页和讨论页', '監視該使用者的使用者頁面和討論頁') }}
				</cdx-checkbox>
				<cdx-checkbox v-model="closevip" :disabled="submitting">
					{{ uls('标记当前的破坏中的请求', '標記當前的破壞中的請求') }}
				</cdx-checkbox>
			</cdx-field>
			<cdx-field>
				<template #label>{{ uls('理由（用于封禁日志）：', '理由（用於封鎖日誌）：') }}</template>
				<cdx-text-area v-model="reason" :disabled="submitting" />
			</cdx-field>
			<cdx-field is-fieldset>
				<template #label>{{ uls('参见：', '參見：') }}</template>
				<cdx-checkbox
					v-for="option in seeAlsoOptions"
					:key="option.value"
					:model-value="seeAlsoValues"
					:input-value="option.value"
					name="twinkleblock-seealso"
					:disabled="submitting"
					@update:model-value="toggleSeeAlso(option.value, $event)"
				>
					{{ option.label }}
				</cdx-checkbox>
			</cdx-field>
		</template>

		<template v-if="toTemplate">
			<cdx-field>
				<template #label>{{ uls('选择讨论页模板：', '選擇討論頁模板：') }}</template>
				<cdx-select v-model:selected="template" :menu-items="templateItems" :disabled="submitting" />
			</cdx-field>
			<cdx-field v-if="articleVisible">
				<template #label>{{ uls('链接页面', '連結頁面') }}</template>
				<cdx-text-input v-model="article" :disabled="submitting" />
			</cdx-field>
			<cdx-field v-if="areaVisible">
				<template #label>{{ uls('封禁范围', '封鎖範圍') }}</template>
				<cdx-text-input v-model="area" :disabled="submitting" />
			</cdx-field>
			<cdx-field v-if="!toBlock && !templateExpiryHidden">
				<template #label>封禁期限：</template>
				<cdx-text-input v-model="templateExpiry" :disabled="submitting" />
			</cdx-field>
			<cdx-field v-if="blockReasonVisible">
				<template #label>{{ uls('“由于……您已被封禁”', '「由於……您已被封鎖」') }}</template>
				<cdx-text-input v-model="blockReason" :disabled="submitting" />
			</cdx-field>
			<cdx-checkbox v-if="toBlock && blankDurationVisible" v-model="blankDuration" :disabled="submitting">
				{{ uls('不在模板中包含封禁期限', '不在模板中包含封鎖期限') }}
			</cdx-checkbox>
			<template v-if="!toBlock">
				<cdx-checkbox v-if="notalkVisible" v-model="notalk" :disabled="submitting">
					{{ uls('不能编辑自己的讨论页', '不能編輯自己的討論頁') }}
				</cdx-checkbox>
				<cdx-checkbox v-if="toPartial" v-model="noemailTemplate" :disabled="submitting">
					{{ uls('不能发送电子邮件', '不能傳送電子郵件') }}
				</cdx-checkbox>
				<cdx-checkbox v-if="toPartial" v-model="nocreateTemplate" :disabled="submitting">
					{{ uls('不能创建账号', '不能建立賬號') }}
				</cdx-checkbox>
			</template>
			<cdx-button :disabled="submitting" weight="quiet" @click="onPreview">
				{{ uls('预览', '預覽') }}
			</cdx-button>
			<div ref="previewBox" hidden></div>
		</template>

		<template v-if="toTag">
			<cdx-field is-fieldset>
				<template #label>{{ uls('选择用户页模板：', '選擇使用者頁面模板：') }}</template>
				<cdx-checkbox
					:model-value="tag"
					input-value="Blocked user"
					name="twinkleblock-tag"
					:disabled="submitting"
					@update:model-value="updateTag"
				>
					{{ tagLabels['Blocked user'] }}
				</cdx-checkbox>
				<cdx-checkbox
					:model-value="tag"
					input-value="Sockpuppet"
					name="twinkleblock-tag"
					:disabled="submitting"
					@update:model-value="updateTag"
				>
					{{ tagLabels.Sockpuppet }}
				</cdx-checkbox>
				<template v-if="tag.includes('Sockpuppet')">
					<cdx-field>
						<template #label>{{ uls('主账号用户名：', '主賬號使用者名稱：') }}</template>
						<cdx-text-input v-model="sppUsername" :disabled="submitting" />
					</cdx-field>
					<cdx-field>
						<template #label>{{ uls('状态：', '狀態：') }}</template>
						<cdx-select
							v-model:selected="sppType"
							:menu-items="[
								{value: 'blocked', label: `blocked - ${uls('仅依行为证据认定', '僅依行為證據認定')}`},
								{value: 'proven', label: `proven - ${uls('经傀儡调查确认', '經傀儡調查確認')}`},
								{value: 'confirmed', label: `confirmed - ${uls('经查核确认', '經查核確認')}`},
							]"
							:disabled="submitting"
						/>
					</cdx-field>
					<cdx-field>
						<template #label>{{ uls('根据……确定：', '根據……確定：') }}</template>
						<cdx-text-input v-model="sppEvidence" :disabled="submitting" />
					</cdx-field>
				</template>
				<cdx-checkbox
					:model-value="tag"
					input-value="Sockpuppeteer"
					name="twinkleblock-tag"
					:disabled="submitting"
					@update:model-value="updateTag"
				>
					{{ tagLabels.Sockpuppeteer }}
				</cdx-checkbox>
				<template v-if="tag.includes('Sockpuppeteer')">
					<cdx-checkbox v-model="spmChecked" :disabled="submitting">
						{{ uls('经用户查核确认', '經使用者查核確認') }}
					</cdx-checkbox>
					<cdx-field>
						<template #label>{{ uls('额外理由：', '額外理由：') }}</template>
						<cdx-text-input v-model="spmEvidence" :disabled="submitting" />
					</cdx-field>
				</template>
			</cdx-field>
		</template>

		<template v-if="toUnblock">
			<cdx-field>
				<template #label>{{ uls('理由（用于封禁日志）：', '理由（用於封鎖日誌）：') }}</template>
				<cdx-text-area v-model="unblockReason" :disabled="submitting" />
			</cdx-field>
		</template>

		<tw-status ref="statusRef" />
	</tw-dialog>
</template>

<style scoped lang="less">
.tw-block-notice {
	margin: 0.5em 0;
	color: #a00;
}

.tw-block-64-note {
	margin: 0.25em 0 0.5em;
}
</style>
