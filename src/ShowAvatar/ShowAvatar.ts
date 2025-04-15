import './ShowAvatar.less';
/* eslint-disable no-jquery/no-parse-html-literal */

const header = $('#citizen-page-header .citizen-page-header-inner .citizen-page-heading .firstHeading-container');

const avatarUrl = new URL('https://youshou.wiki/');
avatarUrl.searchParams.set('user', mw.config.get('wgPageName').replace(/^user:/i, ''));
avatarUrl.pathname = '/extensions/Avatar/avatar.php';
const imgUrl = new URL(avatarUrl.toString());
// 添加空值检查，确保 wgUserName 不为 null
const username = mw.config.get('wgUserName') || 'default';
if (username === 'default') {
	imgUrl.searchParams.set('user', username);
	const img = $('<img>').attr({
		src: imgUrl,
		title: '上传头像',
	});
	const link = $('<a>').attr('href', 'https://youshou.wiki/wiki/Special:UploadAvatar').append(img);
	header.prepend(link);
}

if (mw.config.get('wgNamespaceNumber') === 2 && !mw.config.get('wgPageName').includes('/')) {
	const hrefUrl = new URL(avatarUrl.toString());
	hrefUrl.pathname = '/wiki/Special:Viewavatar';
	const srcUrl = new URL(avatarUrl.toString());
	header.prepend(
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
						width: '2.2em',
						height: '2.2em',
					})
			)
	);
}
