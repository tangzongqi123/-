export const rules = {
  //数组里面传入2个规则
  num: [
    {
      //要求必须传值
      required: true,
      //提示的内容
      message: '手机号是必传的内容',
      //失去焦点回调
      trigger: 'blur'
    },
    {
      //正则
      //11位数字
      pattern: /^[0-9]{10}$/,
      message: '用户名必须是10个数字',
      trigger: 'blur'
    }
  ],
  code: [
    {
      //要求必须传值
      required: true,
      //提示的内容
      message: '请输入正确的验证码',
      //失去焦点回调
      trigger: 'blur'
    },
    {
      //正则
      //5-10个字母或者数字
      //3, 3位以上
      pattern: /^[a-z0-9]{4}$/,
      message: '验证码必须是4位的字母或者数字',
      trigger: 'blur'
    }
  ]
}
