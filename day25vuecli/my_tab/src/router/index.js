import Vue from 'vue'
import Router from 'vue-router'
const Home =()=>import("../views/home/Home.vue")
const Cate =()=>import("../views/cate/Category.vue")
const Car =()=>import("../views/car/Car.vue")
const Profile =()=>import("../views/profile/Profile.vue")
Vue.use(Router)
export default new Router({
  routes: [
    {
      name:"Home",
      path:"/home",
      component:Home
    },
   {
     name:"Cate",
     path:"/cate",
     component:Cate
   },
    {
      name:"Car",
      path:"/car",
      component:Car
    },
   {
     name:"Profile",
     path:"/profile",
     component:Profile
   }
  ]
})
