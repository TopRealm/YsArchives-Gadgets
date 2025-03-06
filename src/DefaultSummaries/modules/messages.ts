const {wgULS} = window;
const {wgCurRevisionId} = mw.config.get();

const COMMON_SUMMARIES_LABEL: string = wgULS('常用编辑摘要', '常用編輯摘要');

let COMMON_SUMMARIES: string[] = [
	wgULS('修正语法', '修正語法'),
	wgULS('修正错字', '修正錯字'),
	wgULS('调整格式', '調整格式'),
	wgULS('移除破坏', '移除破壞'),
	wgULS('移除测试', '移除測試'),
];

if (!wgCurRevisionId) {
	COMMON_SUMMARIES = [wgULS('新页面', '新頁面'), ...COMMON_SUMMARIES];
}

const ARTICLE_SUMMARIES: string[] = [
	wgULS('扩写条目', '擴寫條目'),
	wgULS('调整来源', '調整來源'),
	wgULS('调整分类', '調整分類'),
	wgULS('调整链接', '调整連結'),
	wgULS('删除无来源内容', '刪除無來源內容'),
	wgULS('恢复移除的内容', '恢復移除的內容'),
];

const TALKPAGE_SUMMARIES: string[] = [
	wgULS('回复', '回覆'),
	wgULS('评论', '評論'),
	wgULS('意见', '意見'),
	wgULS('请求', '請求'),
];

export {COMMON_SUMMARIES_LABEL, COMMON_SUMMARIES, ARTICLE_SUMMARIES, TALKPAGE_SUMMARIES};
