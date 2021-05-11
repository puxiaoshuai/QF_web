import React, { useReducer, useState } from "react";
const Init = {
  loading: 1,
};
type Loadtyppe = {
  loading: number;
};

function CountReducer(state: Loadtyppe, action: string) {
  switch (action) {
    case "setF":
      return { loading: 2 };
    case "setT":
      return { loading: 3 };
  }
  return state;
}

export default function ExampleReducer() {
  const [countInfo, dispatch] = useReducer(CountReducer, Init);
  console.log("这句话", countInfo.loading);

  return (
    <div>
      <hr />
      <h1>zhi{countInfo.loading}</h1>
      <button
        className={"bg-blue-500 w-36 h-9 border-yellow-300"}
        onClick={() => dispatch("setF")}
      >
        Add IP
      </button>
      <button onClick={() => dispatch("setT")}>Add PV</button>
      <Son num={countInfo.loading} />
    </div>
  );
}
interface Ipre {
  num: number;
}
const Son: React.FC<Ipre> = (props) => {
  const { num } = props;
  // const [countInfo, dispatch] = useReducer(CountReducer, Init);
  const [state, setState] = useState(props.num);
  return (
    <div>
      数据{state}==={num}
    </div>
  );
};
