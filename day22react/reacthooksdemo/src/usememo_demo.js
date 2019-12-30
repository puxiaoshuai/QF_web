import React, { useState } from "react";
function Example() {
  const [xiaohong, setXiaohong] = useState("小红");
  const [zhiling, setZhiling] = useState("志林在");
  return (
    <div>
      <button
        onClick={() => {
          setXiaohong(new Date().getTime());
        }}
      >
        小红
      </button>
      <button
        onClick={() => {
          setZhiling(new Date().getTime()+"向我们走来");
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
function Son({name,child}){

}
