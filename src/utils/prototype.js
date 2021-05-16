import { http } from './http'
import { sleep, storage, getLocation, reverseGeocoder } from './index'

const Prototype = function() {}

Prototype.install = (Vue) => {
  Vue.prototype.$http = http
  Vue.prototype.$sleep = sleep
  Vue.prototype.$storage = storage
  Vue.prototype.$getLocation = getLocation
  Vue.prototype.$reverseGeocoder = reverseGeocoder
}

export default Prototype
