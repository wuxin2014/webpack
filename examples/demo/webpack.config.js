const path = require("path");
// const HtmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {
	mode: "development",
	devtool: "source-map",
	context: path.resolve(__dirname, "."),
	entry: "./src/main.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "./dist")
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