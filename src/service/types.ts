//有外界决定,默认为any
export interface IDataType<T = any> {
  code: number
  data: T
}
