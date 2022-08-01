import React, { Component } from 'react'
const Child = memo((props) => {
  console.log('我是一个子组件');
  return (
      <button onClick={props.handleClick}>改变父组件中的年龄</button>
  )
})

const Father = () => {
  console.log('我是一个父组件')
  const [age, setAge] = useState(0);
  return (<div>
          <span>`目前的count值为${age}`<span>
          <Child handleClick={() => setAge(age + 1)}/>
      </div>
      
  )
}
