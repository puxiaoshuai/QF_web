// 上下滚动
function run_v(obj, targent, callback1) {
    console.log("进入");
    console.log(obj);
    console.log(targent);
    //bug:当我们点击按钮调用方法的话，会每次调用，会越来越快,所有先清除
    clearInterval(obj.timer)
        //使用var let  会开辟内存空间，为节约
    obj.timer = setInterval(function() {
        var step = (targent - obj.pageYOffset) / 10;
        console.log(step);
        // obj.style.top = obj.offsetTop + step + "px"
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        if (obj.pageYOffset == targent) {
            console.log("结束");
            clearInterval(obj.timer)
                // if (callback1) {
                //     //调用函数
                //     callback1();
                // }
        }
        //判断要写在前面
        //obj.style.top = obj.pageoffsetY + step + "px"
        window.scroll(0, window.pageYOffset + step)
    }, 30);
}