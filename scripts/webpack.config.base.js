const path = require("path");
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
module.exports = {
    resolve: {
        extensions: [".jsx", ".js", ".less", ".css", ".png", ".tsx", ".ts", ".jpg", ".jpeg"],
        alias: {
          "@": path.resolve(__dirname, "../src"),
          "~": path.resolve(__dirname, "../example/pages"),
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        // @ts-ignore
        new ProgressBarPlugin({
            summary:true
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader",
                }
            },
            // {
            //     test: /\.css$/,
            //     loader: ["style-loader","css-loader"]
            // },
            {
                test: /\.(css|less)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options:{
                            minimizxe: true
                        }
                    },{
                        loader: 'less-loader',
                        options:{
                            javascriptEndabled: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|jpe?g|svg|ttf|woff2?|eot)(\?.*)?$/i,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 200 * 1024,
                            name: "image/[name].[ext]"
                        }
                    }
                ]
            },
        ]
    }
};
