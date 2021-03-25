import { http } from './http'
import { sleep, storage } from './index'

const Prototype = function() {}

Prototype.install = (Vue) => {
  Vue.prototype.$http = http
  Vue.prototype.$sleep = sleep
  Vue.prototype.$storage = storage
}

export default Prototype
