import { Callback, Context, Handler } from "aws-lambda"

interface HelloResponse {
	statusCode: number
	body: string
}

export const hello: Handler = (
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

	console.log(response)
	callback(undefined, response)
}
