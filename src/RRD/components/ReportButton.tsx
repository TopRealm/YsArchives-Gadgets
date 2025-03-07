import * as OPTIONS from '../options.json';
import React from 'ext.gadget.JSX';
import {getMessage} from '../modules/i18n';
import {isSpecialLog} from '../modules/isSpecialLog';

interface Props {
	onClick: () => void;
}

const ReportButton = ({onClick}: Props) => (
	<button
		type={'button'}
		className={['rrd__report', 'cdx-button', 'cdx-button--weight-primary']}
		title={getMessage('reportButtonTitle') + OPTIONS.rrdPage}
		onClick={onClick}
	>
		{isSpecialLog() ? getMessage('reportButtonLogText') : getMessage('reportButtonText')}
	</button>
);

export default ReportButton;
