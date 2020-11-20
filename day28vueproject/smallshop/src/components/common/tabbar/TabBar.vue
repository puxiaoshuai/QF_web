<template>
  <div class="tabbar">
    <!--tabitem插槽 -->
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>
<style scoped>
  .tabbar {
    height: 49px;
    display: flex;
    background-color: red;
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    box-shadow: 0px -2px 1px rgba(223, 223, 223, 0.4);
  }

</style>
