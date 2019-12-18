// webpack打包入口,这里React 大写
import React from 'react' //创建组件，虚拟dom元素，生命周期
import ReactDOM from 'react-dom' //把创建好的组件和DOM放到页面上展示
//参数1，创建元素的类型，字符串，表示元素的名称
//参数2，是一个对象或null,表示当前这个dom的属性  {href:""}
//参数3，子节点，包括 其他虚拟dom，获取文本子节点

const myh1 = React.createElement("h1", { id: "myid" }, "我是创建的元素")
const mydiv = React.createElement("div", null, myh1)
    //参数 要渲染的虚拟dom元素
    //参数2 指定页面上的dom元素当做容器

ReactDOM.render(mydiv, document.getElementById("app"))
    //上面的创建方式很繁琐呀