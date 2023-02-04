export interface DeliverablesResponse
{
	zipFileName: string,
	dynamicFileLinks: Record<string, {
		name: string,
		url: string,
	}>[],
	staticFileLinks: Record<string, {
		name: string,
		url: string,
	}>[],
}