# QF_web
学习记录
vscode 提交到git  在第三个图标下，输入内容 使用ctrl+enter 暂存带本地， 使用推送 ，到github上了。
#####
属性书写顺序
1. 布局定位属性：display / position / float / clear / visibility / overflow（建议 display 第一个写，毕竟关系到模式）
2. 自身属性：width / height / margin / padding / border / background
3. 文本属性：color / font / text-decoration / text-align / vertical-align / white- space / break-word
4. 其他属性（CSS3）：content / cursor / border-radius / box-shadow / text-shadow / background:linear-gradient …
#####布局流程
为了提高网页制作的效率，布局时通常有以下的布局流程，具体如下：
1、必须确定页面的版心（可视区）， 我们测量可得知。

2、分析页面中的行模块，以及每个行模块中的列模块。其实页面布局，就是一行行罗列而成

3、制作HTML结构。我们还是遵循，先有结构，后有样式的原则。结构永远最重要。

4、然后开始运用盒子模型的原理，通过DIV+CSS布局来控制网页的各个模块。
部分插件：
Js-css-html formatter 每次保存自动格式化
auto rename tag  自动重命名匹配
Css peel 追踪到样式

![image.png](https://upload-images.jianshu.io/upload_images/4908477-cb2f1ad5751a862e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
```
<style>
     /* 偶数 */
     ul li:nth-child(even) {
       background-color: aquamarine;
     }
   
     /* 奇数 */
     ul li:nth-child(odd) {
       background-color: blueviolet;
     }
   
     /*n 是公式，从 0 开始计算 */
     ul li:nth-child(n) {
       background-color: lightcoral;
     }
   
     /* 偶数 */
     ul li:nth-child(2n) {
       background-color: lightskyblue;
     }
   
     /* 奇数 */
     ul li:nth-child(2n + 1) {
       background-color: lightsalmon;
     }
   
     /* 选择第 0 5 10 15, 应该怎么选 */
     ul li:nth-child(5n) {
       background-color: orangered;
     }
   
     /* n + 5 就是从第5个开始往后选择 */
     ul li:nth-child(n + 5) {
       background-color: peru;
     }
   
     /* -n + 5 前五个 */
     ul li:nth-child(-n + 5) {
       background-color: tan;
     }
   </style>
   ```
   ![image.png](https://upload-images.jianshu.io/upload_images/4908477-414ce14dab605613.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#####移动端的一些插件
1.Swiper 轮播图  
2.zy.media.js 移动端视频插件
#####移动端常用开发框架
#####常见js库
jquery
Prototype
YUI
DOjo
Ext JS
移动端的zepto
#####jq常用插件库  http://www.jq22.com
#####jq常用插件库  http://www.htmleaf.com
瀑布流，懒加载 lazyload  全屏滚动 fullpage
===========node
nodemon  检查文件的修改，直接动态生效
nrm npm下载地址切换工具 npm 默认是下载国外的 npm install nrm -g 全局安装
nrm ls  查询可用列表
nrm user taobao  切换到到淘宝
gulp     gulp-cli 命令操作库 更多在day 15 2-1 gulp模块
mime  模块判断 mime.getType() 返回资源的类型
router 路由
serve-static 静态只有服务访问功能
密码加密 bcrypt  需要依赖 python  npm install -g node-gyp   npm install --global --production windows-build-tools
express-session 
<!-- 感觉nodejs就是前后端没分离啊 -->

![image.png](https://upload-images.jianshu.io/upload_images/4908477-9baa001c7f7a444c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
####koa web框架
ctx.cookies.set(
            'MyName','JSPang',{
                domain:'127.0.0.1', // 写cookie所在的域名
                path:'/index',       // 写cookie所在的路径
                maxAge:1000*60*60*24,   // cookie有效时长
                expires:new Date('2018-12-31'), // cookie失效时间
                httpOnly:false,  // 是否只用于http请求中获取
                overwrite:false  // 是否允许重写
            }
        );
        ctx.cookies.get()来获取
koa-views 中间件  ejs是个著名并强大的模板引擎
[![Bkk37V.png](https://s1.ax1x.com/2020/10/22/Bkk37V.png)](https://imgchr.com/i/Bkk37V)

