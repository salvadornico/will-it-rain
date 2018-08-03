export interface LambdaResponse {
	statusCode: number
	body: string
}

export const getJson = (url: string) => fetch(url).then(data => data.json())
