import React from 'ext.gadget.JSX';
import {getMessage} from '../i18n';

interface EditConflictNoticeProps {
	onClick: () => void;
}

const EditConflictNotice = ({onClick}: EditConflictNoticeProps) => (
	<span>
		{getMessage('Edit Confilict Notice')}
		<a onClick={onClick}>{getMessage('Refresh')}</a>
	</span>
);

export {EditConflictNotice};
