import {getMessage} from '../i18n';

const getArchivingMessage = (indexNo: string) => {
	return getMessage('Archiving') + getMessage(':') + getMessage('Section $1').replace('$1', indexNo);
};

const getArchivedMessage = (indexNo: string) => {
	return getMessage('Archived') + getMessage(':') + getMessage('Section $1').replace('$1', indexNo);
};

const getDeletingMessage = (indexNo: string) => {
	return getMessage('Deleting') + getMessage(':') + getMessage('Section $1').replace('$1', indexNo);
};

const getDeletedMessage = (indexNo: string) => {
	return getMessage('Deleted') + getMessage(':') + getMessage('Section $1').replace('$1', indexNo);
};

export {getArchivingMessage, getArchivedMessage, getDeletingMessage, getDeletedMessage};
