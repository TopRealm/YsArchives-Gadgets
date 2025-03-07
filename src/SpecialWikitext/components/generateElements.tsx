import {previewLoadingContent, previewLoadingInner} from './SpecialWikitext.module.less';
import React from 'ext.gadget.JSX';
import ajaxLoader from '../images/Loading_icon.gif';
import alert from '../images/Alert.png';
import {getMessage} from '../modules/i18n';

const Failed = () => (
	<>
		<img src={alert} decoding="async" width="32" height="32" />
		<span>&nbsp;{getMessage('Failed')}</span>
	</>
);

const Loading = () => (
	<div id="specialwikitext-preview-loading">
		<div className={['quotebox', previewLoadingInner]} id="specialwikitext-preview-loading__inner">
			<div className={previewLoadingContent} id="specialwikitext-preview-loading__content">
				<img src={ajaxLoader} decoding="async" width="32" height="32" />
				<span>&nbsp;{getMessage('Loading')}</span>
			</div>
		</div>
	</div>
);

export {Failed, Loading};
