<template>
  <div id="app">
     <router-view></router-view>
     <mainbar>
       
     </mainbar>
     
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
  @import url('./assets/css/normalize.css');
  #app{
    width: 100%;
  }
</style>
