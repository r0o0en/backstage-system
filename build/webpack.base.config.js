'use strict';
const webpack = require('webpack');
const path = require('path');
const config = require('../config');

console.log('21',config,Object.keys(config));
module.exports = {
    context: path.resolve(__dirname, '../'),
    entry:{
        app:'./src/main.js'
    },
    output:{
        path: config.build.assetsRoot,
        filename: '[name].js'
    }
};