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
    <br />
    <p>下面是姓名</p>
    <p style="color:red">{{$store.state.student.name}}</p>
    <button @click="modify">修改</button>
    <button @click="modify1">action修改</button>
    <p>模块A中的school</p>
    <p>{{$store.state.shop.school}}</p>
    <button @click="modifyA">修改模块A中的shcool,上面的要变化</button>
    <button @click="mofifyAtime">修改模块A中的shcool,耗时</button>
    <p>===================================</p>
    <p>vuex目录结构</p>
    <p>action文件,mutations文件,getters文件, moduls文件夹</p>
    <p>==========</p>
    <hello></hello>
    <hr>
    <myhello>
       <div>111</div>
    </myhello>
  </div>
</template>
<script>
import Home from "./views/Home.vue";
import Hello from './views/HelloSolt.vue'
export default {
  name: "app",

  components: {
    hello: Home,
    myhello:Hello
  },
  data() {
    return {
      message: 0
    };
  },
  methods: {
    add: function() {

      this.message++, 
      //数据的改变最好在mutation中去修改
      // 触发 mutation第一种方式,第二种使用使用...mapmutations
      this.$store.commit("add1");
    },
    del: function() {
      this.message--;
      this.$store.commit("del1");
    },
    modify: function() {
      this.$store.commit("name_up");
    },
    modify1: function() {
      //异步就需要 用dispatch，第二种方式第二种使用使用...mapactions
      this.$store.dispatch("name_up_1", { age: 27 });
    },
    modifyA: function() {
      this.$store.commit("modifyschool", { name: "你好啊" });
    },
    mofifyAtime: function() {
      this.$store.dispatch("mofi", { name: "延时数据" });
    }
  }
};
</script>

<style>
</style>
