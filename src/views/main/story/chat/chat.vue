<template>
  <div class="chat">
    <hy-editor v-model:value="htmlString" />
    <div class="elbDiv"><el-button>点击提交</el-button></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HyEditor from '@/base-ui/editor'
export default defineComponent({
  components: {
    HyEditor
  },

  setup() {
    const htmlString = ref<string>('请输入你的故事')
    return {
      htmlString
    }
  }
})
</script>

<style lang="less" scoped>
.chat {
  padding-top: 30px;
}
.elbDiv {
  width: 100%;
  display: flex;
  justify-content: left;
}
.el-button {
  background: rgb(103, 174, 207);
}
</style>
