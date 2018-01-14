const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'wait.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'wait.js',
        library: 'wait',
        libraryTarget: 'umd'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    cacheDirectory: true
                }
            }
        }]
    },
    externals: {
        'lodash.throttle': {
            commonjs: 'lodash.throttle',
            commonjs2: 'lodash.throttle',
            amd: 'lodash.throttle',
            root: 'throttle'
        },
        jquery: {
            commonjs: 'jquery',
            commonjs2: 'jquery',
            amd: 'jquery',
            root: '$'
        }
    }
};