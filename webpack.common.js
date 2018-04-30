const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: ['babel-polyfill', './app.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: ['babel-loader'],
        include: path.resolve(__dirname, 'src'),
        exclude: /(static\/plugins)/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {loader: 'css-loader', options: { minimize: isProd }},
            'postcss-loader',
            'less-loader'
          ]
        })
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?.*$|$)/,
        use: 'file-loader?name=[name].[ext]?[hash]'
      },
      {
        test: /\.html$/,
        use: [
          'raw-loader'
        ]
      },
      {
        test: /\.json$/,
        use: ['json-loader']
      }
    ]
  },
  plugins: [
    new webpack.ContextReplacementPlugin(/moment[\\/]locale$/, /^\.\/(ru)$/),
    new ExtractTextPlugin('styles.css'),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new HtmlWebpackPlugin({
      template: '../index.html',
      filename: './index.html',
      hash: true
    })
  ]
}
