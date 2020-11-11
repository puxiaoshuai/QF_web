import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
Vue.config.productionTip = false
import  ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
// //axio代理配置
// import axios from 'axios'
// Vue.prototype.$axios=axios
// axios.defaults.baseURL="/api"
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
