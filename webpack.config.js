'use strict'

const path = require('path')
const webpack = require('webpack')
const WebpackNotifierPlugin = require('webpack-notifier')

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/client/index'
  ],
  output: {
    path: path.join(__dirname, 'public', 'js'),
    filename: 'bundle.js',
    publicPath: '/public/js/'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new WebpackNotifierPlugin()
  ],
  module: {
    loaders: [
      { test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: [ 'es2015', 'react' ]
        }
      },
      { test: /\.css$/,
        loaders: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
}
