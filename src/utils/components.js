// 全局组件注册
import Table from '@/components/Table.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';


const Prototype = function() {};

Prototype.install = (Vue) => {
  Vue.component('vd-table', Table) // 表格
  Vue.component('vd-breadcrumb', Breadcrumb) // 表格
}

export default Prototype;
