const { defineConfig } = require('@vue/cli-service')
// const path = require('path')
// const AutoImport = require('unplugin-auto-import/webpack')
// const Components = require('unplugin-vue-components/webpack')
// const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: './build',
  //解决跨域问题
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  //配置方式二: 和webpack属性完全一致，最后会进行合并
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
      }
    }
    // plugins: [
    //   AutoImport({
    //     resolvers: [ElementPlusResolver()]
    //   }),
    //   Components({
    //     resolvers: [ElementPlusResolver()]
    //   })
    // ]
  }
  //打包的文件在本地index.html可以打开
  // publicPath: './', //部署到服务器的时候需要关掉

  //配置方式一：cli提供的属性

  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     components: '@/components'
  //   }
  // }
  //配置方式三
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', path.resolve(__dirname, 'src'))
  //     .set('components', '@/components')
  // }
})
