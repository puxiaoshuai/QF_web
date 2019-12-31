import Link from 'next/link'
// 注意这里分{  }  （）  ,
export default ()=>(
    <div>
        <h3>我是第B个界面</h3>
        <Link href="/"><a>返回首页</a></Link>
    </div>
)