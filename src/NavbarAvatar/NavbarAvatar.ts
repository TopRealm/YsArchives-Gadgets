import './NavbarAvatar.less';
let username = mw.user.getName();
let imgsrc = '';
if (username) {
	username = username.replace(' ', '_'); // 避免名称包含空格时无法显示头像
	imgsrc = `${mw.config.get('wgServer')}/extensions/Avatar/avatar.php?user=${username}`;
} else {
	imgsrc = 'https://image.youshou.wiki/avatars/default/default.gif';
}
const $body: JQuery<HTMLBodyElement> = $('body');
$body.find('.citizen-ui-icon.mw-ui-icon-userAvatar.mw-ui-icon-wikimedia-userAvatar').css({
	background: `url(${imgsrc}) center / 100%`,
});
