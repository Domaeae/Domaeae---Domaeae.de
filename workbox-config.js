module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,json,config,css,jpg,js,scss}'
	],
	swDest: 'y',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};