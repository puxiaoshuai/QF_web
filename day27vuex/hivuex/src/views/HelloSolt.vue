<template>
  <div>
    测试
      {{ message }}
    <h1 v-color>测试自定义指令</h1>
  </div>
</template>
<script>
export default {
  name: "myhello",
  data() {
    return {
      message: "我是hello组1件11222"
    };
  },
  directives: {
    color:{
      bind(el){
        console.log("触发");
        el.style.color="red"
      }
    }
  }
  
};

</script>

<style lang=""></style>
