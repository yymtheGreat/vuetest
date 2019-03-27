import request from '@/utils/request'

export const getUserList = ({ pagenum = 1, pagesize = 5 }) => {
  return request({
    method: 'get',
    url: '/users',
    params: {
      pagenum,
      pagesize
    }
  }).then(res => res.data)
}
