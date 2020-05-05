const path = require('path')
const { smart } = require('webpack-merge')
const CommonConf = require('./webpack.common')
const { srcPath, distPath } = require('./myPath')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = smart(CommonConf, {
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'index.html'),
            filename: 'index.html',
        }),
    ],
    devServer: {
        port: 3000,
        progress: true, // 显示打包进度条
        contentBase: distPath,
        open: true, // 自动打开浏览器
        // compress: true, // 开启 gzip 压缩
    },
})
