const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: './index.js',
    output: {
        path:path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test:/\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
            filename: 'index.html',
            inject: 'body',
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: './src/styles/styles.css', to: 'styles.css' },
            ],
        }),
    
    ],
}