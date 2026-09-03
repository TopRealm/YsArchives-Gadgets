# Twinkle Codex 迁移规范

本文件是 Twinkle 各模块从 `Morebits.quickForm` + `Morebits.simpleWindow` 迁移到
Codex（Vue 3）的团队规范。每个模块迁移时请遵循本文件。

## 基线

- 目标 MediaWiki 版本：≥ 1.41（`@wikimedia/codex` 与 `vue` 由 ResourceLoader 提供，
  已在 `definition.json` 的 `dependencies` 中声明）。
- 采用 **Codex 1.x API**（`v-model` 绑定）。Codex 2.x 中 `CdxSelect` 等组件改用
  `v-model:selected`，若站点升级至 MW 1.45+（Codex 2.x）需调整绑定。

## 目录约定

- 共享 Vue 组件放 `src/Twinkle/modules/ui/`，以 `Tw` 前缀命名（`TwDialog.vue`）。
- 各模块专属组件放模块同名子目录或 `ui/`，命名 `Tw<Module>Dialog.vue`。
- `@wikimedia/codex` 的最小类型声明在 `src/Twinkle/modules/ui/codex.d.ts`，
  使用新组件时先在此处补充类型。

## 组件映射

| 旧实现                       | Codex                                         | 说明                                       |
| ---------------------------- | --------------------------------------------- | ------------------------------------------ |
| `Morebits.simpleWindow`      | `CdxDialog`（经 `TwDialog.vue` 封装）         | 标题前缀、footer 链接由封装层处理          |
| quickForm `input`            | `CdxTextInput`（配 `CdxField`）               | `label` 用 `#label` slot                   |
| quickForm `checkbox`/`radio` | `CdxCheckbox` / `CdxRadio`                    | `shiftClickSupport` 需自实现               |
| quickForm `select`           | `CdxSelect`                                   | 分组用 `MenuGroupData`（`{label, items}`） |
| select2 搜索下拉             | `CdxLookup`                                   | 阶段 3 引入                                |
| quickForm `tooltip`          | `title` 属性或 `CdxPopover`                   | 迁移时逐处评估                             |
| `Morebits.status`            | `CdxMessage` / `CdxProgressBar`               | 见 `TwStatus`（阶段 5）                    |
| `setButtonsEnabled(false)`   | `primaryAction.disabled`（`submitting` 状态） | 提交后禁用以防重复提交                     |
| `mw.util.addCSS` 补丁        | 设计 token / 组件 props                       | 禁止新增 `addCSS`                          |

## 数据流约定

- quickForm 的 `getInputData(form)` 对应组件的 `ref` 状态 + `v-model`。
- 表单元素上的 `.data('messageData', ...)`（jQuery）对应 Vue 侧查找表
  （如 `computed` 按 `selectedCode` 从 `groups` 中查 `CloseOption`）。
- 提交事件统一为 `emit('submit', params, statusContainer)`：
    - `params` 由组件组装，直接传给模块原 `evaluate` 逻辑；
    - `statusContainer` 是对话框内的状态区域 DOM（供 `Morebits.status.init` 使用）。
- 关闭事件统一为 `emit('close')`；宿主 JS 侧负责 `app.unmount()` 与挂载点移除。

## 联动逻辑移植

quickForm 的 `event` 回调（如 `change_code`）移植为 `watch` + `computed`，
并用 `{immediate: true}` 复现原 `dispatchEvent(new Event('change'))` 的初始化行为。
保持原有状态机语义（如 noop/keep/del 对 checkbox 的禁用规则），不要“顺手重构”。

## 双语桥接

- 模板内文案使用 `uls()`（`src/Twinkle/modules/ui/useUls.ts`）包装 `wgULS`。
- 变体在页面加载时确定，无需响应式监听。

## 宿主模块（JS）模式

```js
import {createApp, h} from 'vue';
import TwXxxDialog from './ui/TwXxxDialog.vue';

// 在回调中：
const root = document.createElement('div');
document.body.append(root);
const app = createApp({
	render: () =>
		h(TwXxxDialog, {
			/* 原 quickForm 数据 → props */
			onSubmit: (params, statusContainer) => {
				Module.callback.evaluate(params, statusContainer);
			},
			onClose: () => {
				app.unmount();
				root.remove();
			},
		}),
});
app.mount(root);
```

## 验收清单

- [ ] `pnpm run build` 通过（prettier / eslint / vue-tsc / esbuild）。
- [ ] 测试站：模块典型流程完整走查（含提交后状态显示）。
- [ ] 简繁变体切换后文案正确。
- [ ] Esc / 关闭按钮可关闭对话框且无残留 DOM。
- [ ] 提交后按钮禁用，无重复提交。
- [ ] 控制台无 ResourceLoader / Vue 报错。

## Codex 2.x 升级注意

- `CdxSelect`：`v-model` → `v-model:selected`（prop `selected`）。
- 其余破坏性变更以官方 CHANGELOG 为准：
  <https://github.com/wikimedia/design-codex/blob/main/CHANGELOG.md>

## 已知编辑器现象

- 编辑器（tsserver）可能对 `.vue` 文件内 `import './Xxx.vue'` 报“找不到模块”，
  这是工作区 TS 版本不识别 `.vue` 的已知现象（见 `docs/how-to-use-vue.md`），
  `vue-tsc` 与 `pnpm run build` 均正常，不影响 CI 与部署。
