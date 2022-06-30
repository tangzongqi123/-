export const contentTableConfig = {
  //标题
  title: '部门列表',
  //主要遍历的数据
  propList: [
    {
      prop: 'name',
      label: '部门名称',
      minWidth: '100'
    },
    {
      prop: 'leader',
      label: '部门领导',
      minWidth: '120'
    },
    {
      prop: 'parentId',
      label: '上级部门',
      minWidth: '120'
    },

    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '250',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '250',
      slotName: 'updateAt'
    },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ],
  //控制是否有列的序列号
  showIndexColumn: true,
  //控制是否有选中框
  showSelectColumn: true
}
