import React from 'ext.gadget.JSX';
import {generateSvgDataUrl} from 'ext.gadget.Util';
import {getMessage} from '../i18n';
import qqLogoSvg from '../../images/SimpleIconsQq.svg';

const generateElements = (isAgreeTos: boolean) => {
	const messageDialog: OO.ui.MessageDialog = new OO.ui.MessageDialog();

	const nameInput: OO.ui.TextInputWidget = new OO.ui.TextInputWidget({
		icon: 'userAvatar',
		placeholder: getMessage('Username'),
		validate: 'non-empty',
	});

	const pwdInput: OO.ui.TextInputWidget = new OO.ui.TextInputWidget({
		icon: 'key',
		placeholder: getMessage('Password'),
		type: 'password',
		validate: 'non-empty',
	});

	const agreeTosCheckbox: OO.ui.CheckboxInputWidget = new OO.ui.CheckboxInputWidget({
		selected: isAgreeTos,
	});
	const agreeTosLayout: OO.ui.FieldLayout<OO.ui.CheckboxInputWidget> = new OO.ui.FieldLayout(agreeTosCheckbox, {
		align: 'inline',
		label: getMessage('I agree with the relevant terms'),
	});

	const keepLoginCheckbox: OO.ui.CheckboxInputWidget = new OO.ui.CheckboxInputWidget();
	const keepLoginLayout: OO.ui.FieldLayout<OO.ui.CheckboxInputWidget> = new OO.ui.FieldLayout(keepLoginCheckbox, {
		align: 'inline',
		help: getMessage('SelectedOrNot'),
		label: getMessage('Keep me logged in'),
	});

	const label = (
		<label
			className={['oo-ui-labelWidget', 'oo-ui-labelElement-label']}
			style={{fontSize: '90%', textAlign: 'justify'}}
		/>
	);
	const $label = $(label) as JQuery;

	const $agreeTos: JQuery = $label.clone().append(agreeTosLayout.$element);
	const $forgotPassword: JQuery = $label
		.clone()
		.css('float', 'right')
		.append(
			<a href={mw.util.getUrl('Special:PasswordReset')} title={getMessage('Reset password')}>
				{getMessage('Forgot password?')}
			</a>
		);
	const $inputBox: JQuery = $label
		.clone()
		.css({
			display: 'block',
			'font-size': 'inherit',
			padding: '6px 0',
		})
		.append(nameInput.$element.css('margin-bottom', '6px'), pwdInput.$element);
	const $tosLabel: JQuery = $label.clone().html(getMessage('help for I agree with the relevant terms'));
	const $rememberMe: JQuery = $label.clone().append(keepLoginLayout.$element.css('margin-top', '6px'));

	// QQ login element — conditionally included when QQConnect is available
	const qqLoginUrl: string = `${mw.util.getUrl('Special:UserLogin')}?returnto=${encodeURIComponent(location.href)}`;
	const qqIconDataUrl: string = generateSvgDataUrl(qqLogoSvg as string);
	const $qqLoginSection: JQuery = $label
		.clone()
		.css({
			display: 'block',
			'font-size': 'inherit',
			'text-align': 'center',
		})
		.append(
			$('<span>')
				.css({
					color: '#72777d',
					display: 'block',
					margin: '4px 0',
				})
				.text(getMessage('Or')),
			$('<a>')
				.attr({
					href: qqLoginUrl,
					title: getMessage('QQ login description'),
				})
				.css({
					'background-color': '#12B7F5',
					border: '1px solid #12B7F5',
					'border-radius': '2px',
					color: '#fff',
					display: 'inline-flex',
					'align-items': 'center',
					gap: '6px',
					padding: '5px 12px',
					'font-weight': 'bold',
					'font-size': '1em',
					'line-height': '1.42857143',
					'text-decoration': 'none',
					'white-space': 'nowrap',
				})
				.append(
					$('<img>').attr({
						src: qqIconDataUrl,
						alt: 'QQ',
						width: 20,
						height: 20,
					}),
					getMessage('Login with QQ')
				)
		);

	return {
		$agreeTos,
		$forgotPassword,
		$inputBox,
		$qqLoginSection,
		$rememberMe,
		$tosLabel,
		agreeTosCheckbox,
		keepLoginCheckbox,
		messageDialog,
		nameInput,
		pwdInput,
	};
};

export {generateElements};
