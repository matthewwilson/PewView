const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "pewview_presentationbuilder.css"
});

module.exports = {
  entry: path.join(__dirname,'presentationbuilder','index.js'),
  target: 'electron',
  output: {
    path: path.join(__dirname,'presentationbuilder','dist'),
    filename: 'pewview_presentationbuilder_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.scss$/,
        use: extractSass.extract({
            use: [{
                loader: "css-loader",
                options: { url: false }
            }, {
                loader: "sass-loader"
            }],
            // use style-loader in development
            fallback: "style-loader"
        })
      }
    ]
  },
  plugins: [
    extractSass
  ]
}
