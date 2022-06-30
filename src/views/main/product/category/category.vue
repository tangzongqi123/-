<template>
  <div class="category">
    <page-search
      :searchFormConfig="searchFormConfig"
      @queryBtnClick="handleQueryClick"
      @resetBtnClick="handleResetClick"
    ></page-search>

    <page-content
      ref="pageContentRef"
      pageName="category"
      :contentTableConfig="contentTableConfig"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></page-content>

    <page-modal
      ref="pageModalRef"
      pageName="category"
      :modalConfig="modalConfig"
      :defaultInfo="defaultInfo"
    >
    </page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageContent from '@/components/page-content'
import PageSearch from '@/components/page-search'
import PageModal from '@/components/page-modal'

import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'

import { searchFormConfig } from './config/search.confg'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'
export default defineComponent({
  name: 'category',
  components: {
    PageContent,
    PageSearch,
    PageModal
  },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
    const [pageModalRef, defaultInfo, handleNewData, handleEditData] =
      usePageModal()
    return {
      searchFormConfig,
      contentTableConfig,
      modalConfig,
      pageContentRef,
      handleQueryClick,
      handleResetClick,
      pageModalRef,
      defaultInfo,
      handleNewData,
      handleEditData
    }
  }
})
</script>

<style scoped></style>
