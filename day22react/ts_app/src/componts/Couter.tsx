import React, { useState, useCallback } from "react";
let lastClick: any = null;
function Counter() {
  const [data, setData] = useState({ name: "蒲小帅", number: 27 });
  const [counter, setCounter] = useState(0);
  console.log("刷新");
  //函數會在每次渲染的时候都生成新的函数
  const addClick = useCallback(
    () => setData((pre) => ({ ...data, number: pre.number + 1 })),
    [data]
  );

  console.log("1", lastClick === addClick);
  lastClick = addClick;
  console.log("2", lastClick === addClick);

  return (
    <div>
      <p>
        数据:{data.name}/{data.number}
      </p>
      {/* <button onClick={()=>{
             setData(pre=>({...pre,number:pre.number+2}))
         }}>+2</button> */}
      <button
        // onClick={() => {
        //   setData((pre) => {
        //     return { ...pre, number: pre.number + 2 };
        //   });
        // }}
        onClick={addClick}
      >
        +2
      </button>
      <button
        onClick={() => {
          //刷新会执行一次就不刷新了
          setData(data);
        }}
      >
        +2
      </button>
      <h3>{counter}</h3>
      <button
        onClick={() => {
          setCounter((pre) => pre + 1);
        }}
      >
        +1
      </button>
    </div>
  );
}
export default Counter;
