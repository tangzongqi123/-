"use strict";(self["webpackChunkvu3_ts_cms"]=self["webpackChunkvu3_ts_cms"]||[]).push([[160],{2645:function(e,t,a){a.d(t,{Z:function(){return m}});var l=a(3396),o=a(7139);const n={class:"hy-form"},d={class:"header"},i={class:"footer"};function r(e,t,a,r,s,u){const p=(0,l.up)("el-input"),c=(0,l.up)("el-option"),m=(0,l.up)("el-select"),g=(0,l.up)("el-date-picker"),f=(0,l.up)("el-form-item"),h=(0,l.up)("el-col"),w=(0,l.up)("el-row"),y=(0,l.up)("el-form");return(0,l.wg)(),(0,l.iD)("div",n,[(0,l._)("div",d,[(0,l.WI)(e.$slots,"header",{},void 0,!0)]),(0,l.Wm)(y,{"label-width":e.labelWidth},{default:(0,l.w5)((()=>[(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.formItems,(t=>((0,l.wg)(),(0,l.j4)(h,(0,o.vs)((0,l.dG)({key:t.label},e.colLayout)),{default:(0,l.w5)((()=>[t.isHidden?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(f,{key:0,label:t.label,style:(0,o.j5)(e.itemStyle),rules:t.rules},{default:(0,l.w5)((()=>["input"===t.type||"password"===t.type?((0,l.wg)(),(0,l.j4)(p,(0,l.dG)({key:0,placeholder:t.placeholder,"show-password":"password"===t.type},t.otherOptions,{"model-value":e.modelValue[`${t.field}`],"onUpdate:modelValue":a=>e.handleValueChange(a,t.field)}),null,16,["placeholder","show-password","model-value","onUpdate:modelValue"])):"select"===t.type?((0,l.wg)(),(0,l.j4)(m,(0,l.dG)({key:1,placeholder:t.placeholder,style:{width:"100%"}},t.otherOptions,{"model-value":e.modelValue[`${t.field}`],"onUpdate:modelValue":a=>e.handleValueChange(a,t.field)}),{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.options,(e=>((0,l.wg)(),(0,l.j4)(c,{key:e.value,value:e.value},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(e.title),1)])),_:2},1032,["value"])))),128))])),_:2},1040,["placeholder","model-value","onUpdate:modelValue"])):"datepicker"===t.type?((0,l.wg)(),(0,l.j4)(g,(0,l.dG)({key:2},t.otherOptions,{"model-value":e.modelValue[`${t.field}`],"onUpdate:modelValue":a=>e.handleValueChange(a,t.field)}),null,16,["model-value","onUpdate:modelValue"])):(0,l.kq)("",!0)])),_:2},1032,["label","style","rules"]))])),_:2},1040)))),128))])),_:1})])),_:1},8,["label-width"]),(0,l._)("div",i,[(0,l.WI)(e.$slots,"footer",{},void 0,!0)])])}var s=(0,l.aZ)({props:{modelValue:{type:Object,required:!0},formItems:{type:Array,default:()=>[]},labelWidth:{type:String,default:"100px"},itemStyle:{type:Object,default:()=>({padding:"10px 40px"})},colLayout:{type:Object,default:()=>({xl:6,lg:8,md:12,xs:24})}},emits:["update:modelValue"],setup(e,{emit:t}){const a=(a,l)=>{t("update:modelValue",{...e.modelValue,[l]:a})};return{handleValueChange:a}}}),u=a(89);const p=(0,u.Z)(s,[["render",r],["__scopeId","data-v-66c118bd"]]);var c=p,m=c},2577:function(e,t,a){a.d(t,{Z:function(){return N}});var l=a(3396),o=a(7139);const n={class:"page-content"},d=(0,l.Uk)("新建用户"),i={class:"handler-btns"},r=(0,l.Uk)("编辑"),s=(0,l.Uk)("删除");function u(e,t,a,u,p,c){const m=(0,l.up)("el-button"),g=(0,l.up)("Refresh"),f=(0,l.up)("el-icon"),h=(0,l.up)("Edit"),w=(0,l.up)("Delete"),y=(0,l.up)("hy-table");return(0,l.wg)(),(0,l.iD)("div",n,[(0,l.Wm)(y,(0,l.dG)({listData:e.dataList,listCount:e.dataCount},e.contentTableConfig,{page:e.pageInfo,"onUpdate:page":t[0]||(t[0]=t=>e.pageInfo=t)}),(0,l.Nv)({headerHandler:(0,l.w5)((()=>[e.isCreate?((0,l.wg)(),(0,l.j4)(m,{key:0,type:"primary",size:"medium",onClick:e.handleNewClick},{default:(0,l.w5)((()=>[d])),_:1},8,["onClick"])):(0,l.kq)("",!0),(0,l.Wm)(m,null,{default:(0,l.w5)((()=>[(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[(0,l.Wm)(g)])),_:1})])),_:1})])),status:(0,l.w5)((e=>[(0,l.Wm)(m,{plain:"",style:{},type:e.row.enable?"success":"danger"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(e.row.enable?"启用":"禁用"),1)])),_:2},1032,["type"])])),createAt:(0,l.w5)((t=>[(0,l._)("span",null,(0,o.zw)(e.$filters.formatTime(t.row.createAt)),1)])),updateAt:(0,l.w5)((t=>[(0,l._)("span",null,(0,o.zw)(e.$filters.formatTime(t.row.updateAt)),1)])),handler:(0,l.w5)((t=>[(0,l._)("div",i,[e.isUpdate?((0,l.wg)(),(0,l.j4)(m,{key:0,size:"mini",type:"text",onClick:a=>e.handleEditClick(t.row)},{default:(0,l.w5)((()=>[(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[(0,l.Wm)(h)])),_:1}),r])),_:2},1032,["onClick"])):(0,l.kq)("",!0),e.isDelete?((0,l.wg)(),(0,l.j4)(m,{key:1,size:"mini",type:"text",onClick:a=>e.handleDeleteClick(t.row)},{default:(0,l.w5)((()=>[(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[(0,l.Wm)(w)])),_:1}),s])),_:2},1032,["onClick"])):(0,l.kq)("",!0)])])),_:2},[(0,l.Ko)(e.otherPropSlots,(t=>({name:t.slotName,fn:(0,l.w5)((a=>[t.slotName?(0,l.WI)(e.$slots,t.slotName,{key:0,row:a.row},void 0,!0):(0,l.kq)("",!0)]))})))]),1040,["listData","listCount","page"])])}var p=a(4870),c=a(1411);function m(e,t){const a=(0,c.oR)(),l=a.state.login.permissions,o=`system:${e}:${t}`;return!!l.find((e=>e===o))}const g={class:"hy-table"},f={class:"header"},h={class:"title"},w={class:"handler"},y={key:0,class:"footer"};function C(e,t,a,n,d,i){const r=(0,l.up)("el-table-column"),s=(0,l.up)("el-table"),u=(0,l.up)("el-pagination");return(0,l.wg)(),(0,l.iD)("div",g,[(0,l._)("div",f,[(0,l.WI)(e.$slots,"header",{},(()=>[(0,l._)("div",h,(0,o.zw)(e.title),1),(0,l._)("div",w,[(0,l.WI)(e.$slots,"headerHandler",{},void 0,!0)])]),!0)]),(0,l.Wm)(s,(0,l.dG)({data:e.listData,border:"",style:{width:"100%"},onSelectionChange:e.handleSelectionChange},e.childrenProps),{default:(0,l.w5)((()=>[e.showIndexColumn?((0,l.wg)(),(0,l.j4)(r,{key:0,type:"selection",align:"center",width:"60"})):(0,l.kq)("",!0),e.showIndexColumn?((0,l.wg)(),(0,l.j4)(r,{key:1,type:"index",label:"序号",align:"center",width:"80"})):(0,l.kq)("",!0),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.propList,(t=>((0,l.wg)(),(0,l.j4)(r,(0,l.dG)({key:t.prop},t,{align:"center","show-overflow-tooltip":""}),{default:(0,l.w5)((a=>[(0,l.WI)(e.$slots,t.slotName,{row:a.row},(()=>[(0,l.Uk)((0,o.zw)(a.row[t.prop]),1)]),!0)])),_:2},1040)))),128))])),_:3},16,["data","onSelectionChange"]),e.showFooter?((0,l.wg)(),(0,l.iD)("div",y,[(0,l.WI)(e.$slots,"footer",{},(()=>[(0,l.Wm)(u,{"current-page":e.page.currentPage,"page-size":e.page.pageSize,"page-sizes":[10,20,30],small:e.small,disabled:e.disabled,background:e.background,layout:"total, sizes, prev, pager, next, jumper",total:e.listCount,onSizeChange:e.handleSizeChange,onCurrentChange:e.handleCurrentChange},null,8,["current-page","page-size","small","disabled","background","total","onSizeChange","onCurrentChange"])]),!0)])):(0,l.kq)("",!0)])}var k=(0,l.aZ)({props:{title:{type:String,default:""},listData:{type:Array,required:!0},listCount:{type:Number,default:0},propList:{type:Array,required:!0},showIndexColumn:{type:Boolean,default:!1},showSelectColumn:{type:Boolean,default:!1},page:{type:Object,default:()=>({currentPage:0,pageSize:10})},childrenProps:{type:Object,default:()=>({})},showFooter:{type:Boolean,default:!0}},emits:["selectionChange","update:page"],setup(e,{emit:t}){const a=e=>{t("selectionChange",e)},l=a=>{t("update:page",{...e.page,pageSize:a})},o=a=>{t("update:page",{...e.page,currentPage:a})};return{handleSelectionChange:a,handleSizeChange:l,handleCurrentChange:o}}}),v=a(89);const b=(0,v.Z)(k,[["render",C],["__scopeId","data-v-12874ad0"]]);var _=b,W=_,D=(0,l.aZ)({components:{HyTable:W},props:{contentTableConfig:{type:Object,required:!0},pageName:{type:String,required:!0}},emits:["newBtnClick","editBtnClick"],setup(e,{emit:t}){const a=(0,c.oR)(),o=m(e.pageName,"create"),n=m(e.pageName,"update"),d=m(e.pageName,"delete"),i=m(e.pageName,"query"),r=(0,p.iH)({currentPage:1,pageSize:10});(0,l.YP)(r,(()=>s()));const s=(t={})=>{i&&a.dispatch("system/getPageListAction",{pageName:e.pageName,queryInfo:{offset:(r.value.currentPage-1)*r.value.pageSize,size:r.value.pageSize,...t}})};s();const u=(0,l.Fl)((()=>a.getters["system/pageListData"](e.pageName))),g=(0,l.Fl)((()=>a.getters["system/pageListCount"](e.pageName))),f=e.contentTableConfig?.propList.filter((e=>"status"!==e.slotName&&("createAt"!==e.slotName&&("updateAt"!==e.slotName&&"handler"!==e.slotName)))),h=t=>{console.log(t),a.dispatch("system/deletePageDataAction",{pageName:e.pageName,id:t.id})},w=()=>{t("newBtnClick")},y=e=>{t("editBtnClick",e)};return{dataList:u,getPageData:s,dataCount:g,pageInfo:r,otherPropSlots:f,isCreate:o,isUpdate:n,isDelete:d,isQuery:i,handleDeleteClick:h,handleNewClick:w,handleEditClick:y}}});const V=(0,v.Z)(D,[["render",u],["__scopeId","data-v-47eb2a98"]]);var I=V,N=I},2220:function(e,t,a){a.d(t,{Z:function(){return h}});var l=a(3396);const o={class:"page-model"},n={class:"dialog-footer"},d=(0,l.Uk)("取消"),i=(0,l.Uk)("确定");function r(e,t,a,r,s,u){const p=(0,l.up)("hy-form"),c=(0,l.up)("el-button"),m=(0,l.up)("el-dialog");return(0,l.wg)(),(0,l.iD)("div",o,[(0,l.Wm)(m,{modelValue:e.dialogVisible,"onUpdate:modelValue":t[2]||(t[2]=t=>e.dialogVisible=t),title:"新建用户",width:"30%",center:"","destroy-on-close":""},{footer:(0,l.w5)((()=>[(0,l._)("span",n,[(0,l.Wm)(c,{onClick:t[1]||(t[1]=t=>e.dialogVisible=!1)},{default:(0,l.w5)((()=>[d])),_:1}),(0,l.Wm)(c,{type:"primary",onClick:e.handleConfirmClick},{default:(0,l.w5)((()=>[i])),_:1},8,["onClick"])])])),default:(0,l.w5)((()=>[(0,l.Wm)(p,(0,l.dG)(e.modalConfig,{modelValue:e.formData,"onUpdate:modelValue":t[0]||(t[0]=t=>e.formData=t)}),null,16,["modelValue"]),(0,l.WI)(e.$slots,"default")])),_:3},8,["modelValue"])])}var s=a(4870),u=a(65),p=a(2645),c=(0,l.aZ)({props:{modalConfig:{type:Object,required:!0},defaultInfo:{type:Object,default:()=>({})},otherInfo:{type:Object,default:()=>({})},pageName:{type:String,required:!0}},components:{HyForm:p.Z},setup(e){const t=(0,s.iH)(!1),a=(0,s.iH)({});(0,l.YP)((()=>e.defaultInfo),(t=>{for(const l of e.modalConfig.formItems)a.value[`${l.field}`]=t[`${l.field}`]}));const o=(0,u.oR)(),n=()=>{t.value=!1,Object.keys(e.defaultInfo).length?o.dispatch("system/editPageDataAction",{pageName:e.pageName,editData:{...a.value,...e.otherInfo},id:e.defaultInfo.id}):(console.log("新建用户"),o.dispatch("system/createPageDataAction",{pageName:e.pageName,newData:{...a.value,...e.otherInfo}}))};return{dialogVisible:t,formData:a,handleConfirmClick:n}}}),m=a(89);const g=(0,m.Z)(c,[["render",r]]);var f=g,h=f},6900:function(e,t,a){a.d(t,{Z:function(){return w}});var l=a(3396);const o=e=>((0,l.dD)("data-v-14b6aea4"),e=e(),(0,l.Cn)(),e),n={class:"page-search"},d=o((()=>(0,l._)("h1",{class:"header"},"高级检索",-1))),i={class:"hanle-btns"},r=(0,l.Uk)("重置"),s=(0,l.Uk)("搜索");function u(e,t,a,o,u,p){const c=(0,l.up)("RefreshRight"),m=(0,l.up)("el-icon"),g=(0,l.up)("el-button"),f=(0,l.up)("Search"),h=(0,l.up)("hy-form");return(0,l.wg)(),(0,l.iD)("div",n,[(0,l.Wm)(h,(0,l.dG)(e.searchFormConfig,{modelValue:e.formData,"onUpdate:modelValue":t[0]||(t[0]=t=>e.formData=t)}),{header:(0,l.w5)((()=>[d])),footer:(0,l.w5)((()=>[(0,l._)("div",i,[(0,l.Wm)(g,{onClick:e.handleResetClick},{default:(0,l.w5)((()=>[(0,l.Wm)(m,null,{default:(0,l.w5)((()=>[(0,l.Wm)(c),r])),_:1})])),_:1},8,["onClick"]),(0,l.Wm)(g,{type:"primary",onClick:e.handleQueryClick},{default:(0,l.w5)((()=>[(0,l.Wm)(m,null,{default:(0,l.w5)((()=>[(0,l.Wm)(f)])),_:1}),s])),_:1},8,["onClick"])])])),_:1},16,["modelValue"])])}var p=a(4870),c=a(2645),m=(0,l.aZ)({props:{searchFormConfig:{type:Object,required:!0}},components:{HyForm:c.Z},emits:["resetBtnClick","queryBtnClick"],setup(e,{emit:t}){const a=e.searchFormConfig?.formItems??[],l={};for(const i of a)l[i.field]="";const o=(0,p.iH)(l),n=()=>{o.value=l,t("resetBtnClick")},d=()=>{t("queryBtnClick",o.value)};return{formData:o,handleResetClick:n,handleQueryClick:d}}}),g=a(89);const f=(0,g.Z)(m,[["render",u],["__scopeId","data-v-14b6aea4"]]);var h=f,w=h},8256:function(e,t,a){a.d(t,{S:function(){return o}});var l=a(4870);function o(e,t){const a=(0,l.iH)(),o=(0,l.iH)({}),n=()=>{o.value={},a.value&&(a.value.dialogVisible=!0),e&&e()},d=e=>{o.value={...e},a.value&&(a.value.dialogVisible=!0),t&&t(e)};return[a,o,n,d]}}}]);
//# sourceMappingURL=160.24e8f3cd.js.map