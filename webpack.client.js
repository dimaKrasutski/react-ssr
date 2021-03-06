const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
  // tell webpack for root file
  // of our server app
  entry: './src/client/client.js',

  // where to put the output file after building
  output: {
    filename: 'bundle.js',
    path : path.resolve(__dirname, 'public'),
  },
};

module.exports = merge(baseConfig, config);