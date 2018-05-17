'use strict';
const webpack = require('webpack');
const path = require('path');
const config = require('../config');

const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.config");
const htmlWebpackPlugin = require('html-webpack-plugin');

const html = new htmlWebpackPlugin({
    title:config.build.name,
    filename:config.build.index,
    template:config.build.template,
    inject: true,
    showErrors:true,
    chunksSortMode: 'dependency'
});
const devWebpackConfig = merge(baseWebpackConfig,{
    plugins:[
        html
    ],
    devServer: {//热更新
        contentBase: path.resolve(__dirname,'../src'),
        port:"8888",
        host:"192.168.1.176",
    }
});
console.log('devWebpackConfig : ',devWebpackConfig);
module.exports = devWebpackConfig;