const path = require('path')
const webpack = require('webpack')
const htmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/client/index.js',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },
        ]
    },
    plugins: [
        new htmlWebPackPlugin({
            template: ".src/client/views/index.html",
            filename: "./index.html",
        })
    ]
}
