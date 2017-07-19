const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    sourceMapFilename: '[name].map'
  },
  devServer: {
    hot: true,
    port: 8080,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dist'),
    noInfo: false,
    stats: 'minimal',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 热加载
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html'
    })
  ]
}