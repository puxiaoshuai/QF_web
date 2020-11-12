import { createStore } from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from  './getters'
import MoudA from './modules/moduleA'

export default createStore({
  //初始化数据
  state: {
    message:12,
    student:{
      name:"蒲小帅"
    }
  },
  //这是数据改变
  mutations,
  //有异步任务的时候在actions中做,在点击事件中进行 this.$store.dispatch('name_up_1')分发，然后在actions中进行接收，在上下文中进行处理
//   Action提交的是Mutation，不能够直接修改state中的状态，而Mutations是可以直接修改state中状态的；
// Action是支持异步操作的，而Mutations只能是同步操作。
  actions,
  //module：可以让每一个模块拥有自己的state、mutation、action、getters,使得结构非常清晰，方便管理。
  modules: {
    shop:MoudA
  },
  //类似单个组件中 计算的属性,对数据进行加工，形成新的数据
  getters
})
