import Mock from "mockjs"; // 引入mockjs
// const Random = Mock.Random // Mock.Random 是一个工具类，用于生成各种随机数据

const login = {
  username: "admin",
  password: "Iamxiaoqing@0",
  token: "login:ok",
};

const menu1 = [
  {
    component: "layout",
    path: '/',
    children: [
      {
        name: "首页",
        icon: "el-icon-s-home",
        path: "",
        component: "home",
        type: 'top'
      },
      {
        name: "组件",
        icon: "el-icon-coin",
        path: "/components",
        component: "components",
        children: [
          {
            name: "表单",
            icon: "el-icon-bank-card",
            path: "/components/form",
            component: "components/form",
          },
          {
            name: "图表",
            icon: "el-icon-pie-chart",
            path: "/components/charts",
            component: "components/charts",
          },
          {
            name: "表格",
            icon: "el-icon-s-grid",
            path: "/components/table",
            component: "components/table",
          },
          {
            name: "图标",
            icon: "el-icon-picture-outline",
            path: "/components/icons",
            component: "components/icons",
          },
        ],
      },
      {
        name: "设置",
        icon: "el-icon-s-tools",
        path: "/setting",
        component: "setting",
        children: [
          {
            name: "个人信息",
            icon: "el-icon-user-solid",
            path: "/setting/user",
            component: "setting/user",
          },
          {
            name: "角色",
            icon: "el-icon-s-operation",
            path: "/setting/role",
            component: "setting/role",
          },
        ],
      },
    ],
  },
];


const menu2 = [
  {
    component: "layout",
    path: '/',
    children: [
      {
        name: "首页",
        icon: "el-icon-s-home",
        path: "",
        component: "home",
        type: 'top'
      },
      {
        name: "设置",
        icon: "el-icon-s-tools",
        path: "/setting",
        component: "setting",
        children: [
          {
            name: "个人信息",
            icon: "el-icon-user-solid",
            path: "/setting/user",
            component: "setting/user",
          },
          {
            name: "角色",
            icon: "el-icon-s-operation",
            path: "/setting/role",
            component: "setting/role",
          },
        ],
      },
    ],
  },
];

Mock.mock("/api/menu?role=1", "get", menu1);
Mock.mock("/api/menu?role=2", "get", menu2);
Mock.mock("/api/login", "post", login);
