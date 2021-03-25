import axios from 'axios'

const baseURL = process.env.NODE_ENV === 'development' ? '/api' : '/api'

const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

// 请求拦截器
instance.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// 处理返回值
instance.interceptors.response.use(response => {
  return response.data
}, error => Promise.reject(httpErrorHandler(error)))

function httpErrorHandler(error) {
  let message = error.message || ''
  // eslint-disable-next-line prefer-const
  let { status, data } = error.response || error
  switch (status) {
    case 400:
      message = '参数类型错误'
      break
    case 401:
      message = '没有权限'
      break
    case 404:
      message = '错误的请求地址'
      break
    case 405:
      message = '错误的请求方法'
      break
    case 500:
    case 501:
    case 502:
    case 503:
      message = '服务器错误'
      break
    case 200:
      message = data.msg
      status = data.code
      break
    default:
      break
  }
  return {
    message,
    status,
    data: data || undefined
  }
}

function get(url, option, config = {}) {
  // 对请求参数编码
  return instance.get(url, { params: option }, config)
}

/**
 *
 * @param url 请求链接
 * @param params 请求参数
 * @param showToast 是否显示请求成功后Toast提醒
 */
function post(url, option, config = {}) {
  return instance.post(url, option, {
    ...config
  })
}

export const http = {
  get,
  post
}
