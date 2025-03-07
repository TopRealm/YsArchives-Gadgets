// Declare some types globally (DO NOT use import/export to prevent this file from being recognized as a module)
type ApiClientLoginParams = import('types-mediawiki/api_params').ApiClientLoginParams &
	import('types-mediawiki/api_params').ApiFormatJsonParams;
type ApiComparePagesParams = import('types-mediawiki/api_params').ApiComparePagesParams &
	import('types-mediawiki/api_params').ApiFormatJsonParams;
type ApiQueryContributorsParams = import('types-mediawiki/api_params').ApiQueryContributorsParams &
	import('types-mediawiki/api_params').ApiFormatJsonParams;
type ApiEditPageParams = import('types-mediawiki/api_params').ApiEditPageParams &
	import('types-mediawiki/api_params').ApiFormatJsonParams;
type ApiQueryGlobalBlocksParams = import('types-mediawiki/api_params').GlobalBlockingApiQueryGlobalBlocksParams &
	import('types-mediawiki/api_params').ApiFormatJsonParams;
type ApiQueryGlobalUserInfoResponse = import('types-mediawiki/api_params').CentralAuthApiQueryGlobalUserInfoParams &
	import('types-mediawiki/api_params').ApiFormatJsonParams;
type ApiImportParams = import('types-mediawiki/api_params').ApiImportParams &
	import('types-mediawiki/api_params').ApiFormatJsonParams;
type ApiOpenSearchParams = import('types-mediawiki/api_params').ApiOpenSearchParams &
	import('types-mediawiki/api_params').ApiFormatJsonParams;
type ApiOptionsParams = import('types-mediawiki/api_params').ApiOptionsParams &
	import('types-mediawiki/api_params').ApiFormatJsonParams;
type ApiParseParams = import('types-mediawiki/api_params').ApiParseParams &
	import('types-mediawiki/api_params').ApiFormatJsonParams;
type ApiPatrolParams = import('types-mediawiki/api_params').ApiPatrolParams &
	import('types-mediawiki/api_params').ApiFormatJsonParams;
type ApiPurgeParams = import('types-mediawiki/api_params').ApiPurgeParams &
	import('types-mediawiki/api_params').ApiFormatJsonParams;
type ApiQueryBlocksParams = import('types-mediawiki/api_params').ApiQueryBlocksParams &
	import('types-mediawiki/api_params').ApiFormatJsonParams;
type ApiQueryCategoryMembersParams = import('types-mediawiki/api_params').ApiQueryCategoryMembersParams &
	import('types-mediawiki/api_params').ApiFormatJsonParams;
type ApiQueryImagesParams = import('types-mediawiki/api_params').ApiQueryImagesParams &
	import('types-mediawiki/api_params').ApiFormatJsonParams;
type ApiQueryLogEventsParams = import('types-mediawiki/api_params').ApiQueryLogEventsParams &
	import('types-mediawiki/api_params').ApiFormatJsonParams;
type ApiQueryParams = import('types-mediawiki/api_params').ApiQueryParams &
	import('types-mediawiki/api_params').ApiFormatJsonParams;
type ApiQueryImageInfoParams = import('types-mediawiki/api_params').ApiQueryImageInfoParams &
	import('types-mediawiki/api_params').ApiFormatJsonParams;
type ApiQueryInfoParams = import('types-mediawiki/api_params').ApiQueryInfoParams &
	import('types-mediawiki/api_params').ApiFormatJsonParams;
type ApiQueryRecentChangesParams = import('types-mediawiki/api_params').ApiQueryRecentChangesParams &
	import('types-mediawiki/api_params').ApiFormatJsonParams;
type ApiQueryRevisionsParams = import('types-mediawiki/api_params').ApiQueryRevisionsParams &
	import('types-mediawiki/api_params').ApiFormatJsonParams;
type ApiQueryTokensParams = import('types-mediawiki/api_params').ApiQueryTokensParams &
	import('types-mediawiki/api_params').ApiFormatJsonParams;
type ApiQueryUserContribsParams = import('types-mediawiki/api_params').ApiQueryUserContribsParams &
	import('types-mediawiki/api_params').ApiFormatJsonParams;
type ApiQueryUsersParams = import('types-mediawiki/api_params').ApiQueryUsersParams &
	import('types-mediawiki/api_params').ApiFormatJsonParams;
type ApiUploadParams = import('types-mediawiki/api_params').ApiUploadParams &
	import('types-mediawiki/api_params').ApiFormatJsonParams;
type ApiUserrightsParams = import('types-mediawiki/api_params').ApiUserrightsParams &
	import('types-mediawiki/api_params').ApiFormatJsonParams;
type UrlShortenerApiShortenUrlParams = import('types-mediawiki/api_params').UrlShortenerApiShortenUrlParams &
	import('types-mediawiki/api_params').ApiFormatJsonParams;
