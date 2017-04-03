var webpack = require('webpack');

module.exports = {
	// context: './app',
	entry: {
		js: "./app/js/app.js"
	},
	output: {
		path: __dirname + '/public/dist/js',
		filename: "[name].bundle.js"
	}
	, plugins: [
		new webpack.ProvidePlugin({
			jQuery: 'jquery',
			$: 'jquery',
			jquery: 'jquery'
		})
	]
	
	// ,
	// module: {
	// 	loaders: [
	// 		{ test: /\.css$/, loader: "style!css" }
	// 	]
	// }
};