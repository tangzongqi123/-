let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = ''
} else {
  BASE_URL = 'http://codewhy.org/test'
}

export { BASE_URL, TIME_OUT }

/**
 * 语法规范:
 *let name=''
 *export name 是不允许的

 export{name}允许 {}不是对象,是导出的特殊语法

 export const name='' 允许
 */
