<template>
  <div class="page-content">
    <!-- v-model:page="pageInfo" page update:page  只是想给page双向绑定不想给整个hy-table双向绑定-->
    <!-- v-model="pageInfo"   modelValue  @update:modelValue -->
    <hy-table
      :listData="dataList"
      :listCount="dataCount"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
    >
      <!-- 1.header中的插槽 -->
      <template #headerHandler>
        <el-button
          v-if="isCreate"
          type="primary"
          size="medium"
          @click="handleNewClick"
          >新建用户</el-button
        >
        <el-button
          ><el-icon><Refresh /></el-icon
        ></el-button>
      </template>
      <!-- 2.列中的插槽 -->
      <template #status="scope">
        <!-- 优化样式 -->
        <el-button
          plain
          style="mini"
          :type="scope.row.enable ? 'success' : 'danger'"
          >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
        >
      </template>
      <!-- 创建时间的插槽 -->
      <template #createAt="scope">
        <!-- 拿到时间,并且格式化时间 -->
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <!-- 更新时间的插槽 -->
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>

      <!-- 只有2个按钮,不需要获取数据,不需要作用域插槽 -->
      <!-- 行里面的内容 -->
      <!-- 使用作用域插槽 -->
      <!-- 按钮插槽 -->
      <template #handler="scope">
        <div class="handler-btns">
          <!-- 编辑按钮 -->
          <el-button
            v-if="isUpdate"
            size="mini"
            type="text"
            @click="handleEditClick(scope.row)"
            ><el-icon><Edit /></el-icon>编辑</el-button
          >
          <!-- 删除按钮 -->
          <el-button
            v-if="isDelete"
            size="mini"
            type="text"
            @click="handleDeleteClick(scope.row)"
            ><el-icon><Delete /></el-icon>删除</el-button
          >
        </div>
      </template>
      <!-- <template #header> hahah </template> -->

      <!-- 在page-content中动态插入剩余的插槽 -->
      <!--  #[item.slotName]="scope" 一一对应 -->
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <!-- 判断:有值才做动态插槽 -->
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </hy-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import { useStore } from '@/store'
import { userPermission } from '@/hooks/use-permission'

import HyTable from '@/base-ui/table'
export default defineComponent({
  components: { HyTable },
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  emits: ['newBtnClick', 'editBtnClick'],
  setup(props, { emit }) {
    const store = useStore()
    //0.获取操作的权限
    const isCreate = userPermission(props.pageName, 'create')
    const isUpdate = userPermission(props.pageName, 'update')
    const isDelete = userPermission(props.pageName, 'delete')
    const isQuery = userPermission(props.pageName, 'query')
    //1.双向绑定pageInfo
    const pageInfo = ref({ currentPage: 1, pageSize: 10 })
    watch(pageInfo, () => getPageData())

    //2.发送网络请求
    const getPageData = (queryInfos: any = {}) => {
      //发送网络请求的判断,如果在有权限的情况下 才会发送
      //没有权限就直接返回了
      if (!isQuery) return
      // console.log(queryInfos)
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          //第一次偏移为0
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfos
        }
      })
    }
    getPageData()

    // const userList = computed(() => store.state.system.userList)
    //3.从vuex中获取数据
    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )
    const dataCount = computed(() =>
      store.getters[`system/pageListCount`](props.pageName)
    )

    //4.获取其他的动态插槽名称
    const otherPropSlots = props.contentTableConfig?.propList.filter(
      (item: any) => {
        //过滤掉固定的插槽
        if (item.slotName === 'status') return false
        if (item.slotName === 'createAt') return false
        if (item.slotName === 'updateAt') return false
        if (item.slotName === 'handler') return false
        return true
      }
    )

    //5.删除/编辑/新建的操作
    const handleDeleteClick = (item: any) => {
      console.log(item)
      //必须要system,不然vuex会报错显示unknown
      store.dispatch('system/deletePageDataAction', {
        pageName: props.pageName,
        id: item.id
      })
    }
    const handleNewClick = () => {
      // console.log(11)

      emit('newBtnClick')
    }
    const handleEditClick = (item: any) => {
      // console.log(11)

      emit('editBtnClick', item)
    }
    return {
      dataList,
      getPageData,
      dataCount,
      pageInfo,
      otherPropSlots,
      isCreate,
      isUpdate,
      isDelete,
      isQuery,
      handleDeleteClick,
      handleNewClick,
      handleEditClick
    }
  }
})
</script>

<style scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
.handler-btns {
  display: flex;
}
</style>
