'use strict';
const webpack = require('webpack');
const path = require('path');
const merge = require("webpack-merge");

const config = require('../config');
const baseWebpackConfig = require("./webpack.base.config");

const devWebpackConfig = merge(baseWebpackConfig,{
    name:'dev'
});
module.exports = devWebpackConfig;