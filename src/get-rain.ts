import { Callback, Context, Handler } from "aws-lambda"
import fetch from "node-fetch"

interface LambdaResponse {
	statusCode: number
	body: string
}

const getJson = (url: string) => fetch(url).then(data => data.json())
// to be replaced during build
const darkSkyKey = "DARKSKY_TOKEN"

export const handler: Handler = (
	event: any,
	context: Context,
	callback: Callback
) => {
	const darkSkyUrl = `https://api.darksky.net/forecast/${darkSkyKey}/14.6102,121.0736`

	getJson(darkSkyUrl).then(data => {
		const response: LambdaResponse = {
			statusCode: 200,
			body: JSON.stringify(data)
		}

		callback(undefined, response)
	})
}
