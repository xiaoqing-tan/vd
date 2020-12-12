import Vue from 'vue';
import Router from 'vue-router';
import Layout from './views/Layout';
import Home from './views/Home';
import Charts from './views/components/charts';
import Form from './views/components/form';
import Table from './views/components/table';
import Setting from './views/setting';
import NProgress from 'nprogress';
import store from './store';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });

Vue.use(Router);

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(err => err);
}

const router = new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: '',
          component: Home,
          meta: {
            requiresAuth: true,
            title: '首页'
          }
        },
        {
          path: '/setting',
          component: Setting,
          meta: {
            requiresAuth: true,
            title: '设置'
          }
        },
        {
          path: '/components/form',
          component: Form,
          meta: {
            requiresAuth: true,
            title: '表单'
          }
        },
        {
          path: '/components/charts',
          component: Charts,
          meta: {
            requiresAuth: true,
            title: '图表'
          }
        },
        {
          path: '/components/table',
          component: Table,
          meta: {
            requiresAuth: true,
            title: '表格'
          }
        }
      ]
    },
    {
      path: '/login',
      component: () => import('./views/login/index.vue'),
      meta: {
        title: '登录'
      }
    }
  ]
});

router.afterEach(() => {
  NProgress.done();
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.userInfo.token !== 'login:ok') {
      const userInfo = JSON.parse(window.localStorage.getItem('userInfo') || '{}');
      store.dispatch('setUserInfo', userInfo);
      if (store.state.userInfo.token !== 'login:ok') {
        next({
          path: '/login',
          query: { 
            redirect: to.fullPath 
          }
        })
      } else {
        next();
      }
    } else {
      next()
    }
  } else {
    next();
  }
  document.title = `${to.meta.title} - VD`;
})

export default router;