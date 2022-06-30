import { IForm } from '@/base-ui/form'
export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '类别名称',
      placeholder: '请输入类别名称'
    }
  ],
  //独占一行
  colLayout: { span: 24 },
  //间距
  itemStyle: {}
}
