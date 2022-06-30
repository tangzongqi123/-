import { useStore } from '@/store'

export function userPermission(pageName: string, handleName: string) {
  const store = useStore()
  const permissions = store.state.login.permissions
  const verifyPermission = `system:${pageName}:${handleName}`
  //返回一个布尔值
  return !!permissions.find((item) => item === verifyPermission)
}
