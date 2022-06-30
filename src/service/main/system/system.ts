import hyRequest from '../../index'
import { IDataType } from '../../types'
export function getPageListData(url: string, queryInfo: any) {
  //返回网络请求
  return hyRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

//url: /users/id
//删除网络请求
export function deletePageData(url: string) {
  return hyRequest.delete<IDataType>({
    url: url
  })
}

//新建用户数据请求
export function createPageData(url: string, newData: any) {
  return hyRequest.post<IDataType>({
    url: url,
    data: newData
  })
}

//编辑用户数据请求
export function editPageData(url: string, editData: any) {
  return hyRequest.patch<IDataType>({
    url: url,
    data: editData
  })
}
