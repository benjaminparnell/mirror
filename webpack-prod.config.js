'use strict'

const path = require('path')
const webpack = require('webpack')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')

module.exports = {
  entry: [
    './src/client/index'
  ],
  output: {
    path: path.join(__dirname, 'public', 'js'),
    filename: 'bundle.js',
    publicPath: '/public/js/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new LodashModuleReplacementPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        unused: true,
        warnings: false,
        dead_code: true,
        drop_debugger: true,
        conditionals: true,
        evaluate: true,
        drop_console: true,
        sequences: true,
        booleans: true
      },
      exclude: [/\.min\.js$/gi]
    })
  ],
  module: {
    loaders: [
      { test: /\.js$/,
        loader: 'babel-loader',
        query: {
          plugins: [ 'lodash' ],
          presets: [[ 'env', { 'targets': { 'chrome': 56 }, 'debug': true } ], 'es2015', 'react']
        }
      },
      { test: /\.css$/,
        loaders: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
}
