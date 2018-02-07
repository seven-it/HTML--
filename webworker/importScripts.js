onmessage = function (e){
    importScripts('a.js','b.js');// 在a.js中定义变量a=1,在b.js中定义变量b=3;
    var w = e.data+a+b;  //在worker中使用外部引入的变量 a,b
    postMessage(w);  //返回最终结果
}