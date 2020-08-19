import Vue from 'vue'
import VueRouter from 'vue-router'
const Home =()=>import("../views/Home.vue")
const News =()=>import("../views/HNews.vue")
const Message =()=>import("../views/HMessage.vue")
Vue.use(VueRouter)
const routes = [
	{
		path: "",
        redirect:"/home",

	},
	{
		path: '/home',
		name: 'Home',
		meta:{
			title:"首页"
		},
		component: Home,
		// 子路由定义名称时不需要加/
		children:[
			// {
			// 	path: "",
			//     redirect:"news",
			//
			// },
			{
				path: 'news',
				name: 'news',
				component: News
			},
			{
				path: 'message',
				name: 'message',
				component: Message
			}
		]
	},


	{
		path: '/about/',
		name: 'About',
		meta:{
			title:"关于"
		},
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
	},
	{
		path: '/user/:id',
		name: 'User',
		meta:{
			title:"用户"
		},
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/User.vue')
	}
]

const router = new VueRouter({
	routes,
	mode:'history',
	linkActiveClass:"act"
})
// 前置钩子
router.beforeEach((to,from,next)=>{

	document.title=to.matched[0].meta.title
	next()
})

export default router
