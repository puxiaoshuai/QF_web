import React, { useState ,useEffect,createContext} from 'react'
import Son from './son'
//创建一个共享器
export  const CountContent=createContext()
function Example(param) {
    // 数组解构  ,addCount  名字随便取的
    //多状态声明
    const [count, addCount] = useState(10)
    const [age, setAge] = useState("18岁")
    //useState不能存在if中
    //一个函数代表了componentDidMount，componentDidUpdate两个生命周期
    useEffect(() => {
        console.log("useEffect",count);
        return ()=>{
            //这是解绑操作，相当于  componentWillUnmount
            console.log("老弟你走了");
        }
    },[])
    //当传空数组[]时，就是当组件将被销毁时才进行解绑，这也就实现了componentWillUnmount的生命周期函数。
    //上面的数值的意思是，[count]，表示检查到count更新的时候，就会执行，[]数组是
    return (
        <div>
            <p>现在的数值 ：{count}</p>
            <p>{age}</p>
            <button onClick={() => {
                addCount((count)=>count+1)
            }}>点击我</button>
            <CountContent.Provider value={count}>
            <Son/>
            </CountContent.Provider>
        </div>
    )
}
export default Example



