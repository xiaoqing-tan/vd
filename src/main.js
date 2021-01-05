import Vue from 'vue';
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import '@/element-variables.scss';
import '@/assets/normalize.css';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store'
import VCharts from 'v-charts';
import prototype from '@/utils/prototype';
import '@/components/index';

require('./mock');

Vue.use(VCharts);
Vue.use(prototype);
// Vue.use(components);

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
