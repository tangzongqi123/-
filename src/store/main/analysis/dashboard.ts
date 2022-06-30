import { Module } from 'vuex'

import {
  getCategoryGoodsCount,
  getCategoryGoodsFavor,
  getAddressGoodsSale,
  getCategoryGoodsSale
} from '@/service/main/analysis/dashboard'

import { IDashboardState } from './types'
import { IRootState } from '../../types'

const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsGount: [],
      categoryGoodsFavor: [],
      categoryGoodsSale: [],
      addressGoodsSale: []
    }
  },
  mutations: {
    changeCategoryGoodsCount(state, list) {
      state.categoryGoodsGount = list
    },
    changeCategoryGoodsSale(state, list) {
      state.categoryGoodsSale = list
    },
    changeCategoryGoodsFavor(state, list) {
      state.categoryGoodsFavor = list
    },
    changeAddressGoodsSale(state, list) {
      state.addressGoodsSale = list
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      //获取到商品数据
      const categoryGoodsResult = await getCategoryGoodsCount()
      commit('changeCategoryGoodsCount', categoryGoodsResult.data)
      //获取到销售数据
      const categorySaleResult = await getCategoryGoodsSale()
      commit('changeCategoryGoodsSale', categorySaleResult.data)
      //获取收藏数据
      const categoryFavorResult = await getCategoryGoodsFavor()
      commit('changeCategoryGoodsFavor', categoryFavorResult.data)
      //获取不同城市的销量
      const addressGoddsResult = await getAddressGoodsSale()
      commit('changeAddressGoodsSale', addressGoddsResult.data)
    }
  }
}

export default dashboardModule
