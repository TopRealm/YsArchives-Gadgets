import {getAdmins} from './util/getAdmins';
import {getMessage} from './i18n';
import {getOnlineAdminsList} from './components/groupList';

const doClick = async (event: JQuery.ClickEvent<HTMLAnchorElement>): Promise<void> => {
	event.preventDefault();

	const notify = (element: string | JQuery<HTMLElement>, type: 'error' | 'info' | 'success' | 'warn' = 'info') => {
		return mw.notify(element, {
			tag: 'onlineAdmins',
			type,
		});
	};

	try {
		const {stewards, sysops, patrollers} = await getAdmins();

		if (stewards.length + sysops.length + patrollers.length) {
			notify($('<div>').append(getOnlineAdminsList({stewards, sysops, patrollers})));
		} else {
			notify(getMessage('NoOnline'), 'warn');
		}
	} catch {
		notify(getMessage('Network error'), 'error');
	}
};

export {doClick};
