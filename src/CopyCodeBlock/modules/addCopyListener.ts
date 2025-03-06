import {Clipboard} from 'ext.gadget.Clipboard';
import {button} from './CopyCodeBlock.module.less';
import {getMessage} from './i18n';
import {toastify} from 'ext.gadget.Toastify';

const addCopyListener = ($pres: JQuery<HTMLPreElement>): void => {
	for (const pre of $pres) {
		const clipboard = new Clipboard(pre.querySelector(`.${button}`) as HTMLSpanElement, {
			text(): string {
				return pre.textContent ?? '';
			},
		});
		clipboard.on('success', (): void => {
			toastify(
				{
					text: getMessage('Copied'),
				},
				'success'
			);
		});
		clipboard.on('error', (): void => {
			toastify(
				{
					text: getMessage('Failed'),
				},
				'error'
			);
		});
	}
};

export {addCopyListener};
