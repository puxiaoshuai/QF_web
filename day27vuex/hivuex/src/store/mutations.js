export default{
    add1(state) {
        state.message++
        },
        del1(state){
          state.message--
        },
        //异步这样调用也没错，但是dev工具识别不了，不好调试
        name_up(state,p){
          console.log("数据",p);
          setTimeout(()=>{
            state.student.name="3s后-春风亭老巢"+"年龄"+p.age
          },3000)
        }
}