<template>
  <div class="hy-table">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>

    <!-- 选中一行是,会触发事件 @selection-change -->
    <el-table
      :data="listData"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
      v-bind="childrenProps"
    >
      <!-- 选中框 -->
      <el-table-column
        v-if="showIndexColumn"
        type="selection"
        align="center"
        width="60"
      ></el-table-column>
      <!-- 展示序列号 -->
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="80"
      ></el-table-column>
      <!-- 遍历数据展示内容 -->
      <template v-for="item in propList" :key="item.prop">
        <el-table-column v-bind="item" align="center" show-overflow-tooltip>
          <!-- 插槽可以定义每个表单元素的样式 el-button等 -->
          <template #default="scope">
            <!-- 动态给插槽设置名字 -->
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}</slot
            >
          </template>
        </el-table-column>
      </template>
    </el-table>

    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <!--  :total展示多少页
               layout 小功能排序排序
               :page-sizes
         -->
        <!--
          v-model:currentPage="currentPage4"
          v-model:page-size="pageSize4"-->
        <el-pagination
          :current-page="page.currentPage"
          :page-size="page.pageSize"
          :page-sizes="[10, 20, 30]"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      /></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    },
    listData: {
      type: Array,
      required: true
    },
    listCount: {
      type: Number,
      default: 0
    },
    propList: {
      type: Array,
      required: true
    },
    //接收是否显示列的序号
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    //接收是否显示选中框
    showSelectColumn: {
      type: Boolean,
      default: false
    },
    //分页功能:双向绑定的属性
    page: {
      type: Object,
      //默认值
      default: () => ({ currentPage: 0, pageSize: 10 })
    },
    //接收展开值
    childrenProps: {
      type: Object,
      default: () => ({})
    },
    //是否有分页
    showFooter: {
      type: Boolean,
      default: true
    }
  },
  emits: ['selectionChange', 'update:page'],
  setup(props, { emit }) {
    const handleSelectionChange = (value: any) => {
      //可以拿到选中的一行的数据
      // console.log(value)
      //将拿到的数据,通过事件发出
      emit('selectionChange', value)
    }
    const handleSizeChange = (pageSize: number) => {
      emit('update:page', { ...props.page, pageSize })
    }
    const handleCurrentChange = (currentPage: number) => {
      emit('update:page', { ...props.page, currentPage })
    }

    return {
      handleSelectionChange,
      handleSizeChange,
      handleCurrentChange
    }
  }
})
</script>

<style lang="less" scoped>
.hy-table {
  position: relative;
}
.header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 20px;
    font-weight: 700;
  }

  .handler {
    align-items: center;
  }
}

.footer {
  display: flex;
  justify-content: right;
  width: 100%;
  margin-top: 15px;

  .el-pagination {
    margin-top: 15px;
  }
}
</style>
