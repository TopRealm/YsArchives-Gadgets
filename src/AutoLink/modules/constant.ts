const REGEX_INTERNAL_URL: RegExp =
	/([^=])([\s"'])((?:\/?w\/index\.php\?|\/?index\.php\?|\/?wiki\/)[\w!#%&()+./:=?@\\~-]+)\2/g;
// External links (no wikicode)
const REGEX_IMPORT_SCRIPT: RegExp =
	/([Ii]mport[Ss]cript(?:<span class="br0">)?\((?:<\/span><span class="st0">)?)('|")([^\n<>[\]{|}]+?)(\2(?:<\/span><span class="br0">)?\)(?:<\/span>)?)/g;
// ImportScript
const REGEX_TL: RegExp = /([^{]{{2}\s*[Tt]l\|)([^\n:<>[\]{|}]+)/g;
// For {{tl}}
const REGEX_URL: RegExp =
	/((?:[^"[]|[^=]")(?:<span class="diffchange">)?)((?:https?|ftps?):\/\/[\w!#%&()+./:=?@\\~-]+?)(?=(?:<\/span>)?[\s"')\]|}])/g;

export {REGEX_INTERNAL_URL, REGEX_IMPORT_SCRIPT, REGEX_TL, REGEX_URL};
