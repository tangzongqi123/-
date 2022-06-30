<template>
  <div class="page-search">
    <!-- 传入 formItems -->
    <!-- <hy-form v-bind="searchFormConfig" :formData="formData" /> -->
    <hy-form v-bind="searchFormConfig" v-model="formData">
      <template #header> <h1 class="header">高级检索</h1> </template>
      <template #footer>
        <div class="hanle-btns">
          <el-button @click="handleResetClick">
            <el-icon><RefreshRight />重置</el-icon>
          </el-button>
          <el-button type="primary" @click="handleQueryClick">
            <el-icon><Search /></el-icon>搜索</el-button
          >
        </div>
      </template>
    </hy-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HyForm from '@/base-ui/form'
export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: { HyForm },
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    //双向绑定的属性应该是由配置文件的field来决定
    //优化一:formData中的属性应该动态来决定
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    // const formData = ref({
    //   id: '',
    //   name: '',
    //   password: '',
    //   createTime: ''
    // })
    const formData = ref(formOriginData)
    // console.log(formData.value)

    //优化二:当用户点击了重置
    const handleResetClick = () => {
      //将value设置成原始的值
      // for (const key in formOriginData) {
      //   //引用对象
      //   //因为formData是浅拷贝,修改属性会影响值
      //   formData.value[`${key}`] = formOriginData[key]
      // }
      //直接赋值,影响不到formData内部的东西
      // formData.value = formOriginData
      //-----------------
      formData.value = formOriginData
      emit('resetBtnClick')
    }

    //3.优化三 :当用户点击搜索
    const handleQueryClick = () => {
      emit('queryBtnClick', formData.value)
      // console.log(formData.value)
    }
    return {
      formData,
      handleResetClick,
      handleQueryClick
    }
  }
})
</script>

<style scoped>
.header {
  color: red;
}
.hanle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
