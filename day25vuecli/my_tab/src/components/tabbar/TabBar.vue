<template>
  <div class="tabbar">
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
    display: flex;
    background-color: #F6F6F6;
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    box-shadow: 0px -2px 1px rgba(223, 223, 223, 0.4);

  }


</style>
