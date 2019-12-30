import React, { useState ,useEffect} from 'react'

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
    //上面的数值的意思是，[count]，表示检查到count更新的时候，就会执行，[]数组是
    return (
        <div>
            <p>现在的数值 ：{count}</p>
            <p>{age}</p>
            <button onClick={() => {
                addCount(count + 1)
            }}>点击我</button>
        </div>
    )
}
export default Example



