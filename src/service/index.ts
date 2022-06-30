//servicet统一出口
import HYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import loacalCache from '@/utils/cache'
//axios实例
const hyRequest = new HYRequest({
  // baseURL: '地址1'
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  //每个实例会有不同的拦截器
  interceptors: {
    //----------问题:config: any
    requestinterceptor: (config: any) => {
      //携带token的拦截
      const token = loacalCache.getCache('token')
      // console.log(token)

      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestinterceptorCatch: (err) => {
      return err
    },
    responsetinterceptor: (res) => {
      return res
    },
    responsetinterceptorCatch: (err) => {
      return err
    }
  }
})

//axios实例
// export const hyRequest2 = new HYRquest({
//   baseURL: '地址2'
// })
export default hyRequest
