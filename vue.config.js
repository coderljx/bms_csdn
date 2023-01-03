const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // proxy: {
  //   '/userApi': {
  //     target: 'http://localhost:9001/userService/api',  // 后台接口地址
  //     ws: true,        //如果要代理 websockets，配置这个参数
  //     secure: false,  // 如果是https接口，需要配置这个参数
  //     changeOrigin: true,  //是否跨域
  //     pathRewrite:{    // 重写路径
  //       '^/userApi':''
  //     }
  //   },
  //
  //   '/api': {
  //     target: 'http://localhost:8080',  // 后台接口地址
  //     ws: true,        //如果要代理 websockets，配置这个参数
  //     secure: false,  // 如果是https接口，需要配置这个参数
  //     changeOrigin: true,  //是否跨域
  //     pathRewrite:{    // 重写路径
  //       '^/api':''
  //     }
  //   },
  //
  //
  // }
})
