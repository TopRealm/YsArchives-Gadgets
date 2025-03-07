type ClassMwUri = typeof MwUri;

class MwUri extends URL {
	extend(object: {[key: string]: string}) {
		for (const [key, value] of Object.entries(object)) {
			this.searchParams.set(key, value);
		}
		return this;
	}
	getRelativePath() {
		return this.pathname + this.search + this.hash;
	}
}

export {type ClassMwUri, MwUri};
