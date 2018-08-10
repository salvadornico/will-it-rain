require("dotenv").config()
const darkSkyKey = process.env.DARKSKY_TOKEN
console.log(darkSkyKey)
// const fetch = require("node-fetch")

// const getJson = url => fetch(url).then(data => data.json())

// exports.handler = function (event, context, callback) {
// 	const darkSkyUrl = `https://api.darksky.net/forecast/${darkSkyKey}/14.6102,121.0736`

// 	getJson(darkSkyUrl).then(data => {
// 		const response = {
// 			statusCode: 200,
// 			headers: {
// 				"Access-Control-Allow-Origin": "*",
// 				"Access-Control-Allow-Headers": "Content-Type"
// 			},
// 			body: JSON.stringify(data)
// 		}

// 		callback(undefined, response)
// 	})
// }