import Vue from 'vue';
import Router from 'vue-router';
import Layout from './views/Layout';

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
          component: () => import(/* webpackChunkName: "page" */ './views/Home.vue'),
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/setting',
          component: import(/* webpackChunkName: "setting" */ './views/setting'),
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/components/form',
          component: import(/* webpackChunkName: "components" */ './views/components/form'),
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/components/charts',
          component: import(/* webpackChunkName: "components" */ './views/components/charts'),
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/components/table',
          component: import(/* webpackChunkName: "components" */ './views/components/table'),
          meta: {
            requiresAuth: true
          }
        }
      ]
    },
    {
      path: '/login',
      component: () => import(/* webpackChunkName: "page" */ './views/login/index.vue')
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