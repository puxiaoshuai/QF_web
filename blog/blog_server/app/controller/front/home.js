/* eslint-disable strict */
const Controller = require('egg').Controller;
// class HomeController extends Controller{
//     async index (){
//         //连接数据库的演示
//         let result=await this.app.mysql.get("auth_user")
//         this.ctx.body=result
//     }
// }
class HomeController extends Controller {
    async index() {
        //连接数据库的演示

        this.ctx.body = "你好"
    }
    async getArticleList() {

        let sql = 'SELECT article.id as id,' +
            'article.title as title,' +
            'article.introduce as introduce,' +
            //主要代码----------start
            "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s' ) as addTime," +
            //主要代码----------end
            'article.view_count as view_count ,' +
            '.type.typeName as typeName ' +
            'FROM article LEFT JOIN type ON article.type_id = type.Id'

        const results = await this.app.mysql.query(sql)

        this.ctx.body = {
            data: results
        }
    }
    async getArticleById() {
        //先配置路由的动态传值，然后再接收值
        let id = this.ctx.params.id

        let sql = 'SELECT article.id as id,' +
            'article.title as title,' +
            'article.introduce as introduce,' +
            'article.content as content,' +
            "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s' ) as addTime," +
            'article.view_count as view_count ,' +
            'type.typeName as typeName ,' +
            'type.id as typeId ' +
            'FROM article LEFT JOIN type ON article.type_id = type.Id ' +
            'WHERE article.id=' + id



        const result = await this.app.mysql.query(sql)


        this.ctx.body = { data: result }

    }
    async getTypeInfo() {
        const result = await this.app.mysql.select("type")
        this.ctx.body = { data: result }
    }
    //根据类别ID获得文章列表
    async getListById() {
        let id = this.ctx.params.id
        let sql = 'SELECT article.id as id,' +
            'article.title as title,' +
            'article.introduce as introduce,' +
            "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s' ) as addTime," +
            'article.view_count as view_count ,' +
            'type.typeName as typeName ' +
            'FROM article LEFT JOIN type ON article.type_id = type.Id ' +
            'WHERE type_id=' + id
        const result = await this.app.mysql.query(sql)
        this.ctx.body = { data: result }

    }
}
module.exports = HomeController;