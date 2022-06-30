<template>
  <div class="base-echart">
    <div ref="echartDivRef" :style="{ width: props, height: height }"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineProps, withDefaults, watchEffect } from 'vue'
import { EChartsOption } from 'echarts'
import userEchart from '../hooks/userEchart'
//定义props类型
const props = withDefaults(
  defineProps<{
    options: EChartsOption
    width?: string
    height?: string
  }>(),
  { width: '100%', height: '360px' }
)
//获取到html元素
const echartDivRef = ref<HTMLElement>()

onMounted(() => {
  //还没有绑定上去,为undefined,绑定到生命周期上
  const { setOptons } = userEchart(echartDivRef.value!)

  watchEffect(() => {
    setOptons(props.options)
  })
})
</script>

<style scoped></style>
