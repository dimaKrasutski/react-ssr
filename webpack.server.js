const path = require('path');

module.exports = {
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

  // run babel on every file it runs through
  module : {
    rules : [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react', 
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] }}]
          ]
        }
      }
    ]
  }
};