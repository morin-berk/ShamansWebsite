const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: 'babel-loader',
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index-bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My first Webpack project',
            template: './src/index.html'
        })
    ]
};