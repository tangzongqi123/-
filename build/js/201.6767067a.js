"use strict";(self["webpackChunkvu3_ts_cms"]=self["webpackChunkvu3_ts_cms"]||[]).push([[201],{1070:function(e,l,n){n.r(l),n.d(l,{default:function(){return J}});var a=n(3396);const u={class:"main"},t={class:"page-info"};function s(e,l,n,s,o,c){const d=(0,a.up)("nav-menu"),i=(0,a.up)("el-aside"),r=(0,a.up)("nav-header"),p=(0,a.up)("el-header"),m=(0,a.up)("router-view"),w=(0,a.up)("el-main"),f=(0,a.up)("el-container");return(0,a.wg)(),(0,a.iD)("div",u,[(0,a.Wm)(f,{class:"main-content"},{default:(0,a.w5)((()=>[(0,a.Wm)(i,{width:e.isCollapse?"60px":"210px"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{collapse:e.isCollapse},null,8,["collapse"])])),_:1},8,["width"]),(0,a.Wm)(f,{class:"page"},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{class:"page-header"},{default:(0,a.w5)((()=>[(0,a.Wm)(r,{onFoldChange:e.handleFoldChange},null,8,["onFoldChange"])])),_:1}),(0,a.Wm)(w,{class:"page-content"},{default:(0,a.w5)((()=>[(0,a._)("div",t,[(0,a.Wm)(m)])])),_:1})])),_:1})])),_:1})])}var o=n(4870),c=n(7139),d=n.p+"img/logo.5ac24feb.svg";const i=e=>((0,a.dD)("data-v-4f601dfa"),e=e(),(0,a.Cn)(),e),r={class:"nav-menu"},p={class:"logo"},m=i((()=>(0,a._)("img",{class:"img",src:d,alt:"logo"},null,-1))),w={key:0,class:"title"};function f(e,l,n,u,t,s){const o=(0,a.up)("el-icon"),d=(0,a.up)("el-menu-item"),i=(0,a.up)("el-sub-menu"),f=(0,a.up)("el-menu");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("div",p,[m,e.collapse?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("span",w,"Vue3+TS"))]),(0,a.Wm)(f,{"default-active":e.defaultValue,class:"el-menu-vertical",collapse:e.collapse,"background-color":"#0c2135","text-color":"#b7bdc3","active-text-color":"#0a60bd"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.userMenus,(l=>((0,a.wg)(),(0,a.iD)(a.HY,{key:l.id},[1===l.type?((0,a.wg)(),(0,a.j4)(i,{key:0,index:l.id+""},{title:(0,a.w5)((()=>[(0,a.Wm)(o,null,{default:(0,a.w5)((()=>[((0,a.wg)(),(0,a.j4)((0,a.LL)(l.icon.slice(8))))])),_:2},1024),(0,a._)("span",null,(0,c.zw)(l.name),1)])),default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.children,(l=>((0,a.wg)(),(0,a.j4)(d,{key:l.id,index:l.id+"",onClick:n=>e.handleMenuItemClick(l)},{default:(0,a.w5)((()=>[l.icon?((0,a.wg)(),(0,a.iD)("i",{key:0,class:(0,c.C_)(l.icon)},null,2)):(0,a.kq)("",!0),(0,a._)("span",null,(0,c.zw)(l.name),1)])),_:2},1032,["index","onClick"])))),128))])),_:2},1032,["index"])):2===l.type?((0,a.wg)(),(0,a.j4)(d,{key:1,index:e.subitem.id+""},{title:(0,a.w5)((()=>[(0,a.Wm)(o,null,{default:(0,a.w5)((()=>[((0,a.wg)(),(0,a.j4)((0,a.LL)(l.icon.slice(8))))])),_:2},1024),(0,a._)("span",null,(0,c.zw)(l.name),1)])),default:(0,a.w5)((()=>[(0,a._)("span",null,(0,c.zw)(l.name),1)])),_:2},1032,["index"])):(0,a.kq)("",!0)],64)))),128))])),_:1},8,["default-active","collapse"])])}var v=n(1411),g=n(678),_=n(997),k=(0,a.aZ)({props:{collapse:{type:Boolean,default:!1}},setup(){const e=(0,v.oR)(),l=(0,a.Fl)((()=>e.state.login.userMenus)),n=(0,g.tv)(),u=(0,g.yj)(),t=u.path,s=(0,_.Sx)(l.value,t),c=(0,o.iH)(s.id+""),d=e=>{n.push({path:e.url??"/not-found"})};return{userMenus:l,defaultValue:c,handleMenuItemClick:d}}}),h=n(89);const b=(0,h.Z)(k,[["render",f],["__scopeId","data-v-4f601dfa"]]);var C=b,W=C;const y={class:"nav-header"},x={class:"content"};function F(e,l,n,u,t,s){const o=(0,a.up)("Fold"),c=(0,a.up)("el-icon"),d=(0,a.up)("Expand"),i=(0,a.up)("hy-breadcrumb"),r=(0,a.up)("user-info");return(0,a.wg)(),(0,a.iD)("div",y,[e.isFold?((0,a.wg)(),(0,a.j4)(c,{key:0,class:"fold-menu",onClick:e.handleFoldClick},{default:(0,a.w5)((()=>[(0,a.Wm)(o)])),_:1},8,["onClick"])):((0,a.wg)(),(0,a.j4)(c,{key:1,class:"fold-menu",onClick:e.handleFoldClick},{default:(0,a.w5)((()=>[(0,a.Wm)(d)])),_:1},8,["onClick"])),(0,a._)("div",x,[(0,a.Wm)(i,{breadcrumbs:e.breadcrumbs},null,8,["breadcrumbs"]),(0,a.Wm)(r)])])}const D={class:"el-dropdown-link"},Z=(0,a.Uk)("退出登录"),j=(0,a.Uk)("用户信息"),H=(0,a.Uk)("系统管理");function z(e,l,n,u,t,s){const o=(0,a.up)("el-avatar"),d=(0,a.up)("arrow-down"),i=(0,a.up)("el-icon"),r=(0,a.up)("CircleCloseFilled"),p=(0,a.up)("el-dropdown-item"),m=(0,a.up)("el-dropdown-menu"),w=(0,a.up)("el-dropdown");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(w,null,{dropdown:(0,a.w5)((()=>[(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[(0,a.Wm)(p,{onClick:e.handleExitClick},{default:(0,a.w5)((()=>[(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[(0,a.Wm)(r)])),_:1}),Z])),_:1},8,["onClick"]),(0,a.Wm)(p,{divided:""},{default:(0,a.w5)((()=>[j])),_:1}),(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[H])),_:1})])),_:1})])),default:(0,a.w5)((()=>[(0,a._)("span",D,[(0,a.Wm)(o,{size:30,src:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"}),(0,a._)("span",null,(0,c.zw)(e.name),1),(0,a.Wm)(i,{class:"el-icon--right"},{default:(0,a.w5)((()=>[(0,a.Wm)(d)])),_:1})])])),_:1})])}var I=n(3224),M=(0,a.aZ)({setup(){const e=(0,v.oR)(),l=(0,a.Fl)((()=>e.state.login.userInfo.name)),n=(0,g.tv)(),u=()=>{I.Z.deleteCache("token"),n.push("/main")};return{name:l,handleExitClick:u}}});const U=(0,h.Z)(M,[["render",z],["__scopeId","data-v-7c9cc7a2"]]);var L=U;const Y={class:"nav-breadcrumb"};function q(e,l,n,u,t,s){const o=(0,a.up)("el-breadcrumb-item"),d=(0,a.up)("el-breadcrumb");return(0,a.wg)(),(0,a.iD)("div",Y,[(0,a.Wm)(d,{separator:"/"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.breadcrumbs,(e=>((0,a.wg)(),(0,a.j4)(o,{key:e.name},{default:(0,a.w5)((()=>[(0,a.Uk)((0,c.zw)(e.name),1)])),_:2},1024)))),128))])),_:1})])}var E=(0,a.aZ)({props:{breadcrumbs:{type:Array,default:()=>[]}},setup(){return{}}});const K=(0,h.Z)(E,[["render",q]]);var R=K,V=R,B=(0,a.aZ)({components:{UserInfo:L,HyBreadcrumb:V},emits:["foldChange"],setup(e,{emit:l}){const n=(0,o.iH)(!1),u=()=>{n.value=!n.value,console.log(n.value),l("foldChange",n.value)},t=(0,v.oR)(),s=(0,a.Fl)((()=>{const e=t.state.login.userMenus,l=(0,g.yj)(),n=l.path;return(0,_.CH)(e,n)}));return console.log(s),{isFold:n,handleFoldClick:u,breadcrumbs:s}}});const N=(0,h.Z)(B,[["render",F],["__scopeId","data-v-7fa01c88"]]);var S=N,A=S,T=(0,a.aZ)({components:{NavMenu:W,NavHeader:A},setup(){const e=(0,o.iH)(!1),l=l=>{e.value=l};return{handleFoldChange:l,isCollapse:e}}});const G=(0,h.Z)(T,[["render",s]]);var J=G}}]);
//# sourceMappingURL=201.6767067a.js.map