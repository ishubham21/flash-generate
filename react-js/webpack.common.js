const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(jpg|svg|png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html"),
            inject: 'body'
        }),
        new MiniCssExtractPlugin(),
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name].js",
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 3002,
        open: true,
        compress: true,
    }
}