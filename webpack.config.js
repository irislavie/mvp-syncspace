const path = require('path');

module.exports = {
  watch: true,
  devtool: 'source-map',
  entry: './client/index.jsx',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'public'),
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
        use: [
          'css-loader?sourceMap&modules,localIdentName=[local]-[hash:base64]',
        ],
      },
    ]
  }
};