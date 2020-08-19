<template>
	<div>
		<div>我是用户界面</div>
		<p>欢迎{{userid}}</p>
	</div>
	
</template>

<script>

export default {
  name: 'User',
  computed:{
	  userid(){
		  return this.$route.params.id
	  }
  },
  created:function(){
  	
  }
}
</script>


<style>
</style>
