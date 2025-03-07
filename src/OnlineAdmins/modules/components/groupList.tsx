import {section, sectionList, talkPageLink} from './OnlineAdmins.module.less';
import React from 'ext.gadget.JSX';
import {getMessage} from '../i18n';
import {sanitize} from '../util/sanitize';

interface UserLinkProps {
	userName: string;
}

interface GroupListProps {
	groupName: string;
	userNames: string[];
}

interface OnlineAdminsListProps {
	stewards: string[];
	sysops: string[];
	patrollers: string[];
}

const UserLink = ({userName}: UserLinkProps) => (
	<li>
		<a href={mw.util.getUrl(`User:${sanitize(userName)}`)} rel="noopener noreferrer" target="_blank">
			{sanitize(userName)}
		</a>
		&nbsp;
		<span className={talkPageLink}>
			（
			<a href={mw.util.getUrl(`User_talk:${sanitize(userName)}`)} rel="noopener noreferrer" target="_blank">
				留言
			</a>
			）
		</span>
	</li>
);

const onlineCountText: string = getMessage(' ($1 online):');

const GroupList = ({groupName, userNames}: GroupListProps) =>
	groupName && userNames.length ? (
		<div className={section}>
			<span>{groupName}</span>
			<span>{onlineCountText.replace('$1', String(userNames.length))}</span>
			<ul className={sectionList}>
				{userNames.map((user) => (
					<UserLink key={user} userName={user} />
				))}
			</ul>
		</div>
	) : (
		<></>
	);

const ListTitle = () => <p>{getMessage('OnlineWithin30Minutes')}</p>;

const OnlineAdminsList = ({stewards, sysops, patrollers}: OnlineAdminsListProps) => (
	<div>
		<ListTitle />
		{stewards.length ? <GroupList groupName={getMessage('Stewards')} userNames={stewards} /> : <></>}
		{sysops.length ? <GroupList groupName={getMessage('SysOps')} userNames={sysops} /> : <></>}
		{patrollers.length ? <GroupList groupName={getMessage('Patrollers')} userNames={patrollers} /> : <></>}
	</div>
);

const getOnlineAdminsList = ({stewards, sysops, patrollers}: OnlineAdminsListProps) => (
	<OnlineAdminsList stewards={stewards} sysops={sysops} patrollers={patrollers} />
);

export {getOnlineAdminsList};
