const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({ // 提取公共代码(多入口时开启)
    //   name: 'common' // Specify the common bundle's name.
    // }),
    new CleanWebpackPlugin(['dist']), // 打包前清空文件
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html'
    })
  ]
}
