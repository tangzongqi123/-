export const contentTableConfig = {
  //标题
  title: '菜单列表',
  //主要遍历的数据
  propList: [
    {
      prop: 'name',
      label: '菜单名称',
      minWidth: '150'
    },
    {
      prop: 'type',
      label: '级别',
      minWidth: '80'
    },
    {
      prop: 'url',
      label: '菜单url',
      minWidth: '120'
    },
    {
      prop: 'icon',
      label: '菜单icon',
      minWidth: '120'
    },
    {
      prop: 'sort',
      label: '排序',
      minWidth: '80'
    },
    {
      prop: 'permission',
      label: '权限',
      minWidth: '150'
    },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '220',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '220',
      slotName: 'updateAt'
    },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ],
  //控制是否有列的序列号
  showIndexColumn: false,
  //控制是否有选中框
  showSelectColumn: false,
  //在配置中设置是否要不要展开
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children'
    }
  },
  //不展示footer
  showFooter: false
}
