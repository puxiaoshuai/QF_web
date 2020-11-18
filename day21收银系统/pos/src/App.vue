<template>
  <div id="app">
    <leftNav></leftNav>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import leftNav from './components/common/leftNav'
export default {
  name: 'App',
  components:{
    leftNav
  }
}
</script>
<style  scoped>
  #app{
    min-width: 800px;
  }
  .main{
    float: left;
    width: 95%;
    background-color: #eff2f7;
    height: 100%;

    
    overflow: auto;
  }
</style>

