module.exports = {
  devServer: {
    proxy: {
      '/file': {// 一级路由
        target: 'http://localhost:8000', // 路由地址
        ws: true, // 必须要写的
        changeOrigin: false// 必须要写的
      },
      '/users': {
        target: 'http://localhost:8000',
        ws: true,
        changeOrigin: false
      },
      '/indexs': {
        target: 'http://localhost:8000',
        ws: true,
        changeOrigin: false
      },
      '/duihuan': {
        target: 'http://localhost:8000',
        ws: true,
        changeOrigin: false
      },
      '/goods': {
        target: 'http://localhost:8000',
        ws: true,
        changeOrigin: false
      },
      '/gmbuy': {
        target: 'http://localhost:8000',
        ws: true,
        changeOrigin: false
      }
    }
  }
}
