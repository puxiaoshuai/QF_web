const fs= require("fs")
fs.readFile('./a.js','utf-8',(err,data)=>{
  console.log(data);
})