'use strict';
const path = require('path');
/*
* 配置
* */
module.exports = {
    dev:{
        type:'dev',
        /**
         * paths
         */
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        /**
         * .js 错误映射 Source Maps
         */
        // https://webpack.js.org/configuration/devtool/#development
        devtool: 'cheap-module-eval-source-map',
    },
    build:{
        type:'build',
        //编译完成后展示结构视窗
        view:false,
        /**
         * .html 模板处理
         */
        name: '后台管理系统',
        index: path.resolve(__dirname, '../dist/index.html'),
        template:path.resolve(__dirname, '../src/index.html'),
        /**
         * paths
         */
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        /**
         * .js 错误映射 Source Maps
         */
        productionSourceMap: true,
        // https://webpack.js.org/configuration/devtool/#production
        devtool: '#source-map',
    }
};