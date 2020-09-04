import { createRouter, createWebHistory } from 'vue-router'
const Home =()=>import("../views/Home.vue")
const Cate =()=>import("../views/Cate.vue")
const Car =()=>import("../views/Car.vue")
const Profile =()=>import("../views/Profile.vue")
const routes = [
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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
