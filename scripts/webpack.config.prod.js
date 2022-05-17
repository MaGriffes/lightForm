const path = require("path");
const Uglifyjs = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const merge = require("webpack-merge");
const base = require("./webpack.config.base");
const prod = {
    mode: "production",
    devtool: "source-map",
    entry: {
        app: path.resolve(__dirname, '../example/index.jsx')
    },
    output: {
        path: path.resolve(__dirname, "../build"),
        filename: "bundle[hash:8].js"
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.ProgressPlugin(),
        new Uglifyjs({
            parallel: 4,
            sourceMap: true
        }),
        new webpack.BannerPlugin({
            banner: "袁飞 @2020/0728"
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,"../example/index.html"),
            filename: "index.html",
            chunks:['app'],
        })
    ]
};
module.exports = merge(prod, base);
