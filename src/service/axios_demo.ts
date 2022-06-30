import axios from 'axios'
//axios的实例对象

//普通的请求
// axios.request({
//   url
// })

//get请求并传入参数
// axios
//   .get('http://httpbin.org/get', {
//     params: {
//       name: 'coderwhy',
//       age: 18
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

//发送post请求
// axios
//   .post('http://httpbin.org/post', {
//     data: {
//       name: 'coderwhy',
//       age: 18
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

//Promise本身是可以有类型的
// new Promise<string>((resolve) => {
//   resolve('11')
// }).then((res) => {
//   //unknown
//   console.log(res) //string
// })

//axios的配置选项
//全局配置
axios.defaults.baseURL = 'http://httpbin.org'
// axios.defaults.timeout = 50000
// axios.defaults.headers = {}

// axios
//   .get('/get', {
//     params: {
//       name: 'coderwhy',
//       age: 18
//     },
//     //每一个请求单独的配置
//     timeout: 5000,
//     headers: {}
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

// axios
//   .post('/post', {
//     data: {
//       name: 'coderwhy',
//       age: 18
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

//axios.all ->多个请求,一起返回

// axios
//   .all([
//     axios.get('/get', { params: { name: 'why', age: 18 } }),
//     axios.post('/post', { data: { name: 'why', age: 18 } })
//   ])
//   .then((res) => {
//     //真实服务器返回的数据都是在data中的
//     console.log(res[0].data)
//     console.log(res[1].data)
//   })

axios.interceptors.request.use(
  (config) => {
    //想做一些事情
    //1.给请求添加token
    return config
  },
  (err) => {
    console.log('请求发送错误')
    return err
  }
)
//数据响应成功--服务器正常的返回了数据
axios.interceptors.response.use(
  (res) => {
    console.log('响应成功的拦截')
    return res
  },
  (err) => {
    console.log('服务器响应错误')

    return err
  }
)
