import { IloginState } from './login/types'
import { ISystemState } from './main/system/types'
import { IDashboardState } from './main/analysis/types'

export interface IRootState {
  entireDepartment: any[]
  entireRole: any[]
  entrieMenu: any[]
}

export interface IRootWithModule {
  login: IloginState
  system: ISystemState
  dashboard: IDashboardState
}
//----------------交叉属性 &
export type IStoreType = IRootState & IRootWithModule
