class LocalCache {
  setCache(key: string, value: any) {
    //本地的value为string类型,我们的value可能是对象,需要转换
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  getCache(key: string) {
    const value = window.localStorage.getItem(key)
    if (value) {
      //转为对象
      return JSON.parse(value)
    }
  }

  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }

  clearCache() {
    window.localStorage.clear()
  }
}
export default new LocalCache()
