export default class Storage {
  constructor(type = 'localStorage') {
    this.type = type
  }
  get(key) {
    try {
      const val = window[this.type].getItem(key)
      if (val) {
        return JSON.parse(val)
      } else {
        return ''
      }
    } catch (e) {
      console.error(`从Storage获取${key}失败: `, e)
      return ''
    }
  }
  set(key, val) {
    try {
      window[this.type].setItem(key, JSON.stringify(val))
      return true
    } catch (e) {
      console.error(`向Storage存放${key}失败: `, e)
      return false
    }
  }
  remove(key) {
    try {
      window[this.type].removeItem(key)
      return true
    } catch (e) {
      console.error(`从Storage删除${key}失败: `, e)
      return false
    }
  }
  clear() {
    try {
      window[this.type].clear()
      return true
    } catch (e) {
      console.error(`清空Storage失败: `, e)
      return false
    }
  }
}
