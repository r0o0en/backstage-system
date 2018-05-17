'use strict';
process.env.NODE_ENV = 'production';

const webpack = require('webpack');
const path = require('path');
const config = require('../config');

const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.config");
const htmlWebpackPlugin = require('html-webpack-plugin');
/*JS 压缩 模块*/
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const html = new htmlWebpackPlugin({
    // https://www.npmjs.com/package/html-webpack-plugin
    title:config.build.name,
    filename:config.build.index,
    template:config.build.template,
    inject: true,
    minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
    },
    chunksSortMode: 'dependency'
});
/*js压缩*/
const jsCompress = new UglifyJsPlugin({
    sourceMap: config.build.productionSourceMap,//使用源映射将错误消息位置映射到模块（这会降低编译速度）
    warningsFilter:false //允许过滤uglify警告
});
const buildWebpackConfig = merge(baseWebpackConfig,{
    plugins:[
        html
        ,jsCompress
    ]
});

console.log('buildWebpackConfig : ',buildWebpackConfig);

module.exports = buildWebpackConfig;