// const path = require('path')
// const HtmlWebpackPlugin = require("html-webpack-plugin");

// module.exports = {
//     mode: "development",
//     entry: {
//         index: "./src/index.js"
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             title: "output management",
//             template: "./template.html"
//         })
//     ],
//     devtool: "inline-source-map",
//     output: {
//         filename: "[name].bundle.js",
//         path: path.resolve(__dirname, 'dist'),
//         clean: true
//     },
//     devServer: {
//         static: './dist'
//     },
// }

const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        index: "./src/index.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "output management",
            template: "./template.html"
        })
    ],
    devtool: "inline-source-map",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devServer: {
        static: './dist'
    },
    module: {
        rules: [
            {
                test: /\.css$/, // Check for .css files
                use: ['style-loader', 'css-loader'], // Use style-loader and css-loader
                exclude: /node_modules/
            },
            // other rules can go here if needed
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css'] // Allow importing .css files
    }
};