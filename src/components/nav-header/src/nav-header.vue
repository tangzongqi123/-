<template>
  <div class="nav-header">
    <template v-if="isFold">
      <el-icon class="fold-menu" @click="handleFoldClick"> <Fold /></el-icon>
    </template>

    <template v-else>
      <el-icon class="fold-menu" @click="handleFoldClick"> <Expand /></el-icon>
    </template>

    <div class="content">
      <hy-breadcrumb :breadcrumbs="breadcrumbs" />
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import UserInfo from './user-info.vue'
import HyBreadcrumb from '@/base-ui/breadcrumb/index'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'
import { pathMapBreadcrumbs } from '@/utils/map-menus'
export default defineComponent({
  components: { UserInfo, HyBreadcrumb },
  //组件通信
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      console.log(isFold.value)
      //发出事件,需要main组件监听
      emit('foldChange', isFold.value)
    }

    //面包屑的数据:[{name,path}]
    const store = useStore()

    // console.log(currentPath)

    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus

      const route = useRoute()
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })
    console.log(breadcrumbs)

    return { isFold, handleFoldClick, breadcrumbs }
  }
})
</script>

<style lang="less" scoped>
.nav-header {
  display: flex;
  width: 100%;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
