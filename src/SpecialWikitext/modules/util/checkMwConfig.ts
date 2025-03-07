import {generateArray} from 'ext.gadget.Util';

const allMwConfig: ReturnType<typeof mw.config.get> = mw.config.get();

// 检查MediaWiki的设置
const checkMwConfig = (configKey: string, expectConfig: string | string[]): boolean => {
	let mwConfig: unknown = allMwConfig[configKey];
	if (!mwConfig) {
		return false;
	}

	// eslint-disable-next-line @typescript-eslint/no-base-to-string
	mwConfig = String(mwConfig).toLowerCase().trim();
	if (!mwConfig) {
		return false;
	}

	return generateArray(expectConfig).includes(mwConfig as string);
};

export {checkMwConfig};
