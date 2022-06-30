import type { AxiosRequestConfig, AxiosResponse } from 'axios'
//最好给一个默认值,不然下面使用的时候每次都传<T>
export interface HYRequestInterceptors<T = AxiosResponse> {
  requestinterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestinterceptorCatch?: (error: any) => any
  responsetinterceptor?: (res: T) => T
  responsetinterceptorCatch?: (error: any) => any
}

export interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HYRequestInterceptors<T>
  showLoading?: boolean
}
