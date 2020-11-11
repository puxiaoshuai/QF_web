<template>
  <div id="app">
    <span>我是数据</span>
    <p>{{$route.path}}</p>
    <router-link  to="/">首页</router-link>
     <router-link  to="/hi">Hi页面</router-link>
     <router-link  :to="{name:'hi1',params:{name:'蒲小帅'}}">Hi1页面</router-link>
     <router-link  to="/hi/hi2/122/传输的标题">Hi2页面</router-link>
     <router-view></router-view>
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  
  margin: 0px;
  padding: 0px;
  
}
</style>
