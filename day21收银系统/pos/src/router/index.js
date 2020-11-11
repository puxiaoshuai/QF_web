import Vue from 'vue'
import VueRouter from 'vue-router'
const Pos =()=>import("../components/pages/Pos.vue")

Vue.use(VueRouter)
const routes = [
	{
		path: '/',
		name: 'pos',
		component: Pos,
		
	},	
]

const router = new VueRouter({
	routes,
	mode:'history',
	linkActiveClass:"act"
})
// // 前置钩子
// router.beforeEach((to,from,next)=>{

// 	document.title=to.matched[0].meta.title
// 	next()
// })

export default router
