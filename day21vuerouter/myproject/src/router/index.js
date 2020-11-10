import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HiPage from '@/components/Hi'
import Hi1Page from '@/components/Hi1'
import Hi2Page from '@/components/Hi2'
import HileftPage from '@/components/Hileft'
import HirightPage from '@/components/HiRight'
import Page404 from '@/components/404'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hi',
      name:"hi",
      component: HiPage,
      children: [
        {
          path: 'hi1',
          name:"hi1",
          // 单页面多路由区域定制,需要在hi下面定义router-view
          components:{
            default:Hi1Page,
            left:HileftPage,
            right:HirightPage,
          }
        },
        {
          name:"hi2",
          path: 'hi2/:id/:title',
          component: Hi2Page,
          alias:"hi22"
        }
      ]
    },
    {
      path:"*",
      component:Page404
    }
    
  ]
})
