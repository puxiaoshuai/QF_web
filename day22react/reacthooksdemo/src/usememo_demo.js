import React, { useState ,useMemo} from "react";

// memo使用解决   shouldCompnentUpdate生命周期，解决性能优化的问题的，

function Example() {
  const [xiaohong, setXiaohong] = useState("小红");
  const [zhiling, setZhiling] = useState("我是小志林");
  return (
    <div>
      <button
        onClick={() => {
          setXiaohong(new Date().getTime()+"小红");
        }}
      >
        小红
      </button>
      <button
        onClick={() => {
          setZhiling(new Date().getTime()+"志林");
        }}
      >
        志林
      </button>
      <Son name={xiaohong}> 
          {zhiling}
      </Son>

    </div>
  );
}
function Son({name,children}){
     function changXiaohong(name){
       console.log("他来了，小红来了");
       return name+",小红走来来了来"
     }
    // const actionXiaohong=changXiaohong(name)
     //满足小红的名字匹配的时候才执行，
      const actionXiaohong=useMemo(()=>changXiaohong(name),[name])
     return (
       <div>
         <div>{actionXiaohong}</div>
     <div>{children}</div>
       </div>
     )
}

//use_callback  自定义hooks
export default Example
