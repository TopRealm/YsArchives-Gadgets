<script setup lang="ts">
import {CdxButton, CdxCheckbox, CdxField, CdxSelect, CdxTextInput, type MenuItemData} from '@wikimedia/codex';
import {computed, ref, watch} from 'vue';
import TwDialog from './TwDialog.vue';
import TwStatus from './TwStatus.vue';
import {uls} from './useUls';
import {useShiftClick} from './useShiftClick';

interface TwStatusExposed {
	getStatusRoot: () => HTMLElement | null;
}

interface PageItem {
	title: string;
	label: string;
	isProtected: boolean;
	subpages?: PageItem[];
}

interface BatchDeleteListData {
	pages: PageItem[];
	loaded: boolean;
	subpagesLoading: boolean;
}

const props = defineProps<{
	title: string;
	reasonList: {
		value: string;
		label: string;
	}[];
	appendPunctuation: (text: string) => string;
	list: BatchDeleteListData;
	footerLinks: {
		text: string;
		href: string;
	}[];
}>();

const emit = defineEmits<{
	submit: [
		params: {
			reason: string;
			pages: string[];
			subpages: string[];
			protectedCount: number;
			delete_page: boolean;
			delete_talk: boolean;
			delete_redirects: boolean;
			delete_subpages: boolean;
			delete_subpage_redirects: boolean;
			delete_subpage_talks: boolean;
			unlink_subpages: boolean;
			unlink_page: boolean;
			unlink_file: boolean;
		},
		statusContainer: HTMLElement | null,
	];
	loadSubpages: [titles: string[]];
	close: [];
}>();

const open = ref(true);
const deletePage = ref(true);
const deleteTalk = ref(true);
const deleteRedirects = ref(true);
const deleteSubpages = ref(false);
const deleteSubpageTalks = ref(false);
const deleteSubpageRedirects = ref(false);
const unlinkSubpages = ref(false);
const unlinkPage = ref(false);
const unlinkFile = ref(true);
const commonReason = ref('');
const reason = ref('');
const selectedPages = ref<string[]>([]);
const selectedSubpages = ref<string[]>([]);
const submitting = ref(false);
const statusRef = ref<TwStatusExposed | null>(null);
const {onShiftClick: onMainShiftClick} = useShiftClick();
const subpageShiftClickers = new Map<string, ReturnType<typeof useShiftClick>>();

const getSubpageShiftClick = (pageTitle: string) => {
	if (!subpageShiftClickers.has(pageTitle)) {
		subpageShiftClickers.set(pageTitle, useShiftClick());
	}
	return subpageShiftClickers.get(pageTitle)!.onShiftClick;
};

const reasonItems = computed<MenuItemData[]>(() =>
	props.reasonList.map((item) => ({value: item.value, label: item.label}))
);

// Select everything when the main list arrives.
watch(
	() => props.list.pages,
	(list) => {
		selectedPages.value = list.map((item) => item.title);
	}
);

// Auto-select subpages when they are loaded.
watch(
	() => props.list.pages.map((item) => item.subpages),
	() => {
		for (const page of props.list.pages) {
			if (page.subpages) {
				for (const subpage of page.subpages) {
					if (!selectedSubpages.value.includes(subpage.title)) {
						selectedSubpages.value = [...selectedSubpages.value, subpage.title];
					}
				}
			}
		}
	},
	{deep: true}
);

// Faithful port of Twinkle.batchdelete.callback.toggleSubpages: when enabling
// subpage deletion, sync the sub-options with the main options.
watch(deleteSubpages, (checked) => {
	if (checked) {
		deleteSubpageRedirects.value = deleteRedirects.value;
		deleteSubpageTalks.value = deleteTalk.value;
		unlinkSubpages.value = unlinkPage.value;
		const titlesToLoad = props.list.pages
			.filter((item) => selectedPages.value.includes(item.title) && !item.subpages)
			.map((item) => item.title);
		if (titlesToLoad.length > 0) {
			emit('loadSubpages', titlesToLoad);
		}
	}
});

// Faithful port of Twinkle.batchdelete.callback.change_common_reason.
watch(commonReason, (value) => {
	if (!value) {
		return;
	}
	if (reason.value !== '') {
		reason.value = props.appendPunctuation(reason.value);
	}
	reason.value += value;
	commonReason.value = '';
});

const protectedCount = computed(
	() => props.list.pages.filter((item) => item.isProtected && selectedPages.value.includes(item.title)).length
);

const onToggle = (kind: 'pages' | 'subpages', value: string, modelValue: string[] | boolean) => {
	const target = kind === 'pages' ? selectedPages : selectedSubpages;
	if (Array.isArray(modelValue)) {
		target.value = modelValue.filter((item): item is string => typeof item === 'string');
	} else if (modelValue) {
		target.value = [...target.value, value];
	} else {
		target.value = target.value.filter((item) => item !== value);
	}
};

const selectAll = () => {
	selectedPages.value = props.list.pages.map((item) => item.title);
	if (deleteSubpages.value) {
		for (const page of props.list.pages) {
			if (page.subpages) {
				for (const subpage of page.subpages) {
					if (!selectedSubpages.value.includes(subpage.title)) {
						selectedSubpages.value = [...selectedSubpages.value, subpage.title];
					}
				}
			}
		}
		const titlesToLoad = props.list.pages.filter((item) => !item.subpages).map((item) => item.title);
		if (titlesToLoad.length > 0) {
			emit('loadSubpages', titlesToLoad);
		}
	}
};

const selectNone = () => {
	selectedPages.value = [];
	selectedSubpages.value = [];
};

const primaryAction = computed(() => ({
	label: uls('提交', '提交'),
	actionType: 'progressive' as const,
	disabled: submitting.value,
}));

const submit = () => {
	if (submitting.value) {
		return;
	}
	if (!reason.value.trim()) {
		void mw.notify(uls('您需要给出一个理由', '您需要給出一個理由'), {
			type: 'warn',
			tag: 'twinklebatchdelete',
		});
		return;
	}
	if (selectedPages.value.length === 0) {
		void mw.notify(uls('请至少选择一个页面。', '請至少選擇一個頁面。'), {
			type: 'warn',
			tag: 'twinklebatchdelete',
		});
		return;
	}
	submitting.value = true;
	emit(
		'submit',
		{
			reason: reason.value.trim(),
			pages: [...selectedPages.value],
			subpages: [...selectedSubpages.value],
			protectedCount: protectedCount.value,
			delete_page: deletePage.value,
			delete_talk: deleteTalk.value,
			delete_redirects: deleteRedirects.value,
			delete_subpages: deleteSubpages.value,
			delete_subpage_redirects: deleteSubpageRedirects.value,
			delete_subpage_talks: deleteSubpageTalks.value,
			unlink_subpages: unlinkSubpages.value,
			unlink_page: unlinkPage.value,
			unlink_file: unlinkFile.value,
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
		<cdx-checkbox v-model="deletePage" :disabled="submitting">
			{{ uls('删除页面', '刪除頁面') }}
		</cdx-checkbox>
		<div v-if="deletePage" class="tw-dbatch-subgroup">
			<cdx-checkbox v-model="deleteTalk" :disabled="submitting">
				{{ uls('删除关联的讨论页（用户讨论页除外）', '刪除關聯的討論頁（使用者討論頁除外）') }}
			</cdx-checkbox>
			<cdx-checkbox v-model="deleteRedirects" :disabled="submitting">
				{{ uls('删除到已删页面的重定向页', '刪除到已刪頁面的重新導向頁面') }}
			</cdx-checkbox>
			<cdx-checkbox v-model="deleteSubpages" :disabled="submitting">
				{{ uls('删除已删页面的子页面', '刪除已刪頁面的子頁面') }}
			</cdx-checkbox>
			<div v-if="deleteSubpages" class="tw-dbatch-subgroup">
				<cdx-checkbox v-model="deleteSubpageTalks" :disabled="submitting">
					{{ uls('删除已删子页面的讨论页', '刪除已刪子頁面的討論頁') }}
				</cdx-checkbox>
				<cdx-checkbox v-model="deleteSubpageRedirects" :disabled="submitting">
					{{ uls('删除到已删子页面的重定向页', '刪除到已刪子頁面的重新導向頁面') }}
				</cdx-checkbox>
				<cdx-checkbox v-model="unlinkSubpages" :disabled="submitting">
					{{
						uls(
							'取消所有已删页面的链入（仅处理条目命名空间）',
							'取消所有已刪頁面的連入（僅處理條目命名空間）'
						)
					}}
				</cdx-checkbox>
			</div>
		</div>
		<cdx-checkbox v-model="unlinkPage" :disabled="submitting">
			{{ uls('取消链入（仅处理条目命名空间）', '取消連入（僅處理條目命名空間）') }}
		</cdx-checkbox>
		<cdx-checkbox v-model="unlinkFile" :disabled="submitting">
			{{ uls('移除文件使用（所有命名空间）', '移除檔案使用（所有命名空間）') }}
		</cdx-checkbox>
		<cdx-field>
			<template #label>常用理由：</template>
			<cdx-select v-model:selected="commonReason" :menu-items="reasonItems" :disabled="submitting" />
		</cdx-field>
		<cdx-field>
			<template #label>理由：</template>
			<cdx-text-input v-model="reason" :disabled="submitting" />
		</cdx-field>
		<div v-if="!list.loaded" class="tw-loading">
			{{ uls('加载中……', '載入中……') }}
		</div>
		<template v-else>
			<h5>{{ uls('待删除页面', '待刪除頁面') }}</h5>
			<div class="tw-batch-actions">
				<cdx-button :disabled="submitting" weight="quiet" @click="selectAll">
					{{ uls('全选', '全選') }}
				</cdx-button>
				<cdx-button :disabled="submitting" weight="quiet" @click="selectNone">
					{{ uls('全不选', '全不選') }}
				</cdx-button>
			</div>
			<div v-if="list.subpagesLoading">{{ uls('加载中...', '載入中...') }}</div>
			<div @click="onMainShiftClick">
				<cdx-checkbox
					v-for="item in list.pages"
					:key="item.title"
					:model-value="selectedPages"
					:input-value="item.title"
					name="twinkle-batchdelete-pages"
					:disabled="submitting"
					@update:model-value="onToggle('pages', item.title, $event)"
				>
					<span :class="{'tw-batch-protected': item.isProtected}">{{ item.label }}</span>
				</cdx-checkbox>
			</div>
			<template v-if="deleteSubpages">
				<template v-for="item in list.pages" :key="`${item.title}-sub`">
					<div
						v-if="item.subpages && item.subpages.length > 0"
						class="tw-dbatch-subgroup"
						@click="getSubpageShiftClick(item.title)"
					>
						<cdx-checkbox
							v-for="subpage in item.subpages"
							:key="subpage.title"
							:model-value="selectedSubpages"
							:input-value="subpage.title"
							name="twinkle-batchdelete-subpages"
							:disabled="submitting"
							@update:model-value="onToggle('subpages', subpage.title, $event)"
						>
							<span :class="{'tw-batch-protected': subpage.isProtected}">
								{{ subpage.label }}
							</span>
						</cdx-checkbox>
					</div>
				</template>
			</template>
		</template>
		<tw-status ref="statusRef" />
	</tw-dialog>
</template>

<style scoped lang="less">
.tw-dbatch-subgroup {
	margin-left: 1.5em;
}

.tw-batch-protected {
	color: #f00;
}
</style>
