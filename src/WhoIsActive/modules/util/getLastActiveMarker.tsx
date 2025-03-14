import React from 'ext.gadget.JSX';
import {getMessage} from '../i18n';

type TimeSpan = 'ThisWeek' | 'ThisMonth' | 'ThisSeason' | 'ThisSemiyear' | 'ThisYear' | 'OverAYear';

function Wrapper(props: {timeSpan: TimeSpan; innerElement: React.ReactElement}) {
	const {timeSpan, innerElement} = props;

	const className: string[] = ['gadget-whoisactive', `gadget-whoisactive__${timeSpan}`];
	const {skin} = mw.config.get();

	if (skin === 'citizen') {
		return (
			<section className={[...className, 'page-info__item', 'citizen-footer__pageinfo-item', 'noprint']}>
				{innerElement}
			</section>
		);
	} else if (['gongbi', 'vector', 'vector-2022'].includes(skin) || document.querySelector('ul#footer-info')) {
		return <li className={[className, 'noprint']}>{innerElement}</li>;
	}

	return <div className={[className, 'noprint']}>{innerElement}</div>;
}

function Tag(props: {timeSpan: TimeSpan; indicator: boolean}) {
	const {timeSpan, indicator} = props;

	const iconClassName: string[] = ['gadget-whoisactive__icon', `gadget-whoisactive__icon__${timeSpan}`];
	const textClassName: string[] = [
		'gadget-whoisactive__text',
		indicator === true ? ', gadget-whoisactive__notext' : '',
	];

	return (
		<>
			<span className={iconClassName} title={getMessage(timeSpan)} />
			<span className={textClassName}>{getMessage(timeSpan) ?? ''}</span>
		</>
	);
}

const getLastActiveMarker = (timestamp: string, indicator: boolean): React.ReactElement => {
	const date: number = Date.parse(timestamp);
	const now: number = Date.now();
	const diff: number = Math.floor((now - date) / (1000 * 60 * 60 * 24));

	let timeSpan: TimeSpan = 'ThisWeek';
	if (diff > 365) {
		timeSpan = 'OverAYear';
	} else if (diff > 183) {
		timeSpan = 'ThisYear';
	} else if (diff > 92) {
		timeSpan = 'ThisSemiyear';
	} else if (diff > 31) {
		timeSpan = 'ThisSeason';
	} else if (diff > 7) {
		timeSpan = 'ThisMonth';
	}

	return <Wrapper timeSpan={timeSpan} innerElement={<Tag timeSpan={timeSpan} indicator={indicator} />} />;
};

export type {TimeSpan};
export {getLastActiveMarker};
