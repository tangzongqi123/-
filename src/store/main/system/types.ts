export interface ISystemState {
  //服务器返回的数据 设置为any类型 原因：比较复杂
  usersList: any[]
  usersCount: number
  roleList: any[]
  roleCount: number
  goodsList: any[]
  goodsCount: number
  menuList: any[]
  menuCount: number
  departmentList: any[]
  departmentCount: number
  categoryList: any[]
  categoryCount: number
}
