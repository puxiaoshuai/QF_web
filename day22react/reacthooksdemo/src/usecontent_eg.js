//useContext  父组件传值
import React, { useState ,createContext,useContext} from 'react'

//创建共享
const CountContet=createContext()

function CountSon(){
    let count=useContext(CountContet)
return <h3>{count}</h3>
}
function Example(param) {
    // 数组解构  ,addCount  名字随便取的
    //多状态声明
    const [count, addCount] = useState(10)
  
    return (
        <div>
            <p>现在的数值 ：{count}</p>
           
            <button onClick={() => {
                addCount(count + 1)
            }}>点击我</button>
            {/* 包裹 */}
            <CountContet.Provider value={count}>
                <CountSon/>
            </CountContet.Provider>
        </div>
    )
}
export default Example



