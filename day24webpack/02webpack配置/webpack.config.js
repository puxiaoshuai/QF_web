const path=require("path")
module.exports={
	//输入路径
	entry:"./src/index.js",
	//输出路径
	output:{
		path:path.resolve(__dirname,"dist"),
		filename:"bundle.js"
	},
	module: {
	    rules: [
	      {
	        test: /\.css$/,
	        use: [
	          { loader: "style-loader" },
	          { loader: "css-loader" }
	        ]
	      }
	    ]
	  }
}