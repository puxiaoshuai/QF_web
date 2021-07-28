import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
//test1
//import Index from  './pages/redux01/index' //todolist
//原生事件和合成事件混用
// import Index  from './pages/合成事件与原生混用/index'
//import Index from  './pages/lifecricle' //react生命周期
//import Index from  './pages/react_content' //react上下文，避免多级props的获取
// import Index from  './pages/react高阶组件' //高阶组件、、
import Index from './pages/demo.js'
ReactDOM.render( < Index / > , document.getElementById('root'));