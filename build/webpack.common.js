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
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 500 * 1024, // <=500kb 则使用 base64 （即，希望字体文件一直使用 base64 ，而不单独打包）
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js', '.json', '.less', '.css'],
        alias: {
            // utils: path.join(srcPath, 'utils'),
            // style: path.join(srcPath, 'assets', 'style'),
        },
    },
}
