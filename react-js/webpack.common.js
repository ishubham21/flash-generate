const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

//directories
const BUILD_DIR = path.join(__dirname, 'build');
const APP_DIR = path.join(__dirname, 'src');

const VENDOR_LIBS = ['react', 'react-dom',];

module.exports = {
    entry: {
        app: APP_DIR + "/index.js",
        vendor: VENDOR_LIBS
    },
    module: {
        rules: [
            {
                //for JavaScript
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                //for CSS
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                //for images
                test: /\.(jpg|svg|png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                        }
                    },
                ],
            },
            {
                //For fonts
                test: /\.(woff|woff2|ttf|otf|eot)$/,
                use: [
                    {
                        //using file-loader too
                        loader: 'file-loader',
                        options: {
                            outputPath: 'fonts'
                        }
                    }
                ]
            },
        ]
    },
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src'),
        },
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        //for HTML
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
            inject: 'body'
        }),
        new MiniCssExtractPlugin(),
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[hash].js',
        pathinfo: false,
    },
}