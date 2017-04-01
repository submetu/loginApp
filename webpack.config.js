module.exports = {
	// context: './app',
	entry: {
		js: "./app/js/app.js"
	},
	output: {
		path: __dirname + '/public/dist/js',
		filename: "[name].bundle.js"
	}
	
	
	// ,
	// module: {
	// 	loaders: [
	// 		{ test: /\.css$/, loader: "style!css" }
	// 	]
	// }
};