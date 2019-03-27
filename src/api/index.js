import request from '@/utils/request'

export const login = (data) => {
  return request({
    method: 'POST',
    url: '/login',
    data: {
      username: data.username,
      password: data.password
    }
  }).then(res => {
    return res.data
  })
}
