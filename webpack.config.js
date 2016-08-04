var path = require('path');

module.exports = {

  context: path.join(__dirname, 'src'),

  entry: {
    all: './all',
    named: './named',
    single: './single',
  },

  output: {
    path: path.resolve(__dirname, 'demo'),
    filename: '[name]/app.js',
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel'] },
    ],
  },
};
