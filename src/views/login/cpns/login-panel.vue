<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <!-- stretch自动撑开 ,内容平分-->
    <el-tabs type="border-card" class="demo-tabs" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <!-- 插槽 -->
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><UserFilled /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <!-- 绑定上 -->
        <login-account ref="accountRef" />
      </el-tab-pane>

      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>

    <div class="accunt-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-button" @click="handleLoginClick"
      >立即登录</el-button
    >
    <login-tips></login-tips>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'
import LoginTips from '@/components/tips'
export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone,
    LoginTips
  },
  setup() {
    //1.定义属性
    //默认为记住密码
    const isKeepPassword = ref(true)
    //LoginAccount 导出的是对象
    //InstanceType <>  拿到的是实例的类型
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()

    const currentTab = ref<string>('account')

    //定义方法
    const handleLoginClick = () => {
      if (currentTab.value === 'account') {
        //账号登录
        // console.log('立即登录')
        //可以拿到组件对象,要去执行这个函数
        //?.value没有值,就不执行函数
        accountRef.value?.loginAction(isKeepPassword.value)
      } else {
        //手机登录
        console.log('phoneRef调用loginAction')
      }
    }
    return {
      isKeepPassword,
      accountRef,
      currentTab,
      phoneRef,
      handleLoginClick
    }
  }
})
</script>

<style lang="less" scoped>
.login-panel {
  margin-bottom: 120px;
  width: 320px;
  .title {
    text-align: center;
  }
}
.accunt-control {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
.login-button {
  width: 100%;
  margin-top: 10px;
}
.login-tips {
}
</style>
