import { ADD_ITEM, CHANG_INPUT, DEL, DONE } from "./actionType"

//这是图书管理系统，有数据
const defauState={
    inputValue:"",
    list:[{"done":false,'title':"'明天大扫除'"}]
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
             let data={"done":false,'title':newState.inputValue}
            newState.list.push(data)
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
    else if(action.type===DONE)
    {
        let newState=state
        let index =action.index
        let item=newState.list[index]
        item.done=true
        return newState
    }
    
     return state
}