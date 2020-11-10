<template>
    <div>
        {{msg}}
         <router-view ></router-view>
         <transition name="fade">
          <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
           </transition>
           <router-view name="right" style="float:right;width:50%;background-color:#FF1;height:300px;"></router-view>
    </div>
</template>

<script>
export default {
  name:"hi",
  data() {
      return {
          msg:"发送到接口饭"
      }
  },
  beforeRouteEnter (to, from, next) {
      // ...
      console.log("进入路由模板")
      next()
  },
  beforeRouteLeave (to, from, next) {
      // ...
      console.log("离开路由模板")
      next()
  }
}
</script>

<style>
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity 2s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity 2s;
}
</style>