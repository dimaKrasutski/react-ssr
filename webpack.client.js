const path = require('path');

module.exports = {
  // tell webpack for root file
  // of our server app
  entry: './src/client/client.js',

  // where to put the output file after building
  output: {
    filename: 'bundle.js',
    path : path.resolve(__dirname, 'public'),
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