const path                    = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin       = require('html-webpack-plugin');
const {CleanWebpackPlugin}    = require('clean-webpack-plugin');
const MiniCssExtractPlugin    = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin            = require('terser-webpack-plugin');
const autoprefixer            = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context     : path.resolve(__dirname, 'src'),
    entry       : ['./index.js',],
    output      : {
        path    : path.resolve(__dirname, 'dist'),
        filename: "js/bundle.js",
    },
    plugins     : [
        new HtmlWebpackPlugin({
            title   : "ScarletAndMonarch",
            filename: "index.html",
            template: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: 'css/style.css',
            //chunkFilename: '[id].css',
        }),
        new CopyWebpackPlugin([
            {
                from: './fonts',
                to: './css/fonts'
            },
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
                    MiniCssExtractPlugin.loader,
                    {
                        loader : 'css-loader',
                        options: {
                            sourceMap: true,
                        },
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
                        name: 'images/[name][hash].[ext]'
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
        })
    ])
}