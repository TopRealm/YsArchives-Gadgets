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
		globalblocks?: Array<{
			by: string;
			expiry: string;
			reason: string;
			timestamp: string;
			target: string;
		}>;
	};
};

type QueryGlobalLocksResponse = {
	query: {
		globaluserinfo?: {
			name?: string;
			locked?: boolean;
		};
	};
};

type Bgprop = 'address' | 'by' | 'expiry' | 'id' | 'range' | 'reason' | 'target' | 'timestamp';

type ApiQueryGlobalBlocksParamsRedefined = Omit<ApiQueryGlobalBlocksParams, 'bgprop'> & {
	bgtargets?: string | string[];
	bgprop?: Bgprop | Bgprop[];
};

export default global;
export type {ApiQueryGlobalBlocksParamsRedefined, Bgprop, QueryLocalAndGlobalBlocksResponse, QueryGlobalLocksResponse};
