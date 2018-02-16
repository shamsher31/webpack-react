const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

const port = process.env.PORT || 3001;

module.exports = {
  entry: ['react-hot-loader/patch', './src/index.js'],
  output: {
    filename: 'bundle.[hash].js',
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new DashboardPlugin({ port: port }),
  ],
  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: true,
    hot: true
  }
};