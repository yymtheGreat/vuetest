import request from '@/utils/request'

// 拉取用户列表
export const getUserList = ({ pagenum, pagesize, query}) => {
  return request({
    method: 'get',
    url: '/users',
    params: {
      pagenum,
      pagesize,
      query
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

// 更改用户状态
export const changeState = (id, state) => request({
  method: 'put',
  url: `/users/${id}/state/${state}`
}).then(res => res.data)

// 删除用户
export const deleteUser = (id) => {
  return request({
    method: 'delete',
    url: `users/${id}`
  }).then(res => res.data)
}
// 编辑用户
export const changeUser = ({ email, mobile, id }) => {
  return request({
    method: 'put',
    url: `users/${id}`,
    data: {
      email,
      mobile
    }
  }).then(res => res.data)
}

// 获取用户数据
export const getUser = ({ id }) => {
  return request({
    method: 'get',
    url: `users/${id}`
  }).then(res => res.data)
}
