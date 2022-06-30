<template>
  <div>
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          :size="30"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        />
        <span>{{ name }}</span>
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="handleExitClick"
            ><el-icon><CircleCloseFilled /></el-icon>退出登录</el-dropdown-item
          >
          <el-dropdown-item divided>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import { useRouter } from 'vue-router'
import localCache from '@/utils/cache'
export default defineComponent({
  setup() {
    const store = useStore()
    const name = computed(() => store.state.login.userInfo.name)

    const router = useRouter()
    const handleExitClick = () => {
      localCache.deleteCache('token')
      router.push('/main') //如果发现没有token,自动跳转到登录页面
    }
    return {
      name,
      handleExitClick
    }
  }
})
</script>

<style lang="less" scoped>
.el-dropdown-link {
  display: flex;
  align-items: center;
  cursor: pointer;
  .el-avatar {
    margin-right: 15px;
  }
}
</style>
