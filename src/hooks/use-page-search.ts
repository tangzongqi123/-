import { ref } from 'vue'
import PageContent from '@/components/page-content'
export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  const handleResetClick = () => {
    pageContentRef.value?.getPageData()
  }
  const handleQueryClick = (queryInfos: any) => {
    console.log(queryInfos)

    pageContentRef.value?.getPageData({ ...queryInfos })
  }

  return [pageContentRef, handleResetClick, handleQueryClick]
}
