const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const base = require("./webpack.config.base");
const dev = {
    mode: "development",
    devtool: "eval-source-map",
    entry: ['@babel/polyfill', path.join(__dirname, '../example/index.jsx')],
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle[hash:8].js"
    },
    devServer: {
        port: 9001,
        open: true,
        hot: true,
        progress: true,
        contentBase: './dist',
        compress: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'sk-admin',
            template: path.join(__dirname,"../example/index.html"),
            filename: "index.html",
            inject:true,
            favicon: path.join(__dirname,"../public/favicon.png")
        })
    ]
};
module.exports = merge(dev, base);
