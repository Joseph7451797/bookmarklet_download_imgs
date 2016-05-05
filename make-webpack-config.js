var path = require('path');
var webpack = require('webpack');

module.exports = function(options) {
	var entry = {
		core: [
			"./download_core.js"
		],
		get: [
			"./download_get.js"
		]
	};

	var output = {
		publicPath: (options.devMode) ? "http://localhost:8080/build/" : "/build/",
		path: __dirname + "/build/",
		filename: "[name].js"
	};

	var plugins = [];

	if(options.build) {
		plugins.push(
			new webpack.optimize.DedupePlugin(),
			new webpack.optimize.OccurenceOrderPlugin(),
			new webpack.optimize.AggressiveMergingPlugin(),
			new webpack.optimize.UglifyJsPlugin({
			    compress: {
			        warnings: false
			    }
			})
		);
	}else if(options.devMode) {
		plugins.push(
			new webpack.NoErrorsPlugin()
		);
	}


	return {
		debug: options.debug,
		devtool: options.devtool,
		entry: entry,
		output: output,
		plugins: plugins
	}
	
};