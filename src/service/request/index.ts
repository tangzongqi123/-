import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { HYRequestInterceptors, HYRequestConfig } from './type'
import { ElLoading } from 'element-plus'
import 'element-plus/theme-chalk/el-loading.css'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'

//控制的是loading组件显示还是不显示
const DEFAULT_LOADING = true

//创建的是一个类,具有更强的封装性
class HYRequest {
  //不是随便编写的,用的第三方库的类型
  //为了能够注册其他的属性,自己创建然后继承 HYRequestConfig
  //axios的实例
  instance: AxiosInstance

  //扩展,自定义的interceptors
  //拦截器
  interceptors?: HYRequestInterceptors
  showLoading: boolean
  loading?: LoadingInstance
  //创建出来的是不同的实例,避免出现干扰
  //HYRequestConfig 主要是为了可以创建interceptors
  constructor(config: HYRequestConfig) {
    //创建axios实例
    this.instance = axios.create(config)
    //保存基本信息
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
    this.interceptors = config.interceptors

    //使用拦截器
    //从config中取出的拦截器是对应的实例的拦截器
    //请求拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestinterceptor,
      this.interceptors?.requestinterceptorCatch
    )
    //响应拦截器
    this.instance.interceptors.response.use(
      this.interceptors?.responsetinterceptor,
      this.interceptors?.responsetinterceptorCatch
    )

    //添加所有的实例都有的拦截器
    //自动执行内部的函数
    this.instance.interceptors.request.use(
      //会打印
      (config) => {
        //会动画显示组件
        if (this.showLoading) {
          // this.loading = ElLoading.service({ fullscreen: true })
          this.loading = ElLoading.service({
            //组件
            lock: true,
            //加载显示的文本
            text: '正在请求数据...',
            //背景颜色
            background: 'rgba(0,0,0,0.5)'
          })
        }
        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        //将loading移除
        setTimeout(() => {
          this.loading?.close()
        }, 1000)

        return res.data
      },
      (err) => {
        //例子:判断不同的HttpErrorCode显示不同的错误信息
        // if (err.response.status === 404) {
        //   console.log('404错误')
        // }
        this.loading?.close()
        return err
      }
    )
  }
  //Promise拿到的结果是什么类型
  //给一个泛型,由请求者决定
  request<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      //1.单个请求对请求config的处理
      if (config.interceptors?.requestinterceptor) {
        config = config.interceptors.requestinterceptor(config)
      }
      //2.判断是否显示loading
      //为了在main.js中设置showLoading: true/false
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }

      this.instance
        //解决类型不匹配的问题
        .request<any, T>(config)
        //此时res的类型为T了
        .then((res) => {
          //1.单个请求对数据的处理
          if (config.interceptors?.responsetinterceptor) {
            //这里又会出现问题
            res = config.interceptors.responsetinterceptor(res)
          }
          // console.log(res)
          //2.设置回来true,不影响下一次数据请求
          this.showLoading = DEFAULT_LOADING

          //3,将结果通过reslove返回出去
          //res问题:AxiosResponse<any>和<T>类型不匹配
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = DEFAULT_LOADING
          reject(err)
          return err
        })
    })
  }

  //封装其他请求
  get<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

// axios.defaults.baseURL = ''
export default HYRequest
