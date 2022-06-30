//名字重复,可以起别名useStore as useVuexStore
import { createStore, Store, useStore as useVuexStore } from 'vuex'

import login from './login/login'
import system from './main/system/system'
import dashboard from './main/analysis/dashboard'

import { getPageListData } from '@/service/main/system/system'

import { IRootState, IStoreType } from './types'
//加入;类型,做一些限制
const store = createStore<IRootState>({
  state: () => {
    return {
      entireDepartment: [],
      entireRole: [],
      entrieMenu: []
    }
  },
  mutations: {
    changeEntireDepartment(state, list) {
      state.entireDepartment = list
    },
    changeEntireRole(state, list) {
      state.entireRole = list
    },
    changeEntireMenu(state, list) {
      state.entrieMenu = list
    }
  },
  getters: {},
  actions: {
    async getInitialDataAction({ commit }) {
      //1.请求部门和角色数据

      const departmentResult = await getPageListData('/department/list', {
        offset: 0,
        size: 1000
      })
      //list起了别名departmentList
      const { list: departmentList } = departmentResult.data
      const roleResult = await getPageListData('/role/list', {
        offset: 0,
        size: 1000
      })
      const { list: roleList } = roleResult.data
      //获取菜单
      const menuResult = await getPageListData('/menu/list', {})
      const { list: menuList } = menuResult.data
      // console.log(menuList)

      //保存数据
      commit('changeEntireDepartment', departmentList)
      commit('changeEntireRole', roleList)
      commit('changeEntireMenu', menuList)
    }
  },
  modules: {
    login,
    system,
    dashboard
  }
})

//保存vuex,页面一刷新vuex的数据就没了
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
  //里面的数据请求是异步的,为了防止有bug,token还有没有拿到,就请求数据.在login进行设置
  // store.dispatch('getInitialDataAction')
}
//自己的useStore的一些功能
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}
export default store
