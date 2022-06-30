<template>
  <div>
    <el-form label-width="70px" :rules="rules" :model="phone">
      <!-- label=""标签文本 -->
      <!-- prop="name" 来区别rules对应的是哪个 -->
      <el-form-item label="手机号" prop="num">
        <!-- 默认已经实现了双向绑定 -->
        <el-input v-model="phone.num" />
      </el-form-item>

      <el-form-item label="验证码" prop="code">
        <div class="get-code">
          <el-input v-model="phone.code" />
          <el-button type="primary" class="get-button">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { rules } from '../config/phone-code'
export default defineComponent({
  setup() {
    const phone = reactive({
      num: '',
      code: ''
    })
    return {
      phone,
      rules
    }
  }
})
</script>

<style scoped>
.get-code {
  display: flex;
}
.get-button {
  margin-left: 8px;
}
</style>
