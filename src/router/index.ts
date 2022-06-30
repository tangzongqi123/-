import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { firstMenu } from '@/utils/map-menus'

import localCache from '@/utils/cache'
const routes: RouteRecordRaw[] = [
  //默认页面
  {
    path: '/',
    redirect: '/main'
  },
  //登录页面
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  //主页面
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue')
    //children:[]->不能直接写死,要根据userMenu来决定
  },
  //不存在的页面
  {
    //需要复习-----------
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/not-found/not-found.vue')
  }
]
const router = createRouter({
  routes,
  history: createWebHashHistory()
})

//判断用户是否登录
//导航守卫
//配置动态的路由:可以在导航守卫里面做,当一跳到首页,就配置对应的关系
//----------------需要复习
router.beforeEach((to) => {
  //如果不是登录页面
  if (to.path !== '/login') {
    //拿到token
    const token = localCache.getCache('token')
    //如果没有token
    if (!token) {
      //返回到登录页
      return '/login'
    }
  }
  // console.log(router.getRoutes())

  // console.log(to) //name: "not-found"
  if (to.path === '/main') {
    //当为mian时,跳转第一个菜单
    return firstMenu.url
  }
})

export default router
