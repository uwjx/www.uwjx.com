const { resolve } = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

let pathsToClean = [
  'dist'
]

let cleanOptions = {
}

module.exports = {
  output: {
    path: resolve('dist'),
    filename: 'js/bundle-[name]-[chunkhash].js'
  },
  plugins: [
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
    new HtmlWebpackPlugin({
      time: new Date(),
      filename: 'index.html',
      template: 'index.html'
    })
  ]
};
