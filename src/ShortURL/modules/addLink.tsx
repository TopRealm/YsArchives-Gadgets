import {Clipboard} from 'ext.gadget.Clipboard';
import React from 'ext.gadget.JSX';
import {addEventListenerWithRemover} from 'ext.gadget.Util';
import {getMessage} from './i18n';
import {getShortDomains} from './util/getShortDomains';
import {tippy} from 'ext.gadget.Tippy';

const {skin, wgUserName} = mw.config.get();
const domains = getShortDomains();

let clipboardInstance: ClipboardJS | undefined;
let headerLinkEventListener: ReturnType<typeof addEventListenerWithRemover> = {
	remove: (): void => {},
};
let portletLinkEventListener: ReturnType<typeof addEventListenerWithRemover> = {
	remove: (): void => {},
};

const addLink = (link: string, permaLink: string): void => {
	let portletLink: HTMLLIElement | null = document.querySelector('#t-shortlink');
	if (!portletLink) {
		const portletId: 'p-cactions' | 'p-tb' = document.querySelector('#p-cactions') ? 'p-cactions' : 'p-tb';
		portletLink = mw.util.addPortletLink(
			portletId,
			'#',
			getMessage('Share URL for the page'),
			't-shortlink',
			getMessage('Show URL')
		);
	}

	if (portletLink) {
		const portletLinkClickListener = (event: MouseEvent): void => {
			event.preventDefault();

			const $element: JQuery = $('<div>');

			$element.append(
				// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-argument
				new (mw as any).widgets.CopyTextLayout({
					label: getMessage('Page URL'),
					title: getMessage('Page URL'),
					align: 'top',
					copyText: location.href,
				}).$element
			);

			$element.append(
				// eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-explicit-any
				new (mw as any).widgets.CopyTextLayout({
					label: getMessage('Permanent URL'),
					title: getMessage('Permanent URL'),
					align: 'top',
					copyText: `https://${location.host}${permaLink}`,
				}).$element
			);

			if (wgUserName) {
				for (const [i, domain] of domains.entries()) {
					$element.append(
						// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-argument
						new (mw as any).widgets.CopyTextLayout({
							label: `${getMessage('Short URL')}${i + 1}`,
							title: `${getMessage('Short URL')}${i + 1}`,
							align: 'top',
							copyText: `https://${domain}${link}`,
						}).$element
					);
				}
			}

			void OO.ui.alert($element, {
				size: 'medium',
				title: $((<b>{getMessage('Share URL for the page')}</b>) as HTMLElement),
			});
		};

		portletLinkEventListener.remove();
		portletLinkEventListener = addEventListenerWithRemover({
			target: (portletLink.firstElementChild ?? portletLink) as HTMLElement,
			type: 'click',
			listener: portletLinkClickListener,
		});

		const isCitizen: boolean = skin === 'citizen';
		if (isCitizen && !$(portletLink).find('#mw-ui-icon-wikimedia-shortlink').length) {
			$(portletLink)
				.find('a')
				.prepend(
					<span
						id="mw-ui-icon-wikimedia-shortlink"
						className={['citizen-ui-icon', 'mw-ui-icon-link', 'mw-ui-icon-wikimedia-link']}
					/>
				);
		}
	}

	let headerLink: HTMLAnchorElement | null = document.querySelector('#mw-indicator-shortURL a');
	if (!headerLink) {
		headerLink = (
			<a aria-label={wgUserName ? getMessage('Short URL') : getMessage('Share URL for the page')} href="#">
				<span className="gadget-short-link__icon">
					{wgUserName ? getMessage('Short URL') : getMessage('Share URL for the page')}
				</span>
			</a>
		) as HTMLAnchorElement;

		tippy(headerLink, {
			arrow: true,
			content: wgUserName ? getMessage('Short URL') : getMessage('Share URL for the page'),
			placement: 'bottom',
		});

		const $headerElement = $(
			<div className="mw-indicator" id="mw-indicator-shortURL">
				{headerLink}
			</div>
		) as JQuery;

		$headerElement.prependTo('.mw-indicators');
	}

	const fullLink: string = wgUserName ? `https://${domains[0]}${link}` : `https://${location.host}${permaLink}`;

	const $notifyElement = $(
		<span>
			{getMessage('URL copied to clipboard')}
			<br />
			<a
				href="#"
				onClick={(event): void => {
					event.preventDefault();
					event.stopPropagation();
				}}
			>
				{fullLink}
			</a>
		</span>
	) as JQuery;

	const headerLinkClickListener = (event: MouseEvent): void => {
		event.preventDefault();

		void mw.notify($notifyElement, {
			tag: 'shortURL',
			type: 'info',
		});
	};

	headerLinkEventListener.remove();
	headerLinkEventListener = addEventListenerWithRemover({
		target: headerLink,
		type: 'click',
		listener: headerLinkClickListener,
	});

	clipboardInstance?.destroy();
	clipboardInstance = new Clipboard(headerLink, {
		text: (): string => fullLink,
	});
};

export {addLink};
