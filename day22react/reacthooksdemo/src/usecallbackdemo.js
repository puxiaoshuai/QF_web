import React, { useCallback, useState } from 'react'
// Usecallbackdemo必须大写
export default function Usecallbackdemo(props) {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState("");
    const addValue = useCallback(() => {
        let sum = 0;
        for (let i = 0; i < count; i++) {
            sum += i;
        }
        return sum;
    }, [count]);
    return (
        <div>
            <p>{count}</p>
            <p>{value}</p>
            <button onClick={() => setCount(count + 1)}>点击+1</button>
            <input onChange={(e) => {
                setValue(e.target.value)
            }} value={value} />
            <Son addClick={addValue}></Son>
        </div>
    )
}
class Son extends React.Component {
    render() {
        console.log("孩子重新渲染");
        const { addClick } = this.props;
        return (
            <div>
                <p>child</p>
                <button onClick={() => console.log(addClick())}>
                    孩子
                 </button>
            </div>
        )
    }
}
