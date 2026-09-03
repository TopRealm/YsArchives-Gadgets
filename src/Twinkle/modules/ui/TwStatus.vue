<script setup lang="ts">
import {onBeforeUnmount, onMounted, ref} from 'vue';
import {CdxMessage} from '@wikimedia/codex';

type MessageType = 'notice' | 'success' | 'warning' | 'error';

interface StatusMessage {
	type: MessageType;
	html: string;
}

/**
 * Bridge between Morebits.status and Codex:
 * Morebits.status writes plain `<div class="morebits_status_*">` lines into the
 * hidden raw container; this component mirrors them into CdxMessage banners,
 * preserving any embedded links.
 */
const raw = ref<HTMLElement | null>(null);
const messages = ref<StatusMessage[]>([]);
let observer: MutationObserver | null = null;

const sync = () => {
	if (!raw.value) {
		return;
	}
	const items: StatusMessage[] = [];
	for (const node of raw.value.children) {
		const element = node as HTMLElement;
		const type: MessageType = element.className.includes('morebits_status_warn')
			? 'warning'
			: element.className.includes('morebits_status_error')
				? 'error'
				: element.className.includes('morebits_status_info')
					? 'success'
					: 'notice';
		items.push({
			type,
			html: element.innerHTML,
		});
	}
	messages.value = items;
};

onMounted(() => {
	if (raw.value) {
		observer = new MutationObserver(sync);
		observer.observe(raw.value, {childList: true, subtree: true});
	}
});

onBeforeUnmount(() => {
	observer?.disconnect();
});

const exposed = {
	getStatusRoot: () => raw.value,
};
defineExpose(exposed);
</script>

<template>
	<div ref="raw" hidden></div>
	<div class="tw-status-messages">
		<cdx-message v-for="(message, index) in messages" :key="index" :type="message.type">
			<!-- eslint-disable-next-line vue/no-v-html -- content comes from Morebits.status (already sanitized by Morebits.createHtml or explicitly appended elements) -->
			<span v-html="message.html"></span>
		</cdx-message>
	</div>
</template>

<style scoped lang="less">
.tw-status-messages {
	display: flex;
	flex-direction: column;
	gap: 4px;
	margin-top: 8px;
}
</style>
