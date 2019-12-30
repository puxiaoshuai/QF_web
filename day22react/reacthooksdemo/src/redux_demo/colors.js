import React, { createContext,useReducer } from 'react'
//创建颜色共享
export const ColorContent=createContext({})
//export default 这样是默认暴露出去  不用 加{Color},下面的需要加{}
export const Color =props=>{
    const [color,dispatch]=useReducer(reducer,"blue")
    return (
        <ColorContent.Provider value={{color,dispatch}}>
            {props.children}
        </ColorContent.Provider>
    )
}
export const UPDATE_COLOR="UPDATE_COLOR"
const reducer=(state,action)=>{

  switch (action.type){
      case UPDATE_COLOR:
          return action.color
      default:
         return state
  }
}
