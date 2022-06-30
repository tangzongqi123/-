import { IBreadcrumb } from '@/base-ui/breadcrumb'
import { RouteRecordRaw } from 'vue-router'

let firstMenu: any = null
export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  //1.先去加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = []
  //require:对象->属于webpack
  //require.context 可以帮我们快速查找文件夹
  //第二个参数:要不要递归的进行查找
  //第三个参数:匹配对应文件夹下面的文件
  const routeFiles = require.context('../router/main', true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    //main文件下的每个ts文件路径
    // console.log(key)
    //require 加载具体的文件
    //..router/main/./system 不能有前面这个.
    //key.split('.')[1]
    // 拿到就是 /system/user
    const route = require('../router/main' + key.split('.')[1])
    // console.log(route)

    //route.default 每个导出的对象
    allRoutes.push(route.default)
  })
  console.log(allRoutes)

  //2.根据菜单获取需要添加的routes
  //不能直接遍历,可能会有嵌套
  //type===1 ->children ->type ===1
  //type === 2 ->url ->routes
  //递归:
  //在函数内部定义了一个函数
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        //从数组allRoutes中找到每一个对象
        //如果返回true,就把这个对象返回
        const route = allRoutes.find((route) => {
          return route.path === menu.url
        })
        //如果路径匹配
        if (route) {
          //就放进数组中
          routes.push(route)
        }
        //保存一个值:第一个菜单
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        //需要递归,再去遍历children里面的东西
        //下一次type就为2了
        _recurseGetRoute(menu.children)
      }
    }
  }
  //直接调用,把usemenus传进来
  _recurseGetRoute(userMenus)
  return routes
}

export function pathMapBreadcrumbs(userMenus: any[], currentPath: string) {
  const breadcrumbs: IBreadcrumb[] = []
  pathMapToMenu(userMenus, currentPath, breadcrumbs)
  return breadcrumbs
}

export function pathMapToMenu(
  userMenus: any[],
  currentPath: string,
  breadcrumbs?: IBreadcrumb[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        //上一级的值
        breadcrumbs?.push({ name: menu.name })
        //当前的值
        breadcrumbs?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }

    //有children
  }
}

//拿到菜单的值
// export function pathMapToMenu(userMenus: any[], currentPath: string): any {
//   for (const menu of userMenus) {
//     if (menu.type === 1) {
//       const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
//       if (findMenu) {
//         console.log(findMenu)
//         return findMenu
//       }
//     } else if (menu.type === 2 && menu.url === currentPath) {
//       return menu
//     }

//     //有children
//   }
// }

export function mapMenusToPermissions(userMenus: any[]) {
  const permissons: string[] = []
  const _recurseGetPermission = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermission(menu.children ?? [])
      } else if (menu.type === 3) {
        permissons.push(menu.permission)
      }
    }
  }
  _recurseGetPermission(userMenus)
  // console.log(permissons)

  return permissons
}

export function menuMapLeafKeys(menuList: any) {
  // console.log(menuList)

  const leafKeys: number[] = []

  const _recurseGetLeaf = (menuList: any[]) => {
    for (const menu of menuList) {
      if (menu.children) {
        _recurseGetLeaf(menu.children)
      } else {
        leafKeys.push(menu.id)
      }
    }
  }
  _recurseGetLeaf(menuList)

  return leafKeys
}

export function departmentMapLeafKeys(menuList: any) {
  const leafKeys: number[] = []

  const _recurseGetLeaf = (menuList: any[]) => {
    for (const menu of menuList) {
      if (menu.children) {
        _recurseGetLeaf(menu.children)
      } else {
        leafKeys.push(menu.id)
      }
    }
  }
  _recurseGetLeaf(menuList)

  return leafKeys
}

export { firstMenu }
