import { createStore } from 'vuex'

const MoudA={
  state:{
    school:"school is moduleA"
  },
  mutations:{
    modifyschool(state,p){
      console.log(p);
        state.school="你好，修改的名字"+p.name
    }
  },
  actions:{
    mofi(com,p){
      console.log(com);
      setTimeout(()=>{
        com.commit("modifyschool",p)
      },1000)
     
    }
  },
  getters:{

  }
}
export default createStore({
  //初始化数据
  state: {
    message:12,
    student:{
      name:"蒲小帅"
    }
  },
  //这是数据改变
  mutations: {
    add1(state) {
      state.message++
      },
      del1(state){
        state.message--
      },
      //异步这样调用也没错，但是dev工具识别不了，不好调试
      name_up(state,p){
        console.log("数据",p);
        setTimeout(()=>{
          state.student.name="3s后-春风亭老巢"+"年龄"+p.age
        },3000)
      }
  },
  //有异步任务的时候在actions中做,在点击事件中进行 this.$store.dispatch('name_up_1')分发，然后在actions中进行接收，在上下文中进行处理
//   Action提交的是Mutation，不能够直接修改state中的状态，而Mutations是可以直接修改state中状态的；
// Action是支持异步操作的，而Mutations只能是同步操作。
  actions: {
    //接收 分发
    name_up_1(context,p){ 
      context.commit("name_up",p)
    }
  },
  //module：可以让每一个模块拥有自己的state、mutation、action、getters,使得结构非常清晰，方便管理。
  modules: {
    shop:MoudA
  },
  //类似单个组件中 计算的属性
  getters:{
     ping(state){
       return state.message*2
     }
  }
})
