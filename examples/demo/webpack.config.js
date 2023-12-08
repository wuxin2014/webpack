const path = require("path");
// const HtmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {
	mode: "development",
	// devtool: "source-map",
	context: path.resolve(__dirname, "."),
	entry: {
		index: "./src/main.js"
	},
	output: {
		filename: "[name].[chunkhash:8].js",
		path: path.resolve(__dirname, "./dist"),
		clean: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: "babel-loader"
			}
		]
	},
	plugins: [
		// new HtmlWebPackPlugin()
	]
};