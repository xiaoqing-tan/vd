import Vue from "vue";
import Router from "vue-router";
import NProgress from "nprogress";
import store from "@/store";
import { addRouter } from "@/utils/addRouter";
import { getMenu } from "@/api";
import "nprogress/nprogress.css";

NProgress.configure({
  showSpinner: false,
});

Vue.use(Router);

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};

const router = new Router({
  routes: [
    {
      path: "/login",
      component: () => import("./views/login/index.vue"),
      meta: {
        title: "登录",
      },
    },
  ],
});

router.afterEach((to) => {
  NProgress.done();
  document.title = `${to.meta.title} - VD`;
});

const whiteList = ["/login"];

router.beforeEach(async (to, from, next) => {
  const { userData, menu } = store.state;
  NProgress.start();
  if (userData.token === "login:ok") {
    if (menu.length) {
      next();
    } else {
      const menu = await getMenu();
      router.addRoutes(addRouter(menu));
      store.dispatch("setMenu", menu);
      console.log(to)
      next({ ...to, replace: true }); 
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      if (to.path !== "/login") {
        next({
          path: "/login",
          query: {
            redirect: to.fullPath,
          },
        });
      } else {
        next();
      }
    }
  }
  // if (to.matched.some((record) => record.meta.requiresAuth)) {
  // } else {
  //   next();
  // }
});

export default router;
