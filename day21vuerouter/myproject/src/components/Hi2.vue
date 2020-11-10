<template>
    <div>
        {{msg}}
        <p>{{$route.params.id}}</p>
        <p>{{$route.params.title}}</p>
    </div>
</template>

<script>
export default {
  name:"hi2",
  data() {
      return {
          msg:"Hi1222221111"
      }
  },
}
</script>

<style>

</style>