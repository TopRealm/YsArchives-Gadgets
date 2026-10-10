// API request
type QueryLocalAndGlobalBlocksResponse = {
	query: {
		blocks?: Array<{
			by: string;
			expiry: string;
			reason: string;
			restrictions: string | string[];
			timestamp: string;
			user: string;
		}>;
	};
};

export default global;
export type {QueryLocalAndGlobalBlocksResponse};
