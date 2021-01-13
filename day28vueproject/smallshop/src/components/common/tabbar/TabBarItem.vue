<template>
  <div class="tabbar_item" v-on:click="choose">
    
    <div v-if="!isActive">
     
      <slot name="item_icon">
      </slot>
    </div>
    <div v-else>
      <slot name="item_icon_active">
      </slot>
    </div>
    <div :style="activeStyle">
      <slot name="item_text"></slot>
    </div>
  </div>
</template>
<script>

  export default {
    name: "TabItem",
    // data() {
    //   return {
    //     isActive: isActive
    //   }
    // },
    computed:{
      isActive(){
        // 判断是否存在这个路由, home-> item1(home)=true
        console.log("路由",this.$route.path);
        return this.$route.path.indexOf(this.path)!==-1
      },
      activeStyle(){
        return this.isActive?{color:this.activeColor}:{}
      }
    },
    //接收参数path,并默认显示红蓝色色
    props:{
      path:String,
      activeColor:{
        type:String,
        default:"blue"
      }
    },
    methods:{
      choose:function(){
        this.$router.replace(this.path)
      }
    }

  }
</script>

<style >
  .tabbar_item {
    flex: 1;
    text-align: center;
    height: 49px;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
 .tabbar_item  > img {
    width: 24px;
    height: 24px;
    margin-top: 4px;
  }
  


</style>
