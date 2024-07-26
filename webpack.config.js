const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  devtool: false,
  entry: {
    app: './src/main.js',
    server: 'webpack/hot/dev-server.js',
    client: 'webpack-dev-server/client/index.js?hot=true&live-reload=true'
  },
  output: {
    path: `${__dirname}/build`
  },
  devServer: {
    hot: true,
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }), 
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    runtimeChunk: 'single'
},
};