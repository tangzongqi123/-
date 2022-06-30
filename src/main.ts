import { createApp } from 'vue'
import { globalRegister } from './global'
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//css重置样式--第三方库
import 'normalize.css'
//导入正式编写代码文件
import './assets/css/index.css'
// import './service/axios_demo'
// import hyRequest from './service'

//全局引用
import ElementPlus from 'element-plus'
//2种导入都可以
import 'element-plus/theme-chalk/index.css'
// import 'element-plus/dist/index.css'

import App from './App.vue'

import router from './router'
import store from './store'
import { setupStore } from './store'
const app = createApp(App)
// app.component(ElButton.name, ElButton)

//注册element-plus
// registerApp(app)
app.use(ElementPlus)
app.use(globalRegister) //更优雅
app.use(store)
//只要重新运行代码,就会调用setupStore
//先注册,再匹配
setupStore()
//path:/user =>user
app.use(router)

app.mount('#app')

// console.log(process.env.VUE_APP_BASE_NAME) //kobe
// console.log(process.env.VUE_APP_BASE_URL) //http://coderwhy.org/dev

// hyRequest.request({
//   url: '/get',
//   method: 'GET',
//   interceptors: {
//     requestinterceptor: (config) => {
//       console.log('单独请求的config')
//       return config
//     },
//     responsetinterceptor: (res) => {
//       console.log('单独响应的res')
//       return res
//     }
//   }
// })

// interface DataType {
//   url: any
// }

// hyRequest
//   .get<DataType>({
//     url: '/get',
//     // method: 'GET',//内部已经设置了
//     showLoading: false
//   })
//res类型:DataType
// .then((res) => {
//   console.log(res.url) //http://httpbin.org/get
// })
//问题:没有拿到真实的结果
//将这个接口传到了泛型里面,对应的pormise也是这个泛型
//最终拿到的类型就是定义的这个接口类型了
// hyRequest.get()
