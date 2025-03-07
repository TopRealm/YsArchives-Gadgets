import type {MessageKey} from '../types';

const getMessage = (key: MessageKey extends `toolsredirect-${infer P}` ? P : never, ...args: string[]): string => {
	const fullKey: string = `toolsredirect-${key}`;
	// Messages that can be used here:
	// * see messages.ts
	// * for more information
	return args.length ? mw.message(fullKey, ...args).parse() : mw.message(fullKey).plain();
};

export {getMessage};
