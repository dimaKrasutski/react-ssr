const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
  // inform webpack that we're building a bundle 
  // for nodeJs, rather than the for the browser
  target: 'node',

  // tell webpack for root file
  // of our server app
  entry: './src/index.js',

  // where to put the output file after building
  output: {
    filename: 'bundle.js',
    path : path.resolve(__dirname, 'build'),
  },
};

module.exports = merge(baseConfig, config);