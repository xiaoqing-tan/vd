import { http } from './http';

const Prototype = function() {};

Prototype.install = (Vue) => {
  Vue.prototype.$http = http;
}

export default Prototype;