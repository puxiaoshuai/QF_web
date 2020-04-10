let ipUrl="http://127.0.0.1:8000/"
// let servicePath={
//     getArticleList:ipUrl+'getArticleList' ,  //  首页文章列表接口
//     getArticleById:ipUrl + 'getArticleById/',  // 文章详细页内容接口 ,需要接收参数
//     getTypeInfo:ipUrl+"getTypeInfo",//获取文章分类
//     getListById:ipUrl+"getListById/"
// }
let servicePath={
    getArticleList:ipUrl+"blog" ,  //  首页文章列表接口
    //getArticleById:ipUrl + 'getArticleById/',  // 文章详细页内容接口 ,需要接收参数
    getTypeInfo:ipUrl+"getTypeInfo/",//获取文章分类
    getListById:ipUrl+"getListById/?id="
}
export default servicePath