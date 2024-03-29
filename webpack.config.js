var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist/assets'),
    filename: "bundle.js",
    publicPath: "assets"
  },
  devServer: {
    inline: true,
    contentBase: "./dist",
    port:3000
  },
  module: {
      loaders: [
          {
              test: /\.js$/,
              exclude: /(node_modules)/,
              loader: ['babel'],
              query: {
                  presets: ['es2015', 'react']
              }
          },
          {
              test: /\.json$/,
              exclude: /(node_modules)/,
              loader: 'json-loader'
          },
          {
              test: /\.css$/,
              loader: 'style-loader!css-loader!autoprefixer-loader'

          }
      ]
  },
  plugins: [
      new OptimizeCssAssetsPlugin({
          assetNameRegExp: /\.optimize\.css$/g,
          cssProcessor: require('cssnano'),
          cssProcessorOptions: {discardComments: {removeAll: true}},
          canPrint: true
      })
  ]
}
