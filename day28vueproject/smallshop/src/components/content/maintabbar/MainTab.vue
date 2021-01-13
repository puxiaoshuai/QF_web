<template>
  <tab-bar>
    <tab-bar-item path="/">
      <template slot="item_icon"><img   src="../../../assets/img/tabbar/home1.png"/></template>
     <template slot="item_icon_active">  <img  src="../../../assets/img/tabbar/home2.png"  /></template>
     <template slot="item_text">         <div >首页</div></template>
    </tab-bar-item>
    <tab-bar-item path="/cate">
      <template slot="item_icon"><img   src="../../../assets/img/tabbar/home1.png"/></template>
     <template slot="item_icon_active">  <img  src="../../../assets/img/tabbar/home2.png"  /></template>
     <template slot="item_text">         <div >首页</div></template>
    </tab-bar-item>
    <tab-bar-item path="/car">
      <template slot="item_icon"><img   src="../../../assets/img/tabbar/home1.png"/></template>
     <template slot="item_icon_active">  <img  src="../../../assets/img/tabbar/home2.png"  /></template>
     <template slot="item_text">         <div >首页</div></template>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <template slot="item_icon"><img   src="../../../assets/img/tabbar/home1.png"/></template>
     <template slot="item_icon_active">  <img  src="../../../assets/img/tabbar/home2.png"  /></template>
     <template slot="item_text">         <div >首页</div></template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "../../../components/common/tabbar/TabBar.vue";
import TabBarItem from "../../../components/common/tabbar/TabBarItem.vue";
export default {
  name: "mainbar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style scoped>
 
</style>
