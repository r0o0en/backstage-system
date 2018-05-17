"# backstage-system"  
*新版后台管理系统，使用 vue全家桶 + element 。*
####目录结构
* `/build/` -- 构建脚本
    * `/assets/` —— 资源目录
    * `/components/` —— 组件目录
* `/config/` -- 构建配置
* `/node_modules/` -- 依赖的工具包
* `/src/` -- 源码
* `/static/` -- 静态资源（css、js）
* `/test/` -- 测试数据目录(json等)

#### .css 样式处理
```
npm install --save-dev style-loader css-loader less less-loader post-loader 
 ```
 
#### .css 前缀自动补全
 ```
 npm install --save-dev autoprefixe
  ```
#### .css 单独打包
 ```
 npm install --save-dev extract-text-webpack-plugin
  ```
#### .html 模板
 ```
 npm install --save-dev extract-text-webpack-plugin
  ```
#### .js 编译[babel](http://babeljs.io/)
 ```
 npm install --save-dev  babel-loader@8.0.0-beta.0 @babel/core @babel/preset-env
  ```
  [env预设](https://babeljs.io/docs/plugins/preset-env)  
  *Babel预设，可根据您支持的环境自动确定您需要的Babel插件。*

#### js 新API语法垫片
*Babel默认只转换新的JavaScript句法（syntax），而不转换新的API，比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如Object.assign）都不会转码。  
举例来说，ES6在Array对象上新增了Array.from方法。Babel就不会转码这个方法。如果想让这个方法运行，必须使用babel-polyfill，为当前环境提供一个垫片。*
[查看](https://blog.csdn.net/crazyfeeling/article/details/70241285)、
[加载-polyfills](https://webpack.docschina.org/guides/shimming/#加载-polyfills)
 ```
 npm install --save babel-polyfill
  ```
#### .js 压缩 [uglifyjs-webpack-plugin](https://webpack.docschina.org/plugins/uglifyjs-webpack-plugin)
 ```
 new UglifyJsPlugin({
    sourceMap: config.build.productionSourceMap,//使用源映射将错误消息位置映射到模块（这会降低编译速度）
    warningsFilter:false //允许过滤uglify警告
 })
  ```

#### .js 错误映射
[devtool](https://webpack.docschina.org/configuration/devtool/) : 此选项控制是否生成，以及如何生成 source map。
 ```
 //在使用 uglifyjs-webpack-plugin 时，你必须提供 sourceMap：true 选项来启用 source map 支持。
 module.exports = {
    devtool:'hidden-source-map',
    entry:{
        app:'./src/main.js'
    },
 }
  ```
#### 热更新本地开发服务器
`仅限于开发环境`
 ```
 npm install --save-dev  webpack-dev-server
  ```
#### 编译结构视窗  
`通过 config.build.view:true 配置开启`
 ```
 npm install --save-dev  webpack-bundle-analyzer
  ```
