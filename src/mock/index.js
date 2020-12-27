import Mock from "mockjs"; // 引入mockjs
// const Random = Mock.Random // Mock.Random 是一个工具类，用于生成各种随机数据

const login = {
  username: "admin",
  password: "Iamxiaoqing@0",
  token: "login:ok",
};

const menu = [
  {
    name: "layout",
    component: "layout",
    path: '/',
    children: [
      {
        name: "首页",
        icon: "el-icon-s-home",
        path: "",
        component: "home",
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
            path: "/setting",
            component: "setting",
          },
        ],
      },
    ],
  },
];

Mock.mock("/api/menu", "get", menu);
Mock.mock("/api/login", "post", login);
