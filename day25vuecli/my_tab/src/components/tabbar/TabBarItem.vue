<template>
  <div class="tabbar_item" v-on:click="choose">
    <div v-if="!isActive">
      <slot name="item_icon">

      </slot>
    </div>
    <div v-else>
      <slot name="item_icon-active">

      </slot>
    </div>

    <div :style="activeStyle">
      <slot name="item_text"></slot>
    </div>

  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    // data() {
    //   return {
    //     isActive: isActive
    //   }
    // },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path)!==-1
      },
      activeStyle(){
        return this.isActive?{color:this.activeColor}:{}
      }
    },
    props:{
      path:String,
      activeColor:{
        type:String,
        default:"red"
      }
    },
    methods:{
      choose:function(){
        
        this.$router.replace(this.path)
      }
    }

  }
</script>

<style scoped>
  .tabbar_item {
    flex: 1;
    text-align: center;
    height: 49px;
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .tabbar_item img {
    width: 24px;
    height: 24px;
    margin-top: 4px;
  }


</style>
