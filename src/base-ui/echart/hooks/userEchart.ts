import * as echarts from 'echarts'

//不识别,到shime里面的declare
import ChinaMapData from '../data/china.json'
//注册中国地图
echarts.registerMap('china', ChinaMapData)

export default function (el: HTMLElement) {
  const echartInstance = echarts.init(el)

  const setOptons = (options: echarts.EChartsOption) => {
    echartInstance.setOption(options)
  }

  const updateSize = () => {
    echartInstance.resize()
  }

  window.addEventListener('resize', () => {
    echartInstance.resize()
  })

  //细节补充,这里用的是对象,解构可以单独抽出来一个
  //如果是数组,要一一对应
  return {
    echartInstance,
    setOptons,
    updateSize
  }
}
