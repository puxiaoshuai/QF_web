const express=require("express")
const bodyparse=require("body-parser")
const path=require("path")
const app=express()
const port=3000
//设置跨域访问
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
  });
//  app.use(bodyparse.urlencoded())// 如果请求post ,application/x-www-form-urlencoded
 app.use(bodyparse.json()) //如果请求post ,application/json
app.use(express.static(path.join(__dirname)));
app.get("/",(req,res)=>(res.send('Hello World!')));
app.get("/first",(req,res)=>(res.send('你好')));
app.get("/responseData",(req,res)=>(res.send({"name":"蒲小帅"})));
app.get("/form",(req,res)=>{
   
  res.send(req.query)
});
app.post("/form",(req,res)=>{
  console.log(res);
  
  res.send(res)
});
app.post("/json",(req,res)=>{
    res.send(req.body)
  });

app.listen(port,()=>console.log("监听中1"));


