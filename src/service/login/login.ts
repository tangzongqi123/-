import hyRequest from '../index'
import { IAccount, ILoginResult } from './type'
import { IDataType } from '../types'
enum LoginAPI {
  //登录请求
  AccountLogin = '/login',
  //用户请求
  LoginUserInfo = '/users/', //  /users/1
  //菜单请求
  UserMenus = '/role/' //用法role/1/menu
}
export function accountLoginRequest(account: IAccount) {
  return hyRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  //使用的时候不知道是什么类型 unknown
  return hyRequest.get<IDataType>({
    //拼接id
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  })
}

export function requestUserMenusByRoleId(id: number) {
  return hyRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu',
    showLoading: false
  })
}
