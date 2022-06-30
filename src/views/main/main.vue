<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isCollapse ? '60px' : '210px'">
        <!-- 导航组件 -->
        <!-- :collapse="isCollapse" 组件属性 会被传过去,用于控制折叠收缩 -->
        <nav-menu :collapse="isCollapse" />
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <!-- 头部组件 -->
          <nav-header @foldChange="handleFoldChange" />
        </el-header>
        <!-- 占位 -->
        <el-main class="page-content">
          <div class="page-info">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import NavMenu from '@/components/nav-menu/index'
import NavHeader from '@/components/nav-header/index'
export default defineComponent({
  components: {
    NavMenu,
    NavHeader
  },
  setup() {
    //需要记录小按钮传来的值
    const isCollapse = ref(false)
    const handleFoldChange = (isFold: boolean) => {
      //isFold:小按钮传来的值
      // console.log(isFold)
      isCollapse.value = isFold
    }
    return {
      handleFoldChange,
      isCollapse
    }
  }
})
</script>

<style lang="less">
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.main-content,
.page {
  height: 100%;
}
.page-content {
  height: calc(100% - 48px);
  .page-info {
    background-color: #fff;
    border-radius: 5px;
  }
}
.el-header {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
}
.el-header {
  height: 48px !important;
}
.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none;
  }
}

.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
}
</style>
