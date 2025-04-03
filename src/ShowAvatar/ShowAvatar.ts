import './ShowAvatar.less';
/* eslint-disable no-jquery/no-parse-html-literal */

const $body: JQuery<HTMLBodyElement> = $('body');

const avatarUrl = new URL('https://youshou.wiki/');
avatarUrl.searchParams.set('user', mw.config.get('wgPageName').replace(/^user:/i, ''));
avatarUrl.pathname = '/extensions/Avatar/avatar.php';
const imgUrl = new URL(avatarUrl.toString());
// 添加空值检查，确保 wgUserName 不为 null
const username = mw.config.get('wgUserName') || 'default';
imgUrl.searchParams.set('user', username);
const img = $('<img>').attr({
	src: imgUrl,
	title: '上传头像',
});
const link = $('<a>').attr('href', 'https://youshou.wiki/wiki/Special:UploadAvatar').append(img);

const $ptUserpage: JQuery = $body.find('#pt-userpage');
const $ns2FirstHeading: JQuery = $body.find('.ns-2 #firstHeading');

$ptUserpage.before($('<li id="pt-avatar"></li>').append(link));
if (mw.config.get('wgNamespaceNumber') === 2 && !mw.config.get('wgPageName').includes('/')) {
	const hrefUrl = new URL(avatarUrl.toString());
	hrefUrl.pathname = '/wiki/Special:Viewavatar';
	const srcUrl = new URL(avatarUrl.toString());
	$ns2FirstHeading.prepend(
		$('<a/>')
			.attr({
				href: hrefUrl,
				title: '查看头像',
			})
			.prepend(
				$('<img/>')
					.attr({
						src: srcUrl,
						id: 'user-rootpage-avatar',
					})
					.css({
						width: '1.2em',
						height: '1.2em',
					})
			)
	);
}
