const path                    = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin       = require('html-webpack-plugin');
const {CleanWebpackPlugin}    = require('clean-webpack-plugin');
const MiniCssExtractPlugin    = require('mini-css-extract-plugin');
const autoprefixer            = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context     : path.resolve(__dirname, 'src'),
    entry       : ['@babel/polyfill', './index.js',],
    output      : {
        path    : path.resolve(__dirname, 'dist'),
        filename: "js/bundle.js",
    },
    plugins     : [
        new HtmlWebpackPlugin({
            title   : "ScarletAndMonarch",
            filename: "index.html",
            template: "index.html",
            minify: {
                collapseWhitespace: true,
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'css/style.css',
        }),
        new CopyWebpackPlugin([
            {
                from: './images',
                to: './images'
            },
        ]),
        new CleanWebpackPlugin(),

    ],
    module      : {
        rules: [
            {
                test   : /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use    : {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.scss$/,
                use : [
                    {
                        loader : MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        },
                    },

                    {
                        loader : 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader : 'postcss-loader', // Run postcss actions
                        options: {
                            plugins  : [
                                    autoprefixer,
                                ],
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'resolve-url-loader',
                    },
                    {
                        loader : 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },

                ],
            },
            {
                test: /(gif|png|jpe?g|svg)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[ext]'
                    }
                }]
            },
            {
                test: /woff2$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]'
                    }
                }]
            },
        ]
    },
    devServer   : {
        contentBase: path.resolve(__dirname, 'dist'),
        port       : 8080,
        stats      : 'errors-only'
    },
    devtool: '#eval-source-map'
};
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map';
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
    ])
}