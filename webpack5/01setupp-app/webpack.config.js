const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin =require("css-minimizer-webpack-plugin")
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    clean: true,
    assetModuleFilename: "imgs/[contenthash][ext]", //自定义打包的图片路径
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", //使用我自己的模板
      filename: "app.html",
      inject: "body", //插入到body中
    }),
    new MiniCssExtractPlugin({
      filename:"styles/[contenthash].css"
    }),
  ],
  mode: "development",
  devtool: "inline-source-map", //开发模式下追踪代码,这样浏览器中错误就能显示在哪一行出错了
  devServer: {
    static: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.png$/,
        type: "asset/resource",
        //  generator:{
        //    filename:'imges/[contenthash][ext]'
        //  } 优先级比assetModuleFilename更高
      },
      {
        test: /\.txt$/,
        type: "asset/source",
      },
      {
        test: /\.jpg$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024 * 1024, //低于 4m就会 转成base64位就不会打包到dist下了
          },
        },
        //  generator:{
        //    filename:'imges/[contenthash][ext]'
        //  } 优先级比assetModuleFilename更高
      },
      {
        test: /\.css$/,
        //use:['style-loader','css-loader'] ,//顺序重要
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins:[
              ['@babel/plugin-transform-runtime']
            ]
          }
        }
      }
    ],
  },
  //压缩css
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      
    ],
    minimize: true,
  },
};
