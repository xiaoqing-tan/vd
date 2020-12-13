import Mock from 'mockjs' // 引入mockjs
// const Random = Mock.Random // Mock.Random 是一个工具类，用于生成各种随机数据

const login = {
  username: 'admin',
  password: 'Iamxiaoqing@0',
  token: 'login:ok'
}
 
Mock.mock('/api/login', 'post', login)