import {findRedirectCallback} from 'ext.gadget.ToolsRedirect';
import {uniqueArray} from 'ext.gadget.Util';

const checkRedirect = (): void => {
	const REGEX_PREFIX = /([；，]?[一又]?[字号號]\s)*$/;
	const compSurnames = [
		'欧阳',
		'歐陽',
		'令狐',
		'皇甫',
		'上官',
		'司徒',
		'诸葛',
		'諸葛',
		'司马',
		'司馬',
		'宇文',
		'呼延',
		'端木',
		'申屠',
		'尉迟',
		'尉遲',
		'轩辕',
		'軒轅',
		'夏侯',
		'南宫',
		'南宮',
		'司空',
		'鲜于',
		'鮮于',
		'西门',
		'西門',
		'独孤',
		'獨孤',
		'东方',
		'東方',
		'司寇',
		'羊舌',
		'第五',
		'梁丘',
		'锺离',
		'鍾離',
		'东郭',
		'東郭',
		'公孙',
		'公孫',
		'孟孙',
		'孟孫',
		'仲孙',
		'仲孫',
		'叔孙',
		'叔孫',
		'季孙',
		'季孫',
		'长孙',
		'長孫',
		'慕容',
		'闾丘',
		'閭丘',
		'东门',
		'東門',
		'公羊',
		'万俟',
		'百里',
		'公冶',
		'呼延',
		'浮屠',
		'即墨',
		'单于',
		'單于',
		'田丘',
	] as const;
	const REGEX_COMP_SURNAME = new RegExp(`^(${compSurnames.join('|')}).`);

	const findSurname = (pageName: string): string => {
		if (REGEX_COMP_SURNAME.test(pageName)) {
			return (REGEX_COMP_SURNAME.exec(pageName) as RegExpExecArray)[1] ?? '';
		}

		return pageName[0] ?? '';
	};

	findRedirectCallback((pageName: string, $content: JQuery): string[] => {
		const titles: string[] = [];

		let surname: string | undefined;
		for (const element of $content.find('> p > b')) {
			const {previousSibling, textContent} = element;
			if (!previousSibling || !textContent) {
				continue;
			}

			const {textContent: textContent2} = previousSibling;
			if (!textContent2) {
				continue;
			}

			if (REGEX_PREFIX.test(textContent2)) {
				const name: string | undefined = textContent.trim();
				if (!name || textContent === pageName) {
					continue;
				}

				surname ||= findSurname(pageName);

				titles[titles.length] = surname + name; // Replace Array#push to avoid core-js polyfilling
			}
		}

		return uniqueArray(titles); // Replace Set with uniqueArray, avoiding core-js polyfilling
	});
};

export {checkRedirect};
