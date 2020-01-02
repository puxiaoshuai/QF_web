
module.exports = app => {
  const { router, controller } = app;
 //控制器下的controller下的front目录下的home文件，方法叫index
  router.get('/front/home', controller.front.home.index);
  router.get('/front/getArticleList', controller.front.home.getArticleList);
  router.get('/front/getArticleById/:id', controller.front.home.getArticleById);
};
