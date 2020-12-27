/**
 * 生成路由
 * @param {Array} routerlist 格式化路由
 * @returns
 */
export function addRouter(routerlist) {
  const router = []
  try {
    routerlist.forEach(e => {
      let e_new = {
        path: e.path,
        name: e.name,
        component: () => e.component === 'layout' ? import('@/views/Layout.vue') : import(`@/views/${e.component}`)
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
  return router
}
