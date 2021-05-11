import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Hello from "./componts/Hello";
import { Logo } from "./componts/Logo";
import Counter from "./componts/Couter";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store/storedata";
import { actions } from "./store/counterSlice";
function App() {
  const num = useSelector((store: RootState) => store.one.num);
  const dispatch = useDispatch();
  useEffect(() => {});
  return (
    <div className="App">
      <Hello name="蒲小帅  " num={2323} />
      <Logo
        logo="https://img1.baidu.com/it/u=2823686447,1646334873&fm=26&fmt=auto&gp=0.jpg"
        className="active"
        alt="图片"
      />
      <Counter />
      <br></br>
      <hr />
      <p>数据是{num}</p>
      <button
        onClick={() => {
          dispatch(actions.add());
        }}
      >
        ++++1
      </button>
    </div>
  );
}

export default App;
