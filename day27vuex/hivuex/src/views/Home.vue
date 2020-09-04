<template>
  <div class="home">
    <p>axios网络请求</p>
    <p></p>
  </div>
</template>

<script>
import {request} from '../network/request'

//拦截器  请求成功，失败的拦截，  响应成功，失败
export default {
  name: 'Home',
  created() {
    request({
     url:"banners"
    }).then(res=>{
      console.log("数据111111",res);
      
    }).catch(e=>{
     console.log("异常",e);
     
    })
  },
 
}
</script>
