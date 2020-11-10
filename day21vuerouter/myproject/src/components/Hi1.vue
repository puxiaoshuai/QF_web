<template>
    <div>
        {{msg}}
        <p>接收参数.{{$route.params.name}}</p>
    </div>
</template>

<script>
export default {
  name:"hi1",
  data() {
      return {
          msg:"Hi1111111111111111"
      }
  },
}
</script>

<style>

</style>