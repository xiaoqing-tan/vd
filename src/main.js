import Vue from 'vue';
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import './element-variables.scss';
import './assets/normalize.css';
import App from './App.vue';
import router from './router';
import store from './store'
import VCharts from 'v-charts';

require('./mock');

Vue.use(VCharts);

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
