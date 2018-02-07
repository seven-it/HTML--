onmessage = function (e) { //调用onmessage方法来监听主线程中传来的数据
    var w = 'result: '+(e.data[0] * e.data[1]);  //处理数据
    postMessage(w); // 调用postMessage方法 将处理后的数据返回给主线程；
}