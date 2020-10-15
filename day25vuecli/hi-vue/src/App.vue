<template>
  <div id="app">
    <div id="nav">
      <router-link tag="button" replace active-class="a" to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
	  <router-link :to="`/user/`+id">用户</router-link>
    </div>
    <keep-alive>
    <router-view/>
    </keep-alive>
  </div>
</template>
<script>
	export default{
		name:"App",
		data(){
			return {
				id:"我是新的id"
			}
		}
	}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
