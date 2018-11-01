const path = require('path');
const PugPlugin = require('html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'app': './src/app.js'
  },
  output: {
      path: path.resolve(__dirname, './dist/'),
      filename: './js/[name].js',
  },
  mode: 'development',
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        exclude: /node_modules/,
        use: [ 'html-loader?attrs=false', 'pug-html-loader' ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      }
    ]
  },
  plugins: [
    new PugPlugin({
      filename: './index.html',
      template: './src/index.pug',
      inject: false
    }),
    new HtmlWebpackPlugin()
  ]
};
