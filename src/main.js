import Vue from 'vue'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import '@/element-variables.scss'
import '@/assets/normalize.css'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import VCharts from 'v-charts'
import VueAMap from 'vue-amap'
import prototype from '@/utils/prototype'
import '@/components/index'

require('./mock')

Vue.use(VCharts)
Vue.use(prototype)
Vue.use(ElementUI)
Vue.use(VueAMap)
Vue.config.productionTip = false

VueAMap.initAMapApiLoader({
  key: '64930a44b31287acecc825aab7fa503c',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  v: '1.4.4'
})

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
