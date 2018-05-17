require('./assets/css/style.less');
require('./assets/css/style2.less');
import 'babel-polyfill';
function test(resolve,reject) {
    var n = Math.random() * 2 ;
    console.log('生成随机数:'+n);
    setTimeout(()=>{
        if(n<1){
            console.log('call resolve('+n+')');
            resolve(n);
        }else{
            console.log('call reject('+n+')');
            reject(n);
        }
    },n*1000);
}

var p1 = new Promise(test).then(function (value) { console.log('小于0：'+value) })
                            .catch(function (reason) { console.log('大于0：'+reason)});