<template>
  <tab-bar>
     <tab-bar-item path="/home">
       <img slot="item_icon" src="../../../assets/img/1.png" alt="">
        <img slot="item_icon-active" src="../../../assets/img/2.png" alt="">
        <div slot="item_text">首页</div>
      </tab-bar-item >
      <tab-bar-item  path="/cate">
        <img slot="item_icon" src="../../../assets/img/1.png" alt="">
         <img slot="item_icon-active" src="../../../assets/img/2.png" alt="">
        <div slot="item_text">分类</div>
       </tab-bar-item >
       <tab-bar-item  path="/car">
         <img slot="item_icon" src="../../../assets/img/1.png" alt="">
         <img slot="item_icon-active" src="../../../assets/img/2.png" alt="">
         <div slot="item_text">购物车</div>
        </tab-bar-item >
        <tab-bar-item  path="/profile">
          <img slot="item_icon" src="../../../assets/img/1.png" alt="">
          <img slot="item_icon-active" src="../../../assets/img/2.png" alt="">
          <div slot="item_text">我的</div>
         </tab-bar-item >
  </tab-bar>
</template>

<script>
  import TabBar from '../../../components/common/tabbar/TabBar.vue'
   import TabBarItem from '../../../components/common/tabbar/TabBarItem.vue'
   export default{
     name:"mainbar",
     components:{
       TabBar,
       TabBarItem
     }
   }
</script>

<style scoped>

</style>
