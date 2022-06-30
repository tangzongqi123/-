<template>
  <div class="login-account">
    <!-- 把rules传入过来 -->
    <!--组件拿到 :model="account" 对应的值,进行匹配-->
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <!-- label=""标签文本 -->
      <!-- prop="name" 来区别rules对应的是哪个 -->
      <el-form-item label="账号" prop="name">
        <!-- 默认已经实现了双向绑定 -->
        <el-input v-model="account.name" />
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <!-- show-password 密码隐藏 -->
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { rules } from '../config/account-config'
import { ElForm } from 'element-plus'
import localCache from '@/utils/cache'
export default defineComponent({
  setup() {
    const store = useStore()
    //默认本地存储,如果没有就为空
    const account = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    })

    const formRef = ref<InstanceType<typeof ElForm>>()
    const loginAction = (isKeepPassword: boolean) => {
      //对登录进行验证 validate
      //会传入一个回调函数
      formRef.value?.validate((valid) => {
        if (valid) {
          //1.判断是否需要记住密码
          if (isKeepPassword) {
            //本地缓存
            localCache.setCache('name', account.name)
            localCache.setCache('password', account.password)
          } else {
            //如果不是记住密码,就需要把本次输入的密码删除
            localCache.deleteCache('name')
            localCache.deleteCache('password')
          }
          //2.开始进行登录验证
          //参数1.执行对应的函数   参数2:传入参数
          store.dispatch('login/accountLoginAction', { ...account })
        }
      })
    }

    return {
      account,
      //依然要rules也要导出
      rules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped></style>
