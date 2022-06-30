<template>
  <div>
    <el-button plain @click="openCenter">获取预设账号密码</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElMessage } from 'element-plus'
export default defineComponent({
  setup() {
    const openCenter = () => {
      ElMessage({
        showClose: true,
        message: '账号：coderwhy 密码：123456',
        center: true
      })
    }
    return { openCenter }
  }
})
</script>

<style scoped>
.el-button {
  margin-top: 10px;
  font-size: 12px;
  color: rgb(14, 15, 15);
}
</style>
