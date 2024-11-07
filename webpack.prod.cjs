const path = require('path')

module.exports = {
    mode: "production",
    entry: {
        index: "./src/index.js",
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/
            },

        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    }
}