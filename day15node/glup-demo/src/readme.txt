1.引入  ico <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
转化网站  比特虫
2.网站优化的三大标签，seo搜索引擎优化
title: 网站名+网站描述 
eg:品优购-综合网购首选-正品低价丶品质保障丶配送及时丶轻松购物
description
eg:品优购JD.COM-专业的综合网上购物商城,销售家电、数码通讯、电脑、家居百货、服装服饰、母婴、图书、食品等数万个品牌优质商品.便捷、诚信的服务，为您提供愉悦的网上购物体验!
keywords :
eg:网上购物,网上商城,手机,笔记本,电脑,MP3,CD,VCD,DV,相机,数码,配件,手表,存储卡,品优购
3 小图标
UI给图，上传到icomoon ,或者阿里的，下载兼容字体包，使用
1导入  下载的fonts，复制  ，导入 
 @font-face {
            font-family: 'icomoon';
            src: url('fonts/icomoon.eot?hfhyhj');
            src: url('fonts/icomoon.eot?hfhyhj#iefix') format('embedded-opentype'),
                url('fonts/icomoon.ttf?hfhyhj') format('truetype'),
                url('fonts/icomoon.woff?hfhyhj') format('woff'),
                url('fonts/icomoon.svg?hfhyhj#icomoon') format('svg');
            font-weight: normal;
            font-style: normal;
            font-display: block;
        }
        注意路径

追加icon，selection.json,导入到网站上，进行继续添加

logo的优化
* logo  里面 首先放一个 h1 标签 ，目的是为了提权，告诉搜索引擎，这个地方很重要
* h1里面在放一个连接，可以返回首页的，   给连接一个 大小 和  logo 的背景图片
* 连接 里面要放文字（网站名称），为了搜索引擎收录我们。  但是文字不要显示出来
  *  要用 text-indent  移到盒子外面 （text-indent: -9999px)   然后overflow:hidden  淘宝的做法
  * 直接给font-size: 0;  就看不到文字了，  京东的做法。
*  最后给 连接一个 title  这样鼠标放到logo 上，  就可以看到提示文字了



