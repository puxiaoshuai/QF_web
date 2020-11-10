<template>
  <div id="app">
    <span>我是数据</span>
    <p>{{$route.path}}</p>
    <router-link  to="/">首页</router-link>
     <router-link  to="/hi">Hi页面</router-link>
     <router-link  :to="{name:'hi1',params:{name:'蒲小帅'}}">Hi1页面</router-link>
     <router-link  to="/hi/hi2">Hi2页面</router-link>
     <router-view></router-view>
     <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
     <router-view name="right" style="float:right;width:50%;background-color:#c0c;height:300px;"></router-view>
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
