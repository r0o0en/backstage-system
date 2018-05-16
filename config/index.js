'use strict';
const path = require('path');
/*
* 配置文件
* */
module.exports = {
    dev:{

    },
    build:{
        // Template for index.html
        //index: path.resolve(__dirname, '../dist/index.html'),
        // Paths
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
    }
};