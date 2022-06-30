import { ref } from 'vue'
import PageModal from '@/components/page-modal'

type CallbackFn = (item?: any) => void

export function usePageModal(
  newCallback?: CallbackFn,
  editCallback?: CallbackFn
) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})

  const handleNewData = () => {
    //初始值
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    newCallback && newCallback()
  }
  const handleEditData = (item: any) => {
    // console.log(111)
    //保存item的值
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    editCallback && editCallback(item)
  }

  return [pageModalRef, defaultInfo, handleNewData, handleEditData]
}
