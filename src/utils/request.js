// 封装的请求模块
import axios from 'axios'
import router from '@/router'
// 网页搜索axios，查找关键字create
const http = axios.create({
  baseURL: 'http://localhost:8888/api/private/v1/'
})
// Add a request interceptor请求拦截器
http.interceptors.request.use(function (config) {
  // Do something before request is sent
  if (config.url !== '/login') {
    config.headers.Authorization = window.localStorage.getItem('token')
  }
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor相应拦截器
http.interceptors.response.use(function (response) {
  // Do something with response data
  if (response.data.meta.status === 401) {
    router.replace('/login')
  }
  return response
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

export default http
