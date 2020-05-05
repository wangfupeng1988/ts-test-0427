// const path = require('path')
const { smart } = require('webpack-merge')
const CommonConf = require('./webpack.common')
const { distPath } = require('./myPath')

module.exports = smart(CommonConf, {
    mode: 'production',
    output: {
        filename: 'ts-test.js',
        path: distPath,
        library: 'tsTest',
        libraryTarget: 'umd',
    },
})
