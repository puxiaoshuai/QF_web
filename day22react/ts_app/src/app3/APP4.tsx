import React, { useCallback, useState, useEffect } from "react";
import ReactDOM from "react-dom";
let lastAddClick: Function;
let lastChangeName: Function;
class Counter1 extends React.Component {
  state = { number: 0 };
  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button
          onClick={() => this.setState({ number: this.state.number + 1 })}
        >
          +
        </button>
        <Counter6 num={this.state.number} />
      </div>
    );
  }
}

interface Ipreops {
  num: number;
}
const Counter6: React.FC<Ipreops> = (props) => {
  let [number, setNumber] = useState(0);
  let [name, setName] = useState("zhufeng");
  let { num } = props;
  //会在每次渲染的时候都 会生成一个新的函数
  //只有在依赖的变量发生变化的时候才会重新生成
  const addClick = useCallback(() => setNumber(number + 1), [number]);
  console.log("点击", lastAddClick === addClick);
  lastAddClick = addClick;
  const changeName = useCallback(() => setName(Date.now() + ""), []);
  console.log("name函数", lastChangeName === changeName);
  lastChangeName = changeName;
  return (
    <div>
      <p>
        {name}:{number}
      </p>
      <h1>{num}</h1>
      <button onClick={addClick}>addClick</button>
      <button onClick={changeName}>changeName</button>
    </div>
  );
};
export default Counter1;
