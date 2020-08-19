const {add} =require("./js/mathutils.js")
console.log(add(20,10));
// const {name,age}=require("./info.js")
import {name,age} from './js/info.js'
console.log("name",name)
console.log("age",age);

// 引入css

require("./css/normal.css")
//
import Vue from 'vue'
new Vue({
	el:"#app",
	data:{
		msg:"我是VUE"
	}
})