import { Callback, Context, Handler } from "aws-lambda"

interface HelloResponse {
	statusCode: number
	body: string
}

export const handler: Handler = (
	event: any,
	context: Context,
	callback: Callback
) => {
	const response: HelloResponse = {
		statusCode: 200,
		body: JSON.stringify({
			message: Math.floor(Math.random() * 10)
		})
	}

	callback(undefined, response)
}
