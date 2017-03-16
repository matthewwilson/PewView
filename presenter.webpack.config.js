const path = require('path');
module.exports = {
  entry: path.join(__dirname,'presenter','index.js'),
  output: {
    path: path.join(__dirname,'presenter','dist'),
    filename: 'pewview_presenter_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}
