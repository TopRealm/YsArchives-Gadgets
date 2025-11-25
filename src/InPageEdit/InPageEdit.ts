(function inPageEditLoader(): void {
	/**!
	 * SPDX-License-Identifier: MIT
	 *
	 * @name InPageEdit NEXT
	 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/inpageedit-next/src/branch/master}
	 * @author 机智的小鱼君 Dragon-Fish <dragon-fish@qq.com>
	 * @license MIT {@link https://git.qiuwen.net.cn/InterfaceAdmin/inpageedit-next/src/branch/master/LICENSE}
	 */
	// InPageEdit NEXT
	document.body.append(
		Object.assign(document.createElement('script'), {
			src: 'https://gitcdn.qiuwen.net.cn/InterfaceAdmin/inpageedit-next/raw/branch/master/packages/core/dist/index.js',
			type: 'module',
		})
	);
})();
