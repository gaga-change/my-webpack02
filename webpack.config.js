const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
	entry: {
		app: './src/index.js'
	},
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, './dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']), // 打包前清空文件
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html'
    })
  ]
}