let i=0
function  timeCount() {
    i=i+1
    postMessage(i);//传递消息
    setTimeout('timeCount()',1000)
  }
 timeCount() 
//  1s循环调用