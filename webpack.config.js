const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /[\\/]node_modules[\\/]/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            parallel: true,
            terserOptions: {
                sourceMap: true,
            }
        })],
    }
}