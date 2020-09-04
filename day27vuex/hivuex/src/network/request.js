import axios from 'axios'
export function request(config){
  return new Promise((reslolve,reject)=>{
    const instace=axios.create({
        baseURL:"https://gank.io/api/v2",
        timeout:5000
    })
    // 添加请求拦截器
    instace.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log("config",config);
    console.log("动画加载");
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });
  instace.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    console.log("数据响应",response);
    
    return response.data;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
    instace(config)
    .then(res=>{
        reslolve(res)
    }).catch(e=>{
      reject(e)
    })
  })
}