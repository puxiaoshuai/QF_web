import Link from 'next/link'
import {withRouter} from 'next/router'
import axios from 'axios'
const Pagea= ({router,data})=>{
    console.log("返回",data);
    
    return(
    <>
         <div>
        <h3>欢迎</h3>
         <h3> {router.query.name}</h3>
         <p>获取到的数据，{data.hits[0].title}</p>
        <Link href="/"><a>返回首页</a></Link>
    </div>
    </>
    )
}
// Pagea.getInitialProps  =async()=>{
//     const promise= new Promise((resolve, reject) => {
//       axios.get("http://gank.io/api/search/query/listview/category/IOS/count/10/page/1",{
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
//           "Access-Control-Allow-Origin": "*",
//         }
//       }).then((res)=>{
//         console.log("数据",res);
       
        
//       })
//     })
//     return await promise
    
//   }
// Pagea.getInitialProps = async ()=>{
//     const promise =new Promise((resolve)=>{
//             axios('http://gank.io/api/search/query/listview/category/IOS/count/10/page/1').then(
//                 (res)=>{
//                     console.log('远程数据结果：',res)
//                     resolve(res.data.data)
//                 }
//             )
//     })
//     return await promise
// }
Pagea.getInitialProps = async() => {
    const res = await axios.get('https://hn.algolia.com/api/v1/search?query=redux')
    console.log("数据",res.data);
    
    return { data: res.data }
  }

export default withRouter(Pagea)