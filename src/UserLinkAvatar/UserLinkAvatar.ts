import './UserLinkAvatar.less';

/* eslint-disable unicorn/no-array-for-each */
document.querySelectorAll('.mw-userlink').forEach((item) => {
	const userName = item.textContent;
	const img = document.createElement('img');
	img.classList.add('userlink-avatar');
	img.loading = 'lazy';
	img.src = `${mw.config.get('wgScriptPath')}/extensions/Avatar/avatar.php?user=${userName}`;
	img.alt = `用户${userName}的头像`;
	item.prepend(img);
});
