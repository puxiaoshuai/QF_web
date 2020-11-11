# pos

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```


#####创建的项目没有build，config文件夹？vue3. 创建 vue.config.js
https://blog.csdn.net/qq_39846820/article/details/103688780,
```
module.exports = {
    // cli3 代理是从指定的target后面开始匹配的，不是任意位置；配置pathRewrite可以做替换
    devServer: {
      proxy: {
        '/mock': {
          target: 'https://www.easy-mock.com',
          changeOrigin: true,
          pathRewrite: { }
        }
      }
    }
  }
  ```
  使用 /mock/xxxxxxxxxx
