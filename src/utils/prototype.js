import { http } from './http';
import { sleep } from './index';

const Prototype = function() {};

Prototype.install = (Vue) => {
  Vue.prototype.$http = http;
  Vue.prototype.$sleep = sleep;
}

export default Prototype;