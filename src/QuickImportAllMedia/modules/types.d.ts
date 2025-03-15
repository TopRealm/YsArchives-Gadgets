declare global {
	interface Window {
		detectIfFileRedirect: DetectIfFileRedirect;
		getAllImages: typeof getAllImages;
	}
}

export default global;
