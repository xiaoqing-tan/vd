import Mock from 'mockjs' // 引入mockjs
// const Random = Mock.Random // Mock.Random 是一个工具类，用于生成各种随机数据

const login = {
  user: {
    username: 'admin',
    password: 'Iamxiaoqing@0',
    token: 'login:ok'
  },
  menu: [
    {
      name: '组件',
      icon: 'el-icon-coin',
      path: '/components',
      children: [
        {
          name: '表单',
          icon: 'el-icon-bank-card',
          path: '/components/form'
        },
        {
          name: '图表',
          icon: 'el-icon-pie-chart',
          path: '/components/charts'
        },
        {
          name: '表格',
          icon: 'el-icon-s-grid',
          path: '/components/table'
        }
      ]
    },
    {
      name: '设置',
      icon: 'el-icon-setting',
      path: '/setting',
      children: [
        {
          name: '个人信息',
          icon: 'setting',
          path: '/setting'
        },
      ]
    }
  ]
}
 
Mock.mock('/api/login', 'post', login);
Mock.mock('/api/login/index', 'get', login);