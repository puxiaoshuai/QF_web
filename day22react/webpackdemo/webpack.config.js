const path = require("path")
const HtmlWbpackPlugin = require("html-webpack-plugin")
const htmldev = new HtmlWbpackPlugin({
    template: path.join(__dirname, './src/index.html'),
    filename: 'index.html'
})
module.exports = {
    mode: "development", // production
    plugins: [
            htmldev
        ]
        //webpack 4.x 约定在src>index.js
        //webpack-dev-server打包好的main.js  托管到了内存中，所以在根目录中看不到，
        //但是，我们可以认为，在项目的根项目中

}