<template>
  <div class="home">
    <div>
		<HelloWorld msg="Welcome to Your Vue.js App"/>
		<router-link to="/home/news">新闻</router-link>
		<span>|</span>
		<router-link to="/home/message">消息</router-link>

	</div>
	      <router-view/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
	data(){
  	  return {
		  path:"/home/news"
	  }
	},
	created(){
  	 console.log("创造")
	},
	destroyed(){
  	 console.log("结束")
	},
	activated() {
		this.$router.push(this.path)
	},
	beforeRouteLeave(to,form,next) {
		this.path=this.$route.path
		next()
	}
}
</script>
<style>
	a{
		color: orange;
	}
</style>
