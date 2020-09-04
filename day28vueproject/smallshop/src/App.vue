<template>
  <div id="app">
     <router-view></router-view>
     <mainbar></mainbar>
     <p>哈哈哈</p>
  </div>
</template>
<script>
import MainTab from 'components/content/maintabbar/MainTab.vue'
export default {
   name:"App",
   components:{
     mainbar:MainTab
   }
   
}
</script>
<style>
  @import url('assets//css/normalize.css');
</style>
