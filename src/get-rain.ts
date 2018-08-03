import { Callback, Context, Handler } from "aws-lambda"
import { getJson, LambdaResponse } from "./utils"

// to be replaced during build
const darkSkyKey = "DARKSKY_TOKEN"

export const handler: Handler = (
	event: any,
	context: Context,
	callback: Callback
) => {
	const darkSkyUrl = `https://api.darksky.net/forecast/${darkSkyKey}/14.6102,121.0736`

	const response: LambdaResponse = {
		statusCode: 200,
		body: JSON.stringify(getJson(darkSkyUrl))
	}

	callback(undefined, response)
}
