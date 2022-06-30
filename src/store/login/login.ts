import { Module } from 'vuex'

import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'
import localCache from '@/utils/cache'
import { mapMenusToRoutes, mapMenusToPermissions } from '@/utils/map-menus'
//获取router对象,开始第四步跳转页面了
import router from '@/router'

import { IAccount } from '@/service/login/type'

import { IloginState } from './types'
import { IRootState } from '../types'

//必须要导入2个类型
//----------不理解：Module
const loginModule: Module<IloginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: [],
      permissions: []
    }
  },
  getters: {},
  mutations: {
    //设置token的值
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, uesrInfo: any) {
      state.userInfo = uesrInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus

      //useMenus => routes
      const routes = mapMenusToRoutes(userMenus)
      // console.log(routes)

      //将routes => router.main.children
      //动态添加路由addRoute('名称',映射关系)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })

      //获取用户按钮的权限
      const permissions = mapMenusToPermissions(userMenus)
      // console.log(permissions)
      //拿到权限值后,做一个保存
      state.permissions = permissions
    }
  },
  actions: {
    async accountLoginAction({ commit, dispatch }, payload: IAccount) {
      //1.实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      // console.log(loginResult)
      //拿到id 和token
      const { id, token } = loginResult.data
      commit('changeToken', token)
      // console.log(loginResult.data.id, loginResult.data.token)
      //token需要缓存
      localCache.setCache('token', token)
      //发送初始化的请求(完整的role/department)
      //调用根里面的action
      dispatch('getInitialDataAction', null, { root: true })
      //2.请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      // console.log(userInfoResult)
      const userInfo = userInfoResult.data

      commit('changeUserInfo', userInfo)
      //登录信息也需要缓存
      localCache.setCache('userInfo', userInfo)
      // const userInfo = userInfoResult.data

      //3.请求用户的菜单
      const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data
      //看是否拿到数据没有
      // console.log(userMenus)
      commit('changeUserMenus', userMenus)
      //本地也保存一份
      localCache.setCache('userMenus', userMenus)

      //4.跳到首页
      router.push('/main')
    },
    //拿到数据
    loadLocalLogin({ commit, dispatch }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
        //发送初始化的请求(完整的role/department)
        //调用根里面的action
        dispatch('getInitialDataAction', null, { root: true })
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
    // phoneloginAction({ commit }, payload: any) {
    //   console.log('执行了phoneloginAction', payload)
    // }
  }
}

export default loginModule
