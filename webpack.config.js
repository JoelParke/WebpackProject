var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
        {
          use: 'babel-loader',
          test: /\.js$/,
          exclude: /mode_modules/
        },
        // only using css loader here
        {
          use: ['style-loader', 'css-loader'],
          test: /\.css$/
        }
    ]
  }
};
