/**
 * 生成路由
 * @param {Array} list 格式化路由
 * @returns
 */
export function addRouter(list) {
  const router = [];
  try {
    list.forEach(({ name, path, component, children }) => {
      let item = {
        path,
        name,
        meta: {
          title: name,
        },
        component: () =>
          component === "layout"
            ? import("@/views/Layout.vue")
            : import(`@/views/${component}`),
      };
      if (children) {
        item = {
          ...item,
          children: addRouter(children),
        };
      }
      router.push(item);
    });
  } catch (error) {
    console.error(error);
    return [];
  }
  return router;
}
