export default{
    state:{
        school:"school is moduleA"
      },
      mutations:{
        modifyschool(state,p){
          console.log(p);
            state.school="你好，修改的名字"+p.name
        }
      },
      actions:{
        mofi(com,p){
          console.log(com);
          setTimeout(()=>{
            com.commit("modifyschool",p)
          },1000)
         
        }
      },
      getters:{
    
      }
}