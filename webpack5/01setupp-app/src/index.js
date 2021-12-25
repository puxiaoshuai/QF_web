const sayHi = ()=>{
  return new Promise((resole,reject)=>{
    setTimeout(() => {
      resole("我是异步es6")
    }, 2000);
  })
}
const  helloWebPack =async ()=> {
  console.log("你好，webpac,webpack-dev-server自动更新，保存就更新");
  const data= await sayHi()
  console.log("es6",data);
}
import imagesrc from "../../imgs/img1.png";
import imagepng from "../../imgs/img2.jpg";
import egTxt from "./assets/readme.txt";
import './styles.css'
helloWebPack();
const imgUrl = document.createElement("img");
imgUrl.style.cssText = "height:300px;width:600px;display:block";
imgUrl.src = imagesrc;

document.body.appendChild(imgUrl);
// export default helloWebPack
const divtext = document.createElement("div");
divtext.textContent = egTxt;
document.body.appendChild(divtext);

const imgUrljpg = document.createElement("img");
imgUrljpg.style.cssText = "height:300px;width:600px;display:block";
imgUrljpg.src = imagepng;

document.body.appendChild(imgUrljpg);
document.body.classList.add("main")