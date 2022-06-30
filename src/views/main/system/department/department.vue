<template>
  <div class="department">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    />

    <page-content
      ref="pageContentRef"
      pageName="department"
      :contentTableConfig="contentTableConfig"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></page-content>

    <page-modal
      ref="pageModalRef"
      pageName="department"
      :defaultInfo="defaultInfo"
      :modalConfig="modalConfigRef"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

export default defineComponent({
  name: 'department',
  components: { PageSearch, PageContent, PageModal },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()

    const store = useStore()
    const modalConfigRef = computed(() => {
      const parentIdItem = modalConfig.formItems?.find(
        (item) => item.field === 'parentId'
      )

      parentIdItem!.options = store.state.entireDepartment.map((item) => {
        return { title: item.name, value: item.id }
      })
      console.log(parentIdItem)
      return modalConfig
    })

    const [pageModalRef, defaultInfo, handleNewData, handleEditData] =
      usePageModal()
    return {
      searchFormConfig,
      contentTableConfig,
      pageContentRef,
      handleResetClick,
      handleQueryClick,
      pageModalRef,
      defaultInfo,
      handleNewData,
      handleEditData,
      modalConfigRef
    }
  }
})
</script>

<style lang="less" scoped></style>
