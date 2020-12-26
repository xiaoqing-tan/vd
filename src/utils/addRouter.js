/**
 * 生成路由
 * @param {Array} routerlist 格式化路由
 * @returns
 */
export function addRouter(routerlist) {
  console.log(routerlist)
  const router = []
  try {
    routerlist.forEach(e => {
      let e_new = {
        path: e.path,
        name: e.name,
        component: import(`@/views/${e.component}/index`)
      }
      if (e.children) {
        const children = addRouter(e.children)
        // 保存权限
        e_new = { ...e_new, children: children }
      }
      router.push(e_new)
    })
  } catch (error) {
    console.error(error)
    return []
  }
  return {
    path: "/",
    component: import('@/views/Layout.vue'),
    meta: {
      requiresAuth: true,
    },
    children: router
  }
}
