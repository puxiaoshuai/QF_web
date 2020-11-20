/*
 * @Author: mikey.zhaopeng 
 * @Date: 2020-11-20 15:36:33 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-11-20 16:00:31
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')

