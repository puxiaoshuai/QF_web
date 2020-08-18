const path = require("path")
module.exports = {
	//输入路径
	entry: "./src/index.js",
	//输出路径
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		publicPath:"dist/"
	},
	module: {
		rules: [{
				test: /\.css$/,
				use: [{
						loader: "style-loader"
					},
					{
						loader: "css-loader"
					}
				]
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 8192
					}
				}]
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [{
					loader: 'file-loader',
					options: {}
				}]
			}
		]
	}
}
