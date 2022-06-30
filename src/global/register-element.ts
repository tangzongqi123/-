import { App } from 'vue'

// import {
//   ElButton,
//   ElForm,
//   ElFormItem,
//   ElTabs,
//   ElTabPane,
//   ElInput,
//   ElCheckbox,
//   ElContainer,
//   ElHeader,
//   ElMain,
//   ElAside,
//   ElMenu,
//   ElSubMenu,
//   ElMenuItem,
//   ElMenuItemGroup
// } from 'element-plus'
import {
  UserFilled,
  Iphone,
  Monitor,
  Setting,
  Goods,
  ChatLineRound,
  Fold,
  Expand,
  ArrowDown,
  CircleCloseFilled,
  RefreshRight,
  Search,
  Edit,
  Delete,
  Refresh
} from '@element-plus/icons-vue'
// import 'element-plus/theme-chalk/base.css'
// const components = [
//   ElButton,
//   ElForm,
//   ElFormItem,
//   ElInput,
//   ElTabs,
//   ElTabPane,
//   ElCheckbox,
//   ElContainer,
//   ElHeader,
//   ElMain,
//   ElAside,
//   ElMenu,
//   ElSubMenu,
//   ElMenuItem,
//   ElMenuItemGroup
// ]
const icons = [
  UserFilled,
  Iphone,
  Monitor,
  Setting,
  Goods,
  ChatLineRound,
  Fold,
  Expand,
  ArrowDown,
  CircleCloseFilled,
  RefreshRight,
  Search,
  Edit,
  Delete,
  Refresh
]
export default function (app: App) {
  // for (const component of components) {
  //   app.component(component.name, component)
  // }
  for (const icon of icons) {
    app.component(icon.name, icon)
    // console.log(icon.name) //ElButton, ElForm, ElFormItem
  }
}
