'use strict';
const webpack = require('webpack');
const path = require('path');
const config = require('../config');
//css 抽取
const extractTextPlugin = require('extract-text-webpack-plugin');
//编译结构视窗
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
//是否是生产环境
const isBuild = process.env.NODE_ENV === 'production';
console.log('参数 process.env.NODE_ENV = ',process.env.NODE_ENV , isBuild ? "生产" :"开发");
//css抽取实例
const styleCss = new extractTextPlugin({
    // filename:'css/[name].[contentHash:5].css',
    filename:'css/[name].css',
});

/**
 * 配置
 */
const conf = {
    devtool: isBuild ? config.build.devtool:config.dev.devtool,
    context: path.resolve(__dirname, '../'),
    entry:{
        app:'./src/main.js'
    },
    output:{
        path: config.build.assetsRoot,
        filename: "js/[name].js",
        publicPath: isBuild ? config.build.assetsPublicPath : config.dev.assetsPublicPath
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            },
            {
                test:/\.(less|css)$/,
                use:styleCss.extract({
                    fallback:'style-loader',
                    use:[
                        {
                            loader:'css-loader'
                        }, {
                            loader:'postcss-loader',
                            options: {
                                sourceMap: true,
                                plugins: [
                                    require('autoprefixer')({broswer: 'last 5 versions'}), //处理CSS前缀问题，自动添加前缀
                                ]
                            }
                        },{
                            loader:'less-loader'
                        }
                    ]
                })
            },
        ]
    },
    plugins:[
        styleCss
    ]
};
if(isBuild && config.build.view ){
    //编译完成后展示结构视窗
    conf.plugins.push(new BundleAnalyzerPlugin());
}
//输出
module.exports = conf;