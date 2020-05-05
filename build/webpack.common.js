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
        ],
    },
    resolve: {
        extensions: ['.ts', '.js', '.json', '.less', '.css'],
    },
}
