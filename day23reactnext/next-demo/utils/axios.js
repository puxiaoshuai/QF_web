import Axios from 'axios'
import {Component} from 'react'
Component.prototype.$axios=Axios //将axios挂载到Component上，以供全局使用

//配置过滤器请求响应（通过查npm官网，axios文档）
export default Axios.interceptors.response.use(function (response) {
    return response.results;//只获取data数据
  }, function (error) {
    return Promise.reject(error);
  });
