const fetch = require("node-fetch")

const getJson = url => fetch(url).then(data => data.json())
// to be replaced during build
const darkSkyKey = "DARKSKY_TOKEN"

exports.handler = function (event, context, callback) {
	const darkSkyUrl = `https://api.darksky.net/forecast/${darkSkyKey}/14.6102,121.0736`

	getJson(darkSkyUrl).then(data => {
		const response = {
			statusCode: 200,
			body: JSON.stringify(data)
		}

		callback(undefined, response)
	})
}