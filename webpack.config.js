const path = require('path');
var DIST_DIR = path.join(__dirname, '/client/public');

module.exports = {
  watch: true,
  devtool: 'source-map',
  entry: './client/index.jsx',
  mode: 'development',
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test:/\.js$|jsx/,
        exclude: /node_modules(?!\/quill)/,
        loader: 'babel-loader'
      },
      {
        test: /\.svg$/,
        loader: 'html-loader'
      },
      {
        test: /\.(css)$/,
        include: [/stylesheets/, /node_modules/],
        use: [
          'css-loader',
        ],
      },
      {
        test: /\.css$/,
        exclude: [/stylesheets/, /node_modules/],
        loader: 'css-loader',
        options: {
          modules: {localIdentName:'[local]-[hash:base64]'}
        },
      },
    ]
  }
};