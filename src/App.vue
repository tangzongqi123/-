<template>
  <div class="app">
    <!-- 英语变中文,如分页和日历 -->
    <el-config-provider :locale="zhCn">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
// import { ElButton } from 'element-plus'
// import 'element-plus/theme-chalk/base.css'
// import 'element-plus/theme-chalk/el-button.css'

//defineComponent()作用:
//对js代码无意义
/**
 * function foo(obj){
 * return obj
 * }
 */
//意义在于ts
//函数里面有很多泛型,会对进行类型推导,能写什么会给提示,写错了也会提示
//更加严谨
export default defineComponent({
  name: 'App',
  components: {
    // ElButton
  },

  setup() {
    const add = () => {
      console.log('11')
    }
    return {
      add,
      zhCn
    }
  }
})
</script>

<style lang="less">
.app {
  height: 100%;
}
</style>
