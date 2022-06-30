import { App } from 'vue'

//导入封装好的时间格化式的函数
import { formatUtcString } from '@/utils/date-form'
export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    formatTime(value: string) {
      return formatUtcString(value)
    }
  }
}
