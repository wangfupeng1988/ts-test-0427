const path = require('path')
const { srcPath } = require('./myPath')

module.exports = {
    entry: path.join(srcPath, 'ts-test.ts'),
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js', '.json', '.less', '.css'],
        alias: {
            '~': srcPath,
        },
    },
}
