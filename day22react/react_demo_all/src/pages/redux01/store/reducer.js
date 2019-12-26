import { ADD_ITEM, CHANG_INPUT, DEL } from "./actionType"

//这是图书管理系统，有数据
const defauState={
    inputValue:"",
    list:['明天大扫除']
}
export default (state=defauState,action)=>{

    //重要：reducer里只能接收state，不能改变state
    if(action.type===CHANG_INPUT){
          let newState=state
          newState.inputValue=action.value
          return newState
    }
    else if(action.type===ADD_ITEM)
    {
         let newState=state
         if(newState.inputValue===undefined||newState.inputValue.trim()===""){
          alert("未输入内容")
         }else{
            newState.list.push(newState.inputValue)
         }
        
         newState.inputValue=""
         console.log(newState);
          return newState
         
    }else if(action.type===DEL)
    {
        let newState=state
        let index =action.index
        newState.list.splice(index,1)
        return newState
    }
    
     return state
}