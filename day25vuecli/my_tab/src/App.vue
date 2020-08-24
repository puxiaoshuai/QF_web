<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from './components/MainTab.vue'

 export default {
  name: 'App',
  components:{
    MainTabBar
  }
}
</script>

<style>
 @import url("./assets/css/normalize.css");

</style>
