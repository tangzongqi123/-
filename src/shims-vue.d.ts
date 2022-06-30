/* eslint-disable */
//对.vue文件做了声明
declare module '*.vue' {
  //定义一个组件类型
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  //导出的是组件的实例类型
  export default component
}

declare let $store: any
declare module '*.json'
