var path = require('path');
var webpack = require('webpack');
var utils = require('./utils');
var config = require('../config');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //entry: [
    //    'eventsource-polyfill',
    //    'webpack-hot-middleware/client?reload=true',
    //    './src/index'
    //],
    entry: {
        app: './src/main.js'
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
    },
    //plugins: [
    //    new webpack.optimize.OccurenceOrderPlugin(),
    //    new webpack.HotModuleReplacementPlugin(),
    //    new webpack.NoErrorsPlugin(),
    //    // https://github.com/ampedandwired/html-webpack-plugin
    //    new HtmlWebpackPlugin({
    //        filename: 'index.html',
    //        template: 'index.html',
    //        inject: true
    //    }),
    //],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
            {
                test: /\.html$/,
                loaders: ['html-loader']
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ],
        postLoaders: [
            {
                test: /\.js$/,
                loaders: ['es3ify-loader']
            }
        ]
    },
    externals: {
        'jquery': 'jQuery',
        'angular': 'angular',
    }
}