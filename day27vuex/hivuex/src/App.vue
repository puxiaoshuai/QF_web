<template>
  <div id="app">
    <p>这是单页面app界面内容</p>
    <p>{{message}}</p>
    <p>下面是hello组件,假设组件之间没得父子关系</p>
    <hello v-bind:message="message" />
    <br />
    <p>这是store中的内容</p>
    <p>{{$store.state.message}}</p>
    <p></p>
    <button v-on:click="add">+</button>
    <button @click="del">-</button>
   
    <p>显示使用@store.state.xx</p>
    <p>这是 gettters</p>
    <p>{{$store.getters.ping}}</p>
    <br>
    <p>下面是姓名</p>
    <p style="color:red">{{$store.state.student.name}}</p>
    <button @click="modify">修改</button>
  </div>
</template>
<script>
import About from "./views/About.vue";
export default {
  name: "app",

  components: {
    hello: About
  },
  data() {
    return {
      message: 0
    };
  },
  methods: {
    add: function() {
      this.message++,
      this.$store.commit("add1")
    },
    del: function() {
      this.message--;
       this.$store.commit("del1")
    },
    modify:function () {
      this.$store.commit("name_up")
      }
    
  }
};
</script>

<style>
</style>
