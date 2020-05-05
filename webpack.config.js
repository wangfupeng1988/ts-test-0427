const path = require('path')

module.exports = {
    mode: 'development',

    entry: path.join(__dirname, 'src', 'index.ts'),
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },

    resolve: {
        extensions: ['.ts'],
    },
}
