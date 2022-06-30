<template>
  <div class="nav-menu">
    <!-- ~@    template的使用别名寻找路径  vue-loader会对其进行解析 -->
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span v-if="!collapse" class="title">Vue3+TS</span>
    </div>
    <!-- :unique-opened="true" 默认是false,打开一个就会关闭另一个 -->
    <!-- :collapse="collapse" 为true 收缩 为fasle不收缩 -->
    <el-menu
      :default-active="defaultValue"
      class="el-menu-vertical"
      :collapse="collapse"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
    >
      <!--el-sub-menu能折叠打开的 -->
      <!--el-menu-item-group 里面放入很多个el-menu-item  -->
      <!--el-menu-item 单独的一项,不能被打开的-->
      <!--  item.id 唯一标识-->
      <template v-for="item in userMenus" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <!-- item.type === 1  可以展开的菜单 -->
          <!-- :index="item.id" 需要标识,不然默认就是全部都选中 -->
          <!-- 但是我的这个默认貌似没有全部选中,需要点击全部就会选中 -->
          <!-- 逐步设置了:index=""以后就可以单个选中了 -->
          <!-- +''转成字符串,默认index支持字符串形式,不然会有很多警告 -->
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon>
                <component :is="item.icon.slice(8)"></component>
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <!-- 需要把内容放到submenu里面 -->
            <template v-for="subitem in item.children" :key="subitem.id">
              <!-- 每个按钮绑定事件,实现路由跳转 -->
              <el-menu-item
                :index="subitem.id + ''"
                @click="handleMenuItemClick(subitem)"
              >
                <i v-if="subitem.icon" :class="subitem.icon"></i>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>

          <!-- 遍历可以展开的二级标题 -->
        </template>

        <!-- 一级菜单 -->
        <template v-else-if="item.type === 2">
          <el-menu-item :index="subitem.id + ''">
            <!--v-if="item.icon"有值的情况才会显示i元素  -->

            <template #title>
              <el-icon>
                <component :is="item.icon.slice(8)" />
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
//使用自己的useStore
import { useStore } from '@/store'
import { useRouter, useRoute } from 'vue-router'
import { pathMapToMenu } from '@/utils/map-menus'
export default defineComponent({
  //组件传来的值
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    //store
    const store = useStore()
    //拿到获取到的菜单值，用于遍历
    const userMenus = computed(() => store.state.login.userMenus)
    //route
    const router = useRouter()

    //菜单和页面相匹配功能:
    //拿到当前路由
    const route = useRoute()
    //拿到当前路径
    const currentPath = route.path
    // console.log(currentPath)

    //data
    const menu = pathMapToMenu(userMenus.value, currentPath)
    const defaultValue = ref(menu.id + '')
    // console.log(defaultValue.value)

    //event handle
    const handleMenuItemClick = (item: any) => {
      // console.log(item) //可以拿到服务器传来的值
      router.push({
        path: item.url ?? '/not-found'
      })
    }
    return { userMenus, defaultValue, handleMenuItemClick }
  }
})
</script>

<style lang="less" scoped>
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    border-right: none;
  }

  // 目录
  .el-submenu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
