import { createStore } from 'vuex'

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
      name_up(state){
        setTimeout(()=>{
          state.student.name="3s后-春风亭老巢"
        },3000)
       
      }

  },
  //有异步任务的时候在actions中做，昨晚了之后在mutations进行改变
  actions: {
  },
  modules: {
  },
  //类似单个组件中 计算的属性
  getters:{
     ping(state){
       return state.message*2
     }
  }
})
