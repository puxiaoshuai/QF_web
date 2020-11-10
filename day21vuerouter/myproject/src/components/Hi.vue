<template>
    <div>
        {{msg}}
         <router-view ></router-view>
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
}
</script>

<style>

</style>