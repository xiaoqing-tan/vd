import Vue from 'vue';
import Router from 'vue-router';
import Layout from './views/Layout';
import Home from './views/Home';
import Charts from './views/components/charts';
import Form from './views/components/form';
import Table from './views/components/table';
import Setting from './views/setting';

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
        requiresAuth: true
      },
      children: [
        {
          path: '',
          component: Home,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/setting',
          component: Setting,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/components/form',
          component: Form,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/components/charts',
          component: Charts,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/components/table',
          component: Table,
          meta: {
            requiresAuth: true
          }
        }
      ]
    },
    {
      path: '/login',
      component: () => import('./views/login/index.vue')
    }
  ]
});

router.beforeEach((to, from, next) => {
  const status = window.localStorage.getItem('status');
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (status === '1') {
      next();
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next();
  }
})

export default router;