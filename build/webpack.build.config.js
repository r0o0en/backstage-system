'use strict';
const webpack = require('webpack');
const path = require('path');
const merge = require("webpack-merge");

const config = require('../config');
const baseWebpackConfig = require("./webpack.base.config");

const buildWebpackConfig = merge(baseWebpackConfig,{
    name:'build'
});
console.log('buildWebpackConfig : ',buildWebpackConfig);

module.exports = buildWebpackConfig;