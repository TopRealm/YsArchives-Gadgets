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

interface ArvParams {
	category: 'aiv' | 'ewip' | 'username' | 'spi';
	uid: string;
	pages: string[];
	arvtype: string[];
	hidename: boolean;
	reason: string;
	sockmaster: string;
	sockpuppets: string[];
	checkuser: boolean;
	page: string;
	badid: string;
	goodid: string;
}

const props = defineProps<{
	uid: string;
	isIP: boolean;
	title: string;
	blockNotice: {
		text: string;
		severe: boolean;
	};
	footerLinks: {
		text: string;
		href: string;
	}[];
}>();

const emit = defineEmits<{
	submit: [params: ArvParams, statusContainer: HTMLElement | null, restore: () => void];
	preview: [params: ArvParams, previewBox: HTMLElement | null];
	close: [];
}>();

const open = ref(true);
const submitting = ref(false);
const category = ref<'aiv' | 'ewip' | 'username' | 'spi'>('aiv');
// ewip
const pages = ref<string[]>(['']);
// common
const reason = ref('');
const hidename = ref(false);
const arvtype = ref<string[]>([]);
// spi
const sockmaster = ref(props.uid);
const sockpuppets = ref<string[]>([props.uid, '']);
const checkuser = ref(false);
// aiv
const page = ref(mw.util.getParamValue('vanarticle') || '');
const badid = ref(mw.util.getParamValue('vanarticlerevid') || '');
const goodid = ref(mw.util.getParamValue('vanarticlegoodrevid') || '');

const statusRef = ref<TwStatusExposed | null>(null);
const previewBox = ref<HTMLElement | null>(null);

const categoryItems: MenuItemData[] = [
	{value: 'aiv', label: uls('破坏（LIB:VIP）', '破壞（LIB:VIP）')},
	{value: 'ewip', label: uls('编辑争议（LIB:EWIP）', '編輯爭議（LIB:EWIP）')},
	{
		value: 'username',
		label: uls('用户名（LIB:UAA）', '使用者名稱（LIB:UAA）'),
		disabled: props.isIP,
	},
	{
		value: 'spi',
		label: uls('傀儡调查（LIB:SPI）', '傀儡調查（LIB:SPI）'),
		disabled: props.isIP,
	},
];

const usernameTypes = [
	{
		value: uls('误导性', '誤導性'),
		label: uls('误导性用户名', '誤導性使用者名稱'),
		tooltip: uls(
			'误导性用户名隐含着与贡献者相关或误导他人的事情。例如︰不实观点、暗示账号拥有特定权限或暗示该账号并非由一人拥有而是由一个组群、一个项目或一个集体运作。',
			'誤導性使用者名稱隱含著與貢獻者相關或誤導他人的事情。例如︰不實觀點、暗示賬號擁有特定權限或暗示該賬號並非由一人擁有而是由一個群組、一個計畫或一個集體運作。'
		),
	},
	{
		value: uls('宣传性', '宣傳性'),
		label: uls('宣传性用户名', '宣傳性使用者名稱'),
		tooltip: uls(
			'宣传性用户名会于有兽档案馆上起推销一个组群或一间公司的作用。',
			'宣傳性使用者名稱會於有獸檔案館上起推銷一個群組或一間公司的作用。'
		),
	},
	{
		value: 'shared',
		label: uls('暗示并非由一人拥有', '暗示並非由一人擁有'),
		tooltip: uls(
			'每个账号只可以代表个人（容许一些例外情况），所有与他人分享账号的行为（包括分享账号密码）均被禁止。',
			'每個賬號只可以代表個人（容許一些例外情況），所有與他人分享賬號的行為（包括分享賬號密碼）均被禁止。'
		),
	},
	{
		value: '侮辱性',
		label: uls('侮辱性用户名', '侮辱性使用者名稱'),
		tooltip: uls(
			'侮辱性用户名令协调编辑变得困难，甚至无可能。',
			'侮辱性使用者名稱令協調編輯變得困難，甚至無可能。'
		),
	},
	{
		value: uls('破坏性', '破壞性'),
		label: uls('破坏性用户名', '破壞性使用者名稱'),
		tooltip: uls(
			'破坏性用户名包括人身攻击、伪冒他人或其他一切有着清晰可见的破坏有兽档案馆意图的用户名。',
			'破壞性使用者名稱包括人身攻擊、偽冒他人或其他一切有著清晰可見的破壞有獸檔案館意圖的使用者名稱。'
		),
	},
];

const aivTypes = [
	{value: 'final', label: uls('已发出最后警告', '已發出最後警告')},
	{value: 'postblock', label: uls('封禁过期后随即破坏', '封鎖過期後隨即破壞')},
	{
		value: 'vandalonly',
		label: uls('显而易见的纯破坏用户', '顯而易見的純破壞使用者'),
		disabled: props.isIP,
	},
	{value: 'spambot', label: uls('显而易见的spambot或失窃账号', '顯而易見的spambot或失竊賬號')},
	{
		value: 'promoonly',
		label: uls('仅用来散发广告宣传的用户', '僅用來散發廣告宣傳的使用者'),
		disabled: props.isIP,
	},
];

const badidDisabled = computed(() => page.value === '');
const goodidDisabled = computed(() => badidDisabled.value || badid.value === '');

const addPage = () => {
	if (pages.value.length < 10) {
		pages.value.push('');
	}
};

const removePage = (index: number) => {
	if (pages.value.length > 1) {
		pages.value.splice(index, 1);
	}
};

const addSockpuppet = () => {
	if (sockpuppets.value.length < 9) {
		sockpuppets.value.push('');
	}
};

const sockmasterNotice = computed(() => '{{'.concat('subst:', `Socksuspectnotice|1=${sockmaster.value}}}`));

const removeSockpuppet = (index: number) => {
	if (sockpuppets.value.length > 2) {
		sockpuppets.value.splice(index, 1);
	}
};

const onTypeToggle = (value: string, modelValue: string[] | boolean) => {
	if (Array.isArray(modelValue)) {
		arvtype.value = modelValue.filter((item): item is string => typeof item === 'string');
	} else if (modelValue) {
		arvtype.value = [...arvtype.value, value];
	} else {
		arvtype.value = arvtype.value.filter((item) => item !== value);
	}
};

const updatePage = (index: number, value: string | number) => {
	pages.value[index] = String(value);
};

const updateSockpuppet = (index: number, value: string | number) => {
	sockpuppets.value[index] = String(value);
};

const buildParams = (): ArvParams => ({
	category: category.value,
	uid: props.uid,
	pages: [...pages.value],
	arvtype: [...arvtype.value],
	hidename: hidename.value,
	reason: reason.value,
	sockmaster: sockmaster.value,
	sockpuppets: [...sockpuppets.value],
	checkuser: checkuser.value,
	page: page.value,
	badid: badid.value,
	goodid: goodid.value,
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
			<template #label>{{ uls('选择报告类型：', '選擇報告類別：') }}</template>
			<cdx-select v-model:selected="category" :menu-items="categoryItems" :disabled="submitting" />
		</cdx-field>
		<div
			v-if="blockNotice.text"
			:style="{color: blockNotice.severe ? '#f00' : 'black'}"
			class="tw-arv-blockwarning"
		>
			{{ blockNotice.text }}
		</div>

		<!-- 编辑争议 -->
		<template v-if="category === 'ewip'">
			<cdx-field>
				<template #label>{{ uls('相关页面：', '相關頁面：') }}</template>
				<template #description>
					{{ uls('如不希望让报告链接到页面，请留空', '如不希望讓報告連結到頁面，請留空') }}
				</template>
				<div v-for="(_, index) in pages" :key="index" class="tw-arv-dyninput">
					<cdx-text-input
						:model-value="pages[index] ?? ''"
						:aria-label="`${uls('页面：', '頁面：')} ${index + 1}`"
						:disabled="submitting"
						@update:model-value="updatePage(index, $event)"
					/>
					<cdx-button
						v-if="pages.length > 1"
						weight="quiet"
						:disabled="submitting"
						@click="removePage(index)"
					>
						{{ uls('移除', '移除') }}
					</cdx-button>
				</div>
				<cdx-button v-if="pages.length < 10" weight="quiet" :disabled="submitting" @click="addPage">
					{{ uls('添加页面', '新增頁面') }}
				</cdx-button>
			</cdx-field>
			<cdx-field>
				<template #label>{{ uls('评论：', '評論：') }}</template>
				<cdx-text-area v-model="reason" :disabled="submitting" />
			</cdx-field>
		</template>

		<!-- 不当用户名 -->
		<template v-else-if="category === 'username'">
			<cdx-field>
				<template #label>{{ uls('不当用户名类型', '不當使用者名稱類別') }}</template>
				<template #description>
					{{
						uls(
							'有兽档案馆不允许使用带有误导性、宣传性、侮辱性或破坏性的用户名。此外，使用域名及邮箱地址的用户名亦被禁止。这些准则俱应应用至用户名及签名。在其他语言中不当的用户名或通过错拼、替代、暗示、拆字或任何间接方法达成的非妥当用户名同样视为违规。',
							'有獸檔案館不允許使用帶有誤導性、宣傳性、侮辱性或破壞性的使用者名稱。此外，使用域名及電子信箱位址的使用者名稱亦被禁止。這些準則俱應應用至使用者名稱及簽名。在其他語言中不當的使用者名稱或通過錯拼、替代、暗示、拆字或任何間接方法達成的非妥當使用者名稱同樣視為違規。'
						)
					}}
				</template>
				<cdx-checkbox
					v-for="item in usernameTypes"
					:key="item.value"
					:model-value="arvtype"
					:input-value="item.value"
					name="twinklearv-username-types"
					:disabled="submitting"
					@update:model-value="onTypeToggle(item.value, $event)"
				>
					<span :title="item.tooltip">{{ item.label }}</span>
				</cdx-checkbox>
			</cdx-field>
			<cdx-checkbox
				v-model="hidename"
				:disabled="submitting"
				:title="
					uls(
						'若用户名不当请勾选此项，注意：请考虑私下联系管理员处理。',
						'若使用者名稱不當請勾選此項，注意：請考慮私下聯絡管理員處理。'
					)
				"
			>
				{{
					uls(
						'在页面上隐藏用户名（需监督的用户名请勿于站内报告，勾选此项并不构成能在站内报告的理由）',
						'在頁面上隱藏使用者名稱（需監督的使用者名稱請勿於站內報告，勾選此項並不構成能在站內報告的理由）'
					)
				}}
			</cdx-checkbox>
			<cdx-field>
				<template #label>{{ uls('评论：', '評論：') }}</template>
				<cdx-text-area v-model="reason" :disabled="submitting" />
			</cdx-field>
		</template>

		<!-- 傀儡调查 -->
		<template v-else-if="category === 'spi'">
			<cdx-field>
				<template #label>{{ uls('主账号：', '主賬號：') }}</template>
				<template #description>
					{{ uls('主账号的用户名（不含User:前缀）', '主賬號的使用者名稱（不含User:字首）') }}
				</template>
				<cdx-text-input v-model="sockmaster" :disabled="submitting" />
			</cdx-field>
			<cdx-field>
				<template #label>{{ uls('傀儡：', '傀儡：') }}</template>
				<template #description>
					{{ uls('傀儡的用户名（不含User:前缀）', '傀儡的使用者名稱（不含User:字首）') }}
				</template>
				<div v-for="(_, index) in sockpuppets" :key="index" class="tw-arv-dyninput">
					<cdx-text-input
						:model-value="sockpuppets[index] ?? ''"
						:aria-label="`${uls('傀儡：', '傀儡：')} ${index + 1}`"
						:disabled="submitting"
						@update:model-value="updateSockpuppet(index, $event)"
					/>
					<cdx-button
						v-if="sockpuppets.length > 2"
						weight="quiet"
						:disabled="submitting"
						@click="removeSockpuppet(index)"
					>
						{{ uls('移除', '移除') }}
					</cdx-button>
				</div>
				<cdx-button v-if="sockpuppets.length < 9" weight="quiet" :disabled="submitting" @click="addSockpuppet">
					{{ uls('添加傀儡', '新增傀儡') }}
				</cdx-button>
			</cdx-field>
			<cdx-field>
				<template #label>{{ uls('证据：', '證據：') }}</template>
				<template #description>
					{{
						uls(
							'输入能够用来体现这些用户可能滥用多重账号的证据，这通常包括茶馆发言、页面历史或其他有关的信息。请避免在此处提供非与傀儡或滥用多重账号相关的其他讨论。',
							'輸入能夠用來體現這些使用者可能濫用多重賬號的證據，這通常包括茶館發言、頁面歷史或其他有關的資訊。請避免在此處提供非與傀儡或濫用多重賬號相關的其他討論。'
						)
					}}
				</template>
				<cdx-text-area v-model="reason" :disabled="submitting" />
			</cdx-field>
			<cdx-checkbox
				v-model="checkuser"
				:disabled="submitting"
				:title="
					uls(
						'用户查核是一种用于获取傀儡指控相关技术证据的工具，若没有正当理由则不会使用，您必须在证据字段充分解释为什么需要使用该工具。用户查核不会用于公开连接用户账号使用的IP地址。',
						'使用者查核是一種用於獲取傀儡指控相關技術證據的工具，若沒有正當理由則不會使用，您必須在證據欄位充分解釋為什麼需要使用該工具。使用者查核不會用於公開連接使用者賬號使用的IP位址。'
					)
				"
			>
				{{ uls('请求用户查核', '請求使用者查核') }}
			</cdx-checkbox>
			<div class="tw-arv-spinotice">
				{{ uls('请使用常识决定是否以', '請使用常識決定是否以') }}
				<code>{{ sockmasterNotice }}</code>
				{{
					uls(
						'通知用户。这不是必须的，对于涉及新用户的报告而言，通知他们能让报告显得更公平，但是许多情况下（如长期破坏者）通知更可能适得其反。',
						'通知使用者。這不是必須的，對於涉及新使用者的報告而言，通知他們能讓報告顯得更公平，但是許多情況下（如長期破壞者）通知更可能適得其反。'
					)
				}}
			</div>
		</template>

		<!-- 破坏 -->
		<template v-else>
			<div class="tw-arv-aiv-notice">
				{{
					uls(
						'提报傀儡应优先发送至傀儡调查，除非相关的账号有高频率、涉及多个页面等紧急严重的破坏行为。',
						'提報傀儡應優先發送至傀儡調查，除非相關的賬號有高頻率、涉及多個頁面等緊急嚴重的破壞行為。'
					)
				}}
			</div>
			<cdx-field>
				<template #label>{{ uls('相关页面：', '相關頁面：') }}</template>
				<template #description>
					{{ uls('如不希望让报告链接到页面，请留空', '如不希望讓報告連結到頁面，請留空') }}
				</template>
				<cdx-text-input v-model="page" :disabled="submitting" />
			</cdx-field>
			<cdx-field>
				<template #label>{{ uls('受到破坏的修订版本：', '受到破壞的修訂版本：') }}</template>
				<template #description>{{ uls('留空以略过差异', '留空以略過差異') }}</template>
				<cdx-text-input v-model="badid" :disabled="submitting || badidDisabled" />
			</cdx-field>
			<cdx-field>
				<template #label>{{ uls('破坏前的修订版本：', '破壞前的修訂版本：') }}</template>
				<template #description>{{ uls('留空以略过差异的较早版本', '留空以略過差異的較早版本') }}</template>
				<cdx-text-input v-model="goodid" :disabled="submitting || goodidDisabled" />
			</cdx-field>
			<cdx-field>
				<template #label>{{ uls('破坏类型：', '破壞類型：') }}</template>
				<cdx-checkbox
					v-for="item in aivTypes"
					:key="item.value"
					:model-value="arvtype"
					:input-value="item.value"
					name="twinklearv-aiv-types"
					:disabled="submitting || item.disabled"
					@update:model-value="onTypeToggle(item.value, $event)"
				>
					{{ item.label }}
				</cdx-checkbox>
			</cdx-field>
			<cdx-checkbox
				v-if="!isIP"
				v-model="hidename"
				:disabled="submitting"
				:title="
					uls(
						'若用户名不当请勾选此项，注意：请考虑私下联系管理员处理。',
						'若使用者名稱不當請勾選此項，注意：請考慮私下聯絡管理員處理。'
					)
				"
			>
				{{ uls('在页面上及编辑摘要隐藏用户名', '在頁面上及編輯摘要隱藏使用者名稱') }}
			</cdx-checkbox>
			<cdx-field>
				<template #label>{{ uls('评论：', '評論：') }}</template>
				<cdx-text-area v-model="reason" :disabled="submitting" />
			</cdx-field>
		</template>

		<cdx-button :disabled="submitting" weight="quiet" @click="onPreview">
			{{ uls('预览', '預覽') }}
		</cdx-button>
		<div ref="previewBox" hidden></div>
		<tw-status ref="statusRef" />
	</tw-dialog>
</template>

<style scoped lang="less">
.tw-arv-blockwarning {
	margin-bottom: 0.5em;
}

.tw-arv-dyninput {
	display: flex;
	align-items: center;
	gap: 0.25em;
	margin-bottom: 0.25em;

	:deep(.cdx-text-input) {
		flex: 1;
	}
}

.tw-arv-spinotice,
.tw-arv-aiv-notice {
	margin: 0.5em 0;
}
</style>
