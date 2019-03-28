import request from '@/utils/request'

// 拉取用户列表
export const getUserList = ({ pagenum = 1, pagesize = 10 }) => {
  return request({
    method: 'get',
    url: '/users',
    params: {
      pagenum,
      pagesize
    }
  }).then(res => res.data)
}

// 添加用户
export const addUser = ({ username, password, email, mobile }) => {
  return request({
    method: 'post',
    url: '/users',
    data: {
      username,
      password,
      email,
      mobile
    }
  }).then(res => res.data)
}
