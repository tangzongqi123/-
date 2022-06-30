export const rules = {
  //数组里面传入2个规则
  name: [
    {
      //要求必须传值
      required: true,
      //提示的内容
      message: '用户名是必传的内容',
      //失去焦点回调
      trigger: 'blur'
    },
    {
      //正则
      //5-10个字母或者数字
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名必须是5-10个字母或者数字',
      trigger: 'blur'
    }
  ],
  password: [
    {
      //要求必须传值
      required: true,
      //提示的内容
      message: '密码是必传的内容',
      //失去焦点回调
      trigger: 'blur'
    },
    {
      //正则
      //5-10个字母或者数字
      //3, 3位以上
      pattern: /^[a-z0-9]{3,}$/,
      message: '用户名必须是3位以上的字母或者数字',
      trigger: 'blur'
    }
  ]
}
