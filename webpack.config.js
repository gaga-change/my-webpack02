const path = require('path')
const webpack = require('webpack')
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
  devServer: {
	  hot: true,
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 热加载
    new CleanWebpackPlugin(['dist']), // 打包前清空文件
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html'
    })
  ]
}